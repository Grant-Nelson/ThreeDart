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
a[c]=function(){a[c]=function(){H.p7(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kU"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kU"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kU(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={kB:function kB(){},
k2:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
na:function(a,b,c,d){if(!!J.S(a).$iq)return new H.fi(a,b,[c,d])
return new H.c5(a,b,[c,d])},
fF:function(){return new P.cg("No element")},
n_:function(){return new P.cg("Too many elements")},
ny:function(a,b){var u=J.af(a)
if(typeof u!=="number")return u.L()
H.dp(a,0,u-1,b)},
dp:function(a,b,c,d){if(c-b<=32)H.nx(a,b,c,d)
else H.nw(a,b,c,d)},
nx:function(a,b,c,d){var u,t,s,r,q,p
for(u=b+1,t=J.aq(a);u<=c;++u){s=t.h(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.h(a,r-1),s)
if(typeof q!=="number")return q.a1()
q=q>0}else q=!1
if(!q)break
p=r-1
t.l(a,r,t.h(a,p))
r=p}t.l(a,r,s)}},
nw:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j=C.c.a3(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.a3(a4+a5,2),f=g-j,e=g+j,d=J.aq(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
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
a0=u}d.l(a3,i,c)
d.l(a3,g,a)
d.l(a3,h,a1)
d.l(a3,f,d.h(a3,a4))
d.l(a3,e,d.h(a3,a5))
t=a4+1
s=a5-1
if(J.F(a6.$2(b,a0),0)){for(r=t;r<=s;++r){q=d.h(a3,r)
p=a6.$2(q,b)
if(p===0)continue
if(typeof p!=="number")return p.P()
if(p<0){if(r!==t){d.l(a3,r,d.h(a3,t))
d.l(a3,t,q)}++t}else for(;!0;){p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.a1()
if(p>0){--s
continue}else{o=s-1
if(p<0){d.l(a3,r,d.h(a3,t))
n=t+1
d.l(a3,t,d.h(a3,s))
d.l(a3,s,q)
s=o
t=n
break}else{d.l(a3,r,d.h(a3,s))
d.l(a3,s,q)
s=o
break}}}}m=!0}else{for(r=t;r<=s;++r){q=d.h(a3,r)
l=a6.$2(q,b)
if(typeof l!=="number")return l.P()
if(l<0){if(r!==t){d.l(a3,r,d.h(a3,t))
d.l(a3,t,q)}++t}else{k=a6.$2(q,a0)
if(typeof k!=="number")return k.a1()
if(k>0)for(;!0;){p=a6.$2(d.h(a3,s),a0)
if(typeof p!=="number")return p.a1()
if(p>0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.P()
o=s-1
if(p<0){d.l(a3,r,d.h(a3,t))
n=t+1
d.l(a3,t,d.h(a3,s))
d.l(a3,s,q)
t=n}else{d.l(a3,r,d.h(a3,s))
d.l(a3,s,q)}s=o
break}}}}m=!1}a2=t-1
d.l(a3,a4,d.h(a3,a2))
d.l(a3,a2,b)
a2=s+1
d.l(a3,a5,d.h(a3,a2))
d.l(a3,a2,a0)
H.dp(a3,a4,t-2,a6)
H.dp(a3,s+2,a5,a6)
if(m)return
if(t<i&&s>h){for(;J.F(a6.$2(d.h(a3,t),b),0);)++t
for(;J.F(a6.$2(d.h(a3,s),a0),0);)--s
for(r=t;r<=s;++r){q=d.h(a3,r)
if(a6.$2(q,b)===0){if(r!==t){d.l(a3,r,d.h(a3,t))
d.l(a3,t,q)}++t}else if(a6.$2(q,a0)===0)for(;!0;)if(a6.$2(d.h(a3,s),a0)===0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.P()
o=s-1
if(p<0){d.l(a3,r,d.h(a3,t))
n=t+1
d.l(a3,t,d.h(a3,s))
d.l(a3,s,q)
t=n}else{d.l(a3,r,d.h(a3,s))
d.l(a3,s,q)}s=o
break}}H.dp(a3,t,s,a6)}else H.dp(a3,t,s,a6)},
m:function m(a){this.a=a},
q:function q(){},
d6:function d6(){},
b7:function b7(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c5:function c5(a,b,c){this.a=a
this.b=b
this.$ti=c},
fi:function fi(a,b,c){this.a=a
this.b=b
this.$ti=c},
fZ:function fZ(a,b){this.a=null
this.b=a
this.c=b},
h_:function h_(a,b,c){this.a=a
this.b=b
this.$ti=c},
cq:function cq(a,b,c){this.a=a
this.b=b
this.$ti=c},
j1:function j1(a,b){this.a=a
this.b=b},
cZ:function cZ(){},
iB:function iB(){},
dD:function dD(){},
mS:function(){throw H.c(P.y("Cannot modify unmodifiable Map"))},
cI:function(a){var u,t=H.p8(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
oS:function(a){return v.types[a]},
mb:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.S(a).$iB},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a3(a)
if(typeof u!=="string")throw H.c(H.aj(a))
return u},
cd:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
no:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
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
ce:function(a){return H.nf(a)+H.lZ(H.cH(a),0,null)},
nf:function(a){var u,t,s,r,q,p,o,n=J.S(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.V||!!n.$ibF){r=C.v(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cI(t.length>1&&C.a.E(t,0)===36?C.a.a5(t,1):t)},
ng:function(){if(!!self.location)return self.location.href
return},
lt:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
np:function(a){var u,t,s,r=H.b([],[P.w])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.l)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aj(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.aN(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.c(H.aj(s))}return H.lt(r)},
lu:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aj(s))
if(s<0)throw H.c(H.aj(s))
if(s>65535)return H.np(a)}return H.lt(a)},
nq:function(a,b,c){var u,t,s,r
if(typeof c!=="number")return c.ie()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
if(s<c)r=s
else r=c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
bz:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.aN(u,10))>>>0,56320|u&1023)}}throw H.c(P.X(a,0,1114111,null,null))},
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
r:function(a){throw H.c(H.aj(a))},
d:function(a,b){if(a==null)J.af(a)
throw H.c(H.bO(a,b))},
bO:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ak(!0,b,s,null)
u=J.af(a)
if(!(b<0)){if(typeof u!=="number")return H.r(u)
t=b>=u}else t=!0
if(t)return P.N(b,a,s,null,u)
return P.dk(b,s)},
oM:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bA(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bA(a,c,!0,b,"end",u)
return new P.ak(!0,b,"end",null)},
aj:function(a){return new P.ak(!0,a,null,null)},
c:function(a){var u
if(a==null)a=new P.dh()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.mh})
u.name=""}else u.toString=H.mh
return u},
mh:function(){return J.a3(this.dartException)},
p:function(a){throw H.c(a)},
l:function(a){throw H.c(P.aM(a))},
aG:function(a){var u,t,s,r,q,p
a=H.mf(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.io(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
ip:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
lD:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lq:function(a,b){return new H.hu(a,b==null?null:b.method)},
kC:function(a,b){var u=b==null,t=u?null:b.method
return new H.fL(a,t,u?null:b.receiver)},
ae:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.kl(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.aN(t,16)&8191)===10)switch(s){case 438:return f.$1(H.kC(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.lq(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.ml()
q=$.mm()
p=$.mn()
o=$.mo()
n=$.mr()
m=$.ms()
l=$.mq()
$.mp()
k=$.mu()
j=$.mt()
i=r.ad(u)
if(i!=null)return f.$1(H.kC(u,i))
else{i=q.ad(u)
if(i!=null){i.method="call"
return f.$1(H.kC(u,i))}else{i=p.ad(u)
if(i==null){i=o.ad(u)
if(i==null){i=n.ad(u)
if(i==null){i=m.ad(u)
if(i==null){i=l.ad(u)
if(i==null){i=o.ad(u)
if(i==null){i=k.ad(u)
if(i==null){i=j.ad(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.lq(u,i))}}return f.$1(new H.iA(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dr()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.ak(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dr()
return a},
kX:function(a){var u
if(a==null)return new H.ej(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.ej(a)},
oQ:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.l(0,a[u],a[t])}return b},
oY:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.v("Unsupported number of arguments for wrapped closure"))},
bN:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.oY)
a.$identity=u
return u},
mR:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.i2().constructor.prototype):Object.create(new H.bT(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ar
if(typeof t!=="number")return t.A()
$.ar=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.ld(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.mN(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.ld(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
mN:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.oS,a)
if(typeof a=="function")if(b)return a
else{u=c?H.lb:H.kq
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.c("Error in functionType of tearoff")},
mO:function(a,b,c,d){var u=H.kq
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
ld:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mQ(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mO(t,!r,u,b)
if(t===0){r=$.ar
if(typeof r!=="number")return r.A()
$.ar=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bU
return new Function(r+H.e(q==null?$.bU=H.eY("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ar
if(typeof r!=="number")return r.A()
$.ar=r+1
o+=r
r="return function("+o+"){return this."
q=$.bU
return new Function(r+H.e(q==null?$.bU=H.eY("self"):q)+"."+H.e(u)+"("+o+");}")()},
mP:function(a,b,c,d){var u=H.kq,t=H.lb
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
mQ:function(a,b){var u,t,s,r,q,p,o,n=$.bU
if(n==null)n=$.bU=H.eY("self")
u=$.la
if(u==null)u=$.la=H.eY("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.mP(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.ar
if(typeof u!=="number")return u.A()
$.ar=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.ar
if(typeof u!=="number")return u.A()
$.ar=u+1
return new Function(n+u+"}")()},
kU:function(a,b,c,d,e,f,g){return H.mR(a,b,c,d,!!e,!!f,g)},
kq:function(a){return a.a},
lb:function(a){return a.c},
eY:function(a){var u,t,s,r=new H.bT("self","target","receiver","name"),q=J.kz(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
p2:function(a,b){throw H.c(H.mM(a,H.cI(b.substring(2))))},
t:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.S(a)[b]
else u=!0
if(u)return a
H.p2(a,b)},
oO:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
mM:function(a,b){return new H.eZ("CastError: "+P.kx(a)+": type '"+H.e(H.oG(a))+"' is not a subtype of type '"+b+"'")},
oG:function(a){var u,t=J.S(a)
if(!!t.$ibV){u=H.oO(t)
if(u!=null)return H.p3(u)
return"Closure"}return H.ce(a)},
p7:function(a){throw H.c(new P.fa(a))},
nu:function(a){return new H.hN(a)},
m9:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
cH:function(a){if(a==null)return
return a.$ti},
pI:function(a,b,c){return H.kj(a["$a"+H.e(c)],H.cH(b))},
oR:function(a,b,c,d){var u=H.kj(a["$a"+H.e(c)],H.cH(b))
return u==null?null:u[d]},
kW:function(a,b,c){var u=H.kj(a["$a"+H.e(b)],H.cH(a))
return u==null?null:u[c]},
aJ:function(a,b){var u=H.cH(a)
return u==null?null:u[b]},
p3:function(a){return H.bi(a,null)},
bi:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cI(a[0].name)+H.lZ(a,1,b)
if(typeof a=="function")return H.cI(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.e(b[t])}if('func' in a)return H.ob(a,b)
if('futureOr' in a)return"FutureOr<"+H.bi("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
ob:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.b([],[P.h])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.d(a0,m)
p=C.a.A(p,a0[m])
l=u[q]
if(l!=null&&l!==P.a1)p+=" extends "+H.bi(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bi(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bi(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bi(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.oP(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.bi(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
lZ:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.R("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bi(p,c)}return"<"+u.i(0)+">"},
kj:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
pG:function(a,b,c){return a.apply(b,H.kj(J.S(b)["$a"+H.e(c)],H.cH(b)))},
pH:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
p_:function(a){var u,t,s,r,q=$.ma.$1(a),p=$.k0[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.k6[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.m3.$2(a,q)
if(q!=null){p=$.k0[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.k6[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kf(u)
$.k0[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.k6[q]=u
return u}if(s==="-"){r=H.kf(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.md(a,u)
if(s==="*")throw H.c(P.iz(q))
if(v.leafTags[q]===true){r=H.kf(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.md(a,u)},
md:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kZ(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kf:function(a){return J.kZ(a,!1,null,!!a.$iB)},
p0:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kf(u)
else return J.kZ(u,c,null,null)},
oW:function(){if(!0===$.kY)return
$.kY=!0
H.oX()},
oX:function(){var u,t,s,r,q,p,o,n
$.k0=Object.create(null)
$.k6=Object.create(null)
H.oV()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.me.$1(q)
if(p!=null){o=H.p0(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
oV:function(){var u,t,s,r,q,p,o=C.K()
o=H.bM(C.L,H.bM(C.M,H.bM(C.w,H.bM(C.w,H.bM(C.N,H.bM(C.O,H.bM(C.P(C.v),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.ma=new H.k3(r)
$.m3=new H.k4(q)
$.me=new H.k5(p)},
bM:function(a,b){return a(b)||b},
n3:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.c(P.T("Illegal RegExp pattern ("+String(p)+")",a,null))},
mg:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
oN:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mf:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
l0:function(a,b,c){var u=H.p6(a,b,c)
return u},
p6:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.mf(b),'g'),H.oN(c))},
f3:function f3(){},
f4:function f4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
io:function io(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hu:function hu(a,b){this.a=a
this.b=b},
fL:function fL(a,b,c){this.a=a
this.b=b
this.c=c},
iA:function iA(a){this.a=a},
kl:function kl(a){this.a=a},
ej:function ej(a){this.a=a
this.b=null},
bV:function bV(){},
ia:function ia(){},
i2:function i2(){},
bT:function bT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eZ:function eZ(a){this.a=a},
hN:function hN(a){this.a=a},
I:function I(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fK:function fK(a){this.a=a},
fP:function fP(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fQ:function fQ(a,b){this.a=a
this.$ti=b},
fR:function fR(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
k3:function k3(a){this.a=a},
k4:function k4(a){this.a=a},
k5:function k5(a){this.a=a},
fJ:function fJ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bK:function(a){return a},
nd:function(a){return new Int8Array(a)},
aH:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bO(b,a))},
o9:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.oM(a,b,c))
return b},
c9:function c9(){},
b9:function b9(){},
dc:function dc(){},
ca:function ca(){},
dd:function dd(){},
hm:function hm(){},
hn:function hn(){},
ho:function ho(){},
hp:function hp(){},
hq:function hq(){},
de:function de(){},
cb:function cb(){},
cu:function cu(){},
cv:function cv(){},
cw:function cw(){},
cx:function cx(){},
oP:function(a){return J.lj(a?Object.keys(a):[],null)},
p8:function(a){return v.mangledGlobalNames[a]},
p1:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kZ:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
k1:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.kY==null){H.oW()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.iz("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.l2()]
if(r!=null)return r
r=H.p_(a)
if(r!=null)return r
if(typeof a=="function")return C.W
u=Object.getPrototypeOf(a)
if(u==null)return C.D
if(u===Object.prototype)return C.D
if(typeof s=="function"){Object.defineProperty(s,$.l2(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
n0:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.kp(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.X(a,0,4294967295,"length",null))
return J.lj(new Array(a),b)},
lj:function(a,b){return J.kz(H.b(a,[b]))},
kz:function(a){a.fixed$length=Array
return a},
n1:function(a,b){return J.cL(a,b)},
S:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d1.prototype
return J.fI.prototype}if(typeof a=="string")return J.b5.prototype
if(a==null)return J.d2.prototype
if(typeof a=="boolean")return J.fH.prototype
if(a.constructor==Array)return J.b4.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b6.prototype
return a}if(a instanceof P.a1)return a
return J.k1(a)},
aq:function(a){if(typeof a=="string")return J.b5.prototype
if(a==null)return a
if(a.constructor==Array)return J.b4.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b6.prototype
return a}if(a instanceof P.a1)return a
return J.k1(a)},
eH:function(a){if(a==null)return a
if(a.constructor==Array)return J.b4.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b6.prototype
return a}if(a instanceof P.a1)return a
return J.k1(a)},
m8:function(a){if(typeof a=="number")return J.c2.prototype
if(typeof a=="string")return J.b5.prototype
if(a==null)return a
if(!(a instanceof P.a1))return J.bF.prototype
return a},
cG:function(a){if(typeof a=="string")return J.b5.prototype
if(a==null)return a
if(!(a instanceof P.a1))return J.bF.prototype
return a},
bQ:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b6.prototype
return a}if(a instanceof P.a1)return a
return J.k1(a)},
F:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.S(a).q(a,b)},
l4:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.m8(a).p(a,b)},
bS:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mb(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aq(a).h(a,b)},
kn:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.mb(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.eH(a).l(a,b,c)},
mD:function(a,b){return J.cG(a).E(a,b)},
mE:function(a,b,c){return J.bQ(a).fL(a,b,c)},
mF:function(a,b,c,d){return J.bQ(a).h3(a,b,c,d)},
mG:function(a,b){return J.cG(a).W(a,b)},
cL:function(a,b){return J.m8(a).aQ(a,b)},
ko:function(a,b){return J.aq(a).F(a,b)},
eK:function(a,b){return J.eH(a).M(a,b)},
mH:function(a,b,c,d){return J.bQ(a).ht(a,b,c,d)},
l5:function(a,b){return J.eH(a).H(a,b)},
mI:function(a){return J.bQ(a).gh9(a)},
l6:function(a){return J.bQ(a).gbW(a)},
cM:function(a){return J.S(a).gK(a)},
aK:function(a){return J.eH(a).gT(a)},
af:function(a){return J.aq(a).gm(a)},
l7:function(a){return J.eH(a).hY(a)},
mJ:function(a,b){return J.bQ(a).i1(a,b)},
mK:function(a,b,c){return J.cG(a).t(a,b,c)},
mL:function(a){return J.cG(a).i8(a)},
a3:function(a){return J.S(a).i(a)},
a:function a(){},
fH:function fH(){},
d2:function d2(){},
d3:function d3(){},
hy:function hy(){},
bF:function bF(){},
b6:function b6(){},
b4:function b4(a){this.$ti=a},
kA:function kA(a){this.$ti=a},
aa:function aa(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c2:function c2(){},
d1:function d1(){},
fI:function fI(){},
b5:function b5(){}},P={
nK:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.oH()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bN(new P.j3(s),1)).observe(u,{childList:true})
return new P.j2(s,u,t)}else if(self.setImmediate!=null)return P.oI()
return P.oJ()},
nL:function(a){self.scheduleImmediate(H.bN(new P.j4(a),0))},
nM:function(a){self.setImmediate(H.bN(new P.j5(a),0))},
nN:function(a){P.kI(C.n,a)},
kI:function(a,b){var u=C.c.a3(a.a,1000)
return P.nU(u<0?0:u,b)},
lC:function(a,b){var u=C.c.a3(a.a,1000)
return P.nV(u<0?0:u,b)},
nU:function(a,b){var u=new P.ep()
u.eo(a,b)
return u},
nV:function(a,b){var u=new P.ep()
u.ep(a,b)
return u},
pD:function(a){return new P.bG(a,1)},
nQ:function(){return C.a4},
nR:function(a){return new P.bG(a,3)},
oe:function(a,b){return new P.jy(a,[b])},
oA:function(){var u,t
for(;u=$.bL,u!=null;){$.cF=null
t=u.b
$.bL=t
if(t==null)$.cE=null
u.a.$0()}},
oF:function(){$.kS=!0
try{P.oA()}finally{$.cF=null
$.kS=!1
if($.bL!=null)$.l3().$1(P.m4())}},
oD:function(a){var u=new P.dL(a)
if($.bL==null){$.bL=$.cE=u
if(!$.kS)$.l3().$1(P.m4())}else $.cE=$.cE.b=u},
oE:function(a){var u,t,s=$.bL
if(s==null){P.oD(a)
$.cF=$.cE
return}u=new P.dL(a)
t=$.cF
if(t==null){u.b=s
$.bL=$.cF=u}else{u.b=t.b
$.cF=t.b=u
if(u.b==null)$.cE=u}},
lB:function(a,b){var u=$.ap
if(u===C.f)return P.kI(a,b)
return P.kI(a,u.ha(b))},
nB:function(a,b){var u=$.ap
if(u===C.f)return P.lC(a,b)
return P.lC(a,u.da(b,P.dx))},
m_:function(a,b,c,d,e){var u={}
u.a=d
P.oE(new P.jU(u,e))},
oB:function(a,b,c,d){var u,t=$.ap
if(t===c)return d.$0()
$.ap=c
u=t
try{t=d.$0()
return t}finally{$.ap=u}},
oC:function(a,b,c,d,e){var u,t=$.ap
if(t===c)return d.$1(e)
$.ap=c
u=t
try{t=d.$1(e)
return t}finally{$.ap=u}},
j3:function j3(a){this.a=a},
j2:function j2(a,b,c){this.a=a
this.b=b
this.c=c},
j4:function j4(a){this.a=a},
j5:function j5(a){this.a=a},
ep:function ep(){this.c=0},
jC:function jC(a,b){this.a=a
this.b=b},
jB:function jB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bG:function bG(a,b){this.a=a
this.b=b},
bH:function bH(a){var _=this
_.a=a
_.d=_.c=_.b=null},
jy:function jy(a,b){this.a=a
this.$ti=b},
dL:function dL(a){this.a=a
this.b=null},
dt:function dt(){},
i5:function i5(){},
dx:function dx(){},
jL:function jL(){},
jU:function jU(a,b){this.a=a
this.b=b},
jj:function jj(){},
jk:function jk(a,b){this.a=a
this.b=b},
jl:function jl(a,b,c){this.a=a
this.b=b
this.c=c},
n5:function(a,b){return new H.I([a,b])},
kD:function(a,b){return new H.I([a,b])},
n7:function(a){return H.oQ(a,new H.I([null,null]))},
c4:function(a){return new P.jg([a])},
kN:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
nT:function(a,b){var u=new P.e0(a,b)
u.c=a.e
return u},
mZ:function(a,b,c){var u,t
if(P.kT(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.h])
$.a8.push(a)
try{P.od(a,u)}finally{if(0>=$.a8.length)return H.d($.a8,-1)
$.a8.pop()}t=P.lz(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
ky:function(a,b,c){var u,t
if(P.kT(a))return b+"..."+c
u=new P.R(b)
$.a8.push(a)
try{t=u
t.a=P.lz(t.a,a,", ")}finally{if(0>=$.a8.length)return H.d($.a8,-1)
$.a8.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kT:function(a){var u,t
for(u=$.a8.length,t=0;t<u;++t)if(a===$.a8[t])return!0
return!1},
od:function(a,b){var u,t,s,r,q,p,o,n=a.gT(a),m=0,l=0
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
a.H(0,new P.fS(u))
return u},
lk:function(a,b){var u,t,s=P.c4(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.l)(a),++t)s.n(0,a[t])
return s},
kF:function(a){var u,t={}
if(P.kT(a))return"{...}"
u=new P.R("")
try{$.a8.push(a)
u.a+="{"
t.a=!0
J.l5(a,new P.fX(t,u))
u.a+="}"}finally{if(0>=$.a8.length)return H.d($.a8,-1)
$.a8.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jg:function jg(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jh:function jh(a){this.a=a
this.c=this.b=null},
e0:function e0(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fE:function fE(){},
fS:function fS(a){this.a=a},
fT:function fT(){},
x:function x(){},
fW:function fW(){},
fX:function fX(a,b){this.a=a
this.b=b},
a0:function a0(){},
jD:function jD(){},
fY:function fY(){},
dE:function dE(a,b){this.a=a
this.$ti=b},
jn:function jn(){},
e1:function e1(){},
eu:function eu(){},
nE:function(a,b,c,d){if(b instanceof Uint8Array)return P.nF(!1,b,c,d)
return},
nF:function(a,b,c,d){var u,t,s=$.mv()
if(s==null)return
u=0===c
if(u&&!0)return P.kL(s,b)
t=b.length
d=P.aU(c,d,t)
if(u&&d===t)return P.kL(s,b)
return P.kL(s,b.subarray(c,d))},
kL:function(a,b){if(P.nH(b))return
return P.nI(a,b)},
nI:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ae(t)}return},
nH:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
nG:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ae(t)}return},
m1:function(a,b,c){var u,t,s
if(typeof c!=="number")return H.r(c)
u=J.aq(a)
t=b
for(;t<c;++t){s=u.h(a,t)
if(typeof s!=="number")return s.a7()
if((s&127)!==s)return t-b}return c-b},
l9:function(a,b,c,d,e,f){if(C.c.ba(f,4)!==0)throw H.c(P.T("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.T("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.T("Invalid base64 padding, more than two '=' characters",a,b))},
eV:function eV(){},
eW:function eW(){},
f0:function f0(){},
f5:function f5(){},
fk:function fk(){},
fC:function fC(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
fB:function fB(a){this.a=a},
iJ:function iJ(){},
iL:function iL(){},
jJ:function jJ(a){this.b=0
this.c=a},
iK:function iK(a){this.a=a},
jI:function jI(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
eI:function(a,b,c){var u=H.no(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.T(a,null,null))},
mW:function(a){if(a instanceof H.bV)return a.i(0)
return"Instance of '"+H.e(H.ce(a))+"'"},
n8:function(a,b,c){var u,t,s=J.n0(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
kE:function(a,b,c){var u,t=H.b([],[c])
for(u=J.aK(a);u.u();)t.push(u.gC(u))
if(b)return t
return J.kz(t)},
ch:function(a,b,c){var u,t
if(typeof a==="object"&&a!==null&&a.constructor===Array){u=a.length
c=P.aU(b,c,u)
if(b<=0){if(typeof c!=="number")return c.P()
t=c<u}else t=!0
return H.lu(t?C.b.e6(a,b,c):a)}if(!!J.S(a).$icb)return H.nq(a,b,P.aU(b,c,a.length))
return P.nz(a,b,c)},
nz:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.c(P.X(b,0,J.af(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.X(c,b,J.af(a),q,q))
t=J.aK(a)
for(s=0;s<b;++s)if(!t.u())throw H.c(P.X(b,0,s,q,q))
r=[]
if(u)for(;t.u();)r.push(t.gC(t))
else for(s=b;s<c;++s){if(!t.u())throw H.c(P.X(c,b,s,q,q))
r.push(t.gC(t))}return H.lu(r)},
ns:function(a){return new H.fJ(a,H.n3(a,!1,!0,!1,!1,!1))},
lz:function(a,b,c){var u=J.aK(b)
if(!u.u())return a
if(c.length===0){do a+=H.e(u.gC(u))
while(u.u())}else{a+=H.e(u.gC(u))
for(;u.u();)a=a+c+H.e(u.gC(u))}return a},
lF:function(){var u=H.ng()
if(u!=null)return P.nD(u)
throw H.c(P.y("'Uri.base' is not supported"))},
ev:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.e){u=$.mB().b
if(typeof b!=="string")H.p(H.aj(b))
u=u.test(b)}else u=!1
if(u)return b
t=c.ghs().bY(b)
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
cU:function(a){if(a>=10)return""+a
return"0"+a},
lf:function(a){return new P.b2(1000*a)},
kx:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a3(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mW(a)},
eO:function(a){return new P.ak(!1,null,null,a)},
kp:function(a,b,c){return new P.ak(!0,a,b,c)},
dk:function(a,b){return new P.bA(null,null,!0,a,b,"Value not in range")},
X:function(a,b,c,d,e){return new P.bA(b,c,!0,a,d,"Invalid value")},
aU:function(a,b,c){var u
if(typeof a!=="number")return H.r(a)
if(0<=a){if(typeof c!=="number")return H.r(c)
u=a>c}else u=!0
if(u)throw H.c(P.X(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.r(c)
u=b>c}else u=!0
if(u)throw H.c(P.X(b,a,c,"end",null))
return b}return c},
lv:function(a,b){if(typeof a!=="number")return a.P()
if(a<0)throw H.c(P.X(a,0,null,b,null))},
N:function(a,b,c,d,e){var u=e==null?J.af(b):e
return new P.fD(u,!0,a,c,"Index out of range")},
y:function(a){return new P.iC(a)},
iz:function(a){return new P.iy(a)},
ly:function(a){return new P.cg(a)},
aM:function(a){return new P.f2(a)},
v:function(a){return new P.dU(a)},
T:function(a,b,c){return new P.fv(a,b,c)},
n9:function(a,b,c){var u,t,s=H.b([],[c])
C.b.sm(s,a)
for(u=0;u<a;++u){t=b.$1(u)
if(u>=s.length)return H.d(s,u)
s[u]=t}return s},
l_:function(a){H.p1(a)},
nD:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.a.E(a,4)^58)*3|C.a.E(a,0)^100|C.a.E(a,1)^97|C.a.E(a,2)^116|C.a.E(a,3)^97)>>>0
if(u===0)return P.lE(e<e?C.a.t(a,0,e):a,5,f).gdY()
else if(u===32)return P.lE(C.a.t(a,5,e),0,f).gdY()}t=new Array(8)
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
if(typeof r!=="number")return r.ic()
if(r>=0)if(P.m0(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.A()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.P()
if(typeof n!=="number")return H.r(n)
if(m<n)n=m
if(typeof o!=="number")return o.P()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.P()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.P()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.a.a4(a,"..",o)))j=n>o+2&&C.a.a4(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.a.a4(a,"file",0)){if(q<=0){if(!C.a.a4(a,"/",o)){i="file:///"
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
a=C.a.aT(a,o,n,"/");++e
n=h}k="file"}else if(C.a.a4(a,"http",0)){if(t&&p+3===o&&C.a.a4(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.a.aT(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.a.a4(a,"https",0)){if(t&&p+4===o&&C.a.a4(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.a.aT(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.a.t(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.jq(a,r,q,p,o,n,m,k)}return P.nW(a,0,e,r,q,p,o,n,m,k)},
lH:function(a){var u=P.h
return C.b.hy(H.b(a.split("&"),[u]),P.kD(u,u),new P.iH(C.e))},
nC:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.iE(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.a.W(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.eI(C.a.t(a,s,t),n,n)
if(typeof p!=="number")return p.a1()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.d(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.eI(C.a.t(a,s,c),n,n)
if(typeof p!=="number")return p.a1()
if(p>255)k.$2(l,s)
if(r>=u)return H.d(j,r)
j[r]=p
return j},
lG:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.iF(a),d=new P.iG(e,a)
if(a.length<2)e.$1("address is too short")
u=H.b([],[P.w])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.a.W(a,t)
if(p===58){if(t===b){++t
if(C.a.W(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
u.push(-1)
r=!0}else u.push(d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.b.gap(u)
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
nW:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.o3(a,b,d)
else{if(d===b)P.bJ(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.o4(a,u,e-1):""
s=P.o0(a,e,f,!1)
if(typeof f!=="number")return f.A()
r=f+1
if(typeof g!=="number")return H.r(g)
q=r<g?P.o2(P.eI(C.a.t(a,r,g),new P.jE(a,f),n),j):n}else{q=n
s=q
t=""}p=P.o1(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.P()
o=h<i?P.kP(a,h+1,i,n):n
return new P.bI(j,t,s,q,p,o,i<c?P.o_(a,i+1,c):n)},
lT:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bJ:function(a,b,c){throw H.c(P.T(c,a,b))},
o2:function(a,b){if(a!=null&&a===P.lT(b))return
return a},
o0:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.a.W(a,b)===91){if(typeof c!=="number")return c.L()
u=c-1
if(C.a.W(a,u)!==93)P.bJ(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.nY(a,t,u)
if(typeof s!=="number")return s.P()
if(s<u){r=s+1
q=P.lY(a,C.a.a4(a,"25",r)?s+3:r,u,"%25")}else q=""
P.lG(a,t,s)
return C.a.t(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.r(c)
p=b
for(;p<c;++p)if(C.a.W(a,p)===58){s=C.a.bk(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.lY(a,C.a.a4(a,"25",r)?s+3:r,c,"%25")}else q=""
P.lG(a,b,s)
return"["+C.a.t(a,b,s)+q+"]"}return P.o6(a,b,c)},
nY:function(a,b,c){var u,t=C.a.bk(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.r(c)
u=t<c}else u=!1
return u?t:c},
lY:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.R(d):null
if(typeof c!=="number")return H.r(c)
u=b
t=u
s=!0
for(;u<c;){r=C.a.W(a,u)
if(r===37){q=P.kQ(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.R("")
o=l.a+=C.a.t(a,t,u)
if(p)q=C.a.t(a,u,u+3)
else if(q==="%")P.bJ(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.d(C.h,p)
p=(C.h[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.R("")
if(t<u){l.a+=C.a.t(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.a.W(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.R("")
l.a+=C.a.t(a,t,u)
l.a+=P.kO(r)
u+=m
t=u}}}if(l==null)return C.a.t(a,b,c)
if(t<c)l.a+=C.a.t(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
o6:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.r(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.a.W(a,u)
if(q===37){p=P.kQ(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.R("")
n=C.a.t(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.a.t(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.d(C.A,o)
o=(C.A[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.R("")
if(t<u){s.a+=C.a.t(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.d(C.j,o)
o=(C.j[o]&1<<(q&15))!==0}else o=!1
if(o)P.bJ(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.a.W(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.R("")
n=C.a.t(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.kO(q)
u+=l
t=u}}}}if(s==null)return C.a.t(a,b,c)
if(t<c){n=C.a.t(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
o3:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.lV(C.a.E(a,b)))P.bJ(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.a.E(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.d(C.l,r)
r=(C.l[r]&1<<(s&15))!==0}else r=!1
if(!r)P.bJ(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.a.t(a,b,c)
return P.nX(t?a.toLowerCase():a)},
nX:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
o4:function(a,b,c){return P.cC(a,b,c,C.Z,!1)},
o1:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.cC(a,b,c,C.B,!0):C.i.iC(d,new P.jF(),P.h).j(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.a.a2(u,"/"))u="/"+u
return P.o5(u,e,f)},
o5:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.a.a2(a,"/"))return P.o7(a,!u||c)
return P.o8(a)},
kP:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.c(P.eO("Both query and queryParameters specified"))
return P.cC(a,b,c,C.k,!0)}if(d==null)return
u=new P.R("")
t.a=""
d.H(0,new P.jG(new P.jH(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
o_:function(a,b,c){return P.cC(a,b,c,C.k,!0)},
kQ:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.a.W(a,b+1)
t=C.a.W(a,p)
s=H.k2(u)
r=H.k2(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.c.aN(q,4)
if(p>=8)return H.d(C.h,p)
p=(C.h[p]&1<<(q&15))!==0}else p=!1
if(p)return H.bz(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.a.t(a,b,b+3).toUpperCase()
return},
kO:function(a){var u,t,s,r,q,p,o,n,m="0123456789ABCDEF"
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
for(u=t.length,q=0;--r,r>=0;s=128){p=C.c.fW(a,6*r)&63|s
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
q+=3}}return P.ch(t,0,null)},
cC:function(a,b,c,d,e){var u=P.lX(a,b,c,d,e)
return u==null?C.a.t(a,b,c):u},
lX:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.P()
if(typeof c!=="number")return H.r(c)
if(!(o<c))break
c$0:{u=C.a.W(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.d(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.kQ(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.d(C.j,t)
t=(C.j[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.bJ(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.a.W(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.kO(u)}}if(m==null)m=new P.R("")
m.a+=C.a.t(a,n,o)
m.a+=H.e(s)
if(typeof r!=="number")return H.r(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.P()
if(n<c)m.a+=C.a.t(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
lW:function(a){if(C.a.a2(a,"."))return!0
return C.a.dv(a,"/.")!==-1},
o8:function(a){var u,t,s,r,q,p,o
if(!P.lW(a))return a
u=H.b([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.F(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.d(u,-1)
u.pop()
if(u.length===0)u.push("")}r=!0}else if("."===p)r=!0
else{u.push(p)
r=!1}}if(r)u.push("")
return C.b.j(u,"/")},
o7:function(a,b){var u,t,s,r,q,p
if(!P.lW(a))return!b?P.lU(a):a
u=H.b([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.b.gap(u)!==".."){if(0>=u.length)return H.d(u,-1)
u.pop()
r=!0}else{u.push("..")
r=!1}else if("."===p)r=!0
else{u.push(p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.d(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.b.gap(u)==="..")u.push("")
if(!b){if(0>=u.length)return H.d(u,0)
t=P.lU(u[0])
if(0>=u.length)return H.d(u,0)
u[0]=t}return C.b.j(u,"/")},
lU:function(a){var u,t,s,r=a.length
if(r>=2&&P.lV(J.mD(a,0)))for(u=1;u<r;++u){t=C.a.E(a,u)
if(t===58)return C.a.t(a,0,u)+"%3A"+C.a.a5(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.d(C.l,s)
s=(C.l[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
nZ:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.a.E(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.eO("Invalid URL encoding"))}}return u},
kR:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.a.E(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.e!==d)s=!1
else s=!0
if(s)return C.a.t(a,b,c)
else r=new H.m(C.a.t(a,b,c))}else{r=H.b([],[P.w])
for(s=a.length,q=b;q<c;++q){t=C.a.E(a,q)
if(t>127)throw H.c(P.eO("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.eO("Truncated URI"))
r.push(P.nZ(a,q+1))
q+=2}else if(t===43)r.push(32)
else r.push(t)}}return new P.iK(!1).bY(r)},
lV:function(a){var u=a|32
return 97<=u&&u<=122},
lE:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.b([b-1],[P.w])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.a.E(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.T(m,a,t))}}if(s<0&&t>b)throw H.c(P.T(m,a,t))
for(;r!==44;){l.push(t);++t
for(q=-1;t<u;++t){r=C.a.E(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)l.push(q)
else{p=C.b.gap(l)
if(r!==44||t!==p+7||!C.a.a4(a,"base64",p+1))throw H.c(P.T("Expecting '='",a,t))
break}}l.push(t)
o=t+1
if((l.length&1)===1)a=C.J.hH(0,a,o,u)
else{n=P.lX(a,o,u,C.k,!0)
if(n!=null)a=C.a.aT(a,o,u,n)}return new P.iD(a,l,c)},
oa:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.n9(22,new P.jP(),P.bC),n=new P.jO(o),m=new P.jQ(),l=new P.jR(),k=n.$2(0,225)
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
s=C.a.E(a,u)^96
if(s>95)s=31
if(s>=t.length)return H.d(t,s)
r=t[s]
d=r&31
q=r>>>5
if(q>=8)return H.d(e,q)
e[q]=u}return d},
aI:function aI(){},
ab:function ab(a,b){this.a=a
this.b=b},
L:function L(){},
b2:function b2(a){this.a=a},
fg:function fg(){},
fh:function fh(){},
br:function br(){},
dh:function dh(){},
ak:function ak(a,b,c,d){var _=this
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
fD:function fD(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iC:function iC(a){this.a=a},
iy:function iy(a){this.a=a},
cg:function cg(a){this.a=a},
f2:function f2(a){this.a=a},
hx:function hx(){},
dr:function dr(){},
fa:function fa(a){this.a=a},
dU:function dU(a){this.a=a},
fv:function fv(a,b,c){this.a=a
this.b=b
this.c=c},
fx:function fx(){},
w:function w(){},
j:function j(){},
fG:function fG(){},
o:function o(){},
Q:function Q(){},
ba:function ba(){},
a9:function a9(){},
a1:function a1(){},
h:function h(){},
R:function R(a){this.a=a},
iH:function iH(a){this.a=a},
iE:function iE(a){this.a=a},
iF:function iF(a){this.a=a},
iG:function iG(a,b){this.a=a
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
jE:function jE(a,b){this.a=a
this.b=b},
jF:function jF(){},
jH:function jH(a,b){this.a=a
this.b=b},
jG:function jG(a){this.a=a},
iD:function iD(a,b,c){this.a=a
this.b=b
this.c=c},
jP:function jP(){},
jO:function jO(a){this.a=a},
jQ:function jQ(){},
jR:function jR(){},
jq:function jq(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
j9:function j9(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
aW:function(a){var u,t,s,r,q
if(a==null)return
u=P.kD(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.l)(t),++r){q=t[r]
u.l(0,q,a[q])}return u},
oK:function(a){var u={}
a.H(0,new P.jV(u))
return u},
js:function js(){},
ju:function ju(a,b){this.a=a
this.b=b},
jv:function jv(a,b){this.a=a
this.b=b},
jV:function jV(a){this.a=a},
jt:function jt(a,b){this.a=a
this.b=b},
fr:function fr(a,b){this.a=a
this.b=b},
fs:function fs(){},
ft:function ft(){},
jf:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
nS:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ji:function ji(){},
a7:function a7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aP:function aP(){},
fN:function fN(){},
aT:function aT(){},
hv:function hv(){},
hD:function hD(){},
cf:function cf(){},
i6:function i6(){},
k:function k(){},
aV:function aV(){},
im:function im(){},
dZ:function dZ(){},
e_:function e_(){},
e9:function e9(){},
ea:function ea(){},
el:function el(){},
em:function em(){},
es:function es(){},
et:function et(){},
bC:function bC(){},
eQ:function eQ(){},
eR:function eR(){},
eS:function eS(a){this.a=a},
eT:function eT(){},
bl:function bl(){},
hw:function hw(){},
dM:function dM(){},
i1:function i1(){},
eh:function eh(){},
ei:function ei(){}},W={
l8:function(){var u=document.createElement("a")
return u},
lc:function(){var u=document.createElement("canvas")
return u},
mV:function(a,b,c){var u=document.body,t=(u&&C.r).ac(u,a,b,c)
t.toString
u=new H.cq(new W.a2(t),new W.fj(),[W.D])
return u.gaH(u)},
kv:function(a){return"wheel"},
bX:function(a){var u,t,s,r="element tag unavailable"
try{u=J.bQ(a)
t=u.gdT(a)
if(typeof t==="string")r=u.gdT(a)}catch(s){H.ae(s)}return r},
mY:function(a){var u,t=document.createElement("input"),s=t
try{s.type=a}catch(u){H.ae(u)}return s},
je:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lR:function(a,b,c,d){var u=W.je(W.je(W.je(W.je(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
Z:function(a,b,c,d){var u=W.m2(new W.jc(c),W.i)
if(u!=null&&!0)J.mF(a,b,u,!1)
return new W.jb(a,b,u,!1)},
lQ:function(a){var u=W.l8(),t=window.location
u=new W.cs(new W.jm(u,t))
u.ej(a)
return u},
nO:function(a,b,c,d){return!0},
nP:function(a,b,c,d){var u,t=d.a,s=t.a
s.href=c
u=s.hostname
t=t.b
if(!(u==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(u==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
lS:function(){var u=P.h,t=P.lk(C.o,u),s=H.b(["TEMPLATE"],[u])
t=new W.jz(t,P.c4(u),P.c4(u),P.c4(u),null)
t.en(null,new H.h_(C.o,new W.jA(),[H.aJ(C.o,0),u]),s,null)
return t},
m2:function(a,b){var u=$.ap
if(u===C.f)return a
return u.da(a,b)},
n:function n(){},
eL:function eL(){},
eM:function eM(){},
eN:function eN(){},
bm:function bm(){},
bn:function bn(){},
bp:function bp(){},
b0:function b0(){},
f6:function f6(){},
H:function H(){},
bW:function bW(){},
f7:function f7(){},
ag:function ag(){},
at:function at(){},
f8:function f8(){},
f9:function f9(){},
fc:function fc(){},
al:function al(){},
fd:function fd(){},
cW:function cW(){},
cX:function cX(){},
fe:function fe(){},
ff:function ff(){},
j7:function j7(a,b){this.a=a
this.b=b},
P:function P(){},
fj:function fj(){},
i:function i(){},
f:function f(){},
am:function am(){},
bZ:function bZ(){},
fq:function fq(){},
fu:function fu(){},
au:function au(){},
fA:function fA(){},
c0:function c0(){},
c1:function c1(){},
bw:function bw(){},
fU:function fU(){},
hf:function hf(){},
c7:function c7(){},
hg:function hg(){},
hh:function hh(a){this.a=a},
hi:function hi(){},
hj:function hj(a){this.a=a},
ax:function ax(){},
hk:function hk(){},
ay:function ay(){},
a2:function a2(a){this.a=a},
D:function D(){},
df:function df(){},
az:function az(){},
hA:function hA(){},
hL:function hL(){},
hM:function hM(a){this.a=a},
hO:function hO(){},
aB:function aB(){},
hZ:function hZ(){},
aC:function aC(){},
i_:function i_(){},
aD:function aD(){},
i3:function i3(){},
i4:function i4(a){this.a=a},
an:function an(){},
du:function du(){},
i7:function i7(){},
i8:function i8(){},
ci:function ci(){},
aE:function aE(){},
ao:function ao(){},
ib:function ib(){},
ic:function ic(){},
ig:function ig(){},
aF:function aF(){},
bB:function bB(){},
ik:function ik(){},
il:function il(){},
bd:function bd(){},
iI:function iI(){},
j_:function j_(){},
bh:function bh(){},
cr:function cr(){},
j8:function j8(){},
dO:function dO(){},
jd:function jd(){},
e6:function e6(){},
jr:function jr(){},
jw:function jw(){},
j6:function j6(){},
ja:function ja(a){this.a=a},
jb:function jb(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jc:function jc(a){this.a=a},
cs:function cs(a){this.a=a},
M:function M(){},
dg:function dg(a){this.a=a},
hs:function hs(a){this.a=a},
hr:function hr(a,b,c){this.a=a
this.b=b
this.c=c},
ee:function ee(){},
jo:function jo(){},
jp:function jp(){},
jz:function jz(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jA:function jA(){},
jx:function jx(){},
d_:function d_(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
aS:function aS(){},
jm:function jm(a,b){this.a=a
this.b=b},
ew:function ew(a){this.a=a},
jK:function jK(a){this.a=a},
dN:function dN(){},
dP:function dP(){},
dQ:function dQ(){},
dR:function dR(){},
dS:function dS(){},
dV:function dV(){},
dW:function dW(){},
dX:function dX(){},
dY:function dY(){},
e2:function e2(){},
e3:function e3(){},
e4:function e4(){},
e5:function e5(){},
e7:function e7(){},
e8:function e8(){},
eb:function eb(){},
ec:function ec(){},
ed:function ed(){},
cy:function cy(){},
cz:function cz(){},
ef:function ef(){},
eg:function eg(){},
ek:function ek(){},
en:function en(){},
eo:function eo(){},
cA:function cA(){},
cB:function cB(){},
eq:function eq(){},
er:function er(){},
ex:function ex(){},
ey:function ey(){},
ez:function ez(){},
eA:function eA(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){},
eG:function eG(){}},K={
O:function(a,b){var u,t,s
if(a.length!==1||b.length!==1)throw H.c(P.v("The given low and high character strings for a Range must have one and only one characters."))
u=C.a.E(a,0)
t=C.a.E(b,0)
if(u>t){s=t
t=u
u=s}return new K.hG(u,t)},
u:function(a){var u=new K.hP()
u.ef(a)
return u},
aL:function aL(){},
d0:function d0(){},
b8:function b8(){},
a5:function a5(){this.a=null},
hG:function hG(a,b){this.a=a
this.b=b},
hP:function hP(){this.a=null}},L={
ii:function(){var u=new L.ih(),t=P.h
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
ih:function ih(){var _=this
_.d=_.c=_.b=_.a=null},
dB:function dB(a){this.b=a
this.a=this.c=null}},O={
ks:function(a){var u=new O.b1([a])
u.bv(a)
return u},
b1:function b1(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
c6:function c6(){this.b=this.a=null},
d8:function d8(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h7:function h7(a,b){this.a=a
this.b=b},
h8:function h8(){},
h9:function h9(a,b){this.a=a
this.b=b},
ha:function ha(){},
hb:function hb(a,b){this.a=a
this.b=b},
hc:function hc(){},
hd:function hd(a,b){this.a=a
this.b=b},
he:function he(){},
h1:function h1(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
d9:function d9(){},
h2:function h2(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
av:function av(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h4:function h4(){var _=this
_.e=_.d=_.c=_.b=null},
h5:function h5(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h6:function h6(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dv:function dv(){}},E={
li:function(){var u,t=new E.aO()
t.a=""
t.b=!0
u=O.ks(E.aO)
t.y=u
u.bb(t.ghI(),t.ghL())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sah(0,null)
t.sb5(null)
return t},
lO:function(){if(J.ko(window.navigator.vendor,"Google"))return C.H
if(J.ko(window.navigator.userAgent,"Firefox"))return C.t
var u=window.navigator.appVersion
if(J.aq(u).F(u,"Trident")||C.a.F(u,"Edge"))return C.u
if(J.ko(window.navigator.appName,"Microsoft"))return C.u
return C.I},
lP:function(){var u=window.navigator.appVersion
if(J.aq(u).F(u,"Win"))return C.a1
if(C.a.F(u,"Mac"))return C.C
if(C.a.F(u,"Linux"))return C.a2
return C.a3},
nt:function(a,b){var u=new E.hH(a)
u.ee(a,b)
return u},
nA:function(a,b,c,d,e){var u,t,s=J.S(a)
if(!!s.$ibp)return E.lA(a,!0,!0,!0,!1)
u=W.lc()
t=u.style
t.width="100%"
t.height="100%"
s.gbW(a).n(0,u)
return E.lA(u,!0,!0,!0,!1)},
lA:function(a,b,c,d,e){var u,t,s,r,q="mousemove",p=new E.dw(),o=C.m.e1(a,"webgl2",P.n7(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(o==null)H.p(P.v("Failed to get the rendering context for WebGL."))
p.b=a
p.c=o
p.e=E.nt(o,a)
o.getParameter(3379)
o.getParameter(34076)
u=new X.dF(a)
t=new X.fM()
t.c=new X.ah(!1,!1,!1)
t.d=P.c4(P.w)
u.b=t
t=new X.hl(u)
t.f=0
t.r=V.bb()
t.x=V.bb()
t.ch=t.Q=1
u.c=t
t=new X.fV(u)
t.r=0
t.x=V.bb()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.ij(u)
t.f=V.bb()
t.r=V.bb()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.z=H.b([],[[P.dt,P.a1]])
t=$.fl
u.Q=(t==null?$.fl=new E.dT(E.lO(),E.lP()):t).a===C.t?0.16666666666666666:0.005555555555555556
s=u.z
r=document
s.push(W.Z(r,"contextmenu",u.gf4(),!1))
u.z.push(W.Z(a,"focus",u.gfa(),!1))
u.z.push(W.Z(a,"blur",u.geX(),!1))
u.z.push(W.Z(r,"keyup",u.gfe(),!1))
u.z.push(W.Z(r,"keydown",u.gfc(),!1))
u.z.push(W.Z(a,"mousedown",u.gfi(),!1))
u.z.push(W.Z(a,"mouseup",u.gfm(),!1))
u.z.push(W.Z(a,q,u.gfk(),!1))
s=u.z
W.kv(a)
W.kv(a)
s.push(W.Z(a,W.kv(a),u.gfo(),!1))
u.z.push(W.Z(r,q,u.gf6(),!1))
u.z.push(W.Z(r,"mouseup",u.gf8(),!1))
u.z.push(W.Z(r,"pointerlockchange",u.gfq(),!1))
u.z.push(W.Z(a,"touchstart",u.gfG(),!1))
u.z.push(W.Z(a,"touchend",u.gfC(),!1))
u.z.push(W.Z(a,"touchmove",u.gfE(),!1))
p.x=u
p.ch=!0
p.cx=!1
p.cy=new P.ab(Date.now(),!1)
p.db=0
p.cT()
return p},
eX:function eX(){},
aO:function aO(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bo:function bo(a){this.b=a},
bx:function bx(a){this.b=a},
dT:function dT(a,b){this.a=a
this.b=b},
hH:function hH(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hI:function hI(a){this.a=a},
hJ:function hJ(a){this.a=a},
hK:function hK(a){this.a=a},
dw:function dw(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.e=_.d=_.c=_.b=null},
ie:function ie(a){this.a=a}},Z={
kM:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.bK(c)),35044)
a.bindBuffer(b,null)
return new Z.dK(b,u)},
ai:function(a){return new Z.bg(a)},
dK:function dK(a,b){this.a=a
this.b=b},
cP:function cP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
j0:function j0(a){this.a=a},
cQ:function cQ(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bt:function bt(a,b,c){this.a=a
this.b=b
this.c=c},
bg:function bg(a){this.a=a}},D={
K:function(){var u=new D.bs()
u.d=0
return u},
f_:function f_(){},
bs:function bs(){var _=this
_.d=_.c=_.b=_.a=null},
fn:function fn(a){this.a=a},
fo:function fo(a){this.a=a},
Y:function Y(){this.b=null},
bu:function bu(){this.b=null},
bv:function bv(){this.b=null},
C:function C(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
ku:function(a,b){var u,t,s=new D.bq()
s.c=new V.V(1,1,1)
s.a=V.lN()
s.d=V.lM()
s.e=V.nJ()
u=s.b
s.b=b
b.gB().n(0,s.gek())
t=new D.C("mover",u,s.b)
t.b=!0
s.as(t)
if(!s.c.q(0,a)){u=s.c
s.c=a
t=new D.C("color",u,a)
t.b=!0
s.as(t)}return s},
eU:function eU(){},
bq:function bq(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a4:function a4(){},
d5:function d5(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
hB:function hB(){},
i0:function i0(){}},X={cR:function cR(a,b){this.a=a
this.b=b},d4:function d4(a,b){this.a=a
this.b=b},fM:function fM(){var _=this
_.d=_.c=_.b=_.a=null},d7:function d7(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fV:function fV(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ah:function ah(a,b,c){this.a=a
this.b=b
this.c=c},aR:function aR(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hl:function hl(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},c8:function c8(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hC:function hC(){},dA:function dA(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},ij:function ij(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dF:function dF(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
mX:function(a){var u=new X.fw(),t=new V.as(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.lx
if(t==null){t=V.lw(0,0,1,1)
$.lx=t}u.r=t
return u},
kr:function kr(){},
fw:function fw(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
di:function di(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
i9:function i9(){}},V={
km:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.ba(a-b,u)
return(a<0?a+u:a)+b},
E:function(a,b,c){if(a==null)return C.a.ae("null",c)
return C.a.ae(C.d.dW(Math.abs(a-0)<$.A().a?0:a,b),c+b+1)},
bP:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.h])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.l)(a),++s){r=V.E(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.d(o,q)
u=C.a.ae(o[q],t)
p=o.length
if(q>=p)return H.d(o,q)
o[q]=u}return o},
db:function(){var u=$.lp
return u==null?$.lp=V.aw(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aw:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aQ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lo:function(a,b,c,d){return V.aw(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
ll:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.aw(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
lm:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.aw(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
ln:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.aw(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1)},
bb:function(){var u=$.ls
return u==null?$.ls=new V.a6(0,0):u},
ne:function(){var u=$.aA
return u==null?$.aA=new V.U(0,0,0):u},
lw:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dl(a,b,c,d)},
cp:function(){var u=$.lL
return u==null?$.lL=new V.z(0,0,0):u},
nJ:function(){var u=$.iM
return u==null?$.iM=new V.z(-1,0,0):u},
lM:function(){var u=$.iN
return u==null?$.iN=new V.z(0,1,0):u},
lN:function(){var u=$.iO
return u==null?$.iO=new V.z(0,0,1):u},
V:function V(a,b,c){this.a=a
this.b=b
this.c=c},
as:function as(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fm:function fm(a){this.a=a},
da:function da(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aQ:function aQ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a6:function a6(a,b){this.a=a
this.b=b},
U:function U(a,b,c){this.a=a
this.b=b
this.c=c},
bc:function bc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dl:function dl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
J:function J(a,b){this.a=a
this.b=b},
z:function z(a,b,c){this.a=a
this.b=b
this.c=c},
p4:function(a){P.nB(C.T,new V.kg(a))},
nv:function(a){var u=new V.hU()
u.eh(a,!0)
return u},
cS:function cS(){},
kg:function kg(a){this.a=a},
fb:function fb(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fy:function fy(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fz:function fz(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hz:function hz(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hE:function hE(a){this.a=a
this.c=null},
hF:function hF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hU:function hU(){this.b=this.a=null},
hW:function hW(a){this.a=a},
hV:function hV(a){this.a=a},
hX:function hX(a){this.a=a}},U={
kt:function(){var u=new U.f1()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
le:function(a){var u=new U.cT()
u.a=a
return u},
kG:function(a,b,c){var u,t=new U.dm()
t.r=t.f=t.e=t.d=t.c=t.b=t.a=0
t.se_(0)
t.sdM(0,0)
t.sdS(0)
u=t.d
if(!(Math.abs(u-c)<$.A().a)){t.d=c
u=new D.C("deltaYaw",u,c)
u.b=!0
t.J(u)}u=t.e
if(!(Math.abs(u-a)<$.A().a)){t.e=a
u=new D.C("deltaPitch",u,a)
u.b=!0
t.J(u)}u=t.f
if(!(Math.abs(u-b)<$.A().a)){t.f=b
u=new D.C("deltaRoll",u,b)
u.b=!0
t.J(u)}return t},
f1:function f1(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cT:function cT(){this.b=this.a=null},
c_:function c_(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ac:function ac(){},
dm:function dm(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dG:function dG(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dH:function dH(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dI:function dI(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
mc:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="testCanvas",b=null,a="modifiers",a0=V.nv("Test 020"),a1=W.lc()
a1.className="pageLargeCanvas"
a1.id=c
a0.a.appendChild(a1)
u=[P.h]
a0.d4(H.b(["Test of the Material Lighting shader with multiple moving directional lights."],u))
a0.h2(H.b(["shapes"],u))
a0.d4(H.b(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(c)
if(t==null)H.p(P.v("Failed to find an element with the identifier, testCanvas."))
s=E.nA(t,!0,!0,!0,!1)
r=U.kG(0,0,0.3)
q=D.ku(new V.V(1,0,0),r)
r=U.kG(0.4,0,0)
p=D.ku(new V.V(0,1,0),r)
r=U.kG(0.5,0,0.5)
o=D.ku(new V.V(0,0,1),r)
n=new O.d8()
r=O.ks(V.aQ)
n.e=r
r.bb(n.geT(),n.geV())
r=new O.av(n,"emission")
r.c=new A.a_(!1,!1,!1)
r.f=new V.V(0,0,0)
n.f=r
r=new O.av(n,"ambient")
r.c=new A.a_(!1,!1,!1)
r.f=new V.V(0,0,0)
n.r=r
r=new O.av(n,"diffuse")
r.c=new A.a_(!1,!1,!1)
r.f=new V.V(0,0,0)
n.x=r
r=new O.av(n,"invDiffuse")
r.c=new A.a_(!1,!1,!1)
r.f=new V.V(0,0,0)
n.y=r
r=new O.h6(n,"specular")
r.c=new A.a_(!1,!1,!1)
r.f=new V.V(0,0,0)
r.ch=100
n.z=r
r=new O.h2(n,"bump")
r.c=new A.a_(!1,!1,!1)
n.Q=r
n.ch=null
r=new O.av(n,"reflect")
r.c=new A.a_(!1,!1,!1)
r.f=new V.V(0,0,0)
n.cx=r
r=new O.h5(n,"refract")
r.c=new A.a_(!1,!1,!1)
r.f=new V.V(0,0,0)
r.ch=1
n.cy=r
r=new O.h1(n,"alpha")
r.c=new A.a_(!1,!1,!1)
r.f=1
n.db=r
r=new D.d5()
r.bv(D.a4)
r.e=H.b([],[D.eU])
r.f=H.b([],[D.bq])
r.r=H.b([],[D.hB])
r.x=H.b([],[D.i0])
r.z=r.y=null
r.ct(r.geR(),r.gfu(),r.gfA())
n.dx=r
m=new O.h4()
m.b=new V.as(0,0,0,0)
m.c=1
m.d=10
m.e=!1
n.dy=m
m=r.y
r=m==null?r.y=D.K():m
r.n(0,n.gfN())
r=n.dx
m=r.z
r=m==null?r.z=D.K():m
r.n(0,n.geZ())
n.fr=null
n.dx.n(0,q)
n.dx.n(0,p)
n.dx.n(0,o)
n.f.sax(0,new V.V(0,0,0))
r=n.r
r.sax(0,new V.V(0.1,0.1,0.1))
r=n.x
r.sax(0,new V.V(0.7,0.7,0.7))
r=n.z
r.sax(0,new V.V(0.3,0.3,0.3))
r=n.z
r.cV(new A.a_(!0,!1,!1))
r.cW(100)
l=E.li()
l.sah(0,F.mi())
k=E.li()
k.sb5(U.le(V.lo(3,3,3,1)))
r=F.kV(1,b,b,1)
r.c9()
k.sah(0,r)
j=new U.c_()
j.bv(U.ac)
j.bb(j.geP(),j.gfw())
j.e=null
j.f=V.db()
j.r=0
r=s.x
m=new U.dH()
i=U.kt()
i.scr(0,!0)
i.scd(6.283185307179586)
i.scf(0)
i.sY(0,0)
i.sce(100)
i.sV(0)
i.sc_(0.5)
m.b=i
h=m.gaJ()
i.gB().n(0,h)
i=U.kt()
i.scr(0,!0)
i.scd(6.283185307179586)
i.scf(0)
i.sY(0,0)
i.sce(100)
i.sV(0)
i.sc_(0.5)
m.c=i
i.gB().n(0,h)
m.d=null
m.r=m.f=m.e=!1
m.y=m.x=2.5
m.Q=4
m.ch=m.cx=!1
m.db=m.cy=0
m.dx=null
m.dy=0
m.fx=m.fr=null
g=new X.ah(!1,!1,!1)
f=m.d
m.d=g
i=new D.C(a,f,g)
i.b=!0
m.J(i)
i=m.f
if(i!==!1){m.f=!1
i=new D.C("invertX",i,!1)
i.b=!0
m.J(i)}i=m.r
if(i!==!1){m.r=!1
i=new D.C("invertY",i,!1)
i.b=!0
m.J(i)}m.b_(r)
j.n(0,m)
r=s.x
m=new U.dG()
i=U.kt()
i.scr(0,!0)
i.scd(6.283185307179586)
i.scf(0)
i.sY(0,0)
i.sce(100)
i.sV(0)
i.sc_(0.2)
m.b=i
i.gB().n(0,m.gaJ())
m.c=null
m.d=!1
m.e=2.5
m.r=4
m.x=m.y=!1
m.z=0
m.Q=null
m.ch=0
m.cy=m.cx=null
g=new X.ah(!0,!1,!1)
f=m.c
m.c=g
i=new D.C(a,f,g)
i.b=!0
m.J(i)
m.b_(r)
j.n(0,m)
r=s.x
m=new U.dI()
m.c=0.01
m.e=m.d=0
g=new X.ah(!1,!1,!1)
m.b=g
i=new D.C(a,b,g)
i.b=!0
m.J(i)
m.b_(r)
j.n(0,m)
j.n(0,U.le(V.aw(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
r=new M.cY()
r.a=!0
m=O.ks(E.aO)
r.e=m
m.bb(r.gf0(),r.gf2())
r.y=r.x=r.r=r.f=null
e=X.mX(b)
d=new X.di()
d.c=1.0471975511965976
d.d=0.1
d.e=2000
d.sb5(b)
m=d.c
if(!(Math.abs(m-1.0471975511965976)<$.A().a)){d.c=1.0471975511965976
m=new D.C("fov",m,1.0471975511965976)
m.b=!0
d.aK(m)}m=d.d
if(!(Math.abs(m-0.1)<$.A().a)){d.d=0.1
m=new D.C("near",m,0.1)
m.b=!0
d.aK(m)}m=d.e
if(!(Math.abs(m-2000)<$.A().a)){d.e=2000
m=new D.C("far",m,2000)
m.b=!0
d.aK(m)}m=r.b
if(m!==d){if(m!=null)m.gB().O(0,r.gak())
f=r.b
r.b=d
d.gB().n(0,r.gak())
m=new D.C("camera",f,r.b)
m.b=!0
r.at(m)}m=r.c
if(m!==e){if(m!=null)m.gB().O(0,r.gak())
f=r.c
r.c=e
e.gB().n(0,r.gak())
m=new D.C("target",f,r.c)
m.b=!0
r.at(m)}r.sdU(b)
r.sdU(n)
r.e.n(0,l)
r.e.n(0,k)
r.b.sb5(j)
m=s.d
if(m!==r){if(m!=null)m.gB().O(0,s.gcA())
s.d=r
r.gB().n(0,s.gcA())
s.cB()}r=new V.hE("shapes")
u=u.getElementById("shapes")
r.c=u
if(u==null)H.p("Failed to find shapes for RadioGroup")
r.aZ(0,"Cube",new U.k8(l))
r.aZ(0,"Cylinder",new U.k9(l))
r.aZ(0,"Cone",new U.ka(l))
r.aZ(0,"Sphere",new U.kb(l))
r.d2(0,"Toroid",new U.kc(l),!0)
r.aZ(0,"Knot",new U.kd(l))
u=s.Q
if(u==null)u=s.Q=D.K()
r=u.b
u=r==null?u.b=H.b([],[{func:1,ret:-1,args:[D.Y]}]):r
u.push(new U.ke(a0,n))
V.p4(s)},
k8:function k8(a){this.a=a},
k9:function k9(a){this.a=a},
ka:function ka(a){this.a=a},
kb:function kb(a){this.a=a},
kc:function kc(a){this.a=a},
kd:function kd(a){this.a=a},
ke:function ke(a,b){this.a=a
this.b=b}},M={cY:function cY(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
nb:function(a,b){var u=a.b2,t=new A.h0(b,u)
t.eg(b,u)
t.ed(a,b)
return t},
nc:function(a,b,c,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="MaterialLight_"+a2.gaj(a2)+a3.gaj(a3)+a4.gaj(a4)+a5.gaj(a5)+a6.gaj(a6)+a7.gaj(a7)+a8.gaj(a8)+a9.gaj(a9)+b0.gaj(b0)+"_"
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
e=$.b_()
if(j){u=$.aZ()
e=new Z.bg(e.a|u.a)}if(i){u=$.aY()
e=new Z.bg(e.a|u.a)}if(h){u=$.aX()
e=new Z.bg(e.a|u.a)}return new A.h3(a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,s,o,k,o,r,g,!0,f,!1,m,r,l,j,i,!1,!1,h,!1,!1,c,!1,a1,d.charCodeAt(0)==0?d:d,e)},
jS:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
jT:function(a,b,c){var u
A.jS(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.eJ(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
oj:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.jS(b,t,"emission")
t=b.a+="\n"
t+="vec3 emissionColor()\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   return emissionClr;\n"
b.a=t}t+="}\n"
b.a=t
b.a=t+"\n"},
of:function(a,b){var u,t=a.b
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.jT(b,t,"ambient")
b.a+="\n"},
oh:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.jT(b,t,"diffuse")
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
ok:function(a,b){var u,t=a.d
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.jT(b,t,"invDiffuse")
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
oq:function(a,b){var u,t=a.e
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.jT(b,t,"specular")
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
om:function(a,b){var u,t,s
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
oo:function(a,b){var u,t=a.r,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.jS(b,t,"reflect")
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
op:function(a,b){var u,t=a.x,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.jS(b,t,"refract")
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
og:function(a,b,c){var u,t,s,r,q,p,o=b.b
if(o<=0)return
u=b.a
t="barLight"+H.e(u)
s=A.eJ(t)
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
if(typeof u!=="number")return u.a7()
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
oi:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.e(u)
s=A.eJ(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.a7()
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
on:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.e(u)
s=A.eJ(t)
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
if(typeof u!=="number")return u.a7()
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
or:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.e(u)
s=A.eJ(t)
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
if(typeof u!=="number")return u.a7()
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
if(o){u=$.fl
if(u==null)u=$.fl=new E.dT(E.lO(),E.lP())
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
ol:function(a,b){var u,t
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
os:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.R("")
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
A.oj(a,j)
A.of(a,j)
A.oh(a,j)
A.ok(a,j)
A.oq(a,j)
t=a.db
if(t){r=j.a+="// === Environmental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.oo(a,j)
A.op(a,j)}A.om(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.l)(q),++o)A.og(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.l)(q),++o)A.oi(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.l)(q),++o)A.on(a,q[o],j)
for(q=a.cx,p=q.length,o=0;o<q.length;q.length===p||(0,H.l)(q),++o)A.or(a,q[o],j)
A.ol(a,j)}q=j.a+="// === Main ===\n"
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
j.a+=m+(r[0].toUpperCase()+C.a.a5(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.l)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a5(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.l)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a5(r,1))+"Values(norm);\n"}for(u=a.cx,t=u.length,o=0;o<u.length;u.length===t||(0,H.l)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a5(r,1))+"Values(norm);\n"}if(a.cy<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)u=!1
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
ot:function(a,b){var u,t,s
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
ov:function(a,b){var u
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
ou:function(a,b){var u
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
ox:function(a,b){var u,t
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
oy:function(a,b){var u,t
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
ow:function(a,b){var u
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
oz:function(a,b){var u
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
eJ:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.a.a5(a,1)},
kJ:function(a,b,c,d,e){var u=new A.ir(a,c,e)
u.f=d
P.n8(d,0,P.w)
return u},
cN:function cN(a,b,c){this.a=a
this.b=b
this.c=c},
eP:function eP(a){this.a=a},
a_:function a_(a,b,c){this.a=a
this.b=b
this.c=c},
h0:function h0(a,b){var _=this
_.io=_.im=_.bj=_.b2=_.bi=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iB=_.iA=_.iz=_.c7=_.c6=_.c5=_.c4=_.c3=_.c2=_.c1=_.c0=_.iy=_.ix=_.dm=_.iw=_.iv=_.dl=_.dk=_.iu=_.it=_.dj=_.di=_.is=_.ir=_.dh=_.iq=_.ip=_.dg=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cO:function cO(a,b){this.a=a
this.b=b},
cV:function cV(a,b){this.a=a
this.b=b},
dj:function dj(a,b){this.a=a
this.b=b},
dq:function dq(a,b){this.a=a
this.b=b},
h3:function h3(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.b2=b4
_.bj=b5},
ck:function ck(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cl:function cl(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cn:function cn(a,b,c,d,e,f,g,h,i,j){var _=this
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
co:function co(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
iw:function iw(a){this.a=a},
be:function be(a,b,c){this.a=a
this.c=b
this.d=c},
it:function it(a,b,c){this.a=a
this.c=b
this.d=c},
iu:function iu(a,b,c){this.a=a
this.c=b
this.d=c},
iv:function iv(a,b,c){this.a=a
this.c=b
this.d=c},
ir:function ir(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
W:function W(a,b,c){this.a=a
this.c=b
this.d=c},
is:function is(a,b,c){this.a=a
this.c=b
this.d=c},
G:function G(a,b,c){this.a=a
this.c=b
this.d=c},
cj:function cj(a,b,c){this.a=a
this.c=b
this.d=c},
ix:function ix(a,b,c){this.a=a
this.c=b
this.d=c},
cm:function cm(a,b,c){this.a=a
this.c=b
this.d=c},
ad:function ad(a,b,c){this.a=a
this.c=b
this.d=c},
bD:function bD(a,b,c){this.a=a
this.c=b
this.d=c},
bE:function bE(a,b,c){this.a=a
this.c=b
this.d=c}},F={
kV:function(a,b,c,d){var u=F.kH()
F.cD(u,b,c,d,a,1,0,0,1)
F.cD(u,b,c,d,a,0,1,0,3)
F.cD(u,b,c,d,a,0,0,1,2)
F.cD(u,b,c,d,a,-1,0,0,0)
F.cD(u,b,c,d,a,0,-1,0,0)
F.cD(u,b,c,d,a,0,0,-1,3)
u.an()
return u},
jN:function(a){var u=a.a>0?1:0
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
j.d=i}m=F.jN(i)
l=F.jN(h)
k=F.l1(d,a0,new F.jM(j,F.jN(g),F.jN(f),l,m,c),b)
if(k!=null)a.b4(k)},
m7:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(e<3)return
u=F.kH()
t=b?-1:1
s=-6.283185307179586/e
r=H.b([],[F.bf])
q=u.a
p=new V.z(0,0,t)
p=p.v(0,Math.sqrt(p.D(p)))
r.push(q.h6(new V.bc(a,-1,-1,-1),new V.as(1,1,1,1),new V.U(0,0,c),new V.z(0,0,t),new V.a6(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.r(k)
j=new V.z(m,l,t).v(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.dJ(new V.bc(a,-1,-1,-1),null,new V.as(i,g,h,1),new V.U(m*k,l*k,c),new V.z(0,0,t),new V.a6(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.n(0,f)
r.push(f)}u.d.h4(r)
return u},
m5:function(a,b,c){return F.oL(!0,a,1,new F.jW(1,c),b)},
oL:function(a,b,c,d,e){var u
if(e<3)return
if(c<1)return
u=F.l1(c,e,new F.jY(d),null)
if(u==null)return
u.an()
u.bS()
if(b)u.b4(F.m7(3,!1,1,new F.jZ(d),e))
u.b4(F.m7(1,!0,-1,new F.k_(d),e))
return u},
p5:function(a,b){var u,t,s={}
s.a=u
s.a=null
s.a=new F.kh()
t=F.kV(a,null,new F.ki(s,1),b)
t.bS()
return t},
mi:function(){return F.m6(15,30,0.5,1,new F.kk())},
oZ:function(){return F.m6(12,120,0.3,1,new F.k7(3,2))},
m6:function(a,b,c,d,e){var u=F.l1(a,b,new F.jX(e,d,b,c),null)
if(u==null)return
u.an()
u.bS()
return u},
l1:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.kH()
t=H.b([],[F.bf])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.dJ(g,g,new V.as(p,0,0,1),g,g,new V.a6(r,1),g,g,0)
q.n(0,o)
c.$3(o,r,0)
t.push(o.bZ(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.dJ(g,g,new V.as(j,i,h,1),g,g,new V.a6(r,m),g,g,0)
k.n(0,o)
c.$3(o,r,n)
t.push(o.bZ(d))}}u.d.h5(a+1,b+1,t)
return u},
bY:function(a,b,c){var u=new F.b3(),t=a.a
if(t==null)H.p(P.v("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.p(P.v("May not create a face with vertices attached to different shapes."))
u.bQ(a)
u.bR(b)
u.fS(c)
u.a.a.d.b.push(u)
u.a.a.Z()
return u},
n4:function(a,b){var u=new F.c3(),t=a.a
if(t==null)H.p(P.v("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.p(P.v("May not create a line with vertices attached to different shapes."))
u.bQ(a)
u.bR(b)
u.a.a.c.b.push(u)
u.a.a.Z()
return u},
kH:function(){var u=new F.hQ(),t=new F.iP(u)
t.b=!1
t.c=H.b([],[F.bf])
u.a=t
t=new F.hT(u)
t.b=H.b([],[F.cc])
u.b=t
t=new F.hS(u)
t.b=H.b([],[F.c3])
u.c=t
t=new F.hR(u)
t.b=H.b([],[F.b3])
u.d=t
u.e=null
return u},
dJ:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.bf(),r=new F.iX()
r.b=H.b([],[F.cc])
s.b=r
r=new F.iT()
u=[F.c3]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.iQ()
u=[F.b3]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.mw()
s.e=0
r=$.b_()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aZ().a)!==0?e:t
s.x=(u&$.aY().a)!==0?b:t
s.y=(u&$.bj().a)!==0?f:t
s.z=(u&$.bk().a)!==0?g:t
s.Q=(u&$.mx().a)!==0?c:t
s.ch=(u&$.bR().a)!==0?i:0
s.cx=(u&$.aX().a)!==0?a:t
return s},
jM:function jM(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jW:function jW(a,b){this.a=a
this.b=b},
jY:function jY(a){this.a=a},
jZ:function jZ(a){this.a=a},
k_:function k_(a){this.a=a},
kh:function kh(){},
ki:function ki(a,b){this.a=a
this.b=b},
kk:function kk(){},
k7:function k7(a,b){this.a=a
this.b=b},
jX:function jX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b3:function b3(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fp:function fp(){},
hY:function hY(){},
c3:function c3(){this.b=this.a=null},
fO:function fO(){},
iq:function iq(){},
cc:function cc(){this.a=null},
hQ:function hQ(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hR:function hR(a){this.a=a
this.b=null},
hS:function hS(a){this.a=a
this.b=null},
hT:function hT(a){this.a=a
this.b=null},
bf:function bf(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iZ:function iZ(a){this.a=a},
iY:function iY(a){this.a=a},
iP:function iP(a){this.a=a
this.c=this.b=null},
iQ:function iQ(){this.d=this.c=this.b=null},
iR:function iR(a,b){this.a=a
this.b=b},
iS:function iS(a,b){this.a=a
this.b=b},
iT:function iT(){this.c=this.b=null},
iV:function iV(){},
iU:function iU(){},
iW:function iW(){},
ht:function ht(){},
iX:function iX(){this.b=null}},T={id:function id(){}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kB.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gK:function(a){return H.cd(a)},
i:function(a){return"Instance of '"+H.e(H.ce(a))+"'"}}
J.fH.prototype={
i:function(a){return String(a)},
gK:function(a){return a?519018:218159},
$iaI:1}
J.d2.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gK:function(a){return 0}}
J.d3.prototype={
gK:function(a){return 0},
i:function(a){return String(a)},
$in2:1}
J.hy.prototype={}
J.bF.prototype={}
J.b6.prototype={
i:function(a){var u=a[$.mk()]
if(u==null)return this.ea(a)
return"JavaScript function for "+H.e(J.a3(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.b4.prototype={
cl:function(a,b){if(!!a.fixed$length)H.p(P.y("removeAt"))
if(b<0||b>=a.length)throw H.c(P.dk(b,null))
return a.splice(b,1)[0]},
O:function(a,b){var u
if(!!a.fixed$length)H.p(P.y("remove"))
for(u=0;u<a.length;++u)if(J.F(a[u],b)){a.splice(u,1)
return!0}return!1},
ab:function(a,b){var u,t
if(!!a.fixed$length)H.p(P.y("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.l)(b),++t)a.push(b[t])},
H:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.c(P.aM(a))}},
j:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.d(r,u)
r[u]=t}return r.join(b)},
hE:function(a){return this.j(a,"")},
hx:function(a,b,c){var u,t,s=a.length
for(u=b,t=0;t<s;++t){u=c.$2(u,a[t])
if(a.length!==s)throw H.c(P.aM(a))}return u},
hy:function(a,b,c){return this.hx(a,b,c,null)},
hw:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.c(P.aM(a))}throw H.c(H.fF())},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
e6:function(a,b,c){if(b<0||b>a.length)throw H.c(P.X(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.c(P.X(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.aJ(a,0)])
return H.b(a.slice(b,c),[H.aJ(a,0)])},
ghv:function(a){if(a.length>0)return a[0]
throw H.c(H.fF())},
gap:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.fF())},
d5:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.c(P.aM(a))}return!1},
aV:function(a,b){if(!!a.immutable$list)H.p(P.y("sort"))
H.ny(a,b==null?J.oc():b)},
e5:function(a){return this.aV(a,null)},
F:function(a,b){var u
for(u=0;u<a.length;++u)if(J.F(a[u],b))return!0
return!1},
i:function(a){return P.ky(a,"[","]")},
gT:function(a){return new J.aa(a,a.length)},
gK:function(a){return H.cd(a)},
gm:function(a){return a.length},
sm:function(a,b){var u="newLength"
if(!!a.fixed$length)H.p(P.y("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.kp(b,u,null))
if(b<0)throw H.c(P.X(b,0,null,u,null))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bO(a,b))
return a[b]},
l:function(a,b,c){if(!!a.immutable$list)H.p(P.y("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bO(a,b))
a[b]=c},
$iq:1,
$ij:1,
$io:1}
J.kA.prototype={}
J.aa.prototype={
gC:function(a){return this.d},
u:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.l(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.c2.prototype={
aQ:function(a,b){var u
if(typeof b!=="number")throw H.c(H.aj(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbl(b)
if(this.gbl(a)===u)return 0
if(this.gbl(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbl:function(a){return a===0?1/a<0:a<0},
dn:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.y(""+a+".floor()"))},
ai:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.y(""+a+".round()"))},
dW:function(a,b){var u
if(b>20)throw H.c(P.X(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbl(a))return"-"+u
return u},
b8:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.X(b,2,36,"radix",null))
u=a.toString(b)
if(C.a.W(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.p(P.y("Unexpected toString result: "+u))
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
gK:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
ba:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
ec:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cY(a,b)},
a3:function(a,b){return(a|0)===a?a/b|0:this.cY(a,b)},
cY:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.y("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
aN:function(a,b){var u
if(a>0)u=this.cX(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
fW:function(a,b){if(b<0)throw H.c(H.aj(b))
return this.cX(a,b)},
cX:function(a,b){return b>31?0:a>>>b},
$iL:1,
$ia9:1}
J.d1.prototype={$iw:1}
J.fI.prototype={}
J.b5.prototype={
W:function(a,b){if(b<0)throw H.c(H.bO(a,b))
if(b>=a.length)H.p(H.bO(a,b))
return a.charCodeAt(b)},
E:function(a,b){if(b>=a.length)throw H.c(H.bO(a,b))
return a.charCodeAt(b)},
A:function(a,b){if(typeof b!=="string")throw H.c(P.kp(b,null,null))
return a+b},
aT:function(a,b,c,d){var u,t
c=P.aU(b,c,a.length)
if(typeof c!=="number"||Math.floor(c)!==c)H.p(H.aj(c))
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a4:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.X(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a2:function(a,b){return this.a4(a,b,0)},
t:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.p(H.aj(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.P()
if(b<0)throw H.c(P.dk(b,null))
if(b>c)throw H.c(P.dk(b,null))
if(c>a.length)throw H.c(P.dk(c,null))
return a.substring(b,c)},
a5:function(a,b){return this.t(a,b,null)},
i8:function(a){return a.toLowerCase()},
p:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.Q)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ae:function(a,b){var u=b-a.length
if(u<=0)return a
return this.p(" ",u)+a},
bk:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.X(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
dv:function(a,b){return this.bk(a,b,0)},
he:function(a,b,c){var u=a.length
if(c>u)throw H.c(P.X(c,0,u,null,null))
return H.mg(a,b,c)},
F:function(a,b){return this.he(a,b,0)},
aQ:function(a,b){var u
if(typeof b!=="string")throw H.c(H.aj(b))
if(a===b)u=0
else u=a<b?-1:1
return u},
i:function(a){return a},
gK:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gm:function(a){return a.length},
$ih:1}
H.m.prototype={
gm:function(a){return this.a.length},
h:function(a,b){return C.a.W(this.a,b)},
$aq:function(){return[P.w]},
$ax:function(){return[P.w]},
$aj:function(){return[P.w]},
$ao:function(){return[P.w]}}
H.q.prototype={}
H.d6.prototype={
gT:function(a){return new H.b7(this,this.gm(this))},
bs:function(a,b){return this.e9(0,b)}}
H.b7.prototype={
gC:function(a){return this.d},
u:function(){var u,t=this,s=t.a,r=J.aq(s),q=r.gm(s)
if(t.b!=q)throw H.c(P.aM(s))
u=t.c
if(typeof q!=="number")return H.r(q)
if(u>=q){t.d=null
return!1}t.d=r.M(s,u);++t.c
return!0}}
H.c5.prototype={
gT:function(a){return new H.fZ(J.aK(this.a),this.b)},
gm:function(a){return J.af(this.a)},
M:function(a,b){return this.b.$1(J.eK(this.a,b))},
$aj:function(a,b){return[b]}}
H.fi.prototype={$iq:1,
$aq:function(a,b){return[b]}}
H.fZ.prototype={
u:function(){var u=this,t=u.b
if(t.u()){u.a=u.c.$1(t.gC(t))
return!0}u.a=null
return!1},
gC:function(a){return this.a}}
H.h_.prototype={
gm:function(a){return J.af(this.a)},
M:function(a,b){return this.b.$1(J.eK(this.a,b))},
$aq:function(a,b){return[b]},
$ad6:function(a,b){return[b]},
$aj:function(a,b){return[b]}}
H.cq.prototype={
gT:function(a){return new H.j1(J.aK(this.a),this.b)}}
H.j1.prototype={
u:function(){var u,t
for(u=this.a,t=this.b;u.u();)if(t.$1(u.gC(u)))return!0
return!1},
gC:function(a){var u=this.a
return u.gC(u)}}
H.cZ.prototype={}
H.iB.prototype={
l:function(a,b,c){throw H.c(P.y("Cannot modify an unmodifiable list"))}}
H.dD.prototype={}
H.f3.prototype={
i:function(a){return P.kF(this)},
l:function(a,b,c){return H.mS()},
$iQ:1}
H.f4.prototype={
gm:function(a){return this.a},
bX:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.bX(0,b))return
return this.cL(b)},
cL:function(a){return this.b[a]},
H:function(a,b){var u,t,s,r=this.c
for(u=r.length,t=0;t<u;++t){s=r[t]
b.$2(s,this.cL(s))}}}
H.io.prototype={
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
H.hu.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fL.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.iA.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kl.prototype={
$1:function(a){if(!!J.S(a).$ibr)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:8}
H.ej.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bV.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.cI(t==null?"unknown":t)+"'"},
gib:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.ia.prototype={}
H.i2.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cI(u)+"'"}}
H.bT.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bT))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gK:function(a){var u,t=this.c
if(t==null)u=H.cd(this.a)
else u=typeof t!=="object"?J.cM(t):H.cd(t)
return(u^H.cd(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.ce(u))+"'")}}
H.eZ.prototype={
i:function(a){return this.a}}
H.hN.prototype={
i:function(a){return"RuntimeError: "+H.e(this.a)}}
H.I.prototype={
gm:function(a){return this.a},
ghD:function(a){return this.a===0},
ga_:function(a){return new H.fQ(this,[H.aJ(this,0)])},
gia:function(a){var u=this
return H.na(u.ga_(u),new H.fK(u),H.aJ(u,0),H.aJ(u,1))},
bX:function(a,b){var u=this.b
if(u==null)return!1
return this.eB(u,b)},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bd(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bd(r,b)
s=t==null?null:t.b
return s}else return q.hB(b)},
hB:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.cN(r,s.dw(a))
t=s.dz(u,a)
if(t<0)return
return u[t].b},
l:function(a,b,c){var u,t,s=this
if(typeof b==="string"){u=s.b
s.cE(u==null?s.b=s.bJ():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cE(t==null?s.c=s.bJ():t,b,c)}else s.hC(b,c)},
hC:function(a,b){var u,t,s,r=this,q=r.d
if(q==null)q=r.d=r.bJ()
u=r.dw(a)
t=r.cN(q,u)
if(t==null)r.bO(q,u,[r.bK(a,b)])
else{s=r.dz(t,a)
if(s>=0)t[s].b=b
else t.push(r.bK(a,b))}},
H:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.c(P.aM(u))
t=t.c}},
cE:function(a,b,c){var u=this.bd(a,b)
if(u==null)this.bO(a,b,this.bK(b,c))
else u.b=c},
eM:function(){this.r=this.r+1&67108863},
bK:function(a,b){var u,t=this,s=new H.fP(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.eM()
return s},
dw:function(a){return J.cM(a)&0x3ffffff},
dz:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.F(a[t].a,b))return t
return-1},
i:function(a){return P.kF(this)},
bd:function(a,b){return a[b]},
cN:function(a,b){return a[b]},
bO:function(a,b,c){a[b]=c},
eF:function(a,b){delete a[b]},
eB:function(a,b){return this.bd(a,b)!=null},
bJ:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bO(t,u,t)
this.eF(t,u)
return t}}
H.fK.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.aJ(u,1),args:[H.aJ(u,0)]}}}
H.fP.prototype={}
H.fQ.prototype={
gm:function(a){return this.a.a},
gT:function(a){var u=this.a,t=new H.fR(u,u.r)
t.c=u.e
return t}}
H.fR.prototype={
gC:function(a){return this.d},
u:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.aM(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.k3.prototype={
$1:function(a){return this.a(a)},
$S:8}
H.k4.prototype={
$2:function(a,b){return this.a(a,b)}}
H.k5.prototype={
$1:function(a){return this.a(a)}}
H.fJ.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$inr:1}
H.c9.prototype={$ic9:1}
H.b9.prototype={$ib9:1}
H.dc.prototype={
gm:function(a){return a.length},
$iB:1,
$aB:function(){}}
H.ca.prototype={
h:function(a,b){H.aH(b,a,a.length)
return a[b]},
l:function(a,b,c){H.aH(b,a,a.length)
a[b]=c},
$iq:1,
$aq:function(){return[P.L]},
$ax:function(){return[P.L]},
$ij:1,
$aj:function(){return[P.L]},
$io:1,
$ao:function(){return[P.L]}}
H.dd.prototype={
l:function(a,b,c){H.aH(b,a,a.length)
a[b]=c},
$iq:1,
$aq:function(){return[P.w]},
$ax:function(){return[P.w]},
$ij:1,
$aj:function(){return[P.w]},
$io:1,
$ao:function(){return[P.w]}}
H.hm.prototype={
h:function(a,b){H.aH(b,a,a.length)
return a[b]}}
H.hn.prototype={
h:function(a,b){H.aH(b,a,a.length)
return a[b]}}
H.ho.prototype={
h:function(a,b){H.aH(b,a,a.length)
return a[b]}}
H.hp.prototype={
h:function(a,b){H.aH(b,a,a.length)
return a[b]}}
H.hq.prototype={
h:function(a,b){H.aH(b,a,a.length)
return a[b]}}
H.de.prototype={
gm:function(a){return a.length},
h:function(a,b){H.aH(b,a,a.length)
return a[b]}}
H.cb.prototype={
gm:function(a){return a.length},
h:function(a,b){H.aH(b,a,a.length)
return a[b]},
$icb:1,
$ibC:1}
H.cu.prototype={}
H.cv.prototype={}
H.cw.prototype={}
H.cx.prototype={}
P.j3.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:16}
P.j2.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.j4.prototype={
$0:function(){this.a.$0()}}
P.j5.prototype={
$0:function(){this.a.$0()}}
P.ep.prototype={
eo:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bN(new P.jC(this,b),0),a)
else throw H.c(P.y("`setTimeout()` not found."))},
ep:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bN(new P.jB(this,a,Date.now(),b),0),a)
else throw H.c(P.y("Periodic timer."))},
$idx:1}
P.jC.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.jB.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.ec(u,q)}s.c=r
t.d.$1(s)}}
P.bG.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.e(this.a)+")"}}
P.bH.prototype={
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
if(t instanceof P.bG){s=t.b
if(s===2){u=q.d
if(u==null||u.length===0){q.b=null
return!1}if(0>=u.length)return H.d(u,-1)
q.a=u.pop()
continue}else{u=t.a
if(s===3)throw u
else{r=J.aK(u)
if(!!r.$ibH){u=q.d
if(u==null)u=q.d=[]
u.push(q.a)
q.a=r.a
continue}else{q.c=r
continue}}}}else{q.b=t
return!0}}return!1}}
P.jy.prototype={
gT:function(a){return new P.bH(this.a())}}
P.dL.prototype={}
P.dt.prototype={}
P.i5.prototype={}
P.dx.prototype={}
P.jL.prototype={}
P.jU.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dh():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u}}
P.jj.prototype={
i3:function(a){var u,t,s,r=null
try{if(C.f===$.ap){a.$0()
return}P.oB(r,r,this,a)}catch(s){u=H.ae(s)
t=H.kX(s)
P.m_(r,r,this,u,t)}},
i4:function(a,b){var u,t,s,r=null
try{if(C.f===$.ap){a.$1(b)
return}P.oC(r,r,this,a,b)}catch(s){u=H.ae(s)
t=H.kX(s)
P.m_(r,r,this,u,t)}},
i5:function(a,b){return this.i4(a,b,null)},
ha:function(a){return new P.jk(this,a)},
da:function(a,b){return new P.jl(this,a,b)}}
P.jk.prototype={
$0:function(){return this.a.i3(this.b)}}
P.jl.prototype={
$1:function(a){return this.a.i5(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jg.prototype={
gT:function(a){var u=new P.e0(this,this.r)
u.c=this.e
return u},
gm:function(a){return this.a},
F:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.ez(b)
return t}},
ez:function(a){var u=this.d
if(u==null)return!1
return this.bA(this.cM(u,a),a)>=0},
n:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cF(u==null?s.b=P.kN():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cF(t==null?s.c=P.kN():t,b)}else return s.er(0,b)},
er:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.kN()
u=s.cH(b)
t=r[u]
if(t==null)r[u]=[s.bx(b)]
else{if(s.bA(t,b)>=0)return!1
t.push(s.bx(b))}return!0},
O:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fJ(this.c,b)
else return this.fI(0,b)},
fI:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cM(r,b)
t=s.bA(u,b)
if(t<0)return!1
s.d_(u.splice(t,1)[0])
return!0},
cF:function(a,b){if(a[b]!=null)return!1
a[b]=this.bx(b)
return!0},
fJ:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.d_(u)
delete a[b]
return!0},
cG:function(){this.r=1073741823&this.r+1},
bx:function(a){var u,t=this,s=new P.jh(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cG()
return s},
d_:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cG()},
cH:function(a){return J.cM(a)&1073741823},
cM:function(a,b){return a[this.cH(b)]},
bA:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.F(a[t].a,b))return t
return-1}}
P.jh.prototype={}
P.e0.prototype={
gC:function(a){return this.d},
u:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.aM(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fE.prototype={}
P.fS.prototype={
$2:function(a,b){this.a.l(0,a,b)},
$S:3}
P.fT.prototype={$iq:1,$ij:1,$io:1}
P.x.prototype={
gT:function(a){return new H.b7(a,this.gm(a))},
M:function(a,b){return this.h(a,b)},
i7:function(a,b){var u,t,s=this,r=H.b([],[H.oR(s,a,"x",0)])
C.b.sm(r,s.gm(a))
u=0
while(!0){t=s.gm(a)
if(typeof t!=="number")return H.r(t)
if(!(u<t))break
t=s.h(a,u)
if(u>=r.length)return H.d(r,u)
r[u]=t;++u}return r},
i6:function(a){return this.i7(a,!0)},
ht:function(a,b,c,d){var u
P.aU(b,c,this.gm(a))
for(u=b;u<c;++u)this.l(a,u,d)},
i:function(a){return P.ky(a,"[","]")}}
P.fW.prototype={}
P.fX.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:3}
P.a0.prototype={
H:function(a,b){var u,t
for(u=J.aK(this.ga_(a));u.u();){t=u.gC(u)
b.$2(t,this.h(a,t))}},
gm:function(a){return J.af(this.ga_(a))},
i:function(a){return P.kF(a)},
$iQ:1}
P.jD.prototype={
l:function(a,b,c){throw H.c(P.y("Cannot modify unmodifiable map"))}}
P.fY.prototype={
h:function(a,b){return J.bS(this.a,b)},
l:function(a,b,c){J.kn(this.a,b,c)},
H:function(a,b){J.l5(this.a,b)},
gm:function(a){return J.af(this.a)},
i:function(a){return J.a3(this.a)},
$iQ:1}
P.dE.prototype={}
P.jn.prototype={
ab:function(a,b){var u
for(u=J.aK(b);u.u();)this.n(0,u.gC(u))},
i:function(a){return P.ky(this,"{","}")},
M:function(a,b){var u,t,s
P.lv(b,"index")
for(u=P.nT(this,this.r),t=0;u.u();){s=u.d
if(b===t)return s;++t}throw H.c(P.N(b,this,"index",null,t))},
$iq:1,
$ij:1}
P.e1.prototype={}
P.eu.prototype={}
P.eV.prototype={
hH:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.aU(a0,a1,b.length)
u=$.mz()
if(typeof a1!=="number")return H.r(a1)
t=a0
s=t
r=null
q=-1
p=-1
o=0
for(;t<a1;t=n){n=t+1
m=C.a.E(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.k2(C.a.E(b,n))
j=H.k2(C.a.E(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.d(u,i)
h=u[i]
if(h>=0){i=C.a.W("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.R("")
g=r.a+=C.a.t(b,s,t)
r.a=g+H.bz(m)
s=n
continue}}throw H.c(P.T("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.a.t(b,s,a1)
f=g.length
if(q>=0)P.l9(b,p,a1,q,o,f)
else{e=C.c.ba(f-1,4)+1
if(e===1)throw H.c(P.T(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.a.aT(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.l9(b,p,a1,q,o,d)
else{e=C.c.ba(d,4)
if(e===1)throw H.c(P.T(c,b,a1))
if(e>1)b=C.a.aT(b,a1,a1,e===2?"==":"=")}return b}}
P.eW.prototype={}
P.f0.prototype={}
P.f5.prototype={}
P.fk.prototype={}
P.fC.prototype={
i:function(a){return this.a}}
P.fB.prototype={
eC:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.R("")
if(r>b)q.a+=C.a.t(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.mK(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.iJ.prototype={
ghs:function(){return C.R}}
P.iL.prototype={
bY:function(a){var u,t,s,r=P.aU(0,null,a.length)
if(typeof r!=="number")return r.L()
u=r-0
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.jJ(t)
if(s.eH(a,0,r)!==r)s.d1(J.mG(a,r-1),0)
return new Uint8Array(t.subarray(0,H.o9(0,s.b,t.length)))}}
P.jJ.prototype={
d1:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
eH:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.a.W(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.a.E(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.d1(r,C.a.E(a,p)))s=p}else if(r<=2047){q=n.b
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
P.iK.prototype={
bY:function(a){var u,t,s,r,q,p,o,n,m=P.nE(!1,a,0,null)
if(m!=null)return m
u=P.aU(0,null,J.af(a))
t=P.m1(a,0,u)
if(t>0){s=P.ch(a,0,t)
if(t===u)return s
r=new P.R(s)
q=t
p=!1}else{q=0
r=null
p=!0}if(r==null)r=new P.R("")
o=new P.jI(!1,r)
o.c=p
o.hf(a,q,u)
if(o.e>0){H.p(P.T("Unfinished UTF-8 octet sequence",a,u))
r.a+=H.bz(65533)
o.f=o.e=o.d=0}n=r.a
return n.charCodeAt(0)==0?n:n}}
P.jI.prototype={
hf:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=this,k="Bad UTF-8 encoding 0x",j=l.d,i=l.e,h=l.f
l.f=l.e=l.d=0
$label0$0:for(u=J.aq(a),t=l.b,s=b;!0;s=n){$label1$1:if(i>0){do{if(s===c)break $label0$0
r=u.h(a,s)
if(typeof r!=="number")return r.a7()
if((r&192)!==128){q=P.T(k+C.c.b8(r,16),a,s)
throw H.c(q)}else{j=(j<<6|r&63)>>>0;--i;++s}}while(i>0)
q=h-1
if(q<0||q>=4)return H.d(C.x,q)
if(j<=C.x[q]){q=P.T("Overlong encoding of 0x"+C.c.b8(j,16),a,s-h-1)
throw H.c(q)}if(j>1114111){q=P.T("Character outside valid Unicode range: 0x"+C.c.b8(j,16),a,s-h-1)
throw H.c(q)}if(!l.c||j!==65279)t.a+=H.bz(j)
l.c=!1}if(typeof c!=="number")return H.r(c)
q=s<c
for(;q;){p=P.m1(a,s,c)
if(p>0){l.c=!1
o=s+p
t.a+=P.ch(a,s,o)
if(o===c)break}else o=s
n=o+1
r=u.h(a,o)
if(typeof r!=="number")return r.P()
if(r<0){m=P.T("Negative UTF-8 code unit: -0x"+C.c.b8(-r,16),a,n-1)
throw H.c(m)}else{if((r&224)===192){j=r&31
i=1
h=1
continue $label0$0}if((r&240)===224){j=r&15
i=2
h=2
continue $label0$0}if((r&248)===240&&r<245){j=r&7
i=3
h=3
continue $label0$0}m=P.T(k+C.c.b8(r,16),a,n-1)
throw H.c(m)}}break $label0$0}if(i>0){l.d=j
l.e=i
l.f=h}}}
P.aI.prototype={}
P.ab.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.ab&&this.a===b.a&&!0},
aQ:function(a,b){return C.c.aQ(this.a,b.a)},
gK:function(a){var u=this.a
return(u^C.c.aN(u,30))&1073741823},
i:function(a){var u=this,t=P.mT(H.nn(u)),s=P.cU(H.nl(u)),r=P.cU(H.nh(u)),q=P.cU(H.ni(u)),p=P.cU(H.nk(u)),o=P.cU(H.nm(u)),n=P.mU(H.nj(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.L.prototype={}
P.b2.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.b2&&this.a===b.a},
gK:function(a){return C.c.gK(this.a)},
aQ:function(a,b){return C.c.aQ(this.a,b.a)},
i:function(a){var u,t,s,r=new P.fh(),q=this.a
if(q<0)return"-"+new P.b2(0-q).i(0)
u=r.$1(C.c.a3(q,6e7)%60)
t=r.$1(C.c.a3(q,1e6)%60)
s=new P.fg().$1(q%1e6)
return""+C.c.a3(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
P.fg.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.fh.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.br.prototype={}
P.dh.prototype={
i:function(a){return"Throw of null."}}
P.ak.prototype={
gbz:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gby:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbz()+o+u
if(!q.a)return t
s=q.gby()
r=P.kx(q.b)
return t+s+": "+r}}
P.bA.prototype={
gbz:function(){return"RangeError"},
gby:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.fD.prototype={
gbz:function(){return"RangeError"},
gby:function(){var u,t=this.b
if(typeof t!=="number")return t.P()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gm:function(a){return this.f}}
P.iC.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iy.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cg.prototype={
i:function(a){return"Bad state: "+this.a}}
P.f2.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.kx(u)+"."}}
P.hx.prototype={
i:function(a){return"Out of Memory"},
$ibr:1}
P.dr.prototype={
i:function(a){return"Stack Overflow"},
$ibr:1}
P.fa.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dU.prototype={
i:function(a){return"Exception: "+this.a}}
P.fv.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.a.t(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.a.E(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.a.W(f,q)
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
P.fx.prototype={}
P.w.prototype={}
P.j.prototype={
bs:function(a,b){return new H.cq(this,b,[H.kW(this,"j",0)])},
gm:function(a){var u,t=this.gT(this)
for(u=0;t.u();)++u
return u},
gaH:function(a){var u,t=this.gT(this)
if(!t.u())throw H.c(H.fF())
u=t.gC(t)
if(t.u())throw H.c(H.n_())
return u},
M:function(a,b){var u,t,s
P.lv(b,"index")
for(u=this.gT(this),t=0;u.u();){s=u.gC(u)
if(b===t)return s;++t}throw H.c(P.N(b,this,"index",null,t))},
i:function(a){return P.mZ(this,"(",")")}}
P.fG.prototype={}
P.o.prototype={$iq:1,$ij:1}
P.Q.prototype={}
P.ba.prototype={
gK:function(a){return P.a1.prototype.gK.call(this,this)},
i:function(a){return"null"}}
P.a9.prototype={}
P.a1.prototype={constructor:P.a1,$ia1:1,
q:function(a,b){return this===b},
gK:function(a){return H.cd(this)},
i:function(a){return"Instance of '"+H.e(H.ce(this))+"'"},
toString:function(){return this.i(this)}}
P.h.prototype={}
P.R.prototype={
gm:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
P.iH.prototype={
$2:function(a,b){var u,t,s,r=J.cG(b).dv(b,"=")
if(r===-1){if(b!=="")J.kn(a,P.kR(b,0,b.length,this.a,!0),"")}else if(r!==0){u=C.a.t(b,0,r)
t=C.a.a5(b,r+1)
s=this.a
J.kn(a,P.kR(u,0,u.length,s,!0),P.kR(t,0,t.length,s,!0))}return a}}
P.iE.prototype={
$2:function(a,b){throw H.c(P.T("Illegal IPv4 address, "+a,this.a,b))}}
P.iF.prototype={
$2:function(a,b){throw H.c(P.T("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.iG.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.eI(C.a.t(this.b,a,b),null,16)
if(typeof u!=="number")return u.P()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u}}
P.bI.prototype={
gdZ:function(){return this.b},
gca:function(a){var u=this.c
if(u==null)return""
if(C.a.a2(u,"["))return C.a.t(u,1,u.length-1)
return u},
gbn:function(a){var u=this.d
if(u==null)return P.lT(this.a)
return u},
gcj:function(a){var u=this.f
return u==null?"":u},
gdq:function(){var u=this.r
return u==null?"":u},
dQ:function(a,b){var u,t,s,r=this,q=r.a,p=q==="file",o=r.b,n=r.d,m=r.c
if(!(m!=null))m=o.length!==0||n!=null||p?"":null
u=r.e
if(!p)t=m!=null&&u.length!==0
else t=!0
if(t&&!C.a.a2(u,"/"))u="/"+u
s=P.kP(null,0,0,b)
return new P.bI(q,o,m,n,u,s,r.r)},
gck:function(){var u,t=this.Q
if(t==null){t=this.f
u=P.h
u=this.Q=new P.dE(P.lH(t==null?"":t),[u,u])
t=u}return t},
gdr:function(){return this.c!=null},
gdu:function(){return this.f!=null},
gds:function(){return this.r!=null},
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
if(!!J.S(b).$ikK)if(s.a==b.gbt())if(s.c!=null===b.gdr())if(s.b==b.gdZ())if(s.gca(s)==b.gca(b))if(s.gbn(s)==b.gbn(b))if(s.e===b.gdL(b)){u=s.f
t=u==null
if(!t===b.gdu()){if(t)u=""
if(u===b.gcj(b)){u=s.r
t=u==null
if(!t===b.gds()){if(t)u=""
u=u===b.gdq()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gK:function(a){var u=this.z
return u==null?this.z=C.a.gK(this.i(0)):u},
$ikK:1,
gbt:function(){return this.a},
gdL:function(a){return this.e}}
P.jE.prototype={
$1:function(a){throw H.c(P.T("Invalid port",this.a,this.b+1))}}
P.jF.prototype={
$1:function(a){return P.ev(C.a_,a,C.e,!1)}}
P.jH.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.e(P.ev(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.e(P.ev(C.h,b,C.e,!0))}}}
P.jG.prototype={
$2:function(a,b){var u,t
if(b==null||typeof b==="string")this.a.$2(a,b)
else for(u=J.aK(b),t=this.a;u.u();)t.$2(a,u.gC(u))}}
P.iD.prototype={
gdY:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.d(o,0)
u=q.a
o=o[0]+1
t=C.a.bk(u,"?",o)
s=u.length
if(t>=0){r=P.cC(u,t+1,s,C.k,!1)
s=t}else r=p
return q.c=new P.j9("data",p,p,p,P.cC(u,o,s,C.B,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.d(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.jP.prototype={
$1:function(a){return new Uint8Array(96)}}
P.jO.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.d(u,a)
u=u[a]
J.mH(u,0,96,b)
return u},
$S:17}
P.jQ.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.a.E(b,s)^96
if(r>=t)return H.d(a,r)
a[r]=c}}}
P.jR.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.a.E(b,0),t=C.a.E(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.d(a,r)
a[r]=c}}}
P.jq.prototype={
gdr:function(){return this.c>0},
gdt:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.A()
t=this.e
if(typeof t!=="number")return H.r(t)
t=u+1<t
u=t}else u=!1
return u},
gdu:function(){var u=this.f
if(typeof u!=="number")return u.P()
return u<this.r},
gds:function(){return this.r<this.a.length},
gcO:function(){return this.b===4&&C.a.a2(this.a,"http")},
gcP:function(){return this.b===5&&C.a.a2(this.a,"https")},
gbt:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gcO())q=t.x="http"
else if(t.gcP()){t.x="https"
q="https"}else if(q===4&&C.a.a2(t.a,s)){t.x=s
q=s}else if(q===7&&C.a.a2(t.a,r)){t.x=r
q=r}else{q=C.a.t(t.a,0,q)
t.x=q}return q},
gdZ:function(){var u=this.c,t=this.b+3
return u>t?C.a.t(this.a,t,u-1):""},
gca:function(a){var u=this.c
return u>0?C.a.t(this.a,u,this.d):""},
gbn:function(a){var u,t=this
if(t.gdt()){u=t.d
if(typeof u!=="number")return u.A()
return P.eI(C.a.t(t.a,u+1,t.e),null,null)}if(t.gcO())return 80
if(t.gcP())return 443
return 0},
gdL:function(a){return C.a.t(this.a,this.e,this.f)},
gcj:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.P()
return u<t?C.a.t(this.a,u+1,t):""},
gdq:function(){var u=this.r,t=this.a
return u<t.length?C.a.a5(t,u+1):""},
gck:function(){var u=this,t=u.f
if(typeof t!=="number")return t.P()
if(t>=u.r)return C.a0
t=P.h
return new P.dE(P.lH(u.gcj(u)),[t,t])},
dQ:function(a,b){var u,t,s,r,q,p=this,o=null,n=p.gbt(),m=n==="file",l=p.c,k=l>0?C.a.t(p.a,p.b+3,l):"",j=p.gdt()?p.gbn(p):o
l=p.c
if(l>0)u=C.a.t(p.a,l,p.d)
else u=k.length!==0||j!=null||m?"":o
l=p.a
t=C.a.t(l,p.e,p.f)
if(!m)s=u!=null&&t.length!==0
else s=!0
if(s&&!C.a.a2(t,"/"))t="/"+t
r=P.kP(o,0,0,b)
s=p.r
q=s<l.length?C.a.a5(l,s+1):o
return new P.bI(n,k,u,j,t,r,q)},
gK:function(a){var u=this.y
return u==null?this.y=C.a.gK(this.a):u},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.S(b).$ikK&&this.a===b.i(0)},
i:function(a){return this.a},
$ikK:1}
P.j9.prototype={}
W.n.prototype={}
W.eL.prototype={
gm:function(a){return a.length}}
W.eM.prototype={
i:function(a){return String(a)}}
W.eN.prototype={
i:function(a){return String(a)}}
W.bm.prototype={$ibm:1}
W.bn.prototype={$ibn:1}
W.bp.prototype={
e1:function(a,b,c){var u=a.getContext(b,P.oK(c))
return u},
$ibp:1}
W.b0.prototype={
gm:function(a){return a.length}}
W.f6.prototype={
gm:function(a){return a.length}}
W.H.prototype={$iH:1}
W.bW.prototype={
gm:function(a){return a.length}}
W.f7.prototype={}
W.ag.prototype={}
W.at.prototype={}
W.f8.prototype={
gm:function(a){return a.length}}
W.f9.prototype={
gm:function(a){return a.length}}
W.fc.prototype={
gm:function(a){return a.length}}
W.al.prototype={$ial:1}
W.fd.prototype={
i:function(a){return String(a)}}
W.cW.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[[P.a7,P.a9]]},
$iB:1,
$aB:function(){return[[P.a7,P.a9]]},
$ax:function(){return[[P.a7,P.a9]]},
$ij:1,
$aj:function(){return[[P.a7,P.a9]]},
$io:1,
$ao:function(){return[[P.a7,P.a9]]}}
W.cX.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gaG(a))+" x "+H.e(this.gaz(a))},
q:function(a,b){var u
if(b==null)return!1
u=J.S(b)
return!!u.$ia7&&a.left===u.gbm(b)&&a.top===u.gbp(b)&&this.gaG(a)===u.gaG(b)&&this.gaz(a)===u.gaz(b)},
gK:function(a){return W.lR(C.d.gK(a.left),C.d.gK(a.top),C.d.gK(this.gaG(a)),C.d.gK(this.gaz(a)))},
gdc:function(a){return a.bottom},
gaz:function(a){return a.height},
gbm:function(a){return a.left},
gco:function(a){return a.right},
gbp:function(a){return a.top},
gaG:function(a){return a.width},
$ia7:1,
$aa7:function(){return[P.a9]}}
W.fe.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
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
W.ff.prototype={
gm:function(a){return a.length}}
W.j7.prototype={
gm:function(a){return this.b.length},
h:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
l:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
this.a.replaceChild(c,u[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gT:function(a){var u=this.i6(this)
return new J.aa(u,u.length)},
$aq:function(){return[W.P]},
$ax:function(){return[W.P]},
$aj:function(){return[W.P]},
$ao:function(){return[W.P]}}
W.P.prototype={
gh9:function(a){return new W.ja(a)},
gbW:function(a){return new W.j7(a,a.children)},
gdd:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.P()
if(s<0)s=-s*0
if(typeof r!=="number")return r.P()
if(r<0)r=-r*0
return new P.a7(u,t,s,r,[P.a9])},
i:function(a){return a.localName},
ac:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.lh
if(u==null){u=H.b([],[W.aS])
t=new W.dg(u)
u.push(W.lQ(null))
u.push(W.lS())
$.lh=t
d=t}else d=u
u=$.lg
if(u==null){u=new W.ew(d)
$.lg=u
c=u}else{u.a=d
c=u}}if($.aN==null){u=document
t=u.implementation.createHTMLDocument("")
$.aN=t
$.kw=t.createRange()
s=$.aN.createElement("base")
s.href=u.baseURI
$.aN.head.appendChild(s)}u=$.aN
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.aN
if(!!this.$ibn)r=u.body
else{r=u.createElement(a.tagName)
$.aN.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.b.F(C.Y,a.tagName)){$.kw.selectNodeContents(r)
q=$.kw.createContextualFragment(b)}else{r.innerHTML=b
q=$.aN.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.aN.body
if(r==null?u!=null:r!==u)J.l7(r)
c.cs(q)
document.adoptNode(q)
return q},
hi:function(a,b,c){return this.ac(a,b,c,null)},
e3:function(a,b){a.textContent=null
a.appendChild(this.ac(a,b,null,null))},
$iP:1,
gdT:function(a){return a.tagName}}
W.fj.prototype={
$1:function(a){return!!J.S(a).$iP}}
W.i.prototype={$ii:1}
W.f.prototype={
h3:function(a,b,c,d){if(c!=null)this.es(a,b,c,!1)},
es:function(a,b,c,d){return a.addEventListener(b,H.bN(c,1),!1)}}
W.am.prototype={$iam:1}
W.bZ.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.am]},
$iB:1,
$aB:function(){return[W.am]},
$ax:function(){return[W.am]},
$ij:1,
$aj:function(){return[W.am]},
$io:1,
$ao:function(){return[W.am]},
$ibZ:1}
W.fq.prototype={
gm:function(a){return a.length}}
W.fu.prototype={
gm:function(a){return a.length}}
W.au.prototype={$iau:1}
W.fA.prototype={
gm:function(a){return a.length}}
W.c0.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
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
W.bw.prototype={$ibw:1}
W.fU.prototype={
i:function(a){return String(a)}}
W.hf.prototype={
gm:function(a){return a.length}}
W.c7.prototype={$ic7:1}
W.hg.prototype={
h:function(a,b){return P.aW(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aW(u.value[1]))}},
ga_:function(a){var u=H.b([],[P.h])
this.H(a,new W.hh(u))
return u},
gm:function(a){return a.size},
l:function(a,b,c){throw H.c(P.y("Not supported"))},
$aa0:function(){return[P.h,null]},
$iQ:1,
$aQ:function(){return[P.h,null]}}
W.hh.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hi.prototype={
h:function(a,b){return P.aW(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aW(u.value[1]))}},
ga_:function(a){var u=H.b([],[P.h])
this.H(a,new W.hj(u))
return u},
gm:function(a){return a.size},
l:function(a,b,c){throw H.c(P.y("Not supported"))},
$aa0:function(){return[P.h,null]},
$iQ:1,
$aQ:function(){return[P.h,null]}}
W.hj.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ax.prototype={$iax:1}
W.hk.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.ax]},
$iB:1,
$aB:function(){return[W.ax]},
$ax:function(){return[W.ax]},
$ij:1,
$aj:function(){return[W.ax]},
$io:1,
$ao:function(){return[W.ax]}}
W.ay.prototype={$iay:1}
W.a2.prototype={
gaH:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.ly("No elements"))
if(t>1)throw H.c(P.ly("More than one element"))
return u.firstChild},
ab:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
l:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.d(t,b)
u.replaceChild(c,t[b])},
gT:function(a){var u=this.a.childNodes
return new W.d_(u,u.length)},
gm:function(a){return this.a.childNodes.length},
h:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$aq:function(){return[W.D]},
$ax:function(){return[W.D]},
$aj:function(){return[W.D]},
$ao:function(){return[W.D]}}
W.D.prototype={
hY:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
i1:function(a,b){var u,t
try{u=a.parentNode
J.mE(u,b,a)}catch(t){H.ae(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.e8(a):u},
fL:function(a,b,c){return a.replaceChild(b,c)},
$iD:1}
W.df.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
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
W.az.prototype={$iaz:1,
gm:function(a){return a.length}}
W.hA.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
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
W.hL.prototype={
h:function(a,b){return P.aW(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aW(u.value[1]))}},
ga_:function(a){var u=H.b([],[P.h])
this.H(a,new W.hM(u))
return u},
gm:function(a){return a.size},
l:function(a,b,c){throw H.c(P.y("Not supported"))},
$aa0:function(){return[P.h,null]},
$iQ:1,
$aQ:function(){return[P.h,null]}}
W.hM.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hO.prototype={
gm:function(a){return a.length}}
W.aB.prototype={$iaB:1}
W.hZ.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
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
W.aC.prototype={$iaC:1}
W.i_.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
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
W.aD.prototype={$iaD:1,
gm:function(a){return a.length}}
W.i3.prototype={
h:function(a,b){return a.getItem(b)},
l:function(a,b,c){a.setItem(b,c)},
H:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga_:function(a){var u=H.b([],[P.h])
this.H(a,new W.i4(u))
return u},
gm:function(a){return a.length},
$aa0:function(){return[P.h,P.h]},
$iQ:1,
$aQ:function(){return[P.h,P.h]}}
W.i4.prototype={
$2:function(a,b){return this.a.push(a)}}
W.an.prototype={$ian:1}
W.du.prototype={
ac:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bu(a,b,c,d)
u=W.mV("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.a2(t).ab(0,new W.a2(u))
return t}}
W.i7.prototype={
ac:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bu(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.E.ac(u.createElement("table"),b,c,d)
u.toString
u=new W.a2(u)
s=u.gaH(u)
s.toString
u=new W.a2(s)
r=u.gaH(u)
t.toString
r.toString
new W.a2(t).ab(0,new W.a2(r))
return t}}
W.i8.prototype={
ac:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bu(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.E.ac(u.createElement("table"),b,c,d)
u.toString
u=new W.a2(u)
s=u.gaH(u)
t.toString
s.toString
new W.a2(t).ab(0,new W.a2(s))
return t}}
W.ci.prototype={$ici:1}
W.aE.prototype={$iaE:1}
W.ao.prototype={$iao:1}
W.ib.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
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
W.ic.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aE]},
$iB:1,
$aB:function(){return[W.aE]},
$ax:function(){return[W.aE]},
$ij:1,
$aj:function(){return[W.aE]},
$io:1,
$ao:function(){return[W.aE]}}
W.ig.prototype={
gm:function(a){return a.length}}
W.aF.prototype={$iaF:1}
W.bB.prototype={$ibB:1}
W.ik.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aF]},
$iB:1,
$aB:function(){return[W.aF]},
$ax:function(){return[W.aF]},
$ij:1,
$aj:function(){return[W.aF]},
$io:1,
$ao:function(){return[W.aF]}}
W.il.prototype={
gm:function(a){return a.length}}
W.bd.prototype={}
W.iI.prototype={
i:function(a){return String(a)}}
W.j_.prototype={
gm:function(a){return a.length}}
W.bh.prototype={
ghl:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.y("deltaY is not supported"))},
ghk:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.y("deltaX is not supported"))},
$ibh:1}
W.cr.prototype={
fM:function(a,b){return a.requestAnimationFrame(H.bN(b,1))},
eG:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.j8.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
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
W.dO.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
q:function(a,b){var u
if(b==null)return!1
u=J.S(b)
return!!u.$ia7&&a.left===u.gbm(b)&&a.top===u.gbp(b)&&a.width===u.gaG(b)&&a.height===u.gaz(b)},
gK:function(a){return W.lR(C.d.gK(a.left),C.d.gK(a.top),C.d.gK(a.width),C.d.gK(a.height))},
gaz:function(a){return a.height},
gaG:function(a){return a.width}}
W.jd.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
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
W.e6.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
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
W.jr.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
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
W.jw.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
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
W.j6.prototype={
H:function(a,b){var u,t,s,r,q
for(u=this.ga_(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.l)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga_:function(a){var u,t,s,r=this.a.attributes,q=H.b([],[P.h])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.d(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q},
$aa0:function(){return[P.h,P.h]},
$aQ:function(){return[P.h,P.h]}}
W.ja.prototype={
h:function(a,b){return this.a.getAttribute(b)},
l:function(a,b,c){this.a.setAttribute(b,c)},
gm:function(a){return this.ga_(this).length}}
W.jb.prototype={}
W.jc.prototype={
$1:function(a){return this.a.$1(a)}}
W.cs.prototype={
ej:function(a){var u
if($.ct.ghD($.ct)){for(u=0;u<262;++u)$.ct.l(0,C.X[u],W.oT())
for(u=0;u<12;++u)$.ct.l(0,C.p[u],W.oU())}},
aO:function(a){return $.mA().F(0,W.bX(a))},
am:function(a,b,c){var u=$.ct.h(0,H.e(W.bX(a))+"::"+b)
if(u==null)u=$.ct.h(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$iaS:1}
W.M.prototype={
gT:function(a){return new W.d_(a,this.gm(a))}}
W.dg.prototype={
aO:function(a){return C.b.d5(this.a,new W.hs(a))},
am:function(a,b,c){return C.b.d5(this.a,new W.hr(a,b,c))},
$iaS:1}
W.hs.prototype={
$1:function(a){return a.aO(this.a)}}
W.hr.prototype={
$1:function(a){return a.am(this.a,this.b,this.c)}}
W.ee.prototype={
en:function(a,b,c,d){var u,t,s
this.a.ab(0,c)
u=b.bs(0,new W.jo())
t=b.bs(0,new W.jp())
this.b.ab(0,u)
s=this.c
s.ab(0,C.y)
s.ab(0,t)},
aO:function(a){return this.a.F(0,W.bX(a))},
am:function(a,b,c){var u=this,t=W.bX(a),s=u.c
if(s.F(0,H.e(t)+"::"+b))return u.d.h7(c)
else if(s.F(0,"*::"+b))return u.d.h7(c)
else{s=u.b
if(s.F(0,H.e(t)+"::"+b))return!0
else if(s.F(0,"*::"+b))return!0
else if(s.F(0,H.e(t)+"::*"))return!0
else if(s.F(0,"*::*"))return!0}return!1},
$iaS:1}
W.jo.prototype={
$1:function(a){return!C.b.F(C.p,a)}}
W.jp.prototype={
$1:function(a){return C.b.F(C.p,a)}}
W.jz.prototype={
am:function(a,b,c){if(this.eb(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.F(0,b)
return!1}}
W.jA.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)}}
W.jx.prototype={
aO:function(a){var u=J.S(a)
if(!!u.$icf)return!1
u=!!u.$ik
if(u&&W.bX(a)==="foreignObject")return!1
if(u)return!0
return!1},
am:function(a,b,c){if(b==="is"||C.a.a2(b,"on"))return!1
return this.aO(a)},
$iaS:1}
W.d_.prototype={
u:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.bS(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gC:function(a){return this.d}}
W.aS.prototype={}
W.jm.prototype={}
W.ew.prototype={
cs:function(a){new W.jK(this).$2(a,null)},
aY:function(a,b){if(b==null)J.l7(a)
else b.removeChild(a)},
fQ:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
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
p=u?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ae(r)}t="element unprintable"
try{t=J.a3(a)}catch(r){H.ae(r)}try{s=W.bX(a)
this.fP(a,b,p,t,s,o,n)}catch(r){if(H.ae(r) instanceof P.ak)throw r
else{this.aY(a,b)
window
q="Removing corrupted element "+H.e(t)
if(typeof console!="undefined")window.console.warn(q)}}},
fP:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=this
if(c){p.aY(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!p.a.aO(a)){p.aY(a,b)
window
u="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!p.a.am(a,"is",g)){p.aY(a,b)
window
u="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga_(f)
t=H.b(u.slice(0),[H.aJ(u,0)])
for(s=f.ga_(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.d(t,s)
r=t[s]
if(!p.a.am(a,J.mL(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.e(e)+" "+r+'="'+H.e(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.S(a).$ici)p.cs(a.content)}}
W.jK.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.fQ(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aY(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ae(s)
r=u
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=t}}}
W.dN.prototype={}
W.dP.prototype={}
W.dQ.prototype={}
W.dR.prototype={}
W.dS.prototype={}
W.dV.prototype={}
W.dW.prototype={}
W.dX.prototype={}
W.dY.prototype={}
W.e2.prototype={}
W.e3.prototype={}
W.e4.prototype={}
W.e5.prototype={}
W.e7.prototype={}
W.e8.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.cy.prototype={}
W.cz.prototype={}
W.ef.prototype={}
W.eg.prototype={}
W.ek.prototype={}
W.en.prototype={}
W.eo.prototype={}
W.cA.prototype={}
W.cB.prototype={}
W.eq.prototype={}
W.er.prototype={}
W.ex.prototype={}
W.ey.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eG.prototype={}
P.js.prototype={
c8:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
t.push(a)
this.b.push(null)
return s},
br:function(a){var u,t,s,r,q,p=this,o={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.S(a)
if(!!u.$iab)return new Date(a.a)
if(!!u.$inr)throw H.c(P.iz("structured clone of RegExp"))
if(!!u.$iam)return a
if(!!u.$ibm)return a
if(!!u.$ibZ)return a
if(!!u.$ic1)return a
if(!!u.$ic9||!!u.$ib9||!!u.$ic7)return a
if(!!u.$iQ){t=p.c8(a)
s=p.b
r=s.length
if(t>=r)return H.d(s,t)
q=o.a=s[t]
if(q!=null)return q
q={}
o.a=q
if(t>=r)return H.d(s,t)
s[t]=q
u.H(a,new P.ju(o,p))
return o.a}if(!!u.$io){t=p.c8(a)
o=p.b
if(t>=o.length)return H.d(o,t)
q=o[t]
if(q!=null)return q
return p.hh(a,t)}if(!!u.$in2){t=p.c8(a)
u=p.b
s=u.length
if(t>=s)return H.d(u,t)
q=o.b=u[t]
if(q!=null)return q
q={}
o.b=q
if(t>=s)return H.d(u,t)
u[t]=q
p.hz(a,new P.jv(o,p))
return o.b}throw H.c(P.iz("structured clone of other type"))},
hh:function(a,b){var u,t=J.aq(a),s=t.gm(a),r=new Array(s),q=this.b
if(b>=q.length)return H.d(q,b)
q[b]=r
if(typeof s!=="number")return H.r(s)
u=0
for(;u<s;++u){q=this.br(t.h(a,u))
if(u>=r.length)return H.d(r,u)
r[u]=q}return r}}
P.ju.prototype={
$2:function(a,b){this.a.a[a]=this.b.br(b)},
$S:3}
P.jv.prototype={
$2:function(a,b){this.a.b[a]=this.b.br(b)},
$S:3}
P.jV.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.jt.prototype={
hz:function(a,b){var u,t,s,r
for(u=Object.keys(a),t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,a[r])}}}
P.fr.prototype={
gbe:function(){var u=this.b,t=H.kW(u,"x",0)
return new H.c5(new H.cq(u,new P.fs(),[t]),new P.ft(),[t,W.P])},
l:function(a,b,c){var u=this.gbe()
J.mJ(u.b.$1(J.eK(u.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gm:function(a){return J.af(this.gbe().a)},
h:function(a,b){var u=this.gbe()
return u.b.$1(J.eK(u.a,b))},
gT:function(a){var u=P.kE(this.gbe(),!1,W.P)
return new J.aa(u,u.length)},
$aq:function(){return[W.P]},
$ax:function(){return[W.P]},
$aj:function(){return[W.P]},
$ao:function(){return[W.P]}}
P.fs.prototype={
$1:function(a){return!!J.S(a).$iP}}
P.ft.prototype={
$1:function(a){return H.t(a,"$iP")}}
P.ji.prototype={
gco:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.r(t)
return u+t},
gdc:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.r(t)
return u+t},
i:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
q:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.S(b)
if(!!u.$ia7){t=q.a
if(t==u.gbm(b)){s=q.b
if(s==u.gbp(b)){r=q.c
if(typeof t!=="number")return t.A()
if(typeof r!=="number")return H.r(r)
if(t+r===u.gco(b)){t=q.d
if(typeof s!=="number")return s.A()
if(typeof t!=="number")return H.r(t)
u=s+t===u.gdc(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gK:function(a){var u=this,t=u.a,s=J.cM(t),r=u.b,q=J.cM(r),p=u.c
if(typeof t!=="number")return t.A()
if(typeof p!=="number")return H.r(p)
p=C.c.gK(t+p)
t=u.d
if(typeof r!=="number")return r.A()
if(typeof t!=="number")return H.r(t)
t=C.c.gK(r+t)
return P.nS(P.jf(P.jf(P.jf(P.jf(0,s),q),p),t))}}
P.a7.prototype={
gbm:function(a){return this.a},
gbp:function(a){return this.b},
gaG:function(a){return this.c},
gaz:function(a){return this.d}}
P.aP.prototype={$iaP:1}
P.fN.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
M:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.aP]},
$ax:function(){return[P.aP]},
$ij:1,
$aj:function(){return[P.aP]},
$io:1,
$ao:function(){return[P.aP]}}
P.aT.prototype={$iaT:1}
P.hv.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
M:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.aT]},
$ax:function(){return[P.aT]},
$ij:1,
$aj:function(){return[P.aT]},
$io:1,
$ao:function(){return[P.aT]}}
P.hD.prototype={
gm:function(a){return a.length}}
P.cf.prototype={$icf:1}
P.i6.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
M:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.h]},
$ax:function(){return[P.h]},
$ij:1,
$aj:function(){return[P.h]},
$io:1,
$ao:function(){return[P.h]}}
P.k.prototype={
gbW:function(a){return new P.fr(a,new W.a2(a))},
ac:function(a,b,c,d){var u,t,s,r,q,p=H.b([],[W.aS])
p.push(W.lQ(null))
p.push(W.lS())
p.push(new W.jx())
c=new W.ew(new W.dg(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.r).hi(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.a2(s)
q=p.gaH(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ik:1}
P.aV.prototype={$iaV:1}
P.im.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
M:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.aV]},
$ax:function(){return[P.aV]},
$ij:1,
$aj:function(){return[P.aV]},
$io:1,
$ao:function(){return[P.aV]}}
P.dZ.prototype={}
P.e_.prototype={}
P.e9.prototype={}
P.ea.prototype={}
P.el.prototype={}
P.em.prototype={}
P.es.prototype={}
P.et.prototype={}
P.bC.prototype={$iq:1,
$aq:function(){return[P.w]},
$ij:1,
$aj:function(){return[P.w]},
$io:1,
$ao:function(){return[P.w]}}
P.eQ.prototype={
gm:function(a){return a.length}}
P.eR.prototype={
h:function(a,b){return P.aW(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aW(u.value[1]))}},
ga_:function(a){var u=H.b([],[P.h])
this.H(a,new P.eS(u))
return u},
gm:function(a){return a.size},
l:function(a,b,c){throw H.c(P.y("Not supported"))},
$aa0:function(){return[P.h,null]},
$iQ:1,
$aQ:function(){return[P.h,null]}}
P.eS.prototype={
$2:function(a,b){return this.a.push(a)}}
P.eT.prototype={
gm:function(a){return a.length}}
P.bl.prototype={}
P.hw.prototype={
gm:function(a){return a.length}}
P.dM.prototype={}
P.i1.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return P.aW(a.item(b))},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
M:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[[P.Q,,,]]},
$ax:function(){return[[P.Q,,,]]},
$ij:1,
$aj:function(){return[[P.Q,,,]]},
$io:1,
$ao:function(){return[[P.Q,,,]]}}
P.eh.prototype={}
P.ei.prototype={}
K.aL.prototype={
aC:function(a,b){return!0},
i:function(a){return"all"}}
K.d0.prototype={
aC:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)if(u[s].aC(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.l)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s}}
K.b8.prototype={}
K.a5.prototype={
aC:function(a,b){return!this.e7(0,b)},
i:function(a){return"!["+this.cv(0)+"]"}}
K.hG.prototype={
aC:function(a,b){if(typeof b!=="number")return H.r(b)
return this.a<=b&&this.b>=b},
i:function(a){var u=H.bz(this.a),t=H.bz(this.b)
return u+".."+t}}
K.hP.prototype={
ef:function(a){var u,t,s,r
if(a.a.length<=0)throw H.c(P.v("May not create a Set with zero characters."))
u=P.w
t=new H.I([u,P.aI])
for(s=new H.b7(a,a.gm(a));s.u();)t.l(0,s.d,!0)
r=P.kE(t.ga_(t),!0,u)
C.b.e5(r)
this.a=r},
aC:function(a,b){return C.b.F(this.a,b)},
i:function(a){return P.ch(this.a,0,null)}}
L.ds.prototype={
j:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new L.dB(this.a.k(0,b))
r.a=H.b([],[K.b8])
r.c=!1
this.c.push(r)
return r},
hu:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
if(r.aC(0,a))return r}return},
i:function(a){return this.b},
cZ:function(){var u,t,s,r,q,p=this,o="("+p.b+")",n=p.d
if(n!=null){n=n.b
o+=" => ["+n+"]"
u=p.a
if(u.c.F(0,n))o+=" (consume)"
for(n=p.d.c,n=n.ga_(n),n=n.gT(n);n.u();){t=n.gC(n)
o+="\n"
s=p.d.c.h(0,t)
t=o+("  -- "+H.e(t)+" => ["+H.e(s)+"]")
o=u.c.F(0,s)?t+" (consume)":t}}for(n=p.c,u=n.length,r=0;r<n.length;n.length===u||(0,H.l)(n),++r){q=n[r]
o=o+"\n"+("  -- "+q.i(0))}return o.charCodeAt(0)==0?o:o}}
L.dy.prototype={
i:function(a){var u=H.l0(this.b,"\n","\\n"),t=H.l0(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
L.dz.prototype={
aE:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.l)(c),++t){s=c[t]
this.c.l(0,s,b)}},
i:function(a){return this.b}}
L.ih.prototype={
k:function(a,b){var u=this.a.h(0,b)
if(u==null){u=new L.ds(this,b)
u.c=H.b([],[L.dB])
this.a.l(0,b,u)}return u},
S:function(a){var u,t=this.b.h(0,a)
if(t==null){t=new L.dz(a)
u=P.h
t.c=new H.I([u,u])
this.b.l(0,a,t)}return t},
cp:function(a){return this.i9(a)},
i9:function(a){var u=this
return P.oe(function(){var t=a
var s=0,r=1,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
return function $async$cp(b,a0){if(b===1){q=a0
s=r}while(true)switch(s){case 0:g=u.d
f=[P.w]
e=H.b([],f)
d=H.b([],f)
c=H.b([],f)
p=null,o=0,n=0,m=0
case 2:if(!!0){s=3
break}if(c.length!==0)l=C.b.cl(c,0)
else{if(!t.u()){s=3
break}l=t.d}d.push(l);++o
k=g.hu(l)
s=k==null?4:6
break
case 4:if(p==null){j=P.ch(d,0,null)
throw H.c(P.v("Untokenizable string [state: "+g.b+", index "+o+']: "'+j+'"'))}if(!!d.fixed$length)H.p(P.y("removeRange"))
P.aU(0,m,d.length)
d.splice(0,m-0)
C.b.ab(c,d)
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
if(g.d!=null){j=P.ch(e,0,null)
i=g.d
h=i.c.h(0,j)
p=new L.dy(h==null?i.b:h,j,o)
m=d.length
n=o}case 5:s=2
break
case 3:s=p!=null&&!u.c.F(0,p.a)?10:11
break
case 10:s=12
return p
case 12:case 11:return P.nQ()
case 1:return P.nR(q)}}},L.dy)},
i:function(a){var u,t=new P.R(""),s=this.d
if(s!=null)t.a=s.cZ()+"\n"
for(s=this.a,s=s.gia(s),s=s.gT(s);s.u();){u=s.gC(s)
if(u!=this.d)t.a+=u.cZ()+"\n"}s=t.a
return s.charCodeAt(0)==0?s:s}}
L.dB.prototype={
i:function(a){return this.b.b+": "+this.cv(0)}}
O.b1.prototype={
bv:function(a){this.a=H.b([],[a])
this.c=this.b=null},
ct:function(a,b,c){this.b=b
this.c=a},
bb:function(a,b){return this.ct(a,null,b)},
ft:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
ei:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gm:function(a){return this.a.length},
gT:function(a){var u=this.a
return new J.aa(u,u.length)},
M:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
n:function(a,b){var u,t,s=this,r=[H.kW(s,"b1",0)]
if(s.ft(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.ei(t,H.b([b],r))}},
$ij:1}
O.c6.prototype={
gm:function(a){return this.a.length},
gB:function(){var u=this.b
return u==null?this.b=D.K():u},
aI:function(){var u=this.b
if(u!=null)u.G(null)},
ga0:function(a){var u=this.a
if(u.length>0)return C.b.gap(u)
else return V.db()},
dO:function(a){var u=this.a
if(a==null)u.push(V.db())
else u.push(a)
this.aI()},
ci:function(){var u=this.a
if(u.length>0){u.pop()
this.aI()}}}
E.eX.prototype={}
E.aO.prototype={
sah:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gB().O(0,s.gdI())
u=s.c
if(u!=null)u.gB().n(0,s.gdI())
t=new D.C("shape",r,s.c)
t.b=!0
s.aD(t)}},
sb5:function(a){var u,t,s=this
if(!J.F(s.r,a)){u=s.r
if(u!=null)u.gB().O(0,s.gdG())
if(a!=null)a.gB().n(0,s.gdG())
s.r=a
t=new D.C("mover",u,a)
t.b=!0
s.aD(t)}},
aq:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.a:null
if(!J.F(q,s.x)){u=s.x
s.x=q
t=new D.C("matrix",u,q)
t.b=!0
s.aD(t)}for(r=s.y.a,r=new J.aa(r,r.length);r.u();)r.d.aq(0,b)},
aS:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)s.a.push(s.ga0(s))
else s.a.push(r.p(0,s.ga0(s)))
s.aI()
a.dP(t.f)
s=a.dy
u=(s&&C.b).gap(s)
if(u!=null&&t.d!=null)u.i0(a,t)
for(s=t.y.a,s=new J.aa(s,s.length);s.u();)s.d.aS(a)
a.dN()
a.dx.ci()},
aD:function(a){var u=this.z
if(u!=null)u.G(a)},
Z:function(){return this.aD(null)},
dJ:function(a){this.e=null
this.aD(a)},
hO:function(){return this.dJ(null)},
dH:function(a){this.aD(a)},
hN:function(){return this.dH(null)},
dF:function(a){this.aD(a)},
hK:function(){return this.dF(null)},
hJ:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gdE(),s=[{func:1,ret:-1,args:[D.Y]}],r=0;r<b.length;b.length===u||(0,H.l)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bs()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.Z()},
hM:function(a,b){var u,t
for(u=b.gT(b),t=this.gdE();u.u();)u.gC(u).gB().O(0,t)
this.Z()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.bo.prototype={
i:function(a){return this.b}}
E.bx.prototype={
i:function(a){return this.b}}
E.dT.prototype={}
E.hH.prototype={
ee:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.ab(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.c6()
t=[V.aQ]
u.a=H.b([],t)
u.gB().n(0,new E.hI(s))
s.cy=u
u=new O.c6()
u.a=H.b([],t)
u.gB().n(0,new E.hJ(s))
s.db=u
u=new O.c6()
u.a=H.b([],t)
u.gB().n(0,new E.hK(s))
s.dx=u
u=H.b([],[O.dv])
s.dy=u
u.push(null)
s.fr=new H.I([P.h,A.dn])},
ghX:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga0(s)
u=t.db
u=t.z=s.p(0,u.ga0(u))
s=u}return s},
dP:function(a){var u=this.dy
u.push(a==null?(u&&C.b).gap(u):a)},
dN:function(){var u=this.dy
if(u.length>1)u.pop()}}
E.hI.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.hJ.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.hK.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.dw.prototype={
cC:function(a){this.dR()},
cB:function(){return this.cC(null)},
ghA:function(){var u,t=this,s=Date.now(),r=C.c.a3(P.lf(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.ab(s,!1)
return u/r},
cT:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.p()
if(typeof r!=="number")return H.r(r)
u=C.d.dn(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.p()
t=C.d.dn(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.lB(C.n,s.gi2())}},
dR:function(){if(!this.cx){this.cx=!0
var u=window
C.G.eG(u)
C.G.fM(u,W.m2(new E.ie(this),P.a9))}},
i_:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.cT()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ab(r,!1)
s.y=P.lf(r-s.r.a).a*0.000001
r=s.cy
C.b.sm(r.a,0)
r.aI()
r=s.db
C.b.sm(r.a,0)
r.aI()
r=s.dx
C.b.sm(r.a,0)
r.aI()
r=s.dy;(r&&C.b).sm(r,0)
s.dy.push(null)
o.aS(p.e)}s=p.Q
if(s!=null)s.G(null)}catch(q){u=H.ae(q)
t=H.kX(q)
P.l_("Error: "+H.e(u))
P.l_("Stack: "+H.e(t))
throw H.c(u)}}}
E.ie.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.i_()}}}
Z.dK.prototype={}
Z.cP.prototype={
bg:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ae(s)
t=P.v('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.e(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.j0.prototype={}
Z.cQ.prototype={
aR:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bg:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].bg(a)},
dX:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aS:function(a){var u,t,s,r,q,p=this.b.length
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
Z.bt.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.ce(this.c))+"'")+"]"}}
Z.bg.prototype={
gcu:function(a){var u=this.a,t=(u&$.b_().a)!==0?3:0
if((u&$.aZ().a)!==0)t+=3
if((u&$.aY().a)!==0)t+=3
if((u&$.bj().a)!==0)t+=2
if((u&$.bk().a)!==0)t+=3
if((u&$.cJ().a)!==0)t+=3
if((u&$.cK().a)!==0)t+=4
if((u&$.bR().a)!==0)++t
return(u&$.aX().a)!==0?t+4:t},
h8:function(a){var u,t=$.b_(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aZ()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aY()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bj()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bk()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cJ()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cK()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bR()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aX()
if((s&t.a)!==0)if(u===a)return t
return $.my()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bg))return!1
return this.a===b.a},
i:function(a){var u=H.b([],[P.h]),t=this.a
if((t&$.b_().a)!==0)u.push("Pos")
if((t&$.aZ().a)!==0)u.push("Norm")
if((t&$.aY().a)!==0)u.push("Binm")
if((t&$.bj().a)!==0)u.push("Txt2D")
if((t&$.bk().a)!==0)u.push("TxtCube")
if((t&$.cJ().a)!==0)u.push("Clr3")
if((t&$.cK().a)!==0)u.push("Clr4")
if((t&$.bR().a)!==0)u.push("Weight")
if((t&$.aX().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.b.j(u,"|")}}
D.f_.prototype={}
D.bs.prototype={
n:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.Y]}]):u).push(b)},
O:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.b.F(s,b)
if(s===!0){s=t.a
u=(s&&C.b).O(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.b.F(s,b)
if(s===!0){s=t.b
u=(s&&C.b).O(s,b)||u}return u},
G:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.b.H(P.kE(u,!0,{func:1,ret:-1,args:[D.Y]}),new D.fn(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.Y]}])
C.b.H(u,new D.fo(q))}return!0},
af:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.G(u)}}}}
D.fn.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.fo.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.Y.prototype={}
D.bu.prototype={}
D.bv.prototype={}
D.C.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cR.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cR))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.d4.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d4))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.fM.prototype={
hT:function(a){this.c=a.b
this.d.n(0,a.a)
return!1},
hP:function(a){this.c=a.b
this.d.O(0,a.a)
return!1}}
X.d7.prototype={}
X.fV.prototype={
aW:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.p()
u=b.b
t=q.ch
if(typeof u!=="number")return u.p()
s=new V.a6(o.a+n*m,o.b+u*t)
t=q.a.gaP()
r=new X.aR(a,V.bb(),q.x,t,s)
r.b=!0
q.z=new P.ab(p,!1)
q.x=s
return r},
cg:function(a,b){this.r=a.a
return!1},
b7:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.e2()
if(typeof u!=="number")return u.a7()
this.r=(u&~t)>>>0
return!1},
b6:function(a,b){var u=this.d
if(u==null)return!1
u.G(this.aW(a,b))
return!0},
hU:function(a){var u,t,s,r,q,p,o=this,n=o.e
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
t=new X.c8(new V.J(s*r,q*p),u,t)
t.b=!0
n.G(t)
return!0},
fh:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.d7(c,r.a.gaP(),b)
s.b=!0
t.G(s)
r.y=new P.ab(u,!1)
r.x=V.bb()}}
X.ah.prototype={
q:function(a,b){var u=this
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
X.aR.prototype={}
X.hl.prototype={
bB:function(a,b,c){var u=this,t=new P.ab(Date.now(),!1),s=u.a.gaP(),r=new X.aR(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cg:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.G(this.bB(a,b,!0))
return!0},
b7:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.e2()
if(typeof t!=="number")return t.a7()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.G(u.bB(a,b,!0))
return!0},
b6:function(a,b){var u=this.d
if(u==null)return!1
u.G(this.bB(a,b,!1))
return!0},
hV:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaP()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.p()
r=a.b
q=p.ch
if(typeof r!=="number")return r.p()
u=new X.c8(new V.J(t*s,r*q),u,b)
u.b=!0
o.G(u)
return!0},
gde:function(){var u=this.b
return u==null?this.b=D.K():u},
gcq:function(){var u=this.c
return u==null?this.c=D.K():u},
gdC:function(){var u=this.d
return u==null?this.d=D.K():u}}
X.c8.prototype={}
X.hC.prototype={}
X.dA.prototype={}
X.ij.prototype={
aW:function(a,b){var u=this,t=new P.ab(Date.now(),!1),s=a.length>0?a[0]:V.bb(),r=u.a.gaP(),q=new X.dA(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
hS:function(a){var u=this.b
if(u==null)return!1
u.G(this.aW(a,!0))
return!0},
hQ:function(a){var u=this.c
if(u==null)return!1
u.G(this.aW(a,!0))
return!0},
hR:function(a){var u=this.d
if(u==null)return!1
u.G(this.aW(a,!1))
return!0}}
X.dF.prototype={
gaP:function(){var u=this.a,t=C.m.gdd(u).c
t.toString
u=C.m.gdd(u).d
u.toString
return V.lw(0,0,t,u)},
cJ:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.d4(u,new X.ah(t,a.altKey,a.shiftKey))},
aM:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.ah(t,a.altKey,a.shiftKey)},
bP:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.ah(t,a.altKey,a.shiftKey)},
aw:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.L()
u=t.top
if(typeof r!=="number")return r.L()
return new V.a6(s-q,r-u)},
aX:function(a){return new V.J(a.movementX,a.movementY)},
bL:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.a6])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
q=C.d.ai(r.pageX)
C.d.ai(r.pageY)
p=o.left
C.d.ai(r.pageX)
n.push(new V.a6(q-p,C.d.ai(r.pageY)-o.top))}return n},
au:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cR(u,new X.ah(t,a.altKey,a.shiftKey))},
bC:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.L()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.L()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fb:function(a){this.f=!0},
eY:function(a){this.f=!1},
f5:function(a){if(this.f&&this.bC(a))a.preventDefault()},
ff:function(a){var u
if(!this.f)return
u=this.cJ(a)
this.b.hT(u)},
fd:function(a){var u
if(!this.f)return
u=this.cJ(a)
this.b.hP(u)},
fj:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aM(a)
if(r.x){u=r.au(a)
t=r.aX(a)
if(r.d.cg(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.au(a)
s=r.aw(a)
if(r.c.cg(u,s))a.preventDefault()},
fn:function(a){var u,t,s,r=this
r.aM(a)
u=r.au(a)
if(r.x){t=r.aX(a)
if(r.d.b7(u,t))a.preventDefault()
return}if(r.r)return
s=r.aw(a)
if(r.c.b7(u,s))a.preventDefault()},
f9:function(a){var u,t,s,r=this
if(!r.bC(a)){r.aM(a)
u=r.au(a)
if(r.x){t=r.aX(a)
if(r.d.b7(u,t))a.preventDefault()
return}if(r.r)return
s=r.aw(a)
if(r.c.b7(u,s))a.preventDefault()}},
fl:function(a){var u,t,s,r=this
r.aM(a)
u=r.au(a)
if(r.x){t=r.aX(a)
if(r.d.b6(u,t))a.preventDefault()
return}if(r.r)return
s=r.aw(a)
if(r.c.b6(u,s))a.preventDefault()},
f7:function(a){var u,t,s,r=this
if(!r.bC(a)){r.aM(a)
u=r.au(a)
if(r.x){t=r.aX(a)
if(r.d.b6(u,t))a.preventDefault()
return}if(r.r)return
s=r.aw(a)
if(r.c.b6(u,s))a.preventDefault()}},
fp:function(a){var u,t,s=this
s.aM(a)
u=new V.J((a&&C.F).ghk(a),C.F.ghl(a)).p(0,s.Q)
if(s.x){if(s.d.hU(u))a.preventDefault()
return}if(s.r)return
t=s.aw(a)
if(s.c.hV(u,t))a.preventDefault()},
fs:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.au(s.y)
t=s.aw(s.y)
s.d.fh(u,t,r)}},
fH:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bP(a)
u=t.bL(a)
if(t.e.hS(u))a.preventDefault()},
fD:function(a){var u
this.bP(a)
u=this.bL(a)
if(this.e.hQ(u))a.preventDefault()},
fF:function(a){var u
this.bP(a)
u=this.bL(a)
if(this.e.hR(u))a.preventDefault()}}
D.eU.prototype={$ia4:1}
D.bq.prototype={
as:function(a){var u=this.r
if(u!=null)u.G(a)},
el:function(){return this.as(null)},
$ia4:1}
D.a4.prototype={}
D.d5.prototype={
as:function(a){var u=this.y
if(u!=null)u.G(a)},
cR:function(a){var u=this.z
if(u!=null)u.G(a)},
fg:function(){return this.cR(null)},
fv:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.l)(a),++t){s=a[t]
if(s==null||this.eA(s))return!1}return!0},
eS:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcQ(),s=[{func:1,ret:-1,args:[D.Y]}],r=0;r<b.length;b.length===u||(0,H.l)(b),++r){q=b[r]
if(q instanceof D.bq)this.f.push(q)
p=q.r
if(p==null){p=new D.bs()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}u=new D.bu()
u.b=!0
this.as(u)},
fB:function(a,b){var u,t,s
for(u=b.gT(b),t=this.gcQ();u.u();){s=u.gC(u)
C.b.O(this.e,s)
s.gB().O(0,t)}u=new D.bv()
u.b=!0
this.as(u)},
eA:function(a){var u=C.b.F(this.f,a)
return u},
$aj:function(){return[D.a4]},
$ab1:function(){return[D.a4]}}
D.hB.prototype={$ia4:1}
D.i0.prototype={$ia4:1}
V.V.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.V))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"]"}}
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
return"["+V.E(u.a,3,0)+", "+V.E(u.b,3,0)+", "+V.E(u.c,3,0)+", "+V.E(u.d,3,0)+"]"}}
V.fm.prototype={}
V.da.prototype={
a9:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.L])
return t},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.da))return!1
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
i:function(a){var u,t,s,r,q=this,p=[P.L],o=V.bP(H.b([q.a,q.d,q.r],p),3,0),n=V.bP(H.b([q.b,q.e,q.x],p),3,0),m=V.bP(H.b([q.c,q.f,q.y],p),3,0)
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
V.aQ.prototype={
a9:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.L])
return t},
dA:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.A().a)return V.db()
u=1/b1
t=-n
s=-a0
return V.aw((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
p:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.aw(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bq:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.z(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
b9:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.U(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aQ))return!1
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
i:function(a){return this.R()},
I:function(a){var u,t,s,r,q,p=this,o=[P.L],n=V.bP(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.bP(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.bP(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.bP(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
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
R:function(){return this.I("")}}
V.a6.prototype={
L:function(a,b){return new V.a6(this.a-b.a,this.b-b.b)},
q:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a6))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+"]"}}
V.U.prototype={
A:function(a,b){return new V.U(this.a+b.a,this.b+b.b,this.c+b.c)},
L:function(a,b){return new V.U(this.a-b.a,this.b-b.b,this.c-b.c)},
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
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"]"}}
V.bc.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bc))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.E(u.a,3,0)+", "+V.E(u.b,3,0)+", "+V.E(u.c,3,0)+", "+V.E(u.d,3,0)+"]"}}
V.dl.prototype={
ga8:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dl))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.E(u.a,3,0)+", "+V.E(u.b,3,0)+", "+V.E(u.c,3,0)+", "+V.E(u.d,3,0)+"]"}}
V.J.prototype={
cb:function(a){return Math.sqrt(this.D(this))},
D:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.r(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.r(t)
return s*r+u*t},
p:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.p()
if(typeof b!=="number")return H.r(b)
u=this.b
if(typeof u!=="number")return u.p()
return new V.J(t*b,u*b)},
v:function(a,b){var u,t
if(Math.abs(b-0)<$.A().a){u=$.lI
return u==null?$.lI=new V.J(0,0):u}u=this.a
if(typeof u!=="number")return u.v()
t=this.b
if(typeof t!=="number")return t.v()
return new V.J(u/b,t/b)},
q:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.J))return!1
u=b.a
t=this.a
s=$.A()
s.toString
if(typeof u!=="number")return u.L()
if(typeof t!=="number")return H.r(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.L()
if(typeof t!=="number")return H.r(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+"]"}}
V.z.prototype={
cb:function(a){return Math.sqrt(this.D(this))},
D:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cc:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.z(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
ay:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.z(u*t-s*r,s*q-p*t,p*r-u*q)},
A:function(a,b){return new V.z(this.a+b.a,this.b+b.b,this.c+b.c)},
U:function(a){return new V.z(-this.a,-this.b,-this.c)},
p:function(a,b){return new V.z(this.a*b,this.b*b,this.c*b)},
v:function(a,b){if(Math.abs(b-0)<$.A().a)return V.cp()
return new V.z(this.a/b,this.b/b,this.c/b)},
dB:function(){var u=$.A().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.z))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"]"}}
U.f1.prototype={
bw:function(a){var u=V.km(a,this.c,this.b)
return u},
gB:function(){var u=this.y
return u==null?this.y=D.K():u},
J:function(a){var u=this.y
if(u!=null)u.G(a)},
scr:function(a,b){},
scd:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.A().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bw(u)}s=new D.C("maximumLocation",s,t.b)
s.b=!0
t.J(s)}},
scf:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.A().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bw(u)}s=new D.C("minimumLocation",s,t.c)
s.b=!0
t.J(s)}},
sY:function(a,b){var u,t=this
b=t.bw(b)
u=t.d
if(!(Math.abs(u-b)<$.A().a)){t.d=b
u=new D.C("location",u,b)
u.b=!0
t.J(u)}},
sce:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.A().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.C("maximumVelocity",r,a)
r.b=!0
s.J(r)}},
sV:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.A().a)){u.f=a
t=new D.C("velocity",t,a)
t.b=!0
u.J(t)}},
sc_:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.A().a)){this.x=a
u=new D.C("dampening",u,a)
u.b=!0
this.J(u)}},
aq:function(a,b){var u,t,s,r=this,q=r.f,p=$.A().a
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
u=s}r.sV(u)}}}
U.cT.prototype={
gB:function(){var u=this.b
return u==null?this.b=D.K():u},
ar:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cT))return!1
return J.F(this.a,b.a)},
i:function(a){return"Constant: "+this.a.I("          ")}}
U.c_.prototype={
gB:function(){var u=this.e
return u==null?this.e=D.K():u},
J:function(a){var u=this.e
if(u!=null)u.G(a)},
a6:function(){return this.J(null)},
eQ:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaJ(),s=[{func:1,ret:-1,args:[D.Y]}],r=0;r<b.length;b.length===u||(0,H.l)(b),++r){q=b[r]
if(q!=null){p=q.gB()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bu()
u.b=!0
this.J(u)},
fz:function(a,b){var u,t
for(u=b.gT(b),t=this.gaJ();u.u();)u.gC(u).gB().O(0,t)
u=new D.bv()
u.b=!0
this.J(u)},
ar:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.P()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.aa(r,r.length),u=null;r.u();){q=r.d
if(q!=null){t=q.ar(0,b,c)
if(t!=null)u=u==null?t:t.p(0,u)}}s.f=u==null?V.db():u
r=s.e
if(r!=null)r.af(0)}return s.f},
q:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.c_))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.d(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.d(r,t)
if(!J.F(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$aj:function(){return[U.ac]},
$ab1:function(){return[U.ac]},
$iac:1}
U.ac.prototype={}
U.dm.prototype={
gB:function(){var u=this.y
return u==null?this.y=D.K():u},
J:function(a){var u=this.y
if(u!=null)u.G(a)},
se_:function(a){var u
a=V.km(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.A().a)){this.a=a
u=new D.C("yaw",u,a)
u.b=!0
this.J(u)}},
sdM:function(a,b){var u
b=V.km(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.A().a)){this.b=b
u=new D.C("pitch",u,b)
u.b=!0
this.J(u)}},
sdS:function(a){var u
a=V.km(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.A().a)){this.c=a
u=new D.C("roll",u,a)
u.b=!0
this.J(u)}},
ar:function(a,b,c){var u=this,t=u.r,s=b.e
if(t<s){u.r=s
t=u.y
if(t!=null)++t.d
u.se_(u.a+u.d*b.y)
u.sdM(0,u.b+u.e*b.y)
u.sdS(u.c+u.f*b.y)
u.x=V.ln(u.c).p(0,V.lm(u.b)).p(0,V.ll(u.a))
t=u.y
if(t!=null)t.af(0)}return u.x},
q:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.dm))return!1
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
return"Rotator: ["+V.E(u.a,3,0)+", "+V.E(u.b,3,0)+", "+V.E(u.c,3,0)+"], ["+V.E(u.d,3,0)+", "+V.E(u.e,3,0)+", "+V.E(u.f,3,0)+"]"}}
U.dG.prototype={
gB:function(){var u=this.cy
return u==null?this.cy=D.K():u},
J:function(a){var u=this.cy
if(u!=null)u.G(a)},
a6:function(){return this.J(null)},
b_:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gde().n(0,u.gbD())
u.a.c.gdC().n(0,u.gbF())
u.a.c.gcq().n(0,u.gbH())
return!0},
bE:function(a){var u=this
if(!J.F(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bG:function(a){var u,t,s,r,q,p,o,n=this
H.t(a,"$iaR")
if(!n.y)return
if(n.x){u=a.d.L(0,a.y)
u=new V.J(u.a,u.b)
u=u.D(u)
t=n.r
if(typeof t!=="number")return H.r(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.L(0,a.y)
u=new V.J(t.a,t.b).p(0,2).v(0,u.ga8())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.p()
s=n.e
if(typeof s!=="number")return H.r(s)
t.sV(u*10*s)}else{u=a.c
t=a.d
s=t.L(0,a.y)
r=new V.J(s.a,s.b).p(0,2).v(0,u.ga8())
s=n.b
q=r.a
if(typeof q!=="number")return q.U()
p=n.e
if(typeof p!=="number")return H.r(p)
o=n.z
if(typeof o!=="number")return H.r(o)
s.sY(0,-q*p+o)
n.b.sV(0)
t=t.L(0,a.z)
n.Q=new V.J(t.a,t.b).p(0,2).v(0,u.ga8())}n.a6()},
bI:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.D(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.p()
s=r.e
if(typeof s!=="number")return H.r(s)
u.sV(t*10*s)
r.a6()}},
ar:function(a,b,c){var u,t=this,s=t.ch,r=b.e
if(typeof s!=="number")return s.P()
if(s<r){t.ch=r
u=b.y
t.b.aq(0,u)
t.cx=V.ln(t.b.d)}return t.cx},
$iac:1}
U.dH.prototype={
gB:function(){var u=this.fx
return u==null?this.fx=D.K():u},
J:function(a){var u=this.fx
if(u!=null)u.G(a)},
a6:function(){return this.J(null)},
b_:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gde().n(0,s.gbD())
s.a.c.gdC().n(0,s.gbF())
s.a.c.gcq().n(0,s.gbH())
u=s.a.d
t=u.f
u=t==null?u.f=D.K():t
u.n(0,s.geI())
u=s.a.d
t=u.d
u=t==null?u.d=D.K():t
u.n(0,s.geK())
u=s.a.e
t=u.b
u=t==null?u.b=D.K():t
u.n(0,s.gh0())
u=s.a.e
t=u.d
u=t==null?u.d=D.K():t
u.n(0,s.gfZ())
u=s.a.e
t=u.c
u=t==null?u.c=D.K():t
u.n(0,s.gfX())
return!0},
al:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.U()
u=-u}if(this.r){if(typeof t!=="number")return t.U()
t=-t}return new V.J(u,t)},
bE:function(a){var u=this
H.t(a,"$iaR")
if(!J.F(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bG:function(a){var u,t,s,r,q,p,o,n=this
H.t(a,"$iaR")
if(!n.cx)return
if(n.ch){u=a.d.L(0,a.y)
u=new V.J(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.r(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.L(0,a.y)
u=n.al(new V.J(t.a,t.b).p(0,2).v(0,u.ga8()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.U()
s=n.y
if(typeof s!=="number")return H.r(s)
t.sV(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.U()
t=n.x
if(typeof t!=="number")return H.r(t)
s.sV(-u*10*t)}else{u=a.c
t=a.d
s=t.L(0,a.y)
r=n.al(new V.J(s.a,s.b).p(0,2).v(0,u.ga8()))
s=n.c
q=r.a
if(typeof q!=="number")return q.U()
p=n.y
if(typeof p!=="number")return H.r(p)
o=n.cy
if(typeof o!=="number")return H.r(o)
s.sY(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.U()
q=n.x
if(typeof q!=="number")return H.r(q)
s=n.db
if(typeof s!=="number")return H.r(s)
o.sY(0,-p*q+s)
n.b.sV(0)
n.c.sV(0)
t=t.L(0,a.z)
n.dx=n.al(new V.J(t.a,t.b).p(0,2).v(0,u.ga8()))}n.a6()},
bI:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.D(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.U()
s=r.y
if(typeof s!=="number")return H.r(s)
u.sV(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.U()
u=r.x
if(typeof u!=="number")return H.r(u)
s.sV(-t*10*u)
r.a6()}},
eJ:function(a){var u=this
if(H.t(a,"$id7").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
eL:function(a){var u,t,s,r,q,p,o,n=this
H.t(a,"$iaR")
if(!J.F(n.d,a.x.b))return
u=a.c
t=a.d
s=t.L(0,a.y)
r=n.al(new V.J(s.a,s.b).p(0,2).v(0,u.ga8()))
s=n.c
q=r.a
if(typeof q!=="number")return q.U()
p=n.y
if(typeof p!=="number")return H.r(p)
o=n.cy
if(typeof o!=="number")return H.r(o)
s.sY(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.U()
q=n.x
if(typeof q!=="number")return H.r(q)
s=n.db
if(typeof s!=="number")return H.r(s)
o.sY(0,-p*q+s)
n.b.sV(0)
n.c.sV(0)
t=t.L(0,a.z)
n.dx=n.al(new V.J(t.a,t.b).p(0,2).v(0,u.ga8()))
n.a6()},
h1:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
h_:function(a){var u,t,s,r,q,p,o,n=this
H.t(a,"$idA")
if(!n.cx)return
if(n.ch){u=a.d.L(0,a.y)
u=new V.J(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.r(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.L(0,a.y)
u=n.al(new V.J(t.a,t.b).p(0,2).v(0,u.ga8()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.U()
s=n.y
if(typeof s!=="number")return H.r(s)
t.sV(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.U()
t=n.x
if(typeof t!=="number")return H.r(t)
s.sV(-u*10*t)}else{u=a.c
t=a.d
s=t.L(0,a.y)
r=n.al(new V.J(s.a,s.b).p(0,2).v(0,u.ga8()))
s=n.c
q=r.a
if(typeof q!=="number")return q.U()
p=n.y
if(typeof p!=="number")return H.r(p)
o=n.cy
if(typeof o!=="number")return H.r(o)
s.sY(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.U()
q=n.x
if(typeof q!=="number")return H.r(q)
s=n.db
if(typeof s!=="number")return H.r(s)
o.sY(0,-p*q+s)
n.b.sV(0)
n.c.sV(0)
t=t.L(0,a.z)
n.dx=n.al(new V.J(t.a,t.b).p(0,2).v(0,u.ga8()))}n.a6()},
fY:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.D(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.U()
s=r.y
if(typeof s!=="number")return H.r(s)
u.sV(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.U()
u=r.x
if(typeof u!=="number")return H.r(u)
s.sV(-t*10*u)
r.a6()}},
ar:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.P()
if(s<r){t.dy=r
u=b.y
t.c.aq(0,u)
t.b.aq(0,u)
t.fr=V.ll(t.b.d).p(0,V.lm(t.c.d))}return t.fr},
$iac:1}
U.dI.prototype={
gB:function(){var u=this.r
return u==null?this.r=D.K():u},
J:function(a){var u=this.r
if(u!=null)u.G(a)},
b_:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.K():t
t=r.geN()
u.n(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.K():s).n(0,t)
return!0},
eO:function(a){var u,t,s,r,q=this
if(!J.F(q.b,q.a.b.c))return
H.t(a,"$ic8")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.p()
r=u+t*s
if(u!==r){q.d=r
u=new D.C("zoom",u,r)
u.b=!0
q.J(u)}},
ar:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.lo(u,u,u,1)}return t.f},
$iac:1}
M.cY.prototype={
at:function(a){var u=this.y
if(u!=null)u.G(a)},
em:function(){return this.at(null)},
f1:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gak(),s=[{func:1,ret:-1,args:[D.Y]}],r=0;r<b.length;b.length===u||(0,H.l)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bs()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bu()
u.b=!0
this.at(u)},
f3:function(a,b){var u,t
for(u=b.gT(b),t=this.gak();u.u();)u.gC(u).gB().O(0,t)
u=new D.bv()
u.b=!0
this.at(u)},
sdU:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gB().O(0,t.gak())
u=t.d
t.d=a
if(a!=null)a.gB().n(0,t.gak())
s=new D.C("technique",u,t.d)
s.b=!0
t.at(s)}},
gB:function(){var u=this.y
return u==null?this.y=D.K():u},
aS:function(a2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a2.dP(a1.d)
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
if(typeof s!=="number")return H.r(s)
o=C.d.ai(p*s)
p=q.b
if(typeof r!=="number")return H.r(r)
n=C.d.ai(p*r)
p=C.d.ai(q.c*s)
a2.c=p
q=C.d.ai(q.d*r)
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
i=V.aw(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a2.cy.dO(i)
t=$.lr
if(t==null){t=V.ne()
q=V.lM()
p=$.lJ
if(p==null)p=$.lJ=new V.z(0,0,-1)
h=p.v(0,Math.sqrt(p.D(p)))
q=q.ay(h)
g=q.v(0,Math.sqrt(q.D(q)))
f=h.ay(g)
e=new V.z(t.a,t.b,t.c)
d=g.U(0).D(e)
c=f.U(0).D(e)
b=h.U(0).D(e)
t=V.aw(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.lr=t
a=t}else a=t
t=u.b
if(t!=null){a0=t.ar(0,a2,u)
if(a0!=null)a=a0.p(0,a)}a2.db.dO(a)
u=a1.d
if(u!=null)u.aq(0,a2)
for(u=a1.e.a,u=new J.aa(u,u.length);u.u();)u.d.aq(0,a2)
for(u=a1.e.a,u=new J.aa(u,u.length);u.u();)u.d.aS(a2)
a1.b.toString
a2.cy.ci()
a2.db.ci()
a1.c.toString
a2.dN()}}
A.cN.prototype={}
A.eP.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hr:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
hm:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.a_.prototype={
gaj:function(a){var u=this.a?1:0
return u|0|0},
i:function(a){var u=this.a?1:0
return""+(u|0|0)},
q:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.a_))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.h0.prototype={
ed:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
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
A.ot(c3,u)
A.ov(c3,u)
A.ou(c3,u)
A.ox(c3,u)
A.oy(c3,u)
A.ow(c3,u)
A.oz(c3,u)
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
m=A.os(b8.z)
b8.c=n
b8.d=m
b8.e=b8.cK(n,35633)
b8.f=b8.cK(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!s.getProgramParameter(b8.r,35714)){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.p(P.v("Failed to link shader: "+H.e(l)))}b8.fT()
b8.fV()
b8.Q=b8.x.h(0,"posAttr")
b8.cx=b8.x.h(0,"normAttr")
b8.ch=b8.x.h(0,"binmAttr")
b8.cy=b8.x.h(0,"txt2DAttr")
b8.db=b8.x.h(0,"txtCubeAttr")
b8.dx=b8.x.h(0,"bendAttr")
if(c3.dy)b8.id=H.t(b8.y.X(0,"invViewMat"),"$iad")
if(t)b8.dy=H.t(b8.y.X(0,"objMat"),"$iad")
if(r)b8.fr=H.t(b8.y.X(0,"viewObjMat"),"$iad")
b8.fy=H.t(b8.y.X(0,"projViewObjMat"),"$iad")
if(c3.go)b8.fx=H.t(b8.y.X(0,"viewMat"),"$iad")
if(c3.x1)b8.k1=H.t(b8.y.X(0,"txt2DMat"),"$icm")
if(c3.x2)b8.k2=H.t(b8.y.X(0,"txtCubeMat"),"$iad")
if(c3.y1)b8.k3=H.t(b8.y.X(0,"colorMat"),"$iad")
b8.r1=H.b([],[A.ad])
t=c3.bi
if(t>0){b8.k4=b8.y.X(0,"bendMatCount")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.h(0,q)
if(j==null)H.p(P.v(c0+q+c1))
s.push(H.t(j,"$iad"))}}if(c3.a.a)b8.r2=H.t(b8.y.X(0,"emissionClr"),"$iG")
if(c3.b.a)b8.x1=H.t(b8.y.X(0,"ambientClr"),"$iG")
if(c3.c.a)b8.y2=H.t(b8.y.X(0,"diffuseClr"),"$iG")
if(c3.d.a)b8.bj=H.t(b8.y.X(0,"invDiffuseClr"),"$iG")
t=c3.e.a
if(!t)s=!1
else s=!0
if(s){b8.dh=H.t(b8.y.X(0,"shininess"),"$iW")
if(t)b8.dg=H.t(b8.y.X(0,"specularClr"),"$iG")}if(c3.db){b8.di=H.t(b8.y.X(0,"envSampler"),"$ibE")
if(c3.r.a)b8.dj=H.t(b8.y.X(0,"reflectClr"),"$iG")
t=c3.x.a
if(!t)s=!1
else s=!0
if(s){b8.dk=H.t(b8.y.X(0,"refraction"),"$iW")
if(t)b8.dl=H.t(b8.y.X(0,"refractClr"),"$iG")}}if(c3.y.a)b8.dm=H.t(b8.y.X(0,"alpha"),"$iW")
if(c3.k1){t=c3.z
s=t.length
if(s!==0){r=P.w
b8.c0=new H.I([r,A.be])
b8.c1=new H.I([r,[P.o,A.ck]])
for(r=[A.ck],i=0;i<t.length;t.length===s||(0,H.l)(t),++i){h=t[i]
g=h.a
f="barLight"+H.e(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].startPnt"
j=p.h(0,o)
if(j==null)H.p(P.v(c0+o+c1))
H.t(j,"$iG")
p=b8.y
o=f+"s["+k+"].endPnt"
d=p.h(0,o)
if(d==null)H.p(P.v(c0+o+c1))
H.t(d,"$iG")
p=b8.y
o=f+"s["+k+"].color"
c=p.h(0,o)
if(c==null)H.p(P.v(c0+o+c1))
H.t(c,"$iG")
if(typeof g!=="number")return g.a7()
if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
b=p.h(0,o)
if(b==null)H.p(P.v(c0+o+c1))
H.t(b,"$iW")
p=b8.y
o=f+"s["+k+"].att1"
a=p.h(0,o)
if(a==null)H.p(P.v(c0+o+c1))
H.t(a,"$iW")
p=b8.y
o=f+"s["+k+"].att2"
a0=p.h(0,o)
if(a0==null)H.p(P.v(c0+o+c1))
H.t(a0,"$iW")
a1=a0
a2=a
a3=b}else{a1=b9
a2=a1
a3=a2}e.push(new A.ck(j,d,c,a3,a2,a1))}b8.c1.l(0,g,e)
q=b8.c0
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.p(P.v(c0+o+c1))
q.l(0,g,j)}}t=c3.Q
s=t.length
if(s!==0){r=P.w
b8.c2=new H.I([r,A.be])
b8.c3=new H.I([r,[P.o,A.cl]])
for(r=[A.cl],i=0;i<t.length;t.length===s||(0,H.l)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.e(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.a7()
p=(g&1)!==0
if(p){o=b8.y
a4=f+"s["+k+"].objUp"
j=o.h(0,a4)
if(j==null)H.p(P.v(c0+a4+c1))
H.t(j,"$iG")
o=b8.y
a4=f+"s["+k+"].objRight"
d=o.h(0,a4)
if(d==null)H.p(P.v(c0+a4+c1))
H.t(d,"$iG")
o=b8.y
a4=f+"s["+k+"].objDir"
c=o.h(0,a4)
if(c==null)H.p(P.v(c0+a4+c1))
H.t(c,"$iG")
a5=c
a6=d
a7=j}else{a5=b9
a6=a5
a7=a6}o=b8.y
a4=f+"s["+k+"].viewDir"
j=o.h(0,a4)
if(j==null)H.p(P.v(c0+a4+c1))
H.t(j,"$iG")
o=b8.y
a4=f+"s["+k+"].color"
d=o.h(0,a4)
if(d==null)H.p(P.v(c0+a4+c1))
H.t(d,"$iG")
if(p){p=b8.y
o=f+"sTexture2D"+k
c=p.h(0,o)
if(c==null)H.p(P.v(c0+o+c1))
H.t(c,"$ibD")
a8=c}else a8=b9
e.push(new A.cl(a7,a6,a5,j,d,a8))}b8.c3.l(0,g,e)
q=b8.c2
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.p(P.v(c0+o+c1))
q.l(0,g,j)}}t=c3.ch
s=t.length
if(s!==0){r=P.w
b8.c4=new H.I([r,A.be])
b8.c5=new H.I([r,[P.o,A.cn]])
for(r=[A.cn],i=0;i<t.length;t.length===s||(0,H.l)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.e(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.h(0,o)
if(j==null)H.p(P.v(c0+o+c1))
H.t(j,"$iG")
p=b8.y
o=f+"s["+k+"].viewPnt"
d=p.h(0,o)
if(d==null)H.p(P.v(c0+o+c1))
H.t(d,"$iG")
p=b8.y
o=f+"s["+k+"].color"
c=p.h(0,o)
if(c==null)H.p(P.v(c0+o+c1))
H.t(c,"$iG")
if(typeof g!=="number")return g.a7()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
b=p.h(0,o)
if(b==null)H.p(P.v(c0+o+c1))
H.t(b,"$icm")
a9=b}else a9=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
b=p.h(0,o)
if(b==null)H.p(P.v(c0+o+c1))
H.t(b,"$ibE")
a8=b}else a8=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
b=p.h(0,o)
if(b==null)H.p(P.v(c0+o+c1))
H.t(b,"$ibE")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a=p.h(0,o)
if(a==null)H.p(P.v(c0+o+c1))
H.t(a,"$icj")
b0=b
b1=a}else{b0=b9
b1=b0}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
b=p.h(0,o)
if(b==null)H.p(P.v(c0+o+c1))
H.t(b,"$iW")
p=b8.y
o=f+"s["+k+"].att1"
a=p.h(0,o)
if(a==null)H.p(P.v(c0+o+c1))
H.t(a,"$iW")
p=b8.y
o=f+"s["+k+"].att2"
a0=p.h(0,o)
if(a0==null)H.p(P.v(c0+o+c1))
H.t(a0,"$iW")
a1=a0
a2=a
a3=b}else{a1=b9
a2=a1
a3=a2}e.push(new A.cn(j,d,a9,c,a8,b0,b1,a3,a2,a1))}b8.c5.l(0,g,e)
q=b8.c4
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.p(P.v(c0+o+c1))
q.l(0,g,j)}}t=c3.cx
s=t.length
if(s!==0){r=P.w
b8.c6=new H.I([r,A.be])
b8.c7=new H.I([r,[P.o,A.co]])
for(r=[A.co],i=0;i<t.length;t.length===s||(0,H.l)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.e(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.h(0,o)
if(j==null)H.p(P.v(c0+o+c1))
H.t(j,"$iG")
p=b8.y
o=f+"s["+k+"].objDir"
d=p.h(0,o)
if(d==null)H.p(P.v(c0+o+c1))
H.t(d,"$iG")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.h(0,o)
if(c==null)H.p(P.v(c0+o+c1))
H.t(c,"$iG")
p=b8.y
o=f+"s["+k+"].color"
b=p.h(0,o)
if(b==null)H.p(P.v(c0+o+c1))
H.t(b,"$iG")
if(typeof g!=="number")return g.a7()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a=p.h(0,o)
if(a==null)H.p(P.v(c0+o+c1))
H.t(a,"$iG")
p=b8.y
o=f+"s["+k+"].objRight"
a0=p.h(0,o)
if(a0==null)H.p(P.v(c0+o+c1))
H.t(a0,"$iG")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.h(0,o)
if(b2==null)H.p(P.v(c0+o+c1))
H.t(b2,"$iW")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.h(0,o)
if(b3==null)H.p(P.v(c0+o+c1))
H.t(b3,"$iW")
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
if(a==null)H.p(P.v(c0+a4+c1))
H.t(a,"$icj")
b1=a}else b1=b9
if((g&8)!==0){o=b8.y
a4=f+"s["+k+"].cutoff"
a=o.h(0,a4)
if(a==null)H.p(P.v(c0+a4+c1))
H.t(a,"$iW")
o=b8.y
a4=f+"s["+k+"].coneAngle"
a0=o.h(0,a4)
if(a0==null)H.p(P.v(c0+a4+c1))
H.t(a0,"$iW")
b6=a0
b7=a}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
a4=f+"s["+k+"].att0"
a=o.h(0,a4)
if(a==null)H.p(P.v(c0+a4+c1))
H.t(a,"$iW")
o=b8.y
a4=f+"s["+k+"].att1"
a0=o.h(0,a4)
if(a0==null)H.p(P.v(c0+a4+c1))
H.t(a0,"$iW")
o=b8.y
a4=f+"s["+k+"].att2"
b2=o.h(0,a4)
if(b2==null)H.p(P.v(c0+a4+c1))
H.t(b2,"$iW")
a1=b2
a2=a0
a3=a}else{a1=b9
a2=a1
a3=a2}if((g&1)!==0){o=b8.y
a4=f+"sTexture2D"+k
a=o.h(0,a4)
if(a==null)H.p(P.v(c0+a4+c1))
H.t(a,"$ibD")
a8=a}else a8=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a=p.h(0,o)
if(a==null)H.p(P.v(c0+o+c1))
H.t(a,"$ibD")
b0=a}else b0=b9
e.push(new A.co(j,d,c,b,a7,a6,b5,b4,b1,b7,b6,a3,a2,a1,a8,b0))}b8.c7.l(0,g,e)
q=b8.c6
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.p(P.v(c0+o+c1))
q.l(0,g,j)}}}},
fR:function(a,b){}}
A.cO.prototype={
i:function(a){return"barLight"+H.e(this.a)}}
A.cV.prototype={
i:function(a){return"dirLight"+H.e(this.a)}}
A.dj.prototype={
i:function(a){return"pointLight"+H.e(this.a)}}
A.dq.prototype={
i:function(a){return"spotLight"+H.e(this.a)}}
A.h3.prototype={
i:function(a){return this.b2}}
A.ck.prototype={}
A.cl.prototype={}
A.cn.prototype={}
A.co.prototype={}
A.dn.prototype={
eg:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cK:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.v("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
fT:function(){var u,t,s,r=this,q=H.b([],[A.cN]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.r(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cN(p,t.name,s))}r.x=new A.eP(q)},
fV:function(){var u,t,s,r=this,q=H.b([],[A.dC]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.r(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.hj(t.type,t.size,t.name,s))}r.y=new A.iw(q)},
aL:function(a,b,c){var u=this.a
if(a===1)return new A.be(u,b,c)
else return A.kJ(u,this.r,b,a,c)},
eD:function(a,b,c){var u=this.a
if(a===1)return new A.bD(u,b,c)
else return A.kJ(u,this.r,b,a,c)},
eE:function(a,b,c){var u=this.a
if(a===1)return new A.bE(u,b,c)
else return A.kJ(u,this.r,b,a,c)},
bf:function(a,b){return new P.dU(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
hj:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aL(b,c,d)
case 5121:return u.aL(b,c,d)
case 5122:return u.aL(b,c,d)
case 5123:return u.aL(b,c,d)
case 5124:return u.aL(b,c,d)
case 5125:return u.aL(b,c,d)
case 5126:return new A.W(u.a,c,d)
case 35664:return new A.is(u.a,c,d)
case 35665:return new A.G(u.a,c,d)
case 35666:return new A.cj(u.a,c,d)
case 35667:return new A.it(u.a,c,d)
case 35668:return new A.iu(u.a,c,d)
case 35669:return new A.iv(u.a,c,d)
case 35674:return new A.ix(u.a,c,d)
case 35675:return new A.cm(u.a,c,d)
case 35676:return new A.ad(u.a,c,d)
case 35678:return u.eD(b,c,d)
case 35680:return u.eE(b,c,d)
case 35670:throw H.c(u.bf("BOOL",c))
case 35671:throw H.c(u.bf("BOOL_VEC2",c))
case 35672:throw H.c(u.bf("BOOL_VEC3",c))
case 35673:throw H.c(u.bf("BOOL_VEC4",c))
default:throw H.c(P.v("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.dC.prototype={}
A.iw.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
X:function(a,b){var u=this.h(0,b)
if(u==null)throw H.c(P.v("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.R()},
R:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.l)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.be.prototype={
i:function(a){return"Uniform1i: "+H.e(this.c)}}
A.it.prototype={
i:function(a){return"Uniform2i: "+H.e(this.c)}}
A.iu.prototype={
i:function(a){return"Uniform3i: "+H.e(this.c)}}
A.iv.prototype={
i:function(a){return"Uniform4i: "+H.e(this.c)}}
A.ir.prototype={
i:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.W.prototype={
i:function(a){return"Uniform1f: "+H.e(this.c)}}
A.is.prototype={
i:function(a){return"Uniform2f: "+H.e(this.c)}}
A.G.prototype={
i:function(a){return"Uniform3f: "+H.e(this.c)}}
A.cj.prototype={
i:function(a){return"Uniform4f: "+H.e(this.c)}}
A.ix.prototype={
i:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.cm.prototype={
ag:function(a){var u=new Float32Array(H.bK(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.e(this.c)}}
A.ad.prototype={
ag:function(a){var u=new Float32Array(H.bK(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.e(this.c)}}
A.bD.prototype={
i:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.bE.prototype={
i:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.jM.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cc(s.b,b).cc(s.d.cc(s.c,b),c)
a.sY(0,new V.U(r.a,r.b,r.c))
a.sdV(r.v(0,Math.sqrt(r.D(r))))
s=1-b
u=1-c
a.sd9(new V.bc(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)}}
F.jW.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)}}
F.jY.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.r(p)
s=-s*p
u=r*p
a.sY(0,new V.U(s,u,q))
u=new V.z(s,u,q)
a.sdV(u.v(0,Math.sqrt(u.D(u))))
a.sd9(new V.bc(1-c,2+c,-1,-1))}}
F.jZ.prototype={
$1:function(a){return this.a.$2(a,1)}}
F.k_.prototype={
$1:function(a){return this.a.$2(1-a,0)}}
F.kh.prototype={
$2:function(a,b){return 0}}
F.ki.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.r(s)
u=a.f
t=new V.z(u.a,u.b,u.c)
s=t.v(0,Math.sqrt(t.D(t))).p(0,this.b+s)
a.sY(0,new V.U(s.a,s.b,s.c))}}
F.kk.prototype={
$1:function(a){return new V.U(Math.cos(a),Math.sin(a),0)}}
F.k7.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.U(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)}}
F.jX.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.l4(n.$1(o),m)
m=J.l4(n.$1(o+3.141592653589793/p.c),m).L(0,l)
m=new V.z(m.a,m.b,m.c)
u=m.v(0,Math.sqrt(m.D(m)))
n=$.lK
if(n==null){n=new V.z(1,0,0)
$.lK=n
t=n}else t=n
n=u.ay(!J.F(u,t)?V.lN():t)
s=n.v(0,Math.sqrt(n.D(n)))
n=s.ay(u)
t=n.v(0,Math.sqrt(n.D(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.p(0,n*m)
m=s.p(0,q*m)
a.sY(0,l.A(0,new V.U(n.a-m.a,n.b-m.b,n.c-m.c)))}}
F.b3.prototype={
b0:function(){var u=this
if(!u.gb1()){C.b.O(u.a.a.d.b,u)
u.a.a.Z()}u.bM()
u.bN()
u.fK()},
bQ:function(a){this.a=a
a.d.b.push(this)},
bR:function(a){this.b=a
a.d.c.push(this)},
fS:function(a){this.c=a
a.d.d.push(this)},
bM:function(){var u=this.a
if(u!=null){C.b.O(u.d.b,this)
this.a=null}},
bN:function(){var u=this.b
if(u!=null){C.b.O(u.d.c,this)
this.b=null}},
fK:function(){var u=this.c
if(u!=null){C.b.O(u.d.d,this)
this.c=null}},
gb1:function(){return this.a==null||this.b==null||this.c==null},
ew:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cp()
if(q!=null)s=s.A(0,q)
if(u!=null)s=s.A(0,u)
if(t!=null)s=s.A(0,t)
if(s.dB())return
return s.v(0,Math.sqrt(s.D(s)))},
ey:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.L(0,q)
r=new V.z(r.a,r.b,r.c)
s=r.v(0,Math.sqrt(r.D(r)))
r=t.L(0,q)
r=new V.z(r.a,r.b,r.c)
r=s.ay(r.v(0,Math.sqrt(r.D(r))))
return r.v(0,Math.sqrt(r.D(r)))},
bV:function(){var u,t=this
if(t.d!=null)return!0
u=t.ew()
if(u==null){u=t.ey()
if(u==null)return!1}t.d=u
t.a.a.Z()
return!0},
ev:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.cp()
if(q!=null)s=s.A(0,q)
if(u!=null)s=s.A(0,u)
if(t!=null)s=s.A(0,t)
if(s.dB())return
return s.v(0,Math.sqrt(s.D(s)))},
ex:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.A().a){l=d.L(0,g)
l=new V.z(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.D(l)))
if(s.a-t.a<0)q=q.U(0)}else{p=(l-u.b)/r
l=d.L(0,g).p(0,p).A(0,g).L(0,j)
l=new V.z(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.D(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.U(0)}l=n.d
if(l!=null){o=l.v(0,Math.sqrt(l.D(l)))
l=o.ay(q)
l=l.v(0,Math.sqrt(l.D(l))).ay(o)
q=l.v(0,Math.sqrt(l.D(l)))}return q},
bT:function(){var u,t=this
if(t.e!=null)return!0
u=t.ev()
if(u==null){u=t.ex()
if(u==null)return!1}t.e=u
t.a.a.Z()
return!0},
ghd:function(a){var u=this
if(J.F(u.a,u.b))return!0
if(J.F(u.b,u.c))return!0
if(J.F(u.c,u.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
I:function(a){var u,t,s=this
if(s.gb1())return a+"disposed"
u=a+C.a.ae(J.a3(s.a.e),0)+", "+C.a.ae(J.a3(s.b.e),0)+", "+C.a.ae(J.a3(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
R:function(){return this.I("")}}
F.fp.prototype={}
F.hY.prototype={
b3:function(a,b,c){var u,t=b.a
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
F.c3.prototype={
b0:function(){var u=this
if(!u.gb1()){C.b.O(u.a.a.c.b,u)
u.a.a.Z()}u.bM()
u.bN()},
bQ:function(a){this.a=a
a.c.b.push(this)},
bR:function(a){this.b=a
a.c.c.push(this)},
bM:function(){var u=this.a
if(u!=null){C.b.O(u.c.b,this)
this.a=null}},
bN:function(){var u=this.b
if(u!=null){C.b.O(u.c.c,this)
this.b=null}},
gb1:function(){return this.a==null||this.b==null},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
I:function(a){if(this.gb1())return a+"disposed"
return a+C.a.ae(J.a3(this.a.e),0)+", "+C.a.ae(J.a3(this.b.e),0)},
R:function(){return this.I("")}}
F.fO.prototype={}
F.iq.prototype={
b3:function(a,b,c){var u,t=b.a
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
F.cc.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
I:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.a.ae(J.a3(u.e),0)},
R:function(){return this.I("")}}
F.hQ.prototype={
gB:function(){var u=this.e
return u==null?this.e=D.K():u},
b4:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.w()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.l)(g),++s){r=g[s]
h.a.n(0,r.hg())}h.a.w()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.l)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
n=p[o]
h.b.a.a.n(0,n)
o=new F.cc()
if(n.a==null)H.p(P.v("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.G(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.l)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.w()
p=p.e
if(typeof p!=="number")return p.A()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.c.a
p.a.n(0,l)
p.a.n(0,k)
F.n4(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.l)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.w()
p=p.e
if(typeof p!=="number")return p.A()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
i=p[o]
o=h.d.a
o.a.n(0,l)
o.a.n(0,k)
o.a.n(0,i)
F.bY(l,k,i)}g=h.e
if(g!=null)g.af(0)},
an:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.an()||!1
if(!t.a.an())u=!1
s=t.e
if(s!=null)s.af(0)
return u},
hG:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.b(o.slice(0),[H.aJ(o,0)])
for(o=[F.bf];u.length!==0;){t=C.b.ghv(u)
C.b.cl(u,0)
if(t!=null){s=H.b([],o)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.d(u,r)
q=u[r]
if(q!=null&&a.b3(0,t,q)){s.push(q)
C.b.cl(u,r)}}if(s.length>1)b.b4(s)}}p.a.w()
p.c.cm()
p.d.cm()
p.b.hZ()
p.c.cn(new F.iq())
p.d.cn(new F.hY())
o=p.e
if(o!=null)o.af(0)},
bS:function(){this.hG(new F.iU(),new F.ht())},
c9:function(){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
p.d.c9()
for(u=p.a.c.length-1;u>=0;--u){o=p.a.c
if(u>=o.length)return H.d(o,u)
t=o[u]
o=t.r
if(o!=null)t.sdD(new V.z(-o.a,-o.b,-o.c))
o=t.x
if(o!=null){s=-o.a
r=-o.b
o=-o.c
q=new V.z(s,r,o).v(0,Math.sqrt(s*s+r*r+o*o))
if(!J.F(t.x,q)){t.x=q
o=t.a
if(o!=null){o=o.e
if(o!=null)o.G(null)}}}}o=p.e
if(o!=null)o.af(0)},
hb:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.b_()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.aZ().a)!==0)++s
if((t&$.aY().a)!==0)++s
if((t&$.bj().a)!==0)++s
if((t&$.bk().a)!==0)++s
if((t&$.cJ().a)!==0)++s
if((t&$.cK().a)!==0)++s
if((t&$.bR().a)!==0)++s
if((t&$.aX().a)!==0)++s
r=a4.gcu(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.L])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.cP])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.h8(m)
k=l.gcu(l)
if(m>=t)return H.d(o,m)
o[m]=new Z.cP(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.d(i,j)
h=i[j].hF(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.d(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.bK(p)),35044)
u.bindBuffer(a1,null)
c=new Z.cQ(new Z.dK(a1,d),o,a4)
c.b=H.b([],[Z.bt])
if(a0.b.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.w()
b.push(t.e)}a=Z.kM(u,34963,b)
c.b.push(new Z.bt(0,b.length,a))}if(a0.c.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.w()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.d(t,m)
t=t[m].b
t.a.a.w()
b.push(t.e)}a=Z.kM(u,34963,b)
c.b.push(new Z.bt(1,b.length,a))}if(a0.d.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.w()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.d(t,m)
t=t[m].b
t.a.a.w()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.d(t,m)
t=t[m].c
t.a.a.w()
b.push(t.e)}a=Z.kM(u,34963,b)
c.b.push(new Z.bt(4,b.length,a))}return c},
i:function(a){var u=this,t="   ",s=H.b([],[P.h])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.I(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.I(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.I(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.I(t))}return C.b.j(s,"\n")},
Z:function(){var u=this.e
if(u!=null)u.G(null)}}
F.hR.prototype={
h4:function(a){var u,t,s,r,q,p=H.b([],[F.b3]),o=a.length
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
h5:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.b3])
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
gm:function(a){return this.b.length},
cn:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.h(0,q)
for(o=q-1;o>=0;--o){n=r.d.h(0,o)
if(a.b3(0,p,n)){p.b0()
break}}}}},
cm:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=s.ghd(s)
if(t)s.b0()}},
an:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.l)(u),++r)if(!u[r].bV())s=!1
return s},
bU:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.l)(u),++r)if(!u[r].bT())s=!1
return s},
c9:function(){var u,t,s,r,q,p
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
q=r.b
r.b=r.c
r.c=q
p=r.d
if(p!=null)r.d=new V.z(-p.a,-p.b,-p.c)
p=r.e
if(p!=null)r.e=new V.z(-p.a,-p.b,-p.c)
p=r.a.a.e
if(p!=null)p.G(null)}},
i:function(a){return this.R()},
I:function(a){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].I(a))
return C.b.j(r,"\n")},
R:function(){return this.I("")}}
F.hS.prototype={
gm:function(a){return this.b.length},
cn:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.h(0,q)
for(o=q-1;o>=0;--o){n=r.c.h(0,o)
if(a.b3(0,p,n)){p.b0()
break}}}}},
cm:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=J.F(s.a,s.b)
if(t)s.b0()}},
i:function(a){return this.R()},
I:function(a){var u,t,s=H.b([],[P.h]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.d(t,u)
s.push(t[u].I(a+(""+u+". ")))}return C.b.j(s,"\n")},
R:function(){return this.I("")}}
F.hT.prototype={
gm:function(a){return this.b.length},
hZ:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.b.O(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.G(null)}s=t.a
if(s!=null){C.b.O(s.b.b,t)
t.a=null}}}},
i:function(a){return this.R()},
I:function(a){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].I(a))
return C.b.j(r,"\n")},
R:function(){return this.I("")}}
F.bf.prototype={
bZ:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.dJ(u.cx,r,o,t,s,q,p,a,n)},
hg:function(){return this.bZ(null)},
sY:function(a,b){var u
if(!J.F(this.f,b)){this.f=b
u=this.a
if(u!=null)u.Z()}},
sdD:function(a){var u
a=a==null?null:a.v(0,Math.sqrt(a.D(a)))
if(!J.F(this.r,a)){this.r=a
u=this.a
if(u!=null)u.Z()}},
sdV:function(a){var u
if(!J.F(this.z,a)){this.z=a
u=this.a
if(u!=null)u.Z()}},
sd9:function(a){var u
if(!J.F(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.Z()}},
hF:function(a){var u,t,s=this
if(a.q(0,$.b_())){u=s.f
t=[P.L]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.aZ())){u=s.r
t=[P.L]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.aY())){u=s.x
t=[P.L]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.bj())){u=s.y
t=[P.L]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.q(0,$.bk())){u=s.z
t=[P.L]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.cJ())){u=s.Q
t=[P.L]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.cK())){u=s.Q
t=[P.L]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.q(0,$.bR()))return H.b([s.ch],[P.L])
else if(a.q(0,$.aX())){u=s.cx
t=[P.L]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.L])},
bV:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cp()
t.d.H(0,new F.iZ(s))
s=s.a
t.r=s.v(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.Z()
s=t.a.e
if(s!=null)s.af(0)}return!0},
bT:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cp()
t.d.H(0,new F.iY(s))
s=s.a
t.x=s.v(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.Z()
s=t.a.e
if(s!=null)s.af(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
I:function(a){var u,t,s=this,r="-",q=H.b([],[P.h])
q.push(C.a.ae(J.a3(s.e),0))
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
t=C.b.j(q,", ")
return a+"{"+t+"}"},
R:function(){return this.I("")}}
F.iZ.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.A(0,t)}}}
F.iY.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.A(0,t)}}}
F.iP.prototype={
w:function(){var u,t,s,r
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
h6:function(a,b,c,d,e,f){var u=F.dJ(a,null,b,c,d,e,f,null,0)
this.n(0,u)
return u},
gm:function(a){return this.c.length},
an:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)u[s].bV()
return!0},
bU:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)u[s].bT()
return!0},
hc:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.v(0,Math.sqrt(p*p+o*o+n*n))
if(!J.F(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.G(null)}}}}return!0},
i:function(a){return this.R()},
I:function(a){var u,t,s,r
this.w()
u=H.b([],[P.h])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.l)(t),++r)u.push(t[r].I(a))
return C.b.j(u,"\n")},
R:function(){return this.I("")}}
F.iQ.prototype={
gm:function(a){return this.b.length+this.c.length+this.d.length},
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
C.b.H(u.c,new F.iR(u,b))
C.b.H(u.d,new F.iS(u,b))},
i:function(a){return this.R()},
R:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].I(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].I(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].I(""))
return C.b.j(r,"\n")}}
F.iR.prototype={
$1:function(a){if(!J.F(a.a,this.a))this.b.$1(a)}}
F.iS.prototype={
$1:function(a){var u=this.a
if(!J.F(a.a,u)&&!J.F(a.b,u))this.b.$1(a)}}
F.iT.prototype={
gm:function(a){return this.b.length+this.c.length},
h:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.d(t,u)
return t[u]}else{if(b<0)return H.d(t,b)
return t[b]}},
i:function(a){return this.R()},
R:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].I(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].I(""))
return C.b.j(r,"\n")}}
F.iV.prototype={}
F.iU.prototype={
b3:function(a,b,c){return J.F(b.f,c.f)}}
F.iW.prototype={}
F.ht.prototype={
b4:function(a){var u,t,s,r=V.cp()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null)r=new V.z(r.a+s.a,r.b+s.b,r.c+s.c)}r=r.v(0,Math.sqrt(r.D(r)))
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.l)(a),++t)a[t].sdD(r)
return}}
F.iX.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.R()},
R:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].I(""))
return C.b.j(r,"\n")}}
O.d8.prototype={
gB:function(){var u=this.fr
return u==null?this.fr=D.K():u},
aa:function(a){var u=this.fr
if(u!=null)u.G(a)},
f_:function(){return this.aa(null)},
cS:function(a){this.a=null
this.aa(a)},
fO:function(){return this.cS(null)},
eU:function(a,b){var u=new D.bu()
u.b=!0
this.aa(u)},
eW:function(a,b){var u=new D.bv()
u.b=!0
this.aa(u)},
cI:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=P.w
f=[f,f]
u=new H.I(f)
for(t=g.dx.e,s=t.length,r=0;r<t.length;t.length===s||(0,H.l)(t),++r){q=t[r]
p=q.gao()
o=u.h(0,q.gao())
u.l(0,p,o==null?1:o)}n=H.b([],[A.cO])
u.H(0,new O.h7(g,n))
C.b.aV(n,new O.h8())
m=new H.I(f)
for(t=g.dx.f,s=t.length,r=0;r<t.length;t.length===s||(0,H.l)(t),++r){p=m.h(0,0)
m.l(0,0,p==null?1:p)}l=H.b([],[A.cV])
m.H(0,new O.h9(g,l))
C.b.aV(l,new O.ha())
k=new H.I(f)
for(t=g.dx.r,s=t.length,r=0;r<t.length;t.length===s||(0,H.l)(t),++r){q=t[r]
p=q.gao()
o=k.h(0,q.gao())
k.l(0,p,o==null?1:o)}j=H.b([],[A.dj])
k.H(0,new O.hb(g,j))
C.b.aV(j,new O.hc())
i=new H.I(f)
for(f=g.dx.x,t=f.length,r=0;r<f.length;f.length===t||(0,H.l)(f),++r){q=f[r]
s=q.gao()
p=i.h(0,q.gao())
i.l(0,s,p==null?1:p)}h=H.b([],[A.dq])
i.H(0,new O.hd(g,h))
C.b.aV(h,new O.he())
f=C.c.a3(g.e.a.length+3,4)
g.dy.e
return A.nc(!1,!1,!1,!1,f*4,g.f.c,g.r.c,g.x.c,g.y.c,g.z.c,g.Q.c,g.cx.c,g.cy.c,g.db.c,n,l,j,h)},
eu:function(a,b){},
aq:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.aa(u,u.length);u.u();){t=u.d
t.toString
s=$.iO
t.a=s==null?$.iO=new V.z(0,0,1):s
s=$.iN
t.d=s==null?$.iN=new V.z(0,1,0):s
s=$.iM
t.e=s==null?$.iM=new V.z(-1,0,0):s
s=t.b
if(s!=null){r=s.ar(0,b,t)
if(r!=null){s=r.bq(t.a)
q=s.a
p=s.b
o=s.c
t.a=s.v(0,Math.sqrt(q*q+p*p+o*o))
o=r.bq(t.d)
p=o.a
q=o.b
s=o.c
t.d=o.v(0,Math.sqrt(p*p+q*q+s*s))
s=r.bq(t.e)
q=s.a
p=s.b
o=s.c
t.e=s.v(0,Math.sqrt(q*q+p*p+o*o))}}}},
i0:function(b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.cI()
u=b4.fr.h(0,b3.b2)
if(u==null){u=A.nb(b3,b4.a)
t=u.b
if(t.length===0)H.p(P.v("May not cache a shader with no name."))
if(b4.fr.bX(0,t))H.p(P.v('Shader cache already contains a shader by the name "'+t+'".'))
b4.fr.l(0,t,u)}b3=b2.a=u
b5.e=null}s=b3.z
r=s.bj
b3=b5.e
if(!(b3 instanceof Z.cQ))b3=b5.e=null
if(b3==null||!b3.d.q(0,r)){b3=s.k4
if(b3)b5.d.an()
q=s.r1
if(q){p=b5.d
o=p.e
if(o!=null)++o.d
p.d.bU()
p.a.bU()
p=p.e
if(p!=null)p.af(0)}p=s.rx
if(p){o=b5.d
n=o.e
if(n!=null)++n.d
o.a.hc()
o=o.e
if(o!=null)o.af(0)}m=b5.d.hb(new Z.j0(b4.a),r)
m.aR($.b_()).e=b2.a.Q.c
if(b3)m.aR($.aZ()).e=b2.a.cx.c
if(q)m.aR($.aY()).e=b2.a.ch.c
if(s.r2)m.aR($.bj()).e=b2.a.cy.c
if(p)m.aR($.bk()).e=b2.a.db.c
if(s.ry)m.aR($.aX()).e=b2.a.dx.c
b5.e=m}l=H.b([],[T.id])
b3=b2.a
q=b4.a
q.useProgram(b3.r)
b3.x.hr()
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
o=b4.cx=p.p(0,o.ga0(o))
p=o}b3=b3.fr
b3.toString
b3.ag(p.a9(0,!0))}b3=b2.a
p=b4.ch
if(p==null){p=b4.ghX()
o=b4.dx
o=b4.ch=p.p(0,o.ga0(o))
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
p=p.dh
p.a.uniform1f(p.d,o)}if(b3){b3=b2.a
p=b2.z.f
b3=b3.dg
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}b3=s.z
if(b3.length>0){p=P.w
h=new H.I([p,p])
for(p=b2.dx.e,o=p.length,g=0;g<p.length;p.length===o||(0,H.l)(p),++g){f=p[g]
e=f.gao()
d=h.h(0,e)
if(d==null)d=0
h.l(0,e,d+1)
c=J.bS(b2.a.c1.h(0,e),d)
n=f.gig()
b=$.aA
n=n.b9(b==null?$.aA=new V.U(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gil()
b=$.aA
n=n.b9(b==null?$.aA=new V.U(0,0,0):b)
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gax(f)
b=c.d
b.a.uniform3f(b.d,n.a,n.b,n.c)
if(f.gdf()){n=f.gd6()
b=c.e
b.a.uniform1f(b.d,n)
n=f.gd7()
b=c.f
b.a.uniform1f(b.d,n)
n=f.gd8()
b=c.r
b.a.uniform1f(b.d,n)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.l)(b3),++g){o=b3[g].a
k=h.h(0,o)
if(k==null)k=0
o=b2.a.c0.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.Q
if(b3.length>0){p=b4.db
a=p.ga0(p)
p=P.w
a0=new H.I([p,p])
for(p=b2.dx.f,o=p.length,g=0;g<p.length;p.length===o||(0,H.l)(p),++g){f=p[g]
d=a0.h(0,0)
if(d==null)d=0
a0.l(0,0,d+1)
c=J.bS(b2.a.c3.h(0,0),d)
n=a.bq(f.a)
b=n.a
a1=n.b
a2=n.c
a2=n.v(0,Math.sqrt(b*b+a1*a1+a2*a2))
a1=c.e
b=a2.a
n=a2.b
a2=a2.c
a1.a.uniform3f(a1.d,b,n,a2)
a2=f.c
n=c.f
n.a.uniform3f(n.d,a2.a,a2.b,a2.c)}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.l)(b3),++g){o=b3[g].a
k=a0.h(0,o)
if(k==null)k=0
o=b2.a.c2.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.ch
if(b3.length>0){p=b4.db
a=p.ga0(p)
p=P.w
a3=new H.I([p,p])
for(p=b2.dx.r,o=p.length,g=0;g<p.length;p.length===o||(0,H.l)(p),++g){f=p[g]
e=f.gao()
d=a3.h(0,e)
if(d==null)d=0
a3.l(0,e,d+1)
c=J.bS(b2.a.c5.h(0,e),d)
a4=a.p(0,f.ga0(f))
n=f.ga0(f)
b=$.aA
n=n.b9(b==null?$.aA=new V.U(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=$.aA
n=a4.b9(n==null?$.aA=new V.U(0,0,0):n)
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gax(f)
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
f.gaF()
n=a4.dA(0)
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
i=new Float32Array(H.bK(new V.da(b,a1,a2,a5,a6,a7,a8,a9,n).a9(0,!0)))
b0.a.uniformMatrix3fv(b0.d,!1,i)
f.gaF()
n=f.gaF()
if(!C.b.F(l,n)){n.saA(0,l.length)
l.push(n)}n=f.gaF()
b=n.gaB(n)
if(b){b=c.f
b.toString
a1=n.gaB(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.gaA(n)
b.a.uniform1i(b.d,n)}}f.gaU()
n=f.ge4()
b=c.x
b.toString
a1=n.gho(n)
a2=n.ghp(n)
a5=n.ghq()
n=n.ghn()
b.a.uniform4f(b.d,a1,a2,a5,n)
n=f.gaU()
if(!C.b.F(l,n)){n.saA(0,l.length)
l.push(n)}n=f.gaU()
b=n.gaB(n)
if(b){b=c.r
b.toString
a1=n.gaB(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.gaA(n)
b.a.uniform1i(b.d,n)}}if(f.gdf()){n=f.gd6()
b=c.y
b.a.uniform1f(b.d,n)
n=f.gd7()
b=c.z
b.a.uniform1f(b.d,n)
n=f.gd8()
b=c.Q
b.a.uniform1f(b.d,n)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.l)(b3),++g){o=b3[g].a
k=a3.h(0,o)
if(k==null)k=0
o=b2.a.c4.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.cx
if(b3.length>0){p=b4.db
a=p.ga0(p)
p=P.w
b1=new H.I([p,p])
for(p=b2.dx.x,o=p.length,g=0;g<p.length;p.length===o||(0,H.l)(p),++g){f=p[g]
e=f.gao()
d=b1.h(0,e)
if(d==null)d=0
b1.l(0,e,d+1)
c=J.bS(b2.a.c7.h(0,e),d)
n=f.ghW(f)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gij(f).iD()
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=a.b9(f.ghW(f))
b=c.d
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gax(f)
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
f.gaF()
n=f.gcq()
b=c.f
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gco(f)
b=c.r
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.giE()
b=c.x
b.a.uniform1f(b.d,n)
n=f.giF()
b=c.y
b.a.uniform1f(b.d,n)
f.gaF()
n=f.gaF()
if(!C.b.F(l,n)){n.saA(0,l.length)
l.push(n)}n=f.gaF()
b=n.gaB(n)
if(b){b=c.dx
b.toString
a1=n.gaB(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.gaA(n)
b.a.uniform1i(b.d,n)}}f.gaU()
n=f.ge4()
b=c.z
b.toString
a1=n.gho(n)
a2=n.ghp(n)
a5=n.ghq()
n=n.ghn()
b.a.uniform4f(b.d,a1,a2,a5,n)
n=f.gaU()
if(!C.b.F(l,n)){n.saA(0,l.length)
l.push(n)}n=f.gaU()
b=n.gaB(n)
if(b){b=c.dy
b.toString
a1=n.gaB(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.gaA(n)
b.a.uniform1i(b.d,n)}}if(f.gik()){n=f.gii()
b=c.Q
b.a.uniform1f(b.d,n)
n=f.gih()
b=c.ch
b.a.uniform1f(b.d,n)}if(f.gdf()){n=f.gd6()
b=c.cx
b.a.uniform1f(b.d,n)
n=f.gd7()
b=c.cy
b.a.uniform1f(b.d,n)
n=f.gd8()
b=c.db
b.a.uniform1f(b.d,n)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.l)(b3),++g){o=b3[g].a
k=b1.h(0,o)
if(k==null)k=0
o=b2.a.c6.h(0,o)
o.a.uniform1i(o.d,k)}}}if(s.dy){b3=b2.a
p=b4.Q
if(p==null){p=b4.db
p=b4.Q=p.ga0(p).dA(0)}b3=b3.id
b3.toString
b3.ag(p.a9(0,!0))}if(s.db){b2.eu(l,b2.ch)
b3=b2.a
p=b2.ch
b3.fR(b3.di,p)
if(s.r.a){b3=b2.a
p=b2.cx.f
b3=b3.dj
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}b3=s.x.a
if(!b3)p=!1
else p=!0
if(p){p=b2.a
o=b2.cy.ch
p=p.dk
p.a.uniform1f(p.d,o)}if(b3){b3=b2.a
p=b2.cy.f
b3=b3.dl
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}}b3=s.y.a
p=!b3
if(p)o=!1
else o=!0
if(o){if(b3){b3=b2.a
o=b2.db.f
b3=b3.dm
b3.a.uniform1f(b3.d,o)}q.enable(3042)
q.blendFunc(770,771)}for(j=0;j<l.length;++j)l[j].bg(b4)
b3=b5.e
b3.bg(b4)
b3.aS(b4)
b3.dX(b4)
if(p)b3=!1
else b3=!0
if(b3)q.disable(3042)
for(j=0;j<l.length;++j)l[j].dX(b4)
b3=b2.a
b3.toString
q.useProgram(null)
b3.x.hm()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cI().b2}}
O.h7.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.cO(a,C.c.a3(b+3,4)*4))}}
O.h8.prototype={
$2:function(a,b){return J.cL(a.a,b.a)}}
O.h9.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.cV(a,C.c.a3(b+3,4)*4))}}
O.ha.prototype={
$2:function(a,b){return J.cL(a.a,b.a)}}
O.hb.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.dj(a,C.c.a3(b+3,4)*4))}}
O.hc.prototype={
$2:function(a,b){return J.cL(a.a,b.a)}}
O.hd.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.dq(a,C.c.a3(b+3,4)*4))}}
O.he.prototype={
$2:function(a,b){return J.cL(a.a,b.a)}}
O.h1.prototype={
av:function(){var u,t=this
t.cw()
u=t.f
if(!(Math.abs(u-1)<$.A().a)){t.f=1
u=new D.C(t.b,u,1)
u.b=!0
t.a.aa(u)}}}
O.d9.prototype={
av:function(){},
cV:function(a){var u,t,s=this
if(!s.c.q(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.av()
u=s.a
u.a=null
u.aa(null)}}}
O.h2.prototype={}
O.av.prototype={
cU:function(a){var u,t,s=this
if(!s.f.q(0,a)){u=s.f
s.f=a
t=new D.C(s.b+".color",u,a)
t.b=!0
s.a.aa(t)}},
av:function(){this.cw()
this.cU(new V.V(1,1,1))},
sax:function(a,b){this.cV(new A.a_(!0,!1,!1))
this.cU(b)}}
O.h4.prototype={}
O.h5.prototype={
av:function(){var u,t=this
t.cz()
u=t.ch
if(!(Math.abs(u-1)<$.A().a)){t.ch=1
u=new D.C(t.b+".refraction",u,1)
u.b=!0
t.a.aa(u)}}}
O.h6.prototype={
cW:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.A().a)){u.ch=a
t=new D.C(u.b+".shininess",t,a)
t.b=!0
u.a.aa(t)}},
av:function(){this.cz()
this.cW(100)}}
O.dv.prototype={}
T.id.prototype={}
X.kr.prototype={}
X.fw.prototype={
gB:function(){var u=this.x
return u==null?this.x=D.K():u}}
X.di.prototype={
gB:function(){var u=this.f
return u==null?this.f=D.K():u},
aK:function(a){var u=this.f
if(u!=null)u.G(a)},
eq:function(){return this.aK(null)},
sb5:function(a){var u,t,s=this
if(!J.F(s.b,a)){u=s.b
if(u!=null)u.gB().O(0,s.gcD())
t=s.b
s.b=a
if(a!=null)a.gB().n(0,s.gcD())
u=new D.C("mover",t,s.b)
u.b=!0
s.aK(u)}}}
X.i9.prototype={}
V.cS.prototype={
bc:function(a){this.b=new P.fB(C.U)
this.c=null
this.d=H.b([],[[P.o,W.al]])},
N:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)l.push(H.b([],[W.al]))
u=a.split("\n")
for(l=u.length,t=[W.al],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else m.d.push(H.b([],t))
p=document.createElement("div")
p.className="codePart"
o=m.b.eC(q,0,q.length)
n=o==null?q:o
C.S.e3(p,H.l0(n," ","&nbsp;"))
n=p.style
n.color=b
C.b.gap(m.d).push(p)}},
dK:function(a,b){var u,t,s,r=this
r.d=H.b([],[[P.o,W.al]])
u=C.b.j(b,"\n")
t=r.c
if(t==null)t=r.c=r.bh()
for(t.toString,s=new H.m(u),s=new P.bH(t.cp(new H.b7(s,s.gm(s))).a());s.u();)r.bo(s.gC(s))}}
V.kg.prototype={
$1:function(a){var u=C.d.dW(this.a.ghA(),2)
if(u!=="0.00")P.l_(u+" fps")}}
V.fb.prototype={
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
bh:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=L.ii()
a1.d=a1.k(0,r)
u=a1.k(0,r).j(0,q)
t=K.u(new H.m("_"))
u.a.push(t)
t=K.O("a","z")
u.a.push(t)
t=K.O("A","Z")
u.a.push(t)
t=a1.k(0,q).j(0,q)
u=K.u(new H.m("_"))
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
t=K.u(new H.m("."))
u.a.push(t)
t=a1.k(0,o).j(0,n)
u=K.O("0","9")
t.a.push(u)
u=a1.k(0,n).j(0,n)
t=K.O("0","9")
u.a.push(t)
t=a1.k(0,r).j(0,m)
u=K.u(new H.m(l))
t.a.push(u)
u=a1.k(0,m).j(0,m)
t=K.u(new H.m(l))
u.a.push(t)
t=a1.k(0,r).j(0,k)
u=K.u(new H.m('"'))
t.a.push(u)
u=a1.k(0,k).j(0,j)
t=K.u(new H.m('"'))
u.a.push(t)
t=a1.k(0,k).j(0,i)
u=K.u(new H.m("\\"))
t.a.push(u)
u=a1.k(0,i).j(0,k)
t=K.u(new H.m('"'))
u.a.push(t)
a1.k(0,k).j(0,k).a.push(new K.aL())
t=a1.k(0,r).j(0,h)
u=K.u(new H.m("'"))
t.a.push(u)
u=a1.k(0,h).j(0,g)
t=K.u(new H.m("'"))
u.a.push(t)
t=a1.k(0,h).j(0,f)
u=K.u(new H.m("\\"))
t.a.push(u)
u=a1.k(0,f).j(0,h)
t=K.u(new H.m("'"))
u.a.push(t)
a1.k(0,h).j(0,h).a.push(new K.aL())
t=a1.k(0,r).j(0,e)
u=K.u(new H.m("/"))
t.a.push(u)
u=a1.k(0,e).j(0,d)
t=K.u(new H.m("/"))
u.a.push(t)
t=a1.k(0,d).j(0,c)
u=K.u(new H.m("\n"))
t.a.push(u)
u=a1.k(0,d).j(0,d)
t=new K.a5()
s=[K.b8]
t.a=H.b([],s)
u.a.push(t)
u=K.u(new H.m("\n"))
t.a.push(u)
u=a1.k(0,e).j(0,b)
t=K.u(new H.m("*"))
u.a.push(t)
t=a1.k(0,b).j(0,a)
u=K.u(new H.m("*"))
t.a.push(u)
u=a1.k(0,a).j(0,b)
t=new K.a5()
t.a=H.b([],s)
u.a.push(t)
u=K.u(new H.m("*"))
t.a.push(u)
u=a1.k(0,a).j(0,c)
t=K.u(new H.m("/"))
u.a.push(t)
t=a1.k(0,r).j(0,a0)
u=K.u(new H.m(" \n\t"))
t.a.push(u)
u=a1.k(0,a0).j(0,a0)
t=K.u(new H.m(" \n\t"))
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
t.aE(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aE(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aE(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.fy.prototype={
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
bh:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=L.ii()
e.d=e.k(0,r)
u=e.k(0,r).j(0,q)
t=K.u(new H.m("_"))
u.a.push(t)
t=K.O("a","z")
u.a.push(t)
t=K.O("A","Z")
u.a.push(t)
t=e.k(0,q).j(0,q)
u=K.u(new H.m("_"))
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
t=K.u(new H.m("."))
u.a.push(t)
t=e.k(0,o).j(0,n)
u=K.O("0","9")
t.a.push(u)
u=e.k(0,n).j(0,n)
t=K.O("0","9")
u.a.push(t)
t=e.k(0,r).j(0,m)
u=K.u(new H.m(l))
t.a.push(u)
u=e.k(0,m).j(0,m)
t=K.u(new H.m(l))
u.a.push(t)
t=e.k(0,r).j(0,k)
u=K.u(new H.m("/"))
t.a.push(u)
u=e.k(0,k).j(0,j)
t=K.u(new H.m("/"))
u.a.push(t)
e.k(0,k).j(0,m).a.push(new K.aL())
t=e.k(0,j).j(0,i)
u=K.u(new H.m("\n"))
t.a.push(u)
u=e.k(0,j).j(0,j)
t=new K.a5()
s=[K.b8]
t.a=H.b([],s)
u.a.push(t)
u=K.u(new H.m("\n"))
t.a.push(u)
u=e.k(0,r).j(0,h)
t=K.u(new H.m("#"))
u.a.push(t)
t=e.k(0,h).j(0,h)
u=new K.a5()
u.a=H.b([],s)
t.a.push(u)
t=K.u(new H.m("\n"))
u.a.push(t)
t=e.k(0,h).j(0,g)
u=K.u(new H.m("\n"))
t.a.push(u)
u=e.k(0,r).j(0,f)
t=K.u(new H.m(" \n\t"))
u.a.push(t)
t=e.k(0,f).j(0,f)
u=K.u(new H.m(" \n\t"))
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
u.aE(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aE(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aE(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return e}}
V.fz.prototype={
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
bh:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=L.ii()
l.d=l.k(0,s)
u=l.k(0,s).j(0,r)
t=K.u(new H.m("_"))
u.a.push(t)
t=K.O("a","z")
u.a.push(t)
t=K.O("A","Z")
u.a.push(t)
t=l.k(0,r).j(0,r)
u=K.u(new H.m("_"))
t.a.push(u)
u=K.O("0","9")
t.a.push(u)
u=K.O("a","z")
t.a.push(u)
u=K.O("A","Z")
t.a.push(u)
u=l.k(0,r).j(0,q)
t=K.u(new H.m("="))
u.a.push(t)
u.c=!0
u=l.k(0,s).j(0,p)
t=K.u(new H.m("</\\-!>="))
u.a.push(t)
t=l.k(0,p).j(0,p)
u=K.u(new H.m("</\\-!>="))
t.a.push(u)
u=l.k(0,s).j(0,o)
t=K.u(new H.m('"'))
u.a.push(t)
t=l.k(0,o).j(0,n)
u=K.u(new H.m('"'))
t.a.push(u)
u=l.k(0,o).j(0,"EscStr")
t=K.u(new H.m("\\"))
u.a.push(t)
t=l.k(0,"EscStr").j(0,o)
u=K.u(new H.m('"'))
t.a.push(u)
l.k(0,o).j(0,o).a.push(new K.aL())
l.k(0,s).j(0,m).a.push(new K.aL())
u=l.k(0,m).j(0,m)
t=new K.a5()
t.a=H.b([],[K.b8])
u.a.push(t)
u=K.u(new H.m('</\\-!>=_"'))
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
t.aE(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
t=l.k(0,q)
t.d=t.a.S(q)
t=l.k(0,m)
t.d=t.a.S(m)
return l}}
V.hz.prototype={
dK:function(a,b){this.d=H.b([],[[P.o,W.al]])
this.N(C.b.j(b,"\n"),"#111")},
bo:function(a){},
bh:function(){return}}
V.hE.prototype={
d2:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
if(m.c==null)return
u=m.a
t=P.lF().gck().h(0,H.e(u))
if(t==null)if(d){c.$0()
m.d0(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.l6(m.c).n(0,q)
o=W.mY("radio")
o.checked=s
o.name=u
W.Z(o,"change",new V.hF(m,o,c,b),!1)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.l6(m.c).n(0,r.createElement("br"))},
aZ:function(a,b,c){return this.d2(a,b,c,!1)},
d0:function(a){var u,t,s=P.lF(),r=P.h,q=P.n6(s.gck(),r,r)
q.l(0,this.a,a)
u=s.dQ(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.jt([],[]).br(""),"",t)}}
V.hF.prototype={
$1:function(a){var u=this
if(u.b.checked){u.c.$0()
u.a.d0(u.d)}}}
V.hU.prototype={
eh:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.Z(q,"scroll",new V.hW(o),!1)},
d4:function(a){var u,t,s,r,q,p,o,n
this.fU()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b,r=C.b.hE(a),s.toString,r=new H.m(r),r=new P.bH(s.cp(new H.b7(r,r.gm(r))).a());r.u();){s=r.gC(r)
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
if(H.mg(s,"|",0)){p=s.split("|")
o=u.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.d(p,1)
o.href=p[1]
o.textContent=p[0]
t.appendChild(o)}else{n=P.ev(C.z,s,C.e,!1)
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
e0:function(a){var u,t,s,r=new V.fb("dart")
r.bc("dart")
u=new V.fy("glsl")
u.bc("glsl")
t=new V.fz("html")
t.bc("html")
s=C.b.hw(H.b([r,u,t],[V.cS]),new V.hX(a))
if(s!=null)return s
r=new V.hz("plain")
r.bc("plain")
return r},
d3:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.b([],[P.w])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(J.cG(s).a2(s,"+")){b0[t]=C.a.a5(s,1)
a6.push(1)
u=!0}else if(C.a.a2(s,"-")){b0[t]=C.a.a5(s,1)
a6.push(-1)
u=!0}else a6.push(0)}r=this.e0(a8)
r.dK(0,b0)
q=document
p=q.createElement("div")
p.className="codeTableScroll"
o=q.createElement("table")
o.className="codeTable"
p.appendChild(o)
this.a.appendChild(p)
n=P.ev(C.z,a7,C.e,!1)
m=q.createElement("tr")
m.className="headerRow"
l=q.createElement("td")
l.className="headerCell"
l.colSpan=u?3:2
k=q.createElement("div")
k.className="tableHeader"
k.id=n
j=W.l8()
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
for(a2=C.b.gT(s);a2.u();)d.appendChild(a2.gC(a2))
f.appendChild(e)
f.appendChild(d)
o.appendChild(f)}},
h2:function(a){var u,t,s,r,q,p="auto",o=document,n=o.createElement("table")
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
fU:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=L.ii()
u.d=u.k(0,q)
t=u.k(0,q).j(0,p)
s=K.u(new H.m("*"))
t.a.push(s)
t.c=!0
t=u.k(0,p).j(0,p)
s=new K.a5()
r=[K.b8]
s.a=H.b([],r)
t.a.push(s)
t=K.u(new H.m("*"))
s.a.push(t)
t=u.k(0,p).j(0,"BoldEnd")
s=K.u(new H.m("*"))
t.a.push(s)
t.c=!0
t=u.k(0,q).j(0,o)
s=K.u(new H.m("_"))
t.a.push(s)
t.c=!0
t=u.k(0,o).j(0,o)
s=new K.a5()
s.a=H.b([],r)
t.a.push(s)
t=K.u(new H.m("_"))
s.a.push(t)
t=u.k(0,o).j(0,n)
s=K.u(new H.m("_"))
t.a.push(s)
t.c=!0
t=u.k(0,q).j(0,m)
s=K.u(new H.m("`"))
t.a.push(s)
t.c=!0
t=u.k(0,m).j(0,m)
s=new K.a5()
s.a=H.b([],r)
t.a.push(s)
t=K.u(new H.m("`"))
s.a.push(t)
t=u.k(0,m).j(0,"CodeEnd")
s=K.u(new H.m("`"))
t.a.push(s)
t.c=!0
t=u.k(0,q).j(0,l)
s=K.u(new H.m("["))
t.a.push(s)
t.c=!0
t=u.k(0,l).j(0,k)
s=K.u(new H.m("|"))
t.a.push(s)
s=u.k(0,l).j(0,j)
t=K.u(new H.m("]"))
s.a.push(t)
s.c=!0
s=u.k(0,l).j(0,l)
t=new K.a5()
t.a=H.b([],r)
s.a.push(t)
s=K.u(new H.m("|]"))
t.a.push(s)
s=u.k(0,k).j(0,j)
t=K.u(new H.m("]"))
s.a.push(t)
s.c=!0
s=u.k(0,k).j(0,k)
t=new K.a5()
t.a=H.b([],r)
s.a.push(t)
s=K.u(new H.m("|]"))
t.a.push(s)
u.k(0,q).j(0,i).a.push(new K.aL())
s=u.k(0,i).j(0,i)
t=new K.a5()
t.a=H.b([],r)
s.a.push(t)
s=K.u(new H.m("*_`["))
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
V.hW.prototype={
$1:function(a){P.lB(C.n,new V.hV(this.a))}}
V.hV.prototype={
$0:function(){var u=C.d.ai(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
V.hX.prototype={
$1:function(a){return a.a===this.a}}
U.k8.prototype={
$0:function(){this.a.sah(0,F.kV(1,null,null,1))}}
U.k9.prototype={
$0:function(){this.a.sah(0,F.m5(!0,40,1))}}
U.ka.prototype={
$0:function(){this.a.sah(0,F.m5(!1,40,0))}}
U.kb.prototype={
$0:function(){this.a.sah(0,F.p5(6,6))}}
U.kc.prototype={
$0:function(){this.a.sah(0,F.mi())}}
U.kd.prototype={
$0:function(){this.a.sah(0,F.oZ())}}
U.ke.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.a,r=[P.h]
u.d3("Vertex Shader","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
t=t.a
u.d3("Fragment Shader","glsl",0,H.b((t==null?null:t.d).split("\n"),r))}};(function aliases(){var u=J.a.prototype
u.e8=u.i
u=J.d3.prototype
u.ea=u.i
u=P.j.prototype
u.e9=u.bs
u=W.P.prototype
u.bu=u.ac
u=W.ee.prototype
u.eb=u.am
u=K.d0.prototype
u.e7=u.aC
u.cv=u.i
u=O.d9.prototype
u.cw=u.av
u=O.av.prototype
u.cz=u.av})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installStaticTearOff,q=hunkHelpers.installInstanceTearOff,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u,n=hunkHelpers._instance_1u,m=hunkHelpers._instance_0i
u(J,"oc","n1",20)
t(P,"oH","nL",7)
t(P,"oI","nM",7)
t(P,"oJ","nN",7)
s(P,"m4","oF",9)
r(W,"oT",4,null,["$4"],["nO"],15,0)
r(W,"oU",4,null,["$4"],["nP"],15,0)
var l
q(l=E.aO.prototype,"gdI",0,0,null,["$1","$0"],["dJ","hO"],0,0)
q(l,"gdG",0,0,null,["$1","$0"],["dH","hN"],0,0)
q(l,"gdE",0,0,null,["$1","$0"],["dF","hK"],0,0)
p(l,"ghI","hJ",4)
p(l,"ghL","hM",4)
q(l=E.dw.prototype,"gcA",0,0,null,["$1","$0"],["cC","cB"],0,0)
o(l,"gi2","dR",9)
n(l=X.dF.prototype,"gfa","fb",5)
n(l,"geX","eY",5)
n(l,"gf4","f5",2)
n(l,"gfe","ff",10)
n(l,"gfc","fd",10)
n(l,"gfi","fj",2)
n(l,"gfm","fn",2)
n(l,"gf8","f9",2)
n(l,"gfk","fl",2)
n(l,"gf6","f7",2)
n(l,"gfo","fp",18)
n(l,"gfq","fs",5)
n(l,"gfG","fH",6)
n(l,"gfC","fD",6)
n(l,"gfE","fF",6)
q(D.bq.prototype,"gek",0,0,null,["$1","$0"],["as","el"],0,0)
q(l=D.d5.prototype,"gcQ",0,0,null,["$1","$0"],["cR","fg"],0,0)
n(l,"gfu","fv",19)
p(l,"geR","eS",11)
p(l,"gfA","fB",11)
m(V.J.prototype,"gm","cb",12)
m(V.z.prototype,"gm","cb",12)
q(l=U.c_.prototype,"gaJ",0,0,null,["$1","$0"],["J","a6"],0,0)
p(l,"geP","eQ",13)
p(l,"gfw","fz",13)
q(l=U.dG.prototype,"gaJ",0,0,null,["$1","$0"],["J","a6"],0,0)
n(l,"gbD","bE",1)
n(l,"gbF","bG",1)
n(l,"gbH","bI",1)
q(l=U.dH.prototype,"gaJ",0,0,null,["$1","$0"],["J","a6"],0,0)
n(l,"gbD","bE",1)
n(l,"gbF","bG",1)
n(l,"gbH","bI",1)
n(l,"geI","eJ",1)
n(l,"geK","eL",1)
n(l,"gh0","h1",1)
n(l,"gfZ","h_",1)
n(l,"gfX","fY",1)
n(U.dI.prototype,"geN","eO",1)
q(l=M.cY.prototype,"gak",0,0,null,["$1","$0"],["at","em"],0,0)
p(l,"gf0","f1",4)
p(l,"gf2","f3",4)
q(l=O.d8.prototype,"geZ",0,0,null,["$1","$0"],["aa","f_"],0,0)
q(l,"gfN",0,0,null,["$1","$0"],["cS","fO"],0,0)
p(l,"geT","eU",14)
p(l,"geV","eW",14)
q(X.di.prototype,"gcD",0,0,null,["$1","$0"],["aK","eq"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.a1,null)
s(P.a1,[H.kB,J.a,J.aa,P.e1,P.j,H.b7,P.fG,H.cZ,H.iB,H.f3,H.io,P.br,H.bV,H.ej,P.a0,H.fP,H.fR,H.fJ,P.ep,P.bG,P.bH,P.dL,P.dt,P.i5,P.dx,P.jL,P.jn,P.jh,P.e0,P.x,P.jD,P.fY,P.f0,P.fC,P.jJ,P.jI,P.aI,P.ab,P.a9,P.b2,P.hx,P.dr,P.dU,P.fv,P.fx,P.o,P.Q,P.ba,P.h,P.R,P.bI,P.iD,P.jq,W.f7,W.cs,W.M,W.dg,W.ee,W.jx,W.d_,W.aS,W.jm,W.ew,P.js,P.ji,P.bC,K.aL,K.d0,K.b8,K.hG,K.hP,L.ds,L.dy,L.dz,L.ih,O.b1,O.c6,E.eX,E.aO,E.bo,E.bx,E.dT,E.hH,E.dw,Z.dK,Z.j0,Z.cQ,Z.bt,Z.bg,D.f_,D.bs,D.Y,X.cR,X.d4,X.fM,X.fV,X.ah,X.hl,X.ij,X.dF,D.eU,D.bq,D.a4,D.hB,D.i0,V.V,V.as,V.fm,V.da,V.aQ,V.a6,V.U,V.bc,V.dl,V.J,V.z,U.dG,U.dH,U.dI,M.cY,A.cN,A.eP,A.a_,A.cO,A.cV,A.dj,A.dq,A.h3,A.ck,A.cl,A.cn,A.co,A.dC,A.iw,F.b3,F.fp,F.c3,F.fO,F.cc,F.hQ,F.hR,F.hS,F.hT,F.bf,F.iP,F.iQ,F.iT,F.iV,F.iW,F.iX,O.dv,O.d9,O.h4,X.kr,X.i9,X.di,V.cS,V.hE,V.hU])
s(J.a,[J.fH,J.d2,J.d3,J.b4,J.c2,J.b5,H.c9,H.b9,W.f,W.eL,W.bm,W.at,W.H,W.dN,W.ag,W.fc,W.fd,W.dP,W.cX,W.dR,W.ff,W.i,W.dV,W.au,W.fA,W.dX,W.c1,W.fU,W.hf,W.e2,W.e3,W.ax,W.e4,W.e7,W.az,W.eb,W.ed,W.aC,W.ef,W.aD,W.ek,W.an,W.en,W.ig,W.aF,W.eq,W.il,W.iI,W.ex,W.ez,W.eB,W.eD,W.eF,P.aP,P.dZ,P.aT,P.e9,P.hD,P.el,P.aV,P.es,P.eQ,P.dM,P.eh])
s(J.d3,[J.hy,J.bF,J.b6])
t(J.kA,J.b4)
s(J.c2,[J.d1,J.fI])
t(P.fT,P.e1)
s(P.fT,[H.dD,W.j7,W.a2,P.fr])
t(H.m,H.dD)
s(P.j,[H.q,H.c5,H.cq,P.fE])
s(H.q,[H.d6,H.fQ])
t(H.fi,H.c5)
s(P.fG,[H.fZ,H.j1])
t(H.h_,H.d6)
t(H.f4,H.f3)
s(P.br,[H.hu,H.fL,H.iA,H.eZ,H.hN,P.dh,P.ak,P.iC,P.iy,P.cg,P.f2,P.fa])
s(H.bV,[H.kl,H.ia,H.fK,H.k3,H.k4,H.k5,P.j3,P.j2,P.j4,P.j5,P.jC,P.jB,P.jU,P.jk,P.jl,P.fS,P.fX,P.fg,P.fh,P.iH,P.iE,P.iF,P.iG,P.jE,P.jF,P.jH,P.jG,P.jP,P.jO,P.jQ,P.jR,W.fj,W.hh,W.hj,W.hM,W.i4,W.jc,W.hs,W.hr,W.jo,W.jp,W.jA,W.jK,P.ju,P.jv,P.jV,P.fs,P.ft,P.eS,E.hI,E.hJ,E.hK,E.ie,D.fn,D.fo,F.jM,F.jW,F.jY,F.jZ,F.k_,F.kh,F.ki,F.kk,F.k7,F.jX,F.iZ,F.iY,F.iR,F.iS,O.h7,O.h8,O.h9,O.ha,O.hb,O.hc,O.hd,O.he,V.kg,V.hF,V.hW,V.hV,V.hX,U.k8,U.k9,U.ka,U.kb,U.kc,U.kd,U.ke])
s(H.ia,[H.i2,H.bT])
t(P.fW,P.a0)
s(P.fW,[H.I,W.j6])
t(H.dc,H.b9)
s(H.dc,[H.cu,H.cw])
t(H.cv,H.cu)
t(H.ca,H.cv)
t(H.cx,H.cw)
t(H.dd,H.cx)
s(H.dd,[H.hm,H.hn,H.ho,H.hp,H.hq,H.de,H.cb])
t(P.jy,P.fE)
t(P.jj,P.jL)
t(P.jg,P.jn)
t(P.eu,P.fY)
t(P.dE,P.eu)
s(P.f0,[P.eV,P.fk])
t(P.f5,P.i5)
s(P.f5,[P.eW,P.fB,P.iL,P.iK])
t(P.iJ,P.fk)
s(P.a9,[P.L,P.w])
s(P.ak,[P.bA,P.fD])
t(P.j9,P.bI)
s(W.f,[W.D,W.fq,W.c7,W.aB,W.cy,W.aE,W.ao,W.cA,W.j_,W.cr,P.eT,P.bl])
s(W.D,[W.P,W.b0])
s(W.P,[W.n,P.k])
s(W.n,[W.eM,W.eN,W.bn,W.bp,W.al,W.fu,W.hO,W.du,W.i7,W.i8,W.ci])
t(W.f6,W.at)
t(W.bW,W.dN)
s(W.ag,[W.f8,W.f9])
t(W.dQ,W.dP)
t(W.cW,W.dQ)
t(W.dS,W.dR)
t(W.fe,W.dS)
t(W.am,W.bm)
t(W.dW,W.dV)
t(W.bZ,W.dW)
t(W.dY,W.dX)
t(W.c0,W.dY)
t(W.bd,W.i)
s(W.bd,[W.bw,W.ay,W.bB])
t(W.hg,W.e2)
t(W.hi,W.e3)
t(W.e5,W.e4)
t(W.hk,W.e5)
t(W.e8,W.e7)
t(W.df,W.e8)
t(W.ec,W.eb)
t(W.hA,W.ec)
t(W.hL,W.ed)
t(W.cz,W.cy)
t(W.hZ,W.cz)
t(W.eg,W.ef)
t(W.i_,W.eg)
t(W.i3,W.ek)
t(W.eo,W.en)
t(W.ib,W.eo)
t(W.cB,W.cA)
t(W.ic,W.cB)
t(W.er,W.eq)
t(W.ik,W.er)
t(W.bh,W.ay)
t(W.ey,W.ex)
t(W.j8,W.ey)
t(W.dO,W.cX)
t(W.eA,W.ez)
t(W.jd,W.eA)
t(W.eC,W.eB)
t(W.e6,W.eC)
t(W.eE,W.eD)
t(W.jr,W.eE)
t(W.eG,W.eF)
t(W.jw,W.eG)
t(W.ja,W.j6)
t(W.jb,P.dt)
t(W.jz,W.ee)
t(P.jt,P.js)
t(P.a7,P.ji)
t(P.e_,P.dZ)
t(P.fN,P.e_)
t(P.ea,P.e9)
t(P.hv,P.ea)
t(P.cf,P.k)
t(P.em,P.el)
t(P.i6,P.em)
t(P.et,P.es)
t(P.im,P.et)
t(P.eR,P.dM)
t(P.hw,P.bl)
t(P.ei,P.eh)
t(P.i1,P.ei)
s(K.d0,[K.a5,L.dB])
s(E.eX,[Z.cP,A.dn,T.id])
s(D.Y,[D.bu,D.bv,D.C,X.hC])
s(X.hC,[X.d7,X.aR,X.c8,X.dA])
s(O.b1,[D.d5,U.c_])
s(D.f_,[U.f1,U.ac])
s(U.ac,[U.cT,U.dm])
t(A.h0,A.dn)
s(A.dC,[A.be,A.it,A.iu,A.iv,A.ir,A.W,A.is,A.G,A.cj,A.ix,A.cm,A.ad,A.bD,A.bE])
t(F.hY,F.fp)
t(F.iq,F.fO)
t(F.iU,F.iV)
t(F.ht,F.iW)
t(O.d8,O.dv)
s(O.d9,[O.h1,O.h2,O.av])
s(O.av,[O.h5,O.h6])
t(X.fw,X.i9)
s(V.cS,[V.fb,V.fy,V.fz,V.hz])
u(H.dD,H.iB)
u(H.cu,P.x)
u(H.cv,H.cZ)
u(H.cw,P.x)
u(H.cx,H.cZ)
u(P.e1,P.x)
u(P.eu,P.jD)
u(W.dN,W.f7)
u(W.dP,P.x)
u(W.dQ,W.M)
u(W.dR,P.x)
u(W.dS,W.M)
u(W.dV,P.x)
u(W.dW,W.M)
u(W.dX,P.x)
u(W.dY,W.M)
u(W.e2,P.a0)
u(W.e3,P.a0)
u(W.e4,P.x)
u(W.e5,W.M)
u(W.e7,P.x)
u(W.e8,W.M)
u(W.eb,P.x)
u(W.ec,W.M)
u(W.ed,P.a0)
u(W.cy,P.x)
u(W.cz,W.M)
u(W.ef,P.x)
u(W.eg,W.M)
u(W.ek,P.a0)
u(W.en,P.x)
u(W.eo,W.M)
u(W.cA,P.x)
u(W.cB,W.M)
u(W.eq,P.x)
u(W.er,W.M)
u(W.ex,P.x)
u(W.ey,W.M)
u(W.ez,P.x)
u(W.eA,W.M)
u(W.eB,P.x)
u(W.eC,W.M)
u(W.eD,P.x)
u(W.eE,W.M)
u(W.eF,P.x)
u(W.eG,W.M)
u(P.dZ,P.x)
u(P.e_,W.M)
u(P.e9,P.x)
u(P.ea,W.M)
u(P.el,P.x)
u(P.em,W.M)
u(P.es,P.x)
u(P.et,W.M)
u(P.dM,P.a0)
u(P.eh,P.x)
u(P.ei,W.M)})()
var v={mangledGlobalNames:{w:"int",L:"double",a9:"num",h:"String",aI:"bool",ba:"Null",o:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.Y]},{func:1,ret:-1,args:[D.Y]},{func:1,ret:-1,args:[W.ay]},{func:1,ret:P.ba,args:[,,]},{func:1,ret:-1,args:[P.w,[P.j,E.aO]]},{func:1,ret:-1,args:[W.i]},{func:1,ret:-1,args:[W.bB]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bw]},{func:1,ret:-1,args:[P.w,[P.j,D.a4]]},{func:1,ret:P.L},{func:1,ret:-1,args:[P.w,[P.j,U.ac]]},{func:1,ret:-1,args:[P.w,[P.j,V.aQ]]},{func:1,ret:P.aI,args:[W.P,P.h,P.h,W.cs]},{func:1,ret:P.ba,args:[,]},{func:1,ret:P.bC,args:[,,]},{func:1,ret:-1,args:[W.bh]},{func:1,ret:P.aI,args:[[P.j,D.a4]]},{func:1,ret:P.w,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.r=W.bn.prototype
C.m=W.bp.prototype
C.S=W.al.prototype
C.V=J.a.prototype
C.b=J.b4.prototype
C.c=J.d1.prototype
C.i=J.d2.prototype
C.d=J.c2.prototype
C.a=J.b5.prototype
C.W=J.b6.prototype
C.D=J.hy.prototype
C.E=W.du.prototype
C.q=J.bF.prototype
C.F=W.bh.prototype
C.G=W.cr.prototype
C.H=new E.bo("Browser.chrome")
C.t=new E.bo("Browser.firefox")
C.u=new E.bo("Browser.edge")
C.I=new E.bo("Browser.other")
C.a5=new P.eW()
C.J=new P.eV()
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

C.Q=new P.hx()
C.e=new P.iJ()
C.R=new P.iL()
C.f=new P.jj()
C.n=new P.b2(0)
C.T=new P.b2(5e6)
C.U=new P.fC("element",!1,!1,!1)
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
C.a0=new H.f4(0,{},C.y,[P.h,P.h])
C.a1=new E.bx("OperatingSystem.windows")
C.C=new E.bx("OperatingSystem.mac")
C.a2=new E.bx("OperatingSystem.linux")
C.a3=new E.bx("OperatingSystem.other")
C.a4=new P.bG(null,2)})();(function staticFields(){$.ar=0
$.bU=null
$.la=null
$.ma=null
$.m3=null
$.me=null
$.k0=null
$.k6=null
$.kY=null
$.bL=null
$.cE=null
$.cF=null
$.kS=!1
$.ap=C.f
$.a8=[]
$.aN=null
$.kw=null
$.lh=null
$.lg=null
$.ct=P.kD(P.h,P.fx)
$.fl=null
$.lp=null
$.ls=null
$.aA=null
$.lx=null
$.lI=null
$.lL=null
$.lK=null
$.iM=null
$.iN=null
$.iO=null
$.lJ=null
$.lr=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pb","mk",function(){return H.m9("_$dart_dartClosure")})
u($,"pc","l2",function(){return H.m9("_$dart_js")})
u($,"pd","ml",function(){return H.aG(H.ip({
toString:function(){return"$receiver$"}}))})
u($,"pe","mm",function(){return H.aG(H.ip({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"pf","mn",function(){return H.aG(H.ip(null))})
u($,"pg","mo",function(){return H.aG(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pj","mr",function(){return H.aG(H.ip(void 0))})
u($,"pk","ms",function(){return H.aG(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pi","mq",function(){return H.aG(H.lD(null))})
u($,"ph","mp",function(){return H.aG(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"pm","mu",function(){return H.aG(H.lD(void 0))})
u($,"pl","mt",function(){return H.aG(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"pA","l3",function(){return P.nK()})
u($,"pn","mv",function(){return P.nG()})
u($,"pB","mz",function(){return H.nd(H.bK(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.w])))})
u($,"pE","mB",function(){return P.ns("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"pF","mC",function(){return P.oa()})
u($,"pC","mA",function(){return P.lk(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)})
u($,"pu","my",function(){return Z.ai(0)})
u($,"po","mw",function(){return Z.ai(511)})
u($,"pw","b_",function(){return Z.ai(1)})
u($,"pv","aZ",function(){return Z.ai(2)})
u($,"pq","aY",function(){return Z.ai(4)})
u($,"px","bj",function(){return Z.ai(8)})
u($,"py","bk",function(){return Z.ai(16)})
u($,"pr","cJ",function(){return Z.ai(32)})
u($,"ps","cK",function(){return Z.ai(64)})
u($,"pt","mx",function(){return Z.ai(96)})
u($,"pz","bR",function(){return Z.ai(128)})
u($,"pp","aX",function(){return Z.ai(256)})
u($,"pa","mj",function(){return new V.fm(1e-9)})
u($,"p9","A",function(){return $.mj()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGL2RenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.c9,DataView:H.b9,ArrayBufferView:H.b9,Float32Array:H.ca,Float64Array:H.ca,Int16Array:H.hm,Int32Array:H.hn,Int8Array:H.ho,Uint16Array:H.hp,Uint32Array:H.hq,Uint8ClampedArray:H.de,CanvasPixelArray:H.de,Uint8Array:H.cb,HTMLAudioElement:W.n,HTMLBRElement:W.n,HTMLBaseElement:W.n,HTMLButtonElement:W.n,HTMLContentElement:W.n,HTMLDListElement:W.n,HTMLDataElement:W.n,HTMLDataListElement:W.n,HTMLDetailsElement:W.n,HTMLDialogElement:W.n,HTMLEmbedElement:W.n,HTMLFieldSetElement:W.n,HTMLHRElement:W.n,HTMLHeadElement:W.n,HTMLHeadingElement:W.n,HTMLHtmlElement:W.n,HTMLIFrameElement:W.n,HTMLImageElement:W.n,HTMLInputElement:W.n,HTMLLIElement:W.n,HTMLLabelElement:W.n,HTMLLegendElement:W.n,HTMLLinkElement:W.n,HTMLMapElement:W.n,HTMLMediaElement:W.n,HTMLMenuElement:W.n,HTMLMetaElement:W.n,HTMLMeterElement:W.n,HTMLModElement:W.n,HTMLOListElement:W.n,HTMLObjectElement:W.n,HTMLOptGroupElement:W.n,HTMLOptionElement:W.n,HTMLOutputElement:W.n,HTMLParagraphElement:W.n,HTMLParamElement:W.n,HTMLPictureElement:W.n,HTMLPreElement:W.n,HTMLProgressElement:W.n,HTMLQuoteElement:W.n,HTMLScriptElement:W.n,HTMLShadowElement:W.n,HTMLSlotElement:W.n,HTMLSourceElement:W.n,HTMLSpanElement:W.n,HTMLStyleElement:W.n,HTMLTableCaptionElement:W.n,HTMLTableCellElement:W.n,HTMLTableDataCellElement:W.n,HTMLTableHeaderCellElement:W.n,HTMLTableColElement:W.n,HTMLTextAreaElement:W.n,HTMLTimeElement:W.n,HTMLTitleElement:W.n,HTMLTrackElement:W.n,HTMLUListElement:W.n,HTMLUnknownElement:W.n,HTMLVideoElement:W.n,HTMLDirectoryElement:W.n,HTMLFontElement:W.n,HTMLFrameElement:W.n,HTMLFrameSetElement:W.n,HTMLMarqueeElement:W.n,HTMLElement:W.n,AccessibleNodeList:W.eL,HTMLAnchorElement:W.eM,HTMLAreaElement:W.eN,Blob:W.bm,HTMLBodyElement:W.bn,HTMLCanvasElement:W.bp,CDATASection:W.b0,CharacterData:W.b0,Comment:W.b0,ProcessingInstruction:W.b0,Text:W.b0,CSSPerspective:W.f6,CSSCharsetRule:W.H,CSSConditionRule:W.H,CSSFontFaceRule:W.H,CSSGroupingRule:W.H,CSSImportRule:W.H,CSSKeyframeRule:W.H,MozCSSKeyframeRule:W.H,WebKitCSSKeyframeRule:W.H,CSSKeyframesRule:W.H,MozCSSKeyframesRule:W.H,WebKitCSSKeyframesRule:W.H,CSSMediaRule:W.H,CSSNamespaceRule:W.H,CSSPageRule:W.H,CSSRule:W.H,CSSStyleRule:W.H,CSSSupportsRule:W.H,CSSViewportRule:W.H,CSSStyleDeclaration:W.bW,MSStyleCSSProperties:W.bW,CSS2Properties:W.bW,CSSImageValue:W.ag,CSSKeywordValue:W.ag,CSSNumericValue:W.ag,CSSPositionValue:W.ag,CSSResourceValue:W.ag,CSSUnitValue:W.ag,CSSURLImageValue:W.ag,CSSStyleValue:W.ag,CSSMatrixComponent:W.at,CSSRotation:W.at,CSSScale:W.at,CSSSkew:W.at,CSSTranslation:W.at,CSSTransformComponent:W.at,CSSTransformValue:W.f8,CSSUnparsedValue:W.f9,DataTransferItemList:W.fc,HTMLDivElement:W.al,DOMException:W.fd,ClientRectList:W.cW,DOMRectList:W.cW,DOMRectReadOnly:W.cX,DOMStringList:W.fe,DOMTokenList:W.ff,Element:W.P,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.am,FileList:W.bZ,FileWriter:W.fq,HTMLFormElement:W.fu,Gamepad:W.au,History:W.fA,HTMLCollection:W.c0,HTMLFormControlsCollection:W.c0,HTMLOptionsCollection:W.c0,ImageData:W.c1,KeyboardEvent:W.bw,Location:W.fU,MediaList:W.hf,MessagePort:W.c7,MIDIInputMap:W.hg,MIDIOutputMap:W.hi,MimeType:W.ax,MimeTypeArray:W.hk,PointerEvent:W.ay,MouseEvent:W.ay,DragEvent:W.ay,Document:W.D,DocumentFragment:W.D,HTMLDocument:W.D,ShadowRoot:W.D,XMLDocument:W.D,Attr:W.D,DocumentType:W.D,Node:W.D,NodeList:W.df,RadioNodeList:W.df,Plugin:W.az,PluginArray:W.hA,RTCStatsReport:W.hL,HTMLSelectElement:W.hO,SourceBuffer:W.aB,SourceBufferList:W.hZ,SpeechGrammar:W.aC,SpeechGrammarList:W.i_,SpeechRecognitionResult:W.aD,Storage:W.i3,CSSStyleSheet:W.an,StyleSheet:W.an,HTMLTableElement:W.du,HTMLTableRowElement:W.i7,HTMLTableSectionElement:W.i8,HTMLTemplateElement:W.ci,TextTrack:W.aE,TextTrackCue:W.ao,VTTCue:W.ao,TextTrackCueList:W.ib,TextTrackList:W.ic,TimeRanges:W.ig,Touch:W.aF,TouchEvent:W.bB,TouchList:W.ik,TrackDefaultList:W.il,CompositionEvent:W.bd,FocusEvent:W.bd,TextEvent:W.bd,UIEvent:W.bd,URL:W.iI,VideoTrackList:W.j_,WheelEvent:W.bh,Window:W.cr,DOMWindow:W.cr,CSSRuleList:W.j8,ClientRect:W.dO,DOMRect:W.dO,GamepadList:W.jd,NamedNodeMap:W.e6,MozNamedAttrMap:W.e6,SpeechRecognitionResultList:W.jr,StyleSheetList:W.jw,SVGLength:P.aP,SVGLengthList:P.fN,SVGNumber:P.aT,SVGNumberList:P.hv,SVGPointList:P.hD,SVGScriptElement:P.cf,SVGStringList:P.i6,SVGAElement:P.k,SVGAnimateElement:P.k,SVGAnimateMotionElement:P.k,SVGAnimateTransformElement:P.k,SVGAnimationElement:P.k,SVGCircleElement:P.k,SVGClipPathElement:P.k,SVGDefsElement:P.k,SVGDescElement:P.k,SVGDiscardElement:P.k,SVGEllipseElement:P.k,SVGFEBlendElement:P.k,SVGFEColorMatrixElement:P.k,SVGFEComponentTransferElement:P.k,SVGFECompositeElement:P.k,SVGFEConvolveMatrixElement:P.k,SVGFEDiffuseLightingElement:P.k,SVGFEDisplacementMapElement:P.k,SVGFEDistantLightElement:P.k,SVGFEFloodElement:P.k,SVGFEFuncAElement:P.k,SVGFEFuncBElement:P.k,SVGFEFuncGElement:P.k,SVGFEFuncRElement:P.k,SVGFEGaussianBlurElement:P.k,SVGFEImageElement:P.k,SVGFEMergeElement:P.k,SVGFEMergeNodeElement:P.k,SVGFEMorphologyElement:P.k,SVGFEOffsetElement:P.k,SVGFEPointLightElement:P.k,SVGFESpecularLightingElement:P.k,SVGFESpotLightElement:P.k,SVGFETileElement:P.k,SVGFETurbulenceElement:P.k,SVGFilterElement:P.k,SVGForeignObjectElement:P.k,SVGGElement:P.k,SVGGeometryElement:P.k,SVGGraphicsElement:P.k,SVGImageElement:P.k,SVGLineElement:P.k,SVGLinearGradientElement:P.k,SVGMarkerElement:P.k,SVGMaskElement:P.k,SVGMetadataElement:P.k,SVGPathElement:P.k,SVGPatternElement:P.k,SVGPolygonElement:P.k,SVGPolylineElement:P.k,SVGRadialGradientElement:P.k,SVGRectElement:P.k,SVGSetElement:P.k,SVGStopElement:P.k,SVGStyleElement:P.k,SVGSVGElement:P.k,SVGSwitchElement:P.k,SVGSymbolElement:P.k,SVGTSpanElement:P.k,SVGTextContentElement:P.k,SVGTextElement:P.k,SVGTextPathElement:P.k,SVGTextPositioningElement:P.k,SVGTitleElement:P.k,SVGUseElement:P.k,SVGViewElement:P.k,SVGGradientElement:P.k,SVGComponentTransferFunctionElement:P.k,SVGFEDropShadowElement:P.k,SVGMPathElement:P.k,SVGElement:P.k,SVGTransform:P.aV,SVGTransformList:P.im,AudioBuffer:P.eQ,AudioParamMap:P.eR,AudioTrackList:P.eT,AudioContext:P.bl,webkitAudioContext:P.bl,BaseAudioContext:P.bl,OfflineAudioContext:P.hw,SQLResultSetRowList:P.i1})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,SQLResultSetRowList:true})
H.dc.$nativeSuperclassTag="ArrayBufferView"
H.cu.$nativeSuperclassTag="ArrayBufferView"
H.cv.$nativeSuperclassTag="ArrayBufferView"
H.ca.$nativeSuperclassTag="ArrayBufferView"
H.cw.$nativeSuperclassTag="ArrayBufferView"
H.cx.$nativeSuperclassTag="ArrayBufferView"
H.dd.$nativeSuperclassTag="ArrayBufferView"
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
if(typeof dartMainRunner==="function")dartMainRunner(U.mc,[])
else U.mc([])})})()
//# sourceMappingURL=test.dart.js.map
