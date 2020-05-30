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
a[c]=function(){a[c]=function(){H.oW(b)}
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
if(w[u][a])return w[u][a]}}var C={},H={kF:function kF(){},
k5:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
mW:function(a,b,c,d){if(!!J.P(a).$iq)return new H.fq(a,b,[c,d])
return new H.c8(a,b,[c,d])},
kC:function(){return new P.ck("No element")},
mM:function(){return new P.ck("Too many elements")},
ni:function(a,b){var u=J.ah(a)
if(typeof u!=="number")return u.K()
H.dv(a,0,u-1,b)},
dv:function(a,b,c,d){if(c-b<=32)H.nh(a,b,c,d)
else H.ng(a,b,c,d)},
nh:function(a,b,c,d){var u,t,s,r,q,p
for(u=b+1,t=J.bo(a);u<=c;++u){s=t.h(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.h(a,r-1),s)
if(typeof q!=="number")return q.a4()
q=q>0}else q=!1
if(!q)break
p=r-1
t.m(a,r,t.h(a,p))
r=p}t.m(a,r,s)}},
ng:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j=C.c.a6(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.a6(a4+a5,2),f=g-j,e=g+j,d=J.bo(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
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
H.dv(a3,a4,t-2,a6)
H.dv(a3,s+2,a5,a6)
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
break}}H.dv(a3,t,s,a6)}else H.dv(a3,t,s,a6)},
n:function n(a){this.a=a},
q:function q(){},
dd:function dd(){},
bf:function bf(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c8:function c8(a,b,c){this.a=a
this.b=b
this.$ti=c},
fq:function fq(a,b,c){this.a=a
this.b=b
this.$ti=c},
h3:function h3(a,b){this.a=null
this.b=a
this.c=b},
h4:function h4(a,b,c){this.a=a
this.b=b
this.$ti=c},
ct:function ct(a,b,c){this.a=a
this.b=b
this.$ti=c},
ja:function ja(a,b){this.a=a
this.b=b},
d4:function d4(){},
iM:function iM(){},
dK:function dK(){},
mF:function(){throw H.c(P.z("Cannot modify unmodifiable Map"))},
cM:function(a){var u,t=H.oX(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
oG:function(a){return v.types[a]},
m0:function(a,b){var u
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
ch:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
n8:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.d(p,3)
u=p[3]
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.a_(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.a.F(s,q)|32)>t)return}return parseInt(a,b)},
ci:function(a){return H.n_(a)+H.lS(H.cK(a),0,null)},
n_:function(a){var u,t,s,r,q,p,o,n=J.P(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.R||!!n.$ibG){r=C.t(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cM(t.length>1&&C.a.F(t,0)===36?C.a.aa(t,1):t)},
n0:function(){if(!!self.location)return self.location.href
return},
ls:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
n9:function(a){var u,t,s,r=H.b([],[P.v])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.m)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.af(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.aS(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.c(H.af(s))}return H.ls(r)},
lt:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.af(s))
if(s<0)throw H.c(H.af(s))
if(s>65535)return H.n9(a)}return H.ls(a)},
na:function(a,b,c){var u,t,s,r
if(typeof c!=="number")return c.ig()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
if(s<c)r=s
else r=c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
bC:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.aS(u,10))>>>0,56320|u&1023)}}throw H.c(P.a_(a,0,1114111,null,null))},
bB:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
n7:function(a){var u=H.bB(a).getFullYear()+0
return u},
n5:function(a){var u=H.bB(a).getMonth()+1
return u},
n1:function(a){var u=H.bB(a).getDate()+0
return u},
n2:function(a){var u=H.bB(a).getHours()+0
return u},
n4:function(a){var u=H.bB(a).getMinutes()+0
return u},
n6:function(a){var u=H.bB(a).getSeconds()+0
return u},
n3:function(a){var u=H.bB(a).getMilliseconds()+0
return u},
u:function(a){throw H.c(H.af(a))},
d:function(a,b){if(a==null)J.ah(a)
throw H.c(H.bQ(a,b))},
bQ:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.al(!0,b,s,null)
u=J.ah(a)
if(!(b<0)){if(typeof u!=="number")return H.u(u)
t=b>=u}else t=!0
if(t)return P.N(b,a,s,null,u)
return P.dq(b,s)},
oz:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bD(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bD(a,c,!0,b,"end",u)
return new P.al(!0,b,"end",null)},
af:function(a){return new P.al(!0,a,null,null)},
ov:function(a){if(typeof a!=="number")throw H.c(H.af(a))
return a},
c:function(a){var u
if(a==null)a=new P.dm()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.m5})
u.name=""}else u.toString=H.m5
return u},
m5:function(){return J.a5(this.dartException)},
r:function(a){throw H.c(a)},
m:function(a){throw H.c(P.au(a))},
aI:function(a){var u,t,s,r,q,p
a=H.m4(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iA(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iB:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
lC:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
ln:function(a,b){return new H.hy(a,b==null?null:b.method)},
kG:function(a,b){var u=b==null,t=u?null:b.method
return new H.fQ(a,t,u?null:b.receiver)},
ag:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.ko(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.aS(t,16)&8191)===10)switch(s){case 438:return f.$1(H.kG(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.ln(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.m8()
q=$.m9()
p=$.ma()
o=$.mb()
n=$.me()
m=$.mf()
l=$.md()
$.mc()
k=$.mh()
j=$.mg()
i=r.al(u)
if(i!=null)return f.$1(H.kG(u,i))
else{i=q.al(u)
if(i!=null){i.method="call"
return f.$1(H.kG(u,i))}else{i=p.al(u)
if(i==null){i=o.al(u)
if(i==null){i=n.al(u)
if(i==null){i=m.al(u)
if(i==null){i=l.al(u)
if(i==null){i=o.al(u)
if(i==null){i=k.al(u)
if(i==null){i=j.al(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.ln(u,i))}}return f.$1(new H.iL(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dx()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.al(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dx()
return a},
kZ:function(a){var u
if(a==null)return new H.eq(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eq(a)},
oD:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.m(0,a[u],a[t])}return b},
oM:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.w("Unsupported number of arguments for wrapped closure"))},
bP:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.oM)
a.$identity=u
return u},
mE:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.i6().constructor.prototype):Object.create(new H.bW(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.at
if(typeof t!=="number")return t.D()
$.at=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.lc(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.mA(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.lc(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
mA:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.oG,a)
if(typeof a=="function")if(b)return a
else{u=c?H.lb:H.kr
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.c("Error in functionType of tearoff")},
mB:function(a,b,c,d){var u=H.kr
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lc:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mD(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mB(t,!r,u,b)
if(t===0){r=$.at
if(typeof r!=="number")return r.D()
$.at=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bX
return new Function(r+H.e(q==null?$.bX=H.f4("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.at
if(typeof r!=="number")return r.D()
$.at=r+1
o+=r
r="return function("+o+"){return this."
q=$.bX
return new Function(r+H.e(q==null?$.bX=H.f4("self"):q)+"."+H.e(u)+"("+o+");}")()},
mC:function(a,b,c,d){var u=H.kr,t=H.lb
switch(b?-1:a){case 0:throw H.c(H.ne("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
mD:function(a,b){var u,t,s,r,q,p,o,n=$.bX
if(n==null)n=$.bX=H.f4("self")
u=$.la
if(u==null)u=$.la=H.f4("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.mC(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.at
if(typeof u!=="number")return u.D()
$.at=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.at
if(typeof u!=="number")return u.D()
$.at=u+1
return new Function(n+u+"}")()},
kX:function(a,b,c,d,e,f,g){return H.mE(a,b,c,d,!!e,!!f,g)},
kr:function(a){return a.a},
lb:function(a){return a.c},
f4:function(a){var u,t,s,r=new H.bW("self","target","receiver","name"),q=J.kD(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
oQ:function(a,b){throw H.c(H.mz(a,H.cM(b.substring(2))))},
j:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.P(a)[b]
else u=!0
if(u)return a
H.oQ(a,b)},
oB:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
mz:function(a,b){return new H.f5("CastError: "+P.ky(a)+": type '"+H.e(H.or(a))+"' is not a subtype of type '"+b+"'")},
or:function(a){var u,t=J.P(a)
if(!!t.$ibZ){u=H.oB(t)
if(u!=null)return H.oR(u)
return"Closure"}return H.ci(a)},
oW:function(a){throw H.c(new P.fi(a))},
ne:function(a){return new H.hR(a)},
lZ:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
cK:function(a){if(a==null)return
return a.$ti},
px:function(a,b,c){return H.kn(a["$a"+H.e(c)],H.cK(b))},
oF:function(a,b,c,d){var u=H.kn(a["$a"+H.e(c)],H.cK(b))
return u==null?null:u[d]},
kY:function(a,b,c){var u=H.kn(a["$a"+H.e(b)],H.cK(a))
return u==null?null:u[c]},
b2:function(a,b){var u=H.cK(a)
return u==null?null:u[b]},
oR:function(a){return H.bn(a,null)},
bn:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cM(a[0].name)+H.lS(a,1,b)
if(typeof a=="function")return H.cM(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.e(b[t])}if('func' in a)return H.nX(a,b)
if('futureOr' in a)return"FutureOr<"+H.bn("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
nX:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
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
for(n=H.oC(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.bn(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
lS:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.S("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bn(p,c)}return"<"+u.i(0)+">"},
kn:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
pv:function(a,b,c){return a.apply(b,H.kn(J.P(b)["$a"+H.e(c)],H.cK(b)))},
pw:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
oN:function(a){var u,t,s,r,q=$.m_.$1(a),p=$.k3[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.k9[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.lX.$2(a,q)
if(q!=null){p=$.k3[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.k9[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kl(u)
$.k3[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.k9[q]=u
return u}if(s==="-"){r=H.kl(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.m2(a,u)
if(s==="*")throw H.c(P.iK(q))
if(v.leafTags[q]===true){r=H.kl(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.m2(a,u)},
m2:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.l0(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kl:function(a){return J.l0(a,!1,null,!!a.$iA)},
oO:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kl(u)
else return J.l0(u,c,null,null)},
oK:function(){if(!0===$.l_)return
$.l_=!0
H.oL()},
oL:function(){var u,t,s,r,q,p,o,n
$.k3=Object.create(null)
$.k9=Object.create(null)
H.oJ()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.m3.$1(q)
if(p!=null){o=H.oO(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
oJ:function(){var u,t,s,r,q,p,o=C.G()
o=H.bO(C.H,H.bO(C.I,H.bO(C.u,H.bO(C.u,H.bO(C.J,H.bO(C.K,H.bO(C.L(C.t),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.m_=new H.k6(r)
$.lX=new H.k7(q)
$.m3=new H.k8(p)},
bO:function(a,b){return a(b)||b},
mQ:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.c(P.V("Illegal RegExp pattern ("+String(p)+")",a,null))},
oT:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
oA:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
m4:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
l3:function(a,b,c){var u=H.oU(a,b,c)
return u},
oU:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.m4(b),'g'),H.oA(c))},
fb:function fb(){},
fc:function fc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iA:function iA(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hy:function hy(a,b){this.a=a
this.b=b},
fQ:function fQ(a,b,c){this.a=a
this.b=b
this.c=c},
iL:function iL(a){this.a=a},
ko:function ko(a){this.a=a},
eq:function eq(a){this.a=a
this.b=null},
bZ:function bZ(){},
ie:function ie(){},
i6:function i6(){},
bW:function bW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f5:function f5(a){this.a=a},
hR:function hR(a){this.a=a},
I:function I(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fP:function fP(a){this.a=a},
fT:function fT(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fU:function fU(a,b){this.a=a
this.$ti=b},
fV:function fV(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
k6:function k6(a){this.a=a},
k7:function k7(a){this.a=a},
k8:function k8(a){this.a=a},
fO:function fO(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bM:function(a){return a},
mZ:function(a){return new Int8Array(a)},
aJ:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bQ(b,a))},
nV:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.oz(a,b,c))
return b},
cd:function cd(){},
bh:function bh(){},
dh:function dh(){},
ce:function ce(){},
di:function di(){},
hr:function hr(){},
hs:function hs(){},
ht:function ht(){},
hu:function hu(){},
hv:function hv(){},
dj:function dj(){},
cf:function cf(){},
cx:function cx(){},
cy:function cy(){},
cz:function cz(){},
cA:function cA(){},
oC:function(a){return J.li(a?Object.keys(a):[],null)},
oX:function(a){return v.mangledGlobalNames[a]},
oP:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
l0:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
k4:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.l_==null){H.oK()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.iK("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.l4()]
if(r!=null)return r
r=H.oN(a)
if(r!=null)return r
if(typeof a=="function")return C.T
u=Object.getPrototypeOf(a)
if(u==null)return C.A
if(u===Object.prototype)return C.A
if(typeof s=="function"){Object.defineProperty(s,$.l4(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
mN:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.kq(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.a_(a,0,4294967295,"length",null))
return J.li(new Array(a),b)},
li:function(a,b){return J.kD(H.b(a,[b]))},
kD:function(a){a.fixed$length=Array
return a},
mO:function(a,b){return J.cP(a,b)},
P:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d8.prototype
return J.d7.prototype}if(typeof a=="string")return J.bd.prototype
if(a==null)return J.d9.prototype
if(typeof a=="boolean")return J.fN.prototype
if(a.constructor==Array)return J.bc.prototype
if(typeof a!="object"){if(typeof a=="function")return J.be.prototype
return a}if(a instanceof P.a2)return a
return J.k4(a)},
bo:function(a){if(typeof a=="string")return J.bd.prototype
if(a==null)return a
if(a.constructor==Array)return J.bc.prototype
if(typeof a!="object"){if(typeof a=="function")return J.be.prototype
return a}if(a instanceof P.a2)return a
return J.k4(a)},
eQ:function(a){if(a==null)return a
if(a.constructor==Array)return J.bc.prototype
if(typeof a!="object"){if(typeof a=="function")return J.be.prototype
return a}if(a instanceof P.a2)return a
return J.k4(a)},
oE:function(a){if(typeof a=="number")return J.c5.prototype
if(typeof a=="string")return J.bd.prototype
if(a==null)return a
if(!(a instanceof P.a2))return J.bG.prototype
return a},
cJ:function(a){if(typeof a=="string")return J.bd.prototype
if(a==null)return a
if(!(a instanceof P.a2))return J.bG.prototype
return a},
bS:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.be.prototype
return a}if(a instanceof P.a2)return a
return J.k4(a)},
U:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.P(a).u(a,b)},
bU:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.m0(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bo(a).h(a,b)},
kp:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.m0(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.eQ(a).m(a,b,c)},
mq:function(a,b){return J.cJ(a).F(a,b)},
mr:function(a,b,c){return J.bS(a).fS(a,b,c)},
ms:function(a,b,c,d){return J.bS(a).h9(a,b,c,d)},
mt:function(a,b){return J.cJ(a).Y(a,b)},
cP:function(a,b){return J.oE(a).aV(a,b)},
eS:function(a,b){return J.eQ(a).J(a,b)},
mu:function(a,b,c,d){return J.bS(a).hu(a,b,c,d)},
l6:function(a,b){return J.eQ(a).C(a,b)},
mv:function(a){return J.bS(a).ghe(a)},
bV:function(a){return J.bS(a).gc2(a)},
cQ:function(a){return J.P(a).gI(a)},
aL:function(a){return J.eQ(a).gR(a)},
ah:function(a){return J.bo(a).gl(a)},
l7:function(a){return J.eQ(a).hY(a)},
mw:function(a,b){return J.bS(a).i0(a,b)},
mx:function(a,b,c){return J.cJ(a).q(a,b,c)},
my:function(a){return J.cJ(a).i9(a)},
a5:function(a){return J.P(a).i(a)},
a:function a(){},
fN:function fN(){},
d9:function d9(){},
da:function da(){},
hC:function hC(){},
bG:function bG(){},
be:function be(){},
bc:function bc(a){this.$ti=a},
kE:function kE(a){this.$ti=a},
a6:function a6(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c5:function c5(){},
d8:function d8(){},
d7:function d7(){},
bd:function bd(){}},P={
nv:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.os()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bP(new P.jc(s),1)).observe(u,{childList:true})
return new P.jb(s,u,t)}else if(self.setImmediate!=null)return P.ot()
return P.ou()},
nw:function(a){self.scheduleImmediate(H.bP(new P.jd(a),0))},
nx:function(a){self.setImmediate(H.bP(new P.je(a),0))},
ny:function(a){P.kK(C.n,a)},
kK:function(a,b){var u=C.c.a6(a.a,1000)
return P.nF(u<0?0:u,b)},
lB:function(a,b){var u=C.c.a6(a.a,1000)
return P.nG(u<0?0:u,b)},
nF:function(a,b){var u=new P.ex()
u.ew(a,b)
return u},
nG:function(a,b){var u=new P.ex()
u.ex(a,b)
return u},
ps:function(a){return new P.bI(a,1)},
nB:function(){return C.Z},
nC:function(a){return new P.bI(a,3)},
o_:function(a,b){return new P.jG(a,[b])},
ol:function(){var u,t
for(;u=$.bN,u!=null;){$.cI=null
t=u.b
$.bN=t
if(t==null)$.cH=null
u.a.$0()}},
oq:function(){$.kV=!0
try{P.ol()}finally{$.cI=null
$.kV=!1
if($.bN!=null)$.l5().$1(P.lY())}},
oo:function(a){var u=new P.dT(a)
if($.bN==null){$.bN=$.cH=u
if(!$.kV)$.l5().$1(P.lY())}else $.cH=$.cH.b=u},
op:function(a){var u,t,s=$.bN
if(s==null){P.oo(a)
$.cI=$.cH
return}u=new P.dT(a)
t=$.cI
if(t==null){u.b=s
$.bN=$.cI=u}else{u.b=t.b
$.cI=t.b=u
if(u.b==null)$.cH=u}},
lA:function(a,b){var u=$.ar
if(u===C.f)return P.kK(a,b)
return P.kK(a,u.hf(b))},
nl:function(a,b){var u=$.ar
if(u===C.f)return P.lB(a,b)
return P.lB(a,u.dl(b,P.dE))},
lT:function(a,b,c,d,e){var u={}
u.a=d
P.op(new P.k1(u,e))},
om:function(a,b,c,d){var u,t=$.ar
if(t===c)return d.$0()
$.ar=c
u=t
try{t=d.$0()
return t}finally{$.ar=u}},
on:function(a,b,c,d,e){var u,t=$.ar
if(t===c)return d.$1(e)
$.ar=c
u=t
try{t=d.$1(e)
return t}finally{$.ar=u}},
jc:function jc(a){this.a=a},
jb:function jb(a,b,c){this.a=a
this.b=b
this.c=c},
jd:function jd(a){this.a=a},
je:function je(a){this.a=a},
ex:function ex(){this.c=0},
jK:function jK(a,b){this.a=a
this.b=b},
jJ:function jJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bI:function bI(a,b){this.a=a
this.b=b},
bJ:function bJ(a){var _=this
_.a=a
_.d=_.c=_.b=null},
jG:function jG(a,b){this.a=a
this.$ti=b},
dT:function dT(a){this.a=a
this.b=null},
dz:function dz(){},
i9:function i9(){},
dE:function dE(){},
jT:function jT(){},
k1:function k1(a,b){this.a=a
this.b=b},
js:function js(){},
jt:function jt(a,b){this.a=a
this.b=b},
ju:function ju(a,b,c){this.a=a
this.b=b
this.c=c},
mS:function(a,b){return new H.I([a,b])},
kH:function(a,b){return new H.I([a,b])},
mT:function(a){return H.oD(a,new H.I([null,null]))},
c7:function(a){return new P.jp([a])},
kQ:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
nE:function(a,b){var u=new P.e7(a,b)
u.c=a.e
return u},
mL:function(a,b,c){var u,t
if(P.kW(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.h])
$.ab.push(a)
try{P.nZ(a,u)}finally{if(0>=$.ab.length)return H.d($.ab,-1)
$.ab.pop()}t=P.ly(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
kB:function(a,b,c){var u,t
if(P.kW(a))return b+"..."+c
u=new P.S(b)
$.ab.push(a)
try{t=u
t.a=P.ly(t.a,a,", ")}finally{if(0>=$.ab.length)return H.d($.ab,-1)
$.ab.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kW:function(a){var u,t
for(u=$.ab.length,t=0;t<u;++t)if(a===$.ab[t])return!0
return!1},
nZ:function(a,b){var u,t,s,r,q,p,o,n=a.gR(a),m=0,l=0
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
lj:function(a,b,c){var u=P.mS(b,c)
a.C(0,new P.fW(u))
return u},
lk:function(a,b){var u,t,s=P.c7(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.m)(a),++t)s.n(0,a[t])
return s},
kI:function(a){var u,t={}
if(P.kW(a))return"{...}"
u=new P.S("")
try{$.ab.push(a)
u.a+="{"
t.a=!0
J.l6(a,new P.h1(t,u))
u.a+="}"}finally{if(0>=$.ab.length)return H.d($.ab,-1)
$.ab.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jp:function jp(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jq:function jq(a){this.a=a
this.c=this.b=null},
e7:function e7(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fL:function fL(){},
fW:function fW(a){this.a=a},
fX:function fX(){},
x:function x(){},
h0:function h0(){},
h1:function h1(a,b){this.a=a
this.b=b},
a1:function a1(){},
jL:function jL(){},
h2:function h2(){},
dL:function dL(a,b){this.a=a
this.$ti=b},
jw:function jw(){},
e8:function e8(){},
eD:function eD(){},
no:function(a,b,c,d){if(b instanceof Uint8Array)return P.np(!1,b,c,d)
return},
np:function(a,b,c,d){var u,t,s=$.mi()
if(s==null)return
u=0===c
if(u&&!0)return P.kN(s,b)
t=b.length
d=P.aZ(c,d,t)
if(u&&d===t)return P.kN(s,b)
return P.kN(s,b.subarray(c,d))},
kN:function(a,b){if(P.nr(b))return
return P.ns(a,b)},
ns:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ag(t)}return},
nr:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
nq:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ag(t)}return},
lV:function(a,b,c){var u,t,s
if(typeof c!=="number")return H.u(c)
u=J.bo(a)
t=b
for(;t<c;++t){s=u.h(a,t)
if(typeof s!=="number")return s.ad()
if((s&127)!==s)return t-b}return c-b},
l9:function(a,b,c,d,e,f){if(C.c.bm(f,4)!==0)throw H.c(P.V("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.V("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.V("Invalid base64 padding, more than two '=' characters",a,b))},
f1:function f1(){},
f2:function f2(){},
f7:function f7(){},
fd:function fd(){},
fs:function fs(){},
fI:function fI(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
fH:function fH(a){this.a=a},
iV:function iV(){},
iX:function iX(){},
jR:function jR(a){this.b=0
this.c=a},
iW:function iW(a){this.a=a},
jQ:function jQ(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
cL:function(a,b,c){var u=H.n8(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.V(a,null,null))},
mJ:function(a){if(a instanceof H.bZ)return a.i(0)
return"Instance of '"+H.e(H.ci(a))+"'"},
mU:function(a,b,c){var u,t,s=J.mN(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
fY:function(a,b,c){var u,t=H.b([],[c])
for(u=J.aL(a);u.t();)t.push(u.gB(u))
if(b)return t
return J.kD(t)},
cl:function(a,b,c){var u,t
if(typeof a==="object"&&a!==null&&a.constructor===Array){u=a.length
c=P.aZ(b,c,u)
if(b<=0){if(typeof c!=="number")return c.O()
t=c<u}else t=!0
return H.lt(t?C.b.eg(a,b,c):a)}if(!!J.P(a).$icf)return H.na(a,b,P.aZ(b,c,a.length))
return P.nj(a,b,c)},
nj:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.c(P.a_(b,0,J.ah(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.a_(c,b,J.ah(a),q,q))
t=J.aL(a)
for(s=0;s<b;++s)if(!t.t())throw H.c(P.a_(b,0,s,q,q))
r=[]
if(u)for(;t.t();)r.push(t.gB(t))
else for(s=b;s<c;++s){if(!t.t())throw H.c(P.a_(c,b,s,q,q))
r.push(t.gB(t))}return H.lt(r)},
nc:function(a){return new H.fO(a,H.mQ(a,!1,!0,!1,!1,!1))},
ly:function(a,b,c){var u=J.aL(b)
if(!u.t())return a
if(c.length===0){do a+=H.e(u.gB(u))
while(u.t())}else{a+=H.e(u.gB(u))
for(;u.t();)a=a+c+H.e(u.gB(u))}return a},
iQ:function(){var u=H.n0()
if(u!=null)return P.nn(u)
throw H.c(P.z("'Uri.base' is not supported"))},
eE:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.e){u=$.mo().b
if(typeof b!=="string")H.r(H.af(b))
u=u.test(b)}else u=!1
if(u)return b
t=c.ght().c4(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.d(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.bC(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
mG:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
mH:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
d_:function(a){if(a>=10)return""+a
return"0"+a},
le:function(a){return new P.b8(1000*a)},
ky:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a5(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mJ(a)},
cR:function(a){return new P.al(!1,null,null,a)},
kq:function(a,b,c){return new P.al(!0,a,b,c)},
dq:function(a,b){return new P.bD(null,null,!0,a,b,"Value not in range")},
a_:function(a,b,c,d,e){return new P.bD(b,c,!0,a,d,"Invalid value")},
aZ:function(a,b,c){var u
if(typeof a!=="number")return H.u(a)
if(0<=a){if(typeof c!=="number")return H.u(c)
u=a>c}else u=!0
if(u)throw H.c(P.a_(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.u(c)
u=b>c}else u=!0
if(u)throw H.c(P.a_(b,a,c,"end",null))
return b}return c},
lu:function(a,b){if(typeof a!=="number")return a.O()
if(a<0)throw H.c(P.a_(a,0,null,b,null))},
N:function(a,b,c,d,e){var u=e==null?J.ah(b):e
return new P.fK(u,!0,a,c,"Index out of range")},
z:function(a){return new P.iN(a)},
iK:function(a){return new P.iJ(a)},
lx:function(a){return new P.ck(a)},
au:function(a){return new P.fa(a)},
w:function(a){return new P.e0(a)},
V:function(a,b,c){return new P.fB(a,b,c)},
mV:function(a,b,c){var u,t,s=H.b([],[c])
C.b.sl(s,a)
for(u=0;u<a;++u){t=b.$1(u)
if(u>=s.length)return H.d(s,u)
s[u]=t}return s},
l2:function(a){H.oP(a)},
nn:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.a.F(a,4)^58)*3|C.a.F(a,0)^100|C.a.F(a,1)^97|C.a.F(a,2)^116|C.a.F(a,3)^97)>>>0
if(u===0)return P.lD(e<e?C.a.q(a,0,e):a,5,f).ge7()
else if(u===32)return P.lD(C.a.q(a,5,e),0,f).ge7()}t=new Array(8)
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
if(P.lU(a,0,e,0,s)>=14)s[7]=e
r=s[1]
if(typeof r!=="number")return r.ie()
if(r>=0)if(P.lU(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.D()
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
m-=0}return new P.jz(a,r,q,p,o,n,m,k)}return P.nH(a,0,e,r,q,p,o,n,m,k)},
lF:function(a){var u=P.h
return C.b.hy(H.b(a.split("&"),[u]),P.kH(u,u),new P.iT(C.e))},
nm:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.iP(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.a.Y(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.cL(C.a.q(a,s,t),n,n)
if(typeof p!=="number")return p.a4()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.d(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.cL(C.a.q(a,s,c),n,n)
if(typeof p!=="number")return p.a4()
if(p>255)k.$2(l,s)
if(r>=u)return H.d(j,r)
j[r]=p
return j},
lE:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.iR(a),d=new P.iS(e,a)
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
else{m=P.nm(a,s,c)
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
nH:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.nP(a,b,d)
else{if(d===b)P.bL(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.nQ(a,u,e-1):""
s=P.nM(a,e,f,!1)
if(typeof f!=="number")return f.D()
r=f+1
if(typeof g!=="number")return H.u(g)
q=r<g?P.nO(P.cL(C.a.q(a,r,g),new P.jM(a,f),n),j):n}else{q=n
s=q
t=""}p=P.nN(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.O()
o=h<i?P.kS(a,h+1,i,n):n
return new P.bK(j,t,s,q,p,o,i<c?P.nL(a,i+1,c):n)},
lM:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bL:function(a,b,c){throw H.c(P.V(c,a,b))},
nO:function(a,b){if(a!=null&&a===P.lM(b))return
return a},
nM:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.a.Y(a,b)===91){if(typeof c!=="number")return c.K()
u=c-1
if(C.a.Y(a,u)!==93)P.bL(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.nJ(a,t,u)
if(typeof s!=="number")return s.O()
if(s<u){r=s+1
q=P.lR(a,C.a.a9(a,"25",r)?s+3:r,u,"%25")}else q=""
P.lE(a,t,s)
return C.a.q(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.u(c)
p=b
for(;p<c;++p)if(C.a.Y(a,p)===58){s=C.a.bu(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.lR(a,C.a.a9(a,"25",r)?s+3:r,c,"%25")}else q=""
P.lE(a,b,s)
return"["+C.a.q(a,b,s)+q+"]"}return P.nS(a,b,c)},
nJ:function(a,b,c){var u,t=C.a.bu(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.u(c)
u=t<c}else u=!1
return u?t:c},
lR:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.S(d):null
if(typeof c!=="number")return H.u(c)
u=b
t=u
s=!0
for(;u<c;){r=C.a.Y(a,u)
if(r===37){q=P.kT(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.S("")
o=l.a+=C.a.q(a,t,u)
if(p)q=C.a.q(a,u,u+3)
else if(q==="%")P.bL(a,u,"ZoneID should not contain % anymore")
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
l.a+=P.kR(r)
u+=m
t=u}}}if(l==null)return C.a.q(a,b,c)
if(t<c)l.a+=C.a.q(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
nS:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.u(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.a.Y(a,u)
if(q===37){p=P.kT(a,u,!0)
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
if(o>=8)return H.d(C.y,o)
o=(C.y[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.S("")
if(t<u){s.a+=C.a.q(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.d(C.k,o)
o=(C.k[o]&1<<(q&15))!==0}else o=!1
if(o)P.bL(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.a.Y(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.S("")
n=C.a.q(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.kR(q)
u+=l
t=u}}}}if(s==null)return C.a.q(a,b,c)
if(t<c){n=C.a.q(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
nP:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.lO(C.a.F(a,b)))P.bL(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.a.F(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.d(C.m,r)
r=(C.m[r]&1<<(s&15))!==0}else r=!1
if(!r)P.bL(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.a.q(a,b,c)
return P.nI(t?a.toLowerCase():a)},
nI:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
nQ:function(a,b,c){return P.cF(a,b,c,C.W,!1)},
nN:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.cF(a,b,c,C.z,!0):C.j.ix(d,new P.jN(),P.h).j(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.a.a5(u,"/"))u="/"+u
return P.nR(u,e,f)},
nR:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.a.a5(a,"/"))return P.nT(a,!u||c)
return P.nU(a)},
kS:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.c(P.cR("Both query and queryParameters specified"))
return P.cF(a,b,c,C.l,!0)}if(d==null)return
u=new P.S("")
t.a=""
d.C(0,new P.jO(new P.jP(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
nL:function(a,b,c){return P.cF(a,b,c,C.l,!0)},
kT:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.a.Y(a,b+1)
t=C.a.Y(a,p)
s=H.k5(u)
r=H.k5(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.c.aS(q,4)
if(p>=8)return H.d(C.h,p)
p=(C.h[p]&1<<(q&15))!==0}else p=!1
if(p)return H.bC(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.a.q(a,b,b+3).toUpperCase()
return},
kR:function(a){var u,t,s,r,q,p,o,n,m="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.b(u,[P.v])
t[0]=37
t[1]=C.a.F(m,a>>>4)
t[2]=C.a.F(m,a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.b(u,[P.v])
for(u=t.length,q=0;--r,r>=0;s=128){p=C.c.h1(a,6*r)&63|s
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
q+=3}}return P.cl(t,0,null)},
cF:function(a,b,c,d,e){var u=P.lQ(a,b,c,d,e)
return u==null?C.a.q(a,b,c):u},
lQ:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.O()
if(typeof c!=="number")return H.u(c)
if(!(o<c))break
c$0:{u=C.a.Y(a,o)
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
if(t){P.bL(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.a.Y(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.kR(u)}}if(m==null)m=new P.S("")
m.a+=C.a.q(a,n,o)
m.a+=H.e(s)
if(typeof r!=="number")return H.u(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.O()
if(n<c)m.a+=C.a.q(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
lP:function(a){if(C.a.a5(a,"."))return!0
return C.a.dR(a,"/.")!==-1},
nU:function(a){var u,t,s,r,q,p,o
if(!P.lP(a))return a
u=H.b([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.U(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.d(u,-1)
u.pop()
if(u.length===0)u.push("")}r=!0}else if("."===p)r=!0
else{u.push(p)
r=!1}}if(r)u.push("")
return C.b.j(u,"/")},
nT:function(a,b){var u,t,s,r,q,p
if(!P.lP(a))return!b?P.lN(a):a
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
t=P.lN(u[0])
if(0>=u.length)return H.d(u,0)
u[0]=t}return C.b.j(u,"/")},
lN:function(a){var u,t,s,r=a.length
if(r>=2&&P.lO(J.mq(a,0)))for(u=1;u<r;++u){t=C.a.F(a,u)
if(t===58)return C.a.q(a,0,u)+"%3A"+C.a.aa(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.d(C.m,s)
s=(C.m[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
nK:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.a.F(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.cR("Invalid URL encoding"))}}return u},
kU:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.a.F(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.e!==d)s=!1
else s=!0
if(s)return C.a.q(a,b,c)
else r=new H.n(C.a.q(a,b,c))}else{r=H.b([],[P.v])
for(s=a.length,q=b;q<c;++q){t=C.a.F(a,q)
if(t>127)throw H.c(P.cR("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.cR("Truncated URI"))
r.push(P.nK(a,q+1))
q+=2}else if(t===43)r.push(32)
else r.push(t)}}return new P.iW(!1).c4(r)},
lO:function(a){var u=a|32
return 97<=u&&u<=122},
lD:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.b([b-1],[P.v])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.a.F(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.V(m,a,t))}}if(s<0&&t>b)throw H.c(P.V(m,a,t))
for(;r!==44;){l.push(t);++t
for(q=-1;t<u;++t){r=C.a.F(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)l.push(q)
else{p=C.b.gaw(l)
if(r!==44||t!==p+7||!C.a.a9(a,"base64",p+1))throw H.c(P.V("Expecting '='",a,t))
break}}l.push(t)
o=t+1
if((l.length&1)===1)a=C.F.hI(0,a,o,u)
else{n=P.lQ(a,o,u,C.l,!0)
if(n!=null)a=C.a.aY(a,o,u,n)}return new P.iO(a,l,c)},
nW:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.mV(22,new P.jX(),P.bF),n=new P.jW(o),m=new P.jY(),l=new P.jZ(),k=n.$2(0,225)
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
lU:function(a,b,c,d,e){var u,t,s,r,q,p=$.mp()
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
aK:function aK(){},
ad:function ad(a,b){this.a=a
this.b=b},
L:function L(){},
b8:function b8(a){this.a=a},
fo:function fo(){},
fp:function fp(){},
bv:function bv(){},
dm:function dm(){},
al:function al(a,b,c,d){var _=this
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
fK:function fK(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iN:function iN(a){this.a=a},
iJ:function iJ(a){this.a=a},
ck:function ck(a){this.a=a},
fa:function fa(a){this.a=a},
hB:function hB(){},
dx:function dx(){},
fi:function fi(a){this.a=a},
e0:function e0(a){this.a=a},
fB:function fB(a,b,c){this.a=a
this.b=b
this.c=c},
fD:function fD(){},
v:function v(){},
i:function i(){},
fM:function fM(){},
o:function o(){},
R:function R(){},
bi:function bi(){},
ac:function ac(){},
a2:function a2(){},
h:function h(){},
S:function S(a){this.a=a},
iT:function iT(a){this.a=a},
iP:function iP(a){this.a=a},
iR:function iR(a){this.a=a},
iS:function iS(a,b){this.a=a
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
jM:function jM(a,b){this.a=a
this.b=b},
jN:function jN(){},
jP:function jP(a,b){this.a=a
this.b=b},
jO:function jO(a){this.a=a},
iO:function iO(a,b,c){this.a=a
this.b=b
this.c=c},
jX:function jX(){},
jW:function jW(a){this.a=a},
jY:function jY(){},
jZ:function jZ(){},
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
oy:function(a){var u,t=J.P(a)
if(!!t.$iaR){u=t.gds(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.eC(a.data,a.height,a.width)},
ox:function(a){if(a instanceof P.eC)return{data:a.a,height:a.b,width:a.c}
return a},
b1:function(a){var u,t,s,r,q
if(a==null)return
u=P.kH(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){q=t[r]
u.m(0,q,a[q])}return u},
ow:function(a){var u={}
a.C(0,new P.k2(u))
return u},
jB:function jB(){},
jC:function jC(a,b){this.a=a
this.b=b},
jD:function jD(a,b){this.a=a
this.b=b},
eC:function eC(a,b,c){this.a=a
this.b=b
this.c=c},
k2:function k2(a){this.a=a},
eu:function eu(a,b){this.a=a
this.b=b},
fx:function fx(a,b){this.a=a
this.b=b},
fy:function fy(){},
fz:function fz(){},
jo:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
nD:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jr:function jr(){},
a9:function a9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aS:function aS(){},
fS:function fS(){},
aW:function aW(){},
hz:function hz(){},
hH:function hH(){},
cj:function cj(){},
ia:function ia(){},
l:function l(){},
b_:function b_(){},
iz:function iz(){},
e5:function e5(){},
e6:function e6(){},
eg:function eg(){},
eh:function eh(){},
es:function es(){},
et:function et(){},
eA:function eA(){},
eB:function eB(){},
bF:function bF(){},
eX:function eX(){},
eY:function eY(){},
eZ:function eZ(a){this.a=a},
f_:function f_(){},
bq:function bq(){},
hA:function hA(){},
dU:function dU(){},
ds:function ds(){},
i5:function i5(){},
eo:function eo(){},
ep:function ep(){}},W={
l8:function(){var u=document.createElement("a")
return u},
kt:function(){var u=document.createElement("canvas")
return u},
mI:function(a,b,c){var u=document.body,t=(u&&C.r).ak(u,a,b,c)
t.toString
u=new H.ct(new W.a4(t),new W.fr(),[W.C])
return u.gaL(u)},
kw:function(a){return"wheel"},
c0:function(a){var u,t,s,r="element tag unavailable"
try{u=J.bS(a)
t=u.ge4(a)
if(typeof t==="string")r=u.ge4(a)}catch(s){H.ag(s)}return r},
kA:function(a){var u=document.createElement("img")
if(a!=null)u.src=a
return u},
mK:function(a){var u,t=document.createElement("input"),s=t
try{s.type=a}catch(u){H.ag(u)}return s},
jn:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lK:function(a,b,c,d){var u=W.jn(W.jn(W.jn(W.jn(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
W:function(a,b,c,d){var u=W.lW(new W.jl(c),W.k)
if(u!=null&&!0)J.ms(a,b,u,!1)
return new W.jk(a,b,u,!1)},
lJ:function(a){var u=W.l8(),t=window.location
u=new W.cv(new W.jv(u,t))
u.er(a)
return u},
nz:function(a,b,c,d){return!0},
nA:function(a,b,c,d){var u,t=d.a,s=t.a
s.href=c
u=s.hostname
t=t.b
if(!(u==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(u==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
lL:function(){var u=P.h,t=P.lk(C.o,u),s=H.b(["TEMPLATE"],[u])
t=new W.jH(t,P.c7(u),P.c7(u),P.c7(u),null)
t.ev(null,new H.h4(C.o,new W.jI(),[H.b2(C.o,0),u]),s,null)
return t},
lW:function(a,b){var u=$.ar
if(u===C.f)return a
return u.dl(a,b)},
p:function p(){},
eT:function eT(){},
eU:function eU(){},
eV:function eV(){},
br:function br(){},
bs:function bs(){},
bt:function bt(){},
b7:function b7(){},
fe:function fe(){},
H:function H(){},
c_:function c_(){},
ff:function ff(){},
ai:function ai(){},
av:function av(){},
fg:function fg(){},
fh:function fh(){},
fk:function fk(){},
am:function am(){},
fl:function fl(){},
d1:function d1(){},
d2:function d2(){},
fm:function fm(){},
fn:function fn(){},
jg:function jg(a,b){this.a=a
this.b=b},
Q:function Q(){},
fr:function fr(){},
k:function k(){},
f:function f(){},
an:function an(){},
c2:function c2(){},
fw:function fw(){},
fA:function fA(){},
aw:function aw(){},
fG:function fG(){},
c4:function c4(){},
aR:function aR(){},
bx:function bx(){},
bz:function bz(){},
fZ:function fZ(){},
hk:function hk(){},
cb:function cb(){},
hl:function hl(){},
hm:function hm(a){this.a=a},
hn:function hn(){},
ho:function ho(a){this.a=a},
az:function az(){},
hp:function hp(){},
aA:function aA(){},
a4:function a4(a){this.a=a},
C:function C(){},
dk:function dk(){},
aB:function aB(){},
hE:function hE(){},
hP:function hP(){},
hQ:function hQ(a){this.a=a},
hS:function hS(){},
aD:function aD(){},
i2:function i2(){},
aE:function aE(){},
i3:function i3(){},
aF:function aF(){},
i7:function i7(){},
i8:function i8(a){this.a=a},
ap:function ap(){},
dA:function dA(){},
ib:function ib(){},
ic:function ic(){},
cm:function cm(){},
aG:function aG(){},
aq:function aq(){},
ig:function ig(){},
ih:function ih(){},
it:function it(){},
aH:function aH(){},
bE:function bE(){},
ix:function ix(){},
iy:function iy(){},
bj:function bj(){},
iU:function iU(){},
j9:function j9(){},
bm:function bm(){},
cu:function cu(){},
jh:function jh(){},
dW:function dW(){},
jm:function jm(){},
ed:function ed(){},
jA:function jA(){},
jE:function jE(){},
jf:function jf(){},
jj:function jj(a){this.a=a},
jk:function jk(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jl:function jl(a){this.a=a},
cv:function cv(a){this.a=a},
M:function M(){},
dl:function dl(a){this.a=a},
hx:function hx(a){this.a=a},
hw:function hw(a,b,c){this.a=a
this.b=b
this.c=c},
el:function el(){},
jx:function jx(){},
jy:function jy(){},
jH:function jH(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jI:function jI(){},
jF:function jF(){},
d5:function d5(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
aV:function aV(){},
jv:function jv(a,b){this.a=a
this.b=b},
eF:function eF(a){this.a=a},
jS:function jS(a){this.a=a},
dV:function dV(){},
dX:function dX(){},
dY:function dY(){},
dZ:function dZ(){},
e_:function e_(){},
e1:function e1(){},
e2:function e2(){},
e3:function e3(){},
e4:function e4(){},
e9:function e9(){},
ea:function ea(){},
eb:function eb(){},
ec:function ec(){},
ee:function ee(){},
ef:function ef(){},
ei:function ei(){},
ej:function ej(){},
ek:function ek(){},
cB:function cB(){},
cC:function cC(){},
em:function em(){},
en:function en(){},
er:function er(){},
ev:function ev(){},
ew:function ew(){},
cD:function cD(){},
cE:function cE(){},
ey:function ey(){},
ez:function ez(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
eK:function eK(){},
eL:function eL(){},
eM:function eM(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){}},K={
O:function(a,b){var u,t,s
if(a.length!==1||b.length!==1)throw H.c(P.w("The given low and high character strings for a Range must have one and only one characters."))
u=C.a.F(a,0)
t=C.a.F(b,0)
if(u>t){s=t
t=u
u=s}return new K.hK(u,t)},
t:function(a){var u=new K.hT()
u.ep(a)
return u},
aM:function aM(){},
d6:function d6(){},
bg:function bg(){},
a8:function a8(){this.a=null},
hK:function hK(a,b){this.a=a
this.b=b},
hT:function hT(){this.a=null}},L={
iv:function(){var u=new L.iu(),t=P.h
u.a=new H.I([t,L.dy])
u.b=new H.I([t,L.dG])
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
iu:function iu(){var _=this
_.d=_.c=_.b=_.a=null},
dI:function dI(a){this.b=a
this.a=this.c=null}},O={
ku:function(a){var u=new O.aN([a])
u.bo(a)
return u},
aN:function aN(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
ca:function ca(){this.b=this.a=null},
df:function df(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hc:function hc(a,b){this.a=a
this.b=b},
hd:function hd(){},
he:function he(a,b){this.a=a
this.b=b},
hf:function hf(){},
hg:function hg(a,b){this.a=a
this.b=b},
hh:function hh(){},
hi:function hi(a,b){this.a=a
this.b=b},
hj:function hj(){},
h6:function h6(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
c9:function c9(){},
h7:function h7(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
ax:function ax(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h9:function h9(){var _=this
_.e=_.d=_.c=_.b=null},
ha:function ha(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hb:function hb(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
du:function du(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
dB:function dB(){}},E={
lh:function(){var u,t=new E.aQ()
t.a=""
t.b=!0
u=O.ku(E.aQ)
t.y=u
u.b_(t.ghJ(),t.ghM())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sbF(0,null)
return t},
nd:function(a,b){var u=new E.hL(a)
u.eo(a,b)
return u},
nk:function(a,b,c,d,e){var u,t,s=J.P(a)
if(!!s.$ibt)return E.lz(a,!0,!0,!0,!1)
u=W.kt()
t=u.style
t.width="100%"
t.height="100%"
s.gc2(a).n(0,u)
return E.lz(u,!0,!0,!0,!1)},
lz:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.dD(),p=C.i.cB(a,"webgl2",P.mT(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.r(P.w("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.nd(p,a)
u=new T.ip(p)
u.b=p.getParameter(3379)
u.c=p.getParameter(34076)
u.e=u.d=0
q.f=u
u=new X.dM(a)
t=new X.fR()
t.c=new X.aj(!1,!1,!1)
t.d=P.c7(P.v)
u.b=t
t=new X.hq(u)
t.f=0
t.r=V.aX()
t.x=V.aX()
t.ch=t.Q=1
u.c=t
t=new X.h_(u)
t.r=0
t.x=V.aX()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.iw(u)
t.f=V.aX()
t.r=V.aX()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.b([],[[P.dz,P.a2]])
u.z=t
s=document
t.push(W.W(s,"contextmenu",u.gf9(),!1))
u.z.push(W.W(a,"focus",u.gff(),!1))
u.z.push(W.W(a,"blur",u.gf3(),!1))
u.z.push(W.W(s,"keyup",u.gfj(),!1))
u.z.push(W.W(s,"keydown",u.gfh(),!1))
u.z.push(W.W(a,"mousedown",u.gfn(),!1))
u.z.push(W.W(a,"mouseup",u.gfs(),!1))
u.z.push(W.W(a,r,u.gfp(),!1))
t=u.z
W.kw(a)
W.kw(a)
t.push(W.W(a,W.kw(a),u.gfu(),!1))
u.z.push(W.W(s,r,u.gfb(),!1))
u.z.push(W.W(s,"mouseup",u.gfd(),!1))
u.z.push(W.W(s,"pointerlockchange",u.gfw(),!1))
u.z.push(W.W(a,"touchstart",u.gfO(),!1))
u.z.push(W.W(a,"touchend",u.gfK(),!1))
u.z.push(W.W(a,"touchmove",u.gfM(),!1))
q.x=u
q.ch=!0
q.cx=!1
q.cy=new P.ad(Date.now(),!1)
q.db=0
q.d3()
return q},
f3:function f3(){},
aQ:function aQ(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hL:function hL(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hM:function hM(a){this.a=a},
hN:function hN(a){this.a=a},
hO:function hO(a){this.a=a},
dD:function dD(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
is:function is(a){this.a=a}},Z={
kP:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.bM(c)),35044)
a.bindBuffer(b,null)
return new Z.dR(b,u)},
ak:function(a){return new Z.b0(a)},
dR:function dR(a,b){this.a=a
this.b=b},
cU:function cU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
dS:function dS(a){this.a=a},
bY:function bY(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
by:function by(a,b,c){this.a=a
this.b=b
this.c=c},
b0:function b0(a){this.a=a}},D={
E:function(){var u=new D.bw()
u.d=0
return u},
f6:function f6(){},
bw:function bw(){var _=this
_.d=_.c=_.b=_.a=null},
fu:function fu(a){this.a=a},
fv:function fv(a){this.a=a},
Y:function Y(){this.b=null},
ba:function ba(){this.b=null},
bb:function bb(){this.b=null},
B:function B(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
f0:function f0(){},
bu:function bu(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a7:function a7(){},
dc:function dc(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
hF:function hF(){},
i4:function i4(){}},X={cV:function cV(a,b){this.a=a
this.b=b},db:function db(a,b){this.a=a
this.b=b},fR:function fR(){var _=this
_.d=_.c=_.b=_.a=null},de:function de(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},h_:function h_(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aj:function aj(a,b,c){this.a=a
this.b=b
this.c=c},aU:function aU(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hq:function hq(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cc:function cc(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hG:function hG(){},dH:function dH(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iw:function iw(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dM:function dM(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
kz:function(a){var u=new X.fC(),t=new V.aO(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.lw
if(t==null){t=V.lv(0,0,1,1)
$.lw=t}u.r=t
return u},
lo:function(a){var u,t,s=new X.dn()
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
ks:function ks(){},
fC:function fC(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fJ:function fJ(){this.b=this.a=null},
dn:function dn(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
id:function id(){}},V={
f8:function(a,b,c){var u=a/255,t=b/255,s=c/255
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.aO(u,t,s,1)},
oY:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.bm(a-b,u)
return(a<0?a+u:a)+b},
K:function(a,b,c){if(a==null)return C.a.am("null",c)
return C.a.am(C.d.e6(Math.abs(a-0)<$.F().a?0:a,b),c+b+1)},
bR:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.h])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.m)(a),++s){r=V.K(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.d(o,q)
u=C.a.am(o[q],t)
p=o.length
if(q>=p)return H.d(o,q)
o[q]=u}return o},
l1:function(a){return C.d.i6(Math.pow(2,C.S.cg(Math.log(H.ov(a))/Math.log(2))))},
bA:function(){var u=$.lm
return u==null?$.lm=V.ay(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
ay:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aT(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
ll:function(a,b,c){var u=c.w(0,Math.sqrt(c.H(c))),t=b.bc(u),s=t.w(0,Math.sqrt(t.H(t))),r=u.bc(s),q=new V.D(a.a,a.b,a.c),p=s.U(0).H(q),o=r.U(0).H(q),n=u.U(0).H(q)
return V.ay(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
aX:function(){var u=$.lq
return u==null?$.lq=new V.a3(0,0):u},
lr:function(){var u=$.aC
return u==null?$.aC=new V.Z(0,0,0):u},
lv:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dr(a,b,c,d)},
dQ:function(){var u=$.lI
return u==null?$.lI=new V.D(0,0,0):u},
nt:function(){var u=$.iY
return u==null?$.iY=new V.D(-1,0,0):u},
kO:function(){var u=$.iZ
return u==null?$.iZ=new V.D(0,1,0):u},
nu:function(){var u=$.j_
return u==null?$.j_=new V.D(0,0,1):u},
y:function y(a,b,c){this.a=a
this.b=b
this.c=c},
aO:function aO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ft:function ft(a){this.a=a},
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
a3:function a3(a,b){this.a=a
this.b=b},
Z:function Z(a,b,c){this.a=a
this.b=b
this.c=c},
aY:function aY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dr:function dr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
J:function J(a,b){this.a=a
this.b=b},
D:function D(a,b,c){this.a=a
this.b=b
this.c=c},
oS:function(a){P.nl(C.P,new V.km(a))},
nf:function(a){var u=new V.hY()
u.eq(a,!0)
return u},
cW:function cW(){},
km:function km(a){this.a=a},
fj:function fj(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fE:function fE(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fF:function fF(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hD:function hD(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hI:function hI(a){this.a=a
this.c=null},
hJ:function hJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hY:function hY(){this.b=this.a=null},
i_:function i_(a){this.a=a},
hZ:function hZ(a){this.a=a},
i0:function i0(a){this.a=a},
ij:function ij(a,b){this.a=a
this.c=null
this.d=b},
il:function il(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ik:function ik(){}},U={
kv:function(){var u=new U.f9()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
ld:function(a){var u=new U.cY()
u.a=a
return u},
f9:function f9(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cY:function cY(){this.b=this.a=null},
c3:function c3(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ae:function ae(){},
dN:function dN(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dO:function dO(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dP:function dP(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cX:function cX(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},cZ:function cZ(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},d3:function d3(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},ao:function ao(){}},A={
mX:function(a,b){var u=a.bd,t=new A.h5(b,u)
t.cJ(b,u)
t.en(a,b)
return t},
mY:function(a,b,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="MaterialLight_"+a3.gar(a3)+a4.gar(a4)+a5.gar(a5)+a6.gar(a6)+a7.gar(a7)+a8.gar(a8)+a9.gar(a9)+b0.gar(b0)+b1.gar(b1)+"_"
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
d=$.as()
if(j){u=$.b5()
d=new Z.b0(d.a|u.a)}if(i){u=$.b4()
d=new Z.b0(d.a|u.a)}if(h){u=$.b6()
d=new Z.b0(d.a|u.a)}if(g){u=$.b3()
d=new Z.b0(d.a|u.a)}return new A.h8(a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,s,o,k,o,r,f,!0,e,!1,m,r,l,j,i,h,!1,g,a,!1,a0,!1,a2,c.charCodeAt(0)==0?c:c,d)},
k_:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
k0:function(a,b,c){var u,t="Txt, txt2D).rgb;\n"
A.k_(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.eR(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.b){u+="   "+c+"Color = "+c+"Clr*texture2D("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.b){u+="   "+c+"Color = texture2D("+c+t
a.a=u}a.a=u+"}\n"},
o4:function(a,b){var u,t=a.a,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.k_(b,t,"emission")
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
o0:function(a,b){var u,t=a.b
if(!(t.a||t.b||!1))return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.k0(b,t,"ambient")
b.a+="\n"},
o2:function(a,b){var u,t=a.c
if(!(t.a||t.b||!1))return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.k0(b,t,"diffuse")
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
o5:function(a,b){var u,t=a.d
if(!(t.a||t.b||!1))return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.k0(b,t,"invDiffuse")
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
ob:function(a,b){var u,t=a.e
if(!(t.a||t.b||!1))return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.k0(b,t,"specular")
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
o7:function(a,b){var u,t,s
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
o9:function(a,b){var u,t=a.r,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.k_(b,t,"reflect")
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
oa:function(a,b){var u,t=a.x,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.k_(b,t,"refract")
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
o1:function(a,b,c){var u,t,s,r,q,p,o=b.b
if(o<=0)return
u=b.a
t="barLight"+H.e(u)
s=A.eR(t)
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
o3:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.e(u)
s=A.eR(t)
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
o8:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.e(u)
s=A.eR(t)
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
oc:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.e(u)
s=A.eR(t)
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
o6:function(a,b){var u,t
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
od:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.S("")
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
A.o4(a,j)
A.o0(a,j)
A.o2(a,j)
A.o5(a,j)
A.ob(a,j)
t=a.db
if(t){r=j.a+="// === Environmental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.o9(a,j)
A.oa(a,j)}A.o7(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.m)(q),++o)A.o1(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.m)(q),++o)A.o3(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.m)(q),++o)A.o8(a,q[o],j)
for(q=a.cx,p=q.length,o=0;o<q.length;q.length===p||(0,H.m)(q),++o)A.oc(a,q[o],j)
A.o6(a,j)}q=j.a+="// === Main ===\n"
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
oe:function(a,b){var u,t,s
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
og:function(a,b){var u
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
of:function(a,b){var u
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
oi:function(a,b){var u,t
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
oj:function(a,b){var u,t
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
oh:function(a,b){var u
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
ok:function(a,b){var u
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
eR:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.a.aa(a,1)},
kL:function(a,b,c,d,e){var u=new A.iC(a,c,e)
u.f=d
P.mU(d,0,P.v)
return u},
cS:function cS(a,b,c){this.a=a
this.b=b
this.c=c},
eW:function eW(a){this.a=a},
X:function X(a,b,c){this.a=a
this.b=b
this.c=c},
h5:function h5(a,b){var _=this
_.io=_.dz=_.bt=_.bd=_.aW=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iw=_.iv=_.iu=_.ce=_.cd=_.cc=_.cb=_.ca=_.c9=_.c8=_.c7=_.it=_.dL=_.dK=_.is=_.dJ=_.dI=_.dH=_.ir=_.dG=_.dF=_.dE=_.iq=_.dD=_.dC=_.ip=_.dB=_.dA=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cT:function cT(a,b){this.a=a
this.b=b},
d0:function d0(a,b){this.a=a
this.b=b},
dp:function dp(a,b){this.a=a
this.b=b},
dw:function dw(a,b){this.a=a
this.b=b},
h8:function h8(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
dt:function dt(){},
i1:function i1(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dJ:function dJ(){},
iH:function iH(a){this.a=a},
bk:function bk(a,b,c){this.a=a
this.c=b
this.d=c},
iE:function iE(a,b,c){this.a=a
this.c=b
this.d=c},
iF:function iF(a,b,c){this.a=a
this.c=b
this.d=c},
iG:function iG(a,b,c){this.a=a
this.c=b
this.d=c},
iC:function iC(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
T:function T(a,b,c){this.a=a
this.c=b
this.d=c},
iD:function iD(a,b,c){this.a=a
this.c=b
this.d=c},
G:function G(a,b,c){this.a=a
this.c=b
this.d=c},
cn:function cn(a,b,c){this.a=a
this.c=b
this.d=c},
iI:function iI(a,b,c){this.a=a
this.c=b
this.d=c},
cq:function cq(a,b,c){this.a=a
this.c=b
this.d=c},
aa:function aa(a,b,c){this.a=a
this.c=b
this.d=c},
a0:function a0(a,b,c){this.a=a
this.c=b
this.d=c},
bl:function bl(a,b,c){this.a=a
this.c=b
this.d=c}},F={
jV:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cG:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.D(h,g+a1,f+a2)
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
j.d=i}m=F.jV(i)
l=F.jV(h)
k=F.oV(d,a0,new F.jU(j,F.jV(g),F.jV(f),l,m,c),b)
if(k!=null)a.hH(k)},
oV:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.kJ()
t=H.b([],[F.bH])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.j0(g,g,new V.aO(p,0,0,1),g,g,new V.a3(r,1),g,g,0)
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
o=F.j0(g,g,new V.aO(j,i,h,1),g,g,new V.a3(r,m),g,g,0)
k.n(0,o)
c.$3(o,r,n)
t.push(o.c5(d))}}u.d.hb(a+1,b+1,t)
return u},
c1:function(a,b,c){var u=new F.b9(),t=a.a
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
mR:function(a,b){var u=new F.c6(),t=a.a
if(t==null)H.r(P.w("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.r(P.w("May not create a line with vertices attached to different shapes."))
u.a=a
a.c.b.push(u)
u.b=b
b.c.c.push(u)
u.a.a.c.b.push(u)
u.a.a.a8()
return u},
kJ:function(){var u=new F.hU(),t=new F.j1(u)
t.b=!1
t.c=H.b([],[F.bH])
u.a=t
t=new F.hX(u)
t.b=H.b([],[F.cg])
u.b=t
t=new F.hW(u)
t.b=H.b([],[F.c6])
u.c=t
t=new F.hV(u)
t.b=H.b([],[F.b9])
u.d=t
u.e=null
return u},
j0:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.bH(),r=new F.j6()
r.b=H.b([],[F.cg])
s.b=r
r=new F.j5()
u=[F.c6]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.j2()
u=[F.b9]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.mj()
s.e=0
r=$.as()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.b5().a)!==0?e:t
s.x=(u&$.b4().a)!==0?b:t
s.y=(u&$.b6().a)!==0?f:t
s.z=(u&$.bp().a)!==0?g:t
s.Q=(u&$.mk().a)!==0?c:t
s.ch=(u&$.bT().a)!==0?i:0
s.cx=(u&$.b3().a)!==0?a:t
return s},
jU:function jU(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
b9:function b9(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
c6:function c6(){this.b=this.a=null},
cg:function cg(){this.a=null},
hU:function hU(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hV:function hV(a){this.a=a
this.b=null},
hW:function hW(a){this.a=a
this.b=null},
hX:function hX(a){this.a=a
this.b=null},
bH:function bH(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
j8:function j8(a){this.a=a},
j7:function j7(a){this.a=a},
j1:function j1(a){this.a=a
this.c=this.b=null},
j2:function j2(){this.d=this.c=this.b=null},
j3:function j3(a,b){this.a=a
this.b=b},
j4:function j4(a,b){this.a=a
this.b=b},
j5:function j5(){this.c=this.b=null},
j6:function j6(){this.b=null}},T={dC:function dC(){},ii:function ii(){},im:function im(){var _=this
_.y=_.d=_.c=_.b=_.a=null},io:function io(){var _=this
_.e=_.d=_.c=_.b=_.a=null},ip:function ip(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},ir:function ir(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},iq:function iq(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},B={
m1:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="testCanvas",a6=null,a7="bumpMaps",a8="controls",a9=34067,b0="modifiers",b1=V.nf("Test 015"),b2=W.kt()
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
s=E.nk(t,!0,!0,!0,!1)
r=X.kz(a6)
r.sdq(0,!1)
q=E.lh()
p=F.kJ()
F.cG(p,a6,a6,1,1,1,0,0,1)
F.cG(p,a6,a6,1,1,0,1,0,3)
F.cG(p,a6,a6,1,1,0,0,1,2)
F.cG(p,a6,a6,1,1,-1,0,0,0)
F.cG(p,a6,a6,1,1,0,-1,0,0)
F.cG(p,a6,a6,1,1,0,0,-1,3)
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
l=new T.io()
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
k=new O.df()
o=O.ku(V.aT)
k.e=o
o.b_(k.gf_(),k.gf1())
o=new O.ax(k,"emission")
o.c=new A.X(!1,!1,!1)
o.f=new V.y(0,0,0)
k.f=o
o=new O.ax(k,"ambient")
o.c=new A.X(!1,!1,!1)
o.f=new V.y(0,0,0)
k.r=o
o=new O.ax(k,"diffuse")
o.c=new A.X(!1,!1,!1)
o.f=new V.y(0,0,0)
k.x=o
o=new O.ax(k,"invDiffuse")
o.c=new A.X(!1,!1,!1)
o.f=new V.y(0,0,0)
k.y=o
o=new O.hb(k,"specular")
o.c=new A.X(!1,!1,!1)
o.f=new V.y(0,0,0)
o.ch=100
k.z=o
o=new O.h7(k,"bump")
o.c=new A.X(!1,!1,!1)
k.Q=o
k.ch=null
o=new O.ax(k,"reflect")
o.c=new A.X(!1,!1,!1)
o.f=new V.y(0,0,0)
k.cx=o
o=new O.ha(k,"refract")
o.c=new A.X(!1,!1,!1)
o.f=new V.y(0,0,0)
o.ch=1
k.cy=o
o=new O.h6(k,"alpha")
o.c=new A.X(!1,!1,!1)
o.f=1
k.db=o
o=new D.dc()
o.bo(D.a7)
o.e=H.b([],[D.f0])
o.f=H.b([],[D.bu])
o.r=H.b([],[D.hF])
o.x=H.b([],[D.i4])
o.z=o.y=null
o.cD(o.geY(),o.gfA(),o.gfE())
k.dx=o
n=new O.h9()
n.b=new V.aO(0,0,0,0)
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
j=V.kO()
i=U.ld(V.ll(V.lr(),j,new V.D(-1,-1,-1)))
h=new D.bu()
h.c=new V.y(1,1,1)
h.a=V.nu()
h.d=V.kO()
h.e=V.nt()
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
e=new U.c3()
e.bo(U.ae)
e.b_(e.geW(),e.gfC())
e.e=null
e.f=V.bA()
e.r=0
o=s.x
n=new U.dO()
i=U.kv()
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
i=U.kv()
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
n=new U.dN()
i=U.kv()
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
n=new U.dP()
n.c=0.01
n.e=n.d=0
d=new X.aj(!1,!1,!1)
n.b=d
i=new D.B(b0,a6,d)
i.b=!0
n.T(i)
n.ba(o)
e.n(0,n)
e.n(0,U.ld(V.ay(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
c=X.lo(e)
b=new M.cZ()
b.a=!0
o=E.lh()
p=F.kJ()
n=p.a
i=new V.D(-1,-1,1)
i=i.w(0,Math.sqrt(i.H(i)))
a=n.br(new V.aY(1,2,4,6),V.f8(255,0,0),new V.Z(-1,-1,0),new V.a3(0,1),i,a6)
i=p.a
n=new V.D(1,-1,1)
n=n.w(0,Math.sqrt(n.H(n)))
a0=i.br(new V.aY(0,3,4,6),V.f8(0,0,255),new V.Z(1,-1,0),new V.a3(1,1),n,a6)
n=p.a
i=new V.D(1,1,1)
i=i.w(0,Math.sqrt(i.H(i)))
a1=n.br(new V.aY(0,2,5,6),V.f8(0,128,0),new V.Z(1,1,0),new V.a3(1,0),i,a6)
i=p.a
n=V.aX()
h=new V.D(-1,1,1)
h=h.w(0,Math.sqrt(h.H(h)))
a2=i.br(new V.aY(0,2,4,7),V.f8(255,255,0),new V.Z(-1,1,0),n,h,a6)
p.d.ha(H.b([a,a0,a1,a2],[F.bH]))
p.aB()
o.sbF(0,p)
b.e=o
b.sbb(a6)
b.sbh(0,a6)
b.sbi(a6)
o=new O.du()
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
a3=new M.d3()
a3.a=!0
o=O.ku(E.aQ)
a3.e=o
o.b_(a3.gf5(),a3.gf7())
a3.y=a3.x=a3.r=a3.f=null
a4=X.kz(a6)
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
i=new M.cX()
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
s.cM()}o=new V.hI(a8)
n=u.getElementById(a8)
o.c=n
if(n==null)H.r("Failed to find controls for RadioGroup")
o.dd(0,"Silver",new B.ka(k),!0)
o.ae(0,"Gold",new B.kb(k))
o.ae(0,"Glass",new B.kc(k))
o.ae(0,"Blue Glass",new B.kd(k))
o.ae(0,"Water Bubble",new B.ke(k))
o.ae(0,"No Reflection",new B.kf(k))
o.ae(0,"Pink Distort",new B.kg(k))
o.ae(0,"Cloak",new B.kh(k))
o.ae(0,"White and Shiny",new B.ki(k))
o=new V.ij(a7,new B.kj(k,s))
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
u.push(new B.kk(b1,k))
V.oS(s)},
ka:function ka(a){this.a=a},
kb:function kb(a){this.a=a},
kc:function kc(a){this.a=a},
kd:function kd(a){this.a=a},
ke:function ke(a){this.a=a},
kf:function kf(a){this.a=a},
kg:function kg(a){this.a=a},
kh:function kh(a){this.a=a},
ki:function ki(a){this.a=a},
kj:function kj(a,b){this.a=a
this.b=b},
kk:function kk(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T,B]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kF.prototype={}
J.a.prototype={
u:function(a,b){return a===b},
gI:function(a){return H.ch(a)},
i:function(a){return"Instance of '"+H.e(H.ci(a))+"'"}}
J.fN.prototype={
i:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$iaK:1}
J.d9.prototype={
u:function(a,b){return null==b},
i:function(a){return"null"},
gI:function(a){return 0}}
J.da.prototype={
gI:function(a){return 0},
i:function(a){return String(a)},
$imP:1}
J.hC.prototype={}
J.bG.prototype={}
J.be.prototype={
i:function(a){var u=a[$.m7()]
if(u==null)return this.ek(a)
return"JavaScript function for "+H.e(J.a5(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.bc.prototype={
hZ:function(a,b){var u
if(!!a.fixed$length)H.r(P.z("removeAt"))
u=a.length
if(b>=u)throw H.c(P.dq(b,null))
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
if(a.length!==t)throw H.c(P.au(a))}},
j:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.d(r,u)
r[u]=t}return r.join(b)},
hE:function(a){return this.j(a,"")},
hx:function(a,b,c){var u,t,s=a.length
for(u=b,t=0;t<s;++t){u=c.$2(u,a[t])
if(a.length!==s)throw H.c(P.au(a))}return u},
hy:function(a,b,c){return this.hx(a,b,c,null)},
hw:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.c(P.au(a))}throw H.c(H.kC())},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
eg:function(a,b,c){if(b<0||b>a.length)throw H.c(P.a_(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.c(P.a_(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.b2(a,0)])
return H.b(a.slice(b,c),[H.b2(a,0)])},
gaw:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.kC())},
dh:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.c(P.au(a))}return!1},
b1:function(a,b){if(!!a.immutable$list)H.r(P.z("sort"))
H.ni(a,b==null?J.nY():b)},
ef:function(a){return this.b1(a,null)},
N:function(a,b){var u
for(u=0;u<a.length;++u)if(J.U(a[u],b))return!0
return!1},
i:function(a){return P.kB(a,"[","]")},
gR:function(a){return new J.a6(a,a.length)},
gI:function(a){return H.ch(a)},
gl:function(a){return a.length},
sl:function(a,b){var u="newLength"
if(!!a.fixed$length)H.r(P.z("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.kq(b,u,null))
if(b<0)throw H.c(P.a_(b,0,null,u,null))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bQ(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.r(P.z("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bQ(a,b))
a[b]=c},
$iq:1,
$ii:1,
$io:1}
J.kE.prototype={}
J.a6.prototype={
gB:function(a){return this.d},
t:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.m(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.c5.prototype={
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
i6:function(a){var u
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
if(b>20)throw H.c(P.a_(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbv(a))return"-"+u
return u},
bj:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.a_(b,2,36,"radix",null))
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
J.d8.prototype={$iv:1}
J.d7.prototype={}
J.bd.prototype={
Y:function(a,b){if(b<0)throw H.c(H.bQ(a,b))
if(b>=a.length)H.r(H.bQ(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(b>=a.length)throw H.c(H.bQ(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(typeof b!=="string")throw H.c(P.kq(b,null,null))
return a+b},
aY:function(a,b,c,d){var u,t
c=P.aZ(b,c,a.length)
if(typeof c!=="number"||Math.floor(c)!==c)H.r(H.af(c))
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a9:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.a_(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a5:function(a,b){return this.a9(a,b,0)},
q:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.af(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.O()
if(b<0)throw H.c(P.dq(b,null))
if(b>c)throw H.c(P.dq(b,null))
if(c>a.length)throw H.c(P.dq(c,null))
return a.substring(b,c)},
aa:function(a,b){return this.q(a,b,null)},
i9:function(a){return a.toLowerCase()},
A:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.M)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
am:function(a,b){var u=b-a.length
if(u<=0)return a
return this.A(" ",u)+a},
bu:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.a_(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
dR:function(a,b){return this.bu(a,b,0)},
aV:function(a,b){var u
if(typeof b!=="string")throw H.c(H.af(b))
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
H.n.prototype={
gl:function(a){return this.a.length},
h:function(a,b){return C.a.Y(this.a,b)},
$aq:function(){return[P.v]},
$ax:function(){return[P.v]},
$ai:function(){return[P.v]},
$ao:function(){return[P.v]}}
H.q.prototype={}
H.dd.prototype={
gR:function(a){return new H.bf(this,this.gl(this))},
bD:function(a,b){return this.ej(0,b)}}
H.bf.prototype={
gB:function(a){return this.d},
t:function(){var u,t=this,s=t.a,r=J.bo(s),q=r.gl(s)
if(t.b!=q)throw H.c(P.au(s))
u=t.c
if(typeof q!=="number")return H.u(q)
if(u>=q){t.d=null
return!1}t.d=r.J(s,u);++t.c
return!0}}
H.c8.prototype={
gR:function(a){return new H.h3(J.aL(this.a),this.b)},
gl:function(a){return J.ah(this.a)},
J:function(a,b){return this.b.$1(J.eS(this.a,b))},
$ai:function(a,b){return[b]}}
H.fq.prototype={$iq:1,
$aq:function(a,b){return[b]}}
H.h3.prototype={
t:function(){var u=this,t=u.b
if(t.t()){u.a=u.c.$1(t.gB(t))
return!0}u.a=null
return!1},
gB:function(a){return this.a}}
H.h4.prototype={
gl:function(a){return J.ah(this.a)},
J:function(a,b){return this.b.$1(J.eS(this.a,b))},
$aq:function(a,b){return[b]},
$add:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.ct.prototype={
gR:function(a){return new H.ja(J.aL(this.a),this.b)}}
H.ja.prototype={
t:function(){var u,t
for(u=this.a,t=this.b;u.t();)if(t.$1(u.gB(u)))return!0
return!1},
gB:function(a){var u=this.a
return u.gB(u)}}
H.d4.prototype={}
H.iM.prototype={
m:function(a,b,c){throw H.c(P.z("Cannot modify an unmodifiable list"))}}
H.dK.prototype={}
H.fb.prototype={
i:function(a){return P.kI(this)},
m:function(a,b,c){return H.mF()},
$iR:1}
H.fc.prototype={
gl:function(a){return this.a},
c3:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.c3(0,b))return
return this.cV(b)},
cV:function(a){return this.b[a]},
C:function(a,b){var u,t,s,r=this.c
for(u=r.length,t=0;t<u;++t){s=r[t]
b.$2(s,this.cV(s))}}}
H.iA.prototype={
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
H.hy.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fQ.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.iL.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.ko.prototype={
$1:function(a){if(!!J.P(a).$ibv)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:8}
H.eq.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bZ.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.cM(t==null?"unknown":t)+"'"},
gic:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.ie.prototype={}
H.i6.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cM(u)+"'"}}
H.bW.prototype={
u:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bW))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gI:function(a){var u,t=this.c
if(t==null)u=H.ch(this.a)
else u=typeof t!=="object"?J.cQ(t):H.ch(t)
return(u^H.ch(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.ci(u))+"'")}}
H.f5.prototype={
i:function(a){return this.a}}
H.hR.prototype={
i:function(a){return"RuntimeError: "+H.e(this.a)}}
H.I.prototype={
gl:function(a){return this.a},
ghD:function(a){return this.a===0},
ga2:function(a){return new H.fU(this,[H.b2(this,0)])},
gib:function(a){var u=this
return H.mW(u.ga2(u),new H.fP(u),H.b2(u,0),H.b2(u,1))},
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
return s}else return q.hB(b)},
hB:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.cX(r,s.dT(a))
t=s.dU(u,a)
if(t<0)return
return u[t].b},
m:function(a,b,c){var u,t,s=this
if(typeof b==="string"){u=s.b
s.cO(u==null?s.b=s.bU():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cO(t==null?s.c=s.bU():t,b,c)}else s.hC(b,c)},
hC:function(a,b){var u,t,s,r=this,q=r.d
if(q==null)q=r.d=r.bU()
u=r.dT(a)
t=r.cX(q,u)
if(t==null)r.bY(q,u,[r.bV(a,b)])
else{s=r.dU(t,a)
if(s>=0)t[s].b=b
else t.push(r.bV(a,b))}},
C:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.c(P.au(u))
t=t.c}},
cO:function(a,b,c){var u=this.bp(a,b)
if(u==null)this.bY(a,b,this.bV(b,c))
else u.b=c},
eT:function(){this.r=this.r+1&67108863},
bV:function(a,b){var u,t=this,s=new H.fT(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.eT()
return s},
dT:function(a){return J.cQ(a)&0x3ffffff},
dU:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.U(a[t].a,b))return t
return-1},
i:function(a){return P.kI(this)},
bp:function(a,b){return a[b]},
cX:function(a,b){return a[b]},
bY:function(a,b,c){a[b]=c},
eM:function(a,b){delete a[b]},
eI:function(a,b){return this.bp(a,b)!=null},
bU:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bY(t,u,t)
this.eM(t,u)
return t}}
H.fP.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.b2(u,1),args:[H.b2(u,0)]}}}
H.fT.prototype={}
H.fU.prototype={
gl:function(a){return this.a.a},
gR:function(a){var u=this.a,t=new H.fV(u,u.r)
t.c=u.e
return t}}
H.fV.prototype={
gB:function(a){return this.d},
t:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.au(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.k6.prototype={
$1:function(a){return this.a(a)},
$S:8}
H.k7.prototype={
$2:function(a,b){return this.a(a,b)}}
H.k8.prototype={
$1:function(a){return this.a(a)}}
H.fO.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$inb:1}
H.cd.prototype={$icd:1}
H.bh.prototype={$ibh:1}
H.dh.prototype={
gl:function(a){return a.length},
$iA:1,
$aA:function(){}}
H.ce.prototype={
h:function(a,b){H.aJ(b,a,a.length)
return a[b]},
m:function(a,b,c){H.aJ(b,a,a.length)
a[b]=c},
$iq:1,
$aq:function(){return[P.L]},
$ax:function(){return[P.L]},
$ii:1,
$ai:function(){return[P.L]},
$io:1,
$ao:function(){return[P.L]}}
H.di.prototype={
m:function(a,b,c){H.aJ(b,a,a.length)
a[b]=c},
$iq:1,
$aq:function(){return[P.v]},
$ax:function(){return[P.v]},
$ii:1,
$ai:function(){return[P.v]},
$io:1,
$ao:function(){return[P.v]}}
H.hr.prototype={
h:function(a,b){H.aJ(b,a,a.length)
return a[b]}}
H.hs.prototype={
h:function(a,b){H.aJ(b,a,a.length)
return a[b]}}
H.ht.prototype={
h:function(a,b){H.aJ(b,a,a.length)
return a[b]}}
H.hu.prototype={
h:function(a,b){H.aJ(b,a,a.length)
return a[b]}}
H.hv.prototype={
h:function(a,b){H.aJ(b,a,a.length)
return a[b]}}
H.dj.prototype={
gl:function(a){return a.length},
h:function(a,b){H.aJ(b,a,a.length)
return a[b]}}
H.cf.prototype={
gl:function(a){return a.length},
h:function(a,b){H.aJ(b,a,a.length)
return a[b]},
$icf:1,
$ibF:1}
H.cx.prototype={}
H.cy.prototype={}
H.cz.prototype={}
H.cA.prototype={}
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
P.ex.prototype={
ew:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bP(new P.jK(this,b),0),a)
else throw H.c(P.z("`setTimeout()` not found."))},
ex:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bP(new P.jJ(this,a,Date.now(),b),0),a)
else throw H.c(P.z("Periodic timer."))},
$idE:1}
P.jK.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.jJ.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.em(u,q)}s.c=r
t.d.$1(s)}}
P.bI.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.e(this.a)+")"}}
P.bJ.prototype={
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
if(t instanceof P.bI){s=t.b
if(s===2){u=q.d
if(u==null||u.length===0){q.b=null
return!1}if(0>=u.length)return H.d(u,-1)
q.a=u.pop()
continue}else{u=t.a
if(s===3)throw u
else{r=J.aL(u)
if(!!r.$ibJ){u=q.d
if(u==null)u=q.d=[]
u.push(q.a)
q.a=r.a
continue}else{q.c=r
continue}}}}else{q.b=t
return!0}}return!1}}
P.jG.prototype={
gR:function(a){return new P.bJ(this.a())}}
P.dT.prototype={}
P.dz.prototype={}
P.i9.prototype={}
P.dE.prototype={}
P.jT.prototype={}
P.k1.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dm():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u}}
P.js.prototype={
i2:function(a){var u,t,s,r=null
try{if(C.f===$.ar){a.$0()
return}P.om(r,r,this,a)}catch(s){u=H.ag(s)
t=H.kZ(s)
P.lT(r,r,this,u,t)}},
i3:function(a,b){var u,t,s,r=null
try{if(C.f===$.ar){a.$1(b)
return}P.on(r,r,this,a,b)}catch(s){u=H.ag(s)
t=H.kZ(s)
P.lT(r,r,this,u,t)}},
i4:function(a,b){return this.i3(a,b,null)},
hf:function(a){return new P.jt(this,a)},
dl:function(a,b){return new P.ju(this,a,b)}}
P.jt.prototype={
$0:function(){return this.a.i2(this.b)}}
P.ju.prototype={
$1:function(a){return this.a.i4(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jp.prototype={
gR:function(a){var u=new P.e7(this,this.r)
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
return this.bL(this.cW(u,a),a)>=0},
n:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cP(u==null?s.b=P.kQ():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cP(t==null?s.c=P.kQ():t,b)}else return s.eA(0,b)},
eA:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.kQ()
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
bI:function(a){var u,t=this,s=new P.jq(a)
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
cR:function(a){return J.cQ(a)&1073741823},
cW:function(a,b){return a[this.cR(b)]},
bL:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.U(a[t].a,b))return t
return-1}}
P.jq.prototype={}
P.e7.prototype={
gB:function(a){return this.d},
t:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.au(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fL.prototype={}
P.fW.prototype={
$2:function(a,b){this.a.m(0,a,b)},
$S:3}
P.fX.prototype={$iq:1,$ii:1,$io:1}
P.x.prototype={
gR:function(a){return new H.bf(a,this.gl(a))},
J:function(a,b){return this.h(a,b)},
C:function(a,b){var u,t=this.gl(a)
if(typeof t!=="number")return H.u(t)
u=0
for(;u<t;++u){b.$1(this.h(a,u))
if(t!==this.gl(a))throw H.c(P.au(a))}},
i8:function(a,b){var u,t,s=this,r=H.b([],[H.oF(s,a,"x",0)])
C.b.sl(r,s.gl(a))
u=0
while(!0){t=s.gl(a)
if(typeof t!=="number")return H.u(t)
if(!(u<t))break
t=s.h(a,u)
if(u>=r.length)return H.d(r,u)
r[u]=t;++u}return r},
i7:function(a){return this.i8(a,!0)},
hu:function(a,b,c,d){var u
P.aZ(b,c,this.gl(a))
for(u=b;u<c;++u)this.m(a,u,d)},
i:function(a){return P.kB(a,"[","]")}}
P.h0.prototype={}
P.h1.prototype={
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
for(u=J.aL(this.ga2(a));u.t();){t=u.gB(u)
b.$2(t,this.h(a,t))}},
gl:function(a){return J.ah(this.ga2(a))},
i:function(a){return P.kI(a)},
$iR:1}
P.jL.prototype={
m:function(a,b,c){throw H.c(P.z("Cannot modify unmodifiable map"))}}
P.h2.prototype={
h:function(a,b){return J.bU(this.a,b)},
m:function(a,b,c){J.kp(this.a,b,c)},
C:function(a,b){J.l6(this.a,b)},
gl:function(a){return J.ah(this.a)},
i:function(a){return J.a5(this.a)},
$iR:1}
P.dL.prototype={}
P.jw.prototype={
a7:function(a,b){var u
for(u=J.aL(b);u.t();)this.n(0,u.gB(u))},
i:function(a){return P.kB(this,"{","}")},
J:function(a,b){var u,t,s
P.lu(b,"index")
for(u=P.nE(this,this.r),t=0;u.t();){s=u.d
if(b===t)return s;++t}throw H.c(P.N(b,this,"index",null,t))},
$iq:1,
$ii:1}
P.e8.prototype={}
P.eD.prototype={}
P.f1.prototype={
hI:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.aZ(a0,a1,b.length)
u=$.mm()
if(typeof a1!=="number")return H.u(a1)
t=a0
s=t
r=null
q=-1
p=-1
o=0
for(;t<a1;t=n){n=t+1
m=C.a.F(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.k5(C.a.F(b,n))
j=H.k5(C.a.F(b,n+1))
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
r.a=g+H.bC(m)
s=n
continue}}throw H.c(P.V("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.a.q(b,s,a1)
f=g.length
if(q>=0)P.l9(b,p,a1,q,o,f)
else{e=C.c.bm(f-1,4)+1
if(e===1)throw H.c(P.V(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.a.aY(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.l9(b,p,a1,q,o,d)
else{e=C.c.bm(d,4)
if(e===1)throw H.c(P.V(c,b,a1))
if(e>1)b=C.a.aY(b,a1,a1,e===2?"==":"=")}return b}}
P.f2.prototype={}
P.f7.prototype={}
P.fd.prototype={}
P.fs.prototype={}
P.fI.prototype={
i:function(a){return this.a}}
P.fH.prototype={
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
if(c>b)q.a+=J.mx(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.iV.prototype={
ght:function(){return C.N}}
P.iX.prototype={
c4:function(a){var u,t,s,r=P.aZ(0,null,a.length)
if(typeof r!=="number")return r.K()
u=r-0
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.jR(t)
if(s.eO(a,0,r)!==r)s.dc(J.mt(a,r-1),0)
return new Uint8Array(t.subarray(0,H.nV(0,s.b,t.length)))}}
P.jR.prototype={
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
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.a.F(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dc(r,C.a.F(a,p)))s=p}else if(r<=2047){q=n.b
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
P.iW.prototype={
c4:function(a){var u,t,s,r,q,p,o,n,m=P.no(!1,a,0,null)
if(m!=null)return m
u=P.aZ(0,null,J.ah(a))
t=P.lV(a,0,u)
if(t>0){s=P.cl(a,0,t)
if(t===u)return s
r=new P.S(s)
q=t
p=!1}else{q=0
r=null
p=!0}if(r==null)r=new P.S("")
o=new P.jQ(!1,r)
o.c=p
o.hh(a,q,u)
if(o.e>0){H.r(P.V("Unfinished UTF-8 octet sequence",a,u))
r.a+=H.bC(65533)
o.f=o.e=o.d=0}n=r.a
return n.charCodeAt(0)==0?n:n}}
P.jQ.prototype={
hh:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=this,k="Bad UTF-8 encoding 0x",j=l.d,i=l.e,h=l.f
l.f=l.e=l.d=0
$label0$0:for(u=J.bo(a),t=l.b,s=b;!0;s=n){$label1$1:if(i>0){do{if(s===c)break $label0$0
r=u.h(a,s)
if(typeof r!=="number")return r.ad()
if((r&192)!==128){q=P.V(k+C.c.bj(r,16),a,s)
throw H.c(q)}else{j=(j<<6|r&63)>>>0;--i;++s}}while(i>0)
q=h-1
if(q<0||q>=4)return H.d(C.v,q)
if(j<=C.v[q]){q=P.V("Overlong encoding of 0x"+C.c.bj(j,16),a,s-h-1)
throw H.c(q)}if(j>1114111){q=P.V("Character outside valid Unicode range: 0x"+C.c.bj(j,16),a,s-h-1)
throw H.c(q)}if(!l.c||j!==65279)t.a+=H.bC(j)
l.c=!1}if(typeof c!=="number")return H.u(c)
q=s<c
for(;q;){p=P.lV(a,s,c)
if(p>0){l.c=!1
o=s+p
t.a+=P.cl(a,s,o)
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
P.aK.prototype={}
P.ad.prototype={
u:function(a,b){if(b==null)return!1
return b instanceof P.ad&&this.a===b.a&&!0},
aV:function(a,b){return C.c.aV(this.a,b.a)},
gI:function(a){var u=this.a
return(u^C.c.aS(u,30))&1073741823},
i:function(a){var u=this,t=P.mG(H.n7(u)),s=P.d_(H.n5(u)),r=P.d_(H.n1(u)),q=P.d_(H.n2(u)),p=P.d_(H.n4(u)),o=P.d_(H.n6(u)),n=P.mH(H.n3(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.L.prototype={}
P.b8.prototype={
u:function(a,b){if(b==null)return!1
return b instanceof P.b8&&this.a===b.a},
gI:function(a){return C.c.gI(this.a)},
aV:function(a,b){return C.c.aV(this.a,b.a)},
i:function(a){var u,t,s,r=new P.fp(),q=this.a
if(q<0)return"-"+new P.b8(0-q).i(0)
u=r.$1(C.c.a6(q,6e7)%60)
t=r.$1(C.c.a6(q,1e6)%60)
s=new P.fo().$1(q%1e6)
return""+C.c.a6(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
P.fo.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.fp.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bv.prototype={}
P.dm.prototype={
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
r=P.ky(q.b)
return t+s+": "+r}}
P.bD.prototype={
gbK:function(){return"RangeError"},
gbJ:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.fK.prototype={
gbK:function(){return"RangeError"},
gbJ:function(){var u,t=this.b
if(typeof t!=="number")return t.O()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gl:function(a){return this.f}}
P.iN.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iJ.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.ck.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fa.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.ky(u)+"."}}
P.hB.prototype={
i:function(a){return"Out of Memory"},
$ibv:1}
P.dx.prototype={
i:function(a){return"Stack Overflow"},
$ibv:1}
P.fi.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.e0.prototype={
i:function(a){return"Exception: "+this.a}}
P.fB.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.a.q(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.a.F(f,q)
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
return h+l+j+k+"\n"+C.a.A(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.e(g)+")"):h}}
P.fD.prototype={}
P.v.prototype={}
P.i.prototype={
bD:function(a,b){return new H.ct(this,b,[H.kY(this,"i",0)])},
gl:function(a){var u,t=this.gR(this)
for(u=0;t.t();)++u
return u},
gaL:function(a){var u,t=this.gR(this)
if(!t.t())throw H.c(H.kC())
u=t.gB(t)
if(t.t())throw H.c(H.mM())
return u},
J:function(a,b){var u,t,s
P.lu(b,"index")
for(u=this.gR(this),t=0;u.t();){s=u.gB(u)
if(b===t)return s;++t}throw H.c(P.N(b,this,"index",null,t))},
i:function(a){return P.mL(this,"(",")")}}
P.fM.prototype={}
P.o.prototype={$iq:1,$ii:1}
P.R.prototype={}
P.bi.prototype={
gI:function(a){return P.a2.prototype.gI.call(this,this)},
i:function(a){return"null"}}
P.ac.prototype={}
P.a2.prototype={constructor:P.a2,$ia2:1,
u:function(a,b){return this===b},
gI:function(a){return H.ch(this)},
i:function(a){return"Instance of '"+H.e(H.ci(this))+"'"},
toString:function(){return this.i(this)}}
P.h.prototype={}
P.S.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
P.iT.prototype={
$2:function(a,b){var u,t,s,r=J.cJ(b).dR(b,"=")
if(r===-1){if(b!=="")J.kp(a,P.kU(b,0,b.length,this.a,!0),"")}else if(r!==0){u=C.a.q(b,0,r)
t=C.a.aa(b,r+1)
s=this.a
J.kp(a,P.kU(u,0,u.length,s,!0),P.kU(t,0,t.length,s,!0))}return a}}
P.iP.prototype={
$2:function(a,b){throw H.c(P.V("Illegal IPv4 address, "+a,this.a,b))}}
P.iR.prototype={
$2:function(a,b){throw H.c(P.V("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.iS.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.cL(C.a.q(this.b,a,b),null,16)
if(typeof u!=="number")return u.O()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u}}
P.bK.prototype={
ge8:function(){return this.b},
gci:function(a){var u=this.c
if(u==null)return""
if(C.a.a5(u,"["))return C.a.q(u,1,u.length-1)
return u},
gby:function(a){var u=this.d
if(u==null)return P.lM(this.a)
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
s=P.kS(null,0,0,b)
return new P.bK(q,o,m,n,u,s,r.r)},
gbg:function(){var u,t=this.Q
if(t==null){t=this.f
u=P.h
u=this.Q=new P.dL(P.lF(t==null?"":t),[u,u])
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
if(!!J.P(b).$ikM)if(s.a==b.gbE())if(s.c!=null===b.gdN())if(s.b==b.ge8())if(s.gci(s)==b.gci(b))if(s.gby(s)==b.gby(b))if(s.e===b.ge1(b)){u=s.f
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
gI:function(a){var u=this.z
return u==null?this.z=C.a.gI(this.i(0)):u},
$ikM:1,
gbE:function(){return this.a},
ge1:function(a){return this.e}}
P.jM.prototype={
$1:function(a){throw H.c(P.V("Invalid port",this.a,this.b+1))}}
P.jN.prototype={
$1:function(a){return P.eE(C.X,a,C.e,!1)}}
P.jP.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.e(P.eE(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.e(P.eE(C.h,b,C.e,!0))}}}
P.jO.prototype={
$2:function(a,b){var u,t
if(b==null||typeof b==="string")this.a.$2(a,b)
else for(u=J.aL(b),t=this.a;u.t();)t.$2(a,u.gB(u))}}
P.iO.prototype={
ge7:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.d(o,0)
u=q.a
o=o[0]+1
t=C.a.bu(u,"?",o)
s=u.length
if(t>=0){r=P.cF(u,t+1,s,C.l,!1)
s=t}else r=p
return q.c=new P.ji("data",p,p,p,P.cF(u,o,s,C.z,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.d(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.jX.prototype={
$1:function(a){return new Uint8Array(96)}}
P.jW.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.d(u,a)
u=u[a]
J.mu(u,0,96,b)
return u},
$S:18}
P.jY.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.a.F(b,s)^96
if(r>=t)return H.d(a,r)
a[r]=c}}}
P.jZ.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.a.F(b,0),t=C.a.F(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.d(a,r)
a[r]=c}}}
P.jz.prototype={
gdN:function(){return this.c>0},
gdP:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.D()
t=this.e
if(typeof t!=="number")return H.u(t)
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
return P.cL(C.a.q(t.a,u+1,t.e),null,null)}if(t.gcY())return 80
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
if(t>=u.r)return C.Y
t=P.h
return new P.dL(P.lF(u.gct(u)),[t,t])},
cu:function(a,b){var u,t,s,r,q,p=this,o=null,n=p.gbE(),m=n==="file",l=p.c,k=l>0?C.a.q(p.a,p.b+3,l):"",j=p.gdP()?p.gby(p):o
l=p.c
if(l>0)u=C.a.q(p.a,l,p.d)
else u=k.length!==0||j!=null||m?"":o
l=p.a
t=C.a.q(l,p.e,p.f)
if(!m)s=u!=null&&t.length!==0
else s=!0
if(s&&!C.a.a5(t,"/"))t="/"+t
r=P.kS(o,0,0,b)
s=p.r
q=s<l.length?C.a.aa(l,s+1):o
return new P.bK(n,k,u,j,t,r,q)},
gI:function(a){var u=this.y
return u==null?this.y=C.a.gI(this.a):u},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.P(b).$ikM&&this.a===b.i(0)},
i:function(a){return this.a},
$ikM:1}
P.ji.prototype={}
W.p.prototype={}
W.eT.prototype={
gl:function(a){return a.length}}
W.eU.prototype={
i:function(a){return String(a)}}
W.eV.prototype={
i:function(a){return String(a)}}
W.br.prototype={$ibr:1}
W.bs.prototype={$ibs:1}
W.bt.prototype={
cB:function(a,b,c){if(c!=null)return a.getContext(b,P.ow(c))
return a.getContext(b)},
ea:function(a,b){return this.cB(a,b,null)},
$ibt:1}
W.b7.prototype={
gl:function(a){return a.length}}
W.fe.prototype={
gl:function(a){return a.length}}
W.H.prototype={$iH:1}
W.c_.prototype={
gl:function(a){return a.length}}
W.ff.prototype={}
W.ai.prototype={}
W.av.prototype={}
W.fg.prototype={
gl:function(a){return a.length}}
W.fh.prototype={
gl:function(a){return a.length}}
W.fk.prototype={
gl:function(a){return a.length}}
W.am.prototype={$iam:1}
W.fl.prototype={
i:function(a){return String(a)}}
W.d1.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
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
W.d2.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gaK(a))+" x "+H.e(this.gaE(a))},
u:function(a,b){var u
if(b==null)return!1
u=J.P(b)
return!!u.$ia9&&a.left===u.gbw(b)&&a.top===u.gbB(b)&&this.gaK(a)===u.gaK(b)&&this.gaE(a)===u.gaE(b)},
gI:function(a){return W.lK(C.d.gI(a.left),C.d.gI(a.top),C.d.gI(this.gaK(a)),C.d.gI(this.gaE(a)))},
gdm:function(a){return a.bottom},
gaE:function(a){return a.height},
gbw:function(a){return a.left},
gcv:function(a){return a.right},
gbB:function(a){return a.top},
gaK:function(a){return a.width},
$ia9:1,
$aa9:function(){return[P.ac]}}
W.fm.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
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
W.fn.prototype={
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
gR:function(a){var u=this.i7(this)
return new J.a6(u,u.length)},
$aq:function(){return[W.Q]},
$ax:function(){return[W.Q]},
$ai:function(){return[W.Q]},
$ao:function(){return[W.Q]}}
W.Q.prototype={
ghe:function(a){return new W.jj(a)},
gc2:function(a){return new W.jg(a,a.children)},
gdr:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.O()
if(s<0)s=-s*0
if(typeof r!=="number")return r.O()
if(r<0)r=-r*0
return new P.a9(u,t,s,r,[P.ac])},
i:function(a){return a.localName},
ak:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.lg
if(u==null){u=H.b([],[W.aV])
t=new W.dl(u)
u.push(W.lJ(null))
u.push(W.lL())
$.lg=t
d=t}else d=u
u=$.lf
if(u==null){u=new W.eF(d)
$.lf=u
c=u}else{u.a=d
c=u}}if($.aP==null){u=document
t=u.implementation.createHTMLDocument("")
$.aP=t
$.kx=t.createRange()
s=$.aP.createElement("base")
s.href=u.baseURI
$.aP.head.appendChild(s)}u=$.aP
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.aP
if(!!this.$ibs)r=u.body
else{r=u.createElement(a.tagName)
$.aP.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.b.N(C.V,a.tagName)){$.kx.selectNodeContents(r)
q=$.kx.createContextualFragment(b)}else{r.innerHTML=b
q=$.aP.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.aP.body
if(r==null?u!=null:r!==u)J.l7(r)
c.cC(q)
document.adoptNode(q)
return q},
hk:function(a,b,c){return this.ak(a,b,c,null)},
ec:function(a,b){a.textContent=null
a.appendChild(this.ak(a,b,null,null))},
$iQ:1,
ge4:function(a){return a.tagName}}
W.fr.prototype={
$1:function(a){return!!J.P(a).$iQ}}
W.k.prototype={$ik:1}
W.f.prototype={
h9:function(a,b,c,d){if(c!=null)this.eB(a,b,c,!1)},
eB:function(a,b,c,d){return a.addEventListener(b,H.bP(c,1),!1)}}
W.an.prototype={$ian:1}
W.c2.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
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
$ic2:1}
W.fw.prototype={
gl:function(a){return a.length}}
W.fA.prototype={
gl:function(a){return a.length}}
W.aw.prototype={$iaw:1}
W.fG.prototype={
gl:function(a){return a.length}}
W.c4.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
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
W.aR.prototype={$iaR:1,
gds:function(a){return a.data}}
W.bx.prototype={$ibx:1}
W.bz.prototype={$ibz:1}
W.fZ.prototype={
i:function(a){return String(a)}}
W.hk.prototype={
gl:function(a){return a.length}}
W.cb.prototype={$icb:1}
W.hl.prototype={
h:function(a,b){return P.b1(a.get(b))},
C:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b1(u.value[1]))}},
ga2:function(a){var u=H.b([],[P.h])
this.C(a,new W.hm(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.z("Not supported"))},
$aa1:function(){return[P.h,null]},
$iR:1,
$aR:function(){return[P.h,null]}}
W.hm.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hn.prototype={
h:function(a,b){return P.b1(a.get(b))},
C:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b1(u.value[1]))}},
ga2:function(a){var u=H.b([],[P.h])
this.C(a,new W.ho(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.z("Not supported"))},
$aa1:function(){return[P.h,null]},
$iR:1,
$aR:function(){return[P.h,null]}}
W.ho.prototype={
$2:function(a,b){return this.a.push(a)}}
W.az.prototype={$iaz:1}
W.hp.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.az]},
$iA:1,
$aA:function(){return[W.az]},
$ax:function(){return[W.az]},
$ii:1,
$ai:function(){return[W.az]},
$io:1,
$ao:function(){return[W.az]}}
W.aA.prototype={$iaA:1}
W.a4.prototype={
gaL:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.lx("No elements"))
if(t>1)throw H.c(P.lx("More than one element"))
return u.firstChild},
a7:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
m:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.d(t,b)
u.replaceChild(c,t[b])},
gR:function(a){var u=this.a.childNodes
return new W.d5(u,u.length)},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$aq:function(){return[W.C]},
$ax:function(){return[W.C]},
$ai:function(){return[W.C]},
$ao:function(){return[W.C]}}
W.C.prototype={
hY:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
i0:function(a,b){var u,t
try{u=a.parentNode
J.mr(u,b,a)}catch(t){H.ag(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.ei(a):u},
fS:function(a,b,c){return a.replaceChild(b,c)},
$iC:1}
W.dk.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
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
W.aB.prototype={$iaB:1,
gl:function(a){return a.length}}
W.hE.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aB]},
$iA:1,
$aA:function(){return[W.aB]},
$ax:function(){return[W.aB]},
$ii:1,
$ai:function(){return[W.aB]},
$io:1,
$ao:function(){return[W.aB]}}
W.hP.prototype={
h:function(a,b){return P.b1(a.get(b))},
C:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b1(u.value[1]))}},
ga2:function(a){var u=H.b([],[P.h])
this.C(a,new W.hQ(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.z("Not supported"))},
$aa1:function(){return[P.h,null]},
$iR:1,
$aR:function(){return[P.h,null]}}
W.hQ.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hS.prototype={
gl:function(a){return a.length}}
W.aD.prototype={$iaD:1}
W.i2.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aD]},
$iA:1,
$aA:function(){return[W.aD]},
$ax:function(){return[W.aD]},
$ii:1,
$ai:function(){return[W.aD]},
$io:1,
$ao:function(){return[W.aD]}}
W.aE.prototype={$iaE:1}
W.i3.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
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
W.aF.prototype={$iaF:1,
gl:function(a){return a.length}}
W.i7.prototype={
h:function(a,b){return a.getItem(b)},
m:function(a,b,c){a.setItem(b,c)},
C:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga2:function(a){var u=H.b([],[P.h])
this.C(a,new W.i8(u))
return u},
gl:function(a){return a.length},
$aa1:function(){return[P.h,P.h]},
$iR:1,
$aR:function(){return[P.h,P.h]}}
W.i8.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ap.prototype={$iap:1}
W.dA.prototype={
ak:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bG(a,b,c,d)
u=W.mI("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.a4(t).a7(0,new W.a4(u))
return t}}
W.ib.prototype={
ak:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bG(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.ak(u.createElement("table"),b,c,d)
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
W.ic.prototype={
ak:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bG(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.ak(u.createElement("table"),b,c,d)
u.toString
u=new W.a4(u)
s=u.gaL(u)
t.toString
s.toString
new W.a4(t).a7(0,new W.a4(s))
return t}}
W.cm.prototype={$icm:1}
W.aG.prototype={$iaG:1}
W.aq.prototype={$iaq:1}
W.ig.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
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
W.ih.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
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
W.it.prototype={
gl:function(a){return a.length}}
W.aH.prototype={$iaH:1}
W.bE.prototype={$ibE:1}
W.ix.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
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
W.iy.prototype={
gl:function(a){return a.length}}
W.bj.prototype={}
W.iU.prototype={
i:function(a){return String(a)}}
W.j9.prototype={
gl:function(a){return a.length}}
W.bm.prototype={
ghn:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.z("deltaY is not supported"))},
ghm:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.z("deltaX is not supported"))},
$ibm:1}
W.cu.prototype={
fT:function(a,b){return a.requestAnimationFrame(H.bP(b,1))},
eN:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.jh.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
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
W.dW.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
u:function(a,b){var u
if(b==null)return!1
u=J.P(b)
return!!u.$ia9&&a.left===u.gbw(b)&&a.top===u.gbB(b)&&a.width===u.gaK(b)&&a.height===u.gaE(b)},
gI:function(a){return W.lK(C.d.gI(a.left),C.d.gI(a.top),C.d.gI(a.width),C.d.gI(a.height))},
gaE:function(a){return a.height},
gaK:function(a){return a.width}}
W.jm.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aw]},
$iA:1,
$aA:function(){return[W.aw]},
$ax:function(){return[W.aw]},
$ii:1,
$ai:function(){return[W.aw]},
$io:1,
$ao:function(){return[W.aw]}}
W.ed.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
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
W.jA.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
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
W.jE.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
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
W.jf.prototype={
C:function(a,b){var u,t,s,r,q
for(u=this.ga2(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.m)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga2:function(a){var u,t,s,r=this.a.attributes,q=H.b([],[P.h])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.d(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q},
$aa1:function(){return[P.h,P.h]},
$aR:function(){return[P.h,P.h]}}
W.jj.prototype={
h:function(a,b){return this.a.getAttribute(b)},
m:function(a,b,c){this.a.setAttribute(b,c)},
gl:function(a){return this.ga2(this).length}}
W.jk.prototype={}
W.jl.prototype={
$1:function(a){return this.a.$1(a)}}
W.cv.prototype={
er:function(a){var u
if($.cw.ghD($.cw)){for(u=0;u<262;++u)$.cw.m(0,C.U[u],W.oH())
for(u=0;u<12;++u)$.cw.m(0,C.p[u],W.oI())}},
aT:function(a){return $.mn().N(0,W.c0(a))},
au:function(a,b,c){var u=$.cw.h(0,H.e(W.c0(a))+"::"+b)
if(u==null)u=$.cw.h(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$iaV:1}
W.M.prototype={
gR:function(a){return new W.d5(a,this.gl(a))}}
W.dl.prototype={
aT:function(a){return C.b.dh(this.a,new W.hx(a))},
au:function(a,b,c){return C.b.dh(this.a,new W.hw(a,b,c))},
$iaV:1}
W.hx.prototype={
$1:function(a){return a.aT(this.a)}}
W.hw.prototype={
$1:function(a){return a.au(this.a,this.b,this.c)}}
W.el.prototype={
ev:function(a,b,c,d){var u,t,s
this.a.a7(0,c)
u=b.bD(0,new W.jx())
t=b.bD(0,new W.jy())
this.b.a7(0,u)
s=this.c
s.a7(0,C.w)
s.a7(0,t)},
aT:function(a){return this.a.N(0,W.c0(a))},
au:function(a,b,c){var u=this,t=W.c0(a),s=u.c
if(s.N(0,H.e(t)+"::"+b))return u.d.hc(c)
else if(s.N(0,"*::"+b))return u.d.hc(c)
else{s=u.b
if(s.N(0,H.e(t)+"::"+b))return!0
else if(s.N(0,"*::"+b))return!0
else if(s.N(0,H.e(t)+"::*"))return!0
else if(s.N(0,"*::*"))return!0}return!1},
$iaV:1}
W.jx.prototype={
$1:function(a){return!C.b.N(C.p,a)}}
W.jy.prototype={
$1:function(a){return C.b.N(C.p,a)}}
W.jH.prototype={
au:function(a,b,c){if(this.el(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.N(0,b)
return!1}}
W.jI.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)}}
W.jF.prototype={
aT:function(a){var u=J.P(a)
if(!!u.$icj)return!1
u=!!u.$il
if(u&&W.c0(a)==="foreignObject")return!1
if(u)return!0
return!1},
au:function(a,b,c){if(b==="is"||C.a.a5(b,"on"))return!1
return this.aT(a)},
$iaV:1}
W.d5.prototype={
t:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.bU(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gB:function(a){return this.d}}
W.aV.prototype={}
W.jv.prototype={}
W.eF.prototype={
cC:function(a){new W.jS(this).$2(a,null)},
b7:function(a,b){if(b==null)J.l7(a)
else b.removeChild(a)},
fX:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.mv(a)
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
try{t=J.a5(a)}catch(r){H.ag(r)}try{s=W.c0(a)
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
t=H.b(u.slice(0),[H.b2(u,0)])
for(s=f.ga2(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.d(t,s)
r=t[s]
if(!p.a.au(a,J.my(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.e(e)+" "+r+'="'+H.e(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.P(a).$icm)p.cC(a.content)}}
W.jS.prototype={
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
W.dV.prototype={}
W.dX.prototype={}
W.dY.prototype={}
W.dZ.prototype={}
W.e_.prototype={}
W.e1.prototype={}
W.e2.prototype={}
W.e3.prototype={}
W.e4.prototype={}
W.e9.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.ee.prototype={}
W.ef.prototype={}
W.ei.prototype={}
W.ej.prototype={}
W.ek.prototype={}
W.cB.prototype={}
W.cC.prototype={}
W.em.prototype={}
W.en.prototype={}
W.er.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.cD.prototype={}
W.cE.prototype={}
W.ey.prototype={}
W.ez.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eP.prototype={}
P.jB.prototype={
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
if(!!u.$inb)throw H.c(P.iK("structured clone of RegExp"))
if(!!u.$ian)return a
if(!!u.$ibr)return a
if(!!u.$ic2)return a
if(!!u.$iaR)return a
if(!!u.$icd||!!u.$ibh||!!u.$icb)return a
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
u.C(a,new P.jC(o,p))
return o.a}if(!!u.$io){t=p.cf(a)
o=p.b
if(t>=o.length)return H.d(o,t)
q=o[t]
if(q!=null)return q
return p.hj(a,t)}if(!!u.$imP){t=p.cf(a)
u=p.b
s=u.length
if(t>=s)return H.d(u,t)
q=o.b=u[t]
if(q!=null)return q
q={}
o.b=q
if(t>=s)return H.d(u,t)
u[t]=q
p.hz(a,new P.jD(o,p))
return o.b}throw H.c(P.iK("structured clone of other type"))},
hj:function(a,b){var u,t=J.bo(a),s=t.gl(a),r=new Array(s),q=this.b
if(b>=q.length)return H.d(q,b)
q[b]=r
if(typeof s!=="number")return H.u(s)
u=0
for(;u<s;++u){q=this.bl(t.h(a,u))
if(u>=r.length)return H.d(r,u)
r[u]=q}return r}}
P.jC.prototype={
$2:function(a,b){this.a.a[a]=this.b.bl(b)},
$S:3}
P.jD.prototype={
$2:function(a,b){this.a.b[a]=this.b.bl(b)},
$S:3}
P.eC.prototype={$iaR:1,
gds:function(a){return this.a}}
P.k2.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.eu.prototype={
hz:function(a,b){var u,t,s,r
for(u=Object.keys(a),t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,a[r])}}}
P.fx.prototype={
gb4:function(){var u=this.b,t=H.kY(u,"x",0)
return new H.c8(new H.ct(u,new P.fy(),[t]),new P.fz(),[t,W.Q])},
C:function(a,b){C.b.C(P.fY(this.gb4(),!1,W.Q),b)},
m:function(a,b,c){var u=this.gb4()
J.mw(u.b.$1(J.eS(u.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.ah(this.gb4().a)},
h:function(a,b){var u=this.gb4()
return u.b.$1(J.eS(u.a,b))},
gR:function(a){var u=P.fY(this.gb4(),!1,W.Q)
return new J.a6(u,u.length)},
$aq:function(){return[W.Q]},
$ax:function(){return[W.Q]},
$ai:function(){return[W.Q]},
$ao:function(){return[W.Q]}}
P.fy.prototype={
$1:function(a){return!!J.P(a).$iQ}}
P.fz.prototype={
$1:function(a){return H.j(a,"$iQ")}}
P.jr.prototype={
gcv:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.u(t)
return u+t},
gdm:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.u(t)
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
if(typeof r!=="number")return H.u(r)
if(t+r===u.gcv(b)){t=q.d
if(typeof s!=="number")return s.D()
if(typeof t!=="number")return H.u(t)
u=s+t===u.gdm(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gI:function(a){var u=this,t=u.a,s=J.cQ(t),r=u.b,q=J.cQ(r),p=u.c
if(typeof t!=="number")return t.D()
if(typeof p!=="number")return H.u(p)
p=C.c.gI(t+p)
t=u.d
if(typeof r!=="number")return r.D()
if(typeof t!=="number")return H.u(t)
t=C.c.gI(r+t)
return P.nD(P.jo(P.jo(P.jo(P.jo(0,s),q),p),t))}}
P.a9.prototype={
gbw:function(a){return this.a},
gbB:function(a){return this.b},
gaK:function(a){return this.c},
gaE:function(a){return this.d}}
P.aS.prototype={$iaS:1}
P.fS.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.aS]},
$ax:function(){return[P.aS]},
$ii:1,
$ai:function(){return[P.aS]},
$io:1,
$ao:function(){return[P.aS]}}
P.aW.prototype={$iaW:1}
P.hz.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.aW]},
$ax:function(){return[P.aW]},
$ii:1,
$ai:function(){return[P.aW]},
$io:1,
$ao:function(){return[P.aW]}}
P.hH.prototype={
gl:function(a){return a.length}}
P.cj.prototype={$icj:1}
P.ia.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.h]},
$ax:function(){return[P.h]},
$ii:1,
$ai:function(){return[P.h]},
$io:1,
$ao:function(){return[P.h]}}
P.l.prototype={
gc2:function(a){return new P.fx(a,new W.a4(a))},
ak:function(a,b,c,d){var u,t,s,r,q,p=H.b([],[W.aV])
p.push(W.lJ(null))
p.push(W.lL())
p.push(new W.jF())
c=new W.eF(new W.dl(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.r).hk(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.a4(s)
q=p.gaL(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$il:1}
P.b_.prototype={$ib_:1}
P.iz.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.b_]},
$ax:function(){return[P.b_]},
$ii:1,
$ai:function(){return[P.b_]},
$io:1,
$ao:function(){return[P.b_]}}
P.e5.prototype={}
P.e6.prototype={}
P.eg.prototype={}
P.eh.prototype={}
P.es.prototype={}
P.et.prototype={}
P.eA.prototype={}
P.eB.prototype={}
P.bF.prototype={$iq:1,
$aq:function(){return[P.v]},
$ii:1,
$ai:function(){return[P.v]},
$io:1,
$ao:function(){return[P.v]}}
P.eX.prototype={
gl:function(a){return a.length}}
P.eY.prototype={
h:function(a,b){return P.b1(a.get(b))},
C:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b1(u.value[1]))}},
ga2:function(a){var u=H.b([],[P.h])
this.C(a,new P.eZ(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.z("Not supported"))},
$aa1:function(){return[P.h,null]},
$iR:1,
$aR:function(){return[P.h,null]}}
P.eZ.prototype={
$2:function(a,b){return this.a.push(a)}}
P.f_.prototype={
gl:function(a){return a.length}}
P.bq.prototype={}
P.hA.prototype={
gl:function(a){return a.length}}
P.dU.prototype={}
P.ds.prototype={
e5:function(a,b,c,d,e,f,g){var u,t=J.P(g)
if(!!t.$iaR)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.ox(g))
return}if(!!t.$ibx)t=!0
else t=!1
if(t){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.cR("Incorrect number or type of arguments"))}}
P.i5.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return P.b1(a.item(b))},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[[P.R,,,]]},
$ax:function(){return[[P.R,,,]]},
$ii:1,
$ai:function(){return[[P.R,,,]]},
$io:1,
$ao:function(){return[[P.R,,,]]}}
P.eo.prototype={}
P.ep.prototype={}
K.aM.prototype={
aF:function(a,b){return!0},
i:function(a){return"all"}}
K.d6.prototype={
aF:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)if(u[s].aF(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.m)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s}}
K.bg.prototype={}
K.a8.prototype={
aF:function(a,b){return!this.eh(0,b)},
i:function(a){return"!["+this.cG(0)+"]"}}
K.hK.prototype={
aF:function(a,b){if(typeof b!=="number")return H.u(b)
return this.a<=b&&this.b>=b},
i:function(a){var u=H.bC(this.a),t=H.bC(this.b)
return u+".."+t}}
K.hT.prototype={
ep:function(a){var u,t,s,r
if(a.a.length<=0)throw H.c(P.w("May not create a Set with zero characters."))
u=P.v
t=new H.I([u,P.aK])
for(s=new H.bf(a,a.gl(a));s.t();)t.m(0,s.d,!0)
r=P.fY(t.ga2(t),!0,u)
C.b.ef(r)
this.a=r},
aF:function(a,b){return C.b.N(this.a,b)},
i:function(a){return P.cl(this.a,0,null)}}
L.dy.prototype={
j:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new L.dI(this.a.k(0,b))
r.a=H.b([],[K.bg])
r.c=!1
this.c.push(r)
return r},
hv:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
if(r.aF(0,a))return r}return},
i:function(a){return this.b},
d9:function(){var u,t,s,r,q,p=this,o="("+p.b+")",n=p.d
if(n!=null){n=n.b
o+=" => ["+n+"]"
u=p.a
if(u.c.N(0,n))o+=" (consume)"
for(n=p.d.c,n=n.ga2(n),n=n.gR(n);n.t();){t=n.gB(n)
o+="\n"
s=p.d.c.h(0,t)
t=o+("  -- "+H.e(t)+" => ["+H.e(s)+"]")
o=u.c.N(0,s)?t+" (consume)":t}}for(n=p.c,u=n.length,r=0;r<n.length;n.length===u||(0,H.m)(n),++r){q=n[r]
o=o+"\n"+("  -- "+q.i(0))}return o.charCodeAt(0)==0?o:o}}
L.dF.prototype={
i:function(a){var u=H.l3(this.b,"\n","\\n"),t=H.l3(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
L.dG.prototype={
aH:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.m)(c),++t){s=c[t]
this.c.m(0,s,b)}},
i:function(a){return this.b}}
L.iu.prototype={
k:function(a,b){var u=this.a.h(0,b)
if(u==null){u=new L.dy(this,b)
u.c=H.b([],[L.dI])
this.a.m(0,b,u)}return u},
S:function(a){var u,t=this.b.h(0,a)
if(t==null){t=new L.dG(a)
u=P.h
t.c=new H.I([u,u])
this.b.m(0,a,t)}return t},
cw:function(a){return this.ia(a)},
ia:function(a){var u=this
return P.o_(function(){var t=a
var s=0,r=1,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
return function $async$cw(b,a0){if(b===1){q=a0
s=r}while(true)switch(s){case 0:g=u.d
f=[P.v]
e=H.b([],f)
d=H.b([],f)
c=H.b([],f)
p=null,o=0,n=0,m=0
case 2:if(!!0){s=3
break}if(c.length!==0)l=C.b.hZ(c,0)
else{if(!t.t()){s=3
break}l=t.d}d.push(l);++o
k=g.hv(l)
s=k==null?4:6
break
case 4:if(p==null){j=P.cl(d,0,null)
throw H.c(P.w("Untokenizable string [state: "+g.b+", index "+o+']: "'+j+'"'))}if(!!d.fixed$length)H.r(P.z("removeRange"))
P.aZ(0,m,d.length)
d.splice(0,m-0)
C.b.a7(c,d)
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
case 12:case 11:return P.nB()
case 1:return P.nC(q)}}},L.dF)},
i:function(a){var u,t=new P.S(""),s=this.d
if(s!=null)t.a=s.d9()+"\n"
for(s=this.a,s=s.gib(s),s=s.gR(s);s.t();){u=s.gB(s)
if(u!=this.d)t.a+=u.d9()+"\n"}s=t.a
return s.charCodeAt(0)==0?s:s}}
L.dI.prototype={
i:function(a){return this.b.b+": "+this.cG(0)}}
O.aN.prototype={
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
J:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
n:function(a,b){var u,t,s=this,r=[H.kY(s,"aN",0)]
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
O.ca.prototype={
gl:function(a){return this.a.length},
gp:function(){var u=this.b
return u==null?this.b=D.E():u},
aM:function(){var u=this.b
if(u!=null)u.E(null)},
ga3:function(a){var u=this.a
if(u.length>0)return C.b.gaw(u)
else return V.bA()},
bA:function(a){var u=this.a
if(a==null)u.push(V.bA())
else u.push(a)
this.aM()},
aG:function(){var u=this.a
if(u.length>0){u.pop()
this.aM()}}}
E.f3.prototype={}
E.aQ.prototype={
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
if(u!=null)u.E(a)},
a8:function(){return this.bx(null)},
e_:function(a){this.e=null
this.bx(a)},
hO:function(){return this.e_(null)},
dY:function(a){this.bx(a)},
hL:function(){return this.dY(null)},
hK:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gdX(),s=[{func:1,ret:-1,args:[D.Y]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bw()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.a8()},
hN:function(a,b){var u,t
for(u=b.gR(b),t=this.gdX();u.t();)u.gB(u).gp().V(0,t)
this.a8()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.hL.prototype={
eo:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.ad(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.ca()
t=[V.aT]
u.a=H.b([],t)
u.gp().n(0,new E.hM(s))
s.cy=u
u=new O.ca()
u.a=H.b([],t)
u.gp().n(0,new E.hN(s))
s.db=u
u=new O.ca()
u.a=H.b([],t)
u.gp().n(0,new E.hO(s))
s.dx=u
u=H.b([],[O.dB])
s.dy=u
u.push(null)
s.fr=new H.I([P.h,A.dt])},
ghX:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga3(s)
u=t.db
u=t.z=s.A(0,u.ga3(u))
s=u}return s},
cs:function(a){var u=this.dy
u.push(a==null?(u&&C.b).gaw(u):a)},
cr:function(){var u=this.dy
if(u.length>1)u.pop()},
dg:function(a){var u=a.b
if(u.length===0)throw H.c(P.w("May not cache a shader with no name."))
if(this.fr.c3(0,u))throw H.c(P.w('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.m(0,u,a)}}
E.hM.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.hN.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.hO.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.dD.prototype={
cN:function(a){this.e3()},
cM:function(){return this.cN(null)},
ghA:function(){var u,t=this,s=Date.now(),r=C.c.a6(P.le(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.ad(s,!1)
return u/r},
d3:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.A()
if(typeof r!=="number")return H.u(r)
u=C.d.cg(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.A()
t=C.d.cg(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.lA(C.n,s.gi1())}},
e3:function(){if(!this.cx){this.cx=!0
var u=window
C.E.eN(u)
C.E.fT(u,W.lW(new E.is(this),P.ac))}},
i_:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.d3()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ad(r,!1)
s.y=P.le(r-s.r.a).a*0.000001
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
if(s!=null)s.E(null)}catch(q){u=H.ag(q)
t=H.kZ(q)
P.l2("Error: "+H.e(u))
P.l2("Stack: "+H.e(t))
throw H.c(u)}}}
E.is.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.i_()}}}
Z.dR.prototype={}
Z.cU.prototype={
a0:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ag(s)
t=P.w('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.e(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.dS.prototype={}
Z.bY.prototype={
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
Z.by.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.ci(this.c))+"'")+"]"}}
Z.b0.prototype={
gcF:function(a){var u=this.a,t=(u&$.as().a)!==0?3:0
if((u&$.b5().a)!==0)t+=3
if((u&$.b4().a)!==0)t+=3
if((u&$.b6().a)!==0)t+=2
if((u&$.bp().a)!==0)t+=3
if((u&$.cN().a)!==0)t+=3
if((u&$.cO().a)!==0)t+=4
if((u&$.bT().a)!==0)++t
return(u&$.b3().a)!==0?t+4:t},
hd:function(a){var u,t=$.as(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.b5()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b4()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b6()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bp()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cN()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cO()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bT()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b3()
if((s&t.a)!==0)if(u===a)return t
return $.ml()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b0))return!1
return this.a===b.a},
i:function(a){var u=H.b([],[P.h]),t=this.a
if((t&$.as().a)!==0)u.push("Pos")
if((t&$.b5().a)!==0)u.push("Norm")
if((t&$.b4().a)!==0)u.push("Binm")
if((t&$.b6().a)!==0)u.push("Txt2D")
if((t&$.bp().a)!==0)u.push("TxtCube")
if((t&$.cN().a)!==0)u.push("Clr3")
if((t&$.cO().a)!==0)u.push("Clr4")
if((t&$.bT().a)!==0)u.push("Weight")
if((t&$.b3().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.b.j(u,"|")}}
D.f6.prototype={}
D.bw.prototype={
n:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.Y]}]):u).push(b)},
V:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.b.N(s,b)
if(s===!0){s=t.a
u=(s&&C.b).V(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.b.N(s,b)
if(s===!0){s=t.b
u=(s&&C.b).V(s,b)||u}return u},
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
return!0}if(!t)C.b.C(P.fY(u,!0,{func:1,ret:-1,args:[D.Y]}),new D.fu(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.Y]}])
C.b.C(u,new D.fv(q))}return!0},
dv:function(){return this.E(null)},
aI:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.E(u)}}}}
D.fu.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.fv.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.Y.prototype={}
D.ba.prototype={}
D.bb.prototype={}
D.B.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cV.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cV))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.db.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.db))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.fR.prototype={
hT:function(a){this.c=a.b
this.d.n(0,a.a)
return!1},
hP:function(a){this.c=a.b
this.d.V(0,a.a)
return!1}}
X.de.prototype={}
X.h_.prototype={
b3:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.A()
u=b.b
t=q.ch
if(typeof u!=="number")return u.A()
s=new V.a3(o.a+n*m,o.b+u*t)
t=q.a.gaU()
r=new X.aU(a,V.aX(),q.x,t,s)
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
u.E(this.b3(a,b))
return!0},
hU:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaU()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.A()
q=a.b
p=o.cy
if(typeof q!=="number")return q.A()
t=new X.cc(new V.J(s*r,q*p),u,t)
t.b=!0
n.E(t)
return!0},
fm:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.de(c,r.a.gaU(),b)
s.b=!0
t.E(s)
r.y=new P.ad(u,!1)
r.x=V.aX()}}
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
X.aU.prototype={}
X.hq.prototype={
bM:function(a,b,c){var u=this,t=new P.ad(Date.now(),!1),s=u.a.gaU(),r=new X.aU(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cq:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.E(this.bM(a,b,!0))
return!0},
bf:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.eb()
if(typeof t!=="number")return t.ad()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.E(u.bM(a,b,!0))
return!0},
be:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.bM(a,b,!1))
return!0},
hV:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaU()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.A()
r=a.b
q=p.ch
if(typeof r!=="number")return r.A()
u=new X.cc(new V.J(t*s,r*q),u,b)
u.b=!0
o.E(u)
return!0},
gdu:function(){var u=this.b
return u==null?this.b=D.E():u},
gcz:function(){var u=this.c
return u==null?this.c=D.E():u},
gdW:function(){var u=this.d
return u==null?this.d=D.E():u}}
X.cc.prototype={}
X.hG.prototype={}
X.dH.prototype={}
X.iw.prototype={
b3:function(a,b){var u=this,t=new P.ad(Date.now(),!1),s=a.length>0?a[0]:V.aX(),r=u.a.gaU(),q=new X.dH(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
hS:function(a){var u=this.b
if(u==null)return!1
u.E(this.b3(a,!0))
return!0},
hQ:function(a){var u=this.c
if(u==null)return!1
u.E(this.b3(a,!0))
return!0},
hR:function(a){var u=this.d
if(u==null)return!1
u.E(this.b3(a,!1))
return!0}}
X.dM.prototype={
gaU:function(){var u=this.a,t=C.i.gdr(u).c
t.toString
u=C.i.gdr(u).d
u.toString
return V.lv(0,0,t,u)},
cT:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.db(u,new X.aj(t,a.altKey,a.shiftKey))},
aR:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.aj(t,a.altKey,a.shiftKey)},
bZ:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.aj(t,a.altKey,a.shiftKey)},
aA:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.K()
u=t.top
if(typeof r!=="number")return r.K()
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
return new X.cV(u,new X.aj(t,a.altKey,a.shiftKey))},
bN:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
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
fa:function(a){if(this.f&&this.bN(a))a.preventDefault()},
fk:function(a){var u
if(!this.f)return
u=this.cT(a)
this.b.hT(u)},
fi:function(a){var u
if(!this.f)return
u=this.cT(a)
this.b.hP(u)},
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
u=new V.J((a&&C.D).ghm(a),C.D.ghn(a)).w(0,180)
if(s.x){if(s.d.hU(u))a.preventDefault()
return}if(s.r)return
t=s.aA(a)
if(s.c.hV(u,t))a.preventDefault()},
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
if(t.e.hS(u))a.preventDefault()},
fL:function(a){var u
this.bZ(a)
u=this.bW(a)
if(this.e.hQ(u))a.preventDefault()},
fN:function(a){var u
this.bZ(a)
u=this.bW(a)
if(this.e.hR(u))a.preventDefault()}}
D.f0.prototype={$ia7:1}
D.bu.prototype={
ax:function(a){var u=this.r
if(u!=null)u.E(a)},
eu:function(){return this.ax(null)},
$ia7:1}
D.a7.prototype={}
D.dc.prototype={
ax:function(a){var u=this.y
if(u!=null)u.E(a)},
d0:function(a){var u=this.z
if(u!=null)u.E(a)},
fl:function(){return this.d0(null)},
fB:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.m)(a),++t){s=a[t]
if(s==null||this.eH(s))return!1}return!0},
eZ:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gd_(),s=[{func:1,ret:-1,args:[D.Y]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q instanceof D.bu)this.f.push(q)
p=q.r
if(p==null){p=new D.bw()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}u=new D.ba()
u.b=!0
this.ax(u)},
fF:function(a,b){var u,t,s
for(u=b.gR(b),t=this.gd_();u.t();){s=u.gB(u)
C.b.V(this.e,s)
s.gp().V(0,t)}u=new D.bb()
u.b=!0
this.ax(u)},
eH:function(a){var u=C.b.N(this.f,a)
return u},
$ai:function(){return[D.a7]},
$aaN:function(){return[D.a7]}}
D.hF.prototype={$ia7:1}
D.i4.prototype={$ia7:1}
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
V.aO.prototype={
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aO))return!1
u=b.a
t=$.F().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.K(u.a,3,0)+", "+V.K(u.b,3,0)+", "+V.K(u.c,3,0)+", "+V.K(u.d,3,0)+"]"}}
V.ft.prototype={}
V.dg.prototype={
ac:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.L])
return t},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dg))return!1
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
i:function(a){var u,t,s,r,q=this,p=[P.L],o=V.bR(H.b([q.a,q.d,q.r],p),3,0),n=V.bR(H.b([q.b,q.e,q.x],p),3,0),m=V.bR(H.b([q.c,q.f,q.y],p),3,0)
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
ac:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.L])
return t},
cj:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.F().a)return V.bA()
u=1/b1
t=-n
s=-a0
return V.ay((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
A:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.ay(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bC:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.D(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
bk:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.Z(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aT))return!1
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
G:function(a){var u,t,s,r,q,p=this,o=[P.L],n=V.bR(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.bR(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.bR(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.bR(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
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
P:function(){return this.G("")}}
V.a3.prototype={
K:function(a,b){return new V.a3(this.a-b.a,this.b-b.b)},
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
V.Z.prototype={
K:function(a,b){return new V.Z(this.a-b.a,this.b-b.b,this.c-b.c)},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.Z))return!1
u=b.a
t=$.F().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}}
V.aY.prototype={
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aY))return!1
u=b.a
t=$.F().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.K(u.a,3,0)+", "+V.K(u.b,3,0)+", "+V.K(u.c,3,0)+", "+V.K(u.d,3,0)+"]"}}
V.dr.prototype={
gag:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dr))return!1
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
ck:function(a){return Math.sqrt(this.H(this))},
H:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.A()
if(typeof r!=="number")return H.u(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.u(t)
return s*r+u*t},
A:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.A()
u=this.b
if(typeof u!=="number")return u.A()
return new V.J(t*b,u*b)},
w:function(a,b){var u,t
if(Math.abs(b-0)<$.F().a){u=$.lG
return u==null?$.lG=new V.J(0,0):u}u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
return new V.J(u/b,t/b)},
u:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.J))return!1
u=b.a
t=this.a
s=$.F()
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
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"}}
V.D.prototype={
ck:function(a){return Math.sqrt(this.H(this))},
H:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cl:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.D(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
bc:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.D(u*t-s*r,s*q-p*t,p*r-u*q)},
D:function(a,b){return new V.D(this.a+b.a,this.b+b.b,this.c+b.c)},
U:function(a){return new V.D(-this.a,-this.b,-this.c)},
w:function(a,b){if(Math.abs(b-0)<$.F().a)return V.dQ()
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
U.f9.prototype={
bH:function(a){var u=V.oY(a,this.c,this.b)
return u},
gp:function(){var u=this.y
return u==null?this.y=D.E():u},
T:function(a){var u=this.y
if(u!=null)u.E(a)},
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
U.cY.prototype={
gp:function(){var u=this.b
return u==null?this.b=D.E():u},
aZ:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cY))return!1
return J.U(this.a,b.a)},
i:function(a){return"Constant: "+this.a.G("          ")}}
U.c3.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.E():u},
T:function(a){var u=this.e
if(u!=null)u.E(a)},
ab:function(){return this.T(null)},
eX:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaN(),s=[{func:1,ret:-1,args:[D.Y]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.gp()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.ba()
u.b=!0
this.T(u)},
fD:function(a,b){var u,t
for(u=b.gR(b),t=this.gaN();u.t();)u.gB(u).gp().V(0,t)
u=new D.bb()
u.b=!0
this.T(u)},
aZ:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.O()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.a6(r,r.length),u=null;r.t();){q=r.d
if(q!=null){t=q.aZ(0,b,c)
if(t!=null)u=u==null?t:t.A(0,u)}}s.f=u==null?V.bA():u
r=s.e
if(r!=null)r.aI(0)}return s.f},
u:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.c3))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.d(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.d(r,t)
if(!J.U(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ai:function(){return[U.ae]},
$aaN:function(){return[U.ae]},
$iae:1}
U.ae.prototype={}
U.dN.prototype={
gp:function(){var u=this.cy
return u==null?this.cy=D.E():u},
T:function(a){var u=this.cy
if(u!=null)u.E(a)},
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
H.j(a,"$iaU")
if(!n.y)return
if(n.x){u=a.d.K(0,a.y)
u=new V.J(u.a,u.b)
u=u.H(u)
t=n.r
if(typeof t!=="number")return H.u(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.K(0,a.y)
u=new V.J(t.a,t.b).A(0,2).w(0,u.gag())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.A()
s=n.e
if(typeof s!=="number")return H.u(s)
t.sW(u*10*s)}else{u=a.c
t=a.d
s=t.K(0,a.y)
r=new V.J(s.a,s.b).A(0,2).w(0,u.gag())
s=n.b
q=r.a
if(typeof q!=="number")return q.U()
p=n.e
if(typeof p!=="number")return H.u(p)
o=n.z
if(typeof o!=="number")return H.u(o)
s.saf(0,-q*p+o)
n.b.sW(0)
t=t.K(0,a.z)
n.Q=new V.J(t.a,t.b).A(0,2).w(0,u.gag())}n.ab()},
bT:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.H(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.A()
s=r.e
if(typeof s!=="number")return H.u(s)
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
r.cx=V.ay(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$iae:1}
U.dO.prototype={
gp:function(){var u=this.fx
return u==null?this.fx=D.E():u},
T:function(a){var u=this.fx
if(u!=null)u.E(a)},
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
H.j(a,"$iaU")
if(!J.U(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bR:function(a){var u,t,s,r,q,p,o,n=this
H.j(a,"$iaU")
if(!n.cx)return
if(n.ch){u=a.d.K(0,a.y)
u=new V.J(u.a,u.b)
u=u.H(u)
t=n.Q
if(typeof t!=="number")return H.u(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.K(0,a.y)
u=n.at(new V.J(t.a,t.b).A(0,2).w(0,u.gag()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.U()
s=n.y
if(typeof s!=="number")return H.u(s)
t.sW(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.U()
t=n.x
if(typeof t!=="number")return H.u(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.K(0,a.y)
r=n.at(new V.J(s.a,s.b).A(0,2).w(0,u.gag()))
s=n.c
q=r.a
if(typeof q!=="number")return q.U()
p=n.y
if(typeof p!=="number")return H.u(p)
o=n.cy
if(typeof o!=="number")return H.u(o)
s.saf(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.U()
q=n.x
if(typeof q!=="number")return H.u(q)
s=n.db
if(typeof s!=="number")return H.u(s)
o.saf(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.K(0,a.z)
n.dx=n.at(new V.J(t.a,t.b).A(0,2).w(0,u.gag()))}n.ab()},
bT:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.H(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.U()
s=r.y
if(typeof s!=="number")return H.u(s)
u.sW(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.U()
u=r.x
if(typeof u!=="number")return H.u(u)
s.sW(-t*10*u)
r.ab()}},
eQ:function(a){var u=this
if(H.j(a,"$ide").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
eS:function(a){var u,t,s,r,q,p,o,n=this
H.j(a,"$iaU")
if(!J.U(n.d,a.x.b))return
u=a.c
t=a.d
s=t.K(0,a.y)
r=n.at(new V.J(s.a,s.b).A(0,2).w(0,u.gag()))
s=n.c
q=r.a
if(typeof q!=="number")return q.U()
p=n.y
if(typeof p!=="number")return H.u(p)
o=n.cy
if(typeof o!=="number")return H.u(o)
s.saf(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.U()
q=n.x
if(typeof q!=="number")return H.u(q)
s=n.db
if(typeof s!=="number")return H.u(s)
o.saf(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.K(0,a.z)
n.dx=n.at(new V.J(t.a,t.b).A(0,2).w(0,u.gag()))
n.ab()},
h7:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
h5:function(a){var u,t,s,r,q,p,o,n=this
H.j(a,"$idH")
if(!n.cx)return
if(n.ch){u=a.d.K(0,a.y)
u=new V.J(u.a,u.b)
u=u.H(u)
t=n.Q
if(typeof t!=="number")return H.u(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.K(0,a.y)
u=n.at(new V.J(t.a,t.b).A(0,2).w(0,u.gag()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.U()
s=n.y
if(typeof s!=="number")return H.u(s)
t.sW(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.U()
t=n.x
if(typeof t!=="number")return H.u(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.K(0,a.y)
r=n.at(new V.J(s.a,s.b).A(0,2).w(0,u.gag()))
s=n.c
q=r.a
if(typeof q!=="number")return q.U()
p=n.y
if(typeof p!=="number")return H.u(p)
o=n.cy
if(typeof o!=="number")return H.u(o)
s.saf(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.U()
q=n.x
if(typeof q!=="number")return H.u(q)
s=n.db
if(typeof s!=="number")return H.u(s)
o.saf(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.K(0,a.z)
n.dx=n.at(new V.J(t.a,t.b).A(0,2).w(0,u.gag()))}n.ab()},
h3:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.H(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.U()
s=r.y
if(typeof s!=="number")return H.u(s)
u.sW(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.U()
u=r.x
if(typeof u!=="number")return H.u(u)
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
q=V.ay(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.A(0,V.ay(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iae:1}
U.dP.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.E():u},
T:function(a){var u=this.r
if(u!=null)u.E(a)},
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
H.j(a,"$icc")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.A()
r=u+t*s
if(u!==r){q.d=r
u=new D.B("zoom",u,r)
u.b=!0
q.T(u)}},
aZ:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.ay(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$iae:1}
M.cX.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.E():u},
a_:function(a){var u=this.r
if(u!=null)u.E(a)},
b2:function(){return this.a_(null)},
fH:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gZ(),s=[{func:1,ret:-1,args:[D.Y]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.gp()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.ba()
u.b=!0
this.a_(u)},
fJ:function(a,b){var u,t
for(u=b.gR(b),t=this.gZ();u.t();)u.gB(u).gp().V(0,t)
u=new D.bb()
u.b=!0
this.a_(u)},
ah:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.a6(u,u.length);u.t();){t=u.d
if(t!=null)t.ah(a)}s.f=!1},
$ai:function(){return[M.ao]},
$aaN:function(){return[M.ao]},
$iao:1}
M.cZ.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.E():u},
a_:function(a){var u=this.r
if(u!=null)u.E(a)},
b2:function(){return this.a_(null)},
sbb:function(a){var u,t,s=this
if(a==null)a=new X.fJ()
u=s.b
if(u!==a){if(u!=null)u.gp().V(0,s.gZ())
t=s.b
s.b=a
a.gp().n(0,s.gZ())
u=new D.B("camera",t,s.b)
u.b=!0
s.a_(u)}},
sbh:function(a,b){var u,t,s=this
if(b==null)b=X.kz(null)
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
M.d3.prototype={
a_:function(a){var u=this.y
if(u!=null)u.E(a)},
b2:function(){return this.a_(null)},
f6:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gZ(),s=[{func:1,ret:-1,args:[D.Y]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bw()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.ba()
u.b=!0
this.a_(u)},
f8:function(a,b){var u,t
for(u=b.gR(b),t=this.gZ();u.t();)u.gB(u).gp().V(0,t)
u=new D.bb()
u.b=!0
this.a_(u)},
sbb:function(a){var u,t,s=this
if(a==null)a=X.lo(null)
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
A.cS.prototype={}
A.eW.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hs:function(){var u,t,s,r
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
A.h5.prototype={
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
A.oe(c0,u)
A.og(c0,u)
A.of(c0,u)
A.oi(c0,u)
A.oj(c0,u)
A.oh(c0,u)
A.ok(c0,u)
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
b5.dS(0,s.charCodeAt(0)==0?s:s,A.od(b5.z))
b5.Q=b5.x.h(0,"posAttr")
b5.cx=b5.x.h(0,"normAttr")
b5.ch=b5.x.h(0,"binmAttr")
b5.cy=b5.x.h(0,"txt2DAttr")
b5.db=b5.x.h(0,"txtCubeAttr")
b5.dx=b5.x.h(0,"bendAttr")
if(c0.dy)b5.id=H.j(b5.y.L(0,"invViewMat"),"$iaa")
if(t)b5.dy=H.j(b5.y.L(0,"objMat"),"$iaa")
if(r)b5.fr=H.j(b5.y.L(0,"viewObjMat"),"$iaa")
b5.fy=H.j(b5.y.L(0,"projViewObjMat"),"$iaa")
if(c0.go)b5.fx=H.j(b5.y.L(0,"viewMat"),"$iaa")
if(c0.x1)b5.k1=H.j(b5.y.L(0,"txt2DMat"),"$icq")
if(c0.x2)b5.k2=H.j(b5.y.L(0,"txtCubeMat"),"$iaa")
if(c0.y1)b5.k3=H.j(b5.y.L(0,"colorMat"),"$iaa")
b5.r1=H.b([],[A.aa])
t=c0.aW
if(t>0){b5.k4=b5.y.L(0,"bendMatCount")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.h(0,q)
if(m==null)H.r(P.w(b7+q+b8))
s.push(H.j(m,"$iaa"))}}t=c0.a
if(t.a)b5.r2=H.j(b5.y.L(0,"emissionClr"),"$iG")
if(t.b)b5.rx=H.j(b5.y.L(0,"emissionTxt"),"$ia0")
t=c0.b
if(t.a)b5.x1=H.j(b5.y.L(0,"ambientClr"),"$iG")
if(t.b)b5.x2=H.j(b5.y.L(0,"ambientTxt"),"$ia0")
t=c0.c
if(t.a)b5.y2=H.j(b5.y.L(0,"diffuseClr"),"$iG")
if(t.b)b5.aW=H.j(b5.y.L(0,"diffuseTxt"),"$ia0")
t=c0.d
if(t.a)b5.bt=H.j(b5.y.L(0,"invDiffuseClr"),"$iG")
if(t.b)b5.dz=H.j(b5.y.L(0,"invDiffuseTxt"),"$ia0")
t=c0.e
s=t.a
if(s||t.b||!1){b5.dC=H.j(b5.y.L(0,"shininess"),"$iT")
if(s)b5.dA=H.j(b5.y.L(0,"specularClr"),"$iG")
if(t.b)b5.dB=H.j(b5.y.L(0,"specularTxt"),"$ia0")}if(c0.f.b)b5.dD=H.j(b5.y.L(0,"bumpTxt"),"$ia0")
if(c0.db){b5.dE=H.j(b5.y.L(0,"envSampler"),"$ibl")
t=c0.r
if(t.a)b5.dF=H.j(b5.y.L(0,"reflectClr"),"$iG")
if(t.b)b5.dG=H.j(b5.y.L(0,"reflectTxt"),"$ia0")
t=c0.x
s=t.a
if(s||t.b||!1){b5.dH=H.j(b5.y.L(0,"refraction"),"$iT")
if(s)b5.dI=H.j(b5.y.L(0,"refractClr"),"$iG")
if(t.b)b5.dJ=H.j(b5.y.L(0,"refractTxt"),"$ia0")}}t=c0.y
if(t.a)b5.dK=H.j(b5.y.L(0,"alpha"),"$iT")
if(t.b)b5.dL=H.j(b5.y.L(0,"alphaTxt"),"$ia0")
if(c0.k1){t=c0.z
s=t.length
if(s!==0){r=P.v
b5.c7=new H.I([r,A.bk])
b5.c8=new H.I([r,[P.o,A.co]])
for(r=[A.co],l=0;l<t.length;t.length===s||(0,H.m)(t),++l){k=t[l]
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
a0=a}h.push(new A.co(m,g,f,a0,a,b))}b5.c8.m(0,j,h)
q=b5.c7
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.r(P.w(b7+o+b8))
q.m(0,j,m)}}t=c0.Q
s=t.length
if(s!==0){r=P.v
b5.c9=new H.I([r,A.bk])
b5.ca=new H.I([r,[P.o,A.cp]])
for(r=[A.cp],l=0;l<t.length;t.length===s||(0,H.m)(t),++l){k=t[l]
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
h.push(new A.cp(a4,a3,a2,m,g,a5))}b5.ca.m(0,j,h)
q=b5.c9
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.r(P.w(b7+o+b8))
q.m(0,j,m)}}t=c0.ch
s=t.length
if(s!==0){r=P.v
b5.cb=new H.I([r,A.bk])
b5.cc=new H.I([r,[P.o,A.cr]])
for(r=[A.cr],l=0;l<t.length;t.length===s||(0,H.m)(t),++l){k=t[l]
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
H.j(e,"$icq")
a6=e}else a6=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
e=p.h(0,o)
if(e==null)H.r(P.w(b7+o+b8))
H.j(e,"$ibl")
a5=e}else a5=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
e=p.h(0,o)
if(e==null)H.r(P.w(b7+o+b8))
H.j(e,"$ibl")
p=b5.y
o=i+"s["+n+"].shadowAdj"
d=p.h(0,o)
if(d==null)H.r(P.w(b7+o+b8))
H.j(d,"$icn")
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
a0=a}h.push(new A.cr(m,g,a6,f,a5,a7,a8,a0,a,b))}b5.cc.m(0,j,h)
q=b5.cb
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.r(P.w(b7+o+b8))
q.m(0,j,m)}}t=c0.cx
s=t.length
if(s!==0){r=P.v
b5.cd=new H.I([r,A.bk])
b5.ce=new H.I([r,[P.o,A.cs]])
for(r=[A.cs],l=0;l<t.length;t.length===s||(0,H.m)(t),++l){k=t[l]
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
H.j(d,"$icn")
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
h.push(new A.cs(m,g,f,e,a4,a3,b2,b1,a8,b4,b3,a0,a,b,a5,a7))}b5.ce.m(0,j,h)
q=b5.cd
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.r(P.w(b7+o+b8))
q.m(0,j,m)}}}},
an:function(a,b){if(b!=null&&b.d)a.ed(b)},
fY:function(a,b){if(b!=null&&b.d>=6)a.cE(b)}}
A.cT.prototype={
i:function(a){return"barLight"+H.e(this.a)}}
A.d0.prototype={
i:function(a){return"dirLight"+H.e(this.a)}}
A.dp.prototype={
i:function(a){return"pointLight"+H.e(this.a)}}
A.dw.prototype={
i:function(a){return"spotLight"+H.e(this.a)}}
A.h8.prototype={
i:function(a){return this.bd}}
A.co.prototype={}
A.cp.prototype={}
A.cr.prototype={}
A.cs.prototype={}
A.dt.prototype={
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
this.x.hs()},
cU:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.w("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
fZ:function(){var u,t,s,r=this,q=H.b([],[A.cS]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.u(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cS(p,t.name,s))}r.x=new A.eW(q)},
h0:function(){var u,t,s,r=this,q=H.b([],[A.dJ]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.u(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.hl(t.type,t.size,t.name,s))}r.y=new A.iH(q)},
aO:function(a,b,c){var u=this.a
if(a===1)return new A.bk(u,b,c)
else return A.kL(u,this.r,b,a,c)},
eK:function(a,b,c){var u=this.a
if(a===1)return new A.a0(u,b,c)
else return A.kL(u,this.r,b,a,c)},
eL:function(a,b,c){var u=this.a
if(a===1)return new A.bl(u,b,c)
else return A.kL(u,this.r,b,a,c)},
bq:function(a,b){return new P.e0(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
hl:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aO(b,c,d)
case 5121:return u.aO(b,c,d)
case 5122:return u.aO(b,c,d)
case 5123:return u.aO(b,c,d)
case 5124:return u.aO(b,c,d)
case 5125:return u.aO(b,c,d)
case 5126:return new A.T(u.a,c,d)
case 35664:return new A.iD(u.a,c,d)
case 35665:return new A.G(u.a,c,d)
case 35666:return new A.cn(u.a,c,d)
case 35667:return new A.iE(u.a,c,d)
case 35668:return new A.iF(u.a,c,d)
case 35669:return new A.iG(u.a,c,d)
case 35674:return new A.iI(u.a,c,d)
case 35675:return new A.cq(u.a,c,d)
case 35676:return new A.aa(u.a,c,d)
case 35678:return u.eK(b,c,d)
case 35680:return u.eL(b,c,d)
case 35670:throw H.c(u.bq("BOOL",c))
case 35671:throw H.c(u.bq("BOOL_VEC2",c))
case 35672:throw H.c(u.bq("BOOL_VEC3",c))
case 35673:throw H.c(u.bq("BOOL_VEC4",c))
default:throw H.c(P.w("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.i1.prototype={}
A.dJ.prototype={}
A.iH.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
L:function(a,b){var u=this.h(0,b)
if(u==null)throw H.c(P.w("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.P()},
P:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.m)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.bk.prototype={
i:function(a){return"Uniform1i: "+H.e(this.c)}}
A.iE.prototype={
i:function(a){return"Uniform2i: "+H.e(this.c)}}
A.iF.prototype={
i:function(a){return"Uniform3i: "+H.e(this.c)}}
A.iG.prototype={
i:function(a){return"Uniform4i: "+H.e(this.c)}}
A.iC.prototype={
i:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.T.prototype={
i:function(a){return"Uniform1f: "+H.e(this.c)}}
A.iD.prototype={
i:function(a){return"Uniform2f: "+H.e(this.c)}}
A.G.prototype={
i:function(a){return"Uniform3f: "+H.e(this.c)}}
A.cn.prototype={
i:function(a){return"Uniform4f: "+H.e(this.c)}}
A.iI.prototype={
i:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.cq.prototype={
ai:function(a){var u=new Float32Array(H.bM(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.e(this.c)}}
A.aa.prototype={
ai:function(a){var u=new Float32Array(H.bM(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.e(this.c)}}
A.a0.prototype={
ed:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.bl.prototype={
cE:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.jU.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cl(s.b,b).cl(s.d.cl(s.c,b),c)
s=new V.Z(r.a,r.b,r.c)
if(!J.U(a.f,s)){a.f=s
s=a.a
if(s!=null)s.a8()}a.si5(r.w(0,Math.sqrt(r.H(r))))
s=1-b
u=1-c
u=new V.aY(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.U(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.a8()}}}
F.b9.prototype={
eD:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.dQ()
if(q!=null)s=s.D(0,q)
if(u!=null)s=s.D(0,u)
if(t!=null)s=s.D(0,t)
if(s.dV())return
return s.w(0,Math.sqrt(s.H(s)))},
eF:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.K(0,q)
r=new V.D(r.a,r.b,r.c)
s=r.w(0,Math.sqrt(r.H(r)))
r=t.K(0,q)
r=new V.D(r.a,r.b,r.c)
r=s.bc(r.w(0,Math.sqrt(r.H(r))))
return r.w(0,Math.sqrt(r.H(r)))},
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
s=V.dQ()
if(q!=null)s=s.D(0,q)
if(u!=null)s=s.D(0,u)
if(t!=null)s=s.D(0,t)
if(s.dV())return
return s.w(0,Math.sqrt(s.H(s)))},
eE:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.F().a){l=d.K(0,g)
l=new V.D(l.a,l.b,l.c)
q=l.w(0,Math.sqrt(l.H(l)))
if(s.a-t.a<0)q=q.U(0)}else{p=(l-u.b)/r
l=d.K(0,g)
l=new V.Z(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).K(0,j)
l=new V.D(l.a,l.b,l.c)
q=l.w(0,Math.sqrt(l.H(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.U(0)}l=n.d
if(l!=null){o=l.w(0,Math.sqrt(l.H(l)))
l=o.bc(q)
l=l.w(0,Math.sqrt(l.H(l))).bc(o)
q=l.w(0,Math.sqrt(l.H(l)))}return q},
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
G:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.a.am(J.a5(s.e),0)+", "+C.a.am(J.a5(t.b.e),0)+", "+C.a.am(J.a5(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.i(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.i(0)+"}"):u+"-}"},
P:function(){return this.G("")}}
F.c6.prototype={
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
G:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.a.am(J.a5(u.e),0)+", "+C.a.am(J.a5(this.b.e),0)},
P:function(){return this.G("")}}
F.cg.prototype={
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
G:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.a.am(J.a5(u.e),0)},
P:function(){return this.G("")}}
F.hU.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.E():u},
hH:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.a1()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){r=g[s]
h.a.n(0,r.hi())}h.a.a1()
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
o=new F.cg()
if(n.a==null)H.r(P.w("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.E(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){m=g[s]
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
F.mR(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){j=g[s]
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
F.c1(l,k,i)}g=h.e
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
u=$.as()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.b5().a)!==0)++s
if((t&$.b4().a)!==0)++s
if((t&$.b6().a)!==0)++s
if((t&$.bp().a)!==0)++s
if((t&$.cN().a)!==0)++s
if((t&$.cO().a)!==0)++s
if((t&$.bT().a)!==0)++s
if((t&$.b3().a)!==0)++s
r=a4.gcF(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.L])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.cU])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.hd(m)
k=l.gcF(l)
if(m>=t)return H.d(o,m)
o[m]=new Z.cU(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.d(i,j)
h=i[j].hF(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.d(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.bM(p)),35044)
u.bindBuffer(a1,null)
c=new Z.bY(new Z.dR(a1,d),o,a4)
c.b=H.b([],[Z.by])
if(a0.b.b.length!==0){b=H.b([],[P.v])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.a1()
b.push(t.e)}a=Z.kP(u,34963,b)
c.b.push(new Z.by(0,b.length,a))}if(a0.c.b.length!==0){b=H.b([],[P.v])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.a1()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.d(t,m)
t=t[m].b
t.a.a.a1()
b.push(t.e)}a=Z.kP(u,34963,b)
c.b.push(new Z.by(1,b.length,a))}if(a0.d.b.length!==0){b=H.b([],[P.v])
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
b.push(t.e)}a=Z.kP(u,34963,b)
c.b.push(new Z.by(4,b.length,a))}return c},
i:function(a){var u=this,t="   ",s=H.b([],[P.h])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.G(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.G(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.G(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.G(t))}return C.b.j(s,"\n")},
a8:function(){var u=this.e
if(u!=null)u.E(null)}}
F.hV.prototype={
ha:function(a){var u,t,s,r,q=H.b([],[F.b9]),p=a[0]
for(u=this.a,t=2;t<4;++t){s=a[t-1]
r=a[t]
u.a.n(0,p)
u.a.n(0,s)
u.a.n(0,r)
q.push(F.c1(p,s,r))}return q},
hb:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.b9])
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
h.push(F.c1(m,l,j))
u.a.n(0,m)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.c1(m,j,i))}else{n.n(0,l)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.c1(l,j,i))
u.a.n(0,l)
u.a.n(0,i)
u.a.n(0,m)
h.push(F.c1(l,i,m))}p=!p}r=!r}return h},
gl:function(a){return this.b.length},
aB:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.m)(u),++r)if(!u[r].c1())s=!1
return s},
c0:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.m)(u),++r)if(!u[r].c_())s=!1
return s},
i:function(a){return this.P()},
G:function(a){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].G(a))
return C.b.j(r,"\n")},
P:function(){return this.G("")}}
F.hW.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.P()},
G:function(a){var u,t,s=H.b([],[P.h]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.d(t,u)
s.push(t[u].G(a+(""+u+". ")))}return C.b.j(s,"\n")},
P:function(){return this.G("")}}
F.hX.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.P()},
G:function(a){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].G(a))
return C.b.j(r,"\n")},
P:function(){return this.G("")}}
F.bH.prototype={
c5:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.j0(u.cx,r,o,t,s,q,p,a,n)},
hi:function(){return this.c5(null)},
si5:function(a){var u
if(!J.U(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a8()}},
hF:function(a){var u,t,s=this
if(a.u(0,$.as())){u=s.f
t=[P.L]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.u(0,$.b5())){u=s.r
t=[P.L]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.u(0,$.b4())){u=s.x
t=[P.L]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.u(0,$.b6())){u=s.y
t=[P.L]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.u(0,$.bp())){u=s.z
t=[P.L]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.u(0,$.cN())){u=s.Q
t=[P.L]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.u(0,$.cO())){u=s.Q
t=[P.L]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.u(0,$.bT()))return H.b([s.ch],[P.L])
else if(a.u(0,$.b3())){u=s.cx
t=[P.L]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.L])},
c1:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.dQ()
t.d.C(0,new F.j8(s))
s=s.a
t.r=s.w(0,Math.sqrt(s.H(s)))
s=t.a
if(s!=null){s.a8()
s=t.a.e
if(s!=null)s.aI(0)}return!0},
c_:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.dQ()
t.d.C(0,new F.j7(s))
s=s.a
t.x=s.w(0,Math.sqrt(s.H(s)))
s=t.a
if(s!=null){s.a8()
s=t.a.e
if(s!=null)s.aI(0)}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
G:function(a){var u,t,s=this,r="-",q=H.b([],[P.h])
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
P:function(){return this.G("")}}
F.j8.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.D(0,t)}}}
F.j7.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.D(0,t)}}}
F.j1.prototype={
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
br:function(a,b,c,d,e,f){var u=F.j0(a,null,b,c,null,d,e,f,0)
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
n=q.w(0,Math.sqrt(p*p+o*o+n*n))
if(!J.U(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.E(null)}}}}return!0},
i:function(a){return this.P()},
G:function(a){var u,t,s,r
this.a1()
u=H.b([],[P.h])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r)u.push(t[r].G(a))
return C.b.j(u,"\n")},
P:function(){return this.G("")}}
F.j2.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
C:function(a,b){var u=this
C.b.C(u.b,b)
C.b.C(u.c,new F.j3(u,b))
C.b.C(u.d,new F.j4(u,b))},
i:function(a){return this.P()},
P:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].G(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].G(""))
return C.b.j(r,"\n")}}
F.j3.prototype={
$1:function(a){if(!J.U(a.a,this.a))this.b.$1(a)}}
F.j4.prototype={
$1:function(a){var u=this.a
if(!J.U(a.a,u)&&!J.U(a.b,u))this.b.$1(a)}}
F.j5.prototype={
gl:function(a){return this.b.length+this.c.length},
i:function(a){return this.P()},
P:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].G(""))
return C.b.j(r,"\n")}}
F.j6.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.P()},
P:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].G(""))
return C.b.j(r,"\n")}}
O.df.prototype={
gp:function(){var u=this.fr
return u==null?this.fr=D.E():u},
X:function(a){var u=this.fr
if(u!=null)u.E(a)},
b5:function(){return this.X(null)},
d2:function(a){this.a=null
this.X(a)},
fV:function(){return this.d2(null)},
f0:function(a,b){var u=new D.ba()
u.b=!0
this.X(u)},
f2:function(a,b){var u=new D.bb()
u.b=!0
this.X(u)},
cS:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=P.v
f=[f,f]
u=new H.I(f)
for(t=g.dx.e,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){q=t[r]
p=q.gav()
o=u.h(0,q.gav())
u.m(0,p,o==null?1:o)}n=H.b([],[A.cT])
u.C(0,new O.hc(g,n))
C.b.b1(n,new O.hd())
m=new H.I(f)
for(t=g.dx.f,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){p=m.h(0,0)
m.m(0,0,p==null?1:p)}l=H.b([],[A.d0])
m.C(0,new O.he(g,l))
C.b.b1(l,new O.hf())
k=new H.I(f)
for(t=g.dx.r,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){q=t[r]
p=q.gav()
o=k.h(0,q.gav())
k.m(0,p,o==null?1:o)}j=H.b([],[A.dp])
k.C(0,new O.hg(g,j))
C.b.b1(j,new O.hh())
i=new H.I(f)
for(f=g.dx.x,t=f.length,r=0;r<f.length;f.length===t||(0,H.m)(f),++r){q=f[r]
s=q.gav()
p=i.h(0,q.gav())
i.m(0,s,p==null?1:p)}h=H.b([],[A.dw])
i.C(0,new O.hi(g,h))
C.b.b1(h,new O.hj())
f=C.c.a6(g.e.a.length+3,4)
g.dy.e
return A.mY(!1,!1,!1,!1,f*4,g.f.c,g.r.c,g.x.c,g.y.c,g.z.c,g.Q.c,g.cx.c,g.cy.c,g.db.c,n,l,j,h)},
aj:function(a,b){if(b!=null)if(!C.b.N(a,b)){b.saX(0,a.length)
a.push(b)}},
aq:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.a6(u,u.length);u.t();){t=u.d
t.toString
s=$.j_
if(s==null)s=$.j_=new V.D(0,0,1)
t.a=s
r=$.iZ
t.d=r==null?$.iZ=new V.D(0,1,0):r
r=$.iY
t.e=r==null?$.iY=new V.D(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bC(s)
r=s.a
p=s.b
o=s.c
t.a=s.w(0,Math.sqrt(r*r+p*p+o*o))
o=q.bC(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.w(0,Math.sqrt(p*p+r*r+s*s))
s=q.bC(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.w(0,Math.sqrt(r*r+p*p+o*o))}}}},
e2:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=b0.a
if(b1==null){b1=b0.cS()
u=b2.fr.h(0,b1.bd)
if(u==null){u=A.mX(b1,b2.a)
b2.dg(u)}b1=b0.a=u
b3.e=null}t=b1.z
s=t.bt
b1=b3.e
if(!(b1 instanceof Z.bY))b1=b3.e=null
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
if(p!=null)p.aI(0)}n=b3.d.dn(new Z.dS(b2.a),s)
n.aD($.as()).e=b0.a.Q.c
if(b1)n.aD($.b5()).e=b0.a.cx.c
if(r)n.aD($.b4()).e=b0.a.ch.c
if(t.r2)n.aD($.b6()).e=b0.a.cy.c
if(q)n.aD($.bp()).e=b0.a.db.c
if(t.ry)n.aD($.b3()).e=b0.a.dx.c
b3.e=n}m=H.b([],[T.dC])
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
q=b2.cx=r.A(0,q.ga3(q))
r=q}b1=b1.fr
b1.toString
b1.ai(r.ac(0,!0))}b1=b0.a
r=b2.ch
if(r==null){r=b2.ghX()
q=b2.dx
q=b2.ch=r.A(0,q.ga3(q))
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
j=new Float32Array(H.bM(r.ac(0,!0)))
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
d=J.bU(b0.a.c8.h(0,f),e)
p=g.gih()
o=$.aC
p=p.bk(o==null?$.aC=new V.Z(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gim()
o=$.aC
p=p.bk(o==null?$.aC=new V.Z(0,0,0):o)
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
d=J.bU(b0.a.ca.h(0,0),e)
p=c.bC(g.a)
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
d=J.bU(b0.a.cc.h(0,f),e)
a2=c.A(0,g.ga3(g))
p=g.ga3(g)
o=$.aC
p=p.bk(o==null?$.aC=new V.Z(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=$.aC
p=a2.bk(p==null?$.aC=new V.Z(0,0,0):p)
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
j=new Float32Array(H.bM(new V.dg(o,a,a0,a3,a4,a5,a6,a7,p).ac(0,!0)))
a8.a.uniformMatrix3fv(a8.d,!1,j)
g.gaJ()
p=g.gaJ()
if(!C.b.N(m,p)){p.saX(0,m.length)
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
a=p.ghp(p)
a0=p.ghq(p)
a3=p.ghr()
p=p.gho()
o.a.uniform4f(o.d,a,a0,a3,p)
p=g.gb0()
if(!C.b.N(m,p)){p.saX(0,m.length)
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
d=J.bU(b0.a.ce.h(0,f),e)
p=g.ghW(g)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gik(g).iy()
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=c.bk(g.ghW(g))
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
p=g.giz()
o=d.x
o.a.uniform1f(o.d,p)
p=g.giA()
o=d.y
o.a.uniform1f(o.d,p)
g.gaJ()
p=g.gaJ()
if(!C.b.N(m,p)){p.saX(0,m.length)
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
a=p.ghp(p)
a0=p.ghq(p)
a3=p.ghr()
p=p.gho()
o.a.uniform4f(o.d,a,a0,a3,p)
p=g.gb0()
if(!C.b.N(m,p)){p.saX(0,m.length)
m.push(p)}p=g.gb0()
o=p.gcm(p)
if(o){o=d.dy
o.toString
a=p.d
if(!a)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}if(g.gil()){p=g.gij()
o=d.Q
o.a.uniform1f(o.d,p)
p=g.gii()
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
O.hc.prototype={
$2:function(a,b){if(typeof b!=="number")return b.D()
return this.b.push(new A.cT(a,C.c.a6(b+3,4)*4))}}
O.hd.prototype={
$2:function(a,b){return J.cP(a.a,b.a)}}
O.he.prototype={
$2:function(a,b){if(typeof b!=="number")return b.D()
return this.b.push(new A.d0(a,C.c.a6(b+3,4)*4))}}
O.hf.prototype={
$2:function(a,b){return J.cP(a.a,b.a)}}
O.hg.prototype={
$2:function(a,b){if(typeof b!=="number")return b.D()
return this.b.push(new A.dp(a,C.c.a6(b+3,4)*4))}}
O.hh.prototype={
$2:function(a,b){return J.cP(a.a,b.a)}}
O.hi.prototype={
$2:function(a,b){if(typeof b!=="number")return b.D()
return this.b.push(new A.dw(a,C.c.a6(b+3,4)*4))}}
O.hj.prototype={
$2:function(a,b){return J.cP(a.a,b.a)}}
O.h6.prototype={
az:function(){var u,t=this
t.cH()
u=t.f
if(!(Math.abs(u-1)<$.F().a)){t.f=1
u=new D.B(t.b,u,1)
u.b=!0
t.a.X(u)}}}
O.c9.prototype={
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
O.h7.prototype={}
O.ax.prototype={
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
O.h9.prototype={}
O.ha.prototype={
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
O.hb.prototype={
d6:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.F().a)){u.ch=a
t=new D.B(u.b+".shininess",t,a)
t.b=!0
u.a.X(t)}},
az:function(){this.cI()
this.d6(100)}}
O.du.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.E():u},
X:function(a){var u=this.e
if(u!=null)u.E(a)},
b5:function(){return this.X(null)},
e2:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=a.fr.h(0,n)
if(u==null){t=a.a
u=new A.i1(t,n)
u.cJ(t,n)
u.dS(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.h(0,"posAttr")
u.Q=H.j(u.y.h(0,"fov"),"$iT")
u.ch=H.j(u.y.h(0,"ratio"),"$iT")
u.cx=H.j(u.y.h(0,"boxClr"),"$iG")
u.cy=H.j(u.y.h(0,"boxTxt"),"$ibl")
u.db=H.j(u.y.h(0,"viewMat"),"$iaa")
a.dg(u)}o.a=u}if(b.e==null){t=b.d.dn(new Z.dS(a.a),$.as())
t.aD($.as()).e=o.a.z.c
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
if(t instanceof Z.bY){t.a0(a)
t.ah(a)
t.ap(a)}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.dt()
t=o.c
if(t!=null)t.ap(a)}}
O.dB.prototype={}
T.dC.prototype={}
T.ii.prototype={}
T.im.prototype={
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
T.io.prototype={
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
T.ip.prototype={
hG:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=W.kA(a)
t=new T.im()
t.a=0
t.b=q
t.d=t.c=!1
W.W(u,"load",new T.ir(this,t,u,!1,q,!1,!1),!1)
return t},
aP:function(a,b,c,d,e,f){var u=W.kA(c);++this.d
W.W(u,"load",new T.iq(this,u,!1,b,!1,d,a),!1)},
d4:function(a,b,c){var u,t,s,r
b=V.l1(b)
u=V.l1(a.width)
t=V.l1(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.kt()
s.width=u
s.height=t
r=C.i.ea(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.oy(r.getImageData(0,0,s.width,s.height))}}}
T.ir.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.d4(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.B.e5(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.dv()}++s.e}}
T.iq.prototype={
$1:function(a){var u=this,t=u.a,s=t.d4(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.B.e5(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.dv()}++t.e}}
X.ks.prototype={}
X.fC.prototype={
gp:function(){var u=this.x
return u==null?this.x=D.E():u},
as:function(a){var u=this.x
if(u!=null)u.E(a)},
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
if(typeof u!=="number")return H.u(u)
q=C.d.ao(r*u)
r=s.b
if(typeof t!=="number")return H.u(t)
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
X.fJ.prototype={
gp:function(){var u=this.b
return u==null?this.b=D.E():u},
a0:function(a){var u
a.cy.bA(V.bA())
u=V.bA()
a.db.bA(u)},
ap:function(a){a.cy.aG()
a.db.aG()}}
X.dn.prototype={
gp:function(){var u=this.f
return u==null?this.f=D.E():u},
as:function(a){var u=this.f
if(u!=null)u.E(a)},
ez:function(){return this.as(null)},
a0:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.ay(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bA(k)
r=$.lp
if(r==null){r=V.lr()
q=V.kO()
p=$.lH
r=V.ll(r,q,p==null?$.lH=new V.D(0,0,-1):p)
$.lp=r
u=r}else u=r
r=s.b
if(r!=null){t=r.aZ(0,a,s)
if(t!=null)u=t.A(0,u)}a.db.bA(u)},
ap:function(a){a.cy.aG()
a.db.aG()}}
X.id.prototype={}
V.cW.prototype={
bn:function(a){this.b=new P.fH(C.Q)
this.c=null
this.d=H.b([],[[P.o,W.am]])},
M:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)l.push(H.b([],[W.am]))
u=a.split("\n")
for(l=u.length,t=[W.am],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else m.d.push(H.b([],t))
p=document.createElement("div")
p.className="codePart"
o=m.b.eJ(q,0,q.length)
n=o==null?q:o
C.O.ec(p,H.l3(n," ","&nbsp;"))
n=p.style
n.color=b
C.b.gaw(m.d).push(p)}},
e0:function(a,b){var u,t,s,r=this
r.d=H.b([],[[P.o,W.am]])
u=C.b.j(b,"\n")
t=r.c
if(t==null)t=r.c=r.bs()
for(t.toString,s=new H.n(u),s=new P.bJ(t.cw(new H.bf(s,s.gl(s))).a());s.t();)r.bz(s.gB(s))}}
V.km.prototype={
$1:function(a){var u=C.d.e6(this.a.ghA(),2)
if(u!=="0.00")P.l2(u+" fps")}}
V.fj.prototype={
bz:function(a){var u=this
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
bs:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=L.iv()
a1.d=a1.k(0,r)
u=a1.k(0,r).j(0,q)
t=K.t(new H.n("_"))
u.a.push(t)
t=K.O("a","z")
u.a.push(t)
t=K.O("A","Z")
u.a.push(t)
t=a1.k(0,q).j(0,q)
u=K.t(new H.n("_"))
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
t=K.t(new H.n("."))
u.a.push(t)
t=a1.k(0,o).j(0,n)
u=K.O("0","9")
t.a.push(u)
u=a1.k(0,n).j(0,n)
t=K.O("0","9")
u.a.push(t)
t=a1.k(0,r).j(0,m)
u=K.t(new H.n(l))
t.a.push(u)
u=a1.k(0,m).j(0,m)
t=K.t(new H.n(l))
u.a.push(t)
t=a1.k(0,r).j(0,k)
u=K.t(new H.n('"'))
t.a.push(u)
u=a1.k(0,k).j(0,j)
t=K.t(new H.n('"'))
u.a.push(t)
t=a1.k(0,k).j(0,i)
u=K.t(new H.n("\\"))
t.a.push(u)
u=a1.k(0,i).j(0,k)
t=K.t(new H.n('"'))
u.a.push(t)
a1.k(0,k).j(0,k).a.push(new K.aM())
t=a1.k(0,r).j(0,h)
u=K.t(new H.n("'"))
t.a.push(u)
u=a1.k(0,h).j(0,g)
t=K.t(new H.n("'"))
u.a.push(t)
t=a1.k(0,h).j(0,f)
u=K.t(new H.n("\\"))
t.a.push(u)
u=a1.k(0,f).j(0,h)
t=K.t(new H.n("'"))
u.a.push(t)
a1.k(0,h).j(0,h).a.push(new K.aM())
t=a1.k(0,r).j(0,e)
u=K.t(new H.n("/"))
t.a.push(u)
u=a1.k(0,e).j(0,d)
t=K.t(new H.n("/"))
u.a.push(t)
t=a1.k(0,d).j(0,c)
u=K.t(new H.n("\n"))
t.a.push(u)
u=a1.k(0,d).j(0,d)
t=new K.a8()
s=[K.bg]
t.a=H.b([],s)
u.a.push(t)
u=K.t(new H.n("\n"))
t.a.push(u)
u=a1.k(0,e).j(0,b)
t=K.t(new H.n("*"))
u.a.push(t)
t=a1.k(0,b).j(0,a)
u=K.t(new H.n("*"))
t.a.push(u)
u=a1.k(0,a).j(0,b)
t=new K.a8()
t.a=H.b([],s)
u.a.push(t)
u=K.t(new H.n("*"))
t.a.push(u)
u=a1.k(0,a).j(0,c)
t=K.t(new H.n("/"))
u.a.push(t)
t=a1.k(0,r).j(0,a0)
u=K.t(new H.n(" \n\t"))
t.a.push(u)
u=a1.k(0,a0).j(0,a0)
t=K.t(new H.n(" \n\t"))
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
V.fE.prototype={
bz:function(a){var u=this
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
bs:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=L.iv()
e.d=e.k(0,r)
u=e.k(0,r).j(0,q)
t=K.t(new H.n("_"))
u.a.push(t)
t=K.O("a","z")
u.a.push(t)
t=K.O("A","Z")
u.a.push(t)
t=e.k(0,q).j(0,q)
u=K.t(new H.n("_"))
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
t=K.t(new H.n("."))
u.a.push(t)
t=e.k(0,o).j(0,n)
u=K.O("0","9")
t.a.push(u)
u=e.k(0,n).j(0,n)
t=K.O("0","9")
u.a.push(t)
t=e.k(0,r).j(0,m)
u=K.t(new H.n(l))
t.a.push(u)
u=e.k(0,m).j(0,m)
t=K.t(new H.n(l))
u.a.push(t)
t=e.k(0,r).j(0,k)
u=K.t(new H.n("/"))
t.a.push(u)
u=e.k(0,k).j(0,j)
t=K.t(new H.n("/"))
u.a.push(t)
e.k(0,k).j(0,m).a.push(new K.aM())
t=e.k(0,j).j(0,i)
u=K.t(new H.n("\n"))
t.a.push(u)
u=e.k(0,j).j(0,j)
t=new K.a8()
s=[K.bg]
t.a=H.b([],s)
u.a.push(t)
u=K.t(new H.n("\n"))
t.a.push(u)
u=e.k(0,r).j(0,h)
t=K.t(new H.n("#"))
u.a.push(t)
t=e.k(0,h).j(0,h)
u=new K.a8()
u.a=H.b([],s)
t.a.push(u)
t=K.t(new H.n("\n"))
u.a.push(t)
t=e.k(0,h).j(0,g)
u=K.t(new H.n("\n"))
t.a.push(u)
u=e.k(0,r).j(0,f)
t=K.t(new H.n(" \n\t"))
u.a.push(t)
t=e.k(0,f).j(0,f)
u=K.t(new H.n(" \n\t"))
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
V.fF.prototype={
bz:function(a){var u=this,t="#111"
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
bs:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=L.iv()
l.d=l.k(0,s)
u=l.k(0,s).j(0,r)
t=K.t(new H.n("_"))
u.a.push(t)
t=K.O("a","z")
u.a.push(t)
t=K.O("A","Z")
u.a.push(t)
t=l.k(0,r).j(0,r)
u=K.t(new H.n("_"))
t.a.push(u)
u=K.O("0","9")
t.a.push(u)
u=K.O("a","z")
t.a.push(u)
u=K.O("A","Z")
t.a.push(u)
u=l.k(0,r).j(0,q)
t=K.t(new H.n("="))
u.a.push(t)
u.c=!0
u=l.k(0,s).j(0,p)
t=K.t(new H.n("</\\-!>="))
u.a.push(t)
t=l.k(0,p).j(0,p)
u=K.t(new H.n("</\\-!>="))
t.a.push(u)
u=l.k(0,s).j(0,o)
t=K.t(new H.n('"'))
u.a.push(t)
t=l.k(0,o).j(0,n)
u=K.t(new H.n('"'))
t.a.push(u)
u=l.k(0,o).j(0,"EscStr")
t=K.t(new H.n("\\"))
u.a.push(t)
t=l.k(0,"EscStr").j(0,o)
u=K.t(new H.n('"'))
t.a.push(u)
l.k(0,o).j(0,o).a.push(new K.aM())
l.k(0,s).j(0,m).a.push(new K.aM())
u=l.k(0,m).j(0,m)
t=new K.a8()
t.a=H.b([],[K.bg])
u.a.push(t)
u=K.t(new H.n('</\\-!>=_"'))
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
V.hD.prototype={
e0:function(a,b){this.d=H.b([],[[P.o,W.am]])
this.M(C.b.j(b,"\n"),"#111")},
bz:function(a){},
bs:function(){return}}
V.hI.prototype={
dd:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
if(m.c==null)return
u=m.a
t=P.iQ().gbg().h(0,H.e(u))
if(t==null)if(d){c.$0()
m.b9(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.bV(m.c).n(0,q)
o=W.mK("radio")
o.checked=s
o.name=u
W.W(o,"change",new V.hJ(m,o,c,b),!1)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.bV(m.c).n(0,r.createElement("br"))},
ae:function(a,b,c){return this.dd(a,b,c,!1)},
b9:function(a){var u,t,s=P.iQ(),r=P.h,q=P.lj(s.gbg(),r,r)
q.m(0,this.a,a)
u=s.cu(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.eu([],[]).bl(""),"",t)}}
V.hJ.prototype={
$1:function(a){var u=this
if(u.b.checked){u.c.$0()
u.a.b9(u.d)}}}
V.hY.prototype={
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
W.W(q,"scroll",new V.i_(o),!1)},
df:function(a){var u,t,s,r,q,p,o,n
this.h_()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b,r=C.b.hE(a),s.toString,r=new H.n(r),r=new P.bJ(s.cw(new H.bf(r,r.gl(r))).a());r.t();){s=r.gB(r)
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
if(H.oT(s,"|",0)){p=s.split("|")
o=u.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.d(p,1)
o.href=p[1]
o.textContent=p[0]
t.appendChild(o)}else{n=P.eE(C.x,s,C.e,!1)
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
e9:function(a){var u,t,s,r=new V.fj("dart")
r.bn("dart")
u=new V.fE("glsl")
u.bn("glsl")
t=new V.fF("html")
t.bn("html")
s=C.b.hw(H.b([r,u,t],[V.cW]),new V.i0(a))
if(s!=null)return s
r=new V.hD("plain")
r.bn("plain")
return r},
de:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.b([],[P.v])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(J.cJ(s).a5(s,"+")){b0[t]=C.a.aa(s,1)
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
n=P.eE(C.x,a7,C.e,!1)
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
u=L.iv()
u.d=u.k(0,q)
t=u.k(0,q).j(0,p)
s=K.t(new H.n("*"))
t.a.push(s)
t.c=!0
t=u.k(0,p).j(0,p)
s=new K.a8()
r=[K.bg]
s.a=H.b([],r)
t.a.push(s)
t=K.t(new H.n("*"))
s.a.push(t)
t=u.k(0,p).j(0,"BoldEnd")
s=K.t(new H.n("*"))
t.a.push(s)
t.c=!0
t=u.k(0,q).j(0,o)
s=K.t(new H.n("_"))
t.a.push(s)
t.c=!0
t=u.k(0,o).j(0,o)
s=new K.a8()
s.a=H.b([],r)
t.a.push(s)
t=K.t(new H.n("_"))
s.a.push(t)
t=u.k(0,o).j(0,n)
s=K.t(new H.n("_"))
t.a.push(s)
t.c=!0
t=u.k(0,q).j(0,m)
s=K.t(new H.n("`"))
t.a.push(s)
t.c=!0
t=u.k(0,m).j(0,m)
s=new K.a8()
s.a=H.b([],r)
t.a.push(s)
t=K.t(new H.n("`"))
s.a.push(t)
t=u.k(0,m).j(0,"CodeEnd")
s=K.t(new H.n("`"))
t.a.push(s)
t.c=!0
t=u.k(0,q).j(0,l)
s=K.t(new H.n("["))
t.a.push(s)
t.c=!0
t=u.k(0,l).j(0,k)
s=K.t(new H.n("|"))
t.a.push(s)
s=u.k(0,l).j(0,j)
t=K.t(new H.n("]"))
s.a.push(t)
s.c=!0
s=u.k(0,l).j(0,l)
t=new K.a8()
t.a=H.b([],r)
s.a.push(t)
s=K.t(new H.n("|]"))
t.a.push(s)
s=u.k(0,k).j(0,j)
t=K.t(new H.n("]"))
s.a.push(t)
s.c=!0
s=u.k(0,k).j(0,k)
t=new K.a8()
t.a=H.b([],r)
s.a.push(t)
s=K.t(new H.n("|]"))
t.a.push(s)
u.k(0,q).j(0,i).a.push(new K.aM())
s=u.k(0,i).j(0,i)
t=new K.a8()
t.a=H.b([],r)
s.a.push(t)
s=K.t(new H.n("*_`["))
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
V.i_.prototype={
$1:function(a){P.lA(C.n,new V.hZ(this.a))}}
V.hZ.prototype={
$0:function(){var u=C.d.ao(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
V.i0.prototype={
$1:function(a){return a.a===this.a}}
V.ij.prototype={
ae:function(a,b,c){var u,t,s,r,q=this,p=W.kA(null)
p.src=b
p.height=p.width=64
u=p.style
u.border="solid 2px white"
u=J.bV(q.c)
t=u.gl(u)
W.W(p,"click",new V.il(q,p,b,t),!1)
J.bV(q.c).n(0,p)
J.bV(q.c).n(0,document.createElement("br"))
s=P.iQ().gbg().h(0,H.e(q.a))
if(s==null){q.b9(t)
r=c}else r=P.cL(s,null,null)==t
if(r)p.click()},
n:function(a,b){return this.ae(a,b,!1)},
b9:function(a){var u,t,s=P.iQ(),r=P.h,q=P.lj(s.gbg(),r,r)
q.m(0,this.a,H.e(a))
u=s.cu(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.eu([],[]).bl(""),"",t)}}
V.il.prototype={
$1:function(a){var u=this,t=u.a,s=J.bV(t.c)
s.C(s,new V.ik())
s=u.b.style
s.border="solid 2px black"
t.d.$1(u.c)
t.b9(u.d)}}
V.ik.prototype={
$1:function(a){var u
if(!!J.P(a).$ibx){u=a.style
u.border="solid 2px white"}}}
B.ka.prototype={
$0:function(){var u=this.a,t=u.r
t.sv(0,new V.y(0.1,0.1,0.1))
t=u.x
t.sv(0,new V.y(0.2,0.2,0.2))
u.cy.sv(0,new V.y(0,0,0))
u.cx.sv(0,new V.y(1,1,1))}}
B.kb.prototype={
$0:function(){var u=this.a,t=u.r
t.sv(0,new V.y(0.11,0.11,0.1))
t=u.x
t.sv(0,new V.y(0.21,0.21,0.2))
u.cy.sv(0,new V.y(0,0,0))
u=u.cx
u.sv(0,new V.y(1,0.9,0.5))}}
B.kc.prototype={
$0:function(){var u=this.a,t=u.r
t.sv(0,new V.y(0.1,0.1,0.1))
t=u.x
t.sv(0,new V.y(0.1,0.1,0.1))
u.cy.saC(0.4)
t=u.cy
t.sv(0,new V.y(0.6,0.6,0.6))
u=u.cx
u.sv(0,new V.y(0.4,0.4,0.4))}}
B.kd.prototype={
$0:function(){var u=this.a,t=u.r
t.sv(0,new V.y(0.1,0.1,0.1))
t=u.x
t.sv(0,new V.y(0.1,0.1,0.1))
u.cy.saC(0.4)
t=u.cy
t.sv(0,new V.y(0.2,0.3,1))
u=u.cx
u.sv(0,new V.y(0.3,0.3,0.3))}}
B.ke.prototype={
$0:function(){var u=this.a,t=u.r
t.sv(0,new V.y(0.1,0.1,0.1))
t=u.x
t.sv(0,new V.y(0.1,0.1,0.1))
u.cy.saC(0.6)
t=u.cy
t.sv(0,new V.y(0.8,0.8,0.8))
u=u.cx
u.sv(0,new V.y(0.2,0.2,0.2))}}
B.kf.prototype={
$0:function(){var u=this.a,t=u.r
t.sv(0,new V.y(0.1,0.1,0.1))
t=u.x
t.sv(0,new V.y(0.1,0.1,0.1))
u.cy.saC(0.6)
u.cy.sv(0,new V.y(1,1,1))
u.cx.sv(0,new V.y(0,0,0))}}
B.kg.prototype={
$0:function(){var u=this.a,t=u.r
t.sv(0,new V.y(0.1,0.1,0.1))
t=u.x
t.sv(0,new V.y(0.1,0.1,0.1))
u.cy.saC(0.9)
t=u.cy
t.sv(0,new V.y(1,0.8,0.8))
u.cx.sv(0,new V.y(0,0,0))}}
B.kh.prototype={
$0:function(){var u,t=this.a
t.r.sv(0,new V.y(0,0,0))
u=t.x
u.sv(0,new V.y(0.1,0.1,0.1))
t.cy.saC(0.99)
u=t.cy
u.sv(0,new V.y(0.95,0.95,0.95))
t.cx.sv(0,new V.y(0,0,0))}}
B.ki.prototype={
$0:function(){var u=this.a,t=u.r
t.sv(0,new V.y(0.3,0.3,0.3))
t=u.x
t.sv(0,new V.y(0.5,0.5,0.5))
u.cy.sv(0,new V.y(0,0,0))
u=u.cx
u.sv(0,new V.y(0.3,0.3,0.3))}}
B.kj.prototype={
$1:function(a){var u,t=this.a.Q,s=this.b.f.hG(a),r=t.c
if(!r.b)t.b8(new A.X(r.a,!0,!1))
r=t.d
if(r!==s){if(r!=null)r.gp().V(0,t.gaQ())
u=t.d
t.d=s
s.gp().n(0,t.gaQ())
s=new D.B(t.b+".texture2D",u,t.d)
s.b=!0
t.a.X(s)}}}
B.kk.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.a,r=[P.h]
u.de("Vertex Shader","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
t=t.a
u.de("Fragment Shader","glsl",0,H.b((t==null?null:t.d).split("\n"),r))}};(function aliases(){var u=J.a.prototype
u.ei=u.i
u=J.da.prototype
u.ek=u.i
u=P.i.prototype
u.ej=u.bD
u=W.Q.prototype
u.bG=u.ak
u=W.el.prototype
u.el=u.au
u=K.d6.prototype
u.eh=u.aF
u.cG=u.i
u=O.c9.prototype
u.cH=u.az
u=O.ax.prototype
u.cI=u.az})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installStaticTearOff,q=hunkHelpers.installInstanceTearOff,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u,n=hunkHelpers._instance_1u,m=hunkHelpers._instance_0i
u(J,"nY","mO",21)
t(P,"os","nw",7)
t(P,"ot","nx",7)
t(P,"ou","ny",7)
s(P,"lY","oq",9)
r(W,"oH",4,null,["$4"],["nz"],16,0)
r(W,"oI",4,null,["$4"],["nA"],16,0)
var l
q(l=E.aQ.prototype,"gdZ",0,0,null,["$1","$0"],["e_","hO"],0,0)
q(l,"gdX",0,0,null,["$1","$0"],["dY","hL"],0,0)
p(l,"ghJ","hK",4)
p(l,"ghM","hN",4)
q(l=E.dD.prototype,"gcL",0,0,null,["$1","$0"],["cN","cM"],0,0)
o(l,"gi1","e3",9)
n(l=X.dM.prototype,"gff","fg",5)
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
q(D.bu.prototype,"ges",0,0,null,["$1","$0"],["ax","eu"],0,0)
q(l=D.dc.prototype,"gd_",0,0,null,["$1","$0"],["d0","fl"],0,0)
n(l,"gfA","fB",20)
p(l,"geY","eZ",11)
p(l,"gfE","fF",11)
m(V.J.prototype,"gl","ck",12)
m(V.D.prototype,"gl","ck",12)
q(l=U.c3.prototype,"gaN",0,0,null,["$1","$0"],["T","ab"],0,0)
p(l,"geW","eX",13)
p(l,"gfC","fD",13)
q(l=U.dN.prototype,"gaN",0,0,null,["$1","$0"],["T","ab"],0,0)
n(l,"gbO","bP",1)
n(l,"gbQ","bR",1)
n(l,"gbS","bT",1)
q(l=U.dO.prototype,"gaN",0,0,null,["$1","$0"],["T","ab"],0,0)
n(l,"gbO","bP",1)
n(l,"gbQ","bR",1)
n(l,"gbS","bT",1)
n(l,"geP","eQ",1)
n(l,"geR","eS",1)
n(l,"gh6","h7",1)
n(l,"gh4","h5",1)
n(l,"gh2","h3",1)
n(U.dP.prototype,"geU","eV",1)
q(l=M.cX.prototype,"gZ",0,0,null,["$1","$0"],["a_","b2"],0,0)
p(l,"gfG","fH",14)
p(l,"gfI","fJ",14)
q(M.cZ.prototype,"gZ",0,0,null,["$1","$0"],["a_","b2"],0,0)
q(l=M.d3.prototype,"gZ",0,0,null,["$1","$0"],["a_","b2"],0,0)
p(l,"gf5","f6",4)
p(l,"gf7","f8",4)
q(l=O.df.prototype,"gaQ",0,0,null,["$1","$0"],["X","b5"],0,0)
q(l,"gfU",0,0,null,["$1","$0"],["d2","fV"],0,0)
p(l,"gf_","f0",15)
p(l,"gf1","f2",15)
q(O.c9.prototype,"gaQ",0,0,null,["$1","$0"],["X","b5"],0,0)
q(O.du.prototype,"gaQ",0,0,null,["$1","$0"],["X","b5"],0,0)
q(X.dn.prototype,"gey",0,0,null,["$1","$0"],["as","ez"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.a2,null)
s(P.a2,[H.kF,J.a,J.a6,P.e8,P.i,H.bf,P.fM,H.d4,H.iM,H.fb,H.iA,P.bv,H.bZ,H.eq,P.a1,H.fT,H.fV,H.fO,P.ex,P.bI,P.bJ,P.dT,P.dz,P.i9,P.dE,P.jT,P.jw,P.jq,P.e7,P.x,P.jL,P.h2,P.f7,P.fI,P.jR,P.jQ,P.aK,P.ad,P.ac,P.b8,P.hB,P.dx,P.e0,P.fB,P.fD,P.o,P.R,P.bi,P.h,P.S,P.bK,P.iO,P.jz,W.ff,W.cv,W.M,W.dl,W.el,W.jF,W.d5,W.aV,W.jv,W.eF,P.jB,P.eC,P.jr,P.bF,K.aM,K.d6,K.bg,K.hK,K.hT,L.dy,L.dF,L.dG,L.iu,O.aN,O.ca,E.f3,E.aQ,E.hL,E.dD,Z.dR,Z.dS,Z.bY,Z.by,Z.b0,D.f6,D.bw,D.Y,X.cV,X.db,X.fR,X.h_,X.aj,X.hq,X.iw,X.dM,D.f0,D.bu,D.a7,D.hF,D.i4,V.y,V.aO,V.ft,V.dg,V.aT,V.a3,V.Z,V.aY,V.dr,V.J,V.D,U.dN,U.dO,U.dP,M.cZ,M.d3,M.ao,A.cS,A.eW,A.X,A.cT,A.d0,A.dp,A.dw,A.h8,A.co,A.cp,A.cr,A.cs,A.dJ,A.iH,F.b9,F.c6,F.cg,F.hU,F.hV,F.hW,F.hX,F.bH,F.j1,F.j2,F.j5,F.j6,O.dB,O.c9,O.h9,T.ip,X.ks,X.id,X.fJ,X.dn,V.cW,V.hI,V.hY,V.ij])
s(J.a,[J.fN,J.d9,J.da,J.bc,J.c5,J.bd,H.cd,H.bh,W.f,W.eT,W.br,W.av,W.H,W.dV,W.ai,W.fk,W.fl,W.dX,W.d2,W.dZ,W.fn,W.k,W.e1,W.aw,W.fG,W.e3,W.aR,W.fZ,W.hk,W.e9,W.ea,W.az,W.eb,W.ee,W.aB,W.ei,W.ek,W.aE,W.em,W.aF,W.er,W.ap,W.ev,W.it,W.aH,W.ey,W.iy,W.iU,W.eG,W.eI,W.eK,W.eM,W.eO,P.aS,P.e5,P.aW,P.eg,P.hH,P.es,P.b_,P.eA,P.eX,P.dU,P.ds,P.eo])
s(J.da,[J.hC,J.bG,J.be])
t(J.kE,J.bc)
s(J.c5,[J.d8,J.d7])
t(P.fX,P.e8)
s(P.fX,[H.dK,W.jg,W.a4,P.fx])
t(H.n,H.dK)
s(P.i,[H.q,H.c8,H.ct,P.fL])
s(H.q,[H.dd,H.fU])
t(H.fq,H.c8)
s(P.fM,[H.h3,H.ja])
t(H.h4,H.dd)
t(H.fc,H.fb)
s(P.bv,[H.hy,H.fQ,H.iL,H.f5,H.hR,P.dm,P.al,P.iN,P.iJ,P.ck,P.fa,P.fi])
s(H.bZ,[H.ko,H.ie,H.fP,H.k6,H.k7,H.k8,P.jc,P.jb,P.jd,P.je,P.jK,P.jJ,P.k1,P.jt,P.ju,P.fW,P.h1,P.fo,P.fp,P.iT,P.iP,P.iR,P.iS,P.jM,P.jN,P.jP,P.jO,P.jX,P.jW,P.jY,P.jZ,W.fr,W.hm,W.ho,W.hQ,W.i8,W.jl,W.hx,W.hw,W.jx,W.jy,W.jI,W.jS,P.jC,P.jD,P.k2,P.fy,P.fz,P.eZ,E.hM,E.hN,E.hO,E.is,D.fu,D.fv,F.jU,F.j8,F.j7,F.j3,F.j4,O.hc,O.hd,O.he,O.hf,O.hg,O.hh,O.hi,O.hj,T.ir,T.iq,V.km,V.hJ,V.i_,V.hZ,V.i0,V.il,V.ik,B.ka,B.kb,B.kc,B.kd,B.ke,B.kf,B.kg,B.kh,B.ki,B.kj,B.kk])
s(H.ie,[H.i6,H.bW])
t(P.h0,P.a1)
s(P.h0,[H.I,W.jf])
t(H.dh,H.bh)
s(H.dh,[H.cx,H.cz])
t(H.cy,H.cx)
t(H.ce,H.cy)
t(H.cA,H.cz)
t(H.di,H.cA)
s(H.di,[H.hr,H.hs,H.ht,H.hu,H.hv,H.dj,H.cf])
t(P.jG,P.fL)
t(P.js,P.jT)
t(P.jp,P.jw)
t(P.eD,P.h2)
t(P.dL,P.eD)
s(P.f7,[P.f1,P.fs])
t(P.fd,P.i9)
s(P.fd,[P.f2,P.fH,P.iX,P.iW])
t(P.iV,P.fs)
s(P.ac,[P.L,P.v])
s(P.al,[P.bD,P.fK])
t(P.ji,P.bK)
s(W.f,[W.C,W.fw,W.cb,W.aD,W.cB,W.aG,W.aq,W.cD,W.j9,W.cu,P.f_,P.bq])
s(W.C,[W.Q,W.b7])
s(W.Q,[W.p,P.l])
s(W.p,[W.eU,W.eV,W.bs,W.bt,W.am,W.fA,W.bx,W.hS,W.dA,W.ib,W.ic,W.cm])
t(W.fe,W.av)
t(W.c_,W.dV)
s(W.ai,[W.fg,W.fh])
t(W.dY,W.dX)
t(W.d1,W.dY)
t(W.e_,W.dZ)
t(W.fm,W.e_)
t(W.an,W.br)
t(W.e2,W.e1)
t(W.c2,W.e2)
t(W.e4,W.e3)
t(W.c4,W.e4)
t(W.bj,W.k)
s(W.bj,[W.bz,W.aA,W.bE])
t(W.hl,W.e9)
t(W.hn,W.ea)
t(W.ec,W.eb)
t(W.hp,W.ec)
t(W.ef,W.ee)
t(W.dk,W.ef)
t(W.ej,W.ei)
t(W.hE,W.ej)
t(W.hP,W.ek)
t(W.cC,W.cB)
t(W.i2,W.cC)
t(W.en,W.em)
t(W.i3,W.en)
t(W.i7,W.er)
t(W.ew,W.ev)
t(W.ig,W.ew)
t(W.cE,W.cD)
t(W.ih,W.cE)
t(W.ez,W.ey)
t(W.ix,W.ez)
t(W.bm,W.aA)
t(W.eH,W.eG)
t(W.jh,W.eH)
t(W.dW,W.d2)
t(W.eJ,W.eI)
t(W.jm,W.eJ)
t(W.eL,W.eK)
t(W.ed,W.eL)
t(W.eN,W.eM)
t(W.jA,W.eN)
t(W.eP,W.eO)
t(W.jE,W.eP)
t(W.jj,W.jf)
t(W.jk,P.dz)
t(W.jH,W.el)
t(P.eu,P.jB)
t(P.a9,P.jr)
t(P.e6,P.e5)
t(P.fS,P.e6)
t(P.eh,P.eg)
t(P.hz,P.eh)
t(P.cj,P.l)
t(P.et,P.es)
t(P.ia,P.et)
t(P.eB,P.eA)
t(P.iz,P.eB)
t(P.eY,P.dU)
t(P.hA,P.bq)
t(P.ep,P.eo)
t(P.i5,P.ep)
s(K.d6,[K.a8,L.dI])
s(E.f3,[Z.cU,A.dt,T.dC])
s(D.Y,[D.ba,D.bb,D.B,X.hG])
s(X.hG,[X.de,X.aU,X.cc,X.dH])
s(O.aN,[D.dc,U.c3,M.cX])
s(D.f6,[U.f9,U.ae])
t(U.cY,U.ae)
s(A.dt,[A.h5,A.i1])
s(A.dJ,[A.bk,A.iE,A.iF,A.iG,A.iC,A.T,A.iD,A.G,A.cn,A.iI,A.cq,A.aa,A.a0,A.bl])
s(O.dB,[O.df,O.du])
s(O.c9,[O.h6,O.h7,O.ax])
s(O.ax,[O.ha,O.hb])
s(T.dC,[T.ii,T.io])
t(T.im,T.ii)
t(X.fC,X.id)
s(V.cW,[V.fj,V.fE,V.fF,V.hD])
u(H.dK,H.iM)
u(H.cx,P.x)
u(H.cy,H.d4)
u(H.cz,P.x)
u(H.cA,H.d4)
u(P.e8,P.x)
u(P.eD,P.jL)
u(W.dV,W.ff)
u(W.dX,P.x)
u(W.dY,W.M)
u(W.dZ,P.x)
u(W.e_,W.M)
u(W.e1,P.x)
u(W.e2,W.M)
u(W.e3,P.x)
u(W.e4,W.M)
u(W.e9,P.a1)
u(W.ea,P.a1)
u(W.eb,P.x)
u(W.ec,W.M)
u(W.ee,P.x)
u(W.ef,W.M)
u(W.ei,P.x)
u(W.ej,W.M)
u(W.ek,P.a1)
u(W.cB,P.x)
u(W.cC,W.M)
u(W.em,P.x)
u(W.en,W.M)
u(W.er,P.a1)
u(W.ev,P.x)
u(W.ew,W.M)
u(W.cD,P.x)
u(W.cE,W.M)
u(W.ey,P.x)
u(W.ez,W.M)
u(W.eG,P.x)
u(W.eH,W.M)
u(W.eI,P.x)
u(W.eJ,W.M)
u(W.eK,P.x)
u(W.eL,W.M)
u(W.eM,P.x)
u(W.eN,W.M)
u(W.eO,P.x)
u(W.eP,W.M)
u(P.e5,P.x)
u(P.e6,W.M)
u(P.eg,P.x)
u(P.eh,W.M)
u(P.es,P.x)
u(P.et,W.M)
u(P.eA,P.x)
u(P.eB,W.M)
u(P.dU,P.a1)
u(P.eo,P.x)
u(P.ep,W.M)})()
var v={mangledGlobalNames:{v:"int",L:"double",ac:"num",h:"String",aK:"bool",bi:"Null",o:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.Y]},{func:1,ret:-1,args:[D.Y]},{func:1,ret:-1,args:[W.aA]},{func:1,ret:P.bi,args:[,,]},{func:1,ret:-1,args:[P.v,[P.i,E.aQ]]},{func:1,ret:-1,args:[W.k]},{func:1,ret:-1,args:[W.bE]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bz]},{func:1,ret:-1,args:[P.v,[P.i,D.a7]]},{func:1,ret:P.L},{func:1,ret:-1,args:[P.v,[P.i,U.ae]]},{func:1,ret:-1,args:[P.v,[P.i,M.ao]]},{func:1,ret:-1,args:[P.v,[P.i,V.aT]]},{func:1,ret:P.aK,args:[W.Q,P.h,P.h,W.cv]},{func:1,ret:P.bi,args:[,]},{func:1,ret:P.bF,args:[,,]},{func:1,ret:-1,args:[W.bm]},{func:1,ret:P.aK,args:[[P.i,D.a7]]},{func:1,ret:P.v,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.r=W.bs.prototype
C.i=W.bt.prototype
C.O=W.am.prototype
C.R=J.a.prototype
C.b=J.bc.prototype
C.S=J.d7.prototype
C.c=J.d8.prototype
C.j=J.d9.prototype
C.d=J.c5.prototype
C.a=J.bd.prototype
C.T=J.be.prototype
C.A=J.hC.prototype
C.B=P.ds.prototype
C.C=W.dA.prototype
C.q=J.bG.prototype
C.D=W.bm.prototype
C.E=W.cu.prototype
C.a_=new P.f2()
C.F=new P.f1()
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

C.M=new P.hB()
C.e=new P.iV()
C.N=new P.iX()
C.f=new P.js()
C.n=new P.b8(0)
C.P=new P.b8(5e6)
C.Q=new P.fI("element",!1,!1,!1)
C.v=H.b(u([127,2047,65535,1114111]),[P.v])
C.k=H.b(u([0,0,32776,33792,1,10240,0,0]),[P.v])
C.U=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.l=H.b(u([0,0,65490,45055,65535,34815,65534,18431]),[P.v])
C.m=H.b(u([0,0,26624,1023,65534,2047,65534,2047]),[P.v])
C.V=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.w=H.b(u([]),[P.h])
C.W=H.b(u([0,0,32722,12287,65534,34815,65534,18431]),[P.v])
C.x=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.v])
C.h=H.b(u([0,0,24576,1023,65534,34815,65534,18431]),[P.v])
C.y=H.b(u([0,0,32754,11263,65534,34815,65534,18431]),[P.v])
C.X=H.b(u([0,0,32722,12287,65535,34815,65534,18431]),[P.v])
C.z=H.b(u([0,0,65490,12287,65535,34815,65534,18431]),[P.v])
C.o=H.b(u(["bind","if","ref","repeat","syntax"]),[P.h])
C.p=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])
C.Y=new H.fc(0,{},C.w,[P.h,P.h])
C.Z=new P.bI(null,2)})();(function staticFields(){$.at=0
$.bX=null
$.la=null
$.m_=null
$.lX=null
$.m3=null
$.k3=null
$.k9=null
$.l_=null
$.bN=null
$.cH=null
$.cI=null
$.kV=!1
$.ar=C.f
$.ab=[]
$.aP=null
$.kx=null
$.lg=null
$.lf=null
$.cw=P.kH(P.h,P.fD)
$.lm=null
$.lq=null
$.aC=null
$.lw=null
$.lG=null
$.lI=null
$.iY=null
$.iZ=null
$.j_=null
$.lH=null
$.lp=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"p0","m7",function(){return H.lZ("_$dart_dartClosure")})
u($,"p1","l4",function(){return H.lZ("_$dart_js")})
u($,"p2","m8",function(){return H.aI(H.iB({
toString:function(){return"$receiver$"}}))})
u($,"p3","m9",function(){return H.aI(H.iB({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"p4","ma",function(){return H.aI(H.iB(null))})
u($,"p5","mb",function(){return H.aI(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"p8","me",function(){return H.aI(H.iB(void 0))})
u($,"p9","mf",function(){return H.aI(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"p7","md",function(){return H.aI(H.lC(null))})
u($,"p6","mc",function(){return H.aI(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"pb","mh",function(){return H.aI(H.lC(void 0))})
u($,"pa","mg",function(){return H.aI(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"pp","l5",function(){return P.nv()})
u($,"pc","mi",function(){return P.nq()})
u($,"pq","mm",function(){return H.mZ(H.bM(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.v])))})
u($,"pt","mo",function(){return P.nc("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"pu","mp",function(){return P.nW()})
u($,"pr","mn",function(){return P.lk(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)})
u($,"pj","ml",function(){return Z.ak(0)})
u($,"pd","mj",function(){return Z.ak(511)})
u($,"pl","as",function(){return Z.ak(1)})
u($,"pk","b5",function(){return Z.ak(2)})
u($,"pf","b4",function(){return Z.ak(4)})
u($,"pm","b6",function(){return Z.ak(8)})
u($,"pn","bp",function(){return Z.ak(16)})
u($,"pg","cN",function(){return Z.ak(32)})
u($,"ph","cO",function(){return Z.ak(64)})
u($,"pi","mk",function(){return Z.ak(96)})
u($,"po","bT",function(){return Z.ak(128)})
u($,"pe","b3",function(){return Z.ak(256)})
u($,"p_","m6",function(){return new V.ft(1e-9)})
u($,"oZ","F",function(){return $.m6()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cd,DataView:H.bh,ArrayBufferView:H.bh,Float32Array:H.ce,Float64Array:H.ce,Int16Array:H.hr,Int32Array:H.hs,Int8Array:H.ht,Uint16Array:H.hu,Uint32Array:H.hv,Uint8ClampedArray:H.dj,CanvasPixelArray:H.dj,Uint8Array:H.cf,HTMLAudioElement:W.p,HTMLBRElement:W.p,HTMLBaseElement:W.p,HTMLButtonElement:W.p,HTMLContentElement:W.p,HTMLDListElement:W.p,HTMLDataElement:W.p,HTMLDataListElement:W.p,HTMLDetailsElement:W.p,HTMLDialogElement:W.p,HTMLEmbedElement:W.p,HTMLFieldSetElement:W.p,HTMLHRElement:W.p,HTMLHeadElement:W.p,HTMLHeadingElement:W.p,HTMLHtmlElement:W.p,HTMLIFrameElement:W.p,HTMLInputElement:W.p,HTMLLIElement:W.p,HTMLLabelElement:W.p,HTMLLegendElement:W.p,HTMLLinkElement:W.p,HTMLMapElement:W.p,HTMLMediaElement:W.p,HTMLMenuElement:W.p,HTMLMetaElement:W.p,HTMLMeterElement:W.p,HTMLModElement:W.p,HTMLOListElement:W.p,HTMLObjectElement:W.p,HTMLOptGroupElement:W.p,HTMLOptionElement:W.p,HTMLOutputElement:W.p,HTMLParagraphElement:W.p,HTMLParamElement:W.p,HTMLPictureElement:W.p,HTMLPreElement:W.p,HTMLProgressElement:W.p,HTMLQuoteElement:W.p,HTMLScriptElement:W.p,HTMLShadowElement:W.p,HTMLSlotElement:W.p,HTMLSourceElement:W.p,HTMLSpanElement:W.p,HTMLStyleElement:W.p,HTMLTableCaptionElement:W.p,HTMLTableCellElement:W.p,HTMLTableDataCellElement:W.p,HTMLTableHeaderCellElement:W.p,HTMLTableColElement:W.p,HTMLTextAreaElement:W.p,HTMLTimeElement:W.p,HTMLTitleElement:W.p,HTMLTrackElement:W.p,HTMLUListElement:W.p,HTMLUnknownElement:W.p,HTMLVideoElement:W.p,HTMLDirectoryElement:W.p,HTMLFontElement:W.p,HTMLFrameElement:W.p,HTMLFrameSetElement:W.p,HTMLMarqueeElement:W.p,HTMLElement:W.p,AccessibleNodeList:W.eT,HTMLAnchorElement:W.eU,HTMLAreaElement:W.eV,Blob:W.br,HTMLBodyElement:W.bs,HTMLCanvasElement:W.bt,CDATASection:W.b7,CharacterData:W.b7,Comment:W.b7,ProcessingInstruction:W.b7,Text:W.b7,CSSPerspective:W.fe,CSSCharsetRule:W.H,CSSConditionRule:W.H,CSSFontFaceRule:W.H,CSSGroupingRule:W.H,CSSImportRule:W.H,CSSKeyframeRule:W.H,MozCSSKeyframeRule:W.H,WebKitCSSKeyframeRule:W.H,CSSKeyframesRule:W.H,MozCSSKeyframesRule:W.H,WebKitCSSKeyframesRule:W.H,CSSMediaRule:W.H,CSSNamespaceRule:W.H,CSSPageRule:W.H,CSSRule:W.H,CSSStyleRule:W.H,CSSSupportsRule:W.H,CSSViewportRule:W.H,CSSStyleDeclaration:W.c_,MSStyleCSSProperties:W.c_,CSS2Properties:W.c_,CSSImageValue:W.ai,CSSKeywordValue:W.ai,CSSNumericValue:W.ai,CSSPositionValue:W.ai,CSSResourceValue:W.ai,CSSUnitValue:W.ai,CSSURLImageValue:W.ai,CSSStyleValue:W.ai,CSSMatrixComponent:W.av,CSSRotation:W.av,CSSScale:W.av,CSSSkew:W.av,CSSTranslation:W.av,CSSTransformComponent:W.av,CSSTransformValue:W.fg,CSSUnparsedValue:W.fh,DataTransferItemList:W.fk,HTMLDivElement:W.am,DOMException:W.fl,ClientRectList:W.d1,DOMRectList:W.d1,DOMRectReadOnly:W.d2,DOMStringList:W.fm,DOMTokenList:W.fn,Element:W.Q,AbortPaymentEvent:W.k,AnimationEvent:W.k,AnimationPlaybackEvent:W.k,ApplicationCacheErrorEvent:W.k,BackgroundFetchClickEvent:W.k,BackgroundFetchEvent:W.k,BackgroundFetchFailEvent:W.k,BackgroundFetchedEvent:W.k,BeforeInstallPromptEvent:W.k,BeforeUnloadEvent:W.k,BlobEvent:W.k,CanMakePaymentEvent:W.k,ClipboardEvent:W.k,CloseEvent:W.k,CustomEvent:W.k,DeviceMotionEvent:W.k,DeviceOrientationEvent:W.k,ErrorEvent:W.k,ExtendableEvent:W.k,ExtendableMessageEvent:W.k,FetchEvent:W.k,FontFaceSetLoadEvent:W.k,ForeignFetchEvent:W.k,GamepadEvent:W.k,HashChangeEvent:W.k,InstallEvent:W.k,MediaEncryptedEvent:W.k,MediaKeyMessageEvent:W.k,MediaQueryListEvent:W.k,MediaStreamEvent:W.k,MediaStreamTrackEvent:W.k,MessageEvent:W.k,MIDIConnectionEvent:W.k,MIDIMessageEvent:W.k,MutationEvent:W.k,NotificationEvent:W.k,PageTransitionEvent:W.k,PaymentRequestEvent:W.k,PaymentRequestUpdateEvent:W.k,PopStateEvent:W.k,PresentationConnectionAvailableEvent:W.k,PresentationConnectionCloseEvent:W.k,ProgressEvent:W.k,PromiseRejectionEvent:W.k,PushEvent:W.k,RTCDataChannelEvent:W.k,RTCDTMFToneChangeEvent:W.k,RTCPeerConnectionIceEvent:W.k,RTCTrackEvent:W.k,SecurityPolicyViolationEvent:W.k,SensorErrorEvent:W.k,SpeechRecognitionError:W.k,SpeechRecognitionEvent:W.k,SpeechSynthesisEvent:W.k,StorageEvent:W.k,SyncEvent:W.k,TrackEvent:W.k,TransitionEvent:W.k,WebKitTransitionEvent:W.k,VRDeviceEvent:W.k,VRDisplayEvent:W.k,VRSessionEvent:W.k,MojoInterfaceRequestEvent:W.k,ResourceProgressEvent:W.k,USBConnectionEvent:W.k,IDBVersionChangeEvent:W.k,AudioProcessingEvent:W.k,OfflineAudioCompletionEvent:W.k,WebGLContextEvent:W.k,Event:W.k,InputEvent:W.k,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.an,FileList:W.c2,FileWriter:W.fw,HTMLFormElement:W.fA,Gamepad:W.aw,History:W.fG,HTMLCollection:W.c4,HTMLFormControlsCollection:W.c4,HTMLOptionsCollection:W.c4,ImageData:W.aR,HTMLImageElement:W.bx,KeyboardEvent:W.bz,Location:W.fZ,MediaList:W.hk,MessagePort:W.cb,MIDIInputMap:W.hl,MIDIOutputMap:W.hn,MimeType:W.az,MimeTypeArray:W.hp,PointerEvent:W.aA,MouseEvent:W.aA,DragEvent:W.aA,Document:W.C,DocumentFragment:W.C,HTMLDocument:W.C,ShadowRoot:W.C,XMLDocument:W.C,Attr:W.C,DocumentType:W.C,Node:W.C,NodeList:W.dk,RadioNodeList:W.dk,Plugin:W.aB,PluginArray:W.hE,RTCStatsReport:W.hP,HTMLSelectElement:W.hS,SourceBuffer:W.aD,SourceBufferList:W.i2,SpeechGrammar:W.aE,SpeechGrammarList:W.i3,SpeechRecognitionResult:W.aF,Storage:W.i7,CSSStyleSheet:W.ap,StyleSheet:W.ap,HTMLTableElement:W.dA,HTMLTableRowElement:W.ib,HTMLTableSectionElement:W.ic,HTMLTemplateElement:W.cm,TextTrack:W.aG,TextTrackCue:W.aq,VTTCue:W.aq,TextTrackCueList:W.ig,TextTrackList:W.ih,TimeRanges:W.it,Touch:W.aH,TouchEvent:W.bE,TouchList:W.ix,TrackDefaultList:W.iy,CompositionEvent:W.bj,FocusEvent:W.bj,TextEvent:W.bj,UIEvent:W.bj,URL:W.iU,VideoTrackList:W.j9,WheelEvent:W.bm,Window:W.cu,DOMWindow:W.cu,CSSRuleList:W.jh,ClientRect:W.dW,DOMRect:W.dW,GamepadList:W.jm,NamedNodeMap:W.ed,MozNamedAttrMap:W.ed,SpeechRecognitionResultList:W.jA,StyleSheetList:W.jE,SVGLength:P.aS,SVGLengthList:P.fS,SVGNumber:P.aW,SVGNumberList:P.hz,SVGPointList:P.hH,SVGScriptElement:P.cj,SVGStringList:P.ia,SVGAElement:P.l,SVGAnimateElement:P.l,SVGAnimateMotionElement:P.l,SVGAnimateTransformElement:P.l,SVGAnimationElement:P.l,SVGCircleElement:P.l,SVGClipPathElement:P.l,SVGDefsElement:P.l,SVGDescElement:P.l,SVGDiscardElement:P.l,SVGEllipseElement:P.l,SVGFEBlendElement:P.l,SVGFEColorMatrixElement:P.l,SVGFEComponentTransferElement:P.l,SVGFECompositeElement:P.l,SVGFEConvolveMatrixElement:P.l,SVGFEDiffuseLightingElement:P.l,SVGFEDisplacementMapElement:P.l,SVGFEDistantLightElement:P.l,SVGFEFloodElement:P.l,SVGFEFuncAElement:P.l,SVGFEFuncBElement:P.l,SVGFEFuncGElement:P.l,SVGFEFuncRElement:P.l,SVGFEGaussianBlurElement:P.l,SVGFEImageElement:P.l,SVGFEMergeElement:P.l,SVGFEMergeNodeElement:P.l,SVGFEMorphologyElement:P.l,SVGFEOffsetElement:P.l,SVGFEPointLightElement:P.l,SVGFESpecularLightingElement:P.l,SVGFESpotLightElement:P.l,SVGFETileElement:P.l,SVGFETurbulenceElement:P.l,SVGFilterElement:P.l,SVGForeignObjectElement:P.l,SVGGElement:P.l,SVGGeometryElement:P.l,SVGGraphicsElement:P.l,SVGImageElement:P.l,SVGLineElement:P.l,SVGLinearGradientElement:P.l,SVGMarkerElement:P.l,SVGMaskElement:P.l,SVGMetadataElement:P.l,SVGPathElement:P.l,SVGPatternElement:P.l,SVGPolygonElement:P.l,SVGPolylineElement:P.l,SVGRadialGradientElement:P.l,SVGRectElement:P.l,SVGSetElement:P.l,SVGStopElement:P.l,SVGStyleElement:P.l,SVGSVGElement:P.l,SVGSwitchElement:P.l,SVGSymbolElement:P.l,SVGTSpanElement:P.l,SVGTextContentElement:P.l,SVGTextElement:P.l,SVGTextPathElement:P.l,SVGTextPositioningElement:P.l,SVGTitleElement:P.l,SVGUseElement:P.l,SVGViewElement:P.l,SVGGradientElement:P.l,SVGComponentTransferFunctionElement:P.l,SVGFEDropShadowElement:P.l,SVGMPathElement:P.l,SVGElement:P.l,SVGTransform:P.b_,SVGTransformList:P.iz,AudioBuffer:P.eX,AudioParamMap:P.eY,AudioTrackList:P.f_,AudioContext:P.bq,webkitAudioContext:P.bq,BaseAudioContext:P.bq,OfflineAudioContext:P.hA,WebGL2RenderingContext:P.ds,SQLResultSetRowList:P.i5})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.dh.$nativeSuperclassTag="ArrayBufferView"
H.cx.$nativeSuperclassTag="ArrayBufferView"
H.cy.$nativeSuperclassTag="ArrayBufferView"
H.ce.$nativeSuperclassTag="ArrayBufferView"
H.cz.$nativeSuperclassTag="ArrayBufferView"
H.cA.$nativeSuperclassTag="ArrayBufferView"
H.di.$nativeSuperclassTag="ArrayBufferView"
W.cB.$nativeSuperclassTag="EventTarget"
W.cC.$nativeSuperclassTag="EventTarget"
W.cD.$nativeSuperclassTag="EventTarget"
W.cE.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(B.m1,[])
else B.m1([])})})()
//# sourceMappingURL=test.dart.js.map
