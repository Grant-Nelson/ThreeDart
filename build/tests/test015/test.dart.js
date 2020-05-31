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
a[c]=function(){a[c]=function(){H.p2(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.l1"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.l1"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.l1(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={kK:function kK(){},
k9:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
n3:function(a,b,c,d){if(!!J.P(a).$iq)return new H.ft(a,b,[c,d])
return new H.ca(a,b,[c,d])},
kH:function(){return new P.cm("No element")},
mU:function(){return new P.cm("Too many elements")},
nq:function(a,b){var u=J.ah(a)
if(typeof u!=="number")return u.L()
H.dx(a,0,u-1,b)},
dx:function(a,b,c,d){if(c-b<=32)H.np(a,b,c,d)
else H.no(a,b,c,d)},
np:function(a,b,c,d){var u,t,s,r,q,p
for(u=b+1,t=J.as(a);u<=c;++u){s=t.h(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.h(a,r-1),s)
if(typeof q!=="number")return q.a4()
q=q>0}else q=!1
if(!q)break
p=r-1
t.m(a,r,t.h(a,p))
r=p}t.m(a,r,s)}},
no:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j=C.c.a6(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.a6(a4+a5,2),f=g-j,e=g+j,d=J.as(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.a4()
if(a2>0){u=b
b=c
c=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a4()
if(a2>0){u=a1
a1=a0
a0=u}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.a4()
if(a2>0){u=a
a=c
c=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a4()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.a4()
if(a2>0){u=a0
a0=c
c=u}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.a4()
if(a2>0){u=a0
a0=a
a=u}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.a4()
if(a2>0){u=a1
a1=b
b=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a4()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a4()
if(a2>0){u=a1
a1=a0
a0=u}d.m(a3,i,c)
d.m(a3,g,a)
d.m(a3,h,a1)
d.m(a3,f,d.h(a3,a4))
d.m(a3,e,d.h(a3,a5))
t=a4+1
s=a5-1
if(J.U(a6.$2(b,a0),0)){for(r=t;r<=s;++r){q=d.h(a3,r)
p=a6.$2(q,b)
if(p===0)continue
if(typeof p!=="number")return p.O()
if(p<0){if(r!==t){d.m(a3,r,d.h(a3,t))
d.m(a3,t,q)}++t}else for(;!0;){p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.a4()
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
if(typeof k!=="number")return k.a4()
if(k>0)for(;!0;){p=a6.$2(d.h(a3,s),a0)
if(typeof p!=="number")return p.a4()
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
H.dx(a3,a4,t-2,a6)
H.dx(a3,s+2,a5,a6)
if(m)return
if(t<i&&s>h){for(;J.U(a6.$2(d.h(a3,t),b),0);)++t
for(;J.U(a6.$2(d.h(a3,s),a0),0);)--s
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
break}}H.dx(a3,t,s,a6)}else H.dx(a3,t,s,a6)},
n:function n(a){this.a=a},
q:function q(){},
df:function df(){},
bg:function bg(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
ca:function ca(a,b,c){this.a=a
this.b=b
this.$ti=c},
ft:function ft(a,b,c){this.a=a
this.b=b
this.$ti=c},
h7:function h7(a,b){this.a=null
this.b=a
this.c=b},
h8:function h8(a,b,c){this.a=a
this.b=b
this.$ti=c},
cv:function cv(a,b,c){this.a=a
this.b=b
this.$ti=c},
je:function je(a,b){this.a=a
this.b=b},
d6:function d6(){},
iQ:function iQ(){},
dM:function dM(){},
mN:function(){throw H.c(P.z("Cannot modify unmodifiable Map"))},
cO:function(a){var u,t=H.p3(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
oO:function(a){return v.types[a]},
m7:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.P(a).$iA},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a5(a)
if(typeof u!=="string")throw H.c(H.af(a))
return u},
cj:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
ng:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.d(p,3)
u=p[3]
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.Z(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.a.G(s,q)|32)>t)return}return parseInt(a,b)},
ck:function(a){return H.n7(a)+H.lZ(H.cM(a),0,null)},
n7:function(a){var u,t,s,r,q,p,o,n=J.P(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.W||!!n.$ibI){r=C.v(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cO(t.length>1&&C.a.G(t,0)===36?C.a.aa(t,1):t)},
n8:function(){if(!!self.location)return self.location.href
return},
lx:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
nh:function(a){var u,t,s,r=H.b([],[P.v])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.m)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.af(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.aS(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.c(H.af(s))}return H.lx(r)},
ly:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.af(s))
if(s<0)throw H.c(H.af(s))
if(s>65535)return H.nh(a)}return H.lx(a)},
ni:function(a,b,c){var u,t,s,r
if(typeof c!=="number")return c.ih()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
if(s<c)r=s
else r=c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
bE:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.aS(u,10))>>>0,56320|u&1023)}}throw H.c(P.Z(a,0,1114111,null,null))},
bD:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nf:function(a){var u=H.bD(a).getFullYear()+0
return u},
nd:function(a){var u=H.bD(a).getMonth()+1
return u},
n9:function(a){var u=H.bD(a).getDate()+0
return u},
na:function(a){var u=H.bD(a).getHours()+0
return u},
nc:function(a){var u=H.bD(a).getMinutes()+0
return u},
ne:function(a){var u=H.bD(a).getSeconds()+0
return u},
nb:function(a){var u=H.bD(a).getMilliseconds()+0
return u},
t:function(a){throw H.c(H.af(a))},
d:function(a,b){if(a==null)J.ah(a)
throw H.c(H.bS(a,b))},
bS:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.al(!0,b,s,null)
u=J.ah(a)
if(!(b<0)){if(typeof u!=="number")return H.t(u)
t=b>=u}else t=!0
if(t)return P.N(b,a,s,null,u)
return P.ds(b,s)},
oH:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bF(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bF(a,c,!0,b,"end",u)
return new P.al(!0,b,"end",null)},
af:function(a){return new P.al(!0,a,null,null)},
oD:function(a){if(typeof a!=="number")throw H.c(H.af(a))
return a},
c:function(a){var u
if(a==null)a=new P.dp()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.md})
u.name=""}else u.toString=H.md
return u},
md:function(){return J.a5(this.dartException)},
r:function(a){throw H.c(a)},
m:function(a){throw H.c(P.av(a))},
aJ:function(a){var u,t,s,r,q,p
a=H.mb(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iE(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iF:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
lH:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
ls:function(a,b){return new H.hC(a,b==null?null:b.method)},
kL:function(a,b){var u=b==null,t=u?null:b.method
return new H.fU(a,t,u?null:b.receiver)},
ag:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.ks(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.aS(t,16)&8191)===10)switch(s){case 438:return f.$1(H.kL(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.ls(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.mg()
q=$.mh()
p=$.mi()
o=$.mj()
n=$.mm()
m=$.mn()
l=$.ml()
$.mk()
k=$.mp()
j=$.mo()
i=r.al(u)
if(i!=null)return f.$1(H.kL(u,i))
else{i=q.al(u)
if(i!=null){i.method="call"
return f.$1(H.kL(u,i))}else{i=p.al(u)
if(i==null){i=o.al(u)
if(i==null){i=n.al(u)
if(i==null){i=m.al(u)
if(i==null){i=l.al(u)
if(i==null){i=o.al(u)
if(i==null){i=k.al(u)
if(i==null){i=j.al(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.ls(u,i))}}return f.$1(new H.iP(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dz()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.al(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dz()
return a},
l3:function(a){var u
if(a==null)return new H.et(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.et(a)},
oL:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.m(0,a[u],a[t])}return b},
oU:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.w("Unsupported number of arguments for wrapped closure"))},
bR:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.oU)
a.$identity=u
return u},
mM:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.ia().constructor.prototype):Object.create(new H.bY(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.au
if(typeof t!=="number")return t.D()
$.au=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.lh(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.mI(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.lh(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
mI:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.oO,a)
if(typeof a=="function")if(b)return a
else{u=c?H.lg:H.kw
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.c("Error in functionType of tearoff")},
mJ:function(a,b,c,d){var u=H.kw
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lh:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mL(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mJ(t,!r,u,b)
if(t===0){r=$.au
if(typeof r!=="number")return r.D()
$.au=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bZ
return new Function(r+H.e(q==null?$.bZ=H.f7("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.au
if(typeof r!=="number")return r.D()
$.au=r+1
o+=r
r="return function("+o+"){return this."
q=$.bZ
return new Function(r+H.e(q==null?$.bZ=H.f7("self"):q)+"."+H.e(u)+"("+o+");}")()},
mK:function(a,b,c,d){var u=H.kw,t=H.lg
switch(b?-1:a){case 0:throw H.c(H.nm("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
mL:function(a,b){var u,t,s,r,q,p,o,n=$.bZ
if(n==null)n=$.bZ=H.f7("self")
u=$.lf
if(u==null)u=$.lf=H.f7("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.mK(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.au
if(typeof u!=="number")return u.D()
$.au=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.au
if(typeof u!=="number")return u.D()
$.au=u+1
return new Function(n+u+"}")()},
l1:function(a,b,c,d,e,f,g){return H.mM(a,b,c,d,!!e,!!f,g)},
kw:function(a){return a.a},
lg:function(a){return a.c},
f7:function(a){var u,t,s,r=new H.bY("self","target","receiver","name"),q=J.kI(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
oY:function(a,b){throw H.c(H.mH(a,H.cO(b.substring(2))))},
j:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.P(a)[b]
else u=!0
if(u)return a
H.oY(a,b)},
oJ:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
mH:function(a,b){return new H.f8("CastError: "+P.kD(a)+": type '"+H.e(H.oz(a))+"' is not a subtype of type '"+b+"'")},
oz:function(a){var u,t=J.P(a)
if(!!t.$ic0){u=H.oJ(t)
if(u!=null)return H.oZ(u)
return"Closure"}return H.ck(a)},
p2:function(a){throw H.c(new P.fl(a))},
nm:function(a){return new H.hV(a)},
m5:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
cM:function(a){if(a==null)return
return a.$ti},
pE:function(a,b,c){return H.kr(a["$a"+H.e(c)],H.cM(b))},
oN:function(a,b,c,d){var u=H.kr(a["$a"+H.e(c)],H.cM(b))
return u==null?null:u[d]},
l2:function(a,b,c){var u=H.kr(a["$a"+H.e(b)],H.cM(a))
return u==null?null:u[c]},
b3:function(a,b){var u=H.cM(a)
return u==null?null:u[b]},
oZ:function(a){return H.bo(a,null)},
bo:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cO(a[0].name)+H.lZ(a,1,b)
if(typeof a=="function")return H.cO(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.e(b[t])}if('func' in a)return H.o4(a,b)
if('futureOr' in a)return"FutureOr<"+H.bo("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
o4:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.b([],[P.h])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.d(a0,m)
p=C.a.D(p,a0[m])
l=u[q]
if(l!=null&&l!==P.a2)p+=" extends "+H.bo(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bo(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bo(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bo(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.oK(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.bo(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
lZ:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.S("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bo(p,c)}return"<"+u.i(0)+">"},
kr:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
pC:function(a,b,c){return a.apply(b,H.kr(J.P(b)["$a"+H.e(c)],H.cM(b)))},
pD:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
oV:function(a){var u,t,s,r,q=$.m6.$1(a),p=$.k7[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kd[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.m3.$2(a,q)
if(q!=null){p=$.k7[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kd[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kp(u)
$.k7[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kd[q]=u
return u}if(s==="-"){r=H.kp(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.m9(a,u)
if(s==="*")throw H.c(P.iO(q))
if(v.leafTags[q]===true){r=H.kp(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.m9(a,u)},
m9:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.l5(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kp:function(a){return J.l5(a,!1,null,!!a.$iA)},
oW:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kp(u)
else return J.l5(u,c,null,null)},
oS:function(){if(!0===$.l4)return
$.l4=!0
H.oT()},
oT:function(){var u,t,s,r,q,p,o,n
$.k7=Object.create(null)
$.kd=Object.create(null)
H.oR()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.ma.$1(q)
if(p!=null){o=H.oW(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
oR:function(){var u,t,s,r,q,p,o=C.L()
o=H.bQ(C.M,H.bQ(C.N,H.bQ(C.w,H.bQ(C.w,H.bQ(C.O,H.bQ(C.P,H.bQ(C.Q(C.v),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.m6=new H.ka(r)
$.m3=new H.kb(q)
$.ma=new H.kc(p)},
bQ:function(a,b){return a(b)||b},
mY:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.c(P.V("Illegal RegExp pattern ("+String(p)+")",a,null))},
mc:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
oI:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mb:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
l8:function(a,b,c){var u=H.p0(a,b,c)
return u},
p0:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.mb(b),'g'),H.oI(c))},
fe:function fe(){},
ff:function ff(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iE:function iE(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hC:function hC(a,b){this.a=a
this.b=b},
fU:function fU(a,b,c){this.a=a
this.b=b
this.c=c},
iP:function iP(a){this.a=a},
ks:function ks(a){this.a=a},
et:function et(a){this.a=a
this.b=null},
c0:function c0(){},
ij:function ij(){},
ia:function ia(){},
bY:function bY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f8:function f8(a){this.a=a},
hV:function hV(a){this.a=a},
I:function I(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fT:function fT(a){this.a=a},
fX:function fX(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fY:function fY(a,b){this.a=a
this.$ti=b},
fZ:function fZ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ka:function ka(a){this.a=a},
kb:function kb(a){this.a=a},
kc:function kc(a){this.a=a},
fS:function fS(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bO:function(a){return a},
n6:function(a){return new Int8Array(a)},
aK:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bS(b,a))},
o2:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.oH(a,b,c))
return b},
cf:function cf(){},
bi:function bi(){},
dj:function dj(){},
cg:function cg(){},
dk:function dk(){},
hv:function hv(){},
hw:function hw(){},
hx:function hx(){},
hy:function hy(){},
hz:function hz(){},
dl:function dl(){},
ch:function ch(){},
cz:function cz(){},
cA:function cA(){},
cB:function cB(){},
cC:function cC(){},
oK:function(a){return J.ln(a?Object.keys(a):[],null)},
p3:function(a){return v.mangledGlobalNames[a]},
oX:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
l5:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
k8:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.l4==null){H.oS()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.iO("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.l9()]
if(r!=null)return r
r=H.oV(a)
if(r!=null)return r
if(typeof a=="function")return C.Y
u=Object.getPrototypeOf(a)
if(u==null)return C.D
if(u===Object.prototype)return C.D
if(typeof s=="function"){Object.defineProperty(s,$.l9(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
mV:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.kv(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.Z(a,0,4294967295,"length",null))
return J.ln(new Array(a),b)},
ln:function(a,b){return J.kI(H.b(a,[b]))},
kI:function(a){a.fixed$length=Array
return a},
mW:function(a,b){return J.cR(a,b)},
P:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.da.prototype
return J.d9.prototype}if(typeof a=="string")return J.be.prototype
if(a==null)return J.db.prototype
if(typeof a=="boolean")return J.fR.prototype
if(a.constructor==Array)return J.bd.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bf.prototype
return a}if(a instanceof P.a2)return a
return J.k8(a)},
as:function(a){if(typeof a=="string")return J.be.prototype
if(a==null)return a
if(a.constructor==Array)return J.bd.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bf.prototype
return a}if(a instanceof P.a2)return a
return J.k8(a)},
eT:function(a){if(a==null)return a
if(a.constructor==Array)return J.bd.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bf.prototype
return a}if(a instanceof P.a2)return a
return J.k8(a)},
oM:function(a){if(typeof a=="number")return J.c7.prototype
if(typeof a=="string")return J.be.prototype
if(a==null)return a
if(!(a instanceof P.a2))return J.bI.prototype
return a},
cL:function(a){if(typeof a=="string")return J.be.prototype
if(a==null)return a
if(!(a instanceof P.a2))return J.bI.prototype
return a},
bU:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bf.prototype
return a}if(a instanceof P.a2)return a
return J.k8(a)},
U:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.P(a).u(a,b)},
bW:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.m7(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.as(a).h(a,b)},
kt:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.m7(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.eT(a).m(a,b,c)},
my:function(a,b){return J.cL(a).G(a,b)},
mz:function(a,b,c){return J.bU(a).fS(a,b,c)},
mA:function(a,b,c,d){return J.bU(a).h9(a,b,c,d)},
mB:function(a,b){return J.cL(a).Y(a,b)},
cR:function(a,b){return J.oM(a).aV(a,b)},
ku:function(a,b){return J.as(a).E(a,b)},
eV:function(a,b){return J.eT(a).K(a,b)},
mC:function(a,b,c,d){return J.bU(a).hv(a,b,c,d)},
lb:function(a,b){return J.eT(a).C(a,b)},
mD:function(a){return J.bU(a).ghe(a)},
bX:function(a){return J.bU(a).gc2(a)},
cS:function(a){return J.P(a).gJ(a)},
aM:function(a){return J.eT(a).gR(a)},
ah:function(a){return J.as(a).gl(a)},
lc:function(a){return J.eT(a).hZ(a)},
mE:function(a,b){return J.bU(a).i1(a,b)},
mF:function(a,b,c){return J.cL(a).q(a,b,c)},
mG:function(a){return J.cL(a).ia(a)},
a5:function(a){return J.P(a).i(a)},
a:function a(){},
fR:function fR(){},
db:function db(){},
dc:function dc(){},
hG:function hG(){},
bI:function bI(){},
bf:function bf(){},
bd:function bd(a){this.$ti=a},
kJ:function kJ(a){this.$ti=a},
a6:function a6(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c7:function c7(){},
da:function da(){},
d9:function d9(){},
be:function be(){}},P={
nD:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.oA()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bR(new P.jg(s),1)).observe(u,{childList:true})
return new P.jf(s,u,t)}else if(self.setImmediate!=null)return P.oB()
return P.oC()},
nE:function(a){self.scheduleImmediate(H.bR(new P.jh(a),0))},
nF:function(a){self.setImmediate(H.bR(new P.ji(a),0))},
nG:function(a){P.kP(C.n,a)},
kP:function(a,b){var u=C.c.a6(a.a,1000)
return P.nN(u<0?0:u,b)},
lG:function(a,b){var u=C.c.a6(a.a,1000)
return P.nO(u<0?0:u,b)},
nN:function(a,b){var u=new P.eA()
u.ew(a,b)
return u},
nO:function(a,b){var u=new P.eA()
u.ex(a,b)
return u},
pz:function(a){return new P.bK(a,1)},
nJ:function(){return C.a6},
nK:function(a){return new P.bK(a,3)},
o7:function(a,b){return new P.jK(a,[b])},
ot:function(){var u,t
for(;u=$.bP,u!=null;){$.cK=null
t=u.b
$.bP=t
if(t==null)$.cJ=null
u.a.$0()}},
oy:function(){$.l_=!0
try{P.ot()}finally{$.cK=null
$.l_=!1
if($.bP!=null)$.la().$1(P.m4())}},
ow:function(a){var u=new P.dV(a)
if($.bP==null){$.bP=$.cJ=u
if(!$.l_)$.la().$1(P.m4())}else $.cJ=$.cJ.b=u},
ox:function(a){var u,t,s=$.bP
if(s==null){P.ow(a)
$.cK=$.cJ
return}u=new P.dV(a)
t=$.cK
if(t==null){u.b=s
$.bP=$.cK=u}else{u.b=t.b
$.cK=t.b=u
if(u.b==null)$.cJ=u}},
lF:function(a,b){var u=$.ar
if(u===C.f)return P.kP(a,b)
return P.kP(a,u.hf(b))},
nt:function(a,b){var u=$.ar
if(u===C.f)return P.lG(a,b)
return P.lG(a,u.dl(b,P.dG))},
m_:function(a,b,c,d,e){var u={}
u.a=d
P.ox(new P.k5(u,e))},
ou:function(a,b,c,d){var u,t=$.ar
if(t===c)return d.$0()
$.ar=c
u=t
try{t=d.$0()
return t}finally{$.ar=u}},
ov:function(a,b,c,d,e){var u,t=$.ar
if(t===c)return d.$1(e)
$.ar=c
u=t
try{t=d.$1(e)
return t}finally{$.ar=u}},
jg:function jg(a){this.a=a},
jf:function jf(a,b,c){this.a=a
this.b=b
this.c=c},
jh:function jh(a){this.a=a},
ji:function ji(a){this.a=a},
eA:function eA(){this.c=0},
jO:function jO(a,b){this.a=a
this.b=b},
jN:function jN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bK:function bK(a,b){this.a=a
this.b=b},
bL:function bL(a){var _=this
_.a=a
_.d=_.c=_.b=null},
jK:function jK(a,b){this.a=a
this.$ti=b},
dV:function dV(a){this.a=a
this.b=null},
dB:function dB(){},
id:function id(){},
dG:function dG(){},
jX:function jX(){},
k5:function k5(a,b){this.a=a
this.b=b},
jw:function jw(){},
jx:function jx(a,b){this.a=a
this.b=b},
jy:function jy(a,b,c){this.a=a
this.b=b
this.c=c},
n_:function(a,b){return new H.I([a,b])},
kM:function(a,b){return new H.I([a,b])},
n0:function(a){return H.oL(a,new H.I([null,null]))},
c9:function(a){return new P.jt([a])},
kV:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
nM:function(a,b){var u=new P.ea(a,b)
u.c=a.e
return u},
mT:function(a,b,c){var u,t
if(P.l0(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.h])
$.ab.push(a)
try{P.o6(a,u)}finally{if(0>=$.ab.length)return H.d($.ab,-1)
$.ab.pop()}t=P.lD(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
kG:function(a,b,c){var u,t
if(P.l0(a))return b+"..."+c
u=new P.S(b)
$.ab.push(a)
try{t=u
t.a=P.lD(t.a,a,", ")}finally{if(0>=$.ab.length)return H.d($.ab,-1)
$.ab.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
l0:function(a){var u,t
for(u=$.ab.length,t=0;t<u;++t)if(a===$.ab[t])return!0
return!1},
o6:function(a,b){var u,t,s,r,q,p,o,n=a.gR(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.t())return
u=H.e(n.gB(n))
b.push(u)
m+=u.length+2;++l}if(!n.t()){if(l<=5)return
if(0>=b.length)return H.d(b,-1)
t=b.pop()
if(0>=b.length)return H.d(b,-1)
s=b.pop()}else{r=n.gB(n);++l
if(!n.t()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.d(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gB(n);++l
for(;n.t();r=q,q=p){p=n.gB(n);++l
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
lo:function(a,b,c){var u=P.n_(b,c)
a.C(0,new P.h_(u))
return u},
lp:function(a,b){var u,t,s=P.c9(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.m)(a),++t)s.n(0,a[t])
return s},
kN:function(a){var u,t={}
if(P.l0(a))return"{...}"
u=new P.S("")
try{$.ab.push(a)
u.a+="{"
t.a=!0
J.lb(a,new P.h5(t,u))
u.a+="}"}finally{if(0>=$.ab.length)return H.d($.ab,-1)
$.ab.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jt:function jt(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ju:function ju(a){this.a=a
this.c=this.b=null},
ea:function ea(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fP:function fP(){},
h_:function h_(a){this.a=a},
h0:function h0(){},
x:function x(){},
h4:function h4(){},
h5:function h5(a,b){this.a=a
this.b=b},
a1:function a1(){},
jP:function jP(){},
h6:function h6(){},
dN:function dN(a,b){this.a=a
this.$ti=b},
jA:function jA(){},
eb:function eb(){},
eG:function eG(){},
nw:function(a,b,c,d){if(b instanceof Uint8Array)return P.nx(!1,b,c,d)
return},
nx:function(a,b,c,d){var u,t,s=$.mq()
if(s==null)return
u=0===c
if(u&&!0)return P.kS(s,b)
t=b.length
d=P.b_(c,d,t)
if(u&&d===t)return P.kS(s,b)
return P.kS(s,b.subarray(c,d))},
kS:function(a,b){if(P.nz(b))return
return P.nA(a,b)},
nA:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ag(t)}return},
nz:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
ny:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ag(t)}return},
m1:function(a,b,c){var u,t,s
if(typeof c!=="number")return H.t(c)
u=J.as(a)
t=b
for(;t<c;++t){s=u.h(a,t)
if(typeof s!=="number")return s.ad()
if((s&127)!==s)return t-b}return c-b},
le:function(a,b,c,d,e,f){if(C.c.bm(f,4)!==0)throw H.c(P.V("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.V("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.V("Invalid base64 padding, more than two '=' characters",a,b))},
f4:function f4(){},
f5:function f5(){},
fa:function fa(){},
fg:function fg(){},
fv:function fv(){},
fM:function fM(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
fL:function fL(a){this.a=a},
iZ:function iZ(){},
j0:function j0(){},
jV:function jV(a){this.b=0
this.c=a},
j_:function j_(a){this.a=a},
jU:function jU(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
cN:function(a,b,c){var u=H.ng(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.V(a,null,null))},
mR:function(a){if(a instanceof H.c0)return a.i(0)
return"Instance of '"+H.e(H.ck(a))+"'"},
n1:function(a,b,c){var u,t,s=J.mV(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
h1:function(a,b,c){var u,t=H.b([],[c])
for(u=J.aM(a);u.t();)t.push(u.gB(u))
if(b)return t
return J.kI(t)},
cn:function(a,b,c){var u,t
if(typeof a==="object"&&a!==null&&a.constructor===Array){u=a.length
c=P.b_(b,c,u)
if(b<=0){if(typeof c!=="number")return c.O()
t=c<u}else t=!0
return H.ly(t?C.b.eg(a,b,c):a)}if(!!J.P(a).$ich)return H.ni(a,b,P.b_(b,c,a.length))
return P.nr(a,b,c)},
nr:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.c(P.Z(b,0,J.ah(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.Z(c,b,J.ah(a),q,q))
t=J.aM(a)
for(s=0;s<b;++s)if(!t.t())throw H.c(P.Z(b,0,s,q,q))
r=[]
if(u)for(;t.t();)r.push(t.gB(t))
else for(s=b;s<c;++s){if(!t.t())throw H.c(P.Z(c,b,s,q,q))
r.push(t.gB(t))}return H.ly(r)},
nk:function(a){return new H.fS(a,H.mY(a,!1,!0,!1,!1,!1))},
lD:function(a,b,c){var u=J.aM(b)
if(!u.t())return a
if(c.length===0){do a+=H.e(u.gB(u))
while(u.t())}else{a+=H.e(u.gB(u))
for(;u.t();)a=a+c+H.e(u.gB(u))}return a},
iU:function(){var u=H.n8()
if(u!=null)return P.nv(u)
throw H.c(P.z("'Uri.base' is not supported"))},
eH:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.e){u=$.mw().b
if(typeof b!=="string")H.r(H.af(b))
u=u.test(b)}else u=!1
if(u)return b
t=c.ghu().c4(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.d(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.bE(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
mO:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
mP:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
d1:function(a){if(a>=10)return""+a
return"0"+a},
lj:function(a){return new P.b9(1000*a)},
kD:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a5(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mR(a)},
cT:function(a){return new P.al(!1,null,null,a)},
kv:function(a,b,c){return new P.al(!0,a,b,c)},
ds:function(a,b){return new P.bF(null,null,!0,a,b,"Value not in range")},
Z:function(a,b,c,d,e){return new P.bF(b,c,!0,a,d,"Invalid value")},
b_:function(a,b,c){var u
if(typeof a!=="number")return H.t(a)
if(0<=a){if(typeof c!=="number")return H.t(c)
u=a>c}else u=!0
if(u)throw H.c(P.Z(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.t(c)
u=b>c}else u=!0
if(u)throw H.c(P.Z(b,a,c,"end",null))
return b}return c},
lz:function(a,b){if(typeof a!=="number")return a.O()
if(a<0)throw H.c(P.Z(a,0,null,b,null))},
N:function(a,b,c,d,e){var u=e==null?J.ah(b):e
return new P.fO(u,!0,a,c,"Index out of range")},
z:function(a){return new P.iR(a)},
iO:function(a){return new P.iN(a)},
lC:function(a){return new P.cm(a)},
av:function(a){return new P.fd(a)},
w:function(a){return new P.e3(a)},
V:function(a,b,c){return new P.fF(a,b,c)},
n2:function(a,b,c){var u,t,s=H.b([],[c])
C.b.sl(s,a)
for(u=0;u<a;++u){t=b.$1(u)
if(u>=s.length)return H.d(s,u)
s[u]=t}return s},
l7:function(a){H.oX(a)},
nv:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.a.G(a,4)^58)*3|C.a.G(a,0)^100|C.a.G(a,1)^97|C.a.G(a,2)^116|C.a.G(a,3)^97)>>>0
if(u===0)return P.lI(e<e?C.a.q(a,0,e):a,5,f).ge7()
else if(u===32)return P.lI(C.a.q(a,5,e),0,f).ge7()}t=new Array(8)
t.fixed$length=Array
s=H.b(t,[P.v])
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
if(typeof r!=="number")return r.ig()
if(r>=0)if(P.m0(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.D()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.O()
if(typeof n!=="number")return H.t(n)
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
l=!1}else{if(!(n<e&&n===o+2&&C.a.a9(a,"..",o)))j=n>o+2&&C.a.a9(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.a.a9(a,"file",0)){if(q<=0){if(!C.a.a9(a,"/",o)){i="file:///"
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
a=C.a.aY(a,o,n,"/");++e
n=h}k="file"}else if(C.a.a9(a,"http",0)){if(t&&p+3===o&&C.a.a9(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.a.aY(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.a.a9(a,"https",0)){if(t&&p+4===o&&C.a.a9(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.a.aY(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.a.q(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.jD(a,r,q,p,o,n,m,k)}return P.nP(a,0,e,r,q,p,o,n,m,k)},
lK:function(a){var u=P.h
return C.b.hz(H.b(a.split("&"),[u]),P.kM(u,u),new P.iX(C.e))},
nu:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.iT(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.a.Y(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.cN(C.a.q(a,s,t),n,n)
if(typeof p!=="number")return p.a4()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.d(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.cN(C.a.q(a,s,c),n,n)
if(typeof p!=="number")return p.a4()
if(p>255)k.$2(l,s)
if(r>=u)return H.d(j,r)
j[r]=p
return j},
lJ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.iV(a),d=new P.iW(e,a)
if(a.length<2)e.$1("address is too short")
u=H.b([],[P.v])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.a.Y(a,t)
if(p===58){if(t===b){++t
if(C.a.Y(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
u.push(-1)
r=!0}else u.push(d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.b.gaw(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)u.push(d.$2(s,c))
else{m=P.nu(a,s,c)
u.push((m[0]<<8|m[1])>>>0)
u.push((m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.d(l,i)
l[i]=0
f=i+1
if(f>=k)return H.d(l,f)
l[f]=0
i+=2}else{f=C.c.aS(h,8)
if(i<0||i>=k)return H.d(l,i)
l[i]=f
f=i+1
if(f>=k)return H.d(l,f)
l[f]=h&255
i+=2}}return l},
nP:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.nX(a,b,d)
else{if(d===b)P.bN(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.nY(a,u,e-1):""
s=P.nU(a,e,f,!1)
if(typeof f!=="number")return f.D()
r=f+1
if(typeof g!=="number")return H.t(g)
q=r<g?P.nW(P.cN(C.a.q(a,r,g),new P.jQ(a,f),n),j):n}else{q=n
s=q
t=""}p=P.nV(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.O()
o=h<i?P.kX(a,h+1,i,n):n
return new P.bM(j,t,s,q,p,o,i<c?P.nT(a,i+1,c):n)},
lT:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bN:function(a,b,c){throw H.c(P.V(c,a,b))},
nW:function(a,b){if(a!=null&&a===P.lT(b))return
return a},
nU:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.a.Y(a,b)===91){if(typeof c!=="number")return c.L()
u=c-1
if(C.a.Y(a,u)!==93)P.bN(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.nR(a,t,u)
if(typeof s!=="number")return s.O()
if(s<u){r=s+1
q=P.lY(a,C.a.a9(a,"25",r)?s+3:r,u,"%25")}else q=""
P.lJ(a,t,s)
return C.a.q(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.t(c)
p=b
for(;p<c;++p)if(C.a.Y(a,p)===58){s=C.a.bu(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.lY(a,C.a.a9(a,"25",r)?s+3:r,c,"%25")}else q=""
P.lJ(a,b,s)
return"["+C.a.q(a,b,s)+q+"]"}return P.o_(a,b,c)},
nR:function(a,b,c){var u,t=C.a.bu(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.t(c)
u=t<c}else u=!1
return u?t:c},
lY:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.S(d):null
if(typeof c!=="number")return H.t(c)
u=b
t=u
s=!0
for(;u<c;){r=C.a.Y(a,u)
if(r===37){q=P.kY(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.S("")
o=l.a+=C.a.q(a,t,u)
if(p)q=C.a.q(a,u,u+3)
else if(q==="%")P.bN(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.d(C.h,p)
p=(C.h[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.S("")
if(t<u){l.a+=C.a.q(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.a.Y(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.S("")
l.a+=C.a.q(a,t,u)
l.a+=P.kW(r)
u+=m
t=u}}}if(l==null)return C.a.q(a,b,c)
if(t<c)l.a+=C.a.q(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
o_:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.t(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.a.Y(a,u)
if(q===37){p=P.kY(a,u,!0)
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
if(o>=8)return H.d(C.A,o)
o=(C.A[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.S("")
if(t<u){s.a+=C.a.q(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.d(C.k,o)
o=(C.k[o]&1<<(q&15))!==0}else o=!1
if(o)P.bN(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.a.Y(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.S("")
n=C.a.q(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.kW(q)
u+=l
t=u}}}}if(s==null)return C.a.q(a,b,c)
if(t<c){n=C.a.q(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
nX:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.lV(C.a.G(a,b)))P.bN(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.a.G(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.d(C.m,r)
r=(C.m[r]&1<<(s&15))!==0}else r=!1
if(!r)P.bN(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.a.q(a,b,c)
return P.nQ(t?a.toLowerCase():a)},
nQ:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
nY:function(a,b,c){return P.cH(a,b,c,C.a0,!1)},
nV:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.cH(a,b,c,C.B,!0):C.j.iy(d,new P.jR(),P.h).j(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.a.a5(u,"/"))u="/"+u
return P.nZ(u,e,f)},
nZ:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.a.a5(a,"/"))return P.o0(a,!u||c)
return P.o1(a)},
kX:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.c(P.cT("Both query and queryParameters specified"))
return P.cH(a,b,c,C.l,!0)}if(d==null)return
u=new P.S("")
t.a=""
d.C(0,new P.jS(new P.jT(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
nT:function(a,b,c){return P.cH(a,b,c,C.l,!0)},
kY:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.a.Y(a,b+1)
t=C.a.Y(a,p)
s=H.k9(u)
r=H.k9(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.c.aS(q,4)
if(p>=8)return H.d(C.h,p)
p=(C.h[p]&1<<(q&15))!==0}else p=!1
if(p)return H.bE(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.a.q(a,b,b+3).toUpperCase()
return},
kW:function(a){var u,t,s,r,q,p,o,n,m="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.b(u,[P.v])
t[0]=37
t[1]=C.a.G(m,a>>>4)
t[2]=C.a.G(m,a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.b(u,[P.v])
for(u=t.length,q=0;--r,r>=0;s=128){p=C.c.h1(a,6*r)&63|s
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
q+=3}}return P.cn(t,0,null)},
cH:function(a,b,c,d,e){var u=P.lX(a,b,c,d,e)
return u==null?C.a.q(a,b,c):u},
lX:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.O()
if(typeof c!=="number")return H.t(c)
if(!(o<c))break
c$0:{u=C.a.Y(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.d(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.kY(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.d(C.k,t)
t=(C.k[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.bN(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.a.Y(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.kW(u)}}if(m==null)m=new P.S("")
m.a+=C.a.q(a,n,o)
m.a+=H.e(s)
if(typeof r!=="number")return H.t(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.O()
if(n<c)m.a+=C.a.q(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
lW:function(a){if(C.a.a5(a,"."))return!0
return C.a.dR(a,"/.")!==-1},
o1:function(a){var u,t,s,r,q,p,o
if(!P.lW(a))return a
u=H.b([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.U(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.d(u,-1)
u.pop()
if(u.length===0)u.push("")}r=!0}else if("."===p)r=!0
else{u.push(p)
r=!1}}if(r)u.push("")
return C.b.j(u,"/")},
o0:function(a,b){var u,t,s,r,q,p
if(!P.lW(a))return!b?P.lU(a):a
u=H.b([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.b.gaw(u)!==".."){if(0>=u.length)return H.d(u,-1)
u.pop()
r=!0}else{u.push("..")
r=!1}else if("."===p)r=!0
else{u.push(p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.d(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.b.gaw(u)==="..")u.push("")
if(!b){if(0>=u.length)return H.d(u,0)
t=P.lU(u[0])
if(0>=u.length)return H.d(u,0)
u[0]=t}return C.b.j(u,"/")},
lU:function(a){var u,t,s,r=a.length
if(r>=2&&P.lV(J.my(a,0)))for(u=1;u<r;++u){t=C.a.G(a,u)
if(t===58)return C.a.q(a,0,u)+"%3A"+C.a.aa(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.d(C.m,s)
s=(C.m[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
nS:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.a.G(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.cT("Invalid URL encoding"))}}return u},
kZ:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.a.G(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.e!==d)s=!1
else s=!0
if(s)return C.a.q(a,b,c)
else r=new H.n(C.a.q(a,b,c))}else{r=H.b([],[P.v])
for(s=a.length,q=b;q<c;++q){t=C.a.G(a,q)
if(t>127)throw H.c(P.cT("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.cT("Truncated URI"))
r.push(P.nS(a,q+1))
q+=2}else if(t===43)r.push(32)
else r.push(t)}}return new P.j_(!1).c4(r)},
lV:function(a){var u=a|32
return 97<=u&&u<=122},
lI:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.b([b-1],[P.v])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.a.G(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.V(m,a,t))}}if(s<0&&t>b)throw H.c(P.V(m,a,t))
for(;r!==44;){l.push(t);++t
for(q=-1;t<u;++t){r=C.a.G(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)l.push(q)
else{p=C.b.gaw(l)
if(r!==44||t!==p+7||!C.a.a9(a,"base64",p+1))throw H.c(P.V("Expecting '='",a,t))
break}}l.push(t)
o=t+1
if((l.length&1)===1)a=C.K.hJ(0,a,o,u)
else{n=P.lX(a,o,u,C.l,!0)
if(n!=null)a=C.a.aY(a,o,u,n)}return new P.iS(a,l,c)},
o3:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.n2(22,new P.k0(),P.bH),n=new P.k_(o),m=new P.k1(),l=new P.k2(),k=n.$2(0,225)
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
m0:function(a,b,c,d,e){var u,t,s,r,q,p=$.mx()
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
aL:function aL(){},
ad:function ad(a,b){this.a=a
this.b=b},
L:function L(){},
b9:function b9(a){this.a=a},
fr:function fr(){},
fs:function fs(){},
bw:function bw(){},
dp:function dp(){},
al:function al(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bF:function bF(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fO:function fO(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iR:function iR(a){this.a=a},
iN:function iN(a){this.a=a},
cm:function cm(a){this.a=a},
fd:function fd(a){this.a=a},
hF:function hF(){},
dz:function dz(){},
fl:function fl(a){this.a=a},
e3:function e3(a){this.a=a},
fF:function fF(a,b,c){this.a=a
this.b=b
this.c=c},
fH:function fH(){},
v:function v(){},
i:function i(){},
fQ:function fQ(){},
o:function o(){},
R:function R(){},
bj:function bj(){},
ac:function ac(){},
a2:function a2(){},
h:function h(){},
S:function S(a){this.a=a},
iX:function iX(a){this.a=a},
iT:function iT(a){this.a=a},
iV:function iV(a){this.a=a},
iW:function iW(a,b){this.a=a
this.b=b},
bM:function bM(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
jQ:function jQ(a,b){this.a=a
this.b=b},
jR:function jR(){},
jT:function jT(a,b){this.a=a
this.b=b},
jS:function jS(a){this.a=a},
iS:function iS(a,b,c){this.a=a
this.b=b
this.c=c},
k0:function k0(){},
k_:function k_(a){this.a=a},
k1:function k1(){},
k2:function k2(){},
jD:function jD(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jm:function jm(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
oG:function(a){var u,t=J.P(a)
if(!!t.$iaS){u=t.gds(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.eF(a.data,a.height,a.width)},
oF:function(a){if(a instanceof P.eF)return{data:a.a,height:a.b,width:a.c}
return a},
b2:function(a){var u,t,s,r,q
if(a==null)return
u=P.kM(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){q=t[r]
u.m(0,q,a[q])}return u},
oE:function(a){var u={}
a.C(0,new P.k6(u))
return u},
jF:function jF(){},
jG:function jG(a,b){this.a=a
this.b=b},
jH:function jH(a,b){this.a=a
this.b=b},
eF:function eF(a,b,c){this.a=a
this.b=b
this.c=c},
k6:function k6(a){this.a=a},
ex:function ex(a,b){this.a=a
this.b=b},
fB:function fB(a,b){this.a=a
this.b=b},
fC:function fC(){},
fD:function fD(){},
js:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
nL:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jv:function jv(){},
a9:function a9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aT:function aT(){},
fW:function fW(){},
aX:function aX(){},
hD:function hD(){},
hL:function hL(){},
cl:function cl(){},
ie:function ie(){},
l:function l(){},
b0:function b0(){},
iD:function iD(){},
e8:function e8(){},
e9:function e9(){},
ej:function ej(){},
ek:function ek(){},
ev:function ev(){},
ew:function ew(){},
eD:function eD(){},
eE:function eE(){},
bH:function bH(){},
f_:function f_(){},
f0:function f0(){},
f1:function f1(a){this.a=a},
f2:function f2(){},
bq:function bq(){},
hE:function hE(){},
dW:function dW(){},
du:function du(){},
i9:function i9(){},
er:function er(){},
es:function es(){}},W={
ld:function(){var u=document.createElement("a")
return u},
ky:function(){var u=document.createElement("canvas")
return u},
mQ:function(a,b,c){var u=document.body,t=(u&&C.r).ak(u,a,b,c)
t.toString
u=new H.cv(new W.a4(t),new W.fu(),[W.C])
return u.gaL(u)},
kB:function(a){return"wheel"},
c2:function(a){var u,t,s,r="element tag unavailable"
try{u=J.bU(a)
t=u.ge4(a)
if(typeof t==="string")r=u.ge4(a)}catch(s){H.ag(s)}return r},
kF:function(a){var u=document.createElement("img")
if(a!=null)u.src=a
return u},
mS:function(a){var u,t=document.createElement("input"),s=t
try{s.type=a}catch(u){H.ag(u)}return s},
jr:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lR:function(a,b,c,d){var u=W.jr(W.jr(W.jr(W.jr(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
W:function(a,b,c,d){var u=W.m2(new W.jp(c),W.k)
if(u!=null&&!0)J.mA(a,b,u,!1)
return new W.jo(a,b,u,!1)},
lQ:function(a){var u=W.ld(),t=window.location
u=new W.cx(new W.jz(u,t))
u.er(a)
return u},
nH:function(a,b,c,d){return!0},
nI:function(a,b,c,d){var u,t=d.a,s=t.a
s.href=c
u=s.hostname
t=t.b
if(!(u==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(u==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
lS:function(){var u=P.h,t=P.lp(C.o,u),s=H.b(["TEMPLATE"],[u])
t=new W.jL(t,P.c9(u),P.c9(u),P.c9(u),null)
t.ev(null,new H.h8(C.o,new W.jM(),[H.b3(C.o,0),u]),s,null)
return t},
m2:function(a,b){var u=$.ar
if(u===C.f)return a
return u.dl(a,b)},
p:function p(){},
eW:function eW(){},
eX:function eX(){},
eY:function eY(){},
br:function br(){},
bs:function bs(){},
bu:function bu(){},
b8:function b8(){},
fh:function fh(){},
H:function H(){},
c1:function c1(){},
fi:function fi(){},
ai:function ai(){},
aw:function aw(){},
fj:function fj(){},
fk:function fk(){},
fn:function fn(){},
am:function am(){},
fo:function fo(){},
d3:function d3(){},
d4:function d4(){},
fp:function fp(){},
fq:function fq(){},
jk:function jk(a,b){this.a=a
this.b=b},
Q:function Q(){},
fu:function fu(){},
k:function k(){},
f:function f(){},
an:function an(){},
c4:function c4(){},
fA:function fA(){},
fE:function fE(){},
ax:function ax(){},
fK:function fK(){},
c6:function c6(){},
aS:function aS(){},
by:function by(){},
bA:function bA(){},
h2:function h2(){},
ho:function ho(){},
cd:function cd(){},
hp:function hp(){},
hq:function hq(a){this.a=a},
hr:function hr(){},
hs:function hs(a){this.a=a},
aA:function aA(){},
ht:function ht(){},
aB:function aB(){},
a4:function a4(a){this.a=a},
C:function C(){},
dm:function dm(){},
aC:function aC(){},
hI:function hI(){},
hT:function hT(){},
hU:function hU(a){this.a=a},
hW:function hW(){},
aE:function aE(){},
i6:function i6(){},
aF:function aF(){},
i7:function i7(){},
aG:function aG(){},
ib:function ib(){},
ic:function ic(a){this.a=a},
ap:function ap(){},
dC:function dC(){},
ig:function ig(){},
ih:function ih(){},
co:function co(){},
aH:function aH(){},
aq:function aq(){},
ik:function ik(){},
il:function il(){},
ix:function ix(){},
aI:function aI(){},
bG:function bG(){},
iB:function iB(){},
iC:function iC(){},
bk:function bk(){},
iY:function iY(){},
jd:function jd(){},
bn:function bn(){},
cw:function cw(){},
jl:function jl(){},
dY:function dY(){},
jq:function jq(){},
eg:function eg(){},
jE:function jE(){},
jI:function jI(){},
jj:function jj(){},
jn:function jn(a){this.a=a},
jo:function jo(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jp:function jp(a){this.a=a},
cx:function cx(a){this.a=a},
M:function M(){},
dn:function dn(a){this.a=a},
hB:function hB(a){this.a=a},
hA:function hA(a,b,c){this.a=a
this.b=b
this.c=c},
eo:function eo(){},
jB:function jB(){},
jC:function jC(){},
jL:function jL(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jM:function jM(){},
jJ:function jJ(){},
d7:function d7(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
aW:function aW(){},
jz:function jz(a,b){this.a=a
this.b=b},
eI:function eI(a){this.a=a},
jW:function jW(a){this.a=a},
dX:function dX(){},
dZ:function dZ(){},
e_:function e_(){},
e0:function e0(){},
e1:function e1(){},
e4:function e4(){},
e5:function e5(){},
e6:function e6(){},
e7:function e7(){},
ec:function ec(){},
ed:function ed(){},
ee:function ee(){},
ef:function ef(){},
eh:function eh(){},
ei:function ei(){},
el:function el(){},
em:function em(){},
en:function en(){},
cD:function cD(){},
cE:function cE(){},
ep:function ep(){},
eq:function eq(){},
eu:function eu(){},
ey:function ey(){},
ez:function ez(){},
cF:function cF(){},
cG:function cG(){},
eB:function eB(){},
eC:function eC(){},
eJ:function eJ(){},
eK:function eK(){},
eL:function eL(){},
eM:function eM(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(){},
eR:function eR(){},
eS:function eS(){}},K={
O:function(a,b){var u,t,s
if(a.length!==1||b.length!==1)throw H.c(P.w("The given low and high character strings for a Range must have one and only one characters."))
u=C.a.G(a,0)
t=C.a.G(b,0)
if(u>t){s=t
t=u
u=s}return new K.hO(u,t)},
u:function(a){var u=new K.hX()
u.ep(a)
return u},
aN:function aN(){},
d8:function d8(){},
bh:function bh(){},
a8:function a8(){this.a=null},
hO:function hO(a,b){this.a=a
this.b=b},
hX:function hX(){this.a=null}},L={
iz:function(){var u=new L.iy(),t=P.h
u.a=new H.I([t,L.dA])
u.b=new H.I([t,L.dI])
u.c=P.c9(t)
return u},
dA:function dA(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dH:function dH(a,b,c){this.a=a
this.b=b
this.c=c},
dI:function dI(a){this.b=a
this.c=null},
iy:function iy(){var _=this
_.d=_.c=_.b=_.a=null},
dK:function dK(a){this.b=a
this.a=this.c=null}},O={
kz:function(a){var u=new O.aO([a])
u.bo(a)
return u},
aO:function aO(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cc:function cc(){this.b=this.a=null},
dh:function dh(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hg:function hg(a,b){this.a=a
this.b=b},
hh:function hh(){},
hi:function hi(a,b){this.a=a
this.b=b},
hj:function hj(){},
hk:function hk(a,b){this.a=a
this.b=b},
hl:function hl(){},
hm:function hm(a,b){this.a=a
this.b=b},
hn:function hn(){},
ha:function ha(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cb:function cb(){},
hb:function hb(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
ay:function ay(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hd:function hd(){var _=this
_.e=_.d=_.c=_.b=null},
he:function he(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hf:function hf(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dw:function dw(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
dD:function dD(){}},E={
lm:function(){var u,t=new E.aR()
t.a=""
t.b=!0
u=O.kz(E.aR)
t.y=u
u.b_(t.ghK(),t.ghN())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sbF(0,null)
return t},
lO:function(){if(J.ku(window.navigator.vendor,"Google"))return C.I
if(J.ku(window.navigator.userAgent,"Firefox"))return C.t
var u=window.navigator.appVersion
if(J.as(u).E(u,"Trident")||C.a.E(u,"Edge"))return C.u
if(J.ku(window.navigator.appName,"Microsoft"))return C.u
return C.J},
lP:function(){var u=window.navigator.appVersion
if(J.as(u).E(u,"Win"))return C.a3
if(C.a.E(u,"Mac"))return C.C
if(C.a.E(u,"Linux"))return C.a4
return C.a5},
nl:function(a,b){var u=new E.hP(a)
u.eo(a,b)
return u},
ns:function(a,b,c,d,e){var u,t,s=J.P(a)
if(!!s.$ibu)return E.lE(a,!0,!0,!0,!1)
u=W.ky()
t=u.style
t.width="100%"
t.height="100%"
s.gc2(a).n(0,u)
return E.lE(u,!0,!0,!0,!1)},
lE:function(a,b,c,d,e){var u,t,s,r,q="mousemove",p=new E.dF(),o=C.i.cB(a,"webgl2",P.n0(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(o==null)H.r(P.w("Failed to get the rendering context for WebGL."))
p.b=a
p.c=o
p.e=E.nl(o,a)
u=new T.it(o)
u.b=o.getParameter(3379)
u.c=o.getParameter(34076)
u.e=u.d=0
p.f=u
u=new X.dO(a)
t=new X.fV()
t.c=new X.aj(!1,!1,!1)
t.d=P.c9(P.v)
u.b=t
t=new X.hu(u)
t.f=0
t.r=V.aY()
t.x=V.aY()
t.ch=t.Q=1
u.c=t
t=new X.h3(u)
t.r=0
t.x=V.aY()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.iA(u)
t.f=V.aY()
t.r=V.aY()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.z=H.b([],[[P.dB,P.a2]])
t=$.fw
u.Q=(t==null?$.fw=new E.e2(E.lO(),E.lP()):t).a===C.t?0.16666666666666666:0.005555555555555556
s=u.z
r=document
s.push(W.W(r,"contextmenu",u.gf9(),!1))
u.z.push(W.W(a,"focus",u.gff(),!1))
u.z.push(W.W(a,"blur",u.gf3(),!1))
u.z.push(W.W(r,"keyup",u.gfj(),!1))
u.z.push(W.W(r,"keydown",u.gfh(),!1))
u.z.push(W.W(a,"mousedown",u.gfn(),!1))
u.z.push(W.W(a,"mouseup",u.gfs(),!1))
u.z.push(W.W(a,q,u.gfp(),!1))
s=u.z
W.kB(a)
W.kB(a)
s.push(W.W(a,W.kB(a),u.gfu(),!1))
u.z.push(W.W(r,q,u.gfb(),!1))
u.z.push(W.W(r,"mouseup",u.gfd(),!1))
u.z.push(W.W(r,"pointerlockchange",u.gfw(),!1))
u.z.push(W.W(a,"touchstart",u.gfO(),!1))
u.z.push(W.W(a,"touchend",u.gfK(),!1))
u.z.push(W.W(a,"touchmove",u.gfM(),!1))
p.x=u
p.ch=!0
p.cx=!1
p.cy=new P.ad(Date.now(),!1)
p.db=0
p.d3()
return p},
f6:function f6(){},
aR:function aR(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bt:function bt(a){this.b=a},
bC:function bC(a){this.b=a},
e2:function e2(a,b){this.a=a
this.b=b},
hP:function hP(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hQ:function hQ(a){this.a=a},
hR:function hR(a){this.a=a},
hS:function hS(a){this.a=a},
dF:function dF(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
iw:function iw(a){this.a=a}},Z={
kU:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.bO(c)),35044)
a.bindBuffer(b,null)
return new Z.dT(b,u)},
ak:function(a){return new Z.b1(a)},
dT:function dT(a,b){this.a=a
this.b=b},
cW:function cW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
dU:function dU(a){this.a=a},
c_:function c_(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bz:function bz(a,b,c){this.a=a
this.b=b
this.c=c},
b1:function b1(a){this.a=a}},D={
E:function(){var u=new D.bx()
u.d=0
return u},
f9:function f9(){},
bx:function bx(){var _=this
_.d=_.c=_.b=_.a=null},
fy:function fy(a){this.a=a},
fz:function fz(a){this.a=a},
Y:function Y(){this.b=null},
bb:function bb(){this.b=null},
bc:function bc(){this.b=null},
B:function B(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
f3:function f3(){},
bv:function bv(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a7:function a7(){},
de:function de(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
hJ:function hJ(){},
i8:function i8(){}},X={cX:function cX(a,b){this.a=a
this.b=b},dd:function dd(a,b){this.a=a
this.b=b},fV:function fV(){var _=this
_.d=_.c=_.b=_.a=null},dg:function dg(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},h3:function h3(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aj:function aj(a,b,c){this.a=a
this.b=b
this.c=c},aV:function aV(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hu:function hu(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ce:function ce(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hK:function hK(){},dJ:function dJ(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iA:function iA(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dO:function dO(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
kE:function(a){var u=new X.fG(),t=new V.aP(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.lB
if(t==null){t=V.lA(0,0,1,1)
$.lB=t}u.r=t
return u},
lt:function(a){var u,t,s=new X.dq()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gp().n(0,s.gey())
t=new D.B("mover",u,s.b)
t.b=!0
s.as(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.F().a)){s.c=1.0471975511965976
t=new D.B("fov",t,1.0471975511965976)
t.b=!0
s.as(t)}t=s.d
if(!(Math.abs(t-0.1)<$.F().a)){s.d=0.1
t=new D.B("near",t,0.1)
t.b=!0
s.as(t)}t=s.e
if(!(Math.abs(t-2000)<$.F().a)){s.e=2000
t=new D.B("far",t,2000)
t.b=!0
s.as(t)}return s},
kx:function kx(){},
fG:function fG(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fN:function fN(){this.b=this.a=null},
dq:function dq(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
ii:function ii(){}},V={
fb:function(a,b,c){var u=a/255,t=b/255,s=c/255
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.aP(u,t,s,1)},
p4:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.bm(a-b,u)
return(a<0?a+u:a)+b},
K:function(a,b,c){if(a==null)return C.a.am("null",c)
return C.a.am(C.d.e6(Math.abs(a-0)<$.F().a?0:a,b),c+b+1)},
bT:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.h])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.m)(a),++s){r=V.K(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.d(o,q)
u=C.a.am(o[q],t)
p=o.length
if(q>=p)return H.d(o,q)
o[q]=u}return o},
l6:function(a){return C.d.i7(Math.pow(2,C.X.cg(Math.log(H.oD(a))/Math.log(2))))},
bB:function(){var u=$.lr
return u==null?$.lr=V.az(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
az:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aU(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lq:function(a,b,c){var u=c.A(0,Math.sqrt(c.I(c))),t=b.bc(u),s=t.A(0,Math.sqrt(t.I(t))),r=u.bc(s),q=new V.D(a.a,a.b,a.c),p=s.U(0).I(q),o=r.U(0).I(q),n=u.U(0).I(q)
return V.az(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
aY:function(){var u=$.lv
return u==null?$.lv=new V.a3(0,0):u},
lw:function(){var u=$.aD
return u==null?$.aD=new V.a_(0,0,0):u},
lA:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dt(a,b,c,d)},
dS:function(){var u=$.lN
return u==null?$.lN=new V.D(0,0,0):u},
nB:function(){var u=$.j1
return u==null?$.j1=new V.D(-1,0,0):u},
kT:function(){var u=$.j2
return u==null?$.j2=new V.D(0,1,0):u},
nC:function(){var u=$.j3
return u==null?$.j3=new V.D(0,0,1):u},
y:function y(a,b,c){this.a=a
this.b=b
this.c=c},
aP:function aP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fx:function fx(a){this.a=a},
di:function di(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aU:function aU(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a_:function a_(a,b,c){this.a=a
this.b=b
this.c=c},
aZ:function aZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dt:function dt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
J:function J(a,b){this.a=a
this.b=b},
D:function D(a,b,c){this.a=a
this.b=b
this.c=c},
p_:function(a){P.nt(C.U,new V.kq(a))},
nn:function(a){var u=new V.i1()
u.eq(a,!0)
return u},
cY:function cY(){},
kq:function kq(a){this.a=a},
fm:function fm(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fI:function fI(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fJ:function fJ(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hH:function hH(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hM:function hM(a){this.a=a
this.c=null},
hN:function hN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i1:function i1(){this.b=this.a=null},
i3:function i3(a){this.a=a},
i2:function i2(a){this.a=a},
i4:function i4(a){this.a=a},
io:function io(a,b){this.a=a
this.c=null
this.d=b},
iq:function iq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ip:function ip(){}},U={
kA:function(){var u=new U.fc()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
li:function(a){var u=new U.d_()
u.a=a
return u},
fc:function fc(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d_:function d_(){this.b=this.a=null},
c5:function c5(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ae:function ae(){},
dP:function dP(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dQ:function dQ(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dR:function dR(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cZ:function cZ(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},d0:function d0(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},d5:function d5(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},ao:function ao(){}},A={
n4:function(a,b){var u=a.bd,t=new A.h9(b,u)
t.cJ(b,u)
t.en(a,b)
return t},
n5:function(a,b,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="MaterialLight_"+a3.gar(a3)+a4.gar(a4)+a5.gar(a5)+a6.gar(a6)+a7.gar(a7)+a8.gar(a8)+a9.gar(a9)+b0.gar(b0)+b1.gar(b1)+"_"
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
o=a9.a||a9.b||!1||b0.a||b0.b||!1
n=u>0
if(!(a4.a||a4.b||!1))if(!(a5.a||a5.b||!1)){u=a6.a||a6.b||!1||a7.a||a7.b||!1
m=u}else m=!0
else m=!0
u=!a7.a
l=!u||a7.b||!1||n||q>0||o
if(!(a5.a||a5.b||!1))k=a6.a||a6.b||!1||!u||a7.b||!1
else k=!0
if(!k)j=a8.a||a8.b||!1||o
else j=!0
i=a8.a||a8.b||!1
h=a3.b||a4.b||a5.b||a6.b||a7.b||a8.b||a9.b||b0.b||b1.b
g=a2>0
f=j||i||l||!1
e=n&&k
a=a&&h
d=$.at()
if(j){u=$.b6()
d=new Z.b1(d.a|u.a)}if(i){u=$.b5()
d=new Z.b1(d.a|u.a)}if(h){u=$.b7()
d=new Z.b1(d.a|u.a)}if(g){u=$.b4()
d=new Z.b1(d.a|u.a)}return new A.hc(a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,s,o,k,o,r,f,!0,e,!1,m,r,l,j,i,h,!1,g,a,!1,a0,!1,a2,c.charCodeAt(0)==0?c:c,d)},
k3:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
k4:function(a,b,c){var u,t="Txt, txt2D).rgb;\n"
A.k3(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.eU(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.b){u+="   "+c+"Color = "+c+"Clr*texture2D("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.b){u+="   "+c+"Color = texture2D("+c+t
a.a=u}a.a=u+"}\n"},
oc:function(a,b){var u,t=a.a,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.k3(b,t,"emission")
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
o8:function(a,b){var u,t=a.b
if(!(t.a||t.b||!1))return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.k4(b,t,"ambient")
b.a+="\n"},
oa:function(a,b){var u,t=a.c
if(!(t.a||t.b||!1))return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.k4(b,t,"diffuse")
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
od:function(a,b){var u,t=a.d
if(!(t.a||t.b||!1))return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.k4(b,t,"invDiffuse")
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
oj:function(a,b){var u,t=a.e
if(!(t.a||t.b||!1))return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.k4(b,t,"specular")
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
of:function(a,b){var u,t,s
if(!a.k4)return
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
oh:function(a,b){var u,t=a.r,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.k3(b,t,"reflect")
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
oi:function(a,b){var u,t=a.x,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.k3(b,t,"refract")
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
o9:function(a,b,c){var u,t,s,r,q,p,o=b.b
if(o<=0)return
u=b.a
t="barLight"+H.e(u)
s=A.eU(t)
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
if(typeof u!=="number")return u.ad()
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
if(u.a||u.b||!1)q.push("ambientColor")
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
if(u.a||u.b||!1)p.push("diffuse(norm, normDir)")
u=a.d
if(u.a||u.b||!1)p.push("invDiffuse(norm, normDir)")
u=a.e
if(u.a||u.b||!1)p.push("specular(norm, normDir)")
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
ob:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.e(u)
s=A.eU(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.ad()
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
if(n.a||n.b||!1)o.push("ambientColor")
if(a.dx){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.b([],r)
r=a.c
if(r.a||r.b||!1)m.push("diffuse(norm, lit.viewDir)")
r=a.d
if(r.a||r.b||!1)m.push("invDiffuse(norm, lit.viewDir)")
r=a.e
if(r.a||r.b||!1)m.push("specular(norm, lit.viewDir)")
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
og:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.e(u)
s=A.eU(t)
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
if(typeof u!=="number")return u.ad()
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
if(o.a||o.b||!1)l.push("ambientColor")
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
if(r.a||r.b||!1)k.push("diffuse(norm, normDir)")
r=a.d
if(r.a||r.b||!1)k.push("invDiffuse(norm, normDir)")
r=a.e
if(r.a||r.b||!1)k.push("specular(norm, normDir)")
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
ok:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.e(u)
s=A.eU(t)
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
if(typeof u!=="number")return u.ad()
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
if(o){u=$.fw
if(u==null)u=$.fw=new E.e2(E.lO(),E.lP())
r=c.a
if(u.b===C.C){u=r+"   float crossMag = length(cross(normDir, lit.objDir));\n"
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
r=a.b
if(r.a||r.b||!1)j.push("ambientColor")
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
if(u.a||u.b||!1)i.push("diffuse(norm, litVec)")
u=a.d
if(u.a||u.b||!1)i.push("invDiffuse(norm, litVec)")
u=a.e
if(u.a||u.b||!1)i.push("specular(norm, litVec)")
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
oe:function(a,b){var u,t
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
if(u.a||u.b||!1)t.push("ambientColor")
u=a.c
if(u.a||u.b||!1)t.push("diffuse(norm, litVec)")
u=a.d
if(u.a||u.b||!1)t.push("invDiffuse(norm, litVec)")
u=a.e
if(u.a||u.b||!1)t.push("specular(norm, litVec)")
u=b.a+="   return "+C.b.j(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
ol:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.S("")
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
A.oc(a,j)
A.o8(a,j)
A.oa(a,j)
A.od(a,j)
A.oj(a,j)
t=a.db
if(t){r=j.a+="// === Environmental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.oh(a,j)
A.oi(a,j)}A.of(a,j)
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
r=a.k1
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.m)(q),++o)A.o9(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.m)(q),++o)A.ob(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.m)(q),++o)A.og(a,q[o],j)
for(q=a.cx,p=q.length,o=0;o<q.length;q.length===p||(0,H.m)(q),++o)A.ok(a,q[o],j)
A.oe(a,j)}q=j.a+="// === Main ===\n"
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
u=a.b
if(u.a||u.b||!1)j.a+="   setAmbientColor();\n"
u=a.c
if(u.a||u.b||!1)j.a+="   setDiffuseColor();\n"
u=a.d
if(u.a||u.b||!1)j.a+="   setInvDiffuseColor();\n"
u=a.e
if(u.a||u.b||!1)j.a+="   setSpecularColor();\n"
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.m)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.aa(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.m)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.aa(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.m)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.aa(r,1))+"Values(norm);\n"}for(u=a.cx,t=u.length,o=0;o<u.length;u.length===t||(0,H.m)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.aa(r,1))+"Values(norm);\n"}if(a.cy<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
if(u.a||u.b||!1)n.push("emissionColor()")
u=a.r
if(u.a||u.b||!1)n.push("reflect(refl)")
u=a.x
if(u.a||u.b||!1)n.push("refract(refl)")
if(n.length<=0)n.push("vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.b.j(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
om:function(a,b){var u,t,s
if(!a.ry)return
u=b.a+="struct BendingValue\n"
u+="{\n"
b.a=u
u+="   mat4 mat;\n"
b.a=u
u+="};\n"
b.a=u
b.a=u+"uniform int bendMatCount;\n"
u=b.a+="uniform BendingValue bendValues["+a.aW+"];\n"
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
oo:function(a,b){var u
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
on:function(a,b){var u
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
oq:function(a,b){var u,t
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
or:function(a,b){var u,t
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
op:function(a,b){var u
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
os:function(a,b){var u
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
eU:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.a.aa(a,1)},
kQ:function(a,b,c,d,e){var u=new A.iG(a,c,e)
u.f=d
P.n1(d,0,P.v)
return u},
cU:function cU(a,b,c){this.a=a
this.b=b
this.c=c},
eZ:function eZ(a){this.a=a},
X:function X(a,b,c){this.a=a
this.b=b
this.c=c},
h9:function h9(a,b){var _=this
_.ip=_.dz=_.bt=_.bd=_.aW=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.ix=_.iw=_.iv=_.ce=_.cd=_.cc=_.cb=_.ca=_.c9=_.c8=_.c7=_.iu=_.dL=_.dK=_.it=_.dJ=_.dI=_.dH=_.is=_.dG=_.dF=_.dE=_.ir=_.dD=_.dC=_.iq=_.dB=_.dA=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cV:function cV(a,b){this.a=a
this.b=b},
d2:function d2(a,b){this.a=a
this.b=b},
dr:function dr(a,b){this.a=a
this.b=b},
dy:function dy(a,b){this.a=a
this.b=b},
hc:function hc(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.aW=b3
_.bd=b4
_.bt=b5},
cq:function cq(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cr:function cr(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
ct:function ct(a,b,c,d,e,f,g,h,i,j){var _=this
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
cu:function cu(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dv:function dv(){},
i5:function i5(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dL:function dL(){},
iL:function iL(a){this.a=a},
bl:function bl(a,b,c){this.a=a
this.c=b
this.d=c},
iI:function iI(a,b,c){this.a=a
this.c=b
this.d=c},
iJ:function iJ(a,b,c){this.a=a
this.c=b
this.d=c},
iK:function iK(a,b,c){this.a=a
this.c=b
this.d=c},
iG:function iG(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
T:function T(a,b,c){this.a=a
this.c=b
this.d=c},
iH:function iH(a,b,c){this.a=a
this.c=b
this.d=c},
G:function G(a,b,c){this.a=a
this.c=b
this.d=c},
cp:function cp(a,b,c){this.a=a
this.c=b
this.d=c},
iM:function iM(a,b,c){this.a=a
this.c=b
this.d=c},
cs:function cs(a,b,c){this.a=a
this.c=b
this.d=c},
aa:function aa(a,b,c){this.a=a
this.c=b
this.d=c},
a0:function a0(a,b,c){this.a=a
this.c=b
this.d=c},
bm:function bm(a,b,c){this.a=a
this.c=b
this.d=c}},F={
jZ:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cI:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.D(h,g+a1,f+a2)
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
j.d=i}m=F.jZ(i)
l=F.jZ(h)
k=F.p1(d,a0,new F.jY(j,F.jZ(g),F.jZ(f),l,m,c),b)
if(k!=null)a.hI(k)},
p1:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.kO()
t=H.b([],[F.bJ])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.j4(g,g,new V.aP(p,0,0,1),g,g,new V.a3(r,1),g,g,0)
q.n(0,o)
c.$3(o,r,0)
t.push(o.c5(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.j4(g,g,new V.aP(j,i,h,1),g,g,new V.a3(r,m),g,g,0)
k.n(0,o)
c.$3(o,r,n)
t.push(o.c5(d))}}u.d.hb(a+1,b+1,t)
return u},
c3:function(a,b,c){var u=new F.ba(),t=a.a
if(t==null)H.r(P.w("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.r(P.w("May not create a face with vertices attached to different shapes."))
u.a=a
a.d.b.push(u)
u.b=b
b.d.c.push(u)
u.c=c
c.d.d.push(u)
u.a.a.d.b.push(u)
u.a.a.a8()
return u},
mZ:function(a,b){var u=new F.c8(),t=a.a
if(t==null)H.r(P.w("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.r(P.w("May not create a line with vertices attached to different shapes."))
u.a=a
a.c.b.push(u)
u.b=b
b.c.c.push(u)
u.a.a.c.b.push(u)
u.a.a.a8()
return u},
kO:function(){var u=new F.hY(),t=new F.j5(u)
t.b=!1
t.c=H.b([],[F.bJ])
u.a=t
t=new F.i0(u)
t.b=H.b([],[F.ci])
u.b=t
t=new F.i_(u)
t.b=H.b([],[F.c8])
u.c=t
t=new F.hZ(u)
t.b=H.b([],[F.ba])
u.d=t
u.e=null
return u},
j4:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.bJ(),r=new F.ja()
r.b=H.b([],[F.ci])
s.b=r
r=new F.j9()
u=[F.c8]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.j6()
u=[F.ba]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.mr()
s.e=0
r=$.at()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.b6().a)!==0?e:t
s.x=(u&$.b5().a)!==0?b:t
s.y=(u&$.b7().a)!==0?f:t
s.z=(u&$.bp().a)!==0?g:t
s.Q=(u&$.ms().a)!==0?c:t
s.ch=(u&$.bV().a)!==0?i:0
s.cx=(u&$.b4().a)!==0?a:t
return s},
jY:function jY(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ba:function ba(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
c8:function c8(){this.b=this.a=null},
ci:function ci(){this.a=null},
hY:function hY(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hZ:function hZ(a){this.a=a
this.b=null},
i_:function i_(a){this.a=a
this.b=null},
i0:function i0(a){this.a=a
this.b=null},
bJ:function bJ(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jc:function jc(a){this.a=a},
jb:function jb(a){this.a=a},
j5:function j5(a){this.a=a
this.c=this.b=null},
j6:function j6(){this.d=this.c=this.b=null},
j7:function j7(a,b){this.a=a
this.b=b},
j8:function j8(a,b){this.a=a
this.b=b},
j9:function j9(){this.c=this.b=null},
ja:function ja(){this.b=null}},T={dE:function dE(){},im:function im(){},ir:function ir(){var _=this
_.y=_.d=_.c=_.b=_.a=null},is:function is(){var _=this
_.e=_.d=_.c=_.b=_.a=null},it:function it(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},iv:function iv(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},iu:function iu(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},B={
m8:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="testCanvas",a6=null,a7="bumpMaps",a8="controls",a9=34067,b0="modifiers",b1=V.nn("Test 015"),b2=W.ky()
b2.className="pageLargeCanvas"
b2.id=a5
b1.a.appendChild(b2)
u=[P.h]
b1.df(H.b(["Test of Material Lighting shader with bump mapping, reflections, refractions."],u))
b1.h8(H.b(["bumpMaps","controls"],u))
b1.df(H.b(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(a5)
if(t==null)H.r(P.w("Failed to find an element with the identifier, testCanvas."))
s=E.ns(t,!0,!0,!0,!1)
r=X.kE(a6)
r.sdq(0,!1)
q=E.lm()
p=F.kO()
F.cI(p,a6,a6,1,1,1,0,0,1)
F.cI(p,a6,a6,1,1,0,1,0,3)
F.cI(p,a6,a6,1,1,0,0,1,2)
F.cI(p,a6,a6,1,1,-1,0,0,0)
F.cI(p,a6,a6,1,1,0,-1,0,0)
F.cI(p,a6,a6,1,1,0,0,-1,3)
p.aB()
q.sbF(0,p)
o=s.f
n=o.a
m=n.createTexture()
n.bindTexture(a9,m)
n.texParameteri(a9,10242,10497)
n.texParameteri(a9,10243,10497)
n.texParameteri(a9,10241,9729)
n.texParameteri(a9,10240,9729)
n.bindTexture(a9,a6)
l=new T.is()
l.a=0
l.b=m
l.c=!1
l.d=0
o.aP(l,m,"../resources/maskonaive/posx.jpg",34069,!1,!1)
o.aP(l,m,"../resources/maskonaive/negx.jpg",34070,!1,!1)
o.aP(l,m,"../resources/maskonaive/posy.jpg",34071,!1,!1)
o.aP(l,m,"../resources/maskonaive/negy.jpg",34072,!1,!1)
o.aP(l,m,"../resources/maskonaive/posz.jpg",34073,!1,!1)
o.aP(l,m,"../resources/maskonaive/negz.jpg",34074,!1,!1)
k=new O.dh()
o=O.kz(V.aU)
k.e=o
o.b_(k.gf_(),k.gf1())
o=new O.ay(k,"emission")
o.c=new A.X(!1,!1,!1)
o.f=new V.y(0,0,0)
k.f=o
o=new O.ay(k,"ambient")
o.c=new A.X(!1,!1,!1)
o.f=new V.y(0,0,0)
k.r=o
o=new O.ay(k,"diffuse")
o.c=new A.X(!1,!1,!1)
o.f=new V.y(0,0,0)
k.x=o
o=new O.ay(k,"invDiffuse")
o.c=new A.X(!1,!1,!1)
o.f=new V.y(0,0,0)
k.y=o
o=new O.hf(k,"specular")
o.c=new A.X(!1,!1,!1)
o.f=new V.y(0,0,0)
o.ch=100
k.z=o
o=new O.hb(k,"bump")
o.c=new A.X(!1,!1,!1)
k.Q=o
k.ch=null
o=new O.ay(k,"reflect")
o.c=new A.X(!1,!1,!1)
o.f=new V.y(0,0,0)
k.cx=o
o=new O.he(k,"refract")
o.c=new A.X(!1,!1,!1)
o.f=new V.y(0,0,0)
o.ch=1
k.cy=o
o=new O.ha(k,"alpha")
o.c=new A.X(!1,!1,!1)
o.f=1
k.db=o
o=new D.de()
o.bo(D.a7)
o.e=H.b([],[D.f3])
o.f=H.b([],[D.bv])
o.r=H.b([],[D.hJ])
o.x=H.b([],[D.i8])
o.z=o.y=null
o.cD(o.geY(),o.gfA(),o.gfE())
k.dx=o
n=new O.hd()
n.b=new V.aP(0,0,0,0)
n.c=1
n.d=10
n.e=!1
k.dy=n
n=o.y
o=n==null?o.y=D.E():n
o.n(0,k.gfU())
o=k.dx
n=o.z
o=n==null?o.z=D.E():n
n=k.gaQ()
o.n(0,n)
k.fr=null
o=k.dx
j=V.kT()
i=U.li(V.lq(V.lw(),j,new V.D(-1,-1,-1)))
h=new D.bv()
h.c=new V.y(1,1,1)
h.a=V.nC()
h.d=V.kT()
h.e=V.nB()
g=h.b
h.b=i
i.gp().n(0,h.ges())
i=new D.B("mover",g,h.b)
i.b=!0
h.ax(i)
f=new V.y(1,1,1)
if(!h.c.u(0,f)){g=h.c
h.c=f
i=new D.B("color",g,f)
i.b=!0
h.ax(i)}o.n(0,h)
o=k.r
o.sv(0,new V.y(0.1,0.1,0.1))
o=k.x
o.sv(0,new V.y(0.1,0.1,0.1))
k.z.sv(0,new V.y(0,0,0))
o=k.z
o.b8(new A.X(!0,o.c.b,!1))
o.d6(10)
o=k.ch
if(o!==l){if(o!=null)o.gp().V(0,n)
g=k.ch
k.ch=l
l.gp().n(0,n)
o=new D.B("environment",g,k.ch)
o.b=!0
k.X(o)}k.cy.saC(0.6)
o=k.cy
o.sv(0,new V.y(0.2,0.3,1))
o=k.cx
o.sv(0,new V.y(0.6,0.6,0.6))
e=new U.c5()
e.bo(U.ae)
e.b_(e.geW(),e.gfC())
e.e=null
e.f=V.bB()
e.r=0
o=s.x
n=new U.dQ()
i=U.kA()
i.scA(0,!0)
i.scn(6.283185307179586)
i.scp(0)
i.saf(0,0)
i.sco(100)
i.sW(0)
i.sc6(0.5)
n.b=i
h=n.gaN()
i.gp().n(0,h)
i=U.kA()
i.scA(0,!0)
i.scn(6.283185307179586)
i.scp(0)
i.saf(0,0)
i.sco(100)
i.sW(0)
i.sc6(0.5)
n.c=i
i.gp().n(0,h)
n.d=null
n.r=n.f=n.e=!1
n.y=n.x=2.5
n.Q=4
n.ch=n.cx=!1
n.db=n.cy=0
n.dx=null
n.dy=0
n.fx=n.fr=null
d=new X.aj(!1,!1,!1)
g=n.d
n.d=d
i=new D.B(b0,g,d)
i.b=!0
n.T(i)
i=n.f
if(i!==!1){n.f=!1
i=new D.B("invertX",i,!1)
i.b=!0
n.T(i)}i=n.r
if(i!==!1){n.r=!1
i=new D.B("invertY",i,!1)
i.b=!0
n.T(i)}n.ba(o)
e.n(0,n)
o=s.x
n=new U.dP()
i=U.kA()
i.scA(0,!0)
i.scn(6.283185307179586)
i.scp(0)
i.saf(0,0)
i.sco(100)
i.sW(0)
i.sc6(0.2)
n.b=i
i.gp().n(0,n.gaN())
n.c=null
n.d=!1
n.e=2.5
n.r=4
n.x=n.y=!1
n.z=0
n.Q=null
n.ch=0
n.cy=n.cx=null
d=new X.aj(!0,!1,!1)
g=n.c
n.c=d
i=new D.B(b0,g,d)
i.b=!0
n.T(i)
n.ba(o)
e.n(0,n)
o=s.x
n=new U.dR()
n.c=0.01
n.e=n.d=0
d=new X.aj(!1,!1,!1)
n.b=d
i=new D.B(b0,a6,d)
i.b=!0
n.T(i)
n.ba(o)
e.n(0,n)
e.n(0,U.li(V.az(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
c=X.lt(e)
b=new M.d0()
b.a=!0
o=E.lm()
p=F.kO()
n=p.a
i=new V.D(-1,-1,1)
i=i.A(0,Math.sqrt(i.I(i)))
a=n.br(new V.aZ(1,2,4,6),V.fb(255,0,0),new V.a_(-1,-1,0),new V.a3(0,1),i,a6)
i=p.a
n=new V.D(1,-1,1)
n=n.A(0,Math.sqrt(n.I(n)))
a0=i.br(new V.aZ(0,3,4,6),V.fb(0,0,255),new V.a_(1,-1,0),new V.a3(1,1),n,a6)
n=p.a
i=new V.D(1,1,1)
i=i.A(0,Math.sqrt(i.I(i)))
a1=n.br(new V.aZ(0,2,5,6),V.fb(0,128,0),new V.a_(1,1,0),new V.a3(1,0),i,a6)
i=p.a
n=V.aY()
h=new V.D(-1,1,1)
h=h.A(0,Math.sqrt(h.I(h)))
a2=i.br(new V.aZ(0,2,4,7),V.fb(255,255,0),new V.a_(-1,1,0),n,h,a6)
p.d.ha(H.b([a,a0,a1,a2],[F.bJ]))
p.aB()
o.sbF(0,p)
b.e=o
b.sbb(a6)
b.sbh(0,a6)
b.sbi(a6)
o=new O.dw()
o.b=1.0471975511965976
o.d=new V.y(1,1,1)
g=o.c
o.c=l
l.gp().n(0,o.gaQ())
n=new D.B("boxTexture",g,o.c)
n.b=!0
o.X(n)
b.sbi(o)
b.sbh(0,r)
b.sbb(c)
a3=new M.d5()
a3.a=!0
o=O.kz(E.aR)
a3.e=o
o.b_(a3.gf5(),a3.gf7())
a3.y=a3.x=a3.r=a3.f=null
a4=X.kE(a6)
a3.sbb(a6)
a3.sbh(0,a4)
a3.sbi(a6)
a3.sbb(c)
a3.sbi(k)
a3.sbh(0,r)
a3.e.n(0,q)
a3.c.sdq(0,!1)
o=M.ao
n=H.b([b,a3],[o])
i=new M.cZ()
i.bo(o)
i.e=!0
i.f=!1
i.r=null
i.b_(i.gfG(),i.gfI())
i.a7(0,n)
o=s.d
if(o!==i){if(o!=null)o.gp().V(0,s.gcL())
s.d=i
i.gp().n(0,s.gcL())
s.cM()}o=new V.hM(a8)
n=u.getElementById(a8)
o.c=n
if(n==null)H.r("Failed to find controls for RadioGroup")
o.dd(0,"Silver",new B.ke(k),!0)
o.ae(0,"Gold",new B.kf(k))
o.ae(0,"Glass",new B.kg(k))
o.ae(0,"Blue Glass",new B.kh(k))
o.ae(0,"Water Bubble",new B.ki(k))
o.ae(0,"No Reflection",new B.kj(k))
o.ae(0,"Pink Distort",new B.kk(k))
o.ae(0,"Cloak",new B.kl(k))
o.ae(0,"White and Shiny",new B.km(k))
o=new V.io(a7,new B.kn(k,s))
u=u.getElementById(a7)
o.c=u
if(u==null)H.r("Failed to find bumpMaps for Texture2DGroup")
o.ae(0,"../resources/BumpMap1.png",!0)
o.n(0,"../resources/BumpMap2.png")
o.n(0,"../resources/BumpMap3.png")
o.n(0,"../resources/BumpMap4.png")
o.n(0,"../resources/BumpMap5.png")
o.n(0,"../resources/ScrewBumpMap.png")
o.n(0,"../resources/CtrlPnlBumpMap.png")
u=s.Q
if(u==null)u=s.Q=D.E()
o=u.b
u=o==null?u.b=H.b([],[{func:1,ret:-1,args:[D.Y]}]):o
u.push(new B.ko(b1,k))
V.p_(s)},
ke:function ke(a){this.a=a},
kf:function kf(a){this.a=a},
kg:function kg(a){this.a=a},
kh:function kh(a){this.a=a},
ki:function ki(a){this.a=a},
kj:function kj(a){this.a=a},
kk:function kk(a){this.a=a},
kl:function kl(a){this.a=a},
km:function km(a){this.a=a},
kn:function kn(a,b){this.a=a
this.b=b},
ko:function ko(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T,B]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kK.prototype={}
J.a.prototype={
u:function(a,b){return a===b},
gJ:function(a){return H.cj(a)},
i:function(a){return"Instance of '"+H.e(H.ck(a))+"'"}}
J.fR.prototype={
i:function(a){return String(a)},
gJ:function(a){return a?519018:218159},
$iaL:1}
J.db.prototype={
u:function(a,b){return null==b},
i:function(a){return"null"},
gJ:function(a){return 0}}
J.dc.prototype={
gJ:function(a){return 0},
i:function(a){return String(a)},
$imX:1}
J.hG.prototype={}
J.bI.prototype={}
J.bf.prototype={
i:function(a){var u=a[$.mf()]
if(u==null)return this.ek(a)
return"JavaScript function for "+H.e(J.a5(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.bd.prototype={
i_:function(a,b){var u
if(!!a.fixed$length)H.r(P.z("removeAt"))
u=a.length
if(b>=u)throw H.c(P.ds(b,null))
return a.splice(b,1)[0]},
V:function(a,b){var u
if(!!a.fixed$length)H.r(P.z("remove"))
for(u=0;u<a.length;++u)if(J.U(a[u],b)){a.splice(u,1)
return!0}return!1},
a7:function(a,b){var u,t
if(!!a.fixed$length)H.r(P.z("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.m)(b),++t)a.push(b[t])},
C:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.c(P.av(a))}},
j:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.d(r,u)
r[u]=t}return r.join(b)},
hF:function(a){return this.j(a,"")},
hy:function(a,b,c){var u,t,s=a.length
for(u=b,t=0;t<s;++t){u=c.$2(u,a[t])
if(a.length!==s)throw H.c(P.av(a))}return u},
hz:function(a,b,c){return this.hy(a,b,c,null)},
hx:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.c(P.av(a))}throw H.c(H.kH())},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
eg:function(a,b,c){if(b<0||b>a.length)throw H.c(P.Z(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.c(P.Z(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.b3(a,0)])
return H.b(a.slice(b,c),[H.b3(a,0)])},
gaw:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.kH())},
dh:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.c(P.av(a))}return!1},
b1:function(a,b){if(!!a.immutable$list)H.r(P.z("sort"))
H.nq(a,b==null?J.o5():b)},
ef:function(a){return this.b1(a,null)},
E:function(a,b){var u
for(u=0;u<a.length;++u)if(J.U(a[u],b))return!0
return!1},
i:function(a){return P.kG(a,"[","]")},
gR:function(a){return new J.a6(a,a.length)},
gJ:function(a){return H.cj(a)},
gl:function(a){return a.length},
sl:function(a,b){var u="newLength"
if(!!a.fixed$length)H.r(P.z("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.kv(b,u,null))
if(b<0)throw H.c(P.Z(b,0,null,u,null))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bS(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.r(P.z("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bS(a,b))
a[b]=c},
$iq:1,
$ii:1,
$io:1}
J.kJ.prototype={}
J.a6.prototype={
gB:function(a){return this.d},
t:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.m(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.c7.prototype={
aV:function(a,b){var u
if(typeof b!=="number")throw H.c(H.af(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbv(b)
if(this.gbv(a)===u)return 0
if(this.gbv(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbv:function(a){return a===0?1/a<0:a<0},
i7:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.z(""+a+".toInt()"))},
cg:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.z(""+a+".floor()"))},
ao:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.z(""+a+".round()"))},
e6:function(a,b){var u
if(b>20)throw H.c(P.Z(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbv(a))return"-"+u
return u},
bj:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.Z(b,2,36,"radix",null))
u=a.toString(b)
if(C.a.Y(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.r(P.z("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.d(t,1)
u=t[1]
if(3>=s)return H.d(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.a.w("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gJ:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
bm:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
em:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d8(a,b)},
a6:function(a,b){return(a|0)===a?a/b|0:this.d8(a,b)},
d8:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.z("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
aS:function(a,b){var u
if(a>0)u=this.d7(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
h1:function(a,b){if(b<0)throw H.c(H.af(b))
return this.d7(a,b)},
d7:function(a,b){return b>31?0:a>>>b},
$iL:1,
$iac:1}
J.da.prototype={$iv:1}
J.d9.prototype={}
J.be.prototype={
Y:function(a,b){if(b<0)throw H.c(H.bS(a,b))
if(b>=a.length)H.r(H.bS(a,b))
return a.charCodeAt(b)},
G:function(a,b){if(b>=a.length)throw H.c(H.bS(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(typeof b!=="string")throw H.c(P.kv(b,null,null))
return a+b},
aY:function(a,b,c,d){var u,t
c=P.b_(b,c,a.length)
if(typeof c!=="number"||Math.floor(c)!==c)H.r(H.af(c))
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a9:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.Z(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a5:function(a,b){return this.a9(a,b,0)},
q:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.af(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.O()
if(b<0)throw H.c(P.ds(b,null))
if(b>c)throw H.c(P.ds(b,null))
if(c>a.length)throw H.c(P.ds(c,null))
return a.substring(b,c)},
aa:function(a,b){return this.q(a,b,null)},
ia:function(a){return a.toLowerCase()},
w:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.R)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
am:function(a,b){var u=b-a.length
if(u<=0)return a
return this.w(" ",u)+a},
bu:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.Z(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
dR:function(a,b){return this.bu(a,b,0)},
hh:function(a,b,c){var u=a.length
if(c>u)throw H.c(P.Z(c,0,u,null,null))
return H.mc(a,b,c)},
E:function(a,b){return this.hh(a,b,0)},
aV:function(a,b){var u
if(typeof b!=="string")throw H.c(H.af(b))
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
h:function(a,b){return C.a.Y(this.a,b)},
$aq:function(){return[P.v]},
$ax:function(){return[P.v]},
$ai:function(){return[P.v]},
$ao:function(){return[P.v]}}
H.q.prototype={}
H.df.prototype={
gR:function(a){return new H.bg(this,this.gl(this))},
bD:function(a,b){return this.ej(0,b)}}
H.bg.prototype={
gB:function(a){return this.d},
t:function(){var u,t=this,s=t.a,r=J.as(s),q=r.gl(s)
if(t.b!=q)throw H.c(P.av(s))
u=t.c
if(typeof q!=="number")return H.t(q)
if(u>=q){t.d=null
return!1}t.d=r.K(s,u);++t.c
return!0}}
H.ca.prototype={
gR:function(a){return new H.h7(J.aM(this.a),this.b)},
gl:function(a){return J.ah(this.a)},
K:function(a,b){return this.b.$1(J.eV(this.a,b))},
$ai:function(a,b){return[b]}}
H.ft.prototype={$iq:1,
$aq:function(a,b){return[b]}}
H.h7.prototype={
t:function(){var u=this,t=u.b
if(t.t()){u.a=u.c.$1(t.gB(t))
return!0}u.a=null
return!1},
gB:function(a){return this.a}}
H.h8.prototype={
gl:function(a){return J.ah(this.a)},
K:function(a,b){return this.b.$1(J.eV(this.a,b))},
$aq:function(a,b){return[b]},
$adf:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.cv.prototype={
gR:function(a){return new H.je(J.aM(this.a),this.b)}}
H.je.prototype={
t:function(){var u,t
for(u=this.a,t=this.b;u.t();)if(t.$1(u.gB(u)))return!0
return!1},
gB:function(a){var u=this.a
return u.gB(u)}}
H.d6.prototype={}
H.iQ.prototype={
m:function(a,b,c){throw H.c(P.z("Cannot modify an unmodifiable list"))}}
H.dM.prototype={}
H.fe.prototype={
i:function(a){return P.kN(this)},
m:function(a,b,c){return H.mN()},
$iR:1}
H.ff.prototype={
gl:function(a){return this.a},
c3:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.c3(0,b))return
return this.cV(b)},
cV:function(a){return this.b[a]},
C:function(a,b){var u,t,s,r=this.c
for(u=r.length,t=0;t<u;++t){s=r[t]
b.$2(s,this.cV(s))}}}
H.iE.prototype={
al:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.hC.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fU.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.iP.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.ks.prototype={
$1:function(a){if(!!J.P(a).$ibw)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:8}
H.et.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.c0.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.cO(t==null?"unknown":t)+"'"},
gie:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.ij.prototype={}
H.ia.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cO(u)+"'"}}
H.bY.prototype={
u:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bY))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gJ:function(a){var u,t=this.c
if(t==null)u=H.cj(this.a)
else u=typeof t!=="object"?J.cS(t):H.cj(t)
return(u^H.cj(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.ck(u))+"'")}}
H.f8.prototype={
i:function(a){return this.a}}
H.hV.prototype={
i:function(a){return"RuntimeError: "+H.e(this.a)}}
H.I.prototype={
gl:function(a){return this.a},
ghE:function(a){return this.a===0},
ga2:function(a){return new H.fY(this,[H.b3(this,0)])},
gic:function(a){var u=this
return H.n3(u.ga2(u),new H.fT(u),H.b3(u,0),H.b3(u,1))},
c3:function(a,b){var u=this.b
if(u==null)return!1
return this.eI(u,b)},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bp(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bp(r,b)
s=t==null?null:t.b
return s}else return q.hC(b)},
hC:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.cX(r,s.dT(a))
t=s.dU(u,a)
if(t<0)return
return u[t].b},
m:function(a,b,c){var u,t,s=this
if(typeof b==="string"){u=s.b
s.cO(u==null?s.b=s.bU():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cO(t==null?s.c=s.bU():t,b,c)}else s.hD(b,c)},
hD:function(a,b){var u,t,s,r=this,q=r.d
if(q==null)q=r.d=r.bU()
u=r.dT(a)
t=r.cX(q,u)
if(t==null)r.bY(q,u,[r.bV(a,b)])
else{s=r.dU(t,a)
if(s>=0)t[s].b=b
else t.push(r.bV(a,b))}},
C:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.c(P.av(u))
t=t.c}},
cO:function(a,b,c){var u=this.bp(a,b)
if(u==null)this.bY(a,b,this.bV(b,c))
else u.b=c},
eT:function(){this.r=this.r+1&67108863},
bV:function(a,b){var u,t=this,s=new H.fX(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.eT()
return s},
dT:function(a){return J.cS(a)&0x3ffffff},
dU:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.U(a[t].a,b))return t
return-1},
i:function(a){return P.kN(this)},
bp:function(a,b){return a[b]},
cX:function(a,b){return a[b]},
bY:function(a,b,c){a[b]=c},
eM:function(a,b){delete a[b]},
eI:function(a,b){return this.bp(a,b)!=null},
bU:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bY(t,u,t)
this.eM(t,u)
return t}}
H.fT.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.b3(u,1),args:[H.b3(u,0)]}}}
H.fX.prototype={}
H.fY.prototype={
gl:function(a){return this.a.a},
gR:function(a){var u=this.a,t=new H.fZ(u,u.r)
t.c=u.e
return t}}
H.fZ.prototype={
gB:function(a){return this.d},
t:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.av(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.ka.prototype={
$1:function(a){return this.a(a)},
$S:8}
H.kb.prototype={
$2:function(a,b){return this.a(a,b)}}
H.kc.prototype={
$1:function(a){return this.a(a)}}
H.fS.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$inj:1}
H.cf.prototype={$icf:1}
H.bi.prototype={$ibi:1}
H.dj.prototype={
gl:function(a){return a.length},
$iA:1,
$aA:function(){}}
H.cg.prototype={
h:function(a,b){H.aK(b,a,a.length)
return a[b]},
m:function(a,b,c){H.aK(b,a,a.length)
a[b]=c},
$iq:1,
$aq:function(){return[P.L]},
$ax:function(){return[P.L]},
$ii:1,
$ai:function(){return[P.L]},
$io:1,
$ao:function(){return[P.L]}}
H.dk.prototype={
m:function(a,b,c){H.aK(b,a,a.length)
a[b]=c},
$iq:1,
$aq:function(){return[P.v]},
$ax:function(){return[P.v]},
$ii:1,
$ai:function(){return[P.v]},
$io:1,
$ao:function(){return[P.v]}}
H.hv.prototype={
h:function(a,b){H.aK(b,a,a.length)
return a[b]}}
H.hw.prototype={
h:function(a,b){H.aK(b,a,a.length)
return a[b]}}
H.hx.prototype={
h:function(a,b){H.aK(b,a,a.length)
return a[b]}}
H.hy.prototype={
h:function(a,b){H.aK(b,a,a.length)
return a[b]}}
H.hz.prototype={
h:function(a,b){H.aK(b,a,a.length)
return a[b]}}
H.dl.prototype={
gl:function(a){return a.length},
h:function(a,b){H.aK(b,a,a.length)
return a[b]}}
H.ch.prototype={
gl:function(a){return a.length},
h:function(a,b){H.aK(b,a,a.length)
return a[b]},
$ich:1,
$ibH:1}
H.cz.prototype={}
H.cA.prototype={}
H.cB.prototype={}
H.cC.prototype={}
P.jg.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:17}
P.jf.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.jh.prototype={
$0:function(){this.a.$0()}}
P.ji.prototype={
$0:function(){this.a.$0()}}
P.eA.prototype={
ew:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bR(new P.jO(this,b),0),a)
else throw H.c(P.z("`setTimeout()` not found."))},
ex:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bR(new P.jN(this,a,Date.now(),b),0),a)
else throw H.c(P.z("Periodic timer."))},
$idG:1}
P.jO.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.jN.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.em(u,q)}s.c=r
t.d.$1(s)}}
P.bK.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.e(this.a)+")"}}
P.bL.prototype={
gB:function(a){var u=this.c
if(u==null)return this.b
return u.gB(u)},
t:function(){var u,t,s,r,q=this
for(;!0;){u=q.c
if(u!=null)if(u.t())return!0
else q.c=null
t=function(a,b,c){var p,o=b
while(true)try{return a(o,p)}catch(n){p=n
o=c}}(q.a,0,1)
if(t instanceof P.bK){s=t.b
if(s===2){u=q.d
if(u==null||u.length===0){q.b=null
return!1}if(0>=u.length)return H.d(u,-1)
q.a=u.pop()
continue}else{u=t.a
if(s===3)throw u
else{r=J.aM(u)
if(!!r.$ibL){u=q.d
if(u==null)u=q.d=[]
u.push(q.a)
q.a=r.a
continue}else{q.c=r
continue}}}}else{q.b=t
return!0}}return!1}}
P.jK.prototype={
gR:function(a){return new P.bL(this.a())}}
P.dV.prototype={}
P.dB.prototype={}
P.id.prototype={}
P.dG.prototype={}
P.jX.prototype={}
P.k5.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dp():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u}}
P.jw.prototype={
i3:function(a){var u,t,s,r=null
try{if(C.f===$.ar){a.$0()
return}P.ou(r,r,this,a)}catch(s){u=H.ag(s)
t=H.l3(s)
P.m_(r,r,this,u,t)}},
i4:function(a,b){var u,t,s,r=null
try{if(C.f===$.ar){a.$1(b)
return}P.ov(r,r,this,a,b)}catch(s){u=H.ag(s)
t=H.l3(s)
P.m_(r,r,this,u,t)}},
i5:function(a,b){return this.i4(a,b,null)},
hf:function(a){return new P.jx(this,a)},
dl:function(a,b){return new P.jy(this,a,b)}}
P.jx.prototype={
$0:function(){return this.a.i3(this.b)}}
P.jy.prototype={
$1:function(a){return this.a.i5(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jt.prototype={
gR:function(a){var u=new P.ea(this,this.r)
u.c=this.e
return u},
gl:function(a){return this.a},
E:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.eG(b)
return t}},
eG:function(a){var u=this.d
if(u==null)return!1
return this.bL(this.cW(u,a),a)>=0},
n:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cP(u==null?s.b=P.kV():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cP(t==null?s.c=P.kV():t,b)}else return s.eA(0,b)},
eA:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.kV()
u=s.cR(b)
t=r[u]
if(t==null)r[u]=[s.bI(b)]
else{if(s.bL(t,b)>=0)return!1
t.push(s.bI(b))}return!0},
V:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fR(this.c,b)
else return this.fQ(0,b)},
fQ:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cW(r,b)
t=s.bL(u,b)
if(t<0)return!1
s.da(u.splice(t,1)[0])
return!0},
cP:function(a,b){if(a[b]!=null)return!1
a[b]=this.bI(b)
return!0},
fR:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.da(u)
delete a[b]
return!0},
cQ:function(){this.r=1073741823&this.r+1},
bI:function(a){var u,t=this,s=new P.ju(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cQ()
return s},
da:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cQ()},
cR:function(a){return J.cS(a)&1073741823},
cW:function(a,b){return a[this.cR(b)]},
bL:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.U(a[t].a,b))return t
return-1}}
P.ju.prototype={}
P.ea.prototype={
gB:function(a){return this.d},
t:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.av(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fP.prototype={}
P.h_.prototype={
$2:function(a,b){this.a.m(0,a,b)},
$S:3}
P.h0.prototype={$iq:1,$ii:1,$io:1}
P.x.prototype={
gR:function(a){return new H.bg(a,this.gl(a))},
K:function(a,b){return this.h(a,b)},
C:function(a,b){var u,t=this.gl(a)
if(typeof t!=="number")return H.t(t)
u=0
for(;u<t;++u){b.$1(this.h(a,u))
if(t!==this.gl(a))throw H.c(P.av(a))}},
i9:function(a,b){var u,t,s=this,r=H.b([],[H.oN(s,a,"x",0)])
C.b.sl(r,s.gl(a))
u=0
while(!0){t=s.gl(a)
if(typeof t!=="number")return H.t(t)
if(!(u<t))break
t=s.h(a,u)
if(u>=r.length)return H.d(r,u)
r[u]=t;++u}return r},
i8:function(a){return this.i9(a,!0)},
hv:function(a,b,c,d){var u
P.b_(b,c,this.gl(a))
for(u=b;u<c;++u)this.m(a,u,d)},
i:function(a){return P.kG(a,"[","]")}}
P.h4.prototype={}
P.h5.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:3}
P.a1.prototype={
C:function(a,b){var u,t
for(u=J.aM(this.ga2(a));u.t();){t=u.gB(u)
b.$2(t,this.h(a,t))}},
gl:function(a){return J.ah(this.ga2(a))},
i:function(a){return P.kN(a)},
$iR:1}
P.jP.prototype={
m:function(a,b,c){throw H.c(P.z("Cannot modify unmodifiable map"))}}
P.h6.prototype={
h:function(a,b){return J.bW(this.a,b)},
m:function(a,b,c){J.kt(this.a,b,c)},
C:function(a,b){J.lb(this.a,b)},
gl:function(a){return J.ah(this.a)},
i:function(a){return J.a5(this.a)},
$iR:1}
P.dN.prototype={}
P.jA.prototype={
a7:function(a,b){var u
for(u=J.aM(b);u.t();)this.n(0,u.gB(u))},
i:function(a){return P.kG(this,"{","}")},
K:function(a,b){var u,t,s
P.lz(b,"index")
for(u=P.nM(this,this.r),t=0;u.t();){s=u.d
if(b===t)return s;++t}throw H.c(P.N(b,this,"index",null,t))},
$iq:1,
$ii:1}
P.eb.prototype={}
P.eG.prototype={}
P.f4.prototype={
hJ:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.b_(a0,a1,b.length)
u=$.mu()
if(typeof a1!=="number")return H.t(a1)
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
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.S("")
g=r.a+=C.a.q(b,s,t)
r.a=g+H.bE(m)
s=n
continue}}throw H.c(P.V("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.a.q(b,s,a1)
f=g.length
if(q>=0)P.le(b,p,a1,q,o,f)
else{e=C.c.bm(f-1,4)+1
if(e===1)throw H.c(P.V(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.a.aY(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.le(b,p,a1,q,o,d)
else{e=C.c.bm(d,4)
if(e===1)throw H.c(P.V(c,b,a1))
if(e>1)b=C.a.aY(b,a1,a1,e===2?"==":"=")}return b}}
P.f5.prototype={}
P.fa.prototype={}
P.fg.prototype={}
P.fv.prototype={}
P.fM.prototype={
i:function(a){return this.a}}
P.fL.prototype={
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
default:p=o}if(p!=null){if(q==null)q=new P.S("")
if(r>b)q.a+=C.a.q(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.mF(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.iZ.prototype={
ghu:function(){return C.S}}
P.j0.prototype={
c4:function(a){var u,t,s,r=P.b_(0,null,a.length)
if(typeof r!=="number")return r.L()
u=r-0
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.jV(t)
if(s.eO(a,0,r)!==r)s.dc(J.mB(a,r-1),0)
return new Uint8Array(t.subarray(0,H.o2(0,s.b,t.length)))}}
P.jV.prototype={
dc:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
if(n.dc(r,C.a.G(a,p)))s=p}else if(r<=2047){q=n.b
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
P.j_.prototype={
c4:function(a){var u,t,s,r,q,p,o,n,m=P.nw(!1,a,0,null)
if(m!=null)return m
u=P.b_(0,null,J.ah(a))
t=P.m1(a,0,u)
if(t>0){s=P.cn(a,0,t)
if(t===u)return s
r=new P.S(s)
q=t
p=!1}else{q=0
r=null
p=!0}if(r==null)r=new P.S("")
o=new P.jU(!1,r)
o.c=p
o.hi(a,q,u)
if(o.e>0){H.r(P.V("Unfinished UTF-8 octet sequence",a,u))
r.a+=H.bE(65533)
o.f=o.e=o.d=0}n=r.a
return n.charCodeAt(0)==0?n:n}}
P.jU.prototype={
hi:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=this,k="Bad UTF-8 encoding 0x",j=l.d,i=l.e,h=l.f
l.f=l.e=l.d=0
$label0$0:for(u=J.as(a),t=l.b,s=b;!0;s=n){$label1$1:if(i>0){do{if(s===c)break $label0$0
r=u.h(a,s)
if(typeof r!=="number")return r.ad()
if((r&192)!==128){q=P.V(k+C.c.bj(r,16),a,s)
throw H.c(q)}else{j=(j<<6|r&63)>>>0;--i;++s}}while(i>0)
q=h-1
if(q<0||q>=4)return H.d(C.x,q)
if(j<=C.x[q]){q=P.V("Overlong encoding of 0x"+C.c.bj(j,16),a,s-h-1)
throw H.c(q)}if(j>1114111){q=P.V("Character outside valid Unicode range: 0x"+C.c.bj(j,16),a,s-h-1)
throw H.c(q)}if(!l.c||j!==65279)t.a+=H.bE(j)
l.c=!1}if(typeof c!=="number")return H.t(c)
q=s<c
for(;q;){p=P.m1(a,s,c)
if(p>0){l.c=!1
o=s+p
t.a+=P.cn(a,s,o)
if(o===c)break}else o=s
n=o+1
r=u.h(a,o)
if(typeof r!=="number")return r.O()
if(r<0){m=P.V("Negative UTF-8 code unit: -0x"+C.c.bj(-r,16),a,n-1)
throw H.c(m)}else{if((r&224)===192){j=r&31
i=1
h=1
continue $label0$0}if((r&240)===224){j=r&15
i=2
h=2
continue $label0$0}if((r&248)===240&&r<245){j=r&7
i=3
h=3
continue $label0$0}m=P.V(k+C.c.bj(r,16),a,n-1)
throw H.c(m)}}break $label0$0}if(i>0){l.d=j
l.e=i
l.f=h}}}
P.aL.prototype={}
P.ad.prototype={
u:function(a,b){if(b==null)return!1
return b instanceof P.ad&&this.a===b.a&&!0},
aV:function(a,b){return C.c.aV(this.a,b.a)},
gJ:function(a){var u=this.a
return(u^C.c.aS(u,30))&1073741823},
i:function(a){var u=this,t=P.mO(H.nf(u)),s=P.d1(H.nd(u)),r=P.d1(H.n9(u)),q=P.d1(H.na(u)),p=P.d1(H.nc(u)),o=P.d1(H.ne(u)),n=P.mP(H.nb(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.L.prototype={}
P.b9.prototype={
u:function(a,b){if(b==null)return!1
return b instanceof P.b9&&this.a===b.a},
gJ:function(a){return C.c.gJ(this.a)},
aV:function(a,b){return C.c.aV(this.a,b.a)},
i:function(a){var u,t,s,r=new P.fs(),q=this.a
if(q<0)return"-"+new P.b9(0-q).i(0)
u=r.$1(C.c.a6(q,6e7)%60)
t=r.$1(C.c.a6(q,1e6)%60)
s=new P.fr().$1(q%1e6)
return""+C.c.a6(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
P.fr.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.fs.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bw.prototype={}
P.dp.prototype={
i:function(a){return"Throw of null."}}
P.al.prototype={
gbK:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbJ:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbK()+o+u
if(!q.a)return t
s=q.gbJ()
r=P.kD(q.b)
return t+s+": "+r}}
P.bF.prototype={
gbK:function(){return"RangeError"},
gbJ:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.fO.prototype={
gbK:function(){return"RangeError"},
gbJ:function(){var u,t=this.b
if(typeof t!=="number")return t.O()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gl:function(a){return this.f}}
P.iR.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iN.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cm.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fd.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.kD(u)+"."}}
P.hF.prototype={
i:function(a){return"Out of Memory"},
$ibw:1}
P.dz.prototype={
i:function(a){return"Stack Overflow"},
$ibw:1}
P.fl.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.e3.prototype={
i:function(a){return"Exception: "+this.a}}
P.fF.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.a.q(f,0,75)+"...":f
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
k=""}j=C.a.q(f,m,n)
return h+l+j+k+"\n"+C.a.w(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.e(g)+")"):h}}
P.fH.prototype={}
P.v.prototype={}
P.i.prototype={
bD:function(a,b){return new H.cv(this,b,[H.l2(this,"i",0)])},
gl:function(a){var u,t=this.gR(this)
for(u=0;t.t();)++u
return u},
gaL:function(a){var u,t=this.gR(this)
if(!t.t())throw H.c(H.kH())
u=t.gB(t)
if(t.t())throw H.c(H.mU())
return u},
K:function(a,b){var u,t,s
P.lz(b,"index")
for(u=this.gR(this),t=0;u.t();){s=u.gB(u)
if(b===t)return s;++t}throw H.c(P.N(b,this,"index",null,t))},
i:function(a){return P.mT(this,"(",")")}}
P.fQ.prototype={}
P.o.prototype={$iq:1,$ii:1}
P.R.prototype={}
P.bj.prototype={
gJ:function(a){return P.a2.prototype.gJ.call(this,this)},
i:function(a){return"null"}}
P.ac.prototype={}
P.a2.prototype={constructor:P.a2,$ia2:1,
u:function(a,b){return this===b},
gJ:function(a){return H.cj(this)},
i:function(a){return"Instance of '"+H.e(H.ck(this))+"'"},
toString:function(){return this.i(this)}}
P.h.prototype={}
P.S.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
P.iX.prototype={
$2:function(a,b){var u,t,s,r=J.cL(b).dR(b,"=")
if(r===-1){if(b!=="")J.kt(a,P.kZ(b,0,b.length,this.a,!0),"")}else if(r!==0){u=C.a.q(b,0,r)
t=C.a.aa(b,r+1)
s=this.a
J.kt(a,P.kZ(u,0,u.length,s,!0),P.kZ(t,0,t.length,s,!0))}return a}}
P.iT.prototype={
$2:function(a,b){throw H.c(P.V("Illegal IPv4 address, "+a,this.a,b))}}
P.iV.prototype={
$2:function(a,b){throw H.c(P.V("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.iW.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.cN(C.a.q(this.b,a,b),null,16)
if(typeof u!=="number")return u.O()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u}}
P.bM.prototype={
ge8:function(){return this.b},
gci:function(a){var u=this.c
if(u==null)return""
if(C.a.a5(u,"["))return C.a.q(u,1,u.length-1)
return u},
gby:function(a){var u=this.d
if(u==null)return P.lT(this.a)
return u},
gct:function(a){var u=this.f
return u==null?"":u},
gdM:function(){var u=this.r
return u==null?"":u},
cu:function(a,b){var u,t,s,r=this,q=r.a,p=q==="file",o=r.b,n=r.d,m=r.c
if(!(m!=null))m=o.length!==0||n!=null||p?"":null
u=r.e
if(!p)t=m!=null&&u.length!==0
else t=!0
if(t&&!C.a.a5(u,"/"))u="/"+u
s=P.kX(null,0,0,b)
return new P.bM(q,o,m,n,u,s,r.r)},
gbg:function(){var u,t=this.Q
if(t==null){t=this.f
u=P.h
u=this.Q=new P.dN(P.lK(t==null?"":t),[u,u])
t=u}return t},
gdN:function(){return this.c!=null},
gdQ:function(){return this.f!=null},
gdO:function(){return this.r!=null},
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
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.P(b).$ikR)if(s.a==b.gbE())if(s.c!=null===b.gdN())if(s.b==b.ge8())if(s.gci(s)==b.gci(b))if(s.gby(s)==b.gby(b))if(s.e===b.ge1(b)){u=s.f
t=u==null
if(!t===b.gdQ()){if(t)u=""
if(u===b.gct(b)){u=s.r
t=u==null
if(!t===b.gdO()){if(t)u=""
u=u===b.gdM()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gJ:function(a){var u=this.z
return u==null?this.z=C.a.gJ(this.i(0)):u},
$ikR:1,
gbE:function(){return this.a},
ge1:function(a){return this.e}}
P.jQ.prototype={
$1:function(a){throw H.c(P.V("Invalid port",this.a,this.b+1))}}
P.jR.prototype={
$1:function(a){return P.eH(C.a1,a,C.e,!1)}}
P.jT.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.e(P.eH(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.e(P.eH(C.h,b,C.e,!0))}}}
P.jS.prototype={
$2:function(a,b){var u,t
if(b==null||typeof b==="string")this.a.$2(a,b)
else for(u=J.aM(b),t=this.a;u.t();)t.$2(a,u.gB(u))}}
P.iS.prototype={
ge7:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.d(o,0)
u=q.a
o=o[0]+1
t=C.a.bu(u,"?",o)
s=u.length
if(t>=0){r=P.cH(u,t+1,s,C.l,!1)
s=t}else r=p
return q.c=new P.jm("data",p,p,p,P.cH(u,o,s,C.B,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.d(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.k0.prototype={
$1:function(a){return new Uint8Array(96)}}
P.k_.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.d(u,a)
u=u[a]
J.mC(u,0,96,b)
return u},
$S:18}
P.k1.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.a.G(b,s)^96
if(r>=t)return H.d(a,r)
a[r]=c}}}
P.k2.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.a.G(b,0),t=C.a.G(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.d(a,r)
a[r]=c}}}
P.jD.prototype={
gdN:function(){return this.c>0},
gdP:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.D()
t=this.e
if(typeof t!=="number")return H.t(t)
t=u+1<t
u=t}else u=!1
return u},
gdQ:function(){var u=this.f
if(typeof u!=="number")return u.O()
return u<this.r},
gdO:function(){return this.r<this.a.length},
gcY:function(){return this.b===4&&C.a.a5(this.a,"http")},
gcZ:function(){return this.b===5&&C.a.a5(this.a,"https")},
gbE:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gcY())q=t.x="http"
else if(t.gcZ()){t.x="https"
q="https"}else if(q===4&&C.a.a5(t.a,s)){t.x=s
q=s}else if(q===7&&C.a.a5(t.a,r)){t.x=r
q=r}else{q=C.a.q(t.a,0,q)
t.x=q}return q},
ge8:function(){var u=this.c,t=this.b+3
return u>t?C.a.q(this.a,t,u-1):""},
gci:function(a){var u=this.c
return u>0?C.a.q(this.a,u,this.d):""},
gby:function(a){var u,t=this
if(t.gdP()){u=t.d
if(typeof u!=="number")return u.D()
return P.cN(C.a.q(t.a,u+1,t.e),null,null)}if(t.gcY())return 80
if(t.gcZ())return 443
return 0},
ge1:function(a){return C.a.q(this.a,this.e,this.f)},
gct:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.O()
return u<t?C.a.q(this.a,u+1,t):""},
gdM:function(){var u=this.r,t=this.a
return u<t.length?C.a.aa(t,u+1):""},
gbg:function(){var u=this,t=u.f
if(typeof t!=="number")return t.O()
if(t>=u.r)return C.a2
t=P.h
return new P.dN(P.lK(u.gct(u)),[t,t])},
cu:function(a,b){var u,t,s,r,q,p=this,o=null,n=p.gbE(),m=n==="file",l=p.c,k=l>0?C.a.q(p.a,p.b+3,l):"",j=p.gdP()?p.gby(p):o
l=p.c
if(l>0)u=C.a.q(p.a,l,p.d)
else u=k.length!==0||j!=null||m?"":o
l=p.a
t=C.a.q(l,p.e,p.f)
if(!m)s=u!=null&&t.length!==0
else s=!0
if(s&&!C.a.a5(t,"/"))t="/"+t
r=P.kX(o,0,0,b)
s=p.r
q=s<l.length?C.a.aa(l,s+1):o
return new P.bM(n,k,u,j,t,r,q)},
gJ:function(a){var u=this.y
return u==null?this.y=C.a.gJ(this.a):u},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.P(b).$ikR&&this.a===b.i(0)},
i:function(a){return this.a},
$ikR:1}
P.jm.prototype={}
W.p.prototype={}
W.eW.prototype={
gl:function(a){return a.length}}
W.eX.prototype={
i:function(a){return String(a)}}
W.eY.prototype={
i:function(a){return String(a)}}
W.br.prototype={$ibr:1}
W.bs.prototype={$ibs:1}
W.bu.prototype={
cB:function(a,b,c){if(c!=null)return a.getContext(b,P.oE(c))
return a.getContext(b)},
ea:function(a,b){return this.cB(a,b,null)},
$ibu:1}
W.b8.prototype={
gl:function(a){return a.length}}
W.fh.prototype={
gl:function(a){return a.length}}
W.H.prototype={$iH:1}
W.c1.prototype={
gl:function(a){return a.length}}
W.fi.prototype={}
W.ai.prototype={}
W.aw.prototype={}
W.fj.prototype={
gl:function(a){return a.length}}
W.fk.prototype={
gl:function(a){return a.length}}
W.fn.prototype={
gl:function(a){return a.length}}
W.am.prototype={$iam:1}
W.fo.prototype={
i:function(a){return String(a)}}
W.d3.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[[P.a9,P.ac]]},
$iA:1,
$aA:function(){return[[P.a9,P.ac]]},
$ax:function(){return[[P.a9,P.ac]]},
$ii:1,
$ai:function(){return[[P.a9,P.ac]]},
$io:1,
$ao:function(){return[[P.a9,P.ac]]}}
W.d4.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gaK(a))+" x "+H.e(this.gaE(a))},
u:function(a,b){var u
if(b==null)return!1
u=J.P(b)
return!!u.$ia9&&a.left===u.gbw(b)&&a.top===u.gbB(b)&&this.gaK(a)===u.gaK(b)&&this.gaE(a)===u.gaE(b)},
gJ:function(a){return W.lR(C.d.gJ(a.left),C.d.gJ(a.top),C.d.gJ(this.gaK(a)),C.d.gJ(this.gaE(a)))},
gdm:function(a){return a.bottom},
gaE:function(a){return a.height},
gbw:function(a){return a.left},
gcv:function(a){return a.right},
gbB:function(a){return a.top},
gaK:function(a){return a.width},
$ia9:1,
$aa9:function(){return[P.ac]}}
W.fp.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[P.h]},
$iA:1,
$aA:function(){return[P.h]},
$ax:function(){return[P.h]},
$ii:1,
$ai:function(){return[P.h]},
$io:1,
$ao:function(){return[P.h]}}
W.fq.prototype={
gl:function(a){return a.length}}
W.jk.prototype={
gl:function(a){return this.b.length},
h:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
m:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
this.a.replaceChild(c,u[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gR:function(a){var u=this.i8(this)
return new J.a6(u,u.length)},
$aq:function(){return[W.Q]},
$ax:function(){return[W.Q]},
$ai:function(){return[W.Q]},
$ao:function(){return[W.Q]}}
W.Q.prototype={
ghe:function(a){return new W.jn(a)},
gc2:function(a){return new W.jk(a,a.children)},
gdr:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.O()
if(s<0)s=-s*0
if(typeof r!=="number")return r.O()
if(r<0)r=-r*0
return new P.a9(u,t,s,r,[P.ac])},
i:function(a){return a.localName},
ak:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.ll
if(u==null){u=H.b([],[W.aW])
t=new W.dn(u)
u.push(W.lQ(null))
u.push(W.lS())
$.ll=t
d=t}else d=u
u=$.lk
if(u==null){u=new W.eI(d)
$.lk=u
c=u}else{u.a=d
c=u}}if($.aQ==null){u=document
t=u.implementation.createHTMLDocument("")
$.aQ=t
$.kC=t.createRange()
s=$.aQ.createElement("base")
s.href=u.baseURI
$.aQ.head.appendChild(s)}u=$.aQ
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.aQ
if(!!this.$ibs)r=u.body
else{r=u.createElement(a.tagName)
$.aQ.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.b.E(C.a_,a.tagName)){$.kC.selectNodeContents(r)
q=$.kC.createContextualFragment(b)}else{r.innerHTML=b
q=$.aQ.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.aQ.body
if(r==null?u!=null:r!==u)J.lc(r)
c.cC(q)
document.adoptNode(q)
return q},
hl:function(a,b,c){return this.ak(a,b,c,null)},
ec:function(a,b){a.textContent=null
a.appendChild(this.ak(a,b,null,null))},
$iQ:1,
ge4:function(a){return a.tagName}}
W.fu.prototype={
$1:function(a){return!!J.P(a).$iQ}}
W.k.prototype={$ik:1}
W.f.prototype={
h9:function(a,b,c,d){if(c!=null)this.eB(a,b,c,!1)},
eB:function(a,b,c,d){return a.addEventListener(b,H.bR(c,1),!1)}}
W.an.prototype={$ian:1}
W.c4.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.an]},
$iA:1,
$aA:function(){return[W.an]},
$ax:function(){return[W.an]},
$ii:1,
$ai:function(){return[W.an]},
$io:1,
$ao:function(){return[W.an]},
$ic4:1}
W.fA.prototype={
gl:function(a){return a.length}}
W.fE.prototype={
gl:function(a){return a.length}}
W.ax.prototype={$iax:1}
W.fK.prototype={
gl:function(a){return a.length}}
W.c6.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.C]},
$iA:1,
$aA:function(){return[W.C]},
$ax:function(){return[W.C]},
$ii:1,
$ai:function(){return[W.C]},
$io:1,
$ao:function(){return[W.C]}}
W.aS.prototype={$iaS:1,
gds:function(a){return a.data}}
W.by.prototype={$iby:1}
W.bA.prototype={$ibA:1}
W.h2.prototype={
i:function(a){return String(a)}}
W.ho.prototype={
gl:function(a){return a.length}}
W.cd.prototype={$icd:1}
W.hp.prototype={
h:function(a,b){return P.b2(a.get(b))},
C:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b2(u.value[1]))}},
ga2:function(a){var u=H.b([],[P.h])
this.C(a,new W.hq(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.z("Not supported"))},
$aa1:function(){return[P.h,null]},
$iR:1,
$aR:function(){return[P.h,null]}}
W.hq.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hr.prototype={
h:function(a,b){return P.b2(a.get(b))},
C:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b2(u.value[1]))}},
ga2:function(a){var u=H.b([],[P.h])
this.C(a,new W.hs(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.z("Not supported"))},
$aa1:function(){return[P.h,null]},
$iR:1,
$aR:function(){return[P.h,null]}}
W.hs.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aA.prototype={$iaA:1}
W.ht.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aA]},
$iA:1,
$aA:function(){return[W.aA]},
$ax:function(){return[W.aA]},
$ii:1,
$ai:function(){return[W.aA]},
$io:1,
$ao:function(){return[W.aA]}}
W.aB.prototype={$iaB:1}
W.a4.prototype={
gaL:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.lC("No elements"))
if(t>1)throw H.c(P.lC("More than one element"))
return u.firstChild},
a7:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
m:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.d(t,b)
u.replaceChild(c,t[b])},
gR:function(a){var u=this.a.childNodes
return new W.d7(u,u.length)},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$aq:function(){return[W.C]},
$ax:function(){return[W.C]},
$ai:function(){return[W.C]},
$ao:function(){return[W.C]}}
W.C.prototype={
hZ:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
i1:function(a,b){var u,t
try{u=a.parentNode
J.mz(u,b,a)}catch(t){H.ag(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.ei(a):u},
fS:function(a,b,c){return a.replaceChild(b,c)},
$iC:1}
W.dm.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.C]},
$iA:1,
$aA:function(){return[W.C]},
$ax:function(){return[W.C]},
$ii:1,
$ai:function(){return[W.C]},
$io:1,
$ao:function(){return[W.C]}}
W.aC.prototype={$iaC:1,
gl:function(a){return a.length}}
W.hI.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aC]},
$iA:1,
$aA:function(){return[W.aC]},
$ax:function(){return[W.aC]},
$ii:1,
$ai:function(){return[W.aC]},
$io:1,
$ao:function(){return[W.aC]}}
W.hT.prototype={
h:function(a,b){return P.b2(a.get(b))},
C:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b2(u.value[1]))}},
ga2:function(a){var u=H.b([],[P.h])
this.C(a,new W.hU(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.z("Not supported"))},
$aa1:function(){return[P.h,null]},
$iR:1,
$aR:function(){return[P.h,null]}}
W.hU.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hW.prototype={
gl:function(a){return a.length}}
W.aE.prototype={$iaE:1}
W.i6.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aE]},
$iA:1,
$aA:function(){return[W.aE]},
$ax:function(){return[W.aE]},
$ii:1,
$ai:function(){return[W.aE]},
$io:1,
$ao:function(){return[W.aE]}}
W.aF.prototype={$iaF:1}
W.i7.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aF]},
$iA:1,
$aA:function(){return[W.aF]},
$ax:function(){return[W.aF]},
$ii:1,
$ai:function(){return[W.aF]},
$io:1,
$ao:function(){return[W.aF]}}
W.aG.prototype={$iaG:1,
gl:function(a){return a.length}}
W.ib.prototype={
h:function(a,b){return a.getItem(b)},
m:function(a,b,c){a.setItem(b,c)},
C:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga2:function(a){var u=H.b([],[P.h])
this.C(a,new W.ic(u))
return u},
gl:function(a){return a.length},
$aa1:function(){return[P.h,P.h]},
$iR:1,
$aR:function(){return[P.h,P.h]}}
W.ic.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ap.prototype={$iap:1}
W.dC.prototype={
ak:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bG(a,b,c,d)
u=W.mQ("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.a4(t).a7(0,new W.a4(u))
return t}}
W.ig.prototype={
ak:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bG(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.F.ak(u.createElement("table"),b,c,d)
u.toString
u=new W.a4(u)
s=u.gaL(u)
s.toString
u=new W.a4(s)
r=u.gaL(u)
t.toString
r.toString
new W.a4(t).a7(0,new W.a4(r))
return t}}
W.ih.prototype={
ak:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bG(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.F.ak(u.createElement("table"),b,c,d)
u.toString
u=new W.a4(u)
s=u.gaL(u)
t.toString
s.toString
new W.a4(t).a7(0,new W.a4(s))
return t}}
W.co.prototype={$ico:1}
W.aH.prototype={$iaH:1}
W.aq.prototype={$iaq:1}
W.ik.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aq]},
$iA:1,
$aA:function(){return[W.aq]},
$ax:function(){return[W.aq]},
$ii:1,
$ai:function(){return[W.aq]},
$io:1,
$ao:function(){return[W.aq]}}
W.il.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aH]},
$iA:1,
$aA:function(){return[W.aH]},
$ax:function(){return[W.aH]},
$ii:1,
$ai:function(){return[W.aH]},
$io:1,
$ao:function(){return[W.aH]}}
W.ix.prototype={
gl:function(a){return a.length}}
W.aI.prototype={$iaI:1}
W.bG.prototype={$ibG:1}
W.iB.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aI]},
$iA:1,
$aA:function(){return[W.aI]},
$ax:function(){return[W.aI]},
$ii:1,
$ai:function(){return[W.aI]},
$io:1,
$ao:function(){return[W.aI]}}
W.iC.prototype={
gl:function(a){return a.length}}
W.bk.prototype={}
W.iY.prototype={
i:function(a){return String(a)}}
W.jd.prototype={
gl:function(a){return a.length}}
W.bn.prototype={
gho:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.z("deltaY is not supported"))},
ghn:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.z("deltaX is not supported"))},
$ibn:1}
W.cw.prototype={
fT:function(a,b){return a.requestAnimationFrame(H.bR(b,1))},
eN:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.jl.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.H]},
$iA:1,
$aA:function(){return[W.H]},
$ax:function(){return[W.H]},
$ii:1,
$ai:function(){return[W.H]},
$io:1,
$ao:function(){return[W.H]}}
W.dY.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
u:function(a,b){var u
if(b==null)return!1
u=J.P(b)
return!!u.$ia9&&a.left===u.gbw(b)&&a.top===u.gbB(b)&&a.width===u.gaK(b)&&a.height===u.gaE(b)},
gJ:function(a){return W.lR(C.d.gJ(a.left),C.d.gJ(a.top),C.d.gJ(a.width),C.d.gJ(a.height))},
gaE:function(a){return a.height},
gaK:function(a){return a.width}}
W.jq.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.ax]},
$iA:1,
$aA:function(){return[W.ax]},
$ax:function(){return[W.ax]},
$ii:1,
$ai:function(){return[W.ax]},
$io:1,
$ao:function(){return[W.ax]}}
W.eg.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.C]},
$iA:1,
$aA:function(){return[W.C]},
$ax:function(){return[W.C]},
$ii:1,
$ai:function(){return[W.C]},
$io:1,
$ao:function(){return[W.C]}}
W.jE.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aG]},
$iA:1,
$aA:function(){return[W.aG]},
$ax:function(){return[W.aG]},
$ii:1,
$ai:function(){return[W.aG]},
$io:1,
$ao:function(){return[W.aG]}}
W.jI.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.ap]},
$iA:1,
$aA:function(){return[W.ap]},
$ax:function(){return[W.ap]},
$ii:1,
$ai:function(){return[W.ap]},
$io:1,
$ao:function(){return[W.ap]}}
W.jj.prototype={
C:function(a,b){var u,t,s,r,q
for(u=this.ga2(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.m)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga2:function(a){var u,t,s,r=this.a.attributes,q=H.b([],[P.h])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.d(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q},
$aa1:function(){return[P.h,P.h]},
$aR:function(){return[P.h,P.h]}}
W.jn.prototype={
h:function(a,b){return this.a.getAttribute(b)},
m:function(a,b,c){this.a.setAttribute(b,c)},
gl:function(a){return this.ga2(this).length}}
W.jo.prototype={}
W.jp.prototype={
$1:function(a){return this.a.$1(a)}}
W.cx.prototype={
er:function(a){var u
if($.cy.ghE($.cy)){for(u=0;u<262;++u)$.cy.m(0,C.Z[u],W.oP())
for(u=0;u<12;++u)$.cy.m(0,C.p[u],W.oQ())}},
aT:function(a){return $.mv().E(0,W.c2(a))},
au:function(a,b,c){var u=$.cy.h(0,H.e(W.c2(a))+"::"+b)
if(u==null)u=$.cy.h(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$iaW:1}
W.M.prototype={
gR:function(a){return new W.d7(a,this.gl(a))}}
W.dn.prototype={
aT:function(a){return C.b.dh(this.a,new W.hB(a))},
au:function(a,b,c){return C.b.dh(this.a,new W.hA(a,b,c))},
$iaW:1}
W.hB.prototype={
$1:function(a){return a.aT(this.a)}}
W.hA.prototype={
$1:function(a){return a.au(this.a,this.b,this.c)}}
W.eo.prototype={
ev:function(a,b,c,d){var u,t,s
this.a.a7(0,c)
u=b.bD(0,new W.jB())
t=b.bD(0,new W.jC())
this.b.a7(0,u)
s=this.c
s.a7(0,C.y)
s.a7(0,t)},
aT:function(a){return this.a.E(0,W.c2(a))},
au:function(a,b,c){var u=this,t=W.c2(a),s=u.c
if(s.E(0,H.e(t)+"::"+b))return u.d.hc(c)
else if(s.E(0,"*::"+b))return u.d.hc(c)
else{s=u.b
if(s.E(0,H.e(t)+"::"+b))return!0
else if(s.E(0,"*::"+b))return!0
else if(s.E(0,H.e(t)+"::*"))return!0
else if(s.E(0,"*::*"))return!0}return!1},
$iaW:1}
W.jB.prototype={
$1:function(a){return!C.b.E(C.p,a)}}
W.jC.prototype={
$1:function(a){return C.b.E(C.p,a)}}
W.jL.prototype={
au:function(a,b,c){if(this.el(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.E(0,b)
return!1}}
W.jM.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)}}
W.jJ.prototype={
aT:function(a){var u=J.P(a)
if(!!u.$icl)return!1
u=!!u.$il
if(u&&W.c2(a)==="foreignObject")return!1
if(u)return!0
return!1},
au:function(a,b,c){if(b==="is"||C.a.a5(b,"on"))return!1
return this.aT(a)},
$iaW:1}
W.d7.prototype={
t:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.bW(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gB:function(a){return this.d}}
W.aW.prototype={}
W.jz.prototype={}
W.eI.prototype={
cC:function(a){new W.jW(this).$2(a,null)},
b7:function(a,b){if(b==null)J.lc(a)
else b.removeChild(a)},
fX:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.mD(a)
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
try{t=J.a5(a)}catch(r){H.ag(r)}try{s=W.c2(a)
this.fW(a,b,p,t,s,o,n)}catch(r){if(H.ag(r) instanceof P.al)throw r
else{this.b7(a,b)
window
q="Removing corrupted element "+H.e(t)
if(typeof console!="undefined")window.console.warn(q)}}},
fW:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=this
if(c){p.b7(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!p.a.aT(a)){p.b7(a,b)
window
u="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!p.a.au(a,"is",g)){p.b7(a,b)
window
u="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga2(f)
t=H.b(u.slice(0),[H.b3(u,0)])
for(s=f.ga2(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.d(t,s)
r=t[s]
if(!p.a.au(a,J.mG(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.e(e)+" "+r+'="'+H.e(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.P(a).$ico)p.cC(a.content)}}
W.jW.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.fX(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.b7(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ag(s)
r=u
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=t}}}
W.dX.prototype={}
W.dZ.prototype={}
W.e_.prototype={}
W.e0.prototype={}
W.e1.prototype={}
W.e4.prototype={}
W.e5.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.ee.prototype={}
W.ef.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.el.prototype={}
W.em.prototype={}
W.en.prototype={}
W.cD.prototype={}
W.cE.prototype={}
W.ep.prototype={}
W.eq.prototype={}
W.eu.prototype={}
W.ey.prototype={}
W.ez.prototype={}
W.cF.prototype={}
W.cG.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eR.prototype={}
W.eS.prototype={}
P.jF.prototype={
cf:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
t.push(a)
this.b.push(null)
return s},
bl:function(a){var u,t,s,r,q,p=this,o={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.P(a)
if(!!u.$iad)return new Date(a.a)
if(!!u.$inj)throw H.c(P.iO("structured clone of RegExp"))
if(!!u.$ian)return a
if(!!u.$ibr)return a
if(!!u.$ic4)return a
if(!!u.$iaS)return a
if(!!u.$icf||!!u.$ibi||!!u.$icd)return a
if(!!u.$iR){t=p.cf(a)
s=p.b
r=s.length
if(t>=r)return H.d(s,t)
q=o.a=s[t]
if(q!=null)return q
q={}
o.a=q
if(t>=r)return H.d(s,t)
s[t]=q
u.C(a,new P.jG(o,p))
return o.a}if(!!u.$io){t=p.cf(a)
o=p.b
if(t>=o.length)return H.d(o,t)
q=o[t]
if(q!=null)return q
return p.hk(a,t)}if(!!u.$imX){t=p.cf(a)
u=p.b
s=u.length
if(t>=s)return H.d(u,t)
q=o.b=u[t]
if(q!=null)return q
q={}
o.b=q
if(t>=s)return H.d(u,t)
u[t]=q
p.hA(a,new P.jH(o,p))
return o.b}throw H.c(P.iO("structured clone of other type"))},
hk:function(a,b){var u,t=J.as(a),s=t.gl(a),r=new Array(s),q=this.b
if(b>=q.length)return H.d(q,b)
q[b]=r
if(typeof s!=="number")return H.t(s)
u=0
for(;u<s;++u){q=this.bl(t.h(a,u))
if(u>=r.length)return H.d(r,u)
r[u]=q}return r}}
P.jG.prototype={
$2:function(a,b){this.a.a[a]=this.b.bl(b)},
$S:3}
P.jH.prototype={
$2:function(a,b){this.a.b[a]=this.b.bl(b)},
$S:3}
P.eF.prototype={$iaS:1,
gds:function(a){return this.a}}
P.k6.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.ex.prototype={
hA:function(a,b){var u,t,s,r
for(u=Object.keys(a),t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,a[r])}}}
P.fB.prototype={
gb4:function(){var u=this.b,t=H.l2(u,"x",0)
return new H.ca(new H.cv(u,new P.fC(),[t]),new P.fD(),[t,W.Q])},
C:function(a,b){C.b.C(P.h1(this.gb4(),!1,W.Q),b)},
m:function(a,b,c){var u=this.gb4()
J.mE(u.b.$1(J.eV(u.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.ah(this.gb4().a)},
h:function(a,b){var u=this.gb4()
return u.b.$1(J.eV(u.a,b))},
gR:function(a){var u=P.h1(this.gb4(),!1,W.Q)
return new J.a6(u,u.length)},
$aq:function(){return[W.Q]},
$ax:function(){return[W.Q]},
$ai:function(){return[W.Q]},
$ao:function(){return[W.Q]}}
P.fC.prototype={
$1:function(a){return!!J.P(a).$iQ}}
P.fD.prototype={
$1:function(a){return H.j(a,"$iQ")}}
P.jv.prototype={
gcv:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.t(t)
return u+t},
gdm:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.t(t)
return u+t},
i:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
u:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.P(b)
if(!!u.$ia9){t=q.a
if(t==u.gbw(b)){s=q.b
if(s==u.gbB(b)){r=q.c
if(typeof t!=="number")return t.D()
if(typeof r!=="number")return H.t(r)
if(t+r===u.gcv(b)){t=q.d
if(typeof s!=="number")return s.D()
if(typeof t!=="number")return H.t(t)
u=s+t===u.gdm(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gJ:function(a){var u=this,t=u.a,s=J.cS(t),r=u.b,q=J.cS(r),p=u.c
if(typeof t!=="number")return t.D()
if(typeof p!=="number")return H.t(p)
p=C.c.gJ(t+p)
t=u.d
if(typeof r!=="number")return r.D()
if(typeof t!=="number")return H.t(t)
t=C.c.gJ(r+t)
return P.nL(P.js(P.js(P.js(P.js(0,s),q),p),t))}}
P.a9.prototype={
gbw:function(a){return this.a},
gbB:function(a){return this.b},
gaK:function(a){return this.c},
gaE:function(a){return this.d}}
P.aT.prototype={$iaT:1}
P.fW.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
K:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.aT]},
$ax:function(){return[P.aT]},
$ii:1,
$ai:function(){return[P.aT]},
$io:1,
$ao:function(){return[P.aT]}}
P.aX.prototype={$iaX:1}
P.hD.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
K:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.aX]},
$ax:function(){return[P.aX]},
$ii:1,
$ai:function(){return[P.aX]},
$io:1,
$ao:function(){return[P.aX]}}
P.hL.prototype={
gl:function(a){return a.length}}
P.cl.prototype={$icl:1}
P.ie.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
K:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.h]},
$ax:function(){return[P.h]},
$ii:1,
$ai:function(){return[P.h]},
$io:1,
$ao:function(){return[P.h]}}
P.l.prototype={
gc2:function(a){return new P.fB(a,new W.a4(a))},
ak:function(a,b,c,d){var u,t,s,r,q,p=H.b([],[W.aW])
p.push(W.lQ(null))
p.push(W.lS())
p.push(new W.jJ())
c=new W.eI(new W.dn(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.r).hl(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.a4(s)
q=p.gaL(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$il:1}
P.b0.prototype={$ib0:1}
P.iD.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
K:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.b0]},
$ax:function(){return[P.b0]},
$ii:1,
$ai:function(){return[P.b0]},
$io:1,
$ao:function(){return[P.b0]}}
P.e8.prototype={}
P.e9.prototype={}
P.ej.prototype={}
P.ek.prototype={}
P.ev.prototype={}
P.ew.prototype={}
P.eD.prototype={}
P.eE.prototype={}
P.bH.prototype={$iq:1,
$aq:function(){return[P.v]},
$ii:1,
$ai:function(){return[P.v]},
$io:1,
$ao:function(){return[P.v]}}
P.f_.prototype={
gl:function(a){return a.length}}
P.f0.prototype={
h:function(a,b){return P.b2(a.get(b))},
C:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b2(u.value[1]))}},
ga2:function(a){var u=H.b([],[P.h])
this.C(a,new P.f1(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.z("Not supported"))},
$aa1:function(){return[P.h,null]},
$iR:1,
$aR:function(){return[P.h,null]}}
P.f1.prototype={
$2:function(a,b){return this.a.push(a)}}
P.f2.prototype={
gl:function(a){return a.length}}
P.bq.prototype={}
P.hE.prototype={
gl:function(a){return a.length}}
P.dW.prototype={}
P.du.prototype={
e5:function(a,b,c,d,e,f,g){var u,t=J.P(g)
if(!!t.$iaS)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.oF(g))
return}if(!!t.$iby)t=!0
else t=!1
if(t){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.cT("Incorrect number or type of arguments"))}}
P.i9.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return P.b2(a.item(b))},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
K:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[[P.R,,,]]},
$ax:function(){return[[P.R,,,]]},
$ii:1,
$ai:function(){return[[P.R,,,]]},
$io:1,
$ao:function(){return[[P.R,,,]]}}
P.er.prototype={}
P.es.prototype={}
K.aN.prototype={
aF:function(a,b){return!0},
i:function(a){return"all"}}
K.d8.prototype={
aF:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)if(u[s].aF(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.m)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s}}
K.bh.prototype={}
K.a8.prototype={
aF:function(a,b){return!this.eh(0,b)},
i:function(a){return"!["+this.cG(0)+"]"}}
K.hO.prototype={
aF:function(a,b){if(typeof b!=="number")return H.t(b)
return this.a<=b&&this.b>=b},
i:function(a){var u=H.bE(this.a),t=H.bE(this.b)
return u+".."+t}}
K.hX.prototype={
ep:function(a){var u,t,s,r
if(a.a.length<=0)throw H.c(P.w("May not create a Set with zero characters."))
u=P.v
t=new H.I([u,P.aL])
for(s=new H.bg(a,a.gl(a));s.t();)t.m(0,s.d,!0)
r=P.h1(t.ga2(t),!0,u)
C.b.ef(r)
this.a=r},
aF:function(a,b){return C.b.E(this.a,b)},
i:function(a){return P.cn(this.a,0,null)}}
L.dA.prototype={
j:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new L.dK(this.a.k(0,b))
r.a=H.b([],[K.bh])
r.c=!1
this.c.push(r)
return r},
hw:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
if(r.aF(0,a))return r}return},
i:function(a){return this.b},
d9:function(){var u,t,s,r,q,p=this,o="("+p.b+")",n=p.d
if(n!=null){n=n.b
o+=" => ["+n+"]"
u=p.a
if(u.c.E(0,n))o+=" (consume)"
for(n=p.d.c,n=n.ga2(n),n=n.gR(n);n.t();){t=n.gB(n)
o+="\n"
s=p.d.c.h(0,t)
t=o+("  -- "+H.e(t)+" => ["+H.e(s)+"]")
o=u.c.E(0,s)?t+" (consume)":t}}for(n=p.c,u=n.length,r=0;r<n.length;n.length===u||(0,H.m)(n),++r){q=n[r]
o=o+"\n"+("  -- "+q.i(0))}return o.charCodeAt(0)==0?o:o}}
L.dH.prototype={
i:function(a){var u=H.l8(this.b,"\n","\\n"),t=H.l8(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
L.dI.prototype={
aH:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.m)(c),++t){s=c[t]
this.c.m(0,s,b)}},
i:function(a){return this.b}}
L.iy.prototype={
k:function(a,b){var u=this.a.h(0,b)
if(u==null){u=new L.dA(this,b)
u.c=H.b([],[L.dK])
this.a.m(0,b,u)}return u},
S:function(a){var u,t=this.b.h(0,a)
if(t==null){t=new L.dI(a)
u=P.h
t.c=new H.I([u,u])
this.b.m(0,a,t)}return t},
cw:function(a){return this.ib(a)},
ib:function(a){var u=this
return P.o7(function(){var t=a
var s=0,r=1,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
return function $async$cw(b,a0){if(b===1){q=a0
s=r}while(true)switch(s){case 0:g=u.d
f=[P.v]
e=H.b([],f)
d=H.b([],f)
c=H.b([],f)
p=null,o=0,n=0,m=0
case 2:if(!!0){s=3
break}if(c.length!==0)l=C.b.i_(c,0)
else{if(!t.t()){s=3
break}l=t.d}d.push(l);++o
k=g.hw(l)
s=k==null?4:6
break
case 4:if(p==null){j=P.cn(d,0,null)
throw H.c(P.w("Untokenizable string [state: "+g.b+", index "+o+']: "'+j+'"'))}if(!!d.fixed$length)H.r(P.z("removeRange"))
P.b_(0,m,d.length)
d.splice(0,m-0)
C.b.a7(c,d)
d=H.b([],f)
e=H.b([],f)
g=u.d
s=!u.c.E(0,p.a)?7:8
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
if(g.d!=null){j=P.cn(e,0,null)
i=g.d
h=i.c.h(0,j)
p=new L.dH(h==null?i.b:h,j,o)
m=d.length
n=o}case 5:s=2
break
case 3:s=p!=null&&!u.c.E(0,p.a)?10:11
break
case 10:s=12
return p
case 12:case 11:return P.nJ()
case 1:return P.nK(q)}}},L.dH)},
i:function(a){var u,t=new P.S(""),s=this.d
if(s!=null)t.a=s.d9()+"\n"
for(s=this.a,s=s.gic(s),s=s.gR(s);s.t();){u=s.gB(s)
if(u!=this.d)t.a+=u.d9()+"\n"}s=t.a
return s.charCodeAt(0)==0?s:s}}
L.dK.prototype={
i:function(a){return this.b.b+": "+this.cG(0)}}
O.aO.prototype={
bo:function(a){this.a=H.b([],[a])
this.c=this.b=null},
cD:function(a,b,c){this.b=b
this.c=a},
b_:function(a,b){return this.cD(a,null,b)},
d1:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
cK:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gR:function(a){var u=this.a
return new J.a6(u,u.length)},
K:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
n:function(a,b){var u,t,s=this,r=[H.l2(s,"aO",0)]
if(s.d1(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.cK(t,H.b([b],r))}},
a7:function(a,b){var u,t
if(this.d1(b)){u=this.a
t=u.length
C.b.a7(u,b)
this.cK(t,b)}},
$ii:1}
O.cc.prototype={
gl:function(a){return this.a.length},
gp:function(){var u=this.b
return u==null?this.b=D.E():u},
aM:function(){var u=this.b
if(u!=null)u.F(null)},
ga3:function(a){var u=this.a
if(u.length>0)return C.b.gaw(u)
else return V.bB()},
bA:function(a){var u=this.a
if(a==null)u.push(V.bB())
else u.push(a)
this.aM()},
aG:function(){var u=this.a
if(u.length>0){u.pop()
this.aM()}}}
E.f6.prototype={}
E.aR.prototype={
sbF:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gp().V(0,s.gdZ())
u=s.c
if(u!=null)u.gp().n(0,s.gdZ())
t=new D.B("shape",r,s.c)
t.b=!0
s.bx(t)}},
aq:function(a,b){var u
for(u=this.y.a,u=new J.a6(u,u.length);u.t();)u.d.aq(0,b)},
ah:function(a){var u,t=this,s=a.dx
s.a.push(s.ga3(s))
s.aM()
a.cs(t.f)
s=a.dy
u=(s&&C.b).gaw(s)
if(u!=null&&t.d!=null)u.e2(a,t)
for(s=t.y.a,s=new J.a6(s,s.length);s.t();)s.d.ah(a)
a.cr()
a.dx.aG()},
bx:function(a){var u=this.z
if(u!=null)u.F(a)},
a8:function(){return this.bx(null)},
e_:function(a){this.e=null
this.bx(a)},
hP:function(){return this.e_(null)},
dY:function(a){this.bx(a)},
hM:function(){return this.dY(null)},
hL:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gdX(),s=[{func:1,ret:-1,args:[D.Y]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bx()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.a8()},
hO:function(a,b){var u,t
for(u=b.gR(b),t=this.gdX();u.t();)u.gB(u).gp().V(0,t)
this.a8()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.bt.prototype={
i:function(a){return this.b}}
E.bC.prototype={
i:function(a){return this.b}}
E.e2.prototype={}
E.hP.prototype={
eo:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.ad(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cc()
t=[V.aU]
u.a=H.b([],t)
u.gp().n(0,new E.hQ(s))
s.cy=u
u=new O.cc()
u.a=H.b([],t)
u.gp().n(0,new E.hR(s))
s.db=u
u=new O.cc()
u.a=H.b([],t)
u.gp().n(0,new E.hS(s))
s.dx=u
u=H.b([],[O.dD])
s.dy=u
u.push(null)
s.fr=new H.I([P.h,A.dv])},
ghY:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga3(s)
u=t.db
u=t.z=s.w(0,u.ga3(u))
s=u}return s},
cs:function(a){var u=this.dy
u.push(a==null?(u&&C.b).gaw(u):a)},
cr:function(){var u=this.dy
if(u.length>1)u.pop()},
dg:function(a){var u=a.b
if(u.length===0)throw H.c(P.w("May not cache a shader with no name."))
if(this.fr.c3(0,u))throw H.c(P.w('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.m(0,u,a)}}
E.hQ.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.hR.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.hS.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.dF.prototype={
cN:function(a){this.e3()},
cM:function(){return this.cN(null)},
ghB:function(){var u,t=this,s=Date.now(),r=C.c.a6(P.lj(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.ad(s,!1)
return u/r},
d3:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.w()
if(typeof r!=="number")return H.t(r)
u=C.d.cg(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.w()
t=C.d.cg(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.lF(C.n,s.gi2())}},
e3:function(){if(!this.cx){this.cx=!0
var u=window
C.H.eN(u)
C.H.fT(u,W.m2(new E.iw(this),P.ac))}},
i0:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.d3()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ad(r,!1)
s.y=P.lj(r-s.r.a).a*0.000001
r=s.cy
C.b.sl(r.a,0)
r.aM()
r=s.db
C.b.sl(r.a,0)
r.aM()
r=s.dx
C.b.sl(r.a,0)
r.aM()
r=s.dy;(r&&C.b).sl(r,0)
s.dy.push(null)
o.ah(p.e)}s=p.Q
if(s!=null)s.F(null)}catch(q){u=H.ag(q)
t=H.l3(q)
P.l7("Error: "+H.e(u))
P.l7("Stack: "+H.e(t))
throw H.c(u)}}}
E.iw.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.i0()}}}
Z.dT.prototype={}
Z.cW.prototype={
a0:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ag(s)
t=P.w('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.e(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.dU.prototype={}
Z.c_.prototype={
aD:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
a0:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].a0(a)},
ap:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
ah:function(a){var u,t,s,r,q,p=this.b.length
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
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a5(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.j(p,", ")+"\nAttrs:   "+C.b.j(r,", ")}}
Z.bz.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.ck(this.c))+"'")+"]"}}
Z.b1.prototype={
gcF:function(a){var u=this.a,t=(u&$.at().a)!==0?3:0
if((u&$.b6().a)!==0)t+=3
if((u&$.b5().a)!==0)t+=3
if((u&$.b7().a)!==0)t+=2
if((u&$.bp().a)!==0)t+=3
if((u&$.cP().a)!==0)t+=3
if((u&$.cQ().a)!==0)t+=4
if((u&$.bV().a)!==0)++t
return(u&$.b4().a)!==0?t+4:t},
hd:function(a){var u,t=$.at(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.b6()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b5()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b7()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bp()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cP()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cQ()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bV()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b4()
if((s&t.a)!==0)if(u===a)return t
return $.mt()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b1))return!1
return this.a===b.a},
i:function(a){var u=H.b([],[P.h]),t=this.a
if((t&$.at().a)!==0)u.push("Pos")
if((t&$.b6().a)!==0)u.push("Norm")
if((t&$.b5().a)!==0)u.push("Binm")
if((t&$.b7().a)!==0)u.push("Txt2D")
if((t&$.bp().a)!==0)u.push("TxtCube")
if((t&$.cP().a)!==0)u.push("Clr3")
if((t&$.cQ().a)!==0)u.push("Clr4")
if((t&$.bV().a)!==0)u.push("Weight")
if((t&$.b4().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.b.j(u,"|")}}
D.f9.prototype={}
D.bx.prototype={
n:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.Y]}]):u).push(b)},
V:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.b.E(s,b)
if(s===!0){s=t.a
u=(s&&C.b).V(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.b.E(s,b)
if(s===!0){s=t.b
u=(s&&C.b).V(s,b)||u}return u},
F:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.b.C(P.h1(u,!0,{func:1,ret:-1,args:[D.Y]}),new D.fy(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.Y]}])
C.b.C(u,new D.fz(q))}return!0},
dv:function(){return this.F(null)},
aI:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.F(u)}}}}
D.fy.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.fz.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.Y.prototype={}
D.bb.prototype={}
D.bc.prototype={}
D.B.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cX.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cX))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.dd.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dd))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.fV.prototype={
hU:function(a){this.c=a.b
this.d.n(0,a.a)
return!1},
hQ:function(a){this.c=a.b
this.d.V(0,a.a)
return!1}}
X.dg.prototype={}
X.h3.prototype={
b3:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.w()
u=b.b
t=q.ch
if(typeof u!=="number")return u.w()
s=new V.a3(o.a+n*m,o.b+u*t)
t=q.a.gaU()
r=new X.aV(a,V.aY(),q.x,t,s)
r.b=!0
q.z=new P.ad(p,!1)
q.x=s
return r},
cq:function(a,b){this.r=a.a
return!1},
bf:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.eb()
if(typeof u!=="number")return u.ad()
this.r=(u&~t)>>>0
return!1},
be:function(a,b){var u=this.d
if(u==null)return!1
u.F(this.b3(a,b))
return!0},
hV:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaU()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.w()
q=a.b
p=o.cy
if(typeof q!=="number")return q.w()
t=new X.ce(new V.J(s*r,q*p),u,t)
t.b=!0
n.F(t)
return!0},
fm:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dg(c,r.a.gaU(),b)
s.b=!0
t.F(s)
r.y=new P.ad(u,!1)
r.x=V.aY()}}
X.aj.prototype={
u:function(a,b){var u=this
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
X.aV.prototype={}
X.hu.prototype={
bM:function(a,b,c){var u=this,t=new P.ad(Date.now(),!1),s=u.a.gaU(),r=new X.aV(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cq:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.F(this.bM(a,b,!0))
return!0},
bf:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.eb()
if(typeof t!=="number")return t.ad()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.F(u.bM(a,b,!0))
return!0},
be:function(a,b){var u=this.d
if(u==null)return!1
u.F(this.bM(a,b,!1))
return!0},
hW:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaU()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.w()
r=a.b
q=p.ch
if(typeof r!=="number")return r.w()
u=new X.ce(new V.J(t*s,r*q),u,b)
u.b=!0
o.F(u)
return!0},
gdu:function(){var u=this.b
return u==null?this.b=D.E():u},
gcz:function(){var u=this.c
return u==null?this.c=D.E():u},
gdW:function(){var u=this.d
return u==null?this.d=D.E():u}}
X.ce.prototype={}
X.hK.prototype={}
X.dJ.prototype={}
X.iA.prototype={
b3:function(a,b){var u=this,t=new P.ad(Date.now(),!1),s=a.length>0?a[0]:V.aY(),r=u.a.gaU(),q=new X.dJ(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
hT:function(a){var u=this.b
if(u==null)return!1
u.F(this.b3(a,!0))
return!0},
hR:function(a){var u=this.c
if(u==null)return!1
u.F(this.b3(a,!0))
return!0},
hS:function(a){var u=this.d
if(u==null)return!1
u.F(this.b3(a,!1))
return!0}}
X.dO.prototype={
gaU:function(){var u=this.a,t=C.i.gdr(u).c
t.toString
u=C.i.gdr(u).d
u.toString
return V.lA(0,0,t,u)},
cT:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.dd(u,new X.aj(t,a.altKey,a.shiftKey))},
aR:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.aj(t,a.altKey,a.shiftKey)},
bZ:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.aj(t,a.altKey,a.shiftKey)},
aA:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.L()
u=t.top
if(typeof r!=="number")return r.L()
return new V.a3(s-q,r-u)},
b6:function(a){return new V.J(a.movementX,a.movementY)},
bW:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.a3])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
q=C.d.ao(r.pageX)
C.d.ao(r.pageY)
p=o.left
C.d.ao(r.pageX)
n.push(new V.a3(q-p,C.d.ao(r.pageY)-o.top))}return n},
ay:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cX(u,new X.aj(t,a.altKey,a.shiftKey))},
bN:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.L()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.L()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fg:function(a){this.f=!0},
f4:function(a){this.f=!1},
fa:function(a){if(this.f&&this.bN(a))a.preventDefault()},
fk:function(a){var u
if(!this.f)return
u=this.cT(a)
this.b.hU(u)},
fi:function(a){var u
if(!this.f)return
u=this.cT(a)
this.b.hQ(u)},
fo:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aR(a)
if(r.x){u=r.ay(a)
t=r.b6(a)
if(r.d.cq(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.ay(a)
s=r.aA(a)
if(r.c.cq(u,s))a.preventDefault()},
ft:function(a){var u,t,s,r=this
r.aR(a)
u=r.ay(a)
if(r.x){t=r.b6(a)
if(r.d.bf(u,t))a.preventDefault()
return}if(r.r)return
s=r.aA(a)
if(r.c.bf(u,s))a.preventDefault()},
fe:function(a){var u,t,s,r=this
if(!r.bN(a)){r.aR(a)
u=r.ay(a)
if(r.x){t=r.b6(a)
if(r.d.bf(u,t))a.preventDefault()
return}if(r.r)return
s=r.aA(a)
if(r.c.bf(u,s))a.preventDefault()}},
fq:function(a){var u,t,s,r=this
r.aR(a)
u=r.ay(a)
if(r.x){t=r.b6(a)
if(r.d.be(u,t))a.preventDefault()
return}if(r.r)return
s=r.aA(a)
if(r.c.be(u,s))a.preventDefault()},
fc:function(a){var u,t,s,r=this
if(!r.bN(a)){r.aR(a)
u=r.ay(a)
if(r.x){t=r.b6(a)
if(r.d.be(u,t))a.preventDefault()
return}if(r.r)return
s=r.aA(a)
if(r.c.be(u,s))a.preventDefault()}},
fv:function(a){var u,t,s=this
s.aR(a)
u=new V.J((a&&C.G).ghn(a),C.G.gho(a)).w(0,s.Q)
if(s.x){if(s.d.hV(u))a.preventDefault()
return}if(s.r)return
t=s.aA(a)
if(s.c.hW(u,t))a.preventDefault()},
fz:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ay(s.y)
t=s.aA(s.y)
s.d.fm(u,t,r)}},
fP:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bZ(a)
u=t.bW(a)
if(t.e.hT(u))a.preventDefault()},
fL:function(a){var u
this.bZ(a)
u=this.bW(a)
if(this.e.hR(u))a.preventDefault()},
fN:function(a){var u
this.bZ(a)
u=this.bW(a)
if(this.e.hS(u))a.preventDefault()}}
D.f3.prototype={$ia7:1}
D.bv.prototype={
ax:function(a){var u=this.r
if(u!=null)u.F(a)},
eu:function(){return this.ax(null)},
$ia7:1}
D.a7.prototype={}
D.de.prototype={
ax:function(a){var u=this.y
if(u!=null)u.F(a)},
d0:function(a){var u=this.z
if(u!=null)u.F(a)},
fl:function(){return this.d0(null)},
fB:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.m)(a),++t){s=a[t]
if(s==null||this.eH(s))return!1}return!0},
eZ:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gd_(),s=[{func:1,ret:-1,args:[D.Y]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q instanceof D.bv)this.f.push(q)
p=q.r
if(p==null){p=new D.bx()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}u=new D.bb()
u.b=!0
this.ax(u)},
fF:function(a,b){var u,t,s
for(u=b.gR(b),t=this.gd_();u.t();){s=u.gB(u)
C.b.V(this.e,s)
s.gp().V(0,t)}u=new D.bc()
u.b=!0
this.ax(u)},
eH:function(a){var u=C.b.E(this.f,a)
return u},
$ai:function(){return[D.a7]},
$aaO:function(){return[D.a7]}}
D.hJ.prototype={$ia7:1}
D.i8.prototype={$ia7:1}
V.y.prototype={
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.y))return!1
u=b.a
t=$.F().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}}
V.aP.prototype={
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aP))return!1
u=b.a
t=$.F().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.K(u.a,3,0)+", "+V.K(u.b,3,0)+", "+V.K(u.c,3,0)+", "+V.K(u.d,3,0)+"]"}}
V.fx.prototype={}
V.di.prototype={
ac:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.L])
return t},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.di))return!1
u=b.a
t=$.F().a
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
i:function(a){var u,t,s,r,q=this,p=[P.L],o=V.bT(H.b([q.a,q.d,q.r],p),3,0),n=V.bT(H.b([q.b,q.e,q.x],p),3,0),m=V.bT(H.b([q.c,q.f,q.y],p),3,0)
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
V.aU.prototype={
ac:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.L])
return t},
cj:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.F().a)return V.bB()
u=1/b1
t=-n
s=-a0
return V.az((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
w:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.az(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bC:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.D(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
bk:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.a_(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aU))return!1
u=b.a
t=$.F().a
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
H:function(a){var u,t,s,r,q,p=this,o=[P.L],n=V.bT(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.bT(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.bT(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.bT(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
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
P:function(){return this.H("")}}
V.a3.prototype={
L:function(a,b){return new V.a3(this.a-b.a,this.b-b.b)},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a3))return!1
u=b.a
t=$.F().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"}}
V.a_.prototype={
L:function(a,b){return new V.a_(this.a-b.a,this.b-b.b,this.c-b.c)},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a_))return!1
u=b.a
t=$.F().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}}
V.aZ.prototype={
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aZ))return!1
u=b.a
t=$.F().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.K(u.a,3,0)+", "+V.K(u.b,3,0)+", "+V.K(u.c,3,0)+", "+V.K(u.d,3,0)+"]"}}
V.dt.prototype={
gag:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dt))return!1
u=b.a
t=$.F().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.K(u.a,3,0)+", "+V.K(u.b,3,0)+", "+V.K(u.c,3,0)+", "+V.K(u.d,3,0)+"]"}}
V.J.prototype={
ck:function(a){return Math.sqrt(this.I(this))},
I:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.w()
if(typeof r!=="number")return H.t(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.t(t)
return s*r+u*t},
w:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.w()
if(typeof b!=="number")return H.t(b)
u=this.b
if(typeof u!=="number")return u.w()
return new V.J(t*b,u*b)},
A:function(a,b){var u,t
if(Math.abs(b-0)<$.F().a){u=$.lL
return u==null?$.lL=new V.J(0,0):u}u=this.a
if(typeof u!=="number")return u.A()
t=this.b
if(typeof t!=="number")return t.A()
return new V.J(u/b,t/b)},
u:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.J))return!1
u=b.a
t=this.a
s=$.F()
s.toString
if(typeof u!=="number")return u.L()
if(typeof t!=="number")return H.t(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.L()
if(typeof t!=="number")return H.t(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"}}
V.D.prototype={
ck:function(a){return Math.sqrt(this.I(this))},
I:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cl:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.D(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
bc:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.D(u*t-s*r,s*q-p*t,p*r-u*q)},
D:function(a,b){return new V.D(this.a+b.a,this.b+b.b,this.c+b.c)},
U:function(a){return new V.D(-this.a,-this.b,-this.c)},
A:function(a,b){if(Math.abs(b-0)<$.F().a)return V.dS()
return new V.D(this.a/b,this.b/b,this.c/b)},
dV:function(){var u=$.F().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.D))return!1
u=b.a
t=$.F().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}}
U.fc.prototype={
bH:function(a){var u=V.p4(a,this.c,this.b)
return u},
gp:function(){var u=this.y
return u==null?this.y=D.E():u},
T:function(a){var u=this.y
if(u!=null)u.F(a)},
scA:function(a,b){},
scn:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.F().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bH(u)}s=new D.B("maximumLocation",s,t.b)
s.b=!0
t.T(s)}},
scp:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.F().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bH(u)}s=new D.B("minimumLocation",s,t.c)
s.b=!0
t.T(s)}},
saf:function(a,b){var u,t=this
b=t.bH(b)
u=t.d
if(!(Math.abs(u-b)<$.F().a)){t.d=b
u=new D.B("location",u,b)
u.b=!0
t.T(u)}},
sco:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.F().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.B("maximumVelocity",r,a)
r.b=!0
s.T(r)}},
sW:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.F().a)){u.f=a
t=new D.B("velocity",t,a)
t.b=!0
u.T(t)}},
sc6:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.F().a)){this.x=a
u=new D.B("dampening",u,a)
u.b=!0
this.T(u)}},
aq:function(a,b){var u,t,s,r=this,q=r.f,p=$.F().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.saf(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.F().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sW(u)}}}
U.d_.prototype={
gp:function(){var u=this.b
return u==null?this.b=D.E():u},
aZ:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.d_))return!1
return J.U(this.a,b.a)},
i:function(a){return"Constant: "+this.a.H("          ")}}
U.c5.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.E():u},
T:function(a){var u=this.e
if(u!=null)u.F(a)},
ab:function(){return this.T(null)},
eX:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaN(),s=[{func:1,ret:-1,args:[D.Y]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.gp()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bb()
u.b=!0
this.T(u)},
fD:function(a,b){var u,t
for(u=b.gR(b),t=this.gaN();u.t();)u.gB(u).gp().V(0,t)
u=new D.bc()
u.b=!0
this.T(u)},
aZ:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.O()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.a6(r,r.length),u=null;r.t();){q=r.d
if(q!=null){t=q.aZ(0,b,c)
if(t!=null)u=u==null?t:t.w(0,u)}}s.f=u==null?V.bB():u
r=s.e
if(r!=null)r.aI(0)}return s.f},
u:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.c5))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.d(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.d(r,t)
if(!J.U(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ai:function(){return[U.ae]},
$aaO:function(){return[U.ae]},
$iae:1}
U.ae.prototype={}
U.dP.prototype={
gp:function(){var u=this.cy
return u==null?this.cy=D.E():u},
T:function(a){var u=this.cy
if(u!=null)u.F(a)},
ab:function(){return this.T(null)},
ba:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdu().n(0,u.gbO())
u.a.c.gdW().n(0,u.gbQ())
u.a.c.gcz().n(0,u.gbS())
return!0},
bP:function(a){var u=this
if(!J.U(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bR:function(a){var u,t,s,r,q,p,o,n=this
H.j(a,"$iaV")
if(!n.y)return
if(n.x){u=a.d.L(0,a.y)
u=new V.J(u.a,u.b)
u=u.I(u)
t=n.r
if(typeof t!=="number")return H.t(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.L(0,a.y)
u=new V.J(t.a,t.b).w(0,2).A(0,u.gag())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.w()
s=n.e
if(typeof s!=="number")return H.t(s)
t.sW(u*10*s)}else{u=a.c
t=a.d
s=t.L(0,a.y)
r=new V.J(s.a,s.b).w(0,2).A(0,u.gag())
s=n.b
q=r.a
if(typeof q!=="number")return q.U()
p=n.e
if(typeof p!=="number")return H.t(p)
o=n.z
if(typeof o!=="number")return H.t(o)
s.saf(0,-q*p+o)
n.b.sW(0)
t=t.L(0,a.z)
n.Q=new V.J(t.a,t.b).w(0,2).A(0,u.gag())}n.ab()},
bT:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.I(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.w()
s=r.e
if(typeof s!=="number")return H.t(s)
u.sW(t*10*s)
r.ab()}},
aZ:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.O()
if(q<p){r.ch=p
u=b.y
r.b.aq(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.az(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$iae:1}
U.dQ.prototype={
gp:function(){var u=this.fx
return u==null?this.fx=D.E():u},
T:function(a){var u=this.fx
if(u!=null)u.F(a)},
ab:function(){return this.T(null)},
ba:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdu().n(0,s.gbO())
s.a.c.gdW().n(0,s.gbQ())
s.a.c.gcz().n(0,s.gbS())
u=s.a.d
t=u.f
u=t==null?u.f=D.E():t
u.n(0,s.geP())
u=s.a.d
t=u.d
u=t==null?u.d=D.E():t
u.n(0,s.geR())
u=s.a.e
t=u.b
u=t==null?u.b=D.E():t
u.n(0,s.gh6())
u=s.a.e
t=u.d
u=t==null?u.d=D.E():t
u.n(0,s.gh4())
u=s.a.e
t=u.c
u=t==null?u.c=D.E():t
u.n(0,s.gh2())
return!0},
at:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.U()
u=-u}if(this.r){if(typeof t!=="number")return t.U()
t=-t}return new V.J(u,t)},
bP:function(a){var u=this
H.j(a,"$iaV")
if(!J.U(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bR:function(a){var u,t,s,r,q,p,o,n=this
H.j(a,"$iaV")
if(!n.cx)return
if(n.ch){u=a.d.L(0,a.y)
u=new V.J(u.a,u.b)
u=u.I(u)
t=n.Q
if(typeof t!=="number")return H.t(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.L(0,a.y)
u=n.at(new V.J(t.a,t.b).w(0,2).A(0,u.gag()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.U()
s=n.y
if(typeof s!=="number")return H.t(s)
t.sW(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.U()
t=n.x
if(typeof t!=="number")return H.t(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.L(0,a.y)
r=n.at(new V.J(s.a,s.b).w(0,2).A(0,u.gag()))
s=n.c
q=r.a
if(typeof q!=="number")return q.U()
p=n.y
if(typeof p!=="number")return H.t(p)
o=n.cy
if(typeof o!=="number")return H.t(o)
s.saf(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.U()
q=n.x
if(typeof q!=="number")return H.t(q)
s=n.db
if(typeof s!=="number")return H.t(s)
o.saf(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.L(0,a.z)
n.dx=n.at(new V.J(t.a,t.b).w(0,2).A(0,u.gag()))}n.ab()},
bT:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.I(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.U()
s=r.y
if(typeof s!=="number")return H.t(s)
u.sW(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.U()
u=r.x
if(typeof u!=="number")return H.t(u)
s.sW(-t*10*u)
r.ab()}},
eQ:function(a){var u=this
if(H.j(a,"$idg").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
eS:function(a){var u,t,s,r,q,p,o,n=this
H.j(a,"$iaV")
if(!J.U(n.d,a.x.b))return
u=a.c
t=a.d
s=t.L(0,a.y)
r=n.at(new V.J(s.a,s.b).w(0,2).A(0,u.gag()))
s=n.c
q=r.a
if(typeof q!=="number")return q.U()
p=n.y
if(typeof p!=="number")return H.t(p)
o=n.cy
if(typeof o!=="number")return H.t(o)
s.saf(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.U()
q=n.x
if(typeof q!=="number")return H.t(q)
s=n.db
if(typeof s!=="number")return H.t(s)
o.saf(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.L(0,a.z)
n.dx=n.at(new V.J(t.a,t.b).w(0,2).A(0,u.gag()))
n.ab()},
h7:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
h5:function(a){var u,t,s,r,q,p,o,n=this
H.j(a,"$idJ")
if(!n.cx)return
if(n.ch){u=a.d.L(0,a.y)
u=new V.J(u.a,u.b)
u=u.I(u)
t=n.Q
if(typeof t!=="number")return H.t(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.L(0,a.y)
u=n.at(new V.J(t.a,t.b).w(0,2).A(0,u.gag()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.U()
s=n.y
if(typeof s!=="number")return H.t(s)
t.sW(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.U()
t=n.x
if(typeof t!=="number")return H.t(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.L(0,a.y)
r=n.at(new V.J(s.a,s.b).w(0,2).A(0,u.gag()))
s=n.c
q=r.a
if(typeof q!=="number")return q.U()
p=n.y
if(typeof p!=="number")return H.t(p)
o=n.cy
if(typeof o!=="number")return H.t(o)
s.saf(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.U()
q=n.x
if(typeof q!=="number")return H.t(q)
s=n.db
if(typeof s!=="number")return H.t(s)
o.saf(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.L(0,a.z)
n.dx=n.at(new V.J(t.a,t.b).w(0,2).A(0,u.gag()))}n.ab()},
h3:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.I(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.U()
s=r.y
if(typeof s!=="number")return H.t(s)
u.sW(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.U()
u=r.x
if(typeof u!=="number")return H.t(u)
s.sW(-t*10*u)
r.ab()}},
aZ:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.O()
if(q<p){r.dy=p
u=b.y
r.c.aq(0,u)
r.b.aq(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.az(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.w(0,V.az(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iae:1}
U.dR.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.E():u},
T:function(a){var u=this.r
if(u!=null)u.F(a)},
ba:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.E():t
t=r.geU()
u.n(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.E():s).n(0,t)
return!0},
eV:function(a){var u,t,s,r,q=this
if(!J.U(q.b,q.a.b.c))return
H.j(a,"$ice")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.w()
r=u+t*s
if(u!==r){q.d=r
u=new D.B("zoom",u,r)
u.b=!0
q.T(u)}},
aZ:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.az(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$iae:1}
M.cZ.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.E():u},
a_:function(a){var u=this.r
if(u!=null)u.F(a)},
b2:function(){return this.a_(null)},
fH:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gZ(),s=[{func:1,ret:-1,args:[D.Y]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.gp()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bb()
u.b=!0
this.a_(u)},
fJ:function(a,b){var u,t
for(u=b.gR(b),t=this.gZ();u.t();)u.gB(u).gp().V(0,t)
u=new D.bc()
u.b=!0
this.a_(u)},
ah:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.a6(u,u.length);u.t();){t=u.d
if(t!=null)t.ah(a)}s.f=!1},
$ai:function(){return[M.ao]},
$aaO:function(){return[M.ao]},
$iao:1}
M.d0.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.E():u},
a_:function(a){var u=this.r
if(u!=null)u.F(a)},
b2:function(){return this.a_(null)},
sbb:function(a){var u,t,s=this
if(a==null)a=new X.fN()
u=s.b
if(u!==a){if(u!=null)u.gp().V(0,s.gZ())
t=s.b
s.b=a
a.gp().n(0,s.gZ())
u=new D.B("camera",t,s.b)
u.b=!0
s.a_(u)}},
sbh:function(a,b){var u,t,s=this
if(b==null)b=X.kE(null)
u=s.c
if(u!==b){if(u!=null)u.gp().V(0,s.gZ())
t=s.c
s.c=b
b.gp().n(0,s.gZ())
u=new D.B("target",t,s.c)
u.b=!0
s.a_(u)}},
sbi:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gp().V(0,t.gZ())
u=t.d
t.d=a
if(a!=null)a.gp().n(0,t.gZ())
s=new D.B("technique",u,t.d)
s.b=!0
t.a_(s)}},
ah:function(a){var u=this
a.cs(u.d)
u.c.a0(a)
u.b.a0(a)
u.e.aq(0,a)
u.e.ah(a)
u.b.ap(a)
u.c.toString
a.cr()},
$iao:1}
M.d5.prototype={
a_:function(a){var u=this.y
if(u!=null)u.F(a)},
b2:function(){return this.a_(null)},
f6:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gZ(),s=[{func:1,ret:-1,args:[D.Y]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bx()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bb()
u.b=!0
this.a_(u)},
f8:function(a,b){var u,t
for(u=b.gR(b),t=this.gZ();u.t();)u.gB(u).gp().V(0,t)
u=new D.bc()
u.b=!0
this.a_(u)},
sbb:function(a){var u,t,s=this
if(a==null)a=X.lt(null)
u=s.b
if(u!==a){if(u!=null)u.gp().V(0,s.gZ())
t=s.b
s.b=a
a.gp().n(0,s.gZ())
u=new D.B("camera",t,s.b)
u.b=!0
s.a_(u)}},
sbh:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gp().V(0,t.gZ())
u=t.c
t.c=b
b.gp().n(0,t.gZ())
s=new D.B("target",u,t.c)
s.b=!0
t.a_(s)}},
sbi:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gp().V(0,t.gZ())
u=t.d
t.d=a
if(a!=null)a.gp().n(0,t.gZ())
s=new D.B("technique",u,t.d)
s.b=!0
t.a_(s)}},
gp:function(){var u=this.y
return u==null?this.y=D.E():u},
ah:function(a){var u,t=this
a.cs(t.d)
t.c.a0(a)
t.b.a0(a)
u=t.d
if(u!=null)u.aq(0,a)
for(u=t.e.a,u=new J.a6(u,u.length);u.t();)u.d.aq(0,a)
for(u=t.e.a,u=new J.a6(u,u.length);u.t();)u.d.ah(a)
t.b.toString
a.cy.aG()
a.db.aG()
t.c.toString
a.cr()},
$iao:1}
M.ao.prototype={}
A.cU.prototype={}
A.eZ.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
ht:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
dt:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.X.prototype={
gar:function(a){var u=this.a?1:0,t=this.b?2:0
return u|t|0},
i:function(a){var u=this.a?1:0,t=this.b?2:0
return""+(u|t|0)},
u:function(a,b){if(b==null)return!1
if(!(b instanceof A.X))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.h9.prototype={
en:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
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
A.om(c0,u)
A.oo(c0,u)
A.on(c0,u)
A.oq(c0,u)
A.or(c0,u)
A.op(c0,u)
A.os(c0,u)
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
b5.dS(0,s.charCodeAt(0)==0?s:s,A.ol(b5.z))
b5.Q=b5.x.h(0,"posAttr")
b5.cx=b5.x.h(0,"normAttr")
b5.ch=b5.x.h(0,"binmAttr")
b5.cy=b5.x.h(0,"txt2DAttr")
b5.db=b5.x.h(0,"txtCubeAttr")
b5.dx=b5.x.h(0,"bendAttr")
if(c0.dy)b5.id=H.j(b5.y.M(0,"invViewMat"),"$iaa")
if(t)b5.dy=H.j(b5.y.M(0,"objMat"),"$iaa")
if(r)b5.fr=H.j(b5.y.M(0,"viewObjMat"),"$iaa")
b5.fy=H.j(b5.y.M(0,"projViewObjMat"),"$iaa")
if(c0.go)b5.fx=H.j(b5.y.M(0,"viewMat"),"$iaa")
if(c0.x1)b5.k1=H.j(b5.y.M(0,"txt2DMat"),"$ics")
if(c0.x2)b5.k2=H.j(b5.y.M(0,"txtCubeMat"),"$iaa")
if(c0.y1)b5.k3=H.j(b5.y.M(0,"colorMat"),"$iaa")
b5.r1=H.b([],[A.aa])
t=c0.aW
if(t>0){b5.k4=b5.y.M(0,"bendMatCount")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.h(0,q)
if(m==null)H.r(P.w(b7+q+b8))
s.push(H.j(m,"$iaa"))}}t=c0.a
if(t.a)b5.r2=H.j(b5.y.M(0,"emissionClr"),"$iG")
if(t.b)b5.rx=H.j(b5.y.M(0,"emissionTxt"),"$ia0")
t=c0.b
if(t.a)b5.x1=H.j(b5.y.M(0,"ambientClr"),"$iG")
if(t.b)b5.x2=H.j(b5.y.M(0,"ambientTxt"),"$ia0")
t=c0.c
if(t.a)b5.y2=H.j(b5.y.M(0,"diffuseClr"),"$iG")
if(t.b)b5.aW=H.j(b5.y.M(0,"diffuseTxt"),"$ia0")
t=c0.d
if(t.a)b5.bt=H.j(b5.y.M(0,"invDiffuseClr"),"$iG")
if(t.b)b5.dz=H.j(b5.y.M(0,"invDiffuseTxt"),"$ia0")
t=c0.e
s=t.a
if(s||t.b||!1){b5.dC=H.j(b5.y.M(0,"shininess"),"$iT")
if(s)b5.dA=H.j(b5.y.M(0,"specularClr"),"$iG")
if(t.b)b5.dB=H.j(b5.y.M(0,"specularTxt"),"$ia0")}if(c0.f.b)b5.dD=H.j(b5.y.M(0,"bumpTxt"),"$ia0")
if(c0.db){b5.dE=H.j(b5.y.M(0,"envSampler"),"$ibm")
t=c0.r
if(t.a)b5.dF=H.j(b5.y.M(0,"reflectClr"),"$iG")
if(t.b)b5.dG=H.j(b5.y.M(0,"reflectTxt"),"$ia0")
t=c0.x
s=t.a
if(s||t.b||!1){b5.dH=H.j(b5.y.M(0,"refraction"),"$iT")
if(s)b5.dI=H.j(b5.y.M(0,"refractClr"),"$iG")
if(t.b)b5.dJ=H.j(b5.y.M(0,"refractTxt"),"$ia0")}}t=c0.y
if(t.a)b5.dK=H.j(b5.y.M(0,"alpha"),"$iT")
if(t.b)b5.dL=H.j(b5.y.M(0,"alphaTxt"),"$ia0")
if(c0.k1){t=c0.z
s=t.length
if(s!==0){r=P.v
b5.c7=new H.I([r,A.bl])
b5.c8=new H.I([r,[P.o,A.cq]])
for(r=[A.cq],l=0;l<t.length;t.length===s||(0,H.m)(t),++l){k=t[l]
j=k.a
i="barLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].startPnt"
m=p.h(0,o)
if(m==null)H.r(P.w(b7+o+b8))
H.j(m,"$iG")
p=b5.y
o=i+"s["+n+"].endPnt"
g=p.h(0,o)
if(g==null)H.r(P.w(b7+o+b8))
H.j(g,"$iG")
p=b5.y
o=i+"s["+n+"].color"
f=p.h(0,o)
if(f==null)H.r(P.w(b7+o+b8))
H.j(f,"$iG")
if(typeof j!=="number")return j.ad()
if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
e=p.h(0,o)
if(e==null)H.r(P.w(b7+o+b8))
H.j(e,"$iT")
p=b5.y
o=i+"s["+n+"].att1"
d=p.h(0,o)
if(d==null)H.r(P.w(b7+o+b8))
H.j(d,"$iT")
p=b5.y
o=i+"s["+n+"].att2"
c=p.h(0,o)
if(c==null)H.r(P.w(b7+o+b8))
H.j(c,"$iT")
b=c
a=d
a0=e}else{b=b6
a=b
a0=a}h.push(new A.cq(m,g,f,a0,a,b))}b5.c8.m(0,j,h)
q=b5.c7
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.r(P.w(b7+o+b8))
q.m(0,j,m)}}t=c0.Q
s=t.length
if(s!==0){r=P.v
b5.c9=new H.I([r,A.bl])
b5.ca=new H.I([r,[P.o,A.cr]])
for(r=[A.cr],l=0;l<t.length;t.length===s||(0,H.m)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.ad()
p=(j&1)!==0
if(p){o=b5.y
a1=i+"s["+n+"].objUp"
m=o.h(0,a1)
if(m==null)H.r(P.w(b7+a1+b8))
H.j(m,"$iG")
o=b5.y
a1=i+"s["+n+"].objRight"
g=o.h(0,a1)
if(g==null)H.r(P.w(b7+a1+b8))
H.j(g,"$iG")
o=b5.y
a1=i+"s["+n+"].objDir"
f=o.h(0,a1)
if(f==null)H.r(P.w(b7+a1+b8))
H.j(f,"$iG")
a2=f
a3=g
a4=m}else{a2=b6
a3=a2
a4=a3}o=b5.y
a1=i+"s["+n+"].viewDir"
m=o.h(0,a1)
if(m==null)H.r(P.w(b7+a1+b8))
H.j(m,"$iG")
o=b5.y
a1=i+"s["+n+"].color"
g=o.h(0,a1)
if(g==null)H.r(P.w(b7+a1+b8))
H.j(g,"$iG")
if(p){p=b5.y
o=i+"sTexture2D"+n
f=p.h(0,o)
if(f==null)H.r(P.w(b7+o+b8))
H.j(f,"$ia0")
a5=f}else a5=b6
h.push(new A.cr(a4,a3,a2,m,g,a5))}b5.ca.m(0,j,h)
q=b5.c9
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.r(P.w(b7+o+b8))
q.m(0,j,m)}}t=c0.ch
s=t.length
if(s!==0){r=P.v
b5.cb=new H.I([r,A.bl])
b5.cc=new H.I([r,[P.o,A.ct]])
for(r=[A.ct],l=0;l<t.length;t.length===s||(0,H.m)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.h(0,o)
if(m==null)H.r(P.w(b7+o+b8))
H.j(m,"$iG")
p=b5.y
o=i+"s["+n+"].viewPnt"
g=p.h(0,o)
if(g==null)H.r(P.w(b7+o+b8))
H.j(g,"$iG")
p=b5.y
o=i+"s["+n+"].color"
f=p.h(0,o)
if(f==null)H.r(P.w(b7+o+b8))
H.j(f,"$iG")
if(typeof j!=="number")return j.ad()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
e=p.h(0,o)
if(e==null)H.r(P.w(b7+o+b8))
H.j(e,"$ics")
a6=e}else a6=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
e=p.h(0,o)
if(e==null)H.r(P.w(b7+o+b8))
H.j(e,"$ibm")
a5=e}else a5=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
e=p.h(0,o)
if(e==null)H.r(P.w(b7+o+b8))
H.j(e,"$ibm")
p=b5.y
o=i+"s["+n+"].shadowAdj"
d=p.h(0,o)
if(d==null)H.r(P.w(b7+o+b8))
H.j(d,"$icp")
a7=e
a8=d}else{a7=b6
a8=a7}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
e=p.h(0,o)
if(e==null)H.r(P.w(b7+o+b8))
H.j(e,"$iT")
p=b5.y
o=i+"s["+n+"].att1"
d=p.h(0,o)
if(d==null)H.r(P.w(b7+o+b8))
H.j(d,"$iT")
p=b5.y
o=i+"s["+n+"].att2"
c=p.h(0,o)
if(c==null)H.r(P.w(b7+o+b8))
H.j(c,"$iT")
b=c
a=d
a0=e}else{b=b6
a=b
a0=a}h.push(new A.ct(m,g,a6,f,a5,a7,a8,a0,a,b))}b5.cc.m(0,j,h)
q=b5.cb
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.r(P.w(b7+o+b8))
q.m(0,j,m)}}t=c0.cx
s=t.length
if(s!==0){r=P.v
b5.cd=new H.I([r,A.bl])
b5.ce=new H.I([r,[P.o,A.cu]])
for(r=[A.cu],l=0;l<t.length;t.length===s||(0,H.m)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.h(0,o)
if(m==null)H.r(P.w(b7+o+b8))
H.j(m,"$iG")
p=b5.y
o=i+"s["+n+"].objDir"
g=p.h(0,o)
if(g==null)H.r(P.w(b7+o+b8))
H.j(g,"$iG")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.h(0,o)
if(f==null)H.r(P.w(b7+o+b8))
H.j(f,"$iG")
p=b5.y
o=i+"s["+n+"].color"
e=p.h(0,o)
if(e==null)H.r(P.w(b7+o+b8))
H.j(e,"$iG")
if(typeof j!=="number")return j.ad()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
d=p.h(0,o)
if(d==null)H.r(P.w(b7+o+b8))
H.j(d,"$iG")
p=b5.y
o=i+"s["+n+"].objRight"
c=p.h(0,o)
if(c==null)H.r(P.w(b7+o+b8))
H.j(c,"$iG")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.h(0,o)
if(a9==null)H.r(P.w(b7+o+b8))
H.j(a9,"$iT")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.h(0,o)
if(b0==null)H.r(P.w(b7+o+b8))
H.j(b0,"$iT")
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
if(d==null)H.r(P.w(b7+a1+b8))
H.j(d,"$icp")
a8=d}else a8=b6
if((j&8)!==0){o=b5.y
a1=i+"s["+n+"].cutoff"
d=o.h(0,a1)
if(d==null)H.r(P.w(b7+a1+b8))
H.j(d,"$iT")
o=b5.y
a1=i+"s["+n+"].coneAngle"
c=o.h(0,a1)
if(c==null)H.r(P.w(b7+a1+b8))
H.j(c,"$iT")
b3=c
b4=d}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
a1=i+"s["+n+"].att0"
d=o.h(0,a1)
if(d==null)H.r(P.w(b7+a1+b8))
H.j(d,"$iT")
o=b5.y
a1=i+"s["+n+"].att1"
c=o.h(0,a1)
if(c==null)H.r(P.w(b7+a1+b8))
H.j(c,"$iT")
o=b5.y
a1=i+"s["+n+"].att2"
a9=o.h(0,a1)
if(a9==null)H.r(P.w(b7+a1+b8))
H.j(a9,"$iT")
b=a9
a=c
a0=d}else{b=b6
a=b
a0=a}if((j&1)!==0){o=b5.y
a1=i+"sTexture2D"+n
d=o.h(0,a1)
if(d==null)H.r(P.w(b7+a1+b8))
H.j(d,"$ia0")
a5=d}else a5=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
d=p.h(0,o)
if(d==null)H.r(P.w(b7+o+b8))
H.j(d,"$ia0")
a7=d}else a7=b6
h.push(new A.cu(m,g,f,e,a4,a3,b2,b1,a8,b4,b3,a0,a,b,a5,a7))}b5.ce.m(0,j,h)
q=b5.cd
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.r(P.w(b7+o+b8))
q.m(0,j,m)}}}},
an:function(a,b){if(b!=null&&b.d)a.ed(b)},
fY:function(a,b){if(b!=null&&b.d>=6)a.cE(b)}}
A.cV.prototype={
i:function(a){return"barLight"+H.e(this.a)}}
A.d2.prototype={
i:function(a){return"dirLight"+H.e(this.a)}}
A.dr.prototype={
i:function(a){return"pointLight"+H.e(this.a)}}
A.dy.prototype={
i:function(a){return"spotLight"+H.e(this.a)}}
A.hc.prototype={
i:function(a){return this.bd}}
A.cq.prototype={}
A.cr.prototype={}
A.ct.prototype={}
A.cu.prototype={}
A.dv.prototype={
cJ:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
dS:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.cU(b,35633)
r.f=r.cU(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!u.getProgramParameter(r.r,35714)){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.r(P.w("Failed to link shader: "+H.e(s)))}r.fZ()
r.h0()},
a0:function(a){a.a.useProgram(this.r)
this.x.ht()},
cU:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.w("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
fZ:function(){var u,t,s,r=this,q=H.b([],[A.cU]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.t(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cU(p,t.name,s))}r.x=new A.eZ(q)},
h0:function(){var u,t,s,r=this,q=H.b([],[A.dL]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.t(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.hm(t.type,t.size,t.name,s))}r.y=new A.iL(q)},
aO:function(a,b,c){var u=this.a
if(a===1)return new A.bl(u,b,c)
else return A.kQ(u,this.r,b,a,c)},
eK:function(a,b,c){var u=this.a
if(a===1)return new A.a0(u,b,c)
else return A.kQ(u,this.r,b,a,c)},
eL:function(a,b,c){var u=this.a
if(a===1)return new A.bm(u,b,c)
else return A.kQ(u,this.r,b,a,c)},
bq:function(a,b){return new P.e3(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
hm:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aO(b,c,d)
case 5121:return u.aO(b,c,d)
case 5122:return u.aO(b,c,d)
case 5123:return u.aO(b,c,d)
case 5124:return u.aO(b,c,d)
case 5125:return u.aO(b,c,d)
case 5126:return new A.T(u.a,c,d)
case 35664:return new A.iH(u.a,c,d)
case 35665:return new A.G(u.a,c,d)
case 35666:return new A.cp(u.a,c,d)
case 35667:return new A.iI(u.a,c,d)
case 35668:return new A.iJ(u.a,c,d)
case 35669:return new A.iK(u.a,c,d)
case 35674:return new A.iM(u.a,c,d)
case 35675:return new A.cs(u.a,c,d)
case 35676:return new A.aa(u.a,c,d)
case 35678:return u.eK(b,c,d)
case 35680:return u.eL(b,c,d)
case 35670:throw H.c(u.bq("BOOL",c))
case 35671:throw H.c(u.bq("BOOL_VEC2",c))
case 35672:throw H.c(u.bq("BOOL_VEC3",c))
case 35673:throw H.c(u.bq("BOOL_VEC4",c))
default:throw H.c(P.w("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.i5.prototype={}
A.dL.prototype={}
A.iL.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
M:function(a,b){var u=this.h(0,b)
if(u==null)throw H.c(P.w("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.P()},
P:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.m)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.bl.prototype={
i:function(a){return"Uniform1i: "+H.e(this.c)}}
A.iI.prototype={
i:function(a){return"Uniform2i: "+H.e(this.c)}}
A.iJ.prototype={
i:function(a){return"Uniform3i: "+H.e(this.c)}}
A.iK.prototype={
i:function(a){return"Uniform4i: "+H.e(this.c)}}
A.iG.prototype={
i:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.T.prototype={
i:function(a){return"Uniform1f: "+H.e(this.c)}}
A.iH.prototype={
i:function(a){return"Uniform2f: "+H.e(this.c)}}
A.G.prototype={
i:function(a){return"Uniform3f: "+H.e(this.c)}}
A.cp.prototype={
i:function(a){return"Uniform4f: "+H.e(this.c)}}
A.iM.prototype={
i:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.cs.prototype={
ai:function(a){var u=new Float32Array(H.bO(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.e(this.c)}}
A.aa.prototype={
ai:function(a){var u=new Float32Array(H.bO(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.e(this.c)}}
A.a0.prototype={
ed:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.bm.prototype={
cE:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.jY.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cl(s.b,b).cl(s.d.cl(s.c,b),c)
s=new V.a_(r.a,r.b,r.c)
if(!J.U(a.f,s)){a.f=s
s=a.a
if(s!=null)s.a8()}a.si6(r.A(0,Math.sqrt(r.I(r))))
s=1-b
u=1-c
u=new V.aZ(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.U(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.a8()}}}
F.ba.prototype={
eD:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.dS()
if(q!=null)s=s.D(0,q)
if(u!=null)s=s.D(0,u)
if(t!=null)s=s.D(0,t)
if(s.dV())return
return s.A(0,Math.sqrt(s.I(s)))},
eF:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.L(0,q)
r=new V.D(r.a,r.b,r.c)
s=r.A(0,Math.sqrt(r.I(r)))
r=t.L(0,q)
r=new V.D(r.a,r.b,r.c)
r=s.bc(r.A(0,Math.sqrt(r.I(r))))
return r.A(0,Math.sqrt(r.I(r)))},
c1:function(){var u,t=this
if(t.d!=null)return!0
u=t.eD()
if(u==null){u=t.eF()
if(u==null)return!1}t.d=u
t.a.a.a8()
return!0},
eC:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.dS()
if(q!=null)s=s.D(0,q)
if(u!=null)s=s.D(0,u)
if(t!=null)s=s.D(0,t)
if(s.dV())return
return s.A(0,Math.sqrt(s.I(s)))},
eE:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.F().a){l=d.L(0,g)
l=new V.D(l.a,l.b,l.c)
q=l.A(0,Math.sqrt(l.I(l)))
if(s.a-t.a<0)q=q.U(0)}else{p=(l-u.b)/r
l=d.L(0,g)
l=new V.a_(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).L(0,j)
l=new V.D(l.a,l.b,l.c)
q=l.A(0,Math.sqrt(l.I(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.U(0)}l=n.d
if(l!=null){o=l.A(0,Math.sqrt(l.I(l)))
l=o.bc(q)
l=l.A(0,Math.sqrt(l.I(l))).bc(o)
q=l.A(0,Math.sqrt(l.I(l)))}return q},
c_:function(){var u,t=this
if(t.e!=null)return!0
u=t.eC()
if(u==null){u=t.eE()
if(u==null)return!1}t.e=u
t.a.a.a8()
return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
H:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.a.am(J.a5(s.e),0)+", "+C.a.am(J.a5(t.b.e),0)+", "+C.a.am(J.a5(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.i(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.i(0)+"}"):u+"-}"},
P:function(){return this.H("")}}
F.c8.prototype={
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
H:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.a.am(J.a5(u.e),0)+", "+C.a.am(J.a5(this.b.e),0)},
P:function(){return this.H("")}}
F.ci.prototype={
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
H:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.a.am(J.a5(u.e),0)},
P:function(){return this.H("")}}
F.hY.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.E():u},
hI:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.a1()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){r=g[s]
h.a.n(0,r.hj())}h.a.a1()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.a1()
o=o.e
if(typeof o!=="number")return o.D()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
n=p[o]
h.b.a.a.n(0,n)
o=new F.ci()
if(n.a==null)H.r(P.w("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.F(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.a1()
o=o.e
if(typeof o!=="number")return o.D()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.a1()
p=p.e
if(typeof p!=="number")return p.D()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.c.a
p.a.n(0,l)
p.a.n(0,k)
F.mZ(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.a1()
o=o.e
if(typeof o!=="number")return o.D()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.a1()
p=p.e
if(typeof p!=="number")return p.D()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.a1()
o=o.e
if(typeof o!=="number")return o.D()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
i=p[o]
o=h.d.a
o.a.n(0,l)
o.a.n(0,k)
o.a.n(0,i)
F.c3(l,k,i)}g=h.e
if(g!=null)g.aI(0)},
aB:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aB()||!1
if(!t.a.aB())u=!1
s=t.e
if(s!=null)s.aI(0)
return u},
dn:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.at()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.b6().a)!==0)++s
if((t&$.b5().a)!==0)++s
if((t&$.b7().a)!==0)++s
if((t&$.bp().a)!==0)++s
if((t&$.cP().a)!==0)++s
if((t&$.cQ().a)!==0)++s
if((t&$.bV().a)!==0)++s
if((t&$.b4().a)!==0)++s
r=a4.gcF(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.L])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.cW])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.hd(m)
k=l.gcF(l)
if(m>=t)return H.d(o,m)
o[m]=new Z.cW(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.d(i,j)
h=i[j].hG(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.d(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.bO(p)),35044)
u.bindBuffer(a1,null)
c=new Z.c_(new Z.dT(a1,d),o,a4)
c.b=H.b([],[Z.bz])
if(a0.b.b.length!==0){b=H.b([],[P.v])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.a1()
b.push(t.e)}a=Z.kU(u,34963,b)
c.b.push(new Z.bz(0,b.length,a))}if(a0.c.b.length!==0){b=H.b([],[P.v])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.a1()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.d(t,m)
t=t[m].b
t.a.a.a1()
b.push(t.e)}a=Z.kU(u,34963,b)
c.b.push(new Z.bz(1,b.length,a))}if(a0.d.b.length!==0){b=H.b([],[P.v])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.a1()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.d(t,m)
t=t[m].b
t.a.a.a1()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.d(t,m)
t=t[m].c
t.a.a.a1()
b.push(t.e)}a=Z.kU(u,34963,b)
c.b.push(new Z.bz(4,b.length,a))}return c},
i:function(a){var u=this,t="   ",s=H.b([],[P.h])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.H(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.H(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.H(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.H(t))}return C.b.j(s,"\n")},
a8:function(){var u=this.e
if(u!=null)u.F(null)}}
F.hZ.prototype={
ha:function(a){var u,t,s,r,q=H.b([],[F.ba]),p=a[0]
for(u=this.a,t=2;t<4;++t){s=a[t-1]
r=a[t]
u.a.n(0,p)
u.a.n(0,s)
u.a.n(0,r)
q.push(F.c3(p,s,r))}return q},
hb:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.ba])
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
h.push(F.c3(m,l,j))
u.a.n(0,m)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.c3(m,j,i))}else{n.n(0,l)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.c3(l,j,i))
u.a.n(0,l)
u.a.n(0,i)
u.a.n(0,m)
h.push(F.c3(l,i,m))}p=!p}r=!r}return h},
gl:function(a){return this.b.length},
aB:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.m)(u),++r)if(!u[r].c1())s=!1
return s},
c0:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.m)(u),++r)if(!u[r].c_())s=!1
return s},
i:function(a){return this.P()},
H:function(a){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].H(a))
return C.b.j(r,"\n")},
P:function(){return this.H("")}}
F.i_.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.P()},
H:function(a){var u,t,s=H.b([],[P.h]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.d(t,u)
s.push(t[u].H(a+(""+u+". ")))}return C.b.j(s,"\n")},
P:function(){return this.H("")}}
F.i0.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.P()},
H:function(a){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].H(a))
return C.b.j(r,"\n")},
P:function(){return this.H("")}}
F.bJ.prototype={
c5:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.j4(u.cx,r,o,t,s,q,p,a,n)},
hj:function(){return this.c5(null)},
si6:function(a){var u
if(!J.U(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a8()}},
hG:function(a){var u,t,s=this
if(a.u(0,$.at())){u=s.f
t=[P.L]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.u(0,$.b6())){u=s.r
t=[P.L]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.u(0,$.b5())){u=s.x
t=[P.L]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.u(0,$.b7())){u=s.y
t=[P.L]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.u(0,$.bp())){u=s.z
t=[P.L]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.u(0,$.cP())){u=s.Q
t=[P.L]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.u(0,$.cQ())){u=s.Q
t=[P.L]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.u(0,$.bV()))return H.b([s.ch],[P.L])
else if(a.u(0,$.b4())){u=s.cx
t=[P.L]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.L])},
c1:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.dS()
t.d.C(0,new F.jc(s))
s=s.a
t.r=s.A(0,Math.sqrt(s.I(s)))
s=t.a
if(s!=null){s.a8()
s=t.a.e
if(s!=null)s.aI(0)}return!0},
c_:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.dS()
t.d.C(0,new F.jb(s))
s=s.a
t.x=s.A(0,Math.sqrt(s.I(s)))
s=t.a
if(s!=null){s.a8()
s=t.a.e
if(s!=null)s.aI(0)}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
H:function(a){var u,t,s=this,r="-",q=H.b([],[P.h])
q.push(C.a.am(J.a5(s.e),0))
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
P:function(){return this.H("")}}
F.jc.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.D(0,t)}}}
F.jb.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.D(0,t)}}}
F.j5.prototype={
a1:function(){},
n:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.w("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.a8()
return!0},
br:function(a,b,c,d,e,f){var u=F.j4(a,null,b,c,null,d,e,f,0)
this.n(0,u)
return u},
gl:function(a){return this.c.length},
aB:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)u[s].c1()
return!0},
c0:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)u[s].c_()
return!0},
hg:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.A(0,Math.sqrt(p*p+o*o+n*n))
if(!J.U(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.F(null)}}}}return!0},
i:function(a){return this.P()},
H:function(a){var u,t,s,r
this.a1()
u=H.b([],[P.h])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r)u.push(t[r].H(a))
return C.b.j(u,"\n")},
P:function(){return this.H("")}}
F.j6.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
C:function(a,b){var u=this
C.b.C(u.b,b)
C.b.C(u.c,new F.j7(u,b))
C.b.C(u.d,new F.j8(u,b))},
i:function(a){return this.P()},
P:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].H(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].H(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].H(""))
return C.b.j(r,"\n")}}
F.j7.prototype={
$1:function(a){if(!J.U(a.a,this.a))this.b.$1(a)}}
F.j8.prototype={
$1:function(a){var u=this.a
if(!J.U(a.a,u)&&!J.U(a.b,u))this.b.$1(a)}}
F.j9.prototype={
gl:function(a){return this.b.length+this.c.length},
i:function(a){return this.P()},
P:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].H(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].H(""))
return C.b.j(r,"\n")}}
F.ja.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.P()},
P:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].H(""))
return C.b.j(r,"\n")}}
O.dh.prototype={
gp:function(){var u=this.fr
return u==null?this.fr=D.E():u},
X:function(a){var u=this.fr
if(u!=null)u.F(a)},
b5:function(){return this.X(null)},
d2:function(a){this.a=null
this.X(a)},
fV:function(){return this.d2(null)},
f0:function(a,b){var u=new D.bb()
u.b=!0
this.X(u)},
f2:function(a,b){var u=new D.bc()
u.b=!0
this.X(u)},
cS:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=P.v
f=[f,f]
u=new H.I(f)
for(t=g.dx.e,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){q=t[r]
p=q.gav()
o=u.h(0,q.gav())
u.m(0,p,o==null?1:o)}n=H.b([],[A.cV])
u.C(0,new O.hg(g,n))
C.b.b1(n,new O.hh())
m=new H.I(f)
for(t=g.dx.f,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){p=m.h(0,0)
m.m(0,0,p==null?1:p)}l=H.b([],[A.d2])
m.C(0,new O.hi(g,l))
C.b.b1(l,new O.hj())
k=new H.I(f)
for(t=g.dx.r,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){q=t[r]
p=q.gav()
o=k.h(0,q.gav())
k.m(0,p,o==null?1:o)}j=H.b([],[A.dr])
k.C(0,new O.hk(g,j))
C.b.b1(j,new O.hl())
i=new H.I(f)
for(f=g.dx.x,t=f.length,r=0;r<f.length;f.length===t||(0,H.m)(f),++r){q=f[r]
s=q.gav()
p=i.h(0,q.gav())
i.m(0,s,p==null?1:p)}h=H.b([],[A.dy])
i.C(0,new O.hm(g,h))
C.b.b1(h,new O.hn())
f=C.c.a6(g.e.a.length+3,4)
g.dy.e
return A.n5(!1,!1,!1,!1,f*4,g.f.c,g.r.c,g.x.c,g.y.c,g.z.c,g.Q.c,g.cx.c,g.cy.c,g.db.c,n,l,j,h)},
aj:function(a,b){if(b!=null)if(!C.b.E(a,b)){b.saX(0,a.length)
a.push(b)}},
aq:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.a6(u,u.length);u.t();){t=u.d
t.toString
s=$.j3
if(s==null)s=$.j3=new V.D(0,0,1)
t.a=s
r=$.j2
t.d=r==null?$.j2=new V.D(0,1,0):r
r=$.j1
t.e=r==null?$.j1=new V.D(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bC(s)
r=s.a
p=s.b
o=s.c
t.a=s.A(0,Math.sqrt(r*r+p*p+o*o))
o=q.bC(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.A(0,Math.sqrt(p*p+r*r+s*s))
s=q.bC(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.A(0,Math.sqrt(r*r+p*p+o*o))}}}},
e2:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=b0.a
if(b1==null){b1=b0.cS()
u=b2.fr.h(0,b1.bd)
if(u==null){u=A.n4(b1,b2.a)
b2.dg(u)}b1=b0.a=u
b3.e=null}t=b1.z
s=t.bt
b1=b3.e
if(!(b1 instanceof Z.c_))b1=b3.e=null
if(b1==null||!b1.d.u(0,s)){b1=t.k4
if(b1)b3.d.aB()
r=t.r1
if(r){q=b3.d
p=q.e
if(p!=null)++p.d
q.d.c0()
q.a.c0()
q=q.e
if(q!=null)q.aI(0)}q=t.rx
if(q){p=b3.d
o=p.e
if(o!=null)++o.d
p.a.hg()
p=p.e
if(p!=null)p.aI(0)}n=b3.d.dn(new Z.dU(b2.a),s)
n.aD($.at()).e=b0.a.Q.c
if(b1)n.aD($.b6()).e=b0.a.cx.c
if(r)n.aD($.b5()).e=b0.a.ch.c
if(t.r2)n.aD($.b7()).e=b0.a.cy.c
if(q)n.aD($.bp()).e=b0.a.db.c
if(t.ry)n.aD($.b4()).e=b0.a.dx.c
b3.e=n}m=H.b([],[T.dE])
b0.a.a0(b2)
if(t.fr){b1=b0.a
r=b2.dx
r=r.ga3(r)
b1=b1.dy
b1.toString
b1.ai(r.ac(0,!0))}if(t.fx){b1=b0.a
r=b2.cx
if(r==null){r=b2.db
r=r.ga3(r)
q=b2.dx
q=b2.cx=r.w(0,q.ga3(q))
r=q}b1=b1.fr
b1.toString
b1.ai(r.ac(0,!0))}b1=b0.a
r=b2.ch
if(r==null){r=b2.ghY()
q=b2.dx
q=b2.ch=r.w(0,q.ga3(q))
r=q}b1=b1.fy
b1.toString
b1.ai(r.ac(0,!0))
if(t.go){b1=b0.a
r=b2.db
r=r.ga3(r)
b1=b1.fx
b1.toString
b1.ai(r.ac(0,!0))}if(t.x1){b1=b0.a
r=b0.b
b1=b1.k1
b1.toString
b1.ai(C.j.ac(r,!0))}if(t.x2){b1=b0.a
r=b0.c
b1=b1.k2
b1.toString
b1.ai(C.j.ac(r,!0))}if(t.y1){b1=b0.a
r=b0.d
b1=b1.k3
b1.toString
b1.ai(C.j.ac(r,!0))}if(t.aW>0){l=b0.e.a.length
b1=b0.a.k4
b1.a.uniform1i(b1.d,l)
for(k=0;k<l;++k){b1=b0.a
r=b0.e.a
if(k>=r.length)return H.d(r,k)
r=r[k]
b1=b1.r1
if(k>=b1.length)return H.d(b1,k)
b1=b1[k]
j=new Float32Array(H.bO(r.ac(0,!0)))
b1.a.uniformMatrix4fv(b1.d,!1,j)}}b1=t.a
if(b1.a){r=b0.a
q=b0.f.f
r=r.r2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.aj(m,b0.f.d)
b1=b0.a
r=b0.f.d
b1.an(b1.rx,r)}if(t.k1){b1=t.b
if(b1.a){r=b0.a
q=b0.r.f
r=r.x1
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.aj(m,b0.r.d)
b1=b0.a
r=b0.r.d
b1.an(b1.x2,r)}b1=t.c
if(b1.a){r=b0.a
q=b0.x.f
r=r.y2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.aj(m,b0.x.d)
b1=b0.a
r=b0.x.d
b1.an(b1.aW,r)}b1=t.d
if(b1.a){r=b0.a
q=b0.y.f
r=r.bt
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.aj(m,b0.y.d)
b1=b0.a
r=b0.y.d
b1.an(b1.dz,r)}b1=t.e
r=b1.a
if(r||b1.b||!1){q=b0.a
p=b0.z.ch
q=q.dC
q.a.uniform1f(q.d,p)}if(r){r=b0.a
q=b0.z.f
r=r.dA
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.aj(m,b0.z.d)
b1=b0.a
r=b0.z.d
b1.an(b1.dB,r)}b1=t.z
if(b1.length>0){r=P.v
i=new H.I([r,r])
for(r=b0.dx.e,q=r.length,h=0;h<r.length;r.length===q||(0,H.m)(r),++h){g=r[h]
f=g.gav()
e=i.h(0,f)
if(e==null)e=0
i.m(0,f,e+1)
d=J.bW(b0.a.c8.h(0,f),e)
p=g.gii()
o=$.aD
p=p.bk(o==null?$.aD=new V.a_(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gio()
o=$.aD
p=p.bk(o==null?$.aD=new V.a_(0,0,0):o)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gv(g)
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
if(g.gdw()){p=g.gdi()
o=d.e
o.a.uniform1f(o.d,p)
p=g.gdj()
o=d.f
o.a.uniform1f(o.d,p)
p=g.gdk()
o=d.r
o.a.uniform1f(o.d,p)}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.m)(b1),++h){q=b1[h].a
l=i.h(0,q)
if(l==null)l=0
q=b0.a.c7.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.Q
if(b1.length>0){r=b2.db
c=r.ga3(r)
r=P.v
b=new H.I([r,r])
for(r=b0.dx.f,q=r.length,h=0;h<r.length;r.length===q||(0,H.m)(r),++h){g=r[h]
e=b.h(0,0)
if(e==null)e=0
b.m(0,0,e+1)
d=J.bW(b0.a.ca.h(0,0),e)
p=c.bC(g.a)
o=p.a
a=p.b
a0=p.c
a0=p.A(0,Math.sqrt(o*o+a*a+a0*a0))
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
q=b0.a.c9.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.ch
if(b1.length>0){r=b2.db
c=r.ga3(r)
r=P.v
a1=new H.I([r,r])
for(r=b0.dx.r,q=r.length,h=0;h<r.length;r.length===q||(0,H.m)(r),++h){g=r[h]
f=g.gav()
e=a1.h(0,f)
if(e==null)e=0
a1.m(0,f,e+1)
d=J.bW(b0.a.cc.h(0,f),e)
a2=c.w(0,g.ga3(g))
p=g.ga3(g)
o=$.aD
p=p.bk(o==null?$.aD=new V.a_(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=$.aD
p=a2.bk(p==null?$.aD=new V.a_(0,0,0):p)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gv(g)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
g.gaJ()
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
j=new Float32Array(H.bO(new V.di(o,a,a0,a3,a4,a5,a6,a7,p).ac(0,!0)))
a8.a.uniformMatrix3fv(a8.d,!1,j)
g.gaJ()
p=g.gaJ()
if(!C.b.E(m,p)){p.saX(0,m.length)
m.push(p)}p=g.gaJ()
o=p.gcm(p)
if(o){o=d.f
o.toString
a=p.d
if(a<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}g.gb0()
p=g.gee()
o=d.x
o.toString
a=p.ghq(p)
a0=p.ghr(p)
a3=p.ghs()
p=p.ghp()
o.a.uniform4f(o.d,a,a0,a3,p)
p=g.gb0()
if(!C.b.E(m,p)){p.saX(0,m.length)
m.push(p)}p=g.gb0()
o=p.gcm(p)
if(o){o=d.r
o.toString
a=p.d
if(a<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}if(g.gdw()){p=g.gdi()
o=d.y
o.a.uniform1f(o.d,p)
p=g.gdj()
o=d.z
o.a.uniform1f(o.d,p)
p=g.gdk()
o=d.Q
o.a.uniform1f(o.d,p)}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.m)(b1),++h){q=b1[h].a
l=a1.h(0,q)
if(l==null)l=0
q=b0.a.cb.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.cx
if(b1.length>0){r=b2.db
c=r.ga3(r)
r=P.v
a9=new H.I([r,r])
for(r=b0.dx.x,q=r.length,h=0;h<r.length;r.length===q||(0,H.m)(r),++h){g=r[h]
f=g.gav()
e=a9.h(0,f)
if(e==null)e=0
a9.m(0,f,e+1)
d=J.bW(b0.a.ce.h(0,f),e)
p=g.ghX(g)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gil(g).iz()
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=c.bk(g.ghX(g))
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gv(g)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
g.gaJ()
p=g.gcz()
o=d.f
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gcv(g)
o=d.r
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.giA()
o=d.x
o.a.uniform1f(o.d,p)
p=g.giB()
o=d.y
o.a.uniform1f(o.d,p)
g.gaJ()
p=g.gaJ()
if(!C.b.E(m,p)){p.saX(0,m.length)
m.push(p)}p=g.gaJ()
o=p.gcm(p)
if(o){o=d.dx
o.toString
a=p.d
if(!a)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}g.gb0()
p=g.gee()
o=d.z
o.toString
a=p.ghq(p)
a0=p.ghr(p)
a3=p.ghs()
p=p.ghp()
o.a.uniform4f(o.d,a,a0,a3,p)
p=g.gb0()
if(!C.b.E(m,p)){p.saX(0,m.length)
m.push(p)}p=g.gb0()
o=p.gcm(p)
if(o){o=d.dy
o.toString
a=p.d
if(!a)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}if(g.gim()){p=g.gik()
o=d.Q
o.a.uniform1f(o.d,p)
p=g.gij()
o=d.ch
o.a.uniform1f(o.d,p)}if(g.gdw()){p=g.gdi()
o=d.cx
o.a.uniform1f(o.d,p)
p=g.gdj()
o=d.cy
o.a.uniform1f(o.d,p)
p=g.gdk()
o=d.db
o.a.uniform1f(o.d,p)}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.m)(b1),++h){q=b1[h].a
l=a9.h(0,q)
if(l==null)l=0
q=b0.a.cd.h(0,q)
q.a.uniform1i(q.d,l)}}}if(t.f.b){b0.aj(m,b0.Q.d)
b1=b0.a
r=b0.Q.d
b1.an(b1.dD,r)}if(t.dy){b1=b0.a
r=b2.Q
if(r==null){r=b2.db
r=b2.Q=r.ga3(r).cj(0)}b1=b1.id
b1.toString
b1.ai(r.ac(0,!0))}if(t.db){b0.aj(m,b0.ch)
b1=b0.a
r=b0.ch
b1.fY(b1.dE,r)
b1=t.r
if(b1.a){r=b0.a
q=b0.cx.f
r=r.dF
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.aj(m,b0.cx.d)
b1=b0.a
r=b0.cx.d
b1.an(b1.dG,r)}b1=t.x
r=b1.a
if(r||b1.b||!1){q=b0.a
p=b0.cy.ch
q=q.dH
q.a.uniform1f(q.d,p)}if(r){r=b0.a
q=b0.cy.f
r=r.dI
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.aj(m,b0.cy.d)
b1=b0.a
r=b0.cy.d
b1.an(b1.dJ,r)}}b1=t.y
r=b1.a
q=!r
if(!q||b1.b||!1){if(r){r=b0.a
p=b0.db.f
r=r.dK
r.a.uniform1f(r.d,p)}if(b1.b){b0.aj(m,b0.db.d)
r=b0.a
p=b0.db.d
r.an(r.dL,p)}r=b2.a
r.enable(3042)
r.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].a0(b2)
r=b3.e
r.a0(b2)
r.ah(b2)
r.ap(b2)
if(!q||b1.b||!1)b2.a.disable(3042)
for(k=0;k<m.length;++k)m[k].ap(b2)
b1=b0.a
b1.toString
b2.a.useProgram(null)
b1.x.dt()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cS().bd}}
O.hg.prototype={
$2:function(a,b){if(typeof b!=="number")return b.D()
return this.b.push(new A.cV(a,C.c.a6(b+3,4)*4))}}
O.hh.prototype={
$2:function(a,b){return J.cR(a.a,b.a)}}
O.hi.prototype={
$2:function(a,b){if(typeof b!=="number")return b.D()
return this.b.push(new A.d2(a,C.c.a6(b+3,4)*4))}}
O.hj.prototype={
$2:function(a,b){return J.cR(a.a,b.a)}}
O.hk.prototype={
$2:function(a,b){if(typeof b!=="number")return b.D()
return this.b.push(new A.dr(a,C.c.a6(b+3,4)*4))}}
O.hl.prototype={
$2:function(a,b){return J.cR(a.a,b.a)}}
O.hm.prototype={
$2:function(a,b){if(typeof b!=="number")return b.D()
return this.b.push(new A.dy(a,C.c.a6(b+3,4)*4))}}
O.hn.prototype={
$2:function(a,b){return J.cR(a.a,b.a)}}
O.ha.prototype={
az:function(){var u,t=this
t.cH()
u=t.f
if(!(Math.abs(u-1)<$.F().a)){t.f=1
u=new D.B(t.b,u,1)
u.b=!0
t.a.X(u)}}}
O.cb.prototype={
X:function(a){return this.a.X(a)},
b5:function(){return this.X(null)},
az:function(){},
b8:function(a){var u,t,s=this
if(!s.c.u(0,a)){u=s.c
if(u.a||u.b||!1)t=!(a.a||a.b||!1)
else t=!0
s.c=a
if(t)s.az()
u=s.a
u.a=null
u.X(null)}}}
O.hb.prototype={}
O.ay.prototype={
d5:function(a){var u,t,s=this
if(!s.f.u(0,a)){u=s.f
s.f=a
t=new D.B(s.b+".color",u,a)
t.b=!0
s.a.X(t)}},
az:function(){this.cH()
this.d5(new V.y(1,1,1))},
sv:function(a,b){this.b8(new A.X(!0,this.c.b,!1))
this.d5(b)}}
O.hd.prototype={}
O.he.prototype={
bX:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.F().a)){u.ch=a
t=new D.B(u.b+".refraction",t,a)
t.b=!0
u.a.X(t)}},
az:function(){this.cI()
this.bX(1)},
saC:function(a){var u=this,t=u.c.b
if(a<=0){u.b8(new A.X(!1,t,!1))
u.bX(0)}else{u.b8(new A.X(!0,t,!1))
u.bX(a)}}}
O.hf.prototype={
d6:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.F().a)){u.ch=a
t=new D.B(u.b+".shininess",t,a)
t.b=!0
u.a.X(t)}},
az:function(){this.cI()
this.d6(100)}}
O.dw.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.E():u},
X:function(a){var u=this.e
if(u!=null)u.F(a)},
b5:function(){return this.X(null)},
e2:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=a.fr.h(0,n)
if(u==null){t=a.a
u=new A.i5(t,n)
u.cJ(t,n)
u.dS(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.h(0,"posAttr")
u.Q=H.j(u.y.h(0,"fov"),"$iT")
u.ch=H.j(u.y.h(0,"ratio"),"$iT")
u.cx=H.j(u.y.h(0,"boxClr"),"$iG")
u.cy=H.j(u.y.h(0,"boxTxt"),"$ibm")
u.db=H.j(u.y.h(0,"viewMat"),"$iaa")
a.dg(u)}o.a=u}if(b.e==null){t=b.d.dn(new Z.dU(a.a),$.at())
t.aD($.at()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
t.a0(a)}t=a.d
s=a.c
r=o.a
r.a0(a)
q=o.b
p=r.Q
p.a.uniform1f(p.d,q)
q=r.ch
q.a.uniform1f(q.d,t/s)
s=o.c
r.cy.cE(s)
s=o.d
t=r.cx
t.a.uniform3f(t.d,s.a,s.b,s.c)
s=a.db
s=s.ga3(s).cj(0)
r=r.db
r.toString
r.ai(s.ac(0,!0))
t=b.e
if(t instanceof Z.c_){t.a0(a)
t.ah(a)
t.ap(a)}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.dt()
t=o.c
if(t!=null)t.ap(a)}}
O.dD.prototype={}
T.dE.prototype={}
T.im.prototype={}
T.ir.prototype={
saX:function(a,b){this.a=b},
gp:function(){var u=this.y
return u==null?this.y=D.E():u},
a0:function(a){var u,t=this
if(!t.c&&t.d){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(3553,t.b)}},
ap:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(3553,null)}}}
T.is.prototype={
saX:function(a,b){this.a=b},
gp:function(){var u=this.e
return u==null?this.e=D.E():u},
a0:function(a){var u,t=this
if(!t.c&&t.d>=6){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(34067,t.b)}},
ap:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(34067,null)}}}
T.it.prototype={
hH:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=W.kF(a)
t=new T.ir()
t.a=0
t.b=q
t.d=t.c=!1
W.W(u,"load",new T.iv(this,t,u,!1,q,!1,!1),!1)
return t},
aP:function(a,b,c,d,e,f){var u=W.kF(c);++this.d
W.W(u,"load",new T.iu(this,u,!1,b,!1,d,a),!1)},
d4:function(a,b,c){var u,t,s,r
b=V.l6(b)
u=V.l6(a.width)
t=V.l6(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.ky()
s.width=u
s.height=t
r=C.i.ea(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.oG(r.getImageData(0,0,s.width,s.height))}}}
T.iv.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.d4(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.E.e5(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.dv()}++s.e}}
T.iu.prototype={
$1:function(a){var u=this,t=u.a,s=t.d4(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.E.e5(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.dv()}++t.e}}
X.kx.prototype={}
X.fG.prototype={
gp:function(){var u=this.x
return u==null?this.x=D.E():u},
as:function(a){var u=this.x
if(u!=null)u.F(a)},
sdq:function(a,b){var u
if(this.b){this.b=!1
u=new D.B("clearColor",!0,!1)
u.b=!0
this.as(u)}},
a0:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.t(u)
q=C.d.ao(r*u)
r=s.b
if(typeof t!=="number")return H.t(t)
p=C.d.ao(r*t)
r=C.d.ao(s.c*u)
a.c=r
s=C.d.ao(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)}}
X.fN.prototype={
gp:function(){var u=this.b
return u==null?this.b=D.E():u},
a0:function(a){var u
a.cy.bA(V.bB())
u=V.bB()
a.db.bA(u)},
ap:function(a){a.cy.aG()
a.db.aG()}}
X.dq.prototype={
gp:function(){var u=this.f
return u==null?this.f=D.E():u},
as:function(a){var u=this.f
if(u!=null)u.F(a)},
ez:function(){return this.as(null)},
a0:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.az(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bA(k)
r=$.lu
if(r==null){r=V.lw()
q=V.kT()
p=$.lM
r=V.lq(r,q,p==null?$.lM=new V.D(0,0,-1):p)
$.lu=r
u=r}else u=r
r=s.b
if(r!=null){t=r.aZ(0,a,s)
if(t!=null)u=t.w(0,u)}a.db.bA(u)},
ap:function(a){a.cy.aG()
a.db.aG()}}
X.ii.prototype={}
V.cY.prototype={
bn:function(a){this.b=new P.fL(C.V)
this.c=null
this.d=H.b([],[[P.o,W.am]])},
N:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)l.push(H.b([],[W.am]))
u=a.split("\n")
for(l=u.length,t=[W.am],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else m.d.push(H.b([],t))
p=document.createElement("div")
p.className="codePart"
o=m.b.eJ(q,0,q.length)
n=o==null?q:o
C.T.ec(p,H.l8(n," ","&nbsp;"))
n=p.style
n.color=b
C.b.gaw(m.d).push(p)}},
e0:function(a,b){var u,t,s,r=this
r.d=H.b([],[[P.o,W.am]])
u=C.b.j(b,"\n")
t=r.c
if(t==null)t=r.c=r.bs()
for(t.toString,s=new H.n(u),s=new P.bL(t.cw(new H.bg(s,s.gl(s))).a());s.t();)r.bz(s.gB(s))}}
V.kq.prototype={
$1:function(a){var u=C.d.e6(this.a.ghB(),2)
if(u!=="0.00")P.l7(u+" fps")}}
V.fm.prototype={
bz:function(a){var u=this
switch(a.a){case"Class":u.N(a.b,"#551")
break
case"Comment":u.N(a.b,"#777")
break
case"Id":u.N(a.b,"#111")
break
case"Num":u.N(a.b,"#191")
break
case"Reserved":u.N(a.b,"#119")
break
case"String":u.N(a.b,"#171")
break
case"Symbol":u.N(a.b,"#616")
break
case"Type":u.N(a.b,"#B11")
break
case"Whitespace":u.N(a.b,"#111")
break}},
bs:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=L.iz()
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
a1.k(0,k).j(0,k).a.push(new K.aN())
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
a1.k(0,h).j(0,h).a.push(new K.aN())
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
t=new K.a8()
s=[K.bh]
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
t=new K.a8()
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
t.d=t.a.S("Num")
t=a1.k(0,n)
t.d=t.a.S("Num")
t=a1.k(0,m)
t.d=t.a.S("Symbol")
t=a1.k(0,j)
t.d=t.a.S("String")
t=a1.k(0,g)
t.d=t.a.S("String")
t=a1.k(0,c)
t.d=t.a.S(d)
t=a1.k(0,a0)
t.d=t.a.S(a0)
t=a1.k(0,q)
t=t.d=t.a.S(q)
u=[P.h]
t.aH(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aH(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aH(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.fI.prototype={
bz:function(a){var u=this
switch(a.a){case"Builtin":u.N(a.b,"#411")
break
case"Comment":u.N(a.b,"#777")
break
case"Id":u.N(a.b,"#111")
break
case"Num":u.N(a.b,"#191")
break
case"Preprocess":u.N(a.b,"#737")
break
case"Reserved":u.N(a.b,"#119")
break
case"Symbol":u.N(a.b,"#611")
break
case"Type":u.N(a.b,"#171")
break
case"Whitespace":u.N(a.b,"#111")
break}},
bs:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=L.iz()
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
e.k(0,k).j(0,m).a.push(new K.aN())
t=e.k(0,j).j(0,i)
u=K.u(new H.n("\n"))
t.a.push(u)
u=e.k(0,j).j(0,j)
t=new K.a8()
s=[K.bh]
t.a=H.b([],s)
u.a.push(t)
u=K.u(new H.n("\n"))
t.a.push(u)
u=e.k(0,r).j(0,h)
t=K.u(new H.n("#"))
u.a.push(t)
t=e.k(0,h).j(0,h)
u=new K.a8()
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
u.d=u.a.S("Num")
u=e.k(0,n)
u.d=u.a.S("Num")
u=e.k(0,m)
u.d=u.a.S("Symbol")
u=e.k(0,i)
u.d=u.a.S(j)
u=e.k(0,g)
u.d=u.a.S(h)
u=e.k(0,f)
u.d=u.a.S(f)
u=e.k(0,q)
u=u.d=u.a.S(q)
t=[P.h]
u.aH(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aH(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aH(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return e}}
V.fJ.prototype={
bz:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.N(a.b,"#911")
u.N("=",t)
break
case"Id":u.N(a.b,t)
break
case"Other":u.N(a.b,t)
break
case"Reserved":u.N(a.b,"#119")
break
case"String":u.N(a.b,"#171")
break
case"Symbol":u.N(a.b,"#616")
break}},
bs:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=L.iz()
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
l.k(0,o).j(0,o).a.push(new K.aN())
l.k(0,s).j(0,m).a.push(new K.aN())
u=l.k(0,m).j(0,m)
t=new K.a8()
t.a=H.b([],[K.bh])
u.a.push(t)
u=K.u(new H.n('</\\-!>=_"'))
t.a.push(u)
u=K.O("a","z")
t.a.push(u)
u=K.O("A","Z")
t.a.push(u)
u=l.k(0,p)
u.d=u.a.S("Symbol")
u=l.k(0,n)
u.d=u.a.S("String")
u=l.k(0,r)
t=u.a.S(r)
u.d=t
t.aH(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
t=l.k(0,q)
t.d=t.a.S(q)
t=l.k(0,m)
t.d=t.a.S(m)
return l}}
V.hH.prototype={
e0:function(a,b){this.d=H.b([],[[P.o,W.am]])
this.N(C.b.j(b,"\n"),"#111")},
bz:function(a){},
bs:function(){return}}
V.hM.prototype={
dd:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
if(m.c==null)return
u=m.a
t=P.iU().gbg().h(0,H.e(u))
if(t==null)if(d){c.$0()
m.b9(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.bX(m.c).n(0,q)
o=W.mS("radio")
o.checked=s
o.name=u
W.W(o,"change",new V.hN(m,o,c,b),!1)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.bX(m.c).n(0,r.createElement("br"))},
ae:function(a,b,c){return this.dd(a,b,c,!1)},
b9:function(a){var u,t,s=P.iU(),r=P.h,q=P.lo(s.gbg(),r,r)
q.m(0,this.a,a)
u=s.cu(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.ex([],[]).bl(""),"",t)}}
V.hN.prototype={
$1:function(a){var u=this
if(u.b.checked){u.c.$0()
u.a.b9(u.d)}}}
V.i1.prototype={
eq:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.W(q,"scroll",new V.i3(o),!1)},
df:function(a){var u,t,s,r,q,p,o,n
this.h_()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b,r=C.b.hF(a),s.toString,r=new H.n(r),r=new P.bL(s.cw(new H.bg(r,r.gl(r))).a());r.t();){s=r.gB(r)
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
if(H.mc(s,"|",0)){p=s.split("|")
o=u.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.d(p,1)
o.href=p[1]
o.textContent=p[0]
t.appendChild(o)}else{n=P.eH(C.z,s,C.e,!1)
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
r.bn("dart")
u=new V.fI("glsl")
u.bn("glsl")
t=new V.fJ("html")
t.bn("html")
s=C.b.hx(H.b([r,u,t],[V.cY]),new V.i4(a))
if(s!=null)return s
r=new V.hH("plain")
r.bn("plain")
return r},
de:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.b([],[P.v])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(J.cL(s).a5(s,"+")){b0[t]=C.a.aa(s,1)
a6.push(1)
u=!0}else if(C.a.a5(s,"-")){b0[t]=C.a.aa(s,1)
a6.push(-1)
u=!0}else a6.push(0)}r=this.e9(a8)
r.e0(0,b0)
q=document
p=q.createElement("div")
p.className="codeTableScroll"
o=q.createElement("table")
o.className="codeTable"
p.appendChild(o)
this.a.appendChild(p)
n=P.eH(C.z,a7,C.e,!1)
m=q.createElement("tr")
m.className="headerRow"
l=q.createElement("td")
l.className="headerCell"
l.colSpan=u?3:2
k=q.createElement("div")
k.className="tableHeader"
k.id=n
j=W.ld()
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
for(a2=C.b.gR(s);a2.t();)d.appendChild(a2.gB(a2))
f.appendChild(e)
f.appendChild(d)
o.appendChild(f)}},
h8:function(a){var u,t,s,r,q,p="auto",o=document,n=o.createElement("table")
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
for(s=0;s<2;++s){r=o.createElement("div")
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
h_:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=L.iz()
u.d=u.k(0,q)
t=u.k(0,q).j(0,p)
s=K.u(new H.n("*"))
t.a.push(s)
t.c=!0
t=u.k(0,p).j(0,p)
s=new K.a8()
r=[K.bh]
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
s=new K.a8()
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
s=new K.a8()
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
t=new K.a8()
t.a=H.b([],r)
s.a.push(t)
s=K.u(new H.n("|]"))
t.a.push(s)
s=u.k(0,k).j(0,j)
t=K.u(new H.n("]"))
s.a.push(t)
s.c=!0
s=u.k(0,k).j(0,k)
t=new K.a8()
t.a=H.b([],r)
s.a.push(t)
s=K.u(new H.n("|]"))
t.a.push(s)
u.k(0,q).j(0,i).a.push(new K.aN())
s=u.k(0,i).j(0,i)
t=new K.a8()
t.a=H.b([],r)
s.a.push(t)
s=K.u(new H.n("*_`["))
t.a.push(s)
s=u.k(0,"BoldEnd")
s.d=s.a.S(p)
s=u.k(0,n)
s.d=s.a.S(o)
s=u.k(0,"CodeEnd")
s.d=s.a.S(m)
s=u.k(0,j)
s.d=s.a.S("Link")
s=u.k(0,i)
s.d=s.a.S(i)
this.b=u}}
V.i3.prototype={
$1:function(a){P.lF(C.n,new V.i2(this.a))}}
V.i2.prototype={
$0:function(){var u=C.d.ao(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
V.i4.prototype={
$1:function(a){return a.a===this.a}}
V.io.prototype={
ae:function(a,b,c){var u,t,s,r,q=this,p=W.kF(null)
p.src=b
p.height=p.width=64
u=p.style
u.border="solid 2px white"
u=J.bX(q.c)
t=u.gl(u)
W.W(p,"click",new V.iq(q,p,b,t),!1)
J.bX(q.c).n(0,p)
J.bX(q.c).n(0,document.createElement("br"))
s=P.iU().gbg().h(0,H.e(q.a))
if(s==null){q.b9(t)
r=c}else r=P.cN(s,null,null)==t
if(r)p.click()},
n:function(a,b){return this.ae(a,b,!1)},
b9:function(a){var u,t,s=P.iU(),r=P.h,q=P.lo(s.gbg(),r,r)
q.m(0,this.a,H.e(a))
u=s.cu(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.ex([],[]).bl(""),"",t)}}
V.iq.prototype={
$1:function(a){var u=this,t=u.a,s=J.bX(t.c)
s.C(s,new V.ip())
s=u.b.style
s.border="solid 2px black"
t.d.$1(u.c)
t.b9(u.d)}}
V.ip.prototype={
$1:function(a){var u
if(!!J.P(a).$iby){u=a.style
u.border="solid 2px white"}}}
B.ke.prototype={
$0:function(){var u=this.a,t=u.r
t.sv(0,new V.y(0.1,0.1,0.1))
t=u.x
t.sv(0,new V.y(0.2,0.2,0.2))
u.cy.sv(0,new V.y(0,0,0))
u.cx.sv(0,new V.y(1,1,1))}}
B.kf.prototype={
$0:function(){var u=this.a,t=u.r
t.sv(0,new V.y(0.11,0.11,0.1))
t=u.x
t.sv(0,new V.y(0.21,0.21,0.2))
u.cy.sv(0,new V.y(0,0,0))
u=u.cx
u.sv(0,new V.y(1,0.9,0.5))}}
B.kg.prototype={
$0:function(){var u=this.a,t=u.r
t.sv(0,new V.y(0.1,0.1,0.1))
t=u.x
t.sv(0,new V.y(0.1,0.1,0.1))
u.cy.saC(0.4)
t=u.cy
t.sv(0,new V.y(0.6,0.6,0.6))
u=u.cx
u.sv(0,new V.y(0.4,0.4,0.4))}}
B.kh.prototype={
$0:function(){var u=this.a,t=u.r
t.sv(0,new V.y(0.1,0.1,0.1))
t=u.x
t.sv(0,new V.y(0.1,0.1,0.1))
u.cy.saC(0.4)
t=u.cy
t.sv(0,new V.y(0.2,0.3,1))
u=u.cx
u.sv(0,new V.y(0.3,0.3,0.3))}}
B.ki.prototype={
$0:function(){var u=this.a,t=u.r
t.sv(0,new V.y(0.1,0.1,0.1))
t=u.x
t.sv(0,new V.y(0.1,0.1,0.1))
u.cy.saC(0.6)
t=u.cy
t.sv(0,new V.y(0.8,0.8,0.8))
u=u.cx
u.sv(0,new V.y(0.2,0.2,0.2))}}
B.kj.prototype={
$0:function(){var u=this.a,t=u.r
t.sv(0,new V.y(0.1,0.1,0.1))
t=u.x
t.sv(0,new V.y(0.1,0.1,0.1))
u.cy.saC(0.6)
u.cy.sv(0,new V.y(1,1,1))
u.cx.sv(0,new V.y(0,0,0))}}
B.kk.prototype={
$0:function(){var u=this.a,t=u.r
t.sv(0,new V.y(0.1,0.1,0.1))
t=u.x
t.sv(0,new V.y(0.1,0.1,0.1))
u.cy.saC(0.9)
t=u.cy
t.sv(0,new V.y(1,0.8,0.8))
u.cx.sv(0,new V.y(0,0,0))}}
B.kl.prototype={
$0:function(){var u,t=this.a
t.r.sv(0,new V.y(0,0,0))
u=t.x
u.sv(0,new V.y(0.1,0.1,0.1))
t.cy.saC(0.99)
u=t.cy
u.sv(0,new V.y(0.95,0.95,0.95))
t.cx.sv(0,new V.y(0,0,0))}}
B.km.prototype={
$0:function(){var u=this.a,t=u.r
t.sv(0,new V.y(0.3,0.3,0.3))
t=u.x
t.sv(0,new V.y(0.5,0.5,0.5))
u.cy.sv(0,new V.y(0,0,0))
u=u.cx
u.sv(0,new V.y(0.3,0.3,0.3))}}
B.kn.prototype={
$1:function(a){var u,t=this.a.Q,s=this.b.f.hH(a),r=t.c
if(!r.b)t.b8(new A.X(r.a,!0,!1))
r=t.d
if(r!==s){if(r!=null)r.gp().V(0,t.gaQ())
u=t.d
t.d=s
s.gp().n(0,t.gaQ())
s=new D.B(t.b+".texture2D",u,t.d)
s.b=!0
t.a.X(s)}}}
B.ko.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.a,r=[P.h]
u.de("Vertex Shader","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
t=t.a
u.de("Fragment Shader","glsl",0,H.b((t==null?null:t.d).split("\n"),r))}};(function aliases(){var u=J.a.prototype
u.ei=u.i
u=J.dc.prototype
u.ek=u.i
u=P.i.prototype
u.ej=u.bD
u=W.Q.prototype
u.bG=u.ak
u=W.eo.prototype
u.el=u.au
u=K.d8.prototype
u.eh=u.aF
u.cG=u.i
u=O.cb.prototype
u.cH=u.az
u=O.ay.prototype
u.cI=u.az})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installStaticTearOff,q=hunkHelpers.installInstanceTearOff,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u,n=hunkHelpers._instance_1u,m=hunkHelpers._instance_0i
u(J,"o5","mW",21)
t(P,"oA","nE",7)
t(P,"oB","nF",7)
t(P,"oC","nG",7)
s(P,"m4","oy",9)
r(W,"oP",4,null,["$4"],["nH"],16,0)
r(W,"oQ",4,null,["$4"],["nI"],16,0)
var l
q(l=E.aR.prototype,"gdZ",0,0,null,["$1","$0"],["e_","hP"],0,0)
q(l,"gdX",0,0,null,["$1","$0"],["dY","hM"],0,0)
p(l,"ghK","hL",4)
p(l,"ghN","hO",4)
q(l=E.dF.prototype,"gcL",0,0,null,["$1","$0"],["cN","cM"],0,0)
o(l,"gi2","e3",9)
n(l=X.dO.prototype,"gff","fg",5)
n(l,"gf3","f4",5)
n(l,"gf9","fa",2)
n(l,"gfj","fk",10)
n(l,"gfh","fi",10)
n(l,"gfn","fo",2)
n(l,"gfs","ft",2)
n(l,"gfd","fe",2)
n(l,"gfp","fq",2)
n(l,"gfb","fc",2)
n(l,"gfu","fv",19)
n(l,"gfw","fz",5)
n(l,"gfO","fP",6)
n(l,"gfK","fL",6)
n(l,"gfM","fN",6)
q(D.bv.prototype,"ges",0,0,null,["$1","$0"],["ax","eu"],0,0)
q(l=D.de.prototype,"gd_",0,0,null,["$1","$0"],["d0","fl"],0,0)
n(l,"gfA","fB",20)
p(l,"geY","eZ",11)
p(l,"gfE","fF",11)
m(V.J.prototype,"gl","ck",12)
m(V.D.prototype,"gl","ck",12)
q(l=U.c5.prototype,"gaN",0,0,null,["$1","$0"],["T","ab"],0,0)
p(l,"geW","eX",13)
p(l,"gfC","fD",13)
q(l=U.dP.prototype,"gaN",0,0,null,["$1","$0"],["T","ab"],0,0)
n(l,"gbO","bP",1)
n(l,"gbQ","bR",1)
n(l,"gbS","bT",1)
q(l=U.dQ.prototype,"gaN",0,0,null,["$1","$0"],["T","ab"],0,0)
n(l,"gbO","bP",1)
n(l,"gbQ","bR",1)
n(l,"gbS","bT",1)
n(l,"geP","eQ",1)
n(l,"geR","eS",1)
n(l,"gh6","h7",1)
n(l,"gh4","h5",1)
n(l,"gh2","h3",1)
n(U.dR.prototype,"geU","eV",1)
q(l=M.cZ.prototype,"gZ",0,0,null,["$1","$0"],["a_","b2"],0,0)
p(l,"gfG","fH",14)
p(l,"gfI","fJ",14)
q(M.d0.prototype,"gZ",0,0,null,["$1","$0"],["a_","b2"],0,0)
q(l=M.d5.prototype,"gZ",0,0,null,["$1","$0"],["a_","b2"],0,0)
p(l,"gf5","f6",4)
p(l,"gf7","f8",4)
q(l=O.dh.prototype,"gaQ",0,0,null,["$1","$0"],["X","b5"],0,0)
q(l,"gfU",0,0,null,["$1","$0"],["d2","fV"],0,0)
p(l,"gf_","f0",15)
p(l,"gf1","f2",15)
q(O.cb.prototype,"gaQ",0,0,null,["$1","$0"],["X","b5"],0,0)
q(O.dw.prototype,"gaQ",0,0,null,["$1","$0"],["X","b5"],0,0)
q(X.dq.prototype,"gey",0,0,null,["$1","$0"],["as","ez"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.a2,null)
s(P.a2,[H.kK,J.a,J.a6,P.eb,P.i,H.bg,P.fQ,H.d6,H.iQ,H.fe,H.iE,P.bw,H.c0,H.et,P.a1,H.fX,H.fZ,H.fS,P.eA,P.bK,P.bL,P.dV,P.dB,P.id,P.dG,P.jX,P.jA,P.ju,P.ea,P.x,P.jP,P.h6,P.fa,P.fM,P.jV,P.jU,P.aL,P.ad,P.ac,P.b9,P.hF,P.dz,P.e3,P.fF,P.fH,P.o,P.R,P.bj,P.h,P.S,P.bM,P.iS,P.jD,W.fi,W.cx,W.M,W.dn,W.eo,W.jJ,W.d7,W.aW,W.jz,W.eI,P.jF,P.eF,P.jv,P.bH,K.aN,K.d8,K.bh,K.hO,K.hX,L.dA,L.dH,L.dI,L.iy,O.aO,O.cc,E.f6,E.aR,E.bt,E.bC,E.e2,E.hP,E.dF,Z.dT,Z.dU,Z.c_,Z.bz,Z.b1,D.f9,D.bx,D.Y,X.cX,X.dd,X.fV,X.h3,X.aj,X.hu,X.iA,X.dO,D.f3,D.bv,D.a7,D.hJ,D.i8,V.y,V.aP,V.fx,V.di,V.aU,V.a3,V.a_,V.aZ,V.dt,V.J,V.D,U.dP,U.dQ,U.dR,M.d0,M.d5,M.ao,A.cU,A.eZ,A.X,A.cV,A.d2,A.dr,A.dy,A.hc,A.cq,A.cr,A.ct,A.cu,A.dL,A.iL,F.ba,F.c8,F.ci,F.hY,F.hZ,F.i_,F.i0,F.bJ,F.j5,F.j6,F.j9,F.ja,O.dD,O.cb,O.hd,T.it,X.kx,X.ii,X.fN,X.dq,V.cY,V.hM,V.i1,V.io])
s(J.a,[J.fR,J.db,J.dc,J.bd,J.c7,J.be,H.cf,H.bi,W.f,W.eW,W.br,W.aw,W.H,W.dX,W.ai,W.fn,W.fo,W.dZ,W.d4,W.e0,W.fq,W.k,W.e4,W.ax,W.fK,W.e6,W.aS,W.h2,W.ho,W.ec,W.ed,W.aA,W.ee,W.eh,W.aC,W.el,W.en,W.aF,W.ep,W.aG,W.eu,W.ap,W.ey,W.ix,W.aI,W.eB,W.iC,W.iY,W.eJ,W.eL,W.eN,W.eP,W.eR,P.aT,P.e8,P.aX,P.ej,P.hL,P.ev,P.b0,P.eD,P.f_,P.dW,P.du,P.er])
s(J.dc,[J.hG,J.bI,J.bf])
t(J.kJ,J.bd)
s(J.c7,[J.da,J.d9])
t(P.h0,P.eb)
s(P.h0,[H.dM,W.jk,W.a4,P.fB])
t(H.n,H.dM)
s(P.i,[H.q,H.ca,H.cv,P.fP])
s(H.q,[H.df,H.fY])
t(H.ft,H.ca)
s(P.fQ,[H.h7,H.je])
t(H.h8,H.df)
t(H.ff,H.fe)
s(P.bw,[H.hC,H.fU,H.iP,H.f8,H.hV,P.dp,P.al,P.iR,P.iN,P.cm,P.fd,P.fl])
s(H.c0,[H.ks,H.ij,H.fT,H.ka,H.kb,H.kc,P.jg,P.jf,P.jh,P.ji,P.jO,P.jN,P.k5,P.jx,P.jy,P.h_,P.h5,P.fr,P.fs,P.iX,P.iT,P.iV,P.iW,P.jQ,P.jR,P.jT,P.jS,P.k0,P.k_,P.k1,P.k2,W.fu,W.hq,W.hs,W.hU,W.ic,W.jp,W.hB,W.hA,W.jB,W.jC,W.jM,W.jW,P.jG,P.jH,P.k6,P.fC,P.fD,P.f1,E.hQ,E.hR,E.hS,E.iw,D.fy,D.fz,F.jY,F.jc,F.jb,F.j7,F.j8,O.hg,O.hh,O.hi,O.hj,O.hk,O.hl,O.hm,O.hn,T.iv,T.iu,V.kq,V.hN,V.i3,V.i2,V.i4,V.iq,V.ip,B.ke,B.kf,B.kg,B.kh,B.ki,B.kj,B.kk,B.kl,B.km,B.kn,B.ko])
s(H.ij,[H.ia,H.bY])
t(P.h4,P.a1)
s(P.h4,[H.I,W.jj])
t(H.dj,H.bi)
s(H.dj,[H.cz,H.cB])
t(H.cA,H.cz)
t(H.cg,H.cA)
t(H.cC,H.cB)
t(H.dk,H.cC)
s(H.dk,[H.hv,H.hw,H.hx,H.hy,H.hz,H.dl,H.ch])
t(P.jK,P.fP)
t(P.jw,P.jX)
t(P.jt,P.jA)
t(P.eG,P.h6)
t(P.dN,P.eG)
s(P.fa,[P.f4,P.fv])
t(P.fg,P.id)
s(P.fg,[P.f5,P.fL,P.j0,P.j_])
t(P.iZ,P.fv)
s(P.ac,[P.L,P.v])
s(P.al,[P.bF,P.fO])
t(P.jm,P.bM)
s(W.f,[W.C,W.fA,W.cd,W.aE,W.cD,W.aH,W.aq,W.cF,W.jd,W.cw,P.f2,P.bq])
s(W.C,[W.Q,W.b8])
s(W.Q,[W.p,P.l])
s(W.p,[W.eX,W.eY,W.bs,W.bu,W.am,W.fE,W.by,W.hW,W.dC,W.ig,W.ih,W.co])
t(W.fh,W.aw)
t(W.c1,W.dX)
s(W.ai,[W.fj,W.fk])
t(W.e_,W.dZ)
t(W.d3,W.e_)
t(W.e1,W.e0)
t(W.fp,W.e1)
t(W.an,W.br)
t(W.e5,W.e4)
t(W.c4,W.e5)
t(W.e7,W.e6)
t(W.c6,W.e7)
t(W.bk,W.k)
s(W.bk,[W.bA,W.aB,W.bG])
t(W.hp,W.ec)
t(W.hr,W.ed)
t(W.ef,W.ee)
t(W.ht,W.ef)
t(W.ei,W.eh)
t(W.dm,W.ei)
t(W.em,W.el)
t(W.hI,W.em)
t(W.hT,W.en)
t(W.cE,W.cD)
t(W.i6,W.cE)
t(W.eq,W.ep)
t(W.i7,W.eq)
t(W.ib,W.eu)
t(W.ez,W.ey)
t(W.ik,W.ez)
t(W.cG,W.cF)
t(W.il,W.cG)
t(W.eC,W.eB)
t(W.iB,W.eC)
t(W.bn,W.aB)
t(W.eK,W.eJ)
t(W.jl,W.eK)
t(W.dY,W.d4)
t(W.eM,W.eL)
t(W.jq,W.eM)
t(W.eO,W.eN)
t(W.eg,W.eO)
t(W.eQ,W.eP)
t(W.jE,W.eQ)
t(W.eS,W.eR)
t(W.jI,W.eS)
t(W.jn,W.jj)
t(W.jo,P.dB)
t(W.jL,W.eo)
t(P.ex,P.jF)
t(P.a9,P.jv)
t(P.e9,P.e8)
t(P.fW,P.e9)
t(P.ek,P.ej)
t(P.hD,P.ek)
t(P.cl,P.l)
t(P.ew,P.ev)
t(P.ie,P.ew)
t(P.eE,P.eD)
t(P.iD,P.eE)
t(P.f0,P.dW)
t(P.hE,P.bq)
t(P.es,P.er)
t(P.i9,P.es)
s(K.d8,[K.a8,L.dK])
s(E.f6,[Z.cW,A.dv,T.dE])
s(D.Y,[D.bb,D.bc,D.B,X.hK])
s(X.hK,[X.dg,X.aV,X.ce,X.dJ])
s(O.aO,[D.de,U.c5,M.cZ])
s(D.f9,[U.fc,U.ae])
t(U.d_,U.ae)
s(A.dv,[A.h9,A.i5])
s(A.dL,[A.bl,A.iI,A.iJ,A.iK,A.iG,A.T,A.iH,A.G,A.cp,A.iM,A.cs,A.aa,A.a0,A.bm])
s(O.dD,[O.dh,O.dw])
s(O.cb,[O.ha,O.hb,O.ay])
s(O.ay,[O.he,O.hf])
s(T.dE,[T.im,T.is])
t(T.ir,T.im)
t(X.fG,X.ii)
s(V.cY,[V.fm,V.fI,V.fJ,V.hH])
u(H.dM,H.iQ)
u(H.cz,P.x)
u(H.cA,H.d6)
u(H.cB,P.x)
u(H.cC,H.d6)
u(P.eb,P.x)
u(P.eG,P.jP)
u(W.dX,W.fi)
u(W.dZ,P.x)
u(W.e_,W.M)
u(W.e0,P.x)
u(W.e1,W.M)
u(W.e4,P.x)
u(W.e5,W.M)
u(W.e6,P.x)
u(W.e7,W.M)
u(W.ec,P.a1)
u(W.ed,P.a1)
u(W.ee,P.x)
u(W.ef,W.M)
u(W.eh,P.x)
u(W.ei,W.M)
u(W.el,P.x)
u(W.em,W.M)
u(W.en,P.a1)
u(W.cD,P.x)
u(W.cE,W.M)
u(W.ep,P.x)
u(W.eq,W.M)
u(W.eu,P.a1)
u(W.ey,P.x)
u(W.ez,W.M)
u(W.cF,P.x)
u(W.cG,W.M)
u(W.eB,P.x)
u(W.eC,W.M)
u(W.eJ,P.x)
u(W.eK,W.M)
u(W.eL,P.x)
u(W.eM,W.M)
u(W.eN,P.x)
u(W.eO,W.M)
u(W.eP,P.x)
u(W.eQ,W.M)
u(W.eR,P.x)
u(W.eS,W.M)
u(P.e8,P.x)
u(P.e9,W.M)
u(P.ej,P.x)
u(P.ek,W.M)
u(P.ev,P.x)
u(P.ew,W.M)
u(P.eD,P.x)
u(P.eE,W.M)
u(P.dW,P.a1)
u(P.er,P.x)
u(P.es,W.M)})()
var v={mangledGlobalNames:{v:"int",L:"double",ac:"num",h:"String",aL:"bool",bj:"Null",o:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.Y]},{func:1,ret:-1,args:[D.Y]},{func:1,ret:-1,args:[W.aB]},{func:1,ret:P.bj,args:[,,]},{func:1,ret:-1,args:[P.v,[P.i,E.aR]]},{func:1,ret:-1,args:[W.k]},{func:1,ret:-1,args:[W.bG]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bA]},{func:1,ret:-1,args:[P.v,[P.i,D.a7]]},{func:1,ret:P.L},{func:1,ret:-1,args:[P.v,[P.i,U.ae]]},{func:1,ret:-1,args:[P.v,[P.i,M.ao]]},{func:1,ret:-1,args:[P.v,[P.i,V.aU]]},{func:1,ret:P.aL,args:[W.Q,P.h,P.h,W.cx]},{func:1,ret:P.bj,args:[,]},{func:1,ret:P.bH,args:[,,]},{func:1,ret:-1,args:[W.bn]},{func:1,ret:P.aL,args:[[P.i,D.a7]]},{func:1,ret:P.v,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.r=W.bs.prototype
C.i=W.bu.prototype
C.T=W.am.prototype
C.W=J.a.prototype
C.b=J.bd.prototype
C.X=J.d9.prototype
C.c=J.da.prototype
C.j=J.db.prototype
C.d=J.c7.prototype
C.a=J.be.prototype
C.Y=J.bf.prototype
C.D=J.hG.prototype
C.E=P.du.prototype
C.F=W.dC.prototype
C.q=J.bI.prototype
C.G=W.bn.prototype
C.H=W.cw.prototype
C.I=new E.bt("Browser.chrome")
C.t=new E.bt("Browser.firefox")
C.u=new E.bt("Browser.edge")
C.J=new E.bt("Browser.other")
C.a7=new P.f5()
C.K=new P.f4()
C.v=function getTagFallback(o) {
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
C.w=function(hooks) { return hooks; }

C.R=new P.hF()
C.e=new P.iZ()
C.S=new P.j0()
C.f=new P.jw()
C.n=new P.b9(0)
C.U=new P.b9(5e6)
C.V=new P.fM("element",!1,!1,!1)
C.x=H.b(u([127,2047,65535,1114111]),[P.v])
C.k=H.b(u([0,0,32776,33792,1,10240,0,0]),[P.v])
C.Z=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.l=H.b(u([0,0,65490,45055,65535,34815,65534,18431]),[P.v])
C.m=H.b(u([0,0,26624,1023,65534,2047,65534,2047]),[P.v])
C.a_=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.y=H.b(u([]),[P.h])
C.a0=H.b(u([0,0,32722,12287,65534,34815,65534,18431]),[P.v])
C.z=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.v])
C.h=H.b(u([0,0,24576,1023,65534,34815,65534,18431]),[P.v])
C.A=H.b(u([0,0,32754,11263,65534,34815,65534,18431]),[P.v])
C.a1=H.b(u([0,0,32722,12287,65535,34815,65534,18431]),[P.v])
C.B=H.b(u([0,0,65490,12287,65535,34815,65534,18431]),[P.v])
C.o=H.b(u(["bind","if","ref","repeat","syntax"]),[P.h])
C.p=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])
C.a2=new H.ff(0,{},C.y,[P.h,P.h])
C.a3=new E.bC("OperatingSystem.windows")
C.C=new E.bC("OperatingSystem.mac")
C.a4=new E.bC("OperatingSystem.linux")
C.a5=new E.bC("OperatingSystem.other")
C.a6=new P.bK(null,2)})();(function staticFields(){$.au=0
$.bZ=null
$.lf=null
$.m6=null
$.m3=null
$.ma=null
$.k7=null
$.kd=null
$.l4=null
$.bP=null
$.cJ=null
$.cK=null
$.l_=!1
$.ar=C.f
$.ab=[]
$.aQ=null
$.kC=null
$.ll=null
$.lk=null
$.cy=P.kM(P.h,P.fH)
$.fw=null
$.lr=null
$.lv=null
$.aD=null
$.lB=null
$.lL=null
$.lN=null
$.j1=null
$.j2=null
$.j3=null
$.lM=null
$.lu=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"p7","mf",function(){return H.m5("_$dart_dartClosure")})
u($,"p8","l9",function(){return H.m5("_$dart_js")})
u($,"p9","mg",function(){return H.aJ(H.iF({
toString:function(){return"$receiver$"}}))})
u($,"pa","mh",function(){return H.aJ(H.iF({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"pb","mi",function(){return H.aJ(H.iF(null))})
u($,"pc","mj",function(){return H.aJ(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pf","mm",function(){return H.aJ(H.iF(void 0))})
u($,"pg","mn",function(){return H.aJ(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pe","ml",function(){return H.aJ(H.lH(null))})
u($,"pd","mk",function(){return H.aJ(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"pi","mp",function(){return H.aJ(H.lH(void 0))})
u($,"ph","mo",function(){return H.aJ(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"pw","la",function(){return P.nD()})
u($,"pj","mq",function(){return P.ny()})
u($,"px","mu",function(){return H.n6(H.bO(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.v])))})
u($,"pA","mw",function(){return P.nk("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"pB","mx",function(){return P.o3()})
u($,"py","mv",function(){return P.lp(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)})
u($,"pq","mt",function(){return Z.ak(0)})
u($,"pk","mr",function(){return Z.ak(511)})
u($,"ps","at",function(){return Z.ak(1)})
u($,"pr","b6",function(){return Z.ak(2)})
u($,"pm","b5",function(){return Z.ak(4)})
u($,"pt","b7",function(){return Z.ak(8)})
u($,"pu","bp",function(){return Z.ak(16)})
u($,"pn","cP",function(){return Z.ak(32)})
u($,"po","cQ",function(){return Z.ak(64)})
u($,"pp","ms",function(){return Z.ak(96)})
u($,"pv","bV",function(){return Z.ak(128)})
u($,"pl","b4",function(){return Z.ak(256)})
u($,"p6","me",function(){return new V.fx(1e-9)})
u($,"p5","F",function(){return $.me()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cf,DataView:H.bi,ArrayBufferView:H.bi,Float32Array:H.cg,Float64Array:H.cg,Int16Array:H.hv,Int32Array:H.hw,Int8Array:H.hx,Uint16Array:H.hy,Uint32Array:H.hz,Uint8ClampedArray:H.dl,CanvasPixelArray:H.dl,Uint8Array:H.ch,HTMLAudioElement:W.p,HTMLBRElement:W.p,HTMLBaseElement:W.p,HTMLButtonElement:W.p,HTMLContentElement:W.p,HTMLDListElement:W.p,HTMLDataElement:W.p,HTMLDataListElement:W.p,HTMLDetailsElement:W.p,HTMLDialogElement:W.p,HTMLEmbedElement:W.p,HTMLFieldSetElement:W.p,HTMLHRElement:W.p,HTMLHeadElement:W.p,HTMLHeadingElement:W.p,HTMLHtmlElement:W.p,HTMLIFrameElement:W.p,HTMLInputElement:W.p,HTMLLIElement:W.p,HTMLLabelElement:W.p,HTMLLegendElement:W.p,HTMLLinkElement:W.p,HTMLMapElement:W.p,HTMLMediaElement:W.p,HTMLMenuElement:W.p,HTMLMetaElement:W.p,HTMLMeterElement:W.p,HTMLModElement:W.p,HTMLOListElement:W.p,HTMLObjectElement:W.p,HTMLOptGroupElement:W.p,HTMLOptionElement:W.p,HTMLOutputElement:W.p,HTMLParagraphElement:W.p,HTMLParamElement:W.p,HTMLPictureElement:W.p,HTMLPreElement:W.p,HTMLProgressElement:W.p,HTMLQuoteElement:W.p,HTMLScriptElement:W.p,HTMLShadowElement:W.p,HTMLSlotElement:W.p,HTMLSourceElement:W.p,HTMLSpanElement:W.p,HTMLStyleElement:W.p,HTMLTableCaptionElement:W.p,HTMLTableCellElement:W.p,HTMLTableDataCellElement:W.p,HTMLTableHeaderCellElement:W.p,HTMLTableColElement:W.p,HTMLTextAreaElement:W.p,HTMLTimeElement:W.p,HTMLTitleElement:W.p,HTMLTrackElement:W.p,HTMLUListElement:W.p,HTMLUnknownElement:W.p,HTMLVideoElement:W.p,HTMLDirectoryElement:W.p,HTMLFontElement:W.p,HTMLFrameElement:W.p,HTMLFrameSetElement:W.p,HTMLMarqueeElement:W.p,HTMLElement:W.p,AccessibleNodeList:W.eW,HTMLAnchorElement:W.eX,HTMLAreaElement:W.eY,Blob:W.br,HTMLBodyElement:W.bs,HTMLCanvasElement:W.bu,CDATASection:W.b8,CharacterData:W.b8,Comment:W.b8,ProcessingInstruction:W.b8,Text:W.b8,CSSPerspective:W.fh,CSSCharsetRule:W.H,CSSConditionRule:W.H,CSSFontFaceRule:W.H,CSSGroupingRule:W.H,CSSImportRule:W.H,CSSKeyframeRule:W.H,MozCSSKeyframeRule:W.H,WebKitCSSKeyframeRule:W.H,CSSKeyframesRule:W.H,MozCSSKeyframesRule:W.H,WebKitCSSKeyframesRule:W.H,CSSMediaRule:W.H,CSSNamespaceRule:W.H,CSSPageRule:W.H,CSSRule:W.H,CSSStyleRule:W.H,CSSSupportsRule:W.H,CSSViewportRule:W.H,CSSStyleDeclaration:W.c1,MSStyleCSSProperties:W.c1,CSS2Properties:W.c1,CSSImageValue:W.ai,CSSKeywordValue:W.ai,CSSNumericValue:W.ai,CSSPositionValue:W.ai,CSSResourceValue:W.ai,CSSUnitValue:W.ai,CSSURLImageValue:W.ai,CSSStyleValue:W.ai,CSSMatrixComponent:W.aw,CSSRotation:W.aw,CSSScale:W.aw,CSSSkew:W.aw,CSSTranslation:W.aw,CSSTransformComponent:W.aw,CSSTransformValue:W.fj,CSSUnparsedValue:W.fk,DataTransferItemList:W.fn,HTMLDivElement:W.am,DOMException:W.fo,ClientRectList:W.d3,DOMRectList:W.d3,DOMRectReadOnly:W.d4,DOMStringList:W.fp,DOMTokenList:W.fq,Element:W.Q,AbortPaymentEvent:W.k,AnimationEvent:W.k,AnimationPlaybackEvent:W.k,ApplicationCacheErrorEvent:W.k,BackgroundFetchClickEvent:W.k,BackgroundFetchEvent:W.k,BackgroundFetchFailEvent:W.k,BackgroundFetchedEvent:W.k,BeforeInstallPromptEvent:W.k,BeforeUnloadEvent:W.k,BlobEvent:W.k,CanMakePaymentEvent:W.k,ClipboardEvent:W.k,CloseEvent:W.k,CustomEvent:W.k,DeviceMotionEvent:W.k,DeviceOrientationEvent:W.k,ErrorEvent:W.k,ExtendableEvent:W.k,ExtendableMessageEvent:W.k,FetchEvent:W.k,FontFaceSetLoadEvent:W.k,ForeignFetchEvent:W.k,GamepadEvent:W.k,HashChangeEvent:W.k,InstallEvent:W.k,MediaEncryptedEvent:W.k,MediaKeyMessageEvent:W.k,MediaQueryListEvent:W.k,MediaStreamEvent:W.k,MediaStreamTrackEvent:W.k,MessageEvent:W.k,MIDIConnectionEvent:W.k,MIDIMessageEvent:W.k,MutationEvent:W.k,NotificationEvent:W.k,PageTransitionEvent:W.k,PaymentRequestEvent:W.k,PaymentRequestUpdateEvent:W.k,PopStateEvent:W.k,PresentationConnectionAvailableEvent:W.k,PresentationConnectionCloseEvent:W.k,ProgressEvent:W.k,PromiseRejectionEvent:W.k,PushEvent:W.k,RTCDataChannelEvent:W.k,RTCDTMFToneChangeEvent:W.k,RTCPeerConnectionIceEvent:W.k,RTCTrackEvent:W.k,SecurityPolicyViolationEvent:W.k,SensorErrorEvent:W.k,SpeechRecognitionError:W.k,SpeechRecognitionEvent:W.k,SpeechSynthesisEvent:W.k,StorageEvent:W.k,SyncEvent:W.k,TrackEvent:W.k,TransitionEvent:W.k,WebKitTransitionEvent:W.k,VRDeviceEvent:W.k,VRDisplayEvent:W.k,VRSessionEvent:W.k,MojoInterfaceRequestEvent:W.k,ResourceProgressEvent:W.k,USBConnectionEvent:W.k,IDBVersionChangeEvent:W.k,AudioProcessingEvent:W.k,OfflineAudioCompletionEvent:W.k,WebGLContextEvent:W.k,Event:W.k,InputEvent:W.k,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.an,FileList:W.c4,FileWriter:W.fA,HTMLFormElement:W.fE,Gamepad:W.ax,History:W.fK,HTMLCollection:W.c6,HTMLFormControlsCollection:W.c6,HTMLOptionsCollection:W.c6,ImageData:W.aS,HTMLImageElement:W.by,KeyboardEvent:W.bA,Location:W.h2,MediaList:W.ho,MessagePort:W.cd,MIDIInputMap:W.hp,MIDIOutputMap:W.hr,MimeType:W.aA,MimeTypeArray:W.ht,PointerEvent:W.aB,MouseEvent:W.aB,DragEvent:W.aB,Document:W.C,DocumentFragment:W.C,HTMLDocument:W.C,ShadowRoot:W.C,XMLDocument:W.C,Attr:W.C,DocumentType:W.C,Node:W.C,NodeList:W.dm,RadioNodeList:W.dm,Plugin:W.aC,PluginArray:W.hI,RTCStatsReport:W.hT,HTMLSelectElement:W.hW,SourceBuffer:W.aE,SourceBufferList:W.i6,SpeechGrammar:W.aF,SpeechGrammarList:W.i7,SpeechRecognitionResult:W.aG,Storage:W.ib,CSSStyleSheet:W.ap,StyleSheet:W.ap,HTMLTableElement:W.dC,HTMLTableRowElement:W.ig,HTMLTableSectionElement:W.ih,HTMLTemplateElement:W.co,TextTrack:W.aH,TextTrackCue:W.aq,VTTCue:W.aq,TextTrackCueList:W.ik,TextTrackList:W.il,TimeRanges:W.ix,Touch:W.aI,TouchEvent:W.bG,TouchList:W.iB,TrackDefaultList:W.iC,CompositionEvent:W.bk,FocusEvent:W.bk,TextEvent:W.bk,UIEvent:W.bk,URL:W.iY,VideoTrackList:W.jd,WheelEvent:W.bn,Window:W.cw,DOMWindow:W.cw,CSSRuleList:W.jl,ClientRect:W.dY,DOMRect:W.dY,GamepadList:W.jq,NamedNodeMap:W.eg,MozNamedAttrMap:W.eg,SpeechRecognitionResultList:W.jE,StyleSheetList:W.jI,SVGLength:P.aT,SVGLengthList:P.fW,SVGNumber:P.aX,SVGNumberList:P.hD,SVGPointList:P.hL,SVGScriptElement:P.cl,SVGStringList:P.ie,SVGAElement:P.l,SVGAnimateElement:P.l,SVGAnimateMotionElement:P.l,SVGAnimateTransformElement:P.l,SVGAnimationElement:P.l,SVGCircleElement:P.l,SVGClipPathElement:P.l,SVGDefsElement:P.l,SVGDescElement:P.l,SVGDiscardElement:P.l,SVGEllipseElement:P.l,SVGFEBlendElement:P.l,SVGFEColorMatrixElement:P.l,SVGFEComponentTransferElement:P.l,SVGFECompositeElement:P.l,SVGFEConvolveMatrixElement:P.l,SVGFEDiffuseLightingElement:P.l,SVGFEDisplacementMapElement:P.l,SVGFEDistantLightElement:P.l,SVGFEFloodElement:P.l,SVGFEFuncAElement:P.l,SVGFEFuncBElement:P.l,SVGFEFuncGElement:P.l,SVGFEFuncRElement:P.l,SVGFEGaussianBlurElement:P.l,SVGFEImageElement:P.l,SVGFEMergeElement:P.l,SVGFEMergeNodeElement:P.l,SVGFEMorphologyElement:P.l,SVGFEOffsetElement:P.l,SVGFEPointLightElement:P.l,SVGFESpecularLightingElement:P.l,SVGFESpotLightElement:P.l,SVGFETileElement:P.l,SVGFETurbulenceElement:P.l,SVGFilterElement:P.l,SVGForeignObjectElement:P.l,SVGGElement:P.l,SVGGeometryElement:P.l,SVGGraphicsElement:P.l,SVGImageElement:P.l,SVGLineElement:P.l,SVGLinearGradientElement:P.l,SVGMarkerElement:P.l,SVGMaskElement:P.l,SVGMetadataElement:P.l,SVGPathElement:P.l,SVGPatternElement:P.l,SVGPolygonElement:P.l,SVGPolylineElement:P.l,SVGRadialGradientElement:P.l,SVGRectElement:P.l,SVGSetElement:P.l,SVGStopElement:P.l,SVGStyleElement:P.l,SVGSVGElement:P.l,SVGSwitchElement:P.l,SVGSymbolElement:P.l,SVGTSpanElement:P.l,SVGTextContentElement:P.l,SVGTextElement:P.l,SVGTextPathElement:P.l,SVGTextPositioningElement:P.l,SVGTitleElement:P.l,SVGUseElement:P.l,SVGViewElement:P.l,SVGGradientElement:P.l,SVGComponentTransferFunctionElement:P.l,SVGFEDropShadowElement:P.l,SVGMPathElement:P.l,SVGElement:P.l,SVGTransform:P.b0,SVGTransformList:P.iD,AudioBuffer:P.f_,AudioParamMap:P.f0,AudioTrackList:P.f2,AudioContext:P.bq,webkitAudioContext:P.bq,BaseAudioContext:P.bq,OfflineAudioContext:P.hE,WebGL2RenderingContext:P.du,SQLResultSetRowList:P.i9})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.dj.$nativeSuperclassTag="ArrayBufferView"
H.cz.$nativeSuperclassTag="ArrayBufferView"
H.cA.$nativeSuperclassTag="ArrayBufferView"
H.cg.$nativeSuperclassTag="ArrayBufferView"
H.cB.$nativeSuperclassTag="ArrayBufferView"
H.cC.$nativeSuperclassTag="ArrayBufferView"
H.dk.$nativeSuperclassTag="ArrayBufferView"
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
if(typeof dartMainRunner==="function")dartMainRunner(B.m8,[])
else B.m8([])})})()
//# sourceMappingURL=test.dart.js.map
