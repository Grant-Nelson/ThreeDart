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
a[c]=function(){a[c]=function(){H.p4(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kQ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kQ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kQ(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={ky:function ky(){},
k0:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
n8:function(a,b,c,d){if(!!J.R(a).$iq)return new H.fh(a,b,[c,d])
return new H.c5(a,b,[c,d])},
fE:function(){return new P.cf("No element")},
mY:function(){return new P.cf("Too many elements")},
nv:function(a,b){var u=J.ae(a)
if(typeof u!=="number")return u.M()
H.dp(a,0,u-1,b)},
dp:function(a,b,c,d){if(c-b<=32)H.nu(a,b,c,d)
else H.nt(a,b,c,d)},
nu:function(a,b,c,d){var u,t,s,r,q,p
for(u=b+1,t=J.aq(a);u<=c;++u){s=t.h(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.h(a,r-1),s)
if(typeof q!=="number")return q.a1()
q=q>0}else q=!1
if(!q)break
p=r-1
t.m(a,r,t.h(a,p))
r=p}t.m(a,r,s)}},
nt:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j=C.c.a4(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.a4(a4+a5,2),f=g-j,e=g+j,d=J.aq(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
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
H.dp(a3,a4,t-2,a6)
H.dp(a3,s+2,a5,a6)
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
break}}H.dp(a3,t,s,a6)}else H.dp(a3,t,s,a6)},
m:function m(a){this.a=a},
q:function q(){},
d7:function d7(){},
b5:function b5(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c5:function c5(a,b,c){this.a=a
this.b=b
this.$ti=c},
fh:function fh(a,b,c){this.a=a
this.b=b
this.$ti=c},
fY:function fY(a,b){this.a=null
this.b=a
this.c=b},
fZ:function fZ(a,b,c){this.a=a
this.b=b
this.$ti=c},
cq:function cq(a,b,c){this.a=a
this.b=b
this.$ti=c},
j_:function j_(a,b){this.a=a
this.b=b},
d_:function d_(){},
iz:function iz(){},
dD:function dD(){},
mQ:function(){throw H.c(P.y("Cannot modify unmodifiable Map"))},
cI:function(a){var u,t=H.p5(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
oP:function(a){return v.types[a]},
m9:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.R(a).$iB},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a3(a)
if(typeof u!=="string")throw H.c(H.ai(a))
return u},
cc:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
nl:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.d(p,3)
u=p[3]
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.X(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.a.E(s,q)|32)>t)return}return parseInt(a,b)},
cd:function(a){return H.nc(a)+H.lY(H.cH(a),0,null)},
nc:function(a){var u,t,s,r,q,p,o,n=J.R(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.V||!!n.$ibF){r=C.v(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cI(t.length>1&&C.a.E(t,0)===36?C.a.a6(t,1):t)},
nd:function(){if(!!self.location)return self.location.href
return},
lq:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
nm:function(a){var u,t,s,r=H.b([],[P.w])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.l)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ai(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.aI(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.c(H.ai(s))}return H.lq(r)},
lr:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ai(s))
if(s<0)throw H.c(H.ai(s))
if(s>65535)return H.nm(a)}return H.lq(a)},
nn:function(a,b,c){var u,t,s,r
if(typeof c!=="number")return c.i4()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
if(s<c)r=s
else r=c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
by:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.aI(u,10))>>>0,56320|u&1023)}}throw H.c(P.X(a,0,1114111,null,null))},
bx:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nk:function(a){var u=H.bx(a).getFullYear()+0
return u},
ni:function(a){var u=H.bx(a).getMonth()+1
return u},
ne:function(a){var u=H.bx(a).getDate()+0
return u},
nf:function(a){var u=H.bx(a).getHours()+0
return u},
nh:function(a){var u=H.bx(a).getMinutes()+0
return u},
nj:function(a){var u=H.bx(a).getSeconds()+0
return u},
ng:function(a){var u=H.bx(a).getMilliseconds()+0
return u},
v:function(a){throw H.c(H.ai(a))},
d:function(a,b){if(a==null)J.ae(a)
throw H.c(H.bO(a,b))},
bO:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aj(!0,b,s,null)
u=J.ae(a)
if(!(b<0)){if(typeof u!=="number")return H.v(u)
t=b>=u}else t=!0
if(t)return P.L(b,a,s,null,u)
return P.dl(b,s)},
oJ:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bz(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bz(a,c,!0,b,"end",u)
return new P.aj(!0,b,"end",null)},
ai:function(a){return new P.aj(!0,a,null,null)},
c:function(a){var u
if(a==null)a=new P.di()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.mf})
u.name=""}else u.toString=H.mf
return u},
mf:function(){return J.a3(this.dartException)},
p:function(a){throw H.c(a)},
l:function(a){throw H.c(P.aK(a))},
aE:function(a){var u,t,s,r,q,p
a=H.md(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.il(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
im:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
lA:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lm:function(a,b){return new H.ht(a,b==null?null:b.method)},
kz:function(a,b){var u=b==null,t=u?null:b.method
return new H.fK(a,t,u?null:b.receiver)},
ad:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.kj(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.aI(t,16)&8191)===10)switch(s){case 438:return f.$1(H.kz(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.lm(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.mj()
q=$.mk()
p=$.ml()
o=$.mm()
n=$.mp()
m=$.mq()
l=$.mo()
$.mn()
k=$.ms()
j=$.mr()
i=r.ae(u)
if(i!=null)return f.$1(H.kz(u,i))
else{i=q.ae(u)
if(i!=null){i.method="call"
return f.$1(H.kz(u,i))}else{i=p.ae(u)
if(i==null){i=o.ae(u)
if(i==null){i=n.ae(u)
if(i==null){i=m.ae(u)
if(i==null){i=l.ae(u)
if(i==null){i=o.ae(u)
if(i==null){i=k.ae(u)
if(i==null){i=j.ae(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.lm(u,i))}}return f.$1(new H.iy(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dr()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aj(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dr()
return a},
kU:function(a){var u
if(a==null)return new H.eh(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eh(a)},
oN:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.m(0,a[u],a[t])}return b},
oV:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.u("Unsupported number of arguments for wrapped closure"))},
bN:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.oV)
a.$identity=u
return u},
mP:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.i0().constructor.prototype):Object.create(new H.bT(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ar
if(typeof t!=="number")return t.w()
$.ar=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.la(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.mL(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.la(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
mL:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.oP,a)
if(typeof a=="function")if(b)return a
else{u=c?H.l8:H.kn
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.c("Error in functionType of tearoff")},
mM:function(a,b,c,d){var u=H.kn
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
la:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mO(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mM(t,!r,u,b)
if(t===0){r=$.ar
if(typeof r!=="number")return r.w()
$.ar=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bU
return new Function(r+H.e(q==null?$.bU=H.eW("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ar
if(typeof r!=="number")return r.w()
$.ar=r+1
o+=r
r="return function("+o+"){return this."
q=$.bU
return new Function(r+H.e(q==null?$.bU=H.eW("self"):q)+"."+H.e(u)+"("+o+");}")()},
mN:function(a,b,c,d){var u=H.kn,t=H.l8
switch(b?-1:a){case 0:throw H.c(H.nr("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
mO:function(a,b){var u,t,s,r,q,p,o,n=$.bU
if(n==null)n=$.bU=H.eW("self")
u=$.l7
if(u==null)u=$.l7=H.eW("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.mN(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.ar
if(typeof u!=="number")return u.w()
$.ar=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.ar
if(typeof u!=="number")return u.w()
$.ar=u+1
return new Function(n+u+"}")()},
kQ:function(a,b,c,d,e,f,g){return H.mP(a,b,c,d,!!e,!!f,g)},
kn:function(a){return a.a},
l8:function(a){return a.c},
eW:function(a){var u,t,s,r=new H.bT("self","target","receiver","name"),q=J.kw(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
p_:function(a,b){throw H.c(H.mK(a,H.cI(b.substring(2))))},
r:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.R(a)[b]
else u=!0
if(u)return a
H.p_(a,b)},
oL:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
mK:function(a,b){return new H.eX("CastError: "+P.kt(a)+": type '"+H.e(H.oD(a))+"' is not a subtype of type '"+b+"'")},
oD:function(a){var u,t=J.R(a)
if(!!t.$ibV){u=H.oL(t)
if(u!=null)return H.p0(u)
return"Closure"}return H.cd(a)},
p4:function(a){throw H.c(new P.f8(a))},
nr:function(a){return new H.hM(a)},
m7:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
cH:function(a){if(a==null)return
return a.$ti},
pG:function(a,b,c){return H.kh(a["$a"+H.e(c)],H.cH(b))},
oO:function(a,b,c,d){var u=H.kh(a["$a"+H.e(c)],H.cH(b))
return u==null?null:u[d]},
kT:function(a,b,c){var u=H.kh(a["$a"+H.e(b)],H.cH(a))
return u==null?null:u[c]},
aH:function(a,b){var u=H.cH(a)
return u==null?null:u[b]},
p0:function(a){return H.bh(a,null)},
bh:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cI(a[0].name)+H.lY(a,1,b)
if(typeof a=="function")return H.cI(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.e(b[t])}if('func' in a)return H.o8(a,b)
if('futureOr' in a)return"FutureOr<"+H.bh("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
o8:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
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
if(l!=null&&l!==P.a1)p+=" extends "+H.bh(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bh(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bh(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bh(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.oM(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.bh(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
lY:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.Q("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bh(p,c)}return"<"+u.i(0)+">"},
kh:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
pE:function(a,b,c){return a.apply(b,H.kh(J.R(b)["$a"+H.e(c)],H.cH(b)))},
pF:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
oX:function(a){var u,t,s,r,q=$.m8.$1(a),p=$.jZ[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.k4[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.m2.$2(a,q)
if(q!=null){p=$.jZ[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.k4[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kd(u)
$.jZ[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.k4[q]=u
return u}if(s==="-"){r=H.kd(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.mb(a,u)
if(s==="*")throw H.c(P.ix(q))
if(v.leafTags[q]===true){r=H.kd(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.mb(a,u)},
mb:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kW(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kd:function(a){return J.kW(a,!1,null,!!a.$iB)},
oY:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kd(u)
else return J.kW(u,c,null,null)},
oT:function(){if(!0===$.kV)return
$.kV=!0
H.oU()},
oU:function(){var u,t,s,r,q,p,o,n
$.jZ=Object.create(null)
$.k4=Object.create(null)
H.oS()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.mc.$1(q)
if(p!=null){o=H.oY(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
oS:function(){var u,t,s,r,q,p,o=C.K()
o=H.bM(C.L,H.bM(C.M,H.bM(C.w,H.bM(C.w,H.bM(C.N,H.bM(C.O,H.bM(C.P(C.v),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.m8=new H.k1(r)
$.m2=new H.k2(q)
$.mc=new H.k3(p)},
bM:function(a,b){return a(b)||b},
n1:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.c(P.T("Illegal RegExp pattern ("+String(p)+")",a,null))},
me:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
oK:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
md:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kY:function(a,b,c){var u=H.p3(a,b,c)
return u},
p3:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.md(b),'g'),H.oK(c))},
f1:function f1(){},
f2:function f2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
il:function il(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ht:function ht(a,b){this.a=a
this.b=b},
fK:function fK(a,b,c){this.a=a
this.b=b
this.c=c},
iy:function iy(a){this.a=a},
kj:function kj(a){this.a=a},
eh:function eh(a){this.a=a
this.b=null},
bV:function bV(){},
i8:function i8(){},
i0:function i0(){},
bT:function bT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eX:function eX(a){this.a=a},
hM:function hM(a){this.a=a},
I:function I(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fJ:function fJ(a){this.a=a},
fO:function fO(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fP:function fP(a,b){this.a=a
this.$ti=b},
fQ:function fQ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
k1:function k1(a){this.a=a},
k2:function k2(a){this.a=a},
k3:function k3(a){this.a=a},
fI:function fI(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bK:function(a){return a},
nb:function(a){return new Int8Array(a)},
aF:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bO(b,a))},
o6:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.oJ(a,b,c))
return b},
c8:function c8(){},
b8:function b8(){},
dd:function dd(){},
c9:function c9(){},
de:function de(){},
hl:function hl(){},
hm:function hm(){},
hn:function hn(){},
ho:function ho(){},
hp:function hp(){},
df:function df(){},
ca:function ca(){},
cu:function cu(){},
cv:function cv(){},
cw:function cw(){},
cx:function cx(){},
oM:function(a){return J.lf(a?Object.keys(a):[],null)},
p5:function(a){return v.mangledGlobalNames[a]},
oZ:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kW:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
k_:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.kV==null){H.oT()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.ix("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.l_()]
if(r!=null)return r
r=H.oX(a)
if(r!=null)return r
if(typeof a=="function")return C.W
u=Object.getPrototypeOf(a)
if(u==null)return C.D
if(u===Object.prototype)return C.D
if(typeof s=="function"){Object.defineProperty(s,$.l_(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
mZ:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.km(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.X(a,0,4294967295,"length",null))
return J.lf(new Array(a),b)},
lf:function(a,b){return J.kw(H.b(a,[b]))},
kw:function(a){a.fixed$length=Array
return a},
n_:function(a,b){return J.cL(a,b)},
R:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d2.prototype
return J.fH.prototype}if(typeof a=="string")return J.b3.prototype
if(a==null)return J.d3.prototype
if(typeof a=="boolean")return J.fG.prototype
if(a.constructor==Array)return J.b2.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b4.prototype
return a}if(a instanceof P.a1)return a
return J.k_(a)},
aq:function(a){if(typeof a=="string")return J.b3.prototype
if(a==null)return a
if(a.constructor==Array)return J.b2.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b4.prototype
return a}if(a instanceof P.a1)return a
return J.k_(a)},
eF:function(a){if(a==null)return a
if(a.constructor==Array)return J.b2.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b4.prototype
return a}if(a instanceof P.a1)return a
return J.k_(a)},
m6:function(a){if(typeof a=="number")return J.c2.prototype
if(typeof a=="string")return J.b3.prototype
if(a==null)return a
if(!(a instanceof P.a1))return J.bF.prototype
return a},
cG:function(a){if(typeof a=="string")return J.b3.prototype
if(a==null)return a
if(!(a instanceof P.a1))return J.bF.prototype
return a},
bQ:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b4.prototype
return a}if(a instanceof P.a1)return a
return J.k_(a)},
E:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.R(a).p(a,b)},
l1:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.m6(a).A(a,b)},
bS:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.m9(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aq(a).h(a,b)},
kk:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.m9(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.eF(a).m(a,b,c)},
mB:function(a,b){return J.cG(a).E(a,b)},
mC:function(a,b,c){return J.bQ(a).fA(a,b,c)},
mD:function(a,b,c,d){return J.bQ(a).fT(a,b,c,d)},
mE:function(a,b){return J.cG(a).U(a,b)},
cL:function(a,b){return J.m6(a).aK(a,b)},
kl:function(a,b){return J.aq(a).H(a,b)},
eI:function(a,b){return J.eF(a).J(a,b)},
mF:function(a,b,c,d){return J.bQ(a).hk(a,b,c,d)},
l2:function(a,b){return J.eF(a).F(a,b)},
mG:function(a){return J.bQ(a).gh2(a)},
l3:function(a){return J.bQ(a).gbQ(a)},
cM:function(a){return J.R(a).gI(a)},
aI:function(a){return J.eF(a).gS(a)},
ae:function(a){return J.aq(a).gl(a)},
l4:function(a){return J.eF(a).hP(a)},
mH:function(a,b){return J.bQ(a).hT(a,b)},
mI:function(a,b,c){return J.cG(a).q(a,b,c)},
mJ:function(a){return J.cG(a).i_(a)},
a3:function(a){return J.R(a).i(a)},
a:function a(){},
fG:function fG(){},
d3:function d3(){},
d4:function d4(){},
hx:function hx(){},
bF:function bF(){},
b4:function b4(){},
b2:function b2(a){this.$ti=a},
kx:function kx(a){this.$ti=a},
a4:function a4(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c2:function c2(){},
d2:function d2(){},
fH:function fH(){},
b3:function b3(){}},P={
nH:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.oE()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bN(new P.j1(s),1)).observe(u,{childList:true})
return new P.j0(s,u,t)}else if(self.setImmediate!=null)return P.oF()
return P.oG()},
nI:function(a){self.scheduleImmediate(H.bN(new P.j2(a),0))},
nJ:function(a){self.setImmediate(H.bN(new P.j3(a),0))},
nK:function(a){P.kE(C.n,a)},
kE:function(a,b){var u=C.c.a4(a.a,1000)
return P.nR(u<0?0:u,b)},
lz:function(a,b){var u=C.c.a4(a.a,1000)
return P.nS(u<0?0:u,b)},
nR:function(a,b){var u=new P.en()
u.eb(a,b)
return u},
nS:function(a,b){var u=new P.en()
u.ec(a,b)
return u},
pB:function(a){return new P.bG(a,1)},
nN:function(){return C.a4},
nO:function(a){return new P.bG(a,3)},
ob:function(a,b){return new P.jw(a,[b])},
ox:function(){var u,t
for(;u=$.bL,u!=null;){$.cF=null
t=u.b
$.bL=t
if(t==null)$.cE=null
u.a.$0()}},
oC:function(){$.kO=!0
try{P.ox()}finally{$.cF=null
$.kO=!1
if($.bL!=null)$.l0().$1(P.m3())}},
oA:function(a){var u=new P.dJ(a)
if($.bL==null){$.bL=$.cE=u
if(!$.kO)$.l0().$1(P.m3())}else $.cE=$.cE.b=u},
oB:function(a){var u,t,s=$.bL
if(s==null){P.oA(a)
$.cF=$.cE
return}u=new P.dJ(a)
t=$.cF
if(t==null){u.b=s
$.bL=$.cF=u}else{u.b=t.b
$.cF=t.b=u
if(u.b==null)$.cE=u}},
ly:function(a,b){var u=$.ap
if(u===C.f)return P.kE(a,b)
return P.kE(a,u.h3(b))},
ny:function(a,b){var u=$.ap
if(u===C.f)return P.lz(a,b)
return P.lz(a,u.cX(b,P.dx))},
lZ:function(a,b,c,d,e){var u={}
u.a=d
P.oB(new P.jS(u,e))},
oy:function(a,b,c,d){var u,t=$.ap
if(t===c)return d.$0()
$.ap=c
u=t
try{t=d.$0()
return t}finally{$.ap=u}},
oz:function(a,b,c,d,e){var u,t=$.ap
if(t===c)return d.$1(e)
$.ap=c
u=t
try{t=d.$1(e)
return t}finally{$.ap=u}},
j1:function j1(a){this.a=a},
j0:function j0(a,b,c){this.a=a
this.b=b
this.c=c},
j2:function j2(a){this.a=a},
j3:function j3(a){this.a=a},
en:function en(){this.c=0},
jA:function jA(a,b){this.a=a
this.b=b},
jz:function jz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bG:function bG(a,b){this.a=a
this.b=b},
bH:function bH(a){var _=this
_.a=a
_.d=_.c=_.b=null},
jw:function jw(a,b){this.a=a
this.$ti=b},
dJ:function dJ(a){this.a=a
this.b=null},
dt:function dt(){},
i3:function i3(){},
dx:function dx(){},
jJ:function jJ(){},
jS:function jS(a,b){this.a=a
this.b=b},
jh:function jh(){},
ji:function ji(a,b){this.a=a
this.b=b},
jj:function jj(a,b,c){this.a=a
this.b=b
this.c=c},
n3:function(a,b){return new H.I([a,b])},
kA:function(a,b){return new H.I([a,b])},
n5:function(a){return H.oN(a,new H.I([null,null]))},
c4:function(a){return new P.je([a])},
kJ:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
nQ:function(a,b){var u=new P.dZ(a,b)
u.c=a.e
return u},
mX:function(a,b,c){var u,t
if(P.kP(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.h])
$.a9.push(a)
try{P.oa(a,u)}finally{if(0>=$.a9.length)return H.d($.a9,-1)
$.a9.pop()}t=P.lw(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
kv:function(a,b,c){var u,t
if(P.kP(a))return b+"..."+c
u=new P.Q(b)
$.a9.push(a)
try{t=u
t.a=P.lw(t.a,a,", ")}finally{if(0>=$.a9.length)return H.d($.a9,-1)
$.a9.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kP:function(a){var u,t
for(u=$.a9.length,t=0;t<u;++t)if(a===$.a9[t])return!0
return!1},
oa:function(a,b){var u,t,s,r,q,p,o,n=a.gS(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.t())return
u=H.e(n.gC(n))
b.push(u)
m+=u.length+2;++l}if(!n.t()){if(l<=5)return
if(0>=b.length)return H.d(b,-1)
t=b.pop()
if(0>=b.length)return H.d(b,-1)
s=b.pop()}else{r=n.gC(n);++l
if(!n.t()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.d(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gC(n);++l
for(;n.t();r=q,q=p){p=n.gC(n);++l
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
n4:function(a,b,c){var u=P.n3(b,c)
a.F(0,new P.fR(u))
return u},
lg:function(a,b){var u,t,s=P.c4(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.l)(a),++t)s.n(0,a[t])
return s},
kC:function(a){var u,t={}
if(P.kP(a))return"{...}"
u=new P.Q("")
try{$.a9.push(a)
u.a+="{"
t.a=!0
J.l2(a,new P.fW(t,u))
u.a+="}"}finally{if(0>=$.a9.length)return H.d($.a9,-1)
$.a9.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
je:function je(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jf:function jf(a){this.a=a
this.c=this.b=null},
dZ:function dZ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fD:function fD(){},
fR:function fR(a){this.a=a},
fS:function fS(){},
x:function x(){},
fV:function fV(){},
fW:function fW(a,b){this.a=a
this.b=b},
a0:function a0(){},
jB:function jB(){},
fX:function fX(){},
dE:function dE(a,b){this.a=a
this.$ti=b},
jl:function jl(){},
e_:function e_(){},
es:function es(){},
nB:function(a,b,c,d){if(b instanceof Uint8Array)return P.nC(!1,b,c,d)
return},
nC:function(a,b,c,d){var u,t,s=$.mt()
if(s==null)return
u=0===c
if(u&&!0)return P.kH(s,b)
t=b.length
d=P.aS(c,d,t)
if(u&&d===t)return P.kH(s,b)
return P.kH(s,b.subarray(c,d))},
kH:function(a,b){if(P.nE(b))return
return P.nF(a,b)},
nF:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ad(t)}return},
nE:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
nD:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ad(t)}return},
m0:function(a,b,c){var u,t,s
if(typeof c!=="number")return H.v(c)
u=J.aq(a)
t=b
for(;t<c;++t){s=u.h(a,t)
if(typeof s!=="number")return s.a8()
if((s&127)!==s)return t-b}return c-b},
l6:function(a,b,c,d,e,f){if(C.c.b8(f,4)!==0)throw H.c(P.T("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.T("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.T("Invalid base64 padding, more than two '=' characters",a,b))},
eT:function eT(){},
eU:function eU(){},
eZ:function eZ(){},
f3:function f3(){},
fj:function fj(){},
fB:function fB(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
fA:function fA(a){this.a=a},
iH:function iH(){},
iJ:function iJ(){},
jH:function jH(a){this.b=0
this.c=a},
iI:function iI(a){this.a=a},
jG:function jG(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
eG:function(a,b,c){var u=H.nl(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.T(a,null,null))},
mU:function(a){if(a instanceof H.bV)return a.i(0)
return"Instance of '"+H.e(H.cd(a))+"'"},
n6:function(a,b,c){var u,t,s=J.mZ(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
kB:function(a,b,c){var u,t=H.b([],[c])
for(u=J.aI(a);u.t();)t.push(u.gC(u))
if(b)return t
return J.kw(t)},
cg:function(a,b,c){var u,t
if(typeof a==="object"&&a!==null&&a.constructor===Array){u=a.length
c=P.aS(b,c,u)
if(b<=0){if(typeof c!=="number")return c.R()
t=c<u}else t=!0
return H.lr(t?C.b.dS(a,b,c):a)}if(!!J.R(a).$ica)return H.nn(a,b,P.aS(b,c,a.length))
return P.nw(a,b,c)},
nw:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.c(P.X(b,0,J.ae(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.X(c,b,J.ae(a),q,q))
t=J.aI(a)
for(s=0;s<b;++s)if(!t.t())throw H.c(P.X(b,0,s,q,q))
r=[]
if(u)for(;t.t();)r.push(t.gC(t))
else for(s=b;s<c;++s){if(!t.t())throw H.c(P.X(c,b,s,q,q))
r.push(t.gC(t))}return H.lr(r)},
np:function(a){return new H.fI(a,H.n1(a,!1,!0,!1,!1,!1))},
lw:function(a,b,c){var u=J.aI(b)
if(!u.t())return a
if(c.length===0){do a+=H.e(u.gC(u))
while(u.t())}else{a+=H.e(u.gC(u))
for(;u.t();)a=a+c+H.e(u.gC(u))}return a},
lC:function(){var u=H.nd()
if(u!=null)return P.nA(u)
throw H.c(P.y("'Uri.base' is not supported"))},
et:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.e){u=$.mz().b
if(typeof b!=="string")H.p(H.ai(b))
u=u.test(b)}else u=!1
if(u)return b
t=c.ghj().bS(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.d(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.by(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
mR:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
mS:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cV:function(a){if(a>=10)return""+a
return"0"+a},
lc:function(a){return new P.b0(1000*a)},
kt:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a3(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mU(a)},
eM:function(a){return new P.aj(!1,null,null,a)},
km:function(a,b,c){return new P.aj(!0,a,b,c)},
dl:function(a,b){return new P.bz(null,null,!0,a,b,"Value not in range")},
X:function(a,b,c,d,e){return new P.bz(b,c,!0,a,d,"Invalid value")},
aS:function(a,b,c){var u
if(typeof a!=="number")return H.v(a)
if(0<=a){if(typeof c!=="number")return H.v(c)
u=a>c}else u=!0
if(u)throw H.c(P.X(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.v(c)
u=b>c}else u=!0
if(u)throw H.c(P.X(b,a,c,"end",null))
return b}return c},
ls:function(a,b){if(typeof a!=="number")return a.R()
if(a<0)throw H.c(P.X(a,0,null,b,null))},
L:function(a,b,c,d,e){var u=e==null?J.ae(b):e
return new P.fC(u,!0,a,c,"Index out of range")},
y:function(a){return new P.iA(a)},
ix:function(a){return new P.iw(a)},
lv:function(a){return new P.cf(a)},
aK:function(a){return new P.f0(a)},
u:function(a){return new P.dS(a)},
T:function(a,b,c){return new P.fu(a,b,c)},
n7:function(a,b,c){var u,t,s=H.b([],[c])
C.b.sl(s,a)
for(u=0;u<a;++u){t=b.$1(u)
if(u>=s.length)return H.d(s,u)
s[u]=t}return s},
kX:function(a){H.oZ(a)},
nA:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.a.E(a,4)^58)*3|C.a.E(a,0)^100|C.a.E(a,1)^97|C.a.E(a,2)^116|C.a.E(a,3)^97)>>>0
if(u===0)return P.lB(e<e?C.a.q(a,0,e):a,5,f).gdK()
else if(u===32)return P.lB(C.a.q(a,5,e),0,f).gdK()}t=new Array(8)
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
if(P.m_(a,0,e,0,s)>=14)s[7]=e
r=s[1]
if(typeof r!=="number")return r.i3()
if(r>=0)if(P.m_(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.w()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.R()
if(typeof n!=="number")return H.v(n)
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
u=2}a=i+C.a.q(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.a.aO(a,o,n,"/");++e
n=h}k="file"}else if(C.a.a5(a,"http",0)){if(t&&p+3===o&&C.a.a5(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.a.aO(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.a.a5(a,"https",0)){if(t&&p+4===o&&C.a.a5(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.a.aO(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.a.q(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.jo(a,r,q,p,o,n,m,k)}return P.nT(a,0,e,r,q,p,o,n,m,k)},
lE:function(a){var u=P.h
return C.b.hp(H.b(a.split("&"),[u]),P.kA(u,u),new P.iF(C.e))},
nz:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.iC(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.a.U(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.eG(C.a.q(a,s,t),n,n)
if(typeof p!=="number")return p.a1()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.d(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.eG(C.a.q(a,s,c),n,n)
if(typeof p!=="number")return p.a1()
if(p>255)k.$2(l,s)
if(r>=u)return H.d(j,r)
j[r]=p
return j},
lD:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.iD(a),d=new P.iE(e,a)
if(a.length<2)e.$1("address is too short")
u=H.b([],[P.w])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.a.U(a,t)
if(p===58){if(t===b){++t
if(C.a.U(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
u.push(-1)
r=!0}else u.push(d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.b.gar(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)u.push(d.$2(s,c))
else{m=P.nz(a,s,c)
u.push((m[0]<<8|m[1])>>>0)
u.push((m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.d(l,i)
l[i]=0
f=i+1
if(f>=k)return H.d(l,f)
l[f]=0
i+=2}else{f=C.c.aI(h,8)
if(i<0||i>=k)return H.d(l,i)
l[i]=f
f=i+1
if(f>=k)return H.d(l,f)
l[f]=h&255
i+=2}}return l},
nT:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.o0(a,b,d)
else{if(d===b)P.bJ(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.o1(a,u,e-1):""
s=P.nY(a,e,f,!1)
if(typeof f!=="number")return f.w()
r=f+1
if(typeof g!=="number")return H.v(g)
q=r<g?P.o_(P.eG(C.a.q(a,r,g),new P.jC(a,f),n),j):n}else{q=n
s=q
t=""}p=P.nZ(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.R()
o=h<i?P.kL(a,h+1,i,n):n
return new P.bI(j,t,s,q,p,o,i<c?P.nX(a,i+1,c):n)},
lS:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bJ:function(a,b,c){throw H.c(P.T(c,a,b))},
o_:function(a,b){if(a!=null&&a===P.lS(b))return
return a},
nY:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.a.U(a,b)===91){if(typeof c!=="number")return c.M()
u=c-1
if(C.a.U(a,u)!==93)P.bJ(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.nV(a,t,u)
if(typeof s!=="number")return s.R()
if(s<u){r=s+1
q=P.lX(a,C.a.a5(a,"25",r)?s+3:r,u,"%25")}else q=""
P.lD(a,t,s)
return C.a.q(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.v(c)
p=b
for(;p<c;++p)if(C.a.U(a,p)===58){s=C.a.bk(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.lX(a,C.a.a5(a,"25",r)?s+3:r,c,"%25")}else q=""
P.lD(a,b,s)
return"["+C.a.q(a,b,s)+q+"]"}return P.o3(a,b,c)},
nV:function(a,b,c){var u,t=C.a.bk(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.v(c)
u=t<c}else u=!1
return u?t:c},
lX:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.Q(d):null
if(typeof c!=="number")return H.v(c)
u=b
t=u
s=!0
for(;u<c;){r=C.a.U(a,u)
if(r===37){q=P.kM(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.Q("")
o=l.a+=C.a.q(a,t,u)
if(p)q=C.a.q(a,u,u+3)
else if(q==="%")P.bJ(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.d(C.h,p)
p=(C.h[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.Q("")
if(t<u){l.a+=C.a.q(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.a.U(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.Q("")
l.a+=C.a.q(a,t,u)
l.a+=P.kK(r)
u+=m
t=u}}}if(l==null)return C.a.q(a,b,c)
if(t<c)l.a+=C.a.q(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
o3:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.v(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.a.U(a,u)
if(q===37){p=P.kM(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.Q("")
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
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.Q("")
if(t<u){s.a+=C.a.q(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.d(C.j,o)
o=(C.j[o]&1<<(q&15))!==0}else o=!1
if(o)P.bJ(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.a.U(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.Q("")
n=C.a.q(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.kK(q)
u+=l
t=u}}}}if(s==null)return C.a.q(a,b,c)
if(t<c){n=C.a.q(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
o0:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.lU(C.a.E(a,b)))P.bJ(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.a.E(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.d(C.l,r)
r=(C.l[r]&1<<(s&15))!==0}else r=!1
if(!r)P.bJ(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.a.q(a,b,c)
return P.nU(t?a.toLowerCase():a)},
nU:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
o1:function(a,b,c){return P.cC(a,b,c,C.Z,!1)},
nZ:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.cC(a,b,c,C.B,!0):C.i.iq(d,new P.jD(),P.h).j(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.a.a3(u,"/"))u="/"+u
return P.o2(u,e,f)},
o2:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.a.a3(a,"/"))return P.o4(a,!u||c)
return P.o5(a)},
kL:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.c(P.eM("Both query and queryParameters specified"))
return P.cC(a,b,c,C.k,!0)}if(d==null)return
u=new P.Q("")
t.a=""
d.F(0,new P.jE(new P.jF(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
nX:function(a,b,c){return P.cC(a,b,c,C.k,!0)},
kM:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.a.U(a,b+1)
t=C.a.U(a,p)
s=H.k0(u)
r=H.k0(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.c.aI(q,4)
if(p>=8)return H.d(C.h,p)
p=(C.h[p]&1<<(q&15))!==0}else p=!1
if(p)return H.by(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.a.q(a,b,b+3).toUpperCase()
return},
kK:function(a){var u,t,s,r,q,p,o,n,m="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.b(u,[P.w])
t[0]=37
t[1]=C.a.E(m,a>>>4)
t[2]=C.a.E(m,a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.b(u,[P.w])
for(u=t.length,q=0;--r,r>=0;s=128){p=C.c.fL(a,6*r)&63|s
if(q>=u)return H.d(t,q)
t[q]=37
o=q+1
n=C.a.E(m,p>>>4)
if(o>=u)return H.d(t,o)
t[o]=n
n=q+2
o=C.a.E(m,p&15)
if(n>=u)return H.d(t,n)
t[n]=o
q+=3}}return P.cg(t,0,null)},
cC:function(a,b,c,d,e){var u=P.lW(a,b,c,d,e)
return u==null?C.a.q(a,b,c):u},
lW:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.R()
if(typeof c!=="number")return H.v(c)
if(!(o<c))break
c$0:{u=C.a.U(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.d(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.kM(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.d(C.j,t)
t=(C.j[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.bJ(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.a.U(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.kK(u)}}if(m==null)m=new P.Q("")
m.a+=C.a.q(a,n,o)
m.a+=H.e(s)
if(typeof r!=="number")return H.v(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.R()
if(n<c)m.a+=C.a.q(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
lV:function(a){if(C.a.a3(a,"."))return!0
return C.a.de(a,"/.")!==-1},
o5:function(a){var u,t,s,r,q,p,o
if(!P.lV(a))return a
u=H.b([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.E(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.d(u,-1)
u.pop()
if(u.length===0)u.push("")}r=!0}else if("."===p)r=!0
else{u.push(p)
r=!1}}if(r)u.push("")
return C.b.j(u,"/")},
o4:function(a,b){var u,t,s,r,q,p
if(!P.lV(a))return!b?P.lT(a):a
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
t=P.lT(u[0])
if(0>=u.length)return H.d(u,0)
u[0]=t}return C.b.j(u,"/")},
lT:function(a){var u,t,s,r=a.length
if(r>=2&&P.lU(J.mB(a,0)))for(u=1;u<r;++u){t=C.a.E(a,u)
if(t===58)return C.a.q(a,0,u)+"%3A"+C.a.a6(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.d(C.l,s)
s=(C.l[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
nW:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.a.E(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.eM("Invalid URL encoding"))}}return u},
kN:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.a.E(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.e!==d)s=!1
else s=!0
if(s)return C.a.q(a,b,c)
else r=new H.m(C.a.q(a,b,c))}else{r=H.b([],[P.w])
for(s=a.length,q=b;q<c;++q){t=C.a.E(a,q)
if(t>127)throw H.c(P.eM("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.eM("Truncated URI"))
r.push(P.nW(a,q+1))
q+=2}else if(t===43)r.push(32)
else r.push(t)}}return new P.iI(!1).bS(r)},
lU:function(a){var u=a|32
return 97<=u&&u<=122},
lB:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.b([b-1],[P.w])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.a.E(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.T(m,a,t))}}if(s<0&&t>b)throw H.c(P.T(m,a,t))
for(;r!==44;){l.push(t);++t
for(q=-1;t<u;++t){r=C.a.E(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)l.push(q)
else{p=C.b.gar(l)
if(r!==44||t!==p+7||!C.a.a5(a,"base64",p+1))throw H.c(P.T("Expecting '='",a,t))
break}}l.push(t)
o=t+1
if((l.length&1)===1)a=C.J.hy(0,a,o,u)
else{n=P.lW(a,o,u,C.k,!0)
if(n!=null)a=C.a.aO(a,o,u,n)}return new P.iB(a,l,c)},
o7:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.n7(22,new P.jN(),P.bC),n=new P.jM(o),m=new P.jO(),l=new P.jP(),k=n.$2(0,225)
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
m_:function(a,b,c,d,e){var u,t,s,r,q,p=$.mA()
for(u=b;u<c;++u){if(d<0||d>=p.length)return H.d(p,d)
t=p[d]
s=C.a.E(a,u)^96
if(s>95)s=31
if(s>=t.length)return H.d(t,s)
r=t[s]
d=r&31
q=r>>>5
if(q>=8)return H.d(e,q)
e[q]=u}return d},
aG:function aG(){},
ab:function ab(a,b){this.a=a
this.b=b},
J:function J(){},
b0:function b0(a){this.a=a},
ff:function ff(){},
fg:function fg(){},
bp:function bp(){},
di:function di(){},
aj:function aj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bz:function bz(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fC:function fC(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iA:function iA(a){this.a=a},
iw:function iw(a){this.a=a},
cf:function cf(a){this.a=a},
f0:function f0(a){this.a=a},
hw:function hw(){},
dr:function dr(){},
f8:function f8(a){this.a=a},
dS:function dS(a){this.a=a},
fu:function fu(a,b,c){this.a=a
this.b=b
this.c=c},
fw:function fw(){},
w:function w(){},
j:function j(){},
fF:function fF(){},
o:function o(){},
O:function O(){},
b9:function b9(){},
aa:function aa(){},
a1:function a1(){},
h:function h(){},
Q:function Q(a){this.a=a},
iF:function iF(a){this.a=a},
iC:function iC(a){this.a=a},
iD:function iD(a){this.a=a},
iE:function iE(a,b){this.a=a
this.b=b},
bI:function bI(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
jC:function jC(a,b){this.a=a
this.b=b},
jD:function jD(){},
jF:function jF(a,b){this.a=a
this.b=b},
jE:function jE(a){this.a=a},
iB:function iB(a,b,c){this.a=a
this.b=b
this.c=c},
jN:function jN(){},
jM:function jM(a){this.a=a},
jO:function jO(){},
jP:function jP(){},
jo:function jo(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
j7:function j7(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
aU:function(a){var u,t,s,r,q
if(a==null)return
u=P.kA(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.l)(t),++r){q=t[r]
u.m(0,q,a[q])}return u},
oH:function(a){var u={}
a.F(0,new P.jT(u))
return u},
jq:function jq(){},
js:function js(a,b){this.a=a
this.b=b},
jt:function jt(a,b){this.a=a
this.b=b},
jT:function jT(a){this.a=a},
jr:function jr(a,b){this.a=a
this.b=b},
fq:function fq(a,b){this.a=a
this.b=b},
fr:function fr(){},
fs:function fs(){},
jd:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
nP:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jg:function jg(){},
a8:function a8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aN:function aN(){},
fM:function fM(){},
aR:function aR(){},
hu:function hu(){},
hC:function hC(){},
ce:function ce(){},
i4:function i4(){},
k:function k(){},
aT:function aT(){},
ik:function ik(){},
dX:function dX(){},
dY:function dY(){},
e7:function e7(){},
e8:function e8(){},
ej:function ej(){},
ek:function ek(){},
eq:function eq(){},
er:function er(){},
bC:function bC(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(a){this.a=a},
eR:function eR(){},
bk:function bk(){},
hv:function hv(){},
dK:function dK(){},
i_:function i_(){},
ef:function ef(){},
eg:function eg(){}},W={
l5:function(){var u=document.createElement("a")
return u},
l9:function(){var u=document.createElement("canvas")
return u},
mT:function(a,b,c){var u=document.body,t=(u&&C.r).ad(u,a,b,c)
t.toString
u=new H.cq(new W.a2(t),new W.fi(),[W.D])
return u.gaD(u)},
kq:function(a){return"wheel"},
bX:function(a){var u,t,s,r="element tag unavailable"
try{u=J.bQ(a)
t=u.gdG(a)
if(typeof t==="string")r=u.gdG(a)}catch(s){H.ad(s)}return r},
mW:function(a){var u,t=document.createElement("input"),s=t
try{s.type=a}catch(u){H.ad(u)}return s},
jc:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lQ:function(a,b,c,d){var u=W.jc(W.jc(W.jc(W.jc(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
Z:function(a,b,c,d){var u=W.m1(new W.ja(c),W.i)
if(u!=null&&!0)J.mD(a,b,u,!1)
return new W.j9(a,b,u,!1)},
lP:function(a){var u=W.l5(),t=window.location
u=new W.cs(new W.jk(u,t))
u.e3(a)
return u},
nL:function(a,b,c,d){return!0},
nM:function(a,b,c,d){var u,t=d.a,s=t.a
s.href=c
u=s.hostname
t=t.b
if(!(u==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(u==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
lR:function(){var u=P.h,t=P.lg(C.o,u),s=H.b(["TEMPLATE"],[u])
t=new W.jx(t,P.c4(u),P.c4(u),P.c4(u),null)
t.e8(null,new H.fZ(C.o,new W.jy(),[H.aH(C.o,0),u]),s,null)
return t},
m1:function(a,b){var u=$.ap
if(u===C.f)return a
return u.cX(a,b)},
n:function n(){},
eJ:function eJ(){},
eK:function eK(){},
eL:function eL(){},
bl:function bl(){},
bm:function bm(){},
bo:function bo(){},
aZ:function aZ(){},
f4:function f4(){},
H:function H(){},
bW:function bW(){},
f5:function f5(){},
af:function af(){},
at:function at(){},
f6:function f6(){},
f7:function f7(){},
fa:function fa(){},
ak:function ak(){},
fc:function fc(){},
cX:function cX(){},
cY:function cY(){},
fd:function fd(){},
fe:function fe(){},
j5:function j5(a,b){this.a=a
this.b=b},
N:function N(){},
fi:function fi(){},
i:function i(){},
f:function f(){},
al:function al(){},
bZ:function bZ(){},
fp:function fp(){},
ft:function ft(){},
au:function au(){},
fz:function fz(){},
c0:function c0(){},
c1:function c1(){},
bu:function bu(){},
fT:function fT(){},
he:function he(){},
c7:function c7(){},
hf:function hf(){},
hg:function hg(a){this.a=a},
hh:function hh(){},
hi:function hi(a){this.a=a},
aw:function aw(){},
hj:function hj(){},
ax:function ax(){},
a2:function a2(a){this.a=a},
D:function D(){},
dg:function dg(){},
ay:function ay(){},
hz:function hz(){},
hK:function hK(){},
hL:function hL(a){this.a=a},
hN:function hN(){},
az:function az(){},
hY:function hY(){},
aA:function aA(){},
hZ:function hZ(){},
aB:function aB(){},
i1:function i1(){},
i2:function i2(a){this.a=a},
an:function an(){},
du:function du(){},
i5:function i5(){},
i6:function i6(){},
ch:function ch(){},
aC:function aC(){},
ao:function ao(){},
i9:function i9(){},
ia:function ia(){},
id:function id(){},
aD:function aD(){},
bB:function bB(){},
ii:function ii(){},
ij:function ij(){},
bc:function bc(){},
iG:function iG(){},
iY:function iY(){},
bg:function bg(){},
cr:function cr(){},
j6:function j6(){},
dM:function dM(){},
jb:function jb(){},
e4:function e4(){},
jp:function jp(){},
ju:function ju(){},
j4:function j4(){},
j8:function j8(a){this.a=a},
j9:function j9(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
ja:function ja(a){this.a=a},
cs:function cs(a){this.a=a},
K:function K(){},
dh:function dh(a){this.a=a},
hr:function hr(a){this.a=a},
hq:function hq(a,b,c){this.a=a
this.b=b
this.c=c},
ec:function ec(){},
jm:function jm(){},
jn:function jn(){},
jx:function jx(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jy:function jy(){},
jv:function jv(){},
d0:function d0(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
aQ:function aQ(){},
jk:function jk(a,b){this.a=a
this.b=b},
eu:function eu(a){this.a=a},
jI:function jI(a){this.a=a},
dL:function dL(){},
dN:function dN(){},
dO:function dO(){},
dP:function dP(){},
dQ:function dQ(){},
dT:function dT(){},
dU:function dU(){},
dV:function dV(){},
dW:function dW(){},
e0:function e0(){},
e1:function e1(){},
e2:function e2(){},
e3:function e3(){},
e5:function e5(){},
e6:function e6(){},
e9:function e9(){},
ea:function ea(){},
eb:function eb(){},
cy:function cy(){},
cz:function cz(){},
ed:function ed(){},
ee:function ee(){},
ei:function ei(){},
el:function el(){},
em:function em(){},
cA:function cA(){},
cB:function cB(){},
eo:function eo(){},
ep:function ep(){},
ev:function ev(){},
ew:function ew(){},
ex:function ex(){},
ey:function ey(){},
ez:function ez(){},
eA:function eA(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){}},K={
M:function(a,b){var u,t,s
if(a.length!==1||b.length!==1)throw H.c(P.u("The given low and high character strings for a Range must have one and only one characters."))
u=C.a.E(a,0)
t=C.a.E(b,0)
if(u>t){s=t
t=u
u=s}return new K.hF(u,t)},
t:function(a){var u=new K.hO()
u.e0(a)
return u},
aJ:function aJ(){},
d1:function d1(){},
b6:function b6(){},
a6:function a6(){this.a=null},
hF:function hF(a,b){this.a=a
this.b=b},
hO:function hO(){this.a=null}},L={
ig:function(){var u=new L.ie(),t=P.h
u.a=new H.I([t,L.ds])
u.b=new H.I([t,L.dz])
u.c=P.c4(t)
return u},
ds:function ds(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dy:function dy(a,b,c){this.a=a
this.b=b
this.c=c},
dz:function dz(a){this.b=a
this.c=null},
ie:function ie(){var _=this
_.d=_.c=_.b=_.a=null},
dB:function dB(a){this.b=a
this.a=this.c=null}},O={
kp:function(a){var u=new O.b_([a])
u.bv(a)
return u},
b_:function b_(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
c6:function c6(){this.b=this.a=null},
lh:function(){var u,t=new O.d9(),s=O.kp(V.aO)
t.e=s
s.b9(t.geI(),t.geK())
s=new O.av(t,"emission")
s.c=new A.a_(!1,!1,!1)
s.f=new V.W(0,0,0)
t.f=s
s=new O.av(t,"ambient")
s.c=new A.a_(!1,!1,!1)
s.f=new V.W(0,0,0)
t.r=s
s=new O.av(t,"diffuse")
s.c=new A.a_(!1,!1,!1)
s.f=new V.W(0,0,0)
t.x=s
s=new O.av(t,"invDiffuse")
s.c=new A.a_(!1,!1,!1)
s.f=new V.W(0,0,0)
t.y=s
s=new O.h5(t,"specular")
s.c=new A.a_(!1,!1,!1)
s.f=new V.W(0,0,0)
s.ch=100
t.z=s
s=new O.h1(t,"bump")
s.c=new A.a_(!1,!1,!1)
t.Q=s
t.ch=null
s=new O.av(t,"reflect")
s.c=new A.a_(!1,!1,!1)
s.f=new V.W(0,0,0)
t.cx=s
s=new O.h4(t,"refract")
s.c=new A.a_(!1,!1,!1)
s.f=new V.W(0,0,0)
s.ch=1
t.cy=s
s=new O.h0(t,"alpha")
s.c=new A.a_(!1,!1,!1)
s.f=1
t.db=s
s=new D.d6()
s.bv(D.a5)
s.e=H.b([],[D.eS])
s.f=H.b([],[D.fb])
s.r=H.b([],[D.hA])
s.x=H.b([],[D.bA])
s.z=s.y=null
s.cf(s.geG(),s.gfi(),s.gfm())
t.dx=s
u=new O.h3()
u.b=new V.as(0,0,0,0)
u.c=1
u.d=10
u.e=!1
t.dy=u
u=s.y
s=u==null?s.y=D.S():u
s.n(0,t.gfC())
s=t.dx
u=s.z
s=u==null?s.z=D.S():u
s.n(0,t.ge9())
t.fr=null
return t},
d9:function d9(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h6:function h6(a,b){this.a=a
this.b=b},
h7:function h7(){},
h8:function h8(a,b){this.a=a
this.b=b},
h9:function h9(){},
ha:function ha(a,b){this.a=a
this.b=b},
hb:function hb(){},
hc:function hc(a,b){this.a=a
this.b=b},
hd:function hd(){},
h0:function h0(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
da:function da(){},
h1:function h1(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
av:function av(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h3:function h3(){var _=this
_.e=_.d=_.c=_.b=null},
h4:function h4(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h5:function h5(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dv:function dv(){}},E={
ks:function(){var u,t=new E.aM()
t.a=""
t.b=!0
u=O.kp(E.aM)
t.y=u
u.b9(t.ghz(),t.ghC())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.saa(0,null)
t.sb6(null)
t.saM(null)
return t},
lN:function(){if(J.kl(window.navigator.vendor,"Google"))return C.H
if(J.kl(window.navigator.userAgent,"Firefox"))return C.t
var u=window.navigator.appVersion
if(J.aq(u).H(u,"Trident")||C.a.H(u,"Edge"))return C.u
if(J.kl(window.navigator.appName,"Microsoft"))return C.u
return C.I},
lO:function(){var u=window.navigator.appVersion
if(J.aq(u).H(u,"Win"))return C.a1
if(C.a.H(u,"Mac"))return C.C
if(C.a.H(u,"Linux"))return C.a2
return C.a3},
nq:function(a,b){var u=new E.hG(a)
u.e_(a,b)
return u},
nx:function(a,b,c,d,e){var u,t,s=J.R(a)
if(!!s.$ibo)return E.lx(a,!0,!0,!0,!1)
u=W.l9()
t=u.style
t.width="100%"
t.height="100%"
s.gbQ(a).n(0,u)
return E.lx(u,!0,!0,!0,!1)},
lx:function(a,b,c,d,e){var u,t,s,r,q="mousemove",p=new E.dw(),o=C.m.dO(a,"webgl2",P.n5(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(o==null)H.p(P.u("Failed to get the rendering context for WebGL."))
p.b=a
p.c=o
p.e=E.nq(o,a)
o.getParameter(3379)
o.getParameter(34076)
u=new X.dF(a)
t=new X.fL()
t.d=P.c4(P.w)
u.b=t
t=new X.hk(u)
t.f=0
t.r=V.ba()
t.x=V.ba()
t.ch=t.Q=1
u.c=t
t=new X.fU(u)
t.r=0
t.x=V.ba()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.ih(u)
t.f=V.ba()
t.r=V.ba()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.z=H.b([],[[P.dt,P.a1]])
t=$.fk
u.Q=(t==null?$.fk=new E.dR(E.lN(),E.lO()):t).a===C.t?0.16666666666666666:0.005555555555555556
s=u.z
r=document
s.push(W.Z(r,"contextmenu",u.geU(),!1))
u.z.push(W.Z(a,"focus",u.gf_(),!1))
u.z.push(W.Z(a,"blur",u.geM(),!1))
u.z.push(W.Z(r,"keyup",u.gf3(),!1))
u.z.push(W.Z(r,"keydown",u.gf1(),!1))
u.z.push(W.Z(a,"mousedown",u.gf7(),!1))
u.z.push(W.Z(a,"mouseup",u.gfb(),!1))
u.z.push(W.Z(a,q,u.gf9(),!1))
s=u.z
W.kq(a)
W.kq(a)
s.push(W.Z(a,W.kq(a),u.gfd(),!1))
u.z.push(W.Z(r,q,u.geW(),!1))
u.z.push(W.Z(r,"mouseup",u.geY(),!1))
u.z.push(W.Z(r,"pointerlockchange",u.gff(),!1))
u.z.push(W.Z(a,"touchstart",u.gft(),!1))
u.z.push(W.Z(a,"touchend",u.gfo(),!1))
u.z.push(W.Z(a,"touchmove",u.gfq(),!1))
p.x=u
p.ch=!0
p.cx=!1
p.cy=new P.ab(Date.now(),!1)
p.db=0
p.cI()
return p},
eV:function eV(){},
aM:function aM(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bn:function bn(a){this.b=a},
bw:function bw(a){this.b=a},
dR:function dR(a,b){this.a=a
this.b=b},
hG:function hG(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hH:function hH(a){this.a=a},
hI:function hI(a){this.a=a},
hJ:function hJ(a){this.a=a},
dw:function dw(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.e=_.d=_.c=_.b=null},
ic:function ic(a){this.a=a}},Z={
kI:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.bK(c)),35044)
a.bindBuffer(b,null)
return new Z.dI(b,u)},
ah:function(a){return new Z.bf(a)},
dI:function dI(a,b){this.a=a
this.b=b},
cP:function cP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
iZ:function iZ(a){this.a=a},
cQ:function cQ(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
br:function br(a,b,c){this.a=a
this.b=b
this.c=c},
bf:function bf(a){this.a=a}},D={
S:function(){var u=new D.bq()
u.d=0
return u},
eY:function eY(){},
bq:function bq(){var _=this
_.d=_.c=_.b=_.a=null},
fm:function fm(a){this.a=a},
fn:function fn(a){this.a=a},
Y:function Y(){this.b=null},
bs:function bs(){this.b=null},
bt:function bt(){this.b=null},
C:function C(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
eS:function eS(){},
fb:function fb(){},
a5:function a5(){},
d6:function d6(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
hA:function hA(){},
bA:function bA(){var _=this
_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},X={cR:function cR(a,b){this.a=a
this.b=b},d5:function d5(a,b){this.a=a
this.b=b},fL:function fL(){this.d=this.b=this.a=null},d8:function d8(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fU:function fU(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bv:function bv(a,b,c){this.a=a
this.b=b
this.c=c},b7:function b7(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hk:function hk(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},hB:function hB(){},dA:function dA(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},ih:function ih(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dF:function dF(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
mV:function(a){var u=new X.fv(),t=new V.as(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.lu
if(t==null){t=V.lt(0,0,1,1)
$.lu=t}u.r=t
return u},
ko:function ko(){},
fv:function fv(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dj:function dj(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
i7:function i7(){}},V={
p6:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.b8(a-b,u)
return(a<0?a+u:a)+b},
F:function(a,b,c){if(a==null)return C.a.af("null",c)
return C.a.af(C.d.dI(Math.abs(a-0)<$.A().a?0:a,b),c+b+1)},
bP:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.h])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.l)(a),++s){r=V.F(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.d(o,q)
u=C.a.af(o[q],t)
p=o.length
if(q>=p)return H.d(o,q)
o[q]=u}return o},
dc:function(){var u=$.ll
return u==null?$.ll=V.aP(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aP:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aO(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lk:function(a,b,c){return V.aP(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
lj:function(a,b,c,d){return V.aP(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
li:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.aP(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
ba:function(){var u=$.lo
return u==null?$.lo=new V.a7(0,0):u},
lp:function(){var u=$.ag
return u==null?$.ag=new V.P(0,0,0):u},
lt:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dm(a,b,c,d)},
co:function(){var u=$.lJ
return u==null?$.lJ=new V.z(0,0,0):u},
nG:function(){var u=$.iK
return u==null?$.iK=new V.z(-1,0,0):u},
lK:function(){var u=$.iL
return u==null?$.iL=new V.z(0,1,0):u},
lL:function(){var u=$.iM
return u==null?$.iM=new V.z(0,0,1):u},
W:function W(a,b,c){this.a=a
this.b=b
this.c=c},
as:function as(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fl:function fl(a){this.a=a},
db:function db(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aO:function aO(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a7:function a7(a,b){this.a=a
this.b=b},
P:function P(a,b,c){this.a=a
this.b=b
this.c=c},
bb:function bb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dm:function dm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
U:function U(a,b){this.a=a
this.b=b},
z:function z(a,b,c){this.a=a
this.b=b
this.c=c},
cp:function cp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
p1:function(a){P.ny(C.T,new V.ke(a))},
ns:function(a){var u=new V.hT()
u.e2(a,!0)
return u},
cS:function cS(){},
ke:function ke(a){this.a=a},
f9:function f9(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fx:function fx(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fy:function fy(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hy:function hy(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hD:function hD(a){this.a=a
this.c=null},
hE:function hE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hT:function hT(){this.b=this.a=null},
hV:function hV(a){this.a=a},
hU:function hU(a){this.a=a},
hW:function hW(a){this.a=a}},U={
lb:function(){var u=new U.f_()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
cU:function(a){var u=new U.cT()
u.a=a
return u},
ku:function(){var u=new U.c_()
u.bv(U.am)
u.b9(u.ge5(),u.gfk())
u.e=null
u.f=V.dc()
u.r=0
return u},
lF:function(a,b){var u,t,s,r=new U.dG(),q=U.lb()
q.sdM(0,!0)
q.sdj(6.283185307179586)
q.sdl(0)
q.sa2(0,0)
q.sdk(100)
q.sX(0)
q.sd_(0.5)
r.b=q
u=r.gbb()
q.gB().n(0,u)
q=U.lb()
q.sdM(0,!0)
q.sdj(6.283185307179586)
q.sdl(0)
q.sa2(0,0)
q.sdk(100)
q.sX(0)
q.sd_(0.5)
r.c=q
q.gB().n(0,u)
r.d=null
r.r=r.f=r.e=!1
r.y=r.x=2.5
r.Q=4
r.ch=r.cx=!1
r.db=r.cy=0
r.dx=null
r.dy=0
r.fx=r.fr=null
t=new X.bv(a,!1,!1)
s=r.d
r.d=t
q=new D.C("modifiers",s,t)
q.b=!0
r.W(q)
q=r.f
if(q!==!1){r.f=!1
q=new D.C("invertX",q,!1)
q.b=!0
r.W(q)}q=r.r
if(q!==!1){r.r=!1
q=new D.C("invertY",q,!1)
q.b=!0
r.W(q)}r.fZ(b)
return r},
f_:function f_(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cT:function cT(){this.b=this.a=null},
c_:function c_(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
am:function am(){},
dG:function dG(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cZ:function cZ(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
n9:function(a,b){var u=a.aZ,t=new A.h_(b,u)
t.e1(b,u)
t.dZ(a,b)
return t},
na:function(a,b,c,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="MaterialLight_"+a2.gak(a2)+a3.gak(a3)+a4.gak(a4)+a5.gak(a5)+a6.gak(a6)+a7.gak(a7)+a8.gak(a8)+a9.gak(a9)+b0.gak(b0)+"_"
d+=a?"1":"0"
d+=b?"1":"0"
d+=c?"1":"0"
d=d+"0_"+a1
u=b1.length
if(u>0){d+="_Bar"
for(t=0;t<b1.length;b1.length===u||(0,H.l)(b1),++t)d+="_"+H.e(b1[t].a)}u=b2.length
if(u>0){d+="_Dir"
for(t=0;t<b2.length;b2.length===u||(0,H.l)(b2),++t)d+="_"+H.e(b2[t].a)}u=b3.length
if(u>0){d+="_Point"
for(t=0;t<b3.length;b3.length===u||(0,H.l)(b3),++t)d+="_"+H.e(b3[t].a)}u=b4.length
if(u>0){d+="_Spot"
for(t=0;t<b4.length;b4.length===u||(0,H.l)(b4),++t)d+="_"+H.e(b4[t].a)}for(u=b1.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=b1[t].b
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
e=$.aY()
if(j){u=$.aX()
e=new Z.bf(e.a|u.a)}if(i){u=$.aW()
e=new Z.bf(e.a|u.a)}if(h){u=$.aV()
e=new Z.bf(e.a|u.a)}return new A.h2(a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,s,o,k,o,r,g,!0,f,!1,m,r,l,j,i,!1,!1,h,!1,!1,c,!1,a1,d.charCodeAt(0)==0?d:d,e)},
jQ:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
jR:function(a,b,c){var u
A.jQ(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.eH(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
og:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.jQ(b,t,"emission")
t=b.a+="\n"
t+="vec3 emissionColor()\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   return emissionClr;\n"
b.a=t}t+="}\n"
b.a=t
b.a=t+"\n"},
oc:function(a,b){var u,t=a.b
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.jR(b,t,"ambient")
b.a+="\n"},
oe:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.jR(b,t,"diffuse")
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
oh:function(a,b){var u,t=a.d
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.jR(b,t,"invDiffuse")
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
on:function(a,b){var u,t=a.e
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.jR(b,t,"specular")
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
oj:function(a,b){var u,t,s
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
ol:function(a,b){var u,t=a.r,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.jQ(b,t,"reflect")
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
om:function(a,b){var u,t=a.x,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.jQ(b,t,"refract")
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
od:function(a,b,c){var u,t,s,r,q,p,o=b.b
if(o<=0)return
u=b.a
t="barLight"+H.e(u)
s=A.eH(t)
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
of:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.e(u)
s=A.eH(t)
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
ok:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.e(u)
s=A.eH(t)
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
oo:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.e(u)
s=A.eH(t)
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
u+="   if(zScale < 0.0) return vec3(0.0, 0.0, 0.0);\n"
c.a=u
if(o){u=$.fk
if(u==null)u=$.fk=new E.dR(E.lN(),E.lO())
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
oi:function(a,b){var u,t
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
op:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.Q("")
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
A.og(a,j)
A.oc(a,j)
A.oe(a,j)
A.oh(a,j)
A.on(a,j)
t=a.db
if(t){r=j.a+="// === Environmental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.ol(a,j)
A.om(a,j)}A.oj(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.l)(q),++o)A.od(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.l)(q),++o)A.of(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.l)(q),++o)A.ok(a,q[o],j)
for(q=a.cx,p=q.length,o=0;o<q.length;q.length===p||(0,H.l)(q),++o)A.oo(a,q[o],j)
A.oi(a,j)}q=j.a+="// === Main ===\n"
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.l)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a6(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.l)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a6(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.l)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a6(r,1))+"Values(norm);\n"}for(u=a.cx,t=u.length,o=0;o<u.length;u.length===t||(0,H.l)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a6(r,1))+"Values(norm);\n"}if(a.cy<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)u=!1
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
oq:function(a,b){var u,t,s
if(!a.ry)return
u=b.a+="struct BendingValue\n"
u+="{\n"
b.a=u
u+="   mat4 mat;\n"
b.a=u
u+="};\n"
b.a=u
b.a=u+"uniform int bendMatCount;\n"
u=b.a+="uniform BendingValue bendValues["+a.bi+"];\n"
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
os:function(a,b){var u
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
or:function(a,b){var u
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
ou:function(a,b){var u,t
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
ov:function(a,b){var u,t
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
ot:function(a,b){var u
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
ow:function(a,b){var u
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
eH:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.a.a6(a,1)},
kF:function(a,b,c,d,e){var u=new A.ip(a,c,e)
u.f=d
P.n6(d,0,P.w)
return u},
cN:function cN(a,b,c){this.a=a
this.b=b
this.c=c},
eN:function eN(a){this.a=a},
a_:function a_(a,b,c){this.a=a
this.b=b
this.c=c},
h_:function h_(a,b){var _=this
_.i9=_.i8=_.bj=_.aZ=_.bi=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.ip=_.io=_.im=_.c0=_.c_=_.bZ=_.bY=_.bX=_.bW=_.bV=_.bU=_.il=_.ik=_.d6=_.ij=_.ii=_.d5=_.d4=_.ih=_.ig=_.d3=_.d2=_.ie=_.ic=_.d1=_.ib=_.ia=_.d0=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cO:function cO(a,b){this.a=a
this.b=b},
cW:function cW(a,b){this.a=a
this.b=b},
dk:function dk(a,b){this.a=a
this.b=b},
dq:function dq(a,b){this.a=a
this.b=b},
h2:function h2(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.bi=b3
_.aZ=b4
_.bj=b5},
cj:function cj(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
ck:function ck(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cm:function cm(a,b,c,d,e,f,g,h,i,j){var _=this
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
cn:function cn(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dn:function dn(){},
dC:function dC(){},
iu:function iu(a){this.a=a},
bd:function bd(a,b,c){this.a=a
this.c=b
this.d=c},
ir:function ir(a,b,c){this.a=a
this.c=b
this.d=c},
is:function is(a,b,c){this.a=a
this.c=b
this.d=c},
it:function it(a,b,c){this.a=a
this.c=b
this.d=c},
ip:function ip(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
V:function V(a,b,c){this.a=a
this.c=b
this.d=c},
iq:function iq(a,b,c){this.a=a
this.c=b
this.d=c},
G:function G(a,b,c){this.a=a
this.c=b
this.d=c},
ci:function ci(a,b,c){this.a=a
this.c=b
this.d=c},
iv:function iv(a,b,c){this.a=a
this.c=b
this.d=c},
cl:function cl(a,b,c){this.a=a
this.c=b
this.d=c},
ac:function ac(a,b,c){this.a=a
this.c=b
this.d=c},
bD:function bD(a,b,c){this.a=a
this.c=b
this.d=c},
bE:function bE(a,b,c){this.a=a
this.c=b
this.d=c}},F={
kR:function(a,b,c,d){var u=F.kD()
F.cD(u,b,c,d,a,1,0,0,1)
F.cD(u,b,c,d,a,0,1,0,3)
F.cD(u,b,c,d,a,0,0,1,2)
F.cD(u,b,c,d,a,-1,0,0,0)
F.cD(u,b,c,d,a,0,-1,0,0)
F.cD(u,b,c,d,a,0,0,-1,3)
u.ap()
return u},
jL:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cD:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.z(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.z(u+a3,t+a1,s+a2)
q=new V.z(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.z(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.jL(i)
l=F.jL(h)
k=F.kZ(d,a0,new F.jK(j,F.jL(g),F.jL(f),l,m,c),b)
if(k!=null)a.b3(k)},
m5:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(e<3)return
u=F.kD()
t=b?-1:1
s=-6.283185307179586/e
r=H.b([],[F.be])
q=u.a
p=new V.z(0,0,t)
p=p.u(0,Math.sqrt(p.D(p)))
r.push(q.fW(new V.bb(a,-1,-1,-1),new V.as(1,1,1,1),new V.P(0,0,c),new V.z(0,0,t),new V.a7(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.v(k)
j=new V.z(m,l,t).u(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.dH(new V.bb(a,-1,-1,-1),null,new V.as(i,g,h,1),new V.P(m*k,l*k,c),new V.z(0,0,t),new V.a7(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.n(0,f)
r.push(f)}u.d.fU(r)
return u},
kS:function(a,b,c,d,e){return F.oI(b,c,1,new F.jU(a,e),d)},
oI:function(a,b,c,d,e){var u
if(e<3)return
if(c<1)return
u=F.kZ(c,e,new F.jW(d),null)
if(u==null)return
u.ap()
u.bM()
if(b)u.b3(F.m5(3,!1,1,new F.jX(d),e))
if(a)u.b3(F.m5(1,!0,-1,new F.jY(d),e))
return u},
p2:function(a,b){var u,t,s={}
s.a=u
s.a=null
s.a=new F.kf()
t=F.kR(a,null,new F.kg(s,1),b)
t.bM()
return t},
mg:function(){return F.m4(15,30,0.5,1,new F.ki())},
oW:function(){return F.m4(12,120,0.3,1,new F.k5(3,2))},
m4:function(a,b,c,d,e){var u=F.kZ(a,b,new F.jV(e,d,b,c),null)
if(u==null)return
u.ap()
u.bM()
return u},
kZ:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.kD()
t=H.b([],[F.be])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.dH(g,g,new V.as(p,0,0,1),g,g,new V.a7(r,1),g,g,0)
q.n(0,o)
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
o=F.dH(g,g,new V.as(j,i,h,1),g,g,new V.a7(r,m),g,g,0)
k.n(0,o)
c.$3(o,r,n)
t.push(o.bT(d))}}u.d.fV(a+1,b+1,t)
return u},
bY:function(a,b,c){var u=new F.b1(),t=a.a
if(t==null)H.p(P.u("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.p(P.u("May not create a face with vertices attached to different shapes."))
u.bK(a)
u.bL(b)
u.fH(c)
u.a.a.d.b.push(u)
u.a.a.Y()
return u},
n2:function(a,b){var u=new F.c3(),t=a.a
if(t==null)H.p(P.u("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.p(P.u("May not create a line with vertices attached to different shapes."))
u.bK(a)
u.bL(b)
u.a.a.c.b.push(u)
u.a.a.Y()
return u},
kD:function(){var u=new F.hP(),t=new F.iN(u)
t.b=!1
t.c=H.b([],[F.be])
u.a=t
t=new F.hS(u)
t.b=H.b([],[F.cb])
u.b=t
t=new F.hR(u)
t.b=H.b([],[F.c3])
u.c=t
t=new F.hQ(u)
t.b=H.b([],[F.b1])
u.d=t
u.e=null
return u},
dH:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.be(),r=new F.iV()
r.b=H.b([],[F.cb])
s.b=r
r=new F.iR()
u=[F.c3]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.iO()
u=[F.b1]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.mu()
s.e=0
r=$.aY()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aX().a)!==0?e:t
s.x=(u&$.aW().a)!==0?b:t
s.y=(u&$.bi().a)!==0?f:t
s.z=(u&$.bj().a)!==0?g:t
s.Q=(u&$.mv().a)!==0?c:t
s.ch=(u&$.bR().a)!==0?i:0
s.cx=(u&$.aV().a)!==0?a:t
return s},
jK:function jK(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jU:function jU(a,b){this.a=a
this.b=b},
jW:function jW(a){this.a=a},
jX:function jX(a){this.a=a},
jY:function jY(a){this.a=a},
kf:function kf(){},
kg:function kg(a,b){this.a=a
this.b=b},
ki:function ki(){},
k5:function k5(a,b){this.a=a
this.b=b},
jV:function jV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b1:function b1(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fo:function fo(){},
hX:function hX(){},
c3:function c3(){this.b=this.a=null},
fN:function fN(){},
io:function io(){},
cb:function cb(){this.a=null},
hP:function hP(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hQ:function hQ(a){this.a=a
this.b=null},
hR:function hR(a){this.a=a
this.b=null},
hS:function hS(a){this.a=a
this.b=null},
be:function be(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iX:function iX(a){this.a=a},
iW:function iW(a){this.a=a},
iN:function iN(a){this.a=a
this.c=this.b=null},
iO:function iO(){this.d=this.c=this.b=null},
iP:function iP(a,b){this.a=a
this.b=b},
iQ:function iQ(a,b){this.a=a
this.b=b},
iR:function iR(){this.c=this.b=null},
iT:function iT(){},
iS:function iS(){},
iU:function iU(){},
hs:function hs(){},
iV:function iV(){this.b=null}},T={ib:function ib(){}},N={
ma:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="testCanvas",c=null,b=V.ns("Test 024"),a=W.l9()
a.className="pageLargeCanvas"
a.id=d
b.a.appendChild(a)
u=[P.h]
b.cU(H.b(["Test of the Material Lighting shader with a simple spot light. ","Use Ctrl plus the mouse to move the light."],u))
b.fS(H.b(["shapes"],u))
b.cU(H.b(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(d)
if(t==null)H.p(P.u("Failed to find an element with the identifier, testCanvas."))
s=E.nx(t,!0,!0,!0,!1)
r=U.ku()
r.n(0,U.cU(V.lk(0,0,-2.5)))
r.n(0,U.lF(!0,s.x))
q=new V.W(1,1,1)
p=new D.bA()
p.r=new V.W(1,1,1)
p.ch=1.0471975511965976
p.cx=1
p.dx=p.cy=1.5707963267948966
p.db=!0
p.dy=1
p.fx=p.fr=0
p.fy=!0
p.a=V.lp()
p.b=V.lL()
p.c=V.lK()
p.d=V.nG()
o=p.f
p.f=r
r.gB().n(0,p.geO())
n=new D.C("mover",o,p.f)
n.b=!0
p.Z(n)
if(!p.r.p(0,q)){o=p.r
p.r=q
n=new D.C("color",o,q)
n.b=!0
p.Z(n)}n=p.ch
if(!(Math.abs(n-1.0471975511965976)<$.A().a)){p.ch=1.0471975511965976
m=1/(Math.sqrt(2)*Math.tan(p.ch))
p.z=m
p.Q=m*p.cx
n=new D.C("fov",n,p.ch)
n.b=!0
p.Z(n)}n=p.cx
if(!(Math.abs(n-1)<$.A().a)){p.cx=1
m=p.z
if(typeof m!=="number")return m.A()
p.Q=m
n=new D.C("ratio",n,1)
n.b=!0
p.Z(n)}n=p.cy
if(!(Math.abs(n-0.6)<$.A().a)){p.cy=0.6
n=new D.C("cutoff",n,0.6)
n.b=!0
p.Z(n)}n=p.dx
if(!(Math.abs(n-0.5)<$.A().a)){p.dx=0.5
n=new D.C("coneAngle",n,0.5)
n.b=!0
p.Z(n)}n=$.lM
if(n==null){n=new V.cp(1,0.00390625,0.0000152587890625,0)
$.lM=n
l=n}else l=n
if(!J.E(p.e,l)){o=p.e
p.e=l
n=new D.C("shadowAdjust",o,l)
n.b=!0
p.Z(n)}n=p.dy
if(!(Math.abs(n-0.5)<$.A().a)){p.dy=0.5
n=new D.C("attenuation0",n,0.5)
n.b=!0
p.Z(n)}n=p.fr
if(!(Math.abs(n-0.05)<$.A().a)){p.fr=0.05
n=new D.C("attenuation1",n,0.05)
n.b=!0
p.Z(n)}n=p.fx
if(!(Math.abs(n-0.05)<$.A().a)){p.fx=0.05
n=new D.C("attenuation2",n,0.05)
n.b=!0
p.Z(n)}k=O.lh()
k.dx.n(0,p)
k.f.saq(0,new V.W(0,0,0))
n=k.r
n.saq(0,new V.W(0,0,0))
n=k.x
n.saq(0,new V.W(0.7,0.7,0.7))
n=k.z
n.saq(0,new V.W(0.3,0.3,0.3))
n=k.z
n.cK(new A.a_(!0,!1,!1))
n.cL(100)
j=E.ks()
j.saa(0,F.mg())
i=E.ks()
i.saM(U.cU(V.lj(3,3,3,1)))
n=F.kR(1,c,c,1)
n.c2()
i.saa(0,n)
h=U.ku()
h.n(0,U.lF(!1,s.x))
h.n(0,U.cU(V.li(3.141592653589793)))
h.n(0,U.cU(V.lk(0,0,5)))
g=E.ks()
n=U.ku()
n.n(0,U.cU(V.lj(0.1,0.1,0.1,1)))
n.n(0,r)
g.saM(n)
g.saa(0,F.kS(0,!1,!0,40,1))
n=O.lh()
m=n.f
m.saq(0,new V.W(1,1,1))
g.sb6(n)
n=new M.cZ()
n.a=!0
m=O.kp(E.aM)
n.e=m
m.b9(n.geQ(),n.geS())
n.y=n.x=n.r=n.f=null
f=X.mV(c)
e=new X.dj()
e.c=1.0471975511965976
e.d=0.1
e.e=2000
e.saM(c)
m=e.c
if(!(Math.abs(m-1.0471975511965976)<$.A().a)){e.c=1.0471975511965976
m=new D.C("fov",m,1.0471975511965976)
m.b=!0
e.aF(m)}m=e.d
if(!(Math.abs(m-0.1)<$.A().a)){e.d=0.1
m=new D.C("near",m,0.1)
m.b=!0
e.aF(m)}m=e.e
if(!(Math.abs(m-2000)<$.A().a)){e.e=2000
m=new D.C("far",m,2000)
m.b=!0
e.aF(m)}m=n.b
if(m!==e){if(m!=null)m.gB().L(0,n.gam())
o=n.b
n.b=e
e.gB().n(0,n.gam())
m=new D.C("camera",o,n.b)
m.b=!0
n.au(m)}m=n.c
if(m!==f){if(m!=null)m.gB().L(0,n.gam())
o=n.c
n.c=f
f.gB().n(0,n.gam())
m=new D.C("target",o,n.c)
m.b=!0
n.au(m)}n.sb6(c)
n.sb6(k)
n.e.n(0,j)
n.e.n(0,i)
n.e.n(0,g)
n.b.saM(h)
m=s.d
if(m!==n){if(m!=null)m.gB().L(0,s.gcm())
s.d=n
n.gB().n(0,s.gcm())
s.cn()}n=new V.hD("shapes")
u=u.getElementById("shapes")
n.c=u
if(u==null)H.p("Failed to find shapes for RadioGroup")
n.aW(0,"Cube",new N.k6(j))
n.aW(0,"Cylinder",new N.k7(j))
n.aW(0,"Cone",new N.k8(j))
n.aW(0,"Sphere",new N.k9(j))
n.cS(0,"Toroid",new N.ka(j),!0)
n.aW(0,"Knot",new N.kb(j))
u=s.Q
if(u==null)u=s.Q=D.S()
n=u.b
u=n==null?u.b=H.b([],[{func:1,ret:-1,args:[D.Y]}]):n
u.push(new N.kc(b,k))
V.p1(s)},
k6:function k6(a){this.a=a},
k7:function k7(a){this.a=a},
k8:function k8(a){this.a=a},
k9:function k9(a){this.a=a},
ka:function ka(a){this.a=a},
kb:function kb(a){this.a=a},
kc:function kc(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T,N]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.ky.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gI:function(a){return H.cc(a)},
i:function(a){return"Instance of '"+H.e(H.cd(a))+"'"}}
J.fG.prototype={
i:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$iaG:1}
J.d3.prototype={
p:function(a,b){return null==b},
i:function(a){return"null"},
gI:function(a){return 0}}
J.d4.prototype={
gI:function(a){return 0},
i:function(a){return String(a)},
$in0:1}
J.hx.prototype={}
J.bF.prototype={}
J.b4.prototype={
i:function(a){var u=a[$.mi()]
if(u==null)return this.dW(a)
return"JavaScript function for "+H.e(J.a3(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.b2.prototype={
c9:function(a,b){if(!!a.fixed$length)H.p(P.y("removeAt"))
if(b<0||b>=a.length)throw H.c(P.dl(b,null))
return a.splice(b,1)[0]},
L:function(a,b){var u
if(!!a.fixed$length)H.p(P.y("remove"))
for(u=0;u<a.length;++u)if(J.E(a[u],b)){a.splice(u,1)
return!0}return!1},
ac:function(a,b){var u,t
if(!!a.fixed$length)H.p(P.y("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.l)(b),++t)a.push(b[t])},
F:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.c(P.aK(a))}},
j:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.d(r,u)
r[u]=t}return r.join(b)},
hv:function(a){return this.j(a,"")},
ho:function(a,b,c){var u,t,s=a.length
for(u=b,t=0;t<s;++t){u=c.$2(u,a[t])
if(a.length!==s)throw H.c(P.aK(a))}return u},
hp:function(a,b,c){return this.ho(a,b,c,null)},
hn:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.c(P.aK(a))}throw H.c(H.fE())},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
dS:function(a,b,c){if(b<0||b>a.length)throw H.c(P.X(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.c(P.X(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.aH(a,0)])
return H.b(a.slice(b,c),[H.aH(a,0)])},
ghm:function(a){if(a.length>0)return a[0]
throw H.c(H.fE())},
gar:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.fE())},
cV:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.c(P.aK(a))}return!1},
aS:function(a,b){if(!!a.immutable$list)H.p(P.y("sort"))
H.nv(a,b==null?J.o9():b)},
dR:function(a){return this.aS(a,null)},
H:function(a,b){var u
for(u=0;u<a.length;++u)if(J.E(a[u],b))return!0
return!1},
i:function(a){return P.kv(a,"[","]")},
gS:function(a){return new J.a4(a,a.length)},
gI:function(a){return H.cc(a)},
gl:function(a){return a.length},
sl:function(a,b){var u="newLength"
if(!!a.fixed$length)H.p(P.y("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.km(b,u,null))
if(b<0)throw H.c(P.X(b,0,null,u,null))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bO(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.p(P.y("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bO(a,b))
a[b]=c},
$iq:1,
$ij:1,
$io:1}
J.kx.prototype={}
J.a4.prototype={
gC:function(a){return this.d},
t:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.l(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.c2.prototype={
aK:function(a,b){var u
if(typeof b!=="number")throw H.c(H.ai(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbl(b)
if(this.gbl(a)===u)return 0
if(this.gbl(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbl:function(a){return a===0?1/a<0:a<0},
d7:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.y(""+a+".floor()"))},
aj:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.y(""+a+".round()"))},
dI:function(a,b){var u
if(b>20)throw H.c(P.X(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbl(a))return"-"+u
return u},
b7:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.X(b,2,36,"radix",null))
u=a.toString(b)
if(C.a.U(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.p(P.y("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.d(t,1)
u=t[1]
if(3>=s)return H.d(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.a.A("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gI:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
b8:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
dY:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cN(a,b)},
a4:function(a,b){return(a|0)===a?a/b|0:this.cN(a,b)},
cN:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.y("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
aI:function(a,b){var u
if(a>0)u=this.cM(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
fL:function(a,b){if(b<0)throw H.c(H.ai(b))
return this.cM(a,b)},
cM:function(a,b){return b>31?0:a>>>b},
$iJ:1,
$iaa:1}
J.d2.prototype={$iw:1}
J.fH.prototype={}
J.b3.prototype={
U:function(a,b){if(b<0)throw H.c(H.bO(a,b))
if(b>=a.length)H.p(H.bO(a,b))
return a.charCodeAt(b)},
E:function(a,b){if(b>=a.length)throw H.c(H.bO(a,b))
return a.charCodeAt(b)},
w:function(a,b){if(typeof b!=="string")throw H.c(P.km(b,null,null))
return a+b},
aO:function(a,b,c,d){var u,t
c=P.aS(b,c,a.length)
if(typeof c!=="number"||Math.floor(c)!==c)H.p(H.ai(c))
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a5:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.X(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a3:function(a,b){return this.a5(a,b,0)},
q:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.p(H.ai(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.R()
if(b<0)throw H.c(P.dl(b,null))
if(b>c)throw H.c(P.dl(b,null))
if(c>a.length)throw H.c(P.dl(c,null))
return a.substring(b,c)},
a6:function(a,b){return this.q(a,b,null)},
i_:function(a){return a.toLowerCase()},
A:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.Q)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
af:function(a,b){var u=b-a.length
if(u<=0)return a
return this.A(" ",u)+a},
bk:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.X(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
de:function(a,b){return this.bk(a,b,0)},
h7:function(a,b,c){var u=a.length
if(c>u)throw H.c(P.X(c,0,u,null,null))
return H.me(a,b,c)},
H:function(a,b){return this.h7(a,b,0)},
aK:function(a,b){var u
if(typeof b!=="string")throw H.c(H.ai(b))
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
h:function(a,b){return C.a.U(this.a,b)},
$aq:function(){return[P.w]},
$ax:function(){return[P.w]},
$aj:function(){return[P.w]},
$ao:function(){return[P.w]}}
H.q.prototype={}
H.d7.prototype={
gS:function(a){return new H.b5(this,this.gl(this))},
bs:function(a,b){return this.dV(0,b)}}
H.b5.prototype={
gC:function(a){return this.d},
t:function(){var u,t=this,s=t.a,r=J.aq(s),q=r.gl(s)
if(t.b!=q)throw H.c(P.aK(s))
u=t.c
if(typeof q!=="number")return H.v(q)
if(u>=q){t.d=null
return!1}t.d=r.J(s,u);++t.c
return!0}}
H.c5.prototype={
gS:function(a){return new H.fY(J.aI(this.a),this.b)},
gl:function(a){return J.ae(this.a)},
J:function(a,b){return this.b.$1(J.eI(this.a,b))},
$aj:function(a,b){return[b]}}
H.fh.prototype={$iq:1,
$aq:function(a,b){return[b]}}
H.fY.prototype={
t:function(){var u=this,t=u.b
if(t.t()){u.a=u.c.$1(t.gC(t))
return!0}u.a=null
return!1},
gC:function(a){return this.a}}
H.fZ.prototype={
gl:function(a){return J.ae(this.a)},
J:function(a,b){return this.b.$1(J.eI(this.a,b))},
$aq:function(a,b){return[b]},
$ad7:function(a,b){return[b]},
$aj:function(a,b){return[b]}}
H.cq.prototype={
gS:function(a){return new H.j_(J.aI(this.a),this.b)}}
H.j_.prototype={
t:function(){var u,t
for(u=this.a,t=this.b;u.t();)if(t.$1(u.gC(u)))return!0
return!1},
gC:function(a){var u=this.a
return u.gC(u)}}
H.d_.prototype={}
H.iz.prototype={
m:function(a,b,c){throw H.c(P.y("Cannot modify an unmodifiable list"))}}
H.dD.prototype={}
H.f1.prototype={
i:function(a){return P.kC(this)},
m:function(a,b,c){return H.mQ()},
$iO:1}
H.f2.prototype={
gl:function(a){return this.a},
bR:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.bR(0,b))return
return this.cA(b)},
cA:function(a){return this.b[a]},
F:function(a,b){var u,t,s,r=this.c
for(u=r.length,t=0;t<u;++t){s=r[t]
b.$2(s,this.cA(s))}}}
H.il.prototype={
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
H.ht.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fK.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.iy.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kj.prototype={
$1:function(a){if(!!J.R(a).$ibp)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:9}
H.eh.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bV.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.cI(t==null?"unknown":t)+"'"},
gi2:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.i8.prototype={}
H.i0.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cI(u)+"'"}}
H.bT.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bT))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gI:function(a){var u,t=this.c
if(t==null)u=H.cc(this.a)
else u=typeof t!=="object"?J.cM(t):H.cc(t)
return(u^H.cc(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.cd(u))+"'")}}
H.eX.prototype={
i:function(a){return this.a}}
H.hM.prototype={
i:function(a){return"RuntimeError: "+H.e(this.a)}}
H.I.prototype={
gl:function(a){return this.a},
ghu:function(a){return this.a===0},
ga_:function(a){return new H.fP(this,[H.aH(this,0)])},
gi1:function(a){var u=this
return H.n8(u.ga_(u),new H.fJ(u),H.aH(u,0),H.aH(u,1))},
bR:function(a,b){var u=this.b
if(u==null)return!1
return this.em(u,b)},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bc(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bc(r,b)
s=t==null?null:t.b
return s}else return q.hs(b)},
hs:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.cC(r,s.df(a))
t=s.dg(u,a)
if(t<0)return
return u[t].b},
m:function(a,b,c){var u,t,s=this
if(typeof b==="string"){u=s.b
s.cq(u==null?s.b=s.bD():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cq(t==null?s.c=s.bD():t,b,c)}else s.ht(b,c)},
ht:function(a,b){var u,t,s,r=this,q=r.d
if(q==null)q=r.d=r.bD()
u=r.df(a)
t=r.cC(q,u)
if(t==null)r.bI(q,u,[r.bE(a,b)])
else{s=r.dg(t,a)
if(s>=0)t[s].b=b
else t.push(r.bE(a,b))}},
F:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.c(P.aK(u))
t=t.c}},
cq:function(a,b,c){var u=this.bc(a,b)
if(u==null)this.bI(a,b,this.bE(b,c))
else u.b=c},
ey:function(){this.r=this.r+1&67108863},
bE:function(a,b){var u,t=this,s=new H.fO(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.ey()
return s},
df:function(a){return J.cM(a)&0x3ffffff},
dg:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.E(a[t].a,b))return t
return-1},
i:function(a){return P.kC(this)},
bc:function(a,b){return a[b]},
cC:function(a,b){return a[b]},
bI:function(a,b,c){a[b]=c},
eq:function(a,b){delete a[b]},
em:function(a,b){return this.bc(a,b)!=null},
bD:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bI(t,u,t)
this.eq(t,u)
return t}}
H.fJ.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.aH(u,1),args:[H.aH(u,0)]}}}
H.fO.prototype={}
H.fP.prototype={
gl:function(a){return this.a.a},
gS:function(a){var u=this.a,t=new H.fQ(u,u.r)
t.c=u.e
return t}}
H.fQ.prototype={
gC:function(a){return this.d},
t:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.aK(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.k1.prototype={
$1:function(a){return this.a(a)},
$S:9}
H.k2.prototype={
$2:function(a,b){return this.a(a,b)}}
H.k3.prototype={
$1:function(a){return this.a(a)}}
H.fI.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$ino:1}
H.c8.prototype={$ic8:1}
H.b8.prototype={$ib8:1}
H.dd.prototype={
gl:function(a){return a.length},
$iB:1,
$aB:function(){}}
H.c9.prototype={
h:function(a,b){H.aF(b,a,a.length)
return a[b]},
m:function(a,b,c){H.aF(b,a,a.length)
a[b]=c},
$iq:1,
$aq:function(){return[P.J]},
$ax:function(){return[P.J]},
$ij:1,
$aj:function(){return[P.J]},
$io:1,
$ao:function(){return[P.J]}}
H.de.prototype={
m:function(a,b,c){H.aF(b,a,a.length)
a[b]=c},
$iq:1,
$aq:function(){return[P.w]},
$ax:function(){return[P.w]},
$ij:1,
$aj:function(){return[P.w]},
$io:1,
$ao:function(){return[P.w]}}
H.hl.prototype={
h:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.hm.prototype={
h:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.hn.prototype={
h:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.ho.prototype={
h:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.hp.prototype={
h:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.df.prototype={
gl:function(a){return a.length},
h:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.ca.prototype={
gl:function(a){return a.length},
h:function(a,b){H.aF(b,a,a.length)
return a[b]},
$ica:1,
$ibC:1}
H.cu.prototype={}
H.cv.prototype={}
H.cw.prototype={}
H.cx.prototype={}
P.j1.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:16}
P.j0.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.j2.prototype={
$0:function(){this.a.$0()}}
P.j3.prototype={
$0:function(){this.a.$0()}}
P.en.prototype={
eb:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bN(new P.jA(this,b),0),a)
else throw H.c(P.y("`setTimeout()` not found."))},
ec:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bN(new P.jz(this,a,Date.now(),b),0),a)
else throw H.c(P.y("Periodic timer."))},
$idx:1}
P.jA.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.jz.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.dY(u,q)}s.c=r
t.d.$1(s)}}
P.bG.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.e(this.a)+")"}}
P.bH.prototype={
gC:function(a){var u=this.c
if(u==null)return this.b
return u.gC(u)},
t:function(){var u,t,s,r,q=this
for(;!0;){u=q.c
if(u!=null)if(u.t())return!0
else q.c=null
t=function(a,b,c){var p,o=b
while(true)try{return a(o,p)}catch(n){p=n
o=c}}(q.a,0,1)
if(t instanceof P.bG){s=t.b
if(s===2){u=q.d
if(u==null||u.length===0){q.b=null
return!1}if(0>=u.length)return H.d(u,-1)
q.a=u.pop()
continue}else{u=t.a
if(s===3)throw u
else{r=J.aI(u)
if(!!r.$ibH){u=q.d
if(u==null)u=q.d=[]
u.push(q.a)
q.a=r.a
continue}else{q.c=r
continue}}}}else{q.b=t
return!0}}return!1}}
P.jw.prototype={
gS:function(a){return new P.bH(this.a())}}
P.dJ.prototype={}
P.dt.prototype={}
P.i3.prototype={}
P.dx.prototype={}
P.jJ.prototype={}
P.jS.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.di():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u}}
P.jh.prototype={
hV:function(a){var u,t,s,r=null
try{if(C.f===$.ap){a.$0()
return}P.oy(r,r,this,a)}catch(s){u=H.ad(s)
t=H.kU(s)
P.lZ(r,r,this,u,t)}},
hW:function(a,b){var u,t,s,r=null
try{if(C.f===$.ap){a.$1(b)
return}P.oz(r,r,this,a,b)}catch(s){u=H.ad(s)
t=H.kU(s)
P.lZ(r,r,this,u,t)}},
hX:function(a,b){return this.hW(a,b,null)},
h3:function(a){return new P.ji(this,a)},
cX:function(a,b){return new P.jj(this,a,b)}}
P.ji.prototype={
$0:function(){return this.a.hV(this.b)}}
P.jj.prototype={
$1:function(a){return this.a.hX(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.je.prototype={
gS:function(a){var u=new P.dZ(this,this.r)
u.c=this.e
return u},
gl:function(a){return this.a},
H:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.el(b)
return t}},
el:function(a){var u=this.d
if(u==null)return!1
return this.bA(this.cB(u,a),a)>=0},
n:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cs(u==null?s.b=P.kJ():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cs(t==null?s.c=P.kJ():t,b)}else return s.ee(0,b)},
ee:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.kJ()
u=s.cu(b)
t=r[u]
if(t==null)r[u]=[s.bx(b)]
else{if(s.bA(t,b)>=0)return!1
t.push(s.bx(b))}return!0},
L:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fw(this.c,b)
else return this.fv(0,b)},
fv:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cB(r,b)
t=s.bA(u,b)
if(t<0)return!1
s.cP(u.splice(t,1)[0])
return!0},
cs:function(a,b){if(a[b]!=null)return!1
a[b]=this.bx(b)
return!0},
fw:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.cP(u)
delete a[b]
return!0},
ct:function(){this.r=1073741823&this.r+1},
bx:function(a){var u,t=this,s=new P.jf(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.ct()
return s},
cP:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.ct()},
cu:function(a){return J.cM(a)&1073741823},
cB:function(a,b){return a[this.cu(b)]},
bA:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.E(a[t].a,b))return t
return-1}}
P.jf.prototype={}
P.dZ.prototype={
gC:function(a){return this.d},
t:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.aK(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fD.prototype={}
P.fR.prototype={
$2:function(a,b){this.a.m(0,a,b)},
$S:3}
P.fS.prototype={$iq:1,$ij:1,$io:1}
P.x.prototype={
gS:function(a){return new H.b5(a,this.gl(a))},
J:function(a,b){return this.h(a,b)},
hZ:function(a,b){var u,t,s=this,r=H.b([],[H.oO(s,a,"x",0)])
C.b.sl(r,s.gl(a))
u=0
while(!0){t=s.gl(a)
if(typeof t!=="number")return H.v(t)
if(!(u<t))break
t=s.h(a,u)
if(u>=r.length)return H.d(r,u)
r[u]=t;++u}return r},
hY:function(a){return this.hZ(a,!0)},
hk:function(a,b,c,d){var u
P.aS(b,c,this.gl(a))
for(u=b;u<c;++u)this.m(a,u,d)},
i:function(a){return P.kv(a,"[","]")}}
P.fV.prototype={}
P.fW.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:3}
P.a0.prototype={
F:function(a,b){var u,t
for(u=J.aI(this.ga_(a));u.t();){t=u.gC(u)
b.$2(t,this.h(a,t))}},
gl:function(a){return J.ae(this.ga_(a))},
i:function(a){return P.kC(a)},
$iO:1}
P.jB.prototype={
m:function(a,b,c){throw H.c(P.y("Cannot modify unmodifiable map"))}}
P.fX.prototype={
h:function(a,b){return J.bS(this.a,b)},
m:function(a,b,c){J.kk(this.a,b,c)},
F:function(a,b){J.l2(this.a,b)},
gl:function(a){return J.ae(this.a)},
i:function(a){return J.a3(this.a)},
$iO:1}
P.dE.prototype={}
P.jl.prototype={
ac:function(a,b){var u
for(u=J.aI(b);u.t();)this.n(0,u.gC(u))},
i:function(a){return P.kv(this,"{","}")},
J:function(a,b){var u,t,s
P.ls(b,"index")
for(u=P.nQ(this,this.r),t=0;u.t();){s=u.d
if(b===t)return s;++t}throw H.c(P.L(b,this,"index",null,t))},
$iq:1,
$ij:1}
P.e_.prototype={}
P.es.prototype={}
P.eT.prototype={
hy:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.aS(a0,a1,b.length)
u=$.mx()
if(typeof a1!=="number")return H.v(a1)
t=a0
s=t
r=null
q=-1
p=-1
o=0
for(;t<a1;t=n){n=t+1
m=C.a.E(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.k0(C.a.E(b,n))
j=H.k0(C.a.E(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.d(u,i)
h=u[i]
if(h>=0){i=C.a.U("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.Q("")
g=r.a+=C.a.q(b,s,t)
r.a=g+H.by(m)
s=n
continue}}throw H.c(P.T("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.a.q(b,s,a1)
f=g.length
if(q>=0)P.l6(b,p,a1,q,o,f)
else{e=C.c.b8(f-1,4)+1
if(e===1)throw H.c(P.T(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.a.aO(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.l6(b,p,a1,q,o,d)
else{e=C.c.b8(d,4)
if(e===1)throw H.c(P.T(c,b,a1))
if(e>1)b=C.a.aO(b,a1,a1,e===2?"==":"=")}return b}}
P.eU.prototype={}
P.eZ.prototype={}
P.f3.prototype={}
P.fj.prototype={}
P.fB.prototype={
i:function(a){return this.a}}
P.fA.prototype={
en:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.Q("")
if(r>b)q.a+=C.a.q(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.mI(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.iH.prototype={
ghj:function(){return C.R}}
P.iJ.prototype={
bS:function(a){var u,t,s,r=P.aS(0,null,a.length)
if(typeof r!=="number")return r.M()
u=r-0
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.jH(t)
if(s.es(a,0,r)!==r)s.cR(J.mE(a,r-1),0)
return new Uint8Array(t.subarray(0,H.o6(0,s.b,t.length)))}}
P.jH.prototype={
cR:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
es:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.a.U(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.a.E(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cR(r,C.a.E(a,p)))s=p}else if(r<=2047){q=n.b
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
P.iI.prototype={
bS:function(a){var u,t,s,r,q,p,o,n,m=P.nB(!1,a,0,null)
if(m!=null)return m
u=P.aS(0,null,J.ae(a))
t=P.m0(a,0,u)
if(t>0){s=P.cg(a,0,t)
if(t===u)return s
r=new P.Q(s)
q=t
p=!1}else{q=0
r=null
p=!0}if(r==null)r=new P.Q("")
o=new P.jG(!1,r)
o.c=p
o.h8(a,q,u)
if(o.e>0){H.p(P.T("Unfinished UTF-8 octet sequence",a,u))
r.a+=H.by(65533)
o.f=o.e=o.d=0}n=r.a
return n.charCodeAt(0)==0?n:n}}
P.jG.prototype={
h8:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=this,k="Bad UTF-8 encoding 0x",j=l.d,i=l.e,h=l.f
l.f=l.e=l.d=0
$label0$0:for(u=J.aq(a),t=l.b,s=b;!0;s=n){$label1$1:if(i>0){do{if(s===c)break $label0$0
r=u.h(a,s)
if(typeof r!=="number")return r.a8()
if((r&192)!==128){q=P.T(k+C.c.b7(r,16),a,s)
throw H.c(q)}else{j=(j<<6|r&63)>>>0;--i;++s}}while(i>0)
q=h-1
if(q<0||q>=4)return H.d(C.x,q)
if(j<=C.x[q]){q=P.T("Overlong encoding of 0x"+C.c.b7(j,16),a,s-h-1)
throw H.c(q)}if(j>1114111){q=P.T("Character outside valid Unicode range: 0x"+C.c.b7(j,16),a,s-h-1)
throw H.c(q)}if(!l.c||j!==65279)t.a+=H.by(j)
l.c=!1}if(typeof c!=="number")return H.v(c)
q=s<c
for(;q;){p=P.m0(a,s,c)
if(p>0){l.c=!1
o=s+p
t.a+=P.cg(a,s,o)
if(o===c)break}else o=s
n=o+1
r=u.h(a,o)
if(typeof r!=="number")return r.R()
if(r<0){m=P.T("Negative UTF-8 code unit: -0x"+C.c.b7(-r,16),a,n-1)
throw H.c(m)}else{if((r&224)===192){j=r&31
i=1
h=1
continue $label0$0}if((r&240)===224){j=r&15
i=2
h=2
continue $label0$0}if((r&248)===240&&r<245){j=r&7
i=3
h=3
continue $label0$0}m=P.T(k+C.c.b7(r,16),a,n-1)
throw H.c(m)}}break $label0$0}if(i>0){l.d=j
l.e=i
l.f=h}}}
P.aG.prototype={}
P.ab.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.ab&&this.a===b.a&&!0},
aK:function(a,b){return C.c.aK(this.a,b.a)},
gI:function(a){var u=this.a
return(u^C.c.aI(u,30))&1073741823},
i:function(a){var u=this,t=P.mR(H.nk(u)),s=P.cV(H.ni(u)),r=P.cV(H.ne(u)),q=P.cV(H.nf(u)),p=P.cV(H.nh(u)),o=P.cV(H.nj(u)),n=P.mS(H.ng(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.J.prototype={}
P.b0.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.b0&&this.a===b.a},
gI:function(a){return C.c.gI(this.a)},
aK:function(a,b){return C.c.aK(this.a,b.a)},
i:function(a){var u,t,s,r=new P.fg(),q=this.a
if(q<0)return"-"+new P.b0(0-q).i(0)
u=r.$1(C.c.a4(q,6e7)%60)
t=r.$1(C.c.a4(q,1e6)%60)
s=new P.ff().$1(q%1e6)
return""+C.c.a4(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
P.ff.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.fg.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bp.prototype={}
P.di.prototype={
i:function(a){return"Throw of null."}}
P.aj.prototype={
gbz:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gby:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbz()+o+u
if(!q.a)return t
s=q.gby()
r=P.kt(q.b)
return t+s+": "+r}}
P.bz.prototype={
gbz:function(){return"RangeError"},
gby:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.fC.prototype={
gbz:function(){return"RangeError"},
gby:function(){var u,t=this.b
if(typeof t!=="number")return t.R()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gl:function(a){return this.f}}
P.iA.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iw.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cf.prototype={
i:function(a){return"Bad state: "+this.a}}
P.f0.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.kt(u)+"."}}
P.hw.prototype={
i:function(a){return"Out of Memory"},
$ibp:1}
P.dr.prototype={
i:function(a){return"Stack Overflow"},
$ibp:1}
P.f8.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dS.prototype={
i:function(a){return"Exception: "+this.a}}
P.fu.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.a.q(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.a.E(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.a.U(f,q)
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
return h+l+j+k+"\n"+C.a.A(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.e(g)+")"):h}}
P.fw.prototype={}
P.w.prototype={}
P.j.prototype={
bs:function(a,b){return new H.cq(this,b,[H.kT(this,"j",0)])},
gl:function(a){var u,t=this.gS(this)
for(u=0;t.t();)++u
return u},
gaD:function(a){var u,t=this.gS(this)
if(!t.t())throw H.c(H.fE())
u=t.gC(t)
if(t.t())throw H.c(H.mY())
return u},
J:function(a,b){var u,t,s
P.ls(b,"index")
for(u=this.gS(this),t=0;u.t();){s=u.gC(u)
if(b===t)return s;++t}throw H.c(P.L(b,this,"index",null,t))},
i:function(a){return P.mX(this,"(",")")}}
P.fF.prototype={}
P.o.prototype={$iq:1,$ij:1}
P.O.prototype={}
P.b9.prototype={
gI:function(a){return P.a1.prototype.gI.call(this,this)},
i:function(a){return"null"}}
P.aa.prototype={}
P.a1.prototype={constructor:P.a1,$ia1:1,
p:function(a,b){return this===b},
gI:function(a){return H.cc(this)},
i:function(a){return"Instance of '"+H.e(H.cd(this))+"'"},
toString:function(){return this.i(this)}}
P.h.prototype={}
P.Q.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
P.iF.prototype={
$2:function(a,b){var u,t,s,r=J.cG(b).de(b,"=")
if(r===-1){if(b!=="")J.kk(a,P.kN(b,0,b.length,this.a,!0),"")}else if(r!==0){u=C.a.q(b,0,r)
t=C.a.a6(b,r+1)
s=this.a
J.kk(a,P.kN(u,0,u.length,s,!0),P.kN(t,0,t.length,s,!0))}return a}}
P.iC.prototype={
$2:function(a,b){throw H.c(P.T("Illegal IPv4 address, "+a,this.a,b))}}
P.iD.prototype={
$2:function(a,b){throw H.c(P.T("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.iE.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.eG(C.a.q(this.b,a,b),null,16)
if(typeof u!=="number")return u.R()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u}}
P.bI.prototype={
gdL:function(){return this.b},
gc3:function(a){var u=this.c
if(u==null)return""
if(C.a.a3(u,"["))return C.a.q(u,1,u.length-1)
return u},
gbn:function(a){var u=this.d
if(u==null)return P.lS(this.a)
return u},
gc7:function(a){var u=this.f
return u==null?"":u},
gd8:function(){var u=this.r
return u==null?"":u},
dE:function(a,b){var u,t,s,r=this,q=r.a,p=q==="file",o=r.b,n=r.d,m=r.c
if(!(m!=null))m=o.length!==0||n!=null||p?"":null
u=r.e
if(!p)t=m!=null&&u.length!==0
else t=!0
if(t&&!C.a.a3(u,"/"))u="/"+u
s=P.kL(null,0,0,b)
return new P.bI(q,o,m,n,u,s,r.r)},
gc8:function(){var u,t=this.Q
if(t==null){t=this.f
u=P.h
u=this.Q=new P.dE(P.lE(t==null?"":t),[u,u])
t=u}return t},
gd9:function(){return this.c!=null},
gdd:function(){return this.f!=null},
gda:function(){return this.r!=null},
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
if(!!J.R(b).$ikG)if(s.a==b.gbt())if(s.c!=null===b.gd9())if(s.b==b.gdL())if(s.gc3(s)==b.gc3(b))if(s.gbn(s)==b.gbn(b))if(s.e===b.gdA(b)){u=s.f
t=u==null
if(!t===b.gdd()){if(t)u=""
if(u===b.gc7(b)){u=s.r
t=u==null
if(!t===b.gda()){if(t)u=""
u=u===b.gd8()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gI:function(a){var u=this.z
return u==null?this.z=C.a.gI(this.i(0)):u},
$ikG:1,
gbt:function(){return this.a},
gdA:function(a){return this.e}}
P.jC.prototype={
$1:function(a){throw H.c(P.T("Invalid port",this.a,this.b+1))}}
P.jD.prototype={
$1:function(a){return P.et(C.a_,a,C.e,!1)}}
P.jF.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.e(P.et(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.e(P.et(C.h,b,C.e,!0))}}}
P.jE.prototype={
$2:function(a,b){var u,t
if(b==null||typeof b==="string")this.a.$2(a,b)
else for(u=J.aI(b),t=this.a;u.t();)t.$2(a,u.gC(u))}}
P.iB.prototype={
gdK:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.d(o,0)
u=q.a
o=o[0]+1
t=C.a.bk(u,"?",o)
s=u.length
if(t>=0){r=P.cC(u,t+1,s,C.k,!1)
s=t}else r=p
return q.c=new P.j7("data",p,p,p,P.cC(u,o,s,C.B,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.d(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.jN.prototype={
$1:function(a){return new Uint8Array(96)}}
P.jM.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.d(u,a)
u=u[a]
J.mF(u,0,96,b)
return u},
$S:17}
P.jO.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.a.E(b,s)^96
if(r>=t)return H.d(a,r)
a[r]=c}}}
P.jP.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.a.E(b,0),t=C.a.E(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.d(a,r)
a[r]=c}}}
P.jo.prototype={
gd9:function(){return this.c>0},
gdc:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.w()
t=this.e
if(typeof t!=="number")return H.v(t)
t=u+1<t
u=t}else u=!1
return u},
gdd:function(){var u=this.f
if(typeof u!=="number")return u.R()
return u<this.r},
gda:function(){return this.r<this.a.length},
gcD:function(){return this.b===4&&C.a.a3(this.a,"http")},
gcE:function(){return this.b===5&&C.a.a3(this.a,"https")},
gbt:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gcD())q=t.x="http"
else if(t.gcE()){t.x="https"
q="https"}else if(q===4&&C.a.a3(t.a,s)){t.x=s
q=s}else if(q===7&&C.a.a3(t.a,r)){t.x=r
q=r}else{q=C.a.q(t.a,0,q)
t.x=q}return q},
gdL:function(){var u=this.c,t=this.b+3
return u>t?C.a.q(this.a,t,u-1):""},
gc3:function(a){var u=this.c
return u>0?C.a.q(this.a,u,this.d):""},
gbn:function(a){var u,t=this
if(t.gdc()){u=t.d
if(typeof u!=="number")return u.w()
return P.eG(C.a.q(t.a,u+1,t.e),null,null)}if(t.gcD())return 80
if(t.gcE())return 443
return 0},
gdA:function(a){return C.a.q(this.a,this.e,this.f)},
gc7:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.R()
return u<t?C.a.q(this.a,u+1,t):""},
gd8:function(){var u=this.r,t=this.a
return u<t.length?C.a.a6(t,u+1):""},
gc8:function(){var u=this,t=u.f
if(typeof t!=="number")return t.R()
if(t>=u.r)return C.a0
t=P.h
return new P.dE(P.lE(u.gc7(u)),[t,t])},
dE:function(a,b){var u,t,s,r,q,p=this,o=null,n=p.gbt(),m=n==="file",l=p.c,k=l>0?C.a.q(p.a,p.b+3,l):"",j=p.gdc()?p.gbn(p):o
l=p.c
if(l>0)u=C.a.q(p.a,l,p.d)
else u=k.length!==0||j!=null||m?"":o
l=p.a
t=C.a.q(l,p.e,p.f)
if(!m)s=u!=null&&t.length!==0
else s=!0
if(s&&!C.a.a3(t,"/"))t="/"+t
r=P.kL(o,0,0,b)
s=p.r
q=s<l.length?C.a.a6(l,s+1):o
return new P.bI(n,k,u,j,t,r,q)},
gI:function(a){var u=this.y
return u==null?this.y=C.a.gI(this.a):u},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.R(b).$ikG&&this.a===b.i(0)},
i:function(a){return this.a},
$ikG:1}
P.j7.prototype={}
W.n.prototype={}
W.eJ.prototype={
gl:function(a){return a.length}}
W.eK.prototype={
i:function(a){return String(a)}}
W.eL.prototype={
i:function(a){return String(a)}}
W.bl.prototype={$ibl:1}
W.bm.prototype={$ibm:1}
W.bo.prototype={
dO:function(a,b,c){var u=a.getContext(b,P.oH(c))
return u},
$ibo:1}
W.aZ.prototype={
gl:function(a){return a.length}}
W.f4.prototype={
gl:function(a){return a.length}}
W.H.prototype={$iH:1}
W.bW.prototype={
gl:function(a){return a.length}}
W.f5.prototype={}
W.af.prototype={}
W.at.prototype={}
W.f6.prototype={
gl:function(a){return a.length}}
W.f7.prototype={
gl:function(a){return a.length}}
W.fa.prototype={
gl:function(a){return a.length}}
W.ak.prototype={$iak:1}
W.fc.prototype={
i:function(a){return String(a)}}
W.cX.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[[P.a8,P.aa]]},
$iB:1,
$aB:function(){return[[P.a8,P.aa]]},
$ax:function(){return[[P.a8,P.aa]]},
$ij:1,
$aj:function(){return[[P.a8,P.aa]]},
$io:1,
$ao:function(){return[[P.a8,P.aa]]}}
W.cY.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gaC(a))+" x "+H.e(this.gaz(a))},
p:function(a,b){var u
if(b==null)return!1
u=J.R(b)
return!!u.$ia8&&a.left===u.gbm(b)&&a.top===u.gbp(b)&&this.gaC(a)===u.gaC(b)&&this.gaz(a)===u.gaz(b)},
gI:function(a){return W.lQ(C.d.gI(a.left),C.d.gI(a.top),C.d.gI(this.gaC(a)),C.d.gI(this.gaz(a)))},
gcY:function(a){return a.bottom},
gaz:function(a){return a.height},
gbm:function(a){return a.left},
gcc:function(a){return a.right},
gbp:function(a){return a.top},
gaC:function(a){return a.width},
$ia8:1,
$aa8:function(){return[P.aa]}}
W.fd.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[P.h]},
$iB:1,
$aB:function(){return[P.h]},
$ax:function(){return[P.h]},
$ij:1,
$aj:function(){return[P.h]},
$io:1,
$ao:function(){return[P.h]}}
W.fe.prototype={
gl:function(a){return a.length}}
W.j5.prototype={
gl:function(a){return this.b.length},
h:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
m:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
this.a.replaceChild(c,u[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gS:function(a){var u=this.hY(this)
return new J.a4(u,u.length)},
$aq:function(){return[W.N]},
$ax:function(){return[W.N]},
$aj:function(){return[W.N]},
$ao:function(){return[W.N]}}
W.N.prototype={
gh2:function(a){return new W.j8(a)},
gbQ:function(a){return new W.j5(a,a.children)},
gcZ:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.R()
if(s<0)s=-s*0
if(typeof r!=="number")return r.R()
if(r<0)r=-r*0
return new P.a8(u,t,s,r,[P.aa])},
i:function(a){return a.localName},
ad:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.le
if(u==null){u=H.b([],[W.aQ])
t=new W.dh(u)
u.push(W.lP(null))
u.push(W.lR())
$.le=t
d=t}else d=u
u=$.ld
if(u==null){u=new W.eu(d)
$.ld=u
c=u}else{u.a=d
c=u}}if($.aL==null){u=document
t=u.implementation.createHTMLDocument("")
$.aL=t
$.kr=t.createRange()
s=$.aL.createElement("base")
s.href=u.baseURI
$.aL.head.appendChild(s)}u=$.aL
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.aL
if(!!this.$ibm)r=u.body
else{r=u.createElement(a.tagName)
$.aL.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.b.H(C.Y,a.tagName)){$.kr.selectNodeContents(r)
q=$.kr.createContextualFragment(b)}else{r.innerHTML=b
q=$.aL.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.aL.body
if(r==null?u!=null:r!==u)J.l4(r)
c.ce(q)
document.adoptNode(q)
return q},
hb:function(a,b,c){return this.ad(a,b,c,null)},
dQ:function(a,b){a.textContent=null
a.appendChild(this.ad(a,b,null,null))},
$iN:1,
gdG:function(a){return a.tagName}}
W.fi.prototype={
$1:function(a){return!!J.R(a).$iN}}
W.i.prototype={$ii:1}
W.f.prototype={
fT:function(a,b,c,d){if(c!=null)this.ef(a,b,c,!1)},
ef:function(a,b,c,d){return a.addEventListener(b,H.bN(c,1),!1)}}
W.al.prototype={$ial:1}
W.bZ.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.al]},
$iB:1,
$aB:function(){return[W.al]},
$ax:function(){return[W.al]},
$ij:1,
$aj:function(){return[W.al]},
$io:1,
$ao:function(){return[W.al]},
$ibZ:1}
W.fp.prototype={
gl:function(a){return a.length}}
W.ft.prototype={
gl:function(a){return a.length}}
W.au.prototype={$iau:1}
W.fz.prototype={
gl:function(a){return a.length}}
W.c0.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.D]},
$iB:1,
$aB:function(){return[W.D]},
$ax:function(){return[W.D]},
$ij:1,
$aj:function(){return[W.D]},
$io:1,
$ao:function(){return[W.D]}}
W.c1.prototype={$ic1:1}
W.bu.prototype={$ibu:1}
W.fT.prototype={
i:function(a){return String(a)}}
W.he.prototype={
gl:function(a){return a.length}}
W.c7.prototype={$ic7:1}
W.hf.prototype={
h:function(a,b){return P.aU(a.get(b))},
F:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aU(u.value[1]))}},
ga_:function(a){var u=H.b([],[P.h])
this.F(a,new W.hg(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.y("Not supported"))},
$aa0:function(){return[P.h,null]},
$iO:1,
$aO:function(){return[P.h,null]}}
W.hg.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hh.prototype={
h:function(a,b){return P.aU(a.get(b))},
F:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aU(u.value[1]))}},
ga_:function(a){var u=H.b([],[P.h])
this.F(a,new W.hi(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.y("Not supported"))},
$aa0:function(){return[P.h,null]},
$iO:1,
$aO:function(){return[P.h,null]}}
W.hi.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aw.prototype={$iaw:1}
W.hj.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aw]},
$iB:1,
$aB:function(){return[W.aw]},
$ax:function(){return[W.aw]},
$ij:1,
$aj:function(){return[W.aw]},
$io:1,
$ao:function(){return[W.aw]}}
W.ax.prototype={$iax:1}
W.a2.prototype={
gaD:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.lv("No elements"))
if(t>1)throw H.c(P.lv("More than one element"))
return u.firstChild},
ac:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
m:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.d(t,b)
u.replaceChild(c,t[b])},
gS:function(a){var u=this.a.childNodes
return new W.d0(u,u.length)},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$aq:function(){return[W.D]},
$ax:function(){return[W.D]},
$aj:function(){return[W.D]},
$ao:function(){return[W.D]}}
W.D.prototype={
hP:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
hT:function(a,b){var u,t
try{u=a.parentNode
J.mC(u,b,a)}catch(t){H.ad(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.dU(a):u},
fA:function(a,b,c){return a.replaceChild(b,c)},
$iD:1}
W.dg.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.D]},
$iB:1,
$aB:function(){return[W.D]},
$ax:function(){return[W.D]},
$ij:1,
$aj:function(){return[W.D]},
$io:1,
$ao:function(){return[W.D]}}
W.ay.prototype={$iay:1,
gl:function(a){return a.length}}
W.hz.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.ay]},
$iB:1,
$aB:function(){return[W.ay]},
$ax:function(){return[W.ay]},
$ij:1,
$aj:function(){return[W.ay]},
$io:1,
$ao:function(){return[W.ay]}}
W.hK.prototype={
h:function(a,b){return P.aU(a.get(b))},
F:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aU(u.value[1]))}},
ga_:function(a){var u=H.b([],[P.h])
this.F(a,new W.hL(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.y("Not supported"))},
$aa0:function(){return[P.h,null]},
$iO:1,
$aO:function(){return[P.h,null]}}
W.hL.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hN.prototype={
gl:function(a){return a.length}}
W.az.prototype={$iaz:1}
W.hY.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.az]},
$iB:1,
$aB:function(){return[W.az]},
$ax:function(){return[W.az]},
$ij:1,
$aj:function(){return[W.az]},
$io:1,
$ao:function(){return[W.az]}}
W.aA.prototype={$iaA:1}
W.hZ.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aA]},
$iB:1,
$aB:function(){return[W.aA]},
$ax:function(){return[W.aA]},
$ij:1,
$aj:function(){return[W.aA]},
$io:1,
$ao:function(){return[W.aA]}}
W.aB.prototype={$iaB:1,
gl:function(a){return a.length}}
W.i1.prototype={
h:function(a,b){return a.getItem(b)},
m:function(a,b,c){a.setItem(b,c)},
F:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga_:function(a){var u=H.b([],[P.h])
this.F(a,new W.i2(u))
return u},
gl:function(a){return a.length},
$aa0:function(){return[P.h,P.h]},
$iO:1,
$aO:function(){return[P.h,P.h]}}
W.i2.prototype={
$2:function(a,b){return this.a.push(a)}}
W.an.prototype={$ian:1}
W.du.prototype={
ad:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bu(a,b,c,d)
u=W.mT("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.a2(t).ac(0,new W.a2(u))
return t}}
W.i5.prototype={
ad:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bu(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.E.ad(u.createElement("table"),b,c,d)
u.toString
u=new W.a2(u)
s=u.gaD(u)
s.toString
u=new W.a2(s)
r=u.gaD(u)
t.toString
r.toString
new W.a2(t).ac(0,new W.a2(r))
return t}}
W.i6.prototype={
ad:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bu(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.E.ad(u.createElement("table"),b,c,d)
u.toString
u=new W.a2(u)
s=u.gaD(u)
t.toString
s.toString
new W.a2(t).ac(0,new W.a2(s))
return t}}
W.ch.prototype={$ich:1}
W.aC.prototype={$iaC:1}
W.ao.prototype={$iao:1}
W.i9.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.ao]},
$iB:1,
$aB:function(){return[W.ao]},
$ax:function(){return[W.ao]},
$ij:1,
$aj:function(){return[W.ao]},
$io:1,
$ao:function(){return[W.ao]}}
W.ia.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aC]},
$iB:1,
$aB:function(){return[W.aC]},
$ax:function(){return[W.aC]},
$ij:1,
$aj:function(){return[W.aC]},
$io:1,
$ao:function(){return[W.aC]}}
W.id.prototype={
gl:function(a){return a.length}}
W.aD.prototype={$iaD:1}
W.bB.prototype={$ibB:1}
W.ii.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aD]},
$iB:1,
$aB:function(){return[W.aD]},
$ax:function(){return[W.aD]},
$ij:1,
$aj:function(){return[W.aD]},
$io:1,
$ao:function(){return[W.aD]}}
W.ij.prototype={
gl:function(a){return a.length}}
W.bc.prototype={}
W.iG.prototype={
i:function(a){return String(a)}}
W.iY.prototype={
gl:function(a){return a.length}}
W.bg.prototype={
ghe:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.y("deltaY is not supported"))},
ghd:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.y("deltaX is not supported"))},
$ibg:1}
W.cr.prototype={
fB:function(a,b){return a.requestAnimationFrame(H.bN(b,1))},
er:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.j6.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.H]},
$iB:1,
$aB:function(){return[W.H]},
$ax:function(){return[W.H]},
$ij:1,
$aj:function(){return[W.H]},
$io:1,
$ao:function(){return[W.H]}}
W.dM.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
p:function(a,b){var u
if(b==null)return!1
u=J.R(b)
return!!u.$ia8&&a.left===u.gbm(b)&&a.top===u.gbp(b)&&a.width===u.gaC(b)&&a.height===u.gaz(b)},
gI:function(a){return W.lQ(C.d.gI(a.left),C.d.gI(a.top),C.d.gI(a.width),C.d.gI(a.height))},
gaz:function(a){return a.height},
gaC:function(a){return a.width}}
W.jb.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.au]},
$iB:1,
$aB:function(){return[W.au]},
$ax:function(){return[W.au]},
$ij:1,
$aj:function(){return[W.au]},
$io:1,
$ao:function(){return[W.au]}}
W.e4.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.D]},
$iB:1,
$aB:function(){return[W.D]},
$ax:function(){return[W.D]},
$ij:1,
$aj:function(){return[W.D]},
$io:1,
$ao:function(){return[W.D]}}
W.jp.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aB]},
$iB:1,
$aB:function(){return[W.aB]},
$ax:function(){return[W.aB]},
$ij:1,
$aj:function(){return[W.aB]},
$io:1,
$ao:function(){return[W.aB]}}
W.ju.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.an]},
$iB:1,
$aB:function(){return[W.an]},
$ax:function(){return[W.an]},
$ij:1,
$aj:function(){return[W.an]},
$io:1,
$ao:function(){return[W.an]}}
W.j4.prototype={
F:function(a,b){var u,t,s,r,q
for(u=this.ga_(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.l)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga_:function(a){var u,t,s,r=this.a.attributes,q=H.b([],[P.h])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.d(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q},
$aa0:function(){return[P.h,P.h]},
$aO:function(){return[P.h,P.h]}}
W.j8.prototype={
h:function(a,b){return this.a.getAttribute(b)},
m:function(a,b,c){this.a.setAttribute(b,c)},
gl:function(a){return this.ga_(this).length}}
W.j9.prototype={}
W.ja.prototype={
$1:function(a){return this.a.$1(a)}}
W.cs.prototype={
e3:function(a){var u
if($.ct.ghu($.ct)){for(u=0;u<262;++u)$.ct.m(0,C.X[u],W.oQ())
for(u=0;u<12;++u)$.ct.m(0,C.p[u],W.oR())}},
aJ:function(a){return $.my().H(0,W.bX(a))},
ao:function(a,b,c){var u=$.ct.h(0,H.e(W.bX(a))+"::"+b)
if(u==null)u=$.ct.h(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$iaQ:1}
W.K.prototype={
gS:function(a){return new W.d0(a,this.gl(a))}}
W.dh.prototype={
aJ:function(a){return C.b.cV(this.a,new W.hr(a))},
ao:function(a,b,c){return C.b.cV(this.a,new W.hq(a,b,c))},
$iaQ:1}
W.hr.prototype={
$1:function(a){return a.aJ(this.a)}}
W.hq.prototype={
$1:function(a){return a.ao(this.a,this.b,this.c)}}
W.ec.prototype={
e8:function(a,b,c,d){var u,t,s
this.a.ac(0,c)
u=b.bs(0,new W.jm())
t=b.bs(0,new W.jn())
this.b.ac(0,u)
s=this.c
s.ac(0,C.y)
s.ac(0,t)},
aJ:function(a){return this.a.H(0,W.bX(a))},
ao:function(a,b,c){var u=this,t=W.bX(a),s=u.c
if(s.H(0,H.e(t)+"::"+b))return u.d.fX(c)
else if(s.H(0,"*::"+b))return u.d.fX(c)
else{s=u.b
if(s.H(0,H.e(t)+"::"+b))return!0
else if(s.H(0,"*::"+b))return!0
else if(s.H(0,H.e(t)+"::*"))return!0
else if(s.H(0,"*::*"))return!0}return!1},
$iaQ:1}
W.jm.prototype={
$1:function(a){return!C.b.H(C.p,a)}}
W.jn.prototype={
$1:function(a){return C.b.H(C.p,a)}}
W.jx.prototype={
ao:function(a,b,c){if(this.dX(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.H(0,b)
return!1}}
W.jy.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)}}
W.jv.prototype={
aJ:function(a){var u=J.R(a)
if(!!u.$ice)return!1
u=!!u.$ik
if(u&&W.bX(a)==="foreignObject")return!1
if(u)return!0
return!1},
ao:function(a,b,c){if(b==="is"||C.a.a3(b,"on"))return!1
return this.aJ(a)},
$iaQ:1}
W.d0.prototype={
t:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.bS(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gC:function(a){return this.d}}
W.aQ.prototype={}
W.jk.prototype={}
W.eu.prototype={
ce:function(a){new W.jI(this).$2(a,null)},
aV:function(a,b){if(b==null)J.l4(a)
else b.removeChild(a)},
fF:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.mG(a)
n=o.a.getAttribute("is")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=u?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ad(r)}t="element unprintable"
try{t=J.a3(a)}catch(r){H.ad(r)}try{s=W.bX(a)
this.fE(a,b,p,t,s,o,n)}catch(r){if(H.ad(r) instanceof P.aj)throw r
else{this.aV(a,b)
window
q="Removing corrupted element "+H.e(t)
if(typeof console!="undefined")window.console.warn(q)}}},
fE:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=this
if(c){p.aV(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!p.a.aJ(a)){p.aV(a,b)
window
u="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!p.a.ao(a,"is",g)){p.aV(a,b)
window
u="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga_(f)
t=H.b(u.slice(0),[H.aH(u,0)])
for(s=f.ga_(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.d(t,s)
r=t[s]
if(!p.a.ao(a,J.mJ(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.e(e)+" "+r+'="'+H.e(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.R(a).$ich)p.ce(a.content)}}
W.jI.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.fF(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aV(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ad(s)
r=u
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=t}}}
W.dL.prototype={}
W.dN.prototype={}
W.dO.prototype={}
W.dP.prototype={}
W.dQ.prototype={}
W.dT.prototype={}
W.dU.prototype={}
W.dV.prototype={}
W.dW.prototype={}
W.e0.prototype={}
W.e1.prototype={}
W.e2.prototype={}
W.e3.prototype={}
W.e5.prototype={}
W.e6.prototype={}
W.e9.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.cy.prototype={}
W.cz.prototype={}
W.ed.prototype={}
W.ee.prototype={}
W.ei.prototype={}
W.el.prototype={}
W.em.prototype={}
W.cA.prototype={}
W.cB.prototype={}
W.eo.prototype={}
W.ep.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.ey.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eE.prototype={}
P.jq.prototype={
c1:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
t.push(a)
this.b.push(null)
return s},
br:function(a){var u,t,s,r,q,p=this,o={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.R(a)
if(!!u.$iab)return new Date(a.a)
if(!!u.$ino)throw H.c(P.ix("structured clone of RegExp"))
if(!!u.$ial)return a
if(!!u.$ibl)return a
if(!!u.$ibZ)return a
if(!!u.$ic1)return a
if(!!u.$ic8||!!u.$ib8||!!u.$ic7)return a
if(!!u.$iO){t=p.c1(a)
s=p.b
r=s.length
if(t>=r)return H.d(s,t)
q=o.a=s[t]
if(q!=null)return q
q={}
o.a=q
if(t>=r)return H.d(s,t)
s[t]=q
u.F(a,new P.js(o,p))
return o.a}if(!!u.$io){t=p.c1(a)
o=p.b
if(t>=o.length)return H.d(o,t)
q=o[t]
if(q!=null)return q
return p.ha(a,t)}if(!!u.$in0){t=p.c1(a)
u=p.b
s=u.length
if(t>=s)return H.d(u,t)
q=o.b=u[t]
if(q!=null)return q
q={}
o.b=q
if(t>=s)return H.d(u,t)
u[t]=q
p.hq(a,new P.jt(o,p))
return o.b}throw H.c(P.ix("structured clone of other type"))},
ha:function(a,b){var u,t=J.aq(a),s=t.gl(a),r=new Array(s),q=this.b
if(b>=q.length)return H.d(q,b)
q[b]=r
if(typeof s!=="number")return H.v(s)
u=0
for(;u<s;++u){q=this.br(t.h(a,u))
if(u>=r.length)return H.d(r,u)
r[u]=q}return r}}
P.js.prototype={
$2:function(a,b){this.a.a[a]=this.b.br(b)},
$S:3}
P.jt.prototype={
$2:function(a,b){this.a.b[a]=this.b.br(b)},
$S:3}
P.jT.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.jr.prototype={
hq:function(a,b){var u,t,s,r
for(u=Object.keys(a),t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,a[r])}}}
P.fq.prototype={
gbd:function(){var u=this.b,t=H.kT(u,"x",0)
return new H.c5(new H.cq(u,new P.fr(),[t]),new P.fs(),[t,W.N])},
m:function(a,b,c){var u=this.gbd()
J.mH(u.b.$1(J.eI(u.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.ae(this.gbd().a)},
h:function(a,b){var u=this.gbd()
return u.b.$1(J.eI(u.a,b))},
gS:function(a){var u=P.kB(this.gbd(),!1,W.N)
return new J.a4(u,u.length)},
$aq:function(){return[W.N]},
$ax:function(){return[W.N]},
$aj:function(){return[W.N]},
$ao:function(){return[W.N]}}
P.fr.prototype={
$1:function(a){return!!J.R(a).$iN}}
P.fs.prototype={
$1:function(a){return H.r(a,"$iN")}}
P.jg.prototype={
gcc:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.v(t)
return u+t},
gcY:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.v(t)
return u+t},
i:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
p:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.R(b)
if(!!u.$ia8){t=q.a
if(t==u.gbm(b)){s=q.b
if(s==u.gbp(b)){r=q.c
if(typeof t!=="number")return t.w()
if(typeof r!=="number")return H.v(r)
if(t+r===u.gcc(b)){t=q.d
if(typeof s!=="number")return s.w()
if(typeof t!=="number")return H.v(t)
u=s+t===u.gcY(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gI:function(a){var u=this,t=u.a,s=J.cM(t),r=u.b,q=J.cM(r),p=u.c
if(typeof t!=="number")return t.w()
if(typeof p!=="number")return H.v(p)
p=C.c.gI(t+p)
t=u.d
if(typeof r!=="number")return r.w()
if(typeof t!=="number")return H.v(t)
t=C.c.gI(r+t)
return P.nP(P.jd(P.jd(P.jd(P.jd(0,s),q),p),t))}}
P.a8.prototype={
gbm:function(a){return this.a},
gbp:function(a){return this.b},
gaC:function(a){return this.c},
gaz:function(a){return this.d}}
P.aN.prototype={$iaN:1}
P.fM.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.aN]},
$ax:function(){return[P.aN]},
$ij:1,
$aj:function(){return[P.aN]},
$io:1,
$ao:function(){return[P.aN]}}
P.aR.prototype={$iaR:1}
P.hu.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.aR]},
$ax:function(){return[P.aR]},
$ij:1,
$aj:function(){return[P.aR]},
$io:1,
$ao:function(){return[P.aR]}}
P.hC.prototype={
gl:function(a){return a.length}}
P.ce.prototype={$ice:1}
P.i4.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.h]},
$ax:function(){return[P.h]},
$ij:1,
$aj:function(){return[P.h]},
$io:1,
$ao:function(){return[P.h]}}
P.k.prototype={
gbQ:function(a){return new P.fq(a,new W.a2(a))},
ad:function(a,b,c,d){var u,t,s,r,q,p=H.b([],[W.aQ])
p.push(W.lP(null))
p.push(W.lR())
p.push(new W.jv())
c=new W.eu(new W.dh(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.r).hb(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.a2(s)
q=p.gaD(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ik:1}
P.aT.prototype={$iaT:1}
P.ik.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.aT]},
$ax:function(){return[P.aT]},
$ij:1,
$aj:function(){return[P.aT]},
$io:1,
$ao:function(){return[P.aT]}}
P.dX.prototype={}
P.dY.prototype={}
P.e7.prototype={}
P.e8.prototype={}
P.ej.prototype={}
P.ek.prototype={}
P.eq.prototype={}
P.er.prototype={}
P.bC.prototype={$iq:1,
$aq:function(){return[P.w]},
$ij:1,
$aj:function(){return[P.w]},
$io:1,
$ao:function(){return[P.w]}}
P.eO.prototype={
gl:function(a){return a.length}}
P.eP.prototype={
h:function(a,b){return P.aU(a.get(b))},
F:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aU(u.value[1]))}},
ga_:function(a){var u=H.b([],[P.h])
this.F(a,new P.eQ(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.y("Not supported"))},
$aa0:function(){return[P.h,null]},
$iO:1,
$aO:function(){return[P.h,null]}}
P.eQ.prototype={
$2:function(a,b){return this.a.push(a)}}
P.eR.prototype={
gl:function(a){return a.length}}
P.bk.prototype={}
P.hv.prototype={
gl:function(a){return a.length}}
P.dK.prototype={}
P.i_.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return P.aU(a.item(b))},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[[P.O,,,]]},
$ax:function(){return[[P.O,,,]]},
$ij:1,
$aj:function(){return[[P.O,,,]]},
$io:1,
$ao:function(){return[[P.O,,,]]}}
P.ef.prototype={}
P.eg.prototype={}
K.aJ.prototype={
aA:function(a,b){return!0},
i:function(a){return"all"}}
K.d1.prototype={
aA:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)if(u[s].aA(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.l)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s}}
K.b6.prototype={}
K.a6.prototype={
aA:function(a,b){return!this.dT(0,b)},
i:function(a){return"!["+this.cj(0)+"]"}}
K.hF.prototype={
aA:function(a,b){if(typeof b!=="number")return H.v(b)
return this.a<=b&&this.b>=b},
i:function(a){var u=H.by(this.a),t=H.by(this.b)
return u+".."+t}}
K.hO.prototype={
e0:function(a){var u,t,s,r
if(a.a.length<=0)throw H.c(P.u("May not create a Set with zero characters."))
u=P.w
t=new H.I([u,P.aG])
for(s=new H.b5(a,a.gl(a));s.t();)t.m(0,s.d,!0)
r=P.kB(t.ga_(t),!0,u)
C.b.dR(r)
this.a=r},
aA:function(a,b){return C.b.H(this.a,b)},
i:function(a){return P.cg(this.a,0,null)}}
L.ds.prototype={
j:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new L.dB(this.a.k(0,b))
r.a=H.b([],[K.b6])
r.c=!1
this.c.push(r)
return r},
hl:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
if(r.aA(0,a))return r}return},
i:function(a){return this.b},
cO:function(){var u,t,s,r,q,p=this,o="("+p.b+")",n=p.d
if(n!=null){n=n.b
o+=" => ["+n+"]"
u=p.a
if(u.c.H(0,n))o+=" (consume)"
for(n=p.d.c,n=n.ga_(n),n=n.gS(n);n.t();){t=n.gC(n)
o+="\n"
s=p.d.c.h(0,t)
t=o+("  -- "+H.e(t)+" => ["+H.e(s)+"]")
o=u.c.H(0,s)?t+" (consume)":t}}for(n=p.c,u=n.length,r=0;r<n.length;n.length===u||(0,H.l)(n),++r){q=n[r]
o=o+"\n"+("  -- "+q.i(0))}return o.charCodeAt(0)==0?o:o}}
L.dy.prototype={
i:function(a){var u=H.kY(this.b,"\n","\\n"),t=H.kY(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
L.dz.prototype={
aB:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.l)(c),++t){s=c[t]
this.c.m(0,s,b)}},
i:function(a){return this.b}}
L.ie.prototype={
k:function(a,b){var u=this.a.h(0,b)
if(u==null){u=new L.ds(this,b)
u.c=H.b([],[L.dB])
this.a.m(0,b,u)}return u},
P:function(a){var u,t=this.b.h(0,a)
if(t==null){t=new L.dz(a)
u=P.h
t.c=new H.I([u,u])
this.b.m(0,a,t)}return t},
cd:function(a){return this.i0(a)},
i0:function(a){var u=this
return P.ob(function(){var t=a
var s=0,r=1,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
return function $async$cd(b,a0){if(b===1){q=a0
s=r}while(true)switch(s){case 0:g=u.d
f=[P.w]
e=H.b([],f)
d=H.b([],f)
c=H.b([],f)
p=null,o=0,n=0,m=0
case 2:if(!!0){s=3
break}if(c.length!==0)l=C.b.c9(c,0)
else{if(!t.t()){s=3
break}l=t.d}d.push(l);++o
k=g.hl(l)
s=k==null?4:6
break
case 4:if(p==null){j=P.cg(d,0,null)
throw H.c(P.u("Untokenizable string [state: "+g.b+", index "+o+']: "'+j+'"'))}if(!!d.fixed$length)H.p(P.y("removeRange"))
P.aS(0,m,d.length)
d.splice(0,m-0)
C.b.ac(c,d)
d=H.b([],f)
e=H.b([],f)
g=u.d
s=!u.c.H(0,p.a)?7:8
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
if(g.d!=null){j=P.cg(e,0,null)
i=g.d
h=i.c.h(0,j)
p=new L.dy(h==null?i.b:h,j,o)
m=d.length
n=o}case 5:s=2
break
case 3:s=p!=null&&!u.c.H(0,p.a)?10:11
break
case 10:s=12
return p
case 12:case 11:return P.nN()
case 1:return P.nO(q)}}},L.dy)},
i:function(a){var u,t=new P.Q(""),s=this.d
if(s!=null)t.a=s.cO()+"\n"
for(s=this.a,s=s.gi1(s),s=s.gS(s);s.t();){u=s.gC(s)
if(u!=this.d)t.a+=u.cO()+"\n"}s=t.a
return s.charCodeAt(0)==0?s:s}}
L.dB.prototype={
i:function(a){return this.b.b+": "+this.cj(0)}}
O.b_.prototype={
bv:function(a){this.a=H.b([],[a])
this.c=this.b=null},
cf:function(a,b,c){this.b=b
this.c=a},
b9:function(a,b){return this.cf(a,null,b)},
fh:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
eF:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gS:function(a){var u=this.a
return new J.a4(u,u.length)},
J:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
n:function(a,b){var u,t,s=this,r=[H.kT(s,"b_",0)]
if(s.fh(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.eF(t,H.b([b],r))}},
$ij:1}
O.c6.prototype={
gl:function(a){return this.a.length},
gB:function(){var u=this.b
return u==null?this.b=D.S():u},
aE:function(){var u=this.b
if(u!=null)u.K(null)},
ga0:function(a){var u=this.a
if(u.length>0)return C.b.gar(u)
else return V.dc()},
dC:function(a){var u=this.a
if(a==null)u.push(V.dc())
else u.push(a)
this.aE()},
c6:function(){var u=this.a
if(u.length>0){u.pop()
this.aE()}}}
E.eV.prototype={}
E.aM.prototype={
cr:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.a4(u,u.length);u.t();){t=u.d
if(t.f==null)t.cr()}},
saa:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gB().L(0,s.gdt())
u=s.c
if(u!=null)u.gB().n(0,s.gdt())
t=new D.C("shape",r,s.c)
t.b=!0
s.ah(t)}},
sb6:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gB().L(0,s.gdv())
u=s.f
s.f=a
if(a!=null)a.gB().n(0,s.gdv())
s.cr()
t=new D.C("technique",u,s.f)
t.b=!0
s.ah(t)}},
saM:function(a){var u,t,s=this
if(!J.E(s.r,a)){u=s.r
if(u!=null)u.gB().L(0,s.gdr())
if(a!=null)a.gB().n(0,s.gdr())
s.r=a
t=new D.C("mover",u,a)
t.b=!0
s.ah(t)}},
at:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aR(0,b,s):null
if(!J.E(q,s.x)){u=s.x
s.x=q
t=new D.C("matrix",u,q)
t.b=!0
s.ah(t)}r=s.f
if(r!=null)r.at(0,b)
for(r=s.y.a,r=new J.a4(r,r.length);r.t();)r.d.at(0,b)},
aN:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)s.a.push(s.ga0(s))
else s.a.push(r.A(0,s.ga0(s)))
s.aE()
a.dD(t.f)
s=a.dy
u=(s&&C.b).gar(s)
if(u!=null&&t.d!=null)u.hS(a,t)
for(s=t.y.a,s=new J.a4(s,s.length);s.t();)s.d.aN(a)
a.dB()
a.dx.c6()},
ah:function(a){var u=this.z
if(u!=null)u.K(a)},
Y:function(){return this.ah(null)},
du:function(a){this.e=null
this.ah(a)},
hF:function(){return this.du(null)},
dw:function(a){this.ah(a)},
hG:function(){return this.dw(null)},
ds:function(a){this.ah(a)},
hE:function(){return this.ds(null)},
dq:function(a){this.ah(a)},
hB:function(){return this.dq(null)},
hA:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gdn(),s=[{func:1,ret:-1,args:[D.Y]}],r=0;r<b.length;b.length===u||(0,H.l)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bq()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.Y()},
hD:function(a,b){var u,t
for(u=b.gS(b),t=this.gdn();u.t();)u.gC(u).gB().L(0,t)
this.Y()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.bn.prototype={
i:function(a){return this.b}}
E.bw.prototype={
i:function(a){return this.b}}
E.dR.prototype={}
E.hG.prototype={
e_:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.ab(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.c6()
t=[V.aO]
u.a=H.b([],t)
u.gB().n(0,new E.hH(s))
s.cy=u
u=new O.c6()
u.a=H.b([],t)
u.gB().n(0,new E.hI(s))
s.db=u
u=new O.c6()
u.a=H.b([],t)
u.gB().n(0,new E.hJ(s))
s.dx=u
u=H.b([],[O.dv])
s.dy=u
u.push(null)
s.fr=new H.I([P.h,A.dn])},
ghO:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga0(s)
u=t.db
u=t.z=s.A(0,u.ga0(u))
s=u}return s},
dD:function(a){var u=this.dy
u.push(a==null?(u&&C.b).gar(u):a)},
dB:function(){var u=this.dy
if(u.length>1)u.pop()}}
E.hH.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.hI.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.hJ.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.dw.prototype={
co:function(a){this.dF()},
cn:function(){return this.co(null)},
ghr:function(){var u,t=this,s=Date.now(),r=C.c.a4(P.lc(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.ab(s,!1)
return u/r},
cI:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.A()
if(typeof r!=="number")return H.v(r)
u=C.d.d7(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.A()
t=C.d.d7(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.ly(C.n,s.ghU())}},
dF:function(){if(!this.cx){this.cx=!0
var u=window
C.G.er(u)
C.G.fB(u,W.m1(new E.ic(this),P.aa))}},
hR:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.cI()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ab(r,!1)
s.y=P.lc(r-s.r.a).a*0.000001
r=s.cy
C.b.sl(r.a,0)
r.aE()
r=s.db
C.b.sl(r.a,0)
r.aE()
r=s.dx
C.b.sl(r.a,0)
r.aE()
r=s.dy;(r&&C.b).sl(r,0)
s.dy.push(null)
o.aN(p.e)}s=p.Q
if(s!=null)s.K(null)}catch(q){u=H.ad(q)
t=H.kU(q)
P.kX("Error: "+H.e(u))
P.kX("Stack: "+H.e(t))
throw H.c(u)}}}
E.ic.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.hR()}}}
Z.dI.prototype={}
Z.cP.prototype={
bf:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ad(s)
t=P.u('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.e(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.iZ.prototype={}
Z.cQ.prototype={
aL:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bf:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].bf(a)},
dJ:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aN:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.d(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.h],p=H.b([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)p.push(u[s].i(0))
r=H.b([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a3(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.j(p,", ")+"\nAttrs:   "+C.b.j(r,", ")}}
Z.br.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.cd(this.c))+"'")+"]"}}
Z.bf.prototype={
gci:function(a){var u=this.a,t=(u&$.aY().a)!==0?3:0
if((u&$.aX().a)!==0)t+=3
if((u&$.aW().a)!==0)t+=3
if((u&$.bi().a)!==0)t+=2
if((u&$.bj().a)!==0)t+=3
if((u&$.cJ().a)!==0)t+=3
if((u&$.cK().a)!==0)t+=4
if((u&$.bR().a)!==0)++t
return(u&$.aV().a)!==0?t+4:t},
fY:function(a){var u,t=$.aY(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aX()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aW()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bi()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bj()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cJ()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cK()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bR()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aV()
if((s&t.a)!==0)if(u===a)return t
return $.mw()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bf))return!1
return this.a===b.a},
i:function(a){var u=H.b([],[P.h]),t=this.a
if((t&$.aY().a)!==0)u.push("Pos")
if((t&$.aX().a)!==0)u.push("Norm")
if((t&$.aW().a)!==0)u.push("Binm")
if((t&$.bi().a)!==0)u.push("Txt2D")
if((t&$.bj().a)!==0)u.push("TxtCube")
if((t&$.cJ().a)!==0)u.push("Clr3")
if((t&$.cK().a)!==0)u.push("Clr4")
if((t&$.bR().a)!==0)u.push("Weight")
if((t&$.aV().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.b.j(u,"|")}}
D.eY.prototype={}
D.bq.prototype={
n:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.Y]}]):u).push(b)},
L:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.b.H(s,b)
if(s===!0){s=t.a
u=(s&&C.b).L(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.b.H(s,b)
if(s===!0){s=t.b
u=(s&&C.b).L(s,b)||u}return u},
K:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.b.F(P.kB(u,!0,{func:1,ret:-1,args:[D.Y]}),new D.fm(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.Y]}])
C.b.F(u,new D.fn(q))}return!0},
ai:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.K(u)}}}}
D.fm.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.fn.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.Y.prototype={}
D.bs.prototype={}
D.bt.prototype={}
D.C.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cR.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cR))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.d5.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d5))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.fL.prototype={
hL:function(a){this.d.n(0,a.a)
return!1},
hH:function(a){this.d.L(0,a.a)
return!1}}
X.d8.prototype={}
X.fU.prototype={
aT:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.A()
u=b.b
t=q.ch
if(typeof u!=="number")return u.A()
s=new V.a7(o.a+n*m,o.b+u*t)
t=q.a.gbg()
r=new X.b7(a,V.ba(),q.x,t,s)
r.b=!0
q.z=new P.ab(p,!1)
q.x=s
return r},
c5:function(a,b){this.r=a.a
return!1},
b5:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.dP()
if(typeof u!=="number")return u.a8()
this.r=(u&~t)>>>0
return!1},
b4:function(a,b){var u=this.d
if(u==null)return!1
u.K(this.aT(a,b))
return!0},
hM:function(a){return!1},
f6:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.d8(c,r.a.gbg(),b)
s.b=!0
t.K(s)
r.y=new P.ab(u,!1)
r.x=V.ba()}}
X.bv.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.bv))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.b7.prototype={}
X.hk.prototype={
bB:function(a,b,c){var u=this,t=new P.ab(Date.now(),!1),s=u.a.gbg(),r=new X.b7(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
c5:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.K(this.bB(a,b,!0))
return!0},
b5:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.dP()
if(typeof t!=="number")return t.a8()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.K(u.bB(a,b,!0))
return!0},
b4:function(a,b){var u=this.d
if(u==null)return!1
u.K(this.bB(a,b,!1))
return!0},
hN:function(a,b){return!1}}
X.hB.prototype={}
X.dA.prototype={}
X.ih.prototype={
aT:function(a,b){var u=this,t=new P.ab(Date.now(),!1),s=a.length>0?a[0]:V.ba(),r=u.a.gbg(),q=new X.dA(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
hK:function(a){var u=this.b
if(u==null)return!1
u.K(this.aT(a,!0))
return!0},
hI:function(a){var u=this.c
if(u==null)return!1
u.K(this.aT(a,!0))
return!0},
hJ:function(a){var u=this.d
if(u==null)return!1
u.K(this.aT(a,!1))
return!0}}
X.dF.prototype={
gbg:function(){var u=this.a,t=C.m.gcZ(u).c
t.toString
u=C.m.gcZ(u).d
u.toString
return V.lt(0,0,t,u)},
cw:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.d5(u,new X.bv(t,a.altKey,a.shiftKey))},
aH:function(a){a.shiftKey},
bJ:function(a){a.shiftKey},
ax:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.M()
u=t.top
if(typeof r!=="number")return r.M()
return new V.a7(s-q,r-u)},
aU:function(a){return new V.U(a.movementX,a.movementY)},
bF:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.a7])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
q=C.d.aj(r.pageX)
C.d.aj(r.pageY)
p=o.left
C.d.aj(r.pageX)
n.push(new V.a7(q-p,C.d.aj(r.pageY)-o.top))}return n},
av:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cR(u,new X.bv(t,a.altKey,a.shiftKey))},
bC:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.M()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.M()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
f0:function(a){this.f=!0},
eN:function(a){this.f=!1},
eV:function(a){if(this.f&&this.bC(a))a.preventDefault()},
f4:function(a){var u
if(!this.f)return
u=this.cw(a)
this.b.hL(u)},
f2:function(a){var u
if(!this.f)return
u=this.cw(a)
this.b.hH(u)},
f8:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aH(a)
if(r.x){u=r.av(a)
t=r.aU(a)
if(r.d.c5(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.av(a)
s=r.ax(a)
if(r.c.c5(u,s))a.preventDefault()},
fc:function(a){var u,t,s,r=this
r.aH(a)
u=r.av(a)
if(r.x){t=r.aU(a)
if(r.d.b5(u,t))a.preventDefault()
return}if(r.r)return
s=r.ax(a)
if(r.c.b5(u,s))a.preventDefault()},
eZ:function(a){var u,t,s,r=this
if(!r.bC(a)){r.aH(a)
u=r.av(a)
if(r.x){t=r.aU(a)
if(r.d.b5(u,t))a.preventDefault()
return}if(r.r)return
s=r.ax(a)
if(r.c.b5(u,s))a.preventDefault()}},
fa:function(a){var u,t,s,r=this
r.aH(a)
u=r.av(a)
if(r.x){t=r.aU(a)
if(r.d.b4(u,t))a.preventDefault()
return}if(r.r)return
s=r.ax(a)
if(r.c.b4(u,s))a.preventDefault()},
eX:function(a){var u,t,s,r=this
if(!r.bC(a)){r.aH(a)
u=r.av(a)
if(r.x){t=r.aU(a)
if(r.d.b4(u,t))a.preventDefault()
return}if(r.r)return
s=r.ax(a)
if(r.c.b4(u,s))a.preventDefault()}},
fe:function(a){var u,t,s=this
s.aH(a)
u=new V.U((a&&C.F).ghd(a),C.F.ghe(a)).A(0,s.Q)
if(s.x){if(s.d.hM(u))a.preventDefault()
return}if(s.r)return
t=s.ax(a)
if(s.c.hN(u,t))a.preventDefault()},
fg:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.av(s.y)
t=s.ax(s.y)
s.d.f6(u,t,r)}},
fu:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bJ(a)
u=t.bF(a)
if(t.e.hK(u))a.preventDefault()},
fp:function(a){var u
this.bJ(a)
u=this.bF(a)
if(this.e.hI(u))a.preventDefault()},
fs:function(a){var u
this.bJ(a)
u=this.bF(a)
if(this.e.hJ(u))a.preventDefault()}}
D.eS.prototype={$ia5:1}
D.fb.prototype={$ia5:1}
D.a5.prototype={}
D.d6.prototype={
Z:function(a){var u=this.y
if(u!=null)u.K(a)},
cG:function(a){var u=this.z
if(u!=null)u.K(a)},
f5:function(){return this.cG(null)},
fj:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.l)(a),++t){s=a[t]
if(s==null||this.e4(s))return!1}return!0},
eH:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcF(),s=[{func:1,ret:-1,args:[D.Y]}],r=0;r<b.length;b.length===u||(0,H.l)(b),++r){q=b[r]
if(q instanceof D.bA)this.x.push(q)
p=q.go
if(p==null){p=new D.bq()
p.d=0
q.go=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}u=new D.bs()
u.b=!0
this.Z(u)},
fn:function(a,b){var u,t,s
for(u=b.gS(b),t=this.gcF();u.t();){s=u.gC(u)
C.b.L(this.e,s)
s.gB().L(0,t)}u=new D.bt()
u.b=!0
this.Z(u)},
e4:function(a){var u=C.b.H(this.x,a)
return u},
$aj:function(){return[D.a5]},
$ab_:function(){return[D.a5]}}
D.hA.prototype={$ia5:1}
D.bA.prototype={
Z:function(a){var u=this.go
if(u!=null)u.K(a)},
eP:function(){return this.Z(null)},
ga7:function(){return 12},
$ia5:1}
V.W.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.W))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}}
V.as.prototype={
p:function(a,b){var u,t,s=this
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
return"["+V.F(u.a,3,0)+", "+V.F(u.b,3,0)+", "+V.F(u.c,3,0)+", "+V.F(u.d,3,0)+"]"}}
V.fl.prototype={}
V.db.prototype={
a9:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.J])
return t},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.db))return!1
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
i:function(a){var u,t,s,r,q=this,p=[P.J],o=V.bP(H.b([q.a,q.d,q.r],p),3,0),n=V.bP(H.b([q.b,q.e,q.x],p),3,0),m=V.bP(H.b([q.c,q.f,q.y],p),3,0)
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
V.aO.prototype={
a9:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.J])
return t},
dh:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.A().a)return V.dc()
u=1/b1
t=-n
s=-a0
return V.aP((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
A:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.aP(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bq:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.z(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
aQ:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.P(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aO))return!1
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
i:function(a){return this.O()},
G:function(a){var u,t,s,r,q,p=this,o=[P.J],n=V.bP(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.bP(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.bP(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.bP(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
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
O:function(){return this.G("")}}
V.a7.prototype={
M:function(a,b){return new V.a7(this.a-b.a,this.b-b.b)},
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a7))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+"]"}}
V.P.prototype={
w:function(a,b){return new V.P(this.a+b.a,this.b+b.b,this.c+b.c)},
M:function(a,b){return new V.P(this.a-b.a,this.b-b.b,this.c-b.c)},
A:function(a,b){return new V.P(this.a*b,this.b*b,this.c*b)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.P))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}}
V.bb.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bb))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.F(u.a,3,0)+", "+V.F(u.b,3,0)+", "+V.F(u.c,3,0)+", "+V.F(u.d,3,0)+"]"}}
V.dm.prototype={
gas:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dm))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.F(u.a,3,0)+", "+V.F(u.b,3,0)+", "+V.F(u.c,3,0)+", "+V.F(u.d,3,0)+"]"}}
V.U.prototype={
b0:function(a){return Math.sqrt(this.D(this))},
D:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.A()
if(typeof r!=="number")return H.v(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.v(t)
return s*r+u*t},
A:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.A()
if(typeof b!=="number")return H.v(b)
u=this.b
if(typeof u!=="number")return u.A()
return new V.U(t*b,u*b)},
u:function(a,b){var u,t
if(Math.abs(b-0)<$.A().a){u=$.lG
return u==null?$.lG=new V.U(0,0):u}u=this.a
if(typeof u!=="number")return u.u()
t=this.b
if(typeof t!=="number")return t.u()
return new V.U(u/b,t/b)},
p:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
u=b.a
t=this.a
s=$.A()
s.toString
if(typeof u!=="number")return u.M()
if(typeof t!=="number")return H.v(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.M()
if(typeof t!=="number")return H.v(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+"]"}}
V.z.prototype={
b0:function(a){return Math.sqrt(this.D(this))},
D:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
c4:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.z(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
ay:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.z(u*t-s*r,s*q-p*t,p*r-u*q)},
w:function(a,b){return new V.z(this.a+b.a,this.b+b.b,this.c+b.c)},
T:function(a){return new V.z(-this.a,-this.b,-this.c)},
A:function(a,b){return new V.z(this.a*b,this.b*b,this.c*b)},
u:function(a,b){if(Math.abs(b-0)<$.A().a)return V.co()
return new V.z(this.a/b,this.b/b,this.c/b)},
di:function(){var u=$.A().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.z))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}}
V.cp.prototype={
b0:function(a){var u=this,t=u.a,s=u.b,r=u.c,q=u.d
return Math.sqrt(t*t+s*s+r*r+q*q)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cp))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.F(u.a,3,0)+", "+V.F(u.b,3,0)+", "+V.F(u.c,3,0)+", "+V.F(u.d,3,0)+"]"}}
U.f_.prototype={
bw:function(a){var u=V.p6(a,this.c,this.b)
return u},
gB:function(){var u=this.y
return u==null?this.y=D.S():u},
W:function(a){var u=this.y
if(u!=null)u.K(a)},
sdM:function(a,b){},
sdj:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.A().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bw(u)}s=new D.C("maximumLocation",s,t.b)
s.b=!0
t.W(s)}},
sdl:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.A().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bw(u)}s=new D.C("minimumLocation",s,t.c)
s.b=!0
t.W(s)}},
sa2:function(a,b){var u,t=this
b=t.bw(b)
u=t.d
if(!(Math.abs(u-b)<$.A().a)){t.d=b
u=new D.C("location",u,b)
u.b=!0
t.W(u)}},
sdk:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.A().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.C("maximumVelocity",r,a)
r.b=!0
s.W(r)}},
sX:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.A().a)){u.f=a
t=new D.C("velocity",t,a)
t.b=!0
u.W(t)}},
sd_:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.A().a)){this.x=a
u=new D.C("dampening",u,a)
u.b=!0
this.W(u)}},
at:function(a,b){var u,t,s,r=this,q=r.f,p=$.A().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa2(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.A().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sX(u)}}}
U.cT.prototype={
gB:function(){var u=this.b
return u==null?this.b=D.S():u},
aR:function(a,b,c){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cT))return!1
return J.E(this.a,b.a)},
i:function(a){return"Constant: "+this.a.G("          ")}}
U.c_.prototype={
gB:function(){var u=this.e
return u==null?this.e=D.S():u},
W:function(a){var u=this.e
if(u!=null)u.K(a)},
al:function(){return this.W(null)},
e6:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gbb(),s=[{func:1,ret:-1,args:[D.Y]}],r=0;r<b.length;b.length===u||(0,H.l)(b),++r){q=b[r]
if(q!=null){p=q.gB()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bs()
u.b=!0
this.W(u)},
fl:function(a,b){var u,t
for(u=b.gS(b),t=this.gbb();u.t();)u.gC(u).gB().L(0,t)
u=new D.bt()
u.b=!0
this.W(u)},
aR:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.R()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.a4(r,r.length),u=null;r.t();){q=r.d
if(q!=null){t=q.aR(0,b,c)
if(t!=null)u=u==null?t:t.A(0,u)}}s.f=u==null?V.dc():u
r=s.e
if(r!=null)r.ai(0)}return s.f},
p:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.c_))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.d(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.d(r,t)
if(!J.E(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$aj:function(){return[U.am]},
$ab_:function(){return[U.am]},
$iam:1}
U.am.prototype={}
U.dG.prototype={
gB:function(){var u=this.fx
return u==null?this.fx=D.S():u},
W:function(a){var u=this.fx
if(u!=null)u.K(a)},
al:function(){return this.W(null)},
fZ:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
u=a.c
t=u.b
u=t==null?u.b=D.S():t
u.n(0,s.gez())
u=s.a.c
t=u.d
u=t==null?u.d=D.S():t
u.n(0,s.geB())
u=s.a.c
t=u.c
u=t==null?u.c=D.S():t
u.n(0,s.geD())
u=s.a.d
t=u.f
u=t==null?u.f=D.S():t
u.n(0,s.geu())
u=s.a.d
t=u.d
u=t==null?u.d=D.S():t
u.n(0,s.gew())
u=s.a.e
t=u.b
u=t==null?u.b=D.S():t
u.n(0,s.gfQ())
u=s.a.e
t=u.d
u=t==null?u.d=D.S():t
u.n(0,s.gfO())
u=s.a.e
t=u.c
u=t==null?u.c=D.S():t
u.n(0,s.gfM())
return!0},
an:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.T()
u=-u}if(this.r){if(typeof t!=="number")return t.T()
t=-t}return new V.U(u,t)},
eA:function(a){var u=this
H.r(a,"$ib7")
if(!J.E(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
eC:function(a){var u,t,s,r,q,p,o,n=this
H.r(a,"$ib7")
if(!n.cx)return
if(n.ch){u=a.d.M(0,a.y)
u=new V.U(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.v(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.M(0,a.y)
u=n.an(new V.U(t.a,t.b).A(0,2).u(0,u.gas()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.v(s)
t.sX(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.v(t)
s.sX(-u*10*t)}else{u=a.c
t=a.d
s=t.M(0,a.y)
r=n.an(new V.U(s.a,s.b).A(0,2).u(0,u.gas()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.v(p)
o=n.cy
if(typeof o!=="number")return H.v(o)
s.sa2(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.v(q)
s=n.db
if(typeof s!=="number")return H.v(s)
o.sa2(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.M(0,a.z)
n.dx=n.an(new V.U(t.a,t.b).A(0,2).u(0,u.gas()))}n.al()},
eE:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.D(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.v(s)
u.sX(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.v(u)
s.sX(-t*10*u)
r.al()}},
ev:function(a){var u=this
if(H.r(a,"$id8").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
ex:function(a){var u,t,s,r,q,p,o,n=this
H.r(a,"$ib7")
if(!J.E(n.d,a.x.b))return
u=a.c
t=a.d
s=t.M(0,a.y)
r=n.an(new V.U(s.a,s.b).A(0,2).u(0,u.gas()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.v(p)
o=n.cy
if(typeof o!=="number")return H.v(o)
s.sa2(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.v(q)
s=n.db
if(typeof s!=="number")return H.v(s)
o.sa2(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.M(0,a.z)
n.dx=n.an(new V.U(t.a,t.b).A(0,2).u(0,u.gas()))
n.al()},
fR:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fP:function(a){var u,t,s,r,q,p,o,n=this
H.r(a,"$idA")
if(!n.cx)return
if(n.ch){u=a.d.M(0,a.y)
u=new V.U(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.v(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.M(0,a.y)
u=n.an(new V.U(t.a,t.b).A(0,2).u(0,u.gas()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.v(s)
t.sX(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.v(t)
s.sX(-u*10*t)}else{u=a.c
t=a.d
s=t.M(0,a.y)
r=n.an(new V.U(s.a,s.b).A(0,2).u(0,u.gas()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.v(p)
o=n.cy
if(typeof o!=="number")return H.v(o)
s.sa2(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.v(q)
s=n.db
if(typeof s!=="number")return H.v(s)
o.sa2(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.M(0,a.z)
n.dx=n.an(new V.U(t.a,t.b).A(0,2).u(0,u.gas()))}n.al()},
fN:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.D(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.v(s)
u.sX(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.v(u)
s.sX(-t*10*u)
r.al()}},
aR:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.R()
if(q<p){r.dy=p
u=b.y
r.c.at(0,u)
r.b.at(0,u)
q=V.li(r.b.d)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.A(0,V.aP(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iam:1}
M.cZ.prototype={
au:function(a){var u=this.y
if(u!=null)u.K(a)},
e7:function(){return this.au(null)},
eR:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gam(),s=[{func:1,ret:-1,args:[D.Y]}],r=0;r<b.length;b.length===u||(0,H.l)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bq()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bs()
u.b=!0
this.au(u)},
eT:function(a,b){var u,t
for(u=b.gS(b),t=this.gam();u.t();)u.gC(u).gB().L(0,t)
u=new D.bt()
u.b=!0
this.au(u)},
sb6:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gB().L(0,t.gam())
u=t.d
t.d=a
if(a!=null)a.gB().n(0,t.gam())
s=new D.C("technique",u,t.d)
s.b=!0
t.au(s)}},
gB:function(){var u=this.y
return u==null?this.y=D.S():u},
aN:function(a2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a2.dD(a1.d)
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
if(typeof s!=="number")return H.v(s)
o=C.d.aj(p*s)
p=q.b
if(typeof r!=="number")return H.v(r)
n=C.d.aj(p*r)
p=C.d.aj(q.c*s)
a2.c=p
q=C.d.aj(q.d*r)
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
i=V.aP(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a2.cy.dC(i)
t=$.ln
if(t==null){t=V.lp()
q=V.lK()
p=$.lH
if(p==null)p=$.lH=new V.z(0,0,-1)
h=p.u(0,Math.sqrt(p.D(p)))
q=q.ay(h)
g=q.u(0,Math.sqrt(q.D(q)))
f=h.ay(g)
e=new V.z(t.a,t.b,t.c)
d=g.T(0).D(e)
c=f.T(0).D(e)
b=h.T(0).D(e)
t=V.aP(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.ln=t
a=t}else a=t
t=u.b
if(t!=null){a0=t.aR(0,a2,u)
if(a0!=null)a=a0.A(0,a)}a2.db.dC(a)
u=a1.d
if(u!=null)u.at(0,a2)
for(u=a1.e.a,u=new J.a4(u,u.length);u.t();)u.d.at(0,a2)
for(u=a1.e.a,u=new J.a4(u,u.length);u.t();)u.d.aN(a2)
a1.b.toString
a2.cy.c6()
a2.db.c6()
a1.c.toString
a2.dB()}}
A.cN.prototype={}
A.eN.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hh:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
hg:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.a_.prototype={
gak:function(a){var u=this.a?1:0
return u|0|0},
i:function(a){var u=this.a?1:0
return""+(u|0|0)},
p:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.a_))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.h_.prototype={
dZ:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
b8.z=c3
u=new P.Q("")
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
A.oq(c3,u)
A.os(c3,u)
A.or(c3,u)
A.ou(c3,u)
A.ov(c3,u)
A.ot(c3,u)
A.ow(c3,u)
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
m=A.op(b8.z)
b8.c=n
b8.d=m
b8.e=b8.cz(n,35633)
b8.f=b8.cz(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!s.getProgramParameter(b8.r,35714)){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.p(P.u("Failed to link shader: "+H.e(l)))}b8.fI()
b8.fK()
b8.Q=b8.x.h(0,"posAttr")
b8.cx=b8.x.h(0,"normAttr")
b8.ch=b8.x.h(0,"binmAttr")
b8.cy=b8.x.h(0,"txt2DAttr")
b8.db=b8.x.h(0,"txtCubeAttr")
b8.dx=b8.x.h(0,"bendAttr")
if(c3.dy)b8.id=H.r(b8.y.V(0,"invViewMat"),"$iac")
if(t)b8.dy=H.r(b8.y.V(0,"objMat"),"$iac")
if(r)b8.fr=H.r(b8.y.V(0,"viewObjMat"),"$iac")
b8.fy=H.r(b8.y.V(0,"projViewObjMat"),"$iac")
if(c3.go)b8.fx=H.r(b8.y.V(0,"viewMat"),"$iac")
if(c3.x1)b8.k1=H.r(b8.y.V(0,"txt2DMat"),"$icl")
if(c3.x2)b8.k2=H.r(b8.y.V(0,"txtCubeMat"),"$iac")
if(c3.y1)b8.k3=H.r(b8.y.V(0,"colorMat"),"$iac")
b8.r1=H.b([],[A.ac])
t=c3.bi
if(t>0){b8.k4=b8.y.V(0,"bendMatCount")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.h(0,q)
if(j==null)H.p(P.u(c0+q+c1))
s.push(H.r(j,"$iac"))}}if(c3.a.a)b8.r2=H.r(b8.y.V(0,"emissionClr"),"$iG")
if(c3.b.a)b8.x1=H.r(b8.y.V(0,"ambientClr"),"$iG")
if(c3.c.a)b8.y2=H.r(b8.y.V(0,"diffuseClr"),"$iG")
if(c3.d.a)b8.bj=H.r(b8.y.V(0,"invDiffuseClr"),"$iG")
t=c3.e.a
if(!t)s=!1
else s=!0
if(s){b8.d1=H.r(b8.y.V(0,"shininess"),"$iV")
if(t)b8.d0=H.r(b8.y.V(0,"specularClr"),"$iG")}if(c3.db){b8.d2=H.r(b8.y.V(0,"envSampler"),"$ibE")
if(c3.r.a)b8.d3=H.r(b8.y.V(0,"reflectClr"),"$iG")
t=c3.x.a
if(!t)s=!1
else s=!0
if(s){b8.d4=H.r(b8.y.V(0,"refraction"),"$iV")
if(t)b8.d5=H.r(b8.y.V(0,"refractClr"),"$iG")}}if(c3.y.a)b8.d6=H.r(b8.y.V(0,"alpha"),"$iV")
if(c3.k1){t=c3.z
s=t.length
if(s!==0){r=P.w
b8.bU=new H.I([r,A.bd])
b8.bV=new H.I([r,[P.o,A.cj]])
for(r=[A.cj],i=0;i<t.length;t.length===s||(0,H.l)(t),++i){h=t[i]
g=h.a
f="barLight"+H.e(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].startPnt"
j=p.h(0,o)
if(j==null)H.p(P.u(c0+o+c1))
H.r(j,"$iG")
p=b8.y
o=f+"s["+k+"].endPnt"
d=p.h(0,o)
if(d==null)H.p(P.u(c0+o+c1))
H.r(d,"$iG")
p=b8.y
o=f+"s["+k+"].color"
c=p.h(0,o)
if(c==null)H.p(P.u(c0+o+c1))
H.r(c,"$iG")
if(typeof g!=="number")return g.a8()
if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
b=p.h(0,o)
if(b==null)H.p(P.u(c0+o+c1))
H.r(b,"$iV")
p=b8.y
o=f+"s["+k+"].att1"
a=p.h(0,o)
if(a==null)H.p(P.u(c0+o+c1))
H.r(a,"$iV")
p=b8.y
o=f+"s["+k+"].att2"
a0=p.h(0,o)
if(a0==null)H.p(P.u(c0+o+c1))
H.r(a0,"$iV")
a1=a0
a2=a
a3=b}else{a1=b9
a2=a1
a3=a2}e.push(new A.cj(j,d,c,a3,a2,a1))}b8.bV.m(0,g,e)
q=b8.bU
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.p(P.u(c0+o+c1))
q.m(0,g,j)}}t=c3.Q
s=t.length
if(s!==0){r=P.w
b8.bW=new H.I([r,A.bd])
b8.bX=new H.I([r,[P.o,A.ck]])
for(r=[A.ck],i=0;i<t.length;t.length===s||(0,H.l)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.e(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.a8()
p=(g&1)!==0
if(p){o=b8.y
a4=f+"s["+k+"].objUp"
j=o.h(0,a4)
if(j==null)H.p(P.u(c0+a4+c1))
H.r(j,"$iG")
o=b8.y
a4=f+"s["+k+"].objRight"
d=o.h(0,a4)
if(d==null)H.p(P.u(c0+a4+c1))
H.r(d,"$iG")
o=b8.y
a4=f+"s["+k+"].objDir"
c=o.h(0,a4)
if(c==null)H.p(P.u(c0+a4+c1))
H.r(c,"$iG")
a5=c
a6=d
a7=j}else{a5=b9
a6=a5
a7=a6}o=b8.y
a4=f+"s["+k+"].viewDir"
j=o.h(0,a4)
if(j==null)H.p(P.u(c0+a4+c1))
H.r(j,"$iG")
o=b8.y
a4=f+"s["+k+"].color"
d=o.h(0,a4)
if(d==null)H.p(P.u(c0+a4+c1))
H.r(d,"$iG")
if(p){p=b8.y
o=f+"sTexture2D"+k
c=p.h(0,o)
if(c==null)H.p(P.u(c0+o+c1))
H.r(c,"$ibD")
a8=c}else a8=b9
e.push(new A.ck(a7,a6,a5,j,d,a8))}b8.bX.m(0,g,e)
q=b8.bW
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.p(P.u(c0+o+c1))
q.m(0,g,j)}}t=c3.ch
s=t.length
if(s!==0){r=P.w
b8.bY=new H.I([r,A.bd])
b8.bZ=new H.I([r,[P.o,A.cm]])
for(r=[A.cm],i=0;i<t.length;t.length===s||(0,H.l)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.e(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.h(0,o)
if(j==null)H.p(P.u(c0+o+c1))
H.r(j,"$iG")
p=b8.y
o=f+"s["+k+"].viewPnt"
d=p.h(0,o)
if(d==null)H.p(P.u(c0+o+c1))
H.r(d,"$iG")
p=b8.y
o=f+"s["+k+"].color"
c=p.h(0,o)
if(c==null)H.p(P.u(c0+o+c1))
H.r(c,"$iG")
if(typeof g!=="number")return g.a8()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
b=p.h(0,o)
if(b==null)H.p(P.u(c0+o+c1))
H.r(b,"$icl")
a9=b}else a9=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
b=p.h(0,o)
if(b==null)H.p(P.u(c0+o+c1))
H.r(b,"$ibE")
a8=b}else a8=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
b=p.h(0,o)
if(b==null)H.p(P.u(c0+o+c1))
H.r(b,"$ibE")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a=p.h(0,o)
if(a==null)H.p(P.u(c0+o+c1))
H.r(a,"$ici")
b0=b
b1=a}else{b0=b9
b1=b0}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
b=p.h(0,o)
if(b==null)H.p(P.u(c0+o+c1))
H.r(b,"$iV")
p=b8.y
o=f+"s["+k+"].att1"
a=p.h(0,o)
if(a==null)H.p(P.u(c0+o+c1))
H.r(a,"$iV")
p=b8.y
o=f+"s["+k+"].att2"
a0=p.h(0,o)
if(a0==null)H.p(P.u(c0+o+c1))
H.r(a0,"$iV")
a1=a0
a2=a
a3=b}else{a1=b9
a2=a1
a3=a2}e.push(new A.cm(j,d,a9,c,a8,b0,b1,a3,a2,a1))}b8.bZ.m(0,g,e)
q=b8.bY
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.p(P.u(c0+o+c1))
q.m(0,g,j)}}t=c3.cx
s=t.length
if(s!==0){r=P.w
b8.c_=new H.I([r,A.bd])
b8.c0=new H.I([r,[P.o,A.cn]])
for(r=[A.cn],i=0;i<t.length;t.length===s||(0,H.l)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.e(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.h(0,o)
if(j==null)H.p(P.u(c0+o+c1))
H.r(j,"$iG")
p=b8.y
o=f+"s["+k+"].objDir"
d=p.h(0,o)
if(d==null)H.p(P.u(c0+o+c1))
H.r(d,"$iG")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.h(0,o)
if(c==null)H.p(P.u(c0+o+c1))
H.r(c,"$iG")
p=b8.y
o=f+"s["+k+"].color"
b=p.h(0,o)
if(b==null)H.p(P.u(c0+o+c1))
H.r(b,"$iG")
if(typeof g!=="number")return g.a8()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a=p.h(0,o)
if(a==null)H.p(P.u(c0+o+c1))
H.r(a,"$iG")
p=b8.y
o=f+"s["+k+"].objRight"
a0=p.h(0,o)
if(a0==null)H.p(P.u(c0+o+c1))
H.r(a0,"$iG")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.h(0,o)
if(b2==null)H.p(P.u(c0+o+c1))
H.r(b2,"$iV")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.h(0,o)
if(b3==null)H.p(P.u(c0+o+c1))
H.r(b3,"$iV")
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
if(a==null)H.p(P.u(c0+a4+c1))
H.r(a,"$ici")
b1=a}else b1=b9
if((g&8)!==0){o=b8.y
a4=f+"s["+k+"].cutoff"
a=o.h(0,a4)
if(a==null)H.p(P.u(c0+a4+c1))
H.r(a,"$iV")
o=b8.y
a4=f+"s["+k+"].coneAngle"
a0=o.h(0,a4)
if(a0==null)H.p(P.u(c0+a4+c1))
H.r(a0,"$iV")
b6=a0
b7=a}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
a4=f+"s["+k+"].att0"
a=o.h(0,a4)
if(a==null)H.p(P.u(c0+a4+c1))
H.r(a,"$iV")
o=b8.y
a4=f+"s["+k+"].att1"
a0=o.h(0,a4)
if(a0==null)H.p(P.u(c0+a4+c1))
H.r(a0,"$iV")
o=b8.y
a4=f+"s["+k+"].att2"
b2=o.h(0,a4)
if(b2==null)H.p(P.u(c0+a4+c1))
H.r(b2,"$iV")
a1=b2
a2=a0
a3=a}else{a1=b9
a2=a1
a3=a2}if((g&1)!==0){o=b8.y
a4=f+"sTexture2D"+k
a=o.h(0,a4)
if(a==null)H.p(P.u(c0+a4+c1))
H.r(a,"$ibD")
a8=a}else a8=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a=p.h(0,o)
if(a==null)H.p(P.u(c0+o+c1))
H.r(a,"$ibD")
b0=a}else b0=b9
e.push(new A.cn(j,d,c,b,a7,a6,b5,b4,b1,b7,b6,a3,a2,a1,a8,b0))}b8.c0.m(0,g,e)
q=b8.c_
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.p(P.u(c0+o+c1))
q.m(0,g,j)}}}},
fG:function(a,b){}}
A.cO.prototype={
i:function(a){return"barLight"+H.e(this.a)}}
A.cW.prototype={
i:function(a){return"dirLight"+H.e(this.a)}}
A.dk.prototype={
i:function(a){return"pointLight"+H.e(this.a)}}
A.dq.prototype={
i:function(a){return"spotLight"+H.e(this.a)}}
A.h2.prototype={
i:function(a){return this.aZ}}
A.cj.prototype={}
A.ck.prototype={}
A.cm.prototype={}
A.cn.prototype={}
A.dn.prototype={
e1:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cz:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.u("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
fI:function(){var u,t,s,r=this,q=H.b([],[A.cN]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.v(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cN(p,t.name,s))}r.x=new A.eN(q)},
fK:function(){var u,t,s,r=this,q=H.b([],[A.dC]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.v(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.hc(t.type,t.size,t.name,s))}r.y=new A.iu(q)},
aG:function(a,b,c){var u=this.a
if(a===1)return new A.bd(u,b,c)
else return A.kF(u,this.r,b,a,c)},
eo:function(a,b,c){var u=this.a
if(a===1)return new A.bD(u,b,c)
else return A.kF(u,this.r,b,a,c)},
ep:function(a,b,c){var u=this.a
if(a===1)return new A.bE(u,b,c)
else return A.kF(u,this.r,b,a,c)},
be:function(a,b){return new P.dS(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
hc:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aG(b,c,d)
case 5121:return u.aG(b,c,d)
case 5122:return u.aG(b,c,d)
case 5123:return u.aG(b,c,d)
case 5124:return u.aG(b,c,d)
case 5125:return u.aG(b,c,d)
case 5126:return new A.V(u.a,c,d)
case 35664:return new A.iq(u.a,c,d)
case 35665:return new A.G(u.a,c,d)
case 35666:return new A.ci(u.a,c,d)
case 35667:return new A.ir(u.a,c,d)
case 35668:return new A.is(u.a,c,d)
case 35669:return new A.it(u.a,c,d)
case 35674:return new A.iv(u.a,c,d)
case 35675:return new A.cl(u.a,c,d)
case 35676:return new A.ac(u.a,c,d)
case 35678:return u.eo(b,c,d)
case 35680:return u.ep(b,c,d)
case 35670:throw H.c(u.be("BOOL",c))
case 35671:throw H.c(u.be("BOOL_VEC2",c))
case 35672:throw H.c(u.be("BOOL_VEC3",c))
case 35673:throw H.c(u.be("BOOL_VEC4",c))
default:throw H.c(P.u("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.dC.prototype={}
A.iu.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
V:function(a,b){var u=this.h(0,b)
if(u==null)throw H.c(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.O()},
O:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.l)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.bd.prototype={
i:function(a){return"Uniform1i: "+H.e(this.c)}}
A.ir.prototype={
i:function(a){return"Uniform2i: "+H.e(this.c)}}
A.is.prototype={
i:function(a){return"Uniform3i: "+H.e(this.c)}}
A.it.prototype={
i:function(a){return"Uniform4i: "+H.e(this.c)}}
A.ip.prototype={
i:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.V.prototype={
i:function(a){return"Uniform1f: "+H.e(this.c)}}
A.iq.prototype={
i:function(a){return"Uniform2f: "+H.e(this.c)}}
A.G.prototype={
i:function(a){return"Uniform3f: "+H.e(this.c)}}
A.ci.prototype={
i:function(a){return"Uniform4f: "+H.e(this.c)}}
A.iv.prototype={
i:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.cl.prototype={
ag:function(a){var u=new Float32Array(H.bK(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.e(this.c)}}
A.ac.prototype={
ag:function(a){var u=new Float32Array(H.bK(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.e(this.c)}}
A.bD.prototype={
i:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.bE.prototype={
i:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.jK.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.c4(s.b,b).c4(s.d.c4(s.c,b),c)
a.sa2(0,new V.P(r.a,r.b,r.c))
a.sdH(r.u(0,Math.sqrt(r.D(r))))
s=1-b
u=1-c
a.scW(new V.bb(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)}}
F.jU.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)}}
F.jW.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.v(p)
s=-s*p
u=r*p
a.sa2(0,new V.P(s,u,q))
u=new V.z(s,u,q)
a.sdH(u.u(0,Math.sqrt(u.D(u))))
a.scW(new V.bb(1-c,2+c,-1,-1))}}
F.jX.prototype={
$1:function(a){return this.a.$2(a,1)}}
F.jY.prototype={
$1:function(a){return this.a.$2(1-a,0)}}
F.kf.prototype={
$2:function(a,b){return 0}}
F.kg.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.v(s)
u=a.f
t=new V.z(u.a,u.b,u.c)
s=t.u(0,Math.sqrt(t.D(t))).A(0,this.b+s)
a.sa2(0,new V.P(s.a,s.b,s.c))}}
F.ki.prototype={
$1:function(a){return new V.P(Math.cos(a),Math.sin(a),0)}}
F.k5.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.P(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)}}
F.jV.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.l1(n.$1(o),m)
m=J.l1(n.$1(o+3.141592653589793/p.c),m).M(0,l)
m=new V.z(m.a,m.b,m.c)
u=m.u(0,Math.sqrt(m.D(m)))
n=$.lI
if(n==null){n=new V.z(1,0,0)
$.lI=n
t=n}else t=n
n=u.ay(!J.E(u,t)?V.lL():t)
s=n.u(0,Math.sqrt(n.D(n)))
n=s.ay(u)
t=n.u(0,Math.sqrt(n.D(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.A(0,n*m)
m=s.A(0,q*m)
a.sa2(0,l.w(0,new V.P(n.a-m.a,n.b-m.b,n.c-m.c)))}}
F.b1.prototype={
aX:function(){var u=this
if(!u.gaY()){C.b.L(u.a.a.d.b,u)
u.a.a.Y()}u.bG()
u.bH()
u.fz()},
bK:function(a){this.a=a
a.d.b.push(this)},
bL:function(a){this.b=a
a.d.c.push(this)},
fH:function(a){this.c=a
a.d.d.push(this)},
bG:function(){var u=this.a
if(u!=null){C.b.L(u.d.b,this)
this.a=null}},
bH:function(){var u=this.b
if(u!=null){C.b.L(u.d.c,this)
this.b=null}},
fz:function(){var u=this.c
if(u!=null){C.b.L(u.d.d,this)
this.c=null}},
gaY:function(){return this.a==null||this.b==null||this.c==null},
ei:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.co()
if(q!=null)s=s.w(0,q)
if(u!=null)s=s.w(0,u)
if(t!=null)s=s.w(0,t)
if(s.di())return
return s.u(0,Math.sqrt(s.D(s)))},
ek:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.M(0,q)
r=new V.z(r.a,r.b,r.c)
s=r.u(0,Math.sqrt(r.D(r)))
r=t.M(0,q)
r=new V.z(r.a,r.b,r.c)
r=s.ay(r.u(0,Math.sqrt(r.D(r))))
return r.u(0,Math.sqrt(r.D(r)))},
bP:function(){var u,t=this
if(t.d!=null)return!0
u=t.ei()
if(u==null){u=t.ek()
if(u==null)return!1}t.d=u
t.a.a.Y()
return!0},
eh:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.co()
if(q!=null)s=s.w(0,q)
if(u!=null)s=s.w(0,u)
if(t!=null)s=s.w(0,t)
if(s.di())return
return s.u(0,Math.sqrt(s.D(s)))},
ej:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.A().a){l=d.M(0,g)
l=new V.z(l.a,l.b,l.c)
q=l.u(0,Math.sqrt(l.D(l)))
if(s.a-t.a<0)q=q.T(0)}else{p=(l-u.b)/r
l=d.M(0,g).A(0,p).w(0,g).M(0,j)
l=new V.z(l.a,l.b,l.c)
q=l.u(0,Math.sqrt(l.D(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.T(0)}l=n.d
if(l!=null){o=l.u(0,Math.sqrt(l.D(l)))
l=o.ay(q)
l=l.u(0,Math.sqrt(l.D(l))).ay(o)
q=l.u(0,Math.sqrt(l.D(l)))}return q},
bN:function(){var u,t=this
if(t.e!=null)return!0
u=t.eh()
if(u==null){u=t.ej()
if(u==null)return!1}t.e=u
t.a.a.Y()
return!0},
gh6:function(a){var u=this
if(J.E(u.a,u.b))return!0
if(J.E(u.b,u.c))return!0
if(J.E(u.c,u.a))return!0
return!1},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
G:function(a){var u,t,s=this
if(s.gaY())return a+"disposed"
u=a+C.a.af(J.a3(s.a.e),0)+", "+C.a.af(J.a3(s.b.e),0)+", "+C.a.af(J.a3(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
O:function(){return this.G("")}}
F.fo.prototype={}
F.hX.prototype={
b2:function(a,b,c){var u,t=b.a
t.a.a.v()
t=t.e
u=c.a
u.a.a.v()
if(t==u.e){t=b.b
t.a.a.v()
t=t.e
u=c.b
u.a.a.v()
if(t==u.e){t=b.c
t.a.a.v()
t=t.e
u=c.c
u.a.a.v()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.v()
t=t.e
u=c.b
u.a.a.v()
if(t==u.e){t=b.b
t.a.a.v()
t=t.e
u=c.c
u.a.a.v()
if(t==u.e){t=b.c
t.a.a.v()
t=t.e
u=c.a
u.a.a.v()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.v()
t=t.e
u=c.c
u.a.a.v()
if(t==u.e){t=b.b
t.a.a.v()
t=t.e
u=c.a
u.a.a.v()
if(t==u.e){t=b.c
t.a.a.v()
t=t.e
u=c.b
u.a.a.v()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.c3.prototype={
aX:function(){var u=this
if(!u.gaY()){C.b.L(u.a.a.c.b,u)
u.a.a.Y()}u.bG()
u.bH()},
bK:function(a){this.a=a
a.c.b.push(this)},
bL:function(a){this.b=a
a.c.c.push(this)},
bG:function(){var u=this.a
if(u!=null){C.b.L(u.c.b,this)
this.a=null}},
bH:function(){var u=this.b
if(u!=null){C.b.L(u.c.c,this)
this.b=null}},
gaY:function(){return this.a==null||this.b==null},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
G:function(a){if(this.gaY())return a+"disposed"
return a+C.a.af(J.a3(this.a.e),0)+", "+C.a.af(J.a3(this.b.e),0)},
O:function(){return this.G("")}}
F.fN.prototype={}
F.io.prototype={
b2:function(a,b,c){var u,t=b.a
t.a.a.v()
t=t.e
u=c.a
u.a.a.v()
if(t==u.e){t=b.b
t.a.a.v()
t=t.e
u=c.b
u.a.a.v()
return t==u.e}else{t=b.a
t.a.a.v()
t=t.e
u=c.b
u.a.a.v()
if(t==u.e){t=b.b
t.a.a.v()
t=t.e
u=c.a
u.a.a.v()
return t==u.e}else return!1}}}
F.cb.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
G:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.a.af(J.a3(u.e),0)},
O:function(){return this.G("")}}
F.hP.prototype={
gB:function(){var u=this.e
return u==null?this.e=D.S():u},
b3:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.v()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.l)(g),++s){r=g[s]
h.a.n(0,r.h9())}h.a.v()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.l)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.v()
o=o.e
if(typeof o!=="number")return o.w()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
n=p[o]
h.b.a.a.n(0,n)
o=new F.cb()
if(n.a==null)H.p(P.u("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.K(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.l)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.v()
o=o.e
if(typeof o!=="number")return o.w()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.v()
p=p.e
if(typeof p!=="number")return p.w()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.c.a
p.a.n(0,l)
p.a.n(0,k)
F.n2(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.l)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.v()
o=o.e
if(typeof o!=="number")return o.w()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.v()
p=p.e
if(typeof p!=="number")return p.w()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.v()
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
F.bY(l,k,i)}g=h.e
if(g!=null)g.ai(0)},
ap:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.ap()||!1
if(!t.a.ap())u=!1
s=t.e
if(s!=null)s.ai(0)
return u},
hx:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.b(o.slice(0),[H.aH(o,0)])
for(o=[F.be];u.length!==0;){t=C.b.ghm(u)
C.b.c9(u,0)
if(t!=null){s=H.b([],o)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.d(u,r)
q=u[r]
if(q!=null&&a.b2(0,t,q)){s.push(q)
C.b.c9(u,r)}}if(s.length>1)b.b3(s)}}p.a.v()
p.c.ca()
p.d.ca()
p.b.hQ()
p.c.cb(new F.io())
p.d.cb(new F.hX())
o=p.e
if(o!=null)o.ai(0)},
bM:function(){this.hx(new F.iS(),new F.hs())},
c2:function(){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
p.d.c2()
for(u=p.a.c.length-1;u>=0;--u){o=p.a.c
if(u>=o.length)return H.d(o,u)
t=o[u]
o=t.r
if(o!=null)t.sdm(new V.z(-o.a,-o.b,-o.c))
o=t.x
if(o!=null){s=-o.a
r=-o.b
o=-o.c
q=new V.z(s,r,o).u(0,Math.sqrt(s*s+r*r+o*o))
if(!J.E(t.x,q)){t.x=q
o=t.a
if(o!=null){o=o.e
if(o!=null)o.K(null)}}}}o=p.e
if(o!=null)o.ai(0)},
h4:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.aY()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.aX().a)!==0)++s
if((t&$.aW().a)!==0)++s
if((t&$.bi().a)!==0)++s
if((t&$.bj().a)!==0)++s
if((t&$.cJ().a)!==0)++s
if((t&$.cK().a)!==0)++s
if((t&$.bR().a)!==0)++s
if((t&$.aV().a)!==0)++s
r=a4.gci(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.J])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.cP])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.fY(m)
k=l.gci(l)
if(m>=t)return H.d(o,m)
o[m]=new Z.cP(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.d(i,j)
h=i[j].hw(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.d(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.bK(p)),35044)
u.bindBuffer(a1,null)
c=new Z.cQ(new Z.dI(a1,d),o,a4)
c.b=H.b([],[Z.br])
if(a0.b.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.v()
b.push(t.e)}a=Z.kI(u,34963,b)
c.b.push(new Z.br(0,b.length,a))}if(a0.c.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.v()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.d(t,m)
t=t[m].b
t.a.a.v()
b.push(t.e)}a=Z.kI(u,34963,b)
c.b.push(new Z.br(1,b.length,a))}if(a0.d.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.v()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.d(t,m)
t=t[m].b
t.a.a.v()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.d(t,m)
t=t[m].c
t.a.a.v()
b.push(t.e)}a=Z.kI(u,34963,b)
c.b.push(new Z.br(4,b.length,a))}return c},
i:function(a){var u=this,t="   ",s=H.b([],[P.h])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.G(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.G(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.G(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.G(t))}return C.b.j(s,"\n")},
Y:function(){var u=this.e
if(u!=null)u.K(null)}}
F.hQ.prototype={
fU:function(a){var u,t,s,r,q,p=H.b([],[F.b1]),o=a.length
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
p.push(F.bY(u,r,q))}}return p},
fV:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.b1])
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
h.push(F.bY(m,l,j))
u.a.n(0,m)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.bY(m,j,i))}else{n.n(0,l)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.bY(l,j,i))
u.a.n(0,l)
u.a.n(0,i)
u.a.n(0,m)
h.push(F.bY(l,i,m))}p=!p}r=!r}return h},
gl:function(a){return this.b.length},
cb:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.h(0,q)
for(o=q-1;o>=0;--o){n=r.d.h(0,o)
if(a.b2(0,p,n)){p.aX()
break}}}}},
ca:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=s.gh6(s)
if(t)s.aX()}},
ap:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.l)(u),++r)if(!u[r].bP())s=!1
return s},
bO:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.l)(u),++r)if(!u[r].bN())s=!1
return s},
c2:function(){var u,t,s,r,q,p
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
q=r.b
r.b=r.c
r.c=q
p=r.d
if(p!=null)r.d=new V.z(-p.a,-p.b,-p.c)
p=r.e
if(p!=null)r.e=new V.z(-p.a,-p.b,-p.c)
p=r.a.a.e
if(p!=null)p.K(null)}},
i:function(a){return this.O()},
G:function(a){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].G(a))
return C.b.j(r,"\n")},
O:function(){return this.G("")}}
F.hR.prototype={
gl:function(a){return this.b.length},
cb:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.h(0,q)
for(o=q-1;o>=0;--o){n=r.c.h(0,o)
if(a.b2(0,p,n)){p.aX()
break}}}}},
ca:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=J.E(s.a,s.b)
if(t)s.aX()}},
i:function(a){return this.O()},
G:function(a){var u,t,s=H.b([],[P.h]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.d(t,u)
s.push(t[u].G(a+(""+u+". ")))}return C.b.j(s,"\n")},
O:function(){return this.G("")}}
F.hS.prototype={
gl:function(a){return this.b.length},
hQ:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.b.L(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.K(null)}s=t.a
if(s!=null){C.b.L(s.b.b,t)
t.a=null}}}},
i:function(a){return this.O()},
G:function(a){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].G(a))
return C.b.j(r,"\n")},
O:function(){return this.G("")}}
F.be.prototype={
bT:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.dH(u.cx,r,o,t,s,q,p,a,n)},
h9:function(){return this.bT(null)},
sa2:function(a,b){var u
if(!J.E(this.f,b)){this.f=b
u=this.a
if(u!=null)u.Y()}},
sdm:function(a){var u
a=a==null?null:a.u(0,Math.sqrt(a.D(a)))
if(!J.E(this.r,a)){this.r=a
u=this.a
if(u!=null)u.Y()}},
sdH:function(a){var u
if(!J.E(this.z,a)){this.z=a
u=this.a
if(u!=null)u.Y()}},
scW:function(a){var u
if(!J.E(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.Y()}},
hw:function(a){var u,t,s=this
if(a.p(0,$.aY())){u=s.f
t=[P.J]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.aX())){u=s.r
t=[P.J]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.aW())){u=s.x
t=[P.J]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.bi())){u=s.y
t=[P.J]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.p(0,$.bj())){u=s.z
t=[P.J]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.cJ())){u=s.Q
t=[P.J]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.cK())){u=s.Q
t=[P.J]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.p(0,$.bR()))return H.b([s.ch],[P.J])
else if(a.p(0,$.aV())){u=s.cx
t=[P.J]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.J])},
bP:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.co()
t.d.F(0,new F.iX(s))
s=s.a
t.r=s.u(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.Y()
s=t.a.e
if(s!=null)s.ai(0)}return!0},
bN:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.co()
t.d.F(0,new F.iW(s))
s=s.a
t.x=s.u(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.Y()
s=t.a.e
if(s!=null)s.ai(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
G:function(a){var u,t,s=this,r="-",q=H.b([],[P.h])
q.push(C.a.af(J.a3(s.e),0))
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
O:function(){return this.G("")}}
F.iX.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.w(0,t)}}}
F.iW.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.w(0,t)}}}
F.iN.prototype={
v:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.d(u,r)
u[r].e=s;++s}this.b=!1}},
n:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.u("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.Y()
return!0},
fW:function(a,b,c,d,e,f){var u=F.dH(a,null,b,c,d,e,f,null,0)
this.n(0,u)
return u},
gl:function(a){return this.c.length},
ap:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)u[s].bP()
return!0},
bO:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)u[s].bN()
return!0},
h5:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.u(0,Math.sqrt(p*p+o*o+n*n))
if(!J.E(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.K(null)}}}}return!0},
i:function(a){return this.O()},
G:function(a){var u,t,s,r
this.v()
u=H.b([],[P.h])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.l)(t),++r)u.push(t[r].G(a))
return C.b.j(u,"\n")},
O:function(){return this.G("")}}
F.iO.prototype={
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
F:function(a,b){var u=this
C.b.F(u.b,b)
C.b.F(u.c,new F.iP(u,b))
C.b.F(u.d,new F.iQ(u,b))},
i:function(a){return this.O()},
O:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].G(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].G(""))
return C.b.j(r,"\n")}}
F.iP.prototype={
$1:function(a){if(!J.E(a.a,this.a))this.b.$1(a)}}
F.iQ.prototype={
$1:function(a){var u=this.a
if(!J.E(a.a,u)&&!J.E(a.b,u))this.b.$1(a)}}
F.iR.prototype={
gl:function(a){return this.b.length+this.c.length},
h:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.d(t,u)
return t[u]}else{if(b<0)return H.d(t,b)
return t[b]}},
i:function(a){return this.O()},
O:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].G(""))
return C.b.j(r,"\n")}}
F.iT.prototype={}
F.iS.prototype={
b2:function(a,b,c){return J.E(b.f,c.f)}}
F.iU.prototype={}
F.hs.prototype={
b3:function(a){var u,t,s,r=V.co()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null)r=new V.z(r.a+s.a,r.b+s.b,r.c+s.c)}r=r.u(0,Math.sqrt(r.D(r)))
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.l)(a),++t)a[t].sdm(r)
return}}
F.iV.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.O()},
O:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].G(""))
return C.b.j(r,"\n")}}
O.d9.prototype={
gB:function(){var u=this.fr
return u==null?this.fr=D.S():u},
ab:function(a){var u=this.fr
if(u!=null)u.K(a)},
ea:function(){return this.ab(null)},
cH:function(a){this.a=null
this.ab(a)},
fD:function(){return this.cH(null)},
eJ:function(a,b){var u=new D.bs()
u.b=!0
this.ab(u)},
eL:function(a,b){var u=new D.bt()
u.b=!0
this.ab(u)},
cv:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=P.w
f=[f,f]
u=new H.I(f)
for(t=g.dx.e,s=t.length,r=0;r<t.length;t.length===s||(0,H.l)(t),++r){q=t[r]
p=q.ga7()
o=u.h(0,q.ga7())
u.m(0,p,o==null?1:o)}n=H.b([],[A.cO])
u.F(0,new O.h6(g,n))
C.b.aS(n,new O.h7())
m=new H.I(f)
for(t=g.dx.f,s=t.length,r=0;r<t.length;t.length===s||(0,H.l)(t),++r){q=t[r]
p=q.ga7()
o=m.h(0,q.ga7())
m.m(0,p,o==null?1:o)}l=H.b([],[A.cW])
m.F(0,new O.h8(g,l))
C.b.aS(l,new O.h9())
k=new H.I(f)
for(t=g.dx.r,s=t.length,r=0;r<t.length;t.length===s||(0,H.l)(t),++r){q=t[r]
p=q.ga7()
o=k.h(0,q.ga7())
k.m(0,p,o==null?1:o)}j=H.b([],[A.dk])
k.F(0,new O.ha(g,j))
C.b.aS(j,new O.hb())
i=new H.I(f)
for(f=g.dx.x,t=f.length,r=0;r<f.length;f.length===t||(0,H.l)(f),++r){q=f[r]
s=q.ga7()
p=i.h(0,q.ga7())
i.m(0,s,p==null?1:p)}h=H.b([],[A.dq])
i.F(0,new O.hc(g,h))
C.b.aS(h,new O.hd())
f=C.c.a4(g.e.a.length+3,4)
g.dy.e
return A.na(!1,!1,!1,!1,f*4,g.f.c,g.r.c,g.x.c,g.y.c,g.z.c,g.Q.c,g.cx.c,g.cy.c,g.db.c,n,l,j,h)},
eg:function(a,b){},
at:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.a4(u,u.length);u.t();){t=u.d
t.toString
s=$.ag
t.a=s==null?$.ag=new V.P(0,0,0):s
s=$.iM
t.b=s==null?$.iM=new V.z(0,0,1):s
s=$.iL
t.c=s==null?$.iL=new V.z(0,1,0):s
s=$.iK
t.d=s==null?$.iK=new V.z(-1,0,0):s
s=t.f
if(s!=null){r=s.aR(0,b,t)
if(r!=null){t.a=r.aQ(t.a)
s=r.bq(t.b)
q=s.a
p=s.b
o=s.c
t.b=s.u(0,Math.sqrt(q*q+p*p+o*o))
o=r.bq(t.c)
p=o.a
q=o.b
s=o.c
t.c=o.u(0,Math.sqrt(p*p+q*q+s*s))
s=r.bq(t.d)
q=s.a
p=s.b
o=s.c
t.d=s.u(0,Math.sqrt(q*q+p*p+o*o))}}}},
hS:function(b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.cv()
u=b4.fr.h(0,b3.aZ)
if(u==null){u=A.n9(b3,b4.a)
t=u.b
if(t.length===0)H.p(P.u("May not cache a shader with no name."))
if(b4.fr.bR(0,t))H.p(P.u('Shader cache already contains a shader by the name "'+t+'".'))
b4.fr.m(0,t,u)}b3=b2.a=u
b5.e=null}s=b3.z
r=s.bj
b3=b5.e
if(!(b3 instanceof Z.cQ))b3=b5.e=null
if(b3==null||!b3.d.p(0,r)){b3=s.k4
if(b3)b5.d.ap()
q=s.r1
if(q){p=b5.d
o=p.e
if(o!=null)++o.d
p.d.bO()
p.a.bO()
p=p.e
if(p!=null)p.ai(0)}p=s.rx
if(p){o=b5.d
n=o.e
if(n!=null)++n.d
o.a.h5()
o=o.e
if(o!=null)o.ai(0)}m=b5.d.h4(new Z.iZ(b4.a),r)
m.aL($.aY()).e=b2.a.Q.c
if(b3)m.aL($.aX()).e=b2.a.cx.c
if(q)m.aL($.aW()).e=b2.a.ch.c
if(s.r2)m.aL($.bi()).e=b2.a.cy.c
if(p)m.aL($.bj()).e=b2.a.db.c
if(s.ry)m.aL($.aV()).e=b2.a.dx.c
b5.e=m}l=H.b([],[T.ib])
b3=b2.a
q=b4.a
q.useProgram(b3.r)
b3.x.hh()
if(s.fr){b3=b2.a
p=b4.dx
p=p.ga0(p)
b3=b3.dy
b3.toString
b3.ag(p.a9(0,!0))}if(s.fx){b3=b2.a
p=b4.cx
if(p==null){p=b4.db
p=p.ga0(p)
o=b4.dx
o=b4.cx=p.A(0,o.ga0(o))
p=o}b3=b3.fr
b3.toString
b3.ag(p.a9(0,!0))}b3=b2.a
p=b4.ch
if(p==null){p=b4.ghO()
o=b4.dx
o=b4.ch=p.A(0,o.ga0(o))
p=o}b3=b3.fy
b3.toString
b3.ag(p.a9(0,!0))
if(s.go){b3=b2.a
p=b4.db
p=p.ga0(p)
b3=b3.fx
b3.toString
b3.ag(p.a9(0,!0))}if(s.x1){b3=b2.a
p=b2.b
b3=b3.k1
b3.toString
b3.ag(C.i.a9(p,!0))}if(s.x2){b3=b2.a
p=b2.c
b3=b3.k2
b3.toString
b3.ag(C.i.a9(p,!0))}if(s.y1){b3=b2.a
p=b2.d
b3=b3.k3
b3.toString
b3.ag(C.i.a9(p,!0))}if(s.bi>0){k=b2.e.a.length
b3=b2.a.k4
b3.a.uniform1i(b3.d,k)
for(j=0;j<k;++j){b3=b2.a
p=b2.e.a
if(j>=p.length)return H.d(p,j)
p=p[j]
b3=b3.r1
if(j>=b3.length)return H.d(b3,j)
b3=b3[j]
i=new Float32Array(H.bK(p.a9(0,!0)))
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
b3=b3.bj
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}b3=s.e.a
if(!b3)p=!1
else p=!0
if(p){p=b2.a
o=b2.z.ch
p=p.d1
p.a.uniform1f(p.d,o)}if(b3){b3=b2.a
p=b2.z.f
b3=b3.d0
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}b3=s.z
if(b3.length>0){p=P.w
h=new H.I([p,p])
for(p=b2.dx.e,o=p.length,g=0;g<p.length;p.length===o||(0,H.l)(p),++g){f=p[g]
e=f.ga7()
d=h.h(0,e)
if(d==null)d=0
h.m(0,e,d+1)
c=J.bS(b2.a.bV.h(0,e),d)
n=f.gi6()
b=$.ag
n=n.aQ(b==null?$.ag=new V.P(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gi7()
b=$.ag
n=n.aQ(b==null?$.ag=new V.P(0,0,0):b)
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gaq(f)
b=c.d
b.a.uniform3f(b.d,n.a,n.b,n.c)
if(f.ghi()){n=f.gh_()
b=c.e
b.a.uniform1f(b.d,n)
n=f.gh0()
b=c.f
b.a.uniform1f(b.d,n)
n=f.gh1()
b=c.r
b.a.uniform1f(b.d,n)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.l)(b3),++g){o=b3[g].a
k=h.h(0,o)
if(k==null)k=0
o=b2.a.bU.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.Q
if(b3.length>0){p=b4.db
a=p.ga0(p)
p=P.w
a0=new H.I([p,p])
for(p=b2.dx.f,o=p.length,g=0;g<p.length;p.length===o||(0,H.l)(p),++g){f=p[g]
e=f.ga7()
d=a0.h(0,e)
if(d==null)d=0
a0.m(0,e,d+1)
c=J.bS(b2.a.bX.h(0,e),d)
n=a.bq(f.ghf(f))
b=n.a
a1=n.b
a2=n.c
a2=n.u(0,Math.sqrt(b*b+a1*a1+a2*a2))
a1=c.e
b=a2.a
n=a2.b
a2=a2.c
a1.a.uniform3f(a1.d,b,n,a2)
a2=f.gaq(f)
n=c.f
n.a.uniform3f(n.d,a2.a,a2.b,a2.c)
f.gaP()
n=f.ghf(f)
b=c.d
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gir()
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gcc(f)
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gaP()
if(!C.b.H(l,n)){n.sb_(0,l.length)
l.push(n)}n=f.gaP()
b=n.gb1(n)
if(b){b=c.r
b.toString
a1=n.gb1(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.gb_(n)
b.a.uniform1i(b.d,n)}}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.l)(b3),++g){o=b3[g].a
k=a0.h(0,o)
if(k==null)k=0
o=b2.a.bW.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.ch
if(b3.length>0){p=b4.db
a=p.ga0(p)
p=P.w
a3=new H.I([p,p])
for(p=b2.dx.r,o=p.length,g=0;g<p.length;p.length===o||(0,H.l)(p),++g){f=p[g]
e=f.ga7()
d=a3.h(0,e)
if(d==null)d=0
a3.m(0,e,d+1)
c=J.bS(b2.a.bZ.h(0,e),d)
a4=a.A(0,f.ga0(f))
n=f.ga0(f)
b=$.ag
n=n.aQ(b==null?$.ag=new V.P(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=$.ag
n=a4.aQ(n==null?$.ag=new V.P(0,0,0):n)
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gaq(f)
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
f.gaP()
n=a4.dh(0)
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
i=new Float32Array(H.bK(new V.db(b,a1,a2,a5,a6,a7,a8,a9,n).a9(0,!0)))
b0.a.uniformMatrix3fv(b0.d,!1,i)
f.gaP()
n=f.gaP()
if(!C.b.H(l,n)){n.sb_(0,l.length)
l.push(n)}n=f.gaP()
b=n.gb1(n)
if(b){b=c.f
b.toString
a1=n.gb1(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.gb_(n)
b.a.uniform1i(b.d,n)}}f.gcg()
n=f.gi5()
b=c.x
b.a.uniform4f(b.d,n.a,n.b,n.c,n.d)
n=f.gcg()
if(!C.b.H(l,n)){n.sb_(0,l.length)
l.push(n)}n=f.gcg()
b=n.gb1(n)
if(b){b=c.r
b.toString
a1=n.gb1(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.gb_(n)
b.a.uniform1i(b.d,n)}}if(f.ghi()){n=f.gh_()
b=c.y
b.a.uniform1f(b.d,n)
n=f.gh0()
b=c.z
b.a.uniform1f(b.d,n)
n=f.gh1()
b=c.Q
b.a.uniform1f(b.d,n)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.l)(b3),++g){o=b3[g].a
k=a3.h(0,o)
if(k==null)k=0
o=b2.a.bY.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.cx
if(b3.length>0){p=b4.db
a=p.ga0(p)
p=P.w
b1=new H.I([p,p])
for(p=b2.dx.x,o=p.length,g=0;g<p.length;p.length===o||(0,H.l)(p),++g){f=p[g]
e=f.ga7()
d=b1.h(0,e)
if(d==null)d=0
b1.m(0,e,d+1)
c=J.bS(b2.a.c0.h(0,e),d)
n=f.a
b=c.b
a1=n.a
a2=n.b
n=n.c
b.a.uniform3f(b.d,a1,a2,n)
n=f.b
a2=n.a
a1=n.b
b=n.c
b=n.u(0,Math.sqrt(a2*a2+a1*a1+b*b))
a1=c.c
a2=b.a
n=b.b
b=b.c
a1.a.uniform3f(a1.d,a2,n,b)
b=a.aQ(f.a)
n=c.d
n.a.uniform3f(n.d,b.a,b.b,b.c)
b=f.r
n=c.e
n.a.uniform3f(n.d,b.a,b.b,b.c)
n=f.cy
b=c.Q
b.a.uniform1f(b.d,n)
n=f.dx
b=c.ch
b.a.uniform1f(b.d,n)
n=f.dy
b=c.cx
b.a.uniform1f(b.d,n)
n=f.fr
b=c.cy
b.a.uniform1f(b.d,n)
n=f.fx
b=c.db
b.a.uniform1f(b.d,n)}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.l)(b3),++g){o=b3[g].a
k=b1.h(0,o)
if(k==null)k=0
o=b2.a.c_.h(0,o)
o.a.uniform1i(o.d,k)}}}if(s.dy){b3=b2.a
p=b4.Q
if(p==null){p=b4.db
p=b4.Q=p.ga0(p).dh(0)}b3=b3.id
b3.toString
b3.ag(p.a9(0,!0))}if(s.db){b2.eg(l,b2.ch)
b3=b2.a
p=b2.ch
b3.fG(b3.d2,p)
if(s.r.a){b3=b2.a
p=b2.cx.f
b3=b3.d3
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}b3=s.x.a
if(!b3)p=!1
else p=!0
if(p){p=b2.a
o=b2.cy.ch
p=p.d4
p.a.uniform1f(p.d,o)}if(b3){b3=b2.a
p=b2.cy.f
b3=b3.d5
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}}b3=s.y.a
p=!b3
if(p)o=!1
else o=!0
if(o){if(b3){b3=b2.a
o=b2.db.f
b3=b3.d6
b3.a.uniform1f(b3.d,o)}q.enable(3042)
q.blendFunc(770,771)}for(j=0;j<l.length;++j)l[j].bf(b4)
b3=b5.e
b3.bf(b4)
b3.aN(b4)
b3.dJ(b4)
if(p)b3=!1
else b3=!0
if(b3)q.disable(3042)
for(j=0;j<l.length;++j)l[j].dJ(b4)
b3=b2.a
b3.toString
q.useProgram(null)
b3.x.hg()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cv().aZ}}
O.h6.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.cO(a,C.c.a4(b+3,4)*4))}}
O.h7.prototype={
$2:function(a,b){return J.cL(a.a,b.a)}}
O.h8.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.cW(a,C.c.a4(b+3,4)*4))}}
O.h9.prototype={
$2:function(a,b){return J.cL(a.a,b.a)}}
O.ha.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.dk(a,C.c.a4(b+3,4)*4))}}
O.hb.prototype={
$2:function(a,b){return J.cL(a.a,b.a)}}
O.hc.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.dq(a,C.c.a4(b+3,4)*4))}}
O.hd.prototype={
$2:function(a,b){return J.cL(a.a,b.a)}}
O.h0.prototype={
aw:function(){var u,t=this
t.ck()
u=t.f
if(!(Math.abs(u-1)<$.A().a)){t.f=1
u=new D.C(t.b,u,1)
u.b=!0
t.a.ab(u)}}}
O.da.prototype={
aw:function(){},
cK:function(a){var u,t,s=this
if(!s.c.p(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.aw()
u=s.a
u.a=null
u.ab(null)}}}
O.h1.prototype={}
O.av.prototype={
cJ:function(a){var u,t,s=this
if(!s.f.p(0,a)){u=s.f
s.f=a
t=new D.C(s.b+".color",u,a)
t.b=!0
s.a.ab(t)}},
aw:function(){this.ck()
this.cJ(new V.W(1,1,1))},
saq:function(a,b){this.cK(new A.a_(!0,!1,!1))
this.cJ(b)}}
O.h3.prototype={}
O.h4.prototype={
aw:function(){var u,t=this
t.cl()
u=t.ch
if(!(Math.abs(u-1)<$.A().a)){t.ch=1
u=new D.C(t.b+".refraction",u,1)
u.b=!0
t.a.ab(u)}}}
O.h5.prototype={
cL:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.A().a)){u.ch=a
t=new D.C(u.b+".shininess",t,a)
t.b=!0
u.a.ab(t)}},
aw:function(){this.cl()
this.cL(100)}}
O.dv.prototype={}
T.ib.prototype={}
X.ko.prototype={}
X.fv.prototype={
gB:function(){var u=this.x
return u==null?this.x=D.S():u}}
X.dj.prototype={
gB:function(){var u=this.f
return u==null?this.f=D.S():u},
aF:function(a){var u=this.f
if(u!=null)u.K(a)},
ed:function(){return this.aF(null)},
saM:function(a){var u,t,s=this
if(!J.E(s.b,a)){u=s.b
if(u!=null)u.gB().L(0,s.gcp())
t=s.b
s.b=a
if(a!=null)a.gB().n(0,s.gcp())
u=new D.C("mover",t,s.b)
u.b=!0
s.aF(u)}}}
X.i7.prototype={}
V.cS.prototype={
ba:function(a){this.b=new P.fA(C.U)
this.c=null
this.d=H.b([],[[P.o,W.ak]])},
N:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)l.push(H.b([],[W.ak]))
u=a.split("\n")
for(l=u.length,t=[W.ak],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else m.d.push(H.b([],t))
p=document.createElement("div")
p.className="codePart"
o=m.b.en(q,0,q.length)
n=o==null?q:o
C.S.dQ(p,H.kY(n," ","&nbsp;"))
n=p.style
n.color=b
C.b.gar(m.d).push(p)}},
dz:function(a,b){var u,t,s,r=this
r.d=H.b([],[[P.o,W.ak]])
u=C.b.j(b,"\n")
t=r.c
if(t==null)t=r.c=r.bh()
for(t.toString,s=new H.m(u),s=new P.bH(t.cd(new H.b5(s,s.gl(s))).a());s.t();)r.bo(s.gC(s))}}
V.ke.prototype={
$1:function(a){var u=C.d.dI(this.a.ghr(),2)
if(u!=="0.00")P.kX(u+" fps")}}
V.f9.prototype={
bo:function(a){var u=this
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
bh:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=L.ig()
a1.d=a1.k(0,r)
u=a1.k(0,r).j(0,q)
t=K.t(new H.m("_"))
u.a.push(t)
t=K.M("a","z")
u.a.push(t)
t=K.M("A","Z")
u.a.push(t)
t=a1.k(0,q).j(0,q)
u=K.t(new H.m("_"))
t.a.push(u)
u=K.M("0","9")
t.a.push(u)
u=K.M("a","z")
t.a.push(u)
u=K.M("A","Z")
t.a.push(u)
u=a1.k(0,r).j(0,p)
t=K.M("0","9")
u.a.push(t)
t=a1.k(0,p).j(0,p)
u=K.M("0","9")
t.a.push(u)
u=a1.k(0,p).j(0,o)
t=K.t(new H.m("."))
u.a.push(t)
t=a1.k(0,o).j(0,n)
u=K.M("0","9")
t.a.push(u)
u=a1.k(0,n).j(0,n)
t=K.M("0","9")
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
a1.k(0,k).j(0,k).a.push(new K.aJ())
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
a1.k(0,h).j(0,h).a.push(new K.aJ())
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
t=new K.a6()
s=[K.b6]
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
t=new K.a6()
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
t.d=t.a.P("Num")
t=a1.k(0,n)
t.d=t.a.P("Num")
t=a1.k(0,m)
t.d=t.a.P("Symbol")
t=a1.k(0,j)
t.d=t.a.P("String")
t=a1.k(0,g)
t.d=t.a.P("String")
t=a1.k(0,c)
t.d=t.a.P(d)
t=a1.k(0,a0)
t.d=t.a.P(a0)
t=a1.k(0,q)
t=t.d=t.a.P(q)
u=[P.h]
t.aB(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aB(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aB(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.fx.prototype={
bo:function(a){var u=this
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
bh:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=L.ig()
e.d=e.k(0,r)
u=e.k(0,r).j(0,q)
t=K.t(new H.m("_"))
u.a.push(t)
t=K.M("a","z")
u.a.push(t)
t=K.M("A","Z")
u.a.push(t)
t=e.k(0,q).j(0,q)
u=K.t(new H.m("_"))
t.a.push(u)
u=K.M("0","9")
t.a.push(u)
u=K.M("a","z")
t.a.push(u)
u=K.M("A","Z")
t.a.push(u)
u=e.k(0,r).j(0,p)
t=K.M("0","9")
u.a.push(t)
t=e.k(0,p).j(0,p)
u=K.M("0","9")
t.a.push(u)
u=e.k(0,p).j(0,o)
t=K.t(new H.m("."))
u.a.push(t)
t=e.k(0,o).j(0,n)
u=K.M("0","9")
t.a.push(u)
u=e.k(0,n).j(0,n)
t=K.M("0","9")
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
e.k(0,k).j(0,m).a.push(new K.aJ())
t=e.k(0,j).j(0,i)
u=K.t(new H.m("\n"))
t.a.push(u)
u=e.k(0,j).j(0,j)
t=new K.a6()
s=[K.b6]
t.a=H.b([],s)
u.a.push(t)
u=K.t(new H.m("\n"))
t.a.push(u)
u=e.k(0,r).j(0,h)
t=K.t(new H.m("#"))
u.a.push(t)
t=e.k(0,h).j(0,h)
u=new K.a6()
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
u.d=u.a.P("Num")
u=e.k(0,n)
u.d=u.a.P("Num")
u=e.k(0,m)
u.d=u.a.P("Symbol")
u=e.k(0,i)
u.d=u.a.P(j)
u=e.k(0,g)
u.d=u.a.P(h)
u=e.k(0,f)
u.d=u.a.P(f)
u=e.k(0,q)
u=u.d=u.a.P(q)
t=[P.h]
u.aB(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aB(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aB(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return e}}
V.fy.prototype={
bo:function(a){var u=this,t="#111"
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
bh:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=L.ig()
l.d=l.k(0,s)
u=l.k(0,s).j(0,r)
t=K.t(new H.m("_"))
u.a.push(t)
t=K.M("a","z")
u.a.push(t)
t=K.M("A","Z")
u.a.push(t)
t=l.k(0,r).j(0,r)
u=K.t(new H.m("_"))
t.a.push(u)
u=K.M("0","9")
t.a.push(u)
u=K.M("a","z")
t.a.push(u)
u=K.M("A","Z")
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
l.k(0,o).j(0,o).a.push(new K.aJ())
l.k(0,s).j(0,m).a.push(new K.aJ())
u=l.k(0,m).j(0,m)
t=new K.a6()
t.a=H.b([],[K.b6])
u.a.push(t)
u=K.t(new H.m('</\\-!>=_"'))
t.a.push(u)
u=K.M("a","z")
t.a.push(u)
u=K.M("A","Z")
t.a.push(u)
u=l.k(0,p)
u.d=u.a.P("Symbol")
u=l.k(0,n)
u.d=u.a.P("String")
u=l.k(0,r)
t=u.a.P(r)
u.d=t
t.aB(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
t=l.k(0,q)
t.d=t.a.P(q)
t=l.k(0,m)
t.d=t.a.P(m)
return l}}
V.hy.prototype={
dz:function(a,b){this.d=H.b([],[[P.o,W.ak]])
this.N(C.b.j(b,"\n"),"#111")},
bo:function(a){},
bh:function(){return}}
V.hD.prototype={
cS:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
if(m.c==null)return
u=m.a
t=P.lC().gc8().h(0,H.e(u))
if(t==null)if(d){c.$0()
m.cQ(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.l3(m.c).n(0,q)
o=W.mW("radio")
o.checked=s
o.name=u
W.Z(o,"change",new V.hE(m,o,c,b),!1)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.l3(m.c).n(0,r.createElement("br"))},
aW:function(a,b,c){return this.cS(a,b,c,!1)},
cQ:function(a){var u,t,s=P.lC(),r=P.h,q=P.n4(s.gc8(),r,r)
q.m(0,this.a,a)
u=s.dE(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.jr([],[]).br(""),"",t)}}
V.hE.prototype={
$1:function(a){var u=this
if(u.b.checked){u.c.$0()
u.a.cQ(u.d)}}}
V.hT.prototype={
e2:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.Z(q,"scroll",new V.hV(o),!1)},
cU:function(a){var u,t,s,r,q,p,o,n
this.fJ()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b,r=C.b.hv(a),s.toString,r=new H.m(r),r=new P.bH(s.cd(new H.b5(r,r.gl(r))).a());r.t();){s=r.gC(r)
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
if(H.me(s,"|",0)){p=s.split("|")
o=u.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.d(p,1)
o.href=p[1]
o.textContent=p[0]
t.appendChild(o)}else{n=P.et(C.z,s,C.e,!1)
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
dN:function(a){var u,t,s,r=new V.f9("dart")
r.ba("dart")
u=new V.fx("glsl")
u.ba("glsl")
t=new V.fy("html")
t.ba("html")
s=C.b.hn(H.b([r,u,t],[V.cS]),new V.hW(a))
if(s!=null)return s
r=new V.hy("plain")
r.ba("plain")
return r},
cT:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.b([],[P.w])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(J.cG(s).a3(s,"+")){b0[t]=C.a.a6(s,1)
a6.push(1)
u=!0}else if(C.a.a3(s,"-")){b0[t]=C.a.a6(s,1)
a6.push(-1)
u=!0}else a6.push(0)}r=this.dN(a8)
r.dz(0,b0)
q=document
p=q.createElement("div")
p.className="codeTableScroll"
o=q.createElement("table")
o.className="codeTable"
p.appendChild(o)
this.a.appendChild(p)
n=P.et(C.z,a7,C.e,!1)
m=q.createElement("tr")
m.className="headerRow"
l=q.createElement("td")
l.className="headerCell"
l.colSpan=u?3:2
k=q.createElement("div")
k.className="tableHeader"
k.id=n
j=W.l5()
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
for(g=s.length,a=0;a<s.length;s.length===g||(0,H.l)(s),++a)b.appendChild(s[a])
f.appendChild(e)
f.appendChild(d)
f.appendChild(b)
o.appendChild(f)}else for(g=r.d,a0=g.length,a1=a9,a=0;a<g.length;g.length===a0||(0,H.l)(g),++a){s=g[a]
f=q.createElement("tr")
f.className=a3
e=q.createElement("td")
e.className=a4;++a1
e.textContent=""+a1
d=q.createElement("td")
d.className=a5
for(a2=C.b.gS(s);a2.t();)d.appendChild(a2.gC(a2))
f.appendChild(e)
f.appendChild(d)
o.appendChild(f)}},
fS:function(a){var u,t,s,r,q,p="auto",o=document,n=o.createElement("table")
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
fJ:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=L.ig()
u.d=u.k(0,q)
t=u.k(0,q).j(0,p)
s=K.t(new H.m("*"))
t.a.push(s)
t.c=!0
t=u.k(0,p).j(0,p)
s=new K.a6()
r=[K.b6]
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
s=new K.a6()
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
s=new K.a6()
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
t=new K.a6()
t.a=H.b([],r)
s.a.push(t)
s=K.t(new H.m("|]"))
t.a.push(s)
s=u.k(0,k).j(0,j)
t=K.t(new H.m("]"))
s.a.push(t)
s.c=!0
s=u.k(0,k).j(0,k)
t=new K.a6()
t.a=H.b([],r)
s.a.push(t)
s=K.t(new H.m("|]"))
t.a.push(s)
u.k(0,q).j(0,i).a.push(new K.aJ())
s=u.k(0,i).j(0,i)
t=new K.a6()
t.a=H.b([],r)
s.a.push(t)
s=K.t(new H.m("*_`["))
t.a.push(s)
s=u.k(0,"BoldEnd")
s.d=s.a.P(p)
s=u.k(0,n)
s.d=s.a.P(o)
s=u.k(0,"CodeEnd")
s.d=s.a.P(m)
s=u.k(0,j)
s.d=s.a.P("Link")
s=u.k(0,i)
s.d=s.a.P(i)
this.b=u}}
V.hV.prototype={
$1:function(a){P.ly(C.n,new V.hU(this.a))}}
V.hU.prototype={
$0:function(){var u=C.d.aj(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
V.hW.prototype={
$1:function(a){return a.a===this.a}}
N.k6.prototype={
$0:function(){this.a.saa(0,F.kR(1,null,null,1))}}
N.k7.prototype={
$0:function(){this.a.saa(0,F.kS(1,!0,!0,40,1))}}
N.k8.prototype={
$0:function(){this.a.saa(0,F.kS(1,!0,!1,40,0))}}
N.k9.prototype={
$0:function(){this.a.saa(0,F.p2(6,6))}}
N.ka.prototype={
$0:function(){this.a.saa(0,F.mg())}}
N.kb.prototype={
$0:function(){this.a.saa(0,F.oW())}}
N.kc.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.a,r=[P.h]
u.cT("Vertex Shader","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
t=t.a
u.cT("Fragment Shader","glsl",0,H.b((t==null?null:t.d).split("\n"),r))}};(function aliases(){var u=J.a.prototype
u.dU=u.i
u=J.d4.prototype
u.dW=u.i
u=P.j.prototype
u.dV=u.bs
u=W.N.prototype
u.bu=u.ad
u=W.ec.prototype
u.dX=u.ao
u=K.d1.prototype
u.dT=u.aA
u.cj=u.i
u=O.da.prototype
u.ck=u.aw
u=O.av.prototype
u.cl=u.aw})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installStaticTearOff,q=hunkHelpers.installInstanceTearOff,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u,n=hunkHelpers._instance_1u,m=hunkHelpers._instance_0i
u(J,"o9","n_",20)
t(P,"oE","nI",8)
t(P,"oF","nJ",8)
t(P,"oG","nK",8)
s(P,"m3","oC",10)
r(W,"oQ",4,null,["$4"],["nL"],15,0)
r(W,"oR",4,null,["$4"],["nM"],15,0)
var l
q(l=E.aM.prototype,"gdt",0,0,null,["$1","$0"],["du","hF"],0,0)
q(l,"gdv",0,0,null,["$1","$0"],["dw","hG"],0,0)
q(l,"gdr",0,0,null,["$1","$0"],["ds","hE"],0,0)
q(l,"gdn",0,0,null,["$1","$0"],["dq","hB"],0,0)
p(l,"ghz","hA",4)
p(l,"ghC","hD",4)
q(l=E.dw.prototype,"gcm",0,0,null,["$1","$0"],["co","cn"],0,0)
o(l,"ghU","dF",10)
n(l=X.dF.prototype,"gf_","f0",5)
n(l,"geM","eN",5)
n(l,"geU","eV",2)
n(l,"gf3","f4",11)
n(l,"gf1","f2",11)
n(l,"gf7","f8",2)
n(l,"gfb","fc",2)
n(l,"geY","eZ",2)
n(l,"gf9","fa",2)
n(l,"geW","eX",2)
n(l,"gfd","fe",18)
n(l,"gff","fg",5)
n(l,"gft","fu",6)
n(l,"gfo","fp",6)
n(l,"gfq","fs",6)
q(l=D.d6.prototype,"gcF",0,0,null,["$1","$0"],["cG","f5"],0,0)
n(l,"gfi","fj",19)
p(l,"geG","eH",12)
p(l,"gfm","fn",12)
q(D.bA.prototype,"geO",0,0,null,["$1","$0"],["Z","eP"],0,0)
m(V.U.prototype,"gl","b0",7)
m(V.z.prototype,"gl","b0",7)
m(V.cp.prototype,"gl","b0",7)
q(l=U.c_.prototype,"gbb",0,0,null,["$1","$0"],["W","al"],0,0)
p(l,"ge5","e6",13)
p(l,"gfk","fl",13)
q(l=U.dG.prototype,"gbb",0,0,null,["$1","$0"],["W","al"],0,0)
n(l,"gez","eA",1)
n(l,"geB","eC",1)
n(l,"geD","eE",1)
n(l,"geu","ev",1)
n(l,"gew","ex",1)
n(l,"gfQ","fR",1)
n(l,"gfO","fP",1)
n(l,"gfM","fN",1)
q(l=M.cZ.prototype,"gam",0,0,null,["$1","$0"],["au","e7"],0,0)
p(l,"geQ","eR",4)
p(l,"geS","eT",4)
q(l=O.d9.prototype,"ge9",0,0,null,["$1","$0"],["ab","ea"],0,0)
q(l,"gfC",0,0,null,["$1","$0"],["cH","fD"],0,0)
p(l,"geI","eJ",14)
p(l,"geK","eL",14)
q(X.dj.prototype,"gcp",0,0,null,["$1","$0"],["aF","ed"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.a1,null)
s(P.a1,[H.ky,J.a,J.a4,P.e_,P.j,H.b5,P.fF,H.d_,H.iz,H.f1,H.il,P.bp,H.bV,H.eh,P.a0,H.fO,H.fQ,H.fI,P.en,P.bG,P.bH,P.dJ,P.dt,P.i3,P.dx,P.jJ,P.jl,P.jf,P.dZ,P.x,P.jB,P.fX,P.eZ,P.fB,P.jH,P.jG,P.aG,P.ab,P.aa,P.b0,P.hw,P.dr,P.dS,P.fu,P.fw,P.o,P.O,P.b9,P.h,P.Q,P.bI,P.iB,P.jo,W.f5,W.cs,W.K,W.dh,W.ec,W.jv,W.d0,W.aQ,W.jk,W.eu,P.jq,P.jg,P.bC,K.aJ,K.d1,K.b6,K.hF,K.hO,L.ds,L.dy,L.dz,L.ie,O.b_,O.c6,E.eV,E.aM,E.bn,E.bw,E.dR,E.hG,E.dw,Z.dI,Z.iZ,Z.cQ,Z.br,Z.bf,D.eY,D.bq,D.Y,X.cR,X.d5,X.fL,X.fU,X.bv,X.hk,X.ih,X.dF,D.eS,D.fb,D.a5,D.hA,D.bA,V.W,V.as,V.fl,V.db,V.aO,V.a7,V.P,V.bb,V.dm,V.U,V.z,V.cp,U.dG,M.cZ,A.cN,A.eN,A.a_,A.cO,A.cW,A.dk,A.dq,A.h2,A.cj,A.ck,A.cm,A.cn,A.dC,A.iu,F.b1,F.fo,F.c3,F.fN,F.cb,F.hP,F.hQ,F.hR,F.hS,F.be,F.iN,F.iO,F.iR,F.iT,F.iU,F.iV,O.dv,O.da,O.h3,X.ko,X.i7,X.dj,V.cS,V.hD,V.hT])
s(J.a,[J.fG,J.d3,J.d4,J.b2,J.c2,J.b3,H.c8,H.b8,W.f,W.eJ,W.bl,W.at,W.H,W.dL,W.af,W.fa,W.fc,W.dN,W.cY,W.dP,W.fe,W.i,W.dT,W.au,W.fz,W.dV,W.c1,W.fT,W.he,W.e0,W.e1,W.aw,W.e2,W.e5,W.ay,W.e9,W.eb,W.aA,W.ed,W.aB,W.ei,W.an,W.el,W.id,W.aD,W.eo,W.ij,W.iG,W.ev,W.ex,W.ez,W.eB,W.eD,P.aN,P.dX,P.aR,P.e7,P.hC,P.ej,P.aT,P.eq,P.eO,P.dK,P.ef])
s(J.d4,[J.hx,J.bF,J.b4])
t(J.kx,J.b2)
s(J.c2,[J.d2,J.fH])
t(P.fS,P.e_)
s(P.fS,[H.dD,W.j5,W.a2,P.fq])
t(H.m,H.dD)
s(P.j,[H.q,H.c5,H.cq,P.fD])
s(H.q,[H.d7,H.fP])
t(H.fh,H.c5)
s(P.fF,[H.fY,H.j_])
t(H.fZ,H.d7)
t(H.f2,H.f1)
s(P.bp,[H.ht,H.fK,H.iy,H.eX,H.hM,P.di,P.aj,P.iA,P.iw,P.cf,P.f0,P.f8])
s(H.bV,[H.kj,H.i8,H.fJ,H.k1,H.k2,H.k3,P.j1,P.j0,P.j2,P.j3,P.jA,P.jz,P.jS,P.ji,P.jj,P.fR,P.fW,P.ff,P.fg,P.iF,P.iC,P.iD,P.iE,P.jC,P.jD,P.jF,P.jE,P.jN,P.jM,P.jO,P.jP,W.fi,W.hg,W.hi,W.hL,W.i2,W.ja,W.hr,W.hq,W.jm,W.jn,W.jy,W.jI,P.js,P.jt,P.jT,P.fr,P.fs,P.eQ,E.hH,E.hI,E.hJ,E.ic,D.fm,D.fn,F.jK,F.jU,F.jW,F.jX,F.jY,F.kf,F.kg,F.ki,F.k5,F.jV,F.iX,F.iW,F.iP,F.iQ,O.h6,O.h7,O.h8,O.h9,O.ha,O.hb,O.hc,O.hd,V.ke,V.hE,V.hV,V.hU,V.hW,N.k6,N.k7,N.k8,N.k9,N.ka,N.kb,N.kc])
s(H.i8,[H.i0,H.bT])
t(P.fV,P.a0)
s(P.fV,[H.I,W.j4])
t(H.dd,H.b8)
s(H.dd,[H.cu,H.cw])
t(H.cv,H.cu)
t(H.c9,H.cv)
t(H.cx,H.cw)
t(H.de,H.cx)
s(H.de,[H.hl,H.hm,H.hn,H.ho,H.hp,H.df,H.ca])
t(P.jw,P.fD)
t(P.jh,P.jJ)
t(P.je,P.jl)
t(P.es,P.fX)
t(P.dE,P.es)
s(P.eZ,[P.eT,P.fj])
t(P.f3,P.i3)
s(P.f3,[P.eU,P.fA,P.iJ,P.iI])
t(P.iH,P.fj)
s(P.aa,[P.J,P.w])
s(P.aj,[P.bz,P.fC])
t(P.j7,P.bI)
s(W.f,[W.D,W.fp,W.c7,W.az,W.cy,W.aC,W.ao,W.cA,W.iY,W.cr,P.eR,P.bk])
s(W.D,[W.N,W.aZ])
s(W.N,[W.n,P.k])
s(W.n,[W.eK,W.eL,W.bm,W.bo,W.ak,W.ft,W.hN,W.du,W.i5,W.i6,W.ch])
t(W.f4,W.at)
t(W.bW,W.dL)
s(W.af,[W.f6,W.f7])
t(W.dO,W.dN)
t(W.cX,W.dO)
t(W.dQ,W.dP)
t(W.fd,W.dQ)
t(W.al,W.bl)
t(W.dU,W.dT)
t(W.bZ,W.dU)
t(W.dW,W.dV)
t(W.c0,W.dW)
t(W.bc,W.i)
s(W.bc,[W.bu,W.ax,W.bB])
t(W.hf,W.e0)
t(W.hh,W.e1)
t(W.e3,W.e2)
t(W.hj,W.e3)
t(W.e6,W.e5)
t(W.dg,W.e6)
t(W.ea,W.e9)
t(W.hz,W.ea)
t(W.hK,W.eb)
t(W.cz,W.cy)
t(W.hY,W.cz)
t(W.ee,W.ed)
t(W.hZ,W.ee)
t(W.i1,W.ei)
t(W.em,W.el)
t(W.i9,W.em)
t(W.cB,W.cA)
t(W.ia,W.cB)
t(W.ep,W.eo)
t(W.ii,W.ep)
t(W.bg,W.ax)
t(W.ew,W.ev)
t(W.j6,W.ew)
t(W.dM,W.cY)
t(W.ey,W.ex)
t(W.jb,W.ey)
t(W.eA,W.ez)
t(W.e4,W.eA)
t(W.eC,W.eB)
t(W.jp,W.eC)
t(W.eE,W.eD)
t(W.ju,W.eE)
t(W.j8,W.j4)
t(W.j9,P.dt)
t(W.jx,W.ec)
t(P.jr,P.jq)
t(P.a8,P.jg)
t(P.dY,P.dX)
t(P.fM,P.dY)
t(P.e8,P.e7)
t(P.hu,P.e8)
t(P.ce,P.k)
t(P.ek,P.ej)
t(P.i4,P.ek)
t(P.er,P.eq)
t(P.ik,P.er)
t(P.eP,P.dK)
t(P.hv,P.bk)
t(P.eg,P.ef)
t(P.i_,P.eg)
s(K.d1,[K.a6,L.dB])
s(E.eV,[Z.cP,A.dn,T.ib])
s(D.Y,[D.bs,D.bt,D.C,X.hB])
s(X.hB,[X.d8,X.b7,X.dA])
s(O.b_,[D.d6,U.c_])
s(D.eY,[U.f_,U.am])
t(U.cT,U.am)
t(A.h_,A.dn)
s(A.dC,[A.bd,A.ir,A.is,A.it,A.ip,A.V,A.iq,A.G,A.ci,A.iv,A.cl,A.ac,A.bD,A.bE])
t(F.hX,F.fo)
t(F.io,F.fN)
t(F.iS,F.iT)
t(F.hs,F.iU)
t(O.d9,O.dv)
s(O.da,[O.h0,O.h1,O.av])
s(O.av,[O.h4,O.h5])
t(X.fv,X.i7)
s(V.cS,[V.f9,V.fx,V.fy,V.hy])
u(H.dD,H.iz)
u(H.cu,P.x)
u(H.cv,H.d_)
u(H.cw,P.x)
u(H.cx,H.d_)
u(P.e_,P.x)
u(P.es,P.jB)
u(W.dL,W.f5)
u(W.dN,P.x)
u(W.dO,W.K)
u(W.dP,P.x)
u(W.dQ,W.K)
u(W.dT,P.x)
u(W.dU,W.K)
u(W.dV,P.x)
u(W.dW,W.K)
u(W.e0,P.a0)
u(W.e1,P.a0)
u(W.e2,P.x)
u(W.e3,W.K)
u(W.e5,P.x)
u(W.e6,W.K)
u(W.e9,P.x)
u(W.ea,W.K)
u(W.eb,P.a0)
u(W.cy,P.x)
u(W.cz,W.K)
u(W.ed,P.x)
u(W.ee,W.K)
u(W.ei,P.a0)
u(W.el,P.x)
u(W.em,W.K)
u(W.cA,P.x)
u(W.cB,W.K)
u(W.eo,P.x)
u(W.ep,W.K)
u(W.ev,P.x)
u(W.ew,W.K)
u(W.ex,P.x)
u(W.ey,W.K)
u(W.ez,P.x)
u(W.eA,W.K)
u(W.eB,P.x)
u(W.eC,W.K)
u(W.eD,P.x)
u(W.eE,W.K)
u(P.dX,P.x)
u(P.dY,W.K)
u(P.e7,P.x)
u(P.e8,W.K)
u(P.ej,P.x)
u(P.ek,W.K)
u(P.eq,P.x)
u(P.er,W.K)
u(P.dK,P.a0)
u(P.ef,P.x)
u(P.eg,W.K)})()
var v={mangledGlobalNames:{w:"int",J:"double",aa:"num",h:"String",aG:"bool",b9:"Null",o:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.Y]},{func:1,ret:-1,args:[D.Y]},{func:1,ret:-1,args:[W.ax]},{func:1,ret:P.b9,args:[,,]},{func:1,ret:-1,args:[P.w,[P.j,E.aM]]},{func:1,ret:-1,args:[W.i]},{func:1,ret:-1,args:[W.bB]},{func:1,ret:P.J},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bu]},{func:1,ret:-1,args:[P.w,[P.j,D.a5]]},{func:1,ret:-1,args:[P.w,[P.j,U.am]]},{func:1,ret:-1,args:[P.w,[P.j,V.aO]]},{func:1,ret:P.aG,args:[W.N,P.h,P.h,W.cs]},{func:1,ret:P.b9,args:[,]},{func:1,ret:P.bC,args:[,,]},{func:1,ret:-1,args:[W.bg]},{func:1,ret:P.aG,args:[[P.j,D.a5]]},{func:1,ret:P.w,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.r=W.bm.prototype
C.m=W.bo.prototype
C.S=W.ak.prototype
C.V=J.a.prototype
C.b=J.b2.prototype
C.c=J.d2.prototype
C.i=J.d3.prototype
C.d=J.c2.prototype
C.a=J.b3.prototype
C.W=J.b4.prototype
C.D=J.hx.prototype
C.E=W.du.prototype
C.q=J.bF.prototype
C.F=W.bg.prototype
C.G=W.cr.prototype
C.H=new E.bn("Browser.chrome")
C.t=new E.bn("Browser.firefox")
C.u=new E.bn("Browser.edge")
C.I=new E.bn("Browser.other")
C.a5=new P.eU()
C.J=new P.eT()
C.v=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.K=function() {
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
C.P=function(getTagFallback) {
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
C.L=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.M=function(hooks) {
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
C.O=function(hooks) {
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
C.N=function(hooks) {
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

C.Q=new P.hw()
C.e=new P.iH()
C.R=new P.iJ()
C.f=new P.jh()
C.n=new P.b0(0)
C.T=new P.b0(5e6)
C.U=new P.fB("element",!1,!1,!1)
C.x=H.b(u([127,2047,65535,1114111]),[P.w])
C.j=H.b(u([0,0,32776,33792,1,10240,0,0]),[P.w])
C.X=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.k=H.b(u([0,0,65490,45055,65535,34815,65534,18431]),[P.w])
C.l=H.b(u([0,0,26624,1023,65534,2047,65534,2047]),[P.w])
C.Y=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.y=H.b(u([]),[P.h])
C.Z=H.b(u([0,0,32722,12287,65534,34815,65534,18431]),[P.w])
C.z=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.w])
C.h=H.b(u([0,0,24576,1023,65534,34815,65534,18431]),[P.w])
C.A=H.b(u([0,0,32754,11263,65534,34815,65534,18431]),[P.w])
C.a_=H.b(u([0,0,32722,12287,65535,34815,65534,18431]),[P.w])
C.B=H.b(u([0,0,65490,12287,65535,34815,65534,18431]),[P.w])
C.o=H.b(u(["bind","if","ref","repeat","syntax"]),[P.h])
C.p=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])
C.a0=new H.f2(0,{},C.y,[P.h,P.h])
C.a1=new E.bw("OperatingSystem.windows")
C.C=new E.bw("OperatingSystem.mac")
C.a2=new E.bw("OperatingSystem.linux")
C.a3=new E.bw("OperatingSystem.other")
C.a4=new P.bG(null,2)})();(function staticFields(){$.ar=0
$.bU=null
$.l7=null
$.m8=null
$.m2=null
$.mc=null
$.jZ=null
$.k4=null
$.kV=null
$.bL=null
$.cE=null
$.cF=null
$.kO=!1
$.ap=C.f
$.a9=[]
$.aL=null
$.kr=null
$.le=null
$.ld=null
$.ct=P.kA(P.h,P.fw)
$.fk=null
$.ll=null
$.lo=null
$.ag=null
$.lu=null
$.lG=null
$.lJ=null
$.lI=null
$.iK=null
$.iL=null
$.iM=null
$.lH=null
$.lM=null
$.ln=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"p9","mi",function(){return H.m7("_$dart_dartClosure")})
u($,"pa","l_",function(){return H.m7("_$dart_js")})
u($,"pb","mj",function(){return H.aE(H.im({
toString:function(){return"$receiver$"}}))})
u($,"pc","mk",function(){return H.aE(H.im({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"pd","ml",function(){return H.aE(H.im(null))})
u($,"pe","mm",function(){return H.aE(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"ph","mp",function(){return H.aE(H.im(void 0))})
u($,"pi","mq",function(){return H.aE(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pg","mo",function(){return H.aE(H.lA(null))})
u($,"pf","mn",function(){return H.aE(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"pk","ms",function(){return H.aE(H.lA(void 0))})
u($,"pj","mr",function(){return H.aE(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"py","l0",function(){return P.nH()})
u($,"pl","mt",function(){return P.nD()})
u($,"pz","mx",function(){return H.nb(H.bK(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.w])))})
u($,"pC","mz",function(){return P.np("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"pD","mA",function(){return P.o7()})
u($,"pA","my",function(){return P.lg(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)})
u($,"ps","mw",function(){return Z.ah(0)})
u($,"pm","mu",function(){return Z.ah(511)})
u($,"pu","aY",function(){return Z.ah(1)})
u($,"pt","aX",function(){return Z.ah(2)})
u($,"po","aW",function(){return Z.ah(4)})
u($,"pv","bi",function(){return Z.ah(8)})
u($,"pw","bj",function(){return Z.ah(16)})
u($,"pp","cJ",function(){return Z.ah(32)})
u($,"pq","cK",function(){return Z.ah(64)})
u($,"pr","mv",function(){return Z.ah(96)})
u($,"px","bR",function(){return Z.ah(128)})
u($,"pn","aV",function(){return Z.ah(256)})
u($,"p8","mh",function(){return new V.fl(1e-9)})
u($,"p7","A",function(){return $.mh()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGL2RenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.c8,DataView:H.b8,ArrayBufferView:H.b8,Float32Array:H.c9,Float64Array:H.c9,Int16Array:H.hl,Int32Array:H.hm,Int8Array:H.hn,Uint16Array:H.ho,Uint32Array:H.hp,Uint8ClampedArray:H.df,CanvasPixelArray:H.df,Uint8Array:H.ca,HTMLAudioElement:W.n,HTMLBRElement:W.n,HTMLBaseElement:W.n,HTMLButtonElement:W.n,HTMLContentElement:W.n,HTMLDListElement:W.n,HTMLDataElement:W.n,HTMLDataListElement:W.n,HTMLDetailsElement:W.n,HTMLDialogElement:W.n,HTMLEmbedElement:W.n,HTMLFieldSetElement:W.n,HTMLHRElement:W.n,HTMLHeadElement:W.n,HTMLHeadingElement:W.n,HTMLHtmlElement:W.n,HTMLIFrameElement:W.n,HTMLImageElement:W.n,HTMLInputElement:W.n,HTMLLIElement:W.n,HTMLLabelElement:W.n,HTMLLegendElement:W.n,HTMLLinkElement:W.n,HTMLMapElement:W.n,HTMLMediaElement:W.n,HTMLMenuElement:W.n,HTMLMetaElement:W.n,HTMLMeterElement:W.n,HTMLModElement:W.n,HTMLOListElement:W.n,HTMLObjectElement:W.n,HTMLOptGroupElement:W.n,HTMLOptionElement:W.n,HTMLOutputElement:W.n,HTMLParagraphElement:W.n,HTMLParamElement:W.n,HTMLPictureElement:W.n,HTMLPreElement:W.n,HTMLProgressElement:W.n,HTMLQuoteElement:W.n,HTMLScriptElement:W.n,HTMLShadowElement:W.n,HTMLSlotElement:W.n,HTMLSourceElement:W.n,HTMLSpanElement:W.n,HTMLStyleElement:W.n,HTMLTableCaptionElement:W.n,HTMLTableCellElement:W.n,HTMLTableDataCellElement:W.n,HTMLTableHeaderCellElement:W.n,HTMLTableColElement:W.n,HTMLTextAreaElement:W.n,HTMLTimeElement:W.n,HTMLTitleElement:W.n,HTMLTrackElement:W.n,HTMLUListElement:W.n,HTMLUnknownElement:W.n,HTMLVideoElement:W.n,HTMLDirectoryElement:W.n,HTMLFontElement:W.n,HTMLFrameElement:W.n,HTMLFrameSetElement:W.n,HTMLMarqueeElement:W.n,HTMLElement:W.n,AccessibleNodeList:W.eJ,HTMLAnchorElement:W.eK,HTMLAreaElement:W.eL,Blob:W.bl,HTMLBodyElement:W.bm,HTMLCanvasElement:W.bo,CDATASection:W.aZ,CharacterData:W.aZ,Comment:W.aZ,ProcessingInstruction:W.aZ,Text:W.aZ,CSSPerspective:W.f4,CSSCharsetRule:W.H,CSSConditionRule:W.H,CSSFontFaceRule:W.H,CSSGroupingRule:W.H,CSSImportRule:W.H,CSSKeyframeRule:W.H,MozCSSKeyframeRule:W.H,WebKitCSSKeyframeRule:W.H,CSSKeyframesRule:W.H,MozCSSKeyframesRule:W.H,WebKitCSSKeyframesRule:W.H,CSSMediaRule:W.H,CSSNamespaceRule:W.H,CSSPageRule:W.H,CSSRule:W.H,CSSStyleRule:W.H,CSSSupportsRule:W.H,CSSViewportRule:W.H,CSSStyleDeclaration:W.bW,MSStyleCSSProperties:W.bW,CSS2Properties:W.bW,CSSImageValue:W.af,CSSKeywordValue:W.af,CSSNumericValue:W.af,CSSPositionValue:W.af,CSSResourceValue:W.af,CSSUnitValue:W.af,CSSURLImageValue:W.af,CSSStyleValue:W.af,CSSMatrixComponent:W.at,CSSRotation:W.at,CSSScale:W.at,CSSSkew:W.at,CSSTranslation:W.at,CSSTransformComponent:W.at,CSSTransformValue:W.f6,CSSUnparsedValue:W.f7,DataTransferItemList:W.fa,HTMLDivElement:W.ak,DOMException:W.fc,ClientRectList:W.cX,DOMRectList:W.cX,DOMRectReadOnly:W.cY,DOMStringList:W.fd,DOMTokenList:W.fe,Element:W.N,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.al,FileList:W.bZ,FileWriter:W.fp,HTMLFormElement:W.ft,Gamepad:W.au,History:W.fz,HTMLCollection:W.c0,HTMLFormControlsCollection:W.c0,HTMLOptionsCollection:W.c0,ImageData:W.c1,KeyboardEvent:W.bu,Location:W.fT,MediaList:W.he,MessagePort:W.c7,MIDIInputMap:W.hf,MIDIOutputMap:W.hh,MimeType:W.aw,MimeTypeArray:W.hj,PointerEvent:W.ax,MouseEvent:W.ax,DragEvent:W.ax,Document:W.D,DocumentFragment:W.D,HTMLDocument:W.D,ShadowRoot:W.D,XMLDocument:W.D,Attr:W.D,DocumentType:W.D,Node:W.D,NodeList:W.dg,RadioNodeList:W.dg,Plugin:W.ay,PluginArray:W.hz,RTCStatsReport:W.hK,HTMLSelectElement:W.hN,SourceBuffer:W.az,SourceBufferList:W.hY,SpeechGrammar:W.aA,SpeechGrammarList:W.hZ,SpeechRecognitionResult:W.aB,Storage:W.i1,CSSStyleSheet:W.an,StyleSheet:W.an,HTMLTableElement:W.du,HTMLTableRowElement:W.i5,HTMLTableSectionElement:W.i6,HTMLTemplateElement:W.ch,TextTrack:W.aC,TextTrackCue:W.ao,VTTCue:W.ao,TextTrackCueList:W.i9,TextTrackList:W.ia,TimeRanges:W.id,Touch:W.aD,TouchEvent:W.bB,TouchList:W.ii,TrackDefaultList:W.ij,CompositionEvent:W.bc,FocusEvent:W.bc,TextEvent:W.bc,UIEvent:W.bc,URL:W.iG,VideoTrackList:W.iY,WheelEvent:W.bg,Window:W.cr,DOMWindow:W.cr,CSSRuleList:W.j6,ClientRect:W.dM,DOMRect:W.dM,GamepadList:W.jb,NamedNodeMap:W.e4,MozNamedAttrMap:W.e4,SpeechRecognitionResultList:W.jp,StyleSheetList:W.ju,SVGLength:P.aN,SVGLengthList:P.fM,SVGNumber:P.aR,SVGNumberList:P.hu,SVGPointList:P.hC,SVGScriptElement:P.ce,SVGStringList:P.i4,SVGAElement:P.k,SVGAnimateElement:P.k,SVGAnimateMotionElement:P.k,SVGAnimateTransformElement:P.k,SVGAnimationElement:P.k,SVGCircleElement:P.k,SVGClipPathElement:P.k,SVGDefsElement:P.k,SVGDescElement:P.k,SVGDiscardElement:P.k,SVGEllipseElement:P.k,SVGFEBlendElement:P.k,SVGFEColorMatrixElement:P.k,SVGFEComponentTransferElement:P.k,SVGFECompositeElement:P.k,SVGFEConvolveMatrixElement:P.k,SVGFEDiffuseLightingElement:P.k,SVGFEDisplacementMapElement:P.k,SVGFEDistantLightElement:P.k,SVGFEFloodElement:P.k,SVGFEFuncAElement:P.k,SVGFEFuncBElement:P.k,SVGFEFuncGElement:P.k,SVGFEFuncRElement:P.k,SVGFEGaussianBlurElement:P.k,SVGFEImageElement:P.k,SVGFEMergeElement:P.k,SVGFEMergeNodeElement:P.k,SVGFEMorphologyElement:P.k,SVGFEOffsetElement:P.k,SVGFEPointLightElement:P.k,SVGFESpecularLightingElement:P.k,SVGFESpotLightElement:P.k,SVGFETileElement:P.k,SVGFETurbulenceElement:P.k,SVGFilterElement:P.k,SVGForeignObjectElement:P.k,SVGGElement:P.k,SVGGeometryElement:P.k,SVGGraphicsElement:P.k,SVGImageElement:P.k,SVGLineElement:P.k,SVGLinearGradientElement:P.k,SVGMarkerElement:P.k,SVGMaskElement:P.k,SVGMetadataElement:P.k,SVGPathElement:P.k,SVGPatternElement:P.k,SVGPolygonElement:P.k,SVGPolylineElement:P.k,SVGRadialGradientElement:P.k,SVGRectElement:P.k,SVGSetElement:P.k,SVGStopElement:P.k,SVGStyleElement:P.k,SVGSVGElement:P.k,SVGSwitchElement:P.k,SVGSymbolElement:P.k,SVGTSpanElement:P.k,SVGTextContentElement:P.k,SVGTextElement:P.k,SVGTextPathElement:P.k,SVGTextPositioningElement:P.k,SVGTitleElement:P.k,SVGUseElement:P.k,SVGViewElement:P.k,SVGGradientElement:P.k,SVGComponentTransferFunctionElement:P.k,SVGFEDropShadowElement:P.k,SVGMPathElement:P.k,SVGElement:P.k,SVGTransform:P.aT,SVGTransformList:P.ik,AudioBuffer:P.eO,AudioParamMap:P.eP,AudioTrackList:P.eR,AudioContext:P.bk,webkitAudioContext:P.bk,BaseAudioContext:P.bk,OfflineAudioContext:P.hv,SQLResultSetRowList:P.i_})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,SQLResultSetRowList:true})
H.dd.$nativeSuperclassTag="ArrayBufferView"
H.cu.$nativeSuperclassTag="ArrayBufferView"
H.cv.$nativeSuperclassTag="ArrayBufferView"
H.c9.$nativeSuperclassTag="ArrayBufferView"
H.cw.$nativeSuperclassTag="ArrayBufferView"
H.cx.$nativeSuperclassTag="ArrayBufferView"
H.de.$nativeSuperclassTag="ArrayBufferView"
W.cy.$nativeSuperclassTag="EventTarget"
W.cz.$nativeSuperclassTag="EventTarget"
W.cA.$nativeSuperclassTag="EventTarget"
W.cB.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(N.ma,[])
else N.ma([])})})()
//# sourceMappingURL=test.dart.js.map
