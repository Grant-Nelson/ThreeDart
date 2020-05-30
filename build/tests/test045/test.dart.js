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
a[c]=function(){a[c]=function(){H.pj(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.l5"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.l5"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.l5(this,a,b,c,true,false,e).prototype
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
kc:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
nj:function(a,b,c,d){if(!!J.O(a).$iq)return new H.fr(a,b,[c,d])
return new H.c9(a,b,[c,d])},
fO:function(){return new P.cj("No element")},
n8:function(){return new P.cj("Too many elements")},
nG:function(a,b){var u=J.af(a)
if(typeof u!=="number")return u.M()
H.dv(a,0,u-1,b)},
dv:function(a,b,c,d){if(c-b<=32)H.nF(a,b,c,d)
else H.nE(a,b,c,d)},
nF:function(a,b,c,d){var u,t,s,r,q,p
for(u=b+1,t=J.bm(a);u<=c;++u){s=t.h(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.h(a,r-1),s)
if(typeof q!=="number")return q.a2()
q=q>0}else q=!1
if(!q)break
p=r-1
t.m(a,r,t.h(a,p))
r=p}t.m(a,r,s)}},
nE:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j=C.c.a7(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.a7(a4+a5,2),f=g-j,e=g+j,d=J.bm(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
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
if(J.D(a6.$2(b,a0),0)){for(r=t;r<=s;++r){q=d.h(a3,r)
p=a6.$2(q,b)
if(p===0)continue
if(typeof p!=="number")return p.S()
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
if(typeof l!=="number")return l.S()
if(l<0){if(r!==t){d.m(a3,r,d.h(a3,t))
d.m(a3,t,q)}++t}else{k=a6.$2(q,a0)
if(typeof k!=="number")return k.a2()
if(k>0)for(;!0;){p=a6.$2(d.h(a3,s),a0)
if(typeof p!=="number")return p.a2()
if(p>0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.S()
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
if(t<i&&s>h){for(;J.D(a6.$2(d.h(a3,t),b),0);)++t
for(;J.D(a6.$2(d.h(a3,s),a0),0);)--s
for(r=t;r<=s;++r){q=d.h(a3,r)
if(a6.$2(q,b)===0){if(r!==t){d.m(a3,r,d.h(a3,t))
d.m(a3,t,q)}++t}else if(a6.$2(q,a0)===0)for(;!0;)if(a6.$2(d.h(a3,s),a0)===0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.S()
o=s-1
if(p<0){d.m(a3,r,d.h(a3,t))
n=t+1
d.m(a3,t,d.h(a3,s))
d.m(a3,s,q)
t=n}else{d.m(a3,r,d.h(a3,s))
d.m(a3,s,q)}s=o
break}}H.dv(a3,t,s,a6)}else H.dv(a3,t,s,a6)},
m:function m(a){this.a=a},
q:function q(){},
dd:function dd(){},
b9:function b9(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c9:function c9(a,b,c){this.a=a
this.b=b
this.$ti=c},
fr:function fr(a,b,c){this.a=a
this.b=b
this.$ti=c},
h6:function h6(a,b){this.a=null
this.b=a
this.c=b},
h7:function h7(a,b,c){this.a=a
this.b=b
this.$ti=c},
cu:function cu(a,b,c){this.a=a
this.b=b
this.$ti=c},
ja:function ja(a,b){this.a=a
this.b=b},
d4:function d4(){},
iL:function iL(){},
dK:function dK(){},
n0:function(){throw H.c(P.z("Cannot modify unmodifiable Map"))},
cN:function(a){var u,t=H.pk(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
p2:function(a){return v.types[a]},
ml:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.O(a).$iC},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a5(a)
if(typeof u!=="string")throw H.c(H.ad(a))
return u},
cg:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
nw:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.d(p,3)
u=p[3]
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.Z(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.a.E(s,q)|32)>t)return}return parseInt(a,b)},
ch:function(a){return H.nn(a)+H.m9(H.cL(a),0,null)},
nn:function(a){var u,t,s,r,q,p,o,n=J.O(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.R||!!n.$ibH){r=C.t(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cN(t.length>1&&C.a.E(t,0)===36?C.a.ab(t,1):t)},
no:function(){if(!!self.location)return self.location.href
return},
lE:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
nx:function(a){var u,t,s,r=H.b([],[P.u])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.l)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ad(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.aN(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.c(H.ad(s))}return H.lE(r)},
lF:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ad(s))
if(s<0)throw H.c(H.ad(s))
if(s>65535)return H.nx(a)}return H.lE(a)},
ny:function(a,b,c){var u,t,s,r
if(typeof c!=="number")return c.io()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
if(s<c)r=s
else r=c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
bA:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.aN(u,10))>>>0,56320|u&1023)}}throw H.c(P.Z(a,0,1114111,null,null))},
bz:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nv:function(a){var u=H.bz(a).getFullYear()+0
return u},
nt:function(a){var u=H.bz(a).getMonth()+1
return u},
np:function(a){var u=H.bz(a).getDate()+0
return u},
nq:function(a){var u=H.bz(a).getHours()+0
return u},
ns:function(a){var u=H.bz(a).getMinutes()+0
return u},
nu:function(a){var u=H.bz(a).getSeconds()+0
return u},
nr:function(a){var u=H.bz(a).getMilliseconds()+0
return u},
w:function(a){throw H.c(H.ad(a))},
d:function(a,b){if(a==null)J.af(a)
throw H.c(H.bQ(a,b))},
bQ:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.al(!0,b,s,null)
u=J.af(a)
if(!(b<0)){if(typeof u!=="number")return H.w(u)
t=b>=u}else t=!0
if(t)return P.M(b,a,s,null,u)
return P.dr(b,s)},
oX:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bB(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bB(a,c,!0,b,"end",u)
return new P.al(!0,b,"end",null)},
ad:function(a){return new P.al(!0,a,null,null)},
oS:function(a){if(typeof a!=="number")throw H.c(H.ad(a))
return a},
c:function(a){var u
if(a==null)a=new P.dn()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.mq})
u.name=""}else u.toString=H.mq
return u},
mq:function(){return J.a5(this.dartException)},
r:function(a){throw H.c(a)},
l:function(a){throw H.c(P.aN(a))},
aG:function(a){var u,t,s,r,q,p
a=H.mp(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iy(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iz:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
lO:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lz:function(a,b){return new H.hC(a,b==null?null:b.method)},
kL:function(a,b){var u=b==null,t=u?null:b.method
return new H.fT(a,t,u?null:b.receiver)},
ae:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.kw(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.aN(t,16)&8191)===10)switch(s){case 438:return f.$1(H.kL(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.lz(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.mu()
q=$.mv()
p=$.mw()
o=$.mx()
n=$.mA()
m=$.mB()
l=$.mz()
$.my()
k=$.mD()
j=$.mC()
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
if(h)return f.$1(H.lz(u,i))}}return f.$1(new H.iK(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dx()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.al(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dx()
return a},
l8:function(a){var u
if(a==null)return new H.eo(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eo(a)},
p0:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.m(0,a[u],a[t])}return b},
p8:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.v("Unsupported number of arguments for wrapped closure"))},
bP:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.p8)
a.$identity=u
return u},
n_:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.i9().constructor.prototype):Object.create(new H.bV(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.as
if(typeof t!=="number")return t.A()
$.as=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.lo(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.mW(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.lo(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
mW:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.p2,a)
if(typeof a=="function")if(b)return a
else{u=c?H.ln:H.kz
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.c("Error in functionType of tearoff")},
mX:function(a,b,c,d){var u=H.kz
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lo:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mZ(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mX(t,!r,u,b)
if(t===0){r=$.as
if(typeof r!=="number")return r.A()
$.as=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bW
return new Function(r+H.e(q==null?$.bW=H.f3("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.as
if(typeof r!=="number")return r.A()
$.as=r+1
o+=r
r="return function("+o+"){return this."
q=$.bW
return new Function(r+H.e(q==null?$.bW=H.f3("self"):q)+"."+H.e(u)+"("+o+");}")()},
mY:function(a,b,c,d){var u=H.kz,t=H.ln
switch(b?-1:a){case 0:throw H.c(H.nC("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
mZ:function(a,b){var u,t,s,r,q,p,o,n=$.bW
if(n==null)n=$.bW=H.f3("self")
u=$.lm
if(u==null)u=$.lm=H.f3("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.mY(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.as
if(typeof u!=="number")return u.A()
$.as=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.as
if(typeof u!=="number")return u.A()
$.as=u+1
return new Function(n+u+"}")()},
l5:function(a,b,c,d,e,f,g){return H.n_(a,b,c,d,!!e,!!f,g)},
kz:function(a){return a.a},
ln:function(a){return a.c},
f3:function(a){var u,t,s,r=new H.bV("self","target","receiver","name"),q=J.kI(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
pd:function(a,b){throw H.c(H.mV(a,H.cN(b.substring(2))))},
o:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.O(a)[b]
else u=!0
if(u)return a
H.pd(a,b)},
oZ:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
mV:function(a,b){return new H.f4("CastError: "+P.kG(a)+": type '"+H.e(H.oO(a))+"' is not a subtype of type '"+b+"'")},
oO:function(a){var u,t=J.O(a)
if(!!t.$ibY){u=H.oZ(t)
if(u!=null)return H.pe(u)
return"Closure"}return H.ch(a)},
pj:function(a){throw H.c(new P.fg(a))},
nC:function(a){return new H.hV(a)},
mj:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
cL:function(a){if(a==null)return
return a.$ti},
pV:function(a,b,c){return H.ku(a["$a"+H.e(c)],H.cL(b))},
p1:function(a,b,c,d){var u=H.ku(a["$a"+H.e(c)],H.cL(b))
return u==null?null:u[d]},
l7:function(a,b,c){var u=H.ku(a["$a"+H.e(b)],H.cL(a))
return u==null?null:u[c]},
aJ:function(a,b){var u=H.cL(a)
return u==null?null:u[b]},
pe:function(a){return H.bl(a,null)},
bl:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cN(a[0].name)+H.m9(a,1,b)
if(typeof a=="function")return H.cN(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.e(b[t])}if('func' in a)return H.oj(a,b)
if('futureOr' in a)return"FutureOr<"+H.bl("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
oj:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
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
if(l!=null&&l!==P.a2)p+=" extends "+H.bl(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bl(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bl(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bl(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.p_(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.bl(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
m9:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.S("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bl(p,c)}return"<"+u.i(0)+">"},
ku:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
pT:function(a,b,c){return a.apply(b,H.ku(J.O(b)["$a"+H.e(c)],H.cL(b)))},
pU:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
pa:function(a){var u,t,s,r,q=$.mk.$1(a),p=$.ka[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kg[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.me.$2(a,q)
if(q!=null){p=$.ka[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kg[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kq(u)
$.ka[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kg[q]=u
return u}if(s==="-"){r=H.kq(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.mn(a,u)
if(s==="*")throw H.c(P.iJ(q))
if(v.leafTags[q]===true){r=H.kq(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.mn(a,u)},
mn:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.la(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kq:function(a){return J.la(a,!1,null,!!a.$iC)},
pb:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kq(u)
else return J.la(u,c,null,null)},
p6:function(){if(!0===$.l9)return
$.l9=!0
H.p7()},
p7:function(){var u,t,s,r,q,p,o,n
$.ka=Object.create(null)
$.kg=Object.create(null)
H.p5()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.mo.$1(q)
if(p!=null){o=H.pb(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
p5:function(){var u,t,s,r,q,p,o=C.G()
o=H.bO(C.H,H.bO(C.I,H.bO(C.u,H.bO(C.u,H.bO(C.J,H.bO(C.K,H.bO(C.L(C.t),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.mk=new H.kd(r)
$.me=new H.ke(q)
$.mo=new H.kf(p)},
bO:function(a,b){return a(b)||b},
nc:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.c(P.U("Illegal RegExp pattern ("+String(p)+")",a,null))},
ph:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
oY:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mp:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lc:function(a,b,c){var u=H.pi(a,b,c)
return u},
pi:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.mp(b),'g'),H.oY(c))},
f9:function f9(){},
fa:function fa(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iy:function iy(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hC:function hC(a,b){this.a=a
this.b=b},
fT:function fT(a,b,c){this.a=a
this.b=b
this.c=c},
iK:function iK(a){this.a=a},
kw:function kw(a){this.a=a},
eo:function eo(a){this.a=a
this.b=null},
bY:function bY(){},
ii:function ii(){},
i9:function i9(){},
bV:function bV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f4:function f4(a){this.a=a},
hV:function hV(a){this.a=a},
I:function I(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fS:function fS(a){this.a=a},
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
kd:function kd(a){this.a=a},
ke:function ke(a){this.a=a},
kf:function kf(a){this.a=a},
fR:function fR(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bM:function(a){return a},
nm:function(a){return new Int8Array(a)},
aH:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bQ(b,a))},
oh:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.oX(a,b,c))
return b},
cc:function cc(){},
bc:function bc(){},
di:function di(){},
cd:function cd(){},
dj:function dj(){},
hu:function hu(){},
hv:function hv(){},
hw:function hw(){},
hx:function hx(){},
hy:function hy(){},
dk:function dk(){},
ce:function ce(){},
cy:function cy(){},
cz:function cz(){},
cA:function cA(){},
cB:function cB(){},
p_:function(a){return J.lu(a?Object.keys(a):[],null)},
pk:function(a){return v.mangledGlobalNames[a]},
pc:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
la:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
kb:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.l9==null){H.p6()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.iJ("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.le()]
if(r!=null)return r
r=H.pa(a)
if(r!=null)return r
if(typeof a=="function")return C.T
u=Object.getPrototypeOf(a)
if(u==null)return C.A
if(u===Object.prototype)return C.A
if(typeof s=="function"){Object.defineProperty(s,$.le(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
n9:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.ky(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.Z(a,0,4294967295,"length",null))
return J.lu(new Array(a),b)},
lu:function(a,b){return J.kI(H.b(a,[b]))},
kI:function(a){a.fixed$length=Array
return a},
na:function(a,b){return J.cQ(a,b)},
O:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d8.prototype
return J.d7.prototype}if(typeof a=="string")return J.b7.prototype
if(a==null)return J.d9.prototype
if(typeof a=="boolean")return J.fQ.prototype
if(a.constructor==Array)return J.b6.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b8.prototype
return a}if(a instanceof P.a2)return a
return J.kb(a)},
bm:function(a){if(typeof a=="string")return J.b7.prototype
if(a==null)return a
if(a.constructor==Array)return J.b6.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b8.prototype
return a}if(a instanceof P.a2)return a
return J.kb(a)},
eN:function(a){if(a==null)return a
if(a.constructor==Array)return J.b6.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b8.prototype
return a}if(a instanceof P.a2)return a
return J.kb(a)},
mi:function(a){if(typeof a=="number")return J.c6.prototype
if(typeof a=="string")return J.b7.prototype
if(a==null)return a
if(!(a instanceof P.a2))return J.bH.prototype
return a},
cK:function(a){if(typeof a=="string")return J.b7.prototype
if(a==null)return a
if(!(a instanceof P.a2))return J.bH.prototype
return a},
bS:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b8.prototype
return a}if(a instanceof P.a2)return a
return J.kb(a)},
D:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.O(a).p(a,b)},
lg:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mi(a).B(a,b)},
bU:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.ml(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bm(a).h(a,b)},
kx:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.ml(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.eN(a).m(a,b,c)},
mM:function(a,b){return J.cK(a).E(a,b)},
mN:function(a,b,c){return J.bS(a).fQ(a,b,c)},
mO:function(a,b,c,d){return J.bS(a).h9(a,b,c,d)},
mP:function(a,b){return J.cK(a).V(a,b)},
cQ:function(a,b){return J.mi(a).aQ(a,b)},
eQ:function(a,b){return J.eN(a).J(a,b)},
mQ:function(a,b,c,d){return J.bS(a).hy(a,b,c,d)},
lh:function(a,b){return J.eN(a).G(a,b)},
mR:function(a){return J.bS(a).ghj(a)},
li:function(a){return J.bS(a).gbS(a)},
cR:function(a){return J.O(a).gI(a)},
aK:function(a){return J.eN(a).gP(a)},
af:function(a){return J.bm(a).gl(a)},
lj:function(a){return J.eN(a).i4(a)},
mS:function(a,b){return J.bS(a).i7(a,b)},
mT:function(a,b,c){return J.cK(a).t(a,b,c)},
mU:function(a){return J.cK(a).ii(a)},
a5:function(a){return J.O(a).i(a)},
a:function a(){},
fQ:function fQ(){},
d9:function d9(){},
da:function da(){},
hG:function hG(){},
bH:function bH(){},
b8:function b8(){},
b6:function b6(a){this.$ti=a},
kJ:function kJ(a){this.$ti=a},
a_:function a_(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c6:function c6(){},
d8:function d8(){},
d7:function d7(){},
b7:function b7(){}},P={
nS:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.oP()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bP(new P.jc(s),1)).observe(u,{childList:true})
return new P.jb(s,u,t)}else if(self.setImmediate!=null)return P.oQ()
return P.oR()},
nT:function(a){self.scheduleImmediate(H.bP(new P.jd(a),0))},
nU:function(a){self.setImmediate(H.bP(new P.je(a),0))},
nV:function(a){P.kU(C.n,a)},
kU:function(a,b){var u=C.c.a7(a.a,1000)
return P.o1(u<0?0:u,b)},
lN:function(a,b){var u=C.c.a7(a.a,1000)
return P.o2(u<0?0:u,b)},
o1:function(a,b){var u=new P.eu()
u.er(a,b)
return u},
o2:function(a,b){var u=new P.eu()
u.es(a,b)
return u},
pQ:function(a){return new P.bI(a,1)},
nY:function(){return C.Z},
nZ:function(a){return new P.bI(a,3)},
om:function(a,b){return new P.jH(a,[b])},
oI:function(){var u,t
for(;u=$.bN,u!=null;){$.cJ=null
t=u.b
$.bN=t
if(t==null)$.cI=null
u.a.$0()}},
oN:function(){$.l3=!0
try{P.oI()}finally{$.cJ=null
$.l3=!1
if($.bN!=null)$.lf().$1(P.mf())}},
oL:function(a){var u=new P.dR(a)
if($.bN==null){$.bN=$.cI=u
if(!$.l3)$.lf().$1(P.mf())}else $.cI=$.cI.b=u},
oM:function(a){var u,t,s=$.bN
if(s==null){P.oL(a)
$.cJ=$.cI
return}u=new P.dR(a)
t=$.cJ
if(t==null){u.b=s
$.bN=$.cJ=u}else{u.b=t.b
$.cJ=t.b=u
if(u.b==null)$.cI=u}},
lM:function(a,b){var u=$.aq
if(u===C.f)return P.kU(a,b)
return P.kU(a,u.hk(b))},
nJ:function(a,b){var u=$.aq
if(u===C.f)return P.lN(a,b)
return P.lN(a,u.d6(b,P.dE))},
ma:function(a,b,c,d,e){var u={}
u.a=d
P.oM(new P.k2(u,e))},
oJ:function(a,b,c,d){var u,t=$.aq
if(t===c)return d.$0()
$.aq=c
u=t
try{t=d.$0()
return t}finally{$.aq=u}},
oK:function(a,b,c,d,e){var u,t=$.aq
if(t===c)return d.$1(e)
$.aq=c
u=t
try{t=d.$1(e)
return t}finally{$.aq=u}},
jc:function jc(a){this.a=a},
jb:function jb(a,b,c){this.a=a
this.b=b
this.c=c},
jd:function jd(a){this.a=a},
je:function je(a){this.a=a},
eu:function eu(){this.c=0},
jL:function jL(a,b){this.a=a
this.b=b},
jK:function jK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bI:function bI(a,b){this.a=a
this.b=b},
bJ:function bJ(a){var _=this
_.a=a
_.d=_.c=_.b=null},
jH:function jH(a,b){this.a=a
this.$ti=b},
dR:function dR(a){this.a=a
this.b=null},
dz:function dz(){},
ic:function ic(){},
dE:function dE(){},
jU:function jU(){},
k2:function k2(a,b){this.a=a
this.b=b},
js:function js(){},
jt:function jt(a,b){this.a=a
this.b=b},
ju:function ju(a,b,c){this.a=a
this.b=b
this.c=c},
ne:function(a,b){return new H.I([a,b])},
kM:function(a,b){return new H.I([a,b])},
ng:function(a){return H.p0(a,new H.I([null,null]))},
c8:function(a){return new P.jp([a])},
kZ:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
o0:function(a,b){var u=new P.e5(a,b)
u.c=a.e
return u},
n7:function(a,b,c){var u,t
if(P.l4(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.h])
$.aa.push(a)
try{P.ol(a,u)}finally{if(0>=$.aa.length)return H.d($.aa,-1)
$.aa.pop()}t=P.lK(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
kH:function(a,b,c){var u,t
if(P.l4(a))return b+"..."+c
u=new P.S(b)
$.aa.push(a)
try{t=u
t.a=P.lK(t.a,a,", ")}finally{if(0>=$.aa.length)return H.d($.aa,-1)
$.aa.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
l4:function(a){var u,t
for(u=$.aa.length,t=0;t<u;++t)if(a===$.aa[t])return!0
return!1},
ol:function(a,b){var u,t,s,r,q,p,o,n=a.gP(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.q())return
u=H.e(n.gC(n))
b.push(u)
m+=u.length+2;++l}if(!n.q()){if(l<=5)return
if(0>=b.length)return H.d(b,-1)
t=b.pop()
if(0>=b.length)return H.d(b,-1)
s=b.pop()}else{r=n.gC(n);++l
if(!n.q()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.d(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gC(n);++l
for(;n.q();r=q,q=p){p=n.gC(n);++l
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
nf:function(a,b,c){var u=P.ne(b,c)
a.G(0,new P.h_(u))
return u},
lv:function(a,b){var u,t,s=P.c8(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.l)(a),++t)s.n(0,a[t])
return s},
kO:function(a){var u,t={}
if(P.l4(a))return"{...}"
u=new P.S("")
try{$.aa.push(a)
u.a+="{"
t.a=!0
J.lh(a,new P.h4(t,u))
u.a+="}"}finally{if(0>=$.aa.length)return H.d($.aa,-1)
$.aa.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jp:function jp(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jq:function jq(a){this.a=a
this.c=this.b=null},
e5:function e5(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fN:function fN(){},
h_:function h_(a){this.a=a},
h0:function h0(){},
x:function x(){},
h3:function h3(){},
h4:function h4(a,b){this.a=a
this.b=b},
a1:function a1(){},
jM:function jM(){},
h5:function h5(){},
dL:function dL(a,b){this.a=a
this.$ti=b},
jw:function jw(){},
e6:function e6(){},
eA:function eA(){},
nM:function(a,b,c,d){if(b instanceof Uint8Array)return P.nN(!1,b,c,d)
return},
nN:function(a,b,c,d){var u,t,s=$.mE()
if(s==null)return
u=0===c
if(u&&!0)return P.kX(s,b)
t=b.length
d=P.aV(c,d,t)
if(u&&d===t)return P.kX(s,b)
return P.kX(s,b.subarray(c,d))},
kX:function(a,b){if(P.nP(b))return
return P.nQ(a,b)},
nQ:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ae(t)}return},
nP:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
nO:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ae(t)}return},
mc:function(a,b,c){var u,t,s
if(typeof c!=="number")return H.w(c)
u=J.bm(a)
t=b
for(;t<c;++t){s=u.h(a,t)
if(typeof s!=="number")return s.ae()
if((s&127)!==s)return t-b}return c-b},
ll:function(a,b,c,d,e,f){if(C.c.bb(f,4)!==0)throw H.c(P.U("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.U("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.U("Invalid base64 padding, more than two '=' characters",a,b))},
f0:function f0(){},
f1:function f1(){},
f6:function f6(){},
fb:function fb(){},
ft:function ft(){},
fL:function fL(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
fK:function fK(a){this.a=a},
iT:function iT(){},
iV:function iV(){},
jS:function jS(a){this.b=0
this.c=a},
iU:function iU(a){this.a=a},
jR:function jR(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
eO:function(a,b,c){var u=H.nw(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.U(a,null,null))},
n4:function(a){if(a instanceof H.bY)return a.i(0)
return"Instance of '"+H.e(H.ch(a))+"'"},
nh:function(a,b,c){var u,t,s=J.n9(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
kN:function(a,b,c){var u,t=H.b([],[c])
for(u=J.aK(a);u.q();)t.push(u.gC(u))
if(b)return t
return J.kI(t)},
ck:function(a,b,c){var u,t
if(typeof a==="object"&&a!==null&&a.constructor===Array){u=a.length
c=P.aV(b,c,u)
if(b<=0){if(typeof c!=="number")return c.S()
t=c<u}else t=!0
return H.lF(t?C.b.e8(a,b,c):a)}if(!!J.O(a).$ice)return H.ny(a,b,P.aV(b,c,a.length))
return P.nH(a,b,c)},
nH:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.c(P.Z(b,0,J.af(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.Z(c,b,J.af(a),q,q))
t=J.aK(a)
for(s=0;s<b;++s)if(!t.q())throw H.c(P.Z(b,0,s,q,q))
r=[]
if(u)for(;t.q();)r.push(t.gC(t))
else for(s=b;s<c;++s){if(!t.q())throw H.c(P.Z(c,b,s,q,q))
r.push(t.gC(t))}return H.lF(r)},
nA:function(a){return new H.fR(a,H.nc(a,!1,!0,!1,!1,!1))},
lK:function(a,b,c){var u=J.aK(b)
if(!u.q())return a
if(c.length===0){do a+=H.e(u.gC(u))
while(u.q())}else{a+=H.e(u.gC(u))
for(;u.q();)a=a+c+H.e(u.gC(u))}return a},
lQ:function(){var u=H.no()
if(u!=null)return P.nL(u)
throw H.c(P.z("'Uri.base' is not supported"))},
eB:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.e){u=$.mK().b
if(typeof b!=="string")H.r(H.ad(b))
u=u.test(b)}else u=!1
if(u)return b
t=c.ghx().bU(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.d(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.bA(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
n1:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
n2:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
d_:function(a){if(a>=10)return""+a
return"0"+a},
lq:function(a){return new P.b2(1000*a)},
kG:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a5(a)
if(typeof a==="string")return JSON.stringify(a)
return P.n4(a)},
cS:function(a){return new P.al(!1,null,null,a)},
ky:function(a,b,c){return new P.al(!0,a,b,c)},
dr:function(a,b){return new P.bB(null,null,!0,a,b,"Value not in range")},
Z:function(a,b,c,d,e){return new P.bB(b,c,!0,a,d,"Invalid value")},
aV:function(a,b,c){var u
if(typeof a!=="number")return H.w(a)
if(0<=a){if(typeof c!=="number")return H.w(c)
u=a>c}else u=!0
if(u)throw H.c(P.Z(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.w(c)
u=b>c}else u=!0
if(u)throw H.c(P.Z(b,a,c,"end",null))
return b}return c},
lG:function(a,b){if(typeof a!=="number")return a.S()
if(a<0)throw H.c(P.Z(a,0,null,b,null))},
M:function(a,b,c,d,e){var u=e==null?J.af(b):e
return new P.fM(u,!0,a,c,"Index out of range")},
z:function(a){return new P.iM(a)},
iJ:function(a){return new P.iI(a)},
lJ:function(a){return new P.cj(a)},
aN:function(a){return new P.f8(a)},
v:function(a){return new P.dZ(a)},
U:function(a,b,c){return new P.fD(a,b,c)},
ni:function(a,b,c){var u,t,s=H.b([],[c])
C.b.sl(s,a)
for(u=0;u<a;++u){t=b.$1(u)
if(u>=s.length)return H.d(s,u)
s[u]=t}return s},
lb:function(a){H.pc(a)},
nL:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.a.E(a,4)^58)*3|C.a.E(a,0)^100|C.a.E(a,1)^97|C.a.E(a,2)^116|C.a.E(a,3)^97)>>>0
if(u===0)return P.lP(e<e?C.a.t(a,0,e):a,5,f).ge_()
else if(u===32)return P.lP(C.a.t(a,5,e),0,f).ge_()}t=new Array(8)
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
if(P.mb(a,0,e,0,s)>=14)s[7]=e
r=s[1]
if(typeof r!=="number")return r.im()
if(r>=0)if(P.mb(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.A()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.S()
if(typeof n!=="number")return H.w(n)
if(m<n)n=m
if(typeof o!=="number")return o.S()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.S()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.S()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.a.aa(a,"..",o)))j=n>o+2&&C.a.aa(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.a.aa(a,"file",0)){if(q<=0){if(!C.a.aa(a,"/",o)){i="file:///"
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
a=C.a.aS(a,o,n,"/");++e
n=h}k="file"}else if(C.a.aa(a,"http",0)){if(t&&p+3===o&&C.a.aa(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.a.aS(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.a.aa(a,"https",0)){if(t&&p+4===o&&C.a.aa(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.a.aS(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.a.t(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.jz(a,r,q,p,o,n,m,k)}return P.o3(a,0,e,r,q,p,o,n,m,k)},
lS:function(a){var u=P.h
return C.b.hD(H.b(a.split("&"),[u]),P.kM(u,u),new P.iR(C.e))},
nK:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.iO(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.a.V(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.eO(C.a.t(a,s,t),n,n)
if(typeof p!=="number")return p.a2()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.d(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.eO(C.a.t(a,s,c),n,n)
if(typeof p!=="number")return p.a2()
if(p>255)k.$2(l,s)
if(r>=u)return H.d(j,r)
j[r]=p
return j},
lR:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.iP(a),d=new P.iQ(e,a)
if(a.length<2)e.$1("address is too short")
u=H.b([],[P.u])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.a.V(a,t)
if(p===58){if(t===b){++t
if(C.a.V(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
u.push(-1)
r=!0}else u.push(d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.b.gax(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)u.push(d.$2(s,c))
else{m=P.nK(a,s,c)
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
o3:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.ob(a,b,d)
else{if(d===b)P.bL(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.oc(a,u,e-1):""
s=P.o8(a,e,f,!1)
if(typeof f!=="number")return f.A()
r=f+1
if(typeof g!=="number")return H.w(g)
q=r<g?P.oa(P.eO(C.a.t(a,r,g),new P.jN(a,f),n),j):n}else{q=n
s=q
t=""}p=P.o9(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.S()
o=h<i?P.l0(a,h+1,i,n):n
return new P.bK(j,t,s,q,p,o,i<c?P.o7(a,i+1,c):n)},
m3:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bL:function(a,b,c){throw H.c(P.U(c,a,b))},
oa:function(a,b){if(a!=null&&a===P.m3(b))return
return a},
o8:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.a.V(a,b)===91){if(typeof c!=="number")return c.M()
u=c-1
if(C.a.V(a,u)!==93)P.bL(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.o5(a,t,u)
if(typeof s!=="number")return s.S()
if(s<u){r=s+1
q=P.m8(a,C.a.aa(a,"25",r)?s+3:r,u,"%25")}else q=""
P.lR(a,t,s)
return C.a.t(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.w(c)
p=b
for(;p<c;++p)if(C.a.V(a,p)===58){s=C.a.bl(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.m8(a,C.a.aa(a,"25",r)?s+3:r,c,"%25")}else q=""
P.lR(a,b,s)
return"["+C.a.t(a,b,s)+q+"]"}return P.oe(a,b,c)},
o5:function(a,b,c){var u,t=C.a.bl(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.w(c)
u=t<c}else u=!1
return u?t:c},
m8:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.S(d):null
if(typeof c!=="number")return H.w(c)
u=b
t=u
s=!0
for(;u<c;){r=C.a.V(a,u)
if(r===37){q=P.l1(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.S("")
o=l.a+=C.a.t(a,t,u)
if(p)q=C.a.t(a,u,u+3)
else if(q==="%")P.bL(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.d(C.h,p)
p=(C.h[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.S("")
if(t<u){l.a+=C.a.t(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.a.V(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.S("")
l.a+=C.a.t(a,t,u)
l.a+=P.l_(r)
u+=m
t=u}}}if(l==null)return C.a.t(a,b,c)
if(t<c)l.a+=C.a.t(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
oe:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.w(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.a.V(a,u)
if(q===37){p=P.l1(a,u,!0)
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
if(o)P.bL(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.a.V(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.S("")
n=C.a.t(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.l_(q)
u+=l
t=u}}}}if(s==null)return C.a.t(a,b,c)
if(t<c){n=C.a.t(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
ob:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.m5(C.a.E(a,b)))P.bL(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.a.E(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.d(C.m,r)
r=(C.m[r]&1<<(s&15))!==0}else r=!1
if(!r)P.bL(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.a.t(a,b,c)
return P.o4(t?a.toLowerCase():a)},
o4:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oc:function(a,b,c){return P.cG(a,b,c,C.W,!1)},
o9:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.cG(a,b,c,C.z,!0):C.j.iH(d,new P.jO(),P.h).j(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.a.a6(u,"/"))u="/"+u
return P.od(u,e,f)},
od:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.a.a6(a,"/"))return P.of(a,!u||c)
return P.og(a)},
l0:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.c(P.cS("Both query and queryParameters specified"))
return P.cG(a,b,c,C.l,!0)}if(d==null)return
u=new P.S("")
t.a=""
d.G(0,new P.jP(new P.jQ(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
o7:function(a,b,c){return P.cG(a,b,c,C.l,!0)},
l1:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.a.V(a,b+1)
t=C.a.V(a,p)
s=H.kc(u)
r=H.kc(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.c.aN(q,4)
if(p>=8)return H.d(C.h,p)
p=(C.h[p]&1<<(q&15))!==0}else p=!1
if(p)return H.bA(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.a.t(a,b,b+3).toUpperCase()
return},
l_:function(a){var u,t,s,r,q,p,o,n,m="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.b(u,[P.u])
t[0]=37
t[1]=C.a.E(m,a>>>4)
t[2]=C.a.E(m,a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.b(u,[P.u])
for(u=t.length,q=0;--r,r>=0;s=128){p=C.c.h1(a,6*r)&63|s
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
q+=3}}return P.ck(t,0,null)},
cG:function(a,b,c,d,e){var u=P.m7(a,b,c,d,e)
return u==null?C.a.t(a,b,c):u},
m7:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.S()
if(typeof c!=="number")return H.w(c)
if(!(o<c))break
c$0:{u=C.a.V(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.d(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.l1(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.d(C.k,t)
t=(C.k[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.bL(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.a.V(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.l_(u)}}if(m==null)m=new P.S("")
m.a+=C.a.t(a,n,o)
m.a+=H.e(s)
if(typeof r!=="number")return H.w(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.S()
if(n<c)m.a+=C.a.t(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
m6:function(a){if(C.a.a6(a,"."))return!0
return C.a.du(a,"/.")!==-1},
og:function(a){var u,t,s,r,q,p,o
if(!P.m6(a))return a
u=H.b([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.D(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.d(u,-1)
u.pop()
if(u.length===0)u.push("")}r=!0}else if("."===p)r=!0
else{u.push(p)
r=!1}}if(r)u.push("")
return C.b.j(u,"/")},
of:function(a,b){var u,t,s,r,q,p
if(!P.m6(a))return!b?P.m4(a):a
u=H.b([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.b.gax(u)!==".."){if(0>=u.length)return H.d(u,-1)
u.pop()
r=!0}else{u.push("..")
r=!1}else if("."===p)r=!0
else{u.push(p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.d(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.b.gax(u)==="..")u.push("")
if(!b){if(0>=u.length)return H.d(u,0)
t=P.m4(u[0])
if(0>=u.length)return H.d(u,0)
u[0]=t}return C.b.j(u,"/")},
m4:function(a){var u,t,s,r=a.length
if(r>=2&&P.m5(J.mM(a,0)))for(u=1;u<r;++u){t=C.a.E(a,u)
if(t===58)return C.a.t(a,0,u)+"%3A"+C.a.ab(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.d(C.m,s)
s=(C.m[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
o6:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.a.E(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.cS("Invalid URL encoding"))}}return u},
l2:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.a.E(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.e!==d)s=!1
else s=!0
if(s)return C.a.t(a,b,c)
else r=new H.m(C.a.t(a,b,c))}else{r=H.b([],[P.u])
for(s=a.length,q=b;q<c;++q){t=C.a.E(a,q)
if(t>127)throw H.c(P.cS("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.cS("Truncated URI"))
r.push(P.o6(a,q+1))
q+=2}else if(t===43)r.push(32)
else r.push(t)}}return new P.iU(!1).bU(r)},
m5:function(a){var u=a|32
return 97<=u&&u<=122},
lP:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.b([b-1],[P.u])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.a.E(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.U(m,a,t))}}if(s<0&&t>b)throw H.c(P.U(m,a,t))
for(;r!==44;){l.push(t);++t
for(q=-1;t<u;++t){r=C.a.E(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)l.push(q)
else{p=C.b.gax(l)
if(r!==44||t!==p+7||!C.a.aa(a,"base64",p+1))throw H.c(P.U("Expecting '='",a,t))
break}}l.push(t)
o=t+1
if((l.length&1)===1)a=C.F.hO(0,a,o,u)
else{n=P.m7(a,o,u,C.l,!0)
if(n!=null)a=C.a.aS(a,o,u,n)}return new P.iN(a,l,c)},
oi:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.ni(22,new P.jY(),P.bE),n=new P.jX(o),m=new P.jZ(),l=new P.k_(),k=n.$2(0,225)
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
mb:function(a,b,c,d,e){var u,t,s,r,q,p=$.mL()
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
ac:function ac(a,b){this.a=a
this.b=b},
K:function K(){},
b2:function b2(a){this.a=a},
fp:function fp(){},
fq:function fq(){},
bt:function bt(){},
dn:function dn(){},
al:function al(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bB:function bB(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fM:function fM(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iM:function iM(a){this.a=a},
iI:function iI(a){this.a=a},
cj:function cj(a){this.a=a},
f8:function f8(a){this.a=a},
hF:function hF(){},
dx:function dx(){},
fg:function fg(a){this.a=a},
dZ:function dZ(a){this.a=a},
fD:function fD(a,b,c){this.a=a
this.b=b
this.c=c},
fF:function fF(){},
u:function u(){},
i:function i(){},
fP:function fP(){},
n:function n(){},
Q:function Q(){},
bd:function bd(){},
ab:function ab(){},
a2:function a2(){},
h:function h(){},
S:function S(a){this.a=a},
iR:function iR(a){this.a=a},
iO:function iO(a){this.a=a},
iP:function iP(a){this.a=a},
iQ:function iQ(a,b){this.a=a
this.b=b},
bK:function bK(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
jN:function jN(a,b){this.a=a
this.b=b},
jO:function jO(){},
jQ:function jQ(a,b){this.a=a
this.b=b},
jP:function jP(a){this.a=a},
iN:function iN(a,b,c){this.a=a
this.b=b
this.c=c},
jY:function jY(){},
jX:function jX(a){this.a=a},
jZ:function jZ(){},
k_:function k_(){},
jz:function jz(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
ji:function ji(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
oV:function(a){var u,t=J.O(a)
if(!!t.$iaQ){u=t.gdd(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.ez(a.data,a.height,a.width)},
oU:function(a){if(a instanceof P.ez)return{data:a.a,height:a.b,width:a.c}
return a},
aX:function(a){var u,t,s,r,q
if(a==null)return
u=P.kM(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.l)(t),++r){q=t[r]
u.m(0,q,a[q])}return u},
oT:function(a){var u={}
a.G(0,new P.k3(u))
return u},
jB:function jB(){},
jD:function jD(a,b){this.a=a
this.b=b},
jE:function jE(a,b){this.a=a
this.b=b},
ez:function ez(a,b,c){this.a=a
this.b=b
this.c=c},
k3:function k3(a){this.a=a},
jC:function jC(a,b){this.a=a
this.b=b},
fz:function fz(a,b){this.a=a
this.b=b},
fA:function fA(){},
fB:function fB(){},
jo:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
o_:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jr:function jr(){},
a9:function a9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aR:function aR(){},
fV:function fV(){},
aU:function aU(){},
hD:function hD(){},
hL:function hL(){},
ci:function ci(){},
id:function id(){},
k:function k(){},
aW:function aW(){},
ix:function ix(){},
e3:function e3(){},
e4:function e4(){},
ee:function ee(){},
ef:function ef(){},
eq:function eq(){},
er:function er(){},
ex:function ex(){},
ey:function ey(){},
bE:function bE(){},
eV:function eV(){},
eW:function eW(){},
eX:function eX(a){this.a=a},
eY:function eY(){},
bp:function bp(){},
hE:function hE(){},
dS:function dS(){},
dt:function dt(){},
i8:function i8(){},
em:function em(){},
en:function en(){}},W={
lk:function(){var u=document.createElement("a")
return u},
kB:function(){var u=document.createElement("canvas")
return u},
n3:function(a,b,c){var u=document.body,t=(u&&C.r).ak(u,a,b,c)
t.toString
u=new H.cu(new W.a4(t),new W.fs(),[W.E])
return u.gaI(u)},
kD:function(a){return"wheel"},
c_:function(a){var u,t,s,r="element tag unavailable"
try{u=J.bS(a)
t=u.gdV(a)
if(typeof t==="string")r=u.gdV(a)}catch(s){H.ae(s)}return r},
n6:function(a){var u,t=document.createElement("input"),s=t
try{s.type=a}catch(u){H.ae(u)}return s},
jn:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
m1:function(a,b,c,d){var u=W.jn(W.jn(W.jn(W.jn(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
Y:function(a,b,c,d){var u=W.md(new W.jl(c),W.j)
if(u!=null&&!0)J.mO(a,b,u,!1)
return new W.jk(a,b,u,!1)},
m0:function(a){var u=W.lk(),t=window.location
u=new W.cw(new W.jv(u,t))
u.ej(a)
return u},
nW:function(a,b,c,d){return!0},
nX:function(a,b,c,d){var u,t=d.a,s=t.a
s.href=c
u=s.hostname
t=t.b
if(!(u==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(u==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
m2:function(){var u=P.h,t=P.lv(C.o,u),s=H.b(["TEMPLATE"],[u])
t=new W.jI(t,P.c8(u),P.c8(u),P.c8(u),null)
t.eo(null,new H.h7(C.o,new W.jJ(),[H.aJ(C.o,0),u]),s,null)
return t},
md:function(a,b){var u=$.aq
if(u===C.f)return a
return u.d6(a,b)},
p:function p(){},
eR:function eR(){},
eS:function eS(){},
eT:function eT(){},
bq:function bq(){},
br:function br(){},
bs:function bs(){},
b0:function b0(){},
fc:function fc(){},
H:function H(){},
bZ:function bZ(){},
fd:function fd(){},
ah:function ah(){},
at:function at(){},
fe:function fe(){},
ff:function ff(){},
fi:function fi(){},
am:function am(){},
fm:function fm(){},
d1:function d1(){},
d2:function d2(){},
fn:function fn(){},
fo:function fo(){},
jg:function jg(a,b){this.a=a
this.b=b},
P:function P(){},
fs:function fs(){},
j:function j(){},
f:function f(){},
an:function an(){},
c1:function c1(){},
fy:function fy(){},
fC:function fC(){},
au:function au(){},
fJ:function fJ(){},
c3:function c3(){},
aQ:function aQ(){},
c4:function c4(){},
bw:function bw(){},
h1:function h1(){},
hn:function hn(){},
cb:function cb(){},
ho:function ho(){},
hp:function hp(a){this.a=a},
hq:function hq(){},
hr:function hr(a){this.a=a},
ax:function ax(){},
hs:function hs(){},
ay:function ay(){},
a4:function a4(a){this.a=a},
E:function E(){},
dl:function dl(){},
az:function az(){},
hI:function hI(){},
hT:function hT(){},
hU:function hU(a){this.a=a},
hW:function hW(){},
aB:function aB(){},
i6:function i6(){},
aC:function aC(){},
i7:function i7(){},
aD:function aD(){},
ia:function ia(){},
ib:function ib(a){this.a=a},
ao:function ao(){},
dA:function dA(){},
ie:function ie(){},
ig:function ig(){},
cl:function cl(){},
aE:function aE(){},
ap:function ap(){},
ij:function ij(){},
ik:function ik(){},
ir:function ir(){},
aF:function aF(){},
bD:function bD(){},
iv:function iv(){},
iw:function iw(){},
bg:function bg(){},
iS:function iS(){},
j9:function j9(){},
bk:function bk(){},
cv:function cv(){},
jh:function jh(){},
dU:function dU(){},
jm:function jm(){},
eb:function eb(){},
jA:function jA(){},
jF:function jF(){},
jf:function jf(){},
jj:function jj(a){this.a=a},
jk:function jk(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jl:function jl(a){this.a=a},
cw:function cw(a){this.a=a},
L:function L(){},
dm:function dm(a){this.a=a},
hA:function hA(a){this.a=a},
hz:function hz(a,b,c){this.a=a
this.b=b
this.c=c},
ej:function ej(){},
jx:function jx(){},
jy:function jy(){},
jI:function jI(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jJ:function jJ(){},
jG:function jG(){},
d5:function d5(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
aT:function aT(){},
jv:function jv(a,b){this.a=a
this.b=b},
eC:function eC(a){this.a=a},
jT:function jT(a){this.a=a},
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
cC:function cC(){},
cD:function cD(){},
ek:function ek(){},
el:function el(){},
ep:function ep(){},
es:function es(){},
et:function et(){},
cE:function cE(){},
cF:function cF(){},
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
N:function(a,b){var u,t,s
if(a.length!==1||b.length!==1)throw H.c(P.v("The given low and high character strings for a Range must have one and only one characters."))
u=C.a.E(a,0)
t=C.a.E(b,0)
if(u>t){s=t
t=u
u=s}return new K.hO(u,t)},
t:function(a){var u=new K.hX()
u.eh(a)
return u},
aL:function aL(){},
d6:function d6(){},
ba:function ba(){},
a7:function a7(){this.a=null},
hO:function hO(a,b){this.a=a
this.b=b},
hX:function hX(){this.a=null}},L={
it:function(){var u=new L.is(),t=P.h
u.a=new H.I([t,L.dy])
u.b=new H.I([t,L.dG])
u.c=P.c8(t)
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
is:function is(){var _=this
_.d=_.c=_.b=_.a=null},
dI:function dI(a){this.b=a
this.a=this.c=null}},O={
kC:function(a){var u=new O.aM([a])
u.bd(a)
return u},
aM:function aM(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
ca:function ca(){this.b=this.a=null},
lw:function(){var u,t=new O.df(),s=O.kC(V.aS)
t.e=s
s.aW(t.geW(),t.geY())
s=new O.av(t,"emission")
s.c=new A.a0(!1,!1,!1)
s.f=new V.W(0,0,0)
t.f=s
s=new O.av(t,"ambient")
s.c=new A.a0(!1,!1,!1)
s.f=new V.W(0,0,0)
t.r=s
s=new O.av(t,"diffuse")
s.c=new A.a0(!1,!1,!1)
s.f=new V.W(0,0,0)
t.x=s
s=new O.av(t,"invDiffuse")
s.c=new A.a0(!1,!1,!1)
s.f=new V.W(0,0,0)
t.y=s
s=new O.he(t,"specular")
s.c=new A.a0(!1,!1,!1)
s.f=new V.W(0,0,0)
s.ch=100
t.z=s
s=new O.ha(t,"bump")
s.c=new A.a0(!1,!1,!1)
t.Q=s
t.ch=null
s=new O.av(t,"reflect")
s.c=new A.a0(!1,!1,!1)
s.f=new V.W(0,0,0)
t.cx=s
s=new O.hd(t,"refract")
s.c=new A.a0(!1,!1,!1)
s.f=new V.W(0,0,0)
s.ch=1
t.cy=s
s=new O.h9(t,"alpha")
s.c=new A.a0(!1,!1,!1)
s.f=1
t.db=s
s=new D.dc()
s.bd(D.a6)
s.e=H.b([],[D.f_])
s.f=H.b([],[D.fl])
s.r=H.b([],[D.hJ])
s.x=H.b([],[D.bC])
s.z=s.y=null
s.cl(s.geU(),s.gfv(),s.gfB())
t.dx=s
u=new O.hc()
u.b=new V.ag(0,0,0,0)
u.c=1
u.d=10
u.e=!1
t.dy=u
u=s.y
s=u==null?s.y=D.J():u
s.n(0,t.gfS())
s=t.dx
u=s.z
s=u==null?s.z=D.J():u
s.n(0,t.gep())
t.fr=null
return t},
fj:function fj(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
df:function df(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hf:function hf(a,b){this.a=a
this.b=b},
hg:function hg(){},
hh:function hh(a,b){this.a=a
this.b=b},
hi:function hi(){},
hj:function hj(a,b){this.a=a
this.b=b},
hk:function hk(){},
hl:function hl(a,b){this.a=a
this.b=b},
hm:function hm(){},
h9:function h9(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dg:function dg(){},
ha:function ha(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
av:function av(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hc:function hc(){var _=this
_.e=_.d=_.c=_.b=null},
hd:function hd(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
he:function he(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dB:function dB(){}},E={
kF:function(){var u,t=new E.aP()
t.a=""
t.b=!0
u=O.kC(E.aP)
t.y=u
u.aW(t.ghP(),t.ghS())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sag(0,null)
t.saT(null)
t.saR(null)
return t},
nB:function(a,b){var u=new E.hP(a)
u.eg(a,b)
return u},
nI:function(a,b,c,d,e){var u,t,s=J.O(a)
if(!!s.$ibs)return E.lL(a,!0,!0,!0,!1)
u=W.kB()
t=u.style
t.width="100%"
t.height="100%"
s.gbS(a).n(0,u)
return E.lL(u,!0,!0,!0,!1)},
lL:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.dD(),p=C.i.cj(a,"webgl2",P.ng(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.r(P.v("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.nB(p,a)
u=new T.io(p)
u.b=p.getParameter(3379)
p.getParameter(34076)
u.e=u.d=0
q.f=u
u=new X.dM(a)
t=new X.fU()
t.d=P.c8(P.u)
u.b=t
t=new X.ht(u)
t.f=0
t.r=V.be()
t.x=V.be()
t.ch=t.Q=1
u.c=t
t=new X.h2(u)
t.r=0
t.x=V.be()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.iu(u)
t.f=V.be()
t.r=V.be()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.b([],[[P.dz,P.a2]])
u.z=t
s=document
t.push(W.Y(s,"contextmenu",u.gf6(),!1))
u.z.push(W.Y(a,"focus",u.gfc(),!1))
u.z.push(W.Y(a,"blur",u.gf_(),!1))
u.z.push(W.Y(s,"keyup",u.gfg(),!1))
u.z.push(W.Y(s,"keydown",u.gfe(),!1))
u.z.push(W.Y(a,"mousedown",u.gfk(),!1))
u.z.push(W.Y(a,"mouseup",u.gfo(),!1))
u.z.push(W.Y(a,r,u.gfm(),!1))
t=u.z
W.kD(a)
W.kD(a)
t.push(W.Y(a,W.kD(a),u.gfq(),!1))
u.z.push(W.Y(s,r,u.gf8(),!1))
u.z.push(W.Y(s,"mouseup",u.gfa(),!1))
u.z.push(W.Y(s,"pointerlockchange",u.gft(),!1))
u.z.push(W.Y(a,"touchstart",u.gfL(),!1))
u.z.push(W.Y(a,"touchend",u.gfH(),!1))
u.z.push(W.Y(a,"touchmove",u.gfJ(),!1))
q.x=u
q.ch=!0
q.cx=!1
q.cy=new P.ac(Date.now(),!1)
q.db=0
q.cQ()
return q},
f2:function f2(){},
aP:function aP(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hP:function hP(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hQ:function hQ(a){this.a=a},
hR:function hR(a){this.a=a},
hS:function hS(a){this.a=a},
dD:function dD(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
iq:function iq(a){this.a=a}},Z={
kY:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.bM(c)),35044)
a.bindBuffer(b,null)
return new Z.dP(b,u)},
ak:function(a){return new Z.bj(a)},
dP:function dP(a,b){this.a=a
this.b=b},
cV:function cV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
dQ:function dQ(a){this.a=a},
bX:function bX(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bv:function bv(a,b,c){this.a=a
this.b=b
this.c=c},
bj:function bj(a){this.a=a}},D={
J:function(){var u=new D.bu()
u.d=0
return u},
f5:function f5(){},
bu:function bu(){var _=this
_.d=_.c=_.b=_.a=null},
fv:function fv(a){this.a=a},
fw:function fw(a){this.a=a},
X:function X(){this.b=null},
b4:function b4(){this.b=null},
b5:function b5(){this.b=null},
y:function y(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
f_:function f_(){},
fl:function fl(){},
a6:function a6(){},
dc:function dc(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
hJ:function hJ(){},
bC:function bC(){var _=this
_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},X={cW:function cW(a,b){this.a=a
this.b=b},db:function db(a,b){this.a=a
this.b=b},fU:function fU(){this.d=this.b=this.a=null},de:function de(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},h2:function h2(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},by:function by(a,b,c){this.a=a
this.b=b
this.c=c},bb:function bb(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},ht:function ht(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},hK:function hK(){},dH:function dH(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iu:function iu(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dM:function dM(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
n5:function(a){var u=new X.fE(),t=new V.ag(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=V.kR()
u.r=t
return u},
lA:function(a,b){var u,t=new X.dp()
t.c=1.0471975511965976
t.d=0.1
t.e=2000
t.saR(b)
u=t.c
if(!(Math.abs(u-a)<$.A().a)){t.c=a
u=new D.y("fov",u,a)
u.b=!0
t.a4(u)}u=t.d
if(!(Math.abs(u-0.1)<$.A().a)){t.d=0.1
u=new D.y("near",u,0.1)
u.b=!0
t.a4(u)}u=t.e
if(!(Math.abs(u-2000)<$.A().a)){t.e=2000
u=new D.y("far",u,2000)
u.b=!0
t.a4(u)}return t},
eZ:function eZ(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
kA:function kA(){},
fE:function fE(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dp:function dp(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
ih:function ih(){}},V={
pl:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.bb(a-b,u)
return(a<0?a+u:a)+b},
F:function(a,b,c){if(a==null)return C.a.am("null",c)
return C.a.am(C.d.dZ(Math.abs(a-0)<$.A().a?0:a,b),c+b+1)},
bR:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.h])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.l)(a),++s){r=V.F(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.d(o,q)
u=C.a.am(o[q],t)
p=o.length
if(q>=p)return H.d(o,q)
o[q]=u}return o},
cM:function(a){return C.d.ie(Math.pow(2,C.S.c5(Math.log(H.oS(a))/Math.log(2))))},
bx:function(){var u=$.ly
return u==null?$.ly=V.aw(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aw:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aS(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kQ:function(a,b,c){return V.aw(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
kP:function(a,b,c,d){return V.aw(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
lx:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.aw(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
be:function(){var u=$.lC
return u==null?$.lC=new V.a8(0,0):u},
lD:function(){var u=$.aj
return u==null?$.aj=new V.R(0,0,0):u},
kR:function(){var u=$.lI
return u==null?$.lI=V.lH(0,0,1,1):u},
lH:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.ds(a,b,c,d)},
cs:function(){var u=$.lX
return u==null?$.lX=new V.B(0,0,0):u},
nR:function(){var u=$.iW
return u==null?$.iW=new V.B(-1,0,0):u},
lY:function(){var u=$.iX
return u==null?$.iX=new V.B(0,1,0):u},
lZ:function(){var u=$.iY
return u==null?$.iY=new V.B(0,0,1):u},
W:function W(a,b,c){this.a=a
this.b=b
this.c=c},
ag:function ag(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fu:function fu(a){this.a=a},
dh:function dh(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aS:function aS(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
R:function R(a,b,c){this.a=a
this.b=b
this.c=c},
bf:function bf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ds:function ds(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
V:function V(a,b){this.a=a
this.b=b},
B:function B(a,b,c){this.a=a
this.b=b
this.c=c},
ct:function ct(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pf:function(a){P.nJ(C.P,new V.kr(a))},
nD:function(a){var u=new V.i1()
u.ei(a,!0)
return u},
cX:function cX(){},
kr:function kr(a){this.a=a},
fh:function fh(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fG:function fG(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fI:function fI(a){var _=this
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
mm:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2="testCanvas",a3=null,a4=V.nD("Test 045"),a5=W.kB()
a5.className="pageLargeCanvas"
a5.id=a2
a4.a.appendChild(a5)
u=[P.h]
a4.d2(H.b(["Test of the Material Lighting shader with a textured spot light. ","Use Ctrl plus the mouse to move the light."],u))
a4.h8(H.b(["shapes"],u))
a4.d2(H.b(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(a2)
if(t==null)H.r(P.v("Failed to find an element with the identifier, testCanvas."))
s=E.nI(t,!0,!0,!0,!1)
r=new X.eZ()
r.d=r.c=r.b=r.a=512
r.e=!0
r.f=!1
r.x=r.r=1
r.ch=T.kT(a3)
r.cx=new V.ag(0,0,0,1)
r.cy=!0
r.db=2000
r.dx=!0
r.dy=V.kR()
r.sat(0,512)
r.sao(0,512)
q=new V.ag(0,0,0,1)
if(!r.cx.p(0,q)){p=r.cx
r.cx=q
o=new D.y("color",p,q)
o.b=!0
r.a4(o)}o=r.db
if(!(Math.abs(o-2000)<$.A().a)){r.db=2000
o=new D.y("depth",o,2000)
o.b=!0
r.a4(o)}o=r.r
if(!(Math.abs(o-1)<$.A().a)){r.r=1
o=new D.y("autoResizeScalarX",o,1)
o.b=!0
r.a4(o)}o=r.x
if(!(Math.abs(o-1)<$.A().a)){r.x=1
o=new D.y("autoResizeScalarY",o,1)
o.b=!0
r.a4(o)}n=V.kR()
if(!J.D(r.dy,n)){p=r.dy
r.dy=n
o=new D.y("region",p,n)
o.b=!0
r.a4(o)}m=U.fH()
m.n(0,U.b1(V.kQ(0,0,-4)))
m.n(0,U.lT(!0,s.x))
o=r.ch
l=s.f.hM("../resources/Test.png")
q=new V.W(1,1,1)
k=new D.bC()
k.r=new V.W(1,1,1)
k.ch=1.0471975511965976
k.cx=1
k.dx=k.cy=1.5707963267948966
k.db=!0
k.dy=1
k.fx=k.fr=0
k.fy=!0
k.a=V.lD()
k.b=V.lZ()
k.c=V.lY()
k.d=V.nR()
p=k.f
k.f=m
m.gu().n(0,k.gaY())
j=new D.y("mover",p,k.f)
j.b=!0
k.X(j)
if(!k.r.p(0,q)){p=k.r
k.r=q
j=new D.y("color",p,q)
j.b=!0
k.X(j)}j=k.x
if(j!==l){if(j!=null)j.gu().K(0,k.gaY())
p=k.x
k.x=l
l.gu().n(0,k.gaY())
l=new D.y("texture",p,k.x)
l.b=!0
k.X(l)}l=k.y
if(l!==o){if(l!=null)l.gu().K(0,k.gaY())
p=k.y
k.y=o
o.gu().n(0,k.gaY())
o=new D.y("shadow",p,k.y)
o.b=!0
k.X(o)}o=k.ch
if(!(Math.abs(o-0.5)<$.A().a)){k.ch=0.5
l=1/(Math.sqrt(2)*Math.tan(k.ch))
k.z=l
k.Q=l*k.cx
o=new D.y("fov",o,k.ch)
o.b=!0
k.X(o)}o=k.cx
if(!(Math.abs(o-1)<$.A().a)){k.cx=1
l=k.z
if(typeof l!=="number")return l.B()
k.Q=l
o=new D.y("ratio",o,1)
o.b=!0
k.X(o)}o=k.cy
if(!(Math.abs(o-1.5707963267948966)<$.A().a)){k.cy=1.5707963267948966
o=new D.y("cutoff",o,1.5707963267948966)
o.b=!0
k.X(o)}o=k.dx
if(!(Math.abs(o-1.5707963267948966)<$.A().a)){k.dx=1.5707963267948966
o=new D.y("coneAngle",o,1.5707963267948966)
o.b=!0
k.X(o)}o=$.m_
if(o==null){o=new V.ct(1,0.00390625,0.0000152587890625,0)
$.m_=o
i=o}else i=o
if(!J.D(k.e,i)){p=k.e
k.e=i
o=new D.y("shadowAdjust",p,i)
o.b=!0
k.X(o)}o=k.dy
if(!(Math.abs(o-0)<$.A().a)){k.dy=0
o=new D.y("attenuation0",o,0)
o.b=!0
k.X(o)}o=k.fr
if(!(Math.abs(o-0.1)<$.A().a)){k.fr=0.1
o=new D.y("attenuation1",o,0.1)
o.b=!0
k.X(o)}o=k.fx
if(!(Math.abs(o-0)<$.A().a)){k.fx=0
o=new D.y("attenuation2",o,0)
o.b=!0
k.X(o)}if(k.db){k.db=!1
o=new D.y("enableCutOff",!0,!1)
o.b=!0
k.X(o)}h=O.lw()
h.dx.n(0,k)
o=h.r
o.saD(0,new V.W(0.1,0.1,0.1))
o=h.x
o.saD(0,new V.W(0.7,0.7,0.7))
o=h.z
o.saD(0,new V.W(0.3,0.3,0.3))
o=h.z
o.cT(new A.a0(!0,!1,!1))
o.cU(100)
g=E.kF()
g.sag(0,F.mr())
f=E.kF()
f.saR(U.b1(V.kP(5,5,5,1)))
o=F.l6(1,a3,a3,1)
o.c4()
f.sag(0,o)
e=U.fH()
e.n(0,U.lT(!1,s.x))
e.n(0,U.b1(V.lx(3.141592653589793)))
e.n(0,U.b1(V.kQ(0,0,5)))
d=E.kF()
o=U.fH()
o.n(0,U.b1(V.kP(0.1,0.1,0.1,1)))
o.n(0,m)
d.saR(o)
d.sag(0,F.k4(0,!1,!0,40,1))
o=O.lw()
l=o.f
l.saD(0,new V.W(1,1,1))
d.saT(o)
c=M.lt()
c.saT(h)
c.e.n(0,g)
c.e.n(0,f)
c.e.n(0,d)
c.b.saR(e)
o=U.fH()
o.n(0,U.b1(V.kP(-1,1,-1,1)))
l=new U.c5()
l.c=V.bx()
l.d=0
l.a=m
m.gu().n(0,l.gaK())
j=new D.y("mover",a3,l.a)
j.b=!0
l.U(j)
o.n(0,l)
b=Math.cos(3.141592653589793)
a=Math.sin(3.141592653589793)
o.n(0,U.b1(V.aw(b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1)))
o.n(0,U.b1(V.kQ(0,0,2)))
a0=X.lA(0.5,o)
a1=M.lt()
a1.sdW(0,r)
o=new O.fj()
o.b=1
o.c=10
o.f=o.e=o.d=!1
if(!(Math.abs(0)<$.A().a)){l=new D.y("start",1,1)
l.b=!0
o.a3(l)}l=o.c
if(!(Math.abs(l-20)<$.A().a)){o.c=20
l=new D.y("stop",l,20)
l.b=!0
o.a3(l)}if(!o.f){o.f=!0
l=new D.y("focus",!1,!0)
l.b=!0
o.a3(l)}a1.saT(o)
a1.e.n(0,g)
a1.e.n(0,f)
a1.sd9(a0)
o=M.aA
l=H.b([a1,c],[o])
j=new M.cY()
j.bd(o)
j.e=!0
j.f=!1
j.r=null
j.aW(j.gfD(),j.gfF())
j.a8(0,l)
o=s.d
if(o!==j){if(o!=null)o.gu().K(0,s.gcs())
s.d=j
j.gu().n(0,s.gcs())
s.ct()}o=new V.hM("shapes")
u=u.getElementById("shapes")
o.c=u
if(u==null)H.r("Failed to find shapes for RadioGroup")
o.aO(0,"Cube",new V.ki(g))
o.aO(0,"Cylinder",new V.kj(g))
o.aO(0,"Bar",new V.kk(g))
o.aO(0,"Cone",new V.kl(g))
o.aO(0,"Sphere",new V.km(g))
o.d0(0,"Toroid",new V.kn(g),!0)
o.aO(0,"Knot",new V.ko(g))
u=s.Q
if(u==null)u=s.Q=D.J()
o=u.b
u=o==null?u.b=H.b([],[{func:1,ret:-1,args:[D.X]}]):o
u.push(new V.kp(a4,h))
V.pf(s)},
ki:function ki(a){this.a=a},
kj:function kj(a){this.a=a},
kk:function kk(a){this.a=a},
kl:function kl(a){this.a=a},
km:function km(a){this.a=a},
kn:function kn(a){this.a=a},
ko:function ko(a){this.a=a},
kp:function kp(a,b){this.a=a
this.b=b}},U={
lp:function(){var u=new U.f7()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
b1:function(a){var u=new U.cZ()
u.a=a
return u},
fH:function(){var u=new U.c2()
u.bd(U.ai)
u.aW(u.gem(),u.gfz())
u.e=null
u.f=V.bx()
u.r=0
return u},
lT:function(a,b){var u,t,s,r=new U.dN(),q=U.lp()
q.se2(0,!0)
q.sdB(6.283185307179586)
q.sdD(0)
q.sa5(0,0)
q.sdC(100)
q.sY(0)
q.sdc(0.5)
r.b=q
u=r.gaK()
q.gu().n(0,u)
q=U.lp()
q.se2(0,!0)
q.sdB(6.283185307179586)
q.sdD(0)
q.sa5(0,0)
q.sdC(100)
q.sY(0)
q.sdc(0.5)
r.c=q
q.gu().n(0,u)
r.d=null
r.r=r.f=r.e=!1
r.y=r.x=2.5
r.Q=4
r.ch=r.cx=!1
r.db=r.cy=0
r.dx=null
r.dy=0
r.fx=r.fr=null
t=new X.by(a,!1,!1)
s=r.d
r.d=t
q=new D.y("modifiers",s,t)
q.b=!0
r.U(q)
q=r.f
if(q!==!1){r.f=!1
q=new D.y("invertX",q,!1)
q.b=!0
r.U(q)}q=r.r
if(q!==!1){r.r=!1
q=new D.y("invertY",q,!1)
q.b=!0
r.U(q)}r.hf(b)
return r},
f7:function f7(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cZ:function cZ(){this.b=this.a=null},
c2:function c2(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
c5:function c5(){var _=this
_.d=_.c=_.b=_.a=null},
ai:function ai(){},
dN:function dN(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
lt:function(){var u,t,s=new M.d3()
s.a=!0
u=O.kC(E.aP)
s.e=u
u.aW(s.gf2(),s.gf4())
s.y=s.x=s.r=s.f=null
t=X.n5(null)
s.sd9(null)
s.sdW(0,t)
s.saT(null)
return s},
cY:function cY(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
d3:function d3(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
aA:function aA(){}},A={
nk:function(a,b){var u=a.b3,t=new A.h8(b,u)
t.cr(b,u)
t.ef(a,b)
return t},
nl:function(a,b,c,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="MaterialLight_"+a2.gas(a2)+a3.gas(a3)+a4.gas(a4)+a5.gas(a5)+a6.gas(a6)+a7.gas(a7)+a8.gas(a8)+a9.gas(a9)+b0.gas(b0)+"_"
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
e=$.ar()
if(j){u=$.b_()
e=new Z.bj(e.a|u.a)}if(i){u=$.aZ()
e=new Z.bj(e.a|u.a)}if(h){u=$.aY()
e=new Z.bj(e.a|u.a)}return new A.hb(a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,s,o,k,o,r,g,!0,f,!1,m,r,l,j,i,!1,!1,h,!1,!1,c,!1,a1,d.charCodeAt(0)==0?d:d,e)},
k0:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
k1:function(a,b,c){var u
A.k0(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.eP(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
or:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.k0(b,t,"emission")
t=b.a+="\n"
t+="vec3 emissionColor()\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   return emissionClr;\n"
b.a=t}t+="}\n"
b.a=t
b.a=t+"\n"},
on:function(a,b){var u,t=a.b
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.k1(b,t,"ambient")
b.a+="\n"},
op:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.k1(b,t,"diffuse")
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
os:function(a,b){var u,t=a.d
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.k1(b,t,"invDiffuse")
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
oy:function(a,b){var u,t=a.e
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.k1(b,t,"specular")
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
ou:function(a,b){var u,t,s
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
ow:function(a,b){var u,t=a.r,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.k0(b,t,"reflect")
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
ox:function(a,b){var u,t=a.x,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.k0(b,t,"refract")
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
oo:function(a,b,c){var u,t,s,r,q,p,o=b.b
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
if(typeof u!=="number")return u.ae()
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
oq:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
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
if(typeof u!=="number")return u.ae()
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
ov:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
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
if(typeof u!=="number")return u.ae()
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
oz:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
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
if(typeof u!=="number")return u.ae()
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
ot:function(a,b){var u,t
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
oA:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.S("")
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
A.or(a,j)
A.on(a,j)
A.op(a,j)
A.os(a,j)
A.oy(a,j)
t=a.db
if(t){r=j.a+="// === Environmental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.ow(a,j)
A.ox(a,j)}A.ou(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.l)(q),++o)A.oo(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.l)(q),++o)A.oq(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.l)(q),++o)A.ov(a,q[o],j)
for(q=a.cx,p=q.length,o=0;o<q.length;q.length===p||(0,H.l)(q),++o)A.oz(a,q[o],j)
A.ot(a,j)}q=j.a+="// === Main ===\n"
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
j.a+=m+(r[0].toUpperCase()+C.a.ab(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.l)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.ab(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.l)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.ab(r,1))+"Values(norm);\n"}for(u=a.cx,t=u.length,o=0;o<u.length;u.length===t||(0,H.l)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.ab(r,1))+"Values(norm);\n"}if(a.cy<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)u=!1
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
oB:function(a,b){var u,t,s
if(!a.ry)return
u=b.a+="struct BendingValue\n"
u+="{\n"
b.a=u
u+="   mat4 mat;\n"
b.a=u
u+="};\n"
b.a=u
b.a=u+"uniform int bendMatCount;\n"
u=b.a+="uniform BendingValue bendValues["+a.bj+"];\n"
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
oD:function(a,b){var u
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
oC:function(a,b){var u
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
oF:function(a,b){var u,t
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
oG:function(a,b){var u,t
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
oE:function(a,b){var u
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
oH:function(a,b){var u
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
return a[0].toUpperCase()+C.a.ab(a,1)},
kV:function(a,b,c,d,e){var u=new A.iB(a,c,e)
u.f=d
P.nh(d,0,P.u)
return u},
cT:function cT(a,b,c){this.a=a
this.b=b
this.c=c},
eU:function eU(a){this.a=a},
a0:function a0(a,b,c){this.a=a
this.b=b
this.c=c},
fk:function fk(a,b){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
h8:function h8(a,b){var _=this
_.it=_.is=_.bk=_.b3=_.bj=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iG=_.iF=_.iE=_.c2=_.c1=_.c0=_.c_=_.bZ=_.bY=_.bX=_.bW=_.iD=_.iC=_.dm=_.iB=_.iA=_.dl=_.dk=_.iz=_.iy=_.dj=_.di=_.ix=_.iw=_.dh=_.iv=_.iu=_.dg=null
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
hb:function hb(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.bj=b3
_.b3=b4
_.bk=b5},
cn:function cn(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
co:function co(a,b,c,d,e,f){var _=this
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
du:function du(){},
dJ:function dJ(){},
iG:function iG(a){this.a=a},
bh:function bh(a,b,c){this.a=a
this.c=b
this.d=c},
iD:function iD(a,b,c){this.a=a
this.c=b
this.d=c},
iE:function iE(a,b,c){this.a=a
this.c=b
this.d=c},
iF:function iF(a,b,c){this.a=a
this.c=b
this.d=c},
iB:function iB(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
T:function T(a,b,c){this.a=a
this.c=b
this.d=c},
iC:function iC(a,b,c){this.a=a
this.c=b
this.d=c},
G:function G(a,b,c){this.a=a
this.c=b
this.d=c},
cm:function cm(a,b,c){this.a=a
this.c=b
this.d=c},
iH:function iH(a,b,c){this.a=a
this.c=b
this.d=c},
cp:function cp(a,b,c){this.a=a
this.c=b
this.d=c},
a3:function a3(a,b,c){this.a=a
this.c=b
this.d=c},
bF:function bF(a,b,c){this.a=a
this.c=b
this.d=c},
bG:function bG(a,b,c){this.a=a
this.c=b
this.d=c}},F={
l6:function(a,b,c,d){var u=F.kS()
F.cH(u,b,c,d,a,1,0,0,1)
F.cH(u,b,c,d,a,0,1,0,3)
F.cH(u,b,c,d,a,0,0,1,2)
F.cH(u,b,c,d,a,-1,0,0,0)
F.cH(u,b,c,d,a,0,-1,0,0)
F.cH(u,b,c,d,a,0,0,-1,3)
u.aw()
return u},
jW:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cH:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.B(h,g+a1,f+a2)
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
j.d=i}m=F.jW(i)
l=F.jW(h)
k=F.ld(d,a0,new F.jV(j,F.jW(g),F.jW(f),l,m,c),b)
if(k!=null)a.b6(k)},
mh:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(e<3)return
u=F.kS()
t=b?-1:1
s=-6.283185307179586/e
r=H.b([],[F.bi])
q=u.a
p=new V.B(0,0,t)
p=p.v(0,Math.sqrt(p.D(p)))
r.push(q.hc(new V.bf(a,-1,-1,-1),new V.ag(1,1,1,1),new V.R(0,0,c),new V.B(0,0,t),new V.a8(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.w(k)
j=new V.B(m,l,t).v(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.dO(new V.bf(a,-1,-1,-1),null,new V.ag(i,g,h,1),new V.R(m*k,l*k,c),new V.B(0,0,t),new V.a8(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.n(0,f)
r.push(f)}u.d.ha(r)
return u},
k4:function(a,b,c,d,e){return F.oW(b,c,1,new F.k5(a,e),d)},
oW:function(a,b,c,d,e){var u
if(e<3)return
if(c<1)return
u=F.ld(c,e,new F.k7(d),null)
if(u==null)return
u.aw()
u.bO()
if(b)u.b6(F.mh(3,!1,1,new F.k8(d),e))
if(a)u.b6(F.mh(1,!0,-1,new F.k9(d),e))
return u},
pg:function(a,b){var u,t,s={}
s.a=u
s.a=null
s.a=new F.ks()
t=F.l6(a,null,new F.kt(s,1),b)
t.bO()
return t},
mr:function(){return F.mg(15,30,0.5,1,new F.kv())},
p9:function(){return F.mg(12,120,0.3,1,new F.kh(3,2))},
mg:function(a,b,c,d,e){var u=F.ld(a,b,new F.k6(e,d,b,c),null)
if(u==null)return
u.aw()
u.bO()
return u},
ld:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.kS()
t=H.b([],[F.bi])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.dO(g,g,new V.ag(p,0,0,1),g,g,new V.a8(r,1),g,g,0)
q.n(0,o)
c.$3(o,r,0)
t.push(o.bV(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.dO(g,g,new V.ag(j,i,h,1),g,g,new V.a8(r,m),g,g,0)
k.n(0,o)
c.$3(o,r,n)
t.push(o.bV(d))}}u.d.hb(a+1,b+1,t)
return u},
c0:function(a,b,c){var u=new F.b3(),t=a.a
if(t==null)H.r(P.v("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.r(P.v("May not create a face with vertices attached to different shapes."))
u.bM(a)
u.bN(b)
u.fY(c)
u.a.a.d.b.push(u)
u.a.a.a_()
return u},
nd:function(a,b){var u=new F.c7(),t=a.a
if(t==null)H.r(P.v("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.r(P.v("May not create a line with vertices attached to different shapes."))
u.bM(a)
u.bN(b)
u.a.a.c.b.push(u)
u.a.a.a_()
return u},
kS:function(){var u=new F.hY(),t=new F.iZ(u)
t.b=!1
t.c=H.b([],[F.bi])
u.a=t
t=new F.i0(u)
t.b=H.b([],[F.cf])
u.b=t
t=new F.i_(u)
t.b=H.b([],[F.c7])
u.c=t
t=new F.hZ(u)
t.b=H.b([],[F.b3])
u.d=t
u.e=null
return u},
dO:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.bi(),r=new F.j6()
r.b=H.b([],[F.cf])
s.b=r
r=new F.j2()
u=[F.c7]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.j_()
u=[F.b3]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.mF()
s.e=0
r=$.ar()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.b_().a)!==0?e:t
s.x=(u&$.aZ().a)!==0?b:t
s.y=(u&$.bn().a)!==0?f:t
s.z=(u&$.bo().a)!==0?g:t
s.Q=(u&$.mG().a)!==0?c:t
s.ch=(u&$.bT().a)!==0?i:0
s.cx=(u&$.aY().a)!==0?a:t
return s},
jV:function jV(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
k5:function k5(a,b){this.a=a
this.b=b},
k7:function k7(a){this.a=a},
k8:function k8(a){this.a=a},
k9:function k9(a){this.a=a},
ks:function ks(){},
kt:function kt(a,b){this.a=a
this.b=b},
kv:function kv(){},
kh:function kh(a,b){this.a=a
this.b=b},
k6:function k6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b3:function b3(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fx:function fx(){},
i5:function i5(){},
c7:function c7(){this.b=this.a=null},
fW:function fW(){},
iA:function iA(){},
cf:function cf(){this.a=null},
hY:function hY(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hZ:function hZ(a){this.a=a
this.b=null},
i_:function i_(a){this.a=a
this.b=null},
i0:function i0(a){this.a=a
this.b=null},
bi:function bi(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
j8:function j8(a){this.a=a},
j7:function j7(a){this.a=a},
iZ:function iZ(a){this.a=a
this.c=this.b=null},
j_:function j_(){this.d=this.c=this.b=null},
j0:function j0(a,b){this.a=a
this.b=b},
j1:function j1(a,b){this.a=a
this.b=b},
j2:function j2(){this.c=this.b=null},
j4:function j4(){},
j3:function j3(){},
j5:function j5(){},
hB:function hB(){},
j6:function j6(){this.b=null}},T={
kT:function(a){var u=new T.im()
u.a=0
u.b=a
u.d=u.c=!1
u.x=u.r=u.f=u.e=0
return u},
dC:function dC(){},
il:function il(){},
im:function im(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
io:function io(a){var _=this
_.a=a
_.e=_.d=_.b=null},
ip:function ip(a,b,c,d,e,f,g){var _=this
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
H.kK.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gI:function(a){return H.cg(a)},
i:function(a){return"Instance of '"+H.e(H.ch(a))+"'"}}
J.fQ.prototype={
i:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$iaI:1}
J.d9.prototype={
p:function(a,b){return null==b},
i:function(a){return"null"},
gI:function(a){return 0}}
J.da.prototype={
gI:function(a){return 0},
i:function(a){return String(a)},
$inb:1}
J.hG.prototype={}
J.bH.prototype={}
J.b8.prototype={
i:function(a){var u=a[$.mt()]
if(u==null)return this.ec(a)
return"JavaScript function for "+H.e(J.a5(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.b6.prototype={
cd:function(a,b){if(!!a.fixed$length)H.r(P.z("removeAt"))
if(b<0||b>=a.length)throw H.c(P.dr(b,null))
return a.splice(b,1)[0]},
K:function(a,b){var u
if(!!a.fixed$length)H.r(P.z("remove"))
for(u=0;u<a.length;++u)if(J.D(a[u],b)){a.splice(u,1)
return!0}return!1},
a8:function(a,b){var u,t
if(!!a.fixed$length)H.r(P.z("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.l)(b),++t)a.push(b[t])},
G:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.c(P.aN(a))}},
j:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.d(r,u)
r[u]=t}return r.join(b)},
hK:function(a){return this.j(a,"")},
hC:function(a,b,c){var u,t,s=a.length
for(u=b,t=0;t<s;++t){u=c.$2(u,a[t])
if(a.length!==s)throw H.c(P.aN(a))}return u},
hD:function(a,b,c){return this.hC(a,b,c,null)},
hB:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.c(P.aN(a))}throw H.c(H.fO())},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
e8:function(a,b,c){if(b<0||b>a.length)throw H.c(P.Z(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.c(P.Z(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.aJ(a,0)])
return H.b(a.slice(b,c),[H.aJ(a,0)])},
ghA:function(a){if(a.length>0)return a[0]
throw H.c(H.fO())},
gax:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.fO())},
d4:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.c(P.aN(a))}return!1},
aX:function(a,b){if(!!a.immutable$list)H.r(P.z("sort"))
H.nG(a,b==null?J.ok():b)},
e7:function(a){return this.aX(a,null)},
L:function(a,b){var u
for(u=0;u<a.length;++u)if(J.D(a[u],b))return!0
return!1},
i:function(a){return P.kH(a,"[","]")},
gP:function(a){return new J.a_(a,a.length)},
gI:function(a){return H.cg(a)},
gl:function(a){return a.length},
sl:function(a,b){var u="newLength"
if(!!a.fixed$length)H.r(P.z("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.ky(b,u,null))
if(b<0)throw H.c(P.Z(b,0,null,u,null))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bQ(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.r(P.z("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bQ(a,b))
a[b]=c},
$iq:1,
$ii:1,
$in:1}
J.kJ.prototype={}
J.a_.prototype={
gC:function(a){return this.d},
q:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.l(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.c6.prototype={
aQ:function(a,b){var u
if(typeof b!=="number")throw H.c(H.ad(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbm(b)
if(this.gbm(a)===u)return 0
if(this.gbm(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbm:function(a){return a===0?1/a<0:a<0},
ie:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.z(""+a+".toInt()"))},
c5:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.z(""+a+".floor()"))},
a1:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.z(""+a+".round()"))},
dZ:function(a,b){var u
if(b>20)throw H.c(P.Z(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbm(a))return"-"+u
return u},
b9:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.Z(b,2,36,"radix",null))
u=a.toString(b)
if(C.a.V(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.r(P.z("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.d(t,1)
u=t[1]
if(3>=s)return H.d(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.a.B("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gI:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
bb:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
ee:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cW(a,b)},
a7:function(a,b){return(a|0)===a?a/b|0:this.cW(a,b)},
cW:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.z("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
aN:function(a,b){var u
if(a>0)u=this.cV(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
h1:function(a,b){if(b<0)throw H.c(H.ad(b))
return this.cV(a,b)},
cV:function(a,b){return b>31?0:a>>>b},
$iK:1,
$iab:1}
J.d8.prototype={$iu:1}
J.d7.prototype={}
J.b7.prototype={
V:function(a,b){if(b<0)throw H.c(H.bQ(a,b))
if(b>=a.length)H.r(H.bQ(a,b))
return a.charCodeAt(b)},
E:function(a,b){if(b>=a.length)throw H.c(H.bQ(a,b))
return a.charCodeAt(b)},
A:function(a,b){if(typeof b!=="string")throw H.c(P.ky(b,null,null))
return a+b},
aS:function(a,b,c,d){var u,t
c=P.aV(b,c,a.length)
if(typeof c!=="number"||Math.floor(c)!==c)H.r(H.ad(c))
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
aa:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.Z(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a6:function(a,b){return this.aa(a,b,0)},
t:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.ad(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.S()
if(b<0)throw H.c(P.dr(b,null))
if(b>c)throw H.c(P.dr(b,null))
if(c>a.length)throw H.c(P.dr(c,null))
return a.substring(b,c)},
ab:function(a,b){return this.t(a,b,null)},
ii:function(a){return a.toLowerCase()},
B:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.M)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
am:function(a,b){var u=b-a.length
if(u<=0)return a
return this.B(" ",u)+a},
bl:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.Z(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
du:function(a,b){return this.bl(a,b,0)},
aQ:function(a,b){var u
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
h:function(a,b){return C.a.V(this.a,b)},
$aq:function(){return[P.u]},
$ax:function(){return[P.u]},
$ai:function(){return[P.u]},
$an:function(){return[P.u]}}
H.q.prototype={}
H.dd.prototype={
gP:function(a){return new H.b9(this,this.gl(this))},
bu:function(a,b){return this.eb(0,b)}}
H.b9.prototype={
gC:function(a){return this.d},
q:function(){var u,t=this,s=t.a,r=J.bm(s),q=r.gl(s)
if(t.b!=q)throw H.c(P.aN(s))
u=t.c
if(typeof q!=="number")return H.w(q)
if(u>=q){t.d=null
return!1}t.d=r.J(s,u);++t.c
return!0}}
H.c9.prototype={
gP:function(a){return new H.h6(J.aK(this.a),this.b)},
gl:function(a){return J.af(this.a)},
J:function(a,b){return this.b.$1(J.eQ(this.a,b))},
$ai:function(a,b){return[b]}}
H.fr.prototype={$iq:1,
$aq:function(a,b){return[b]}}
H.h6.prototype={
q:function(){var u=this,t=u.b
if(t.q()){u.a=u.c.$1(t.gC(t))
return!0}u.a=null
return!1},
gC:function(a){return this.a}}
H.h7.prototype={
gl:function(a){return J.af(this.a)},
J:function(a,b){return this.b.$1(J.eQ(this.a,b))},
$aq:function(a,b){return[b]},
$add:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.cu.prototype={
gP:function(a){return new H.ja(J.aK(this.a),this.b)}}
H.ja.prototype={
q:function(){var u,t
for(u=this.a,t=this.b;u.q();)if(t.$1(u.gC(u)))return!0
return!1},
gC:function(a){var u=this.a
return u.gC(u)}}
H.d4.prototype={}
H.iL.prototype={
m:function(a,b,c){throw H.c(P.z("Cannot modify an unmodifiable list"))}}
H.dK.prototype={}
H.f9.prototype={
i:function(a){return P.kO(this)},
m:function(a,b,c){return H.n0()},
$iQ:1}
H.fa.prototype={
gl:function(a){return this.a},
bT:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.bT(0,b))return
return this.cF(b)},
cF:function(a){return this.b[a]},
G:function(a,b){var u,t,s,r=this.c
for(u=r.length,t=0;t<u;++t){s=r[t]
b.$2(s,this.cF(s))}}}
H.iy.prototype={
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
H.fT.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.iK.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kw.prototype={
$1:function(a){if(!!J.O(a).$ibt)if(a.$thrownJsError==null)a.$thrownJsError=this.a
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
gil:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.ii.prototype={}
H.i9.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cN(u)+"'"}}
H.bV.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bV))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gI:function(a){var u,t=this.c
if(t==null)u=H.cg(this.a)
else u=typeof t!=="object"?J.cR(t):H.cg(t)
return(u^H.cg(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.ch(u))+"'")}}
H.f4.prototype={
i:function(a){return this.a}}
H.hV.prototype={
i:function(a){return"RuntimeError: "+H.e(this.a)}}
H.I.prototype={
gl:function(a){return this.a},
ghJ:function(a){return this.a===0},
ga0:function(a){return new H.fY(this,[H.aJ(this,0)])},
gik:function(a){var u=this
return H.nj(u.ga0(u),new H.fS(u),H.aJ(u,0),H.aJ(u,1))},
bT:function(a,b){var u=this.b
if(u==null)return!1
return this.eC(u,b)},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.be(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.be(r,b)
s=t==null?null:t.b
return s}else return q.hH(b)},
hH:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.cH(r,s.dw(a))
t=s.dz(u,a)
if(t<0)return
return u[t].b},
m:function(a,b,c){var u,t,s=this
if(typeof b==="string"){u=s.b
s.cv(u==null?s.b=s.bF():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cv(t==null?s.c=s.bF():t,b,c)}else s.hI(b,c)},
hI:function(a,b){var u,t,s,r=this,q=r.d
if(q==null)q=r.d=r.bF()
u=r.dw(a)
t=r.cH(q,u)
if(t==null)r.bK(q,u,[r.bG(a,b)])
else{s=r.dz(t,a)
if(s>=0)t[s].b=b
else t.push(r.bG(a,b))}},
G:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.c(P.aN(u))
t=t.c}},
cv:function(a,b,c){var u=this.be(a,b)
if(u==null)this.bK(a,b,this.bG(b,c))
else u.b=c},
eN:function(){this.r=this.r+1&67108863},
bG:function(a,b){var u,t=this,s=new H.fX(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.eN()
return s},
dw:function(a){return J.cR(a)&0x3ffffff},
dz:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.D(a[t].a,b))return t
return-1},
i:function(a){return P.kO(this)},
be:function(a,b){return a[b]},
cH:function(a,b){return a[b]},
bK:function(a,b,c){a[b]=c},
eG:function(a,b){delete a[b]},
eC:function(a,b){return this.be(a,b)!=null},
bF:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bK(t,u,t)
this.eG(t,u)
return t}}
H.fS.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.aJ(u,1),args:[H.aJ(u,0)]}}}
H.fX.prototype={}
H.fY.prototype={
gl:function(a){return this.a.a},
gP:function(a){var u=this.a,t=new H.fZ(u,u.r)
t.c=u.e
return t}}
H.fZ.prototype={
gC:function(a){return this.d},
q:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.aN(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.kd.prototype={
$1:function(a){return this.a(a)},
$S:9}
H.ke.prototype={
$2:function(a,b){return this.a(a,b)}}
H.kf.prototype={
$1:function(a){return this.a(a)}}
H.fR.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$inz:1}
H.cc.prototype={$icc:1}
H.bc.prototype={$ibc:1}
H.di.prototype={
gl:function(a){return a.length},
$iC:1,
$aC:function(){}}
H.cd.prototype={
h:function(a,b){H.aH(b,a,a.length)
return a[b]},
m:function(a,b,c){H.aH(b,a,a.length)
a[b]=c},
$iq:1,
$aq:function(){return[P.K]},
$ax:function(){return[P.K]},
$ii:1,
$ai:function(){return[P.K]},
$in:1,
$an:function(){return[P.K]}}
H.dj.prototype={
m:function(a,b,c){H.aH(b,a,a.length)
a[b]=c},
$iq:1,
$aq:function(){return[P.u]},
$ax:function(){return[P.u]},
$ii:1,
$ai:function(){return[P.u]},
$in:1,
$an:function(){return[P.u]}}
H.hu.prototype={
h:function(a,b){H.aH(b,a,a.length)
return a[b]}}
H.hv.prototype={
h:function(a,b){H.aH(b,a,a.length)
return a[b]}}
H.hw.prototype={
h:function(a,b){H.aH(b,a,a.length)
return a[b]}}
H.hx.prototype={
h:function(a,b){H.aH(b,a,a.length)
return a[b]}}
H.hy.prototype={
h:function(a,b){H.aH(b,a,a.length)
return a[b]}}
H.dk.prototype={
gl:function(a){return a.length},
h:function(a,b){H.aH(b,a,a.length)
return a[b]}}
H.ce.prototype={
gl:function(a){return a.length},
h:function(a,b){H.aH(b,a,a.length)
return a[b]},
$ice:1,
$ibE:1}
H.cy.prototype={}
H.cz.prototype={}
H.cA.prototype={}
H.cB.prototype={}
P.jc.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:17}
P.jb.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.jd.prototype={
$0:function(){this.a.$0()}}
P.je.prototype={
$0:function(){this.a.$0()}}
P.eu.prototype={
er:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bP(new P.jL(this,b),0),a)
else throw H.c(P.z("`setTimeout()` not found."))},
es:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bP(new P.jK(this,a,Date.now(),b),0),a)
else throw H.c(P.z("Periodic timer."))},
$idE:1}
P.jL.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.jK.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.ee(u,q)}s.c=r
t.d.$1(s)}}
P.bI.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.e(this.a)+")"}}
P.bJ.prototype={
gC:function(a){var u=this.c
if(u==null)return this.b
return u.gC(u)},
q:function(){var u,t,s,r,q=this
for(;!0;){u=q.c
if(u!=null)if(u.q())return!0
else q.c=null
t=function(a,b,c){var p,o=b
while(true)try{return a(o,p)}catch(n){p=n
o=c}}(q.a,0,1)
if(t instanceof P.bI){s=t.b
if(s===2){u=q.d
if(u==null||u.length===0){q.b=null
return!1}if(0>=u.length)return H.d(u,-1)
q.a=u.pop()
continue}else{u=t.a
if(s===3)throw u
else{r=J.aK(u)
if(!!r.$ibJ){u=q.d
if(u==null)u=q.d=[]
u.push(q.a)
q.a=r.a
continue}else{q.c=r
continue}}}}else{q.b=t
return!0}}return!1}}
P.jH.prototype={
gP:function(a){return new P.bJ(this.a())}}
P.dR.prototype={}
P.dz.prototype={}
P.ic.prototype={}
P.dE.prototype={}
P.jU.prototype={}
P.k2.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dn():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u}}
P.js.prototype={
i9:function(a){var u,t,s,r=null
try{if(C.f===$.aq){a.$0()
return}P.oJ(r,r,this,a)}catch(s){u=H.ae(s)
t=H.l8(s)
P.ma(r,r,this,u,t)}},
ia:function(a,b){var u,t,s,r=null
try{if(C.f===$.aq){a.$1(b)
return}P.oK(r,r,this,a,b)}catch(s){u=H.ae(s)
t=H.l8(s)
P.ma(r,r,this,u,t)}},
ib:function(a,b){return this.ia(a,b,null)},
hk:function(a){return new P.jt(this,a)},
d6:function(a,b){return new P.ju(this,a,b)}}
P.jt.prototype={
$0:function(){return this.a.i9(this.b)}}
P.ju.prototype={
$1:function(a){return this.a.ib(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jp.prototype={
gP:function(a){var u=new P.e5(this,this.r)
u.c=this.e
return u},
gl:function(a){return this.a},
L:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.eB(b)
return t}},
eB:function(a){var u=this.d
if(u==null)return!1
return this.bC(this.cG(u,a),a)>=0},
n:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cz(u==null?s.b=P.kZ():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cz(t==null?s.c=P.kZ():t,b)}else return s.eu(0,b)},
eu:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.kZ()
u=s.cB(b)
t=r[u]
if(t==null)r[u]=[s.bz(b)]
else{if(s.bC(t,b)>=0)return!1
t.push(s.bz(b))}return!0},
K:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fO(this.c,b)
else return this.fN(0,b)},
fN:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cG(r,b)
t=s.bC(u,b)
if(t<0)return!1
s.cY(u.splice(t,1)[0])
return!0},
cz:function(a,b){if(a[b]!=null)return!1
a[b]=this.bz(b)
return!0},
fO:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.cY(u)
delete a[b]
return!0},
cA:function(){this.r=1073741823&this.r+1},
bz:function(a){var u,t=this,s=new P.jq(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cA()
return s},
cY:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cA()},
cB:function(a){return J.cR(a)&1073741823},
cG:function(a,b){return a[this.cB(b)]},
bC:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.D(a[t].a,b))return t
return-1}}
P.jq.prototype={}
P.e5.prototype={
gC:function(a){return this.d},
q:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.aN(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fN.prototype={}
P.h_.prototype={
$2:function(a,b){this.a.m(0,a,b)},
$S:3}
P.h0.prototype={$iq:1,$ii:1,$in:1}
P.x.prototype={
gP:function(a){return new H.b9(a,this.gl(a))},
J:function(a,b){return this.h(a,b)},
ih:function(a,b){var u,t,s=this,r=H.b([],[H.p1(s,a,"x",0)])
C.b.sl(r,s.gl(a))
u=0
while(!0){t=s.gl(a)
if(typeof t!=="number")return H.w(t)
if(!(u<t))break
t=s.h(a,u)
if(u>=r.length)return H.d(r,u)
r[u]=t;++u}return r},
ig:function(a){return this.ih(a,!0)},
hy:function(a,b,c,d){var u
P.aV(b,c,this.gl(a))
for(u=b;u<c;++u)this.m(a,u,d)},
i:function(a){return P.kH(a,"[","]")}}
P.h3.prototype={}
P.h4.prototype={
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
for(u=J.aK(this.ga0(a));u.q();){t=u.gC(u)
b.$2(t,this.h(a,t))}},
gl:function(a){return J.af(this.ga0(a))},
i:function(a){return P.kO(a)},
$iQ:1}
P.jM.prototype={
m:function(a,b,c){throw H.c(P.z("Cannot modify unmodifiable map"))}}
P.h5.prototype={
h:function(a,b){return J.bU(this.a,b)},
m:function(a,b,c){J.kx(this.a,b,c)},
G:function(a,b){J.lh(this.a,b)},
gl:function(a){return J.af(this.a)},
i:function(a){return J.a5(this.a)},
$iQ:1}
P.dL.prototype={}
P.jw.prototype={
a8:function(a,b){var u
for(u=J.aK(b);u.q();)this.n(0,u.gC(u))},
i:function(a){return P.kH(this,"{","}")},
J:function(a,b){var u,t,s
P.lG(b,"index")
for(u=P.o0(this,this.r),t=0;u.q();){s=u.d
if(b===t)return s;++t}throw H.c(P.M(b,this,"index",null,t))},
$iq:1,
$ii:1}
P.e6.prototype={}
P.eA.prototype={}
P.f0.prototype={
hO:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.aV(a0,a1,b.length)
u=$.mI()
if(typeof a1!=="number")return H.w(a1)
t=a0
s=t
r=null
q=-1
p=-1
o=0
for(;t<a1;t=n){n=t+1
m=C.a.E(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.kc(C.a.E(b,n))
j=H.kc(C.a.E(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.d(u,i)
h=u[i]
if(h>=0){i=C.a.V("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.S("")
g=r.a+=C.a.t(b,s,t)
r.a=g+H.bA(m)
s=n
continue}}throw H.c(P.U("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.a.t(b,s,a1)
f=g.length
if(q>=0)P.ll(b,p,a1,q,o,f)
else{e=C.c.bb(f-1,4)+1
if(e===1)throw H.c(P.U(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.a.aS(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.ll(b,p,a1,q,o,d)
else{e=C.c.bb(d,4)
if(e===1)throw H.c(P.U(c,b,a1))
if(e>1)b=C.a.aS(b,a1,a1,e===2?"==":"=")}return b}}
P.f1.prototype={}
P.f6.prototype={}
P.fb.prototype={}
P.ft.prototype={}
P.fL.prototype={
i:function(a){return this.a}}
P.fK.prototype={
eD:function(a,b,c){var u,t,s,r,q,p,o=null
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
if(c>b)q.a+=J.mT(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.iT.prototype={
ghx:function(){return C.N}}
P.iV.prototype={
bU:function(a){var u,t,s,r=P.aV(0,null,a.length)
if(typeof r!=="number")return r.M()
u=r-0
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.jS(t)
if(s.eI(a,0,r)!==r)s.d_(J.mP(a,r-1),0)
return new Uint8Array(t.subarray(0,H.oh(0,s.b,t.length)))}}
P.jS.prototype={
d_:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
eI:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.a.V(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.a.E(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.d_(r,C.a.E(a,p)))s=p}else if(r<=2047){q=n.b
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
P.iU.prototype={
bU:function(a){var u,t,s,r,q,p,o,n,m=P.nM(!1,a,0,null)
if(m!=null)return m
u=P.aV(0,null,J.af(a))
t=P.mc(a,0,u)
if(t>0){s=P.ck(a,0,t)
if(t===u)return s
r=new P.S(s)
q=t
p=!1}else{q=0
r=null
p=!0}if(r==null)r=new P.S("")
o=new P.jR(!1,r)
o.c=p
o.hn(a,q,u)
if(o.e>0){H.r(P.U("Unfinished UTF-8 octet sequence",a,u))
r.a+=H.bA(65533)
o.f=o.e=o.d=0}n=r.a
return n.charCodeAt(0)==0?n:n}}
P.jR.prototype={
hn:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=this,k="Bad UTF-8 encoding 0x",j=l.d,i=l.e,h=l.f
l.f=l.e=l.d=0
$label0$0:for(u=J.bm(a),t=l.b,s=b;!0;s=n){$label1$1:if(i>0){do{if(s===c)break $label0$0
r=u.h(a,s)
if(typeof r!=="number")return r.ae()
if((r&192)!==128){q=P.U(k+C.c.b9(r,16),a,s)
throw H.c(q)}else{j=(j<<6|r&63)>>>0;--i;++s}}while(i>0)
q=h-1
if(q<0||q>=4)return H.d(C.v,q)
if(j<=C.v[q]){q=P.U("Overlong encoding of 0x"+C.c.b9(j,16),a,s-h-1)
throw H.c(q)}if(j>1114111){q=P.U("Character outside valid Unicode range: 0x"+C.c.b9(j,16),a,s-h-1)
throw H.c(q)}if(!l.c||j!==65279)t.a+=H.bA(j)
l.c=!1}if(typeof c!=="number")return H.w(c)
q=s<c
for(;q;){p=P.mc(a,s,c)
if(p>0){l.c=!1
o=s+p
t.a+=P.ck(a,s,o)
if(o===c)break}else o=s
n=o+1
r=u.h(a,o)
if(typeof r!=="number")return r.S()
if(r<0){m=P.U("Negative UTF-8 code unit: -0x"+C.c.b9(-r,16),a,n-1)
throw H.c(m)}else{if((r&224)===192){j=r&31
i=1
h=1
continue $label0$0}if((r&240)===224){j=r&15
i=2
h=2
continue $label0$0}if((r&248)===240&&r<245){j=r&7
i=3
h=3
continue $label0$0}m=P.U(k+C.c.b9(r,16),a,n-1)
throw H.c(m)}}break $label0$0}if(i>0){l.d=j
l.e=i
l.f=h}}}
P.aI.prototype={}
P.ac.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.ac&&this.a===b.a&&!0},
aQ:function(a,b){return C.c.aQ(this.a,b.a)},
gI:function(a){var u=this.a
return(u^C.c.aN(u,30))&1073741823},
i:function(a){var u=this,t=P.n1(H.nv(u)),s=P.d_(H.nt(u)),r=P.d_(H.np(u)),q=P.d_(H.nq(u)),p=P.d_(H.ns(u)),o=P.d_(H.nu(u)),n=P.n2(H.nr(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.K.prototype={}
P.b2.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.b2&&this.a===b.a},
gI:function(a){return C.c.gI(this.a)},
aQ:function(a,b){return C.c.aQ(this.a,b.a)},
i:function(a){var u,t,s,r=new P.fq(),q=this.a
if(q<0)return"-"+new P.b2(0-q).i(0)
u=r.$1(C.c.a7(q,6e7)%60)
t=r.$1(C.c.a7(q,1e6)%60)
s=new P.fp().$1(q%1e6)
return""+C.c.a7(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
P.fp.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.fq.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bt.prototype={}
P.dn.prototype={
i:function(a){return"Throw of null."}}
P.al.prototype={
gbB:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbA:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbB()+o+u
if(!q.a)return t
s=q.gbA()
r=P.kG(q.b)
return t+s+": "+r}}
P.bB.prototype={
gbB:function(){return"RangeError"},
gbA:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.fM.prototype={
gbB:function(){return"RangeError"},
gbA:function(){var u,t=this.b
if(typeof t!=="number")return t.S()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gl:function(a){return this.f}}
P.iM.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iI.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cj.prototype={
i:function(a){return"Bad state: "+this.a}}
P.f8.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.kG(u)+"."}}
P.hF.prototype={
i:function(a){return"Out of Memory"},
$ibt:1}
P.dx.prototype={
i:function(a){return"Stack Overflow"},
$ibt:1}
P.fg.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dZ.prototype={
i:function(a){return"Exception: "+this.a}}
P.fD.prototype={
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
for(q=g;q<o;++q){p=C.a.V(f,q)
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
return h+l+j+k+"\n"+C.a.B(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.e(g)+")"):h}}
P.fF.prototype={}
P.u.prototype={}
P.i.prototype={
bu:function(a,b){return new H.cu(this,b,[H.l7(this,"i",0)])},
gl:function(a){var u,t=this.gP(this)
for(u=0;t.q();)++u
return u},
gaI:function(a){var u,t=this.gP(this)
if(!t.q())throw H.c(H.fO())
u=t.gC(t)
if(t.q())throw H.c(H.n8())
return u},
J:function(a,b){var u,t,s
P.lG(b,"index")
for(u=this.gP(this),t=0;u.q();){s=u.gC(u)
if(b===t)return s;++t}throw H.c(P.M(b,this,"index",null,t))},
i:function(a){return P.n7(this,"(",")")}}
P.fP.prototype={}
P.n.prototype={$iq:1,$ii:1}
P.Q.prototype={}
P.bd.prototype={
gI:function(a){return P.a2.prototype.gI.call(this,this)},
i:function(a){return"null"}}
P.ab.prototype={}
P.a2.prototype={constructor:P.a2,$ia2:1,
p:function(a,b){return this===b},
gI:function(a){return H.cg(this)},
i:function(a){return"Instance of '"+H.e(H.ch(this))+"'"},
toString:function(){return this.i(this)}}
P.h.prototype={}
P.S.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
P.iR.prototype={
$2:function(a,b){var u,t,s,r=J.cK(b).du(b,"=")
if(r===-1){if(b!=="")J.kx(a,P.l2(b,0,b.length,this.a,!0),"")}else if(r!==0){u=C.a.t(b,0,r)
t=C.a.ab(b,r+1)
s=this.a
J.kx(a,P.l2(u,0,u.length,s,!0),P.l2(t,0,t.length,s,!0))}return a}}
P.iO.prototype={
$2:function(a,b){throw H.c(P.U("Illegal IPv4 address, "+a,this.a,b))}}
P.iP.prototype={
$2:function(a,b){throw H.c(P.U("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.iQ.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.eO(C.a.t(this.b,a,b),null,16)
if(typeof u!=="number")return u.S()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u}}
P.bK.prototype={
ge0:function(){return this.b},
gc6:function(a){var u=this.c
if(u==null)return""
if(C.a.a6(u,"["))return C.a.t(u,1,u.length-1)
return u},
gbp:function(a){var u=this.d
if(u==null)return P.m3(this.a)
return u},
gcb:function(a){var u=this.f
return u==null?"":u},
gdn:function(){var u=this.r
return u==null?"":u},
dT:function(a,b){var u,t,s,r=this,q=r.a,p=q==="file",o=r.b,n=r.d,m=r.c
if(!(m!=null))m=o.length!==0||n!=null||p?"":null
u=r.e
if(!p)t=m!=null&&u.length!==0
else t=!0
if(t&&!C.a.a6(u,"/"))u="/"+u
s=P.l0(null,0,0,b)
return new P.bK(q,o,m,n,u,s,r.r)},
gcc:function(){var u,t=this.Q
if(t==null){t=this.f
u=P.h
u=this.Q=new P.dL(P.lS(t==null?"":t),[u,u])
t=u}return t},
gdq:function(){return this.c!=null},
gdt:function(){return this.f!=null},
gdr:function(){return this.r!=null},
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
if(!!J.O(b).$ikW)if(s.a==b.gbv())if(s.c!=null===b.gdq())if(s.b==b.ge0())if(s.gc6(s)==b.gc6(b))if(s.gbp(s)==b.gbp(b))if(s.e===b.gdO(b)){u=s.f
t=u==null
if(!t===b.gdt()){if(t)u=""
if(u===b.gcb(b)){u=s.r
t=u==null
if(!t===b.gdr()){if(t)u=""
u=u===b.gdn()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gI:function(a){var u=this.z
return u==null?this.z=C.a.gI(this.i(0)):u},
$ikW:1,
gbv:function(){return this.a},
gdO:function(a){return this.e}}
P.jN.prototype={
$1:function(a){throw H.c(P.U("Invalid port",this.a,this.b+1))}}
P.jO.prototype={
$1:function(a){return P.eB(C.X,a,C.e,!1)}}
P.jQ.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.e(P.eB(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.e(P.eB(C.h,b,C.e,!0))}}}
P.jP.prototype={
$2:function(a,b){var u,t
if(b==null||typeof b==="string")this.a.$2(a,b)
else for(u=J.aK(b),t=this.a;u.q();)t.$2(a,u.gC(u))}}
P.iN.prototype={
ge_:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.d(o,0)
u=q.a
o=o[0]+1
t=C.a.bl(u,"?",o)
s=u.length
if(t>=0){r=P.cG(u,t+1,s,C.l,!1)
s=t}else r=p
return q.c=new P.ji("data",p,p,p,P.cG(u,o,s,C.z,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.d(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.jY.prototype={
$1:function(a){return new Uint8Array(96)}}
P.jX.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.d(u,a)
u=u[a]
J.mQ(u,0,96,b)
return u},
$S:18}
P.jZ.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.a.E(b,s)^96
if(r>=t)return H.d(a,r)
a[r]=c}}}
P.k_.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.a.E(b,0),t=C.a.E(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.d(a,r)
a[r]=c}}}
P.jz.prototype={
gdq:function(){return this.c>0},
gds:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.A()
t=this.e
if(typeof t!=="number")return H.w(t)
t=u+1<t
u=t}else u=!1
return u},
gdt:function(){var u=this.f
if(typeof u!=="number")return u.S()
return u<this.r},
gdr:function(){return this.r<this.a.length},
gcI:function(){return this.b===4&&C.a.a6(this.a,"http")},
gcJ:function(){return this.b===5&&C.a.a6(this.a,"https")},
gbv:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gcI())q=t.x="http"
else if(t.gcJ()){t.x="https"
q="https"}else if(q===4&&C.a.a6(t.a,s)){t.x=s
q=s}else if(q===7&&C.a.a6(t.a,r)){t.x=r
q=r}else{q=C.a.t(t.a,0,q)
t.x=q}return q},
ge0:function(){var u=this.c,t=this.b+3
return u>t?C.a.t(this.a,t,u-1):""},
gc6:function(a){var u=this.c
return u>0?C.a.t(this.a,u,this.d):""},
gbp:function(a){var u,t=this
if(t.gds()){u=t.d
if(typeof u!=="number")return u.A()
return P.eO(C.a.t(t.a,u+1,t.e),null,null)}if(t.gcI())return 80
if(t.gcJ())return 443
return 0},
gdO:function(a){return C.a.t(this.a,this.e,this.f)},
gcb:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.S()
return u<t?C.a.t(this.a,u+1,t):""},
gdn:function(){var u=this.r,t=this.a
return u<t.length?C.a.ab(t,u+1):""},
gcc:function(){var u=this,t=u.f
if(typeof t!=="number")return t.S()
if(t>=u.r)return C.Y
t=P.h
return new P.dL(P.lS(u.gcb(u)),[t,t])},
dT:function(a,b){var u,t,s,r,q,p=this,o=null,n=p.gbv(),m=n==="file",l=p.c,k=l>0?C.a.t(p.a,p.b+3,l):"",j=p.gds()?p.gbp(p):o
l=p.c
if(l>0)u=C.a.t(p.a,l,p.d)
else u=k.length!==0||j!=null||m?"":o
l=p.a
t=C.a.t(l,p.e,p.f)
if(!m)s=u!=null&&t.length!==0
else s=!0
if(s&&!C.a.a6(t,"/"))t="/"+t
r=P.l0(o,0,0,b)
s=p.r
q=s<l.length?C.a.ab(l,s+1):o
return new P.bK(n,k,u,j,t,r,q)},
gI:function(a){var u=this.y
return u==null?this.y=C.a.gI(this.a):u},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.O(b).$ikW&&this.a===b.i(0)},
i:function(a){return this.a},
$ikW:1}
P.ji.prototype={}
W.p.prototype={}
W.eR.prototype={
gl:function(a){return a.length}}
W.eS.prototype={
i:function(a){return String(a)}}
W.eT.prototype={
i:function(a){return String(a)}}
W.bq.prototype={$ibq:1}
W.br.prototype={$ibr:1}
W.bs.prototype={
cj:function(a,b,c){if(c!=null)return a.getContext(b,P.oT(c))
return a.getContext(b)},
e4:function(a,b){return this.cj(a,b,null)},
$ibs:1}
W.b0.prototype={
gl:function(a){return a.length}}
W.fc.prototype={
gl:function(a){return a.length}}
W.H.prototype={$iH:1}
W.bZ.prototype={
gl:function(a){return a.length}}
W.fd.prototype={}
W.ah.prototype={}
W.at.prototype={}
W.fe.prototype={
gl:function(a){return a.length}}
W.ff.prototype={
gl:function(a){return a.length}}
W.fi.prototype={
gl:function(a){return a.length}}
W.am.prototype={$iam:1}
W.fm.prototype={
i:function(a){return String(a)}}
W.d1.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[[P.a9,P.ab]]},
$iC:1,
$aC:function(){return[[P.a9,P.ab]]},
$ax:function(){return[[P.a9,P.ab]]},
$ii:1,
$ai:function(){return[[P.a9,P.ab]]},
$in:1,
$an:function(){return[[P.a9,P.ab]]}}
W.d2.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gat(a))+" x "+H.e(this.gao(a))},
p:function(a,b){var u
if(b==null)return!1
u=J.O(b)
return!!u.$ia9&&a.left===u.gbn(b)&&a.top===u.gbr(b)&&this.gat(a)===u.gat(b)&&this.gao(a)===u.gao(b)},
gI:function(a){return W.m1(C.d.gI(a.left),C.d.gI(a.top),C.d.gI(this.gat(a)),C.d.gI(this.gao(a)))},
gd7:function(a){return a.bottom},
gao:function(a){return a.height},
gbn:function(a){return a.left},
gcg:function(a){return a.right},
gbr:function(a){return a.top},
gat:function(a){return a.width},
$ia9:1,
$aa9:function(){return[P.ab]}}
W.fn.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[P.h]},
$iC:1,
$aC:function(){return[P.h]},
$ax:function(){return[P.h]},
$ii:1,
$ai:function(){return[P.h]},
$in:1,
$an:function(){return[P.h]}}
W.fo.prototype={
gl:function(a){return a.length}}
W.jg.prototype={
gl:function(a){return this.b.length},
h:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
m:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
this.a.replaceChild(c,u[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gP:function(a){var u=this.ig(this)
return new J.a_(u,u.length)},
$aq:function(){return[W.P]},
$ax:function(){return[W.P]},
$ai:function(){return[W.P]},
$an:function(){return[W.P]}}
W.P.prototype={
ghj:function(a){return new W.jj(a)},
gbS:function(a){return new W.jg(a,a.children)},
gda:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.S()
if(s<0)s=-s*0
if(typeof r!=="number")return r.S()
if(r<0)r=-r*0
return new P.a9(u,t,s,r,[P.ab])},
i:function(a){return a.localName},
ak:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.ls
if(u==null){u=H.b([],[W.aT])
t=new W.dm(u)
u.push(W.m0(null))
u.push(W.m2())
$.ls=t
d=t}else d=u
u=$.lr
if(u==null){u=new W.eC(d)
$.lr=u
c=u}else{u.a=d
c=u}}if($.aO==null){u=document
t=u.implementation.createHTMLDocument("")
$.aO=t
$.kE=t.createRange()
s=$.aO.createElement("base")
s.href=u.baseURI
$.aO.head.appendChild(s)}u=$.aO
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.aO
if(!!this.$ibr)r=u.body
else{r=u.createElement(a.tagName)
$.aO.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.b.L(C.V,a.tagName)){$.kE.selectNodeContents(r)
q=$.kE.createContextualFragment(b)}else{r.innerHTML=b
q=$.aO.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.aO.body
if(r==null?u!=null:r!==u)J.lj(r)
c.ck(q)
document.adoptNode(q)
return q},
hq:function(a,b,c){return this.ak(a,b,c,null)},
e6:function(a,b){a.textContent=null
a.appendChild(this.ak(a,b,null,null))},
$iP:1,
gdV:function(a){return a.tagName}}
W.fs.prototype={
$1:function(a){return!!J.O(a).$iP}}
W.j.prototype={$ij:1}
W.f.prototype={
h9:function(a,b,c,d){if(c!=null)this.ev(a,b,c,!1)},
ev:function(a,b,c,d){return a.addEventListener(b,H.bP(c,1),!1)}}
W.an.prototype={$ian:1}
W.c1.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.an]},
$iC:1,
$aC:function(){return[W.an]},
$ax:function(){return[W.an]},
$ii:1,
$ai:function(){return[W.an]},
$in:1,
$an:function(){return[W.an]},
$ic1:1}
W.fy.prototype={
gl:function(a){return a.length}}
W.fC.prototype={
gl:function(a){return a.length}}
W.au.prototype={$iau:1}
W.fJ.prototype={
gl:function(a){return a.length}}
W.c3.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.E]},
$iC:1,
$aC:function(){return[W.E]},
$ax:function(){return[W.E]},
$ii:1,
$ai:function(){return[W.E]},
$in:1,
$an:function(){return[W.E]}}
W.aQ.prototype={$iaQ:1,
gdd:function(a){return a.data}}
W.c4.prototype={$ic4:1}
W.bw.prototype={$ibw:1}
W.h1.prototype={
i:function(a){return String(a)}}
W.hn.prototype={
gl:function(a){return a.length}}
W.cb.prototype={$icb:1}
W.ho.prototype={
h:function(a,b){return P.aX(a.get(b))},
G:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aX(u.value[1]))}},
ga0:function(a){var u=H.b([],[P.h])
this.G(a,new W.hp(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.z("Not supported"))},
$aa1:function(){return[P.h,null]},
$iQ:1,
$aQ:function(){return[P.h,null]}}
W.hp.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hq.prototype={
h:function(a,b){return P.aX(a.get(b))},
G:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aX(u.value[1]))}},
ga0:function(a){var u=H.b([],[P.h])
this.G(a,new W.hr(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.z("Not supported"))},
$aa1:function(){return[P.h,null]},
$iQ:1,
$aQ:function(){return[P.h,null]}}
W.hr.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ax.prototype={$iax:1}
W.hs.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.ax]},
$iC:1,
$aC:function(){return[W.ax]},
$ax:function(){return[W.ax]},
$ii:1,
$ai:function(){return[W.ax]},
$in:1,
$an:function(){return[W.ax]}}
W.ay.prototype={$iay:1}
W.a4.prototype={
gaI:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.lJ("No elements"))
if(t>1)throw H.c(P.lJ("More than one element"))
return u.firstChild},
a8:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
m:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.d(t,b)
u.replaceChild(c,t[b])},
gP:function(a){var u=this.a.childNodes
return new W.d5(u,u.length)},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$aq:function(){return[W.E]},
$ax:function(){return[W.E]},
$ai:function(){return[W.E]},
$an:function(){return[W.E]}}
W.E.prototype={
i4:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
i7:function(a,b){var u,t
try{u=a.parentNode
J.mN(u,b,a)}catch(t){H.ae(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.ea(a):u},
fQ:function(a,b,c){return a.replaceChild(b,c)},
$iE:1}
W.dl.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.E]},
$iC:1,
$aC:function(){return[W.E]},
$ax:function(){return[W.E]},
$ii:1,
$ai:function(){return[W.E]},
$in:1,
$an:function(){return[W.E]}}
W.az.prototype={$iaz:1,
gl:function(a){return a.length}}
W.hI.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.az]},
$iC:1,
$aC:function(){return[W.az]},
$ax:function(){return[W.az]},
$ii:1,
$ai:function(){return[W.az]},
$in:1,
$an:function(){return[W.az]}}
W.hT.prototype={
h:function(a,b){return P.aX(a.get(b))},
G:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aX(u.value[1]))}},
ga0:function(a){var u=H.b([],[P.h])
this.G(a,new W.hU(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.z("Not supported"))},
$aa1:function(){return[P.h,null]},
$iQ:1,
$aQ:function(){return[P.h,null]}}
W.hU.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hW.prototype={
gl:function(a){return a.length}}
W.aB.prototype={$iaB:1}
W.i6.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aB]},
$iC:1,
$aC:function(){return[W.aB]},
$ax:function(){return[W.aB]},
$ii:1,
$ai:function(){return[W.aB]},
$in:1,
$an:function(){return[W.aB]}}
W.aC.prototype={$iaC:1}
W.i7.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aC]},
$iC:1,
$aC:function(){return[W.aC]},
$ax:function(){return[W.aC]},
$ii:1,
$ai:function(){return[W.aC]},
$in:1,
$an:function(){return[W.aC]}}
W.aD.prototype={$iaD:1,
gl:function(a){return a.length}}
W.ia.prototype={
h:function(a,b){return a.getItem(b)},
m:function(a,b,c){a.setItem(b,c)},
G:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga0:function(a){var u=H.b([],[P.h])
this.G(a,new W.ib(u))
return u},
gl:function(a){return a.length},
$aa1:function(){return[P.h,P.h]},
$iQ:1,
$aQ:function(){return[P.h,P.h]}}
W.ib.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ao.prototype={$iao:1}
W.dA.prototype={
ak:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bw(a,b,c,d)
u=W.n3("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.a4(t).a8(0,new W.a4(u))
return t}}
W.ie.prototype={
ak:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bw(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.ak(u.createElement("table"),b,c,d)
u.toString
u=new W.a4(u)
s=u.gaI(u)
s.toString
u=new W.a4(s)
r=u.gaI(u)
t.toString
r.toString
new W.a4(t).a8(0,new W.a4(r))
return t}}
W.ig.prototype={
ak:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bw(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.ak(u.createElement("table"),b,c,d)
u.toString
u=new W.a4(u)
s=u.gaI(u)
t.toString
s.toString
new W.a4(t).a8(0,new W.a4(s))
return t}}
W.cl.prototype={$icl:1}
W.aE.prototype={$iaE:1}
W.ap.prototype={$iap:1}
W.ij.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.ap]},
$iC:1,
$aC:function(){return[W.ap]},
$ax:function(){return[W.ap]},
$ii:1,
$ai:function(){return[W.ap]},
$in:1,
$an:function(){return[W.ap]}}
W.ik.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aE]},
$iC:1,
$aC:function(){return[W.aE]},
$ax:function(){return[W.aE]},
$ii:1,
$ai:function(){return[W.aE]},
$in:1,
$an:function(){return[W.aE]}}
W.ir.prototype={
gl:function(a){return a.length}}
W.aF.prototype={$iaF:1}
W.bD.prototype={$ibD:1}
W.iv.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aF]},
$iC:1,
$aC:function(){return[W.aF]},
$ax:function(){return[W.aF]},
$ii:1,
$ai:function(){return[W.aF]},
$in:1,
$an:function(){return[W.aF]}}
W.iw.prototype={
gl:function(a){return a.length}}
W.bg.prototype={}
W.iS.prototype={
i:function(a){return String(a)}}
W.j9.prototype={
gl:function(a){return a.length}}
W.bk.prototype={
ght:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.z("deltaY is not supported"))},
ghs:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.z("deltaX is not supported"))},
$ibk:1}
W.cv.prototype={
fR:function(a,b){return a.requestAnimationFrame(H.bP(b,1))},
eH:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.jh.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.H]},
$iC:1,
$aC:function(){return[W.H]},
$ax:function(){return[W.H]},
$ii:1,
$ai:function(){return[W.H]},
$in:1,
$an:function(){return[W.H]}}
W.dU.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
p:function(a,b){var u
if(b==null)return!1
u=J.O(b)
return!!u.$ia9&&a.left===u.gbn(b)&&a.top===u.gbr(b)&&a.width===u.gat(b)&&a.height===u.gao(b)},
gI:function(a){return W.m1(C.d.gI(a.left),C.d.gI(a.top),C.d.gI(a.width),C.d.gI(a.height))},
gao:function(a){return a.height},
gat:function(a){return a.width}}
W.jm.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.au]},
$iC:1,
$aC:function(){return[W.au]},
$ax:function(){return[W.au]},
$ii:1,
$ai:function(){return[W.au]},
$in:1,
$an:function(){return[W.au]}}
W.eb.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.E]},
$iC:1,
$aC:function(){return[W.E]},
$ax:function(){return[W.E]},
$ii:1,
$ai:function(){return[W.E]},
$in:1,
$an:function(){return[W.E]}}
W.jA.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aD]},
$iC:1,
$aC:function(){return[W.aD]},
$ax:function(){return[W.aD]},
$ii:1,
$ai:function(){return[W.aD]},
$in:1,
$an:function(){return[W.aD]}}
W.jF.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.ao]},
$iC:1,
$aC:function(){return[W.ao]},
$ax:function(){return[W.ao]},
$ii:1,
$ai:function(){return[W.ao]},
$in:1,
$an:function(){return[W.ao]}}
W.jf.prototype={
G:function(a,b){var u,t,s,r,q
for(u=this.ga0(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.l)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga0:function(a){var u,t,s,r=this.a.attributes,q=H.b([],[P.h])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.d(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q},
$aa1:function(){return[P.h,P.h]},
$aQ:function(){return[P.h,P.h]}}
W.jj.prototype={
h:function(a,b){return this.a.getAttribute(b)},
m:function(a,b,c){this.a.setAttribute(b,c)},
gl:function(a){return this.ga0(this).length}}
W.jk.prototype={}
W.jl.prototype={
$1:function(a){return this.a.$1(a)}}
W.cw.prototype={
ej:function(a){var u
if($.cx.ghJ($.cx)){for(u=0;u<262;++u)$.cx.m(0,C.U[u],W.p3())
for(u=0;u<12;++u)$.cx.m(0,C.p[u],W.p4())}},
aP:function(a){return $.mJ().L(0,W.c_(a))},
av:function(a,b,c){var u=$.cx.h(0,H.e(W.c_(a))+"::"+b)
if(u==null)u=$.cx.h(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$iaT:1}
W.L.prototype={
gP:function(a){return new W.d5(a,this.gl(a))}}
W.dm.prototype={
aP:function(a){return C.b.d4(this.a,new W.hA(a))},
av:function(a,b,c){return C.b.d4(this.a,new W.hz(a,b,c))},
$iaT:1}
W.hA.prototype={
$1:function(a){return a.aP(this.a)}}
W.hz.prototype={
$1:function(a){return a.av(this.a,this.b,this.c)}}
W.ej.prototype={
eo:function(a,b,c,d){var u,t,s
this.a.a8(0,c)
u=b.bu(0,new W.jx())
t=b.bu(0,new W.jy())
this.b.a8(0,u)
s=this.c
s.a8(0,C.w)
s.a8(0,t)},
aP:function(a){return this.a.L(0,W.c_(a))},
av:function(a,b,c){var u=this,t=W.c_(a),s=u.c
if(s.L(0,H.e(t)+"::"+b))return u.d.hd(c)
else if(s.L(0,"*::"+b))return u.d.hd(c)
else{s=u.b
if(s.L(0,H.e(t)+"::"+b))return!0
else if(s.L(0,"*::"+b))return!0
else if(s.L(0,H.e(t)+"::*"))return!0
else if(s.L(0,"*::*"))return!0}return!1},
$iaT:1}
W.jx.prototype={
$1:function(a){return!C.b.L(C.p,a)}}
W.jy.prototype={
$1:function(a){return C.b.L(C.p,a)}}
W.jI.prototype={
av:function(a,b,c){if(this.ed(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.L(0,b)
return!1}}
W.jJ.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)}}
W.jG.prototype={
aP:function(a){var u=J.O(a)
if(!!u.$ici)return!1
u=!!u.$ik
if(u&&W.c_(a)==="foreignObject")return!1
if(u)return!0
return!1},
av:function(a,b,c){if(b==="is"||C.a.a6(b,"on"))return!1
return this.aP(a)},
$iaT:1}
W.d5.prototype={
q:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.bU(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gC:function(a){return this.d}}
W.aT.prototype={}
W.jv.prototype={}
W.eC.prototype={
ck:function(a){new W.jT(this).$2(a,null)},
b0:function(a,b){if(b==null)J.lj(a)
else b.removeChild(a)},
fW:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.mR(a)
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
try{t=J.a5(a)}catch(r){H.ae(r)}try{s=W.c_(a)
this.fV(a,b,p,t,s,o,n)}catch(r){if(H.ae(r) instanceof P.al)throw r
else{this.b0(a,b)
window
q="Removing corrupted element "+H.e(t)
if(typeof console!="undefined")window.console.warn(q)}}},
fV:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=this
if(c){p.b0(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!p.a.aP(a)){p.b0(a,b)
window
u="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!p.a.av(a,"is",g)){p.b0(a,b)
window
u="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga0(f)
t=H.b(u.slice(0),[H.aJ(u,0)])
for(s=f.ga0(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.d(t,s)
r=t[s]
if(!p.a.av(a,J.mU(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.e(e)+" "+r+'="'+H.e(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.O(a).$icl)p.ck(a.content)}}
W.jT.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.fW(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.b0(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ae(s)
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
W.cC.prototype={}
W.cD.prototype={}
W.ek.prototype={}
W.el.prototype={}
W.ep.prototype={}
W.es.prototype={}
W.et.prototype={}
W.cE.prototype={}
W.cF.prototype={}
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
P.jB.prototype={
c3:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
t.push(a)
this.b.push(null)
return s},
bt:function(a){var u,t,s,r,q,p=this,o={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.O(a)
if(!!u.$iac)return new Date(a.a)
if(!!u.$inz)throw H.c(P.iJ("structured clone of RegExp"))
if(!!u.$ian)return a
if(!!u.$ibq)return a
if(!!u.$ic1)return a
if(!!u.$iaQ)return a
if(!!u.$icc||!!u.$ibc||!!u.$icb)return a
if(!!u.$iQ){t=p.c3(a)
s=p.b
r=s.length
if(t>=r)return H.d(s,t)
q=o.a=s[t]
if(q!=null)return q
q={}
o.a=q
if(t>=r)return H.d(s,t)
s[t]=q
u.G(a,new P.jD(o,p))
return o.a}if(!!u.$in){t=p.c3(a)
o=p.b
if(t>=o.length)return H.d(o,t)
q=o[t]
if(q!=null)return q
return p.hp(a,t)}if(!!u.$inb){t=p.c3(a)
u=p.b
s=u.length
if(t>=s)return H.d(u,t)
q=o.b=u[t]
if(q!=null)return q
q={}
o.b=q
if(t>=s)return H.d(u,t)
u[t]=q
p.hE(a,new P.jE(o,p))
return o.b}throw H.c(P.iJ("structured clone of other type"))},
hp:function(a,b){var u,t=J.bm(a),s=t.gl(a),r=new Array(s),q=this.b
if(b>=q.length)return H.d(q,b)
q[b]=r
if(typeof s!=="number")return H.w(s)
u=0
for(;u<s;++u){q=this.bt(t.h(a,u))
if(u>=r.length)return H.d(r,u)
r[u]=q}return r}}
P.jD.prototype={
$2:function(a,b){this.a.a[a]=this.b.bt(b)},
$S:3}
P.jE.prototype={
$2:function(a,b){this.a.b[a]=this.b.bt(b)},
$S:3}
P.ez.prototype={$iaQ:1,
gdd:function(a){return this.a}}
P.k3.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.jC.prototype={
hE:function(a,b){var u,t,s,r
for(u=Object.keys(a),t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,a[r])}}}
P.fz.prototype={
gbf:function(){var u=this.b,t=H.l7(u,"x",0)
return new H.c9(new H.cu(u,new P.fA(),[t]),new P.fB(),[t,W.P])},
m:function(a,b,c){var u=this.gbf()
J.mS(u.b.$1(J.eQ(u.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.af(this.gbf().a)},
h:function(a,b){var u=this.gbf()
return u.b.$1(J.eQ(u.a,b))},
gP:function(a){var u=P.kN(this.gbf(),!1,W.P)
return new J.a_(u,u.length)},
$aq:function(){return[W.P]},
$ax:function(){return[W.P]},
$ai:function(){return[W.P]},
$an:function(){return[W.P]}}
P.fA.prototype={
$1:function(a){return!!J.O(a).$iP}}
P.fB.prototype={
$1:function(a){return H.o(a,"$iP")}}
P.jr.prototype={
gcg:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.w(t)
return u+t},
gd7:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.w(t)
return u+t},
i:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
p:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.O(b)
if(!!u.$ia9){t=q.a
if(t==u.gbn(b)){s=q.b
if(s==u.gbr(b)){r=q.c
if(typeof t!=="number")return t.A()
if(typeof r!=="number")return H.w(r)
if(t+r===u.gcg(b)){t=q.d
if(typeof s!=="number")return s.A()
if(typeof t!=="number")return H.w(t)
u=s+t===u.gd7(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gI:function(a){var u=this,t=u.a,s=J.cR(t),r=u.b,q=J.cR(r),p=u.c
if(typeof t!=="number")return t.A()
if(typeof p!=="number")return H.w(p)
p=C.c.gI(t+p)
t=u.d
if(typeof r!=="number")return r.A()
if(typeof t!=="number")return H.w(t)
t=C.c.gI(r+t)
return P.o_(P.jo(P.jo(P.jo(P.jo(0,s),q),p),t))}}
P.a9.prototype={
gbn:function(a){return this.a},
gbr:function(a){return this.b},
gat:function(a){return this.c},
gao:function(a){return this.d}}
P.aR.prototype={$iaR:1}
P.fV.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.aR]},
$ax:function(){return[P.aR]},
$ii:1,
$ai:function(){return[P.aR]},
$in:1,
$an:function(){return[P.aR]}}
P.aU.prototype={$iaU:1}
P.hD.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.aU]},
$ax:function(){return[P.aU]},
$ii:1,
$ai:function(){return[P.aU]},
$in:1,
$an:function(){return[P.aU]}}
P.hL.prototype={
gl:function(a){return a.length}}
P.ci.prototype={$ici:1}
P.id.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.h]},
$ax:function(){return[P.h]},
$ii:1,
$ai:function(){return[P.h]},
$in:1,
$an:function(){return[P.h]}}
P.k.prototype={
gbS:function(a){return new P.fz(a,new W.a4(a))},
ak:function(a,b,c,d){var u,t,s,r,q,p=H.b([],[W.aT])
p.push(W.m0(null))
p.push(W.m2())
p.push(new W.jG())
c=new W.eC(new W.dm(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.r).hq(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.a4(s)
q=p.gaI(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ik:1}
P.aW.prototype={$iaW:1}
P.ix.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.aW]},
$ax:function(){return[P.aW]},
$ii:1,
$ai:function(){return[P.aW]},
$in:1,
$an:function(){return[P.aW]}}
P.e3.prototype={}
P.e4.prototype={}
P.ee.prototype={}
P.ef.prototype={}
P.eq.prototype={}
P.er.prototype={}
P.ex.prototype={}
P.ey.prototype={}
P.bE.prototype={$iq:1,
$aq:function(){return[P.u]},
$ii:1,
$ai:function(){return[P.u]},
$in:1,
$an:function(){return[P.u]}}
P.eV.prototype={
gl:function(a){return a.length}}
P.eW.prototype={
h:function(a,b){return P.aX(a.get(b))},
G:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aX(u.value[1]))}},
ga0:function(a){var u=H.b([],[P.h])
this.G(a,new P.eX(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.z("Not supported"))},
$aa1:function(){return[P.h,null]},
$iQ:1,
$aQ:function(){return[P.h,null]}}
P.eX.prototype={
$2:function(a,b){return this.a.push(a)}}
P.eY.prototype={
gl:function(a){return a.length}}
P.bp.prototype={}
P.hE.prototype={
gl:function(a){return a.length}}
P.dS.prototype={}
P.dt.prototype={
dX:function(a,b,c,d,e,f,g,h,i,j){var u,t=i==null
if(!t&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}u=J.O(g)
if(!!u.$iaQ&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,P.oU(g))
return}if(!!u.$ic4&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.cS("Incorrect number or type of arguments"))},
ic:function(a,b,c,d,e,f,g){return this.dX(a,b,c,d,e,f,g,null,null,null)}}
P.i8.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return P.aX(a.item(b))},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[[P.Q,,,]]},
$ax:function(){return[[P.Q,,,]]},
$ii:1,
$ai:function(){return[[P.Q,,,]]},
$in:1,
$an:function(){return[[P.Q,,,]]}}
P.em.prototype={}
P.en.prototype={}
K.aL.prototype={
aG:function(a,b){return!0},
i:function(a){return"all"}}
K.d6.prototype={
aG:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)if(u[s].aG(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.l)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s}}
K.ba.prototype={}
K.a7.prototype={
aG:function(a,b){return!this.e9(0,b)},
i:function(a){return"!["+this.co(0)+"]"}}
K.hO.prototype={
aG:function(a,b){if(typeof b!=="number")return H.w(b)
return this.a<=b&&this.b>=b},
i:function(a){var u=H.bA(this.a),t=H.bA(this.b)
return u+".."+t}}
K.hX.prototype={
eh:function(a){var u,t,s,r
if(a.a.length<=0)throw H.c(P.v("May not create a Set with zero characters."))
u=P.u
t=new H.I([u,P.aI])
for(s=new H.b9(a,a.gl(a));s.q();)t.m(0,s.d,!0)
r=P.kN(t.ga0(t),!0,u)
C.b.e7(r)
this.a=r},
aG:function(a,b){return C.b.L(this.a,b)},
i:function(a){return P.ck(this.a,0,null)}}
L.dy.prototype={
j:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new L.dI(this.a.k(0,b))
r.a=H.b([],[K.ba])
r.c=!1
this.c.push(r)
return r},
hz:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
if(r.aG(0,a))return r}return},
i:function(a){return this.b},
cX:function(){var u,t,s,r,q,p=this,o="("+p.b+")",n=p.d
if(n!=null){n=n.b
o+=" => ["+n+"]"
u=p.a
if(u.c.L(0,n))o+=" (consume)"
for(n=p.d.c,n=n.ga0(n),n=n.gP(n);n.q();){t=n.gC(n)
o+="\n"
s=p.d.c.h(0,t)
t=o+("  -- "+H.e(t)+" => ["+H.e(s)+"]")
o=u.c.L(0,s)?t+" (consume)":t}}for(n=p.c,u=n.length,r=0;r<n.length;n.length===u||(0,H.l)(n),++r){q=n[r]
o=o+"\n"+("  -- "+q.i(0))}return o.charCodeAt(0)==0?o:o}}
L.dF.prototype={
i:function(a){var u=H.lc(this.b,"\n","\\n"),t=H.lc(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
L.dG.prototype={
aH:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.l)(c),++t){s=c[t]
this.c.m(0,s,b)}},
i:function(a){return this.b}}
L.is.prototype={
k:function(a,b){var u=this.a.h(0,b)
if(u==null){u=new L.dy(this,b)
u.c=H.b([],[L.dI])
this.a.m(0,b,u)}return u},
R:function(a){var u,t=this.b.h(0,a)
if(t==null){t=new L.dG(a)
u=P.h
t.c=new H.I([u,u])
this.b.m(0,a,t)}return t},
ci:function(a){return this.ij(a)},
ij:function(a){var u=this
return P.om(function(){var t=a
var s=0,r=1,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
return function $async$ci(b,a0){if(b===1){q=a0
s=r}while(true)switch(s){case 0:g=u.d
f=[P.u]
e=H.b([],f)
d=H.b([],f)
c=H.b([],f)
p=null,o=0,n=0,m=0
case 2:if(!!0){s=3
break}if(c.length!==0)l=C.b.cd(c,0)
else{if(!t.q()){s=3
break}l=t.d}d.push(l);++o
k=g.hz(l)
s=k==null?4:6
break
case 4:if(p==null){j=P.ck(d,0,null)
throw H.c(P.v("Untokenizable string [state: "+g.b+", index "+o+']: "'+j+'"'))}if(!!d.fixed$length)H.r(P.z("removeRange"))
P.aV(0,m,d.length)
d.splice(0,m-0)
C.b.a8(c,d)
d=H.b([],f)
e=H.b([],f)
g=u.d
s=!u.c.L(0,p.a)?7:8
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
p=new L.dF(h==null?i.b:h,j,o)
m=d.length
n=o}case 5:s=2
break
case 3:s=p!=null&&!u.c.L(0,p.a)?10:11
break
case 10:s=12
return p
case 12:case 11:return P.nY()
case 1:return P.nZ(q)}}},L.dF)},
i:function(a){var u,t=new P.S(""),s=this.d
if(s!=null)t.a=s.cX()+"\n"
for(s=this.a,s=s.gik(s),s=s.gP(s);s.q();){u=s.gC(s)
if(u!=this.d)t.a+=u.cX()+"\n"}s=t.a
return s.charCodeAt(0)==0?s:s}}
L.dI.prototype={
i:function(a){return this.b.b+": "+this.co(0)}}
O.aM.prototype={
bd:function(a){this.a=H.b([],[a])
this.c=this.b=null},
cl:function(a,b,c){this.b=b
this.c=a},
aW:function(a,b){return this.cl(a,null,b)},
cO:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
cK:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gP:function(a){var u=this.a
return new J.a_(u,u.length)},
J:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
n:function(a,b){var u,t,s=this,r=[H.l7(s,"aM",0)]
if(s.cO(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.cK(t,H.b([b],r))}},
a8:function(a,b){var u,t
if(this.cO(b)){u=this.a
t=u.length
C.b.a8(u,b)
this.cK(t,b)}},
$ii:1}
O.ca.prototype={
gl:function(a){return this.a.length},
gu:function(){var u=this.b
return u==null?this.b=D.J():u},
aJ:function(){var u=this.b
if(u!=null)u.F(null)},
gZ:function(a){var u=this.a
if(u.length>0)return C.b.gax(u)
else return V.bx()},
dQ:function(a){var u=this.a
if(a==null)u.push(V.bx())
else u.push(a)
this.aJ()},
ca:function(){var u=this.a
if(u.length>0){u.pop()
this.aJ()}}}
E.f2.prototype={}
E.aP.prototype={
cw:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.a_(u,u.length);u.q();){t=u.d
if(t.f==null)t.cw()}},
sag:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gu().K(0,s.gdJ())
u=s.c
if(u!=null)u.gu().n(0,s.gdJ())
t=new D.y("shape",r,s.c)
t.b=!0
s.ap(t)}},
saT:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gu().K(0,s.gdL())
u=s.f
s.f=a
if(a!=null)a.gu().n(0,s.gdL())
s.cw()
t=new D.y("technique",u,s.f)
t.b=!0
s.ap(t)}},
saR:function(a){var u,t,s=this
if(!J.D(s.r,a)){u=s.r
if(u!=null)u.gu().K(0,s.gdH())
if(a!=null)a.gu().n(0,s.gdH())
s.r=a
t=new D.y("mover",u,a)
t.b=!0
s.ap(t)}},
ar:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.az(0,b,s):null
if(!J.D(q,s.x)){u=s.x
s.x=q
t=new D.y("matrix",u,q)
t.b=!0
s.ap(t)}r=s.f
if(r!=null)r.ar(0,b)
for(r=s.y.a,r=new J.a_(r,r.length);r.q();)r.d.ar(0,b)},
aq:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)s.a.push(s.gZ(s))
else s.a.push(r.B(0,s.gZ(s)))
s.aJ()
a.dR(t.f)
s=a.dy
u=(s&&C.b).gax(s)
if(u!=null&&t.d!=null)u.dS(a,t)
for(s=t.y.a,s=new J.a_(s,s.length);s.q();)s.d.aq(a)
a.dP()
a.dx.ca()},
ap:function(a){var u=this.z
if(u!=null)u.F(a)},
a_:function(){return this.ap(null)},
dK:function(a){this.e=null
this.ap(a)},
hV:function(){return this.dK(null)},
dM:function(a){this.ap(a)},
hW:function(){return this.dM(null)},
dI:function(a){this.ap(a)},
hU:function(){return this.dI(null)},
dG:function(a){this.ap(a)},
hR:function(){return this.dG(null)},
hQ:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gdF(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.l)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bu()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.a_()},
hT:function(a,b){var u,t
for(u=b.gP(b),t=this.gdF();u.q();)u.gC(u).gu().K(0,t)
this.a_()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.hP.prototype={
eg:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.ac(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.ca()
t=[V.aS]
u.a=H.b([],t)
u.gu().n(0,new E.hQ(s))
s.cy=u
u=new O.ca()
u.a=H.b([],t)
u.gu().n(0,new E.hR(s))
s.db=u
u=new O.ca()
u.a=H.b([],t)
u.gu().n(0,new E.hS(s))
s.dx=u
u=H.b([],[O.dB])
s.dy=u
u.push(null)
s.fr=new H.I([P.h,A.du])},
gi3:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gZ(s)
u=t.db
u=t.z=s.B(0,u.gZ(u))
s=u}return s},
ge1:function(){var u,t=this,s=t.cx
if(s==null){s=t.db
s=s.gZ(s)
u=t.dx
u=t.cx=s.B(0,u.gZ(u))
s=u}return s},
dR:function(a){var u=this.dy
u.push(a==null?(u&&C.b).gax(u):a)},
dP:function(){var u=this.dy
if(u.length>1)u.pop()},
d3:function(a){var u=a.b
if(u.length===0)throw H.c(P.v("May not cache a shader with no name."))
if(this.fr.bT(0,u))throw H.c(P.v('Shader cache already contains a shader by the name "'+u+'".'))
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
E.dD.prototype={
cu:function(a){this.dU()},
ct:function(){return this.cu(null)},
ghF:function(){var u,t=this,s=Date.now(),r=C.c.a7(P.lq(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.ac(s,!1)
return u/r},
cQ:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.B()
if(typeof r!=="number")return H.w(r)
u=C.d.c5(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.B()
t=C.d.c5(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.lM(C.n,s.gi8())}},
dU:function(){if(!this.cx){this.cx=!0
var u=window
C.E.eH(u)
C.E.fR(u,W.md(new E.iq(this),P.ab))}},
i6:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.cQ()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ac(r,!1)
s.y=P.lq(r-s.r.a).a*0.000001
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
o.aq(p.e)}s=p.Q
if(s!=null)s.F(null)}catch(q){u=H.ae(q)
t=H.l8(q)
P.lb("Error: "+H.e(u))
P.lb("Stack: "+H.e(t))
throw H.c(u)}}}
E.iq.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.i6()}}}
Z.dP.prototype={}
Z.cV.prototype={
aj:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ae(s)
t=P.v('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.e(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.dQ.prototype={}
Z.bX.prototype={
aF:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
aj:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].aj(a)},
ba:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aq:function(a){var u,t,s,r,q,p=this.b.length
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
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a5(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.j(p,", ")+"\nAttrs:   "+C.b.j(r,", ")}}
Z.bv.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.ch(this.c))+"'")+"]"}}
Z.bj.prototype={
gcn:function(a){var u=this.a,t=(u&$.ar().a)!==0?3:0
if((u&$.b_().a)!==0)t+=3
if((u&$.aZ().a)!==0)t+=3
if((u&$.bn().a)!==0)t+=2
if((u&$.bo().a)!==0)t+=3
if((u&$.cO().a)!==0)t+=3
if((u&$.cP().a)!==0)t+=4
if((u&$.bT().a)!==0)++t
return(u&$.aY().a)!==0?t+4:t},
he:function(a){var u,t=$.ar(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.b_()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aZ()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bn()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bo()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cO()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cP()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bT()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aY()
if((s&t.a)!==0)if(u===a)return t
return $.mH()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bj))return!1
return this.a===b.a},
i:function(a){var u=H.b([],[P.h]),t=this.a
if((t&$.ar().a)!==0)u.push("Pos")
if((t&$.b_().a)!==0)u.push("Norm")
if((t&$.aZ().a)!==0)u.push("Binm")
if((t&$.bn().a)!==0)u.push("Txt2D")
if((t&$.bo().a)!==0)u.push("TxtCube")
if((t&$.cO().a)!==0)u.push("Clr3")
if((t&$.cP().a)!==0)u.push("Clr4")
if((t&$.bT().a)!==0)u.push("Weight")
if((t&$.aY().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.b.j(u,"|")}}
D.f5.prototype={}
D.bu.prototype={
n:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.X]}]):u).push(b)},
K:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.b.L(s,b)
if(s===!0){s=t.a
u=(s&&C.b).K(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.b.L(s,b)
if(s===!0){s=t.b
u=(s&&C.b).K(s,b)||u}return u},
F:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.b.G(P.kN(u,!0,{func:1,ret:-1,args:[D.X]}),new D.fv(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.X]}])
C.b.G(u,new D.fw(q))}return!0},
df:function(){return this.F(null)},
an:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.F(u)}}}}
D.fv.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.fw.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.X.prototype={}
D.b4.prototype={}
D.b5.prototype={}
D.y.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cW.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cW))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.db.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.db))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.fU.prototype={
i0:function(a){this.d.n(0,a.a)
return!1},
hX:function(a){this.d.K(0,a.a)
return!1}}
X.de.prototype={}
X.h2.prototype={
aZ:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.B()
u=b.b
t=q.ch
if(typeof u!=="number")return u.B()
s=new V.a8(o.a+n*m,o.b+u*t)
t=q.a.gbh()
r=new X.bb(a,V.be(),q.x,t,s)
r.b=!0
q.z=new P.ac(p,!1)
q.x=s
return r},
c9:function(a,b){this.r=a.a
return!1},
b8:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.e5()
if(typeof u!=="number")return u.ae()
this.r=(u&~t)>>>0
return!1},
b7:function(a,b){var u=this.d
if(u==null)return!1
u.F(this.aZ(a,b))
return!0},
i1:function(a){return!1},
fj:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.de(c,r.a.gbh(),b)
s.b=!0
t.F(s)
r.y=new P.ac(u,!1)
r.x=V.be()}}
X.by.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.by))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.bb.prototype={}
X.ht.prototype={
bD:function(a,b,c){var u=this,t=new P.ac(Date.now(),!1),s=u.a.gbh(),r=new X.bb(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
c9:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.F(this.bD(a,b,!0))
return!0},
b8:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.e5()
if(typeof t!=="number")return t.ae()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.F(u.bD(a,b,!0))
return!0},
b7:function(a,b){var u=this.d
if(u==null)return!1
u.F(this.bD(a,b,!1))
return!0},
i2:function(a,b){return!1}}
X.hK.prototype={}
X.dH.prototype={}
X.iu.prototype={
aZ:function(a,b){var u=this,t=new P.ac(Date.now(),!1),s=a.length>0?a[0]:V.be(),r=u.a.gbh(),q=new X.dH(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
i_:function(a){var u=this.b
if(u==null)return!1
u.F(this.aZ(a,!0))
return!0},
hY:function(a){var u=this.c
if(u==null)return!1
u.F(this.aZ(a,!0))
return!0},
hZ:function(a){var u=this.d
if(u==null)return!1
u.F(this.aZ(a,!1))
return!0}}
X.dM.prototype={
gbh:function(){var u=this.a,t=C.i.gda(u).c
t.toString
u=C.i.gda(u).d
u.toString
return V.lH(0,0,t,u)},
cD:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.db(u,new X.by(t,a.altKey,a.shiftKey))},
aM:function(a){a.shiftKey},
bL:function(a){a.shiftKey},
aC:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.M()
u=t.top
if(typeof r!=="number")return r.M()
return new V.a8(s-q,r-u)},
b_:function(a){return new V.V(a.movementX,a.movementY)},
bH:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.a8])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
q=C.d.a1(r.pageX)
C.d.a1(r.pageY)
p=o.left
C.d.a1(r.pageX)
n.push(new V.a8(q-p,C.d.a1(r.pageY)-o.top))}return n},
aA:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cW(u,new X.by(t,a.altKey,a.shiftKey))},
bE:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.M()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.M()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fd:function(a){this.f=!0},
f0:function(a){this.f=!1},
f7:function(a){if(this.f&&this.bE(a))a.preventDefault()},
fh:function(a){var u
if(!this.f)return
u=this.cD(a)
this.b.i0(u)},
ff:function(a){var u
if(!this.f)return
u=this.cD(a)
this.b.hX(u)},
fl:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aM(a)
if(r.x){u=r.aA(a)
t=r.b_(a)
if(r.d.c9(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.aA(a)
s=r.aC(a)
if(r.c.c9(u,s))a.preventDefault()},
fp:function(a){var u,t,s,r=this
r.aM(a)
u=r.aA(a)
if(r.x){t=r.b_(a)
if(r.d.b8(u,t))a.preventDefault()
return}if(r.r)return
s=r.aC(a)
if(r.c.b8(u,s))a.preventDefault()},
fb:function(a){var u,t,s,r=this
if(!r.bE(a)){r.aM(a)
u=r.aA(a)
if(r.x){t=r.b_(a)
if(r.d.b8(u,t))a.preventDefault()
return}if(r.r)return
s=r.aC(a)
if(r.c.b8(u,s))a.preventDefault()}},
fn:function(a){var u,t,s,r=this
r.aM(a)
u=r.aA(a)
if(r.x){t=r.b_(a)
if(r.d.b7(u,t))a.preventDefault()
return}if(r.r)return
s=r.aC(a)
if(r.c.b7(u,s))a.preventDefault()},
f9:function(a){var u,t,s,r=this
if(!r.bE(a)){r.aM(a)
u=r.aA(a)
if(r.x){t=r.b_(a)
if(r.d.b7(u,t))a.preventDefault()
return}if(r.r)return
s=r.aC(a)
if(r.c.b7(u,s))a.preventDefault()}},
fs:function(a){var u,t,s=this
s.aM(a)
u=new V.V((a&&C.D).ghs(a),C.D.ght(a)).v(0,180)
if(s.x){if(s.d.i1(u))a.preventDefault()
return}if(s.r)return
t=s.aC(a)
if(s.c.i2(u,t))a.preventDefault()},
fu:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aA(s.y)
t=s.aC(s.y)
s.d.fj(u,t,r)}},
fM:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bL(a)
u=t.bH(a)
if(t.e.i_(u))a.preventDefault()},
fI:function(a){var u
this.bL(a)
u=this.bH(a)
if(this.e.hY(u))a.preventDefault()},
fK:function(a){var u
this.bL(a)
u=this.bH(a)
if(this.e.hZ(u))a.preventDefault()}}
D.f_.prototype={$ia6:1}
D.fl.prototype={$ia6:1}
D.a6.prototype={}
D.dc.prototype={
X:function(a){var u=this.y
if(u!=null)u.F(a)},
cN:function(a){var u=this.z
if(u!=null)u.F(a)},
fi:function(){return this.cN(null)},
fw:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.l)(a),++t){s=a[t]
if(s==null||this.ek(s))return!1}return!0},
eV:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcM(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.l)(b),++r){q=b[r]
if(q instanceof D.bC)this.x.push(q)
p=q.go
if(p==null){p=new D.bu()
p.d=0
q.go=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}u=new D.b4()
u.b=!0
this.X(u)},
fC:function(a,b){var u,t,s
for(u=b.gP(b),t=this.gcM();u.q();){s=u.gC(u)
C.b.K(this.e,s)
s.gu().K(0,t)}u=new D.b5()
u.b=!0
this.X(u)},
ek:function(a){var u=C.b.L(this.x,a)
return u},
$ai:function(){return[D.a6]},
$aaM:function(){return[D.a6]}}
D.hJ.prototype={$ia6:1}
D.bC.prototype={
X:function(a){var u=this.go
if(u!=null)u.F(a)},
el:function(){return this.X(null)},
gad:function(){var u=this.x!=null?1:0,t=this.y!=null?2:0,s=this.db?8:0
return u+t+4+s},
$ia6:1}
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
V.ag.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ag))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.F(u.a,3,0)+", "+V.F(u.b,3,0)+", "+V.F(u.c,3,0)+", "+V.F(u.d,3,0)+"]"}}
V.fu.prototype={}
V.dh.prototype={
a9:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.K])
return t},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dh))return!1
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
i:function(a){var u,t,s,r,q=this,p=[P.K],o=V.bR(H.b([q.a,q.d,q.r],p),3,0),n=V.bR(H.b([q.b,q.e,q.x],p),3,0),m=V.bR(H.b([q.c,q.f,q.y],p),3,0)
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
V.aS.prototype={
a9:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.K])
return t},
c7:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.A().a)return V.bx()
u=1/b1
t=-n
s=-a0
return V.aw((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
B:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.aw(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bs:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.B(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
aV:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.R(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aS))return!1
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
H:function(a){var u,t,s,r,q,p=this,o=[P.K],n=V.bR(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.bR(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.bR(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.bR(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
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
O:function(){return this.H("")}}
V.a8.prototype={
M:function(a,b){return new V.a8(this.a-b.a,this.b-b.b)},
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a8))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+"]"}}
V.R.prototype={
A:function(a,b){return new V.R(this.a+b.a,this.b+b.b,this.c+b.c)},
M:function(a,b){return new V.R(this.a-b.a,this.b-b.b,this.c-b.c)},
B:function(a,b){return new V.R(this.a*b,this.b*b,this.c*b)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.R))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}}
V.bf.prototype={
p:function(a,b){var u,t,s=this
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
return"["+V.F(u.a,3,0)+", "+V.F(u.b,3,0)+", "+V.F(u.c,3,0)+", "+V.F(u.d,3,0)+"]"}}
V.ds.prototype={
gay:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ds))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.F(u.a,3,0)+", "+V.F(u.b,3,0)+", "+V.F(u.c,3,0)+", "+V.F(u.d,3,0)+"]"}}
V.V.prototype={
b4:function(a){return Math.sqrt(this.D(this))},
D:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.B()
if(typeof r!=="number")return H.w(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.w(t)
return s*r+u*t},
B:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.B()
u=this.b
if(typeof u!=="number")return u.B()
return new V.V(t*b,u*b)},
v:function(a,b){var u,t
if(Math.abs(b-0)<$.A().a){u=$.lU
return u==null?$.lU=new V.V(0,0):u}u=this.a
if(typeof u!=="number")return u.v()
t=this.b
if(typeof t!=="number")return t.v()
return new V.V(u/b,t/b)},
p:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.V))return!1
u=b.a
t=this.a
s=$.A()
s.toString
if(typeof u!=="number")return u.M()
if(typeof t!=="number")return H.w(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.M()
if(typeof t!=="number")return H.w(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+"]"}}
V.B.prototype={
b4:function(a){return Math.sqrt(this.D(this))},
D:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
c8:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.B(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aE:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.B(u*t-s*r,s*q-p*t,p*r-u*q)},
A:function(a,b){return new V.B(this.a+b.a,this.b+b.b,this.c+b.c)},
T:function(a){return new V.B(-this.a,-this.b,-this.c)},
B:function(a,b){return new V.B(this.a*b,this.b*b,this.c*b)},
v:function(a,b){if(Math.abs(b-0)<$.A().a)return V.cs()
return new V.B(this.a/b,this.b/b,this.c/b)},
dA:function(){var u=$.A().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.B))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}}
V.ct.prototype={
b4:function(a){var u=this,t=u.a,s=u.b,r=u.c,q=u.d
return Math.sqrt(t*t+s*s+r*r+q*q)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ct))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.F(u.a,3,0)+", "+V.F(u.b,3,0)+", "+V.F(u.c,3,0)+", "+V.F(u.d,3,0)+"]"}}
U.f7.prototype={
by:function(a){var u=V.pl(a,this.c,this.b)
return u},
gu:function(){var u=this.y
return u==null?this.y=D.J():u},
U:function(a){var u=this.y
if(u!=null)u.F(a)},
se2:function(a,b){},
sdB:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.A().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.by(u)}s=new D.y("maximumLocation",s,t.b)
s.b=!0
t.U(s)}},
sdD:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.A().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.by(u)}s=new D.y("minimumLocation",s,t.c)
s.b=!0
t.U(s)}},
sa5:function(a,b){var u,t=this
b=t.by(b)
u=t.d
if(!(Math.abs(u-b)<$.A().a)){t.d=b
u=new D.y("location",u,b)
u.b=!0
t.U(u)}},
sdC:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.A().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.y("maximumVelocity",r,a)
r.b=!0
s.U(r)}},
sY:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.A().a)){u.f=a
t=new D.y("velocity",t,a)
t.b=!0
u.U(t)}},
sdc:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.A().a)){this.x=a
u=new D.y("dampening",u,a)
u.b=!0
this.U(u)}},
ar:function(a,b){var u,t,s,r=this,q=r.f,p=$.A().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa5(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.A().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sY(u)}}}
U.cZ.prototype={
gu:function(){var u=this.b
return u==null?this.b=D.J():u},
az:function(a,b,c){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cZ))return!1
return J.D(this.a,b.a)},
i:function(a){return"Constant: "+this.a.H("          ")}}
U.c2.prototype={
gu:function(){var u=this.e
return u==null?this.e=D.J():u},
U:function(a){var u=this.e
if(u!=null)u.F(a)},
ai:function(){return this.U(null)},
en:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaK(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.l)(b),++r){q=b[r]
if(q!=null){p=q.gu()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.b4()
u.b=!0
this.U(u)},
fA:function(a,b){var u,t
for(u=b.gP(b),t=this.gaK();u.q();)u.gC(u).gu().K(0,t)
u=new D.b5()
u.b=!0
this.U(u)},
az:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.S()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.a_(r,r.length),u=null;r.q();){q=r.d
if(q!=null){t=q.az(0,b,c)
if(t!=null)u=u==null?t:t.B(0,u)}}s.f=u==null?V.bx():u
r=s.e
if(r!=null)r.an(0)}return s.f},
p:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.c2))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.d(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.d(r,t)
if(!J.D(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ai:function(){return[U.ai]},
$aaM:function(){return[U.ai]},
$iai:1}
U.c5.prototype={
gu:function(){var u=this.b
return u==null?this.b=D.J():u},
U:function(a){var u=this.b
if(u!=null)u.F(a)},
ai:function(){return this.U(null)},
az:function(a,b,c){var u,t=this,s=t.d,r=b.e
if(s<r){t.d=r
s=t.b
if(s!=null)++s.d
s=t.a
s=s==null?null:s.az(0,b,c)
u=s==null?null:s.c7(0)
t.c=u==null?V.bx():u
s=t.b
if(s!=null)s.an(0)}return t.c},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.c5))return!1
if(!J.D(this.a,b.a))return!1
return!0},
i:function(a){return"Invert"},
$iai:1}
U.ai.prototype={}
U.dN.prototype={
gu:function(){var u=this.fx
return u==null?this.fx=D.J():u},
U:function(a){var u=this.fx
if(u!=null)u.F(a)},
ai:function(){return this.U(null)},
hf:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
u=a.c
t=u.b
u=t==null?u.b=D.J():t
u.n(0,s.geO())
u=s.a.c
t=u.d
u=t==null?u.d=D.J():t
u.n(0,s.geQ())
u=s.a.c
t=u.c
u=t==null?u.c=D.J():t
u.n(0,s.geS())
u=s.a.d
t=u.f
u=t==null?u.f=D.J():t
u.n(0,s.geJ())
u=s.a.d
t=u.d
u=t==null?u.d=D.J():t
u.n(0,s.geL())
u=s.a.e
t=u.b
u=t==null?u.b=D.J():t
u.n(0,s.gh6())
u=s.a.e
t=u.d
u=t==null?u.d=D.J():t
u.n(0,s.gh4())
u=s.a.e
t=u.c
u=t==null?u.c=D.J():t
u.n(0,s.gh2())
return!0},
au:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.T()
u=-u}if(this.r){if(typeof t!=="number")return t.T()
t=-t}return new V.V(u,t)},
eP:function(a){var u=this
H.o(a,"$ibb")
if(!J.D(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
eR:function(a){var u,t,s,r,q,p,o,n=this
H.o(a,"$ibb")
if(!n.cx)return
if(n.ch){u=a.d.M(0,a.y)
u=new V.V(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.w(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.M(0,a.y)
u=n.au(new V.V(t.a,t.b).B(0,2).v(0,u.gay()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.w(s)
t.sY(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.w(t)
s.sY(-u*10*t)}else{u=a.c
t=a.d
s=t.M(0,a.y)
r=n.au(new V.V(s.a,s.b).B(0,2).v(0,u.gay()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.w(p)
o=n.cy
if(typeof o!=="number")return H.w(o)
s.sa5(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.w(q)
s=n.db
if(typeof s!=="number")return H.w(s)
o.sa5(0,-p*q+s)
n.b.sY(0)
n.c.sY(0)
t=t.M(0,a.z)
n.dx=n.au(new V.V(t.a,t.b).B(0,2).v(0,u.gay()))}n.ai()},
eT:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.D(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.w(s)
u.sY(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.w(u)
s.sY(-t*10*u)
r.ai()}},
eK:function(a){var u=this
if(H.o(a,"$ide").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
eM:function(a){var u,t,s,r,q,p,o,n=this
H.o(a,"$ibb")
if(!J.D(n.d,a.x.b))return
u=a.c
t=a.d
s=t.M(0,a.y)
r=n.au(new V.V(s.a,s.b).B(0,2).v(0,u.gay()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.w(p)
o=n.cy
if(typeof o!=="number")return H.w(o)
s.sa5(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.w(q)
s=n.db
if(typeof s!=="number")return H.w(s)
o.sa5(0,-p*q+s)
n.b.sY(0)
n.c.sY(0)
t=t.M(0,a.z)
n.dx=n.au(new V.V(t.a,t.b).B(0,2).v(0,u.gay()))
n.ai()},
h7:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
h5:function(a){var u,t,s,r,q,p,o,n=this
H.o(a,"$idH")
if(!n.cx)return
if(n.ch){u=a.d.M(0,a.y)
u=new V.V(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.w(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.M(0,a.y)
u=n.au(new V.V(t.a,t.b).B(0,2).v(0,u.gay()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.w(s)
t.sY(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.w(t)
s.sY(-u*10*t)}else{u=a.c
t=a.d
s=t.M(0,a.y)
r=n.au(new V.V(s.a,s.b).B(0,2).v(0,u.gay()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.w(p)
o=n.cy
if(typeof o!=="number")return H.w(o)
s.sa5(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.w(q)
s=n.db
if(typeof s!=="number")return H.w(s)
o.sa5(0,-p*q+s)
n.b.sY(0)
n.c.sY(0)
t=t.M(0,a.z)
n.dx=n.au(new V.V(t.a,t.b).B(0,2).v(0,u.gay()))}n.ai()},
h3:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.D(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.w(s)
u.sY(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.w(u)
s.sY(-t*10*u)
r.ai()}},
az:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.S()
if(q<p){r.dy=p
u=b.y
r.c.ar(0,u)
r.b.ar(0,u)
q=V.lx(r.b.d)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.B(0,V.aw(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iai:1}
M.cY.prototype={
gu:function(){var u=this.r
return u==null?this.r=D.J():u},
ac:function(a){var u=this.r
if(u!=null)u.F(a)},
bx:function(){return this.ac(null)},
fE:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gah(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.l)(b),++r){q=b[r]
if(q!=null){p=q.gu()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.b4()
u.b=!0
this.ac(u)},
fG:function(a,b){var u,t
for(u=b.gP(b),t=this.gah();u.q();)u.gC(u).gu().K(0,t)
u=new D.b5()
u.b=!0
this.ac(u)},
aq:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.a_(u,u.length);u.q();){t=u.d
if(t!=null)t.aq(a)}s.f=!1},
$ai:function(){return[M.aA]},
$aaM:function(){return[M.aA]},
$iaA:1}
M.d3.prototype={
ac:function(a){var u=this.y
if(u!=null)u.F(a)},
bx:function(){return this.ac(null)},
f3:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gah(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.l)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bu()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.b4()
u.b=!0
this.ac(u)},
f5:function(a,b){var u,t
for(u=b.gP(b),t=this.gah();u.q();)u.gC(u).gu().K(0,t)
u=new D.b5()
u.b=!0
this.ac(u)},
sd9:function(a){var u,t,s=this
if(a==null)a=X.lA(1.0471975511965976,null)
u=s.b
if(u!==a){if(u!=null)u.gu().K(0,s.gah())
t=s.b
s.b=a
a.gu().n(0,s.gah())
u=new D.y("camera",t,s.b)
u.b=!0
s.ac(u)}},
sdW:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gu().K(0,t.gah())
u=t.c
t.c=b
b.gu().n(0,t.gah())
s=new D.y("target",u,t.c)
s.b=!0
t.ac(s)}},
saT:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gu().K(0,t.gah())
u=t.d
t.d=a
if(a!=null)a.gu().n(0,t.gah())
s=new D.y("technique",u,t.d)
s.b=!0
t.ac(s)}},
gu:function(){var u=this.y
return u==null?this.y=D.J():u},
aq:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
a.dR(c.d)
c.c.aj(a)
u=c.b
t=a.c
s=a.d
r=u.c
q=u.d
p=u.e
o=p-q
n=1/Math.tan(r*0.5)
m=V.aw(-n/(t/s),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0)
u.a
a.cy.dQ(m)
t=$.lB
if(t==null){t=V.lD()
s=V.lY()
r=$.lV
if(r==null)r=$.lV=new V.B(0,0,-1)
l=r.v(0,Math.sqrt(r.D(r)))
s=s.aE(l)
k=s.v(0,Math.sqrt(s.D(s)))
j=l.aE(k)
i=new V.B(t.a,t.b,t.c)
h=k.T(0).D(i)
g=j.T(0).D(i)
f=l.T(0).D(i)
t=V.aw(k.a,j.a,l.a,h,k.b,j.b,l.b,g,k.c,j.c,l.c,f,0,0,0,1)
$.lB=t
e=t}else e=t
t=u.b
if(t!=null){d=t.az(0,a,u)
if(d!=null)e=d.B(0,e)}a.db.dQ(e)
u=c.d
if(u!=null)u.ar(0,a)
for(u=c.e.a,u=new J.a_(u,u.length);u.q();)u.d.ar(0,a)
for(u=c.e.a,u=new J.a_(u,u.length);u.q();)u.d.aq(a)
c.b.toString
a.cy.ca()
a.db.ca()
c.c.ba(a)
a.dP()},
$iaA:1}
M.aA.prototype={}
A.cT.prototype={}
A.eU.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hv:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
de:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.a0.prototype={
gas:function(a){var u=this.a?1:0
return u|0|0},
i:function(a){var u=this.a?1:0
return""+(u|0|0)},
p:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.a0))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.fk.prototype={}
A.h8.prototype={
ef:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
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
A.oB(c0,u)
A.oD(c0,u)
A.oC(c0,u)
A.oF(c0,u)
A.oG(c0,u)
A.oE(c0,u)
A.oH(c0,u)
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
b5.dv(0,s.charCodeAt(0)==0?s:s,A.oA(b5.z))
b5.Q=b5.x.h(0,"posAttr")
b5.cx=b5.x.h(0,"normAttr")
b5.ch=b5.x.h(0,"binmAttr")
b5.cy=b5.x.h(0,"txt2DAttr")
b5.db=b5.x.h(0,"txtCubeAttr")
b5.dx=b5.x.h(0,"bendAttr")
if(c0.dy)b5.id=H.o(b5.y.W(0,"invViewMat"),"$ia3")
if(t)b5.dy=H.o(b5.y.W(0,"objMat"),"$ia3")
if(r)b5.fr=H.o(b5.y.W(0,"viewObjMat"),"$ia3")
b5.fy=H.o(b5.y.W(0,"projViewObjMat"),"$ia3")
if(c0.go)b5.fx=H.o(b5.y.W(0,"viewMat"),"$ia3")
if(c0.x1)b5.k1=H.o(b5.y.W(0,"txt2DMat"),"$icp")
if(c0.x2)b5.k2=H.o(b5.y.W(0,"txtCubeMat"),"$ia3")
if(c0.y1)b5.k3=H.o(b5.y.W(0,"colorMat"),"$ia3")
b5.r1=H.b([],[A.a3])
t=c0.bj
if(t>0){b5.k4=b5.y.W(0,"bendMatCount")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.h(0,q)
if(m==null)H.r(P.v(b7+q+b8))
s.push(H.o(m,"$ia3"))}}if(c0.a.a)b5.r2=H.o(b5.y.W(0,"emissionClr"),"$iG")
if(c0.b.a)b5.x1=H.o(b5.y.W(0,"ambientClr"),"$iG")
if(c0.c.a)b5.y2=H.o(b5.y.W(0,"diffuseClr"),"$iG")
if(c0.d.a)b5.bk=H.o(b5.y.W(0,"invDiffuseClr"),"$iG")
t=c0.e.a
if(!t)s=!1
else s=!0
if(s){b5.dh=H.o(b5.y.W(0,"shininess"),"$iT")
if(t)b5.dg=H.o(b5.y.W(0,"specularClr"),"$iG")}if(c0.db){b5.di=H.o(b5.y.W(0,"envSampler"),"$ibG")
if(c0.r.a)b5.dj=H.o(b5.y.W(0,"reflectClr"),"$iG")
t=c0.x.a
if(!t)s=!1
else s=!0
if(s){b5.dk=H.o(b5.y.W(0,"refraction"),"$iT")
if(t)b5.dl=H.o(b5.y.W(0,"refractClr"),"$iG")}}if(c0.y.a)b5.dm=H.o(b5.y.W(0,"alpha"),"$iT")
if(c0.k1){t=c0.z
s=t.length
if(s!==0){r=P.u
b5.bW=new H.I([r,A.bh])
b5.bX=new H.I([r,[P.n,A.cn]])
for(r=[A.cn],l=0;l<t.length;t.length===s||(0,H.l)(t),++l){k=t[l]
j=k.a
i="barLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].startPnt"
m=p.h(0,o)
if(m==null)H.r(P.v(b7+o+b8))
H.o(m,"$iG")
p=b5.y
o=i+"s["+n+"].endPnt"
g=p.h(0,o)
if(g==null)H.r(P.v(b7+o+b8))
H.o(g,"$iG")
p=b5.y
o=i+"s["+n+"].color"
f=p.h(0,o)
if(f==null)H.r(P.v(b7+o+b8))
H.o(f,"$iG")
if(typeof j!=="number")return j.ae()
if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
e=p.h(0,o)
if(e==null)H.r(P.v(b7+o+b8))
H.o(e,"$iT")
p=b5.y
o=i+"s["+n+"].att1"
d=p.h(0,o)
if(d==null)H.r(P.v(b7+o+b8))
H.o(d,"$iT")
p=b5.y
o=i+"s["+n+"].att2"
c=p.h(0,o)
if(c==null)H.r(P.v(b7+o+b8))
H.o(c,"$iT")
b=c
a=d
a0=e}else{b=b6
a=b
a0=a}h.push(new A.cn(m,g,f,a0,a,b))}b5.bX.m(0,j,h)
q=b5.bW
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.r(P.v(b7+o+b8))
q.m(0,j,m)}}t=c0.Q
s=t.length
if(s!==0){r=P.u
b5.bY=new H.I([r,A.bh])
b5.bZ=new H.I([r,[P.n,A.co]])
for(r=[A.co],l=0;l<t.length;t.length===s||(0,H.l)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.ae()
p=(j&1)!==0
if(p){o=b5.y
a1=i+"s["+n+"].objUp"
m=o.h(0,a1)
if(m==null)H.r(P.v(b7+a1+b8))
H.o(m,"$iG")
o=b5.y
a1=i+"s["+n+"].objRight"
g=o.h(0,a1)
if(g==null)H.r(P.v(b7+a1+b8))
H.o(g,"$iG")
o=b5.y
a1=i+"s["+n+"].objDir"
f=o.h(0,a1)
if(f==null)H.r(P.v(b7+a1+b8))
H.o(f,"$iG")
a2=f
a3=g
a4=m}else{a2=b6
a3=a2
a4=a3}o=b5.y
a1=i+"s["+n+"].viewDir"
m=o.h(0,a1)
if(m==null)H.r(P.v(b7+a1+b8))
H.o(m,"$iG")
o=b5.y
a1=i+"s["+n+"].color"
g=o.h(0,a1)
if(g==null)H.r(P.v(b7+a1+b8))
H.o(g,"$iG")
if(p){p=b5.y
o=i+"sTexture2D"+n
f=p.h(0,o)
if(f==null)H.r(P.v(b7+o+b8))
H.o(f,"$ibF")
a5=f}else a5=b6
h.push(new A.co(a4,a3,a2,m,g,a5))}b5.bZ.m(0,j,h)
q=b5.bY
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.r(P.v(b7+o+b8))
q.m(0,j,m)}}t=c0.ch
s=t.length
if(s!==0){r=P.u
b5.c_=new H.I([r,A.bh])
b5.c0=new H.I([r,[P.n,A.cq]])
for(r=[A.cq],l=0;l<t.length;t.length===s||(0,H.l)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.h(0,o)
if(m==null)H.r(P.v(b7+o+b8))
H.o(m,"$iG")
p=b5.y
o=i+"s["+n+"].viewPnt"
g=p.h(0,o)
if(g==null)H.r(P.v(b7+o+b8))
H.o(g,"$iG")
p=b5.y
o=i+"s["+n+"].color"
f=p.h(0,o)
if(f==null)H.r(P.v(b7+o+b8))
H.o(f,"$iG")
if(typeof j!=="number")return j.ae()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
e=p.h(0,o)
if(e==null)H.r(P.v(b7+o+b8))
H.o(e,"$icp")
a6=e}else a6=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
e=p.h(0,o)
if(e==null)H.r(P.v(b7+o+b8))
H.o(e,"$ibG")
a5=e}else a5=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
e=p.h(0,o)
if(e==null)H.r(P.v(b7+o+b8))
H.o(e,"$ibG")
p=b5.y
o=i+"s["+n+"].shadowAdj"
d=p.h(0,o)
if(d==null)H.r(P.v(b7+o+b8))
H.o(d,"$icm")
a7=e
a8=d}else{a7=b6
a8=a7}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
e=p.h(0,o)
if(e==null)H.r(P.v(b7+o+b8))
H.o(e,"$iT")
p=b5.y
o=i+"s["+n+"].att1"
d=p.h(0,o)
if(d==null)H.r(P.v(b7+o+b8))
H.o(d,"$iT")
p=b5.y
o=i+"s["+n+"].att2"
c=p.h(0,o)
if(c==null)H.r(P.v(b7+o+b8))
H.o(c,"$iT")
b=c
a=d
a0=e}else{b=b6
a=b
a0=a}h.push(new A.cq(m,g,a6,f,a5,a7,a8,a0,a,b))}b5.c0.m(0,j,h)
q=b5.c_
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.r(P.v(b7+o+b8))
q.m(0,j,m)}}t=c0.cx
s=t.length
if(s!==0){r=P.u
b5.c1=new H.I([r,A.bh])
b5.c2=new H.I([r,[P.n,A.cr]])
for(r=[A.cr],l=0;l<t.length;t.length===s||(0,H.l)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.h(0,o)
if(m==null)H.r(P.v(b7+o+b8))
H.o(m,"$iG")
p=b5.y
o=i+"s["+n+"].objDir"
g=p.h(0,o)
if(g==null)H.r(P.v(b7+o+b8))
H.o(g,"$iG")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.h(0,o)
if(f==null)H.r(P.v(b7+o+b8))
H.o(f,"$iG")
p=b5.y
o=i+"s["+n+"].color"
e=p.h(0,o)
if(e==null)H.r(P.v(b7+o+b8))
H.o(e,"$iG")
if(typeof j!=="number")return j.ae()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
d=p.h(0,o)
if(d==null)H.r(P.v(b7+o+b8))
H.o(d,"$iG")
p=b5.y
o=i+"s["+n+"].objRight"
c=p.h(0,o)
if(c==null)H.r(P.v(b7+o+b8))
H.o(c,"$iG")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.h(0,o)
if(a9==null)H.r(P.v(b7+o+b8))
H.o(a9,"$iT")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.h(0,o)
if(b0==null)H.r(P.v(b7+o+b8))
H.o(b0,"$iT")
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
if(d==null)H.r(P.v(b7+a1+b8))
H.o(d,"$icm")
a8=d}else a8=b6
if((j&8)!==0){o=b5.y
a1=i+"s["+n+"].cutoff"
d=o.h(0,a1)
if(d==null)H.r(P.v(b7+a1+b8))
H.o(d,"$iT")
o=b5.y
a1=i+"s["+n+"].coneAngle"
c=o.h(0,a1)
if(c==null)H.r(P.v(b7+a1+b8))
H.o(c,"$iT")
b3=c
b4=d}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
a1=i+"s["+n+"].att0"
d=o.h(0,a1)
if(d==null)H.r(P.v(b7+a1+b8))
H.o(d,"$iT")
o=b5.y
a1=i+"s["+n+"].att1"
c=o.h(0,a1)
if(c==null)H.r(P.v(b7+a1+b8))
H.o(c,"$iT")
o=b5.y
a1=i+"s["+n+"].att2"
a9=o.h(0,a1)
if(a9==null)H.r(P.v(b7+a1+b8))
H.o(a9,"$iT")
b=a9
a=c
a0=d}else{b=b6
a=b
a0=a}if((j&1)!==0){o=b5.y
a1=i+"sTexture2D"+n
d=o.h(0,a1)
if(d==null)H.r(P.v(b7+a1+b8))
H.o(d,"$ibF")
a5=d}else a5=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
d=p.h(0,o)
if(d==null)H.r(P.v(b7+o+b8))
H.o(d,"$ibF")
a7=d}else a7=b6
h.push(new A.cr(m,g,f,e,a4,a3,b2,b1,a8,b4,b3,a0,a,b,a5,a7))}b5.c2.m(0,j,h)
q=b5.c1
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.r(P.v(b7+o+b8))
q.m(0,j,m)}}}},
fX:function(a,b){}}
A.cU.prototype={
i:function(a){return"barLight"+H.e(this.a)}}
A.d0.prototype={
i:function(a){return"dirLight"+H.e(this.a)}}
A.dq.prototype={
i:function(a){return"pointLight"+H.e(this.a)}}
A.dw.prototype={
i:function(a){return"spotLight"+H.e(this.a)}}
A.hb.prototype={
i:function(a){return this.b3}}
A.cn.prototype={}
A.co.prototype={}
A.cq.prototype={}
A.cr.prototype={}
A.du.prototype={
cr:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
dv:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.cE(b,35633)
r.f=r.cE(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!u.getProgramParameter(r.r,35714)){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.r(P.v("Failed to link shader: "+H.e(s)))}r.fZ()
r.h0()},
aj:function(a){a.a.useProgram(this.r)
this.x.hv()},
cE:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.v("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
fZ:function(){var u,t,s,r=this,q=H.b([],[A.cT]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.w(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cT(p,t.name,s))}r.x=new A.eU(q)},
h0:function(){var u,t,s,r=this,q=H.b([],[A.dJ]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.w(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.hr(t.type,t.size,t.name,s))}r.y=new A.iG(q)},
aL:function(a,b,c){var u=this.a
if(a===1)return new A.bh(u,b,c)
else return A.kV(u,this.r,b,a,c)},
eE:function(a,b,c){var u=this.a
if(a===1)return new A.bF(u,b,c)
else return A.kV(u,this.r,b,a,c)},
eF:function(a,b,c){var u=this.a
if(a===1)return new A.bG(u,b,c)
else return A.kV(u,this.r,b,a,c)},
bg:function(a,b){return new P.dZ(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
hr:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aL(b,c,d)
case 5121:return u.aL(b,c,d)
case 5122:return u.aL(b,c,d)
case 5123:return u.aL(b,c,d)
case 5124:return u.aL(b,c,d)
case 5125:return u.aL(b,c,d)
case 5126:return new A.T(u.a,c,d)
case 35664:return new A.iC(u.a,c,d)
case 35665:return new A.G(u.a,c,d)
case 35666:return new A.cm(u.a,c,d)
case 35667:return new A.iD(u.a,c,d)
case 35668:return new A.iE(u.a,c,d)
case 35669:return new A.iF(u.a,c,d)
case 35674:return new A.iH(u.a,c,d)
case 35675:return new A.cp(u.a,c,d)
case 35676:return new A.a3(u.a,c,d)
case 35678:return u.eE(b,c,d)
case 35680:return u.eF(b,c,d)
case 35670:throw H.c(u.bg("BOOL",c))
case 35671:throw H.c(u.bg("BOOL_VEC2",c))
case 35672:throw H.c(u.bg("BOOL_VEC3",c))
case 35673:throw H.c(u.bg("BOOL_VEC4",c))
default:throw H.c(P.v("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.dJ.prototype={}
A.iG.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
W:function(a,b){var u=this.h(0,b)
if(u==null)throw H.c(P.v("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.O()},
O:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.l)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.bh.prototype={
i:function(a){return"Uniform1i: "+H.e(this.c)}}
A.iD.prototype={
i:function(a){return"Uniform2i: "+H.e(this.c)}}
A.iE.prototype={
i:function(a){return"Uniform3i: "+H.e(this.c)}}
A.iF.prototype={
i:function(a){return"Uniform4i: "+H.e(this.c)}}
A.iB.prototype={
i:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.T.prototype={
i:function(a){return"Uniform1f: "+H.e(this.c)}}
A.iC.prototype={
i:function(a){return"Uniform2f: "+H.e(this.c)}}
A.G.prototype={
i:function(a){return"Uniform3f: "+H.e(this.c)}}
A.cm.prototype={
i:function(a){return"Uniform4f: "+H.e(this.c)}}
A.iH.prototype={
i:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.cp.prototype={
af:function(a){var u=new Float32Array(H.bM(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.e(this.c)}}
A.a3.prototype={
af:function(a){var u=new Float32Array(H.bM(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.e(this.c)}}
A.bF.prototype={
i:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.bG.prototype={
i:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.jV.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.c8(s.b,b).c8(s.d.c8(s.c,b),c)
a.sa5(0,new V.R(r.a,r.b,r.c))
a.sdY(r.v(0,Math.sqrt(r.D(r))))
s=1-b
u=1-c
a.sd5(new V.bf(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)}}
F.k5.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)}}
F.k7.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.w(p)
s=-s*p
u=r*p
a.sa5(0,new V.R(s,u,q))
u=new V.B(s,u,q)
a.sdY(u.v(0,Math.sqrt(u.D(u))))
a.sd5(new V.bf(1-c,2+c,-1,-1))}}
F.k8.prototype={
$1:function(a){return this.a.$2(a,1)}}
F.k9.prototype={
$1:function(a){return this.a.$2(1-a,0)}}
F.ks.prototype={
$2:function(a,b){return 0}}
F.kt.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.w(s)
u=a.f
t=new V.B(u.a,u.b,u.c)
s=t.v(0,Math.sqrt(t.D(t))).B(0,this.b+s)
a.sa5(0,new V.R(s.a,s.b,s.c))}}
F.kv.prototype={
$1:function(a){return new V.R(Math.cos(a),Math.sin(a),0)}}
F.kh.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.R(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)}}
F.k6.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.lg(n.$1(o),m)
m=J.lg(n.$1(o+3.141592653589793/p.c),m).M(0,l)
m=new V.B(m.a,m.b,m.c)
u=m.v(0,Math.sqrt(m.D(m)))
n=$.lW
if(n==null){n=new V.B(1,0,0)
$.lW=n
t=n}else t=n
n=u.aE(!J.D(u,t)?V.lZ():t)
s=n.v(0,Math.sqrt(n.D(n)))
n=s.aE(u)
t=n.v(0,Math.sqrt(n.D(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.B(0,n*m)
m=s.B(0,q*m)
a.sa5(0,l.A(0,new V.R(n.a-m.a,n.b-m.b,n.c-m.c)))}}
F.b3.prototype={
b1:function(){var u=this
if(!u.gb2()){C.b.K(u.a.a.d.b,u)
u.a.a.a_()}u.bI()
u.bJ()
u.fP()},
bM:function(a){this.a=a
a.d.b.push(this)},
bN:function(a){this.b=a
a.d.c.push(this)},
fY:function(a){this.c=a
a.d.d.push(this)},
bI:function(){var u=this.a
if(u!=null){C.b.K(u.d.b,this)
this.a=null}},
bJ:function(){var u=this.b
if(u!=null){C.b.K(u.d.c,this)
this.b=null}},
fP:function(){var u=this.c
if(u!=null){C.b.K(u.d.d,this)
this.c=null}},
gb2:function(){return this.a==null||this.b==null||this.c==null},
ey:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cs()
if(q!=null)s=s.A(0,q)
if(u!=null)s=s.A(0,u)
if(t!=null)s=s.A(0,t)
if(s.dA())return
return s.v(0,Math.sqrt(s.D(s)))},
eA:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.M(0,q)
r=new V.B(r.a,r.b,r.c)
s=r.v(0,Math.sqrt(r.D(r)))
r=t.M(0,q)
r=new V.B(r.a,r.b,r.c)
r=s.aE(r.v(0,Math.sqrt(r.D(r))))
return r.v(0,Math.sqrt(r.D(r)))},
bR:function(){var u,t=this
if(t.d!=null)return!0
u=t.ey()
if(u==null){u=t.eA()
if(u==null)return!1}t.d=u
t.a.a.a_()
return!0},
ex:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.cs()
if(q!=null)s=s.A(0,q)
if(u!=null)s=s.A(0,u)
if(t!=null)s=s.A(0,t)
if(s.dA())return
return s.v(0,Math.sqrt(s.D(s)))},
ez:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.A().a){l=d.M(0,g)
l=new V.B(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.D(l)))
if(s.a-t.a<0)q=q.T(0)}else{p=(l-u.b)/r
l=d.M(0,g).B(0,p).A(0,g).M(0,j)
l=new V.B(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.D(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.T(0)}l=n.d
if(l!=null){o=l.v(0,Math.sqrt(l.D(l)))
l=o.aE(q)
l=l.v(0,Math.sqrt(l.D(l))).aE(o)
q=l.v(0,Math.sqrt(l.D(l)))}return q},
bP:function(){var u,t=this
if(t.e!=null)return!0
u=t.ex()
if(u==null){u=t.ez()
if(u==null)return!1}t.e=u
t.a.a.a_()
return!0},
ghm:function(a){var u=this
if(J.D(u.a,u.b))return!0
if(J.D(u.b,u.c))return!0
if(J.D(u.c,u.a))return!0
return!1},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
H:function(a){var u,t,s=this
if(s.gb2())return a+"disposed"
u=a+C.a.am(J.a5(s.a.e),0)+", "+C.a.am(J.a5(s.b.e),0)+", "+C.a.am(J.a5(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
O:function(){return this.H("")}}
F.fx.prototype={}
F.i5.prototype={
b5:function(a,b,c){var u,t=b.a
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
F.c7.prototype={
b1:function(){var u=this
if(!u.gb2()){C.b.K(u.a.a.c.b,u)
u.a.a.a_()}u.bI()
u.bJ()},
bM:function(a){this.a=a
a.c.b.push(this)},
bN:function(a){this.b=a
a.c.c.push(this)},
bI:function(){var u=this.a
if(u!=null){C.b.K(u.c.b,this)
this.a=null}},
bJ:function(){var u=this.b
if(u!=null){C.b.K(u.c.c,this)
this.b=null}},
gb2:function(){return this.a==null||this.b==null},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
H:function(a){if(this.gb2())return a+"disposed"
return a+C.a.am(J.a5(this.a.e),0)+", "+C.a.am(J.a5(this.b.e),0)},
O:function(){return this.H("")}}
F.fW.prototype={}
F.iA.prototype={
b5:function(a,b,c){var u,t=b.a
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
F.cf.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
H:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.a.am(J.a5(u.e),0)},
O:function(){return this.H("")}}
F.hY.prototype={
gu:function(){var u=this.e
return u==null?this.e=D.J():u},
b6:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.w()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.l)(g),++s){r=g[s]
h.a.n(0,r.ho())}h.a.w()
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
o=new F.cf()
if(n.a==null)H.r(P.v("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.F(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.l)(g),++s){m=g[s]
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
F.nd(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.l)(g),++s){j=g[s]
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
F.c0(l,k,i)}g=h.e
if(g!=null)g.an(0)},
aw:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aw()||!1
if(!t.a.aw())u=!1
s=t.e
if(s!=null)s.an(0)
return u},
hN:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.b(o.slice(0),[H.aJ(o,0)])
for(o=[F.bi];u.length!==0;){t=C.b.ghA(u)
C.b.cd(u,0)
if(t!=null){s=H.b([],o)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.d(u,r)
q=u[r]
if(q!=null&&a.b5(0,t,q)){s.push(q)
C.b.cd(u,r)}}if(s.length>1)b.b6(s)}}p.a.w()
p.c.ce()
p.d.ce()
p.b.i5()
p.c.cf(new F.iA())
p.d.cf(new F.i5())
o=p.e
if(o!=null)o.an(0)},
bO:function(){this.hN(new F.j3(),new F.hB())},
c4:function(){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
p.d.c4()
for(u=p.a.c.length-1;u>=0;--u){o=p.a.c
if(u>=o.length)return H.d(o,u)
t=o[u]
o=t.r
if(o!=null)t.sdE(new V.B(-o.a,-o.b,-o.c))
o=t.x
if(o!=null){s=-o.a
r=-o.b
o=-o.c
q=new V.B(s,r,o).v(0,Math.sqrt(s*s+r*r+o*o))
if(!J.D(t.x,q)){t.x=q
o=t.a
if(o!=null){o=o.e
if(o!=null)o.F(null)}}}}o=p.e
if(o!=null)o.an(0)},
d8:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.ar()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.b_().a)!==0)++s
if((t&$.aZ().a)!==0)++s
if((t&$.bn().a)!==0)++s
if((t&$.bo().a)!==0)++s
if((t&$.cO().a)!==0)++s
if((t&$.cP().a)!==0)++s
if((t&$.bT().a)!==0)++s
if((t&$.aY().a)!==0)++s
r=a4.gcn(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.K])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.cV])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.he(m)
k=l.gcn(l)
if(m>=t)return H.d(o,m)
o[m]=new Z.cV(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.d(i,j)
h=i[j].hL(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.d(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.bM(p)),35044)
u.bindBuffer(a1,null)
c=new Z.bX(new Z.dP(a1,d),o,a4)
c.b=H.b([],[Z.bv])
if(a0.b.b.length!==0){b=H.b([],[P.u])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.w()
b.push(t.e)}a=Z.kY(u,34963,b)
c.b.push(new Z.bv(0,b.length,a))}if(a0.c.b.length!==0){b=H.b([],[P.u])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.w()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.d(t,m)
t=t[m].b
t.a.a.w()
b.push(t.e)}a=Z.kY(u,34963,b)
c.b.push(new Z.bv(1,b.length,a))}if(a0.d.b.length!==0){b=H.b([],[P.u])
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
b.push(t.e)}a=Z.kY(u,34963,b)
c.b.push(new Z.bv(4,b.length,a))}return c},
i:function(a){var u=this,t="   ",s=H.b([],[P.h])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.H(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.H(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.H(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.H(t))}return C.b.j(s,"\n")},
a_:function(){var u=this.e
if(u!=null)u.F(null)}}
F.hZ.prototype={
ha:function(a){var u,t,s,r,q,p=H.b([],[F.b3]),o=a.length
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
hb:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.b3])
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
cf:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.h(0,q)
for(o=q-1;o>=0;--o){n=r.d.h(0,o)
if(a.b5(0,p,n)){p.b1()
break}}}}},
ce:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=s.ghm(s)
if(t)s.b1()}},
aw:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.l)(u),++r)if(!u[r].bR())s=!1
return s},
bQ:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.l)(u),++r)if(!u[r].bP())s=!1
return s},
c4:function(){var u,t,s,r,q,p
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
q=r.b
r.b=r.c
r.c=q
p=r.d
if(p!=null)r.d=new V.B(-p.a,-p.b,-p.c)
p=r.e
if(p!=null)r.e=new V.B(-p.a,-p.b,-p.c)
p=r.a.a.e
if(p!=null)p.F(null)}},
i:function(a){return this.O()},
H:function(a){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].H(a))
return C.b.j(r,"\n")},
O:function(){return this.H("")}}
F.i_.prototype={
gl:function(a){return this.b.length},
cf:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.h(0,q)
for(o=q-1;o>=0;--o){n=r.c.h(0,o)
if(a.b5(0,p,n)){p.b1()
break}}}}},
ce:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=J.D(s.a,s.b)
if(t)s.b1()}},
i:function(a){return this.O()},
H:function(a){var u,t,s=H.b([],[P.h]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.d(t,u)
s.push(t[u].H(a+(""+u+". ")))}return C.b.j(s,"\n")},
O:function(){return this.H("")}}
F.i0.prototype={
gl:function(a){return this.b.length},
i5:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.b.K(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.F(null)}s=t.a
if(s!=null){C.b.K(s.b.b,t)
t.a=null}}}},
i:function(a){return this.O()},
H:function(a){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].H(a))
return C.b.j(r,"\n")},
O:function(){return this.H("")}}
F.bi.prototype={
bV:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.dO(u.cx,r,o,t,s,q,p,a,n)},
ho:function(){return this.bV(null)},
sa5:function(a,b){var u
if(!J.D(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a_()}},
sdE:function(a){var u
a=a==null?null:a.v(0,Math.sqrt(a.D(a)))
if(!J.D(this.r,a)){this.r=a
u=this.a
if(u!=null)u.a_()}},
sdY:function(a){var u
if(!J.D(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a_()}},
sd5:function(a){var u
if(!J.D(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a_()}},
hL:function(a){var u,t,s=this
if(a.p(0,$.ar())){u=s.f
t=[P.K]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.b_())){u=s.r
t=[P.K]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.aZ())){u=s.x
t=[P.K]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.bn())){u=s.y
t=[P.K]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.p(0,$.bo())){u=s.z
t=[P.K]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.cO())){u=s.Q
t=[P.K]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.cP())){u=s.Q
t=[P.K]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.p(0,$.bT()))return H.b([s.ch],[P.K])
else if(a.p(0,$.aY())){u=s.cx
t=[P.K]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.K])},
bR:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cs()
t.d.G(0,new F.j8(s))
s=s.a
t.r=s.v(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.a_()
s=t.a.e
if(s!=null)s.an(0)}return!0},
bP:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cs()
t.d.G(0,new F.j7(s))
s=s.a
t.x=s.v(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.a_()
s=t.a.e
if(s!=null)s.an(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
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
q.push(V.F(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.i(0))
else q.push(r)
t=C.b.j(q,", ")
return a+"{"+t+"}"},
O:function(){return this.H("")}}
F.j8.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.A(0,t)}}}
F.j7.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.A(0,t)}}}
F.iZ.prototype={
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
u.a_()
return!0},
hc:function(a,b,c,d,e,f){var u=F.dO(a,null,b,c,d,e,f,null,0)
this.n(0,u)
return u},
gl:function(a){return this.c.length},
aw:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)u[s].bR()
return!0},
bQ:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)u[s].bP()
return!0},
hl:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.v(0,Math.sqrt(p*p+o*o+n*n))
if(!J.D(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.F(null)}}}}return!0},
i:function(a){return this.O()},
H:function(a){var u,t,s,r
this.w()
u=H.b([],[P.h])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.l)(t),++r)u.push(t[r].H(a))
return C.b.j(u,"\n")},
O:function(){return this.H("")}}
F.j_.prototype={
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
C.b.G(u.c,new F.j0(u,b))
C.b.G(u.d,new F.j1(u,b))},
i:function(a){return this.O()},
O:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].H(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].H(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].H(""))
return C.b.j(r,"\n")}}
F.j0.prototype={
$1:function(a){if(!J.D(a.a,this.a))this.b.$1(a)}}
F.j1.prototype={
$1:function(a){var u=this.a
if(!J.D(a.a,u)&&!J.D(a.b,u))this.b.$1(a)}}
F.j2.prototype={
gl:function(a){return this.b.length+this.c.length},
h:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.d(t,u)
return t[u]}else{if(b<0)return H.d(t,b)
return t[b]}},
i:function(a){return this.O()},
O:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].H(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].H(""))
return C.b.j(r,"\n")}}
F.j4.prototype={}
F.j3.prototype={
b5:function(a,b,c){return J.D(b.f,c.f)}}
F.j5.prototype={}
F.hB.prototype={
b6:function(a){var u,t,s,r=V.cs()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null)r=new V.B(r.a+s.a,r.b+s.b,r.c+s.c)}r=r.v(0,Math.sqrt(r.D(r)))
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.l)(a),++t)a[t].sdE(r)
return}}
F.j6.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.O()},
O:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].H(""))
return C.b.j(r,"\n")}}
O.fj.prototype={
gu:function(){var u=this.r
return u==null?this.r=D.J():u},
a3:function(a){var u=this.r
if(u!=null)u.F(a)},
ar:function(a,b){},
dS:function(a,b){var u,t,s,r,q=this,p=q.a
if(p==null){p=q.f
u="Grey"+(p?"Point":"View")+"Depth"
t=a.fr.h(0,u)
if(t==null){u=a.a
s="Grey"+(p?"Point":"View")+"Depth"
t=new A.fk(u,s)
t.cr(u,s)
p=p?"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = length(loc.xyz);\n":"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n"
p+="  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n  f = f * 256.0;\n  float r = floor(f);\n  f = (f - r) * 256.0;\n  float g = floor(f);\n  f = (f - g) * 256.0;\n  float b = floor(f);\n  vec3 clr = vec3(r, g, b) / 256.0;\n  gl_FragColor = vec4(clr, 1.0);\n}\n"
t.dv(0,"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n".charCodeAt(0)==0?"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n":"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n",p.charCodeAt(0)==0?p:p)
t.z=t.x.h(0,"posAttr")
t.Q=H.o(t.y.h(0,"width"),"$iT")
t.ch=H.o(t.y.h(0,"stop"),"$iT")
t.cx=H.o(t.y.h(0,"viewObjMat"),"$ia3")
t.cy=H.o(t.y.h(0,"projMat"),"$ia3")
a.d3(t)}q.a=t
p=t}u=b.e
if((!(u instanceof Z.bX)?b.e=null:u)==null){p=b.d.d8(new Z.dQ(a.a),$.ar())
u=p.aF($.ar())
s=q.a
u.e=s.z.c
b.e=p
p=s}p.aj(a)
u=q.b
s=q.c
r=p.Q
r.a.uniform1f(r.d,u-s)
s=q.c
u=p.ch
u.a.uniform1f(u.d,s)
s=a.cy
s=s.gZ(s)
u=p.cy
u.toString
u.af(s.a9(0,!0))
s=a.ge1()
p=p.cx
p.toString
p.af(s.a9(0,!0))
p=b.e
p.aj(a)
p.aq(a)
p.ba(a)
p=q.a
p.toString
a.a.useProgram(null)
p.x.de()}}
O.df.prototype={
gu:function(){var u=this.fr
return u==null?this.fr=D.J():u},
a3:function(a){var u=this.fr
if(u!=null)u.F(a)},
eq:function(){return this.a3(null)},
cP:function(a){this.a=null
this.a3(a)},
fT:function(){return this.cP(null)},
eX:function(a,b){var u=new D.b4()
u.b=!0
this.a3(u)},
eZ:function(a,b){var u=new D.b5()
u.b=!0
this.a3(u)},
cC:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=P.u
f=[f,f]
u=new H.I(f)
for(t=g.dx.e,s=t.length,r=0;r<t.length;t.length===s||(0,H.l)(t),++r){q=t[r]
p=q.gad()
o=u.h(0,q.gad())
u.m(0,p,o==null?1:o)}n=H.b([],[A.cU])
u.G(0,new O.hf(g,n))
C.b.aX(n,new O.hg())
m=new H.I(f)
for(t=g.dx.f,s=t.length,r=0;r<t.length;t.length===s||(0,H.l)(t),++r){q=t[r]
p=q.gad()
o=m.h(0,q.gad())
m.m(0,p,o==null?1:o)}l=H.b([],[A.d0])
m.G(0,new O.hh(g,l))
C.b.aX(l,new O.hi())
k=new H.I(f)
for(t=g.dx.r,s=t.length,r=0;r<t.length;t.length===s||(0,H.l)(t),++r){q=t[r]
p=q.gad()
o=k.h(0,q.gad())
k.m(0,p,o==null?1:o)}j=H.b([],[A.dq])
k.G(0,new O.hj(g,j))
C.b.aX(j,new O.hk())
i=new H.I(f)
for(f=g.dx.x,t=f.length,r=0;r<f.length;f.length===t||(0,H.l)(f),++r){q=f[r]
s=q.gad()
p=i.h(0,q.gad())
i.m(0,s,p==null?1:p)}h=H.b([],[A.dw])
i.G(0,new O.hl(g,h))
C.b.aX(h,new O.hm())
f=C.c.a7(g.e.a.length+3,4)
g.dy.e
return A.nl(!1,!1,!1,!1,f*4,g.f.c,g.r.c,g.x.c,g.y.c,g.z.c,g.Q.c,g.cx.c,g.cy.c,g.db.c,n,l,j,h)},
ew:function(a,b){if(b!=null)if(!C.b.L(a,b)){b.a=a.length
a.push(b)}},
ar:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.a_(u,u.length);u.q();){t=u.d
t.toString
s=$.aj
t.a=s==null?$.aj=new V.R(0,0,0):s
s=$.iY
t.b=s==null?$.iY=new V.B(0,0,1):s
s=$.iX
t.c=s==null?$.iX=new V.B(0,1,0):s
s=$.iW
t.d=s==null?$.iW=new V.B(-1,0,0):s
s=t.f
if(s!=null){r=s.az(0,b,t)
if(r!=null){t.a=r.aV(t.a)
s=r.bs(t.b)
q=s.a
p=s.b
o=s.c
t.b=s.v(0,Math.sqrt(q*q+p*p+o*o))
o=r.bs(t.c)
p=o.a
q=o.b
s=o.c
t.c=o.v(0,Math.sqrt(p*p+q*q+s*s))
s=r.bs(t.d)
q=s.a
p=s.b
o=s.c
t.d=s.v(0,Math.sqrt(q*q+p*p+o*o))}}}},
dS:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=b0.a
if(b1==null){b1=b0.cC()
u=b2.fr.h(0,b1.b3)
if(u==null){u=A.nk(b1,b2.a)
b2.d3(u)}b1=b0.a=u
b3.e=null}t=b1.z
s=t.bk
b1=b3.e
if(!(b1 instanceof Z.bX))b1=b3.e=null
if(b1==null||!b1.d.p(0,s)){b1=t.k4
if(b1)b3.d.aw()
r=t.r1
if(r){q=b3.d
p=q.e
if(p!=null)++p.d
q.d.bQ()
q.a.bQ()
q=q.e
if(q!=null)q.an(0)}q=t.rx
if(q){p=b3.d
o=p.e
if(o!=null)++o.d
p.a.hl()
p=p.e
if(p!=null)p.an(0)}n=b3.d.d8(new Z.dQ(b2.a),s)
n.aF($.ar()).e=b0.a.Q.c
if(b1)n.aF($.b_()).e=b0.a.cx.c
if(r)n.aF($.aZ()).e=b0.a.ch.c
if(t.r2)n.aF($.bn()).e=b0.a.cy.c
if(q)n.aF($.bo()).e=b0.a.db.c
if(t.ry)n.aF($.aY()).e=b0.a.dx.c
b3.e=n}m=H.b([],[T.dC])
b0.a.aj(b2)
if(t.fr){b1=b0.a
r=b2.dx
r=r.gZ(r)
b1=b1.dy
b1.toString
b1.af(r.a9(0,!0))}if(t.fx){b1=b0.a
r=b2.ge1()
b1=b1.fr
b1.toString
b1.af(r.a9(0,!0))}b1=b0.a
r=b2.ch
if(r==null){r=b2.gi3()
q=b2.dx
q=b2.ch=r.B(0,q.gZ(q))
r=q}b1=b1.fy
b1.toString
b1.af(r.a9(0,!0))
if(t.go){b1=b0.a
r=b2.db
r=r.gZ(r)
b1=b1.fx
b1.toString
b1.af(r.a9(0,!0))}if(t.x1){b1=b0.a
r=b0.b
b1=b1.k1
b1.toString
b1.af(C.j.a9(r,!0))}if(t.x2){b1=b0.a
r=b0.c
b1=b1.k2
b1.toString
b1.af(C.j.a9(r,!0))}if(t.y1){b1=b0.a
r=b0.d
b1=b1.k3
b1.toString
b1.af(C.j.a9(r,!0))}if(t.bj>0){l=b0.e.a.length
b1=b0.a.k4
b1.a.uniform1i(b1.d,l)
for(k=0;k<l;++k){b1=b0.a
r=b0.e.a
if(k>=r.length)return H.d(r,k)
r=r[k]
b1=b1.r1
if(k>=b1.length)return H.d(b1,k)
b1=b1[k]
j=new Float32Array(H.bM(r.a9(0,!0)))
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
b1=b1.bk
b1.a.uniform3f(b1.d,r.a,r.b,r.c)}b1=t.e.a
if(!b1)r=!1
else r=!0
if(r){r=b0.a
q=b0.z.ch
r=r.dh
r.a.uniform1f(r.d,q)}if(b1){b1=b0.a
r=b0.z.f
b1=b1.dg
b1.a.uniform3f(b1.d,r.a,r.b,r.c)}b1=t.z
if(b1.length>0){r=P.u
i=new H.I([r,r])
for(r=b0.dx.e,q=r.length,h=0;h<r.length;r.length===q||(0,H.l)(r),++h){g=r[h]
f=g.gad()
e=i.h(0,f)
if(e==null)e=0
i.m(0,f,e+1)
d=J.bU(b0.a.bX.h(0,f),e)
p=g.giq()
o=$.aj
p=p.aV(o==null?$.aj=new V.R(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gir()
o=$.aj
p=p.aV(o==null?$.aj=new V.R(0,0,0):o)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gaD(g)
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
if(g.ghw()){p=g.ghg()
o=d.e
o.a.uniform1f(o.d,p)
p=g.ghh()
o=d.f
o.a.uniform1f(o.d,p)
p=g.ghi()
o=d.r
o.a.uniform1f(o.d,p)}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.l)(b1),++h){q=b1[h].a
l=i.h(0,q)
if(l==null)l=0
q=b0.a.bW.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.Q
if(b1.length>0){r=b2.db
c=r.gZ(r)
r=P.u
b=new H.I([r,r])
for(r=b0.dx.f,q=r.length,h=0;h<r.length;r.length===q||(0,H.l)(r),++h){g=r[h]
f=g.gad()
e=b.h(0,f)
if(e==null)e=0
b.m(0,f,e+1)
d=J.bU(b0.a.bZ.h(0,f),e)
p=c.bs(g.ghu(g))
o=p.a
a=p.b
a0=p.c
a0=p.v(0,Math.sqrt(o*o+a*a+a0*a0))
a=d.e
o=a0.a
p=a0.b
a0=a0.c
a.a.uniform3f(a.d,o,p,a0)
a0=g.gaD(g)
p=d.f
p.a.uniform3f(p.d,a0.a,a0.b,a0.c)
g.gaU()
p=g.ghu(g)
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.giI()
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gcg(g)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gaU()
if(!C.b.L(m,p)){p.a=m.length
m.push(p)}p=g.gaU()
o=p.gbo(p)
if(o){o=d.r
o.toString
a=p.d
if(!a)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.l)(b1),++h){q=b1[h].a
l=b.h(0,q)
if(l==null)l=0
q=b0.a.bY.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.ch
if(b1.length>0){r=b2.db
c=r.gZ(r)
r=P.u
a1=new H.I([r,r])
for(r=b0.dx.r,q=r.length,h=0;h<r.length;r.length===q||(0,H.l)(r),++h){g=r[h]
f=g.gad()
e=a1.h(0,f)
if(e==null)e=0
a1.m(0,f,e+1)
d=J.bU(b0.a.c0.h(0,f),e)
a2=c.B(0,g.gZ(g))
p=g.gZ(g)
o=$.aj
p=p.aV(o==null?$.aj=new V.R(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=$.aj
p=a2.aV(p==null?$.aj=new V.R(0,0,0):p)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gaD(g)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
g.gaU()
p=a2.c7(0)
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
j=new Float32Array(H.bM(new V.dh(o,a,a0,a3,a4,a5,a6,a7,p).a9(0,!0)))
a8.a.uniformMatrix3fv(a8.d,!1,j)
g.gaU()
p=g.gaU()
if(!C.b.L(m,p)){p.a=m.length
m.push(p)}p=g.gaU()
o=p.gbo(p)
if(o){o=d.f
o.toString
a=p.gbo(p)
if(!a)o.a.uniform1i(o.d,0)
else{p=p.ghG(p)
o.a.uniform1i(o.d,p)}}g.gcm()
p=g.gip()
o=d.x
o.a.uniform4f(o.d,p.a,p.b,p.c,p.d)
p=g.gcm()
if(!C.b.L(m,p)){p.a=m.length
m.push(p)}p=g.gcm()
o=p.gbo(p)
if(o){o=d.r
o.toString
a=p.gbo(p)
if(!a)o.a.uniform1i(o.d,0)
else{p=p.ghG(p)
o.a.uniform1i(o.d,p)}}if(g.ghw()){p=g.ghg()
o=d.y
o.a.uniform1f(o.d,p)
p=g.ghh()
o=d.z
o.a.uniform1f(o.d,p)
p=g.ghi()
o=d.Q
o.a.uniform1f(o.d,p)}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.l)(b1),++h){q=b1[h].a
l=a1.h(0,q)
if(l==null)l=0
q=b0.a.c_.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.cx
if(b1.length>0){r=b2.db
c=r.gZ(r)
r=P.u
a9=new H.I([r,r])
for(r=b0.dx.x,q=r.length,h=0;h<r.length;r.length===q||(0,H.l)(r),++h){g=r[h]
f=g.gad()
e=a9.h(0,f)
if(e==null)e=0
a9.m(0,f,e+1)
d=J.bU(b0.a.c2.h(0,f),e)
p=g.a
o=d.b
a=p.a
a0=p.b
p=p.c
o.a.uniform3f(o.d,a,a0,p)
p=g.b
a0=p.a
a=p.b
o=p.c
o=p.v(0,Math.sqrt(a0*a0+a*a+o*o))
a=d.c
a0=o.a
p=o.b
o=o.c
a.a.uniform3f(a.d,a0,p,o)
o=c.aV(g.a)
p=d.d
p.a.uniform3f(p.d,o.a,o.b,o.c)
o=g.r
p=d.e
p.a.uniform3f(p.d,o.a,o.b,o.c)
if(g.x!=null||g.y!=null){p=g.c
o=d.f
o.toString
a=p.a
a0=p.b
p=p.c
o.a.uniform3f(o.d,a,a0,p)
p=g.d
a0=d.r
a0.toString
a=p.a
o=p.b
p=p.c
a0.a.uniform3f(a0.d,a,o,p)
p=g.z
o=d.x
o.a.uniform1f(o.d,p)
p=g.Q
o=d.y
o.a.uniform1f(o.d,p)}p=g.x
o=p!=null
if(o){if(o)if(!C.b.L(m,p)){p.a=m.length
m.push(p)}p=g.x
o=p!=null
if(o&&p.d){a=d.dx
a.toString
if(!o||!p.d)a.a.uniform1i(a.d,0)
else{p=p.a
a.a.uniform1i(a.d,p)}}}if(g.y!=null){p=g.e
o=d.z
o.toString
a=p.a
a0=p.b
a3=p.c
p=p.d
o.a.uniform4f(o.d,a,a0,a3,p)
p=g.y
if(p!=null)if(!C.b.L(m,p)){p.a=m.length
m.push(p)}p=g.y
o=p!=null
if(o&&p.d){a=d.dy
a.toString
if(!o||!p.d)a.a.uniform1i(a.d,0)
else{p=p.a
a.a.uniform1i(a.d,p)}}}if(g.db){p=g.cy
o=d.Q
o.a.uniform1f(o.d,p)
p=g.dx
o=d.ch
o.a.uniform1f(o.d,p)}p=g.dy
o=d.cx
o.a.uniform1f(o.d,p)
p=g.fr
o=d.cy
o.a.uniform1f(o.d,p)
p=g.fx
o=d.db
o.a.uniform1f(o.d,p)}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.l)(b1),++h){q=b1[h].a
l=a9.h(0,q)
if(l==null)l=0
q=b0.a.c1.h(0,q)
q.a.uniform1i(q.d,l)}}}if(t.dy){b1=b0.a
r=b2.Q
if(r==null){r=b2.db
r=b2.Q=r.gZ(r).c7(0)}b1=b1.id
b1.toString
b1.af(r.a9(0,!0))}if(t.db){b0.ew(m,b0.ch)
b1=b0.a
r=b0.ch
b1.fX(b1.di,r)
if(t.r.a){b1=b0.a
r=b0.cx.f
b1=b1.dj
b1.a.uniform3f(b1.d,r.a,r.b,r.c)}b1=t.x.a
if(!b1)r=!1
else r=!0
if(r){r=b0.a
q=b0.cy.ch
r=r.dk
r.a.uniform1f(r.d,q)}if(b1){b1=b0.a
r=b0.cy.f
b1=b1.dl
b1.a.uniform3f(b1.d,r.a,r.b,r.c)}}b1=t.y.a
r=!b1
if(r)q=!1
else q=!0
if(q){if(b1){b1=b0.a
q=b0.db.f
b1=b1.dm
b1.a.uniform1f(b1.d,q)}b1=b2.a
b1.enable(3042)
b1.blendFunc(770,771)}for(b1=b2.a,k=0;k<m.length;++k){q=m[k]
if(!q.c&&q.d){q.c=!0
b1.activeTexture(33984+q.a)
b1.bindTexture(3553,q.b)}}q=b3.e
q.aj(b2)
q.aq(b2)
q.ba(b2)
if(r)r=!1
else r=!0
if(r)b1.disable(3042)
for(k=0;k<m.length;++k){r=m[k]
if(r.c){r.c=!1
b1.activeTexture(33984+r.a)
b1.bindTexture(3553,null)}}r=b0.a
r.toString
b1.useProgram(null)
r.x.de()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cC().b3}}
O.hf.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.cU(a,C.c.a7(b+3,4)*4))}}
O.hg.prototype={
$2:function(a,b){return J.cQ(a.a,b.a)}}
O.hh.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.d0(a,C.c.a7(b+3,4)*4))}}
O.hi.prototype={
$2:function(a,b){return J.cQ(a.a,b.a)}}
O.hj.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.dq(a,C.c.a7(b+3,4)*4))}}
O.hk.prototype={
$2:function(a,b){return J.cQ(a.a,b.a)}}
O.hl.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.dw(a,C.c.a7(b+3,4)*4))}}
O.hm.prototype={
$2:function(a,b){return J.cQ(a.a,b.a)}}
O.h9.prototype={
aB:function(){var u,t=this
t.cp()
u=t.f
if(!(Math.abs(u-1)<$.A().a)){t.f=1
u=new D.y(t.b,u,1)
u.b=!0
t.a.a3(u)}}}
O.dg.prototype={
aB:function(){},
cT:function(a){var u,t,s=this
if(!s.c.p(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.aB()
u=s.a
u.a=null
u.a3(null)}}}
O.ha.prototype={}
O.av.prototype={
cR:function(a){var u,t,s=this
if(!s.f.p(0,a)){u=s.f
s.f=a
t=new D.y(s.b+".color",u,a)
t.b=!0
s.a.a3(t)}},
aB:function(){this.cp()
this.cR(new V.W(1,1,1))},
saD:function(a,b){this.cT(new A.a0(!0,!1,!1))
this.cR(b)}}
O.hc.prototype={}
O.hd.prototype={
aB:function(){var u,t=this
t.cq()
u=t.ch
if(!(Math.abs(u-1)<$.A().a)){t.ch=1
u=new D.y(t.b+".refraction",u,1)
u.b=!0
t.a.a3(u)}}}
O.he.prototype={
cU:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.A().a)){u.ch=a
t=new D.y(u.b+".shininess",t,a)
t.b=!0
u.a.a3(t)}},
aB:function(){this.cq()
this.cU(100)}}
O.dB.prototype={}
T.dC.prototype={}
T.il.prototype={}
T.im.prototype={
cS:function(){if(!this.d){this.d=!0
var u=this.y
if(u!=null)u.df()}},
gu:function(){var u=this.y
return u==null?this.y=D.J():u}}
T.io.prototype={
hM:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=document.createElement("img")
u.src=a
t=T.kT(q)
W.Y(u,"load",new T.ip(this,t,u,!1,q,!1,!1),!1)
return t},
fU:function(a,b,c){var u,t,s,r
b=V.cM(b)
u=V.cM(a.width)
t=V.cM(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.kB()
s.width=u
s.height=t
r=C.i.e4(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.oV(r.getImageData(0,0,s.width,s.height))}}}
T.ip.prototype={
$1:function(a){var u,t,s=this,r=3553,q=s.b,p=s.c
q.e=p.width
q.f=p.height
u=s.a
t=u.fU(p,u.b,s.d)
q.r=p.width
q.x=p.height
p=u.a
p.bindTexture(r,s.e)
p.pixelStorei(37440,s.f?1:0)
C.B.ic(p,r,0,6408,6408,5121,t)
if(s.r)p.generateMipmap(r)
p.bindTexture(r,null)
q.cS();++u.e}}
X.eZ.prototype={
gu:function(){var u=this.fr
return u==null?this.fr=D.J():u},
a4:function(a){var u=this.fr
if(u!=null)u.F(a)},
sat:function(a,b){var u,t=this
if(b<1)b=1
u=t.a
if(u!==b){t.y=null
t.c=t.a=b
u=new D.y("width",u,b)
u.b=!0
t.a4(u)}},
sao:function(a,b){var u,t=this
if(b<1)b=1
u=t.b
if(u!==b){t.y=null
t.d=t.b=b
u=new D.y("height",u,b)
u.b=!0
t.a4(u)}},
aj:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=3553,f=36161,e=36160
if(i.y==null){u=a.a
t=i.ch
s=i.a
r=i.b
q=u.getParameter(3379)
p=V.cM(s)
o=V.cM(r)
q=V.cM(q)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
u.bindTexture(g,n)
u.texParameteri(g,10242,33071)
u.texParameteri(g,10243,33071)
u.texParameteri(g,10241,9729)
u.texParameteri(g,10240,9729)
C.B.dX(u,g,0,6408,p,o,0,6408,5121,h)
u.bindTexture(g,h)
m=T.kT(n)
m.e=s
m.f=r
m.r=p
m.x=o
m.cS()
t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.df()
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
a.c=C.d.a1(s*i.a)
r=t.d
a.d=C.d.a1(r*i.b)
l=t.a
k=i.c
if(typeof k!=="number")return H.w(k)
j=C.d.a1(l*k)
t=t.b
l=i.d
if(typeof l!=="number")return H.w(l)
u.viewport(j,C.d.a1(t*l),C.d.a1(s*k),C.d.a1(r*l))
u.clearDepth(i.db)
t=i.cx
u.clearColor(t.a,t.b,t.c,t.d)
u.clear(16640)},
ba:function(a){a.a.bindFramebuffer(36160,null)}}
X.kA.prototype={}
X.fE.prototype={
gu:function(){var u=this.x
return u==null?this.x=D.J():u},
aj:function(a){var u,t,s,r,q,p,o=a.a
o.bindFramebuffer(36160,null)
o.enable(2884)
o.enable(2929)
o.depthFunc(513)
u=o.drawingBufferWidth
t=o.drawingBufferHeight
s=this.r
r=s.a
if(typeof u!=="number")return H.w(u)
q=C.d.a1(r*u)
r=s.b
if(typeof t!=="number")return H.w(t)
p=C.d.a1(r*t)
r=C.d.a1(s.c*u)
a.c=r
s=C.d.a1(s.d*t)
a.d=s
o.viewport(q,p,r,s)
o.clearDepth(this.c)
s=this.a
o.clearColor(s.a,s.b,s.c,s.d)
o.clear(16640)},
ba:function(a){}}
X.dp.prototype={
gu:function(){var u=this.f
return u==null?this.f=D.J():u},
a4:function(a){var u=this.f
if(u!=null)u.F(a)},
f1:function(){return this.a4(null)},
saR:function(a){var u,t,s=this
if(!J.D(s.b,a)){u=s.b
if(u!=null)u.gu().K(0,s.gcL())
t=s.b
s.b=a
if(a!=null)a.gu().n(0,s.gcL())
u=new D.y("mover",t,s.b)
u.b=!0
s.a4(u)}}}
X.ih.prototype={}
V.cX.prototype={
bc:function(a){this.b=new P.fK(C.Q)
this.c=null
this.d=H.b([],[[P.n,W.am]])},
N:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)l.push(H.b([],[W.am]))
u=a.split("\n")
for(l=u.length,t=[W.am],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else m.d.push(H.b([],t))
p=document.createElement("div")
p.className="codePart"
o=m.b.eD(q,0,q.length)
n=o==null?q:o
C.O.e6(p,H.lc(n," ","&nbsp;"))
n=p.style
n.color=b
C.b.gax(m.d).push(p)}},
dN:function(a,b){var u,t,s,r=this
r.d=H.b([],[[P.n,W.am]])
u=C.b.j(b,"\n")
t=r.c
if(t==null)t=r.c=r.bi()
for(t.toString,s=new H.m(u),s=new P.bJ(t.ci(new H.b9(s,s.gl(s))).a());s.q();)r.bq(s.gC(s))}}
V.kr.prototype={
$1:function(a){var u=C.d.dZ(this.a.ghF(),2)
if(u!=="0.00")P.lb(u+" fps")}}
V.fh.prototype={
bq:function(a){var u=this
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
bi:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=L.it()
a1.d=a1.k(0,r)
u=a1.k(0,r).j(0,q)
t=K.t(new H.m("_"))
u.a.push(t)
t=K.N("a","z")
u.a.push(t)
t=K.N("A","Z")
u.a.push(t)
t=a1.k(0,q).j(0,q)
u=K.t(new H.m("_"))
t.a.push(u)
u=K.N("0","9")
t.a.push(u)
u=K.N("a","z")
t.a.push(u)
u=K.N("A","Z")
t.a.push(u)
u=a1.k(0,r).j(0,p)
t=K.N("0","9")
u.a.push(t)
t=a1.k(0,p).j(0,p)
u=K.N("0","9")
t.a.push(u)
u=a1.k(0,p).j(0,o)
t=K.t(new H.m("."))
u.a.push(t)
t=a1.k(0,o).j(0,n)
u=K.N("0","9")
t.a.push(u)
u=a1.k(0,n).j(0,n)
t=K.N("0","9")
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
a1.k(0,k).j(0,k).a.push(new K.aL())
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
a1.k(0,h).j(0,h).a.push(new K.aL())
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
s=[K.ba]
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
t.aH(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aH(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aH(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.fG.prototype={
bq:function(a){var u=this
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
bi:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=L.it()
e.d=e.k(0,r)
u=e.k(0,r).j(0,q)
t=K.t(new H.m("_"))
u.a.push(t)
t=K.N("a","z")
u.a.push(t)
t=K.N("A","Z")
u.a.push(t)
t=e.k(0,q).j(0,q)
u=K.t(new H.m("_"))
t.a.push(u)
u=K.N("0","9")
t.a.push(u)
u=K.N("a","z")
t.a.push(u)
u=K.N("A","Z")
t.a.push(u)
u=e.k(0,r).j(0,p)
t=K.N("0","9")
u.a.push(t)
t=e.k(0,p).j(0,p)
u=K.N("0","9")
t.a.push(u)
u=e.k(0,p).j(0,o)
t=K.t(new H.m("."))
u.a.push(t)
t=e.k(0,o).j(0,n)
u=K.N("0","9")
t.a.push(u)
u=e.k(0,n).j(0,n)
t=K.N("0","9")
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
e.k(0,k).j(0,m).a.push(new K.aL())
t=e.k(0,j).j(0,i)
u=K.t(new H.m("\n"))
t.a.push(u)
u=e.k(0,j).j(0,j)
t=new K.a7()
s=[K.ba]
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
u.aH(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aH(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aH(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return e}}
V.fI.prototype={
bq:function(a){var u=this,t="#111"
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
bi:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=L.it()
l.d=l.k(0,s)
u=l.k(0,s).j(0,r)
t=K.t(new H.m("_"))
u.a.push(t)
t=K.N("a","z")
u.a.push(t)
t=K.N("A","Z")
u.a.push(t)
t=l.k(0,r).j(0,r)
u=K.t(new H.m("_"))
t.a.push(u)
u=K.N("0","9")
t.a.push(u)
u=K.N("a","z")
t.a.push(u)
u=K.N("A","Z")
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
l.k(0,o).j(0,o).a.push(new K.aL())
l.k(0,s).j(0,m).a.push(new K.aL())
u=l.k(0,m).j(0,m)
t=new K.a7()
t.a=H.b([],[K.ba])
u.a.push(t)
u=K.t(new H.m('</\\-!>=_"'))
t.a.push(u)
u=K.N("a","z")
t.a.push(u)
u=K.N("A","Z")
t.a.push(u)
u=l.k(0,p)
u.d=u.a.R("Symbol")
u=l.k(0,n)
u.d=u.a.R("String")
u=l.k(0,r)
t=u.a.R(r)
u.d=t
t.aH(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
t=l.k(0,q)
t.d=t.a.R(q)
t=l.k(0,m)
t.d=t.a.R(m)
return l}}
V.hH.prototype={
dN:function(a,b){this.d=H.b([],[[P.n,W.am]])
this.N(C.b.j(b,"\n"),"#111")},
bq:function(a){},
bi:function(){return}}
V.hM.prototype={
d0:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
if(m.c==null)return
u=m.a
t=P.lQ().gcc().h(0,H.e(u))
if(t==null)if(d){c.$0()
m.cZ(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.li(m.c).n(0,q)
o=W.n6("radio")
o.checked=s
o.name=u
W.Y(o,"change",new V.hN(m,o,c,b),!1)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.li(m.c).n(0,r.createElement("br"))},
aO:function(a,b,c){return this.d0(a,b,c,!1)},
cZ:function(a){var u,t,s=P.lQ(),r=P.h,q=P.nf(s.gcc(),r,r)
q.m(0,this.a,a)
u=s.dT(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.jC([],[]).bt(""),"",t)}}
V.hN.prototype={
$1:function(a){var u=this
if(u.b.checked){u.c.$0()
u.a.cZ(u.d)}}}
V.i1.prototype={
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
W.Y(q,"scroll",new V.i3(o),!1)},
d2:function(a){var u,t,s,r,q,p,o,n
this.h_()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b,r=C.b.hK(a),s.toString,r=new H.m(r),r=new P.bJ(s.ci(new H.b9(r,r.gl(r))).a());r.q();){s=r.gC(r)
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
if(H.ph(s,"|",0)){p=s.split("|")
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
e3:function(a){var u,t,s,r=new V.fh("dart")
r.bc("dart")
u=new V.fG("glsl")
u.bc("glsl")
t=new V.fI("html")
t.bc("html")
s=C.b.hB(H.b([r,u,t],[V.cX]),new V.i4(a))
if(s!=null)return s
r=new V.hH("plain")
r.bc("plain")
return r},
d1:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.b([],[P.u])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(J.cK(s).a6(s,"+")){b0[t]=C.a.ab(s,1)
a6.push(1)
u=!0}else if(C.a.a6(s,"-")){b0[t]=C.a.ab(s,1)
a6.push(-1)
u=!0}else a6.push(0)}r=this.e3(a8)
r.dN(0,b0)
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
j=W.lk()
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
for(a2=C.b.gP(s);a2.q();)d.appendChild(a2.gC(a2))
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
h_:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=L.it()
u.d=u.k(0,q)
t=u.k(0,q).j(0,p)
s=K.t(new H.m("*"))
t.a.push(s)
t.c=!0
t=u.k(0,p).j(0,p)
s=new K.a7()
r=[K.ba]
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
u.k(0,q).j(0,i).a.push(new K.aL())
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
V.i3.prototype={
$1:function(a){P.lM(C.n,new V.i2(this.a))}}
V.i2.prototype={
$0:function(){var u=C.d.a1(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
V.i4.prototype={
$1:function(a){return a.a===this.a}}
V.ki.prototype={
$0:function(){this.a.sag(0,F.l6(1,null,null,1))}}
V.kj.prototype={
$0:function(){this.a.sag(0,F.k4(1,!0,!0,40,1))}}
V.kk.prototype={
$0:function(){this.a.sag(0,F.k4(0.2,!0,!0,40,0.2))}}
V.kl.prototype={
$0:function(){this.a.sag(0,F.k4(1,!0,!1,40,0))}}
V.km.prototype={
$0:function(){this.a.sag(0,F.pg(6,6))}}
V.kn.prototype={
$0:function(){this.a.sag(0,F.mr())}}
V.ko.prototype={
$0:function(){this.a.sag(0,F.p9())}}
V.kp.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.a,r=[P.h]
u.d1("Vertex Shader","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
t=t.a
u.d1("Fragment Shader","glsl",0,H.b((t==null?null:t.d).split("\n"),r))}};(function aliases(){var u=J.a.prototype
u.ea=u.i
u=J.da.prototype
u.ec=u.i
u=P.i.prototype
u.eb=u.bu
u=W.P.prototype
u.bw=u.ak
u=W.ej.prototype
u.ed=u.av
u=K.d6.prototype
u.e9=u.aG
u.co=u.i
u=O.dg.prototype
u.cp=u.aB
u=O.av.prototype
u.cq=u.aB})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installStaticTearOff,q=hunkHelpers.installInstanceTearOff,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u,n=hunkHelpers._instance_1u,m=hunkHelpers._instance_0i
u(J,"ok","na",21)
t(P,"oP","nT",8)
t(P,"oQ","nU",8)
t(P,"oR","nV",8)
s(P,"mf","oN",10)
r(W,"p3",4,null,["$4"],["nW"],16,0)
r(W,"p4",4,null,["$4"],["nX"],16,0)
var l
q(l=E.aP.prototype,"gdJ",0,0,null,["$1","$0"],["dK","hV"],0,0)
q(l,"gdL",0,0,null,["$1","$0"],["dM","hW"],0,0)
q(l,"gdH",0,0,null,["$1","$0"],["dI","hU"],0,0)
q(l,"gdF",0,0,null,["$1","$0"],["dG","hR"],0,0)
p(l,"ghP","hQ",4)
p(l,"ghS","hT",4)
q(l=E.dD.prototype,"gcs",0,0,null,["$1","$0"],["cu","ct"],0,0)
o(l,"gi8","dU",10)
n(l=X.dM.prototype,"gfc","fd",5)
n(l,"gf_","f0",5)
n(l,"gf6","f7",2)
n(l,"gfg","fh",11)
n(l,"gfe","ff",11)
n(l,"gfk","fl",2)
n(l,"gfo","fp",2)
n(l,"gfa","fb",2)
n(l,"gfm","fn",2)
n(l,"gf8","f9",2)
n(l,"gfq","fs",19)
n(l,"gft","fu",5)
n(l,"gfL","fM",6)
n(l,"gfH","fI",6)
n(l,"gfJ","fK",6)
q(l=D.dc.prototype,"gcM",0,0,null,["$1","$0"],["cN","fi"],0,0)
n(l,"gfv","fw",20)
p(l,"geU","eV",12)
p(l,"gfB","fC",12)
q(D.bC.prototype,"gaY",0,0,null,["$1","$0"],["X","el"],0,0)
m(V.V.prototype,"gl","b4",7)
m(V.B.prototype,"gl","b4",7)
m(V.ct.prototype,"gl","b4",7)
q(l=U.c2.prototype,"gaK",0,0,null,["$1","$0"],["U","ai"],0,0)
p(l,"gem","en",13)
p(l,"gfz","fA",13)
q(U.c5.prototype,"gaK",0,0,null,["$1","$0"],["U","ai"],0,0)
q(l=U.dN.prototype,"gaK",0,0,null,["$1","$0"],["U","ai"],0,0)
n(l,"geO","eP",1)
n(l,"geQ","eR",1)
n(l,"geS","eT",1)
n(l,"geJ","eK",1)
n(l,"geL","eM",1)
n(l,"gh6","h7",1)
n(l,"gh4","h5",1)
n(l,"gh2","h3",1)
q(l=M.cY.prototype,"gah",0,0,null,["$1","$0"],["ac","bx"],0,0)
p(l,"gfD","fE",14)
p(l,"gfF","fG",14)
q(l=M.d3.prototype,"gah",0,0,null,["$1","$0"],["ac","bx"],0,0)
p(l,"gf2","f3",4)
p(l,"gf4","f5",4)
q(l=O.df.prototype,"gep",0,0,null,["$1","$0"],["a3","eq"],0,0)
q(l,"gfS",0,0,null,["$1","$0"],["cP","fT"],0,0)
p(l,"geW","eX",15)
p(l,"geY","eZ",15)
q(X.dp.prototype,"gcL",0,0,null,["$1","$0"],["a4","f1"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.a2,null)
s(P.a2,[H.kK,J.a,J.a_,P.e6,P.i,H.b9,P.fP,H.d4,H.iL,H.f9,H.iy,P.bt,H.bY,H.eo,P.a1,H.fX,H.fZ,H.fR,P.eu,P.bI,P.bJ,P.dR,P.dz,P.ic,P.dE,P.jU,P.jw,P.jq,P.e5,P.x,P.jM,P.h5,P.f6,P.fL,P.jS,P.jR,P.aI,P.ac,P.ab,P.b2,P.hF,P.dx,P.dZ,P.fD,P.fF,P.n,P.Q,P.bd,P.h,P.S,P.bK,P.iN,P.jz,W.fd,W.cw,W.L,W.dm,W.ej,W.jG,W.d5,W.aT,W.jv,W.eC,P.jB,P.ez,P.jr,P.bE,K.aL,K.d6,K.ba,K.hO,K.hX,L.dy,L.dF,L.dG,L.is,O.aM,O.ca,E.f2,E.aP,E.hP,E.dD,Z.dP,Z.dQ,Z.bX,Z.bv,Z.bj,D.f5,D.bu,D.X,X.cW,X.db,X.fU,X.h2,X.by,X.ht,X.iu,X.dM,D.f_,D.fl,D.a6,D.hJ,D.bC,V.W,V.ag,V.fu,V.dh,V.aS,V.a8,V.R,V.bf,V.ds,V.V,V.B,V.ct,U.c5,U.dN,M.d3,M.aA,A.cT,A.eU,A.a0,A.cU,A.d0,A.dq,A.dw,A.hb,A.cn,A.co,A.cq,A.cr,A.dJ,A.iG,F.b3,F.fx,F.c7,F.fW,F.cf,F.hY,F.hZ,F.i_,F.i0,F.bi,F.iZ,F.j_,F.j2,F.j4,F.j5,F.j6,O.dB,O.dg,O.hc,T.io,X.ih,X.kA,X.dp,V.cX,V.hM,V.i1])
s(J.a,[J.fQ,J.d9,J.da,J.b6,J.c6,J.b7,H.cc,H.bc,W.f,W.eR,W.bq,W.at,W.H,W.dT,W.ah,W.fi,W.fm,W.dV,W.d2,W.dX,W.fo,W.j,W.e_,W.au,W.fJ,W.e1,W.aQ,W.h1,W.hn,W.e7,W.e8,W.ax,W.e9,W.ec,W.az,W.eg,W.ei,W.aC,W.ek,W.aD,W.ep,W.ao,W.es,W.ir,W.aF,W.ev,W.iw,W.iS,W.eD,W.eF,W.eH,W.eJ,W.eL,P.aR,P.e3,P.aU,P.ee,P.hL,P.eq,P.aW,P.ex,P.eV,P.dS,P.dt,P.em])
s(J.da,[J.hG,J.bH,J.b8])
t(J.kJ,J.b6)
s(J.c6,[J.d8,J.d7])
t(P.h0,P.e6)
s(P.h0,[H.dK,W.jg,W.a4,P.fz])
t(H.m,H.dK)
s(P.i,[H.q,H.c9,H.cu,P.fN])
s(H.q,[H.dd,H.fY])
t(H.fr,H.c9)
s(P.fP,[H.h6,H.ja])
t(H.h7,H.dd)
t(H.fa,H.f9)
s(P.bt,[H.hC,H.fT,H.iK,H.f4,H.hV,P.dn,P.al,P.iM,P.iI,P.cj,P.f8,P.fg])
s(H.bY,[H.kw,H.ii,H.fS,H.kd,H.ke,H.kf,P.jc,P.jb,P.jd,P.je,P.jL,P.jK,P.k2,P.jt,P.ju,P.h_,P.h4,P.fp,P.fq,P.iR,P.iO,P.iP,P.iQ,P.jN,P.jO,P.jQ,P.jP,P.jY,P.jX,P.jZ,P.k_,W.fs,W.hp,W.hr,W.hU,W.ib,W.jl,W.hA,W.hz,W.jx,W.jy,W.jJ,W.jT,P.jD,P.jE,P.k3,P.fA,P.fB,P.eX,E.hQ,E.hR,E.hS,E.iq,D.fv,D.fw,F.jV,F.k5,F.k7,F.k8,F.k9,F.ks,F.kt,F.kv,F.kh,F.k6,F.j8,F.j7,F.j0,F.j1,O.hf,O.hg,O.hh,O.hi,O.hj,O.hk,O.hl,O.hm,T.ip,V.kr,V.hN,V.i3,V.i2,V.i4,V.ki,V.kj,V.kk,V.kl,V.km,V.kn,V.ko,V.kp])
s(H.ii,[H.i9,H.bV])
t(P.h3,P.a1)
s(P.h3,[H.I,W.jf])
t(H.di,H.bc)
s(H.di,[H.cy,H.cA])
t(H.cz,H.cy)
t(H.cd,H.cz)
t(H.cB,H.cA)
t(H.dj,H.cB)
s(H.dj,[H.hu,H.hv,H.hw,H.hx,H.hy,H.dk,H.ce])
t(P.jH,P.fN)
t(P.js,P.jU)
t(P.jp,P.jw)
t(P.eA,P.h5)
t(P.dL,P.eA)
s(P.f6,[P.f0,P.ft])
t(P.fb,P.ic)
s(P.fb,[P.f1,P.fK,P.iV,P.iU])
t(P.iT,P.ft)
s(P.ab,[P.K,P.u])
s(P.al,[P.bB,P.fM])
t(P.ji,P.bK)
s(W.f,[W.E,W.fy,W.cb,W.aB,W.cC,W.aE,W.ap,W.cE,W.j9,W.cv,P.eY,P.bp])
s(W.E,[W.P,W.b0])
s(W.P,[W.p,P.k])
s(W.p,[W.eS,W.eT,W.br,W.bs,W.am,W.fC,W.c4,W.hW,W.dA,W.ie,W.ig,W.cl])
t(W.fc,W.at)
t(W.bZ,W.dT)
s(W.ah,[W.fe,W.ff])
t(W.dW,W.dV)
t(W.d1,W.dW)
t(W.dY,W.dX)
t(W.fn,W.dY)
t(W.an,W.bq)
t(W.e0,W.e_)
t(W.c1,W.e0)
t(W.e2,W.e1)
t(W.c3,W.e2)
t(W.bg,W.j)
s(W.bg,[W.bw,W.ay,W.bD])
t(W.ho,W.e7)
t(W.hq,W.e8)
t(W.ea,W.e9)
t(W.hs,W.ea)
t(W.ed,W.ec)
t(W.dl,W.ed)
t(W.eh,W.eg)
t(W.hI,W.eh)
t(W.hT,W.ei)
t(W.cD,W.cC)
t(W.i6,W.cD)
t(W.el,W.ek)
t(W.i7,W.el)
t(W.ia,W.ep)
t(W.et,W.es)
t(W.ij,W.et)
t(W.cF,W.cE)
t(W.ik,W.cF)
t(W.ew,W.ev)
t(W.iv,W.ew)
t(W.bk,W.ay)
t(W.eE,W.eD)
t(W.jh,W.eE)
t(W.dU,W.d2)
t(W.eG,W.eF)
t(W.jm,W.eG)
t(W.eI,W.eH)
t(W.eb,W.eI)
t(W.eK,W.eJ)
t(W.jA,W.eK)
t(W.eM,W.eL)
t(W.jF,W.eM)
t(W.jj,W.jf)
t(W.jk,P.dz)
t(W.jI,W.ej)
t(P.jC,P.jB)
t(P.a9,P.jr)
t(P.e4,P.e3)
t(P.fV,P.e4)
t(P.ef,P.ee)
t(P.hD,P.ef)
t(P.ci,P.k)
t(P.er,P.eq)
t(P.id,P.er)
t(P.ey,P.ex)
t(P.ix,P.ey)
t(P.eW,P.dS)
t(P.hE,P.bp)
t(P.en,P.em)
t(P.i8,P.en)
s(K.d6,[K.a7,L.dI])
s(E.f2,[Z.cV,A.du,T.dC])
s(D.X,[D.b4,D.b5,D.y,X.hK])
s(X.hK,[X.de,X.bb,X.dH])
s(O.aM,[D.dc,U.c2,M.cY])
s(D.f5,[U.f7,U.ai])
t(U.cZ,U.ai)
s(A.du,[A.fk,A.h8])
s(A.dJ,[A.bh,A.iD,A.iE,A.iF,A.iB,A.T,A.iC,A.G,A.cm,A.iH,A.cp,A.a3,A.bF,A.bG])
t(F.i5,F.fx)
t(F.iA,F.fW)
t(F.j3,F.j4)
t(F.hB,F.j5)
s(O.dB,[O.fj,O.df])
s(O.dg,[O.h9,O.ha,O.av])
s(O.av,[O.hd,O.he])
t(T.il,T.dC)
t(T.im,T.il)
s(X.ih,[X.eZ,X.fE])
s(V.cX,[V.fh,V.fG,V.fI,V.hH])
u(H.dK,H.iL)
u(H.cy,P.x)
u(H.cz,H.d4)
u(H.cA,P.x)
u(H.cB,H.d4)
u(P.e6,P.x)
u(P.eA,P.jM)
u(W.dT,W.fd)
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
u(W.cC,P.x)
u(W.cD,W.L)
u(W.ek,P.x)
u(W.el,W.L)
u(W.ep,P.a1)
u(W.es,P.x)
u(W.et,W.L)
u(W.cE,P.x)
u(W.cF,W.L)
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
var v={mangledGlobalNames:{u:"int",K:"double",ab:"num",h:"String",aI:"bool",bd:"Null",n:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.X]},{func:1,ret:-1,args:[D.X]},{func:1,ret:-1,args:[W.ay]},{func:1,ret:P.bd,args:[,,]},{func:1,ret:-1,args:[P.u,[P.i,E.aP]]},{func:1,ret:-1,args:[W.j]},{func:1,ret:-1,args:[W.bD]},{func:1,ret:P.K},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bw]},{func:1,ret:-1,args:[P.u,[P.i,D.a6]]},{func:1,ret:-1,args:[P.u,[P.i,U.ai]]},{func:1,ret:-1,args:[P.u,[P.i,M.aA]]},{func:1,ret:-1,args:[P.u,[P.i,V.aS]]},{func:1,ret:P.aI,args:[W.P,P.h,P.h,W.cw]},{func:1,ret:P.bd,args:[,]},{func:1,ret:P.bE,args:[,,]},{func:1,ret:-1,args:[W.bk]},{func:1,ret:P.aI,args:[[P.i,D.a6]]},{func:1,ret:P.u,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.r=W.br.prototype
C.i=W.bs.prototype
C.O=W.am.prototype
C.R=J.a.prototype
C.b=J.b6.prototype
C.S=J.d7.prototype
C.c=J.d8.prototype
C.j=J.d9.prototype
C.d=J.c6.prototype
C.a=J.b7.prototype
C.T=J.b8.prototype
C.A=J.hG.prototype
C.B=P.dt.prototype
C.C=W.dA.prototype
C.q=J.bH.prototype
C.D=W.bk.prototype
C.E=W.cv.prototype
C.a_=new P.f1()
C.F=new P.f0()
C.t=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.G=function() {
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
C.L=function(getTagFallback) {
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
C.H=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.I=function(hooks) {
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
C.K=function(hooks) {
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
C.J=function(hooks) {
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

C.M=new P.hF()
C.e=new P.iT()
C.N=new P.iV()
C.f=new P.js()
C.n=new P.b2(0)
C.P=new P.b2(5e6)
C.Q=new P.fL("element",!1,!1,!1)
C.v=H.b(u([127,2047,65535,1114111]),[P.u])
C.k=H.b(u([0,0,32776,33792,1,10240,0,0]),[P.u])
C.U=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.l=H.b(u([0,0,65490,45055,65535,34815,65534,18431]),[P.u])
C.m=H.b(u([0,0,26624,1023,65534,2047,65534,2047]),[P.u])
C.V=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.w=H.b(u([]),[P.h])
C.W=H.b(u([0,0,32722,12287,65534,34815,65534,18431]),[P.u])
C.x=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.u])
C.h=H.b(u([0,0,24576,1023,65534,34815,65534,18431]),[P.u])
C.y=H.b(u([0,0,32754,11263,65534,34815,65534,18431]),[P.u])
C.X=H.b(u([0,0,32722,12287,65535,34815,65534,18431]),[P.u])
C.z=H.b(u([0,0,65490,12287,65535,34815,65534,18431]),[P.u])
C.o=H.b(u(["bind","if","ref","repeat","syntax"]),[P.h])
C.p=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])
C.Y=new H.fa(0,{},C.w,[P.h,P.h])
C.Z=new P.bI(null,2)})();(function staticFields(){$.as=0
$.bW=null
$.lm=null
$.mk=null
$.me=null
$.mo=null
$.ka=null
$.kg=null
$.l9=null
$.bN=null
$.cI=null
$.cJ=null
$.l3=!1
$.aq=C.f
$.aa=[]
$.aO=null
$.kE=null
$.ls=null
$.lr=null
$.cx=P.kM(P.h,P.fF)
$.ly=null
$.lC=null
$.aj=null
$.lI=null
$.lU=null
$.lX=null
$.lW=null
$.iW=null
$.iX=null
$.iY=null
$.lV=null
$.m_=null
$.lB=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"po","mt",function(){return H.mj("_$dart_dartClosure")})
u($,"pp","le",function(){return H.mj("_$dart_js")})
u($,"pq","mu",function(){return H.aG(H.iz({
toString:function(){return"$receiver$"}}))})
u($,"pr","mv",function(){return H.aG(H.iz({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"ps","mw",function(){return H.aG(H.iz(null))})
u($,"pt","mx",function(){return H.aG(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pw","mA",function(){return H.aG(H.iz(void 0))})
u($,"px","mB",function(){return H.aG(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pv","mz",function(){return H.aG(H.lO(null))})
u($,"pu","my",function(){return H.aG(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"pz","mD",function(){return H.aG(H.lO(void 0))})
u($,"py","mC",function(){return H.aG(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"pN","lf",function(){return P.nS()})
u($,"pA","mE",function(){return P.nO()})
u($,"pO","mI",function(){return H.nm(H.bM(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.u])))})
u($,"pR","mK",function(){return P.nA("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"pS","mL",function(){return P.oi()})
u($,"pP","mJ",function(){return P.lv(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)})
u($,"pH","mH",function(){return Z.ak(0)})
u($,"pB","mF",function(){return Z.ak(511)})
u($,"pJ","ar",function(){return Z.ak(1)})
u($,"pI","b_",function(){return Z.ak(2)})
u($,"pD","aZ",function(){return Z.ak(4)})
u($,"pK","bn",function(){return Z.ak(8)})
u($,"pL","bo",function(){return Z.ak(16)})
u($,"pE","cO",function(){return Z.ak(32)})
u($,"pF","cP",function(){return Z.ak(64)})
u($,"pG","mG",function(){return Z.ak(96)})
u($,"pM","bT",function(){return Z.ak(128)})
u($,"pC","aY",function(){return Z.ak(256)})
u($,"pn","ms",function(){return new V.fu(1e-9)})
u($,"pm","A",function(){return $.ms()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cc,DataView:H.bc,ArrayBufferView:H.bc,Float32Array:H.cd,Float64Array:H.cd,Int16Array:H.hu,Int32Array:H.hv,Int8Array:H.hw,Uint16Array:H.hx,Uint32Array:H.hy,Uint8ClampedArray:H.dk,CanvasPixelArray:H.dk,Uint8Array:H.ce,HTMLAudioElement:W.p,HTMLBRElement:W.p,HTMLBaseElement:W.p,HTMLButtonElement:W.p,HTMLContentElement:W.p,HTMLDListElement:W.p,HTMLDataElement:W.p,HTMLDataListElement:W.p,HTMLDetailsElement:W.p,HTMLDialogElement:W.p,HTMLEmbedElement:W.p,HTMLFieldSetElement:W.p,HTMLHRElement:W.p,HTMLHeadElement:W.p,HTMLHeadingElement:W.p,HTMLHtmlElement:W.p,HTMLIFrameElement:W.p,HTMLInputElement:W.p,HTMLLIElement:W.p,HTMLLabelElement:W.p,HTMLLegendElement:W.p,HTMLLinkElement:W.p,HTMLMapElement:W.p,HTMLMediaElement:W.p,HTMLMenuElement:W.p,HTMLMetaElement:W.p,HTMLMeterElement:W.p,HTMLModElement:W.p,HTMLOListElement:W.p,HTMLObjectElement:W.p,HTMLOptGroupElement:W.p,HTMLOptionElement:W.p,HTMLOutputElement:W.p,HTMLParagraphElement:W.p,HTMLParamElement:W.p,HTMLPictureElement:W.p,HTMLPreElement:W.p,HTMLProgressElement:W.p,HTMLQuoteElement:W.p,HTMLScriptElement:W.p,HTMLShadowElement:W.p,HTMLSlotElement:W.p,HTMLSourceElement:W.p,HTMLSpanElement:W.p,HTMLStyleElement:W.p,HTMLTableCaptionElement:W.p,HTMLTableCellElement:W.p,HTMLTableDataCellElement:W.p,HTMLTableHeaderCellElement:W.p,HTMLTableColElement:W.p,HTMLTextAreaElement:W.p,HTMLTimeElement:W.p,HTMLTitleElement:W.p,HTMLTrackElement:W.p,HTMLUListElement:W.p,HTMLUnknownElement:W.p,HTMLVideoElement:W.p,HTMLDirectoryElement:W.p,HTMLFontElement:W.p,HTMLFrameElement:W.p,HTMLFrameSetElement:W.p,HTMLMarqueeElement:W.p,HTMLElement:W.p,AccessibleNodeList:W.eR,HTMLAnchorElement:W.eS,HTMLAreaElement:W.eT,Blob:W.bq,HTMLBodyElement:W.br,HTMLCanvasElement:W.bs,CDATASection:W.b0,CharacterData:W.b0,Comment:W.b0,ProcessingInstruction:W.b0,Text:W.b0,CSSPerspective:W.fc,CSSCharsetRule:W.H,CSSConditionRule:W.H,CSSFontFaceRule:W.H,CSSGroupingRule:W.H,CSSImportRule:W.H,CSSKeyframeRule:W.H,MozCSSKeyframeRule:W.H,WebKitCSSKeyframeRule:W.H,CSSKeyframesRule:W.H,MozCSSKeyframesRule:W.H,WebKitCSSKeyframesRule:W.H,CSSMediaRule:W.H,CSSNamespaceRule:W.H,CSSPageRule:W.H,CSSRule:W.H,CSSStyleRule:W.H,CSSSupportsRule:W.H,CSSViewportRule:W.H,CSSStyleDeclaration:W.bZ,MSStyleCSSProperties:W.bZ,CSS2Properties:W.bZ,CSSImageValue:W.ah,CSSKeywordValue:W.ah,CSSNumericValue:W.ah,CSSPositionValue:W.ah,CSSResourceValue:W.ah,CSSUnitValue:W.ah,CSSURLImageValue:W.ah,CSSStyleValue:W.ah,CSSMatrixComponent:W.at,CSSRotation:W.at,CSSScale:W.at,CSSSkew:W.at,CSSTranslation:W.at,CSSTransformComponent:W.at,CSSTransformValue:W.fe,CSSUnparsedValue:W.ff,DataTransferItemList:W.fi,HTMLDivElement:W.am,DOMException:W.fm,ClientRectList:W.d1,DOMRectList:W.d1,DOMRectReadOnly:W.d2,DOMStringList:W.fn,DOMTokenList:W.fo,Element:W.P,AbortPaymentEvent:W.j,AnimationEvent:W.j,AnimationPlaybackEvent:W.j,ApplicationCacheErrorEvent:W.j,BackgroundFetchClickEvent:W.j,BackgroundFetchEvent:W.j,BackgroundFetchFailEvent:W.j,BackgroundFetchedEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,CanMakePaymentEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,ForeignFetchEvent:W.j,GamepadEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,MutationEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PaymentRequestEvent:W.j,PaymentRequestUpdateEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCPeerConnectionIceEvent:W.j,RTCTrackEvent:W.j,SecurityPolicyViolationEvent:W.j,SensorErrorEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,VRDeviceEvent:W.j,VRDisplayEvent:W.j,VRSessionEvent:W.j,MojoInterfaceRequestEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.an,FileList:W.c1,FileWriter:W.fy,HTMLFormElement:W.fC,Gamepad:W.au,History:W.fJ,HTMLCollection:W.c3,HTMLFormControlsCollection:W.c3,HTMLOptionsCollection:W.c3,ImageData:W.aQ,HTMLImageElement:W.c4,KeyboardEvent:W.bw,Location:W.h1,MediaList:W.hn,MessagePort:W.cb,MIDIInputMap:W.ho,MIDIOutputMap:W.hq,MimeType:W.ax,MimeTypeArray:W.hs,PointerEvent:W.ay,MouseEvent:W.ay,DragEvent:W.ay,Document:W.E,DocumentFragment:W.E,HTMLDocument:W.E,ShadowRoot:W.E,XMLDocument:W.E,Attr:W.E,DocumentType:W.E,Node:W.E,NodeList:W.dl,RadioNodeList:W.dl,Plugin:W.az,PluginArray:W.hI,RTCStatsReport:W.hT,HTMLSelectElement:W.hW,SourceBuffer:W.aB,SourceBufferList:W.i6,SpeechGrammar:W.aC,SpeechGrammarList:W.i7,SpeechRecognitionResult:W.aD,Storage:W.ia,CSSStyleSheet:W.ao,StyleSheet:W.ao,HTMLTableElement:W.dA,HTMLTableRowElement:W.ie,HTMLTableSectionElement:W.ig,HTMLTemplateElement:W.cl,TextTrack:W.aE,TextTrackCue:W.ap,VTTCue:W.ap,TextTrackCueList:W.ij,TextTrackList:W.ik,TimeRanges:W.ir,Touch:W.aF,TouchEvent:W.bD,TouchList:W.iv,TrackDefaultList:W.iw,CompositionEvent:W.bg,FocusEvent:W.bg,TextEvent:W.bg,UIEvent:W.bg,URL:W.iS,VideoTrackList:W.j9,WheelEvent:W.bk,Window:W.cv,DOMWindow:W.cv,CSSRuleList:W.jh,ClientRect:W.dU,DOMRect:W.dU,GamepadList:W.jm,NamedNodeMap:W.eb,MozNamedAttrMap:W.eb,SpeechRecognitionResultList:W.jA,StyleSheetList:W.jF,SVGLength:P.aR,SVGLengthList:P.fV,SVGNumber:P.aU,SVGNumberList:P.hD,SVGPointList:P.hL,SVGScriptElement:P.ci,SVGStringList:P.id,SVGAElement:P.k,SVGAnimateElement:P.k,SVGAnimateMotionElement:P.k,SVGAnimateTransformElement:P.k,SVGAnimationElement:P.k,SVGCircleElement:P.k,SVGClipPathElement:P.k,SVGDefsElement:P.k,SVGDescElement:P.k,SVGDiscardElement:P.k,SVGEllipseElement:P.k,SVGFEBlendElement:P.k,SVGFEColorMatrixElement:P.k,SVGFEComponentTransferElement:P.k,SVGFECompositeElement:P.k,SVGFEConvolveMatrixElement:P.k,SVGFEDiffuseLightingElement:P.k,SVGFEDisplacementMapElement:P.k,SVGFEDistantLightElement:P.k,SVGFEFloodElement:P.k,SVGFEFuncAElement:P.k,SVGFEFuncBElement:P.k,SVGFEFuncGElement:P.k,SVGFEFuncRElement:P.k,SVGFEGaussianBlurElement:P.k,SVGFEImageElement:P.k,SVGFEMergeElement:P.k,SVGFEMergeNodeElement:P.k,SVGFEMorphologyElement:P.k,SVGFEOffsetElement:P.k,SVGFEPointLightElement:P.k,SVGFESpecularLightingElement:P.k,SVGFESpotLightElement:P.k,SVGFETileElement:P.k,SVGFETurbulenceElement:P.k,SVGFilterElement:P.k,SVGForeignObjectElement:P.k,SVGGElement:P.k,SVGGeometryElement:P.k,SVGGraphicsElement:P.k,SVGImageElement:P.k,SVGLineElement:P.k,SVGLinearGradientElement:P.k,SVGMarkerElement:P.k,SVGMaskElement:P.k,SVGMetadataElement:P.k,SVGPathElement:P.k,SVGPatternElement:P.k,SVGPolygonElement:P.k,SVGPolylineElement:P.k,SVGRadialGradientElement:P.k,SVGRectElement:P.k,SVGSetElement:P.k,SVGStopElement:P.k,SVGStyleElement:P.k,SVGSVGElement:P.k,SVGSwitchElement:P.k,SVGSymbolElement:P.k,SVGTSpanElement:P.k,SVGTextContentElement:P.k,SVGTextElement:P.k,SVGTextPathElement:P.k,SVGTextPositioningElement:P.k,SVGTitleElement:P.k,SVGUseElement:P.k,SVGViewElement:P.k,SVGGradientElement:P.k,SVGComponentTransferFunctionElement:P.k,SVGFEDropShadowElement:P.k,SVGMPathElement:P.k,SVGElement:P.k,SVGTransform:P.aW,SVGTransformList:P.ix,AudioBuffer:P.eV,AudioParamMap:P.eW,AudioTrackList:P.eY,AudioContext:P.bp,webkitAudioContext:P.bp,BaseAudioContext:P.bp,OfflineAudioContext:P.hE,WebGL2RenderingContext:P.dt,SQLResultSetRowList:P.i8})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.di.$nativeSuperclassTag="ArrayBufferView"
H.cy.$nativeSuperclassTag="ArrayBufferView"
H.cz.$nativeSuperclassTag="ArrayBufferView"
H.cd.$nativeSuperclassTag="ArrayBufferView"
H.cA.$nativeSuperclassTag="ArrayBufferView"
H.cB.$nativeSuperclassTag="ArrayBufferView"
H.dj.$nativeSuperclassTag="ArrayBufferView"
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
if(typeof dartMainRunner==="function")dartMainRunner(V.mm,[])
else V.mm([])})})()
//# sourceMappingURL=test.dart.js.map
