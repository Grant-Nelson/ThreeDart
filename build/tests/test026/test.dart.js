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
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kW"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kW"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kW(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={kC:function kC(){},
k4:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
nb:function(a,b,c,d){if(!!J.O(a).$ir)return new H.fj(a,b,[c,d])
return new H.c4(a,b,[c,d])},
fF:function(){return new P.cg("No element")},
n0:function(){return new P.cg("Too many elements")},
nz:function(a,b){var u=J.ag(a)
if(typeof u!=="number")return u.M()
H.dr(a,0,u-1,b)},
dr:function(a,b,c,d){if(c-b<=32)H.ny(a,b,c,d)
else H.nx(a,b,c,d)},
ny:function(a,b,c,d){var u,t,s,r,q,p
for(u=b+1,t=J.bk(a);u<=c;++u){s=t.h(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.h(a,r-1),s)
if(typeof q!=="number")return q.a1()
q=q>0}else q=!1
if(!q)break
p=r-1
t.l(a,r,t.h(a,p))
r=p}t.l(a,r,s)}},
nx:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j=C.c.a4(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.a4(a4+a5,2),f=g-j,e=g+j,d=J.bk(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
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
H.dr(a3,a4,t-2,a6)
H.dr(a3,s+2,a5,a6)
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
break}}H.dr(a3,t,s,a6)}else H.dr(a3,t,s,a6)},
n:function n(a){this.a=a},
r:function r(){},
d9:function d9(){},
b8:function b8(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c4:function c4(a,b,c){this.a=a
this.b=b
this.$ti=c},
fj:function fj(a,b,c){this.a=a
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
j3:function j3(a,b){this.a=a
this.b=b},
d0:function d0(){},
iD:function iD(){},
dH:function dH(){},
mT:function(){throw H.c(P.y("Cannot modify unmodifiable Map"))},
cI:function(a){var u,t=H.pd(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
oW:function(a){return v.types[a]},
md:function(a,b){var u
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
cd:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
np:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
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
ce:function(a){return H.ng(a)+H.m0(H.cH(a),0,null)},
ng:function(a){var u,t,s,r,q,p,o,n=J.O(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.Q||!!n.$ibE){r=C.r(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cI(t.length>1&&C.a.E(t,0)===36?C.a.a6(t,1):t)},
nh:function(){if(!!self.location)return self.location.href
return},
lw:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
nq:function(a){var u,t,s,r=H.b([],[P.v])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.m)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ae(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.aN(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.c(H.ae(s))}return H.lw(r)},
lx:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ae(s))
if(s<0)throw H.c(H.ae(s))
if(s>65535)return H.nq(a)}return H.lw(a)},
nr:function(a,b,c){var u,t,s,r
if(typeof c!=="number")return c.ip()
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
no:function(a){var u=H.by(a).getFullYear()+0
return u},
nm:function(a){var u=H.by(a).getMonth()+1
return u},
ni:function(a){var u=H.by(a).getDate()+0
return u},
nj:function(a){var u=H.by(a).getHours()+0
return u},
nl:function(a){var u=H.by(a).getMinutes()+0
return u},
nn:function(a){var u=H.by(a).getSeconds()+0
return u},
nk:function(a){var u=H.by(a).getMilliseconds()+0
return u},
w:function(a){throw H.c(H.ae(a))},
d:function(a,b){if(a==null)J.ag(a)
throw H.c(H.bN(a,b))},
bN:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aj(!0,b,s,null)
u=J.ag(a)
if(!(b<0)){if(typeof u!=="number")return H.w(u)
t=b>=u}else t=!0
if(t)return P.L(b,a,s,null,u)
return P.dl(b,s)},
oQ:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bA(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bA(a,c,!0,b,"end",u)
return new P.aj(!0,b,"end",null)},
ae:function(a){return new P.aj(!0,a,null,null)},
oL:function(a){if(typeof a!=="number")throw H.c(H.ae(a))
return a},
c:function(a){var u
if(a==null)a=new P.di()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.mi})
u.name=""}else u.toString=H.mi
return u},
mi:function(){return J.a4(this.dartException)},
q:function(a){throw H.c(a)},
m:function(a){throw H.c(P.aL(a))},
aF:function(a){var u,t,s,r,q,p
a=H.mh(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iq(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
ir:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
lH:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
ls:function(a,b){return new H.ht(a,b==null?null:b.method)},
kD:function(a,b){var u=b==null,t=u?null:b.method
return new H.fK(a,t,u?null:b.receiver)},
af:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.ko(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.aN(t,16)&8191)===10)switch(s){case 438:return f.$1(H.kD(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.ls(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.mm()
q=$.mn()
p=$.mo()
o=$.mp()
n=$.ms()
m=$.mt()
l=$.mr()
$.mq()
k=$.mv()
j=$.mu()
i=r.ad(u)
if(i!=null)return f.$1(H.kD(u,i))
else{i=q.ad(u)
if(i!=null){i.method="call"
return f.$1(H.kD(u,i))}else{i=p.ad(u)
if(i==null){i=o.ad(u)
if(i==null){i=n.ad(u)
if(i==null){i=m.ad(u)
if(i==null){i=l.ad(u)
if(i==null){i=o.ad(u)
if(i==null){i=k.ad(u)
if(i==null){i=j.ad(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.ls(u,i))}}return f.$1(new H.iC(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dt()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aj(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dt()
return a},
kZ:function(a){var u
if(a==null)return new H.ek(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.ek(a)},
oU:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.l(0,a[u],a[t])}return b},
p1:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.u("Unsupported number of arguments for wrapped closure"))},
bM:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.p1)
a.$identity=u
return u},
mS:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.i1().constructor.prototype):Object.create(new H.bS(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aq
if(typeof t!=="number")return t.A()
$.aq=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.lf(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.mO(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.lf(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
mO:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.oW,a)
if(typeof a=="function")if(b)return a
else{u=c?H.le:H.ks
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.c("Error in functionType of tearoff")},
mP:function(a,b,c,d){var u=H.ks
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lf:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mR(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mP(t,!r,u,b)
if(t===0){r=$.aq
if(typeof r!=="number")return r.A()
$.aq=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bT
return new Function(r+H.e(q==null?$.bT=H.eZ("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aq
if(typeof r!=="number")return r.A()
$.aq=r+1
o+=r
r="return function("+o+"){return this."
q=$.bT
return new Function(r+H.e(q==null?$.bT=H.eZ("self"):q)+"."+H.e(u)+"("+o+");}")()},
mQ:function(a,b,c,d){var u=H.ks,t=H.le
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
mR:function(a,b){var u,t,s,r,q,p,o,n=$.bT
if(n==null)n=$.bT=H.eZ("self")
u=$.ld
if(u==null)u=$.ld=H.eZ("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.mQ(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.aq
if(typeof u!=="number")return u.A()
$.aq=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.aq
if(typeof u!=="number")return u.A()
$.aq=u+1
return new Function(n+u+"}")()},
kW:function(a,b,c,d,e,f,g){return H.mS(a,b,c,d,!!e,!!f,g)},
ks:function(a){return a.a},
le:function(a){return a.c},
eZ:function(a){var u,t,s,r=new H.bS("self","target","receiver","name"),q=J.kA(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
p6:function(a,b){throw H.c(H.mN(a,H.cI(b.substring(2))))},
l:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.O(a)[b]
else u=!0
if(u)return a
H.p6(a,b)},
oS:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
mN:function(a,b){return new H.f_("CastError: "+P.ky(a)+": type '"+H.e(H.oH(a))+"' is not a subtype of type '"+b+"'")},
oH:function(a){var u,t=J.O(a)
if(!!t.$ibU){u=H.oS(t)
if(u!=null)return H.p7(u)
return"Closure"}return H.ce(a)},
pc:function(a){throw H.c(new P.fb(a))},
nv:function(a){return new H.hM(a)},
mb:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
cH:function(a){if(a==null)return
return a.$ti},
pN:function(a,b,c){return H.km(a["$a"+H.e(c)],H.cH(b))},
oV:function(a,b,c,d){var u=H.km(a["$a"+H.e(c)],H.cH(b))
return u==null?null:u[d]},
kY:function(a,b,c){var u=H.km(a["$a"+H.e(b)],H.cH(a))
return u==null?null:u[c]},
aI:function(a,b){var u=H.cH(a)
return u==null?null:u[b]},
p7:function(a){return H.bj(a,null)},
bj:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cI(a[0].name)+H.m0(a,1,b)
if(typeof a=="function")return H.cI(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.e(b[t])}if('func' in a)return H.oc(a,b)
if('futureOr' in a)return"FutureOr<"+H.bj("type" in a?a.type:null,b)+">"
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
p=C.a.A(p,a0[m])
l=u[q]
if(l!=null&&l!==P.a2)p+=" extends "+H.bj(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bj(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bj(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bj(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.oT(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.bj(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
m0:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.R("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bj(p,c)}return"<"+u.i(0)+">"},
km:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
pL:function(a,b,c){return a.apply(b,H.km(J.O(b)["$a"+H.e(c)],H.cH(b)))},
pM:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
p3:function(a){var u,t,s,r,q=$.mc.$1(a),p=$.k2[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.k8[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.m5.$2(a,q)
if(q!=null){p=$.k2[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.k8[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.ki(u)
$.k2[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.k8[q]=u
return u}if(s==="-"){r=H.ki(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.mf(a,u)
if(s==="*")throw H.c(P.iB(q))
if(v.leafTags[q]===true){r=H.ki(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.mf(a,u)},
mf:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.l0(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
ki:function(a){return J.l0(a,!1,null,!!a.$iB)},
p4:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.ki(u)
else return J.l0(u,c,null,null)},
p_:function(){if(!0===$.l_)return
$.l_=!0
H.p0()},
p0:function(){var u,t,s,r,q,p,o,n
$.k2=Object.create(null)
$.k8=Object.create(null)
H.oZ()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.mg.$1(q)
if(p!=null){o=H.p4(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
oZ:function(){var u,t,s,r,q,p,o=C.F()
o=H.bL(C.G,H.bL(C.H,H.bL(C.t,H.bL(C.t,H.bL(C.I,H.bL(C.J,H.bL(C.K(C.r),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.mc=new H.k5(r)
$.m5=new H.k6(q)
$.mg=new H.k7(p)},
bL:function(a,b){return a(b)||b},
n4:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.c(P.S("Illegal RegExp pattern ("+String(p)+")",a,null))},
pa:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
oR:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mh:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
l3:function(a,b,c){var u=H.pb(a,b,c)
return u},
pb:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.mh(b),'g'),H.oR(c))},
f4:function f4(){},
f5:function f5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iq:function iq(a,b,c,d,e,f){var _=this
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
iC:function iC(a){this.a=a},
ko:function ko(a){this.a=a},
ek:function ek(a){this.a=a
this.b=null},
bU:function bU(){},
i9:function i9(){},
i1:function i1(){},
bS:function bS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f_:function f_(a){this.a=a},
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
k5:function k5(a){this.a=a},
k6:function k6(a){this.a=a},
k7:function k7(a){this.a=a},
fI:function fI(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bJ:function(a){return a},
nf:function(a){return new Int8Array(a)},
aG:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bN(b,a))},
oa:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.oQ(a,b,c))
return b},
c9:function c9(){},
bb:function bb(){},
dd:function dd(){},
ca:function ca(){},
de:function de(){},
hl:function hl(){},
hm:function hm(){},
hn:function hn(){},
ho:function ho(){},
hp:function hp(){},
df:function df(){},
cb:function cb(){},
cu:function cu(){},
cv:function cv(){},
cw:function cw(){},
cx:function cx(){},
oT:function(a){return J.lm(a?Object.keys(a):[],null)},
pd:function(a){return v.mangledGlobalNames[a]},
p5:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
l0:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
k3:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.l_==null){H.p_()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.iB("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.l5()]
if(r!=null)return r
r=H.p3(a)
if(r!=null)return r
if(typeof a=="function")return C.S
u=Object.getPrototypeOf(a)
if(u==null)return C.A
if(u===Object.prototype)return C.A
if(typeof s=="function"){Object.defineProperty(s,$.l5(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
n1:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.kr(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.Z(a,0,4294967295,"length",null))
return J.lm(new Array(a),b)},
lm:function(a,b){return J.kA(H.b(a,[b]))},
kA:function(a){a.fixed$length=Array
return a},
n2:function(a,b){return J.cL(a,b)},
O:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d4.prototype
return J.d3.prototype}if(typeof a=="string")return J.b6.prototype
if(a==null)return J.d5.prototype
if(typeof a=="boolean")return J.fH.prototype
if(a.constructor==Array)return J.b5.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b7.prototype
return a}if(a instanceof P.a2)return a
return J.k3(a)},
bk:function(a){if(typeof a=="string")return J.b6.prototype
if(a==null)return a
if(a.constructor==Array)return J.b5.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b7.prototype
return a}if(a instanceof P.a2)return a
return J.k3(a)},
eJ:function(a){if(a==null)return a
if(a.constructor==Array)return J.b5.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b7.prototype
return a}if(a instanceof P.a2)return a
return J.k3(a)},
ma:function(a){if(typeof a=="number")return J.c1.prototype
if(typeof a=="string")return J.b6.prototype
if(a==null)return a
if(!(a instanceof P.a2))return J.bE.prototype
return a},
cG:function(a){if(typeof a=="string")return J.b6.prototype
if(a==null)return a
if(!(a instanceof P.a2))return J.bE.prototype
return a},
bP:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b7.prototype
return a}if(a instanceof P.a2)return a
return J.k3(a)},
D:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.O(a).p(a,b)},
l7:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.ma(a).B(a,b)},
bR:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.md(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bk(a).h(a,b)},
kq:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.md(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.eJ(a).l(a,b,c)},
mE:function(a,b){return J.cG(a).E(a,b)},
mF:function(a,b,c){return J.bP(a).fN(a,b,c)},
mG:function(a,b,c,d){return J.bP(a).h6(a,b,c,d)},
mH:function(a,b){return J.cG(a).W(a,b)},
cL:function(a,b){return J.ma(a).aP(a,b)},
eM:function(a,b){return J.eJ(a).I(a,b)},
mI:function(a,b,c,d){return J.bP(a).hx(a,b,c,d)},
l8:function(a,b){return J.eJ(a).F(a,b)},
mJ:function(a){return J.bP(a).ghd(a)},
l9:function(a){return J.bP(a).gbT(a)},
cM:function(a){return J.O(a).gH(a)},
aJ:function(a){return J.eJ(a).gU(a)},
ag:function(a){return J.bk(a).gm(a)},
la:function(a){return J.eJ(a).i3(a)},
mK:function(a,b){return J.bP(a).i7(a,b)},
mL:function(a,b,c){return J.cG(a).q(a,b,c)},
mM:function(a){return J.cG(a).ii(a)},
a4:function(a){return J.O(a).i(a)},
a:function a(){},
fH:function fH(){},
d5:function d5(){},
d6:function d6(){},
hx:function hx(){},
bE:function bE(){},
b7:function b7(){},
b5:function b5(a){this.$ti=a},
kB:function kB(a){this.$ti=a},
ab:function ab(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c1:function c1(){},
d4:function d4(){},
d3:function d3(){},
b6:function b6(){}},P={
nL:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.oI()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bM(new P.j5(s),1)).observe(u,{childList:true})
return new P.j4(s,u,t)}else if(self.setImmediate!=null)return P.oJ()
return P.oK()},
nM:function(a){self.scheduleImmediate(H.bM(new P.j6(a),0))},
nN:function(a){self.setImmediate(H.bM(new P.j7(a),0))},
nO:function(a){P.kJ(C.m,a)},
kJ:function(a,b){var u=C.c.a4(a.a,1000)
return P.nV(u<0?0:u,b)},
lG:function(a,b){var u=C.c.a4(a.a,1000)
return P.nW(u<0?0:u,b)},
nV:function(a,b){var u=new P.eq()
u.ep(a,b)
return u},
nW:function(a,b){var u=new P.eq()
u.eq(a,b)
return u},
pI:function(a){return new P.bF(a,1)},
nR:function(){return C.Z},
nS:function(a){return new P.bF(a,3)},
of:function(a,b){return new P.jA(a,[b])},
oB:function(){var u,t
for(;u=$.bK,u!=null;){$.cF=null
t=u.b
$.bK=t
if(t==null)$.cE=null
u.a.$0()}},
oG:function(){$.kU=!0
try{P.oB()}finally{$.cF=null
$.kU=!1
if($.bK!=null)$.l6().$1(P.m6())}},
oE:function(a){var u=new P.dN(a)
if($.bK==null){$.bK=$.cE=u
if(!$.kU)$.l6().$1(P.m6())}else $.cE=$.cE.b=u},
oF:function(a){var u,t,s=$.bK
if(s==null){P.oE(a)
$.cF=$.cE
return}u=new P.dN(a)
t=$.cF
if(t==null){u.b=s
$.bK=$.cF=u}else{u.b=t.b
$.cF=t.b=u
if(u.b==null)$.cE=u}},
lF:function(a,b){var u=$.ap
if(u===C.f)return P.kJ(a,b)
return P.kJ(a,u.he(b))},
nC:function(a,b){var u=$.ap
if(u===C.f)return P.lG(a,b)
return P.lG(a,u.d3(b,P.dB))},
m1:function(a,b,c,d,e){var u={}
u.a=d
P.oF(new P.jW(u,e))},
oC:function(a,b,c,d){var u,t=$.ap
if(t===c)return d.$0()
$.ap=c
u=t
try{t=d.$0()
return t}finally{$.ap=u}},
oD:function(a,b,c,d,e){var u,t=$.ap
if(t===c)return d.$1(e)
$.ap=c
u=t
try{t=d.$1(e)
return t}finally{$.ap=u}},
j5:function j5(a){this.a=a},
j4:function j4(a,b,c){this.a=a
this.b=b
this.c=c},
j6:function j6(a){this.a=a},
j7:function j7(a){this.a=a},
eq:function eq(){this.c=0},
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
dN:function dN(a){this.a=a
this.b=null},
dw:function dw(){},
i4:function i4(){},
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
n6:function(a,b){return new H.I([a,b])},
kE:function(a,b){return new H.I([a,b])},
n8:function(a){return H.oU(a,new H.I([null,null]))},
c3:function(a){return new P.ji([a])},
kP:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
nU:function(a,b){var u=new P.e1(a,b)
u.c=a.e
return u},
n_:function(a,b,c){var u,t
if(P.kV(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.h])
$.a9.push(a)
try{P.oe(a,u)}finally{if(0>=$.a9.length)return H.d($.a9,-1)
$.a9.pop()}t=P.lD(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
kz:function(a,b,c){var u,t
if(P.kV(a))return b+"..."+c
u=new P.R(b)
$.a9.push(a)
try{t=u
t.a=P.lD(t.a,a,", ")}finally{if(0>=$.a9.length)return H.d($.a9,-1)
$.a9.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kV:function(a){var u,t
for(u=$.a9.length,t=0;t<u;++t)if(a===$.a9[t])return!0
return!1},
oe:function(a,b){var u,t,s,r,q,p,o,n=a.gU(a),m=0,l=0
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
n7:function(a,b,c){var u=P.n6(b,c)
a.F(0,new P.fR(u))
return u},
ln:function(a,b){var u,t,s=P.c3(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.m)(a),++t)s.n(0,a[t])
return s},
kG:function(a){var u,t={}
if(P.kV(a))return"{...}"
u=new P.R("")
try{$.a9.push(a)
u.a+="{"
t.a=!0
J.l8(a,new P.fW(t,u))
u.a+="}"}finally{if(0>=$.a9.length)return H.d($.a9,-1)
$.a9.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
ji:function ji(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jj:function jj(a){this.a=a
this.c=this.b=null},
e1:function e1(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fE:function fE(){},
fR:function fR(a){this.a=a},
fS:function fS(){},
x:function x(){},
fV:function fV(){},
fW:function fW(a,b){this.a=a
this.b=b},
a1:function a1(){},
jF:function jF(){},
fX:function fX(){},
dI:function dI(a,b){this.a=a
this.$ti=b},
jp:function jp(){},
e2:function e2(){},
ew:function ew(){},
nF:function(a,b,c,d){if(b instanceof Uint8Array)return P.nG(!1,b,c,d)
return},
nG:function(a,b,c,d){var u,t,s=$.mw()
if(s==null)return
u=0===c
if(u&&!0)return P.kM(s,b)
t=b.length
d=P.aT(c,d,t)
if(u&&d===t)return P.kM(s,b)
return P.kM(s,b.subarray(c,d))},
kM:function(a,b){if(P.nI(b))return
return P.nJ(a,b)},
nJ:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.af(t)}return},
nI:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
nH:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.af(t)}return},
m3:function(a,b,c){var u,t,s
if(typeof c!=="number")return H.w(c)
u=J.bk(a)
t=b
for(;t<c;++t){s=u.h(a,t)
if(typeof s!=="number")return s.a7()
if((s&127)!==s)return t-b}return c-b},
lc:function(a,b,c,d,e,f){if(C.c.b9(f,4)!==0)throw H.c(P.S("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.S("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.S("Invalid base64 padding, more than two '=' characters",a,b))},
eW:function eW(){},
eX:function eX(){},
f1:function f1(){},
f6:function f6(){},
fl:function fl(){},
fC:function fC(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
fB:function fB(a){this.a=a},
iL:function iL(){},
iN:function iN(){},
jL:function jL(a){this.b=0
this.c=a},
iM:function iM(a){this.a=a},
jK:function jK(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
eK:function(a,b,c){var u=H.np(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.S(a,null,null))},
mX:function(a){if(a instanceof H.bU)return a.i(0)
return"Instance of '"+H.e(H.ce(a))+"'"},
n9:function(a,b,c){var u,t,s=J.n1(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
kF:function(a,b,c){var u,t=H.b([],[c])
for(u=J.aJ(a);u.t();)t.push(u.gC(u))
if(b)return t
return J.kA(t)},
ch:function(a,b,c){var u,t
if(typeof a==="object"&&a!==null&&a.constructor===Array){u=a.length
c=P.aT(b,c,u)
if(b<=0){if(typeof c!=="number")return c.S()
t=c<u}else t=!0
return H.lx(t?C.b.e8(a,b,c):a)}if(!!J.O(a).$icb)return H.nr(a,b,P.aT(b,c,a.length))
return P.nA(a,b,c)},
nA:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.c(P.Z(b,0,J.ag(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.Z(c,b,J.ag(a),q,q))
t=J.aJ(a)
for(s=0;s<b;++s)if(!t.t())throw H.c(P.Z(b,0,s,q,q))
r=[]
if(u)for(;t.t();)r.push(t.gC(t))
else for(s=b;s<c;++s){if(!t.t())throw H.c(P.Z(c,b,s,q,q))
r.push(t.gC(t))}return H.lx(r)},
nt:function(a){return new H.fI(a,H.n4(a,!1,!0,!1,!1,!1))},
lD:function(a,b,c){var u=J.aJ(b)
if(!u.t())return a
if(c.length===0){do a+=H.e(u.gC(u))
while(u.t())}else{a+=H.e(u.gC(u))
for(;u.t();)a=a+c+H.e(u.gC(u))}return a},
lJ:function(){var u=H.nh()
if(u!=null)return P.nE(u)
throw H.c(P.y("'Uri.base' is not supported"))},
ex:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.e){u=$.mC().b
if(typeof b!=="string")H.q(H.ae(b))
u=u.test(b)}else u=!1
if(u)return b
t=c.ghw().bV(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.d(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.bz(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
mU:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
mV:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cW:function(a){if(a>=10)return""+a
return"0"+a},
li:function(a){return new P.b3(1000*a)},
ky:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a4(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mX(a)},
cN:function(a){return new P.aj(!1,null,null,a)},
kr:function(a,b,c){return new P.aj(!0,a,b,c)},
dl:function(a,b){return new P.bA(null,null,!0,a,b,"Value not in range")},
Z:function(a,b,c,d,e){return new P.bA(b,c,!0,a,d,"Invalid value")},
aT:function(a,b,c){var u
if(typeof a!=="number")return H.w(a)
if(0<=a){if(typeof c!=="number")return H.w(c)
u=a>c}else u=!0
if(u)throw H.c(P.Z(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.w(c)
u=b>c}else u=!0
if(u)throw H.c(P.Z(b,a,c,"end",null))
return b}return c},
ly:function(a,b){if(typeof a!=="number")return a.S()
if(a<0)throw H.c(P.Z(a,0,null,b,null))},
L:function(a,b,c,d,e){var u=e==null?J.ag(b):e
return new P.fD(u,!0,a,c,"Index out of range")},
y:function(a){return new P.iE(a)},
iB:function(a){return new P.iA(a)},
lC:function(a){return new P.cg(a)},
aL:function(a){return new P.f3(a)},
u:function(a){return new P.dV(a)},
S:function(a,b,c){return new P.fv(a,b,c)},
na:function(a,b,c){var u,t,s=H.b([],[c])
C.b.sm(s,a)
for(u=0;u<a;++u){t=b.$1(u)
if(u>=s.length)return H.d(s,u)
s[u]=t}return s},
l2:function(a){H.p5(a)},
nE:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.a.E(a,4)^58)*3|C.a.E(a,0)^100|C.a.E(a,1)^97|C.a.E(a,2)^116|C.a.E(a,3)^97)>>>0
if(u===0)return P.lI(e<e?C.a.q(a,0,e):a,5,f).gdY()
else if(u===32)return P.lI(C.a.q(a,5,e),0,f).gdY()}t=new Array(8)
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
if(P.m2(a,0,e,0,s)>=14)s[7]=e
r=s[1]
if(typeof r!=="number")return r.io()
if(r>=0)if(P.m2(a,0,r,20,s)===20)s[7]=r
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
m-=0}return new P.js(a,r,q,p,o,n,m,k)}return P.nX(a,0,e,r,q,p,o,n,m,k)},
lL:function(a){var u=P.h
return C.b.hC(H.b(a.split("&"),[u]),P.kE(u,u),new P.iJ(C.e))},
nD:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.iG(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.a.W(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.eK(C.a.q(a,s,t),n,n)
if(typeof p!=="number")return p.a1()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.d(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.eK(C.a.q(a,s,c),n,n)
if(typeof p!=="number")return p.a1()
if(p>255)k.$2(l,s)
if(r>=u)return H.d(j,r)
j[r]=p
return j},
lK:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.iH(a),d=new P.iI(e,a)
if(a.length<2)e.$1("address is too short")
u=H.b([],[P.v])
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
else{if(d===b)P.bI(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.o5(a,u,e-1):""
s=P.o1(a,e,f,!1)
if(typeof f!=="number")return f.A()
r=f+1
if(typeof g!=="number")return H.w(g)
q=r<g?P.o3(P.eK(C.a.q(a,r,g),new P.jG(a,f),n),j):n}else{q=n
s=q
t=""}p=P.o2(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.S()
o=h<i?P.kR(a,h+1,i,n):n
return new P.bH(j,t,s,q,p,o,i<c?P.o0(a,i+1,c):n)},
lV:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bI:function(a,b,c){throw H.c(P.S(c,a,b))},
o3:function(a,b){if(a!=null&&a===P.lV(b))return
return a},
o1:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.a.W(a,b)===91){if(typeof c!=="number")return c.M()
u=c-1
if(C.a.W(a,u)!==93)P.bI(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.nZ(a,t,u)
if(typeof s!=="number")return s.S()
if(s<u){r=s+1
q=P.m_(a,C.a.a5(a,"25",r)?s+3:r,u,"%25")}else q=""
P.lK(a,t,s)
return C.a.q(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.w(c)
p=b
for(;p<c;++p)if(C.a.W(a,p)===58){s=C.a.bk(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.m_(a,C.a.a5(a,"25",r)?s+3:r,c,"%25")}else q=""
P.lK(a,b,s)
return"["+C.a.q(a,b,s)+q+"]"}return P.o7(a,b,c)},
nZ:function(a,b,c){var u,t=C.a.bk(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.w(c)
u=t<c}else u=!1
return u?t:c},
m_:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.R(d):null
if(typeof c!=="number")return H.w(c)
u=b
t=u
s=!0
for(;u<c;){r=C.a.W(a,u)
if(r===37){q=P.kS(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.R("")
o=l.a+=C.a.q(a,t,u)
if(p)q=C.a.q(a,u,u+3)
else if(q==="%")P.bI(a,u,"ZoneID should not contain % anymore")
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
l.a+=P.kQ(r)
u+=m
t=u}}}if(l==null)return C.a.q(a,b,c)
if(t<c)l.a+=C.a.q(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
o7:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.w(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.a.W(a,u)
if(q===37){p=P.kS(a,u,!0)
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
if(o>=8)return H.d(C.y,o)
o=(C.y[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.R("")
if(t<u){s.a+=C.a.q(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.d(C.j,o)
o=(C.j[o]&1<<(q&15))!==0}else o=!1
if(o)P.bI(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.a.W(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.R("")
n=C.a.q(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.kQ(q)
u+=l
t=u}}}}if(s==null)return C.a.q(a,b,c)
if(t<c){n=C.a.q(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
o4:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.lX(C.a.E(a,b)))P.bI(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.a.E(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.d(C.l,r)
r=(C.l[r]&1<<(s&15))!==0}else r=!1
if(!r)P.bI(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.a.q(a,b,c)
return P.nY(t?a.toLowerCase():a)},
nY:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
o5:function(a,b,c){return P.cC(a,b,c,C.V,!1)},
o2:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.cC(a,b,c,C.z,!0):C.u.iF(d,new P.jH(),P.h).j(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.a.a3(u,"/"))u="/"+u
return P.o6(u,e,f)},
o6:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.a.a3(a,"/"))return P.o8(a,!u||c)
return P.o9(a)},
kR:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.c(P.cN("Both query and queryParameters specified"))
return P.cC(a,b,c,C.k,!0)}if(d==null)return
u=new P.R("")
t.a=""
d.F(0,new P.jI(new P.jJ(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
o0:function(a,b,c){return P.cC(a,b,c,C.k,!0)},
kS:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.a.W(a,b+1)
t=C.a.W(a,p)
s=H.k4(u)
r=H.k4(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.c.aN(q,4)
if(p>=8)return H.d(C.h,p)
p=(C.h[p]&1<<(q&15))!==0}else p=!1
if(p)return H.bz(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.a.q(a,b,b+3).toUpperCase()
return},
kQ:function(a){var u,t,s,r,q,p,o,n,m="0123456789ABCDEF"
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
for(u=t.length,q=0;--r,r>=0;s=128){p=C.c.fZ(a,6*r)&63|s
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
cC:function(a,b,c,d,e){var u=P.lZ(a,b,c,d,e)
return u==null?C.a.q(a,b,c):u},
lZ:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.S()
if(typeof c!=="number")return H.w(c)
if(!(o<c))break
c$0:{u=C.a.W(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.d(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.kS(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.d(C.j,t)
t=(C.j[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.bI(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.a.W(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.kQ(u)}}if(m==null)m=new P.R("")
m.a+=C.a.q(a,n,o)
m.a+=H.e(s)
if(typeof r!=="number")return H.w(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.S()
if(n<c)m.a+=C.a.q(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
lY:function(a){if(C.a.a3(a,"."))return!0
return C.a.du(a,"/.")!==-1},
o9:function(a){var u,t,s,r,q,p,o
if(!P.lY(a))return a
u=H.b([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.D(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.d(u,-1)
u.pop()
if(u.length===0)u.push("")}r=!0}else if("."===p)r=!0
else{u.push(p)
r=!1}}if(r)u.push("")
return C.b.j(u,"/")},
o8:function(a,b){var u,t,s,r,q,p
if(!P.lY(a))return!b?P.lW(a):a
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
t=P.lW(u[0])
if(0>=u.length)return H.d(u,0)
u[0]=t}return C.b.j(u,"/")},
lW:function(a){var u,t,s,r=a.length
if(r>=2&&P.lX(J.mE(a,0)))for(u=1;u<r;++u){t=C.a.E(a,u)
if(t===58)return C.a.q(a,0,u)+"%3A"+C.a.a6(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.d(C.l,s)
s=(C.l[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
o_:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.a.E(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.cN("Invalid URL encoding"))}}return u},
kT:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.a.E(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.e!==d)s=!1
else s=!0
if(s)return C.a.q(a,b,c)
else r=new H.n(C.a.q(a,b,c))}else{r=H.b([],[P.v])
for(s=a.length,q=b;q<c;++q){t=C.a.E(a,q)
if(t>127)throw H.c(P.cN("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.cN("Truncated URI"))
r.push(P.o_(a,q+1))
q+=2}else if(t===43)r.push(32)
else r.push(t)}}return new P.iM(!1).bV(r)},
lX:function(a){var u=a|32
return 97<=u&&u<=122},
lI:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.b([b-1],[P.v])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.a.E(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.S(m,a,t))}}if(s<0&&t>b)throw H.c(P.S(m,a,t))
for(;r!==44;){l.push(t);++t
for(q=-1;t<u;++t){r=C.a.E(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)l.push(q)
else{p=C.b.gas(l)
if(r!==44||t!==p+7||!C.a.a5(a,"base64",p+1))throw H.c(P.S("Expecting '='",a,t))
break}}l.push(t)
o=t+1
if((l.length&1)===1)a=C.E.hN(0,a,o,u)
else{n=P.lZ(a,o,u,C.k,!0)
if(n!=null)a=C.a.aT(a,o,u,n)}return new P.iF(a,l,c)},
ob:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.na(22,new P.jR(),P.bC),n=new P.jQ(o),m=new P.jS(),l=new P.jT(),k=n.$2(0,225)
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
m2:function(a,b,c,d,e){var u,t,s,r,q,p=$.mD()
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
aH:function aH(){},
ac:function ac(a,b){this.a=a
this.b=b},
J:function J(){},
b3:function b3(a){this.a=a},
fh:function fh(){},
fi:function fi(){},
br:function br(){},
di:function di(){},
aj:function aj(a,b,c,d){var _=this
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
iE:function iE(a){this.a=a},
iA:function iA(a){this.a=a},
cg:function cg(a){this.a=a},
f3:function f3(a){this.a=a},
hw:function hw(){},
dt:function dt(){},
fb:function fb(a){this.a=a},
dV:function dV(a){this.a=a},
fv:function fv(a,b,c){this.a=a
this.b=b
this.c=c},
fx:function fx(){},
v:function v(){},
j:function j(){},
fG:function fG(){},
o:function o(){},
Q:function Q(){},
bc:function bc(){},
aa:function aa(){},
a2:function a2(){},
h:function h(){},
R:function R(a){this.a=a},
iJ:function iJ(a){this.a=a},
iG:function iG(a){this.a=a},
iH:function iH(a){this.a=a},
iI:function iI(a,b){this.a=a
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
iF:function iF(a,b,c){this.a=a
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
oO:function(a){var u,t=J.O(a)
if(!!t.$iaO){u=t.gd7(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.ev(a.data,a.height,a.width)},
oN:function(a){if(a instanceof P.ev)return{data:a.a,height:a.b,width:a.c}
return a},
aW:function(a){var u,t,s,r,q
if(a==null)return
u=P.kE(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){q=t[r]
u.l(0,q,a[q])}return u},
oM:function(a){var u={}
a.F(0,new P.jX(u))
return u},
ju:function ju(){},
jw:function jw(a,b){this.a=a
this.b=b},
jx:function jx(a,b){this.a=a
this.b=b},
ev:function ev(a,b,c){this.a=a
this.b=b
this.c=c},
jX:function jX(a){this.a=a},
jv:function jv(a,b){this.a=a
this.b=b},
fr:function fr(a,b){this.a=a
this.b=b},
fs:function fs(){},
ft:function ft(){},
jh:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
nT:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jk:function jk(){},
a8:function a8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aP:function aP(){},
fM:function fM(){},
aS:function aS(){},
hu:function hu(){},
hC:function hC(){},
cf:function cf(){},
i5:function i5(){},
k:function k(){},
aU:function aU(){},
ip:function ip(){},
e_:function e_(){},
e0:function e0(){},
ea:function ea(){},
eb:function eb(){},
em:function em(){},
en:function en(){},
et:function et(){},
eu:function eu(){},
bC:function bC(){},
eR:function eR(){},
eS:function eS(){},
eT:function eT(a){this.a=a},
eU:function eU(){},
bm:function bm(){},
hv:function hv(){},
dO:function dO(){},
dn:function dn(){},
i0:function i0(){},
ei:function ei(){},
ej:function ej(){}},W={
lb:function(){var u=document.createElement("a")
return u},
ku:function(){var u=document.createElement("canvas")
return u},
mW:function(a,b,c){var u=document.body,t=(u&&C.q).ac(u,a,b,c)
t.toString
u=new H.cq(new W.a3(t),new W.fk(),[W.E])
return u.gaI(u)},
kw:function(a){return"wheel"},
bW:function(a){var u,t,s,r="element tag unavailable"
try{u=J.bP(a)
t=u.gdU(a)
if(typeof t==="string")r=u.gdU(a)}catch(s){H.af(s)}return r},
mZ:function(a){var u,t=document.createElement("input"),s=t
try{s.type=a}catch(u){H.af(u)}return s},
jg:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lT:function(a,b,c,d){var u=W.jg(W.jg(W.jg(W.jg(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
X:function(a,b,c,d){var u=W.m4(new W.je(c),W.i)
if(u!=null&&!0)J.mG(a,b,u,!1)
return new W.jd(a,b,u,!1)},
lS:function(a){var u=W.lb(),t=window.location
u=new W.cs(new W.jo(u,t))
u.el(a)
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
lU:function(){var u=P.h,t=P.ln(C.n,u),s=H.b(["TEMPLATE"],[u])
t=new W.jB(t,P.c3(u),P.c3(u),P.c3(u),null)
t.eo(null,new H.fZ(C.n,new W.jC(),[H.aI(C.n,0),u]),s,null)
return t},
m4:function(a,b){var u=$.ap
if(u===C.f)return a
return u.d3(a,b)},
p:function p(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){},
bn:function bn(){},
bo:function bo(){},
bp:function bp(){},
b1:function b1(){},
f7:function f7(){},
H:function H(){},
bV:function bV(){},
f8:function f8(){},
ah:function ah(){},
as:function as(){},
f9:function f9(){},
fa:function fa(){},
fd:function fd(){},
ak:function ak(){},
fe:function fe(){},
cY:function cY(){},
cZ:function cZ(){},
ff:function ff(){},
fg:function fg(){},
j9:function j9(a,b){this.a=a
this.b=b},
P:function P(){},
fk:function fk(){},
i:function i(){},
f:function f(){},
al:function al(){},
bY:function bY(){},
fq:function fq(){},
fu:function fu(){},
at:function at(){},
fA:function fA(){},
c_:function c_(){},
aO:function aO(){},
c0:function c0(){},
bw:function bw(){},
fT:function fT(){},
he:function he(){},
c8:function c8(){},
hf:function hf(){},
hg:function hg(a){this.a=a},
hh:function hh(){},
hi:function hi(a){this.a=a},
aw:function aw(){},
hj:function hj(){},
ax:function ax(){},
a3:function a3(a){this.a=a},
E:function E(){},
dg:function dg(){},
ay:function ay(){},
hz:function hz(){},
hK:function hK(){},
hL:function hL(a){this.a=a},
hN:function hN(){},
aA:function aA(){},
hY:function hY(){},
aB:function aB(){},
hZ:function hZ(){},
aC:function aC(){},
i2:function i2(){},
i3:function i3(a){this.a=a},
an:function an(){},
dx:function dx(){},
i6:function i6(){},
i7:function i7(){},
ci:function ci(){},
aD:function aD(){},
ao:function ao(){},
ia:function ia(){},
ib:function ib(){},
ii:function ii(){},
aE:function aE(){},
bB:function bB(){},
im:function im(){},
io:function io(){},
bf:function bf(){},
iK:function iK(){},
j1:function j1(){},
bi:function bi(){},
cr:function cr(){},
ja:function ja(){},
dQ:function dQ(){},
jf:function jf(){},
e7:function e7(){},
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
cs:function cs(a){this.a=a},
K:function K(){},
dh:function dh(a){this.a=a},
hr:function hr(a){this.a=a},
hq:function hq(a,b,c){this.a=a
this.b=b
this.c=c},
ef:function ef(){},
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
d1:function d1(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
aR:function aR(){},
jo:function jo(a,b){this.a=a
this.b=b},
ey:function ey(a){this.a=a},
jM:function jM(a){this.a=a},
dP:function dP(){},
dR:function dR(){},
dS:function dS(){},
dT:function dT(){},
dU:function dU(){},
dW:function dW(){},
dX:function dX(){},
dY:function dY(){},
dZ:function dZ(){},
e3:function e3(){},
e4:function e4(){},
e5:function e5(){},
e6:function e6(){},
e8:function e8(){},
e9:function e9(){},
ec:function ec(){},
ed:function ed(){},
ee:function ee(){},
cy:function cy(){},
cz:function cz(){},
eg:function eg(){},
eh:function eh(){},
el:function el(){},
eo:function eo(){},
ep:function ep(){},
cA:function cA(){},
cB:function cB(){},
er:function er(){},
es:function es(){},
ez:function ez(){},
eA:function eA(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){}},K={
M:function(a,b){var u,t,s
if(a.length!==1||b.length!==1)throw H.c(P.u("The given low and high character strings for a Range must have one and only one characters."))
u=C.a.E(a,0)
t=C.a.E(b,0)
if(u>t){s=t
t=u
u=s}return new K.hF(u,t)},
t:function(a){var u=new K.hO()
u.eh(a)
return u},
aK:function aK(){},
d2:function d2(){},
b9:function b9(){},
a6:function a6(){this.a=null},
hF:function hF(a,b){this.a=a
this.b=b},
hO:function hO(){this.a=null},
me:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="testCanvas",c=null,b=V.nw("Test 026"),a=W.ku()
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
s=E.nB(t,!0,!0,!0,!1)
r=D.lh()
r.sae(U.cV(V.lq(0.3,0.4,1,c)))
q=D.lh()
q.sae(U.cV(V.lq(-0.3,-0.4,-1,c)))
q.sab(0,new V.W(0.125,0.125,0.125))
p=new O.db()
o=O.kv(V.aQ)
p.e=o
o.ba(p.geX(),p.geZ())
o=new O.au(p,"emission")
o.c=new A.a_(!1,!1,!1)
o.f=new V.W(0,0,0)
p.f=o
o=new O.au(p,"ambient")
o.c=new A.a_(!1,!1,!1)
o.f=new V.W(0,0,0)
p.r=o
o=new O.au(p,"diffuse")
o.c=new A.a_(!1,!1,!1)
o.f=new V.W(0,0,0)
p.x=o
o=new O.au(p,"invDiffuse")
o.c=new A.a_(!1,!1,!1)
o.f=new V.W(0,0,0)
p.y=o
o=new O.h5(p,"specular")
o.c=new A.a_(!1,!1,!1)
o.f=new V.W(0,0,0)
o.ch=100
p.z=o
o=new O.h1(p,"bump")
o.c=new A.a_(!1,!1,!1)
p.Q=o
p.ch=null
o=new O.au(p,"reflect")
o.c=new A.a_(!1,!1,!1)
o.f=new V.W(0,0,0)
p.cx=o
o=new O.h4(p,"refract")
o.c=new A.a_(!1,!1,!1)
o.f=new V.W(0,0,0)
o.ch=1
p.cy=o
o=new O.h0(p,"alpha")
o.c=new A.a_(!1,!1,!1)
o.f=1
p.db=o
o=new D.d8()
o.bv(D.a5)
o.e=H.b([],[D.eV])
o.f=H.b([],[D.bq])
o.r=H.b([],[D.hA])
o.x=H.b([],[D.i_])
o.z=o.y=null
o.cm(o.geV(),o.gfw(),o.gfC())
p.dx=o
n=new O.h3()
n.b=new V.ar(0,0,0,0)
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
n=s.f.hL("../resources/Test.png",!0)
m=o.c
if(!m.b)o.bJ(new A.a_(m.a,!0,!1))
m=o.d
if(m!==n){if(m!=null)m.gw().L(0,o.gbf())
l=o.d
o.d=n
n.gw().n(0,o.gbf())
n=new D.C(o.b+".texture2D",l,o.d)
n.b=!0
o.a.X(n)}k=E.ll()
k.sae(U.lM(!0,s.x))
k.sai(0,F.mj())
j=E.ll()
j.sae(U.cV(V.av(3,0,0,0,0,3,0,0,0,0,3,0,0,0,0,1)))
o=F.kX(1,c,c,1)
o.c5()
j.sai(0,o)
i=new U.bZ()
i.bv(U.am)
i.ba(i.geT(),i.gfA())
i.e=null
i.f=V.dc()
i.r=0
i.n(0,U.lM(!1,s.x))
i.n(0,U.cV(V.kH(3.141592653589793)))
i.n(0,U.cV(V.av(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
h=U.lB(0.5,0.7,0.3)
g=U.lB(0,0.1,0)
o=new M.d_()
o.a=!0
n=O.kv(E.aN)
o.e=n
n.ba(o.gf2(),o.gf4())
o.y=o.x=o.r=o.f=null
f=X.mY(c)
e=new X.dj()
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
if(n!==e){if(n!=null)n.gw().L(0,o.gan())
l=o.b
o.b=e
e.gw().n(0,o.gan())
n=new D.C("camera",l,o.b)
n.b=!0
o.aw(n)}n=o.c
if(n!==f){if(n!=null)n.gw().L(0,o.gan())
l=o.c
o.c=f
f.gw().n(0,o.gan())
n=new D.C("target",l,o.c)
n.b=!0
o.aw(n)}o.sdV(c)
o.sdV(p)
o.e.n(0,k)
o.e.n(0,j)
o.b.sae(i)
n=o.f
if(n==null)n=o.f=D.N()
n.n(0,new K.ka(p,h,g))
n=s.d
if(n!==o){if(n!=null)n.gw().L(0,s.gcr())
s.d=o
o.gw().n(0,s.gcr())
s.cs()}o=new V.hD("shapes")
u=u.getElementById("shapes")
o.c=u
if(u==null)H.q("Failed to find shapes for RadioGroup")
o.aZ(0,"Cube",new K.kb(k))
o.aZ(0,"Cylinder",new K.kc(k))
o.aZ(0,"Cone",new K.kd(k))
o.aZ(0,"Sphere",new K.ke(k))
o.cW(0,"Toroid",new K.kf(k),!0)
o.aZ(0,"Knot",new K.kg(k))
u=s.Q
if(u==null)u=s.Q=D.N()
o=u.b
u=o==null?u.b=H.b([],[{func:1,ret:-1,args:[D.Y]}]):o
u.push(new K.kh(b,p))
V.p8(s)},
ka:function ka(a,b,c){this.a=a
this.b=b
this.c=c},
kb:function kb(a){this.a=a},
kc:function kc(a){this.a=a},
kd:function kd(a){this.a=a},
ke:function ke(a){this.a=a},
kf:function kf(a){this.a=a},
kg:function kg(a){this.a=a},
kh:function kh(a,b){this.a=a
this.b=b}},L={
ik:function(){var u=new L.ij(),t=P.h
u.a=new H.I([t,L.du])
u.b=new H.I([t,L.dD])
u.c=P.c3(t)
return u},
du:function du(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dC:function dC(a,b,c){this.a=a
this.b=b
this.c=c},
dD:function dD(a){this.b=a
this.c=null},
ij:function ij(){var _=this
_.d=_.c=_.b=_.a=null},
dF:function dF(a){this.b=a
this.a=this.c=null}},O={
kv:function(a){var u=new O.b2([a])
u.bv(a)
return u},
b2:function b2(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
c7:function c7(){this.b=this.a=null},
db:function db(){var _=this
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
c5:function c5(){},
h1:function h1(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
au:function au(a,b){var _=this
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
dy:function dy(){}},E={
ll:function(){var u,t=new E.aN()
t.a=""
t.b=!0
u=O.kv(E.aN)
t.y=u
u.ba(t.ghO(),t.ghR())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sai(0,null)
t.sae(null)
return t},
nu:function(a,b){var u=new E.hG(a)
u.eg(a,b)
return u},
nB:function(a,b,c,d,e){var u,t,s=J.O(a)
if(!!s.$ibp)return E.lE(a,!0,!0,!0,!1)
u=W.ku()
t=u.style
t.width="100%"
t.height="100%"
s.gbT(a).n(0,u)
return E.lE(u,!0,!0,!0,!1)},
lE:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.dA(),p=C.i.ck(a,"webgl2",P.n8(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.q(P.u("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.nu(p,a)
u=new T.ie(p)
u.b=p.getParameter(3379)
p.getParameter(34076)
u.e=u.d=0
q.f=u
u=new X.dJ(a)
t=new X.fL()
t.d=P.c3(P.v)
u.b=t
t=new X.hk(u)
t.f=0
t.r=V.bd()
t.x=V.bd()
t.ch=t.Q=1
u.c=t
t=new X.fU(u)
t.r=0
t.x=V.bd()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.il(u)
t.f=V.bd()
t.r=V.bd()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.b([],[[P.dw,P.a2]])
u.z=t
s=document
t.push(W.X(s,"contextmenu",u.gf6(),!1))
u.z.push(W.X(a,"focus",u.gfc(),!1))
u.z.push(W.X(a,"blur",u.gf0(),!1))
u.z.push(W.X(s,"keyup",u.gfg(),!1))
u.z.push(W.X(s,"keydown",u.gfe(),!1))
u.z.push(W.X(a,"mousedown",u.gfk(),!1))
u.z.push(W.X(a,"mouseup",u.gfo(),!1))
u.z.push(W.X(a,r,u.gfm(),!1))
t=u.z
W.kw(a)
W.kw(a)
t.push(W.X(a,W.kw(a),u.gfq(),!1))
u.z.push(W.X(s,r,u.gf8(),!1))
u.z.push(W.X(s,"mouseup",u.gfa(),!1))
u.z.push(W.X(s,"pointerlockchange",u.gft(),!1))
u.z.push(W.X(a,"touchstart",u.gfI(),!1))
u.z.push(W.X(a,"touchend",u.gfE(),!1))
u.z.push(W.X(a,"touchmove",u.gfG(),!1))
q.x=u
q.ch=!0
q.cx=!1
q.cy=new P.ac(Date.now(),!1)
q.db=0
q.cN()
return q},
eY:function eY(){},
aN:function aN(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hG:function hG(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hH:function hH(a){this.a=a},
hI:function hI(a){this.a=a},
hJ:function hJ(a){this.a=a},
dv:function dv(a){this.c=a
this.b=null},
dA:function dA(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
ih:function ih(a){this.a=a}},Z={
kO:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.bJ(c)),35044)
a.bindBuffer(b,null)
return new Z.dM(b,u)},
ai:function(a){return new Z.aV(a)},
dM:function dM(a,b){this.a=a
this.b=b},
cQ:function cQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
j2:function j2(a){this.a=a},
cR:function cR(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bt:function bt(a,b,c){this.a=a
this.b=b
this.c=c},
aV:function aV(a){this.a=a}},D={
N:function(){var u=new D.bs()
u.d=0
return u},
f0:function f0(){},
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
lh:function(){var u=new D.bq()
u.c=new V.W(1,1,1)
u.a=V.lR()
u.d=V.kN()
u.e=V.nK()
u.sae(null)
u.sab(0,null)
return u},
eV:function eV(){},
bq:function bq(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a5:function a5(){},
d8:function d8(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
hA:function hA(){},
i_:function i_(){}},X={cS:function cS(a,b){this.a=a
this.b=b},d7:function d7(a,b){this.a=a
this.b=b},fL:function fL(){this.d=this.b=this.a=null},da:function da(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fU:function fU(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bx:function bx(a,b,c){this.a=a
this.b=b
this.c=c},ba:function ba(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hk:function hk(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},hB:function hB(){},dE:function dE(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},il:function il(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dJ:function dJ(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
mY:function(a){var u=new X.fw(),t=new V.ar(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.lA
if(t==null){t=V.lz(0,0,1,1)
$.lA=t}u.r=t
return u},
kt:function kt(){},
fw:function fw(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dj:function dj(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
i8:function i8(){}},V={
kp:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.b9(a-b,u)
return(a<0?a+u:a)+b},
F:function(a,b,c){if(a==null)return C.a.af("null",c)
return C.a.af(C.d.dX(Math.abs(a-0)<$.A().a?0:a,b),c+b+1)},
bO:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.h])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.m)(a),++s){r=V.F(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.d(o,q)
u=C.a.af(o[q],t)
p=o.length
if(q>=p)return H.d(o,q)
o[q]=u}return o},
l1:function(a){return C.d.ie(Math.pow(2,C.R.c6(Math.log(H.oL(a))/Math.log(2))))},
ne:function(a){return new V.c6(a.a,a.b,a.c,a.e,a.f,a.r,a.y,a.z,a.Q)},
dc:function(){var u=$.lr
return u==null?$.lr=V.av(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
av:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aQ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kH:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.av(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
lp:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.av(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
lq:function(a,b,c,d){d=V.kN()
return V.lo(V.lv(),d,new V.z(a,b,c))},
lo:function(a,b,c){var u=c.u(0,Math.sqrt(c.D(c))),t=b.aA(u),s=t.u(0,Math.sqrt(t.D(t))),r=u.aA(s),q=new V.z(a.a,a.b,a.c),p=s.V(0).D(q),o=r.V(0).D(q),n=u.V(0).D(q)
return V.av(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bd:function(){var u=$.lu
return u==null?$.lu=new V.a7(0,0):u},
lv:function(){var u=$.az
return u==null?$.az=new V.T(0,0,0):u},
lz:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dm(a,b,c,d)},
cp:function(){var u=$.lQ
return u==null?$.lQ=new V.z(0,0,0):u},
nK:function(){var u=$.iO
return u==null?$.iO=new V.z(-1,0,0):u},
kN:function(){var u=$.iP
return u==null?$.iP=new V.z(0,1,0):u},
lR:function(){var u=$.iQ
return u==null?$.iQ=new V.z(0,0,1):u},
W:function W(a,b,c){this.a=a
this.b=b
this.c=c},
ar:function ar(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fm:function fm(a){this.a=a},
c6:function c6(a,b,c,d,e,f,g,h,i){var _=this
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
a7:function a7(a,b){this.a=a
this.b=b},
T:function T(a,b,c){this.a=a
this.b=b
this.c=c},
be:function be(a,b,c,d){var _=this
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
p8:function(a){P.nC(C.O,new V.kj(a))},
nw:function(a){var u=new V.hT()
u.ej(a,!0)
return u},
cT:function cT(){},
kj:function kj(a){this.a=a},
fc:function fc(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fy:function fy(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fz:function fz(a){var _=this
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
lg:function(){var u=new U.f2()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
cV:function(a){var u=new U.cU()
u.a=a
return u},
lB:function(a,b,c){var u,t=new U.dp()
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
lM:function(a,b){var u,t,s,r=new U.dK(),q=U.lg()
q.se_(0,!0)
q.sdB(6.283185307179586)
q.sdD(0)
q.sa2(0,0)
q.sdC(100)
q.sY(0)
q.sd6(0.5)
r.b=q
u=r.gbc()
q.gw().n(0,u)
q=U.lg()
q.se_(0,!0)
q.sdB(6.283185307179586)
q.sdD(0)
q.sa2(0,0)
q.sdC(100)
q.sY(0)
q.sd6(0.5)
r.c=q
q.gw().n(0,u)
r.d=null
r.r=r.f=r.e=!1
r.y=r.x=2.5
r.Q=4
r.ch=r.cx=!1
r.db=r.cy=0
r.dx=null
r.dy=0
r.fx=r.fr=null
t=new X.bx(a,!1,!1)
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
f2:function f2(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cU:function cU(){this.b=this.a=null},
bZ:function bZ(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
am:function am(){},
dp:function dp(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dK:function dK(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={d_:function d_(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
nc:function(a,b){var u=a.b1,t=new A.h_(b,u)
t.ei(b,u)
t.ef(a,b)
return t},
nd:function(a,b,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="MaterialLight_"+a3.gal(a3)+a4.gal(a4)+a5.gal(a5)+a6.gal(a6)+a7.gal(a7)+a8.gal(a8)+a9.gal(a9)+b0.gal(b0)+b1.gal(b1)+"_"
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
d=$.b_()
if(j){u=$.aZ()
d=new Z.aV(d.a|u.a)}if(i){u=$.aY()
d=new Z.aV(d.a|u.a)}if(h){u=$.b0()
d=new Z.aV(d.a|u.a)}if(g){u=$.aX()
d=new Z.aV(d.a|u.a)}return new A.h2(a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,s,o,k,o,r,f,!0,e,!1,m,r,l,j,i,h,!1,g,a,!1,a0,!1,a2,c.charCodeAt(0)==0?c:c,d)},
jU:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
jV:function(a,b,c){var u,t="Txt, txt2D).rgb;\n"
A.jU(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.eL(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.b){u+="   "+c+"Color = "+c+"Clr*texture2D("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.b){u+="   "+c+"Color = texture2D("+c+t
a.a=u}a.a=u+"}\n"},
ok:function(a,b){var u,t=a.a,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.jU(b,t,"emission")
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
og:function(a,b){var u,t=a.b
if(!(t.a||t.b||!1))return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.jV(b,t,"ambient")
b.a+="\n"},
oi:function(a,b){var u,t=a.c
if(!(t.a||t.b||!1))return
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
ol:function(a,b){var u,t=a.d
if(!(t.a||t.b||!1))return
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
or:function(a,b){var u,t=a.e
if(!(t.a||t.b||!1))return
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
on:function(a,b){var u,t,s
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
op:function(a,b){var u,t=a.r,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.jU(b,t,"reflect")
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
oq:function(a,b){var u,t=a.x,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.jU(b,t,"refract")
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
oh:function(a,b,c){var u,t,s,r,q,p,o=b.b
if(o<=0)return
u=b.a
t="barLight"+H.e(u)
s=A.eL(t)
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
oj:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.e(u)
s=A.eL(t)
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
oo:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.e(u)
s=A.eL(t)
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
os:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.e(u)
s=A.eL(t)
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
ot:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.R("")
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.m)(q),++o)A.oh(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.m)(q),++o)A.oj(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.m)(q),++o)A.oo(a,q[o],j)
for(q=a.cx,p=q.length,o=0;o<q.length;q.length===p||(0,H.m)(q),++o)A.os(a,q[o],j)
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
eL:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.a.a6(a,1)},
kK:function(a,b,c,d,e){var u=new A.it(a,c,e)
u.f=d
P.n9(d,0,P.v)
return u},
cO:function cO(a,b,c){this.a=a
this.b=b
this.c=c},
eQ:function eQ(a){this.a=a},
a_:function a_(a,b,c){this.a=a
this.b=b
this.c=c},
h_:function h_(a,b){var _=this
_.iw=_.d9=_.bj=_.b1=_.aQ=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iE=_.iD=_.iC=_.c3=_.c2=_.c1=_.c0=_.c_=_.bZ=_.bY=_.bX=_.iB=_.dm=_.dl=_.iA=_.dk=_.dj=_.di=_.iz=_.dh=_.dg=_.df=_.iy=_.de=_.dd=_.ix=_.dc=_.da=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cP:function cP(a,b){this.a=a
this.b=b},
cX:function cX(a,b){this.a=a
this.b=b},
dk:function dk(a,b){this.a=a
this.b=b},
ds:function ds(a,b){this.a=a
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
_.aQ=b3
_.b1=b4
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
dq:function dq(){},
dG:function dG(){},
iy:function iy(a){this.a=a},
bg:function bg(a,b,c){this.a=a
this.c=b
this.d=c},
iv:function iv(a,b,c){this.a=a
this.c=b
this.d=c},
iw:function iw(a,b,c){this.a=a
this.c=b
this.d=c},
ix:function ix(a,b,c){this.a=a
this.c=b
this.d=c},
it:function it(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
V:function V(a,b,c){this.a=a
this.c=b
this.d=c},
iu:function iu(a,b,c){this.a=a
this.c=b
this.d=c},
G:function G(a,b,c){this.a=a
this.c=b
this.d=c},
cj:function cj(a,b,c){this.a=a
this.c=b
this.d=c},
iz:function iz(a,b,c){this.a=a
this.c=b
this.d=c},
cm:function cm(a,b,c){this.a=a
this.c=b
this.d=c},
ad:function ad(a,b,c){this.a=a
this.c=b
this.d=c},
a0:function a0(a,b,c){this.a=a
this.c=b
this.d=c},
bD:function bD(a,b,c){this.a=a
this.c=b
this.d=c}},F={
kX:function(a,b,c,d){var u=F.kI()
F.cD(u,b,c,d,a,1,0,0,1)
F.cD(u,b,c,d,a,0,1,0,3)
F.cD(u,b,c,d,a,0,0,1,2)
F.cD(u,b,c,d,a,-1,0,0,0)
F.cD(u,b,c,d,a,0,-1,0,0)
F.cD(u,b,c,d,a,0,0,-1,3)
u.aq()
return u},
jP:function(a){var u=a.a>0?1:0
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
j.d=i}m=F.jP(i)
l=F.jP(h)
k=F.l4(d,a0,new F.jO(j,F.jP(g),F.jP(f),l,m,c),b)
if(k!=null)a.b4(k)},
m9:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(e<3)return
u=F.kI()
t=b?-1:1
s=-6.283185307179586/e
r=H.b([],[F.bh])
q=u.a
p=new V.z(0,0,t)
p=p.u(0,Math.sqrt(p.D(p)))
r.push(q.h9(new V.be(a,-1,-1,-1),new V.ar(1,1,1,1),new V.T(0,0,c),new V.z(0,0,t),new V.a7(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.w(k)
j=new V.z(m,l,t).u(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.dL(new V.be(a,-1,-1,-1),null,new V.ar(i,g,h,1),new V.T(m*k,l*k,c),new V.z(0,0,t),new V.a7(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.n(0,f)
r.push(f)}u.d.h7(r)
return u},
m7:function(a,b,c){return F.oP(!0,a,1,new F.jY(1,c),b)},
oP:function(a,b,c,d,e){var u
if(e<3)return
if(c<1)return
u=F.l4(c,e,new F.k_(d),null)
if(u==null)return
u.aq()
u.bO()
if(b)u.b4(F.m9(3,!1,1,new F.k0(d),e))
u.b4(F.m9(1,!0,-1,new F.k1(d),e))
return u},
p9:function(a,b){var u,t,s={}
s.a=u
s.a=null
s.a=new F.kk()
t=F.kX(a,null,new F.kl(s,1),b)
t.bO()
return t},
mj:function(){return F.m8(15,30,0.5,1,new F.kn())},
p2:function(){return F.m8(12,120,0.3,1,new F.k9(3,2))},
m8:function(a,b,c,d,e){var u=F.l4(a,b,new F.jZ(e,d,b,c),null)
if(u==null)return
u.aq()
u.bO()
return u},
l4:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.kI()
t=H.b([],[F.bh])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.dL(g,g,new V.ar(p,0,0,1),g,g,new V.a7(r,1),g,g,0)
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
o=F.dL(g,g,new V.ar(j,i,h,1),g,g,new V.a7(r,m),g,g,0)
k.n(0,o)
c.$3(o,r,n)
t.push(o.bW(d))}}u.d.h8(a+1,b+1,t)
return u},
bX:function(a,b,c){var u=new F.b4(),t=a.a
if(t==null)H.q(P.u("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.q(P.u("May not create a face with vertices attached to different shapes."))
u.bM(a)
u.bN(b)
u.fV(c)
u.a.a.d.b.push(u)
u.a.a.Z()
return u},
n5:function(a,b){var u=new F.c2(),t=a.a
if(t==null)H.q(P.u("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.q(P.u("May not create a line with vertices attached to different shapes."))
u.bM(a)
u.bN(b)
u.a.a.c.b.push(u)
u.a.a.Z()
return u},
kI:function(){var u=new F.hP(),t=new F.iR(u)
t.b=!1
t.c=H.b([],[F.bh])
u.a=t
t=new F.hS(u)
t.b=H.b([],[F.cc])
u.b=t
t=new F.hR(u)
t.b=H.b([],[F.c2])
u.c=t
t=new F.hQ(u)
t.b=H.b([],[F.b4])
u.d=t
u.e=null
return u},
dL:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.bh(),r=new F.iZ()
r.b=H.b([],[F.cc])
s.b=r
r=new F.iV()
u=[F.c2]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.iS()
u=[F.b4]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.mx()
s.e=0
r=$.b_()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aZ().a)!==0?e:t
s.x=(u&$.aY().a)!==0?b:t
s.y=(u&$.b0().a)!==0?f:t
s.z=(u&$.bl().a)!==0?g:t
s.Q=(u&$.my().a)!==0?c:t
s.ch=(u&$.bQ().a)!==0?i:0
s.cx=(u&$.aX().a)!==0?a:t
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
kk:function kk(){},
kl:function kl(a,b){this.a=a
this.b=b},
kn:function kn(){},
k9:function k9(a,b){this.a=a
this.b=b},
jZ:function jZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b4:function b4(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fp:function fp(){},
hX:function hX(){},
c2:function c2(){this.b=this.a=null},
fN:function fN(){},
is:function is(){},
cc:function cc(){this.a=null},
hP:function hP(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hQ:function hQ(a){this.a=a
this.b=null},
hR:function hR(a){this.a=a
this.b=null},
hS:function hS(a){this.a=a
this.b=null},
bh:function bh(){var _=this
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
hs:function hs(){},
iZ:function iZ(){this.b=null}},T={dz:function dz(){},ic:function ic(){},id:function id(){var _=this
_.y=_.d=_.c=_.b=_.a=null},ie:function ie(a){var _=this
_.a=a
_.e=_.d=_.b=null},ig:function ig(a,b,c,d,e,f,g){var _=this
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
H.kC.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gH:function(a){return H.cd(a)},
i:function(a){return"Instance of '"+H.e(H.ce(a))+"'"}}
J.fH.prototype={
i:function(a){return String(a)},
gH:function(a){return a?519018:218159},
$iaH:1}
J.d5.prototype={
p:function(a,b){return null==b},
i:function(a){return"null"},
gH:function(a){return 0}}
J.d6.prototype={
gH:function(a){return 0},
i:function(a){return String(a)},
$in3:1}
J.hx.prototype={}
J.bE.prototype={}
J.b7.prototype={
i:function(a){var u=a[$.ml()]
if(u==null)return this.ec(a)
return"JavaScript function for "+H.e(J.a4(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.b5.prototype={
ce:function(a,b){if(!!a.fixed$length)H.q(P.y("removeAt"))
if(b<0||b>=a.length)throw H.c(P.dl(b,null))
return a.splice(b,1)[0]},
L:function(a,b){var u
if(!!a.fixed$length)H.q(P.y("remove"))
for(u=0;u<a.length;++u)if(J.D(a[u],b)){a.splice(u,1)
return!0}return!1},
aa:function(a,b){var u,t
if(!!a.fixed$length)H.q(P.y("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.m)(b),++t)a.push(b[t])},
F:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.c(P.aL(a))}},
j:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.d(r,u)
r[u]=t}return r.join(b)},
hJ:function(a){return this.j(a,"")},
hB:function(a,b,c){var u,t,s=a.length
for(u=b,t=0;t<s;++t){u=c.$2(u,a[t])
if(a.length!==s)throw H.c(P.aL(a))}return u},
hC:function(a,b,c){return this.hB(a,b,c,null)},
hA:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.c(P.aL(a))}throw H.c(H.fF())},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
e8:function(a,b,c){if(b<0||b>a.length)throw H.c(P.Z(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.c(P.Z(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.aI(a,0)])
return H.b(a.slice(b,c),[H.aI(a,0)])},
ghz:function(a){if(a.length>0)return a[0]
throw H.c(H.fF())},
gas:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.fF())},
cZ:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.c(P.aL(a))}return!1},
aV:function(a,b){if(!!a.immutable$list)H.q(P.y("sort"))
H.nz(a,b==null?J.od():b)},
e7:function(a){return this.aV(a,null)},
O:function(a,b){var u
for(u=0;u<a.length;++u)if(J.D(a[u],b))return!0
return!1},
i:function(a){return P.kz(a,"[","]")},
gU:function(a){return new J.ab(a,a.length)},
gH:function(a){return H.cd(a)},
gm:function(a){return a.length},
sm:function(a,b){var u="newLength"
if(!!a.fixed$length)H.q(P.y("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.kr(b,u,null))
if(b<0)throw H.c(P.Z(b,0,null,u,null))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bN(a,b))
return a[b]},
l:function(a,b,c){if(!!a.immutable$list)H.q(P.y("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bN(a,b))
a[b]=c},
$ir:1,
$ij:1,
$io:1}
J.kB.prototype={}
J.ab.prototype={
gC:function(a){return this.d},
t:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.m(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.c1.prototype={
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
ie:function(a){var u
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
if(b>20)throw H.c(P.Z(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbl(a))return"-"+u
return u},
b7:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.Z(b,2,36,"radix",null))
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
r-=s.length}return u+C.a.B("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gH:function(a){var u,t,s,r,q=a|0
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
J.d4.prototype={$iv:1}
J.d3.prototype={}
J.b6.prototype={
W:function(a,b){if(b<0)throw H.c(H.bN(a,b))
if(b>=a.length)H.q(H.bN(a,b))
return a.charCodeAt(b)},
E:function(a,b){if(b>=a.length)throw H.c(H.bN(a,b))
return a.charCodeAt(b)},
A:function(a,b){if(typeof b!=="string")throw H.c(P.kr(b,null,null))
return a+b},
aT:function(a,b,c,d){var u,t
c=P.aT(b,c,a.length)
if(typeof c!=="number"||Math.floor(c)!==c)H.q(H.ae(c))
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a5:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.Z(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a3:function(a,b){return this.a5(a,b,0)},
q:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.q(H.ae(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.S()
if(b<0)throw H.c(P.dl(b,null))
if(b>c)throw H.c(P.dl(b,null))
if(c>a.length)throw H.c(P.dl(c,null))
return a.substring(b,c)},
a6:function(a,b){return this.q(a,b,null)},
ii:function(a){return a.toLowerCase()},
B:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.L)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
af:function(a,b){var u=b-a.length
if(u<=0)return a
return this.B(" ",u)+a},
bk:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.Z(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
du:function(a,b){return this.bk(a,b,0)},
aP:function(a,b){var u
if(typeof b!=="string")throw H.c(H.ae(b))
if(a===b)u=0
else u=a<b?-1:1
return u},
i:function(a){return a},
gH:function(a){var u,t,s
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
$ar:function(){return[P.v]},
$ax:function(){return[P.v]},
$aj:function(){return[P.v]},
$ao:function(){return[P.v]}}
H.r.prototype={}
H.d9.prototype={
gU:function(a){return new H.b8(this,this.gm(this))},
bs:function(a,b){return this.eb(0,b)}}
H.b8.prototype={
gC:function(a){return this.d},
t:function(){var u,t=this,s=t.a,r=J.bk(s),q=r.gm(s)
if(t.b!=q)throw H.c(P.aL(s))
u=t.c
if(typeof q!=="number")return H.w(q)
if(u>=q){t.d=null
return!1}t.d=r.I(s,u);++t.c
return!0}}
H.c4.prototype={
gU:function(a){return new H.fY(J.aJ(this.a),this.b)},
gm:function(a){return J.ag(this.a)},
I:function(a,b){return this.b.$1(J.eM(this.a,b))},
$aj:function(a,b){return[b]}}
H.fj.prototype={$ir:1,
$ar:function(a,b){return[b]}}
H.fY.prototype={
t:function(){var u=this,t=u.b
if(t.t()){u.a=u.c.$1(t.gC(t))
return!0}u.a=null
return!1},
gC:function(a){return this.a}}
H.fZ.prototype={
gm:function(a){return J.ag(this.a)},
I:function(a,b){return this.b.$1(J.eM(this.a,b))},
$ar:function(a,b){return[b]},
$ad9:function(a,b){return[b]},
$aj:function(a,b){return[b]}}
H.cq.prototype={
gU:function(a){return new H.j3(J.aJ(this.a),this.b)}}
H.j3.prototype={
t:function(){var u,t
for(u=this.a,t=this.b;u.t();)if(t.$1(u.gC(u)))return!0
return!1},
gC:function(a){var u=this.a
return u.gC(u)}}
H.d0.prototype={}
H.iD.prototype={
l:function(a,b,c){throw H.c(P.y("Cannot modify an unmodifiable list"))}}
H.dH.prototype={}
H.f4.prototype={
i:function(a){return P.kG(this)},
l:function(a,b,c){return H.mT()},
$iQ:1}
H.f5.prototype={
gm:function(a){return this.a},
bU:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.bU(0,b))return
return this.cF(b)},
cF:function(a){return this.b[a]},
F:function(a,b){var u,t,s,r=this.c
for(u=r.length,t=0;t<u;++t){s=r[t]
b.$2(s,this.cF(s))}}}
H.iq.prototype={
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
H.iC.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.ko.prototype={
$1:function(a){if(!!J.O(a).$ibr)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:8}
H.ek.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bU.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.cI(t==null?"unknown":t)+"'"},
gim:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.i9.prototype={}
H.i1.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cI(u)+"'"}}
H.bS.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bS))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gH:function(a){var u,t=this.c
if(t==null)u=H.cd(this.a)
else u=typeof t!=="object"?J.cM(t):H.cd(t)
return(u^H.cd(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.ce(u))+"'")}}
H.f_.prototype={
i:function(a){return this.a}}
H.hM.prototype={
i:function(a){return"RuntimeError: "+H.e(this.a)}}
H.I.prototype={
gm:function(a){return this.a},
ghI:function(a){return this.a===0},
ga_:function(a){return new H.fP(this,[H.aI(this,0)])},
gil:function(a){var u=this
return H.nb(u.ga_(u),new H.fJ(u),H.aI(u,0),H.aI(u,1))},
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
return s}else return q.hG(b)},
hG:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.cH(r,s.dv(a))
t=s.dw(u,a)
if(t<0)return
return u[t].b},
l:function(a,b,c){var u,t,s=this
if(typeof b==="string"){u=s.b
s.cw(u==null?s.b=s.bD():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cw(t==null?s.c=s.bD():t,b,c)}else s.hH(b,c)},
hH:function(a,b){var u,t,s,r=this,q=r.d
if(q==null)q=r.d=r.bD()
u=r.dv(a)
t=r.cH(q,u)
if(t==null)r.bK(q,u,[r.bE(a,b)])
else{s=r.dw(t,a)
if(s>=0)t[s].b=b
else t.push(r.bE(a,b))}},
F:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.c(P.aL(u))
t=t.c}},
cw:function(a,b,c){var u=this.bd(a,b)
if(u==null)this.bK(a,b,this.bE(b,c))
else u.b=c},
eM:function(){this.r=this.r+1&67108863},
bE:function(a,b){var u,t=this,s=new H.fO(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.eM()
return s},
dv:function(a){return J.cM(a)&0x3ffffff},
dw:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.D(a[t].a,b))return t
return-1},
i:function(a){return P.kG(this)},
bd:function(a,b){return a[b]},
cH:function(a,b){return a[b]},
bK:function(a,b,c){a[b]=c},
eF:function(a,b){delete a[b]},
eB:function(a,b){return this.bd(a,b)!=null},
bD:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bK(t,u,t)
this.eF(t,u)
return t}}
H.fJ.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.aI(u,1),args:[H.aI(u,0)]}}}
H.fO.prototype={}
H.fP.prototype={
gm:function(a){return this.a.a},
gU:function(a){var u=this.a,t=new H.fQ(u,u.r)
t.c=u.e
return t}}
H.fQ.prototype={
gC:function(a){return this.d},
t:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.aL(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.k5.prototype={
$1:function(a){return this.a(a)},
$S:8}
H.k6.prototype={
$2:function(a,b){return this.a(a,b)}}
H.k7.prototype={
$1:function(a){return this.a(a)}}
H.fI.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$ins:1}
H.c9.prototype={$ic9:1}
H.bb.prototype={$ibb:1}
H.dd.prototype={
gm:function(a){return a.length},
$iB:1,
$aB:function(){}}
H.ca.prototype={
h:function(a,b){H.aG(b,a,a.length)
return a[b]},
l:function(a,b,c){H.aG(b,a,a.length)
a[b]=c},
$ir:1,
$ar:function(){return[P.J]},
$ax:function(){return[P.J]},
$ij:1,
$aj:function(){return[P.J]},
$io:1,
$ao:function(){return[P.J]}}
H.de.prototype={
l:function(a,b,c){H.aG(b,a,a.length)
a[b]=c},
$ir:1,
$ar:function(){return[P.v]},
$ax:function(){return[P.v]},
$ij:1,
$aj:function(){return[P.v]},
$io:1,
$ao:function(){return[P.v]}}
H.hl.prototype={
h:function(a,b){H.aG(b,a,a.length)
return a[b]}}
H.hm.prototype={
h:function(a,b){H.aG(b,a,a.length)
return a[b]}}
H.hn.prototype={
h:function(a,b){H.aG(b,a,a.length)
return a[b]}}
H.ho.prototype={
h:function(a,b){H.aG(b,a,a.length)
return a[b]}}
H.hp.prototype={
h:function(a,b){H.aG(b,a,a.length)
return a[b]}}
H.df.prototype={
gm:function(a){return a.length},
h:function(a,b){H.aG(b,a,a.length)
return a[b]}}
H.cb.prototype={
gm:function(a){return a.length},
h:function(a,b){H.aG(b,a,a.length)
return a[b]},
$icb:1,
$ibC:1}
H.cu.prototype={}
H.cv.prototype={}
H.cw.prototype={}
H.cx.prototype={}
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
P.eq.prototype={
ep:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bM(new P.jE(this,b),0),a)
else throw H.c(P.y("`setTimeout()` not found."))},
eq:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bM(new P.jD(this,a,Date.now(),b),0),a)
else throw H.c(P.y("Periodic timer."))},
$idB:1}
P.jE.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.jD.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.ee(u,q)}s.c=r
t.d.$1(s)}}
P.bF.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.e(this.a)+")"}}
P.bG.prototype={
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
if(t instanceof P.bF){s=t.b
if(s===2){u=q.d
if(u==null||u.length===0){q.b=null
return!1}if(0>=u.length)return H.d(u,-1)
q.a=u.pop()
continue}else{u=t.a
if(s===3)throw u
else{r=J.aJ(u)
if(!!r.$ibG){u=q.d
if(u==null)u=q.d=[]
u.push(q.a)
q.a=r.a
continue}else{q.c=r
continue}}}}else{q.b=t
return!0}}return!1}}
P.jA.prototype={
gU:function(a){return new P.bG(this.a())}}
P.dN.prototype={}
P.dw.prototype={}
P.i4.prototype={}
P.dB.prototype={}
P.jN.prototype={}
P.jW.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.di():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u}}
P.jl.prototype={
i9:function(a){var u,t,s,r=null
try{if(C.f===$.ap){a.$0()
return}P.oC(r,r,this,a)}catch(s){u=H.af(s)
t=H.kZ(s)
P.m1(r,r,this,u,t)}},
ia:function(a,b){var u,t,s,r=null
try{if(C.f===$.ap){a.$1(b)
return}P.oD(r,r,this,a,b)}catch(s){u=H.af(s)
t=H.kZ(s)
P.m1(r,r,this,u,t)}},
ib:function(a,b){return this.ia(a,b,null)},
he:function(a){return new P.jm(this,a)},
d3:function(a,b){return new P.jn(this,a,b)}}
P.jm.prototype={
$0:function(){return this.a.i9(this.b)}}
P.jn.prototype={
$1:function(a){return this.a.ib(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.ji.prototype={
gU:function(a){var u=new P.e1(this,this.r)
u.c=this.e
return u},
gm:function(a){return this.a},
O:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.ez(b)
return t}},
ez:function(a){var u=this.d
if(u==null)return!1
return this.bA(this.cG(u,a),a)>=0},
n:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cz(u==null?s.b=P.kP():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cz(t==null?s.c=P.kP():t,b)}else return s.es(0,b)},
es:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.kP()
u=s.cB(b)
t=r[u]
if(t==null)r[u]=[s.bx(b)]
else{if(s.bA(t,b)>=0)return!1
t.push(s.bx(b))}return!0},
L:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fL(this.c,b)
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
bx:function(a){var u,t=this,s=new P.jj(a)
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
cB:function(a){return J.cM(a)&1073741823},
cG:function(a,b){return a[this.cB(b)]},
bA:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.D(a[t].a,b))return t
return-1}}
P.jj.prototype={}
P.e1.prototype={
gC:function(a){return this.d},
t:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.aL(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fE.prototype={}
P.fR.prototype={
$2:function(a,b){this.a.l(0,a,b)},
$S:3}
P.fS.prototype={$ir:1,$ij:1,$io:1}
P.x.prototype={
gU:function(a){return new H.b8(a,this.gm(a))},
I:function(a,b){return this.h(a,b)},
ih:function(a,b){var u,t,s=this,r=H.b([],[H.oV(s,a,"x",0)])
C.b.sm(r,s.gm(a))
u=0
while(!0){t=s.gm(a)
if(typeof t!=="number")return H.w(t)
if(!(u<t))break
t=s.h(a,u)
if(u>=r.length)return H.d(r,u)
r[u]=t;++u}return r},
ig:function(a){return this.ih(a,!0)},
hx:function(a,b,c,d){var u
P.aT(b,c,this.gm(a))
for(u=b;u<c;++u)this.l(a,u,d)},
i:function(a){return P.kz(a,"[","]")}}
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
P.a1.prototype={
F:function(a,b){var u,t
for(u=J.aJ(this.ga_(a));u.t();){t=u.gC(u)
b.$2(t,this.h(a,t))}},
gm:function(a){return J.ag(this.ga_(a))},
i:function(a){return P.kG(a)},
$iQ:1}
P.jF.prototype={
l:function(a,b,c){throw H.c(P.y("Cannot modify unmodifiable map"))}}
P.fX.prototype={
h:function(a,b){return J.bR(this.a,b)},
l:function(a,b,c){J.kq(this.a,b,c)},
F:function(a,b){J.l8(this.a,b)},
gm:function(a){return J.ag(this.a)},
i:function(a){return J.a4(this.a)},
$iQ:1}
P.dI.prototype={}
P.jp.prototype={
aa:function(a,b){var u
for(u=J.aJ(b);u.t();)this.n(0,u.gC(u))},
i:function(a){return P.kz(this,"{","}")},
I:function(a,b){var u,t,s
P.ly(b,"index")
for(u=P.nU(this,this.r),t=0;u.t();){s=u.d
if(b===t)return s;++t}throw H.c(P.L(b,this,"index",null,t))},
$ir:1,
$ij:1}
P.e2.prototype={}
P.ew.prototype={}
P.eW.prototype={
hN:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.aT(a0,a1,b.length)
u=$.mA()
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
if(l<=a1){k=H.k4(C.a.E(b,n))
j=H.k4(C.a.E(b,n+1))
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
r.a=g+H.bz(m)
s=n
continue}}throw H.c(P.S("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.a.q(b,s,a1)
f=g.length
if(q>=0)P.lc(b,p,a1,q,o,f)
else{e=C.c.b9(f-1,4)+1
if(e===1)throw H.c(P.S(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.a.aT(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.lc(b,p,a1,q,o,d)
else{e=C.c.b9(d,4)
if(e===1)throw H.c(P.S(c,b,a1))
if(e>1)b=C.a.aT(b,a1,a1,e===2?"==":"=")}return b}}
P.eX.prototype={}
P.f1.prototype={}
P.f6.prototype={}
P.fl.prototype={}
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
if(r>b)q.a+=C.a.q(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.mL(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.iL.prototype={
ghw:function(){return C.M}}
P.iN.prototype={
bV:function(a){var u,t,s,r=P.aT(0,null,a.length)
if(typeof r!=="number")return r.M()
u=r-0
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.jL(t)
if(s.eH(a,0,r)!==r)s.cV(J.mH(a,r-1),0)
return new Uint8Array(t.subarray(0,H.oa(0,s.b,t.length)))}}
P.jL.prototype={
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
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.a.E(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cV(r,C.a.E(a,p)))s=p}else if(r<=2047){q=n.b
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
P.iM.prototype={
bV:function(a){var u,t,s,r,q,p,o,n,m=P.nF(!1,a,0,null)
if(m!=null)return m
u=P.aT(0,null,J.ag(a))
t=P.m3(a,0,u)
if(t>0){s=P.ch(a,0,t)
if(t===u)return s
r=new P.R(s)
q=t
p=!1}else{q=0
r=null
p=!0}if(r==null)r=new P.R("")
o=new P.jK(!1,r)
o.c=p
o.hi(a,q,u)
if(o.e>0){H.q(P.S("Unfinished UTF-8 octet sequence",a,u))
r.a+=H.bz(65533)
o.f=o.e=o.d=0}n=r.a
return n.charCodeAt(0)==0?n:n}}
P.jK.prototype={
hi:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=this,k="Bad UTF-8 encoding 0x",j=l.d,i=l.e,h=l.f
l.f=l.e=l.d=0
$label0$0:for(u=J.bk(a),t=l.b,s=b;!0;s=n){$label1$1:if(i>0){do{if(s===c)break $label0$0
r=u.h(a,s)
if(typeof r!=="number")return r.a7()
if((r&192)!==128){q=P.S(k+C.c.b7(r,16),a,s)
throw H.c(q)}else{j=(j<<6|r&63)>>>0;--i;++s}}while(i>0)
q=h-1
if(q<0||q>=4)return H.d(C.v,q)
if(j<=C.v[q]){q=P.S("Overlong encoding of 0x"+C.c.b7(j,16),a,s-h-1)
throw H.c(q)}if(j>1114111){q=P.S("Character outside valid Unicode range: 0x"+C.c.b7(j,16),a,s-h-1)
throw H.c(q)}if(!l.c||j!==65279)t.a+=H.bz(j)
l.c=!1}if(typeof c!=="number")return H.w(c)
q=s<c
for(;q;){p=P.m3(a,s,c)
if(p>0){l.c=!1
o=s+p
t.a+=P.ch(a,s,o)
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
P.aH.prototype={}
P.ac.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.ac&&this.a===b.a&&!0},
aP:function(a,b){return C.c.aP(this.a,b.a)},
gH:function(a){var u=this.a
return(u^C.c.aN(u,30))&1073741823},
i:function(a){var u=this,t=P.mU(H.no(u)),s=P.cW(H.nm(u)),r=P.cW(H.ni(u)),q=P.cW(H.nj(u)),p=P.cW(H.nl(u)),o=P.cW(H.nn(u)),n=P.mV(H.nk(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.J.prototype={}
P.b3.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.b3&&this.a===b.a},
gH:function(a){return C.c.gH(this.a)},
aP:function(a,b){return C.c.aP(this.a,b.a)},
i:function(a){var u,t,s,r=new P.fi(),q=this.a
if(q<0)return"-"+new P.b3(0-q).i(0)
u=r.$1(C.c.a4(q,6e7)%60)
t=r.$1(C.c.a4(q,1e6)%60)
s=new P.fh().$1(q%1e6)
return""+C.c.a4(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
P.fh.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.fi.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.br.prototype={}
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
r=P.ky(q.b)
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
if(typeof t!=="number")return t.S()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gm:function(a){return this.f}}
P.iE.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iA.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cg.prototype={
i:function(a){return"Bad state: "+this.a}}
P.f3.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.ky(u)+"."}}
P.hw.prototype={
i:function(a){return"Out of Memory"},
$ibr:1}
P.dt.prototype={
i:function(a){return"Stack Overflow"},
$ibr:1}
P.fb.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dV.prototype={
i:function(a){return"Exception: "+this.a}}
P.fv.prototype={
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
return h+l+j+k+"\n"+C.a.B(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.e(g)+")"):h}}
P.fx.prototype={}
P.v.prototype={}
P.j.prototype={
bs:function(a,b){return new H.cq(this,b,[H.kY(this,"j",0)])},
gm:function(a){var u,t=this.gU(this)
for(u=0;t.t();)++u
return u},
gaI:function(a){var u,t=this.gU(this)
if(!t.t())throw H.c(H.fF())
u=t.gC(t)
if(t.t())throw H.c(H.n0())
return u},
I:function(a,b){var u,t,s
P.ly(b,"index")
for(u=this.gU(this),t=0;u.t();){s=u.gC(u)
if(b===t)return s;++t}throw H.c(P.L(b,this,"index",null,t))},
i:function(a){return P.n_(this,"(",")")}}
P.fG.prototype={}
P.o.prototype={$ir:1,$ij:1}
P.Q.prototype={}
P.bc.prototype={
gH:function(a){return P.a2.prototype.gH.call(this,this)},
i:function(a){return"null"}}
P.aa.prototype={}
P.a2.prototype={constructor:P.a2,$ia2:1,
p:function(a,b){return this===b},
gH:function(a){return H.cd(this)},
i:function(a){return"Instance of '"+H.e(H.ce(this))+"'"},
toString:function(){return this.i(this)}}
P.h.prototype={}
P.R.prototype={
gm:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
P.iJ.prototype={
$2:function(a,b){var u,t,s,r=J.cG(b).du(b,"=")
if(r===-1){if(b!=="")J.kq(a,P.kT(b,0,b.length,this.a,!0),"")}else if(r!==0){u=C.a.q(b,0,r)
t=C.a.a6(b,r+1)
s=this.a
J.kq(a,P.kT(u,0,u.length,s,!0),P.kT(t,0,t.length,s,!0))}return a}}
P.iG.prototype={
$2:function(a,b){throw H.c(P.S("Illegal IPv4 address, "+a,this.a,b))}}
P.iH.prototype={
$2:function(a,b){throw H.c(P.S("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.iI.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.eK(C.a.q(this.b,a,b),null,16)
if(typeof u!=="number")return u.S()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u}}
P.bH.prototype={
gdZ:function(){return this.b},
gc7:function(a){var u=this.c
if(u==null)return""
if(C.a.a3(u,"["))return C.a.q(u,1,u.length-1)
return u},
gbn:function(a){var u=this.d
if(u==null)return P.lV(this.a)
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
s=P.kR(null,0,0,b)
return new P.bH(q,o,m,n,u,s,r.r)},
gcd:function(){var u,t=this.Q
if(t==null){t=this.f
u=P.h
u=this.Q=new P.dI(P.lL(t==null?"":t),[u,u])
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
if(!!J.O(b).$ikL)if(s.a==b.gbt())if(s.c!=null===b.gdq())if(s.b==b.gdZ())if(s.gc7(s)==b.gc7(b))if(s.gbn(s)==b.gbn(b))if(s.e===b.gdM(b)){u=s.f
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
gH:function(a){var u=this.z
return u==null?this.z=C.a.gH(this.i(0)):u},
$ikL:1,
gbt:function(){return this.a},
gdM:function(a){return this.e}}
P.jG.prototype={
$1:function(a){throw H.c(P.S("Invalid port",this.a,this.b+1))}}
P.jH.prototype={
$1:function(a){return P.ex(C.W,a,C.e,!1)}}
P.jJ.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.e(P.ex(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.e(P.ex(C.h,b,C.e,!0))}}}
P.jI.prototype={
$2:function(a,b){var u,t
if(b==null||typeof b==="string")this.a.$2(a,b)
else for(u=J.aJ(b),t=this.a;u.t();)t.$2(a,u.gC(u))}}
P.iF.prototype={
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
return q.c=new P.jb("data",p,p,p,P.cC(u,o,s,C.z,!1),r,p)},
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
J.mI(u,0,96,b)
return u},
$S:17}
P.jS.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.a.E(b,s)^96
if(r>=t)return H.d(a,r)
a[r]=c}}}
P.jT.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.a.E(b,0),t=C.a.E(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.d(a,r)
a[r]=c}}}
P.js.prototype={
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
if(typeof u!=="number")return u.A()
return P.eK(C.a.q(t.a,u+1,t.e),null,null)}if(t.gcI())return 80
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
if(t>=u.r)return C.X
t=P.h
return new P.dI(P.lL(u.gcc(u)),[t,t])},
dR:function(a,b){var u,t,s,r,q,p=this,o=null,n=p.gbt(),m=n==="file",l=p.c,k=l>0?C.a.q(p.a,p.b+3,l):"",j=p.gds()?p.gbn(p):o
l=p.c
if(l>0)u=C.a.q(p.a,l,p.d)
else u=k.length!==0||j!=null||m?"":o
l=p.a
t=C.a.q(l,p.e,p.f)
if(!m)s=u!=null&&t.length!==0
else s=!0
if(s&&!C.a.a3(t,"/"))t="/"+t
r=P.kR(o,0,0,b)
s=p.r
q=s<l.length?C.a.a6(l,s+1):o
return new P.bH(n,k,u,j,t,r,q)},
gH:function(a){var u=this.y
return u==null?this.y=C.a.gH(this.a):u},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.O(b).$ikL&&this.a===b.i(0)},
i:function(a){return this.a},
$ikL:1}
P.jb.prototype={}
W.p.prototype={}
W.eN.prototype={
gm:function(a){return a.length}}
W.eO.prototype={
i:function(a){return String(a)}}
W.eP.prototype={
i:function(a){return String(a)}}
W.bn.prototype={$ibn:1}
W.bo.prototype={$ibo:1}
W.bp.prototype={
ck:function(a,b,c){if(c!=null)return a.getContext(b,P.oM(c))
return a.getContext(b)},
e2:function(a,b){return this.ck(a,b,null)},
$ibp:1}
W.b1.prototype={
gm:function(a){return a.length}}
W.f7.prototype={
gm:function(a){return a.length}}
W.H.prototype={$iH:1}
W.bV.prototype={
gm:function(a){return a.length}}
W.f8.prototype={}
W.ah.prototype={}
W.as.prototype={}
W.f9.prototype={
gm:function(a){return a.length}}
W.fa.prototype={
gm:function(a){return a.length}}
W.fd.prototype={
gm:function(a){return a.length}}
W.ak.prototype={$iak:1}
W.fe.prototype={
i:function(a){return String(a)}}
W.cY.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
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
W.cZ.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gaH(a))+" x "+H.e(this.gaB(a))},
p:function(a,b){var u
if(b==null)return!1
u=J.O(b)
return!!u.$ia8&&a.left===u.gbm(b)&&a.top===u.gbp(b)&&this.gaH(a)===u.gaH(b)&&this.gaB(a)===u.gaB(b)},
gH:function(a){return W.lT(C.d.gH(a.left),C.d.gH(a.top),C.d.gH(this.gaH(a)),C.d.gH(this.gaB(a)))},
gd4:function(a){return a.bottom},
gaB:function(a){return a.height},
gbm:function(a){return a.left},
gci:function(a){return a.right},
gbp:function(a){return a.top},
gaH:function(a){return a.width},
$ia8:1,
$aa8:function(){return[P.aa]}}
W.ff.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
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
W.fg.prototype={
gm:function(a){return a.length}}
W.j9.prototype={
gm:function(a){return this.b.length},
h:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
l:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
this.a.replaceChild(c,u[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gU:function(a){var u=this.ig(this)
return new J.ab(u,u.length)},
$ar:function(){return[W.P]},
$ax:function(){return[W.P]},
$aj:function(){return[W.P]},
$ao:function(){return[W.P]}}
W.P.prototype={
ghd:function(a){return new W.jc(a)},
gbT:function(a){return new W.j9(a,a.children)},
gd5:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.S()
if(s<0)s=-s*0
if(typeof r!=="number")return r.S()
if(r<0)r=-r*0
return new P.a8(u,t,s,r,[P.aa])},
i:function(a){return a.localName},
ac:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.lk
if(u==null){u=H.b([],[W.aR])
t=new W.dh(u)
u.push(W.lS(null))
u.push(W.lU())
$.lk=t
d=t}else d=u
u=$.lj
if(u==null){u=new W.ey(d)
$.lj=u
c=u}else{u.a=d
c=u}}if($.aM==null){u=document
t=u.implementation.createHTMLDocument("")
$.aM=t
$.kx=t.createRange()
s=$.aM.createElement("base")
s.href=u.baseURI
$.aM.head.appendChild(s)}u=$.aM
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.aM
if(!!this.$ibo)r=u.body
else{r=u.createElement(a.tagName)
$.aM.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.b.O(C.U,a.tagName)){$.kx.selectNodeContents(r)
q=$.kx.createContextualFragment(b)}else{r.innerHTML=b
q=$.aM.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.aM.body
if(r==null?u!=null:r!==u)J.la(r)
c.cl(q)
document.adoptNode(q)
return q},
hl:function(a,b,c){return this.ac(a,b,c,null)},
e4:function(a,b){a.textContent=null
a.appendChild(this.ac(a,b,null,null))},
$iP:1,
gdU:function(a){return a.tagName}}
W.fk.prototype={
$1:function(a){return!!J.O(a).$iP}}
W.i.prototype={$ii:1}
W.f.prototype={
h6:function(a,b,c,d){if(c!=null)this.eu(a,b,c,!1)},
eu:function(a,b,c,d){return a.addEventListener(b,H.bM(c,1),!1)}}
W.al.prototype={$ial:1}
W.bY.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
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
$ibY:1}
W.fq.prototype={
gm:function(a){return a.length}}
W.fu.prototype={
gm:function(a){return a.length}}
W.at.prototype={$iat:1}
W.fA.prototype={
gm:function(a){return a.length}}
W.c_.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
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
W.aO.prototype={$iaO:1,
gd7:function(a){return a.data}}
W.c0.prototype={$ic0:1}
W.bw.prototype={$ibw:1}
W.fT.prototype={
i:function(a){return String(a)}}
W.he.prototype={
gm:function(a){return a.length}}
W.c8.prototype={$ic8:1}
W.hf.prototype={
h:function(a,b){return P.aW(a.get(b))},
F:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aW(u.value[1]))}},
ga_:function(a){var u=H.b([],[P.h])
this.F(a,new W.hg(u))
return u},
gm:function(a){return a.size},
l:function(a,b,c){throw H.c(P.y("Not supported"))},
$aa1:function(){return[P.h,null]},
$iQ:1,
$aQ:function(){return[P.h,null]}}
W.hg.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hh.prototype={
h:function(a,b){return P.aW(a.get(b))},
F:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aW(u.value[1]))}},
ga_:function(a){var u=H.b([],[P.h])
this.F(a,new W.hi(u))
return u},
gm:function(a){return a.size},
l:function(a,b,c){throw H.c(P.y("Not supported"))},
$aa1:function(){return[P.h,null]},
$iQ:1,
$aQ:function(){return[P.h,null]}}
W.hi.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aw.prototype={$iaw:1}
W.hj.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.aw]},
$iB:1,
$aB:function(){return[W.aw]},
$ax:function(){return[W.aw]},
$ij:1,
$aj:function(){return[W.aw]},
$io:1,
$ao:function(){return[W.aw]}}
W.ax.prototype={$iax:1}
W.a3.prototype={
gaI:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.lC("No elements"))
if(t>1)throw H.c(P.lC("More than one element"))
return u.firstChild},
aa:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
l:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.d(t,b)
u.replaceChild(c,t[b])},
gU:function(a){var u=this.a.childNodes
return new W.d1(u,u.length)},
gm:function(a){return this.a.childNodes.length},
h:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$ar:function(){return[W.E]},
$ax:function(){return[W.E]},
$aj:function(){return[W.E]},
$ao:function(){return[W.E]}}
W.E.prototype={
i3:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
i7:function(a,b){var u,t
try{u=a.parentNode
J.mF(u,b,a)}catch(t){H.af(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.ea(a):u},
fN:function(a,b,c){return a.replaceChild(b,c)},
$iE:1}
W.dg.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
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
W.ay.prototype={$iay:1,
gm:function(a){return a.length}}
W.hz.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.ay]},
$iB:1,
$aB:function(){return[W.ay]},
$ax:function(){return[W.ay]},
$ij:1,
$aj:function(){return[W.ay]},
$io:1,
$ao:function(){return[W.ay]}}
W.hK.prototype={
h:function(a,b){return P.aW(a.get(b))},
F:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aW(u.value[1]))}},
ga_:function(a){var u=H.b([],[P.h])
this.F(a,new W.hL(u))
return u},
gm:function(a){return a.size},
l:function(a,b,c){throw H.c(P.y("Not supported"))},
$aa1:function(){return[P.h,null]},
$iQ:1,
$aQ:function(){return[P.h,null]}}
W.hL.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hN.prototype={
gm:function(a){return a.length}}
W.aA.prototype={$iaA:1}
W.hY.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.aA]},
$iB:1,
$aB:function(){return[W.aA]},
$ax:function(){return[W.aA]},
$ij:1,
$aj:function(){return[W.aA]},
$io:1,
$ao:function(){return[W.aA]}}
W.aB.prototype={$iaB:1}
W.hZ.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
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
W.aC.prototype={$iaC:1,
gm:function(a){return a.length}}
W.i2.prototype={
h:function(a,b){return a.getItem(b)},
l:function(a,b,c){a.setItem(b,c)},
F:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga_:function(a){var u=H.b([],[P.h])
this.F(a,new W.i3(u))
return u},
gm:function(a){return a.length},
$aa1:function(){return[P.h,P.h]},
$iQ:1,
$aQ:function(){return[P.h,P.h]}}
W.i3.prototype={
$2:function(a,b){return this.a.push(a)}}
W.an.prototype={$ian:1}
W.dx.prototype={
ac:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bu(a,b,c,d)
u=W.mW("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.a3(t).aa(0,new W.a3(u))
return t}}
W.i6.prototype={
ac:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bu(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.B.ac(u.createElement("table"),b,c,d)
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
W.i7.prototype={
ac:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bu(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.B.ac(u.createElement("table"),b,c,d)
u.toString
u=new W.a3(u)
s=u.gaI(u)
t.toString
s.toString
new W.a3(t).aa(0,new W.a3(s))
return t}}
W.ci.prototype={$ici:1}
W.aD.prototype={$iaD:1}
W.ao.prototype={$iao:1}
W.ia.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
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
W.ib.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
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
W.ii.prototype={
gm:function(a){return a.length}}
W.aE.prototype={$iaE:1}
W.bB.prototype={$ibB:1}
W.im.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
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
W.io.prototype={
gm:function(a){return a.length}}
W.bf.prototype={}
W.iK.prototype={
i:function(a){return String(a)}}
W.j1.prototype={
gm:function(a){return a.length}}
W.bi.prototype={
gho:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.y("deltaY is not supported"))},
ghn:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.y("deltaX is not supported"))},
$ibi:1}
W.cr.prototype={
fO:function(a,b){return a.requestAnimationFrame(H.bM(b,1))},
eG:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.ja.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
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
W.dQ.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
p:function(a,b){var u
if(b==null)return!1
u=J.O(b)
return!!u.$ia8&&a.left===u.gbm(b)&&a.top===u.gbp(b)&&a.width===u.gaH(b)&&a.height===u.gaB(b)},
gH:function(a){return W.lT(C.d.gH(a.left),C.d.gH(a.top),C.d.gH(a.width),C.d.gH(a.height))},
gaB:function(a){return a.height},
gaH:function(a){return a.width}}
W.jf.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.at]},
$iB:1,
$aB:function(){return[W.at]},
$ax:function(){return[W.at]},
$ij:1,
$aj:function(){return[W.at]},
$io:1,
$ao:function(){return[W.at]}}
W.e7.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
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
W.jt.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
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
W.jy.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
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
W.j8.prototype={
F:function(a,b){var u,t,s,r,q
for(u=this.ga_(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.m)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga_:function(a){var u,t,s,r=this.a.attributes,q=H.b([],[P.h])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.d(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q},
$aa1:function(){return[P.h,P.h]},
$aQ:function(){return[P.h,P.h]}}
W.jc.prototype={
h:function(a,b){return this.a.getAttribute(b)},
l:function(a,b,c){this.a.setAttribute(b,c)},
gm:function(a){return this.ga_(this).length}}
W.jd.prototype={}
W.je.prototype={
$1:function(a){return this.a.$1(a)}}
W.cs.prototype={
el:function(a){var u
if($.ct.ghI($.ct)){for(u=0;u<262;++u)$.ct.l(0,C.T[u],W.oX())
for(u=0;u<12;++u)$.ct.l(0,C.o[u],W.oY())}},
aO:function(a){return $.mB().O(0,W.bW(a))},
ap:function(a,b,c){var u=$.ct.h(0,H.e(W.bW(a))+"::"+b)
if(u==null)u=$.ct.h(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$iaR:1}
W.K.prototype={
gU:function(a){return new W.d1(a,this.gm(a))}}
W.dh.prototype={
aO:function(a){return C.b.cZ(this.a,new W.hr(a))},
ap:function(a,b,c){return C.b.cZ(this.a,new W.hq(a,b,c))},
$iaR:1}
W.hr.prototype={
$1:function(a){return a.aO(this.a)}}
W.hq.prototype={
$1:function(a){return a.ap(this.a,this.b,this.c)}}
W.ef.prototype={
eo:function(a,b,c,d){var u,t,s
this.a.aa(0,c)
u=b.bs(0,new W.jq())
t=b.bs(0,new W.jr())
this.b.aa(0,u)
s=this.c
s.aa(0,C.w)
s.aa(0,t)},
aO:function(a){return this.a.O(0,W.bW(a))},
ap:function(a,b,c){var u=this,t=W.bW(a),s=u.c
if(s.O(0,H.e(t)+"::"+b))return u.d.ha(c)
else if(s.O(0,"*::"+b))return u.d.ha(c)
else{s=u.b
if(s.O(0,H.e(t)+"::"+b))return!0
else if(s.O(0,"*::"+b))return!0
else if(s.O(0,H.e(t)+"::*"))return!0
else if(s.O(0,"*::*"))return!0}return!1},
$iaR:1}
W.jq.prototype={
$1:function(a){return!C.b.O(C.o,a)}}
W.jr.prototype={
$1:function(a){return C.b.O(C.o,a)}}
W.jB.prototype={
ap:function(a,b,c){if(this.ed(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.O(0,b)
return!1}}
W.jC.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)}}
W.jz.prototype={
aO:function(a){var u=J.O(a)
if(!!u.$icf)return!1
u=!!u.$ik
if(u&&W.bW(a)==="foreignObject")return!1
if(u)return!0
return!1},
ap:function(a,b,c){if(b==="is"||C.a.a3(b,"on"))return!1
return this.aO(a)},
$iaR:1}
W.d1.prototype={
t:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.bR(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gC:function(a){return this.d}}
W.aR.prototype={}
W.jo.prototype={}
W.ey.prototype={
cl:function(a){new W.jM(this).$2(a,null)},
aY:function(a,b){if(b==null)J.la(a)
else b.removeChild(a)},
fT:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.mJ(a)
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
try{t=J.a4(a)}catch(r){H.af(r)}try{s=W.bW(a)
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
t=H.b(u.slice(0),[H.aI(u,0)])
for(s=f.ga_(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.d(t,s)
r=t[s]
if(!p.a.ap(a,J.mM(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.e(e)+" "+r+'="'+H.e(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.O(a).$ici)p.cl(a.content)}}
W.jM.prototype={
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
W.dP.prototype={}
W.dR.prototype={}
W.dS.prototype={}
W.dT.prototype={}
W.dU.prototype={}
W.dW.prototype={}
W.dX.prototype={}
W.dY.prototype={}
W.dZ.prototype={}
W.e3.prototype={}
W.e4.prototype={}
W.e5.prototype={}
W.e6.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.ee.prototype={}
W.cy.prototype={}
W.cz.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.el.prototype={}
W.eo.prototype={}
W.ep.prototype={}
W.cA.prototype={}
W.cB.prototype={}
W.er.prototype={}
W.es.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eI.prototype={}
P.ju.prototype={
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
if(!!u.$ins)throw H.c(P.iB("structured clone of RegExp"))
if(!!u.$ial)return a
if(!!u.$ibn)return a
if(!!u.$ibY)return a
if(!!u.$iaO)return a
if(!!u.$ic9||!!u.$ibb||!!u.$ic8)return a
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
u.F(a,new P.jw(o,p))
return o.a}if(!!u.$io){t=p.c4(a)
o=p.b
if(t>=o.length)return H.d(o,t)
q=o[t]
if(q!=null)return q
return p.hk(a,t)}if(!!u.$in3){t=p.c4(a)
u=p.b
s=u.length
if(t>=s)return H.d(u,t)
q=o.b=u[t]
if(q!=null)return q
q={}
o.b=q
if(t>=s)return H.d(u,t)
u[t]=q
p.hD(a,new P.jx(o,p))
return o.b}throw H.c(P.iB("structured clone of other type"))},
hk:function(a,b){var u,t=J.bk(a),s=t.gm(a),r=new Array(s),q=this.b
if(b>=q.length)return H.d(q,b)
q[b]=r
if(typeof s!=="number")return H.w(s)
u=0
for(;u<s;++u){q=this.br(t.h(a,u))
if(u>=r.length)return H.d(r,u)
r[u]=q}return r}}
P.jw.prototype={
$2:function(a,b){this.a.a[a]=this.b.br(b)},
$S:3}
P.jx.prototype={
$2:function(a,b){this.a.b[a]=this.b.br(b)},
$S:3}
P.ev.prototype={$iaO:1,
gd7:function(a){return this.a}}
P.jX.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.jv.prototype={
hD:function(a,b){var u,t,s,r
for(u=Object.keys(a),t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,a[r])}}}
P.fr.prototype={
gbe:function(){var u=this.b,t=H.kY(u,"x",0)
return new H.c4(new H.cq(u,new P.fs(),[t]),new P.ft(),[t,W.P])},
l:function(a,b,c){var u=this.gbe()
J.mK(u.b.$1(J.eM(u.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gm:function(a){return J.ag(this.gbe().a)},
h:function(a,b){var u=this.gbe()
return u.b.$1(J.eM(u.a,b))},
gU:function(a){var u=P.kF(this.gbe(),!1,W.P)
return new J.ab(u,u.length)},
$ar:function(){return[W.P]},
$ax:function(){return[W.P]},
$aj:function(){return[W.P]},
$ao:function(){return[W.P]}}
P.fs.prototype={
$1:function(a){return!!J.O(a).$iP}}
P.ft.prototype={
$1:function(a){return H.l(a,"$iP")}}
P.jk.prototype={
gci:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.w(t)
return u+t},
gd4:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.w(t)
return u+t},
i:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
p:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.O(b)
if(!!u.$ia8){t=q.a
if(t==u.gbm(b)){s=q.b
if(s==u.gbp(b)){r=q.c
if(typeof t!=="number")return t.A()
if(typeof r!=="number")return H.w(r)
if(t+r===u.gci(b)){t=q.d
if(typeof s!=="number")return s.A()
if(typeof t!=="number")return H.w(t)
u=s+t===u.gd4(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gH:function(a){var u=this,t=u.a,s=J.cM(t),r=u.b,q=J.cM(r),p=u.c
if(typeof t!=="number")return t.A()
if(typeof p!=="number")return H.w(p)
p=C.c.gH(t+p)
t=u.d
if(typeof r!=="number")return r.A()
if(typeof t!=="number")return H.w(t)
t=C.c.gH(r+t)
return P.nT(P.jh(P.jh(P.jh(P.jh(0,s),q),p),t))}}
P.a8.prototype={
gbm:function(a){return this.a},
gbp:function(a){return this.b},
gaH:function(a){return this.c},
gaB:function(a){return this.d}}
P.aP.prototype={$iaP:1}
P.fM.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$ir:1,
$ar:function(){return[P.aP]},
$ax:function(){return[P.aP]},
$ij:1,
$aj:function(){return[P.aP]},
$io:1,
$ao:function(){return[P.aP]}}
P.aS.prototype={$iaS:1}
P.hu.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$ir:1,
$ar:function(){return[P.aS]},
$ax:function(){return[P.aS]},
$ij:1,
$aj:function(){return[P.aS]},
$io:1,
$ao:function(){return[P.aS]}}
P.hC.prototype={
gm:function(a){return a.length}}
P.cf.prototype={$icf:1}
P.i5.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$ir:1,
$ar:function(){return[P.h]},
$ax:function(){return[P.h]},
$ij:1,
$aj:function(){return[P.h]},
$io:1,
$ao:function(){return[P.h]}}
P.k.prototype={
gbT:function(a){return new P.fr(a,new W.a3(a))},
ac:function(a,b,c,d){var u,t,s,r,q,p=H.b([],[W.aR])
p.push(W.lS(null))
p.push(W.lU())
p.push(new W.jz())
c=new W.ey(new W.dh(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.q).hl(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.a3(s)
q=p.gaI(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ik:1}
P.aU.prototype={$iaU:1}
P.ip.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$ir:1,
$ar:function(){return[P.aU]},
$ax:function(){return[P.aU]},
$ij:1,
$aj:function(){return[P.aU]},
$io:1,
$ao:function(){return[P.aU]}}
P.e_.prototype={}
P.e0.prototype={}
P.ea.prototype={}
P.eb.prototype={}
P.em.prototype={}
P.en.prototype={}
P.et.prototype={}
P.eu.prototype={}
P.bC.prototype={$ir:1,
$ar:function(){return[P.v]},
$ij:1,
$aj:function(){return[P.v]},
$io:1,
$ao:function(){return[P.v]}}
P.eR.prototype={
gm:function(a){return a.length}}
P.eS.prototype={
h:function(a,b){return P.aW(a.get(b))},
F:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aW(u.value[1]))}},
ga_:function(a){var u=H.b([],[P.h])
this.F(a,new P.eT(u))
return u},
gm:function(a){return a.size},
l:function(a,b,c){throw H.c(P.y("Not supported"))},
$aa1:function(){return[P.h,null]},
$iQ:1,
$aQ:function(){return[P.h,null]}}
P.eT.prototype={
$2:function(a,b){return this.a.push(a)}}
P.eU.prototype={
gm:function(a){return a.length}}
P.bm.prototype={}
P.hv.prototype={
gm:function(a){return a.length}}
P.dO.prototype={}
P.dn.prototype={
ic:function(a,b,c,d,e,f,g){var u,t=J.O(g)
if(!!t.$iaO)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.oN(g))
return}if(!!t.$ic0)t=!0
else t=!1
if(t){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.cN("Incorrect number or type of arguments"))}}
P.i0.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return P.aW(a.item(b))},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$ir:1,
$ar:function(){return[[P.Q,,,]]},
$ax:function(){return[[P.Q,,,]]},
$ij:1,
$aj:function(){return[[P.Q,,,]]},
$io:1,
$ao:function(){return[[P.Q,,,]]}}
P.ei.prototype={}
P.ej.prototype={}
K.aK.prototype={
aC:function(a,b){return!0},
i:function(a){return"all"}}
K.d2.prototype={
aC:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)if(u[s].aC(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.m)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s}}
K.b9.prototype={}
K.a6.prototype={
aC:function(a,b){return!this.e9(0,b)},
i:function(a){return"!["+this.co(0)+"]"}}
K.hF.prototype={
aC:function(a,b){if(typeof b!=="number")return H.w(b)
return this.a<=b&&this.b>=b},
i:function(a){var u=H.bz(this.a),t=H.bz(this.b)
return u+".."+t}}
K.hO.prototype={
eh:function(a){var u,t,s,r
if(a.a.length<=0)throw H.c(P.u("May not create a Set with zero characters."))
u=P.v
t=new H.I([u,P.aH])
for(s=new H.b8(a,a.gm(a));s.t();)t.l(0,s.d,!0)
r=P.kF(t.ga_(t),!0,u)
C.b.e7(r)
this.a=r},
aC:function(a,b){return C.b.O(this.a,b)},
i:function(a){return P.ch(this.a,0,null)}}
L.du.prototype={
j:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new L.dF(this.a.k(0,b))
r.a=H.b([],[K.b9])
r.c=!1
this.c.push(r)
return r},
hy:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
if(r.aC(0,a))return r}return},
i:function(a){return this.b},
cS:function(){var u,t,s,r,q,p=this,o="("+p.b+")",n=p.d
if(n!=null){n=n.b
o+=" => ["+n+"]"
u=p.a
if(u.c.O(0,n))o+=" (consume)"
for(n=p.d.c,n=n.ga_(n),n=n.gU(n);n.t();){t=n.gC(n)
o+="\n"
s=p.d.c.h(0,t)
t=o+("  -- "+H.e(t)+" => ["+H.e(s)+"]")
o=u.c.O(0,s)?t+" (consume)":t}}for(n=p.c,u=n.length,r=0;r<n.length;n.length===u||(0,H.m)(n),++r){q=n[r]
o=o+"\n"+("  -- "+q.i(0))}return o.charCodeAt(0)==0?o:o}}
L.dC.prototype={
i:function(a){var u=H.l3(this.b,"\n","\\n"),t=H.l3(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
L.dD.prototype={
aE:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.m)(c),++t){s=c[t]
this.c.l(0,s,b)}},
i:function(a){return this.b}}
L.ij.prototype={
k:function(a,b){var u=this.a.h(0,b)
if(u==null){u=new L.du(this,b)
u.c=H.b([],[L.dF])
this.a.l(0,b,u)}return u},
R:function(a){var u,t=this.b.h(0,a)
if(t==null){t=new L.dD(a)
u=P.h
t.c=new H.I([u,u])
this.b.l(0,a,t)}return t},
cj:function(a){return this.ij(a)},
ij:function(a){var u=this
return P.of(function(){var t=a
var s=0,r=1,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
return function $async$cj(b,a0){if(b===1){q=a0
s=r}while(true)switch(s){case 0:g=u.d
f=[P.v]
e=H.b([],f)
d=H.b([],f)
c=H.b([],f)
p=null,o=0,n=0,m=0
case 2:if(!!0){s=3
break}if(c.length!==0)l=C.b.ce(c,0)
else{if(!t.t()){s=3
break}l=t.d}d.push(l);++o
k=g.hy(l)
s=k==null?4:6
break
case 4:if(p==null){j=P.ch(d,0,null)
throw H.c(P.u("Untokenizable string [state: "+g.b+", index "+o+']: "'+j+'"'))}if(!!d.fixed$length)H.q(P.y("removeRange"))
P.aT(0,m,d.length)
d.splice(0,m-0)
C.b.aa(c,d)
d=H.b([],f)
e=H.b([],f)
g=u.d
s=!u.c.O(0,p.a)?7:8
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
p=new L.dC(h==null?i.b:h,j,o)
m=d.length
n=o}case 5:s=2
break
case 3:s=p!=null&&!u.c.O(0,p.a)?10:11
break
case 10:s=12
return p
case 12:case 11:return P.nR()
case 1:return P.nS(q)}}},L.dC)},
i:function(a){var u,t=new P.R(""),s=this.d
if(s!=null)t.a=s.cS()+"\n"
for(s=this.a,s=s.gil(s),s=s.gU(s);s.t();){u=s.gC(s)
if(u!=this.d)t.a+=u.cS()+"\n"}s=t.a
return s.charCodeAt(0)==0?s:s}}
L.dF.prototype={
i:function(a){return this.b.b+": "+this.co(0)}}
O.b2.prototype={
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
I:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
n:function(a,b){var u,t,s=this,r=[H.kY(s,"b2",0)]
if(s.fv(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.ek(t,H.b([b],r))}},
$ij:1}
O.c7.prototype={
gm:function(a){return this.a.length},
gw:function(){var u=this.b
return u==null?this.b=D.N():u},
aJ:function(){var u=this.b
if(u!=null)u.J(null)},
ga0:function(a){var u=this.a
if(u.length>0)return C.b.gas(u)
else return V.dc()},
dP:function(a){var u=this.a
if(a==null)u.push(V.dc())
else u.push(a)
this.aJ()},
cb:function(){var u=this.a
if(u.length>0){u.pop()
this.aJ()}}}
E.eY.prototype={}
E.aN.prototype={
sai:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gw().L(0,s.gdJ())
u=s.c
if(u!=null)u.gw().n(0,s.gdJ())
t=new D.C("shape",r,s.c)
t.b=!0
s.aD(t)}},
sae:function(a){var u,t,s=this
if(!J.D(s.r,a)){u=s.r
if(u!=null)u.gw().L(0,s.gdH())
if(a!=null)a.gw().n(0,s.gdH())
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
else s.a.push(r.B(0,s.ga0(s)))
s.aJ()
a.dQ(t.f)
s=a.dy
u=(s&&C.b).gas(s)
if(u!=null&&t.d!=null)u.i6(a,t)
for(s=t.y.a,s=new J.ab(s,s.length);s.t();)s.d.aS(a)
a.dO()
a.dx.cb()},
aD:function(a){var u=this.z
if(u!=null)u.J(a)},
Z:function(){return this.aD(null)},
dK:function(a){this.e=null
this.aD(a)},
hU:function(){return this.dK(null)},
dI:function(a){this.aD(a)},
hT:function(){return this.dI(null)},
dG:function(a){this.aD(a)},
hQ:function(){return this.dG(null)},
hP:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gdF(),s=[{func:1,ret:-1,args:[D.Y]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bs()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.Z()},
hS:function(a,b){var u,t
for(u=b.gU(b),t=this.gdF();u.t();)u.gC(u).gw().L(0,t)
this.Z()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.hG.prototype={
eg:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.ac(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.c7()
t=[V.aQ]
u.a=H.b([],t)
u.gw().n(0,new E.hH(s))
s.cy=u
u=new O.c7()
u.a=H.b([],t)
u.gw().n(0,new E.hI(s))
s.db=u
u=new O.c7()
u.a=H.b([],t)
u.gw().n(0,new E.hJ(s))
s.dx=u
u=H.b([],[O.dy])
s.dy=u
u.push(null)
s.fr=new H.I([P.h,A.dq])},
gi2:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga0(s)
u=t.db
u=t.z=s.B(0,u.ga0(u))
s=u}return s},
dQ:function(a){var u=this.dy
u.push(a==null?(u&&C.b).gas(u):a)},
dO:function(){var u=this.dy
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
E.dv.prototype={}
E.dA.prototype={
ct:function(a){this.dS()},
cs:function(){return this.ct(null)},
ghE:function(){var u,t=this,s=Date.now(),r=C.c.a4(P.li(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.ac(s,!1)
return u/r},
cN:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.B()
if(typeof r!=="number")return H.w(r)
u=C.d.c6(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.B()
t=C.d.c6(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.lF(C.m,s.gi8())}},
dS:function(){if(!this.cx){this.cx=!0
var u=window
C.D.eG(u)
C.D.fO(u,W.m4(new E.ih(this),P.aa))}},
i5:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.cN()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ac(r,!1)
s.y=P.li(r-s.r.a).a*0.000001
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
if(s!=null)s.J(null)}catch(q){u=H.af(q)
t=H.kZ(q)
P.l2("Error: "+H.e(u))
P.l2("Stack: "+H.e(t))
throw H.c(u)}}}
E.ih.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.i5()}}}
Z.dM.prototype={}
Z.cQ.prototype={
bP:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.af(s)
t=P.u('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.e(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.j2.prototype={}
Z.cR.prototype={
aR:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bP:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].bP(a)},
ik:function(a){var u,t,s
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
Z.bt.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.ce(this.c))+"'")+"]"}}
Z.aV.prototype={
gcn:function(a){var u=this.a,t=(u&$.b_().a)!==0?3:0
if((u&$.aZ().a)!==0)t+=3
if((u&$.aY().a)!==0)t+=3
if((u&$.b0().a)!==0)t+=2
if((u&$.bl().a)!==0)t+=3
if((u&$.cJ().a)!==0)t+=3
if((u&$.cK().a)!==0)t+=4
if((u&$.bQ().a)!==0)++t
return(u&$.aX().a)!==0?t+4:t},
hb:function(a){var u,t=$.b_(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aZ()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aY()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b0()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bl()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cJ()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cK()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bQ()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aX()
if((s&t.a)!==0)if(u===a)return t
return $.mz()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aV))return!1
return this.a===b.a},
i:function(a){var u=H.b([],[P.h]),t=this.a
if((t&$.b_().a)!==0)u.push("Pos")
if((t&$.aZ().a)!==0)u.push("Norm")
if((t&$.aY().a)!==0)u.push("Binm")
if((t&$.b0().a)!==0)u.push("Txt2D")
if((t&$.bl().a)!==0)u.push("TxtCube")
if((t&$.cJ().a)!==0)u.push("Clr3")
if((t&$.cK().a)!==0)u.push("Clr4")
if((t&$.bQ().a)!==0)u.push("Weight")
if((t&$.aX().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.b.j(u,"|")}}
D.f0.prototype={}
D.bs.prototype={
n:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.Y]}]):u).push(b)},
L:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.b.O(s,b)
if(s===!0){s=t.a
u=(s&&C.b).L(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.b.O(s,b)
if(s===!0){s=t.b
u=(s&&C.b).L(s,b)||u}return u},
J:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.b.F(P.kF(u,!0,{func:1,ret:-1,args:[D.Y]}),new D.fn(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.Y]}])
C.b.F(u,new D.fo(q))}return!0},
hu:function(){return this.J(null)},
ag:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.J(u)}}}}
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
X.cS.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cS))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.d7.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d7))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.fL.prototype={
hZ:function(a){this.d.n(0,a.a)
return!1},
hV:function(a){this.d.L(0,a.a)
return!1}}
X.da.prototype={}
X.fU.prototype={
aW:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.B()
u=b.b
t=q.ch
if(typeof u!=="number")return u.B()
s=new V.a7(o.a+n*m,o.b+u*t)
t=q.a.gbh()
r=new X.ba(a,V.bd(),q.x,t,s)
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
u.J(this.aW(a,b))
return!0},
i_:function(a){return!1},
fj:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.da(c,r.a.gbh(),b)
s.b=!0
t.J(s)
r.y=new P.ac(u,!1)
r.x=V.bd()}}
X.bx.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.bx))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.ba.prototype={}
X.hk.prototype={
bB:function(a,b,c){var u=this,t=new P.ac(Date.now(),!1),s=u.a.gbh(),r=new X.ba(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
ca:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.J(this.bB(a,b,!0))
return!0},
b6:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.e3()
if(typeof t!=="number")return t.a7()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.J(u.bB(a,b,!0))
return!0},
b5:function(a,b){var u=this.d
if(u==null)return!1
u.J(this.bB(a,b,!1))
return!0},
i0:function(a,b){return!1}}
X.hB.prototype={}
X.dE.prototype={}
X.il.prototype={
aW:function(a,b){var u=this,t=new P.ac(Date.now(),!1),s=a.length>0?a[0]:V.bd(),r=u.a.gbh(),q=new X.dE(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
hY:function(a){var u=this.b
if(u==null)return!1
u.J(this.aW(a,!0))
return!0},
hW:function(a){var u=this.c
if(u==null)return!1
u.J(this.aW(a,!0))
return!0},
hX:function(a){var u=this.d
if(u==null)return!1
u.J(this.aW(a,!1))
return!0}}
X.dJ.prototype={
gbh:function(){var u=this.a,t=C.i.gd5(u).c
t.toString
u=C.i.gd5(u).d
u.toString
return V.lz(0,0,t,u)},
cD:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.d7(u,new X.bx(t,a.altKey,a.shiftKey))},
aM:function(a){a.shiftKey},
bL:function(a){a.shiftKey},
az:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.M()
u=t.top
if(typeof r!=="number")return r.M()
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
return new X.cS(u,new X.bx(t,a.altKey,a.shiftKey))},
bC:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.M()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.M()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fd:function(a){this.f=!0},
f1:function(a){this.f=!1},
f7:function(a){if(this.f&&this.bC(a))a.preventDefault()},
fh:function(a){var u
if(!this.f)return
u=this.cD(a)
this.b.hZ(u)},
ff:function(a){var u
if(!this.f)return
u=this.cD(a)
this.b.hV(u)},
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
u=new V.U((a&&C.C).ghn(a),C.C.gho(a)).u(0,180)
if(s.x){if(s.d.i_(u))a.preventDefault()
return}if(s.r)return
t=s.az(a)
if(s.c.i0(u,t))a.preventDefault()},
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
if(t.e.hY(u))a.preventDefault()},
fF:function(a){var u
this.bL(a)
u=this.bG(a)
if(this.e.hW(u))a.preventDefault()},
fH:function(a){var u
this.bL(a)
u=this.bG(a)
if(this.e.hX(u))a.preventDefault()}}
D.eV.prototype={$ia5:1}
D.bq.prototype={
av:function(a){var u=this.r
if(u!=null)u.J(a)},
em:function(){return this.av(null)},
sae:function(a){var u,t,s=this
if(!J.D(s.b,a)){u=s.b
if(u!=null)u.gw().L(0,s.gcu())
t=s.b
s.b=a
if(a!=null)a.gw().n(0,s.gcu())
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
D.d8.prototype={
av:function(a){var u=this.y
if(u!=null)u.J(a)},
cL:function(a){var u=this.z
if(u!=null)u.J(a)},
fi:function(){return this.cL(null)},
fz:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.m)(a),++t){s=a[t]
if(s==null||this.eA(s))return!1}return!0},
eW:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcK(),s=[{func:1,ret:-1,args:[D.Y]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q instanceof D.bq)this.f.push(q)
p=q.r
if(p==null){p=new D.bs()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}u=new D.bu()
u.b=!0
this.av(u)},
fD:function(a,b){var u,t,s
for(u=b.gU(b),t=this.gcK();u.t();){s=u.gC(u)
C.b.L(this.e,s)
s.gw().L(0,t)}u=new D.bv()
u.b=!0
this.av(u)},
eA:function(a){var u=C.b.O(this.f,a)
return u},
$aj:function(){return[D.a5]},
$ab2:function(){return[D.a5]}}
D.hA.prototype={$ia5:1}
D.i_.prototype={$ia5:1}
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
V.ar.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ar))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.F(u.a,3,0)+", "+V.F(u.b,3,0)+", "+V.F(u.c,3,0)+", "+V.F(u.d,3,0)+"]"}}
V.fm.prototype={}
V.c6.prototype={
a8:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.J])
return t},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.c6))return!1
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
i:function(a){var u,t,s,r,q=this,p=[P.J],o=V.bO(H.b([q.a,q.d,q.r],p),3,0),n=V.bO(H.b([q.b,q.e,q.x],p),3,0),m=V.bO(H.b([q.c,q.f,q.y],p),3,0)
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
a8:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.J])
return t},
dz:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.A().a)return V.dc()
u=1/b1
t=-n
s=-a0
return V.av((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
B:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.av(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bq:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.z(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
b8:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.T(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
p:function(a,b){var u,t,s=this
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
i:function(a){return this.P()},
G:function(a){var u,t,s,r,q,p=this,o=[P.J],n=V.bO(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.bO(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.bO(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.bO(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
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
V.T.prototype={
A:function(a,b){return new V.T(this.a+b.a,this.b+b.b,this.c+b.c)},
M:function(a,b){return new V.T(this.a-b.a,this.b-b.b,this.c-b.c)},
B:function(a,b){return new V.T(this.a*b,this.b*b,this.c*b)},
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
V.be.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.be))return!1
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
gat:function(){var u=this.c,t=this.d
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
c8:function(a){return Math.sqrt(this.D(this))},
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
return new V.U(t*b,u*b)},
u:function(a,b){var u,t
if(Math.abs(b-0)<$.A().a){u=$.lN
return u==null?$.lN=new V.U(0,0):u}u=this.a
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
V.z.prototype={
c8:function(a){return Math.sqrt(this.D(this))},
D:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
c9:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.z(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aA:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.z(u*t-s*r,s*q-p*t,p*r-u*q)},
A:function(a,b){return new V.z(this.a+b.a,this.b+b.b,this.c+b.c)},
V:function(a){return new V.z(-this.a,-this.b,-this.c)},
B:function(a,b){return new V.z(this.a*b,this.b*b,this.c*b)},
u:function(a,b){if(Math.abs(b-0)<$.A().a)return V.cp()
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
U.f2.prototype={
bw:function(a){var u=V.kp(a,this.c,this.b)
return u},
gw:function(){var u=this.y
return u==null?this.y=D.N():u},
T:function(a){var u=this.y
if(u!=null)u.J(a)},
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
U.cU.prototype={
gw:function(){var u=this.b
return u==null?this.b=D.N():u},
au:function(a,b,c){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cU))return!1
return J.D(this.a,b.a)},
i:function(a){return"Constant: "+this.a.G("          ")}}
U.bZ.prototype={
gw:function(){var u=this.e
return u==null?this.e=D.N():u},
T:function(a){var u=this.e
if(u!=null)u.J(a)},
am:function(){return this.T(null)},
eU:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gbc(),s=[{func:1,ret:-1,args:[D.Y]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.gw()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bu()
u.b=!0
this.T(u)},
fB:function(a,b){var u,t
for(u=b.gU(b),t=this.gbc();u.t();)u.gC(u).gw().L(0,t)
u=new D.bv()
u.b=!0
this.T(u)},
au:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.S()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.ab(r,r.length),u=null;r.t();){q=r.d
if(q!=null){t=q.au(0,b,c)
if(t!=null)u=u==null?t:t.B(0,u)}}s.f=u==null?V.dc():u
r=s.e
if(r!=null)r.ag(0)}return s.f},
p:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bZ))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.d(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.d(r,t)
if(!J.D(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$aj:function(){return[U.am]},
$ab2:function(){return[U.am]},
$iam:1}
U.am.prototype={}
U.dp.prototype={
gw:function(){var u=this.y
return u==null?this.y=D.N():u},
T:function(a){var u=this.y
if(u!=null)u.J(a)},
se0:function(a){var u
a=V.kp(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.A().a)){this.a=a
u=new D.C("yaw",u,a)
u.b=!0
this.T(u)}},
sdN:function(a,b){var u
b=V.kp(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.A().a)){this.b=b
u=new D.C("pitch",u,b)
u.b=!0
this.T(u)}},
sdT:function(a){var u
a=V.kp(a,0,6.283185307179586)
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
s.x=V.av(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1).B(0,V.lp(s.b)).B(0,V.kH(s.a))
r=s.y
if(r!=null)r.ag(0)}return s.x},
p:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.dp))return!1
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
U.dK.prototype={
gw:function(){var u=this.fx
return u==null?this.fx=D.N():u},
T:function(a){var u=this.fx
if(u!=null)u.J(a)},
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
H.l(a,"$iba")
if(!J.D(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
eQ:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$iba")
if(!n.cx)return
if(n.ch){u=a.d.M(0,a.y)
u=new V.U(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.w(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.M(0,a.y)
u=n.ao(new V.U(t.a,t.b).B(0,2).u(0,u.gat()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.V()
s=n.y
if(typeof s!=="number")return H.w(s)
t.sY(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.V()
t=n.x
if(typeof t!=="number")return H.w(t)
s.sY(-u*10*t)}else{u=a.c
t=a.d
s=t.M(0,a.y)
r=n.ao(new V.U(s.a,s.b).B(0,2).u(0,u.gat()))
s=n.c
q=r.a
if(typeof q!=="number")return q.V()
p=n.y
if(typeof p!=="number")return H.w(p)
o=n.cy
if(typeof o!=="number")return H.w(o)
s.sa2(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.V()
q=n.x
if(typeof q!=="number")return H.w(q)
s=n.db
if(typeof s!=="number")return H.w(s)
o.sa2(0,-p*q+s)
n.b.sY(0)
n.c.sY(0)
t=t.M(0,a.z)
n.dx=n.ao(new V.U(t.a,t.b).B(0,2).u(0,u.gat()))}n.am()},
eS:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.D(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.V()
s=r.y
if(typeof s!=="number")return H.w(s)
u.sY(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.V()
u=r.x
if(typeof u!=="number")return H.w(u)
s.sY(-t*10*u)
r.am()}},
eJ:function(a){var u=this
if(H.l(a,"$ida").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
eL:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$iba")
if(!J.D(n.d,a.x.b))return
u=a.c
t=a.d
s=t.M(0,a.y)
r=n.ao(new V.U(s.a,s.b).B(0,2).u(0,u.gat()))
s=n.c
q=r.a
if(typeof q!=="number")return q.V()
p=n.y
if(typeof p!=="number")return H.w(p)
o=n.cy
if(typeof o!=="number")return H.w(o)
s.sa2(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.V()
q=n.x
if(typeof q!=="number")return H.w(q)
s=n.db
if(typeof s!=="number")return H.w(s)
o.sa2(0,-p*q+s)
n.b.sY(0)
n.c.sY(0)
t=t.M(0,a.z)
n.dx=n.ao(new V.U(t.a,t.b).B(0,2).u(0,u.gat()))
n.am()},
h4:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
h2:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$idE")
if(!n.cx)return
if(n.ch){u=a.d.M(0,a.y)
u=new V.U(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.w(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.M(0,a.y)
u=n.ao(new V.U(t.a,t.b).B(0,2).u(0,u.gat()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.V()
s=n.y
if(typeof s!=="number")return H.w(s)
t.sY(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.V()
t=n.x
if(typeof t!=="number")return H.w(t)
s.sY(-u*10*t)}else{u=a.c
t=a.d
s=t.M(0,a.y)
r=n.ao(new V.U(s.a,s.b).B(0,2).u(0,u.gat()))
s=n.c
q=r.a
if(typeof q!=="number")return q.V()
p=n.y
if(typeof p!=="number")return H.w(p)
o=n.cy
if(typeof o!=="number")return H.w(o)
s.sa2(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.V()
q=n.x
if(typeof q!=="number")return H.w(q)
s=n.db
if(typeof s!=="number")return H.w(s)
o.sa2(0,-p*q+s)
n.b.sY(0)
n.c.sY(0)
t=t.M(0,a.z)
n.dx=n.ao(new V.U(t.a,t.b).B(0,2).u(0,u.gat()))}n.am()},
h0:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.D(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.V()
s=r.y
if(typeof s!=="number")return H.w(s)
u.sY(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.V()
u=r.x
if(typeof u!=="number")return H.w(u)
s.sY(-t*10*u)
r.am()}},
au:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.S()
if(s<r){t.dy=r
u=b.y
t.c.aG(0,u)
t.b.aG(0,u)
t.fr=V.kH(t.b.d).B(0,V.lp(t.c.d))}return t.fr},
$iam:1}
M.d_.prototype={
aw:function(a){var u=this.y
if(u!=null)u.J(a)},
en:function(){return this.aw(null)},
f3:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gan(),s=[{func:1,ret:-1,args:[D.Y]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bs()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bu()
u.b=!0
this.aw(u)},
f5:function(a,b){var u,t
for(u=b.gU(b),t=this.gan();u.t();)u.gC(u).gw().L(0,t)
u=new D.bv()
u.b=!0
this.aw(u)},
sdV:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gw().L(0,t.gan())
u=t.d
t.d=a
if(a!=null)a.gw().n(0,t.gan())
s=new D.C("technique",u,t.d)
s.b=!0
t.aw(s)}},
gw:function(){var u=this.y
return u==null?this.y=D.N():u},
aS:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=new E.dv(a)
e.b=!0
u=f.f
if(u!=null)u.J(e)
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
if(typeof s!=="number")return H.w(s)
o=C.d.ak(p*s)
p=q.b
if(typeof r!=="number")return H.w(r)
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
i=V.av(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.dP(i)
t=$.lt
if(t==null){t=V.lv()
q=V.kN()
p=$.lO
t=V.lo(t,q,p==null?$.lO=new V.z(0,0,-1):p)
$.lt=t
h=t}else h=t
t=u.b
if(t!=null){g=t.au(0,a,u)
if(g!=null)h=g.B(0,h)}a.db.dP(h)
u=f.d
if(u!=null)u.aG(0,a)
for(u=f.e.a,u=new J.ab(u,u.length);u.t();)u.d.aG(0,a)
for(u=f.e.a,u=new J.ab(u,u.length);u.t();)u.d.aS(a)
f.b.toString
a.cy.cb()
a.db.cb()
f.c.toString
a.dO()}}
A.cO.prototype={}
A.eQ.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hv:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
hp:function(){var u,t,s,r
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
A.h_.prototype={
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
if(c3.dy)b8.id=H.l(b8.y.K(0,"invViewMat"),"$iad")
if(t)b8.dy=H.l(b8.y.K(0,"objMat"),"$iad")
if(r)b8.fr=H.l(b8.y.K(0,"viewObjMat"),"$iad")
b8.fy=H.l(b8.y.K(0,"projViewObjMat"),"$iad")
if(c3.go)b8.fx=H.l(b8.y.K(0,"viewMat"),"$iad")
if(c3.x1)b8.k1=H.l(b8.y.K(0,"txt2DMat"),"$icm")
if(c3.x2)b8.k2=H.l(b8.y.K(0,"txtCubeMat"),"$iad")
if(c3.y1)b8.k3=H.l(b8.y.K(0,"colorMat"),"$iad")
b8.r1=H.b([],[A.ad])
t=c3.aQ
if(t>0){b8.k4=b8.y.K(0,"bendMatCount")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.h(0,q)
if(j==null)H.q(P.u(c0+q+c1))
s.push(H.l(j,"$iad"))}}t=c3.a
if(t.a)b8.r2=H.l(b8.y.K(0,"emissionClr"),"$iG")
if(t.b)b8.rx=H.l(b8.y.K(0,"emissionTxt"),"$ia0")
t=c3.b
if(t.a)b8.x1=H.l(b8.y.K(0,"ambientClr"),"$iG")
if(t.b)b8.x2=H.l(b8.y.K(0,"ambientTxt"),"$ia0")
t=c3.c
if(t.a)b8.y2=H.l(b8.y.K(0,"diffuseClr"),"$iG")
if(t.b)b8.aQ=H.l(b8.y.K(0,"diffuseTxt"),"$ia0")
t=c3.d
if(t.a)b8.bj=H.l(b8.y.K(0,"invDiffuseClr"),"$iG")
if(t.b)b8.d9=H.l(b8.y.K(0,"invDiffuseTxt"),"$ia0")
t=c3.e
s=t.a
if(s||t.b||!1){b8.dd=H.l(b8.y.K(0,"shininess"),"$iV")
if(s)b8.da=H.l(b8.y.K(0,"specularClr"),"$iG")
if(t.b)b8.dc=H.l(b8.y.K(0,"specularTxt"),"$ia0")}if(c3.f.b)b8.de=H.l(b8.y.K(0,"bumpTxt"),"$ia0")
if(c3.db){b8.df=H.l(b8.y.K(0,"envSampler"),"$ibD")
t=c3.r
if(t.a)b8.dg=H.l(b8.y.K(0,"reflectClr"),"$iG")
if(t.b)b8.dh=H.l(b8.y.K(0,"reflectTxt"),"$ia0")
t=c3.x
s=t.a
if(s||t.b||!1){b8.di=H.l(b8.y.K(0,"refraction"),"$iV")
if(s)b8.dj=H.l(b8.y.K(0,"refractClr"),"$iG")
if(t.b)b8.dk=H.l(b8.y.K(0,"refractTxt"),"$ia0")}}t=c3.y
if(t.a)b8.dl=H.l(b8.y.K(0,"alpha"),"$iV")
if(t.b)b8.dm=H.l(b8.y.K(0,"alphaTxt"),"$ia0")
if(c3.k1){t=c3.z
s=t.length
if(s!==0){r=P.v
b8.bX=new H.I([r,A.bg])
b8.bY=new H.I([r,[P.o,A.ck]])
for(r=[A.ck],i=0;i<t.length;t.length===s||(0,H.m)(t),++i){h=t[i]
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
a3=a2}e.push(new A.ck(j,d,c,a3,a2,a1))}b8.bY.l(0,g,e)
q=b8.bX
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.q(P.u(c0+o+c1))
q.l(0,g,j)}}t=c3.Q
s=t.length
if(s!==0){r=P.v
b8.bZ=new H.I([r,A.bg])
b8.c_=new H.I([r,[P.o,A.cl]])
for(r=[A.cl],i=0;i<t.length;t.length===s||(0,H.m)(t),++i){h=t[i]
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
e.push(new A.cl(a7,a6,a5,j,d,a8))}b8.c_.l(0,g,e)
q=b8.bZ
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.q(P.u(c0+o+c1))
q.l(0,g,j)}}t=c3.ch
s=t.length
if(s!==0){r=P.v
b8.c0=new H.I([r,A.bg])
b8.c1=new H.I([r,[P.o,A.cn]])
for(r=[A.cn],i=0;i<t.length;t.length===s||(0,H.m)(t),++i){h=t[i]
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
H.l(b,"$icm")
a9=b}else a9=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
b=p.h(0,o)
if(b==null)H.q(P.u(c0+o+c1))
H.l(b,"$ibD")
a8=b}else a8=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
b=p.h(0,o)
if(b==null)H.q(P.u(c0+o+c1))
H.l(b,"$ibD")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a=p.h(0,o)
if(a==null)H.q(P.u(c0+o+c1))
H.l(a,"$icj")
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
a3=a2}e.push(new A.cn(j,d,a9,c,a8,b0,b1,a3,a2,a1))}b8.c1.l(0,g,e)
q=b8.c0
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.q(P.u(c0+o+c1))
q.l(0,g,j)}}t=c3.cx
s=t.length
if(s!==0){r=P.v
b8.c2=new H.I([r,A.bg])
b8.c3=new H.I([r,[P.o,A.co]])
for(r=[A.co],i=0;i<t.length;t.length===s||(0,H.m)(t),++i){h=t[i]
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
H.l(a,"$icj")
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
e.push(new A.co(j,d,c,b,a7,a6,b5,b4,b1,b7,b6,a3,a2,a1,a8,b0))}b8.c3.l(0,g,e)
q=b8.c2
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.q(P.u(c0+o+c1))
q.l(0,g,j)}}}},
aj:function(a,b){if(b!=null&&b.d)a.e5(b)},
fU:function(a,b){}}
A.cP.prototype={
i:function(a){return"barLight"+H.e(this.a)}}
A.cX.prototype={
i:function(a){return"dirLight"+H.e(this.a)}}
A.dk.prototype={
i:function(a){return"pointLight"+H.e(this.a)}}
A.ds.prototype={
i:function(a){return"spotLight"+H.e(this.a)}}
A.h2.prototype={
i:function(a){return this.b1}}
A.ck.prototype={}
A.cl.prototype={}
A.cn.prototype={}
A.co.prototype={}
A.dq.prototype={
ei:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cE:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.u("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
fW:function(){var u,t,s,r=this,q=H.b([],[A.cO]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.w(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cO(p,t.name,s))}r.x=new A.eQ(q)},
fY:function(){var u,t,s,r=this,q=H.b([],[A.dG]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.w(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.hm(t.type,t.size,t.name,s))}r.y=new A.iy(q)},
aL:function(a,b,c){var u=this.a
if(a===1)return new A.bg(u,b,c)
else return A.kK(u,this.r,b,a,c)},
eD:function(a,b,c){var u=this.a
if(a===1)return new A.a0(u,b,c)
else return A.kK(u,this.r,b,a,c)},
eE:function(a,b,c){var u=this.a
if(a===1)return new A.bD(u,b,c)
else return A.kK(u,this.r,b,a,c)},
bg:function(a,b){return new P.dV(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
hm:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aL(b,c,d)
case 5121:return u.aL(b,c,d)
case 5122:return u.aL(b,c,d)
case 5123:return u.aL(b,c,d)
case 5124:return u.aL(b,c,d)
case 5125:return u.aL(b,c,d)
case 5126:return new A.V(u.a,c,d)
case 35664:return new A.iu(u.a,c,d)
case 35665:return new A.G(u.a,c,d)
case 35666:return new A.cj(u.a,c,d)
case 35667:return new A.iv(u.a,c,d)
case 35668:return new A.iw(u.a,c,d)
case 35669:return new A.ix(u.a,c,d)
case 35674:return new A.iz(u.a,c,d)
case 35675:return new A.cm(u.a,c,d)
case 35676:return new A.ad(u.a,c,d)
case 35678:return u.eD(b,c,d)
case 35680:return u.eE(b,c,d)
case 35670:throw H.c(u.bg("BOOL",c))
case 35671:throw H.c(u.bg("BOOL_VEC2",c))
case 35672:throw H.c(u.bg("BOOL_VEC3",c))
case 35673:throw H.c(u.bg("BOOL_VEC4",c))
default:throw H.c(P.u("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.dG.prototype={}
A.iy.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
K:function(a,b){var u=this.h(0,b)
if(u==null)throw H.c(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.P()},
P:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.m)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.bg.prototype={
i:function(a){return"Uniform1i: "+H.e(this.c)}}
A.iv.prototype={
i:function(a){return"Uniform2i: "+H.e(this.c)}}
A.iw.prototype={
i:function(a){return"Uniform3i: "+H.e(this.c)}}
A.ix.prototype={
i:function(a){return"Uniform4i: "+H.e(this.c)}}
A.it.prototype={
i:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.V.prototype={
i:function(a){return"Uniform1f: "+H.e(this.c)}}
A.iu.prototype={
i:function(a){return"Uniform2f: "+H.e(this.c)}}
A.G.prototype={
i:function(a){return"Uniform3f: "+H.e(this.c)}}
A.cj.prototype={
i:function(a){return"Uniform4f: "+H.e(this.c)}}
A.iz.prototype={
i:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.cm.prototype={
ah:function(a){var u=new Float32Array(H.bJ(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.e(this.c)}}
A.ad.prototype={
ah:function(a){var u=new Float32Array(H.bJ(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.e(this.c)}}
A.a0.prototype={
e5:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.bD.prototype={
i:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.jO.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.c9(s.b,b).c9(s.d.c9(s.c,b),c)
a.sa2(0,new V.T(r.a,r.b,r.c))
a.sdW(r.u(0,Math.sqrt(r.D(r))))
s=1-b
u=1-c
a.sd2(new V.be(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)}}
F.jY.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)}}
F.k_.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.w(p)
s=-s*p
u=r*p
a.sa2(0,new V.T(s,u,q))
u=new V.z(s,u,q)
a.sdW(u.u(0,Math.sqrt(u.D(u))))
a.sd2(new V.be(1-c,2+c,-1,-1))}}
F.k0.prototype={
$1:function(a){return this.a.$2(a,1)}}
F.k1.prototype={
$1:function(a){return this.a.$2(1-a,0)}}
F.kk.prototype={
$2:function(a,b){return 0}}
F.kl.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.w(s)
u=a.f
t=new V.z(u.a,u.b,u.c)
s=t.u(0,Math.sqrt(t.D(t))).B(0,this.b+s)
a.sa2(0,new V.T(s.a,s.b,s.c))}}
F.kn.prototype={
$1:function(a){return new V.T(Math.cos(a),Math.sin(a),0)}}
F.k9.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.T(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)}}
F.jZ.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.l7(n.$1(o),m)
m=J.l7(n.$1(o+3.141592653589793/p.c),m).M(0,l)
m=new V.z(m.a,m.b,m.c)
u=m.u(0,Math.sqrt(m.D(m)))
n=$.lP
if(n==null){n=new V.z(1,0,0)
$.lP=n
t=n}else t=n
n=u.aA(!J.D(u,t)?V.lR():t)
s=n.u(0,Math.sqrt(n.D(n)))
n=s.aA(u)
t=n.u(0,Math.sqrt(n.D(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.B(0,n*m)
m=s.B(0,q*m)
a.sa2(0,l.A(0,new V.T(n.a-m.a,n.b-m.b,n.c-m.c)))}}
F.b4.prototype={
b_:function(){var u=this
if(!u.gb0()){C.b.L(u.a.a.d.b,u)
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
if(u!=null){C.b.L(u.d.b,this)
this.a=null}},
bI:function(){var u=this.b
if(u!=null){C.b.L(u.d.c,this)
this.b=null}},
fM:function(){var u=this.c
if(u!=null){C.b.L(u.d.d,this)
this.c=null}},
gb0:function(){return this.a==null||this.b==null||this.c==null},
ew:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cp()
if(q!=null)s=s.A(0,q)
if(u!=null)s=s.A(0,u)
if(t!=null)s=s.A(0,t)
if(s.dA())return
return s.u(0,Math.sqrt(s.D(s)))},
ey:function(){var u,t,s,r=this.a,q=r==null?null:r.f
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
r=s.aA(r.u(0,Math.sqrt(r.D(r))))
return r.u(0,Math.sqrt(r.D(r)))},
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
s=V.cp()
if(q!=null)s=s.A(0,q)
if(u!=null)s=s.A(0,u)
if(t!=null)s=s.A(0,t)
if(s.dA())return
return s.u(0,Math.sqrt(s.D(s)))},
ex:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
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
if(s.a-t.a<0)q=q.V(0)}else{p=(l-u.b)/r
l=d.M(0,g).B(0,p).A(0,g).M(0,j)
l=new V.z(l.a,l.b,l.c)
q=l.u(0,Math.sqrt(l.D(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.V(0)}l=n.d
if(l!=null){o=l.u(0,Math.sqrt(l.D(l)))
l=o.aA(q)
l=l.u(0,Math.sqrt(l.D(l))).aA(o)
q=l.u(0,Math.sqrt(l.D(l)))}return q},
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
G:function(a){var u,t,s=this
if(s.gb0())return a+"disposed"
u=a+C.a.af(J.a4(s.a.e),0)+", "+C.a.af(J.a4(s.b.e),0)+", "+C.a.af(J.a4(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
P:function(){return this.G("")}}
F.fp.prototype={}
F.hX.prototype={
b3:function(a,b,c){var u,t=b.a
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
F.c2.prototype={
b_:function(){var u=this
if(!u.gb0()){C.b.L(u.a.a.c.b,u)
u.a.a.Z()}u.bH()
u.bI()},
bM:function(a){this.a=a
a.c.b.push(this)},
bN:function(a){this.b=a
a.c.c.push(this)},
bH:function(){var u=this.a
if(u!=null){C.b.L(u.c.b,this)
this.a=null}},
bI:function(){var u=this.b
if(u!=null){C.b.L(u.c.c,this)
this.b=null}},
gb0:function(){return this.a==null||this.b==null},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
G:function(a){if(this.gb0())return a+"disposed"
return a+C.a.af(J.a4(this.a.e),0)+", "+C.a.af(J.a4(this.b.e),0)},
P:function(){return this.G("")}}
F.fN.prototype={}
F.is.prototype={
b3:function(a,b,c){var u,t=b.a
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
F.cc.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
G:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.a.af(J.a4(u.e),0)},
P:function(){return this.G("")}}
F.hP.prototype={
gw:function(){var u=this.e
return u==null?this.e=D.N():u},
b4:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.v()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){r=g[s]
h.a.n(0,r.hj())}h.a.v()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.v()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
n=p[o]
h.b.a.a.n(0,n)
o=new F.cc()
if(n.a==null)H.q(P.u("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.J(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.v()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.v()
p=p.e
if(typeof p!=="number")return p.A()
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
o.a.a.v()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.v()
p=p.e
if(typeof p!=="number")return p.A()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.v()
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
F.bX(l,k,i)}g=h.e
if(g!=null)g.ag(0)},
aq:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aq()||!1
if(!t.a.aq())u=!1
s=t.e
if(s!=null)s.ag(0)
return u},
hM:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.b(o.slice(0),[H.aI(o,0)])
for(o=[F.bh];u.length!==0;){t=C.b.ghz(u)
C.b.ce(u,0)
if(t!=null){s=H.b([],o)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.d(u,r)
q=u[r]
if(q!=null&&a.b3(0,t,q)){s.push(q)
C.b.ce(u,r)}}if(s.length>1)b.b4(s)}}p.a.v()
p.c.cf()
p.d.cf()
p.b.i4()
p.c.cg(new F.is())
p.d.cg(new F.hX())
o=p.e
if(o!=null)o.ag(0)},
bO:function(){this.hM(new F.iW(),new F.hs())},
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
q=new V.z(s,r,o).u(0,Math.sqrt(s*s+r*r+o*o))
if(!J.D(t.x,q)){t.x=q
o=t.a
if(o!=null){o=o.e
if(o!=null)o.J(null)}}}}o=p.e
if(o!=null)o.ag(0)},
hf:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.b_()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.aZ().a)!==0)++s
if((t&$.aY().a)!==0)++s
if((t&$.b0().a)!==0)++s
if((t&$.bl().a)!==0)++s
if((t&$.cJ().a)!==0)++s
if((t&$.cK().a)!==0)++s
if((t&$.bQ().a)!==0)++s
if((t&$.aX().a)!==0)++s
r=a4.gcn(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.J])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.cQ])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.hb(m)
k=l.gcn(l)
if(m>=t)return H.d(o,m)
o[m]=new Z.cQ(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.d(i,j)
h=i[j].hK(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.d(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.bJ(p)),35044)
u.bindBuffer(a1,null)
c=new Z.cR(new Z.dM(a1,d),o,a4)
c.b=H.b([],[Z.bt])
if(a0.b.b.length!==0){b=H.b([],[P.v])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.v()
b.push(t.e)}a=Z.kO(u,34963,b)
c.b.push(new Z.bt(0,b.length,a))}if(a0.c.b.length!==0){b=H.b([],[P.v])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.v()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.d(t,m)
t=t[m].b
t.a.a.v()
b.push(t.e)}a=Z.kO(u,34963,b)
c.b.push(new Z.bt(1,b.length,a))}if(a0.d.b.length!==0){b=H.b([],[P.v])
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
b.push(t.e)}a=Z.kO(u,34963,b)
c.b.push(new Z.bt(4,b.length,a))}return c},
i:function(a){var u=this,t="   ",s=H.b([],[P.h])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.G(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.G(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.G(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.G(t))}return C.b.j(s,"\n")},
Z:function(){var u=this.e
if(u!=null)u.J(null)}}
F.hQ.prototype={
h7:function(a){var u,t,s,r,q,p=H.b([],[F.b4]),o=a.length
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
h8:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.b4])
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
if(p!=null)p.J(null)}},
i:function(a){return this.P()},
G:function(a){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].G(a))
return C.b.j(r,"\n")},
P:function(){return this.G("")}}
F.hR.prototype={
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
G:function(a){var u,t,s=H.b([],[P.h]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.d(t,u)
s.push(t[u].G(a+(""+u+". ")))}return C.b.j(s,"\n")},
P:function(){return this.G("")}}
F.hS.prototype={
gm:function(a){return this.b.length},
i4:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.b.L(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.J(null)}s=t.a
if(s!=null){C.b.L(s.b.b,t)
t.a=null}}}},
i:function(a){return this.P()},
G:function(a){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].G(a))
return C.b.j(r,"\n")},
P:function(){return this.G("")}}
F.bh.prototype={
bW:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.dL(u.cx,r,o,t,s,q,p,a,n)},
hj:function(){return this.bW(null)},
sa2:function(a,b){var u
if(!J.D(this.f,b)){this.f=b
u=this.a
if(u!=null)u.Z()}},
sdE:function(a){var u
a=a==null?null:a.u(0,Math.sqrt(a.D(a)))
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
hK:function(a){var u,t,s=this
if(a.p(0,$.b_())){u=s.f
t=[P.J]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.aZ())){u=s.r
t=[P.J]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.aY())){u=s.x
t=[P.J]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.b0())){u=s.y
t=[P.J]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.p(0,$.bl())){u=s.z
t=[P.J]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.cJ())){u=s.Q
t=[P.J]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.cK())){u=s.Q
t=[P.J]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.p(0,$.bQ()))return H.b([s.ch],[P.J])
else if(a.p(0,$.aX())){u=s.cx
t=[P.J]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.J])},
bS:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cp()
t.d.F(0,new F.j0(s))
s=s.a
t.r=s.u(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.Z()
s=t.a.e
if(s!=null)s.ag(0)}return!0},
bQ:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cp()
t.d.F(0,new F.j_(s))
s=s.a
t.x=s.u(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.Z()
s=t.a.e
if(s!=null)s.ag(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
G:function(a){var u,t,s=this,r="-",q=H.b([],[P.h])
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
P:function(){return this.G("")}}
F.j0.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.A(0,t)}}}
F.j_.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.A(0,t)}}}
F.iR.prototype={
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
u.Z()
return!0},
h9:function(a,b,c,d,e,f){var u=F.dL(a,null,b,c,d,e,f,null,0)
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
n=q.u(0,Math.sqrt(p*p+o*o+n*n))
if(!J.D(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.J(null)}}}}return!0},
i:function(a){return this.P()},
G:function(a){var u,t,s,r
this.v()
u=H.b([],[P.h])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r)u.push(t[r].G(a))
return C.b.j(u,"\n")},
P:function(){return this.G("")}}
F.iS.prototype={
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
F:function(a,b){var u=this
C.b.F(u.b,b)
C.b.F(u.c,new F.iT(u,b))
C.b.F(u.d,new F.iU(u,b))},
i:function(a){return this.P()},
P:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].G(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].G(""))
return C.b.j(r,"\n")}}
F.iT.prototype={
$1:function(a){if(!J.D(a.a,this.a))this.b.$1(a)}}
F.iU.prototype={
$1:function(a){var u=this.a
if(!J.D(a.a,u)&&!J.D(a.b,u))this.b.$1(a)}}
F.iV.prototype={
gm:function(a){return this.b.length+this.c.length},
h:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.d(t,u)
return t[u]}else{if(b<0)return H.d(t,b)
return t[b]}},
i:function(a){return this.P()},
P:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].G(""))
return C.b.j(r,"\n")}}
F.iX.prototype={}
F.iW.prototype={
b3:function(a,b,c){return J.D(b.f,c.f)}}
F.iY.prototype={}
F.hs.prototype={
b4:function(a){var u,t,s,r=V.cp()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null)r=new V.z(r.a+s.a,r.b+s.b,r.c+s.c)}r=r.u(0,Math.sqrt(r.D(r)))
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.m)(a),++t)a[t].sdE(r)
return}}
F.iZ.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.P()},
P:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].G(""))
return C.b.j(r,"\n")}}
O.db.prototype={
gw:function(){var u=this.fr
return u==null?this.fr=D.N():u},
X:function(a){var u=this.fr
if(u!=null)u.J(a)},
bF:function(){return this.X(null)},
cM:function(a){this.a=null
this.X(a)},
fQ:function(){return this.cM(null)},
eY:function(a,b){var u=new D.bu()
u.b=!0
this.X(u)},
f_:function(a,b){var u=new D.bv()
u.b=!0
this.X(u)},
cC:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=P.v
f=[f,f]
u=new H.I(f)
for(t=g.dx.e,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){q=t[r]
p=q.gar()
o=u.h(0,q.gar())
u.l(0,p,o==null?1:o)}n=H.b([],[A.cP])
u.F(0,new O.h6(g,n))
C.b.aV(n,new O.h7())
m=new H.I(f)
for(t=g.dx.f,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){p=m.h(0,0)
m.l(0,0,p==null?1:p)}l=H.b([],[A.cX])
m.F(0,new O.h8(g,l))
C.b.aV(l,new O.h9())
k=new H.I(f)
for(t=g.dx.r,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){q=t[r]
p=q.gar()
o=k.h(0,q.gar())
k.l(0,p,o==null?1:o)}j=H.b([],[A.dk])
k.F(0,new O.ha(g,j))
C.b.aV(j,new O.hb())
i=new H.I(f)
for(f=g.dx.x,t=f.length,r=0;r<f.length;f.length===t||(0,H.m)(f),++r){q=f[r]
s=q.gar()
p=i.h(0,q.gar())
i.l(0,s,p==null?1:p)}h=H.b([],[A.ds])
i.F(0,new O.hc(g,h))
C.b.aV(h,new O.hd())
f=C.c.a4(g.e.a.length+3,4)
t=g.b
s=g.d
g.dy.e
return A.nd(t!=null,!1,s!=null,!1,f*4,g.f.c,g.r.c,g.x.c,g.y.c,g.z.c,g.Q.c,g.cx.c,g.cy.c,g.db.c,n,l,j,h)},
a9:function(a,b){if(b!=null)if(!C.b.O(a,b)){b.a=a.length
a.push(b)}},
aG:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.ab(u,u.length);u.t();){t=u.d
t.toString
s=$.iQ
if(s==null)s=$.iQ=new V.z(0,0,1)
t.a=s
r=$.iP
t.d=r==null?$.iP=new V.z(0,1,0):r
r=$.iO
t.e=r==null?$.iO=new V.z(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bq(s)
r=s.a
p=s.b
o=s.c
t.a=s.u(0,Math.sqrt(r*r+p*p+o*o))
o=q.bq(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.u(0,Math.sqrt(p*p+r*r+s*s))
s=q.bq(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.u(0,Math.sqrt(r*r+p*p+o*o))}}}},
i6:function(b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.cC()
u=b4.fr.h(0,b3.b1)
if(u==null){u=A.nc(b3,b4.a)
t=u.b
if(t.length===0)H.q(P.u("May not cache a shader with no name."))
if(b4.fr.bU(0,t))H.q(P.u('Shader cache already contains a shader by the name "'+t+'".'))
b4.fr.l(0,t,u)}b3=b2.a=u
b5.e=null}s=b3.z
r=s.bj
b3=b5.e
if(!(b3 instanceof Z.cR))b3=b5.e=null
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
if(o!=null)o.ag(0)}m=b5.d.hf(new Z.j2(b4.a),r)
m.aR($.b_()).e=b2.a.Q.c
if(b3)m.aR($.aZ()).e=b2.a.cx.c
if(q)m.aR($.aY()).e=b2.a.ch.c
if(s.r2)m.aR($.b0()).e=b2.a.cy.c
if(p)m.aR($.bl()).e=b2.a.db.c
if(s.ry)m.aR($.aX()).e=b2.a.dx.c
b5.e=m}l=H.b([],[T.dz])
b3=b2.a
q=b4.a
q.useProgram(b3.r)
b3.x.hv()
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
o=b4.cx=p.B(0,o.ga0(o))
p=o}b3=b3.fr
b3.toString
b3.ah(p.a8(0,!0))}b3=b2.a
p=b4.ch
if(p==null){p=b4.gi2()
o=b4.dx
o=b4.ch=p.B(0,o.ga0(o))
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
b3.ah(C.u.a8(p,!0))}if(s.y1){b3=b2.a
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
i=new Float32Array(H.bJ(p.a8(0,!0)))
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
if(b3.length>0){p=P.v
h=new H.I([p,p])
for(p=b2.dx.e,o=p.length,g=0;g<p.length;p.length===o||(0,H.m)(p),++g){f=p[g]
e=f.gar()
d=h.h(0,e)
if(d==null)d=0
h.l(0,e,d+1)
c=J.bR(b2.a.bY.h(0,e),d)
n=f.giq()
b=$.az
n=n.b8(b==null?$.az=new V.T(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.giv()
b=$.az
n=n.b8(b==null?$.az=new V.T(0,0,0):b)
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
p=P.v
a0=new H.I([p,p])
for(p=b2.dx.f,o=p.length,g=0;g<p.length;p.length===o||(0,H.m)(p),++g){f=p[g]
d=a0.h(0,0)
if(d==null)d=0
a0.l(0,0,d+1)
c=J.bR(b2.a.c_.h(0,0),d)
n=a.bq(f.a)
b=n.a
a1=n.b
a2=n.c
a2=n.u(0,Math.sqrt(b*b+a1*a1+a2*a2))
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
p=P.v
a3=new H.I([p,p])
for(p=b2.dx.r,o=p.length,g=0;g<p.length;p.length===o||(0,H.m)(p),++g){f=p[g]
e=f.gar()
d=a3.h(0,e)
if(d==null)d=0
a3.l(0,e,d+1)
c=J.bR(b2.a.c1.h(0,e),d)
a4=a.B(0,f.ga0(f))
n=f.ga0(f)
b=$.az
n=n.b8(b==null?$.az=new V.T(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=$.az
n=a4.b8(n==null?$.az=new V.T(0,0,0):n)
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
i=new Float32Array(H.bJ(new V.c6(b,a1,a2,a5,a6,a7,a8,a9,n).a8(0,!0)))
b0.a.uniformMatrix3fv(b0.d,!1,i)
f.gaF()
n=f.gaF()
if(!C.b.O(l,n)){n.a=l.length
l.push(n)}n=f.gaF()
b=n.gb2(n)
if(b){b=c.f
b.toString
a1=n.gb2(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.ghF(n)
b.a.uniform1i(b.d,n)}}f.gaU()
n=f.ge6()
b=c.x
b.toString
a1=n.ghr(n)
a2=n.ghs(n)
a5=n.ght()
n=n.ghq()
b.a.uniform4f(b.d,a1,a2,a5,n)
n=f.gaU()
if(!C.b.O(l,n)){n.a=l.length
l.push(n)}n=f.gaU()
b=n.gb2(n)
if(b){b=c.r
b.toString
a1=n.gb2(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.ghF(n)
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
p=P.v
b1=new H.I([p,p])
for(p=b2.dx.x,o=p.length,g=0;g<p.length;p.length===o||(0,H.m)(p),++g){f=p[g]
e=f.gar()
d=b1.h(0,e)
if(d==null)d=0
b1.l(0,e,d+1)
c=J.bR(b2.a.c3.h(0,e),d)
n=f.gi1(f)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.git(f).iG()
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=a.b8(f.gi1(f))
b=c.d
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gab(f)
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
f.gaF()
n=f.giJ()
b=c.f
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gci(f)
b=c.r
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.giH()
b=c.x
b.a.uniform1f(b.d,n)
n=f.giI()
b=c.y
b.a.uniform1f(b.d,n)
f.gaF()
n=f.gaF()
if(!C.b.O(l,n)){n.a=l.length
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
a1=n.ghr(n)
a2=n.ghs(n)
a5=n.ght()
n=n.ghq()
b.a.uniform4f(b.d,a1,a2,a5,n)
n=f.gaU()
if(!C.b.O(l,n)){n.a=l.length
l.push(n)}n=f.gaU()
b=n.gb2(n)
if(b){b=c.dy
b.toString
a1=n.d
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.a
b.a.uniform1i(b.d,n)}}if(f.giu()){n=f.gis()
b=c.Q
b.a.uniform1f(b.d,n)
n=f.gir()
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
p.ik(b4)
if(!o||b3.b||!1)q.disable(3042)
for(j=0;j<l.length;++j){b3=l[j]
if(b3.c){b3.c=!1
q.activeTexture(33984+b3.a)
q.bindTexture(3553,null)}}b3=b2.a
b3.toString
q.useProgram(null)
b3.x.hp()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cC().b1}}
O.h6.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.cP(a,C.c.a4(b+3,4)*4))}}
O.h7.prototype={
$2:function(a,b){return J.cL(a.a,b.a)}}
O.h8.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.cX(a,C.c.a4(b+3,4)*4))}}
O.h9.prototype={
$2:function(a,b){return J.cL(a.a,b.a)}}
O.ha.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.dk(a,C.c.a4(b+3,4)*4))}}
O.hb.prototype={
$2:function(a,b){return J.cL(a.a,b.a)}}
O.hc.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.ds(a,C.c.a4(b+3,4)*4))}}
O.hd.prototype={
$2:function(a,b){return J.cL(a.a,b.a)}}
O.h0.prototype={
ay:function(){var u,t=this
t.cp()
u=t.f
if(!(Math.abs(u-1)<$.A().a)){t.f=1
u=new D.C(t.b,u,1)
u.b=!0
t.a.X(u)}}}
O.c5.prototype={
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
O.h1.prototype={}
O.au.prototype={
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
O.h3.prototype={}
O.h4.prototype={
ay:function(){var u,t=this
t.cq()
u=t.ch
if(!(Math.abs(u-1)<$.A().a)){t.ch=1
u=new D.C(t.b+".refraction",u,1)
u.b=!0
t.a.X(u)}}}
O.h5.prototype={
cP:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.A().a)){u.ch=a
t=new D.C(u.b+".shininess",t,a)
t.b=!0
u.a.X(t)}},
ay:function(){this.cq()
this.cP(100)}}
O.dy.prototype={}
T.dz.prototype={}
T.ic.prototype={}
T.id.prototype={
gw:function(){var u=this.y
return u==null?this.y=D.N():u}}
T.ie.prototype={
hL:function(a,b){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,10497)
r.texParameteri(s,10243,10497)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=document.createElement("img")
u.src=a
t=new T.id()
t.a=0
t.b=q
t.d=t.c=!1
W.X(u,"load",new T.ig(this,t,u,!1,q,!1,!1),!1)
return t},
fR:function(a,b,c){var u,t,s,r
b=V.l1(b)
u=V.l1(a.width)
t=V.l1(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.ku()
s.width=u
s.height=t
r=C.i.e2(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.oO(r.getImageData(0,0,s.width,s.height))}}}
T.ig.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.fR(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.Y.ic(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.hu()}++s.e}}
X.kt.prototype={}
X.fw.prototype={
gw:function(){var u=this.x
return u==null?this.x=D.N():u}}
X.dj.prototype={
gw:function(){var u=this.f
return u==null?this.f=D.N():u},
aK:function(a){var u=this.f
if(u!=null)u.J(a)},
er:function(){return this.aK(null)},
sae:function(a){var u,t,s=this
if(!J.D(s.b,a)){u=s.b
if(u!=null)u.gw().L(0,s.gcv())
t=s.b
s.b=a
if(a!=null)a.gw().n(0,s.gcv())
u=new D.C("mover",t,s.b)
u.b=!0
s.aK(u)}}}
X.i8.prototype={}
V.cT.prototype={
bb:function(a){this.b=new P.fB(C.P)
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
o=m.b.eC(q,0,q.length)
n=o==null?q:o
C.N.e4(p,H.l3(n," ","&nbsp;"))
n=p.style
n.color=b
C.b.gas(m.d).push(p)}},
dL:function(a,b){var u,t,s,r=this
r.d=H.b([],[[P.o,W.ak]])
u=C.b.j(b,"\n")
t=r.c
if(t==null)t=r.c=r.bi()
for(t.toString,s=new H.n(u),s=new P.bG(t.cj(new H.b8(s,s.gm(s))).a());s.t();)r.bo(s.gC(s))}}
V.kj.prototype={
$1:function(a){var u=C.d.dX(this.a.ghE(),2)
if(u!=="0.00")P.l2(u+" fps")}}
V.fc.prototype={
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
bi:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=L.ik()
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
a1.k(0,k).j(0,k).a.push(new K.aK())
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
a1.k(0,h).j(0,h).a.push(new K.aK())
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
s=[K.b9]
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
bi:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=L.ik()
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
e.k(0,k).j(0,m).a.push(new K.aK())
t=e.k(0,j).j(0,i)
u=K.t(new H.n("\n"))
t.a.push(u)
u=e.k(0,j).j(0,j)
t=new K.a6()
s=[K.b9]
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
bi:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=L.ik()
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
l.k(0,o).j(0,o).a.push(new K.aK())
l.k(0,s).j(0,m).a.push(new K.aK())
u=l.k(0,m).j(0,m)
t=new K.a6()
t.a=H.b([],[K.b9])
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
V.hy.prototype={
dL:function(a,b){this.d=H.b([],[[P.o,W.ak]])
this.N(C.b.j(b,"\n"),"#111")},
bo:function(a){},
bi:function(){return}}
V.hD.prototype={
cW:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
if(m.c==null)return
u=m.a
t=P.lJ().gcd().h(0,H.e(u))
if(t==null)if(d){c.$0()
m.cU(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.l9(m.c).n(0,q)
o=W.mZ("radio")
o.checked=s
o.name=u
W.X(o,"change",new V.hE(m,o,c,b),!1)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.l9(m.c).n(0,r.createElement("br"))},
aZ:function(a,b,c){return this.cW(a,b,c,!1)},
cU:function(a){var u,t,s=P.lJ(),r=P.h,q=P.n7(s.gcd(),r,r)
q.l(0,this.a,a)
u=s.dR(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.jv([],[]).br(""),"",t)}}
V.hE.prototype={
$1:function(a){var u=this
if(u.b.checked){u.c.$0()
u.a.cU(u.d)}}}
V.hT.prototype={
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
W.X(q,"scroll",new V.hV(o),!1)},
cY:function(a){var u,t,s,r,q,p,o,n
this.fX()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b,r=C.b.hJ(a),s.toString,r=new H.n(r),r=new P.bG(s.cj(new H.b8(r,r.gm(r))).a());r.t();){s=r.gC(r)
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
t.appendChild(o)}else{n=P.ex(C.x,s,C.e,!1)
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
e1:function(a){var u,t,s,r=new V.fc("dart")
r.bb("dart")
u=new V.fy("glsl")
u.bb("glsl")
t=new V.fz("html")
t.bb("html")
s=C.b.hA(H.b([r,u,t],[V.cT]),new V.hW(a))
if(s!=null)return s
r=new V.hy("plain")
r.bb("plain")
return r},
cX:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.b([],[P.v])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(J.cG(s).a3(s,"+")){b0[t]=C.a.a6(s,1)
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
n=P.ex(C.x,a7,C.e,!1)
m=q.createElement("tr")
m.className="headerRow"
l=q.createElement("td")
l.className="headerCell"
l.colSpan=u?3:2
k=q.createElement("div")
k.className="tableHeader"
k.id=n
j=W.lb()
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
u=L.ik()
u.d=u.k(0,q)
t=u.k(0,q).j(0,p)
s=K.t(new H.n("*"))
t.a.push(s)
t.c=!0
t=u.k(0,p).j(0,p)
s=new K.a6()
r=[K.b9]
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
u.k(0,q).j(0,i).a.push(new K.aK())
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
V.hV.prototype={
$1:function(a){P.lF(C.m,new V.hU(this.a))}}
V.hU.prototype={
$0:function(){var u=C.d.ak(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
V.hW.prototype={
$1:function(a){return a.a===this.a}}
K.ka.prototype={
$1:function(a){var u,t,s,r,q=H.l(a,"$idv").c,p=this.a,o=this.b.au(0,q,null)
if(!J.D(p.d,o)){u=p.d
t=u==null
s=o==null
if(!(!t&&s))t=t&&!s
else t=!0
if(t)p.a=null
p.d=o
o=new D.C("colorMatrix",u,o)
o.b=!0
p.X(o)}r=V.ne(this.c.au(0,q,null))
if(!J.D(p.b,r)){o=p.b
u=o==null&&!0
if(u)p.a=null
p.b=r
o=new D.C("texture2DMatrix",o,r)
o.b=!0
p.X(o)}}}
K.kb.prototype={
$0:function(){this.a.sai(0,F.kX(1,null,null,1))}}
K.kc.prototype={
$0:function(){this.a.sai(0,F.m7(!0,40,1))}}
K.kd.prototype={
$0:function(){this.a.sai(0,F.m7(!1,40,0))}}
K.ke.prototype={
$0:function(){this.a.sai(0,F.p9(6,6))}}
K.kf.prototype={
$0:function(){this.a.sai(0,F.mj())}}
K.kg.prototype={
$0:function(){this.a.sai(0,F.p2())}}
K.kh.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.a,r=[P.h]
u.cX("Vertex Shader","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
t=t.a
u.cX("Fragment Shader","glsl",0,H.b((t==null?null:t.d).split("\n"),r))}};(function aliases(){var u=J.a.prototype
u.ea=u.i
u=J.d6.prototype
u.ec=u.i
u=P.j.prototype
u.eb=u.bs
u=W.P.prototype
u.bu=u.ac
u=W.ef.prototype
u.ed=u.ap
u=K.d2.prototype
u.e9=u.aC
u.co=u.i
u=O.c5.prototype
u.cp=u.ay
u=O.au.prototype
u.cq=u.ay})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installStaticTearOff,q=hunkHelpers.installInstanceTearOff,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u,n=hunkHelpers._instance_1u,m=hunkHelpers._instance_0i
u(J,"od","n2",20)
t(P,"oI","nM",7)
t(P,"oJ","nN",7)
t(P,"oK","nO",7)
s(P,"m6","oG",9)
r(W,"oX",4,null,["$4"],["nP"],15,0)
r(W,"oY",4,null,["$4"],["nQ"],15,0)
var l
q(l=E.aN.prototype,"gdJ",0,0,null,["$1","$0"],["dK","hU"],0,0)
q(l,"gdH",0,0,null,["$1","$0"],["dI","hT"],0,0)
q(l,"gdF",0,0,null,["$1","$0"],["dG","hQ"],0,0)
p(l,"ghO","hP",4)
p(l,"ghR","hS",4)
q(l=E.dA.prototype,"gcr",0,0,null,["$1","$0"],["ct","cs"],0,0)
o(l,"gi8","dS",9)
n(l=X.dJ.prototype,"gfc","fd",5)
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
q(D.bq.prototype,"gcu",0,0,null,["$1","$0"],["av","em"],0,0)
q(l=D.d8.prototype,"gcK",0,0,null,["$1","$0"],["cL","fi"],0,0)
n(l,"gfw","fz",19)
p(l,"geV","eW",11)
p(l,"gfC","fD",11)
m(V.U.prototype,"gm","c8",12)
m(V.z.prototype,"gm","c8",12)
q(l=U.bZ.prototype,"gbc",0,0,null,["$1","$0"],["T","am"],0,0)
p(l,"geT","eU",13)
p(l,"gfA","fB",13)
q(l=U.dK.prototype,"gbc",0,0,null,["$1","$0"],["T","am"],0,0)
n(l,"geN","eO",1)
n(l,"geP","eQ",1)
n(l,"geR","eS",1)
n(l,"geI","eJ",1)
n(l,"geK","eL",1)
n(l,"gh3","h4",1)
n(l,"gh1","h2",1)
n(l,"gh_","h0",1)
q(l=M.d_.prototype,"gan",0,0,null,["$1","$0"],["aw","en"],0,0)
p(l,"gf2","f3",4)
p(l,"gf4","f5",4)
q(l=O.db.prototype,"gbf",0,0,null,["$1","$0"],["X","bF"],0,0)
q(l,"gfP",0,0,null,["$1","$0"],["cM","fQ"],0,0)
p(l,"geX","eY",14)
p(l,"geZ","f_",14)
q(O.c5.prototype,"gbf",0,0,null,["$1","$0"],["X","bF"],0,0)
q(X.dj.prototype,"gcv",0,0,null,["$1","$0"],["aK","er"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.a2,null)
s(P.a2,[H.kC,J.a,J.ab,P.e2,P.j,H.b8,P.fG,H.d0,H.iD,H.f4,H.iq,P.br,H.bU,H.ek,P.a1,H.fO,H.fQ,H.fI,P.eq,P.bF,P.bG,P.dN,P.dw,P.i4,P.dB,P.jN,P.jp,P.jj,P.e1,P.x,P.jF,P.fX,P.f1,P.fC,P.jL,P.jK,P.aH,P.ac,P.aa,P.b3,P.hw,P.dt,P.dV,P.fv,P.fx,P.o,P.Q,P.bc,P.h,P.R,P.bH,P.iF,P.js,W.f8,W.cs,W.K,W.dh,W.ef,W.jz,W.d1,W.aR,W.jo,W.ey,P.ju,P.ev,P.jk,P.bC,K.aK,K.d2,K.b9,K.hF,K.hO,L.du,L.dC,L.dD,L.ij,O.b2,O.c7,E.eY,E.aN,E.hG,D.Y,E.dA,Z.dM,Z.j2,Z.cR,Z.bt,Z.aV,D.f0,D.bs,X.cS,X.d7,X.fL,X.fU,X.bx,X.hk,X.il,X.dJ,D.eV,D.bq,D.a5,D.hA,D.i_,V.W,V.ar,V.fm,V.c6,V.aQ,V.a7,V.T,V.be,V.dm,V.U,V.z,U.dK,M.d_,A.cO,A.eQ,A.a_,A.cP,A.cX,A.dk,A.ds,A.h2,A.ck,A.cl,A.cn,A.co,A.dG,A.iy,F.b4,F.fp,F.c2,F.fN,F.cc,F.hP,F.hQ,F.hR,F.hS,F.bh,F.iR,F.iS,F.iV,F.iX,F.iY,F.iZ,O.dy,O.c5,O.h3,T.ie,X.kt,X.i8,X.dj,V.cT,V.hD,V.hT])
s(J.a,[J.fH,J.d5,J.d6,J.b5,J.c1,J.b6,H.c9,H.bb,W.f,W.eN,W.bn,W.as,W.H,W.dP,W.ah,W.fd,W.fe,W.dR,W.cZ,W.dT,W.fg,W.i,W.dW,W.at,W.fA,W.dY,W.aO,W.fT,W.he,W.e3,W.e4,W.aw,W.e5,W.e8,W.ay,W.ec,W.ee,W.aB,W.eg,W.aC,W.el,W.an,W.eo,W.ii,W.aE,W.er,W.io,W.iK,W.ez,W.eB,W.eD,W.eF,W.eH,P.aP,P.e_,P.aS,P.ea,P.hC,P.em,P.aU,P.et,P.eR,P.dO,P.dn,P.ei])
s(J.d6,[J.hx,J.bE,J.b7])
t(J.kB,J.b5)
s(J.c1,[J.d4,J.d3])
t(P.fS,P.e2)
s(P.fS,[H.dH,W.j9,W.a3,P.fr])
t(H.n,H.dH)
s(P.j,[H.r,H.c4,H.cq,P.fE])
s(H.r,[H.d9,H.fP])
t(H.fj,H.c4)
s(P.fG,[H.fY,H.j3])
t(H.fZ,H.d9)
t(H.f5,H.f4)
s(P.br,[H.ht,H.fK,H.iC,H.f_,H.hM,P.di,P.aj,P.iE,P.iA,P.cg,P.f3,P.fb])
s(H.bU,[H.ko,H.i9,H.fJ,H.k5,H.k6,H.k7,P.j5,P.j4,P.j6,P.j7,P.jE,P.jD,P.jW,P.jm,P.jn,P.fR,P.fW,P.fh,P.fi,P.iJ,P.iG,P.iH,P.iI,P.jG,P.jH,P.jJ,P.jI,P.jR,P.jQ,P.jS,P.jT,W.fk,W.hg,W.hi,W.hL,W.i3,W.je,W.hr,W.hq,W.jq,W.jr,W.jC,W.jM,P.jw,P.jx,P.jX,P.fs,P.ft,P.eT,E.hH,E.hI,E.hJ,E.ih,D.fn,D.fo,F.jO,F.jY,F.k_,F.k0,F.k1,F.kk,F.kl,F.kn,F.k9,F.jZ,F.j0,F.j_,F.iT,F.iU,O.h6,O.h7,O.h8,O.h9,O.ha,O.hb,O.hc,O.hd,T.ig,V.kj,V.hE,V.hV,V.hU,V.hW,K.ka,K.kb,K.kc,K.kd,K.ke,K.kf,K.kg,K.kh])
s(H.i9,[H.i1,H.bS])
t(P.fV,P.a1)
s(P.fV,[H.I,W.j8])
t(H.dd,H.bb)
s(H.dd,[H.cu,H.cw])
t(H.cv,H.cu)
t(H.ca,H.cv)
t(H.cx,H.cw)
t(H.de,H.cx)
s(H.de,[H.hl,H.hm,H.hn,H.ho,H.hp,H.df,H.cb])
t(P.jA,P.fE)
t(P.jl,P.jN)
t(P.ji,P.jp)
t(P.ew,P.fX)
t(P.dI,P.ew)
s(P.f1,[P.eW,P.fl])
t(P.f6,P.i4)
s(P.f6,[P.eX,P.fB,P.iN,P.iM])
t(P.iL,P.fl)
s(P.aa,[P.J,P.v])
s(P.aj,[P.bA,P.fD])
t(P.jb,P.bH)
s(W.f,[W.E,W.fq,W.c8,W.aA,W.cy,W.aD,W.ao,W.cA,W.j1,W.cr,P.eU,P.bm])
s(W.E,[W.P,W.b1])
s(W.P,[W.p,P.k])
s(W.p,[W.eO,W.eP,W.bo,W.bp,W.ak,W.fu,W.c0,W.hN,W.dx,W.i6,W.i7,W.ci])
t(W.f7,W.as)
t(W.bV,W.dP)
s(W.ah,[W.f9,W.fa])
t(W.dS,W.dR)
t(W.cY,W.dS)
t(W.dU,W.dT)
t(W.ff,W.dU)
t(W.al,W.bn)
t(W.dX,W.dW)
t(W.bY,W.dX)
t(W.dZ,W.dY)
t(W.c_,W.dZ)
t(W.bf,W.i)
s(W.bf,[W.bw,W.ax,W.bB])
t(W.hf,W.e3)
t(W.hh,W.e4)
t(W.e6,W.e5)
t(W.hj,W.e6)
t(W.e9,W.e8)
t(W.dg,W.e9)
t(W.ed,W.ec)
t(W.hz,W.ed)
t(W.hK,W.ee)
t(W.cz,W.cy)
t(W.hY,W.cz)
t(W.eh,W.eg)
t(W.hZ,W.eh)
t(W.i2,W.el)
t(W.ep,W.eo)
t(W.ia,W.ep)
t(W.cB,W.cA)
t(W.ib,W.cB)
t(W.es,W.er)
t(W.im,W.es)
t(W.bi,W.ax)
t(W.eA,W.ez)
t(W.ja,W.eA)
t(W.dQ,W.cZ)
t(W.eC,W.eB)
t(W.jf,W.eC)
t(W.eE,W.eD)
t(W.e7,W.eE)
t(W.eG,W.eF)
t(W.jt,W.eG)
t(W.eI,W.eH)
t(W.jy,W.eI)
t(W.jc,W.j8)
t(W.jd,P.dw)
t(W.jB,W.ef)
t(P.jv,P.ju)
t(P.a8,P.jk)
t(P.e0,P.e_)
t(P.fM,P.e0)
t(P.eb,P.ea)
t(P.hu,P.eb)
t(P.cf,P.k)
t(P.en,P.em)
t(P.i5,P.en)
t(P.eu,P.et)
t(P.ip,P.eu)
t(P.eS,P.dO)
t(P.hv,P.bm)
t(P.ej,P.ei)
t(P.i0,P.ej)
s(K.d2,[K.a6,L.dF])
s(D.Y,[E.dv,D.bu,D.bv,D.C,X.hB])
s(E.eY,[Z.cQ,A.dq,T.dz])
s(X.hB,[X.da,X.ba,X.dE])
s(O.b2,[D.d8,U.bZ])
s(D.f0,[U.f2,U.am])
s(U.am,[U.cU,U.dp])
t(A.h_,A.dq)
s(A.dG,[A.bg,A.iv,A.iw,A.ix,A.it,A.V,A.iu,A.G,A.cj,A.iz,A.cm,A.ad,A.a0,A.bD])
t(F.hX,F.fp)
t(F.is,F.fN)
t(F.iW,F.iX)
t(F.hs,F.iY)
t(O.db,O.dy)
s(O.c5,[O.h0,O.h1,O.au])
s(O.au,[O.h4,O.h5])
t(T.ic,T.dz)
t(T.id,T.ic)
t(X.fw,X.i8)
s(V.cT,[V.fc,V.fy,V.fz,V.hy])
u(H.dH,H.iD)
u(H.cu,P.x)
u(H.cv,H.d0)
u(H.cw,P.x)
u(H.cx,H.d0)
u(P.e2,P.x)
u(P.ew,P.jF)
u(W.dP,W.f8)
u(W.dR,P.x)
u(W.dS,W.K)
u(W.dT,P.x)
u(W.dU,W.K)
u(W.dW,P.x)
u(W.dX,W.K)
u(W.dY,P.x)
u(W.dZ,W.K)
u(W.e3,P.a1)
u(W.e4,P.a1)
u(W.e5,P.x)
u(W.e6,W.K)
u(W.e8,P.x)
u(W.e9,W.K)
u(W.ec,P.x)
u(W.ed,W.K)
u(W.ee,P.a1)
u(W.cy,P.x)
u(W.cz,W.K)
u(W.eg,P.x)
u(W.eh,W.K)
u(W.el,P.a1)
u(W.eo,P.x)
u(W.ep,W.K)
u(W.cA,P.x)
u(W.cB,W.K)
u(W.er,P.x)
u(W.es,W.K)
u(W.ez,P.x)
u(W.eA,W.K)
u(W.eB,P.x)
u(W.eC,W.K)
u(W.eD,P.x)
u(W.eE,W.K)
u(W.eF,P.x)
u(W.eG,W.K)
u(W.eH,P.x)
u(W.eI,W.K)
u(P.e_,P.x)
u(P.e0,W.K)
u(P.ea,P.x)
u(P.eb,W.K)
u(P.em,P.x)
u(P.en,W.K)
u(P.et,P.x)
u(P.eu,W.K)
u(P.dO,P.a1)
u(P.ei,P.x)
u(P.ej,W.K)})()
var v={mangledGlobalNames:{v:"int",J:"double",aa:"num",h:"String",aH:"bool",bc:"Null",o:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.Y]},{func:1,ret:-1,args:[D.Y]},{func:1,ret:-1,args:[W.ax]},{func:1,ret:P.bc,args:[,,]},{func:1,ret:-1,args:[P.v,[P.j,E.aN]]},{func:1,ret:-1,args:[W.i]},{func:1,ret:-1,args:[W.bB]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bw]},{func:1,ret:-1,args:[P.v,[P.j,D.a5]]},{func:1,ret:P.J},{func:1,ret:-1,args:[P.v,[P.j,U.am]]},{func:1,ret:-1,args:[P.v,[P.j,V.aQ]]},{func:1,ret:P.aH,args:[W.P,P.h,P.h,W.cs]},{func:1,ret:P.bc,args:[,]},{func:1,ret:P.bC,args:[,,]},{func:1,ret:-1,args:[W.bi]},{func:1,ret:P.aH,args:[[P.j,D.a5]]},{func:1,ret:P.v,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.q=W.bo.prototype
C.i=W.bp.prototype
C.N=W.ak.prototype
C.Q=J.a.prototype
C.b=J.b5.prototype
C.R=J.d3.prototype
C.c=J.d4.prototype
C.u=J.d5.prototype
C.d=J.c1.prototype
C.a=J.b6.prototype
C.S=J.b7.prototype
C.A=J.hx.prototype
C.Y=P.dn.prototype
C.B=W.dx.prototype
C.p=J.bE.prototype
C.C=W.bi.prototype
C.D=W.cr.prototype
C.a_=new P.eX()
C.E=new P.eW()
C.r=function getTagFallback(o) {
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
C.t=function(hooks) { return hooks; }

C.L=new P.hw()
C.e=new P.iL()
C.M=new P.iN()
C.f=new P.jl()
C.m=new P.b3(0)
C.O=new P.b3(5e6)
C.P=new P.fC("element",!1,!1,!1)
C.v=H.b(u([127,2047,65535,1114111]),[P.v])
C.j=H.b(u([0,0,32776,33792,1,10240,0,0]),[P.v])
C.T=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.k=H.b(u([0,0,65490,45055,65535,34815,65534,18431]),[P.v])
C.l=H.b(u([0,0,26624,1023,65534,2047,65534,2047]),[P.v])
C.U=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.w=H.b(u([]),[P.h])
C.V=H.b(u([0,0,32722,12287,65534,34815,65534,18431]),[P.v])
C.x=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.v])
C.h=H.b(u([0,0,24576,1023,65534,34815,65534,18431]),[P.v])
C.y=H.b(u([0,0,32754,11263,65534,34815,65534,18431]),[P.v])
C.W=H.b(u([0,0,32722,12287,65535,34815,65534,18431]),[P.v])
C.z=H.b(u([0,0,65490,12287,65535,34815,65534,18431]),[P.v])
C.n=H.b(u(["bind","if","ref","repeat","syntax"]),[P.h])
C.o=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])
C.X=new H.f5(0,{},C.w,[P.h,P.h])
C.Z=new P.bF(null,2)})();(function staticFields(){$.aq=0
$.bT=null
$.ld=null
$.mc=null
$.m5=null
$.mg=null
$.k2=null
$.k8=null
$.l_=null
$.bK=null
$.cE=null
$.cF=null
$.kU=!1
$.ap=C.f
$.a9=[]
$.aM=null
$.kx=null
$.lk=null
$.lj=null
$.ct=P.kE(P.h,P.fx)
$.lr=null
$.lu=null
$.az=null
$.lA=null
$.lN=null
$.lQ=null
$.lP=null
$.iO=null
$.iP=null
$.iQ=null
$.lO=null
$.lt=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pg","ml",function(){return H.mb("_$dart_dartClosure")})
u($,"ph","l5",function(){return H.mb("_$dart_js")})
u($,"pi","mm",function(){return H.aF(H.ir({
toString:function(){return"$receiver$"}}))})
u($,"pj","mn",function(){return H.aF(H.ir({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"pk","mo",function(){return H.aF(H.ir(null))})
u($,"pl","mp",function(){return H.aF(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"po","ms",function(){return H.aF(H.ir(void 0))})
u($,"pp","mt",function(){return H.aF(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pn","mr",function(){return H.aF(H.lH(null))})
u($,"pm","mq",function(){return H.aF(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"pr","mv",function(){return H.aF(H.lH(void 0))})
u($,"pq","mu",function(){return H.aF(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"pF","l6",function(){return P.nL()})
u($,"ps","mw",function(){return P.nH()})
u($,"pG","mA",function(){return H.nf(H.bJ(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.v])))})
u($,"pJ","mC",function(){return P.nt("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"pK","mD",function(){return P.ob()})
u($,"pH","mB",function(){return P.ln(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)})
u($,"pz","mz",function(){return Z.ai(0)})
u($,"pt","mx",function(){return Z.ai(511)})
u($,"pB","b_",function(){return Z.ai(1)})
u($,"pA","aZ",function(){return Z.ai(2)})
u($,"pv","aY",function(){return Z.ai(4)})
u($,"pC","b0",function(){return Z.ai(8)})
u($,"pD","bl",function(){return Z.ai(16)})
u($,"pw","cJ",function(){return Z.ai(32)})
u($,"px","cK",function(){return Z.ai(64)})
u($,"py","my",function(){return Z.ai(96)})
u($,"pE","bQ",function(){return Z.ai(128)})
u($,"pu","aX",function(){return Z.ai(256)})
u($,"pf","mk",function(){return new V.fm(1e-9)})
u($,"pe","A",function(){return $.mk()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.c9,DataView:H.bb,ArrayBufferView:H.bb,Float32Array:H.ca,Float64Array:H.ca,Int16Array:H.hl,Int32Array:H.hm,Int8Array:H.hn,Uint16Array:H.ho,Uint32Array:H.hp,Uint8ClampedArray:H.df,CanvasPixelArray:H.df,Uint8Array:H.cb,HTMLAudioElement:W.p,HTMLBRElement:W.p,HTMLBaseElement:W.p,HTMLButtonElement:W.p,HTMLContentElement:W.p,HTMLDListElement:W.p,HTMLDataElement:W.p,HTMLDataListElement:W.p,HTMLDetailsElement:W.p,HTMLDialogElement:W.p,HTMLEmbedElement:W.p,HTMLFieldSetElement:W.p,HTMLHRElement:W.p,HTMLHeadElement:W.p,HTMLHeadingElement:W.p,HTMLHtmlElement:W.p,HTMLIFrameElement:W.p,HTMLInputElement:W.p,HTMLLIElement:W.p,HTMLLabelElement:W.p,HTMLLegendElement:W.p,HTMLLinkElement:W.p,HTMLMapElement:W.p,HTMLMediaElement:W.p,HTMLMenuElement:W.p,HTMLMetaElement:W.p,HTMLMeterElement:W.p,HTMLModElement:W.p,HTMLOListElement:W.p,HTMLObjectElement:W.p,HTMLOptGroupElement:W.p,HTMLOptionElement:W.p,HTMLOutputElement:W.p,HTMLParagraphElement:W.p,HTMLParamElement:W.p,HTMLPictureElement:W.p,HTMLPreElement:W.p,HTMLProgressElement:W.p,HTMLQuoteElement:W.p,HTMLScriptElement:W.p,HTMLShadowElement:W.p,HTMLSlotElement:W.p,HTMLSourceElement:W.p,HTMLSpanElement:W.p,HTMLStyleElement:W.p,HTMLTableCaptionElement:W.p,HTMLTableCellElement:W.p,HTMLTableDataCellElement:W.p,HTMLTableHeaderCellElement:W.p,HTMLTableColElement:W.p,HTMLTextAreaElement:W.p,HTMLTimeElement:W.p,HTMLTitleElement:W.p,HTMLTrackElement:W.p,HTMLUListElement:W.p,HTMLUnknownElement:W.p,HTMLVideoElement:W.p,HTMLDirectoryElement:W.p,HTMLFontElement:W.p,HTMLFrameElement:W.p,HTMLFrameSetElement:W.p,HTMLMarqueeElement:W.p,HTMLElement:W.p,AccessibleNodeList:W.eN,HTMLAnchorElement:W.eO,HTMLAreaElement:W.eP,Blob:W.bn,HTMLBodyElement:W.bo,HTMLCanvasElement:W.bp,CDATASection:W.b1,CharacterData:W.b1,Comment:W.b1,ProcessingInstruction:W.b1,Text:W.b1,CSSPerspective:W.f7,CSSCharsetRule:W.H,CSSConditionRule:W.H,CSSFontFaceRule:W.H,CSSGroupingRule:W.H,CSSImportRule:W.H,CSSKeyframeRule:W.H,MozCSSKeyframeRule:W.H,WebKitCSSKeyframeRule:W.H,CSSKeyframesRule:W.H,MozCSSKeyframesRule:W.H,WebKitCSSKeyframesRule:W.H,CSSMediaRule:W.H,CSSNamespaceRule:W.H,CSSPageRule:W.H,CSSRule:W.H,CSSStyleRule:W.H,CSSSupportsRule:W.H,CSSViewportRule:W.H,CSSStyleDeclaration:W.bV,MSStyleCSSProperties:W.bV,CSS2Properties:W.bV,CSSImageValue:W.ah,CSSKeywordValue:W.ah,CSSNumericValue:W.ah,CSSPositionValue:W.ah,CSSResourceValue:W.ah,CSSUnitValue:W.ah,CSSURLImageValue:W.ah,CSSStyleValue:W.ah,CSSMatrixComponent:W.as,CSSRotation:W.as,CSSScale:W.as,CSSSkew:W.as,CSSTranslation:W.as,CSSTransformComponent:W.as,CSSTransformValue:W.f9,CSSUnparsedValue:W.fa,DataTransferItemList:W.fd,HTMLDivElement:W.ak,DOMException:W.fe,ClientRectList:W.cY,DOMRectList:W.cY,DOMRectReadOnly:W.cZ,DOMStringList:W.ff,DOMTokenList:W.fg,Element:W.P,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.al,FileList:W.bY,FileWriter:W.fq,HTMLFormElement:W.fu,Gamepad:W.at,History:W.fA,HTMLCollection:W.c_,HTMLFormControlsCollection:W.c_,HTMLOptionsCollection:W.c_,ImageData:W.aO,HTMLImageElement:W.c0,KeyboardEvent:W.bw,Location:W.fT,MediaList:W.he,MessagePort:W.c8,MIDIInputMap:W.hf,MIDIOutputMap:W.hh,MimeType:W.aw,MimeTypeArray:W.hj,PointerEvent:W.ax,MouseEvent:W.ax,DragEvent:W.ax,Document:W.E,DocumentFragment:W.E,HTMLDocument:W.E,ShadowRoot:W.E,XMLDocument:W.E,Attr:W.E,DocumentType:W.E,Node:W.E,NodeList:W.dg,RadioNodeList:W.dg,Plugin:W.ay,PluginArray:W.hz,RTCStatsReport:W.hK,HTMLSelectElement:W.hN,SourceBuffer:W.aA,SourceBufferList:W.hY,SpeechGrammar:W.aB,SpeechGrammarList:W.hZ,SpeechRecognitionResult:W.aC,Storage:W.i2,CSSStyleSheet:W.an,StyleSheet:W.an,HTMLTableElement:W.dx,HTMLTableRowElement:W.i6,HTMLTableSectionElement:W.i7,HTMLTemplateElement:W.ci,TextTrack:W.aD,TextTrackCue:W.ao,VTTCue:W.ao,TextTrackCueList:W.ia,TextTrackList:W.ib,TimeRanges:W.ii,Touch:W.aE,TouchEvent:W.bB,TouchList:W.im,TrackDefaultList:W.io,CompositionEvent:W.bf,FocusEvent:W.bf,TextEvent:W.bf,UIEvent:W.bf,URL:W.iK,VideoTrackList:W.j1,WheelEvent:W.bi,Window:W.cr,DOMWindow:W.cr,CSSRuleList:W.ja,ClientRect:W.dQ,DOMRect:W.dQ,GamepadList:W.jf,NamedNodeMap:W.e7,MozNamedAttrMap:W.e7,SpeechRecognitionResultList:W.jt,StyleSheetList:W.jy,SVGLength:P.aP,SVGLengthList:P.fM,SVGNumber:P.aS,SVGNumberList:P.hu,SVGPointList:P.hC,SVGScriptElement:P.cf,SVGStringList:P.i5,SVGAElement:P.k,SVGAnimateElement:P.k,SVGAnimateMotionElement:P.k,SVGAnimateTransformElement:P.k,SVGAnimationElement:P.k,SVGCircleElement:P.k,SVGClipPathElement:P.k,SVGDefsElement:P.k,SVGDescElement:P.k,SVGDiscardElement:P.k,SVGEllipseElement:P.k,SVGFEBlendElement:P.k,SVGFEColorMatrixElement:P.k,SVGFEComponentTransferElement:P.k,SVGFECompositeElement:P.k,SVGFEConvolveMatrixElement:P.k,SVGFEDiffuseLightingElement:P.k,SVGFEDisplacementMapElement:P.k,SVGFEDistantLightElement:P.k,SVGFEFloodElement:P.k,SVGFEFuncAElement:P.k,SVGFEFuncBElement:P.k,SVGFEFuncGElement:P.k,SVGFEFuncRElement:P.k,SVGFEGaussianBlurElement:P.k,SVGFEImageElement:P.k,SVGFEMergeElement:P.k,SVGFEMergeNodeElement:P.k,SVGFEMorphologyElement:P.k,SVGFEOffsetElement:P.k,SVGFEPointLightElement:P.k,SVGFESpecularLightingElement:P.k,SVGFESpotLightElement:P.k,SVGFETileElement:P.k,SVGFETurbulenceElement:P.k,SVGFilterElement:P.k,SVGForeignObjectElement:P.k,SVGGElement:P.k,SVGGeometryElement:P.k,SVGGraphicsElement:P.k,SVGImageElement:P.k,SVGLineElement:P.k,SVGLinearGradientElement:P.k,SVGMarkerElement:P.k,SVGMaskElement:P.k,SVGMetadataElement:P.k,SVGPathElement:P.k,SVGPatternElement:P.k,SVGPolygonElement:P.k,SVGPolylineElement:P.k,SVGRadialGradientElement:P.k,SVGRectElement:P.k,SVGSetElement:P.k,SVGStopElement:P.k,SVGStyleElement:P.k,SVGSVGElement:P.k,SVGSwitchElement:P.k,SVGSymbolElement:P.k,SVGTSpanElement:P.k,SVGTextContentElement:P.k,SVGTextElement:P.k,SVGTextPathElement:P.k,SVGTextPositioningElement:P.k,SVGTitleElement:P.k,SVGUseElement:P.k,SVGViewElement:P.k,SVGGradientElement:P.k,SVGComponentTransferFunctionElement:P.k,SVGFEDropShadowElement:P.k,SVGMPathElement:P.k,SVGElement:P.k,SVGTransform:P.aU,SVGTransformList:P.ip,AudioBuffer:P.eR,AudioParamMap:P.eS,AudioTrackList:P.eU,AudioContext:P.bm,webkitAudioContext:P.bm,BaseAudioContext:P.bm,OfflineAudioContext:P.hv,WebGL2RenderingContext:P.dn,SQLResultSetRowList:P.i0})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.dd.$nativeSuperclassTag="ArrayBufferView"
H.cu.$nativeSuperclassTag="ArrayBufferView"
H.cv.$nativeSuperclassTag="ArrayBufferView"
H.ca.$nativeSuperclassTag="ArrayBufferView"
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
if(typeof dartMainRunner==="function")dartMainRunner(K.me,[])
else K.me([])})})()
//# sourceMappingURL=test.dart.js.map
