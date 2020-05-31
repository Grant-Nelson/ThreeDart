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
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.l0"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.l0"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.l0(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={kH:function kH(){},
k8:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
nj:function(a,b,c,d){if(!!J.O(a).$ir)return new H.fm(a,b,[c,d])
return new H.c6(a,b,[c,d])},
fJ:function(){return new P.ci("No element")},
n8:function(){return new P.ci("Too many elements")},
nH:function(a,b){var u=J.ag(a)
if(typeof u!=="number")return u.N()
H.dt(a,0,u-1,b)},
dt:function(a,b,c,d){if(c-b<=32)H.nG(a,b,c,d)
else H.nF(a,b,c,d)},
nG:function(a,b,c,d){var u,t,s,r,q,p
for(u=b+1,t=J.aq(a);u<=c;++u){s=t.h(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.h(a,r-1),s)
if(typeof q!=="number")return q.a1()
q=q>0}else q=!1
if(!q)break
p=r-1
t.l(a,r,t.h(a,p))
r=p}t.l(a,r,s)}},
nF:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j=C.c.a4(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.a4(a4+a5,2),f=g-j,e=g+j,d=J.aq(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
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
if(J.D(a6.$2(b,a0),0)){for(r=t;r<=s;++r){q=d.h(a3,r)
p=a6.$2(q,b)
if(p===0)continue
if(typeof p!=="number")return p.S()
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
if(typeof l!=="number")return l.S()
if(l<0){if(r!==t){d.l(a3,r,d.h(a3,t))
d.l(a3,t,q)}++t}else{k=a6.$2(q,a0)
if(typeof k!=="number")return k.a1()
if(k>0)for(;!0;){p=a6.$2(d.h(a3,s),a0)
if(typeof p!=="number")return p.a1()
if(p>0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.S()
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
H.dt(a3,a4,t-2,a6)
H.dt(a3,s+2,a5,a6)
if(m)return
if(t<i&&s>h){for(;J.D(a6.$2(d.h(a3,t),b),0);)++t
for(;J.D(a6.$2(d.h(a3,s),a0),0);)--s
for(r=t;r<=s;++r){q=d.h(a3,r)
if(a6.$2(q,b)===0){if(r!==t){d.l(a3,r,d.h(a3,t))
d.l(a3,t,q)}++t}else if(a6.$2(q,a0)===0)for(;!0;)if(a6.$2(d.h(a3,s),a0)===0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.S()
o=s-1
if(p<0){d.l(a3,r,d.h(a3,t))
n=t+1
d.l(a3,t,d.h(a3,s))
d.l(a3,s,q)
t=n}else{d.l(a3,r,d.h(a3,s))
d.l(a3,s,q)}s=o
break}}H.dt(a3,t,s,a6)}else H.dt(a3,t,s,a6)},
n:function n(a){this.a=a},
r:function r(){},
db:function db(){},
b9:function b9(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c6:function c6(a,b,c){this.a=a
this.b=b
this.$ti=c},
fm:function fm(a,b,c){this.a=a
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
j7:function j7(a,b){this.a=a
this.b=b},
d2:function d2(){},
iH:function iH(){},
dJ:function dJ(){},
n0:function(){throw H.c(P.y("Cannot modify unmodifiable Map"))},
cK:function(a){var u,t=H.pk(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
p3:function(a){return v.types[a]},
mk:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.O(a).$iB},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a4(a)
if(typeof u!=="string")throw H.c(H.ae(a))
return u},
cf:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
nx:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.d(p,3)
u=p[3]
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.X(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.a.F(s,q)|32)>t)return}return parseInt(a,b)},
cg:function(a){return H.no(a)+H.m7(H.cJ(a),0,null)},
no:function(a){var u,t,s,r,q,p,o,n=J.O(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.V||!!n.$ibG){r=C.u(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cK(t.length>1&&C.a.F(t,0)===36?C.a.a6(t,1):t)},
np:function(){if(!!self.location)return self.location.href
return},
lB:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
ny:function(a){var u,t,s,r=H.b([],[P.w])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.m)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ae(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.aN(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.c(H.ae(s))}return H.lB(r)},
lC:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ae(s))
if(s<0)throw H.c(H.ae(s))
if(s>65535)return H.ny(a)}return H.lB(a)},
nz:function(a,b,c){var u,t,s,r
if(typeof c!=="number")return c.iq()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
if(s<c)r=s
else r=c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
bB:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.aN(u,10))>>>0,56320|u&1023)}}throw H.c(P.X(a,0,1114111,null,null))},
bA:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nw:function(a){var u=H.bA(a).getFullYear()+0
return u},
nu:function(a){var u=H.bA(a).getMonth()+1
return u},
nq:function(a){var u=H.bA(a).getDate()+0
return u},
nr:function(a){var u=H.bA(a).getHours()+0
return u},
nt:function(a){var u=H.bA(a).getMinutes()+0
return u},
nv:function(a){var u=H.bA(a).getSeconds()+0
return u},
ns:function(a){var u=H.bA(a).getMilliseconds()+0
return u},
v:function(a){throw H.c(H.ae(a))},
d:function(a,b){if(a==null)J.ag(a)
throw H.c(H.bP(a,b))},
bP:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aj(!0,b,s,null)
u=J.ag(a)
if(!(b<0)){if(typeof u!=="number")return H.v(u)
t=b>=u}else t=!0
if(t)return P.L(b,a,s,null,u)
return P.dn(b,s)},
oY:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bC(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bC(a,c,!0,b,"end",u)
return new P.aj(!0,b,"end",null)},
ae:function(a){return new P.aj(!0,a,null,null)},
oT:function(a){if(typeof a!=="number")throw H.c(H.ae(a))
return a},
c:function(a){var u
if(a==null)a=new P.dk()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.mq})
u.name=""}else u.toString=H.mq
return u},
mq:function(){return J.a4(this.dartException)},
q:function(a){throw H.c(a)},
m:function(a){throw H.c(P.aM(a))},
aG:function(a){var u,t,s,r,q,p
a=H.mo(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iu(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iv:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
lM:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lx:function(a,b){return new H.hx(a,b==null?null:b.method)},
kI:function(a,b){var u=b==null,t=u?null:b.method
return new H.fO(a,t,u?null:b.receiver)},
af:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.ks(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.aN(t,16)&8191)===10)switch(s){case 438:return f.$1(H.kI(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.lx(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.mu()
q=$.mv()
p=$.mw()
o=$.mx()
n=$.mA()
m=$.mB()
l=$.mz()
$.my()
k=$.mD()
j=$.mC()
i=r.ad(u)
if(i!=null)return f.$1(H.kI(u,i))
else{i=q.ad(u)
if(i!=null){i.method="call"
return f.$1(H.kI(u,i))}else{i=p.ad(u)
if(i==null){i=o.ad(u)
if(i==null){i=n.ad(u)
if(i==null){i=m.ad(u)
if(i==null){i=l.ad(u)
if(i==null){i=o.ad(u)
if(i==null){i=k.ad(u)
if(i==null){i=j.ad(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.lx(u,i))}}return f.$1(new H.iG(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dv()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aj(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dv()
return a},
l3:function(a){var u
if(a==null)return new H.en(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.en(a)},
p1:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.l(0,a[u],a[t])}return b},
p9:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.u("Unsupported number of arguments for wrapped closure"))},
bO:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.p9)
a.$identity=u
return u},
n_:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.i5().constructor.prototype):Object.create(new H.bU(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ar
if(typeof t!=="number")return t.B()
$.ar=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.lk(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.mW(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.lk(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
mW:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.p3,a)
if(typeof a=="function")if(b)return a
else{u=c?H.lj:H.kx
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.c("Error in functionType of tearoff")},
mX:function(a,b,c,d){var u=H.kx
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lk:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mZ(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mX(t,!r,u,b)
if(t===0){r=$.ar
if(typeof r!=="number")return r.B()
$.ar=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bV
return new Function(r+H.e(q==null?$.bV=H.f1("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ar
if(typeof r!=="number")return r.B()
$.ar=r+1
o+=r
r="return function("+o+"){return this."
q=$.bV
return new Function(r+H.e(q==null?$.bV=H.f1("self"):q)+"."+H.e(u)+"("+o+");}")()},
mY:function(a,b,c,d){var u=H.kx,t=H.lj
switch(b?-1:a){case 0:throw H.c(H.nD("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
mZ:function(a,b){var u,t,s,r,q,p,o,n=$.bV
if(n==null)n=$.bV=H.f1("self")
u=$.li
if(u==null)u=$.li=H.f1("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.mY(s,!q,t,b)
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
l0:function(a,b,c,d,e,f,g){return H.n_(a,b,c,d,!!e,!!f,g)},
kx:function(a){return a.a},
lj:function(a){return a.c},
f1:function(a){var u,t,s,r=new H.bU("self","target","receiver","name"),q=J.kF(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
pe:function(a,b){throw H.c(H.mV(a,H.cK(b.substring(2))))},
l:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.O(a)[b]
else u=!0
if(u)return a
H.pe(a,b)},
p_:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
mV:function(a,b){return new H.f2("CastError: "+P.kD(a)+": type '"+H.e(H.oP(a))+"' is not a subtype of type '"+b+"'")},
oP:function(a){var u,t=J.O(a)
if(!!t.$ibW){u=H.p_(t)
if(u!=null)return H.pf(u)
return"Closure"}return H.cg(a)},
pj:function(a){throw H.c(new P.fe(a))},
nD:function(a){return new H.hQ(a)},
mi:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
cJ:function(a){if(a==null)return
return a.$ti},
pU:function(a,b,c){return H.kq(a["$a"+H.e(c)],H.cJ(b))},
p2:function(a,b,c,d){var u=H.kq(a["$a"+H.e(c)],H.cJ(b))
return u==null?null:u[d]},
l2:function(a,b,c){var u=H.kq(a["$a"+H.e(b)],H.cJ(a))
return u==null?null:u[c]},
aJ:function(a,b){var u=H.cJ(a)
return u==null?null:u[b]},
pf:function(a){return H.bk(a,null)},
bk:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cK(a[0].name)+H.m7(a,1,b)
if(typeof a=="function")return H.cK(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.e(b[t])}if('func' in a)return H.ok(a,b)
if('futureOr' in a)return"FutureOr<"+H.bk("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
ok:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
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
for(n=H.p0(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.bk(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
m7:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.R("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bk(p,c)}return"<"+u.i(0)+">"},
kq:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
pS:function(a,b,c){return a.apply(b,H.kq(J.O(b)["$a"+H.e(c)],H.cJ(b)))},
pT:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
pb:function(a){var u,t,s,r,q=$.mj.$1(a),p=$.k6[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kc[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.mc.$2(a,q)
if(q!=null){p=$.k6[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kc[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.km(u)
$.k6[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kc[q]=u
return u}if(s==="-"){r=H.km(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.mm(a,u)
if(s==="*")throw H.c(P.iF(q))
if(v.leafTags[q]===true){r=H.km(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.mm(a,u)},
mm:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.l5(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
km:function(a){return J.l5(a,!1,null,!!a.$iB)},
pc:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.km(u)
else return J.l5(u,c,null,null)},
p7:function(){if(!0===$.l4)return
$.l4=!0
H.p8()},
p8:function(){var u,t,s,r,q,p,o,n
$.k6=Object.create(null)
$.kc=Object.create(null)
H.p6()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.mn.$1(q)
if(p!=null){o=H.pc(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
p6:function(){var u,t,s,r,q,p,o=C.K()
o=H.bN(C.L,H.bN(C.M,H.bN(C.v,H.bN(C.v,H.bN(C.N,H.bN(C.O,H.bN(C.P(C.u),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.mj=new H.k9(r)
$.mc=new H.ka(q)
$.mn=new H.kb(p)},
bN:function(a,b){return a(b)||b},
nc:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.c(P.S("Illegal RegExp pattern ("+String(p)+")",a,null))},
mp:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
oZ:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mo:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
l8:function(a,b,c){var u=H.pi(a,b,c)
return u},
pi:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.mo(b),'g'),H.oZ(c))},
f7:function f7(){},
f8:function f8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iu:function iu(a,b,c,d,e,f){var _=this
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
iG:function iG(a){this.a=a},
ks:function ks(a){this.a=a},
en:function en(a){this.a=a
this.b=null},
bW:function bW(){},
id:function id(){},
i5:function i5(){},
bU:function bU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f2:function f2(a){this.a=a},
hQ:function hQ(a){this.a=a},
I:function I(a){var _=this
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
k9:function k9(a){this.a=a},
ka:function ka(a){this.a=a},
kb:function kb(a){this.a=a},
fM:function fM(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bL:function(a){return a},
nn:function(a){return new Int8Array(a)},
aH:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bP(b,a))},
oi:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.oY(a,b,c))
return b},
cb:function cb(){},
bc:function bc(){},
df:function df(){},
cc:function cc(){},
dg:function dg(){},
hp:function hp(){},
hq:function hq(){},
hr:function hr(){},
hs:function hs(){},
ht:function ht(){},
dh:function dh(){},
cd:function cd(){},
cw:function cw(){},
cx:function cx(){},
cy:function cy(){},
cz:function cz(){},
p0:function(a){return J.lr(a?Object.keys(a):[],null)},
pk:function(a){return v.mangledGlobalNames[a]},
pd:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
l5:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
k7:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.l4==null){H.p7()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.iF("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.la()]
if(r!=null)return r
r=H.pb(a)
if(r!=null)return r
if(typeof a=="function")return C.X
u=Object.getPrototypeOf(a)
if(u==null)return C.D
if(u===Object.prototype)return C.D
if(typeof s=="function"){Object.defineProperty(s,$.la(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
n9:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.kw(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.X(a,0,4294967295,"length",null))
return J.lr(new Array(a),b)},
lr:function(a,b){return J.kF(H.b(a,[b]))},
kF:function(a){a.fixed$length=Array
return a},
na:function(a,b){return J.cN(a,b)},
O:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d6.prototype
return J.d5.prototype}if(typeof a=="string")return J.b7.prototype
if(a==null)return J.d7.prototype
if(typeof a=="boolean")return J.fL.prototype
if(a.constructor==Array)return J.b6.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b8.prototype
return a}if(a instanceof P.a2)return a
return J.k7(a)},
aq:function(a){if(typeof a=="string")return J.b7.prototype
if(a==null)return a
if(a.constructor==Array)return J.b6.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b8.prototype
return a}if(a instanceof P.a2)return a
return J.k7(a)},
eM:function(a){if(a==null)return a
if(a.constructor==Array)return J.b6.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b8.prototype
return a}if(a instanceof P.a2)return a
return J.k7(a)},
mh:function(a){if(typeof a=="number")return J.c3.prototype
if(typeof a=="string")return J.b7.prototype
if(a==null)return a
if(!(a instanceof P.a2))return J.bG.prototype
return a},
cI:function(a){if(typeof a=="string")return J.b7.prototype
if(a==null)return a
if(!(a instanceof P.a2))return J.bG.prototype
return a},
bR:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b8.prototype
return a}if(a instanceof P.a2)return a
return J.k7(a)},
D:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.O(a).p(a,b)},
lc:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mh(a).w(a,b)},
bT:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mk(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aq(a).h(a,b)},
ku:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.mk(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.eM(a).l(a,b,c)},
mM:function(a,b){return J.cI(a).F(a,b)},
mN:function(a,b,c){return J.bR(a).fN(a,b,c)},
mO:function(a,b,c,d){return J.bR(a).h6(a,b,c,d)},
mP:function(a,b){return J.cI(a).W(a,b)},
cN:function(a,b){return J.mh(a).aP(a,b)},
kv:function(a,b){return J.aq(a).D(a,b)},
eP:function(a,b){return J.eM(a).J(a,b)},
mQ:function(a,b,c,d){return J.bR(a).hy(a,b,c,d)},
ld:function(a,b){return J.eM(a).G(a,b)},
mR:function(a){return J.bR(a).ghd(a)},
le:function(a){return J.bR(a).gbT(a)},
cO:function(a){return J.O(a).gI(a)},
aK:function(a){return J.eM(a).gU(a)},
ag:function(a){return J.aq(a).gm(a)},
lf:function(a){return J.eM(a).i4(a)},
mS:function(a,b){return J.bR(a).i8(a,b)},
mT:function(a,b,c){return J.cI(a).q(a,b,c)},
mU:function(a){return J.cI(a).ij(a)},
a4:function(a){return J.O(a).i(a)},
a:function a(){},
fL:function fL(){},
d7:function d7(){},
d8:function d8(){},
hB:function hB(){},
bG:function bG(){},
b8:function b8(){},
b6:function b6(a){this.$ti=a},
kG:function kG(a){this.$ti=a},
ab:function ab(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c3:function c3(){},
d6:function d6(){},
d5:function d5(){},
b7:function b7(){}},P={
nT:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.oQ()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bO(new P.j9(s),1)).observe(u,{childList:true})
return new P.j8(s,u,t)}else if(self.setImmediate!=null)return P.oR()
return P.oS()},
nU:function(a){self.scheduleImmediate(H.bO(new P.ja(a),0))},
nV:function(a){self.setImmediate(H.bO(new P.jb(a),0))},
nW:function(a){P.kO(C.m,a)},
kO:function(a,b){var u=C.c.a4(a.a,1000)
return P.o2(u<0?0:u,b)},
lL:function(a,b){var u=C.c.a4(a.a,1000)
return P.o3(u<0?0:u,b)},
o2:function(a,b){var u=new P.et()
u.ep(a,b)
return u},
o3:function(a,b){var u=new P.et()
u.eq(a,b)
return u},
pP:function(a){return new P.bH(a,1)},
nZ:function(){return C.a6},
o_:function(a){return new P.bH(a,3)},
on:function(a,b){return new P.jE(a,[b])},
oJ:function(){var u,t
for(;u=$.bM,u!=null;){$.cH=null
t=u.b
$.bM=t
if(t==null)$.cG=null
u.a.$0()}},
oO:function(){$.kZ=!0
try{P.oJ()}finally{$.cH=null
$.kZ=!1
if($.bM!=null)$.lb().$1(P.md())}},
oM:function(a){var u=new P.dP(a)
if($.bM==null){$.bM=$.cG=u
if(!$.kZ)$.lb().$1(P.md())}else $.cG=$.cG.b=u},
oN:function(a){var u,t,s=$.bM
if(s==null){P.oM(a)
$.cH=$.cG
return}u=new P.dP(a)
t=$.cH
if(t==null){u.b=s
$.bM=$.cH=u}else{u.b=t.b
$.cH=t.b=u
if(u.b==null)$.cG=u}},
lK:function(a,b){var u=$.ap
if(u===C.f)return P.kO(a,b)
return P.kO(a,u.he(b))},
nK:function(a,b){var u=$.ap
if(u===C.f)return P.lL(a,b)
return P.lL(a,u.d3(b,P.dD))},
m8:function(a,b,c,d,e){var u={}
u.a=d
P.oN(new P.k_(u,e))},
oK:function(a,b,c,d){var u,t=$.ap
if(t===c)return d.$0()
$.ap=c
u=t
try{t=d.$0()
return t}finally{$.ap=u}},
oL:function(a,b,c,d,e){var u,t=$.ap
if(t===c)return d.$1(e)
$.ap=c
u=t
try{t=d.$1(e)
return t}finally{$.ap=u}},
j9:function j9(a){this.a=a},
j8:function j8(a,b,c){this.a=a
this.b=b
this.c=c},
ja:function ja(a){this.a=a},
jb:function jb(a){this.a=a},
et:function et(){this.c=0},
jI:function jI(a,b){this.a=a
this.b=b},
jH:function jH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bH:function bH(a,b){this.a=a
this.b=b},
bI:function bI(a){var _=this
_.a=a
_.d=_.c=_.b=null},
jE:function jE(a,b){this.a=a
this.$ti=b},
dP:function dP(a){this.a=a
this.b=null},
dy:function dy(){},
i8:function i8(){},
dD:function dD(){},
jR:function jR(){},
k_:function k_(a,b){this.a=a
this.b=b},
jp:function jp(){},
jq:function jq(a,b){this.a=a
this.b=b},
jr:function jr(a,b,c){this.a=a
this.b=b
this.c=c},
ne:function(a,b){return new H.I([a,b])},
kJ:function(a,b){return new H.I([a,b])},
ng:function(a){return H.p1(a,new H.I([null,null]))},
c5:function(a){return new P.jm([a])},
kU:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
o1:function(a,b){var u=new P.e4(a,b)
u.c=a.e
return u},
n7:function(a,b,c){var u,t
if(P.l_(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.h])
$.a9.push(a)
try{P.om(a,u)}finally{if(0>=$.a9.length)return H.d($.a9,-1)
$.a9.pop()}t=P.lI(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
kE:function(a,b,c){var u,t
if(P.l_(a))return b+"..."+c
u=new P.R(b)
$.a9.push(a)
try{t=u
t.a=P.lI(t.a,a,", ")}finally{if(0>=$.a9.length)return H.d($.a9,-1)
$.a9.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
l_:function(a){var u,t
for(u=$.a9.length,t=0;t<u;++t)if(a===$.a9[t])return!0
return!1},
om:function(a,b){var u,t,s,r,q,p,o,n=a.gU(a),m=0,l=0
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
nf:function(a,b,c){var u=P.ne(b,c)
a.G(0,new P.fV(u))
return u},
ls:function(a,b){var u,t,s=P.c5(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.m)(a),++t)s.n(0,a[t])
return s},
kL:function(a){var u,t={}
if(P.l_(a))return"{...}"
u=new P.R("")
try{$.a9.push(a)
u.a+="{"
t.a=!0
J.ld(a,new P.h_(t,u))
u.a+="}"}finally{if(0>=$.a9.length)return H.d($.a9,-1)
$.a9.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jm:function jm(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jn:function jn(a){this.a=a
this.c=this.b=null},
e4:function e4(a,b){var _=this
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
jJ:function jJ(){},
h0:function h0(){},
dK:function dK(a,b){this.a=a
this.$ti=b},
jt:function jt(){},
e5:function e5(){},
ez:function ez(){},
nN:function(a,b,c,d){if(b instanceof Uint8Array)return P.nO(!1,b,c,d)
return},
nO:function(a,b,c,d){var u,t,s=$.mE()
if(s==null)return
u=0===c
if(u&&!0)return P.kR(s,b)
t=b.length
d=P.aU(c,d,t)
if(u&&d===t)return P.kR(s,b)
return P.kR(s,b.subarray(c,d))},
kR:function(a,b){if(P.nQ(b))return
return P.nR(a,b)},
nR:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.af(t)}return},
nQ:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
nP:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.af(t)}return},
ma:function(a,b,c){var u,t,s
if(typeof c!=="number")return H.v(c)
u=J.aq(a)
t=b
for(;t<c;++t){s=u.h(a,t)
if(typeof s!=="number")return s.a7()
if((s&127)!==s)return t-b}return c-b},
lh:function(a,b,c,d,e,f){if(C.c.b9(f,4)!==0)throw H.c(P.S("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.S("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.S("Invalid base64 padding, more than two '=' characters",a,b))},
eZ:function eZ(){},
f_:function f_(){},
f4:function f4(){},
f9:function f9(){},
fo:function fo(){},
fG:function fG(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
fF:function fF(a){this.a=a},
iP:function iP(){},
iR:function iR(){},
jP:function jP(a){this.b=0
this.c=a},
iQ:function iQ(a){this.a=a},
jO:function jO(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
eN:function(a,b,c){var u=H.nx(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.S(a,null,null))},
n4:function(a){if(a instanceof H.bW)return a.i(0)
return"Instance of '"+H.e(H.cg(a))+"'"},
nh:function(a,b,c){var u,t,s=J.n9(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
kK:function(a,b,c){var u,t=H.b([],[c])
for(u=J.aK(a);u.t();)t.push(u.gC(u))
if(b)return t
return J.kF(t)},
cj:function(a,b,c){var u,t
if(typeof a==="object"&&a!==null&&a.constructor===Array){u=a.length
c=P.aU(b,c,u)
if(b<=0){if(typeof c!=="number")return c.S()
t=c<u}else t=!0
return H.lC(t?C.b.e8(a,b,c):a)}if(!!J.O(a).$icd)return H.nz(a,b,P.aU(b,c,a.length))
return P.nI(a,b,c)},
nI:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.c(P.X(b,0,J.ag(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.X(c,b,J.ag(a),q,q))
t=J.aK(a)
for(s=0;s<b;++s)if(!t.t())throw H.c(P.X(b,0,s,q,q))
r=[]
if(u)for(;t.t();)r.push(t.gC(t))
else for(s=b;s<c;++s){if(!t.t())throw H.c(P.X(c,b,s,q,q))
r.push(t.gC(t))}return H.lC(r)},
nB:function(a){return new H.fM(a,H.nc(a,!1,!0,!1,!1,!1))},
lI:function(a,b,c){var u=J.aK(b)
if(!u.t())return a
if(c.length===0){do a+=H.e(u.gC(u))
while(u.t())}else{a+=H.e(u.gC(u))
for(;u.t();)a=a+c+H.e(u.gC(u))}return a},
lO:function(){var u=H.np()
if(u!=null)return P.nM(u)
throw H.c(P.y("'Uri.base' is not supported"))},
eA:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.e){u=$.mK().b
if(typeof b!=="string")H.q(H.ae(b))
u=u.test(b)}else u=!1
if(u)return b
t=c.ghx().bV(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.d(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.bB(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
n1:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
n2:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cY:function(a){if(a>=10)return""+a
return"0"+a},
ln:function(a){return new P.b4(1000*a)},
kD:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a4(a)
if(typeof a==="string")return JSON.stringify(a)
return P.n4(a)},
cP:function(a){return new P.aj(!1,null,null,a)},
kw:function(a,b,c){return new P.aj(!0,a,b,c)},
dn:function(a,b){return new P.bC(null,null,!0,a,b,"Value not in range")},
X:function(a,b,c,d,e){return new P.bC(b,c,!0,a,d,"Invalid value")},
aU:function(a,b,c){var u
if(typeof a!=="number")return H.v(a)
if(0<=a){if(typeof c!=="number")return H.v(c)
u=a>c}else u=!0
if(u)throw H.c(P.X(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.v(c)
u=b>c}else u=!0
if(u)throw H.c(P.X(b,a,c,"end",null))
return b}return c},
lD:function(a,b){if(typeof a!=="number")return a.S()
if(a<0)throw H.c(P.X(a,0,null,b,null))},
L:function(a,b,c,d,e){var u=e==null?J.ag(b):e
return new P.fH(u,!0,a,c,"Index out of range")},
y:function(a){return new P.iI(a)},
iF:function(a){return new P.iE(a)},
lH:function(a){return new P.ci(a)},
aM:function(a){return new P.f6(a)},
u:function(a){return new P.dY(a)},
S:function(a,b,c){return new P.fz(a,b,c)},
ni:function(a,b,c){var u,t,s=H.b([],[c])
C.b.sm(s,a)
for(u=0;u<a;++u){t=b.$1(u)
if(u>=s.length)return H.d(s,u)
s[u]=t}return s},
l7:function(a){H.pd(a)},
nM:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.a.F(a,4)^58)*3|C.a.F(a,0)^100|C.a.F(a,1)^97|C.a.F(a,2)^116|C.a.F(a,3)^97)>>>0
if(u===0)return P.lN(e<e?C.a.q(a,0,e):a,5,f).gdY()
else if(u===32)return P.lN(C.a.q(a,5,e),0,f).gdY()}t=new Array(8)
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
if(P.m9(a,0,e,0,s)>=14)s[7]=e
r=s[1]
if(typeof r!=="number")return r.ip()
if(r>=0)if(P.m9(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.B()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.S()
if(typeof n!=="number")return H.v(n)
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
a=C.a.aT(a,o,n,"/");++e
n=h}k="file"}else if(C.a.a5(a,"http",0)){if(t&&p+3===o&&C.a.a5(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.a.aT(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.a.a5(a,"https",0)){if(t&&p+4===o&&C.a.a5(a,"443",p+1)){g=o-4
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
m-=0}return new P.jw(a,r,q,p,o,n,m,k)}return P.o4(a,0,e,r,q,p,o,n,m,k)},
lQ:function(a){var u=P.h
return C.b.hD(H.b(a.split("&"),[u]),P.kJ(u,u),new P.iN(C.e))},
nL:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.iK(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.a.W(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.eN(C.a.q(a,s,t),n,n)
if(typeof p!=="number")return p.a1()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.d(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.eN(C.a.q(a,s,c),n,n)
if(typeof p!=="number")return p.a1()
if(p>255)k.$2(l,s)
if(r>=u)return H.d(j,r)
j[r]=p
return j},
lP:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.iL(a),d=new P.iM(e,a)
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
n=C.b.gas(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)u.push(d.$2(s,c))
else{m=P.nL(a,s,c)
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
o4:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.oc(a,b,d)
else{if(d===b)P.bK(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.od(a,u,e-1):""
s=P.o9(a,e,f,!1)
if(typeof f!=="number")return f.B()
r=f+1
if(typeof g!=="number")return H.v(g)
q=r<g?P.ob(P.eN(C.a.q(a,r,g),new P.jK(a,f),n),j):n}else{q=n
s=q
t=""}p=P.oa(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.S()
o=h<i?P.kW(a,h+1,i,n):n
return new P.bJ(j,t,s,q,p,o,i<c?P.o8(a,i+1,c):n)},
m1:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bK:function(a,b,c){throw H.c(P.S(c,a,b))},
ob:function(a,b){if(a!=null&&a===P.m1(b))return
return a},
o9:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.a.W(a,b)===91){if(typeof c!=="number")return c.N()
u=c-1
if(C.a.W(a,u)!==93)P.bK(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.o6(a,t,u)
if(typeof s!=="number")return s.S()
if(s<u){r=s+1
q=P.m6(a,C.a.a5(a,"25",r)?s+3:r,u,"%25")}else q=""
P.lP(a,t,s)
return C.a.q(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.v(c)
p=b
for(;p<c;++p)if(C.a.W(a,p)===58){s=C.a.bk(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.m6(a,C.a.a5(a,"25",r)?s+3:r,c,"%25")}else q=""
P.lP(a,b,s)
return"["+C.a.q(a,b,s)+q+"]"}return P.of(a,b,c)},
o6:function(a,b,c){var u,t=C.a.bk(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.v(c)
u=t<c}else u=!1
return u?t:c},
m6:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.R(d):null
if(typeof c!=="number")return H.v(c)
u=b
t=u
s=!0
for(;u<c;){r=C.a.W(a,u)
if(r===37){q=P.kX(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.R("")
o=l.a+=C.a.q(a,t,u)
if(p)q=C.a.q(a,u,u+3)
else if(q==="%")P.bK(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.d(C.h,p)
p=(C.h[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.R("")
if(t<u){l.a+=C.a.q(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.a.W(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.R("")
l.a+=C.a.q(a,t,u)
l.a+=P.kV(r)
u+=m
t=u}}}if(l==null)return C.a.q(a,b,c)
if(t<c)l.a+=C.a.q(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
of:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.v(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.a.W(a,u)
if(q===37){p=P.kX(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.R("")
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
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.R("")
if(t<u){s.a+=C.a.q(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.d(C.j,o)
o=(C.j[o]&1<<(q&15))!==0}else o=!1
if(o)P.bK(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.a.W(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.R("")
n=C.a.q(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.kV(q)
u+=l
t=u}}}}if(s==null)return C.a.q(a,b,c)
if(t<c){n=C.a.q(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
oc:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.m3(C.a.F(a,b)))P.bK(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.a.F(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.d(C.l,r)
r=(C.l[r]&1<<(s&15))!==0}else r=!1
if(!r)P.bK(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.a.q(a,b,c)
return P.o5(t?a.toLowerCase():a)},
o5:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
od:function(a,b,c){return P.cE(a,b,c,C.a_,!1)},
oa:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.cE(a,b,c,C.B,!0):C.w.iG(d,new P.jL(),P.h).j(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.a.a3(u,"/"))u="/"+u
return P.oe(u,e,f)},
oe:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.a.a3(a,"/"))return P.og(a,!u||c)
return P.oh(a)},
kW:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.c(P.cP("Both query and queryParameters specified"))
return P.cE(a,b,c,C.k,!0)}if(d==null)return
u=new P.R("")
t.a=""
d.G(0,new P.jM(new P.jN(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
o8:function(a,b,c){return P.cE(a,b,c,C.k,!0)},
kX:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.a.W(a,b+1)
t=C.a.W(a,p)
s=H.k8(u)
r=H.k8(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.c.aN(q,4)
if(p>=8)return H.d(C.h,p)
p=(C.h[p]&1<<(q&15))!==0}else p=!1
if(p)return H.bB(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.a.q(a,b,b+3).toUpperCase()
return},
kV:function(a){var u,t,s,r,q,p,o,n,m="0123456789ABCDEF"
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
for(u=t.length,q=0;--r,r>=0;s=128){p=C.c.fZ(a,6*r)&63|s
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
q+=3}}return P.cj(t,0,null)},
cE:function(a,b,c,d,e){var u=P.m5(a,b,c,d,e)
return u==null?C.a.q(a,b,c):u},
m5:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.S()
if(typeof c!=="number")return H.v(c)
if(!(o<c))break
c$0:{u=C.a.W(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.d(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.kX(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.d(C.j,t)
t=(C.j[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.bK(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.a.W(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.kV(u)}}if(m==null)m=new P.R("")
m.a+=C.a.q(a,n,o)
m.a+=H.e(s)
if(typeof r!=="number")return H.v(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.S()
if(n<c)m.a+=C.a.q(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
m4:function(a){if(C.a.a3(a,"."))return!0
return C.a.du(a,"/.")!==-1},
oh:function(a){var u,t,s,r,q,p,o
if(!P.m4(a))return a
u=H.b([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.D(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.d(u,-1)
u.pop()
if(u.length===0)u.push("")}r=!0}else if("."===p)r=!0
else{u.push(p)
r=!1}}if(r)u.push("")
return C.b.j(u,"/")},
og:function(a,b){var u,t,s,r,q,p
if(!P.m4(a))return!b?P.m2(a):a
u=H.b([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.b.gas(u)!==".."){if(0>=u.length)return H.d(u,-1)
u.pop()
r=!0}else{u.push("..")
r=!1}else if("."===p)r=!0
else{u.push(p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.d(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.b.gas(u)==="..")u.push("")
if(!b){if(0>=u.length)return H.d(u,0)
t=P.m2(u[0])
if(0>=u.length)return H.d(u,0)
u[0]=t}return C.b.j(u,"/")},
m2:function(a){var u,t,s,r=a.length
if(r>=2&&P.m3(J.mM(a,0)))for(u=1;u<r;++u){t=C.a.F(a,u)
if(t===58)return C.a.q(a,0,u)+"%3A"+C.a.a6(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.d(C.l,s)
s=(C.l[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
o7:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.a.F(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.cP("Invalid URL encoding"))}}return u},
kY:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.a.F(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.e!==d)s=!1
else s=!0
if(s)return C.a.q(a,b,c)
else r=new H.n(C.a.q(a,b,c))}else{r=H.b([],[P.w])
for(s=a.length,q=b;q<c;++q){t=C.a.F(a,q)
if(t>127)throw H.c(P.cP("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.cP("Truncated URI"))
r.push(P.o7(a,q+1))
q+=2}else if(t===43)r.push(32)
else r.push(t)}}return new P.iQ(!1).bV(r)},
m3:function(a){var u=a|32
return 97<=u&&u<=122},
lN:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.b([b-1],[P.w])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.a.F(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.S(m,a,t))}}if(s<0&&t>b)throw H.c(P.S(m,a,t))
for(;r!==44;){l.push(t);++t
for(q=-1;t<u;++t){r=C.a.F(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)l.push(q)
else{p=C.b.gas(l)
if(r!==44||t!==p+7||!C.a.a5(a,"base64",p+1))throw H.c(P.S("Expecting '='",a,t))
break}}l.push(t)
o=t+1
if((l.length&1)===1)a=C.J.hO(0,a,o,u)
else{n=P.m5(a,o,u,C.k,!0)
if(n!=null)a=C.a.aT(a,o,u,n)}return new P.iJ(a,l,c)},
oj:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.ni(22,new P.jV(),P.bE),n=new P.jU(o),m=new P.jW(),l=new P.jX(),k=n.$2(0,225)
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
m9:function(a,b,c,d,e){var u,t,s,r,q,p=$.mL()
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
aI:function aI(){},
ac:function ac(a,b){this.a=a
this.b=b},
J:function J(){},
b4:function b4(a){this.a=a},
fk:function fk(){},
fl:function fl(){},
bs:function bs(){},
dk:function dk(){},
aj:function aj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bC:function bC(a,b,c,d,e,f){var _=this
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
iI:function iI(a){this.a=a},
iE:function iE(a){this.a=a},
ci:function ci(a){this.a=a},
f6:function f6(a){this.a=a},
hA:function hA(){},
dv:function dv(){},
fe:function fe(a){this.a=a},
dY:function dY(a){this.a=a},
fz:function fz(a,b,c){this.a=a
this.b=b
this.c=c},
fB:function fB(){},
w:function w(){},
j:function j(){},
fK:function fK(){},
o:function o(){},
Q:function Q(){},
bd:function bd(){},
aa:function aa(){},
a2:function a2(){},
h:function h(){},
R:function R(a){this.a=a},
iN:function iN(a){this.a=a},
iK:function iK(a){this.a=a},
iL:function iL(a){this.a=a},
iM:function iM(a,b){this.a=a
this.b=b},
bJ:function bJ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
jK:function jK(a,b){this.a=a
this.b=b},
jL:function jL(){},
jN:function jN(a,b){this.a=a
this.b=b},
jM:function jM(a){this.a=a},
iJ:function iJ(a,b,c){this.a=a
this.b=b
this.c=c},
jV:function jV(){},
jU:function jU(a){this.a=a},
jW:function jW(){},
jX:function jX(){},
jw:function jw(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jf:function jf(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
oW:function(a){var u,t=J.O(a)
if(!!t.$iaP){u=t.gd7(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.ey(a.data,a.height,a.width)},
oV:function(a){if(a instanceof P.ey)return{data:a.a,height:a.b,width:a.c}
return a},
aX:function(a){var u,t,s,r,q
if(a==null)return
u=P.kJ(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){q=t[r]
u.l(0,q,a[q])}return u},
oU:function(a){var u={}
a.G(0,new P.k0(u))
return u},
jy:function jy(){},
jA:function jA(a,b){this.a=a
this.b=b},
jB:function jB(a,b){this.a=a
this.b=b},
ey:function ey(a,b,c){this.a=a
this.b=b
this.c=c},
k0:function k0(a){this.a=a},
jz:function jz(a,b){this.a=a
this.b=b},
fv:function fv(a,b){this.a=a
this.b=b},
fw:function fw(){},
fx:function fx(){},
jl:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
o0:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jo:function jo(){},
a8:function a8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aQ:function aQ(){},
fQ:function fQ(){},
aT:function aT(){},
hy:function hy(){},
hG:function hG(){},
ch:function ch(){},
i9:function i9(){},
k:function k(){},
aV:function aV(){},
it:function it(){},
e2:function e2(){},
e3:function e3(){},
ed:function ed(){},
ee:function ee(){},
ep:function ep(){},
eq:function eq(){},
ew:function ew(){},
ex:function ex(){},
bE:function bE(){},
eU:function eU(){},
eV:function eV(){},
eW:function eW(a){this.a=a},
eX:function eX(){},
bm:function bm(){},
hz:function hz(){},
dQ:function dQ(){},
dq:function dq(){},
i4:function i4(){},
el:function el(){},
em:function em(){}},W={
lg:function(){var u=document.createElement("a")
return u},
kz:function(){var u=document.createElement("canvas")
return u},
n3:function(a,b,c){var u=document.body,t=(u&&C.q).ac(u,a,b,c)
t.toString
u=new H.cs(new W.a3(t),new W.fn(),[W.E])
return u.gaI(u)},
kB:function(a){return"wheel"},
bY:function(a){var u,t,s,r="element tag unavailable"
try{u=J.bR(a)
t=u.gdU(a)
if(typeof t==="string")r=u.gdU(a)}catch(s){H.af(s)}return r},
n6:function(a){var u,t=document.createElement("input"),s=t
try{s.type=a}catch(u){H.af(u)}return s},
jk:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
m_:function(a,b,c,d){var u=W.jk(W.jk(W.jk(W.jk(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
Y:function(a,b,c,d){var u=W.mb(new W.ji(c),W.i)
if(u!=null&&!0)J.mO(a,b,u,!1)
return new W.jh(a,b,u,!1)},
lZ:function(a){var u=W.lg(),t=window.location
u=new W.cu(new W.js(u,t))
u.el(a)
return u},
nX:function(a,b,c,d){return!0},
nY:function(a,b,c,d){var u,t=d.a,s=t.a
s.href=c
u=s.hostname
t=t.b
if(!(u==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(u==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
m0:function(){var u=P.h,t=P.ls(C.n,u),s=H.b(["TEMPLATE"],[u])
t=new W.jF(t,P.c5(u),P.c5(u),P.c5(u),null)
t.eo(null,new H.h2(C.n,new W.jG(),[H.aJ(C.n,0),u]),s,null)
return t},
mb:function(a,b){var u=$.ap
if(u===C.f)return a
return u.d3(a,b)},
p:function p(){},
eQ:function eQ(){},
eR:function eR(){},
eS:function eS(){},
bn:function bn(){},
bo:function bo(){},
bq:function bq(){},
b2:function b2(){},
fa:function fa(){},
H:function H(){},
bX:function bX(){},
fb:function fb(){},
ah:function ah(){},
at:function at(){},
fc:function fc(){},
fd:function fd(){},
fg:function fg(){},
ak:function ak(){},
fh:function fh(){},
d_:function d_(){},
d0:function d0(){},
fi:function fi(){},
fj:function fj(){},
jd:function jd(a,b){this.a=a
this.b=b},
P:function P(){},
fn:function fn(){},
i:function i(){},
f:function f(){},
al:function al(){},
c_:function c_(){},
fu:function fu(){},
fy:function fy(){},
au:function au(){},
fE:function fE(){},
c1:function c1(){},
aP:function aP(){},
c2:function c2(){},
bx:function bx(){},
fX:function fX(){},
hi:function hi(){},
ca:function ca(){},
hj:function hj(){},
hk:function hk(a){this.a=a},
hl:function hl(){},
hm:function hm(a){this.a=a},
ax:function ax(){},
hn:function hn(){},
ay:function ay(){},
a3:function a3(a){this.a=a},
E:function E(){},
di:function di(){},
az:function az(){},
hD:function hD(){},
hO:function hO(){},
hP:function hP(a){this.a=a},
hR:function hR(){},
aB:function aB(){},
i1:function i1(){},
aC:function aC(){},
i2:function i2(){},
aD:function aD(){},
i6:function i6(){},
i7:function i7(a){this.a=a},
an:function an(){},
dz:function dz(){},
ia:function ia(){},
ib:function ib(){},
ck:function ck(){},
aE:function aE(){},
ao:function ao(){},
ie:function ie(){},
ig:function ig(){},
im:function im(){},
aF:function aF(){},
bD:function bD(){},
ir:function ir(){},
is:function is(){},
bg:function bg(){},
iO:function iO(){},
j5:function j5(){},
bj:function bj(){},
ct:function ct(){},
je:function je(){},
dS:function dS(){},
jj:function jj(){},
ea:function ea(){},
jx:function jx(){},
jC:function jC(){},
jc:function jc(){},
jg:function jg(a){this.a=a},
jh:function jh(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
ji:function ji(a){this.a=a},
cu:function cu(a){this.a=a},
K:function K(){},
dj:function dj(a){this.a=a},
hv:function hv(a){this.a=a},
hu:function hu(a,b,c){this.a=a
this.b=b
this.c=c},
ei:function ei(){},
ju:function ju(){},
jv:function jv(){},
jF:function jF(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jG:function jG(){},
jD:function jD(){},
d3:function d3(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
aS:function aS(){},
js:function js(a,b){this.a=a
this.b=b},
eB:function eB(a){this.a=a},
jQ:function jQ(a){this.a=a},
dR:function dR(){},
dT:function dT(){},
dU:function dU(){},
dV:function dV(){},
dW:function dW(){},
dZ:function dZ(){},
e_:function e_(){},
e0:function e0(){},
e1:function e1(){},
e6:function e6(){},
e7:function e7(){},
e8:function e8(){},
e9:function e9(){},
eb:function eb(){},
ec:function ec(){},
ef:function ef(){},
eg:function eg(){},
eh:function eh(){},
cA:function cA(){},
cB:function cB(){},
ej:function ej(){},
ek:function ek(){},
eo:function eo(){},
er:function er(){},
es:function es(){},
cC:function cC(){},
cD:function cD(){},
eu:function eu(){},
ev:function ev(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
eK:function eK(){},
eL:function eL(){}},K={
M:function(a,b){var u,t,s
if(a.length!==1||b.length!==1)throw H.c(P.u("The given low and high character strings for a Range must have one and only one characters."))
u=C.a.F(a,0)
t=C.a.F(b,0)
if(u>t){s=t
t=u
u=s}return new K.hJ(u,t)},
t:function(a){var u=new K.hS()
u.eh(a)
return u},
aL:function aL(){},
d4:function d4(){},
ba:function ba(){},
a6:function a6(){this.a=null},
hJ:function hJ(a,b){this.a=a
this.b=b},
hS:function hS(){this.a=null},
ml:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="testCanvas",c=null,b=V.nE("Test 026"),a=W.kz()
a.className="pageLargeCanvas"
a.id=d
b.a.appendChild(a)
u=[P.h]
b.cY(H.b(["Test of the Material Lighting shader with a textured directional light. ","The texturing of the directional light is being modified with a matrix. ","The texture matrix is updated using the pre-update methods. ","Use Ctrl plus the mouse to move the center object."],u))
b.h5(H.b(["shapes"],u))
b.cY(H.b(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(d)
if(t==null)H.q(P.u("Failed to find an element with the identifier, testCanvas."))
s=E.nJ(t,!0,!0,!0,!1)
r=D.lm()
r.sae(U.cX(V.lv(0.3,0.4,1,c)))
q=D.lm()
q.sae(U.cX(V.lv(-0.3,-0.4,-1,c)))
q.sab(0,new V.W(0.125,0.125,0.125))
p=new O.dd()
o=O.kA(V.aR)
p.e=o
o.ba(p.geX(),p.geZ())
o=new O.av(p,"emission")
o.c=new A.a_(!1,!1,!1)
o.f=new V.W(0,0,0)
p.f=o
o=new O.av(p,"ambient")
o.c=new A.a_(!1,!1,!1)
o.f=new V.W(0,0,0)
p.r=o
o=new O.av(p,"diffuse")
o.c=new A.a_(!1,!1,!1)
o.f=new V.W(0,0,0)
p.x=o
o=new O.av(p,"invDiffuse")
o.c=new A.a_(!1,!1,!1)
o.f=new V.W(0,0,0)
p.y=o
o=new O.h9(p,"specular")
o.c=new A.a_(!1,!1,!1)
o.f=new V.W(0,0,0)
o.ch=100
p.z=o
o=new O.h5(p,"bump")
o.c=new A.a_(!1,!1,!1)
p.Q=o
p.ch=null
o=new O.av(p,"reflect")
o.c=new A.a_(!1,!1,!1)
o.f=new V.W(0,0,0)
p.cx=o
o=new O.h8(p,"refract")
o.c=new A.a_(!1,!1,!1)
o.f=new V.W(0,0,0)
o.ch=1
p.cy=o
o=new O.h4(p,"alpha")
o.c=new A.a_(!1,!1,!1)
o.f=1
p.db=o
o=new D.da()
o.bv(D.a5)
o.e=H.b([],[D.eY])
o.f=H.b([],[D.br])
o.r=H.b([],[D.hE])
o.x=H.b([],[D.i3])
o.z=o.y=null
o.cm(o.geV(),o.gfw(),o.gfC())
p.dx=o
n=new O.h7()
n.b=new V.as(0,0,0,0)
n.c=1
n.d=10
n.e=!1
p.dy=n
n=o.y
o=n==null?o.y=D.N():n
o.n(0,p.gfP())
o=p.dx
n=o.z
o=n==null?o.z=D.N():n
o.n(0,p.gbf())
p.fr=null
p.dx.n(0,r)
p.dx.n(0,q)
p.f.sab(0,new V.W(0,0,0))
o=p.r
o.sab(0,new V.W(0.1,0.1,0.1))
o=p.x
o.sab(0,new V.W(0.8,0.8,0.8))
o=p.z
o.sab(0,new V.W(0.2,0.2,0.2))
o=p.z
o.bJ(new A.a_(!0,o.c.b,!1))
o.cP(100)
o=p.x
n=s.f.hM("../resources/Test.png",!0)
m=o.c
if(!m.b)o.bJ(new A.a_(m.a,!0,!1))
m=o.d
if(m!==n){if(m!=null)m.gA().M(0,o.gbf())
l=o.d
o.d=n
n.gA().n(0,o.gbf())
n=new D.C(o.b+".texture2D",l,o.d)
n.b=!0
o.a.X(n)}k=E.lq()
k.sae(U.lR(!0,s.x))
k.sai(0,F.mr())
j=E.lq()
j.sae(U.cX(V.aw(3,0,0,0,0,3,0,0,0,0,3,0,0,0,0,1)))
o=F.l1(1,c,c,1)
o.c5()
j.sai(0,o)
i=new U.c0()
i.bv(U.am)
i.ba(i.geT(),i.gfA())
i.e=null
i.f=V.de()
i.r=0
i.n(0,U.lR(!1,s.x))
i.n(0,U.cX(V.kM(3.141592653589793)))
i.n(0,U.cX(V.aw(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
h=U.lG(0.5,0.7,0.3)
g=U.lG(0,0.1,0)
o=new M.d1()
o.a=!0
n=O.kA(E.aO)
o.e=n
n.ba(o.gf2(),o.gf4())
o.y=o.x=o.r=o.f=null
f=X.n5(c)
e=new X.dl()
e.c=1.0471975511965976
e.d=0.1
e.e=2000
e.sae(c)
n=e.c
if(!(Math.abs(n-1.0471975511965976)<$.A().a)){e.c=1.0471975511965976
n=new D.C("fov",n,1.0471975511965976)
n.b=!0
e.aK(n)}n=e.d
if(!(Math.abs(n-0.1)<$.A().a)){e.d=0.1
n=new D.C("near",n,0.1)
n.b=!0
e.aK(n)}n=e.e
if(!(Math.abs(n-2000)<$.A().a)){e.e=2000
n=new D.C("far",n,2000)
n.b=!0
e.aK(n)}n=o.b
if(n!==e){if(n!=null)n.gA().M(0,o.gan())
l=o.b
o.b=e
e.gA().n(0,o.gan())
n=new D.C("camera",l,o.b)
n.b=!0
o.aw(n)}n=o.c
if(n!==f){if(n!=null)n.gA().M(0,o.gan())
l=o.c
o.c=f
f.gA().n(0,o.gan())
n=new D.C("target",l,o.c)
n.b=!0
o.aw(n)}o.sdV(c)
o.sdV(p)
o.e.n(0,k)
o.e.n(0,j)
o.b.sae(i)
n=o.f
if(n==null)n=o.f=D.N()
n.n(0,new K.ke(p,h,g))
n=s.d
if(n!==o){if(n!=null)n.gA().M(0,s.gcr())
s.d=o
o.gA().n(0,s.gcr())
s.cs()}o=new V.hH("shapes")
u=u.getElementById("shapes")
o.c=u
if(u==null)H.q("Failed to find shapes for RadioGroup")
o.aZ(0,"Cube",new K.kf(k))
o.aZ(0,"Cylinder",new K.kg(k))
o.aZ(0,"Cone",new K.kh(k))
o.aZ(0,"Sphere",new K.ki(k))
o.cW(0,"Toroid",new K.kj(k),!0)
o.aZ(0,"Knot",new K.kk(k))
u=s.Q
if(u==null)u=s.Q=D.N()
o=u.b
u=o==null?u.b=H.b([],[{func:1,ret:-1,args:[D.Z]}]):o
u.push(new K.kl(b,p))
V.pg(s)},
ke:function ke(a,b,c){this.a=a
this.b=b
this.c=c},
kf:function kf(a){this.a=a},
kg:function kg(a){this.a=a},
kh:function kh(a){this.a=a},
ki:function ki(a){this.a=a},
kj:function kj(a){this.a=a},
kk:function kk(a){this.a=a},
kl:function kl(a,b){this.a=a
this.b=b}},L={
ip:function(){var u=new L.io(),t=P.h
u.a=new H.I([t,L.dw])
u.b=new H.I([t,L.dF])
u.c=P.c5(t)
return u},
dw:function dw(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dE:function dE(a,b,c){this.a=a
this.b=b
this.c=c},
dF:function dF(a){this.b=a
this.c=null},
io:function io(){var _=this
_.d=_.c=_.b=_.a=null},
dH:function dH(a){this.b=a
this.a=this.c=null}},O={
kA:function(a){var u=new O.b3([a])
u.bv(a)
return u},
b3:function b3(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
c9:function c9(){this.b=this.a=null},
dd:function dd(){var _=this
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
c7:function c7(){},
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
dA:function dA(){}},E={
lq:function(){var u,t=new E.aO()
t.a=""
t.b=!0
u=O.kA(E.aO)
t.y=u
u.ba(t.ghP(),t.ghS())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sai(0,null)
t.sae(null)
return t},
lX:function(){if(J.kv(window.navigator.vendor,"Google"))return C.H
if(J.kv(window.navigator.userAgent,"Firefox"))return C.r
var u=window.navigator.appVersion
if(J.aq(u).D(u,"Trident")||C.a.D(u,"Edge"))return C.t
if(J.kv(window.navigator.appName,"Microsoft"))return C.t
return C.I},
lY:function(){var u=window.navigator.appVersion
if(J.aq(u).D(u,"Win"))return C.a2
if(C.a.D(u,"Mac"))return C.C
if(C.a.D(u,"Linux"))return C.a3
return C.a4},
nC:function(a,b){var u=new E.hK(a)
u.eg(a,b)
return u},
nJ:function(a,b,c,d,e){var u,t,s=J.O(a)
if(!!s.$ibq)return E.lJ(a,!0,!0,!0,!1)
u=W.kz()
t=u.style
t.width="100%"
t.height="100%"
s.gbT(a).n(0,u)
return E.lJ(u,!0,!0,!0,!1)},
lJ:function(a,b,c,d,e){var u,t,s,r,q="mousemove",p=new E.dC(),o=C.i.ck(a,"webgl2",P.ng(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(o==null)H.q(P.u("Failed to get the rendering context for WebGL."))
p.b=a
p.c=o
p.e=E.nC(o,a)
u=new T.ij(o)
u.b=o.getParameter(3379)
o.getParameter(34076)
u.e=u.d=0
p.f=u
u=new X.dL(a)
t=new X.fP()
t.d=P.c5(P.w)
u.b=t
t=new X.ho(u)
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
t=new X.iq(u)
t.f=V.be()
t.r=V.be()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.z=H.b([],[[P.dy,P.a2]])
t=$.fp
u.Q=(t==null?$.fp=new E.dX(E.lX(),E.lY()):t).a===C.r?0.16666666666666666:0.005555555555555556
s=u.z
r=document
s.push(W.Y(r,"contextmenu",u.gf6(),!1))
u.z.push(W.Y(a,"focus",u.gfc(),!1))
u.z.push(W.Y(a,"blur",u.gf0(),!1))
u.z.push(W.Y(r,"keyup",u.gfg(),!1))
u.z.push(W.Y(r,"keydown",u.gfe(),!1))
u.z.push(W.Y(a,"mousedown",u.gfk(),!1))
u.z.push(W.Y(a,"mouseup",u.gfo(),!1))
u.z.push(W.Y(a,q,u.gfm(),!1))
s=u.z
W.kB(a)
W.kB(a)
s.push(W.Y(a,W.kB(a),u.gfq(),!1))
u.z.push(W.Y(r,q,u.gf8(),!1))
u.z.push(W.Y(r,"mouseup",u.gfa(),!1))
u.z.push(W.Y(r,"pointerlockchange",u.gft(),!1))
u.z.push(W.Y(a,"touchstart",u.gfI(),!1))
u.z.push(W.Y(a,"touchend",u.gfE(),!1))
u.z.push(W.Y(a,"touchmove",u.gfG(),!1))
p.x=u
p.ch=!0
p.cx=!1
p.cy=new P.ac(Date.now(),!1)
p.db=0
p.cN()
return p},
f0:function f0(){},
aO:function aO(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bp:function bp(a){this.b=a},
bz:function bz(a){this.b=a},
dX:function dX(a,b){this.a=a
this.b=b},
hK:function hK(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hL:function hL(a){this.a=a},
hM:function hM(a){this.a=a},
hN:function hN(a){this.a=a},
dx:function dx(a){this.c=a
this.b=null},
dC:function dC(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
il:function il(a){this.a=a}},Z={
kT:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.bL(c)),35044)
a.bindBuffer(b,null)
return new Z.dO(b,u)},
ai:function(a){return new Z.aW(a)},
dO:function dO(a,b){this.a=a
this.b=b},
cS:function cS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
j6:function j6(a){this.a=a},
cT:function cT(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bu:function bu(a,b,c){this.a=a
this.b=b
this.c=c},
aW:function aW(a){this.a=a}},D={
N:function(){var u=new D.bt()
u.d=0
return u},
f3:function f3(){},
bt:function bt(){var _=this
_.d=_.c=_.b=_.a=null},
fr:function fr(a){this.a=a},
fs:function fs(a){this.a=a},
Z:function Z(){this.b=null},
bv:function bv(){this.b=null},
bw:function bw(){this.b=null},
C:function C(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
lm:function(){var u=new D.br()
u.c=new V.W(1,1,1)
u.a=V.lW()
u.d=V.kS()
u.e=V.nS()
u.sae(null)
u.sab(0,null)
return u},
eY:function eY(){},
br:function br(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a5:function a5(){},
da:function da(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
hE:function hE(){},
i3:function i3(){}},X={cU:function cU(a,b){this.a=a
this.b=b},d9:function d9(a,b){this.a=a
this.b=b},fP:function fP(){this.d=this.b=this.a=null},dc:function dc(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fY:function fY(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},by:function by(a,b,c){this.a=a
this.b=b
this.c=c},bb:function bb(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},ho:function ho(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},hF:function hF(){},dG:function dG(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iq:function iq(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dL:function dL(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
n5:function(a){var u=new X.fA(),t=new V.as(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.lF
if(t==null){t=V.lE(0,0,1,1)
$.lF=t}u.r=t
return u},
ky:function ky(){},
fA:function fA(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dl:function dl(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
ic:function ic(){}},V={
kt:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.b9(a-b,u)
return(a<0?a+u:a)+b},
F:function(a,b,c){if(a==null)return C.a.af("null",c)
return C.a.af(C.d.dX(Math.abs(a-0)<$.A().a?0:a,b),c+b+1)},
bQ:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.h])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.m)(a),++s){r=V.F(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.d(o,q)
u=C.a.af(o[q],t)
p=o.length
if(q>=p)return H.d(o,q)
o[q]=u}return o},
l6:function(a){return C.d.ig(Math.pow(2,C.W.c6(Math.log(H.oT(a))/Math.log(2))))},
nm:function(a){return new V.c8(a.a,a.b,a.c,a.e,a.f,a.r,a.y,a.z,a.Q)},
de:function(){var u=$.lw
return u==null?$.lw=V.aw(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aw:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aR(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kM:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.aw(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
lu:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.aw(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
lv:function(a,b,c,d){d=V.kS()
return V.lt(V.lA(),d,new V.z(a,b,c))},
lt:function(a,b,c){var u=c.v(0,Math.sqrt(c.E(c))),t=b.aA(u),s=t.v(0,Math.sqrt(t.E(t))),r=u.aA(s),q=new V.z(a.a,a.b,a.c),p=s.V(0).E(q),o=r.V(0).E(q),n=u.V(0).E(q)
return V.aw(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
be:function(){var u=$.lz
return u==null?$.lz=new V.a7(0,0):u},
lA:function(){var u=$.aA
return u==null?$.aA=new V.T(0,0,0):u},
lE:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dp(a,b,c,d)},
cr:function(){var u=$.lV
return u==null?$.lV=new V.z(0,0,0):u},
nS:function(){var u=$.iS
return u==null?$.iS=new V.z(-1,0,0):u},
kS:function(){var u=$.iT
return u==null?$.iT=new V.z(0,1,0):u},
lW:function(){var u=$.iU
return u==null?$.iU=new V.z(0,0,1):u},
W:function W(a,b,c){this.a=a
this.b=b
this.c=c},
as:function as(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fq:function fq(a){this.a=a},
c8:function c8(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aR:function aR(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
T:function T(a,b,c){this.a=a
this.b=b
this.c=c},
bf:function bf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dp:function dp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
U:function U(a,b){this.a=a
this.b=b},
z:function z(a,b,c){this.a=a
this.b=b
this.c=c},
pg:function(a){P.nK(C.T,new V.kn(a))},
nE:function(a){var u=new V.hX()
u.ej(a,!0)
return u},
cV:function cV(){},
kn:function kn(a){this.a=a},
ff:function ff(a){var _=this
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
hX:function hX(){this.b=this.a=null},
hZ:function hZ(a){this.a=a},
hY:function hY(a){this.a=a},
i_:function i_(a){this.a=a}},U={
ll:function(){var u=new U.f5()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
cX:function(a){var u=new U.cW()
u.a=a
return u},
lG:function(a,b,c){var u,t=new U.dr()
t.r=t.f=t.e=t.d=t.c=t.b=t.a=0
t.se0(0)
t.sdN(0,0)
t.sdT(0)
u=t.d
if(!(Math.abs(u-c)<$.A().a)){t.d=c
u=new D.C("deltaYaw",u,c)
u.b=!0
t.T(u)}u=t.e
if(!(Math.abs(u-a)<$.A().a)){t.e=a
u=new D.C("deltaPitch",u,a)
u.b=!0
t.T(u)}u=t.f
if(!(Math.abs(u-b)<$.A().a)){t.f=b
u=new D.C("deltaRoll",u,b)
u.b=!0
t.T(u)}return t},
lR:function(a,b){var u,t,s,r=new U.dM(),q=U.ll()
q.se_(0,!0)
q.sdB(6.283185307179586)
q.sdD(0)
q.sa2(0,0)
q.sdC(100)
q.sY(0)
q.sd6(0.5)
r.b=q
u=r.gbc()
q.gA().n(0,u)
q=U.ll()
q.se_(0,!0)
q.sdB(6.283185307179586)
q.sdD(0)
q.sa2(0,0)
q.sdC(100)
q.sY(0)
q.sd6(0.5)
r.c=q
q.gA().n(0,u)
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
q=new D.C("modifiers",s,t)
q.b=!0
r.T(q)
q=r.f
if(q!==!1){r.f=!1
q=new D.C("invertX",q,!1)
q.b=!0
r.T(q)}q=r.r
if(q!==!1){r.r=!1
q=new D.C("invertY",q,!1)
q.b=!0
r.T(q)}r.hc(b)
return r},
f5:function f5(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cW:function cW(){this.b=this.a=null},
c0:function c0(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
am:function am(){},
dr:function dr(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dM:function dM(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={d1:function d1(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
nk:function(a,b){var u=a.b1,t=new A.h3(b,u)
t.ei(b,u)
t.ef(a,b)
return t},
nl:function(a,b,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="MaterialLight_"+a3.gal(a3)+a4.gal(a4)+a5.gal(a5)+a6.gal(a6)+a7.gal(a7)+a8.gal(a8)+a9.gal(a9)+b0.gal(b0)+b1.gal(b1)+"_"
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
d=$.b0()
if(j){u=$.b_()
d=new Z.aW(d.a|u.a)}if(i){u=$.aZ()
d=new Z.aW(d.a|u.a)}if(h){u=$.b1()
d=new Z.aW(d.a|u.a)}if(g){u=$.aY()
d=new Z.aW(d.a|u.a)}return new A.h6(a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,s,o,k,o,r,f,!0,e,!1,m,r,l,j,i,h,!1,g,a,!1,a0,!1,a2,c.charCodeAt(0)==0?c:c,d)},
jY:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
jZ:function(a,b,c){var u,t="Txt, txt2D).rgb;\n"
A.jY(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.eO(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.b){u+="   "+c+"Color = "+c+"Clr*texture2D("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.b){u+="   "+c+"Color = texture2D("+c+t
a.a=u}a.a=u+"}\n"},
os:function(a,b){var u,t=a.a,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.jY(b,t,"emission")
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
oo:function(a,b){var u,t=a.b
if(!(t.a||t.b||!1))return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.jZ(b,t,"ambient")
b.a+="\n"},
oq:function(a,b){var u,t=a.c
if(!(t.a||t.b||!1))return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.jZ(b,t,"diffuse")
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
ot:function(a,b){var u,t=a.d
if(!(t.a||t.b||!1))return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.jZ(b,t,"invDiffuse")
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
oz:function(a,b){var u,t=a.e
if(!(t.a||t.b||!1))return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.jZ(b,t,"specular")
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
ov:function(a,b){var u,t,s
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
ox:function(a,b){var u,t=a.r,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.jY(b,t,"reflect")
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
oy:function(a,b){var u,t=a.x,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.jY(b,t,"refract")
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
op:function(a,b,c){var u,t,s,r,q,p,o=b.b
if(o<=0)return
u=b.a
t="barLight"+H.e(u)
s=A.eO(t)
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
or:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.e(u)
s=A.eO(t)
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
ow:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.e(u)
s=A.eO(t)
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
oA:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.e(u)
s=A.eO(t)
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
if(o){u=$.fp
if(u==null)u=$.fp=new E.dX(E.lX(),E.lY())
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
ou:function(a,b){var u,t
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
oB:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.R("")
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
A.os(a,j)
A.oo(a,j)
A.oq(a,j)
A.ot(a,j)
A.oz(a,j)
t=a.db
if(t){r=j.a+="// === Environmental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.ox(a,j)
A.oy(a,j)}A.ov(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.m)(q),++o)A.op(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.m)(q),++o)A.or(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.m)(q),++o)A.ow(a,q[o],j)
for(q=a.cx,p=q.length,o=0;o<q.length;q.length===p||(0,H.m)(q),++o)A.oA(a,q[o],j)
A.ou(a,j)}q=j.a+="// === Main ===\n"
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
j.a+=m+(r[0].toUpperCase()+C.a.a6(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.m)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a6(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.m)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a6(r,1))+"Values(norm);\n"}for(u=a.cx,t=u.length,o=0;o<u.length;u.length===t||(0,H.m)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a6(r,1))+"Values(norm);\n"}if(a.cy<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
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
oC:function(a,b){var u,t,s
if(!a.ry)return
u=b.a+="struct BendingValue\n"
u+="{\n"
b.a=u
u+="   mat4 mat;\n"
b.a=u
u+="};\n"
b.a=u
b.a=u+"uniform int bendMatCount;\n"
u=b.a+="uniform BendingValue bendValues["+a.aQ+"];\n"
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
oE:function(a,b){var u
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
oD:function(a,b){var u
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
oG:function(a,b){var u,t
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
oH:function(a,b){var u,t
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
oF:function(a,b){var u
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
oI:function(a,b){var u
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
eO:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.a.a6(a,1)},
kP:function(a,b,c,d,e){var u=new A.ix(a,c,e)
u.f=d
P.nh(d,0,P.w)
return u},
cQ:function cQ(a,b,c){this.a=a
this.b=b
this.c=c},
eT:function eT(a){this.a=a},
a_:function a_(a,b,c){this.a=a
this.b=b
this.c=c},
h3:function h3(a,b){var _=this
_.ix=_.d9=_.bj=_.b1=_.aQ=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iF=_.iE=_.iD=_.c3=_.c2=_.c1=_.c0=_.c_=_.bZ=_.bY=_.bX=_.iC=_.dm=_.dl=_.iB=_.dk=_.dj=_.di=_.iA=_.dh=_.dg=_.df=_.iz=_.de=_.dd=_.iy=_.dc=_.da=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cR:function cR(a,b){this.a=a
this.b=b},
cZ:function cZ(a,b){this.a=a
this.b=b},
dm:function dm(a,b){this.a=a
this.b=b},
du:function du(a,b){this.a=a
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
_.aQ=b3
_.b1=b4
_.bj=b5},
cm:function cm(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cn:function cn(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cp:function cp(a,b,c,d,e,f,g,h,i,j){var _=this
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
cq:function cq(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ds:function ds(){},
dI:function dI(){},
iC:function iC(a){this.a=a},
bh:function bh(a,b,c){this.a=a
this.c=b
this.d=c},
iz:function iz(a,b,c){this.a=a
this.c=b
this.d=c},
iA:function iA(a,b,c){this.a=a
this.c=b
this.d=c},
iB:function iB(a,b,c){this.a=a
this.c=b
this.d=c},
ix:function ix(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
V:function V(a,b,c){this.a=a
this.c=b
this.d=c},
iy:function iy(a,b,c){this.a=a
this.c=b
this.d=c},
G:function G(a,b,c){this.a=a
this.c=b
this.d=c},
cl:function cl(a,b,c){this.a=a
this.c=b
this.d=c},
iD:function iD(a,b,c){this.a=a
this.c=b
this.d=c},
co:function co(a,b,c){this.a=a
this.c=b
this.d=c},
ad:function ad(a,b,c){this.a=a
this.c=b
this.d=c},
a0:function a0(a,b,c){this.a=a
this.c=b
this.d=c},
bF:function bF(a,b,c){this.a=a
this.c=b
this.d=c}},F={
l1:function(a,b,c,d){var u=F.kN()
F.cF(u,b,c,d,a,1,0,0,1)
F.cF(u,b,c,d,a,0,1,0,3)
F.cF(u,b,c,d,a,0,0,1,2)
F.cF(u,b,c,d,a,-1,0,0,0)
F.cF(u,b,c,d,a,0,-1,0,0)
F.cF(u,b,c,d,a,0,0,-1,3)
u.aq()
return u},
jT:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cF:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.z(h,g+a1,f+a2)
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
j.d=i}m=F.jT(i)
l=F.jT(h)
k=F.l9(d,a0,new F.jS(j,F.jT(g),F.jT(f),l,m,c),b)
if(k!=null)a.b4(k)},
mg:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(e<3)return
u=F.kN()
t=b?-1:1
s=-6.283185307179586/e
r=H.b([],[F.bi])
q=u.a
p=new V.z(0,0,t)
p=p.v(0,Math.sqrt(p.E(p)))
r.push(q.h9(new V.bf(a,-1,-1,-1),new V.as(1,1,1,1),new V.T(0,0,c),new V.z(0,0,t),new V.a7(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.v(k)
j=new V.z(m,l,t).v(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.dN(new V.bf(a,-1,-1,-1),null,new V.as(i,g,h,1),new V.T(m*k,l*k,c),new V.z(0,0,t),new V.a7(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.n(0,f)
r.push(f)}u.d.h7(r)
return u},
me:function(a,b,c){return F.oX(!0,a,1,new F.k1(1,c),b)},
oX:function(a,b,c,d,e){var u
if(e<3)return
if(c<1)return
u=F.l9(c,e,new F.k3(d),null)
if(u==null)return
u.aq()
u.bO()
if(b)u.b4(F.mg(3,!1,1,new F.k4(d),e))
u.b4(F.mg(1,!0,-1,new F.k5(d),e))
return u},
ph:function(a,b){var u,t,s={}
s.a=u
s.a=null
s.a=new F.ko()
t=F.l1(a,null,new F.kp(s,1),b)
t.bO()
return t},
mr:function(){return F.mf(15,30,0.5,1,new F.kr())},
pa:function(){return F.mf(12,120,0.3,1,new F.kd(3,2))},
mf:function(a,b,c,d,e){var u=F.l9(a,b,new F.k2(e,d,b,c),null)
if(u==null)return
u.aq()
u.bO()
return u},
l9:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.kN()
t=H.b([],[F.bi])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.dN(g,g,new V.as(p,0,0,1),g,g,new V.a7(r,1),g,g,0)
q.n(0,o)
c.$3(o,r,0)
t.push(o.bW(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.dN(g,g,new V.as(j,i,h,1),g,g,new V.a7(r,m),g,g,0)
k.n(0,o)
c.$3(o,r,n)
t.push(o.bW(d))}}u.d.h8(a+1,b+1,t)
return u},
bZ:function(a,b,c){var u=new F.b5(),t=a.a
if(t==null)H.q(P.u("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.q(P.u("May not create a face with vertices attached to different shapes."))
u.bM(a)
u.bN(b)
u.fV(c)
u.a.a.d.b.push(u)
u.a.a.Z()
return u},
nd:function(a,b){var u=new F.c4(),t=a.a
if(t==null)H.q(P.u("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.q(P.u("May not create a line with vertices attached to different shapes."))
u.bM(a)
u.bN(b)
u.a.a.c.b.push(u)
u.a.a.Z()
return u},
kN:function(){var u=new F.hT(),t=new F.iV(u)
t.b=!1
t.c=H.b([],[F.bi])
u.a=t
t=new F.hW(u)
t.b=H.b([],[F.ce])
u.b=t
t=new F.hV(u)
t.b=H.b([],[F.c4])
u.c=t
t=new F.hU(u)
t.b=H.b([],[F.b5])
u.d=t
u.e=null
return u},
dN:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.bi(),r=new F.j2()
r.b=H.b([],[F.ce])
s.b=r
r=new F.iZ()
u=[F.c4]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.iW()
u=[F.b5]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.mF()
s.e=0
r=$.b0()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.b_().a)!==0?e:t
s.x=(u&$.aZ().a)!==0?b:t
s.y=(u&$.b1().a)!==0?f:t
s.z=(u&$.bl().a)!==0?g:t
s.Q=(u&$.mG().a)!==0?c:t
s.ch=(u&$.bS().a)!==0?i:0
s.cx=(u&$.aY().a)!==0?a:t
return s},
jS:function jS(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
k1:function k1(a,b){this.a=a
this.b=b},
k3:function k3(a){this.a=a},
k4:function k4(a){this.a=a},
k5:function k5(a){this.a=a},
ko:function ko(){},
kp:function kp(a,b){this.a=a
this.b=b},
kr:function kr(){},
kd:function kd(a,b){this.a=a
this.b=b},
k2:function k2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b5:function b5(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ft:function ft(){},
i0:function i0(){},
c4:function c4(){this.b=this.a=null},
fR:function fR(){},
iw:function iw(){},
ce:function ce(){this.a=null},
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
j4:function j4(a){this.a=a},
j3:function j3(a){this.a=a},
iV:function iV(a){this.a=a
this.c=this.b=null},
iW:function iW(){this.d=this.c=this.b=null},
iX:function iX(a,b){this.a=a
this.b=b},
iY:function iY(a,b){this.a=a
this.b=b},
iZ:function iZ(){this.c=this.b=null},
j0:function j0(){},
j_:function j_(){},
j1:function j1(){},
hw:function hw(){},
j2:function j2(){this.b=null}},T={dB:function dB(){},ih:function ih(){},ii:function ii(){var _=this
_.y=_.d=_.c=_.b=_.a=null},ij:function ij(a){var _=this
_.a=a
_.e=_.d=_.b=null},ik:function ik(a,b,c,d,e,f,g){var _=this
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
H.kH.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gI:function(a){return H.cf(a)},
i:function(a){return"Instance of '"+H.e(H.cg(a))+"'"}}
J.fL.prototype={
i:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$iaI:1}
J.d7.prototype={
p:function(a,b){return null==b},
i:function(a){return"null"},
gI:function(a){return 0}}
J.d8.prototype={
gI:function(a){return 0},
i:function(a){return String(a)},
$inb:1}
J.hB.prototype={}
J.bG.prototype={}
J.b8.prototype={
i:function(a){var u=a[$.mt()]
if(u==null)return this.ec(a)
return"JavaScript function for "+H.e(J.a4(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.b6.prototype={
ce:function(a,b){if(!!a.fixed$length)H.q(P.y("removeAt"))
if(b<0||b>=a.length)throw H.c(P.dn(b,null))
return a.splice(b,1)[0]},
M:function(a,b){var u
if(!!a.fixed$length)H.q(P.y("remove"))
for(u=0;u<a.length;++u)if(J.D(a[u],b)){a.splice(u,1)
return!0}return!1},
aa:function(a,b){var u,t
if(!!a.fixed$length)H.q(P.y("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.m)(b),++t)a.push(b[t])},
G:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.c(P.aM(a))}},
j:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.d(r,u)
r[u]=t}return r.join(b)},
hK:function(a){return this.j(a,"")},
hC:function(a,b,c){var u,t,s=a.length
for(u=b,t=0;t<s;++t){u=c.$2(u,a[t])
if(a.length!==s)throw H.c(P.aM(a))}return u},
hD:function(a,b,c){return this.hC(a,b,c,null)},
hB:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.c(P.aM(a))}throw H.c(H.fJ())},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
e8:function(a,b,c){if(b<0||b>a.length)throw H.c(P.X(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.c(P.X(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.aJ(a,0)])
return H.b(a.slice(b,c),[H.aJ(a,0)])},
ghA:function(a){if(a.length>0)return a[0]
throw H.c(H.fJ())},
gas:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.fJ())},
cZ:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.c(P.aM(a))}return!1},
aV:function(a,b){if(!!a.immutable$list)H.q(P.y("sort"))
H.nH(a,b==null?J.ol():b)},
e7:function(a){return this.aV(a,null)},
D:function(a,b){var u
for(u=0;u<a.length;++u)if(J.D(a[u],b))return!0
return!1},
i:function(a){return P.kE(a,"[","]")},
gU:function(a){return new J.ab(a,a.length)},
gI:function(a){return H.cf(a)},
gm:function(a){return a.length},
sm:function(a,b){var u="newLength"
if(!!a.fixed$length)H.q(P.y("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.kw(b,u,null))
if(b<0)throw H.c(P.X(b,0,null,u,null))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bP(a,b))
return a[b]},
l:function(a,b,c){if(!!a.immutable$list)H.q(P.y("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bP(a,b))
a[b]=c},
$ir:1,
$ij:1,
$io:1}
J.kG.prototype={}
J.ab.prototype={
gC:function(a){return this.d},
t:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.m(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.c3.prototype={
aP:function(a,b){var u
if(typeof b!=="number")throw H.c(H.ae(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbl(b)
if(this.gbl(a)===u)return 0
if(this.gbl(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbl:function(a){return a===0?1/a<0:a<0},
ig:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.y(""+a+".toInt()"))},
c6:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.y(""+a+".floor()"))},
ak:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.y(""+a+".round()"))},
dX:function(a,b){var u
if(b>20)throw H.c(P.X(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbl(a))return"-"+u
return u},
b7:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.X(b,2,36,"radix",null))
u=a.toString(b)
if(C.a.W(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.q(P.y("Unexpected toString result: "+u))
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
gI:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
b9:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
ee:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cR(a,b)},
a4:function(a,b){return(a|0)===a?a/b|0:this.cR(a,b)},
cR:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.y("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
aN:function(a,b){var u
if(a>0)u=this.cQ(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
fZ:function(a,b){if(b<0)throw H.c(H.ae(b))
return this.cQ(a,b)},
cQ:function(a,b){return b>31?0:a>>>b},
$iJ:1,
$iaa:1}
J.d6.prototype={$iw:1}
J.d5.prototype={}
J.b7.prototype={
W:function(a,b){if(b<0)throw H.c(H.bP(a,b))
if(b>=a.length)H.q(H.bP(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(b>=a.length)throw H.c(H.bP(a,b))
return a.charCodeAt(b)},
B:function(a,b){if(typeof b!=="string")throw H.c(P.kw(b,null,null))
return a+b},
aT:function(a,b,c,d){var u,t
c=P.aU(b,c,a.length)
if(typeof c!=="number"||Math.floor(c)!==c)H.q(H.ae(c))
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a5:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.X(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a3:function(a,b){return this.a5(a,b,0)},
q:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.q(H.ae(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.S()
if(b<0)throw H.c(P.dn(b,null))
if(b>c)throw H.c(P.dn(b,null))
if(c>a.length)throw H.c(P.dn(c,null))
return a.substring(b,c)},
a6:function(a,b){return this.q(a,b,null)},
ij:function(a){return a.toLowerCase()},
w:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.Q)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
af:function(a,b){var u=b-a.length
if(u<=0)return a
return this.w(" ",u)+a},
bk:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.X(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
du:function(a,b){return this.bk(a,b,0)},
hi:function(a,b,c){var u=a.length
if(c>u)throw H.c(P.X(c,0,u,null,null))
return H.mp(a,b,c)},
D:function(a,b){return this.hi(a,b,0)},
aP:function(a,b){var u
if(typeof b!=="string")throw H.c(H.ae(b))
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
gm:function(a){return a.length},
$ih:1}
H.n.prototype={
gm:function(a){return this.a.length},
h:function(a,b){return C.a.W(this.a,b)},
$ar:function(){return[P.w]},
$ax:function(){return[P.w]},
$aj:function(){return[P.w]},
$ao:function(){return[P.w]}}
H.r.prototype={}
H.db.prototype={
gU:function(a){return new H.b9(this,this.gm(this))},
bs:function(a,b){return this.eb(0,b)}}
H.b9.prototype={
gC:function(a){return this.d},
t:function(){var u,t=this,s=t.a,r=J.aq(s),q=r.gm(s)
if(t.b!=q)throw H.c(P.aM(s))
u=t.c
if(typeof q!=="number")return H.v(q)
if(u>=q){t.d=null
return!1}t.d=r.J(s,u);++t.c
return!0}}
H.c6.prototype={
gU:function(a){return new H.h1(J.aK(this.a),this.b)},
gm:function(a){return J.ag(this.a)},
J:function(a,b){return this.b.$1(J.eP(this.a,b))},
$aj:function(a,b){return[b]}}
H.fm.prototype={$ir:1,
$ar:function(a,b){return[b]}}
H.h1.prototype={
t:function(){var u=this,t=u.b
if(t.t()){u.a=u.c.$1(t.gC(t))
return!0}u.a=null
return!1},
gC:function(a){return this.a}}
H.h2.prototype={
gm:function(a){return J.ag(this.a)},
J:function(a,b){return this.b.$1(J.eP(this.a,b))},
$ar:function(a,b){return[b]},
$adb:function(a,b){return[b]},
$aj:function(a,b){return[b]}}
H.cs.prototype={
gU:function(a){return new H.j7(J.aK(this.a),this.b)}}
H.j7.prototype={
t:function(){var u,t
for(u=this.a,t=this.b;u.t();)if(t.$1(u.gC(u)))return!0
return!1},
gC:function(a){var u=this.a
return u.gC(u)}}
H.d2.prototype={}
H.iH.prototype={
l:function(a,b,c){throw H.c(P.y("Cannot modify an unmodifiable list"))}}
H.dJ.prototype={}
H.f7.prototype={
i:function(a){return P.kL(this)},
l:function(a,b,c){return H.n0()},
$iQ:1}
H.f8.prototype={
gm:function(a){return this.a},
bU:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.bU(0,b))return
return this.cF(b)},
cF:function(a){return this.b[a]},
G:function(a,b){var u,t,s,r=this.c
for(u=r.length,t=0;t<u;++t){s=r[t]
b.$2(s,this.cF(s))}}}
H.iu.prototype={
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
H.iG.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.ks.prototype={
$1:function(a){if(!!J.O(a).$ibs)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:8}
H.en.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bW.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.cK(t==null?"unknown":t)+"'"},
gio:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.id.prototype={}
H.i5.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cK(u)+"'"}}
H.bU.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bU))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gI:function(a){var u,t=this.c
if(t==null)u=H.cf(this.a)
else u=typeof t!=="object"?J.cO(t):H.cf(t)
return(u^H.cf(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.cg(u))+"'")}}
H.f2.prototype={
i:function(a){return this.a}}
H.hQ.prototype={
i:function(a){return"RuntimeError: "+H.e(this.a)}}
H.I.prototype={
gm:function(a){return this.a},
ghJ:function(a){return this.a===0},
ga_:function(a){return new H.fT(this,[H.aJ(this,0)])},
gim:function(a){var u=this
return H.nj(u.ga_(u),new H.fN(u),H.aJ(u,0),H.aJ(u,1))},
bU:function(a,b){var u=this.b
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
return s}else return q.hH(b)},
hH:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.cH(r,s.dv(a))
t=s.dw(u,a)
if(t<0)return
return u[t].b},
l:function(a,b,c){var u,t,s=this
if(typeof b==="string"){u=s.b
s.cw(u==null?s.b=s.bD():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cw(t==null?s.c=s.bD():t,b,c)}else s.hI(b,c)},
hI:function(a,b){var u,t,s,r=this,q=r.d
if(q==null)q=r.d=r.bD()
u=r.dv(a)
t=r.cH(q,u)
if(t==null)r.bK(q,u,[r.bE(a,b)])
else{s=r.dw(t,a)
if(s>=0)t[s].b=b
else t.push(r.bE(a,b))}},
G:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.c(P.aM(u))
t=t.c}},
cw:function(a,b,c){var u=this.bd(a,b)
if(u==null)this.bK(a,b,this.bE(b,c))
else u.b=c},
eM:function(){this.r=this.r+1&67108863},
bE:function(a,b){var u,t=this,s=new H.fS(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.eM()
return s},
dv:function(a){return J.cO(a)&0x3ffffff},
dw:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.D(a[t].a,b))return t
return-1},
i:function(a){return P.kL(this)},
bd:function(a,b){return a[b]},
cH:function(a,b){return a[b]},
bK:function(a,b,c){a[b]=c},
eF:function(a,b){delete a[b]},
eB:function(a,b){return this.bd(a,b)!=null},
bD:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bK(t,u,t)
this.eF(t,u)
return t}}
H.fN.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.aJ(u,1),args:[H.aJ(u,0)]}}}
H.fS.prototype={}
H.fT.prototype={
gm:function(a){return this.a.a},
gU:function(a){var u=this.a,t=new H.fU(u,u.r)
t.c=u.e
return t}}
H.fU.prototype={
gC:function(a){return this.d},
t:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.aM(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.k9.prototype={
$1:function(a){return this.a(a)},
$S:8}
H.ka.prototype={
$2:function(a,b){return this.a(a,b)}}
H.kb.prototype={
$1:function(a){return this.a(a)}}
H.fM.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$inA:1}
H.cb.prototype={$icb:1}
H.bc.prototype={$ibc:1}
H.df.prototype={
gm:function(a){return a.length},
$iB:1,
$aB:function(){}}
H.cc.prototype={
h:function(a,b){H.aH(b,a,a.length)
return a[b]},
l:function(a,b,c){H.aH(b,a,a.length)
a[b]=c},
$ir:1,
$ar:function(){return[P.J]},
$ax:function(){return[P.J]},
$ij:1,
$aj:function(){return[P.J]},
$io:1,
$ao:function(){return[P.J]}}
H.dg.prototype={
l:function(a,b,c){H.aH(b,a,a.length)
a[b]=c},
$ir:1,
$ar:function(){return[P.w]},
$ax:function(){return[P.w]},
$ij:1,
$aj:function(){return[P.w]},
$io:1,
$ao:function(){return[P.w]}}
H.hp.prototype={
h:function(a,b){H.aH(b,a,a.length)
return a[b]}}
H.hq.prototype={
h:function(a,b){H.aH(b,a,a.length)
return a[b]}}
H.hr.prototype={
h:function(a,b){H.aH(b,a,a.length)
return a[b]}}
H.hs.prototype={
h:function(a,b){H.aH(b,a,a.length)
return a[b]}}
H.ht.prototype={
h:function(a,b){H.aH(b,a,a.length)
return a[b]}}
H.dh.prototype={
gm:function(a){return a.length},
h:function(a,b){H.aH(b,a,a.length)
return a[b]}}
H.cd.prototype={
gm:function(a){return a.length},
h:function(a,b){H.aH(b,a,a.length)
return a[b]},
$icd:1,
$ibE:1}
H.cw.prototype={}
H.cx.prototype={}
H.cy.prototype={}
H.cz.prototype={}
P.j9.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:16}
P.j8.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.ja.prototype={
$0:function(){this.a.$0()}}
P.jb.prototype={
$0:function(){this.a.$0()}}
P.et.prototype={
ep:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bO(new P.jI(this,b),0),a)
else throw H.c(P.y("`setTimeout()` not found."))},
eq:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bO(new P.jH(this,a,Date.now(),b),0),a)
else throw H.c(P.y("Periodic timer."))},
$idD:1}
P.jI.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.jH.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.ee(u,q)}s.c=r
t.d.$1(s)}}
P.bH.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.e(this.a)+")"}}
P.bI.prototype={
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
if(t instanceof P.bH){s=t.b
if(s===2){u=q.d
if(u==null||u.length===0){q.b=null
return!1}if(0>=u.length)return H.d(u,-1)
q.a=u.pop()
continue}else{u=t.a
if(s===3)throw u
else{r=J.aK(u)
if(!!r.$ibI){u=q.d
if(u==null)u=q.d=[]
u.push(q.a)
q.a=r.a
continue}else{q.c=r
continue}}}}else{q.b=t
return!0}}return!1}}
P.jE.prototype={
gU:function(a){return new P.bI(this.a())}}
P.dP.prototype={}
P.dy.prototype={}
P.i8.prototype={}
P.dD.prototype={}
P.jR.prototype={}
P.k_.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dk():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u}}
P.jp.prototype={
ia:function(a){var u,t,s,r=null
try{if(C.f===$.ap){a.$0()
return}P.oK(r,r,this,a)}catch(s){u=H.af(s)
t=H.l3(s)
P.m8(r,r,this,u,t)}},
ib:function(a,b){var u,t,s,r=null
try{if(C.f===$.ap){a.$1(b)
return}P.oL(r,r,this,a,b)}catch(s){u=H.af(s)
t=H.l3(s)
P.m8(r,r,this,u,t)}},
ic:function(a,b){return this.ib(a,b,null)},
he:function(a){return new P.jq(this,a)},
d3:function(a,b){return new P.jr(this,a,b)}}
P.jq.prototype={
$0:function(){return this.a.ia(this.b)}}
P.jr.prototype={
$1:function(a){return this.a.ic(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jm.prototype={
gU:function(a){var u=new P.e4(this,this.r)
u.c=this.e
return u},
gm:function(a){return this.a},
D:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.ez(b)
return t}},
ez:function(a){var u=this.d
if(u==null)return!1
return this.bA(this.cG(u,a),a)>=0},
n:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cz(u==null?s.b=P.kU():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cz(t==null?s.c=P.kU():t,b)}else return s.es(0,b)},
es:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.kU()
u=s.cB(b)
t=r[u]
if(t==null)r[u]=[s.bx(b)]
else{if(s.bA(t,b)>=0)return!1
t.push(s.bx(b))}return!0},
M:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fL(this.c,b)
else return this.fK(0,b)},
fK:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cG(r,b)
t=s.bA(u,b)
if(t<0)return!1
s.cT(u.splice(t,1)[0])
return!0},
cz:function(a,b){if(a[b]!=null)return!1
a[b]=this.bx(b)
return!0},
fL:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.cT(u)
delete a[b]
return!0},
cA:function(){this.r=1073741823&this.r+1},
bx:function(a){var u,t=this,s=new P.jn(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cA()
return s},
cT:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cA()},
cB:function(a){return J.cO(a)&1073741823},
cG:function(a,b){return a[this.cB(b)]},
bA:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.D(a[t].a,b))return t
return-1}}
P.jn.prototype={}
P.e4.prototype={
gC:function(a){return this.d},
t:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.aM(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fI.prototype={}
P.fV.prototype={
$2:function(a,b){this.a.l(0,a,b)},
$S:3}
P.fW.prototype={$ir:1,$ij:1,$io:1}
P.x.prototype={
gU:function(a){return new H.b9(a,this.gm(a))},
J:function(a,b){return this.h(a,b)},
ii:function(a,b){var u,t,s=this,r=H.b([],[H.p2(s,a,"x",0)])
C.b.sm(r,s.gm(a))
u=0
while(!0){t=s.gm(a)
if(typeof t!=="number")return H.v(t)
if(!(u<t))break
t=s.h(a,u)
if(u>=r.length)return H.d(r,u)
r[u]=t;++u}return r},
ih:function(a){return this.ii(a,!0)},
hy:function(a,b,c,d){var u
P.aU(b,c,this.gm(a))
for(u=b;u<c;++u)this.l(a,u,d)},
i:function(a){return P.kE(a,"[","]")}}
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
for(u=J.aK(this.ga_(a));u.t();){t=u.gC(u)
b.$2(t,this.h(a,t))}},
gm:function(a){return J.ag(this.ga_(a))},
i:function(a){return P.kL(a)},
$iQ:1}
P.jJ.prototype={
l:function(a,b,c){throw H.c(P.y("Cannot modify unmodifiable map"))}}
P.h0.prototype={
h:function(a,b){return J.bT(this.a,b)},
l:function(a,b,c){J.ku(this.a,b,c)},
G:function(a,b){J.ld(this.a,b)},
gm:function(a){return J.ag(this.a)},
i:function(a){return J.a4(this.a)},
$iQ:1}
P.dK.prototype={}
P.jt.prototype={
aa:function(a,b){var u
for(u=J.aK(b);u.t();)this.n(0,u.gC(u))},
i:function(a){return P.kE(this,"{","}")},
J:function(a,b){var u,t,s
P.lD(b,"index")
for(u=P.o1(this,this.r),t=0;u.t();){s=u.d
if(b===t)return s;++t}throw H.c(P.L(b,this,"index",null,t))},
$ir:1,
$ij:1}
P.e5.prototype={}
P.ez.prototype={}
P.eZ.prototype={
hO:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.aU(a0,a1,b.length)
u=$.mI()
if(typeof a1!=="number")return H.v(a1)
t=a0
s=t
r=null
q=-1
p=-1
o=0
for(;t<a1;t=n){n=t+1
m=C.a.F(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.k8(C.a.F(b,n))
j=H.k8(C.a.F(b,n+1))
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
g=r.a+=C.a.q(b,s,t)
r.a=g+H.bB(m)
s=n
continue}}throw H.c(P.S("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.a.q(b,s,a1)
f=g.length
if(q>=0)P.lh(b,p,a1,q,o,f)
else{e=C.c.b9(f-1,4)+1
if(e===1)throw H.c(P.S(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.a.aT(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.lh(b,p,a1,q,o,d)
else{e=C.c.b9(d,4)
if(e===1)throw H.c(P.S(c,b,a1))
if(e>1)b=C.a.aT(b,a1,a1,e===2?"==":"=")}return b}}
P.f_.prototype={}
P.f4.prototype={}
P.f9.prototype={}
P.fo.prototype={}
P.fG.prototype={
i:function(a){return this.a}}
P.fF.prototype={
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
if(r>b)q.a+=C.a.q(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.mT(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.iP.prototype={
ghx:function(){return C.R}}
P.iR.prototype={
bV:function(a){var u,t,s,r=P.aU(0,null,a.length)
if(typeof r!=="number")return r.N()
u=r-0
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.jP(t)
if(s.eH(a,0,r)!==r)s.cV(J.mP(a,r-1),0)
return new Uint8Array(t.subarray(0,H.oi(0,s.b,t.length)))}}
P.jP.prototype={
cV:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.a.F(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cV(r,C.a.F(a,p)))s=p}else if(r<=2047){q=n.b
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
P.iQ.prototype={
bV:function(a){var u,t,s,r,q,p,o,n,m=P.nN(!1,a,0,null)
if(m!=null)return m
u=P.aU(0,null,J.ag(a))
t=P.ma(a,0,u)
if(t>0){s=P.cj(a,0,t)
if(t===u)return s
r=new P.R(s)
q=t
p=!1}else{q=0
r=null
p=!0}if(r==null)r=new P.R("")
o=new P.jO(!1,r)
o.c=p
o.hj(a,q,u)
if(o.e>0){H.q(P.S("Unfinished UTF-8 octet sequence",a,u))
r.a+=H.bB(65533)
o.f=o.e=o.d=0}n=r.a
return n.charCodeAt(0)==0?n:n}}
P.jO.prototype={
hj:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=this,k="Bad UTF-8 encoding 0x",j=l.d,i=l.e,h=l.f
l.f=l.e=l.d=0
$label0$0:for(u=J.aq(a),t=l.b,s=b;!0;s=n){$label1$1:if(i>0){do{if(s===c)break $label0$0
r=u.h(a,s)
if(typeof r!=="number")return r.a7()
if((r&192)!==128){q=P.S(k+C.c.b7(r,16),a,s)
throw H.c(q)}else{j=(j<<6|r&63)>>>0;--i;++s}}while(i>0)
q=h-1
if(q<0||q>=4)return H.d(C.x,q)
if(j<=C.x[q]){q=P.S("Overlong encoding of 0x"+C.c.b7(j,16),a,s-h-1)
throw H.c(q)}if(j>1114111){q=P.S("Character outside valid Unicode range: 0x"+C.c.b7(j,16),a,s-h-1)
throw H.c(q)}if(!l.c||j!==65279)t.a+=H.bB(j)
l.c=!1}if(typeof c!=="number")return H.v(c)
q=s<c
for(;q;){p=P.ma(a,s,c)
if(p>0){l.c=!1
o=s+p
t.a+=P.cj(a,s,o)
if(o===c)break}else o=s
n=o+1
r=u.h(a,o)
if(typeof r!=="number")return r.S()
if(r<0){m=P.S("Negative UTF-8 code unit: -0x"+C.c.b7(-r,16),a,n-1)
throw H.c(m)}else{if((r&224)===192){j=r&31
i=1
h=1
continue $label0$0}if((r&240)===224){j=r&15
i=2
h=2
continue $label0$0}if((r&248)===240&&r<245){j=r&7
i=3
h=3
continue $label0$0}m=P.S(k+C.c.b7(r,16),a,n-1)
throw H.c(m)}}break $label0$0}if(i>0){l.d=j
l.e=i
l.f=h}}}
P.aI.prototype={}
P.ac.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.ac&&this.a===b.a&&!0},
aP:function(a,b){return C.c.aP(this.a,b.a)},
gI:function(a){var u=this.a
return(u^C.c.aN(u,30))&1073741823},
i:function(a){var u=this,t=P.n1(H.nw(u)),s=P.cY(H.nu(u)),r=P.cY(H.nq(u)),q=P.cY(H.nr(u)),p=P.cY(H.nt(u)),o=P.cY(H.nv(u)),n=P.n2(H.ns(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.J.prototype={}
P.b4.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.b4&&this.a===b.a},
gI:function(a){return C.c.gI(this.a)},
aP:function(a,b){return C.c.aP(this.a,b.a)},
i:function(a){var u,t,s,r=new P.fl(),q=this.a
if(q<0)return"-"+new P.b4(0-q).i(0)
u=r.$1(C.c.a4(q,6e7)%60)
t=r.$1(C.c.a4(q,1e6)%60)
s=new P.fk().$1(q%1e6)
return""+C.c.a4(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
P.fk.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.fl.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bs.prototype={}
P.dk.prototype={
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
r=P.kD(q.b)
return t+s+": "+r}}
P.bC.prototype={
gbz:function(){return"RangeError"},
gby:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.fH.prototype={
gbz:function(){return"RangeError"},
gby:function(){var u,t=this.b
if(typeof t!=="number")return t.S()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gm:function(a){return this.f}}
P.iI.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iE.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.ci.prototype={
i:function(a){return"Bad state: "+this.a}}
P.f6.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.kD(u)+"."}}
P.hA.prototype={
i:function(a){return"Out of Memory"},
$ibs:1}
P.dv.prototype={
i:function(a){return"Stack Overflow"},
$ibs:1}
P.fe.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dY.prototype={
i:function(a){return"Exception: "+this.a}}
P.fz.prototype={
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
k=""}j=C.a.q(f,m,n)
return h+l+j+k+"\n"+C.a.w(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.e(g)+")"):h}}
P.fB.prototype={}
P.w.prototype={}
P.j.prototype={
bs:function(a,b){return new H.cs(this,b,[H.l2(this,"j",0)])},
gm:function(a){var u,t=this.gU(this)
for(u=0;t.t();)++u
return u},
gaI:function(a){var u,t=this.gU(this)
if(!t.t())throw H.c(H.fJ())
u=t.gC(t)
if(t.t())throw H.c(H.n8())
return u},
J:function(a,b){var u,t,s
P.lD(b,"index")
for(u=this.gU(this),t=0;u.t();){s=u.gC(u)
if(b===t)return s;++t}throw H.c(P.L(b,this,"index",null,t))},
i:function(a){return P.n7(this,"(",")")}}
P.fK.prototype={}
P.o.prototype={$ir:1,$ij:1}
P.Q.prototype={}
P.bd.prototype={
gI:function(a){return P.a2.prototype.gI.call(this,this)},
i:function(a){return"null"}}
P.aa.prototype={}
P.a2.prototype={constructor:P.a2,$ia2:1,
p:function(a,b){return this===b},
gI:function(a){return H.cf(this)},
i:function(a){return"Instance of '"+H.e(H.cg(this))+"'"},
toString:function(){return this.i(this)}}
P.h.prototype={}
P.R.prototype={
gm:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
P.iN.prototype={
$2:function(a,b){var u,t,s,r=J.cI(b).du(b,"=")
if(r===-1){if(b!=="")J.ku(a,P.kY(b,0,b.length,this.a,!0),"")}else if(r!==0){u=C.a.q(b,0,r)
t=C.a.a6(b,r+1)
s=this.a
J.ku(a,P.kY(u,0,u.length,s,!0),P.kY(t,0,t.length,s,!0))}return a}}
P.iK.prototype={
$2:function(a,b){throw H.c(P.S("Illegal IPv4 address, "+a,this.a,b))}}
P.iL.prototype={
$2:function(a,b){throw H.c(P.S("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.iM.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.eN(C.a.q(this.b,a,b),null,16)
if(typeof u!=="number")return u.S()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u}}
P.bJ.prototype={
gdZ:function(){return this.b},
gc7:function(a){var u=this.c
if(u==null)return""
if(C.a.a3(u,"["))return C.a.q(u,1,u.length-1)
return u},
gbn:function(a){var u=this.d
if(u==null)return P.m1(this.a)
return u},
gcc:function(a){var u=this.f
return u==null?"":u},
gdn:function(){var u=this.r
return u==null?"":u},
dR:function(a,b){var u,t,s,r=this,q=r.a,p=q==="file",o=r.b,n=r.d,m=r.c
if(!(m!=null))m=o.length!==0||n!=null||p?"":null
u=r.e
if(!p)t=m!=null&&u.length!==0
else t=!0
if(t&&!C.a.a3(u,"/"))u="/"+u
s=P.kW(null,0,0,b)
return new P.bJ(q,o,m,n,u,s,r.r)},
gcd:function(){var u,t=this.Q
if(t==null){t=this.f
u=P.h
u=this.Q=new P.dK(P.lQ(t==null?"":t),[u,u])
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
if(!!J.O(b).$ikQ)if(s.a==b.gbt())if(s.c!=null===b.gdq())if(s.b==b.gdZ())if(s.gc7(s)==b.gc7(b))if(s.gbn(s)==b.gbn(b))if(s.e===b.gdM(b)){u=s.f
t=u==null
if(!t===b.gdt()){if(t)u=""
if(u===b.gcc(b)){u=s.r
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
$ikQ:1,
gbt:function(){return this.a},
gdM:function(a){return this.e}}
P.jK.prototype={
$1:function(a){throw H.c(P.S("Invalid port",this.a,this.b+1))}}
P.jL.prototype={
$1:function(a){return P.eA(C.a0,a,C.e,!1)}}
P.jN.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.e(P.eA(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.e(P.eA(C.h,b,C.e,!0))}}}
P.jM.prototype={
$2:function(a,b){var u,t
if(b==null||typeof b==="string")this.a.$2(a,b)
else for(u=J.aK(b),t=this.a;u.t();)t.$2(a,u.gC(u))}}
P.iJ.prototype={
gdY:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.d(o,0)
u=q.a
o=o[0]+1
t=C.a.bk(u,"?",o)
s=u.length
if(t>=0){r=P.cE(u,t+1,s,C.k,!1)
s=t}else r=p
return q.c=new P.jf("data",p,p,p,P.cE(u,o,s,C.B,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.d(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.jV.prototype={
$1:function(a){return new Uint8Array(96)}}
P.jU.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.d(u,a)
u=u[a]
J.mQ(u,0,96,b)
return u},
$S:17}
P.jW.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.a.F(b,s)^96
if(r>=t)return H.d(a,r)
a[r]=c}}}
P.jX.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.a.F(b,0),t=C.a.F(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.d(a,r)
a[r]=c}}}
P.jw.prototype={
gdq:function(){return this.c>0},
gds:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.B()
t=this.e
if(typeof t!=="number")return H.v(t)
t=u+1<t
u=t}else u=!1
return u},
gdt:function(){var u=this.f
if(typeof u!=="number")return u.S()
return u<this.r},
gdr:function(){return this.r<this.a.length},
gcI:function(){return this.b===4&&C.a.a3(this.a,"http")},
gcJ:function(){return this.b===5&&C.a.a3(this.a,"https")},
gbt:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gcI())q=t.x="http"
else if(t.gcJ()){t.x="https"
q="https"}else if(q===4&&C.a.a3(t.a,s)){t.x=s
q=s}else if(q===7&&C.a.a3(t.a,r)){t.x=r
q=r}else{q=C.a.q(t.a,0,q)
t.x=q}return q},
gdZ:function(){var u=this.c,t=this.b+3
return u>t?C.a.q(this.a,t,u-1):""},
gc7:function(a){var u=this.c
return u>0?C.a.q(this.a,u,this.d):""},
gbn:function(a){var u,t=this
if(t.gds()){u=t.d
if(typeof u!=="number")return u.B()
return P.eN(C.a.q(t.a,u+1,t.e),null,null)}if(t.gcI())return 80
if(t.gcJ())return 443
return 0},
gdM:function(a){return C.a.q(this.a,this.e,this.f)},
gcc:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.S()
return u<t?C.a.q(this.a,u+1,t):""},
gdn:function(){var u=this.r,t=this.a
return u<t.length?C.a.a6(t,u+1):""},
gcd:function(){var u=this,t=u.f
if(typeof t!=="number")return t.S()
if(t>=u.r)return C.a1
t=P.h
return new P.dK(P.lQ(u.gcc(u)),[t,t])},
dR:function(a,b){var u,t,s,r,q,p=this,o=null,n=p.gbt(),m=n==="file",l=p.c,k=l>0?C.a.q(p.a,p.b+3,l):"",j=p.gds()?p.gbn(p):o
l=p.c
if(l>0)u=C.a.q(p.a,l,p.d)
else u=k.length!==0||j!=null||m?"":o
l=p.a
t=C.a.q(l,p.e,p.f)
if(!m)s=u!=null&&t.length!==0
else s=!0
if(s&&!C.a.a3(t,"/"))t="/"+t
r=P.kW(o,0,0,b)
s=p.r
q=s<l.length?C.a.a6(l,s+1):o
return new P.bJ(n,k,u,j,t,r,q)},
gI:function(a){var u=this.y
return u==null?this.y=C.a.gI(this.a):u},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.O(b).$ikQ&&this.a===b.i(0)},
i:function(a){return this.a},
$ikQ:1}
P.jf.prototype={}
W.p.prototype={}
W.eQ.prototype={
gm:function(a){return a.length}}
W.eR.prototype={
i:function(a){return String(a)}}
W.eS.prototype={
i:function(a){return String(a)}}
W.bn.prototype={$ibn:1}
W.bo.prototype={$ibo:1}
W.bq.prototype={
ck:function(a,b,c){if(c!=null)return a.getContext(b,P.oU(c))
return a.getContext(b)},
e2:function(a,b){return this.ck(a,b,null)},
$ibq:1}
W.b2.prototype={
gm:function(a){return a.length}}
W.fa.prototype={
gm:function(a){return a.length}}
W.H.prototype={$iH:1}
W.bX.prototype={
gm:function(a){return a.length}}
W.fb.prototype={}
W.ah.prototype={}
W.at.prototype={}
W.fc.prototype={
gm:function(a){return a.length}}
W.fd.prototype={
gm:function(a){return a.length}}
W.fg.prototype={
gm:function(a){return a.length}}
W.ak.prototype={$iak:1}
W.fh.prototype={
i:function(a){return String(a)}}
W.d_.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ir:1,
$ar:function(){return[[P.a8,P.aa]]},
$iB:1,
$aB:function(){return[[P.a8,P.aa]]},
$ax:function(){return[[P.a8,P.aa]]},
$ij:1,
$aj:function(){return[[P.a8,P.aa]]},
$io:1,
$ao:function(){return[[P.a8,P.aa]]}}
W.d0.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gaH(a))+" x "+H.e(this.gaB(a))},
p:function(a,b){var u
if(b==null)return!1
u=J.O(b)
return!!u.$ia8&&a.left===u.gbm(b)&&a.top===u.gbp(b)&&this.gaH(a)===u.gaH(b)&&this.gaB(a)===u.gaB(b)},
gI:function(a){return W.m_(C.d.gI(a.left),C.d.gI(a.top),C.d.gI(this.gaH(a)),C.d.gI(this.gaB(a)))},
gd4:function(a){return a.bottom},
gaB:function(a){return a.height},
gbm:function(a){return a.left},
gci:function(a){return a.right},
gbp:function(a){return a.top},
gaH:function(a){return a.width},
$ia8:1,
$aa8:function(){return[P.aa]}}
W.fi.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ir:1,
$ar:function(){return[P.h]},
$iB:1,
$aB:function(){return[P.h]},
$ax:function(){return[P.h]},
$ij:1,
$aj:function(){return[P.h]},
$io:1,
$ao:function(){return[P.h]}}
W.fj.prototype={
gm:function(a){return a.length}}
W.jd.prototype={
gm:function(a){return this.b.length},
h:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
l:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
this.a.replaceChild(c,u[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gU:function(a){var u=this.ih(this)
return new J.ab(u,u.length)},
$ar:function(){return[W.P]},
$ax:function(){return[W.P]},
$aj:function(){return[W.P]},
$ao:function(){return[W.P]}}
W.P.prototype={
ghd:function(a){return new W.jg(a)},
gbT:function(a){return new W.jd(a,a.children)},
gd5:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.S()
if(s<0)s=-s*0
if(typeof r!=="number")return r.S()
if(r<0)r=-r*0
return new P.a8(u,t,s,r,[P.aa])},
i:function(a){return a.localName},
ac:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.lp
if(u==null){u=H.b([],[W.aS])
t=new W.dj(u)
u.push(W.lZ(null))
u.push(W.m0())
$.lp=t
d=t}else d=u
u=$.lo
if(u==null){u=new W.eB(d)
$.lo=u
c=u}else{u.a=d
c=u}}if($.aN==null){u=document
t=u.implementation.createHTMLDocument("")
$.aN=t
$.kC=t.createRange()
s=$.aN.createElement("base")
s.href=u.baseURI
$.aN.head.appendChild(s)}u=$.aN
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.aN
if(!!this.$ibo)r=u.body
else{r=u.createElement(a.tagName)
$.aN.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.b.D(C.Z,a.tagName)){$.kC.selectNodeContents(r)
q=$.kC.createContextualFragment(b)}else{r.innerHTML=b
q=$.aN.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.aN.body
if(r==null?u!=null:r!==u)J.lf(r)
c.cl(q)
document.adoptNode(q)
return q},
hm:function(a,b,c){return this.ac(a,b,c,null)},
e4:function(a,b){a.textContent=null
a.appendChild(this.ac(a,b,null,null))},
$iP:1,
gdU:function(a){return a.tagName}}
W.fn.prototype={
$1:function(a){return!!J.O(a).$iP}}
W.i.prototype={$ii:1}
W.f.prototype={
h6:function(a,b,c,d){if(c!=null)this.eu(a,b,c,!1)},
eu:function(a,b,c,d){return a.addEventListener(b,H.bO(c,1),!1)}}
W.al.prototype={$ial:1}
W.c_.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.al]},
$iB:1,
$aB:function(){return[W.al]},
$ax:function(){return[W.al]},
$ij:1,
$aj:function(){return[W.al]},
$io:1,
$ao:function(){return[W.al]},
$ic_:1}
W.fu.prototype={
gm:function(a){return a.length}}
W.fy.prototype={
gm:function(a){return a.length}}
W.au.prototype={$iau:1}
W.fE.prototype={
gm:function(a){return a.length}}
W.c1.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.E]},
$iB:1,
$aB:function(){return[W.E]},
$ax:function(){return[W.E]},
$ij:1,
$aj:function(){return[W.E]},
$io:1,
$ao:function(){return[W.E]}}
W.aP.prototype={$iaP:1,
gd7:function(a){return a.data}}
W.c2.prototype={$ic2:1}
W.bx.prototype={$ibx:1}
W.fX.prototype={
i:function(a){return String(a)}}
W.hi.prototype={
gm:function(a){return a.length}}
W.ca.prototype={$ica:1}
W.hj.prototype={
h:function(a,b){return P.aX(a.get(b))},
G:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aX(u.value[1]))}},
ga_:function(a){var u=H.b([],[P.h])
this.G(a,new W.hk(u))
return u},
gm:function(a){return a.size},
l:function(a,b,c){throw H.c(P.y("Not supported"))},
$aa1:function(){return[P.h,null]},
$iQ:1,
$aQ:function(){return[P.h,null]}}
W.hk.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hl.prototype={
h:function(a,b){return P.aX(a.get(b))},
G:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aX(u.value[1]))}},
ga_:function(a){var u=H.b([],[P.h])
this.G(a,new W.hm(u))
return u},
gm:function(a){return a.size},
l:function(a,b,c){throw H.c(P.y("Not supported"))},
$aa1:function(){return[P.h,null]},
$iQ:1,
$aQ:function(){return[P.h,null]}}
W.hm.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ax.prototype={$iax:1}
W.hn.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.ax]},
$iB:1,
$aB:function(){return[W.ax]},
$ax:function(){return[W.ax]},
$ij:1,
$aj:function(){return[W.ax]},
$io:1,
$ao:function(){return[W.ax]}}
W.ay.prototype={$iay:1}
W.a3.prototype={
gaI:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.lH("No elements"))
if(t>1)throw H.c(P.lH("More than one element"))
return u.firstChild},
aa:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
l:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.d(t,b)
u.replaceChild(c,t[b])},
gU:function(a){var u=this.a.childNodes
return new W.d3(u,u.length)},
gm:function(a){return this.a.childNodes.length},
h:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$ar:function(){return[W.E]},
$ax:function(){return[W.E]},
$aj:function(){return[W.E]},
$ao:function(){return[W.E]}}
W.E.prototype={
i4:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
i8:function(a,b){var u,t
try{u=a.parentNode
J.mN(u,b,a)}catch(t){H.af(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.ea(a):u},
fN:function(a,b,c){return a.replaceChild(b,c)},
$iE:1}
W.di.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.E]},
$iB:1,
$aB:function(){return[W.E]},
$ax:function(){return[W.E]},
$ij:1,
$aj:function(){return[W.E]},
$io:1,
$ao:function(){return[W.E]}}
W.az.prototype={$iaz:1,
gm:function(a){return a.length}}
W.hD.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.az]},
$iB:1,
$aB:function(){return[W.az]},
$ax:function(){return[W.az]},
$ij:1,
$aj:function(){return[W.az]},
$io:1,
$ao:function(){return[W.az]}}
W.hO.prototype={
h:function(a,b){return P.aX(a.get(b))},
G:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aX(u.value[1]))}},
ga_:function(a){var u=H.b([],[P.h])
this.G(a,new W.hP(u))
return u},
gm:function(a){return a.size},
l:function(a,b,c){throw H.c(P.y("Not supported"))},
$aa1:function(){return[P.h,null]},
$iQ:1,
$aQ:function(){return[P.h,null]}}
W.hP.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hR.prototype={
gm:function(a){return a.length}}
W.aB.prototype={$iaB:1}
W.i1.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.aB]},
$iB:1,
$aB:function(){return[W.aB]},
$ax:function(){return[W.aB]},
$ij:1,
$aj:function(){return[W.aB]},
$io:1,
$ao:function(){return[W.aB]}}
W.aC.prototype={$iaC:1}
W.i2.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.aC]},
$iB:1,
$aB:function(){return[W.aC]},
$ax:function(){return[W.aC]},
$ij:1,
$aj:function(){return[W.aC]},
$io:1,
$ao:function(){return[W.aC]}}
W.aD.prototype={$iaD:1,
gm:function(a){return a.length}}
W.i6.prototype={
h:function(a,b){return a.getItem(b)},
l:function(a,b,c){a.setItem(b,c)},
G:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga_:function(a){var u=H.b([],[P.h])
this.G(a,new W.i7(u))
return u},
gm:function(a){return a.length},
$aa1:function(){return[P.h,P.h]},
$iQ:1,
$aQ:function(){return[P.h,P.h]}}
W.i7.prototype={
$2:function(a,b){return this.a.push(a)}}
W.an.prototype={$ian:1}
W.dz.prototype={
ac:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bu(a,b,c,d)
u=W.n3("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.a3(t).aa(0,new W.a3(u))
return t}}
W.ia.prototype={
ac:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bu(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.E.ac(u.createElement("table"),b,c,d)
u.toString
u=new W.a3(u)
s=u.gaI(u)
s.toString
u=new W.a3(s)
r=u.gaI(u)
t.toString
r.toString
new W.a3(t).aa(0,new W.a3(r))
return t}}
W.ib.prototype={
ac:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bu(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.E.ac(u.createElement("table"),b,c,d)
u.toString
u=new W.a3(u)
s=u.gaI(u)
t.toString
s.toString
new W.a3(t).aa(0,new W.a3(s))
return t}}
W.ck.prototype={$ick:1}
W.aE.prototype={$iaE:1}
W.ao.prototype={$iao:1}
W.ie.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.ao]},
$iB:1,
$aB:function(){return[W.ao]},
$ax:function(){return[W.ao]},
$ij:1,
$aj:function(){return[W.ao]},
$io:1,
$ao:function(){return[W.ao]}}
W.ig.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.aE]},
$iB:1,
$aB:function(){return[W.aE]},
$ax:function(){return[W.aE]},
$ij:1,
$aj:function(){return[W.aE]},
$io:1,
$ao:function(){return[W.aE]}}
W.im.prototype={
gm:function(a){return a.length}}
W.aF.prototype={$iaF:1}
W.bD.prototype={$ibD:1}
W.ir.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.aF]},
$iB:1,
$aB:function(){return[W.aF]},
$ax:function(){return[W.aF]},
$ij:1,
$aj:function(){return[W.aF]},
$io:1,
$ao:function(){return[W.aF]}}
W.is.prototype={
gm:function(a){return a.length}}
W.bg.prototype={}
W.iO.prototype={
i:function(a){return String(a)}}
W.j5.prototype={
gm:function(a){return a.length}}
W.bj.prototype={
ghp:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.y("deltaY is not supported"))},
gho:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.y("deltaX is not supported"))},
$ibj:1}
W.ct.prototype={
fO:function(a,b){return a.requestAnimationFrame(H.bO(b,1))},
eG:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.je.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.H]},
$iB:1,
$aB:function(){return[W.H]},
$ax:function(){return[W.H]},
$ij:1,
$aj:function(){return[W.H]},
$io:1,
$ao:function(){return[W.H]}}
W.dS.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
p:function(a,b){var u
if(b==null)return!1
u=J.O(b)
return!!u.$ia8&&a.left===u.gbm(b)&&a.top===u.gbp(b)&&a.width===u.gaH(b)&&a.height===u.gaB(b)},
gI:function(a){return W.m_(C.d.gI(a.left),C.d.gI(a.top),C.d.gI(a.width),C.d.gI(a.height))},
gaB:function(a){return a.height},
gaH:function(a){return a.width}}
W.jj.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.au]},
$iB:1,
$aB:function(){return[W.au]},
$ax:function(){return[W.au]},
$ij:1,
$aj:function(){return[W.au]},
$io:1,
$ao:function(){return[W.au]}}
W.ea.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.E]},
$iB:1,
$aB:function(){return[W.E]},
$ax:function(){return[W.E]},
$ij:1,
$aj:function(){return[W.E]},
$io:1,
$ao:function(){return[W.E]}}
W.jx.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.aD]},
$iB:1,
$aB:function(){return[W.aD]},
$ax:function(){return[W.aD]},
$ij:1,
$aj:function(){return[W.aD]},
$io:1,
$ao:function(){return[W.aD]}}
W.jC.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.an]},
$iB:1,
$aB:function(){return[W.an]},
$ax:function(){return[W.an]},
$ij:1,
$aj:function(){return[W.an]},
$io:1,
$ao:function(){return[W.an]}}
W.jc.prototype={
G:function(a,b){var u,t,s,r,q
for(u=this.ga_(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.m)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga_:function(a){var u,t,s,r=this.a.attributes,q=H.b([],[P.h])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.d(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q},
$aa1:function(){return[P.h,P.h]},
$aQ:function(){return[P.h,P.h]}}
W.jg.prototype={
h:function(a,b){return this.a.getAttribute(b)},
l:function(a,b,c){this.a.setAttribute(b,c)},
gm:function(a){return this.ga_(this).length}}
W.jh.prototype={}
W.ji.prototype={
$1:function(a){return this.a.$1(a)}}
W.cu.prototype={
el:function(a){var u
if($.cv.ghJ($.cv)){for(u=0;u<262;++u)$.cv.l(0,C.Y[u],W.p4())
for(u=0;u<12;++u)$.cv.l(0,C.o[u],W.p5())}},
aO:function(a){return $.mJ().D(0,W.bY(a))},
ap:function(a,b,c){var u=$.cv.h(0,H.e(W.bY(a))+"::"+b)
if(u==null)u=$.cv.h(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$iaS:1}
W.K.prototype={
gU:function(a){return new W.d3(a,this.gm(a))}}
W.dj.prototype={
aO:function(a){return C.b.cZ(this.a,new W.hv(a))},
ap:function(a,b,c){return C.b.cZ(this.a,new W.hu(a,b,c))},
$iaS:1}
W.hv.prototype={
$1:function(a){return a.aO(this.a)}}
W.hu.prototype={
$1:function(a){return a.ap(this.a,this.b,this.c)}}
W.ei.prototype={
eo:function(a,b,c,d){var u,t,s
this.a.aa(0,c)
u=b.bs(0,new W.ju())
t=b.bs(0,new W.jv())
this.b.aa(0,u)
s=this.c
s.aa(0,C.y)
s.aa(0,t)},
aO:function(a){return this.a.D(0,W.bY(a))},
ap:function(a,b,c){var u=this,t=W.bY(a),s=u.c
if(s.D(0,H.e(t)+"::"+b))return u.d.ha(c)
else if(s.D(0,"*::"+b))return u.d.ha(c)
else{s=u.b
if(s.D(0,H.e(t)+"::"+b))return!0
else if(s.D(0,"*::"+b))return!0
else if(s.D(0,H.e(t)+"::*"))return!0
else if(s.D(0,"*::*"))return!0}return!1},
$iaS:1}
W.ju.prototype={
$1:function(a){return!C.b.D(C.o,a)}}
W.jv.prototype={
$1:function(a){return C.b.D(C.o,a)}}
W.jF.prototype={
ap:function(a,b,c){if(this.ed(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.D(0,b)
return!1}}
W.jG.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)}}
W.jD.prototype={
aO:function(a){var u=J.O(a)
if(!!u.$ich)return!1
u=!!u.$ik
if(u&&W.bY(a)==="foreignObject")return!1
if(u)return!0
return!1},
ap:function(a,b,c){if(b==="is"||C.a.a3(b,"on"))return!1
return this.aO(a)},
$iaS:1}
W.d3.prototype={
t:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.bT(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gC:function(a){return this.d}}
W.aS.prototype={}
W.js.prototype={}
W.eB.prototype={
cl:function(a){new W.jQ(this).$2(a,null)},
aY:function(a,b){if(b==null)J.lf(a)
else b.removeChild(a)},
fT:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
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
p=u?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.af(r)}t="element unprintable"
try{t=J.a4(a)}catch(r){H.af(r)}try{s=W.bY(a)
this.fS(a,b,p,t,s,o,n)}catch(r){if(H.af(r) instanceof P.aj)throw r
else{this.aY(a,b)
window
q="Removing corrupted element "+H.e(t)
if(typeof console!="undefined")window.console.warn(q)}}},
fS:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=this
if(c){p.aY(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!p.a.aO(a)){p.aY(a,b)
window
u="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!p.a.ap(a,"is",g)){p.aY(a,b)
window
u="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga_(f)
t=H.b(u.slice(0),[H.aJ(u,0)])
for(s=f.ga_(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.d(t,s)
r=t[s]
if(!p.a.ap(a,J.mU(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.e(e)+" "+r+'="'+H.e(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.O(a).$ick)p.cl(a.content)}}
W.jQ.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.fT(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aY(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.af(s)
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
W.dZ.prototype={}
W.e_.prototype={}
W.e0.prototype={}
W.e1.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.ef.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.cA.prototype={}
W.cB.prototype={}
W.ej.prototype={}
W.ek.prototype={}
W.eo.prototype={}
W.er.prototype={}
W.es.prototype={}
W.cC.prototype={}
W.cD.prototype={}
W.eu.prototype={}
W.ev.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
W.eL.prototype={}
P.jy.prototype={
c4:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
t.push(a)
this.b.push(null)
return s},
br:function(a){var u,t,s,r,q,p=this,o={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.O(a)
if(!!u.$iac)return new Date(a.a)
if(!!u.$inA)throw H.c(P.iF("structured clone of RegExp"))
if(!!u.$ial)return a
if(!!u.$ibn)return a
if(!!u.$ic_)return a
if(!!u.$iaP)return a
if(!!u.$icb||!!u.$ibc||!!u.$ica)return a
if(!!u.$iQ){t=p.c4(a)
s=p.b
r=s.length
if(t>=r)return H.d(s,t)
q=o.a=s[t]
if(q!=null)return q
q={}
o.a=q
if(t>=r)return H.d(s,t)
s[t]=q
u.G(a,new P.jA(o,p))
return o.a}if(!!u.$io){t=p.c4(a)
o=p.b
if(t>=o.length)return H.d(o,t)
q=o[t]
if(q!=null)return q
return p.hl(a,t)}if(!!u.$inb){t=p.c4(a)
u=p.b
s=u.length
if(t>=s)return H.d(u,t)
q=o.b=u[t]
if(q!=null)return q
q={}
o.b=q
if(t>=s)return H.d(u,t)
u[t]=q
p.hE(a,new P.jB(o,p))
return o.b}throw H.c(P.iF("structured clone of other type"))},
hl:function(a,b){var u,t=J.aq(a),s=t.gm(a),r=new Array(s),q=this.b
if(b>=q.length)return H.d(q,b)
q[b]=r
if(typeof s!=="number")return H.v(s)
u=0
for(;u<s;++u){q=this.br(t.h(a,u))
if(u>=r.length)return H.d(r,u)
r[u]=q}return r}}
P.jA.prototype={
$2:function(a,b){this.a.a[a]=this.b.br(b)},
$S:3}
P.jB.prototype={
$2:function(a,b){this.a.b[a]=this.b.br(b)},
$S:3}
P.ey.prototype={$iaP:1,
gd7:function(a){return this.a}}
P.k0.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.jz.prototype={
hE:function(a,b){var u,t,s,r
for(u=Object.keys(a),t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,a[r])}}}
P.fv.prototype={
gbe:function(){var u=this.b,t=H.l2(u,"x",0)
return new H.c6(new H.cs(u,new P.fw(),[t]),new P.fx(),[t,W.P])},
l:function(a,b,c){var u=this.gbe()
J.mS(u.b.$1(J.eP(u.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gm:function(a){return J.ag(this.gbe().a)},
h:function(a,b){var u=this.gbe()
return u.b.$1(J.eP(u.a,b))},
gU:function(a){var u=P.kK(this.gbe(),!1,W.P)
return new J.ab(u,u.length)},
$ar:function(){return[W.P]},
$ax:function(){return[W.P]},
$aj:function(){return[W.P]},
$ao:function(){return[W.P]}}
P.fw.prototype={
$1:function(a){return!!J.O(a).$iP}}
P.fx.prototype={
$1:function(a){return H.l(a,"$iP")}}
P.jo.prototype={
gci:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.v(t)
return u+t},
gd4:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.v(t)
return u+t},
i:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
p:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.O(b)
if(!!u.$ia8){t=q.a
if(t==u.gbm(b)){s=q.b
if(s==u.gbp(b)){r=q.c
if(typeof t!=="number")return t.B()
if(typeof r!=="number")return H.v(r)
if(t+r===u.gci(b)){t=q.d
if(typeof s!=="number")return s.B()
if(typeof t!=="number")return H.v(t)
u=s+t===u.gd4(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gI:function(a){var u=this,t=u.a,s=J.cO(t),r=u.b,q=J.cO(r),p=u.c
if(typeof t!=="number")return t.B()
if(typeof p!=="number")return H.v(p)
p=C.c.gI(t+p)
t=u.d
if(typeof r!=="number")return r.B()
if(typeof t!=="number")return H.v(t)
t=C.c.gI(r+t)
return P.o0(P.jl(P.jl(P.jl(P.jl(0,s),q),p),t))}}
P.a8.prototype={
gbm:function(a){return this.a},
gbp:function(a){return this.b},
gaH:function(a){return this.c},
gaB:function(a){return this.d}}
P.aQ.prototype={$iaQ:1}
P.fQ.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$ir:1,
$ar:function(){return[P.aQ]},
$ax:function(){return[P.aQ]},
$ij:1,
$aj:function(){return[P.aQ]},
$io:1,
$ao:function(){return[P.aQ]}}
P.aT.prototype={$iaT:1}
P.hy.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$ir:1,
$ar:function(){return[P.aT]},
$ax:function(){return[P.aT]},
$ij:1,
$aj:function(){return[P.aT]},
$io:1,
$ao:function(){return[P.aT]}}
P.hG.prototype={
gm:function(a){return a.length}}
P.ch.prototype={$ich:1}
P.i9.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$ir:1,
$ar:function(){return[P.h]},
$ax:function(){return[P.h]},
$ij:1,
$aj:function(){return[P.h]},
$io:1,
$ao:function(){return[P.h]}}
P.k.prototype={
gbT:function(a){return new P.fv(a,new W.a3(a))},
ac:function(a,b,c,d){var u,t,s,r,q,p=H.b([],[W.aS])
p.push(W.lZ(null))
p.push(W.m0())
p.push(new W.jD())
c=new W.eB(new W.dj(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.q).hm(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.a3(s)
q=p.gaI(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ik:1}
P.aV.prototype={$iaV:1}
P.it.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$ir:1,
$ar:function(){return[P.aV]},
$ax:function(){return[P.aV]},
$ij:1,
$aj:function(){return[P.aV]},
$io:1,
$ao:function(){return[P.aV]}}
P.e2.prototype={}
P.e3.prototype={}
P.ed.prototype={}
P.ee.prototype={}
P.ep.prototype={}
P.eq.prototype={}
P.ew.prototype={}
P.ex.prototype={}
P.bE.prototype={$ir:1,
$ar:function(){return[P.w]},
$ij:1,
$aj:function(){return[P.w]},
$io:1,
$ao:function(){return[P.w]}}
P.eU.prototype={
gm:function(a){return a.length}}
P.eV.prototype={
h:function(a,b){return P.aX(a.get(b))},
G:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aX(u.value[1]))}},
ga_:function(a){var u=H.b([],[P.h])
this.G(a,new P.eW(u))
return u},
gm:function(a){return a.size},
l:function(a,b,c){throw H.c(P.y("Not supported"))},
$aa1:function(){return[P.h,null]},
$iQ:1,
$aQ:function(){return[P.h,null]}}
P.eW.prototype={
$2:function(a,b){return this.a.push(a)}}
P.eX.prototype={
gm:function(a){return a.length}}
P.bm.prototype={}
P.hz.prototype={
gm:function(a){return a.length}}
P.dQ.prototype={}
P.dq.prototype={
ie:function(a,b,c,d,e,f,g){var u,t=J.O(g)
if(!!t.$iaP)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.oV(g))
return}if(!!t.$ic2)t=!0
else t=!1
if(t){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.cP("Incorrect number or type of arguments"))}}
P.i4.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return P.aX(a.item(b))},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$ir:1,
$ar:function(){return[[P.Q,,,]]},
$ax:function(){return[[P.Q,,,]]},
$ij:1,
$aj:function(){return[[P.Q,,,]]},
$io:1,
$ao:function(){return[[P.Q,,,]]}}
P.el.prototype={}
P.em.prototype={}
K.aL.prototype={
aC:function(a,b){return!0},
i:function(a){return"all"}}
K.d4.prototype={
aC:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)if(u[s].aC(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.m)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s}}
K.ba.prototype={}
K.a6.prototype={
aC:function(a,b){return!this.e9(0,b)},
i:function(a){return"!["+this.co(0)+"]"}}
K.hJ.prototype={
aC:function(a,b){if(typeof b!=="number")return H.v(b)
return this.a<=b&&this.b>=b},
i:function(a){var u=H.bB(this.a),t=H.bB(this.b)
return u+".."+t}}
K.hS.prototype={
eh:function(a){var u,t,s,r
if(a.a.length<=0)throw H.c(P.u("May not create a Set with zero characters."))
u=P.w
t=new H.I([u,P.aI])
for(s=new H.b9(a,a.gm(a));s.t();)t.l(0,s.d,!0)
r=P.kK(t.ga_(t),!0,u)
C.b.e7(r)
this.a=r},
aC:function(a,b){return C.b.D(this.a,b)},
i:function(a){return P.cj(this.a,0,null)}}
L.dw.prototype={
j:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new L.dH(this.a.k(0,b))
r.a=H.b([],[K.ba])
r.c=!1
this.c.push(r)
return r},
hz:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
if(r.aC(0,a))return r}return},
i:function(a){return this.b},
cS:function(){var u,t,s,r,q,p=this,o="("+p.b+")",n=p.d
if(n!=null){n=n.b
o+=" => ["+n+"]"
u=p.a
if(u.c.D(0,n))o+=" (consume)"
for(n=p.d.c,n=n.ga_(n),n=n.gU(n);n.t();){t=n.gC(n)
o+="\n"
s=p.d.c.h(0,t)
t=o+("  -- "+H.e(t)+" => ["+H.e(s)+"]")
o=u.c.D(0,s)?t+" (consume)":t}}for(n=p.c,u=n.length,r=0;r<n.length;n.length===u||(0,H.m)(n),++r){q=n[r]
o=o+"\n"+("  -- "+q.i(0))}return o.charCodeAt(0)==0?o:o}}
L.dE.prototype={
i:function(a){var u=H.l8(this.b,"\n","\\n"),t=H.l8(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
L.dF.prototype={
aE:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.m)(c),++t){s=c[t]
this.c.l(0,s,b)}},
i:function(a){return this.b}}
L.io.prototype={
k:function(a,b){var u=this.a.h(0,b)
if(u==null){u=new L.dw(this,b)
u.c=H.b([],[L.dH])
this.a.l(0,b,u)}return u},
R:function(a){var u,t=this.b.h(0,a)
if(t==null){t=new L.dF(a)
u=P.h
t.c=new H.I([u,u])
this.b.l(0,a,t)}return t},
cj:function(a){return this.ik(a)},
ik:function(a){var u=this
return P.on(function(){var t=a
var s=0,r=1,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
return function $async$cj(b,a0){if(b===1){q=a0
s=r}while(true)switch(s){case 0:g=u.d
f=[P.w]
e=H.b([],f)
d=H.b([],f)
c=H.b([],f)
p=null,o=0,n=0,m=0
case 2:if(!!0){s=3
break}if(c.length!==0)l=C.b.ce(c,0)
else{if(!t.t()){s=3
break}l=t.d}d.push(l);++o
k=g.hz(l)
s=k==null?4:6
break
case 4:if(p==null){j=P.cj(d,0,null)
throw H.c(P.u("Untokenizable string [state: "+g.b+", index "+o+']: "'+j+'"'))}if(!!d.fixed$length)H.q(P.y("removeRange"))
P.aU(0,m,d.length)
d.splice(0,m-0)
C.b.aa(c,d)
d=H.b([],f)
e=H.b([],f)
g=u.d
s=!u.c.D(0,p.a)?7:8
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
if(g.d!=null){j=P.cj(e,0,null)
i=g.d
h=i.c.h(0,j)
p=new L.dE(h==null?i.b:h,j,o)
m=d.length
n=o}case 5:s=2
break
case 3:s=p!=null&&!u.c.D(0,p.a)?10:11
break
case 10:s=12
return p
case 12:case 11:return P.nZ()
case 1:return P.o_(q)}}},L.dE)},
i:function(a){var u,t=new P.R(""),s=this.d
if(s!=null)t.a=s.cS()+"\n"
for(s=this.a,s=s.gim(s),s=s.gU(s);s.t();){u=s.gC(s)
if(u!=this.d)t.a+=u.cS()+"\n"}s=t.a
return s.charCodeAt(0)==0?s:s}}
L.dH.prototype={
i:function(a){return this.b.b+": "+this.co(0)}}
O.b3.prototype={
bv:function(a){this.a=H.b([],[a])
this.c=this.b=null},
cm:function(a,b,c){this.b=b
this.c=a},
ba:function(a,b){return this.cm(a,null,b)},
fv:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
ek:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gm:function(a){return this.a.length},
gU:function(a){var u=this.a
return new J.ab(u,u.length)},
J:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
n:function(a,b){var u,t,s=this,r=[H.l2(s,"b3",0)]
if(s.fv(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.ek(t,H.b([b],r))}},
$ij:1}
O.c9.prototype={
gm:function(a){return this.a.length},
gA:function(){var u=this.b
return u==null?this.b=D.N():u},
aJ:function(){var u=this.b
if(u!=null)u.K(null)},
ga0:function(a){var u=this.a
if(u.length>0)return C.b.gas(u)
else return V.de()},
dP:function(a){var u=this.a
if(a==null)u.push(V.de())
else u.push(a)
this.aJ()},
cb:function(){var u=this.a
if(u.length>0){u.pop()
this.aJ()}}}
E.f0.prototype={}
E.aO.prototype={
sai:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gA().M(0,s.gdJ())
u=s.c
if(u!=null)u.gA().n(0,s.gdJ())
t=new D.C("shape",r,s.c)
t.b=!0
s.aD(t)}},
sae:function(a){var u,t,s=this
if(!J.D(s.r,a)){u=s.r
if(u!=null)u.gA().M(0,s.gdH())
if(a!=null)a.gA().n(0,s.gdH())
s.r=a
t=new D.C("mover",u,a)
t.b=!0
s.aD(t)}},
aG:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.au(0,b,s):null
if(!J.D(q,s.x)){u=s.x
s.x=q
t=new D.C("matrix",u,q)
t.b=!0
s.aD(t)}for(r=s.y.a,r=new J.ab(r,r.length);r.t();)r.d.aG(0,b)},
aS:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)s.a.push(s.ga0(s))
else s.a.push(r.w(0,s.ga0(s)))
s.aJ()
a.dQ(t.f)
s=a.dy
u=(s&&C.b).gas(s)
if(u!=null&&t.d!=null)u.i7(a,t)
for(s=t.y.a,s=new J.ab(s,s.length);s.t();)s.d.aS(a)
a.dO()
a.dx.cb()},
aD:function(a){var u=this.z
if(u!=null)u.K(a)},
Z:function(){return this.aD(null)},
dK:function(a){this.e=null
this.aD(a)},
hV:function(){return this.dK(null)},
dI:function(a){this.aD(a)},
hU:function(){return this.dI(null)},
dG:function(a){this.aD(a)},
hR:function(){return this.dG(null)},
hQ:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gdF(),s=[{func:1,ret:-1,args:[D.Z]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bt()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.Z()},
hT:function(a,b){var u,t
for(u=b.gU(b),t=this.gdF();u.t();)u.gC(u).gA().M(0,t)
this.Z()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.bp.prototype={
i:function(a){return this.b}}
E.bz.prototype={
i:function(a){return this.b}}
E.dX.prototype={}
E.hK.prototype={
eg:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.ac(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.c9()
t=[V.aR]
u.a=H.b([],t)
u.gA().n(0,new E.hL(s))
s.cy=u
u=new O.c9()
u.a=H.b([],t)
u.gA().n(0,new E.hM(s))
s.db=u
u=new O.c9()
u.a=H.b([],t)
u.gA().n(0,new E.hN(s))
s.dx=u
u=H.b([],[O.dA])
s.dy=u
u.push(null)
s.fr=new H.I([P.h,A.ds])},
gi3:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga0(s)
u=t.db
u=t.z=s.w(0,u.ga0(u))
s=u}return s},
dQ:function(a){var u=this.dy
u.push(a==null?(u&&C.b).gas(u):a)},
dO:function(){var u=this.dy
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
E.dx.prototype={}
E.dC.prototype={
ct:function(a){this.dS()},
cs:function(){return this.ct(null)},
ghF:function(){var u,t=this,s=Date.now(),r=C.c.a4(P.ln(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.ac(s,!1)
return u/r},
cN:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.w()
if(typeof r!=="number")return H.v(r)
u=C.d.c6(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.w()
t=C.d.c6(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.lK(C.m,s.gi9())}},
dS:function(){if(!this.cx){this.cx=!0
var u=window
C.G.eG(u)
C.G.fO(u,W.mb(new E.il(this),P.aa))}},
i6:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.cN()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ac(r,!1)
s.y=P.ln(r-s.r.a).a*0.000001
r=s.cy
C.b.sm(r.a,0)
r.aJ()
r=s.db
C.b.sm(r.a,0)
r.aJ()
r=s.dx
C.b.sm(r.a,0)
r.aJ()
r=s.dy;(r&&C.b).sm(r,0)
s.dy.push(null)
o.aS(p.e)}s=p.Q
if(s!=null)s.K(null)}catch(q){u=H.af(q)
t=H.l3(q)
P.l7("Error: "+H.e(u))
P.l7("Stack: "+H.e(t))
throw H.c(u)}}}
E.il.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.i6()}}}
Z.dO.prototype={}
Z.cS.prototype={
bP:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.af(s)
t=P.u('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.e(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.j6.prototype={}
Z.cT.prototype={
aR:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bP:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].bP(a)},
il:function(a){var u,t,s
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
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)p.push(u[s].i(0))
r=H.b([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a4(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.j(p,", ")+"\nAttrs:   "+C.b.j(r,", ")}}
Z.bu.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.cg(this.c))+"'")+"]"}}
Z.aW.prototype={
gcn:function(a){var u=this.a,t=(u&$.b0().a)!==0?3:0
if((u&$.b_().a)!==0)t+=3
if((u&$.aZ().a)!==0)t+=3
if((u&$.b1().a)!==0)t+=2
if((u&$.bl().a)!==0)t+=3
if((u&$.cL().a)!==0)t+=3
if((u&$.cM().a)!==0)t+=4
if((u&$.bS().a)!==0)++t
return(u&$.aY().a)!==0?t+4:t},
hb:function(a){var u,t=$.b0(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.b_()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aZ()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b1()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bl()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cL()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cM()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bS()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aY()
if((s&t.a)!==0)if(u===a)return t
return $.mH()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aW))return!1
return this.a===b.a},
i:function(a){var u=H.b([],[P.h]),t=this.a
if((t&$.b0().a)!==0)u.push("Pos")
if((t&$.b_().a)!==0)u.push("Norm")
if((t&$.aZ().a)!==0)u.push("Binm")
if((t&$.b1().a)!==0)u.push("Txt2D")
if((t&$.bl().a)!==0)u.push("TxtCube")
if((t&$.cL().a)!==0)u.push("Clr3")
if((t&$.cM().a)!==0)u.push("Clr4")
if((t&$.bS().a)!==0)u.push("Weight")
if((t&$.aY().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.b.j(u,"|")}}
D.f3.prototype={}
D.bt.prototype={
n:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.Z]}]):u).push(b)},
M:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.b.D(s,b)
if(s===!0){s=t.a
u=(s&&C.b).M(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.b.D(s,b)
if(s===!0){s=t.b
u=(s&&C.b).M(s,b)||u}return u},
K:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.b.G(P.kK(u,!0,{func:1,ret:-1,args:[D.Z]}),new D.fr(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.Z]}])
C.b.G(u,new D.fs(q))}return!0},
hv:function(){return this.K(null)},
ag:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.K(u)}}}}
D.fr.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.fs.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.Z.prototype={}
D.bv.prototype={}
D.bw.prototype={}
D.C.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cU.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cU))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.d9.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d9))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.fP.prototype={
i_:function(a){this.d.n(0,a.a)
return!1},
hW:function(a){this.d.M(0,a.a)
return!1}}
X.dc.prototype={}
X.fY.prototype={
aW:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.w()
u=b.b
t=q.ch
if(typeof u!=="number")return u.w()
s=new V.a7(o.a+n*m,o.b+u*t)
t=q.a.gbh()
r=new X.bb(a,V.be(),q.x,t,s)
r.b=!0
q.z=new P.ac(p,!1)
q.x=s
return r},
ca:function(a,b){this.r=a.a
return!1},
b6:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.e3()
if(typeof u!=="number")return u.a7()
this.r=(u&~t)>>>0
return!1},
b5:function(a,b){var u=this.d
if(u==null)return!1
u.K(this.aW(a,b))
return!0},
i0:function(a){return!1},
fj:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dc(c,r.a.gbh(),b)
s.b=!0
t.K(s)
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
X.ho.prototype={
bB:function(a,b,c){var u=this,t=new P.ac(Date.now(),!1),s=u.a.gbh(),r=new X.bb(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
ca:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.K(this.bB(a,b,!0))
return!0},
b6:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.e3()
if(typeof t!=="number")return t.a7()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.K(u.bB(a,b,!0))
return!0},
b5:function(a,b){var u=this.d
if(u==null)return!1
u.K(this.bB(a,b,!1))
return!0},
i1:function(a,b){return!1}}
X.hF.prototype={}
X.dG.prototype={}
X.iq.prototype={
aW:function(a,b){var u=this,t=new P.ac(Date.now(),!1),s=a.length>0?a[0]:V.be(),r=u.a.gbh(),q=new X.dG(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
hZ:function(a){var u=this.b
if(u==null)return!1
u.K(this.aW(a,!0))
return!0},
hX:function(a){var u=this.c
if(u==null)return!1
u.K(this.aW(a,!0))
return!0},
hY:function(a){var u=this.d
if(u==null)return!1
u.K(this.aW(a,!1))
return!0}}
X.dL.prototype={
gbh:function(){var u=this.a,t=C.i.gd5(u).c
t.toString
u=C.i.gd5(u).d
u.toString
return V.lE(0,0,t,u)},
cD:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.d9(u,new X.by(t,a.altKey,a.shiftKey))},
aM:function(a){a.shiftKey},
bL:function(a){a.shiftKey},
az:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.N()
u=t.top
if(typeof r!=="number")return r.N()
return new V.a7(s-q,r-u)},
aX:function(a){return new V.U(a.movementX,a.movementY)},
bG:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.a7])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
q=C.d.ak(r.pageX)
C.d.ak(r.pageY)
p=o.left
C.d.ak(r.pageX)
n.push(new V.a7(q-p,C.d.ak(r.pageY)-o.top))}return n},
ax:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cU(u,new X.by(t,a.altKey,a.shiftKey))},
bC:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.N()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.N()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fd:function(a){this.f=!0},
f1:function(a){this.f=!1},
f7:function(a){if(this.f&&this.bC(a))a.preventDefault()},
fh:function(a){var u
if(!this.f)return
u=this.cD(a)
this.b.i_(u)},
ff:function(a){var u
if(!this.f)return
u=this.cD(a)
this.b.hW(u)},
fl:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aM(a)
if(r.x){u=r.ax(a)
t=r.aX(a)
if(r.d.ca(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.ax(a)
s=r.az(a)
if(r.c.ca(u,s))a.preventDefault()},
fp:function(a){var u,t,s,r=this
r.aM(a)
u=r.ax(a)
if(r.x){t=r.aX(a)
if(r.d.b6(u,t))a.preventDefault()
return}if(r.r)return
s=r.az(a)
if(r.c.b6(u,s))a.preventDefault()},
fb:function(a){var u,t,s,r=this
if(!r.bC(a)){r.aM(a)
u=r.ax(a)
if(r.x){t=r.aX(a)
if(r.d.b6(u,t))a.preventDefault()
return}if(r.r)return
s=r.az(a)
if(r.c.b6(u,s))a.preventDefault()}},
fn:function(a){var u,t,s,r=this
r.aM(a)
u=r.ax(a)
if(r.x){t=r.aX(a)
if(r.d.b5(u,t))a.preventDefault()
return}if(r.r)return
s=r.az(a)
if(r.c.b5(u,s))a.preventDefault()},
f9:function(a){var u,t,s,r=this
if(!r.bC(a)){r.aM(a)
u=r.ax(a)
if(r.x){t=r.aX(a)
if(r.d.b5(u,t))a.preventDefault()
return}if(r.r)return
s=r.az(a)
if(r.c.b5(u,s))a.preventDefault()}},
fs:function(a){var u,t,s=this
s.aM(a)
u=new V.U((a&&C.F).gho(a),C.F.ghp(a)).w(0,s.Q)
if(s.x){if(s.d.i0(u))a.preventDefault()
return}if(s.r)return
t=s.az(a)
if(s.c.i1(u,t))a.preventDefault()},
fu:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ax(s.y)
t=s.az(s.y)
s.d.fj(u,t,r)}},
fJ:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bL(a)
u=t.bG(a)
if(t.e.hZ(u))a.preventDefault()},
fF:function(a){var u
this.bL(a)
u=this.bG(a)
if(this.e.hX(u))a.preventDefault()},
fH:function(a){var u
this.bL(a)
u=this.bG(a)
if(this.e.hY(u))a.preventDefault()}}
D.eY.prototype={$ia5:1}
D.br.prototype={
av:function(a){var u=this.r
if(u!=null)u.K(a)},
em:function(){return this.av(null)},
sae:function(a){var u,t,s=this
if(!J.D(s.b,a)){u=s.b
if(u!=null)u.gA().M(0,s.gcu())
t=s.b
s.b=a
if(a!=null)a.gA().n(0,s.gcu())
u=new D.C("mover",t,s.b)
u.b=!0
s.av(u)}},
sab:function(a,b){var u,t,s=this
if(b==null)b=new V.W(1,1,1)
if(!s.c.p(0,b)){u=s.c
s.c=b
t=new D.C("color",u,b)
t.b=!0
s.av(t)}},
$ia5:1}
D.a5.prototype={}
D.da.prototype={
av:function(a){var u=this.y
if(u!=null)u.K(a)},
cL:function(a){var u=this.z
if(u!=null)u.K(a)},
fi:function(){return this.cL(null)},
fz:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.m)(a),++t){s=a[t]
if(s==null||this.eA(s))return!1}return!0},
eW:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcK(),s=[{func:1,ret:-1,args:[D.Z]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q instanceof D.br)this.f.push(q)
p=q.r
if(p==null){p=new D.bt()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}u=new D.bv()
u.b=!0
this.av(u)},
fD:function(a,b){var u,t,s
for(u=b.gU(b),t=this.gcK();u.t();){s=u.gC(u)
C.b.M(this.e,s)
s.gA().M(0,t)}u=new D.bw()
u.b=!0
this.av(u)},
eA:function(a){var u=C.b.D(this.f,a)
return u},
$aj:function(){return[D.a5]},
$ab3:function(){return[D.a5]}}
D.hE.prototype={$ia5:1}
D.i3.prototype={$ia5:1}
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
V.fq.prototype={}
V.c8.prototype={
a8:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.J])
return t},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.c8))return!1
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
i:function(a){var u,t,s,r,q=this,p=[P.J],o=V.bQ(H.b([q.a,q.d,q.r],p),3,0),n=V.bQ(H.b([q.b,q.e,q.x],p),3,0),m=V.bQ(H.b([q.c,q.f,q.y],p),3,0)
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
V.aR.prototype={
a8:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.J])
return t},
dz:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.A().a)return V.de()
u=1/b1
t=-n
s=-a0
return V.aw((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
w:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.aw(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bq:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.z(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
b8:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.T(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aR))return!1
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
i:function(a){return this.P()},
H:function(a){var u,t,s,r,q,p=this,o=[P.J],n=V.bQ(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.bQ(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.bQ(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.bQ(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
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
V.a7.prototype={
N:function(a,b){return new V.a7(this.a-b.a,this.b-b.b)},
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
V.T.prototype={
B:function(a,b){return new V.T(this.a+b.a,this.b+b.b,this.c+b.c)},
N:function(a,b){return new V.T(this.a-b.a,this.b-b.b,this.c-b.c)},
w:function(a,b){return new V.T(this.a*b,this.b*b,this.c*b)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.T))return!1
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
V.dp.prototype={
gat:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dp))return!1
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
c8:function(a){return Math.sqrt(this.E(this))},
E:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.w()
if(typeof r!=="number")return H.v(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.v(t)
return s*r+u*t},
w:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.w()
if(typeof b!=="number")return H.v(b)
u=this.b
if(typeof u!=="number")return u.w()
return new V.U(t*b,u*b)},
v:function(a,b){var u,t
if(Math.abs(b-0)<$.A().a){u=$.lS
return u==null?$.lS=new V.U(0,0):u}u=this.a
if(typeof u!=="number")return u.v()
t=this.b
if(typeof t!=="number")return t.v()
return new V.U(u/b,t/b)},
p:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
u=b.a
t=this.a
s=$.A()
s.toString
if(typeof u!=="number")return u.N()
if(typeof t!=="number")return H.v(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.N()
if(typeof t!=="number")return H.v(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+"]"}}
V.z.prototype={
c8:function(a){return Math.sqrt(this.E(this))},
E:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
c9:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.z(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aA:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.z(u*t-s*r,s*q-p*t,p*r-u*q)},
B:function(a,b){return new V.z(this.a+b.a,this.b+b.b,this.c+b.c)},
V:function(a){return new V.z(-this.a,-this.b,-this.c)},
w:function(a,b){return new V.z(this.a*b,this.b*b,this.c*b)},
v:function(a,b){if(Math.abs(b-0)<$.A().a)return V.cr()
return new V.z(this.a/b,this.b/b,this.c/b)},
dA:function(){var u=$.A().a
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
U.f5.prototype={
bw:function(a){var u=V.kt(a,this.c,this.b)
return u},
gA:function(){var u=this.y
return u==null?this.y=D.N():u},
T:function(a){var u=this.y
if(u!=null)u.K(a)},
se_:function(a,b){},
sdB:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.A().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bw(u)}s=new D.C("maximumLocation",s,t.b)
s.b=!0
t.T(s)}},
sdD:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.A().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bw(u)}s=new D.C("minimumLocation",s,t.c)
s.b=!0
t.T(s)}},
sa2:function(a,b){var u,t=this
b=t.bw(b)
u=t.d
if(!(Math.abs(u-b)<$.A().a)){t.d=b
u=new D.C("location",u,b)
u.b=!0
t.T(u)}},
sdC:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.A().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.C("maximumVelocity",r,a)
r.b=!0
s.T(r)}},
sY:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.A().a)){u.f=a
t=new D.C("velocity",t,a)
t.b=!0
u.T(t)}},
sd6:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.A().a)){this.x=a
u=new D.C("dampening",u,a)
u.b=!0
this.T(u)}},
aG:function(a,b){var u,t,s,r=this,q=r.f,p=$.A().a
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
u=s}r.sY(u)}}}
U.cW.prototype={
gA:function(){var u=this.b
return u==null?this.b=D.N():u},
au:function(a,b,c){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cW))return!1
return J.D(this.a,b.a)},
i:function(a){return"Constant: "+this.a.H("          ")}}
U.c0.prototype={
gA:function(){var u=this.e
return u==null?this.e=D.N():u},
T:function(a){var u=this.e
if(u!=null)u.K(a)},
am:function(){return this.T(null)},
eU:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gbc(),s=[{func:1,ret:-1,args:[D.Z]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.gA()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bv()
u.b=!0
this.T(u)},
fB:function(a,b){var u,t
for(u=b.gU(b),t=this.gbc();u.t();)u.gC(u).gA().M(0,t)
u=new D.bw()
u.b=!0
this.T(u)},
au:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.S()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.ab(r,r.length),u=null;r.t();){q=r.d
if(q!=null){t=q.au(0,b,c)
if(t!=null)u=u==null?t:t.w(0,u)}}s.f=u==null?V.de():u
r=s.e
if(r!=null)r.ag(0)}return s.f},
p:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.c0))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.d(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.d(r,t)
if(!J.D(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$aj:function(){return[U.am]},
$ab3:function(){return[U.am]},
$iam:1}
U.am.prototype={}
U.dr.prototype={
gA:function(){var u=this.y
return u==null?this.y=D.N():u},
T:function(a){var u=this.y
if(u!=null)u.K(a)},
se0:function(a){var u
a=V.kt(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.A().a)){this.a=a
u=new D.C("yaw",u,a)
u.b=!0
this.T(u)}},
sdN:function(a,b){var u
b=V.kt(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.A().a)){this.b=b
u=new D.C("pitch",u,b)
u.b=!0
this.T(u)}},
sdT:function(a){var u
a=V.kt(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.A().a)){this.c=a
u=new D.C("roll",u,a)
u.b=!0
this.T(u)}},
au:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(r<q){s.r=q
r=s.y
if(r!=null)++r.d
s.se0(s.a+s.d*b.y)
s.sdN(0,s.b+s.e*b.y)
s.sdT(s.c+s.f*b.y)
r=s.c
u=Math.cos(r)
t=Math.sin(r)
s.x=V.aw(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1).w(0,V.lu(s.b)).w(0,V.kM(s.a))
r=s.y
if(r!=null)r.ag(0)}return s.x},
p:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.dr))return!1
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
return"Rotator: ["+V.F(u.a,3,0)+", "+V.F(u.b,3,0)+", "+V.F(u.c,3,0)+"], ["+V.F(u.d,3,0)+", "+V.F(u.e,3,0)+", "+V.F(u.f,3,0)+"]"}}
U.dM.prototype={
gA:function(){var u=this.fx
return u==null?this.fx=D.N():u},
T:function(a){var u=this.fx
if(u!=null)u.K(a)},
am:function(){return this.T(null)},
hc:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
u=a.c
t=u.b
u=t==null?u.b=D.N():t
u.n(0,s.geN())
u=s.a.c
t=u.d
u=t==null?u.d=D.N():t
u.n(0,s.geP())
u=s.a.c
t=u.c
u=t==null?u.c=D.N():t
u.n(0,s.geR())
u=s.a.d
t=u.f
u=t==null?u.f=D.N():t
u.n(0,s.geI())
u=s.a.d
t=u.d
u=t==null?u.d=D.N():t
u.n(0,s.geK())
u=s.a.e
t=u.b
u=t==null?u.b=D.N():t
u.n(0,s.gh3())
u=s.a.e
t=u.d
u=t==null?u.d=D.N():t
u.n(0,s.gh1())
u=s.a.e
t=u.c
u=t==null?u.c=D.N():t
u.n(0,s.gh_())
return!0},
ao:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.V()
u=-u}if(this.r){if(typeof t!=="number")return t.V()
t=-t}return new V.U(u,t)},
eO:function(a){var u=this
H.l(a,"$ibb")
if(!J.D(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
eQ:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$ibb")
if(!n.cx)return
if(n.ch){u=a.d.N(0,a.y)
u=new V.U(u.a,u.b)
u=u.E(u)
t=n.Q
if(typeof t!=="number")return H.v(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.N(0,a.y)
u=n.ao(new V.U(t.a,t.b).w(0,2).v(0,u.gat()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.V()
s=n.y
if(typeof s!=="number")return H.v(s)
t.sY(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.V()
t=n.x
if(typeof t!=="number")return H.v(t)
s.sY(-u*10*t)}else{u=a.c
t=a.d
s=t.N(0,a.y)
r=n.ao(new V.U(s.a,s.b).w(0,2).v(0,u.gat()))
s=n.c
q=r.a
if(typeof q!=="number")return q.V()
p=n.y
if(typeof p!=="number")return H.v(p)
o=n.cy
if(typeof o!=="number")return H.v(o)
s.sa2(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.V()
q=n.x
if(typeof q!=="number")return H.v(q)
s=n.db
if(typeof s!=="number")return H.v(s)
o.sa2(0,-p*q+s)
n.b.sY(0)
n.c.sY(0)
t=t.N(0,a.z)
n.dx=n.ao(new V.U(t.a,t.b).w(0,2).v(0,u.gat()))}n.am()},
eS:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.E(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.V()
s=r.y
if(typeof s!=="number")return H.v(s)
u.sY(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.V()
u=r.x
if(typeof u!=="number")return H.v(u)
s.sY(-t*10*u)
r.am()}},
eJ:function(a){var u=this
if(H.l(a,"$idc").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
eL:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$ibb")
if(!J.D(n.d,a.x.b))return
u=a.c
t=a.d
s=t.N(0,a.y)
r=n.ao(new V.U(s.a,s.b).w(0,2).v(0,u.gat()))
s=n.c
q=r.a
if(typeof q!=="number")return q.V()
p=n.y
if(typeof p!=="number")return H.v(p)
o=n.cy
if(typeof o!=="number")return H.v(o)
s.sa2(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.V()
q=n.x
if(typeof q!=="number")return H.v(q)
s=n.db
if(typeof s!=="number")return H.v(s)
o.sa2(0,-p*q+s)
n.b.sY(0)
n.c.sY(0)
t=t.N(0,a.z)
n.dx=n.ao(new V.U(t.a,t.b).w(0,2).v(0,u.gat()))
n.am()},
h4:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
h2:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$idG")
if(!n.cx)return
if(n.ch){u=a.d.N(0,a.y)
u=new V.U(u.a,u.b)
u=u.E(u)
t=n.Q
if(typeof t!=="number")return H.v(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.N(0,a.y)
u=n.ao(new V.U(t.a,t.b).w(0,2).v(0,u.gat()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.V()
s=n.y
if(typeof s!=="number")return H.v(s)
t.sY(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.V()
t=n.x
if(typeof t!=="number")return H.v(t)
s.sY(-u*10*t)}else{u=a.c
t=a.d
s=t.N(0,a.y)
r=n.ao(new V.U(s.a,s.b).w(0,2).v(0,u.gat()))
s=n.c
q=r.a
if(typeof q!=="number")return q.V()
p=n.y
if(typeof p!=="number")return H.v(p)
o=n.cy
if(typeof o!=="number")return H.v(o)
s.sa2(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.V()
q=n.x
if(typeof q!=="number")return H.v(q)
s=n.db
if(typeof s!=="number")return H.v(s)
o.sa2(0,-p*q+s)
n.b.sY(0)
n.c.sY(0)
t=t.N(0,a.z)
n.dx=n.ao(new V.U(t.a,t.b).w(0,2).v(0,u.gat()))}n.am()},
h0:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.E(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.V()
s=r.y
if(typeof s!=="number")return H.v(s)
u.sY(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.V()
u=r.x
if(typeof u!=="number")return H.v(u)
s.sY(-t*10*u)
r.am()}},
au:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.S()
if(s<r){t.dy=r
u=b.y
t.c.aG(0,u)
t.b.aG(0,u)
t.fr=V.kM(t.b.d).w(0,V.lu(t.c.d))}return t.fr},
$iam:1}
M.d1.prototype={
aw:function(a){var u=this.y
if(u!=null)u.K(a)},
en:function(){return this.aw(null)},
f3:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gan(),s=[{func:1,ret:-1,args:[D.Z]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bt()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bv()
u.b=!0
this.aw(u)},
f5:function(a,b){var u,t
for(u=b.gU(b),t=this.gan();u.t();)u.gC(u).gA().M(0,t)
u=new D.bw()
u.b=!0
this.aw(u)},
sdV:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gA().M(0,t.gan())
u=t.d
t.d=a
if(a!=null)a.gA().n(0,t.gan())
s=new D.C("technique",u,t.d)
s.b=!0
t.aw(s)}},
gA:function(){var u=this.y
return u==null?this.y=D.N():u},
aS:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=new E.dx(a)
e.b=!0
u=f.f
if(u!=null)u.K(e)
a.dQ(f.d)
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
if(typeof s!=="number")return H.v(s)
o=C.d.ak(p*s)
p=q.b
if(typeof r!=="number")return H.v(r)
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
i=V.aw(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.dP(i)
t=$.ly
if(t==null){t=V.lA()
q=V.kS()
p=$.lT
t=V.lt(t,q,p==null?$.lT=new V.z(0,0,-1):p)
$.ly=t
h=t}else h=t
t=u.b
if(t!=null){g=t.au(0,a,u)
if(g!=null)h=g.w(0,h)}a.db.dP(h)
u=f.d
if(u!=null)u.aG(0,a)
for(u=f.e.a,u=new J.ab(u,u.length);u.t();)u.d.aG(0,a)
for(u=f.e.a,u=new J.ab(u,u.length);u.t();)u.d.aS(a)
f.b.toString
a.cy.cb()
a.db.cb()
f.c.toString
a.dO()}}
A.cQ.prototype={}
A.eT.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hw:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
hq:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.a_.prototype={
gal:function(a){var u=this.a?1:0,t=this.b?2:0
return u|t|0},
i:function(a){var u=this.a?1:0,t=this.b?2:0
return""+(u|t|0)},
p:function(a,b){if(b==null)return!1
if(!(b instanceof A.a_))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.h3.prototype={
ef:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
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
A.oC(c3,u)
A.oE(c3,u)
A.oD(c3,u)
A.oG(c3,u)
A.oH(c3,u)
A.oF(c3,u)
A.oI(c3,u)
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
m=A.oB(b8.z)
b8.c=n
b8.d=m
b8.e=b8.cE(n,35633)
b8.f=b8.cE(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!s.getProgramParameter(b8.r,35714)){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.q(P.u("Failed to link shader: "+H.e(l)))}b8.fW()
b8.fY()
b8.Q=b8.x.h(0,"posAttr")
b8.cx=b8.x.h(0,"normAttr")
b8.ch=b8.x.h(0,"binmAttr")
b8.cy=b8.x.h(0,"txt2DAttr")
b8.db=b8.x.h(0,"txtCubeAttr")
b8.dx=b8.x.h(0,"bendAttr")
if(c3.dy)b8.id=H.l(b8.y.L(0,"invViewMat"),"$iad")
if(t)b8.dy=H.l(b8.y.L(0,"objMat"),"$iad")
if(r)b8.fr=H.l(b8.y.L(0,"viewObjMat"),"$iad")
b8.fy=H.l(b8.y.L(0,"projViewObjMat"),"$iad")
if(c3.go)b8.fx=H.l(b8.y.L(0,"viewMat"),"$iad")
if(c3.x1)b8.k1=H.l(b8.y.L(0,"txt2DMat"),"$ico")
if(c3.x2)b8.k2=H.l(b8.y.L(0,"txtCubeMat"),"$iad")
if(c3.y1)b8.k3=H.l(b8.y.L(0,"colorMat"),"$iad")
b8.r1=H.b([],[A.ad])
t=c3.aQ
if(t>0){b8.k4=b8.y.L(0,"bendMatCount")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.h(0,q)
if(j==null)H.q(P.u(c0+q+c1))
s.push(H.l(j,"$iad"))}}t=c3.a
if(t.a)b8.r2=H.l(b8.y.L(0,"emissionClr"),"$iG")
if(t.b)b8.rx=H.l(b8.y.L(0,"emissionTxt"),"$ia0")
t=c3.b
if(t.a)b8.x1=H.l(b8.y.L(0,"ambientClr"),"$iG")
if(t.b)b8.x2=H.l(b8.y.L(0,"ambientTxt"),"$ia0")
t=c3.c
if(t.a)b8.y2=H.l(b8.y.L(0,"diffuseClr"),"$iG")
if(t.b)b8.aQ=H.l(b8.y.L(0,"diffuseTxt"),"$ia0")
t=c3.d
if(t.a)b8.bj=H.l(b8.y.L(0,"invDiffuseClr"),"$iG")
if(t.b)b8.d9=H.l(b8.y.L(0,"invDiffuseTxt"),"$ia0")
t=c3.e
s=t.a
if(s||t.b||!1){b8.dd=H.l(b8.y.L(0,"shininess"),"$iV")
if(s)b8.da=H.l(b8.y.L(0,"specularClr"),"$iG")
if(t.b)b8.dc=H.l(b8.y.L(0,"specularTxt"),"$ia0")}if(c3.f.b)b8.de=H.l(b8.y.L(0,"bumpTxt"),"$ia0")
if(c3.db){b8.df=H.l(b8.y.L(0,"envSampler"),"$ibF")
t=c3.r
if(t.a)b8.dg=H.l(b8.y.L(0,"reflectClr"),"$iG")
if(t.b)b8.dh=H.l(b8.y.L(0,"reflectTxt"),"$ia0")
t=c3.x
s=t.a
if(s||t.b||!1){b8.di=H.l(b8.y.L(0,"refraction"),"$iV")
if(s)b8.dj=H.l(b8.y.L(0,"refractClr"),"$iG")
if(t.b)b8.dk=H.l(b8.y.L(0,"refractTxt"),"$ia0")}}t=c3.y
if(t.a)b8.dl=H.l(b8.y.L(0,"alpha"),"$iV")
if(t.b)b8.dm=H.l(b8.y.L(0,"alphaTxt"),"$ia0")
if(c3.k1){t=c3.z
s=t.length
if(s!==0){r=P.w
b8.bX=new H.I([r,A.bh])
b8.bY=new H.I([r,[P.o,A.cm]])
for(r=[A.cm],i=0;i<t.length;t.length===s||(0,H.m)(t),++i){h=t[i]
g=h.a
f="barLight"+H.e(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].startPnt"
j=p.h(0,o)
if(j==null)H.q(P.u(c0+o+c1))
H.l(j,"$iG")
p=b8.y
o=f+"s["+k+"].endPnt"
d=p.h(0,o)
if(d==null)H.q(P.u(c0+o+c1))
H.l(d,"$iG")
p=b8.y
o=f+"s["+k+"].color"
c=p.h(0,o)
if(c==null)H.q(P.u(c0+o+c1))
H.l(c,"$iG")
if(typeof g!=="number")return g.a7()
if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
b=p.h(0,o)
if(b==null)H.q(P.u(c0+o+c1))
H.l(b,"$iV")
p=b8.y
o=f+"s["+k+"].att1"
a=p.h(0,o)
if(a==null)H.q(P.u(c0+o+c1))
H.l(a,"$iV")
p=b8.y
o=f+"s["+k+"].att2"
a0=p.h(0,o)
if(a0==null)H.q(P.u(c0+o+c1))
H.l(a0,"$iV")
a1=a0
a2=a
a3=b}else{a1=b9
a2=a1
a3=a2}e.push(new A.cm(j,d,c,a3,a2,a1))}b8.bY.l(0,g,e)
q=b8.bX
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.q(P.u(c0+o+c1))
q.l(0,g,j)}}t=c3.Q
s=t.length
if(s!==0){r=P.w
b8.bZ=new H.I([r,A.bh])
b8.c_=new H.I([r,[P.o,A.cn]])
for(r=[A.cn],i=0;i<t.length;t.length===s||(0,H.m)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.e(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.a7()
p=(g&1)!==0
if(p){o=b8.y
a4=f+"s["+k+"].objUp"
j=o.h(0,a4)
if(j==null)H.q(P.u(c0+a4+c1))
H.l(j,"$iG")
o=b8.y
a4=f+"s["+k+"].objRight"
d=o.h(0,a4)
if(d==null)H.q(P.u(c0+a4+c1))
H.l(d,"$iG")
o=b8.y
a4=f+"s["+k+"].objDir"
c=o.h(0,a4)
if(c==null)H.q(P.u(c0+a4+c1))
H.l(c,"$iG")
a5=c
a6=d
a7=j}else{a5=b9
a6=a5
a7=a6}o=b8.y
a4=f+"s["+k+"].viewDir"
j=o.h(0,a4)
if(j==null)H.q(P.u(c0+a4+c1))
H.l(j,"$iG")
o=b8.y
a4=f+"s["+k+"].color"
d=o.h(0,a4)
if(d==null)H.q(P.u(c0+a4+c1))
H.l(d,"$iG")
if(p){p=b8.y
o=f+"sTexture2D"+k
c=p.h(0,o)
if(c==null)H.q(P.u(c0+o+c1))
H.l(c,"$ia0")
a8=c}else a8=b9
e.push(new A.cn(a7,a6,a5,j,d,a8))}b8.c_.l(0,g,e)
q=b8.bZ
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.q(P.u(c0+o+c1))
q.l(0,g,j)}}t=c3.ch
s=t.length
if(s!==0){r=P.w
b8.c0=new H.I([r,A.bh])
b8.c1=new H.I([r,[P.o,A.cp]])
for(r=[A.cp],i=0;i<t.length;t.length===s||(0,H.m)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.e(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.h(0,o)
if(j==null)H.q(P.u(c0+o+c1))
H.l(j,"$iG")
p=b8.y
o=f+"s["+k+"].viewPnt"
d=p.h(0,o)
if(d==null)H.q(P.u(c0+o+c1))
H.l(d,"$iG")
p=b8.y
o=f+"s["+k+"].color"
c=p.h(0,o)
if(c==null)H.q(P.u(c0+o+c1))
H.l(c,"$iG")
if(typeof g!=="number")return g.a7()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
b=p.h(0,o)
if(b==null)H.q(P.u(c0+o+c1))
H.l(b,"$ico")
a9=b}else a9=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
b=p.h(0,o)
if(b==null)H.q(P.u(c0+o+c1))
H.l(b,"$ibF")
a8=b}else a8=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
b=p.h(0,o)
if(b==null)H.q(P.u(c0+o+c1))
H.l(b,"$ibF")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a=p.h(0,o)
if(a==null)H.q(P.u(c0+o+c1))
H.l(a,"$icl")
b0=b
b1=a}else{b0=b9
b1=b0}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
b=p.h(0,o)
if(b==null)H.q(P.u(c0+o+c1))
H.l(b,"$iV")
p=b8.y
o=f+"s["+k+"].att1"
a=p.h(0,o)
if(a==null)H.q(P.u(c0+o+c1))
H.l(a,"$iV")
p=b8.y
o=f+"s["+k+"].att2"
a0=p.h(0,o)
if(a0==null)H.q(P.u(c0+o+c1))
H.l(a0,"$iV")
a1=a0
a2=a
a3=b}else{a1=b9
a2=a1
a3=a2}e.push(new A.cp(j,d,a9,c,a8,b0,b1,a3,a2,a1))}b8.c1.l(0,g,e)
q=b8.c0
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.q(P.u(c0+o+c1))
q.l(0,g,j)}}t=c3.cx
s=t.length
if(s!==0){r=P.w
b8.c2=new H.I([r,A.bh])
b8.c3=new H.I([r,[P.o,A.cq]])
for(r=[A.cq],i=0;i<t.length;t.length===s||(0,H.m)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.e(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.h(0,o)
if(j==null)H.q(P.u(c0+o+c1))
H.l(j,"$iG")
p=b8.y
o=f+"s["+k+"].objDir"
d=p.h(0,o)
if(d==null)H.q(P.u(c0+o+c1))
H.l(d,"$iG")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.h(0,o)
if(c==null)H.q(P.u(c0+o+c1))
H.l(c,"$iG")
p=b8.y
o=f+"s["+k+"].color"
b=p.h(0,o)
if(b==null)H.q(P.u(c0+o+c1))
H.l(b,"$iG")
if(typeof g!=="number")return g.a7()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a=p.h(0,o)
if(a==null)H.q(P.u(c0+o+c1))
H.l(a,"$iG")
p=b8.y
o=f+"s["+k+"].objRight"
a0=p.h(0,o)
if(a0==null)H.q(P.u(c0+o+c1))
H.l(a0,"$iG")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.h(0,o)
if(b2==null)H.q(P.u(c0+o+c1))
H.l(b2,"$iV")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.h(0,o)
if(b3==null)H.q(P.u(c0+o+c1))
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
if(a==null)H.q(P.u(c0+a4+c1))
H.l(a,"$icl")
b1=a}else b1=b9
if((g&8)!==0){o=b8.y
a4=f+"s["+k+"].cutoff"
a=o.h(0,a4)
if(a==null)H.q(P.u(c0+a4+c1))
H.l(a,"$iV")
o=b8.y
a4=f+"s["+k+"].coneAngle"
a0=o.h(0,a4)
if(a0==null)H.q(P.u(c0+a4+c1))
H.l(a0,"$iV")
b6=a0
b7=a}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
a4=f+"s["+k+"].att0"
a=o.h(0,a4)
if(a==null)H.q(P.u(c0+a4+c1))
H.l(a,"$iV")
o=b8.y
a4=f+"s["+k+"].att1"
a0=o.h(0,a4)
if(a0==null)H.q(P.u(c0+a4+c1))
H.l(a0,"$iV")
o=b8.y
a4=f+"s["+k+"].att2"
b2=o.h(0,a4)
if(b2==null)H.q(P.u(c0+a4+c1))
H.l(b2,"$iV")
a1=b2
a2=a0
a3=a}else{a1=b9
a2=a1
a3=a2}if((g&1)!==0){o=b8.y
a4=f+"sTexture2D"+k
a=o.h(0,a4)
if(a==null)H.q(P.u(c0+a4+c1))
H.l(a,"$ia0")
a8=a}else a8=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a=p.h(0,o)
if(a==null)H.q(P.u(c0+o+c1))
H.l(a,"$ia0")
b0=a}else b0=b9
e.push(new A.cq(j,d,c,b,a7,a6,b5,b4,b1,b7,b6,a3,a2,a1,a8,b0))}b8.c3.l(0,g,e)
q=b8.c2
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.q(P.u(c0+o+c1))
q.l(0,g,j)}}}},
aj:function(a,b){if(b!=null&&b.d)a.e5(b)},
fU:function(a,b){}}
A.cR.prototype={
i:function(a){return"barLight"+H.e(this.a)}}
A.cZ.prototype={
i:function(a){return"dirLight"+H.e(this.a)}}
A.dm.prototype={
i:function(a){return"pointLight"+H.e(this.a)}}
A.du.prototype={
i:function(a){return"spotLight"+H.e(this.a)}}
A.h6.prototype={
i:function(a){return this.b1}}
A.cm.prototype={}
A.cn.prototype={}
A.cp.prototype={}
A.cq.prototype={}
A.ds.prototype={
ei:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cE:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.u("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
fW:function(){var u,t,s,r=this,q=H.b([],[A.cQ]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.v(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cQ(p,t.name,s))}r.x=new A.eT(q)},
fY:function(){var u,t,s,r=this,q=H.b([],[A.dI]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.v(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.hn(t.type,t.size,t.name,s))}r.y=new A.iC(q)},
aL:function(a,b,c){var u=this.a
if(a===1)return new A.bh(u,b,c)
else return A.kP(u,this.r,b,a,c)},
eD:function(a,b,c){var u=this.a
if(a===1)return new A.a0(u,b,c)
else return A.kP(u,this.r,b,a,c)},
eE:function(a,b,c){var u=this.a
if(a===1)return new A.bF(u,b,c)
else return A.kP(u,this.r,b,a,c)},
bg:function(a,b){return new P.dY(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
hn:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aL(b,c,d)
case 5121:return u.aL(b,c,d)
case 5122:return u.aL(b,c,d)
case 5123:return u.aL(b,c,d)
case 5124:return u.aL(b,c,d)
case 5125:return u.aL(b,c,d)
case 5126:return new A.V(u.a,c,d)
case 35664:return new A.iy(u.a,c,d)
case 35665:return new A.G(u.a,c,d)
case 35666:return new A.cl(u.a,c,d)
case 35667:return new A.iz(u.a,c,d)
case 35668:return new A.iA(u.a,c,d)
case 35669:return new A.iB(u.a,c,d)
case 35674:return new A.iD(u.a,c,d)
case 35675:return new A.co(u.a,c,d)
case 35676:return new A.ad(u.a,c,d)
case 35678:return u.eD(b,c,d)
case 35680:return u.eE(b,c,d)
case 35670:throw H.c(u.bg("BOOL",c))
case 35671:throw H.c(u.bg("BOOL_VEC2",c))
case 35672:throw H.c(u.bg("BOOL_VEC3",c))
case 35673:throw H.c(u.bg("BOOL_VEC4",c))
default:throw H.c(P.u("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.dI.prototype={}
A.iC.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
L:function(a,b){var u=this.h(0,b)
if(u==null)throw H.c(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.P()},
P:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.m)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.bh.prototype={
i:function(a){return"Uniform1i: "+H.e(this.c)}}
A.iz.prototype={
i:function(a){return"Uniform2i: "+H.e(this.c)}}
A.iA.prototype={
i:function(a){return"Uniform3i: "+H.e(this.c)}}
A.iB.prototype={
i:function(a){return"Uniform4i: "+H.e(this.c)}}
A.ix.prototype={
i:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.V.prototype={
i:function(a){return"Uniform1f: "+H.e(this.c)}}
A.iy.prototype={
i:function(a){return"Uniform2f: "+H.e(this.c)}}
A.G.prototype={
i:function(a){return"Uniform3f: "+H.e(this.c)}}
A.cl.prototype={
i:function(a){return"Uniform4f: "+H.e(this.c)}}
A.iD.prototype={
i:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.co.prototype={
ah:function(a){var u=new Float32Array(H.bL(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.e(this.c)}}
A.ad.prototype={
ah:function(a){var u=new Float32Array(H.bL(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.e(this.c)}}
A.a0.prototype={
e5:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.bF.prototype={
i:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.jS.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.c9(s.b,b).c9(s.d.c9(s.c,b),c)
a.sa2(0,new V.T(r.a,r.b,r.c))
a.sdW(r.v(0,Math.sqrt(r.E(r))))
s=1-b
u=1-c
a.sd2(new V.bf(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)}}
F.k1.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)}}
F.k3.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.v(p)
s=-s*p
u=r*p
a.sa2(0,new V.T(s,u,q))
u=new V.z(s,u,q)
a.sdW(u.v(0,Math.sqrt(u.E(u))))
a.sd2(new V.bf(1-c,2+c,-1,-1))}}
F.k4.prototype={
$1:function(a){return this.a.$2(a,1)}}
F.k5.prototype={
$1:function(a){return this.a.$2(1-a,0)}}
F.ko.prototype={
$2:function(a,b){return 0}}
F.kp.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.v(s)
u=a.f
t=new V.z(u.a,u.b,u.c)
s=t.v(0,Math.sqrt(t.E(t))).w(0,this.b+s)
a.sa2(0,new V.T(s.a,s.b,s.c))}}
F.kr.prototype={
$1:function(a){return new V.T(Math.cos(a),Math.sin(a),0)}}
F.kd.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.T(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)}}
F.k2.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.lc(n.$1(o),m)
m=J.lc(n.$1(o+3.141592653589793/p.c),m).N(0,l)
m=new V.z(m.a,m.b,m.c)
u=m.v(0,Math.sqrt(m.E(m)))
n=$.lU
if(n==null){n=new V.z(1,0,0)
$.lU=n
t=n}else t=n
n=u.aA(!J.D(u,t)?V.lW():t)
s=n.v(0,Math.sqrt(n.E(n)))
n=s.aA(u)
t=n.v(0,Math.sqrt(n.E(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.w(0,n*m)
m=s.w(0,q*m)
a.sa2(0,l.B(0,new V.T(n.a-m.a,n.b-m.b,n.c-m.c)))}}
F.b5.prototype={
b_:function(){var u=this
if(!u.gb0()){C.b.M(u.a.a.d.b,u)
u.a.a.Z()}u.bH()
u.bI()
u.fM()},
bM:function(a){this.a=a
a.d.b.push(this)},
bN:function(a){this.b=a
a.d.c.push(this)},
fV:function(a){this.c=a
a.d.d.push(this)},
bH:function(){var u=this.a
if(u!=null){C.b.M(u.d.b,this)
this.a=null}},
bI:function(){var u=this.b
if(u!=null){C.b.M(u.d.c,this)
this.b=null}},
fM:function(){var u=this.c
if(u!=null){C.b.M(u.d.d,this)
this.c=null}},
gb0:function(){return this.a==null||this.b==null||this.c==null},
ew:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cr()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.dA())return
return s.v(0,Math.sqrt(s.E(s)))},
ey:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.N(0,q)
r=new V.z(r.a,r.b,r.c)
s=r.v(0,Math.sqrt(r.E(r)))
r=t.N(0,q)
r=new V.z(r.a,r.b,r.c)
r=s.aA(r.v(0,Math.sqrt(r.E(r))))
return r.v(0,Math.sqrt(r.E(r)))},
bS:function(){var u,t=this
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
s=V.cr()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.dA())return
return s.v(0,Math.sqrt(s.E(s)))},
ex:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.A().a){l=d.N(0,g)
l=new V.z(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.E(l)))
if(s.a-t.a<0)q=q.V(0)}else{p=(l-u.b)/r
l=d.N(0,g).w(0,p).B(0,g).N(0,j)
l=new V.z(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.E(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.V(0)}l=n.d
if(l!=null){o=l.v(0,Math.sqrt(l.E(l)))
l=o.aA(q)
l=l.v(0,Math.sqrt(l.E(l))).aA(o)
q=l.v(0,Math.sqrt(l.E(l)))}return q},
bQ:function(){var u,t=this
if(t.e!=null)return!0
u=t.ev()
if(u==null){u=t.ex()
if(u==null)return!1}t.e=u
t.a.a.Z()
return!0},
ghh:function(a){var u=this
if(J.D(u.a,u.b))return!0
if(J.D(u.b,u.c))return!0
if(J.D(u.c,u.a))return!0
return!1},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
H:function(a){var u,t,s=this
if(s.gb0())return a+"disposed"
u=a+C.a.af(J.a4(s.a.e),0)+", "+C.a.af(J.a4(s.b.e),0)+", "+C.a.af(J.a4(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
P:function(){return this.H("")}}
F.ft.prototype={}
F.i0.prototype={
b3:function(a,b,c){var u,t=b.a
t.a.a.u()
t=t.e
u=c.a
u.a.a.u()
if(t==u.e){t=b.b
t.a.a.u()
t=t.e
u=c.b
u.a.a.u()
if(t==u.e){t=b.c
t.a.a.u()
t=t.e
u=c.c
u.a.a.u()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.u()
t=t.e
u=c.b
u.a.a.u()
if(t==u.e){t=b.b
t.a.a.u()
t=t.e
u=c.c
u.a.a.u()
if(t==u.e){t=b.c
t.a.a.u()
t=t.e
u=c.a
u.a.a.u()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.u()
t=t.e
u=c.c
u.a.a.u()
if(t==u.e){t=b.b
t.a.a.u()
t=t.e
u=c.a
u.a.a.u()
if(t==u.e){t=b.c
t.a.a.u()
t=t.e
u=c.b
u.a.a.u()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.c4.prototype={
b_:function(){var u=this
if(!u.gb0()){C.b.M(u.a.a.c.b,u)
u.a.a.Z()}u.bH()
u.bI()},
bM:function(a){this.a=a
a.c.b.push(this)},
bN:function(a){this.b=a
a.c.c.push(this)},
bH:function(){var u=this.a
if(u!=null){C.b.M(u.c.b,this)
this.a=null}},
bI:function(){var u=this.b
if(u!=null){C.b.M(u.c.c,this)
this.b=null}},
gb0:function(){return this.a==null||this.b==null},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
H:function(a){if(this.gb0())return a+"disposed"
return a+C.a.af(J.a4(this.a.e),0)+", "+C.a.af(J.a4(this.b.e),0)},
P:function(){return this.H("")}}
F.fR.prototype={}
F.iw.prototype={
b3:function(a,b,c){var u,t=b.a
t.a.a.u()
t=t.e
u=c.a
u.a.a.u()
if(t==u.e){t=b.b
t.a.a.u()
t=t.e
u=c.b
u.a.a.u()
return t==u.e}else{t=b.a
t.a.a.u()
t=t.e
u=c.b
u.a.a.u()
if(t==u.e){t=b.b
t.a.a.u()
t=t.e
u=c.a
u.a.a.u()
return t==u.e}else return!1}}}
F.ce.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
H:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.a.af(J.a4(u.e),0)},
P:function(){return this.H("")}}
F.hT.prototype={
gA:function(){var u=this.e
return u==null?this.e=D.N():u},
b4:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.u()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){r=g[s]
h.a.n(0,r.hk())}h.a.u()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
n=p[o]
h.b.a.a.n(0,n)
o=new F.ce()
if(n.a==null)H.q(P.u("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.K(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.u()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.c.a
p.a.n(0,l)
p.a.n(0,k)
F.nd(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.u()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.u()
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
F.bZ(l,k,i)}g=h.e
if(g!=null)g.ag(0)},
aq:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aq()||!1
if(!t.a.aq())u=!1
s=t.e
if(s!=null)s.ag(0)
return u},
hN:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.b(o.slice(0),[H.aJ(o,0)])
for(o=[F.bi];u.length!==0;){t=C.b.ghA(u)
C.b.ce(u,0)
if(t!=null){s=H.b([],o)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.d(u,r)
q=u[r]
if(q!=null&&a.b3(0,t,q)){s.push(q)
C.b.ce(u,r)}}if(s.length>1)b.b4(s)}}p.a.u()
p.c.cf()
p.d.cf()
p.b.i5()
p.c.cg(new F.iw())
p.d.cg(new F.i0())
o=p.e
if(o!=null)o.ag(0)},
bO:function(){this.hN(new F.j_(),new F.hw())},
c5:function(){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
p.d.c5()
for(u=p.a.c.length-1;u>=0;--u){o=p.a.c
if(u>=o.length)return H.d(o,u)
t=o[u]
o=t.r
if(o!=null)t.sdE(new V.z(-o.a,-o.b,-o.c))
o=t.x
if(o!=null){s=-o.a
r=-o.b
o=-o.c
q=new V.z(s,r,o).v(0,Math.sqrt(s*s+r*r+o*o))
if(!J.D(t.x,q)){t.x=q
o=t.a
if(o!=null){o=o.e
if(o!=null)o.K(null)}}}}o=p.e
if(o!=null)o.ag(0)},
hf:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.b0()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.b_().a)!==0)++s
if((t&$.aZ().a)!==0)++s
if((t&$.b1().a)!==0)++s
if((t&$.bl().a)!==0)++s
if((t&$.cL().a)!==0)++s
if((t&$.cM().a)!==0)++s
if((t&$.bS().a)!==0)++s
if((t&$.aY().a)!==0)++s
r=a4.gcn(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.J])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.cS])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.hb(m)
k=l.gcn(l)
if(m>=t)return H.d(o,m)
o[m]=new Z.cS(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.d(i,j)
h=i[j].hL(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.d(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.bL(p)),35044)
u.bindBuffer(a1,null)
c=new Z.cT(new Z.dO(a1,d),o,a4)
c.b=H.b([],[Z.bu])
if(a0.b.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.u()
b.push(t.e)}a=Z.kT(u,34963,b)
c.b.push(new Z.bu(0,b.length,a))}if(a0.c.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.u()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.d(t,m)
t=t[m].b
t.a.a.u()
b.push(t.e)}a=Z.kT(u,34963,b)
c.b.push(new Z.bu(1,b.length,a))}if(a0.d.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.u()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.d(t,m)
t=t[m].b
t.a.a.u()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.d(t,m)
t=t[m].c
t.a.a.u()
b.push(t.e)}a=Z.kT(u,34963,b)
c.b.push(new Z.bu(4,b.length,a))}return c},
i:function(a){var u=this,t="   ",s=H.b([],[P.h])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.H(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.H(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.H(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.H(t))}return C.b.j(s,"\n")},
Z:function(){var u=this.e
if(u!=null)u.K(null)}}
F.hU.prototype={
h7:function(a){var u,t,s,r,q,p=H.b([],[F.b5]),o=a.length
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
p.push(F.bZ(u,r,q))}}return p},
h8:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.b5])
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
h.push(F.bZ(m,l,j))
u.a.n(0,m)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.bZ(m,j,i))}else{n.n(0,l)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.bZ(l,j,i))
u.a.n(0,l)
u.a.n(0,i)
u.a.n(0,m)
h.push(F.bZ(l,i,m))}p=!p}r=!r}return h},
gm:function(a){return this.b.length},
cg:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.h(0,q)
for(o=q-1;o>=0;--o){n=r.d.h(0,o)
if(a.b3(0,p,n)){p.b_()
break}}}}},
cf:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=s.ghh(s)
if(t)s.b_()}},
aq:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.m)(u),++r)if(!u[r].bS())s=!1
return s},
bR:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.m)(u),++r)if(!u[r].bQ())s=!1
return s},
c5:function(){var u,t,s,r,q,p
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
q=r.b
r.b=r.c
r.c=q
p=r.d
if(p!=null)r.d=new V.z(-p.a,-p.b,-p.c)
p=r.e
if(p!=null)r.e=new V.z(-p.a,-p.b,-p.c)
p=r.a.a.e
if(p!=null)p.K(null)}},
i:function(a){return this.P()},
H:function(a){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].H(a))
return C.b.j(r,"\n")},
P:function(){return this.H("")}}
F.hV.prototype={
gm:function(a){return this.b.length},
cg:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.h(0,q)
for(o=q-1;o>=0;--o){n=r.c.h(0,o)
if(a.b3(0,p,n)){p.b_()
break}}}}},
cf:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=J.D(s.a,s.b)
if(t)s.b_()}},
i:function(a){return this.P()},
H:function(a){var u,t,s=H.b([],[P.h]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.d(t,u)
s.push(t[u].H(a+(""+u+". ")))}return C.b.j(s,"\n")},
P:function(){return this.H("")}}
F.hW.prototype={
gm:function(a){return this.b.length},
i5:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.b.M(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.K(null)}s=t.a
if(s!=null){C.b.M(s.b.b,t)
t.a=null}}}},
i:function(a){return this.P()},
H:function(a){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].H(a))
return C.b.j(r,"\n")},
P:function(){return this.H("")}}
F.bi.prototype={
bW:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.dN(u.cx,r,o,t,s,q,p,a,n)},
hk:function(){return this.bW(null)},
sa2:function(a,b){var u
if(!J.D(this.f,b)){this.f=b
u=this.a
if(u!=null)u.Z()}},
sdE:function(a){var u
a=a==null?null:a.v(0,Math.sqrt(a.E(a)))
if(!J.D(this.r,a)){this.r=a
u=this.a
if(u!=null)u.Z()}},
sdW:function(a){var u
if(!J.D(this.z,a)){this.z=a
u=this.a
if(u!=null)u.Z()}},
sd2:function(a){var u
if(!J.D(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.Z()}},
hL:function(a){var u,t,s=this
if(a.p(0,$.b0())){u=s.f
t=[P.J]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.b_())){u=s.r
t=[P.J]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.aZ())){u=s.x
t=[P.J]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.b1())){u=s.y
t=[P.J]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.p(0,$.bl())){u=s.z
t=[P.J]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.cL())){u=s.Q
t=[P.J]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.cM())){u=s.Q
t=[P.J]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.p(0,$.bS()))return H.b([s.ch],[P.J])
else if(a.p(0,$.aY())){u=s.cx
t=[P.J]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.J])},
bS:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cr()
t.d.G(0,new F.j4(s))
s=s.a
t.r=s.v(0,Math.sqrt(s.E(s)))
s=t.a
if(s!=null){s.Z()
s=t.a.e
if(s!=null)s.ag(0)}return!0},
bQ:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cr()
t.d.G(0,new F.j3(s))
s=s.a
t.x=s.v(0,Math.sqrt(s.E(s)))
s=t.a
if(s!=null){s.Z()
s=t.a.e
if(s!=null)s.ag(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
H:function(a){var u,t,s=this,r="-",q=H.b([],[P.h])
q.push(C.a.af(J.a4(s.e),0))
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
P:function(){return this.H("")}}
F.j4.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.B(0,t)}}}
F.j3.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.B(0,t)}}}
F.iV.prototype={
u:function(){var u,t,s,r
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
u.Z()
return!0},
h9:function(a,b,c,d,e,f){var u=F.dN(a,null,b,c,d,e,f,null,0)
this.n(0,u)
return u},
gm:function(a){return this.c.length},
aq:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)u[s].bS()
return!0},
bR:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)u[s].bQ()
return!0},
hg:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.v(0,Math.sqrt(p*p+o*o+n*n))
if(!J.D(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.K(null)}}}}return!0},
i:function(a){return this.P()},
H:function(a){var u,t,s,r
this.u()
u=H.b([],[P.h])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r)u.push(t[r].H(a))
return C.b.j(u,"\n")},
P:function(){return this.H("")}}
F.iW.prototype={
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
G:function(a,b){var u=this
C.b.G(u.b,b)
C.b.G(u.c,new F.iX(u,b))
C.b.G(u.d,new F.iY(u,b))},
i:function(a){return this.P()},
P:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].H(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].H(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].H(""))
return C.b.j(r,"\n")}}
F.iX.prototype={
$1:function(a){if(!J.D(a.a,this.a))this.b.$1(a)}}
F.iY.prototype={
$1:function(a){var u=this.a
if(!J.D(a.a,u)&&!J.D(a.b,u))this.b.$1(a)}}
F.iZ.prototype={
gm:function(a){return this.b.length+this.c.length},
h:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.d(t,u)
return t[u]}else{if(b<0)return H.d(t,b)
return t[b]}},
i:function(a){return this.P()},
P:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].H(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].H(""))
return C.b.j(r,"\n")}}
F.j0.prototype={}
F.j_.prototype={
b3:function(a,b,c){return J.D(b.f,c.f)}}
F.j1.prototype={}
F.hw.prototype={
b4:function(a){var u,t,s,r=V.cr()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null)r=new V.z(r.a+s.a,r.b+s.b,r.c+s.c)}r=r.v(0,Math.sqrt(r.E(r)))
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.m)(a),++t)a[t].sdE(r)
return}}
F.j2.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.P()},
P:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].H(""))
return C.b.j(r,"\n")}}
O.dd.prototype={
gA:function(){var u=this.fr
return u==null?this.fr=D.N():u},
X:function(a){var u=this.fr
if(u!=null)u.K(a)},
bF:function(){return this.X(null)},
cM:function(a){this.a=null
this.X(a)},
fQ:function(){return this.cM(null)},
eY:function(a,b){var u=new D.bv()
u.b=!0
this.X(u)},
f_:function(a,b){var u=new D.bw()
u.b=!0
this.X(u)},
cC:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=P.w
f=[f,f]
u=new H.I(f)
for(t=g.dx.e,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){q=t[r]
p=q.gar()
o=u.h(0,q.gar())
u.l(0,p,o==null?1:o)}n=H.b([],[A.cR])
u.G(0,new O.ha(g,n))
C.b.aV(n,new O.hb())
m=new H.I(f)
for(t=g.dx.f,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){p=m.h(0,0)
m.l(0,0,p==null?1:p)}l=H.b([],[A.cZ])
m.G(0,new O.hc(g,l))
C.b.aV(l,new O.hd())
k=new H.I(f)
for(t=g.dx.r,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){q=t[r]
p=q.gar()
o=k.h(0,q.gar())
k.l(0,p,o==null?1:o)}j=H.b([],[A.dm])
k.G(0,new O.he(g,j))
C.b.aV(j,new O.hf())
i=new H.I(f)
for(f=g.dx.x,t=f.length,r=0;r<f.length;f.length===t||(0,H.m)(f),++r){q=f[r]
s=q.gar()
p=i.h(0,q.gar())
i.l(0,s,p==null?1:p)}h=H.b([],[A.du])
i.G(0,new O.hg(g,h))
C.b.aV(h,new O.hh())
f=C.c.a4(g.e.a.length+3,4)
t=g.b
s=g.d
g.dy.e
return A.nl(t!=null,!1,s!=null,!1,f*4,g.f.c,g.r.c,g.x.c,g.y.c,g.z.c,g.Q.c,g.cx.c,g.cy.c,g.db.c,n,l,j,h)},
a9:function(a,b){if(b!=null)if(!C.b.D(a,b)){b.a=a.length
a.push(b)}},
aG:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.ab(u,u.length);u.t();){t=u.d
t.toString
s=$.iU
if(s==null)s=$.iU=new V.z(0,0,1)
t.a=s
r=$.iT
t.d=r==null?$.iT=new V.z(0,1,0):r
r=$.iS
t.e=r==null?$.iS=new V.z(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bq(s)
r=s.a
p=s.b
o=s.c
t.a=s.v(0,Math.sqrt(r*r+p*p+o*o))
o=q.bq(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.v(0,Math.sqrt(p*p+r*r+s*s))
s=q.bq(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.v(0,Math.sqrt(r*r+p*p+o*o))}}}},
i7:function(b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.cC()
u=b4.fr.h(0,b3.b1)
if(u==null){u=A.nk(b3,b4.a)
t=u.b
if(t.length===0)H.q(P.u("May not cache a shader with no name."))
if(b4.fr.bU(0,t))H.q(P.u('Shader cache already contains a shader by the name "'+t+'".'))
b4.fr.l(0,t,u)}b3=b2.a=u
b5.e=null}s=b3.z
r=s.bj
b3=b5.e
if(!(b3 instanceof Z.cT))b3=b5.e=null
if(b3==null||!b3.d.p(0,r)){b3=s.k4
if(b3)b5.d.aq()
q=s.r1
if(q){p=b5.d
o=p.e
if(o!=null)++o.d
p.d.bR()
p.a.bR()
p=p.e
if(p!=null)p.ag(0)}p=s.rx
if(p){o=b5.d
n=o.e
if(n!=null)++n.d
o.a.hg()
o=o.e
if(o!=null)o.ag(0)}m=b5.d.hf(new Z.j6(b4.a),r)
m.aR($.b0()).e=b2.a.Q.c
if(b3)m.aR($.b_()).e=b2.a.cx.c
if(q)m.aR($.aZ()).e=b2.a.ch.c
if(s.r2)m.aR($.b1()).e=b2.a.cy.c
if(p)m.aR($.bl()).e=b2.a.db.c
if(s.ry)m.aR($.aY()).e=b2.a.dx.c
b5.e=m}l=H.b([],[T.dB])
b3=b2.a
q=b4.a
q.useProgram(b3.r)
b3.x.hw()
if(s.fr){b3=b2.a
p=b4.dx
p=p.ga0(p)
b3=b3.dy
b3.toString
b3.ah(p.a8(0,!0))}if(s.fx){b3=b2.a
p=b4.cx
if(p==null){p=b4.db
p=p.ga0(p)
o=b4.dx
o=b4.cx=p.w(0,o.ga0(o))
p=o}b3=b3.fr
b3.toString
b3.ah(p.a8(0,!0))}b3=b2.a
p=b4.ch
if(p==null){p=b4.gi3()
o=b4.dx
o=b4.ch=p.w(0,o.ga0(o))
p=o}b3=b3.fy
b3.toString
b3.ah(p.a8(0,!0))
if(s.go){b3=b2.a
p=b4.db
p=p.ga0(p)
b3=b3.fx
b3.toString
b3.ah(p.a8(0,!0))}if(s.x1){b3=b2.a
p=b2.b
b3=b3.k1
b3.toString
b3.ah(p.a8(0,!0))}if(s.x2){b3=b2.a
p=b2.c
b3=b3.k2
b3.toString
b3.ah(C.w.a8(p,!0))}if(s.y1){b3=b2.a
p=b2.d
b3=b3.k3
b3.toString
b3.ah(p.a8(0,!0))}if(s.aQ>0){k=b2.e.a.length
b3=b2.a.k4
b3.a.uniform1i(b3.d,k)
for(j=0;j<k;++j){b3=b2.a
p=b2.e.a
if(j>=p.length)return H.d(p,j)
p=p[j]
b3=b3.r1
if(j>=b3.length)return H.d(b3,j)
b3=b3[j]
i=new Float32Array(H.bL(p.a8(0,!0)))
b3.a.uniformMatrix4fv(b3.d,!1,i)}}b3=s.a
if(b3.a){p=b2.a
o=b2.f.f
p=p.r2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.a9(l,b2.f.d)
b3=b2.a
p=b2.f.d
b3.aj(b3.rx,p)}if(s.k1){b3=s.b
if(b3.a){p=b2.a
o=b2.r.f
p=p.x1
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.a9(l,b2.r.d)
b3=b2.a
p=b2.r.d
b3.aj(b3.x2,p)}b3=s.c
if(b3.a){p=b2.a
o=b2.x.f
p=p.y2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.a9(l,b2.x.d)
b3=b2.a
p=b2.x.d
b3.aj(b3.aQ,p)}b3=s.d
if(b3.a){p=b2.a
o=b2.y.f
p=p.bj
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.a9(l,b2.y.d)
b3=b2.a
p=b2.y.d
b3.aj(b3.d9,p)}b3=s.e
p=b3.a
if(p||b3.b||!1){o=b2.a
n=b2.z.ch
o=o.dd
o.a.uniform1f(o.d,n)}if(p){p=b2.a
o=b2.z.f
p=p.da
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.a9(l,b2.z.d)
b3=b2.a
p=b2.z.d
b3.aj(b3.dc,p)}b3=s.z
if(b3.length>0){p=P.w
h=new H.I([p,p])
for(p=b2.dx.e,o=p.length,g=0;g<p.length;p.length===o||(0,H.m)(p),++g){f=p[g]
e=f.gar()
d=h.h(0,e)
if(d==null)d=0
h.l(0,e,d+1)
c=J.bT(b2.a.bY.h(0,e),d)
n=f.gir()
b=$.aA
n=n.b8(b==null?$.aA=new V.T(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.giw()
b=$.aA
n=n.b8(b==null?$.aA=new V.T(0,0,0):b)
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gab(f)
b=c.d
b.a.uniform3f(b.d,n.a,n.b,n.c)
if(f.gd8()){n=f.gd_()
b=c.e
b.a.uniform1f(b.d,n)
n=f.gd0()
b=c.f
b.a.uniform1f(b.d,n)
n=f.gd1()
b=c.r
b.a.uniform1f(b.d,n)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.m)(b3),++g){o=b3[g].a
k=h.h(0,o)
if(k==null)k=0
o=b2.a.bX.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.Q
if(b3.length>0){p=b4.db
a=p.ga0(p)
p=P.w
a0=new H.I([p,p])
for(p=b2.dx.f,o=p.length,g=0;g<p.length;p.length===o||(0,H.m)(p),++g){f=p[g]
d=a0.h(0,0)
if(d==null)d=0
a0.l(0,0,d+1)
c=J.bT(b2.a.c_.h(0,0),d)
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
n.a.uniform3f(n.d,a2.a,a2.b,a2.c)}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.m)(b3),++g){o=b3[g].a
k=a0.h(0,o)
if(k==null)k=0
o=b2.a.bZ.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.ch
if(b3.length>0){p=b4.db
a=p.ga0(p)
p=P.w
a3=new H.I([p,p])
for(p=b2.dx.r,o=p.length,g=0;g<p.length;p.length===o||(0,H.m)(p),++g){f=p[g]
e=f.gar()
d=a3.h(0,e)
if(d==null)d=0
a3.l(0,e,d+1)
c=J.bT(b2.a.c1.h(0,e),d)
a4=a.w(0,f.ga0(f))
n=f.ga0(f)
b=$.aA
n=n.b8(b==null?$.aA=new V.T(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=$.aA
n=a4.b8(n==null?$.aA=new V.T(0,0,0):n)
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gab(f)
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
f.gaF()
n=a4.dz(0)
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
i=new Float32Array(H.bL(new V.c8(b,a1,a2,a5,a6,a7,a8,a9,n).a8(0,!0)))
b0.a.uniformMatrix3fv(b0.d,!1,i)
f.gaF()
n=f.gaF()
if(!C.b.D(l,n)){n.a=l.length
l.push(n)}n=f.gaF()
b=n.gb2(n)
if(b){b=c.f
b.toString
a1=n.gb2(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.ghG(n)
b.a.uniform1i(b.d,n)}}f.gaU()
n=f.ge6()
b=c.x
b.toString
a1=n.ghs(n)
a2=n.ght(n)
a5=n.ghu()
n=n.ghr()
b.a.uniform4f(b.d,a1,a2,a5,n)
n=f.gaU()
if(!C.b.D(l,n)){n.a=l.length
l.push(n)}n=f.gaU()
b=n.gb2(n)
if(b){b=c.r
b.toString
a1=n.gb2(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.ghG(n)
b.a.uniform1i(b.d,n)}}if(f.gd8()){n=f.gd_()
b=c.y
b.a.uniform1f(b.d,n)
n=f.gd0()
b=c.z
b.a.uniform1f(b.d,n)
n=f.gd1()
b=c.Q
b.a.uniform1f(b.d,n)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.m)(b3),++g){o=b3[g].a
k=a3.h(0,o)
if(k==null)k=0
o=b2.a.c0.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.cx
if(b3.length>0){p=b4.db
a=p.ga0(p)
p=P.w
b1=new H.I([p,p])
for(p=b2.dx.x,o=p.length,g=0;g<p.length;p.length===o||(0,H.m)(p),++g){f=p[g]
e=f.gar()
d=b1.h(0,e)
if(d==null)d=0
b1.l(0,e,d+1)
c=J.bT(b2.a.c3.h(0,e),d)
n=f.gi2(f)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.giu(f).iH()
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=a.b8(f.gi2(f))
b=c.d
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gab(f)
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
f.gaF()
n=f.giK()
b=c.f
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gci(f)
b=c.r
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.giI()
b=c.x
b.a.uniform1f(b.d,n)
n=f.giJ()
b=c.y
b.a.uniform1f(b.d,n)
f.gaF()
n=f.gaF()
if(!C.b.D(l,n)){n.a=l.length
l.push(n)}n=f.gaF()
b=n.gb2(n)
if(b){b=c.dx
b.toString
a1=n.d
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.a
b.a.uniform1i(b.d,n)}}f.gaU()
n=f.ge6()
b=c.z
b.toString
a1=n.ghs(n)
a2=n.ght(n)
a5=n.ghu()
n=n.ghr()
b.a.uniform4f(b.d,a1,a2,a5,n)
n=f.gaU()
if(!C.b.D(l,n)){n.a=l.length
l.push(n)}n=f.gaU()
b=n.gb2(n)
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
b.a.uniform1f(b.d,n)}if(f.gd8()){n=f.gd_()
b=c.cx
b.a.uniform1f(b.d,n)
n=f.gd0()
b=c.cy
b.a.uniform1f(b.d,n)
n=f.gd1()
b=c.db
b.a.uniform1f(b.d,n)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.m)(b3),++g){o=b3[g].a
k=b1.h(0,o)
if(k==null)k=0
o=b2.a.c2.h(0,o)
o.a.uniform1i(o.d,k)}}}if(s.f.b){b2.a9(l,b2.Q.d)
b3=b2.a
p=b2.Q.d
b3.aj(b3.de,p)}if(s.dy){b3=b2.a
p=b4.Q
if(p==null){p=b4.db
p=b4.Q=p.ga0(p).dz(0)}b3=b3.id
b3.toString
b3.ah(p.a8(0,!0))}if(s.db){b2.a9(l,b2.ch)
b3=b2.a
p=b2.ch
b3.fU(b3.df,p)
b3=s.r
if(b3.a){p=b2.a
o=b2.cx.f
p=p.dg
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.a9(l,b2.cx.d)
b3=b2.a
p=b2.cx.d
b3.aj(b3.dh,p)}b3=s.x
p=b3.a
if(p||b3.b||!1){o=b2.a
n=b2.cy.ch
o=o.di
o.a.uniform1f(o.d,n)}if(p){p=b2.a
o=b2.cy.f
p=p.dj
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.a9(l,b2.cy.d)
b3=b2.a
p=b2.cy.d
b3.aj(b3.dk,p)}}b3=s.y
p=b3.a
o=!p
if(!o||b3.b||!1){if(p){p=b2.a
n=b2.db.f
p=p.dl
p.a.uniform1f(p.d,n)}if(b3.b){b2.a9(l,b2.db.d)
p=b2.a
n=b2.db.d
p.aj(p.dm,n)}q.enable(3042)
q.blendFunc(770,771)}for(j=0;j<l.length;++j){p=l[j]
if(!p.c&&p.d){p.c=!0
q.activeTexture(33984+p.a)
q.bindTexture(3553,p.b)}}p=b5.e
p.bP(b4)
p.aS(b4)
p.il(b4)
if(!o||b3.b||!1)q.disable(3042)
for(j=0;j<l.length;++j){b3=l[j]
if(b3.c){b3.c=!1
q.activeTexture(33984+b3.a)
q.bindTexture(3553,null)}}b3=b2.a
b3.toString
q.useProgram(null)
b3.x.hq()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cC().b1}}
O.ha.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.cR(a,C.c.a4(b+3,4)*4))}}
O.hb.prototype={
$2:function(a,b){return J.cN(a.a,b.a)}}
O.hc.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.cZ(a,C.c.a4(b+3,4)*4))}}
O.hd.prototype={
$2:function(a,b){return J.cN(a.a,b.a)}}
O.he.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.dm(a,C.c.a4(b+3,4)*4))}}
O.hf.prototype={
$2:function(a,b){return J.cN(a.a,b.a)}}
O.hg.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.du(a,C.c.a4(b+3,4)*4))}}
O.hh.prototype={
$2:function(a,b){return J.cN(a.a,b.a)}}
O.h4.prototype={
ay:function(){var u,t=this
t.cp()
u=t.f
if(!(Math.abs(u-1)<$.A().a)){t.f=1
u=new D.C(t.b,u,1)
u.b=!0
t.a.X(u)}}}
O.c7.prototype={
X:function(a){return this.a.X(a)},
bF:function(){return this.X(null)},
ay:function(){},
bJ:function(a){var u,t,s=this
if(!s.c.p(0,a)){u=s.c
if(u.a||u.b||!1)t=!(a.a||a.b||!1)
else t=!0
s.c=a
if(t)s.ay()
u=s.a
u.a=null
u.X(null)}}}
O.h5.prototype={}
O.av.prototype={
cO:function(a){var u,t,s=this
if(!s.f.p(0,a)){u=s.f
s.f=a
t=new D.C(s.b+".color",u,a)
t.b=!0
s.a.X(t)}},
ay:function(){this.cp()
this.cO(new V.W(1,1,1))},
sab:function(a,b){this.bJ(new A.a_(!0,this.c.b,!1))
this.cO(b)}}
O.h7.prototype={}
O.h8.prototype={
ay:function(){var u,t=this
t.cq()
u=t.ch
if(!(Math.abs(u-1)<$.A().a)){t.ch=1
u=new D.C(t.b+".refraction",u,1)
u.b=!0
t.a.X(u)}}}
O.h9.prototype={
cP:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.A().a)){u.ch=a
t=new D.C(u.b+".shininess",t,a)
t.b=!0
u.a.X(t)}},
ay:function(){this.cq()
this.cP(100)}}
O.dA.prototype={}
T.dB.prototype={}
T.ih.prototype={}
T.ii.prototype={
gA:function(){var u=this.y
return u==null?this.y=D.N():u}}
T.ij.prototype={
hM:function(a,b){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,10497)
r.texParameteri(s,10243,10497)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=document.createElement("img")
u.src=a
t=new T.ii()
t.a=0
t.b=q
t.d=t.c=!1
W.Y(u,"load",new T.ik(this,t,u,!1,q,!1,!1),!1)
return t},
fR:function(a,b,c){var u,t,s,r
b=V.l6(b)
u=V.l6(a.width)
t=V.l6(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.kz()
s.width=u
s.height=t
r=C.i.e2(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.oW(r.getImageData(0,0,s.width,s.height))}}}
T.ik.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.fR(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.a5.ie(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.hv()}++s.e}}
X.ky.prototype={}
X.fA.prototype={
gA:function(){var u=this.x
return u==null?this.x=D.N():u}}
X.dl.prototype={
gA:function(){var u=this.f
return u==null?this.f=D.N():u},
aK:function(a){var u=this.f
if(u!=null)u.K(a)},
er:function(){return this.aK(null)},
sae:function(a){var u,t,s=this
if(!J.D(s.b,a)){u=s.b
if(u!=null)u.gA().M(0,s.gcv())
t=s.b
s.b=a
if(a!=null)a.gA().n(0,s.gcv())
u=new D.C("mover",t,s.b)
u.b=!0
s.aK(u)}}}
X.ic.prototype={}
V.cV.prototype={
bb:function(a){this.b=new P.fF(C.U)
this.c=null
this.d=H.b([],[[P.o,W.ak]])},
O:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)l.push(H.b([],[W.ak]))
u=a.split("\n")
for(l=u.length,t=[W.ak],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else m.d.push(H.b([],t))
p=document.createElement("div")
p.className="codePart"
o=m.b.eC(q,0,q.length)
n=o==null?q:o
C.S.e4(p,H.l8(n," ","&nbsp;"))
n=p.style
n.color=b
C.b.gas(m.d).push(p)}},
dL:function(a,b){var u,t,s,r=this
r.d=H.b([],[[P.o,W.ak]])
u=C.b.j(b,"\n")
t=r.c
if(t==null)t=r.c=r.bi()
for(t.toString,s=new H.n(u),s=new P.bI(t.cj(new H.b9(s,s.gm(s))).a());s.t();)r.bo(s.gC(s))}}
V.kn.prototype={
$1:function(a){var u=C.d.dX(this.a.ghF(),2)
if(u!=="0.00")P.l7(u+" fps")}}
V.ff.prototype={
bo:function(a){var u=this
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
bi:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=L.ip()
a1.d=a1.k(0,r)
u=a1.k(0,r).j(0,q)
t=K.t(new H.n("_"))
u.a.push(t)
t=K.M("a","z")
u.a.push(t)
t=K.M("A","Z")
u.a.push(t)
t=a1.k(0,q).j(0,q)
u=K.t(new H.n("_"))
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
t=K.t(new H.n("."))
u.a.push(t)
t=a1.k(0,o).j(0,n)
u=K.M("0","9")
t.a.push(u)
u=a1.k(0,n).j(0,n)
t=K.M("0","9")
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
a1.k(0,k).j(0,k).a.push(new K.aL())
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
a1.k(0,h).j(0,h).a.push(new K.aL())
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
t=new K.a6()
s=[K.ba]
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
t=new K.a6()
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
t.aE(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aE(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aE(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.fC.prototype={
bo:function(a){var u=this
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
bi:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=L.ip()
e.d=e.k(0,r)
u=e.k(0,r).j(0,q)
t=K.t(new H.n("_"))
u.a.push(t)
t=K.M("a","z")
u.a.push(t)
t=K.M("A","Z")
u.a.push(t)
t=e.k(0,q).j(0,q)
u=K.t(new H.n("_"))
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
t=K.t(new H.n("."))
u.a.push(t)
t=e.k(0,o).j(0,n)
u=K.M("0","9")
t.a.push(u)
u=e.k(0,n).j(0,n)
t=K.M("0","9")
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
e.k(0,k).j(0,m).a.push(new K.aL())
t=e.k(0,j).j(0,i)
u=K.t(new H.n("\n"))
t.a.push(u)
u=e.k(0,j).j(0,j)
t=new K.a6()
s=[K.ba]
t.a=H.b([],s)
u.a.push(t)
u=K.t(new H.n("\n"))
t.a.push(u)
u=e.k(0,r).j(0,h)
t=K.t(new H.n("#"))
u.a.push(t)
t=e.k(0,h).j(0,h)
u=new K.a6()
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
u.aE(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aE(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aE(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return e}}
V.fD.prototype={
bo:function(a){var u=this,t="#111"
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
bi:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=L.ip()
l.d=l.k(0,s)
u=l.k(0,s).j(0,r)
t=K.t(new H.n("_"))
u.a.push(t)
t=K.M("a","z")
u.a.push(t)
t=K.M("A","Z")
u.a.push(t)
t=l.k(0,r).j(0,r)
u=K.t(new H.n("_"))
t.a.push(u)
u=K.M("0","9")
t.a.push(u)
u=K.M("a","z")
t.a.push(u)
u=K.M("A","Z")
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
l.k(0,o).j(0,o).a.push(new K.aL())
l.k(0,s).j(0,m).a.push(new K.aL())
u=l.k(0,m).j(0,m)
t=new K.a6()
t.a=H.b([],[K.ba])
u.a.push(t)
u=K.t(new H.n('</\\-!>=_"'))
t.a.push(u)
u=K.M("a","z")
t.a.push(u)
u=K.M("A","Z")
t.a.push(u)
u=l.k(0,p)
u.d=u.a.R("Symbol")
u=l.k(0,n)
u.d=u.a.R("String")
u=l.k(0,r)
t=u.a.R(r)
u.d=t
t.aE(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
t=l.k(0,q)
t.d=t.a.R(q)
t=l.k(0,m)
t.d=t.a.R(m)
return l}}
V.hC.prototype={
dL:function(a,b){this.d=H.b([],[[P.o,W.ak]])
this.O(C.b.j(b,"\n"),"#111")},
bo:function(a){},
bi:function(){return}}
V.hH.prototype={
cW:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
if(m.c==null)return
u=m.a
t=P.lO().gcd().h(0,H.e(u))
if(t==null)if(d){c.$0()
m.cU(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.le(m.c).n(0,q)
o=W.n6("radio")
o.checked=s
o.name=u
W.Y(o,"change",new V.hI(m,o,c,b),!1)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.le(m.c).n(0,r.createElement("br"))},
aZ:function(a,b,c){return this.cW(a,b,c,!1)},
cU:function(a){var u,t,s=P.lO(),r=P.h,q=P.nf(s.gcd(),r,r)
q.l(0,this.a,a)
u=s.dR(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.jz([],[]).br(""),"",t)}}
V.hI.prototype={
$1:function(a){var u=this
if(u.b.checked){u.c.$0()
u.a.cU(u.d)}}}
V.hX.prototype={
ej:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.Y(q,"scroll",new V.hZ(o),!1)},
cY:function(a){var u,t,s,r,q,p,o,n
this.fX()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b,r=C.b.hK(a),s.toString,r=new H.n(r),r=new P.bI(s.cj(new H.b9(r,r.gm(r))).a());r.t();){s=r.gC(r)
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
if(H.mp(s,"|",0)){p=s.split("|")
o=u.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.d(p,1)
o.href=p[1]
o.textContent=p[0]
t.appendChild(o)}else{n=P.eA(C.z,s,C.e,!1)
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
e1:function(a){var u,t,s,r=new V.ff("dart")
r.bb("dart")
u=new V.fC("glsl")
u.bb("glsl")
t=new V.fD("html")
t.bb("html")
s=C.b.hB(H.b([r,u,t],[V.cV]),new V.i_(a))
if(s!=null)return s
r=new V.hC("plain")
r.bb("plain")
return r},
cX:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.b([],[P.w])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(J.cI(s).a3(s,"+")){b0[t]=C.a.a6(s,1)
a6.push(1)
u=!0}else if(C.a.a3(s,"-")){b0[t]=C.a.a6(s,1)
a6.push(-1)
u=!0}else a6.push(0)}r=this.e1(a8)
r.dL(0,b0)
q=document
p=q.createElement("div")
p.className="codeTableScroll"
o=q.createElement("table")
o.className="codeTable"
p.appendChild(o)
this.a.appendChild(p)
n=P.eA(C.z,a7,C.e,!1)
m=q.createElement("tr")
m.className="headerRow"
l=q.createElement("td")
l.className="headerCell"
l.colSpan=u?3:2
k=q.createElement("div")
k.className="tableHeader"
k.id=n
j=W.lg()
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
for(a2=C.b.gU(s);a2.t();)d.appendChild(a2.gC(a2))
f.appendChild(e)
f.appendChild(d)
o.appendChild(f)}},
h5:function(a){var u,t,s,r,q,p="auto",o=document,n=o.createElement("table")
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
fX:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=L.ip()
u.d=u.k(0,q)
t=u.k(0,q).j(0,p)
s=K.t(new H.n("*"))
t.a.push(s)
t.c=!0
t=u.k(0,p).j(0,p)
s=new K.a6()
r=[K.ba]
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
s=new K.a6()
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
s=new K.a6()
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
t=new K.a6()
t.a=H.b([],r)
s.a.push(t)
s=K.t(new H.n("|]"))
t.a.push(s)
s=u.k(0,k).j(0,j)
t=K.t(new H.n("]"))
s.a.push(t)
s.c=!0
s=u.k(0,k).j(0,k)
t=new K.a6()
t.a=H.b([],r)
s.a.push(t)
s=K.t(new H.n("|]"))
t.a.push(s)
u.k(0,q).j(0,i).a.push(new K.aL())
s=u.k(0,i).j(0,i)
t=new K.a6()
t.a=H.b([],r)
s.a.push(t)
s=K.t(new H.n("*_`["))
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
V.hZ.prototype={
$1:function(a){P.lK(C.m,new V.hY(this.a))}}
V.hY.prototype={
$0:function(){var u=C.d.ak(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
V.i_.prototype={
$1:function(a){return a.a===this.a}}
K.ke.prototype={
$1:function(a){var u,t,s,r,q=H.l(a,"$idx").c,p=this.a,o=this.b.au(0,q,null)
if(!J.D(p.d,o)){u=p.d
t=u==null
s=o==null
if(!(!t&&s))t=t&&!s
else t=!0
if(t)p.a=null
p.d=o
o=new D.C("colorMatrix",u,o)
o.b=!0
p.X(o)}r=V.nm(this.c.au(0,q,null))
if(!J.D(p.b,r)){o=p.b
u=o==null&&!0
if(u)p.a=null
p.b=r
o=new D.C("texture2DMatrix",o,r)
o.b=!0
p.X(o)}}}
K.kf.prototype={
$0:function(){this.a.sai(0,F.l1(1,null,null,1))}}
K.kg.prototype={
$0:function(){this.a.sai(0,F.me(!0,40,1))}}
K.kh.prototype={
$0:function(){this.a.sai(0,F.me(!1,40,0))}}
K.ki.prototype={
$0:function(){this.a.sai(0,F.ph(6,6))}}
K.kj.prototype={
$0:function(){this.a.sai(0,F.mr())}}
K.kk.prototype={
$0:function(){this.a.sai(0,F.pa())}}
K.kl.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.a,r=[P.h]
u.cX("Vertex Shader","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
t=t.a
u.cX("Fragment Shader","glsl",0,H.b((t==null?null:t.d).split("\n"),r))}};(function aliases(){var u=J.a.prototype
u.ea=u.i
u=J.d8.prototype
u.ec=u.i
u=P.j.prototype
u.eb=u.bs
u=W.P.prototype
u.bu=u.ac
u=W.ei.prototype
u.ed=u.ap
u=K.d4.prototype
u.e9=u.aC
u.co=u.i
u=O.c7.prototype
u.cp=u.ay
u=O.av.prototype
u.cq=u.ay})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installStaticTearOff,q=hunkHelpers.installInstanceTearOff,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u,n=hunkHelpers._instance_1u,m=hunkHelpers._instance_0i
u(J,"ol","na",20)
t(P,"oQ","nU",7)
t(P,"oR","nV",7)
t(P,"oS","nW",7)
s(P,"md","oO",9)
r(W,"p4",4,null,["$4"],["nX"],15,0)
r(W,"p5",4,null,["$4"],["nY"],15,0)
var l
q(l=E.aO.prototype,"gdJ",0,0,null,["$1","$0"],["dK","hV"],0,0)
q(l,"gdH",0,0,null,["$1","$0"],["dI","hU"],0,0)
q(l,"gdF",0,0,null,["$1","$0"],["dG","hR"],0,0)
p(l,"ghP","hQ",4)
p(l,"ghS","hT",4)
q(l=E.dC.prototype,"gcr",0,0,null,["$1","$0"],["ct","cs"],0,0)
o(l,"gi9","dS",9)
n(l=X.dL.prototype,"gfc","fd",5)
n(l,"gf0","f1",5)
n(l,"gf6","f7",2)
n(l,"gfg","fh",10)
n(l,"gfe","ff",10)
n(l,"gfk","fl",2)
n(l,"gfo","fp",2)
n(l,"gfa","fb",2)
n(l,"gfm","fn",2)
n(l,"gf8","f9",2)
n(l,"gfq","fs",18)
n(l,"gft","fu",5)
n(l,"gfI","fJ",6)
n(l,"gfE","fF",6)
n(l,"gfG","fH",6)
q(D.br.prototype,"gcu",0,0,null,["$1","$0"],["av","em"],0,0)
q(l=D.da.prototype,"gcK",0,0,null,["$1","$0"],["cL","fi"],0,0)
n(l,"gfw","fz",19)
p(l,"geV","eW",11)
p(l,"gfC","fD",11)
m(V.U.prototype,"gm","c8",12)
m(V.z.prototype,"gm","c8",12)
q(l=U.c0.prototype,"gbc",0,0,null,["$1","$0"],["T","am"],0,0)
p(l,"geT","eU",13)
p(l,"gfA","fB",13)
q(l=U.dM.prototype,"gbc",0,0,null,["$1","$0"],["T","am"],0,0)
n(l,"geN","eO",1)
n(l,"geP","eQ",1)
n(l,"geR","eS",1)
n(l,"geI","eJ",1)
n(l,"geK","eL",1)
n(l,"gh3","h4",1)
n(l,"gh1","h2",1)
n(l,"gh_","h0",1)
q(l=M.d1.prototype,"gan",0,0,null,["$1","$0"],["aw","en"],0,0)
p(l,"gf2","f3",4)
p(l,"gf4","f5",4)
q(l=O.dd.prototype,"gbf",0,0,null,["$1","$0"],["X","bF"],0,0)
q(l,"gfP",0,0,null,["$1","$0"],["cM","fQ"],0,0)
p(l,"geX","eY",14)
p(l,"geZ","f_",14)
q(O.c7.prototype,"gbf",0,0,null,["$1","$0"],["X","bF"],0,0)
q(X.dl.prototype,"gcv",0,0,null,["$1","$0"],["aK","er"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.a2,null)
s(P.a2,[H.kH,J.a,J.ab,P.e5,P.j,H.b9,P.fK,H.d2,H.iH,H.f7,H.iu,P.bs,H.bW,H.en,P.a1,H.fS,H.fU,H.fM,P.et,P.bH,P.bI,P.dP,P.dy,P.i8,P.dD,P.jR,P.jt,P.jn,P.e4,P.x,P.jJ,P.h0,P.f4,P.fG,P.jP,P.jO,P.aI,P.ac,P.aa,P.b4,P.hA,P.dv,P.dY,P.fz,P.fB,P.o,P.Q,P.bd,P.h,P.R,P.bJ,P.iJ,P.jw,W.fb,W.cu,W.K,W.dj,W.ei,W.jD,W.d3,W.aS,W.js,W.eB,P.jy,P.ey,P.jo,P.bE,K.aL,K.d4,K.ba,K.hJ,K.hS,L.dw,L.dE,L.dF,L.io,O.b3,O.c9,E.f0,E.aO,E.bp,E.bz,E.dX,E.hK,D.Z,E.dC,Z.dO,Z.j6,Z.cT,Z.bu,Z.aW,D.f3,D.bt,X.cU,X.d9,X.fP,X.fY,X.by,X.ho,X.iq,X.dL,D.eY,D.br,D.a5,D.hE,D.i3,V.W,V.as,V.fq,V.c8,V.aR,V.a7,V.T,V.bf,V.dp,V.U,V.z,U.dM,M.d1,A.cQ,A.eT,A.a_,A.cR,A.cZ,A.dm,A.du,A.h6,A.cm,A.cn,A.cp,A.cq,A.dI,A.iC,F.b5,F.ft,F.c4,F.fR,F.ce,F.hT,F.hU,F.hV,F.hW,F.bi,F.iV,F.iW,F.iZ,F.j0,F.j1,F.j2,O.dA,O.c7,O.h7,T.ij,X.ky,X.ic,X.dl,V.cV,V.hH,V.hX])
s(J.a,[J.fL,J.d7,J.d8,J.b6,J.c3,J.b7,H.cb,H.bc,W.f,W.eQ,W.bn,W.at,W.H,W.dR,W.ah,W.fg,W.fh,W.dT,W.d0,W.dV,W.fj,W.i,W.dZ,W.au,W.fE,W.e0,W.aP,W.fX,W.hi,W.e6,W.e7,W.ax,W.e8,W.eb,W.az,W.ef,W.eh,W.aC,W.ej,W.aD,W.eo,W.an,W.er,W.im,W.aF,W.eu,W.is,W.iO,W.eC,W.eE,W.eG,W.eI,W.eK,P.aQ,P.e2,P.aT,P.ed,P.hG,P.ep,P.aV,P.ew,P.eU,P.dQ,P.dq,P.el])
s(J.d8,[J.hB,J.bG,J.b8])
t(J.kG,J.b6)
s(J.c3,[J.d6,J.d5])
t(P.fW,P.e5)
s(P.fW,[H.dJ,W.jd,W.a3,P.fv])
t(H.n,H.dJ)
s(P.j,[H.r,H.c6,H.cs,P.fI])
s(H.r,[H.db,H.fT])
t(H.fm,H.c6)
s(P.fK,[H.h1,H.j7])
t(H.h2,H.db)
t(H.f8,H.f7)
s(P.bs,[H.hx,H.fO,H.iG,H.f2,H.hQ,P.dk,P.aj,P.iI,P.iE,P.ci,P.f6,P.fe])
s(H.bW,[H.ks,H.id,H.fN,H.k9,H.ka,H.kb,P.j9,P.j8,P.ja,P.jb,P.jI,P.jH,P.k_,P.jq,P.jr,P.fV,P.h_,P.fk,P.fl,P.iN,P.iK,P.iL,P.iM,P.jK,P.jL,P.jN,P.jM,P.jV,P.jU,P.jW,P.jX,W.fn,W.hk,W.hm,W.hP,W.i7,W.ji,W.hv,W.hu,W.ju,W.jv,W.jG,W.jQ,P.jA,P.jB,P.k0,P.fw,P.fx,P.eW,E.hL,E.hM,E.hN,E.il,D.fr,D.fs,F.jS,F.k1,F.k3,F.k4,F.k5,F.ko,F.kp,F.kr,F.kd,F.k2,F.j4,F.j3,F.iX,F.iY,O.ha,O.hb,O.hc,O.hd,O.he,O.hf,O.hg,O.hh,T.ik,V.kn,V.hI,V.hZ,V.hY,V.i_,K.ke,K.kf,K.kg,K.kh,K.ki,K.kj,K.kk,K.kl])
s(H.id,[H.i5,H.bU])
t(P.fZ,P.a1)
s(P.fZ,[H.I,W.jc])
t(H.df,H.bc)
s(H.df,[H.cw,H.cy])
t(H.cx,H.cw)
t(H.cc,H.cx)
t(H.cz,H.cy)
t(H.dg,H.cz)
s(H.dg,[H.hp,H.hq,H.hr,H.hs,H.ht,H.dh,H.cd])
t(P.jE,P.fI)
t(P.jp,P.jR)
t(P.jm,P.jt)
t(P.ez,P.h0)
t(P.dK,P.ez)
s(P.f4,[P.eZ,P.fo])
t(P.f9,P.i8)
s(P.f9,[P.f_,P.fF,P.iR,P.iQ])
t(P.iP,P.fo)
s(P.aa,[P.J,P.w])
s(P.aj,[P.bC,P.fH])
t(P.jf,P.bJ)
s(W.f,[W.E,W.fu,W.ca,W.aB,W.cA,W.aE,W.ao,W.cC,W.j5,W.ct,P.eX,P.bm])
s(W.E,[W.P,W.b2])
s(W.P,[W.p,P.k])
s(W.p,[W.eR,W.eS,W.bo,W.bq,W.ak,W.fy,W.c2,W.hR,W.dz,W.ia,W.ib,W.ck])
t(W.fa,W.at)
t(W.bX,W.dR)
s(W.ah,[W.fc,W.fd])
t(W.dU,W.dT)
t(W.d_,W.dU)
t(W.dW,W.dV)
t(W.fi,W.dW)
t(W.al,W.bn)
t(W.e_,W.dZ)
t(W.c_,W.e_)
t(W.e1,W.e0)
t(W.c1,W.e1)
t(W.bg,W.i)
s(W.bg,[W.bx,W.ay,W.bD])
t(W.hj,W.e6)
t(W.hl,W.e7)
t(W.e9,W.e8)
t(W.hn,W.e9)
t(W.ec,W.eb)
t(W.di,W.ec)
t(W.eg,W.ef)
t(W.hD,W.eg)
t(W.hO,W.eh)
t(W.cB,W.cA)
t(W.i1,W.cB)
t(W.ek,W.ej)
t(W.i2,W.ek)
t(W.i6,W.eo)
t(W.es,W.er)
t(W.ie,W.es)
t(W.cD,W.cC)
t(W.ig,W.cD)
t(W.ev,W.eu)
t(W.ir,W.ev)
t(W.bj,W.ay)
t(W.eD,W.eC)
t(W.je,W.eD)
t(W.dS,W.d0)
t(W.eF,W.eE)
t(W.jj,W.eF)
t(W.eH,W.eG)
t(W.ea,W.eH)
t(W.eJ,W.eI)
t(W.jx,W.eJ)
t(W.eL,W.eK)
t(W.jC,W.eL)
t(W.jg,W.jc)
t(W.jh,P.dy)
t(W.jF,W.ei)
t(P.jz,P.jy)
t(P.a8,P.jo)
t(P.e3,P.e2)
t(P.fQ,P.e3)
t(P.ee,P.ed)
t(P.hy,P.ee)
t(P.ch,P.k)
t(P.eq,P.ep)
t(P.i9,P.eq)
t(P.ex,P.ew)
t(P.it,P.ex)
t(P.eV,P.dQ)
t(P.hz,P.bm)
t(P.em,P.el)
t(P.i4,P.em)
s(K.d4,[K.a6,L.dH])
s(D.Z,[E.dx,D.bv,D.bw,D.C,X.hF])
s(E.f0,[Z.cS,A.ds,T.dB])
s(X.hF,[X.dc,X.bb,X.dG])
s(O.b3,[D.da,U.c0])
s(D.f3,[U.f5,U.am])
s(U.am,[U.cW,U.dr])
t(A.h3,A.ds)
s(A.dI,[A.bh,A.iz,A.iA,A.iB,A.ix,A.V,A.iy,A.G,A.cl,A.iD,A.co,A.ad,A.a0,A.bF])
t(F.i0,F.ft)
t(F.iw,F.fR)
t(F.j_,F.j0)
t(F.hw,F.j1)
t(O.dd,O.dA)
s(O.c7,[O.h4,O.h5,O.av])
s(O.av,[O.h8,O.h9])
t(T.ih,T.dB)
t(T.ii,T.ih)
t(X.fA,X.ic)
s(V.cV,[V.ff,V.fC,V.fD,V.hC])
u(H.dJ,H.iH)
u(H.cw,P.x)
u(H.cx,H.d2)
u(H.cy,P.x)
u(H.cz,H.d2)
u(P.e5,P.x)
u(P.ez,P.jJ)
u(W.dR,W.fb)
u(W.dT,P.x)
u(W.dU,W.K)
u(W.dV,P.x)
u(W.dW,W.K)
u(W.dZ,P.x)
u(W.e_,W.K)
u(W.e0,P.x)
u(W.e1,W.K)
u(W.e6,P.a1)
u(W.e7,P.a1)
u(W.e8,P.x)
u(W.e9,W.K)
u(W.eb,P.x)
u(W.ec,W.K)
u(W.ef,P.x)
u(W.eg,W.K)
u(W.eh,P.a1)
u(W.cA,P.x)
u(W.cB,W.K)
u(W.ej,P.x)
u(W.ek,W.K)
u(W.eo,P.a1)
u(W.er,P.x)
u(W.es,W.K)
u(W.cC,P.x)
u(W.cD,W.K)
u(W.eu,P.x)
u(W.ev,W.K)
u(W.eC,P.x)
u(W.eD,W.K)
u(W.eE,P.x)
u(W.eF,W.K)
u(W.eG,P.x)
u(W.eH,W.K)
u(W.eI,P.x)
u(W.eJ,W.K)
u(W.eK,P.x)
u(W.eL,W.K)
u(P.e2,P.x)
u(P.e3,W.K)
u(P.ed,P.x)
u(P.ee,W.K)
u(P.ep,P.x)
u(P.eq,W.K)
u(P.ew,P.x)
u(P.ex,W.K)
u(P.dQ,P.a1)
u(P.el,P.x)
u(P.em,W.K)})()
var v={mangledGlobalNames:{w:"int",J:"double",aa:"num",h:"String",aI:"bool",bd:"Null",o:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.Z]},{func:1,ret:-1,args:[D.Z]},{func:1,ret:-1,args:[W.ay]},{func:1,ret:P.bd,args:[,,]},{func:1,ret:-1,args:[P.w,[P.j,E.aO]]},{func:1,ret:-1,args:[W.i]},{func:1,ret:-1,args:[W.bD]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bx]},{func:1,ret:-1,args:[P.w,[P.j,D.a5]]},{func:1,ret:P.J},{func:1,ret:-1,args:[P.w,[P.j,U.am]]},{func:1,ret:-1,args:[P.w,[P.j,V.aR]]},{func:1,ret:P.aI,args:[W.P,P.h,P.h,W.cu]},{func:1,ret:P.bd,args:[,]},{func:1,ret:P.bE,args:[,,]},{func:1,ret:-1,args:[W.bj]},{func:1,ret:P.aI,args:[[P.j,D.a5]]},{func:1,ret:P.w,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.q=W.bo.prototype
C.i=W.bq.prototype
C.S=W.ak.prototype
C.V=J.a.prototype
C.b=J.b6.prototype
C.W=J.d5.prototype
C.c=J.d6.prototype
C.w=J.d7.prototype
C.d=J.c3.prototype
C.a=J.b7.prototype
C.X=J.b8.prototype
C.D=J.hB.prototype
C.a5=P.dq.prototype
C.E=W.dz.prototype
C.p=J.bG.prototype
C.F=W.bj.prototype
C.G=W.ct.prototype
C.H=new E.bp("Browser.chrome")
C.r=new E.bp("Browser.firefox")
C.t=new E.bp("Browser.edge")
C.I=new E.bp("Browser.other")
C.a7=new P.f_()
C.J=new P.eZ()
C.u=function getTagFallback(o) {
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
C.v=function(hooks) { return hooks; }

C.Q=new P.hA()
C.e=new P.iP()
C.R=new P.iR()
C.f=new P.jp()
C.m=new P.b4(0)
C.T=new P.b4(5e6)
C.U=new P.fG("element",!1,!1,!1)
C.x=H.b(u([127,2047,65535,1114111]),[P.w])
C.j=H.b(u([0,0,32776,33792,1,10240,0,0]),[P.w])
C.Y=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.k=H.b(u([0,0,65490,45055,65535,34815,65534,18431]),[P.w])
C.l=H.b(u([0,0,26624,1023,65534,2047,65534,2047]),[P.w])
C.Z=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.y=H.b(u([]),[P.h])
C.a_=H.b(u([0,0,32722,12287,65534,34815,65534,18431]),[P.w])
C.z=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.w])
C.h=H.b(u([0,0,24576,1023,65534,34815,65534,18431]),[P.w])
C.A=H.b(u([0,0,32754,11263,65534,34815,65534,18431]),[P.w])
C.a0=H.b(u([0,0,32722,12287,65535,34815,65534,18431]),[P.w])
C.B=H.b(u([0,0,65490,12287,65535,34815,65534,18431]),[P.w])
C.n=H.b(u(["bind","if","ref","repeat","syntax"]),[P.h])
C.o=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])
C.a1=new H.f8(0,{},C.y,[P.h,P.h])
C.a2=new E.bz("OperatingSystem.windows")
C.C=new E.bz("OperatingSystem.mac")
C.a3=new E.bz("OperatingSystem.linux")
C.a4=new E.bz("OperatingSystem.other")
C.a6=new P.bH(null,2)})();(function staticFields(){$.ar=0
$.bV=null
$.li=null
$.mj=null
$.mc=null
$.mn=null
$.k6=null
$.kc=null
$.l4=null
$.bM=null
$.cG=null
$.cH=null
$.kZ=!1
$.ap=C.f
$.a9=[]
$.aN=null
$.kC=null
$.lp=null
$.lo=null
$.cv=P.kJ(P.h,P.fB)
$.fp=null
$.lw=null
$.lz=null
$.aA=null
$.lF=null
$.lS=null
$.lV=null
$.lU=null
$.iS=null
$.iT=null
$.iU=null
$.lT=null
$.ly=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pn","mt",function(){return H.mi("_$dart_dartClosure")})
u($,"po","la",function(){return H.mi("_$dart_js")})
u($,"pp","mu",function(){return H.aG(H.iv({
toString:function(){return"$receiver$"}}))})
u($,"pq","mv",function(){return H.aG(H.iv({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"pr","mw",function(){return H.aG(H.iv(null))})
u($,"ps","mx",function(){return H.aG(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pv","mA",function(){return H.aG(H.iv(void 0))})
u($,"pw","mB",function(){return H.aG(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pu","mz",function(){return H.aG(H.lM(null))})
u($,"pt","my",function(){return H.aG(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"py","mD",function(){return H.aG(H.lM(void 0))})
u($,"px","mC",function(){return H.aG(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"pM","lb",function(){return P.nT()})
u($,"pz","mE",function(){return P.nP()})
u($,"pN","mI",function(){return H.nn(H.bL(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.w])))})
u($,"pQ","mK",function(){return P.nB("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"pR","mL",function(){return P.oj()})
u($,"pO","mJ",function(){return P.ls(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)})
u($,"pG","mH",function(){return Z.ai(0)})
u($,"pA","mF",function(){return Z.ai(511)})
u($,"pI","b0",function(){return Z.ai(1)})
u($,"pH","b_",function(){return Z.ai(2)})
u($,"pC","aZ",function(){return Z.ai(4)})
u($,"pJ","b1",function(){return Z.ai(8)})
u($,"pK","bl",function(){return Z.ai(16)})
u($,"pD","cL",function(){return Z.ai(32)})
u($,"pE","cM",function(){return Z.ai(64)})
u($,"pF","mG",function(){return Z.ai(96)})
u($,"pL","bS",function(){return Z.ai(128)})
u($,"pB","aY",function(){return Z.ai(256)})
u($,"pm","ms",function(){return new V.fq(1e-9)})
u($,"pl","A",function(){return $.ms()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cb,DataView:H.bc,ArrayBufferView:H.bc,Float32Array:H.cc,Float64Array:H.cc,Int16Array:H.hp,Int32Array:H.hq,Int8Array:H.hr,Uint16Array:H.hs,Uint32Array:H.ht,Uint8ClampedArray:H.dh,CanvasPixelArray:H.dh,Uint8Array:H.cd,HTMLAudioElement:W.p,HTMLBRElement:W.p,HTMLBaseElement:W.p,HTMLButtonElement:W.p,HTMLContentElement:W.p,HTMLDListElement:W.p,HTMLDataElement:W.p,HTMLDataListElement:W.p,HTMLDetailsElement:W.p,HTMLDialogElement:W.p,HTMLEmbedElement:W.p,HTMLFieldSetElement:W.p,HTMLHRElement:W.p,HTMLHeadElement:W.p,HTMLHeadingElement:W.p,HTMLHtmlElement:W.p,HTMLIFrameElement:W.p,HTMLInputElement:W.p,HTMLLIElement:W.p,HTMLLabelElement:W.p,HTMLLegendElement:W.p,HTMLLinkElement:W.p,HTMLMapElement:W.p,HTMLMediaElement:W.p,HTMLMenuElement:W.p,HTMLMetaElement:W.p,HTMLMeterElement:W.p,HTMLModElement:W.p,HTMLOListElement:W.p,HTMLObjectElement:W.p,HTMLOptGroupElement:W.p,HTMLOptionElement:W.p,HTMLOutputElement:W.p,HTMLParagraphElement:W.p,HTMLParamElement:W.p,HTMLPictureElement:W.p,HTMLPreElement:W.p,HTMLProgressElement:W.p,HTMLQuoteElement:W.p,HTMLScriptElement:W.p,HTMLShadowElement:W.p,HTMLSlotElement:W.p,HTMLSourceElement:W.p,HTMLSpanElement:W.p,HTMLStyleElement:W.p,HTMLTableCaptionElement:W.p,HTMLTableCellElement:W.p,HTMLTableDataCellElement:W.p,HTMLTableHeaderCellElement:W.p,HTMLTableColElement:W.p,HTMLTextAreaElement:W.p,HTMLTimeElement:W.p,HTMLTitleElement:W.p,HTMLTrackElement:W.p,HTMLUListElement:W.p,HTMLUnknownElement:W.p,HTMLVideoElement:W.p,HTMLDirectoryElement:W.p,HTMLFontElement:W.p,HTMLFrameElement:W.p,HTMLFrameSetElement:W.p,HTMLMarqueeElement:W.p,HTMLElement:W.p,AccessibleNodeList:W.eQ,HTMLAnchorElement:W.eR,HTMLAreaElement:W.eS,Blob:W.bn,HTMLBodyElement:W.bo,HTMLCanvasElement:W.bq,CDATASection:W.b2,CharacterData:W.b2,Comment:W.b2,ProcessingInstruction:W.b2,Text:W.b2,CSSPerspective:W.fa,CSSCharsetRule:W.H,CSSConditionRule:W.H,CSSFontFaceRule:W.H,CSSGroupingRule:W.H,CSSImportRule:W.H,CSSKeyframeRule:W.H,MozCSSKeyframeRule:W.H,WebKitCSSKeyframeRule:W.H,CSSKeyframesRule:W.H,MozCSSKeyframesRule:W.H,WebKitCSSKeyframesRule:W.H,CSSMediaRule:W.H,CSSNamespaceRule:W.H,CSSPageRule:W.H,CSSRule:W.H,CSSStyleRule:W.H,CSSSupportsRule:W.H,CSSViewportRule:W.H,CSSStyleDeclaration:W.bX,MSStyleCSSProperties:W.bX,CSS2Properties:W.bX,CSSImageValue:W.ah,CSSKeywordValue:W.ah,CSSNumericValue:W.ah,CSSPositionValue:W.ah,CSSResourceValue:W.ah,CSSUnitValue:W.ah,CSSURLImageValue:W.ah,CSSStyleValue:W.ah,CSSMatrixComponent:W.at,CSSRotation:W.at,CSSScale:W.at,CSSSkew:W.at,CSSTranslation:W.at,CSSTransformComponent:W.at,CSSTransformValue:W.fc,CSSUnparsedValue:W.fd,DataTransferItemList:W.fg,HTMLDivElement:W.ak,DOMException:W.fh,ClientRectList:W.d_,DOMRectList:W.d_,DOMRectReadOnly:W.d0,DOMStringList:W.fi,DOMTokenList:W.fj,Element:W.P,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.al,FileList:W.c_,FileWriter:W.fu,HTMLFormElement:W.fy,Gamepad:W.au,History:W.fE,HTMLCollection:W.c1,HTMLFormControlsCollection:W.c1,HTMLOptionsCollection:W.c1,ImageData:W.aP,HTMLImageElement:W.c2,KeyboardEvent:W.bx,Location:W.fX,MediaList:W.hi,MessagePort:W.ca,MIDIInputMap:W.hj,MIDIOutputMap:W.hl,MimeType:W.ax,MimeTypeArray:W.hn,PointerEvent:W.ay,MouseEvent:W.ay,DragEvent:W.ay,Document:W.E,DocumentFragment:W.E,HTMLDocument:W.E,ShadowRoot:W.E,XMLDocument:W.E,Attr:W.E,DocumentType:W.E,Node:W.E,NodeList:W.di,RadioNodeList:W.di,Plugin:W.az,PluginArray:W.hD,RTCStatsReport:W.hO,HTMLSelectElement:W.hR,SourceBuffer:W.aB,SourceBufferList:W.i1,SpeechGrammar:W.aC,SpeechGrammarList:W.i2,SpeechRecognitionResult:W.aD,Storage:W.i6,CSSStyleSheet:W.an,StyleSheet:W.an,HTMLTableElement:W.dz,HTMLTableRowElement:W.ia,HTMLTableSectionElement:W.ib,HTMLTemplateElement:W.ck,TextTrack:W.aE,TextTrackCue:W.ao,VTTCue:W.ao,TextTrackCueList:W.ie,TextTrackList:W.ig,TimeRanges:W.im,Touch:W.aF,TouchEvent:W.bD,TouchList:W.ir,TrackDefaultList:W.is,CompositionEvent:W.bg,FocusEvent:W.bg,TextEvent:W.bg,UIEvent:W.bg,URL:W.iO,VideoTrackList:W.j5,WheelEvent:W.bj,Window:W.ct,DOMWindow:W.ct,CSSRuleList:W.je,ClientRect:W.dS,DOMRect:W.dS,GamepadList:W.jj,NamedNodeMap:W.ea,MozNamedAttrMap:W.ea,SpeechRecognitionResultList:W.jx,StyleSheetList:W.jC,SVGLength:P.aQ,SVGLengthList:P.fQ,SVGNumber:P.aT,SVGNumberList:P.hy,SVGPointList:P.hG,SVGScriptElement:P.ch,SVGStringList:P.i9,SVGAElement:P.k,SVGAnimateElement:P.k,SVGAnimateMotionElement:P.k,SVGAnimateTransformElement:P.k,SVGAnimationElement:P.k,SVGCircleElement:P.k,SVGClipPathElement:P.k,SVGDefsElement:P.k,SVGDescElement:P.k,SVGDiscardElement:P.k,SVGEllipseElement:P.k,SVGFEBlendElement:P.k,SVGFEColorMatrixElement:P.k,SVGFEComponentTransferElement:P.k,SVGFECompositeElement:P.k,SVGFEConvolveMatrixElement:P.k,SVGFEDiffuseLightingElement:P.k,SVGFEDisplacementMapElement:P.k,SVGFEDistantLightElement:P.k,SVGFEFloodElement:P.k,SVGFEFuncAElement:P.k,SVGFEFuncBElement:P.k,SVGFEFuncGElement:P.k,SVGFEFuncRElement:P.k,SVGFEGaussianBlurElement:P.k,SVGFEImageElement:P.k,SVGFEMergeElement:P.k,SVGFEMergeNodeElement:P.k,SVGFEMorphologyElement:P.k,SVGFEOffsetElement:P.k,SVGFEPointLightElement:P.k,SVGFESpecularLightingElement:P.k,SVGFESpotLightElement:P.k,SVGFETileElement:P.k,SVGFETurbulenceElement:P.k,SVGFilterElement:P.k,SVGForeignObjectElement:P.k,SVGGElement:P.k,SVGGeometryElement:P.k,SVGGraphicsElement:P.k,SVGImageElement:P.k,SVGLineElement:P.k,SVGLinearGradientElement:P.k,SVGMarkerElement:P.k,SVGMaskElement:P.k,SVGMetadataElement:P.k,SVGPathElement:P.k,SVGPatternElement:P.k,SVGPolygonElement:P.k,SVGPolylineElement:P.k,SVGRadialGradientElement:P.k,SVGRectElement:P.k,SVGSetElement:P.k,SVGStopElement:P.k,SVGStyleElement:P.k,SVGSVGElement:P.k,SVGSwitchElement:P.k,SVGSymbolElement:P.k,SVGTSpanElement:P.k,SVGTextContentElement:P.k,SVGTextElement:P.k,SVGTextPathElement:P.k,SVGTextPositioningElement:P.k,SVGTitleElement:P.k,SVGUseElement:P.k,SVGViewElement:P.k,SVGGradientElement:P.k,SVGComponentTransferFunctionElement:P.k,SVGFEDropShadowElement:P.k,SVGMPathElement:P.k,SVGElement:P.k,SVGTransform:P.aV,SVGTransformList:P.it,AudioBuffer:P.eU,AudioParamMap:P.eV,AudioTrackList:P.eX,AudioContext:P.bm,webkitAudioContext:P.bm,BaseAudioContext:P.bm,OfflineAudioContext:P.hz,WebGL2RenderingContext:P.dq,SQLResultSetRowList:P.i4})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.df.$nativeSuperclassTag="ArrayBufferView"
H.cw.$nativeSuperclassTag="ArrayBufferView"
H.cx.$nativeSuperclassTag="ArrayBufferView"
H.cc.$nativeSuperclassTag="ArrayBufferView"
H.cy.$nativeSuperclassTag="ArrayBufferView"
H.cz.$nativeSuperclassTag="ArrayBufferView"
H.dg.$nativeSuperclassTag="ArrayBufferView"
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
if(typeof dartMainRunner==="function")dartMainRunner(K.ml,[])
else K.ml([])})})()
//# sourceMappingURL=test.dart.js.map
