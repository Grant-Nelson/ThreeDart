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
a[c]=function(){a[c]=function(){H.mF(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jq"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jq"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jq(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jd:function jd(){},
l7:function(a,b,c,d){if(!!a.$in)return new H.eG(a,b,[c,d])
return new H.bI(a,b,[c,d])},
f3:function(){return new P.bQ("No element")},
l1:function(){return new P.bQ("Too many elements")},
lr:function(a,b){var u=J.aM(a)
if(typeof u!=="number")return u.P()
H.cZ(a,0,u-1,b)},
cZ:function(a,b,c,d){if(c-b<=32)H.lq(a,b,c,d)
else H.lp(a,b,c,d)},
lq:function(a,b,c,d){var u,t,s,r,q,p
for(u=b+1,t=J.e9(a);u<=c;++u){s=t.h(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.h(a,r-1),s)
if(typeof q!=="number")return q.S()
q=q>0}else q=!1
if(!q)break
p=r-1
t.m(a,r,t.h(a,p))
r=p}t.m(a,r,s)}},
lp:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j=C.d.T(a5-a4+1,6),i=a4+j,h=a5-j,g=C.d.T(a4+a5,2),f=g-j,e=g+j,d=J.e9(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.S()
if(a2>0){u=b
b=c
c=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.S()
if(a2>0){u=a1
a1=a0
a0=u}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.S()
if(a2>0){u=a
a=c
c=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.S()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.S()
if(a2>0){u=a0
a0=c
c=u}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.S()
if(a2>0){u=a0
a0=a
a=u}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.S()
if(a2>0){u=a1
a1=b
b=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.S()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.S()
if(a2>0){u=a1
a1=a0
a0=u}d.m(a3,i,c)
d.m(a3,g,a)
d.m(a3,h,a1)
d.m(a3,f,d.h(a3,a4))
d.m(a3,e,d.h(a3,a5))
t=a4+1
s=a5-1
if(J.K(a6.$2(b,a0),0)){for(r=t;r<=s;++r){q=d.h(a3,r)
p=a6.$2(q,b)
if(p===0)continue
if(typeof p!=="number")return p.am()
if(p<0){if(r!==t){d.m(a3,r,d.h(a3,t))
d.m(a3,t,q)}++t}else for(;!0;){p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.S()
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
if(typeof l!=="number")return l.am()
if(l<0){if(r!==t){d.m(a3,r,d.h(a3,t))
d.m(a3,t,q)}++t}else{k=a6.$2(q,a0)
if(typeof k!=="number")return k.S()
if(k>0)for(;!0;){p=a6.$2(d.h(a3,s),a0)
if(typeof p!=="number")return p.S()
if(p>0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.am()
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
H.cZ(a3,a4,t-2,a6)
H.cZ(a3,s+2,a5,a6)
if(m)return
if(t<i&&s>h){for(;J.K(a6.$2(d.h(a3,t),b),0);)++t
for(;J.K(a6.$2(d.h(a3,s),a0),0);)--s
for(r=t;r<=s;++r){q=d.h(a3,r)
if(a6.$2(q,b)===0){if(r!==t){d.m(a3,r,d.h(a3,t))
d.m(a3,t,q)}++t}else if(a6.$2(q,a0)===0)for(;!0;)if(a6.$2(d.h(a3,s),a0)===0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.am()
o=s-1
if(p<0){d.m(a3,r,d.h(a3,t))
n=t+1
d.m(a3,t,d.h(a3,s))
d.m(a3,s,q)
t=n}else{d.m(a3,r,d.h(a3,s))
d.m(a3,s,q)}s=o
break}}H.cZ(a3,t,s,a6)}else H.cZ(a3,t,s,a6)},
k:function k(a){this.a=a},
n:function n(){},
cG:function cG(){},
aX:function aX(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bI:function bI(a,b,c){this.a=a
this.b=b
this.$ti=c},
eG:function eG(a,b,c){this.a=a
this.b=b
this.$ti=c},
cH:function cH(a,b){this.a=null
this.b=a
this.c=b},
fk:function fk(a,b,c){this.a=a
this.b=b
this.$ti=c},
c_:function c_(a,b,c){this.a=a
this.b=b
this.$ti=c},
ic:function ic(a,b){this.a=a
this.b=b},
cw:function cw(){},
hS:function hS(){},
db:function db(){},
ce:function(a){var u,t=H.mH(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
mo:function(a){return v.types[a]},
mv:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.P(a).$iv},
d:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aa(a)
if(typeof u!=="string")throw H.c(H.b6(a))
return u},
bN:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bO:function(a){return H.la(a)+H.kf(H.cd(a),0,null)},
la:function(a){var u,t,s,r,q,p,o,n=J.P(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.H||!!n.$ibo){r=C.n(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.ce(t.length>1&&C.b.aE(t,0)===36?C.b.a4(t,1):t)},
jW:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
lj:function(a){var u,t,s,r=H.b([],[P.x])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.p)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.b6(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.d.aQ(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.c(H.b6(s))}return H.jW(r)},
li:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.b6(s))
if(s<0)throw H.c(H.b6(s))
if(s>65535)return H.lj(a)}return H.jW(a)},
jh:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.aQ(u,10))>>>0,56320|u&1023)}throw H.c(P.az(a,0,1114111,null,null))},
bj:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lh:function(a){var u=H.bj(a).getFullYear()+0
return u},
lf:function(a){var u=H.bj(a).getMonth()+1
return u},
lb:function(a){var u=H.bj(a).getDate()+0
return u},
lc:function(a){var u=H.bj(a).getHours()+0
return u},
le:function(a){var u=H.bj(a).getMinutes()+0
return u},
lg:function(a){var u=H.bj(a).getSeconds()+0
return u},
ld:function(a){var u=H.bj(a).getMilliseconds()+0
return u},
Z:function(a){throw H.c(H.b6(a))},
f:function(a,b){if(a==null)J.aM(a)
throw H.c(H.bu(a,b))},
bu:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ab(!0,b,s,null)
u=J.aM(a)
if(!(b<0)){if(typeof u!=="number")return H.Z(u)
t=b>=u}else t=!0
if(t)return P.G(b,a,s,null,u)
return P.cV(b,s)},
mi:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bk(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bk(a,c,!0,b,"end",u)
return new P.ab(!0,b,"end",null)},
b6:function(a){return new P.ab(!0,a,null,null)},
c:function(a){var u
if(a==null)a=new P.cQ()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.kr})
u.name=""}else u.toString=H.kr
return u},
kr:function(){return J.aa(this.dartException)},
u:function(a){throw H.c(a)},
p:function(a){throw H.c(P.aP(a))},
al:function(a){var u,t,s,r,q,p
a=H.kq(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.m])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hG(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hH:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
k3:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
jS:function(a,b){return new H.fR(a,b==null?null:b.method)},
je:function(a,b){var u=b==null,t=u?null:b.method
return new H.f9(a,t,u?null:b.receiver)},
ap:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.j2(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.aQ(t,16)&8191)===10)switch(s){case 438:return f.$1(H.je(H.d(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.jS(H.d(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.ku()
q=$.kv()
p=$.kw()
o=$.kx()
n=$.kA()
m=$.kB()
l=$.kz()
$.ky()
k=$.kD()
j=$.kC()
i=r.a_(u)
if(i!=null)return f.$1(H.je(u,i))
else{i=q.a_(u)
if(i!=null){i.method="call"
return f.$1(H.je(u,i))}else{i=p.a_(u)
if(i==null){i=o.a_(u)
if(i==null){i=n.a_(u)
if(i==null){i=m.a_(u)
if(i==null){i=l.a_(u)
if(i==null){i=o.a_(u)
if(i==null){i=k.a_(u)
if(i==null){i=j.a_(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.jS(u,i))}}return f.$1(new H.hR(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.d0()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.ab(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.d0()
return a},
jt:function(a){var u
if(a==null)return new H.dO(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dO(a)},
mm:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.m(0,a[u],a[t])}return b},
mu:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.q("Unsupported number of arguments for wrapped closure"))},
bt:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mu)
a.$identity=u
return u},
kV:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hm().constructor.prototype):Object.create(new H.bx(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ac
if(typeof t!=="number")return t.H()
$.ac=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.jH(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.kR(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.jH(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
kR:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.mo,a)
if(typeof a=="function")if(b)return a
else{u=c?H.jF:H.j4
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.c("Error in functionType of tearoff")},
kS:function(a,b,c,d){var u=H.j4
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jH:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.kU(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.kS(t,!r,u,b)
if(t===0){r=$.ac
if(typeof r!=="number")return r.H()
$.ac=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.by
return new Function(r+H.d(q==null?$.by=H.eo("self"):q)+";return "+p+"."+H.d(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ac
if(typeof r!=="number")return r.H()
$.ac=r+1
o+=r
r="return function("+o+"){return this."
q=$.by
return new Function(r+H.d(q==null?$.by=H.eo("self"):q)+"."+H.d(u)+"("+o+");}")()},
kT:function(a,b,c,d){var u=H.j4,t=H.jF
switch(b?-1:a){case 0:throw H.c(H.ln("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
kU:function(a,b){var u,t,s,r,q,p,o,n=$.by
if(n==null)n=$.by=H.eo("self")
u=$.jE
if(u==null)u=$.jE=H.eo("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.kT(s,!q,t,b)
if(s===1){n="return function(){return this."+H.d(n)+"."+H.d(t)+"(this."+H.d(u)+");"
u=$.ac
if(typeof u!=="number")return u.H()
$.ac=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.d(n)+"."+H.d(t)+"(this."+H.d(u)+", "+o+");"
u=$.ac
if(typeof u!=="number")return u.H()
$.ac=u+1
return new Function(n+u+"}")()},
jq:function(a,b,c,d,e,f,g){return H.kV(a,b,c,d,!!e,!!f,g)},
j4:function(a){return a.a},
jF:function(a){return a.c},
eo:function(a){var u,t,s,r=new H.bx("self","target","receiver","name"),q=J.jb(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
mz:function(a,b){throw H.c(H.kQ(a,H.ce(b.substring(2))))},
r:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.P(a)[b]
else u=!0
if(u)return a
H.mz(a,b)},
mk:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
kQ:function(a,b){return new H.ep("CastError: "+P.j9(a)+": type '"+H.d(H.mc(a))+"' is not a subtype of type '"+b+"'")},
mc:function(a){var u,t=J.P(a)
if(!!t.$ibz){u=H.mk(t)
if(u!=null)return H.mA(u)
return"Closure"}return H.bO(a)},
mF:function(a){throw H.c(new P.ey(a))},
ln:function(a){return new H.h6(a)},
kl:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
cd:function(a){if(a==null)return
return a.$ti},
nd:function(a,b,c){return H.j0(a["$a"+H.d(c)],H.cd(b))},
mn:function(a,b,c,d){var u=H.j0(a["$a"+H.d(c)],H.cd(b))
return u==null?null:u[d]},
js:function(a,b,c){var u=H.j0(a["$a"+H.d(b)],H.cd(a))
return u==null?null:u[c]},
a9:function(a,b){var u=H.cd(a)
return u==null?null:u[b]},
mA:function(a){return H.b5(a,null)},
b5:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.ce(a[0].name)+H.kf(a,1,b)
if(typeof a=="function")return H.ce(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.d(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.f(b,t)
return H.d(b[t])}if('func' in a)return H.lI(a,b)
if('futureOr' in a)return"FutureOr<"+H.b5("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lI:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.b([],[P.m])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.f(a0,m)
p=C.b.H(p,a0[m])
l=u[q]
if(l!=null&&l!==P.S)p+=" extends "+H.b5(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.b5(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.b5(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.b5(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.ml(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.b5(d[c],a0)+(" "+H.d(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
kf:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.ai("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.b5(p,c)}return"<"+u.i(0)+">"},
j0:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
nb:function(a,b,c){return a.apply(b,H.j0(J.P(b)["$a"+H.d(c)],H.cd(b)))},
nc:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
mw:function(a){var u,t,s,r,q=$.km.$1(a),p=$.iR[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.iX[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.ki.$2(a,q)
if(q!=null){p=$.iR[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.iX[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.iZ(u)
$.iR[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.iX[q]=u
return u}if(s==="-"){r=H.iZ(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.ko(a,u)
if(s==="*")throw H.c(P.k4(q))
if(v.leafTags[q]===true){r=H.iZ(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.ko(a,u)},
ko:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jv(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
iZ:function(a){return J.jv(a,!1,null,!!a.$iv)},
mx:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.iZ(u)
else return J.jv(u,c,null,null)},
ms:function(){if(!0===$.ju)return
$.ju=!0
H.mt()},
mt:function(){var u,t,s,r,q,p,o,n
$.iR=Object.create(null)
$.iX=Object.create(null)
H.mr()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.kp.$1(q)
if(p!=null){o=H.mx(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
mr:function(){var u,t,s,r,q,p,o=C.v()
o=H.bs(C.w,H.bs(C.x,H.bs(C.o,H.bs(C.o,H.bs(C.y,H.bs(C.z,H.bs(C.A(C.n),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.km=new H.iU(r)
$.ki=new H.iV(q)
$.kp=new H.iW(p)},
bs:function(a,b){return a(b)||b},
l4:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.c(new P.eU("Illegal RegExp pattern ("+String(p)+")",a))},
mC:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
mj:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
kq:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
jx:function(a,b,c){var u=H.mD(a,b,c)
return u},
mD:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.kq(b),'g'),H.mj(c))},
hG:function hG(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fR:function fR(a,b){this.a=a
this.b=b},
f9:function f9(a,b,c){this.a=a
this.b=b
this.c=c},
hR:function hR(a){this.a=a},
j2:function j2(a){this.a=a},
dO:function dO(a){this.a=a
this.b=null},
bz:function bz(){},
hu:function hu(){},
hm:function hm(){},
bx:function bx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ep:function ep(a){this.a=a},
h6:function h6(a){this.a=a},
E:function E(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
f8:function f8(a){this.a=a},
fd:function fd(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bi:function bi(a,b){this.a=a
this.$ti=b},
fe:function fe(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
iU:function iU(a){this.a=a},
iV:function iV(a){this.a=a},
iW:function iW(a){this.a=a},
f7:function f7(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ca:function(a){return a},
am:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bu(b,a))},
lH:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.mi(a,b,c))
return b},
bM:function bM(){},
cL:function cL(){},
bL:function bL(){},
cM:function cM(){},
fI:function fI(){},
fJ:function fJ(){},
fK:function fK(){},
fL:function fL(){},
fM:function fM(){},
cN:function cN(){},
fN:function fN(){},
c2:function c2(){},
c3:function c3(){},
c4:function c4(){},
c5:function c5(){},
ml:function(a){return J.jM(a?Object.keys(a):[],null)},
mH:function(a){return v.mangledGlobalNames[a]},
my:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jv:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iT:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.ju==null){H.ms()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.k4("Return interceptor for "+H.d(u(a,q))))}s=a.constructor
r=s==null?null:s[$.jz()]
if(r!=null)return r
r=H.mw(a)
if(r!=null)return r
if(typeof a=="function")return C.I
u=Object.getPrototypeOf(a)
if(u==null)return C.q
if(u===Object.prototype)return C.q
if(typeof s=="function"){Object.defineProperty(s,$.jz(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
l2:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.j3(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.az(a,0,4294967295,"length",null))
return J.jM(new Array(a),b)},
jM:function(a,b){return J.jb(H.b(a,[b]))},
jb:function(a){a.fixed$length=Array
return a},
l3:function(a,b){return J.ci(a,b)},
P:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cA.prototype
return J.f6.prototype}if(typeof a=="string")return J.aU.prototype
if(a==null)return J.cB.prototype
if(typeof a=="boolean")return J.f5.prototype
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aV.prototype
return a}if(a instanceof P.S)return a
return J.iT(a)},
e9:function(a){if(typeof a=="string")return J.aU.prototype
if(a==null)return a
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aV.prototype
return a}if(a instanceof P.S)return a
return J.iT(a)},
iS:function(a){if(a==null)return a
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aV.prototype
return a}if(a instanceof P.S)return a
return J.iT(a)},
kk:function(a){if(typeof a=="number")return J.bF.prototype
if(typeof a=="string")return J.aU.prototype
if(a==null)return a
if(!(a instanceof P.S))return J.bo.prototype
return a},
jr:function(a){if(typeof a=="string")return J.aU.prototype
if(a==null)return a
if(!(a instanceof P.S))return J.bo.prototype
return a},
ea:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aV.prototype
return a}if(a instanceof P.S)return a
return J.iT(a)},
K:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.P(a).n(a,b)},
jB:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.kk(a).L(a,b)},
ch:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mv(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.e9(a).h(a,b)},
kJ:function(a,b,c){return J.ea(a).eu(a,b,c)},
kK:function(a,b,c,d){return J.ea(a).eI(a,b,c,d)},
ci:function(a,b){return J.kk(a).aw(a,b)},
ec:function(a,b){return J.iS(a).t(a,b)},
kL:function(a,b){return J.iS(a).A(a,b)},
kM:function(a){return J.ea(a).geM(a)},
ed:function(a){return J.P(a).gF(a)},
aL:function(a){return J.iS(a).gJ(a)},
aM:function(a){return J.e9(a).gl(a)},
jC:function(a){return J.iS(a).fq(a)},
kN:function(a,b){return J.ea(a).fv(a,b)},
kO:function(a,b,c){return J.jr(a).aM(a,b,c)},
kP:function(a){return J.jr(a).fE(a)},
aa:function(a){return J.P(a).i(a)},
a:function a(){},
f5:function f5(){},
cB:function cB(){},
cC:function cC(){},
fV:function fV(){},
bo:function bo(){},
aV:function aV(){},
aT:function aT(a){this.$ti=a},
jc:function jc(a){this.$ti=a},
a0:function a0(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bF:function bF(){},
cA:function cA(){},
f6:function f6(){},
aU:function aU(){}},P={
lw:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.md()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bt(new P.ie(s),1)).observe(u,{childList:true})
return new P.id(s,u,t)}else if(self.setImmediate!=null)return P.me()
return P.mf()},
lx:function(a){self.scheduleImmediate(H.bt(new P.ig(a),0))},
ly:function(a){self.setImmediate(H.bt(new P.ih(a),0))},
lz:function(a){P.jk(C.h,a)},
jk:function(a,b){var u=C.d.T(a.a,1000)
return P.lF(u<0?0:u,b)},
k2:function(a,b){var u=C.d.T(a.a,1000)
return P.lG(u<0?0:u,b)},
lF:function(a,b){var u=new P.dU()
u.df(a,b)
return u},
lG:function(a,b){var u=new P.dU()
u.dg(a,b)
return u},
n9:function(a){return new P.bp(a,1)},
lC:function(){return C.M},
lD:function(a){return new P.bp(a,3)},
lL:function(a,b){return new P.iE(a,[b])},
m6:function(){var u,t
for(;u=$.br,u!=null;){$.cc=null
t=u.b
$.br=t
if(t==null)$.cb=null
u.a.$0()}},
mb:function(){$.jo=!0
try{P.m6()}finally{$.cc=null
$.jo=!1
if($.br!=null)$.jA().$1(P.kj())}},
m9:function(a){var u=new P.de(a)
if($.br==null){$.br=$.cb=u
if(!$.jo)$.jA().$1(P.kj())}else $.cb=$.cb.b=u},
ma:function(a){var u,t,s=$.br
if(s==null){P.m9(a)
$.cc=$.cb
return}u=new P.de(a)
t=$.cc
if(t==null){u.b=s
$.br=$.cc=u}else{u.b=t.b
$.cc=t.b=u
if(u.b==null)$.cb=u}},
k1:function(a,b){var u=$.a8
if(u===C.e)return P.jk(a,b)
return P.jk(a,u.eN(b))},
lt:function(a,b){var u=$.a8
if(u===C.e)return P.k2(a,b)
return P.k2(a,u.cb(b,P.d6))},
kg:function(a,b,c,d,e){var u={}
u.a=d
P.ma(new P.iO(u,e))},
m7:function(a,b,c,d){var u,t=$.a8
if(t===c)return d.$0()
$.a8=c
u=t
try{t=d.$0()
return t}finally{$.a8=u}},
m8:function(a,b,c,d,e){var u,t=$.a8
if(t===c)return d.$1(e)
$.a8=c
u=t
try{t=d.$1(e)
return t}finally{$.a8=u}},
ie:function ie(a){this.a=a},
id:function id(a,b,c){this.a=a
this.b=b
this.c=c},
ig:function ig(a){this.a=a},
ih:function ih(a){this.a=a},
dU:function dU(){this.c=0},
iI:function iI(a,b){this.a=a
this.b=b},
iH:function iH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bp:function bp(a,b){this.a=a
this.b=b},
bq:function bq(a){var _=this
_.a=a
_.d=_.c=_.b=null},
iE:function iE(a,b){this.a=a
this.$ti=b},
de:function de(a){this.a=a
this.b=null},
d2:function d2(){},
hp:function hp(){},
d6:function d6(){},
iL:function iL(){},
iO:function iO(a,b){this.a=a
this.b=b},
iu:function iu(){},
iv:function iv(a,b){this.a=a
this.b=b},
iw:function iw(a,b,c){this.a=a
this.b=b
this.c=c},
jN:function(a,b){return new H.E([a,b])},
l5:function(a){return H.mm(a,new H.E([null,null]))},
bG:function(a){return new P.ir([a])},
jn:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
lE:function(a,b){var u=new P.dv(a,b)
u.c=a.e
return u},
l0:function(a,b,c){var u,t
if(P.jp(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.m])
$.Y.push(a)
try{P.lK(a,u)}finally{if(0>=$.Y.length)return H.f($.Y,-1)
$.Y.pop()}t=P.k_(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
ja:function(a,b,c){var u,t
if(P.jp(a))return b+"..."+c
u=new P.ai(b)
$.Y.push(a)
try{t=u
t.a=P.k_(t.a,a,", ")}finally{if(0>=$.Y.length)return H.f($.Y,-1)
$.Y.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jp:function(a){var u,t
for(u=$.Y.length,t=0;t<u;++t)if(a===$.Y[t])return!0
return!1},
lK:function(a,b){var u,t,s,r,q,p,o,n=a.gJ(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.p())return
u=H.d(n.gu(n))
b.push(u)
m+=u.length+2;++l}if(!n.p()){if(l<=5)return
if(0>=b.length)return H.f(b,-1)
t=b.pop()
if(0>=b.length)return H.f(b,-1)
s=b.pop()}else{r=n.gu(n);++l
if(!n.p()){if(l<=4){b.push(H.d(r))
return}t=H.d(r)
if(0>=b.length)return H.f(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gu(n);++l
for(;n.p();r=q,q=p){p=n.gu(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.f(b,-1)
m-=b.pop().length+2;--l}b.push("...")
return}}s=H.d(r)
t=H.d(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.f(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)b.push(o)
b.push(s)
b.push(t)},
jO:function(a,b){var u,t,s=P.bG(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.p)(a),++t)s.q(0,a[t])
return s},
jP:function(a){var u,t={}
if(P.jp(a))return"{...}"
u=new P.ai("")
try{$.Y.push(a)
u.a+="{"
t.a=!0
J.kL(a,new P.fj(t,u))
u.a+="}"}finally{if(0>=$.Y.length)return H.f($.Y,-1)
$.Y.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
ir:function ir(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
is:function is(a){this.a=a
this.c=this.b=null},
dv:function dv(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
f2:function f2(){},
ff:function ff(){},
t:function t(){},
fi:function fi(){},
fj:function fj(a,b){this.a=a
this.b=b},
R:function R(){},
iy:function iy(){},
dw:function dw(){},
er:function er(){},
et:function et(){},
eI:function eI(){},
f0:function f0(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
f_:function f_(a){this.a=a},
hV:function hV(){},
hW:function hW(){},
iJ:function iJ(a){this.b=0
this.c=a},
kZ:function(a){if(a instanceof H.bz)return a.i(0)
return"Instance of '"+H.d(H.bO(a))+"'"},
l6:function(a,b,c){var u,t,s=J.l2(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
jf:function(a,b,c){var u,t=H.b([],[c])
for(u=J.aL(a);u.p();)t.push(u.gu(u))
if(b)return t
return J.jb(t)},
jj:function(a){var u,t=a.length,s=P.ji(0,null,t)
if(typeof s!=="number")return s.am()
u=s<t
return H.li(u?C.a.cW(a,0,s):a)},
lk:function(a){return new H.f7(a,H.l4(a,!1,!0,!1,!1,!1))},
k_:function(a,b,c){var u=J.aL(b)
if(!u.p())return a
if(c.length===0){do a+=H.d(u.gu(u))
while(u.p())}else{a+=H.d(u.gu(u))
for(;u.p();)a=a+c+H.d(u.gu(u))}return a},
ke:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.f){u=$.kI().b
u=u.test(b)}else u=!1
if(u)return b
t=C.C.eR(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.f(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.jh(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
kW:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
kX:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cr:function(a){if(a>=10)return""+a
return"0"+a},
jJ:function(a){return new P.aR(1000*a)},
j9:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aa(a)
if(typeof a==="string")return JSON.stringify(a)
return P.kZ(a)},
j3:function(a,b,c){return new P.ab(!0,a,b,c)},
cV:function(a,b){return new P.bk(null,null,!0,a,b,"Value not in range")},
az:function(a,b,c,d,e){return new P.bk(b,c,!0,a,d,"Invalid value")},
ji:function(a,b,c){var u
if(typeof a!=="number")return H.Z(a)
if(0<=a){if(typeof c!=="number")return H.Z(c)
u=a>c}else u=!0
if(u)throw H.c(P.az(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.Z(c)
u=b>c}else u=!0
if(u)throw H.c(P.az(b,a,c,"end",null))
return b}return c},
jX:function(a,b){if(typeof a!=="number")return a.am()
if(a<0)throw H.c(P.az(a,0,null,b,null))},
G:function(a,b,c,d,e){var u=e==null?J.aM(b):e
return new P.f1(u,!0,a,c,"Index out of range")},
w:function(a){return new P.hT(a)},
k4:function(a){return new P.hQ(a)},
jZ:function(a){return new P.bQ(a)},
aP:function(a){return new P.es(a)},
q:function(a){return new P.dm(a)},
jw:function(a){H.my(a)},
an:function an(){},
aQ:function aQ(a,b){this.a=a
this.b=b},
J:function J(){},
aR:function aR(a){this.a=a},
eE:function eE(){},
eF:function eF(){},
be:function be(){},
cQ:function cQ(){},
ab:function ab(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bk:function bk(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
f1:function f1(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hT:function hT(a){this.a=a},
hQ:function hQ(a){this.a=a},
bQ:function bQ(a){this.a=a},
es:function es(a){this.a=a},
fU:function fU(){},
d0:function d0(){},
ey:function ey(a){this.a=a},
dm:function dm(a){this.a=a},
eU:function eU(a,b){this.a=a
this.b=b},
eW:function eW(){},
x:function x(){},
j:function j(){},
f4:function f4(){},
a6:function a6(){},
bH:function bH(){},
aZ:function aZ(){},
a3:function a3(){},
S:function S(){},
m:function m(){},
ai:function ai(a){this.a=a},
aG:function(a){var u,t,s,r,q
if(a==null)return
u=P.jN(P.m,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.p)(t),++r){q=t[r]
u.m(0,q,a[q])}return u},
mg:function(a){var u={}
a.A(0,new P.iP(u))
return u},
iP:function iP(a){this.a=a},
eQ:function eQ(a,b){this.a=a
this.b=b},
eR:function eR(){},
eS:function eS(){},
it:function it(){},
a7:function a7(){},
aW:function aW(){},
fb:function fb(){},
b_:function b_(){},
fS:function fS(){},
fZ:function fZ(){},
bP:function bP(){},
hq:function hq(){},
i:function i(){},
b0:function b0(){},
hF:function hF(){},
dt:function dt(){},
du:function du(){},
dE:function dE(){},
dF:function dF(){},
dQ:function dQ(){},
dR:function dR(){},
dX:function dX(){},
dY:function dY(){},
ei:function ei(){},
ej:function ej(){},
ek:function ek(a){this.a=a},
el:function el(){},
b9:function b9(){},
fT:function fT(){},
df:function df(){},
hl:function hl(){},
dM:function dM(){},
dN:function dN(){}},W={
jD:function(){var u=document.createElement("a")
return u},
jG:function(){var u=document.createElement("canvas")
return u},
kY:function(a,b,c){var u=document.body,t=(u&&C.m).Z(u,a,b,c)
t.toString
u=new H.c_(new W.U(t),new W.eH(),[W.y])
return u.gan(u)},
j7:function(a){return"wheel"},
bB:function(a){var u,t,s,r="element tag unavailable"
try{u=J.ea(a)
t=u.gcJ(a)
if(typeof t==="string")r=u.gcJ(a)}catch(s){H.ap(s)}return r},
iq:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kc:function(a,b,c,d){var u=W.iq(W.iq(W.iq(W.iq(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
O:function(a,b,c,d){var u=W.kh(new W.io(c),W.h)
if(u!=null&&!0)J.kK(a,b,u,!1)
return new W.im(a,b,u,!1)},
kb:function(a){var u=W.jD(),t=window.location
u=new W.c1(new W.ix(u,t))
u.d7(a)
return u},
lA:function(a,b,c,d){return!0},
lB:function(a,b,c,d){var u,t=d.a,s=t.a
s.href=c
u=s.hostname
t=t.b
if(!(u==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(u==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
kd:function(){var u=P.m,t=P.jO(C.j,u),s=H.b(["TEMPLATE"],[u])
t=new W.iF(t,P.bG(u),P.bG(u),P.bG(u),null)
t.dc(null,new H.fk(C.j,new W.iG(),[H.a9(C.j,0),u]),s,null)
return t},
kh:function(a,b){var u=$.a8
if(u===C.e)return a
return u.cb(a,b)},
l:function l(){},
ee:function ee(){},
ef:function ef(){},
eg:function eg(){},
cl:function cl(){},
ba:function ba(){},
bb:function bb(){},
aN:function aN(){},
eu:function eu(){},
D:function D(){},
bA:function bA(){},
ev:function ev(){},
a1:function a1(){},
ad:function ad(){},
ew:function ew(){},
ex:function ex(){},
eA:function eA(){},
a4:function a4(){},
eB:function eB(){},
ct:function ct(){},
cu:function cu(){},
eC:function eC(){},
eD:function eD(){},
ij:function ij(a,b){this.a=a
this.b=b},
L:function L(){},
eH:function eH(){},
h:function h(){},
e:function e(){},
as:function as(){},
eO:function eO(){},
eP:function eP(){},
eT:function eT(){},
at:function at(){},
eZ:function eZ(){},
bC:function bC(){},
bh:function bh(){},
fg:function fg(){},
fA:function fA(){},
fB:function fB(){},
fC:function fC(a){this.a=a},
fD:function fD(){},
fE:function fE(a){this.a=a},
aw:function aw(){},
fF:function fF(){},
af:function af(){},
U:function U(a){this.a=a},
y:function y(){},
cO:function cO(){},
ay:function ay(){},
fX:function fX(){},
h4:function h4(){},
h5:function h5(a){this.a=a},
h7:function h7(){},
aA:function aA(){},
hi:function hi(){},
aB:function aB(){},
hj:function hj(){},
aC:function aC(){},
hn:function hn(){},
ho:function ho(a){this.a=a},
aj:function aj(){},
d3:function d3(){},
hr:function hr(){},
hs:function hs(){},
bR:function bR(){},
aD:function aD(){},
ak:function ak(){},
hv:function hv(){},
hw:function hw(){},
hz:function hz(){},
aE:function aE(){},
bl:function bl(){},
hD:function hD(){},
hE:function hE(){},
b1:function b1(){},
hU:function hU(){},
ia:function ia(){},
b4:function b4(){},
c0:function c0(){},
ik:function ik(){},
dh:function dh(){},
ip:function ip(){},
dB:function dB(){},
iB:function iB(){},
iC:function iC(){},
ii:function ii(){},
il:function il(a){this.a=a},
im:function im(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
io:function io(a){this.a=a},
c1:function c1(a){this.a=a},
F:function F(){},
cP:function cP(a){this.a=a},
fP:function fP(a){this.a=a},
fO:function fO(a,b,c){this.a=a
this.b=b
this.c=c},
dJ:function dJ(){},
iz:function iz(){},
iA:function iA(){},
iF:function iF(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
iG:function iG(){},
iD:function iD(){},
cx:function cx(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
ax:function ax(){},
ix:function ix(a,b){this.a=a
this.b=b},
dZ:function dZ(a){this.a=a},
iK:function iK(a){this.a=a},
dg:function dg(){},
di:function di(){},
dj:function dj(){},
dk:function dk(){},
dl:function dl(){},
dn:function dn(){},
dp:function dp(){},
dr:function dr(){},
ds:function ds(){},
dx:function dx(){},
dy:function dy(){},
dz:function dz(){},
dA:function dA(){},
dC:function dC(){},
dD:function dD(){},
dG:function dG(){},
dH:function dH(){},
dI:function dI(){},
c6:function c6(){},
c7:function c7(){},
dK:function dK(){},
dL:function dL(){},
dP:function dP(){},
dS:function dS(){},
dT:function dT(){},
c8:function c8(){},
c9:function c9(){},
dV:function dV(){},
dW:function dW(){},
e_:function e_(){},
e0:function e0(){},
e1:function e1(){},
e2:function e2(){},
e3:function e3(){},
e4:function e4(){},
e5:function e5(){},
e6:function e6(){},
e7:function e7(){},
e8:function e8(){}},K={
H:function(a,b){var u,t,s
if(a.length!==1||b.length!==1)throw H.c(P.q("The given low and high character strings for a Range must have one and only one characters."))
u=C.b.aE(a,0)
t=C.b.aE(b,0)
if(u>t){s=t
t=u
u=s}return new K.h_(u,t)},
o:function(a){var u=new K.h8()
u.d4(a)
return u},
aq:function aq(){},
cy:function cy(){},
aY:function aY(){},
X:function X(){this.a=null},
h_:function h_(a,b){this.a=a
this.b=b},
h8:function h8(){this.a=null}},L={
hB:function(){var u=new L.hA(),t=P.m
u.a=new H.E([t,L.d1])
u.b=new H.E([t,L.d8])
u.c=P.bG(t)
return u},
d1:function d1(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
d7:function d7(a,b,c){this.a=a
this.b=b
this.c=c},
d8:function d8(a){this.b=a
this.c=null},
hA:function hA(){var _=this
_.d=_.c=_.b=_.a=null},
d9:function d9(a){this.b=a
this.a=this.c=null}},O={
j6:function(a){var u=new O.bc([a])
u.bG(a)
return u},
bc:function bc(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bJ:function bJ(){this.b=this.a=null},
cI:function cI(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fs:function fs(a,b){this.a=a
this.b=b},
ft:function ft(){},
fu:function fu(a,b){this.a=a
this.b=b},
fv:function fv(){},
fw:function fw(a,b){this.a=a
this.b=b},
fx:function fx(){},
fy:function fy(a,b){this.a=a
this.b=b},
fz:function fz(){},
fm:function fm(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cJ:function cJ(){},
fn:function fn(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
ae:function ae(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fp:function fp(){var _=this
_.e=_.d=_.c=_.b=null},
fq:function fq(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fr:function fr(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
d4:function d4(){}},E={
lm:function(a,b){var u=new E.h0(a)
u.d3(a,b)
return u},
ls:function(a,b,c,d,e){var u,t,s=J.P(a)
if(!!s.$ibb)return E.k0(a,!0,!0,!0,!1)
u=W.jG()
t=u.style
t.width="100%"
t.height="100%"
s.gcc(a).q(0,u)
return E.k0(u,!0,!0,!0,!1)},
k0:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.d5(),p=C.D.cQ(a,"webgl2",P.l5(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.u(P.q("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.lm(p,a)
p.getParameter(3379)
p.getParameter(34076)
u=new X.dc(a)
t=new X.fa()
t.d=P.bG(P.x)
u.b=t
t=new X.fG(u)
t.f=0
t.r=V.cT()
t.x=V.cT()
t.ch=t.Q=1
u.c=t
t=new X.fh(u)
t.r=0
t.x=V.cT()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hC(u)
t.f=V.cT()
t.r=V.cT()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.b([],[[P.d2,P.S]])
u.z=t
s=document
t.push(W.O(s,"contextmenu",u.gdQ(),!1))
u.z.push(W.O(a,"focus",u.gdW(),!1))
u.z.push(W.O(a,"blur",u.gdK(),!1))
u.z.push(W.O(s,"keyup",u.ge_(),!1))
u.z.push(W.O(s,"keydown",u.gdY(),!1))
u.z.push(W.O(a,"mousedown",u.ge3(),!1))
u.z.push(W.O(a,"mouseup",u.ge7(),!1))
u.z.push(W.O(a,r,u.ge5(),!1))
t=u.z
W.j7(a)
W.j7(a)
t.push(W.O(a,W.j7(a),u.ge9(),!1))
u.z.push(W.O(s,r,u.gdS(),!1))
u.z.push(W.O(s,"mouseup",u.gdU(),!1))
u.z.push(W.O(s,"pointerlockchange",u.geb(),!1))
u.z.push(W.O(a,"touchstart",u.gem(),!1))
u.z.push(W.O(a,"touchend",u.gei(),!1))
u.z.push(W.O(a,"touchmove",u.gek(),!1))
q.ch=!0
q.cx=!1
q.cy=new P.aQ(Date.now(),!1)
q.db=0
q.bX()
return q},
en:function en(){},
aS:function aS(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h0:function h0(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
h1:function h1(a){this.a=a},
h2:function h2(a){this.a=a},
h3:function h3(a){this.a=a},
d5:function d5(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.e=_.d=_.c=_.b=null},
hy:function hy(a){this.a=a}},Z={
lv:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.ca(c)),35044)
a.bindBuffer(b,null)
return new Z.dd(b,u)},
a2:function(a){return new Z.b3(a)},
dd:function dd(a,b){this.a=a
this.b=b},
cm:function cm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
ib:function ib(a){this.a=a},
cn:function cn(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
cz:function cz(a,b,c){this.a=a
this.b=b
this.c=c},
b3:function b3(a){this.a=a}},D={
a5:function(){var u=new D.bf()
u.d=0
return u},
eq:function eq(){},
bf:function bf(){var _=this
_.d=_.c=_.b=_.a=null},
eK:function eK(a){this.a=a},
eL:function eL(a){this.a=a},
V:function V(){this.b=null},
bD:function bD(){this.b=null},
bE:function bE(){this.b=null},
I:function I(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
em:function em(){},
bd:function bd(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
W:function W(){},
cE:function cE(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
fY:function fY(){},
hk:function hk(){}},X={co:function co(a,b){this.a=a
this.b=b},cD:function cD(a,b){this.a=a
this.b=b},fa:function fa(){this.d=this.b=this.a=null},fh:function fh(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bK:function bK(a,b,c){this.a=a
this.b=b
this.c=c},fG:function fG(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},hC:function hC(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dc:function dc(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
l_:function(a){var u=new X.eV(),t=V.ao(1)
u.a=new V.aO(0,0,0,t)
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.jY
if(t==null){t=V.ll(0,0,1,1)
$.jY=t}u.r=t
return u},
j5:function j5(){},
eV:function eV(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cR:function cR(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
ht:function ht(){},
kn:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="testCanvas",f=null,e=V.lo("Test 003"),d=W.jG()
d.className="pageLargeCanvas"
d.id=g
e.a.appendChild(d)
u=[P.m]
e.c6(H.b(["A test of the Material Light Shader with a solid color directional lighting."],u))
e.c6(H.b(["\xab[Back to Tests|../]"],u))
t=new E.aS()
t.a=""
t.b=!0
u=E.aS
s=O.j6(u)
t.y=s
s.b2(t.gfa(),t.gfd())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sbB(0,f)
t.saI(f)
t.sbB(0,F.mG())
s=new U.cX()
s.r=s.f=s.e=s.d=s.c=s.b=s.a=0
s.scO(0)
s.scD(0,0)
s.scI(0)
r=s.d
if(!(Math.abs(r-0.1)<$.A().a)){s.d=0.1
r=new D.I("deltaYaw",r,0.1)
r.b=!0
s.ar(r)}r=s.e
if(!(Math.abs(r-0.21)<$.A().a)){s.e=0.21
r=new D.I("deltaPitch",r,0.21)
r.b=!0
s.ar(r)}r=s.f
if(!(Math.abs(r-0.32)<$.A().a)){s.f=0.32
r=new D.I("deltaRoll",r,0.32)
r.b=!0
s.ar(r)}t.saI(s)
q=new O.cI()
s=O.j6(V.au)
q.e=s
s.b2(q.gdG(),q.gdI())
s=new O.ae(q,"emission")
s.c=new A.Q(!1,!1,!1)
s.f=new V.N(0,0,0)
q.f=s
s=new O.ae(q,"ambient")
s.c=new A.Q(!1,!1,!1)
s.f=new V.N(0,0,0)
q.r=s
s=new O.ae(q,"diffuse")
s.c=new A.Q(!1,!1,!1)
s.f=new V.N(0,0,0)
q.x=s
s=new O.ae(q,"invDiffuse")
s.c=new A.Q(!1,!1,!1)
s.f=new V.N(0,0,0)
q.y=s
s=new O.fr(q,"specular")
s.c=new A.Q(!1,!1,!1)
s.f=new V.N(0,0,0)
s.ch=100
q.z=s
s=new O.fn(q,"bump")
s.c=new A.Q(!1,!1,!1)
q.Q=s
q.ch=null
s=new O.ae(q,"reflect")
s.c=new A.Q(!1,!1,!1)
s.f=new V.N(0,0,0)
q.cx=s
s=new O.fq(q,"refract")
s.c=new A.Q(!1,!1,!1)
s.f=new V.N(0,0,0)
s.ch=1
q.cy=s
s=new O.fm(q,"alpha")
s.c=new A.Q(!1,!1,!1)
s.f=1
q.db=s
s=new D.cE()
s.bG(D.W)
s.e=H.b([],[D.em])
s.f=H.b([],[D.bd])
s.r=H.b([],[D.fY])
s.x=H.b([],[D.hk])
s.z=s.y=null
s.bA(s.gdE(),s.gee(),s.geg())
q.dx=s
r=new O.fp()
r.b=new V.aO(0,0,0,0)
r.c=1
r.d=10
r.e=!1
q.dy=r
r=s.y
s=r==null?s.y=D.a5():r
s.q(0,q.gew())
s=q.dx
r=s.z
s=r==null?s.z=D.a5():r
s.q(0,q.gdd())
q.fr=null
s=q.dx
p=V.jm()
r=U.jI(V.jQ(V.jV(),p,new V.C(1,1,-3)))
o=new V.N(1,1,1)
n=new D.bd()
n.c=new V.N(1,1,1)
n.a=V.k9()
n.d=V.jm()
n.e=V.lu()
m=n.b
n.b=r
r.gw().q(0,n.gd8())
r=new D.I("mover",m,n.b)
r.b=!0
n.a8(r)
if(!n.c.n(0,o)){m=n.c
n.c=o
r=new D.I("color",m,o)
r.b=!0
n.a8(r)}s.q(0,n)
q.r.sav(0,new V.N(V.ao(0),V.ao(0),V.ao(1)))
q.x.sav(0,new V.N(V.ao(0),V.ao(1),V.ao(0)))
q.z.sav(0,new V.N(V.ao(1),V.ao(0),V.ao(0)))
s=q.z
s.bZ(new A.Q(!0,!1,!1))
s.c_(10)
l=new M.cv()
l.a=!0
u=O.j6(u)
l.e=u
u.b2(l.gdM(),l.gdO())
l.y=l.x=l.r=l.f=null
k=X.l_(f)
j=new X.cR()
j.c=1.0471975511965976
j.d=0.1
j.e=2000
j.saI(f)
u=j.c
if(!(Math.abs(u-1.0471975511965976)<$.A().a)){j.c=1.0471975511965976
u=new D.I("fov",u,1.0471975511965976)
u.b=!0
j.ap(u)}u=j.d
if(!(Math.abs(u-0.1)<$.A().a)){j.d=0.1
u=new D.I("near",u,0.1)
u.b=!0
j.ap(u)}u=j.e
if(!(Math.abs(u-2000)<$.A().a)){j.e=2000
u=new D.I("far",u,2000)
u.b=!0
j.ap(u)}u=l.b
if(u!==j){if(u!=null)u.gw().M(0,l.ga5())
m=l.b
l.b=j
j.gw().q(0,l.ga5())
u=new D.I("camera",m,l.b)
u.b=!0
l.a9(u)}u=l.c
if(u!==k){if(u!=null)u.gw().M(0,l.ga5())
m=l.c
l.c=k
k.gw().q(0,l.ga5())
u=new D.I("target",m,l.c)
u.b=!0
l.a9(u)}l.scK(f)
l.scK(q)
l.e.q(0,t)
l.b.saI(U.jI(V.av(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
i=document.getElementById(g)
if(i==null)H.u(P.q("Failed to find an element with the identifier, testCanvas."))
h=E.ls(i,!0,!0,!0,!1)
u=h.d
if(u!==l){if(u!=null)u.gw().M(0,h.gbH())
h.d=l
l.gw().q(0,h.gbH())
h.bI()}u=h.Q
if(u==null)u=h.Q=D.a5()
s=u.b
u=s==null?u.b=H.b([],[{func:1,ret:-1,args:[D.V]}]):s
u.push(new X.iY(e,q))
V.mB(h)},
iY:function iY(a,b){this.a=a
this.b=b}},V={
ao:function(a){var u
if(a<0)u=0
else u=a>1?1:a
return u},
jy:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.cR(a-b,u)
return(a<0?a+u:a)+b},
z:function(a,b,c){if(a==null)return C.b.ai("null",c)
return C.b.ai(C.c.cL(Math.abs(a-0)<$.A().a?0:a,b),c+b+1)},
bv:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.m])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.p)(a),++s){r=V.z(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.f(o,q)
u=C.b.ai(o[q],t)
p=o.length
if(q>=p)return H.f(o,q)
o[q]=u}return o},
jg:function(){var u=$.jR
return u==null?$.jR=V.av(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
av:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.au(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
jQ:function(a,b,c){var u=c.v(0,Math.sqrt(c.I(c))),t=b.ad(u),s=t.v(0,Math.sqrt(t.I(t))),r=u.ad(s),q=new V.C(a.a,a.b,a.c),p=s.aB(0).I(q),o=r.aB(0).I(q),n=u.aB(0).I(q)
return V.av(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
cT:function(){var u=$.jU
return u==null?$.jU=new V.ag(0,0):u},
jV:function(){var u=$.ah
return u==null?$.ah=new V.T(0,0,0):u},
ll:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cW(a,b,c,d)},
bY:function(){var u=$.k8
return u==null?$.k8=new V.C(0,0,0):u},
lu:function(){var u=$.hX
return u==null?$.hX=new V.C(-1,0,0):u},
jm:function(){var u=$.hY
return u==null?$.hY=new V.C(0,1,0):u},
k9:function(){var u=$.hZ
return u==null?$.hZ=new V.C(0,0,1):u},
N:function N(a,b,c){this.a=a
this.b=b
this.c=c},
aO:function aO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eJ:function eJ(a){this.a=a},
cK:function cK(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
au:function au(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ag:function ag(a,b){this.a=a
this.b=b},
T:function T(a,b,c){this.a=a
this.b=b
this.c=c},
cW:function cW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aF:function aF(a,b){this.a=a
this.b=b},
C:function C(a,b,c){this.a=a
this.b=b
this.c=c},
mB:function(a){P.lt(C.F,new V.j_(a))},
lo:function(a){var u=new V.hd()
u.d6(a,!0)
return u},
cp:function cp(){},
j_:function j_(a){this.a=a},
ez:function ez(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eX:function eX(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eY:function eY(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fW:function fW(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hd:function hd(){this.b=this.a=null},
hf:function hf(a){this.a=a},
he:function he(a){this.a=a},
hg:function hg(a){this.a=a}},U={
jI:function(a){var u=new U.cq()
u.a=a
return u},
cq:function cq(){this.b=this.a=null},
fH:function fH(){},
cX:function cX(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cv:function cv(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
l8:function(a,b){var u=a.aH,t=new A.fl(b,u)
t.d5(b,u)
t.d2(a,b)
return t},
l9:function(a,b,c,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="MaterialLight_"+a2.ga3(a2)+a3.ga3(a3)+a4.ga3(a4)+a5.ga3(a5)+a6.ga3(a6)+a7.ga3(a7)+a8.ga3(a8)+a9.ga3(a9)+b0.ga3(b0)+"_"
d+=a?"1":"0"
d+=b?"1":"0"
d+=c?"1":"0"
d=d+"0_"+a1
u=b1.length
if(u>0){d+="_Bar"
for(t=0;t<b1.length;b1.length===u||(0,H.p)(b1),++t)d+="_"+H.d(b1[t].a)}u=b2.length
if(u>0){d+="_Dir"
for(t=0;t<b2.length;b2.length===u||(0,H.p)(b2),++t)d+="_"+H.d(b2[t].a)}u=b3.length
if(u>0){d+="_Point"
for(t=0;t<b3.length;b3.length===u||(0,H.p)(b3),++t)d+="_"+H.d(b3[t].a)}u=b4.length
if(u>0){d+="_Spot"
for(t=0;t<b4.length;b4.length===u||(0,H.p)(b4),++t)d+="_"+H.d(b4[t].a)}for(u=b1.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=b1[t].b
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
e=$.aK()
if(j){u=$.aJ()
e=new Z.b3(e.a|u.a)}if(i){u=$.aI()
e=new Z.b3(e.a|u.a)}if(h){u=$.aH()
e=new Z.b3(e.a|u.a)}return new A.fo(a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,s,o,k,o,r,g,!0,f,!1,m,r,l,j,i,!1,!1,h,!1,!1,c,!1,a1,d.charCodeAt(0)==0?d:d,e)},
iM:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
iN:function(a,b,c){var u
A.iM(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.eb(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
lQ:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.iM(b,t,"emission")
t=b.a+="\n"
t+="vec3 emissionColor()\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   return emissionClr;\n"
b.a=t}t+="}\n"
b.a=t
b.a=t+"\n"},
lM:function(a,b){var u,t=a.b
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.iN(b,t,"ambient")
b.a+="\n"},
lO:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.iN(b,t,"diffuse")
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
lR:function(a,b){var u,t=a.d
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.iN(b,t,"invDiffuse")
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
lX:function(a,b){var u,t=a.e
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.iN(b,t,"specular")
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
lT:function(a,b){var u,t,s
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
lV:function(a,b){var u,t=a.r,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.iM(b,t,"reflect")
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
lW:function(a,b){var u,t=a.x,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.iM(b,t,"refract")
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
lN:function(a,b,c){var u,t,s,r,q,p,o=b.b
if(o<=0)return
u=b.a
t="barLight"+H.d(u)
s=A.eb(t)
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
if(typeof u!=="number")return u.a0()
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
c.a=r+"\n"}r=[P.m]
q=H.b([],r)
q.push("lit.color")
if(u)q.push("attenuation")
u=c.a+="   return "+C.a.k(q," * ")+";\n"
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
u=c.a+="      highLight = intensity*("+C.a.k(p," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.a.k(q," + ")+");\n"
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
lP:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.d(u)
s=A.eb(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.a0()
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
r=[P.m]
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
c.a+="      highLight = intensity*("+C.a.k(m," + ")+");\n"}else c.a+="   highLight = "+C.a.k(m," + ")+";\n"
o.push("highLight")}r=c.a+="   return lit.color*("+C.a.k(o," + ")+");\n"
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
lU:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.d(u)
s=A.eb(t)
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
if(typeof u!=="number")return u.a0()
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
c.a=r+"\n"}r=[P.m]
l=H.b([],r)
l.push("lit.color")
if(o)l.push("attenuation")
if(u)l.push("textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.a.k(l," * ")+";\n"
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
r=c.a+="      highLight = intensity*("+C.a.k(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.a.k(l," + ")+");\n"
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
lY:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.d(u)
s=A.eb(t)
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
if(typeof u!=="number")return u.a0()
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
c.a=u+"\n"}u=[P.m]
j=H.b([],u)
if(n)j.push("attenuation")
if(o)j.push("scale")
if(m)j.push("texture2D(txt2D, txtLoc).rgb")
else j.push("vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.a.k(j," * ")+";\n"
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
u=c.a+="      highLight = intensity*("+C.a.k(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.a.k(j," + ")+");\n"
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
lS:function(a,b){var u,t
if(a.cy>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.dx)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.b([],[P.m])
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
u=b.a+="   return "+C.a.k(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
lZ:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.ai("")
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
A.lQ(a,j)
A.lM(a,j)
A.lO(a,j)
A.lR(a,j)
A.lX(a,j)
t=a.db
if(t){r=j.a+="// === Environmental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.lV(a,j)
A.lW(a,j)}A.lT(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.p)(q),++o)A.lN(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.p)(q),++o)A.lP(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.p)(q),++o)A.lU(a,q[o],j)
for(q=a.cx,p=q.length,o=0;o<q.length;q.length===p||(0,H.p)(q),++o)A.lY(a,q[o],j)
A.lS(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.b([],[P.m])
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.p)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.f(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.a4(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.p)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.f(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.a4(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.p)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.f(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.a4(r,1))+"Values(norm);\n"}for(u=a.cx,t=u.length,o=0;o<u.length;u.length===t||(0,H.p)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.f(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.a4(r,1))+"Values(norm);\n"}if(a.cy<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)u=!1
else u=!0
if(u)n.push("emissionColor()")
if(!a.r.a)u=!1
else u=!0
if(u)n.push("reflect(refl)")
if(!a.x.a)u=!1
else u=!0
if(u)n.push("refract(refl)")
if(n.length<=0)n.push("vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.a.k(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
m_:function(a,b){var u,t,s
if(!a.ry)return
u=b.a+="struct BendingValue\n"
u+="{\n"
b.a=u
u+="   mat4 mat;\n"
b.a=u
u+="};\n"
b.a=u
b.a=u+"uniform int bendMatCount;\n"
u=b.a+="uniform BendingValue bendValues["+a.aV+"];\n"
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
m1:function(a,b){var u
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
m0:function(a,b){var u
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
m3:function(a,b){var u,t
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
m4:function(a,b){var u,t
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
m2:function(a,b){var u
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
m5:function(a,b){var u
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
eb:function(a){if(0>=a.length)return H.f(a,0)
return a[0].toUpperCase()+C.b.a4(a,1)},
jl:function(a,b,c,d,e){var u=new A.hJ(a,c,e)
u.f=d
P.l6(d,0,P.x)
return u},
cj:function cj(a,b,c){this.a=a
this.b=b
this.c=c},
eh:function eh(a){this.a=a},
Q:function Q(a,b,c){this.a=a
this.b=b
this.c=c},
fl:function fl(a,b){var _=this
_.fP=_.fO=_.aW=_.aH=_.aV=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.h1=_.h0=_.h_=_.bq=_.bp=_.bo=_.bn=_.bm=_.bl=_.bk=_.bj=_.fZ=_.fY=_.co=_.fX=_.fW=_.cn=_.cm=_.fV=_.fU=_.cl=_.ck=_.fT=_.fS=_.cj=_.fR=_.fQ=_.ci=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ck:function ck(a,b){this.a=a
this.b=b},
cs:function cs(a,b){this.a=a
this.b=b},
cU:function cU(a,b){this.a=a
this.b=b},
d_:function d_(a,b){this.a=a
this.b=b},
fo:function fo(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.aV=b3
_.aH=b4
_.aW=b5},
bT:function bT(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
bU:function bU(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
bW:function bW(a,b,c,d,e,f,g,h,i,j){var _=this
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
bX:function bX(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cY:function cY(){},
da:function da(){},
hO:function hO(a){this.a=a},
b2:function b2(a,b,c){this.a=a
this.c=b
this.d=c},
hL:function hL(a,b,c){this.a=a
this.c=b
this.d=c},
hM:function hM(a,b,c){this.a=a
this.c=b
this.d=c},
hN:function hN(a,b,c){this.a=a
this.c=b
this.d=c},
hJ:function hJ(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
M:function M(a,b,c){this.a=a
this.c=b
this.d=c},
hK:function hK(a,b,c){this.a=a
this.c=b
this.d=c},
B:function B(a,b,c){this.a=a
this.c=b
this.d=c},
bS:function bS(a,b,c){this.a=a
this.c=b
this.d=c},
hP:function hP(a,b,c){this.a=a
this.c=b
this.d=c},
bV:function bV(a,b,c){this.a=a
this.c=b
this.d=c},
a_:function a_(a,b,c){this.a=a
this.c=b
this.d=c},
bm:function bm(a,b,c){this.a=a
this.c=b
this.d=c},
bn:function bn(a,b,c){this.a=a
this.c=b
this.d=c}},F={
mG:function(){return F.mh(15,30,0.5,1,new F.j1())},
mh:function(a,b,c,d,e){var u=F.mE(a,b,new F.iQ(e,d,b,c))
if(u==null)return
u.au()
u.f9(new F.i4(),new F.fQ())
return u},
mE:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
if(a<1)return
if(b<1)return
u=new F.h9()
t=new F.i_(u)
t.b=!1
s=[F.bZ]
t.c=H.b([],s)
u.a=t
t=new F.hc()
t.b=H.b([],[F.cS])
u.b=t
t=new F.hb(u)
t.b=H.b([],[F.cF])
u.c=t
t=new F.ha(u)
t.b=H.b([],[F.bg])
u.d=t
u.e=null
r=H.b([],s)
for(q=0;q<=b;++q){p=q/b
t=u.a
if(p<0)s=0
else s=p>1?1:p
o=t.c5(new V.aO(s,0,0,1),new V.ag(p,1))
c.$3(o,p,0)
r.push(o.ce(null))}for(q=1;q<=a;++q){n=q/a
for(t=n>1,s=n<0,m=1-n,l=0;l<=b;++l){p=l/b
k=u.a
if(p<0)j=0
else j=p>1?1:p
if(s)i=0
else i=t?1:n
if(s)h=0
else h=t?1:n
o=k.c5(new V.aO(j,i,h,1),new V.ag(p,m))
c.$3(o,p,n)
r.push(o.ce(null))}}u.d.eJ(a+1,b+1,r)
return u},
eM:function(a,b,c){var u=new F.bg(),t=a.a
if(t==null)H.u(P.q("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.u(P.q("May not create a face with vertices attached to different shapes."))
u.eB(a)
u.eC(b)
u.eD(c)
u.a.a.d.b.push(u)
u.a.a.V()
return u},
ka:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.bZ(),r=new F.i7()
r.b=H.b([],[F.cS])
s.b=r
r=new F.i3()
u=[F.cF]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.i0()
u=[F.bg]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.kE()
s.e=0
r=$.aK()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aJ().a)!==0?e:t
s.x=(u&$.aI().a)!==0?b:t
s.y=(u&$.b7().a)!==0?f:t
s.z=(u&$.b8().a)!==0?g:t
s.Q=(u&$.kF().a)!==0?c:t
s.ch=(u&$.bw().a)!==0?i:0
s.cx=(u&$.aH().a)!==0?a:t
return s},
j1:function j1(){},
iQ:function iQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bg:function bg(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
eN:function eN(){},
hh:function hh(){},
cF:function cF(){},
fc:function fc(){},
hI:function hI(){},
cS:function cS(){},
h9:function h9(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ha:function ha(a){this.a=a
this.b=null},
hb:function hb(a){this.a=a
this.b=null},
hc:function hc(){this.b=null},
bZ:function bZ(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i9:function i9(a){this.a=a},
i8:function i8(a){this.a=a},
i_:function i_(a){this.a=a
this.c=this.b=null},
i0:function i0(){this.d=this.c=this.b=null},
i1:function i1(a,b){this.a=a
this.b=b},
i2:function i2(a,b){this.a=a
this.b=b},
i3:function i3(){this.c=this.b=null},
i5:function i5(){},
i4:function i4(){},
i6:function i6(){},
fQ:function fQ(){},
i7:function i7(){this.b=null}},T={hx:function hx(){}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jd.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gF:function(a){return H.bN(a)},
i:function(a){return"Instance of '"+H.d(H.bO(a))+"'"}}
J.f5.prototype={
i:function(a){return String(a)},
gF:function(a){return a?519018:218159},
$ian:1}
J.cB.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gF:function(a){return 0}}
J.cC.prototype={
gF:function(a){return 0},
i:function(a){return String(a)}}
J.fV.prototype={}
J.bo.prototype={}
J.aV.prototype={
i:function(a){var u=a[$.kt()]
if(u==null)return this.d_(a)
return"JavaScript function for "+H.d(J.aa(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.aT.prototype={
bv:function(a,b){if(!!a.fixed$length)H.u(P.w("removeAt"))
if(b<0||b>=a.length)throw H.c(P.cV(b,null))
return a.splice(b,1)[0]},
M:function(a,b){var u
if(!!a.fixed$length)H.u(P.w("remove"))
for(u=0;u<a.length;++u)if(J.K(a[u],b)){a.splice(u,1)
return!0}return!1},
Y:function(a,b){var u,t
if(!!a.fixed$length)H.u(P.w("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.p)(b),++t)a.push(b[t])},
A:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.c(P.aP(a))}},
k:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.d(a[u])
if(u>=s)return H.f(r,u)
r[u]=t}return r.join(b)},
f6:function(a){return this.k(a,"")},
f3:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.c(P.aP(a))}throw H.c(H.f3())},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
cW:function(a,b,c){var u=a.length
if(b>u)throw H.c(P.az(b,0,u,"start",null))
if(c==null)c=u
else if(c<b||c>u)throw H.c(P.az(c,b,u,"end",null))
if(b===c)return H.b([],[H.a9(a,0)])
return H.b(a.slice(b,c),[H.a9(a,0)])},
gf2:function(a){if(a.length>0)return a[0]
throw H.c(H.f3())},
gaY:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.f3())},
c7:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.c(P.aP(a))}return!1},
aD:function(a,b){if(!!a.immutable$list)H.u(P.w("sort"))
H.lr(a,b==null?J.lJ():b)},
cV:function(a){return this.aD(a,null)},
D:function(a,b){var u
for(u=0;u<a.length;++u)if(J.K(a[u],b))return!0
return!1},
i:function(a){return P.ja(a,"[","]")},
gJ:function(a){return new J.a0(a,a.length)},
gF:function(a){return H.bN(a)},
gl:function(a){return a.length},
sl:function(a,b){var u="newLength"
if(!!a.fixed$length)H.u(P.w("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.j3(b,u,null))
if(b<0)throw H.c(P.az(b,0,null,u,null))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bu(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.u(P.w("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bu(a,b))
a[b]=c},
$in:1,
$ij:1}
J.jc.prototype={}
J.a0.prototype={
gu:function(a){return this.d},
p:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.p(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bF.prototype={
aw:function(a,b){var u
if(typeof b!=="number")throw H.c(H.b6(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gaX(b)
if(this.gaX(a)===u)return 0
if(this.gaX(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaX:function(a){return a===0?1/a<0:a<0},
cp:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.w(""+a+".floor()"))},
a2:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.w(""+a+".round()"))},
cL:function(a,b){var u
if(b>20)throw H.c(P.az(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gaX(a))return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gF:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
cR:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
d1:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.c0(a,b)},
T:function(a,b){return(a|0)===a?a/b|0:this.c0(a,b)},
c0:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.w("Result of truncating division is "+H.d(u)+": "+H.d(a)+" ~/ "+b))},
aQ:function(a,b){var u
if(a>0)u=this.eH(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
eH:function(a,b){return b>31?0:a>>>b},
$iJ:1,
$ia3:1}
J.cA.prototype={$ix:1}
J.f6.prototype={}
J.aU.prototype={
bi:function(a,b){if(b<0)throw H.c(H.bu(a,b))
if(b>=a.length)H.u(H.bu(a,b))
return a.charCodeAt(b)},
aE:function(a,b){if(b>=a.length)throw H.c(H.bu(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(typeof b!=="string")throw H.c(P.j3(b,null,null))
return a+b},
b3:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
aM:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.cV(b,null))
if(b>c)throw H.c(P.cV(b,null))
if(c>a.length)throw H.c(P.cV(c,null))
return a.substring(b,c)},
a4:function(a,b){return this.aM(a,b,null)},
fE:function(a){return a.toLowerCase()},
L:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.B)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ai:function(a,b){var u=b-a.length
if(u<=0)return a
return this.L(" ",u)+a},
aw:function(a,b){var u
if(typeof b!=="string")throw H.c(H.b6(b))
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
gl:function(a){return a.length},
$im:1}
H.k.prototype={
gl:function(a){return this.a.length},
h:function(a,b){return C.b.bi(this.a,b)},
$an:function(){return[P.x]},
$at:function(){return[P.x]},
$aj:function(){return[P.x]}}
H.n.prototype={}
H.cG.prototype={
gJ:function(a){return new H.aX(this,this.gl(this))},
b1:function(a,b){return this.cZ(0,b)}}
H.aX.prototype={
gu:function(a){return this.d},
p:function(){var u,t=this,s=t.a,r=J.e9(s),q=r.gl(s)
if(t.b!=q)throw H.c(P.aP(s))
u=t.c
if(typeof q!=="number")return H.Z(q)
if(u>=q){t.d=null
return!1}t.d=r.t(s,u);++t.c
return!0}}
H.bI.prototype={
gJ:function(a){return new H.cH(J.aL(this.a),this.b)},
gl:function(a){return J.aM(this.a)},
t:function(a,b){return this.b.$1(J.ec(this.a,b))},
$aj:function(a,b){return[b]}}
H.eG.prototype={$in:1,
$an:function(a,b){return[b]}}
H.cH.prototype={
p:function(){var u=this,t=u.b
if(t.p()){u.a=u.c.$1(t.gu(t))
return!0}u.a=null
return!1},
gu:function(a){return this.a}}
H.fk.prototype={
gl:function(a){return J.aM(this.a)},
t:function(a,b){return this.b.$1(J.ec(this.a,b))},
$an:function(a,b){return[b]},
$acG:function(a,b){return[b]},
$aj:function(a,b){return[b]}}
H.c_.prototype={
gJ:function(a){return new H.ic(J.aL(this.a),this.b)}}
H.ic.prototype={
p:function(){var u,t
for(u=this.a,t=this.b;u.p();)if(t.$1(u.gu(u)))return!0
return!1},
gu:function(a){var u=this.a
return u.gu(u)}}
H.cw.prototype={}
H.hS.prototype={
m:function(a,b,c){throw H.c(P.w("Cannot modify an unmodifiable list"))}}
H.db.prototype={}
H.hG.prototype={
a_:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.fR.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.f9.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.d(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.d(t.a)+")"
return s+r+"' on '"+u+"' ("+H.d(t.a)+")"}}
H.hR.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.j2.prototype={
$1:function(a){if(!!J.P(a).$ibe)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:6}
H.dO.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bz.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.ce(t==null?"unknown":t)+"'"},
gfH:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hu.prototype={}
H.hm.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.ce(u)+"'"}}
H.bx.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bx))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gF:function(a){var u,t=this.c
if(t==null)u=H.bN(this.a)
else u=typeof t!=="object"?J.ed(t):H.bN(t)
return(u^H.bN(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.d(H.bO(u))+"'")}}
H.ep.prototype={
i:function(a){return this.a}}
H.h6.prototype={
i:function(a){return"RuntimeError: "+H.d(this.a)}}
H.E.prototype={
gl:function(a){return this.a},
gU:function(a){return new H.bi(this,[H.a9(this,0)])},
gfG:function(a){var u=this,t=H.a9(u,0)
return H.l7(new H.bi(u,[t]),new H.f8(u),t,H.a9(u,1))},
eQ:function(a,b){var u=this.b
if(u==null)return!1
return this.dt(u,b)},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.aO(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.aO(r,b)
s=t==null?null:t.b
return s}else return q.f5(b)},
f5:function(a){var u,t,s=this.d
if(s==null)return
u=this.bT(s,J.ed(a)&0x3ffffff)
t=this.cq(u,a)
if(t<0)return
return u[t].b},
m:function(a,b,c){var u,t,s,r,q,p,o=this
if(typeof b==="string"){u=o.b
o.bL(u==null?o.b=o.ba():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.bL(t==null?o.c=o.ba():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.ba()
r=J.ed(b)&0x3ffffff
q=o.bT(s,r)
if(q==null)o.bd(s,r,[o.bb(b,c)])
else{p=o.cq(q,b)
if(p>=0)q[p].b=c
else q.push(o.bb(b,c))}}},
A:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.c(P.aP(u))
t=t.c}},
bL:function(a,b,c){var u=this.aO(a,b)
if(u==null)this.bd(a,b,this.bb(b,c))
else u.b=c},
dC:function(){this.r=this.r+1&67108863},
bb:function(a,b){var u,t=this,s=new H.fd(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.dC()
return s},
cq:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.K(a[t].a,b))return t
return-1},
i:function(a){return P.jP(this)},
aO:function(a,b){return a[b]},
bT:function(a,b){return a[b]},
bd:function(a,b,c){a[b]=c},
dz:function(a,b){delete a[b]},
dt:function(a,b){return this.aO(a,b)!=null},
ba:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bd(t,u,t)
this.dz(t,u)
return t}}
H.f8.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.a9(u,1),args:[H.a9(u,0)]}}}
H.fd.prototype={}
H.bi.prototype={
gl:function(a){return this.a.a},
gJ:function(a){var u=this.a,t=new H.fe(u,u.r)
t.c=u.e
return t}}
H.fe.prototype={
gu:function(a){return this.d},
p:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.aP(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.iU.prototype={
$1:function(a){return this.a(a)},
$S:6}
H.iV.prototype={
$2:function(a,b){return this.a(a,b)}}
H.iW.prototype={
$1:function(a){return this.a(a)}}
H.f7.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.bM.prototype={}
H.cL.prototype={
gl:function(a){return a.length},
$iv:1,
$av:function(){}}
H.bL.prototype={
h:function(a,b){H.am(b,a,a.length)
return a[b]},
m:function(a,b,c){H.am(b,a,a.length)
a[b]=c},
$in:1,
$an:function(){return[P.J]},
$at:function(){return[P.J]},
$ij:1,
$aj:function(){return[P.J]}}
H.cM.prototype={
m:function(a,b,c){H.am(b,a,a.length)
a[b]=c},
$in:1,
$an:function(){return[P.x]},
$at:function(){return[P.x]},
$ij:1,
$aj:function(){return[P.x]}}
H.fI.prototype={
h:function(a,b){H.am(b,a,a.length)
return a[b]}}
H.fJ.prototype={
h:function(a,b){H.am(b,a,a.length)
return a[b]}}
H.fK.prototype={
h:function(a,b){H.am(b,a,a.length)
return a[b]}}
H.fL.prototype={
h:function(a,b){H.am(b,a,a.length)
return a[b]}}
H.fM.prototype={
h:function(a,b){H.am(b,a,a.length)
return a[b]}}
H.cN.prototype={
gl:function(a){return a.length},
h:function(a,b){H.am(b,a,a.length)
return a[b]}}
H.fN.prototype={
gl:function(a){return a.length},
h:function(a,b){H.am(b,a,a.length)
return a[b]}}
H.c2.prototype={}
H.c3.prototype={}
H.c4.prototype={}
H.c5.prototype={}
P.ie.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:14}
P.id.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.ig.prototype={
$0:function(){this.a.$0()}}
P.ih.prototype={
$0:function(){this.a.$0()}}
P.dU.prototype={
df:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bt(new P.iI(this,b),0),a)
else throw H.c(P.w("`setTimeout()` not found."))},
dg:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bt(new P.iH(this,a,Date.now(),b),0),a)
else throw H.c(P.w("Periodic timer."))},
$id6:1}
P.iI.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.iH.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.d1(u,q)}s.c=r
t.d.$1(s)}}
P.bp.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.d(this.a)+")"}}
P.bq.prototype={
gu:function(a){var u=this.c
if(u==null)return this.b
return u.gu(u)},
p:function(){var u,t,s,r,q=this
for(;!0;){u=q.c
if(u!=null)if(u.p())return!0
else q.c=null
t=function(a,b,c){var p,o=b
while(true)try{return a(o,p)}catch(n){p=n
o=c}}(q.a,0,1)
if(t instanceof P.bp){s=t.b
if(s===2){u=q.d
if(u==null||u.length===0){q.b=null
return!1}if(0>=u.length)return H.f(u,-1)
q.a=u.pop()
continue}else{u=t.a
if(s===3)throw u
else{r=J.aL(u)
if(!!r.$ibq){u=q.d
if(u==null)u=q.d=[]
u.push(q.a)
q.a=r.a
continue}else{q.c=r
continue}}}}else{q.b=t
return!0}}return!1}}
P.iE.prototype={
gJ:function(a){return new P.bq(this.a())}}
P.de.prototype={}
P.d2.prototype={}
P.hp.prototype={}
P.d6.prototype={}
P.iL.prototype={}
P.iO.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.cQ():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u}}
P.iu.prototype={
fz:function(a){var u,t,s,r=null
try{if(C.e===$.a8){a.$0()
return}P.m7(r,r,this,a)}catch(s){u=H.ap(s)
t=H.jt(s)
P.kg(r,r,this,u,t)}},
fA:function(a,b){var u,t,s,r=null
try{if(C.e===$.a8){a.$1(b)
return}P.m8(r,r,this,a,b)}catch(s){u=H.ap(s)
t=H.jt(s)
P.kg(r,r,this,u,t)}},
fB:function(a,b){return this.fA(a,b,null)},
eN:function(a){return new P.iv(this,a)},
cb:function(a,b){return new P.iw(this,a,b)}}
P.iv.prototype={
$0:function(){return this.a.fz(this.b)}}
P.iw.prototype={
$1:function(a){return this.a.fB(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.ir.prototype={
gJ:function(a){var u=new P.dv(this,this.r)
u.c=this.e
return u},
gl:function(a){return this.a},
D:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.dr(b)
return t}},
dr:function(a){var u=this.d
if(u==null)return!1
return this.b8(this.bS(u,a),a)>=0},
q:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.bM(u==null?s.b=P.jn():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.bM(t==null?s.c=P.jn():t,b)}else return s.di(0,b)},
di:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.jn()
u=s.bO(b)
t=r[u]
if(t==null)r[u]=[s.b5(b)]
else{if(s.b8(t,b)>=0)return!1
t.push(s.b5(b))}return!0},
M:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.ep(this.c,b)
else return this.eo(0,b)},
eo:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.bS(r,b)
t=s.b8(u,b)
if(t<0)return!1
s.c2(u.splice(t,1)[0])
return!0},
bM:function(a,b){if(a[b]!=null)return!1
a[b]=this.b5(b)
return!0},
ep:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.c2(u)
delete a[b]
return!0},
bN:function(){this.r=1073741823&this.r+1},
b5:function(a){var u,t=this,s=new P.is(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.bN()
return s},
c2:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.bN()},
bO:function(a){return J.ed(a)&1073741823},
bS:function(a,b){return a[this.bO(b)]},
b8:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.K(a[t].a,b))return t
return-1}}
P.is.prototype={}
P.dv.prototype={
gu:function(a){return this.d},
p:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.aP(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.f2.prototype={}
P.ff.prototype={$in:1,$ij:1}
P.t.prototype={
gJ:function(a){return new H.aX(a,this.gl(a))},
t:function(a,b){return this.h(a,b)},
fD:function(a,b){var u,t,s=this,r=H.b([],[H.mn(s,a,"t",0)])
C.a.sl(r,s.gl(a))
u=0
while(!0){t=s.gl(a)
if(typeof t!=="number")return H.Z(t)
if(!(u<t))break
t=s.h(a,u)
if(u>=r.length)return H.f(r,u)
r[u]=t;++u}return r},
fC:function(a){return this.fD(a,!0)},
i:function(a){return P.ja(a,"[","]")}}
P.fi.prototype={}
P.fj.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.d(a)
t.a=u+": "
t.a+=H.d(b)},
$S:7}
P.R.prototype={
A:function(a,b){var u,t
for(u=J.aL(this.gU(a));u.p();){t=u.gu(u)
b.$2(t,this.h(a,t))}},
gl:function(a){return J.aM(this.gU(a))},
i:function(a){return P.jP(a)}}
P.iy.prototype={
Y:function(a,b){var u
for(u=J.aL(b);u.p();)this.q(0,u.gu(u))},
i:function(a){return P.ja(this,"{","}")},
t:function(a,b){var u,t,s
P.jX(b,"index")
for(u=P.lE(this,this.r),t=0;u.p();){s=u.d
if(b===t)return s;++t}throw H.c(P.G(b,this,"index",null,t))},
$in:1,
$ij:1}
P.dw.prototype={}
P.er.prototype={}
P.et.prototype={}
P.eI.prototype={}
P.f0.prototype={
i:function(a){return this.a}}
P.f_.prototype={
du:function(a,b,c){var u,t,s,r,q,p,o=null
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=o;r<c;++r){if(r>=a.length)return H.f(a,r)
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
default:p=o}if(p!=null){if(q==null)q=new P.ai("")
if(r>b)q.a+=C.b.aM(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.kO(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.hV.prototype={}
P.hW.prototype={
eR:function(a){var u,t,s,r=P.ji(0,null,a.length)
if(typeof r!=="number")return r.P()
u=r-0
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.iJ(t)
if(s.dB(a,0,r)!==r)s.c3(C.b.bi(a,r-1),0)
return new Uint8Array(t.subarray(0,H.lH(0,s.b,t.length)))}}
P.iJ.prototype={
c3:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
if((b&64512)===56320){u=65536+((a&1023)<<10)|b&1023
t.b=q
if(r>=p)return H.f(s,r)
s[r]=240|u>>>18
r=t.b=q+1
if(q>=p)return H.f(s,q)
s[q]=128|u>>>12&63
q=t.b=r+1
if(r>=p)return H.f(s,r)
s[r]=128|u>>>6&63
t.b=q+1
if(q>=p)return H.f(s,q)
s[q]=128|u&63
return!0}else{t.b=q
if(r>=p)return H.f(s,r)
s[r]=224|a>>>12
r=t.b=q+1
if(q>=p)return H.f(s,q)
s[q]=128|a>>>6&63
t.b=r+1
if(r>=p)return H.f(s,r)
s[r]=128|a&63
return!1}},
dB:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.bi(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.aE(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.c3(r,C.b.aE(a,p)))s=p}else if(r<=2047){q=n.b
o=q+1
if(o>=t)break
n.b=o
if(q>=t)return H.f(u,q)
u[q]=192|r>>>6
n.b=o+1
u[o]=128|r&63}else{q=n.b
if(q+2>=t)break
o=n.b=q+1
if(q>=t)return H.f(u,q)
u[q]=224|r>>>12
q=n.b=o+1
if(o>=t)return H.f(u,o)
u[o]=128|r>>>6&63
n.b=q+1
if(q>=t)return H.f(u,q)
u[q]=128|r&63}}return s}}
P.an.prototype={}
P.aQ.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.aQ&&this.a===b.a&&!0},
aw:function(a,b){return C.d.aw(this.a,b.a)},
gF:function(a){var u=this.a
return(u^C.d.aQ(u,30))&1073741823},
i:function(a){var u=this,t=P.kW(H.lh(u)),s=P.cr(H.lf(u)),r=P.cr(H.lb(u)),q=P.cr(H.lc(u)),p=P.cr(H.le(u)),o=P.cr(H.lg(u)),n=P.kX(H.ld(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.J.prototype={}
P.aR.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.aR&&this.a===b.a},
gF:function(a){return C.d.gF(this.a)},
aw:function(a,b){return C.d.aw(this.a,b.a)},
i:function(a){var u,t,s,r=new P.eF(),q=this.a
if(q<0)return"-"+new P.aR(0-q).i(0)
u=r.$1(C.d.T(q,6e7)%60)
t=r.$1(C.d.T(q,1e6)%60)
s=new P.eE().$1(q%1e6)
return""+C.d.T(q,36e8)+":"+H.d(u)+":"+H.d(t)+"."+H.d(s)}}
P.eE.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.eF.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.be.prototype={}
P.cQ.prototype={
i:function(a){return"Throw of null."}}
P.ab.prototype={
gb7:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gb6:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gb7()+o+u
if(!q.a)return t
s=q.gb6()
r=P.j9(q.b)
return t+s+": "+r}}
P.bk.prototype={
gb7:function(){return"RangeError"},
gb6:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.d(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.d(s)
else if(t>s)u=": Not in range "+H.d(s)+".."+H.d(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.d(s)}return u}}
P.f1.prototype={
gb7:function(){return"RangeError"},
gb6:function(){var u,t=this.b
if(typeof t!=="number")return t.am()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.d(u)},
gl:function(a){return this.f}}
P.hT.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.hQ.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.bQ.prototype={
i:function(a){return"Bad state: "+this.a}}
P.es.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.j9(u)+"."}}
P.fU.prototype={
i:function(a){return"Out of Memory"},
$ibe:1}
P.d0.prototype={
i:function(a){return"Stack Overflow"},
$ibe:1}
P.ey.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dm.prototype={
i:function(a){return"Exception: "+this.a}}
P.eU.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.b.aM(s,0,75)+"...":s
return t+"\n"+r}}
P.eW.prototype={}
P.x.prototype={}
P.j.prototype={
b1:function(a,b){return new H.c_(this,b,[H.js(this,"j",0)])},
gl:function(a){var u,t=this.gJ(this)
for(u=0;t.p();)++u
return u},
gan:function(a){var u,t=this.gJ(this)
if(!t.p())throw H.c(H.f3())
u=t.gu(t)
if(t.p())throw H.c(H.l1())
return u},
t:function(a,b){var u,t,s
P.jX(b,"index")
for(u=this.gJ(this),t=0;u.p();){s=u.gu(u)
if(b===t)return s;++t}throw H.c(P.G(b,this,"index",null,t))},
i:function(a){return P.l0(this,"(",")")}}
P.f4.prototype={}
P.a6.prototype={$in:1,$ij:1}
P.bH.prototype={}
P.aZ.prototype={
gF:function(a){return P.S.prototype.gF.call(this,this)},
i:function(a){return"null"}}
P.a3.prototype={}
P.S.prototype={constructor:P.S,$iS:1,
n:function(a,b){return this===b},
gF:function(a){return H.bN(this)},
i:function(a){return"Instance of '"+H.d(H.bO(this))+"'"},
toString:function(){return this.i(this)}}
P.m.prototype={}
P.ai.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.l.prototype={}
W.ee.prototype={
gl:function(a){return a.length}}
W.ef.prototype={
i:function(a){return String(a)}}
W.eg.prototype={
i:function(a){return String(a)}}
W.cl.prototype={}
W.ba.prototype={$iba:1}
W.bb.prototype={
cQ:function(a,b,c){var u=a.getContext(b,P.mg(c))
return u},
$ibb:1}
W.aN.prototype={
gl:function(a){return a.length}}
W.eu.prototype={
gl:function(a){return a.length}}
W.D.prototype={$iD:1}
W.bA.prototype={
gl:function(a){return a.length}}
W.ev.prototype={}
W.a1.prototype={}
W.ad.prototype={}
W.ew.prototype={
gl:function(a){return a.length}}
W.ex.prototype={
gl:function(a){return a.length}}
W.eA.prototype={
gl:function(a){return a.length}}
W.a4.prototype={$ia4:1}
W.eB.prototype={
i:function(a){return String(a)}}
W.ct.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[[P.a7,P.a3]]},
$iv:1,
$av:function(){return[[P.a7,P.a3]]},
$at:function(){return[[P.a7,P.a3]]},
$ij:1,
$aj:function(){return[[P.a7,P.a3]]}}
W.cu.prototype={
i:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(this.gaA(a))+" x "+H.d(this.gay(a))},
n:function(a,b){var u
if(b==null)return!1
u=J.P(b)
return!!u.$ia7&&a.left===u.gct(b)&&a.top===u.gcM(b)&&this.gaA(a)===u.gaA(b)&&this.gay(a)===u.gay(b)},
gF:function(a){return W.kc(C.c.gF(a.left),C.c.gF(a.top),C.c.gF(this.gaA(a)),C.c.gF(this.gay(a)))},
gay:function(a){return a.height},
gct:function(a){return a.left},
gcM:function(a){return a.top},
gaA:function(a){return a.width},
$ia7:1,
$aa7:function(){return[P.a3]}}
W.eC.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[P.m]},
$iv:1,
$av:function(){return[P.m]},
$at:function(){return[P.m]},
$ij:1,
$aj:function(){return[P.m]}}
W.eD.prototype={
gl:function(a){return a.length}}
W.ij.prototype={
gl:function(a){return this.b.length},
h:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
m:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
this.a.replaceChild(c,u[b])},
q:function(a,b){this.a.appendChild(b)
return b},
gJ:function(a){var u=this.fC(this)
return new J.a0(u,u.length)},
$an:function(){return[W.L]},
$at:function(){return[W.L]},
$aj:function(){return[W.L]}}
W.L.prototype={
geM:function(a){return new W.il(a)},
gcc:function(a){return new W.ij(a,a.children)},
i:function(a){return a.localName},
Z:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.jL
if(u==null){u=H.b([],[W.ax])
t=new W.cP(u)
u.push(W.kb(null))
u.push(W.kd())
$.jL=t
d=t}else d=u
u=$.jK
if(u==null){u=new W.dZ(d)
$.jK=u
c=u}else{u.a=d
c=u}}if($.ar==null){u=document
t=u.implementation.createHTMLDocument("")
$.ar=t
$.j8=t.createRange()
s=$.ar.createElement("base")
s.href=u.baseURI
$.ar.head.appendChild(s)}u=$.ar
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.ar
if(!!this.$iba)r=u.body
else{r=u.createElement(a.tagName)
$.ar.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.a.D(C.K,a.tagName)){$.j8.selectNodeContents(r)
q=$.j8.createContextualFragment(b)}else{r.innerHTML=b
q=$.ar.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.ar.body
if(r==null?u!=null:r!==u)J.jC(r)
c.bz(q)
document.adoptNode(q)
return q},
eS:function(a,b,c){return this.Z(a,b,c,null)},
cT:function(a,b){a.textContent=null
a.appendChild(this.Z(a,b,null,null))},
$iL:1,
gcJ:function(a){return a.tagName}}
W.eH.prototype={
$1:function(a){return!!J.P(a).$iL}}
W.h.prototype={$ih:1}
W.e.prototype={
eI:function(a,b,c,d){if(c!=null)this.dj(a,b,c,!1)},
dj:function(a,b,c,d){return a.addEventListener(b,H.bt(c,1),!1)}}
W.as.prototype={$ias:1}
W.eO.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.as]},
$iv:1,
$av:function(){return[W.as]},
$at:function(){return[W.as]},
$ij:1,
$aj:function(){return[W.as]}}
W.eP.prototype={
gl:function(a){return a.length}}
W.eT.prototype={
gl:function(a){return a.length}}
W.at.prototype={$iat:1}
W.eZ.prototype={
gl:function(a){return a.length}}
W.bC.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.y]},
$iv:1,
$av:function(){return[W.y]},
$at:function(){return[W.y]},
$ij:1,
$aj:function(){return[W.y]}}
W.bh.prototype={$ibh:1}
W.fg.prototype={
i:function(a){return String(a)}}
W.fA.prototype={
gl:function(a){return a.length}}
W.fB.prototype={
h:function(a,b){return P.aG(a.get(b))},
A:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aG(u.value[1]))}},
gU:function(a){var u=H.b([],[P.m])
this.A(a,new W.fC(u))
return u},
gl:function(a){return a.size},
$aR:function(){return[P.m,null]}}
W.fC.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fD.prototype={
h:function(a,b){return P.aG(a.get(b))},
A:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aG(u.value[1]))}},
gU:function(a){var u=H.b([],[P.m])
this.A(a,new W.fE(u))
return u},
gl:function(a){return a.size},
$aR:function(){return[P.m,null]}}
W.fE.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aw.prototype={$iaw:1}
W.fF.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.aw]},
$iv:1,
$av:function(){return[W.aw]},
$at:function(){return[W.aw]},
$ij:1,
$aj:function(){return[W.aw]}}
W.af.prototype={$iaf:1}
W.U.prototype={
gan:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.jZ("No elements"))
if(t>1)throw H.c(P.jZ("More than one element"))
return u.firstChild},
Y:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
m:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.f(t,b)
u.replaceChild(c,t[b])},
gJ:function(a){var u=this.a.childNodes
return new W.cx(u,u.length)},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
$an:function(){return[W.y]},
$at:function(){return[W.y]},
$aj:function(){return[W.y]}}
W.y.prototype={
fq:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
fv:function(a,b){var u,t
try{u=a.parentNode
J.kJ(u,b,a)}catch(t){H.ap(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.cY(a):u},
eu:function(a,b,c){return a.replaceChild(b,c)},
$iy:1}
W.cO.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.y]},
$iv:1,
$av:function(){return[W.y]},
$at:function(){return[W.y]},
$ij:1,
$aj:function(){return[W.y]}}
W.ay.prototype={$iay:1,
gl:function(a){return a.length}}
W.fX.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.ay]},
$iv:1,
$av:function(){return[W.ay]},
$at:function(){return[W.ay]},
$ij:1,
$aj:function(){return[W.ay]}}
W.h4.prototype={
h:function(a,b){return P.aG(a.get(b))},
A:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aG(u.value[1]))}},
gU:function(a){var u=H.b([],[P.m])
this.A(a,new W.h5(u))
return u},
gl:function(a){return a.size},
$aR:function(){return[P.m,null]}}
W.h5.prototype={
$2:function(a,b){return this.a.push(a)}}
W.h7.prototype={
gl:function(a){return a.length}}
W.aA.prototype={$iaA:1}
W.hi.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.aA]},
$iv:1,
$av:function(){return[W.aA]},
$at:function(){return[W.aA]},
$ij:1,
$aj:function(){return[W.aA]}}
W.aB.prototype={$iaB:1}
W.hj.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.aB]},
$iv:1,
$av:function(){return[W.aB]},
$at:function(){return[W.aB]},
$ij:1,
$aj:function(){return[W.aB]}}
W.aC.prototype={$iaC:1,
gl:function(a){return a.length}}
W.hn.prototype={
h:function(a,b){return a.getItem(b)},
A:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gU:function(a){var u=H.b([],[P.m])
this.A(a,new W.ho(u))
return u},
gl:function(a){return a.length},
$aR:function(){return[P.m,P.m]}}
W.ho.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aj.prototype={$iaj:1}
W.d3.prototype={
Z:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.b4(a,b,c,d)
u=W.kY("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.U(t).Y(0,new W.U(u))
return t}}
W.hr.prototype={
Z:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.b4(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.r.Z(u.createElement("table"),b,c,d)
u.toString
u=new W.U(u)
s=u.gan(u)
s.toString
u=new W.U(s)
r=u.gan(u)
t.toString
r.toString
new W.U(t).Y(0,new W.U(r))
return t}}
W.hs.prototype={
Z:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.b4(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.r.Z(u.createElement("table"),b,c,d)
u.toString
u=new W.U(u)
s=u.gan(u)
t.toString
s.toString
new W.U(t).Y(0,new W.U(s))
return t}}
W.bR.prototype={$ibR:1}
W.aD.prototype={$iaD:1}
W.ak.prototype={$iak:1}
W.hv.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.ak]},
$iv:1,
$av:function(){return[W.ak]},
$at:function(){return[W.ak]},
$ij:1,
$aj:function(){return[W.ak]}}
W.hw.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.aD]},
$iv:1,
$av:function(){return[W.aD]},
$at:function(){return[W.aD]},
$ij:1,
$aj:function(){return[W.aD]}}
W.hz.prototype={
gl:function(a){return a.length}}
W.aE.prototype={$iaE:1}
W.bl.prototype={$ibl:1}
W.hD.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.aE]},
$iv:1,
$av:function(){return[W.aE]},
$at:function(){return[W.aE]},
$ij:1,
$aj:function(){return[W.aE]}}
W.hE.prototype={
gl:function(a){return a.length}}
W.b1.prototype={}
W.hU.prototype={
i:function(a){return String(a)}}
W.ia.prototype={
gl:function(a){return a.length}}
W.b4.prototype={
geV:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.w("deltaY is not supported"))},
geU:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.w("deltaX is not supported"))},
$ib4:1}
W.c0.prototype={
ev:function(a,b){return a.requestAnimationFrame(H.bt(b,1))},
dA:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.ik.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.D]},
$iv:1,
$av:function(){return[W.D]},
$at:function(){return[W.D]},
$ij:1,
$aj:function(){return[W.D]}}
W.dh.prototype={
i:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
n:function(a,b){var u
if(b==null)return!1
u=J.P(b)
return!!u.$ia7&&a.left===u.gct(b)&&a.top===u.gcM(b)&&a.width===u.gaA(b)&&a.height===u.gay(b)},
gF:function(a){return W.kc(C.c.gF(a.left),C.c.gF(a.top),C.c.gF(a.width),C.c.gF(a.height))},
gay:function(a){return a.height},
gaA:function(a){return a.width}}
W.ip.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.at]},
$iv:1,
$av:function(){return[W.at]},
$at:function(){return[W.at]},
$ij:1,
$aj:function(){return[W.at]}}
W.dB.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.y]},
$iv:1,
$av:function(){return[W.y]},
$at:function(){return[W.y]},
$ij:1,
$aj:function(){return[W.y]}}
W.iB.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.aC]},
$iv:1,
$av:function(){return[W.aC]},
$at:function(){return[W.aC]},
$ij:1,
$aj:function(){return[W.aC]}}
W.iC.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.aj]},
$iv:1,
$av:function(){return[W.aj]},
$at:function(){return[W.aj]},
$ij:1,
$aj:function(){return[W.aj]}}
W.ii.prototype={
A:function(a,b){var u,t,s,r,q
for(u=this.gU(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.p)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gU:function(a){var u,t,s,r=this.a.attributes,q=H.b([],[P.m])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.f(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q},
$aR:function(){return[P.m,P.m]}}
W.il.prototype={
h:function(a,b){return this.a.getAttribute(b)},
gl:function(a){return this.gU(this).length}}
W.im.prototype={}
W.io.prototype={
$1:function(a){return this.a.$1(a)}}
W.c1.prototype={
d7:function(a){var u
if($.dq.a===0){for(u=0;u<262;++u)$.dq.m(0,C.J[u],W.mp())
for(u=0;u<12;++u)$.dq.m(0,C.k[u],W.mq())}},
at:function(a){return $.kH().D(0,W.bB(a))},
a6:function(a,b,c){var u=$.dq.h(0,H.d(W.bB(a))+"::"+b)
if(u==null)u=$.dq.h(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$iax:1}
W.F.prototype={
gJ:function(a){return new W.cx(a,this.gl(a))}}
W.cP.prototype={
at:function(a){return C.a.c7(this.a,new W.fP(a))},
a6:function(a,b,c){return C.a.c7(this.a,new W.fO(a,b,c))},
$iax:1}
W.fP.prototype={
$1:function(a){return a.at(this.a)}}
W.fO.prototype={
$1:function(a){return a.a6(this.a,this.b,this.c)}}
W.dJ.prototype={
dc:function(a,b,c,d){var u,t,s
this.a.Y(0,c)
u=b.b1(0,new W.iz())
t=b.b1(0,new W.iA())
this.b.Y(0,u)
s=this.c
s.Y(0,C.L)
s.Y(0,t)},
at:function(a){return this.a.D(0,W.bB(a))},
a6:function(a,b,c){var u=this,t=W.bB(a),s=u.c
if(s.D(0,H.d(t)+"::"+b))return u.d.eK(c)
else if(s.D(0,"*::"+b))return u.d.eK(c)
else{s=u.b
if(s.D(0,H.d(t)+"::"+b))return!0
else if(s.D(0,"*::"+b))return!0
else if(s.D(0,H.d(t)+"::*"))return!0
else if(s.D(0,"*::*"))return!0}return!1},
$iax:1}
W.iz.prototype={
$1:function(a){return!C.a.D(C.k,a)}}
W.iA.prototype={
$1:function(a){return C.a.D(C.k,a)}}
W.iF.prototype={
a6:function(a,b,c){if(this.d0(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.D(0,b)
return!1}}
W.iG.prototype={
$1:function(a){return"TEMPLATE::"+H.d(a)}}
W.iD.prototype={
at:function(a){var u=J.P(a)
if(!!u.$ibP)return!1
u=!!u.$ii
if(u&&W.bB(a)==="foreignObject")return!1
if(u)return!0
return!1},
a6:function(a,b,c){if(b==="is"||C.b.b3(b,"on"))return!1
return this.at(a)},
$iax:1}
W.cx.prototype={
p:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.ch(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gu:function(a){return this.d}}
W.ax.prototype={}
W.ix.prototype={}
W.dZ.prototype={
bz:function(a){new W.iK(this).$2(a,null)},
aG:function(a,b){if(b==null)J.jC(a)
else b.removeChild(a)},
ez:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.kM(a)
n=o.a.getAttribute("is")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=u?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ap(r)}t="element unprintable"
try{t=J.aa(a)}catch(r){H.ap(r)}try{s=W.bB(a)
this.ey(a,b,p,t,s,o,n)}catch(r){if(H.ap(r) instanceof P.ab)throw r
else{this.aG(a,b)
window
q="Removing corrupted element "+H.d(t)
if(typeof console!="undefined")window.console.warn(q)}}},
ey:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=this
if(c){p.aG(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!p.a.at(a)){p.aG(a,b)
window
u="Removing disallowed element <"+H.d(e)+"> from "+H.d(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!p.a.a6(a,"is",g)){p.aG(a,b)
window
u="Removing disallowed type extension <"+H.d(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gU(f)
t=H.b(u.slice(0),[H.a9(u,0)])
for(s=f.gU(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.f(t,s)
r=t[s]
if(!p.a.a6(a,J.kP(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.d(e)+" "+r+'="'+H.d(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.P(a).$ibR)p.bz(a.content)}}
W.iK.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.ez(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aG(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ap(s)
r=u
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=t}}}
W.dg.prototype={}
W.di.prototype={}
W.dj.prototype={}
W.dk.prototype={}
W.dl.prototype={}
W.dn.prototype={}
W.dp.prototype={}
W.dr.prototype={}
W.ds.prototype={}
W.dx.prototype={}
W.dy.prototype={}
W.dz.prototype={}
W.dA.prototype={}
W.dC.prototype={}
W.dD.prototype={}
W.dG.prototype={}
W.dH.prototype={}
W.dI.prototype={}
W.c6.prototype={}
W.c7.prototype={}
W.dK.prototype={}
W.dL.prototype={}
W.dP.prototype={}
W.dS.prototype={}
W.dT.prototype={}
W.c8.prototype={}
W.c9.prototype={}
W.dV.prototype={}
W.dW.prototype={}
W.e_.prototype={}
W.e0.prototype={}
W.e1.prototype={}
W.e2.prototype={}
W.e3.prototype={}
W.e4.prototype={}
W.e5.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.e8.prototype={}
P.iP.prototype={
$2:function(a,b){this.a[a]=b},
$S:7}
P.eQ.prototype={
gaP:function(){var u=this.b,t=H.js(u,"t",0)
return new H.bI(new H.c_(u,new P.eR(),[t]),new P.eS(),[t,W.L])},
m:function(a,b,c){var u=this.gaP()
J.kN(u.b.$1(J.ec(u.a,b)),c)},
q:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.aM(this.gaP().a)},
h:function(a,b){var u=this.gaP()
return u.b.$1(J.ec(u.a,b))},
gJ:function(a){var u=P.jf(this.gaP(),!1,W.L)
return new J.a0(u,u.length)},
$an:function(){return[W.L]},
$at:function(){return[W.L]},
$aj:function(){return[W.L]}}
P.eR.prototype={
$1:function(a){return!!J.P(a).$iL}}
P.eS.prototype={
$1:function(a){return H.r(a,"$iL")}}
P.it.prototype={}
P.a7.prototype={}
P.aW.prototype={$iaW:1}
P.fb.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$in:1,
$an:function(){return[P.aW]},
$at:function(){return[P.aW]},
$ij:1,
$aj:function(){return[P.aW]}}
P.b_.prototype={$ib_:1}
P.fS.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$in:1,
$an:function(){return[P.b_]},
$at:function(){return[P.b_]},
$ij:1,
$aj:function(){return[P.b_]}}
P.fZ.prototype={
gl:function(a){return a.length}}
P.bP.prototype={$ibP:1}
P.hq.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$in:1,
$an:function(){return[P.m]},
$at:function(){return[P.m]},
$ij:1,
$aj:function(){return[P.m]}}
P.i.prototype={
gcc:function(a){return new P.eQ(a,new W.U(a))},
Z:function(a,b,c,d){var u,t,s,r,q,p=H.b([],[W.ax])
p.push(W.kb(null))
p.push(W.kd())
p.push(new W.iD())
c=new W.dZ(new W.cP(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.m).eS(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.U(s)
q=p.gan(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ii:1}
P.b0.prototype={$ib0:1}
P.hF.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$in:1,
$an:function(){return[P.b0]},
$at:function(){return[P.b0]},
$ij:1,
$aj:function(){return[P.b0]}}
P.dt.prototype={}
P.du.prototype={}
P.dE.prototype={}
P.dF.prototype={}
P.dQ.prototype={}
P.dR.prototype={}
P.dX.prototype={}
P.dY.prototype={}
P.ei.prototype={
gl:function(a){return a.length}}
P.ej.prototype={
h:function(a,b){return P.aG(a.get(b))},
A:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aG(u.value[1]))}},
gU:function(a){var u=H.b([],[P.m])
this.A(a,new P.ek(u))
return u},
gl:function(a){return a.size},
$aR:function(){return[P.m,null]}}
P.ek.prototype={
$2:function(a,b){return this.a.push(a)}}
P.el.prototype={
gl:function(a){return a.length}}
P.b9.prototype={}
P.fT.prototype={
gl:function(a){return a.length}}
P.df.prototype={}
P.hl.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return P.aG(a.item(b))},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$in:1,
$an:function(){return[[P.bH,,,]]},
$at:function(){return[[P.bH,,,]]},
$ij:1,
$aj:function(){return[[P.bH,,,]]}}
P.dM.prototype={}
P.dN.prototype={}
K.aq.prototype={
ag:function(a,b){return!0},
i:function(a){return"all"}}
K.cy.prototype={
ag:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)if(u[s].ag(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.p)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s}}
K.aY.prototype={}
K.X.prototype={
ag:function(a,b){return!this.cX(0,b)},
i:function(a){return"!["+this.bD(0)+"]"}}
K.h_.prototype={
ag:function(a,b){if(typeof b!=="number")return H.Z(b)
return this.a<=b&&this.b>=b},
i:function(a){var u=H.jh(this.a),t=H.jh(this.b)
return u+".."+t}}
K.h8.prototype={
d4:function(a){var u,t,s,r
if(a.a.length<=0)throw H.c(P.q("May not create a Set with zero characters."))
u=P.x
t=new H.E([u,P.an])
for(s=new H.aX(a,a.gl(a));s.p();)t.m(0,s.d,!0)
r=P.jf(new H.bi(t,[u]),!0,u)
C.a.cV(r)
this.a=r},
ag:function(a,b){return C.a.D(this.a,b)},
i:function(a){return P.jj(this.a)}}
L.d1.prototype={
k:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new L.d9(this.a.j(0,b))
r.a=H.b([],[K.aY])
r.c=!1
this.c.push(r)
return r},
f1:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
if(r.ag(0,a))return r}return},
i:function(a){return this.b},
c1:function(){var u,t,s,r,q,p=this,o="("+p.b+")",n=p.d
if(n!=null){n=n.b
o+=" => ["+n+"]"
u=p.a
if(u.c.D(0,n))o+=" (consume)"
for(n=p.d.c,n=new H.bi(n,[H.a9(n,0)]),n=n.gJ(n);n.p();){t=n.d
o+="\n"
s=p.d.c.h(0,t)
t=o+("  -- "+H.d(t)+" => ["+H.d(s)+"]")
o=u.c.D(0,s)?t+" (consume)":t}}for(n=p.c,u=n.length,r=0;r<n.length;n.length===u||(0,H.p)(n),++r){q=n[r]
o=o+"\n"+("  -- "+q.i(0))}return o.charCodeAt(0)==0?o:o}}
L.d7.prototype={
i:function(a){var u=H.jx(this.b,"\n","\\n"),t=H.jx(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
L.d8.prototype={
aj:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.p)(c),++t){s=c[t]
this.c.m(0,s,b)}},
i:function(a){return this.b}}
L.hA.prototype={
j:function(a,b){var u=this.a.h(0,b)
if(u==null){u=new L.d1(this,b)
u.c=H.b([],[L.d9])
this.a.m(0,b,u)}return u},
E:function(a){var u,t=this.b.h(0,a)
if(t==null){t=new L.d8(a)
u=P.m
t.c=new H.E([u,u])
this.b.m(0,a,t)}return t},
by:function(a){return this.fF(a)},
fF:function(a){var u=this
return P.lL(function(){var t=a
var s=0,r=1,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
return function $async$by(b,a0){if(b===1){q=a0
s=r}while(true)switch(s){case 0:g=u.d
f=[P.x]
e=H.b([],f)
d=H.b([],f)
c=H.b([],f)
p=null,o=0,n=0,m=0
case 2:if(!!0){s=3
break}if(c.length!==0)l=C.a.bv(c,0)
else{if(!t.p()){s=3
break}l=t.d}d.push(l);++o
k=g.f1(l)
s=k==null?4:6
break
case 4:if(p==null){j=P.jj(d)
throw H.c(P.q("Untokenizable string [state: "+g.b+", index "+o+']: "'+j+'"'))}if(!!d.fixed$length)H.u(P.w("removeRange"))
P.ji(0,m,d.length)
d.splice(0,m-0)
C.a.Y(c,d)
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
if(g.d!=null){j=P.jj(e)
i=g.d
h=i.c.h(0,j)
p=new L.d7(h==null?i.b:h,j,o)
m=d.length
n=o}case 5:s=2
break
case 3:s=p!=null&&!u.c.D(0,p.a)?10:11
break
case 10:s=12
return p
case 12:case 11:return P.lC()
case 1:return P.lD(q)}}},L.d7)},
i:function(a){var u,t=new P.ai(""),s=this.d
if(s!=null)t.a=s.c1()+"\n"
for(s=this.a,s=s.gfG(s),s=new H.cH(J.aL(s.a),s.b);s.p();){u=s.a
if(u!=this.d)t.a+=u.c1()+"\n"}s=t.a
return s.charCodeAt(0)==0?s:s}}
L.d9.prototype={
i:function(a){return this.b.b+": "+this.bD(0)}}
O.bc.prototype={
bG:function(a){this.a=H.b([],[a])
this.c=this.b=null},
bA:function(a,b,c){this.b=b
this.c=a},
b2:function(a,b){return this.bA(a,null,b)},
ed:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
dD:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gJ:function(a){var u=this.a
return new J.a0(u,u.length)},
t:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
q:function(a,b){var u,t,s=this,r=[H.js(s,"bc",0)]
if(s.ed(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.dD(t,H.b([b],r))}},
$ij:1}
O.bJ.prototype={
gl:function(a){return this.a.length},
gw:function(){var u=this.b
return u==null?this.b=D.a5():u},
ao:function(){var u=this.b
if(u!=null)u.R(null)},
gO:function(a){var u=this.a
if(u.length>0)return C.a.gaY(u)
else return V.jg()},
cF:function(a){var u=this.a
if(a==null)u.push(V.jg())
else u.push(a)
this.ao()},
bu:function(){var u=this.a
if(u.length>0){u.pop()
this.ao()}}}
E.en.prototype={}
E.aS.prototype={
sbB:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gw().M(0,s.gcA())
u=s.c
if(u!=null)u.gw().q(0,s.gcA())
t=new D.I("shape",r,s.c)
t.b=!0
s.ah(t)}},
saI:function(a){var u,t,s=this
if(!J.K(s.r,a)){u=s.r
if(u!=null)u.gw().M(0,s.gcw())
if(a!=null)a.gw().q(0,s.gcw())
s.r=a
t=new D.I("mover",u,a)
t.b=!0
s.ah(t)}},
b0:function(a,b){var u,t,s,r,q,p,o,n=this,m=n.r
if(m!=null){u=m.r
t=b.e
if(u<t){m.r=t
u=m.y
if(u!=null)++u.d
m.scO(m.a+m.d*b.y)
m.scD(0,m.b+m.e*b.y)
m.scI(m.c+m.f*b.y)
u=m.c
s=Math.cos(u)
r=Math.sin(u)
u=V.av(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)
t=m.b
s=Math.cos(t)
r=Math.sin(t)
u=u.L(0,V.av(s,0,-r,0,0,1,0,0,r,0,s,0,0,0,0,1))
t=m.a
s=Math.cos(t)
r=Math.sin(t)
m.x=u.L(0,V.av(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1))
u=m.y
if(u!=null)u.ak(0)}q=m.x}else q=null
if(!J.K(q,n.x)){p=n.x
n.x=q
o=new D.I("matrix",p,q)
o.b=!0
n.ah(o)}for(m=n.y.a,m=new J.a0(m,m.length);m.p();)m.d.b0(0,b)},
az:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)s.a.push(s.gO(s))
else s.a.push(r.L(0,s.gO(s)))
s.ao()
a.cG(t.f)
s=a.dy
u=(s&&C.a).gaY(s)
if(u!=null&&t.d!=null)u.fu(a,t)
for(s=t.y.a,s=new J.a0(s,s.length);s.p();)s.d.az(a)
a.cE()
a.dx.bu()},
ah:function(a){var u=this.z
if(u!=null)u.R(a)},
V:function(){return this.ah(null)},
cB:function(a){this.e=null
this.ah(a)},
fg:function(){return this.cB(null)},
cz:function(a){this.ah(a)},
ff:function(){return this.cz(null)},
cv:function(a){this.ah(a)},
fc:function(){return this.cv(null)},
fb:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcu(),s=[{func:1,ret:-1,args:[D.V]}],r=0;r<b.length;b.length===u||(0,H.p)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bf()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.V()},
fe:function(a,b){var u,t
for(u=b.gJ(b),t=this.gcu();u.p();)u.gu(u).gw().M(0,t)
this.V()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.h0.prototype={
d3:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.aQ(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.bJ()
t=[V.au]
u.a=H.b([],t)
u.gw().q(0,new E.h1(s))
s.cy=u
u=new O.bJ()
u.a=H.b([],t)
u.gw().q(0,new E.h2(s))
s.db=u
u=new O.bJ()
u.a=H.b([],t)
u.gw().q(0,new E.h3(s))
s.dx=u
u=H.b([],[O.d4])
s.dy=u
u.push(null)
s.fr=new H.E([P.m,A.cY])},
gfp:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gO(s)
u=t.db
u=t.z=s.L(0,u.gO(u))
s=u}return s},
cG:function(a){var u=this.dy
u.push(a==null?(u&&C.a).gaY(u):a)},
cE:function(){var u=this.dy
if(u.length>1)u.pop()}}
E.h1.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.h2.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.h3.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.d5.prototype={
bJ:function(a){this.cH()},
bI:function(){return this.bJ(null)},
gf4:function(){var u,t=this,s=Date.now(),r=C.d.T(P.jJ(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.aQ(s,!1)
return u/r},
bX:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.L()
if(typeof r!=="number")return H.Z(r)
u=C.c.cp(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.L()
t=C.c.cp(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.k1(C.h,s.gfw())}},
cH:function(){if(!this.cx){this.cx=!0
var u=window
C.u.dA(u)
C.u.ev(u,W.kh(new E.hy(this),P.a3))}},
ft:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.bX()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aQ(r,!1)
s.y=P.jJ(r-s.r.a).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.ao()
r=s.db
C.a.sl(r.a,0)
r.ao()
r=s.dx
C.a.sl(r.a,0)
r.ao()
r=s.dy;(r&&C.a).sl(r,0)
s.dy.push(null)
o.az(p.e)}s=p.Q
if(s!=null)s.R(null)}catch(q){u=H.ap(q)
t=H.jt(q)
P.jw("Error: "+H.d(u))
P.jw("Stack: "+H.d(t))
throw H.c(u)}}}
E.hy.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.ft()}}}
Z.dd.prototype={}
Z.cm.prototype={
aS:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ap(s)
t=P.q('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.d(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.d(u.e)+"]"}}
Z.ib.prototype={}
Z.cn.prototype={
ax:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
aS:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].aS(a)},
cN:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
az:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.f(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.m],p=H.b([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)p.push(u[s].i(0))
r=H.b([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.aa(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.k(p,", ")+"\nAttrs:   "+C.a.k(r,", ")}}
Z.cz.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.d(H.bO(this.c))+"'")+"]"}}
Z.b3.prototype={
gbC:function(a){var u=this.a,t=(u&$.aK().a)!==0?3:0
if((u&$.aJ().a)!==0)t+=3
if((u&$.aI().a)!==0)t+=3
if((u&$.b7().a)!==0)t+=2
if((u&$.b8().a)!==0)t+=3
if((u&$.cf().a)!==0)t+=3
if((u&$.cg().a)!==0)t+=4
if((u&$.bw().a)!==0)++t
return(u&$.aH().a)!==0?t+4:t},
eL:function(a){var u,t=$.aK(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aJ()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aI()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b7()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b8()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cf()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cg()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bw()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aH()
if((s&t.a)!==0)if(u===a)return t
return $.kG()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b3))return!1
return this.a===b.a},
i:function(a){var u=H.b([],[P.m]),t=this.a
if((t&$.aK().a)!==0)u.push("Pos")
if((t&$.aJ().a)!==0)u.push("Norm")
if((t&$.aI().a)!==0)u.push("Binm")
if((t&$.b7().a)!==0)u.push("Txt2D")
if((t&$.b8().a)!==0)u.push("TxtCube")
if((t&$.cf().a)!==0)u.push("Clr3")
if((t&$.cg().a)!==0)u.push("Clr4")
if((t&$.bw().a)!==0)u.push("Weight")
if((t&$.aH().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.a.k(u,"|")}}
D.eq.prototype={}
D.bf.prototype={
q:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.V]}]):u).push(b)},
M:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.a.D(s,b)
if(s===!0){s=t.a
u=(s&&C.a).M(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.a.D(s,b)
if(s===!0){s=t.b
u=(s&&C.a).M(s,b)||u}return u},
R:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.V()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.A(P.jf(u,!0,{func:1,ret:-1,args:[D.V]}),new D.eK(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.V]}])
C.a.A(u,new D.eL(q))}return!0},
ak:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.R(u)}}}}
D.eK.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.eL.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.V.prototype={}
D.bD.prototype={}
D.bE.prototype={}
D.I.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.d(this.d)+" => "+H.d(this.e)}}
X.co.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.co))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.d(this.a)}}
X.cD.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cD))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.d(this.a)}}
X.fa.prototype={
fl:function(a){this.d.q(0,a.a)
return!1},
fh:function(a){this.d.M(0,a.a)
return!1}}
X.fh.prototype={
bt:function(a,b){this.r=a.a
return!1},
aK:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.cS()
if(typeof u!=="number")return u.a0()
this.r=(u&~t)>>>0
return!1},
aJ:function(a,b){return!1},
fm:function(a){return!1},
e2:function(a,b,c){return}}
X.bK.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.bK))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.fG.prototype={
bt:function(a,b){this.f=a.a
return!1},
aK:function(a,b){var u=this.f,t=a.a
if(typeof t!=="number")return t.cS()
if(typeof u!=="number")return u.a0()
this.f=(u&~t)>>>0
return!1},
aJ:function(a,b){return!1},
fn:function(a,b){return!1}}
X.hC.prototype={
fk:function(a){return!1},
fi:function(a){return!1},
fj:function(a){return!1}}
X.dc.prototype={
bQ:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.cD(u,new X.bK(t,a.altKey,a.shiftKey))},
as:function(a){a.shiftKey},
be:function(a){a.shiftKey},
ac:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.P()
u=t.top
if(typeof r!=="number")return r.P()
return new V.ag(s-q,r-u)},
aF:function(a){return new V.aF(a.movementX,a.movementY)},
bc:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.ag])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
q=C.c.a2(r.pageX)
C.c.a2(r.pageY)
p=o.left
C.c.a2(r.pageX)
n.push(new V.ag(q-p,C.c.a2(r.pageY)-o.top))}return n},
aa:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.co(u,new X.bK(t,a.altKey,a.shiftKey))},
b9:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.P()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.P()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
dX:function(a){this.f=!0},
dL:function(a){this.f=!1},
dR:function(a){if(this.f&&this.b9(a))a.preventDefault()},
e0:function(a){var u
if(!this.f)return
u=this.bQ(a)
this.b.fl(u)},
dZ:function(a){var u
if(!this.f)return
u=this.bQ(a)
this.b.fh(u)},
e4:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.as(a)
if(r.x){u=r.aa(a)
t=r.aF(a)
if(r.d.bt(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.aa(a)
s=r.ac(a)
if(r.c.bt(u,s))a.preventDefault()},
e8:function(a){var u,t,s,r=this
r.as(a)
u=r.aa(a)
if(r.x){t=r.aF(a)
if(r.d.aK(u,t))a.preventDefault()
return}if(r.r)return
s=r.ac(a)
if(r.c.aK(u,s))a.preventDefault()},
dV:function(a){var u,t,s,r=this
if(!r.b9(a)){r.as(a)
u=r.aa(a)
if(r.x){t=r.aF(a)
if(r.d.aK(u,t))a.preventDefault()
return}if(r.r)return
s=r.ac(a)
if(r.c.aK(u,s))a.preventDefault()}},
e6:function(a){var u,t,s,r=this
r.as(a)
u=r.aa(a)
if(r.x){t=r.aF(a)
if(r.d.aJ(u,t))a.preventDefault()
return}if(r.r)return
s=r.ac(a)
if(r.c.aJ(u,s))a.preventDefault()},
dT:function(a){var u,t,s,r=this
if(!r.b9(a)){r.as(a)
u=r.aa(a)
if(r.x){t=r.aF(a)
if(r.d.aJ(u,t))a.preventDefault()
return}if(r.r)return
s=r.ac(a)
if(r.c.aJ(u,s))a.preventDefault()}},
ea:function(a){var u,t,s=this
s.as(a)
u=new V.aF((a&&C.t).geU(a),C.t.geV(a)).v(0,180)
if(s.x){if(s.d.fm(u))a.preventDefault()
return}if(s.r)return
t=s.ac(a)
if(s.c.fn(u,t))a.preventDefault()},
ec:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aa(s.y)
t=s.ac(s.y)
s.d.e2(u,t,r)}},
en:function(a){var u,t=this
t.a.focus()
t.f=!0
t.be(a)
u=t.bc(a)
if(t.e.fk(u))a.preventDefault()},
ej:function(a){var u
this.be(a)
u=this.bc(a)
if(this.e.fi(u))a.preventDefault()},
el:function(a){var u
this.be(a)
u=this.bc(a)
if(this.e.fj(u))a.preventDefault()}}
D.em.prototype={$iW:1}
D.bd.prototype={
a8:function(a){var u=this.r
if(u!=null)u.R(a)},
d9:function(){return this.a8(null)},
$iW:1}
D.W.prototype={}
D.cE.prototype={
a8:function(a){var u=this.y
if(u!=null)u.R(a)},
bV:function(a){var u=this.z
if(u!=null)u.R(a)},
e1:function(){return this.bV(null)},
ef:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.p)(a),++t){s=a[t]
if(s==null||this.ds(s))return!1}return!0},
dF:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gbU(),s=[{func:1,ret:-1,args:[D.V]}],r=0;r<b.length;b.length===u||(0,H.p)(b),++r){q=b[r]
if(q instanceof D.bd)this.f.push(q)
p=q.r
if(p==null){p=new D.bf()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}u=new D.bD()
u.b=!0
this.a8(u)},
eh:function(a,b){var u,t,s
for(u=b.gJ(b),t=this.gbU();u.p();){s=u.gu(u)
C.a.M(this.e,s)
s.gw().M(0,t)}u=new D.bE()
u.b=!0
this.a8(u)},
ds:function(a){var u=C.a.D(this.f,a)
return u},
$aj:function(){return[D.W]},
$abc:function(){return[D.W]}}
D.fY.prototype={$iW:1}
D.hk.prototype={$iW:1}
V.N.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.N))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+"]"}}
V.aO.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aO))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.z(u.a,3,0)+", "+V.z(u.b,3,0)+", "+V.z(u.c,3,0)+", "+V.z(u.d,3,0)+"]"}}
V.eJ.prototype={}
V.cK.prototype={
W:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.J])
return t},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cK))return!1
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
i:function(a){var u,t,s,r,q=this,p=[P.J],o=V.bv(H.b([q.a,q.d,q.r],p),3,0),n=V.bv(H.b([q.b,q.e,q.x],p),3,0),m=V.bv(H.b([q.c,q.f,q.y],p),3,0)
p=o.length
if(0>=p)return H.f(o,0)
u="["+o[0]+", "
t=n.length
if(0>=t)return H.f(n,0)
u=u+n[0]+", "
s=m.length
if(0>=s)return H.f(m,0)
u=u+m[0]+",\n"
if(1>=p)return H.f(o,1)
r=" "+o[1]+", "
if(1>=t)return H.f(n,1)
r=r+n[1]+", "
if(1>=s)return H.f(m,1)
r=u+(r+m[1]+",\n")
if(2>=p)return H.f(o,2)
p=" "+o[2]+", "
if(2>=t)return H.f(n,2)
p=p+n[2]+", "
if(2>=s)return H.f(m,2)
return r+(p+m[2]+"]")}}
V.au.prototype={
W:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.J])
return t},
cr:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.A().a)return V.jg()
u=1/b1
t=-n
s=-a0
return V.av((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
L:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.av(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
b_:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.C(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
aL:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.T(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.au))return!1
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
i:function(a){return this.K()},
C:function(a){var u,t,s,r,q,p=this,o=[P.J],n=V.bv(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.bv(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.bv(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.bv(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
o=n.length
if(0>=o)return H.f(n,0)
u="["+n[0]+", "
t=m.length
if(0>=t)return H.f(m,0)
u=u+m[0]+", "
s=l.length
if(0>=s)return H.f(l,0)
u=u+l[0]+", "
r=k.length
if(0>=r)return H.f(k,0)
u=u+k[0]+",\n"
q=a+" "
if(1>=o)return H.f(n,1)
q=q+n[1]+", "
if(1>=t)return H.f(m,1)
q=q+m[1]+", "
if(1>=s)return H.f(l,1)
q=q+l[1]+", "
if(1>=r)return H.f(k,1)
q=u+(q+k[1]+",\n")
u=a+" "
if(2>=o)return H.f(n,2)
u=u+n[2]+", "
if(2>=t)return H.f(m,2)
u=u+m[2]+", "
if(2>=s)return H.f(l,2)
u=u+l[2]+", "
if(2>=r)return H.f(k,2)
u=q+(u+k[2]+",\n")
q=a+" "
if(3>=o)return H.f(n,3)
q=q+n[3]+", "
if(3>=t)return H.f(m,3)
q=q+m[3]+", "
if(3>=s)return H.f(l,3)
q=q+l[3]+", "
if(3>=r)return H.f(k,3)
return u+(q+k[3]+"]")},
K:function(){return this.C("")}}
V.ag.prototype={
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ag))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+"]"}}
V.T.prototype={
H:function(a,b){return new V.T(this.a+b.a,this.b+b.b,this.c+b.c)},
P:function(a,b){return new V.T(this.a-b.a,this.b-b.b,this.c-b.c)},
L:function(a,b){return new V.T(this.a*b,this.b*b,this.c*b)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.T))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+"]"}}
V.cW.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cW))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.z(u.a,3,0)+", "+V.z(u.b,3,0)+", "+V.z(u.c,3,0)+", "+V.z(u.d,3,0)+"]"}}
V.aF.prototype={
br:function(a){var u,t=this.a
if(typeof t!=="number")return t.L()
u=this.b
if(typeof u!=="number")return u.L()
return Math.sqrt(t*t+u*u)},
v:function(a,b){var u,t
if(Math.abs(b-0)<$.A().a){u=$.k5
return u==null?$.k5=new V.aF(0,0):u}u=this.a
if(typeof u!=="number")return u.v()
t=this.b
if(typeof t!=="number")return t.v()
return new V.aF(u/b,t/b)},
n:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aF))return!1
u=b.a
t=this.a
s=$.A()
s.toString
if(typeof u!=="number")return u.P()
if(typeof t!=="number")return H.Z(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.P()
if(typeof t!=="number")return H.Z(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+"]"}}
V.C.prototype={
br:function(a){return Math.sqrt(this.I(this))},
I:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ad:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.C(u*t-s*r,s*q-p*t,p*r-u*q)},
H:function(a,b){return new V.C(this.a+b.a,this.b+b.b,this.c+b.c)},
aB:function(a){return new V.C(-this.a,-this.b,-this.c)},
L:function(a,b){return new V.C(this.a*b,this.b*b,this.c*b)},
v:function(a,b){if(Math.abs(b-0)<$.A().a)return V.bY()
return new V.C(this.a/b,this.b/b,this.c/b)},
cs:function(){var u=$.A().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.C))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+"]"}}
U.cq.prototype={
gw:function(){var u=this.b
return u==null?this.b=D.a5():u},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cq))return!1
return J.K(this.a,b.a)},
i:function(a){return"Constant: "+this.a.C("          ")}}
U.fH.prototype={}
U.cX.prototype={
gw:function(){var u=this.y
return u==null?this.y=D.a5():u},
ar:function(a){var u=this.y
if(u!=null)u.R(a)},
scO:function(a){var u
a=V.jy(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.A().a)){this.a=a
u=new D.I("yaw",u,a)
u.b=!0
this.ar(u)}},
scD:function(a,b){var u
b=V.jy(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.A().a)){this.b=b
u=new D.I("pitch",u,b)
u.b=!0
this.ar(u)}},
scI:function(a){var u
a=V.jy(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.A().a)){this.c=a
u=new D.I("roll",u,a)
u.b=!0
this.ar(u)}},
n:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.cX))return!1
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
return"Rotator: ["+V.z(u.a,3,0)+", "+V.z(u.b,3,0)+", "+V.z(u.c,3,0)+"], ["+V.z(u.d,3,0)+", "+V.z(u.e,3,0)+", "+V.z(u.f,3,0)+"]"}}
M.cv.prototype={
a9:function(a){var u=this.y
if(u!=null)u.R(a)},
da:function(){return this.a9(null)},
dN:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.ga5(),s=[{func:1,ret:-1,args:[D.V]}],r=0;r<b.length;b.length===u||(0,H.p)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bf()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bD()
u.b=!0
this.a9(u)},
dP:function(a,b){var u,t
for(u=b.gJ(b),t=this.ga5();u.p();)u.gu(u).gw().M(0,t)
u=new D.bE()
u.b=!0
this.a9(u)},
scK:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gw().M(0,t.ga5())
u=t.d
t.d=a
if(a!=null)a.gw().q(0,t.ga5())
s=new D.I("technique",u,t.d)
s.b=!0
t.a9(s)}},
gw:function(){var u=this.y
return u==null?this.y=D.a5():u},
az:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
a.cG(f.d)
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
if(typeof s!=="number")return H.Z(s)
o=C.c.a2(p*s)
p=q.b
if(typeof r!=="number")return H.Z(r)
n=C.c.a2(p*r)
p=C.c.a2(q.c*s)
a.c=p
q=C.c.a2(q.d*r)
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
a.cy.cF(i)
t=$.jT
if(t==null){t=V.jV()
q=V.jm()
p=$.k6
t=V.jQ(t,q,p==null?$.k6=new V.C(0,0,-1):p)
$.jT=t
h=t}else h=t
u=u.b
if(u!=null){g=u.a
if(g!=null)h=g.L(0,h)}a.db.cF(h)
u=f.d
if(u!=null)u.b0(0,a)
for(u=f.e.a,u=new J.a0(u,u.length);u.p();)u.d.b0(0,a)
for(u=f.e.a,u=new J.a0(u,u.length);u.p();)u.d.az(a)
f.b.toString
a.cy.bu()
a.db.bu()
f.c.toString
a.cE()}}
A.cj.prototype={}
A.eh.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
f0:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
eW:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.Q.prototype={
ga3:function(a){var u=this.a?1:0
return u|0|0},
i:function(a){var u=this.a?1:0
return""+(u|0|0)},
n:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.Q))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.fl.prototype={
d2:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
b8.z=c3
u=new P.ai("")
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
A.m_(c3,u)
A.m1(c3,u)
A.m0(c3,u)
A.m3(c3,u)
A.m4(c3,u)
A.m2(c3,u)
A.m5(c3,u)
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
m=A.lZ(b8.z)
b8.c=n
b8.d=m
b8.e=b8.bR(n,35633)
b8.f=b8.bR(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!s.getProgramParameter(b8.r,35714)){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.u(P.q("Failed to link shader: "+H.d(l)))}b8.eE()
b8.eG()
b8.Q=b8.x.h(0,"posAttr")
b8.cx=b8.x.h(0,"normAttr")
b8.ch=b8.x.h(0,"binmAttr")
b8.cy=b8.x.h(0,"txt2DAttr")
b8.db=b8.x.h(0,"txtCubeAttr")
b8.dx=b8.x.h(0,"bendAttr")
if(c3.dy)b8.id=H.r(b8.y.N(0,"invViewMat"),"$ia_")
if(t)b8.dy=H.r(b8.y.N(0,"objMat"),"$ia_")
if(r)b8.fr=H.r(b8.y.N(0,"viewObjMat"),"$ia_")
b8.fy=H.r(b8.y.N(0,"projViewObjMat"),"$ia_")
if(c3.go)b8.fx=H.r(b8.y.N(0,"viewMat"),"$ia_")
if(c3.x1)b8.k1=H.r(b8.y.N(0,"txt2DMat"),"$ibV")
if(c3.x2)b8.k2=H.r(b8.y.N(0,"txtCubeMat"),"$ia_")
if(c3.y1)b8.k3=H.r(b8.y.N(0,"colorMat"),"$ia_")
b8.r1=H.b([],[A.a_])
t=c3.aV
if(t>0){b8.k4=b8.y.N(0,"bendMatCount")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.h(0,q)
if(j==null)H.u(P.q(c0+q+c1))
s.push(H.r(j,"$ia_"))}}if(c3.a.a)b8.r2=H.r(b8.y.N(0,"emissionClr"),"$iB")
if(c3.b.a)b8.x1=H.r(b8.y.N(0,"ambientClr"),"$iB")
if(c3.c.a)b8.y2=H.r(b8.y.N(0,"diffuseClr"),"$iB")
if(c3.d.a)b8.aW=H.r(b8.y.N(0,"invDiffuseClr"),"$iB")
t=c3.e.a
if(!t)s=!1
else s=!0
if(s){b8.cj=H.r(b8.y.N(0,"shininess"),"$iM")
if(t)b8.ci=H.r(b8.y.N(0,"specularClr"),"$iB")}if(c3.db){b8.ck=H.r(b8.y.N(0,"envSampler"),"$ibn")
if(c3.r.a)b8.cl=H.r(b8.y.N(0,"reflectClr"),"$iB")
t=c3.x.a
if(!t)s=!1
else s=!0
if(s){b8.cm=H.r(b8.y.N(0,"refraction"),"$iM")
if(t)b8.cn=H.r(b8.y.N(0,"refractClr"),"$iB")}}if(c3.y.a)b8.co=H.r(b8.y.N(0,"alpha"),"$iM")
if(c3.k1){t=c3.z
s=t.length
if(s!==0){r=P.x
b8.bj=new H.E([r,A.b2])
b8.bk=new H.E([r,[P.a6,A.bT]])
for(r=[A.bT],i=0;i<t.length;t.length===s||(0,H.p)(t),++i){h=t[i]
g=h.a
f="barLight"+H.d(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].startPnt"
j=p.h(0,o)
if(j==null)H.u(P.q(c0+o+c1))
H.r(j,"$iB")
p=b8.y
o=f+"s["+k+"].endPnt"
d=p.h(0,o)
if(d==null)H.u(P.q(c0+o+c1))
H.r(d,"$iB")
p=b8.y
o=f+"s["+k+"].color"
c=p.h(0,o)
if(c==null)H.u(P.q(c0+o+c1))
H.r(c,"$iB")
if(typeof g!=="number")return g.a0()
if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
b=p.h(0,o)
if(b==null)H.u(P.q(c0+o+c1))
H.r(b,"$iM")
p=b8.y
o=f+"s["+k+"].att1"
a=p.h(0,o)
if(a==null)H.u(P.q(c0+o+c1))
H.r(a,"$iM")
p=b8.y
o=f+"s["+k+"].att2"
a0=p.h(0,o)
if(a0==null)H.u(P.q(c0+o+c1))
H.r(a0,"$iM")
a1=a0
a2=a
a3=b}else{a1=b9
a2=a1
a3=a2}e.push(new A.bT(j,d,c,a3,a2,a1))}b8.bk.m(0,g,e)
q=b8.bj
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.u(P.q(c0+o+c1))
q.m(0,g,j)}}t=c3.Q
s=t.length
if(s!==0){r=P.x
b8.bl=new H.E([r,A.b2])
b8.bm=new H.E([r,[P.a6,A.bU]])
for(r=[A.bU],i=0;i<t.length;t.length===s||(0,H.p)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.d(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.a0()
p=(g&1)!==0
if(p){o=b8.y
a4=f+"s["+k+"].objUp"
j=o.h(0,a4)
if(j==null)H.u(P.q(c0+a4+c1))
H.r(j,"$iB")
o=b8.y
a4=f+"s["+k+"].objRight"
d=o.h(0,a4)
if(d==null)H.u(P.q(c0+a4+c1))
H.r(d,"$iB")
o=b8.y
a4=f+"s["+k+"].objDir"
c=o.h(0,a4)
if(c==null)H.u(P.q(c0+a4+c1))
H.r(c,"$iB")
a5=c
a6=d
a7=j}else{a5=b9
a6=a5
a7=a6}o=b8.y
a4=f+"s["+k+"].viewDir"
j=o.h(0,a4)
if(j==null)H.u(P.q(c0+a4+c1))
H.r(j,"$iB")
o=b8.y
a4=f+"s["+k+"].color"
d=o.h(0,a4)
if(d==null)H.u(P.q(c0+a4+c1))
H.r(d,"$iB")
if(p){p=b8.y
o=f+"sTexture2D"+k
c=p.h(0,o)
if(c==null)H.u(P.q(c0+o+c1))
H.r(c,"$ibm")
a8=c}else a8=b9
e.push(new A.bU(a7,a6,a5,j,d,a8))}b8.bm.m(0,g,e)
q=b8.bl
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.u(P.q(c0+o+c1))
q.m(0,g,j)}}t=c3.ch
s=t.length
if(s!==0){r=P.x
b8.bn=new H.E([r,A.b2])
b8.bo=new H.E([r,[P.a6,A.bW]])
for(r=[A.bW],i=0;i<t.length;t.length===s||(0,H.p)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.d(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.h(0,o)
if(j==null)H.u(P.q(c0+o+c1))
H.r(j,"$iB")
p=b8.y
o=f+"s["+k+"].viewPnt"
d=p.h(0,o)
if(d==null)H.u(P.q(c0+o+c1))
H.r(d,"$iB")
p=b8.y
o=f+"s["+k+"].color"
c=p.h(0,o)
if(c==null)H.u(P.q(c0+o+c1))
H.r(c,"$iB")
if(typeof g!=="number")return g.a0()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
b=p.h(0,o)
if(b==null)H.u(P.q(c0+o+c1))
H.r(b,"$ibV")
a9=b}else a9=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
b=p.h(0,o)
if(b==null)H.u(P.q(c0+o+c1))
H.r(b,"$ibn")
a8=b}else a8=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
b=p.h(0,o)
if(b==null)H.u(P.q(c0+o+c1))
H.r(b,"$ibn")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a=p.h(0,o)
if(a==null)H.u(P.q(c0+o+c1))
H.r(a,"$ibS")
b0=b
b1=a}else{b0=b9
b1=b0}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
b=p.h(0,o)
if(b==null)H.u(P.q(c0+o+c1))
H.r(b,"$iM")
p=b8.y
o=f+"s["+k+"].att1"
a=p.h(0,o)
if(a==null)H.u(P.q(c0+o+c1))
H.r(a,"$iM")
p=b8.y
o=f+"s["+k+"].att2"
a0=p.h(0,o)
if(a0==null)H.u(P.q(c0+o+c1))
H.r(a0,"$iM")
a1=a0
a2=a
a3=b}else{a1=b9
a2=a1
a3=a2}e.push(new A.bW(j,d,a9,c,a8,b0,b1,a3,a2,a1))}b8.bo.m(0,g,e)
q=b8.bn
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.u(P.q(c0+o+c1))
q.m(0,g,j)}}t=c3.cx
s=t.length
if(s!==0){r=P.x
b8.bp=new H.E([r,A.b2])
b8.bq=new H.E([r,[P.a6,A.bX]])
for(r=[A.bX],i=0;i<t.length;t.length===s||(0,H.p)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.d(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.h(0,o)
if(j==null)H.u(P.q(c0+o+c1))
H.r(j,"$iB")
p=b8.y
o=f+"s["+k+"].objDir"
d=p.h(0,o)
if(d==null)H.u(P.q(c0+o+c1))
H.r(d,"$iB")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.h(0,o)
if(c==null)H.u(P.q(c0+o+c1))
H.r(c,"$iB")
p=b8.y
o=f+"s["+k+"].color"
b=p.h(0,o)
if(b==null)H.u(P.q(c0+o+c1))
H.r(b,"$iB")
if(typeof g!=="number")return g.a0()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a=p.h(0,o)
if(a==null)H.u(P.q(c0+o+c1))
H.r(a,"$iB")
p=b8.y
o=f+"s["+k+"].objRight"
a0=p.h(0,o)
if(a0==null)H.u(P.q(c0+o+c1))
H.r(a0,"$iB")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.h(0,o)
if(b2==null)H.u(P.q(c0+o+c1))
H.r(b2,"$iM")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.h(0,o)
if(b3==null)H.u(P.q(c0+o+c1))
H.r(b3,"$iM")
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
if(a==null)H.u(P.q(c0+a4+c1))
H.r(a,"$ibS")
b1=a}else b1=b9
if((g&8)!==0){o=b8.y
a4=f+"s["+k+"].cutoff"
a=o.h(0,a4)
if(a==null)H.u(P.q(c0+a4+c1))
H.r(a,"$iM")
o=b8.y
a4=f+"s["+k+"].coneAngle"
a0=o.h(0,a4)
if(a0==null)H.u(P.q(c0+a4+c1))
H.r(a0,"$iM")
b6=a0
b7=a}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
a4=f+"s["+k+"].att0"
a=o.h(0,a4)
if(a==null)H.u(P.q(c0+a4+c1))
H.r(a,"$iM")
o=b8.y
a4=f+"s["+k+"].att1"
a0=o.h(0,a4)
if(a0==null)H.u(P.q(c0+a4+c1))
H.r(a0,"$iM")
o=b8.y
a4=f+"s["+k+"].att2"
b2=o.h(0,a4)
if(b2==null)H.u(P.q(c0+a4+c1))
H.r(b2,"$iM")
a1=b2
a2=a0
a3=a}else{a1=b9
a2=a1
a3=a2}if((g&1)!==0){o=b8.y
a4=f+"sTexture2D"+k
a=o.h(0,a4)
if(a==null)H.u(P.q(c0+a4+c1))
H.r(a,"$ibm")
a8=a}else a8=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a=p.h(0,o)
if(a==null)H.u(P.q(c0+o+c1))
H.r(a,"$ibm")
b0=a}else b0=b9
e.push(new A.bX(j,d,c,b,a7,a6,b5,b4,b1,b7,b6,a3,a2,a1,a8,b0))}b8.bq.m(0,g,e)
q=b8.bp
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.u(P.q(c0+o+c1))
q.m(0,g,j)}}}},
eA:function(a,b){}}
A.ck.prototype={
i:function(a){return"barLight"+H.d(this.a)}}
A.cs.prototype={
i:function(a){return"dirLight"+H.d(this.a)}}
A.cU.prototype={
i:function(a){return"pointLight"+H.d(this.a)}}
A.d_.prototype={
i:function(a){return"spotLight"+H.d(this.a)}}
A.fo.prototype={
i:function(a){return this.aH}}
A.bT.prototype={}
A.bU.prototype={}
A.bW.prototype={}
A.bX.prototype={}
A.cY.prototype={
d5:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
bR:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.q("Error compiling shader '"+H.d(s)+"': "+H.d(u)))}return s},
eE:function(){var u,t,s,r=this,q=H.b([],[A.cj]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.Z(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cj(p,t.name,s))}r.x=new A.eh(q)},
eG:function(){var u,t,s,r=this,q=H.b([],[A.da]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.Z(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.eT(t.type,t.size,t.name,s))}r.y=new A.hO(q)},
aq:function(a,b,c){var u=this.a
if(a===1)return new A.b2(u,b,c)
else return A.jl(u,this.r,b,a,c)},
dv:function(a,b,c){var u=this.a
if(a===1)return new A.bm(u,b,c)
else return A.jl(u,this.r,b,a,c)},
dw:function(a,b,c){var u=this.a
if(a===1)return new A.bn(u,b,c)
else return A.jl(u,this.r,b,a,c)},
aR:function(a,b){return new P.dm(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.d(b)+"."))},
eT:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aq(b,c,d)
case 5121:return u.aq(b,c,d)
case 5122:return u.aq(b,c,d)
case 5123:return u.aq(b,c,d)
case 5124:return u.aq(b,c,d)
case 5125:return u.aq(b,c,d)
case 5126:return new A.M(u.a,c,d)
case 35664:return new A.hK(u.a,c,d)
case 35665:return new A.B(u.a,c,d)
case 35666:return new A.bS(u.a,c,d)
case 35667:return new A.hL(u.a,c,d)
case 35668:return new A.hM(u.a,c,d)
case 35669:return new A.hN(u.a,c,d)
case 35674:return new A.hP(u.a,c,d)
case 35675:return new A.bV(u.a,c,d)
case 35676:return new A.a_(u.a,c,d)
case 35678:return u.dv(b,c,d)
case 35680:return u.dw(b,c,d)
case 35670:throw H.c(u.aR("BOOL",c))
case 35671:throw H.c(u.aR("BOOL_VEC2",c))
case 35672:throw H.c(u.aR("BOOL_VEC3",c))
case 35673:throw H.c(u.aR("BOOL_VEC4",c))
default:throw H.c(P.q("Unknown uniform variable type "+H.d(a)+" for "+H.d(c)+"."))}}}
A.da.prototype={}
A.hO.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
N:function(a,b){var u=this.h(0,b)
if(u==null)throw H.c(P.q("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.K()},
K:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.p)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.b2.prototype={
i:function(a){return"Uniform1i: "+H.d(this.c)}}
A.hL.prototype={
i:function(a){return"Uniform2i: "+H.d(this.c)}}
A.hM.prototype={
i:function(a){return"Uniform3i: "+H.d(this.c)}}
A.hN.prototype={
i:function(a){return"Uniform4i: "+H.d(this.c)}}
A.hJ.prototype={
i:function(a){return"Uniform1iv: "+H.d(this.c)}}
A.M.prototype={
i:function(a){return"Uniform1f: "+H.d(this.c)}}
A.hK.prototype={
i:function(a){return"Uniform2f: "+H.d(this.c)}}
A.B.prototype={
i:function(a){return"Uniform3f: "+H.d(this.c)}}
A.bS.prototype={
i:function(a){return"Uniform4f: "+H.d(this.c)}}
A.hP.prototype={
i:function(a){return"Uniform1Mat2 "+H.d(this.c)}}
A.bV.prototype={
a1:function(a){var u=new Float32Array(H.ca(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.d(this.c)}}
A.a_.prototype={
a1:function(a){var u=new Float32Array(H.ca(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.d(this.c)}}
A.bm.prototype={
i:function(a){return"UniformSampler2D: "+H.d(this.c)}}
A.bn.prototype={
i:function(a){return"UniformSamplerCube: "+H.d(this.c)}}
F.j1.prototype={
$1:function(a){return new V.T(Math.cos(a),Math.sin(a),0)}}
F.iQ.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.jB(n.$1(o),m)
m=J.jB(n.$1(o+3.141592653589793/p.c),m).P(0,l)
m=new V.C(m.a,m.b,m.c)
u=m.v(0,Math.sqrt(m.I(m)))
n=$.k7
if(n==null){n=new V.C(1,0,0)
$.k7=n
t=n}else t=n
n=u.ad(!J.K(u,t)?V.k9():t)
s=n.v(0,Math.sqrt(n.I(n)))
n=s.ad(u)
t=n.v(0,Math.sqrt(n.I(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.L(0,n*m)
m=s.L(0,q*m)
m=l.H(0,new V.T(n.a-m.a,n.b-m.b,n.c-m.c))
if(!J.K(a.f,m)){a.f=m
n=a.a
if(n!=null)n.V()}}}
F.bg.prototype={
aU:function(){var u=this
if(!u.gcf()){C.a.M(u.a.a.d.b,u)
u.a.a.V()}u.eq()
u.er()
u.es()},
eB:function(a){this.a=a
a.d.b.push(this)},
eC:function(a){this.b=a
a.d.c.push(this)},
eD:function(a){this.c=a
a.d.d.push(this)},
eq:function(){var u=this.a
if(u!=null){C.a.M(u.d.b,this)
this.a=null}},
er:function(){var u=this.b
if(u!=null){C.a.M(u.d.c,this)
this.b=null}},
es:function(){var u=this.c
if(u!=null){C.a.M(u.d.d,this)
this.c=null}},
gcf:function(){return this.a==null||this.b==null||this.c==null},
dm:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.bY()
if(q!=null)s=s.H(0,q)
if(u!=null)s=s.H(0,u)
if(t!=null)s=s.H(0,t)
if(s.cs())return
return s.v(0,Math.sqrt(s.I(s)))},
dq:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.P(0,q)
r=new V.C(r.a,r.b,r.c)
s=r.v(0,Math.sqrt(r.I(r)))
r=t.P(0,q)
r=new V.C(r.a,r.b,r.c)
r=s.ad(r.v(0,Math.sqrt(r.I(r))))
return r.v(0,Math.sqrt(r.I(r)))},
bh:function(){var u,t=this
if(t.d!=null)return!0
u=t.dm()
if(u==null){u=t.dq()
if(u==null)return!1}t.d=u
t.a.a.V()
return!0},
dl:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.bY()
if(q!=null)s=s.H(0,q)
if(u!=null)s=s.H(0,u)
if(t!=null)s=s.H(0,t)
if(s.cs())return
return s.v(0,Math.sqrt(s.I(s)))},
dn:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.A().a){l=d.P(0,g)
l=new V.C(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.I(l)))
if(s.a-t.a<0)q=q.aB(0)}else{p=(l-u.b)/r
l=d.P(0,g).L(0,p).H(0,g).P(0,j)
l=new V.C(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.I(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.aB(0)}l=n.d
if(l!=null){o=l.v(0,Math.sqrt(l.I(l)))
l=o.ad(q)
l=l.v(0,Math.sqrt(l.I(l))).ad(o)
q=l.v(0,Math.sqrt(l.I(l)))}return q},
bf:function(){var u,t=this
if(t.e!=null)return!0
u=t.dl()
if(u==null){u=t.dn()
if(u==null)return!1}t.e=u
t.a.a.V()
return!0},
gcd:function(a){var u=this
if(J.K(u.a,u.b))return!0
if(J.K(u.b,u.c))return!0
if(J.K(u.c,u.a))return!0
return!1},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
C:function(a){var u,t,s=this
if(s.gcf())return a+"disposed"
u=a+C.b.ai(J.aa(s.a.e),0)+", "+C.b.ai(J.aa(s.b.e),0)+", "+C.b.ai(J.aa(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
K:function(){return this.C("")}}
F.eN.prototype={}
F.hh.prototype={
bs:function(a,b,c){var u,t=b.a
t.a.a.G()
t=t.e
u=c.a
u.a.a.G()
if(t==u.e){t=b.b
t.a.a.G()
t=t.e
u=c.b
u.a.a.G()
if(t==u.e){t=b.c
t.a.a.G()
t=t.e
u=c.c
u.a.a.G()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.G()
t=t.e
u=c.b
u.a.a.G()
if(t==u.e){t=b.b
t.a.a.G()
t=t.e
u=c.c
u.a.a.G()
if(t==u.e){t=b.c
t.a.a.G()
t=t.e
u=c.a
u.a.a.G()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.G()
t=t.e
u=c.c
u.a.a.G()
if(t==u.e){t=b.b
t.a.a.G()
t=t.e
u=c.a
u.a.a.G()
if(t==u.e){t=b.c
t.a.a.G()
t=t.e
u=c.b
u.a.a.G()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.cF.prototype={}
F.fc.prototype={}
F.hI.prototype={}
F.cS.prototype={}
F.h9.prototype={
gw:function(){var u=this.e
return u==null?this.e=D.a5():u},
au:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.au()||!1
if(!t.a.au())u=!1
s=t.e
if(s!=null)s.ak(0)
return u},
f9:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.b(o.slice(0),[H.a9(o,0)])
for(o=[F.bZ];u.length!==0;){t=C.a.gf2(u)
C.a.bv(u,0)
if(t!=null){s=H.b([],o)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.f(u,r)
q=u[r]
if(q!=null&&a.bs(0,t,q)){s.push(q)
C.a.bv(u,r)}}if(s.length>1)b.f8(s)}}p.a.G()
p.c.bw()
p.d.bw()
p.b.fs()
p.c.bx(new F.hI())
p.d.bx(new F.hh())
o=p.e
if(o!=null)o.ak(0)},
eO:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.aK()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.aJ().a)!==0)++s
if((t&$.aI().a)!==0)++s
if((t&$.b7().a)!==0)++s
if((t&$.b8().a)!==0)++s
if((t&$.cf().a)!==0)++s
if((t&$.cg().a)!==0)++s
if((t&$.bw().a)!==0)++s
if((t&$.aH().a)!==0)++s
r=a4.gbC(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.J])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.cm])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.eL(m)
k=l.gbC(l)
if(m>=t)return H.f(o,m)
o[m]=new Z.cm(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.f(i,j)
h=i[j].f7(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.f(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.ca(p)),35044)
u.bindBuffer(a1,null)
c=new Z.cn(new Z.dd(a1,d),o,a4)
c.b=H.b([],[Z.cz])
a0.b.b
a0.c.b
if(a0.d.b.length!==0){b=H.b([],[P.x])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.G()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.f(t,m)
t=t[m].b
t.a.a.G()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.f(t,m)
t=t[m].c
t.a.a.G()
b.push(t.e)}a=Z.lv(u,34963,b)
c.b.push(new Z.cz(4,b.length,a))}return c},
i:function(a){var u=this,t=H.b([],[P.m])
if(u.a.c.length!==0){t.push("Vertices:")
t.push(u.a.C("   "))}u.b.b
u.c.b
if(u.d.b.length!==0){t.push("Faces:")
t.push(u.d.C("   "))}return C.a.k(t,"\n")},
V:function(){var u=this.e
if(u!=null)u.R(null)}}
F.ha.prototype={
eJ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.bg])
for(u=this.a,t=b,s=0,r=!1,q=1;q<a;++q,++s,++t){for(p=r,o=1;o<b;++o,t=k){n=c.length
if(s<0||s>=n)return H.f(c,s)
m=c[s];++s
if(s>=n)return H.f(c,s)
l=c[s]
k=t+1
if(k<0||k>=n)return H.f(c,k)
j=c[k]
if(t<0||t>=n)return H.f(c,t)
i=c[t]
n=u.a
if(p){n.q(0,m)
u.a.q(0,l)
u.a.q(0,j)
h.push(F.eM(m,l,j))
u.a.q(0,m)
u.a.q(0,j)
u.a.q(0,i)
h.push(F.eM(m,j,i))}else{n.q(0,l)
u.a.q(0,j)
u.a.q(0,i)
h.push(F.eM(l,j,i))
u.a.q(0,l)
u.a.q(0,i)
u.a.q(0,m)
h.push(F.eM(l,i,m))}p=!p}r=!r}return h},
gl:function(a){return this.b.length},
bx:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.f(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.h(0,q)
for(o=q-1;o>=0;--o){n=r.d.h(0,o)
if(a.bs(0,p,n)){p.aU()
break}}}}},
bw:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.f(t,u)
s=t[u]
t=s.gcd(s)
if(t)s.aU()}},
au:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.p)(u),++r)if(!u[r].bh())s=!1
return s},
bg:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.p)(u),++r)if(!u[r].bf())s=!1
return s},
i:function(a){return this.K()},
C:function(a){var u,t,s,r=H.b([],[P.m])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].C(a))
return C.a.k(r,"\n")},
K:function(){return this.C("")}}
F.hb.prototype={
gl:function(a){return 0},
bx:function(a){var u,t,s,r,q
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.f(s,t)
r=s[t]
for(r.c.c,q=-1;!1;--q)r.c.h(0,q)}},
bw:function(){var u,t,s
for(u=-1;!1;--u){t=this.b
return H.f(t,u)
s=t[u]
t=s.gcd(s)
if(t)s.aU()}},
i:function(a){return this.K()},
C:function(a){var u,t,s=H.b([],[P.m])
for(u=0;!1;++u){t=this.b
if(u>=0)return H.f(t,u)
s.push(t[u].C(a+(""+u+". ")))}return C.a.k(s,"\n")},
K:function(){return this.C("")}}
F.hc.prototype={
gl:function(a){return 0},
fs:function(){var u,t
for(u=-1;!1;--u){t=this.b
return H.f(t,u)
t=t[u].gh8()
t=t.gh3(t)
if(t.gl(t).S(0,1)){t=this.b
return H.f(t,u)
t[u].aU()}}},
i:function(a){return this.K()},
C:function(a){var u,t,s=H.b([],[P.m])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.f(u,t)
s.push(u[t].C(a))}return C.a.k(s,"\n")},
K:function(){return this.C("")}}
F.bZ.prototype={
ce:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.ka(u.cx,r,o,t,s,q,p,a,n)},
f7:function(a){var u,t,s=this
if(a.n(0,$.aK())){u=s.f
t=[P.J]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.aJ())){u=s.r
t=[P.J]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.aI())){u=s.x
t=[P.J]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.b7())){u=s.y
t=[P.J]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.n(0,$.b8())){u=s.z
t=[P.J]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.cf())){u=s.Q
t=[P.J]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.cg())){u=s.Q
t=[P.J]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.n(0,$.bw()))return H.b([s.ch],[P.J])
else if(a.n(0,$.aH())){u=H.b([-1,-1,-1,-1],[P.J])
return u}else return H.b([],[P.J])},
bh:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.bY()
t.d.A(0,new F.i9(s))
s=s.a
t.r=s.v(0,Math.sqrt(s.I(s)))
s=t.a
if(s!=null){s.V()
s=t.a.e
if(s!=null)s.ak(0)}return!0},
bf:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.bY()
t.d.A(0,new F.i8(s))
s=s.a
t.x=s.v(0,Math.sqrt(s.I(s)))
s=t.a
if(s!=null){s.V()
s=t.a.e
if(s!=null)s.ak(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
C:function(a){var u,t,s=this,r="-",q=H.b([],[P.m])
q.push(C.b.ai(J.aa(s.e),0))
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
q.push(V.z(s.ch,3,0))
q.push(r)
t=C.a.k(q,", ")
return a+"{"+t+"}"},
K:function(){return this.C("")}}
F.i9.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.H(0,t)}}}
F.i8.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.H(0,t)}}}
F.i_.prototype={
G:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.f(u,r)
u[r].e=s;++s}this.b=!1}},
q:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.q("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.V()
return!0},
c5:function(a,b){var u=null,t=F.ka(u,u,a,u,u,b,u,u,0)
this.q(0,t)
return t},
gl:function(a){return this.c.length},
au:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)u[s].bh()
return!0},
bg:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)u[s].bf()
return!0},
eP:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.v(0,Math.sqrt(p*p+o*o+n*n))
if(!J.K(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.R(null)}}}}return!0},
i:function(a){return this.K()},
C:function(a){var u,t,s,r
this.G()
u=H.b([],[P.m])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.p)(t),++r)u.push(t[r].C(a))
return C.a.k(u,"\n")},
K:function(){return this.C("")}}
F.i0.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
h:function(a,b){var u,t=this.b,s=t.length
if(b<s){if(b<0)return H.f(t,b)
return t[b]}b-=s
t=this.c
u=t.length
if(b<u){if(b<0)return H.f(t,b)
return t[b]}b-=u
t=this.d
if(b<0||b>=t.length)return H.f(t,b)
return t[b]},
A:function(a,b){var u=this
C.a.A(u.b,b)
C.a.A(u.c,new F.i1(u,b))
C.a.A(u.d,new F.i2(u,b))},
i:function(a){return this.K()},
K:function(){var u,t,s,r=H.b([],[P.m])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].C(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].C(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].C(""))
return C.a.k(r,"\n")}}
F.i1.prototype={
$1:function(a){if(!J.K(a.a,this.a))this.b.$1(a)}}
F.i2.prototype={
$1:function(a){var u=this.a
if(!J.K(a.a,u)&&!J.K(a.b,u))this.b.$1(a)}}
F.i3.prototype={
gl:function(a){return 0},
h:function(a,b){var u,t
if(b>=0){u=this.c
t=b-0
if(t>=0)return H.f(u,t)
return u[t]}else{u=this.b
return H.f(u,b)
return u[b]}},
i:function(a){return this.K()},
K:function(){var u,t,s=H.b([],[P.m])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.f(u,t)
s.push(u[t].C(""))}for(u=this.c,t=0;!1;++t){if(t>=0)return H.f(u,t)
s.push(u[t].C(""))}return C.a.k(s,"\n")}}
F.i5.prototype={}
F.i4.prototype={
bs:function(a,b,c){return J.K(b.f,c.f)}}
F.i6.prototype={}
F.fQ.prototype={
f8:function(a){var u,t,s,r,q,p,o,n,m=V.bY()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null)m=new V.C(m.a+s.a,m.b+s.b,m.c+s.c)}m=m.v(0,Math.sqrt(m.I(m)))
for(u=a.length,s=m==null,t=0;t<a.length;a.length===u||(0,H.p)(a),++t){r=a[t]
if(s)q=null
else{p=m.a
o=m.b
n=m.c
q=m.v(0,Math.sqrt(p*p+o*o+n*n))}if(!J.K(r.r,q)){r.r=q
p=r.a
if(p!=null){p=p.e
if(p!=null)p.R(null)}}}return}}
F.i7.prototype={
gl:function(a){return 0},
i:function(a){return this.K()},
K:function(){var u,t,s=H.b([],[P.m])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.f(u,t)
s.push(u[t].C(""))}return C.a.k(s,"\n")}}
O.cI.prototype={
gw:function(){var u=this.fr
return u==null?this.fr=D.a5():u},
X:function(a){var u=this.fr
if(u!=null)u.R(a)},
de:function(){return this.X(null)},
bW:function(a){this.a=null
this.X(a)},
ex:function(){return this.bW(null)},
dH:function(a,b){var u=new D.bD()
u.b=!0
this.X(u)},
dJ:function(a,b){var u=new D.bE()
u.b=!0
this.X(u)},
bP:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=P.x
f=[f,f]
u=new H.E(f)
for(t=g.dx.e,s=t.length,r=0;r<t.length;t.length===s||(0,H.p)(t),++r){q=t[r]
p=q.ga7()
o=u.h(0,q.ga7())
u.m(0,p,o==null?1:o)}n=H.b([],[A.ck])
u.A(0,new O.fs(g,n))
C.a.aD(n,new O.ft())
m=new H.E(f)
for(t=g.dx.f,s=t.length,r=0;r<t.length;t.length===s||(0,H.p)(t),++r){p=m.h(0,0)
m.m(0,0,p==null?1:p)}l=H.b([],[A.cs])
m.A(0,new O.fu(g,l))
C.a.aD(l,new O.fv())
k=new H.E(f)
for(t=g.dx.r,s=t.length,r=0;r<t.length;t.length===s||(0,H.p)(t),++r){q=t[r]
p=q.ga7()
o=k.h(0,q.ga7())
k.m(0,p,o==null?1:o)}j=H.b([],[A.cU])
k.A(0,new O.fw(g,j))
C.a.aD(j,new O.fx())
i=new H.E(f)
for(f=g.dx.x,t=f.length,r=0;r<f.length;f.length===t||(0,H.p)(f),++r){q=f[r]
s=q.ga7()
p=i.h(0,q.ga7())
i.m(0,s,p==null?1:p)}h=H.b([],[A.d_])
i.A(0,new O.fy(g,h))
C.a.aD(h,new O.fz())
f=C.d.T(g.e.a.length+3,4)
g.dy.e
return A.l9(!1,!1,!1,!1,f*4,g.f.c,g.r.c,g.x.c,g.y.c,g.z.c,g.Q.c,g.cx.c,g.cy.c,g.db.c,n,l,j,h)},
dk:function(a,b){},
b0:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.a0(u,u.length);u.p();){t=u.d
t.toString
s=$.hZ
if(s==null)s=$.hZ=new V.C(0,0,1)
t.a=s
r=$.hY
t.d=r==null?$.hY=new V.C(0,1,0):r
r=$.hX
t.e=r==null?$.hX=new V.C(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.b_(s)
r=s.a
p=s.b
o=s.c
t.a=s.v(0,Math.sqrt(r*r+p*p+o*o))
o=q.b_(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.v(0,Math.sqrt(p*p+r*r+s*s))
s=q.b_(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.v(0,Math.sqrt(r*r+p*p+o*o))}}}},
fu:function(b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.bP()
u=b4.fr.h(0,b3.aH)
if(u==null){u=A.l8(b3,b4.a)
t=u.b
if(t.length===0)H.u(P.q("May not cache a shader with no name."))
if(b4.fr.eQ(0,t))H.u(P.q('Shader cache already contains a shader by the name "'+t+'".'))
b4.fr.m(0,t,u)}b3=b2.a=u
b5.e=null}s=b3.z
r=s.aW
b3=b5.e
if(!(b3 instanceof Z.cn))b3=b5.e=null
if(b3==null||!b3.d.n(0,r)){b3=s.k4
if(b3)b5.d.au()
q=s.r1
if(q){p=b5.d
o=p.e
if(o!=null)++o.d
p.d.bg()
p.a.bg()
p=p.e
if(p!=null)p.ak(0)}p=s.rx
if(p){o=b5.d
n=o.e
if(n!=null)++n.d
o.a.eP()
o=o.e
if(o!=null)o.ak(0)}m=b5.d.eO(new Z.ib(b4.a),r)
m.ax($.aK()).e=b2.a.Q.c
if(b3)m.ax($.aJ()).e=b2.a.cx.c
if(q)m.ax($.aI()).e=b2.a.ch.c
if(s.r2)m.ax($.b7()).e=b2.a.cy.c
if(p)m.ax($.b8()).e=b2.a.db.c
if(s.ry)m.ax($.aH()).e=b2.a.dx.c
b5.e=m}l=H.b([],[T.hx])
b3=b2.a
q=b4.a
q.useProgram(b3.r)
b3.x.f0()
if(s.fr){b3=b2.a
p=b4.dx
p=p.gO(p)
b3=b3.dy
b3.toString
b3.a1(p.W(0,!0))}if(s.fx){b3=b2.a
p=b4.cx
if(p==null){p=b4.db
p=p.gO(p)
o=b4.dx
o=b4.cx=p.L(0,o.gO(o))
p=o}b3=b3.fr
b3.toString
b3.a1(p.W(0,!0))}b3=b2.a
p=b4.ch
if(p==null){p=b4.gfp()
o=b4.dx
o=b4.ch=p.L(0,o.gO(o))
p=o}b3=b3.fy
b3.toString
b3.a1(p.W(0,!0))
if(s.go){b3=b2.a
p=b4.db
p=p.gO(p)
b3=b3.fx
b3.toString
b3.a1(p.W(0,!0))}if(s.x1){b3=b2.a
p=b2.b
b3=b3.k1
b3.toString
b3.a1(C.i.W(p,!0))}if(s.x2){b3=b2.a
p=b2.c
b3=b3.k2
b3.toString
b3.a1(C.i.W(p,!0))}if(s.y1){b3=b2.a
p=b2.d
b3=b3.k3
b3.toString
b3.a1(C.i.W(p,!0))}if(s.aV>0){k=b2.e.a.length
b3=b2.a.k4
b3.a.uniform1i(b3.d,k)
for(j=0;j<k;++j){b3=b2.a
p=b2.e.a
if(j>=p.length)return H.f(p,j)
p=p[j]
b3=b3.r1
if(j>=b3.length)return H.f(b3,j)
b3=b3[j]
i=new Float32Array(H.ca(p.W(0,!0)))
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
b3=b3.aW
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}b3=s.e.a
if(!b3)p=!1
else p=!0
if(p){p=b2.a
o=b2.z.ch
p=p.cj
p.a.uniform1f(p.d,o)}if(b3){b3=b2.a
p=b2.z.f
b3=b3.ci
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}b3=s.z
if(b3.length>0){p=P.x
h=new H.E([p,p])
for(p=b2.dx.e,o=p.length,g=0;g<p.length;p.length===o||(0,H.p)(p),++g){f=p[g]
e=f.ga7()
d=h.h(0,e)
if(d==null)d=0
h.m(0,e,d+1)
c=J.ch(b2.a.bk.h(0,e),d)
n=f.gfI()
b=$.ah
n=n.aL(b==null?$.ah=new V.T(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gfN()
b=$.ah
n=n.aL(b==null?$.ah=new V.T(0,0,0):b)
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gav(f)
b=c.d
b.a.uniform3f(b.d,n.a,n.b,n.c)
if(f.gcg()){n=f.gc8()
b=c.e
b.a.uniform1f(b.d,n)
n=f.gc9()
b=c.f
b.a.uniform1f(b.d,n)
n=f.gca()
b=c.r
b.a.uniform1f(b.d,n)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.p)(b3),++g){o=b3[g].a
k=h.h(0,o)
if(k==null)k=0
o=b2.a.bj.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.Q
if(b3.length>0){p=b4.db
a=p.gO(p)
p=P.x
a0=new H.E([p,p])
for(p=b2.dx.f,o=p.length,g=0;g<p.length;p.length===o||(0,H.p)(p),++g){f=p[g]
d=a0.h(0,0)
if(d==null)d=0
a0.m(0,0,d+1)
c=J.ch(b2.a.bm.h(0,0),d)
n=a.b_(f.a)
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
n.a.uniform3f(n.d,a2.a,a2.b,a2.c)}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.p)(b3),++g){o=b3[g].a
k=a0.h(0,o)
if(k==null)k=0
o=b2.a.bl.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.ch
if(b3.length>0){p=b4.db
a=p.gO(p)
p=P.x
a3=new H.E([p,p])
for(p=b2.dx.r,o=p.length,g=0;g<p.length;p.length===o||(0,H.p)(p),++g){f=p[g]
e=f.ga7()
d=a3.h(0,e)
if(d==null)d=0
a3.m(0,e,d+1)
c=J.ch(b2.a.bo.h(0,e),d)
a4=a.L(0,f.gO(f))
n=f.gO(f)
b=$.ah
n=n.aL(b==null?$.ah=new V.T(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=$.ah
n=a4.aL(n==null?$.ah=new V.T(0,0,0):n)
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gav(f)
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
f.gal()
n=a4.cr(0)
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
i=new Float32Array(H.ca(new V.cK(b,a1,a2,a5,a6,a7,a8,a9,n).W(0,!0)))
b0.a.uniformMatrix3fv(b0.d,!1,i)
f.gal()
n=f.gal()
if(!C.a.D(l,n)){n.sae(0,l.length)
l.push(n)}n=f.gal()
b=n.gaf(n)
if(b){b=c.f
b.toString
a1=n.gaf(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.gae(n)
b.a.uniform1i(b.d,n)}}f.gaC()
n=f.gcU()
b=c.x
b.toString
a1=n.geY(n)
a2=n.geZ(n)
a5=n.gf_()
n=n.geX()
b.a.uniform4f(b.d,a1,a2,a5,n)
n=f.gaC()
if(!C.a.D(l,n)){n.sae(0,l.length)
l.push(n)}n=f.gaC()
b=n.gaf(n)
if(b){b=c.r
b.toString
a1=n.gaf(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.gae(n)
b.a.uniform1i(b.d,n)}}if(f.gcg()){n=f.gc8()
b=c.y
b.a.uniform1f(b.d,n)
n=f.gc9()
b=c.z
b.a.uniform1f(b.d,n)
n=f.gca()
b=c.Q
b.a.uniform1f(b.d,n)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.p)(b3),++g){o=b3[g].a
k=a3.h(0,o)
if(k==null)k=0
o=b2.a.bn.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.cx
if(b3.length>0){p=b4.db
a=p.gO(p)
p=P.x
b1=new H.E([p,p])
for(p=b2.dx.x,o=p.length,g=0;g<p.length;p.length===o||(0,H.p)(p),++g){f=p[g]
e=f.ga7()
d=b1.h(0,e)
if(d==null)d=0
b1.m(0,e,d+1)
c=J.ch(b2.a.bq.h(0,e),d)
n=f.gfo(f)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gfL(f).h2()
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=a.aL(f.gfo(f))
b=c.d
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gav(f)
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
f.gal()
n=f.gh7()
b=c.f
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gh4(f)
b=c.r
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gh5()
b=c.x
b.a.uniform1f(b.d,n)
n=f.gh6()
b=c.y
b.a.uniform1f(b.d,n)
f.gal()
n=f.gal()
if(!C.a.D(l,n)){n.sae(0,l.length)
l.push(n)}n=f.gal()
b=n.gaf(n)
if(b){b=c.dx
b.toString
a1=n.gaf(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.gae(n)
b.a.uniform1i(b.d,n)}}f.gaC()
n=f.gcU()
b=c.z
b.toString
a1=n.geY(n)
a2=n.geZ(n)
a5=n.gf_()
n=n.geX()
b.a.uniform4f(b.d,a1,a2,a5,n)
n=f.gaC()
if(!C.a.D(l,n)){n.sae(0,l.length)
l.push(n)}n=f.gaC()
b=n.gaf(n)
if(b){b=c.dy
b.toString
a1=n.gaf(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.gae(n)
b.a.uniform1i(b.d,n)}}if(f.gfM()){n=f.gfK()
b=c.Q
b.a.uniform1f(b.d,n)
n=f.gfJ()
b=c.ch
b.a.uniform1f(b.d,n)}if(f.gcg()){n=f.gc8()
b=c.cx
b.a.uniform1f(b.d,n)
n=f.gc9()
b=c.cy
b.a.uniform1f(b.d,n)
n=f.gca()
b=c.db
b.a.uniform1f(b.d,n)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.p)(b3),++g){o=b3[g].a
k=b1.h(0,o)
if(k==null)k=0
o=b2.a.bp.h(0,o)
o.a.uniform1i(o.d,k)}}}if(s.dy){b3=b2.a
p=b4.Q
if(p==null){p=b4.db
p=b4.Q=p.gO(p).cr(0)}b3=b3.id
b3.toString
b3.a1(p.W(0,!0))}if(s.db){b2.dk(l,b2.ch)
b3=b2.a
p=b2.ch
b3.eA(b3.ck,p)
if(s.r.a){b3=b2.a
p=b2.cx.f
b3=b3.cl
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}b3=s.x.a
if(!b3)p=!1
else p=!0
if(p){p=b2.a
o=b2.cy.ch
p=p.cm
p.a.uniform1f(p.d,o)}if(b3){b3=b2.a
p=b2.cy.f
b3=b3.cn
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}}b3=s.y.a
p=!b3
if(p)o=!1
else o=!0
if(o){if(b3){b3=b2.a
o=b2.db.f
b3=b3.co
b3.a.uniform1f(b3.d,o)}q.enable(3042)
q.blendFunc(770,771)}for(j=0;j<l.length;++j)l[j].aS(b4)
b3=b5.e
b3.aS(b4)
b3.az(b4)
b3.cN(b4)
if(p)b3=!1
else b3=!0
if(b3)q.disable(3042)
for(j=0;j<l.length;++j)l[j].cN(b4)
b3=b2.a
b3.toString
q.useProgram(null)
b3.x.eW()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.bP().aH}}
O.fs.prototype={
$2:function(a,b){if(typeof b!=="number")return b.H()
return this.b.push(new A.ck(a,C.d.T(b+3,4)*4))}}
O.ft.prototype={
$2:function(a,b){return J.ci(a.a,b.a)}}
O.fu.prototype={
$2:function(a,b){if(typeof b!=="number")return b.H()
return this.b.push(new A.cs(a,C.d.T(b+3,4)*4))}}
O.fv.prototype={
$2:function(a,b){return J.ci(a.a,b.a)}}
O.fw.prototype={
$2:function(a,b){if(typeof b!=="number")return b.H()
return this.b.push(new A.cU(a,C.d.T(b+3,4)*4))}}
O.fx.prototype={
$2:function(a,b){return J.ci(a.a,b.a)}}
O.fy.prototype={
$2:function(a,b){if(typeof b!=="number")return b.H()
return this.b.push(new A.d_(a,C.d.T(b+3,4)*4))}}
O.fz.prototype={
$2:function(a,b){return J.ci(a.a,b.a)}}
O.fm.prototype={
ab:function(){var u,t=this
t.bE()
u=t.f
if(!(Math.abs(u-1)<$.A().a)){t.f=1
u=new D.I(t.b,u,1)
u.b=!0
t.a.X(u)}}}
O.cJ.prototype={
ab:function(){},
bZ:function(a){var u,t,s=this
if(!s.c.n(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.ab()
u=s.a
u.a=null
u.X(null)}}}
O.fn.prototype={}
O.ae.prototype={
bY:function(a){var u,t,s=this
if(!s.f.n(0,a)){u=s.f
s.f=a
t=new D.I(s.b+".color",u,a)
t.b=!0
s.a.X(t)}},
ab:function(){this.bE()
this.bY(new V.N(1,1,1))},
sav:function(a,b){this.bZ(new A.Q(!0,!1,!1))
this.bY(b)}}
O.fp.prototype={}
O.fq.prototype={
ab:function(){var u,t=this
t.bF()
u=t.ch
if(!(Math.abs(u-1)<$.A().a)){t.ch=1
u=new D.I(t.b+".refraction",u,1)
u.b=!0
t.a.X(u)}}}
O.fr.prototype={
c_:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.A().a)){u.ch=a
t=new D.I(u.b+".shininess",t,a)
t.b=!0
u.a.X(t)}},
ab:function(){this.bF()
this.c_(100)}}
O.d4.prototype={}
T.hx.prototype={}
X.j5.prototype={}
X.eV.prototype={
gw:function(){var u=this.x
return u==null?this.x=D.a5():u}}
X.cR.prototype={
gw:function(){var u=this.f
return u==null?this.f=D.a5():u},
ap:function(a){var u=this.f
if(u!=null)u.R(a)},
dh:function(){return this.ap(null)},
saI:function(a){var u,t,s=this
if(!J.K(s.b,a)){u=s.b
if(u!=null)u.gw().M(0,s.gbK())
t=s.b
s.b=a
if(a!=null)a.gw().q(0,s.gbK())
u=new D.I("mover",t,s.b)
u.b=!0
s.ap(u)}}}
X.ht.prototype={}
V.cp.prototype={
aN:function(a){this.b=new P.f_(C.G)
this.c=null
this.d=H.b([],[[P.a6,W.a4]])},
B:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)l.push(H.b([],[W.a4]))
u=a.split("\n")
for(l=u.length,t=[W.a4],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else m.d.push(H.b([],t))
p=document.createElement("div")
p.className="codePart"
o=m.b.du(q,0,q.length)
n=o==null?q:o
C.E.cT(p,H.jx(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.gaY(m.d).push(p)}},
cC:function(a,b){var u,t,s,r=this
r.d=H.b([],[[P.a6,W.a4]])
u=C.a.k(b,"\n")
t=r.c
if(t==null)t=r.c=r.aT()
for(t.toString,s=new H.k(u),s=new P.bq(t.by(new H.aX(s,s.gl(s))).a());s.p();)r.aZ(s.gu(s))}}
V.j_.prototype={
$1:function(a){var u=C.c.cL(this.a.gf4(),2)
if(u!=="0.00")P.jw(u+" fps")}}
V.ez.prototype={
aZ:function(a){var u=this
switch(a.a){case"Class":u.B(a.b,"#551")
break
case"Comment":u.B(a.b,"#777")
break
case"Id":u.B(a.b,"#111")
break
case"Num":u.B(a.b,"#191")
break
case"Reserved":u.B(a.b,"#119")
break
case"String":u.B(a.b,"#171")
break
case"Symbol":u.B(a.b,"#616")
break
case"Type":u.B(a.b,"#B11")
break
case"Whitespace":u.B(a.b,"#111")
break}},
aT:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=L.hB()
a1.d=a1.j(0,r)
u=a1.j(0,r).k(0,q)
t=K.o(new H.k("_"))
u.a.push(t)
t=K.H("a","z")
u.a.push(t)
t=K.H("A","Z")
u.a.push(t)
t=a1.j(0,q).k(0,q)
u=K.o(new H.k("_"))
t.a.push(u)
u=K.H("0","9")
t.a.push(u)
u=K.H("a","z")
t.a.push(u)
u=K.H("A","Z")
t.a.push(u)
u=a1.j(0,r).k(0,p)
t=K.H("0","9")
u.a.push(t)
t=a1.j(0,p).k(0,p)
u=K.H("0","9")
t.a.push(u)
u=a1.j(0,p).k(0,o)
t=K.o(new H.k("."))
u.a.push(t)
t=a1.j(0,o).k(0,n)
u=K.H("0","9")
t.a.push(u)
u=a1.j(0,n).k(0,n)
t=K.H("0","9")
u.a.push(t)
t=a1.j(0,r).k(0,m)
u=K.o(new H.k(l))
t.a.push(u)
u=a1.j(0,m).k(0,m)
t=K.o(new H.k(l))
u.a.push(t)
t=a1.j(0,r).k(0,k)
u=K.o(new H.k('"'))
t.a.push(u)
u=a1.j(0,k).k(0,j)
t=K.o(new H.k('"'))
u.a.push(t)
t=a1.j(0,k).k(0,i)
u=K.o(new H.k("\\"))
t.a.push(u)
u=a1.j(0,i).k(0,k)
t=K.o(new H.k('"'))
u.a.push(t)
a1.j(0,k).k(0,k).a.push(new K.aq())
t=a1.j(0,r).k(0,h)
u=K.o(new H.k("'"))
t.a.push(u)
u=a1.j(0,h).k(0,g)
t=K.o(new H.k("'"))
u.a.push(t)
t=a1.j(0,h).k(0,f)
u=K.o(new H.k("\\"))
t.a.push(u)
u=a1.j(0,f).k(0,h)
t=K.o(new H.k("'"))
u.a.push(t)
a1.j(0,h).k(0,h).a.push(new K.aq())
t=a1.j(0,r).k(0,e)
u=K.o(new H.k("/"))
t.a.push(u)
u=a1.j(0,e).k(0,d)
t=K.o(new H.k("/"))
u.a.push(t)
t=a1.j(0,d).k(0,c)
u=K.o(new H.k("\n"))
t.a.push(u)
u=a1.j(0,d).k(0,d)
t=new K.X()
s=[K.aY]
t.a=H.b([],s)
u.a.push(t)
u=K.o(new H.k("\n"))
t.a.push(u)
u=a1.j(0,e).k(0,b)
t=K.o(new H.k("*"))
u.a.push(t)
t=a1.j(0,b).k(0,a)
u=K.o(new H.k("*"))
t.a.push(u)
u=a1.j(0,a).k(0,b)
t=new K.X()
t.a=H.b([],s)
u.a.push(t)
u=K.o(new H.k("*"))
t.a.push(u)
u=a1.j(0,a).k(0,c)
t=K.o(new H.k("/"))
u.a.push(t)
t=a1.j(0,r).k(0,a0)
u=K.o(new H.k(" \n\t"))
t.a.push(u)
u=a1.j(0,a0).k(0,a0)
t=K.o(new H.k(" \n\t"))
u.a.push(t)
t=a1.j(0,p)
t.d=t.a.E("Num")
t=a1.j(0,n)
t.d=t.a.E("Num")
t=a1.j(0,m)
t.d=t.a.E("Symbol")
t=a1.j(0,j)
t.d=t.a.E("String")
t=a1.j(0,g)
t.d=t.a.E("String")
t=a1.j(0,c)
t.d=t.a.E(d)
t=a1.j(0,a0)
t.d=t.a.E(a0)
t=a1.j(0,q)
t=t.d=t.a.E(q)
u=[P.m]
t.aj(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aj(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aj(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.eX.prototype={
aZ:function(a){var u=this
switch(a.a){case"Builtin":u.B(a.b,"#411")
break
case"Comment":u.B(a.b,"#777")
break
case"Id":u.B(a.b,"#111")
break
case"Num":u.B(a.b,"#191")
break
case"Preprocess":u.B(a.b,"#737")
break
case"Reserved":u.B(a.b,"#119")
break
case"Symbol":u.B(a.b,"#611")
break
case"Type":u.B(a.b,"#171")
break
case"Whitespace":u.B(a.b,"#111")
break}},
aT:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=L.hB()
e.d=e.j(0,r)
u=e.j(0,r).k(0,q)
t=K.o(new H.k("_"))
u.a.push(t)
t=K.H("a","z")
u.a.push(t)
t=K.H("A","Z")
u.a.push(t)
t=e.j(0,q).k(0,q)
u=K.o(new H.k("_"))
t.a.push(u)
u=K.H("0","9")
t.a.push(u)
u=K.H("a","z")
t.a.push(u)
u=K.H("A","Z")
t.a.push(u)
u=e.j(0,r).k(0,p)
t=K.H("0","9")
u.a.push(t)
t=e.j(0,p).k(0,p)
u=K.H("0","9")
t.a.push(u)
u=e.j(0,p).k(0,o)
t=K.o(new H.k("."))
u.a.push(t)
t=e.j(0,o).k(0,n)
u=K.H("0","9")
t.a.push(u)
u=e.j(0,n).k(0,n)
t=K.H("0","9")
u.a.push(t)
t=e.j(0,r).k(0,m)
u=K.o(new H.k(l))
t.a.push(u)
u=e.j(0,m).k(0,m)
t=K.o(new H.k(l))
u.a.push(t)
t=e.j(0,r).k(0,k)
u=K.o(new H.k("/"))
t.a.push(u)
u=e.j(0,k).k(0,j)
t=K.o(new H.k("/"))
u.a.push(t)
e.j(0,k).k(0,m).a.push(new K.aq())
t=e.j(0,j).k(0,i)
u=K.o(new H.k("\n"))
t.a.push(u)
u=e.j(0,j).k(0,j)
t=new K.X()
s=[K.aY]
t.a=H.b([],s)
u.a.push(t)
u=K.o(new H.k("\n"))
t.a.push(u)
u=e.j(0,r).k(0,h)
t=K.o(new H.k("#"))
u.a.push(t)
t=e.j(0,h).k(0,h)
u=new K.X()
u.a=H.b([],s)
t.a.push(u)
t=K.o(new H.k("\n"))
u.a.push(t)
t=e.j(0,h).k(0,g)
u=K.o(new H.k("\n"))
t.a.push(u)
u=e.j(0,r).k(0,f)
t=K.o(new H.k(" \n\t"))
u.a.push(t)
t=e.j(0,f).k(0,f)
u=K.o(new H.k(" \n\t"))
t.a.push(u)
u=e.j(0,p)
u.d=u.a.E("Num")
u=e.j(0,n)
u.d=u.a.E("Num")
u=e.j(0,m)
u.d=u.a.E("Symbol")
u=e.j(0,i)
u.d=u.a.E(j)
u=e.j(0,g)
u.d=u.a.E(h)
u=e.j(0,f)
u.d=u.a.E(f)
u=e.j(0,q)
u=u.d=u.a.E(q)
t=[P.m]
u.aj(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aj(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aj(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return e}}
V.eY.prototype={
aZ:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.B(a.b,"#911")
u.B("=",t)
break
case"Id":u.B(a.b,t)
break
case"Other":u.B(a.b,t)
break
case"Reserved":u.B(a.b,"#119")
break
case"String":u.B(a.b,"#171")
break
case"Symbol":u.B(a.b,"#616")
break}},
aT:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=L.hB()
l.d=l.j(0,s)
u=l.j(0,s).k(0,r)
t=K.o(new H.k("_"))
u.a.push(t)
t=K.H("a","z")
u.a.push(t)
t=K.H("A","Z")
u.a.push(t)
t=l.j(0,r).k(0,r)
u=K.o(new H.k("_"))
t.a.push(u)
u=K.H("0","9")
t.a.push(u)
u=K.H("a","z")
t.a.push(u)
u=K.H("A","Z")
t.a.push(u)
u=l.j(0,r).k(0,q)
t=K.o(new H.k("="))
u.a.push(t)
u.c=!0
u=l.j(0,s).k(0,p)
t=K.o(new H.k("</\\-!>="))
u.a.push(t)
t=l.j(0,p).k(0,p)
u=K.o(new H.k("</\\-!>="))
t.a.push(u)
u=l.j(0,s).k(0,o)
t=K.o(new H.k('"'))
u.a.push(t)
t=l.j(0,o).k(0,n)
u=K.o(new H.k('"'))
t.a.push(u)
u=l.j(0,o).k(0,"EscStr")
t=K.o(new H.k("\\"))
u.a.push(t)
t=l.j(0,"EscStr").k(0,o)
u=K.o(new H.k('"'))
t.a.push(u)
l.j(0,o).k(0,o).a.push(new K.aq())
l.j(0,s).k(0,m).a.push(new K.aq())
u=l.j(0,m).k(0,m)
t=new K.X()
t.a=H.b([],[K.aY])
u.a.push(t)
u=K.o(new H.k('</\\-!>=_"'))
t.a.push(u)
u=K.H("a","z")
t.a.push(u)
u=K.H("A","Z")
t.a.push(u)
u=l.j(0,p)
u.d=u.a.E("Symbol")
u=l.j(0,n)
u.d=u.a.E("String")
u=l.j(0,r)
t=u.a.E(r)
u.d=t
t.aj(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.m]))
t=l.j(0,q)
t.d=t.a.E(q)
t=l.j(0,m)
t.d=t.a.E(m)
return l}}
V.fW.prototype={
cC:function(a,b){this.d=H.b([],[[P.a6,W.a4]])
this.B(C.a.k(b,"\n"),"#111")},
aZ:function(a){},
aT:function(){return}}
V.hd.prototype={
d6:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.O(q,"scroll",new V.hf(o),!1)},
c6:function(a){var u,t,s,r,q,p,o,n
this.eF()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b,r=C.a.f6(a),s.toString,r=new H.k(r),r=new P.bq(s.by(new H.aX(r,r.gl(r))).a());r.p();){s=r.gu(r)
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
if(H.mC(s,"|",0)){p=s.split("|")
o=u.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.f(p,1)
o.href=p[1]
o.textContent=p[0]
t.appendChild(o)}else{n=P.ke(C.p,s,C.f,!1)
o=u.createElement("a")
o.className="linkPar"
o.href="#"+n
o.textContent=s
t.appendChild(o)}break
case"Other":q=u.createElement("div")
q.className="normalPar"
q.textContent=s.b
t.appendChild(q)
break}}this.a.appendChild(t)},
cP:function(a){var u,t,s,r=new V.ez("dart")
r.aN("dart")
u=new V.eX("glsl")
u.aN("glsl")
t=new V.eY("html")
t.aN("html")
s=C.a.f3(H.b([r,u,t],[V.cp]),new V.hg(a))
if(s!=null)return s
r=new V.fW("plain")
r.aN("plain")
return r},
c4:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.b([],[P.x])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(J.jr(s).b3(s,"+")){b0[t]=C.b.a4(s,1)
a6.push(1)
u=!0}else if(C.b.b3(s,"-")){b0[t]=C.b.a4(s,1)
a6.push(-1)
u=!0}else a6.push(0)}r=this.cP(a8)
r.cC(0,b0)
q=document
p=q.createElement("div")
p.className="codeTableScroll"
o=q.createElement("table")
o.className="codeTable"
p.appendChild(o)
this.a.appendChild(p)
n=P.ke(C.p,a7,C.f,!1)
m=q.createElement("tr")
m.className="headerRow"
l=q.createElement("td")
l.className="headerCell"
l.colSpan=u?3:2
k=q.createElement("div")
k.className="tableHeader"
k.id=n
j=W.jD()
j.href="#"+n
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
if(t>=a6.length)return H.f(a6,t)
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
for(g=s.length,a=0;a<s.length;s.length===g||(0,H.p)(s),++a)b.appendChild(s[a])
f.appendChild(e)
f.appendChild(d)
f.appendChild(b)
o.appendChild(f)}else for(g=r.d,a0=g.length,a1=a9,a=0;a<g.length;g.length===a0||(0,H.p)(g),++a){s=g[a]
f=q.createElement("tr")
f.className=a3
e=q.createElement("td")
e.className=a4;++a1
e.textContent=""+a1
d=q.createElement("td")
d.className=a5
for(a2=C.a.gJ(s);a2.p();)d.appendChild(a2.gu(a2))
f.appendChild(e)
f.appendChild(d)
o.appendChild(f)}},
eF:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=L.hB()
u.d=u.j(0,q)
t=u.j(0,q).k(0,p)
s=K.o(new H.k("*"))
t.a.push(s)
t.c=!0
t=u.j(0,p).k(0,p)
s=new K.X()
r=[K.aY]
s.a=H.b([],r)
t.a.push(s)
t=K.o(new H.k("*"))
s.a.push(t)
t=u.j(0,p).k(0,"BoldEnd")
s=K.o(new H.k("*"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,o)
s=K.o(new H.k("_"))
t.a.push(s)
t.c=!0
t=u.j(0,o).k(0,o)
s=new K.X()
s.a=H.b([],r)
t.a.push(s)
t=K.o(new H.k("_"))
s.a.push(t)
t=u.j(0,o).k(0,n)
s=K.o(new H.k("_"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,m)
s=K.o(new H.k("`"))
t.a.push(s)
t.c=!0
t=u.j(0,m).k(0,m)
s=new K.X()
s.a=H.b([],r)
t.a.push(s)
t=K.o(new H.k("`"))
s.a.push(t)
t=u.j(0,m).k(0,"CodeEnd")
s=K.o(new H.k("`"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,l)
s=K.o(new H.k("["))
t.a.push(s)
t.c=!0
t=u.j(0,l).k(0,k)
s=K.o(new H.k("|"))
t.a.push(s)
s=u.j(0,l).k(0,j)
t=K.o(new H.k("]"))
s.a.push(t)
s.c=!0
s=u.j(0,l).k(0,l)
t=new K.X()
t.a=H.b([],r)
s.a.push(t)
s=K.o(new H.k("|]"))
t.a.push(s)
s=u.j(0,k).k(0,j)
t=K.o(new H.k("]"))
s.a.push(t)
s.c=!0
s=u.j(0,k).k(0,k)
t=new K.X()
t.a=H.b([],r)
s.a.push(t)
s=K.o(new H.k("|]"))
t.a.push(s)
u.j(0,q).k(0,i).a.push(new K.aq())
s=u.j(0,i).k(0,i)
t=new K.X()
t.a=H.b([],r)
s.a.push(t)
s=K.o(new H.k("*_`["))
t.a.push(s)
s=u.j(0,"BoldEnd")
s.d=s.a.E(p)
s=u.j(0,n)
s.d=s.a.E(o)
s=u.j(0,"CodeEnd")
s.d=s.a.E(m)
s=u.j(0,j)
s.d=s.a.E("Link")
s=u.j(0,i)
s.d=s.a.E(i)
this.b=u}}
V.hf.prototype={
$1:function(a){P.k1(C.h,new V.he(this.a))}}
V.he.prototype={
$0:function(){var u=C.c.a2(document.documentElement.scrollTop),t=this.a.style,s=H.d(-0.01*u)+"px"
t.top=s}}
V.hg.prototype={
$1:function(a){return a.a===this.a}}
X.iY.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.a,r=[P.m]
u.c4("Vertex Shader","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
t=t.a
u.c4("Fragment Shader","glsl",0,H.b((t==null?null:t.d).split("\n"),r))}};(function aliases(){var u=J.a.prototype
u.cY=u.i
u=J.cC.prototype
u.d_=u.i
u=P.j.prototype
u.cZ=u.b1
u=W.L.prototype
u.b4=u.Z
u=W.dJ.prototype
u.d0=u.a6
u=K.cy.prototype
u.cX=u.ag
u.bD=u.i
u=O.cJ.prototype
u.bE=u.ab
u=O.ae.prototype
u.bF=u.ab})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installStaticTearOff,q=hunkHelpers.installInstanceTearOff,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u,n=hunkHelpers._instance_1u,m=hunkHelpers._instance_0i
u(J,"lJ","l3",17)
t(P,"md","lx",5)
t(P,"me","ly",5)
t(P,"mf","lz",5)
s(P,"kj","mb",8)
r(W,"mp",4,null,["$4"],["lA"],13,0)
r(W,"mq",4,null,["$4"],["lB"],13,0)
var l
q(l=E.aS.prototype,"gcA",0,0,null,["$1","$0"],["cB","fg"],0,0)
q(l,"gcw",0,0,null,["$1","$0"],["cz","ff"],0,0)
q(l,"gcu",0,0,null,["$1","$0"],["cv","fc"],0,0)
p(l,"gfa","fb",2)
p(l,"gfd","fe",2)
q(l=E.d5.prototype,"gbH",0,0,null,["$1","$0"],["bJ","bI"],0,0)
o(l,"gfw","cH",8)
n(l=X.dc.prototype,"gdW","dX",3)
n(l,"gdK","dL",3)
n(l,"gdQ","dR",1)
n(l,"ge_","e0",9)
n(l,"gdY","dZ",9)
n(l,"ge3","e4",1)
n(l,"ge7","e8",1)
n(l,"gdU","dV",1)
n(l,"ge5","e6",1)
n(l,"gdS","dT",1)
n(l,"ge9","ea",15)
n(l,"geb","ec",3)
n(l,"gem","en",4)
n(l,"gei","ej",4)
n(l,"gek","el",4)
q(D.bd.prototype,"gd8",0,0,null,["$1","$0"],["a8","d9"],0,0)
q(l=D.cE.prototype,"gbU",0,0,null,["$1","$0"],["bV","e1"],0,0)
n(l,"gee","ef",16)
p(l,"gdE","dF",10)
p(l,"geg","eh",10)
m(V.aF.prototype,"gl","br",11)
m(V.C.prototype,"gl","br",11)
q(l=M.cv.prototype,"ga5",0,0,null,["$1","$0"],["a9","da"],0,0)
p(l,"gdM","dN",2)
p(l,"gdO","dP",2)
q(l=O.cI.prototype,"gdd",0,0,null,["$1","$0"],["X","de"],0,0)
q(l,"gew",0,0,null,["$1","$0"],["bW","ex"],0,0)
p(l,"gdG","dH",12)
p(l,"gdI","dJ",12)
q(X.cR.prototype,"gbK",0,0,null,["$1","$0"],["ap","dh"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.S,null)
s(P.S,[H.jd,J.a,J.a0,P.dw,P.j,H.aX,P.f4,H.cw,H.hS,H.hG,P.be,H.bz,H.dO,P.R,H.fd,H.fe,H.f7,P.dU,P.bp,P.bq,P.de,P.d2,P.hp,P.d6,P.iL,P.iy,P.is,P.dv,P.t,P.er,P.f0,P.iJ,P.an,P.aQ,P.a3,P.aR,P.fU,P.d0,P.dm,P.eU,P.eW,P.a6,P.bH,P.aZ,P.m,P.ai,W.ev,W.c1,W.F,W.cP,W.dJ,W.iD,W.cx,W.ax,W.ix,W.dZ,P.it,K.aq,K.cy,K.aY,K.h_,K.h8,L.d1,L.d7,L.d8,L.hA,O.bc,O.bJ,E.en,E.aS,E.h0,E.d5,Z.dd,Z.ib,Z.cn,Z.cz,Z.b3,D.eq,D.bf,D.V,X.co,X.cD,X.fa,X.fh,X.bK,X.fG,X.hC,X.dc,D.em,D.bd,D.W,D.fY,D.hk,V.N,V.aO,V.eJ,V.cK,V.au,V.ag,V.T,V.cW,V.aF,V.C,M.cv,A.cj,A.eh,A.Q,A.ck,A.cs,A.cU,A.d_,A.fo,A.bT,A.bU,A.bW,A.bX,A.da,A.hO,F.bg,F.eN,F.cF,F.fc,F.cS,F.h9,F.ha,F.hb,F.hc,F.bZ,F.i_,F.i0,F.i3,F.i5,F.i6,F.i7,O.d4,O.cJ,O.fp,X.j5,X.ht,X.cR,V.cp,V.hd])
s(J.a,[J.f5,J.cB,J.cC,J.aT,J.bF,J.aU,H.bM,W.e,W.ee,W.cl,W.ad,W.D,W.dg,W.a1,W.eA,W.eB,W.di,W.cu,W.dk,W.eD,W.h,W.dn,W.at,W.eZ,W.dr,W.fg,W.fA,W.dx,W.dy,W.aw,W.dz,W.dC,W.ay,W.dG,W.dI,W.aB,W.dK,W.aC,W.dP,W.aj,W.dS,W.hz,W.aE,W.dV,W.hE,W.hU,W.e_,W.e1,W.e3,W.e5,W.e7,P.aW,P.dt,P.b_,P.dE,P.fZ,P.dQ,P.b0,P.dX,P.ei,P.df,P.dM])
s(J.cC,[J.fV,J.bo,J.aV])
t(J.jc,J.aT)
s(J.bF,[J.cA,J.f6])
t(P.ff,P.dw)
s(P.ff,[H.db,W.ij,W.U,P.eQ])
t(H.k,H.db)
s(P.j,[H.n,H.bI,H.c_,P.f2])
s(H.n,[H.cG,H.bi])
t(H.eG,H.bI)
s(P.f4,[H.cH,H.ic])
t(H.fk,H.cG)
s(P.be,[H.fR,H.f9,H.hR,H.ep,H.h6,P.cQ,P.ab,P.hT,P.hQ,P.bQ,P.es,P.ey])
s(H.bz,[H.j2,H.hu,H.f8,H.iU,H.iV,H.iW,P.ie,P.id,P.ig,P.ih,P.iI,P.iH,P.iO,P.iv,P.iw,P.fj,P.eE,P.eF,W.eH,W.fC,W.fE,W.h5,W.ho,W.io,W.fP,W.fO,W.iz,W.iA,W.iG,W.iK,P.iP,P.eR,P.eS,P.ek,E.h1,E.h2,E.h3,E.hy,D.eK,D.eL,F.j1,F.iQ,F.i9,F.i8,F.i1,F.i2,O.fs,O.ft,O.fu,O.fv,O.fw,O.fx,O.fy,O.fz,V.j_,V.hf,V.he,V.hg,X.iY])
s(H.hu,[H.hm,H.bx])
t(P.fi,P.R)
s(P.fi,[H.E,W.ii])
t(H.cL,H.bM)
s(H.cL,[H.c2,H.c4])
t(H.c3,H.c2)
t(H.bL,H.c3)
t(H.c5,H.c4)
t(H.cM,H.c5)
s(H.cM,[H.fI,H.fJ,H.fK,H.fL,H.fM,H.cN,H.fN])
t(P.iE,P.f2)
t(P.iu,P.iL)
t(P.ir,P.iy)
t(P.et,P.hp)
t(P.eI,P.er)
s(P.et,[P.f_,P.hW])
t(P.hV,P.eI)
s(P.a3,[P.J,P.x])
s(P.ab,[P.bk,P.f1])
s(W.e,[W.y,W.eP,W.aA,W.c6,W.aD,W.ak,W.c8,W.ia,W.c0,P.el,P.b9])
s(W.y,[W.L,W.aN])
s(W.L,[W.l,P.i])
s(W.l,[W.ef,W.eg,W.ba,W.bb,W.a4,W.eT,W.h7,W.d3,W.hr,W.hs,W.bR])
t(W.eu,W.ad)
t(W.bA,W.dg)
s(W.a1,[W.ew,W.ex])
t(W.dj,W.di)
t(W.ct,W.dj)
t(W.dl,W.dk)
t(W.eC,W.dl)
t(W.as,W.cl)
t(W.dp,W.dn)
t(W.eO,W.dp)
t(W.ds,W.dr)
t(W.bC,W.ds)
t(W.b1,W.h)
s(W.b1,[W.bh,W.af,W.bl])
t(W.fB,W.dx)
t(W.fD,W.dy)
t(W.dA,W.dz)
t(W.fF,W.dA)
t(W.dD,W.dC)
t(W.cO,W.dD)
t(W.dH,W.dG)
t(W.fX,W.dH)
t(W.h4,W.dI)
t(W.c7,W.c6)
t(W.hi,W.c7)
t(W.dL,W.dK)
t(W.hj,W.dL)
t(W.hn,W.dP)
t(W.dT,W.dS)
t(W.hv,W.dT)
t(W.c9,W.c8)
t(W.hw,W.c9)
t(W.dW,W.dV)
t(W.hD,W.dW)
t(W.b4,W.af)
t(W.e0,W.e_)
t(W.ik,W.e0)
t(W.dh,W.cu)
t(W.e2,W.e1)
t(W.ip,W.e2)
t(W.e4,W.e3)
t(W.dB,W.e4)
t(W.e6,W.e5)
t(W.iB,W.e6)
t(W.e8,W.e7)
t(W.iC,W.e8)
t(W.il,W.ii)
t(W.im,P.d2)
t(W.iF,W.dJ)
t(P.a7,P.it)
t(P.du,P.dt)
t(P.fb,P.du)
t(P.dF,P.dE)
t(P.fS,P.dF)
t(P.bP,P.i)
t(P.dR,P.dQ)
t(P.hq,P.dR)
t(P.dY,P.dX)
t(P.hF,P.dY)
t(P.ej,P.df)
t(P.fT,P.b9)
t(P.dN,P.dM)
t(P.hl,P.dN)
s(K.cy,[K.X,L.d9])
s(E.en,[Z.cm,A.cY,T.hx])
s(D.V,[D.bD,D.bE,D.I])
t(D.cE,O.bc)
t(U.fH,D.eq)
s(U.fH,[U.cq,U.cX])
t(A.fl,A.cY)
s(A.da,[A.b2,A.hL,A.hM,A.hN,A.hJ,A.M,A.hK,A.B,A.bS,A.hP,A.bV,A.a_,A.bm,A.bn])
t(F.hh,F.eN)
t(F.hI,F.fc)
t(F.i4,F.i5)
t(F.fQ,F.i6)
t(O.cI,O.d4)
s(O.cJ,[O.fm,O.fn,O.ae])
s(O.ae,[O.fq,O.fr])
t(X.eV,X.ht)
s(V.cp,[V.ez,V.eX,V.eY,V.fW])
u(H.db,H.hS)
u(H.c2,P.t)
u(H.c3,H.cw)
u(H.c4,P.t)
u(H.c5,H.cw)
u(P.dw,P.t)
u(W.dg,W.ev)
u(W.di,P.t)
u(W.dj,W.F)
u(W.dk,P.t)
u(W.dl,W.F)
u(W.dn,P.t)
u(W.dp,W.F)
u(W.dr,P.t)
u(W.ds,W.F)
u(W.dx,P.R)
u(W.dy,P.R)
u(W.dz,P.t)
u(W.dA,W.F)
u(W.dC,P.t)
u(W.dD,W.F)
u(W.dG,P.t)
u(W.dH,W.F)
u(W.dI,P.R)
u(W.c6,P.t)
u(W.c7,W.F)
u(W.dK,P.t)
u(W.dL,W.F)
u(W.dP,P.R)
u(W.dS,P.t)
u(W.dT,W.F)
u(W.c8,P.t)
u(W.c9,W.F)
u(W.dV,P.t)
u(W.dW,W.F)
u(W.e_,P.t)
u(W.e0,W.F)
u(W.e1,P.t)
u(W.e2,W.F)
u(W.e3,P.t)
u(W.e4,W.F)
u(W.e5,P.t)
u(W.e6,W.F)
u(W.e7,P.t)
u(W.e8,W.F)
u(P.dt,P.t)
u(P.du,W.F)
u(P.dE,P.t)
u(P.dF,W.F)
u(P.dQ,P.t)
u(P.dR,W.F)
u(P.dX,P.t)
u(P.dY,W.F)
u(P.df,P.R)
u(P.dM,P.t)
u(P.dN,W.F)})()
var v={mangledGlobalNames:{x:"int",J:"double",a3:"num",m:"String",an:"bool",aZ:"Null",a6:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.V]},{func:1,ret:-1,args:[W.af]},{func:1,ret:-1,args:[P.x,[P.j,E.aS]]},{func:1,ret:-1,args:[W.h]},{func:1,ret:-1,args:[W.bl]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.aZ,args:[,,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bh]},{func:1,ret:-1,args:[P.x,[P.j,D.W]]},{func:1,ret:P.J},{func:1,ret:-1,args:[P.x,[P.j,V.au]]},{func:1,ret:P.an,args:[W.L,P.m,P.m,W.c1]},{func:1,ret:P.aZ,args:[,]},{func:1,ret:-1,args:[W.b4]},{func:1,ret:P.an,args:[[P.j,D.W]]},{func:1,ret:P.x,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.m=W.ba.prototype
C.D=W.bb.prototype
C.E=W.a4.prototype
C.H=J.a.prototype
C.a=J.aT.prototype
C.d=J.cA.prototype
C.i=J.cB.prototype
C.c=J.bF.prototype
C.b=J.aU.prototype
C.I=J.aV.prototype
C.q=J.fV.prototype
C.r=W.d3.prototype
C.l=J.bo.prototype
C.t=W.b4.prototype
C.u=W.c0.prototype
C.n=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.v=function() {
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
C.A=function(getTagFallback) {
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
C.w=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.x=function(hooks) {
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
C.z=function(hooks) {
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
C.y=function(hooks) {
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
C.o=function(hooks) { return hooks; }

C.B=new P.fU()
C.f=new P.hV()
C.C=new P.hW()
C.e=new P.iu()
C.h=new P.aR(0)
C.F=new P.aR(5e6)
C.G=new P.f0("element",!1,!1,!1)
C.J=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.m])
C.K=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.m])
C.L=H.b(u([]),[P.m])
C.p=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.x])
C.j=H.b(u(["bind","if","ref","repeat","syntax"]),[P.m])
C.k=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.m])
C.M=new P.bp(null,2)})();(function staticFields(){$.ac=0
$.by=null
$.jE=null
$.km=null
$.ki=null
$.kp=null
$.iR=null
$.iX=null
$.ju=null
$.br=null
$.cb=null
$.cc=null
$.jo=!1
$.a8=C.e
$.Y=[]
$.ar=null
$.j8=null
$.jL=null
$.jK=null
$.dq=P.jN(P.m,P.eW)
$.jR=null
$.jU=null
$.ah=null
$.jY=null
$.k5=null
$.k8=null
$.k7=null
$.hX=null
$.hY=null
$.hZ=null
$.k6=null
$.jT=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"mK","kt",function(){return H.kl("_$dart_dartClosure")})
u($,"mL","jz",function(){return H.kl("_$dart_js")})
u($,"mM","ku",function(){return H.al(H.hH({
toString:function(){return"$receiver$"}}))})
u($,"mN","kv",function(){return H.al(H.hH({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"mO","kw",function(){return H.al(H.hH(null))})
u($,"mP","kx",function(){return H.al(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mS","kA",function(){return H.al(H.hH(void 0))})
u($,"mT","kB",function(){return H.al(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mR","kz",function(){return H.al(H.k3(null))})
u($,"mQ","ky",function(){return H.al(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"mV","kD",function(){return H.al(H.k3(void 0))})
u($,"mU","kC",function(){return H.al(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"n7","jA",function(){return P.lw()})
u($,"na","kI",function(){return P.lk("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"n8","kH",function(){return P.jO(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.m)})
u($,"n1","kG",function(){return Z.a2(0)})
u($,"mW","kE",function(){return Z.a2(511)})
u($,"n3","aK",function(){return Z.a2(1)})
u($,"n2","aJ",function(){return Z.a2(2)})
u($,"mY","aI",function(){return Z.a2(4)})
u($,"n4","b7",function(){return Z.a2(8)})
u($,"n5","b8",function(){return Z.a2(16)})
u($,"mZ","cf",function(){return Z.a2(32)})
u($,"n_","cg",function(){return Z.a2(64)})
u($,"n0","kF",function(){return Z.a2(96)})
u($,"n6","bw",function(){return Z.a2(128)})
u($,"mX","aH",function(){return Z.a2(256)})
u($,"mJ","ks",function(){return new V.eJ(1e-9)})
u($,"mI","A",function(){return $.ks()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGL2RenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.bM,ArrayBufferView:H.bM,Float32Array:H.bL,Float64Array:H.bL,Int16Array:H.fI,Int32Array:H.fJ,Int8Array:H.fK,Uint16Array:H.fL,Uint32Array:H.fM,Uint8ClampedArray:H.cN,CanvasPixelArray:H.cN,Uint8Array:H.fN,HTMLAudioElement:W.l,HTMLBRElement:W.l,HTMLBaseElement:W.l,HTMLButtonElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLImageElement:W.l,HTMLInputElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMediaElement:W.l,HTMLMenuElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTextAreaElement:W.l,HTMLTimeElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLVideoElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLFrameSetElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,AccessibleNodeList:W.ee,HTMLAnchorElement:W.ef,HTMLAreaElement:W.eg,Blob:W.cl,HTMLBodyElement:W.ba,HTMLCanvasElement:W.bb,CDATASection:W.aN,CharacterData:W.aN,Comment:W.aN,ProcessingInstruction:W.aN,Text:W.aN,CSSPerspective:W.eu,CSSCharsetRule:W.D,CSSConditionRule:W.D,CSSFontFaceRule:W.D,CSSGroupingRule:W.D,CSSImportRule:W.D,CSSKeyframeRule:W.D,MozCSSKeyframeRule:W.D,WebKitCSSKeyframeRule:W.D,CSSKeyframesRule:W.D,MozCSSKeyframesRule:W.D,WebKitCSSKeyframesRule:W.D,CSSMediaRule:W.D,CSSNamespaceRule:W.D,CSSPageRule:W.D,CSSRule:W.D,CSSStyleRule:W.D,CSSSupportsRule:W.D,CSSViewportRule:W.D,CSSStyleDeclaration:W.bA,MSStyleCSSProperties:W.bA,CSS2Properties:W.bA,CSSImageValue:W.a1,CSSKeywordValue:W.a1,CSSNumericValue:W.a1,CSSPositionValue:W.a1,CSSResourceValue:W.a1,CSSUnitValue:W.a1,CSSURLImageValue:W.a1,CSSStyleValue:W.a1,CSSMatrixComponent:W.ad,CSSRotation:W.ad,CSSScale:W.ad,CSSSkew:W.ad,CSSTranslation:W.ad,CSSTransformComponent:W.ad,CSSTransformValue:W.ew,CSSUnparsedValue:W.ex,DataTransferItemList:W.eA,HTMLDivElement:W.a4,DOMException:W.eB,ClientRectList:W.ct,DOMRectList:W.ct,DOMRectReadOnly:W.cu,DOMStringList:W.eC,DOMTokenList:W.eD,Element:W.L,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MessagePort:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.as,FileList:W.eO,FileWriter:W.eP,HTMLFormElement:W.eT,Gamepad:W.at,History:W.eZ,HTMLCollection:W.bC,HTMLFormControlsCollection:W.bC,HTMLOptionsCollection:W.bC,KeyboardEvent:W.bh,Location:W.fg,MediaList:W.fA,MIDIInputMap:W.fB,MIDIOutputMap:W.fD,MimeType:W.aw,MimeTypeArray:W.fF,PointerEvent:W.af,MouseEvent:W.af,DragEvent:W.af,Document:W.y,DocumentFragment:W.y,HTMLDocument:W.y,ShadowRoot:W.y,XMLDocument:W.y,Attr:W.y,DocumentType:W.y,Node:W.y,NodeList:W.cO,RadioNodeList:W.cO,Plugin:W.ay,PluginArray:W.fX,RTCStatsReport:W.h4,HTMLSelectElement:W.h7,SourceBuffer:W.aA,SourceBufferList:W.hi,SpeechGrammar:W.aB,SpeechGrammarList:W.hj,SpeechRecognitionResult:W.aC,Storage:W.hn,CSSStyleSheet:W.aj,StyleSheet:W.aj,HTMLTableElement:W.d3,HTMLTableRowElement:W.hr,HTMLTableSectionElement:W.hs,HTMLTemplateElement:W.bR,TextTrack:W.aD,TextTrackCue:W.ak,VTTCue:W.ak,TextTrackCueList:W.hv,TextTrackList:W.hw,TimeRanges:W.hz,Touch:W.aE,TouchEvent:W.bl,TouchList:W.hD,TrackDefaultList:W.hE,CompositionEvent:W.b1,FocusEvent:W.b1,TextEvent:W.b1,UIEvent:W.b1,URL:W.hU,VideoTrackList:W.ia,WheelEvent:W.b4,Window:W.c0,DOMWindow:W.c0,CSSRuleList:W.ik,ClientRect:W.dh,DOMRect:W.dh,GamepadList:W.ip,NamedNodeMap:W.dB,MozNamedAttrMap:W.dB,SpeechRecognitionResultList:W.iB,StyleSheetList:W.iC,SVGLength:P.aW,SVGLengthList:P.fb,SVGNumber:P.b_,SVGNumberList:P.fS,SVGPointList:P.fZ,SVGScriptElement:P.bP,SVGStringList:P.hq,SVGAElement:P.i,SVGAnimateElement:P.i,SVGAnimateMotionElement:P.i,SVGAnimateTransformElement:P.i,SVGAnimationElement:P.i,SVGCircleElement:P.i,SVGClipPathElement:P.i,SVGDefsElement:P.i,SVGDescElement:P.i,SVGDiscardElement:P.i,SVGEllipseElement:P.i,SVGFEBlendElement:P.i,SVGFEColorMatrixElement:P.i,SVGFEComponentTransferElement:P.i,SVGFECompositeElement:P.i,SVGFEConvolveMatrixElement:P.i,SVGFEDiffuseLightingElement:P.i,SVGFEDisplacementMapElement:P.i,SVGFEDistantLightElement:P.i,SVGFEFloodElement:P.i,SVGFEFuncAElement:P.i,SVGFEFuncBElement:P.i,SVGFEFuncGElement:P.i,SVGFEFuncRElement:P.i,SVGFEGaussianBlurElement:P.i,SVGFEImageElement:P.i,SVGFEMergeElement:P.i,SVGFEMergeNodeElement:P.i,SVGFEMorphologyElement:P.i,SVGFEOffsetElement:P.i,SVGFEPointLightElement:P.i,SVGFESpecularLightingElement:P.i,SVGFESpotLightElement:P.i,SVGFETileElement:P.i,SVGFETurbulenceElement:P.i,SVGFilterElement:P.i,SVGForeignObjectElement:P.i,SVGGElement:P.i,SVGGeometryElement:P.i,SVGGraphicsElement:P.i,SVGImageElement:P.i,SVGLineElement:P.i,SVGLinearGradientElement:P.i,SVGMarkerElement:P.i,SVGMaskElement:P.i,SVGMetadataElement:P.i,SVGPathElement:P.i,SVGPatternElement:P.i,SVGPolygonElement:P.i,SVGPolylineElement:P.i,SVGRadialGradientElement:P.i,SVGRectElement:P.i,SVGSetElement:P.i,SVGStopElement:P.i,SVGStyleElement:P.i,SVGSVGElement:P.i,SVGSwitchElement:P.i,SVGSymbolElement:P.i,SVGTSpanElement:P.i,SVGTextContentElement:P.i,SVGTextElement:P.i,SVGTextPathElement:P.i,SVGTextPositioningElement:P.i,SVGTitleElement:P.i,SVGUseElement:P.i,SVGViewElement:P.i,SVGGradientElement:P.i,SVGComponentTransferFunctionElement:P.i,SVGFEDropShadowElement:P.i,SVGMPathElement:P.i,SVGElement:P.i,SVGTransform:P.b0,SVGTransformList:P.hF,AudioBuffer:P.ei,AudioParamMap:P.ej,AudioTrackList:P.el,AudioContext:P.b9,webkitAudioContext:P.b9,BaseAudioContext:P.b9,OfflineAudioContext:P.fT,SQLResultSetRowList:P.hl})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,SQLResultSetRowList:true})
H.cL.$nativeSuperclassTag="ArrayBufferView"
H.c2.$nativeSuperclassTag="ArrayBufferView"
H.c3.$nativeSuperclassTag="ArrayBufferView"
H.bL.$nativeSuperclassTag="ArrayBufferView"
H.c4.$nativeSuperclassTag="ArrayBufferView"
H.c5.$nativeSuperclassTag="ArrayBufferView"
H.cM.$nativeSuperclassTag="ArrayBufferView"
W.c6.$nativeSuperclassTag="EventTarget"
W.c7.$nativeSuperclassTag="EventTarget"
W.c8.$nativeSuperclassTag="EventTarget"
W.c9.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(X.kn,[])
else X.kn([])})})()
//# sourceMappingURL=test.dart.js.map
