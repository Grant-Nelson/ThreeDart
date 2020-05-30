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
a[c]=function(){a[c]=function(){H.pc(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.l3"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.l3"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.l3(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={kL:function kL(){},
k9:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
nc:function(a,b,c,d){if(!!J.Q(a).$it)return new H.fn(a,b,[c,d])
return new H.c8(a,b,[c,d])},
fJ:function(){return new P.ck("No element")},
n1:function(){return new P.ck("Too many elements")},
nz:function(a,b){var u=J.aj(a)
if(typeof u!=="number")return u.K()
H.dv(a,0,u-1,b)},
dv:function(a,b,c,d){if(c-b<=32)H.ny(a,b,c,d)
else H.nx(a,b,c,d)},
ny:function(a,b,c,d){var u,t,s,r,q,p
for(u=b+1,t=J.bo(a);u<=c;++u){s=t.h(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.h(a,r-1),s)
if(typeof q!=="number")return q.a2()
q=q>0}else q=!1
if(!q)break
p=r-1
t.m(a,r,t.h(a,p))
r=p}t.m(a,r,s)}},
nx:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j=C.c.a4(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.a4(a4+a5,2),f=g-j,e=g+j,d=J.bo(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.a2()
if(a2>0){u=b
b=c
c=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a2()
if(a2>0){u=a1
a1=a0
a0=u}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.a2()
if(a2>0){u=a
a=c
c=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a2()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.a2()
if(a2>0){u=a0
a0=c
c=u}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.a2()
if(a2>0){u=a0
a0=a
a=u}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.a2()
if(a2>0){u=a1
a1=b
b=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a2()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a2()
if(a2>0){u=a1
a1=a0
a0=u}d.m(a3,i,c)
d.m(a3,g,a)
d.m(a3,h,a1)
d.m(a3,f,d.h(a3,a4))
d.m(a3,e,d.h(a3,a5))
t=a4+1
s=a5-1
if(J.A(a6.$2(b,a0),0)){for(r=t;r<=s;++r){q=d.h(a3,r)
p=a6.$2(q,b)
if(p===0)continue
if(typeof p!=="number")return p.O()
if(p<0){if(r!==t){d.m(a3,r,d.h(a3,t))
d.m(a3,t,q)}++t}else for(;!0;){p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.a2()
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
if(typeof k!=="number")return k.a2()
if(k>0)for(;!0;){p=a6.$2(d.h(a3,s),a0)
if(typeof p!=="number")return p.a2()
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
H.dv(a3,a4,t-2,a6)
H.dv(a3,s+2,a5,a6)
if(m)return
if(t<i&&s>h){for(;J.A(a6.$2(d.h(a3,t),b),0);)++t
for(;J.A(a6.$2(d.h(a3,s),a0),0);)--s
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
break}}H.dv(a3,t,s,a6)}else H.dv(a3,t,s,a6)},
o:function o(a){this.a=a},
t:function t(){},
dd:function dd(){},
be:function be(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c8:function c8(a,b,c){this.a=a
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
cv:function cv(a,b,c){this.a=a
this.b=b
this.$ti=c},
j8:function j8(a,b){this.a=a
this.b=b},
d4:function d4(){},
iI:function iI(){},
dK:function dK(){},
mU:function(){throw H.c(P.z("Cannot modify unmodifiable Map"))},
cN:function(a){var u,t=H.pe(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
oW:function(a){return v.types[a]},
me:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.Q(a).$iB},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a5(a)
if(typeof u!=="string")throw H.c(H.ah(a))
return u},
ch:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
np:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.d(p,3)
u=p[3]
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.a_(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.a.G(s,q)|32)>t)return}return parseInt(a,b)},
ci:function(a){return H.ng(a)+H.m1(H.cM(a),0,null)},
ng:function(a){var u,t,s,r,q,p,o,n=J.Q(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.Q||!!n.$ibH){r=C.t(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cN(t.length>1&&C.a.G(t,0)===36?C.a.a6(t,1):t)},
nh:function(){if(!!self.location)return self.location.href
return},
ly:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
nq:function(a){var u,t,s,r=H.b([],[P.w])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.n)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ah(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.aN(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.c(H.ah(s))}return H.ly(r)},
lz:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ah(s))
if(s<0)throw H.c(H.ah(s))
if(s>65535)return H.nq(a)}return H.ly(a)},
nr:function(a,b,c){var u,t,s,r
if(typeof c!=="number")return c.iq()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
if(s<c)r=s
else r=c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
bC:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.aN(u,10))>>>0,56320|u&1023)}}throw H.c(P.a_(a,0,1114111,null,null))},
bB:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
no:function(a){var u=H.bB(a).getFullYear()+0
return u},
nm:function(a){var u=H.bB(a).getMonth()+1
return u},
ni:function(a){var u=H.bB(a).getDate()+0
return u},
nj:function(a){var u=H.bB(a).getHours()+0
return u},
nl:function(a){var u=H.bB(a).getMinutes()+0
return u},
nn:function(a){var u=H.bB(a).getSeconds()+0
return u},
nk:function(a){var u=H.bB(a).getMilliseconds()+0
return u},
u:function(a){throw H.c(H.ah(a))},
d:function(a,b){if(a==null)J.aj(a)
throw H.c(H.bR(a,b))},
bR:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ao(!0,b,s,null)
u=J.aj(a)
if(!(b<0)){if(typeof u!=="number")return H.u(u)
t=b>=u}else t=!0
if(t)return P.M(b,a,s,null,u)
return P.dr(b,s)},
oQ:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bD(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bD(a,c,!0,b,"end",u)
return new P.ao(!0,b,"end",null)},
ah:function(a){return new P.ao(!0,a,null,null)},
oL:function(a){if(typeof a!=="number")throw H.c(H.ah(a))
return a},
c:function(a){var u
if(a==null)a=new P.dn()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.mk})
u.name=""}else u.toString=H.mk
return u},
mk:function(){return J.a5(this.dartException)},
m:function(a){throw H.c(a)},
n:function(a){throw H.c(P.aO(a))},
aI:function(a){var u,t,s,r,q,p
a=H.mi(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iv(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iw:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
lI:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lv:function(a,b){return new H.hx(a,b==null?null:b.method)},
kM:function(a,b){var u=b==null,t=u?null:b.method
return new H.fO(a,t,u?null:b.receiver)},
ai:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.kx(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.aN(t,16)&8191)===10)switch(s){case 438:return f.$1(H.kM(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.lv(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.mn()
q=$.mo()
p=$.mp()
o=$.mq()
n=$.mt()
m=$.mu()
l=$.ms()
$.mr()
k=$.mw()
j=$.mv()
i=r.af(u)
if(i!=null)return f.$1(H.kM(u,i))
else{i=q.af(u)
if(i!=null){i.method="call"
return f.$1(H.kM(u,i))}else{i=p.af(u)
if(i==null){i=o.af(u)
if(i==null){i=n.af(u)
if(i==null){i=m.af(u)
if(i==null){i=l.af(u)
if(i==null){i=o.af(u)
if(i==null){i=k.af(u)
if(i==null){i=j.af(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.lv(u,i))}}return f.$1(new H.iH(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dx()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.ao(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dx()
return a},
l6:function(a){var u
if(a==null)return new H.eo(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eo(a)},
oU:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.m(0,a[u],a[t])}return b},
p1:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.l("Unsupported number of arguments for wrapped closure"))},
bQ:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.p1)
a.$identity=u
return u},
mT:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.i6().constructor.prototype):Object.create(new H.bW(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.au
if(typeof t!=="number")return t.w()
$.au=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.lm(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.mP(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.lm(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
mP:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.oW,a)
if(typeof a=="function")if(b)return a
else{u=c?H.ll:H.kA
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.c("Error in functionType of tearoff")},
mQ:function(a,b,c,d){var u=H.kA
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lm:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mS(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mQ(t,!r,u,b)
if(t===0){r=$.au
if(typeof r!=="number")return r.w()
$.au=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bX
return new Function(r+H.e(q==null?$.bX=H.f2("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.au
if(typeof r!=="number")return r.w()
$.au=r+1
o+=r
r="return function("+o+"){return this."
q=$.bX
return new Function(r+H.e(q==null?$.bX=H.f2("self"):q)+"."+H.e(u)+"("+o+");}")()},
mR:function(a,b,c,d){var u=H.kA,t=H.ll
switch(b?-1:a){case 0:throw H.c(H.nv("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
mS:function(a,b){var u,t,s,r,q,p,o,n=$.bX
if(n==null)n=$.bX=H.f2("self")
u=$.lk
if(u==null)u=$.lk=H.f2("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.mR(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.au
if(typeof u!=="number")return u.w()
$.au=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.au
if(typeof u!=="number")return u.w()
$.au=u+1
return new Function(n+u+"}")()},
l3:function(a,b,c,d,e,f,g){return H.mT(a,b,c,d,!!e,!!f,g)},
kA:function(a){return a.a},
ll:function(a){return a.c},
f2:function(a){var u,t,s,r=new H.bW("self","target","receiver","name"),q=J.kJ(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
p7:function(a,b){throw H.c(H.mO(a,H.cN(b.substring(2))))},
r:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.Q(a)[b]
else u=!0
if(u)return a
H.p7(a,b)},
oS:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
mO:function(a,b){return new H.f3("CastError: "+P.kH(a)+": type '"+H.e(H.oH(a))+"' is not a subtype of type '"+b+"'")},
oH:function(a){var u,t=J.Q(a)
if(!!t.$ibY){u=H.oS(t)
if(u!=null)return H.p8(u)
return"Closure"}return H.ci(a)},
pc:function(a){throw H.c(new P.ff(a))},
nv:function(a){return new H.hQ(a)},
mc:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
cM:function(a){if(a==null)return
return a.$ti},
pP:function(a,b,c){return H.ku(a["$a"+H.e(c)],H.cM(b))},
oV:function(a,b,c,d){var u=H.ku(a["$a"+H.e(c)],H.cM(b))
return u==null?null:u[d]},
l5:function(a,b,c){var u=H.ku(a["$a"+H.e(b)],H.cM(a))
return u==null?null:u[c]},
aL:function(a,b){var u=H.cM(a)
return u==null?null:u[b]},
p8:function(a){return H.bn(a,null)},
bn:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cN(a[0].name)+H.m1(a,1,b)
if(typeof a=="function")return H.cN(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.e(b[t])}if('func' in a)return H.oc(a,b)
if('futureOr' in a)return"FutureOr<"+H.bn("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
oc:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.b([],[P.h])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.d(a0,m)
p=C.a.w(p,a0[m])
l=u[q]
if(l!=null&&l!==P.a2)p+=" extends "+H.bn(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bn(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bn(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bn(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.oT(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.bn(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
m1:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.T("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bn(p,c)}return"<"+u.i(0)+">"},
ku:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
pN:function(a,b,c){return a.apply(b,H.ku(J.Q(b)["$a"+H.e(c)],H.cM(b)))},
pO:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
p4:function(a){var u,t,s,r,q=$.md.$1(a),p=$.k7[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kd[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.m6.$2(a,q)
if(q!=null){p=$.k7[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kd[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kq(u)
$.k7[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kd[q]=u
return u}if(s==="-"){r=H.kq(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.mg(a,u)
if(s==="*")throw H.c(P.iG(q))
if(v.leafTags[q]===true){r=H.kq(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.mg(a,u)},
mg:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.l8(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kq:function(a){return J.l8(a,!1,null,!!a.$iB)},
p5:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kq(u)
else return J.l8(u,c,null,null)},
p_:function(){if(!0===$.l7)return
$.l7=!0
H.p0()},
p0:function(){var u,t,s,r,q,p,o,n
$.k7=Object.create(null)
$.kd=Object.create(null)
H.oZ()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.mh.$1(q)
if(p!=null){o=H.p5(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
oZ:function(){var u,t,s,r,q,p,o=C.F()
o=H.bP(C.G,H.bP(C.H,H.bP(C.u,H.bP(C.u,H.bP(C.I,H.bP(C.J,H.bP(C.K(C.t),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.md=new H.ka(r)
$.m6=new H.kb(q)
$.mh=new H.kc(p)},
bP:function(a,b){return a(b)||b},
n5:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.c(P.U("Illegal RegExp pattern ("+String(p)+")",a,null))},
pa:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
oR:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mi:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lb:function(a,b,c){var u=H.pb(a,b,c)
return u},
pb:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.mi(b),'g'),H.oR(c))},
f8:function f8(){},
f9:function f9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iv:function iv(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hx:function hx(a,b){this.a=a
this.b=b},
fO:function fO(a,b,c){this.a=a
this.b=b
this.c=c},
iH:function iH(a){this.a=a},
kx:function kx(a){this.a=a},
eo:function eo(a){this.a=a
this.b=null},
bY:function bY(){},
ie:function ie(){},
i6:function i6(){},
bW:function bW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f3:function f3(a){this.a=a},
hQ:function hQ(a){this.a=a},
H:function H(a){var _=this
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
ka:function ka(a){this.a=a},
kb:function kb(a){this.a=a},
kc:function kc(a){this.a=a},
fM:function fM(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bN:function(a){return a},
nf:function(a){return new Int8Array(a)},
aJ:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bR(b,a))},
oa:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.oQ(a,b,c))
return b},
cd:function cd(){},
bg:function bg(){},
di:function di(){},
ce:function ce(){},
dj:function dj(){},
hp:function hp(){},
hq:function hq(){},
hr:function hr(){},
hs:function hs(){},
ht:function ht(){},
dk:function dk(){},
cf:function cf(){},
cz:function cz(){},
cA:function cA(){},
cB:function cB(){},
cC:function cC(){},
oT:function(a){return J.lr(a?Object.keys(a):[],null)},
pe:function(a){return v.mangledGlobalNames[a]},
p6:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
l8:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
k8:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.l7==null){H.p_()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.iG("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.lc()]
if(r!=null)return r
r=H.p4(a)
if(r!=null)return r
if(typeof a=="function")return C.S
u=Object.getPrototypeOf(a)
if(u==null)return C.A
if(u===Object.prototype)return C.A
if(typeof s=="function"){Object.defineProperty(s,$.lc(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
n2:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.kz(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.a_(a,0,4294967295,"length",null))
return J.lr(new Array(a),b)},
lr:function(a,b){return J.kJ(H.b(a,[b]))},
kJ:function(a){a.fixed$length=Array
return a},
n3:function(a,b){return J.cQ(a,b)},
Q:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d8.prototype
return J.d7.prototype}if(typeof a=="string")return J.bc.prototype
if(a==null)return J.d9.prototype
if(typeof a=="boolean")return J.fL.prototype
if(a.constructor==Array)return J.bb.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bd.prototype
return a}if(a instanceof P.a2)return a
return J.k8(a)},
bo:function(a){if(typeof a=="string")return J.bc.prototype
if(a==null)return a
if(a.constructor==Array)return J.bb.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bd.prototype
return a}if(a instanceof P.a2)return a
return J.k8(a)},
eN:function(a){if(a==null)return a
if(a.constructor==Array)return J.bb.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bd.prototype
return a}if(a instanceof P.a2)return a
return J.k8(a)},
mb:function(a){if(typeof a=="number")return J.c5.prototype
if(typeof a=="string")return J.bc.prototype
if(a==null)return a
if(!(a instanceof P.a2))return J.bH.prototype
return a},
cL:function(a){if(typeof a=="string")return J.bc.prototype
if(a==null)return a
if(!(a instanceof P.a2))return J.bH.prototype
return a},
bT:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bd.prototype
return a}if(a instanceof P.a2)return a
return J.k8(a)},
A:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.Q(a).t(a,b)},
le:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mb(a).q(a,b)},
bV:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.me(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bo(a).h(a,b)},
ky:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.me(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.eN(a).m(a,b,c)},
mF:function(a,b){return J.cL(a).G(a,b)},
mG:function(a,b,c){return J.bT(a).fQ(a,b,c)},
mH:function(a,b,c,d){return J.bT(a).ha(a,b,c,d)},
mI:function(a,b){return J.cL(a).Y(a,b)},
cQ:function(a,b){return J.mb(a).aR(a,b)},
eQ:function(a,b){return J.eN(a).L(a,b)},
mJ:function(a,b,c,d){return J.bT(a).hA(a,b,c,d)},
lf:function(a,b){return J.eN(a).H(a,b)},
mK:function(a){return J.bT(a).ghg(a)},
lg:function(a){return J.bT(a).gc3(a)},
cR:function(a){return J.Q(a).gJ(a)},
aM:function(a){return J.eN(a).gT(a)},
aj:function(a){return J.bo(a).gl(a)},
lh:function(a){return J.eN(a).i5(a)},
mL:function(a,b){return J.bT(a).i9(a,b)},
mM:function(a,b,c){return J.cL(a).u(a,b,c)},
mN:function(a){return J.cL(a).ij(a)},
a5:function(a){return J.Q(a).i(a)},
a:function a(){},
fL:function fL(){},
d9:function d9(){},
da:function da(){},
hB:function hB(){},
bH:function bH(){},
bd:function bd(){},
bb:function bb(a){this.$ti=a},
kK:function kK(a){this.$ti=a},
ad:function ad(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c5:function c5(){},
d8:function d8(){},
d7:function d7(){},
bc:function bc(){}},P={
nL:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.oI()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bQ(new P.ja(s),1)).observe(u,{childList:true})
return new P.j9(s,u,t)}else if(self.setImmediate!=null)return P.oJ()
return P.oK()},
nM:function(a){self.scheduleImmediate(H.bQ(new P.jb(a),0))},
nN:function(a){self.setImmediate(H.bQ(new P.jc(a),0))},
nO:function(a){P.kR(C.n,a)},
kR:function(a,b){var u=C.c.a4(a.a,1000)
return P.nV(u<0?0:u,b)},
lH:function(a,b){var u=C.c.a4(a.a,1000)
return P.nW(u<0?0:u,b)},
nV:function(a,b){var u=new P.eu()
u.ex(a,b)
return u},
nW:function(a,b){var u=new P.eu()
u.ey(a,b)
return u},
pK:function(a){return new P.bJ(a,1)},
nR:function(){return C.Z},
nS:function(a){return new P.bJ(a,3)},
of:function(a,b){return new P.jF(a,[b])},
oB:function(){var u,t
for(;u=$.bO,u!=null;){$.cK=null
t=u.b
$.bO=t
if(t==null)$.cJ=null
u.a.$0()}},
oG:function(){$.l1=!0
try{P.oB()}finally{$.cK=null
$.l1=!1
if($.bO!=null)$.ld().$1(P.m7())}},
oE:function(a){var u=new P.dR(a)
if($.bO==null){$.bO=$.cJ=u
if(!$.l1)$.ld().$1(P.m7())}else $.cJ=$.cJ.b=u},
oF:function(a){var u,t,s=$.bO
if(s==null){P.oE(a)
$.cK=$.cJ
return}u=new P.dR(a)
t=$.cK
if(t==null){u.b=s
$.bO=$.cK=u}else{u.b=t.b
$.cK=t.b=u
if(u.b==null)$.cJ=u}},
lG:function(a,b){var u=$.at
if(u===C.f)return P.kR(a,b)
return P.kR(a,u.hh(b))},
nC:function(a,b){var u=$.at
if(u===C.f)return P.lH(a,b)
return P.lH(a,u.dh(b,P.dE))},
m2:function(a,b,c,d,e){var u={}
u.a=d
P.oF(new P.k0(u,e))},
oC:function(a,b,c,d){var u,t=$.at
if(t===c)return d.$0()
$.at=c
u=t
try{t=d.$0()
return t}finally{$.at=u}},
oD:function(a,b,c,d,e){var u,t=$.at
if(t===c)return d.$1(e)
$.at=c
u=t
try{t=d.$1(e)
return t}finally{$.at=u}},
ja:function ja(a){this.a=a},
j9:function j9(a,b,c){this.a=a
this.b=b
this.c=c},
jb:function jb(a){this.a=a},
jc:function jc(a){this.a=a},
eu:function eu(){this.c=0},
jJ:function jJ(a,b){this.a=a
this.b=b},
jI:function jI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bJ:function bJ(a,b){this.a=a
this.b=b},
bK:function bK(a){var _=this
_.a=a
_.d=_.c=_.b=null},
jF:function jF(a,b){this.a=a
this.$ti=b},
dR:function dR(a){this.a=a
this.b=null},
dz:function dz(){},
i9:function i9(){},
dE:function dE(){},
jS:function jS(){},
k0:function k0(a,b){this.a=a
this.b=b},
jq:function jq(){},
jr:function jr(a,b){this.a=a
this.b=b},
js:function js(a,b,c){this.a=a
this.b=b
this.c=c},
n7:function(a,b){return new H.H([a,b])},
kN:function(a,b){return new H.H([a,b])},
n9:function(a){return H.oU(a,new H.H([null,null]))},
c7:function(a){return new P.jn([a])},
kX:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
nU:function(a,b){var u=new P.e5(a,b)
u.c=a.e
return u},
n0:function(a,b,c){var u,t
if(P.l2(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.h])
$.ab.push(a)
try{P.oe(a,u)}finally{if(0>=$.ab.length)return H.d($.ab,-1)
$.ab.pop()}t=P.lE(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
kI:function(a,b,c){var u,t
if(P.l2(a))return b+"..."+c
u=new P.T(b)
$.ab.push(a)
try{t=u
t.a=P.lE(t.a,a,", ")}finally{if(0>=$.ab.length)return H.d($.ab,-1)
$.ab.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
l2:function(a){var u,t
for(u=$.ab.length,t=0;t<u;++t)if(a===$.ab[t])return!0
return!1},
oe:function(a,b){var u,t,s,r,q,p,o,n=a.gT(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.v())return
u=H.e(n.gE(n))
b.push(u)
m+=u.length+2;++l}if(!n.v()){if(l<=5)return
if(0>=b.length)return H.d(b,-1)
t=b.pop()
if(0>=b.length)return H.d(b,-1)
s=b.pop()}else{r=n.gE(n);++l
if(!n.v()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.d(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gE(n);++l
for(;n.v();r=q,q=p){p=n.gE(n);++l
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
n8:function(a,b,c){var u=P.n7(b,c)
a.H(0,new P.fV(u))
return u},
ls:function(a,b){var u,t,s=P.c7(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.n)(a),++t)s.n(0,a[t])
return s},
kP:function(a){var u,t={}
if(P.l2(a))return"{...}"
u=new P.T("")
try{$.ab.push(a)
u.a+="{"
t.a=!0
J.lf(a,new P.h_(t,u))
u.a+="}"}finally{if(0>=$.ab.length)return H.d($.ab,-1)
$.ab.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jn:function jn(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jo:function jo(a){this.a=a
this.c=this.b=null},
e5:function e5(a,b){var _=this
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
jK:function jK(){},
h0:function h0(){},
dL:function dL(a,b){this.a=a
this.$ti=b},
ju:function ju(){},
e6:function e6(){},
eA:function eA(){},
nF:function(a,b,c,d){if(b instanceof Uint8Array)return P.nG(!1,b,c,d)
return},
nG:function(a,b,c,d){var u,t,s=$.mx()
if(s==null)return
u=0===c
if(u&&!0)return P.kU(s,b)
t=b.length
d=P.aY(c,d,t)
if(u&&d===t)return P.kU(s,b)
return P.kU(s,b.subarray(c,d))},
kU:function(a,b){if(P.nI(b))return
return P.nJ(a,b)},
nJ:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ai(t)}return},
nI:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
nH:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ai(t)}return},
m4:function(a,b,c){var u,t,s
if(typeof c!=="number")return H.u(c)
u=J.bo(a)
t=b
for(;t<c;++t){s=u.h(a,t)
if(typeof s!=="number")return s.a8()
if((s&127)!==s)return t-b}return c-b},
lj:function(a,b,c,d,e,f){if(C.c.bf(f,4)!==0)throw H.c(P.U("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.U("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.U("Invalid base64 padding, more than two '=' characters",a,b))},
f_:function f_(){},
f0:function f0(){},
f5:function f5(){},
fa:function fa(){},
fp:function fp(){},
fG:function fG(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
fF:function fF(a){this.a=a},
iQ:function iQ(){},
iS:function iS(){},
jQ:function jQ(a){this.b=0
this.c=a},
iR:function iR(a){this.a=a},
jP:function jP(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
eO:function(a,b,c){var u=H.np(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.U(a,null,null))},
mY:function(a){if(a instanceof H.bY)return a.i(0)
return"Instance of '"+H.e(H.ci(a))+"'"},
na:function(a,b,c){var u,t,s=J.n2(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
kO:function(a,b,c){var u,t=H.b([],[c])
for(u=J.aM(a);u.v();)t.push(u.gE(u))
if(b)return t
return J.kJ(t)},
cl:function(a,b,c){var u,t
if(typeof a==="object"&&a!==null&&a.constructor===Array){u=a.length
c=P.aY(b,c,u)
if(b<=0){if(typeof c!=="number")return c.O()
t=c<u}else t=!0
return H.lz(t?C.b.ee(a,b,c):a)}if(!!J.Q(a).$icf)return H.nr(a,b,P.aY(b,c,a.length))
return P.nA(a,b,c)},
nA:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.c(P.a_(b,0,J.aj(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.a_(c,b,J.aj(a),q,q))
t=J.aM(a)
for(s=0;s<b;++s)if(!t.v())throw H.c(P.a_(b,0,s,q,q))
r=[]
if(u)for(;t.v();)r.push(t.gE(t))
else for(s=b;s<c;++s){if(!t.v())throw H.c(P.a_(c,b,s,q,q))
r.push(t.gE(t))}return H.lz(r)},
nt:function(a){return new H.fM(a,H.n5(a,!1,!0,!1,!1,!1))},
lE:function(a,b,c){var u=J.aM(b)
if(!u.v())return a
if(c.length===0){do a+=H.e(u.gE(u))
while(u.v())}else{a+=H.e(u.gE(u))
for(;u.v();)a=a+c+H.e(u.gE(u))}return a},
lK:function(){var u=H.nh()
if(u!=null)return P.nE(u)
throw H.c(P.z("'Uri.base' is not supported"))},
eB:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.e){u=$.mD().b
if(typeof b!=="string")H.m(H.ah(b))
u=u.test(b)}else u=!1
if(u)return b
t=c.ghz().c5(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.d(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.bC(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
mV:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
mW:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
d_:function(a){if(a>=10)return""+a
return"0"+a},
lo:function(a){return new P.b9(1000*a)},
kH:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a5(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mY(a)},
cS:function(a){return new P.ao(!1,null,null,a)},
kz:function(a,b,c){return new P.ao(!0,a,b,c)},
dr:function(a,b){return new P.bD(null,null,!0,a,b,"Value not in range")},
a_:function(a,b,c,d,e){return new P.bD(b,c,!0,a,d,"Invalid value")},
aY:function(a,b,c){var u
if(typeof a!=="number")return H.u(a)
if(0<=a){if(typeof c!=="number")return H.u(c)
u=a>c}else u=!0
if(u)throw H.c(P.a_(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.u(c)
u=b>c}else u=!0
if(u)throw H.c(P.a_(b,a,c,"end",null))
return b}return c},
lA:function(a,b){if(typeof a!=="number")return a.O()
if(a<0)throw H.c(P.a_(a,0,null,b,null))},
M:function(a,b,c,d,e){var u=e==null?J.aj(b):e
return new P.fH(u,!0,a,c,"Index out of range")},
z:function(a){return new P.iJ(a)},
iG:function(a){return new P.iF(a)},
lD:function(a){return new P.ck(a)},
aO:function(a){return new P.f7(a)},
l:function(a){return new P.dZ(a)},
U:function(a,b,c){return new P.fz(a,b,c)},
nb:function(a,b,c){var u,t,s=H.b([],[c])
C.b.sl(s,a)
for(u=0;u<a;++u){t=b.$1(u)
if(u>=s.length)return H.d(s,u)
s[u]=t}return s},
la:function(a){H.p6(a)},
nE:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.a.G(a,4)^58)*3|C.a.G(a,0)^100|C.a.G(a,1)^97|C.a.G(a,2)^116|C.a.G(a,3)^97)>>>0
if(u===0)return P.lJ(e<e?C.a.u(a,0,e):a,5,f).ge4()
else if(u===32)return P.lJ(C.a.u(a,5,e),0,f).ge4()}t=new Array(8)
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
if(P.m3(a,0,e,0,s)>=14)s[7]=e
r=s[1]
if(typeof r!=="number")return r.ip()
if(r>=0)if(P.m3(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.w()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.O()
if(typeof n!=="number")return H.u(n)
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
l=!1}else{if(!(n<e&&n===o+2&&C.a.a5(a,"..",o)))j=n>o+2&&C.a.a5(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.a.a5(a,"file",0)){if(q<=0){if(!C.a.a5(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.a.u(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.a.aX(a,o,n,"/");++e
n=h}k="file"}else if(C.a.a5(a,"http",0)){if(t&&p+3===o&&C.a.a5(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.a.aX(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.a.a5(a,"https",0)){if(t&&p+4===o&&C.a.a5(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.a.aX(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.a.u(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.jx(a,r,q,p,o,n,m,k)}return P.nX(a,0,e,r,q,p,o,n,m,k)},
lM:function(a){var u=P.h
return C.b.hG(H.b(a.split("&"),[u]),P.kN(u,u),new P.iO(C.e))},
nD:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.iL(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.a.Y(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.eO(C.a.u(a,s,t),n,n)
if(typeof p!=="number")return p.a2()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.d(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.eO(C.a.u(a,s,c),n,n)
if(typeof p!=="number")return p.a2()
if(p>255)k.$2(l,s)
if(r>=u)return H.d(j,r)
j[r]=p
return j},
lL:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.iM(a),d=new P.iN(e,a)
if(a.length<2)e.$1("address is too short")
u=H.b([],[P.w])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.a.Y(a,t)
if(p===58){if(t===b){++t
if(C.a.Y(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
u.push(-1)
r=!0}else u.push(d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.b.gar(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)u.push(d.$2(s,c))
else{m=P.nD(a,s,c)
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
nX:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.o4(a,b,d)
else{if(d===b)P.bM(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.o5(a,u,e-1):""
s=P.o1(a,e,f,!1)
if(typeof f!=="number")return f.w()
r=f+1
if(typeof g!=="number")return H.u(g)
q=r<g?P.o3(P.eO(C.a.u(a,r,g),new P.jL(a,f),n),j):n}else{q=n
s=q
t=""}p=P.o2(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.O()
o=h<i?P.kZ(a,h+1,i,n):n
return new P.bL(j,t,s,q,p,o,i<c?P.o0(a,i+1,c):n)},
lW:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bM:function(a,b,c){throw H.c(P.U(c,a,b))},
o3:function(a,b){if(a!=null&&a===P.lW(b))return
return a},
o1:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.a.Y(a,b)===91){if(typeof c!=="number")return c.K()
u=c-1
if(C.a.Y(a,u)!==93)P.bM(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.nZ(a,t,u)
if(typeof s!=="number")return s.O()
if(s<u){r=s+1
q=P.m0(a,C.a.a5(a,"25",r)?s+3:r,u,"%25")}else q=""
P.lL(a,t,s)
return C.a.u(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.u(c)
p=b
for(;p<c;++p)if(C.a.Y(a,p)===58){s=C.a.br(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.m0(a,C.a.a5(a,"25",r)?s+3:r,c,"%25")}else q=""
P.lL(a,b,s)
return"["+C.a.u(a,b,s)+q+"]"}return P.o7(a,b,c)},
nZ:function(a,b,c){var u,t=C.a.br(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.u(c)
u=t<c}else u=!1
return u?t:c},
m0:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.T(d):null
if(typeof c!=="number")return H.u(c)
u=b
t=u
s=!0
for(;u<c;){r=C.a.Y(a,u)
if(r===37){q=P.l_(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.T("")
o=l.a+=C.a.u(a,t,u)
if(p)q=C.a.u(a,u,u+3)
else if(q==="%")P.bM(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.d(C.h,p)
p=(C.h[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.T("")
if(t<u){l.a+=C.a.u(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.a.Y(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.T("")
l.a+=C.a.u(a,t,u)
l.a+=P.kY(r)
u+=m
t=u}}}if(l==null)return C.a.u(a,b,c)
if(t<c)l.a+=C.a.u(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
o7:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.u(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.a.Y(a,u)
if(q===37){p=P.l_(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.T("")
n=C.a.u(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.a.u(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.d(C.y,o)
o=(C.y[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.T("")
if(t<u){s.a+=C.a.u(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.d(C.k,o)
o=(C.k[o]&1<<(q&15))!==0}else o=!1
if(o)P.bM(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.a.Y(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.T("")
n=C.a.u(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.kY(q)
u+=l
t=u}}}}if(s==null)return C.a.u(a,b,c)
if(t<c){n=C.a.u(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
o4:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.lY(C.a.G(a,b)))P.bM(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.a.G(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.d(C.m,r)
r=(C.m[r]&1<<(s&15))!==0}else r=!1
if(!r)P.bM(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.a.u(a,b,c)
return P.nY(t?a.toLowerCase():a)},
nY:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
o5:function(a,b,c){return P.cH(a,b,c,C.V,!1)},
o2:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.cH(a,b,c,C.z,!0):C.j.iK(d,new P.jM(),P.h).j(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.a.a3(u,"/"))u="/"+u
return P.o6(u,e,f)},
o6:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.a.a3(a,"/"))return P.o8(a,!u||c)
return P.o9(a)},
kZ:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.c(P.cS("Both query and queryParameters specified"))
return P.cH(a,b,c,C.l,!0)}if(d==null)return
u=new P.T("")
t.a=""
d.H(0,new P.jN(new P.jO(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
o0:function(a,b,c){return P.cH(a,b,c,C.l,!0)},
l_:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.a.Y(a,b+1)
t=C.a.Y(a,p)
s=H.k9(u)
r=H.k9(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.c.aN(q,4)
if(p>=8)return H.d(C.h,p)
p=(C.h[p]&1<<(q&15))!==0}else p=!1
if(p)return H.bC(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.a.u(a,b,b+3).toUpperCase()
return},
kY:function(a){var u,t,s,r,q,p,o,n,m="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.b(u,[P.w])
t[0]=37
t[1]=C.a.G(m,a>>>4)
t[2]=C.a.G(m,a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.b(u,[P.w])
for(u=t.length,q=0;--r,r>=0;s=128){p=C.c.h2(a,6*r)&63|s
if(q>=u)return H.d(t,q)
t[q]=37
o=q+1
n=C.a.G(m,p>>>4)
if(o>=u)return H.d(t,o)
t[o]=n
n=q+2
o=C.a.G(m,p&15)
if(n>=u)return H.d(t,n)
t[n]=o
q+=3}}return P.cl(t,0,null)},
cH:function(a,b,c,d,e){var u=P.m_(a,b,c,d,e)
return u==null?C.a.u(a,b,c):u},
m_:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.O()
if(typeof c!=="number")return H.u(c)
if(!(o<c))break
c$0:{u=C.a.Y(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.d(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.l_(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.d(C.k,t)
t=(C.k[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.bM(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.a.Y(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.kY(u)}}if(m==null)m=new P.T("")
m.a+=C.a.u(a,n,o)
m.a+=H.e(s)
if(typeof r!=="number")return H.u(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.O()
if(n<c)m.a+=C.a.u(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
lZ:function(a){if(C.a.a3(a,"."))return!0
return C.a.dH(a,"/.")!==-1},
o9:function(a){var u,t,s,r,q,p,o
if(!P.lZ(a))return a
u=H.b([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.A(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.d(u,-1)
u.pop()
if(u.length===0)u.push("")}r=!0}else if("."===p)r=!0
else{u.push(p)
r=!1}}if(r)u.push("")
return C.b.j(u,"/")},
o8:function(a,b){var u,t,s,r,q,p
if(!P.lZ(a))return!b?P.lX(a):a
u=H.b([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.b.gar(u)!==".."){if(0>=u.length)return H.d(u,-1)
u.pop()
r=!0}else{u.push("..")
r=!1}else if("."===p)r=!0
else{u.push(p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.d(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.b.gar(u)==="..")u.push("")
if(!b){if(0>=u.length)return H.d(u,0)
t=P.lX(u[0])
if(0>=u.length)return H.d(u,0)
u[0]=t}return C.b.j(u,"/")},
lX:function(a){var u,t,s,r=a.length
if(r>=2&&P.lY(J.mF(a,0)))for(u=1;u<r;++u){t=C.a.G(a,u)
if(t===58)return C.a.u(a,0,u)+"%3A"+C.a.a6(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.d(C.m,s)
s=(C.m[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
o_:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.a.G(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.cS("Invalid URL encoding"))}}return u},
l0:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.a.G(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.e!==d)s=!1
else s=!0
if(s)return C.a.u(a,b,c)
else r=new H.o(C.a.u(a,b,c))}else{r=H.b([],[P.w])
for(s=a.length,q=b;q<c;++q){t=C.a.G(a,q)
if(t>127)throw H.c(P.cS("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.cS("Truncated URI"))
r.push(P.o_(a,q+1))
q+=2}else if(t===43)r.push(32)
else r.push(t)}}return new P.iR(!1).c5(r)},
lY:function(a){var u=a|32
return 97<=u&&u<=122},
lJ:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.b([b-1],[P.w])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.a.G(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.U(m,a,t))}}if(s<0&&t>b)throw H.c(P.U(m,a,t))
for(;r!==44;){l.push(t);++t
for(q=-1;t<u;++t){r=C.a.G(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)l.push(q)
else{p=C.b.gar(l)
if(r!==44||t!==p+7||!C.a.a5(a,"base64",p+1))throw H.c(P.U("Expecting '='",a,t))
break}}l.push(t)
o=t+1
if((l.length&1)===1)a=C.E.hP(0,a,o,u)
else{n=P.m_(a,o,u,C.l,!0)
if(n!=null)a=C.a.aX(a,o,u,n)}return new P.iK(a,l,c)},
ob:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.nb(22,new P.jW(),P.bF),n=new P.jV(o),m=new P.jX(),l=new P.jY(),k=n.$2(0,225)
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
m3:function(a,b,c,d,e){var u,t,s,r,q,p=$.mE()
for(u=b;u<c;++u){if(d<0||d>=p.length)return H.d(p,d)
t=p[d]
s=C.a.G(a,u)^96
if(s>95)s=31
if(s>=t.length)return H.d(t,s)
r=t[s]
d=r&31
q=r>>>5
if(q>=8)return H.d(e,q)
e[q]=u}return d},
aK:function aK(){},
ae:function ae(a,b){this.a=a
this.b=b},
J:function J(){},
b9:function b9(a){this.a=a},
fl:function fl(){},
fm:function fm(){},
bv:function bv(){},
dn:function dn(){},
ao:function ao(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bD:function bD(a,b,c,d,e,f){var _=this
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
iJ:function iJ(a){this.a=a},
iF:function iF(a){this.a=a},
ck:function ck(a){this.a=a},
f7:function f7(a){this.a=a},
hA:function hA(){},
dx:function dx(){},
ff:function ff(a){this.a=a},
dZ:function dZ(a){this.a=a},
fz:function fz(a,b,c){this.a=a
this.b=b
this.c=c},
fB:function fB(){},
w:function w(){},
j:function j(){},
fK:function fK(){},
p:function p(){},
S:function S(){},
bh:function bh(){},
ac:function ac(){},
a2:function a2(){},
h:function h(){},
T:function T(a){this.a=a},
iO:function iO(a){this.a=a},
iL:function iL(a){this.a=a},
iM:function iM(a){this.a=a},
iN:function iN(a,b){this.a=a
this.b=b},
bL:function bL(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
jL:function jL(a,b){this.a=a
this.b=b},
jM:function jM(){},
jO:function jO(a,b){this.a=a
this.b=b},
jN:function jN(a){this.a=a},
iK:function iK(a,b,c){this.a=a
this.b=b
this.c=c},
jW:function jW(){},
jV:function jV(a){this.a=a},
jX:function jX(){},
jY:function jY(){},
jx:function jx(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jg:function jg(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
oO:function(a){var u,t=J.Q(a)
if(!!t.$iaR){u=t.gdl(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.ez(a.data,a.height,a.width)},
oN:function(a){if(a instanceof P.ez)return{data:a.a,height:a.b,width:a.c}
return a},
b1:function(a){var u,t,s,r,q
if(a==null)return
u=P.kN(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.n)(t),++r){q=t[r]
u.m(0,q,a[q])}return u},
oM:function(a){var u={}
a.H(0,new P.k1(u))
return u},
jz:function jz(){},
jB:function jB(a,b){this.a=a
this.b=b},
jC:function jC(a,b){this.a=a
this.b=b},
ez:function ez(a,b,c){this.a=a
this.b=b
this.c=c},
k1:function k1(a){this.a=a},
jA:function jA(a,b){this.a=a
this.b=b},
fv:function fv(a,b){this.a=a
this.b=b},
fw:function fw(){},
fx:function fx(){},
jm:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
nT:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jp:function jp(){},
aa:function aa(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aS:function aS(){},
fQ:function fQ(){},
aW:function aW(){},
hy:function hy(){},
hG:function hG(){},
cj:function cj(){},
ia:function ia(){},
k:function k(){},
aZ:function aZ(){},
iu:function iu(){},
e3:function e3(){},
e4:function e4(){},
ee:function ee(){},
ef:function ef(){},
eq:function eq(){},
er:function er(){},
ex:function ex(){},
ey:function ey(){},
bF:function bF(){},
eV:function eV(){},
eW:function eW(){},
eX:function eX(a){this.a=a},
eY:function eY(){},
bq:function bq(){},
hz:function hz(){},
dS:function dS(){},
dt:function dt(){},
i5:function i5(){},
em:function em(){},
en:function en(){}},W={
li:function(){var u=document.createElement("a")
return u},
kC:function(){var u=document.createElement("canvas")
return u},
mX:function(a,b,c){var u=document.body,t=(u&&C.r).ae(u,a,b,c)
t.toString
u=new H.cv(new W.a3(t),new W.fo(),[W.D])
return u.gaG(u)},
kF:function(a){return"wheel"},
c_:function(a){var u,t,s,r="element tag unavailable"
try{u=J.bT(a)
t=u.ge1(a)
if(typeof t==="string")r=u.ge1(a)}catch(s){H.ai(s)}return r},
n_:function(a){var u,t=document.createElement("input"),s=t
try{s.type=a}catch(u){H.ai(u)}return s},
jl:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lU:function(a,b,c,d){var u=W.jl(W.jl(W.jl(W.jl(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
Y:function(a,b,c,d){var u=W.m5(new W.jj(c),W.i)
if(u!=null&&!0)J.mH(a,b,u,!1)
return new W.ji(a,b,u,!1)},
lT:function(a){var u=W.li(),t=window.location
u=new W.cx(new W.jt(u,t))
u.er(a)
return u},
nP:function(a,b,c,d){return!0},
nQ:function(a,b,c,d){var u,t=d.a,s=t.a
s.href=c
u=s.hostname
t=t.b
if(!(u==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(u==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
lV:function(){var u=P.h,t=P.ls(C.o,u),s=H.b(["TEMPLATE"],[u])
t=new W.jG(t,P.c7(u),P.c7(u),P.c7(u),null)
t.ew(null,new H.h2(C.o,new W.jH(),[H.aL(C.o,0),u]),s,null)
return t},
m5:function(a,b){var u=$.at
if(u===C.f)return a
return u.dh(a,b)},
q:function q(){},
eR:function eR(){},
eS:function eS(){},
eT:function eT(){},
br:function br(){},
bs:function bs(){},
bt:function bt(){},
b7:function b7(){},
fb:function fb(){},
G:function G(){},
bZ:function bZ(){},
fc:function fc(){},
al:function al(){},
av:function av(){},
fd:function fd(){},
fe:function fe(){},
fh:function fh(){},
ap:function ap(){},
fi:function fi(){},
d1:function d1(){},
d2:function d2(){},
fj:function fj(){},
fk:function fk(){},
je:function je(a,b){this.a=a
this.b=b},
R:function R(){},
fo:function fo(){},
i:function i(){},
f:function f(){},
aq:function aq(){},
c1:function c1(){},
fu:function fu(){},
fy:function fy(){},
aw:function aw(){},
fE:function fE(){},
c3:function c3(){},
aR:function aR(){},
c4:function c4(){},
bA:function bA(){},
fX:function fX(){},
hi:function hi(){},
cb:function cb(){},
hj:function hj(){},
hk:function hk(a){this.a=a},
hl:function hl(){},
hm:function hm(a){this.a=a},
az:function az(){},
hn:function hn(){},
aA:function aA(){},
a3:function a3(a){this.a=a},
D:function D(){},
dl:function dl(){},
aB:function aB(){},
hD:function hD(){},
hO:function hO(){},
hP:function hP(a){this.a=a},
hR:function hR(){},
aD:function aD(){},
i2:function i2(){},
aE:function aE(){},
i3:function i3(){},
aF:function aF(){},
i7:function i7(){},
i8:function i8(a){this.a=a},
ar:function ar(){},
dA:function dA(){},
ib:function ib(){},
ic:function ic(){},
cm:function cm(){},
aG:function aG(){},
as:function as(){},
ig:function ig(){},
ih:function ih(){},
io:function io(){},
aH:function aH(){},
bE:function bE(){},
is:function is(){},
it:function it(){},
bj:function bj(){},
iP:function iP(){},
j6:function j6(){},
bm:function bm(){},
cw:function cw(){},
jf:function jf(){},
dU:function dU(){},
jk:function jk(){},
eb:function eb(){},
jy:function jy(){},
jD:function jD(){},
jd:function jd(){},
jh:function jh(a){this.a=a},
ji:function ji(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jj:function jj(a){this.a=a},
cx:function cx(a){this.a=a},
L:function L(){},
dm:function dm(a){this.a=a},
hv:function hv(a){this.a=a},
hu:function hu(a,b,c){this.a=a
this.b=b
this.c=c},
ej:function ej(){},
jv:function jv(){},
jw:function jw(){},
jG:function jG(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jH:function jH(){},
jE:function jE(){},
d5:function d5(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
aV:function aV(){},
jt:function jt(a,b){this.a=a
this.b=b},
eC:function eC(a){this.a=a},
jR:function jR(a){this.a=a},
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
cD:function cD(){},
cE:function cE(){},
ek:function ek(){},
el:function el(){},
ep:function ep(){},
es:function es(){},
et:function et(){},
cF:function cF(){},
cG:function cG(){},
ev:function ev(){},
ew:function ew(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
eK:function eK(){},
eL:function eL(){},
eM:function eM(){}},K={
O:function(a,b){var u,t,s
if(a.length!==1||b.length!==1)throw H.c(P.l("The given low and high character strings for a Range must have one and only one characters."))
u=C.a.G(a,0)
t=C.a.G(b,0)
if(u>t){s=t
t=u
u=s}return new K.hJ(u,t)},
v:function(a){var u=new K.hS()
u.en(a)
return u},
aN:function aN(){},
d6:function d6(){},
bf:function bf(){},
a9:function a9(){this.a=null},
hJ:function hJ(a,b){this.a=a
this.b=b},
hS:function hS(){this.a=null}},L={
iq:function(){var u=new L.ip(),t=P.h
u.a=new H.H([t,L.dy])
u.b=new H.H([t,L.dG])
u.c=P.c7(t)
return u},
dy:function dy(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dF:function dF(a,b,c){this.a=a
this.b=b
this.c=c},
dG:function dG(a){this.b=a
this.c=null},
ip:function ip(){var _=this
_.d=_.c=_.b=_.a=null},
dI:function dI(a){this.b=a
this.a=this.c=null}},O={
kD:function(a){var u=new O.b8([a])
u.bE(a)
return u},
b8:function b8(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
ca:function ca(){this.b=this.a=null},
df:function df(){var _=this
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
c9:function c9(){},
h5:function h5(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
ax:function ax(a,b){var _=this
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
dB:function dB(){}},E={
nu:function(a,b){var u=new E.hK(a)
u.em(a,b)
return u},
nB:function(a,b,c,d,e){var u,t,s=J.Q(a)
if(!!s.$ibt)return E.lF(a,!0,!0,!0,!1)
u=W.kC()
t=u.style
t.width="100%"
t.height="100%"
s.gc3(a).n(0,u)
return E.lF(u,!0,!0,!0,!1)},
lF:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.dD(),p=C.i.cC(a,"webgl2",P.n9(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.m(P.l("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.nu(p,a)
u=new T.ik(p)
u.b=p.getParameter(3379)
p.getParameter(34076)
u.e=u.d=0
q.f=u
u=new X.dM(a)
t=new X.fP()
t.c=new X.am(!1,!1,!1)
t.d=P.c7(P.w)
u.b=t
t=new X.ho(u)
t.f=0
t.r=V.aX()
t.x=V.aX()
t.ch=t.Q=1
u.c=t
t=new X.fY(u)
t.r=0
t.x=V.aX()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.ir(u)
t.f=V.aX()
t.r=V.aX()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.b([],[[P.dz,P.a2]])
u.z=t
s=document
t.push(W.Y(s,"contextmenu",u.gf9(),!1))
u.z.push(W.Y(a,"focus",u.gff(),!1))
u.z.push(W.Y(a,"blur",u.gf3(),!1))
u.z.push(W.Y(s,"keyup",u.gfj(),!1))
u.z.push(W.Y(s,"keydown",u.gfh(),!1))
u.z.push(W.Y(a,"mousedown",u.gfn(),!1))
u.z.push(W.Y(a,"mouseup",u.gfs(),!1))
u.z.push(W.Y(a,r,u.gfp(),!1))
t=u.z
W.kF(a)
W.kF(a)
t.push(W.Y(a,W.kF(a),u.gfu(),!1))
u.z.push(W.Y(s,r,u.gfb(),!1))
u.z.push(W.Y(s,"mouseup",u.gfd(),!1))
u.z.push(W.Y(s,"pointerlockchange",u.gfw(),!1))
u.z.push(W.Y(a,"touchstart",u.gfL(),!1))
u.z.push(W.Y(a,"touchend",u.gfH(),!1))
u.z.push(W.Y(a,"touchmove",u.gfJ(),!1))
q.x=u
q.ch=!0
q.cx=!1
q.cy=new P.ae(Date.now(),!1)
q.db=0
q.d1()
return q},
f1:function f1(){},
ba:function ba(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hK:function hK(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hL:function hL(a){this.a=a},
hM:function hM(a){this.a=a},
hN:function hN(a){this.a=a},
dD:function dD(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
im:function im(a){this.a=a}},Z={
kW:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.bN(c)),35044)
a.bindBuffer(b,null)
return new Z.dQ(b,u)},
an:function(a){return new Z.b0(a)},
dQ:function dQ(a,b){this.a=a
this.b=b},
cV:function cV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
j7:function j7(a){this.a=a},
cW:function cW(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bx:function bx(a,b,c){this.a=a
this.b=b
this.c=c},
b0:function b0(a){this.a=a}},D={
K:function(){var u=new D.bw()
u.d=0
return u},
f4:function f4(){},
bw:function bw(){var _=this
_.d=_.c=_.b=_.a=null},
fr:function fr(a){this.a=a},
fs:function fs(a){this.a=a},
Z:function Z(){this.b=null},
by:function by(){this.b=null},
bz:function bz(){this.b=null},
E:function E(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
eZ:function eZ(){},
bu:function bu(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a8:function a8(){},
dc:function dc(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
hE:function hE(){},
i4:function i4(){}},X={cX:function cX(a,b){this.a=a
this.b=b},db:function db(a,b){this.a=a
this.b=b},fP:function fP(){var _=this
_.d=_.c=_.b=_.a=null},de:function de(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fY:function fY(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},am:function am(a,b,c){this.a=a
this.b=b
this.c=c},aU:function aU(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},ho:function ho(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cc:function cc(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hF:function hF(){},dH:function dH(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},ir:function ir(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dM:function dM(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
mZ:function(a){var u=new X.fA(),t=new V.ak(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.lC
if(t==null){t=V.lB(0,0,1,1)
$.lC=t}u.r=t
return u},
kB:function kB(){},
fA:function fA(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dp:function dp(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
id:function id(){}},V={
pf:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.bf(a-b,u)
return(a<0?a+u:a)+b},
F:function(a,b,c){if(a==null)return C.a.ag("null",c)
return C.a.ag(C.d.e3(Math.abs(a-0)<$.C().a?0:a,b),c+b+1)},
bS:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.h])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.n)(a),++s){r=V.F(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.d(o,q)
u=C.a.ag(o[q],t)
p=o.length
if(q>=p)return H.d(o,q)
o[q]=u}return o},
l9:function(a){return C.d.ih(Math.pow(2,C.R.ci(Math.log(H.oL(a))/Math.log(2))))},
dh:function(){var u=$.lu
return u==null?$.lu=V.ay(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
ay:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aT(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lt:function(a,b,c){var u=c.p(0,Math.sqrt(c.C(c))),t=b.az(u),s=t.p(0,Math.sqrt(t.C(t))),r=u.az(s),q=new V.y(a.a,a.b,a.c),p=s.U(0).C(q),o=r.U(0).C(q),n=u.U(0).C(q)
return V.ay(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
aX:function(){var u=$.lx
return u==null?$.lx=new V.X(0,0):u},
kQ:function(){var u=$.aC
return u==null?$.aC=new V.N(0,0,0):u},
lB:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.ds(a,b,c,d)},
ct:function(){var u=$.lQ
return u==null?$.lQ=new V.y(0,0,0):u},
nK:function(){var u=$.iT
return u==null?$.iT=new V.y(-1,0,0):u},
kV:function(){var u=$.iU
return u==null?$.iU=new V.y(0,1,0):u},
lR:function(){var u=$.iV
return u==null?$.iV=new V.y(0,0,1):u},
a6:function a6(a,b,c){this.a=a
this.b=b
this.c=c},
ak:function ak(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fq:function fq(a){this.a=a},
dg:function dg(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aT:function aT(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
X:function X(a,b){this.a=a
this.b=b},
N:function N(a,b,c){this.a=a
this.b=b
this.c=c},
bi:function bi(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ds:function ds(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
I:function I(a,b){this.a=a
this.b=b},
y:function y(a,b,c){this.a=a
this.b=b
this.c=c},
b_:function b_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
p9:function(a){P.nC(C.O,new V.kr(a))},
nw:function(a){var u=new V.hY()
u.ep(a,!0)
return u},
cY:function cY(){},
kr:function kr(a){this.a=a},
fg:function fg(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fC:function fC(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fD:function fD(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hC:function hC(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hH:function hH(a){this.a=a
this.c=null},
hI:function hI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hY:function hY(){this.b=this.a=null},
i_:function i_(a){this.a=a},
hZ:function hZ(a){this.a=a},
i0:function i0(a){this.a=a}},U={
kE:function(){var u=new U.f6()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
ln:function(a){var u=new U.cZ()
u.a=a
return u},
f6:function f6(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cZ:function cZ(){this.b=this.a=null},
c2:function c2(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
af:function af(){},
dN:function dN(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dO:function dO(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dP:function dP(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={d3:function d3(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
mf:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="testCanvas",a=null,a0="modifiers",a1=V.nw("Test 018"),a2=W.kC()
a2.className="pageLargeCanvas"
a2.id=b
a1.a.appendChild(a2)
u=[P.h]
a1.da(H.b(["A test of the Material Lighting shader where a diffuse texture and ","inverse diffuse texture are used. Grass is only shown in the dark. ","Dirt is shown where the directional light is shining."],u))
a1.h9(H.b(["shapes"],u))
a1.da(H.b(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(b)
if(t==null)H.m(P.l("Failed to find an element with the identifier, testCanvas."))
s=E.nB(t,!0,!0,!0,!1)
r=new E.ba()
r.a=""
r.b=!0
q=E.ba
p=O.kD(q)
r.y=p
p.bg(r.ghQ(),r.ghT())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.sa9(0,a)
r.sba(a)
r.sa9(0,F.mj(8,8))
p=new U.c2()
p.bE(U.af)
p.bg(p.geW(),p.gfD())
p.e=null
p.f=V.dh()
p.r=0
o=s.x
n=new U.dO()
m=U.kE()
m.scB(0,!0)
m.scl(6.283185307179586)
m.scn(0)
m.sZ(0,0)
m.scm(100)
m.sX(0)
m.sc7(0.5)
n.b=m
l=n.gaL()
m.gB().n(0,l)
m=U.kE()
m.scB(0,!0)
m.scl(6.283185307179586)
m.scn(0)
m.sZ(0,0)
m.scm(100)
m.sX(0)
m.sc7(0.5)
n.c=m
m.gB().n(0,l)
n.d=null
n.r=n.f=n.e=!1
n.y=n.x=2.5
n.Q=4
n.ch=n.cx=!1
n.db=n.cy=0
n.dx=null
n.dy=0
n.fx=n.fr=null
k=new X.am(!1,!1,!1)
j=n.d
n.d=k
m=new D.E(a0,j,k)
m.b=!0
n.S(m)
m=n.f
if(m!==!1){n.f=!1
m=new D.E("invertX",m,!1)
m.b=!0
n.S(m)}m=n.r
if(m!==!1){n.r=!1
m=new D.E("invertY",m,!1)
m.b=!0
n.S(m)}n.b4(o)
p.n(0,n)
o=s.x
n=new U.dN()
m=U.kE()
m.scB(0,!0)
m.scl(6.283185307179586)
m.scn(0)
m.sZ(0,0)
m.scm(100)
m.sX(0)
m.sc7(0.2)
n.b=m
m.gB().n(0,n.gaL())
n.c=null
n.d=!1
n.e=2.5
n.r=4
n.x=n.y=!1
n.z=0
n.Q=null
n.ch=0
n.cy=n.cx=null
k=new X.am(!0,!1,!1)
j=n.c
n.c=k
m=new D.E(a0,j,k)
m.b=!0
n.S(m)
n.b4(o)
p.n(0,n)
o=s.x
n=new U.dP()
n.c=0.01
n.e=n.d=0
k=new X.am(!1,!1,!1)
n.b=k
m=new D.E(a0,a,k)
m.b=!0
n.S(m)
n.b4(o)
p.n(0,n)
r.sba(p)
i=s.f.dM("../resources/Dirt.png")
h=s.f.dM("../resources/Grass.png")
g=new O.df()
p=O.kD(V.aT)
g.e=p
p.bg(g.gf_(),g.gf1())
p=new O.ax(g,"emission")
p.c=new A.a7(!1,!1,!1)
p.f=new V.a6(0,0,0)
g.f=p
p=new O.ax(g,"ambient")
p.c=new A.a7(!1,!1,!1)
p.f=new V.a6(0,0,0)
g.r=p
p=new O.ax(g,"diffuse")
p.c=new A.a7(!1,!1,!1)
p.f=new V.a6(0,0,0)
g.x=p
p=new O.ax(g,"invDiffuse")
p.c=new A.a7(!1,!1,!1)
p.f=new V.a6(0,0,0)
g.y=p
p=new O.h9(g,"specular")
p.c=new A.a7(!1,!1,!1)
p.f=new V.a6(0,0,0)
p.ch=100
g.z=p
p=new O.h5(g,"bump")
p.c=new A.a7(!1,!1,!1)
g.Q=p
g.ch=null
p=new O.ax(g,"reflect")
p.c=new A.a7(!1,!1,!1)
p.f=new V.a6(0,0,0)
g.cx=p
p=new O.h8(g,"refract")
p.c=new A.a7(!1,!1,!1)
p.f=new V.a6(0,0,0)
p.ch=1
g.cy=p
p=new O.h4(g,"alpha")
p.c=new A.a7(!1,!1,!1)
p.f=1
g.db=p
p=new D.dc()
p.bE(D.a8)
p.e=H.b([],[D.eZ])
p.f=H.b([],[D.bu])
p.r=H.b([],[D.hE])
p.x=H.b([],[D.i4])
p.z=p.y=null
p.cE(p.geY(),p.gfB(),p.gfF())
g.dx=p
o=new O.h7()
o.b=new V.ak(0,0,0,0)
o.c=1
o.d=10
o.e=!1
g.dy=o
o=p.y
p=o==null?p.y=D.K():o
p.n(0,g.gfT())
p=g.dx
o=p.z
p=o==null?p.z=D.K():o
p.n(0,g.gbi())
g.fr=null
p=g.dx
f=V.kV()
o=U.ln(V.lt(V.kQ(),f,new V.y(-1,-1,-1)))
e=new V.a6(1,1,1)
n=new D.bu()
n.c=new V.a6(1,1,1)
n.a=V.lR()
n.d=V.kV()
n.e=V.nK()
j=n.b
n.b=o
o.gB().n(0,n.ges())
o=new D.E("mover",j,n.b)
o.b=!0
n.au(o)
if(!n.c.t(0,e)){j=n.c
n.c=e
o=new D.E("color",j,e)
o.b=!0
n.au(o)}p.n(0,n)
g.x.saY(i)
g.y.saY(h)
p=new M.d3()
p.a=!0
q=O.kD(q)
p.e=q
q.bg(p.gf5(),p.gf7())
p.y=p.x=p.r=p.f=null
d=X.mZ(a)
c=new X.dp()
c.c=1.0471975511965976
c.d=0.1
c.e=2000
c.sba(a)
q=c.c
if(!(Math.abs(q-1.0471975511965976)<$.C().a)){c.c=1.0471975511965976
q=new D.E("fov",q,1.0471975511965976)
q.b=!0
c.aI(q)}q=c.d
if(!(Math.abs(q-0.1)<$.C().a)){c.d=0.1
q=new D.E("near",q,0.1)
q.b=!0
c.aI(q)}q=c.e
if(!(Math.abs(q-2000)<$.C().a)){c.e=2000
q=new D.E("far",q,2000)
q.b=!0
c.aI(q)}q=p.b
if(q!==c){if(q!=null)q.gB().D(0,p.gam())
j=p.b
p.b=c
c.gB().n(0,p.gam())
q=new D.E("camera",j,p.b)
q.b=!0
p.av(q)}q=p.c
if(q!==d){if(q!=null)q.gB().D(0,p.gam())
j=p.c
p.c=d
d.gB().n(0,p.gam())
q=new D.E("target",j,p.c)
q.b=!0
p.av(q)}p.se2(a)
p.se2(g)
p.e.n(0,r)
p.b.sba(U.ln(V.ay(1,0,0,0,0,1,0,0,0,0,1,3,0,0,0,1)))
q=s.d
if(q!==p){if(q!=null)q.gB().D(0,s.gcJ())
s.d=p
p.gB().n(0,s.gcJ())
s.cK()}q=new V.hH("shapes")
u=u.getElementById("shapes")
q.c=u
if(u==null)H.m("Failed to find shapes for RadioGroup")
q.ao(0,"Cube",new M.kg(r))
q.ao(0,"Cuboid",new M.kh(r))
q.ao(0,"Cylinder",new M.ki(r))
q.ao(0,"Cone",new M.kj(r))
q.ao(0,"LatLonSphere",new M.kk(r))
q.ao(0,"IsoSphere",new M.kl(r))
q.bo(0,"Sphere",new M.km(r),!0)
q.ao(0,"Toroid",new M.kn(r))
q.ao(0,"Knot",new M.ko(r))
u=s.Q
if(u==null)u=s.Q=D.K()
q=u.b
u=q==null?u.b=H.b([],[{func:1,ret:-1,args:[D.Z]}]):q
u.push(new M.kp(a1,g))
V.p9(s)},
kg:function kg(a){this.a=a},
kh:function kh(a){this.a=a},
ki:function ki(a){this.a=a},
kj:function kj(a){this.a=a},
kk:function kk(a){this.a=a},
kl:function kl(a){this.a=a},
km:function km(a){this.a=a},
kn:function kn(a){this.a=a},
ko:function ko(a){this.a=a},
kp:function kp(a,b){this.a=a
this.b=b}},A={
nd:function(a,b){var u=a.b7,t=new A.h3(b,u)
t.eo(b,u)
t.el(a,b)
return t},
ne:function(a,b,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="MaterialLight_"+a3.gal(a3)+a4.gal(a4)+a5.gal(a5)+a6.gal(a6)+a7.gal(a7)+a8.gal(a8)+a9.gal(a9)+b0.gal(b0)+b1.gal(b1)+"_"
c+=a?"1":"0"
c+=b?"1":"0"
c+=a0?"1":"0"
c=c+"0_"+a2
u=b2.length
if(u>0){c+="_Bar"
for(t=0;t<b2.length;b2.length===u||(0,H.n)(b2),++t)c+="_"+H.e(b2[t].a)}u=b3.length
if(u>0){c+="_Dir"
for(t=0;t<b3.length;b3.length===u||(0,H.n)(b3),++t)c+="_"+H.e(b3[t].a)}u=b4.length
if(u>0){c+="_Point"
for(t=0;t<b4.length;b4.length===u||(0,H.n)(b4),++t)c+="_"+H.e(b4[t].a)}u=b5.length
if(u>0){c+="_Spot"
for(t=0;t<b5.length;b5.length===u||(0,H.n)(b5),++t)c+="_"+H.e(b5[t].a)}for(u=b2.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=b2[t].b
for(q=b3.length,t=0;t<q;++t,r=!0)s+=b3[t].b
for(q=b4.length,t=0;t<q;++t,r=!0)s+=b4[t].b
for(p=b5.length,t=0;t<p;++t,r=!0)s+=b5[t].b
p=a9.b||!1
if(!p){p=b0.b||!1
o=p}else o=!0
n=u>0
u=a4.b||!1
if(!u){u=a5.b||!1
if(!u){u=a6.b||!1
if(!u)u=a7.b||!1
else u=!0
m=u}else m=!0}else m=!0
u=a7.b||!1
l=u||n||q>0||o
u=a5.b||!1
if(!u){u=a6.b||!1
if(!u){u=a7.b||!1
k=u}else k=!0}else k=!0
if(!k){u=a8.b||!1
j=u||o}else j=!0
i=a8.b||!1
h=a3.b||a4.b||a5.b||a6.b||a7.b||a8.b||a9.b||b0.b||b1.b
g=a2>0
f=j||i||l||!1
e=n&&k
a=a&&h
d=$.b5()
if(j){u=$.b4()
d=new Z.b0(d.a|u.a)}if(i){u=$.b3()
d=new Z.b0(d.a|u.a)}if(h){u=$.b6()
d=new Z.b0(d.a|u.a)}if(g){u=$.b2()
d=new Z.b0(d.a|u.a)}return new A.h6(a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,s,o,k,o,r,f,!0,e,!1,m,r,l,j,i,h,!1,g,a,!1,a0,!1,a2,c.charCodeAt(0)==0?c:c,d)},
jZ:function(a,b,c){if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
k_:function(a,b,c){var u
A.jZ(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.eP(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.b){u+="   "+c+"Color = texture2D("+c+"Txt, txt2D).rgb;\n"
a.a=u}a.a=u+"}\n"},
ok:function(a,b){var u=a.a,t=u.b||!1
if(!t)return
t=b.a+="// === Emission ===\n"
b.a=t+"\n"
A.jZ(b,u,"emission")
t=b.a+="\n"
t+="vec3 emissionColor()\n"
b.a=t
t=b.a=t+"{\n"
if(u.b){u=t+"   return texture2D(emissionTxt, txt2D).rgb;\n"
b.a=u}else u=t
u+="}\n"
b.a=u
b.a=u+"\n"},
og:function(a,b){var u=a.b,t=u.b||!1
if(!t)return
t=b.a+="// === Ambient ===\n"
b.a=t+"\n"
A.k_(b,u,"ambient")
b.a+="\n"},
oi:function(a,b){var u=a.c,t=u.b||!1
if(!t)return
t=b.a+="// === Diffuse ===\n"
b.a=t+"\n"
A.k_(b,u,"diffuse")
u=b.a+="\n"
u+="vec3 diffuse(vec3 norm, vec3 litVec)\n"
b.a=u
u+="{\n"
b.a=u
u+="   float scalar = dot(norm, -litVec);\n"
b.a=u
u+="   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n"
b.a=u
u+="   return diffuseColor*scalar;\n"
b.a=u
u+="}\n"
b.a=u
b.a=u+"\n"},
ol:function(a,b){var u=a.d,t=u.b||!1
if(!t)return
t=b.a+="// === Inverse Diffuse ===\n"
b.a=t+"\n"
A.k_(b,u,"invDiffuse")
u=b.a+="\n"
u+="vec3 invDiffuse(vec3 norm, vec3 litVec)\n"
b.a=u
u+="{\n"
b.a=u
u+="   float scalar = 1.0 - clamp(dot(norm, -litVec), 0.0, 1.0);\n"
b.a=u
u+="   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n"
b.a=u
u+="   return invDiffuseColor*scalar;\n"
b.a=u
u+="}\n"
b.a=u
b.a=u+"\n"},
or:function(a,b){var u=a.e,t=u.b||!1
if(!t)return
t=b.a+="// === Specular ===\n"
t+="\n"
b.a=t
b.a=t+"uniform float shininess;\n"
A.k_(b,u,"specular")
u=b.a+="\n"
u+="vec3 specular(vec3 norm, vec3 litVec)\n"
b.a=u
u+="{\n"
b.a=u
u+="   if(dot(norm, -litVec) < 0.0) return vec3(0.0, 0.0, 0.0);\n"
b.a=u
u+="   vec3 lightRef = normalize(reflect(litVec, norm));\n"
b.a=u
u+="   float scalar = dot(lightRef, -normalize(viewPos));\n"
b.a=u
u+="   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n"
b.a=u
u+="   return specularColor*pow(scalar, shininess);\n"
b.a=u
u+="}\n"
b.a=u
b.a=u+"\n"},
on:function(a,b){var u,t,s
if(!a.k4)return
u=b.a+="// === Normal ===\n"
u=b.a=u+"\n"
t=a.f.b
if(t){u+="uniform sampler2D bumpTxt;\n"
b.a=u
u=b.a=u+"\n"}u+="vec3 normal()\n"
b.a=u
u=b.a=u+"{\n"
s=t||!1
if(!s||!1)u=b.a=u+"   return normalize(normalVec);\n"
else{u=(t?b.a=u+"   vec3 color = texture2D(bumpTxt, txt2D).rgb;\n":b.a=u+"   vec3 color = textureCube(bumpTxt, txtCube).rgb;\n")+"   vec3 n = normalize(normalVec);\n"
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
op:function(a,b){var u=a.r,t=u.b||!1
if(!t)return
t=b.a+="// === Reflection ===\n"
b.a=t+"\n"
A.jZ(b,u,"reflect")
t=b.a+="\n"
t+="vec3 reflect(vec3 refl)\n"
b.a=t
t=b.a=t+"{\n"
if(u.b){u=t+"   vec3 scalar = texture2D(reflectTxt, txt2D).rgb;\n"
b.a=u}else u=t
u+="   vec3 invRefl = vec3(invViewMat*vec4(refl, 0.0));\n"
b.a=u
u+="   return scalar*textureCube(envSampler, invRefl).rgb;\n"
b.a=u
u+="}\n"
b.a=u
b.a=u+"\n"},
oq:function(a,b){var u=a.x,t=u.b||!1
if(!t)return
t=b.a+="// === Refraction ===\n"
b.a=t+"\n"
A.jZ(b,u,"refract")
t=b.a+="uniform float refraction;\n"
t+="\n"
b.a=t
t+="vec3 refract(vec3 refl)\n"
b.a=t
t=b.a=t+"{\n"
if(u.b){u=t+"   vec3 scalar = texture2D(refractTxt, txt2D).rgb;\n"
b.a=u}else u=t
u+="   vec3 refr = mix(-refl, viewPos, refraction);\n"
b.a=u
u+="   vec3 invRefr = vec3(invViewMat*vec4(refr, 0.0));\n"
b.a=u
u+="   return scalar*textureCube(envSampler, invRefr).rgb;\n"
b.a=u
u+="}\n"
b.a=u
b.a=u+"\n"},
oh:function(a,b,c){var u,t,s,r,q,p,o=b.b
if(o<=0)return
u=b.a
t="barLight"+H.e(u)
s=A.eP(t)
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
if(typeof u!=="number")return u.a8()
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
u=a.b.b||!1
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
u=a.c.b||!1
if(u)p.push("diffuse(norm, normDir)")
u=a.d.b||!1
if(u)p.push("invDiffuse(norm, normDir)")
u=a.e.b||!1
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
oj:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.e(u)
s=A.eP(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.a8()
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
n=a.b.b||!1
if(n)o.push("ambientColor")
if(a.dx){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.b([],r)
r=a.c.b||!1
if(r)m.push("diffuse(norm, lit.viewDir)")
r=a.d.b||!1
if(r)m.push("invDiffuse(norm, lit.viewDir)")
r=a.e.b||!1
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
oo:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.e(u)
s=A.eP(t)
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
if(typeof u!=="number")return u.a8()
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
o=a.b.b||!1
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
r=a.c.b||!1
if(r)k.push("diffuse(norm, normDir)")
r=a.d.b||!1
if(r)k.push("invDiffuse(norm, normDir)")
r=a.e.b||!1
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
os:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.e(u)
s=A.eP(t)
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
if(typeof u!=="number")return u.a8()
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
r=a.b.b||!1
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
u=a.c.b||!1
if(u)i.push("diffuse(norm, litVec)")
u=a.d.b||!1
if(u)i.push("invDiffuse(norm, litVec)")
u=a.e.b||!1
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
om:function(a,b){var u,t
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
u=a.b.b||!1
if(u)t.push("ambientColor")
u=a.c.b||!1
if(u)t.push("diffuse(norm, litVec)")
u=a.d.b||!1
if(u)t.push("invDiffuse(norm, litVec)")
u=a.e.b||!1
if(u)t.push("specular(norm, litVec)")
u=b.a+="   return "+C.b.j(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
ot:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.T("")
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
A.ok(a,j)
A.og(a,j)
A.oi(a,j)
A.ol(a,j)
A.or(a,j)
t=a.db
if(t){r=j.a+="// === Environmental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.op(a,j)
A.oq(a,j)}A.on(a,j)
r=j.a+="// === Alpha ===\n"
r=j.a=r+"\n"
q=a.y.b
if(q)r=j.a=r+"uniform sampler2D alphaTxt;\n"
r+="float alphaValue()\n"
j.a=r
r=j.a=r+"{\n"
p=q||!1
if(!p)r=j.a=r+"   return 1.0;\n"
else if(q||!1){if(q){r+="   float a = texture2D(alphaTxt, txt2D).a;\n"
j.a=r}r+="   if (a <= 0.000001) discard;\n"
j.a=r
r+="   return a;\n"
j.a=r}r+="}\n"
j.a=r
j.a=r+"\n"
r=a.k1
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.n)(q),++o)A.oh(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.n)(q),++o)A.oj(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.n)(q),++o)A.oo(a,q[o],j)
for(q=a.cx,p=q.length,o=0;o<q.length;q.length===p||(0,H.n)(q),++o)A.os(a,q[o],j)
A.om(a,j)}q=j.a+="// === Main ===\n"
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
u=a.b.b||!1
if(u)j.a+="   setAmbientColor();\n"
u=a.c.b||!1
if(u)j.a+="   setDiffuseColor();\n"
u=a.d.b||!1
if(u)j.a+="   setInvDiffuseColor();\n"
u=a.e.b||!1
if(u)j.a+="   setSpecularColor();\n"
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.n)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a6(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.n)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a6(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.n)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a6(r,1))+"Values(norm);\n"}for(u=a.cx,t=u.length,o=0;o<u.length;u.length===t||(0,H.n)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a6(r,1))+"Values(norm);\n"}if(a.cy<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a.b||!1
if(u)n.push("emissionColor()")
u=a.r.b||!1
if(u)n.push("reflect(refl)")
u=a.x.b||!1
if(u)n.push("refract(refl)")
if(n.length<=0)n.push("vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.b.j(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
ou:function(a,b){var u,t,s
if(!a.ry)return
u=b.a+="struct BendingValue\n"
u+="{\n"
b.a=u
u+="   mat4 mat;\n"
b.a=u
u+="};\n"
b.a=u
b.a=u+"uniform int bendMatCount;\n"
u=b.a+="uniform BendingValue bendValues["+a.aS+"];\n"
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
ow:function(a,b){var u
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
ov:function(a,b){var u
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
oy:function(a,b){var u,t
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
oz:function(a,b){var u,t
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
ox:function(a,b){var u
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
oA:function(a,b){var u
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
eP:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.a.a6(a,1)},
kS:function(a,b,c,d,e){var u=new A.iy(a,c,e)
u.f=d
P.na(d,0,P.w)
return u},
cT:function cT(a,b,c){this.a=a
this.b=b
this.c=c},
eU:function eU(a){this.a=a},
a7:function a7(a,b,c){this.a=a
this.b=b
this.c=c},
h3:function h3(a,b){var _=this
_.ix=_.dr=_.dq=_.b7=_.aS=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iJ=_.iI=_.iH=_.cf=_.ce=_.cd=_.cc=_.cb=_.ca=_.c9=_.c8=_.iG=_.dB=_.iF=_.iE=_.dA=_.iD=_.dz=_.iC=_.dw=_.iB=_.dv=_.iA=_.du=_.dt=_.iz=_.ds=_.iy=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cU:function cU(a,b){this.a=a
this.b=b},
d0:function d0(a,b){this.a=a
this.b=b},
dq:function dq(a,b){this.a=a
this.b=b},
dw:function dw(a,b){this.a=a
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
_.aS=b3
_.b7=b4
_.dq=b5},
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
cr:function cr(a,b,c,d,e,f,g,h,i,j){var _=this
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
cs:function cs(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
du:function du(){},
dJ:function dJ(){},
iD:function iD(a){this.a=a},
bk:function bk(a,b,c){this.a=a
this.c=b
this.d=c},
iA:function iA(a,b,c){this.a=a
this.c=b
this.d=c},
iB:function iB(a,b,c){this.a=a
this.c=b
this.d=c},
iC:function iC(a,b,c){this.a=a
this.c=b
this.d=c},
iy:function iy(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
W:function W(a,b,c){this.a=a
this.c=b
this.d=c},
iz:function iz(a,b,c){this.a=a
this.c=b
this.d=c},
V:function V(a,b,c){this.a=a
this.c=b
this.d=c},
cn:function cn(a,b,c){this.a=a
this.c=b
this.d=c},
iE:function iE(a,b,c){this.a=a
this.c=b
this.d=c},
cq:function cq(a,b,c){this.a=a
this.c=b
this.d=c},
ag:function ag(a,b,c){this.a=a
this.c=b
this.d=c},
a0:function a0(a,b,c){this.a=a
this.c=b
this.d=c},
bG:function bG(a,b,c){this.a=a
this.c=b
this.d=c}},F={
l4:function(a,b,c,d){var u=F.hU()
F.cI(u,b,c,d,a,1,0,0,1)
F.cI(u,b,c,d,a,0,1,0,3)
F.cI(u,b,c,d,a,0,0,1,2)
F.cI(u,b,c,d,a,-1,0,0,0)
F.cI(u,b,c,d,a,0,-1,0,0)
F.cI(u,b,c,d,a,0,0,-1,3)
u.aj()
return u},
jU:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cI:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.y(h,g+a1,f+a2)
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
j.d=i}m=F.jU(i)
l=F.jU(h)
k=F.kv(d,a0,new F.jT(j,F.jU(g),F.jU(f),l,m,c),b)
if(k!=null)a.aV(k)},
ma:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(e<3)return
u=F.hU()
t=b?-1:1
s=-6.283185307179586/e
r=H.b([],[F.bl])
q=u.a
p=new V.y(0,0,t)
p=p.p(0,Math.sqrt(p.C(p)))
r.push(q.hd(new V.bi(a,-1,-1,-1),new V.ak(1,1,1,1),new V.N(0,0,c),new V.y(0,0,t),new V.X(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.u(k)
j=new V.y(m,l,t).p(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.bI(new V.bi(a,-1,-1,-1),null,new V.ak(i,g,h,1),new V.N(m*k,l*k,c),new V.y(0,0,t),new V.X(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.n(0,f)
r.push(f)}u.d.hb(r)
return u},
m8:function(a,b,c){return F.oP(!0,a,1,new F.k2(1,c),b)},
oP:function(a,b,c,d,e){var u
if(e<3)return
if(c<1)return
u=F.kv(c,e,new F.k4(d),null)
if(u==null)return
u.aj()
u.bp()
if(b)u.aV(F.ma(3,!1,1,new F.k5(d),e))
u.aV(F.ma(1,!0,-1,new F.k6(d),e))
return u},
p3:function(a,b){var u=F.kv(a,b,new F.kf(),null)
u.d.bw()
u.aj()
u.bp()
return u},
a4:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j=null
b=b.p(0,Math.sqrt(b.C(b)))
u=b.a
t=b.b
s=b.c
r=F.bI(j,j,j,new V.N(u,t,s),b,j,j,j,0)
q=a.hB(r,new F.cu())
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
r.saQ(0,new V.ak(p,o,n,1))
m=Math.sqrt(u*u+t*t)
l=Math.atan2(t,u)/1.5707963267948966
if(l<0)l=-l
k=Math.atan2(m,s)/3.141592653589793
r.saY(new V.X(l,k<0?-k:k))
a.a.n(0,r)
return r},
P:function(a,b,c,d,e){var u,t,s,r
if(e<=0)a.d.bo(0,b,d,c)
else{u=F.a4(a,b.r.w(0,c.r).q(0,0.5))
t=F.a4(a,c.r.w(0,d.r).q(0,0.5))
s=F.a4(a,d.r.w(0,b.r).q(0,0.5))
r=e-1
F.P(a,b,u,s,r)
F.P(a,u,c,t,r)
F.P(a,t,s,u,r)
F.P(a,s,t,d,r)}},
mj:function(a,b){var u,t,s={}
s.a=u
s.a=null
s.a=new F.ks()
t=F.l4(a,null,new F.kt(s,1),b)
t.bp()
return t},
pd:function(){return F.m9(15,30,0.5,1,new F.kw())},
p2:function(){return F.m9(12,120,0.3,1,new F.ke(3,2))},
m9:function(a,b,c,d,e){var u=F.kv(a,b,new F.k3(e,d,b,c),null)
if(u==null)return
u.aj()
u.bp()
return u},
kv:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.hU()
t=H.b([],[F.bl])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.bI(g,g,new V.ak(p,0,0,1),g,g,new V.X(r,1),g,g,0)
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
o=F.bI(g,g,new V.ak(j,i,h,1),g,g,new V.X(r,m),g,g,0)
k.n(0,o)
c.$3(o,r,n)
t.push(o.c6(d))}}u.d.hc(a+1,b+1,t)
return u},
c0:function(a,b,c){var u=new F.aQ(),t=a.a
if(t==null)H.m(P.l("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.m(P.l("May not create a face with vertices attached to different shapes."))
u.bl(a)
u.bm(b)
u.d2(c)
u.a.a.d.b.push(u)
u.a.a.V()
return u},
n6:function(a,b){var u=new F.c6(),t=a.a
if(t==null)H.m(P.l("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.m(P.l("May not create a line with vertices attached to different shapes."))
u.bl(a)
u.bm(b)
u.a.a.c.b.push(u)
u.a.a.V()
return u},
hU:function(){var u=new F.hT(),t=new F.iW(u)
t.b=!1
t.c=H.b([],[F.bl])
u.a=t
t=new F.hX(u)
t.b=H.b([],[F.cg])
u.b=t
t=new F.hW(u)
t.b=H.b([],[F.c6])
u.c=t
t=new F.hV(u)
t.b=H.b([],[F.aQ])
u.d=t
u.e=null
return u},
bI:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.bl(),r=new F.j3()
r.b=H.b([],[F.cg])
s.b=r
r=new F.j0()
u=[F.c6]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.iX()
u=[F.aQ]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.my()
s.e=0
r=$.b5()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.b4().a)!==0?e:t
s.x=(u&$.b3().a)!==0?b:t
s.y=(u&$.b6().a)!==0?f:t
s.z=(u&$.bp().a)!==0?g:t
s.Q=(u&$.mz().a)!==0?c:t
s.ch=(u&$.bU().a)!==0?i:0
s.cx=(u&$.b2().a)!==0?a:t
return s},
jT:function jT(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
k2:function k2(a,b){this.a=a
this.b=b},
k4:function k4(a){this.a=a},
k5:function k5(a){this.a=a},
k6:function k6(a){this.a=a},
kf:function kf(){},
ks:function ks(){},
kt:function kt(a,b){this.a=a
this.b=b},
kw:function kw(){},
ke:function ke(a,b){this.a=a
this.b=b},
k3:function k3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aQ:function aQ(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ft:function ft(){},
i1:function i1(){},
c6:function c6(){this.b=this.a=null},
fR:function fR(){},
ix:function ix(){},
cg:function cg(){this.a=null},
hT:function hT(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hV:function hV(a){this.a=a
this.b=null},
hW:function hW(a){this.a=a
this.b=null},
hX:function hX(a){this.a=a
this.b=null},
bl:function bl(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
j5:function j5(a){this.a=a},
j4:function j4(a){this.a=a},
iW:function iW(a){this.a=a
this.c=this.b=null},
iX:function iX(){this.d=this.c=this.b=null},
iY:function iY(a,b){this.a=a
this.b=b},
iZ:function iZ(a,b){this.a=a
this.b=b},
j0:function j0(){this.c=this.b=null},
j1:function j1(){},
cu:function cu(){},
j2:function j2(){},
j_:function j_(){},
hw:function hw(){},
j3:function j3(){this.b=null}},T={dC:function dC(){},ii:function ii(){},ij:function ij(){var _=this
_.y=_.d=_.c=_.b=_.a=null},ik:function ik(a){var _=this
_.a=a
_.e=_.d=_.b=null},il:function il(a,b,c,d,e,f,g){var _=this
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
H.kL.prototype={}
J.a.prototype={
t:function(a,b){return a===b},
gJ:function(a){return H.ch(a)},
i:function(a){return"Instance of '"+H.e(H.ci(a))+"'"}}
J.fL.prototype={
i:function(a){return String(a)},
gJ:function(a){return a?519018:218159},
$iaK:1}
J.d9.prototype={
t:function(a,b){return null==b},
i:function(a){return"null"},
gJ:function(a){return 0}}
J.da.prototype={
gJ:function(a){return 0},
i:function(a){return String(a)},
$in4:1}
J.hB.prototype={}
J.bH.prototype={}
J.bd.prototype={
i:function(a){var u=a[$.mm()]
if(u==null)return this.ei(a)
return"JavaScript function for "+H.e(J.a5(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.bb.prototype={
ct:function(a,b){if(!!a.fixed$length)H.m(P.z("removeAt"))
if(b<0||b>=a.length)throw H.c(P.dr(b,null))
return a.splice(b,1)[0]},
D:function(a,b){var u
if(!!a.fixed$length)H.m(P.z("remove"))
for(u=0;u<a.length;++u)if(J.A(a[u],b)){a.splice(u,1)
return!0}return!1},
ad:function(a,b){var u,t
if(!!a.fixed$length)H.m(P.z("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.n)(b),++t)a.push(b[t])},
H:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.c(P.aO(a))}},
j:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.d(r,u)
r[u]=t}return r.join(b)},
hN:function(a){return this.j(a,"")},
hF:function(a,b,c){var u,t,s=a.length
for(u=b,t=0;t<s;++t){u=c.$2(u,a[t])
if(a.length!==s)throw H.c(P.aO(a))}return u},
hG:function(a,b,c){return this.hF(a,b,c,null)},
hE:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.c(P.aO(a))}throw H.c(H.fJ())},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
ee:function(a,b,c){if(b<0||b>a.length)throw H.c(P.a_(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.c(P.a_(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.aL(a,0)])
return H.b(a.slice(b,c),[H.aL(a,0)])},
ghD:function(a){if(a.length>0)return a[0]
throw H.c(H.fJ())},
gar:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.fJ())},
dc:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.c(P.aO(a))}return!1},
b0:function(a,b){if(!!a.immutable$list)H.m(P.z("sort"))
H.nz(a,b==null?J.od():b)},
ed:function(a){return this.b0(a,null)},
N:function(a,b){var u
for(u=0;u<a.length;++u)if(J.A(a[u],b))return!0
return!1},
i:function(a){return P.kI(a,"[","]")},
gT:function(a){return new J.ad(a,a.length)},
gJ:function(a){return H.ch(a)},
gl:function(a){return a.length},
sl:function(a,b){var u="newLength"
if(!!a.fixed$length)H.m(P.z("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.kz(b,u,null))
if(b<0)throw H.c(P.a_(b,0,null,u,null))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bR(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.m(P.z("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bR(a,b))
a[b]=c},
$it:1,
$ij:1,
$ip:1}
J.kK.prototype={}
J.ad.prototype={
gE:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.n(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.c5.prototype={
aR:function(a,b){var u
if(typeof b!=="number")throw H.c(H.ah(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbs(b)
if(this.gbs(a)===u)return 0
if(this.gbs(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbs:function(a){return a===0?1/a<0:a<0},
ih:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.z(""+a+".toInt()"))},
ci:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.z(""+a+".floor()"))},
ak:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.z(""+a+".round()"))},
e3:function(a,b){var u
if(b>20)throw H.c(P.a_(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbs(a))return"-"+u
return u},
bd:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.a_(b,2,36,"radix",null))
u=a.toString(b)
if(C.a.Y(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.m(P.z("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.d(t,1)
u=t[1]
if(3>=s)return H.d(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.a.q("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gJ:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
bf:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
ek:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d4(a,b)},
a4:function(a,b){return(a|0)===a?a/b|0:this.d4(a,b)},
d4:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.z("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
aN:function(a,b){var u
if(a>0)u=this.d3(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
h2:function(a,b){if(b<0)throw H.c(H.ah(b))
return this.d3(a,b)},
d3:function(a,b){return b>31?0:a>>>b},
$iJ:1,
$iac:1}
J.d8.prototype={$iw:1}
J.d7.prototype={}
J.bc.prototype={
Y:function(a,b){if(b<0)throw H.c(H.bR(a,b))
if(b>=a.length)H.m(H.bR(a,b))
return a.charCodeAt(b)},
G:function(a,b){if(b>=a.length)throw H.c(H.bR(a,b))
return a.charCodeAt(b)},
w:function(a,b){if(typeof b!=="string")throw H.c(P.kz(b,null,null))
return a+b},
aX:function(a,b,c,d){var u,t
c=P.aY(b,c,a.length)
if(typeof c!=="number"||Math.floor(c)!==c)H.m(H.ah(c))
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a5:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.a_(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a3:function(a,b){return this.a5(a,b,0)},
u:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.m(H.ah(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.O()
if(b<0)throw H.c(P.dr(b,null))
if(b>c)throw H.c(P.dr(b,null))
if(c>a.length)throw H.c(P.dr(c,null))
return a.substring(b,c)},
a6:function(a,b){return this.u(a,b,null)},
ij:function(a){return a.toLowerCase()},
q:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.L)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ag:function(a,b){var u=b-a.length
if(u<=0)return a
return this.q(" ",u)+a},
br:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.a_(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
dH:function(a,b){return this.br(a,b,0)},
aR:function(a,b){var u
if(typeof b!=="string")throw H.c(H.ah(b))
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
H.o.prototype={
gl:function(a){return this.a.length},
h:function(a,b){return C.a.Y(this.a,b)},
$at:function(){return[P.w]},
$ax:function(){return[P.w]},
$aj:function(){return[P.w]},
$ap:function(){return[P.w]}}
H.t.prototype={}
H.dd.prototype={
gT:function(a){return new H.be(this,this.gl(this))},
bB:function(a,b){return this.eh(0,b)}}
H.be.prototype={
gE:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=J.bo(s),q=r.gl(s)
if(t.b!=q)throw H.c(P.aO(s))
u=t.c
if(typeof q!=="number")return H.u(q)
if(u>=q){t.d=null
return!1}t.d=r.L(s,u);++t.c
return!0}}
H.c8.prototype={
gT:function(a){return new H.h1(J.aM(this.a),this.b)},
gl:function(a){return J.aj(this.a)},
L:function(a,b){return this.b.$1(J.eQ(this.a,b))},
$aj:function(a,b){return[b]}}
H.fn.prototype={$it:1,
$at:function(a,b){return[b]}}
H.h1.prototype={
v:function(){var u=this,t=u.b
if(t.v()){u.a=u.c.$1(t.gE(t))
return!0}u.a=null
return!1},
gE:function(a){return this.a}}
H.h2.prototype={
gl:function(a){return J.aj(this.a)},
L:function(a,b){return this.b.$1(J.eQ(this.a,b))},
$at:function(a,b){return[b]},
$add:function(a,b){return[b]},
$aj:function(a,b){return[b]}}
H.cv.prototype={
gT:function(a){return new H.j8(J.aM(this.a),this.b)}}
H.j8.prototype={
v:function(){var u,t
for(u=this.a,t=this.b;u.v();)if(t.$1(u.gE(u)))return!0
return!1},
gE:function(a){var u=this.a
return u.gE(u)}}
H.d4.prototype={}
H.iI.prototype={
m:function(a,b,c){throw H.c(P.z("Cannot modify an unmodifiable list"))}}
H.dK.prototype={}
H.f8.prototype={
i:function(a){return P.kP(this)},
m:function(a,b,c){return H.mU()},
$iS:1}
H.f9.prototype={
gl:function(a){return this.a},
c4:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.c4(0,b))return
return this.cU(b)},
cU:function(a){return this.b[a]},
H:function(a,b){var u,t,s,r=this.c
for(u=r.length,t=0;t<u;++t){s=r[t]
b.$2(s,this.cU(s))}}}
H.iv.prototype={
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
H.hx.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fO.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.iH.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kx.prototype={
$1:function(a){if(!!J.Q(a).$ibv)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:9}
H.eo.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bY.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.cN(t==null?"unknown":t)+"'"},
gio:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.ie.prototype={}
H.i6.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cN(u)+"'"}}
H.bW.prototype={
t:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bW))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gJ:function(a){var u,t=this.c
if(t==null)u=H.ch(this.a)
else u=typeof t!=="object"?J.cR(t):H.ch(t)
return(u^H.ch(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.ci(u))+"'")}}
H.f3.prototype={
i:function(a){return this.a}}
H.hQ.prototype={
i:function(a){return"RuntimeError: "+H.e(this.a)}}
H.H.prototype={
gl:function(a){return this.a},
ghM:function(a){return this.a===0},
ga0:function(a){return new H.fT(this,[H.aL(this,0)])},
gim:function(a){var u=this
return H.nc(u.ga0(u),new H.fN(u),H.aL(u,0),H.aL(u,1))},
c4:function(a,b){var u=this.b
if(u==null)return!1
return this.eI(u,b)},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bj(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bj(r,b)
s=t==null?null:t.b
return s}else return q.hK(b)},
hK:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.cW(r,s.dI(a))
t=s.dJ(u,a)
if(t<0)return
return u[t].b},
m:function(a,b,c){var u,t,s=this
if(typeof b==="string"){u=s.b
s.cN(u==null?s.b=s.bT():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cN(t==null?s.c=s.bT():t,b,c)}else s.hL(b,c)},
hL:function(a,b){var u,t,s,r=this,q=r.d
if(q==null)q=r.d=r.bT()
u=r.dI(a)
t=r.cW(q,u)
if(t==null)r.bY(q,u,[r.bU(a,b)])
else{s=r.dJ(t,a)
if(s>=0)t[s].b=b
else t.push(r.bU(a,b))}},
H:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.c(P.aO(u))
t=t.c}},
cN:function(a,b,c){var u=this.bj(a,b)
if(u==null)this.bY(a,b,this.bU(b,c))
else u.b=c},
eT:function(){this.r=this.r+1&67108863},
bU:function(a,b){var u,t=this,s=new H.fS(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.eT()
return s},
dI:function(a){return J.cR(a)&0x3ffffff},
dJ:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.A(a[t].a,b))return t
return-1},
i:function(a){return P.kP(this)},
bj:function(a,b){return a[b]},
cW:function(a,b){return a[b]},
bY:function(a,b,c){a[b]=c},
eM:function(a,b){delete a[b]},
eI:function(a,b){return this.bj(a,b)!=null},
bT:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bY(t,u,t)
this.eM(t,u)
return t}}
H.fN.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.aL(u,1),args:[H.aL(u,0)]}}}
H.fS.prototype={}
H.fT.prototype={
gl:function(a){return this.a.a},
gT:function(a){var u=this.a,t=new H.fU(u,u.r)
t.c=u.e
return t}}
H.fU.prototype={
gE:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.aO(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.ka.prototype={
$1:function(a){return this.a(a)},
$S:9}
H.kb.prototype={
$2:function(a,b){return this.a(a,b)}}
H.kc.prototype={
$1:function(a){return this.a(a)}}
H.fM.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$ins:1}
H.cd.prototype={$icd:1}
H.bg.prototype={$ibg:1}
H.di.prototype={
gl:function(a){return a.length},
$iB:1,
$aB:function(){}}
H.ce.prototype={
h:function(a,b){H.aJ(b,a,a.length)
return a[b]},
m:function(a,b,c){H.aJ(b,a,a.length)
a[b]=c},
$it:1,
$at:function(){return[P.J]},
$ax:function(){return[P.J]},
$ij:1,
$aj:function(){return[P.J]},
$ip:1,
$ap:function(){return[P.J]}}
H.dj.prototype={
m:function(a,b,c){H.aJ(b,a,a.length)
a[b]=c},
$it:1,
$at:function(){return[P.w]},
$ax:function(){return[P.w]},
$ij:1,
$aj:function(){return[P.w]},
$ip:1,
$ap:function(){return[P.w]}}
H.hp.prototype={
h:function(a,b){H.aJ(b,a,a.length)
return a[b]}}
H.hq.prototype={
h:function(a,b){H.aJ(b,a,a.length)
return a[b]}}
H.hr.prototype={
h:function(a,b){H.aJ(b,a,a.length)
return a[b]}}
H.hs.prototype={
h:function(a,b){H.aJ(b,a,a.length)
return a[b]}}
H.ht.prototype={
h:function(a,b){H.aJ(b,a,a.length)
return a[b]}}
H.dk.prototype={
gl:function(a){return a.length},
h:function(a,b){H.aJ(b,a,a.length)
return a[b]}}
H.cf.prototype={
gl:function(a){return a.length},
h:function(a,b){H.aJ(b,a,a.length)
return a[b]},
$icf:1,
$ibF:1}
H.cz.prototype={}
H.cA.prototype={}
H.cB.prototype={}
H.cC.prototype={}
P.ja.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:16}
P.j9.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.jb.prototype={
$0:function(){this.a.$0()}}
P.jc.prototype={
$0:function(){this.a.$0()}}
P.eu.prototype={
ex:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bQ(new P.jJ(this,b),0),a)
else throw H.c(P.z("`setTimeout()` not found."))},
ey:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bQ(new P.jI(this,a,Date.now(),b),0),a)
else throw H.c(P.z("Periodic timer."))},
$idE:1}
P.jJ.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.jI.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.ek(u,q)}s.c=r
t.d.$1(s)}}
P.bJ.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.e(this.a)+")"}}
P.bK.prototype={
gE:function(a){var u=this.c
if(u==null)return this.b
return u.gE(u)},
v:function(){var u,t,s,r,q=this
for(;!0;){u=q.c
if(u!=null)if(u.v())return!0
else q.c=null
t=function(a,b,c){var p,o=b
while(true)try{return a(o,p)}catch(n){p=n
o=c}}(q.a,0,1)
if(t instanceof P.bJ){s=t.b
if(s===2){u=q.d
if(u==null||u.length===0){q.b=null
return!1}if(0>=u.length)return H.d(u,-1)
q.a=u.pop()
continue}else{u=t.a
if(s===3)throw u
else{r=J.aM(u)
if(!!r.$ibK){u=q.d
if(u==null)u=q.d=[]
u.push(q.a)
q.a=r.a
continue}else{q.c=r
continue}}}}else{q.b=t
return!0}}return!1}}
P.jF.prototype={
gT:function(a){return new P.bK(this.a())}}
P.dR.prototype={}
P.dz.prototype={}
P.i9.prototype={}
P.dE.prototype={}
P.jS.prototype={}
P.k0.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dn():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u}}
P.jq.prototype={
ib:function(a){var u,t,s,r=null
try{if(C.f===$.at){a.$0()
return}P.oC(r,r,this,a)}catch(s){u=H.ai(s)
t=H.l6(s)
P.m2(r,r,this,u,t)}},
ic:function(a,b){var u,t,s,r=null
try{if(C.f===$.at){a.$1(b)
return}P.oD(r,r,this,a,b)}catch(s){u=H.ai(s)
t=H.l6(s)
P.m2(r,r,this,u,t)}},
ie:function(a,b){return this.ic(a,b,null)},
hh:function(a){return new P.jr(this,a)},
dh:function(a,b){return new P.js(this,a,b)}}
P.jr.prototype={
$0:function(){return this.a.ib(this.b)}}
P.js.prototype={
$1:function(a){return this.a.ie(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jn.prototype={
gT:function(a){var u=new P.e5(this,this.r)
u.c=this.e
return u},
gl:function(a){return this.a},
N:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.eG(b)
return t}},
eG:function(a){var u=this.d
if(u==null)return!1
return this.bK(this.cV(u,a),a)>=0},
n:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cO(u==null?s.b=P.kX():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cO(t==null?s.c=P.kX():t,b)}else return s.eA(0,b)},
eA:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.kX()
u=s.cQ(b)
t=r[u]
if(t==null)r[u]=[s.bH(b)]
else{if(s.bK(t,b)>=0)return!1
t.push(s.bH(b))}return!0},
D:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fO(this.c,b)
else return this.fN(0,b)},
fN:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cV(r,b)
t=s.bK(u,b)
if(t<0)return!1
s.d6(u.splice(t,1)[0])
return!0},
cO:function(a,b){if(a[b]!=null)return!1
a[b]=this.bH(b)
return!0},
fO:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.d6(u)
delete a[b]
return!0},
cP:function(){this.r=1073741823&this.r+1},
bH:function(a){var u,t=this,s=new P.jo(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cP()
return s},
d6:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cP()},
cQ:function(a){return J.cR(a)&1073741823},
cV:function(a,b){return a[this.cQ(b)]},
bK:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.A(a[t].a,b))return t
return-1}}
P.jo.prototype={}
P.e5.prototype={
gE:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.aO(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fI.prototype={}
P.fV.prototype={
$2:function(a,b){this.a.m(0,a,b)},
$S:3}
P.fW.prototype={$it:1,$ij:1,$ip:1}
P.x.prototype={
gT:function(a){return new H.be(a,this.gl(a))},
L:function(a,b){return this.h(a,b)},
ii:function(a,b){var u,t,s=this,r=H.b([],[H.oV(s,a,"x",0)])
C.b.sl(r,s.gl(a))
u=0
while(!0){t=s.gl(a)
if(typeof t!=="number")return H.u(t)
if(!(u<t))break
t=s.h(a,u)
if(u>=r.length)return H.d(r,u)
r[u]=t;++u}return r},
cw:function(a){return this.ii(a,!0)},
hA:function(a,b,c,d){var u
P.aY(b,c,this.gl(a))
for(u=b;u<c;++u)this.m(a,u,d)},
i:function(a){return P.kI(a,"[","]")}}
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
H:function(a,b){var u,t
for(u=J.aM(this.ga0(a));u.v();){t=u.gE(u)
b.$2(t,this.h(a,t))}},
gl:function(a){return J.aj(this.ga0(a))},
i:function(a){return P.kP(a)},
$iS:1}
P.jK.prototype={
m:function(a,b,c){throw H.c(P.z("Cannot modify unmodifiable map"))}}
P.h0.prototype={
h:function(a,b){return J.bV(this.a,b)},
m:function(a,b,c){J.ky(this.a,b,c)},
H:function(a,b){J.lf(this.a,b)},
gl:function(a){return J.aj(this.a)},
i:function(a){return J.a5(this.a)},
$iS:1}
P.dL.prototype={}
P.ju.prototype={
ad:function(a,b){var u
for(u=J.aM(b);u.v();)this.n(0,u.gE(u))},
i:function(a){return P.kI(this,"{","}")},
L:function(a,b){var u,t,s
P.lA(b,"index")
for(u=P.nU(this,this.r),t=0;u.v();){s=u.d
if(b===t)return s;++t}throw H.c(P.M(b,this,"index",null,t))},
$it:1,
$ij:1}
P.e6.prototype={}
P.eA.prototype={}
P.f_.prototype={
hP:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.aY(a0,a1,b.length)
u=$.mB()
if(typeof a1!=="number")return H.u(a1)
t=a0
s=t
r=null
q=-1
p=-1
o=0
for(;t<a1;t=n){n=t+1
m=C.a.G(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.k9(C.a.G(b,n))
j=H.k9(C.a.G(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.d(u,i)
h=u[i]
if(h>=0){i=C.a.Y("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.T("")
g=r.a+=C.a.u(b,s,t)
r.a=g+H.bC(m)
s=n
continue}}throw H.c(P.U("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.a.u(b,s,a1)
f=g.length
if(q>=0)P.lj(b,p,a1,q,o,f)
else{e=C.c.bf(f-1,4)+1
if(e===1)throw H.c(P.U(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.a.aX(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.lj(b,p,a1,q,o,d)
else{e=C.c.bf(d,4)
if(e===1)throw H.c(P.U(c,b,a1))
if(e>1)b=C.a.aX(b,a1,a1,e===2?"==":"=")}return b}}
P.f0.prototype={}
P.f5.prototype={}
P.fa.prototype={}
P.fp.prototype={}
P.fG.prototype={
i:function(a){return this.a}}
P.fF.prototype={
eJ:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.T("")
if(r>b)q.a+=C.a.u(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.mM(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.iQ.prototype={
ghz:function(){return C.M}}
P.iS.prototype={
c5:function(a){var u,t,s,r=P.aY(0,null,a.length)
if(typeof r!=="number")return r.K()
u=r-0
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.jQ(t)
if(s.eO(a,0,r)!==r)s.d8(J.mI(a,r-1),0)
return new Uint8Array(t.subarray(0,H.oa(0,s.b,t.length)))}}
P.jQ.prototype={
d8:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
eO:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.a.Y(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.a.G(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.d8(r,C.a.G(a,p)))s=p}else if(r<=2047){q=n.b
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
P.iR.prototype={
c5:function(a){var u,t,s,r,q,p,o,n,m=P.nF(!1,a,0,null)
if(m!=null)return m
u=P.aY(0,null,J.aj(a))
t=P.m4(a,0,u)
if(t>0){s=P.cl(a,0,t)
if(t===u)return s
r=new P.T(s)
q=t
p=!1}else{q=0
r=null
p=!0}if(r==null)r=new P.T("")
o=new P.jP(!1,r)
o.c=p
o.hl(a,q,u)
if(o.e>0){H.m(P.U("Unfinished UTF-8 octet sequence",a,u))
r.a+=H.bC(65533)
o.f=o.e=o.d=0}n=r.a
return n.charCodeAt(0)==0?n:n}}
P.jP.prototype={
hl:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=this,k="Bad UTF-8 encoding 0x",j=l.d,i=l.e,h=l.f
l.f=l.e=l.d=0
$label0$0:for(u=J.bo(a),t=l.b,s=b;!0;s=n){$label1$1:if(i>0){do{if(s===c)break $label0$0
r=u.h(a,s)
if(typeof r!=="number")return r.a8()
if((r&192)!==128){q=P.U(k+C.c.bd(r,16),a,s)
throw H.c(q)}else{j=(j<<6|r&63)>>>0;--i;++s}}while(i>0)
q=h-1
if(q<0||q>=4)return H.d(C.v,q)
if(j<=C.v[q]){q=P.U("Overlong encoding of 0x"+C.c.bd(j,16),a,s-h-1)
throw H.c(q)}if(j>1114111){q=P.U("Character outside valid Unicode range: 0x"+C.c.bd(j,16),a,s-h-1)
throw H.c(q)}if(!l.c||j!==65279)t.a+=H.bC(j)
l.c=!1}if(typeof c!=="number")return H.u(c)
q=s<c
for(;q;){p=P.m4(a,s,c)
if(p>0){l.c=!1
o=s+p
t.a+=P.cl(a,s,o)
if(o===c)break}else o=s
n=o+1
r=u.h(a,o)
if(typeof r!=="number")return r.O()
if(r<0){m=P.U("Negative UTF-8 code unit: -0x"+C.c.bd(-r,16),a,n-1)
throw H.c(m)}else{if((r&224)===192){j=r&31
i=1
h=1
continue $label0$0}if((r&240)===224){j=r&15
i=2
h=2
continue $label0$0}if((r&248)===240&&r<245){j=r&7
i=3
h=3
continue $label0$0}m=P.U(k+C.c.bd(r,16),a,n-1)
throw H.c(m)}}break $label0$0}if(i>0){l.d=j
l.e=i
l.f=h}}}
P.aK.prototype={}
P.ae.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.ae&&this.a===b.a&&!0},
aR:function(a,b){return C.c.aR(this.a,b.a)},
gJ:function(a){var u=this.a
return(u^C.c.aN(u,30))&1073741823},
i:function(a){var u=this,t=P.mV(H.no(u)),s=P.d_(H.nm(u)),r=P.d_(H.ni(u)),q=P.d_(H.nj(u)),p=P.d_(H.nl(u)),o=P.d_(H.nn(u)),n=P.mW(H.nk(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.J.prototype={}
P.b9.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.b9&&this.a===b.a},
gJ:function(a){return C.c.gJ(this.a)},
aR:function(a,b){return C.c.aR(this.a,b.a)},
i:function(a){var u,t,s,r=new P.fm(),q=this.a
if(q<0)return"-"+new P.b9(0-q).i(0)
u=r.$1(C.c.a4(q,6e7)%60)
t=r.$1(C.c.a4(q,1e6)%60)
s=new P.fl().$1(q%1e6)
return""+C.c.a4(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
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
P.bv.prototype={}
P.dn.prototype={
i:function(a){return"Throw of null."}}
P.ao.prototype={
gbJ:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbI:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbJ()+o+u
if(!q.a)return t
s=q.gbI()
r=P.kH(q.b)
return t+s+": "+r}}
P.bD.prototype={
gbJ:function(){return"RangeError"},
gbI:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.fH.prototype={
gbJ:function(){return"RangeError"},
gbI:function(){var u,t=this.b
if(typeof t!=="number")return t.O()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gl:function(a){return this.f}}
P.iJ.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iF.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.ck.prototype={
i:function(a){return"Bad state: "+this.a}}
P.f7.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.kH(u)+"."}}
P.hA.prototype={
i:function(a){return"Out of Memory"},
$ibv:1}
P.dx.prototype={
i:function(a){return"Stack Overflow"},
$ibv:1}
P.ff.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dZ.prototype={
i:function(a){return"Exception: "+this.a}}
P.fz.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.a.u(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.a.G(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.a.Y(f,q)
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
k=""}j=C.a.u(f,m,n)
return h+l+j+k+"\n"+C.a.q(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.e(g)+")"):h}}
P.fB.prototype={}
P.w.prototype={}
P.j.prototype={
bB:function(a,b){return new H.cv(this,b,[H.l5(this,"j",0)])},
gl:function(a){var u,t=this.gT(this)
for(u=0;t.v();)++u
return u},
gaG:function(a){var u,t=this.gT(this)
if(!t.v())throw H.c(H.fJ())
u=t.gE(t)
if(t.v())throw H.c(H.n1())
return u},
L:function(a,b){var u,t,s
P.lA(b,"index")
for(u=this.gT(this),t=0;u.v();){s=u.gE(u)
if(b===t)return s;++t}throw H.c(P.M(b,this,"index",null,t))},
i:function(a){return P.n0(this,"(",")")}}
P.fK.prototype={}
P.p.prototype={$it:1,$ij:1}
P.S.prototype={}
P.bh.prototype={
gJ:function(a){return P.a2.prototype.gJ.call(this,this)},
i:function(a){return"null"}}
P.ac.prototype={}
P.a2.prototype={constructor:P.a2,$ia2:1,
t:function(a,b){return this===b},
gJ:function(a){return H.ch(this)},
i:function(a){return"Instance of '"+H.e(H.ci(this))+"'"},
toString:function(){return this.i(this)}}
P.h.prototype={}
P.T.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
P.iO.prototype={
$2:function(a,b){var u,t,s,r=J.cL(b).dH(b,"=")
if(r===-1){if(b!=="")J.ky(a,P.l0(b,0,b.length,this.a,!0),"")}else if(r!==0){u=C.a.u(b,0,r)
t=C.a.a6(b,r+1)
s=this.a
J.ky(a,P.l0(u,0,u.length,s,!0),P.l0(t,0,t.length,s,!0))}return a}}
P.iL.prototype={
$2:function(a,b){throw H.c(P.U("Illegal IPv4 address, "+a,this.a,b))}}
P.iM.prototype={
$2:function(a,b){throw H.c(P.U("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.iN.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.eO(C.a.u(this.b,a,b),null,16)
if(typeof u!=="number")return u.O()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u}}
P.bL.prototype={
ge5:function(){return this.b},
gcj:function(a){var u=this.c
if(u==null)return""
if(C.a.a3(u,"["))return C.a.u(u,1,u.length-1)
return u},
gbu:function(a){var u=this.d
if(u==null)return P.lW(this.a)
return u},
gcr:function(a){var u=this.f
return u==null?"":u},
gdC:function(){var u=this.r
return u==null?"":u},
e_:function(a,b){var u,t,s,r=this,q=r.a,p=q==="file",o=r.b,n=r.d,m=r.c
if(!(m!=null))m=o.length!==0||n!=null||p?"":null
u=r.e
if(!p)t=m!=null&&u.length!==0
else t=!0
if(t&&!C.a.a3(u,"/"))u="/"+u
s=P.kZ(null,0,0,b)
return new P.bL(q,o,m,n,u,s,r.r)},
gcs:function(){var u,t=this.Q
if(t==null){t=this.f
u=P.h
u=this.Q=new P.dL(P.lM(t==null?"":t),[u,u])
t=u}return t},
gdD:function(){return this.c!=null},
gdG:function(){return this.f!=null},
gdE:function(){return this.r!=null},
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
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.Q(b).$ikT)if(s.a==b.gbC())if(s.c!=null===b.gdD())if(s.b==b.ge5())if(s.gcj(s)==b.gcj(b))if(s.gbu(s)==b.gbu(b))if(s.e===b.gdW(b)){u=s.f
t=u==null
if(!t===b.gdG()){if(t)u=""
if(u===b.gcr(b)){u=s.r
t=u==null
if(!t===b.gdE()){if(t)u=""
u=u===b.gdC()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gJ:function(a){var u=this.z
return u==null?this.z=C.a.gJ(this.i(0)):u},
$ikT:1,
gbC:function(){return this.a},
gdW:function(a){return this.e}}
P.jL.prototype={
$1:function(a){throw H.c(P.U("Invalid port",this.a,this.b+1))}}
P.jM.prototype={
$1:function(a){return P.eB(C.W,a,C.e,!1)}}
P.jO.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.e(P.eB(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.e(P.eB(C.h,b,C.e,!0))}}}
P.jN.prototype={
$2:function(a,b){var u,t
if(b==null||typeof b==="string")this.a.$2(a,b)
else for(u=J.aM(b),t=this.a;u.v();)t.$2(a,u.gE(u))}}
P.iK.prototype={
ge4:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.d(o,0)
u=q.a
o=o[0]+1
t=C.a.br(u,"?",o)
s=u.length
if(t>=0){r=P.cH(u,t+1,s,C.l,!1)
s=t}else r=p
return q.c=new P.jg("data",p,p,p,P.cH(u,o,s,C.z,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.d(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.jW.prototype={
$1:function(a){return new Uint8Array(96)}}
P.jV.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.d(u,a)
u=u[a]
J.mJ(u,0,96,b)
return u},
$S:17}
P.jX.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.a.G(b,s)^96
if(r>=t)return H.d(a,r)
a[r]=c}}}
P.jY.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.a.G(b,0),t=C.a.G(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.d(a,r)
a[r]=c}}}
P.jx.prototype={
gdD:function(){return this.c>0},
gdF:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.w()
t=this.e
if(typeof t!=="number")return H.u(t)
t=u+1<t
u=t}else u=!1
return u},
gdG:function(){var u=this.f
if(typeof u!=="number")return u.O()
return u<this.r},
gdE:function(){return this.r<this.a.length},
gcX:function(){return this.b===4&&C.a.a3(this.a,"http")},
gcY:function(){return this.b===5&&C.a.a3(this.a,"https")},
gbC:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gcX())q=t.x="http"
else if(t.gcY()){t.x="https"
q="https"}else if(q===4&&C.a.a3(t.a,s)){t.x=s
q=s}else if(q===7&&C.a.a3(t.a,r)){t.x=r
q=r}else{q=C.a.u(t.a,0,q)
t.x=q}return q},
ge5:function(){var u=this.c,t=this.b+3
return u>t?C.a.u(this.a,t,u-1):""},
gcj:function(a){var u=this.c
return u>0?C.a.u(this.a,u,this.d):""},
gbu:function(a){var u,t=this
if(t.gdF()){u=t.d
if(typeof u!=="number")return u.w()
return P.eO(C.a.u(t.a,u+1,t.e),null,null)}if(t.gcX())return 80
if(t.gcY())return 443
return 0},
gdW:function(a){return C.a.u(this.a,this.e,this.f)},
gcr:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.O()
return u<t?C.a.u(this.a,u+1,t):""},
gdC:function(){var u=this.r,t=this.a
return u<t.length?C.a.a6(t,u+1):""},
gcs:function(){var u=this,t=u.f
if(typeof t!=="number")return t.O()
if(t>=u.r)return C.X
t=P.h
return new P.dL(P.lM(u.gcr(u)),[t,t])},
e_:function(a,b){var u,t,s,r,q,p=this,o=null,n=p.gbC(),m=n==="file",l=p.c,k=l>0?C.a.u(p.a,p.b+3,l):"",j=p.gdF()?p.gbu(p):o
l=p.c
if(l>0)u=C.a.u(p.a,l,p.d)
else u=k.length!==0||j!=null||m?"":o
l=p.a
t=C.a.u(l,p.e,p.f)
if(!m)s=u!=null&&t.length!==0
else s=!0
if(s&&!C.a.a3(t,"/"))t="/"+t
r=P.kZ(o,0,0,b)
s=p.r
q=s<l.length?C.a.a6(l,s+1):o
return new P.bL(n,k,u,j,t,r,q)},
gJ:function(a){var u=this.y
return u==null?this.y=C.a.gJ(this.a):u},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.Q(b).$ikT&&this.a===b.i(0)},
i:function(a){return this.a},
$ikT:1}
P.jg.prototype={}
W.q.prototype={}
W.eR.prototype={
gl:function(a){return a.length}}
W.eS.prototype={
i:function(a){return String(a)}}
W.eT.prototype={
i:function(a){return String(a)}}
W.br.prototype={$ibr:1}
W.bs.prototype={$ibs:1}
W.bt.prototype={
cC:function(a,b,c){if(c!=null)return a.getContext(b,P.oM(c))
return a.getContext(b)},
e8:function(a,b){return this.cC(a,b,null)},
$ibt:1}
W.b7.prototype={
gl:function(a){return a.length}}
W.fb.prototype={
gl:function(a){return a.length}}
W.G.prototype={$iG:1}
W.bZ.prototype={
gl:function(a){return a.length}}
W.fc.prototype={}
W.al.prototype={}
W.av.prototype={}
W.fd.prototype={
gl:function(a){return a.length}}
W.fe.prototype={
gl:function(a){return a.length}}
W.fh.prototype={
gl:function(a){return a.length}}
W.ap.prototype={$iap:1}
W.fi.prototype={
i:function(a){return String(a)}}
W.d1.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$at:function(){return[[P.aa,P.ac]]},
$iB:1,
$aB:function(){return[[P.aa,P.ac]]},
$ax:function(){return[[P.aa,P.ac]]},
$ij:1,
$aj:function(){return[[P.aa,P.ac]]},
$ip:1,
$ap:function(){return[[P.aa,P.ac]]}}
W.d2.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gaF(a))+" x "+H.e(this.gaA(a))},
t:function(a,b){var u
if(b==null)return!1
u=J.Q(b)
return!!u.$iaa&&a.left===u.gbt(b)&&a.top===u.gby(b)&&this.gaF(a)===u.gaF(b)&&this.gaA(a)===u.gaA(b)},
gJ:function(a){return W.lU(C.d.gJ(a.left),C.d.gJ(a.top),C.d.gJ(this.gaF(a)),C.d.gJ(this.gaA(a)))},
gdj:function(a){return a.bottom},
gaA:function(a){return a.height},
gbt:function(a){return a.left},
gcv:function(a){return a.right},
gby:function(a){return a.top},
gaF:function(a){return a.width},
$iaa:1,
$aaa:function(){return[P.ac]}}
W.fj.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$at:function(){return[P.h]},
$iB:1,
$aB:function(){return[P.h]},
$ax:function(){return[P.h]},
$ij:1,
$aj:function(){return[P.h]},
$ip:1,
$ap:function(){return[P.h]}}
W.fk.prototype={
gl:function(a){return a.length}}
W.je.prototype={
gl:function(a){return this.b.length},
h:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
m:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
this.a.replaceChild(c,u[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gT:function(a){var u=this.cw(this)
return new J.ad(u,u.length)},
$at:function(){return[W.R]},
$ax:function(){return[W.R]},
$aj:function(){return[W.R]},
$ap:function(){return[W.R]}}
W.R.prototype={
ghg:function(a){return new W.jh(a)},
gc3:function(a){return new W.je(a,a.children)},
gdk:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.O()
if(s<0)s=-s*0
if(typeof r!=="number")return r.O()
if(r<0)r=-r*0
return new P.aa(u,t,s,r,[P.ac])},
i:function(a){return a.localName},
ae:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.lq
if(u==null){u=H.b([],[W.aV])
t=new W.dm(u)
u.push(W.lT(null))
u.push(W.lV())
$.lq=t
d=t}else d=u
u=$.lp
if(u==null){u=new W.eC(d)
$.lp=u
c=u}else{u.a=d
c=u}}if($.aP==null){u=document
t=u.implementation.createHTMLDocument("")
$.aP=t
$.kG=t.createRange()
s=$.aP.createElement("base")
s.href=u.baseURI
$.aP.head.appendChild(s)}u=$.aP
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.aP
if(!!this.$ibs)r=u.body
else{r=u.createElement(a.tagName)
$.aP.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.b.N(C.U,a.tagName)){$.kG.selectNodeContents(r)
q=$.kG.createContextualFragment(b)}else{r.innerHTML=b
q=$.aP.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.aP.body
if(r==null?u!=null:r!==u)J.lh(r)
c.cD(q)
document.adoptNode(q)
return q},
ho:function(a,b,c){return this.ae(a,b,c,null)},
ea:function(a,b){a.textContent=null
a.appendChild(this.ae(a,b,null,null))},
$iR:1,
ge1:function(a){return a.tagName}}
W.fo.prototype={
$1:function(a){return!!J.Q(a).$iR}}
W.i.prototype={$ii:1}
W.f.prototype={
ha:function(a,b,c,d){if(c!=null)this.eB(a,b,c,!1)},
eB:function(a,b,c,d){return a.addEventListener(b,H.bQ(c,1),!1)}}
W.aq.prototype={$iaq:1}
W.c1.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$at:function(){return[W.aq]},
$iB:1,
$aB:function(){return[W.aq]},
$ax:function(){return[W.aq]},
$ij:1,
$aj:function(){return[W.aq]},
$ip:1,
$ap:function(){return[W.aq]},
$ic1:1}
W.fu.prototype={
gl:function(a){return a.length}}
W.fy.prototype={
gl:function(a){return a.length}}
W.aw.prototype={$iaw:1}
W.fE.prototype={
gl:function(a){return a.length}}
W.c3.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$at:function(){return[W.D]},
$iB:1,
$aB:function(){return[W.D]},
$ax:function(){return[W.D]},
$ij:1,
$aj:function(){return[W.D]},
$ip:1,
$ap:function(){return[W.D]}}
W.aR.prototype={$iaR:1,
gdl:function(a){return a.data}}
W.c4.prototype={$ic4:1}
W.bA.prototype={$ibA:1}
W.fX.prototype={
i:function(a){return String(a)}}
W.hi.prototype={
gl:function(a){return a.length}}
W.cb.prototype={$icb:1}
W.hj.prototype={
h:function(a,b){return P.b1(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b1(u.value[1]))}},
ga0:function(a){var u=H.b([],[P.h])
this.H(a,new W.hk(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.z("Not supported"))},
$aa1:function(){return[P.h,null]},
$iS:1,
$aS:function(){return[P.h,null]}}
W.hk.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hl.prototype={
h:function(a,b){return P.b1(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b1(u.value[1]))}},
ga0:function(a){var u=H.b([],[P.h])
this.H(a,new W.hm(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.z("Not supported"))},
$aa1:function(){return[P.h,null]},
$iS:1,
$aS:function(){return[P.h,null]}}
W.hm.prototype={
$2:function(a,b){return this.a.push(a)}}
W.az.prototype={$iaz:1}
W.hn.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$at:function(){return[W.az]},
$iB:1,
$aB:function(){return[W.az]},
$ax:function(){return[W.az]},
$ij:1,
$aj:function(){return[W.az]},
$ip:1,
$ap:function(){return[W.az]}}
W.aA.prototype={$iaA:1}
W.a3.prototype={
gaG:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.lD("No elements"))
if(t>1)throw H.c(P.lD("More than one element"))
return u.firstChild},
ad:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
m:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.d(t,b)
u.replaceChild(c,t[b])},
gT:function(a){var u=this.a.childNodes
return new W.d5(u,u.length)},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$at:function(){return[W.D]},
$ax:function(){return[W.D]},
$aj:function(){return[W.D]},
$ap:function(){return[W.D]}}
W.D.prototype={
i5:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
i9:function(a,b){var u,t
try{u=a.parentNode
J.mG(u,b,a)}catch(t){H.ai(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.eg(a):u},
fQ:function(a,b,c){return a.replaceChild(b,c)},
$iD:1}
W.dl.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$at:function(){return[W.D]},
$iB:1,
$aB:function(){return[W.D]},
$ax:function(){return[W.D]},
$ij:1,
$aj:function(){return[W.D]},
$ip:1,
$ap:function(){return[W.D]}}
W.aB.prototype={$iaB:1,
gl:function(a){return a.length}}
W.hD.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$at:function(){return[W.aB]},
$iB:1,
$aB:function(){return[W.aB]},
$ax:function(){return[W.aB]},
$ij:1,
$aj:function(){return[W.aB]},
$ip:1,
$ap:function(){return[W.aB]}}
W.hO.prototype={
h:function(a,b){return P.b1(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b1(u.value[1]))}},
ga0:function(a){var u=H.b([],[P.h])
this.H(a,new W.hP(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.z("Not supported"))},
$aa1:function(){return[P.h,null]},
$iS:1,
$aS:function(){return[P.h,null]}}
W.hP.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hR.prototype={
gl:function(a){return a.length}}
W.aD.prototype={$iaD:1}
W.i2.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$at:function(){return[W.aD]},
$iB:1,
$aB:function(){return[W.aD]},
$ax:function(){return[W.aD]},
$ij:1,
$aj:function(){return[W.aD]},
$ip:1,
$ap:function(){return[W.aD]}}
W.aE.prototype={$iaE:1}
W.i3.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$at:function(){return[W.aE]},
$iB:1,
$aB:function(){return[W.aE]},
$ax:function(){return[W.aE]},
$ij:1,
$aj:function(){return[W.aE]},
$ip:1,
$ap:function(){return[W.aE]}}
W.aF.prototype={$iaF:1,
gl:function(a){return a.length}}
W.i7.prototype={
h:function(a,b){return a.getItem(b)},
m:function(a,b,c){a.setItem(b,c)},
H:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga0:function(a){var u=H.b([],[P.h])
this.H(a,new W.i8(u))
return u},
gl:function(a){return a.length},
$aa1:function(){return[P.h,P.h]},
$iS:1,
$aS:function(){return[P.h,P.h]}}
W.i8.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ar.prototype={$iar:1}
W.dA.prototype={
ae:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bD(a,b,c,d)
u=W.mX("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.a3(t).ad(0,new W.a3(u))
return t}}
W.ib.prototype={
ae:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bD(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.B.ae(u.createElement("table"),b,c,d)
u.toString
u=new W.a3(u)
s=u.gaG(u)
s.toString
u=new W.a3(s)
r=u.gaG(u)
t.toString
r.toString
new W.a3(t).ad(0,new W.a3(r))
return t}}
W.ic.prototype={
ae:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bD(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.B.ae(u.createElement("table"),b,c,d)
u.toString
u=new W.a3(u)
s=u.gaG(u)
t.toString
s.toString
new W.a3(t).ad(0,new W.a3(s))
return t}}
W.cm.prototype={$icm:1}
W.aG.prototype={$iaG:1}
W.as.prototype={$ias:1}
W.ig.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$at:function(){return[W.as]},
$iB:1,
$aB:function(){return[W.as]},
$ax:function(){return[W.as]},
$ij:1,
$aj:function(){return[W.as]},
$ip:1,
$ap:function(){return[W.as]}}
W.ih.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$at:function(){return[W.aG]},
$iB:1,
$aB:function(){return[W.aG]},
$ax:function(){return[W.aG]},
$ij:1,
$aj:function(){return[W.aG]},
$ip:1,
$ap:function(){return[W.aG]}}
W.io.prototype={
gl:function(a){return a.length}}
W.aH.prototype={$iaH:1}
W.bE.prototype={$ibE:1}
W.is.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$at:function(){return[W.aH]},
$iB:1,
$aB:function(){return[W.aH]},
$ax:function(){return[W.aH]},
$ij:1,
$aj:function(){return[W.aH]},
$ip:1,
$ap:function(){return[W.aH]}}
W.it.prototype={
gl:function(a){return a.length}}
W.bj.prototype={}
W.iP.prototype={
i:function(a){return String(a)}}
W.j6.prototype={
gl:function(a){return a.length}}
W.bm.prototype={
ghr:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.z("deltaY is not supported"))},
ghq:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.z("deltaX is not supported"))},
$ibm:1}
W.cw.prototype={
fS:function(a,b){return a.requestAnimationFrame(H.bQ(b,1))},
eN:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.jf.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$at:function(){return[W.G]},
$iB:1,
$aB:function(){return[W.G]},
$ax:function(){return[W.G]},
$ij:1,
$aj:function(){return[W.G]},
$ip:1,
$ap:function(){return[W.G]}}
W.dU.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
t:function(a,b){var u
if(b==null)return!1
u=J.Q(b)
return!!u.$iaa&&a.left===u.gbt(b)&&a.top===u.gby(b)&&a.width===u.gaF(b)&&a.height===u.gaA(b)},
gJ:function(a){return W.lU(C.d.gJ(a.left),C.d.gJ(a.top),C.d.gJ(a.width),C.d.gJ(a.height))},
gaA:function(a){return a.height},
gaF:function(a){return a.width}}
W.jk.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$at:function(){return[W.aw]},
$iB:1,
$aB:function(){return[W.aw]},
$ax:function(){return[W.aw]},
$ij:1,
$aj:function(){return[W.aw]},
$ip:1,
$ap:function(){return[W.aw]}}
W.eb.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$at:function(){return[W.D]},
$iB:1,
$aB:function(){return[W.D]},
$ax:function(){return[W.D]},
$ij:1,
$aj:function(){return[W.D]},
$ip:1,
$ap:function(){return[W.D]}}
W.jy.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$at:function(){return[W.aF]},
$iB:1,
$aB:function(){return[W.aF]},
$ax:function(){return[W.aF]},
$ij:1,
$aj:function(){return[W.aF]},
$ip:1,
$ap:function(){return[W.aF]}}
W.jD.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$at:function(){return[W.ar]},
$iB:1,
$aB:function(){return[W.ar]},
$ax:function(){return[W.ar]},
$ij:1,
$aj:function(){return[W.ar]},
$ip:1,
$ap:function(){return[W.ar]}}
W.jd.prototype={
H:function(a,b){var u,t,s,r,q
for(u=this.ga0(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.n)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga0:function(a){var u,t,s,r=this.a.attributes,q=H.b([],[P.h])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.d(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q},
$aa1:function(){return[P.h,P.h]},
$aS:function(){return[P.h,P.h]}}
W.jh.prototype={
h:function(a,b){return this.a.getAttribute(b)},
m:function(a,b,c){this.a.setAttribute(b,c)},
gl:function(a){return this.ga0(this).length}}
W.ji.prototype={}
W.jj.prototype={
$1:function(a){return this.a.$1(a)}}
W.cx.prototype={
er:function(a){var u
if($.cy.ghM($.cy)){for(u=0;u<262;++u)$.cy.m(0,C.T[u],W.oX())
for(u=0;u<12;++u)$.cy.m(0,C.p[u],W.oY())}},
aO:function(a){return $.mC().N(0,W.c_(a))},
ap:function(a,b,c){var u=$.cy.h(0,H.e(W.c_(a))+"::"+b)
if(u==null)u=$.cy.h(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$iaV:1}
W.L.prototype={
gT:function(a){return new W.d5(a,this.gl(a))}}
W.dm.prototype={
aO:function(a){return C.b.dc(this.a,new W.hv(a))},
ap:function(a,b,c){return C.b.dc(this.a,new W.hu(a,b,c))},
$iaV:1}
W.hv.prototype={
$1:function(a){return a.aO(this.a)}}
W.hu.prototype={
$1:function(a){return a.ap(this.a,this.b,this.c)}}
W.ej.prototype={
ew:function(a,b,c,d){var u,t,s
this.a.ad(0,c)
u=b.bB(0,new W.jv())
t=b.bB(0,new W.jw())
this.b.ad(0,u)
s=this.c
s.ad(0,C.w)
s.ad(0,t)},
aO:function(a){return this.a.N(0,W.c_(a))},
ap:function(a,b,c){var u=this,t=W.c_(a),s=u.c
if(s.N(0,H.e(t)+"::"+b))return u.d.he(c)
else if(s.N(0,"*::"+b))return u.d.he(c)
else{s=u.b
if(s.N(0,H.e(t)+"::"+b))return!0
else if(s.N(0,"*::"+b))return!0
else if(s.N(0,H.e(t)+"::*"))return!0
else if(s.N(0,"*::*"))return!0}return!1},
$iaV:1}
W.jv.prototype={
$1:function(a){return!C.b.N(C.p,a)}}
W.jw.prototype={
$1:function(a){return C.b.N(C.p,a)}}
W.jG.prototype={
ap:function(a,b,c){if(this.ej(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.N(0,b)
return!1}}
W.jH.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)}}
W.jE.prototype={
aO:function(a){var u=J.Q(a)
if(!!u.$icj)return!1
u=!!u.$ik
if(u&&W.c_(a)==="foreignObject")return!1
if(u)return!0
return!1},
ap:function(a,b,c){if(b==="is"||C.a.a3(b,"on"))return!1
return this.aO(a)},
$iaV:1}
W.d5.prototype={
v:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.bV(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gE:function(a){return this.d}}
W.aV.prototype={}
W.jt.prototype={}
W.eC.prototype={
cD:function(a){new W.jR(this).$2(a,null)},
b3:function(a,b){if(b==null)J.lh(a)
else b.removeChild(a)},
fX:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.mK(a)
n=o.a.getAttribute("is")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=u?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ai(r)}t="element unprintable"
try{t=J.a5(a)}catch(r){H.ai(r)}try{s=W.c_(a)
this.fW(a,b,p,t,s,o,n)}catch(r){if(H.ai(r) instanceof P.ao)throw r
else{this.b3(a,b)
window
q="Removing corrupted element "+H.e(t)
if(typeof console!="undefined")window.console.warn(q)}}},
fW:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=this
if(c){p.b3(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!p.a.aO(a)){p.b3(a,b)
window
u="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!p.a.ap(a,"is",g)){p.b3(a,b)
window
u="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga0(f)
t=H.b(u.slice(0),[H.aL(u,0)])
for(s=f.ga0(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.d(t,s)
r=t[s]
if(!p.a.ap(a,J.mN(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.e(e)+" "+r+'="'+H.e(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.Q(a).$icm)p.cD(a.content)}}
W.jR.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.fX(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.b3(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ai(s)
r=u
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=t}}}
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
W.cD.prototype={}
W.cE.prototype={}
W.ek.prototype={}
W.el.prototype={}
W.ep.prototype={}
W.es.prototype={}
W.et.prototype={}
W.cF.prototype={}
W.cG.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eM.prototype={}
P.jz.prototype={
cg:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
t.push(a)
this.b.push(null)
return s},
bA:function(a){var u,t,s,r,q,p=this,o={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.Q(a)
if(!!u.$iae)return new Date(a.a)
if(!!u.$ins)throw H.c(P.iG("structured clone of RegExp"))
if(!!u.$iaq)return a
if(!!u.$ibr)return a
if(!!u.$ic1)return a
if(!!u.$iaR)return a
if(!!u.$icd||!!u.$ibg||!!u.$icb)return a
if(!!u.$iS){t=p.cg(a)
s=p.b
r=s.length
if(t>=r)return H.d(s,t)
q=o.a=s[t]
if(q!=null)return q
q={}
o.a=q
if(t>=r)return H.d(s,t)
s[t]=q
u.H(a,new P.jB(o,p))
return o.a}if(!!u.$ip){t=p.cg(a)
o=p.b
if(t>=o.length)return H.d(o,t)
q=o[t]
if(q!=null)return q
return p.hn(a,t)}if(!!u.$in4){t=p.cg(a)
u=p.b
s=u.length
if(t>=s)return H.d(u,t)
q=o.b=u[t]
if(q!=null)return q
q={}
o.b=q
if(t>=s)return H.d(u,t)
u[t]=q
p.hH(a,new P.jC(o,p))
return o.b}throw H.c(P.iG("structured clone of other type"))},
hn:function(a,b){var u,t=J.bo(a),s=t.gl(a),r=new Array(s),q=this.b
if(b>=q.length)return H.d(q,b)
q[b]=r
if(typeof s!=="number")return H.u(s)
u=0
for(;u<s;++u){q=this.bA(t.h(a,u))
if(u>=r.length)return H.d(r,u)
r[u]=q}return r}}
P.jB.prototype={
$2:function(a,b){this.a.a[a]=this.b.bA(b)},
$S:3}
P.jC.prototype={
$2:function(a,b){this.a.b[a]=this.b.bA(b)},
$S:3}
P.ez.prototype={$iaR:1,
gdl:function(a){return this.a}}
P.k1.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.jA.prototype={
hH:function(a,b){var u,t,s,r
for(u=Object.keys(a),t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,a[r])}}}
P.fv.prototype={
gbk:function(){var u=this.b,t=H.l5(u,"x",0)
return new H.c8(new H.cv(u,new P.fw(),[t]),new P.fx(),[t,W.R])},
m:function(a,b,c){var u=this.gbk()
J.mL(u.b.$1(J.eQ(u.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.aj(this.gbk().a)},
h:function(a,b){var u=this.gbk()
return u.b.$1(J.eQ(u.a,b))},
gT:function(a){var u=P.kO(this.gbk(),!1,W.R)
return new J.ad(u,u.length)},
$at:function(){return[W.R]},
$ax:function(){return[W.R]},
$aj:function(){return[W.R]},
$ap:function(){return[W.R]}}
P.fw.prototype={
$1:function(a){return!!J.Q(a).$iR}}
P.fx.prototype={
$1:function(a){return H.r(a,"$iR")}}
P.jp.prototype={
gcv:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.u(t)
return u+t},
gdj:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.u(t)
return u+t},
i:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
t:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.Q(b)
if(!!u.$iaa){t=q.a
if(t==u.gbt(b)){s=q.b
if(s==u.gby(b)){r=q.c
if(typeof t!=="number")return t.w()
if(typeof r!=="number")return H.u(r)
if(t+r===u.gcv(b)){t=q.d
if(typeof s!=="number")return s.w()
if(typeof t!=="number")return H.u(t)
u=s+t===u.gdj(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gJ:function(a){var u=this,t=u.a,s=J.cR(t),r=u.b,q=J.cR(r),p=u.c
if(typeof t!=="number")return t.w()
if(typeof p!=="number")return H.u(p)
p=C.c.gJ(t+p)
t=u.d
if(typeof r!=="number")return r.w()
if(typeof t!=="number")return H.u(t)
t=C.c.gJ(r+t)
return P.nT(P.jm(P.jm(P.jm(P.jm(0,s),q),p),t))}}
P.aa.prototype={
gbt:function(a){return this.a},
gby:function(a){return this.b},
gaF:function(a){return this.c},
gaA:function(a){return this.d}}
P.aS.prototype={$iaS:1}
P.fQ.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){return this.h(a,b)},
$it:1,
$at:function(){return[P.aS]},
$ax:function(){return[P.aS]},
$ij:1,
$aj:function(){return[P.aS]},
$ip:1,
$ap:function(){return[P.aS]}}
P.aW.prototype={$iaW:1}
P.hy.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){return this.h(a,b)},
$it:1,
$at:function(){return[P.aW]},
$ax:function(){return[P.aW]},
$ij:1,
$aj:function(){return[P.aW]},
$ip:1,
$ap:function(){return[P.aW]}}
P.hG.prototype={
gl:function(a){return a.length}}
P.cj.prototype={$icj:1}
P.ia.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){return this.h(a,b)},
$it:1,
$at:function(){return[P.h]},
$ax:function(){return[P.h]},
$ij:1,
$aj:function(){return[P.h]},
$ip:1,
$ap:function(){return[P.h]}}
P.k.prototype={
gc3:function(a){return new P.fv(a,new W.a3(a))},
ae:function(a,b,c,d){var u,t,s,r,q,p=H.b([],[W.aV])
p.push(W.lT(null))
p.push(W.lV())
p.push(new W.jE())
c=new W.eC(new W.dm(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.r).ho(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.a3(s)
q=p.gaG(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ik:1}
P.aZ.prototype={$iaZ:1}
P.iu.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){return this.h(a,b)},
$it:1,
$at:function(){return[P.aZ]},
$ax:function(){return[P.aZ]},
$ij:1,
$aj:function(){return[P.aZ]},
$ip:1,
$ap:function(){return[P.aZ]}}
P.e3.prototype={}
P.e4.prototype={}
P.ee.prototype={}
P.ef.prototype={}
P.eq.prototype={}
P.er.prototype={}
P.ex.prototype={}
P.ey.prototype={}
P.bF.prototype={$it:1,
$at:function(){return[P.w]},
$ij:1,
$aj:function(){return[P.w]},
$ip:1,
$ap:function(){return[P.w]}}
P.eV.prototype={
gl:function(a){return a.length}}
P.eW.prototype={
h:function(a,b){return P.b1(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b1(u.value[1]))}},
ga0:function(a){var u=H.b([],[P.h])
this.H(a,new P.eX(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.z("Not supported"))},
$aa1:function(){return[P.h,null]},
$iS:1,
$aS:function(){return[P.h,null]}}
P.eX.prototype={
$2:function(a,b){return this.a.push(a)}}
P.eY.prototype={
gl:function(a){return a.length}}
P.bq.prototype={}
P.hz.prototype={
gl:function(a){return a.length}}
P.dS.prototype={}
P.dt.prototype={
ig:function(a,b,c,d,e,f,g){var u,t=J.Q(g)
if(!!t.$iaR)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.oN(g))
return}if(!!t.$ic4)t=!0
else t=!1
if(t){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.cS("Incorrect number or type of arguments"))}}
P.i5.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return P.b1(a.item(b))},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){return this.h(a,b)},
$it:1,
$at:function(){return[[P.S,,,]]},
$ax:function(){return[[P.S,,,]]},
$ij:1,
$aj:function(){return[[P.S,,,]]},
$ip:1,
$ap:function(){return[[P.S,,,]]}}
P.em.prototype={}
P.en.prototype={}
K.aN.prototype={
aB:function(a,b){return!0},
i:function(a){return"all"}}
K.d6.prototype={
aB:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)if(u[s].aB(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.n)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s}}
K.bf.prototype={}
K.a9.prototype={
aB:function(a,b){return!this.ef(0,b)},
i:function(a){return"!["+this.cG(0)+"]"}}
K.hJ.prototype={
aB:function(a,b){if(typeof b!=="number")return H.u(b)
return this.a<=b&&this.b>=b},
i:function(a){var u=H.bC(this.a),t=H.bC(this.b)
return u+".."+t}}
K.hS.prototype={
en:function(a){var u,t,s,r
if(a.a.length<=0)throw H.c(P.l("May not create a Set with zero characters."))
u=P.w
t=new H.H([u,P.aK])
for(s=new H.be(a,a.gl(a));s.v();)t.m(0,s.d,!0)
r=P.kO(t.ga0(t),!0,u)
C.b.ed(r)
this.a=r},
aB:function(a,b){return C.b.N(this.a,b)},
i:function(a){return P.cl(this.a,0,null)}}
L.dy.prototype={
j:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new L.dI(this.a.k(0,b))
r.a=H.b([],[K.bf])
r.c=!1
this.c.push(r)
return r},
hC:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
if(r.aB(0,a))return r}return},
i:function(a){return this.b},
d5:function(){var u,t,s,r,q,p=this,o="("+p.b+")",n=p.d
if(n!=null){n=n.b
o+=" => ["+n+"]"
u=p.a
if(u.c.N(0,n))o+=" (consume)"
for(n=p.d.c,n=n.ga0(n),n=n.gT(n);n.v();){t=n.gE(n)
o+="\n"
s=p.d.c.h(0,t)
t=o+("  -- "+H.e(t)+" => ["+H.e(s)+"]")
o=u.c.N(0,s)?t+" (consume)":t}}for(n=p.c,u=n.length,r=0;r<n.length;n.length===u||(0,H.n)(n),++r){q=n[r]
o=o+"\n"+("  -- "+q.i(0))}return o.charCodeAt(0)==0?o:o}}
L.dF.prototype={
i:function(a){var u=H.lb(this.b,"\n","\\n"),t=H.lb(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
L.dG.prototype={
aD:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.n)(c),++t){s=c[t]
this.c.m(0,s,b)}},
i:function(a){return this.b}}
L.ip.prototype={
k:function(a,b){var u=this.a.h(0,b)
if(u==null){u=new L.dy(this,b)
u.c=H.b([],[L.dI])
this.a.m(0,b,u)}return u},
R:function(a){var u,t=this.b.h(0,a)
if(t==null){t=new L.dG(a)
u=P.h
t.c=new H.H([u,u])
this.b.m(0,a,t)}return t},
cz:function(a){return this.ik(a)},
ik:function(a){var u=this
return P.of(function(){var t=a
var s=0,r=1,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
return function $async$cz(b,a0){if(b===1){q=a0
s=r}while(true)switch(s){case 0:g=u.d
f=[P.w]
e=H.b([],f)
d=H.b([],f)
c=H.b([],f)
p=null,o=0,n=0,m=0
case 2:if(!!0){s=3
break}if(c.length!==0)l=C.b.ct(c,0)
else{if(!t.v()){s=3
break}l=t.d}d.push(l);++o
k=g.hC(l)
s=k==null?4:6
break
case 4:if(p==null){j=P.cl(d,0,null)
throw H.c(P.l("Untokenizable string [state: "+g.b+", index "+o+']: "'+j+'"'))}if(!!d.fixed$length)H.m(P.z("removeRange"))
P.aY(0,m,d.length)
d.splice(0,m-0)
C.b.ad(c,d)
d=H.b([],f)
e=H.b([],f)
g=u.d
s=!u.c.N(0,p.a)?7:8
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
if(g.d!=null){j=P.cl(e,0,null)
i=g.d
h=i.c.h(0,j)
p=new L.dF(h==null?i.b:h,j,o)
m=d.length
n=o}case 5:s=2
break
case 3:s=p!=null&&!u.c.N(0,p.a)?10:11
break
case 10:s=12
return p
case 12:case 11:return P.nR()
case 1:return P.nS(q)}}},L.dF)},
i:function(a){var u,t=new P.T(""),s=this.d
if(s!=null)t.a=s.d5()+"\n"
for(s=this.a,s=s.gim(s),s=s.gT(s);s.v();){u=s.gE(s)
if(u!=this.d)t.a+=u.d5()+"\n"}s=t.a
return s.charCodeAt(0)==0?s:s}}
L.dI.prototype={
i:function(a){return this.b.b+": "+this.cG(0)}}
O.b8.prototype={
bE:function(a){this.a=H.b([],[a])
this.c=this.b=null},
cE:function(a,b,c){this.b=b
this.c=a},
bg:function(a,b){return this.cE(a,null,b)},
fA:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
eq:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gT:function(a){var u=this.a
return new J.ad(u,u.length)},
L:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
n:function(a,b){var u,t,s=this,r=[H.l5(s,"b8",0)]
if(s.fA(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.eq(t,H.b([b],r))}},
$ij:1}
O.ca.prototype={
gl:function(a){return this.a.length},
gB:function(){var u=this.b
return u==null?this.b=D.K():u},
aH:function(){var u=this.b
if(u!=null)u.F(null)},
ga1:function(a){var u=this.a
if(u.length>0)return C.b.gar(u)
else return V.dh()},
dY:function(a){var u=this.a
if(a==null)u.push(V.dh())
else u.push(a)
this.aH()},
cq:function(){var u=this.a
if(u.length>0){u.pop()
this.aH()}}}
E.f1.prototype={}
E.ba.prototype={
sa9:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gB().D(0,s.gdT())
u=s.c
if(u!=null)u.gB().n(0,s.gdT())
t=new D.E("shape",r,s.c)
t.b=!0
s.aC(t)}},
sba:function(a){var u,t,s=this
if(!J.A(s.r,a)){u=s.r
if(u!=null)u.gB().D(0,s.gdR())
if(a!=null)a.gB().n(0,s.gdR())
s.r=a
t=new D.E("mover",u,a)
t.b=!0
s.aC(t)}},
at:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aZ(0,b,s):null
if(!J.A(q,s.x)){u=s.x
s.x=q
t=new D.E("matrix",u,q)
t.b=!0
s.aC(t)}for(r=s.y.a,r=new J.ad(r,r.length);r.v();)r.d.at(0,b)},
aW:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)s.a.push(s.ga1(s))
else s.a.push(r.q(0,s.ga1(s)))
s.aH()
a.dZ(t.f)
s=a.dy
u=(s&&C.b).gar(s)
if(u!=null&&t.d!=null)u.i8(a,t)
for(s=t.y.a,s=new J.ad(s,s.length);s.v();)s.d.aW(a)
a.dX()
a.dx.cq()},
aC:function(a){var u=this.z
if(u!=null)u.F(a)},
V:function(){return this.aC(null)},
dU:function(a){this.e=null
this.aC(a)},
hW:function(){return this.dU(null)},
dS:function(a){this.aC(a)},
hV:function(){return this.dS(null)},
dQ:function(a){this.aC(a)},
hS:function(){return this.dQ(null)},
hR:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gdP(),s=[{func:1,ret:-1,args:[D.Z]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bw()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.V()},
hU:function(a,b){var u,t
for(u=b.gT(b),t=this.gdP();u.v();)u.gE(u).gB().D(0,t)
this.V()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.hK.prototype={
em:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.ae(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.ca()
t=[V.aT]
u.a=H.b([],t)
u.gB().n(0,new E.hL(s))
s.cy=u
u=new O.ca()
u.a=H.b([],t)
u.gB().n(0,new E.hM(s))
s.db=u
u=new O.ca()
u.a=H.b([],t)
u.gB().n(0,new E.hN(s))
s.dx=u
u=H.b([],[O.dB])
s.dy=u
u.push(null)
s.fr=new H.H([P.h,A.du])},
gi4:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga1(s)
u=t.db
u=t.z=s.q(0,u.ga1(u))
s=u}return s},
dZ:function(a){var u=this.dy
u.push(a==null?(u&&C.b).gar(u):a)},
dX:function(){var u=this.dy
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
E.dD.prototype={
cL:function(a){this.e0()},
cK:function(){return this.cL(null)},
ghI:function(){var u,t=this,s=Date.now(),r=C.c.a4(P.lo(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.ae(s,!1)
return u/r},
d1:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.q()
if(typeof r!=="number")return H.u(r)
u=C.d.ci(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.q()
t=C.d.ci(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.lG(C.n,s.gia())}},
e0:function(){if(!this.cx){this.cx=!0
var u=window
C.D.eN(u)
C.D.fS(u,W.m5(new E.im(this),P.ac))}},
i7:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.d1()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ae(r,!1)
s.y=P.lo(r-s.r.a).a*0.000001
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
o.aW(p.e)}s=p.Q
if(s!=null)s.F(null)}catch(q){u=H.ai(q)
t=H.l6(q)
P.la("Error: "+H.e(u))
P.la("Stack: "+H.e(t))
throw H.c(u)}}}
E.im.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.i7()}}}
Z.dQ.prototype={}
Z.cV.prototype={
c_:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ai(s)
t=P.l('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.e(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.j7.prototype={}
Z.cW.prototype={
aT:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
c_:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].c_(a)},
il:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aW:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.d(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.h],p=H.b([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)p.push(u[s].i(0))
r=H.b([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a5(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.j(p,", ")+"\nAttrs:   "+C.b.j(r,", ")}}
Z.bx.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.ci(this.c))+"'")+"]"}}
Z.b0.prototype={
gcF:function(a){var u=this.a,t=(u&$.b5().a)!==0?3:0
if((u&$.b4().a)!==0)t+=3
if((u&$.b3().a)!==0)t+=3
if((u&$.b6().a)!==0)t+=2
if((u&$.bp().a)!==0)t+=3
if((u&$.cO().a)!==0)t+=3
if((u&$.cP().a)!==0)t+=4
if((u&$.bU().a)!==0)++t
return(u&$.b2().a)!==0?t+4:t},
hf:function(a){var u,t=$.b5(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.b4()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b3()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b6()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bp()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cO()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cP()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bU()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b2()
if((s&t.a)!==0)if(u===a)return t
return $.mA()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b0))return!1
return this.a===b.a},
i:function(a){var u=H.b([],[P.h]),t=this.a
if((t&$.b5().a)!==0)u.push("Pos")
if((t&$.b4().a)!==0)u.push("Norm")
if((t&$.b3().a)!==0)u.push("Binm")
if((t&$.b6().a)!==0)u.push("Txt2D")
if((t&$.bp().a)!==0)u.push("TxtCube")
if((t&$.cO().a)!==0)u.push("Clr3")
if((t&$.cP().a)!==0)u.push("Clr4")
if((t&$.bU().a)!==0)u.push("Weight")
if((t&$.b2().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.b.j(u,"|")}}
D.f4.prototype={}
D.bw.prototype={
n:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.Z]}]):u).push(b)},
D:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.b.N(s,b)
if(s===!0){s=t.a
u=(s&&C.b).D(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.b.N(s,b)
if(s===!0){s=t.b
u=(s&&C.b).D(s,b)||u}return u},
F:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.Z()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.b.H(P.kO(u,!0,{func:1,ret:-1,args:[D.Z]}),new D.fr(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.Z]}])
C.b.H(u,new D.fs(q))}return!0},
hx:function(){return this.F(null)},
as:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.F(u)}}}}
D.fr.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.fs.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.Z.prototype={}
D.by.prototype={}
D.bz.prototype={}
D.E.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cX.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cX))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.db.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.db))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.fP.prototype={
i0:function(a){this.c=a.b
this.d.n(0,a.a)
return!1},
hX:function(a){this.c=a.b
this.d.D(0,a.a)
return!1}}
X.de.prototype={}
X.fY.prototype={
b1:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.q()
u=b.b
t=q.ch
if(typeof u!=="number")return u.q()
s=o.w(0,new V.X(n*m,u*t))
t=q.a.gaP()
r=new X.aU(a,V.aX(),q.x,t,s)
r.b=!0
q.z=new P.ae(p,!1)
q.x=s
return r},
cp:function(a,b){this.r=a.a
return!1},
bc:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.e9()
if(typeof u!=="number")return u.a8()
this.r=(u&~t)>>>0
return!1},
bb:function(a,b){var u=this.d
if(u==null)return!1
u.F(this.b1(a,b))
return!0},
i1:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaP()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.q()
q=a.b
p=o.cy
if(typeof q!=="number")return q.q()
t=new X.cc(new V.I(s*r,q*p),u,t)
t.b=!0
n.F(t)
return!0},
fm:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.de(c,r.a.gaP(),b)
s.b=!0
t.F(s)
r.y=new P.ae(u,!1)
r.x=V.aX()}}
X.am.prototype={
t:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.am))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.aU.prototype={}
X.ho.prototype={
bL:function(a,b,c){var u=this,t=new P.ae(Date.now(),!1),s=u.a.gaP(),r=new X.aU(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cp:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.F(this.bL(a,b,!0))
return!0},
bc:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.e9()
if(typeof t!=="number")return t.a8()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.F(u.bL(a,b,!0))
return!0},
bb:function(a,b){var u=this.d
if(u==null)return!1
u.F(this.bL(a,b,!1))
return!0},
i2:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaP()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.q()
r=a.b
q=p.ch
if(typeof r!=="number")return r.q()
u=new X.cc(new V.I(t*s,r*q),u,b)
u.b=!0
o.F(u)
return!0},
gdm:function(){var u=this.b
return u==null?this.b=D.K():u},
gcA:function(){var u=this.c
return u==null?this.c=D.K():u},
gdO:function(){var u=this.d
return u==null?this.d=D.K():u}}
X.cc.prototype={}
X.hF.prototype={}
X.dH.prototype={}
X.ir.prototype={
b1:function(a,b){var u=this,t=new P.ae(Date.now(),!1),s=a.length>0?a[0]:V.aX(),r=u.a.gaP(),q=new X.dH(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
i_:function(a){var u=this.b
if(u==null)return!1
u.F(this.b1(a,!0))
return!0},
hY:function(a){var u=this.c
if(u==null)return!1
u.F(this.b1(a,!0))
return!0},
hZ:function(a){var u=this.d
if(u==null)return!1
u.F(this.b1(a,!1))
return!0}}
X.dM.prototype={
gaP:function(){var u=this.a,t=C.i.gdk(u).c
t.toString
u=C.i.gdk(u).d
u.toString
return V.lB(0,0,t,u)},
cS:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.db(u,new X.am(t,a.altKey,a.shiftKey))},
aM:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.am(t,a.altKey,a.shiftKey)},
bZ:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.am(t,a.altKey,a.shiftKey)},
ay:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.K()
u=t.top
if(typeof r!=="number")return r.K()
return new V.X(s-q,r-u)},
b2:function(a){return new V.I(a.movementX,a.movementY)},
bV:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.X])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
q=C.d.ak(r.pageX)
C.d.ak(r.pageY)
p=o.left
C.d.ak(r.pageX)
n.push(new V.X(q-p,C.d.ak(r.pageY)-o.top))}return n},
aw:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cX(u,new X.am(t,a.altKey,a.shiftKey))},
bM:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.K()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.K()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fg:function(a){this.f=!0},
f4:function(a){this.f=!1},
fa:function(a){if(this.f&&this.bM(a))a.preventDefault()},
fk:function(a){var u
if(!this.f)return
u=this.cS(a)
this.b.i0(u)},
fi:function(a){var u
if(!this.f)return
u=this.cS(a)
this.b.hX(u)},
fo:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aM(a)
if(r.x){u=r.aw(a)
t=r.b2(a)
if(r.d.cp(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.aw(a)
s=r.ay(a)
if(r.c.cp(u,s))a.preventDefault()},
ft:function(a){var u,t,s,r=this
r.aM(a)
u=r.aw(a)
if(r.x){t=r.b2(a)
if(r.d.bc(u,t))a.preventDefault()
return}if(r.r)return
s=r.ay(a)
if(r.c.bc(u,s))a.preventDefault()},
fe:function(a){var u,t,s,r=this
if(!r.bM(a)){r.aM(a)
u=r.aw(a)
if(r.x){t=r.b2(a)
if(r.d.bc(u,t))a.preventDefault()
return}if(r.r)return
s=r.ay(a)
if(r.c.bc(u,s))a.preventDefault()}},
fq:function(a){var u,t,s,r=this
r.aM(a)
u=r.aw(a)
if(r.x){t=r.b2(a)
if(r.d.bb(u,t))a.preventDefault()
return}if(r.r)return
s=r.ay(a)
if(r.c.bb(u,s))a.preventDefault()},
fc:function(a){var u,t,s,r=this
if(!r.bM(a)){r.aM(a)
u=r.aw(a)
if(r.x){t=r.b2(a)
if(r.d.bb(u,t))a.preventDefault()
return}if(r.r)return
s=r.ay(a)
if(r.c.bb(u,s))a.preventDefault()}},
fv:function(a){var u,t,s=this
s.aM(a)
u=new V.I((a&&C.C).ghq(a),C.C.ghr(a)).p(0,180)
if(s.x){if(s.d.i1(u))a.preventDefault()
return}if(s.r)return
t=s.ay(a)
if(s.c.i2(u,t))a.preventDefault()},
fz:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aw(s.y)
t=s.ay(s.y)
s.d.fm(u,t,r)}},
fM:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bZ(a)
u=t.bV(a)
if(t.e.i_(u))a.preventDefault()},
fI:function(a){var u
this.bZ(a)
u=this.bV(a)
if(this.e.hY(u))a.preventDefault()},
fK:function(a){var u
this.bZ(a)
u=this.bV(a)
if(this.e.hZ(u))a.preventDefault()}}
D.eZ.prototype={$ia8:1}
D.bu.prototype={
au:function(a){var u=this.r
if(u!=null)u.F(a)},
eu:function(){return this.au(null)},
$ia8:1}
D.a8.prototype={}
D.dc.prototype={
au:function(a){var u=this.y
if(u!=null)u.F(a)},
d_:function(a){var u=this.z
if(u!=null)u.F(a)},
fl:function(){return this.d_(null)},
fC:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.n)(a),++t){s=a[t]
if(s==null||this.eH(s))return!1}return!0},
eZ:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcZ(),s=[{func:1,ret:-1,args:[D.Z]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q instanceof D.bu)this.f.push(q)
p=q.r
if(p==null){p=new D.bw()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}u=new D.by()
u.b=!0
this.au(u)},
fG:function(a,b){var u,t,s
for(u=b.gT(b),t=this.gcZ();u.v();){s=u.gE(u)
C.b.D(this.e,s)
s.gB().D(0,t)}u=new D.bz()
u.b=!0
this.au(u)},
eH:function(a){var u=C.b.N(this.f,a)
return u},
$aj:function(){return[D.a8]},
$ab8:function(){return[D.a8]}}
D.hE.prototype={$ia8:1}
D.i4.prototype={$ia8:1}
V.a6.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a6))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}}
V.ak.prototype={
cw:function(a){var u=this
return H.b([u.a,u.b,u.c,u.d],[P.J])},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ak))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.F(u.a,3,0)+", "+V.F(u.b,3,0)+", "+V.F(u.c,3,0)+", "+V.F(u.d,3,0)+"]"}}
V.fq.prototype={}
V.dg.prototype={
ab:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.J])
return t},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dg))return!1
u=b.a
t=$.C().a
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
i:function(a){var u,t,s,r,q=this,p=[P.J],o=V.bS(H.b([q.a,q.d,q.r],p),3,0),n=V.bS(H.b([q.b,q.e,q.x],p),3,0),m=V.bS(H.b([q.c,q.f,q.y],p),3,0)
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
V.aT.prototype={
ab:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.J])
return t},
dK:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.C().a)return V.dh()
u=1/b1
t=-n
s=-a0
return V.ay((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
q:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.ay(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bz:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.y(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
be:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.N(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aT))return!1
u=b.a
t=$.C().a
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
i:function(a){return this.P()},
I:function(a){var u,t,s,r,q,p=this,o=[P.J],n=V.bS(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.bS(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.bS(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.bS(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
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
P:function(){return this.I("")}}
V.X.prototype={
w:function(a,b){return new V.X(this.a+b.a,this.b+b.b)},
K:function(a,b){return new V.X(this.a-b.a,this.b-b.b)},
p:function(a,b){if(Math.abs(b-0)<$.C().a)return V.aX()
return new V.X(this.a/b,this.b/b)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+"]"}}
V.N.prototype={
w:function(a,b){return new V.N(this.a+b.a,this.b+b.b,this.c+b.c)},
K:function(a,b){return new V.N(this.a-b.a,this.b-b.b,this.c-b.c)},
q:function(a,b){return new V.N(this.a*b,this.b*b,this.c*b)},
p:function(a,b){if(Math.abs(b-0)<$.C().a)return V.kQ()
return new V.N(this.a/b,this.b/b,this.c/b)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.N))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}}
V.bi.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bi))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.F(u.a,3,0)+", "+V.F(u.b,3,0)+", "+V.F(u.c,3,0)+", "+V.F(u.d,3,0)+"]"}}
V.ds.prototype={
gaa:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ds))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.F(u.a,3,0)+", "+V.F(u.b,3,0)+", "+V.F(u.c,3,0)+", "+V.F(u.d,3,0)+"]"}}
V.I.prototype={
b8:function(a){return Math.sqrt(this.C(this))},
C:function(a){var u,t,s=this.a,r=a.a
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
return new V.I(t*b,u*b)},
p:function(a,b){var u,t
if(Math.abs(b-0)<$.C().a){u=$.lN
return u==null?$.lN=new V.I(0,0):u}u=this.a
if(typeof u!=="number")return u.p()
t=this.b
if(typeof t!=="number")return t.p()
return new V.I(u/b,t/b)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.I))return!1
u=b.a
t=this.a
s=$.C()
s.toString
if(typeof u!=="number")return u.K()
if(typeof t!=="number")return H.u(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.K()
if(typeof t!=="number")return H.u(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+"]"}}
V.y.prototype={
b8:function(a){return Math.sqrt(this.C(this))},
C:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ck:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.y(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
az:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.y(u*t-s*r,s*q-p*t,p*r-u*q)},
w:function(a,b){return new V.y(this.a+b.a,this.b+b.b,this.c+b.c)},
U:function(a){return new V.y(-this.a,-this.b,-this.c)},
q:function(a,b){return new V.y(this.a*b,this.b*b,this.c*b)},
p:function(a,b){if(Math.abs(b-0)<$.C().a)return V.ct()
return new V.y(this.a/b,this.b/b,this.c/b)},
dL:function(){var u=$.C().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.y))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}}
V.b_.prototype={
b8:function(a){var u=this,t=u.a,s=u.b,r=u.c,q=u.d
return Math.sqrt(t*t+s*s+r*r+q*q)},
p:function(a,b){var u,t=this
if(Math.abs(b-0)<$.C().a){u=$.lS
return u==null?$.lS=new V.b_(0,0,0,0):u}return new V.b_(t.a/b,t.b/b,t.c/b,t.d/b)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.b_))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.F(u.a,3,0)+", "+V.F(u.b,3,0)+", "+V.F(u.c,3,0)+", "+V.F(u.d,3,0)+"]"}}
U.f6.prototype={
bG:function(a){var u=V.pf(a,this.c,this.b)
return u},
gB:function(){var u=this.y
return u==null?this.y=D.K():u},
S:function(a){var u=this.y
if(u!=null)u.F(a)},
scB:function(a,b){},
scl:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.C().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bG(u)}s=new D.E("maximumLocation",s,t.b)
s.b=!0
t.S(s)}},
scn:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.C().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bG(u)}s=new D.E("minimumLocation",s,t.c)
s.b=!0
t.S(s)}},
sZ:function(a,b){var u,t=this
b=t.bG(b)
u=t.d
if(!(Math.abs(u-b)<$.C().a)){t.d=b
u=new D.E("location",u,b)
u.b=!0
t.S(u)}},
scm:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.C().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.E("maximumVelocity",r,a)
r.b=!0
s.S(r)}},
sX:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.C().a)){u.f=a
t=new D.E("velocity",t,a)
t.b=!0
u.S(t)}},
sc7:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.C().a)){this.x=a
u=new D.E("dampening",u,a)
u.b=!0
this.S(u)}},
at:function(a,b){var u,t,s,r=this,q=r.f,p=$.C().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sZ(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.C().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sX(u)}}}
U.cZ.prototype={
gB:function(){var u=this.b
return u==null?this.b=D.K():u},
aZ:function(a,b,c){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cZ))return!1
return J.A(this.a,b.a)},
i:function(a){return"Constant: "+this.a.I("          ")}}
U.c2.prototype={
gB:function(){var u=this.e
return u==null?this.e=D.K():u},
S:function(a){var u=this.e
if(u!=null)u.F(a)},
a7:function(){return this.S(null)},
eX:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaL(),s=[{func:1,ret:-1,args:[D.Z]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q!=null){p=q.gB()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.by()
u.b=!0
this.S(u)},
fE:function(a,b){var u,t
for(u=b.gT(b),t=this.gaL();u.v();)u.gE(u).gB().D(0,t)
u=new D.bz()
u.b=!0
this.S(u)},
aZ:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.O()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.ad(r,r.length),u=null;r.v();){q=r.d
if(q!=null){t=q.aZ(0,b,c)
if(t!=null)u=u==null?t:t.q(0,u)}}s.f=u==null?V.dh():u
r=s.e
if(r!=null)r.as(0)}return s.f},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.c2))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.d(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.d(r,t)
if(!J.A(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$aj:function(){return[U.af]},
$ab8:function(){return[U.af]},
$iaf:1}
U.af.prototype={}
U.dN.prototype={
gB:function(){var u=this.cy
return u==null?this.cy=D.K():u},
S:function(a){var u=this.cy
if(u!=null)u.F(a)},
a7:function(){return this.S(null)},
b4:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdm().n(0,u.gbN())
u.a.c.gdO().n(0,u.gbP())
u.a.c.gcA().n(0,u.gbR())
return!0},
bO:function(a){var u=this
if(!J.A(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bQ:function(a){var u,t,s,r,q,p,o,n=this
H.r(a,"$iaU")
if(!n.y)return
if(n.x){u=a.d.K(0,a.y)
u=new V.I(u.a,u.b)
u=u.C(u)
t=n.r
if(typeof t!=="number")return H.u(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.K(0,a.y)
u=new V.I(t.a,t.b).q(0,2).p(0,u.gaa())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.q()
s=n.e
if(typeof s!=="number")return H.u(s)
t.sX(u*10*s)}else{u=a.c
t=a.d
s=t.K(0,a.y)
r=new V.I(s.a,s.b).q(0,2).p(0,u.gaa())
s=n.b
q=r.a
if(typeof q!=="number")return q.U()
p=n.e
if(typeof p!=="number")return H.u(p)
o=n.z
if(typeof o!=="number")return H.u(o)
s.sZ(0,-q*p+o)
n.b.sX(0)
t=t.K(0,a.z)
n.Q=new V.I(t.a,t.b).q(0,2).p(0,u.gaa())}n.a7()},
bS:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.C(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.q()
s=r.e
if(typeof s!=="number")return H.u(s)
u.sX(t*10*s)
r.a7()}},
aZ:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.O()
if(q<p){r.ch=p
u=b.y
r.b.at(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.ay(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$iaf:1}
U.dO.prototype={
gB:function(){var u=this.fx
return u==null?this.fx=D.K():u},
S:function(a){var u=this.fx
if(u!=null)u.F(a)},
a7:function(){return this.S(null)},
b4:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdm().n(0,s.gbN())
s.a.c.gdO().n(0,s.gbP())
s.a.c.gcA().n(0,s.gbR())
u=s.a.d
t=u.f
u=t==null?u.f=D.K():t
u.n(0,s.geP())
u=s.a.d
t=u.d
u=t==null?u.d=D.K():t
u.n(0,s.geR())
u=s.a.e
t=u.b
u=t==null?u.b=D.K():t
u.n(0,s.gh7())
u=s.a.e
t=u.d
u=t==null?u.d=D.K():t
u.n(0,s.gh5())
u=s.a.e
t=u.c
u=t==null?u.c=D.K():t
u.n(0,s.gh3())
return!0},
an:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.U()
u=-u}if(this.r){if(typeof t!=="number")return t.U()
t=-t}return new V.I(u,t)},
bO:function(a){var u=this
H.r(a,"$iaU")
if(!J.A(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bQ:function(a){var u,t,s,r,q,p,o,n=this
H.r(a,"$iaU")
if(!n.cx)return
if(n.ch){u=a.d.K(0,a.y)
u=new V.I(u.a,u.b)
u=u.C(u)
t=n.Q
if(typeof t!=="number")return H.u(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.K(0,a.y)
u=n.an(new V.I(t.a,t.b).q(0,2).p(0,u.gaa()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.U()
s=n.y
if(typeof s!=="number")return H.u(s)
t.sX(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.U()
t=n.x
if(typeof t!=="number")return H.u(t)
s.sX(-u*10*t)}else{u=a.c
t=a.d
s=t.K(0,a.y)
r=n.an(new V.I(s.a,s.b).q(0,2).p(0,u.gaa()))
s=n.c
q=r.a
if(typeof q!=="number")return q.U()
p=n.y
if(typeof p!=="number")return H.u(p)
o=n.cy
if(typeof o!=="number")return H.u(o)
s.sZ(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.U()
q=n.x
if(typeof q!=="number")return H.u(q)
s=n.db
if(typeof s!=="number")return H.u(s)
o.sZ(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.K(0,a.z)
n.dx=n.an(new V.I(t.a,t.b).q(0,2).p(0,u.gaa()))}n.a7()},
bS:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.C(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.U()
s=r.y
if(typeof s!=="number")return H.u(s)
u.sX(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.U()
u=r.x
if(typeof u!=="number")return H.u(u)
s.sX(-t*10*u)
r.a7()}},
eQ:function(a){var u=this
if(H.r(a,"$ide").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
eS:function(a){var u,t,s,r,q,p,o,n=this
H.r(a,"$iaU")
if(!J.A(n.d,a.x.b))return
u=a.c
t=a.d
s=t.K(0,a.y)
r=n.an(new V.I(s.a,s.b).q(0,2).p(0,u.gaa()))
s=n.c
q=r.a
if(typeof q!=="number")return q.U()
p=n.y
if(typeof p!=="number")return H.u(p)
o=n.cy
if(typeof o!=="number")return H.u(o)
s.sZ(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.U()
q=n.x
if(typeof q!=="number")return H.u(q)
s=n.db
if(typeof s!=="number")return H.u(s)
o.sZ(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.K(0,a.z)
n.dx=n.an(new V.I(t.a,t.b).q(0,2).p(0,u.gaa()))
n.a7()},
h8:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
h6:function(a){var u,t,s,r,q,p,o,n=this
H.r(a,"$idH")
if(!n.cx)return
if(n.ch){u=a.d.K(0,a.y)
u=new V.I(u.a,u.b)
u=u.C(u)
t=n.Q
if(typeof t!=="number")return H.u(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.K(0,a.y)
u=n.an(new V.I(t.a,t.b).q(0,2).p(0,u.gaa()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.U()
s=n.y
if(typeof s!=="number")return H.u(s)
t.sX(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.U()
t=n.x
if(typeof t!=="number")return H.u(t)
s.sX(-u*10*t)}else{u=a.c
t=a.d
s=t.K(0,a.y)
r=n.an(new V.I(s.a,s.b).q(0,2).p(0,u.gaa()))
s=n.c
q=r.a
if(typeof q!=="number")return q.U()
p=n.y
if(typeof p!=="number")return H.u(p)
o=n.cy
if(typeof o!=="number")return H.u(o)
s.sZ(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.U()
q=n.x
if(typeof q!=="number")return H.u(q)
s=n.db
if(typeof s!=="number")return H.u(s)
o.sZ(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.K(0,a.z)
n.dx=n.an(new V.I(t.a,t.b).q(0,2).p(0,u.gaa()))}n.a7()},
h4:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.C(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.U()
s=r.y
if(typeof s!=="number")return H.u(s)
u.sX(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.U()
u=r.x
if(typeof u!=="number")return H.u(u)
s.sX(-t*10*u)
r.a7()}},
aZ:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.O()
if(q<p){r.dy=p
u=b.y
r.c.at(0,u)
r.b.at(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.ay(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.q(0,V.ay(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iaf:1}
U.dP.prototype={
gB:function(){var u=this.r
return u==null?this.r=D.K():u},
S:function(a){var u=this.r
if(u!=null)u.F(a)},
b4:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.K():t
t=r.geU()
u.n(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.K():s).n(0,t)
return!0},
eV:function(a){var u,t,s,r,q=this
if(!J.A(q.b,q.a.b.c))return
H.r(a,"$icc")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.q()
r=u+t*s
if(u!==r){q.d=r
u=new D.E("zoom",u,r)
u.b=!0
q.S(u)}},
aZ:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.ay(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$iaf:1}
M.d3.prototype={
av:function(a){var u=this.y
if(u!=null)u.F(a)},
ev:function(){return this.av(null)},
f6:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gam(),s=[{func:1,ret:-1,args:[D.Z]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bw()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.by()
u.b=!0
this.av(u)},
f8:function(a,b){var u,t
for(u=b.gT(b),t=this.gam();u.v();)u.gE(u).gB().D(0,t)
u=new D.bz()
u.b=!0
this.av(u)},
se2:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gB().D(0,t.gam())
u=t.d
t.d=a
if(a!=null)a.gB().n(0,t.gam())
s=new D.E("technique",u,t.d)
s.b=!0
t.av(s)}},
gB:function(){var u=this.y
return u==null?this.y=D.K():u},
aW:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
a.dZ(f.d)
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
if(typeof s!=="number")return H.u(s)
o=C.d.ak(p*s)
p=q.b
if(typeof r!=="number")return H.u(r)
n=C.d.ak(p*r)
p=C.d.ak(q.c*s)
a.c=p
q=C.d.ak(q.d*r)
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
i=V.ay(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.dY(i)
t=$.lw
if(t==null){t=V.kQ()
q=V.kV()
p=$.lO
t=V.lt(t,q,p==null?$.lO=new V.y(0,0,-1):p)
$.lw=t
h=t}else h=t
u=u.b
if(u!=null){g=u.a
if(g!=null)h=g.q(0,h)}a.db.dY(h)
u=f.d
if(u!=null)u.at(0,a)
for(u=f.e.a,u=new J.ad(u,u.length);u.v();)u.d.at(0,a)
for(u=f.e.a,u=new J.ad(u,u.length);u.v();)u.d.aW(a)
f.b.toString
a.cy.cq()
a.db.cq()
f.c.toString
a.dX()}}
A.cT.prototype={}
A.eU.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hy:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
hs:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.a7.prototype={
gal:function(a){var u=this.b?2:0
return 0|u|0},
i:function(a){var u=this.b?2:0
return""+(0|u|0)},
t:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.a7))return!1
u=this.b===b.b&&!0
return u}}
A.h3.prototype={
el:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
b8.z=c3
u=new P.T("")
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
A.ou(c3,u)
A.ow(c3,u)
A.ov(c3,u)
A.oy(c3,u)
A.oz(c3,u)
A.ox(c3,u)
A.oA(c3,u)
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
m=A.ot(b8.z)
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
H.m(P.l("Failed to link shader: "+H.e(l)))}b8.h_()
b8.h1()
b8.Q=b8.x.h(0,"posAttr")
b8.cx=b8.x.h(0,"normAttr")
b8.ch=b8.x.h(0,"binmAttr")
b8.cy=b8.x.h(0,"txt2DAttr")
b8.db=b8.x.h(0,"txtCubeAttr")
b8.dx=b8.x.h(0,"bendAttr")
if(c3.dy)b8.id=H.r(b8.y.W(0,"invViewMat"),"$iag")
if(t)b8.dy=H.r(b8.y.W(0,"objMat"),"$iag")
if(r)b8.fr=H.r(b8.y.W(0,"viewObjMat"),"$iag")
b8.fy=H.r(b8.y.W(0,"projViewObjMat"),"$iag")
if(c3.go)b8.fx=H.r(b8.y.W(0,"viewMat"),"$iag")
if(c3.x1)b8.k1=H.r(b8.y.W(0,"txt2DMat"),"$icq")
if(c3.x2)b8.k2=H.r(b8.y.W(0,"txtCubeMat"),"$iag")
if(c3.y1)b8.k3=H.r(b8.y.W(0,"colorMat"),"$iag")
b8.r1=H.b([],[A.ag])
t=c3.aS
if(t>0){b8.k4=b8.y.W(0,"bendMatCount")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.h(0,q)
if(j==null)H.m(P.l(c0+q+c1))
s.push(H.r(j,"$iag"))}}if(c3.a.b)b8.rx=H.r(b8.y.W(0,"emissionTxt"),"$ia0")
if(c3.b.b)b8.x2=H.r(b8.y.W(0,"ambientTxt"),"$ia0")
if(c3.c.b)b8.aS=H.r(b8.y.W(0,"diffuseTxt"),"$ia0")
if(c3.d.b)b8.dr=H.r(b8.y.W(0,"invDiffuseTxt"),"$ia0")
t=c3.e
s=t.b||!1
if(s){b8.dt=H.r(b8.y.W(0,"shininess"),"$iW")
if(t.b)b8.ds=H.r(b8.y.W(0,"specularTxt"),"$ia0")}if(c3.f.b)b8.du=H.r(b8.y.W(0,"bumpTxt"),"$ia0")
if(c3.db){b8.dv=H.r(b8.y.W(0,"envSampler"),"$ibG")
if(c3.r.b)b8.dw=H.r(b8.y.W(0,"reflectTxt"),"$ia0")
t=c3.x
s=t.b||!1
if(s){b8.dz=H.r(b8.y.W(0,"refraction"),"$iW")
if(t.b)b8.dA=H.r(b8.y.W(0,"refractTxt"),"$ia0")}}if(c3.y.b)b8.dB=H.r(b8.y.W(0,"alphaTxt"),"$ia0")
if(c3.k1){t=c3.z
s=t.length
if(s!==0){r=P.w
b8.c8=new H.H([r,A.bk])
b8.c9=new H.H([r,[P.p,A.co]])
for(r=[A.co],i=0;i<t.length;t.length===s||(0,H.n)(t),++i){h=t[i]
g=h.a
f="barLight"+H.e(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].startPnt"
j=p.h(0,o)
if(j==null)H.m(P.l(c0+o+c1))
H.r(j,"$iV")
p=b8.y
o=f+"s["+k+"].endPnt"
d=p.h(0,o)
if(d==null)H.m(P.l(c0+o+c1))
H.r(d,"$iV")
p=b8.y
o=f+"s["+k+"].color"
c=p.h(0,o)
if(c==null)H.m(P.l(c0+o+c1))
H.r(c,"$iV")
if(typeof g!=="number")return g.a8()
if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
b=p.h(0,o)
if(b==null)H.m(P.l(c0+o+c1))
H.r(b,"$iW")
p=b8.y
o=f+"s["+k+"].att1"
a=p.h(0,o)
if(a==null)H.m(P.l(c0+o+c1))
H.r(a,"$iW")
p=b8.y
o=f+"s["+k+"].att2"
a0=p.h(0,o)
if(a0==null)H.m(P.l(c0+o+c1))
H.r(a0,"$iW")
a1=a0
a2=a
a3=b}else{a1=b9
a2=a1
a3=a2}e.push(new A.co(j,d,c,a3,a2,a1))}b8.c9.m(0,g,e)
q=b8.c8
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.m(P.l(c0+o+c1))
q.m(0,g,j)}}t=c3.Q
s=t.length
if(s!==0){r=P.w
b8.ca=new H.H([r,A.bk])
b8.cb=new H.H([r,[P.p,A.cp]])
for(r=[A.cp],i=0;i<t.length;t.length===s||(0,H.n)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.e(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.a8()
p=(g&1)!==0
if(p){o=b8.y
a4=f+"s["+k+"].objUp"
j=o.h(0,a4)
if(j==null)H.m(P.l(c0+a4+c1))
H.r(j,"$iV")
o=b8.y
a4=f+"s["+k+"].objRight"
d=o.h(0,a4)
if(d==null)H.m(P.l(c0+a4+c1))
H.r(d,"$iV")
o=b8.y
a4=f+"s["+k+"].objDir"
c=o.h(0,a4)
if(c==null)H.m(P.l(c0+a4+c1))
H.r(c,"$iV")
a5=c
a6=d
a7=j}else{a5=b9
a6=a5
a7=a6}o=b8.y
a4=f+"s["+k+"].viewDir"
j=o.h(0,a4)
if(j==null)H.m(P.l(c0+a4+c1))
H.r(j,"$iV")
o=b8.y
a4=f+"s["+k+"].color"
d=o.h(0,a4)
if(d==null)H.m(P.l(c0+a4+c1))
H.r(d,"$iV")
if(p){p=b8.y
o=f+"sTexture2D"+k
c=p.h(0,o)
if(c==null)H.m(P.l(c0+o+c1))
H.r(c,"$ia0")
a8=c}else a8=b9
e.push(new A.cp(a7,a6,a5,j,d,a8))}b8.cb.m(0,g,e)
q=b8.ca
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.m(P.l(c0+o+c1))
q.m(0,g,j)}}t=c3.ch
s=t.length
if(s!==0){r=P.w
b8.cc=new H.H([r,A.bk])
b8.cd=new H.H([r,[P.p,A.cr]])
for(r=[A.cr],i=0;i<t.length;t.length===s||(0,H.n)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.e(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.h(0,o)
if(j==null)H.m(P.l(c0+o+c1))
H.r(j,"$iV")
p=b8.y
o=f+"s["+k+"].viewPnt"
d=p.h(0,o)
if(d==null)H.m(P.l(c0+o+c1))
H.r(d,"$iV")
p=b8.y
o=f+"s["+k+"].color"
c=p.h(0,o)
if(c==null)H.m(P.l(c0+o+c1))
H.r(c,"$iV")
if(typeof g!=="number")return g.a8()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
b=p.h(0,o)
if(b==null)H.m(P.l(c0+o+c1))
H.r(b,"$icq")
a9=b}else a9=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
b=p.h(0,o)
if(b==null)H.m(P.l(c0+o+c1))
H.r(b,"$ibG")
a8=b}else a8=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
b=p.h(0,o)
if(b==null)H.m(P.l(c0+o+c1))
H.r(b,"$ibG")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a=p.h(0,o)
if(a==null)H.m(P.l(c0+o+c1))
H.r(a,"$icn")
b0=b
b1=a}else{b0=b9
b1=b0}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
b=p.h(0,o)
if(b==null)H.m(P.l(c0+o+c1))
H.r(b,"$iW")
p=b8.y
o=f+"s["+k+"].att1"
a=p.h(0,o)
if(a==null)H.m(P.l(c0+o+c1))
H.r(a,"$iW")
p=b8.y
o=f+"s["+k+"].att2"
a0=p.h(0,o)
if(a0==null)H.m(P.l(c0+o+c1))
H.r(a0,"$iW")
a1=a0
a2=a
a3=b}else{a1=b9
a2=a1
a3=a2}e.push(new A.cr(j,d,a9,c,a8,b0,b1,a3,a2,a1))}b8.cd.m(0,g,e)
q=b8.cc
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.m(P.l(c0+o+c1))
q.m(0,g,j)}}t=c3.cx
s=t.length
if(s!==0){r=P.w
b8.ce=new H.H([r,A.bk])
b8.cf=new H.H([r,[P.p,A.cs]])
for(r=[A.cs],i=0;i<t.length;t.length===s||(0,H.n)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.e(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.h(0,o)
if(j==null)H.m(P.l(c0+o+c1))
H.r(j,"$iV")
p=b8.y
o=f+"s["+k+"].objDir"
d=p.h(0,o)
if(d==null)H.m(P.l(c0+o+c1))
H.r(d,"$iV")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.h(0,o)
if(c==null)H.m(P.l(c0+o+c1))
H.r(c,"$iV")
p=b8.y
o=f+"s["+k+"].color"
b=p.h(0,o)
if(b==null)H.m(P.l(c0+o+c1))
H.r(b,"$iV")
if(typeof g!=="number")return g.a8()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a=p.h(0,o)
if(a==null)H.m(P.l(c0+o+c1))
H.r(a,"$iV")
p=b8.y
o=f+"s["+k+"].objRight"
a0=p.h(0,o)
if(a0==null)H.m(P.l(c0+o+c1))
H.r(a0,"$iV")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.h(0,o)
if(b2==null)H.m(P.l(c0+o+c1))
H.r(b2,"$iW")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.h(0,o)
if(b3==null)H.m(P.l(c0+o+c1))
H.r(b3,"$iW")
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
if(a==null)H.m(P.l(c0+a4+c1))
H.r(a,"$icn")
b1=a}else b1=b9
if((g&8)!==0){o=b8.y
a4=f+"s["+k+"].cutoff"
a=o.h(0,a4)
if(a==null)H.m(P.l(c0+a4+c1))
H.r(a,"$iW")
o=b8.y
a4=f+"s["+k+"].coneAngle"
a0=o.h(0,a4)
if(a0==null)H.m(P.l(c0+a4+c1))
H.r(a0,"$iW")
b6=a0
b7=a}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
a4=f+"s["+k+"].att0"
a=o.h(0,a4)
if(a==null)H.m(P.l(c0+a4+c1))
H.r(a,"$iW")
o=b8.y
a4=f+"s["+k+"].att1"
a0=o.h(0,a4)
if(a0==null)H.m(P.l(c0+a4+c1))
H.r(a0,"$iW")
o=b8.y
a4=f+"s["+k+"].att2"
b2=o.h(0,a4)
if(b2==null)H.m(P.l(c0+a4+c1))
H.r(b2,"$iW")
a1=b2
a2=a0
a3=a}else{a1=b9
a2=a1
a3=a2}if((g&1)!==0){o=b8.y
a4=f+"sTexture2D"+k
a=o.h(0,a4)
if(a==null)H.m(P.l(c0+a4+c1))
H.r(a,"$ia0")
a8=a}else a8=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a=p.h(0,o)
if(a==null)H.m(P.l(c0+o+c1))
H.r(a,"$ia0")
b0=a}else b0=b9
e.push(new A.cs(j,d,c,b,a7,a6,b5,b4,b1,b7,b6,a3,a2,a1,a8,b0))}b8.cf.m(0,g,e)
q=b8.ce
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.m(P.l(c0+o+c1))
q.m(0,g,j)}}}},
ai:function(a,b){if(b!=null&&b.d)a.eb(b)},
fZ:function(a,b){}}
A.cU.prototype={
i:function(a){return"barLight"+H.e(this.a)}}
A.d0.prototype={
i:function(a){return"dirLight"+H.e(this.a)}}
A.dq.prototype={
i:function(a){return"pointLight"+H.e(this.a)}}
A.dw.prototype={
i:function(a){return"spotLight"+H.e(this.a)}}
A.h6.prototype={
i:function(a){return this.b7}}
A.co.prototype={}
A.cp.prototype={}
A.cr.prototype={}
A.cs.prototype={}
A.du.prototype={
eo:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cT:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.l("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
h_:function(){var u,t,s,r=this,q=H.b([],[A.cT]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.u(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cT(p,t.name,s))}r.x=new A.eU(q)},
h1:function(){var u,t,s,r=this,q=H.b([],[A.dJ]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.u(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.hp(t.type,t.size,t.name,s))}r.y=new A.iD(q)},
aK:function(a,b,c){var u=this.a
if(a===1)return new A.bk(u,b,c)
else return A.kS(u,this.r,b,a,c)},
eK:function(a,b,c){var u=this.a
if(a===1)return new A.a0(u,b,c)
else return A.kS(u,this.r,b,a,c)},
eL:function(a,b,c){var u=this.a
if(a===1)return new A.bG(u,b,c)
else return A.kS(u,this.r,b,a,c)},
bn:function(a,b){return new P.dZ(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
hp:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aK(b,c,d)
case 5121:return u.aK(b,c,d)
case 5122:return u.aK(b,c,d)
case 5123:return u.aK(b,c,d)
case 5124:return u.aK(b,c,d)
case 5125:return u.aK(b,c,d)
case 5126:return new A.W(u.a,c,d)
case 35664:return new A.iz(u.a,c,d)
case 35665:return new A.V(u.a,c,d)
case 35666:return new A.cn(u.a,c,d)
case 35667:return new A.iA(u.a,c,d)
case 35668:return new A.iB(u.a,c,d)
case 35669:return new A.iC(u.a,c,d)
case 35674:return new A.iE(u.a,c,d)
case 35675:return new A.cq(u.a,c,d)
case 35676:return new A.ag(u.a,c,d)
case 35678:return u.eK(b,c,d)
case 35680:return u.eL(b,c,d)
case 35670:throw H.c(u.bn("BOOL",c))
case 35671:throw H.c(u.bn("BOOL_VEC2",c))
case 35672:throw H.c(u.bn("BOOL_VEC3",c))
case 35673:throw H.c(u.bn("BOOL_VEC4",c))
default:throw H.c(P.l("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.dJ.prototype={}
A.iD.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
W:function(a,b){var u=this.h(0,b)
if(u==null)throw H.c(P.l("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.P()},
P:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.n)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.bk.prototype={
i:function(a){return"Uniform1i: "+H.e(this.c)}}
A.iA.prototype={
i:function(a){return"Uniform2i: "+H.e(this.c)}}
A.iB.prototype={
i:function(a){return"Uniform3i: "+H.e(this.c)}}
A.iC.prototype={
i:function(a){return"Uniform4i: "+H.e(this.c)}}
A.iy.prototype={
i:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.W.prototype={
i:function(a){return"Uniform1f: "+H.e(this.c)}}
A.iz.prototype={
i:function(a){return"Uniform2f: "+H.e(this.c)}}
A.V.prototype={
i:function(a){return"Uniform3f: "+H.e(this.c)}}
A.cn.prototype={
i:function(a){return"Uniform4f: "+H.e(this.c)}}
A.iE.prototype={
i:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.cq.prototype={
ah:function(a){var u=new Float32Array(H.bN(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.e(this.c)}}
A.ag.prototype={
ah:function(a){var u=new Float32Array(H.bN(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.e(this.c)}}
A.a0.prototype={
eb:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.bG.prototype={
i:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.jT.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.ck(s.b,b).ck(s.d.ck(s.c,b),c)
a.sZ(0,new V.N(r.a,r.b,r.c))
a.sbx(r.p(0,Math.sqrt(r.C(r))))
s=1-b
u=1-c
a.sdg(new V.bi(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)}}
F.k2.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)}}
F.k4.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.u(p)
s=-s*p
u=r*p
a.sZ(0,new V.N(s,u,q))
u=new V.y(s,u,q)
a.sbx(u.p(0,Math.sqrt(u.C(u))))
a.sdg(new V.bi(1-c,2+c,-1,-1))}}
F.k5.prototype={
$1:function(a){return this.a.$2(a,1)}}
F.k6.prototype={
$1:function(a){return this.a.$2(1-a,0)}}
F.kf.prototype={
$3:function(a,b,c){var u=c*3.141592653589793,t=Math.sin(u),s=b*6.283185307179586,r=new V.y(Math.cos(s)*t,Math.cos(u),Math.sin(s)*t)
s=r.p(0,Math.sqrt(r.C(r)))
a.sZ(0,new V.N(s.a,s.b,s.c))}}
F.ks.prototype={
$2:function(a,b){return 0}}
F.kt.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.u(s)
u=a.f
t=new V.y(u.a,u.b,u.c)
s=t.p(0,Math.sqrt(t.C(t))).q(0,this.b+s)
a.sZ(0,new V.N(s.a,s.b,s.c))}}
F.kw.prototype={
$1:function(a){return new V.N(Math.cos(a),Math.sin(a),0)}}
F.ke.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.N(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)}}
F.k3.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.le(n.$1(o),m)
m=J.le(n.$1(o+3.141592653589793/p.c),m).K(0,l)
m=new V.y(m.a,m.b,m.c)
u=m.p(0,Math.sqrt(m.C(m)))
n=$.lP
if(n==null){n=new V.y(1,0,0)
$.lP=n
t=n}else t=n
n=u.az(!J.A(u,t)?V.lR():t)
s=n.p(0,Math.sqrt(n.C(n)))
n=s.az(u)
t=n.p(0,Math.sqrt(n.C(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.q(0,n*m)
m=s.q(0,q*m)
a.sZ(0,l.w(0,new V.N(n.a-m.a,n.b-m.b,n.c-m.c)))}}
F.aQ.prototype={
b5:function(){var u=this
if(!u.gb6()){C.b.D(u.a.a.d.b,u)
u.a.a.V()}u.bW()
u.bX()
u.fP()},
bl:function(a){this.a=a
a.d.b.push(this)},
bm:function(a){this.b=a
a.d.c.push(this)},
d2:function(a){this.c=a
a.d.d.push(this)},
bW:function(){var u=this.a
if(u!=null){C.b.D(u.d.b,this)
this.a=null}},
bX:function(){var u=this.b
if(u!=null){C.b.D(u.d.c,this)
this.b=null}},
fP:function(){var u=this.c
if(u!=null){C.b.D(u.d.d,this)
this.c=null}},
gb6:function(){return this.a==null||this.b==null||this.c==null},
eD:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.ct()
if(q!=null)s=s.w(0,q)
if(u!=null)s=s.w(0,u)
if(t!=null)s=s.w(0,t)
if(s.dL())return
return s.p(0,Math.sqrt(s.C(s)))},
eF:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.K(0,q)
r=new V.y(r.a,r.b,r.c)
s=r.p(0,Math.sqrt(r.C(r)))
r=t.K(0,q)
r=new V.y(r.a,r.b,r.c)
r=s.az(r.p(0,Math.sqrt(r.C(r))))
return r.p(0,Math.sqrt(r.C(r)))},
c2:function(){var u,t=this
if(t.d!=null)return!0
u=t.eD()
if(u==null){u=t.eF()
if(u==null)return!1}t.d=u
t.a.a.V()
return!0},
eC:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.ct()
if(q!=null)s=s.w(0,q)
if(u!=null)s=s.w(0,u)
if(t!=null)s=s.w(0,t)
if(s.dL())return
return s.p(0,Math.sqrt(s.C(s)))},
eE:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.C().a){l=d.K(0,g)
l=new V.y(l.a,l.b,l.c)
q=l.p(0,Math.sqrt(l.C(l)))
if(s.a-t.a<0)q=q.U(0)}else{p=(l-u.b)/r
l=d.K(0,g).q(0,p).w(0,g).K(0,j)
l=new V.y(l.a,l.b,l.c)
q=l.p(0,Math.sqrt(l.C(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.U(0)}l=n.d
if(l!=null){o=l.p(0,Math.sqrt(l.C(l)))
l=o.az(q)
l=l.p(0,Math.sqrt(l.C(l))).az(o)
q=l.p(0,Math.sqrt(l.C(l)))}return q},
c0:function(){var u,t=this
if(t.e!=null)return!0
u=t.eC()
if(u==null){u=t.eE()
if(u==null)return!1}t.e=u
t.a.a.V()
return!0},
aJ:function(a,b){var u=b.a
if(u==null)throw H.c(P.l("May not replace a face's vertex with a vertex which is not attached to a shape."))
if(a.a!==u)throw H.c(P.l("May not replace a face's vertex with a vertex attached to a different shape."))},
ghk:function(a){var u=this
if(J.A(u.a,u.b))return!0
if(J.A(u.b,u.c))return!0
if(J.A(u.c,u.a))return!0
return!1},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
I:function(a){var u,t,s=this
if(s.gb6())return a+"disposed"
u=a+C.a.ag(J.a5(s.a.e),0)+", "+C.a.ag(J.a5(s.b.e),0)+", "+C.a.ag(J.a5(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
P:function(){return this.I("")}}
F.ft.prototype={}
F.i1.prototype={
aU:function(a,b,c){var u,t=b.a
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
F.c6.prototype={
b5:function(){var u=this
if(!u.gb6()){C.b.D(u.a.a.c.b,u)
u.a.a.V()}u.bW()
u.bX()},
bl:function(a){this.a=a
a.c.b.push(this)},
bm:function(a){this.b=a
a.c.c.push(this)},
bW:function(){var u=this.a
if(u!=null){C.b.D(u.c.b,this)
this.a=null}},
bX:function(){var u=this.b
if(u!=null){C.b.D(u.c.c,this)
this.b=null}},
gb6:function(){return this.a==null||this.b==null},
aJ:function(a,b){var u=b.a
if(u==null)throw H.c(P.l("May not replace a line's vertex with a vertex which is not attached to a shape."))
if(a.a!==u)throw H.c(P.l("May not replace a line's vertex with a vertex attached to a different shape."))},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
I:function(a){if(this.gb6())return a+"disposed"
return a+C.a.ag(J.a5(this.a.e),0)+", "+C.a.ag(J.a5(this.b.e),0)},
P:function(){return this.I("")}}
F.fR.prototype={}
F.ix.prototype={
aU:function(a,b,c){var u,t=b.a
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
F.cg.prototype={
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
I:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.a.ag(J.a5(u.e),0)},
P:function(){return this.I("")}}
F.hT.prototype={
gB:function(){var u=this.e
return u==null?this.e=D.K():u},
aV:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.A()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.n)(g),++s){r=g[s]
h.a.n(0,r.hm())}h.a.A()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.n)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.A()
o=o.e
if(typeof o!=="number")return o.w()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
n=p[o]
h.b.a.a.n(0,n)
o=new F.cg()
if(n.a==null)H.m(P.l("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.F(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.n)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.A()
o=o.e
if(typeof o!=="number")return o.w()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.A()
p=p.e
if(typeof p!=="number")return p.w()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.c.a
p.a.n(0,l)
p.a.n(0,k)
F.n6(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.n)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.A()
o=o.e
if(typeof o!=="number")return o.w()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.A()
p=p.e
if(typeof p!=="number")return p.w()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.A()
o=o.e
if(typeof o!=="number")return o.w()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
i=p[o]
o=h.d.a
o.a.n(0,l)
o.a.n(0,k)
o.a.n(0,i)
F.c0(l,k,i)}g=h.e
if(g!=null)g.as(0)},
aj:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aj()||!1
if(!t.a.aj())u=!1
s=t.e
if(s!=null)s.as(0)
return u},
hB:function(a,b){var u,t,s,r=this.a.c.length
for(u=0;u<r;++u){t=this.a.c
if(u>=t.length)return H.d(t,u)
s=t[u]
if(b.aU(0,a,s))return s}return},
fR:function(a,b){var u,t,s,r,q,p
this.a.n(0,a)
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.n)(b),++t){s=b[t]
for(;r=s.d,r.b.length+r.c.length+r.d.length>0;){r=r.h(0,0)
q=r.a
if(q==null||r.b==null||r.c==null)H.m(P.l("May not replace a face's vertex when the point has been disposed."))
if(J.A(q,s)){r.aJ(s,a)
q=r.a
if(q!=null){C.b.D(q.d.b,r)
r.a=null}r.a=a
a.d.b.push(r)
p=1}else p=0
if(J.A(r.b,s)){r.aJ(s,a)
q=r.b
if(q!=null){C.b.D(q.d.c,r)
r.b=null}r.b=a
a.d.c.push(r);++p}if(J.A(r.c,s)){r.aJ(s,a)
q=r.c
if(q!=null){C.b.D(q.d.d,r)
r.c=null}r.c=a
a.d.d.push(r);++p}if(p>0){r=r.a.a.e
if(r!=null)r.F(null)}}for(;r=s.c,r.b.length+r.c.length>0;){r=r.h(0,0)
q=r.a
if(q==null||r.b==null)H.m(P.l("May not replace a line's vertex when the point has been disposed."))
if(J.A(q,s)){r.aJ(s,a)
q=r.a
if(q!=null){C.b.D(q.c.b,r)
r.a=null}r.a=a
a.c.b.push(r)
p=1}else p=0
if(J.A(r.b,s)){r.aJ(s,a)
q=r.b
if(q!=null){C.b.D(q.c.c,r)
r.b=null}r.b=a
a.c.c.push(r);++p}if(p>0){r=r.a.a.e
if(r!=null)r.F(null)}}for(;r=s.b.b,r.length>0;){r=r[0]
q=r.a
if(q==null)H.m(P.l("May not replace a point's vertex when the point has been disposed."))
if(J.A(q,s)){if(a.a==null)H.m(P.l("May not replace a point's vertex with a vertex which is not attached to a shape."))
q=r.a
if(q!=null){C.b.D(q.b.b,r)
r.a=null}r.a=a
a.b.b.push(r)
p=1}else p=0
if(p>0){r=r.a.a.e
if(r!=null)r.F(null)}}this.a.D(0,s)}},
dN:function(a,b){var u,t,s,r,q,p,o=this,n=o.e
if(n!=null)++n.d
n=o.a.c
u=H.b(n.slice(0),[H.aL(n,0)])
for(n=[F.bl];u.length!==0;){t=C.b.ghD(u)
C.b.ct(u,0)
if(t!=null){s=H.b([],n)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.d(u,r)
q=u[r]
if(q!=null&&a.aU(0,t,q)){s.push(q)
C.b.ct(u,r)}}if(s.length>1){p=b.aV(s)
if(p!=null){o.fR(p,s)
u.push(p)}}}}o.a.A()
o.c.bw()
o.d.bw()
o.b.i6()
o.c.cu(new F.ix())
o.d.cu(new F.i1())
n=o.e
if(n!=null)n.as(0)},
bp:function(){this.dN(new F.cu(),new F.hw())},
hi:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.b5()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.b4().a)!==0)++s
if((t&$.b3().a)!==0)++s
if((t&$.b6().a)!==0)++s
if((t&$.bp().a)!==0)++s
if((t&$.cO().a)!==0)++s
if((t&$.cP().a)!==0)++s
if((t&$.bU().a)!==0)++s
if((t&$.b2().a)!==0)++s
r=a4.gcF(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.J])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.cV])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.hf(m)
k=l.gcF(l)
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
u.bufferData(a1,new Float32Array(H.bN(p)),35044)
u.bindBuffer(a1,null)
c=new Z.cW(new Z.dQ(a1,d),o,a4)
c.b=H.b([],[Z.bx])
if(a0.b.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.A()
b.push(t.e)}a=Z.kW(u,34963,b)
c.b.push(new Z.bx(0,b.length,a))}if(a0.c.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.A()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.d(t,m)
t=t[m].b
t.a.a.A()
b.push(t.e)}a=Z.kW(u,34963,b)
c.b.push(new Z.bx(1,b.length,a))}if(a0.d.b.length!==0){b=H.b([],[P.w])
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
b.push(t.e)}a=Z.kW(u,34963,b)
c.b.push(new Z.bx(4,b.length,a))}return c},
i:function(a){var u=this,t="   ",s=H.b([],[P.h])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.I(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.I(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.I(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.I(t))}return C.b.j(s,"\n")},
V:function(){var u=this.e
if(u!=null)u.F(null)}}
F.hV.prototype={
bo:function(a,b,c,d){var u,t=this.a
t.a.n(0,b)
t.a.n(0,c)
t.a.n(0,d)
u=new F.aQ()
t=b.a
if(t==null)H.m(P.l("May not create a face with a first vertex which is not attached to a shape."))
if(t!=c.a||t!=d.a)H.m(P.l("May not create a face with vertices attached to different shapes."))
u.bl(b)
u.bm(c)
u.d2(d)
u.a.a.d.b.push(u)
u.a.a.V()
return u},
hb:function(a){var u,t,s,r,q,p=H.b([],[F.aQ]),o=a.length
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
p.push(F.c0(u,r,q))}}return p},
hc:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.aQ])
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
h.push(F.c0(m,l,j))
u.a.n(0,m)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.c0(m,j,i))}else{n.n(0,l)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.c0(l,j,i))
u.a.n(0,l)
u.a.n(0,i)
u.a.n(0,m)
h.push(F.c0(l,i,m))}p=!p}r=!r}return h},
gl:function(a){return this.b.length},
cu:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.h(0,q)
for(o=q-1;o>=0;--o){n=r.d.h(0,o)
if(a.aU(0,p,n)){p.b5()
break}}}}},
bw:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=s.ghk(s)
if(t)s.b5()}},
aj:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.n)(u),++r)if(!u[r].c2())s=!1
return s},
c1:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.n)(u),++r)if(!u[r].c0())s=!1
return s},
i:function(a){return this.P()},
I:function(a){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].I(a))
return C.b.j(r,"\n")},
P:function(){return this.I("")}}
F.hW.prototype={
gl:function(a){return this.b.length},
cu:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.h(0,q)
for(o=q-1;o>=0;--o){n=r.c.h(0,o)
if(a.aU(0,p,n)){p.b5()
break}}}}},
bw:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=J.A(s.a,s.b)
if(t)s.b5()}},
i:function(a){return this.P()},
I:function(a){var u,t,s=H.b([],[P.h]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.d(t,u)
s.push(t[u].I(a+(""+u+". ")))}return C.b.j(s,"\n")},
P:function(){return this.I("")}}
F.hX.prototype={
gl:function(a){return this.b.length},
i6:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.b.D(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.F(null)}s=t.a
if(s!=null){C.b.D(s.b.b,t)
t.a=null}}}},
i:function(a){return this.P()},
I:function(a){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].I(a))
return C.b.j(r,"\n")},
P:function(){return this.I("")}}
F.bl.prototype={
c6:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.bI(u.cx,r,o,t,s,q,p,a,n)},
hm:function(){return this.c6(null)},
sZ:function(a,b){var u
if(!J.A(this.f,b)){this.f=b
u=this.a
if(u!=null)u.V()}},
sco:function(a){var u
a=a==null?null:a.p(0,Math.sqrt(a.C(a)))
if(!J.A(this.r,a)){this.r=a
u=this.a
if(u!=null)u.V()}},
sdi:function(a){var u
a=a==null?null:a.p(0,Math.sqrt(a.C(a)))
if(!J.A(this.x,a)){this.x=a
u=this.a
if(u!=null)u.V()}},
saY:function(a){var u
if(!J.A(this.y,a)){this.y=a
u=this.a
if(u!=null)u.V()}},
sbx:function(a){var u
if(!J.A(this.z,a)){this.z=a
u=this.a
if(u!=null)u.V()}},
saQ:function(a,b){var u
if(!J.A(this.Q,b)){this.Q=b
u=this.a
if(u!=null)u.V()}},
se6:function(a,b){var u
if(this.ch!==b){this.ch=b
u=this.a
if(u!=null)u.V()}},
sdg:function(a){var u
if(!J.A(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.V()}},
hO:function(a){var u,t,s=this
if(a.t(0,$.b5())){u=s.f
t=[P.J]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.b4())){u=s.r
t=[P.J]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.b3())){u=s.x
t=[P.J]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.b6())){u=s.y
t=[P.J]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.t(0,$.bp())){u=s.z
t=[P.J]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.cO())){u=s.Q
t=[P.J]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.cP())){u=s.Q
if(u==null)return H.b([1,1,1,1],[P.J])
else return u.cw(0)}else if(a.t(0,$.bU()))return H.b([s.ch],[P.J])
else if(a.t(0,$.b2())){u=s.cx
t=[P.J]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.J])},
c2:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.ct()
t.d.H(0,new F.j5(s))
s=s.a
t.r=s.p(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.V()
s=t.a.e
if(s!=null)s.as(0)}return!0},
c0:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.ct()
t.d.H(0,new F.j4(s))
s=s.a
t.x=s.p(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.V()
s=t.a.e
if(s!=null)s.as(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
I:function(a){var u,t,s=this,r="-",q=H.b([],[P.h])
q.push(C.a.ag(J.a5(s.e),0))
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
q.push(V.F(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.i(0))
else q.push(r)
t=C.b.j(q,", ")
return a+"{"+t+"}"},
P:function(){return this.I("")}}
F.j5.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.w(0,t)}}}
F.j4.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.w(0,t)}}}
F.iW.prototype={
A:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.d(u,r)
u[r].e=s;++s}this.b=!1}},
n:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.l("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.V()
return!0},
hd:function(a,b,c,d,e,f){var u=F.bI(a,null,b,c,d,e,f,null,0)
this.n(0,u)
return u},
gl:function(a){return this.c.length},
D:function(a,b){var u,t
if(b==null)return!1
u=this.a
if(b.a!==u)return!1
if(b.b.b.length===0){t=b.c
if(t.b.length===0&&t.c.length===0){t=b.d
t=t.b.length===0&&t.c.length===0&&t.d.length===0}else t=!1}else t=!1
if(!t)throw H.c(P.l("May not remove a vertex without first making it empty."))
b.a=null
C.b.D(this.c,b)
u.V()
return this.b=!0},
aj:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)u[s].c2()
return!0},
c1:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)u[s].c0()
return!0},
hj:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.p(0,Math.sqrt(p*p+o*o+n*n))
if(!J.A(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.F(null)}}}}return!0},
i:function(a){return this.P()},
I:function(a){var u,t,s,r
this.A()
u=H.b([],[P.h])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.n)(t),++r)u.push(t[r].I(a))
return C.b.j(u,"\n")},
P:function(){return this.I("")}}
F.iX.prototype={
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
H:function(a,b){var u=this
C.b.H(u.b,b)
C.b.H(u.c,new F.iY(u,b))
C.b.H(u.d,new F.iZ(u,b))},
i:function(a){return this.P()},
P:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].I(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].I(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].I(""))
return C.b.j(r,"\n")}}
F.iY.prototype={
$1:function(a){if(!J.A(a.a,this.a))this.b.$1(a)}}
F.iZ.prototype={
$1:function(a){var u=this.a
if(!J.A(a.a,u)&&!J.A(a.b,u))this.b.$1(a)}}
F.j0.prototype={
gl:function(a){return this.b.length+this.c.length},
h:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.d(t,u)
return t[u]}else{if(b<0)return H.d(t,b)
return t[b]}},
i:function(a){return this.P()},
P:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].I(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].I(""))
return C.b.j(r,"\n")}}
F.j1.prototype={}
F.cu.prototype={
aU:function(a,b,c){return J.A(b.f,c.f)}}
F.j2.prototype={}
F.j_.prototype={
aV:function(a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=null
for(u=a5.length,t=a4,s=t,r=s,q=r,p=q,o=p,n=0,m=0,l=0,k=0,j=0,i=0,h=0;h<u;++h){g=a5[h]
f=g.f
if(f!=null){o=o==null?f:new V.N(o.a+f.a,o.b+f.b,o.c+f.c);++n}e=g.r
if(e!=null)p=p==null?e:new V.y(p.a+e.a,p.b+e.b,p.c+e.c)
d=g.x
if(d!=null)q=q==null?d:new V.y(q.a+d.a,q.b+d.b,q.c+d.c)
c=g.y
if(c!=null){s=s==null?c:new V.X(s.a+c.a,s.b+c.b);++l}b=g.z
if(b!=null){t=t==null?b:new V.y(t.a+b.a,t.b+b.b,t.c+b.c);++k}a=g.Q
if(a!=null){a0=a.a
a1=a.b
a2=a.c
a=a.d
if(r==null){a=[a0,a1,a2,a]
r=new V.b_(a[0],a[1],a[2],a[3])}else{a=[a0,a1,a2,a]
a0=a[0]
a1=a[1]
a2=a[2]
a=a[3]
r=new V.b_(r.a+a0,r.b+a1,r.c+a2,r.d+a)}++m}a=g.ch
if(typeof a!=="number")return H.u(a)
i+=a;++j}a3=F.bI(a4,a4,a4,a4,a4,a4,a4,a4,0)
if(n<=0||o==null)a3.sZ(0,a4)
else a3.sZ(0,o.p(0,n))
if(p==null)a3.sco(a4)
else a3.sco(p.p(0,Math.sqrt(p.C(p))))
if(q==null)a3.sdi(a4)
else a3.sdi(q.p(0,Math.sqrt(q.C(q))))
if(l<=0||s==null)a3.saY(a4)
else a3.saY(s.p(0,l))
if(k<=0||t==null)a3.sbx(a4)
else a3.sbx(t.p(0,k))
if(m<=0||r==null)a3.saQ(0,a4)
else{u=r.p(0,m)
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
a3.saQ(0,new V.ak(a,a0,a1,u))}if(j<=0)a3.se6(0,0)
else a3.se6(0,i/j)
return a3}}
F.hw.prototype={
aV:function(a){var u,t,s,r=V.ct()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null)r=new V.y(r.a+s.a,r.b+s.b,r.c+s.c)}r=r.p(0,Math.sqrt(r.C(r)))
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.n)(a),++t)a[t].sco(r)
return}}
F.j3.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.P()},
P:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].I(""))
return C.b.j(r,"\n")}}
O.df.prototype={
gB:function(){var u=this.fr
return u==null?this.fr=D.K():u},
a_:function(a){var u=this.fr
if(u!=null)u.F(a)},
bF:function(){return this.a_(null)},
d0:function(a){this.a=null
this.a_(a)},
fU:function(){return this.d0(null)},
f0:function(a,b){var u=new D.by()
u.b=!0
this.a_(u)},
f2:function(a,b){var u=new D.bz()
u.b=!0
this.a_(u)},
cR:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=P.w
f=[f,f]
u=new H.H(f)
for(t=g.dx.e,s=t.length,r=0;r<t.length;t.length===s||(0,H.n)(t),++r){q=t[r]
p=q.gaq()
o=u.h(0,q.gaq())
u.m(0,p,o==null?1:o)}n=H.b([],[A.cU])
u.H(0,new O.ha(g,n))
C.b.b0(n,new O.hb())
m=new H.H(f)
for(t=g.dx.f,s=t.length,r=0;r<t.length;t.length===s||(0,H.n)(t),++r){p=m.h(0,0)
m.m(0,0,p==null?1:p)}l=H.b([],[A.d0])
m.H(0,new O.hc(g,l))
C.b.b0(l,new O.hd())
k=new H.H(f)
for(t=g.dx.r,s=t.length,r=0;r<t.length;t.length===s||(0,H.n)(t),++r){q=t[r]
p=q.gaq()
o=k.h(0,q.gaq())
k.m(0,p,o==null?1:o)}j=H.b([],[A.dq])
k.H(0,new O.he(g,j))
C.b.b0(j,new O.hf())
i=new H.H(f)
for(f=g.dx.x,t=f.length,r=0;r<f.length;f.length===t||(0,H.n)(f),++r){q=f[r]
s=q.gaq()
p=i.h(0,q.gaq())
i.m(0,s,p==null?1:p)}h=H.b([],[A.dw])
i.H(0,new O.hg(g,h))
C.b.b0(h,new O.hh())
f=C.c.a4(g.e.a.length+3,4)
g.dy.e
return A.ne(!1,!1,!1,!1,f*4,g.f.c,g.r.c,g.x.c,g.y.c,g.z.c,g.Q.c,g.cx.c,g.cy.c,g.db.c,n,l,j,h)},
ac:function(a,b){if(b!=null)if(!C.b.N(a,b)){b.a=a.length
a.push(b)}},
at:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.ad(u,u.length);u.v();){t=u.d
t.toString
s=$.iV
if(s==null)s=$.iV=new V.y(0,0,1)
t.a=s
r=$.iU
t.d=r==null?$.iU=new V.y(0,1,0):r
r=$.iT
t.e=r==null?$.iT=new V.y(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bz(s)
r=s.a
p=s.b
o=s.c
t.a=s.p(0,Math.sqrt(r*r+p*p+o*o))
o=q.bz(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.p(0,Math.sqrt(p*p+r*r+s*s))
s=q.bz(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.p(0,Math.sqrt(r*r+p*p+o*o))}}}},
i8:function(b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.cR()
u=b4.fr.h(0,b3.b7)
if(u==null){u=A.nd(b3,b4.a)
t=u.b
if(t.length===0)H.m(P.l("May not cache a shader with no name."))
if(b4.fr.c4(0,t))H.m(P.l('Shader cache already contains a shader by the name "'+t+'".'))
b4.fr.m(0,t,u)}b3=b2.a=u
b5.e=null}s=b3.z
r=s.dq
b3=b5.e
if(!(b3 instanceof Z.cW))b3=b5.e=null
if(b3==null||!b3.d.t(0,r)){b3=s.k4
if(b3)b5.d.aj()
q=s.r1
if(q){p=b5.d
o=p.e
if(o!=null)++o.d
p.d.c1()
p.a.c1()
p=p.e
if(p!=null)p.as(0)}p=s.rx
if(p){o=b5.d
n=o.e
if(n!=null)++n.d
o.a.hj()
o=o.e
if(o!=null)o.as(0)}m=b5.d.hi(new Z.j7(b4.a),r)
m.aT($.b5()).e=b2.a.Q.c
if(b3)m.aT($.b4()).e=b2.a.cx.c
if(q)m.aT($.b3()).e=b2.a.ch.c
if(s.r2)m.aT($.b6()).e=b2.a.cy.c
if(p)m.aT($.bp()).e=b2.a.db.c
if(s.ry)m.aT($.b2()).e=b2.a.dx.c
b5.e=m}l=H.b([],[T.dC])
b3=b2.a
q=b4.a
q.useProgram(b3.r)
b3.x.hy()
if(s.fr){b3=b2.a
p=b4.dx
p=p.ga1(p)
b3=b3.dy
b3.toString
b3.ah(p.ab(0,!0))}if(s.fx){b3=b2.a
p=b4.cx
if(p==null){p=b4.db
p=p.ga1(p)
o=b4.dx
o=b4.cx=p.q(0,o.ga1(o))
p=o}b3=b3.fr
b3.toString
b3.ah(p.ab(0,!0))}b3=b2.a
p=b4.ch
if(p==null){p=b4.gi4()
o=b4.dx
o=b4.ch=p.q(0,o.ga1(o))
p=o}b3=b3.fy
b3.toString
b3.ah(p.ab(0,!0))
if(s.go){b3=b2.a
p=b4.db
p=p.ga1(p)
b3=b3.fx
b3.toString
b3.ah(p.ab(0,!0))}if(s.x1){b3=b2.a
p=b2.b
b3=b3.k1
b3.toString
b3.ah(C.j.ab(p,!0))}if(s.x2){b3=b2.a
p=b2.c
b3=b3.k2
b3.toString
b3.ah(C.j.ab(p,!0))}if(s.y1){b3=b2.a
p=b2.d
b3=b3.k3
b3.toString
b3.ah(C.j.ab(p,!0))}if(s.aS>0){k=b2.e.a.length
b3=b2.a.k4
b3.a.uniform1i(b3.d,k)
for(j=0;j<k;++j){b3=b2.a
p=b2.e.a
if(j>=p.length)return H.d(p,j)
p=p[j]
b3=b3.r1
if(j>=b3.length)return H.d(b3,j)
b3=b3[j]
i=new Float32Array(H.bN(p.ab(0,!0)))
b3.a.uniformMatrix4fv(b3.d,!1,i)}}if(s.a.b){b2.ac(l,b2.f.d)
b3=b2.a
p=b2.f.d
b3.ai(b3.rx,p)}if(s.k1){if(s.b.b){b2.ac(l,b2.r.d)
b3=b2.a
p=b2.r.d
b3.ai(b3.x2,p)}if(s.c.b){b2.ac(l,b2.x.d)
b3=b2.a
p=b2.x.d
b3.ai(b3.aS,p)}if(s.d.b){b2.ac(l,b2.y.d)
b3=b2.a
p=b2.y.d
b3.ai(b3.dr,p)}b3=s.e
p=b3.b||!1
if(p){p=b2.a
o=b2.z.ch
p=p.dt
p.a.uniform1f(p.d,o)}if(b3.b){b2.ac(l,b2.z.d)
b3=b2.a
p=b2.z.d
b3.ai(b3.ds,p)}b3=s.z
if(b3.length>0){p=P.w
h=new H.H([p,p])
for(p=b2.dx.e,o=p.length,g=0;g<p.length;p.length===o||(0,H.n)(p),++g){f=p[g]
e=f.gaq()
d=h.h(0,e)
if(d==null)d=0
h.m(0,e,d+1)
c=J.bV(b2.a.c9.h(0,e),d)
n=f.gir()
b=$.aC
n=n.be(b==null?$.aC=new V.N(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.giw()
b=$.aC
n=n.be(b==null?$.aC=new V.N(0,0,0):b)
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gaQ(f)
b=c.d
b.a.uniform3f(b.d,n.a,n.b,n.c)
if(f.gdn()){n=f.gdd()
b=c.e
b.a.uniform1f(b.d,n)
n=f.gde()
b=c.f
b.a.uniform1f(b.d,n)
n=f.gdf()
b=c.r
b.a.uniform1f(b.d,n)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.n)(b3),++g){o=b3[g].a
k=h.h(0,o)
if(k==null)k=0
o=b2.a.c8.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.Q
if(b3.length>0){p=b4.db
a=p.ga1(p)
p=P.w
a0=new H.H([p,p])
for(p=b2.dx.f,o=p.length,g=0;g<p.length;p.length===o||(0,H.n)(p),++g){f=p[g]
d=a0.h(0,0)
if(d==null)d=0
a0.m(0,0,d+1)
c=J.bV(b2.a.cb.h(0,0),d)
n=a.bz(f.a)
b=n.a
a1=n.b
a2=n.c
a2=n.p(0,Math.sqrt(b*b+a1*a1+a2*a2))
a1=c.e
b=a2.a
n=a2.b
a2=a2.c
a1.a.uniform3f(a1.d,b,n,a2)
a2=f.c
n=c.f
n.a.uniform3f(n.d,a2.a,a2.b,a2.c)}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.n)(b3),++g){o=b3[g].a
k=a0.h(0,o)
if(k==null)k=0
o=b2.a.ca.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.ch
if(b3.length>0){p=b4.db
a=p.ga1(p)
p=P.w
a3=new H.H([p,p])
for(p=b2.dx.r,o=p.length,g=0;g<p.length;p.length===o||(0,H.n)(p),++g){f=p[g]
e=f.gaq()
d=a3.h(0,e)
if(d==null)d=0
a3.m(0,e,d+1)
c=J.bV(b2.a.cd.h(0,e),d)
a4=a.q(0,f.ga1(f))
n=f.ga1(f)
b=$.aC
n=n.be(b==null?$.aC=new V.N(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=$.aC
n=a4.be(n==null?$.aC=new V.N(0,0,0):n)
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gaQ(f)
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
f.gaE()
n=a4.dK(0)
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
i=new Float32Array(H.bN(new V.dg(b,a1,a2,a5,a6,a7,a8,a9,n).ab(0,!0)))
b0.a.uniformMatrix3fv(b0.d,!1,i)
f.gaE()
n=f.gaE()
if(!C.b.N(l,n)){n.a=l.length
l.push(n)}n=f.gaE()
b=n.gb9(n)
if(b){b=c.f
b.toString
a1=n.gb9(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.ghJ(n)
b.a.uniform1i(b.d,n)}}f.gb_()
n=f.gec()
b=c.x
b.toString
a1=n.ghu(n)
a2=n.ghv(n)
a5=n.ghw()
n=n.ght()
b.a.uniform4f(b.d,a1,a2,a5,n)
n=f.gb_()
if(!C.b.N(l,n)){n.a=l.length
l.push(n)}n=f.gb_()
b=n.gb9(n)
if(b){b=c.r
b.toString
a1=n.gb9(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.ghJ(n)
b.a.uniform1i(b.d,n)}}if(f.gdn()){n=f.gdd()
b=c.y
b.a.uniform1f(b.d,n)
n=f.gde()
b=c.z
b.a.uniform1f(b.d,n)
n=f.gdf()
b=c.Q
b.a.uniform1f(b.d,n)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.n)(b3),++g){o=b3[g].a
k=a3.h(0,o)
if(k==null)k=0
o=b2.a.cc.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.cx
if(b3.length>0){p=b4.db
a=p.ga1(p)
p=P.w
b1=new H.H([p,p])
for(p=b2.dx.x,o=p.length,g=0;g<p.length;p.length===o||(0,H.n)(p),++g){f=p[g]
e=f.gaq()
d=b1.h(0,e)
if(d==null)d=0
b1.m(0,e,d+1)
c=J.bV(b2.a.cf.h(0,e),d)
n=f.gi3(f)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.giu(f).iL()
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=a.be(f.gi3(f))
b=c.d
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gaQ(f)
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
f.gaE()
n=f.gcA()
b=c.f
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gcv(f)
b=c.r
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.giM()
b=c.x
b.a.uniform1f(b.d,n)
n=f.giN()
b=c.y
b.a.uniform1f(b.d,n)
f.gaE()
n=f.gaE()
if(!C.b.N(l,n)){n.a=l.length
l.push(n)}n=f.gaE()
b=n.gb9(n)
if(b){b=c.dx
b.toString
a1=n.d
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.a
b.a.uniform1i(b.d,n)}}f.gb_()
n=f.gec()
b=c.z
b.toString
a1=n.ghu(n)
a2=n.ghv(n)
a5=n.ghw()
n=n.ght()
b.a.uniform4f(b.d,a1,a2,a5,n)
n=f.gb_()
if(!C.b.N(l,n)){n.a=l.length
l.push(n)}n=f.gb_()
b=n.gb9(n)
if(b){b=c.dy
b.toString
a1=n.d
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.a
b.a.uniform1i(b.d,n)}}if(f.giv()){n=f.git()
b=c.Q
b.a.uniform1f(b.d,n)
n=f.gis()
b=c.ch
b.a.uniform1f(b.d,n)}if(f.gdn()){n=f.gdd()
b=c.cx
b.a.uniform1f(b.d,n)
n=f.gde()
b=c.cy
b.a.uniform1f(b.d,n)
n=f.gdf()
b=c.db
b.a.uniform1f(b.d,n)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.n)(b3),++g){o=b3[g].a
k=b1.h(0,o)
if(k==null)k=0
o=b2.a.ce.h(0,o)
o.a.uniform1i(o.d,k)}}}if(s.f.b){b2.ac(l,b2.Q.d)
b3=b2.a
p=b2.Q.d
b3.ai(b3.du,p)}if(s.dy){b3=b2.a
p=b4.Q
if(p==null){p=b4.db
p=b4.Q=p.ga1(p).dK(0)}b3=b3.id
b3.toString
b3.ah(p.ab(0,!0))}if(s.db){b2.ac(l,b2.ch)
b3=b2.a
p=b2.ch
b3.fZ(b3.dv,p)
if(s.r.b){b2.ac(l,b2.cx.d)
b3=b2.a
p=b2.cx.d
b3.ai(b3.dw,p)}b3=s.x
p=b3.b||!1
if(p){p=b2.a
o=b2.cy.ch
p=p.dz
p.a.uniform1f(p.d,o)}if(b3.b){b2.ac(l,b2.cy.d)
b3=b2.a
p=b2.cy.d
b3.ai(b3.dA,p)}}b3=s.y
p=b3.b||!1
if(p){if(b3.b){b2.ac(l,b2.db.d)
p=b2.a
o=b2.db.d
p.ai(p.dB,o)}q.enable(3042)
q.blendFunc(770,771)}for(j=0;j<l.length;++j){p=l[j]
if(!p.c&&p.d){p.c=!0
q.activeTexture(33984+p.a)
q.bindTexture(3553,p.b)}}p=b5.e
p.c_(b4)
p.aW(b4)
p.il(b4)
b3=b3.b||!1
if(b3)q.disable(3042)
for(j=0;j<l.length;++j){b3=l[j]
if(b3.c){b3.c=!1
q.activeTexture(33984+b3.a)
q.bindTexture(3553,null)}}b3=b2.a
b3.toString
q.useProgram(null)
b3.x.hs()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cR().b7}}
O.ha.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.cU(a,C.c.a4(b+3,4)*4))}}
O.hb.prototype={
$2:function(a,b){return J.cQ(a.a,b.a)}}
O.hc.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.d0(a,C.c.a4(b+3,4)*4))}}
O.hd.prototype={
$2:function(a,b){return J.cQ(a.a,b.a)}}
O.he.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.dq(a,C.c.a4(b+3,4)*4))}}
O.hf.prototype={
$2:function(a,b){return J.cQ(a.a,b.a)}}
O.hg.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.dw(a,C.c.a4(b+3,4)*4))}}
O.hh.prototype={
$2:function(a,b){return J.cQ(a.a,b.a)}}
O.h4.prototype={
ax:function(){var u,t=this
t.cH()
u=t.f
if(!(Math.abs(u-1)<$.C().a)){t.f=1
u=new D.E(t.b,u,1)
u.b=!0
t.a.a_(u)}}}
O.c9.prototype={
a_:function(a){return this.a.a_(a)},
bF:function(){return this.a_(null)},
ax:function(){},
fY:function(a){var u,t,s=this
if(!s.c.t(0,a)){u=s.c
u=u.b||!1
if(u){u=a.b||!1
t=!u}else t=!0
s.c=a
if(t)s.ax()
u=s.a
u.a=null
u.a_(null)}},
saY:function(a){var u,t,s=this
if(!s.c.b)s.fY(new A.a7(!1,!0,!1))
u=s.d
if(u!==a){if(u!=null)u.gB().D(0,s.gbi())
t=s.d
s.d=a
a.gB().n(0,s.gbi())
u=new D.E(s.b+".texture2D",t,s.d)
u.b=!0
s.a.a_(u)}}}
O.h5.prototype={}
O.ax.prototype={
ax:function(){var u,t,s=this
s.cH()
u=new V.a6(1,1,1)
if(!s.f.t(0,u)){t=s.f
s.f=u
u=new D.E(s.b+".color",t,u)
u.b=!0
s.a.a_(u)}}}
O.h7.prototype={}
O.h8.prototype={
ax:function(){var u,t=this
t.cI()
u=t.ch
if(!(Math.abs(u-1)<$.C().a)){t.ch=1
u=new D.E(t.b+".refraction",u,1)
u.b=!0
t.a.a_(u)}}}
O.h9.prototype={
ax:function(){var u,t=this
t.cI()
u=t.ch
if(!(Math.abs(u-100)<$.C().a)){t.ch=100
u=new D.E(t.b+".shininess",u,100)
u.b=!0
t.a.a_(u)}}}
O.dB.prototype={}
T.dC.prototype={}
T.ii.prototype={}
T.ij.prototype={
gB:function(){var u=this.y
return u==null?this.y=D.K():u}}
T.ik.prototype={
dM:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=document.createElement("img")
u.src=a
t=new T.ij()
t.a=0
t.b=q
t.d=t.c=!1
W.Y(u,"load",new T.il(this,t,u,!1,q,!1,!1),!1)
return t},
fV:function(a,b,c){var u,t,s,r
b=V.l9(b)
u=V.l9(a.width)
t=V.l9(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.kC()
s.width=u
s.height=t
r=C.i.e8(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.oO(r.getImageData(0,0,s.width,s.height))}}}
T.il.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.fV(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.Y.ig(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.hx()}++s.e}}
X.kB.prototype={}
X.fA.prototype={
gB:function(){var u=this.x
return u==null?this.x=D.K():u}}
X.dp.prototype={
gB:function(){var u=this.f
return u==null?this.f=D.K():u},
aI:function(a){var u=this.f
if(u!=null)u.F(a)},
ez:function(){return this.aI(null)},
sba:function(a){var u,t,s=this
if(!J.A(s.b,a)){u=s.b
if(u!=null)u.gB().D(0,s.gcM())
t=s.b
s.b=a
if(a!=null)a.gB().n(0,s.gcM())
u=new D.E("mover",t,s.b)
u.b=!0
s.aI(u)}}}
X.id.prototype={}
V.cY.prototype={
bh:function(a){this.b=new P.fF(C.P)
this.c=null
this.d=H.b([],[[P.p,W.ap]])},
M:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)l.push(H.b([],[W.ap]))
u=a.split("\n")
for(l=u.length,t=[W.ap],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else m.d.push(H.b([],t))
p=document.createElement("div")
p.className="codePart"
o=m.b.eJ(q,0,q.length)
n=o==null?q:o
C.N.ea(p,H.lb(n," ","&nbsp;"))
n=p.style
n.color=b
C.b.gar(m.d).push(p)}},
dV:function(a,b){var u,t,s,r=this
r.d=H.b([],[[P.p,W.ap]])
u=C.b.j(b,"\n")
t=r.c
if(t==null)t=r.c=r.bq()
for(t.toString,s=new H.o(u),s=new P.bK(t.cz(new H.be(s,s.gl(s))).a());s.v();)r.bv(s.gE(s))}}
V.kr.prototype={
$1:function(a){var u=C.d.e3(this.a.ghI(),2)
if(u!=="0.00")P.la(u+" fps")}}
V.fg.prototype={
bv:function(a){var u=this
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
bq:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=L.iq()
a1.d=a1.k(0,r)
u=a1.k(0,r).j(0,q)
t=K.v(new H.o("_"))
u.a.push(t)
t=K.O("a","z")
u.a.push(t)
t=K.O("A","Z")
u.a.push(t)
t=a1.k(0,q).j(0,q)
u=K.v(new H.o("_"))
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
t=K.v(new H.o("."))
u.a.push(t)
t=a1.k(0,o).j(0,n)
u=K.O("0","9")
t.a.push(u)
u=a1.k(0,n).j(0,n)
t=K.O("0","9")
u.a.push(t)
t=a1.k(0,r).j(0,m)
u=K.v(new H.o(l))
t.a.push(u)
u=a1.k(0,m).j(0,m)
t=K.v(new H.o(l))
u.a.push(t)
t=a1.k(0,r).j(0,k)
u=K.v(new H.o('"'))
t.a.push(u)
u=a1.k(0,k).j(0,j)
t=K.v(new H.o('"'))
u.a.push(t)
t=a1.k(0,k).j(0,i)
u=K.v(new H.o("\\"))
t.a.push(u)
u=a1.k(0,i).j(0,k)
t=K.v(new H.o('"'))
u.a.push(t)
a1.k(0,k).j(0,k).a.push(new K.aN())
t=a1.k(0,r).j(0,h)
u=K.v(new H.o("'"))
t.a.push(u)
u=a1.k(0,h).j(0,g)
t=K.v(new H.o("'"))
u.a.push(t)
t=a1.k(0,h).j(0,f)
u=K.v(new H.o("\\"))
t.a.push(u)
u=a1.k(0,f).j(0,h)
t=K.v(new H.o("'"))
u.a.push(t)
a1.k(0,h).j(0,h).a.push(new K.aN())
t=a1.k(0,r).j(0,e)
u=K.v(new H.o("/"))
t.a.push(u)
u=a1.k(0,e).j(0,d)
t=K.v(new H.o("/"))
u.a.push(t)
t=a1.k(0,d).j(0,c)
u=K.v(new H.o("\n"))
t.a.push(u)
u=a1.k(0,d).j(0,d)
t=new K.a9()
s=[K.bf]
t.a=H.b([],s)
u.a.push(t)
u=K.v(new H.o("\n"))
t.a.push(u)
u=a1.k(0,e).j(0,b)
t=K.v(new H.o("*"))
u.a.push(t)
t=a1.k(0,b).j(0,a)
u=K.v(new H.o("*"))
t.a.push(u)
u=a1.k(0,a).j(0,b)
t=new K.a9()
t.a=H.b([],s)
u.a.push(t)
u=K.v(new H.o("*"))
t.a.push(u)
u=a1.k(0,a).j(0,c)
t=K.v(new H.o("/"))
u.a.push(t)
t=a1.k(0,r).j(0,a0)
u=K.v(new H.o(" \n\t"))
t.a.push(u)
u=a1.k(0,a0).j(0,a0)
t=K.v(new H.o(" \n\t"))
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
t.aD(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aD(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aD(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.fC.prototype={
bv:function(a){var u=this
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
bq:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=L.iq()
e.d=e.k(0,r)
u=e.k(0,r).j(0,q)
t=K.v(new H.o("_"))
u.a.push(t)
t=K.O("a","z")
u.a.push(t)
t=K.O("A","Z")
u.a.push(t)
t=e.k(0,q).j(0,q)
u=K.v(new H.o("_"))
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
t=K.v(new H.o("."))
u.a.push(t)
t=e.k(0,o).j(0,n)
u=K.O("0","9")
t.a.push(u)
u=e.k(0,n).j(0,n)
t=K.O("0","9")
u.a.push(t)
t=e.k(0,r).j(0,m)
u=K.v(new H.o(l))
t.a.push(u)
u=e.k(0,m).j(0,m)
t=K.v(new H.o(l))
u.a.push(t)
t=e.k(0,r).j(0,k)
u=K.v(new H.o("/"))
t.a.push(u)
u=e.k(0,k).j(0,j)
t=K.v(new H.o("/"))
u.a.push(t)
e.k(0,k).j(0,m).a.push(new K.aN())
t=e.k(0,j).j(0,i)
u=K.v(new H.o("\n"))
t.a.push(u)
u=e.k(0,j).j(0,j)
t=new K.a9()
s=[K.bf]
t.a=H.b([],s)
u.a.push(t)
u=K.v(new H.o("\n"))
t.a.push(u)
u=e.k(0,r).j(0,h)
t=K.v(new H.o("#"))
u.a.push(t)
t=e.k(0,h).j(0,h)
u=new K.a9()
u.a=H.b([],s)
t.a.push(u)
t=K.v(new H.o("\n"))
u.a.push(t)
t=e.k(0,h).j(0,g)
u=K.v(new H.o("\n"))
t.a.push(u)
u=e.k(0,r).j(0,f)
t=K.v(new H.o(" \n\t"))
u.a.push(t)
t=e.k(0,f).j(0,f)
u=K.v(new H.o(" \n\t"))
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
u.aD(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aD(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aD(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return e}}
V.fD.prototype={
bv:function(a){var u=this,t="#111"
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
bq:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=L.iq()
l.d=l.k(0,s)
u=l.k(0,s).j(0,r)
t=K.v(new H.o("_"))
u.a.push(t)
t=K.O("a","z")
u.a.push(t)
t=K.O("A","Z")
u.a.push(t)
t=l.k(0,r).j(0,r)
u=K.v(new H.o("_"))
t.a.push(u)
u=K.O("0","9")
t.a.push(u)
u=K.O("a","z")
t.a.push(u)
u=K.O("A","Z")
t.a.push(u)
u=l.k(0,r).j(0,q)
t=K.v(new H.o("="))
u.a.push(t)
u.c=!0
u=l.k(0,s).j(0,p)
t=K.v(new H.o("</\\-!>="))
u.a.push(t)
t=l.k(0,p).j(0,p)
u=K.v(new H.o("</\\-!>="))
t.a.push(u)
u=l.k(0,s).j(0,o)
t=K.v(new H.o('"'))
u.a.push(t)
t=l.k(0,o).j(0,n)
u=K.v(new H.o('"'))
t.a.push(u)
u=l.k(0,o).j(0,"EscStr")
t=K.v(new H.o("\\"))
u.a.push(t)
t=l.k(0,"EscStr").j(0,o)
u=K.v(new H.o('"'))
t.a.push(u)
l.k(0,o).j(0,o).a.push(new K.aN())
l.k(0,s).j(0,m).a.push(new K.aN())
u=l.k(0,m).j(0,m)
t=new K.a9()
t.a=H.b([],[K.bf])
u.a.push(t)
u=K.v(new H.o('</\\-!>=_"'))
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
t.aD(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
t=l.k(0,q)
t.d=t.a.R(q)
t=l.k(0,m)
t.d=t.a.R(m)
return l}}
V.hC.prototype={
dV:function(a,b){this.d=H.b([],[[P.p,W.ap]])
this.M(C.b.j(b,"\n"),"#111")},
bv:function(a){},
bq:function(){return}}
V.hH.prototype={
bo:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
if(m.c==null)return
u=m.a
t=P.lK().gcs().h(0,H.e(u))
if(t==null)if(d){c.$0()
m.d7(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.lg(m.c).n(0,q)
o=W.n_("radio")
o.checked=s
o.name=u
W.Y(o,"change",new V.hI(m,o,c,b),!1)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.lg(m.c).n(0,r.createElement("br"))},
ao:function(a,b,c){return this.bo(a,b,c,!1)},
d7:function(a){var u,t,s=P.lK(),r=P.h,q=P.n8(s.gcs(),r,r)
q.m(0,this.a,a)
u=s.e_(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.jA([],[]).bA(""),"",t)}}
V.hI.prototype={
$1:function(a){var u=this
if(u.b.checked){u.c.$0()
u.a.d7(u.d)}}}
V.hY.prototype={
ep:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.Y(q,"scroll",new V.i_(o),!1)},
da:function(a){var u,t,s,r,q,p,o,n
this.h0()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b,r=C.b.hN(a),s.toString,r=new H.o(r),r=new P.bK(s.cz(new H.be(r,r.gl(r))).a());r.v();){s=r.gE(r)
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
if(H.pa(s,"|",0)){p=s.split("|")
o=u.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.d(p,1)
o.href=p[1]
o.textContent=p[0]
t.appendChild(o)}else{n=P.eB(C.x,s,C.e,!1)
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
e7:function(a){var u,t,s,r=new V.fg("dart")
r.bh("dart")
u=new V.fC("glsl")
u.bh("glsl")
t=new V.fD("html")
t.bh("html")
s=C.b.hE(H.b([r,u,t],[V.cY]),new V.i0(a))
if(s!=null)return s
r=new V.hC("plain")
r.bh("plain")
return r},
d9:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.b([],[P.w])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(J.cL(s).a3(s,"+")){b0[t]=C.a.a6(s,1)
a6.push(1)
u=!0}else if(C.a.a3(s,"-")){b0[t]=C.a.a6(s,1)
a6.push(-1)
u=!0}else a6.push(0)}r=this.e7(a8)
r.dV(0,b0)
q=document
p=q.createElement("div")
p.className="codeTableScroll"
o=q.createElement("table")
o.className="codeTable"
p.appendChild(o)
this.a.appendChild(p)
n=P.eB(C.x,a7,C.e,!1)
m=q.createElement("tr")
m.className="headerRow"
l=q.createElement("td")
l.className="headerCell"
l.colSpan=u?3:2
k=q.createElement("div")
k.className="tableHeader"
k.id=n
j=W.li()
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
for(g=s.length,a=0;a<s.length;s.length===g||(0,H.n)(s),++a)b.appendChild(s[a])
f.appendChild(e)
f.appendChild(d)
f.appendChild(b)
o.appendChild(f)}else for(g=r.d,a0=g.length,a1=a9,a=0;a<g.length;g.length===a0||(0,H.n)(g),++a){s=g[a]
f=q.createElement("tr")
f.className=a3
e=q.createElement("td")
e.className=a4;++a1
e.textContent=""+a1
d=q.createElement("td")
d.className=a5
for(a2=C.b.gT(s);a2.v();)d.appendChild(a2.gE(a2))
f.appendChild(e)
f.appendChild(d)
o.appendChild(f)}},
h9:function(a){var u,t,s,r,q,p="auto",o=document,n=o.createElement("table")
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
h0:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=L.iq()
u.d=u.k(0,q)
t=u.k(0,q).j(0,p)
s=K.v(new H.o("*"))
t.a.push(s)
t.c=!0
t=u.k(0,p).j(0,p)
s=new K.a9()
r=[K.bf]
s.a=H.b([],r)
t.a.push(s)
t=K.v(new H.o("*"))
s.a.push(t)
t=u.k(0,p).j(0,"BoldEnd")
s=K.v(new H.o("*"))
t.a.push(s)
t.c=!0
t=u.k(0,q).j(0,o)
s=K.v(new H.o("_"))
t.a.push(s)
t.c=!0
t=u.k(0,o).j(0,o)
s=new K.a9()
s.a=H.b([],r)
t.a.push(s)
t=K.v(new H.o("_"))
s.a.push(t)
t=u.k(0,o).j(0,n)
s=K.v(new H.o("_"))
t.a.push(s)
t.c=!0
t=u.k(0,q).j(0,m)
s=K.v(new H.o("`"))
t.a.push(s)
t.c=!0
t=u.k(0,m).j(0,m)
s=new K.a9()
s.a=H.b([],r)
t.a.push(s)
t=K.v(new H.o("`"))
s.a.push(t)
t=u.k(0,m).j(0,"CodeEnd")
s=K.v(new H.o("`"))
t.a.push(s)
t.c=!0
t=u.k(0,q).j(0,l)
s=K.v(new H.o("["))
t.a.push(s)
t.c=!0
t=u.k(0,l).j(0,k)
s=K.v(new H.o("|"))
t.a.push(s)
s=u.k(0,l).j(0,j)
t=K.v(new H.o("]"))
s.a.push(t)
s.c=!0
s=u.k(0,l).j(0,l)
t=new K.a9()
t.a=H.b([],r)
s.a.push(t)
s=K.v(new H.o("|]"))
t.a.push(s)
s=u.k(0,k).j(0,j)
t=K.v(new H.o("]"))
s.a.push(t)
s.c=!0
s=u.k(0,k).j(0,k)
t=new K.a9()
t.a=H.b([],r)
s.a.push(t)
s=K.v(new H.o("|]"))
t.a.push(s)
u.k(0,q).j(0,i).a.push(new K.aN())
s=u.k(0,i).j(0,i)
t=new K.a9()
t.a=H.b([],r)
s.a.push(t)
s=K.v(new H.o("*_`["))
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
V.i_.prototype={
$1:function(a){P.lG(C.n,new V.hZ(this.a))}}
V.hZ.prototype={
$0:function(){var u=C.d.ak(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
V.i0.prototype={
$1:function(a){return a.a===this.a}}
M.kg.prototype={
$0:function(){this.a.sa9(0,F.l4(1,null,null,1))}}
M.kh.prototype={
$0:function(){this.a.sa9(0,F.l4(8,null,null,8))}}
M.ki.prototype={
$0:function(){this.a.sa9(0,F.m8(!0,40,1))}}
M.kj.prototype={
$0:function(){this.a.sa9(0,F.m8(!1,40,0))}}
M.kk.prototype={
$0:function(){this.a.sa9(0,F.p3(10,20))}}
M.kl.prototype={
$0:function(){var u=F.hU(),t=Math.sqrt(5)/2+0.5,s=F.a4(u,new V.y(-1,t,0)),r=F.a4(u,new V.y(1,t,0)),q=-t,p=F.a4(u,new V.y(-1,q,0)),o=F.a4(u,new V.y(1,q,0)),n=F.a4(u,new V.y(0,-1,q)),m=F.a4(u,new V.y(0,1,q)),l=F.a4(u,new V.y(0,-1,t)),k=F.a4(u,new V.y(0,1,t)),j=F.a4(u,new V.y(t,0,1)),i=F.a4(u,new V.y(t,0,-1)),h=F.a4(u,new V.y(q,0,1)),g=F.a4(u,new V.y(q,0,-1))
F.P(u,s,g,m,2)
F.P(u,s,m,r,2)
F.P(u,s,r,k,2)
F.P(u,s,k,h,2)
F.P(u,s,h,g,2)
F.P(u,r,m,i,2)
F.P(u,m,g,n,2)
F.P(u,g,h,p,2)
F.P(u,h,k,l,2)
F.P(u,k,r,j,2)
F.P(u,o,i,n,2)
F.P(u,o,n,p,2)
F.P(u,o,p,l,2)
F.P(u,o,l,j,2)
F.P(u,o,j,i,2)
F.P(u,n,i,m,2)
F.P(u,p,n,g,2)
F.P(u,l,p,h,2)
F.P(u,j,l,k,2)
F.P(u,i,j,r,2)
u.dN(new F.cu(),new F.j_())
this.a.sa9(0,u)}}
M.km.prototype={
$0:function(){this.a.sa9(0,F.mj(6,6))}}
M.kn.prototype={
$0:function(){this.a.sa9(0,F.pd())}}
M.ko.prototype={
$0:function(){this.a.sa9(0,F.p2())}}
M.kp.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.a,r=[P.h]
u.d9("Vertex Shader","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
t=t.a
u.d9("Fragment Shader","glsl",0,H.b((t==null?null:t.d).split("\n"),r))}};(function aliases(){var u=J.a.prototype
u.eg=u.i
u=J.da.prototype
u.ei=u.i
u=P.j.prototype
u.eh=u.bB
u=W.R.prototype
u.bD=u.ae
u=W.ej.prototype
u.ej=u.ap
u=K.d6.prototype
u.ef=u.aB
u.cG=u.i
u=O.c9.prototype
u.cH=u.ax
u=O.ax.prototype
u.cI=u.ax})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installStaticTearOff,q=hunkHelpers.installInstanceTearOff,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u,n=hunkHelpers._instance_1u,m=hunkHelpers._instance_0i
u(J,"od","n3",20)
t(P,"oI","nM",8)
t(P,"oJ","nN",8)
t(P,"oK","nO",8)
s(P,"m7","oG",10)
r(W,"oX",4,null,["$4"],["nP"],15,0)
r(W,"oY",4,null,["$4"],["nQ"],15,0)
var l
q(l=E.ba.prototype,"gdT",0,0,null,["$1","$0"],["dU","hW"],0,0)
q(l,"gdR",0,0,null,["$1","$0"],["dS","hV"],0,0)
q(l,"gdP",0,0,null,["$1","$0"],["dQ","hS"],0,0)
p(l,"ghQ","hR",4)
p(l,"ghT","hU",4)
q(l=E.dD.prototype,"gcJ",0,0,null,["$1","$0"],["cL","cK"],0,0)
o(l,"gia","e0",10)
n(l=X.dM.prototype,"gff","fg",5)
n(l,"gf3","f4",5)
n(l,"gf9","fa",2)
n(l,"gfj","fk",11)
n(l,"gfh","fi",11)
n(l,"gfn","fo",2)
n(l,"gfs","ft",2)
n(l,"gfd","fe",2)
n(l,"gfp","fq",2)
n(l,"gfb","fc",2)
n(l,"gfu","fv",18)
n(l,"gfw","fz",5)
n(l,"gfL","fM",6)
n(l,"gfH","fI",6)
n(l,"gfJ","fK",6)
q(D.bu.prototype,"ges",0,0,null,["$1","$0"],["au","eu"],0,0)
q(l=D.dc.prototype,"gcZ",0,0,null,["$1","$0"],["d_","fl"],0,0)
n(l,"gfB","fC",19)
p(l,"geY","eZ",12)
p(l,"gfF","fG",12)
m(V.I.prototype,"gl","b8",7)
m(V.y.prototype,"gl","b8",7)
m(V.b_.prototype,"gl","b8",7)
q(l=U.c2.prototype,"gaL",0,0,null,["$1","$0"],["S","a7"],0,0)
p(l,"geW","eX",13)
p(l,"gfD","fE",13)
q(l=U.dN.prototype,"gaL",0,0,null,["$1","$0"],["S","a7"],0,0)
n(l,"gbN","bO",1)
n(l,"gbP","bQ",1)
n(l,"gbR","bS",1)
q(l=U.dO.prototype,"gaL",0,0,null,["$1","$0"],["S","a7"],0,0)
n(l,"gbN","bO",1)
n(l,"gbP","bQ",1)
n(l,"gbR","bS",1)
n(l,"geP","eQ",1)
n(l,"geR","eS",1)
n(l,"gh7","h8",1)
n(l,"gh5","h6",1)
n(l,"gh3","h4",1)
n(U.dP.prototype,"geU","eV",1)
q(l=M.d3.prototype,"gam",0,0,null,["$1","$0"],["av","ev"],0,0)
p(l,"gf5","f6",4)
p(l,"gf7","f8",4)
q(l=O.df.prototype,"gbi",0,0,null,["$1","$0"],["a_","bF"],0,0)
q(l,"gfT",0,0,null,["$1","$0"],["d0","fU"],0,0)
p(l,"gf_","f0",14)
p(l,"gf1","f2",14)
q(O.c9.prototype,"gbi",0,0,null,["$1","$0"],["a_","bF"],0,0)
q(X.dp.prototype,"gcM",0,0,null,["$1","$0"],["aI","ez"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.a2,null)
s(P.a2,[H.kL,J.a,J.ad,P.e6,P.j,H.be,P.fK,H.d4,H.iI,H.f8,H.iv,P.bv,H.bY,H.eo,P.a1,H.fS,H.fU,H.fM,P.eu,P.bJ,P.bK,P.dR,P.dz,P.i9,P.dE,P.jS,P.ju,P.jo,P.e5,P.x,P.jK,P.h0,P.f5,P.fG,P.jQ,P.jP,P.aK,P.ae,P.ac,P.b9,P.hA,P.dx,P.dZ,P.fz,P.fB,P.p,P.S,P.bh,P.h,P.T,P.bL,P.iK,P.jx,W.fc,W.cx,W.L,W.dm,W.ej,W.jE,W.d5,W.aV,W.jt,W.eC,P.jz,P.ez,P.jp,P.bF,K.aN,K.d6,K.bf,K.hJ,K.hS,L.dy,L.dF,L.dG,L.ip,O.b8,O.ca,E.f1,E.ba,E.hK,E.dD,Z.dQ,Z.j7,Z.cW,Z.bx,Z.b0,D.f4,D.bw,D.Z,X.cX,X.db,X.fP,X.fY,X.am,X.ho,X.ir,X.dM,D.eZ,D.bu,D.a8,D.hE,D.i4,V.a6,V.ak,V.fq,V.dg,V.aT,V.X,V.N,V.bi,V.ds,V.I,V.y,V.b_,U.dN,U.dO,U.dP,M.d3,A.cT,A.eU,A.a7,A.cU,A.d0,A.dq,A.dw,A.h6,A.co,A.cp,A.cr,A.cs,A.dJ,A.iD,F.aQ,F.ft,F.c6,F.fR,F.cg,F.hT,F.hV,F.hW,F.hX,F.bl,F.iW,F.iX,F.j0,F.j1,F.j2,F.j3,O.dB,O.c9,O.h7,T.ik,X.kB,X.id,X.dp,V.cY,V.hH,V.hY])
s(J.a,[J.fL,J.d9,J.da,J.bb,J.c5,J.bc,H.cd,H.bg,W.f,W.eR,W.br,W.av,W.G,W.dT,W.al,W.fh,W.fi,W.dV,W.d2,W.dX,W.fk,W.i,W.e_,W.aw,W.fE,W.e1,W.aR,W.fX,W.hi,W.e7,W.e8,W.az,W.e9,W.ec,W.aB,W.eg,W.ei,W.aE,W.ek,W.aF,W.ep,W.ar,W.es,W.io,W.aH,W.ev,W.it,W.iP,W.eD,W.eF,W.eH,W.eJ,W.eL,P.aS,P.e3,P.aW,P.ee,P.hG,P.eq,P.aZ,P.ex,P.eV,P.dS,P.dt,P.em])
s(J.da,[J.hB,J.bH,J.bd])
t(J.kK,J.bb)
s(J.c5,[J.d8,J.d7])
t(P.fW,P.e6)
s(P.fW,[H.dK,W.je,W.a3,P.fv])
t(H.o,H.dK)
s(P.j,[H.t,H.c8,H.cv,P.fI])
s(H.t,[H.dd,H.fT])
t(H.fn,H.c8)
s(P.fK,[H.h1,H.j8])
t(H.h2,H.dd)
t(H.f9,H.f8)
s(P.bv,[H.hx,H.fO,H.iH,H.f3,H.hQ,P.dn,P.ao,P.iJ,P.iF,P.ck,P.f7,P.ff])
s(H.bY,[H.kx,H.ie,H.fN,H.ka,H.kb,H.kc,P.ja,P.j9,P.jb,P.jc,P.jJ,P.jI,P.k0,P.jr,P.js,P.fV,P.h_,P.fl,P.fm,P.iO,P.iL,P.iM,P.iN,P.jL,P.jM,P.jO,P.jN,P.jW,P.jV,P.jX,P.jY,W.fo,W.hk,W.hm,W.hP,W.i8,W.jj,W.hv,W.hu,W.jv,W.jw,W.jH,W.jR,P.jB,P.jC,P.k1,P.fw,P.fx,P.eX,E.hL,E.hM,E.hN,E.im,D.fr,D.fs,F.jT,F.k2,F.k4,F.k5,F.k6,F.kf,F.ks,F.kt,F.kw,F.ke,F.k3,F.j5,F.j4,F.iY,F.iZ,O.ha,O.hb,O.hc,O.hd,O.he,O.hf,O.hg,O.hh,T.il,V.kr,V.hI,V.i_,V.hZ,V.i0,M.kg,M.kh,M.ki,M.kj,M.kk,M.kl,M.km,M.kn,M.ko,M.kp])
s(H.ie,[H.i6,H.bW])
t(P.fZ,P.a1)
s(P.fZ,[H.H,W.jd])
t(H.di,H.bg)
s(H.di,[H.cz,H.cB])
t(H.cA,H.cz)
t(H.ce,H.cA)
t(H.cC,H.cB)
t(H.dj,H.cC)
s(H.dj,[H.hp,H.hq,H.hr,H.hs,H.ht,H.dk,H.cf])
t(P.jF,P.fI)
t(P.jq,P.jS)
t(P.jn,P.ju)
t(P.eA,P.h0)
t(P.dL,P.eA)
s(P.f5,[P.f_,P.fp])
t(P.fa,P.i9)
s(P.fa,[P.f0,P.fF,P.iS,P.iR])
t(P.iQ,P.fp)
s(P.ac,[P.J,P.w])
s(P.ao,[P.bD,P.fH])
t(P.jg,P.bL)
s(W.f,[W.D,W.fu,W.cb,W.aD,W.cD,W.aG,W.as,W.cF,W.j6,W.cw,P.eY,P.bq])
s(W.D,[W.R,W.b7])
s(W.R,[W.q,P.k])
s(W.q,[W.eS,W.eT,W.bs,W.bt,W.ap,W.fy,W.c4,W.hR,W.dA,W.ib,W.ic,W.cm])
t(W.fb,W.av)
t(W.bZ,W.dT)
s(W.al,[W.fd,W.fe])
t(W.dW,W.dV)
t(W.d1,W.dW)
t(W.dY,W.dX)
t(W.fj,W.dY)
t(W.aq,W.br)
t(W.e0,W.e_)
t(W.c1,W.e0)
t(W.e2,W.e1)
t(W.c3,W.e2)
t(W.bj,W.i)
s(W.bj,[W.bA,W.aA,W.bE])
t(W.hj,W.e7)
t(W.hl,W.e8)
t(W.ea,W.e9)
t(W.hn,W.ea)
t(W.ed,W.ec)
t(W.dl,W.ed)
t(W.eh,W.eg)
t(W.hD,W.eh)
t(W.hO,W.ei)
t(W.cE,W.cD)
t(W.i2,W.cE)
t(W.el,W.ek)
t(W.i3,W.el)
t(W.i7,W.ep)
t(W.et,W.es)
t(W.ig,W.et)
t(W.cG,W.cF)
t(W.ih,W.cG)
t(W.ew,W.ev)
t(W.is,W.ew)
t(W.bm,W.aA)
t(W.eE,W.eD)
t(W.jf,W.eE)
t(W.dU,W.d2)
t(W.eG,W.eF)
t(W.jk,W.eG)
t(W.eI,W.eH)
t(W.eb,W.eI)
t(W.eK,W.eJ)
t(W.jy,W.eK)
t(W.eM,W.eL)
t(W.jD,W.eM)
t(W.jh,W.jd)
t(W.ji,P.dz)
t(W.jG,W.ej)
t(P.jA,P.jz)
t(P.aa,P.jp)
t(P.e4,P.e3)
t(P.fQ,P.e4)
t(P.ef,P.ee)
t(P.hy,P.ef)
t(P.cj,P.k)
t(P.er,P.eq)
t(P.ia,P.er)
t(P.ey,P.ex)
t(P.iu,P.ey)
t(P.eW,P.dS)
t(P.hz,P.bq)
t(P.en,P.em)
t(P.i5,P.en)
s(K.d6,[K.a9,L.dI])
s(E.f1,[Z.cV,A.du,T.dC])
s(D.Z,[D.by,D.bz,D.E,X.hF])
s(X.hF,[X.de,X.aU,X.cc,X.dH])
s(O.b8,[D.dc,U.c2])
s(D.f4,[U.f6,U.af])
t(U.cZ,U.af)
t(A.h3,A.du)
s(A.dJ,[A.bk,A.iA,A.iB,A.iC,A.iy,A.W,A.iz,A.V,A.cn,A.iE,A.cq,A.ag,A.a0,A.bG])
t(F.i1,F.ft)
t(F.ix,F.fR)
t(F.cu,F.j1)
s(F.j2,[F.j_,F.hw])
t(O.df,O.dB)
s(O.c9,[O.h4,O.h5,O.ax])
s(O.ax,[O.h8,O.h9])
t(T.ii,T.dC)
t(T.ij,T.ii)
t(X.fA,X.id)
s(V.cY,[V.fg,V.fC,V.fD,V.hC])
u(H.dK,H.iI)
u(H.cz,P.x)
u(H.cA,H.d4)
u(H.cB,P.x)
u(H.cC,H.d4)
u(P.e6,P.x)
u(P.eA,P.jK)
u(W.dT,W.fc)
u(W.dV,P.x)
u(W.dW,W.L)
u(W.dX,P.x)
u(W.dY,W.L)
u(W.e_,P.x)
u(W.e0,W.L)
u(W.e1,P.x)
u(W.e2,W.L)
u(W.e7,P.a1)
u(W.e8,P.a1)
u(W.e9,P.x)
u(W.ea,W.L)
u(W.ec,P.x)
u(W.ed,W.L)
u(W.eg,P.x)
u(W.eh,W.L)
u(W.ei,P.a1)
u(W.cD,P.x)
u(W.cE,W.L)
u(W.ek,P.x)
u(W.el,W.L)
u(W.ep,P.a1)
u(W.es,P.x)
u(W.et,W.L)
u(W.cF,P.x)
u(W.cG,W.L)
u(W.ev,P.x)
u(W.ew,W.L)
u(W.eD,P.x)
u(W.eE,W.L)
u(W.eF,P.x)
u(W.eG,W.L)
u(W.eH,P.x)
u(W.eI,W.L)
u(W.eJ,P.x)
u(W.eK,W.L)
u(W.eL,P.x)
u(W.eM,W.L)
u(P.e3,P.x)
u(P.e4,W.L)
u(P.ee,P.x)
u(P.ef,W.L)
u(P.eq,P.x)
u(P.er,W.L)
u(P.ex,P.x)
u(P.ey,W.L)
u(P.dS,P.a1)
u(P.em,P.x)
u(P.en,W.L)})()
var v={mangledGlobalNames:{w:"int",J:"double",ac:"num",h:"String",aK:"bool",bh:"Null",p:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.Z]},{func:1,ret:-1,args:[D.Z]},{func:1,ret:-1,args:[W.aA]},{func:1,ret:P.bh,args:[,,]},{func:1,ret:-1,args:[P.w,[P.j,E.ba]]},{func:1,ret:-1,args:[W.i]},{func:1,ret:-1,args:[W.bE]},{func:1,ret:P.J},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bA]},{func:1,ret:-1,args:[P.w,[P.j,D.a8]]},{func:1,ret:-1,args:[P.w,[P.j,U.af]]},{func:1,ret:-1,args:[P.w,[P.j,V.aT]]},{func:1,ret:P.aK,args:[W.R,P.h,P.h,W.cx]},{func:1,ret:P.bh,args:[,]},{func:1,ret:P.bF,args:[,,]},{func:1,ret:-1,args:[W.bm]},{func:1,ret:P.aK,args:[[P.j,D.a8]]},{func:1,ret:P.w,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.r=W.bs.prototype
C.i=W.bt.prototype
C.N=W.ap.prototype
C.Q=J.a.prototype
C.b=J.bb.prototype
C.R=J.d7.prototype
C.c=J.d8.prototype
C.j=J.d9.prototype
C.d=J.c5.prototype
C.a=J.bc.prototype
C.S=J.bd.prototype
C.A=J.hB.prototype
C.Y=P.dt.prototype
C.B=W.dA.prototype
C.q=J.bH.prototype
C.C=W.bm.prototype
C.D=W.cw.prototype
C.a_=new P.f0()
C.E=new P.f_()
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

C.L=new P.hA()
C.e=new P.iQ()
C.M=new P.iS()
C.f=new P.jq()
C.n=new P.b9(0)
C.O=new P.b9(5e6)
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
C.X=new H.f9(0,{},C.w,[P.h,P.h])
C.Z=new P.bJ(null,2)})();(function staticFields(){$.au=0
$.bX=null
$.lk=null
$.md=null
$.m6=null
$.mh=null
$.k7=null
$.kd=null
$.l7=null
$.bO=null
$.cJ=null
$.cK=null
$.l1=!1
$.at=C.f
$.ab=[]
$.aP=null
$.kG=null
$.lq=null
$.lp=null
$.cy=P.kN(P.h,P.fB)
$.lu=null
$.lx=null
$.aC=null
$.lC=null
$.lN=null
$.lQ=null
$.lP=null
$.iT=null
$.iU=null
$.iV=null
$.lO=null
$.lS=null
$.lw=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pi","mm",function(){return H.mc("_$dart_dartClosure")})
u($,"pj","lc",function(){return H.mc("_$dart_js")})
u($,"pk","mn",function(){return H.aI(H.iw({
toString:function(){return"$receiver$"}}))})
u($,"pl","mo",function(){return H.aI(H.iw({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"pm","mp",function(){return H.aI(H.iw(null))})
u($,"pn","mq",function(){return H.aI(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pq","mt",function(){return H.aI(H.iw(void 0))})
u($,"pr","mu",function(){return H.aI(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pp","ms",function(){return H.aI(H.lI(null))})
u($,"po","mr",function(){return H.aI(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"pt","mw",function(){return H.aI(H.lI(void 0))})
u($,"ps","mv",function(){return H.aI(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"pH","ld",function(){return P.nL()})
u($,"pu","mx",function(){return P.nH()})
u($,"pI","mB",function(){return H.nf(H.bN(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.w])))})
u($,"pL","mD",function(){return P.nt("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"pM","mE",function(){return P.ob()})
u($,"pJ","mC",function(){return P.ls(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)})
u($,"pB","mA",function(){return Z.an(0)})
u($,"pv","my",function(){return Z.an(511)})
u($,"pD","b5",function(){return Z.an(1)})
u($,"pC","b4",function(){return Z.an(2)})
u($,"px","b3",function(){return Z.an(4)})
u($,"pE","b6",function(){return Z.an(8)})
u($,"pF","bp",function(){return Z.an(16)})
u($,"py","cO",function(){return Z.an(32)})
u($,"pz","cP",function(){return Z.an(64)})
u($,"pA","mz",function(){return Z.an(96)})
u($,"pG","bU",function(){return Z.an(128)})
u($,"pw","b2",function(){return Z.an(256)})
u($,"ph","ml",function(){return new V.fq(1e-9)})
u($,"pg","C",function(){return $.ml()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cd,DataView:H.bg,ArrayBufferView:H.bg,Float32Array:H.ce,Float64Array:H.ce,Int16Array:H.hp,Int32Array:H.hq,Int8Array:H.hr,Uint16Array:H.hs,Uint32Array:H.ht,Uint8ClampedArray:H.dk,CanvasPixelArray:H.dk,Uint8Array:H.cf,HTMLAudioElement:W.q,HTMLBRElement:W.q,HTMLBaseElement:W.q,HTMLButtonElement:W.q,HTMLContentElement:W.q,HTMLDListElement:W.q,HTMLDataElement:W.q,HTMLDataListElement:W.q,HTMLDetailsElement:W.q,HTMLDialogElement:W.q,HTMLEmbedElement:W.q,HTMLFieldSetElement:W.q,HTMLHRElement:W.q,HTMLHeadElement:W.q,HTMLHeadingElement:W.q,HTMLHtmlElement:W.q,HTMLIFrameElement:W.q,HTMLInputElement:W.q,HTMLLIElement:W.q,HTMLLabelElement:W.q,HTMLLegendElement:W.q,HTMLLinkElement:W.q,HTMLMapElement:W.q,HTMLMediaElement:W.q,HTMLMenuElement:W.q,HTMLMetaElement:W.q,HTMLMeterElement:W.q,HTMLModElement:W.q,HTMLOListElement:W.q,HTMLObjectElement:W.q,HTMLOptGroupElement:W.q,HTMLOptionElement:W.q,HTMLOutputElement:W.q,HTMLParagraphElement:W.q,HTMLParamElement:W.q,HTMLPictureElement:W.q,HTMLPreElement:W.q,HTMLProgressElement:W.q,HTMLQuoteElement:W.q,HTMLScriptElement:W.q,HTMLShadowElement:W.q,HTMLSlotElement:W.q,HTMLSourceElement:W.q,HTMLSpanElement:W.q,HTMLStyleElement:W.q,HTMLTableCaptionElement:W.q,HTMLTableCellElement:W.q,HTMLTableDataCellElement:W.q,HTMLTableHeaderCellElement:W.q,HTMLTableColElement:W.q,HTMLTextAreaElement:W.q,HTMLTimeElement:W.q,HTMLTitleElement:W.q,HTMLTrackElement:W.q,HTMLUListElement:W.q,HTMLUnknownElement:W.q,HTMLVideoElement:W.q,HTMLDirectoryElement:W.q,HTMLFontElement:W.q,HTMLFrameElement:W.q,HTMLFrameSetElement:W.q,HTMLMarqueeElement:W.q,HTMLElement:W.q,AccessibleNodeList:W.eR,HTMLAnchorElement:W.eS,HTMLAreaElement:W.eT,Blob:W.br,HTMLBodyElement:W.bs,HTMLCanvasElement:W.bt,CDATASection:W.b7,CharacterData:W.b7,Comment:W.b7,ProcessingInstruction:W.b7,Text:W.b7,CSSPerspective:W.fb,CSSCharsetRule:W.G,CSSConditionRule:W.G,CSSFontFaceRule:W.G,CSSGroupingRule:W.G,CSSImportRule:W.G,CSSKeyframeRule:W.G,MozCSSKeyframeRule:W.G,WebKitCSSKeyframeRule:W.G,CSSKeyframesRule:W.G,MozCSSKeyframesRule:W.G,WebKitCSSKeyframesRule:W.G,CSSMediaRule:W.G,CSSNamespaceRule:W.G,CSSPageRule:W.G,CSSRule:W.G,CSSStyleRule:W.G,CSSSupportsRule:W.G,CSSViewportRule:W.G,CSSStyleDeclaration:W.bZ,MSStyleCSSProperties:W.bZ,CSS2Properties:W.bZ,CSSImageValue:W.al,CSSKeywordValue:W.al,CSSNumericValue:W.al,CSSPositionValue:W.al,CSSResourceValue:W.al,CSSUnitValue:W.al,CSSURLImageValue:W.al,CSSStyleValue:W.al,CSSMatrixComponent:W.av,CSSRotation:W.av,CSSScale:W.av,CSSSkew:W.av,CSSTranslation:W.av,CSSTransformComponent:W.av,CSSTransformValue:W.fd,CSSUnparsedValue:W.fe,DataTransferItemList:W.fh,HTMLDivElement:W.ap,DOMException:W.fi,ClientRectList:W.d1,DOMRectList:W.d1,DOMRectReadOnly:W.d2,DOMStringList:W.fj,DOMTokenList:W.fk,Element:W.R,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.aq,FileList:W.c1,FileWriter:W.fu,HTMLFormElement:W.fy,Gamepad:W.aw,History:W.fE,HTMLCollection:W.c3,HTMLFormControlsCollection:W.c3,HTMLOptionsCollection:W.c3,ImageData:W.aR,HTMLImageElement:W.c4,KeyboardEvent:W.bA,Location:W.fX,MediaList:W.hi,MessagePort:W.cb,MIDIInputMap:W.hj,MIDIOutputMap:W.hl,MimeType:W.az,MimeTypeArray:W.hn,PointerEvent:W.aA,MouseEvent:W.aA,DragEvent:W.aA,Document:W.D,DocumentFragment:W.D,HTMLDocument:W.D,ShadowRoot:W.D,XMLDocument:W.D,Attr:W.D,DocumentType:W.D,Node:W.D,NodeList:W.dl,RadioNodeList:W.dl,Plugin:W.aB,PluginArray:W.hD,RTCStatsReport:W.hO,HTMLSelectElement:W.hR,SourceBuffer:W.aD,SourceBufferList:W.i2,SpeechGrammar:W.aE,SpeechGrammarList:W.i3,SpeechRecognitionResult:W.aF,Storage:W.i7,CSSStyleSheet:W.ar,StyleSheet:W.ar,HTMLTableElement:W.dA,HTMLTableRowElement:W.ib,HTMLTableSectionElement:W.ic,HTMLTemplateElement:W.cm,TextTrack:W.aG,TextTrackCue:W.as,VTTCue:W.as,TextTrackCueList:W.ig,TextTrackList:W.ih,TimeRanges:W.io,Touch:W.aH,TouchEvent:W.bE,TouchList:W.is,TrackDefaultList:W.it,CompositionEvent:W.bj,FocusEvent:W.bj,TextEvent:W.bj,UIEvent:W.bj,URL:W.iP,VideoTrackList:W.j6,WheelEvent:W.bm,Window:W.cw,DOMWindow:W.cw,CSSRuleList:W.jf,ClientRect:W.dU,DOMRect:W.dU,GamepadList:W.jk,NamedNodeMap:W.eb,MozNamedAttrMap:W.eb,SpeechRecognitionResultList:W.jy,StyleSheetList:W.jD,SVGLength:P.aS,SVGLengthList:P.fQ,SVGNumber:P.aW,SVGNumberList:P.hy,SVGPointList:P.hG,SVGScriptElement:P.cj,SVGStringList:P.ia,SVGAElement:P.k,SVGAnimateElement:P.k,SVGAnimateMotionElement:P.k,SVGAnimateTransformElement:P.k,SVGAnimationElement:P.k,SVGCircleElement:P.k,SVGClipPathElement:P.k,SVGDefsElement:P.k,SVGDescElement:P.k,SVGDiscardElement:P.k,SVGEllipseElement:P.k,SVGFEBlendElement:P.k,SVGFEColorMatrixElement:P.k,SVGFEComponentTransferElement:P.k,SVGFECompositeElement:P.k,SVGFEConvolveMatrixElement:P.k,SVGFEDiffuseLightingElement:P.k,SVGFEDisplacementMapElement:P.k,SVGFEDistantLightElement:P.k,SVGFEFloodElement:P.k,SVGFEFuncAElement:P.k,SVGFEFuncBElement:P.k,SVGFEFuncGElement:P.k,SVGFEFuncRElement:P.k,SVGFEGaussianBlurElement:P.k,SVGFEImageElement:P.k,SVGFEMergeElement:P.k,SVGFEMergeNodeElement:P.k,SVGFEMorphologyElement:P.k,SVGFEOffsetElement:P.k,SVGFEPointLightElement:P.k,SVGFESpecularLightingElement:P.k,SVGFESpotLightElement:P.k,SVGFETileElement:P.k,SVGFETurbulenceElement:P.k,SVGFilterElement:P.k,SVGForeignObjectElement:P.k,SVGGElement:P.k,SVGGeometryElement:P.k,SVGGraphicsElement:P.k,SVGImageElement:P.k,SVGLineElement:P.k,SVGLinearGradientElement:P.k,SVGMarkerElement:P.k,SVGMaskElement:P.k,SVGMetadataElement:P.k,SVGPathElement:P.k,SVGPatternElement:P.k,SVGPolygonElement:P.k,SVGPolylineElement:P.k,SVGRadialGradientElement:P.k,SVGRectElement:P.k,SVGSetElement:P.k,SVGStopElement:P.k,SVGStyleElement:P.k,SVGSVGElement:P.k,SVGSwitchElement:P.k,SVGSymbolElement:P.k,SVGTSpanElement:P.k,SVGTextContentElement:P.k,SVGTextElement:P.k,SVGTextPathElement:P.k,SVGTextPositioningElement:P.k,SVGTitleElement:P.k,SVGUseElement:P.k,SVGViewElement:P.k,SVGGradientElement:P.k,SVGComponentTransferFunctionElement:P.k,SVGFEDropShadowElement:P.k,SVGMPathElement:P.k,SVGElement:P.k,SVGTransform:P.aZ,SVGTransformList:P.iu,AudioBuffer:P.eV,AudioParamMap:P.eW,AudioTrackList:P.eY,AudioContext:P.bq,webkitAudioContext:P.bq,BaseAudioContext:P.bq,OfflineAudioContext:P.hz,WebGL2RenderingContext:P.dt,SQLResultSetRowList:P.i5})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.di.$nativeSuperclassTag="ArrayBufferView"
H.cz.$nativeSuperclassTag="ArrayBufferView"
H.cA.$nativeSuperclassTag="ArrayBufferView"
H.ce.$nativeSuperclassTag="ArrayBufferView"
H.cB.$nativeSuperclassTag="ArrayBufferView"
H.cC.$nativeSuperclassTag="ArrayBufferView"
H.dj.$nativeSuperclassTag="ArrayBufferView"
W.cD.$nativeSuperclassTag="EventTarget"
W.cE.$nativeSuperclassTag="EventTarget"
W.cF.$nativeSuperclassTag="EventTarget"
W.cG.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(M.mf,[])
else M.mf([])})})()
//# sourceMappingURL=test.dart.js.map
