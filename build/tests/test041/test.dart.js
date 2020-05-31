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
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.l2"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.l2"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.l2(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={kJ:function kJ(){},
k7:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
nb:function(a,b,c,d){if(!!J.P(a).$iq)return new H.fx(a,b,[c,d])
return new H.c9(a,b,[c,d])},
kG:function(){return new P.cm("No element")},
n0:function(){return new P.cm("Too many elements")},
nz:function(a,b){var u=J.ai(a)
if(typeof u!=="number")return u.K()
H.dA(a,0,u-1,b)},
dA:function(a,b,c,d){if(c-b<=32)H.ny(a,b,c,d)
else H.nx(a,b,c,d)},
ny:function(a,b,c,d){var u,t,s,r,q,p
for(u=b+1,t=J.au(a);u<=c;++u){s=t.h(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.h(a,r-1),s)
if(typeof q!=="number")return q.a6()
q=q>0}else q=!1
if(!q)break
p=r-1
t.m(a,r,t.h(a,p))
r=p}t.m(a,r,s)}},
nx:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j=C.d.aa(a5-a4+1,6),i=a4+j,h=a5-j,g=C.d.aa(a4+a5,2),f=g-j,e=g+j,d=J.au(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.a6()
if(a2>0){u=b
b=c
c=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a6()
if(a2>0){u=a1
a1=a0
a0=u}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.a6()
if(a2>0){u=a
a=c
c=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a6()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.a6()
if(a2>0){u=a0
a0=c
c=u}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.a6()
if(a2>0){u=a0
a0=a
a=u}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.a6()
if(a2>0){u=a1
a1=b
b=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a6()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a6()
if(a2>0){u=a1
a1=a0
a0=u}d.m(a3,i,c)
d.m(a3,g,a)
d.m(a3,h,a1)
d.m(a3,f,d.h(a3,a4))
d.m(a3,e,d.h(a3,a5))
t=a4+1
s=a5-1
if(J.L(a6.$2(b,a0),0)){for(r=t;r<=s;++r){q=d.h(a3,r)
p=a6.$2(q,b)
if(p===0)continue
if(typeof p!=="number")return p.O()
if(p<0){if(r!==t){d.m(a3,r,d.h(a3,t))
d.m(a3,t,q)}++t}else for(;!0;){p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.a6()
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
if(typeof k!=="number")return k.a6()
if(k>0)for(;!0;){p=a6.$2(d.h(a3,s),a0)
if(typeof p!=="number")return p.a6()
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
H.dA(a3,a4,t-2,a6)
H.dA(a3,s+2,a5,a6)
if(m)return
if(t<i&&s>h){for(;J.L(a6.$2(d.h(a3,t),b),0);)++t
for(;J.L(a6.$2(d.h(a3,s),a0),0);)--s
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
break}}H.dA(a3,t,s,a6)}else H.dA(a3,t,s,a6)},
n:function n(a){this.a=a},
q:function q(){},
dj:function dj(){},
bh:function bh(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c9:function c9(a,b,c){this.a=a
this.b=b
this.$ti=c},
fx:function fx(a,b,c){this.a=a
this.b=b
this.$ti=c},
hc:function hc(a,b){this.a=null
this.b=a
this.c=b},
hd:function hd(a,b,c){this.a=a
this.b=b
this.$ti=c},
cx:function cx(a,b,c){this.a=a
this.b=b
this.$ti=c},
jb:function jb(a,b){this.a=a
this.b=b},
d8:function d8(){},
iR:function iR(){},
dP:function dP(){},
mU:function(){throw H.c(P.y("Cannot modify unmodifiable Map"))},
cQ:function(a){var u,t=H.pa(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
oV:function(a){return v.types[a]},
me:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.P(a).$iA},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a6(a)
if(typeof u!=="string")throw H.c(H.ac(a))
return u},
cj:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
np:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.d(p,3)
u=p[3]
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.W(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.a.E(s,q)|32)>t)return}return parseInt(a,b)},
ck:function(a){return H.ng(a)+H.m5(H.cO(a),0,null)},
ng:function(a){var u,t,s,r,q,p,o,n=J.P(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.W||!!n.$ibH){r=C.w(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cQ(t.length>1&&C.a.E(t,0)===36?C.a.ag(t,1):t)},
nh:function(){if(!!self.location)return self.location.href
return},
lz:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
nq:function(a){var u,t,s,r=H.b([],[P.v])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.m)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ac(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.d.aS(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.c(H.ac(s))}return H.lz(r)},
lA:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ac(s))
if(s<0)throw H.c(H.ac(s))
if(s>65535)return H.nq(a)}return H.lz(a)},
nr:function(a,b,c){var u,t,s,r
if(typeof c!=="number")return c.ik()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
if(s<c)r=s
else r=c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
bC:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.aS(u,10))>>>0,56320|u&1023)}}throw H.c(P.W(a,0,1114111,null,null))},
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
r:function(a){throw H.c(H.ac(a))},
d:function(a,b){if(a==null)J.ai(a)
throw H.c(H.bR(a,b))},
bR:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.an(!0,b,s,null)
u=J.ai(a)
if(!(b<0)){if(typeof u!=="number")return H.r(u)
t=b>=u}else t=!0
if(t)return P.N(b,a,s,null,u)
return P.dv(b,s)},
oO:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bD(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bD(a,c,!0,b,"end",u)
return new P.an(!0,b,"end",null)},
ac:function(a){return new P.an(!0,a,null,null)},
oK:function(a){if(typeof a!=="number")throw H.c(H.ac(a))
return a},
c:function(a){var u
if(a==null)a=new P.ds()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.mk})
u.name=""}else u.toString=H.mk
return u},
mk:function(){return J.a6(this.dartException)},
t:function(a){throw H.c(a)},
m:function(a){throw H.c(P.aR(a))},
aK:function(a){var u,t,s,r,q,p
a=H.mi(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iG(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iH:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
lJ:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lv:function(a,b){return new H.hH(a,b==null?null:b.method)},
kK:function(a,b){var u=b==null,t=u?null:b.method
return new H.h_(a,t,u?null:b.receiver)},
ag:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.ks(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.aS(t,16)&8191)===10)switch(s){case 438:return f.$1(H.kK(H.e(u)+" (Error "+s+")",g))
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
i=r.aq(u)
if(i!=null)return f.$1(H.kK(u,i))
else{i=q.aq(u)
if(i!=null){i.method="call"
return f.$1(H.kK(u,i))}else{i=p.aq(u)
if(i==null){i=o.aq(u)
if(i==null){i=n.aq(u)
if(i==null){i=m.aq(u)
if(i==null){i=l.aq(u)
if(i==null){i=o.aq(u)
if(i==null){i=k.aq(u)
if(i==null){i=j.aq(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.lv(u,i))}}return f.$1(new H.iQ(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dC()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.an(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dC()
return a},
l4:function(a){var u
if(a==null)return new H.ev(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.ev(a)},
oS:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.m(0,a[u],a[t])}return b},
p0:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.w("Unsupported number of arguments for wrapped closure"))},
bQ:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.p0)
a.$identity=u
return u},
mT:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.ig().constructor.prototype):Object.create(new H.bW(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aw
if(typeof t!=="number")return t.B()
$.aw=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.lj(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.mP(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.lj(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
mP:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.oV,a)
if(typeof a=="function")if(b)return a
else{u=c?H.li:H.kw
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.c("Error in functionType of tearoff")},
mQ:function(a,b,c,d){var u=H.kw
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lj:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mS(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mQ(t,!r,u,b)
if(t===0){r=$.aw
if(typeof r!=="number")return r.B()
$.aw=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bX
return new Function(r+H.e(q==null?$.bX=H.fa("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aw
if(typeof r!=="number")return r.B()
$.aw=r+1
o+=r
r="return function("+o+"){return this."
q=$.bX
return new Function(r+H.e(q==null?$.bX=H.fa("self"):q)+"."+H.e(u)+"("+o+");}")()},
mR:function(a,b,c,d){var u=H.kw,t=H.li
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
if(n==null)n=$.bX=H.fa("self")
u=$.lh
if(u==null)u=$.lh=H.fa("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.mR(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.aw
if(typeof u!=="number")return u.B()
$.aw=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.aw
if(typeof u!=="number")return u.B()
$.aw=u+1
return new Function(n+u+"}")()},
l2:function(a,b,c,d,e,f,g){return H.mT(a,b,c,d,!!e,!!f,g)},
kw:function(a){return a.a},
li:function(a){return a.c},
fa:function(a){var u,t,s,r=new H.bW("self","target","receiver","name"),q=J.kH(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
p4:function(a,b){throw H.c(H.mO(a,H.cQ(b.substring(2))))},
i:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.P(a)[b]
else u=!0
if(u)return a
H.p4(a,b)},
oQ:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
mO:function(a,b){return new H.fb("CastError: "+P.kE(a)+": type '"+H.e(H.oG(a))+"' is not a subtype of type '"+b+"'")},
oG:function(a){var u,t=J.P(a)
if(!!t.$ibY){u=H.oQ(t)
if(u!=null)return H.p5(u)
return"Closure"}return H.ck(a)},
p9:function(a){throw H.c(new P.fo(a))},
nv:function(a){return new H.i_(a)},
mc:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
cO:function(a){if(a==null)return
return a.$ti},
pL:function(a,b,c){return H.kr(a["$a"+H.e(c)],H.cO(b))},
oU:function(a,b,c,d){var u=H.kr(a["$a"+H.e(c)],H.cO(b))
return u==null?null:u[d]},
l3:function(a,b,c){var u=H.kr(a["$a"+H.e(b)],H.cO(a))
return u==null?null:u[c]},
b4:function(a,b){var u=H.cO(a)
return u==null?null:u[b]},
p5:function(a){return H.bp(a,null)},
bp:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cQ(a[0].name)+H.m5(a,1,b)
if(typeof a=="function")return H.cQ(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.e(b[t])}if('func' in a)return H.ob(a,b)
if('futureOr' in a)return"FutureOr<"+H.bp("type" in a?a.type:null,b)+">"
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
p=C.a.B(p,a0[m])
l=u[q]
if(l!=null&&l!==P.a2)p+=" extends "+H.bp(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bp(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bp(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bp(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.oR(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.bp(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
m5:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.Q("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bp(p,c)}return"<"+u.i(0)+">"},
kr:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
pJ:function(a,b,c){return a.apply(b,H.kr(J.P(b)["$a"+H.e(c)],H.cO(b)))},
pK:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
p1:function(a){var u,t,s,r,q=$.md.$1(a),p=$.k5[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kb[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.ma.$2(a,q)
if(q!=null){p=$.k5[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kb[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kp(u)
$.k5[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kb[q]=u
return u}if(s==="-"){r=H.kp(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.mg(a,u)
if(s==="*")throw H.c(P.iP(q))
if(v.leafTags[q]===true){r=H.kp(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.mg(a,u)},
mg:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.l6(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kp:function(a){return J.l6(a,!1,null,!!a.$iA)},
p2:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kp(u)
else return J.l6(u,c,null,null)},
oZ:function(){if(!0===$.l5)return
$.l5=!0
H.p_()},
p_:function(){var u,t,s,r,q,p,o,n
$.k5=Object.create(null)
$.kb=Object.create(null)
H.oY()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.mh.$1(q)
if(p!=null){o=H.p2(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
oY:function(){var u,t,s,r,q,p,o=C.L()
o=H.bP(C.M,H.bP(C.N,H.bP(C.x,H.bP(C.x,H.bP(C.O,H.bP(C.P,H.bP(C.Q(C.w),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.md=new H.k8(r)
$.ma=new H.k9(q)
$.mh=new H.ka(p)},
bP:function(a,b){return a(b)||b},
n4:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.c(P.U("Illegal RegExp pattern ("+String(p)+")",a,null))},
mj:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
oP:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mi:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
l8:function(a,b,c){var u=H.p7(a,b,c)
return u},
p7:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.mi(b),'g'),H.oP(c))},
fh:function fh(){},
fi:function fi(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iG:function iG(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hH:function hH(a,b){this.a=a
this.b=b},
h_:function h_(a,b,c){this.a=a
this.b=b
this.c=c},
iQ:function iQ(a){this.a=a},
ks:function ks(a){this.a=a},
ev:function ev(a){this.a=a
this.b=null},
bY:function bY(){},
ip:function ip(){},
ig:function ig(){},
bW:function bW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fb:function fb(a){this.a=a},
i_:function i_(a){this.a=a},
I:function I(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fZ:function fZ(a){this.a=a},
h2:function h2(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
h3:function h3(a,b){this.a=a
this.$ti=b},
h4:function h4(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
k8:function k8(a){this.a=a},
k9:function k9(a){this.a=a},
ka:function ka(a){this.a=a},
fY:function fY(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bN:function(a){return a},
ne:function(a){return new Int8Array(a)},
aM:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bR(b,a))},
o9:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.oO(a,b,c))
return b},
cf:function cf(){},
bj:function bj(){},
dm:function dm(){},
cg:function cg(){},
dn:function dn(){},
hA:function hA(){},
hB:function hB(){},
hC:function hC(){},
hD:function hD(){},
hE:function hE(){},
dp:function dp(){},
ch:function ch(){},
cB:function cB(){},
cC:function cC(){},
cD:function cD(){},
cE:function cE(){},
oR:function(a){return J.lr(a?Object.keys(a):[],null)},
pa:function(a){return v.mangledGlobalNames[a]},
p3:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
l6:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
k6:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.l5==null){H.oZ()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.iP("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.l9()]
if(r!=null)return r
r=H.p1(a)
if(r!=null)return r
if(typeof a=="function")return C.Y
u=Object.getPrototypeOf(a)
if(u==null)return C.E
if(u===Object.prototype)return C.E
if(typeof s=="function"){Object.defineProperty(s,$.l9(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
n1:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.kv(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.W(a,0,4294967295,"length",null))
return J.lr(new Array(a),b)},
lr:function(a,b){return J.kH(H.b(a,[b]))},
kH:function(a){a.fixed$length=Array
return a},
n2:function(a,b){return J.cT(a,b)},
P:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.de.prototype
return J.dd.prototype}if(typeof a=="string")return J.bf.prototype
if(a==null)return J.df.prototype
if(typeof a=="boolean")return J.fX.prototype
if(a.constructor==Array)return J.be.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bg.prototype
return a}if(a instanceof P.a2)return a
return J.k6(a)},
au:function(a){if(typeof a=="string")return J.bf.prototype
if(a==null)return a
if(a.constructor==Array)return J.be.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bg.prototype
return a}if(a instanceof P.a2)return a
return J.k6(a)},
eU:function(a){if(a==null)return a
if(a.constructor==Array)return J.be.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bg.prototype
return a}if(a instanceof P.a2)return a
return J.k6(a)},
oT:function(a){if(typeof a=="number")return J.c6.prototype
if(typeof a=="string")return J.bf.prototype
if(a==null)return a
if(!(a instanceof P.a2))return J.bH.prototype
return a},
cN:function(a){if(typeof a=="string")return J.bf.prototype
if(a==null)return a
if(!(a instanceof P.a2))return J.bH.prototype
return a},
bT:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bg.prototype
return a}if(a instanceof P.a2)return a
return J.k6(a)},
L:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.P(a).t(a,b)},
bV:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.me(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.au(a).h(a,b)},
kt:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.me(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.eU(a).m(a,b,c)},
mF:function(a,b){return J.cN(a).E(a,b)},
mG:function(a,b,c){return J.bT(a).fZ(a,b,c)},
mH:function(a,b,c,d){return J.bT(a).hg(a,b,c,d)},
mI:function(a,b){return J.cN(a).a_(a,b)},
cT:function(a,b){return J.oT(a).aW(a,b)},
ku:function(a,b){return J.au(a).C(a,b)},
eX:function(a,b){return J.eU(a).J(a,b)},
mJ:function(a,b,c,d){return J.bT(a).hy(a,b,c,d)},
lb:function(a,b){return J.eU(a).F(a,b)},
mK:function(a){return J.bT(a).ghl(a)},
lc:function(a){return J.bT(a).gc4(a)},
cU:function(a){return J.P(a).gI(a)},
aO:function(a){return J.eU(a).gR(a)},
ai:function(a){return J.au(a).gl(a)},
ld:function(a){return J.eU(a).i1(a)},
mL:function(a,b){return J.bT(a).i4(a,b)},
mM:function(a,b,c){return J.cN(a).u(a,b,c)},
mN:function(a){return J.cN(a).ie(a)},
a6:function(a){return J.P(a).i(a)},
a:function a(){},
fX:function fX(){},
df:function df(){},
dg:function dg(){},
hL:function hL(){},
bH:function bH(){},
bg:function bg(){},
be:function be(a){this.$ti=a},
kI:function kI(a){this.$ti=a},
a7:function a7(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c6:function c6(){},
de:function de(){},
dd:function dd(){},
bf:function bf(){}},P={
nK:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.oH()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bQ(new P.jd(s),1)).observe(u,{childList:true})
return new P.jc(s,u,t)}else if(self.setImmediate!=null)return P.oI()
return P.oJ()},
nL:function(a){self.scheduleImmediate(H.bQ(new P.je(a),0))},
nM:function(a){self.setImmediate(H.bQ(new P.jf(a),0))},
nN:function(a){P.kR(C.n,a)},
kR:function(a,b){var u=C.d.aa(a.a,1000)
return P.nU(u<0?0:u,b)},
lI:function(a,b){var u=C.d.aa(a.a,1000)
return P.nV(u<0?0:u,b)},
nU:function(a,b){var u=new P.eB()
u.eD(a,b)
return u},
nV:function(a,b){var u=new P.eB()
u.eE(a,b)
return u},
pG:function(a){return new P.bJ(a,1)},
nQ:function(){return C.a6},
nR:function(a){return new P.bJ(a,3)},
oe:function(a,b){return new P.jI(a,[b])},
oA:function(){var u,t
for(;u=$.bO,u!=null;){$.cM=null
t=u.b
$.bO=t
if(t==null)$.cL=null
u.a.$0()}},
oF:function(){$.l0=!0
try{P.oA()}finally{$.cM=null
$.l0=!1
if($.bO!=null)$.la().$1(P.mb())}},
oD:function(a){var u=new P.dX(a)
if($.bO==null){$.bO=$.cL=u
if(!$.l0)$.la().$1(P.mb())}else $.cL=$.cL.b=u},
oE:function(a){var u,t,s=$.bO
if(s==null){P.oD(a)
$.cM=$.cL
return}u=new P.dX(a)
t=$.cM
if(t==null){u.b=s
$.bO=$.cM=u}else{u.b=t.b
$.cM=t.b=u
if(u.b==null)$.cL=u}},
lH:function(a,b){var u=$.at
if(u===C.f)return P.kR(a,b)
return P.kR(a,u.hm(b))},
nC:function(a,b){var u=$.at
if(u===C.f)return P.lI(a,b)
return P.lI(a,u.du(b,P.dI))},
m6:function(a,b,c,d,e){var u={}
u.a=d
P.oE(new P.k3(u,e))},
oB:function(a,b,c,d){var u,t=$.at
if(t===c)return d.$0()
$.at=c
u=t
try{t=d.$0()
return t}finally{$.at=u}},
oC:function(a,b,c,d,e){var u,t=$.at
if(t===c)return d.$1(e)
$.at=c
u=t
try{t=d.$1(e)
return t}finally{$.at=u}},
jd:function jd(a){this.a=a},
jc:function jc(a,b,c){this.a=a
this.b=b
this.c=c},
je:function je(a){this.a=a},
jf:function jf(a){this.a=a},
eB:function eB(){this.c=0},
jM:function jM(a,b){this.a=a
this.b=b},
jL:function jL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bJ:function bJ(a,b){this.a=a
this.b=b},
bK:function bK(a){var _=this
_.a=a
_.d=_.c=_.b=null},
jI:function jI(a,b){this.a=a
this.$ti=b},
dX:function dX(a){this.a=a
this.b=null},
dE:function dE(){},
ij:function ij(){},
dI:function dI(){},
jV:function jV(){},
k3:function k3(a,b){this.a=a
this.b=b},
jt:function jt(){},
ju:function ju(a,b){this.a=a
this.b=b},
jv:function jv(a,b,c){this.a=a
this.b=b
this.c=c},
n6:function(a,b){return new H.I([a,b])},
kL:function(a,b){return new H.I([a,b])},
n8:function(a){return H.oS(a,new H.I([null,null]))},
c8:function(a){return new P.jq([a])},
kW:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
nT:function(a,b){var u=new P.ec(a,b)
u.c=a.e
return u},
n_:function(a,b,c){var u,t
if(P.l1(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.h])
$.ab.push(a)
try{P.od(a,u)}finally{if(0>=$.ab.length)return H.d($.ab,-1)
$.ab.pop()}t=P.lF(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
kF:function(a,b,c){var u,t
if(P.l1(a))return b+"..."+c
u=new P.Q(b)
$.ab.push(a)
try{t=u
t.a=P.lF(t.a,a,", ")}finally{if(0>=$.ab.length)return H.d($.ab,-1)
$.ab.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
l1:function(a){var u,t
for(u=$.ab.length,t=0;t<u;++t)if(a===$.ab[t])return!0
return!1},
od:function(a,b){var u,t,s,r,q,p,o,n=a.gR(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.v())return
u=H.e(n.gA(n))
b.push(u)
m+=u.length+2;++l}if(!n.v()){if(l<=5)return
if(0>=b.length)return H.d(b,-1)
t=b.pop()
if(0>=b.length)return H.d(b,-1)
s=b.pop()}else{r=n.gA(n);++l
if(!n.v()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.d(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gA(n);++l
for(;n.v();r=q,q=p){p=n.gA(n);++l
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
n7:function(a,b,c){var u=P.n6(b,c)
a.F(0,new P.h5(u))
return u},
ls:function(a,b){var u,t,s=P.c8(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.m)(a),++t)s.n(0,a[t])
return s},
kN:function(a){var u,t={}
if(P.l1(a))return"{...}"
u=new P.Q("")
try{$.ab.push(a)
u.a+="{"
t.a=!0
J.lb(a,new P.ha(t,u))
u.a+="}"}finally{if(0>=$.ab.length)return H.d($.ab,-1)
$.ab.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jq:function jq(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jr:function jr(a){this.a=a
this.c=this.b=null},
ec:function ec(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fV:function fV(){},
h5:function h5(a){this.a=a},
h6:function h6(){},
x:function x(){},
h9:function h9(){},
ha:function ha(a,b){this.a=a
this.b=b},
a1:function a1(){},
jN:function jN(){},
hb:function hb(){},
dQ:function dQ(a,b){this.a=a
this.$ti=b},
jx:function jx(){},
ed:function ed(){},
eH:function eH(){},
nF:function(a,b,c,d){if(b instanceof Uint8Array)return P.nG(!1,b,c,d)
return},
nG:function(a,b,c,d){var u,t,s=$.mx()
if(s==null)return
u=0===c
if(u&&!0)return P.kU(s,b)
t=b.length
d=P.b1(c,d,t)
if(u&&d===t)return P.kU(s,b)
return P.kU(s,b.subarray(c,d))},
kU:function(a,b){if(P.nI(b))return
return P.nJ(a,b)},
nJ:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ag(t)}return},
nI:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
nH:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ag(t)}return},
m8:function(a,b,c){var u,t,s
if(typeof c!=="number")return H.r(c)
u=J.au(a)
t=b
for(;t<c;++t){s=u.h(a,t)
if(typeof s!=="number")return s.aj()
if((s&127)!==s)return t-b}return c-b},
lg:function(a,b,c,d,e,f){if(C.d.bh(f,4)!==0)throw H.c(P.U("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.U("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.U("Invalid base64 padding, more than two '=' characters",a,b))},
f7:function f7(){},
f8:function f8(){},
fd:function fd(){},
fj:function fj(){},
fz:function fz(){},
fS:function fS(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
fR:function fR(a){this.a=a},
iZ:function iZ(){},
j0:function j0(){},
jT:function jT(a){this.b=0
this.c=a},
j_:function j_(a){this.a=a},
jS:function jS(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
eV:function(a,b,c){var u=H.np(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.U(a,null,null))},
mY:function(a){if(a instanceof H.bY)return a.i(0)
return"Instance of '"+H.e(H.ck(a))+"'"},
n9:function(a,b,c){var u,t,s=J.n1(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
kM:function(a,b,c){var u,t=H.b([],[c])
for(u=J.aO(a);u.v();)t.push(u.gA(u))
if(b)return t
return J.kH(t)},
cn:function(a,b,c){var u,t
if(typeof a==="object"&&a!==null&&a.constructor===Array){u=a.length
c=P.b1(b,c,u)
if(b<=0){if(typeof c!=="number")return c.O()
t=c<u}else t=!0
return H.lA(t?C.b.cL(a,b,c):a)}if(!!J.P(a).$ich)return H.nr(a,b,P.b1(b,c,a.length))
return P.nA(a,b,c)},
nA:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.c(P.W(b,0,J.ai(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.W(c,b,J.ai(a),q,q))
t=J.aO(a)
for(s=0;s<b;++s)if(!t.v())throw H.c(P.W(b,0,s,q,q))
r=[]
if(u)for(;t.v();)r.push(t.gA(t))
else for(s=b;s<c;++s){if(!t.v())throw H.c(P.W(c,b,s,q,q))
r.push(t.gA(t))}return H.lA(r)},
nt:function(a){return new H.fY(a,H.n4(a,!1,!0,!1,!1,!1))},
lF:function(a,b,c){var u=J.aO(b)
if(!u.v())return a
if(c.length===0){do a+=H.e(u.gA(u))
while(u.v())}else{a+=H.e(u.gA(u))
for(;u.v();)a=a+c+H.e(u.gA(u))}return a},
lL:function(){var u=H.nh()
if(u!=null)return P.nE(u)
throw H.c(P.y("'Uri.base' is not supported"))},
eI:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.e){u=$.mD().b
if(typeof b!=="string")H.t(H.ac(b))
u=u.test(b)}else u=!1
if(u)return b
t=c.ghx().c6(b)
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
d3:function(a){if(a>=10)return""+a
return"0"+a},
lk:function(a){return new P.ba(1000*a)},
kE:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a6(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mY(a)},
cV:function(a){return new P.an(!1,null,null,a)},
kv:function(a,b,c){return new P.an(!0,a,b,c)},
dv:function(a,b){return new P.bD(null,null,!0,a,b,"Value not in range")},
W:function(a,b,c,d,e){return new P.bD(b,c,!0,a,d,"Invalid value")},
b1:function(a,b,c){var u
if(typeof a!=="number")return H.r(a)
if(0<=a){if(typeof c!=="number")return H.r(c)
u=a>c}else u=!0
if(u)throw H.c(P.W(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.r(c)
u=b>c}else u=!0
if(u)throw H.c(P.W(b,a,c,"end",null))
return b}return c},
lB:function(a,b){if(typeof a!=="number")return a.O()
if(a<0)throw H.c(P.W(a,0,null,b,null))},
N:function(a,b,c,d,e){var u=e==null?J.ai(b):e
return new P.fU(u,!0,a,c,"Index out of range")},
y:function(a){return new P.iS(a)},
iP:function(a){return new P.iO(a)},
lE:function(a){return new P.cm(a)},
aR:function(a){return new P.fg(a)},
w:function(a){return new P.e5(a)},
U:function(a,b,c){return new P.fJ(a,b,c)},
na:function(a,b,c){var u,t,s=H.b([],[c])
C.b.sl(s,a)
for(u=0;u<a;++u){t=b.$1(u)
if(u>=s.length)return H.d(s,u)
s[u]=t}return s},
l7:function(a){H.p3(a)},
nE:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.a.E(a,4)^58)*3|C.a.E(a,0)^100|C.a.E(a,1)^97|C.a.E(a,2)^116|C.a.E(a,3)^97)>>>0
if(u===0)return P.lK(e<e?C.a.u(a,0,e):a,5,f).geg()
else if(u===32)return P.lK(C.a.u(a,5,e),0,f).geg()}t=new Array(8)
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
if(P.m7(a,0,e,0,s)>=14)s[7]=e
r=s[1]
if(typeof r!=="number")return r.ij()
if(r>=0)if(P.m7(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.B()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.O()
if(typeof n!=="number")return H.r(n)
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
l=!1}else{if(!(n<e&&n===o+2&&C.a.af(a,"..",o)))j=n>o+2&&C.a.af(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.a.af(a,"file",0)){if(q<=0){if(!C.a.af(a,"/",o)){i="file:///"
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
a=C.a.aY(a,o,n,"/");++e
n=h}k="file"}else if(C.a.af(a,"http",0)){if(t&&p+3===o&&C.a.af(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.a.aY(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.a.af(a,"https",0)){if(t&&p+4===o&&C.a.af(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.a.aY(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.a.u(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.jA(a,r,q,p,o,n,m,k)}return P.nW(a,0,e,r,q,p,o,n,m,k)},
lN:function(a){var u=P.h
return C.b.hC(H.b(a.split("&"),[u]),P.kL(u,u),new P.iX(C.e))},
nD:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.iU(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.a.a_(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.eV(C.a.u(a,s,t),n,n)
if(typeof p!=="number")return p.a6()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.d(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.eV(C.a.u(a,s,c),n,n)
if(typeof p!=="number")return p.a6()
if(p>255)k.$2(l,s)
if(r>=u)return H.d(j,r)
j[r]=p
return j},
lM:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.iV(a),d=new P.iW(e,a)
if(a.length<2)e.$1("address is too short")
u=H.b([],[P.v])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.a.a_(a,t)
if(p===58){if(t===b){++t
if(C.a.a_(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
u.push(-1)
r=!0}else u.push(d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.b.gaA(u)
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
i+=2}else{f=C.d.aS(h,8)
if(i<0||i>=k)return H.d(l,i)
l[i]=f
f=i+1
if(f>=k)return H.d(l,f)
l[f]=h&255
i+=2}}return l},
nW:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.o3(a,b,d)
else{if(d===b)P.bM(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.o4(a,u,e-1):""
s=P.o0(a,e,f,!1)
if(typeof f!=="number")return f.B()
r=f+1
if(typeof g!=="number")return H.r(g)
q=r<g?P.o2(P.eV(C.a.u(a,r,g),new P.jO(a,f),n),j):n}else{q=n
s=q
t=""}p=P.o1(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.O()
o=h<i?P.kY(a,h+1,i,n):n
return new P.bL(j,t,s,q,p,o,i<c?P.o_(a,i+1,c):n)},
m_:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bM:function(a,b,c){throw H.c(P.U(c,a,b))},
o2:function(a,b){if(a!=null&&a===P.m_(b))return
return a},
o0:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.a.a_(a,b)===91){if(typeof c!=="number")return c.K()
u=c-1
if(C.a.a_(a,u)!==93)P.bM(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.nY(a,t,u)
if(typeof s!=="number")return s.O()
if(s<u){r=s+1
q=P.m4(a,C.a.af(a,"25",r)?s+3:r,u,"%25")}else q=""
P.lM(a,t,s)
return C.a.u(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.r(c)
p=b
for(;p<c;++p)if(C.a.a_(a,p)===58){s=C.a.bq(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.m4(a,C.a.af(a,"25",r)?s+3:r,c,"%25")}else q=""
P.lM(a,b,s)
return"["+C.a.u(a,b,s)+q+"]"}return P.o6(a,b,c)},
nY:function(a,b,c){var u,t=C.a.bq(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.r(c)
u=t<c}else u=!1
return u?t:c},
m4:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.Q(d):null
if(typeof c!=="number")return H.r(c)
u=b
t=u
s=!0
for(;u<c;){r=C.a.a_(a,u)
if(r===37){q=P.kZ(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.Q("")
o=l.a+=C.a.u(a,t,u)
if(p)q=C.a.u(a,u,u+3)
else if(q==="%")P.bM(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.d(C.h,p)
p=(C.h[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.Q("")
if(t<u){l.a+=C.a.u(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.a.a_(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.Q("")
l.a+=C.a.u(a,t,u)
l.a+=P.kX(r)
u+=m
t=u}}}if(l==null)return C.a.u(a,b,c)
if(t<c)l.a+=C.a.u(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
o6:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.r(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.a.a_(a,u)
if(q===37){p=P.kZ(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.Q("")
n=C.a.u(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.a.u(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.d(C.B,o)
o=(C.B[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.Q("")
if(t<u){s.a+=C.a.u(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.d(C.k,o)
o=(C.k[o]&1<<(q&15))!==0}else o=!1
if(o)P.bM(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.a.a_(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.Q("")
n=C.a.u(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.kX(q)
u+=l
t=u}}}}if(s==null)return C.a.u(a,b,c)
if(t<c){n=C.a.u(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
o3:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.m1(C.a.E(a,b)))P.bM(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.a.E(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.d(C.m,r)
r=(C.m[r]&1<<(s&15))!==0}else r=!1
if(!r)P.bM(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.a.u(a,b,c)
return P.nX(t?a.toLowerCase():a)},
nX:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
o4:function(a,b,c){return P.cJ(a,b,c,C.a0,!1)},
o1:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.cJ(a,b,c,C.C,!0):C.i.iA(d,new P.jP(),P.h).j(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.a.a8(u,"/"))u="/"+u
return P.o5(u,e,f)},
o5:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.a.a8(a,"/"))return P.o7(a,!u||c)
return P.o8(a)},
kY:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.c(P.cV("Both query and queryParameters specified"))
return P.cJ(a,b,c,C.l,!0)}if(d==null)return
u=new P.Q("")
t.a=""
d.F(0,new P.jQ(new P.jR(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
o_:function(a,b,c){return P.cJ(a,b,c,C.l,!0)},
kZ:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.a.a_(a,b+1)
t=C.a.a_(a,p)
s=H.k7(u)
r=H.k7(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.d.aS(q,4)
if(p>=8)return H.d(C.h,p)
p=(C.h[p]&1<<(q&15))!==0}else p=!1
if(p)return H.bC(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.a.u(a,b,b+3).toUpperCase()
return},
kX:function(a){var u,t,s,r,q,p,o,n,m="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.b(u,[P.v])
t[0]=37
t[1]=C.a.E(m,a>>>4)
t[2]=C.a.E(m,a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.b(u,[P.v])
for(u=t.length,q=0;--r,r>=0;s=128){p=C.d.h8(a,6*r)&63|s
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
q+=3}}return P.cn(t,0,null)},
cJ:function(a,b,c,d,e){var u=P.m3(a,b,c,d,e)
return u==null?C.a.u(a,b,c):u},
m3:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.O()
if(typeof c!=="number")return H.r(c)
if(!(o<c))break
c$0:{u=C.a.a_(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.d(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.kZ(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.d(C.k,t)
t=(C.k[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.bM(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.a.a_(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.kX(u)}}if(m==null)m=new P.Q("")
m.a+=C.a.u(a,n,o)
m.a+=H.e(s)
if(typeof r!=="number")return H.r(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.O()
if(n<c)m.a+=C.a.u(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
m2:function(a){if(C.a.a8(a,"."))return!0
return C.a.dZ(a,"/.")!==-1},
o8:function(a){var u,t,s,r,q,p,o
if(!P.m2(a))return a
u=H.b([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.L(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.d(u,-1)
u.pop()
if(u.length===0)u.push("")}r=!0}else if("."===p)r=!0
else{u.push(p)
r=!1}}if(r)u.push("")
return C.b.j(u,"/")},
o7:function(a,b){var u,t,s,r,q,p
if(!P.m2(a))return!b?P.m0(a):a
u=H.b([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.b.gaA(u)!==".."){if(0>=u.length)return H.d(u,-1)
u.pop()
r=!0}else{u.push("..")
r=!1}else if("."===p)r=!0
else{u.push(p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.d(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.b.gaA(u)==="..")u.push("")
if(!b){if(0>=u.length)return H.d(u,0)
t=P.m0(u[0])
if(0>=u.length)return H.d(u,0)
u[0]=t}return C.b.j(u,"/")},
m0:function(a){var u,t,s,r=a.length
if(r>=2&&P.m1(J.mF(a,0)))for(u=1;u<r;++u){t=C.a.E(a,u)
if(t===58)return C.a.u(a,0,u)+"%3A"+C.a.ag(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.d(C.m,s)
s=(C.m[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
nZ:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.a.E(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.cV("Invalid URL encoding"))}}return u},
l_:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.a.E(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.e!==d)s=!1
else s=!0
if(s)return C.a.u(a,b,c)
else r=new H.n(C.a.u(a,b,c))}else{r=H.b([],[P.v])
for(s=a.length,q=b;q<c;++q){t=C.a.E(a,q)
if(t>127)throw H.c(P.cV("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.cV("Truncated URI"))
r.push(P.nZ(a,q+1))
q+=2}else if(t===43)r.push(32)
else r.push(t)}}return new P.j_(!1).c6(r)},
m1:function(a){var u=a|32
return 97<=u&&u<=122},
lK:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.b([b-1],[P.v])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.a.E(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.U(m,a,t))}}if(s<0&&t>b)throw H.c(P.U(m,a,t))
for(;r!==44;){l.push(t);++t
for(q=-1;t<u;++t){r=C.a.E(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)l.push(q)
else{p=C.b.gaA(l)
if(r!==44||t!==p+7||!C.a.af(a,"base64",p+1))throw H.c(P.U("Expecting '='",a,t))
break}}l.push(t)
o=t+1
if((l.length&1)===1)a=C.K.hM(0,a,o,u)
else{n=P.m3(a,o,u,C.l,!0)
if(n!=null)a=C.a.aY(a,o,u,n)}return new P.iT(a,l,c)},
oa:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.na(22,new P.jZ(),P.bF),n=new P.jY(o),m=new P.k_(),l=new P.k0(),k=n.$2(0,225)
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
m7:function(a,b,c,d,e){var u,t,s,r,q,p=$.mE()
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
aN:function aN(){},
ae:function ae(a,b){this.a=a
this.b=b},
K:function K(){},
ba:function ba(a){this.a=a},
fv:function fv(){},
fw:function fw(){},
bw:function bw(){},
ds:function ds(){},
an:function an(a,b,c,d){var _=this
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
fU:function fU(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iS:function iS(a){this.a=a},
iO:function iO(a){this.a=a},
cm:function cm(a){this.a=a},
fg:function fg(a){this.a=a},
hK:function hK(){},
dC:function dC(){},
fo:function fo(a){this.a=a},
e5:function e5(a){this.a=a},
fJ:function fJ(a,b,c){this.a=a
this.b=b
this.c=c},
fL:function fL(){},
v:function v(){},
j:function j(){},
fW:function fW(){},
o:function o(){},
T:function T(){},
bk:function bk(){},
ad:function ad(){},
a2:function a2(){},
h:function h(){},
Q:function Q(a){this.a=a},
iX:function iX(a){this.a=a},
iU:function iU(a){this.a=a},
iV:function iV(a){this.a=a},
iW:function iW(a,b){this.a=a
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
jO:function jO(a,b){this.a=a
this.b=b},
jP:function jP(){},
jR:function jR(a,b){this.a=a
this.b=b},
jQ:function jQ(a){this.a=a},
iT:function iT(a,b,c){this.a=a
this.b=b
this.c=c},
jZ:function jZ(){},
jY:function jY(a){this.a=a},
k_:function k_(){},
k0:function k0(){},
jA:function jA(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jj:function jj(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
oN:function(a){var u,t=J.P(a)
if(!!t.$iaU){u=t.gdA(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.eG(a.data,a.height,a.width)},
oM:function(a){if(a instanceof P.eG)return{data:a.a,height:a.b,width:a.c}
return a},
b3:function(a){var u,t,s,r,q
if(a==null)return
u=P.kL(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){q=t[r]
u.m(0,q,a[q])}return u},
oL:function(a){var u={}
a.F(0,new P.k4(u))
return u},
jC:function jC(){},
jE:function jE(a,b){this.a=a
this.b=b},
jF:function jF(a,b){this.a=a
this.b=b},
eG:function eG(a,b,c){this.a=a
this.b=b
this.c=c},
k4:function k4(a){this.a=a},
jD:function jD(a,b){this.a=a
this.b=b},
fF:function fF(a,b){this.a=a
this.b=b},
fG:function fG(){},
fH:function fH(){},
jp:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
nS:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
js:function js(){},
aa:function aa(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aV:function aV(){},
h1:function h1(){},
aZ:function aZ(){},
hI:function hI(){},
hQ:function hQ(){},
cl:function cl(){},
ik:function ik(){},
l:function l(){},
b2:function b2(){},
iF:function iF(){},
ea:function ea(){},
eb:function eb(){},
el:function el(){},
em:function em(){},
ex:function ex(){},
ey:function ey(){},
eE:function eE(){},
eF:function eF(){},
bF:function bF(){},
f1:function f1(){},
f2:function f2(){},
f3:function f3(a){this.a=a},
f4:function f4(){},
br:function br(){},
hJ:function hJ(){},
dY:function dY(){},
dx:function dx(){},
ie:function ie(){},
et:function et(){},
eu:function eu(){}},W={
le:function(){var u=document.createElement("a")
return u},
ky:function(){var u=document.createElement("canvas")
return u},
mX:function(a,b,c){var u=document.body,t=(u&&C.t).ao(u,a,b,c)
t.toString
u=new H.cx(new W.a5(t),new W.fy(),[W.D])
return u.gaL(u)},
kC:function(a){return"wheel"},
c_:function(a){var u,t,s,r="element tag unavailable"
try{u=J.bT(a)
t=u.gec(a)
if(typeof t==="string")r=u.gec(a)}catch(s){H.ag(s)}return r},
lq:function(a){var u=document.createElement("img")
u.src=a
return u},
mZ:function(a){var u,t=document.createElement("input"),s=t
try{s.type=a}catch(u){H.ag(u)}return s},
jo:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lY:function(a,b,c,d){var u=W.jo(W.jo(W.jo(W.jo(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
V:function(a,b,c,d){var u=W.m9(new W.jm(c),W.k)
if(u!=null&&!0)J.mH(a,b,u,!1)
return new W.jl(a,b,u,!1)},
lX:function(a){var u=W.le(),t=window.location
u=new W.cz(new W.jw(u,t))
u.eB(a)
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
lZ:function(){var u=P.h,t=P.ls(C.o,u),s=H.b(["TEMPLATE"],[u])
t=new W.jJ(t,P.c8(u),P.c8(u),P.c8(u),null)
t.eC(null,new H.hd(C.o,new W.jK(),[H.b4(C.o,0),u]),s,null)
return t},
m9:function(a,b){var u=$.at
if(u===C.f)return a
return u.du(a,b)},
p:function p(){},
eY:function eY(){},
eZ:function eZ(){},
f_:function f_(){},
bs:function bs(){},
bt:function bt(){},
bv:function bv(){},
b9:function b9(){},
fk:function fk(){},
H:function H(){},
bZ:function bZ(){},
fl:function fl(){},
aj:function aj(){},
ax:function ax(){},
fm:function fm(){},
fn:function fn(){},
fq:function fq(){},
ap:function ap(){},
fs:function fs(){},
d5:function d5(){},
d6:function d6(){},
ft:function ft(){},
fu:function fu(){},
jh:function jh(a,b){this.a=a
this.b=b},
S:function S(){},
fy:function fy(){},
k:function k(){},
f:function f(){},
aq:function aq(){},
c2:function c2(){},
fE:function fE(){},
fI:function fI(){},
ay:function ay(){},
fQ:function fQ(){},
c4:function c4(){},
aU:function aU(){},
c5:function c5(){},
by:function by(){},
h7:function h7(){},
ht:function ht(){},
cd:function cd(){},
hu:function hu(){},
hv:function hv(a){this.a=a},
hw:function hw(){},
hx:function hx(a){this.a=a},
aB:function aB(){},
hy:function hy(){},
aC:function aC(){},
a5:function a5(a){this.a=a},
D:function D(){},
dq:function dq(){},
aD:function aD(){},
hN:function hN(){},
hY:function hY(){},
hZ:function hZ(a){this.a=a},
i0:function i0(){},
aF:function aF(){},
ib:function ib(){},
aG:function aG(){},
ic:function ic(){},
aH:function aH(){},
ih:function ih(){},
ii:function ii(a){this.a=a},
ar:function ar(){},
dF:function dF(){},
il:function il(){},
im:function im(){},
co:function co(){},
aI:function aI(){},
as:function as(){},
iq:function iq(){},
ir:function ir(){},
iz:function iz(){},
aJ:function aJ(){},
bE:function bE(){},
iD:function iD(){},
iE:function iE(){},
bl:function bl(){},
iY:function iY(){},
ja:function ja(){},
bo:function bo(){},
cy:function cy(){},
ji:function ji(){},
e_:function e_(){},
jn:function jn(){},
ei:function ei(){},
jB:function jB(){},
jG:function jG(){},
jg:function jg(){},
jk:function jk(a){this.a=a},
jl:function jl(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jm:function jm(a){this.a=a},
cz:function cz(a){this.a=a},
M:function M(){},
dr:function dr(a){this.a=a},
hG:function hG(a){this.a=a},
hF:function hF(a,b,c){this.a=a
this.b=b
this.c=c},
eq:function eq(){},
jy:function jy(){},
jz:function jz(){},
jJ:function jJ(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jK:function jK(){},
jH:function jH(){},
d9:function d9(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
aY:function aY(){},
jw:function jw(a,b){this.a=a
this.b=b},
eJ:function eJ(a){this.a=a},
jU:function jU(a){this.a=a},
dZ:function dZ(){},
e0:function e0(){},
e1:function e1(){},
e2:function e2(){},
e3:function e3(){},
e6:function e6(){},
e7:function e7(){},
e8:function e8(){},
e9:function e9(){},
ee:function ee(){},
ef:function ef(){},
eg:function eg(){},
eh:function eh(){},
ej:function ej(){},
ek:function ek(){},
en:function en(){},
eo:function eo(){},
ep:function ep(){},
cF:function cF(){},
cG:function cG(){},
er:function er(){},
es:function es(){},
ew:function ew(){},
ez:function ez(){},
eA:function eA(){},
cH:function cH(){},
cI:function cI(){},
eC:function eC(){},
eD:function eD(){},
eK:function eK(){},
eL:function eL(){},
eM:function eM(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(){},
eR:function eR(){},
eS:function eS(){},
eT:function eT(){}},K={
O:function(a,b){var u,t,s
if(a.length!==1||b.length!==1)throw H.c(P.w("The given low and high character strings for a Range must have one and only one characters."))
u=C.a.E(a,0)
t=C.a.E(b,0)
if(u>t){s=t
t=u
u=s}return new K.hT(u,t)},
u:function(a){var u=new K.i1()
u.ez(a)
return u},
aP:function aP(){},
dc:function dc(){},
bi:function bi(){},
a9:function a9(){this.a=null},
hT:function hT(a,b){this.a=a
this.b=b},
i1:function i1(){this.a=null}},L={
iB:function(){var u=new L.iA(),t=P.h
u.a=new H.I([t,L.dD])
u.b=new H.I([t,L.dK])
u.c=P.c8(t)
return u},
dD:function dD(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dJ:function dJ(a,b,c){this.a=a
this.b=b
this.c=c},
dK:function dK(a){this.b=a
this.c=null},
iA:function iA(){var _=this
_.d=_.c=_.b=_.a=null},
dM:function dM(a){this.b=a
this.a=this.c=null}},O={
kz:function(a){var u=new O.aQ([a])
u.bj(a)
return u},
aQ:function aQ(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cc:function cc(){this.b=this.a=null},
lp:function(a,b){var u,t,s,r=new O.db()
r.r=0
r.scB(null)
r.sbZ(null)
if(a==null){u=$.lO
if(u==null){u=new V.G(1,0)
$.lO=u
t=u}else t=u}else t=a
if(!J.L(r.d,t)){s=r.d
r.d=t
u=new D.z("blurDirection",s,t)
u.b=!0
r.M(u)}r.sdz(b)
r.sc_(null)
r.sb7(0)
return r},
db:function db(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dl:function dl(){var _=this
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
ca:function ca(){},
hg:function hg(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
az:function az(a,b){var _=this
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
dz:function dz(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
dG:function dG(){}},E={
ln:function(a){var u,t=new E.aT()
t.a=""
t.b=!0
u=O.kz(E.aT)
t.y=u
u.b0(t.ghN(),t.ghQ())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.scI(0,a)
return t},
lV:function(){if(J.ku(window.navigator.vendor,"Google"))return C.I
if(J.ku(window.navigator.userAgent,"Firefox"))return C.u
var u=window.navigator.appVersion
if(J.au(u).C(u,"Trident")||C.a.C(u,"Edge"))return C.v
if(J.ku(window.navigator.appName,"Microsoft"))return C.v
return C.J},
lW:function(){var u=window.navigator.appVersion
if(J.au(u).C(u,"Win"))return C.a3
if(C.a.C(u,"Mac"))return C.D
if(C.a.C(u,"Linux"))return C.a4
return C.a5},
nu:function(a,b){var u=new E.hU(a)
u.ey(a,b)
return u},
nB:function(a,b,c,d,e){var u,t,s=J.P(a)
if(!!s.$ibv)return E.lG(a,!0,!0,!0,!1)
u=W.ky()
t=u.style
t.width="100%"
t.height="100%"
s.gc4(a).n(0,u)
return E.lG(u,!0,!0,!0,!1)},
lG:function(a,b,c,d,e){var u,t,s,r,q="mousemove",p=new E.dH(),o=C.j.cE(a,"webgl2",P.n8(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(o==null)H.t(P.w("Failed to get the rendering context for WebGL."))
p.b=a
p.c=o
p.e=E.nu(o,a)
u=new T.iv(o)
u.b=o.getParameter(3379)
u.c=o.getParameter(34076)
u.e=u.d=0
p.f=u
u=new X.dR(a)
t=new X.h0()
t.c=new X.ak(!1,!1,!1)
t.d=P.c8(P.v)
u.b=t
t=new X.hz(u)
t.f=0
t.r=V.b_()
t.x=V.b_()
t.ch=t.Q=1
u.c=t
t=new X.h8(u)
t.r=0
t.x=V.b_()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.iC(u)
t.f=V.b_()
t.r=V.b_()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.z=H.b([],[[P.dE,P.a2]])
t=$.fA
u.Q=(t==null?$.fA=new E.e4(E.lV(),E.lW()):t).a===C.u?0.16666666666666666:0.005555555555555556
s=u.z
r=document
s.push(W.V(r,"contextmenu",u.gfg(),!1))
u.z.push(W.V(a,"focus",u.gfm(),!1))
u.z.push(W.V(a,"blur",u.gfa(),!1))
u.z.push(W.V(r,"keyup",u.gfq(),!1))
u.z.push(W.V(r,"keydown",u.gfo(),!1))
u.z.push(W.V(a,"mousedown",u.gfv(),!1))
u.z.push(W.V(a,"mouseup",u.gfB(),!1))
u.z.push(W.V(a,q,u.gfz(),!1))
s=u.z
W.kC(a)
W.kC(a)
s.push(W.V(a,W.kC(a),u.gfD(),!1))
u.z.push(W.V(r,q,u.gfi(),!1))
u.z.push(W.V(r,"mouseup",u.gfk(),!1))
u.z.push(W.V(r,"pointerlockchange",u.gfF(),!1))
u.z.push(W.V(a,"touchstart",u.gfV(),!1))
u.z.push(W.V(a,"touchend",u.gfR(),!1))
u.z.push(W.V(a,"touchmove",u.gfT(),!1))
p.x=u
p.ch=!0
p.cx=!1
p.cy=new P.ae(Date.now(),!1)
p.db=0
p.d9()
return p},
f9:function f9(){},
aT:function aT(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bu:function bu(a){this.b=a},
bA:function bA(a){this.b=a},
e4:function e4(a,b){this.a=a
this.b=b},
hU:function hU(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hV:function hV(a){this.a=a},
hW:function hW(a){this.a=a},
hX:function hX(a){this.a=a},
dH:function dH(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
iy:function iy(a){this.a=a}},Z={
kV:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.bN(c)),35044)
a.bindBuffer(b,null)
return new Z.dW(b,u)},
am:function(a){return new Z.aL(a)},
dW:function dW(a,b){this.a=a
this.b=b},
cY:function cY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
cw:function cw(a){this.a=a},
b8:function b8(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bx:function bx(a,b,c){this.a=a
this.b=b
this.c=c},
aL:function aL(a){this.a=a}},D={
C:function(){var u=new D.c0()
u.d=0
return u},
fc:function fc(){},
c0:function c0(){var _=this
_.d=_.c=_.b=_.a=null},
fC:function fC(a){this.a=a},
fD:function fD(a){this.a=a},
X:function X(){this.b=null},
bc:function bc(){this.b=null},
bd:function bd(){this.b=null},
z:function z(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
f6:function f6(){},
fr:function fr(){},
a8:function a8(){},
di:function di(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
hO:function hO(){},
id:function id(){}},X={cZ:function cZ(a,b){this.a=a
this.b=b},dh:function dh(a,b){this.a=a
this.b=b},h0:function h0(){var _=this
_.d=_.c=_.b=_.a=null},dk:function dk(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},h8:function h8(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ak:function ak(a,b,c){this.a=a
this.b=b
this.c=c},aX:function aX(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hz:function hz(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ce:function ce(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hP:function hP(){},dL:function dL(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iC:function iC(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dR:function dR(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
lf:function(a,b){var u,t,s,r,q=new X.f5()
q.d=q.c=q.b=q.a=512
q.e=!0
q.f=!1
q.x=q.r=1
q.ch=T.kQ(null)
q.cx=new V.ao(0,0,0,1)
q.cy=!0
q.db=2000
q.dx=!0
q.dy=V.kO()
q.sau(0,512)
q.sap(0,512)
u=new V.ao(0,0,0,1)
if(!q.cx.t(0,u)){t=q.cx
q.cx=u
s=new D.z("color",t,u)
s.b=!0
q.a1(s)}if(q.cy){q.cy=!1
s=new D.z("clearColor",!0,!1)
s.b=!0
q.a1(s)}s=q.db
if(!(Math.abs(s-2000)<$.B().a)){q.db=2000
s=new D.z("depth",s,2000)
s.b=!0
q.a1(s)}if(!q.f){q.f=!0
s=new D.z("autoResize",!1,!0)
s.b=!0
q.a1(s)}s=q.r
if(!(Math.abs(s-1)<$.B().a)){q.r=1
s=new D.z("autoResizeScalarX",s,1)
s.b=!0
q.a1(s)}s=q.x
if(!(Math.abs(s-1)<$.B().a)){q.x=1
s=new D.z("autoResizeScalarY",s,1)
s.b=!0
q.a1(s)}r=V.kO()
if(!J.L(q.dy,r)){t=q.dy
q.dy=r
s=new D.z("region",t,r)
s.b=!0
q.a1(s)}return q},
lo:function(a){var u=new X.fK(),t=new V.ao(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=V.kO()
u.r=t
return u},
lw:function(a){var u,t,s=new X.dt()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gp().n(0,s.geF())
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
f5:function f5(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
kx:function kx(){},
fK:function fK(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fT:function fT(){this.b=this.a=null},
dt:function dt(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
io:function io(){}},V={
fe:function(a,b,c){var u=a/255,t=b/255,s=c/255
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.ao(u,t,s,1)},
pb:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.bh(a-b,u)
return(a<0?a+u:a)+b},
E:function(a,b,c){if(a==null)return C.a.ar("null",c)
return C.a.ar(C.c.ef(Math.abs(a-0)<$.B().a?0:a,b),c+b+1)},
bS:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.h])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.m)(a),++s){r=V.E(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.d(o,q)
u=C.a.ar(o[q],t)
p=o.length
if(q>=p)return H.d(o,q)
o[q]=u}return o},
cP:function(a){return C.c.ia(Math.pow(2,C.X.cl(Math.log(H.oK(a))/Math.log(2))))},
bz:function(){var u=$.lu
return u==null?$.lu=V.aA(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aA:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aW(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
b_:function(){var u=$.ly
return u==null?$.ly=new V.a3(0,0):u},
nf:function(){var u=$.aE
return u==null?$.aE=new V.Y(0,0,0):u},
kO:function(){var u=$.lD
return u==null?$.lD=V.lC(0,0,1,1):u},
lC:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dw(a,b,c,d)},
dV:function(){var u=$.lT
return u==null?$.lT=new V.J(0,0,0):u},
a_:function a_(a,b,c){this.a=a
this.b=b
this.c=c},
ao:function ao(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fB:function fB(a){this.a=a},
cb:function cb(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aW:function aW(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
Y:function Y(a,b,c){this.a=a
this.b=b
this.c=c},
b0:function b0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dw:function dw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
G:function G(a,b){this.a=a
this.b=b},
J:function J(a,b,c){this.a=a
this.b=b
this.c=c},
cv:function cv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
p6:function(a){P.nC(C.U,new V.kq(a))},
nw:function(a){var u=new V.i6()
u.eA(a,!0)
return u},
d_:function d_(){},
kq:function kq(a){this.a=a},
fp:function fp(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fM:function fM(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fP:function fP(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hM:function hM(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hR:function hR(a){this.a=a
this.c=null},
hS:function hS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i6:function i6(){this.b=this.a=null},
i8:function i8(a){this.a=a},
i7:function i7(a){this.a=a},
i9:function i9(a){this.a=a}},U={
kA:function(){var u=new U.ff()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
ff:function ff(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d1:function d1(){this.b=this.a=null},
c3:function c3(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
af:function af(){},
dS:function dS(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dT:function dT(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dU:function dU(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
mf:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="testCanvas",a2=null,a3="blurValue",a4="modifiers",a5=34067,a6=V.nw("Test 041"),a7=W.ky()
a7.className="pageLargeCanvas"
a7.id=a1
a6.a.appendChild(a7)
u=[P.h]
a6.dn(H.b(["Test of the Gaussian blur technique with a solid blur value for the whole image."],u))
a6.hf(H.b(["blurValue"],u))
a6.dn(H.b(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(a1)
if(t==null)H.t(P.w("Failed to find an element with the identifier, testCanvas."))
s=E.nB(t,!0,!0,!0,!1)
r=new U.c3()
r.bj(U.af)
r.b0(r.gf2(),r.gfJ())
r.e=null
r.f=V.bz()
r.r=0
q=s.x
p=new U.dT()
o=U.kA()
o.scD(0,!0)
o.scq(6.283185307179586)
o.scs(0)
o.sal(0,0)
o.scr(100)
o.sX(0)
o.sc8(0.5)
p.b=o
n=p.gaQ()
o.gp().n(0,n)
o=U.kA()
o.scD(0,!0)
o.scq(6.283185307179586)
o.scs(0)
o.sal(0,0)
o.scr(100)
o.sX(0)
o.sc8(0.5)
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
m=new X.ak(!1,!1,!1)
l=p.d
p.d=m
o=new D.z(a4,l,m)
o.b=!0
p.T(o)
o=p.f
if(o!==!1){p.f=!1
o=new D.z("invertX",o,!1)
o.b=!0
p.T(o)}o=p.r
if(o!==!1){p.r=!1
o=new D.z("invertY",o,!1)
o.b=!0
p.T(o)}p.b6(q)
r.n(0,p)
q=s.x
p=new U.dS()
o=U.kA()
o.scD(0,!0)
o.scq(6.283185307179586)
o.scs(0)
o.sal(0,0)
o.scr(100)
o.sX(0)
o.sc8(0.2)
p.b=o
o.gp().n(0,p.gaQ())
p.c=null
p.d=!1
p.e=2.5
p.r=4
p.x=p.y=!1
p.z=0
p.Q=null
p.ch=0
p.cy=p.cx=null
m=new X.ak(!0,!1,!1)
l=p.c
p.c=m
o=new D.z(a4,l,m)
o.b=!0
p.T(o)
p.b6(q)
r.n(0,p)
q=s.x
p=new U.dU()
p.c=0.01
p.e=p.d=0
m=new X.ak(!1,!1,!1)
p.b=m
o=new D.z(a4,a2,m)
o.b=!0
p.T(o)
p.b6(q)
r.n(0,p)
k=V.aA(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
q=new U.d1()
q.a=k
r.n(0,q)
j=X.lw(r)
i=new O.dl()
q=O.kz(V.aW)
i.e=q
q.b0(i.gf6(),i.gf8())
q=new O.az(i,"emission")
q.c=new A.a0(!1,!1,!1)
q.f=new V.a_(0,0,0)
i.f=q
q=new O.az(i,"ambient")
q.c=new A.a0(!1,!1,!1)
q.f=new V.a_(0,0,0)
i.r=q
q=new O.az(i,"diffuse")
q.c=new A.a0(!1,!1,!1)
q.f=new V.a_(0,0,0)
i.x=q
q=new O.az(i,"invDiffuse")
q.c=new A.a0(!1,!1,!1)
q.f=new V.a_(0,0,0)
i.y=q
q=new O.hk(i,"specular")
q.c=new A.a0(!1,!1,!1)
q.f=new V.a_(0,0,0)
q.ch=100
i.z=q
q=new O.hg(i,"bump")
q.c=new A.a0(!1,!1,!1)
i.Q=q
i.ch=null
q=new O.az(i,"reflect")
q.c=new A.a0(!1,!1,!1)
q.f=new V.a_(0,0,0)
i.cx=q
q=new O.hj(i,"refract")
q.c=new A.a0(!1,!1,!1)
q.f=new V.a_(0,0,0)
q.ch=1
i.cy=q
q=new O.hf(i,"alpha")
q.c=new A.a0(!1,!1,!1)
q.f=1
i.db=q
q=new D.di()
q.bj(D.a8)
q.e=H.b([],[D.f6])
q.f=H.b([],[D.fr])
q.r=H.b([],[D.hO])
q.x=H.b([],[D.id])
q.z=q.y=null
q.cG(q.gf4(),q.gfH(),q.gfL())
i.dx=q
p=new O.hi()
p.b=new V.ao(0,0,0,0)
p.c=1
p.d=10
p.e=!1
i.dy=p
p=q.y
q=p==null?q.y=D.C():p
q.n(0,i.gh0())
q=i.dx
p=q.z
q=p==null?q.z=D.C():p
q.n(0,i.gav())
i.fr=null
q=i.r
q.saV(0,new V.a_(0.3,0.3,0.3))
q=i.x
q.saV(0,new V.a_(0.8,0.8,0.8))
q=i.x
p=s.f.hK("../resources/Test.png")
o=q.c
if(!o.b)q.de(new A.a0(o.a,!0,!1))
o=q.d
if(o!==p){if(o!=null)o.gp().W(0,q.gav())
l=q.d
q.d=p
p.gp().n(0,q.gav())
p=new D.z(q.b+".texture2D",l,q.d)
p.b=!0
q.a.M(p)}h=X.lf(!0,!1)
g=new M.d7()
g.a=!0
q=O.kz(E.aT)
g.e=q
q.b0(g.gfc(),g.gfe())
g.y=g.x=g.r=g.f=null
f=X.lo(a2)
g.sb8(a2)
g.saZ(0,f)
g.sbe(a2)
q=g.e
e=F.kP()
F.cK(e,a2,a2,1,1,1,0,0,1)
F.cK(e,a2,a2,1,1,0,1,0,3)
F.cK(e,a2,a2,1,1,0,0,1,2)
F.cK(e,a2,a2,1,1,-1,0,0,0)
F.cK(e,a2,a2,1,1,0,-1,0,0)
F.cK(e,a2,a2,1,1,0,0,-1,3)
e.aG()
q.n(0,E.ln(e))
g.sbe(i)
g.saZ(0,h)
g.sb8(j)
q=s.f
p=q.a
d=p.createTexture()
p.bindTexture(a5,d)
p.texParameteri(a5,10242,10497)
p.texParameteri(a5,10243,10497)
p.texParameteri(a5,10241,9729)
p.texParameteri(a5,10240,9729)
p.bindTexture(a5,a2)
c=new T.iu()
c.a=0
c.b=d
c.c=!1
c.d=0
q.aP(c,d,"../resources/maskonaive/posx.jpg",34069,!1,!1)
q.aP(c,d,"../resources/maskonaive/negx.jpg",34070,!1,!1)
q.aP(c,d,"../resources/maskonaive/posy.jpg",34071,!1,!1)
q.aP(c,d,"../resources/maskonaive/negy.jpg",34072,!1,!1)
q.aP(c,d,"../resources/maskonaive/posz.jpg",34073,!1,!1)
q.aP(c,d,"../resources/maskonaive/negz.jpg",34074,!1,!1)
b=M.kB(a2,a2)
q=new O.dz()
q.b=1.0471975511965976
q.d=new V.a_(1,1,1)
l=q.c
q.c=c
c.gp().n(0,q.gav())
p=new D.z("boxTexture",l,q.c)
p.b=!0
q.M(p)
b.sbe(q)
b.saZ(0,h)
b.sb8(j)
q=h.ch
a=new M.da()
a.a=!0
a.c=X.lf(!0,!1)
p=O.lp(a2,a2)
o=a.gY()
p.gp().n(0,o)
a.d=p
a.e=M.kB(a.c,p)
p=a.c.ch
n=$.lP
p=O.lp(n==null?$.lP=new V.G(0,1):n,p)
p.gp().n(0,o)
a.f=p
a.r=M.kB(a2,p)
a.d.sb7(0)
a.f.sb7(0)
a.d.sdz(q)
a.d.sc_(a2)
a.f.sc_(a2)
a.d.scB(a2)
a.f.scB(a2)
a.d.sbZ(a2)
a.f.sbZ(a2)
a.r.saZ(0,a2)
q=M.al
p=H.b([b,g,a],[q])
o=new M.d0()
o.bj(q)
o.e=!0
o.f=!1
o.r=null
o.b0(o.gfN(),o.gfP())
o.ab(0,p)
q=s.d
if(q!==o){if(q!=null)q.gp().W(0,s.gcQ())
s.d=o
o.gp().n(0,s.gcQ())
s.cR()}a0=new U.kc(a)
q=new V.hR(a3)
u=u.getElementById(a3)
q.c=u
if(u==null)H.t("Failed to find blurValue for RadioGroup")
q.dl(0,"0.0",new U.kd(a0),!0)
q.an(0,"0.1",new U.ke(a0))
q.an(0,"0.2",new U.kh(a0))
q.an(0,"0.3",new U.ki(a0))
q.an(0,"0.4",new U.kj(a0))
q.an(0,"0.5",new U.kk(a0))
q.an(0,"0.6",new U.kl(a0))
q.an(0,"0.7",new U.km(a0))
q.an(0,"0.8",new U.kn(a0))
q.an(0,"0.9",new U.ko(a0))
q.an(0,"1.0",new U.kf(a0))
u=s.Q
if(u==null)u=s.Q=D.C()
q=u.b
u=q==null?u.b=H.b([],[{func:1,ret:-1,args:[D.X]}]):q
u.push(new U.kg(a6,a))
V.p6(s)},
kc:function kc(a){this.a=a},
kd:function kd(a){this.a=a},
ke:function ke(a){this.a=a},
kh:function kh(a){this.a=a},
ki:function ki(a){this.a=a},
kj:function kj(a){this.a=a},
kk:function kk(a){this.a=a},
kl:function kl(a){this.a=a},
km:function km(a){this.a=a},
kn:function kn(a){this.a=a},
ko:function ko(a){this.a=a},
kf:function kf(a){this.a=a},
kg:function kg(a,b){this.a=a
this.b=b}},M={
kB:function(a,b){var u,t,s,r,q,p,o,n,m,l=null,k=new M.d2()
k.a=!0
u=E.ln(l)
t=F.kP()
s=t.a
r=new V.J(-1,-1,1)
r=r.w(0,Math.sqrt(r.H(r)))
q=s.bn(new V.b0(1,2,4,6),V.fe(255,0,0),new V.Y(-1,-1,0),new V.a3(0,1),r,l)
r=t.a
s=new V.J(1,-1,1)
s=s.w(0,Math.sqrt(s.H(s)))
p=r.bn(new V.b0(0,3,4,6),V.fe(0,0,255),new V.Y(1,-1,0),new V.a3(1,1),s,l)
s=t.a
r=new V.J(1,1,1)
r=r.w(0,Math.sqrt(r.H(r)))
o=s.bn(new V.b0(0,2,5,6),V.fe(0,128,0),new V.Y(1,1,0),new V.a3(1,0),r,l)
r=t.a
s=V.b_()
n=new V.J(-1,1,1)
n=n.w(0,Math.sqrt(n.H(n)))
m=r.bn(new V.b0(0,2,4,7),V.fe(255,255,0),new V.Y(-1,1,0),s,n,l)
t.d.hh(H.b([q,p,o,m],[F.bI]))
t.aG()
u.scI(0,t)
k.e=u
k.sb8(l)
k.saZ(0,a)
k.sbe(b)
return k},
d0:function d0(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
d2:function d2(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d7:function d7(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
da:function da(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
al:function al(){}},A={
nc:function(a,b){var u=a.ba,t=new A.he(b,u)
t.bF(b,u)
t.ex(a,b)
return t},
nd:function(a,b,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="MaterialLight_"+a3.gax(a3)+a4.gax(a4)+a5.gax(a5)+a6.gax(a6)+a7.gax(a7)+a8.gax(a8)+a9.gax(a9)+b0.gax(b0)+b1.gax(b1)+"_"
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
d=$.ah()
if(j){u=$.b7()
d=new Z.aL(d.a|u.a)}if(i){u=$.b6()
d=new Z.aL(d.a|u.a)}if(h){u=$.av()
d=new Z.aL(d.a|u.a)}if(g){u=$.b5()
d=new Z.aL(d.a|u.a)}return new A.hh(a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,s,o,k,o,r,f,!0,e,!1,m,r,l,j,i,h,!1,g,a,!1,a0,!1,a2,c.charCodeAt(0)==0?c:c,d)},
k1:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
k2:function(a,b,c){var u,t="Txt, txt2D).rgb;\n"
A.k1(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.eW(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.b){u+="   "+c+"Color = "+c+"Clr*texture2D("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.b){u+="   "+c+"Color = texture2D("+c+t
a.a=u}a.a=u+"}\n"},
oj:function(a,b){var u,t=a.a,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.k1(b,t,"emission")
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
of:function(a,b){var u,t=a.b
if(!(t.a||t.b||!1))return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.k2(b,t,"ambient")
b.a+="\n"},
oh:function(a,b){var u,t=a.c
if(!(t.a||t.b||!1))return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.k2(b,t,"diffuse")
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
if(!(t.a||t.b||!1))return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.k2(b,t,"invDiffuse")
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
if(!(t.a||t.b||!1))return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.k2(b,t,"specular")
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
oo:function(a,b){var u,t=a.r,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.k1(b,t,"reflect")
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
op:function(a,b){var u,t=a.x,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.k1(b,t,"refract")
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
og:function(a,b,c){var u,t,s,r,q,p,o=b.b
if(o<=0)return
u=b.a
t="barLight"+H.e(u)
s=A.eW(t)
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
if(typeof u!=="number")return u.aj()
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
oi:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.e(u)
s=A.eW(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.aj()
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
on:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.e(u)
s=A.eW(t)
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
if(typeof u!=="number")return u.aj()
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
or:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.e(u)
s=A.eW(t)
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
if(typeof u!=="number")return u.aj()
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
if(o){u=$.fA
if(u==null)u=$.fA=new E.e4(E.lV(),E.lW())
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
os:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.Q("")
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.m)(q),++o)A.og(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.m)(q),++o)A.oi(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.m)(q),++o)A.on(a,q[o],j)
for(q=a.cx,p=q.length,o=0;o<q.length;q.length===p||(0,H.m)(q),++o)A.or(a,q[o],j)
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
j.a+=m+(r[0].toUpperCase()+C.a.ag(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.m)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.ag(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.m)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.ag(r,1))+"Values(norm);\n"}for(u=a.cx,t=u.length,o=0;o<u.length;u.length===t||(0,H.m)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.ag(r,1))+"Values(norm);\n"}if(a.cy<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
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
u=b.a+="uniform BendingValue bendValues["+a.aX+"];\n"
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
eW:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.a.ag(a,1)},
kS:function(a,b,c,d,e){var u=new A.iI(a,c,e)
u.f=d
P.n9(d,0,P.v)
return u},
cW:function cW(a,b,c){this.a=a
this.b=b
this.c=c},
f0:function f0(a){this.a=a},
a0:function a0(a,b,c){this.a=a
this.b=b
this.c=c},
fN:function fN(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fO:function fO(a,b){this.a=a
this.b=b},
he:function he(a,b){var _=this
_.ir=_.dH=_.bp=_.ba=_.aX=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iz=_.iy=_.ix=_.cj=_.ci=_.cg=_.cf=_.ce=_.cd=_.cc=_.cb=_.iw=_.dT=_.dS=_.iv=_.dR=_.dQ=_.dP=_.iu=_.dO=_.dN=_.dM=_.it=_.dL=_.dK=_.is=_.dJ=_.dI=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cX:function cX(a,b){this.a=a
this.b=b},
d4:function d4(a,b){this.a=a
this.b=b},
du:function du(a,b){this.a=a
this.b=b},
dB:function dB(a,b){this.a=a
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
_.aX=b3
_.ba=b4
_.bp=b5},
cr:function cr(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cs:function cs(a,b,c,d,e,f){var _=this
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
dy:function dy(){},
ia:function ia(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dN:function dN(){},
iM:function iM(a){this.a=a},
bm:function bm(a,b,c){this.a=a
this.c=b
this.d=c},
iJ:function iJ(a,b,c){this.a=a
this.c=b
this.d=c},
iK:function iK(a,b,c){this.a=a
this.c=b
this.d=c},
iL:function iL(a,b,c){this.a=a
this.c=b
this.d=c},
iI:function iI(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
R:function R(a,b,c){this.a=a
this.c=b
this.d=c},
dO:function dO(a,b,c){this.a=a
this.c=b
this.d=c},
F:function F(a,b,c){this.a=a
this.c=b
this.d=c},
cq:function cq(a,b,c){this.a=a
this.c=b
this.d=c},
iN:function iN(a,b,c){this.a=a
this.c=b
this.d=c},
bG:function bG(a,b,c){this.a=a
this.c=b
this.d=c},
a4:function a4(a,b,c){this.a=a
this.c=b
this.d=c},
Z:function Z(a,b,c){this.a=a
this.c=b
this.d=c},
bn:function bn(a,b,c){this.a=a
this.c=b
this.d=c}},F={
jX:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cK:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.J(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.J(u+a3,t+a1,s+a2)
q=new V.J(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.J(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.jX(i)
l=F.jX(h)
k=F.p8(d,a0,new F.jW(j,F.jX(g),F.jX(f),l,m,c),b)
if(k!=null)a.hL(k)},
p8:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.kP()
t=H.b([],[F.bI])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.j1(g,g,new V.ao(p,0,0,1),g,g,new V.a3(r,1),g,g,0)
q.n(0,o)
c.$3(o,r,0)
t.push(o.c7(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.j1(g,g,new V.ao(j,i,h,1),g,g,new V.a3(r,m),g,g,0)
k.n(0,o)
c.$3(o,r,n)
t.push(o.c7(d))}}u.d.hi(a+1,b+1,t)
return u},
c1:function(a,b,c){var u=new F.bb(),t=a.a
if(t==null)H.t(P.w("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.t(P.w("May not create a face with vertices attached to different shapes."))
u.a=a
a.d.b.push(u)
u.b=b
b.d.c.push(u)
u.c=c
c.d.d.push(u)
u.a.a.d.b.push(u)
u.a.a.ac()
return u},
n5:function(a,b){var u=new F.c7(),t=a.a
if(t==null)H.t(P.w("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.t(P.w("May not create a line with vertices attached to different shapes."))
u.a=a
a.c.b.push(u)
u.b=b
b.c.c.push(u)
u.a.a.c.b.push(u)
u.a.a.ac()
return u},
kP:function(){var u=new F.i2(),t=new F.j2(u)
t.b=!1
t.c=H.b([],[F.bI])
u.a=t
t=new F.i5(u)
t.b=H.b([],[F.ci])
u.b=t
t=new F.i4(u)
t.b=H.b([],[F.c7])
u.c=t
t=new F.i3(u)
t.b=H.b([],[F.bb])
u.d=t
u.e=null
return u},
j1:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.bI(),r=new F.j7()
r.b=H.b([],[F.ci])
s.b=r
r=new F.j6()
u=[F.c7]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.j3()
u=[F.bb]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.my()
s.e=0
r=$.ah()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.b7().a)!==0?e:t
s.x=(u&$.b6().a)!==0?b:t
s.y=(u&$.av().a)!==0?f:t
s.z=(u&$.bq().a)!==0?g:t
s.Q=(u&$.mz().a)!==0?c:t
s.ch=(u&$.bU().a)!==0?i:0
s.cx=(u&$.b5().a)!==0?a:t
return s},
jW:function jW(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
bb:function bb(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
c7:function c7(){this.b=this.a=null},
ci:function ci(){this.a=null},
i2:function i2(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
i3:function i3(a){this.a=a
this.b=null},
i4:function i4(a){this.a=a
this.b=null},
i5:function i5(a){this.a=a
this.b=null},
bI:function bI(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
j9:function j9(a){this.a=a},
j8:function j8(a){this.a=a},
j2:function j2(a){this.a=a
this.c=this.b=null},
j3:function j3(){this.d=this.c=this.b=null},
j4:function j4(a,b){this.a=a
this.b=b},
j5:function j5(a,b){this.a=a
this.b=b},
j6:function j6(){this.c=this.b=null},
j7:function j7(){this.b=null}},T={
kQ:function(a){var u=new T.it()
u.a=0
u.b=a
u.d=u.c=!1
u.x=u.r=u.f=u.e=0
return u},
cp:function cp(){},
is:function is(){},
it:function it(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iu:function iu(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iv:function iv(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
ix:function ix(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
iw:function iw(a,b,c,d,e,f,g){var _=this
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
H.kJ.prototype={}
J.a.prototype={
t:function(a,b){return a===b},
gI:function(a){return H.cj(a)},
i:function(a){return"Instance of '"+H.e(H.ck(a))+"'"}}
J.fX.prototype={
i:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$iaN:1}
J.df.prototype={
t:function(a,b){return null==b},
i:function(a){return"null"},
gI:function(a){return 0}}
J.dg.prototype={
gI:function(a){return 0},
i:function(a){return String(a)},
$in3:1}
J.hL.prototype={}
J.bH.prototype={}
J.bg.prototype={
i:function(a){var u=a[$.mm()]
if(u==null)return this.eu(a)
return"JavaScript function for "+H.e(J.a6(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.be.prototype={
i2:function(a,b){var u
if(!!a.fixed$length)H.t(P.y("removeAt"))
u=a.length
if(b>=u)throw H.c(P.dv(b,null))
return a.splice(b,1)[0]},
W:function(a,b){var u
if(!!a.fixed$length)H.t(P.y("remove"))
for(u=0;u<a.length;++u)if(J.L(a[u],b)){a.splice(u,1)
return!0}return!1},
ab:function(a,b){var u,t
if(!!a.fixed$length)H.t(P.y("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.m)(b),++t)a.push(b[t])},
F:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.c(P.aR(a))}},
j:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.d(r,u)
r[u]=t}return r.join(b)},
hI:function(a){return this.j(a,"")},
hB:function(a,b,c){var u,t,s=a.length
for(u=b,t=0;t<s;++t){u=c.$2(u,a[t])
if(a.length!==s)throw H.c(P.aR(a))}return u},
hC:function(a,b,c){return this.hB(a,b,c,null)},
hA:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.c(P.aR(a))}throw H.c(H.kG())},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
cL:function(a,b,c){if(b<0||b>a.length)throw H.c(P.W(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.c(P.W(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.b4(a,0)])
return H.b(a.slice(b,c),[H.b4(a,0)])},
cK:function(a,b){return this.cL(a,b,null)},
gaA:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.kG())},
dq:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.c(P.aR(a))}return!1},
b2:function(a,b){if(!!a.immutable$list)H.t(P.y("sort"))
H.nz(a,b==null?J.oc():b)},
ep:function(a){return this.b2(a,null)},
C:function(a,b){var u
for(u=0;u<a.length;++u)if(J.L(a[u],b))return!0
return!1},
i:function(a){return P.kF(a,"[","]")},
gR:function(a){return new J.a7(a,a.length)},
gI:function(a){return H.cj(a)},
gl:function(a){return a.length},
sl:function(a,b){var u="newLength"
if(!!a.fixed$length)H.t(P.y("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.kv(b,u,null))
if(b<0)throw H.c(P.W(b,0,null,u,null))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bR(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.t(P.y("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bR(a,b))
a[b]=c},
$iq:1,
$ij:1,
$io:1}
J.kI.prototype={}
J.a7.prototype={
gA:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.m(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.c6.prototype={
aW:function(a,b){var u
if(typeof b!=="number")throw H.c(H.ac(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbr(b)
if(this.gbr(a)===u)return 0
if(this.gbr(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbr:function(a){return a===0?1/a<0:a<0},
ia:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.y(""+a+".toInt()"))},
cl:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.y(""+a+".floor()"))},
a0:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.y(""+a+".round()"))},
ef:function(a,b){var u
if(b>20)throw H.c(P.W(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbr(a))return"-"+u
return u},
bf:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.W(b,2,36,"radix",null))
u=a.toString(b)
if(C.a.a_(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.t(P.y("Unexpected toString result: "+u))
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
gI:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
q:function(a,b){if(typeof b!=="number")throw H.c(H.ac(b))
return a*b},
bh:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
ew:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dg(a,b)},
aa:function(a,b){return(a|0)===a?a/b|0:this.dg(a,b)},
dg:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.y("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
aS:function(a,b){var u
if(a>0)u=this.df(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
h8:function(a,b){if(b<0)throw H.c(H.ac(b))
return this.df(a,b)},
df:function(a,b){return b>31?0:a>>>b},
$iK:1,
$iad:1}
J.de.prototype={$iv:1}
J.dd.prototype={}
J.bf.prototype={
a_:function(a,b){if(b<0)throw H.c(H.bR(a,b))
if(b>=a.length)H.t(H.bR(a,b))
return a.charCodeAt(b)},
E:function(a,b){if(b>=a.length)throw H.c(H.bR(a,b))
return a.charCodeAt(b)},
B:function(a,b){if(typeof b!=="string")throw H.c(P.kv(b,null,null))
return a+b},
aY:function(a,b,c,d){var u,t
c=P.b1(b,c,a.length)
if(typeof c!=="number"||Math.floor(c)!==c)H.t(H.ac(c))
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
af:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.W(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a8:function(a,b){return this.af(a,b,0)},
u:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.ac(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.O()
if(b<0)throw H.c(P.dv(b,null))
if(b>c)throw H.c(P.dv(b,null))
if(c>a.length)throw H.c(P.dv(c,null))
return a.substring(b,c)},
ag:function(a,b){return this.u(a,b,null)},
ie:function(a){return a.toLowerCase()},
q:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.R)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ar:function(a,b){var u=b-a.length
if(u<=0)return a
return this.q(" ",u)+a},
bq:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.W(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
dZ:function(a,b){return this.bq(a,b,0)},
ho:function(a,b,c){var u=a.length
if(c>u)throw H.c(P.W(c,0,u,null,null))
return H.mj(a,b,c)},
C:function(a,b){return this.ho(a,b,0)},
aW:function(a,b){var u
if(typeof b!=="string")throw H.c(H.ac(b))
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
h:function(a,b){return C.a.a_(this.a,b)},
$aq:function(){return[P.v]},
$ax:function(){return[P.v]},
$aj:function(){return[P.v]},
$ao:function(){return[P.v]}}
H.q.prototype={}
H.dj.prototype={
gR:function(a){return new H.bh(this,this.gl(this))},
bC:function(a,b){return this.es(0,b)}}
H.bh.prototype={
gA:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=J.au(s),q=r.gl(s)
if(t.b!=q)throw H.c(P.aR(s))
u=t.c
if(typeof q!=="number")return H.r(q)
if(u>=q){t.d=null
return!1}t.d=r.J(s,u);++t.c
return!0}}
H.c9.prototype={
gR:function(a){return new H.hc(J.aO(this.a),this.b)},
gl:function(a){return J.ai(this.a)},
J:function(a,b){return this.b.$1(J.eX(this.a,b))},
$aj:function(a,b){return[b]}}
H.fx.prototype={$iq:1,
$aq:function(a,b){return[b]}}
H.hc.prototype={
v:function(){var u=this,t=u.b
if(t.v()){u.a=u.c.$1(t.gA(t))
return!0}u.a=null
return!1},
gA:function(a){return this.a}}
H.hd.prototype={
gl:function(a){return J.ai(this.a)},
J:function(a,b){return this.b.$1(J.eX(this.a,b))},
$aq:function(a,b){return[b]},
$adj:function(a,b){return[b]},
$aj:function(a,b){return[b]}}
H.cx.prototype={
gR:function(a){return new H.jb(J.aO(this.a),this.b)}}
H.jb.prototype={
v:function(){var u,t
for(u=this.a,t=this.b;u.v();)if(t.$1(u.gA(u)))return!0
return!1},
gA:function(a){var u=this.a
return u.gA(u)}}
H.d8.prototype={}
H.iR.prototype={
m:function(a,b,c){throw H.c(P.y("Cannot modify an unmodifiable list"))}}
H.dP.prototype={}
H.fh.prototype={
i:function(a){return P.kN(this)},
m:function(a,b,c){return H.mU()},
$iT:1}
H.fi.prototype={
gl:function(a){return this.a},
c5:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.c5(0,b))return
return this.d0(b)},
d0:function(a){return this.b[a]},
F:function(a,b){var u,t,s,r=this.c
for(u=r.length,t=0;t<u;++t){s=r[t]
b.$2(s,this.d0(s))}}}
H.iG.prototype={
aq:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.hH.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.h_.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.iQ.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.ks.prototype={
$1:function(a){if(!!J.P(a).$ibw)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:9}
H.ev.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bY.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.cQ(t==null?"unknown":t)+"'"},
gii:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.ip.prototype={}
H.ig.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cQ(u)+"'"}}
H.bW.prototype={
t:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bW))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gI:function(a){var u,t=this.c
if(t==null)u=H.cj(this.a)
else u=typeof t!=="object"?J.cU(t):H.cj(t)
return(u^H.cj(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.ck(u))+"'")}}
H.fb.prototype={
i:function(a){return this.a}}
H.i_.prototype={
i:function(a){return"RuntimeError: "+H.e(this.a)}}
H.I.prototype={
gl:function(a){return this.a},
ghH:function(a){return this.a===0},
ga3:function(a){return new H.h3(this,[H.b4(this,0)])},
gih:function(a){var u=this
return H.nb(u.ga3(u),new H.fZ(u),H.b4(u,0),H.b4(u,1))},
c5:function(a,b){var u=this.b
if(u==null)return!1
return this.eP(u,b)},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bk(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bk(r,b)
s=t==null?null:t.b
return s}else return q.hF(b)},
hF:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.d2(r,s.e_(a))
t=s.e0(u,a)
if(t<0)return
return u[t].b},
m:function(a,b,c){var u,t,s=this
if(typeof b==="string"){u=s.b
s.cU(u==null?s.b=s.bT():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cU(t==null?s.c=s.bT():t,b,c)}else s.hG(b,c)},
hG:function(a,b){var u,t,s,r=this,q=r.d
if(q==null)q=r.d=r.bT()
u=r.e_(a)
t=r.d2(q,u)
if(t==null)r.bW(q,u,[r.bU(a,b)])
else{s=r.e0(t,a)
if(s>=0)t[s].b=b
else t.push(r.bU(a,b))}},
F:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.c(P.aR(u))
t=t.c}},
cU:function(a,b,c){var u=this.bk(a,b)
if(u==null)this.bW(a,b,this.bU(b,c))
else u.b=c},
f_:function(){this.r=this.r+1&67108863},
bU:function(a,b){var u,t=this,s=new H.h2(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.f_()
return s},
e_:function(a){return J.cU(a)&0x3ffffff},
e0:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.L(a[t].a,b))return t
return-1},
i:function(a){return P.kN(this)},
bk:function(a,b){return a[b]},
d2:function(a,b){return a[b]},
bW:function(a,b,c){a[b]=c},
eT:function(a,b){delete a[b]},
eP:function(a,b){return this.bk(a,b)!=null},
bT:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bW(t,u,t)
this.eT(t,u)
return t}}
H.fZ.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.b4(u,1),args:[H.b4(u,0)]}}}
H.h2.prototype={}
H.h3.prototype={
gl:function(a){return this.a.a},
gR:function(a){var u=this.a,t=new H.h4(u,u.r)
t.c=u.e
return t}}
H.h4.prototype={
gA:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.aR(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.k8.prototype={
$1:function(a){return this.a(a)},
$S:9}
H.k9.prototype={
$2:function(a,b){return this.a(a,b)}}
H.ka.prototype={
$1:function(a){return this.a(a)}}
H.fY.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$ins:1}
H.cf.prototype={$icf:1}
H.bj.prototype={$ibj:1}
H.dm.prototype={
gl:function(a){return a.length},
$iA:1,
$aA:function(){}}
H.cg.prototype={
h:function(a,b){H.aM(b,a,a.length)
return a[b]},
m:function(a,b,c){H.aM(b,a,a.length)
a[b]=c},
$iq:1,
$aq:function(){return[P.K]},
$ax:function(){return[P.K]},
$ij:1,
$aj:function(){return[P.K]},
$io:1,
$ao:function(){return[P.K]}}
H.dn.prototype={
m:function(a,b,c){H.aM(b,a,a.length)
a[b]=c},
$iq:1,
$aq:function(){return[P.v]},
$ax:function(){return[P.v]},
$ij:1,
$aj:function(){return[P.v]},
$io:1,
$ao:function(){return[P.v]}}
H.hA.prototype={
h:function(a,b){H.aM(b,a,a.length)
return a[b]}}
H.hB.prototype={
h:function(a,b){H.aM(b,a,a.length)
return a[b]}}
H.hC.prototype={
h:function(a,b){H.aM(b,a,a.length)
return a[b]}}
H.hD.prototype={
h:function(a,b){H.aM(b,a,a.length)
return a[b]}}
H.hE.prototype={
h:function(a,b){H.aM(b,a,a.length)
return a[b]}}
H.dp.prototype={
gl:function(a){return a.length},
h:function(a,b){H.aM(b,a,a.length)
return a[b]}}
H.ch.prototype={
gl:function(a){return a.length},
h:function(a,b){H.aM(b,a,a.length)
return a[b]},
$ich:1,
$ibF:1}
H.cB.prototype={}
H.cC.prototype={}
H.cD.prototype={}
H.cE.prototype={}
P.jd.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:17}
P.jc.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.je.prototype={
$0:function(){this.a.$0()}}
P.jf.prototype={
$0:function(){this.a.$0()}}
P.eB.prototype={
eD:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bQ(new P.jM(this,b),0),a)
else throw H.c(P.y("`setTimeout()` not found."))},
eE:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bQ(new P.jL(this,a,Date.now(),b),0),a)
else throw H.c(P.y("Periodic timer."))},
$idI:1}
P.jM.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.jL.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.ew(u,q)}s.c=r
t.d.$1(s)}}
P.bJ.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.e(this.a)+")"}}
P.bK.prototype={
gA:function(a){var u=this.c
if(u==null)return this.b
return u.gA(u)},
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
else{r=J.aO(u)
if(!!r.$ibK){u=q.d
if(u==null)u=q.d=[]
u.push(q.a)
q.a=r.a
continue}else{q.c=r
continue}}}}else{q.b=t
return!0}}return!1}}
P.jI.prototype={
gR:function(a){return new P.bK(this.a())}}
P.dX.prototype={}
P.dE.prototype={}
P.ij.prototype={}
P.dI.prototype={}
P.jV.prototype={}
P.k3.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.ds():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u}}
P.jt.prototype={
i6:function(a){var u,t,s,r=null
try{if(C.f===$.at){a.$0()
return}P.oB(r,r,this,a)}catch(s){u=H.ag(s)
t=H.l4(s)
P.m6(r,r,this,u,t)}},
i7:function(a,b){var u,t,s,r=null
try{if(C.f===$.at){a.$1(b)
return}P.oC(r,r,this,a,b)}catch(s){u=H.ag(s)
t=H.l4(s)
P.m6(r,r,this,u,t)}},
i8:function(a,b){return this.i7(a,b,null)},
hm:function(a){return new P.ju(this,a)},
du:function(a,b){return new P.jv(this,a,b)}}
P.ju.prototype={
$0:function(){return this.a.i6(this.b)}}
P.jv.prototype={
$1:function(a){return this.a.i8(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jq.prototype={
gR:function(a){var u=new P.ec(this,this.r)
u.c=this.e
return u},
gl:function(a){return this.a},
C:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.eN(b)
return t}},
eN:function(a){var u=this.d
if(u==null)return!1
return this.bK(this.d1(u,a),a)>=0},
n:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cV(u==null?s.b=P.kW():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cV(t==null?s.c=P.kW():t,b)}else return s.eH(0,b)},
eH:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.kW()
u=s.cX(b)
t=r[u]
if(t==null)r[u]=[s.bH(b)]
else{if(s.bK(t,b)>=0)return!1
t.push(s.bH(b))}return!0},
W:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fY(this.c,b)
else return this.fX(0,b)},
fX:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.d1(r,b)
t=s.bK(u,b)
if(t<0)return!1
s.di(u.splice(t,1)[0])
return!0},
cV:function(a,b){if(a[b]!=null)return!1
a[b]=this.bH(b)
return!0},
fY:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.di(u)
delete a[b]
return!0},
cW:function(){this.r=1073741823&this.r+1},
bH:function(a){var u,t=this,s=new P.jr(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cW()
return s},
di:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cW()},
cX:function(a){return J.cU(a)&1073741823},
d1:function(a,b){return a[this.cX(b)]},
bK:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.L(a[t].a,b))return t
return-1}}
P.jr.prototype={}
P.ec.prototype={
gA:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.aR(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fV.prototype={}
P.h5.prototype={
$2:function(a,b){this.a.m(0,a,b)},
$S:3}
P.h6.prototype={$iq:1,$ij:1,$io:1}
P.x.prototype={
gR:function(a){return new H.bh(a,this.gl(a))},
J:function(a,b){return this.h(a,b)},
ic:function(a,b){var u,t,s=this,r=H.b([],[H.oU(s,a,"x",0)])
C.b.sl(r,s.gl(a))
u=0
while(!0){t=s.gl(a)
if(typeof t!=="number")return H.r(t)
if(!(u<t))break
t=s.h(a,u)
if(u>=r.length)return H.d(r,u)
r[u]=t;++u}return r},
ib:function(a){return this.ic(a,!0)},
hy:function(a,b,c,d){var u
P.b1(b,c,this.gl(a))
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
F:function(a,b){var u,t
for(u=J.aO(this.ga3(a));u.v();){t=u.gA(u)
b.$2(t,this.h(a,t))}},
gl:function(a){return J.ai(this.ga3(a))},
i:function(a){return P.kN(a)},
$iT:1}
P.jN.prototype={
m:function(a,b,c){throw H.c(P.y("Cannot modify unmodifiable map"))}}
P.hb.prototype={
h:function(a,b){return J.bV(this.a,b)},
m:function(a,b,c){J.kt(this.a,b,c)},
F:function(a,b){J.lb(this.a,b)},
gl:function(a){return J.ai(this.a)},
i:function(a){return J.a6(this.a)},
$iT:1}
P.dQ.prototype={}
P.jx.prototype={
ab:function(a,b){var u
for(u=J.aO(b);u.v();)this.n(0,u.gA(u))},
i:function(a){return P.kF(this,"{","}")},
J:function(a,b){var u,t,s
P.lB(b,"index")
for(u=P.nT(this,this.r),t=0;u.v();){s=u.d
if(b===t)return s;++t}throw H.c(P.N(b,this,"index",null,t))},
$iq:1,
$ij:1}
P.ed.prototype={}
P.eH.prototype={}
P.f7.prototype={
hM:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.b1(a0,a1,b.length)
u=$.mB()
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
if(l<=a1){k=H.k7(C.a.E(b,n))
j=H.k7(C.a.E(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.d(u,i)
h=u[i]
if(h>=0){i=C.a.a_("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.Q("")
g=r.a+=C.a.u(b,s,t)
r.a=g+H.bC(m)
s=n
continue}}throw H.c(P.U("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.a.u(b,s,a1)
f=g.length
if(q>=0)P.lg(b,p,a1,q,o,f)
else{e=C.d.bh(f-1,4)+1
if(e===1)throw H.c(P.U(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.a.aY(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.lg(b,p,a1,q,o,d)
else{e=C.d.bh(d,4)
if(e===1)throw H.c(P.U(c,b,a1))
if(e>1)b=C.a.aY(b,a1,a1,e===2?"==":"=")}return b}}
P.f8.prototype={}
P.fd.prototype={}
P.fj.prototype={}
P.fz.prototype={}
P.fS.prototype={
i:function(a){return this.a}}
P.fR.prototype={
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
default:p=o}if(p!=null){if(q==null)q=new P.Q("")
if(r>b)q.a+=C.a.u(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.mM(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.iZ.prototype={
ghx:function(){return C.S}}
P.j0.prototype={
c6:function(a){var u,t,s,r=P.b1(0,null,a.length)
if(typeof r!=="number")return r.K()
u=r-0
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.jT(t)
if(s.eV(a,0,r)!==r)s.dk(J.mI(a,r-1),0)
return new Uint8Array(t.subarray(0,H.o9(0,s.b,t.length)))}}
P.jT.prototype={
dk:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
if(b!==c&&(C.a.a_(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.a.E(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dk(r,C.a.E(a,p)))s=p}else if(r<=2047){q=n.b
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
c6:function(a){var u,t,s,r,q,p,o,n,m=P.nF(!1,a,0,null)
if(m!=null)return m
u=P.b1(0,null,J.ai(a))
t=P.m8(a,0,u)
if(t>0){s=P.cn(a,0,t)
if(t===u)return s
r=new P.Q(s)
q=t
p=!1}else{q=0
r=null
p=!0}if(r==null)r=new P.Q("")
o=new P.jS(!1,r)
o.c=p
o.hp(a,q,u)
if(o.e>0){H.t(P.U("Unfinished UTF-8 octet sequence",a,u))
r.a+=H.bC(65533)
o.f=o.e=o.d=0}n=r.a
return n.charCodeAt(0)==0?n:n}}
P.jS.prototype={
hp:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=this,k="Bad UTF-8 encoding 0x",j=l.d,i=l.e,h=l.f
l.f=l.e=l.d=0
$label0$0:for(u=J.au(a),t=l.b,s=b;!0;s=n){$label1$1:if(i>0){do{if(s===c)break $label0$0
r=u.h(a,s)
if(typeof r!=="number")return r.aj()
if((r&192)!==128){q=P.U(k+C.d.bf(r,16),a,s)
throw H.c(q)}else{j=(j<<6|r&63)>>>0;--i;++s}}while(i>0)
q=h-1
if(q<0||q>=4)return H.d(C.y,q)
if(j<=C.y[q]){q=P.U("Overlong encoding of 0x"+C.d.bf(j,16),a,s-h-1)
throw H.c(q)}if(j>1114111){q=P.U("Character outside valid Unicode range: 0x"+C.d.bf(j,16),a,s-h-1)
throw H.c(q)}if(!l.c||j!==65279)t.a+=H.bC(j)
l.c=!1}if(typeof c!=="number")return H.r(c)
q=s<c
for(;q;){p=P.m8(a,s,c)
if(p>0){l.c=!1
o=s+p
t.a+=P.cn(a,s,o)
if(o===c)break}else o=s
n=o+1
r=u.h(a,o)
if(typeof r!=="number")return r.O()
if(r<0){m=P.U("Negative UTF-8 code unit: -0x"+C.d.bf(-r,16),a,n-1)
throw H.c(m)}else{if((r&224)===192){j=r&31
i=1
h=1
continue $label0$0}if((r&240)===224){j=r&15
i=2
h=2
continue $label0$0}if((r&248)===240&&r<245){j=r&7
i=3
h=3
continue $label0$0}m=P.U(k+C.d.bf(r,16),a,n-1)
throw H.c(m)}}break $label0$0}if(i>0){l.d=j
l.e=i
l.f=h}}}
P.aN.prototype={}
P.ae.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.ae&&this.a===b.a&&!0},
aW:function(a,b){return C.d.aW(this.a,b.a)},
gI:function(a){var u=this.a
return(u^C.d.aS(u,30))&1073741823},
i:function(a){var u=this,t=P.mV(H.no(u)),s=P.d3(H.nm(u)),r=P.d3(H.ni(u)),q=P.d3(H.nj(u)),p=P.d3(H.nl(u)),o=P.d3(H.nn(u)),n=P.mW(H.nk(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.K.prototype={}
P.ba.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.ba&&this.a===b.a},
gI:function(a){return C.d.gI(this.a)},
aW:function(a,b){return C.d.aW(this.a,b.a)},
i:function(a){var u,t,s,r=new P.fw(),q=this.a
if(q<0)return"-"+new P.ba(0-q).i(0)
u=r.$1(C.d.aa(q,6e7)%60)
t=r.$1(C.d.aa(q,1e6)%60)
s=new P.fv().$1(q%1e6)
return""+C.d.aa(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
P.fv.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.fw.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bw.prototype={}
P.ds.prototype={
i:function(a){return"Throw of null."}}
P.an.prototype={
gbJ:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbI:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbJ()+o+u
if(!q.a)return t
s=q.gbI()
r=P.kE(q.b)
return t+s+": "+r}}
P.bD.prototype={
gbJ:function(){return"RangeError"},
gbI:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.fU.prototype={
gbJ:function(){return"RangeError"},
gbI:function(){var u,t=this.b
if(typeof t!=="number")return t.O()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gl:function(a){return this.f}}
P.iS.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iO.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cm.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fg.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.kE(u)+"."}}
P.hK.prototype={
i:function(a){return"Out of Memory"},
$ibw:1}
P.dC.prototype={
i:function(a){return"Stack Overflow"},
$ibw:1}
P.fo.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.e5.prototype={
i:function(a){return"Exception: "+this.a}}
P.fJ.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.a.u(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.a.E(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.a.a_(f,q)
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
P.fL.prototype={}
P.v.prototype={}
P.j.prototype={
bC:function(a,b){return new H.cx(this,b,[H.l3(this,"j",0)])},
gl:function(a){var u,t=this.gR(this)
for(u=0;t.v();)++u
return u},
gaL:function(a){var u,t=this.gR(this)
if(!t.v())throw H.c(H.kG())
u=t.gA(t)
if(t.v())throw H.c(H.n0())
return u},
J:function(a,b){var u,t,s
P.lB(b,"index")
for(u=this.gR(this),t=0;u.v();){s=u.gA(u)
if(b===t)return s;++t}throw H.c(P.N(b,this,"index",null,t))},
i:function(a){return P.n_(this,"(",")")}}
P.fW.prototype={}
P.o.prototype={$iq:1,$ij:1}
P.T.prototype={}
P.bk.prototype={
gI:function(a){return P.a2.prototype.gI.call(this,this)},
i:function(a){return"null"}}
P.ad.prototype={}
P.a2.prototype={constructor:P.a2,$ia2:1,
t:function(a,b){return this===b},
gI:function(a){return H.cj(this)},
i:function(a){return"Instance of '"+H.e(H.ck(this))+"'"},
toString:function(){return this.i(this)}}
P.h.prototype={}
P.Q.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
P.iX.prototype={
$2:function(a,b){var u,t,s,r=J.cN(b).dZ(b,"=")
if(r===-1){if(b!=="")J.kt(a,P.l_(b,0,b.length,this.a,!0),"")}else if(r!==0){u=C.a.u(b,0,r)
t=C.a.ag(b,r+1)
s=this.a
J.kt(a,P.l_(u,0,u.length,s,!0),P.l_(t,0,t.length,s,!0))}return a}}
P.iU.prototype={
$2:function(a,b){throw H.c(P.U("Illegal IPv4 address, "+a,this.a,b))}}
P.iV.prototype={
$2:function(a,b){throw H.c(P.U("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.iW.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.eV(C.a.u(this.b,a,b),null,16)
if(typeof u!=="number")return u.O()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u}}
P.bL.prototype={
geh:function(){return this.b},
gcm:function(a){var u=this.c
if(u==null)return""
if(C.a.a8(u,"["))return C.a.u(u,1,u.length-1)
return u},
gbv:function(a){var u=this.d
if(u==null)return P.m_(this.a)
return u},
gcw:function(a){var u=this.f
return u==null?"":u},
gdU:function(){var u=this.r
return u==null?"":u},
ea:function(a,b){var u,t,s,r=this,q=r.a,p=q==="file",o=r.b,n=r.d,m=r.c
if(!(m!=null))m=o.length!==0||n!=null||p?"":null
u=r.e
if(!p)t=m!=null&&u.length!==0
else t=!0
if(t&&!C.a.a8(u,"/"))u="/"+u
s=P.kY(null,0,0,b)
return new P.bL(q,o,m,n,u,s,r.r)},
gcz:function(){var u,t=this.Q
if(t==null){t=this.f
u=P.h
u=this.Q=new P.dQ(P.lN(t==null?"":t),[u,u])
t=u}return t},
gdV:function(){return this.c!=null},
gdY:function(){return this.f!=null},
gdW:function(){return this.r!=null},
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
if(!!J.P(b).$ikT)if(s.a==b.gbD())if(s.c!=null===b.gdV())if(s.b==b.geh())if(s.gcm(s)==b.gcm(b))if(s.gbv(s)==b.gbv(b))if(s.e===b.ge8(b)){u=s.f
t=u==null
if(!t===b.gdY()){if(t)u=""
if(u===b.gcw(b)){u=s.r
t=u==null
if(!t===b.gdW()){if(t)u=""
u=u===b.gdU()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gI:function(a){var u=this.z
return u==null?this.z=C.a.gI(this.i(0)):u},
$ikT:1,
gbD:function(){return this.a},
ge8:function(a){return this.e}}
P.jO.prototype={
$1:function(a){throw H.c(P.U("Invalid port",this.a,this.b+1))}}
P.jP.prototype={
$1:function(a){return P.eI(C.a1,a,C.e,!1)}}
P.jR.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.e(P.eI(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.e(P.eI(C.h,b,C.e,!0))}}}
P.jQ.prototype={
$2:function(a,b){var u,t
if(b==null||typeof b==="string")this.a.$2(a,b)
else for(u=J.aO(b),t=this.a;u.v();)t.$2(a,u.gA(u))}}
P.iT.prototype={
geg:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.d(o,0)
u=q.a
o=o[0]+1
t=C.a.bq(u,"?",o)
s=u.length
if(t>=0){r=P.cJ(u,t+1,s,C.l,!1)
s=t}else r=p
return q.c=new P.jj("data",p,p,p,P.cJ(u,o,s,C.C,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.d(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.jZ.prototype={
$1:function(a){return new Uint8Array(96)}}
P.jY.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.d(u,a)
u=u[a]
J.mJ(u,0,96,b)
return u},
$S:18}
P.k_.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.a.E(b,s)^96
if(r>=t)return H.d(a,r)
a[r]=c}}}
P.k0.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.a.E(b,0),t=C.a.E(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.d(a,r)
a[r]=c}}}
P.jA.prototype={
gdV:function(){return this.c>0},
gdX:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.B()
t=this.e
if(typeof t!=="number")return H.r(t)
t=u+1<t
u=t}else u=!1
return u},
gdY:function(){var u=this.f
if(typeof u!=="number")return u.O()
return u<this.r},
gdW:function(){return this.r<this.a.length},
gd3:function(){return this.b===4&&C.a.a8(this.a,"http")},
gd4:function(){return this.b===5&&C.a.a8(this.a,"https")},
gbD:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gd3())q=t.x="http"
else if(t.gd4()){t.x="https"
q="https"}else if(q===4&&C.a.a8(t.a,s)){t.x=s
q=s}else if(q===7&&C.a.a8(t.a,r)){t.x=r
q=r}else{q=C.a.u(t.a,0,q)
t.x=q}return q},
geh:function(){var u=this.c,t=this.b+3
return u>t?C.a.u(this.a,t,u-1):""},
gcm:function(a){var u=this.c
return u>0?C.a.u(this.a,u,this.d):""},
gbv:function(a){var u,t=this
if(t.gdX()){u=t.d
if(typeof u!=="number")return u.B()
return P.eV(C.a.u(t.a,u+1,t.e),null,null)}if(t.gd3())return 80
if(t.gd4())return 443
return 0},
ge8:function(a){return C.a.u(this.a,this.e,this.f)},
gcw:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.O()
return u<t?C.a.u(this.a,u+1,t):""},
gdU:function(){var u=this.r,t=this.a
return u<t.length?C.a.ag(t,u+1):""},
gcz:function(){var u=this,t=u.f
if(typeof t!=="number")return t.O()
if(t>=u.r)return C.a2
t=P.h
return new P.dQ(P.lN(u.gcw(u)),[t,t])},
ea:function(a,b){var u,t,s,r,q,p=this,o=null,n=p.gbD(),m=n==="file",l=p.c,k=l>0?C.a.u(p.a,p.b+3,l):"",j=p.gdX()?p.gbv(p):o
l=p.c
if(l>0)u=C.a.u(p.a,l,p.d)
else u=k.length!==0||j!=null||m?"":o
l=p.a
t=C.a.u(l,p.e,p.f)
if(!m)s=u!=null&&t.length!==0
else s=!0
if(s&&!C.a.a8(t,"/"))t="/"+t
r=P.kY(o,0,0,b)
s=p.r
q=s<l.length?C.a.ag(l,s+1):o
return new P.bL(n,k,u,j,t,r,q)},
gI:function(a){var u=this.y
return u==null?this.y=C.a.gI(this.a):u},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.P(b).$ikT&&this.a===b.i(0)},
i:function(a){return this.a},
$ikT:1}
P.jj.prototype={}
W.p.prototype={}
W.eY.prototype={
gl:function(a){return a.length}}
W.eZ.prototype={
i:function(a){return String(a)}}
W.f_.prototype={
i:function(a){return String(a)}}
W.bs.prototype={$ibs:1}
W.bt.prototype={$ibt:1}
W.bv.prototype={
cE:function(a,b,c){if(c!=null)return a.getContext(b,P.oL(c))
return a.getContext(b)},
ej:function(a,b){return this.cE(a,b,null)},
$ibv:1}
W.b9.prototype={
gl:function(a){return a.length}}
W.fk.prototype={
gl:function(a){return a.length}}
W.H.prototype={$iH:1}
W.bZ.prototype={
gl:function(a){return a.length}}
W.fl.prototype={}
W.aj.prototype={}
W.ax.prototype={}
W.fm.prototype={
gl:function(a){return a.length}}
W.fn.prototype={
gl:function(a){return a.length}}
W.fq.prototype={
gl:function(a){return a.length}}
W.ap.prototype={$iap:1}
W.fs.prototype={
i:function(a){return String(a)}}
W.d5.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[[P.aa,P.ad]]},
$iA:1,
$aA:function(){return[[P.aa,P.ad]]},
$ax:function(){return[[P.aa,P.ad]]},
$ij:1,
$aj:function(){return[[P.aa,P.ad]]},
$io:1,
$ao:function(){return[[P.aa,P.ad]]}}
W.d6.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gau(a))+" x "+H.e(this.gap(a))},
t:function(a,b){var u
if(b==null)return!1
u=J.P(b)
return!!u.$iaa&&a.left===u.gbs(b)&&a.top===u.gbz(b)&&this.gau(a)===u.gau(b)&&this.gap(a)===u.gap(b)},
gI:function(a){return W.lY(C.c.gI(a.left),C.c.gI(a.top),C.c.gI(this.gau(a)),C.c.gI(this.gap(a)))},
gdv:function(a){return a.bottom},
gap:function(a){return a.height},
gbs:function(a){return a.left},
gby:function(a){return a.right},
gbz:function(a){return a.top},
gau:function(a){return a.width},
$iaa:1,
$aaa:function(){return[P.ad]}}
W.ft.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[P.h]},
$iA:1,
$aA:function(){return[P.h]},
$ax:function(){return[P.h]},
$ij:1,
$aj:function(){return[P.h]},
$io:1,
$ao:function(){return[P.h]}}
W.fu.prototype={
gl:function(a){return a.length}}
W.jh.prototype={
gl:function(a){return this.b.length},
h:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
m:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
this.a.replaceChild(c,u[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gR:function(a){var u=this.ib(this)
return new J.a7(u,u.length)},
$aq:function(){return[W.S]},
$ax:function(){return[W.S]},
$aj:function(){return[W.S]},
$ao:function(){return[W.S]}}
W.S.prototype={
ghl:function(a){return new W.jk(a)},
gc4:function(a){return new W.jh(a,a.children)},
gdw:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.O()
if(s<0)s=-s*0
if(typeof r!=="number")return r.O()
if(r<0)r=-r*0
return new P.aa(u,t,s,r,[P.ad])},
i:function(a){return a.localName},
ao:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.lm
if(u==null){u=H.b([],[W.aY])
t=new W.dr(u)
u.push(W.lX(null))
u.push(W.lZ())
$.lm=t
d=t}else d=u
u=$.ll
if(u==null){u=new W.eJ(d)
$.ll=u
c=u}else{u.a=d
c=u}}if($.aS==null){u=document
t=u.implementation.createHTMLDocument("")
$.aS=t
$.kD=t.createRange()
s=$.aS.createElement("base")
s.href=u.baseURI
$.aS.head.appendChild(s)}u=$.aS
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.aS
if(!!this.$ibt)r=u.body
else{r=u.createElement(a.tagName)
$.aS.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.b.C(C.a_,a.tagName)){$.kD.selectNodeContents(r)
q=$.kD.createContextualFragment(b)}else{r.innerHTML=b
q=$.aS.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.aS.body
if(r==null?u!=null:r!==u)J.ld(r)
c.cF(q)
document.adoptNode(q)
return q},
hs:function(a,b,c){return this.ao(a,b,c,null)},
el:function(a,b){a.textContent=null
a.appendChild(this.ao(a,b,null,null))},
$iS:1,
gec:function(a){return a.tagName}}
W.fy.prototype={
$1:function(a){return!!J.P(a).$iS}}
W.k.prototype={$ik:1}
W.f.prototype={
hg:function(a,b,c,d){if(c!=null)this.eI(a,b,c,!1)},
eI:function(a,b,c,d){return a.addEventListener(b,H.bQ(c,1),!1)}}
W.aq.prototype={$iaq:1}
W.c2.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aq]},
$iA:1,
$aA:function(){return[W.aq]},
$ax:function(){return[W.aq]},
$ij:1,
$aj:function(){return[W.aq]},
$io:1,
$ao:function(){return[W.aq]},
$ic2:1}
W.fE.prototype={
gl:function(a){return a.length}}
W.fI.prototype={
gl:function(a){return a.length}}
W.ay.prototype={$iay:1}
W.fQ.prototype={
gl:function(a){return a.length}}
W.c4.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.D]},
$iA:1,
$aA:function(){return[W.D]},
$ax:function(){return[W.D]},
$ij:1,
$aj:function(){return[W.D]},
$io:1,
$ao:function(){return[W.D]}}
W.aU.prototype={$iaU:1,
gdA:function(a){return a.data}}
W.c5.prototype={$ic5:1}
W.by.prototype={$iby:1}
W.h7.prototype={
i:function(a){return String(a)}}
W.ht.prototype={
gl:function(a){return a.length}}
W.cd.prototype={$icd:1}
W.hu.prototype={
h:function(a,b){return P.b3(a.get(b))},
F:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b3(u.value[1]))}},
ga3:function(a){var u=H.b([],[P.h])
this.F(a,new W.hv(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.y("Not supported"))},
$aa1:function(){return[P.h,null]},
$iT:1,
$aT:function(){return[P.h,null]}}
W.hv.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hw.prototype={
h:function(a,b){return P.b3(a.get(b))},
F:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b3(u.value[1]))}},
ga3:function(a){var u=H.b([],[P.h])
this.F(a,new W.hx(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.y("Not supported"))},
$aa1:function(){return[P.h,null]},
$iT:1,
$aT:function(){return[P.h,null]}}
W.hx.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aB.prototype={$iaB:1}
W.hy.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aB]},
$iA:1,
$aA:function(){return[W.aB]},
$ax:function(){return[W.aB]},
$ij:1,
$aj:function(){return[W.aB]},
$io:1,
$ao:function(){return[W.aB]}}
W.aC.prototype={$iaC:1}
W.a5.prototype={
gaL:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.lE("No elements"))
if(t>1)throw H.c(P.lE("More than one element"))
return u.firstChild},
ab:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
m:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.d(t,b)
u.replaceChild(c,t[b])},
gR:function(a){var u=this.a.childNodes
return new W.d9(u,u.length)},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$aq:function(){return[W.D]},
$ax:function(){return[W.D]},
$aj:function(){return[W.D]},
$ao:function(){return[W.D]}}
W.D.prototype={
i1:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
i4:function(a,b){var u,t
try{u=a.parentNode
J.mG(u,b,a)}catch(t){H.ag(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.er(a):u},
fZ:function(a,b,c){return a.replaceChild(b,c)},
$iD:1}
W.dq.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.D]},
$iA:1,
$aA:function(){return[W.D]},
$ax:function(){return[W.D]},
$ij:1,
$aj:function(){return[W.D]},
$io:1,
$ao:function(){return[W.D]}}
W.aD.prototype={$iaD:1,
gl:function(a){return a.length}}
W.hN.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aD]},
$iA:1,
$aA:function(){return[W.aD]},
$ax:function(){return[W.aD]},
$ij:1,
$aj:function(){return[W.aD]},
$io:1,
$ao:function(){return[W.aD]}}
W.hY.prototype={
h:function(a,b){return P.b3(a.get(b))},
F:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b3(u.value[1]))}},
ga3:function(a){var u=H.b([],[P.h])
this.F(a,new W.hZ(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.y("Not supported"))},
$aa1:function(){return[P.h,null]},
$iT:1,
$aT:function(){return[P.h,null]}}
W.hZ.prototype={
$2:function(a,b){return this.a.push(a)}}
W.i0.prototype={
gl:function(a){return a.length}}
W.aF.prototype={$iaF:1}
W.ib.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aF]},
$iA:1,
$aA:function(){return[W.aF]},
$ax:function(){return[W.aF]},
$ij:1,
$aj:function(){return[W.aF]},
$io:1,
$ao:function(){return[W.aF]}}
W.aG.prototype={$iaG:1}
W.ic.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aG]},
$iA:1,
$aA:function(){return[W.aG]},
$ax:function(){return[W.aG]},
$ij:1,
$aj:function(){return[W.aG]},
$io:1,
$ao:function(){return[W.aG]}}
W.aH.prototype={$iaH:1,
gl:function(a){return a.length}}
W.ih.prototype={
h:function(a,b){return a.getItem(b)},
m:function(a,b,c){a.setItem(b,c)},
F:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga3:function(a){var u=H.b([],[P.h])
this.F(a,new W.ii(u))
return u},
gl:function(a){return a.length},
$aa1:function(){return[P.h,P.h]},
$iT:1,
$aT:function(){return[P.h,P.h]}}
W.ii.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ar.prototype={$iar:1}
W.dF.prototype={
ao:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bE(a,b,c,d)
u=W.mX("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.a5(t).ab(0,new W.a5(u))
return t}}
W.il.prototype={
ao:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bE(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.F.ao(u.createElement("table"),b,c,d)
u.toString
u=new W.a5(u)
s=u.gaL(u)
s.toString
u=new W.a5(s)
r=u.gaL(u)
t.toString
r.toString
new W.a5(t).ab(0,new W.a5(r))
return t}}
W.im.prototype={
ao:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bE(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.F.ao(u.createElement("table"),b,c,d)
u.toString
u=new W.a5(u)
s=u.gaL(u)
t.toString
s.toString
new W.a5(t).ab(0,new W.a5(s))
return t}}
W.co.prototype={$ico:1}
W.aI.prototype={$iaI:1}
W.as.prototype={$ias:1}
W.iq.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.as]},
$iA:1,
$aA:function(){return[W.as]},
$ax:function(){return[W.as]},
$ij:1,
$aj:function(){return[W.as]},
$io:1,
$ao:function(){return[W.as]}}
W.ir.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aI]},
$iA:1,
$aA:function(){return[W.aI]},
$ax:function(){return[W.aI]},
$ij:1,
$aj:function(){return[W.aI]},
$io:1,
$ao:function(){return[W.aI]}}
W.iz.prototype={
gl:function(a){return a.length}}
W.aJ.prototype={$iaJ:1}
W.bE.prototype={$ibE:1}
W.iD.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aJ]},
$iA:1,
$aA:function(){return[W.aJ]},
$ax:function(){return[W.aJ]},
$ij:1,
$aj:function(){return[W.aJ]},
$io:1,
$ao:function(){return[W.aJ]}}
W.iE.prototype={
gl:function(a){return a.length}}
W.bl.prototype={}
W.iY.prototype={
i:function(a){return String(a)}}
W.ja.prototype={
gl:function(a){return a.length}}
W.bo.prototype={
ghv:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.y("deltaY is not supported"))},
ghu:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.y("deltaX is not supported"))},
$ibo:1}
W.cy.prototype={
h_:function(a,b){return a.requestAnimationFrame(H.bQ(b,1))},
eU:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.ji.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.H]},
$iA:1,
$aA:function(){return[W.H]},
$ax:function(){return[W.H]},
$ij:1,
$aj:function(){return[W.H]},
$io:1,
$ao:function(){return[W.H]}}
W.e_.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
t:function(a,b){var u
if(b==null)return!1
u=J.P(b)
return!!u.$iaa&&a.left===u.gbs(b)&&a.top===u.gbz(b)&&a.width===u.gau(b)&&a.height===u.gap(b)},
gI:function(a){return W.lY(C.c.gI(a.left),C.c.gI(a.top),C.c.gI(a.width),C.c.gI(a.height))},
gap:function(a){return a.height},
gau:function(a){return a.width}}
W.jn.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.ay]},
$iA:1,
$aA:function(){return[W.ay]},
$ax:function(){return[W.ay]},
$ij:1,
$aj:function(){return[W.ay]},
$io:1,
$ao:function(){return[W.ay]}}
W.ei.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.D]},
$iA:1,
$aA:function(){return[W.D]},
$ax:function(){return[W.D]},
$ij:1,
$aj:function(){return[W.D]},
$io:1,
$ao:function(){return[W.D]}}
W.jB.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aH]},
$iA:1,
$aA:function(){return[W.aH]},
$ax:function(){return[W.aH]},
$ij:1,
$aj:function(){return[W.aH]},
$io:1,
$ao:function(){return[W.aH]}}
W.jG.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.ar]},
$iA:1,
$aA:function(){return[W.ar]},
$ax:function(){return[W.ar]},
$ij:1,
$aj:function(){return[W.ar]},
$io:1,
$ao:function(){return[W.ar]}}
W.jg.prototype={
F:function(a,b){var u,t,s,r,q
for(u=this.ga3(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.m)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga3:function(a){var u,t,s,r=this.a.attributes,q=H.b([],[P.h])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.d(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q},
$aa1:function(){return[P.h,P.h]},
$aT:function(){return[P.h,P.h]}}
W.jk.prototype={
h:function(a,b){return this.a.getAttribute(b)},
m:function(a,b,c){this.a.setAttribute(b,c)},
gl:function(a){return this.ga3(this).length}}
W.jl.prototype={}
W.jm.prototype={
$1:function(a){return this.a.$1(a)}}
W.cz.prototype={
eB:function(a){var u
if($.cA.ghH($.cA)){for(u=0;u<262;++u)$.cA.m(0,C.Z[u],W.oW())
for(u=0;u<12;++u)$.cA.m(0,C.p[u],W.oX())}},
aT:function(a){return $.mC().C(0,W.c_(a))},
az:function(a,b,c){var u=$.cA.h(0,H.e(W.c_(a))+"::"+b)
if(u==null)u=$.cA.h(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$iaY:1}
W.M.prototype={
gR:function(a){return new W.d9(a,this.gl(a))}}
W.dr.prototype={
aT:function(a){return C.b.dq(this.a,new W.hG(a))},
az:function(a,b,c){return C.b.dq(this.a,new W.hF(a,b,c))},
$iaY:1}
W.hG.prototype={
$1:function(a){return a.aT(this.a)}}
W.hF.prototype={
$1:function(a){return a.az(this.a,this.b,this.c)}}
W.eq.prototype={
eC:function(a,b,c,d){var u,t,s
this.a.ab(0,c)
u=b.bC(0,new W.jy())
t=b.bC(0,new W.jz())
this.b.ab(0,u)
s=this.c
s.ab(0,C.z)
s.ab(0,t)},
aT:function(a){return this.a.C(0,W.c_(a))},
az:function(a,b,c){var u=this,t=W.c_(a),s=u.c
if(s.C(0,H.e(t)+"::"+b))return u.d.hj(c)
else if(s.C(0,"*::"+b))return u.d.hj(c)
else{s=u.b
if(s.C(0,H.e(t)+"::"+b))return!0
else if(s.C(0,"*::"+b))return!0
else if(s.C(0,H.e(t)+"::*"))return!0
else if(s.C(0,"*::*"))return!0}return!1},
$iaY:1}
W.jy.prototype={
$1:function(a){return!C.b.C(C.p,a)}}
W.jz.prototype={
$1:function(a){return C.b.C(C.p,a)}}
W.jJ.prototype={
az:function(a,b,c){if(this.ev(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.C(0,b)
return!1}}
W.jK.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)}}
W.jH.prototype={
aT:function(a){var u=J.P(a)
if(!!u.$icl)return!1
u=!!u.$il
if(u&&W.c_(a)==="foreignObject")return!1
if(u)return!0
return!1},
az:function(a,b,c){if(b==="is"||C.a.a8(b,"on"))return!1
return this.aT(a)},
$iaY:1}
W.d9.prototype={
v:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.bV(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gA:function(a){return this.d}}
W.aY.prototype={}
W.jw.prototype={}
W.eJ.prototype={
cF:function(a){new W.jU(this).$2(a,null)},
b5:function(a,b){if(b==null)J.ld(a)
else b.removeChild(a)},
h3:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
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
p=u?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ag(r)}t="element unprintable"
try{t=J.a6(a)}catch(r){H.ag(r)}try{s=W.c_(a)
this.h2(a,b,p,t,s,o,n)}catch(r){if(H.ag(r) instanceof P.an)throw r
else{this.b5(a,b)
window
q="Removing corrupted element "+H.e(t)
if(typeof console!="undefined")window.console.warn(q)}}},
h2:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=this
if(c){p.b5(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!p.a.aT(a)){p.b5(a,b)
window
u="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!p.a.az(a,"is",g)){p.b5(a,b)
window
u="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga3(f)
t=H.b(u.slice(0),[H.b4(u,0)])
for(s=f.ga3(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.d(t,s)
r=t[s]
if(!p.a.az(a,J.mN(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.e(e)+" "+r+'="'+H.e(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.P(a).$ico)p.cF(a.content)}}
W.jU.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.h3(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.b5(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ag(s)
r=u
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=t}}}
W.dZ.prototype={}
W.e0.prototype={}
W.e1.prototype={}
W.e2.prototype={}
W.e3.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.ee.prototype={}
W.ef.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.ej.prototype={}
W.ek.prototype={}
W.en.prototype={}
W.eo.prototype={}
W.ep.prototype={}
W.cF.prototype={}
W.cG.prototype={}
W.er.prototype={}
W.es.prototype={}
W.ew.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.cH.prototype={}
W.cI.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eR.prototype={}
W.eS.prototype={}
W.eT.prototype={}
P.jC.prototype={
ck:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
t.push(a)
this.b.push(null)
return s},
bB:function(a){var u,t,s,r,q,p=this,o={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.P(a)
if(!!u.$iae)return new Date(a.a)
if(!!u.$ins)throw H.c(P.iP("structured clone of RegExp"))
if(!!u.$iaq)return a
if(!!u.$ibs)return a
if(!!u.$ic2)return a
if(!!u.$iaU)return a
if(!!u.$icf||!!u.$ibj||!!u.$icd)return a
if(!!u.$iT){t=p.ck(a)
s=p.b
r=s.length
if(t>=r)return H.d(s,t)
q=o.a=s[t]
if(q!=null)return q
q={}
o.a=q
if(t>=r)return H.d(s,t)
s[t]=q
u.F(a,new P.jE(o,p))
return o.a}if(!!u.$io){t=p.ck(a)
o=p.b
if(t>=o.length)return H.d(o,t)
q=o[t]
if(q!=null)return q
return p.hr(a,t)}if(!!u.$in3){t=p.ck(a)
u=p.b
s=u.length
if(t>=s)return H.d(u,t)
q=o.b=u[t]
if(q!=null)return q
q={}
o.b=q
if(t>=s)return H.d(u,t)
u[t]=q
p.hD(a,new P.jF(o,p))
return o.b}throw H.c(P.iP("structured clone of other type"))},
hr:function(a,b){var u,t=J.au(a),s=t.gl(a),r=new Array(s),q=this.b
if(b>=q.length)return H.d(q,b)
q[b]=r
if(typeof s!=="number")return H.r(s)
u=0
for(;u<s;++u){q=this.bB(t.h(a,u))
if(u>=r.length)return H.d(r,u)
r[u]=q}return r}}
P.jE.prototype={
$2:function(a,b){this.a.a[a]=this.b.bB(b)},
$S:3}
P.jF.prototype={
$2:function(a,b){this.a.b[a]=this.b.bB(b)},
$S:3}
P.eG.prototype={$iaU:1,
gdA:function(a){return this.a}}
P.k4.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.jD.prototype={
hD:function(a,b){var u,t,s,r
for(u=Object.keys(a),t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,a[r])}}}
P.fF.prototype={
gbl:function(){var u=this.b,t=H.l3(u,"x",0)
return new H.c9(new H.cx(u,new P.fG(),[t]),new P.fH(),[t,W.S])},
m:function(a,b,c){var u=this.gbl()
J.mL(u.b.$1(J.eX(u.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.ai(this.gbl().a)},
h:function(a,b){var u=this.gbl()
return u.b.$1(J.eX(u.a,b))},
gR:function(a){var u=P.kM(this.gbl(),!1,W.S)
return new J.a7(u,u.length)},
$aq:function(){return[W.S]},
$ax:function(){return[W.S]},
$aj:function(){return[W.S]},
$ao:function(){return[W.S]}}
P.fG.prototype={
$1:function(a){return!!J.P(a).$iS}}
P.fH.prototype={
$1:function(a){return H.i(a,"$iS")}}
P.js.prototype={
gby:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.r(t)
return u+t},
gdv:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.r(t)
return u+t},
i:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
t:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.P(b)
if(!!u.$iaa){t=q.a
if(t==u.gbs(b)){s=q.b
if(s==u.gbz(b)){r=q.c
if(typeof t!=="number")return t.B()
if(typeof r!=="number")return H.r(r)
if(t+r===u.gby(b)){t=q.d
if(typeof s!=="number")return s.B()
if(typeof t!=="number")return H.r(t)
u=s+t===u.gdv(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gI:function(a){var u=this,t=u.a,s=J.cU(t),r=u.b,q=J.cU(r),p=u.c
if(typeof t!=="number")return t.B()
if(typeof p!=="number")return H.r(p)
p=C.d.gI(t+p)
t=u.d
if(typeof r!=="number")return r.B()
if(typeof t!=="number")return H.r(t)
t=C.d.gI(r+t)
return P.nS(P.jp(P.jp(P.jp(P.jp(0,s),q),p),t))}}
P.aa.prototype={
gbs:function(a){return this.a},
gbz:function(a){return this.b},
gau:function(a){return this.c},
gap:function(a){return this.d}}
P.aV.prototype={$iaV:1}
P.h1.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.aV]},
$ax:function(){return[P.aV]},
$ij:1,
$aj:function(){return[P.aV]},
$io:1,
$ao:function(){return[P.aV]}}
P.aZ.prototype={$iaZ:1}
P.hI.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.aZ]},
$ax:function(){return[P.aZ]},
$ij:1,
$aj:function(){return[P.aZ]},
$io:1,
$ao:function(){return[P.aZ]}}
P.hQ.prototype={
gl:function(a){return a.length}}
P.cl.prototype={$icl:1}
P.ik.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
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
P.l.prototype={
gc4:function(a){return new P.fF(a,new W.a5(a))},
ao:function(a,b,c,d){var u,t,s,r,q,p=H.b([],[W.aY])
p.push(W.lX(null))
p.push(W.lZ())
p.push(new W.jH())
c=new W.eJ(new W.dr(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.t).hs(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.a5(s)
q=p.gaL(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$il:1}
P.b2.prototype={$ib2:1}
P.iF.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.b2]},
$ax:function(){return[P.b2]},
$ij:1,
$aj:function(){return[P.b2]},
$io:1,
$ao:function(){return[P.b2]}}
P.ea.prototype={}
P.eb.prototype={}
P.el.prototype={}
P.em.prototype={}
P.ex.prototype={}
P.ey.prototype={}
P.eE.prototype={}
P.eF.prototype={}
P.bF.prototype={$iq:1,
$aq:function(){return[P.v]},
$ij:1,
$aj:function(){return[P.v]},
$io:1,
$ao:function(){return[P.v]}}
P.f1.prototype={
gl:function(a){return a.length}}
P.f2.prototype={
h:function(a,b){return P.b3(a.get(b))},
F:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b3(u.value[1]))}},
ga3:function(a){var u=H.b([],[P.h])
this.F(a,new P.f3(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.y("Not supported"))},
$aa1:function(){return[P.h,null]},
$iT:1,
$aT:function(){return[P.h,null]}}
P.f3.prototype={
$2:function(a,b){return this.a.push(a)}}
P.f4.prototype={
gl:function(a){return a.length}}
P.br.prototype={}
P.hJ.prototype={
gl:function(a){return a.length}}
P.dY.prototype={}
P.dx.prototype={
ee:function(a,b,c,d,e,f,g,h,i,j){var u,t=i==null
if(!t&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}u=J.P(g)
if(!!u.$iaU&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,P.oM(g))
return}if(!!u.$ic5&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.cV("Incorrect number or type of arguments"))},
ed:function(a,b,c,d,e,f,g){return this.ee(a,b,c,d,e,f,g,null,null,null)}}
P.ie.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return P.b3(a.item(b))},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[[P.T,,,]]},
$ax:function(){return[[P.T,,,]]},
$ij:1,
$aj:function(){return[[P.T,,,]]},
$io:1,
$ao:function(){return[[P.T,,,]]}}
P.et.prototype={}
P.eu.prototype={}
K.aP.prototype={
aH:function(a,b){return!0},
i:function(a){return"all"}}
K.dc.prototype={
aH:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)if(u[s].aH(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.m)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s}}
K.bi.prototype={}
K.a9.prototype={
aH:function(a,b){return!this.eq(0,b)},
i:function(a){return"!["+this.cM(0)+"]"}}
K.hT.prototype={
aH:function(a,b){if(typeof b!=="number")return H.r(b)
return this.a<=b&&this.b>=b},
i:function(a){var u=H.bC(this.a),t=H.bC(this.b)
return u+".."+t}}
K.i1.prototype={
ez:function(a){var u,t,s,r
if(a.a.length<=0)throw H.c(P.w("May not create a Set with zero characters."))
u=P.v
t=new H.I([u,P.aN])
for(s=new H.bh(a,a.gl(a));s.v();)t.m(0,s.d,!0)
r=P.kM(t.ga3(t),!0,u)
C.b.ep(r)
this.a=r},
aH:function(a,b){return C.b.C(this.a,b)},
i:function(a){return P.cn(this.a,0,null)}}
L.dD.prototype={
j:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new L.dM(this.a.k(0,b))
r.a=H.b([],[K.bi])
r.c=!1
this.c.push(r)
return r},
hz:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
if(r.aH(0,a))return r}return},
i:function(a){return this.b},
dh:function(){var u,t,s,r,q,p=this,o="("+p.b+")",n=p.d
if(n!=null){n=n.b
o+=" => ["+n+"]"
u=p.a
if(u.c.C(0,n))o+=" (consume)"
for(n=p.d.c,n=n.ga3(n),n=n.gR(n);n.v();){t=n.gA(n)
o+="\n"
s=p.d.c.h(0,t)
t=o+("  -- "+H.e(t)+" => ["+H.e(s)+"]")
o=u.c.C(0,s)?t+" (consume)":t}}for(n=p.c,u=n.length,r=0;r<n.length;n.length===u||(0,H.m)(n),++r){q=n[r]
o=o+"\n"+("  -- "+q.i(0))}return o.charCodeAt(0)==0?o:o}}
L.dJ.prototype={
i:function(a){var u=H.l8(this.b,"\n","\\n"),t=H.l8(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
L.dK.prototype={
aJ:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.m)(c),++t){s=c[t]
this.c.m(0,s,b)}},
i:function(a){return this.b}}
L.iA.prototype={
k:function(a,b){var u=this.a.h(0,b)
if(u==null){u=new L.dD(this,b)
u.c=H.b([],[L.dM])
this.a.m(0,b,u)}return u},
S:function(a){var u,t=this.b.h(0,a)
if(t==null){t=new L.dK(a)
u=P.h
t.c=new H.I([u,u])
this.b.m(0,a,t)}return t},
cC:function(a){return this.ig(a)},
ig:function(a){var u=this
return P.oe(function(){var t=a
var s=0,r=1,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
return function $async$cC(b,a0){if(b===1){q=a0
s=r}while(true)switch(s){case 0:g=u.d
f=[P.v]
e=H.b([],f)
d=H.b([],f)
c=H.b([],f)
p=null,o=0,n=0,m=0
case 2:if(!!0){s=3
break}if(c.length!==0)l=C.b.i2(c,0)
else{if(!t.v()){s=3
break}l=t.d}d.push(l);++o
k=g.hz(l)
s=k==null?4:6
break
case 4:if(p==null){j=P.cn(d,0,null)
throw H.c(P.w("Untokenizable string [state: "+g.b+", index "+o+']: "'+j+'"'))}if(!!d.fixed$length)H.t(P.y("removeRange"))
P.b1(0,m,d.length)
d.splice(0,m-0)
C.b.ab(c,d)
d=H.b([],f)
e=H.b([],f)
g=u.d
s=!u.c.C(0,p.a)?7:8
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
p=new L.dJ(h==null?i.b:h,j,o)
m=d.length
n=o}case 5:s=2
break
case 3:s=p!=null&&!u.c.C(0,p.a)?10:11
break
case 10:s=12
return p
case 12:case 11:return P.nQ()
case 1:return P.nR(q)}}},L.dJ)},
i:function(a){var u,t=new P.Q(""),s=this.d
if(s!=null)t.a=s.dh()+"\n"
for(s=this.a,s=s.gih(s),s=s.gR(s);s.v();){u=s.gA(s)
if(u!=this.d)t.a+=u.dh()+"\n"}s=t.a
return s.charCodeAt(0)==0?s:s}}
L.dM.prototype={
i:function(a){return this.b.b+": "+this.cM(0)}}
O.aQ.prototype={
bj:function(a){this.a=H.b([],[a])
this.c=this.b=null},
cG:function(a,b,c){this.b=b
this.c=a},
b0:function(a,b){return this.cG(a,null,b)},
d7:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
cP:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gR:function(a){var u=this.a
return new J.a7(u,u.length)},
J:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
n:function(a,b){var u,t,s=this,r=[H.l3(s,"aQ",0)]
if(s.d7(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.cP(t,H.b([b],r))}},
ab:function(a,b){var u,t
if(this.d7(b)){u=this.a
t=u.length
C.b.ab(u,b)
this.cP(t,b)}},
$ij:1}
O.cc.prototype={
gl:function(a){return this.a.length},
gp:function(){var u=this.b
return u==null?this.b=D.C():u},
aM:function(){var u=this.b
if(u!=null)u.D(null)},
ga4:function(a){var u=this.a
if(u.length>0)return C.b.gaA(u)
else return V.bz()},
bx:function(a){var u=this.a
if(a==null)u.push(V.bz())
else u.push(a)
this.aM()},
aI:function(){var u=this.a
if(u.length>0){u.pop()
this.aM()}}}
E.f9.prototype={}
E.aT.prototype={
scI:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gp().W(0,s.ge5())
u=s.c
if(u!=null)u.gp().n(0,s.ge5())
t=new D.z("shape",r,s.c)
t.b=!0
s.bu(t)}},
ad:function(a,b){var u
for(u=this.y.a,u=new J.a7(u,u.length);u.v();)u.d.ad(0,b)},
a5:function(a){var u,t=this,s=a.dx
s.a.push(s.ga4(s))
s.aM()
a.cv(t.f)
s=a.dy
u=(s&&C.b).gaA(s)
if(u!=null&&t.d!=null)u.cA(a,t)
for(s=t.y.a,s=new J.a7(s,s.length);s.v();)s.d.a5(a)
a.cu()
a.dx.aI()},
bu:function(a){var u=this.z
if(u!=null)u.D(a)},
ac:function(){return this.bu(null)},
e6:function(a){this.e=null
this.bu(a)},
hS:function(){return this.e6(null)},
e4:function(a){this.bu(a)},
hP:function(){return this.e4(null)},
hO:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.ge3(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.c0()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.ac()},
hR:function(a,b){var u,t
for(u=b.gR(b),t=this.ge3();u.v();)u.gA(u).gp().W(0,t)
this.ac()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.bu.prototype={
i:function(a){return this.b}}
E.bA.prototype={
i:function(a){return this.b}}
E.e4.prototype={}
E.hU.prototype={
ey:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.ae(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cc()
t=[V.aW]
u.a=H.b([],t)
u.gp().n(0,new E.hV(s))
s.cy=u
u=new O.cc()
u.a=H.b([],t)
u.gp().n(0,new E.hW(s))
s.db=u
u=new O.cc()
u.a=H.b([],t)
u.gp().n(0,new E.hX(s))
s.dx=u
u=H.b([],[O.dG])
s.dy=u
u.push(null)
s.fr=new H.I([P.h,A.dy])},
gi0:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga4(s)
u=t.db
u=t.z=s.q(0,u.ga4(u))
s=u}return s},
ge9:function(){var u,t=this,s=t.ch
if(s==null){s=t.gi0()
u=t.dx
u=t.ch=s.q(0,u.ga4(u))
s=u}return s},
cv:function(a){var u=this.dy
u.push(a==null?(u&&C.b).gaA(u):a)},
cu:function(){var u=this.dy
if(u.length>1)u.pop()},
bY:function(a){var u=a.b
if(u.length===0)throw H.c(P.w("May not cache a shader with no name."))
if(this.fr.c5(0,u))throw H.c(P.w('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.m(0,u,a)}}
E.hV.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.hW.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.hX.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.dH.prototype={
cS:function(a){this.eb()},
cR:function(){return this.cS(null)},
ghE:function(){var u,t=this,s=Date.now(),r=C.d.aa(P.lk(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.ae(s,!1)
return u/r},
d9:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.q()
if(typeof r!=="number")return H.r(r)
u=C.c.cl(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.q()
t=C.c.cl(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.lH(C.n,s.gi5())}},
eb:function(){if(!this.cx){this.cx=!0
var u=window
C.H.eU(u)
C.H.h_(u,W.m9(new E.iy(this),P.ad))}},
i3:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.d9()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ae(r,!1)
s.y=P.lk(r-s.r.a).a*0.000001
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
o.a5(p.e)}s=p.Q
if(s!=null)s.D(null)}catch(q){u=H.ag(q)
t=H.l4(q)
P.l7("Error: "+H.e(u))
P.l7("Stack: "+H.e(t))
throw H.c(u)}}}
E.iy.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.i3()}}}
Z.dW.prototype={}
Z.cY.prototype={
Z:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ag(s)
t=P.w('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.e(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.cw.prototype={}
Z.b8.prototype={
aw:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
Z:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].Z(a)},
at:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
a5:function(a){var u,t,s,r,q,p=this.b.length
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
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a6(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.j(p,", ")+"\nAttrs:   "+C.b.j(r,", ")}}
Z.bx.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.ck(this.c))+"'")+"]"}}
Z.aL.prototype={
gcJ:function(a){var u=this.a,t=(u&$.ah().a)!==0?3:0
if((u&$.b7().a)!==0)t+=3
if((u&$.b6().a)!==0)t+=3
if((u&$.av().a)!==0)t+=2
if((u&$.bq().a)!==0)t+=3
if((u&$.cR().a)!==0)t+=3
if((u&$.cS().a)!==0)t+=4
if((u&$.bU().a)!==0)++t
return(u&$.b5().a)!==0?t+4:t},
hk:function(a){var u,t=$.ah(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.b7()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b6()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.av()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bq()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cR()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cS()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bU()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b5()
if((s&t.a)!==0)if(u===a)return t
return $.mA()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aL))return!1
return this.a===b.a},
i:function(a){var u=H.b([],[P.h]),t=this.a
if((t&$.ah().a)!==0)u.push("Pos")
if((t&$.b7().a)!==0)u.push("Norm")
if((t&$.b6().a)!==0)u.push("Binm")
if((t&$.av().a)!==0)u.push("Txt2D")
if((t&$.bq().a)!==0)u.push("TxtCube")
if((t&$.cR().a)!==0)u.push("Clr3")
if((t&$.cS().a)!==0)u.push("Clr4")
if((t&$.bU().a)!==0)u.push("Weight")
if((t&$.b5().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.b.j(u,"|")}}
D.fc.prototype={}
D.c0.prototype={
n:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.X]}]):u).push(b)},
W:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.b.C(s,b)
if(s===!0){s=t.a
u=(s&&C.b).W(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.b.C(s,b)
if(s===!0){s=t.b
u=(s&&C.b).W(s,b)||u}return u},
D:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.b.F(P.kM(u,!0,{func:1,ret:-1,args:[D.X]}),new D.fC(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.X]}])
C.b.F(u,new D.fD(q))}return!0},
ca:function(){return this.D(null)},
aK:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.D(u)}}}}
D.fC.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.fD.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.X.prototype={}
D.bc.prototype={}
D.bd.prototype={}
D.z.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cZ.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cZ))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.dh.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dh))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.h0.prototype={
hX:function(a){this.c=a.b
this.d.n(0,a.a)
return!1},
hT:function(a){this.c=a.b
this.d.W(0,a.a)
return!1}}
X.dk.prototype={}
X.h8.prototype={
b3:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.q()
u=b.b
t=q.ch
if(typeof u!=="number")return u.q()
s=new V.a3(o.a+n*m,o.b+u*t)
t=q.a.gaU()
r=new X.aX(a,V.b_(),q.x,t,s)
r.b=!0
q.z=new P.ae(p,!1)
q.x=s
return r},
ct:function(a,b){this.r=a.a
return!1},
bd:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.ek()
if(typeof u!=="number")return u.aj()
this.r=(u&~t)>>>0
return!1},
bc:function(a,b){var u=this.d
if(u==null)return!1
u.D(this.b3(a,b))
return!0},
hY:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaU()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.q()
q=a.b
p=o.cy
if(typeof q!=="number")return q.q()
t=new X.ce(new V.G(s*r,q*p),u,t)
t.b=!0
n.D(t)
return!0},
fu:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dk(c,r.a.gaU(),b)
s.b=!0
t.D(s)
r.y=new P.ae(u,!1)
r.x=V.b_()}}
X.ak.prototype={
t:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.ak))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.aX.prototype={}
X.hz.prototype={
bL:function(a,b,c){var u=this,t=new P.ae(Date.now(),!1),s=u.a.gaU(),r=new X.aX(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
ct:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.D(this.bL(a,b,!0))
return!0},
bd:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.ek()
if(typeof t!=="number")return t.aj()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.D(u.bL(a,b,!0))
return!0},
bc:function(a,b){var u=this.d
if(u==null)return!1
u.D(this.bL(a,b,!1))
return!0},
hZ:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaU()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.q()
r=a.b
q=p.ch
if(typeof r!=="number")return r.q()
u=new X.ce(new V.G(t*s,r*q),u,b)
u.b=!0
o.D(u)
return!0},
gdC:function(){var u=this.b
return u==null?this.b=D.C():u},
gbA:function(){var u=this.c
return u==null?this.c=D.C():u},
ge2:function(){var u=this.d
return u==null?this.d=D.C():u}}
X.ce.prototype={}
X.hP.prototype={}
X.dL.prototype={}
X.iC.prototype={
b3:function(a,b){var u=this,t=new P.ae(Date.now(),!1),s=a.length>0?a[0]:V.b_(),r=u.a.gaU(),q=new X.dL(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
hW:function(a){var u=this.b
if(u==null)return!1
u.D(this.b3(a,!0))
return!0},
hU:function(a){var u=this.c
if(u==null)return!1
u.D(this.b3(a,!0))
return!0},
hV:function(a){var u=this.d
if(u==null)return!1
u.D(this.b3(a,!1))
return!0}}
X.dR.prototype={
gaU:function(){var u=this.a,t=C.j.gdw(u).c
t.toString
u=C.j.gdw(u).d
u.toString
return V.lC(0,0,t,u)},
cZ:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.dh(u,new X.ak(t,a.altKey,a.shiftKey))},
aR:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.ak(t,a.altKey,a.shiftKey)},
bX:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.ak(t,a.altKey,a.shiftKey)},
aF:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.K()
u=t.top
if(typeof r!=="number")return r.K()
return new V.a3(s-q,r-u)},
b4:function(a){return new V.G(a.movementX,a.movementY)},
bV:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.a3])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
q=C.c.a0(r.pageX)
C.c.a0(r.pageY)
p=o.left
C.c.a0(r.pageX)
n.push(new V.a3(q-p,C.c.a0(r.pageY)-o.top))}return n},
aD:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cZ(u,new X.ak(t,a.altKey,a.shiftKey))},
bM:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.K()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.K()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fn:function(a){this.f=!0},
fb:function(a){this.f=!1},
fh:function(a){if(this.f&&this.bM(a))a.preventDefault()},
fs:function(a){var u
if(!this.f)return
u=this.cZ(a)
this.b.hX(u)},
fp:function(a){var u
if(!this.f)return
u=this.cZ(a)
this.b.hT(u)},
fw:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aR(a)
if(r.x){u=r.aD(a)
t=r.b4(a)
if(r.d.ct(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.aD(a)
s=r.aF(a)
if(r.c.ct(u,s))a.preventDefault()},
fC:function(a){var u,t,s,r=this
r.aR(a)
u=r.aD(a)
if(r.x){t=r.b4(a)
if(r.d.bd(u,t))a.preventDefault()
return}if(r.r)return
s=r.aF(a)
if(r.c.bd(u,s))a.preventDefault()},
fl:function(a){var u,t,s,r=this
if(!r.bM(a)){r.aR(a)
u=r.aD(a)
if(r.x){t=r.b4(a)
if(r.d.bd(u,t))a.preventDefault()
return}if(r.r)return
s=r.aF(a)
if(r.c.bd(u,s))a.preventDefault()}},
fA:function(a){var u,t,s,r=this
r.aR(a)
u=r.aD(a)
if(r.x){t=r.b4(a)
if(r.d.bc(u,t))a.preventDefault()
return}if(r.r)return
s=r.aF(a)
if(r.c.bc(u,s))a.preventDefault()},
fj:function(a){var u,t,s,r=this
if(!r.bM(a)){r.aR(a)
u=r.aD(a)
if(r.x){t=r.b4(a)
if(r.d.bc(u,t))a.preventDefault()
return}if(r.r)return
s=r.aF(a)
if(r.c.bc(u,s))a.preventDefault()}},
fE:function(a){var u,t,s=this
s.aR(a)
u=new V.G((a&&C.G).ghu(a),C.G.ghv(a)).q(0,s.Q)
if(s.x){if(s.d.hY(u))a.preventDefault()
return}if(s.r)return
t=s.aF(a)
if(s.c.hZ(u,t))a.preventDefault()},
fG:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aD(s.y)
t=s.aF(s.y)
s.d.fu(u,t,r)}},
fW:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bX(a)
u=t.bV(a)
if(t.e.hW(u))a.preventDefault()},
fS:function(a){var u
this.bX(a)
u=this.bV(a)
if(this.e.hU(u))a.preventDefault()},
fU:function(a){var u
this.bX(a)
u=this.bV(a)
if(this.e.hV(u))a.preventDefault()}}
D.f6.prototype={$ia8:1}
D.fr.prototype={$ia8:1}
D.a8.prototype={}
D.di.prototype={
cT:function(a){var u=this.y
if(u!=null)u.D(a)},
d6:function(a){var u=this.z
if(u!=null)u.D(a)},
ft:function(){return this.d6(null)},
fI:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.m)(a),++t){s=a[t]
if(s==null||this.eO(s))return!1}return!0},
f5:function(a,b){var u,t,s,r
for(u=b.length,t=this.gd5(),s=0;s<b.length;b.length===u||(0,H.m)(b),++s){r=b[s]
r.gp().n(0,t)}u=new D.bc()
u.b=!0
this.cT(u)},
fM:function(a,b){var u,t,s
for(u=b.gR(b),t=this.gd5();u.v();){s=u.gA(u)
C.b.W(this.e,s)
s.gp().W(0,t)}u=new D.bd()
u.b=!0
this.cT(u)},
eO:function(a){var u=C.b.C(this.e,a)
return u},
$aj:function(){return[D.a8]},
$aaQ:function(){return[D.a8]}}
D.hO.prototype={$ia8:1}
D.id.prototype={$ia8:1}
V.a_.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a_))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"]"}}
V.ao.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ao))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.E(u.a,3,0)+", "+V.E(u.b,3,0)+", "+V.E(u.c,3,0)+", "+V.E(u.d,3,0)+"]"}}
V.fB.prototype={}
V.cb.prototype={
a7:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.K])
return t},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cb))return!1
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
i:function(a){var u,t,s,r,q=this,p=[P.K],o=V.bS(H.b([q.a,q.d,q.r],p),3,0),n=V.bS(H.b([q.b,q.e,q.x],p),3,0),m=V.bS(H.b([q.c,q.f,q.y],p),3,0)
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
V.aW.prototype={
a7:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.K])
return t},
co:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.B().a)return V.bz()
u=1/b1
t=-n
s=-a0
return V.aA((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
q:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.aA(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bg:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.Y(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aW))return!1
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
i:function(a){return this.P()},
G:function(a){var u,t,s,r,q,p=this,o=[P.K],n=V.bS(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.bS(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.bS(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.bS(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
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
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a3))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+"]"}}
V.Y.prototype={
K:function(a,b){return new V.Y(this.a-b.a,this.b-b.b,this.c-b.c)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.Y))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"]"}}
V.b0.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.b0))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.E(u.a,3,0)+", "+V.E(u.b,3,0)+", "+V.E(u.c,3,0)+", "+V.E(u.d,3,0)+"]"}}
V.dw.prototype={
gam:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dw))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.E(u.a,3,0)+", "+V.E(u.b,3,0)+", "+V.E(u.c,3,0)+", "+V.E(u.d,3,0)+"]"}}
V.G.prototype={
bb:function(a){return Math.sqrt(this.H(this))},
H:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.r(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.r(t)
return s*r+u*t},
q:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.q()
if(typeof b!=="number")return H.r(b)
u=this.b
if(typeof u!=="number")return u.q()
return new V.G(t*b,u*b)},
w:function(a,b){var u,t
if(Math.abs(b-0)<$.B().a){u=$.lQ
return u==null?$.lQ=new V.G(0,0):u}u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
return new V.G(u/b,t/b)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.G))return!1
u=b.a
t=this.a
s=$.B()
s.toString
if(typeof u!=="number")return u.K()
if(typeof t!=="number")return H.r(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.K()
if(typeof t!=="number")return H.r(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+"]"}}
V.J.prototype={
bb:function(a){return Math.sqrt(this.H(this))},
H:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cp:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.J(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
b9:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.J(u*t-s*r,s*q-p*t,p*r-u*q)},
B:function(a,b){return new V.J(this.a+b.a,this.b+b.b,this.c+b.c)},
U:function(a){return new V.J(-this.a,-this.b,-this.c)},
w:function(a,b){if(Math.abs(b-0)<$.B().a)return V.dV()
return new V.J(this.a/b,this.b/b,this.c/b)},
e1:function(){var u=$.B().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.J))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"]"}}
V.cv.prototype={
bb:function(a){var u=this,t=u.a,s=u.b,r=u.c,q=u.d
return Math.sqrt(t*t+s*s+r*r+q*q)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cv))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.E(u.a,3,0)+", "+V.E(u.b,3,0)+", "+V.E(u.c,3,0)+", "+V.E(u.d,3,0)+"]"}}
U.ff.prototype={
bG:function(a){var u=V.pb(a,this.c,this.b)
return u},
gp:function(){var u=this.y
return u==null?this.y=D.C():u},
T:function(a){var u=this.y
if(u!=null)u.D(a)},
scD:function(a,b){},
scq:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.B().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bG(u)}s=new D.z("maximumLocation",s,t.b)
s.b=!0
t.T(s)}},
scs:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.B().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bG(u)}s=new D.z("minimumLocation",s,t.c)
s.b=!0
t.T(s)}},
sal:function(a,b){var u,t=this
b=t.bG(b)
u=t.d
if(!(Math.abs(u-b)<$.B().a)){t.d=b
u=new D.z("location",u,b)
u.b=!0
t.T(u)}},
scr:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.B().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.z("maximumVelocity",r,a)
r.b=!0
s.T(r)}},
sX:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.B().a)){u.f=a
t=new D.z("velocity",t,a)
t.b=!0
u.T(t)}},
sc8:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.B().a)){this.x=a
u=new D.z("dampening",u,a)
u.b=!0
this.T(u)}},
ad:function(a,b){var u,t,s,r=this,q=r.f,p=$.B().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sal(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.B().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sX(u)}}}
U.d1.prototype={
gp:function(){var u=this.b
return u==null?this.b=D.C():u},
b_:function(a,b,c){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.d1))return!1
return J.L(this.a,b.a)},
i:function(a){return"Constant: "+this.a.G("          ")}}
U.c3.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.C():u},
T:function(a){var u=this.e
if(u!=null)u.D(a)},
ah:function(){return this.T(null)},
f3:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaQ(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.gp()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bc()
u.b=!0
this.T(u)},
fK:function(a,b){var u,t
for(u=b.gR(b),t=this.gaQ();u.v();)u.gA(u).gp().W(0,t)
u=new D.bd()
u.b=!0
this.T(u)},
b_:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.O()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.a7(r,r.length),u=null;r.v();){q=r.d
if(q!=null){t=q.b_(0,b,c)
if(t!=null)u=u==null?t:t.q(0,u)}}s.f=u==null?V.bz():u
r=s.e
if(r!=null)r.aK(0)}return s.f},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.c3))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.d(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.d(r,t)
if(!J.L(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$aj:function(){return[U.af]},
$aaQ:function(){return[U.af]},
$iaf:1}
U.af.prototype={}
U.dS.prototype={
gp:function(){var u=this.cy
return u==null?this.cy=D.C():u},
T:function(a){var u=this.cy
if(u!=null)u.D(a)},
ah:function(){return this.T(null)},
b6:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdC().n(0,u.gbN())
u.a.c.ge2().n(0,u.gbP())
u.a.c.gbA().n(0,u.gbR())
return!0},
bO:function(a){var u=this
if(!J.L(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bQ:function(a){var u,t,s,r,q,p,o,n=this
H.i(a,"$iaX")
if(!n.y)return
if(n.x){u=a.d.K(0,a.y)
u=new V.G(u.a,u.b)
u=u.H(u)
t=n.r
if(typeof t!=="number")return H.r(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.K(0,a.y)
u=new V.G(t.a,t.b).q(0,2).w(0,u.gam())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.q()
s=n.e
if(typeof s!=="number")return H.r(s)
t.sX(u*10*s)}else{u=a.c
t=a.d
s=t.K(0,a.y)
r=new V.G(s.a,s.b).q(0,2).w(0,u.gam())
s=n.b
q=r.a
if(typeof q!=="number")return q.U()
p=n.e
if(typeof p!=="number")return H.r(p)
o=n.z
if(typeof o!=="number")return H.r(o)
s.sal(0,-q*p+o)
n.b.sX(0)
t=t.K(0,a.z)
n.Q=new V.G(t.a,t.b).q(0,2).w(0,u.gam())}n.ah()},
bS:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.H(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.q()
s=r.e
if(typeof s!=="number")return H.r(s)
u.sX(t*10*s)
r.ah()}},
b_:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.O()
if(q<p){r.ch=p
u=b.y
r.b.ad(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.aA(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$iaf:1}
U.dT.prototype={
gp:function(){var u=this.fx
return u==null?this.fx=D.C():u},
T:function(a){var u=this.fx
if(u!=null)u.D(a)},
ah:function(){return this.T(null)},
b6:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdC().n(0,s.gbN())
s.a.c.ge2().n(0,s.gbP())
s.a.c.gbA().n(0,s.gbR())
u=s.a.d
t=u.f
u=t==null?u.f=D.C():t
u.n(0,s.geW())
u=s.a.d
t=u.d
u=t==null?u.d=D.C():t
u.n(0,s.geY())
u=s.a.e
t=u.b
u=t==null?u.b=D.C():t
u.n(0,s.ghd())
u=s.a.e
t=u.d
u=t==null?u.d=D.C():t
u.n(0,s.ghb())
u=s.a.e
t=u.c
u=t==null?u.c=D.C():t
u.n(0,s.gh9())
return!0},
ay:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.U()
u=-u}if(this.r){if(typeof t!=="number")return t.U()
t=-t}return new V.G(u,t)},
bO:function(a){var u=this
H.i(a,"$iaX")
if(!J.L(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bQ:function(a){var u,t,s,r,q,p,o,n=this
H.i(a,"$iaX")
if(!n.cx)return
if(n.ch){u=a.d.K(0,a.y)
u=new V.G(u.a,u.b)
u=u.H(u)
t=n.Q
if(typeof t!=="number")return H.r(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.K(0,a.y)
u=n.ay(new V.G(t.a,t.b).q(0,2).w(0,u.gam()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.U()
s=n.y
if(typeof s!=="number")return H.r(s)
t.sX(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.U()
t=n.x
if(typeof t!=="number")return H.r(t)
s.sX(-u*10*t)}else{u=a.c
t=a.d
s=t.K(0,a.y)
r=n.ay(new V.G(s.a,s.b).q(0,2).w(0,u.gam()))
s=n.c
q=r.a
if(typeof q!=="number")return q.U()
p=n.y
if(typeof p!=="number")return H.r(p)
o=n.cy
if(typeof o!=="number")return H.r(o)
s.sal(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.U()
q=n.x
if(typeof q!=="number")return H.r(q)
s=n.db
if(typeof s!=="number")return H.r(s)
o.sal(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.K(0,a.z)
n.dx=n.ay(new V.G(t.a,t.b).q(0,2).w(0,u.gam()))}n.ah()},
bS:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.H(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.U()
s=r.y
if(typeof s!=="number")return H.r(s)
u.sX(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.U()
u=r.x
if(typeof u!=="number")return H.r(u)
s.sX(-t*10*u)
r.ah()}},
eX:function(a){var u=this
if(H.i(a,"$idk").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
eZ:function(a){var u,t,s,r,q,p,o,n=this
H.i(a,"$iaX")
if(!J.L(n.d,a.x.b))return
u=a.c
t=a.d
s=t.K(0,a.y)
r=n.ay(new V.G(s.a,s.b).q(0,2).w(0,u.gam()))
s=n.c
q=r.a
if(typeof q!=="number")return q.U()
p=n.y
if(typeof p!=="number")return H.r(p)
o=n.cy
if(typeof o!=="number")return H.r(o)
s.sal(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.U()
q=n.x
if(typeof q!=="number")return H.r(q)
s=n.db
if(typeof s!=="number")return H.r(s)
o.sal(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.K(0,a.z)
n.dx=n.ay(new V.G(t.a,t.b).q(0,2).w(0,u.gam()))
n.ah()},
he:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hc:function(a){var u,t,s,r,q,p,o,n=this
H.i(a,"$idL")
if(!n.cx)return
if(n.ch){u=a.d.K(0,a.y)
u=new V.G(u.a,u.b)
u=u.H(u)
t=n.Q
if(typeof t!=="number")return H.r(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.K(0,a.y)
u=n.ay(new V.G(t.a,t.b).q(0,2).w(0,u.gam()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.U()
s=n.y
if(typeof s!=="number")return H.r(s)
t.sX(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.U()
t=n.x
if(typeof t!=="number")return H.r(t)
s.sX(-u*10*t)}else{u=a.c
t=a.d
s=t.K(0,a.y)
r=n.ay(new V.G(s.a,s.b).q(0,2).w(0,u.gam()))
s=n.c
q=r.a
if(typeof q!=="number")return q.U()
p=n.y
if(typeof p!=="number")return H.r(p)
o=n.cy
if(typeof o!=="number")return H.r(o)
s.sal(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.U()
q=n.x
if(typeof q!=="number")return H.r(q)
s=n.db
if(typeof s!=="number")return H.r(s)
o.sal(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.K(0,a.z)
n.dx=n.ay(new V.G(t.a,t.b).q(0,2).w(0,u.gam()))}n.ah()},
ha:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.H(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.U()
s=r.y
if(typeof s!=="number")return H.r(s)
u.sX(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.U()
u=r.x
if(typeof u!=="number")return H.r(u)
s.sX(-t*10*u)
r.ah()}},
b_:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.O()
if(q<p){r.dy=p
u=b.y
r.c.ad(0,u)
r.b.ad(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.aA(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.q(0,V.aA(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iaf:1}
U.dU.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.C():u},
T:function(a){var u=this.r
if(u!=null)u.D(a)},
b6:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.C():t
t=r.gf0()
u.n(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.C():s).n(0,t)
return!0},
f1:function(a){var u,t,s,r,q=this
if(!J.L(q.b,q.a.b.c))return
H.i(a,"$ice")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.q()
r=u+t*s
if(u!==r){q.d=r
u=new D.z("zoom",u,r)
u.b=!0
q.T(u)}},
b_:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.aA(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$iaf:1}
M.d0.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.C():u},
V:function(a){var u=this.r
if(u!=null)u.D(a)},
aB:function(){return this.V(null)},
fO:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gY(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.gp()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bc()
u.b=!0
this.V(u)},
fQ:function(a,b){var u,t
for(u=b.gR(b),t=this.gY();u.v();)u.gA(u).gp().W(0,t)
u=new D.bd()
u.b=!0
this.V(u)},
a5:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.a7(u,u.length);u.v();){t=u.d
if(t!=null)t.a5(a)}s.f=!1},
$aj:function(){return[M.al]},
$aaQ:function(){return[M.al]},
$ial:1}
M.d2.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.C():u},
V:function(a){var u=this.r
if(u!=null)u.D(a)},
aB:function(){return this.V(null)},
sb8:function(a){var u,t,s=this
if(a==null)a=new X.fT()
u=s.b
if(u!==a){if(u!=null)u.gp().W(0,s.gY())
t=s.b
s.b=a
a.gp().n(0,s.gY())
u=new D.z("camera",t,s.b)
u.b=!0
s.V(u)}},
saZ:function(a,b){var u,t,s=this
if(b==null)b=X.lo(null)
u=s.c
if(u!==b){if(u!=null)u.gp().W(0,s.gY())
t=s.c
s.c=b
b.gp().n(0,s.gY())
u=new D.z("target",t,s.c)
u.b=!0
s.V(u)}},
sbe:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gp().W(0,t.gY())
u=t.d
t.d=a
if(a!=null)a.gp().n(0,t.gY())
s=new D.z("technique",u,t.d)
s.b=!0
t.V(s)}},
a5:function(a){var u,t=this
a.cv(t.d)
t.c.Z(a)
t.b.Z(a)
u=t.d
if(u!=null)u.ad(0,a)
t.e.ad(0,a)
t.e.a5(a)
t.b.at(a)
t.c.at(a)
a.cu()},
$ial:1}
M.d7.prototype={
V:function(a){var u=this.y
if(u!=null)u.D(a)},
aB:function(){return this.V(null)},
fd:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gY(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.c0()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bc()
u.b=!0
this.V(u)},
ff:function(a,b){var u,t
for(u=b.gR(b),t=this.gY();u.v();)u.gA(u).gp().W(0,t)
u=new D.bd()
u.b=!0
this.V(u)},
sb8:function(a){var u,t,s=this
if(a==null)a=X.lw(null)
u=s.b
if(u!==a){if(u!=null)u.gp().W(0,s.gY())
t=s.b
s.b=a
a.gp().n(0,s.gY())
u=new D.z("camera",t,s.b)
u.b=!0
s.V(u)}},
saZ:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gp().W(0,t.gY())
u=t.c
t.c=b
b.gp().n(0,t.gY())
s=new D.z("target",u,t.c)
s.b=!0
t.V(s)}},
sbe:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gp().W(0,t.gY())
u=t.d
t.d=a
if(a!=null)a.gp().n(0,t.gY())
s=new D.z("technique",u,t.d)
s.b=!0
t.V(s)}},
gp:function(){var u=this.y
return u==null?this.y=D.C():u},
a5:function(a){var u,t=this
a.cv(t.d)
t.c.Z(a)
t.b.Z(a)
u=t.d
if(u!=null)u.ad(0,a)
for(u=t.e.a,u=new J.a7(u,u.length);u.v();)u.d.ad(0,a)
for(u=t.e.a,u=new J.a7(u,u.length);u.v();)u.d.a5(a)
t.b.toString
a.cy.aI()
a.db.aI()
t.c.at(a)
a.cu()},
$ial:1}
M.da.prototype={
gp:function(){var u=this.b
return u==null?this.b=D.C():u},
V:function(a){var u=this.b
if(u!=null)u.D(a)},
aB:function(){return this.V(null)},
a5:function(a){var u=this.e
if(u!=null)u.a5(a)
u=this.r
if(u!=null)u.a5(a)},
$ial:1}
M.al.prototype={}
A.cW.prototype={}
A.f0.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hw:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
c9:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.a0.prototype={
gax:function(a){var u=this.a?1:0,t=this.b?2:0
return u|t|0},
i:function(a){var u=this.a?1:0,t=this.b?2:0
return""+(u|t|0)},
t:function(a,b){if(b==null)return!1
if(!(b instanceof A.a0))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.fN.prototype={
ai:function(a,b){if(b!=null&&b.d)a.cH(b)}}
A.fO.prototype={
aN:function(a,b,c,d){var u,t,s,r,q=c.length
if(0>=q)return H.d(c,0)
u=Math.abs(c[0]-0)<$.B().a
if(u){if(0>=d.length)return H.d(d,0)
t=d[0]
d=C.b.cK(d,1)
c=C.b.cK(c,1);--q}else t=0
s=a.a+="vec4 blur"+b+"()\n"
s+="{\n"
a.a=s
if(u)s=a.a+="  vec4 color = texture2D(colorTxt, txt2D)*"+H.e(t)+";\n"
else s=a.a=s+"  vec4 color = vec4(0.0);\n"
s=a.a=s+"  vec2 offset;\n"
for(r=0;r<q;++r){if(r>=c.length)return H.d(c,r)
a.a+="  offset = blurScale * "+H.e(c[r])+";\n"
if(r>=d.length)return H.d(d,r)
a.a+="  color += texture2D(colorTxt, txt2D + offset) * "+H.e(d[r])+";\n"
if(r>=d.length)return H.d(d,r)
s=a.a+="  color += texture2D(colorTxt, txt2D - offset) * "+H.e(d[r])+";\n"}s+="  return color; \n"
a.a=s
s+="}\n"
a.a=s
a.a=s+"\n"},
i:function(a){return this.b}}
A.he.prototype={
ex:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.Q("")
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
A.ot(c0,u)
A.ov(c0,u)
A.ou(c0,u)
A.ox(c0,u)
A.oy(c0,u)
A.ow(c0,u)
A.oz(c0,u)
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
b5.cn(0,s.charCodeAt(0)==0?s:s,A.os(b5.z))
b5.Q=b5.x.h(0,"posAttr")
b5.cx=b5.x.h(0,"normAttr")
b5.ch=b5.x.h(0,"binmAttr")
b5.cy=b5.x.h(0,"txt2DAttr")
b5.db=b5.x.h(0,"txtCubeAttr")
b5.dx=b5.x.h(0,"bendAttr")
if(c0.dy)b5.id=H.i(b5.y.L(0,"invViewMat"),"$ia4")
if(t)b5.dy=H.i(b5.y.L(0,"objMat"),"$ia4")
if(r)b5.fr=H.i(b5.y.L(0,"viewObjMat"),"$ia4")
b5.fy=H.i(b5.y.L(0,"projViewObjMat"),"$ia4")
if(c0.go)b5.fx=H.i(b5.y.L(0,"viewMat"),"$ia4")
if(c0.x1)b5.k1=H.i(b5.y.L(0,"txt2DMat"),"$ibG")
if(c0.x2)b5.k2=H.i(b5.y.L(0,"txtCubeMat"),"$ia4")
if(c0.y1)b5.k3=H.i(b5.y.L(0,"colorMat"),"$ia4")
b5.r1=H.b([],[A.a4])
t=c0.aX
if(t>0){b5.k4=b5.y.L(0,"bendMatCount")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.h(0,q)
if(m==null)H.t(P.w(b7+q+b8))
s.push(H.i(m,"$ia4"))}}t=c0.a
if(t.a)b5.r2=H.i(b5.y.L(0,"emissionClr"),"$iF")
if(t.b)b5.rx=H.i(b5.y.L(0,"emissionTxt"),"$iZ")
t=c0.b
if(t.a)b5.x1=H.i(b5.y.L(0,"ambientClr"),"$iF")
if(t.b)b5.x2=H.i(b5.y.L(0,"ambientTxt"),"$iZ")
t=c0.c
if(t.a)b5.y2=H.i(b5.y.L(0,"diffuseClr"),"$iF")
if(t.b)b5.aX=H.i(b5.y.L(0,"diffuseTxt"),"$iZ")
t=c0.d
if(t.a)b5.bp=H.i(b5.y.L(0,"invDiffuseClr"),"$iF")
if(t.b)b5.dH=H.i(b5.y.L(0,"invDiffuseTxt"),"$iZ")
t=c0.e
s=t.a
if(s||t.b||!1){b5.dK=H.i(b5.y.L(0,"shininess"),"$iR")
if(s)b5.dI=H.i(b5.y.L(0,"specularClr"),"$iF")
if(t.b)b5.dJ=H.i(b5.y.L(0,"specularTxt"),"$iZ")}if(c0.f.b)b5.dL=H.i(b5.y.L(0,"bumpTxt"),"$iZ")
if(c0.db){b5.dM=H.i(b5.y.L(0,"envSampler"),"$ibn")
t=c0.r
if(t.a)b5.dN=H.i(b5.y.L(0,"reflectClr"),"$iF")
if(t.b)b5.dO=H.i(b5.y.L(0,"reflectTxt"),"$iZ")
t=c0.x
s=t.a
if(s||t.b||!1){b5.dP=H.i(b5.y.L(0,"refraction"),"$iR")
if(s)b5.dQ=H.i(b5.y.L(0,"refractClr"),"$iF")
if(t.b)b5.dR=H.i(b5.y.L(0,"refractTxt"),"$iZ")}}t=c0.y
if(t.a)b5.dS=H.i(b5.y.L(0,"alpha"),"$iR")
if(t.b)b5.dT=H.i(b5.y.L(0,"alphaTxt"),"$iZ")
if(c0.k1){t=c0.z
s=t.length
if(s!==0){r=P.v
b5.cb=new H.I([r,A.bm])
b5.cc=new H.I([r,[P.o,A.cr]])
for(r=[A.cr],l=0;l<t.length;t.length===s||(0,H.m)(t),++l){k=t[l]
j=k.a
i="barLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].startPnt"
m=p.h(0,o)
if(m==null)H.t(P.w(b7+o+b8))
H.i(m,"$iF")
p=b5.y
o=i+"s["+n+"].endPnt"
g=p.h(0,o)
if(g==null)H.t(P.w(b7+o+b8))
H.i(g,"$iF")
p=b5.y
o=i+"s["+n+"].color"
f=p.h(0,o)
if(f==null)H.t(P.w(b7+o+b8))
H.i(f,"$iF")
if(typeof j!=="number")return j.aj()
if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
e=p.h(0,o)
if(e==null)H.t(P.w(b7+o+b8))
H.i(e,"$iR")
p=b5.y
o=i+"s["+n+"].att1"
d=p.h(0,o)
if(d==null)H.t(P.w(b7+o+b8))
H.i(d,"$iR")
p=b5.y
o=i+"s["+n+"].att2"
c=p.h(0,o)
if(c==null)H.t(P.w(b7+o+b8))
H.i(c,"$iR")
b=c
a=d
a0=e}else{b=b6
a=b
a0=a}h.push(new A.cr(m,g,f,a0,a,b))}b5.cc.m(0,j,h)
q=b5.cb
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.t(P.w(b7+o+b8))
q.m(0,j,m)}}t=c0.Q
s=t.length
if(s!==0){r=P.v
b5.cd=new H.I([r,A.bm])
b5.ce=new H.I([r,[P.o,A.cs]])
for(r=[A.cs],l=0;l<t.length;t.length===s||(0,H.m)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.aj()
p=(j&1)!==0
if(p){o=b5.y
a1=i+"s["+n+"].objUp"
m=o.h(0,a1)
if(m==null)H.t(P.w(b7+a1+b8))
H.i(m,"$iF")
o=b5.y
a1=i+"s["+n+"].objRight"
g=o.h(0,a1)
if(g==null)H.t(P.w(b7+a1+b8))
H.i(g,"$iF")
o=b5.y
a1=i+"s["+n+"].objDir"
f=o.h(0,a1)
if(f==null)H.t(P.w(b7+a1+b8))
H.i(f,"$iF")
a2=f
a3=g
a4=m}else{a2=b6
a3=a2
a4=a3}o=b5.y
a1=i+"s["+n+"].viewDir"
m=o.h(0,a1)
if(m==null)H.t(P.w(b7+a1+b8))
H.i(m,"$iF")
o=b5.y
a1=i+"s["+n+"].color"
g=o.h(0,a1)
if(g==null)H.t(P.w(b7+a1+b8))
H.i(g,"$iF")
if(p){p=b5.y
o=i+"sTexture2D"+n
f=p.h(0,o)
if(f==null)H.t(P.w(b7+o+b8))
H.i(f,"$iZ")
a5=f}else a5=b6
h.push(new A.cs(a4,a3,a2,m,g,a5))}b5.ce.m(0,j,h)
q=b5.cd
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.t(P.w(b7+o+b8))
q.m(0,j,m)}}t=c0.ch
s=t.length
if(s!==0){r=P.v
b5.cf=new H.I([r,A.bm])
b5.cg=new H.I([r,[P.o,A.ct]])
for(r=[A.ct],l=0;l<t.length;t.length===s||(0,H.m)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.h(0,o)
if(m==null)H.t(P.w(b7+o+b8))
H.i(m,"$iF")
p=b5.y
o=i+"s["+n+"].viewPnt"
g=p.h(0,o)
if(g==null)H.t(P.w(b7+o+b8))
H.i(g,"$iF")
p=b5.y
o=i+"s["+n+"].color"
f=p.h(0,o)
if(f==null)H.t(P.w(b7+o+b8))
H.i(f,"$iF")
if(typeof j!=="number")return j.aj()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
e=p.h(0,o)
if(e==null)H.t(P.w(b7+o+b8))
H.i(e,"$ibG")
a6=e}else a6=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
e=p.h(0,o)
if(e==null)H.t(P.w(b7+o+b8))
H.i(e,"$ibn")
a5=e}else a5=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
e=p.h(0,o)
if(e==null)H.t(P.w(b7+o+b8))
H.i(e,"$ibn")
p=b5.y
o=i+"s["+n+"].shadowAdj"
d=p.h(0,o)
if(d==null)H.t(P.w(b7+o+b8))
H.i(d,"$icq")
a7=e
a8=d}else{a7=b6
a8=a7}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
e=p.h(0,o)
if(e==null)H.t(P.w(b7+o+b8))
H.i(e,"$iR")
p=b5.y
o=i+"s["+n+"].att1"
d=p.h(0,o)
if(d==null)H.t(P.w(b7+o+b8))
H.i(d,"$iR")
p=b5.y
o=i+"s["+n+"].att2"
c=p.h(0,o)
if(c==null)H.t(P.w(b7+o+b8))
H.i(c,"$iR")
b=c
a=d
a0=e}else{b=b6
a=b
a0=a}h.push(new A.ct(m,g,a6,f,a5,a7,a8,a0,a,b))}b5.cg.m(0,j,h)
q=b5.cf
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.t(P.w(b7+o+b8))
q.m(0,j,m)}}t=c0.cx
s=t.length
if(s!==0){r=P.v
b5.ci=new H.I([r,A.bm])
b5.cj=new H.I([r,[P.o,A.cu]])
for(r=[A.cu],l=0;l<t.length;t.length===s||(0,H.m)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.h(0,o)
if(m==null)H.t(P.w(b7+o+b8))
H.i(m,"$iF")
p=b5.y
o=i+"s["+n+"].objDir"
g=p.h(0,o)
if(g==null)H.t(P.w(b7+o+b8))
H.i(g,"$iF")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.h(0,o)
if(f==null)H.t(P.w(b7+o+b8))
H.i(f,"$iF")
p=b5.y
o=i+"s["+n+"].color"
e=p.h(0,o)
if(e==null)H.t(P.w(b7+o+b8))
H.i(e,"$iF")
if(typeof j!=="number")return j.aj()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
d=p.h(0,o)
if(d==null)H.t(P.w(b7+o+b8))
H.i(d,"$iF")
p=b5.y
o=i+"s["+n+"].objRight"
c=p.h(0,o)
if(c==null)H.t(P.w(b7+o+b8))
H.i(c,"$iF")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.h(0,o)
if(a9==null)H.t(P.w(b7+o+b8))
H.i(a9,"$iR")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.h(0,o)
if(b0==null)H.t(P.w(b7+o+b8))
H.i(b0,"$iR")
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
if(d==null)H.t(P.w(b7+a1+b8))
H.i(d,"$icq")
a8=d}else a8=b6
if((j&8)!==0){o=b5.y
a1=i+"s["+n+"].cutoff"
d=o.h(0,a1)
if(d==null)H.t(P.w(b7+a1+b8))
H.i(d,"$iR")
o=b5.y
a1=i+"s["+n+"].coneAngle"
c=o.h(0,a1)
if(c==null)H.t(P.w(b7+a1+b8))
H.i(c,"$iR")
b3=c
b4=d}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
a1=i+"s["+n+"].att0"
d=o.h(0,a1)
if(d==null)H.t(P.w(b7+a1+b8))
H.i(d,"$iR")
o=b5.y
a1=i+"s["+n+"].att1"
c=o.h(0,a1)
if(c==null)H.t(P.w(b7+a1+b8))
H.i(c,"$iR")
o=b5.y
a1=i+"s["+n+"].att2"
a9=o.h(0,a1)
if(a9==null)H.t(P.w(b7+a1+b8))
H.i(a9,"$iR")
b=a9
a=c
a0=d}else{b=b6
a=b
a0=a}if((j&1)!==0){o=b5.y
a1=i+"sTexture2D"+n
d=o.h(0,a1)
if(d==null)H.t(P.w(b7+a1+b8))
H.i(d,"$iZ")
a5=d}else a5=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
d=p.h(0,o)
if(d==null)H.t(P.w(b7+o+b8))
H.i(d,"$iZ")
a7=d}else a7=b6
h.push(new A.cu(m,g,f,e,a4,a3,b2,b1,a8,b4,b3,a0,a,b,a5,a7))}b5.cj.m(0,j,h)
q=b5.ci
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.t(P.w(b7+o+b8))
q.m(0,j,m)}}}},
ai:function(a,b){if(b!=null&&b.d)a.cH(b)},
h4:function(a,b){}}
A.cX.prototype={
i:function(a){return"barLight"+H.e(this.a)}}
A.d4.prototype={
i:function(a){return"dirLight"+H.e(this.a)}}
A.du.prototype={
i:function(a){return"pointLight"+H.e(this.a)}}
A.dB.prototype={
i:function(a){return"spotLight"+H.e(this.a)}}
A.hh.prototype={
i:function(a){return this.ba}}
A.cr.prototype={}
A.cs.prototype={}
A.ct.prototype={}
A.cu.prototype={}
A.dy.prototype={
bF:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cn:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.d_(b,35633)
r.f=r.d_(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!u.getProgramParameter(r.r,35714)){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.t(P.w("Failed to link shader: "+H.e(s)))}r.h5()
r.h7()},
Z:function(a){a.a.useProgram(this.r)
this.x.hw()},
d_:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.w("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
h5:function(){var u,t,s,r=this,q=H.b([],[A.cW]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.r(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cW(p,t.name,s))}r.x=new A.f0(q)},
h7:function(){var u,t,s,r=this,q=H.b([],[A.dN]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.r(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.ht(t.type,t.size,t.name,s))}r.y=new A.iM(q)},
aO:function(a,b,c){var u=this.a
if(a===1)return new A.bm(u,b,c)
else return A.kS(u,this.r,b,a,c)},
eR:function(a,b,c){var u=this.a
if(a===1)return new A.Z(u,b,c)
else return A.kS(u,this.r,b,a,c)},
eS:function(a,b,c){var u=this.a
if(a===1)return new A.bn(u,b,c)
else return A.kS(u,this.r,b,a,c)},
bm:function(a,b){return new P.e5(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
ht:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aO(b,c,d)
case 5121:return u.aO(b,c,d)
case 5122:return u.aO(b,c,d)
case 5123:return u.aO(b,c,d)
case 5124:return u.aO(b,c,d)
case 5125:return u.aO(b,c,d)
case 5126:return new A.R(u.a,c,d)
case 35664:return new A.dO(u.a,c,d)
case 35665:return new A.F(u.a,c,d)
case 35666:return new A.cq(u.a,c,d)
case 35667:return new A.iJ(u.a,c,d)
case 35668:return new A.iK(u.a,c,d)
case 35669:return new A.iL(u.a,c,d)
case 35674:return new A.iN(u.a,c,d)
case 35675:return new A.bG(u.a,c,d)
case 35676:return new A.a4(u.a,c,d)
case 35678:return u.eR(b,c,d)
case 35680:return u.eS(b,c,d)
case 35670:throw H.c(u.bm("BOOL",c))
case 35671:throw H.c(u.bm("BOOL_VEC2",c))
case 35672:throw H.c(u.bm("BOOL_VEC3",c))
case 35673:throw H.c(u.bm("BOOL_VEC4",c))
default:throw H.c(P.w("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.ia.prototype={}
A.dN.prototype={}
A.iM.prototype={
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
A.bm.prototype={
i:function(a){return"Uniform1i: "+H.e(this.c)}}
A.iJ.prototype={
i:function(a){return"Uniform2i: "+H.e(this.c)}}
A.iK.prototype={
i:function(a){return"Uniform3i: "+H.e(this.c)}}
A.iL.prototype={
i:function(a){return"Uniform4i: "+H.e(this.c)}}
A.iI.prototype={
i:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.R.prototype={
i:function(a){return"Uniform1f: "+H.e(this.c)}}
A.dO.prototype={
i:function(a){return"Uniform2f: "+H.e(this.c)}}
A.F.prototype={
i:function(a){return"Uniform3f: "+H.e(this.c)}}
A.cq.prototype={
en:function(a){var u=a.a,t=a.b,s=a.c,r=a.d
return this.a.uniform4f(this.d,u,t,s,r)},
i:function(a){return"Uniform4f: "+H.e(this.c)}}
A.iN.prototype={
i:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.bG.prototype={
ae:function(a){var u=new Float32Array(H.bN(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.e(this.c)}}
A.a4.prototype={
ae:function(a){var u=new Float32Array(H.bN(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.e(this.c)}}
A.Z.prototype={
cH:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.bn.prototype={
em:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.jW.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cp(s.b,b).cp(s.d.cp(s.c,b),c)
s=new V.Y(r.a,r.b,r.c)
if(!J.L(a.f,s)){a.f=s
s=a.a
if(s!=null)s.ac()}a.si9(r.w(0,Math.sqrt(r.H(r))))
s=1-b
u=1-c
u=new V.b0(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.L(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.ac()}}}
F.bb.prototype={
eK:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.dV()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.e1())return
return s.w(0,Math.sqrt(s.H(s)))},
eM:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.K(0,q)
r=new V.J(r.a,r.b,r.c)
s=r.w(0,Math.sqrt(r.H(r)))
r=t.K(0,q)
r=new V.J(r.a,r.b,r.c)
r=s.b9(r.w(0,Math.sqrt(r.H(r))))
return r.w(0,Math.sqrt(r.H(r)))},
c3:function(){var u,t=this
if(t.d!=null)return!0
u=t.eK()
if(u==null){u=t.eM()
if(u==null)return!1}t.d=u
t.a.a.ac()
return!0},
eJ:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.dV()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.e1())return
return s.w(0,Math.sqrt(s.H(s)))},
eL:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.B().a){l=d.K(0,g)
l=new V.J(l.a,l.b,l.c)
q=l.w(0,Math.sqrt(l.H(l)))
if(s.a-t.a<0)q=q.U(0)}else{p=(l-u.b)/r
l=d.K(0,g)
l=new V.Y(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).K(0,j)
l=new V.J(l.a,l.b,l.c)
q=l.w(0,Math.sqrt(l.H(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.U(0)}l=n.d
if(l!=null){o=l.w(0,Math.sqrt(l.H(l)))
l=o.b9(q)
l=l.w(0,Math.sqrt(l.H(l))).b9(o)
q=l.w(0,Math.sqrt(l.H(l)))}return q},
c1:function(){var u,t=this
if(t.e!=null)return!0
u=t.eJ()
if(u==null){u=t.eL()
if(u==null)return!1}t.e=u
t.a.a.ac()
return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
G:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.a.ar(J.a6(s.e),0)+", "+C.a.ar(J.a6(t.b.e),0)+", "+C.a.ar(J.a6(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.i(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.i(0)+"}"):u+"-}"},
P:function(){return this.G("")}}
F.c7.prototype={
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
G:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.a.ar(J.a6(u.e),0)+", "+C.a.ar(J.a6(this.b.e),0)},
P:function(){return this.G("")}}
F.ci.prototype={
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
G:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.a.ar(J.a6(u.e),0)},
P:function(){return this.G("")}}
F.i2.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.C():u},
hL:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.a2()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){r=g[s]
h.a.n(0,r.hq())}h.a.a2()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.a2()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
n=p[o]
h.b.a.a.n(0,n)
o=new F.ci()
if(n.a==null)H.t(P.w("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.D(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.a2()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.a2()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.c.a
p.a.n(0,l)
p.a.n(0,k)
F.n5(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.a2()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.a2()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.a2()
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
F.c1(l,k,i)}g=h.e
if(g!=null)g.aK(0)},
aG:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aG()||!1
if(!t.a.aG())u=!1
s=t.e
if(s!=null)s.aK(0)
return u},
c0:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.ah()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.b7().a)!==0)++s
if((t&$.b6().a)!==0)++s
if((t&$.av().a)!==0)++s
if((t&$.bq().a)!==0)++s
if((t&$.cR().a)!==0)++s
if((t&$.cS().a)!==0)++s
if((t&$.bU().a)!==0)++s
if((t&$.b5().a)!==0)++s
r=a4.gcJ(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.K])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.cY])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.hk(m)
k=l.gcJ(l)
if(m>=t)return H.d(o,m)
o[m]=new Z.cY(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.d(i,j)
h=i[j].hJ(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.d(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.bN(p)),35044)
u.bindBuffer(a1,null)
c=new Z.b8(new Z.dW(a1,d),o,a4)
c.b=H.b([],[Z.bx])
if(a0.b.b.length!==0){b=H.b([],[P.v])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.a2()
b.push(t.e)}a=Z.kV(u,34963,b)
c.b.push(new Z.bx(0,b.length,a))}if(a0.c.b.length!==0){b=H.b([],[P.v])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.a2()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.d(t,m)
t=t[m].b
t.a.a.a2()
b.push(t.e)}a=Z.kV(u,34963,b)
c.b.push(new Z.bx(1,b.length,a))}if(a0.d.b.length!==0){b=H.b([],[P.v])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.a2()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.d(t,m)
t=t[m].b
t.a.a.a2()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.d(t,m)
t=t[m].c
t.a.a.a2()
b.push(t.e)}a=Z.kV(u,34963,b)
c.b.push(new Z.bx(4,b.length,a))}return c},
i:function(a){var u=this,t="   ",s=H.b([],[P.h])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.G(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.G(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.G(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.G(t))}return C.b.j(s,"\n")},
ac:function(){var u=this.e
if(u!=null)u.D(null)}}
F.i3.prototype={
hh:function(a){var u,t,s,r,q=H.b([],[F.bb]),p=a[0]
for(u=this.a,t=2;t<4;++t){s=a[t-1]
r=a[t]
u.a.n(0,p)
u.a.n(0,s)
u.a.n(0,r)
q.push(F.c1(p,s,r))}return q},
hi:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.bb])
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
aG:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.m)(u),++r)if(!u[r].c3())s=!1
return s},
c2:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.m)(u),++r)if(!u[r].c1())s=!1
return s},
i:function(a){return this.P()},
G:function(a){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].G(a))
return C.b.j(r,"\n")},
P:function(){return this.G("")}}
F.i4.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.P()},
G:function(a){var u,t,s=H.b([],[P.h]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.d(t,u)
s.push(t[u].G(a+(""+u+". ")))}return C.b.j(s,"\n")},
P:function(){return this.G("")}}
F.i5.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.P()},
G:function(a){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].G(a))
return C.b.j(r,"\n")},
P:function(){return this.G("")}}
F.bI.prototype={
c7:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.j1(u.cx,r,o,t,s,q,p,a,n)},
hq:function(){return this.c7(null)},
si9:function(a){var u
if(!J.L(this.z,a)){this.z=a
u=this.a
if(u!=null)u.ac()}},
hJ:function(a){var u,t,s=this
if(a.t(0,$.ah())){u=s.f
t=[P.K]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.b7())){u=s.r
t=[P.K]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.b6())){u=s.x
t=[P.K]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.av())){u=s.y
t=[P.K]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.t(0,$.bq())){u=s.z
t=[P.K]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.cR())){u=s.Q
t=[P.K]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.cS())){u=s.Q
t=[P.K]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.t(0,$.bU()))return H.b([s.ch],[P.K])
else if(a.t(0,$.b5())){u=s.cx
t=[P.K]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.K])},
c3:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.dV()
t.d.F(0,new F.j9(s))
s=s.a
t.r=s.w(0,Math.sqrt(s.H(s)))
s=t.a
if(s!=null){s.ac()
s=t.a.e
if(s!=null)s.aK(0)}return!0},
c1:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.dV()
t.d.F(0,new F.j8(s))
s=s.a
t.x=s.w(0,Math.sqrt(s.H(s)))
s=t.a
if(s!=null){s.ac()
s=t.a.e
if(s!=null)s.aK(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
G:function(a){var u,t,s=this,r="-",q=H.b([],[P.h])
q.push(C.a.ar(J.a6(s.e),0))
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
P:function(){return this.G("")}}
F.j9.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.B(0,t)}}}
F.j8.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.B(0,t)}}}
F.j2.prototype={
a2:function(){},
n:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.w("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.ac()
return!0},
bn:function(a,b,c,d,e,f){var u=F.j1(a,null,b,c,null,d,e,f,0)
this.n(0,u)
return u},
gl:function(a){return this.c.length},
aG:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)u[s].c3()
return!0},
c2:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)u[s].c1()
return!0},
hn:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.w(0,Math.sqrt(p*p+o*o+n*n))
if(!J.L(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.D(null)}}}}return!0},
i:function(a){return this.P()},
G:function(a){var u,t,s,r
this.a2()
u=H.b([],[P.h])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r)u.push(t[r].G(a))
return C.b.j(u,"\n")},
P:function(){return this.G("")}}
F.j3.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
F:function(a,b){var u=this
C.b.F(u.b,b)
C.b.F(u.c,new F.j4(u,b))
C.b.F(u.d,new F.j5(u,b))},
i:function(a){return this.P()},
P:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].G(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].G(""))
return C.b.j(r,"\n")}}
F.j4.prototype={
$1:function(a){if(!J.L(a.a,this.a))this.b.$1(a)}}
F.j5.prototype={
$1:function(a){var u=this.a
if(!J.L(a.a,u)&&!J.L(a.b,u))this.b.$1(a)}}
F.j6.prototype={
gl:function(a){return this.b.length+this.c.length},
i:function(a){return this.P()},
P:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].G(""))
return C.b.j(r,"\n")}}
F.j7.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.P()},
P:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].G(""))
return C.b.j(r,"\n")}}
O.db.prototype={
gp:function(){var u=this.x
return u==null?this.x=D.C():u},
M:function(a){var u=this.x
if(u!=null)u.D(a)},
aC:function(){return this.M(null)},
sb7:function(a){var u=this.r
if(!(Math.abs(u-a)<$.B().a)){this.r=a
u=new D.z("blurValue",u,a)
u.b=!0
this.M(u)}},
sdz:function(a){var u,t=this,s=t.e
if(s!=a){if(s!=null)s.gp().W(0,t.gav())
u=t.e
t.e=a
if(a!=null)a.gp().n(0,t.gav())
s=new D.z("colorTexture",u,t.e)
s.b=!0
t.M(s)}},
sc_:function(a){},
scB:function(a){var u,t=this,s=$.lt
if(s==null){s=new V.cb(1,0,0,0,1,0,0,0,1)
$.lt=s
a=s}else a=s
if(!J.L(t.b,a)){u=t.b
t.b=a
s=new D.z("textureMatrix",u,a)
s.b=!0
t.M(s)}},
sbZ:function(a){var u,t=this,s=$.lU
if(s==null){s=new V.cv(1,0.00390625,0.0000152587890625,0)
$.lU=s
a=s}else a=s
if(!J.L(t.c,a)){u=t.c
t.c=a
s=new D.z("blurAdjust",u,a)
s.b=!0
t.M(s)}},
ad:function(a,b){},
a9:function(a,b){if(b!=null)if(!C.b.C(a,b)){b.a=a.length
a.push(b)}},
cA:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.a
if(h==null){u="GaussianBlur_0".charCodeAt(0)==0?"GaussianBlur_0":"GaussianBlur_0"
t=a.fr.h(0,u)
if(t==null){h=a.a
t=new A.fN(h,u)
t.bF(h,u)
s=t.z=new A.fO(!1,u)
r=new P.Q("")
r.a="precision mediump float;\n"
r.a="precision mediump float;\n\n"
r.a="precision mediump float;\n\nuniform sampler2D colorTxt;\n"
r.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform float blurValue;\n"
r.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform float blurValue;\nuniform vec2 blurScale;\n"
r.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform float blurValue;\nuniform vec2 blurScale;\n\n"
r.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform float blurValue;\nuniform vec2 blurScale;\n\nvarying vec2 txt2D;\n"
r.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform float blurValue;\nuniform vec2 blurScale;\n\nvarying vec2 txt2D;\n\n"
h=[P.K]
s.aN(r,3,H.b([0.75],h),H.b([0.5],h))
s.aN(r,6,H.b([0.42857,2.14286],h),H.b([0.41667,0.08333],h))
s.aN(r,9,H.b([0,1.8],h),H.b([0.5122,0.2439],h))
s.aN(r,12,H.b([0,1.38462,3.23077],h),H.b([0.22703,0.31622,0.07027],h))
s.aN(r,15,H.b([0.9375,2.8125],h),H.b([0.36184,0.13816],h))
s.aN(r,18,H.b([0.47368,2.36842,4.26316],h),H.b([0.29916,0.16318,0.03766],h))
h=r.a+="void main()\n"
h+="{\n"
r.a=h
h+="   float blurOffset = abs(blurValue);\n"
r.a=h
h+="\n"
r.a=h
h+="   if     (blurOffset < 0.15) gl_FragColor = texture2D(colorTxt, txt2D);\n"
r.a=h
h+="   else if(blurOffset < 0.3)  gl_FragColor = blur3();\n"
r.a=h
h+="   else if(blurOffset < 0.45) gl_FragColor = blur6();\n"
r.a=h
h+="   else if(blurOffset < 0.6)  gl_FragColor = blur9();\n"
r.a=h
h+="   else if(blurOffset < 0.75) gl_FragColor = blur12();\n"
r.a=h
h+="   else if(blurOffset < 0.9)  gl_FragColor = blur15();\n"
r.a=h
h+="   else                       gl_FragColor = blur18();\n"
r.a=h
h=r.a=h+"}\n"
t.cn(0,"uniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n\nattribute vec3 posAttr;\nattribute vec2 txtAttr;\n\nvarying vec2 txt2D;\n\nvoid main()\n{\n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;\n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"uniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n\nattribute vec3 posAttr;\nattribute vec2 txtAttr;\n\nvarying vec2 txt2D;\n\nvoid main()\n{\n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;\n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n":"uniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n\nattribute vec3 posAttr;\nattribute vec2 txtAttr;\n\nvarying vec2 txt2D;\n\nvoid main()\n{\n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;\n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n",h.charCodeAt(0)==0?h:h)
t.Q=t.x.h(0,"posAttr")
t.ch=t.x.h(0,"txtAttr")
t.cx=H.i(t.y.h(0,"projViewObjMat"),"$ia4")
t.cy=H.i(t.y.h(0,"txt2DMat"),"$ibG")
t.dy=H.i(t.y.h(0,"colorTxt"),"$iZ")
t.dx=H.i(t.y.h(0,"blurScale"),"$idO")
t.fx=H.i(t.y.h(0,"blurValue"),"$iR")
a.bY(t)}h=i.a=t
b.e=null}s=h.z
h=b.e
if((!(h instanceof Z.b8)?b.e=null:h)==null){h=b.d
q=$.ah()
p=$.av()
p=h.c0(new Z.cw(a.a),new Z.aL(q.a|p.a))
p.aw($.ah()).e=i.a.Q.c
p.aw($.av()).e=i.a.ch.c
b.e=p}o=H.b([],[T.cp])
i.a9(o,i.e)
h=s.a
if(h)i.a9(o,i.f)
for(n=0;n<o.length;++n)o[n].Z(a)
q=i.a
q.Z(a)
p=i.e
q.ai(q.dy,p)
p=i.b
m=q.cy
m.toString
m.ae(p.a7(0,!0))
p=i.d
m=p.a
l=a.c
if(typeof m!=="number")return m.w()
p=p.b
k=a.d
if(typeof p!=="number")return p.w()
j=q.dx
j.a.uniform2f(j.d,m/l,p/k)
k=a.ge9()
q=q.cx
q.toString
q.ae(k.a7(0,!0))
q=i.a
if(h){h=i.f
q.ai(q.fr,h)
h=i.c
q.db.en(h)}else{h=i.r
q=q.fx
q.a.uniform1f(q.d,h)}h=b.e
if(h instanceof Z.b8){h.Z(a)
h.a5(a)
h.at(a)}else b.e=null
h=i.a
h.toString
q=a.a
q.useProgram(null)
h.x.c9()
for(n=0;n<o.length;++n){h=o[n]
if(h.c){h.c=!1
q.activeTexture(33984+h.a)
q.bindTexture(3553,null)}}}}
O.dl.prototype={
gp:function(){var u=this.fr
return u==null?this.fr=D.C():u},
M:function(a){var u=this.fr
if(u!=null)u.D(a)},
aC:function(){return this.M(null)},
d8:function(a){this.a=null
this.M(a)},
h1:function(){return this.d8(null)},
f7:function(a,b){var u=new D.bc()
u.b=!0
this.M(u)},
f9:function(a,b){var u=new D.bd()
u.b=!0
this.M(u)},
cY:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=P.v
f=[f,f]
u=new H.I(f)
for(t=g.dx.e,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){q=t[r]
p=q.gak()
o=u.h(0,q.gak())
u.m(0,p,o==null?1:o)}n=H.b([],[A.cX])
u.F(0,new O.hl(g,n))
C.b.b2(n,new O.hm())
m=new H.I(f)
for(t=g.dx.f,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){q=t[r]
p=q.gak()
o=m.h(0,q.gak())
m.m(0,p,o==null?1:o)}l=H.b([],[A.d4])
m.F(0,new O.hn(g,l))
C.b.b2(l,new O.ho())
k=new H.I(f)
for(t=g.dx.r,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){q=t[r]
p=q.gak()
o=k.h(0,q.gak())
k.m(0,p,o==null?1:o)}j=H.b([],[A.du])
k.F(0,new O.hp(g,j))
C.b.b2(j,new O.hq())
i=new H.I(f)
for(f=g.dx.x,t=f.length,r=0;r<f.length;f.length===t||(0,H.m)(f),++r){q=f[r]
s=q.gak()
p=i.h(0,q.gak())
i.m(0,s,p==null?1:p)}h=H.b([],[A.dB])
i.F(0,new O.hr(g,h))
C.b.b2(h,new O.hs())
f=C.d.aa(g.e.a.length+3,4)
g.dy.e
return A.nd(!1,!1,!1,!1,f*4,g.f.c,g.r.c,g.x.c,g.y.c,g.z.c,g.Q.c,g.cx.c,g.cy.c,g.db.c,n,l,j,h)},
a9:function(a,b){if(b!=null)if(!C.b.C(a,b)){b.a=a.length
a.push(b)}},
ad:function(a,b){var u
for(u=this.dx.a,u=new J.a7(u,u.length);u.v();)C.i.ad(u.d,b)},
cA:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=b0.a
if(b1==null){b1=b0.cY()
u=b2.fr.h(0,b1.ba)
if(u==null){u=A.nc(b1,b2.a)
b2.bY(u)}b1=b0.a=u
b3.e=null}t=b1.z
s=t.bp
b1=b3.e
if(!(b1 instanceof Z.b8))b1=b3.e=null
if(b1==null||!b1.d.t(0,s)){b1=t.k4
if(b1)b3.d.aG()
r=t.r1
if(r){q=b3.d
p=q.e
if(p!=null)++p.d
q.d.c2()
q.a.c2()
q=q.e
if(q!=null)q.aK(0)}q=t.rx
if(q){p=b3.d
o=p.e
if(o!=null)++o.d
p.a.hn()
p=p.e
if(p!=null)p.aK(0)}n=b3.d.c0(new Z.cw(b2.a),s)
n.aw($.ah()).e=b0.a.Q.c
if(b1)n.aw($.b7()).e=b0.a.cx.c
if(r)n.aw($.b6()).e=b0.a.ch.c
if(t.r2)n.aw($.av()).e=b0.a.cy.c
if(q)n.aw($.bq()).e=b0.a.db.c
if(t.ry)n.aw($.b5()).e=b0.a.dx.c
b3.e=n}m=H.b([],[T.cp])
b0.a.Z(b2)
if(t.fr){b1=b0.a
r=b2.dx
r=r.ga4(r)
b1=b1.dy
b1.toString
b1.ae(r.a7(0,!0))}if(t.fx){b1=b0.a
r=b2.cx
if(r==null){r=b2.db
r=r.ga4(r)
q=b2.dx
q=b2.cx=r.q(0,q.ga4(q))
r=q}b1=b1.fr
b1.toString
b1.ae(r.a7(0,!0))}b1=b0.a
r=b2.ge9()
b1=b1.fy
b1.toString
b1.ae(r.a7(0,!0))
if(t.go){b1=b0.a
r=b2.db
r=r.ga4(r)
b1=b1.fx
b1.toString
b1.ae(r.a7(0,!0))}if(t.x1){b1=b0.a
r=b0.b
b1=b1.k1
b1.toString
b1.ae(C.i.a7(r,!0))}if(t.x2){b1=b0.a
r=b0.c
b1=b1.k2
b1.toString
b1.ae(C.i.a7(r,!0))}if(t.y1){b1=b0.a
r=b0.d
b1=b1.k3
b1.toString
b1.ae(C.i.a7(r,!0))}if(t.aX>0){l=b0.e.a.length
b1=b0.a.k4
b1.a.uniform1i(b1.d,l)
for(k=0;k<l;++k){b1=b0.a
r=b0.e.a
if(k>=r.length)return H.d(r,k)
r=r[k]
b1=b1.r1
if(k>=b1.length)return H.d(b1,k)
b1=b1[k]
j=new Float32Array(H.bN(r.a7(0,!0)))
b1.a.uniformMatrix4fv(b1.d,!1,j)}}b1=t.a
if(b1.a){r=b0.a
q=b0.f.f
r=r.r2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.a9(m,b0.f.d)
b1=b0.a
r=b0.f.d
b1.ai(b1.rx,r)}if(t.k1){b1=t.b
if(b1.a){r=b0.a
q=b0.r.f
r=r.x1
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.a9(m,b0.r.d)
b1=b0.a
r=b0.r.d
b1.ai(b1.x2,r)}b1=t.c
if(b1.a){r=b0.a
q=b0.x.f
r=r.y2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.a9(m,b0.x.d)
b1=b0.a
r=b0.x.d
b1.ai(b1.aX,r)}b1=t.d
if(b1.a){r=b0.a
q=b0.y.f
r=r.bp
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.a9(m,b0.y.d)
b1=b0.a
r=b0.y.d
b1.ai(b1.dH,r)}b1=t.e
r=b1.a
if(r||b1.b||!1){q=b0.a
p=b0.z.ch
q=q.dK
q.a.uniform1f(q.d,p)}if(r){r=b0.a
q=b0.z.f
r=r.dI
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.a9(m,b0.z.d)
b1=b0.a
r=b0.z.d
b1.ai(b1.dJ,r)}b1=t.z
if(b1.length>0){r=P.v
i=new H.I([r,r])
for(r=b0.dx.e,q=r.length,h=0;h<r.length;r.length===q||(0,H.m)(r),++h){g=r[h]
f=g.gak()
e=i.h(0,f)
if(e==null)e=0
i.m(0,f,e+1)
d=J.bV(b0.a.cc.h(0,f),e)
p=g.gil()
o=$.aE
p=p.bg(o==null?$.aE=new V.Y(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.giq()
o=$.aE
p=p.bg(o==null?$.aE=new V.Y(0,0,0):o)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gaV(g)
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
if(g.gdG()){p=g.gdr()
o=d.e
o.a.uniform1f(o.d,p)
p=g.gds()
o=d.f
o.a.uniform1f(o.d,p)
p=g.gdt()
o=d.r
o.a.uniform1f(o.d,p)}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.m)(b1),++h){q=b1[h].a
l=i.h(0,q)
if(l==null)l=0
q=b0.a.cb.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.Q
if(b1.length>0){r=b2.db
c=r.ga4(r)
r=P.v
b=new H.I([r,r])
for(r=b0.dx.f,q=r.length,h=0;h<r.length;r.length===q||(0,H.m)(r),++h){g=r[h]
f=g.gak()
e=b.h(0,f)
if(e==null)e=0
b.m(0,f,e+1)
d=J.bV(b0.a.ce.h(0,f),e)
p=g.gdB(g)
o=C.c.q(c.a,p.gdD(p))+C.c.q(c.b,p.gdE(p))+C.c.q(c.c,p.gdF())
a=C.c.q(c.e,p.gdD(p))+C.c.q(c.f,p.gdE(p))+C.c.q(c.r,p.gdF())
p=C.c.q(c.y,p.gdD(p))+C.c.q(c.z,p.gdE(p))+C.c.q(c.Q,p.gdF())
p=new V.J(o,a,p).w(0,Math.sqrt(o*o+a*a+p*p))
a=d.e
o=p.a
a0=p.b
p=p.c
a.a.uniform3f(a.d,o,a0,p)
p=g.gaV(g)
a0=d.f
a0.a.uniform3f(a0.d,p.a,p.b,p.c)
g.gas()
p=g.gdB(g)
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gbA()
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gby(g)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gas()
if(!C.b.C(m,p)){p.a=m.length
m.push(p)}p=g.gas()
o=p.gbt(p)
if(o){o=d.r
o.toString
a=p.d
if(!a)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.m)(b1),++h){q=b1[h].a
l=b.h(0,q)
if(l==null)l=0
q=b0.a.cd.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.ch
if(b1.length>0){r=b2.db
c=r.ga4(r)
r=P.v
a1=new H.I([r,r])
for(r=b0.dx.r,q=r.length,h=0;h<r.length;r.length===q||(0,H.m)(r),++h){g=r[h]
f=g.gak()
e=a1.h(0,f)
if(e==null)e=0
a1.m(0,f,e+1)
d=J.bV(b0.a.cg.h(0,f),e)
a2=c.q(0,g.ga4(g))
p=g.ga4(g)
o=$.aE
p=p.bg(o==null?$.aE=new V.Y(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=$.aE
p=a2.bg(p==null?$.aE=new V.Y(0,0,0):p)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gaV(g)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
g.gas()
p=a2.co(0)
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
j=new Float32Array(H.bN(new V.cb(o,a,a0,a3,a4,a5,a6,a7,p).a7(0,!0)))
a8.a.uniformMatrix3fv(a8.d,!1,j)
g.gas()
p=g.gas()
if(!C.b.C(m,p)){p.a=m.length
m.push(p)}p=g.gas()
o=p.gbt(p)
if(o){o=d.f
o.toString
a=p.d
if(a<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}g.gb1()
p=g.geo()
o=d.x
o.a.uniform4f(o.d,p.a,p.b,p.c,p.d)
p=g.gb1()
if(!C.b.C(m,p)){p.a=m.length
m.push(p)}p=g.gb1()
o=p.gbt(p)
if(o){o=d.r
o.toString
a=p.d
if(a<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}if(g.gdG()){p=g.gdr()
o=d.y
o.a.uniform1f(o.d,p)
p=g.gds()
o=d.z
o.a.uniform1f(o.d,p)
p=g.gdt()
o=d.Q
o.a.uniform1f(o.d,p)}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.m)(b1),++h){q=b1[h].a
l=a1.h(0,q)
if(l==null)l=0
q=b0.a.cf.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.cx
if(b1.length>0){r=b2.db
c=r.ga4(r)
r=P.v
a9=new H.I([r,r])
for(r=b0.dx.x,q=r.length,h=0;h<r.length;r.length===q||(0,H.m)(r),++h){g=r[h]
f=g.gak()
e=a9.h(0,f)
if(e==null)e=0
a9.m(0,f,e+1)
d=J.bV(b0.a.cj.h(0,f),e)
p=g.gi_(g)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gdB(g).iB()
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=c.bg(g.gi_(g))
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gaV(g)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
g.gas()
p=g.gbA()
o=d.f
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gby(g)
o=d.r
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.giC()
o=d.x
o.a.uniform1f(o.d,p)
p=g.giD()
o=d.y
o.a.uniform1f(o.d,p)
g.gas()
p=g.gas()
if(!C.b.C(m,p)){p.a=m.length
m.push(p)}p=g.gas()
o=p.gbt(p)
if(o){o=d.dx
o.toString
a=p.d
if(!a)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}g.gb1()
p=g.geo()
o=d.z
o.a.uniform4f(o.d,p.a,p.b,p.c,p.d)
p=g.gb1()
if(!C.b.C(m,p)){p.a=m.length
m.push(p)}p=g.gb1()
o=p.gbt(p)
if(o){o=d.dy
o.toString
a=p.d
if(!a)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}if(g.gip()){p=g.gio()
o=d.Q
o.a.uniform1f(o.d,p)
p=g.gim()
o=d.ch
o.a.uniform1f(o.d,p)}if(g.gdG()){p=g.gdr()
o=d.cx
o.a.uniform1f(o.d,p)
p=g.gds()
o=d.cy
o.a.uniform1f(o.d,p)
p=g.gdt()
o=d.db
o.a.uniform1f(o.d,p)}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.m)(b1),++h){q=b1[h].a
l=a9.h(0,q)
if(l==null)l=0
q=b0.a.ci.h(0,q)
q.a.uniform1i(q.d,l)}}}if(t.f.b){b0.a9(m,b0.Q.d)
b1=b0.a
r=b0.Q.d
b1.ai(b1.dL,r)}if(t.dy){b1=b0.a
r=b2.Q
if(r==null){r=b2.db
r=b2.Q=r.ga4(r).co(0)}b1=b1.id
b1.toString
b1.ae(r.a7(0,!0))}if(t.db){b0.a9(m,b0.ch)
b1=b0.a
r=b0.ch
b1.h4(b1.dM,r)
b1=t.r
if(b1.a){r=b0.a
q=b0.cx.f
r=r.dN
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.a9(m,b0.cx.d)
b1=b0.a
r=b0.cx.d
b1.ai(b1.dO,r)}b1=t.x
r=b1.a
if(r||b1.b||!1){q=b0.a
p=b0.cy.ch
q=q.dP
q.a.uniform1f(q.d,p)}if(r){r=b0.a
q=b0.cy.f
r=r.dQ
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.a9(m,b0.cy.d)
b1=b0.a
r=b0.cy.d
b1.ai(b1.dR,r)}}b1=t.y
r=b1.a
q=!r
if(!q||b1.b||!1){if(r){r=b0.a
p=b0.db.f
r=r.dS
r.a.uniform1f(r.d,p)}if(b1.b){b0.a9(m,b0.db.d)
r=b0.a
p=b0.db.d
r.ai(r.dT,p)}r=b2.a
r.enable(3042)
r.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].Z(b2)
r=b3.e
r.Z(b2)
r.a5(b2)
r.at(b2)
if(!q||b1.b||!1)b2.a.disable(3042)
for(b1=b2.a,k=0;k<m.length;++k){r=m[k]
if(r.c){r.c=!1
b1.activeTexture(33984+r.a)
b1.bindTexture(3553,null)}}r=b0.a
r.toString
b1.useProgram(null)
r.x.c9()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cY().ba}}
O.hl.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.cX(a,C.d.aa(b+3,4)*4))}}
O.hm.prototype={
$2:function(a,b){return J.cT(a.a,b.a)}}
O.hn.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.d4(a,C.d.aa(b+3,4)*4))}}
O.ho.prototype={
$2:function(a,b){return J.cT(a.a,b.a)}}
O.hp.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.du(a,C.d.aa(b+3,4)*4))}}
O.hq.prototype={
$2:function(a,b){return J.cT(a.a,b.a)}}
O.hr.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.dB(a,C.d.aa(b+3,4)*4))}}
O.hs.prototype={
$2:function(a,b){return J.cT(a.a,b.a)}}
O.hf.prototype={
aE:function(){var u,t=this
t.cN()
u=t.f
if(!(Math.abs(u-1)<$.B().a)){t.f=1
u=new D.z(t.b,u,1)
u.b=!0
t.a.M(u)}}}
O.ca.prototype={
M:function(a){return this.a.M(a)},
aC:function(){return this.M(null)},
aE:function(){},
de:function(a){var u,t,s=this
if(!s.c.t(0,a)){u=s.c
if(u.a||u.b||!1)t=!(a.a||a.b||!1)
else t=!0
s.c=a
if(t)s.aE()
u=s.a
u.a=null
u.M(null)}}}
O.hg.prototype={}
O.az.prototype={
dc:function(a){var u,t,s=this
if(!s.f.t(0,a)){u=s.f
s.f=a
t=new D.z(s.b+".color",u,a)
t.b=!0
s.a.M(t)}},
aE:function(){this.cN()
this.dc(new V.a_(1,1,1))},
saV:function(a,b){this.de(new A.a0(!0,this.c.b,!1))
this.dc(b)}}
O.hi.prototype={}
O.hj.prototype={
aE:function(){var u,t=this
t.cO()
u=t.ch
if(!(Math.abs(u-1)<$.B().a)){t.ch=1
u=new D.z(t.b+".refraction",u,1)
u.b=!0
t.a.M(u)}}}
O.hk.prototype={
aE:function(){var u,t=this
t.cO()
u=t.ch
if(!(Math.abs(u-100)<$.B().a)){t.ch=100
u=new D.z(t.b+".shininess",u,100)
u.b=!0
t.a.M(u)}}}
O.dz.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.C():u},
M:function(a){var u=this.e
if(u!=null)u.D(a)},
aC:function(){return this.M(null)},
ad:function(a,b){},
cA:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=a.fr.h(0,n)
if(u==null){t=a.a
u=new A.ia(t,n)
u.bF(t,n)
u.cn(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.h(0,"posAttr")
u.Q=H.i(u.y.h(0,"fov"),"$iR")
u.ch=H.i(u.y.h(0,"ratio"),"$iR")
u.cx=H.i(u.y.h(0,"boxClr"),"$iF")
u.cy=H.i(u.y.h(0,"boxTxt"),"$ibn")
u.db=H.i(u.y.h(0,"viewMat"),"$ia4")
a.bY(u)}o.a=u}if(b.e==null){t=b.d.c0(new Z.cw(a.a),$.ah())
t.aw($.ah()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
if(!t.c&&t.d>=6){t.c=!0
s=a.a
s.activeTexture(33985)
s.bindTexture(34067,t.b)}}t=a.d
s=a.c
r=o.a
r.Z(a)
q=o.b
p=r.Q
p.a.uniform1f(p.d,q)
q=r.ch
q.a.uniform1f(q.d,t/s)
s=o.c
r.cy.em(s)
s=o.d
t=r.cx
t.a.uniform3f(t.d,s.a,s.b,s.c)
s=a.db
s=s.ga4(s).co(0)
r=r.db
r.toString
r.ae(s.a7(0,!0))
t=b.e
if(t instanceof Z.b8){t.Z(a)
t.a5(a)
t.at(a)}else b.e=null
t=o.a
t.toString
s=a.a
s.useProgram(null)
t.x.c9()
t=o.c
if(t!=null)if(t.c){t.c=!1
s.activeTexture(33984+t.a)
s.bindTexture(34067,null)}}}
O.dG.prototype={}
T.cp.prototype={}
T.is.prototype={}
T.it.prototype={
dd:function(){if(!this.d){this.d=!0
var u=this.y
if(u!=null)u.ca()}},
gp:function(){var u=this.y
return u==null?this.y=D.C():u},
Z:function(a){var u,t=this
if(!t.c&&t.d){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(3553,t.b)}}}
T.iu.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.C():u}}
T.iv.prototype={
hK:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=W.lq(a)
t=T.kQ(q)
W.V(u,"load",new T.ix(this,t,u,!1,q,!1,!1),!1)
return t},
aP:function(a,b,c,d,e,f){var u=W.lq(c);++this.d
W.V(u,"load",new T.iw(this,u,!1,b,!1,d,a),!1)},
da:function(a,b,c){var u,t,s,r
b=V.cP(b)
u=V.cP(a.width)
t=V.cP(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.ky()
s.width=u
s.height=t
r=C.j.ej(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.oN(r.getImageData(0,0,s.width,s.height))}}}
T.ix.prototype={
$1:function(a){var u,t,s=this,r=3553,q=s.b,p=s.c
q.e=p.width
q.f=p.height
u=s.a
t=u.da(p,u.b,s.d)
q.r=p.width
q.x=p.height
p=u.a
p.bindTexture(r,s.e)
p.pixelStorei(37440,s.f?1:0)
C.q.ed(p,r,0,6408,6408,5121,t)
if(s.r)p.generateMipmap(r)
p.bindTexture(r,null)
q.dd();++u.e}}
T.iw.prototype={
$1:function(a){var u=this,t=u.a,s=t.da(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.q.ed(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.ca()}++t.e}}
X.f5.prototype={
gp:function(){var u=this.fr
return u==null?this.fr=D.C():u},
a1:function(a){var u=this.fr
if(u!=null)u.D(a)},
sau:function(a,b){var u,t=this
if(b<1)b=1
u=t.a
if(u!==b){t.y=null
t.c=t.a=b
u=new D.z("width",u,b)
u.b=!0
t.a1(u)}},
sap:function(a,b){var u,t=this
if(b<1)b=1
u=t.b
if(u!==b){t.y=null
t.d=t.b=b
u=new D.z("height",u,b)
u.b=!0
t.a1(u)}},
Z:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=3553,e=36161,d=36160
if(h.f){u=a.a
t=u.drawingBufferWidth
s=h.r
if(typeof t!=="number")return t.q()
h.sau(0,C.d.a0(t*s))
u=u.drawingBufferHeight
s=h.x
if(typeof u!=="number")return u.q()
h.sap(0,C.d.a0(u*s))}if(h.y==null){u=a.a
t=h.ch
s=h.a
r=h.b
q=u.getParameter(3379)
p=V.cP(s)
o=V.cP(r)
q=V.cP(q)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
u.bindTexture(f,n)
u.texParameteri(f,10242,33071)
u.texParameteri(f,10243,33071)
u.texParameteri(f,10241,9729)
u.texParameteri(f,10240,9729)
C.q.ee(u,f,0,6408,p,o,0,6408,5121,g)
u.bindTexture(f,g)
m=T.kQ(n)
m.e=s
m.f=r
m.r=p
m.x=o
m.dd()
t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.ca()
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
a.c=C.c.a0(s*h.a)
r=t.d
a.d=C.c.a0(r*h.b)
l=t.a
k=h.c
if(typeof k!=="number")return H.r(k)
j=C.c.a0(l*k)
t=t.b
l=h.d
if(typeof l!=="number")return H.r(l)
u.viewport(j,C.c.a0(t*l),C.c.a0(s*k),C.c.a0(r*l))
u.clearDepth(h.db)
if(h.cy){t=h.cx
u.clearColor(t.a,t.b,t.c,t.d)
i=16640}else i=256
if(i>0)u.clear(i)},
at:function(a){a.a.bindFramebuffer(36160,null)}}
X.kx.prototype={}
X.fK.prototype={
gp:function(){var u=this.x
return u==null?this.x=D.C():u},
Z:function(a){var u,t,s,r,q,p,o=a.a
o.bindFramebuffer(36160,null)
o.enable(2884)
o.enable(2929)
o.depthFunc(513)
u=o.drawingBufferWidth
t=o.drawingBufferHeight
s=this.r
r=s.a
if(typeof u!=="number")return H.r(u)
q=C.c.a0(r*u)
r=s.b
if(typeof t!=="number")return H.r(t)
p=C.c.a0(r*t)
r=C.c.a0(s.c*u)
a.c=r
s=C.c.a0(s.d*t)
a.d=s
o.viewport(q,p,r,s)
o.clearDepth(this.c)
s=this.a
o.clearColor(s.a,s.b,s.c,s.d)
o.clear(16640)},
at:function(a){}}
X.fT.prototype={
gp:function(){var u=this.b
return u==null?this.b=D.C():u},
Z:function(a){var u
a.cy.bx(V.bz())
u=V.bz()
a.db.bx(u)},
at:function(a){a.cy.aI()
a.db.aI()}}
X.dt.prototype={
gp:function(){var u=this.f
return u==null?this.f=D.C():u},
a1:function(a){var u=this.f
if(u!=null)u.D(a)},
eG:function(){return this.a1(null)},
Z:function(a){var u,t,s,r,q,p,o,n,m,l=this,k=a.c,j=a.d,i=l.c,h=l.d,g=l.e,f=g-h,e=1/Math.tan(i*0.5),d=V.aA(-e/(k/j),0,0,0,0,e,0,0,0,0,g/f,-g*h/f,0,0,1,0)
a.cy.bx(d)
k=$.lx
if(k==null){k=V.nf()
j=$.lS
if(j==null)j=$.lS=new V.J(0,1,0)
i=$.lR
if(i==null)i=$.lR=new V.J(0,0,-1)
u=i.w(0,Math.sqrt(i.H(i)))
j=j.b9(u)
t=j.w(0,Math.sqrt(j.H(j)))
s=u.b9(t)
r=new V.J(k.a,k.b,k.c)
q=t.U(0).H(r)
p=s.U(0).H(r)
o=u.U(0).H(r)
k=V.aA(t.a,s.a,u.a,q,t.b,s.b,u.b,p,t.c,s.c,u.c,o,0,0,0,1)
$.lx=k
n=k}else n=k
k=l.b
if(k!=null){m=k.b_(0,a,l)
if(m!=null)n=m.q(0,n)}a.db.bx(n)},
at:function(a){a.cy.aI()
a.db.aI()}}
X.io.prototype={}
V.d_.prototype={
bi:function(a){this.b=new P.fR(C.V)
this.c=null
this.d=H.b([],[[P.o,W.ap]])},
N:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)l.push(H.b([],[W.ap]))
u=a.split("\n")
for(l=u.length,t=[W.ap],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else m.d.push(H.b([],t))
p=document.createElement("div")
p.className="codePart"
o=m.b.eQ(q,0,q.length)
n=o==null?q:o
C.T.el(p,H.l8(n," ","&nbsp;"))
n=p.style
n.color=b
C.b.gaA(m.d).push(p)}},
e7:function(a,b){var u,t,s,r=this
r.d=H.b([],[[P.o,W.ap]])
u=C.b.j(b,"\n")
t=r.c
if(t==null)t=r.c=r.bo()
for(t.toString,s=new H.n(u),s=new P.bK(t.cC(new H.bh(s,s.gl(s))).a());s.v();)r.bw(s.gA(s))}}
V.kq.prototype={
$1:function(a){var u=C.c.ef(this.a.ghE(),2)
if(u!=="0.00")P.l7(u+" fps")}}
V.fp.prototype={
bw:function(a){var u=this
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
bo:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=L.iB()
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
a1.k(0,k).j(0,k).a.push(new K.aP())
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
a1.k(0,h).j(0,h).a.push(new K.aP())
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
t=new K.a9()
s=[K.bi]
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
t=new K.a9()
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
t.aJ(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aJ(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aJ(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.fM.prototype={
bw:function(a){var u=this
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
bo:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=L.iB()
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
e.k(0,k).j(0,m).a.push(new K.aP())
t=e.k(0,j).j(0,i)
u=K.u(new H.n("\n"))
t.a.push(u)
u=e.k(0,j).j(0,j)
t=new K.a9()
s=[K.bi]
t.a=H.b([],s)
u.a.push(t)
u=K.u(new H.n("\n"))
t.a.push(u)
u=e.k(0,r).j(0,h)
t=K.u(new H.n("#"))
u.a.push(t)
t=e.k(0,h).j(0,h)
u=new K.a9()
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
u.aJ(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aJ(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aJ(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return e}}
V.fP.prototype={
bw:function(a){var u=this,t="#111"
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
bo:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=L.iB()
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
l.k(0,o).j(0,o).a.push(new K.aP())
l.k(0,s).j(0,m).a.push(new K.aP())
u=l.k(0,m).j(0,m)
t=new K.a9()
t.a=H.b([],[K.bi])
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
t.aJ(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
t=l.k(0,q)
t.d=t.a.S(q)
t=l.k(0,m)
t.d=t.a.S(m)
return l}}
V.hM.prototype={
e7:function(a,b){this.d=H.b([],[[P.o,W.ap]])
this.N(C.b.j(b,"\n"),"#111")},
bw:function(a){},
bo:function(){return}}
V.hR.prototype={
dl:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
if(m.c==null)return
u=m.a
t=P.lL().gcz().h(0,H.e(u))
if(t==null)if(d){c.$0()
m.dj(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.lc(m.c).n(0,q)
o=W.mZ("radio")
o.checked=s
o.name=u
W.V(o,"change",new V.hS(m,o,c,b),!1)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.lc(m.c).n(0,r.createElement("br"))},
an:function(a,b,c){return this.dl(a,b,c,!1)},
dj:function(a){var u,t,s=P.lL(),r=P.h,q=P.n7(s.gcz(),r,r)
q.m(0,this.a,a)
u=s.ea(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.jD([],[]).bB(""),"",t)}}
V.hS.prototype={
$1:function(a){var u=this
if(u.b.checked){u.c.$0()
u.a.dj(u.d)}}}
V.i6.prototype={
eA:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.V(q,"scroll",new V.i8(o),!1)},
dn:function(a){var u,t,s,r,q,p,o,n
this.h6()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b,r=C.b.hI(a),s.toString,r=new H.n(r),r=new P.bK(s.cC(new H.bh(r,r.gl(r))).a());r.v();){s=r.gA(r)
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
if(H.mj(s,"|",0)){p=s.split("|")
o=u.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.d(p,1)
o.href=p[1]
o.textContent=p[0]
t.appendChild(o)}else{n=P.eI(C.A,s,C.e,!1)
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
ei:function(a){var u,t,s,r=new V.fp("dart")
r.bi("dart")
u=new V.fM("glsl")
u.bi("glsl")
t=new V.fP("html")
t.bi("html")
s=C.b.hA(H.b([r,u,t],[V.d_]),new V.i9(a))
if(s!=null)return s
r=new V.hM("plain")
r.bi("plain")
return r},
dm:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.b([],[P.v])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(J.cN(s).a8(s,"+")){b0[t]=C.a.ag(s,1)
a6.push(1)
u=!0}else if(C.a.a8(s,"-")){b0[t]=C.a.ag(s,1)
a6.push(-1)
u=!0}else a6.push(0)}r=this.ei(a8)
r.e7(0,b0)
q=document
p=q.createElement("div")
p.className="codeTableScroll"
o=q.createElement("table")
o.className="codeTable"
p.appendChild(o)
this.a.appendChild(p)
n=P.eI(C.A,a7,C.e,!1)
m=q.createElement("tr")
m.className="headerRow"
l=q.createElement("td")
l.className="headerCell"
l.colSpan=u?3:2
k=q.createElement("div")
k.className="tableHeader"
k.id=n
j=W.le()
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
for(a2=C.b.gR(s);a2.v();)d.appendChild(a2.gA(a2))
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
u=L.iB()
u.d=u.k(0,q)
t=u.k(0,q).j(0,p)
s=K.u(new H.n("*"))
t.a.push(s)
t.c=!0
t=u.k(0,p).j(0,p)
s=new K.a9()
r=[K.bi]
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
s=new K.a9()
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
s=new K.a9()
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
t=new K.a9()
t.a=H.b([],r)
s.a.push(t)
s=K.u(new H.n("|]"))
t.a.push(s)
s=u.k(0,k).j(0,j)
t=K.u(new H.n("]"))
s.a.push(t)
s.c=!0
s=u.k(0,k).j(0,k)
t=new K.a9()
t.a=H.b([],r)
s.a.push(t)
s=K.u(new H.n("|]"))
t.a.push(s)
u.k(0,q).j(0,i).a.push(new K.aP())
s=u.k(0,i).j(0,i)
t=new K.a9()
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
V.i8.prototype={
$1:function(a){P.lH(C.n,new V.i7(this.a))}}
V.i7.prototype={
$0:function(){var u=C.c.a0(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
V.i9.prototype={
$1:function(a){return a.a===this.a}}
U.kc.prototype={
$1:function(a){var u=this.a
u.d.sb7(a)
u.f.sb7(a)}}
U.kd.prototype={
$0:function(){this.a.$1(0)}}
U.ke.prototype={
$0:function(){this.a.$1(0.1)}}
U.kh.prototype={
$0:function(){this.a.$1(0.2)}}
U.ki.prototype={
$0:function(){this.a.$1(0.3)}}
U.kj.prototype={
$0:function(){this.a.$1(0.4)}}
U.kk.prototype={
$0:function(){this.a.$1(0.5)}}
U.kl.prototype={
$0:function(){this.a.$1(0.6)}}
U.km.prototype={
$0:function(){this.a.$1(0.7)}}
U.kn.prototype={
$0:function(){this.a.$1(0.8)}}
U.ko.prototype={
$0:function(){this.a.$1(0.9)}}
U.kf.prototype={
$0:function(){this.a.$1(1)}}
U.kg.prototype={
$1:function(a){var u,t=null,s=this.a,r=this.b,q=r.d
if(q==null)q=t
else{q=q.a
q=q==null?t:q.c}u=[P.h]
s.dm("Vertex Shader","glsl",0,H.b(q.split("\n"),u))
r=r.d
if(r==null)r=t
else{r=r.a
r=r==null?t:r.d}s.dm("Fragment Shader","glsl",0,H.b(r.split("\n"),u))}};(function aliases(){var u=J.a.prototype
u.er=u.i
u=J.dg.prototype
u.eu=u.i
u=P.j.prototype
u.es=u.bC
u=W.S.prototype
u.bE=u.ao
u=W.eq.prototype
u.ev=u.az
u=K.dc.prototype
u.eq=u.aH
u.cM=u.i
u=O.ca.prototype
u.cN=u.aE
u=O.az.prototype
u.cO=u.aE})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installStaticTearOff,q=hunkHelpers.installInstanceTearOff,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u,n=hunkHelpers._instance_1u,m=hunkHelpers._instance_0i
u(J,"oc","n2",21)
t(P,"oH","nL",8)
t(P,"oI","nM",8)
t(P,"oJ","nN",8)
s(P,"mb","oF",10)
r(W,"oW",4,null,["$4"],["nO"],16,0)
r(W,"oX",4,null,["$4"],["nP"],16,0)
var l
q(l=E.aT.prototype,"ge5",0,0,null,["$1","$0"],["e6","hS"],0,0)
q(l,"ge3",0,0,null,["$1","$0"],["e4","hP"],0,0)
p(l,"ghN","hO",4)
p(l,"ghQ","hR",4)
q(l=E.dH.prototype,"gcQ",0,0,null,["$1","$0"],["cS","cR"],0,0)
o(l,"gi5","eb",10)
n(l=X.dR.prototype,"gfm","fn",5)
n(l,"gfa","fb",5)
n(l,"gfg","fh",2)
n(l,"gfq","fs",11)
n(l,"gfo","fp",11)
n(l,"gfv","fw",2)
n(l,"gfB","fC",2)
n(l,"gfk","fl",2)
n(l,"gfz","fA",2)
n(l,"gfi","fj",2)
n(l,"gfD","fE",19)
n(l,"gfF","fG",5)
n(l,"gfV","fW",6)
n(l,"gfR","fS",6)
n(l,"gfT","fU",6)
q(l=D.di.prototype,"gd5",0,0,null,["$1","$0"],["d6","ft"],0,0)
n(l,"gfH","fI",20)
p(l,"gf4","f5",12)
p(l,"gfL","fM",12)
m(V.G.prototype,"gl","bb",7)
m(V.J.prototype,"gl","bb",7)
m(V.cv.prototype,"gl","bb",7)
q(l=U.c3.prototype,"gaQ",0,0,null,["$1","$0"],["T","ah"],0,0)
p(l,"gf2","f3",13)
p(l,"gfJ","fK",13)
q(l=U.dS.prototype,"gaQ",0,0,null,["$1","$0"],["T","ah"],0,0)
n(l,"gbN","bO",1)
n(l,"gbP","bQ",1)
n(l,"gbR","bS",1)
q(l=U.dT.prototype,"gaQ",0,0,null,["$1","$0"],["T","ah"],0,0)
n(l,"gbN","bO",1)
n(l,"gbP","bQ",1)
n(l,"gbR","bS",1)
n(l,"geW","eX",1)
n(l,"geY","eZ",1)
n(l,"ghd","he",1)
n(l,"ghb","hc",1)
n(l,"gh9","ha",1)
n(U.dU.prototype,"gf0","f1",1)
q(l=M.d0.prototype,"gY",0,0,null,["$1","$0"],["V","aB"],0,0)
p(l,"gfN","fO",14)
p(l,"gfP","fQ",14)
q(M.d2.prototype,"gY",0,0,null,["$1","$0"],["V","aB"],0,0)
q(l=M.d7.prototype,"gY",0,0,null,["$1","$0"],["V","aB"],0,0)
p(l,"gfc","fd",4)
p(l,"gfe","ff",4)
q(M.da.prototype,"gY",0,0,null,["$1","$0"],["V","aB"],0,0)
q(O.db.prototype,"gav",0,0,null,["$1","$0"],["M","aC"],0,0)
q(l=O.dl.prototype,"gav",0,0,null,["$1","$0"],["M","aC"],0,0)
q(l,"gh0",0,0,null,["$1","$0"],["d8","h1"],0,0)
p(l,"gf6","f7",15)
p(l,"gf8","f9",15)
q(O.ca.prototype,"gav",0,0,null,["$1","$0"],["M","aC"],0,0)
q(O.dz.prototype,"gav",0,0,null,["$1","$0"],["M","aC"],0,0)
q(X.dt.prototype,"geF",0,0,null,["$1","$0"],["a1","eG"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.a2,null)
s(P.a2,[H.kJ,J.a,J.a7,P.ed,P.j,H.bh,P.fW,H.d8,H.iR,H.fh,H.iG,P.bw,H.bY,H.ev,P.a1,H.h2,H.h4,H.fY,P.eB,P.bJ,P.bK,P.dX,P.dE,P.ij,P.dI,P.jV,P.jx,P.jr,P.ec,P.x,P.jN,P.hb,P.fd,P.fS,P.jT,P.jS,P.aN,P.ae,P.ad,P.ba,P.hK,P.dC,P.e5,P.fJ,P.fL,P.o,P.T,P.bk,P.h,P.Q,P.bL,P.iT,P.jA,W.fl,W.cz,W.M,W.dr,W.eq,W.jH,W.d9,W.aY,W.jw,W.eJ,P.jC,P.eG,P.js,P.bF,K.aP,K.dc,K.bi,K.hT,K.i1,L.dD,L.dJ,L.dK,L.iA,O.aQ,O.cc,E.f9,E.aT,E.bu,E.bA,E.e4,E.hU,E.dH,Z.dW,Z.cw,Z.b8,Z.bx,Z.aL,D.fc,D.c0,D.X,X.cZ,X.dh,X.h0,X.h8,X.ak,X.hz,X.iC,X.dR,D.f6,D.fr,D.a8,D.hO,D.id,V.a_,V.ao,V.fB,V.cb,V.aW,V.a3,V.Y,V.b0,V.dw,V.G,V.J,V.cv,U.dS,U.dT,U.dU,M.d2,M.d7,M.da,M.al,A.cW,A.f0,A.a0,A.fO,A.cX,A.d4,A.du,A.dB,A.hh,A.cr,A.cs,A.ct,A.cu,A.dN,A.iM,F.bb,F.c7,F.ci,F.i2,F.i3,F.i4,F.i5,F.bI,F.j2,F.j3,F.j6,F.j7,O.dG,O.ca,O.hi,T.iv,X.io,X.kx,X.fT,X.dt,V.d_,V.hR,V.i6])
s(J.a,[J.fX,J.df,J.dg,J.be,J.c6,J.bf,H.cf,H.bj,W.f,W.eY,W.bs,W.ax,W.H,W.dZ,W.aj,W.fq,W.fs,W.e0,W.d6,W.e2,W.fu,W.k,W.e6,W.ay,W.fQ,W.e8,W.aU,W.h7,W.ht,W.ee,W.ef,W.aB,W.eg,W.ej,W.aD,W.en,W.ep,W.aG,W.er,W.aH,W.ew,W.ar,W.ez,W.iz,W.aJ,W.eC,W.iE,W.iY,W.eK,W.eM,W.eO,W.eQ,W.eS,P.aV,P.ea,P.aZ,P.el,P.hQ,P.ex,P.b2,P.eE,P.f1,P.dY,P.dx,P.et])
s(J.dg,[J.hL,J.bH,J.bg])
t(J.kI,J.be)
s(J.c6,[J.de,J.dd])
t(P.h6,P.ed)
s(P.h6,[H.dP,W.jh,W.a5,P.fF])
t(H.n,H.dP)
s(P.j,[H.q,H.c9,H.cx,P.fV])
s(H.q,[H.dj,H.h3])
t(H.fx,H.c9)
s(P.fW,[H.hc,H.jb])
t(H.hd,H.dj)
t(H.fi,H.fh)
s(P.bw,[H.hH,H.h_,H.iQ,H.fb,H.i_,P.ds,P.an,P.iS,P.iO,P.cm,P.fg,P.fo])
s(H.bY,[H.ks,H.ip,H.fZ,H.k8,H.k9,H.ka,P.jd,P.jc,P.je,P.jf,P.jM,P.jL,P.k3,P.ju,P.jv,P.h5,P.ha,P.fv,P.fw,P.iX,P.iU,P.iV,P.iW,P.jO,P.jP,P.jR,P.jQ,P.jZ,P.jY,P.k_,P.k0,W.fy,W.hv,W.hx,W.hZ,W.ii,W.jm,W.hG,W.hF,W.jy,W.jz,W.jK,W.jU,P.jE,P.jF,P.k4,P.fG,P.fH,P.f3,E.hV,E.hW,E.hX,E.iy,D.fC,D.fD,F.jW,F.j9,F.j8,F.j4,F.j5,O.hl,O.hm,O.hn,O.ho,O.hp,O.hq,O.hr,O.hs,T.ix,T.iw,V.kq,V.hS,V.i8,V.i7,V.i9,U.kc,U.kd,U.ke,U.kh,U.ki,U.kj,U.kk,U.kl,U.km,U.kn,U.ko,U.kf,U.kg])
s(H.ip,[H.ig,H.bW])
t(P.h9,P.a1)
s(P.h9,[H.I,W.jg])
t(H.dm,H.bj)
s(H.dm,[H.cB,H.cD])
t(H.cC,H.cB)
t(H.cg,H.cC)
t(H.cE,H.cD)
t(H.dn,H.cE)
s(H.dn,[H.hA,H.hB,H.hC,H.hD,H.hE,H.dp,H.ch])
t(P.jI,P.fV)
t(P.jt,P.jV)
t(P.jq,P.jx)
t(P.eH,P.hb)
t(P.dQ,P.eH)
s(P.fd,[P.f7,P.fz])
t(P.fj,P.ij)
s(P.fj,[P.f8,P.fR,P.j0,P.j_])
t(P.iZ,P.fz)
s(P.ad,[P.K,P.v])
s(P.an,[P.bD,P.fU])
t(P.jj,P.bL)
s(W.f,[W.D,W.fE,W.cd,W.aF,W.cF,W.aI,W.as,W.cH,W.ja,W.cy,P.f4,P.br])
s(W.D,[W.S,W.b9])
s(W.S,[W.p,P.l])
s(W.p,[W.eZ,W.f_,W.bt,W.bv,W.ap,W.fI,W.c5,W.i0,W.dF,W.il,W.im,W.co])
t(W.fk,W.ax)
t(W.bZ,W.dZ)
s(W.aj,[W.fm,W.fn])
t(W.e1,W.e0)
t(W.d5,W.e1)
t(W.e3,W.e2)
t(W.ft,W.e3)
t(W.aq,W.bs)
t(W.e7,W.e6)
t(W.c2,W.e7)
t(W.e9,W.e8)
t(W.c4,W.e9)
t(W.bl,W.k)
s(W.bl,[W.by,W.aC,W.bE])
t(W.hu,W.ee)
t(W.hw,W.ef)
t(W.eh,W.eg)
t(W.hy,W.eh)
t(W.ek,W.ej)
t(W.dq,W.ek)
t(W.eo,W.en)
t(W.hN,W.eo)
t(W.hY,W.ep)
t(W.cG,W.cF)
t(W.ib,W.cG)
t(W.es,W.er)
t(W.ic,W.es)
t(W.ih,W.ew)
t(W.eA,W.ez)
t(W.iq,W.eA)
t(W.cI,W.cH)
t(W.ir,W.cI)
t(W.eD,W.eC)
t(W.iD,W.eD)
t(W.bo,W.aC)
t(W.eL,W.eK)
t(W.ji,W.eL)
t(W.e_,W.d6)
t(W.eN,W.eM)
t(W.jn,W.eN)
t(W.eP,W.eO)
t(W.ei,W.eP)
t(W.eR,W.eQ)
t(W.jB,W.eR)
t(W.eT,W.eS)
t(W.jG,W.eT)
t(W.jk,W.jg)
t(W.jl,P.dE)
t(W.jJ,W.eq)
t(P.jD,P.jC)
t(P.aa,P.js)
t(P.eb,P.ea)
t(P.h1,P.eb)
t(P.em,P.el)
t(P.hI,P.em)
t(P.cl,P.l)
t(P.ey,P.ex)
t(P.ik,P.ey)
t(P.eF,P.eE)
t(P.iF,P.eF)
t(P.f2,P.dY)
t(P.hJ,P.br)
t(P.eu,P.et)
t(P.ie,P.eu)
s(K.dc,[K.a9,L.dM])
s(E.f9,[Z.cY,A.dy,T.cp])
s(D.X,[D.bc,D.bd,D.z,X.hP])
s(X.hP,[X.dk,X.aX,X.ce,X.dL])
s(O.aQ,[D.di,U.c3,M.d0])
s(D.fc,[U.ff,U.af])
t(U.d1,U.af)
s(A.dy,[A.fN,A.he,A.ia])
s(A.dN,[A.bm,A.iJ,A.iK,A.iL,A.iI,A.R,A.dO,A.F,A.cq,A.iN,A.bG,A.a4,A.Z,A.bn])
s(O.dG,[O.db,O.dl,O.dz])
s(O.ca,[O.hf,O.hg,O.az])
s(O.az,[O.hj,O.hk])
s(T.cp,[T.is,T.iu])
t(T.it,T.is)
s(X.io,[X.f5,X.fK])
s(V.d_,[V.fp,V.fM,V.fP,V.hM])
u(H.dP,H.iR)
u(H.cB,P.x)
u(H.cC,H.d8)
u(H.cD,P.x)
u(H.cE,H.d8)
u(P.ed,P.x)
u(P.eH,P.jN)
u(W.dZ,W.fl)
u(W.e0,P.x)
u(W.e1,W.M)
u(W.e2,P.x)
u(W.e3,W.M)
u(W.e6,P.x)
u(W.e7,W.M)
u(W.e8,P.x)
u(W.e9,W.M)
u(W.ee,P.a1)
u(W.ef,P.a1)
u(W.eg,P.x)
u(W.eh,W.M)
u(W.ej,P.x)
u(W.ek,W.M)
u(W.en,P.x)
u(W.eo,W.M)
u(W.ep,P.a1)
u(W.cF,P.x)
u(W.cG,W.M)
u(W.er,P.x)
u(W.es,W.M)
u(W.ew,P.a1)
u(W.ez,P.x)
u(W.eA,W.M)
u(W.cH,P.x)
u(W.cI,W.M)
u(W.eC,P.x)
u(W.eD,W.M)
u(W.eK,P.x)
u(W.eL,W.M)
u(W.eM,P.x)
u(W.eN,W.M)
u(W.eO,P.x)
u(W.eP,W.M)
u(W.eQ,P.x)
u(W.eR,W.M)
u(W.eS,P.x)
u(W.eT,W.M)
u(P.ea,P.x)
u(P.eb,W.M)
u(P.el,P.x)
u(P.em,W.M)
u(P.ex,P.x)
u(P.ey,W.M)
u(P.eE,P.x)
u(P.eF,W.M)
u(P.dY,P.a1)
u(P.et,P.x)
u(P.eu,W.M)})()
var v={mangledGlobalNames:{v:"int",K:"double",ad:"num",h:"String",aN:"bool",bk:"Null",o:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.X]},{func:1,ret:-1,args:[D.X]},{func:1,ret:-1,args:[W.aC]},{func:1,ret:P.bk,args:[,,]},{func:1,ret:-1,args:[P.v,[P.j,E.aT]]},{func:1,ret:-1,args:[W.k]},{func:1,ret:-1,args:[W.bE]},{func:1,ret:P.K},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.by]},{func:1,ret:-1,args:[P.v,[P.j,D.a8]]},{func:1,ret:-1,args:[P.v,[P.j,U.af]]},{func:1,ret:-1,args:[P.v,[P.j,M.al]]},{func:1,ret:-1,args:[P.v,[P.j,V.aW]]},{func:1,ret:P.aN,args:[W.S,P.h,P.h,W.cz]},{func:1,ret:P.bk,args:[,]},{func:1,ret:P.bF,args:[,,]},{func:1,ret:-1,args:[W.bo]},{func:1,ret:P.aN,args:[[P.j,D.a8]]},{func:1,ret:P.v,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.t=W.bt.prototype
C.j=W.bv.prototype
C.T=W.ap.prototype
C.W=J.a.prototype
C.b=J.be.prototype
C.X=J.dd.prototype
C.d=J.de.prototype
C.i=J.df.prototype
C.c=J.c6.prototype
C.a=J.bf.prototype
C.Y=J.bg.prototype
C.E=J.hL.prototype
C.q=P.dx.prototype
C.F=W.dF.prototype
C.r=J.bH.prototype
C.G=W.bo.prototype
C.H=W.cy.prototype
C.I=new E.bu("Browser.chrome")
C.u=new E.bu("Browser.firefox")
C.v=new E.bu("Browser.edge")
C.J=new E.bu("Browser.other")
C.a7=new P.f8()
C.K=new P.f7()
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

C.R=new P.hK()
C.e=new P.iZ()
C.S=new P.j0()
C.f=new P.jt()
C.n=new P.ba(0)
C.U=new P.ba(5e6)
C.V=new P.fS("element",!1,!1,!1)
C.y=H.b(u([127,2047,65535,1114111]),[P.v])
C.k=H.b(u([0,0,32776,33792,1,10240,0,0]),[P.v])
C.Z=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.l=H.b(u([0,0,65490,45055,65535,34815,65534,18431]),[P.v])
C.m=H.b(u([0,0,26624,1023,65534,2047,65534,2047]),[P.v])
C.a_=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.z=H.b(u([]),[P.h])
C.a0=H.b(u([0,0,32722,12287,65534,34815,65534,18431]),[P.v])
C.A=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.v])
C.h=H.b(u([0,0,24576,1023,65534,34815,65534,18431]),[P.v])
C.B=H.b(u([0,0,32754,11263,65534,34815,65534,18431]),[P.v])
C.a1=H.b(u([0,0,32722,12287,65535,34815,65534,18431]),[P.v])
C.C=H.b(u([0,0,65490,12287,65535,34815,65534,18431]),[P.v])
C.o=H.b(u(["bind","if","ref","repeat","syntax"]),[P.h])
C.p=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])
C.a2=new H.fi(0,{},C.z,[P.h,P.h])
C.a3=new E.bA("OperatingSystem.windows")
C.D=new E.bA("OperatingSystem.mac")
C.a4=new E.bA("OperatingSystem.linux")
C.a5=new E.bA("OperatingSystem.other")
C.a6=new P.bJ(null,2)})();(function staticFields(){$.aw=0
$.bX=null
$.lh=null
$.md=null
$.ma=null
$.mh=null
$.k5=null
$.kb=null
$.l5=null
$.bO=null
$.cL=null
$.cM=null
$.l0=!1
$.at=C.f
$.ab=[]
$.aS=null
$.kD=null
$.lm=null
$.ll=null
$.cA=P.kL(P.h,P.fL)
$.fA=null
$.lt=null
$.lu=null
$.ly=null
$.aE=null
$.lD=null
$.lQ=null
$.lO=null
$.lP=null
$.lT=null
$.lS=null
$.lR=null
$.lU=null
$.lx=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pe","mm",function(){return H.mc("_$dart_dartClosure")})
u($,"pf","l9",function(){return H.mc("_$dart_js")})
u($,"pg","mn",function(){return H.aK(H.iH({
toString:function(){return"$receiver$"}}))})
u($,"ph","mo",function(){return H.aK(H.iH({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"pi","mp",function(){return H.aK(H.iH(null))})
u($,"pj","mq",function(){return H.aK(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pm","mt",function(){return H.aK(H.iH(void 0))})
u($,"pn","mu",function(){return H.aK(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pl","ms",function(){return H.aK(H.lJ(null))})
u($,"pk","mr",function(){return H.aK(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"pp","mw",function(){return H.aK(H.lJ(void 0))})
u($,"po","mv",function(){return H.aK(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"pD","la",function(){return P.nK()})
u($,"pq","mx",function(){return P.nH()})
u($,"pE","mB",function(){return H.ne(H.bN(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.v])))})
u($,"pH","mD",function(){return P.nt("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"pI","mE",function(){return P.oa()})
u($,"pF","mC",function(){return P.ls(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)})
u($,"px","mA",function(){return Z.am(0)})
u($,"pr","my",function(){return Z.am(511)})
u($,"pz","ah",function(){return Z.am(1)})
u($,"py","b7",function(){return Z.am(2)})
u($,"pt","b6",function(){return Z.am(4)})
u($,"pA","av",function(){return Z.am(8)})
u($,"pB","bq",function(){return Z.am(16)})
u($,"pu","cR",function(){return Z.am(32)})
u($,"pv","cS",function(){return Z.am(64)})
u($,"pw","mz",function(){return Z.am(96)})
u($,"pC","bU",function(){return Z.am(128)})
u($,"ps","b5",function(){return Z.am(256)})
u($,"pd","ml",function(){return new V.fB(1e-9)})
u($,"pc","B",function(){return $.ml()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cf,DataView:H.bj,ArrayBufferView:H.bj,Float32Array:H.cg,Float64Array:H.cg,Int16Array:H.hA,Int32Array:H.hB,Int8Array:H.hC,Uint16Array:H.hD,Uint32Array:H.hE,Uint8ClampedArray:H.dp,CanvasPixelArray:H.dp,Uint8Array:H.ch,HTMLAudioElement:W.p,HTMLBRElement:W.p,HTMLBaseElement:W.p,HTMLButtonElement:W.p,HTMLContentElement:W.p,HTMLDListElement:W.p,HTMLDataElement:W.p,HTMLDataListElement:W.p,HTMLDetailsElement:W.p,HTMLDialogElement:W.p,HTMLEmbedElement:W.p,HTMLFieldSetElement:W.p,HTMLHRElement:W.p,HTMLHeadElement:W.p,HTMLHeadingElement:W.p,HTMLHtmlElement:W.p,HTMLIFrameElement:W.p,HTMLInputElement:W.p,HTMLLIElement:W.p,HTMLLabelElement:W.p,HTMLLegendElement:W.p,HTMLLinkElement:W.p,HTMLMapElement:W.p,HTMLMediaElement:W.p,HTMLMenuElement:W.p,HTMLMetaElement:W.p,HTMLMeterElement:W.p,HTMLModElement:W.p,HTMLOListElement:W.p,HTMLObjectElement:W.p,HTMLOptGroupElement:W.p,HTMLOptionElement:W.p,HTMLOutputElement:W.p,HTMLParagraphElement:W.p,HTMLParamElement:W.p,HTMLPictureElement:W.p,HTMLPreElement:W.p,HTMLProgressElement:W.p,HTMLQuoteElement:W.p,HTMLScriptElement:W.p,HTMLShadowElement:W.p,HTMLSlotElement:W.p,HTMLSourceElement:W.p,HTMLSpanElement:W.p,HTMLStyleElement:W.p,HTMLTableCaptionElement:W.p,HTMLTableCellElement:W.p,HTMLTableDataCellElement:W.p,HTMLTableHeaderCellElement:W.p,HTMLTableColElement:W.p,HTMLTextAreaElement:W.p,HTMLTimeElement:W.p,HTMLTitleElement:W.p,HTMLTrackElement:W.p,HTMLUListElement:W.p,HTMLUnknownElement:W.p,HTMLVideoElement:W.p,HTMLDirectoryElement:W.p,HTMLFontElement:W.p,HTMLFrameElement:W.p,HTMLFrameSetElement:W.p,HTMLMarqueeElement:W.p,HTMLElement:W.p,AccessibleNodeList:W.eY,HTMLAnchorElement:W.eZ,HTMLAreaElement:W.f_,Blob:W.bs,HTMLBodyElement:W.bt,HTMLCanvasElement:W.bv,CDATASection:W.b9,CharacterData:W.b9,Comment:W.b9,ProcessingInstruction:W.b9,Text:W.b9,CSSPerspective:W.fk,CSSCharsetRule:W.H,CSSConditionRule:W.H,CSSFontFaceRule:W.H,CSSGroupingRule:W.H,CSSImportRule:W.H,CSSKeyframeRule:W.H,MozCSSKeyframeRule:W.H,WebKitCSSKeyframeRule:W.H,CSSKeyframesRule:W.H,MozCSSKeyframesRule:W.H,WebKitCSSKeyframesRule:W.H,CSSMediaRule:W.H,CSSNamespaceRule:W.H,CSSPageRule:W.H,CSSRule:W.H,CSSStyleRule:W.H,CSSSupportsRule:W.H,CSSViewportRule:W.H,CSSStyleDeclaration:W.bZ,MSStyleCSSProperties:W.bZ,CSS2Properties:W.bZ,CSSImageValue:W.aj,CSSKeywordValue:W.aj,CSSNumericValue:W.aj,CSSPositionValue:W.aj,CSSResourceValue:W.aj,CSSUnitValue:W.aj,CSSURLImageValue:W.aj,CSSStyleValue:W.aj,CSSMatrixComponent:W.ax,CSSRotation:W.ax,CSSScale:W.ax,CSSSkew:W.ax,CSSTranslation:W.ax,CSSTransformComponent:W.ax,CSSTransformValue:W.fm,CSSUnparsedValue:W.fn,DataTransferItemList:W.fq,HTMLDivElement:W.ap,DOMException:W.fs,ClientRectList:W.d5,DOMRectList:W.d5,DOMRectReadOnly:W.d6,DOMStringList:W.ft,DOMTokenList:W.fu,Element:W.S,AbortPaymentEvent:W.k,AnimationEvent:W.k,AnimationPlaybackEvent:W.k,ApplicationCacheErrorEvent:W.k,BackgroundFetchClickEvent:W.k,BackgroundFetchEvent:W.k,BackgroundFetchFailEvent:W.k,BackgroundFetchedEvent:W.k,BeforeInstallPromptEvent:W.k,BeforeUnloadEvent:W.k,BlobEvent:W.k,CanMakePaymentEvent:W.k,ClipboardEvent:W.k,CloseEvent:W.k,CustomEvent:W.k,DeviceMotionEvent:W.k,DeviceOrientationEvent:W.k,ErrorEvent:W.k,ExtendableEvent:W.k,ExtendableMessageEvent:W.k,FetchEvent:W.k,FontFaceSetLoadEvent:W.k,ForeignFetchEvent:W.k,GamepadEvent:W.k,HashChangeEvent:W.k,InstallEvent:W.k,MediaEncryptedEvent:W.k,MediaKeyMessageEvent:W.k,MediaQueryListEvent:W.k,MediaStreamEvent:W.k,MediaStreamTrackEvent:W.k,MessageEvent:W.k,MIDIConnectionEvent:W.k,MIDIMessageEvent:W.k,MutationEvent:W.k,NotificationEvent:W.k,PageTransitionEvent:W.k,PaymentRequestEvent:W.k,PaymentRequestUpdateEvent:W.k,PopStateEvent:W.k,PresentationConnectionAvailableEvent:W.k,PresentationConnectionCloseEvent:W.k,ProgressEvent:W.k,PromiseRejectionEvent:W.k,PushEvent:W.k,RTCDataChannelEvent:W.k,RTCDTMFToneChangeEvent:W.k,RTCPeerConnectionIceEvent:W.k,RTCTrackEvent:W.k,SecurityPolicyViolationEvent:W.k,SensorErrorEvent:W.k,SpeechRecognitionError:W.k,SpeechRecognitionEvent:W.k,SpeechSynthesisEvent:W.k,StorageEvent:W.k,SyncEvent:W.k,TrackEvent:W.k,TransitionEvent:W.k,WebKitTransitionEvent:W.k,VRDeviceEvent:W.k,VRDisplayEvent:W.k,VRSessionEvent:W.k,MojoInterfaceRequestEvent:W.k,ResourceProgressEvent:W.k,USBConnectionEvent:W.k,IDBVersionChangeEvent:W.k,AudioProcessingEvent:W.k,OfflineAudioCompletionEvent:W.k,WebGLContextEvent:W.k,Event:W.k,InputEvent:W.k,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.aq,FileList:W.c2,FileWriter:W.fE,HTMLFormElement:W.fI,Gamepad:W.ay,History:W.fQ,HTMLCollection:W.c4,HTMLFormControlsCollection:W.c4,HTMLOptionsCollection:W.c4,ImageData:W.aU,HTMLImageElement:W.c5,KeyboardEvent:W.by,Location:W.h7,MediaList:W.ht,MessagePort:W.cd,MIDIInputMap:W.hu,MIDIOutputMap:W.hw,MimeType:W.aB,MimeTypeArray:W.hy,PointerEvent:W.aC,MouseEvent:W.aC,DragEvent:W.aC,Document:W.D,DocumentFragment:W.D,HTMLDocument:W.D,ShadowRoot:W.D,XMLDocument:W.D,Attr:W.D,DocumentType:W.D,Node:W.D,NodeList:W.dq,RadioNodeList:W.dq,Plugin:W.aD,PluginArray:W.hN,RTCStatsReport:W.hY,HTMLSelectElement:W.i0,SourceBuffer:W.aF,SourceBufferList:W.ib,SpeechGrammar:W.aG,SpeechGrammarList:W.ic,SpeechRecognitionResult:W.aH,Storage:W.ih,CSSStyleSheet:W.ar,StyleSheet:W.ar,HTMLTableElement:W.dF,HTMLTableRowElement:W.il,HTMLTableSectionElement:W.im,HTMLTemplateElement:W.co,TextTrack:W.aI,TextTrackCue:W.as,VTTCue:W.as,TextTrackCueList:W.iq,TextTrackList:W.ir,TimeRanges:W.iz,Touch:W.aJ,TouchEvent:W.bE,TouchList:W.iD,TrackDefaultList:W.iE,CompositionEvent:W.bl,FocusEvent:W.bl,TextEvent:W.bl,UIEvent:W.bl,URL:W.iY,VideoTrackList:W.ja,WheelEvent:W.bo,Window:W.cy,DOMWindow:W.cy,CSSRuleList:W.ji,ClientRect:W.e_,DOMRect:W.e_,GamepadList:W.jn,NamedNodeMap:W.ei,MozNamedAttrMap:W.ei,SpeechRecognitionResultList:W.jB,StyleSheetList:W.jG,SVGLength:P.aV,SVGLengthList:P.h1,SVGNumber:P.aZ,SVGNumberList:P.hI,SVGPointList:P.hQ,SVGScriptElement:P.cl,SVGStringList:P.ik,SVGAElement:P.l,SVGAnimateElement:P.l,SVGAnimateMotionElement:P.l,SVGAnimateTransformElement:P.l,SVGAnimationElement:P.l,SVGCircleElement:P.l,SVGClipPathElement:P.l,SVGDefsElement:P.l,SVGDescElement:P.l,SVGDiscardElement:P.l,SVGEllipseElement:P.l,SVGFEBlendElement:P.l,SVGFEColorMatrixElement:P.l,SVGFEComponentTransferElement:P.l,SVGFECompositeElement:P.l,SVGFEConvolveMatrixElement:P.l,SVGFEDiffuseLightingElement:P.l,SVGFEDisplacementMapElement:P.l,SVGFEDistantLightElement:P.l,SVGFEFloodElement:P.l,SVGFEFuncAElement:P.l,SVGFEFuncBElement:P.l,SVGFEFuncGElement:P.l,SVGFEFuncRElement:P.l,SVGFEGaussianBlurElement:P.l,SVGFEImageElement:P.l,SVGFEMergeElement:P.l,SVGFEMergeNodeElement:P.l,SVGFEMorphologyElement:P.l,SVGFEOffsetElement:P.l,SVGFEPointLightElement:P.l,SVGFESpecularLightingElement:P.l,SVGFESpotLightElement:P.l,SVGFETileElement:P.l,SVGFETurbulenceElement:P.l,SVGFilterElement:P.l,SVGForeignObjectElement:P.l,SVGGElement:P.l,SVGGeometryElement:P.l,SVGGraphicsElement:P.l,SVGImageElement:P.l,SVGLineElement:P.l,SVGLinearGradientElement:P.l,SVGMarkerElement:P.l,SVGMaskElement:P.l,SVGMetadataElement:P.l,SVGPathElement:P.l,SVGPatternElement:P.l,SVGPolygonElement:P.l,SVGPolylineElement:P.l,SVGRadialGradientElement:P.l,SVGRectElement:P.l,SVGSetElement:P.l,SVGStopElement:P.l,SVGStyleElement:P.l,SVGSVGElement:P.l,SVGSwitchElement:P.l,SVGSymbolElement:P.l,SVGTSpanElement:P.l,SVGTextContentElement:P.l,SVGTextElement:P.l,SVGTextPathElement:P.l,SVGTextPositioningElement:P.l,SVGTitleElement:P.l,SVGUseElement:P.l,SVGViewElement:P.l,SVGGradientElement:P.l,SVGComponentTransferFunctionElement:P.l,SVGFEDropShadowElement:P.l,SVGMPathElement:P.l,SVGElement:P.l,SVGTransform:P.b2,SVGTransformList:P.iF,AudioBuffer:P.f1,AudioParamMap:P.f2,AudioTrackList:P.f4,AudioContext:P.br,webkitAudioContext:P.br,BaseAudioContext:P.br,OfflineAudioContext:P.hJ,WebGL2RenderingContext:P.dx,SQLResultSetRowList:P.ie})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.dm.$nativeSuperclassTag="ArrayBufferView"
H.cB.$nativeSuperclassTag="ArrayBufferView"
H.cC.$nativeSuperclassTag="ArrayBufferView"
H.cg.$nativeSuperclassTag="ArrayBufferView"
H.cD.$nativeSuperclassTag="ArrayBufferView"
H.cE.$nativeSuperclassTag="ArrayBufferView"
H.dn.$nativeSuperclassTag="ArrayBufferView"
W.cF.$nativeSuperclassTag="EventTarget"
W.cG.$nativeSuperclassTag="EventTarget"
W.cH.$nativeSuperclassTag="EventTarget"
W.cI.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(U.mf,[])
else U.mf([])})})()
//# sourceMappingURL=test.dart.js.map
