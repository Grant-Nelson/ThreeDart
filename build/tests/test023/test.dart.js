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
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kV"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kV"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kV(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={kD:function kD(){},
k5:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
n9:function(a,b,c,d){if(!!J.N(a).$iq)return new H.fj(a,b,[c,d])
return new H.c6(a,b,[c,d])},
fG:function(){return new P.cg("No element")},
mZ:function(){return new P.cg("Too many elements")},
nx:function(a,b){var u=J.af(a)
if(typeof u!=="number")return u.M()
H.dr(a,0,u-1,b)},
dr:function(a,b,c,d){if(c-b<=32)H.nw(a,b,c,d)
else H.nv(a,b,c,d)},
nw:function(a,b,c,d){var u,t,s,r,q,p
for(u=b+1,t=J.ap(a);u<=c;++u){s=t.h(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.h(a,r-1),s)
if(typeof q!=="number")return q.a0()
q=q>0}else q=!1
if(!q)break
p=r-1
t.l(a,r,t.h(a,p))
r=p}t.l(a,r,s)}},
nv:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j=C.c.a3(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.a3(a4+a5,2),f=g-j,e=g+j,d=J.ap(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.a0()
if(a2>0){u=b
b=c
c=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a0()
if(a2>0){u=a1
a1=a0
a0=u}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.a0()
if(a2>0){u=a
a=c
c=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a0()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.a0()
if(a2>0){u=a0
a0=c
c=u}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.a0()
if(a2>0){u=a0
a0=a
a=u}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.a0()
if(a2>0){u=a1
a1=b
b=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a0()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a0()
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
if(typeof p!=="number")return p.R()
if(p<0){if(r!==t){d.l(a3,r,d.h(a3,t))
d.l(a3,t,q)}++t}else for(;!0;){p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.a0()
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
if(typeof l!=="number")return l.R()
if(l<0){if(r!==t){d.l(a3,r,d.h(a3,t))
d.l(a3,t,q)}++t}else{k=a6.$2(q,a0)
if(typeof k!=="number")return k.a0()
if(k>0)for(;!0;){p=a6.$2(d.h(a3,s),a0)
if(typeof p!=="number")return p.a0()
if(p>0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.R()
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
if(typeof p!=="number")return p.R()
o=s-1
if(p<0){d.l(a3,r,d.h(a3,t))
n=t+1
d.l(a3,t,d.h(a3,s))
d.l(a3,s,q)
t=n}else{d.l(a3,r,d.h(a3,s))
d.l(a3,s,q)}s=o
break}}H.dr(a3,t,s,a6)}else H.dr(a3,t,s,a6)},
m:function m(a){this.a=a},
q:function q(){},
d8:function d8(){},
b6:function b6(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c6:function c6(a,b,c){this.a=a
this.b=b
this.$ti=c},
fj:function fj(a,b,c){this.a=a
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
j4:function j4(a,b){this.a=a
this.b=b},
d_:function d_(){},
iE:function iE(){},
dG:function dG(){},
mR:function(){throw H.c(P.y("Cannot modify unmodifiable Map"))},
cI:function(a){var u,t=H.pa(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
oU:function(a){return v.types[a]},
ma:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.N(a).$iA},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a3(a)
if(typeof u!=="string")throw H.c(H.ad(a))
return u},
cd:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
nn:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
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
ce:function(a){return H.ne(a)+H.lY(H.cH(a),0,null)},
ne:function(a){var u,t,s,r,q,p,o,n=J.N(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.V||!!n.$ibG){r=C.v(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cI(t.length>1&&C.a.F(t,0)===36?C.a.a5(t,1):t)},
nf:function(){if(!!self.location)return self.location.href
return},
lr:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
no:function(a){var u,t,s,r=H.b([],[P.w])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.l)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ad(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.aJ(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.c(H.ad(s))}return H.lr(r)},
ls:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ad(s))
if(s<0)throw H.c(H.ad(s))
if(s>65535)return H.no(a)}return H.lr(a)},
np:function(a,b,c){var u,t,s,r
if(typeof c!=="number")return c.ic()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
if(s<c)r=s
else r=c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
bA:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.aJ(u,10))>>>0,56320|u&1023)}}throw H.c(P.X(a,0,1114111,null,null))},
bz:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nm:function(a){var u=H.bz(a).getFullYear()+0
return u},
nk:function(a){var u=H.bz(a).getMonth()+1
return u},
ng:function(a){var u=H.bz(a).getDate()+0
return u},
nh:function(a){var u=H.bz(a).getHours()+0
return u},
nj:function(a){var u=H.bz(a).getMinutes()+0
return u},
nl:function(a){var u=H.bz(a).getSeconds()+0
return u},
ni:function(a){var u=H.bz(a).getMilliseconds()+0
return u},
v:function(a){throw H.c(H.ad(a))},
d:function(a,b){if(a==null)J.af(a)
throw H.c(H.bP(a,b))},
bP:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ai(!0,b,s,null)
u=J.af(a)
if(!(b<0)){if(typeof u!=="number")return H.v(u)
t=b>=u}else t=!0
if(t)return P.L(b,a,s,null,u)
return P.dm(b,s)},
oO:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bB(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bB(a,c,!0,b,"end",u)
return new P.ai(!0,b,"end",null)},
ad:function(a){return new P.ai(!0,a,null,null)},
oJ:function(a){if(typeof a!=="number")throw H.c(H.ad(a))
return a},
c:function(a){var u
if(a==null)a=new P.dj()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.mg})
u.name=""}else u.toString=H.mg
return u},
mg:function(){return J.a3(this.dartException)},
p:function(a){throw H.c(a)},
l:function(a){throw H.c(P.aK(a))},
aE:function(a){var u,t,s,r,q,p
a=H.me(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.ir(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
is:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
lB:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lo:function(a,b){return new H.hu(a,b==null?null:b.method)},
kE:function(a,b){var u=b==null,t=u?null:b.method
return new H.fL(a,t,u?null:b.receiver)},
ae:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.ko(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.aJ(t,16)&8191)===10)switch(s){case 438:return f.$1(H.kE(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.lo(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.mk()
q=$.ml()
p=$.mm()
o=$.mn()
n=$.mq()
m=$.mr()
l=$.mp()
$.mo()
k=$.mt()
j=$.ms()
i=r.ab(u)
if(i!=null)return f.$1(H.kE(u,i))
else{i=q.ab(u)
if(i!=null){i.method="call"
return f.$1(H.kE(u,i))}else{i=p.ab(u)
if(i==null){i=o.ab(u)
if(i==null){i=n.ab(u)
if(i==null){i=m.ab(u)
if(i==null){i=l.ab(u)
if(i==null){i=o.ab(u)
if(i==null){i=k.ab(u)
if(i==null){i=j.ab(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.lo(u,i))}}return f.$1(new H.iD(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dt()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.ai(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dt()
return a},
kY:function(a){var u
if(a==null)return new H.ek(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.ek(a)},
oS:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.l(0,a[u],a[t])}return b},
p_:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.u("Unsupported number of arguments for wrapped closure"))},
bO:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.p_)
a.$identity=u
return u},
mQ:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.i2().constructor.prototype):Object.create(new H.bU(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aq
if(typeof t!=="number")return t.w()
$.aq=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.le(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.mM(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.le(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
mM:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.oU,a)
if(typeof a=="function")if(b)return a
else{u=c?H.ld:H.ks
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.c("Error in functionType of tearoff")},
mN:function(a,b,c,d){var u=H.ks
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
le:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mP(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mN(t,!r,u,b)
if(t===0){r=$.aq
if(typeof r!=="number")return r.w()
$.aq=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bV
return new Function(r+H.e(q==null?$.bV=H.eZ("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aq
if(typeof r!=="number")return r.w()
$.aq=r+1
o+=r
r="return function("+o+"){return this."
q=$.bV
return new Function(r+H.e(q==null?$.bV=H.eZ("self"):q)+"."+H.e(u)+"("+o+");}")()},
mO:function(a,b,c,d){var u=H.ks,t=H.ld
switch(b?-1:a){case 0:throw H.c(H.nt("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
mP:function(a,b){var u,t,s,r,q,p,o,n=$.bV
if(n==null)n=$.bV=H.eZ("self")
u=$.lc
if(u==null)u=$.lc=H.eZ("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.mO(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.aq
if(typeof u!=="number")return u.w()
$.aq=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.aq
if(typeof u!=="number")return u.w()
$.aq=u+1
return new Function(n+u+"}")()},
kV:function(a,b,c,d,e,f,g){return H.mQ(a,b,c,d,!!e,!!f,g)},
ks:function(a){return a.a},
ld:function(a){return a.c},
eZ:function(a){var u,t,s,r=new H.bU("self","target","receiver","name"),q=J.kB(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
p4:function(a,b){throw H.c(H.mL(a,H.cI(b.substring(2))))},
r:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.N(a)[b]
else u=!0
if(u)return a
H.p4(a,b)},
oQ:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
mL:function(a,b){return new H.f_("CastError: "+P.kz(a)+": type '"+H.e(H.oF(a))+"' is not a subtype of type '"+b+"'")},
oF:function(a){var u,t=J.N(a)
if(!!t.$ibW){u=H.oQ(t)
if(u!=null)return H.p5(u)
return"Closure"}return H.ce(a)},
p9:function(a){throw H.c(new P.fb(a))},
nt:function(a){return new H.hN(a)},
m8:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
cH:function(a){if(a==null)return
return a.$ti},
pL:function(a,b,c){return H.km(a["$a"+H.e(c)],H.cH(b))},
oT:function(a,b,c,d){var u=H.km(a["$a"+H.e(c)],H.cH(b))
return u==null?null:u[d]},
kX:function(a,b,c){var u=H.km(a["$a"+H.e(b)],H.cH(a))
return u==null?null:u[c]},
aH:function(a,b){var u=H.cH(a)
return u==null?null:u[b]},
p5:function(a){return H.bi(a,null)},
bi:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cI(a[0].name)+H.lY(a,1,b)
if(typeof a=="function")return H.cI(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.e(b[t])}if('func' in a)return H.oa(a,b)
if('futureOr' in a)return"FutureOr<"+H.bi("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
oa:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
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
for(n=H.oR(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.bi(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
lY:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.R("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bi(p,c)}return"<"+u.i(0)+">"},
km:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
pJ:function(a,b,c){return a.apply(b,H.km(J.N(b)["$a"+H.e(c)],H.cH(b)))},
pK:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
p1:function(a){var u,t,s,r,q=$.m9.$1(a),p=$.k3[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.k9[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.m2.$2(a,q)
if(q!=null){p=$.k3[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.k9[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.ki(u)
$.k3[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.k9[q]=u
return u}if(s==="-"){r=H.ki(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.mc(a,u)
if(s==="*")throw H.c(P.iC(q))
if(v.leafTags[q]===true){r=H.ki(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.mc(a,u)},
mc:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.l_(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
ki:function(a){return J.l_(a,!1,null,!!a.$iA)},
p2:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.ki(u)
else return J.l_(u,c,null,null)},
oY:function(){if(!0===$.kZ)return
$.kZ=!0
H.oZ()},
oZ:function(){var u,t,s,r,q,p,o,n
$.k3=Object.create(null)
$.k9=Object.create(null)
H.oX()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.md.$1(q)
if(p!=null){o=H.p2(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
oX:function(){var u,t,s,r,q,p,o=C.K()
o=H.bN(C.L,H.bN(C.M,H.bN(C.w,H.bN(C.w,H.bN(C.N,H.bN(C.O,H.bN(C.P(C.v),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.m9=new H.k6(r)
$.m2=new H.k7(q)
$.md=new H.k8(p)},
bN:function(a,b){return a(b)||b},
n2:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.c(P.S("Illegal RegExp pattern ("+String(p)+")",a,null))},
mf:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
oP:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
me:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
l2:function(a,b,c){var u=H.p8(a,b,c)
return u},
p8:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.me(b),'g'),H.oP(c))},
f4:function f4(){},
f5:function f5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ir:function ir(a,b,c,d,e,f){var _=this
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
iD:function iD(a){this.a=a},
ko:function ko(a){this.a=a},
ek:function ek(a){this.a=a
this.b=null},
bW:function bW(){},
ia:function ia(){},
i2:function i2(){},
bU:function bU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f_:function f_(a){this.a=a},
hN:function hN(a){this.a=a},
H:function H(a){var _=this
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
k6:function k6(a){this.a=a},
k7:function k7(a){this.a=a},
k8:function k8(a){this.a=a},
fJ:function fJ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bL:function(a){return a},
nc:function(a){return new Int8Array(a)},
aF:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bP(b,a))},
o8:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.oO(a,b,c))
return b},
c9:function c9(){},
b9:function b9(){},
de:function de(){},
ca:function ca(){},
df:function df(){},
hm:function hm(){},
hn:function hn(){},
ho:function ho(){},
hp:function hp(){},
hq:function hq(){},
dg:function dg(){},
cb:function cb(){},
cu:function cu(){},
cv:function cv(){},
cw:function cw(){},
cx:function cx(){},
oR:function(a){return J.lk(a?Object.keys(a):[],null)},
pa:function(a){return v.mangledGlobalNames[a]},
p3:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
l_:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
k4:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.kZ==null){H.oY()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.iC("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.l4()]
if(r!=null)return r
r=H.p1(a)
if(r!=null)return r
if(typeof a=="function")return C.X
u=Object.getPrototypeOf(a)
if(u==null)return C.D
if(u===Object.prototype)return C.D
if(typeof s=="function"){Object.defineProperty(s,$.l4(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
n_:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.kr(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.X(a,0,4294967295,"length",null))
return J.lk(new Array(a),b)},
lk:function(a,b){return J.kB(H.b(a,[b]))},
kB:function(a){a.fixed$length=Array
return a},
n0:function(a,b){return J.cL(a,b)},
N:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d3.prototype
return J.d2.prototype}if(typeof a=="string")return J.b4.prototype
if(a==null)return J.d4.prototype
if(typeof a=="boolean")return J.fI.prototype
if(a.constructor==Array)return J.b3.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.a1)return a
return J.k4(a)},
ap:function(a){if(typeof a=="string")return J.b4.prototype
if(a==null)return a
if(a.constructor==Array)return J.b3.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.a1)return a
return J.k4(a)},
eJ:function(a){if(a==null)return a
if(a.constructor==Array)return J.b3.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.a1)return a
return J.k4(a)},
m7:function(a){if(typeof a=="number")return J.c3.prototype
if(typeof a=="string")return J.b4.prototype
if(a==null)return a
if(!(a instanceof P.a1))return J.bG.prototype
return a},
cG:function(a){if(typeof a=="string")return J.b4.prototype
if(a==null)return a
if(!(a instanceof P.a1))return J.bG.prototype
return a},
bR:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.a1)return a
return J.k4(a)},
D:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.N(a).q(a,b)},
l6:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.m7(a).A(a,b)},
bT:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.ma(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ap(a).h(a,b)},
kp:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.ma(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.eJ(a).l(a,b,c)},
mC:function(a,b){return J.cG(a).F(a,b)},
mD:function(a,b,c){return J.bR(a).fC(a,b,c)},
mE:function(a,b,c,d){return J.bR(a).fW(a,b,c,d)},
mF:function(a,b){return J.cG(a).U(a,b)},
cL:function(a,b){return J.m7(a).aL(a,b)},
kq:function(a,b){return J.ap(a).D(a,b)},
eM:function(a,b){return J.eJ(a).J(a,b)},
mG:function(a,b,c,d){return J.bR(a).hn(a,b,c,d)},
l7:function(a,b){return J.eJ(a).G(a,b)},
mH:function(a){return J.bR(a).gh2(a)},
l8:function(a){return J.bR(a).gbP(a)},
cM:function(a){return J.N(a).gI(a)},
aI:function(a){return J.eJ(a).gS(a)},
af:function(a){return J.ap(a).gm(a)},
l9:function(a){return J.eJ(a).hU(a)},
mI:function(a,b){return J.bR(a).hY(a,b)},
mJ:function(a,b,c){return J.cG(a).p(a,b,c)},
mK:function(a){return J.cG(a).i6(a)},
a3:function(a){return J.N(a).i(a)},
a:function a(){},
fI:function fI(){},
d4:function d4(){},
d5:function d5(){},
hy:function hy(){},
bG:function bG(){},
b5:function b5(){},
b3:function b3(a){this.$ti=a},
kC:function kC(a){this.$ti=a},
aa:function aa(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c3:function c3(){},
d3:function d3(){},
d2:function d2(){},
b4:function b4(){}},P={
nJ:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.oG()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bO(new P.j6(s),1)).observe(u,{childList:true})
return new P.j5(s,u,t)}else if(self.setImmediate!=null)return P.oH()
return P.oI()},
nK:function(a){self.scheduleImmediate(H.bO(new P.j7(a),0))},
nL:function(a){self.setImmediate(H.bO(new P.j8(a),0))},
nM:function(a){P.kJ(C.n,a)},
kJ:function(a,b){var u=C.c.a3(a.a,1000)
return P.nT(u<0?0:u,b)},
lA:function(a,b){var u=C.c.a3(a.a,1000)
return P.nU(u<0?0:u,b)},
nT:function(a,b){var u=new P.eq()
u.ec(a,b)
return u},
nU:function(a,b){var u=new P.eq()
u.ed(a,b)
return u},
pG:function(a){return new P.bH(a,1)},
nP:function(){return C.a6},
nQ:function(a){return new P.bH(a,3)},
od:function(a,b){return new P.jB(a,[b])},
oz:function(){var u,t
for(;u=$.bM,u!=null;){$.cF=null
t=u.b
$.bM=t
if(t==null)$.cE=null
u.a.$0()}},
oE:function(){$.kT=!0
try{P.oz()}finally{$.cF=null
$.kT=!1
if($.bM!=null)$.l5().$1(P.m3())}},
oC:function(a){var u=new P.dM(a)
if($.bM==null){$.bM=$.cE=u
if(!$.kT)$.l5().$1(P.m3())}else $.cE=$.cE.b=u},
oD:function(a){var u,t,s=$.bM
if(s==null){P.oC(a)
$.cF=$.cE
return}u=new P.dM(a)
t=$.cF
if(t==null){u.b=s
$.bM=$.cF=u}else{u.b=t.b
$.cF=t.b=u
if(u.b==null)$.cE=u}},
lz:function(a,b){var u=$.ao
if(u===C.f)return P.kJ(a,b)
return P.kJ(a,u.h3(b))},
nA:function(a,b){var u=$.ao
if(u===C.f)return P.lA(a,b)
return P.lA(a,u.d_(b,P.dA))},
lZ:function(a,b,c,d,e){var u={}
u.a=d
P.oD(new P.jX(u,e))},
oA:function(a,b,c,d){var u,t=$.ao
if(t===c)return d.$0()
$.ao=c
u=t
try{t=d.$0()
return t}finally{$.ao=u}},
oB:function(a,b,c,d,e){var u,t=$.ao
if(t===c)return d.$1(e)
$.ao=c
u=t
try{t=d.$1(e)
return t}finally{$.ao=u}},
j6:function j6(a){this.a=a},
j5:function j5(a,b,c){this.a=a
this.b=b
this.c=c},
j7:function j7(a){this.a=a},
j8:function j8(a){this.a=a},
eq:function eq(){this.c=0},
jF:function jF(a,b){this.a=a
this.b=b},
jE:function jE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bH:function bH(a,b){this.a=a
this.b=b},
bI:function bI(a){var _=this
_.a=a
_.d=_.c=_.b=null},
jB:function jB(a,b){this.a=a
this.$ti=b},
dM:function dM(a){this.a=a
this.b=null},
dv:function dv(){},
i5:function i5(){},
dA:function dA(){},
jO:function jO(){},
jX:function jX(a,b){this.a=a
this.b=b},
jm:function jm(){},
jn:function jn(a,b){this.a=a
this.b=b},
jo:function jo(a,b,c){this.a=a
this.b=b
this.c=c},
n4:function(a,b){return new H.H([a,b])},
kF:function(a,b){return new H.H([a,b])},
n6:function(a){return H.oS(a,new H.H([null,null]))},
c5:function(a){return new P.jj([a])},
kO:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
nS:function(a,b){var u=new P.e1(a,b)
u.c=a.e
return u},
mY:function(a,b,c){var u,t
if(P.kU(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.h])
$.a8.push(a)
try{P.oc(a,u)}finally{if(0>=$.a8.length)return H.d($.a8,-1)
$.a8.pop()}t=P.lx(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
kA:function(a,b,c){var u,t
if(P.kU(a))return b+"..."+c
u=new P.R(b)
$.a8.push(a)
try{t=u
t.a=P.lx(t.a,a,", ")}finally{if(0>=$.a8.length)return H.d($.a8,-1)
$.a8.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kU:function(a){var u,t
for(u=$.a8.length,t=0;t<u;++t)if(a===$.a8[t])return!0
return!1},
oc:function(a,b){var u,t,s,r,q,p,o,n=a.gS(a),m=0,l=0
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
n5:function(a,b,c){var u=P.n4(b,c)
a.G(0,new P.fS(u))
return u},
ll:function(a,b){var u,t,s=P.c5(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.l)(a),++t)s.n(0,a[t])
return s},
kH:function(a){var u,t={}
if(P.kU(a))return"{...}"
u=new P.R("")
try{$.a8.push(a)
u.a+="{"
t.a=!0
J.l7(a,new P.fX(t,u))
u.a+="}"}finally{if(0>=$.a8.length)return H.d($.a8,-1)
$.a8.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jj:function jj(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jk:function jk(a){this.a=a
this.c=this.b=null},
e1:function e1(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fF:function fF(){},
fS:function fS(a){this.a=a},
fT:function fT(){},
x:function x(){},
fW:function fW(){},
fX:function fX(a,b){this.a=a
this.b=b},
a0:function a0(){},
jG:function jG(){},
fY:function fY(){},
dH:function dH(a,b){this.a=a
this.$ti=b},
jq:function jq(){},
e2:function e2(){},
ew:function ew(){},
nD:function(a,b,c,d){if(b instanceof Uint8Array)return P.nE(!1,b,c,d)
return},
nE:function(a,b,c,d){var u,t,s=$.mu()
if(s==null)return
u=0===c
if(u&&!0)return P.kM(s,b)
t=b.length
d=P.aT(c,d,t)
if(u&&d===t)return P.kM(s,b)
return P.kM(s,b.subarray(c,d))},
kM:function(a,b){if(P.nG(b))return
return P.nH(a,b)},
nH:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ae(t)}return},
nG:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
nF:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ae(t)}return},
m0:function(a,b,c){var u,t,s
if(typeof c!=="number")return H.v(c)
u=J.ap(a)
t=b
for(;t<c;++t){s=u.h(a,t)
if(typeof s!=="number")return s.a6()
if((s&127)!==s)return t-b}return c-b},
lb:function(a,b,c,d,e,f){if(C.c.b6(f,4)!==0)throw H.c(P.S("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.S("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.S("Invalid base64 padding, more than two '=' characters",a,b))},
eW:function eW(){},
eX:function eX(){},
f1:function f1(){},
f6:function f6(){},
fl:function fl(){},
fD:function fD(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
fC:function fC(a){this.a=a},
iM:function iM(){},
iO:function iO(){},
jM:function jM(a){this.b=0
this.c=a},
iN:function iN(a){this.a=a},
jL:function jL(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
eK:function(a,b,c){var u=H.nn(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.S(a,null,null))},
mV:function(a){if(a instanceof H.bW)return a.i(0)
return"Instance of '"+H.e(H.ce(a))+"'"},
n7:function(a,b,c){var u,t,s=J.n_(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
kG:function(a,b,c){var u,t=H.b([],[c])
for(u=J.aI(a);u.t();)t.push(u.gC(u))
if(b)return t
return J.kB(t)},
ch:function(a,b,c){var u,t
if(typeof a==="object"&&a!==null&&a.constructor===Array){u=a.length
c=P.aT(b,c,u)
if(b<=0){if(typeof c!=="number")return c.R()
t=c<u}else t=!0
return H.ls(t?C.b.dV(a,b,c):a)}if(!!J.N(a).$icb)return H.np(a,b,P.aT(b,c,a.length))
return P.ny(a,b,c)},
ny:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.c(P.X(b,0,J.af(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.X(c,b,J.af(a),q,q))
t=J.aI(a)
for(s=0;s<b;++s)if(!t.t())throw H.c(P.X(b,0,s,q,q))
r=[]
if(u)for(;t.t();)r.push(t.gC(t))
else for(s=b;s<c;++s){if(!t.t())throw H.c(P.X(c,b,s,q,q))
r.push(t.gC(t))}return H.ls(r)},
nr:function(a){return new H.fJ(a,H.n2(a,!1,!0,!1,!1,!1))},
lx:function(a,b,c){var u=J.aI(b)
if(!u.t())return a
if(c.length===0){do a+=H.e(u.gC(u))
while(u.t())}else{a+=H.e(u.gC(u))
for(;u.t();)a=a+c+H.e(u.gC(u))}return a},
lD:function(){var u=H.nf()
if(u!=null)return P.nC(u)
throw H.c(P.y("'Uri.base' is not supported"))},
ex:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.e){u=$.mA().b
if(typeof b!=="string")H.p(H.ad(b))
u=u.test(b)}else u=!1
if(u)return b
t=c.ghm().bR(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.d(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.bA(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
mS:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
mT:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cV:function(a){if(a>=10)return""+a
return"0"+a},
lg:function(a){return new P.b1(1000*a)},
kz:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a3(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mV(a)},
cN:function(a){return new P.ai(!1,null,null,a)},
kr:function(a,b,c){return new P.ai(!0,a,b,c)},
dm:function(a,b){return new P.bB(null,null,!0,a,b,"Value not in range")},
X:function(a,b,c,d,e){return new P.bB(b,c,!0,a,d,"Invalid value")},
aT:function(a,b,c){var u
if(typeof a!=="number")return H.v(a)
if(0<=a){if(typeof c!=="number")return H.v(c)
u=a>c}else u=!0
if(u)throw H.c(P.X(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.v(c)
u=b>c}else u=!0
if(u)throw H.c(P.X(b,a,c,"end",null))
return b}return c},
lt:function(a,b){if(typeof a!=="number")return a.R()
if(a<0)throw H.c(P.X(a,0,null,b,null))},
L:function(a,b,c,d,e){var u=e==null?J.af(b):e
return new P.fE(u,!0,a,c,"Index out of range")},
y:function(a){return new P.iF(a)},
iC:function(a){return new P.iB(a)},
lw:function(a){return new P.cg(a)},
aK:function(a){return new P.f3(a)},
u:function(a){return new P.dV(a)},
S:function(a,b,c){return new P.fw(a,b,c)},
n8:function(a,b,c){var u,t,s=H.b([],[c])
C.b.sm(s,a)
for(u=0;u<a;++u){t=b.$1(u)
if(u>=s.length)return H.d(s,u)
s[u]=t}return s},
l1:function(a){H.p3(a)},
nC:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.a.F(a,4)^58)*3|C.a.F(a,0)^100|C.a.F(a,1)^97|C.a.F(a,2)^116|C.a.F(a,3)^97)>>>0
if(u===0)return P.lC(e<e?C.a.p(a,0,e):a,5,f).gdM()
else if(u===32)return P.lC(C.a.p(a,5,e),0,f).gdM()}t=new Array(8)
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
if(typeof r!=="number")return r.ib()
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
l=!1}else{if(!(n<e&&n===o+2&&C.a.a4(a,"..",o)))j=n>o+2&&C.a.a4(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.a.a4(a,"file",0)){if(q<=0){if(!C.a.a4(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.a.p(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.a.aO(a,o,n,"/");++e
n=h}k="file"}else if(C.a.a4(a,"http",0)){if(t&&p+3===o&&C.a.a4(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.a.aO(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.a.a4(a,"https",0)){if(t&&p+4===o&&C.a.a4(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.a.aO(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.a.p(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.jt(a,r,q,p,o,n,m,k)}return P.nV(a,0,e,r,q,p,o,n,m,k)},
lF:function(a){var u=P.h
return C.b.hs(H.b(a.split("&"),[u]),P.kF(u,u),new P.iK(C.e))},
nB:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.iH(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.a.U(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.eK(C.a.p(a,s,t),n,n)
if(typeof p!=="number")return p.a0()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.d(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.eK(C.a.p(a,s,c),n,n)
if(typeof p!=="number")return p.a0()
if(p>255)k.$2(l,s)
if(r>=u)return H.d(j,r)
j[r]=p
return j},
lE:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.iI(a),d=new P.iJ(e,a)
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
n=C.b.gap(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)u.push(d.$2(s,c))
else{m=P.nB(a,s,c)
u.push((m[0]<<8|m[1])>>>0)
u.push((m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.d(l,i)
l[i]=0
f=i+1
if(f>=k)return H.d(l,f)
l[f]=0
i+=2}else{f=C.c.aJ(h,8)
if(i<0||i>=k)return H.d(l,i)
l[i]=f
f=i+1
if(f>=k)return H.d(l,f)
l[f]=h&255
i+=2}}return l},
nV:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.o2(a,b,d)
else{if(d===b)P.bK(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.o3(a,u,e-1):""
s=P.o_(a,e,f,!1)
if(typeof f!=="number")return f.w()
r=f+1
if(typeof g!=="number")return H.v(g)
q=r<g?P.o1(P.eK(C.a.p(a,r,g),new P.jH(a,f),n),j):n}else{q=n
s=q
t=""}p=P.o0(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.R()
o=h<i?P.kQ(a,h+1,i,n):n
return new P.bJ(j,t,s,q,p,o,i<c?P.nZ(a,i+1,c):n)},
lS:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bK:function(a,b,c){throw H.c(P.S(c,a,b))},
o1:function(a,b){if(a!=null&&a===P.lS(b))return
return a},
o_:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.a.U(a,b)===91){if(typeof c!=="number")return c.M()
u=c-1
if(C.a.U(a,u)!==93)P.bK(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.nX(a,t,u)
if(typeof s!=="number")return s.R()
if(s<u){r=s+1
q=P.lX(a,C.a.a4(a,"25",r)?s+3:r,u,"%25")}else q=""
P.lE(a,t,s)
return C.a.p(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.v(c)
p=b
for(;p<c;++p)if(C.a.U(a,p)===58){s=C.a.bh(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.lX(a,C.a.a4(a,"25",r)?s+3:r,c,"%25")}else q=""
P.lE(a,b,s)
return"["+C.a.p(a,b,s)+q+"]"}return P.o5(a,b,c)},
nX:function(a,b,c){var u,t=C.a.bh(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.v(c)
u=t<c}else u=!1
return u?t:c},
lX:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.R(d):null
if(typeof c!=="number")return H.v(c)
u=b
t=u
s=!0
for(;u<c;){r=C.a.U(a,u)
if(r===37){q=P.kR(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.R("")
o=l.a+=C.a.p(a,t,u)
if(p)q=C.a.p(a,u,u+3)
else if(q==="%")P.bK(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.d(C.h,p)
p=(C.h[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.R("")
if(t<u){l.a+=C.a.p(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.a.U(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.R("")
l.a+=C.a.p(a,t,u)
l.a+=P.kP(r)
u+=m
t=u}}}if(l==null)return C.a.p(a,b,c)
if(t<c)l.a+=C.a.p(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
o5:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.v(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.a.U(a,u)
if(q===37){p=P.kR(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.R("")
n=C.a.p(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.a.p(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.d(C.A,o)
o=(C.A[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.R("")
if(t<u){s.a+=C.a.p(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.d(C.k,o)
o=(C.k[o]&1<<(q&15))!==0}else o=!1
if(o)P.bK(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.a.U(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.R("")
n=C.a.p(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.kP(q)
u+=l
t=u}}}}if(s==null)return C.a.p(a,b,c)
if(t<c){n=C.a.p(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
o2:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.lU(C.a.F(a,b)))P.bK(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.a.F(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.d(C.m,r)
r=(C.m[r]&1<<(s&15))!==0}else r=!1
if(!r)P.bK(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.a.p(a,b,c)
return P.nW(t?a.toLowerCase():a)},
nW:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
o3:function(a,b,c){return P.cC(a,b,c,C.a_,!1)},
o0:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.cC(a,b,c,C.B,!0):C.j.iB(d,new P.jI(),P.h).j(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.a.a2(u,"/"))u="/"+u
return P.o4(u,e,f)},
o4:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.a.a2(a,"/"))return P.o6(a,!u||c)
return P.o7(a)},
kQ:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.c(P.cN("Both query and queryParameters specified"))
return P.cC(a,b,c,C.l,!0)}if(d==null)return
u=new P.R("")
t.a=""
d.G(0,new P.jJ(new P.jK(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
nZ:function(a,b,c){return P.cC(a,b,c,C.l,!0)},
kR:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.a.U(a,b+1)
t=C.a.U(a,p)
s=H.k5(u)
r=H.k5(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.c.aJ(q,4)
if(p>=8)return H.d(C.h,p)
p=(C.h[p]&1<<(q&15))!==0}else p=!1
if(p)return H.bA(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.a.p(a,b,b+3).toUpperCase()
return},
kP:function(a){var u,t,s,r,q,p,o,n,m="0123456789ABCDEF"
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
for(u=t.length,q=0;--r,r>=0;s=128){p=C.c.fO(a,6*r)&63|s
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
q+=3}}return P.ch(t,0,null)},
cC:function(a,b,c,d,e){var u=P.lW(a,b,c,d,e)
return u==null?C.a.p(a,b,c):u},
lW:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.R()
if(typeof c!=="number")return H.v(c)
if(!(o<c))break
c$0:{u=C.a.U(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.d(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.kR(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.d(C.k,t)
t=(C.k[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.bK(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.a.U(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.kP(u)}}if(m==null)m=new P.R("")
m.a+=C.a.p(a,n,o)
m.a+=H.e(s)
if(typeof r!=="number")return H.v(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.R()
if(n<c)m.a+=C.a.p(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
lV:function(a){if(C.a.a2(a,"."))return!0
return C.a.di(a,"/.")!==-1},
o7:function(a){var u,t,s,r,q,p,o
if(!P.lV(a))return a
u=H.b([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.D(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.d(u,-1)
u.pop()
if(u.length===0)u.push("")}r=!0}else if("."===p)r=!0
else{u.push(p)
r=!1}}if(r)u.push("")
return C.b.j(u,"/")},
o6:function(a,b){var u,t,s,r,q,p
if(!P.lV(a))return!b?P.lT(a):a
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
t=P.lT(u[0])
if(0>=u.length)return H.d(u,0)
u[0]=t}return C.b.j(u,"/")},
lT:function(a){var u,t,s,r=a.length
if(r>=2&&P.lU(J.mC(a,0)))for(u=1;u<r;++u){t=C.a.F(a,u)
if(t===58)return C.a.p(a,0,u)+"%3A"+C.a.a5(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.d(C.m,s)
s=(C.m[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
nY:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.a.F(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.cN("Invalid URL encoding"))}}return u},
kS:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.a.F(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.e!==d)s=!1
else s=!0
if(s)return C.a.p(a,b,c)
else r=new H.m(C.a.p(a,b,c))}else{r=H.b([],[P.w])
for(s=a.length,q=b;q<c;++q){t=C.a.F(a,q)
if(t>127)throw H.c(P.cN("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.cN("Truncated URI"))
r.push(P.nY(a,q+1))
q+=2}else if(t===43)r.push(32)
else r.push(t)}}return new P.iN(!1).bR(r)},
lU:function(a){var u=a|32
return 97<=u&&u<=122},
lC:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.b([b-1],[P.w])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.a.F(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.S(m,a,t))}}if(s<0&&t>b)throw H.c(P.S(m,a,t))
for(;r!==44;){l.push(t);++t
for(q=-1;t<u;++t){r=C.a.F(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)l.push(q)
else{p=C.b.gap(l)
if(r!==44||t!==p+7||!C.a.a4(a,"base64",p+1))throw H.c(P.S("Expecting '='",a,t))
break}}l.push(t)
o=t+1
if((l.length&1)===1)a=C.J.hD(0,a,o,u)
else{n=P.lW(a,o,u,C.l,!0)
if(n!=null)a=C.a.aO(a,o,u,n)}return new P.iG(a,l,c)},
o9:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.n8(22,new P.jS(),P.bD),n=new P.jR(o),m=new P.jT(),l=new P.jU(),k=n.$2(0,225)
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
m_:function(a,b,c,d,e){var u,t,s,r,q,p=$.mB()
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
aG:function aG(){},
ab:function ab(a,b){this.a=a
this.b=b},
J:function J(){},
b1:function b1(a){this.a=a},
fh:function fh(){},
fi:function fi(){},
br:function br(){},
dj:function dj(){},
ai:function ai(a,b,c,d){var _=this
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
fE:function fE(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iF:function iF(a){this.a=a},
iB:function iB(a){this.a=a},
cg:function cg(a){this.a=a},
f3:function f3(a){this.a=a},
hx:function hx(){},
dt:function dt(){},
fb:function fb(a){this.a=a},
dV:function dV(a){this.a=a},
fw:function fw(a,b,c){this.a=a
this.b=b
this.c=c},
fy:function fy(){},
w:function w(){},
j:function j(){},
fH:function fH(){},
n:function n(){},
Q:function Q(){},
ba:function ba(){},
a9:function a9(){},
a1:function a1(){},
h:function h(){},
R:function R(a){this.a=a},
iK:function iK(a){this.a=a},
iH:function iH(a){this.a=a},
iI:function iI(a){this.a=a},
iJ:function iJ(a,b){this.a=a
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
jH:function jH(a,b){this.a=a
this.b=b},
jI:function jI(){},
jK:function jK(a,b){this.a=a
this.b=b},
jJ:function jJ(a){this.a=a},
iG:function iG(a,b,c){this.a=a
this.b=b
this.c=c},
jS:function jS(){},
jR:function jR(a){this.a=a},
jT:function jT(){},
jU:function jU(){},
jt:function jt(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jc:function jc(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
oM:function(a){var u,t=J.N(a)
if(!!t.$iaN){u=t.gd3(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.ev(a.data,a.height,a.width)},
oL:function(a){if(a instanceof P.ev)return{data:a.a,height:a.b,width:a.c}
return a},
aV:function(a){var u,t,s,r,q
if(a==null)return
u=P.kF(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.l)(t),++r){q=t[r]
u.l(0,q,a[q])}return u},
oK:function(a){var u={}
a.G(0,new P.jY(u))
return u},
jv:function jv(){},
jx:function jx(a,b){this.a=a
this.b=b},
jy:function jy(a,b){this.a=a
this.b=b},
ev:function ev(a,b,c){this.a=a
this.b=b
this.c=c},
jY:function jY(a){this.a=a},
jw:function jw(a,b){this.a=a
this.b=b},
fs:function fs(a,b){this.a=a
this.b=b},
ft:function ft(){},
fu:function fu(){},
ji:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
nR:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jl:function jl(){},
a7:function a7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aO:function aO(){},
fN:function fN(){},
aS:function aS(){},
hv:function hv(){},
hD:function hD(){},
cf:function cf(){},
i6:function i6(){},
k:function k(){},
aU:function aU(){},
iq:function iq(){},
e_:function e_(){},
e0:function e0(){},
ea:function ea(){},
eb:function eb(){},
em:function em(){},
en:function en(){},
et:function et(){},
eu:function eu(){},
bD:function bD(){},
eR:function eR(){},
eS:function eS(){},
eT:function eT(a){this.a=a},
eU:function eU(){},
bl:function bl(){},
hw:function hw(){},
dN:function dN(){},
dp:function dp(){},
i1:function i1(){},
ei:function ei(){},
ej:function ej(){}},W={
la:function(){var u=document.createElement("a")
return u},
ku:function(){var u=document.createElement("canvas")
return u},
mU:function(a,b,c){var u=document.body,t=(u&&C.r).aa(u,a,b,c)
t.toString
u=new H.cq(new W.a2(t),new W.fk(),[W.B])
return u.gaE(u)},
kx:function(a){return"wheel"},
bY:function(a){var u,t,s,r="element tag unavailable"
try{u=J.bR(a)
t=u.gdI(a)
if(typeof t==="string")r=u.gdI(a)}catch(s){H.ae(s)}return r},
mX:function(a){var u,t=document.createElement("input"),s=t
try{s.type=a}catch(u){H.ae(u)}return s},
jh:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lQ:function(a,b,c,d){var u=W.jh(W.jh(W.jh(W.jh(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
Y:function(a,b,c,d){var u=W.m1(new W.jf(c),W.i)
if(u!=null&&!0)J.mE(a,b,u,!1)
return new W.je(a,b,u,!1)},
lP:function(a){var u=W.la(),t=window.location
u=new W.cs(new W.jp(u,t))
u.e7(a)
return u},
nN:function(a,b,c,d){return!0},
nO:function(a,b,c,d){var u,t=d.a,s=t.a
s.href=c
u=s.hostname
t=t.b
if(!(u==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(u==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
lR:function(){var u=P.h,t=P.ll(C.o,u),s=H.b(["TEMPLATE"],[u])
t=new W.jC(t,P.c5(u),P.c5(u),P.c5(u),null)
t.e9(null,new H.h_(C.o,new W.jD(),[H.aH(C.o,0),u]),s,null)
return t},
m1:function(a,b){var u=$.ao
if(u===C.f)return a
return u.d_(a,b)},
o:function o(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){},
bm:function bm(){},
bn:function bn(){},
bp:function bp(){},
b_:function b_(){},
f7:function f7(){},
G:function G(){},
bX:function bX(){},
f8:function f8(){},
ag:function ag(){},
as:function as(){},
f9:function f9(){},
fa:function fa(){},
fd:function fd(){},
aj:function aj(){},
fe:function fe(){},
cX:function cX(){},
cY:function cY(){},
ff:function ff(){},
fg:function fg(){},
ja:function ja(a,b){this.a=a
this.b=b},
O:function O(){},
fk:function fk(){},
i:function i(){},
f:function f(){},
ak:function ak(){},
c_:function c_(){},
fr:function fr(){},
fv:function fv(){},
at:function at(){},
fB:function fB(){},
c1:function c1(){},
aN:function aN(){},
c2:function c2(){},
bw:function bw(){},
fU:function fU(){},
hf:function hf(){},
c8:function c8(){},
hg:function hg(){},
hh:function hh(a){this.a=a},
hi:function hi(){},
hj:function hj(a){this.a=a},
av:function av(){},
hk:function hk(){},
aw:function aw(){},
a2:function a2(a){this.a=a},
B:function B(){},
dh:function dh(){},
ax:function ax(){},
hA:function hA(){},
hL:function hL(){},
hM:function hM(a){this.a=a},
hO:function hO(){},
az:function az(){},
hZ:function hZ(){},
aA:function aA(){},
i_:function i_(){},
aB:function aB(){},
i3:function i3(){},
i4:function i4(a){this.a=a},
am:function am(){},
dw:function dw(){},
i7:function i7(){},
i8:function i8(){},
ci:function ci(){},
aC:function aC(){},
an:function an(){},
ib:function ib(){},
ic:function ic(){},
ij:function ij(){},
aD:function aD(){},
bC:function bC(){},
io:function io(){},
ip:function ip(){},
bd:function bd(){},
iL:function iL(){},
j2:function j2(){},
bh:function bh(){},
cr:function cr(){},
jb:function jb(){},
dP:function dP(){},
jg:function jg(){},
e7:function e7(){},
ju:function ju(){},
jz:function jz(){},
j9:function j9(){},
jd:function jd(a){this.a=a},
je:function je(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jf:function jf(a){this.a=a},
cs:function cs(a){this.a=a},
K:function K(){},
di:function di(a){this.a=a},
hs:function hs(a){this.a=a},
hr:function hr(a,b,c){this.a=a
this.b=b
this.c=c},
ef:function ef(){},
jr:function jr(){},
js:function js(){},
jC:function jC(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jD:function jD(){},
jA:function jA(){},
d0:function d0(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
aR:function aR(){},
jp:function jp(a,b){this.a=a
this.b=b},
ey:function ey(a){this.a=a},
jN:function jN(a){this.a=a},
dO:function dO(){},
dQ:function dQ(){},
dR:function dR(){},
dS:function dS(){},
dT:function dT(){},
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
u=C.a.F(a,0)
t=C.a.F(b,0)
if(u>t){s=t
t=u
u=s}return new K.hG(u,t)},
t:function(a){var u=new K.hP()
u.e3(a)
return u},
aJ:function aJ(){},
d1:function d1(){},
b7:function b7(){},
a5:function a5(){this.a=null},
hG:function hG(a,b){this.a=a
this.b=b},
hP:function hP(){this.a=null}},L={
il:function(){var u=new L.ik(),t=P.h
u.a=new H.H([t,L.du])
u.b=new H.H([t,L.dC])
u.c=P.c5(t)
return u},
du:function du(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dB:function dB(a,b,c){this.a=a
this.b=b
this.c=c},
dC:function dC(a){this.b=a
this.c=null},
ik:function ik(){var _=this
_.d=_.c=_.b=_.a=null},
dE:function dE(a){this.b=a
this.a=this.c=null}},O={
kv:function(a){var u=new O.b0([a])
u.bs(a)
return u},
b0:function b0(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
c7:function c7(){this.b=this.a=null},
da:function da(){var _=this
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
db:function db(){},
h2:function h2(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
au:function au(a,b){var _=this
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
dx:function dx(){}},E={
lj:function(){var u,t=new E.aM()
t.a=""
t.b=!0
u=O.kv(E.aM)
t.y=u
u.b7(t.ghE(),t.ghH())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sae(0,null)
t.sb0(null)
return t},
lN:function(){if(J.kq(window.navigator.vendor,"Google"))return C.H
if(J.kq(window.navigator.userAgent,"Firefox"))return C.t
var u=window.navigator.appVersion
if(J.ap(u).D(u,"Trident")||C.a.D(u,"Edge"))return C.u
if(J.kq(window.navigator.appName,"Microsoft"))return C.u
return C.I},
lO:function(){var u=window.navigator.appVersion
if(J.ap(u).D(u,"Win"))return C.a2
if(C.a.D(u,"Mac"))return C.C
if(C.a.D(u,"Linux"))return C.a3
return C.a4},
ns:function(a,b){var u=new E.hH(a)
u.e2(a,b)
return u},
nz:function(a,b,c,d,e){var u,t,s=J.N(a)
if(!!s.$ibp)return E.ly(a,!0,!0,!0,!1)
u=W.ku()
t=u.style
t.width="100%"
t.height="100%"
s.gbP(a).n(0,u)
return E.ly(u,!0,!0,!0,!1)},
ly:function(a,b,c,d,e){var u,t,s,r,q="mousemove",p=new E.dz(),o=C.i.cf(a,"webgl2",P.n6(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(o==null)H.p(P.u("Failed to get the rendering context for WebGL."))
p.b=a
p.c=o
p.e=E.ns(o,a)
u=new T.ig(o)
u.b=o.getParameter(3379)
o.getParameter(34076)
u.e=u.d=0
p.f=u
u=new X.dI(a)
t=new X.fM()
t.d=P.c5(P.w)
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
t=new X.im(u)
t.f=V.bb()
t.r=V.bb()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.z=H.b([],[[P.dv,P.a1]])
t=$.fm
u.Q=(t==null?$.fm=new E.dU(E.lN(),E.lO()):t).a===C.t?0.16666666666666666:0.005555555555555556
s=u.z
r=document
s.push(W.Y(r,"contextmenu",u.geW(),!1))
u.z.push(W.Y(a,"focus",u.gf1(),!1))
u.z.push(W.Y(a,"blur",u.geP(),!1))
u.z.push(W.Y(r,"keyup",u.gf5(),!1))
u.z.push(W.Y(r,"keydown",u.gf3(),!1))
u.z.push(W.Y(a,"mousedown",u.gf9(),!1))
u.z.push(W.Y(a,"mouseup",u.gfd(),!1))
u.z.push(W.Y(a,q,u.gfb(),!1))
s=u.z
W.kx(a)
W.kx(a)
s.push(W.Y(a,W.kx(a),u.gff(),!1))
u.z.push(W.Y(r,q,u.geY(),!1))
u.z.push(W.Y(r,"mouseup",u.gf_(),!1))
u.z.push(W.Y(r,"pointerlockchange",u.gfh(),!1))
u.z.push(W.Y(a,"touchstart",u.gfv(),!1))
u.z.push(W.Y(a,"touchend",u.gfq(),!1))
u.z.push(W.Y(a,"touchmove",u.gft(),!1))
p.x=u
p.ch=!0
p.cx=!1
p.cy=new P.ab(Date.now(),!1)
p.db=0
p.cI()
return p},
eY:function eY(){},
aM:function aM(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bo:function bo(a){this.b=a},
by:function by(a){this.b=a},
dU:function dU(a,b){this.a=a
this.b=b},
hH:function hH(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hI:function hI(a){this.a=a},
hJ:function hJ(a){this.a=a},
hK:function hK(a){this.a=a},
dz:function dz(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
ii:function ii(a){this.a=a}},Z={
kN:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.bL(c)),35044)
a.bindBuffer(b,null)
return new Z.dL(b,u)},
ah:function(a){return new Z.bg(a)},
dL:function dL(a,b){this.a=a
this.b=b},
cQ:function cQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
j3:function j3(a){this.a=a},
cR:function cR(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bt:function bt(a,b,c){this.a=a
this.b=b
this.c=c},
bg:function bg(a){this.a=a}},D={
P:function(){var u=new D.bs()
u.d=0
return u},
f0:function f0(){},
bs:function bs(){var _=this
_.d=_.c=_.b=_.a=null},
fo:function fo(a){this.a=a},
fp:function fp(a){this.a=a},
Z:function Z(){this.b=null},
bu:function bu(){this.b=null},
bv:function bv(){this.b=null},
E:function E(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
eV:function eV(){},
bq:function bq(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a4:function a4(){},
d7:function d7(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
hB:function hB(){},
i0:function i0(){}},X={cS:function cS(a,b){this.a=a
this.b=b},d6:function d6(a,b){this.a=a
this.b=b},fM:function fM(){this.d=this.b=this.a=null},d9:function d9(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fV:function fV(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bx:function bx(a,b,c){this.a=a
this.b=b
this.c=c},b8:function b8(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hl:function hl(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},hC:function hC(){},dD:function dD(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},im:function im(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dI:function dI(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
mW:function(a){var u=new X.fx(),t=new V.ar(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.lv
if(t==null){t=V.lu(0,0,1,1)
$.lv=t}u.r=t
return u},
kt:function kt(){},
fx:function fx(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dk:function dk(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
i9:function i9(){}},V={
pb:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.b6(a-b,u)
return(a<0?a+u:a)+b},
I:function(a,b,c){if(a==null)return C.a.ac("null",c)
return C.a.ac(C.d.dL(Math.abs(a-0)<$.C().a?0:a,b),c+b+1)},
bQ:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.h])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.l)(a),++s){r=V.I(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.d(o,q)
u=C.a.ac(o[q],t)
p=o.length
if(q>=p)return H.d(o,q)
o[q]=u}return o},
l0:function(a){return C.d.i3(Math.pow(2,C.W.c2(Math.log(H.oJ(a))/Math.log(2))))},
dd:function(){var u=$.ln
return u==null?$.ln=V.aQ(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aQ:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aP(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lm:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.aQ(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
bb:function(){var u=$.lq
return u==null?$.lq=new V.a6(0,0):u},
nd:function(){var u=$.ay
return u==null?$.ay=new V.T(0,0,0):u},
lu:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dn(a,b,c,d)},
cp:function(){var u=$.lK
return u==null?$.lK=new V.z(0,0,0):u},
nI:function(){var u=$.iP
return u==null?$.iP=new V.z(-1,0,0):u},
lL:function(){var u=$.iQ
return u==null?$.iQ=new V.z(0,1,0):u},
lM:function(){var u=$.iR
return u==null?$.iR=new V.z(0,0,1):u},
W:function W(a,b,c){this.a=a
this.b=b
this.c=c},
ar:function ar(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fn:function fn(a){this.a=a},
dc:function dc(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aP:function aP(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
T:function T(a,b,c){this.a=a
this.b=b
this.c=c},
bc:function bc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dn:function dn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
U:function U(a,b){this.a=a
this.b=b},
z:function z(a,b,c){this.a=a
this.b=b
this.c=c},
p6:function(a){P.nA(C.T,new V.kj(a))},
nu:function(a){var u=new V.hU()
u.e5(a,!0)
return u},
cT:function cT(){},
kj:function kj(a){this.a=a},
fc:function fc(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fz:function fz(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fA:function fA(a){var _=this
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
lf:function(){var u=new U.f2()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
kw:function(a){var u=new U.cU()
u.a=a
return u},
lG:function(a,b){var u,t,s,r=new U.dJ(),q=U.lf()
q.sdO(0,!0)
q.sdn(6.283185307179586)
q.sdr(0)
q.sa1(0,0)
q.sdq(100)
q.sX(0)
q.sd2(0.5)
r.b=q
u=r.gb9()
q.gB().n(0,u)
q=U.lf()
q.sdO(0,!0)
q.sdn(6.283185307179586)
q.sdr(0)
q.sa1(0,0)
q.sdq(100)
q.sX(0)
q.sd2(0.5)
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
t=new X.bx(a,!1,!1)
s=r.d
r.d=t
q=new D.E("modifiers",s,t)
q.b=!0
r.W(q)
q=r.f
if(q!==!1){r.f=!1
q=new D.E("invertX",q,!1)
q.b=!0
r.W(q)}q=r.r
if(q!==!1){r.r=!1
q=new D.E("invertY",q,!1)
q.b=!0
r.W(q)}r.h1(b)
return r},
f2:function f2(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cU:function cU(){this.b=this.a=null},
c0:function c0(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
al:function al(){},
dJ:function dJ(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cZ:function cZ(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
mb:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="testCanvas",d=null,c=V.nu("Test 023"),b=W.ku()
b.className="pageLargeCanvas"
b.id=e
c.a.appendChild(b)
u=[P.h]
c.cU(H.b(["Test of the Material Lighting shader with a textured directional ","light. Use Ctrl plus the mouse to move the light."],u))
c.fV(H.b(["shapes"],u))
c.cU(H.b(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(e)
if(t==null)H.p(P.u("Failed to find an element with the identifier, testCanvas."))
s=E.nz(t,!0,!0,!0,!1)
r=U.lG(!1,s.x)
q=U.lG(!0,s.x)
p=new V.W(0.6,0.9,1)
o=s.f.hB("../resources/Test.png",!0)
n=new D.bq()
n.c=new V.W(1,1,1)
n.a=V.lM()
n.d=V.lL()
n.e=V.nI()
m=n.b
n.b=q
q.gB().n(0,n.gbC())
l=new D.E("mover",m,n.b)
l.b=!0
n.al(l)
if(!n.c.q(0,p)){m=n.c
n.c=p
l=new D.E("color",m,p)
l.b=!0
n.al(l)}l=n.f
if(l!==o){if(l!=null)l.gB().L(0,n.gbC())
m=n.f
n.f=o
o.gB().n(0,n.gbC())
o=new D.E("texture",m,n.f)
o.b=!0
n.al(o)}k=new O.da()
o=O.kv(V.aP)
k.e=o
o.b7(k.geL(),k.geN())
o=new O.au(k,"emission")
o.c=new A.a_(!1,!1,!1)
o.f=new V.W(0,0,0)
k.f=o
o=new O.au(k,"ambient")
o.c=new A.a_(!1,!1,!1)
o.f=new V.W(0,0,0)
k.r=o
o=new O.au(k,"diffuse")
o.c=new A.a_(!1,!1,!1)
o.f=new V.W(0,0,0)
k.x=o
o=new O.au(k,"invDiffuse")
o.c=new A.a_(!1,!1,!1)
o.f=new V.W(0,0,0)
k.y=o
o=new O.h6(k,"specular")
o.c=new A.a_(!1,!1,!1)
o.f=new V.W(0,0,0)
o.ch=100
k.z=o
o=new O.h2(k,"bump")
o.c=new A.a_(!1,!1,!1)
k.Q=o
k.ch=null
o=new O.au(k,"reflect")
o.c=new A.a_(!1,!1,!1)
o.f=new V.W(0,0,0)
k.cx=o
o=new O.h5(k,"refract")
o.c=new A.a_(!1,!1,!1)
o.f=new V.W(0,0,0)
o.ch=1
k.cy=o
o=new O.h1(k,"alpha")
o.c=new A.a_(!1,!1,!1)
o.f=1
k.db=o
o=new D.d7()
o.bs(D.a4)
o.e=H.b([],[D.eV])
o.f=H.b([],[D.bq])
o.r=H.b([],[D.hB])
o.x=H.b([],[D.i0])
o.z=o.y=null
o.ci(o.geJ(),o.gfk(),o.gfo())
k.dx=o
l=new O.h4()
l.b=new V.ar(0,0,0,0)
l.c=1
l.d=10
l.e=!1
k.dy=l
l=o.y
o=l==null?o.y=D.P():l
o.n(0,k.gfE())
o=k.dx
l=o.z
o=l==null?o.z=D.P():l
o.n(0,k.gea())
k.fr=null
k.dx.n(0,n)
k.f.sav(0,new V.W(0,0,0))
o=k.r
o.sav(0,new V.W(0.01,0.01,0.01))
o=k.x
o.sav(0,new V.W(0.7,0.7,0.7))
o=k.z
o.sav(0,new V.W(0.3,0.3,0.3))
o=k.z
o.cK(new A.a_(!0,!1,!1))
o.cL(100)
j=E.lj()
j.sae(0,F.mh())
i=E.lj()
i.sb0(U.kw(V.aQ(3,0,0,0,0,3,0,0,0,0,3,0,0,0,0,1)))
o=F.kW(1,d,d,1)
o.c1()
i.sae(0,o)
h=new U.c0()
h.bs(U.al)
h.b7(h.geH(),h.gfm())
h.e=null
h.f=V.dd()
h.r=0
h.n(0,r)
h.n(0,U.kw(V.lm(3.141592653589793)))
h.n(0,U.kw(V.aQ(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
o=new M.cZ()
o.a=!0
l=O.kv(E.aM)
o.e=l
l.b7(o.geS(),o.geU())
o.y=o.x=o.r=o.f=null
g=X.mW(d)
f=new X.dk()
f.c=1.0471975511965976
f.d=0.1
f.e=2000
f.sb0(d)
l=f.c
if(!(Math.abs(l-1.0471975511965976)<$.C().a)){f.c=1.0471975511965976
l=new D.E("fov",l,1.0471975511965976)
l.b=!0
f.aG(l)}l=f.d
if(!(Math.abs(l-0.1)<$.C().a)){f.d=0.1
l=new D.E("near",l,0.1)
l.b=!0
f.aG(l)}l=f.e
if(!(Math.abs(l-2000)<$.C().a)){f.e=2000
l=new D.E("far",l,2000)
l.b=!0
f.aG(l)}l=o.b
if(l!==f){if(l!=null)l.gB().L(0,o.gaj())
m=o.b
o.b=f
f.gB().n(0,o.gaj())
l=new D.E("camera",m,o.b)
l.b=!0
o.ar(l)}l=o.c
if(l!==g){if(l!=null)l.gB().L(0,o.gaj())
m=o.c
o.c=g
g.gB().n(0,o.gaj())
l=new D.E("target",m,o.c)
l.b=!0
o.ar(l)}o.sdJ(d)
o.sdJ(k)
o.e.n(0,j)
o.e.n(0,i)
o.b.sb0(h)
l=s.d
if(l!==o){if(l!=null)l.gB().L(0,s.gcn())
s.d=o
o.gB().n(0,s.gcn())
s.co()}o=new V.hE("shapes")
u=u.getElementById("shapes")
o.c=u
if(u==null)H.p("Failed to find shapes for RadioGroup")
o.aU(0,"Cube",new M.kb(j))
o.aU(0,"Cylinder",new M.kc(j))
o.aU(0,"Cone",new M.kd(j))
o.aU(0,"Sphere",new M.ke(j))
o.cS(0,"Toroid",new M.kf(j),!0)
o.aU(0,"Knot",new M.kg(j))
u=s.Q
if(u==null)u=s.Q=D.P()
o=u.b
u=o==null?u.b=H.b([],[{func:1,ret:-1,args:[D.Z]}]):o
u.push(new M.kh(c,k))
V.p6(s)},
kb:function kb(a){this.a=a},
kc:function kc(a){this.a=a},
kd:function kd(a){this.a=a},
ke:function ke(a){this.a=a},
kf:function kf(a){this.a=a},
kg:function kg(a){this.a=a},
kh:function kh(a,b){this.a=a
this.b=b}},A={
na:function(a,b){var u=a.aX,t=new A.h0(b,u)
t.e4(b,u)
t.e1(a,b)
return t},
nb:function(a,b,c,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="MaterialLight_"+a2.gah(a2)+a3.gah(a3)+a4.gah(a4)+a5.gah(a5)+a6.gah(a6)+a7.gah(a7)+a8.gah(a8)+a9.gah(a9)+b0.gah(b0)+"_"
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
e=$.aZ()
if(j){u=$.aY()
e=new Z.bg(e.a|u.a)}if(i){u=$.aX()
e=new Z.bg(e.a|u.a)}if(h){u=$.aW()
e=new Z.bg(e.a|u.a)}return new A.h3(a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,s,o,k,o,r,g,!0,f,!1,m,r,l,j,i,!1,!1,h,!1,!1,c,!1,a1,d.charCodeAt(0)==0?d:d,e)},
jV:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
jW:function(a,b,c){var u
A.jV(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.eL(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
oi:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.jV(b,t,"emission")
t=b.a+="\n"
t+="vec3 emissionColor()\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   return emissionClr;\n"
b.a=t}t+="}\n"
b.a=t
b.a=t+"\n"},
oe:function(a,b){var u,t=a.b
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.jW(b,t,"ambient")
b.a+="\n"},
og:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.jW(b,t,"diffuse")
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
oj:function(a,b){var u,t=a.d
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.jW(b,t,"invDiffuse")
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
op:function(a,b){var u,t=a.e
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.jW(b,t,"specular")
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
ol:function(a,b){var u,t,s
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
on:function(a,b){var u,t=a.r,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.jV(b,t,"reflect")
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
oo:function(a,b){var u,t=a.x,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.jV(b,t,"refract")
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
of:function(a,b,c){var u,t,s,r,q,p,o=b.b
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
if(typeof u!=="number")return u.a6()
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
oh:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
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
if(typeof u!=="number")return u.a6()
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
om:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
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
if(typeof u!=="number")return u.a6()
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
oq:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
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
if(typeof u!=="number")return u.a6()
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
if(o){u=$.fm
if(u==null)u=$.fm=new E.dU(E.lN(),E.lO())
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
ok:function(a,b){var u,t
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
or:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.R("")
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
A.oi(a,j)
A.oe(a,j)
A.og(a,j)
A.oj(a,j)
A.op(a,j)
t=a.db
if(t){r=j.a+="// === Environmental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.on(a,j)
A.oo(a,j)}A.ol(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.l)(q),++o)A.of(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.l)(q),++o)A.oh(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.l)(q),++o)A.om(a,q[o],j)
for(q=a.cx,p=q.length,o=0;o<q.length;q.length===p||(0,H.l)(q),++o)A.oq(a,q[o],j)
A.ok(a,j)}q=j.a+="// === Main ===\n"
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
os:function(a,b){var u,t,s
if(!a.ry)return
u=b.a+="struct BendingValue\n"
u+="{\n"
b.a=u
u+="   mat4 mat;\n"
b.a=u
u+="};\n"
b.a=u
b.a=u+"uniform int bendMatCount;\n"
u=b.a+="uniform BendingValue bendValues["+a.bf+"];\n"
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
ou:function(a,b){var u
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
ot:function(a,b){var u
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
ow:function(a,b){var u,t
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
ox:function(a,b){var u,t
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
ov:function(a,b){var u
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
oy:function(a,b){var u
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
return a[0].toUpperCase()+C.a.a5(a,1)},
kK:function(a,b,c,d,e){var u=new A.iu(a,c,e)
u.f=d
P.n7(d,0,P.w)
return u},
cO:function cO(a,b,c){this.a=a
this.b=b
this.c=c},
eQ:function eQ(a){this.a=a},
a_:function a_(a,b,c){this.a=a
this.b=b
this.c=c},
h0:function h0(a,b){var _=this
_.im=_.il=_.bg=_.aX=_.bf=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iA=_.iz=_.iy=_.c_=_.bZ=_.bY=_.bX=_.bW=_.bV=_.bU=_.bT=_.ix=_.iw=_.dc=_.iv=_.iu=_.da=_.d9=_.it=_.is=_.d8=_.d7=_.ir=_.iq=_.d6=_.ip=_.io=_.d5=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cP:function cP(a,b){this.a=a
this.b=b},
cW:function cW(a,b){this.a=a
this.b=b},
dl:function dl(a,b){this.a=a
this.b=b},
ds:function ds(a,b){this.a=a
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
_.bf=b3
_.aX=b4
_.bg=b5},
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
dF:function dF(){},
iz:function iz(a){this.a=a},
be:function be(a,b,c){this.a=a
this.c=b
this.d=c},
iw:function iw(a,b,c){this.a=a
this.c=b
this.d=c},
ix:function ix(a,b,c){this.a=a
this.c=b
this.d=c},
iy:function iy(a,b,c){this.a=a
this.c=b
this.d=c},
iu:function iu(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
V:function V(a,b,c){this.a=a
this.c=b
this.d=c},
iv:function iv(a,b,c){this.a=a
this.c=b
this.d=c},
F:function F(a,b,c){this.a=a
this.c=b
this.d=c},
cj:function cj(a,b,c){this.a=a
this.c=b
this.d=c},
iA:function iA(a,b,c){this.a=a
this.c=b
this.d=c},
cm:function cm(a,b,c){this.a=a
this.c=b
this.d=c},
ac:function ac(a,b,c){this.a=a
this.c=b
this.d=c},
bE:function bE(a,b,c){this.a=a
this.c=b
this.d=c},
bF:function bF(a,b,c){this.a=a
this.c=b
this.d=c}},F={
kW:function(a,b,c,d){var u=F.kI()
F.cD(u,b,c,d,a,1,0,0,1)
F.cD(u,b,c,d,a,0,1,0,3)
F.cD(u,b,c,d,a,0,0,1,2)
F.cD(u,b,c,d,a,-1,0,0,0)
F.cD(u,b,c,d,a,0,-1,0,0)
F.cD(u,b,c,d,a,0,0,-1,3)
u.an()
return u},
jQ:function(a){var u=a.a>0?1:0
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
j.d=i}m=F.jQ(i)
l=F.jQ(h)
k=F.l3(d,a0,new F.jP(j,F.jQ(g),F.jQ(f),l,m,c),b)
if(k!=null)a.b_(k)},
m6:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(e<3)return
u=F.kI()
t=b?-1:1
s=-6.283185307179586/e
r=H.b([],[F.bf])
q=u.a
p=new V.z(0,0,t)
p=p.v(0,Math.sqrt(p.E(p)))
r.push(q.fZ(new V.bc(a,-1,-1,-1),new V.ar(1,1,1,1),new V.T(0,0,c),new V.z(0,0,t),new V.a6(0.5,0.5),p))
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
f=F.dK(new V.bc(a,-1,-1,-1),null,new V.ar(i,g,h,1),new V.T(m*k,l*k,c),new V.z(0,0,t),new V.a6(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.n(0,f)
r.push(f)}u.d.fX(r)
return u},
m4:function(a,b,c){return F.oN(!0,a,1,new F.jZ(1,c),b)},
oN:function(a,b,c,d,e){var u
if(e<3)return
if(c<1)return
u=F.l3(c,e,new F.k0(d),null)
if(u==null)return
u.an()
u.bK()
if(b)u.b_(F.m6(3,!1,1,new F.k1(d),e))
u.b_(F.m6(1,!0,-1,new F.k2(d),e))
return u},
p7:function(a,b){var u,t,s={}
s.a=u
s.a=null
s.a=new F.kk()
t=F.kW(a,null,new F.kl(s,1),b)
t.bK()
return t},
mh:function(){return F.m5(15,30,0.5,1,new F.kn())},
p0:function(){return F.m5(12,120,0.3,1,new F.ka(3,2))},
m5:function(a,b,c,d,e){var u=F.l3(a,b,new F.k_(e,d,b,c),null)
if(u==null)return
u.an()
u.bK()
return u},
l3:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.kI()
t=H.b([],[F.bf])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.dK(g,g,new V.ar(p,0,0,1),g,g,new V.a6(r,1),g,g,0)
q.n(0,o)
c.$3(o,r,0)
t.push(o.bS(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.dK(g,g,new V.ar(j,i,h,1),g,g,new V.a6(r,m),g,g,0)
k.n(0,o)
c.$3(o,r,n)
t.push(o.bS(d))}}u.d.fY(a+1,b+1,t)
return u},
bZ:function(a,b,c){var u=new F.b2(),t=a.a
if(t==null)H.p(P.u("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.p(P.u("May not create a face with vertices attached to different shapes."))
u.bI(a)
u.bJ(b)
u.fK(c)
u.a.a.d.b.push(u)
u.a.a.Y()
return u},
n3:function(a,b){var u=new F.c4(),t=a.a
if(t==null)H.p(P.u("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.p(P.u("May not create a line with vertices attached to different shapes."))
u.bI(a)
u.bJ(b)
u.a.a.c.b.push(u)
u.a.a.Y()
return u},
kI:function(){var u=new F.hQ(),t=new F.iS(u)
t.b=!1
t.c=H.b([],[F.bf])
u.a=t
t=new F.hT(u)
t.b=H.b([],[F.cc])
u.b=t
t=new F.hS(u)
t.b=H.b([],[F.c4])
u.c=t
t=new F.hR(u)
t.b=H.b([],[F.b2])
u.d=t
u.e=null
return u},
dK:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.bf(),r=new F.j_()
r.b=H.b([],[F.cc])
s.b=r
r=new F.iW()
u=[F.c4]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.iT()
u=[F.b2]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.mv()
s.e=0
r=$.aZ()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aY().a)!==0?e:t
s.x=(u&$.aX().a)!==0?b:t
s.y=(u&$.bj().a)!==0?f:t
s.z=(u&$.bk().a)!==0?g:t
s.Q=(u&$.mw().a)!==0?c:t
s.ch=(u&$.bS().a)!==0?i:0
s.cx=(u&$.aW().a)!==0?a:t
return s},
jP:function jP(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jZ:function jZ(a,b){this.a=a
this.b=b},
k0:function k0(a){this.a=a},
k1:function k1(a){this.a=a},
k2:function k2(a){this.a=a},
kk:function kk(){},
kl:function kl(a,b){this.a=a
this.b=b},
kn:function kn(){},
ka:function ka(a,b){this.a=a
this.b=b},
k_:function k_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b2:function b2(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fq:function fq(){},
hY:function hY(){},
c4:function c4(){this.b=this.a=null},
fO:function fO(){},
it:function it(){},
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
j1:function j1(a){this.a=a},
j0:function j0(a){this.a=a},
iS:function iS(a){this.a=a
this.c=this.b=null},
iT:function iT(){this.d=this.c=this.b=null},
iU:function iU(a,b){this.a=a
this.b=b},
iV:function iV(a,b){this.a=a
this.b=b},
iW:function iW(){this.c=this.b=null},
iY:function iY(){},
iX:function iX(){},
iZ:function iZ(){},
ht:function ht(){},
j_:function j_(){this.b=null}},T={dy:function dy(){},id:function id(){},ie:function ie(){var _=this
_.y=_.d=_.c=_.b=_.a=null},ig:function ig(a){var _=this
_.a=a
_.e=_.d=_.b=null},ih:function ih(a,b,c,d,e,f,g){var _=this
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
H.kD.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gI:function(a){return H.cd(a)},
i:function(a){return"Instance of '"+H.e(H.ce(a))+"'"}}
J.fI.prototype={
i:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$iaG:1}
J.d4.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gI:function(a){return 0}}
J.d5.prototype={
gI:function(a){return 0},
i:function(a){return String(a)},
$in1:1}
J.hy.prototype={}
J.bG.prototype={}
J.b5.prototype={
i:function(a){var u=a[$.mj()]
if(u==null)return this.dZ(a)
return"JavaScript function for "+H.e(J.a3(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.b3.prototype={
ca:function(a,b){if(!!a.fixed$length)H.p(P.y("removeAt"))
if(b<0||b>=a.length)throw H.c(P.dm(b,null))
return a.splice(b,1)[0]},
L:function(a,b){var u
if(!!a.fixed$length)H.p(P.y("remove"))
for(u=0;u<a.length;++u)if(J.D(a[u],b)){a.splice(u,1)
return!0}return!1},
a9:function(a,b){var u,t
if(!!a.fixed$length)H.p(P.y("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.l)(b),++t)a.push(b[t])},
G:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.c(P.aK(a))}},
j:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.d(r,u)
r[u]=t}return r.join(b)},
hz:function(a){return this.j(a,"")},
hr:function(a,b,c){var u,t,s=a.length
for(u=b,t=0;t<s;++t){u=c.$2(u,a[t])
if(a.length!==s)throw H.c(P.aK(a))}return u},
hs:function(a,b,c){return this.hr(a,b,c,null)},
hq:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.c(P.aK(a))}throw H.c(H.fG())},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
dV:function(a,b,c){if(b<0||b>a.length)throw H.c(P.X(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.c(P.X(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.aH(a,0)])
return H.b(a.slice(b,c),[H.aH(a,0)])},
ghp:function(a){if(a.length>0)return a[0]
throw H.c(H.fG())},
gap:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.fG())},
cV:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.c(P.aK(a))}return!1},
aQ:function(a,b){if(!!a.immutable$list)H.p(P.y("sort"))
H.nx(a,b==null?J.ob():b)},
dU:function(a){return this.aQ(a,null)},
D:function(a,b){var u
for(u=0;u<a.length;++u)if(J.D(a[u],b))return!0
return!1},
i:function(a){return P.kA(a,"[","]")},
gS:function(a){return new J.aa(a,a.length)},
gI:function(a){return H.cd(a)},
gm:function(a){return a.length},
sm:function(a,b){var u="newLength"
if(!!a.fixed$length)H.p(P.y("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.kr(b,u,null))
if(b<0)throw H.c(P.X(b,0,null,u,null))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bP(a,b))
return a[b]},
l:function(a,b,c){if(!!a.immutable$list)H.p(P.y("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bP(a,b))
a[b]=c},
$iq:1,
$ij:1,
$in:1}
J.kC.prototype={}
J.aa.prototype={
gC:function(a){return this.d},
t:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.l(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.c3.prototype={
aL:function(a,b){var u
if(typeof b!=="number")throw H.c(H.ad(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbi(b)
if(this.gbi(a)===u)return 0
if(this.gbi(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbi:function(a){return a===0?1/a<0:a<0},
i3:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.y(""+a+".toInt()"))},
c2:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.y(""+a+".floor()"))},
ag:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.y(""+a+".round()"))},
dL:function(a,b){var u
if(b>20)throw H.c(P.X(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbi(a))return"-"+u
return u},
b3:function(a,b){var u,t,s,r
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
b6:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
e0:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cN(a,b)},
a3:function(a,b){return(a|0)===a?a/b|0:this.cN(a,b)},
cN:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.y("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
aJ:function(a,b){var u
if(a>0)u=this.cM(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
fO:function(a,b){if(b<0)throw H.c(H.ad(b))
return this.cM(a,b)},
cM:function(a,b){return b>31?0:a>>>b},
$iJ:1,
$ia9:1}
J.d3.prototype={$iw:1}
J.d2.prototype={}
J.b4.prototype={
U:function(a,b){if(b<0)throw H.c(H.bP(a,b))
if(b>=a.length)H.p(H.bP(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(b>=a.length)throw H.c(H.bP(a,b))
return a.charCodeAt(b)},
w:function(a,b){if(typeof b!=="string")throw H.c(P.kr(b,null,null))
return a+b},
aO:function(a,b,c,d){var u,t
c=P.aT(b,c,a.length)
if(typeof c!=="number"||Math.floor(c)!==c)H.p(H.ad(c))
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a4:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.X(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a2:function(a,b){return this.a4(a,b,0)},
p:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.p(H.ad(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.R()
if(b<0)throw H.c(P.dm(b,null))
if(b>c)throw H.c(P.dm(b,null))
if(c>a.length)throw H.c(P.dm(c,null))
return a.substring(b,c)},
a5:function(a,b){return this.p(a,b,null)},
i6:function(a){return a.toLowerCase()},
A:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.Q)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ac:function(a,b){var u=b-a.length
if(u<=0)return a
return this.A(" ",u)+a},
bh:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.X(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
di:function(a,b){return this.bh(a,b,0)},
h7:function(a,b,c){var u=a.length
if(c>u)throw H.c(P.X(c,0,u,null,null))
return H.mf(a,b,c)},
D:function(a,b){return this.h7(a,b,0)},
aL:function(a,b){var u
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
gm:function(a){return a.length},
$ih:1}
H.m.prototype={
gm:function(a){return this.a.length},
h:function(a,b){return C.a.U(this.a,b)},
$aq:function(){return[P.w]},
$ax:function(){return[P.w]},
$aj:function(){return[P.w]},
$an:function(){return[P.w]}}
H.q.prototype={}
H.d8.prototype={
gS:function(a){return new H.b6(this,this.gm(this))},
bp:function(a,b){return this.dY(0,b)}}
H.b6.prototype={
gC:function(a){return this.d},
t:function(){var u,t=this,s=t.a,r=J.ap(s),q=r.gm(s)
if(t.b!=q)throw H.c(P.aK(s))
u=t.c
if(typeof q!=="number")return H.v(q)
if(u>=q){t.d=null
return!1}t.d=r.J(s,u);++t.c
return!0}}
H.c6.prototype={
gS:function(a){return new H.fZ(J.aI(this.a),this.b)},
gm:function(a){return J.af(this.a)},
J:function(a,b){return this.b.$1(J.eM(this.a,b))},
$aj:function(a,b){return[b]}}
H.fj.prototype={$iq:1,
$aq:function(a,b){return[b]}}
H.fZ.prototype={
t:function(){var u=this,t=u.b
if(t.t()){u.a=u.c.$1(t.gC(t))
return!0}u.a=null
return!1},
gC:function(a){return this.a}}
H.h_.prototype={
gm:function(a){return J.af(this.a)},
J:function(a,b){return this.b.$1(J.eM(this.a,b))},
$aq:function(a,b){return[b]},
$ad8:function(a,b){return[b]},
$aj:function(a,b){return[b]}}
H.cq.prototype={
gS:function(a){return new H.j4(J.aI(this.a),this.b)}}
H.j4.prototype={
t:function(){var u,t
for(u=this.a,t=this.b;u.t();)if(t.$1(u.gC(u)))return!0
return!1},
gC:function(a){var u=this.a
return u.gC(u)}}
H.d_.prototype={}
H.iE.prototype={
l:function(a,b,c){throw H.c(P.y("Cannot modify an unmodifiable list"))}}
H.dG.prototype={}
H.f4.prototype={
i:function(a){return P.kH(this)},
l:function(a,b,c){return H.mR()},
$iQ:1}
H.f5.prototype={
gm:function(a){return this.a},
bQ:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.bQ(0,b))return
return this.cA(b)},
cA:function(a){return this.b[a]},
G:function(a,b){var u,t,s,r=this.c
for(u=r.length,t=0;t<u;++t){s=r[t]
b.$2(s,this.cA(s))}}}
H.ir.prototype={
ab:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.iD.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.ko.prototype={
$1:function(a){if(!!J.N(a).$ibr)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:8}
H.ek.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bW.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.cI(t==null?"unknown":t)+"'"},
gia:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.ia.prototype={}
H.i2.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cI(u)+"'"}}
H.bU.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bU))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gI:function(a){var u,t=this.c
if(t==null)u=H.cd(this.a)
else u=typeof t!=="object"?J.cM(t):H.cd(t)
return(u^H.cd(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.ce(u))+"'")}}
H.f_.prototype={
i:function(a){return this.a}}
H.hN.prototype={
i:function(a){return"RuntimeError: "+H.e(this.a)}}
H.H.prototype={
gm:function(a){return this.a},
ghy:function(a){return this.a===0},
gZ:function(a){return new H.fQ(this,[H.aH(this,0)])},
gi9:function(a){var u=this
return H.n9(u.gZ(u),new H.fK(u),H.aH(u,0),H.aH(u,1))},
bQ:function(a,b){var u=this.b
if(u==null)return!1
return this.eo(u,b)},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.ba(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.ba(r,b)
s=t==null?null:t.b
return s}else return q.hw(b)},
hw:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.cC(r,s.dj(a))
t=s.dk(u,a)
if(t<0)return
return u[t].b},
l:function(a,b,c){var u,t,s=this
if(typeof b==="string"){u=s.b
s.cr(u==null?s.b=s.bA():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cr(t==null?s.c=s.bA():t,b,c)}else s.hx(b,c)},
hx:function(a,b){var u,t,s,r=this,q=r.d
if(q==null)q=r.d=r.bA()
u=r.dj(a)
t=r.cC(q,u)
if(t==null)r.bG(q,u,[r.bB(a,b)])
else{s=r.dk(t,a)
if(s>=0)t[s].b=b
else t.push(r.bB(a,b))}},
G:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.c(P.aK(u))
t=t.c}},
cr:function(a,b,c){var u=this.ba(a,b)
if(u==null)this.bG(a,b,this.bB(b,c))
else u.b=c},
eA:function(){this.r=this.r+1&67108863},
bB:function(a,b){var u,t=this,s=new H.fP(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.eA()
return s},
dj:function(a){return J.cM(a)&0x3ffffff},
dk:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.D(a[t].a,b))return t
return-1},
i:function(a){return P.kH(this)},
ba:function(a,b){return a[b]},
cC:function(a,b){return a[b]},
bG:function(a,b,c){a[b]=c},
es:function(a,b){delete a[b]},
eo:function(a,b){return this.ba(a,b)!=null},
bA:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bG(t,u,t)
this.es(t,u)
return t}}
H.fK.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.aH(u,1),args:[H.aH(u,0)]}}}
H.fP.prototype={}
H.fQ.prototype={
gm:function(a){return this.a.a},
gS:function(a){var u=this.a,t=new H.fR(u,u.r)
t.c=u.e
return t}}
H.fR.prototype={
gC:function(a){return this.d},
t:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.aK(t))
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
H.fJ.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$inq:1}
H.c9.prototype={$ic9:1}
H.b9.prototype={$ib9:1}
H.de.prototype={
gm:function(a){return a.length},
$iA:1,
$aA:function(){}}
H.ca.prototype={
h:function(a,b){H.aF(b,a,a.length)
return a[b]},
l:function(a,b,c){H.aF(b,a,a.length)
a[b]=c},
$iq:1,
$aq:function(){return[P.J]},
$ax:function(){return[P.J]},
$ij:1,
$aj:function(){return[P.J]},
$in:1,
$an:function(){return[P.J]}}
H.df.prototype={
l:function(a,b,c){H.aF(b,a,a.length)
a[b]=c},
$iq:1,
$aq:function(){return[P.w]},
$ax:function(){return[P.w]},
$ij:1,
$aj:function(){return[P.w]},
$in:1,
$an:function(){return[P.w]}}
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
H.hq.prototype={
h:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.dg.prototype={
gm:function(a){return a.length},
h:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.cb.prototype={
gm:function(a){return a.length},
h:function(a,b){H.aF(b,a,a.length)
return a[b]},
$icb:1,
$ibD:1}
H.cu.prototype={}
H.cv.prototype={}
H.cw.prototype={}
H.cx.prototype={}
P.j6.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:16}
P.j5.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.j7.prototype={
$0:function(){this.a.$0()}}
P.j8.prototype={
$0:function(){this.a.$0()}}
P.eq.prototype={
ec:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bO(new P.jF(this,b),0),a)
else throw H.c(P.y("`setTimeout()` not found."))},
ed:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bO(new P.jE(this,a,Date.now(),b),0),a)
else throw H.c(P.y("Periodic timer."))},
$idA:1}
P.jF.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.jE.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.e0(u,q)}s.c=r
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
else{r=J.aI(u)
if(!!r.$ibI){u=q.d
if(u==null)u=q.d=[]
u.push(q.a)
q.a=r.a
continue}else{q.c=r
continue}}}}else{q.b=t
return!0}}return!1}}
P.jB.prototype={
gS:function(a){return new P.bI(this.a())}}
P.dM.prototype={}
P.dv.prototype={}
P.i5.prototype={}
P.dA.prototype={}
P.jO.prototype={}
P.jX.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dj():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u}}
P.jm.prototype={
i_:function(a){var u,t,s,r=null
try{if(C.f===$.ao){a.$0()
return}P.oA(r,r,this,a)}catch(s){u=H.ae(s)
t=H.kY(s)
P.lZ(r,r,this,u,t)}},
i0:function(a,b){var u,t,s,r=null
try{if(C.f===$.ao){a.$1(b)
return}P.oB(r,r,this,a,b)}catch(s){u=H.ae(s)
t=H.kY(s)
P.lZ(r,r,this,u,t)}},
i1:function(a,b){return this.i0(a,b,null)},
h3:function(a){return new P.jn(this,a)},
d_:function(a,b){return new P.jo(this,a,b)}}
P.jn.prototype={
$0:function(){return this.a.i_(this.b)}}
P.jo.prototype={
$1:function(a){return this.a.i1(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jj.prototype={
gS:function(a){var u=new P.e1(this,this.r)
u.c=this.e
return u},
gm:function(a){return this.a},
D:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.em(b)
return t}},
em:function(a){var u=this.d
if(u==null)return!1
return this.bx(this.cB(u,a),a)>=0},
n:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cs(u==null?s.b=P.kO():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cs(t==null?s.c=P.kO():t,b)}else return s.ef(0,b)},
ef:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.kO()
u=s.cu(b)
t=r[u]
if(t==null)r[u]=[s.bu(b)]
else{if(s.bx(t,b)>=0)return!1
t.push(s.bu(b))}return!0},
L:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fA(this.c,b)
else return this.fz(0,b)},
fz:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cB(r,b)
t=s.bx(u,b)
if(t<0)return!1
s.cP(u.splice(t,1)[0])
return!0},
cs:function(a,b){if(a[b]!=null)return!1
a[b]=this.bu(b)
return!0},
fA:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.cP(u)
delete a[b]
return!0},
ct:function(){this.r=1073741823&this.r+1},
bu:function(a){var u,t=this,s=new P.jk(a)
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
bx:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.D(a[t].a,b))return t
return-1}}
P.jk.prototype={}
P.e1.prototype={
gC:function(a){return this.d},
t:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.aK(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fF.prototype={}
P.fS.prototype={
$2:function(a,b){this.a.l(0,a,b)},
$S:3}
P.fT.prototype={$iq:1,$ij:1,$in:1}
P.x.prototype={
gS:function(a){return new H.b6(a,this.gm(a))},
J:function(a,b){return this.h(a,b)},
i5:function(a,b){var u,t,s=this,r=H.b([],[H.oT(s,a,"x",0)])
C.b.sm(r,s.gm(a))
u=0
while(!0){t=s.gm(a)
if(typeof t!=="number")return H.v(t)
if(!(u<t))break
t=s.h(a,u)
if(u>=r.length)return H.d(r,u)
r[u]=t;++u}return r},
i4:function(a){return this.i5(a,!0)},
hn:function(a,b,c,d){var u
P.aT(b,c,this.gm(a))
for(u=b;u<c;++u)this.l(a,u,d)},
i:function(a){return P.kA(a,"[","]")}}
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
G:function(a,b){var u,t
for(u=J.aI(this.gZ(a));u.t();){t=u.gC(u)
b.$2(t,this.h(a,t))}},
gm:function(a){return J.af(this.gZ(a))},
i:function(a){return P.kH(a)},
$iQ:1}
P.jG.prototype={
l:function(a,b,c){throw H.c(P.y("Cannot modify unmodifiable map"))}}
P.fY.prototype={
h:function(a,b){return J.bT(this.a,b)},
l:function(a,b,c){J.kp(this.a,b,c)},
G:function(a,b){J.l7(this.a,b)},
gm:function(a){return J.af(this.a)},
i:function(a){return J.a3(this.a)},
$iQ:1}
P.dH.prototype={}
P.jq.prototype={
a9:function(a,b){var u
for(u=J.aI(b);u.t();)this.n(0,u.gC(u))},
i:function(a){return P.kA(this,"{","}")},
J:function(a,b){var u,t,s
P.lt(b,"index")
for(u=P.nS(this,this.r),t=0;u.t();){s=u.d
if(b===t)return s;++t}throw H.c(P.L(b,this,"index",null,t))},
$iq:1,
$ij:1}
P.e2.prototype={}
P.ew.prototype={}
P.eW.prototype={
hD:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.aT(a0,a1,b.length)
u=$.my()
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
if(l<=a1){k=H.k5(C.a.F(b,n))
j=H.k5(C.a.F(b,n+1))
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
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.R("")
g=r.a+=C.a.p(b,s,t)
r.a=g+H.bA(m)
s=n
continue}}throw H.c(P.S("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.a.p(b,s,a1)
f=g.length
if(q>=0)P.lb(b,p,a1,q,o,f)
else{e=C.c.b6(f-1,4)+1
if(e===1)throw H.c(P.S(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.a.aO(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.lb(b,p,a1,q,o,d)
else{e=C.c.b6(d,4)
if(e===1)throw H.c(P.S(c,b,a1))
if(e>1)b=C.a.aO(b,a1,a1,e===2?"==":"=")}return b}}
P.eX.prototype={}
P.f1.prototype={}
P.f6.prototype={}
P.fl.prototype={}
P.fD.prototype={
i:function(a){return this.a}}
P.fC.prototype={
ep:function(a,b,c){var u,t,s,r,q,p,o=null
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
if(r>b)q.a+=C.a.p(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.mJ(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.iM.prototype={
ghm:function(){return C.R}}
P.iO.prototype={
bR:function(a){var u,t,s,r=P.aT(0,null,a.length)
if(typeof r!=="number")return r.M()
u=r-0
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.jM(t)
if(s.ev(a,0,r)!==r)s.cR(J.mF(a,r-1),0)
return new Uint8Array(t.subarray(0,H.o8(0,s.b,t.length)))}}
P.jM.prototype={
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
ev:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.a.U(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.a.F(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cR(r,C.a.F(a,p)))s=p}else if(r<=2047){q=n.b
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
P.iN.prototype={
bR:function(a){var u,t,s,r,q,p,o,n,m=P.nD(!1,a,0,null)
if(m!=null)return m
u=P.aT(0,null,J.af(a))
t=P.m0(a,0,u)
if(t>0){s=P.ch(a,0,t)
if(t===u)return s
r=new P.R(s)
q=t
p=!1}else{q=0
r=null
p=!0}if(r==null)r=new P.R("")
o=new P.jL(!1,r)
o.c=p
o.h8(a,q,u)
if(o.e>0){H.p(P.S("Unfinished UTF-8 octet sequence",a,u))
r.a+=H.bA(65533)
o.f=o.e=o.d=0}n=r.a
return n.charCodeAt(0)==0?n:n}}
P.jL.prototype={
h8:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=this,k="Bad UTF-8 encoding 0x",j=l.d,i=l.e,h=l.f
l.f=l.e=l.d=0
$label0$0:for(u=J.ap(a),t=l.b,s=b;!0;s=n){$label1$1:if(i>0){do{if(s===c)break $label0$0
r=u.h(a,s)
if(typeof r!=="number")return r.a6()
if((r&192)!==128){q=P.S(k+C.c.b3(r,16),a,s)
throw H.c(q)}else{j=(j<<6|r&63)>>>0;--i;++s}}while(i>0)
q=h-1
if(q<0||q>=4)return H.d(C.x,q)
if(j<=C.x[q]){q=P.S("Overlong encoding of 0x"+C.c.b3(j,16),a,s-h-1)
throw H.c(q)}if(j>1114111){q=P.S("Character outside valid Unicode range: 0x"+C.c.b3(j,16),a,s-h-1)
throw H.c(q)}if(!l.c||j!==65279)t.a+=H.bA(j)
l.c=!1}if(typeof c!=="number")return H.v(c)
q=s<c
for(;q;){p=P.m0(a,s,c)
if(p>0){l.c=!1
o=s+p
t.a+=P.ch(a,s,o)
if(o===c)break}else o=s
n=o+1
r=u.h(a,o)
if(typeof r!=="number")return r.R()
if(r<0){m=P.S("Negative UTF-8 code unit: -0x"+C.c.b3(-r,16),a,n-1)
throw H.c(m)}else{if((r&224)===192){j=r&31
i=1
h=1
continue $label0$0}if((r&240)===224){j=r&15
i=2
h=2
continue $label0$0}if((r&248)===240&&r<245){j=r&7
i=3
h=3
continue $label0$0}m=P.S(k+C.c.b3(r,16),a,n-1)
throw H.c(m)}}break $label0$0}if(i>0){l.d=j
l.e=i
l.f=h}}}
P.aG.prototype={}
P.ab.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.ab&&this.a===b.a&&!0},
aL:function(a,b){return C.c.aL(this.a,b.a)},
gI:function(a){var u=this.a
return(u^C.c.aJ(u,30))&1073741823},
i:function(a){var u=this,t=P.mS(H.nm(u)),s=P.cV(H.nk(u)),r=P.cV(H.ng(u)),q=P.cV(H.nh(u)),p=P.cV(H.nj(u)),o=P.cV(H.nl(u)),n=P.mT(H.ni(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.J.prototype={}
P.b1.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.b1&&this.a===b.a},
gI:function(a){return C.c.gI(this.a)},
aL:function(a,b){return C.c.aL(this.a,b.a)},
i:function(a){var u,t,s,r=new P.fi(),q=this.a
if(q<0)return"-"+new P.b1(0-q).i(0)
u=r.$1(C.c.a3(q,6e7)%60)
t=r.$1(C.c.a3(q,1e6)%60)
s=new P.fh().$1(q%1e6)
return""+C.c.a3(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
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
P.dj.prototype={
i:function(a){return"Throw of null."}}
P.ai.prototype={
gbw:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbv:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbw()+o+u
if(!q.a)return t
s=q.gbv()
r=P.kz(q.b)
return t+s+": "+r}}
P.bB.prototype={
gbw:function(){return"RangeError"},
gbv:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.fE.prototype={
gbw:function(){return"RangeError"},
gbv:function(){var u,t=this.b
if(typeof t!=="number")return t.R()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gm:function(a){return this.f}}
P.iF.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iB.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cg.prototype={
i:function(a){return"Bad state: "+this.a}}
P.f3.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.kz(u)+"."}}
P.hx.prototype={
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
P.fw.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.a.p(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.a.F(f,q)
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
k=""}j=C.a.p(f,m,n)
return h+l+j+k+"\n"+C.a.A(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.e(g)+")"):h}}
P.fy.prototype={}
P.w.prototype={}
P.j.prototype={
bp:function(a,b){return new H.cq(this,b,[H.kX(this,"j",0)])},
gm:function(a){var u,t=this.gS(this)
for(u=0;t.t();)++u
return u},
gaE:function(a){var u,t=this.gS(this)
if(!t.t())throw H.c(H.fG())
u=t.gC(t)
if(t.t())throw H.c(H.mZ())
return u},
J:function(a,b){var u,t,s
P.lt(b,"index")
for(u=this.gS(this),t=0;u.t();){s=u.gC(u)
if(b===t)return s;++t}throw H.c(P.L(b,this,"index",null,t))},
i:function(a){return P.mY(this,"(",")")}}
P.fH.prototype={}
P.n.prototype={$iq:1,$ij:1}
P.Q.prototype={}
P.ba.prototype={
gI:function(a){return P.a1.prototype.gI.call(this,this)},
i:function(a){return"null"}}
P.a9.prototype={}
P.a1.prototype={constructor:P.a1,$ia1:1,
q:function(a,b){return this===b},
gI:function(a){return H.cd(this)},
i:function(a){return"Instance of '"+H.e(H.ce(this))+"'"},
toString:function(){return this.i(this)}}
P.h.prototype={}
P.R.prototype={
gm:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
P.iK.prototype={
$2:function(a,b){var u,t,s,r=J.cG(b).di(b,"=")
if(r===-1){if(b!=="")J.kp(a,P.kS(b,0,b.length,this.a,!0),"")}else if(r!==0){u=C.a.p(b,0,r)
t=C.a.a5(b,r+1)
s=this.a
J.kp(a,P.kS(u,0,u.length,s,!0),P.kS(t,0,t.length,s,!0))}return a}}
P.iH.prototype={
$2:function(a,b){throw H.c(P.S("Illegal IPv4 address, "+a,this.a,b))}}
P.iI.prototype={
$2:function(a,b){throw H.c(P.S("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.iJ.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.eK(C.a.p(this.b,a,b),null,16)
if(typeof u!=="number")return u.R()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u}}
P.bJ.prototype={
gdN:function(){return this.b},
gc3:function(a){var u=this.c
if(u==null)return""
if(C.a.a2(u,"["))return C.a.p(u,1,u.length-1)
return u},
gbk:function(a){var u=this.d
if(u==null)return P.lS(this.a)
return u},
gc8:function(a){var u=this.f
return u==null?"":u},
gdd:function(){var u=this.r
return u==null?"":u},
dG:function(a,b){var u,t,s,r=this,q=r.a,p=q==="file",o=r.b,n=r.d,m=r.c
if(!(m!=null))m=o.length!==0||n!=null||p?"":null
u=r.e
if(!p)t=m!=null&&u.length!==0
else t=!0
if(t&&!C.a.a2(u,"/"))u="/"+u
s=P.kQ(null,0,0,b)
return new P.bJ(q,o,m,n,u,s,r.r)},
gc9:function(){var u,t=this.Q
if(t==null){t=this.f
u=P.h
u=this.Q=new P.dH(P.lF(t==null?"":t),[u,u])
t=u}return t},
gde:function(){return this.c!=null},
gdh:function(){return this.f!=null},
gdf:function(){return this.r!=null},
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
if(!!J.N(b).$ikL)if(s.a==b.gbq())if(s.c!=null===b.gde())if(s.b==b.gdN())if(s.gc3(s)==b.gc3(b))if(s.gbk(s)==b.gbk(b))if(s.e===b.gdC(b)){u=s.f
t=u==null
if(!t===b.gdh()){if(t)u=""
if(u===b.gc8(b)){u=s.r
t=u==null
if(!t===b.gdf()){if(t)u=""
u=u===b.gdd()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gI:function(a){var u=this.z
return u==null?this.z=C.a.gI(this.i(0)):u},
$ikL:1,
gbq:function(){return this.a},
gdC:function(a){return this.e}}
P.jH.prototype={
$1:function(a){throw H.c(P.S("Invalid port",this.a,this.b+1))}}
P.jI.prototype={
$1:function(a){return P.ex(C.a0,a,C.e,!1)}}
P.jK.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.e(P.ex(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.e(P.ex(C.h,b,C.e,!0))}}}
P.jJ.prototype={
$2:function(a,b){var u,t
if(b==null||typeof b==="string")this.a.$2(a,b)
else for(u=J.aI(b),t=this.a;u.t();)t.$2(a,u.gC(u))}}
P.iG.prototype={
gdM:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.d(o,0)
u=q.a
o=o[0]+1
t=C.a.bh(u,"?",o)
s=u.length
if(t>=0){r=P.cC(u,t+1,s,C.l,!1)
s=t}else r=p
return q.c=new P.jc("data",p,p,p,P.cC(u,o,s,C.B,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.d(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.jS.prototype={
$1:function(a){return new Uint8Array(96)}}
P.jR.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.d(u,a)
u=u[a]
J.mG(u,0,96,b)
return u},
$S:17}
P.jT.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.a.F(b,s)^96
if(r>=t)return H.d(a,r)
a[r]=c}}}
P.jU.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.a.F(b,0),t=C.a.F(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.d(a,r)
a[r]=c}}}
P.jt.prototype={
gde:function(){return this.c>0},
gdg:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.w()
t=this.e
if(typeof t!=="number")return H.v(t)
t=u+1<t
u=t}else u=!1
return u},
gdh:function(){var u=this.f
if(typeof u!=="number")return u.R()
return u<this.r},
gdf:function(){return this.r<this.a.length},
gcD:function(){return this.b===4&&C.a.a2(this.a,"http")},
gcE:function(){return this.b===5&&C.a.a2(this.a,"https")},
gbq:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gcD())q=t.x="http"
else if(t.gcE()){t.x="https"
q="https"}else if(q===4&&C.a.a2(t.a,s)){t.x=s
q=s}else if(q===7&&C.a.a2(t.a,r)){t.x=r
q=r}else{q=C.a.p(t.a,0,q)
t.x=q}return q},
gdN:function(){var u=this.c,t=this.b+3
return u>t?C.a.p(this.a,t,u-1):""},
gc3:function(a){var u=this.c
return u>0?C.a.p(this.a,u,this.d):""},
gbk:function(a){var u,t=this
if(t.gdg()){u=t.d
if(typeof u!=="number")return u.w()
return P.eK(C.a.p(t.a,u+1,t.e),null,null)}if(t.gcD())return 80
if(t.gcE())return 443
return 0},
gdC:function(a){return C.a.p(this.a,this.e,this.f)},
gc8:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.R()
return u<t?C.a.p(this.a,u+1,t):""},
gdd:function(){var u=this.r,t=this.a
return u<t.length?C.a.a5(t,u+1):""},
gc9:function(){var u=this,t=u.f
if(typeof t!=="number")return t.R()
if(t>=u.r)return C.a1
t=P.h
return new P.dH(P.lF(u.gc8(u)),[t,t])},
dG:function(a,b){var u,t,s,r,q,p=this,o=null,n=p.gbq(),m=n==="file",l=p.c,k=l>0?C.a.p(p.a,p.b+3,l):"",j=p.gdg()?p.gbk(p):o
l=p.c
if(l>0)u=C.a.p(p.a,l,p.d)
else u=k.length!==0||j!=null||m?"":o
l=p.a
t=C.a.p(l,p.e,p.f)
if(!m)s=u!=null&&t.length!==0
else s=!0
if(s&&!C.a.a2(t,"/"))t="/"+t
r=P.kQ(o,0,0,b)
s=p.r
q=s<l.length?C.a.a5(l,s+1):o
return new P.bJ(n,k,u,j,t,r,q)},
gI:function(a){var u=this.y
return u==null?this.y=C.a.gI(this.a):u},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.N(b).$ikL&&this.a===b.i(0)},
i:function(a){return this.a},
$ikL:1}
P.jc.prototype={}
W.o.prototype={}
W.eN.prototype={
gm:function(a){return a.length}}
W.eO.prototype={
i:function(a){return String(a)}}
W.eP.prototype={
i:function(a){return String(a)}}
W.bm.prototype={$ibm:1}
W.bn.prototype={$ibn:1}
W.bp.prototype={
cf:function(a,b,c){if(c!=null)return a.getContext(b,P.oK(c))
return a.getContext(b)},
dQ:function(a,b){return this.cf(a,b,null)},
$ibp:1}
W.b_.prototype={
gm:function(a){return a.length}}
W.f7.prototype={
gm:function(a){return a.length}}
W.G.prototype={$iG:1}
W.bX.prototype={
gm:function(a){return a.length}}
W.f8.prototype={}
W.ag.prototype={}
W.as.prototype={}
W.f9.prototype={
gm:function(a){return a.length}}
W.fa.prototype={
gm:function(a){return a.length}}
W.fd.prototype={
gm:function(a){return a.length}}
W.aj.prototype={$iaj:1}
W.fe.prototype={
i:function(a){return String(a)}}
W.cX.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[[P.a7,P.a9]]},
$iA:1,
$aA:function(){return[[P.a7,P.a9]]},
$ax:function(){return[[P.a7,P.a9]]},
$ij:1,
$aj:function(){return[[P.a7,P.a9]]},
$in:1,
$an:function(){return[[P.a7,P.a9]]}}
W.cY.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gaD(a))+" x "+H.e(this.gax(a))},
q:function(a,b){var u
if(b==null)return!1
u=J.N(b)
return!!u.$ia7&&a.left===u.gbj(b)&&a.top===u.gbm(b)&&this.gaD(a)===u.gaD(b)&&this.gax(a)===u.gax(b)},
gI:function(a){return W.lQ(C.d.gI(a.left),C.d.gI(a.top),C.d.gI(this.gaD(a)),C.d.gI(this.gax(a)))},
gd0:function(a){return a.bottom},
gax:function(a){return a.height},
gbj:function(a){return a.left},
gcd:function(a){return a.right},
gbm:function(a){return a.top},
gaD:function(a){return a.width},
$ia7:1,
$aa7:function(){return[P.a9]}}
W.ff.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[P.h]},
$iA:1,
$aA:function(){return[P.h]},
$ax:function(){return[P.h]},
$ij:1,
$aj:function(){return[P.h]},
$in:1,
$an:function(){return[P.h]}}
W.fg.prototype={
gm:function(a){return a.length}}
W.ja.prototype={
gm:function(a){return this.b.length},
h:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
l:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
this.a.replaceChild(c,u[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gS:function(a){var u=this.i4(this)
return new J.aa(u,u.length)},
$aq:function(){return[W.O]},
$ax:function(){return[W.O]},
$aj:function(){return[W.O]},
$an:function(){return[W.O]}}
W.O.prototype={
gh2:function(a){return new W.jd(a)},
gbP:function(a){return new W.ja(a,a.children)},
gd1:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.R()
if(s<0)s=-s*0
if(typeof r!=="number")return r.R()
if(r<0)r=-r*0
return new P.a7(u,t,s,r,[P.a9])},
i:function(a){return a.localName},
aa:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.li
if(u==null){u=H.b([],[W.aR])
t=new W.di(u)
u.push(W.lP(null))
u.push(W.lR())
$.li=t
d=t}else d=u
u=$.lh
if(u==null){u=new W.ey(d)
$.lh=u
c=u}else{u.a=d
c=u}}if($.aL==null){u=document
t=u.implementation.createHTMLDocument("")
$.aL=t
$.ky=t.createRange()
s=$.aL.createElement("base")
s.href=u.baseURI
$.aL.head.appendChild(s)}u=$.aL
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.aL
if(!!this.$ibn)r=u.body
else{r=u.createElement(a.tagName)
$.aL.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.b.D(C.Z,a.tagName)){$.ky.selectNodeContents(r)
q=$.ky.createContextualFragment(b)}else{r.innerHTML=b
q=$.aL.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.aL.body
if(r==null?u!=null:r!==u)J.l9(r)
c.cg(q)
document.adoptNode(q)
return q},
hb:function(a,b,c){return this.aa(a,b,c,null)},
dS:function(a,b){a.textContent=null
a.appendChild(this.aa(a,b,null,null))},
$iO:1,
gdI:function(a){return a.tagName}}
W.fk.prototype={
$1:function(a){return!!J.N(a).$iO}}
W.i.prototype={$ii:1}
W.f.prototype={
fW:function(a,b,c,d){if(c!=null)this.eg(a,b,c,!1)},
eg:function(a,b,c,d){return a.addEventListener(b,H.bO(c,1),!1)}}
W.ak.prototype={$iak:1}
W.c_.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.ak]},
$iA:1,
$aA:function(){return[W.ak]},
$ax:function(){return[W.ak]},
$ij:1,
$aj:function(){return[W.ak]},
$in:1,
$an:function(){return[W.ak]},
$ic_:1}
W.fr.prototype={
gm:function(a){return a.length}}
W.fv.prototype={
gm:function(a){return a.length}}
W.at.prototype={$iat:1}
W.fB.prototype={
gm:function(a){return a.length}}
W.c1.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.B]},
$iA:1,
$aA:function(){return[W.B]},
$ax:function(){return[W.B]},
$ij:1,
$aj:function(){return[W.B]},
$in:1,
$an:function(){return[W.B]}}
W.aN.prototype={$iaN:1,
gd3:function(a){return a.data}}
W.c2.prototype={$ic2:1}
W.bw.prototype={$ibw:1}
W.fU.prototype={
i:function(a){return String(a)}}
W.hf.prototype={
gm:function(a){return a.length}}
W.c8.prototype={$ic8:1}
W.hg.prototype={
h:function(a,b){return P.aV(a.get(b))},
G:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aV(u.value[1]))}},
gZ:function(a){var u=H.b([],[P.h])
this.G(a,new W.hh(u))
return u},
gm:function(a){return a.size},
l:function(a,b,c){throw H.c(P.y("Not supported"))},
$aa0:function(){return[P.h,null]},
$iQ:1,
$aQ:function(){return[P.h,null]}}
W.hh.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hi.prototype={
h:function(a,b){return P.aV(a.get(b))},
G:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aV(u.value[1]))}},
gZ:function(a){var u=H.b([],[P.h])
this.G(a,new W.hj(u))
return u},
gm:function(a){return a.size},
l:function(a,b,c){throw H.c(P.y("Not supported"))},
$aa0:function(){return[P.h,null]},
$iQ:1,
$aQ:function(){return[P.h,null]}}
W.hj.prototype={
$2:function(a,b){return this.a.push(a)}}
W.av.prototype={$iav:1}
W.hk.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.av]},
$iA:1,
$aA:function(){return[W.av]},
$ax:function(){return[W.av]},
$ij:1,
$aj:function(){return[W.av]},
$in:1,
$an:function(){return[W.av]}}
W.aw.prototype={$iaw:1}
W.a2.prototype={
gaE:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.lw("No elements"))
if(t>1)throw H.c(P.lw("More than one element"))
return u.firstChild},
a9:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
l:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.d(t,b)
u.replaceChild(c,t[b])},
gS:function(a){var u=this.a.childNodes
return new W.d0(u,u.length)},
gm:function(a){return this.a.childNodes.length},
h:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$aq:function(){return[W.B]},
$ax:function(){return[W.B]},
$aj:function(){return[W.B]},
$an:function(){return[W.B]}}
W.B.prototype={
hU:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
hY:function(a,b){var u,t
try{u=a.parentNode
J.mD(u,b,a)}catch(t){H.ae(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.dX(a):u},
fC:function(a,b,c){return a.replaceChild(b,c)},
$iB:1}
W.dh.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.B]},
$iA:1,
$aA:function(){return[W.B]},
$ax:function(){return[W.B]},
$ij:1,
$aj:function(){return[W.B]},
$in:1,
$an:function(){return[W.B]}}
W.ax.prototype={$iax:1,
gm:function(a){return a.length}}
W.hA.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.ax]},
$iA:1,
$aA:function(){return[W.ax]},
$ax:function(){return[W.ax]},
$ij:1,
$aj:function(){return[W.ax]},
$in:1,
$an:function(){return[W.ax]}}
W.hL.prototype={
h:function(a,b){return P.aV(a.get(b))},
G:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aV(u.value[1]))}},
gZ:function(a){var u=H.b([],[P.h])
this.G(a,new W.hM(u))
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
W.az.prototype={$iaz:1}
W.hZ.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.az]},
$iA:1,
$aA:function(){return[W.az]},
$ax:function(){return[W.az]},
$ij:1,
$aj:function(){return[W.az]},
$in:1,
$an:function(){return[W.az]}}
W.aA.prototype={$iaA:1}
W.i_.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aA]},
$iA:1,
$aA:function(){return[W.aA]},
$ax:function(){return[W.aA]},
$ij:1,
$aj:function(){return[W.aA]},
$in:1,
$an:function(){return[W.aA]}}
W.aB.prototype={$iaB:1,
gm:function(a){return a.length}}
W.i3.prototype={
h:function(a,b){return a.getItem(b)},
l:function(a,b,c){a.setItem(b,c)},
G:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gZ:function(a){var u=H.b([],[P.h])
this.G(a,new W.i4(u))
return u},
gm:function(a){return a.length},
$aa0:function(){return[P.h,P.h]},
$iQ:1,
$aQ:function(){return[P.h,P.h]}}
W.i4.prototype={
$2:function(a,b){return this.a.push(a)}}
W.am.prototype={$iam:1}
W.dw.prototype={
aa:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.br(a,b,c,d)
u=W.mU("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.a2(t).a9(0,new W.a2(u))
return t}}
W.i7.prototype={
aa:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.br(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.E.aa(u.createElement("table"),b,c,d)
u.toString
u=new W.a2(u)
s=u.gaE(u)
s.toString
u=new W.a2(s)
r=u.gaE(u)
t.toString
r.toString
new W.a2(t).a9(0,new W.a2(r))
return t}}
W.i8.prototype={
aa:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.br(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.E.aa(u.createElement("table"),b,c,d)
u.toString
u=new W.a2(u)
s=u.gaE(u)
t.toString
s.toString
new W.a2(t).a9(0,new W.a2(s))
return t}}
W.ci.prototype={$ici:1}
W.aC.prototype={$iaC:1}
W.an.prototype={$ian:1}
W.ib.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.an]},
$iA:1,
$aA:function(){return[W.an]},
$ax:function(){return[W.an]},
$ij:1,
$aj:function(){return[W.an]},
$in:1,
$an:function(){return[W.an]}}
W.ic.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aC]},
$iA:1,
$aA:function(){return[W.aC]},
$ax:function(){return[W.aC]},
$ij:1,
$aj:function(){return[W.aC]},
$in:1,
$an:function(){return[W.aC]}}
W.ij.prototype={
gm:function(a){return a.length}}
W.aD.prototype={$iaD:1}
W.bC.prototype={$ibC:1}
W.io.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aD]},
$iA:1,
$aA:function(){return[W.aD]},
$ax:function(){return[W.aD]},
$ij:1,
$aj:function(){return[W.aD]},
$in:1,
$an:function(){return[W.aD]}}
W.ip.prototype={
gm:function(a){return a.length}}
W.bd.prototype={}
W.iL.prototype={
i:function(a){return String(a)}}
W.j2.prototype={
gm:function(a){return a.length}}
W.bh.prototype={
ghe:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.y("deltaY is not supported"))},
ghd:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.y("deltaX is not supported"))},
$ibh:1}
W.cr.prototype={
fD:function(a,b){return a.requestAnimationFrame(H.bO(b,1))},
eu:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.jb.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.G]},
$iA:1,
$aA:function(){return[W.G]},
$ax:function(){return[W.G]},
$ij:1,
$aj:function(){return[W.G]},
$in:1,
$an:function(){return[W.G]}}
W.dP.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
q:function(a,b){var u
if(b==null)return!1
u=J.N(b)
return!!u.$ia7&&a.left===u.gbj(b)&&a.top===u.gbm(b)&&a.width===u.gaD(b)&&a.height===u.gax(b)},
gI:function(a){return W.lQ(C.d.gI(a.left),C.d.gI(a.top),C.d.gI(a.width),C.d.gI(a.height))},
gax:function(a){return a.height},
gaD:function(a){return a.width}}
W.jg.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.at]},
$iA:1,
$aA:function(){return[W.at]},
$ax:function(){return[W.at]},
$ij:1,
$aj:function(){return[W.at]},
$in:1,
$an:function(){return[W.at]}}
W.e7.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.B]},
$iA:1,
$aA:function(){return[W.B]},
$ax:function(){return[W.B]},
$ij:1,
$aj:function(){return[W.B]},
$in:1,
$an:function(){return[W.B]}}
W.ju.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aB]},
$iA:1,
$aA:function(){return[W.aB]},
$ax:function(){return[W.aB]},
$ij:1,
$aj:function(){return[W.aB]},
$in:1,
$an:function(){return[W.aB]}}
W.jz.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.am]},
$iA:1,
$aA:function(){return[W.am]},
$ax:function(){return[W.am]},
$ij:1,
$aj:function(){return[W.am]},
$in:1,
$an:function(){return[W.am]}}
W.j9.prototype={
G:function(a,b){var u,t,s,r,q
for(u=this.gZ(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.l)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gZ:function(a){var u,t,s,r=this.a.attributes,q=H.b([],[P.h])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.d(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q},
$aa0:function(){return[P.h,P.h]},
$aQ:function(){return[P.h,P.h]}}
W.jd.prototype={
h:function(a,b){return this.a.getAttribute(b)},
l:function(a,b,c){this.a.setAttribute(b,c)},
gm:function(a){return this.gZ(this).length}}
W.je.prototype={}
W.jf.prototype={
$1:function(a){return this.a.$1(a)}}
W.cs.prototype={
e7:function(a){var u
if($.ct.ghy($.ct)){for(u=0;u<262;++u)$.ct.l(0,C.Y[u],W.oV())
for(u=0;u<12;++u)$.ct.l(0,C.p[u],W.oW())}},
aK:function(a){return $.mz().D(0,W.bY(a))},
am:function(a,b,c){var u=$.ct.h(0,H.e(W.bY(a))+"::"+b)
if(u==null)u=$.ct.h(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$iaR:1}
W.K.prototype={
gS:function(a){return new W.d0(a,this.gm(a))}}
W.di.prototype={
aK:function(a){return C.b.cV(this.a,new W.hs(a))},
am:function(a,b,c){return C.b.cV(this.a,new W.hr(a,b,c))},
$iaR:1}
W.hs.prototype={
$1:function(a){return a.aK(this.a)}}
W.hr.prototype={
$1:function(a){return a.am(this.a,this.b,this.c)}}
W.ef.prototype={
e9:function(a,b,c,d){var u,t,s
this.a.a9(0,c)
u=b.bp(0,new W.jr())
t=b.bp(0,new W.js())
this.b.a9(0,u)
s=this.c
s.a9(0,C.y)
s.a9(0,t)},
aK:function(a){return this.a.D(0,W.bY(a))},
am:function(a,b,c){var u=this,t=W.bY(a),s=u.c
if(s.D(0,H.e(t)+"::"+b))return u.d.h_(c)
else if(s.D(0,"*::"+b))return u.d.h_(c)
else{s=u.b
if(s.D(0,H.e(t)+"::"+b))return!0
else if(s.D(0,"*::"+b))return!0
else if(s.D(0,H.e(t)+"::*"))return!0
else if(s.D(0,"*::*"))return!0}return!1},
$iaR:1}
W.jr.prototype={
$1:function(a){return!C.b.D(C.p,a)}}
W.js.prototype={
$1:function(a){return C.b.D(C.p,a)}}
W.jC.prototype={
am:function(a,b,c){if(this.e_(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.D(0,b)
return!1}}
W.jD.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)}}
W.jA.prototype={
aK:function(a){var u=J.N(a)
if(!!u.$icf)return!1
u=!!u.$ik
if(u&&W.bY(a)==="foreignObject")return!1
if(u)return!0
return!1},
am:function(a,b,c){if(b==="is"||C.a.a2(b,"on"))return!1
return this.aK(a)},
$iaR:1}
W.d0.prototype={
t:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.bT(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gC:function(a){return this.d}}
W.aR.prototype={}
W.jp.prototype={}
W.ey.prototype={
cg:function(a){new W.jN(this).$2(a,null)},
aT:function(a,b){if(b==null)J.l9(a)
else b.removeChild(a)},
fI:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.mH(a)
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
try{t=J.a3(a)}catch(r){H.ae(r)}try{s=W.bY(a)
this.fH(a,b,p,t,s,o,n)}catch(r){if(H.ae(r) instanceof P.ai)throw r
else{this.aT(a,b)
window
q="Removing corrupted element "+H.e(t)
if(typeof console!="undefined")window.console.warn(q)}}},
fH:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=this
if(c){p.aT(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!p.a.aK(a)){p.aT(a,b)
window
u="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!p.a.am(a,"is",g)){p.aT(a,b)
window
u="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gZ(f)
t=H.b(u.slice(0),[H.aH(u,0)])
for(s=f.gZ(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.d(t,s)
r=t[s]
if(!p.a.am(a,J.mK(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.e(e)+" "+r+'="'+H.e(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.N(a).$ici)p.cg(a.content)}}
W.jN.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.fI(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aT(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ae(s)
r=u
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=t}}}
W.dO.prototype={}
W.dQ.prototype={}
W.dR.prototype={}
W.dS.prototype={}
W.dT.prototype={}
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
P.jv.prototype={
c0:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
t.push(a)
this.b.push(null)
return s},
bo:function(a){var u,t,s,r,q,p=this,o={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.N(a)
if(!!u.$iab)return new Date(a.a)
if(!!u.$inq)throw H.c(P.iC("structured clone of RegExp"))
if(!!u.$iak)return a
if(!!u.$ibm)return a
if(!!u.$ic_)return a
if(!!u.$iaN)return a
if(!!u.$ic9||!!u.$ib9||!!u.$ic8)return a
if(!!u.$iQ){t=p.c0(a)
s=p.b
r=s.length
if(t>=r)return H.d(s,t)
q=o.a=s[t]
if(q!=null)return q
q={}
o.a=q
if(t>=r)return H.d(s,t)
s[t]=q
u.G(a,new P.jx(o,p))
return o.a}if(!!u.$in){t=p.c0(a)
o=p.b
if(t>=o.length)return H.d(o,t)
q=o[t]
if(q!=null)return q
return p.ha(a,t)}if(!!u.$in1){t=p.c0(a)
u=p.b
s=u.length
if(t>=s)return H.d(u,t)
q=o.b=u[t]
if(q!=null)return q
q={}
o.b=q
if(t>=s)return H.d(u,t)
u[t]=q
p.ht(a,new P.jy(o,p))
return o.b}throw H.c(P.iC("structured clone of other type"))},
ha:function(a,b){var u,t=J.ap(a),s=t.gm(a),r=new Array(s),q=this.b
if(b>=q.length)return H.d(q,b)
q[b]=r
if(typeof s!=="number")return H.v(s)
u=0
for(;u<s;++u){q=this.bo(t.h(a,u))
if(u>=r.length)return H.d(r,u)
r[u]=q}return r}}
P.jx.prototype={
$2:function(a,b){this.a.a[a]=this.b.bo(b)},
$S:3}
P.jy.prototype={
$2:function(a,b){this.a.b[a]=this.b.bo(b)},
$S:3}
P.ev.prototype={$iaN:1,
gd3:function(a){return this.a}}
P.jY.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.jw.prototype={
ht:function(a,b){var u,t,s,r
for(u=Object.keys(a),t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,a[r])}}}
P.fs.prototype={
gbb:function(){var u=this.b,t=H.kX(u,"x",0)
return new H.c6(new H.cq(u,new P.ft(),[t]),new P.fu(),[t,W.O])},
l:function(a,b,c){var u=this.gbb()
J.mI(u.b.$1(J.eM(u.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gm:function(a){return J.af(this.gbb().a)},
h:function(a,b){var u=this.gbb()
return u.b.$1(J.eM(u.a,b))},
gS:function(a){var u=P.kG(this.gbb(),!1,W.O)
return new J.aa(u,u.length)},
$aq:function(){return[W.O]},
$ax:function(){return[W.O]},
$aj:function(){return[W.O]},
$an:function(){return[W.O]}}
P.ft.prototype={
$1:function(a){return!!J.N(a).$iO}}
P.fu.prototype={
$1:function(a){return H.r(a,"$iO")}}
P.jl.prototype={
gcd:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.v(t)
return u+t},
gd0:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.v(t)
return u+t},
i:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
q:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.N(b)
if(!!u.$ia7){t=q.a
if(t==u.gbj(b)){s=q.b
if(s==u.gbm(b)){r=q.c
if(typeof t!=="number")return t.w()
if(typeof r!=="number")return H.v(r)
if(t+r===u.gcd(b)){t=q.d
if(typeof s!=="number")return s.w()
if(typeof t!=="number")return H.v(t)
u=s+t===u.gd0(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gI:function(a){var u=this,t=u.a,s=J.cM(t),r=u.b,q=J.cM(r),p=u.c
if(typeof t!=="number")return t.w()
if(typeof p!=="number")return H.v(p)
p=C.c.gI(t+p)
t=u.d
if(typeof r!=="number")return r.w()
if(typeof t!=="number")return H.v(t)
t=C.c.gI(r+t)
return P.nR(P.ji(P.ji(P.ji(P.ji(0,s),q),p),t))}}
P.a7.prototype={
gbj:function(a){return this.a},
gbm:function(a){return this.b},
gaD:function(a){return this.c},
gax:function(a){return this.d}}
P.aO.prototype={$iaO:1}
P.fN.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.aO]},
$ax:function(){return[P.aO]},
$ij:1,
$aj:function(){return[P.aO]},
$in:1,
$an:function(){return[P.aO]}}
P.aS.prototype={$iaS:1}
P.hv.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.aS]},
$ax:function(){return[P.aS]},
$ij:1,
$aj:function(){return[P.aS]},
$in:1,
$an:function(){return[P.aS]}}
P.hD.prototype={
gm:function(a){return a.length}}
P.cf.prototype={$icf:1}
P.i6.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.h]},
$ax:function(){return[P.h]},
$ij:1,
$aj:function(){return[P.h]},
$in:1,
$an:function(){return[P.h]}}
P.k.prototype={
gbP:function(a){return new P.fs(a,new W.a2(a))},
aa:function(a,b,c,d){var u,t,s,r,q,p=H.b([],[W.aR])
p.push(W.lP(null))
p.push(W.lR())
p.push(new W.jA())
c=new W.ey(new W.di(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.r).hb(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.a2(s)
q=p.gaE(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ik:1}
P.aU.prototype={$iaU:1}
P.iq.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.aU]},
$ax:function(){return[P.aU]},
$ij:1,
$aj:function(){return[P.aU]},
$in:1,
$an:function(){return[P.aU]}}
P.e_.prototype={}
P.e0.prototype={}
P.ea.prototype={}
P.eb.prototype={}
P.em.prototype={}
P.en.prototype={}
P.et.prototype={}
P.eu.prototype={}
P.bD.prototype={$iq:1,
$aq:function(){return[P.w]},
$ij:1,
$aj:function(){return[P.w]},
$in:1,
$an:function(){return[P.w]}}
P.eR.prototype={
gm:function(a){return a.length}}
P.eS.prototype={
h:function(a,b){return P.aV(a.get(b))},
G:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aV(u.value[1]))}},
gZ:function(a){var u=H.b([],[P.h])
this.G(a,new P.eT(u))
return u},
gm:function(a){return a.size},
l:function(a,b,c){throw H.c(P.y("Not supported"))},
$aa0:function(){return[P.h,null]},
$iQ:1,
$aQ:function(){return[P.h,null]}}
P.eT.prototype={
$2:function(a,b){return this.a.push(a)}}
P.eU.prototype={
gm:function(a){return a.length}}
P.bl.prototype={}
P.hw.prototype={
gm:function(a){return a.length}}
P.dN.prototype={}
P.dp.prototype={
i2:function(a,b,c,d,e,f,g){var u,t=J.N(g)
if(!!t.$iaN)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.oL(g))
return}if(!!t.$ic2)t=!0
else t=!1
if(t){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.cN("Incorrect number or type of arguments"))}}
P.i1.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return P.aV(a.item(b))},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[[P.Q,,,]]},
$ax:function(){return[[P.Q,,,]]},
$ij:1,
$aj:function(){return[[P.Q,,,]]},
$in:1,
$an:function(){return[[P.Q,,,]]}}
P.ei.prototype={}
P.ej.prototype={}
K.aJ.prototype={
ay:function(a,b){return!0},
i:function(a){return"all"}}
K.d1.prototype={
ay:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)if(u[s].ay(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.l)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s}}
K.b7.prototype={}
K.a5.prototype={
ay:function(a,b){return!this.dW(0,b)},
i:function(a){return"!["+this.ck(0)+"]"}}
K.hG.prototype={
ay:function(a,b){if(typeof b!=="number")return H.v(b)
return this.a<=b&&this.b>=b},
i:function(a){var u=H.bA(this.a),t=H.bA(this.b)
return u+".."+t}}
K.hP.prototype={
e3:function(a){var u,t,s,r
if(a.a.length<=0)throw H.c(P.u("May not create a Set with zero characters."))
u=P.w
t=new H.H([u,P.aG])
for(s=new H.b6(a,a.gm(a));s.t();)t.l(0,s.d,!0)
r=P.kG(t.gZ(t),!0,u)
C.b.dU(r)
this.a=r},
ay:function(a,b){return C.b.D(this.a,b)},
i:function(a){return P.ch(this.a,0,null)}}
L.du.prototype={
j:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new L.dE(this.a.k(0,b))
r.a=H.b([],[K.b7])
r.c=!1
this.c.push(r)
return r},
ho:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
if(r.ay(0,a))return r}return},
i:function(a){return this.b},
cO:function(){var u,t,s,r,q,p=this,o="("+p.b+")",n=p.d
if(n!=null){n=n.b
o+=" => ["+n+"]"
u=p.a
if(u.c.D(0,n))o+=" (consume)"
for(n=p.d.c,n=n.gZ(n),n=n.gS(n);n.t();){t=n.gC(n)
o+="\n"
s=p.d.c.h(0,t)
t=o+("  -- "+H.e(t)+" => ["+H.e(s)+"]")
o=u.c.D(0,s)?t+" (consume)":t}}for(n=p.c,u=n.length,r=0;r<n.length;n.length===u||(0,H.l)(n),++r){q=n[r]
o=o+"\n"+("  -- "+q.i(0))}return o.charCodeAt(0)==0?o:o}}
L.dB.prototype={
i:function(a){var u=H.l2(this.b,"\n","\\n"),t=H.l2(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
L.dC.prototype={
aA:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.l)(c),++t){s=c[t]
this.c.l(0,s,b)}},
i:function(a){return this.b}}
L.ik.prototype={
k:function(a,b){var u=this.a.h(0,b)
if(u==null){u=new L.du(this,b)
u.c=H.b([],[L.dE])
this.a.l(0,b,u)}return u},
P:function(a){var u,t=this.b.h(0,a)
if(t==null){t=new L.dC(a)
u=P.h
t.c=new H.H([u,u])
this.b.l(0,a,t)}return t},
ce:function(a){return this.i7(a)},
i7:function(a){var u=this
return P.od(function(){var t=a
var s=0,r=1,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
return function $async$ce(b,a0){if(b===1){q=a0
s=r}while(true)switch(s){case 0:g=u.d
f=[P.w]
e=H.b([],f)
d=H.b([],f)
c=H.b([],f)
p=null,o=0,n=0,m=0
case 2:if(!!0){s=3
break}if(c.length!==0)l=C.b.ca(c,0)
else{if(!t.t()){s=3
break}l=t.d}d.push(l);++o
k=g.ho(l)
s=k==null?4:6
break
case 4:if(p==null){j=P.ch(d,0,null)
throw H.c(P.u("Untokenizable string [state: "+g.b+", index "+o+']: "'+j+'"'))}if(!!d.fixed$length)H.p(P.y("removeRange"))
P.aT(0,m,d.length)
d.splice(0,m-0)
C.b.a9(c,d)
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
if(g.d!=null){j=P.ch(e,0,null)
i=g.d
h=i.c.h(0,j)
p=new L.dB(h==null?i.b:h,j,o)
m=d.length
n=o}case 5:s=2
break
case 3:s=p!=null&&!u.c.D(0,p.a)?10:11
break
case 10:s=12
return p
case 12:case 11:return P.nP()
case 1:return P.nQ(q)}}},L.dB)},
i:function(a){var u,t=new P.R(""),s=this.d
if(s!=null)t.a=s.cO()+"\n"
for(s=this.a,s=s.gi9(s),s=s.gS(s);s.t();){u=s.gC(s)
if(u!=this.d)t.a+=u.cO()+"\n"}s=t.a
return s.charCodeAt(0)==0?s:s}}
L.dE.prototype={
i:function(a){return this.b.b+": "+this.ck(0)}}
O.b0.prototype={
bs:function(a){this.a=H.b([],[a])
this.c=this.b=null},
ci:function(a,b,c){this.b=b
this.c=a},
b7:function(a,b){return this.ci(a,null,b)},
fj:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
e6:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gm:function(a){return this.a.length},
gS:function(a){var u=this.a
return new J.aa(u,u.length)},
J:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
n:function(a,b){var u,t,s=this,r=[H.kX(s,"b0",0)]
if(s.fj(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.e6(t,H.b([b],r))}},
$ij:1}
O.c7.prototype={
gm:function(a){return this.a.length},
gB:function(){var u=this.b
return u==null?this.b=D.P():u},
aF:function(){var u=this.b
if(u!=null)u.K(null)},
ga_:function(a){var u=this.a
if(u.length>0)return C.b.gap(u)
else return V.dd()},
dE:function(a){var u=this.a
if(a==null)u.push(V.dd())
else u.push(a)
this.aF()},
c7:function(){var u=this.a
if(u.length>0){u.pop()
this.aF()}}}
E.eY.prototype={}
E.aM.prototype={
sae:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gB().L(0,s.gdz())
u=s.c
if(u!=null)u.gB().n(0,s.gdz())
t=new D.E("shape",r,s.c)
t.b=!0
s.az(t)}},
sb0:function(a){var u,t,s=this
if(!J.D(s.r,a)){u=s.r
if(u!=null)u.gB().L(0,s.gdv())
if(a!=null)a.gB().n(0,s.gdv())
s.r=a
t=new D.E("mover",u,a)
t.b=!0
s.az(t)}},
aC:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.a:null
if(!J.D(q,s.x)){u=s.x
s.x=q
t=new D.E("matrix",u,q)
t.b=!0
s.az(t)}for(r=s.y.a,r=new J.aa(r,r.length);r.t();)r.d.aC(0,b)},
aN:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)s.a.push(s.ga_(s))
else s.a.push(r.A(0,s.ga_(s)))
s.aF()
a.dF(t.f)
s=a.dy
u=(s&&C.b).gap(s)
if(u!=null&&t.d!=null)u.hX(a,t)
for(s=t.y.a,s=new J.aa(s,s.length);s.t();)s.d.aN(a)
a.dD()
a.dx.c7()},
az:function(a){var u=this.z
if(u!=null)u.K(a)},
Y:function(){return this.az(null)},
dA:function(a){this.e=null
this.az(a)},
hK:function(){return this.dA(null)},
dw:function(a){this.az(a)},
hJ:function(){return this.dw(null)},
du:function(a){this.az(a)},
hG:function(){return this.du(null)},
hF:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gdt(),s=[{func:1,ret:-1,args:[D.Z]}],r=0;r<b.length;b.length===u||(0,H.l)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bs()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.Y()},
hI:function(a,b){var u,t
for(u=b.gS(b),t=this.gdt();u.t();)u.gC(u).gB().L(0,t)
this.Y()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.bo.prototype={
i:function(a){return this.b}}
E.by.prototype={
i:function(a){return this.b}}
E.dU.prototype={}
E.hH.prototype={
e2:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.ab(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.c7()
t=[V.aP]
u.a=H.b([],t)
u.gB().n(0,new E.hI(s))
s.cy=u
u=new O.c7()
u.a=H.b([],t)
u.gB().n(0,new E.hJ(s))
s.db=u
u=new O.c7()
u.a=H.b([],t)
u.gB().n(0,new E.hK(s))
s.dx=u
u=H.b([],[O.dx])
s.dy=u
u.push(null)
s.fr=new H.H([P.h,A.dq])},
ghT:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga_(s)
u=t.db
u=t.z=s.A(0,u.ga_(u))
s=u}return s},
dF:function(a){var u=this.dy
u.push(a==null?(u&&C.b).gap(u):a)},
dD:function(){var u=this.dy
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
E.dz.prototype={
cp:function(a){this.dH()},
co:function(){return this.cp(null)},
ghu:function(){var u,t=this,s=Date.now(),r=C.c.a3(P.lg(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.ab(s,!1)
return u/r},
cI:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.A()
if(typeof r!=="number")return H.v(r)
u=C.d.c2(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.A()
t=C.d.c2(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.lz(C.n,s.ghZ())}},
dH:function(){if(!this.cx){this.cx=!0
var u=window
C.G.eu(u)
C.G.fD(u,W.m1(new E.ii(this),P.a9))}},
hW:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.cI()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ab(r,!1)
s.y=P.lg(r-s.r.a).a*0.000001
r=s.cy
C.b.sm(r.a,0)
r.aF()
r=s.db
C.b.sm(r.a,0)
r.aF()
r=s.dx
C.b.sm(r.a,0)
r.aF()
r=s.dy;(r&&C.b).sm(r,0)
s.dy.push(null)
o.aN(p.e)}s=p.Q
if(s!=null)s.K(null)}catch(q){u=H.ae(q)
t=H.kY(q)
P.l1("Error: "+H.e(u))
P.l1("Stack: "+H.e(t))
throw H.c(u)}}}
E.ii.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.hW()}}}
Z.dL.prototype={}
Z.cQ.prototype={
bL:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ae(s)
t=P.u('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.e(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.j3.prototype={}
Z.cR.prototype={
aM:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bL:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].bL(a)},
i8:function(a){var u,t,s
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
Z.bt.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.ce(this.c))+"'")+"]"}}
Z.bg.prototype={
gcj:function(a){var u=this.a,t=(u&$.aZ().a)!==0?3:0
if((u&$.aY().a)!==0)t+=3
if((u&$.aX().a)!==0)t+=3
if((u&$.bj().a)!==0)t+=2
if((u&$.bk().a)!==0)t+=3
if((u&$.cJ().a)!==0)t+=3
if((u&$.cK().a)!==0)t+=4
if((u&$.bS().a)!==0)++t
return(u&$.aW().a)!==0?t+4:t},
h0:function(a){var u,t=$.aZ(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aY()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aX()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bj()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bk()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cJ()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cK()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bS()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aW()
if((s&t.a)!==0)if(u===a)return t
return $.mx()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bg))return!1
return this.a===b.a},
i:function(a){var u=H.b([],[P.h]),t=this.a
if((t&$.aZ().a)!==0)u.push("Pos")
if((t&$.aY().a)!==0)u.push("Norm")
if((t&$.aX().a)!==0)u.push("Binm")
if((t&$.bj().a)!==0)u.push("Txt2D")
if((t&$.bk().a)!==0)u.push("TxtCube")
if((t&$.cJ().a)!==0)u.push("Clr3")
if((t&$.cK().a)!==0)u.push("Clr4")
if((t&$.bS().a)!==0)u.push("Weight")
if((t&$.aW().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.b.j(u,"|")}}
D.f0.prototype={}
D.bs.prototype={
n:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.Z]}]):u).push(b)},
L:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.b.D(s,b)
if(s===!0){s=t.a
u=(s&&C.b).L(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.b.D(s,b)
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
if(a==null){a=new D.Z()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.b.G(P.kG(u,!0,{func:1,ret:-1,args:[D.Z]}),new D.fo(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.Z]}])
C.b.G(u,new D.fp(q))}return!0},
hk:function(){return this.K(null)},
af:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.K(u)}}}}
D.fo.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.fp.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.Z.prototype={}
D.bu.prototype={}
D.bv.prototype={}
D.E.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cS.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cS))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.d6.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d6))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.fM.prototype={
hP:function(a){this.d.n(0,a.a)
return!1},
hL:function(a){this.d.L(0,a.a)
return!1}}
X.d9.prototype={}
X.fV.prototype={
aR:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.A()
u=b.b
t=q.ch
if(typeof u!=="number")return u.A()
s=new V.a6(o.a+n*m,o.b+u*t)
t=q.a.gbd()
r=new X.b8(a,V.bb(),q.x,t,s)
r.b=!0
q.z=new P.ab(p,!1)
q.x=s
return r},
c6:function(a,b){this.r=a.a
return!1},
b2:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.dR()
if(typeof u!=="number")return u.a6()
this.r=(u&~t)>>>0
return!1},
b1:function(a,b){var u=this.d
if(u==null)return!1
u.K(this.aR(a,b))
return!0},
hQ:function(a){return!1},
f8:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.d9(c,r.a.gbd(),b)
s.b=!0
t.K(s)
r.y=new P.ab(u,!1)
r.x=V.bb()}}
X.bx.prototype={
q:function(a,b){var u=this
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
X.b8.prototype={}
X.hl.prototype={
by:function(a,b,c){var u=this,t=new P.ab(Date.now(),!1),s=u.a.gbd(),r=new X.b8(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
c6:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.K(this.by(a,b,!0))
return!0},
b2:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.dR()
if(typeof t!=="number")return t.a6()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.K(u.by(a,b,!0))
return!0},
b1:function(a,b){var u=this.d
if(u==null)return!1
u.K(this.by(a,b,!1))
return!0},
hR:function(a,b){return!1}}
X.hC.prototype={}
X.dD.prototype={}
X.im.prototype={
aR:function(a,b){var u=this,t=new P.ab(Date.now(),!1),s=a.length>0?a[0]:V.bb(),r=u.a.gbd(),q=new X.dD(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
hO:function(a){var u=this.b
if(u==null)return!1
u.K(this.aR(a,!0))
return!0},
hM:function(a){var u=this.c
if(u==null)return!1
u.K(this.aR(a,!0))
return!0},
hN:function(a){var u=this.d
if(u==null)return!1
u.K(this.aR(a,!1))
return!0}}
X.dI.prototype={
gbd:function(){var u=this.a,t=C.i.gd1(u).c
t.toString
u=C.i.gd1(u).d
u.toString
return V.lu(0,0,t,u)},
cw:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.d6(u,new X.bx(t,a.altKey,a.shiftKey))},
aI:function(a){a.shiftKey},
bH:function(a){a.shiftKey},
au:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.M()
u=t.top
if(typeof r!=="number")return r.M()
return new V.a6(s-q,r-u)},
aS:function(a){return new V.U(a.movementX,a.movementY)},
bD:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.a6])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
q=C.d.ag(r.pageX)
C.d.ag(r.pageY)
p=o.left
C.d.ag(r.pageX)
n.push(new V.a6(q-p,C.d.ag(r.pageY)-o.top))}return n},
as:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cS(u,new X.bx(t,a.altKey,a.shiftKey))},
bz:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.M()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.M()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
f2:function(a){this.f=!0},
eQ:function(a){this.f=!1},
eX:function(a){if(this.f&&this.bz(a))a.preventDefault()},
f6:function(a){var u
if(!this.f)return
u=this.cw(a)
this.b.hP(u)},
f4:function(a){var u
if(!this.f)return
u=this.cw(a)
this.b.hL(u)},
fa:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aI(a)
if(r.x){u=r.as(a)
t=r.aS(a)
if(r.d.c6(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.as(a)
s=r.au(a)
if(r.c.c6(u,s))a.preventDefault()},
fe:function(a){var u,t,s,r=this
r.aI(a)
u=r.as(a)
if(r.x){t=r.aS(a)
if(r.d.b2(u,t))a.preventDefault()
return}if(r.r)return
s=r.au(a)
if(r.c.b2(u,s))a.preventDefault()},
f0:function(a){var u,t,s,r=this
if(!r.bz(a)){r.aI(a)
u=r.as(a)
if(r.x){t=r.aS(a)
if(r.d.b2(u,t))a.preventDefault()
return}if(r.r)return
s=r.au(a)
if(r.c.b2(u,s))a.preventDefault()}},
fc:function(a){var u,t,s,r=this
r.aI(a)
u=r.as(a)
if(r.x){t=r.aS(a)
if(r.d.b1(u,t))a.preventDefault()
return}if(r.r)return
s=r.au(a)
if(r.c.b1(u,s))a.preventDefault()},
eZ:function(a){var u,t,s,r=this
if(!r.bz(a)){r.aI(a)
u=r.as(a)
if(r.x){t=r.aS(a)
if(r.d.b1(u,t))a.preventDefault()
return}if(r.r)return
s=r.au(a)
if(r.c.b1(u,s))a.preventDefault()}},
fg:function(a){var u,t,s=this
s.aI(a)
u=new V.U((a&&C.F).ghd(a),C.F.ghe(a)).A(0,s.Q)
if(s.x){if(s.d.hQ(u))a.preventDefault()
return}if(s.r)return
t=s.au(a)
if(s.c.hR(u,t))a.preventDefault()},
fi:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.as(s.y)
t=s.au(s.y)
s.d.f8(u,t,r)}},
fw:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bH(a)
u=t.bD(a)
if(t.e.hO(u))a.preventDefault()},
fs:function(a){var u
this.bH(a)
u=this.bD(a)
if(this.e.hM(u))a.preventDefault()},
fu:function(a){var u
this.bH(a)
u=this.bD(a)
if(this.e.hN(u))a.preventDefault()}}
D.eV.prototype={$ia4:1}
D.bq.prototype={
al:function(a){var u=this.r
if(u!=null)u.K(a)},
eR:function(){return this.al(null)},
$ia4:1}
D.a4.prototype={}
D.d7.prototype={
al:function(a){var u=this.y
if(u!=null)u.K(a)},
cG:function(a){var u=this.z
if(u!=null)u.K(a)},
f7:function(){return this.cG(null)},
fl:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.l)(a),++t){s=a[t]
if(s==null||this.en(s))return!1}return!0},
eK:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcF(),s=[{func:1,ret:-1,args:[D.Z]}],r=0;r<b.length;b.length===u||(0,H.l)(b),++r){q=b[r]
if(q instanceof D.bq)this.f.push(q)
p=q.r
if(p==null){p=new D.bs()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}u=new D.bu()
u.b=!0
this.al(u)},
fp:function(a,b){var u,t,s
for(u=b.gS(b),t=this.gcF();u.t();){s=u.gC(u)
C.b.L(this.e,s)
s.gB().L(0,t)}u=new D.bv()
u.b=!0
this.al(u)},
en:function(a){var u=C.b.D(this.f,a)
return u},
$aj:function(){return[D.a4]},
$ab0:function(){return[D.a4]}}
D.hB.prototype={$ia4:1}
D.i0.prototype={$ia4:1}
V.W.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.W))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"]"}}
V.ar.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ar))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.I(u.a,3,0)+", "+V.I(u.b,3,0)+", "+V.I(u.c,3,0)+", "+V.I(u.d,3,0)+"]"}}
V.fn.prototype={}
V.dc.prototype={
a7:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.J])
return t},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dc))return!1
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
V.aP.prototype={
a7:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.J])
return t},
dl:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.C().a)return V.dd()
u=1/b1
t=-n
s=-a0
return V.aQ((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
A:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.aQ(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bn:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.z(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
b4:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.T(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aP))return!1
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
i:function(a){return this.O()},
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
O:function(){return this.H("")}}
V.a6.prototype={
M:function(a,b){return new V.a6(this.a-b.a,this.b-b.b)},
q:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a6))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+"]"}}
V.T.prototype={
w:function(a,b){return new V.T(this.a+b.a,this.b+b.b,this.c+b.c)},
M:function(a,b){return new V.T(this.a-b.a,this.b-b.b,this.c-b.c)},
A:function(a,b){return new V.T(this.a*b,this.b*b,this.c*b)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.T))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"]"}}
V.bc.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bc))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.I(u.a,3,0)+", "+V.I(u.b,3,0)+", "+V.I(u.c,3,0)+", "+V.I(u.d,3,0)+"]"}}
V.dn.prototype={
gaq:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dn))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.I(u.a,3,0)+", "+V.I(u.b,3,0)+", "+V.I(u.c,3,0)+", "+V.I(u.d,3,0)+"]"}}
V.U.prototype={
c4:function(a){return Math.sqrt(this.E(this))},
E:function(a){var u,t,s=this.a,r=a.a
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
v:function(a,b){var u,t
if(Math.abs(b-0)<$.C().a){u=$.lH
return u==null?$.lH=new V.U(0,0):u}u=this.a
if(typeof u!=="number")return u.v()
t=this.b
if(typeof t!=="number")return t.v()
return new V.U(u/b,t/b)},
q:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
u=b.a
t=this.a
s=$.C()
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
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+"]"}}
V.z.prototype={
c4:function(a){return Math.sqrt(this.E(this))},
E:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
c5:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.z(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aw:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.z(u*t-s*r,s*q-p*t,p*r-u*q)},
w:function(a,b){return new V.z(this.a+b.a,this.b+b.b,this.c+b.c)},
T:function(a){return new V.z(-this.a,-this.b,-this.c)},
A:function(a,b){return new V.z(this.a*b,this.b*b,this.c*b)},
v:function(a,b){if(Math.abs(b-0)<$.C().a)return V.cp()
return new V.z(this.a/b,this.b/b,this.c/b)},
dm:function(){var u=$.C().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.z))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"]"}}
U.f2.prototype={
bt:function(a){var u=V.pb(a,this.c,this.b)
return u},
gB:function(){var u=this.y
return u==null?this.y=D.P():u},
W:function(a){var u=this.y
if(u!=null)u.K(a)},
sdO:function(a,b){},
sdn:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.C().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bt(u)}s=new D.E("maximumLocation",s,t.b)
s.b=!0
t.W(s)}},
sdr:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.C().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bt(u)}s=new D.E("minimumLocation",s,t.c)
s.b=!0
t.W(s)}},
sa1:function(a,b){var u,t=this
b=t.bt(b)
u=t.d
if(!(Math.abs(u-b)<$.C().a)){t.d=b
u=new D.E("location",u,b)
u.b=!0
t.W(u)}},
sdq:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.C().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.E("maximumVelocity",r,a)
r.b=!0
s.W(r)}},
sX:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.C().a)){u.f=a
t=new D.E("velocity",t,a)
t.b=!0
u.W(t)}},
sd2:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.C().a)){this.x=a
u=new D.E("dampening",u,a)
u.b=!0
this.W(u)}},
aC:function(a,b){var u,t,s,r=this,q=r.f,p=$.C().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa1(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.C().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sX(u)}}}
U.cU.prototype={
gB:function(){var u=this.b
return u==null?this.b=D.P():u},
b5:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cU))return!1
return J.D(this.a,b.a)},
i:function(a){return"Constant: "+this.a.H("          ")}}
U.c0.prototype={
gB:function(){var u=this.e
return u==null?this.e=D.P():u},
W:function(a){var u=this.e
if(u!=null)u.K(a)},
ai:function(){return this.W(null)},
eI:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gb9(),s=[{func:1,ret:-1,args:[D.Z]}],r=0;r<b.length;b.length===u||(0,H.l)(b),++r){q=b[r]
if(q!=null){p=q.gB()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bu()
u.b=!0
this.W(u)},
fn:function(a,b){var u,t
for(u=b.gS(b),t=this.gb9();u.t();)u.gC(u).gB().L(0,t)
u=new D.bv()
u.b=!0
this.W(u)},
b5:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.R()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.aa(r,r.length),u=null;r.t();){q=r.d
if(q!=null){t=q.b5(0,b,c)
if(t!=null)u=u==null?t:t.A(0,u)}}s.f=u==null?V.dd():u
r=s.e
if(r!=null)r.af(0)}return s.f},
q:function(a,b){var u,t,s,r
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
$aj:function(){return[U.al]},
$ab0:function(){return[U.al]},
$ial:1}
U.al.prototype={}
U.dJ.prototype={
gB:function(){var u=this.fx
return u==null?this.fx=D.P():u},
W:function(a){var u=this.fx
if(u!=null)u.K(a)},
ai:function(){return this.W(null)},
h1:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
u=a.c
t=u.b
u=t==null?u.b=D.P():t
u.n(0,s.geB())
u=s.a.c
t=u.d
u=t==null?u.d=D.P():t
u.n(0,s.geD())
u=s.a.c
t=u.c
u=t==null?u.c=D.P():t
u.n(0,s.geF())
u=s.a.d
t=u.f
u=t==null?u.f=D.P():t
u.n(0,s.gew())
u=s.a.d
t=u.d
u=t==null?u.d=D.P():t
u.n(0,s.gey())
u=s.a.e
t=u.b
u=t==null?u.b=D.P():t
u.n(0,s.gfT())
u=s.a.e
t=u.d
u=t==null?u.d=D.P():t
u.n(0,s.gfR())
u=s.a.e
t=u.c
u=t==null?u.c=D.P():t
u.n(0,s.gfP())
return!0},
ak:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.T()
u=-u}if(this.r){if(typeof t!=="number")return t.T()
t=-t}return new V.U(u,t)},
eC:function(a){var u=this
H.r(a,"$ib8")
if(!J.D(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
eE:function(a){var u,t,s,r,q,p,o,n=this
H.r(a,"$ib8")
if(!n.cx)return
if(n.ch){u=a.d.M(0,a.y)
u=new V.U(u.a,u.b)
u=u.E(u)
t=n.Q
if(typeof t!=="number")return H.v(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.M(0,a.y)
u=n.ak(new V.U(t.a,t.b).A(0,2).v(0,u.gaq()))
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
r=n.ak(new V.U(s.a,s.b).A(0,2).v(0,u.gaq()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.v(p)
o=n.cy
if(typeof o!=="number")return H.v(o)
s.sa1(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.v(q)
s=n.db
if(typeof s!=="number")return H.v(s)
o.sa1(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.M(0,a.z)
n.dx=n.ak(new V.U(t.a,t.b).A(0,2).v(0,u.gaq()))}n.ai()},
eG:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.E(u)>0.0001){u=r.c
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
r.ai()}},
ex:function(a){var u=this
if(H.r(a,"$id9").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
ez:function(a){var u,t,s,r,q,p,o,n=this
H.r(a,"$ib8")
if(!J.D(n.d,a.x.b))return
u=a.c
t=a.d
s=t.M(0,a.y)
r=n.ak(new V.U(s.a,s.b).A(0,2).v(0,u.gaq()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.v(p)
o=n.cy
if(typeof o!=="number")return H.v(o)
s.sa1(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.v(q)
s=n.db
if(typeof s!=="number")return H.v(s)
o.sa1(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.M(0,a.z)
n.dx=n.ak(new V.U(t.a,t.b).A(0,2).v(0,u.gaq()))
n.ai()},
fU:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fS:function(a){var u,t,s,r,q,p,o,n=this
H.r(a,"$idD")
if(!n.cx)return
if(n.ch){u=a.d.M(0,a.y)
u=new V.U(u.a,u.b)
u=u.E(u)
t=n.Q
if(typeof t!=="number")return H.v(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.M(0,a.y)
u=n.ak(new V.U(t.a,t.b).A(0,2).v(0,u.gaq()))
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
r=n.ak(new V.U(s.a,s.b).A(0,2).v(0,u.gaq()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.v(p)
o=n.cy
if(typeof o!=="number")return H.v(o)
s.sa1(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.v(q)
s=n.db
if(typeof s!=="number")return H.v(s)
o.sa1(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.M(0,a.z)
n.dx=n.ak(new V.U(t.a,t.b).A(0,2).v(0,u.gaq()))}n.ai()},
fQ:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.E(u)>0.0001){u=r.c
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
r.ai()}},
b5:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.R()
if(q<p){r.dy=p
u=b.y
r.c.aC(0,u)
r.b.aC(0,u)
q=V.lm(r.b.d)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.A(0,V.aQ(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$ial:1}
M.cZ.prototype={
ar:function(a){var u=this.y
if(u!=null)u.K(a)},
e8:function(){return this.ar(null)},
eT:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaj(),s=[{func:1,ret:-1,args:[D.Z]}],r=0;r<b.length;b.length===u||(0,H.l)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bs()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bu()
u.b=!0
this.ar(u)},
eV:function(a,b){var u,t
for(u=b.gS(b),t=this.gaj();u.t();)u.gC(u).gB().L(0,t)
u=new D.bv()
u.b=!0
this.ar(u)},
sdJ:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gB().L(0,t.gaj())
u=t.d
t.d=a
if(a!=null)a.gB().n(0,t.gaj())
s=new D.E("technique",u,t.d)
s.b=!0
t.ar(s)}},
gB:function(){var u=this.y
return u==null?this.y=D.P():u},
aN:function(a2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a2.dF(a1.d)
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
o=C.d.ag(p*s)
p=q.b
if(typeof r!=="number")return H.v(r)
n=C.d.ag(p*r)
p=C.d.ag(q.c*s)
a2.c=p
q=C.d.ag(q.d*r)
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
i=V.aQ(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a2.cy.dE(i)
t=$.lp
if(t==null){t=V.nd()
q=V.lL()
p=$.lI
if(p==null)p=$.lI=new V.z(0,0,-1)
h=p.v(0,Math.sqrt(p.E(p)))
q=q.aw(h)
g=q.v(0,Math.sqrt(q.E(q)))
f=h.aw(g)
e=new V.z(t.a,t.b,t.c)
d=g.T(0).E(e)
c=f.T(0).E(e)
b=h.T(0).E(e)
t=V.aQ(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.lp=t
a=t}else a=t
t=u.b
if(t!=null){a0=t.b5(0,a2,u)
if(a0!=null)a=a0.A(0,a)}a2.db.dE(a)
u=a1.d
if(u!=null)u.aC(0,a2)
for(u=a1.e.a,u=new J.aa(u,u.length);u.t();)u.d.aC(0,a2)
for(u=a1.e.a,u=new J.aa(u,u.length);u.t();)u.d.aN(a2)
a1.b.toString
a2.cy.c7()
a2.db.c7()
a1.c.toString
a2.dD()}}
A.cO.prototype={}
A.eQ.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hl:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
hf:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.a_.prototype={
gah:function(a){var u=this.a?1:0
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
e1:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
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
A.os(c3,u)
A.ou(c3,u)
A.ot(c3,u)
A.ow(c3,u)
A.ox(c3,u)
A.ov(c3,u)
A.oy(c3,u)
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
m=A.or(b8.z)
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
H.p(P.u("Failed to link shader: "+H.e(l)))}b8.fL()
b8.fN()
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
if(c3.x1)b8.k1=H.r(b8.y.V(0,"txt2DMat"),"$icm")
if(c3.x2)b8.k2=H.r(b8.y.V(0,"txtCubeMat"),"$iac")
if(c3.y1)b8.k3=H.r(b8.y.V(0,"colorMat"),"$iac")
b8.r1=H.b([],[A.ac])
t=c3.bf
if(t>0){b8.k4=b8.y.V(0,"bendMatCount")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.h(0,q)
if(j==null)H.p(P.u(c0+q+c1))
s.push(H.r(j,"$iac"))}}if(c3.a.a)b8.r2=H.r(b8.y.V(0,"emissionClr"),"$iF")
if(c3.b.a)b8.x1=H.r(b8.y.V(0,"ambientClr"),"$iF")
if(c3.c.a)b8.y2=H.r(b8.y.V(0,"diffuseClr"),"$iF")
if(c3.d.a)b8.bg=H.r(b8.y.V(0,"invDiffuseClr"),"$iF")
t=c3.e.a
if(!t)s=!1
else s=!0
if(s){b8.d6=H.r(b8.y.V(0,"shininess"),"$iV")
if(t)b8.d5=H.r(b8.y.V(0,"specularClr"),"$iF")}if(c3.db){b8.d7=H.r(b8.y.V(0,"envSampler"),"$ibF")
if(c3.r.a)b8.d8=H.r(b8.y.V(0,"reflectClr"),"$iF")
t=c3.x.a
if(!t)s=!1
else s=!0
if(s){b8.d9=H.r(b8.y.V(0,"refraction"),"$iV")
if(t)b8.da=H.r(b8.y.V(0,"refractClr"),"$iF")}}if(c3.y.a)b8.dc=H.r(b8.y.V(0,"alpha"),"$iV")
if(c3.k1){t=c3.z
s=t.length
if(s!==0){r=P.w
b8.bT=new H.H([r,A.be])
b8.bU=new H.H([r,[P.n,A.ck]])
for(r=[A.ck],i=0;i<t.length;t.length===s||(0,H.l)(t),++i){h=t[i]
g=h.a
f="barLight"+H.e(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].startPnt"
j=p.h(0,o)
if(j==null)H.p(P.u(c0+o+c1))
H.r(j,"$iF")
p=b8.y
o=f+"s["+k+"].endPnt"
d=p.h(0,o)
if(d==null)H.p(P.u(c0+o+c1))
H.r(d,"$iF")
p=b8.y
o=f+"s["+k+"].color"
c=p.h(0,o)
if(c==null)H.p(P.u(c0+o+c1))
H.r(c,"$iF")
if(typeof g!=="number")return g.a6()
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
a3=a2}e.push(new A.ck(j,d,c,a3,a2,a1))}b8.bU.l(0,g,e)
q=b8.bT
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.p(P.u(c0+o+c1))
q.l(0,g,j)}}t=c3.Q
s=t.length
if(s!==0){r=P.w
b8.bV=new H.H([r,A.be])
b8.bW=new H.H([r,[P.n,A.cl]])
for(r=[A.cl],i=0;i<t.length;t.length===s||(0,H.l)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.e(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.a6()
p=(g&1)!==0
if(p){o=b8.y
a4=f+"s["+k+"].objUp"
j=o.h(0,a4)
if(j==null)H.p(P.u(c0+a4+c1))
H.r(j,"$iF")
o=b8.y
a4=f+"s["+k+"].objRight"
d=o.h(0,a4)
if(d==null)H.p(P.u(c0+a4+c1))
H.r(d,"$iF")
o=b8.y
a4=f+"s["+k+"].objDir"
c=o.h(0,a4)
if(c==null)H.p(P.u(c0+a4+c1))
H.r(c,"$iF")
a5=c
a6=d
a7=j}else{a5=b9
a6=a5
a7=a6}o=b8.y
a4=f+"s["+k+"].viewDir"
j=o.h(0,a4)
if(j==null)H.p(P.u(c0+a4+c1))
H.r(j,"$iF")
o=b8.y
a4=f+"s["+k+"].color"
d=o.h(0,a4)
if(d==null)H.p(P.u(c0+a4+c1))
H.r(d,"$iF")
if(p){p=b8.y
o=f+"sTexture2D"+k
c=p.h(0,o)
if(c==null)H.p(P.u(c0+o+c1))
H.r(c,"$ibE")
a8=c}else a8=b9
e.push(new A.cl(a7,a6,a5,j,d,a8))}b8.bW.l(0,g,e)
q=b8.bV
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.p(P.u(c0+o+c1))
q.l(0,g,j)}}t=c3.ch
s=t.length
if(s!==0){r=P.w
b8.bX=new H.H([r,A.be])
b8.bY=new H.H([r,[P.n,A.cn]])
for(r=[A.cn],i=0;i<t.length;t.length===s||(0,H.l)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.e(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.h(0,o)
if(j==null)H.p(P.u(c0+o+c1))
H.r(j,"$iF")
p=b8.y
o=f+"s["+k+"].viewPnt"
d=p.h(0,o)
if(d==null)H.p(P.u(c0+o+c1))
H.r(d,"$iF")
p=b8.y
o=f+"s["+k+"].color"
c=p.h(0,o)
if(c==null)H.p(P.u(c0+o+c1))
H.r(c,"$iF")
if(typeof g!=="number")return g.a6()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
b=p.h(0,o)
if(b==null)H.p(P.u(c0+o+c1))
H.r(b,"$icm")
a9=b}else a9=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
b=p.h(0,o)
if(b==null)H.p(P.u(c0+o+c1))
H.r(b,"$ibF")
a8=b}else a8=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
b=p.h(0,o)
if(b==null)H.p(P.u(c0+o+c1))
H.r(b,"$ibF")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a=p.h(0,o)
if(a==null)H.p(P.u(c0+o+c1))
H.r(a,"$icj")
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
a3=a2}e.push(new A.cn(j,d,a9,c,a8,b0,b1,a3,a2,a1))}b8.bY.l(0,g,e)
q=b8.bX
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.p(P.u(c0+o+c1))
q.l(0,g,j)}}t=c3.cx
s=t.length
if(s!==0){r=P.w
b8.bZ=new H.H([r,A.be])
b8.c_=new H.H([r,[P.n,A.co]])
for(r=[A.co],i=0;i<t.length;t.length===s||(0,H.l)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.e(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.h(0,o)
if(j==null)H.p(P.u(c0+o+c1))
H.r(j,"$iF")
p=b8.y
o=f+"s["+k+"].objDir"
d=p.h(0,o)
if(d==null)H.p(P.u(c0+o+c1))
H.r(d,"$iF")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.h(0,o)
if(c==null)H.p(P.u(c0+o+c1))
H.r(c,"$iF")
p=b8.y
o=f+"s["+k+"].color"
b=p.h(0,o)
if(b==null)H.p(P.u(c0+o+c1))
H.r(b,"$iF")
if(typeof g!=="number")return g.a6()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a=p.h(0,o)
if(a==null)H.p(P.u(c0+o+c1))
H.r(a,"$iF")
p=b8.y
o=f+"s["+k+"].objRight"
a0=p.h(0,o)
if(a0==null)H.p(P.u(c0+o+c1))
H.r(a0,"$iF")
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
H.r(a,"$icj")
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
H.r(a,"$ibE")
a8=a}else a8=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a=p.h(0,o)
if(a==null)H.p(P.u(c0+o+c1))
H.r(a,"$ibE")
b0=a}else b0=b9
e.push(new A.co(j,d,c,b,a7,a6,b5,b4,b1,b7,b6,a3,a2,a1,a8,b0))}b8.c_.l(0,g,e)
q=b8.bZ
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.p(P.u(c0+o+c1))
q.l(0,g,j)}}}},
fJ:function(a,b){}}
A.cP.prototype={
i:function(a){return"barLight"+H.e(this.a)}}
A.cW.prototype={
i:function(a){return"dirLight"+H.e(this.a)}}
A.dl.prototype={
i:function(a){return"pointLight"+H.e(this.a)}}
A.ds.prototype={
i:function(a){return"spotLight"+H.e(this.a)}}
A.h3.prototype={
i:function(a){return this.aX}}
A.ck.prototype={}
A.cl.prototype={}
A.cn.prototype={}
A.co.prototype={}
A.dq.prototype={
e4:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cz:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.u("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
fL:function(){var u,t,s,r=this,q=H.b([],[A.cO]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.v(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cO(p,t.name,s))}r.x=new A.eQ(q)},
fN:function(){var u,t,s,r=this,q=H.b([],[A.dF]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.v(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.hc(t.type,t.size,t.name,s))}r.y=new A.iz(q)},
aH:function(a,b,c){var u=this.a
if(a===1)return new A.be(u,b,c)
else return A.kK(u,this.r,b,a,c)},
eq:function(a,b,c){var u=this.a
if(a===1)return new A.bE(u,b,c)
else return A.kK(u,this.r,b,a,c)},
er:function(a,b,c){var u=this.a
if(a===1)return new A.bF(u,b,c)
else return A.kK(u,this.r,b,a,c)},
bc:function(a,b){return new P.dV(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
hc:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aH(b,c,d)
case 5121:return u.aH(b,c,d)
case 5122:return u.aH(b,c,d)
case 5123:return u.aH(b,c,d)
case 5124:return u.aH(b,c,d)
case 5125:return u.aH(b,c,d)
case 5126:return new A.V(u.a,c,d)
case 35664:return new A.iv(u.a,c,d)
case 35665:return new A.F(u.a,c,d)
case 35666:return new A.cj(u.a,c,d)
case 35667:return new A.iw(u.a,c,d)
case 35668:return new A.ix(u.a,c,d)
case 35669:return new A.iy(u.a,c,d)
case 35674:return new A.iA(u.a,c,d)
case 35675:return new A.cm(u.a,c,d)
case 35676:return new A.ac(u.a,c,d)
case 35678:return u.eq(b,c,d)
case 35680:return u.er(b,c,d)
case 35670:throw H.c(u.bc("BOOL",c))
case 35671:throw H.c(u.bc("BOOL_VEC2",c))
case 35672:throw H.c(u.bc("BOOL_VEC3",c))
case 35673:throw H.c(u.bc("BOOL_VEC4",c))
default:throw H.c(P.u("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.dF.prototype={}
A.iz.prototype={
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
A.be.prototype={
i:function(a){return"Uniform1i: "+H.e(this.c)}}
A.iw.prototype={
i:function(a){return"Uniform2i: "+H.e(this.c)}}
A.ix.prototype={
i:function(a){return"Uniform3i: "+H.e(this.c)}}
A.iy.prototype={
i:function(a){return"Uniform4i: "+H.e(this.c)}}
A.iu.prototype={
i:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.V.prototype={
i:function(a){return"Uniform1f: "+H.e(this.c)}}
A.iv.prototype={
i:function(a){return"Uniform2f: "+H.e(this.c)}}
A.F.prototype={
i:function(a){return"Uniform3f: "+H.e(this.c)}}
A.cj.prototype={
i:function(a){return"Uniform4f: "+H.e(this.c)}}
A.iA.prototype={
i:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.cm.prototype={
ad:function(a){var u=new Float32Array(H.bL(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.e(this.c)}}
A.ac.prototype={
ad:function(a){var u=new Float32Array(H.bL(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.e(this.c)}}
A.bE.prototype={
i:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.bF.prototype={
i:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.jP.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.c5(s.b,b).c5(s.d.c5(s.c,b),c)
a.sa1(0,new V.T(r.a,r.b,r.c))
a.sdK(r.v(0,Math.sqrt(r.E(r))))
s=1-b
u=1-c
a.scZ(new V.bc(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)}}
F.jZ.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)}}
F.k0.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.v(p)
s=-s*p
u=r*p
a.sa1(0,new V.T(s,u,q))
u=new V.z(s,u,q)
a.sdK(u.v(0,Math.sqrt(u.E(u))))
a.scZ(new V.bc(1-c,2+c,-1,-1))}}
F.k1.prototype={
$1:function(a){return this.a.$2(a,1)}}
F.k2.prototype={
$1:function(a){return this.a.$2(1-a,0)}}
F.kk.prototype={
$2:function(a,b){return 0}}
F.kl.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.v(s)
u=a.f
t=new V.z(u.a,u.b,u.c)
s=t.v(0,Math.sqrt(t.E(t))).A(0,this.b+s)
a.sa1(0,new V.T(s.a,s.b,s.c))}}
F.kn.prototype={
$1:function(a){return new V.T(Math.cos(a),Math.sin(a),0)}}
F.ka.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.T(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)}}
F.k_.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.l6(n.$1(o),m)
m=J.l6(n.$1(o+3.141592653589793/p.c),m).M(0,l)
m=new V.z(m.a,m.b,m.c)
u=m.v(0,Math.sqrt(m.E(m)))
n=$.lJ
if(n==null){n=new V.z(1,0,0)
$.lJ=n
t=n}else t=n
n=u.aw(!J.D(u,t)?V.lM():t)
s=n.v(0,Math.sqrt(n.E(n)))
n=s.aw(u)
t=n.v(0,Math.sqrt(n.E(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.A(0,n*m)
m=s.A(0,q*m)
a.sa1(0,l.w(0,new V.T(n.a-m.a,n.b-m.b,n.c-m.c)))}}
F.b2.prototype={
aV:function(){var u=this
if(!u.gaW()){C.b.L(u.a.a.d.b,u)
u.a.a.Y()}u.bE()
u.bF()
u.fB()},
bI:function(a){this.a=a
a.d.b.push(this)},
bJ:function(a){this.b=a
a.d.c.push(this)},
fK:function(a){this.c=a
a.d.d.push(this)},
bE:function(){var u=this.a
if(u!=null){C.b.L(u.d.b,this)
this.a=null}},
bF:function(){var u=this.b
if(u!=null){C.b.L(u.d.c,this)
this.b=null}},
fB:function(){var u=this.c
if(u!=null){C.b.L(u.d.d,this)
this.c=null}},
gaW:function(){return this.a==null||this.b==null||this.c==null},
ej:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cp()
if(q!=null)s=s.w(0,q)
if(u!=null)s=s.w(0,u)
if(t!=null)s=s.w(0,t)
if(s.dm())return
return s.v(0,Math.sqrt(s.E(s)))},
el:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.M(0,q)
r=new V.z(r.a,r.b,r.c)
s=r.v(0,Math.sqrt(r.E(r)))
r=t.M(0,q)
r=new V.z(r.a,r.b,r.c)
r=s.aw(r.v(0,Math.sqrt(r.E(r))))
return r.v(0,Math.sqrt(r.E(r)))},
bO:function(){var u,t=this
if(t.d!=null)return!0
u=t.ej()
if(u==null){u=t.el()
if(u==null)return!1}t.d=u
t.a.a.Y()
return!0},
ei:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.cp()
if(q!=null)s=s.w(0,q)
if(u!=null)s=s.w(0,u)
if(t!=null)s=s.w(0,t)
if(s.dm())return
return s.v(0,Math.sqrt(s.E(s)))},
ek:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.C().a){l=d.M(0,g)
l=new V.z(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.E(l)))
if(s.a-t.a<0)q=q.T(0)}else{p=(l-u.b)/r
l=d.M(0,g).A(0,p).w(0,g).M(0,j)
l=new V.z(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.E(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.T(0)}l=n.d
if(l!=null){o=l.v(0,Math.sqrt(l.E(l)))
l=o.aw(q)
l=l.v(0,Math.sqrt(l.E(l))).aw(o)
q=l.v(0,Math.sqrt(l.E(l)))}return q},
bM:function(){var u,t=this
if(t.e!=null)return!0
u=t.ei()
if(u==null){u=t.ek()
if(u==null)return!1}t.e=u
t.a.a.Y()
return!0},
gh6:function(a){var u=this
if(J.D(u.a,u.b))return!0
if(J.D(u.b,u.c))return!0
if(J.D(u.c,u.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
H:function(a){var u,t,s=this
if(s.gaW())return a+"disposed"
u=a+C.a.ac(J.a3(s.a.e),0)+", "+C.a.ac(J.a3(s.b.e),0)+", "+C.a.ac(J.a3(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
O:function(){return this.H("")}}
F.fq.prototype={}
F.hY.prototype={
aZ:function(a,b,c){var u,t=b.a
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
aV:function(){var u=this
if(!u.gaW()){C.b.L(u.a.a.c.b,u)
u.a.a.Y()}u.bE()
u.bF()},
bI:function(a){this.a=a
a.c.b.push(this)},
bJ:function(a){this.b=a
a.c.c.push(this)},
bE:function(){var u=this.a
if(u!=null){C.b.L(u.c.b,this)
this.a=null}},
bF:function(){var u=this.b
if(u!=null){C.b.L(u.c.c,this)
this.b=null}},
gaW:function(){return this.a==null||this.b==null},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
H:function(a){if(this.gaW())return a+"disposed"
return a+C.a.ac(J.a3(this.a.e),0)+", "+C.a.ac(J.a3(this.b.e),0)},
O:function(){return this.H("")}}
F.fO.prototype={}
F.it.prototype={
aZ:function(a,b,c){var u,t=b.a
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
F.cc.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
H:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.a.ac(J.a3(u.e),0)},
O:function(){return this.H("")}}
F.hQ.prototype={
gB:function(){var u=this.e
return u==null?this.e=D.P():u},
b_:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.u()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.l)(g),++s){r=g[s]
h.a.n(0,r.h9())}h.a.u()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.l)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.w()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
n=p[o]
h.b.a.a.n(0,n)
o=new F.cc()
if(n.a==null)H.p(P.u("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.K(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.l)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.w()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.u()
p=p.e
if(typeof p!=="number")return p.w()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.c.a
p.a.n(0,l)
p.a.n(0,k)
F.n3(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.l)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.w()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.u()
p=p.e
if(typeof p!=="number")return p.w()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.u()
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
F.bZ(l,k,i)}g=h.e
if(g!=null)g.af(0)},
an:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.an()||!1
if(!t.a.an())u=!1
s=t.e
if(s!=null)s.af(0)
return u},
hC:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.b(o.slice(0),[H.aH(o,0)])
for(o=[F.bf];u.length!==0;){t=C.b.ghp(u)
C.b.ca(u,0)
if(t!=null){s=H.b([],o)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.d(u,r)
q=u[r]
if(q!=null&&a.aZ(0,t,q)){s.push(q)
C.b.ca(u,r)}}if(s.length>1)b.b_(s)}}p.a.u()
p.c.cb()
p.d.cb()
p.b.hV()
p.c.cc(new F.it())
p.d.cc(new F.hY())
o=p.e
if(o!=null)o.af(0)},
bK:function(){this.hC(new F.iX(),new F.ht())},
c1:function(){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
p.d.c1()
for(u=p.a.c.length-1;u>=0;--u){o=p.a.c
if(u>=o.length)return H.d(o,u)
t=o[u]
o=t.r
if(o!=null)t.sds(new V.z(-o.a,-o.b,-o.c))
o=t.x
if(o!=null){s=-o.a
r=-o.b
o=-o.c
q=new V.z(s,r,o).v(0,Math.sqrt(s*s+r*r+o*o))
if(!J.D(t.x,q)){t.x=q
o=t.a
if(o!=null){o=o.e
if(o!=null)o.K(null)}}}}o=p.e
if(o!=null)o.af(0)},
h4:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.aZ()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.aY().a)!==0)++s
if((t&$.aX().a)!==0)++s
if((t&$.bj().a)!==0)++s
if((t&$.bk().a)!==0)++s
if((t&$.cJ().a)!==0)++s
if((t&$.cK().a)!==0)++s
if((t&$.bS().a)!==0)++s
if((t&$.aW().a)!==0)++s
r=a4.gcj(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.J])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.cQ])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.h0(m)
k=l.gcj(l)
if(m>=t)return H.d(o,m)
o[m]=new Z.cQ(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.d(i,j)
h=i[j].hA(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.d(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.bL(p)),35044)
u.bindBuffer(a1,null)
c=new Z.cR(new Z.dL(a1,d),o,a4)
c.b=H.b([],[Z.bt])
if(a0.b.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.u()
b.push(t.e)}a=Z.kN(u,34963,b)
c.b.push(new Z.bt(0,b.length,a))}if(a0.c.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.u()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.d(t,m)
t=t[m].b
t.a.a.u()
b.push(t.e)}a=Z.kN(u,34963,b)
c.b.push(new Z.bt(1,b.length,a))}if(a0.d.b.length!==0){b=H.b([],[P.w])
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
b.push(t.e)}a=Z.kN(u,34963,b)
c.b.push(new Z.bt(4,b.length,a))}return c},
i:function(a){var u=this,t="   ",s=H.b([],[P.h])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.H(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.H(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.H(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.H(t))}return C.b.j(s,"\n")},
Y:function(){var u=this.e
if(u!=null)u.K(null)}}
F.hR.prototype={
fX:function(a){var u,t,s,r,q,p=H.b([],[F.b2]),o=a.length
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
fY:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.b2])
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
cc:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.h(0,q)
for(o=q-1;o>=0;--o){n=r.d.h(0,o)
if(a.aZ(0,p,n)){p.aV()
break}}}}},
cb:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=s.gh6(s)
if(t)s.aV()}},
an:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.l)(u),++r)if(!u[r].bO())s=!1
return s},
bN:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.l)(u),++r)if(!u[r].bM())s=!1
return s},
c1:function(){var u,t,s,r,q,p
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
H:function(a){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].H(a))
return C.b.j(r,"\n")},
O:function(){return this.H("")}}
F.hS.prototype={
gm:function(a){return this.b.length},
cc:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.h(0,q)
for(o=q-1;o>=0;--o){n=r.c.h(0,o)
if(a.aZ(0,p,n)){p.aV()
break}}}}},
cb:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=J.D(s.a,s.b)
if(t)s.aV()}},
i:function(a){return this.O()},
H:function(a){var u,t,s=H.b([],[P.h]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.d(t,u)
s.push(t[u].H(a+(""+u+". ")))}return C.b.j(s,"\n")},
O:function(){return this.H("")}}
F.hT.prototype={
gm:function(a){return this.b.length},
hV:function(){var u,t,s
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
H:function(a){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].H(a))
return C.b.j(r,"\n")},
O:function(){return this.H("")}}
F.bf.prototype={
bS:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.dK(u.cx,r,o,t,s,q,p,a,n)},
h9:function(){return this.bS(null)},
sa1:function(a,b){var u
if(!J.D(this.f,b)){this.f=b
u=this.a
if(u!=null)u.Y()}},
sds:function(a){var u
a=a==null?null:a.v(0,Math.sqrt(a.E(a)))
if(!J.D(this.r,a)){this.r=a
u=this.a
if(u!=null)u.Y()}},
sdK:function(a){var u
if(!J.D(this.z,a)){this.z=a
u=this.a
if(u!=null)u.Y()}},
scZ:function(a){var u
if(!J.D(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.Y()}},
hA:function(a){var u,t,s=this
if(a.q(0,$.aZ())){u=s.f
t=[P.J]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.aY())){u=s.r
t=[P.J]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.aX())){u=s.x
t=[P.J]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.bj())){u=s.y
t=[P.J]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.q(0,$.bk())){u=s.z
t=[P.J]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.cJ())){u=s.Q
t=[P.J]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.cK())){u=s.Q
t=[P.J]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.q(0,$.bS()))return H.b([s.ch],[P.J])
else if(a.q(0,$.aW())){u=s.cx
t=[P.J]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.J])},
bO:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cp()
t.d.G(0,new F.j1(s))
s=s.a
t.r=s.v(0,Math.sqrt(s.E(s)))
s=t.a
if(s!=null){s.Y()
s=t.a.e
if(s!=null)s.af(0)}return!0},
bM:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cp()
t.d.G(0,new F.j0(s))
s=s.a
t.x=s.v(0,Math.sqrt(s.E(s)))
s=t.a
if(s!=null){s.Y()
s=t.a.e
if(s!=null)s.af(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
H:function(a){var u,t,s=this,r="-",q=H.b([],[P.h])
q.push(C.a.ac(J.a3(s.e),0))
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
q.push(V.I(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.i(0))
else q.push(r)
t=C.b.j(q,", ")
return a+"{"+t+"}"},
O:function(){return this.H("")}}
F.j1.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.w(0,t)}}}
F.j0.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.w(0,t)}}}
F.iS.prototype={
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
u.Y()
return!0},
fZ:function(a,b,c,d,e,f){var u=F.dK(a,null,b,c,d,e,f,null,0)
this.n(0,u)
return u},
gm:function(a){return this.c.length},
an:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)u[s].bO()
return!0},
bN:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)u[s].bM()
return!0},
h5:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.v(0,Math.sqrt(p*p+o*o+n*n))
if(!J.D(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.K(null)}}}}return!0},
i:function(a){return this.O()},
H:function(a){var u,t,s,r
this.u()
u=H.b([],[P.h])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.l)(t),++r)u.push(t[r].H(a))
return C.b.j(u,"\n")},
O:function(){return this.H("")}}
F.iT.prototype={
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
C.b.G(u.c,new F.iU(u,b))
C.b.G(u.d,new F.iV(u,b))},
i:function(a){return this.O()},
O:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].H(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].H(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].H(""))
return C.b.j(r,"\n")}}
F.iU.prototype={
$1:function(a){if(!J.D(a.a,this.a))this.b.$1(a)}}
F.iV.prototype={
$1:function(a){var u=this.a
if(!J.D(a.a,u)&&!J.D(a.b,u))this.b.$1(a)}}
F.iW.prototype={
gm:function(a){return this.b.length+this.c.length},
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
F.iY.prototype={}
F.iX.prototype={
aZ:function(a,b,c){return J.D(b.f,c.f)}}
F.iZ.prototype={}
F.ht.prototype={
b_:function(a){var u,t,s,r=V.cp()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null)r=new V.z(r.a+s.a,r.b+s.b,r.c+s.c)}r=r.v(0,Math.sqrt(r.E(r)))
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.l)(a),++t)a[t].sds(r)
return}}
F.j_.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.O()},
O:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].H(""))
return C.b.j(r,"\n")}}
O.da.prototype={
gB:function(){var u=this.fr
return u==null?this.fr=D.P():u},
a8:function(a){var u=this.fr
if(u!=null)u.K(a)},
eb:function(){return this.a8(null)},
cH:function(a){this.a=null
this.a8(a)},
fF:function(){return this.cH(null)},
eM:function(a,b){var u=new D.bu()
u.b=!0
this.a8(u)},
eO:function(a,b){var u=new D.bv()
u.b=!0
this.a8(u)},
cv:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=P.w
e=[e,e]
u=new H.H(e)
for(t=f.dx.e,s=t.length,r=0;r<t.length;t.length===s||(0,H.l)(t),++r){q=t[r]
p=q.gao()
o=u.h(0,q.gao())
u.l(0,p,o==null?1:o)}n=H.b([],[A.cP])
u.G(0,new O.h7(f,n))
C.b.aQ(n,new O.h8())
m=new H.H(e)
for(t=f.dx.f,s=t.length,r=0;r<t.length;t.length===s||(0,H.l)(t),++r){p=t[r].f!=null
o=p?1:0
l=m.h(0,p?1:0)
m.l(0,o,l==null?1:l)}k=H.b([],[A.cW])
m.G(0,new O.h9(f,k))
C.b.aQ(k,new O.ha())
j=new H.H(e)
for(t=f.dx.r,s=t.length,r=0;r<t.length;t.length===s||(0,H.l)(t),++r){q=t[r]
p=q.gao()
o=j.h(0,q.gao())
j.l(0,p,o==null?1:o)}i=H.b([],[A.dl])
j.G(0,new O.hb(f,i))
C.b.aQ(i,new O.hc())
h=new H.H(e)
for(e=f.dx.x,t=e.length,r=0;r<e.length;e.length===t||(0,H.l)(e),++r){q=e[r]
s=q.gao()
p=h.h(0,q.gao())
h.l(0,s,p==null?1:p)}g=H.b([],[A.ds])
h.G(0,new O.hd(f,g))
C.b.aQ(g,new O.he())
e=C.c.a3(f.e.a.length+3,4)
f.dy.e
return A.nb(!1,!1,!1,!1,e*4,f.f.c,f.r.c,f.x.c,f.y.c,f.z.c,f.Q.c,f.cx.c,f.cy.c,f.db.c,n,k,i,g)},
eh:function(a,b){if(b!=null)if(!C.b.D(a,b)){b.a=a.length
a.push(b)}},
aC:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.aa(u,u.length);u.t();){t=u.d
t.toString
s=$.iR
t.a=s==null?$.iR=new V.z(0,0,1):s
s=$.iQ
t.d=s==null?$.iQ=new V.z(0,1,0):s
s=$.iP
t.e=s==null?$.iP=new V.z(-1,0,0):s
s=t.b
if(s!=null){r=s.b5(0,b,t)
if(r!=null){s=r.bn(t.a)
q=s.a
p=s.b
o=s.c
t.a=s.v(0,Math.sqrt(q*q+p*p+o*o))
o=r.bn(t.d)
p=o.a
q=o.b
s=o.c
t.d=o.v(0,Math.sqrt(p*p+q*q+s*s))
s=r.bn(t.e)
q=s.a
p=s.b
o=s.c
t.e=s.v(0,Math.sqrt(q*q+p*p+o*o))}}}},
hX:function(b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.cv()
u=b4.fr.h(0,b3.aX)
if(u==null){u=A.na(b3,b4.a)
t=u.b
if(t.length===0)H.p(P.u("May not cache a shader with no name."))
if(b4.fr.bQ(0,t))H.p(P.u('Shader cache already contains a shader by the name "'+t+'".'))
b4.fr.l(0,t,u)}b3=b2.a=u
b5.e=null}s=b3.z
r=s.bg
b3=b5.e
if(!(b3 instanceof Z.cR))b3=b5.e=null
if(b3==null||!b3.d.q(0,r)){b3=s.k4
if(b3)b5.d.an()
q=s.r1
if(q){p=b5.d
o=p.e
if(o!=null)++o.d
p.d.bN()
p.a.bN()
p=p.e
if(p!=null)p.af(0)}p=s.rx
if(p){o=b5.d
n=o.e
if(n!=null)++n.d
o.a.h5()
o=o.e
if(o!=null)o.af(0)}m=b5.d.h4(new Z.j3(b4.a),r)
m.aM($.aZ()).e=b2.a.Q.c
if(b3)m.aM($.aY()).e=b2.a.cx.c
if(q)m.aM($.aX()).e=b2.a.ch.c
if(s.r2)m.aM($.bj()).e=b2.a.cy.c
if(p)m.aM($.bk()).e=b2.a.db.c
if(s.ry)m.aM($.aW()).e=b2.a.dx.c
b5.e=m}l=H.b([],[T.dy])
b3=b2.a
q=b4.a
q.useProgram(b3.r)
b3.x.hl()
if(s.fr){b3=b2.a
p=b4.dx
p=p.ga_(p)
b3=b3.dy
b3.toString
b3.ad(p.a7(0,!0))}if(s.fx){b3=b2.a
p=b4.cx
if(p==null){p=b4.db
p=p.ga_(p)
o=b4.dx
o=b4.cx=p.A(0,o.ga_(o))
p=o}b3=b3.fr
b3.toString
b3.ad(p.a7(0,!0))}b3=b2.a
p=b4.ch
if(p==null){p=b4.ghT()
o=b4.dx
o=b4.ch=p.A(0,o.ga_(o))
p=o}b3=b3.fy
b3.toString
b3.ad(p.a7(0,!0))
if(s.go){b3=b2.a
p=b4.db
p=p.ga_(p)
b3=b3.fx
b3.toString
b3.ad(p.a7(0,!0))}if(s.x1){b3=b2.a
p=b2.b
b3=b3.k1
b3.toString
b3.ad(C.j.a7(p,!0))}if(s.x2){b3=b2.a
p=b2.c
b3=b3.k2
b3.toString
b3.ad(C.j.a7(p,!0))}if(s.y1){b3=b2.a
p=b2.d
b3=b3.k3
b3.toString
b3.ad(C.j.a7(p,!0))}if(s.bf>0){k=b2.e.a.length
b3=b2.a.k4
b3.a.uniform1i(b3.d,k)
for(j=0;j<k;++j){b3=b2.a
p=b2.e.a
if(j>=p.length)return H.d(p,j)
p=p[j]
b3=b3.r1
if(j>=b3.length)return H.d(b3,j)
b3=b3[j]
i=new Float32Array(H.bL(p.a7(0,!0)))
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
b3=b3.bg
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}b3=s.e.a
if(!b3)p=!1
else p=!0
if(p){p=b2.a
o=b2.z.ch
p=p.d6
p.a.uniform1f(p.d,o)}if(b3){b3=b2.a
p=b2.z.f
b3=b3.d5
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}b3=s.z
if(b3.length>0){p=P.w
h=new H.H([p,p])
for(p=b2.dx.e,o=p.length,g=0;g<p.length;p.length===o||(0,H.l)(p),++g){f=p[g]
e=f.gao()
d=h.h(0,e)
if(d==null)d=0
h.l(0,e,d+1)
c=J.bT(b2.a.bU.h(0,e),d)
n=f.gie()
b=$.ay
n=n.b4(b==null?$.ay=new V.T(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gik()
b=$.ay
n=n.b4(b==null?$.ay=new V.T(0,0,0):b)
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gav(f)
b=c.d
b.a.uniform3f(b.d,n.a,n.b,n.c)
if(f.gd4()){n=f.gcW()
b=c.e
b.a.uniform1f(b.d,n)
n=f.gcX()
b=c.f
b.a.uniform1f(b.d,n)
n=f.gcY()
b=c.r
b.a.uniform1f(b.d,n)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.l)(b3),++g){o=b3[g].a
k=h.h(0,o)
if(k==null)k=0
o=b2.a.bT.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.Q
if(b3.length>0){p=b4.db
a=p.ga_(p)
p=P.w
a0=new H.H([p,p])
for(p=b2.dx.f,o=p.length,g=0;g<p.length;p.length===o||(0,H.l)(p),++g){f=p[g]
e=f.f!=null?1:0
d=a0.h(0,e)
if(d==null)d=0
a0.l(0,e,d+1)
c=J.bT(b2.a.bW.h(0,e),d)
n=a.bn(f.a)
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
n.a.uniform3f(n.d,a2.a,a2.b,a2.c)
if(f.f!=null){n=f.a
b=c.d
b.toString
a1=n.a
a2=n.b
n=n.c
b.a.uniform3f(b.d,a1,a2,n)
n=f.d
a2=c.b
a2.toString
a1=n.a
b=n.b
n=n.c
a2.a.uniform3f(a2.d,a1,b,n)
n=f.e
b=c.c
b.toString
a1=n.a
a2=n.b
n=n.c
b.a.uniform3f(b.d,a1,a2,n)
n=f.f
if(n!=null)if(!C.b.D(l,n)){n.a=l.length
l.push(n)}n=f.f
b=n!=null
if(b&&n.d){a1=c.r
a1.toString
if(!b||!n.d)a1.a.uniform1i(a1.d,0)
else{n=n.a
a1.a.uniform1i(a1.d,n)}}}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.l)(b3),++g){o=b3[g].a
k=a0.h(0,o)
if(k==null)k=0
o=b2.a.bV.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.ch
if(b3.length>0){p=b4.db
a=p.ga_(p)
p=P.w
a3=new H.H([p,p])
for(p=b2.dx.r,o=p.length,g=0;g<p.length;p.length===o||(0,H.l)(p),++g){f=p[g]
e=f.gao()
d=a3.h(0,e)
if(d==null)d=0
a3.l(0,e,d+1)
c=J.bT(b2.a.bY.h(0,e),d)
a4=a.A(0,f.ga_(f))
n=f.ga_(f)
b=$.ay
n=n.b4(b==null?$.ay=new V.T(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=$.ay
n=a4.b4(n==null?$.ay=new V.T(0,0,0):n)
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gav(f)
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
f.gaB()
n=a4.dl(0)
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
i=new Float32Array(H.bL(new V.dc(b,a1,a2,a5,a6,a7,a8,a9,n).a7(0,!0)))
b0.a.uniformMatrix3fv(b0.d,!1,i)
f.gaB()
n=f.gaB()
if(!C.b.D(l,n)){n.a=l.length
l.push(n)}n=f.gaB()
b=n.gaY(n)
if(b){b=c.f
b.toString
a1=n.gaY(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.ghv(n)
b.a.uniform1i(b.d,n)}}f.gaP()
n=f.gdT()
b=c.x
b.toString
a1=n.ghh(n)
a2=n.ghi(n)
a5=n.ghj()
n=n.ghg()
b.a.uniform4f(b.d,a1,a2,a5,n)
n=f.gaP()
if(!C.b.D(l,n)){n.a=l.length
l.push(n)}n=f.gaP()
b=n.gaY(n)
if(b){b=c.r
b.toString
a1=n.gaY(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.ghv(n)
b.a.uniform1i(b.d,n)}}if(f.gd4()){n=f.gcW()
b=c.y
b.a.uniform1f(b.d,n)
n=f.gcX()
b=c.z
b.a.uniform1f(b.d,n)
n=f.gcY()
b=c.Q
b.a.uniform1f(b.d,n)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.l)(b3),++g){o=b3[g].a
k=a3.h(0,o)
if(k==null)k=0
o=b2.a.bX.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.cx
if(b3.length>0){p=b4.db
a=p.ga_(p)
p=P.w
b1=new H.H([p,p])
for(p=b2.dx.x,o=p.length,g=0;g<p.length;p.length===o||(0,H.l)(p),++g){f=p[g]
e=f.gao()
d=b1.h(0,e)
if(d==null)d=0
b1.l(0,e,d+1)
c=J.bT(b2.a.c_.h(0,e),d)
n=f.ghS(f)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gii(f).iC()
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=a.b4(f.ghS(f))
b=c.d
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gav(f)
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
f.gaB()
n=f.giF()
b=c.f
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gcd(f)
b=c.r
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.giD()
b=c.x
b.a.uniform1f(b.d,n)
n=f.giE()
b=c.y
b.a.uniform1f(b.d,n)
f.gaB()
n=f.gaB()
if(!C.b.D(l,n)){n.a=l.length
l.push(n)}n=f.gaB()
b=n.gaY(n)
if(b){b=c.dx
b.toString
a1=n.d
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.a
b.a.uniform1i(b.d,n)}}f.gaP()
n=f.gdT()
b=c.z
b.toString
a1=n.ghh(n)
a2=n.ghi(n)
a5=n.ghj()
n=n.ghg()
b.a.uniform4f(b.d,a1,a2,a5,n)
n=f.gaP()
if(!C.b.D(l,n)){n.a=l.length
l.push(n)}n=f.gaP()
b=n.gaY(n)
if(b){b=c.dy
b.toString
a1=n.d
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.a
b.a.uniform1i(b.d,n)}}if(f.gij()){n=f.gih()
b=c.Q
b.a.uniform1f(b.d,n)
n=f.gig()
b=c.ch
b.a.uniform1f(b.d,n)}if(f.gd4()){n=f.gcW()
b=c.cx
b.a.uniform1f(b.d,n)
n=f.gcX()
b=c.cy
b.a.uniform1f(b.d,n)
n=f.gcY()
b=c.db
b.a.uniform1f(b.d,n)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.l)(b3),++g){o=b3[g].a
k=b1.h(0,o)
if(k==null)k=0
o=b2.a.bZ.h(0,o)
o.a.uniform1i(o.d,k)}}}if(s.dy){b3=b2.a
p=b4.Q
if(p==null){p=b4.db
p=b4.Q=p.ga_(p).dl(0)}b3=b3.id
b3.toString
b3.ad(p.a7(0,!0))}if(s.db){b2.eh(l,b2.ch)
b3=b2.a
p=b2.ch
b3.fJ(b3.d7,p)
if(s.r.a){b3=b2.a
p=b2.cx.f
b3=b3.d8
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}b3=s.x.a
if(!b3)p=!1
else p=!0
if(p){p=b2.a
o=b2.cy.ch
p=p.d9
p.a.uniform1f(p.d,o)}if(b3){b3=b2.a
p=b2.cy.f
b3=b3.da
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}}b3=s.y.a
p=!b3
if(p)o=!1
else o=!0
if(o){if(b3){b3=b2.a
o=b2.db.f
b3=b3.dc
b3.a.uniform1f(b3.d,o)}q.enable(3042)
q.blendFunc(770,771)}for(j=0;j<l.length;++j){b3=l[j]
if(!b3.c&&b3.d){b3.c=!0
q.activeTexture(33984+b3.a)
q.bindTexture(3553,b3.b)}}b3=b5.e
b3.bL(b4)
b3.aN(b4)
b3.i8(b4)
if(p)b3=!1
else b3=!0
if(b3)q.disable(3042)
for(j=0;j<l.length;++j){b3=l[j]
if(b3.c){b3.c=!1
q.activeTexture(33984+b3.a)
q.bindTexture(3553,null)}}b3=b2.a
b3.toString
q.useProgram(null)
b3.x.hf()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cv().aX}}
O.h7.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.cP(a,C.c.a3(b+3,4)*4))}}
O.h8.prototype={
$2:function(a,b){return J.cL(a.a,b.a)}}
O.h9.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.cW(a,C.c.a3(b+3,4)*4))}}
O.ha.prototype={
$2:function(a,b){return J.cL(a.a,b.a)}}
O.hb.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.dl(a,C.c.a3(b+3,4)*4))}}
O.hc.prototype={
$2:function(a,b){return J.cL(a.a,b.a)}}
O.hd.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.ds(a,C.c.a3(b+3,4)*4))}}
O.he.prototype={
$2:function(a,b){return J.cL(a.a,b.a)}}
O.h1.prototype={
at:function(){var u,t=this
t.cl()
u=t.f
if(!(Math.abs(u-1)<$.C().a)){t.f=1
u=new D.E(t.b,u,1)
u.b=!0
t.a.a8(u)}}}
O.db.prototype={
at:function(){},
cK:function(a){var u,t,s=this
if(!s.c.q(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.at()
u=s.a
u.a=null
u.a8(null)}}}
O.h2.prototype={}
O.au.prototype={
cJ:function(a){var u,t,s=this
if(!s.f.q(0,a)){u=s.f
s.f=a
t=new D.E(s.b+".color",u,a)
t.b=!0
s.a.a8(t)}},
at:function(){this.cl()
this.cJ(new V.W(1,1,1))},
sav:function(a,b){this.cK(new A.a_(!0,!1,!1))
this.cJ(b)}}
O.h4.prototype={}
O.h5.prototype={
at:function(){var u,t=this
t.cm()
u=t.ch
if(!(Math.abs(u-1)<$.C().a)){t.ch=1
u=new D.E(t.b+".refraction",u,1)
u.b=!0
t.a.a8(u)}}}
O.h6.prototype={
cL:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.C().a)){u.ch=a
t=new D.E(u.b+".shininess",t,a)
t.b=!0
u.a.a8(t)}},
at:function(){this.cm()
this.cL(100)}}
O.dx.prototype={}
T.dy.prototype={}
T.id.prototype={}
T.ie.prototype={
gB:function(){var u=this.y
return u==null?this.y=D.P():u}}
T.ig.prototype={
hB:function(a,b){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,10497)
r.texParameteri(s,10243,10497)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=document.createElement("img")
u.src=a
t=new T.ie()
t.a=0
t.b=q
t.d=t.c=!1
W.Y(u,"load",new T.ih(this,t,u,!1,q,!1,!1),!1)
return t},
fG:function(a,b,c){var u,t,s,r
b=V.l0(b)
u=V.l0(a.width)
t=V.l0(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.ku()
s.width=u
s.height=t
r=C.i.dQ(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.oM(r.getImageData(0,0,s.width,s.height))}}}
T.ih.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.fG(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.a5.i2(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.hk()}++s.e}}
X.kt.prototype={}
X.fx.prototype={
gB:function(){var u=this.x
return u==null?this.x=D.P():u}}
X.dk.prototype={
gB:function(){var u=this.f
return u==null?this.f=D.P():u},
aG:function(a){var u=this.f
if(u!=null)u.K(a)},
ee:function(){return this.aG(null)},
sb0:function(a){var u,t,s=this
if(!J.D(s.b,a)){u=s.b
if(u!=null)u.gB().L(0,s.gcq())
t=s.b
s.b=a
if(a!=null)a.gB().n(0,s.gcq())
u=new D.E("mover",t,s.b)
u.b=!0
s.aG(u)}}}
X.i9.prototype={}
V.cT.prototype={
b8:function(a){this.b=new P.fC(C.U)
this.c=null
this.d=H.b([],[[P.n,W.aj]])},
N:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)l.push(H.b([],[W.aj]))
u=a.split("\n")
for(l=u.length,t=[W.aj],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else m.d.push(H.b([],t))
p=document.createElement("div")
p.className="codePart"
o=m.b.ep(q,0,q.length)
n=o==null?q:o
C.S.dS(p,H.l2(n," ","&nbsp;"))
n=p.style
n.color=b
C.b.gap(m.d).push(p)}},
dB:function(a,b){var u,t,s,r=this
r.d=H.b([],[[P.n,W.aj]])
u=C.b.j(b,"\n")
t=r.c
if(t==null)t=r.c=r.be()
for(t.toString,s=new H.m(u),s=new P.bI(t.ce(new H.b6(s,s.gm(s))).a());s.t();)r.bl(s.gC(s))}}
V.kj.prototype={
$1:function(a){var u=C.d.dL(this.a.ghu(),2)
if(u!=="0.00")P.l1(u+" fps")}}
V.fc.prototype={
bl:function(a){var u=this
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
be:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=L.il()
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
t=new K.a5()
s=[K.b7]
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
t=new K.a5()
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
t.aA(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aA(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aA(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.fz.prototype={
bl:function(a){var u=this
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
be:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=L.il()
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
t=new K.a5()
s=[K.b7]
t.a=H.b([],s)
u.a.push(t)
u=K.t(new H.m("\n"))
t.a.push(u)
u=e.k(0,r).j(0,h)
t=K.t(new H.m("#"))
u.a.push(t)
t=e.k(0,h).j(0,h)
u=new K.a5()
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
u.aA(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aA(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aA(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return e}}
V.fA.prototype={
bl:function(a){var u=this,t="#111"
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
be:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=L.il()
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
t=new K.a5()
t.a=H.b([],[K.b7])
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
t.aA(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
t=l.k(0,q)
t.d=t.a.P(q)
t=l.k(0,m)
t.d=t.a.P(m)
return l}}
V.hz.prototype={
dB:function(a,b){this.d=H.b([],[[P.n,W.aj]])
this.N(C.b.j(b,"\n"),"#111")},
bl:function(a){},
be:function(){return}}
V.hE.prototype={
cS:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
if(m.c==null)return
u=m.a
t=P.lD().gc9().h(0,H.e(u))
if(t==null)if(d){c.$0()
m.cQ(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.l8(m.c).n(0,q)
o=W.mX("radio")
o.checked=s
o.name=u
W.Y(o,"change",new V.hF(m,o,c,b),!1)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.l8(m.c).n(0,r.createElement("br"))},
aU:function(a,b,c){return this.cS(a,b,c,!1)},
cQ:function(a){var u,t,s=P.lD(),r=P.h,q=P.n5(s.gc9(),r,r)
q.l(0,this.a,a)
u=s.dG(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.jw([],[]).bo(""),"",t)}}
V.hF.prototype={
$1:function(a){var u=this
if(u.b.checked){u.c.$0()
u.a.cQ(u.d)}}}
V.hU.prototype={
e5:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.Y(q,"scroll",new V.hW(o),!1)},
cU:function(a){var u,t,s,r,q,p,o,n
this.fM()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b,r=C.b.hz(a),s.toString,r=new H.m(r),r=new P.bI(s.ce(new H.b6(r,r.gm(r))).a());r.t();){s=r.gC(r)
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
if(H.mf(s,"|",0)){p=s.split("|")
o=u.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.d(p,1)
o.href=p[1]
o.textContent=p[0]
t.appendChild(o)}else{n=P.ex(C.z,s,C.e,!1)
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
dP:function(a){var u,t,s,r=new V.fc("dart")
r.b8("dart")
u=new V.fz("glsl")
u.b8("glsl")
t=new V.fA("html")
t.b8("html")
s=C.b.hq(H.b([r,u,t],[V.cT]),new V.hX(a))
if(s!=null)return s
r=new V.hz("plain")
r.b8("plain")
return r},
cT:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.b([],[P.w])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(J.cG(s).a2(s,"+")){b0[t]=C.a.a5(s,1)
a6.push(1)
u=!0}else if(C.a.a2(s,"-")){b0[t]=C.a.a5(s,1)
a6.push(-1)
u=!0}else a6.push(0)}r=this.dP(a8)
r.dB(0,b0)
q=document
p=q.createElement("div")
p.className="codeTableScroll"
o=q.createElement("table")
o.className="codeTable"
p.appendChild(o)
this.a.appendChild(p)
n=P.ex(C.z,a7,C.e,!1)
m=q.createElement("tr")
m.className="headerRow"
l=q.createElement("td")
l.className="headerCell"
l.colSpan=u?3:2
k=q.createElement("div")
k.className="tableHeader"
k.id=n
j=W.la()
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
fV:function(a){var u,t,s,r,q,p="auto",o=document,n=o.createElement("table")
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
fM:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=L.il()
u.d=u.k(0,q)
t=u.k(0,q).j(0,p)
s=K.t(new H.m("*"))
t.a.push(s)
t.c=!0
t=u.k(0,p).j(0,p)
s=new K.a5()
r=[K.b7]
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
s=new K.a5()
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
s=new K.a5()
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
t=new K.a5()
t.a=H.b([],r)
s.a.push(t)
s=K.t(new H.m("|]"))
t.a.push(s)
s=u.k(0,k).j(0,j)
t=K.t(new H.m("]"))
s.a.push(t)
s.c=!0
s=u.k(0,k).j(0,k)
t=new K.a5()
t.a=H.b([],r)
s.a.push(t)
s=K.t(new H.m("|]"))
t.a.push(s)
u.k(0,q).j(0,i).a.push(new K.aJ())
s=u.k(0,i).j(0,i)
t=new K.a5()
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
V.hW.prototype={
$1:function(a){P.lz(C.n,new V.hV(this.a))}}
V.hV.prototype={
$0:function(){var u=C.d.ag(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
V.hX.prototype={
$1:function(a){return a.a===this.a}}
M.kb.prototype={
$0:function(){this.a.sae(0,F.kW(1,null,null,1))}}
M.kc.prototype={
$0:function(){this.a.sae(0,F.m4(!0,40,1))}}
M.kd.prototype={
$0:function(){this.a.sae(0,F.m4(!1,40,0))}}
M.ke.prototype={
$0:function(){this.a.sae(0,F.p7(6,6))}}
M.kf.prototype={
$0:function(){this.a.sae(0,F.mh())}}
M.kg.prototype={
$0:function(){this.a.sae(0,F.p0())}}
M.kh.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.a,r=[P.h]
u.cT("Vertex Shader","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
t=t.a
u.cT("Fragment Shader","glsl",0,H.b((t==null?null:t.d).split("\n"),r))}};(function aliases(){var u=J.a.prototype
u.dX=u.i
u=J.d5.prototype
u.dZ=u.i
u=P.j.prototype
u.dY=u.bp
u=W.O.prototype
u.br=u.aa
u=W.ef.prototype
u.e_=u.am
u=K.d1.prototype
u.dW=u.ay
u.ck=u.i
u=O.db.prototype
u.cl=u.at
u=O.au.prototype
u.cm=u.at})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installStaticTearOff,q=hunkHelpers.installInstanceTearOff,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u,n=hunkHelpers._instance_1u,m=hunkHelpers._instance_0i
u(J,"ob","n0",20)
t(P,"oG","nK",7)
t(P,"oH","nL",7)
t(P,"oI","nM",7)
s(P,"m3","oE",9)
r(W,"oV",4,null,["$4"],["nN"],15,0)
r(W,"oW",4,null,["$4"],["nO"],15,0)
var l
q(l=E.aM.prototype,"gdz",0,0,null,["$1","$0"],["dA","hK"],0,0)
q(l,"gdv",0,0,null,["$1","$0"],["dw","hJ"],0,0)
q(l,"gdt",0,0,null,["$1","$0"],["du","hG"],0,0)
p(l,"ghE","hF",4)
p(l,"ghH","hI",4)
q(l=E.dz.prototype,"gcn",0,0,null,["$1","$0"],["cp","co"],0,0)
o(l,"ghZ","dH",9)
n(l=X.dI.prototype,"gf1","f2",5)
n(l,"geP","eQ",5)
n(l,"geW","eX",2)
n(l,"gf5","f6",10)
n(l,"gf3","f4",10)
n(l,"gf9","fa",2)
n(l,"gfd","fe",2)
n(l,"gf_","f0",2)
n(l,"gfb","fc",2)
n(l,"geY","eZ",2)
n(l,"gff","fg",18)
n(l,"gfh","fi",5)
n(l,"gfv","fw",6)
n(l,"gfq","fs",6)
n(l,"gft","fu",6)
q(D.bq.prototype,"gbC",0,0,null,["$1","$0"],["al","eR"],0,0)
q(l=D.d7.prototype,"gcF",0,0,null,["$1","$0"],["cG","f7"],0,0)
n(l,"gfk","fl",19)
p(l,"geJ","eK",11)
p(l,"gfo","fp",11)
m(V.U.prototype,"gm","c4",12)
m(V.z.prototype,"gm","c4",12)
q(l=U.c0.prototype,"gb9",0,0,null,["$1","$0"],["W","ai"],0,0)
p(l,"geH","eI",13)
p(l,"gfm","fn",13)
q(l=U.dJ.prototype,"gb9",0,0,null,["$1","$0"],["W","ai"],0,0)
n(l,"geB","eC",1)
n(l,"geD","eE",1)
n(l,"geF","eG",1)
n(l,"gew","ex",1)
n(l,"gey","ez",1)
n(l,"gfT","fU",1)
n(l,"gfR","fS",1)
n(l,"gfP","fQ",1)
q(l=M.cZ.prototype,"gaj",0,0,null,["$1","$0"],["ar","e8"],0,0)
p(l,"geS","eT",4)
p(l,"geU","eV",4)
q(l=O.da.prototype,"gea",0,0,null,["$1","$0"],["a8","eb"],0,0)
q(l,"gfE",0,0,null,["$1","$0"],["cH","fF"],0,0)
p(l,"geL","eM",14)
p(l,"geN","eO",14)
q(X.dk.prototype,"gcq",0,0,null,["$1","$0"],["aG","ee"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.a1,null)
s(P.a1,[H.kD,J.a,J.aa,P.e2,P.j,H.b6,P.fH,H.d_,H.iE,H.f4,H.ir,P.br,H.bW,H.ek,P.a0,H.fP,H.fR,H.fJ,P.eq,P.bH,P.bI,P.dM,P.dv,P.i5,P.dA,P.jO,P.jq,P.jk,P.e1,P.x,P.jG,P.fY,P.f1,P.fD,P.jM,P.jL,P.aG,P.ab,P.a9,P.b1,P.hx,P.dt,P.dV,P.fw,P.fy,P.n,P.Q,P.ba,P.h,P.R,P.bJ,P.iG,P.jt,W.f8,W.cs,W.K,W.di,W.ef,W.jA,W.d0,W.aR,W.jp,W.ey,P.jv,P.ev,P.jl,P.bD,K.aJ,K.d1,K.b7,K.hG,K.hP,L.du,L.dB,L.dC,L.ik,O.b0,O.c7,E.eY,E.aM,E.bo,E.by,E.dU,E.hH,E.dz,Z.dL,Z.j3,Z.cR,Z.bt,Z.bg,D.f0,D.bs,D.Z,X.cS,X.d6,X.fM,X.fV,X.bx,X.hl,X.im,X.dI,D.eV,D.bq,D.a4,D.hB,D.i0,V.W,V.ar,V.fn,V.dc,V.aP,V.a6,V.T,V.bc,V.dn,V.U,V.z,U.dJ,M.cZ,A.cO,A.eQ,A.a_,A.cP,A.cW,A.dl,A.ds,A.h3,A.ck,A.cl,A.cn,A.co,A.dF,A.iz,F.b2,F.fq,F.c4,F.fO,F.cc,F.hQ,F.hR,F.hS,F.hT,F.bf,F.iS,F.iT,F.iW,F.iY,F.iZ,F.j_,O.dx,O.db,O.h4,T.ig,X.kt,X.i9,X.dk,V.cT,V.hE,V.hU])
s(J.a,[J.fI,J.d4,J.d5,J.b3,J.c3,J.b4,H.c9,H.b9,W.f,W.eN,W.bm,W.as,W.G,W.dO,W.ag,W.fd,W.fe,W.dQ,W.cY,W.dS,W.fg,W.i,W.dW,W.at,W.fB,W.dY,W.aN,W.fU,W.hf,W.e3,W.e4,W.av,W.e5,W.e8,W.ax,W.ec,W.ee,W.aA,W.eg,W.aB,W.el,W.am,W.eo,W.ij,W.aD,W.er,W.ip,W.iL,W.ez,W.eB,W.eD,W.eF,W.eH,P.aO,P.e_,P.aS,P.ea,P.hD,P.em,P.aU,P.et,P.eR,P.dN,P.dp,P.ei])
s(J.d5,[J.hy,J.bG,J.b5])
t(J.kC,J.b3)
s(J.c3,[J.d3,J.d2])
t(P.fT,P.e2)
s(P.fT,[H.dG,W.ja,W.a2,P.fs])
t(H.m,H.dG)
s(P.j,[H.q,H.c6,H.cq,P.fF])
s(H.q,[H.d8,H.fQ])
t(H.fj,H.c6)
s(P.fH,[H.fZ,H.j4])
t(H.h_,H.d8)
t(H.f5,H.f4)
s(P.br,[H.hu,H.fL,H.iD,H.f_,H.hN,P.dj,P.ai,P.iF,P.iB,P.cg,P.f3,P.fb])
s(H.bW,[H.ko,H.ia,H.fK,H.k6,H.k7,H.k8,P.j6,P.j5,P.j7,P.j8,P.jF,P.jE,P.jX,P.jn,P.jo,P.fS,P.fX,P.fh,P.fi,P.iK,P.iH,P.iI,P.iJ,P.jH,P.jI,P.jK,P.jJ,P.jS,P.jR,P.jT,P.jU,W.fk,W.hh,W.hj,W.hM,W.i4,W.jf,W.hs,W.hr,W.jr,W.js,W.jD,W.jN,P.jx,P.jy,P.jY,P.ft,P.fu,P.eT,E.hI,E.hJ,E.hK,E.ii,D.fo,D.fp,F.jP,F.jZ,F.k0,F.k1,F.k2,F.kk,F.kl,F.kn,F.ka,F.k_,F.j1,F.j0,F.iU,F.iV,O.h7,O.h8,O.h9,O.ha,O.hb,O.hc,O.hd,O.he,T.ih,V.kj,V.hF,V.hW,V.hV,V.hX,M.kb,M.kc,M.kd,M.ke,M.kf,M.kg,M.kh])
s(H.ia,[H.i2,H.bU])
t(P.fW,P.a0)
s(P.fW,[H.H,W.j9])
t(H.de,H.b9)
s(H.de,[H.cu,H.cw])
t(H.cv,H.cu)
t(H.ca,H.cv)
t(H.cx,H.cw)
t(H.df,H.cx)
s(H.df,[H.hm,H.hn,H.ho,H.hp,H.hq,H.dg,H.cb])
t(P.jB,P.fF)
t(P.jm,P.jO)
t(P.jj,P.jq)
t(P.ew,P.fY)
t(P.dH,P.ew)
s(P.f1,[P.eW,P.fl])
t(P.f6,P.i5)
s(P.f6,[P.eX,P.fC,P.iO,P.iN])
t(P.iM,P.fl)
s(P.a9,[P.J,P.w])
s(P.ai,[P.bB,P.fE])
t(P.jc,P.bJ)
s(W.f,[W.B,W.fr,W.c8,W.az,W.cy,W.aC,W.an,W.cA,W.j2,W.cr,P.eU,P.bl])
s(W.B,[W.O,W.b_])
s(W.O,[W.o,P.k])
s(W.o,[W.eO,W.eP,W.bn,W.bp,W.aj,W.fv,W.c2,W.hO,W.dw,W.i7,W.i8,W.ci])
t(W.f7,W.as)
t(W.bX,W.dO)
s(W.ag,[W.f9,W.fa])
t(W.dR,W.dQ)
t(W.cX,W.dR)
t(W.dT,W.dS)
t(W.ff,W.dT)
t(W.ak,W.bm)
t(W.dX,W.dW)
t(W.c_,W.dX)
t(W.dZ,W.dY)
t(W.c1,W.dZ)
t(W.bd,W.i)
s(W.bd,[W.bw,W.aw,W.bC])
t(W.hg,W.e3)
t(W.hi,W.e4)
t(W.e6,W.e5)
t(W.hk,W.e6)
t(W.e9,W.e8)
t(W.dh,W.e9)
t(W.ed,W.ec)
t(W.hA,W.ed)
t(W.hL,W.ee)
t(W.cz,W.cy)
t(W.hZ,W.cz)
t(W.eh,W.eg)
t(W.i_,W.eh)
t(W.i3,W.el)
t(W.ep,W.eo)
t(W.ib,W.ep)
t(W.cB,W.cA)
t(W.ic,W.cB)
t(W.es,W.er)
t(W.io,W.es)
t(W.bh,W.aw)
t(W.eA,W.ez)
t(W.jb,W.eA)
t(W.dP,W.cY)
t(W.eC,W.eB)
t(W.jg,W.eC)
t(W.eE,W.eD)
t(W.e7,W.eE)
t(W.eG,W.eF)
t(W.ju,W.eG)
t(W.eI,W.eH)
t(W.jz,W.eI)
t(W.jd,W.j9)
t(W.je,P.dv)
t(W.jC,W.ef)
t(P.jw,P.jv)
t(P.a7,P.jl)
t(P.e0,P.e_)
t(P.fN,P.e0)
t(P.eb,P.ea)
t(P.hv,P.eb)
t(P.cf,P.k)
t(P.en,P.em)
t(P.i6,P.en)
t(P.eu,P.et)
t(P.iq,P.eu)
t(P.eS,P.dN)
t(P.hw,P.bl)
t(P.ej,P.ei)
t(P.i1,P.ej)
s(K.d1,[K.a5,L.dE])
s(E.eY,[Z.cQ,A.dq,T.dy])
s(D.Z,[D.bu,D.bv,D.E,X.hC])
s(X.hC,[X.d9,X.b8,X.dD])
s(O.b0,[D.d7,U.c0])
s(D.f0,[U.f2,U.al])
t(U.cU,U.al)
t(A.h0,A.dq)
s(A.dF,[A.be,A.iw,A.ix,A.iy,A.iu,A.V,A.iv,A.F,A.cj,A.iA,A.cm,A.ac,A.bE,A.bF])
t(F.hY,F.fq)
t(F.it,F.fO)
t(F.iX,F.iY)
t(F.ht,F.iZ)
t(O.da,O.dx)
s(O.db,[O.h1,O.h2,O.au])
s(O.au,[O.h5,O.h6])
t(T.id,T.dy)
t(T.ie,T.id)
t(X.fx,X.i9)
s(V.cT,[V.fc,V.fz,V.fA,V.hz])
u(H.dG,H.iE)
u(H.cu,P.x)
u(H.cv,H.d_)
u(H.cw,P.x)
u(H.cx,H.d_)
u(P.e2,P.x)
u(P.ew,P.jG)
u(W.dO,W.f8)
u(W.dQ,P.x)
u(W.dR,W.K)
u(W.dS,P.x)
u(W.dT,W.K)
u(W.dW,P.x)
u(W.dX,W.K)
u(W.dY,P.x)
u(W.dZ,W.K)
u(W.e3,P.a0)
u(W.e4,P.a0)
u(W.e5,P.x)
u(W.e6,W.K)
u(W.e8,P.x)
u(W.e9,W.K)
u(W.ec,P.x)
u(W.ed,W.K)
u(W.ee,P.a0)
u(W.cy,P.x)
u(W.cz,W.K)
u(W.eg,P.x)
u(W.eh,W.K)
u(W.el,P.a0)
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
u(P.dN,P.a0)
u(P.ei,P.x)
u(P.ej,W.K)})()
var v={mangledGlobalNames:{w:"int",J:"double",a9:"num",h:"String",aG:"bool",ba:"Null",n:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.Z]},{func:1,ret:-1,args:[D.Z]},{func:1,ret:-1,args:[W.aw]},{func:1,ret:P.ba,args:[,,]},{func:1,ret:-1,args:[P.w,[P.j,E.aM]]},{func:1,ret:-1,args:[W.i]},{func:1,ret:-1,args:[W.bC]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bw]},{func:1,ret:-1,args:[P.w,[P.j,D.a4]]},{func:1,ret:P.J},{func:1,ret:-1,args:[P.w,[P.j,U.al]]},{func:1,ret:-1,args:[P.w,[P.j,V.aP]]},{func:1,ret:P.aG,args:[W.O,P.h,P.h,W.cs]},{func:1,ret:P.ba,args:[,]},{func:1,ret:P.bD,args:[,,]},{func:1,ret:-1,args:[W.bh]},{func:1,ret:P.aG,args:[[P.j,D.a4]]},{func:1,ret:P.w,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.r=W.bn.prototype
C.i=W.bp.prototype
C.S=W.aj.prototype
C.V=J.a.prototype
C.b=J.b3.prototype
C.W=J.d2.prototype
C.c=J.d3.prototype
C.j=J.d4.prototype
C.d=J.c3.prototype
C.a=J.b4.prototype
C.X=J.b5.prototype
C.D=J.hy.prototype
C.a5=P.dp.prototype
C.E=W.dw.prototype
C.q=J.bG.prototype
C.F=W.bh.prototype
C.G=W.cr.prototype
C.H=new E.bo("Browser.chrome")
C.t=new E.bo("Browser.firefox")
C.u=new E.bo("Browser.edge")
C.I=new E.bo("Browser.other")
C.a7=new P.eX()
C.J=new P.eW()
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
C.e=new P.iM()
C.R=new P.iO()
C.f=new P.jm()
C.n=new P.b1(0)
C.T=new P.b1(5e6)
C.U=new P.fD("element",!1,!1,!1)
C.x=H.b(u([127,2047,65535,1114111]),[P.w])
C.k=H.b(u([0,0,32776,33792,1,10240,0,0]),[P.w])
C.Y=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.l=H.b(u([0,0,65490,45055,65535,34815,65534,18431]),[P.w])
C.m=H.b(u([0,0,26624,1023,65534,2047,65534,2047]),[P.w])
C.Z=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.y=H.b(u([]),[P.h])
C.a_=H.b(u([0,0,32722,12287,65534,34815,65534,18431]),[P.w])
C.z=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.w])
C.h=H.b(u([0,0,24576,1023,65534,34815,65534,18431]),[P.w])
C.A=H.b(u([0,0,32754,11263,65534,34815,65534,18431]),[P.w])
C.a0=H.b(u([0,0,32722,12287,65535,34815,65534,18431]),[P.w])
C.B=H.b(u([0,0,65490,12287,65535,34815,65534,18431]),[P.w])
C.o=H.b(u(["bind","if","ref","repeat","syntax"]),[P.h])
C.p=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])
C.a1=new H.f5(0,{},C.y,[P.h,P.h])
C.a2=new E.by("OperatingSystem.windows")
C.C=new E.by("OperatingSystem.mac")
C.a3=new E.by("OperatingSystem.linux")
C.a4=new E.by("OperatingSystem.other")
C.a6=new P.bH(null,2)})();(function staticFields(){$.aq=0
$.bV=null
$.lc=null
$.m9=null
$.m2=null
$.md=null
$.k3=null
$.k9=null
$.kZ=null
$.bM=null
$.cE=null
$.cF=null
$.kT=!1
$.ao=C.f
$.a8=[]
$.aL=null
$.ky=null
$.li=null
$.lh=null
$.ct=P.kF(P.h,P.fy)
$.fm=null
$.ln=null
$.lq=null
$.ay=null
$.lv=null
$.lH=null
$.lK=null
$.lJ=null
$.iP=null
$.iQ=null
$.iR=null
$.lI=null
$.lp=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pe","mj",function(){return H.m8("_$dart_dartClosure")})
u($,"pf","l4",function(){return H.m8("_$dart_js")})
u($,"pg","mk",function(){return H.aE(H.is({
toString:function(){return"$receiver$"}}))})
u($,"ph","ml",function(){return H.aE(H.is({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"pi","mm",function(){return H.aE(H.is(null))})
u($,"pj","mn",function(){return H.aE(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pm","mq",function(){return H.aE(H.is(void 0))})
u($,"pn","mr",function(){return H.aE(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pl","mp",function(){return H.aE(H.lB(null))})
u($,"pk","mo",function(){return H.aE(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"pp","mt",function(){return H.aE(H.lB(void 0))})
u($,"po","ms",function(){return H.aE(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"pD","l5",function(){return P.nJ()})
u($,"pq","mu",function(){return P.nF()})
u($,"pE","my",function(){return H.nc(H.bL(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.w])))})
u($,"pH","mA",function(){return P.nr("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"pI","mB",function(){return P.o9()})
u($,"pF","mz",function(){return P.ll(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)})
u($,"px","mx",function(){return Z.ah(0)})
u($,"pr","mv",function(){return Z.ah(511)})
u($,"pz","aZ",function(){return Z.ah(1)})
u($,"py","aY",function(){return Z.ah(2)})
u($,"pt","aX",function(){return Z.ah(4)})
u($,"pA","bj",function(){return Z.ah(8)})
u($,"pB","bk",function(){return Z.ah(16)})
u($,"pu","cJ",function(){return Z.ah(32)})
u($,"pv","cK",function(){return Z.ah(64)})
u($,"pw","mw",function(){return Z.ah(96)})
u($,"pC","bS",function(){return Z.ah(128)})
u($,"ps","aW",function(){return Z.ah(256)})
u($,"pd","mi",function(){return new V.fn(1e-9)})
u($,"pc","C",function(){return $.mi()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.c9,DataView:H.b9,ArrayBufferView:H.b9,Float32Array:H.ca,Float64Array:H.ca,Int16Array:H.hm,Int32Array:H.hn,Int8Array:H.ho,Uint16Array:H.hp,Uint32Array:H.hq,Uint8ClampedArray:H.dg,CanvasPixelArray:H.dg,Uint8Array:H.cb,HTMLAudioElement:W.o,HTMLBRElement:W.o,HTMLBaseElement:W.o,HTMLButtonElement:W.o,HTMLContentElement:W.o,HTMLDListElement:W.o,HTMLDataElement:W.o,HTMLDataListElement:W.o,HTMLDetailsElement:W.o,HTMLDialogElement:W.o,HTMLEmbedElement:W.o,HTMLFieldSetElement:W.o,HTMLHRElement:W.o,HTMLHeadElement:W.o,HTMLHeadingElement:W.o,HTMLHtmlElement:W.o,HTMLIFrameElement:W.o,HTMLInputElement:W.o,HTMLLIElement:W.o,HTMLLabelElement:W.o,HTMLLegendElement:W.o,HTMLLinkElement:W.o,HTMLMapElement:W.o,HTMLMediaElement:W.o,HTMLMenuElement:W.o,HTMLMetaElement:W.o,HTMLMeterElement:W.o,HTMLModElement:W.o,HTMLOListElement:W.o,HTMLObjectElement:W.o,HTMLOptGroupElement:W.o,HTMLOptionElement:W.o,HTMLOutputElement:W.o,HTMLParagraphElement:W.o,HTMLParamElement:W.o,HTMLPictureElement:W.o,HTMLPreElement:W.o,HTMLProgressElement:W.o,HTMLQuoteElement:W.o,HTMLScriptElement:W.o,HTMLShadowElement:W.o,HTMLSlotElement:W.o,HTMLSourceElement:W.o,HTMLSpanElement:W.o,HTMLStyleElement:W.o,HTMLTableCaptionElement:W.o,HTMLTableCellElement:W.o,HTMLTableDataCellElement:W.o,HTMLTableHeaderCellElement:W.o,HTMLTableColElement:W.o,HTMLTextAreaElement:W.o,HTMLTimeElement:W.o,HTMLTitleElement:W.o,HTMLTrackElement:W.o,HTMLUListElement:W.o,HTMLUnknownElement:W.o,HTMLVideoElement:W.o,HTMLDirectoryElement:W.o,HTMLFontElement:W.o,HTMLFrameElement:W.o,HTMLFrameSetElement:W.o,HTMLMarqueeElement:W.o,HTMLElement:W.o,AccessibleNodeList:W.eN,HTMLAnchorElement:W.eO,HTMLAreaElement:W.eP,Blob:W.bm,HTMLBodyElement:W.bn,HTMLCanvasElement:W.bp,CDATASection:W.b_,CharacterData:W.b_,Comment:W.b_,ProcessingInstruction:W.b_,Text:W.b_,CSSPerspective:W.f7,CSSCharsetRule:W.G,CSSConditionRule:W.G,CSSFontFaceRule:W.G,CSSGroupingRule:W.G,CSSImportRule:W.G,CSSKeyframeRule:W.G,MozCSSKeyframeRule:W.G,WebKitCSSKeyframeRule:W.G,CSSKeyframesRule:W.G,MozCSSKeyframesRule:W.G,WebKitCSSKeyframesRule:W.G,CSSMediaRule:W.G,CSSNamespaceRule:W.G,CSSPageRule:W.G,CSSRule:W.G,CSSStyleRule:W.G,CSSSupportsRule:W.G,CSSViewportRule:W.G,CSSStyleDeclaration:W.bX,MSStyleCSSProperties:W.bX,CSS2Properties:W.bX,CSSImageValue:W.ag,CSSKeywordValue:W.ag,CSSNumericValue:W.ag,CSSPositionValue:W.ag,CSSResourceValue:W.ag,CSSUnitValue:W.ag,CSSURLImageValue:W.ag,CSSStyleValue:W.ag,CSSMatrixComponent:W.as,CSSRotation:W.as,CSSScale:W.as,CSSSkew:W.as,CSSTranslation:W.as,CSSTransformComponent:W.as,CSSTransformValue:W.f9,CSSUnparsedValue:W.fa,DataTransferItemList:W.fd,HTMLDivElement:W.aj,DOMException:W.fe,ClientRectList:W.cX,DOMRectList:W.cX,DOMRectReadOnly:W.cY,DOMStringList:W.ff,DOMTokenList:W.fg,Element:W.O,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.ak,FileList:W.c_,FileWriter:W.fr,HTMLFormElement:W.fv,Gamepad:W.at,History:W.fB,HTMLCollection:W.c1,HTMLFormControlsCollection:W.c1,HTMLOptionsCollection:W.c1,ImageData:W.aN,HTMLImageElement:W.c2,KeyboardEvent:W.bw,Location:W.fU,MediaList:W.hf,MessagePort:W.c8,MIDIInputMap:W.hg,MIDIOutputMap:W.hi,MimeType:W.av,MimeTypeArray:W.hk,PointerEvent:W.aw,MouseEvent:W.aw,DragEvent:W.aw,Document:W.B,DocumentFragment:W.B,HTMLDocument:W.B,ShadowRoot:W.B,XMLDocument:W.B,Attr:W.B,DocumentType:W.B,Node:W.B,NodeList:W.dh,RadioNodeList:W.dh,Plugin:W.ax,PluginArray:W.hA,RTCStatsReport:W.hL,HTMLSelectElement:W.hO,SourceBuffer:W.az,SourceBufferList:W.hZ,SpeechGrammar:W.aA,SpeechGrammarList:W.i_,SpeechRecognitionResult:W.aB,Storage:W.i3,CSSStyleSheet:W.am,StyleSheet:W.am,HTMLTableElement:W.dw,HTMLTableRowElement:W.i7,HTMLTableSectionElement:W.i8,HTMLTemplateElement:W.ci,TextTrack:W.aC,TextTrackCue:W.an,VTTCue:W.an,TextTrackCueList:W.ib,TextTrackList:W.ic,TimeRanges:W.ij,Touch:W.aD,TouchEvent:W.bC,TouchList:W.io,TrackDefaultList:W.ip,CompositionEvent:W.bd,FocusEvent:W.bd,TextEvent:W.bd,UIEvent:W.bd,URL:W.iL,VideoTrackList:W.j2,WheelEvent:W.bh,Window:W.cr,DOMWindow:W.cr,CSSRuleList:W.jb,ClientRect:W.dP,DOMRect:W.dP,GamepadList:W.jg,NamedNodeMap:W.e7,MozNamedAttrMap:W.e7,SpeechRecognitionResultList:W.ju,StyleSheetList:W.jz,SVGLength:P.aO,SVGLengthList:P.fN,SVGNumber:P.aS,SVGNumberList:P.hv,SVGPointList:P.hD,SVGScriptElement:P.cf,SVGStringList:P.i6,SVGAElement:P.k,SVGAnimateElement:P.k,SVGAnimateMotionElement:P.k,SVGAnimateTransformElement:P.k,SVGAnimationElement:P.k,SVGCircleElement:P.k,SVGClipPathElement:P.k,SVGDefsElement:P.k,SVGDescElement:P.k,SVGDiscardElement:P.k,SVGEllipseElement:P.k,SVGFEBlendElement:P.k,SVGFEColorMatrixElement:P.k,SVGFEComponentTransferElement:P.k,SVGFECompositeElement:P.k,SVGFEConvolveMatrixElement:P.k,SVGFEDiffuseLightingElement:P.k,SVGFEDisplacementMapElement:P.k,SVGFEDistantLightElement:P.k,SVGFEFloodElement:P.k,SVGFEFuncAElement:P.k,SVGFEFuncBElement:P.k,SVGFEFuncGElement:P.k,SVGFEFuncRElement:P.k,SVGFEGaussianBlurElement:P.k,SVGFEImageElement:P.k,SVGFEMergeElement:P.k,SVGFEMergeNodeElement:P.k,SVGFEMorphologyElement:P.k,SVGFEOffsetElement:P.k,SVGFEPointLightElement:P.k,SVGFESpecularLightingElement:P.k,SVGFESpotLightElement:P.k,SVGFETileElement:P.k,SVGFETurbulenceElement:P.k,SVGFilterElement:P.k,SVGForeignObjectElement:P.k,SVGGElement:P.k,SVGGeometryElement:P.k,SVGGraphicsElement:P.k,SVGImageElement:P.k,SVGLineElement:P.k,SVGLinearGradientElement:P.k,SVGMarkerElement:P.k,SVGMaskElement:P.k,SVGMetadataElement:P.k,SVGPathElement:P.k,SVGPatternElement:P.k,SVGPolygonElement:P.k,SVGPolylineElement:P.k,SVGRadialGradientElement:P.k,SVGRectElement:P.k,SVGSetElement:P.k,SVGStopElement:P.k,SVGStyleElement:P.k,SVGSVGElement:P.k,SVGSwitchElement:P.k,SVGSymbolElement:P.k,SVGTSpanElement:P.k,SVGTextContentElement:P.k,SVGTextElement:P.k,SVGTextPathElement:P.k,SVGTextPositioningElement:P.k,SVGTitleElement:P.k,SVGUseElement:P.k,SVGViewElement:P.k,SVGGradientElement:P.k,SVGComponentTransferFunctionElement:P.k,SVGFEDropShadowElement:P.k,SVGMPathElement:P.k,SVGElement:P.k,SVGTransform:P.aU,SVGTransformList:P.iq,AudioBuffer:P.eR,AudioParamMap:P.eS,AudioTrackList:P.eU,AudioContext:P.bl,webkitAudioContext:P.bl,BaseAudioContext:P.bl,OfflineAudioContext:P.hw,WebGL2RenderingContext:P.dp,SQLResultSetRowList:P.i1})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.de.$nativeSuperclassTag="ArrayBufferView"
H.cu.$nativeSuperclassTag="ArrayBufferView"
H.cv.$nativeSuperclassTag="ArrayBufferView"
H.ca.$nativeSuperclassTag="ArrayBufferView"
H.cw.$nativeSuperclassTag="ArrayBufferView"
H.cx.$nativeSuperclassTag="ArrayBufferView"
H.df.$nativeSuperclassTag="ArrayBufferView"
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
if(typeof dartMainRunner==="function")dartMainRunner(M.mb,[])
else M.mb([])})})()
//# sourceMappingURL=test.dart.js.map
