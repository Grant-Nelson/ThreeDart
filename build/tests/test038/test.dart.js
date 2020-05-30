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
a[c]=function(){a[c]=function(){H.nS(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jZ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jZ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jZ(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jF:function jF(){},
jg:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
lU:function(a,b,c,d){if(!!J.R(a).$iq)return new H.f0(a,b,[c,d])
return new H.bU(a,b,[c,d])},
lK:function(){return new P.hr("No element")},
mh:function(a,b){var u=J.ag(a)
if(typeof u!=="number")return u.w()
H.d8(a,0,u-1,b)},
d8:function(a,b,c,d){if(c-b<=32)H.mg(a,b,c,d)
else H.mf(a,b,c,d)},
mg:function(a,b,c,d){var u,t,s,r,q,p
for(u=b+1,t=J.bb(a);u<=c;++u){s=t.h(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.h(a,r-1),s)
if(typeof q!=="number")return q.W()
q=q>0}else q=!1
if(!q)break
p=r-1
t.j(a,r,t.h(a,p))
r=p}t.j(a,r,s)}},
mf:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j=C.c.a_(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.a_(a4+a5,2),f=g-j,e=g+j,d=J.bb(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.W()
if(a2>0){u=b
b=c
c=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.W()
if(a2>0){u=a1
a1=a0
a0=u}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.W()
if(a2>0){u=a
a=c
c=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.W()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.W()
if(a2>0){u=a0
a0=c
c=u}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.W()
if(a2>0){u=a0
a0=a
a=u}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.W()
if(a2>0){u=a1
a1=b
b=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.W()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.W()
if(a2>0){u=a1
a1=a0
a0=u}d.j(a3,i,c)
d.j(a3,g,a)
d.j(a3,h,a1)
d.j(a3,f,d.h(a3,a4))
d.j(a3,e,d.h(a3,a5))
t=a4+1
s=a5-1
if(J.I(a6.$2(b,a0),0)){for(r=t;r<=s;++r){q=d.h(a3,r)
p=a6.$2(q,b)
if(p===0)continue
if(typeof p!=="number")return p.L()
if(p<0){if(r!==t){d.j(a3,r,d.h(a3,t))
d.j(a3,t,q)}++t}else for(;!0;){p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.W()
if(p>0){--s
continue}else{o=s-1
if(p<0){d.j(a3,r,d.h(a3,t))
n=t+1
d.j(a3,t,d.h(a3,s))
d.j(a3,s,q)
s=o
t=n
break}else{d.j(a3,r,d.h(a3,s))
d.j(a3,s,q)
s=o
break}}}}m=!0}else{for(r=t;r<=s;++r){q=d.h(a3,r)
l=a6.$2(q,b)
if(typeof l!=="number")return l.L()
if(l<0){if(r!==t){d.j(a3,r,d.h(a3,t))
d.j(a3,t,q)}++t}else{k=a6.$2(q,a0)
if(typeof k!=="number")return k.W()
if(k>0)for(;!0;){p=a6.$2(d.h(a3,s),a0)
if(typeof p!=="number")return p.W()
if(p>0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.L()
o=s-1
if(p<0){d.j(a3,r,d.h(a3,t))
n=t+1
d.j(a3,t,d.h(a3,s))
d.j(a3,s,q)
t=n}else{d.j(a3,r,d.h(a3,s))
d.j(a3,s,q)}s=o
break}}}}m=!1}a2=t-1
d.j(a3,a4,d.h(a3,a2))
d.j(a3,a2,b)
a2=s+1
d.j(a3,a5,d.h(a3,a2))
d.j(a3,a2,a0)
H.d8(a3,a4,t-2,a6)
H.d8(a3,s+2,a5,a6)
if(m)return
if(t<i&&s>h){for(;J.I(a6.$2(d.h(a3,t),b),0);)++t
for(;J.I(a6.$2(d.h(a3,s),a0),0);)--s
for(r=t;r<=s;++r){q=d.h(a3,r)
if(a6.$2(q,b)===0){if(r!==t){d.j(a3,r,d.h(a3,t))
d.j(a3,t,q)}++t}else if(a6.$2(q,a0)===0)for(;!0;)if(a6.$2(d.h(a3,s),a0)===0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.L()
o=s-1
if(p<0){d.j(a3,r,d.h(a3,t))
n=t+1
d.j(a3,t,d.h(a3,s))
d.j(a3,s,q)
t=n}else{d.j(a3,r,d.h(a3,s))
d.j(a3,s,q)}s=o
break}}H.d8(a3,t,s,a6)}else H.d8(a3,t,s,a6)},
L:function L(a){this.a=a},
q:function q(){},
bT:function bT(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bU:function bU(a,b,c){this.a=a
this.b=b
this.$ti=c},
f0:function f0(a,b,c){this.a=a
this.b=b
this.$ti=c},
fx:function fx(a,b){this.a=null
this.b=a
this.c=b},
im:function im(a,b,c){this.a=a
this.b=b
this.$ti=c},
io:function io(a,b){this.a=a
this.b=b},
cJ:function cJ(){},
hY:function hY(){},
dm:function dm(){},
lD:function(){throw H.b(P.w("Cannot modify unmodifiable Map"))},
cr:function(a){var u,t=H.nT(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
nE:function(a){return v.types[a]},
l0:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.R(a).$iz},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a8(a)
if(typeof u!=="string")throw H.b(H.ac(a))
return u},
c2:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
m7:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.d(p,3)
u=p[3]
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.b(P.V(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.a.G(s,q)|32)>t)return}return parseInt(a,b)},
c3:function(a){return H.lZ(a)+H.kR(H.cq(a),0,null)},
lZ:function(a){var u,t,s,r,q,p,o,n=J.R(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.I||!!n.$ibv){r=C.p(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cr(t.length>1&&C.a.G(t,0)===36?C.a.a3(t,1):t)},
m_:function(){if(!!self.location)return self.location.href
return},
ks:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
m8:function(a){var u,t,s,r=H.c([],[P.t])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.p)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.b(H.ac(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.aG(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.b(H.ac(s))}return H.ks(r)},
kt:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.b(H.ac(s))
if(s<0)throw H.b(H.ac(s))
if(s>65535)return H.m8(a)}return H.ks(a)},
m9:function(a,b,c){var u,t,s,r
if(typeof c!=="number")return c.hN()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
if(s<c)r=s
else r=c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
d2:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.aG(u,10))>>>0,56320|u&1023)}}throw H.b(P.V(a,0,1114111,null,null))},
bq:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
m6:function(a){var u=H.bq(a).getFullYear()+0
return u},
m4:function(a){var u=H.bq(a).getMonth()+1
return u},
m0:function(a){var u=H.bq(a).getDate()+0
return u},
m1:function(a){var u=H.bq(a).getHours()+0
return u},
m3:function(a){var u=H.bq(a).getMinutes()+0
return u},
m5:function(a){var u=H.bq(a).getSeconds()+0
return u},
m2:function(a){var u=H.bq(a).getMilliseconds()+0
return u},
j:function(a){throw H.b(H.ac(a))},
d:function(a,b){if(a==null)J.ag(a)
throw H.b(H.bD(a,b))},
bD:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.al(!0,b,s,null)
u=J.ag(a)
if(!(b<0)){if(typeof u!=="number")return H.j(u)
t=b>=u}else t=!0
if(t)return P.K(b,a,s,null,u)
return P.d3(b,s)},
nx:function(a,b,c){var u="Invalid value"
if(a>c)return new P.br(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.br(a,c,!0,b,"end",u)
return new P.al(!0,b,"end",null)},
ac:function(a){return new P.al(!0,a,null,null)},
ns:function(a){if(typeof a!=="number")throw H.b(H.ac(a))
return a},
b:function(a){var u
if(a==null)a=new P.d_()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.l7})
u.name=""}else u.toString=H.l7
return u},
l7:function(){return J.a8(this.dartException)},
o:function(a){throw H.b(a)},
p:function(a){throw H.b(P.bi(a))},
aB:function(a){var u,t,s,r,q,p
a=H.l4(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.n])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hM(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hN:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kC:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
ko:function(a,b){return new H.fZ(a,b==null?null:b.method)},
jG:function(a,b){var u=b==null,t=u?null:b.method
return new H.fk(a,t,u?null:b.receiver)},
bd:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.jq(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.aG(t,16)&8191)===10)switch(s){case 438:return f.$1(H.jG(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.ko(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.la()
q=$.lb()
p=$.lc()
o=$.ld()
n=$.lg()
m=$.lh()
l=$.lf()
$.le()
k=$.lj()
j=$.li()
i=r.aa(u)
if(i!=null)return f.$1(H.jG(u,i))
else{i=q.aa(u)
if(i!=null){i.method="call"
return f.$1(H.jG(u,i))}else{i=p.aa(u)
if(i==null){i=o.aa(u)
if(i==null){i=n.aa(u)
if(i==null){i=m.aa(u)
if(i==null){i=l.aa(u)
if(i==null){i=o.aa(u)
if(i==null){i=k.aa(u)
if(i==null){i=j.aa(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.ko(u,i))}}return f.$1(new H.hX(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.da()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.al(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.da()
return a},
k0:function(a){var u
if(a==null)return new H.e0(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.e0(a)},
nB:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.j(0,a[u],a[t])}return b},
nJ:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.u("Unsupported number of arguments for wrapped closure"))},
bC:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nJ)
a.$identity=u
return u},
lC:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hs().constructor.prototype):Object.create(new H.bH(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.am
if(typeof t!=="number")return t.v()
$.am=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.kc(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.ly(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.kc(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
ly:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.nE,a)
if(typeof a=="function")if(b)return a
else{u=c?H.kb:H.jv
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.b("Error in functionType of tearoff")},
lz:function(a,b,c,d){var u=H.jv
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
kc:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.lB(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.lz(t,!r,u,b)
if(t===0){r=$.am
if(typeof r!=="number")return r.v()
$.am=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bI
return new Function(r+H.e(q==null?$.bI=H.eD("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.am
if(typeof r!=="number")return r.v()
$.am=r+1
o+=r
r="return function("+o+"){return this."
q=$.bI
return new Function(r+H.e(q==null?$.bI=H.eD("self"):q)+"."+H.e(u)+"("+o+");}")()},
lA:function(a,b,c,d){var u=H.jv,t=H.kb
switch(b?-1:a){case 0:throw H.b(H.md("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
lB:function(a,b){var u,t,s,r,q,p,o,n=$.bI
if(n==null)n=$.bI=H.eD("self")
u=$.ka
if(u==null)u=$.ka=H.eD("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.lA(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.am
if(typeof u!=="number")return u.v()
$.am=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.am
if(typeof u!=="number")return u.v()
$.am=u+1
return new Function(n+u+"}")()},
jZ:function(a,b,c,d,e,f,g){return H.lC(a,b,c,d,!!e,!!f,g)},
jv:function(a){return a.a},
kb:function(a){return a.c},
eD:function(a){var u,t,s,r=new H.bH("self","target","receiver","name"),q=J.jD(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
nN:function(a,b){throw H.b(H.lx(a,H.cr(b.substring(2))))},
m:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.R(a)[b]
else u=!0
if(u)return a
H.nN(a,b)},
nz:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
lx:function(a,b){return new H.eE("CastError: "+P.jB(a)+": type '"+H.e(H.no(a))+"' is not a subtype of type '"+b+"'")},
no:function(a){var u,t=J.R(a)
if(!!t.$ibJ){u=H.nz(t)
if(u!=null)return H.nO(u)
return"Closure"}return H.c3(a)},
nS:function(a){throw H.b(new P.eU(a))},
md:function(a){return new H.hd(a)},
kY:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
cq:function(a){if(a==null)return
return a.$ti},
or:function(a,b,c){return H.jp(a["$a"+H.e(c)],H.cq(b))},
nD:function(a,b,c,d){var u=H.jp(a["$a"+H.e(c)],H.cq(b))
return u==null?null:u[d]},
kZ:function(a,b,c){var u=H.jp(a["$a"+H.e(b)],H.cq(a))
return u==null?null:u[c]},
bc:function(a,b){var u=H.cq(a)
return u==null?null:u[b]},
nO:function(a){return H.ba(a,null)},
ba:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cr(a[0].name)+H.kR(a,1,b)
if(typeof a=="function")return H.cr(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.e(b[t])}if('func' in a)return H.mU(a,b)
if('futureOr' in a)return"FutureOr<"+H.ba("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mU:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],[P.n])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.d(a0,m)
p=C.a.v(p,a0[m])
l=u[q]
if(l!=null&&l!==P.a_)p+=" extends "+H.ba(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.ba(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.ba(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.ba(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.nA(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.ba(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
kR:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.P("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.ba(p,c)}return"<"+u.i(0)+">"},
jp:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
op:function(a,b,c){return a.apply(b,H.jp(J.R(b)["$a"+H.e(c)],H.cq(b)))},
oq:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
nK:function(a){var u,t,s,r,q=$.l_.$1(a),p=$.jb[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jk[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.kW.$2(a,q)
if(q!=null){p=$.jb[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jk[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.jn(u)
$.jb[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.jk[q]=u
return u}if(s==="-"){r=H.jn(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.l2(a,u)
if(s==="*")throw H.b(P.hW(q))
if(v.leafTags[q]===true){r=H.jn(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.l2(a,u)},
l2:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.k2(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jn:function(a){return J.k2(a,!1,null,!!a.$iz)},
nL:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jn(u)
else return J.k2(u,c,null,null)},
nH:function(){if(!0===$.k1)return
$.k1=!0
H.nI()},
nI:function(){var u,t,s,r,q,p,o,n
$.jb=Object.create(null)
$.jk=Object.create(null)
H.nG()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.l3.$1(q)
if(p!=null){o=H.nL(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
nG:function(){var u,t,s,r,q,p,o=C.z()
o=H.bB(C.A,H.bB(C.B,H.bB(C.q,H.bB(C.q,H.bB(C.C,H.bB(C.D,H.bB(C.E(C.p),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.l_=new H.jh(r)
$.kW=new H.ji(q)
$.l3=new H.jj(p)},
bB:function(a,b){return a(b)||b},
lO:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.b(P.N("Illegal RegExp pattern ("+String(p)+")",a,null))},
nQ:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
ny:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
l4:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
l5:function(a,b,c){var u=H.nR(a,b,c)
return u},
nR:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.l4(b),'g'),H.ny(c))},
eN:function eN(){},
eO:function eO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hM:function hM(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fZ:function fZ(a,b){this.a=a
this.b=b},
fk:function fk(a,b,c){this.a=a
this.b=b
this.c=c},
hX:function hX(a){this.a=a},
jq:function jq(a){this.a=a},
e0:function e0(a){this.a=a
this.b=null},
bJ:function bJ(){},
hy:function hy(){},
hs:function hs(){},
bH:function bH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eE:function eE(a){this.a=a},
hd:function hd(a){this.a=a},
F:function F(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fj:function fj(a){this.a=a},
fn:function fn(a,b){this.a=a
this.b=b
this.c=null},
fo:function fo(a,b){this.a=a
this.$ti=b},
fp:function fp(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jh:function jh(a){this.a=a},
ji:function ji(a){this.a=a},
jj:function jj(a){this.a=a},
fi:function fi(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bz:function(a){return a},
lY:function(a){return new Int8Array(a)},
aC:function(a,b,c){if(a>>>0!==a||a>=c)throw H.b(H.bD(b,a))},
mS:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.b(H.nx(a,b,c))
return b},
bY:function bY(){},
b4:function b4(){},
cW:function cW(){},
bZ:function bZ(){},
cX:function cX(){},
fU:function fU(){},
fV:function fV(){},
fW:function fW(){},
fX:function fX(){},
fY:function fY(){},
cY:function cY(){},
c_:function c_(){},
cd:function cd(){},
ce:function ce(){},
cf:function cf(){},
cg:function cg(){},
nA:function(a){return J.kf(a?Object.keys(a):[],null)},
nT:function(a){return v.mangledGlobalNames[a]},
nM:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
k2:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jd:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.k1==null){H.nH()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.b(P.hW("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.k5()]
if(r!=null)return r
r=H.nK(a)
if(r!=null)return r
if(typeof a=="function")return C.K
u=Object.getPrototypeOf(a)
if(u==null)return C.v
if(u===Object.prototype)return C.v
if(typeof s=="function"){Object.defineProperty(s,$.k5(),{value:C.o,enumerable:false,writable:true,configurable:true})
return C.o}return C.o},
lL:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.b(P.ju(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.b(P.V(a,0,4294967295,"length",null))
return J.kf(new Array(a),b)},
kf:function(a,b){return J.jD(H.c(a,[b]))},
jD:function(a){a.fixed$length=Array
return a},
lM:function(a,b){return J.cu(a,b)},
R:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cN.prototype
return J.cM.prototype}if(typeof a=="string")return J.b0.prototype
if(a==null)return J.cO.prototype
if(typeof a=="boolean")return J.fh.prototype
if(a.constructor==Array)return J.b_.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b1.prototype
return a}if(a instanceof P.a_)return a
return J.jd(a)},
bb:function(a){if(typeof a=="string")return J.b0.prototype
if(a==null)return a
if(a.constructor==Array)return J.b_.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b1.prototype
return a}if(a instanceof P.a_)return a
return J.jd(a)},
jc:function(a){if(a==null)return a
if(a.constructor==Array)return J.b_.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b1.prototype
return a}if(a instanceof P.a_)return a
return J.jd(a)},
nC:function(a){if(typeof a=="number")return J.bQ.prototype
if(typeof a=="string")return J.b0.prototype
if(a==null)return a
if(!(a instanceof P.a_))return J.bv.prototype
return a},
k_:function(a){if(typeof a=="string")return J.b0.prototype
if(a==null)return a
if(!(a instanceof P.a_))return J.bv.prototype
return a},
en:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b1.prototype
return a}if(a instanceof P.a_)return a
return J.jd(a)},
I:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.R(a).n(a,b)},
bG:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.l0(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bb(a).h(a,b)},
js:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.l0(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.jc(a).j(a,b,c)},
lr:function(a,b){return J.k_(a).G(a,b)},
ls:function(a,b,c){return J.en(a).fm(a,b,c)},
lt:function(a,b,c,d){return J.en(a).fH(a,b,c,d)},
lu:function(a,b){return J.k_(a).R(a,b)},
cu:function(a,b){return J.nC(a).aI(a,b)},
jt:function(a,b){return J.jc(a).H(a,b)},
lv:function(a,b,c,d){return J.en(a).h0(a,b,c,d)},
k7:function(a,b){return J.jc(a).E(a,b)},
k8:function(a){return J.en(a).gbL(a)},
cv:function(a){return J.R(a).gF(a)},
aU:function(a){return J.jc(a).gP(a)},
ag:function(a){return J.bb(a).gk(a)},
lw:function(a,b){return J.en(a).hz(a,b)},
a8:function(a){return J.R(a).i(a)},
a:function a(){},
fh:function fh(){},
cO:function cO(){},
cP:function cP(){},
h2:function h2(){},
bv:function bv(){},
b1:function b1(){},
b_:function b_(a){this.$ti=a},
jE:function jE(a){this.$ti=a},
a1:function a1(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bQ:function bQ(){},
cN:function cN(){},
cM:function cM(){},
b0:function b0(){}},P={
mu:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.np()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bC(new P.iq(s),1)).observe(u,{childList:true})
return new P.ip(s,u,t)}else if(self.setImmediate!=null)return P.nq()
return P.nr()},
mv:function(a){self.scheduleImmediate(H.bC(new P.ir(a),0))},
mw:function(a){self.setImmediate(H.bC(new P.is(a),0))},
mx:function(a){P.jL(C.m,a)},
jL:function(a,b){var u=C.c.a_(a.a,1000)
return P.mC(u<0?0:u,b)},
kB:function(a,b){var u=C.c.a_(a.a,1000)
return P.mD(u<0?0:u,b)},
mC:function(a,b){var u=new P.e6()
u.e7(a,b)
return u},
mD:function(a,b){var u=new P.e6()
u.e8(a,b)
return u},
om:function(a){return new P.bw(a,1)},
my:function(){return C.R},
mz:function(a){return new P.bw(a,3)},
mX:function(a,b){return new P.iQ(a,[b])},
ni:function(){var u,t
for(;u=$.bA,u!=null;){$.cp=null
t=u.b
$.bA=t
if(t==null)$.co=null
u.a.$0()}},
nn:function(){$.jX=!0
try{P.ni()}finally{$.cp=null
$.jX=!1
if($.bA!=null)$.k6().$1(P.kX())}},
nl:function(a){var u=new P.du(a)
if($.bA==null){$.bA=$.co=u
if(!$.jX)$.k6().$1(P.kX())}else $.co=$.co.b=u},
nm:function(a){var u,t,s=$.bA
if(s==null){P.nl(a)
$.cp=$.co
return}u=new P.du(a)
t=$.cp
if(t==null){u.b=s
$.bA=$.cp=u}else{u.b=t.b
$.cp=t.b=u
if(u.b==null)$.co=u}},
kA:function(a,b){var u=$.ak
if(u===C.f)return P.jL(a,b)
return P.jL(a,u.fK(b))},
mk:function(a,b){var u=$.ak
if(u===C.f)return P.kB(a,b)
return P.kB(a,u.cS(b,P.dg))},
kS:function(a,b,c,d,e){var u={}
u.a=d
P.nm(new P.j9(u,e))},
nj:function(a,b,c,d){var u,t=$.ak
if(t===c)return d.$0()
$.ak=c
u=t
try{t=d.$0()
return t}finally{$.ak=u}},
nk:function(a,b,c,d,e){var u,t=$.ak
if(t===c)return d.$1(e)
$.ak=c
u=t
try{t=d.$1(e)
return t}finally{$.ak=u}},
iq:function iq(a){this.a=a},
ip:function ip(a,b,c){this.a=a
this.b=b
this.c=c},
ir:function ir(a){this.a=a},
is:function is(a){this.a=a},
e6:function e6(){this.c=0},
iS:function iS(a,b){this.a=a
this.b=b},
iR:function iR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bw:function bw(a,b){this.a=a
this.b=b},
cj:function cj(a){var _=this
_.a=a
_.d=_.c=_.b=null},
iQ:function iQ(a,b){this.a=a
this.$ti=b},
du:function du(a){this.a=a
this.b=null},
dc:function dc(){},
hv:function hv(){},
dg:function dg(){},
j0:function j0(){},
j9:function j9(a,b){this.a=a
this.b=b},
iF:function iF(){},
iG:function iG(a,b){this.a=a
this.b=b},
iH:function iH(a,b,c){this.a=a
this.b=b
this.c=c},
lP:function(a,b){return new H.F([a,b])},
kg:function(a,b){return new H.F([a,b])},
lR:function(a){return H.nB(a,new H.F([null,null]))},
kh:function(a){return new P.iC([a])},
jS:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
mB:function(a,b){var u=new P.dJ(a,b)
u.c=a.e
return u},
lJ:function(a,b,c){var u,t
if(P.jY(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.n])
$.a6.push(a)
try{P.mW(a,u)}finally{if(0>=$.a6.length)return H.d($.a6,-1)
$.a6.pop()}t=P.ky(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
jC:function(a,b,c){var u,t
if(P.jY(a))return b+"..."+c
u=new P.P(b)
$.a6.push(a)
try{t=u
t.a=P.ky(t.a,a,", ")}finally{if(0>=$.a6.length)return H.d($.a6,-1)
$.a6.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jY:function(a){var u,t
for(u=$.a6.length,t=0;t<u;++t)if(a===$.a6[t])return!0
return!1},
mW:function(a,b){var u,t,s,r,q,p,o,n=a.gP(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.u())return
u=H.e(n.gD(n))
b.push(u)
m+=u.length+2;++l}if(!n.u()){if(l<=5)return
if(0>=b.length)return H.d(b,-1)
t=b.pop()
if(0>=b.length)return H.d(b,-1)
s=b.pop()}else{r=n.gD(n);++l
if(!n.u()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.d(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gD(n);++l
for(;n.u();r=q,q=p){p=n.gD(n);++l
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
lQ:function(a,b,c){var u=P.lP(b,c)
a.E(0,new P.fq(u))
return u},
jI:function(a){var u,t={}
if(P.jY(a))return"{...}"
u=new P.P("")
try{$.a6.push(a)
u.a+="{"
t.a=!0
J.k7(a,new P.fv(t,u))
u.a+="}"}finally{if(0>=$.a6.length)return H.d($.a6,-1)
$.a6.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
iC:function iC(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iD:function iD(a){this.a=a
this.c=this.b=null},
dJ:function dJ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ff:function ff(){},
fq:function fq(a){this.a=a},
fr:function fr(){},
v:function v(){},
fu:function fu(){},
fv:function fv(a,b){this.a=a
this.b=b},
a3:function a3(){},
iT:function iT(){},
fw:function fw(){},
dn:function dn(a,b){this.a=a
this.$ti=b},
iI:function iI(){},
dK:function dK(){},
ec:function ec(){},
mn:function(a,b,c,d){if(b instanceof Uint8Array)return P.mo(!1,b,c,d)
return},
mo:function(a,b,c,d){var u,t,s=$.lk()
if(s==null)return
u=0===c
if(u&&!0)return P.jP(s,b)
t=b.length
d=P.aL(c,d,t)
if(u&&d===t)return P.jP(s,b)
return P.jP(s,b.subarray(c,d))},
jP:function(a,b){if(P.mq(b))return
return P.mr(a,b)},
mr:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.bd(t)}return},
mq:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
mp:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.bd(t)}return},
kU:function(a,b,c){var u,t,s
if(typeof c!=="number")return H.j(c)
u=J.bb(a)
t=b
for(;t<c;++t){s=u.h(a,t)
if(typeof s!=="number")return s.a2()
if((s&127)!==s)return t-b}return c-b},
k9:function(a,b,c,d,e,f){if(C.c.b2(f,4)!==0)throw H.b(P.N("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.b(P.N("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.b(P.N("Invalid base64 padding, more than two '=' characters",a,b))},
eA:function eA(){},
eB:function eB(){},
eJ:function eJ(){},
eP:function eP(){},
f1:function f1(){},
i5:function i5(){},
i7:function i7(){},
j_:function j_(a){this.b=0
this.c=a},
i6:function i6(a){this.a=a},
iZ:function iZ(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
eo:function(a,b,c){var u=H.m7(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.b(P.N(a,null,null))},
lG:function(a){if(a instanceof H.bJ)return a.i(0)
return"Instance of '"+H.e(H.c3(a))+"'"},
lS:function(a,b,c){var u,t,s=J.lL(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
jH:function(a,b,c){var u,t=H.c([],[c])
for(u=J.aU(a);u.u();)t.push(u.gD(u))
if(b)return t
return J.jD(t)},
c4:function(a,b,c){var u,t
if(typeof a==="object"&&a!==null&&a.constructor===Array){u=a.length
c=P.aL(b,c,u)
if(b<=0){if(typeof c!=="number")return c.L()
t=c<u}else t=!0
return H.kt(t?C.b.dP(a,b,c):a)}if(!!J.R(a).$ic_)return H.m9(a,b,P.aL(b,c,a.length))
return P.mi(a,b,c)},
mi:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.b(P.V(b,0,J.ag(a),q,q))
u=c==null
if(!u&&c<b)throw H.b(P.V(c,b,J.ag(a),q,q))
t=J.aU(a)
for(s=0;s<b;++s)if(!t.u())throw H.b(P.V(b,0,s,q,q))
r=[]
if(u)for(;t.u();)r.push(t.gD(t))
else for(s=b;s<c;++s){if(!t.u())throw H.b(P.V(c,b,s,q,q))
r.push(t.gD(t))}return H.kt(r)},
mb:function(a){return new H.fi(a,H.lO(a,!1,!0,!1,!1,!1))},
ky:function(a,b,c){var u=J.aU(b)
if(!u.u())return a
if(c.length===0){do a+=H.e(u.gD(u))
while(u.u())}else{a+=H.e(u.gD(u))
for(;u.u();)a=a+c+H.e(u.gD(u))}return a},
jO:function(){var u=H.m_()
if(u!=null)return P.mm(u)
throw H.b(P.w("'Uri.base' is not supported"))},
iY:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.e){u=$.lp().b
if(typeof b!=="string")H.o(H.ac(b))
u=u.test(b)}else u=!1
if(u)return b
t=c.gh_().bN(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.d(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.d2(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
lE:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
lF:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cD:function(a){if(a>=10)return""+a
return"0"+a},
kd:function(a){return new P.aX(1000*a)},
jB:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a8(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lG(a)},
cw:function(a){return new P.al(!1,null,null,a)},
ju:function(a,b,c){return new P.al(!0,a,b,c)},
d3:function(a,b){return new P.br(null,null,!0,a,b,"Value not in range")},
V:function(a,b,c,d,e){return new P.br(b,c,!0,a,d,"Invalid value")},
aL:function(a,b,c){var u
if(typeof a!=="number")return H.j(a)
if(0<=a){if(typeof c!=="number")return H.j(c)
u=a>c}else u=!0
if(u)throw H.b(P.V(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.j(c)
u=b>c}else u=!0
if(u)throw H.b(P.V(b,a,c,"end",null))
return b}return c},
ku:function(a,b){if(typeof a!=="number")return a.L()
if(a<0)throw H.b(P.V(a,0,null,b,null))},
K:function(a,b,c,d,e){var u=e==null?J.ag(b):e
return new P.fe(u,!0,a,c,"Index out of range")},
w:function(a){return new P.hZ(a)},
hW:function(a){return new P.hV(a)},
bi:function(a){return new P.eL(a)},
u:function(a){return new P.dC(a)},
N:function(a,b,c){return new P.fb(a,b,c)},
lT:function(a,b,c){var u,t,s=H.c([],[c])
C.b.sk(s,a)
for(u=0;u<a;++u){t=b.$1(u)
if(u>=s.length)return H.d(s,u)
s[u]=t}return s},
k4:function(a){H.nM(a)},
mm:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.a.G(a,4)^58)*3|C.a.G(a,0)^100|C.a.G(a,1)^97|C.a.G(a,2)^116|C.a.G(a,3)^97)>>>0
if(u===0)return P.kD(e<e?C.a.q(a,0,e):a,5,f).gdH()
else if(u===32)return P.kD(C.a.q(a,5,e),0,f).gdH()}t=new Array(8)
t.fixed$length=Array
s=H.c(t,[P.t])
s[0]=0
s[1]=-1
s[2]=-1
s[7]=-1
s[3]=0
s[4]=0
s[5]=e
s[6]=e
if(P.kT(a,0,e,0,s)>=14)s[7]=e
r=s[1]
if(typeof r!=="number")return r.hM()
if(r>=0)if(P.kT(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.v()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.L()
if(typeof n!=="number")return H.j(n)
if(m<n)n=m
if(typeof o!=="number")return o.L()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.L()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.L()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.a.a0(a,"..",o)))j=n>o+2&&C.a.a0(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.a.a0(a,"file",0)){if(q<=0){if(!C.a.a0(a,"/",o)){i="file:///"
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
a=C.a.aP(a,o,n,"/");++e
n=h}k="file"}else if(C.a.a0(a,"http",0)){if(t&&p+3===o&&C.a.a0(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.a.aP(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.a.a0(a,"https",0)){if(t&&p+4===o&&C.a.a0(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.a.aP(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.a.q(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.iJ(a,r,q,p,o,n,m,k)}return P.mE(a,0,e,r,q,p,o,n,m,k)},
kF:function(a){var u=P.n
return C.b.h3(H.c(a.split("&"),[u]),P.kg(u,u),new P.i3(C.e))},
ml:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.i0(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.a.R(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.eo(C.a.q(a,s,t),n,n)
if(typeof p!=="number")return p.W()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.d(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.eo(C.a.q(a,s,c),n,n)
if(typeof p!=="number")return p.W()
if(p>255)k.$2(l,s)
if(r>=u)return H.d(j,r)
j[r]=p
return j},
kE:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.i1(a),d=new P.i2(e,a)
if(a.length<2)e.$1("address is too short")
u=H.c([],[P.t])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.a.R(a,t)
if(p===58){if(t===b){++t
if(C.a.R(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
u.push(-1)
r=!0}else u.push(d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.b.gau(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)u.push(d.$2(s,c))
else{m=P.ml(a,s,c)
u.push((m[0]<<8|m[1])>>>0)
u.push((m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.d(l,i)
l[i]=0
f=i+1
if(f>=k)return H.d(l,f)
l[f]=0
i+=2}else{f=C.c.aG(h,8)
if(i<0||i>=k)return H.d(l,i)
l[i]=f
f=i+1
if(f>=k)return H.d(l,f)
l[f]=h&255
i+=2}}return l},
mE:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.mM(a,b,d)
else{if(d===b)P.by(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.mN(a,u,e-1):""
s=P.mJ(a,e,f,!1)
if(typeof f!=="number")return f.v()
r=f+1
if(typeof g!=="number")return H.j(g)
q=r<g?P.mL(P.eo(C.a.q(a,r,g),new P.iU(a,f),n),j):n}else{q=n
s=q
t=""}p=P.mK(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.L()
o=h<i?P.jU(a,h+1,i,n):n
return new P.bx(j,t,s,q,p,o,i<c?P.mI(a,i+1,c):n)},
kL:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
by:function(a,b,c){throw H.b(P.N(c,a,b))},
mL:function(a,b){if(a!=null&&a===P.kL(b))return
return a},
mJ:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.a.R(a,b)===91){if(typeof c!=="number")return c.w()
u=c-1
if(C.a.R(a,u)!==93)P.by(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.mG(a,t,u)
if(typeof s!=="number")return s.L()
if(s<u){r=s+1
q=P.kQ(a,C.a.a0(a,"25",r)?s+3:r,u,"%25")}else q=""
P.kE(a,t,s)
return C.a.q(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.j(c)
p=b
for(;p<c;++p)if(C.a.R(a,p)===58){s=C.a.bc(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.kQ(a,C.a.a0(a,"25",r)?s+3:r,c,"%25")}else q=""
P.kE(a,b,s)
return"["+C.a.q(a,b,s)+q+"]"}return P.mP(a,b,c)},
mG:function(a,b,c){var u,t=C.a.bc(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.j(c)
u=t<c}else u=!1
return u?t:c},
kQ:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.P(d):null
if(typeof c!=="number")return H.j(c)
u=b
t=u
s=!0
for(;u<c;){r=C.a.R(a,u)
if(r===37){q=P.jV(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.P("")
o=l.a+=C.a.q(a,t,u)
if(p)q=C.a.q(a,u,u+3)
else if(q==="%")P.by(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.d(C.h,p)
p=(C.h[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.P("")
if(t<u){l.a+=C.a.q(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.a.R(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.P("")
l.a+=C.a.q(a,t,u)
l.a+=P.jT(r)
u+=m
t=u}}}if(l==null)return C.a.q(a,b,c)
if(t<c)l.a+=C.a.q(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
mP:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.j(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.a.R(a,u)
if(q===37){p=P.jV(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.P("")
n=C.a.q(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.a.q(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.d(C.t,o)
o=(C.t[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.P("")
if(t<u){s.a+=C.a.q(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.d(C.j,o)
o=(C.j[o]&1<<(q&15))!==0}else o=!1
if(o)P.by(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.a.R(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.P("")
n=C.a.q(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.jT(q)
u+=l
t=u}}}}if(s==null)return C.a.q(a,b,c)
if(t<c){n=C.a.q(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
mM:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.kN(C.a.G(a,b)))P.by(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.a.G(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.d(C.l,r)
r=(C.l[r]&1<<(s&15))!==0}else r=!1
if(!r)P.by(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.a.q(a,b,c)
return P.mF(t?a.toLowerCase():a)},
mF:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
mN:function(a,b,c){return P.cm(a,b,c,C.M,!1)},
mK:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.cm(a,b,c,C.u,!0):C.n.i2(d,new P.iV(),P.n).p(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.a.a5(u,"/"))u="/"+u
return P.mO(u,e,f)},
mO:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.a.a5(a,"/"))return P.mQ(a,!u||c)
return P.mR(a)},
jU:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.b(P.cw("Both query and queryParameters specified"))
return P.cm(a,b,c,C.k,!0)}if(d==null)return
u=new P.P("")
t.a=""
d.E(0,new P.iW(new P.iX(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
mI:function(a,b,c){return P.cm(a,b,c,C.k,!0)},
jV:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.a.R(a,b+1)
t=C.a.R(a,p)
s=H.jg(u)
r=H.jg(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.c.aG(q,4)
if(p>=8)return H.d(C.h,p)
p=(C.h[p]&1<<(q&15))!==0}else p=!1
if(p)return H.d2(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.a.q(a,b,b+3).toUpperCase()
return},
jT:function(a){var u,t,s,r,q,p,o,n,m="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.c(u,[P.t])
t[0]=37
t[1]=C.a.G(m,a>>>4)
t[2]=C.a.G(m,a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.c(u,[P.t])
for(u=t.length,q=0;--r,r>=0;s=128){p=C.c.fw(a,6*r)&63|s
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
q+=3}}return P.c4(t,0,null)},
cm:function(a,b,c,d,e){var u=P.kP(a,b,c,d,e)
return u==null?C.a.q(a,b,c):u},
kP:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.L()
if(typeof c!=="number")return H.j(c)
if(!(o<c))break
c$0:{u=C.a.R(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.d(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.jV(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.d(C.j,t)
t=(C.j[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.by(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.a.R(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.jT(u)}}if(m==null)m=new P.P("")
m.a+=C.a.q(a,n,o)
m.a+=H.e(s)
if(typeof r!=="number")return H.j(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.L()
if(n<c)m.a+=C.a.q(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
kO:function(a){if(C.a.a5(a,"."))return!0
return C.a.df(a,"/.")!==-1},
mR:function(a){var u,t,s,r,q,p,o
if(!P.kO(a))return a
u=H.c([],[P.n])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.I(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.d(u,-1)
u.pop()
if(u.length===0)u.push("")}r=!0}else if("."===p)r=!0
else{u.push(p)
r=!1}}if(r)u.push("")
return C.b.p(u,"/")},
mQ:function(a,b){var u,t,s,r,q,p
if(!P.kO(a))return!b?P.kM(a):a
u=H.c([],[P.n])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.b.gau(u)!==".."){if(0>=u.length)return H.d(u,-1)
u.pop()
r=!0}else{u.push("..")
r=!1}else if("."===p)r=!0
else{u.push(p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.d(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.b.gau(u)==="..")u.push("")
if(!b){if(0>=u.length)return H.d(u,0)
t=P.kM(u[0])
if(0>=u.length)return H.d(u,0)
u[0]=t}return C.b.p(u,"/")},
kM:function(a){var u,t,s,r=a.length
if(r>=2&&P.kN(J.lr(a,0)))for(u=1;u<r;++u){t=C.a.G(a,u)
if(t===58)return C.a.q(a,0,u)+"%3A"+C.a.a3(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.d(C.l,s)
s=(C.l[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
mH:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.a.G(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.b(P.cw("Invalid URL encoding"))}}return u},
jW:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.a.G(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.e!==d)s=!1
else s=!0
if(s)return C.a.q(a,b,c)
else r=new H.L(C.a.q(a,b,c))}else{r=H.c([],[P.t])
for(s=a.length,q=b;q<c;++q){t=C.a.G(a,q)
if(t>127)throw H.b(P.cw("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.b(P.cw("Truncated URI"))
r.push(P.mH(a,q+1))
q+=2}else if(t===43)r.push(32)
else r.push(t)}}return new P.i6(!1).bN(r)},
kN:function(a){var u=a|32
return 97<=u&&u<=122},
kD:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.c([b-1],[P.t])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.a.G(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.b(P.N(m,a,t))}}if(s<0&&t>b)throw H.b(P.N(m,a,t))
for(;r!==44;){l.push(t);++t
for(q=-1;t<u;++t){r=C.a.G(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)l.push(q)
else{p=C.b.gau(l)
if(r!==44||t!==p+7||!C.a.a0(a,"base64",p+1))throw H.b(P.N("Expecting '='",a,t))
break}}l.push(t)
o=t+1
if((l.length&1)===1)a=C.y.hd(0,a,o,u)
else{n=P.kP(a,o,u,C.k,!0)
if(n!=null)a=C.a.aP(a,o,u,n)}return new P.i_(a,l,c)},
mT:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.lT(22,new P.j4(),P.bt),n=new P.j3(o),m=new P.j5(),l=new P.j6(),k=n.$2(0,225)
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
kT:function(a,b,c,d,e){var u,t,s,r,q,p=$.lq()
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
aD:function aD(){},
a9:function a9(a,b){this.a=a
this.b=b},
H:function H(){},
aX:function aX(a){this.a=a},
eZ:function eZ(){},
f_:function f_(){},
bk:function bk(){},
d_:function d_(){},
al:function al(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
br:function br(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fe:function fe(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hZ:function hZ(a){this.a=a},
hV:function hV(a){this.a=a},
hr:function hr(a){this.a=a},
eL:function eL(a){this.a=a},
h1:function h1(){},
da:function da(){},
eU:function eU(a){this.a=a},
dC:function dC(a){this.a=a},
fb:function fb(a,b,c){this.a=a
this.b=b
this.c=c},
t:function t(){},
h:function h(){},
fg:function fg(){},
r:function r(){},
O:function O(){},
b5:function b5(){},
a7:function a7(){},
a_:function a_(){},
n:function n(){},
P:function P(a){this.a=a},
i3:function i3(a){this.a=a},
i0:function i0(a){this.a=a},
i1:function i1(a){this.a=a},
i2:function i2(a,b){this.a=a
this.b=b},
bx:function bx(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
iU:function iU(a,b){this.a=a
this.b=b},
iV:function iV(){},
iX:function iX(a,b){this.a=a
this.b=b},
iW:function iW(a){this.a=a},
i_:function i_(a,b,c){this.a=a
this.b=b
this.c=c},
j4:function j4(){},
j3:function j3(a){this.a=a},
j5:function j5(){},
j6:function j6(){},
iJ:function iJ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
iw:function iw(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
nv:function(a){var u,t=J.R(a)
if(!!t.$iaG){u=t.gcV(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.eb(a.data,a.height,a.width)},
nu:function(a){if(a instanceof P.eb)return{data:a.a,height:a.b,width:a.c}
return a},
aO:function(a){var u,t,s,r,q
if(a==null)return
u=P.kg(P.n,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.p)(t),++r){q=t[r]
u.j(0,q,a[q])}return u},
nt:function(a){var u={}
a.E(0,new P.ja(u))
return u},
iL:function iL(){},
iN:function iN(a,b){this.a=a
this.b=b},
iO:function iO(a,b){this.a=a
this.b=b},
eb:function eb(a,b,c){this.a=a
this.b=b
this.c=c},
ja:function ja(a){this.a=a},
iM:function iM(a,b){this.a=a
this.b=b},
f7:function f7(a,b){this.a=a
this.b=b},
f8:function f8(){},
f9:function f9(){},
iB:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mA:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
iE:function iE(){},
a5:function a5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aH:function aH(){},
fm:function fm(){},
aK:function aK(){},
h_:function h_(){},
h6:function h6(){},
hw:function hw(){},
k:function k(){},
aM:function aM(){},
hL:function hL(){},
dH:function dH(){},
dI:function dI(){},
dS:function dS(){},
dT:function dT(){},
e2:function e2(){},
e3:function e3(){},
e9:function e9(){},
ea:function ea(){},
bt:function bt(){},
ev:function ev(){},
ew:function ew(){},
ex:function ex(a){this.a=a},
ey:function ey(){},
bf:function bf(){},
h0:function h0(){},
dv:function dv(){},
d5:function d5(){},
hq:function hq(){},
dZ:function dZ(){},
e_:function e_(){}},W={
jx:function(){var u=document.createElement("canvas")
return u},
jA:function(a){return"wheel"},
lI:function(a){var u,t=document.createElement("input"),s=t
try{s.type=a}catch(u){H.bd(u)}return s},
iA:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kK:function(a,b,c,d){var u=W.iA(W.iA(W.iA(W.iA(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
U:function(a,b,c,d){var u=W.kV(new W.iy(c),W.i)
if(u!=null&&!0)J.lt(a,b,u,!1)
return new W.ix(a,b,u,!1)},
kV:function(a,b){var u=$.ak
if(u===C.f)return a
return u.cS(a,b)},
l:function l(){},
eq:function eq(){},
es:function es(){},
et:function et(){},
bg:function bg(){},
bh:function bh(){},
aV:function aV(){},
eQ:function eQ(){},
E:function E(){},
bL:function bL(){},
eR:function eR(){},
ad:function ad(){},
an:function an(){},
eS:function eS(){},
eT:function eT(){},
eV:function eV(){},
eW:function eW(){},
cF:function cF(){},
cG:function cG(){},
eX:function eX(){},
eY:function eY(){},
iu:function iu(a,b){this.a=a
this.b=b},
T:function T(){},
i:function i(){},
f:function f(){},
ah:function ah(){},
bM:function bM(){},
f6:function f6(){},
fa:function fa(){},
ao:function ao(){},
fd:function fd(){},
bO:function bO(){},
aG:function aG(){},
bP:function bP(){},
eI:function eI(){},
bp:function bp(){},
fs:function fs(){},
fN:function fN(){},
bX:function bX(){},
fO:function fO(){},
fP:function fP(a){this.a=a},
fQ:function fQ(){},
fR:function fR(a){this.a=a},
as:function as(){},
fS:function fS(){},
at:function at(){},
it:function it(a){this.a=a},
A:function A(){},
cZ:function cZ(){},
au:function au(){},
h3:function h3(){},
hb:function hb(){},
hc:function hc(a){this.a=a},
he:function he(){},
aw:function aw(){},
hn:function hn(){},
ax:function ax(){},
ho:function ho(){},
ay:function ay(){},
ht:function ht(){},
hu:function hu(a){this.a=a},
ai:function ai(){},
az:function az(){},
aj:function aj(){},
hz:function hz(){},
hA:function hA(){},
hG:function hG(){},
aA:function aA(){},
bs:function bs(){},
hJ:function hJ(){},
hK:function hK(){},
b7:function b7(){},
i4:function i4(){},
ik:function ik(){},
b9:function b9(){},
cc:function cc(){},
iv:function iv(){},
dx:function dx(){},
iz:function iz(){},
dP:function dP(){},
iK:function iK(){},
iP:function iP(){},
ix:function ix(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
iy:function iy(a){this.a=a},
J:function J(){},
cK:function cK(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
dw:function dw(){},
dy:function dy(){},
dz:function dz(){},
dA:function dA(){},
dB:function dB(){},
dD:function dD(){},
dE:function dE(){},
dF:function dF(){},
dG:function dG(){},
dL:function dL(){},
dM:function dM(){},
dN:function dN(){},
dO:function dO(){},
dQ:function dQ(){},
dR:function dR(){},
dU:function dU(){},
dV:function dV(){},
dW:function dW(){},
ch:function ch(){},
ci:function ci(){},
dX:function dX(){},
dY:function dY(){},
e1:function e1(){},
e4:function e4(){},
e5:function e5(){},
ck:function ck(){},
cl:function cl(){},
e7:function e7(){},
e8:function e8(){},
ed:function ed(){},
ee:function ee(){},
ef:function ef(){},
eg:function eg(){},
eh:function eh(){},
ei:function ei(){},
ej:function ej(){},
ek:function ek(){},
el:function el(){},
em:function em(){}},K={
Y:function(a){var u=new K.hf()
u.dW(a)
return u},
er:function er(){},
cL:function cL(){},
cT:function cT(){},
aJ:function aJ(){this.a=null},
hf:function hf(){this.a=null}},L={db:function db(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},dh:function dh(a,b,c){this.a=a
this.b=b
this.c=c},di:function di(a){this.b=a
this.c=null},hH:function hH(){var _=this
_.d=_.c=_.b=_.a=null},dk:function dk(a){this.b=a
this.a=this.c=null}},O={
jy:function(a){var u=new O.aE([a])
u.b4(a)
return u},
aE:function aE(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bW:function bW(){this.b=this.a=null},
ki:function(){var u,t=new O.cU(),s=O.jy(V.aq)
t.e=s
s.b3(t.geD(),t.geF())
s=new O.ap(t,"emission")
s.c=new A.W(!1,!1,!1)
s.f=new V.M(0,0,0)
t.f=s
s=new O.ap(t,"ambient")
s.c=new A.W(!1,!1,!1)
s.f=new V.M(0,0,0)
t.r=s
s=new O.ap(t,"diffuse")
s.c=new A.W(!1,!1,!1)
s.f=new V.M(0,0,0)
t.x=s
s=new O.ap(t,"invDiffuse")
s.c=new A.W(!1,!1,!1)
s.f=new V.M(0,0,0)
t.y=s
s=new O.fE(t,"specular")
s.c=new A.W(!1,!1,!1)
s.f=new V.M(0,0,0)
s.ch=100
t.z=s
s=new O.fA(t,"bump")
s.c=new A.W(!1,!1,!1)
t.Q=s
t.ch=null
s=new O.ap(t,"reflect")
s.c=new A.W(!1,!1,!1)
s.f=new V.M(0,0,0)
t.cx=s
s=new O.fD(t,"refract")
s.c=new A.W(!1,!1,!1)
s.f=new V.M(0,0,0)
s.ch=1
t.cy=s
s=new O.fz(t,"alpha")
s.c=new A.W(!1,!1,!1)
s.f=1
t.db=s
s=new D.cR()
s.b4(D.a2)
s.e=H.c([],[D.ez])
s.f=H.c([],[D.bj])
s.r=H.c([],[D.h4])
s.x=H.c([],[D.hp])
s.z=s.y=null
s.bl(s.geB(),s.gf8(),s.gfc())
t.dx=s
u=new O.fC()
u.b=new V.aW(0,0,0,0)
u.c=1
u.d=10
u.e=!1
t.dy=u
u=s.y
s=u==null?s.y=D.G():u
s.l(0,t.gfo())
s=t.dx
u=s.z
s=u==null?s.z=D.G():u
s.l(0,t.gb7())
t.fr=null
return t},
cU:function cU(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fF:function fF(a,b){this.a=a
this.b=b},
fG:function fG(){},
fH:function fH(a,b){this.a=a
this.b=b},
fI:function fI(){},
fJ:function fJ(a,b){this.a=a
this.b=b},
fK:function fK(){},
fL:function fL(a,b){this.a=a
this.b=b},
fM:function fM(){},
fz:function fz(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bV:function bV(){},
fA:function fA(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
ap:function ap(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fC:function fC(){var _=this
_.e=_.d=_.c=_.b=null},
fD:function fD(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fE:function fE(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dd:function dd(){}},E={
f2:function(){var u,t=new E.aF()
t.a=""
t.b=!0
u=O.jy(E.aF)
t.y=u
u.b3(t.ghe(),t.ghh())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sbm(0,null)
t.sc7(null)
t.saN(null)
return t},
mc:function(a,b){var u=new E.h7(a)
u.dV(a,b)
return u},
mj:function(a,b,c,d,e){var u,t,s=J.R(a)
if(!!s.$ibh)return E.kz(a,!0,!0,!0,!1)
u=W.jx()
t=u.style
t.width="100%"
t.height="100%"
s.gbL(a).l(0,u)
return E.kz(u,!0,!0,!0,!1)},
kz:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.df(),p=C.i.c9(a,"webgl2",P.lR(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.o(P.u("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.mc(p,a)
u=new T.hD(p)
u.b=p.getParameter(3379)
p.getParameter(34076)
u.e=u.d=0
q.f=u
u=new X.dp(a)
t=new X.fl()
t.d=P.kh(P.t)
u.b=t
t=new X.fT(u)
t.f=0
t.r=V.b6()
t.x=V.b6()
t.ch=t.Q=1
u.c=t
t=new X.ft(u)
t.r=0
t.x=V.b6()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hI(u)
t.f=V.b6()
t.r=V.b6()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.c([],[[P.dc,P.a_]])
u.z=t
s=document
t.push(W.U(s,"contextmenu",u.geN(),!1))
u.z.push(W.U(a,"focus",u.geT(),!1))
u.z.push(W.U(a,"blur",u.geH(),!1))
u.z.push(W.U(s,"keyup",u.gbz(),!1))
u.z.push(W.U(s,"keydown",u.gbn(),!1))
u.z.push(W.U(a,"mousedown",u.geZ(),!1))
u.z.push(W.U(a,"mouseup",u.gf2(),!1))
u.z.push(W.U(a,r,u.gf0(),!1))
t=u.z
W.jA(a)
W.jA(a)
t.push(W.U(a,W.jA(a),u.gf4(),!1))
u.z.push(W.U(s,r,u.geP(),!1))
u.z.push(W.U(s,"mouseup",u.geR(),!1))
u.z.push(W.U(s,"pointerlockchange",u.gf6(),!1))
u.z.push(W.U(a,"touchstart",u.gfi(),!1))
u.z.push(W.U(a,"touchend",u.gfe(),!1))
u.z.push(W.U(a,"touchmove",u.gfg(),!1))
q.x=u
q.ch=!0
q.cx=!1
q.cy=new P.a9(Date.now(),!1)
q.db=0
q.cD()
return q},
eC:function eC(){},
aF:function aF(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h7:function h7(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
h8:function h8(a){this.a=a},
h9:function h9(a){this.a=a},
ha:function ha(a){this.a=a},
df:function df(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
hF:function hF(a){this.a=a}},Z={
jR:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.bz(c)),35044)
a.bindBuffer(b,null)
return new Z.dt(b,u)},
af:function(a){return new Z.aN(a)},
dt:function dt(a,b){this.a=a
this.b=b},
cz:function cz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
il:function il(a){this.a=a},
cA:function cA(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bn:function bn(a,b,c){this.a=a
this.b=b
this.c=c},
aN:function aN(a){this.a=a}},D={
G:function(){var u=new D.bl()
u.d=0
return u},
eF:function eF(){},
bl:function bl(){var _=this
_.d=_.c=_.b=_.a=null},
f4:function f4(a){this.a=a},
f5:function f5(a){this.a=a},
X:function X(){this.b=null},
aY:function aY(){this.b=null},
aZ:function aZ(){this.b=null},
x:function x(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
jz:function(a,b){var u,t,s=new D.bj()
s.c=new V.M(1,1,1)
s.a=V.mt()
s.d=V.jQ()
s.e=V.ms()
u=s.b
s.b=b
b.gt().l(0,s.ge4())
t=new D.x("mover",u,s.b)
t.b=!0
s.ao(t)
if(!s.c.n(0,a)){u=s.c
s.c=a
t=new D.x("color",u,a)
t.b=!0
s.ao(t)}return s},
ez:function ez(){},
bj:function bj(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a2:function a2(){},
cR:function cR(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
h4:function h4(){},
hp:function hp(){}},X={
bR:function(){var u=new X.cQ()
u.b4(X.aa)
u.f=u.e=null
u.r=!1
u.y=u.x=null
u.bl(u.gdZ(),u.ge0(),u.ge2())
return u},
cB:function cB(a,b){this.a=a
this.b=b},
aa:function aa(a,b){this.a=a
this.b=b},
bo:function bo(a){this.c=a
this.b=null},
cQ:function cQ(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
fl:function fl(){this.d=this.b=this.a=null},
cS:function cS(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},
ft:function ft(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
b2:function b2(a,b,c){this.a=a
this.b=b
this.c=c},
b3:function b3(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},
fT:function fT(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
h5:function h5(){},
dj:function dj(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},
hI:function hI(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},
dp:function dp(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
lH:function(a){var u=new X.fc(),t=new V.aW(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.kw
if(t==null){t=V.kv(0,0,1,1)
$.kw=t}u.r=t
return u},
jw:function jw(){},
fc:function fc(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d0:function d0(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
hx:function hx(){},
nw:function(a){var u,t,s,r,q,p,o,n,m,l,k=null,j=O.ki(),i=j.dx,h=U.eM(V.jK(1,-3,-1,k))
i.l(0,D.jz(new V.M(0.4,0.4,1),h))
i=j.dx
h=U.eM(V.jK(0,1,0,k))
i.l(0,D.jz(new V.M(0,0.2,0.1),h))
i=j.r
i.sak(0,new V.M(0.2,0.2,0.2))
i=j.x
i.sak(0,new V.M(0.7,0.7,0.7))
j.z.sak(0,new V.M(1,1,1))
i=j.z
i.bD(new A.W(!0,i.c.b,!1))
i.cF(10)
u=E.f2()
u.sc7(j)
t=F.kx()
F.cn(t,k,k,1,1,1,0,0,1)
F.cn(t,k,k,1,1,0,1,0,3)
F.cn(t,k,k,1,1,0,0,1,2)
F.cn(t,k,k,1,1,-1,0,0,0)
F.cn(t,k,k,1,1,0,-1,0,0)
F.cn(t,k,k,1,1,0,0,-1,3)
t.aH()
for(i=[U.a4],s=-60;s<=60;s+=12)for(h=s/10,r=-60;r<=60;r+=12){q=E.f2()
q.sbm(0,t)
p=r/10
o=new U.d6()
o.r=o.f=o.e=o.d=o.c=o.b=o.a=0
o.sdJ(h)
o.sdu(0,p)
o.sdC(0)
n=o.d
if(!(Math.abs(n-h)<$.y().a)){o.d=h
n=new D.x("deltaYaw",n,h)
n.b=!0
m=o.y
if(m!=null)m.B(n)}n=o.e
if(!(Math.abs(n-p)<$.y().a)){o.e=p
p=new D.x("deltaPitch",n,p)
p.b=!0
n=o.y
if(n!=null)n.B(p)}p=o.f
if(!(Math.abs(p-0.32)<$.y().a)){o.f=0.32
p=new D.x("deltaRoll",p,0.32)
p.b=!0
n=o.y
if(n!=null)n.B(p)}p=new U.bK()
p.sV(0,new V.aq(1,0,0,s,0,1,0,0,0,0,1,r,0,0,0,1))
q.saN(U.ke(H.c([o,p],i)))
p=u.y
o=[H.bc(p,0)]
if(p.bB(H.c([q],o))){n=p.a
l=n.length
n.push(q)
o=H.c([q],o)
p=p.c
if(p!=null)p.$2(l,o)}}return u},
l1:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="testCanvas",c=1000,b=V.me("Test 038"),a=W.jx()
a.className="pageLargeCanvas"
a.id=d
b.a.appendChild(a)
u=[P.n]
b.cN(H.c(["A test of basic 3D movement around a room similar to a first person view. ","A and D (left and right arrow keys) strifes left and right. ","W and S (up and down arrow keys) moves forward and backward. ","Q and E moves up and down. Mouse looks around with left mouse button pressed."],u))
b.fG(H.c(["options"],u))
b.cN(H.c(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(d)
if(t==null)H.o(P.u("Failed to find an element with the identifier, testCanvas."))
s=E.mj(t,!0,!0,!0,!1)
r=E.f2()
b=r.y
q=s.f.hb("../resources/Grass.png",!0,!0)
p=U.eM(V.km(0,-3,0).m(0,V.ar(c,0,0,0,0,1,0,0,0,0,c,0,0,0,0,1)).m(0,V.jJ(-1.5707963267948966)))
o=O.ki()
n=new V.aI(c,0,0,0,c,0,0,0,1)
if(!J.I(o.b,n)){m=o.b
l=m==null&&!0
if(l)o.a=null
o.b=n
m=new D.x("texture2DMatrix",m,n)
m.b=!0
o.X(m)}o.dx.l(0,D.jz(new V.M(1,1,1),U.eM(V.jK(1,-3,-1,null))))
m=o.r
m.sak(0,new V.M(0.5,0.5,0.5))
m=o.x
m.sak(0,new V.M(0.5,0.5,0.5))
o.r.sdD(q)
o.x.sdD(q)
m=E.f2()
m.sbm(0,F.nF(20,20))
m.saN(p)
m.sc7(o)
b.l(0,m)
r.y.l(0,X.nw(s))
m=s.x
k=new U.dr()
b=X.bR()
b.a8(39)
b.a8(68)
l=k.geV()
b.gaL().l(0,l)
k.a=b
b=X.bR()
b.a8(37)
b.a8(65)
b.gaL().l(0,l)
k.b=b
b=X.bR()
b.a8(81)
b.gaL().l(0,l)
k.c=b
b=X.bR()
b.a8(69)
b.gaL().l(0,l)
k.d=b
b=X.bR()
b.a8(40)
b.a8(83)
b.gaL().l(0,l)
k.e=b
b=X.bR()
b.a8(38)
b.a8(87)
b.gaL().l(0,l)
k.f=b
b=U.cC()
b.saX(30)
b.sas(0)
l=k.gaA()
b.gt().l(0,l)
k.r=b
b=U.cC()
b.saX(30)
b.sas(0)
b.gt().l(0,l)
k.x=b
b=U.cC()
b.saX(30)
b.sas(0)
b.gt().l(0,l)
k.y=b
k.Q=k.z=null
k.ch=60
k.cx=15
k.cy=0
k.dy=k.dx=k.db=null
k.a.aj(m)
k.b.aj(m)
k.c.aj(m)
k.d.aj(m)
k.e.aj(m)
k.f.aj(m)
b=s.x
j=new U.dq()
m=U.cC()
m.sc8(0,!0)
m.sc1(6.283185307179586)
m.sc2(0)
m.sZ(0,0)
m.saX(100)
m.sS(0)
m.sas(0.5)
j.b=m
l=j.gaA()
m.gt().l(0,l)
m=U.cC()
m.sc8(0,!0)
m.sc1(6.283185307179586)
m.sc2(0)
m.sZ(0,0)
m.saX(100)
m.sS(0)
m.sas(0.5)
j.c=m
m.gt().l(0,l)
j.d=null
j.r=j.f=j.e=!1
j.y=j.x=2.5
j.Q=4
j.ch=j.cx=!1
j.db=j.cy=0
j.dx=null
j.dy=0
j.fx=j.fr=null
i=new X.b2(!1,!1,!1)
h=j.d
j.d=i
m=new D.x("modifiers",h,i)
m.b=!0
j.J(m)
m=j.f
if(m!==!1){j.f=!1
m=new D.x("invertX",m,!1)
m.b=!0
j.J(m)}m=j.r
if(m!==!1){j.r=!1
m=new D.x("invertY",m,!1)
m.b=!0
j.J(m)}j.aj(b)
j.b.sc1(1.5707963267948966)
j.b.sc2(-1.5707963267948966)
j.b.sas(1)
j.c.sas(1)
j.b.sc8(0,!1)
j.gt().l(0,new X.jl(k,j))
g=U.ke(H.c([k,j],[U.a4]))
b=new M.cH()
b.a=!0
m=O.jy(E.aF)
b.e=m
m.b3(b.geJ(),b.geL())
b.y=b.x=b.r=b.f=null
f=X.lH(null)
e=new X.d0()
e.c=1.0471975511965976
e.d=0.1
e.e=2000
e.saN(null)
m=e.c
if(!(Math.abs(m-1.0471975511965976)<$.y().a)){e.c=1.0471975511965976
m=new D.x("fov",m,1.0471975511965976)
m.b=!0
e.aD(m)}m=e.d
if(!(Math.abs(m-0.1)<$.y().a)){e.d=0.1
m=new D.x("near",m,0.1)
m.b=!0
e.aD(m)}m=e.e
if(!(Math.abs(m-2000)<$.y().a)){e.e=2000
m=new D.x("far",m,2000)
m.b=!0
e.aD(m)}m=b.b
if(m!==e){if(m!=null)m.gt().T(0,b.gaB())
h=b.b
b.b=e
e.gt().l(0,b.gaB())
m=new D.x("camera",h,b.b)
m.b=!0
b.aC(m)}m=b.c
if(m!==f){if(m!=null)m.gt().T(0,b.gaB())
h=b.c
b.c=f
f.gt().l(0,b.gaB())
m=new D.x("target",h,b.c)
m.b=!0
b.aC(m)}b.e.l(0,r)
b.b.saN(g)
m=s.d
if(m!==b){if(m!=null)m.gt().T(0,s.gcf())
s.d=b
b.gt().l(0,s.gcf())
s.cg()}b=new V.eG("options")
u=u.getElementById("options")
b.c=u
if(u==null)H.o("Failed to find options for CheckGroup")
b.d=H.c([],[W.eI])
b.fF(0,"Mouse Locking",new X.jm(s),!1)
V.nP(s)},
jl:function jl(a,b){this.a=a
this.b=b},
jm:function jm(a){this.a=a}},V={
jr:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.b2(a-b,u)
return(a<0?a+u:a)+b},
C:function(a,b,c){if(a==null)return C.a.ab("null",c)
return C.a.ab(C.d.dF(Math.abs(a-0)<$.y().a?0:a,b),c+b+1)},
bE:function(a,b,c){var u,t,s,r,q,p,o=H.c([],[P.n])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.p)(a),++s){r=V.C(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.d(o,q)
u=C.a.ab(o[q],t)
p=o.length
if(q>=p)return H.d(o,q)
o[q]=u}return o},
k3:function(a){return C.d.hF(Math.pow(2,C.J.bY(Math.log(H.ns(a))/Math.log(2))))},
lX:function(){var u=$.kj
return u==null?$.kj=new V.aI(1,0,0,0,1,0,0,0,1):u},
cV:function(){var u=$.kn
return u==null?$.kn=V.ar(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
ar:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aq(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
km:function(a,b,c){return V.ar(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
jJ:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.ar(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
kl:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.ar(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
jK:function(a,b,c,d){d=V.jQ()
return V.kk(V.kr(),d,new V.B(a,b,c))},
kk:function(a,b,c){var u=c.A(0,Math.sqrt(c.K(c))),t=b.aU(u),s=t.A(0,Math.sqrt(t.K(t))),r=u.aU(s),q=new V.B(a.a,a.b,a.c),p=s.O(0).K(q),o=r.O(0).K(q),n=u.O(0).K(q)
return V.ar(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
b6:function(){var u=$.kq
return u==null?$.kq=new V.ae(0,0):u},
kr:function(){var u=$.av
return u==null?$.av=new V.a0(0,0,0):u},
kv:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.d4(a,b,c,d)},
ds:function(){var u=$.kI
return u==null?$.kI=new V.B(0,0,0):u},
ms:function(){var u=$.i8
return u==null?$.i8=new V.B(-1,0,0):u},
jQ:function(){var u=$.i9
return u==null?$.i9=new V.B(0,1,0):u},
mt:function(){var u=$.ia
return u==null?$.ia=new V.B(0,0,1):u},
M:function M(a,b,c){this.a=a
this.b=b
this.c=c},
aW:function aW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f3:function f3(a){this.a=a},
aI:function aI(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aq:function aq(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ae:function ae(a,b){this.a=a
this.b=b},
a0:function a0(a,b,c){this.a=a
this.b=b
this.c=c},
c1:function c1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d4:function d4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Q:function Q(a,b){this.a=a
this.b=b},
B:function B(a,b,c){this.a=a
this.b=b
this.c=c},
nP:function(a){P.mk(C.H,new V.jo(a))},
me:function(a){var u=new V.hk()
u.dY(a,!0)
return u},
eG:function eG(a){this.a=a
this.d=this.c=null},
eH:function eH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jo:function jo(a){this.a=a},
hk:function hk(){this.b=this.a=null},
hm:function hm(a){this.a=a},
hl:function hl(a){this.a=a}},U={
cC:function(){var u=new U.eK()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
eM:function(a){var u=new U.bK()
u.a=a
return u},
ke:function(a){var u=new U.bN()
u.b4(U.a4)
u.b3(u.gez(),u.gfa())
u.b9(0,a)
u.e=null
u.f=V.cV()
u.r=0
return u},
eK:function eK(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bK:function bK(){this.b=this.a=null},
bN:function bN(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a4:function a4(){},
d6:function d6(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dq:function dq(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dr:function dr(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cH:function cH(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
lV:function(a,b){var u=a.aV,t=new A.fy(b,u)
t.dX(b,u)
t.dU(a,b)
return t},
lW:function(a,b,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="MaterialLight_"+a3.gah(a3)+a4.gah(a4)+a5.gah(a5)+a6.gah(a6)+a7.gah(a7)+a8.gah(a8)+a9.gah(a9)+b0.gah(b0)+b1.gah(b1)+"_"
c+=a?"1":"0"
c+=b?"1":"0"
c+=a0?"1":"0"
c=c+"0_"+a2
u=b2.length
if(u>0){c+="_Bar"
for(t=0;t<b2.length;b2.length===u||(0,H.p)(b2),++t)c+="_"+H.e(b2[t].a)}u=b3.length
if(u>0){c+="_Dir"
for(t=0;t<b3.length;b3.length===u||(0,H.p)(b3),++t)c+="_"+H.e(b3[t].a)}u=b4.length
if(u>0){c+="_Point"
for(t=0;t<b4.length;b4.length===u||(0,H.p)(b4),++t)c+="_"+H.e(b4[t].a)}u=b5.length
if(u>0){c+="_Spot"
for(t=0;t<b5.length;b5.length===u||(0,H.p)(b5),++t)c+="_"+H.e(b5[t].a)}for(u=b2.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=b2[t].b
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
d=$.aS()
if(j){u=$.aR()
d=new Z.aN(d.a|u.a)}if(i){u=$.aQ()
d=new Z.aN(d.a|u.a)}if(h){u=$.aT()
d=new Z.aN(d.a|u.a)}if(g){u=$.aP()
d=new Z.aN(d.a|u.a)}return new A.fB(a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,s,o,k,o,r,f,!0,e,!1,m,r,l,j,i,h,!1,g,a,!1,a0,!1,a2,c.charCodeAt(0)==0?c:c,d)},
j7:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
j8:function(a,b,c){var u,t="Txt, txt2D).rgb;\n"
A.j7(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.ep(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.b){u+="   "+c+"Color = "+c+"Clr*texture2D("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.b){u+="   "+c+"Color = texture2D("+c+t
a.a=u}a.a=u+"}\n"},
n1:function(a,b){var u,t=a.a,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.j7(b,t,"emission")
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
mY:function(a,b){var u,t=a.b
if(!(t.a||t.b||!1))return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.j8(b,t,"ambient")
b.a+="\n"},
n_:function(a,b){var u,t=a.c
if(!(t.a||t.b||!1))return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.j8(b,t,"diffuse")
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
n2:function(a,b){var u,t=a.d
if(!(t.a||t.b||!1))return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.j8(b,t,"invDiffuse")
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
n8:function(a,b){var u,t=a.e
if(!(t.a||t.b||!1))return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.j8(b,t,"specular")
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
n4:function(a,b){var u,t,s
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
n6:function(a,b){var u,t=a.r,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.j7(b,t,"reflect")
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
n7:function(a,b){var u,t=a.x,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.j7(b,t,"refract")
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
mZ:function(a,b,c){var u,t,s,r,q,p,o=b.b
if(o<=0)return
u=b.a
t="barLight"+H.e(u)
s=A.ep(t)
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
if(typeof u!=="number")return u.a2()
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
c.a=r+"\n"}r=[P.n]
q=H.c([],r)
q.push("lit.color")
if(u)q.push("attenuation")
u=c.a+="   return "+C.b.p(q," * ")+";\n"
u+="}\n"
c.a=u
u+="\n"
c.a=u
u+="vec3 "+t+"Value(vec3 norm, "+s+" lit)\n"
c.a=u
c.a=u+"{\n"
q=H.c([],r)
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
p=H.c([],r)
u=a.c
if(u.a||u.b||!1)p.push("diffuse(norm, normDir)")
u=a.d
if(u.a||u.b||!1)p.push("invDiffuse(norm, normDir)")
u=a.e
if(u.a||u.b||!1)p.push("specular(norm, normDir)")
u=c.a+="      highLight = intensity*("+C.b.p(p," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.b.p(q," + ")+");\n"
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
n0:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.e(u)
s=A.ep(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.a2()
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
r=[P.n]
o=H.c([],r)
n=a.b
if(n.a||n.b||!1)o.push("ambientColor")
if(a.dx){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.c([],r)
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
c.a+="      highLight = intensity*("+C.b.p(m," + ")+");\n"}else c.a+="   highLight = "+C.b.p(m," + ")+";\n"
o.push("highLight")}r=c.a+="   return lit.color*("+C.b.p(o," + ")+");\n"
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
n5:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.e(u)
s=A.ep(t)
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
if(typeof u!=="number")return u.a2()
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
c.a=r+"\n"}r=[P.n]
l=H.c([],r)
l.push("lit.color")
if(o)l.push("attenuation")
if(u)l.push("textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.b.p(l," * ")+";\n"
o+="}\n"
c.a=o
o+="\n"
c.a=o
o+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+m+")\n"
c.a=o
c.a=o+"{\n"
l=H.c([],r)
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
k=H.c([],r)
r=a.c
if(r.a||r.b||!1)k.push("diffuse(norm, normDir)")
r=a.d
if(r.a||r.b||!1)k.push("invDiffuse(norm, normDir)")
r=a.e
if(r.a||r.b||!1)k.push("specular(norm, normDir)")
r=c.a+="      highLight = intensity*("+C.b.p(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.b.p(l," + ")+");\n"
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
n9:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.e(u)
s=A.ep(t)
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
if(typeof u!=="number")return u.a2()
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
c.a=u+"\n"}u=[P.n]
j=H.c([],u)
if(n)j.push("attenuation")
if(o)j.push("scale")
if(m)j.push("texture2D(txt2D, txtLoc).rgb")
else j.push("vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.b.p(j," * ")+";\n"
r+="}\n"
c.a=r
r+="\n"
c.a=r
r+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+k+")\n"
c.a=r
c.a=r+"{\n"
j=H.c([],u)
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
i=H.c([],u)
u=a.c
if(u.a||u.b||!1)i.push("diffuse(norm, litVec)")
u=a.d
if(u.a||u.b||!1)i.push("invDiffuse(norm, litVec)")
u=a.e
if(u.a||u.b||!1)i.push("specular(norm, litVec)")
u=c.a+="      highLight = intensity*("+C.b.p(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.b.p(j," + ")+");\n"
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
n3:function(a,b){var u,t
if(a.cy>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.dx)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.c([],[P.n])
u=a.b
if(u.a||u.b||!1)t.push("ambientColor")
u=a.c
if(u.a||u.b||!1)t.push("diffuse(norm, litVec)")
u=a.d
if(u.a||u.b||!1)t.push("invDiffuse(norm, litVec)")
u=a.e
if(u.a||u.b||!1)t.push("specular(norm, litVec)")
u=b.a+="   return "+C.b.p(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
na:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.P("")
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
A.n1(a,j)
A.mY(a,j)
A.n_(a,j)
A.n2(a,j)
A.n8(a,j)
t=a.db
if(t){r=j.a+="// === Environmental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.n6(a,j)
A.n7(a,j)}A.n4(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.p)(q),++o)A.mZ(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.p)(q),++o)A.n0(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.p)(q),++o)A.n5(a,q[o],j)
for(q=a.cx,p=q.length,o=0;o<q.length;q.length===p||(0,H.p)(q),++o)A.n9(a,q[o],j)
A.n3(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.c([],[P.n])
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.p)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a3(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.p)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a3(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.p)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a3(r,1))+"Values(norm);\n"}for(u=a.cx,t=u.length,o=0;o<u.length;u.length===t||(0,H.p)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a3(r,1))+"Values(norm);\n"}if(a.cy<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
if(u.a||u.b||!1)n.push("emissionColor()")
u=a.r
if(u.a||u.b||!1)n.push("reflect(refl)")
u=a.x
if(u.a||u.b||!1)n.push("refract(refl)")
if(n.length<=0)n.push("vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.b.p(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
nb:function(a,b){var u,t,s
if(!a.ry)return
u=b.a+="struct BendingValue\n"
u+="{\n"
b.a=u
u+="   mat4 mat;\n"
b.a=u
u+="};\n"
b.a=u
b.a=u+"uniform int bendMatCount;\n"
u=b.a+="uniform BendingValue bendValues["+a.aJ+"];\n"
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
nd:function(a,b){var u
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
nc:function(a,b){var u
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
nf:function(a,b){var u,t
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
ng:function(a,b){var u,t
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
ne:function(a,b){var u
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
nh:function(a,b){var u
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
ep:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.a.a3(a,1)},
jM:function(a,b,c,d,e){var u=new A.hO(a,c,e)
u.f=d
P.lS(d,0,P.t)
return u},
cx:function cx(a,b,c){this.a=a
this.b=b
this.c=c},
eu:function eu(a){this.a=a},
W:function W(a,b,c){this.a=a
this.b=b
this.c=c},
fy:function fy(a,b){var _=this
_.hU=_.cX=_.bb=_.aV=_.aJ=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.i1=_.i0=_.i_=_.bW=_.bV=_.bU=_.bT=_.bS=_.bR=_.bQ=_.bP=_.hZ=_.d8=_.d7=_.hY=_.d6=_.d5=_.d4=_.hX=_.d3=_.d2=_.d1=_.hW=_.d0=_.d_=_.hV=_.cZ=_.cY=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cy:function cy(a,b){this.a=a
this.b=b},
cE:function cE(a,b){this.a=a
this.b=b},
d1:function d1(a,b){this.a=a
this.b=b},
d9:function d9(a,b){this.a=a
this.b=b},
fB:function fB(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.aJ=b3
_.aV=b4
_.bb=b5},
c6:function c6(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
c7:function c7(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
c9:function c9(a,b,c,d,e,f,g,h,i,j){var _=this
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
ca:function ca(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
d7:function d7(){},
dl:function dl(){},
hT:function hT(a){this.a=a},
b8:function b8(a,b,c){this.a=a
this.c=b
this.d=c},
hQ:function hQ(a,b,c){this.a=a
this.c=b
this.d=c},
hR:function hR(a,b,c){this.a=a
this.c=b
this.d=c},
hS:function hS(a,b,c){this.a=a
this.c=b
this.d=c},
hO:function hO(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
S:function S(a,b,c){this.a=a
this.c=b
this.d=c},
hP:function hP(a,b,c){this.a=a
this.c=b
this.d=c},
D:function D(a,b,c){this.a=a
this.c=b
this.d=c},
c5:function c5(a,b,c){this.a=a
this.c=b
this.d=c},
hU:function hU(a,b,c){this.a=a
this.c=b
this.d=c},
c8:function c8(a,b,c){this.a=a
this.c=b
this.d=c},
ab:function ab(a,b,c){this.a=a
this.c=b
this.d=c},
Z:function Z(a,b,c){this.a=a
this.c=b
this.d=c},
bu:function bu(a,b,c){this.a=a
this.c=b
this.d=c}},F={
j2:function(a){var u,t=a.a>0?1:0
if(a.b>0)t+=2
u=a.c
if(typeof u!=="number")return u.W()
return(u>0?t+4:t)*2},
cn:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.B(h,g+a1,f+a2)
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
j.d=i}m=F.j2(i)
l=F.j2(h)
k=F.l6(d,a0,new F.j1(j,F.j2(g),F.j2(f),l,m,c),b)
if(k!=null)a.hc(k)},
nF:function(a,b){var u,t={}
t.a=u
t.a=null
t.a=new F.je()
return F.l6(b,a,new F.jf(t),null)},
l6:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
if(a<1)return
if(b<1)return
u=F.kx()
t=H.c([],[F.cb])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
o=q.cM(new V.aW(p,0,0,1),new V.ae(r,1))
c.$3(o,r,0)
t.push(o.bO(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
o=k.cM(new V.aW(j,i,h,1),new V.ae(r,m))
c.$3(o,r,n)
t.push(o.bO(d))}}u.d.fI(a+1,b+1,t)
return u},
cI:function(a,b,c){var u=new F.bm(),t=a.a
if(t==null)H.o(P.u("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.o(P.u("May not create a face with vertices attached to different shapes."))
u.a=a
a.d.b.push(u)
u.b=b
b.d.c.push(u)
u.c=c
c.d.d.push(u)
u.a.a.d.b.push(u)
u.a.a.a1()
return u},
kx:function(){var u=new F.hg(),t=new F.ib(u)
t.b=!1
t.c=H.c([],[F.cb])
u.a=t
t=new F.hj(u)
t.b=H.c([],[F.c0])
u.b=t
t=new F.hi(u)
t.b=H.c([],[F.bS])
u.c=t
t=new F.hh(u)
t.b=H.c([],[F.bm])
u.d=t
u.e=null
return u},
kJ:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.cb(),r=new F.ih()
r.b=H.c([],[F.c0])
s.b=r
r=new F.ig()
u=[F.bS]
r.b=H.c([],u)
r.c=H.c([],u)
s.c=r
r=new F.ic()
u=[F.bm]
r.b=H.c([],u)
r.c=H.c([],u)
r.d=H.c([],u)
s.d=r
h=$.ll()
s.e=0
r=$.aS()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aR().a)!==0?e:t
s.x=(u&$.aQ().a)!==0?b:t
s.y=(u&$.aT().a)!==0?f:t
s.z=(u&$.be().a)!==0?g:t
s.Q=(u&$.lm().a)!==0?c:t
s.ch=(u&$.bF().a)!==0?i:0
s.cx=(u&$.aP().a)!==0?a:t
return s},
j1:function j1(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
je:function je(){},
jf:function jf(a){this.a=a},
bm:function bm(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bS:function bS(){this.b=this.a=null},
c0:function c0(){this.a=null},
hg:function hg(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hh:function hh(a){this.a=a
this.b=null},
hi:function hi(a){this.a=a
this.b=null},
hj:function hj(a){this.a=a
this.b=null},
cb:function cb(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ij:function ij(a){this.a=a},
ii:function ii(a){this.a=a},
ib:function ib(a){this.a=a
this.c=this.b=null},
ic:function ic(){this.d=this.c=this.b=null},
id:function id(a,b){this.a=a
this.b=b},
ie:function ie(a,b){this.a=a
this.b=b},
ig:function ig(){this.c=this.b=null},
ih:function ih(){this.b=null}},T={de:function de(){},hB:function hB(){},hC:function hC(){var _=this
_.y=_.d=_.c=_.b=_.a=null},hD:function hD(a){var _=this
_.a=a
_.e=_.d=_.b=null},hE:function hE(a,b,c,d,e,f,g){var _=this
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
H.jF.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gF:function(a){return H.c2(a)},
i:function(a){return"Instance of '"+H.e(H.c3(a))+"'"}}
J.fh.prototype={
i:function(a){return String(a)},
gF:function(a){return a?519018:218159},
$iaD:1}
J.cO.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gF:function(a){return 0}}
J.cP.prototype={
gF:function(a){return 0},
i:function(a){return String(a)},
$ilN:1}
J.h2.prototype={}
J.bv.prototype={}
J.b1.prototype={
i:function(a){var u=a[$.l9()]
if(u==null)return this.dS(a)
return"JavaScript function for "+H.e(J.a8(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.b_.prototype={
hw:function(a,b){var u
if(!!a.fixed$length)H.o(P.w("removeAt"))
u=a.length
if(b>=u)throw H.b(P.d3(b,null))
return a.splice(b,1)[0]},
T:function(a,b){var u
if(!!a.fixed$length)H.o(P.w("remove"))
for(u=0;u<a.length;++u)if(J.I(a[u],b)){a.splice(u,1)
return!0}return!1},
b9:function(a,b){var u,t
if(!!a.fixed$length)H.o(P.w("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.p)(b),++t)a.push(b[t])},
E:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.b(P.bi(a))}},
p:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.d(r,u)
r[u]=t}return r.join(b)},
h9:function(a){return this.p(a,"")},
h2:function(a,b,c){var u,t,s=a.length
for(u=b,t=0;t<s;++t){u=c.$2(u,a[t])
if(a.length!==s)throw H.b(P.bi(a))}return u},
h3:function(a,b,c){return this.h2(a,b,c,null)},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
dP:function(a,b,c){if(b<0||b>a.length)throw H.b(P.V(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.b(P.V(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.bc(a,0)])
return H.c(a.slice(b,c),[H.bc(a,0)])},
gau:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.b(H.lK())},
aR:function(a,b){if(!!a.immutable$list)H.o(P.w("sort"))
H.mh(a,b==null?J.mV():b)},
dO:function(a){return this.aR(a,null)},
U:function(a,b){var u
for(u=0;u<a.length;++u)if(J.I(a[u],b))return!0
return!1},
i:function(a){return P.jC(a,"[","]")},
gP:function(a){return new J.a1(a,a.length)},
gF:function(a){return H.c2(a)},
gk:function(a){return a.length},
sk:function(a,b){var u="newLength"
if(!!a.fixed$length)H.o(P.w("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(P.ju(b,u,null))
if(b<0)throw H.b(P.V(b,0,null,u,null))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.b(H.bD(a,b))
return a[b]},
j:function(a,b,c){if(!!a.immutable$list)H.o(P.w("indexed set"))
if(b>=a.length||b<0)throw H.b(H.bD(a,b))
a[b]=c},
$iq:1,
$ih:1,
$ir:1}
J.jE.prototype={}
J.a1.prototype={
gD:function(a){return this.d},
u:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.b(H.p(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bQ.prototype={
aI:function(a,b){var u
if(typeof b!=="number")throw H.b(H.ac(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbe(b)
if(this.gbe(a)===u)return 0
if(this.gbe(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbe:function(a){return a===0?1/a<0:a<0},
hF:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.b(P.w(""+a+".toInt()"))},
bY:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.b(P.w(""+a+".floor()"))},
ag:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.b(P.w(""+a+".round()"))},
dF:function(a,b){var u
if(b>20)throw H.b(P.V(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbe(a))return"-"+u
return u},
b_:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.b(P.V(b,2,36,"radix",null))
u=a.toString(b)
if(C.a.R(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.o(P.w("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.d(t,1)
u=t[1]
if(3>=s)return H.d(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.a.m("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gF:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
b2:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
dT:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cH(a,b)},
a_:function(a,b){return(a|0)===a?a/b|0:this.cH(a,b)},
cH:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.b(P.w("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
aG:function(a,b){var u
if(a>0)u=this.cG(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
fw:function(a,b){if(b<0)throw H.b(H.ac(b))
return this.cG(a,b)},
cG:function(a,b){return b>31?0:a>>>b},
$iH:1,
$ia7:1}
J.cN.prototype={$it:1}
J.cM.prototype={}
J.b0.prototype={
R:function(a,b){if(b<0)throw H.b(H.bD(a,b))
if(b>=a.length)H.o(H.bD(a,b))
return a.charCodeAt(b)},
G:function(a,b){if(b>=a.length)throw H.b(H.bD(a,b))
return a.charCodeAt(b)},
v:function(a,b){if(typeof b!=="string")throw H.b(P.ju(b,null,null))
return a+b},
aP:function(a,b,c,d){var u,t
c=P.aL(b,c,a.length)
if(typeof c!=="number"||Math.floor(c)!==c)H.o(H.ac(c))
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a0:function(a,b,c){var u
if(c<0||c>a.length)throw H.b(P.V(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a5:function(a,b){return this.a0(a,b,0)},
q:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.o(H.ac(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.L()
if(b<0)throw H.b(P.d3(b,null))
if(b>c)throw H.b(P.d3(b,null))
if(c>a.length)throw H.b(P.d3(c,null))
return a.substring(b,c)},
a3:function(a,b){return this.q(a,b,null)},
m:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.b(C.F)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ab:function(a,b){var u=b-a.length
if(u<=0)return a
return this.m(" ",u)+a},
hm:function(a,b,c){var u=b-a.length
if(u<=0)return a
return a+this.m(c,u)},
bc:function(a,b,c){var u
if(c<0||c>a.length)throw H.b(P.V(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
df:function(a,b){return this.bc(a,b,0)},
aI:function(a,b){var u
if(typeof b!=="string")throw H.b(H.ac(b))
if(a===b)u=0
else u=a<b?-1:1
return u},
i:function(a){return a},
gF:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$in:1}
H.L.prototype={
gk:function(a){return this.a.length},
h:function(a,b){return C.a.R(this.a,b)},
$aq:function(){return[P.t]},
$av:function(){return[P.t]},
$ah:function(){return[P.t]},
$ar:function(){return[P.t]}}
H.q.prototype={}
H.bT.prototype={
gD:function(a){return this.d},
u:function(){var u,t=this,s=t.a,r=J.bb(s),q=r.gk(s)
if(t.b!=q)throw H.b(P.bi(s))
u=t.c
if(typeof q!=="number")return H.j(q)
if(u>=q){t.d=null
return!1}t.d=r.H(s,u);++t.c
return!0}}
H.bU.prototype={
gP:function(a){return new H.fx(J.aU(this.a),this.b)},
gk:function(a){return J.ag(this.a)},
H:function(a,b){return this.b.$1(J.jt(this.a,b))},
$ah:function(a,b){return[b]}}
H.f0.prototype={$iq:1,
$aq:function(a,b){return[b]}}
H.fx.prototype={
u:function(){var u=this,t=u.b
if(t.u()){u.a=u.c.$1(t.gD(t))
return!0}u.a=null
return!1},
gD:function(a){return this.a}}
H.im.prototype={
gP:function(a){return new H.io(J.aU(this.a),this.b)}}
H.io.prototype={
u:function(){var u,t
for(u=this.a,t=this.b;u.u();)if(t.$1(u.gD(u)))return!0
return!1},
gD:function(a){var u=this.a
return u.gD(u)}}
H.cJ.prototype={}
H.hY.prototype={
j:function(a,b,c){throw H.b(P.w("Cannot modify an unmodifiable list"))}}
H.dm.prototype={}
H.eN.prototype={
i:function(a){return P.jI(this)},
j:function(a,b,c){return H.lD()},
$iO:1}
H.eO.prototype={
gk:function(a){return this.a},
bM:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.bM(0,b))return
return this.cs(b)},
cs:function(a){return this.b[a]},
E:function(a,b){var u,t,s,r=this.c
for(u=r.length,t=0;t<u;++t){s=r[t]
b.$2(s,this.cs(s))}}}
H.hM.prototype={
aa:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.fZ.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fk.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.hX.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jq.prototype={
$1:function(a){if(!!J.R(a).$ibk)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:8}
H.e0.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bJ.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.cr(t==null?"unknown":t)+"'"},
ghL:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hy.prototype={}
H.hs.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cr(u)+"'"}}
H.bH.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bH))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gF:function(a){var u,t=this.c
if(t==null)u=H.c2(this.a)
else u=typeof t!=="object"?J.cv(t):H.c2(t)
return(u^H.c2(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.c3(u))+"'")}}
H.eE.prototype={
i:function(a){return this.a}}
H.hd.prototype={
i:function(a){return"RuntimeError: "+H.e(this.a)}}
H.F.prototype={
gk:function(a){return this.a},
ga9:function(a){return new H.fo(this,[H.bc(this,0)])},
ghK:function(a){var u=this
return H.lU(u.ga9(u),new H.fj(u),H.bc(u,0),H.bc(u,1))},
bM:function(a,b){var u=this.b
if(u==null)return!1
return this.ei(u,b)},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.b5(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.b5(r,b)
s=t==null?null:t.b
return s}else return q.h7(b)},
h7:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.cu(r,s.dg(a))
t=s.dh(u,a)
if(t<0)return
return u[t].b},
j:function(a,b,c){var u,t,s=this
if(typeof b==="string"){u=s.b
s.cl(u==null?s.b=s.bw():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cl(t==null?s.c=s.bw():t,b,c)}else s.h8(b,c)},
h8:function(a,b){var u,t,s,r=this,q=r.d
if(q==null)q=r.d=r.bw()
u=r.dg(a)
t=r.cu(q,u)
if(t==null)r.bE(q,u,[r.bx(a,b)])
else{s=r.dh(t,a)
if(s>=0)t[s].b=b
else t.push(r.bx(a,b))}},
E:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.b(P.bi(u))
t=t.c}},
cl:function(a,b,c){var u=this.b5(a,b)
if(u==null)this.bE(a,b,this.bx(b,c))
else u.b=c},
bx:function(a,b){var u=this,t=new H.fn(a,b)
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
dg:function(a){return J.cv(a)&0x3ffffff},
dh:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.I(a[t].a,b))return t
return-1},
i:function(a){return P.jI(this)},
b5:function(a,b){return a[b]},
cu:function(a,b){return a[b]},
bE:function(a,b,c){a[b]=c},
el:function(a,b){delete a[b]},
ei:function(a,b){return this.b5(a,b)!=null},
bw:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bE(t,u,t)
this.el(t,u)
return t}}
H.fj.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.bc(u,1),args:[H.bc(u,0)]}}}
H.fn.prototype={}
H.fo.prototype={
gk:function(a){return this.a.a},
gP:function(a){var u=this.a,t=new H.fp(u,u.r)
t.c=u.e
return t}}
H.fp.prototype={
gD:function(a){return this.d},
u:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.b(P.bi(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.jh.prototype={
$1:function(a){return this.a(a)},
$S:8}
H.ji.prototype={
$2:function(a,b){return this.a(a,b)}}
H.jj.prototype={
$1:function(a){return this.a(a)}}
H.fi.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$ima:1}
H.bY.prototype={$ibY:1}
H.b4.prototype={$ib4:1}
H.cW.prototype={
gk:function(a){return a.length},
$iz:1,
$az:function(){}}
H.bZ.prototype={
h:function(a,b){H.aC(b,a,a.length)
return a[b]},
j:function(a,b,c){H.aC(b,a,a.length)
a[b]=c},
$iq:1,
$aq:function(){return[P.H]},
$av:function(){return[P.H]},
$ih:1,
$ah:function(){return[P.H]},
$ir:1,
$ar:function(){return[P.H]}}
H.cX.prototype={
j:function(a,b,c){H.aC(b,a,a.length)
a[b]=c},
$iq:1,
$aq:function(){return[P.t]},
$av:function(){return[P.t]},
$ih:1,
$ah:function(){return[P.t]},
$ir:1,
$ar:function(){return[P.t]}}
H.fU.prototype={
h:function(a,b){H.aC(b,a,a.length)
return a[b]}}
H.fV.prototype={
h:function(a,b){H.aC(b,a,a.length)
return a[b]}}
H.fW.prototype={
h:function(a,b){H.aC(b,a,a.length)
return a[b]}}
H.fX.prototype={
h:function(a,b){H.aC(b,a,a.length)
return a[b]}}
H.fY.prototype={
h:function(a,b){H.aC(b,a,a.length)
return a[b]}}
H.cY.prototype={
gk:function(a){return a.length},
h:function(a,b){H.aC(b,a,a.length)
return a[b]}}
H.c_.prototype={
gk:function(a){return a.length},
h:function(a,b){H.aC(b,a,a.length)
return a[b]},
$ic_:1,
$ibt:1}
H.cd.prototype={}
H.ce.prototype={}
H.cf.prototype={}
H.cg.prototype={}
P.iq.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:16}
P.ip.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.ir.prototype={
$0:function(){this.a.$0()}}
P.is.prototype={
$0:function(){this.a.$0()}}
P.e6.prototype={
e7:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bC(new P.iS(this,b),0),a)
else throw H.b(P.w("`setTimeout()` not found."))},
e8:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bC(new P.iR(this,a,Date.now(),b),0),a)
else throw H.b(P.w("Periodic timer."))},
$idg:1}
P.iS.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.iR.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.dT(u,q)}s.c=r
t.d.$1(s)}}
P.bw.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.e(this.a)+")"}}
P.cj.prototype={
gD:function(a){var u=this.c
if(u==null)return this.b
return u.gD(u)},
u:function(){var u,t,s,r,q=this
for(;!0;){u=q.c
if(u!=null)if(u.u())return!0
else q.c=null
t=function(a,b,c){var p,o=b
while(true)try{return a(o,p)}catch(n){p=n
o=c}}(q.a,0,1)
if(t instanceof P.bw){s=t.b
if(s===2){u=q.d
if(u==null||u.length===0){q.b=null
return!1}if(0>=u.length)return H.d(u,-1)
q.a=u.pop()
continue}else{u=t.a
if(s===3)throw u
else{r=J.aU(u)
if(!!r.$icj){u=q.d
if(u==null)u=q.d=[]
u.push(q.a)
q.a=r.a
continue}else{q.c=r
continue}}}}else{q.b=t
return!0}}return!1}}
P.iQ.prototype={
gP:function(a){return new P.cj(this.a())}}
P.du.prototype={}
P.dc.prototype={}
P.hv.prototype={}
P.dg.prototype={}
P.j0.prototype={}
P.j9.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.d_():s
s=this.b
if(s==null)throw H.b(t)
u=H.b(t)
u.stack=s.i(0)
throw u}}
P.iF.prototype={
hB:function(a){var u,t,s,r=null
try{if(C.f===$.ak){a.$0()
return}P.nj(r,r,this,a)}catch(s){u=H.bd(s)
t=H.k0(s)
P.kS(r,r,this,u,t)}},
hC:function(a,b){var u,t,s,r=null
try{if(C.f===$.ak){a.$1(b)
return}P.nk(r,r,this,a,b)}catch(s){u=H.bd(s)
t=H.k0(s)
P.kS(r,r,this,u,t)}},
hD:function(a,b){return this.hC(a,b,null)},
fK:function(a){return new P.iG(this,a)},
cS:function(a,b){return new P.iH(this,a,b)}}
P.iG.prototype={
$0:function(){return this.a.hB(this.b)}}
P.iH.prototype={
$1:function(a){return this.a.hD(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.iC.prototype={
gP:function(a){var u=new P.dJ(this,this.r)
u.c=this.e
return u},
gk:function(a){return this.a},
U:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.eg(b)
return t}},
eg:function(a){var u=this.d
if(u==null)return!1
return this.bt(this.ct(u,a),a)>=0},
l:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cn(u==null?s.b=P.jS():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cn(t==null?s.c=P.jS():t,b)}else return s.ea(0,b)},
ea:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.jS()
u=s.co(b)
t=r[u]
if(t==null)r[u]=[s.bq(b)]
else{if(s.bt(t,b)>=0)return!1
t.push(s.bq(b))}return!0},
T:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fl(this.c,b)
else return this.fk(0,b)},
fk:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.ct(r,b)
t=s.bt(u,b)
if(t<0)return!1
s.cJ(u.splice(t,1)[0])
return!0},
cn:function(a,b){if(a[b]!=null)return!1
a[b]=this.bq(b)
return!0},
fl:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.cJ(u)
delete a[b]
return!0},
cz:function(){this.r=1073741823&this.r+1},
bq:function(a){var u,t=this,s=new P.iD(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cz()
return s},
cJ:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cz()},
co:function(a){return J.cv(a)&1073741823},
ct:function(a,b){return a[this.co(b)]},
bt:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.I(a[t].a,b))return t
return-1}}
P.iD.prototype={}
P.dJ.prototype={
gD:function(a){return this.d},
u:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.b(P.bi(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.ff.prototype={}
P.fq.prototype={
$2:function(a,b){this.a.j(0,a,b)},
$S:3}
P.fr.prototype={$iq:1,$ih:1,$ir:1}
P.v.prototype={
gP:function(a){return new H.bT(a,this.gk(a))},
H:function(a,b){return this.h(a,b)},
hH:function(a,b){var u,t,s=this,r=H.c([],[H.nD(s,a,"v",0)])
C.b.sk(r,s.gk(a))
u=0
while(!0){t=s.gk(a)
if(typeof t!=="number")return H.j(t)
if(!(u<t))break
t=s.h(a,u)
if(u>=r.length)return H.d(r,u)
r[u]=t;++u}return r},
hG:function(a){return this.hH(a,!0)},
h0:function(a,b,c,d){var u
P.aL(b,c,this.gk(a))
for(u=b;u<c;++u)this.j(a,u,d)},
i:function(a){return P.jC(a,"[","]")}}
P.fu.prototype={}
P.fv.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:3}
P.a3.prototype={
E:function(a,b){var u,t
for(u=J.aU(this.ga9(a));u.u();){t=u.gD(u)
b.$2(t,this.h(a,t))}},
gk:function(a){return J.ag(this.ga9(a))},
i:function(a){return P.jI(a)},
$iO:1}
P.iT.prototype={
j:function(a,b,c){throw H.b(P.w("Cannot modify unmodifiable map"))}}
P.fw.prototype={
h:function(a,b){return J.bG(this.a,b)},
j:function(a,b,c){J.js(this.a,b,c)},
E:function(a,b){J.k7(this.a,b)},
gk:function(a){return J.ag(this.a)},
i:function(a){return J.a8(this.a)},
$iO:1}
P.dn.prototype={}
P.iI.prototype={
i:function(a){return P.jC(this,"{","}")},
H:function(a,b){var u,t,s
P.ku(b,"index")
for(u=P.mB(this,this.r),t=0;u.u();){s=u.d
if(b===t)return s;++t}throw H.b(P.K(b,this,"index",null,t))},
$iq:1,
$ih:1}
P.dK.prototype={}
P.ec.prototype={}
P.eA.prototype={
hd:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.aL(a0,a1,b.length)
u=$.lo()
if(typeof a1!=="number")return H.j(a1)
t=a0
s=t
r=null
q=-1
p=-1
o=0
for(;t<a1;t=n){n=t+1
m=C.a.G(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.jg(C.a.G(b,n))
j=H.jg(C.a.G(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.d(u,i)
h=u[i]
if(h>=0){i=C.a.R("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.P("")
g=r.a+=C.a.q(b,s,t)
r.a=g+H.d2(m)
s=n
continue}}throw H.b(P.N("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.a.q(b,s,a1)
f=g.length
if(q>=0)P.k9(b,p,a1,q,o,f)
else{e=C.c.b2(f-1,4)+1
if(e===1)throw H.b(P.N(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.a.aP(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.k9(b,p,a1,q,o,d)
else{e=C.c.b2(d,4)
if(e===1)throw H.b(P.N(c,b,a1))
if(e>1)b=C.a.aP(b,a1,a1,e===2?"==":"=")}return b}}
P.eB.prototype={}
P.eJ.prototype={}
P.eP.prototype={}
P.f1.prototype={}
P.i5.prototype={
gh_:function(){return C.G}}
P.i7.prototype={
bN:function(a){var u,t,s,r=P.aL(0,null,a.length)
if(typeof r!=="number")return r.w()
u=r-0
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.j_(t)
if(s.en(a,0,r)!==r)s.cL(J.lu(a,r-1),0)
return new Uint8Array(t.subarray(0,H.mS(0,s.b,t.length)))}}
P.j_.prototype={
cL:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
en:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.a.R(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.a.G(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cL(r,C.a.G(a,p)))s=p}else if(r<=2047){q=n.b
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
P.i6.prototype={
bN:function(a){var u,t,s,r,q,p,o,n,m=P.mn(!1,a,0,null)
if(m!=null)return m
u=P.aL(0,null,J.ag(a))
t=P.kU(a,0,u)
if(t>0){s=P.c4(a,0,t)
if(t===u)return s
r=new P.P(s)
q=t
p=!1}else{q=0
r=null
p=!0}if(r==null)r=new P.P("")
o=new P.iZ(!1,r)
o.c=p
o.fN(a,q,u)
if(o.e>0){H.o(P.N("Unfinished UTF-8 octet sequence",a,u))
r.a+=H.d2(65533)
o.f=o.e=o.d=0}n=r.a
return n.charCodeAt(0)==0?n:n}}
P.iZ.prototype={
fN:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=this,k="Bad UTF-8 encoding 0x",j=l.d,i=l.e,h=l.f
l.f=l.e=l.d=0
$label0$0:for(u=J.bb(a),t=l.b,s=b;!0;s=n){$label1$1:if(i>0){do{if(s===c)break $label0$0
r=u.h(a,s)
if(typeof r!=="number")return r.a2()
if((r&192)!==128){q=P.N(k+C.c.b_(r,16),a,s)
throw H.b(q)}else{j=(j<<6|r&63)>>>0;--i;++s}}while(i>0)
q=h-1
if(q<0||q>=4)return H.d(C.r,q)
if(j<=C.r[q]){q=P.N("Overlong encoding of 0x"+C.c.b_(j,16),a,s-h-1)
throw H.b(q)}if(j>1114111){q=P.N("Character outside valid Unicode range: 0x"+C.c.b_(j,16),a,s-h-1)
throw H.b(q)}if(!l.c||j!==65279)t.a+=H.d2(j)
l.c=!1}if(typeof c!=="number")return H.j(c)
q=s<c
for(;q;){p=P.kU(a,s,c)
if(p>0){l.c=!1
o=s+p
t.a+=P.c4(a,s,o)
if(o===c)break}else o=s
n=o+1
r=u.h(a,o)
if(typeof r!=="number")return r.L()
if(r<0){m=P.N("Negative UTF-8 code unit: -0x"+C.c.b_(-r,16),a,n-1)
throw H.b(m)}else{if((r&224)===192){j=r&31
i=1
h=1
continue $label0$0}if((r&240)===224){j=r&15
i=2
h=2
continue $label0$0}if((r&248)===240&&r<245){j=r&7
i=3
h=3
continue $label0$0}m=P.N(k+C.c.b_(r,16),a,n-1)
throw H.b(m)}}break $label0$0}if(i>0){l.d=j
l.e=i
l.f=h}}}
P.aD.prototype={}
P.a9.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.a9&&this.a===b.a&&!0},
aI:function(a,b){return C.c.aI(this.a,b.a)},
gF:function(a){var u=this.a
return(u^C.c.aG(u,30))&1073741823},
i:function(a){var u=this,t=P.lE(H.m6(u)),s=P.cD(H.m4(u)),r=P.cD(H.m0(u)),q=P.cD(H.m1(u)),p=P.cD(H.m3(u)),o=P.cD(H.m5(u)),n=P.lF(H.m2(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.H.prototype={}
P.aX.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.aX&&this.a===b.a},
gF:function(a){return C.c.gF(this.a)},
aI:function(a,b){return C.c.aI(this.a,b.a)},
i:function(a){var u,t,s,r=new P.f_(),q=this.a
if(q<0)return"-"+new P.aX(0-q).i(0)
u=r.$1(C.c.a_(q,6e7)%60)
t=r.$1(C.c.a_(q,1e6)%60)
s=new P.eZ().$1(q%1e6)
return""+C.c.a_(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
P.eZ.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.f_.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bk.prototype={}
P.d_.prototype={
i:function(a){return"Throw of null."}}
P.al.prototype={
gbs:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbr:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbs()+o+u
if(!q.a)return t
s=q.gbr()
r=P.jB(q.b)
return t+s+": "+r}}
P.br.prototype={
gbs:function(){return"RangeError"},
gbr:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.fe.prototype={
gbs:function(){return"RangeError"},
gbr:function(){var u,t=this.b
if(typeof t!=="number")return t.L()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gk:function(a){return this.f}}
P.hZ.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.hV.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.hr.prototype={
i:function(a){return"Bad state: "+this.a}}
P.eL.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.jB(u)+"."}}
P.h1.prototype={
i:function(a){return"Out of Memory"},
$ibk:1}
P.da.prototype={
i:function(a){return"Stack Overflow"},
$ibk:1}
P.eU.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dC.prototype={
i:function(a){return"Exception: "+this.a}}
P.fb.prototype={
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
for(q=g;q<o;++q){p=C.a.R(f,q)
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
return h+l+j+k+"\n"+C.a.m(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.e(g)+")"):h}}
P.t.prototype={}
P.h.prototype={
gk:function(a){var u,t=this.gP(this)
for(u=0;t.u();)++u
return u},
H:function(a,b){var u,t,s
P.ku(b,"index")
for(u=this.gP(this),t=0;u.u();){s=u.gD(u)
if(b===t)return s;++t}throw H.b(P.K(b,this,"index",null,t))},
i:function(a){return P.lJ(this,"(",")")}}
P.fg.prototype={}
P.r.prototype={$iq:1,$ih:1}
P.O.prototype={}
P.b5.prototype={
gF:function(a){return P.a_.prototype.gF.call(this,this)},
i:function(a){return"null"}}
P.a7.prototype={}
P.a_.prototype={constructor:P.a_,$ia_:1,
n:function(a,b){return this===b},
gF:function(a){return H.c2(this)},
i:function(a){return"Instance of '"+H.e(H.c3(this))+"'"},
toString:function(){return this.i(this)}}
P.n.prototype={}
P.P.prototype={
gk:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
P.i3.prototype={
$2:function(a,b){var u,t,s,r=J.k_(b).df(b,"=")
if(r===-1){if(b!=="")J.js(a,P.jW(b,0,b.length,this.a,!0),"")}else if(r!==0){u=C.a.q(b,0,r)
t=C.a.a3(b,r+1)
s=this.a
J.js(a,P.jW(u,0,u.length,s,!0),P.jW(t,0,t.length,s,!0))}return a}}
P.i0.prototype={
$2:function(a,b){throw H.b(P.N("Illegal IPv4 address, "+a,this.a,b))}}
P.i1.prototype={
$2:function(a,b){throw H.b(P.N("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.i2.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.eo(C.a.q(this.b,a,b),null,16)
if(typeof u!=="number")return u.L()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u}}
P.bx.prototype={
gdI:function(){return this.b},
gbZ:function(a){var u=this.c
if(u==null)return""
if(C.a.a5(u,"["))return C.a.q(u,1,u.length-1)
return u},
gbg:function(a){var u=this.d
if(u==null)return P.kL(this.a)
return u},
gc5:function(a){var u=this.f
return u==null?"":u},
gd9:function(){var u=this.r
return u==null?"":u},
dA:function(a,b){var u,t,s,r=this,q=r.a,p=q==="file",o=r.b,n=r.d,m=r.c
if(!(m!=null))m=o.length!==0||n!=null||p?"":null
u=r.e
if(!p)t=m!=null&&u.length!==0
else t=!0
if(t&&!C.a.a5(u,"/"))u="/"+u
s=P.jU(null,0,0,b)
return new P.bx(q,o,m,n,u,s,r.r)},
gbh:function(){var u,t=this.Q
if(t==null){t=this.f
u=P.n
u=this.Q=new P.dn(P.kF(t==null?"":t),[u,u])
t=u}return t},
gda:function(){return this.c!=null},
gde:function(){return this.f!=null},
gdc:function(){return this.r!=null},
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
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.R(b).$ijN)if(s.a==b.gbk())if(s.c!=null===b.gda())if(s.b==b.gdI())if(s.gbZ(s)==b.gbZ(b))if(s.gbg(s)==b.gbg(b))if(s.e===b.gdt(b)){u=s.f
t=u==null
if(!t===b.gde()){if(t)u=""
if(u===b.gc5(b)){u=s.r
t=u==null
if(!t===b.gdc()){if(t)u=""
u=u===b.gd9()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gF:function(a){var u=this.z
return u==null?this.z=C.a.gF(this.i(0)):u},
$ijN:1,
gbk:function(){return this.a},
gdt:function(a){return this.e}}
P.iU.prototype={
$1:function(a){throw H.b(P.N("Invalid port",this.a,this.b+1))}}
P.iV.prototype={
$1:function(a){return P.iY(C.O,a,C.e,!1)}}
P.iX.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.e(P.iY(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.e(P.iY(C.h,b,C.e,!0))}}}
P.iW.prototype={
$2:function(a,b){var u,t
if(b==null||typeof b==="string")this.a.$2(a,b)
else for(u=J.aU(b),t=this.a;u.u();)t.$2(a,u.gD(u))}}
P.i_.prototype={
gdH:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.d(o,0)
u=q.a
o=o[0]+1
t=C.a.bc(u,"?",o)
s=u.length
if(t>=0){r=P.cm(u,t+1,s,C.k,!1)
s=t}else r=p
return q.c=new P.iw("data",p,p,p,P.cm(u,o,s,C.u,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.d(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.j4.prototype={
$1:function(a){return new Uint8Array(96)}}
P.j3.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.d(u,a)
u=u[a]
J.lv(u,0,96,b)
return u},
$S:17}
P.j5.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.a.G(b,s)^96
if(r>=t)return H.d(a,r)
a[r]=c}}}
P.j6.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.a.G(b,0),t=C.a.G(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.d(a,r)
a[r]=c}}}
P.iJ.prototype={
gda:function(){return this.c>0},
gdd:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.v()
t=this.e
if(typeof t!=="number")return H.j(t)
t=u+1<t
u=t}else u=!1
return u},
gde:function(){var u=this.f
if(typeof u!=="number")return u.L()
return u<this.r},
gdc:function(){return this.r<this.a.length},
gcv:function(){return this.b===4&&C.a.a5(this.a,"http")},
gcw:function(){return this.b===5&&C.a.a5(this.a,"https")},
gbk:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gcv())q=t.x="http"
else if(t.gcw()){t.x="https"
q="https"}else if(q===4&&C.a.a5(t.a,s)){t.x=s
q=s}else if(q===7&&C.a.a5(t.a,r)){t.x=r
q=r}else{q=C.a.q(t.a,0,q)
t.x=q}return q},
gdI:function(){var u=this.c,t=this.b+3
return u>t?C.a.q(this.a,t,u-1):""},
gbZ:function(a){var u=this.c
return u>0?C.a.q(this.a,u,this.d):""},
gbg:function(a){var u,t=this
if(t.gdd()){u=t.d
if(typeof u!=="number")return u.v()
return P.eo(C.a.q(t.a,u+1,t.e),null,null)}if(t.gcv())return 80
if(t.gcw())return 443
return 0},
gdt:function(a){return C.a.q(this.a,this.e,this.f)},
gc5:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.L()
return u<t?C.a.q(this.a,u+1,t):""},
gd9:function(){var u=this.r,t=this.a
return u<t.length?C.a.a3(t,u+1):""},
gbh:function(){var u=this,t=u.f
if(typeof t!=="number")return t.L()
if(t>=u.r)return C.P
t=P.n
return new P.dn(P.kF(u.gc5(u)),[t,t])},
dA:function(a,b){var u,t,s,r,q,p=this,o=null,n=p.gbk(),m=n==="file",l=p.c,k=l>0?C.a.q(p.a,p.b+3,l):"",j=p.gdd()?p.gbg(p):o
l=p.c
if(l>0)u=C.a.q(p.a,l,p.d)
else u=k.length!==0||j!=null||m?"":o
l=p.a
t=C.a.q(l,p.e,p.f)
if(!m)s=u!=null&&t.length!==0
else s=!0
if(s&&!C.a.a5(t,"/"))t="/"+t
r=P.jU(o,0,0,b)
s=p.r
q=s<l.length?C.a.a3(l,s+1):o
return new P.bx(n,k,u,j,t,r,q)},
gF:function(a){var u=this.y
return u==null?this.y=C.a.gF(this.a):u},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.R(b).$ijN&&this.a===b.i(0)},
i:function(a){return this.a},
$ijN:1}
P.iw.prototype={}
W.l.prototype={}
W.eq.prototype={
gk:function(a){return a.length}}
W.es.prototype={
i:function(a){return String(a)}}
W.et.prototype={
i:function(a){return String(a)}}
W.bg.prototype={$ibg:1}
W.bh.prototype={
c9:function(a,b,c){if(c!=null)return a.getContext(b,P.nt(c))
return a.getContext(b)},
dK:function(a,b){return this.c9(a,b,null)},
$ibh:1}
W.aV.prototype={
gk:function(a){return a.length}}
W.eQ.prototype={
gk:function(a){return a.length}}
W.E.prototype={$iE:1}
W.bL.prototype={
gk:function(a){return a.length}}
W.eR.prototype={}
W.ad.prototype={}
W.an.prototype={}
W.eS.prototype={
gk:function(a){return a.length}}
W.eT.prototype={
gk:function(a){return a.length}}
W.eV.prototype={
gk:function(a){return a.length}}
W.eW.prototype={
i:function(a){return String(a)}}
W.cF.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.K(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[[P.a5,P.a7]]},
$iz:1,
$az:function(){return[[P.a5,P.a7]]},
$av:function(){return[[P.a5,P.a7]]},
$ih:1,
$ah:function(){return[[P.a5,P.a7]]},
$ir:1,
$ar:function(){return[[P.a5,P.a7]]}}
W.cG.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gay(a))+" x "+H.e(this.gat(a))},
n:function(a,b){var u
if(b==null)return!1
u=J.R(b)
return!!u.$ia5&&a.left===u.gbf(b)&&a.top===u.gbi(b)&&this.gay(a)===u.gay(b)&&this.gat(a)===u.gat(b)},
gF:function(a){return W.kK(C.d.gF(a.left),C.d.gF(a.top),C.d.gF(this.gay(a)),C.d.gF(this.gat(a)))},
gcT:function(a){return a.bottom},
gat:function(a){return a.height},
gbf:function(a){return a.left},
gc6:function(a){return a.right},
gbi:function(a){return a.top},
gay:function(a){return a.width},
$ia5:1,
$aa5:function(){return[P.a7]}}
W.eX.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.K(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[P.n]},
$iz:1,
$az:function(){return[P.n]},
$av:function(){return[P.n]},
$ih:1,
$ah:function(){return[P.n]},
$ir:1,
$ar:function(){return[P.n]}}
W.eY.prototype={
gk:function(a){return a.length}}
W.iu.prototype={
gk:function(a){return this.b.length},
h:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
j:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
this.a.replaceChild(c,u[b])},
l:function(a,b){this.a.appendChild(b)
return b},
gP:function(a){var u=this.hG(this)
return new J.a1(u,u.length)},
$aq:function(){return[W.T]},
$av:function(){return[W.T]},
$ah:function(){return[W.T]},
$ar:function(){return[W.T]}}
W.T.prototype={
gbL:function(a){return new W.iu(a,a.children)},
gcU:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.L()
if(s<0)s=-s*0
if(typeof r!=="number")return r.L()
if(r<0)r=-r*0
return new P.a5(u,t,s,r,[P.a7])},
i:function(a){return a.localName},
$iT:1}
W.i.prototype={$ii:1}
W.f.prototype={
fH:function(a,b,c,d){if(c!=null)this.eb(a,b,c,!1)},
eb:function(a,b,c,d){return a.addEventListener(b,H.bC(c,1),!1)}}
W.ah.prototype={$iah:1}
W.bM.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.K(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.ah]},
$iz:1,
$az:function(){return[W.ah]},
$av:function(){return[W.ah]},
$ih:1,
$ah:function(){return[W.ah]},
$ir:1,
$ar:function(){return[W.ah]},
$ibM:1}
W.f6.prototype={
gk:function(a){return a.length}}
W.fa.prototype={
gk:function(a){return a.length}}
W.ao.prototype={$iao:1}
W.fd.prototype={
gk:function(a){return a.length}}
W.bO.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.K(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.A]},
$iz:1,
$az:function(){return[W.A]},
$av:function(){return[W.A]},
$ih:1,
$ah:function(){return[W.A]},
$ir:1,
$ar:function(){return[W.A]}}
W.aG.prototype={$iaG:1,
gcV:function(a){return a.data}}
W.bP.prototype={$ibP:1}
W.eI.prototype={$iT:1,$iA:1}
W.bp.prototype={$ibp:1}
W.fs.prototype={
i:function(a){return String(a)}}
W.fN.prototype={
gk:function(a){return a.length}}
W.bX.prototype={$ibX:1}
W.fO.prototype={
h:function(a,b){return P.aO(a.get(b))},
E:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aO(u.value[1]))}},
ga9:function(a){var u=H.c([],[P.n])
this.E(a,new W.fP(u))
return u},
gk:function(a){return a.size},
j:function(a,b,c){throw H.b(P.w("Not supported"))},
$aa3:function(){return[P.n,null]},
$iO:1,
$aO:function(){return[P.n,null]}}
W.fP.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fQ.prototype={
h:function(a,b){return P.aO(a.get(b))},
E:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aO(u.value[1]))}},
ga9:function(a){var u=H.c([],[P.n])
this.E(a,new W.fR(u))
return u},
gk:function(a){return a.size},
j:function(a,b,c){throw H.b(P.w("Not supported"))},
$aa3:function(){return[P.n,null]},
$iO:1,
$aO:function(){return[P.n,null]}}
W.fR.prototype={
$2:function(a,b){return this.a.push(a)}}
W.as.prototype={$ias:1}
W.fS.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.K(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.as]},
$iz:1,
$az:function(){return[W.as]},
$av:function(){return[W.as]},
$ih:1,
$ah:function(){return[W.as]},
$ir:1,
$ar:function(){return[W.as]}}
W.at.prototype={$iat:1}
W.it.prototype={
j:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.d(t,b)
u.replaceChild(c,t[b])},
gP:function(a){var u=this.a.childNodes
return new W.cK(u,u.length)},
gk:function(a){return this.a.childNodes.length},
h:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$aq:function(){return[W.A]},
$av:function(){return[W.A]},
$ah:function(){return[W.A]},
$ar:function(){return[W.A]}}
W.A.prototype={
hz:function(a,b){var u,t
try{u=a.parentNode
J.ls(u,b,a)}catch(t){H.bd(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.dR(a):u},
fm:function(a,b,c){return a.replaceChild(b,c)},
$iA:1}
W.cZ.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.K(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.A]},
$iz:1,
$az:function(){return[W.A]},
$av:function(){return[W.A]},
$ih:1,
$ah:function(){return[W.A]},
$ir:1,
$ar:function(){return[W.A]}}
W.au.prototype={$iau:1,
gk:function(a){return a.length}}
W.h3.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.K(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.au]},
$iz:1,
$az:function(){return[W.au]},
$av:function(){return[W.au]},
$ih:1,
$ah:function(){return[W.au]},
$ir:1,
$ar:function(){return[W.au]}}
W.hb.prototype={
h:function(a,b){return P.aO(a.get(b))},
E:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aO(u.value[1]))}},
ga9:function(a){var u=H.c([],[P.n])
this.E(a,new W.hc(u))
return u},
gk:function(a){return a.size},
j:function(a,b,c){throw H.b(P.w("Not supported"))},
$aa3:function(){return[P.n,null]},
$iO:1,
$aO:function(){return[P.n,null]}}
W.hc.prototype={
$2:function(a,b){return this.a.push(a)}}
W.he.prototype={
gk:function(a){return a.length}}
W.aw.prototype={$iaw:1}
W.hn.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.K(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aw]},
$iz:1,
$az:function(){return[W.aw]},
$av:function(){return[W.aw]},
$ih:1,
$ah:function(){return[W.aw]},
$ir:1,
$ar:function(){return[W.aw]}}
W.ax.prototype={$iax:1}
W.ho.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.K(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.ax]},
$iz:1,
$az:function(){return[W.ax]},
$av:function(){return[W.ax]},
$ih:1,
$ah:function(){return[W.ax]},
$ir:1,
$ar:function(){return[W.ax]}}
W.ay.prototype={$iay:1,
gk:function(a){return a.length}}
W.ht.prototype={
h:function(a,b){return a.getItem(b)},
j:function(a,b,c){a.setItem(b,c)},
E:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga9:function(a){var u=H.c([],[P.n])
this.E(a,new W.hu(u))
return u},
gk:function(a){return a.length},
$aa3:function(){return[P.n,P.n]},
$iO:1,
$aO:function(){return[P.n,P.n]}}
W.hu.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ai.prototype={$iai:1}
W.az.prototype={$iaz:1}
W.aj.prototype={$iaj:1}
W.hz.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.K(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aj]},
$iz:1,
$az:function(){return[W.aj]},
$av:function(){return[W.aj]},
$ih:1,
$ah:function(){return[W.aj]},
$ir:1,
$ar:function(){return[W.aj]}}
W.hA.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.K(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.az]},
$iz:1,
$az:function(){return[W.az]},
$av:function(){return[W.az]},
$ih:1,
$ah:function(){return[W.az]},
$ir:1,
$ar:function(){return[W.az]}}
W.hG.prototype={
gk:function(a){return a.length}}
W.aA.prototype={$iaA:1}
W.bs.prototype={$ibs:1}
W.hJ.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.K(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aA]},
$iz:1,
$az:function(){return[W.aA]},
$av:function(){return[W.aA]},
$ih:1,
$ah:function(){return[W.aA]},
$ir:1,
$ar:function(){return[W.aA]}}
W.hK.prototype={
gk:function(a){return a.length}}
W.b7.prototype={}
W.i4.prototype={
i:function(a){return String(a)}}
W.ik.prototype={
gk:function(a){return a.length}}
W.b9.prototype={
gfS:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.b(P.w("deltaY is not supported"))},
gfR:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.b(P.w("deltaX is not supported"))},
$ib9:1}
W.cc.prototype={
fn:function(a,b){return a.requestAnimationFrame(H.bC(b,1))},
em:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.iv.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.K(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.E]},
$iz:1,
$az:function(){return[W.E]},
$av:function(){return[W.E]},
$ih:1,
$ah:function(){return[W.E]},
$ir:1,
$ar:function(){return[W.E]}}
W.dx.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
n:function(a,b){var u
if(b==null)return!1
u=J.R(b)
return!!u.$ia5&&a.left===u.gbf(b)&&a.top===u.gbi(b)&&a.width===u.gay(b)&&a.height===u.gat(b)},
gF:function(a){return W.kK(C.d.gF(a.left),C.d.gF(a.top),C.d.gF(a.width),C.d.gF(a.height))},
gat:function(a){return a.height},
gay:function(a){return a.width}}
W.iz.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.K(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.ao]},
$iz:1,
$az:function(){return[W.ao]},
$av:function(){return[W.ao]},
$ih:1,
$ah:function(){return[W.ao]},
$ir:1,
$ar:function(){return[W.ao]}}
W.dP.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.K(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.A]},
$iz:1,
$az:function(){return[W.A]},
$av:function(){return[W.A]},
$ih:1,
$ah:function(){return[W.A]},
$ir:1,
$ar:function(){return[W.A]}}
W.iK.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.K(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.ay]},
$iz:1,
$az:function(){return[W.ay]},
$av:function(){return[W.ay]},
$ih:1,
$ah:function(){return[W.ay]},
$ir:1,
$ar:function(){return[W.ay]}}
W.iP.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.K(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.ai]},
$iz:1,
$az:function(){return[W.ai]},
$av:function(){return[W.ai]},
$ih:1,
$ah:function(){return[W.ai]},
$ir:1,
$ar:function(){return[W.ai]}}
W.ix.prototype={}
W.iy.prototype={
$1:function(a){return this.a.$1(a)}}
W.J.prototype={
gP:function(a){return new W.cK(a,this.gk(a))}}
W.cK.prototype={
u:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.bG(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gD:function(a){return this.d}}
W.dw.prototype={}
W.dy.prototype={}
W.dz.prototype={}
W.dA.prototype={}
W.dB.prototype={}
W.dD.prototype={}
W.dE.prototype={}
W.dF.prototype={}
W.dG.prototype={}
W.dL.prototype={}
W.dM.prototype={}
W.dN.prototype={}
W.dO.prototype={}
W.dQ.prototype={}
W.dR.prototype={}
W.dU.prototype={}
W.dV.prototype={}
W.dW.prototype={}
W.ch.prototype={}
W.ci.prototype={}
W.dX.prototype={}
W.dY.prototype={}
W.e1.prototype={}
W.e4.prototype={}
W.e5.prototype={}
W.ck.prototype={}
W.cl.prototype={}
W.e7.prototype={}
W.e8.prototype={}
W.ed.prototype={}
W.ee.prototype={}
W.ef.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.ej.prototype={}
W.ek.prototype={}
W.el.prototype={}
W.em.prototype={}
P.iL.prototype={
bX:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
t.push(a)
this.b.push(null)
return s},
bj:function(a){var u,t,s,r,q,p=this,o={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.R(a)
if(!!u.$ia9)return new Date(a.a)
if(!!u.$ima)throw H.b(P.hW("structured clone of RegExp"))
if(!!u.$iah)return a
if(!!u.$ibg)return a
if(!!u.$ibM)return a
if(!!u.$iaG)return a
if(!!u.$ibY||!!u.$ib4||!!u.$ibX)return a
if(!!u.$iO){t=p.bX(a)
s=p.b
r=s.length
if(t>=r)return H.d(s,t)
q=o.a=s[t]
if(q!=null)return q
q={}
o.a=q
if(t>=r)return H.d(s,t)
s[t]=q
u.E(a,new P.iN(o,p))
return o.a}if(!!u.$ir){t=p.bX(a)
o=p.b
if(t>=o.length)return H.d(o,t)
q=o[t]
if(q!=null)return q
return p.fP(a,t)}if(!!u.$ilN){t=p.bX(a)
u=p.b
s=u.length
if(t>=s)return H.d(u,t)
q=o.b=u[t]
if(q!=null)return q
q={}
o.b=q
if(t>=s)return H.d(u,t)
u[t]=q
p.h4(a,new P.iO(o,p))
return o.b}throw H.b(P.hW("structured clone of other type"))},
fP:function(a,b){var u,t=J.bb(a),s=t.gk(a),r=new Array(s),q=this.b
if(b>=q.length)return H.d(q,b)
q[b]=r
if(typeof s!=="number")return H.j(s)
u=0
for(;u<s;++u){q=this.bj(t.h(a,u))
if(u>=r.length)return H.d(r,u)
r[u]=q}return r}}
P.iN.prototype={
$2:function(a,b){this.a.a[a]=this.b.bj(b)},
$S:3}
P.iO.prototype={
$2:function(a,b){this.a.b[a]=this.b.bj(b)},
$S:3}
P.eb.prototype={$iaG:1,
gcV:function(a){return this.a}}
P.ja.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.iM.prototype={
h4:function(a,b){var u,t,s,r
for(u=Object.keys(a),t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,a[r])}}}
P.f7.prototype={
gb6:function(){var u=this.b,t=H.kZ(u,"v",0)
return new H.bU(new H.im(u,new P.f8(),[t]),new P.f9(),[t,W.T])},
j:function(a,b,c){var u=this.gb6()
J.lw(u.b.$1(J.jt(u.a,b)),c)},
l:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.ag(this.gb6().a)},
h:function(a,b){var u=this.gb6()
return u.b.$1(J.jt(u.a,b))},
gP:function(a){var u=P.jH(this.gb6(),!1,W.T)
return new J.a1(u,u.length)},
$aq:function(){return[W.T]},
$av:function(){return[W.T]},
$ah:function(){return[W.T]},
$ar:function(){return[W.T]}}
P.f8.prototype={
$1:function(a){return!!J.R(a).$iT}}
P.f9.prototype={
$1:function(a){return H.m(a,"$iT")}}
P.iE.prototype={
gc6:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.j(t)
return u+t},
gcT:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.j(t)
return u+t},
i:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.R(b)
if(!!u.$ia5){t=q.a
if(t==u.gbf(b)){s=q.b
if(s==u.gbi(b)){r=q.c
if(typeof t!=="number")return t.v()
if(typeof r!=="number")return H.j(r)
if(t+r===u.gc6(b)){t=q.d
if(typeof s!=="number")return s.v()
if(typeof t!=="number")return H.j(t)
u=s+t===u.gcT(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gF:function(a){var u=this,t=u.a,s=J.cv(t),r=u.b,q=J.cv(r),p=u.c
if(typeof t!=="number")return t.v()
if(typeof p!=="number")return H.j(p)
p=C.c.gF(t+p)
t=u.d
if(typeof r!=="number")return r.v()
if(typeof t!=="number")return H.j(t)
t=C.c.gF(r+t)
return P.mA(P.iB(P.iB(P.iB(P.iB(0,s),q),p),t))}}
P.a5.prototype={
gbf:function(a){return this.a},
gbi:function(a){return this.b},
gay:function(a){return this.c},
gat:function(a){return this.d}}
P.aH.prototype={$iaH:1}
P.fm.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.K(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.aH]},
$av:function(){return[P.aH]},
$ih:1,
$ah:function(){return[P.aH]},
$ir:1,
$ar:function(){return[P.aH]}}
P.aK.prototype={$iaK:1}
P.h_.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.K(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.aK]},
$av:function(){return[P.aK]},
$ih:1,
$ah:function(){return[P.aK]},
$ir:1,
$ar:function(){return[P.aK]}}
P.h6.prototype={
gk:function(a){return a.length}}
P.hw.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.K(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.n]},
$av:function(){return[P.n]},
$ih:1,
$ah:function(){return[P.n]},
$ir:1,
$ar:function(){return[P.n]}}
P.k.prototype={
gbL:function(a){return new P.f7(a,new W.it(a))}}
P.aM.prototype={$iaM:1}
P.hL.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.K(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.aM]},
$av:function(){return[P.aM]},
$ih:1,
$ah:function(){return[P.aM]},
$ir:1,
$ar:function(){return[P.aM]}}
P.dH.prototype={}
P.dI.prototype={}
P.dS.prototype={}
P.dT.prototype={}
P.e2.prototype={}
P.e3.prototype={}
P.e9.prototype={}
P.ea.prototype={}
P.bt.prototype={$iq:1,
$aq:function(){return[P.t]},
$ih:1,
$ah:function(){return[P.t]},
$ir:1,
$ar:function(){return[P.t]}}
P.ev.prototype={
gk:function(a){return a.length}}
P.ew.prototype={
h:function(a,b){return P.aO(a.get(b))},
E:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aO(u.value[1]))}},
ga9:function(a){var u=H.c([],[P.n])
this.E(a,new P.ex(u))
return u},
gk:function(a){return a.size},
j:function(a,b,c){throw H.b(P.w("Not supported"))},
$aa3:function(){return[P.n,null]},
$iO:1,
$aO:function(){return[P.n,null]}}
P.ex.prototype={
$2:function(a,b){return this.a.push(a)}}
P.ey.prototype={
gk:function(a){return a.length}}
P.bf.prototype={}
P.h0.prototype={
gk:function(a){return a.length}}
P.dv.prototype={}
P.d5.prototype={
hE:function(a,b,c,d,e,f,g){var u,t=J.R(g)
if(!!t.$iaG)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.nu(g))
return}if(!!t.$ibP)t=!0
else t=!1
if(t){a.texImage2D(b,c,d,e,f,g)
return}throw H.b(P.cw("Incorrect number or type of arguments"))}}
P.hq.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.K(b,a,null,null,null))
return P.aO(a.item(b))},
j:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[[P.O,,,]]},
$av:function(){return[[P.O,,,]]},
$ih:1,
$ah:function(){return[[P.O,,,]]},
$ir:1,
$ar:function(){return[[P.O,,,]]}}
P.dZ.prototype={}
P.e_.prototype={}
K.er.prototype={
aM:function(a,b){return!0},
i:function(a){return"all"}}
K.cL.prototype={
aM:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)if(u[s].aM(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.p)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s}}
K.cT.prototype={}
K.aJ.prototype={
aM:function(a,b){return!this.dQ(0,b)},
i:function(a){return"!["+this.cb(0)+"]"}}
K.hf.prototype={
dW:function(a){var u,t,s,r
if(a.a.length<=0)throw H.b(P.u("May not create a Set with zero characters."))
u=P.t
t=new H.F([u,P.aD])
for(s=new H.bT(a,a.gk(a));s.u();)t.j(0,s.d,!0)
r=P.jH(t.ga9(t),!0,u)
C.b.dO(r)
this.a=r},
aM:function(a,b){return C.b.U(this.a,b)},
i:function(a){return P.c4(this.a,0,null)}}
L.db.prototype={
p:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new L.dk(this.a.N(0,b))
r.a=H.c([],[K.cT])
r.c=!1
this.c.push(r)
return r},
h1:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
if(r.aM(0,a))return r}return},
i:function(a){return this.b},
cI:function(){var u,t,s,r,q,p=this,o="("+p.b+")",n=p.d
if(n!=null){n=n.b
o+=" => ["+n+"]"
u=p.a
if(u.c.U(0,n))o+=" (consume)"
for(n=p.d.c,n=n.ga9(n),n=n.gP(n);n.u();){t=n.gD(n)
o+="\n"
s=p.d.c.h(0,t)
t=o+("  -- "+H.e(t)+" => ["+H.e(s)+"]")
o=u.c.U(0,s)?t+" (consume)":t}}for(n=p.c,u=n.length,r=0;r<n.length;n.length===u||(0,H.p)(n),++r){q=n[r]
o=o+"\n"+("  -- "+q.i(0))}return o.charCodeAt(0)==0?o:o}}
L.dh.prototype={
i:function(a){var u=H.l5(this.b,"\n","\\n"),t=H.l5(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
L.di.prototype={
i:function(a){return this.b}}
L.hH.prototype={
N:function(a,b){var u=this.a.h(0,b)
if(u==null){u=new L.db(this,b)
u.c=H.c([],[L.dk])
this.a.j(0,b,u)}return u},
b0:function(a){var u,t=this.b.h(0,a)
if(t==null){t=new L.di(a)
u=P.n
t.c=new H.F([u,u])
this.b.j(0,a,t)}return t},
dG:function(a){return this.hI(a)},
hI:function(a){var u=this
return P.mX(function(){var t=a
var s=0,r=1,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
return function $async$dG(b,a0){if(b===1){q=a0
s=r}while(true)switch(s){case 0:g=u.d
f=[P.t]
e=H.c([],f)
d=H.c([],f)
c=H.c([],f)
p=null,o=0,n=0,m=0
case 2:if(!!0){s=3
break}if(c.length!==0)l=C.b.hw(c,0)
else{if(!t.u()){s=3
break}l=t.d}d.push(l);++o
k=g.h1(l)
s=k==null?4:6
break
case 4:if(p==null){j=P.c4(d,0,null)
throw H.b(P.u("Untokenizable string [state: "+g.b+", index "+o+']: "'+j+'"'))}if(!!d.fixed$length)H.o(P.w("removeRange"))
P.aL(0,m,d.length)
d.splice(0,m-0)
C.b.b9(c,d)
d=H.c([],f)
e=H.c([],f)
g=u.d
s=!u.c.U(0,p.a)?7:8
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
if(g.d!=null){j=P.c4(e,0,null)
i=g.d
h=i.c.h(0,j)
p=new L.dh(h==null?i.b:h,j,o)
m=d.length
n=o}case 5:s=2
break
case 3:s=p!=null&&!u.c.U(0,p.a)?10:11
break
case 10:s=12
return p
case 12:case 11:return P.my()
case 1:return P.mz(q)}}},L.dh)},
i:function(a){var u,t=new P.P(""),s=this.d
if(s!=null)t.a=s.cI()+"\n"
for(s=this.a,s=s.ghK(s),s=s.gP(s);s.u();){u=s.gD(s)
if(u!=this.d)t.a+=u.cI()+"\n"}s=t.a
return s.charCodeAt(0)==0?s:s}}
L.dk.prototype={
i:function(a){return this.b.b+": "+this.cb(0)}}
O.aE.prototype={
b4:function(a){this.a=H.c([],[a])
this.c=this.b=null},
bl:function(a,b,c){this.b=b
this.c=a},
b3:function(a,b){return this.bl(a,null,b)},
bB:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
ce:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gP:function(a){var u=this.a
return new J.a1(u,u.length)},
H:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
l:function(a,b){var u,t,s=this,r=[H.kZ(s,"aE",0)]
if(s.bB(H.c([b],r))){u=s.a
t=u.length
u.push(b)
s.ce(t,H.c([b],r))}},
b9:function(a,b){var u,t
if(this.bB(b)){u=this.a
t=u.length
C.b.b9(u,b)
this.ce(t,b)}},
$ih:1}
O.bW.prototype={
gk:function(a){return this.a.length},
gt:function(){var u=this.b
return u==null?this.b=D.G():u},
az:function(){var u=this.b
if(u!=null)u.B(null)},
gV:function(a){var u=this.a
if(u.length>0)return C.b.gau(u)
else return V.cV()},
dw:function(a){var u=this.a
if(a==null)u.push(V.cV())
else u.push(a)
this.az()},
c4:function(){var u=this.a
if(u.length>0){u.pop()
this.az()}}}
E.eC.prototype={}
E.aF.prototype={
cm:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.a1(u,u.length);u.u();){t=u.d
if(t.f==null)t.cm()}},
sbm:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gt().T(0,s.gdn())
u=s.c
if(u!=null)u.gt().l(0,s.gdn())
t=new D.x("shape",r,s.c)
t.b=!0
s.af(t)}},
sc7:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gt().T(0,s.gdr())
u=s.f
s.f=a
if(a!=null)a.gt().l(0,s.gdr())
s.cm()
t=new D.x("technique",u,s.f)
t.b=!0
s.af(t)}},
saN:function(a){var u,t,s=this
if(!J.I(s.r,a)){u=s.r
if(u!=null)u.gt().T(0,s.gdl())
if(a!=null)a.gt().l(0,s.gdl())
s.r=a
t=new D.x("mover",u,a)
t.b=!0
s.af(t)}},
ac:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.ax(0,b,s):null
if(!J.I(q,s.x)){u=s.x
s.x=q
t=new D.x("matrix",u,q)
t.b=!0
s.af(t)}r=s.f
if(r!=null)r.ac(0,b)
for(r=s.y.a,r=new J.a1(r,r.length);r.u();)r.d.ac(0,b)},
aO:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)s.a.push(s.gV(s))
else s.a.push(r.m(0,s.gV(s)))
s.az()
a.dz(t.f)
s=a.dy
u=(s&&C.b).gau(s)
if(u!=null&&t.d!=null)u.hy(a,t)
for(s=t.y.a,s=new J.a1(s,s.length);s.u();)s.d.aO(a)
a.dv()
a.dx.c4()},
af:function(a){var u=this.z
if(u!=null)u.B(a)},
a1:function(){return this.af(null)},
dq:function(a){this.e=null
this.af(a)},
hk:function(){return this.dq(null)},
ds:function(a){this.af(a)},
hl:function(){return this.ds(null)},
dm:function(a){this.af(a)},
hj:function(){return this.dm(null)},
dk:function(a){this.af(a)},
hg:function(){return this.dk(null)},
hf:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gdj(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.p)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bl()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}this.a1()},
hi:function(a,b){var u,t
for(u=b.gP(b),t=this.gdj();u.u();)u.gD(u).gt().T(0,t)
this.a1()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.h7.prototype={
dV:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.a9(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.bW()
t=[V.aq]
u.a=H.c([],t)
u.gt().l(0,new E.h8(s))
s.cy=u
u=new O.bW()
u.a=H.c([],t)
u.gt().l(0,new E.h9(s))
s.db=u
u=new O.bW()
u.a=H.c([],t)
u.gt().l(0,new E.ha(s))
s.dx=u
u=H.c([],[O.dd])
s.dy=u
u.push(null)
s.fr=new H.F([P.n,A.d7])},
ghv:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gV(s)
u=t.db
u=t.z=s.m(0,u.gV(u))
s=u}return s},
dz:function(a){var u=this.dy
u.push(a==null?(u&&C.b).gau(u):a)},
dv:function(){var u=this.dy
if(u.length>1)u.pop()}}
E.h8.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.h9.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.ha.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.df.prototype={
ci:function(a){this.dB()},
cg:function(){return this.ci(null)},
gh5:function(){var u,t=this,s=Date.now(),r=C.c.a_(P.kd(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.a9(s,!1)
return u/r},
cD:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.m()
if(typeof r!=="number")return H.j(r)
u=C.d.bY(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.m()
t=C.d.bY(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.kA(C.m,s.ghA())}},
dB:function(){if(!this.cx){this.cx=!0
var u=window
C.x.em(u)
C.x.fn(u,W.kV(new E.hF(this),P.a7))}},
hx:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.cD()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.a9(r,!1)
s.y=P.kd(r-s.r.a).a*0.000001
r=s.cy
C.b.sk(r.a,0)
r.az()
r=s.db
C.b.sk(r.a,0)
r.az()
r=s.dx
C.b.sk(r.a,0)
r.az()
r=s.dy;(r&&C.b).sk(r,0)
s.dy.push(null)
o.aO(p.e)}}catch(q){u=H.bd(q)
t=H.k0(q)
P.k4("Error: "+H.e(u))
P.k4("Stack: "+H.e(t))
throw H.b(u)}}}
E.hF.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.hx()}}}
Z.dt.prototype={}
Z.cz.prototype={
bH:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.bd(s)
t=P.u('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.e(u))
throw H.b(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.il.prototype={}
Z.cA.prototype={
aK:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bH:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].bH(a)},
hJ:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aO:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.d(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.n],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)p.push(u[s].i(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a8(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.p(p,", ")+"\nAttrs:   "+C.b.p(r,", ")}}
Z.bn.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.c3(this.c))+"'")+"]"}}
Z.aN.prototype={
gca:function(a){var u=this.a,t=(u&$.aS().a)!==0?3:0
if((u&$.aR().a)!==0)t+=3
if((u&$.aQ().a)!==0)t+=3
if((u&$.aT().a)!==0)t+=2
if((u&$.be().a)!==0)t+=3
if((u&$.cs().a)!==0)t+=3
if((u&$.ct().a)!==0)t+=4
if((u&$.bF().a)!==0)++t
return(u&$.aP().a)!==0?t+4:t},
fJ:function(a){var u,t=$.aS(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aR()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aQ()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aT()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.be()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cs()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ct()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bF()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aP()
if((s&t.a)!==0)if(u===a)return t
return $.ln()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aN))return!1
return this.a===b.a},
i:function(a){var u=H.c([],[P.n]),t=this.a
if((t&$.aS().a)!==0)u.push("Pos")
if((t&$.aR().a)!==0)u.push("Norm")
if((t&$.aQ().a)!==0)u.push("Binm")
if((t&$.aT().a)!==0)u.push("Txt2D")
if((t&$.be().a)!==0)u.push("TxtCube")
if((t&$.cs().a)!==0)u.push("Clr3")
if((t&$.ct().a)!==0)u.push("Clr4")
if((t&$.bF().a)!==0)u.push("Weight")
if((t&$.aP().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.b.p(u,"|")}}
D.eF.prototype={}
D.bl.prototype={
l:function(a,b){var u=this.a;(u==null?this.a=H.c([],[{func:1,ret:-1,args:[D.X]}]):u).push(b)},
T:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.b.U(s,b)
if(s===!0){s=t.a
u=(s&&C.b).T(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.b.U(s,b)
if(s===!0){s=t.b
u=(s&&C.b).T(s,b)||u}return u},
B:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.b.E(P.jH(u,!0,{func:1,ret:-1,args:[D.X]}),new D.f4(q))
u=r.b
if(u!=null){r.b=H.c([],[{func:1,ret:-1,args:[D.X]}])
C.b.E(u,new D.f5(q))}return!0},
fY:function(){return this.B(null)},
an:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.B(u)}}}}
D.f4.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.f5.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.X.prototype={}
D.aY.prototype={}
D.aZ.prototype={}
D.x.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cB.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cB))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.aa.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aa))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.bo.prototype={}
X.cQ.prototype={
gaL:function(){var u=this.y
return u==null?this.y=D.G():u},
a8:function(a){this.l(0,new X.aa(a,new X.b2(!1,!1,!1)))},
cj:function(a){},
e1:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.p)(a),++t){s=a[t]
if(C.b.U(this.a,s))return!1}return!0},
e_:function(a,b){var u=new D.aY()
u.b=!0
this.cj(u)},
e3:function(a,b){var u=new D.aZ()
u.b=!0
this.cj(u)},
bo:function(a){var u,t=this
if(!t.r&&a instanceof X.bo){u=a.c
if(C.b.U(t.a,u)){t.r=!0
u=t.y
if(u!=null)u.B(a)}}},
bA:function(a){var u
if(this.r&&a instanceof X.bo){u=a.c
if(C.b.U(this.a,u))this.r=!1}},
aj:function(a){var u,t,s=this
if(s.f!=null)return!1
s.f=a
u=a.b
t=u.b
if(t==null)t=u.b=D.G()
t.l(0,s.gbn())
t=u.a
u=t==null?u.a=D.G():t
u.l(0,s.gbz())
return!0},
$ah:function(){return[X.aa]},
$aaE:function(){return[X.aa]}}
X.fl.prototype={
hr:function(a){var u,t
this.d.l(0,a.a)
u=this.a
if(u==null)return!1
t=new X.bo(a)
t.b=!0
return u.B(t)},
hn:function(a){var u,t
this.d.T(0,a.a)
u=this.b
if(u==null)return!1
t=new X.bo(a)
t.b=!0
return u.B(t)}}
X.cS.prototype={}
X.ft.prototype={
aS:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.m()
u=b.b
t=q.ch
if(typeof u!=="number")return u.m()
s=new V.ae(o.a+n*m,o.b+u*t)
t=q.a.gba()
r=new X.b3(a,V.b6(),q.x,t,s)
r.b=!0
q.z=new P.a9(p,!1)
q.x=s
return r},
c3:function(a,b){this.r=a.a
return!1},
aZ:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.dL()
if(typeof u!=="number")return u.a2()
this.r=(u&~t)>>>0
return!1},
aY:function(a,b){var u=this.d
if(u==null)return!1
u.B(this.aS(a,b))
return!0},
hs:function(a){return!1},
eY:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.cS(c,r.a.gba(),b)
s.b=!0
t.B(s)
r.y=new P.a9(u,!1)
r.x=V.b6()}}
X.b2.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.b2))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.b3.prototype={}
X.fT.prototype={
bu:function(a,b,c){var u=this,t=new P.a9(Date.now(),!1),s=u.a.gba(),r=new X.b3(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
c3:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.B(this.bu(a,b,!0))
return!0},
aZ:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.dL()
if(typeof t!=="number")return t.a2()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.B(u.bu(a,b,!0))
return!0},
aY:function(a,b){var u=this.d
if(u==null)return!1
u.B(this.bu(a,b,!1))
return!0},
ht:function(a,b){return!1}}
X.h5.prototype={}
X.dj.prototype={}
X.hI.prototype={
aS:function(a,b){var u=this,t=new P.a9(Date.now(),!1),s=a.length>0?a[0]:V.b6(),r=u.a.gba(),q=new X.dj(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
hq:function(a){var u=this.b
if(u==null)return!1
u.B(this.aS(a,!0))
return!0},
ho:function(a){var u=this.c
if(u==null)return!1
u.B(this.aS(a,!0))
return!0},
hp:function(a){var u=this.d
if(u==null)return!1
u.B(this.aS(a,!1))
return!0}}
X.dp.prototype={
gba:function(){var u=this.a,t=C.i.gcU(u).c
t.toString
u=C.i.gcU(u).d
u.toString
return V.kv(0,0,t,u)},
cq:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.aa(u,new X.b2(t,a.altKey,a.shiftKey))},
aF:function(a){a.shiftKey},
bF:function(a){a.shiftKey},
ar:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.w()
u=t.top
if(typeof r!=="number")return r.w()
return new V.ae(s-q,r-u)},
aT:function(a){return new V.Q(a.movementX,a.movementY)},
bC:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.ae])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
q=C.d.ag(r.pageX)
C.d.ag(r.pageY)
p=o.left
C.d.ag(r.pageX)
n.push(new V.ae(q-p,C.d.ag(r.pageY)-o.top))}return n},
ap:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cB(u,new X.b2(t,a.altKey,a.shiftKey))},
bv:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.w()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.w()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
eU:function(a){this.f=!0},
eI:function(a){this.f=!1},
eO:function(a){if(this.f&&this.bv(a))a.preventDefault()},
bA:function(a){var u
if(!this.f)return
u=this.cq(a)
if(this.b.hr(u))a.preventDefault()},
bo:function(a){var u
if(!this.f)return
u=this.cq(a)
if(this.b.hn(u))a.preventDefault()},
f_:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aF(a)
if(r.x){u=r.ap(a)
t=r.aT(a)
if(r.d.c3(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.ap(a)
s=r.ar(a)
if(r.c.c3(u,s))a.preventDefault()},
f3:function(a){var u,t,s,r=this
r.aF(a)
u=r.ap(a)
if(r.x){t=r.aT(a)
if(r.d.aZ(u,t))a.preventDefault()
return}if(r.r)return
s=r.ar(a)
if(r.c.aZ(u,s))a.preventDefault()},
eS:function(a){var u,t,s,r=this
if(!r.bv(a)){r.aF(a)
u=r.ap(a)
if(r.x){t=r.aT(a)
if(r.d.aZ(u,t))a.preventDefault()
return}if(r.r)return
s=r.ar(a)
if(r.c.aZ(u,s))a.preventDefault()}},
f1:function(a){var u,t,s,r=this
r.aF(a)
u=r.ap(a)
if(r.x){t=r.aT(a)
if(r.d.aY(u,t))a.preventDefault()
return}if(r.r)return
s=r.ar(a)
if(r.c.aY(u,s))a.preventDefault()},
eQ:function(a){var u,t,s,r=this
if(!r.bv(a)){r.aF(a)
u=r.ap(a)
if(r.x){t=r.aT(a)
if(r.d.aY(u,t))a.preventDefault()
return}if(r.r)return
s=r.ar(a)
if(r.c.aY(u,s))a.preventDefault()}},
f5:function(a){var u,t,s=this
s.aF(a)
u=new V.Q((a&&C.w).gfR(a),C.w.gfS(a)).A(0,180)
if(s.x){if(s.d.hs(u))a.preventDefault()
return}if(s.r)return
t=s.ar(a)
if(s.c.ht(u,t))a.preventDefault()},
f7:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ap(s.y)
t=s.ar(s.y)
s.d.eY(u,t,r)}},
fj:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bF(a)
u=t.bC(a)
if(t.e.hq(u))a.preventDefault()},
ff:function(a){var u
this.bF(a)
u=this.bC(a)
if(this.e.ho(u))a.preventDefault()},
fh:function(a){var u
this.bF(a)
u=this.bC(a)
if(this.e.hp(u))a.preventDefault()}}
D.ez.prototype={$ia2:1}
D.bj.prototype={
ao:function(a){var u=this.r
if(u!=null)u.B(a)},
e5:function(){return this.ao(null)},
$ia2:1}
D.a2.prototype={}
D.cR.prototype={
ao:function(a){var u=this.y
if(u!=null)u.B(a)},
cB:function(a){var u=this.z
if(u!=null)u.B(a)},
eX:function(){return this.cB(null)},
f9:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.p)(a),++t){s=a[t]
if(s==null||this.eh(s))return!1}return!0},
eC:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcA(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.p)(b),++r){q=b[r]
if(q instanceof D.bj)this.f.push(q)
p=q.r
if(p==null){p=new D.bl()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}u=new D.aY()
u.b=!0
this.ao(u)},
fd:function(a,b){var u,t,s
for(u=b.gP(b),t=this.gcA();u.u();){s=u.gD(u)
C.b.T(this.e,s)
s.gt().T(0,t)}u=new D.aZ()
u.b=!0
this.ao(u)},
eh:function(a){var u=C.b.U(this.f,a)
return u},
$ah:function(){return[D.a2]},
$aaE:function(){return[D.a2]}}
D.h4.prototype={$ia2:1}
D.hp.prototype={$ia2:1}
V.M.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.M))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+"]"}}
V.aW.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aW))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.C(u.a,3,0)+", "+V.C(u.b,3,0)+", "+V.C(u.c,3,0)+", "+V.C(u.d,3,0)+"]"}}
V.f3.prototype={}
V.aI.prototype={
a4:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.H])
return t},
bd:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.a,g=i.e,f=i.y
if(typeof f!=="number")return H.j(f)
u=g*f
t=i.f
s=i.x
if(typeof s!=="number")return H.j(s)
r=i.d
q=i.b
p=q*f
o=i.c
n=s*o
m=i.r
l=q*t-g*o
if(typeof m!=="number")return m.m()
k=h*(u-t*s)-r*(p-n)+m*l
if(Math.abs(k-0)<$.y().a)return V.lX()
j=1/k
return new V.aI((u-s*t)*j,(n-p)*j,l*j,(m*t-r*f)*j,(h*f-m*o)*j,(r*o-h*t)*j,(r*s-m*g)*j,(m*q-h*s)*j,(h*g-r*q)*j)},
aw:function(a){var u,t,s,r=this,q=a.a,p=a.b,o=a.c
if(typeof o!=="number")return H.j(o)
u=r.r
if(typeof u!=="number")return u.m()
t=r.x
if(typeof t!=="number")return t.m()
s=r.y
if(typeof s!=="number")return s.m()
return new V.B(r.a*q+r.b*p+r.c*o,r.d*q+r.e*p+r.f*o,u*q+t*p+s*o)},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.aI))return!1
u=b.a
t=$.y()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
if(!(Math.abs(b.c-q.c)<s))return!1
if(!(Math.abs(b.d-q.d)<s))return!1
if(!(Math.abs(b.e-q.e)<s))return!1
if(!(Math.abs(b.f-q.f)<s))return!1
u=b.r
r=q.r
t.toString
if(typeof u!=="number")return u.w()
if(typeof r!=="number")return H.j(r)
if(!(Math.abs(u-r)<s))return!1
u=b.x
t=q.x
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.j(t)
if(!(Math.abs(u-t)<s))return!1
u=b.y
t=q.y
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.j(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){var u,t,s,r,q=this,p=[P.H],o=V.bE(H.c([q.a,q.d,q.r],p),3,0),n=V.bE(H.c([q.b,q.e,q.x],p),3,0),m=V.bE(H.c([q.c,q.f,q.y],p),3,0)
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
V.aq.prototype={
a4:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.H])
return t},
bd:function(b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.a,c=e.f,b=e.b,a=e.e,a0=d*c-b*a,a1=e.r,a2=e.c,a3=d*a1-a2*a,a4=e.x,a5=e.d,a6=d*a4-a5*a,a7=b*a1-a2*c,a8=b*a4-a5*c,a9=a2*a4-a5*a1,b0=e.y,b1=e.cy
if(typeof b0!=="number")return b0.m()
u=e.z
t=e.cx
if(typeof u!=="number")return u.m()
s=b0*b1-u*t
r=e.db
q=e.Q
if(typeof q!=="number")return q.m()
p=b0*r-q*t
o=e.dx
n=e.ch
m=b0*o-n*t
l=u*r-q*b1
k=u*o-n*b1
j=q*o-n*r
i=a0*j-a3*k+a6*l+a7*m-a8*p+a9*s
if(Math.abs(i-0)<$.y().a)return V.cV()
h=1/i
g=-a
f=-t
return V.ar((c*j-a1*k+a4*l)*h,(-b*j+a2*k-a5*l)*h,(b1*a9-r*a8+o*a7)*h,(-u*a9+q*a8-n*a7)*h,(g*j+a1*m-a4*p)*h,(d*j-a2*m+a5*p)*h,(f*a9+r*a6-o*a3)*h,(b0*a9-q*a6+n*a3)*h,(a*k-c*m+a4*s)*h,(-d*k+b*m-a5*s)*h,(t*a8-b1*a6+o*a0)*h,(-b0*a8+u*a6-n*a0)*h,(g*l+c*p-a1*s)*h,(d*l-b*p+a2*s)*h,(f*a7+b1*a3-r*a0)*h,(b0*a7-u*a3+q*a0)*h)},
m:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=a5.a,a7=b3.a,a8=a5.b,a9=b3.e,b0=a5.c,b1=b3.y
if(typeof b1!=="number")return H.j(b1)
u=a5.d
t=b3.cx
s=b3.b
r=b3.f
q=b3.z
if(typeof q!=="number")return H.j(q)
p=b3.cy
o=b3.c
n=b3.r
m=b3.Q
if(typeof m!=="number")return H.j(m)
l=b3.db
k=b3.d
j=b3.x
i=b3.ch
h=b3.dx
g=a5.e
f=a5.f
e=a5.r
d=a5.x
c=a5.y
if(typeof c!=="number")return c.m()
b=a5.z
if(typeof b!=="number")return b.m()
a=a5.Q
if(typeof a!=="number")return a.m()
a0=a5.ch
a1=a5.cx
a2=a5.cy
a3=a5.db
a4=a5.dx
return V.ar(a6*a7+a8*a9+b0*b1+u*t,a6*s+a8*r+b0*q+u*p,a6*o+a8*n+b0*m+u*l,a6*k+a8*j+b0*i+u*h,g*a7+f*a9+e*b1+d*t,g*s+f*r+e*q+d*p,g*o+f*n+e*m+d*l,g*k+f*j+e*i+d*h,c*a7+b*a9+a*b1+a0*t,c*s+b*r+a*q+a0*p,c*o+b*n+a*m+a0*l,c*k+b*j+a*i+a0*h,a1*a7+a2*a9+a3*b1+a4*t,a1*s+a2*r+a3*q+a4*p,a1*o+a2*n+a3*m+a4*l,a1*k+a2*j+a3*i+a4*h)},
aw:function(a){var u,t,s,r=this,q=a.a,p=a.b,o=a.c
if(typeof o!=="number")return H.j(o)
u=r.y
if(typeof u!=="number")return u.m()
t=r.z
if(typeof t!=="number")return t.m()
s=r.Q
if(typeof s!=="number")return s.m()
return new V.B(r.a*q+r.b*p+r.c*o,r.e*q+r.f*p+r.r*o,u*q+t*p+s*o)},
b1:function(a){var u,t,s,r=this,q=a.a,p=a.b,o=a.c
if(typeof o!=="number")return H.j(o)
u=r.y
if(typeof u!=="number")return u.m()
t=r.z
if(typeof t!=="number")return t.m()
s=r.Q
if(typeof s!=="number")return s.m()
return new V.a0(r.a*q+r.b*p+r.c*o+r.d,r.e*q+r.f*p+r.r*o+r.x,u*q+t*p+s*o+r.ch)},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.aq))return!1
u=b.a
t=$.y()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
if(!(Math.abs(b.c-q.c)<s))return!1
if(!(Math.abs(b.d-q.d)<s))return!1
if(!(Math.abs(b.e-q.e)<s))return!1
if(!(Math.abs(b.f-q.f)<s))return!1
if(!(Math.abs(b.r-q.r)<s))return!1
if(!(Math.abs(b.x-q.x)<s))return!1
u=b.y
r=q.y
t.toString
if(typeof u!=="number")return u.w()
if(typeof r!=="number")return H.j(r)
if(!(Math.abs(u-r)<s))return!1
u=b.z
t=q.z
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.j(t)
if(!(Math.abs(u-t)<s))return!1
u=b.Q
t=q.Q
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.j(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.ch-q.ch)<s))return!1
if(!(Math.abs(b.cx-q.cx)<s))return!1
if(!(Math.abs(b.cy-q.cy)<s))return!1
if(!(Math.abs(b.db-q.db)<s))return!1
if(!(Math.abs(b.dx-q.dx)<s))return!1
return!0},
i:function(a){return this.M()},
C:function(a){var u,t,s,r,q,p=this,o=[P.H],n=V.bE(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.bE(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.bE(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.bE(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
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
M:function(){return this.C("")}}
V.ae.prototype={
w:function(a,b){return new V.ae(this.a-b.a,this.b-b.b)},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ae))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+"]"}}
V.a0.prototype={
w:function(a,b){var u=this.c,t=b.c
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.j(t)
return new V.a0(this.a-b.a,this.b-b.b,u-t)},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.a0))return!1
u=b.a
t=$.y()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
u=b.c
r=q.c
t.toString
if(typeof u!=="number")return u.w()
if(typeof r!=="number")return H.j(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+"]"}}
V.c1.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.c1))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.C(u.a,3,0)+", "+V.C(u.b,3,0)+", "+V.C(u.c,3,0)+", "+V.C(u.d,3,0)+"]"}}
V.d4.prototype={
gam:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.d4))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.C(u.a,3,0)+", "+V.C(u.b,3,0)+", "+V.C(u.c,3,0)+", "+V.C(u.d,3,0)+"]"}}
V.Q.prototype={
c_:function(a){return Math.sqrt(this.K(this))},
K:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.j(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.j(t)
return s*r+u*t},
m:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.m()
u=this.b
if(typeof u!=="number")return u.m()
return new V.Q(t*b,u*b)},
A:function(a,b){var u,t
if(Math.abs(b-0)<$.y().a){u=$.kG
return u==null?$.kG=new V.Q(0,0):u}u=this.a
if(typeof u!=="number")return u.A()
t=this.b
if(typeof t!=="number")return t.A()
return new V.Q(u/b,t/b)},
n:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Q))return!1
u=b.a
t=this.a
s=$.y()
s.toString
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.j(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.j(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+"]"}}
V.B.prototype={
c_:function(a){return Math.sqrt(this.K(this))},
K:function(a){var u=this.c,t=a.c
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.j(t)
return this.a*a.a+this.b*a.b+u*t},
c0:function(a,b){var u=this.a,t=this.b,s=this.c,r=a.c
if(typeof r!=="number")return r.w()
if(typeof s!=="number")return H.j(s)
return new V.B(u+b*(a.a-u),t+b*(a.b-t),s+b*(r-s))},
aU:function(a){var u,t,s,r,q=this.b,p=a.c
if(typeof p!=="number")return H.j(p)
u=this.c
t=a.b
if(typeof u!=="number")return u.m()
s=a.a
r=this.a
return new V.B(q*p-u*t,u*s-r*p,r*t-q*s)},
v:function(a,b){var u=this.c,t=b.c
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.j(t)
return new V.B(this.a+b.a,this.b+b.b,u+t)},
O:function(a){var u=this.c
if(typeof u!=="number")return u.O()
return new V.B(-this.a,-this.b,-u)},
A:function(a,b){var u
if(Math.abs(b-0)<$.y().a)return V.ds()
u=this.c
if(typeof u!=="number")return u.A()
return new V.B(this.a/b,this.b/b,u/b)},
di:function(){var u,t=$.y(),s=t.a
if(!(Math.abs(0-this.a)<s))return!1
if(!(Math.abs(0-this.b)<s))return!1
u=this.c
t.toString
if(typeof u!=="number")return H.j(u)
if(!(Math.abs(0-u)<s))return!1
return!0},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.B))return!1
u=b.a
t=$.y()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
u=b.c
r=q.c
t.toString
if(typeof u!=="number")return u.w()
if(typeof r!=="number")return H.j(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+"]"}}
U.eK.prototype={
bp:function(a){var u=this.a,t=this.c,s=this.b
if(u)return V.jr(a,t,s)
else{if(a<t)u=t
else u=a>s?s:a
return u}},
gt:function(){var u=this.y
return u==null?this.y=D.G():u},
J:function(a){var u=this.y
if(u!=null)u.B(a)},
sc8:function(a,b){var u=this.a
if(u!==b){this.a=b
u=new D.x("wrap",u,b)
u.b=!0
this.J(u)}},
sc1:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.y().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bp(u)}s=new D.x("maximumLocation",s,t.b)
s.b=!0
t.J(s)}},
sc2:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.y().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bp(u)}s=new D.x("minimumLocation",s,t.c)
s.b=!0
t.J(s)}},
sZ:function(a,b){var u,t=this
b=t.bp(b==null?0:b)
u=t.d
if(!(Math.abs(u-b)<$.y().a)){t.d=b
u=new D.x("location",u,b)
u.b=!0
t.J(u)}},
saX:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.y().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.x("maximumVelocity",r,a)
r.b=!0
s.J(r)}},
sS:function(a){var u=this,t=a==null?0:a,s=u.e
a=-s
if(!(t<a))a=t>s?s:t
t=u.f
if(!(Math.abs(t-a)<$.y().a)){u.f=a
t=new D.x("velocity",t,a)
t.b=!0
u.J(t)}},
sas:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.y().a)){this.x=a
u=new D.x("dampening",u,a)
u.b=!0
this.J(u)}},
ac:function(a,b){var u,t,s,r=this,q=r.f,p=$.y().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sZ(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.y().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sS(u)}}}
U.bK.prototype={
gt:function(){var u=this.b
return u==null?this.b=D.G():u},
sV:function(a,b){var u,t,s,r=this
if(!J.I(r.a,b)){u=r.a
r.a=b
t=new D.x("matrix",u,b)
t.b=!0
s=r.b
if(s!=null)s.B(t)}},
ax:function(a,b,c){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bK))return!1
return J.I(this.a,b.a)},
i:function(a){return"Constant: "+this.a.C("          ")}}
U.bN.prototype={
gt:function(){var u=this.e
return u==null?this.e=D.G():u},
J:function(a){var u=this.e
if(u!=null)u.B(a)},
a6:function(){return this.J(null)},
eA:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaA(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.p)(b),++r){q=b[r]
if(q!=null){p=q.gt()
o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.aY()
u.b=!0
this.J(u)},
fb:function(a,b){var u,t
for(u=b.gP(b),t=this.gaA();u.u();)u.gD(u).gt().T(0,t)
u=new D.aZ()
u.b=!0
this.J(u)},
ax:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.L()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.a1(r,r.length),u=null;r.u();){q=r.d
if(q!=null){t=q.ax(0,b,c)
if(t!=null)u=u==null?t:t.m(0,u)}}s.f=u==null?V.cV():u
r=s.e
if(r!=null)r.an(0)}return s.f},
n:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bN))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.d(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.d(r,t)
if(!J.I(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ah:function(){return[U.a4]},
$aaE:function(){return[U.a4]},
$ia4:1}
U.a4.prototype={}
U.d6.prototype={
gt:function(){var u=this.y
return u==null?this.y=D.G():u},
J:function(a){var u=this.y
if(u!=null)u.B(a)},
sdJ:function(a){var u
a=V.jr(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.y().a)){this.a=a
u=new D.x("yaw",u,a)
u.b=!0
this.J(u)}},
sdu:function(a,b){var u
b=V.jr(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.y().a)){this.b=b
u=new D.x("pitch",u,b)
u.b=!0
this.J(u)}},
sdC:function(a){var u
a=V.jr(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.y().a)){this.c=a
u=new D.x("roll",u,a)
u.b=!0
this.J(u)}},
ax:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(r<q){s.r=q
r=s.y
if(r!=null)++r.d
s.sdJ(s.a+s.d*b.y)
s.sdu(0,s.b+s.e*b.y)
s.sdC(s.c+s.f*b.y)
r=s.c
u=Math.cos(r)
t=Math.sin(r)
s.x=V.ar(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1).m(0,V.kl(s.b)).m(0,V.jJ(s.a))
r=s.y
if(r!=null)r.an(0)}return s.x},
n:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.d6))return!1
u=r.a
t=b.a
s=$.y().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
i:function(a){var u=this
return"Rotator: ["+V.C(u.a,3,0)+", "+V.C(u.b,3,0)+", "+V.C(u.c,3,0)+"], ["+V.C(u.d,3,0)+", "+V.C(u.e,3,0)+", "+V.C(u.f,3,0)+"]"}}
U.dq.prototype={
gt:function(){var u=this.fx
return u==null?this.fx=D.G():u},
J:function(a){var u=this.fx
if(u!=null)u.B(a)},
a6:function(){return this.J(null)},
aj:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
u=a.c
t=u.b
u=t==null?u.b=D.G():t
u.l(0,s.ges())
u=s.a.c
t=u.d
u=t==null?u.d=D.G():t
u.l(0,s.gev())
u=s.a.c
t=u.c
u=t==null?u.c=D.G():t
u.l(0,s.gex())
u=s.a.d
t=u.f
u=t==null?u.f=D.G():t
u.l(0,s.geo())
u=s.a.d
t=u.d
u=t==null?u.d=D.G():t
u.l(0,s.geq())
u=s.a.e
t=u.b
u=t==null?u.b=D.G():t
u.l(0,s.gfD())
u=s.a.e
t=u.d
u=t==null?u.d=D.G():t
u.l(0,s.gfB())
u=s.a.e
t=u.c
u=t==null?u.c=D.G():t
u.l(0,s.gfz())
return!0},
ai:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.O()
u=-u}if(this.r){if(typeof t!=="number")return t.O()
t=-t}return new V.Q(u,t)},
eu:function(a){var u=this
H.m(a,"$ib3")
if(!J.I(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
ew:function(a){var u,t,s,r,q,p,o,n=this
H.m(a,"$ib3")
if(!n.cx)return
if(n.ch){u=a.d.w(0,a.y)
u=new V.Q(u.a,u.b)
u=u.K(u)
t=n.Q
if(typeof t!=="number")return H.j(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.w(0,a.y)
u=n.ai(new V.Q(t.a,t.b).m(0,2).A(0,u.gam()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.j(s)
t.sS(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.j(t)
s.sS(-u*10*t)}else{u=a.c
t=a.d
s=t.w(0,a.y)
r=n.ai(new V.Q(s.a,s.b).m(0,2).A(0,u.gam()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.j(p)
o=n.cy
if(typeof o!=="number")return H.j(o)
s.sZ(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.j(q)
s=n.db
if(typeof s!=="number")return H.j(s)
o.sZ(0,-p*q+s)
n.b.sS(0)
n.c.sS(0)
t=t.w(0,a.z)
n.dx=n.ai(new V.Q(t.a,t.b).m(0,2).A(0,u.gam()))}n.a6()},
ey:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.K(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.j(s)
u.sS(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.j(u)
s.sS(-t*10*u)
r.a6()}},
ep:function(a){var u=this
if(H.m(a,"$icS").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
er:function(a){var u,t,s,r,q,p,o,n=this
H.m(a,"$ib3")
if(!J.I(n.d,a.x.b))return
u=a.c
t=a.d
s=t.w(0,a.y)
r=n.ai(new V.Q(s.a,s.b).m(0,2).A(0,u.gam()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.j(p)
o=n.cy
if(typeof o!=="number")return H.j(o)
s.sZ(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.j(q)
s=n.db
if(typeof s!=="number")return H.j(s)
o.sZ(0,-p*q+s)
n.b.sS(0)
n.c.sS(0)
t=t.w(0,a.z)
n.dx=n.ai(new V.Q(t.a,t.b).m(0,2).A(0,u.gam()))
n.a6()},
fE:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fC:function(a){var u,t,s,r,q,p,o,n=this
H.m(a,"$idj")
if(!n.cx)return
if(n.ch){u=a.d.w(0,a.y)
u=new V.Q(u.a,u.b)
u=u.K(u)
t=n.Q
if(typeof t!=="number")return H.j(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.w(0,a.y)
u=n.ai(new V.Q(t.a,t.b).m(0,2).A(0,u.gam()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.j(s)
t.sS(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.j(t)
s.sS(-u*10*t)}else{u=a.c
t=a.d
s=t.w(0,a.y)
r=n.ai(new V.Q(s.a,s.b).m(0,2).A(0,u.gam()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.j(p)
o=n.cy
if(typeof o!=="number")return H.j(o)
s.sZ(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.j(q)
s=n.db
if(typeof s!=="number")return H.j(s)
o.sZ(0,-p*q+s)
n.b.sS(0)
n.c.sS(0)
t=t.w(0,a.z)
n.dx=n.ai(new V.Q(t.a,t.b).m(0,2).A(0,u.gam()))}n.a6()},
fA:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.K(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.j(s)
u.sS(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.j(u)
s.sS(-t*10*u)
r.a6()}},
ax:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.L()
if(s<r){t.dy=r
u=b.y
t.c.ac(0,u)
t.b.ac(0,u)
t.fr=V.jJ(t.b.d).m(0,V.kl(t.c.d))}return t.fr},
$ia4:1}
U.dr.prototype={
gt:function(){var u=this.dx
return u==null?this.dx=D.G():u},
J:function(a){var u=this.dx
if(u!=null)u.B(a)},
a6:function(){return this.J(null)},
gZ:function(a){return new V.a0(this.r.d,this.x.d,this.y.d)},
eW:function(a){this.J(a)},
bG:function(a,b,c,d,e){if(a.r){if(typeof e!=="number")return e.v()
e+=d}else if(b.r){if(typeof e!=="number")return e.w()
e-=d}else{if(typeof e!=="number")return e.W()
e=e>0?e-Math.min(e,c):e+Math.min(-e,c)}return e},
ax:function(a,b,c){var u,t,s,r,q=this,p=q.cy,o=b.e
if(typeof p!=="number")return p.L()
if(p<o){q.cy=o
q.gZ(q)
u=b.y
if(u>0.1)u=0.1
p=q.ch
if(typeof p!=="number")return p.m()
t=p*u
p=q.cx
if(typeof p!=="number")return p.m()
s=p*u
r=new V.B(q.r.f,q.x.f,q.y.f)
p=q.Q
if(p!=null)r=p.aw(r)
r=new V.B(q.bG(q.a,q.b,t,s,r.a),q.bG(q.c,q.d,t,s,r.b),q.bG(q.e,q.f,t,s,r.c))
p=q.z
if(p!=null)r=p.aw(r)
q.r.sS(r.a)
q.x.sS(r.b)
q.y.sS(r.c)
q.r.ac(0,u)
q.x.ac(0,u)
q.y.ac(0,u)
q.db=V.km(q.r.d,-q.x.d,q.y.d)}return q.db},
$ia4:1}
M.cH.prototype={
aC:function(a){var u=this.y
if(u!=null)u.B(a)},
e6:function(){return this.aC(null)},
eK:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaB(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.p)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bl()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.aY()
u.b=!0
this.aC(u)},
eM:function(a,b){var u,t
for(u=b.gP(b),t=this.gaB();u.u();)u.gD(u).gt().T(0,t)
u=new D.aZ()
u.b=!0
this.aC(u)},
gt:function(){var u=this.y
return u==null?this.y=D.G():u},
aO:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
a.dz(f.d)
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
if(typeof s!=="number")return H.j(s)
o=C.d.ag(p*s)
p=q.b
if(typeof r!=="number")return H.j(r)
n=C.d.ag(p*r)
p=C.d.ag(q.c*s)
a.c=p
q=C.d.ag(q.d*r)
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
i=V.ar(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.dw(i)
t=$.kp
if(t==null){t=V.kr()
q=V.jQ()
p=$.kH
t=V.kk(t,q,p==null?$.kH=new V.B(0,0,-1):p)
$.kp=t
h=t}else h=t
t=u.b
if(t!=null){g=t.ax(0,a,u)
if(g!=null)h=g.m(0,h)}a.db.dw(h)
for(u=f.e.a,u=new J.a1(u,u.length);u.u();)u.d.ac(0,a)
for(u=f.e.a,u=new J.a1(u,u.length);u.u();)u.d.aO(a)
f.b.toString
a.cy.c4()
a.db.c4()
f.c.toString
a.dv()}}
A.cx.prototype={}
A.eu.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
fZ:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
fT:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.W.prototype={
gah:function(a){var u=this.a?1:0,t=this.b?2:0
return u|t|0},
i:function(a){var u=this.a?1:0,t=this.b?2:0
return""+(u|t|0)},
n:function(a,b){if(b==null)return!1
if(!(b instanceof A.W))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.fy.prototype={
dU:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
b8.z=c3
u=new P.P("")
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
A.nb(c3,u)
A.nd(c3,u)
A.nc(c3,u)
A.nf(c3,u)
A.ng(c3,u)
A.ne(c3,u)
A.nh(c3,u)
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
m=A.na(b8.z)
b8.c=n
b8.d=m
b8.e=b8.cr(n,35633)
b8.f=b8.cr(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!s.getProgramParameter(b8.r,35714)){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.o(P.u("Failed to link shader: "+H.e(l)))}b8.ft()
b8.fv()
b8.Q=b8.x.h(0,"posAttr")
b8.cx=b8.x.h(0,"normAttr")
b8.ch=b8.x.h(0,"binmAttr")
b8.cy=b8.x.h(0,"txt2DAttr")
b8.db=b8.x.h(0,"txtCubeAttr")
b8.dx=b8.x.h(0,"bendAttr")
if(c3.dy)b8.id=H.m(b8.y.I(0,"invViewMat"),"$iab")
if(t)b8.dy=H.m(b8.y.I(0,"objMat"),"$iab")
if(r)b8.fr=H.m(b8.y.I(0,"viewObjMat"),"$iab")
b8.fy=H.m(b8.y.I(0,"projViewObjMat"),"$iab")
if(c3.go)b8.fx=H.m(b8.y.I(0,"viewMat"),"$iab")
if(c3.x1)b8.k1=H.m(b8.y.I(0,"txt2DMat"),"$ic8")
if(c3.x2)b8.k2=H.m(b8.y.I(0,"txtCubeMat"),"$iab")
if(c3.y1)b8.k3=H.m(b8.y.I(0,"colorMat"),"$iab")
b8.r1=H.c([],[A.ab])
t=c3.aJ
if(t>0){b8.k4=b8.y.I(0,"bendMatCount")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.h(0,q)
if(j==null)H.o(P.u(c0+q+c1))
s.push(H.m(j,"$iab"))}}t=c3.a
if(t.a)b8.r2=H.m(b8.y.I(0,"emissionClr"),"$iD")
if(t.b)b8.rx=H.m(b8.y.I(0,"emissionTxt"),"$iZ")
t=c3.b
if(t.a)b8.x1=H.m(b8.y.I(0,"ambientClr"),"$iD")
if(t.b)b8.x2=H.m(b8.y.I(0,"ambientTxt"),"$iZ")
t=c3.c
if(t.a)b8.y2=H.m(b8.y.I(0,"diffuseClr"),"$iD")
if(t.b)b8.aJ=H.m(b8.y.I(0,"diffuseTxt"),"$iZ")
t=c3.d
if(t.a)b8.bb=H.m(b8.y.I(0,"invDiffuseClr"),"$iD")
if(t.b)b8.cX=H.m(b8.y.I(0,"invDiffuseTxt"),"$iZ")
t=c3.e
s=t.a
if(s||t.b||!1){b8.d_=H.m(b8.y.I(0,"shininess"),"$iS")
if(s)b8.cY=H.m(b8.y.I(0,"specularClr"),"$iD")
if(t.b)b8.cZ=H.m(b8.y.I(0,"specularTxt"),"$iZ")}if(c3.f.b)b8.d0=H.m(b8.y.I(0,"bumpTxt"),"$iZ")
if(c3.db){b8.d1=H.m(b8.y.I(0,"envSampler"),"$ibu")
t=c3.r
if(t.a)b8.d2=H.m(b8.y.I(0,"reflectClr"),"$iD")
if(t.b)b8.d3=H.m(b8.y.I(0,"reflectTxt"),"$iZ")
t=c3.x
s=t.a
if(s||t.b||!1){b8.d4=H.m(b8.y.I(0,"refraction"),"$iS")
if(s)b8.d5=H.m(b8.y.I(0,"refractClr"),"$iD")
if(t.b)b8.d6=H.m(b8.y.I(0,"refractTxt"),"$iZ")}}t=c3.y
if(t.a)b8.d7=H.m(b8.y.I(0,"alpha"),"$iS")
if(t.b)b8.d8=H.m(b8.y.I(0,"alphaTxt"),"$iZ")
if(c3.k1){t=c3.z
s=t.length
if(s!==0){r=P.t
b8.bP=new H.F([r,A.b8])
b8.bQ=new H.F([r,[P.r,A.c6]])
for(r=[A.c6],i=0;i<t.length;t.length===s||(0,H.p)(t),++i){h=t[i]
g=h.a
f="barLight"+H.e(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].startPnt"
j=p.h(0,o)
if(j==null)H.o(P.u(c0+o+c1))
H.m(j,"$iD")
p=b8.y
o=f+"s["+k+"].endPnt"
d=p.h(0,o)
if(d==null)H.o(P.u(c0+o+c1))
H.m(d,"$iD")
p=b8.y
o=f+"s["+k+"].color"
c=p.h(0,o)
if(c==null)H.o(P.u(c0+o+c1))
H.m(c,"$iD")
if(typeof g!=="number")return g.a2()
if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
b=p.h(0,o)
if(b==null)H.o(P.u(c0+o+c1))
H.m(b,"$iS")
p=b8.y
o=f+"s["+k+"].att1"
a=p.h(0,o)
if(a==null)H.o(P.u(c0+o+c1))
H.m(a,"$iS")
p=b8.y
o=f+"s["+k+"].att2"
a0=p.h(0,o)
if(a0==null)H.o(P.u(c0+o+c1))
H.m(a0,"$iS")
a1=a0
a2=a
a3=b}else{a1=b9
a2=a1
a3=a2}e.push(new A.c6(j,d,c,a3,a2,a1))}b8.bQ.j(0,g,e)
q=b8.bP
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.o(P.u(c0+o+c1))
q.j(0,g,j)}}t=c3.Q
s=t.length
if(s!==0){r=P.t
b8.bR=new H.F([r,A.b8])
b8.bS=new H.F([r,[P.r,A.c7]])
for(r=[A.c7],i=0;i<t.length;t.length===s||(0,H.p)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.e(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.a2()
p=(g&1)!==0
if(p){o=b8.y
a4=f+"s["+k+"].objUp"
j=o.h(0,a4)
if(j==null)H.o(P.u(c0+a4+c1))
H.m(j,"$iD")
o=b8.y
a4=f+"s["+k+"].objRight"
d=o.h(0,a4)
if(d==null)H.o(P.u(c0+a4+c1))
H.m(d,"$iD")
o=b8.y
a4=f+"s["+k+"].objDir"
c=o.h(0,a4)
if(c==null)H.o(P.u(c0+a4+c1))
H.m(c,"$iD")
a5=c
a6=d
a7=j}else{a5=b9
a6=a5
a7=a6}o=b8.y
a4=f+"s["+k+"].viewDir"
j=o.h(0,a4)
if(j==null)H.o(P.u(c0+a4+c1))
H.m(j,"$iD")
o=b8.y
a4=f+"s["+k+"].color"
d=o.h(0,a4)
if(d==null)H.o(P.u(c0+a4+c1))
H.m(d,"$iD")
if(p){p=b8.y
o=f+"sTexture2D"+k
c=p.h(0,o)
if(c==null)H.o(P.u(c0+o+c1))
H.m(c,"$iZ")
a8=c}else a8=b9
e.push(new A.c7(a7,a6,a5,j,d,a8))}b8.bS.j(0,g,e)
q=b8.bR
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.o(P.u(c0+o+c1))
q.j(0,g,j)}}t=c3.ch
s=t.length
if(s!==0){r=P.t
b8.bT=new H.F([r,A.b8])
b8.bU=new H.F([r,[P.r,A.c9]])
for(r=[A.c9],i=0;i<t.length;t.length===s||(0,H.p)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.e(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.h(0,o)
if(j==null)H.o(P.u(c0+o+c1))
H.m(j,"$iD")
p=b8.y
o=f+"s["+k+"].viewPnt"
d=p.h(0,o)
if(d==null)H.o(P.u(c0+o+c1))
H.m(d,"$iD")
p=b8.y
o=f+"s["+k+"].color"
c=p.h(0,o)
if(c==null)H.o(P.u(c0+o+c1))
H.m(c,"$iD")
if(typeof g!=="number")return g.a2()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
b=p.h(0,o)
if(b==null)H.o(P.u(c0+o+c1))
H.m(b,"$ic8")
a9=b}else a9=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
b=p.h(0,o)
if(b==null)H.o(P.u(c0+o+c1))
H.m(b,"$ibu")
a8=b}else a8=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
b=p.h(0,o)
if(b==null)H.o(P.u(c0+o+c1))
H.m(b,"$ibu")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a=p.h(0,o)
if(a==null)H.o(P.u(c0+o+c1))
H.m(a,"$ic5")
b0=b
b1=a}else{b0=b9
b1=b0}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
b=p.h(0,o)
if(b==null)H.o(P.u(c0+o+c1))
H.m(b,"$iS")
p=b8.y
o=f+"s["+k+"].att1"
a=p.h(0,o)
if(a==null)H.o(P.u(c0+o+c1))
H.m(a,"$iS")
p=b8.y
o=f+"s["+k+"].att2"
a0=p.h(0,o)
if(a0==null)H.o(P.u(c0+o+c1))
H.m(a0,"$iS")
a1=a0
a2=a
a3=b}else{a1=b9
a2=a1
a3=a2}e.push(new A.c9(j,d,a9,c,a8,b0,b1,a3,a2,a1))}b8.bU.j(0,g,e)
q=b8.bT
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.o(P.u(c0+o+c1))
q.j(0,g,j)}}t=c3.cx
s=t.length
if(s!==0){r=P.t
b8.bV=new H.F([r,A.b8])
b8.bW=new H.F([r,[P.r,A.ca]])
for(r=[A.ca],i=0;i<t.length;t.length===s||(0,H.p)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.e(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.h(0,o)
if(j==null)H.o(P.u(c0+o+c1))
H.m(j,"$iD")
p=b8.y
o=f+"s["+k+"].objDir"
d=p.h(0,o)
if(d==null)H.o(P.u(c0+o+c1))
H.m(d,"$iD")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.h(0,o)
if(c==null)H.o(P.u(c0+o+c1))
H.m(c,"$iD")
p=b8.y
o=f+"s["+k+"].color"
b=p.h(0,o)
if(b==null)H.o(P.u(c0+o+c1))
H.m(b,"$iD")
if(typeof g!=="number")return g.a2()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a=p.h(0,o)
if(a==null)H.o(P.u(c0+o+c1))
H.m(a,"$iD")
p=b8.y
o=f+"s["+k+"].objRight"
a0=p.h(0,o)
if(a0==null)H.o(P.u(c0+o+c1))
H.m(a0,"$iD")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.h(0,o)
if(b2==null)H.o(P.u(c0+o+c1))
H.m(b2,"$iS")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.h(0,o)
if(b3==null)H.o(P.u(c0+o+c1))
H.m(b3,"$iS")
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
if(a==null)H.o(P.u(c0+a4+c1))
H.m(a,"$ic5")
b1=a}else b1=b9
if((g&8)!==0){o=b8.y
a4=f+"s["+k+"].cutoff"
a=o.h(0,a4)
if(a==null)H.o(P.u(c0+a4+c1))
H.m(a,"$iS")
o=b8.y
a4=f+"s["+k+"].coneAngle"
a0=o.h(0,a4)
if(a0==null)H.o(P.u(c0+a4+c1))
H.m(a0,"$iS")
b6=a0
b7=a}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
a4=f+"s["+k+"].att0"
a=o.h(0,a4)
if(a==null)H.o(P.u(c0+a4+c1))
H.m(a,"$iS")
o=b8.y
a4=f+"s["+k+"].att1"
a0=o.h(0,a4)
if(a0==null)H.o(P.u(c0+a4+c1))
H.m(a0,"$iS")
o=b8.y
a4=f+"s["+k+"].att2"
b2=o.h(0,a4)
if(b2==null)H.o(P.u(c0+a4+c1))
H.m(b2,"$iS")
a1=b2
a2=a0
a3=a}else{a1=b9
a2=a1
a3=a2}if((g&1)!==0){o=b8.y
a4=f+"sTexture2D"+k
a=o.h(0,a4)
if(a==null)H.o(P.u(c0+a4+c1))
H.m(a,"$iZ")
a8=a}else a8=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a=p.h(0,o)
if(a==null)H.o(P.u(c0+o+c1))
H.m(a,"$iZ")
b0=a}else b0=b9
e.push(new A.ca(j,d,c,b,a7,a6,b5,b4,b1,b7,b6,a3,a2,a1,a8,b0))}b8.bW.j(0,g,e)
q=b8.bV
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.o(P.u(c0+o+c1))
q.j(0,g,j)}}}},
ae:function(a,b){if(b!=null&&b.d)a.dM(b)},
fs:function(a,b){}}
A.cy.prototype={
i:function(a){return"barLight"+H.e(this.a)}}
A.cE.prototype={
i:function(a){return"dirLight"+H.e(this.a)}}
A.d1.prototype={
i:function(a){return"pointLight"+H.e(this.a)}}
A.d9.prototype={
i:function(a){return"spotLight"+H.e(this.a)}}
A.fB.prototype={
i:function(a){return this.aV}}
A.c6.prototype={}
A.c7.prototype={}
A.c9.prototype={}
A.ca.prototype={}
A.d7.prototype={
dX:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cr:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.b(P.u("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
ft:function(){var u,t,s,r=this,q=H.c([],[A.cx]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.j(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cx(p,t.name,s))}r.x=new A.eu(q)},
fv:function(){var u,t,s,r=this,q=H.c([],[A.dl]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.j(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.fQ(t.type,t.size,t.name,s))}r.y=new A.hT(q)},
aE:function(a,b,c){var u=this.a
if(a===1)return new A.b8(u,b,c)
else return A.jM(u,this.r,b,a,c)},
ej:function(a,b,c){var u=this.a
if(a===1)return new A.Z(u,b,c)
else return A.jM(u,this.r,b,a,c)},
ek:function(a,b,c){var u=this.a
if(a===1)return new A.bu(u,b,c)
else return A.jM(u,this.r,b,a,c)},
b8:function(a,b){return new P.dC(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
fQ:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aE(b,c,d)
case 5121:return u.aE(b,c,d)
case 5122:return u.aE(b,c,d)
case 5123:return u.aE(b,c,d)
case 5124:return u.aE(b,c,d)
case 5125:return u.aE(b,c,d)
case 5126:return new A.S(u.a,c,d)
case 35664:return new A.hP(u.a,c,d)
case 35665:return new A.D(u.a,c,d)
case 35666:return new A.c5(u.a,c,d)
case 35667:return new A.hQ(u.a,c,d)
case 35668:return new A.hR(u.a,c,d)
case 35669:return new A.hS(u.a,c,d)
case 35674:return new A.hU(u.a,c,d)
case 35675:return new A.c8(u.a,c,d)
case 35676:return new A.ab(u.a,c,d)
case 35678:return u.ej(b,c,d)
case 35680:return u.ek(b,c,d)
case 35670:throw H.b(u.b8("BOOL",c))
case 35671:throw H.b(u.b8("BOOL_VEC2",c))
case 35672:throw H.b(u.b8("BOOL_VEC3",c))
case 35673:throw H.b(u.b8("BOOL_VEC4",c))
default:throw H.b(P.u("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.dl.prototype={}
A.hT.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
I:function(a,b){var u=this.h(0,b)
if(u==null)throw H.b(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.M()},
M:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.p)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.b8.prototype={
i:function(a){return"Uniform1i: "+H.e(this.c)}}
A.hQ.prototype={
i:function(a){return"Uniform2i: "+H.e(this.c)}}
A.hR.prototype={
i:function(a){return"Uniform3i: "+H.e(this.c)}}
A.hS.prototype={
i:function(a){return"Uniform4i: "+H.e(this.c)}}
A.hO.prototype={
i:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.S.prototype={
i:function(a){return"Uniform1f: "+H.e(this.c)}}
A.hP.prototype={
i:function(a){return"Uniform2f: "+H.e(this.c)}}
A.D.prototype={
i:function(a){return"Uniform3f: "+H.e(this.c)}}
A.c5.prototype={
i:function(a){return"Uniform4f: "+H.e(this.c)}}
A.hU.prototype={
i:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.c8.prototype={
ad:function(a){var u=new Float32Array(H.bz(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.e(this.c)}}
A.ab.prototype={
ad:function(a){var u=new Float32Array(H.bz(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.e(this.c)}}
A.Z.prototype={
dM:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.bu.prototype={
i:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.j1.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.c0(s.b,b).c0(s.d.c0(s.c,b),c)
a.sZ(0,new V.a0(r.a,r.b,r.c))
a.sdE(r.A(0,Math.sqrt(r.K(r))))
s=1-b
u=1-c
a.scR(new V.c1(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))}}
F.je.prototype={
$2:function(a,b){return 0}}
F.jf.prototype={
$3:function(a,b,c){var u,t,s=b*2-1,r=c*2-1
a.sZ(0,new V.a0(s,r,this.a.a.$2(b,c)))
u=new V.B(s,r,1)
a.sdE(u.A(0,Math.sqrt(u.K(u))))
u=1-b
t=1-c
a.scR(new V.c1(b*c,2+u*c,4+b*t,6+u*t))}}
F.bm.prototype={
ed:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.ds()
if(q!=null)s=s.v(0,q)
if(u!=null)s=s.v(0,u)
if(t!=null)s=s.v(0,t)
if(s.di())return
return s.A(0,Math.sqrt(s.K(s)))},
ef:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.w(0,q)
r=new V.B(r.a,r.b,r.c)
s=r.A(0,Math.sqrt(r.K(r)))
r=t.w(0,q)
r=new V.B(r.a,r.b,r.c)
r=s.aU(r.A(0,Math.sqrt(r.K(r))))
return r.A(0,Math.sqrt(r.K(r)))},
bK:function(){var u,t=this
if(t.d!=null)return!0
u=t.ed()
if(u==null){u=t.ef()
if(u==null)return!1}t.d=u
t.a.a.a1()
return!0},
ec:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.ds()
if(q!=null)s=s.v(0,q)
if(u!=null)s=s.v(0,u)
if(t!=null)s=s.v(0,t)
if(s.di())return
return s.A(0,Math.sqrt(s.K(s)))},
ee:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.y().a){l=d.w(0,g)
l=new V.B(l.a,l.b,l.c)
q=l.A(0,Math.sqrt(l.K(l)))
if(s.a-t.a<0)q=q.O(0)}else{p=(l-u.b)/r
l=d.w(0,g)
k=l.c
if(typeof k!=="number")return k.m()
i=g.a
h=g.b
f=g.c
if(typeof f!=="number")return H.j(f)
f=new V.a0(l.a*p+i,l.b*p+h,k*p+f).w(0,j)
f=new V.B(f.a,f.b,f.c)
q=f.A(0,Math.sqrt(f.K(f)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.O(0)}l=n.d
if(l!=null){o=l.A(0,Math.sqrt(l.K(l)))
l=o.aU(q)
l=l.A(0,Math.sqrt(l.K(l))).aU(o)
q=l.A(0,Math.sqrt(l.K(l)))}return q},
bI:function(){var u,t=this
if(t.e!=null)return!0
u=t.ec()
if(u==null){u=t.ee()
if(u==null)return!1}t.e=u
t.a.a.a1()
return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
C:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.a.ab(J.a8(s.e),0)+", "+C.a.ab(J.a8(t.b.e),0)+", "+C.a.ab(J.a8(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.i(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.i(0)+"}"):u+"-}"},
M:function(){return this.C("")}}
F.bS.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
C:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.a.ab(J.a8(u.e),0)+", "+C.a.ab(J.a8(this.b.e),0)},
M:function(){return this.C("")}}
F.c0.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
C:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.a.ab(J.a8(u.e),0)},
M:function(){return this.C("")}}
F.hg.prototype={
gt:function(){var u=this.e
return u==null?this.e=D.G():u},
hc:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.Y()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.p)(g),++s){r=g[s]
h.a.l(0,r.fO())}h.a.Y()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.p)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.Y()
o=o.e
if(typeof o!=="number")return o.v()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
n=p[o]
h.b.a.a.l(0,n)
o=new F.c0()
if(n.a==null)H.o(P.u("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.B(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.p)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.Y()
o=o.e
if(typeof o!=="number")return o.v()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.Y()
p=p.e
if(typeof p!=="number")return p.v()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.c.a
p.a.l(0,l)
p.a.l(0,k)
p=new F.bS()
o=l.a
if(o==null)H.o(P.u("May not create a line with a start vertex which is not attached to a shape."))
if(o!=k.a)H.o(P.u("May not create a line with vertices attached to different shapes."))
p.a=l
l.c.b.push(p)
p.b=k
k.c.c.push(p)
p.a.a.c.b.push(p)
p=p.a.a.e
if(p!=null)p.B(null)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.p)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.Y()
o=o.e
if(typeof o!=="number")return o.v()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.Y()
p=p.e
if(typeof p!=="number")return p.v()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.Y()
o=o.e
if(typeof o!=="number")return o.v()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
i=p[o]
o=h.d.a
o.a.l(0,l)
o.a.l(0,k)
o.a.l(0,i)
F.cI(l,k,i)}g=h.e
if(g!=null)g.an(0)},
aH:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aH()||!1
if(!t.a.aH())u=!1
s=t.e
if(s!=null)s.an(0)
return u},
fL:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.aS()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.aR().a)!==0)++s
if((t&$.aQ().a)!==0)++s
if((t&$.aT().a)!==0)++s
if((t&$.be().a)!==0)++s
if((t&$.cs().a)!==0)++s
if((t&$.ct().a)!==0)++s
if((t&$.bF().a)!==0)++s
if((t&$.aP().a)!==0)++s
r=a4.gca(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.c(u,[P.H])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.cz])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.fJ(m)
k=l.gca(l)
if(m>=t)return H.d(o,m)
o[m]=new Z.cz(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.d(i,j)
h=i[j].ha(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.d(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.bz(p)),35044)
u.bindBuffer(a1,null)
c=new Z.cA(new Z.dt(a1,d),o,a4)
c.b=H.c([],[Z.bn])
if(a0.b.b.length!==0){b=H.c([],[P.t])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.Y()
b.push(t.e)}a=Z.jR(u,34963,b)
c.b.push(new Z.bn(0,b.length,a))}if(a0.c.b.length!==0){b=H.c([],[P.t])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.Y()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.d(t,m)
t=t[m].b
t.a.a.Y()
b.push(t.e)}a=Z.jR(u,34963,b)
c.b.push(new Z.bn(1,b.length,a))}if(a0.d.b.length!==0){b=H.c([],[P.t])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.Y()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.d(t,m)
t=t[m].b
t.a.a.Y()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.d(t,m)
t=t[m].c
t.a.a.Y()
b.push(t.e)}a=Z.jR(u,34963,b)
c.b.push(new Z.bn(4,b.length,a))}return c},
i:function(a){var u=this,t="   ",s=H.c([],[P.n])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.C(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.C(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.C(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.C(t))}return C.b.p(s,"\n")},
a1:function(){var u=this.e
if(u!=null)u.B(null)}}
F.hh.prototype={
fI:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.c([],[F.bm])
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
if(p){n.l(0,m)
u.a.l(0,l)
u.a.l(0,j)
h.push(F.cI(m,l,j))
u.a.l(0,m)
u.a.l(0,j)
u.a.l(0,i)
h.push(F.cI(m,j,i))}else{n.l(0,l)
u.a.l(0,j)
u.a.l(0,i)
h.push(F.cI(l,j,i))
u.a.l(0,l)
u.a.l(0,i)
u.a.l(0,m)
h.push(F.cI(l,i,m))}p=!p}r=!r}return h},
gk:function(a){return this.b.length},
aH:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.p)(u),++r)if(!u[r].bK())s=!1
return s},
bJ:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.p)(u),++r)if(!u[r].bI())s=!1
return s},
i:function(a){return this.M()},
C:function(a){var u,t,s,r=H.c([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].C(a))
return C.b.p(r,"\n")},
M:function(){return this.C("")}}
F.hi.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.M()},
C:function(a){var u,t,s=H.c([],[P.n]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.d(t,u)
s.push(t[u].C(a+(""+u+". ")))}return C.b.p(s,"\n")},
M:function(){return this.C("")}}
F.hj.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.M()},
C:function(a){var u,t,s,r=H.c([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].C(a))
return C.b.p(r,"\n")},
M:function(){return this.C("")}}
F.cb.prototype={
bO:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.kJ(u.cx,r,o,t,s,q,p,a,n)},
fO:function(){return this.bO(null)},
sZ:function(a,b){var u
if(!J.I(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a1()}},
sdE:function(a){var u
if(!J.I(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a1()}},
scR:function(a){var u
if(!J.I(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a1()}},
ha:function(a){var u,t,s=this
if(a.n(0,$.aS())){u=s.f
t=[P.H]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.aR())){u=s.r
t=[P.H]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.aQ())){u=s.x
t=[P.H]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.aT())){u=s.y
t=[P.H]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.n(0,$.be())){u=s.z
t=[P.H]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.cs())){u=s.Q
t=[P.H]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.ct())){u=s.Q
t=[P.H]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.n(0,$.bF()))return H.c([s.ch],[P.H])
else if(a.n(0,$.aP())){u=s.cx
t=[P.H]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.H])},
bK:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.ds()
t.d.E(0,new F.ij(s))
s=s.a
t.r=s.A(0,Math.sqrt(s.K(s)))
s=t.a
if(s!=null){s.a1()
s=t.a.e
if(s!=null)s.an(0)}return!0},
bI:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.ds()
t.d.E(0,new F.ii(s))
s=s.a
t.x=s.A(0,Math.sqrt(s.K(s)))
s=t.a
if(s!=null){s.a1()
s=t.a.e
if(s!=null)s.an(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
C:function(a){var u,t,s=this,r="-",q=H.c([],[P.n])
q.push(C.a.ab(J.a8(s.e),0))
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
q.push(V.C(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.i(0))
else q.push(r)
t=C.b.p(q,", ")
return a+"{"+t+"}"},
M:function(){return this.C("")}}
F.ij.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.v(0,t)}}}
F.ii.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.v(0,t)}}}
F.ib.prototype={
Y:function(){},
l:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.b(P.u("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.a1()
return!0},
cM:function(a,b){var u=null,t=F.kJ(u,u,a,u,u,b,u,u,0)
this.l(0,t)
return t},
gk:function(a){return this.c.length},
aH:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)u[s].bK()
return!0},
bJ:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)u[s].bI()
return!0},
fM:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
if(typeof n!=="number")return n.m()
n=q.A(0,Math.sqrt(p*p+o*o+n*n))
if(!J.I(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.B(null)}}}}return!0},
i:function(a){return this.M()},
C:function(a){var u,t,s,r
this.Y()
u=H.c([],[P.n])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.p)(t),++r)u.push(t[r].C(a))
return C.b.p(u,"\n")},
M:function(){return this.C("")}}
F.ic.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
E:function(a,b){var u=this
C.b.E(u.b,b)
C.b.E(u.c,new F.id(u,b))
C.b.E(u.d,new F.ie(u,b))},
i:function(a){return this.M()},
M:function(){var u,t,s,r=H.c([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].C(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].C(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].C(""))
return C.b.p(r,"\n")}}
F.id.prototype={
$1:function(a){if(!J.I(a.a,this.a))this.b.$1(a)}}
F.ie.prototype={
$1:function(a){var u=this.a
if(!J.I(a.a,u)&&!J.I(a.b,u))this.b.$1(a)}}
F.ig.prototype={
gk:function(a){return this.b.length+this.c.length},
i:function(a){return this.M()},
M:function(){var u,t,s,r=H.c([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].C(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].C(""))
return C.b.p(r,"\n")}}
F.ih.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.M()},
M:function(){var u,t,s,r=H.c([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].C(""))
return C.b.p(r,"\n")}}
O.cU.prototype={
gt:function(){var u=this.fr
return u==null?this.fr=D.G():u},
X:function(a){var u=this.fr
if(u!=null)u.B(a)},
by:function(){return this.X(null)},
cC:function(a){this.a=null
this.X(a)},
fp:function(){return this.cC(null)},
eE:function(a,b){var u=new D.aY()
u.b=!0
this.X(u)},
eG:function(a,b){var u=new D.aZ()
u.b=!0
this.X(u)},
cp:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=P.t
f=[f,f]
u=new H.F(f)
for(t=g.dx.e,s=t.length,r=0;r<t.length;t.length===s||(0,H.p)(t),++r){q=t[r]
p=q.gal()
o=u.h(0,q.gal())
u.j(0,p,o==null?1:o)}n=H.c([],[A.cy])
u.E(0,new O.fF(g,n))
C.b.aR(n,new O.fG())
m=new H.F(f)
for(t=g.dx.f,s=t.length,r=0;r<t.length;t.length===s||(0,H.p)(t),++r){p=m.h(0,0)
m.j(0,0,p==null?1:p)}l=H.c([],[A.cE])
m.E(0,new O.fH(g,l))
C.b.aR(l,new O.fI())
k=new H.F(f)
for(t=g.dx.r,s=t.length,r=0;r<t.length;t.length===s||(0,H.p)(t),++r){q=t[r]
p=q.gal()
o=k.h(0,q.gal())
k.j(0,p,o==null?1:o)}j=H.c([],[A.d1])
k.E(0,new O.fJ(g,j))
C.b.aR(j,new O.fK())
i=new H.F(f)
for(f=g.dx.x,t=f.length,r=0;r<f.length;f.length===t||(0,H.p)(f),++r){q=f[r]
s=q.gal()
p=i.h(0,q.gal())
i.j(0,s,p==null?1:p)}h=H.c([],[A.d9])
i.E(0,new O.fL(g,h))
C.b.aR(h,new O.fM())
f=C.c.a_(g.e.a.length+3,4)
t=g.b
g.dy.e
return A.lW(t!=null,!1,!1,!1,f*4,g.f.c,g.r.c,g.x.c,g.y.c,g.z.c,g.Q.c,g.cx.c,g.cy.c,g.db.c,n,l,j,h)},
a7:function(a,b){if(b!=null)if(!C.b.U(a,b)){b.a=a.length
a.push(b)}},
ac:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.a1(u,u.length);u.u();){t=u.d
t.toString
s=$.ia
if(s==null)s=$.ia=new V.B(0,0,1)
t.a=s
r=$.i9
t.d=r==null?$.i9=new V.B(0,1,0):r
r=$.i8
t.e=r==null?$.i8=new V.B(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.aw(s)
r=s.a
p=s.b
o=s.c
if(typeof o!=="number")return o.m()
t.a=s.A(0,Math.sqrt(r*r+p*p+o*o))
o=q.aw(t.d)
p=o.a
r=o.b
s=o.c
if(typeof s!=="number")return s.m()
t.d=o.A(0,Math.sqrt(p*p+r*r+s*s))
s=q.aw(t.e)
r=s.a
p=s.b
o=s.c
if(typeof o!=="number")return o.m()
t.e=s.A(0,Math.sqrt(r*r+p*p+o*o))}}}},
hy:function(b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.cp()
u=b4.fr.h(0,b3.aV)
if(u==null){u=A.lV(b3,b4.a)
t=u.b
if(t.length===0)H.o(P.u("May not cache a shader with no name."))
if(b4.fr.bM(0,t))H.o(P.u('Shader cache already contains a shader by the name "'+t+'".'))
b4.fr.j(0,t,u)}b3=b2.a=u
b5.e=null}s=b3.z
r=s.bb
b3=b5.e
if(!(b3 instanceof Z.cA))b3=b5.e=null
if(b3==null||!b3.d.n(0,r)){b3=s.k4
if(b3)b5.d.aH()
q=s.r1
if(q){p=b5.d
o=p.e
if(o!=null)++o.d
p.d.bJ()
p.a.bJ()
p=p.e
if(p!=null)p.an(0)}p=s.rx
if(p){o=b5.d
n=o.e
if(n!=null)++n.d
o.a.fM()
o=o.e
if(o!=null)o.an(0)}m=b5.d.fL(new Z.il(b4.a),r)
m.aK($.aS()).e=b2.a.Q.c
if(b3)m.aK($.aR()).e=b2.a.cx.c
if(q)m.aK($.aQ()).e=b2.a.ch.c
if(s.r2)m.aK($.aT()).e=b2.a.cy.c
if(p)m.aK($.be()).e=b2.a.db.c
if(s.ry)m.aK($.aP()).e=b2.a.dx.c
b5.e=m}l=H.c([],[T.de])
b3=b2.a
q=b4.a
q.useProgram(b3.r)
b3.x.fZ()
if(s.fr){b3=b2.a
p=b4.dx
p=p.gV(p)
b3=b3.dy
b3.toString
b3.ad(p.a4(0,!0))}if(s.fx){b3=b2.a
p=b4.cx
if(p==null){p=b4.db
p=p.gV(p)
o=b4.dx
o=b4.cx=p.m(0,o.gV(o))
p=o}b3=b3.fr
b3.toString
b3.ad(p.a4(0,!0))}b3=b2.a
p=b4.ch
if(p==null){p=b4.ghv()
o=b4.dx
o=b4.ch=p.m(0,o.gV(o))
p=o}b3=b3.fy
b3.toString
b3.ad(p.a4(0,!0))
if(s.go){b3=b2.a
p=b4.db
p=p.gV(p)
b3=b3.fx
b3.toString
b3.ad(p.a4(0,!0))}if(s.x1){b3=b2.a
p=b2.b
b3=b3.k1
b3.toString
b3.ad(p.a4(0,!0))}if(s.x2){b3=b2.a
p=b2.c
b3=b3.k2
b3.toString
b3.ad(C.n.a4(p,!0))}if(s.y1){b3=b2.a
p=b2.d
b3=b3.k3
b3.toString
b3.ad(C.n.a4(p,!0))}if(s.aJ>0){k=b2.e.a.length
b3=b2.a.k4
b3.a.uniform1i(b3.d,k)
for(j=0;j<k;++j){b3=b2.a
p=b2.e.a
if(j>=p.length)return H.d(p,j)
p=p[j]
b3=b3.r1
if(j>=b3.length)return H.d(b3,j)
b3=b3[j]
i=new Float32Array(H.bz(p.a4(0,!0)))
b3.a.uniformMatrix4fv(b3.d,!1,i)}}b3=s.a
if(b3.a){p=b2.a
o=b2.f.f
p=p.r2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.a7(l,b2.f.d)
b3=b2.a
p=b2.f.d
b3.ae(b3.rx,p)}if(s.k1){b3=s.b
if(b3.a){p=b2.a
o=b2.r.f
p=p.x1
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.a7(l,b2.r.d)
b3=b2.a
p=b2.r.d
b3.ae(b3.x2,p)}b3=s.c
if(b3.a){p=b2.a
o=b2.x.f
p=p.y2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.a7(l,b2.x.d)
b3=b2.a
p=b2.x.d
b3.ae(b3.aJ,p)}b3=s.d
if(b3.a){p=b2.a
o=b2.y.f
p=p.bb
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.a7(l,b2.y.d)
b3=b2.a
p=b2.y.d
b3.ae(b3.cX,p)}b3=s.e
p=b3.a
if(p||b3.b||!1){o=b2.a
n=b2.z.ch
o=o.d_
o.a.uniform1f(o.d,n)}if(p){p=b2.a
o=b2.z.f
p=p.cY
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.a7(l,b2.z.d)
b3=b2.a
p=b2.z.d
b3.ae(b3.cZ,p)}b3=s.z
if(b3.length>0){p=P.t
h=new H.F([p,p])
for(p=b2.dx.e,o=p.length,g=0;g<p.length;p.length===o||(0,H.p)(p),++g){f=p[g]
e=f.gal()
d=h.h(0,e)
if(d==null)d=0
h.j(0,e,d+1)
c=J.bG(b2.a.bQ.h(0,e),d)
n=f.ghO()
b=$.av
n=n.b1(b==null?$.av=new V.a0(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.ghT()
b=$.av
n=n.b1(b==null?$.av=new V.a0(0,0,0):b)
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gak(f)
b=c.d
b.a.uniform3f(b.d,n.a,n.b,n.c)
if(f.gcW()){n=f.gcO()
b=c.e
b.a.uniform1f(b.d,n)
n=f.gcP()
b=c.f
b.a.uniform1f(b.d,n)
n=f.gcQ()
b=c.r
b.a.uniform1f(b.d,n)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.p)(b3),++g){o=b3[g].a
k=h.h(0,o)
if(k==null)k=0
o=b2.a.bP.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.Q
if(b3.length>0){p=b4.db
a=p.gV(p)
p=P.t
a0=new H.F([p,p])
for(p=b2.dx.f,o=p.length,g=0;g<p.length;p.length===o||(0,H.p)(p),++g){f=p[g]
d=a0.h(0,0)
if(d==null)d=0
a0.j(0,0,d+1)
c=J.bG(b2.a.bS.h(0,0),d)
n=a.aw(f.a)
b=n.a
a1=n.b
a2=n.c
if(typeof a2!=="number")return a2.m()
a2=n.A(0,Math.sqrt(b*b+a1*a1+a2*a2))
a1=c.e
b=a2.a
n=a2.b
a2=a2.c
a1.a.uniform3f(a1.d,b,n,a2)
a2=f.c
n=c.f
n.a.uniform3f(n.d,a2.a,a2.b,a2.c)}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.p)(b3),++g){o=b3[g].a
k=a0.h(0,o)
if(k==null)k=0
o=b2.a.bR.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.ch
if(b3.length>0){p=b4.db
a=p.gV(p)
p=P.t
a3=new H.F([p,p])
for(p=b2.dx.r,o=p.length,g=0;g<p.length;p.length===o||(0,H.p)(p),++g){f=p[g]
e=f.gal()
d=a3.h(0,e)
if(d==null)d=0
a3.j(0,e,d+1)
c=J.bG(b2.a.bU.h(0,e),d)
a4=a.m(0,f.gV(f))
n=f.gV(f)
b=$.av
n=n.b1(b==null?$.av=new V.a0(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=$.av
n=a4.b1(n==null?$.av=new V.a0(0,0,0):n)
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gak(f)
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
f.gav()
n=a4.bd(0)
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
i=new Float32Array(H.bz(new V.aI(b,a1,a2,a5,a6,a7,a8,a9,n).a4(0,!0)))
b0.a.uniformMatrix3fv(b0.d,!1,i)
f.gav()
n=f.gav()
if(!C.b.U(l,n)){n.a=l.length
l.push(n)}n=f.gav()
b=n.gaW(n)
if(b){b=c.f
b.toString
a1=n.gaW(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.gh6(n)
b.a.uniform1i(b.d,n)}}f.gaQ()
n=f.gdN()
b=c.x
b.toString
a1=n.gfV(n)
a2=n.gfW(n)
a5=n.gfX()
n=n.gfU()
b.a.uniform4f(b.d,a1,a2,a5,n)
n=f.gaQ()
if(!C.b.U(l,n)){n.a=l.length
l.push(n)}n=f.gaQ()
b=n.gaW(n)
if(b){b=c.r
b.toString
a1=n.gaW(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.gh6(n)
b.a.uniform1i(b.d,n)}}if(f.gcW()){n=f.gcO()
b=c.y
b.a.uniform1f(b.d,n)
n=f.gcP()
b=c.z
b.a.uniform1f(b.d,n)
n=f.gcQ()
b=c.Q
b.a.uniform1f(b.d,n)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.p)(b3),++g){o=b3[g].a
k=a3.h(0,o)
if(k==null)k=0
o=b2.a.bT.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.cx
if(b3.length>0){p=b4.db
a=p.gV(p)
p=P.t
b1=new H.F([p,p])
for(p=b2.dx.x,o=p.length,g=0;g<p.length;p.length===o||(0,H.p)(p),++g){f=p[g]
e=f.gal()
d=b1.h(0,e)
if(d==null)d=0
b1.j(0,e,d+1)
c=J.bG(b2.a.bW.h(0,e),d)
n=f.ghu(f)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.ghR(f).i3()
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=a.b1(f.ghu(f))
b=c.d
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gak(f)
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
f.gav()
n=f.gi6()
b=c.f
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gc6(f)
b=c.r
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gi4()
b=c.x
b.a.uniform1f(b.d,n)
n=f.gi5()
b=c.y
b.a.uniform1f(b.d,n)
f.gav()
n=f.gav()
if(!C.b.U(l,n)){n.a=l.length
l.push(n)}n=f.gav()
b=n.gaW(n)
if(b){b=c.dx
b.toString
a1=n.d
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.a
b.a.uniform1i(b.d,n)}}f.gaQ()
n=f.gdN()
b=c.z
b.toString
a1=n.gfV(n)
a2=n.gfW(n)
a5=n.gfX()
n=n.gfU()
b.a.uniform4f(b.d,a1,a2,a5,n)
n=f.gaQ()
if(!C.b.U(l,n)){n.a=l.length
l.push(n)}n=f.gaQ()
b=n.gaW(n)
if(b){b=c.dy
b.toString
a1=n.d
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.a
b.a.uniform1i(b.d,n)}}if(f.ghS()){n=f.ghQ()
b=c.Q
b.a.uniform1f(b.d,n)
n=f.ghP()
b=c.ch
b.a.uniform1f(b.d,n)}if(f.gcW()){n=f.gcO()
b=c.cx
b.a.uniform1f(b.d,n)
n=f.gcP()
b=c.cy
b.a.uniform1f(b.d,n)
n=f.gcQ()
b=c.db
b.a.uniform1f(b.d,n)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.p)(b3),++g){o=b3[g].a
k=b1.h(0,o)
if(k==null)k=0
o=b2.a.bV.h(0,o)
o.a.uniform1i(o.d,k)}}}if(s.f.b){b2.a7(l,b2.Q.d)
b3=b2.a
p=b2.Q.d
b3.ae(b3.d0,p)}if(s.dy){b3=b2.a
p=b4.Q
if(p==null){p=b4.db
p=b4.Q=p.gV(p).bd(0)}b3=b3.id
b3.toString
b3.ad(p.a4(0,!0))}if(s.db){b2.a7(l,b2.ch)
b3=b2.a
p=b2.ch
b3.fs(b3.d1,p)
b3=s.r
if(b3.a){p=b2.a
o=b2.cx.f
p=p.d2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.a7(l,b2.cx.d)
b3=b2.a
p=b2.cx.d
b3.ae(b3.d3,p)}b3=s.x
p=b3.a
if(p||b3.b||!1){o=b2.a
n=b2.cy.ch
o=o.d4
o.a.uniform1f(o.d,n)}if(p){p=b2.a
o=b2.cy.f
p=p.d5
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.a7(l,b2.cy.d)
b3=b2.a
p=b2.cy.d
b3.ae(b3.d6,p)}}b3=s.y
p=b3.a
o=!p
if(!o||b3.b||!1){if(p){p=b2.a
n=b2.db.f
p=p.d7
p.a.uniform1f(p.d,n)}if(b3.b){b2.a7(l,b2.db.d)
p=b2.a
n=b2.db.d
p.ae(p.d8,n)}q.enable(3042)
q.blendFunc(770,771)}for(j=0;j<l.length;++j){p=l[j]
if(!p.c&&p.d){p.c=!0
q.activeTexture(33984+p.a)
q.bindTexture(3553,p.b)}}p=b5.e
p.bH(b4)
p.aO(b4)
p.hJ(b4)
if(!o||b3.b||!1)q.disable(3042)
for(j=0;j<l.length;++j){b3=l[j]
if(b3.c){b3.c=!1
q.activeTexture(33984+b3.a)
q.bindTexture(3553,null)}}b3=b2.a
b3.toString
q.useProgram(null)
b3.x.fT()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cp().aV}}
O.fF.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.cy(a,C.c.a_(b+3,4)*4))}}
O.fG.prototype={
$2:function(a,b){return J.cu(a.a,b.a)}}
O.fH.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.cE(a,C.c.a_(b+3,4)*4))}}
O.fI.prototype={
$2:function(a,b){return J.cu(a.a,b.a)}}
O.fJ.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.d1(a,C.c.a_(b+3,4)*4))}}
O.fK.prototype={
$2:function(a,b){return J.cu(a.a,b.a)}}
O.fL.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.d9(a,C.c.a_(b+3,4)*4))}}
O.fM.prototype={
$2:function(a,b){return J.cu(a.a,b.a)}}
O.fz.prototype={
aq:function(){var u,t=this
t.cc()
u=t.f
if(!(Math.abs(u-1)<$.y().a)){t.f=1
u=new D.x(t.b,u,1)
u.b=!0
t.a.X(u)}}}
O.bV.prototype={
X:function(a){return this.a.X(a)},
by:function(){return this.X(null)},
aq:function(){},
bD:function(a){var u,t,s=this
if(!s.c.n(0,a)){u=s.c
if(u.a||u.b||!1)t=!(a.a||a.b||!1)
else t=!0
s.c=a
if(t)s.aq()
u=s.a
u.a=null
u.X(null)}},
sdD:function(a){var u,t=this,s=t.c
if(!s.b)t.bD(new A.W(s.a,!0,!1))
s=t.d
if(s!==a){if(s!=null)s.gt().T(0,t.gb7())
u=t.d
t.d=a
a.gt().l(0,t.gb7())
s=new D.x(t.b+".texture2D",u,t.d)
s.b=!0
t.a.X(s)}}}
O.fA.prototype={}
O.ap.prototype={
cE:function(a){var u,t,s=this
if(!s.f.n(0,a)){u=s.f
s.f=a
t=new D.x(s.b+".color",u,a)
t.b=!0
s.a.X(t)}},
aq:function(){this.cc()
this.cE(new V.M(1,1,1))},
sak:function(a,b){this.bD(new A.W(!0,this.c.b,!1))
this.cE(b)}}
O.fC.prototype={}
O.fD.prototype={
aq:function(){var u,t=this
t.cd()
u=t.ch
if(!(Math.abs(u-1)<$.y().a)){t.ch=1
u=new D.x(t.b+".refraction",u,1)
u.b=!0
t.a.X(u)}}}
O.fE.prototype={
cF:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.y().a)){u.ch=a
t=new D.x(u.b+".shininess",t,a)
t.b=!0
u.a.X(t)}},
aq:function(){this.cd()
this.cF(100)}}
O.dd.prototype={}
T.de.prototype={}
T.hB.prototype={}
T.hC.prototype={
gt:function(){var u=this.y
return u==null?this.y=D.G():u}}
T.hD.prototype={
hb:function(a,b,c){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,10497)
r.texParameteri(s,10243,10497)
r.texParameteri(s,10241,9987)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=document.createElement("img")
u.src=a
t=new T.hC()
t.a=0
t.b=q
t.d=t.c=!1
W.U(u,"load",new T.hE(this,t,u,!1,q,!1,!0),!1)
return t},
fq:function(a,b,c){var u,t,s,r
b=V.k3(b)
u=V.k3(a.width)
t=V.k3(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.jx()
s.width=u
s.height=t
r=C.i.dK(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.nv(r.getImageData(0,0,s.width,s.height))}}}
T.hE.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.fq(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.Q.hE(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.fY()}++s.e}}
X.jw.prototype={}
X.fc.prototype={
gt:function(){var u=this.x
return u==null?this.x=D.G():u}}
X.d0.prototype={
gt:function(){var u=this.f
return u==null?this.f=D.G():u},
aD:function(a){var u=this.f
if(u!=null)u.B(a)},
e9:function(){return this.aD(null)},
saN:function(a){var u,t,s=this
if(!J.I(s.b,a)){u=s.b
if(u!=null)u.gt().T(0,s.gck())
t=s.b
s.b=a
if(a!=null)a.gt().l(0,s.gck())
u=new D.x("mover",t,s.b)
u.b=!0
s.aD(u)}}}
X.hx.prototype={}
V.eG.prototype={
fF:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=this
if(l.c==null)return
u=l.d.length
t=P.jO().gbh().h(0,l.a)
if(t==null||t.length<=u){s=!0
r=!1}else{if(u>=t.length)return H.d(t,u)
r=t[u]==="1"
s=!1}c.$1(r)
q=document
p=q.createElement("label")
o=p.style
o.whiteSpace="nowrap"
J.k8(l.c).l(0,p)
n=W.lI("checkbox")
n.checked=r
W.U(n,"change",new V.eH(l,c,n,u),!1)
p.appendChild(n)
m=q.createElement("span")
m.textContent=b
p.appendChild(m)
J.k8(l.c).l(0,q.createElement("br"))
l.d.push(n)
if(s)l.cK(u,r)},
cK:function(a,b){var u,t,s,r,q,p=this.a,o=P.jO().gbh().h(0,p)
if(o==null)o=""
u=o.length
if(u<a)o=C.a.hm(o,a-u+1,"0")
t=a>0?C.a.q(o,0,a):""
t+=b?"1":"0"
u=a+1
if(u<o.length)t+=C.a.a3(o,u)
s=P.jO()
u=P.n
r=P.lQ(s.gbh(),u,u)
r.j(0,p,t)
q=s.dA(0,r)
p=window.history
u=q.i(0)
p.toString
p.replaceState(new P.iM([],[]).bj(""),"",u)}}
V.eH.prototype={
$1:function(a){var u=this,t=u.c
u.b.$1(t.checked)
u.a.cK(u.d,t.checked)}}
V.jo.prototype={
$1:function(a){var u=C.d.dF(this.a.gh5(),2)
if(u!=="0.00")P.k4(u+" fps")}}
V.hk.prototype={
dY:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.U(q,"scroll",new V.hm(o),!1)},
cN:function(a){var u,t,s,r,q,p,o,n
this.fu()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b,r=C.b.h9(a),s.toString,r=new H.L(r),r=new P.cj(s.dG(new H.bT(r,r.gk(r))).a());r.u();){s=r.gD(r)
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
if(H.nQ(s,"|",0)){p=s.split("|")
o=u.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.d(p,1)
o.href=p[1]
o.textContent=p[0]
t.appendChild(o)}else{n=P.iY(C.N,s,C.e,!1)
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
fG:function(a){var u,t,s,r,q,p="auto",o=document,n=o.createElement("table")
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
fu:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new L.hH()
t=P.n
u.a=new H.F([t,L.db])
u.b=new H.F([t,L.di])
u.c=P.kh(t)
u.d=u.N(0,q)
t=u.N(0,q).p(0,p)
s=K.Y(new H.L("*"))
t.a.push(s)
t.c=!0
t=u.N(0,p).p(0,p)
s=new K.aJ()
r=[K.cT]
s.a=H.c([],r)
t.a.push(s)
t=K.Y(new H.L("*"))
s.a.push(t)
t=u.N(0,p).p(0,"BoldEnd")
s=K.Y(new H.L("*"))
t.a.push(s)
t.c=!0
t=u.N(0,q).p(0,o)
s=K.Y(new H.L("_"))
t.a.push(s)
t.c=!0
t=u.N(0,o).p(0,o)
s=new K.aJ()
s.a=H.c([],r)
t.a.push(s)
t=K.Y(new H.L("_"))
s.a.push(t)
t=u.N(0,o).p(0,n)
s=K.Y(new H.L("_"))
t.a.push(s)
t.c=!0
t=u.N(0,q).p(0,m)
s=K.Y(new H.L("`"))
t.a.push(s)
t.c=!0
t=u.N(0,m).p(0,m)
s=new K.aJ()
s.a=H.c([],r)
t.a.push(s)
t=K.Y(new H.L("`"))
s.a.push(t)
t=u.N(0,m).p(0,"CodeEnd")
s=K.Y(new H.L("`"))
t.a.push(s)
t.c=!0
t=u.N(0,q).p(0,l)
s=K.Y(new H.L("["))
t.a.push(s)
t.c=!0
t=u.N(0,l).p(0,k)
s=K.Y(new H.L("|"))
t.a.push(s)
s=u.N(0,l).p(0,j)
t=K.Y(new H.L("]"))
s.a.push(t)
s.c=!0
s=u.N(0,l).p(0,l)
t=new K.aJ()
t.a=H.c([],r)
s.a.push(t)
s=K.Y(new H.L("|]"))
t.a.push(s)
s=u.N(0,k).p(0,j)
t=K.Y(new H.L("]"))
s.a.push(t)
s.c=!0
s=u.N(0,k).p(0,k)
t=new K.aJ()
t.a=H.c([],r)
s.a.push(t)
s=K.Y(new H.L("|]"))
t.a.push(s)
u.N(0,q).p(0,i).a.push(new K.er())
s=u.N(0,i).p(0,i)
t=new K.aJ()
t.a=H.c([],r)
s.a.push(t)
s=K.Y(new H.L("*_`["))
t.a.push(s)
s=u.N(0,"BoldEnd")
s.d=s.a.b0(p)
s=u.N(0,n)
s.d=s.a.b0(o)
s=u.N(0,"CodeEnd")
s.d=s.a.b0(m)
s=u.N(0,j)
s.d=s.a.b0("Link")
s=u.N(0,i)
s.d=s.a.b0(i)
this.b=u}}
V.hm.prototype={
$1:function(a){P.kA(C.m,new V.hl(this.a))}}
V.hl.prototype={
$0:function(){var u=C.d.ag(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
X.jl.prototype={
$1:function(a){var u,t=this.a,s=-this.b.c.d,r=Math.cos(s),q=Math.sin(s)
s=new V.aI(r,0,-q,0,1,0,q,0,r)
if(!J.I(t.z,s)){u=t.z
t.z=s
t.Q=s.bd(0)
s=new D.x("velocityRotation",u,t.z)
s.b=!0
t.J(s)}}}
X.jm.prototype={
$1:function(a){this.a.x.r=a}};(function aliases(){var u=J.a.prototype
u.dR=u.i
u=J.cP.prototype
u.dS=u.i
u=K.cL.prototype
u.dQ=u.aM
u.cb=u.i
u=O.bV.prototype
u.cc=u.aq
u=O.ap.prototype
u.cd=u.aq})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(J,"mV","lM",21)
t(P,"np","mv",7)
t(P,"nq","mw",7)
t(P,"nr","mx",7)
s(P,"kX","nn",9)
var m
r(m=E.aF.prototype,"gdn",0,0,null,["$1","$0"],["dq","hk"],0,0)
r(m,"gdr",0,0,null,["$1","$0"],["ds","hl"],0,0)
r(m,"gdl",0,0,null,["$1","$0"],["dm","hj"],0,0)
r(m,"gdj",0,0,null,["$1","$0"],["dk","hg"],0,0)
q(m,"ghe","hf",4)
q(m,"ghh","hi",4)
r(m=E.df.prototype,"gcf",0,0,null,["$1","$0"],["ci","cg"],0,0)
p(m,"ghA","dB",9)
o(m=X.cQ.prototype,"ge0","e1",18)
q(m,"gdZ","e_",10)
q(m,"ge2","e3",10)
o(m,"gbn","bo",1)
o(m,"gbz","bA",1)
o(m=X.dp.prototype,"geT","eU",5)
o(m,"geH","eI",5)
o(m,"geN","eO",2)
o(m,"gbz","bA",11)
o(m,"gbn","bo",11)
o(m,"geZ","f_",2)
o(m,"gf2","f3",2)
o(m,"geR","eS",2)
o(m,"gf0","f1",2)
o(m,"geP","eQ",2)
o(m,"gf4","f5",19)
o(m,"gf6","f7",5)
o(m,"gfi","fj",6)
o(m,"gfe","ff",6)
o(m,"gfg","fh",6)
r(D.bj.prototype,"ge4",0,0,null,["$1","$0"],["ao","e5"],0,0)
r(m=D.cR.prototype,"gcA",0,0,null,["$1","$0"],["cB","eX"],0,0)
o(m,"gf8","f9",20)
q(m,"geB","eC",12)
q(m,"gfc","fd",12)
n(V.Q.prototype,"gk","c_",13)
n(V.B.prototype,"gk","c_",13)
r(m=U.bN.prototype,"gaA",0,0,null,["$1","$0"],["J","a6"],0,0)
q(m,"gez","eA",14)
q(m,"gfa","fb",14)
r(m=U.dq.prototype,"gaA",0,0,null,["$1","$0"],["J","a6"],0,0)
o(m,"ges","eu",1)
o(m,"gev","ew",1)
o(m,"gex","ey",1)
o(m,"geo","ep",1)
o(m,"geq","er",1)
o(m,"gfD","fE",1)
o(m,"gfB","fC",1)
o(m,"gfz","fA",1)
r(m=U.dr.prototype,"gaA",0,0,null,["$1","$0"],["J","a6"],0,0)
o(m,"geV","eW",1)
r(m=M.cH.prototype,"gaB",0,0,null,["$1","$0"],["aC","e6"],0,0)
q(m,"geJ","eK",4)
q(m,"geL","eM",4)
r(m=O.cU.prototype,"gb7",0,0,null,["$1","$0"],["X","by"],0,0)
r(m,"gfo",0,0,null,["$1","$0"],["cC","fp"],0,0)
q(m,"geD","eE",15)
q(m,"geF","eG",15)
r(O.bV.prototype,"gb7",0,0,null,["$1","$0"],["X","by"],0,0)
r(X.d0.prototype,"gck",0,0,null,["$1","$0"],["aD","e9"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.a_,null)
s(P.a_,[H.jF,J.a,J.a1,P.dK,P.h,H.bT,P.fg,H.cJ,H.hY,H.eN,H.hM,P.bk,H.bJ,H.e0,P.a3,H.fn,H.fp,H.fi,P.e6,P.bw,P.cj,P.du,P.dc,P.hv,P.dg,P.j0,P.iI,P.iD,P.dJ,P.v,P.iT,P.fw,P.eJ,P.j_,P.iZ,P.aD,P.a9,P.a7,P.aX,P.h1,P.da,P.dC,P.fb,P.r,P.O,P.b5,P.n,P.P,P.bx,P.i_,P.iJ,W.eR,W.eI,W.J,W.cK,P.iL,P.eb,P.iE,P.bt,K.er,K.cL,K.cT,K.hf,L.db,L.dh,L.di,L.hH,O.aE,O.bW,E.eC,E.aF,E.h7,E.df,Z.dt,Z.il,Z.cA,Z.bn,Z.aN,D.eF,D.bl,D.X,X.cB,X.aa,X.fl,X.ft,X.b2,X.fT,X.hI,X.dp,D.ez,D.bj,D.a2,D.h4,D.hp,V.M,V.aW,V.f3,V.aI,V.aq,V.ae,V.a0,V.c1,V.d4,V.Q,V.B,U.dq,U.dr,M.cH,A.cx,A.eu,A.W,A.cy,A.cE,A.d1,A.d9,A.fB,A.c6,A.c7,A.c9,A.ca,A.dl,A.hT,F.bm,F.bS,F.c0,F.hg,F.hh,F.hi,F.hj,F.cb,F.ib,F.ic,F.ig,F.ih,O.dd,O.bV,O.fC,T.hD,X.jw,X.hx,X.d0,V.eG,V.hk])
s(J.a,[J.fh,J.cO,J.cP,J.b_,J.bQ,J.b0,H.bY,H.b4,W.f,W.eq,W.bg,W.an,W.E,W.dw,W.ad,W.eV,W.eW,W.dy,W.cG,W.dA,W.eY,W.i,W.dD,W.ao,W.fd,W.dF,W.aG,W.fs,W.fN,W.dL,W.dM,W.as,W.dN,W.dQ,W.au,W.dU,W.dW,W.ax,W.dX,W.ay,W.e1,W.ai,W.e4,W.hG,W.aA,W.e7,W.hK,W.i4,W.ed,W.ef,W.eh,W.ej,W.el,P.aH,P.dH,P.aK,P.dS,P.h6,P.e2,P.aM,P.e9,P.ev,P.dv,P.d5,P.dZ])
s(J.cP,[J.h2,J.bv,J.b1])
t(J.jE,J.b_)
s(J.bQ,[J.cN,J.cM])
t(P.fr,P.dK)
s(P.fr,[H.dm,W.iu,W.it,P.f7])
t(H.L,H.dm)
s(P.h,[H.q,H.bU,H.im,P.ff])
t(H.f0,H.bU)
s(P.fg,[H.fx,H.io])
t(H.eO,H.eN)
s(P.bk,[H.fZ,H.fk,H.hX,H.eE,H.hd,P.d_,P.al,P.hZ,P.hV,P.hr,P.eL,P.eU])
s(H.bJ,[H.jq,H.hy,H.fj,H.jh,H.ji,H.jj,P.iq,P.ip,P.ir,P.is,P.iS,P.iR,P.j9,P.iG,P.iH,P.fq,P.fv,P.eZ,P.f_,P.i3,P.i0,P.i1,P.i2,P.iU,P.iV,P.iX,P.iW,P.j4,P.j3,P.j5,P.j6,W.fP,W.fR,W.hc,W.hu,W.iy,P.iN,P.iO,P.ja,P.f8,P.f9,P.ex,E.h8,E.h9,E.ha,E.hF,D.f4,D.f5,F.j1,F.je,F.jf,F.ij,F.ii,F.id,F.ie,O.fF,O.fG,O.fH,O.fI,O.fJ,O.fK,O.fL,O.fM,T.hE,V.eH,V.jo,V.hm,V.hl,X.jl,X.jm])
s(H.hy,[H.hs,H.bH])
t(P.fu,P.a3)
t(H.F,P.fu)
t(H.fo,H.q)
t(H.cW,H.b4)
s(H.cW,[H.cd,H.cf])
t(H.ce,H.cd)
t(H.bZ,H.ce)
t(H.cg,H.cf)
t(H.cX,H.cg)
s(H.cX,[H.fU,H.fV,H.fW,H.fX,H.fY,H.cY,H.c_])
t(P.iQ,P.ff)
t(P.iF,P.j0)
t(P.iC,P.iI)
t(P.ec,P.fw)
t(P.dn,P.ec)
s(P.eJ,[P.eA,P.f1])
t(P.eP,P.hv)
s(P.eP,[P.eB,P.i7,P.i6])
t(P.i5,P.f1)
s(P.a7,[P.H,P.t])
s(P.al,[P.br,P.fe])
t(P.iw,P.bx)
s(W.f,[W.A,W.f6,W.bX,W.aw,W.ch,W.az,W.aj,W.ck,W.ik,W.cc,P.ey,P.bf])
s(W.A,[W.T,W.aV])
s(W.T,[W.l,P.k])
s(W.l,[W.es,W.et,W.bh,W.fa,W.bP,W.he])
t(W.eQ,W.an)
t(W.bL,W.dw)
s(W.ad,[W.eS,W.eT])
t(W.dz,W.dy)
t(W.cF,W.dz)
t(W.dB,W.dA)
t(W.eX,W.dB)
t(W.ah,W.bg)
t(W.dE,W.dD)
t(W.bM,W.dE)
t(W.dG,W.dF)
t(W.bO,W.dG)
t(W.b7,W.i)
s(W.b7,[W.bp,W.at,W.bs])
t(W.fO,W.dL)
t(W.fQ,W.dM)
t(W.dO,W.dN)
t(W.fS,W.dO)
t(W.dR,W.dQ)
t(W.cZ,W.dR)
t(W.dV,W.dU)
t(W.h3,W.dV)
t(W.hb,W.dW)
t(W.ci,W.ch)
t(W.hn,W.ci)
t(W.dY,W.dX)
t(W.ho,W.dY)
t(W.ht,W.e1)
t(W.e5,W.e4)
t(W.hz,W.e5)
t(W.cl,W.ck)
t(W.hA,W.cl)
t(W.e8,W.e7)
t(W.hJ,W.e8)
t(W.b9,W.at)
t(W.ee,W.ed)
t(W.iv,W.ee)
t(W.dx,W.cG)
t(W.eg,W.ef)
t(W.iz,W.eg)
t(W.ei,W.eh)
t(W.dP,W.ei)
t(W.ek,W.ej)
t(W.iK,W.ek)
t(W.em,W.el)
t(W.iP,W.em)
t(W.ix,P.dc)
t(P.iM,P.iL)
t(P.a5,P.iE)
t(P.dI,P.dH)
t(P.fm,P.dI)
t(P.dT,P.dS)
t(P.h_,P.dT)
t(P.e3,P.e2)
t(P.hw,P.e3)
t(P.ea,P.e9)
t(P.hL,P.ea)
t(P.ew,P.dv)
t(P.h0,P.bf)
t(P.e_,P.dZ)
t(P.hq,P.e_)
s(K.cL,[K.aJ,L.dk])
s(E.eC,[Z.cz,A.d7,T.de])
s(D.X,[D.aY,D.aZ,D.x,X.bo,X.h5])
s(O.aE,[X.cQ,D.cR,U.bN])
s(X.h5,[X.cS,X.b3,X.dj])
s(D.eF,[U.eK,U.a4])
s(U.a4,[U.bK,U.d6])
t(A.fy,A.d7)
s(A.dl,[A.b8,A.hQ,A.hR,A.hS,A.hO,A.S,A.hP,A.D,A.c5,A.hU,A.c8,A.ab,A.Z,A.bu])
t(O.cU,O.dd)
s(O.bV,[O.fz,O.fA,O.ap])
s(O.ap,[O.fD,O.fE])
t(T.hB,T.de)
t(T.hC,T.hB)
t(X.fc,X.hx)
u(H.dm,H.hY)
u(H.cd,P.v)
u(H.ce,H.cJ)
u(H.cf,P.v)
u(H.cg,H.cJ)
u(P.dK,P.v)
u(P.ec,P.iT)
u(W.dw,W.eR)
u(W.dy,P.v)
u(W.dz,W.J)
u(W.dA,P.v)
u(W.dB,W.J)
u(W.dD,P.v)
u(W.dE,W.J)
u(W.dF,P.v)
u(W.dG,W.J)
u(W.dL,P.a3)
u(W.dM,P.a3)
u(W.dN,P.v)
u(W.dO,W.J)
u(W.dQ,P.v)
u(W.dR,W.J)
u(W.dU,P.v)
u(W.dV,W.J)
u(W.dW,P.a3)
u(W.ch,P.v)
u(W.ci,W.J)
u(W.dX,P.v)
u(W.dY,W.J)
u(W.e1,P.a3)
u(W.e4,P.v)
u(W.e5,W.J)
u(W.ck,P.v)
u(W.cl,W.J)
u(W.e7,P.v)
u(W.e8,W.J)
u(W.ed,P.v)
u(W.ee,W.J)
u(W.ef,P.v)
u(W.eg,W.J)
u(W.eh,P.v)
u(W.ei,W.J)
u(W.ej,P.v)
u(W.ek,W.J)
u(W.el,P.v)
u(W.em,W.J)
u(P.dH,P.v)
u(P.dI,W.J)
u(P.dS,P.v)
u(P.dT,W.J)
u(P.e2,P.v)
u(P.e3,W.J)
u(P.e9,P.v)
u(P.ea,W.J)
u(P.dv,P.a3)
u(P.dZ,P.v)
u(P.e_,W.J)})()
var v={mangledGlobalNames:{t:"int",H:"double",a7:"num",n:"String",aD:"bool",b5:"Null",r:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.X]},{func:1,ret:-1,args:[D.X]},{func:1,ret:-1,args:[W.at]},{func:1,ret:P.b5,args:[,,]},{func:1,ret:-1,args:[P.t,[P.h,E.aF]]},{func:1,ret:-1,args:[W.i]},{func:1,ret:-1,args:[W.bs]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:-1},{func:1,ret:-1,args:[P.t,[P.h,X.aa]]},{func:1,ret:-1,args:[W.bp]},{func:1,ret:-1,args:[P.t,[P.h,D.a2]]},{func:1,ret:P.H},{func:1,ret:-1,args:[P.t,[P.h,U.a4]]},{func:1,ret:-1,args:[P.t,[P.h,V.aq]]},{func:1,ret:P.b5,args:[,]},{func:1,ret:P.bt,args:[,,]},{func:1,ret:P.aD,args:[[P.h,X.aa]]},{func:1,ret:-1,args:[W.b9]},{func:1,ret:P.aD,args:[[P.h,D.a2]]},{func:1,ret:P.t,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.i=W.bh.prototype
C.I=J.a.prototype
C.b=J.b_.prototype
C.J=J.cM.prototype
C.c=J.cN.prototype
C.n=J.cO.prototype
C.d=J.bQ.prototype
C.a=J.b0.prototype
C.K=J.b1.prototype
C.v=J.h2.prototype
C.Q=P.d5.prototype
C.o=J.bv.prototype
C.w=W.b9.prototype
C.x=W.cc.prototype
C.S=new P.eB()
C.y=new P.eA()
C.p=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.z=function() {
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
C.E=function(getTagFallback) {
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
C.A=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.B=function(hooks) {
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
C.D=function(hooks) {
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
C.C=function(hooks) {
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
C.q=function(hooks) { return hooks; }

C.F=new P.h1()
C.e=new P.i5()
C.G=new P.i7()
C.f=new P.iF()
C.m=new P.aX(0)
C.H=new P.aX(5e6)
C.r=H.c(u([127,2047,65535,1114111]),[P.t])
C.j=H.c(u([0,0,32776,33792,1,10240,0,0]),[P.t])
C.k=H.c(u([0,0,65490,45055,65535,34815,65534,18431]),[P.t])
C.l=H.c(u([0,0,26624,1023,65534,2047,65534,2047]),[P.t])
C.M=H.c(u([0,0,32722,12287,65534,34815,65534,18431]),[P.t])
C.N=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.t])
C.h=H.c(u([0,0,24576,1023,65534,34815,65534,18431]),[P.t])
C.t=H.c(u([0,0,32754,11263,65534,34815,65534,18431]),[P.t])
C.O=H.c(u([0,0,32722,12287,65535,34815,65534,18431]),[P.t])
C.u=H.c(u([0,0,65490,12287,65535,34815,65534,18431]),[P.t])
C.L=H.c(u([]),[P.n])
C.P=new H.eO(0,{},C.L,[P.n,P.n])
C.R=new P.bw(null,2)})();(function staticFields(){$.am=0
$.bI=null
$.ka=null
$.l_=null
$.kW=null
$.l3=null
$.jb=null
$.jk=null
$.k1=null
$.bA=null
$.co=null
$.cp=null
$.jX=!1
$.ak=C.f
$.a6=[]
$.kj=null
$.kn=null
$.kq=null
$.av=null
$.kw=null
$.kG=null
$.kI=null
$.i8=null
$.i9=null
$.ia=null
$.kH=null
$.kp=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"nW","l9",function(){return H.kY("_$dart_dartClosure")})
u($,"nX","k5",function(){return H.kY("_$dart_js")})
u($,"nY","la",function(){return H.aB(H.hN({
toString:function(){return"$receiver$"}}))})
u($,"nZ","lb",function(){return H.aB(H.hN({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"o_","lc",function(){return H.aB(H.hN(null))})
u($,"o0","ld",function(){return H.aB(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"o3","lg",function(){return H.aB(H.hN(void 0))})
u($,"o4","lh",function(){return H.aB(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"o2","lf",function(){return H.aB(H.kC(null))})
u($,"o1","le",function(){return H.aB(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"o6","lj",function(){return H.aB(H.kC(void 0))})
u($,"o5","li",function(){return H.aB(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"ok","k6",function(){return P.mu()})
u($,"o7","lk",function(){return P.mp()})
u($,"ol","lo",function(){return H.lY(H.bz(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.t])))})
u($,"on","lp",function(){return P.mb("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"oo","lq",function(){return P.mT()})
u($,"oe","ln",function(){return Z.af(0)})
u($,"o8","ll",function(){return Z.af(511)})
u($,"og","aS",function(){return Z.af(1)})
u($,"of","aR",function(){return Z.af(2)})
u($,"oa","aQ",function(){return Z.af(4)})
u($,"oh","aT",function(){return Z.af(8)})
u($,"oi","be",function(){return Z.af(16)})
u($,"ob","cs",function(){return Z.af(32)})
u($,"oc","ct",function(){return Z.af(64)})
u($,"od","lm",function(){return Z.af(96)})
u($,"oj","bF",function(){return Z.af(128)})
u($,"o9","aP",function(){return Z.af(256)})
u($,"nV","l8",function(){return new V.f3(1e-9)})
u($,"nU","y",function(){return $.l8()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bY,DataView:H.b4,ArrayBufferView:H.b4,Float32Array:H.bZ,Float64Array:H.bZ,Int16Array:H.fU,Int32Array:H.fV,Int8Array:H.fW,Uint16Array:H.fX,Uint32Array:H.fY,Uint8ClampedArray:H.cY,CanvasPixelArray:H.cY,Uint8Array:H.c_,HTMLAudioElement:W.l,HTMLBRElement:W.l,HTMLBaseElement:W.l,HTMLBodyElement:W.l,HTMLButtonElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLDivElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLInputElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMediaElement:W.l,HTMLMenuElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTableElement:W.l,HTMLTableRowElement:W.l,HTMLTableSectionElement:W.l,HTMLTemplateElement:W.l,HTMLTextAreaElement:W.l,HTMLTimeElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLVideoElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLFrameSetElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,AccessibleNodeList:W.eq,HTMLAnchorElement:W.es,HTMLAreaElement:W.et,Blob:W.bg,HTMLCanvasElement:W.bh,CDATASection:W.aV,CharacterData:W.aV,Comment:W.aV,ProcessingInstruction:W.aV,Text:W.aV,CSSPerspective:W.eQ,CSSCharsetRule:W.E,CSSConditionRule:W.E,CSSFontFaceRule:W.E,CSSGroupingRule:W.E,CSSImportRule:W.E,CSSKeyframeRule:W.E,MozCSSKeyframeRule:W.E,WebKitCSSKeyframeRule:W.E,CSSKeyframesRule:W.E,MozCSSKeyframesRule:W.E,WebKitCSSKeyframesRule:W.E,CSSMediaRule:W.E,CSSNamespaceRule:W.E,CSSPageRule:W.E,CSSRule:W.E,CSSStyleRule:W.E,CSSSupportsRule:W.E,CSSViewportRule:W.E,CSSStyleDeclaration:W.bL,MSStyleCSSProperties:W.bL,CSS2Properties:W.bL,CSSImageValue:W.ad,CSSKeywordValue:W.ad,CSSNumericValue:W.ad,CSSPositionValue:W.ad,CSSResourceValue:W.ad,CSSUnitValue:W.ad,CSSURLImageValue:W.ad,CSSStyleValue:W.ad,CSSMatrixComponent:W.an,CSSRotation:W.an,CSSScale:W.an,CSSSkew:W.an,CSSTranslation:W.an,CSSTransformComponent:W.an,CSSTransformValue:W.eS,CSSUnparsedValue:W.eT,DataTransferItemList:W.eV,DOMException:W.eW,ClientRectList:W.cF,DOMRectList:W.cF,DOMRectReadOnly:W.cG,DOMStringList:W.eX,DOMTokenList:W.eY,Element:W.T,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.ah,FileList:W.bM,FileWriter:W.f6,HTMLFormElement:W.fa,Gamepad:W.ao,History:W.fd,HTMLCollection:W.bO,HTMLFormControlsCollection:W.bO,HTMLOptionsCollection:W.bO,ImageData:W.aG,HTMLImageElement:W.bP,KeyboardEvent:W.bp,Location:W.fs,MediaList:W.fN,MessagePort:W.bX,MIDIInputMap:W.fO,MIDIOutputMap:W.fQ,MimeType:W.as,MimeTypeArray:W.fS,PointerEvent:W.at,MouseEvent:W.at,DragEvent:W.at,Document:W.A,DocumentFragment:W.A,HTMLDocument:W.A,ShadowRoot:W.A,XMLDocument:W.A,Attr:W.A,DocumentType:W.A,Node:W.A,NodeList:W.cZ,RadioNodeList:W.cZ,Plugin:W.au,PluginArray:W.h3,RTCStatsReport:W.hb,HTMLSelectElement:W.he,SourceBuffer:W.aw,SourceBufferList:W.hn,SpeechGrammar:W.ax,SpeechGrammarList:W.ho,SpeechRecognitionResult:W.ay,Storage:W.ht,CSSStyleSheet:W.ai,StyleSheet:W.ai,TextTrack:W.az,TextTrackCue:W.aj,VTTCue:W.aj,TextTrackCueList:W.hz,TextTrackList:W.hA,TimeRanges:W.hG,Touch:W.aA,TouchEvent:W.bs,TouchList:W.hJ,TrackDefaultList:W.hK,CompositionEvent:W.b7,FocusEvent:W.b7,TextEvent:W.b7,UIEvent:W.b7,URL:W.i4,VideoTrackList:W.ik,WheelEvent:W.b9,Window:W.cc,DOMWindow:W.cc,CSSRuleList:W.iv,ClientRect:W.dx,DOMRect:W.dx,GamepadList:W.iz,NamedNodeMap:W.dP,MozNamedAttrMap:W.dP,SpeechRecognitionResultList:W.iK,StyleSheetList:W.iP,SVGLength:P.aH,SVGLengthList:P.fm,SVGNumber:P.aK,SVGNumberList:P.h_,SVGPointList:P.h6,SVGStringList:P.hw,SVGAElement:P.k,SVGAnimateElement:P.k,SVGAnimateMotionElement:P.k,SVGAnimateTransformElement:P.k,SVGAnimationElement:P.k,SVGCircleElement:P.k,SVGClipPathElement:P.k,SVGDefsElement:P.k,SVGDescElement:P.k,SVGDiscardElement:P.k,SVGEllipseElement:P.k,SVGFEBlendElement:P.k,SVGFEColorMatrixElement:P.k,SVGFEComponentTransferElement:P.k,SVGFECompositeElement:P.k,SVGFEConvolveMatrixElement:P.k,SVGFEDiffuseLightingElement:P.k,SVGFEDisplacementMapElement:P.k,SVGFEDistantLightElement:P.k,SVGFEFloodElement:P.k,SVGFEFuncAElement:P.k,SVGFEFuncBElement:P.k,SVGFEFuncGElement:P.k,SVGFEFuncRElement:P.k,SVGFEGaussianBlurElement:P.k,SVGFEImageElement:P.k,SVGFEMergeElement:P.k,SVGFEMergeNodeElement:P.k,SVGFEMorphologyElement:P.k,SVGFEOffsetElement:P.k,SVGFEPointLightElement:P.k,SVGFESpecularLightingElement:P.k,SVGFESpotLightElement:P.k,SVGFETileElement:P.k,SVGFETurbulenceElement:P.k,SVGFilterElement:P.k,SVGForeignObjectElement:P.k,SVGGElement:P.k,SVGGeometryElement:P.k,SVGGraphicsElement:P.k,SVGImageElement:P.k,SVGLineElement:P.k,SVGLinearGradientElement:P.k,SVGMarkerElement:P.k,SVGMaskElement:P.k,SVGMetadataElement:P.k,SVGPathElement:P.k,SVGPatternElement:P.k,SVGPolygonElement:P.k,SVGPolylineElement:P.k,SVGRadialGradientElement:P.k,SVGRectElement:P.k,SVGScriptElement:P.k,SVGSetElement:P.k,SVGStopElement:P.k,SVGStyleElement:P.k,SVGElement:P.k,SVGSVGElement:P.k,SVGSwitchElement:P.k,SVGSymbolElement:P.k,SVGTSpanElement:P.k,SVGTextContentElement:P.k,SVGTextElement:P.k,SVGTextPathElement:P.k,SVGTextPositioningElement:P.k,SVGTitleElement:P.k,SVGUseElement:P.k,SVGViewElement:P.k,SVGGradientElement:P.k,SVGComponentTransferFunctionElement:P.k,SVGFEDropShadowElement:P.k,SVGMPathElement:P.k,SVGTransform:P.aM,SVGTransformList:P.hL,AudioBuffer:P.ev,AudioParamMap:P.ew,AudioTrackList:P.ey,AudioContext:P.bf,webkitAudioContext:P.bf,BaseAudioContext:P.bf,OfflineAudioContext:P.h0,WebGL2RenderingContext:P.d5,SQLResultSetRowList:P.hq})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.cW.$nativeSuperclassTag="ArrayBufferView"
H.cd.$nativeSuperclassTag="ArrayBufferView"
H.ce.$nativeSuperclassTag="ArrayBufferView"
H.bZ.$nativeSuperclassTag="ArrayBufferView"
H.cf.$nativeSuperclassTag="ArrayBufferView"
H.cg.$nativeSuperclassTag="ArrayBufferView"
H.cX.$nativeSuperclassTag="ArrayBufferView"
W.ch.$nativeSuperclassTag="EventTarget"
W.ci.$nativeSuperclassTag="EventTarget"
W.ck.$nativeSuperclassTag="EventTarget"
W.cl.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(X.l1,[])
else X.l1([])})})()
//# sourceMappingURL=test.dart.js.map
