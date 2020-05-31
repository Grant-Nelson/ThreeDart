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
a[c]=function(){a[c]=function(){H.mf(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.j6"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.j6"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.j6(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={iV:function iV(){},
kJ:function(a,b,c,d){if(!!a.$in)return new H.eK(a,b,[c,d])
return new H.bM(a,b,[c,d])},
kB:function(){return new P.ha("No element")},
l3:function(a,b){var u=J.ba(a)
if(typeof u!=="number")return u.E()
H.cY(a,0,u-1,b)},
cY:function(a,b,c,d){if(c-b<=32)H.l2(a,b,c,d)
else H.l1(a,b,c,d)},
l2:function(a,b,c,d){var u,t,s,r,q,p
for(u=b+1,t=J.aK(a);u<=c;++u){s=t.h(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.h(a,r-1),s)
if(typeof q!=="number")return q.Z()
q=q>0}else q=!1
if(!q)break
p=r-1
t.k(a,r,t.h(a,p))
r=p}t.k(a,r,s)}},
l1:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j=C.d.X(a5-a4+1,6),i=a4+j,h=a5-j,g=C.d.X(a4+a5,2),f=g-j,e=g+j,d=J.aK(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.Z()
if(a2>0){u=b
b=c
c=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.Z()
if(a2>0){u=a1
a1=a0
a0=u}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.Z()
if(a2>0){u=a
a=c
c=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.Z()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.Z()
if(a2>0){u=a0
a0=c
c=u}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.Z()
if(a2>0){u=a0
a0=a
a=u}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.Z()
if(a2>0){u=a1
a1=b
b=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.Z()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.Z()
if(a2>0){u=a1
a1=a0
a0=u}d.k(a3,i,c)
d.k(a3,g,a)
d.k(a3,h,a1)
d.k(a3,f,d.h(a3,a4))
d.k(a3,e,d.h(a3,a5))
t=a4+1
s=a5-1
if(J.L(a6.$2(b,a0),0)){for(r=t;r<=s;++r){q=d.h(a3,r)
p=a6.$2(q,b)
if(p===0)continue
if(typeof p!=="number")return p.a1()
if(p<0){if(r!==t){d.k(a3,r,d.h(a3,t))
d.k(a3,t,q)}++t}else for(;!0;){p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.Z()
if(p>0){--s
continue}else{o=s-1
if(p<0){d.k(a3,r,d.h(a3,t))
n=t+1
d.k(a3,t,d.h(a3,s))
d.k(a3,s,q)
s=o
t=n
break}else{d.k(a3,r,d.h(a3,s))
d.k(a3,s,q)
s=o
break}}}}m=!0}else{for(r=t;r<=s;++r){q=d.h(a3,r)
l=a6.$2(q,b)
if(typeof l!=="number")return l.a1()
if(l<0){if(r!==t){d.k(a3,r,d.h(a3,t))
d.k(a3,t,q)}++t}else{k=a6.$2(q,a0)
if(typeof k!=="number")return k.Z()
if(k>0)for(;!0;){p=a6.$2(d.h(a3,s),a0)
if(typeof p!=="number")return p.Z()
if(p>0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.a1()
o=s-1
if(p<0){d.k(a3,r,d.h(a3,t))
n=t+1
d.k(a3,t,d.h(a3,s))
d.k(a3,s,q)
t=n}else{d.k(a3,r,d.h(a3,s))
d.k(a3,s,q)}s=o
break}}}}m=!1}a2=t-1
d.k(a3,a4,d.h(a3,a2))
d.k(a3,a2,b)
a2=s+1
d.k(a3,a5,d.h(a3,a2))
d.k(a3,a2,a0)
H.cY(a3,a4,t-2,a6)
H.cY(a3,s+2,a5,a6)
if(m)return
if(t<i&&s>h){for(;J.L(a6.$2(d.h(a3,t),b),0);)++t
for(;J.L(a6.$2(d.h(a3,s),a0),0);)--s
for(r=t;r<=s;++r){q=d.h(a3,r)
if(a6.$2(q,b)===0){if(r!==t){d.k(a3,r,d.h(a3,t))
d.k(a3,t,q)}++t}else if(a6.$2(q,a0)===0)for(;!0;)if(a6.$2(d.h(a3,s),a0)===0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.a1()
o=s-1
if(p<0){d.k(a3,r,d.h(a3,t))
n=t+1
d.k(a3,t,d.h(a3,s))
d.k(a3,s,q)
t=n}else{d.k(a3,r,d.h(a3,s))
d.k(a3,s,q)}s=o
break}}H.cY(a3,t,s,a6)}else H.cY(a3,t,s,a6)},
M:function M(a){this.a=a},
n:function n(){},
bK:function bK(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bM:function bM(a,b,c){this.a=a
this.b=b
this.$ti=c},
eK:function eK(a,b,c){this.a=a
this.b=b
this.$ti=c},
cI:function cI(a,b){this.a=null
this.b=a
this.c=b},
hX:function hX(a,b,c){this.a=a
this.b=b
this.$ti=c},
hY:function hY(a,b){this.a=a
this.b=b},
cy:function cy(){},
hI:function hI(){},
db:function db(){},
cg:function(a){var u,t=H.mg(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
m1:function(a){return v.types[a]},
m6:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.T(a).$iw},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a5(a)
if(typeof u!=="string")throw H.c(H.ap(a))
return u},
bT:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bU:function(a){return H.kN(a)+H.jR(H.cf(a),0,null)},
kN:function(a){var u,t,s,r,q,p,o,n=J.T(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.H||!!n.$ic0){r=C.m(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cg(t.length>1&&C.c.bh(t,0)===36?C.c.as(t,1):t)},
jA:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
kX:function(a){var u,t,s,r=H.b([],[P.u])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.m)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ap(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.d.b_(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.c(H.ap(s))}return H.jA(r)},
kW:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ap(s))
if(s<0)throw H.c(H.ap(s))
if(s>65535)return H.kX(a)}return H.jA(a)},
kV:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.b_(u,10))>>>0,56320|u&1023)}throw H.c(P.ak(a,0,1114111,null,null))},
bm:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
kU:function(a){var u=H.bm(a).getFullYear()+0
return u},
kS:function(a){var u=H.bm(a).getMonth()+1
return u},
kO:function(a){var u=H.bm(a).getDate()+0
return u},
kP:function(a){var u=H.bm(a).getHours()+0
return u},
kR:function(a){var u=H.bm(a).getMinutes()+0
return u},
kT:function(a){var u=H.bm(a).getSeconds()+0
return u},
kQ:function(a){var u=H.bm(a).getMilliseconds()+0
return u},
t:function(a){throw H.c(H.ap(a))},
f:function(a,b){if(a==null)J.ba(a)
throw H.c(H.bu(a,b))},
bu:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ad(!0,b,s,null)
u=J.ba(a)
if(!(b<0)){if(typeof u!=="number")return H.t(u)
t=b>=u}else t=!0
if(t)return P.I(b,a,s,null,u)
return P.cT(b,s)},
lV:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bn(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bn(a,c,!0,b,"end",u)
return new P.ad(!0,b,"end",null)},
ap:function(a){return new P.ad(!0,a,null,null)},
lR:function(a){if(typeof a!=="number")throw H.c(H.ap(a))
return a},
c:function(a){var u
if(a==null)a=new P.cQ()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.k4})
u.name=""}else u.toString=H.k4
return u},
k4:function(){return J.a5(this.dartException)},
p:function(a){throw H.c(a)},
m:function(a){throw H.c(P.bC(a))},
an:function(a){var u,t,s,r,q,p
a=H.k1(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.r])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hx(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hy:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
jI:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
jw:function(a,b){return new H.fH(a,b==null?null:b.method)},
iW:function(a,b){var u=b==null,t=u?null:b.method
return new H.f5(a,t,u?null:b.receiver)},
ee:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.iF(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.b_(t,16)&8191)===10)switch(s){case 438:return f.$1(H.iW(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.jw(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.k8()
q=$.k9()
p=$.ka()
o=$.kb()
n=$.ke()
m=$.kf()
l=$.kd()
$.kc()
k=$.kh()
j=$.kg()
i=r.a8(u)
if(i!=null)return f.$1(H.iW(u,i))
else{i=q.a8(u)
if(i!=null){i.method="call"
return f.$1(H.iW(u,i))}else{i=p.a8(u)
if(i==null){i=o.a8(u)
if(i==null){i=n.a8(u)
if(i==null){i=m.a8(u)
if(i==null){i=l.a8(u)
if(i==null){i=o.a8(u)
if(i==null){i=k.a8(u)
if(i==null){i=j.a8(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.jw(u,i))}}return f.$1(new H.hH(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.d_()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.ad(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.d_()
return a},
j9:function(a){var u
if(a==null)return new H.dS(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dS(a)},
lZ:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.k(0,a[u],a[t])}return b},
m5:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.o("Unsupported number of arguments for wrapped closure"))},
bt:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.m5)
a.$identity=u
return u},
kv:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hb().constructor.prototype):Object.create(new H.by(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ae
if(typeof t!=="number")return t.w()
$.ae=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.jj(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.kr(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.jj(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
kr:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.m1,a)
if(typeof a=="function")if(b)return a
else{u=c?H.ji:H.iK
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.c("Error in functionType of tearoff")},
ks:function(a,b,c,d){var u=H.iK
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jj:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.ku(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.ks(t,!r,u,b)
if(t===0){r=$.ae
if(typeof r!=="number")return r.w()
$.ae=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bz
return new Function(r+H.e(q==null?$.bz=H.eq("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ae
if(typeof r!=="number")return r.w()
$.ae=r+1
o+=r
r="return function("+o+"){return this."
q=$.bz
return new Function(r+H.e(q==null?$.bz=H.eq("self"):q)+"."+H.e(u)+"("+o+");}")()},
kt:function(a,b,c,d){var u=H.iK,t=H.ji
switch(b?-1:a){case 0:throw H.c(H.l_("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
ku:function(a,b){var u,t,s,r,q,p,o,n=$.bz
if(n==null)n=$.bz=H.eq("self")
u=$.jh
if(u==null)u=$.jh=H.eq("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.kt(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.ae
if(typeof u!=="number")return u.w()
$.ae=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.ae
if(typeof u!=="number")return u.w()
$.ae=u+1
return new Function(n+u+"}")()},
j6:function(a,b,c,d,e,f,g){return H.kv(a,b,c,d,!!e,!!f,g)},
iK:function(a){return a.a},
ji:function(a){return a.c},
eq:function(a){var u,t,s,r=new H.by("self","target","receiver","name"),q=J.iT(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
ma:function(a,b){throw H.c(H.kq(a,H.cg(b.substring(2))))},
h:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.T(a)[b]
else u=!0
if(u)return a
H.ma(a,b)},
lX:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
kq:function(a,b){return new H.er("CastError: "+P.iQ(a)+": type '"+H.e(H.lN(a))+"' is not a subtype of type '"+b+"'")},
lN:function(a){var u,t=J.T(a)
if(!!t.$ibB){u=H.lX(t)
if(u!=null)return H.mb(u)
return"Closure"}return H.bU(a)},
mf:function(a){throw H.c(new P.eC(a))},
l_:function(a){return new H.fW(a)},
jW:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
cf:function(a){if(a==null)return
return a.$ti},
mO:function(a,b,c){return H.iE(a["$a"+H.e(c)],H.cf(b))},
m0:function(a,b,c,d){var u=H.iE(a["$a"+H.e(c)],H.cf(b))
return u==null?null:u[d]},
jX:function(a,b,c){var u=H.iE(a["$a"+H.e(b)],H.cf(a))
return u==null?null:u[c]},
b7:function(a,b){var u=H.cf(a)
return u==null?null:u[b]},
mb:function(a){return H.b5(a,null)},
b5:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cg(a[0].name)+H.jR(a,1,b)
if(typeof a=="function")return H.cg(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.f(b,t)
return H.e(b[t])}if('func' in a)return H.li(a,b)
if('futureOr' in a)return"FutureOr<"+H.b5("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
li:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.b([],[P.r])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.f(a0,m)
p=C.c.w(p,a0[m])
l=u[q]
if(l!=null&&l!==P.a_)p+=" extends "+H.b5(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.b5(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.b5(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.b5(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.lY(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.b5(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
jR:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.aF("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.b5(p,c)}return"<"+u.i(0)+">"},
iE:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
mM:function(a,b,c){return a.apply(b,H.iE(J.T(b)["$a"+H.e(c)],H.cf(b)))},
mN:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
m7:function(a){var u,t,s,r,q=$.jY.$1(a),p=$.iw[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.iB[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.jU.$2(a,q)
if(q!=null){p=$.iw[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.iB[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.iC(u)
$.iw[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.iB[q]=u
return u}if(s==="-"){r=H.iC(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.k_(a,u)
if(s==="*")throw H.c(P.jJ(q))
if(v.leafTags[q]===true){r=H.iC(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.k_(a,u)},
k_:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jb(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
iC:function(a){return J.jb(a,!1,null,!!a.$iw)},
m8:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.iC(u)
else return J.jb(u,c,null,null)},
m3:function(){if(!0===$.ja)return
$.ja=!0
H.m4()},
m4:function(){var u,t,s,r,q,p,o,n
$.iw=Object.create(null)
$.iB=Object.create(null)
H.m2()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.k0.$1(q)
if(p!=null){o=H.m8(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
m2:function(){var u,t,s,r,q,p,o=C.y()
o=H.bs(C.z,H.bs(C.A,H.bs(C.n,H.bs(C.n,H.bs(C.B,H.bs(C.C,H.bs(C.D(C.m),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.jY=new H.iy(r)
$.jU=new H.iz(q)
$.k0=new H.iA(p)},
bs:function(a,b){return a(b)||b},
kE:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.c(new P.eW("Illegal RegExp pattern ("+String(p)+")",a))},
k2:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
lW:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
k1:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
k3:function(a,b,c){var u=H.md(a,b,c)
return u},
md:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.k1(b),'g'),H.lW(c))},
hx:function hx(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fH:function fH(a,b){this.a=a
this.b=b},
f5:function f5(a,b,c){this.a=a
this.b=b
this.c=c},
hH:function hH(a){this.a=a},
iF:function iF(a){this.a=a},
dS:function dS(a){this.a=a
this.b=null},
bB:function bB(){},
hh:function hh(){},
hb:function hb(){},
by:function by(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
er:function er(a){this.a=a},
fW:function fW(a){this.a=a},
G:function G(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
f4:function f4(a){this.a=a},
f8:function f8(a,b){this.a=a
this.b=b
this.c=null},
bj:function bj(a,b){this.a=a
this.$ti=b},
f9:function f9(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
iy:function iy(a){this.a=a},
iz:function iz(a){this.a=a},
iA:function iA(a){this.a=a},
f3:function f3(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cc:function(a){return a},
ao:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bu(b,a))},
lh:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.lV(a,b,c))
return b},
bR:function bR(){},
cM:function cM(){},
bQ:function bQ(){},
cN:function cN(){},
fB:function fB(){},
fC:function fC(){},
fD:function fD(){},
fE:function fE(){},
fF:function fF(){},
cO:function cO(){},
fG:function fG(){},
c2:function c2(){},
c3:function c3(){},
c4:function c4(){},
c5:function c5(){},
lY:function(a){return J.js(a?Object.keys(a):[],null)},
mg:function(a){return v.mangledGlobalNames[a]},
m9:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jb:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ix:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.ja==null){H.m3()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.jJ("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.je()]
if(r!=null)return r
r=H.m7(a)
if(r!=null)return r
if(typeof a=="function")return C.J
u=Object.getPrototypeOf(a)
if(u==null)return C.r
if(u===Object.prototype)return C.r
if(typeof s=="function"){Object.defineProperty(s,$.je(),{value:C.j,enumerable:false,writable:true,configurable:true})
return C.j}return C.j},
kC:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.iJ(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.ak(a,0,4294967295,"length",null))
return J.js(new Array(a),b)},
js:function(a,b){return J.iT(H.b(a,[b]))},
iT:function(a){a.fixed$length=Array
return a},
kD:function(a,b){return J.ck(a,b)},
T:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cC.prototype
return J.cB.prototype}if(typeof a=="string")return J.bh.prototype
if(a==null)return J.cD.prototype
if(typeof a=="boolean")return J.f2.prototype
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aW.prototype
return a}if(a instanceof P.a_)return a
return J.ix(a)},
aK:function(a){if(typeof a=="string")return J.bh.prototype
if(a==null)return a
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aW.prototype
return a}if(a instanceof P.a_)return a
return J.ix(a)},
j7:function(a){if(a==null)return a
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aW.prototype
return a}if(a instanceof P.a_)return a
return J.ix(a)},
m_:function(a){if(typeof a=="number")return J.bI.prototype
if(typeof a=="string")return J.bh.prototype
if(a==null)return a
if(!(a instanceof P.a_))return J.c0.prototype
return a},
j8:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aW.prototype
return a}if(a instanceof P.a_)return a
return J.ix(a)},
L:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.T(a).q(a,b)},
cj:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.m6(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aK(a).h(a,b)},
km:function(a,b,c){return J.j8(a).eT(a,b,c)},
kn:function(a,b,c,d){return J.j8(a).f9(a,b,c,d)},
ck:function(a,b){return J.m_(a).aB(a,b)},
iG:function(a,b){return J.aK(a).M(a,b)},
iH:function(a,b,c){return J.aK(a).cJ(a,b,c)},
iI:function(a,b){return J.j7(a).C(a,b)},
ko:function(a,b){return J.j7(a).H(a,b)},
bx:function(a){return J.T(a).gG(a)},
b9:function(a){return J.j7(a).gN(a)},
ba:function(a){return J.aK(a).gj(a)},
jg:function(a,b){return J.j8(a).fO(a,b)},
a5:function(a){return J.T(a).i(a)},
a:function a(){},
f2:function f2(){},
cD:function cD(){},
cE:function cE(){},
fL:function fL(){},
c0:function c0(){},
aW:function aW(){},
aV:function aV(a){this.$ti=a},
iU:function iU(a){this.$ti=a},
X:function X(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bI:function bI(){},
cC:function cC(){},
cB:function cB(){},
bh:function bh(){}},P={
l6:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.lO()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bt(new P.i_(s),1)).observe(u,{childList:true})
return new P.hZ(s,u,t)}else if(self.setImmediate!=null)return P.lP()
return P.lQ()},
l7:function(a){self.scheduleImmediate(H.bt(new P.i0(a),0))},
l8:function(a){self.setImmediate(H.bt(new P.i1(a),0))},
l9:function(a){P.j0(C.i,a)},
j0:function(a,b){var u=C.d.X(a.a,1000)
return P.le(u<0?0:u,b)},
jH:function(a,b){var u=C.d.X(a.a,1000)
return P.lf(u<0?0:u,b)},
le:function(a,b){var u=new P.dY()
u.dA(a,b)
return u},
lf:function(a,b){var u=new P.dY()
u.dB(a,b)
return u},
mK:function(a){return new P.bq(a,1)},
la:function(){return C.O},
lb:function(a){return new P.bq(a,3)},
ll:function(a,b){return new P.ik(a,[b])},
lH:function(){var u,t
for(;u=$.br,u!=null;){$.ce=null
t=u.b
$.br=t
if(t==null)$.cd=null
u.a.$0()}},
lM:function(){$.j4=!0
try{P.lH()}finally{$.ce=null
$.j4=!1
if($.br!=null)$.jf().$1(P.jV())}},
lK:function(a){var u=new P.dj(a)
if($.br==null){$.br=$.cd=u
if(!$.j4)$.jf().$1(P.jV())}else $.cd=$.cd.b=u},
lL:function(a){var u,t,s=$.br
if(s==null){P.lK(a)
$.ce=$.cd
return}u=new P.dj(a)
t=$.ce
if(t==null){u.b=s
$.br=$.ce=u}else{u.b=t.b
$.ce=t.b=u
if(u.b==null)$.cd=u}},
jG:function(a,b){var u=$.ab
if(u===C.e)return P.j0(a,b)
return P.j0(a,u.fd(b))},
l5:function(a,b){var u=$.ab
if(u===C.e)return P.jH(a,b)
return P.jH(a,u.cE(b,P.d5))},
jS:function(a,b,c,d,e){var u={}
u.a=d
P.lL(new P.iu(u,e))},
lI:function(a,b,c,d){var u,t=$.ab
if(t===c)return d.$0()
$.ab=c
u=t
try{t=d.$0()
return t}finally{$.ab=u}},
lJ:function(a,b,c,d,e){var u,t=$.ab
if(t===c)return d.$1(e)
$.ab=c
u=t
try{t=d.$1(e)
return t}finally{$.ab=u}},
i_:function i_(a){this.a=a},
hZ:function hZ(a,b,c){this.a=a
this.b=b
this.c=c},
i0:function i0(a){this.a=a},
i1:function i1(a){this.a=a},
dY:function dY(){this.c=0},
im:function im(a,b){this.a=a
this.b=b},
il:function il(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bq:function bq(a,b){this.a=a
this.b=b},
c8:function c8(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ik:function ik(a,b){this.a=a
this.$ti=b},
dj:function dj(a){this.a=a
this.b=null},
d1:function d1(){},
he:function he(){},
d5:function d5(){},
ip:function ip(){},
iu:function iu(a,b){this.a=a
this.b=b},
id:function id(){},
ie:function ie(a,b){this.a=a
this.b=b},
ig:function ig(a,b,c){this.a=a
this.b=b
this.c=c},
kG:function(a,b){return new H.G([a,b])},
kH:function(a){return H.lZ(a,new H.G([null,null]))},
jt:function(a){return new P.ia([a])},
j3:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
ld:function(a,b){var u=new P.dA(a,b)
u.c=a.e
return u},
kA:function(a,b,c){var u,t
if(P.j5(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.r])
$.a1.push(a)
try{P.lk(a,u)}finally{if(0>=$.a1.length)return H.f($.a1,-1)
$.a1.pop()}t=P.jE(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
iS:function(a,b,c){var u,t
if(P.j5(a))return b+"..."+c
u=new P.aF(b)
$.a1.push(a)
try{t=u
t.a=P.jE(t.a,a,", ")}finally{if(0>=$.a1.length)return H.f($.a1,-1)
$.a1.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
j5:function(a){var u,t
for(u=$.a1.length,t=0;t<u;++t)if(a===$.a1[t])return!0
return!1},
lk:function(a,b){var u,t,s,r,q,p,o,n=a.gN(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.t())return
u=H.e(n.gF(n))
b.push(u)
m+=u.length+2;++l}if(!n.t()){if(l<=5)return
if(0>=b.length)return H.f(b,-1)
t=b.pop()
if(0>=b.length)return H.f(b,-1)
s=b.pop()}else{r=n.gF(n);++l
if(!n.t()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.f(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gF(n);++l
for(;n.t();r=q,q=p){p=n.gF(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.f(b,-1)
m-=b.pop().length+2;--l}b.push("...")
return}}s=H.e(r)
t=H.e(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.f(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)b.push(o)
b.push(s)
b.push(t)},
ju:function(a){var u,t={}
if(P.j5(a))return"{...}"
u=new P.aF("")
try{$.a1.push(a)
u.a+="{"
t.a=!0
J.ko(a,new P.fe(t,u))
u.a+="}"}finally{if(0>=$.a1.length)return H.f($.a1,-1)
$.a1.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
ia:function ia(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ib:function ib(a){this.a=a
this.c=this.b=null},
dA:function dA(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
f0:function f0(){},
fa:function fa(){},
q:function q(){},
fd:function fd(){},
fe:function fe(a,b){this.a=a
this.b=b},
Z:function Z(){},
ih:function ih(){},
dB:function dB(){},
et:function et(){},
ex:function ex(){},
eL:function eL(){},
hL:function hL(){},
hM:function hM(){},
io:function io(a){this.b=0
this.c=a},
kz:function(a){if(a instanceof H.bB)return a.i(0)
return"Instance of '"+H.e(H.bU(a))+"'"},
kI:function(a,b,c){var u,t,s=J.kC(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
iX:function(a,b,c){var u,t=H.b([],[c])
for(u=J.b9(a);u.t();)t.push(u.gF(u))
if(b)return t
return J.iT(t)},
j_:function(a){var u,t=a.length,s=P.iY(0,null,t)
if(typeof s!=="number")return s.a1()
u=s<t
return H.kW(u?C.a.dn(a,0,s):a)},
kY:function(a){return new H.f3(a,H.kE(a,!1,!0,!1,!1,!1))},
jE:function(a,b,c){var u=J.b9(b)
if(!u.t())return a
if(c.length===0){do a+=H.e(u.gF(u))
while(u.t())}else{a+=H.e(u.gF(u))
for(;u.t();)a=a+c+H.e(u.gF(u))}return a},
lg:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.o){u=$.kl().b
u=u.test(b)}else u=!1
if(u)return b
t=C.F.fg(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.f(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.kV(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
kw:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
kx:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ct:function(a){if(a>=10)return""+a
return"0"+a},
jp:function(a){return new P.aQ(1000*a)},
iQ:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a5(a)
if(typeof a==="string")return JSON.stringify(a)
return P.kz(a)},
kp:function(a){return new P.ad(!1,null,null,a)},
iJ:function(a,b,c){return new P.ad(!0,a,b,c)},
cT:function(a,b){return new P.bn(null,null,!0,a,b,"Value not in range")},
ak:function(a,b,c,d,e){return new P.bn(b,c,!0,a,d,"Invalid value")},
iY:function(a,b,c){var u
if(typeof a!=="number")return H.t(a)
if(0<=a){if(typeof c!=="number")return H.t(c)
u=a>c}else u=!0
if(u)throw H.c(P.ak(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.t(c)
u=b>c}else u=!0
if(u)throw H.c(P.ak(b,a,c,"end",null))
return b}return c},
jB:function(a,b){if(typeof a!=="number")return a.a1()
if(a<0)throw H.c(P.ak(a,0,null,b,null))},
I:function(a,b,c,d,e){var u=e==null?J.ba(b):e
return new P.f_(u,!0,a,c,"Index out of range")},
v:function(a){return new P.hJ(a)},
jJ:function(a){return new P.hG(a)},
bC:function(a){return new P.ew(a)},
o:function(a){return new P.dt(a)},
jd:function(a){H.m9(a)},
b6:function b6(){},
a7:function a7(a,b){this.a=a
this.b=b},
J:function J(){},
aQ:function aQ(a){this.a=a},
eI:function eI(){},
eJ:function eJ(){},
bf:function bf(){},
cQ:function cQ(){},
ad:function ad(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bn:function bn(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
f_:function f_(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hJ:function hJ(a){this.a=a},
hG:function hG(a){this.a=a},
ha:function ha(a){this.a=a},
ew:function ew(a){this.a=a},
fK:function fK(){},
d_:function d_(){},
eC:function eC(a){this.a=a},
dt:function dt(a){this.a=a},
eW:function eW(a,b){this.a=a
this.b=b},
u:function u(){},
j:function j(){},
f1:function f1(){},
aY:function aY(){},
bL:function bL(){},
aZ:function aZ(){},
a4:function a4(){},
a_:function a_(){},
r:function r(){},
aF:function aF(a){this.a=a},
lU:function(a){var u,t=J.T(a)
if(!!t.$iaS){u=t.gcK(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.e2(a.data,a.height,a.width)},
lT:function(a){if(a instanceof P.e2)return{data:a.a,height:a.b,width:a.c}
return a},
aJ:function(a){var u,t,s,r,q
if(a==null)return
u=P.kG(P.r,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){q=t[r]
u.k(0,q,a[q])}return u},
lS:function(a){var u={}
a.H(0,new P.iv(u))
return u},
jo:function(){var u=$.jn
return u==null?$.jn=J.iH(window.navigator.userAgent,"Opera",0):u},
ky:function(){var u,t=$.jk
if(t!=null)return t
u=$.jl
if(u==null?$.jl=J.iH(window.navigator.userAgent,"Firefox",0):u)t="-moz-"
else{u=$.jm
if(u==null)u=$.jm=!P.jo()&&J.iH(window.navigator.userAgent,"Trident/",0)
if(u)t="-ms-"
else t=P.jo()?"-o-":"-webkit-"}return $.jk=t},
e2:function e2(a,b,c){this.a=a
this.b=b
this.c=c},
iv:function iv(a){this.a=a},
eS:function eS(a,b){this.a=a
this.b=b},
eT:function eT(){},
eU:function eU(){},
i9:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lc:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ic:function ic(){},
a3:function a3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aX:function aX(){},
f7:function f7(){},
b_:function b_(){},
fI:function fI(){},
fP:function fP(){},
hf:function hf(){},
k:function k(){},
b0:function b0(){},
hw:function hw(){},
dy:function dy(){},
dz:function dz(){},
dJ:function dJ(){},
dK:function dK(){},
dU:function dU(){},
dV:function dV(){},
e0:function e0(){},
e1:function e1(){},
ek:function ek(){},
el:function el(){},
em:function em(a){this.a=a},
en:function en(){},
bb:function bb(){},
fJ:function fJ(){},
dk:function dk(){},
cV:function cV(){},
h9:function h9(){},
dQ:function dQ(){},
dR:function dR(){}},W={
iM:function(){var u=document.createElement("canvas")
return u},
iP:function(a){return"wheel"},
jr:function(a){var u=document.createElement("img")
u.src=a
return u},
i8:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jQ:function(a,b,c,d){var u=W.i8(W.i8(W.i8(W.i8(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
N:function(a,b,c,d){var u=W.jT(new W.i6(c),W.i)
if(u!=null&&!0)J.kn(a,b,u,!1)
return new W.i5(a,b,u,!1)},
jT:function(a,b){var u=$.ab
if(u===C.e)return a
return u.cE(a,b)},
l:function l(){},
ef:function ef(){},
eh:function eh(){},
ei:function ei(){},
cn:function cn(){},
bd:function bd(){},
aP:function aP(){},
ey:function ey(){},
F:function F(){},
be:function be(){},
ez:function ez(){},
a6:function a6(){},
af:function af(){},
eA:function eA(){},
eB:function eB(){},
eD:function eD(){},
eF:function eF(){},
cv:function cv(){},
cw:function cw(){},
eG:function eG(){},
eH:function eH(){},
i3:function i3(a,b){this.a=a
this.b=b},
P:function P(){},
i:function i(){},
d:function d(){},
at:function at(){},
eQ:function eQ(){},
eR:function eR(){},
eV:function eV(){},
au:function au(){},
eY:function eY(){},
bG:function bG(){},
aS:function aS(){},
bH:function bH(){},
bi:function bi(){},
fb:function fb(){},
fu:function fu(){},
fv:function fv(){},
fw:function fw(a){this.a=a},
fx:function fx(){},
fy:function fy(a){this.a=a},
aw:function aw(){},
fz:function fz(){},
ai:function ai(){},
i2:function i2(a){this.a=a},
B:function B(){},
cP:function cP(){},
az:function az(){},
fM:function fM(){},
fU:function fU(){},
fV:function fV(a){this.a=a},
fX:function fX(){},
aC:function aC(){},
h6:function h6(){},
aD:function aD(){},
h7:function h7(){},
aE:function aE(){},
hc:function hc(){},
hd:function hd(a){this.a=a},
al:function al(){},
aG:function aG(){},
am:function am(){},
hi:function hi(){},
hj:function hj(){},
hr:function hr(){},
aH:function aH(){},
bo:function bo(){},
hu:function hu(){},
hv:function hv(){},
b1:function b1(){},
hK:function hK(){},
hW:function hW(){},
b4:function b4(){},
c1:function c1(){},
i4:function i4(){},
dm:function dm(){},
i7:function i7(){},
dG:function dG(){},
ii:function ii(){},
ij:function ij(){},
i5:function i5(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
i6:function i6(a){this.a=a},
H:function H(){},
cz:function cz(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
dl:function dl(){},
dn:function dn(){},
dp:function dp(){},
dq:function dq(){},
dr:function dr(){},
du:function du(){},
dv:function dv(){},
dw:function dw(){},
dx:function dx(){},
dC:function dC(){},
dD:function dD(){},
dE:function dE(){},
dF:function dF(){},
dH:function dH(){},
dI:function dI(){},
dL:function dL(){},
dM:function dM(){},
dN:function dN(){},
c6:function c6(){},
c7:function c7(){},
dO:function dO(){},
dP:function dP(){},
dT:function dT(){},
dW:function dW(){},
dX:function dX(){},
c9:function c9(){},
ca:function ca(){},
dZ:function dZ(){},
e_:function e_(){},
e3:function e3(){},
e4:function e4(){},
e5:function e5(){},
e6:function e6(){},
e7:function e7(){},
e8:function e8(){},
e9:function e9(){},
ea:function ea(){},
eb:function eb(){},
ec:function ec(){}},K={
R:function(a){var u=new K.fY()
u.dw(a)
return u},
eg:function eg(){},
cA:function cA(){},
cJ:function cJ(){},
ay:function ay(){this.a=null},
fY:function fY(){this.a=null}},L={d0:function d0(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},d6:function d6(a,b,c){this.a=a
this.b=b
this.c=c},d7:function d7(a){this.b=a
this.c=null},hs:function hs(){var _=this
_.d=_.c=_.b=_.a=null},d9:function d9(a){this.b=a
this.a=this.c=null}},O={
iN:function(a){var u=new O.aq([a])
u.aX(a)
return u},
aq:function aq(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bO:function bO(){this.b=this.a=null},
cK:function cK(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fm:function fm(a,b){this.a=a
this.b=b},
fn:function fn(){},
fo:function fo(a,b){this.a=a
this.b=b},
fp:function fp(){},
fq:function fq(a,b){this.a=a
this.b=b},
fr:function fr(){},
fs:function fs(a,b){this.a=a
this.b=b},
ft:function ft(){},
fg:function fg(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bN:function bN(){},
fh:function fh(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
ag:function ag(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fj:function fj(){var _=this
_.e=_.d=_.c=_.b=null},
fk:function fk(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fl:function fl(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cX:function cX(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
d2:function d2(){}},E={
jq:function(){var u,t=new E.as()
t.a=""
t.b=!0
u=O.iN(E.as)
t.y=u
u.aF(t.gfv(),t.gfA())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sbf(0,null)
return t},
jO:function(){if(J.iG(window.navigator.vendor,"Google"))return C.w
if(J.iG(window.navigator.userAgent,"Firefox"))return C.k
var u=window.navigator.appVersion
if(J.aK(u).M(u,"Trident")||C.c.M(u,"Edge"))return C.l
if(J.iG(window.navigator.appName,"Microsoft"))return C.l
return C.x},
jP:function(){var u=window.navigator.appVersion
if(J.aK(u).M(u,"Win"))return C.L
if(C.c.M(u,"Mac"))return C.q
if(C.c.M(u,"Linux"))return C.M
return C.N},
kZ:function(a,b){var u=new E.fQ(a)
u.dv(a,b)
return u},
l4:function(a,b,c,d,e){var u,t,s=J.T(a)
if(!!s.$ibd)return E.jF(a,!0,!0,!0,!1)
u=W.iM()
t=u.style
t.width="100%"
t.height="100%"
s.gcH(a).l(0,u)
return E.jF(u,!0,!0,!0,!1)},
jF:function(a,b,c,d,e){var u,t,s,r,q="mousemove",p=new E.d4(),o=C.f.bZ(a,"webgl2",P.kH(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(o==null)H.p(P.o("Failed to get the rendering context for WebGL."))
p.b=a
p.c=o
p.e=E.kZ(o,a)
u=new T.hn(o)
u.b=o.getParameter(3379)
u.c=o.getParameter(34076)
u.e=u.d=0
p.f=u
u=new X.dc(a)
t=new X.f6()
t.c=new X.a8(!1,!1,!1)
t.d=P.jt(P.u)
u.b=t
t=new X.fA(u)
t.f=0
t.r=V.aA()
t.x=V.aA()
t.ch=t.Q=1
u.c=t
t=new X.fc(u)
t.r=0
t.x=V.aA()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.ht(u)
t.f=V.aA()
t.r=V.aA()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.z=H.b([],[[P.d1,P.a_]])
t=$.eM
u.Q=(t==null?$.eM=new E.ds(E.jO(),E.jP()):t).a===C.k?0.16666666666666666:0.005555555555555556
s=u.z
r=document
s.push(W.N(r,"contextmenu",u.gec(),!1))
u.z.push(W.N(a,"focus",u.gei(),!1))
u.z.push(W.N(a,"blur",u.ge6(),!1))
u.z.push(W.N(r,"keyup",u.gem(),!1))
u.z.push(W.N(r,"keydown",u.gek(),!1))
u.z.push(W.N(a,"mousedown",u.geq(),!1))
u.z.push(W.N(a,"mouseup",u.gev(),!1))
u.z.push(W.N(a,q,u.ges(),!1))
s=u.z
W.iP(a)
W.iP(a)
s.push(W.N(a,W.iP(a),u.gex(),!1))
u.z.push(W.N(r,q,u.gee(),!1))
u.z.push(W.N(r,"mouseup",u.geg(),!1))
u.z.push(W.N(r,"pointerlockchange",u.gez(),!1))
u.z.push(W.N(a,"touchstart",u.geP(),!1))
u.z.push(W.N(a,"touchend",u.geL(),!1))
u.z.push(W.N(a,"touchmove",u.geN(),!1))
p.x=u
p.ch=!0
p.cx=!1
p.cy=new P.a7(Date.now(),!1)
p.db=0
p.cp()
return p},
ep:function ep(){},
as:function as(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bc:function bc(a){this.b=a},
bl:function bl(a){this.b=a},
ds:function ds(a,b){this.a=a
this.b=b},
fQ:function fQ(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fR:function fR(a){this.a=a},
fS:function fS(a){this.a=a},
fT:function fT(a){this.a=a},
d4:function d4(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
hq:function hq(a){this.a=a}},Z={
j2:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cc(c)),35044)
a.bindBuffer(b,null)
return new Z.dh(b,u)},
a9:function(a){return new Z.aI(a)},
dh:function dh(a,b){this.a=a
this.b=b},
co:function co(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
di:function di(a){this.a=a},
bA:function bA(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bg:function bg(a,b,c){this.a=a
this.b=b
this.c=c},
aI:function aI(a){this.a=a}},D={
z:function(){var u=new D.bD()
u.d=0
return u},
es:function es(){},
bD:function bD(){var _=this
_.d=_.c=_.b=_.a=null},
eO:function eO(a){this.a=a},
eP:function eP(a){this.a=a},
Q:function Q(){this.b=null},
aT:function aT(){this.b=null},
aU:function aU(){this.b=null},
x:function x(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
eo:function eo(){},
eE:function eE(){},
Y:function Y(){},
cG:function cG(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
fN:function fN(){},
h8:function h8(){}},X={cp:function cp(a,b){this.a=a
this.b=b},cF:function cF(a,b){this.a=a
this.b=b},f6:function f6(){var _=this
_.d=_.c=_.b=_.a=null},cH:function cH(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fc:function fc(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},a8:function a8(a,b,c){this.a=a
this.b=b
this.c=c},ax:function ax(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},fA:function fA(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bP:function bP(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fO:function fO(){},d8:function d8(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},ht:function ht(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dc:function dc(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
iR:function(a){var u=new X.eX(),t=new V.ar(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.jD
if(t==null){t=V.jC(0,0,1,1)
$.jD=t}u.r=t
return u},
jx:function(a){var u,t,s=new X.cR()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gm().l(0,s.gdC())
t=new D.x("mover",u,s.b)
t.b=!0
s.ag(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.y().a)){s.c=1.0471975511965976
t=new D.x("fov",t,1.0471975511965976)
t.b=!0
s.ag(t)}t=s.d
if(!(Math.abs(t-0.1)<$.y().a)){s.d=0.1
t=new D.x("near",t,0.1)
t.b=!0
s.ag(t)}t=s.e
if(!(Math.abs(t-2000)<$.y().a)){s.e=2000
t=new D.x("far",t,2000)
t.b=!0
s.ag(t)}return s},
iL:function iL(){},
eX:function eX(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eZ:function eZ(){this.b=this.a=null},
cR:function cR(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
hg:function hg(){}},V={
eu:function(a,b,c){var u=a/255,t=b/255,s=c/255
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.ar(u,t,s,1)},
mh:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.b.dh(a-b,u)
return(a<0?a+u:a)+b},
E:function(a,b,c){if(a==null)return C.c.a9("null",c)
return C.c.a9(C.b.de(Math.abs(a-0)<$.y().a?0:a,b),c+b+1)},
bv:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.r])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.m)(a),++s){r=V.E(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.f(o,q)
u=C.c.a9(o[q],t)
p=o.length
if(q>=p)return H.f(o,q)
o[q]=u}return o},
jc:function(a){return C.b.fU(Math.pow(2,C.I.bN(Math.log(H.lR(a))/Math.log(2))))},
bk:function(){var u=$.jv
return u==null?$.jv=V.ah(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
ah:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.av(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
aA:function(){var u=$.jz
return u==null?$.jz=new V.W(0,0):u},
kM:function(){var u=$.aj
return u==null?$.aj=new V.O(0,0,0):u},
jC:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cU(a,b,c,d)},
dg:function(){var u=$.jN
return u==null?$.jN=new V.D(0,0,0):u},
U:function U(a,b,c){this.a=a
this.b=b
this.c=c},
ar:function ar(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eN:function eN(a){this.a=a},
cL:function cL(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
av:function av(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
W:function W(a,b){this.a=a
this.b=b},
O:function O(a,b,c){this.a=a
this.b=b
this.c=c},
aB:function aB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cU:function cU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
C:function C(a,b){this.a=a
this.b=b},
D:function D(a,b,c){this.a=a
this.b=b
this.c=c},
mc:function(a){P.l5(C.G,new V.iD(a))},
l0:function(a){var u=new V.h2()
u.dz(a,!0)
return u},
iD:function iD(a){this.a=a},
h2:function h2(){this.b=this.a=null},
h4:function h4(a){this.a=a},
h3:function h3(a){this.a=a}},U={
iO:function(){var u=new U.ev()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
ev:function ev(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cr:function cr(){this.b=this.a=null},
bF:function bF(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a2:function a2(){},
dd:function dd(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
de:function de(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
df:function df(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cq:function cq(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},cs:function cs(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},cx:function cx(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},aa:function aa(){},
jZ:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="testCanvas",a4=null,a5="modifiers",a6=34067,a7=V.l0("Test 034"),a8=W.iM()
a8.className="pageLargeCanvas"
a8.id=a3
a7.a.appendChild(a8)
u=[P.r]
a7.cz(H.b(["Test of resizing the render target. ","Resizing the canvas works better in Chrome."],u))
a7.cz(H.b(["\xab[Back to Tests|../]"],u))
u=document
a8=u.getElementById(a3)
a7=a8.style
a7.width="100%"
a7.height="100%"
a7.margin="-4px"
t=u.createElement("div")
a7=t.style
a7.border="2px solid"
a7.padding="10px"
C.p.eX(a7,(a7&&C.p).dI(a7,"resize"),"both","")
a7.overflow="auto"
J.jg(a8,t)
t.appendChild(a8)
s=u.getElementById(a3)
if(s==null)H.p(P.o("Failed to find an element with the identifier, testCanvas."))
r=E.l4(s,!0,!0,!0,!1)
q=new U.bF()
q.aX(U.a2)
q.aF(q.gdZ(),q.geD())
q.e=null
q.f=V.bk()
q.r=0
a7=r.x
u=new U.de()
p=U.iO()
p.sbY(0,!0)
p.sbS(6.283185307179586)
p.sbU(0)
p.sa3(0,0)
p.sbT(100)
p.sO(0)
p.sbE(0.5)
u.b=p
o=u.gax()
p.gm().l(0,o)
p=U.iO()
p.sbY(0,!0)
p.sbS(6.283185307179586)
p.sbU(0)
p.sa3(0,0)
p.sbT(100)
p.sO(0)
p.sbE(0.5)
u.c=p
p.gm().l(0,o)
u.d=null
u.r=u.f=u.e=!1
u.y=u.x=2.5
u.Q=4
u.ch=u.cx=!1
u.db=u.cy=0
u.dx=null
u.dy=0
u.fx=u.fr=null
n=new X.a8(!1,!1,!1)
m=u.d
u.d=n
p=new D.x(a5,m,n)
p.b=!0
u.K(p)
p=u.f
if(p!==!1){u.f=!1
p=new D.x("invertX",p,!1)
p.b=!0
u.K(p)}p=u.r
if(p!==!1){u.r=!1
p=new D.x("invertY",p,!1)
p.b=!0
u.K(p)}u.aM(a7)
q.l(0,u)
a7=r.x
u=new U.dd()
p=U.iO()
p.sbY(0,!0)
p.sbS(6.283185307179586)
p.sbU(0)
p.sa3(0,0)
p.sbT(100)
p.sO(0)
p.sbE(0.2)
u.b=p
p.gm().l(0,u.gax())
u.c=null
u.d=!1
u.e=2.5
u.r=4
u.x=u.y=!1
u.z=0
u.Q=null
u.ch=0
u.cy=u.cx=null
n=new X.a8(!0,!1,!1)
m=u.c
u.c=n
p=new D.x(a5,m,n)
p.b=!0
u.K(p)
u.aM(a7)
q.l(0,u)
a7=r.x
u=new U.df()
u.c=0.01
u.e=u.d=0
n=new X.a8(!1,!1,!1)
u.b=n
p=new D.x(a5,a4,n)
p.b=!0
u.K(p)
u.aM(a7)
q.l(0,u)
l=V.ah(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
a7=new U.cr()
a7.a=l
q.l(0,a7)
k=X.jx(q)
j=new O.cK()
a7=O.iN(V.av)
j.e=a7
a7.aF(j.ge2(),j.ge4())
a7=new O.ag(j,"emission")
a7.c=new A.V(!1,!1,!1)
a7.f=new V.U(0,0,0)
j.f=a7
a7=new O.ag(j,"ambient")
a7.c=new A.V(!1,!1,!1)
a7.f=new V.U(0,0,0)
j.r=a7
a7=new O.ag(j,"diffuse")
a7.c=new A.V(!1,!1,!1)
a7.f=new V.U(0,0,0)
j.x=a7
a7=new O.ag(j,"invDiffuse")
a7.c=new A.V(!1,!1,!1)
a7.f=new V.U(0,0,0)
j.y=a7
a7=new O.fl(j,"specular")
a7.c=new A.V(!1,!1,!1)
a7.f=new V.U(0,0,0)
a7.ch=100
j.z=a7
a7=new O.fh(j,"bump")
a7.c=new A.V(!1,!1,!1)
j.Q=a7
j.ch=null
a7=new O.ag(j,"reflect")
a7.c=new A.V(!1,!1,!1)
a7.f=new V.U(0,0,0)
j.cx=a7
a7=new O.fk(j,"refract")
a7.c=new A.V(!1,!1,!1)
a7.f=new V.U(0,0,0)
a7.ch=1
j.cy=a7
a7=new O.fg(j,"alpha")
a7.c=new A.V(!1,!1,!1)
a7.f=1
j.db=a7
a7=new D.cG()
a7.aX(D.Y)
a7.e=H.b([],[D.eo])
a7.f=H.b([],[D.eE])
a7.r=H.b([],[D.fN])
a7.x=H.b([],[D.h8])
a7.z=a7.y=null
a7.c_(a7.ge0(),a7.geB(),a7.geF())
j.dx=a7
u=new O.fj()
u.b=new V.ar(0,0,0,0)
u.c=1
u.d=10
u.e=!1
j.dy=u
u=a7.y
a7=u==null?a7.y=D.z():u
a7.l(0,j.geV())
a7=j.dx
u=a7.z
a7=u==null?a7.z=D.z():u
a7.l(0,j.gau())
j.fr=null
a7=j.r
a7.saA(0,new V.U(0.3,0.3,0.3))
a7=j.x
a7.saA(0,new V.U(0.8,0.8,0.8))
a7=j.x
u=r.f.ft("../resources/Test.png")
p=a7.c
if(!p.b)a7.cs(new A.V(p.a,!0,!1))
p=a7.d
if(p!==u){if(p!=null)p.gm().P(0,a7.gau())
m=a7.d
a7.d=u
u.gm().l(0,a7.gau())
u=new D.x(a7.b+".texture2D",m,a7.d)
u.b=!0
a7.a.R(u)}i=X.iR(a4)
if(i.b){i.b=!1
a7=new D.x("clearColor",!0,!1)
a7.b=!0
i.ag(a7)}h=E.jq()
g=F.iZ()
F.cb(g,a4,a4,1,1,1,0,0,1)
F.cb(g,a4,a4,1,1,0,1,0,3)
F.cb(g,a4,a4,1,1,0,0,1,2)
F.cb(g,a4,a4,1,1,-1,0,0,0)
F.cb(g,a4,a4,1,1,0,-1,0,0)
F.cb(g,a4,a4,1,1,0,0,-1,3)
g.al()
h.sbf(0,g)
f=new M.cx()
f.a=!0
a7=O.iN(E.as)
f.e=a7
a7.aF(f.ge8(),f.gea())
f.y=f.x=f.r=f.f=null
e=X.iR(a4)
f.saN(a4)
f.saS(0,e)
f.saT(a4)
f.e.l(0,h)
f.saT(j)
f.saS(0,i)
f.saN(k)
a7=r.f
u=a7.a
d=u.createTexture()
u.bindTexture(a6,d)
u.texParameteri(a6,10242,10497)
u.texParameteri(a6,10243,10497)
u.texParameteri(a6,10241,9729)
u.texParameteri(a6,10240,9729)
u.bindTexture(a6,a4)
c=new T.hm()
c.a=0
c.b=d
c.c=!1
c.d=0
a7.aw(c,d,"../resources/maskonaive/posx.jpg",34069,!1,!1)
a7.aw(c,d,"../resources/maskonaive/negx.jpg",34070,!1,!1)
a7.aw(c,d,"../resources/maskonaive/posy.jpg",34071,!1,!1)
a7.aw(c,d,"../resources/maskonaive/negy.jpg",34072,!1,!1)
a7.aw(c,d,"../resources/maskonaive/posz.jpg",34073,!1,!1)
a7.aw(c,d,"../resources/maskonaive/negz.jpg",34074,!1,!1)
b=new M.cs()
b.a=!0
a7=E.jq()
g=F.iZ()
u=g.a
p=new V.D(-1,-1,1)
p=p.u(0,Math.sqrt(p.A(p)))
a=u.b2(new V.aB(1,2,4,6),V.eu(255,0,0),new V.O(-1,-1,0),new V.W(0,1),p,a4)
p=g.a
u=new V.D(1,-1,1)
u=u.u(0,Math.sqrt(u.A(u)))
a0=p.b2(new V.aB(0,3,4,6),V.eu(0,0,255),new V.O(1,-1,0),new V.W(1,1),u,a4)
u=g.a
p=new V.D(1,1,1)
p=p.u(0,Math.sqrt(p.A(p)))
a1=u.b2(new V.aB(0,2,5,6),V.eu(0,128,0),new V.O(1,1,0),new V.W(1,0),p,a4)
p=g.a
u=V.aA()
o=new V.D(-1,1,1)
o=o.u(0,Math.sqrt(o.A(o)))
a2=p.b2(new V.aB(0,2,4,7),V.eu(255,255,0),new V.O(-1,1,0),u,o,a4)
g.d.fa(H.b([a,a0,a1,a2],[F.bp]))
g.al()
a7.sbf(0,g)
b.e=a7
b.saN(a4)
b.saS(0,a4)
b.saT(a4)
a7=new O.cX()
a7.b=1.0471975511965976
a7.d=new V.U(1,1,1)
m=a7.c
a7.c=c
c.gm().l(0,a7.gau())
u=new D.x("boxTexture",m,a7.c)
u.b=!0
a7.R(u)
b.saT(a7)
b.saS(0,i)
b.saN(k)
a7=M.aa
u=H.b([b,f],[a7])
p=new M.cq()
p.aX(a7)
p.e=!0
p.f=!1
p.r=null
p.aF(p.geH(),p.geJ())
p.b1(0,u)
a7=r.d
if(a7!==p){if(a7!=null)a7.gm().P(0,r.gc7())
r.d=p
p.gm().l(0,r.gc7())
r.c8()}V.mc(r)}},A={
kK:function(a,b){var u=a.aP,t=new A.ff(b,u)
t.c5(b,u)
t.du(a,b)
return t},
kL:function(a,b,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="MaterialLight_"+a3.gaf(a3)+a4.gaf(a4)+a5.gaf(a5)+a6.gaf(a6)+a7.gaf(a7)+a8.gaf(a8)+a9.gaf(a9)+b0.gaf(b0)+b1.gaf(b1)+"_"
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
d=$.ac()
if(j){u=$.aN()
d=new Z.aI(d.a|u.a)}if(i){u=$.aM()
d=new Z.aI(d.a|u.a)}if(h){u=$.aO()
d=new Z.aI(d.a|u.a)}if(g){u=$.aL()
d=new Z.aI(d.a|u.a)}return new A.fi(a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,s,o,k,o,r,f,!0,e,!1,m,r,l,j,i,h,!1,g,a,!1,a0,!1,a2,c.charCodeAt(0)==0?c:c,d)},
is:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
it:function(a,b,c){var u,t="Txt, txt2D).rgb;\n"
A.is(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.ed(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.b){u+="   "+c+"Color = "+c+"Clr*texture2D("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.b){u+="   "+c+"Color = texture2D("+c+t
a.a=u}a.a=u+"}\n"},
lq:function(a,b){var u,t=a.a,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.is(b,t,"emission")
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
lm:function(a,b){var u,t=a.b
if(!(t.a||t.b||!1))return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.it(b,t,"ambient")
b.a+="\n"},
lo:function(a,b){var u,t=a.c
if(!(t.a||t.b||!1))return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.it(b,t,"diffuse")
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
lr:function(a,b){var u,t=a.d
if(!(t.a||t.b||!1))return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.it(b,t,"invDiffuse")
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
lx:function(a,b){var u,t=a.e
if(!(t.a||t.b||!1))return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.it(b,t,"specular")
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
lt:function(a,b){var u,t,s
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
lv:function(a,b){var u,t=a.r,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.is(b,t,"reflect")
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
lw:function(a,b){var u,t=a.x,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.is(b,t,"refract")
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
ln:function(a,b,c){var u,t,s,r,q,p,o=b.b
if(o<=0)return
u=b.a
t="barLight"+H.e(u)
s=A.ed(t)
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
if(typeof u!=="number")return u.ac()
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
c.a=r+"\n"}r=[P.r]
q=H.b([],r)
q.push("lit.color")
if(u)q.push("attenuation")
u=c.a+="   return "+C.a.p(q," * ")+";\n"
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
u=c.a+="      highLight = intensity*("+C.a.p(p," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.a.p(q," + ")+");\n"
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
lp:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.e(u)
s=A.ed(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.ac()
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
r=[P.r]
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
c.a+="      highLight = intensity*("+C.a.p(m," + ")+");\n"}else c.a+="   highLight = "+C.a.p(m," + ")+";\n"
o.push("highLight")}r=c.a+="   return lit.color*("+C.a.p(o," + ")+");\n"
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
lu:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.e(u)
s=A.ed(t)
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
if(typeof u!=="number")return u.ac()
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
c.a=r+"\n"}r=[P.r]
l=H.b([],r)
l.push("lit.color")
if(o)l.push("attenuation")
if(u)l.push("textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.a.p(l," * ")+";\n"
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
r=c.a+="      highLight = intensity*("+C.a.p(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.a.p(l," + ")+");\n"
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
ly:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.e(u)
s=A.ed(t)
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
if(typeof u!=="number")return u.ac()
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
if(o){u=$.eM
if(u==null)u=$.eM=new E.ds(E.jO(),E.jP())
r=c.a
if(u.b===C.q){u=r+"   float crossMag = length(cross(normDir, lit.objDir));\n"
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
c.a=u+"\n"}u=[P.r]
j=H.b([],u)
if(n)j.push("attenuation")
if(o)j.push("scale")
if(m)j.push("texture2D(txt2D, txtLoc).rgb")
else j.push("vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.a.p(j," * ")+";\n"
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
u=c.a+="      highLight = intensity*("+C.a.p(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.a.p(j," + ")+");\n"
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
ls:function(a,b){var u,t
if(a.cy>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.dx)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.b([],[P.r])
u=a.b
if(u.a||u.b||!1)t.push("ambientColor")
u=a.c
if(u.a||u.b||!1)t.push("diffuse(norm, litVec)")
u=a.d
if(u.a||u.b||!1)t.push("invDiffuse(norm, litVec)")
u=a.e
if(u.a||u.b||!1)t.push("specular(norm, litVec)")
u=b.a+="   return "+C.a.p(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
lz:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.aF("")
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
A.lq(a,j)
A.lm(a,j)
A.lo(a,j)
A.lr(a,j)
A.lx(a,j)
t=a.db
if(t){r=j.a+="// === Environmental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.lv(a,j)
A.lw(a,j)}A.lt(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.m)(q),++o)A.ln(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.m)(q),++o)A.lp(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.m)(q),++o)A.lu(a,q[o],j)
for(q=a.cx,p=q.length,o=0;o<q.length;q.length===p||(0,H.m)(q),++o)A.ly(a,q[o],j)
A.ls(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.b([],[P.r])
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
if(0>=r.length)return H.f(r,0)
j.a+=m+(r[0].toUpperCase()+C.c.as(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.m)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.f(r,0)
j.a+=m+(r[0].toUpperCase()+C.c.as(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.m)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.f(r,0)
j.a+=m+(r[0].toUpperCase()+C.c.as(r,1))+"Values(norm);\n"}for(u=a.cx,t=u.length,o=0;o<u.length;u.length===t||(0,H.m)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.f(r,0)
j.a+=m+(r[0].toUpperCase()+C.c.as(r,1))+"Values(norm);\n"}if(a.cy<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
if(u.a||u.b||!1)n.push("emissionColor()")
u=a.r
if(u.a||u.b||!1)n.push("reflect(refl)")
u=a.x
if(u.a||u.b||!1)n.push("refract(refl)")
if(n.length<=0)n.push("vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.a.p(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
lA:function(a,b){var u,t,s
if(!a.ry)return
u=b.a+="struct BendingValue\n"
u+="{\n"
b.a=u
u+="   mat4 mat;\n"
b.a=u
u+="};\n"
b.a=u
b.a=u+"uniform int bendMatCount;\n"
u=b.a+="uniform BendingValue bendValues["+a.aC+"];\n"
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
lC:function(a,b){var u
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
lB:function(a,b){var u
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
lE:function(a,b){var u,t
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
lF:function(a,b){var u,t
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
lD:function(a,b){var u
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
lG:function(a,b){var u
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
ed:function(a){if(0>=a.length)return H.f(a,0)
return a[0].toUpperCase()+C.c.as(a,1)},
j1:function(a,b,c,d,e){var u=new A.hz(a,c,e)
u.f=d
P.kI(d,0,P.u)
return u},
cl:function cl(a,b,c){this.a=a
this.b=b
this.c=c},
ej:function ej(a){this.a=a},
V:function V(a,b,c){this.a=a
this.b=b
this.c=c},
ff:function ff(a,b){var _=this
_.h4=_.cQ=_.b6=_.aP=_.aC=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.hc=_.hb=_.ha=_.bM=_.bL=_.bK=_.bJ=_.bI=_.bH=_.bG=_.bF=_.h9=_.d1=_.d0=_.h8=_.d_=_.cZ=_.cY=_.h7=_.cX=_.cW=_.cV=_.h6=_.cU=_.cT=_.h5=_.cS=_.cR=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cm:function cm(a,b){this.a=a
this.b=b},
cu:function cu(a,b){this.a=a
this.b=b},
cS:function cS(a,b){this.a=a
this.b=b},
cZ:function cZ(a,b){this.a=a
this.b=b},
fi:function fi(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.aC=b3
_.aP=b4
_.b6=b5},
bW:function bW(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
bX:function bX(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
bZ:function bZ(a,b,c,d,e,f,g,h,i,j){var _=this
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
c_:function c_(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cW:function cW(){},
h5:function h5(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
da:function da(){},
hE:function hE(a){this.a=a},
b2:function b2(a,b,c){this.a=a
this.c=b
this.d=c},
hB:function hB(a,b,c){this.a=a
this.c=b
this.d=c},
hC:function hC(a,b,c){this.a=a
this.c=b
this.d=c},
hD:function hD(a,b,c){this.a=a
this.c=b
this.d=c},
hz:function hz(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
K:function K(a,b,c){this.a=a
this.c=b
this.d=c},
hA:function hA(a,b,c){this.a=a
this.c=b
this.d=c},
A:function A(a,b,c){this.a=a
this.c=b
this.d=c},
bV:function bV(a,b,c){this.a=a
this.c=b
this.d=c},
hF:function hF(a,b,c){this.a=a
this.c=b
this.d=c},
bY:function bY(a,b,c){this.a=a
this.c=b
this.d=c},
a0:function a0(a,b,c){this.a=a
this.c=b
this.d=c},
S:function S(a,b,c){this.a=a
this.c=b
this.d=c},
b3:function b3(a,b,c){this.a=a
this.c=b
this.d=c}},F={
ir:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cb:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.D(h,g+a1,f+a2)
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
j.d=i}m=F.ir(i)
l=F.ir(h)
k=F.me(d,a0,new F.iq(j,F.ir(g),F.ir(f),l,m,c),b)
if(k!=null)a.fu(k)},
me:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.iZ()
t=H.b([],[F.bp])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.hN(g,g,new V.ar(p,0,0,1),g,g,new V.W(r,1),g,g,0)
q.l(0,o)
c.$3(o,r,0)
t.push(o.bD(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.hN(g,g,new V.ar(j,i,h,1),g,g,new V.W(r,m),g,g,0)
k.l(0,o)
c.$3(o,r,n)
t.push(o.bD(d))}}u.d.fb(a+1,b+1,t)
return u},
bE:function(a,b,c){var u=new F.aR(),t=a.a
if(t==null)H.p(P.o("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.p(P.o("May not create a face with vertices attached to different shapes."))
u.a=a
a.d.b.push(u)
u.b=b
b.d.c.push(u)
u.c=c
c.d.d.push(u)
u.a.a.d.b.push(u)
u.a.a.Y()
return u},
kF:function(a,b){var u=new F.bJ(),t=a.a
if(t==null)H.p(P.o("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.p(P.o("May not create a line with vertices attached to different shapes."))
u.a=a
a.c.b.push(u)
u.b=b
b.c.c.push(u)
u.a.a.c.b.push(u)
u.a.a.Y()
return u},
iZ:function(){var u=new F.fZ(),t=new F.hO(u)
t.b=!1
t.c=H.b([],[F.bp])
u.a=t
t=new F.h1(u)
t.b=H.b([],[F.bS])
u.b=t
t=new F.h0(u)
t.b=H.b([],[F.bJ])
u.c=t
t=new F.h_(u)
t.b=H.b([],[F.aR])
u.d=t
u.e=null
return u},
hN:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.bp(),r=new F.hT()
r.b=H.b([],[F.bS])
s.b=r
r=new F.hS()
u=[F.bJ]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.hP()
u=[F.aR]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.ki()
s.e=0
r=$.ac()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aN().a)!==0?e:t
s.x=(u&$.aM().a)!==0?b:t
s.y=(u&$.aO().a)!==0?f:t
s.z=(u&$.b8().a)!==0?g:t
s.Q=(u&$.kj().a)!==0?c:t
s.ch=(u&$.bw().a)!==0?i:0
s.cx=(u&$.aL().a)!==0?a:t
return s},
iq:function iq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aR:function aR(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bJ:function bJ(){this.b=this.a=null},
bS:function bS(){this.a=null},
fZ:function fZ(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
h_:function h_(a){this.a=a
this.b=null},
h0:function h0(a){this.a=a
this.b=null},
h1:function h1(a){this.a=a
this.b=null},
bp:function bp(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hV:function hV(a){this.a=a},
hU:function hU(a){this.a=a},
hO:function hO(a){this.a=a
this.c=this.b=null},
hP:function hP(){this.d=this.c=this.b=null},
hQ:function hQ(a,b){this.a=a
this.b=b},
hR:function hR(a,b){this.a=a
this.b=b},
hS:function hS(){this.c=this.b=null},
hT:function hT(){this.b=null}},T={d3:function d3(){},hk:function hk(){},hl:function hl(){var _=this
_.y=_.d=_.c=_.b=_.a=null},hm:function hm(){var _=this
_.e=_.d=_.c=_.b=_.a=null},hn:function hn(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},hp:function hp(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},ho:function ho(a,b,c,d,e,f,g){var _=this
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
H.iV.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gG:function(a){return H.bT(a)},
i:function(a){return"Instance of '"+H.e(H.bU(a))+"'"}}
J.f2.prototype={
i:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$ib6:1}
J.cD.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gG:function(a){return 0}}
J.cE.prototype={
gG:function(a){return 0},
i:function(a){return String(a)}}
J.fL.prototype={}
J.c0.prototype={}
J.aW.prototype={
i:function(a){var u=a[$.k7()]
if(u==null)return this.ds(a)
return"JavaScript function for "+H.e(J.a5(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.aV.prototype={
fM:function(a,b){var u
if(!!a.fixed$length)H.p(P.v("removeAt"))
u=a.length
if(b>=u)throw H.c(P.cT(b,null))
return a.splice(b,1)[0]},
P:function(a,b){var u
if(!!a.fixed$length)H.p(P.v("remove"))
for(u=0;u<a.length;++u)if(J.L(a[u],b)){a.splice(u,1)
return!0}return!1},
b1:function(a,b){var u,t
if(!!a.fixed$length)H.p(P.v("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.m)(b),++t)a.push(b[t])},
H:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.c(P.bC(a))}},
p:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.f(r,u)
r[u]=t}return r.join(b)},
fq:function(a){return this.p(a,"")},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
dn:function(a,b,c){var u=a.length
if(b>u)throw H.c(P.ak(b,0,u,"start",null))
if(c==null)c=u
else if(c<b||c>u)throw H.c(P.ak(c,b,u,"end",null))
if(b===c)return H.b([],[H.b7(a,0)])
return H.b(a.slice(b,c),[H.b7(a,0)])},
gbP:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.kB())},
aH:function(a,b){if(!!a.immutable$list)H.p(P.v("sort"))
H.l3(a,b==null?J.lj():b)},
dm:function(a){return this.aH(a,null)},
M:function(a,b){var u
for(u=0;u<a.length;++u)if(J.L(a[u],b))return!0
return!1},
i:function(a){return P.iS(a,"[","]")},
gN:function(a){return new J.X(a,a.length)},
gG:function(a){return H.bT(a)},
gj:function(a){return a.length},
sj:function(a,b){var u="newLength"
if(!!a.fixed$length)H.p(P.v("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.iJ(b,u,null))
if(b<0)throw H.c(P.ak(b,0,null,u,null))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bu(a,b))
return a[b]},
k:function(a,b,c){if(!!a.immutable$list)H.p(P.v("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bu(a,b))
a[b]=c},
$in:1,
$ij:1}
J.iU.prototype={}
J.X.prototype={
gF:function(a){return this.d},
t:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.m(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bI.prototype={
aB:function(a,b){var u
if(typeof b!=="number")throw H.c(H.ap(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gb7(b)
if(this.gb7(a)===u)return 0
if(this.gb7(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gb7:function(a){return a===0?1/a<0:a<0},
fU:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.v(""+a+".toInt()"))},
bN:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.v(""+a+".floor()"))},
ae:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.v(""+a+".round()"))},
de:function(a,b){var u
if(b>20)throw H.c(P.ak(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gb7(a))return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gG:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
n:function(a,b){if(typeof b!=="number")throw H.c(H.ap(b))
return a*b},
dh:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
dt:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.ct(a,b)},
X:function(a,b){return(a|0)===a?a/b|0:this.ct(a,b)},
ct:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.v("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
b_:function(a,b){var u
if(a>0)u=this.f1(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
f1:function(a,b){return b>31?0:a>>>b},
$iJ:1,
$ia4:1}
J.cC.prototype={$iu:1}
J.cB.prototype={}
J.bh.prototype={
bC:function(a,b){if(b<0)throw H.c(H.bu(a,b))
if(b>=a.length)H.p(H.bu(a,b))
return a.charCodeAt(b)},
bh:function(a,b){if(b>=a.length)throw H.c(H.bu(a,b))
return a.charCodeAt(b)},
w:function(a,b){if(typeof b!=="string")throw H.c(P.iJ(b,null,null))
return a+b},
c1:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.cT(b,null))
if(b>c)throw H.c(P.cT(b,null))
if(c>a.length)throw H.c(P.cT(c,null))
return a.substring(b,c)},
as:function(a,b){return this.c1(a,b,null)},
n:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.E)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
a9:function(a,b){var u=b-a.length
if(u<=0)return a
return this.n(" ",u)+a},
cJ:function(a,b,c){var u=a.length
if(c>u)throw H.c(P.ak(c,0,u,null,null))
return H.k2(a,b,c)},
M:function(a,b){return this.cJ(a,b,0)},
aB:function(a,b){var u
if(typeof b!=="string")throw H.c(H.ap(b))
if(a===b)u=0
else u=a<b?-1:1
return u},
i:function(a){return a},
gG:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gj:function(a){return a.length},
$ir:1}
H.M.prototype={
gj:function(a){return this.a.length},
h:function(a,b){return C.c.bC(this.a,b)},
$an:function(){return[P.u]},
$aq:function(){return[P.u]},
$aj:function(){return[P.u]}}
H.n.prototype={}
H.bK.prototype={
gF:function(a){return this.d},
t:function(){var u,t=this,s=t.a,r=J.aK(s),q=r.gj(s)
if(t.b!=q)throw H.c(P.bC(s))
u=t.c
if(typeof q!=="number")return H.t(q)
if(u>=q){t.d=null
return!1}t.d=r.C(s,u);++t.c
return!0}}
H.bM.prototype={
gN:function(a){return new H.cI(J.b9(this.a),this.b)},
gj:function(a){return J.ba(this.a)},
C:function(a,b){return this.b.$1(J.iI(this.a,b))},
$aj:function(a,b){return[b]}}
H.eK.prototype={$in:1,
$an:function(a,b){return[b]}}
H.cI.prototype={
t:function(){var u=this,t=u.b
if(t.t()){u.a=u.c.$1(t.gF(t))
return!0}u.a=null
return!1},
gF:function(a){return this.a}}
H.hX.prototype={
gN:function(a){return new H.hY(J.b9(this.a),this.b)}}
H.hY.prototype={
t:function(){var u,t
for(u=this.a,t=this.b;u.t();)if(t.$1(u.gF(u)))return!0
return!1},
gF:function(a){var u=this.a
return u.gF(u)}}
H.cy.prototype={}
H.hI.prototype={
k:function(a,b,c){throw H.c(P.v("Cannot modify an unmodifiable list"))}}
H.db.prototype={}
H.hx.prototype={
a8:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.fH.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.f5.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.hH.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.iF.prototype={
$1:function(a){if(!!J.T(a).$ibf)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:7}
H.dS.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bB.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.cg(t==null?"unknown":t)+"'"},
gfZ:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hh.prototype={}
H.hb.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cg(u)+"'"}}
H.by.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.by))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gG:function(a){var u,t=this.c
if(t==null)u=H.bT(this.a)
else u=typeof t!=="object"?J.bx(t):H.bT(t)
return(u^H.bT(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.bU(u))+"'")}}
H.er.prototype={
i:function(a){return this.a}}
H.fW.prototype={
i:function(a){return"RuntimeError: "+H.e(this.a)}}
H.G.prototype={
gj:function(a){return this.a},
gao:function(a){return new H.bj(this,[H.b7(this,0)])},
gfY:function(a){var u=this,t=H.b7(u,0)
return H.kJ(new H.bj(u,[t]),new H.f4(u),t,H.b7(u,1))},
ff:function(a,b){var u=this.b
if(u==null)return!1
return this.dN(u,b)},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.aY(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.aY(r,b)
s=t==null?null:t.b
return s}else return q.fp(b)},
fp:function(a){var u,t,s=this.d
if(s==null)return
u=this.cj(s,J.bx(a)&0x3ffffff)
t=this.d3(u,a)
if(t<0)return
return u[t].b},
k:function(a,b,c){var u,t,s,r,q,p,o=this
if(typeof b==="string"){u=o.b
o.cb(u==null?o.b=o.bu():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.cb(t==null?o.c=o.bu():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bu()
r=J.bx(b)&0x3ffffff
q=o.cj(s,r)
if(q==null)o.bx(s,r,[o.bv(b,c)])
else{p=o.d3(q,b)
if(p>=0)q[p].b=c
else q.push(o.bv(b,c))}}},
H:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.c(P.bC(u))
t=t.c}},
cb:function(a,b,c){var u=this.aY(a,b)
if(u==null)this.bx(a,b,this.bv(b,c))
else u.b=c},
bv:function(a,b){var u=this,t=new H.f8(a,b)
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
d3:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.L(a[t].a,b))return t
return-1},
i:function(a){return P.ju(this)},
aY:function(a,b){return a[b]},
cj:function(a,b){return a[b]},
bx:function(a,b,c){a[b]=c},
dQ:function(a,b){delete a[b]},
dN:function(a,b){return this.aY(a,b)!=null},
bu:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bx(t,u,t)
this.dQ(t,u)
return t}}
H.f4.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.b7(u,1),args:[H.b7(u,0)]}}}
H.f8.prototype={}
H.bj.prototype={
gj:function(a){return this.a.a},
gN:function(a){var u=this.a,t=new H.f9(u,u.r)
t.c=u.e
return t}}
H.f9.prototype={
gF:function(a){return this.d},
t:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bC(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.iy.prototype={
$1:function(a){return this.a(a)},
$S:7}
H.iz.prototype={
$2:function(a,b){return this.a(a,b)}}
H.iA.prototype={
$1:function(a){return this.a(a)}}
H.f3.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.bR.prototype={}
H.cM.prototype={
gj:function(a){return a.length},
$iw:1,
$aw:function(){}}
H.bQ.prototype={
h:function(a,b){H.ao(b,a,a.length)
return a[b]},
k:function(a,b,c){H.ao(b,a,a.length)
a[b]=c},
$in:1,
$an:function(){return[P.J]},
$aq:function(){return[P.J]},
$ij:1,
$aj:function(){return[P.J]}}
H.cN.prototype={
k:function(a,b,c){H.ao(b,a,a.length)
a[b]=c},
$in:1,
$an:function(){return[P.u]},
$aq:function(){return[P.u]},
$ij:1,
$aj:function(){return[P.u]}}
H.fB.prototype={
h:function(a,b){H.ao(b,a,a.length)
return a[b]}}
H.fC.prototype={
h:function(a,b){H.ao(b,a,a.length)
return a[b]}}
H.fD.prototype={
h:function(a,b){H.ao(b,a,a.length)
return a[b]}}
H.fE.prototype={
h:function(a,b){H.ao(b,a,a.length)
return a[b]}}
H.fF.prototype={
h:function(a,b){H.ao(b,a,a.length)
return a[b]}}
H.cO.prototype={
gj:function(a){return a.length},
h:function(a,b){H.ao(b,a,a.length)
return a[b]}}
H.fG.prototype={
gj:function(a){return a.length},
h:function(a,b){H.ao(b,a,a.length)
return a[b]}}
H.c2.prototype={}
H.c3.prototype={}
H.c4.prototype={}
H.c5.prototype={}
P.i_.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:16}
P.hZ.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.i0.prototype={
$0:function(){this.a.$0()}}
P.i1.prototype={
$0:function(){this.a.$0()}}
P.dY.prototype={
dA:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bt(new P.im(this,b),0),a)
else throw H.c(P.v("`setTimeout()` not found."))},
dB:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bt(new P.il(this,a,Date.now(),b),0),a)
else throw H.c(P.v("Periodic timer."))},
$id5:1}
P.im.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.il.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.dt(u,q)}s.c=r
t.d.$1(s)}}
P.bq.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.e(this.a)+")"}}
P.c8.prototype={
gF:function(a){var u=this.c
if(u==null)return this.b
return u.gF(u)},
t:function(){var u,t,s,r,q=this
for(;!0;){u=q.c
if(u!=null)if(u.t())return!0
else q.c=null
t=function(a,b,c){var p,o=b
while(true)try{return a(o,p)}catch(n){p=n
o=c}}(q.a,0,1)
if(t instanceof P.bq){s=t.b
if(s===2){u=q.d
if(u==null||u.length===0){q.b=null
return!1}if(0>=u.length)return H.f(u,-1)
q.a=u.pop()
continue}else{u=t.a
if(s===3)throw u
else{r=J.b9(u)
if(!!r.$ic8){u=q.d
if(u==null)u=q.d=[]
u.push(q.a)
q.a=r.a
continue}else{q.c=r
continue}}}}else{q.b=t
return!0}}return!1}}
P.ik.prototype={
gN:function(a){return new P.c8(this.a())}}
P.dj.prototype={}
P.d1.prototype={}
P.he.prototype={}
P.d5.prototype={}
P.ip.prototype={}
P.iu.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.cQ():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u}}
P.id.prototype={
fQ:function(a){var u,t,s,r=null
try{if(C.e===$.ab){a.$0()
return}P.lI(r,r,this,a)}catch(s){u=H.ee(s)
t=H.j9(s)
P.jS(r,r,this,u,t)}},
fR:function(a,b){var u,t,s,r=null
try{if(C.e===$.ab){a.$1(b)
return}P.lJ(r,r,this,a,b)}catch(s){u=H.ee(s)
t=H.j9(s)
P.jS(r,r,this,u,t)}},
fS:function(a,b){return this.fR(a,b,null)},
fd:function(a){return new P.ie(this,a)},
cE:function(a,b){return new P.ig(this,a,b)}}
P.ie.prototype={
$0:function(){return this.a.fQ(this.b)}}
P.ig.prototype={
$1:function(a){return this.a.fS(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.ia.prototype={
gN:function(a){var u=new P.dA(this,this.r)
u.c=this.e
return u},
gj:function(a){return this.a},
M:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.dL(b)
return t}},
dL:function(a){var u=this.d
if(u==null)return!1
return this.bl(this.ci(u,a),a)>=0},
l:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cc(u==null?s.b=P.j3():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cc(t==null?s.c=P.j3():t,b)}else return s.dE(0,b)},
dE:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.j3()
u=s.cd(b)
t=r[u]
if(t==null)r[u]=[s.bi(b)]
else{if(s.bl(t,b)>=0)return!1
t.push(s.bi(b))}return!0},
P:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.eS(this.c,b)
else return this.eR(0,b)},
eR:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.ci(r,b)
t=s.bl(u,b)
if(t<0)return!1
s.cv(u.splice(t,1)[0])
return!0},
cc:function(a,b){if(a[b]!=null)return!1
a[b]=this.bi(b)
return!0},
eS:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.cv(u)
delete a[b]
return!0},
ck:function(){this.r=1073741823&this.r+1},
bi:function(a){var u,t=this,s=new P.ib(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.ck()
return s},
cv:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.ck()},
cd:function(a){return J.bx(a)&1073741823},
ci:function(a,b){return a[this.cd(b)]},
bl:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.L(a[t].a,b))return t
return-1}}
P.ib.prototype={}
P.dA.prototype={
gF:function(a){return this.d},
t:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bC(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.f0.prototype={}
P.fa.prototype={$in:1,$ij:1}
P.q.prototype={
gN:function(a){return new H.bK(a,this.gj(a))},
C:function(a,b){return this.h(a,b)},
fW:function(a,b){var u,t,s=this,r=H.b([],[H.m0(s,a,"q",0)])
C.a.sj(r,s.gj(a))
u=0
while(!0){t=s.gj(a)
if(typeof t!=="number")return H.t(t)
if(!(u<t))break
t=s.h(a,u)
if(u>=r.length)return H.f(r,u)
r[u]=t;++u}return r},
fV:function(a){return this.fW(a,!0)},
i:function(a){return P.iS(a,"[","]")}}
P.fd.prototype={}
P.fe.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:8}
P.Z.prototype={
H:function(a,b){var u,t
for(u=J.b9(this.gao(a));u.t();){t=u.gF(u)
b.$2(t,this.h(a,t))}},
gj:function(a){return J.ba(this.gao(a))},
i:function(a){return P.ju(a)}}
P.ih.prototype={
i:function(a){return P.iS(this,"{","}")},
C:function(a,b){var u,t,s
P.jB(b,"index")
for(u=P.ld(this,this.r),t=0;u.t();){s=u.d
if(b===t)return s;++t}throw H.c(P.I(b,this,"index",null,t))},
$in:1,
$ij:1}
P.dB.prototype={}
P.et.prototype={}
P.ex.prototype={}
P.eL.prototype={}
P.hL.prototype={}
P.hM.prototype={
fg:function(a){var u,t,s,r=P.iY(0,null,a.length)
if(typeof r!=="number")return r.E()
u=r-0
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.io(t)
if(s.dS(a,0,r)!==r)s.cw(C.c.bC(a,r-1),0)
return new Uint8Array(t.subarray(0,H.lh(0,s.b,t.length)))}}
P.io.prototype={
cw:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
dS:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.c.bC(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.c.bh(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cw(r,C.c.bh(a,p)))s=p}else if(r<=2047){q=n.b
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
P.b6.prototype={}
P.a7.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.a7&&this.a===b.a&&!0},
aB:function(a,b){return C.d.aB(this.a,b.a)},
gG:function(a){var u=this.a
return(u^C.d.b_(u,30))&1073741823},
i:function(a){var u=this,t=P.kw(H.kU(u)),s=P.ct(H.kS(u)),r=P.ct(H.kO(u)),q=P.ct(H.kP(u)),p=P.ct(H.kR(u)),o=P.ct(H.kT(u)),n=P.kx(H.kQ(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.J.prototype={}
P.aQ.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.aQ&&this.a===b.a},
gG:function(a){return C.d.gG(this.a)},
aB:function(a,b){return C.d.aB(this.a,b.a)},
i:function(a){var u,t,s,r=new P.eJ(),q=this.a
if(q<0)return"-"+new P.aQ(0-q).i(0)
u=r.$1(C.d.X(q,6e7)%60)
t=r.$1(C.d.X(q,1e6)%60)
s=new P.eI().$1(q%1e6)
return""+C.d.X(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
P.eI.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.eJ.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bf.prototype={}
P.cQ.prototype={
i:function(a){return"Throw of null."}}
P.ad.prototype={
gbk:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbj:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbk()+o+u
if(!q.a)return t
s=q.gbj()
r=P.iQ(q.b)
return t+s+": "+r}}
P.bn.prototype={
gbk:function(){return"RangeError"},
gbj:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.f_.prototype={
gbk:function(){return"RangeError"},
gbj:function(){var u,t=this.b
if(typeof t!=="number")return t.a1()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gj:function(a){return this.f}}
P.hJ.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.hG.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.ha.prototype={
i:function(a){return"Bad state: "+this.a}}
P.ew.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.iQ(u)+"."}}
P.fK.prototype={
i:function(a){return"Out of Memory"},
$ibf:1}
P.d_.prototype={
i:function(a){return"Stack Overflow"},
$ibf:1}
P.eC.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dt.prototype={
i:function(a){return"Exception: "+this.a}}
P.eW.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.c.c1(s,0,75)+"...":s
return t+"\n"+r}}
P.u.prototype={}
P.j.prototype={
gj:function(a){var u,t=this.gN(this)
for(u=0;t.t();)++u
return u},
C:function(a,b){var u,t,s
P.jB(b,"index")
for(u=this.gN(this),t=0;u.t();){s=u.gF(u)
if(b===t)return s;++t}throw H.c(P.I(b,this,"index",null,t))},
i:function(a){return P.kA(this,"(",")")}}
P.f1.prototype={}
P.aY.prototype={$in:1,$ij:1}
P.bL.prototype={}
P.aZ.prototype={
gG:function(a){return P.a_.prototype.gG.call(this,this)},
i:function(a){return"null"}}
P.a4.prototype={}
P.a_.prototype={constructor:P.a_,$ia_:1,
q:function(a,b){return this===b},
gG:function(a){return H.bT(this)},
i:function(a){return"Instance of '"+H.e(H.bU(this))+"'"},
toString:function(){return this.i(this)}}
P.r.prototype={}
P.aF.prototype={
gj:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.l.prototype={}
W.ef.prototype={
gj:function(a){return a.length}}
W.eh.prototype={
i:function(a){return String(a)}}
W.ei.prototype={
i:function(a){return String(a)}}
W.cn.prototype={}
W.bd.prototype={
bZ:function(a,b,c){if(c!=null)return a.getContext(b,P.lS(c))
return a.getContext(b)},
dg:function(a,b){return this.bZ(a,b,null)},
$ibd:1}
W.aP.prototype={
gj:function(a){return a.length}}
W.ey.prototype={
gj:function(a){return a.length}}
W.F.prototype={$iF:1}
W.be.prototype={
dI:function(a,b){var u=$.k6(),t=u[b]
if(typeof t==="string")return t
t=this.f2(a,b)
u[b]=t
return t},
f2:function(a,b){var u
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
u=P.ky()+b
if(u in a)return u
return b},
eX:function(a,b,c,d){a.setProperty(b,c,d)},
gj:function(a){return a.length}}
W.ez.prototype={}
W.a6.prototype={}
W.af.prototype={}
W.eA.prototype={
gj:function(a){return a.length}}
W.eB.prototype={
gj:function(a){return a.length}}
W.eD.prototype={
gj:function(a){return a.length}}
W.eF.prototype={
i:function(a){return String(a)}}
W.cv.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[[P.a3,P.a4]]},
$iw:1,
$aw:function(){return[[P.a3,P.a4]]},
$aq:function(){return[[P.a3,P.a4]]},
$ij:1,
$aj:function(){return[[P.a3,P.a4]]}}
W.cw.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gar(a))+" x "+H.e(this.gan(a))},
q:function(a,b){var u
if(b==null)return!1
u=J.T(b)
return!!u.$ia3&&a.left===u.gb8(b)&&a.top===u.gbd(b)&&this.gar(a)===u.gar(b)&&this.gan(a)===u.gan(b)},
gG:function(a){return W.jQ(C.b.gG(a.left),C.b.gG(a.top),C.b.gG(this.gar(a)),C.b.gG(this.gan(a)))},
gcF:function(a){return a.bottom},
gan:function(a){return a.height},
gb8:function(a){return a.left},
gbc:function(a){return a.right},
gbd:function(a){return a.top},
gar:function(a){return a.width},
$ia3:1,
$aa3:function(){return[P.a4]}}
W.eG.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[P.r]},
$iw:1,
$aw:function(){return[P.r]},
$aq:function(){return[P.r]},
$ij:1,
$aj:function(){return[P.r]}}
W.eH.prototype={
gj:function(a){return a.length}}
W.i3.prototype={
gj:function(a){return this.b.length},
h:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
k:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
this.a.replaceChild(c,u[b])},
l:function(a,b){this.a.appendChild(b)
return b},
gN:function(a){var u=this.fV(this)
return new J.X(u,u.length)},
$an:function(){return[W.P]},
$aq:function(){return[W.P]},
$aj:function(){return[W.P]}}
W.P.prototype={
gcH:function(a){return new W.i3(a,a.children)},
gcI:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.a1()
if(s<0)s=-s*0
if(typeof r!=="number")return r.a1()
if(r<0)r=-r*0
return new P.a3(u,t,s,r,[P.a4])},
i:function(a){return a.localName},
$iP:1}
W.i.prototype={$ii:1}
W.d.prototype={
f9:function(a,b,c,d){if(c!=null)this.dF(a,b,c,!1)},
dF:function(a,b,c,d){return a.addEventListener(b,H.bt(c,1),!1)}}
W.at.prototype={$iat:1}
W.eQ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.at]},
$iw:1,
$aw:function(){return[W.at]},
$aq:function(){return[W.at]},
$ij:1,
$aj:function(){return[W.at]}}
W.eR.prototype={
gj:function(a){return a.length}}
W.eV.prototype={
gj:function(a){return a.length}}
W.au.prototype={$iau:1}
W.eY.prototype={
gj:function(a){return a.length}}
W.bG.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.B]},
$iw:1,
$aw:function(){return[W.B]},
$aq:function(){return[W.B]},
$ij:1,
$aj:function(){return[W.B]}}
W.aS.prototype={$iaS:1,
gcK:function(a){return a.data}}
W.bH.prototype={$ibH:1}
W.bi.prototype={$ibi:1}
W.fb.prototype={
i:function(a){return String(a)}}
W.fu.prototype={
gj:function(a){return a.length}}
W.fv.prototype={
h:function(a,b){return P.aJ(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aJ(u.value[1]))}},
gao:function(a){var u=H.b([],[P.r])
this.H(a,new W.fw(u))
return u},
gj:function(a){return a.size},
$aZ:function(){return[P.r,null]}}
W.fw.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fx.prototype={
h:function(a,b){return P.aJ(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aJ(u.value[1]))}},
gao:function(a){var u=H.b([],[P.r])
this.H(a,new W.fy(u))
return u},
gj:function(a){return a.size},
$aZ:function(){return[P.r,null]}}
W.fy.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aw.prototype={$iaw:1}
W.fz.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.aw]},
$iw:1,
$aw:function(){return[W.aw]},
$aq:function(){return[W.aw]},
$ij:1,
$aj:function(){return[W.aw]}}
W.ai.prototype={$iai:1}
W.i2.prototype={
k:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.f(t,b)
u.replaceChild(c,t[b])},
gN:function(a){var u=this.a.childNodes
return new W.cz(u,u.length)},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
$an:function(){return[W.B]},
$aq:function(){return[W.B]},
$aj:function(){return[W.B]}}
W.B.prototype={
fO:function(a,b){var u,t
try{u=a.parentNode
J.km(u,b,a)}catch(t){H.ee(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.dr(a):u},
eT:function(a,b,c){return a.replaceChild(b,c)},
$iB:1}
W.cP.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.B]},
$iw:1,
$aw:function(){return[W.B]},
$aq:function(){return[W.B]},
$ij:1,
$aj:function(){return[W.B]}}
W.az.prototype={$iaz:1,
gj:function(a){return a.length}}
W.fM.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.az]},
$iw:1,
$aw:function(){return[W.az]},
$aq:function(){return[W.az]},
$ij:1,
$aj:function(){return[W.az]}}
W.fU.prototype={
h:function(a,b){return P.aJ(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aJ(u.value[1]))}},
gao:function(a){var u=H.b([],[P.r])
this.H(a,new W.fV(u))
return u},
gj:function(a){return a.size},
$aZ:function(){return[P.r,null]}}
W.fV.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fX.prototype={
gj:function(a){return a.length}}
W.aC.prototype={$iaC:1}
W.h6.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.aC]},
$iw:1,
$aw:function(){return[W.aC]},
$aq:function(){return[W.aC]},
$ij:1,
$aj:function(){return[W.aC]}}
W.aD.prototype={$iaD:1}
W.h7.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.aD]},
$iw:1,
$aw:function(){return[W.aD]},
$aq:function(){return[W.aD]},
$ij:1,
$aj:function(){return[W.aD]}}
W.aE.prototype={$iaE:1,
gj:function(a){return a.length}}
W.hc.prototype={
h:function(a,b){return a.getItem(b)},
H:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gao:function(a){var u=H.b([],[P.r])
this.H(a,new W.hd(u))
return u},
gj:function(a){return a.length},
$aZ:function(){return[P.r,P.r]}}
W.hd.prototype={
$2:function(a,b){return this.a.push(a)}}
W.al.prototype={$ial:1}
W.aG.prototype={$iaG:1}
W.am.prototype={$iam:1}
W.hi.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.am]},
$iw:1,
$aw:function(){return[W.am]},
$aq:function(){return[W.am]},
$ij:1,
$aj:function(){return[W.am]}}
W.hj.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.aG]},
$iw:1,
$aw:function(){return[W.aG]},
$aq:function(){return[W.aG]},
$ij:1,
$aj:function(){return[W.aG]}}
W.hr.prototype={
gj:function(a){return a.length}}
W.aH.prototype={$iaH:1}
W.bo.prototype={$ibo:1}
W.hu.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.aH]},
$iw:1,
$aw:function(){return[W.aH]},
$aq:function(){return[W.aH]},
$ij:1,
$aj:function(){return[W.aH]}}
W.hv.prototype={
gj:function(a){return a.length}}
W.b1.prototype={}
W.hK.prototype={
i:function(a){return String(a)}}
W.hW.prototype={
gj:function(a){return a.length}}
W.b4.prototype={
gfk:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.v("deltaY is not supported"))},
gfj:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.v("deltaX is not supported"))},
$ib4:1}
W.c1.prototype={
eU:function(a,b){return a.requestAnimationFrame(H.bt(b,1))},
dR:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.i4.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.F]},
$iw:1,
$aw:function(){return[W.F]},
$aq:function(){return[W.F]},
$ij:1,
$aj:function(){return[W.F]}}
W.dm.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
q:function(a,b){var u
if(b==null)return!1
u=J.T(b)
return!!u.$ia3&&a.left===u.gb8(b)&&a.top===u.gbd(b)&&a.width===u.gar(b)&&a.height===u.gan(b)},
gG:function(a){return W.jQ(C.b.gG(a.left),C.b.gG(a.top),C.b.gG(a.width),C.b.gG(a.height))},
gan:function(a){return a.height},
gar:function(a){return a.width}}
W.i7.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.au]},
$iw:1,
$aw:function(){return[W.au]},
$aq:function(){return[W.au]},
$ij:1,
$aj:function(){return[W.au]}}
W.dG.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.B]},
$iw:1,
$aw:function(){return[W.B]},
$aq:function(){return[W.B]},
$ij:1,
$aj:function(){return[W.B]}}
W.ii.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.aE]},
$iw:1,
$aw:function(){return[W.aE]},
$aq:function(){return[W.aE]},
$ij:1,
$aj:function(){return[W.aE]}}
W.ij.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.al]},
$iw:1,
$aw:function(){return[W.al]},
$aq:function(){return[W.al]},
$ij:1,
$aj:function(){return[W.al]}}
W.i5.prototype={}
W.i6.prototype={
$1:function(a){return this.a.$1(a)}}
W.H.prototype={
gN:function(a){return new W.cz(a,this.gj(a))}}
W.cz.prototype={
t:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.cj(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gF:function(a){return this.d}}
W.dl.prototype={}
W.dn.prototype={}
W.dp.prototype={}
W.dq.prototype={}
W.dr.prototype={}
W.du.prototype={}
W.dv.prototype={}
W.dw.prototype={}
W.dx.prototype={}
W.dC.prototype={}
W.dD.prototype={}
W.dE.prototype={}
W.dF.prototype={}
W.dH.prototype={}
W.dI.prototype={}
W.dL.prototype={}
W.dM.prototype={}
W.dN.prototype={}
W.c6.prototype={}
W.c7.prototype={}
W.dO.prototype={}
W.dP.prototype={}
W.dT.prototype={}
W.dW.prototype={}
W.dX.prototype={}
W.c9.prototype={}
W.ca.prototype={}
W.dZ.prototype={}
W.e_.prototype={}
W.e3.prototype={}
W.e4.prototype={}
W.e5.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.ec.prototype={}
P.e2.prototype={$iaS:1,
gcK:function(a){return this.a}}
P.iv.prototype={
$2:function(a,b){this.a[a]=b},
$S:8}
P.eS.prototype={
gaZ:function(){var u=this.b,t=H.jX(u,"q",0)
return new H.bM(new H.hX(u,new P.eT(),[t]),new P.eU(),[t,W.P])},
k:function(a,b,c){var u=this.gaZ()
J.jg(u.b.$1(J.iI(u.a,b)),c)},
l:function(a,b){this.b.a.appendChild(b)},
gj:function(a){return J.ba(this.gaZ().a)},
h:function(a,b){var u=this.gaZ()
return u.b.$1(J.iI(u.a,b))},
gN:function(a){var u=P.iX(this.gaZ(),!1,W.P)
return new J.X(u,u.length)},
$an:function(){return[W.P]},
$aq:function(){return[W.P]},
$aj:function(){return[W.P]}}
P.eT.prototype={
$1:function(a){return!!J.T(a).$iP}}
P.eU.prototype={
$1:function(a){return H.h(a,"$iP")}}
P.ic.prototype={
gbc:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.t(t)
return u+t},
gcF:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.t(t)
return u+t},
i:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
q:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.T(b)
if(!!u.$ia3){t=q.a
if(t==u.gb8(b)){s=q.b
if(s==u.gbd(b)){r=q.c
if(typeof t!=="number")return t.w()
if(typeof r!=="number")return H.t(r)
if(t+r===u.gbc(b)){t=q.d
if(typeof s!=="number")return s.w()
if(typeof t!=="number")return H.t(t)
u=s+t===u.gcF(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gG:function(a){var u=this,t=u.a,s=J.bx(t),r=u.b,q=J.bx(r),p=u.c
if(typeof t!=="number")return t.w()
if(typeof p!=="number")return H.t(p)
p=C.d.gG(t+p)
t=u.d
if(typeof r!=="number")return r.w()
if(typeof t!=="number")return H.t(t)
t=C.d.gG(r+t)
return P.lc(P.i9(P.i9(P.i9(P.i9(0,s),q),p),t))}}
P.a3.prototype={
gb8:function(a){return this.a},
gbd:function(a){return this.b},
gar:function(a){return this.c},
gan:function(a){return this.d}}
P.aX.prototype={$iaX:1}
P.f7.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){return this.h(a,b)},
$in:1,
$an:function(){return[P.aX]},
$aq:function(){return[P.aX]},
$ij:1,
$aj:function(){return[P.aX]}}
P.b_.prototype={$ib_:1}
P.fI.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){return this.h(a,b)},
$in:1,
$an:function(){return[P.b_]},
$aq:function(){return[P.b_]},
$ij:1,
$aj:function(){return[P.b_]}}
P.fP.prototype={
gj:function(a){return a.length}}
P.hf.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){return this.h(a,b)},
$in:1,
$an:function(){return[P.r]},
$aq:function(){return[P.r]},
$ij:1,
$aj:function(){return[P.r]}}
P.k.prototype={
gcH:function(a){return new P.eS(a,new W.i2(a))}}
P.b0.prototype={$ib0:1}
P.hw.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){return this.h(a,b)},
$in:1,
$an:function(){return[P.b0]},
$aq:function(){return[P.b0]},
$ij:1,
$aj:function(){return[P.b0]}}
P.dy.prototype={}
P.dz.prototype={}
P.dJ.prototype={}
P.dK.prototype={}
P.dU.prototype={}
P.dV.prototype={}
P.e0.prototype={}
P.e1.prototype={}
P.ek.prototype={
gj:function(a){return a.length}}
P.el.prototype={
h:function(a,b){return P.aJ(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aJ(u.value[1]))}},
gao:function(a){var u=H.b([],[P.r])
this.H(a,new P.em(u))
return u},
gj:function(a){return a.size},
$aZ:function(){return[P.r,null]}}
P.em.prototype={
$2:function(a,b){return this.a.push(a)}}
P.en.prototype={
gj:function(a){return a.length}}
P.bb.prototype={}
P.fJ.prototype={
gj:function(a){return a.length}}
P.dk.prototype={}
P.cV.prototype={
dd:function(a,b,c,d,e,f,g){var u,t=J.T(g)
if(!!t.$iaS)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.lT(g))
return}if(!!t.$ibH)t=!0
else t=!1
if(t){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.kp("Incorrect number or type of arguments"))}}
P.h9.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return P.aJ(a.item(b))},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){return this.h(a,b)},
$in:1,
$an:function(){return[[P.bL,,,]]},
$aq:function(){return[[P.bL,,,]]},
$ij:1,
$aj:function(){return[[P.bL,,,]]}}
P.dQ.prototype={}
P.dR.prototype={}
K.eg.prototype={
aD:function(a,b){return!0},
i:function(a){return"all"}}
K.cA.prototype={
aD:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)if(u[s].aD(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.m)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s}}
K.cJ.prototype={}
K.ay.prototype={
aD:function(a,b){return!this.dq(0,b)},
i:function(a){return"!["+this.c2(0)+"]"}}
K.fY.prototype={
dw:function(a){var u,t,s,r
if(a.a.length<=0)throw H.c(P.o("May not create a Set with zero characters."))
u=P.u
t=new H.G([u,P.b6])
for(s=new H.bK(a,a.gj(a));s.t();)t.k(0,s.d,!0)
r=P.iX(new H.bj(t,[u]),!0,u)
C.a.dm(r)
this.a=r},
aD:function(a,b){return C.a.M(this.a,b)},
i:function(a){return P.j_(this.a)}}
L.d0.prototype={
p:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new L.d9(this.a.J(0,b))
r.a=H.b([],[K.cJ])
r.c=!1
this.c.push(r)
return r},
fn:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
if(r.aD(0,a))return r}return},
i:function(a){return this.b},
cu:function(){var u,t,s,r,q,p=this,o="("+p.b+")",n=p.d
if(n!=null){n=n.b
o+=" => ["+n+"]"
u=p.a
if(u.c.M(0,n))o+=" (consume)"
for(n=p.d.c,n=new H.bj(n,[H.b7(n,0)]),n=n.gN(n);n.t();){t=n.d
o+="\n"
s=p.d.c.h(0,t)
t=o+("  -- "+H.e(t)+" => ["+H.e(s)+"]")
o=u.c.M(0,s)?t+" (consume)":t}}for(n=p.c,u=n.length,r=0;r<n.length;n.length===u||(0,H.m)(n),++r){q=n[r]
o=o+"\n"+("  -- "+q.i(0))}return o.charCodeAt(0)==0?o:o}}
L.d6.prototype={
i:function(a){var u=H.k3(this.b,"\n","\\n"),t=H.k3(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
L.d7.prototype={
i:function(a){return this.b}}
L.hs.prototype={
J:function(a,b){var u=this.a.h(0,b)
if(u==null){u=new L.d0(this,b)
u.c=H.b([],[L.d9])
this.a.k(0,b,u)}return u},
aU:function(a){var u,t=this.b.h(0,a)
if(t==null){t=new L.d7(a)
u=P.r
t.c=new H.G([u,u])
this.b.k(0,a,t)}return t},
df:function(a){return this.fX(a)},
fX:function(a){var u=this
return P.ll(function(){var t=a
var s=0,r=1,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
return function $async$df(b,a0){if(b===1){q=a0
s=r}while(true)switch(s){case 0:g=u.d
f=[P.u]
e=H.b([],f)
d=H.b([],f)
c=H.b([],f)
p=null,o=0,n=0,m=0
case 2:if(!!0){s=3
break}if(c.length!==0)l=C.a.fM(c,0)
else{if(!t.t()){s=3
break}l=t.d}d.push(l);++o
k=g.fn(l)
s=k==null?4:6
break
case 4:if(p==null){j=P.j_(d)
throw H.c(P.o("Untokenizable string [state: "+g.b+", index "+o+']: "'+j+'"'))}if(!!d.fixed$length)H.p(P.v("removeRange"))
P.iY(0,m,d.length)
d.splice(0,m-0)
C.a.b1(c,d)
d=H.b([],f)
e=H.b([],f)
g=u.d
s=!u.c.M(0,p.a)?7:8
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
if(g.d!=null){j=P.j_(e)
i=g.d
h=i.c.h(0,j)
p=new L.d6(h==null?i.b:h,j,o)
m=d.length
n=o}case 5:s=2
break
case 3:s=p!=null&&!u.c.M(0,p.a)?10:11
break
case 10:s=12
return p
case 12:case 11:return P.la()
case 1:return P.lb(q)}}},L.d6)},
i:function(a){var u,t=new P.aF(""),s=this.d
if(s!=null)t.a=s.cu()+"\n"
for(s=this.a,s=s.gfY(s),s=new H.cI(J.b9(s.a),s.b);s.t();){u=s.a
if(u!=this.d)t.a+=u.cu()+"\n"}s=t.a
return s.charCodeAt(0)==0?s:s}}
L.d9.prototype={
i:function(a){return this.b.b+": "+this.c2(0)}}
O.aq.prototype={
aX:function(a){this.a=H.b([],[a])
this.c=this.b=null},
c_:function(a,b,c){this.b=b
this.c=a},
aF:function(a,b){return this.c_(a,null,b)},
cn:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
c6:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gj:function(a){return this.a.length},
gN:function(a){var u=this.a
return new J.X(u,u.length)},
C:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
l:function(a,b){var u,t,s=this,r=[H.jX(s,"aq",0)]
if(s.cn(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.c6(t,H.b([b],r))}},
b1:function(a,b){var u,t
if(this.cn(b)){u=this.a
t=u.length
C.a.b1(u,b)
this.c6(t,b)}},
$ij:1}
O.bO.prototype={
gj:function(a){return this.a.length},
gm:function(){var u=this.b
return u==null?this.b=D.z():u},
at:function(){var u=this.b
if(u!=null)u.B(null)},
gV:function(a){var u=this.a
if(u.length>0)return C.a.gbP(u)
else return V.bk()},
bb:function(a){var u=this.a
if(a==null)u.push(V.bk())
else u.push(a)
this.at()},
ap:function(){var u=this.a
if(u.length>0){u.pop()
this.at()}}}
E.ep.prototype={}
E.as.prototype={
sbf:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gm().P(0,s.gd8())
u=s.c
if(u!=null)u.gm().l(0,s.gd8())
t=new D.x("shape",r,s.c)
t.b=!0
s.ba(t)}},
ab:function(a,b){var u
for(u=this.y.a,u=new J.X(u,u.length);u.t();)u.d.ab(0,b)},
a5:function(a){var u,t=this,s=a.dx
s.a.push(s.gV(s))
s.at()
a.bX(t.f)
s=a.dy
u=(s&&C.a).gbP(s)
if(u!=null&&t.d!=null)u.da(a,t)
for(s=t.y.a,s=new J.X(s,s.length);s.t();)s.d.a5(a)
a.bW()
a.dx.ap()},
ba:function(a){var u=this.z
if(u!=null)u.B(a)},
Y:function(){return this.ba(null)},
d9:function(a){this.e=null
this.ba(a)},
fC:function(){return this.d9(null)},
d7:function(a){this.ba(a)},
fz:function(){return this.d7(null)},
fw:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gd6(),s=[{func:1,ret:-1,args:[D.Q]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bD()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.Y()},
fB:function(a,b){var u,t
for(u=b.gN(b),t=this.gd6();u.t();)u.gF(u).gm().P(0,t)
this.Y()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.bc.prototype={
i:function(a){return this.b}}
E.bl.prototype={
i:function(a){return this.b}}
E.ds.prototype={}
E.fQ.prototype={
dv:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.a7(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.bO()
t=[V.av]
u.a=H.b([],t)
u.gm().l(0,new E.fR(s))
s.cy=u
u=new O.bO()
u.a=H.b([],t)
u.gm().l(0,new E.fS(s))
s.db=u
u=new O.bO()
u.a=H.b([],t)
u.gm().l(0,new E.fT(s))
s.dx=u
u=H.b([],[O.d2])
s.dy=u
u.push(null)
s.fr=new H.G([P.r,A.cW])},
gfL:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gV(s)
u=t.db
u=t.z=s.n(0,u.gV(u))
s=u}return s},
bX:function(a){var u=this.dy
u.push(a==null?(u&&C.a).gbP(u):a)},
bW:function(){var u=this.dy
if(u.length>1)u.pop()},
cA:function(a){var u=a.b
if(u.length===0)throw H.c(P.o("May not cache a shader with no name."))
if(this.fr.ff(0,u))throw H.c(P.o('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.k(0,u,a)}}
E.fR.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.fS.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.fT.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.d4.prototype={
c9:function(a){this.dc()},
c8:function(){return this.c9(null)},
gfo:function(){var u,t=this,s=Date.now(),r=C.d.X(P.jp(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.a7(s,!1)
return u/r},
cp:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.n()
if(typeof r!=="number")return H.t(r)
u=C.b.bN(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.n()
t=C.b.bN(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.jG(C.i,s.gfP())}},
dc:function(){if(!this.cx){this.cx=!0
var u=window
C.v.dR(u)
C.v.eU(u,W.jT(new E.hq(this),P.a4))}},
fN:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.cp()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.a7(r,!1)
s.y=P.jp(r-s.r.a).a*0.000001
r=s.cy
C.a.sj(r.a,0)
r.at()
r=s.db
C.a.sj(r.a,0)
r.at()
r=s.dx
C.a.sj(r.a,0)
r.at()
r=s.dy;(r&&C.a).sj(r,0)
s.dy.push(null)
o.a5(p.e)}}catch(q){u=H.ee(q)
t=H.j9(q)
P.jd("Error: "+H.e(u))
P.jd("Stack: "+H.e(t))
throw H.c(u)}}}
E.hq.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.fN()}}}
Z.dh.prototype={}
Z.co.prototype={
W:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ee(s)
t=P.o('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.e(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.di.prototype={}
Z.bA.prototype={
am:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
W:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].W(a)},
aW:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
a5:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.f(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.r],p=H.b([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)p.push(u[s].i(0))
r=H.b([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a5(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.p(p,", ")+"\nAttrs:   "+C.a.p(r,", ")}}
Z.bg.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.bU(this.c))+"'")+"]"}}
Z.aI.prototype={
gc0:function(a){var u=this.a,t=(u&$.ac().a)!==0?3:0
if((u&$.aN().a)!==0)t+=3
if((u&$.aM().a)!==0)t+=3
if((u&$.aO().a)!==0)t+=2
if((u&$.b8().a)!==0)t+=3
if((u&$.ch().a)!==0)t+=3
if((u&$.ci().a)!==0)t+=4
if((u&$.bw().a)!==0)++t
return(u&$.aL().a)!==0?t+4:t},
fc:function(a){var u,t=$.ac(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aN()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aM()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aO()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b8()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ch()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ci()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bw()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aL()
if((s&t.a)!==0)if(u===a)return t
return $.kk()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aI))return!1
return this.a===b.a},
i:function(a){var u=H.b([],[P.r]),t=this.a
if((t&$.ac().a)!==0)u.push("Pos")
if((t&$.aN().a)!==0)u.push("Norm")
if((t&$.aM().a)!==0)u.push("Binm")
if((t&$.aO().a)!==0)u.push("Txt2D")
if((t&$.b8().a)!==0)u.push("TxtCube")
if((t&$.ch().a)!==0)u.push("Clr3")
if((t&$.ci().a)!==0)u.push("Clr4")
if((t&$.bw().a)!==0)u.push("Weight")
if((t&$.aL().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.a.p(u,"|")}}
D.es.prototype={}
D.bD.prototype={
l:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.Q]}]):u).push(b)},
P:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.a.M(s,b)
if(s===!0){s=t.a
u=(s&&C.a).P(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.a.M(s,b)
if(s===!0){s=t.b
u=(s&&C.a).P(s,b)||u}return u},
B:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.Q()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.H(P.iX(u,!0,{func:1,ret:-1,args:[D.Q]}),new D.eO(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.Q]}])
C.a.H(u,new D.eP(q))}return!0},
cO:function(){return this.B(null)},
aq:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.B(u)}}}}
D.eO.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.eP.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.Q.prototype={}
D.aT.prototype={}
D.aU.prototype={}
D.x.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cp.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cp))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.cF.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cF))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.f6.prototype={
fH:function(a){this.c=a.b
this.d.l(0,a.a)
return!1},
fD:function(a){this.c=a.b
this.d.P(0,a.a)
return!1}}
X.cH.prototype={}
X.fc.prototype={
aK:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.n()
u=b.b
t=q.ch
if(typeof u!=="number")return u.n()
s=new V.W(o.a+n*m,o.b+u*t)
t=q.a.gaz()
r=new X.ax(a,V.aA(),q.x,t,s)
r.b=!0
q.z=new P.a7(p,!1)
q.x=s
return r},
bV:function(a,b){this.r=a.a
return!1},
aR:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.di()
if(typeof u!=="number")return u.ac()
this.r=(u&~t)>>>0
return!1},
aQ:function(a,b){var u=this.d
if(u==null)return!1
u.B(this.aK(a,b))
return!0},
fI:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaz()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.n()
q=a.b
p=o.cy
if(typeof q!=="number")return q.n()
t=new X.bP(new V.C(s*r,q*p),u,t)
t.b=!0
n.B(t)
return!0},
ep:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.cH(c,r.a.gaz(),b)
s.b=!0
t.B(s)
r.y=new P.a7(u,!1)
r.x=V.aA()}}
X.a8.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.a8))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.ax.prototype={}
X.fA.prototype={
bm:function(a,b,c){var u=this,t=new P.a7(Date.now(),!1),s=u.a.gaz(),r=new X.ax(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
bV:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.B(this.bm(a,b,!0))
return!0},
aR:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.di()
if(typeof t!=="number")return t.ac()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.B(u.bm(a,b,!0))
return!0},
aQ:function(a,b){var u=this.d
if(u==null)return!1
u.B(this.bm(a,b,!1))
return!0},
fJ:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaz()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.n()
r=a.b
q=p.ch
if(typeof r!=="number")return r.n()
u=new X.bP(new V.C(t*s,r*q),u,b)
u.b=!0
o.B(u)
return!0},
gcN:function(){var u=this.b
return u==null?this.b=D.z():u},
gbe:function(){var u=this.c
return u==null?this.c=D.z():u},
gd5:function(){var u=this.d
return u==null?this.d=D.z():u}}
X.bP.prototype={}
X.fO.prototype={}
X.d8.prototype={}
X.ht.prototype={
aK:function(a,b){var u=this,t=new P.a7(Date.now(),!1),s=a.length>0?a[0]:V.aA(),r=u.a.gaz(),q=new X.d8(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
fG:function(a){var u=this.b
if(u==null)return!1
u.B(this.aK(a,!0))
return!0},
fE:function(a){var u=this.c
if(u==null)return!1
u.B(this.aK(a,!0))
return!0},
fF:function(a){var u=this.d
if(u==null)return!1
u.B(this.aK(a,!1))
return!0}}
X.dc.prototype={
gaz:function(){var u=this.a,t=C.f.gcI(u).c
t.toString
u=C.f.gcI(u).d
u.toString
return V.jC(0,0,t,u)},
cf:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.cF(u,new X.a8(t,a.altKey,a.shiftKey))},
ay:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.a8(t,a.altKey,a.shiftKey)},
by:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.a8(t,a.altKey,a.shiftKey)},
ak:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.E()
u=t.top
if(typeof r!=="number")return r.E()
return new V.W(s-q,r-u)},
aL:function(a){return new V.C(a.movementX,a.movementY)},
bw:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.W])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
q=C.b.ae(r.pageX)
C.b.ae(r.pageY)
p=o.left
C.b.ae(r.pageX)
n.push(new V.W(q-p,C.b.ae(r.pageY)-o.top))}return n},
ai:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cp(u,new X.a8(t,a.altKey,a.shiftKey))},
bn:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.E()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.E()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
ej:function(a){this.f=!0},
e7:function(a){this.f=!1},
ed:function(a){if(this.f&&this.bn(a))a.preventDefault()},
en:function(a){var u
if(!this.f)return
u=this.cf(a)
this.b.fH(u)},
el:function(a){var u
if(!this.f)return
u=this.cf(a)
this.b.fD(u)},
er:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.ay(a)
if(r.x){u=r.ai(a)
t=r.aL(a)
if(r.d.bV(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.ai(a)
s=r.ak(a)
if(r.c.bV(u,s))a.preventDefault()},
ew:function(a){var u,t,s,r=this
r.ay(a)
u=r.ai(a)
if(r.x){t=r.aL(a)
if(r.d.aR(u,t))a.preventDefault()
return}if(r.r)return
s=r.ak(a)
if(r.c.aR(u,s))a.preventDefault()},
eh:function(a){var u,t,s,r=this
if(!r.bn(a)){r.ay(a)
u=r.ai(a)
if(r.x){t=r.aL(a)
if(r.d.aR(u,t))a.preventDefault()
return}if(r.r)return
s=r.ak(a)
if(r.c.aR(u,s))a.preventDefault()}},
eu:function(a){var u,t,s,r=this
r.ay(a)
u=r.ai(a)
if(r.x){t=r.aL(a)
if(r.d.aQ(u,t))a.preventDefault()
return}if(r.r)return
s=r.ak(a)
if(r.c.aQ(u,s))a.preventDefault()},
ef:function(a){var u,t,s,r=this
if(!r.bn(a)){r.ay(a)
u=r.ai(a)
if(r.x){t=r.aL(a)
if(r.d.aQ(u,t))a.preventDefault()
return}if(r.r)return
s=r.ak(a)
if(r.c.aQ(u,s))a.preventDefault()}},
ey:function(a){var u,t,s=this
s.ay(a)
u=new V.C((a&&C.u).gfj(a),C.u.gfk(a)).n(0,s.Q)
if(s.x){if(s.d.fI(u))a.preventDefault()
return}if(s.r)return
t=s.ak(a)
if(s.c.fJ(u,t))a.preventDefault()},
eA:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ai(s.y)
t=s.ak(s.y)
s.d.ep(u,t,r)}},
eQ:function(a){var u,t=this
t.a.focus()
t.f=!0
t.by(a)
u=t.bw(a)
if(t.e.fG(u))a.preventDefault()},
eM:function(a){var u
this.by(a)
u=this.bw(a)
if(this.e.fE(u))a.preventDefault()},
eO:function(a){var u
this.by(a)
u=this.bw(a)
if(this.e.fF(u))a.preventDefault()}}
D.eo.prototype={$iY:1}
D.eE.prototype={$iY:1}
D.Y.prototype={}
D.cG.prototype={
ca:function(a){var u=this.y
if(u!=null)u.B(a)},
cm:function(a){var u=this.z
if(u!=null)u.B(a)},
eo:function(){return this.cm(null)},
eC:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.m)(a),++t){s=a[t]
if(s==null||this.dM(s))return!1}return!0},
e1:function(a,b){var u,t,s,r
for(u=b.length,t=this.gcl(),s=0;s<b.length;b.length===u||(0,H.m)(b),++s){r=b[s]
r.gm().l(0,t)}u=new D.aT()
u.b=!0
this.ca(u)},
eG:function(a,b){var u,t,s
for(u=b.gN(b),t=this.gcl();u.t();){s=u.gF(u)
C.a.P(this.e,s)
s.gm().P(0,t)}u=new D.aU()
u.b=!0
this.ca(u)},
dM:function(a){var u=C.a.M(this.e,a)
return u},
$aj:function(){return[D.Y]},
$aaq:function(){return[D.Y]}}
D.fN.prototype={$iY:1}
D.h8.prototype={$iY:1}
V.U.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.U))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"]"}}
V.ar.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ar))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.E(u.a,3,0)+", "+V.E(u.b,3,0)+", "+V.E(u.c,3,0)+", "+V.E(u.d,3,0)+"]"}}
V.eN.prototype={}
V.cL.prototype={
a0:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.J])
return t},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cL))return!1
u=b.a
t=$.y().a
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
V.av.prototype={
a0:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.J])
return t},
bO:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.y().a)return V.bk()
u=1/b1
t=-n
s=-a0
return V.ah((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
n:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.ah(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
aV:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.O(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.av))return!1
u=b.a
t=$.y().a
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
i:function(a){return this.I()},
v:function(a){var u,t,s,r,q,p=this,o=[P.J],n=V.bv(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.bv(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.bv(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.bv(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
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
I:function(){return this.v("")}}
V.W.prototype={
E:function(a,b){return new V.W(this.a-b.a,this.b-b.b)},
q:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+"]"}}
V.O.prototype={
E:function(a,b){return new V.O(this.a-b.a,this.b-b.b,this.c-b.c)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.O))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"]"}}
V.aB.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aB))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.E(u.a,3,0)+", "+V.E(u.b,3,0)+", "+V.E(u.c,3,0)+", "+V.E(u.d,3,0)+"]"}}
V.cU.prototype={
ga4:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cU))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.E(u.a,3,0)+", "+V.E(u.b,3,0)+", "+V.E(u.c,3,0)+", "+V.E(u.d,3,0)+"]"}}
V.C.prototype={
bQ:function(a){return Math.sqrt(this.A(this))},
A:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.t(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.t(t)
return s*r+u*t},
n:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.n()
if(typeof b!=="number")return H.t(b)
u=this.b
if(typeof u!=="number")return u.n()
return new V.C(t*b,u*b)},
u:function(a,b){var u,t
if(Math.abs(b-0)<$.y().a){u=$.jK
return u==null?$.jK=new V.C(0,0):u}u=this.a
if(typeof u!=="number")return u.u()
t=this.b
if(typeof t!=="number")return t.u()
return new V.C(u/b,t/b)},
q:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.C))return!1
u=b.a
t=this.a
s=$.y()
s.toString
if(typeof u!=="number")return u.E()
if(typeof t!=="number")return H.t(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.E()
if(typeof t!=="number")return H.t(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+"]"}}
V.D.prototype={
bQ:function(a){return Math.sqrt(this.A(this))},
A:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bR:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.D(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aO:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.D(u*t-s*r,s*q-p*t,p*r-u*q)},
w:function(a,b){return new V.D(this.a+b.a,this.b+b.b,this.c+b.c)},
L:function(a){return new V.D(-this.a,-this.b,-this.c)},
u:function(a,b){if(Math.abs(b-0)<$.y().a)return V.dg()
return new V.D(this.a/b,this.b/b,this.c/b)},
d4:function(){var u=$.y().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.D))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"]"}}
U.ev.prototype={
bg:function(a){var u=V.mh(a,this.c,this.b)
return u},
gm:function(){var u=this.y
return u==null?this.y=D.z():u},
K:function(a){var u=this.y
if(u!=null)u.B(a)},
sbY:function(a,b){},
sbS:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.y().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bg(u)}s=new D.x("maximumLocation",s,t.b)
s.b=!0
t.K(s)}},
sbU:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.y().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bg(u)}s=new D.x("minimumLocation",s,t.c)
s.b=!0
t.K(s)}},
sa3:function(a,b){var u,t=this
b=t.bg(b)
u=t.d
if(!(Math.abs(u-b)<$.y().a)){t.d=b
u=new D.x("location",u,b)
u.b=!0
t.K(u)}},
sbT:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.y().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.x("maximumVelocity",r,a)
r.b=!0
s.K(r)}},
sO:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.y().a)){u.f=a
t=new D.x("velocity",t,a)
t.b=!0
u.K(t)}},
sbE:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.y().a)){this.x=a
u=new D.x("dampening",u,a)
u.b=!0
this.K(u)}},
ab:function(a,b){var u,t,s,r=this,q=r.f,p=$.y().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa3(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.y().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sO(u)}}}
U.cr.prototype={
gm:function(){var u=this.b
return u==null?this.b=D.z():u},
aE:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cr))return!1
return J.L(this.a,b.a)},
i:function(a){return"Constant: "+this.a.v("          ")}}
U.bF.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.z():u},
K:function(a){var u=this.e
if(u!=null)u.B(a)},
a_:function(){return this.K(null)},
e_:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gax(),s=[{func:1,ret:-1,args:[D.Q]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.gm()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.aT()
u.b=!0
this.K(u)},
eE:function(a,b){var u,t
for(u=b.gN(b),t=this.gax();u.t();)u.gF(u).gm().P(0,t)
u=new D.aU()
u.b=!0
this.K(u)},
aE:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.a1()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.X(r,r.length),u=null;r.t();){q=r.d
if(q!=null){t=q.aE(0,b,c)
if(t!=null)u=u==null?t:t.n(0,u)}}s.f=u==null?V.bk():u
r=s.e
if(r!=null)r.aq(0)}return s.f},
q:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bF))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.f(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.f(r,t)
if(!J.L(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$aj:function(){return[U.a2]},
$aaq:function(){return[U.a2]},
$ia2:1}
U.a2.prototype={}
U.dd.prototype={
gm:function(){var u=this.cy
return u==null?this.cy=D.z():u},
K:function(a){var u=this.cy
if(u!=null)u.B(a)},
a_:function(){return this.K(null)},
aM:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gcN().l(0,u.gbo())
u.a.c.gd5().l(0,u.gbq())
u.a.c.gbe().l(0,u.gbs())
return!0},
bp:function(a){var u=this
if(!J.L(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
br:function(a){var u,t,s,r,q,p,o,n=this
H.h(a,"$iax")
if(!n.y)return
if(n.x){u=a.d.E(0,a.y)
u=new V.C(u.a,u.b)
u=u.A(u)
t=n.r
if(typeof t!=="number")return H.t(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.E(0,a.y)
u=new V.C(t.a,t.b).n(0,2).u(0,u.ga4())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.n()
s=n.e
if(typeof s!=="number")return H.t(s)
t.sO(u*10*s)}else{u=a.c
t=a.d
s=t.E(0,a.y)
r=new V.C(s.a,s.b).n(0,2).u(0,u.ga4())
s=n.b
q=r.a
if(typeof q!=="number")return q.L()
p=n.e
if(typeof p!=="number")return H.t(p)
o=n.z
if(typeof o!=="number")return H.t(o)
s.sa3(0,-q*p+o)
n.b.sO(0)
t=t.E(0,a.z)
n.Q=new V.C(t.a,t.b).n(0,2).u(0,u.ga4())}n.a_()},
bt:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.A(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.n()
s=r.e
if(typeof s!=="number")return H.t(s)
u.sO(t*10*s)
r.a_()}},
aE:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.a1()
if(q<p){r.ch=p
u=b.y
r.b.ab(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.ah(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$ia2:1}
U.de.prototype={
gm:function(){var u=this.fx
return u==null?this.fx=D.z():u},
K:function(a){var u=this.fx
if(u!=null)u.B(a)},
a_:function(){return this.K(null)},
aM:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gcN().l(0,s.gbo())
s.a.c.gd5().l(0,s.gbq())
s.a.c.gbe().l(0,s.gbs())
u=s.a.d
t=u.f
u=t==null?u.f=D.z():t
u.l(0,s.gdT())
u=s.a.d
t=u.d
u=t==null?u.d=D.z():t
u.l(0,s.gdV())
u=s.a.e
t=u.b
u=t==null?u.b=D.z():t
u.l(0,s.gf7())
u=s.a.e
t=u.d
u=t==null?u.d=D.z():t
u.l(0,s.gf5())
u=s.a.e
t=u.c
u=t==null?u.c=D.z():t
u.l(0,s.gf3())
return!0},
ah:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.L()
u=-u}if(this.r){if(typeof t!=="number")return t.L()
t=-t}return new V.C(u,t)},
bp:function(a){var u=this
H.h(a,"$iax")
if(!J.L(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
br:function(a){var u,t,s,r,q,p,o,n=this
H.h(a,"$iax")
if(!n.cx)return
if(n.ch){u=a.d.E(0,a.y)
u=new V.C(u.a,u.b)
u=u.A(u)
t=n.Q
if(typeof t!=="number")return H.t(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.E(0,a.y)
u=n.ah(new V.C(t.a,t.b).n(0,2).u(0,u.ga4()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.L()
s=n.y
if(typeof s!=="number")return H.t(s)
t.sO(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.L()
t=n.x
if(typeof t!=="number")return H.t(t)
s.sO(-u*10*t)}else{u=a.c
t=a.d
s=t.E(0,a.y)
r=n.ah(new V.C(s.a,s.b).n(0,2).u(0,u.ga4()))
s=n.c
q=r.a
if(typeof q!=="number")return q.L()
p=n.y
if(typeof p!=="number")return H.t(p)
o=n.cy
if(typeof o!=="number")return H.t(o)
s.sa3(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.L()
q=n.x
if(typeof q!=="number")return H.t(q)
s=n.db
if(typeof s!=="number")return H.t(s)
o.sa3(0,-p*q+s)
n.b.sO(0)
n.c.sO(0)
t=t.E(0,a.z)
n.dx=n.ah(new V.C(t.a,t.b).n(0,2).u(0,u.ga4()))}n.a_()},
bt:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.A(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.L()
s=r.y
if(typeof s!=="number")return H.t(s)
u.sO(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.L()
u=r.x
if(typeof u!=="number")return H.t(u)
s.sO(-t*10*u)
r.a_()}},
dU:function(a){var u=this
if(H.h(a,"$icH").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
dW:function(a){var u,t,s,r,q,p,o,n=this
H.h(a,"$iax")
if(!J.L(n.d,a.x.b))return
u=a.c
t=a.d
s=t.E(0,a.y)
r=n.ah(new V.C(s.a,s.b).n(0,2).u(0,u.ga4()))
s=n.c
q=r.a
if(typeof q!=="number")return q.L()
p=n.y
if(typeof p!=="number")return H.t(p)
o=n.cy
if(typeof o!=="number")return H.t(o)
s.sa3(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.L()
q=n.x
if(typeof q!=="number")return H.t(q)
s=n.db
if(typeof s!=="number")return H.t(s)
o.sa3(0,-p*q+s)
n.b.sO(0)
n.c.sO(0)
t=t.E(0,a.z)
n.dx=n.ah(new V.C(t.a,t.b).n(0,2).u(0,u.ga4()))
n.a_()},
f8:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
f6:function(a){var u,t,s,r,q,p,o,n=this
H.h(a,"$id8")
if(!n.cx)return
if(n.ch){u=a.d.E(0,a.y)
u=new V.C(u.a,u.b)
u=u.A(u)
t=n.Q
if(typeof t!=="number")return H.t(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.E(0,a.y)
u=n.ah(new V.C(t.a,t.b).n(0,2).u(0,u.ga4()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.L()
s=n.y
if(typeof s!=="number")return H.t(s)
t.sO(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.L()
t=n.x
if(typeof t!=="number")return H.t(t)
s.sO(-u*10*t)}else{u=a.c
t=a.d
s=t.E(0,a.y)
r=n.ah(new V.C(s.a,s.b).n(0,2).u(0,u.ga4()))
s=n.c
q=r.a
if(typeof q!=="number")return q.L()
p=n.y
if(typeof p!=="number")return H.t(p)
o=n.cy
if(typeof o!=="number")return H.t(o)
s.sa3(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.L()
q=n.x
if(typeof q!=="number")return H.t(q)
s=n.db
if(typeof s!=="number")return H.t(s)
o.sa3(0,-p*q+s)
n.b.sO(0)
n.c.sO(0)
t=t.E(0,a.z)
n.dx=n.ah(new V.C(t.a,t.b).n(0,2).u(0,u.ga4()))}n.a_()},
f4:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.A(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.L()
s=r.y
if(typeof s!=="number")return H.t(s)
u.sO(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.L()
u=r.x
if(typeof u!=="number")return H.t(u)
s.sO(-t*10*u)
r.a_()}},
aE:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.a1()
if(q<p){r.dy=p
u=b.y
r.c.ab(0,u)
r.b.ab(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.ah(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.n(0,V.ah(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$ia2:1}
U.df.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.z():u},
K:function(a){var u=this.r
if(u!=null)u.B(a)},
aM:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.z():t
t=r.gdX()
u.l(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.z():s).l(0,t)
return!0},
dY:function(a){var u,t,s,r,q=this
if(!J.L(q.b,q.a.b.c))return
H.h(a,"$ibP")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.n()
r=u+t*s
if(u!==r){q.d=r
u=new D.x("zoom",u,r)
u.b=!0
q.K(u)}},
aE:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.ah(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$ia2:1}
M.cq.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.z():u},
T:function(a){var u=this.r
if(u!=null)u.B(a)},
aI:function(){return this.T(null)},
eI:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gS(),s=[{func:1,ret:-1,args:[D.Q]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.gm()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.aT()
u.b=!0
this.T(u)},
eK:function(a,b){var u,t
for(u=b.gN(b),t=this.gS();u.t();)u.gF(u).gm().P(0,t)
u=new D.aU()
u.b=!0
this.T(u)},
a5:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.X(u,u.length);u.t();){t=u.d
if(t!=null)t.a5(a)}s.f=!1},
$aj:function(){return[M.aa]},
$aaq:function(){return[M.aa]},
$iaa:1}
M.cs.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.z():u},
T:function(a){var u=this.r
if(u!=null)u.B(a)},
aI:function(){return this.T(null)},
saN:function(a){var u,t,s=this
if(a==null)a=new X.eZ()
u=s.b
if(u!==a){if(u!=null)u.gm().P(0,s.gS())
t=s.b
s.b=a
a.gm().l(0,s.gS())
u=new D.x("camera",t,s.b)
u.b=!0
s.T(u)}},
saS:function(a,b){var u,t,s=this
if(b==null)b=X.iR(null)
u=s.c
if(u!==b){if(u!=null)u.gm().P(0,s.gS())
t=s.c
s.c=b
b.gm().l(0,s.gS())
u=new D.x("target",t,s.c)
u.b=!0
s.T(u)}},
saT:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gm().P(0,t.gS())
u=t.d
t.d=a
if(a!=null)a.gm().l(0,t.gS())
s=new D.x("technique",u,t.d)
s.b=!0
t.T(s)}},
a5:function(a){var u=this
a.bX(u.d)
u.c.W(a)
u.b.W(a)
u.e.ab(0,a)
u.e.a5(a)
u.b.aW(a)
u.c.toString
a.bW()},
$iaa:1}
M.cx.prototype={
T:function(a){var u=this.y
if(u!=null)u.B(a)},
aI:function(){return this.T(null)},
e9:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gS(),s=[{func:1,ret:-1,args:[D.Q]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bD()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.aT()
u.b=!0
this.T(u)},
eb:function(a,b){var u,t
for(u=b.gN(b),t=this.gS();u.t();)u.gF(u).gm().P(0,t)
u=new D.aU()
u.b=!0
this.T(u)},
saN:function(a){var u,t,s=this
if(a==null)a=X.jx(null)
u=s.b
if(u!==a){if(u!=null)u.gm().P(0,s.gS())
t=s.b
s.b=a
a.gm().l(0,s.gS())
u=new D.x("camera",t,s.b)
u.b=!0
s.T(u)}},
saS:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gm().P(0,t.gS())
u=t.c
t.c=b
b.gm().l(0,t.gS())
s=new D.x("target",u,t.c)
s.b=!0
t.T(s)}},
saT:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gm().P(0,t.gS())
u=t.d
t.d=a
if(a!=null)a.gm().l(0,t.gS())
s=new D.x("technique",u,t.d)
s.b=!0
t.T(s)}},
gm:function(){var u=this.y
return u==null?this.y=D.z():u},
a5:function(a){var u,t=this
a.bX(t.d)
t.c.W(a)
t.b.W(a)
u=t.d
if(u!=null)u.ab(0,a)
for(u=t.e.a,u=new J.X(u,u.length);u.t();)u.d.ab(0,a)
for(u=t.e.a,u=new J.X(u,u.length);u.t();)u.d.a5(a)
t.b.toString
a.cy.ap()
a.db.ap()
t.c.toString
a.bW()},
$iaa:1}
M.aa.prototype={}
A.cl.prototype={}
A.ej.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
fm:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
cM:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.V.prototype={
gaf:function(a){var u=this.a?1:0,t=this.b?2:0
return u|t|0},
i:function(a){var u=this.a?1:0,t=this.b?2:0
return""+(u|t|0)},
q:function(a,b){if(b==null)return!1
if(!(b instanceof A.V))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.ff.prototype={
du:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.aF("")
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
A.lA(c0,u)
A.lC(c0,u)
A.lB(c0,u)
A.lE(c0,u)
A.lF(c0,u)
A.lD(c0,u)
A.lG(c0,u)
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
b5.d2(0,s.charCodeAt(0)==0?s:s,A.lz(b5.z))
b5.Q=b5.x.h(0,"posAttr")
b5.cx=b5.x.h(0,"normAttr")
b5.ch=b5.x.h(0,"binmAttr")
b5.cy=b5.x.h(0,"txt2DAttr")
b5.db=b5.x.h(0,"txtCubeAttr")
b5.dx=b5.x.h(0,"bendAttr")
if(c0.dy)b5.id=H.h(b5.y.D(0,"invViewMat"),"$ia0")
if(t)b5.dy=H.h(b5.y.D(0,"objMat"),"$ia0")
if(r)b5.fr=H.h(b5.y.D(0,"viewObjMat"),"$ia0")
b5.fy=H.h(b5.y.D(0,"projViewObjMat"),"$ia0")
if(c0.go)b5.fx=H.h(b5.y.D(0,"viewMat"),"$ia0")
if(c0.x1)b5.k1=H.h(b5.y.D(0,"txt2DMat"),"$ibY")
if(c0.x2)b5.k2=H.h(b5.y.D(0,"txtCubeMat"),"$ia0")
if(c0.y1)b5.k3=H.h(b5.y.D(0,"colorMat"),"$ia0")
b5.r1=H.b([],[A.a0])
t=c0.aC
if(t>0){b5.k4=b5.y.D(0,"bendMatCount")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.h(0,q)
if(m==null)H.p(P.o(b7+q+b8))
s.push(H.h(m,"$ia0"))}}t=c0.a
if(t.a)b5.r2=H.h(b5.y.D(0,"emissionClr"),"$iA")
if(t.b)b5.rx=H.h(b5.y.D(0,"emissionTxt"),"$iS")
t=c0.b
if(t.a)b5.x1=H.h(b5.y.D(0,"ambientClr"),"$iA")
if(t.b)b5.x2=H.h(b5.y.D(0,"ambientTxt"),"$iS")
t=c0.c
if(t.a)b5.y2=H.h(b5.y.D(0,"diffuseClr"),"$iA")
if(t.b)b5.aC=H.h(b5.y.D(0,"diffuseTxt"),"$iS")
t=c0.d
if(t.a)b5.b6=H.h(b5.y.D(0,"invDiffuseClr"),"$iA")
if(t.b)b5.cQ=H.h(b5.y.D(0,"invDiffuseTxt"),"$iS")
t=c0.e
s=t.a
if(s||t.b||!1){b5.cT=H.h(b5.y.D(0,"shininess"),"$iK")
if(s)b5.cR=H.h(b5.y.D(0,"specularClr"),"$iA")
if(t.b)b5.cS=H.h(b5.y.D(0,"specularTxt"),"$iS")}if(c0.f.b)b5.cU=H.h(b5.y.D(0,"bumpTxt"),"$iS")
if(c0.db){b5.cV=H.h(b5.y.D(0,"envSampler"),"$ib3")
t=c0.r
if(t.a)b5.cW=H.h(b5.y.D(0,"reflectClr"),"$iA")
if(t.b)b5.cX=H.h(b5.y.D(0,"reflectTxt"),"$iS")
t=c0.x
s=t.a
if(s||t.b||!1){b5.cY=H.h(b5.y.D(0,"refraction"),"$iK")
if(s)b5.cZ=H.h(b5.y.D(0,"refractClr"),"$iA")
if(t.b)b5.d_=H.h(b5.y.D(0,"refractTxt"),"$iS")}}t=c0.y
if(t.a)b5.d0=H.h(b5.y.D(0,"alpha"),"$iK")
if(t.b)b5.d1=H.h(b5.y.D(0,"alphaTxt"),"$iS")
if(c0.k1){t=c0.z
s=t.length
if(s!==0){r=P.u
b5.bF=new H.G([r,A.b2])
b5.bG=new H.G([r,[P.aY,A.bW]])
for(r=[A.bW],l=0;l<t.length;t.length===s||(0,H.m)(t),++l){k=t[l]
j=k.a
i="barLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].startPnt"
m=p.h(0,o)
if(m==null)H.p(P.o(b7+o+b8))
H.h(m,"$iA")
p=b5.y
o=i+"s["+n+"].endPnt"
g=p.h(0,o)
if(g==null)H.p(P.o(b7+o+b8))
H.h(g,"$iA")
p=b5.y
o=i+"s["+n+"].color"
f=p.h(0,o)
if(f==null)H.p(P.o(b7+o+b8))
H.h(f,"$iA")
if(typeof j!=="number")return j.ac()
if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
e=p.h(0,o)
if(e==null)H.p(P.o(b7+o+b8))
H.h(e,"$iK")
p=b5.y
o=i+"s["+n+"].att1"
d=p.h(0,o)
if(d==null)H.p(P.o(b7+o+b8))
H.h(d,"$iK")
p=b5.y
o=i+"s["+n+"].att2"
c=p.h(0,o)
if(c==null)H.p(P.o(b7+o+b8))
H.h(c,"$iK")
b=c
a=d
a0=e}else{b=b6
a=b
a0=a}h.push(new A.bW(m,g,f,a0,a,b))}b5.bG.k(0,j,h)
q=b5.bF
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.p(P.o(b7+o+b8))
q.k(0,j,m)}}t=c0.Q
s=t.length
if(s!==0){r=P.u
b5.bH=new H.G([r,A.b2])
b5.bI=new H.G([r,[P.aY,A.bX]])
for(r=[A.bX],l=0;l<t.length;t.length===s||(0,H.m)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.ac()
p=(j&1)!==0
if(p){o=b5.y
a1=i+"s["+n+"].objUp"
m=o.h(0,a1)
if(m==null)H.p(P.o(b7+a1+b8))
H.h(m,"$iA")
o=b5.y
a1=i+"s["+n+"].objRight"
g=o.h(0,a1)
if(g==null)H.p(P.o(b7+a1+b8))
H.h(g,"$iA")
o=b5.y
a1=i+"s["+n+"].objDir"
f=o.h(0,a1)
if(f==null)H.p(P.o(b7+a1+b8))
H.h(f,"$iA")
a2=f
a3=g
a4=m}else{a2=b6
a3=a2
a4=a3}o=b5.y
a1=i+"s["+n+"].viewDir"
m=o.h(0,a1)
if(m==null)H.p(P.o(b7+a1+b8))
H.h(m,"$iA")
o=b5.y
a1=i+"s["+n+"].color"
g=o.h(0,a1)
if(g==null)H.p(P.o(b7+a1+b8))
H.h(g,"$iA")
if(p){p=b5.y
o=i+"sTexture2D"+n
f=p.h(0,o)
if(f==null)H.p(P.o(b7+o+b8))
H.h(f,"$iS")
a5=f}else a5=b6
h.push(new A.bX(a4,a3,a2,m,g,a5))}b5.bI.k(0,j,h)
q=b5.bH
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.p(P.o(b7+o+b8))
q.k(0,j,m)}}t=c0.ch
s=t.length
if(s!==0){r=P.u
b5.bJ=new H.G([r,A.b2])
b5.bK=new H.G([r,[P.aY,A.bZ]])
for(r=[A.bZ],l=0;l<t.length;t.length===s||(0,H.m)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.h(0,o)
if(m==null)H.p(P.o(b7+o+b8))
H.h(m,"$iA")
p=b5.y
o=i+"s["+n+"].viewPnt"
g=p.h(0,o)
if(g==null)H.p(P.o(b7+o+b8))
H.h(g,"$iA")
p=b5.y
o=i+"s["+n+"].color"
f=p.h(0,o)
if(f==null)H.p(P.o(b7+o+b8))
H.h(f,"$iA")
if(typeof j!=="number")return j.ac()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
e=p.h(0,o)
if(e==null)H.p(P.o(b7+o+b8))
H.h(e,"$ibY")
a6=e}else a6=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
e=p.h(0,o)
if(e==null)H.p(P.o(b7+o+b8))
H.h(e,"$ib3")
a5=e}else a5=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
e=p.h(0,o)
if(e==null)H.p(P.o(b7+o+b8))
H.h(e,"$ib3")
p=b5.y
o=i+"s["+n+"].shadowAdj"
d=p.h(0,o)
if(d==null)H.p(P.o(b7+o+b8))
H.h(d,"$ibV")
a7=e
a8=d}else{a7=b6
a8=a7}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
e=p.h(0,o)
if(e==null)H.p(P.o(b7+o+b8))
H.h(e,"$iK")
p=b5.y
o=i+"s["+n+"].att1"
d=p.h(0,o)
if(d==null)H.p(P.o(b7+o+b8))
H.h(d,"$iK")
p=b5.y
o=i+"s["+n+"].att2"
c=p.h(0,o)
if(c==null)H.p(P.o(b7+o+b8))
H.h(c,"$iK")
b=c
a=d
a0=e}else{b=b6
a=b
a0=a}h.push(new A.bZ(m,g,a6,f,a5,a7,a8,a0,a,b))}b5.bK.k(0,j,h)
q=b5.bJ
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.p(P.o(b7+o+b8))
q.k(0,j,m)}}t=c0.cx
s=t.length
if(s!==0){r=P.u
b5.bL=new H.G([r,A.b2])
b5.bM=new H.G([r,[P.aY,A.c_]])
for(r=[A.c_],l=0;l<t.length;t.length===s||(0,H.m)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.h(0,o)
if(m==null)H.p(P.o(b7+o+b8))
H.h(m,"$iA")
p=b5.y
o=i+"s["+n+"].objDir"
g=p.h(0,o)
if(g==null)H.p(P.o(b7+o+b8))
H.h(g,"$iA")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.h(0,o)
if(f==null)H.p(P.o(b7+o+b8))
H.h(f,"$iA")
p=b5.y
o=i+"s["+n+"].color"
e=p.h(0,o)
if(e==null)H.p(P.o(b7+o+b8))
H.h(e,"$iA")
if(typeof j!=="number")return j.ac()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
d=p.h(0,o)
if(d==null)H.p(P.o(b7+o+b8))
H.h(d,"$iA")
p=b5.y
o=i+"s["+n+"].objRight"
c=p.h(0,o)
if(c==null)H.p(P.o(b7+o+b8))
H.h(c,"$iA")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.h(0,o)
if(a9==null)H.p(P.o(b7+o+b8))
H.h(a9,"$iK")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.h(0,o)
if(b0==null)H.p(P.o(b7+o+b8))
H.h(b0,"$iK")
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
if(d==null)H.p(P.o(b7+a1+b8))
H.h(d,"$ibV")
a8=d}else a8=b6
if((j&8)!==0){o=b5.y
a1=i+"s["+n+"].cutoff"
d=o.h(0,a1)
if(d==null)H.p(P.o(b7+a1+b8))
H.h(d,"$iK")
o=b5.y
a1=i+"s["+n+"].coneAngle"
c=o.h(0,a1)
if(c==null)H.p(P.o(b7+a1+b8))
H.h(c,"$iK")
b3=c
b4=d}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
a1=i+"s["+n+"].att0"
d=o.h(0,a1)
if(d==null)H.p(P.o(b7+a1+b8))
H.h(d,"$iK")
o=b5.y
a1=i+"s["+n+"].att1"
c=o.h(0,a1)
if(c==null)H.p(P.o(b7+a1+b8))
H.h(c,"$iK")
o=b5.y
a1=i+"s["+n+"].att2"
a9=o.h(0,a1)
if(a9==null)H.p(P.o(b7+a1+b8))
H.h(a9,"$iK")
b=a9
a=c
a0=d}else{b=b6
a=b
a0=a}if((j&1)!==0){o=b5.y
a1=i+"sTexture2D"+n
d=o.h(0,a1)
if(d==null)H.p(P.o(b7+a1+b8))
H.h(d,"$iS")
a5=d}else a5=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
d=p.h(0,o)
if(d==null)H.p(P.o(b7+o+b8))
H.h(d,"$iS")
a7=d}else a7=b6
h.push(new A.c_(m,g,f,e,a4,a3,b2,b1,a8,b4,b3,a0,a,b,a5,a7))}b5.bM.k(0,j,h)
q=b5.bL
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.p(P.o(b7+o+b8))
q.k(0,j,m)}}}},
ad:function(a,b){if(b!=null&&b.d)a.dj(b)},
eY:function(a,b){}}
A.cm.prototype={
i:function(a){return"barLight"+H.e(this.a)}}
A.cu.prototype={
i:function(a){return"dirLight"+H.e(this.a)}}
A.cS.prototype={
i:function(a){return"pointLight"+H.e(this.a)}}
A.cZ.prototype={
i:function(a){return"spotLight"+H.e(this.a)}}
A.fi.prototype={
i:function(a){return this.aP}}
A.bW.prototype={}
A.bX.prototype={}
A.bZ.prototype={}
A.c_.prototype={}
A.cW.prototype={
c5:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
d2:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.cg(b,35633)
r.f=r.cg(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!u.getProgramParameter(r.r,35714)){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.p(P.o("Failed to link shader: "+H.e(s)))}r.eZ()
r.f0()},
W:function(a){a.a.useProgram(this.r)
this.x.fm()},
cg:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.o("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
eZ:function(){var u,t,s,r=this,q=H.b([],[A.cl]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.t(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cl(p,t.name,s))}r.x=new A.ej(q)},
f0:function(){var u,t,s,r=this,q=H.b([],[A.da]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.t(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.fi(t.type,t.size,t.name,s))}r.y=new A.hE(q)},
av:function(a,b,c){var u=this.a
if(a===1)return new A.b2(u,b,c)
else return A.j1(u,this.r,b,a,c)},
dO:function(a,b,c){var u=this.a
if(a===1)return new A.S(u,b,c)
else return A.j1(u,this.r,b,a,c)},
dP:function(a,b,c){var u=this.a
if(a===1)return new A.b3(u,b,c)
else return A.j1(u,this.r,b,a,c)},
b0:function(a,b){return new P.dt(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
fi:function(a,b,c,d){var u=this
switch(a){case 5120:return u.av(b,c,d)
case 5121:return u.av(b,c,d)
case 5122:return u.av(b,c,d)
case 5123:return u.av(b,c,d)
case 5124:return u.av(b,c,d)
case 5125:return u.av(b,c,d)
case 5126:return new A.K(u.a,c,d)
case 35664:return new A.hA(u.a,c,d)
case 35665:return new A.A(u.a,c,d)
case 35666:return new A.bV(u.a,c,d)
case 35667:return new A.hB(u.a,c,d)
case 35668:return new A.hC(u.a,c,d)
case 35669:return new A.hD(u.a,c,d)
case 35674:return new A.hF(u.a,c,d)
case 35675:return new A.bY(u.a,c,d)
case 35676:return new A.a0(u.a,c,d)
case 35678:return u.dO(b,c,d)
case 35680:return u.dP(b,c,d)
case 35670:throw H.c(u.b0("BOOL",c))
case 35671:throw H.c(u.b0("BOOL_VEC2",c))
case 35672:throw H.c(u.b0("BOOL_VEC3",c))
case 35673:throw H.c(u.b0("BOOL_VEC4",c))
default:throw H.c(P.o("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.h5.prototype={}
A.da.prototype={}
A.hE.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
D:function(a,b){var u=this.h(0,b)
if(u==null)throw H.c(P.o("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.I()},
I:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.m)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.b2.prototype={
i:function(a){return"Uniform1i: "+H.e(this.c)}}
A.hB.prototype={
i:function(a){return"Uniform2i: "+H.e(this.c)}}
A.hC.prototype={
i:function(a){return"Uniform3i: "+H.e(this.c)}}
A.hD.prototype={
i:function(a){return"Uniform4i: "+H.e(this.c)}}
A.hz.prototype={
i:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.K.prototype={
i:function(a){return"Uniform1f: "+H.e(this.c)}}
A.hA.prototype={
i:function(a){return"Uniform2f: "+H.e(this.c)}}
A.A.prototype={
i:function(a){return"Uniform3f: "+H.e(this.c)}}
A.bV.prototype={
i:function(a){return"Uniform4f: "+H.e(this.c)}}
A.hF.prototype={
i:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.bY.prototype={
a6:function(a){var u=new Float32Array(H.cc(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.e(this.c)}}
A.a0.prototype={
a6:function(a){var u=new Float32Array(H.cc(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.e(this.c)}}
A.S.prototype={
dj:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.b3.prototype={
dk:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.iq.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.bR(s.b,b).bR(s.d.bR(s.c,b),c)
s=new V.O(r.a,r.b,r.c)
if(!J.L(a.f,s)){a.f=s
s=a.a
if(s!=null)s.Y()}a.sfT(r.u(0,Math.sqrt(r.A(r))))
s=1-b
u=1-c
u=new V.aB(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.L(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.Y()}}}
F.aR.prototype={
dH:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.dg()
if(q!=null)s=s.w(0,q)
if(u!=null)s=s.w(0,u)
if(t!=null)s=s.w(0,t)
if(s.d4())return
return s.u(0,Math.sqrt(s.A(s)))},
dK:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.E(0,q)
r=new V.D(r.a,r.b,r.c)
s=r.u(0,Math.sqrt(r.A(r)))
r=t.E(0,q)
r=new V.D(r.a,r.b,r.c)
r=s.aO(r.u(0,Math.sqrt(r.A(r))))
return r.u(0,Math.sqrt(r.A(r)))},
bB:function(){var u,t=this
if(t.d!=null)return!0
u=t.dH()
if(u==null){u=t.dK()
if(u==null)return!1}t.d=u
t.a.a.Y()
return!0},
dG:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.dg()
if(q!=null)s=s.w(0,q)
if(u!=null)s=s.w(0,u)
if(t!=null)s=s.w(0,t)
if(s.d4())return
return s.u(0,Math.sqrt(s.A(s)))},
dJ:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.y().a){l=d.E(0,g)
l=new V.D(l.a,l.b,l.c)
q=l.u(0,Math.sqrt(l.A(l)))
if(s.a-t.a<0)q=q.L(0)}else{p=(l-u.b)/r
l=d.E(0,g)
l=new V.O(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).E(0,j)
l=new V.D(l.a,l.b,l.c)
q=l.u(0,Math.sqrt(l.A(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.L(0)}l=n.d
if(l!=null){o=l.u(0,Math.sqrt(l.A(l)))
l=o.aO(q)
l=l.u(0,Math.sqrt(l.A(l))).aO(o)
q=l.u(0,Math.sqrt(l.A(l)))}return q},
bz:function(){var u,t=this
if(t.e!=null)return!0
u=t.dG()
if(u==null){u=t.dJ()
if(u==null)return!1}t.e=u
t.a.a.Y()
return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.I()},
v:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.c.a9(J.a5(s.e),0)+", "+C.c.a9(J.a5(t.b.e),0)+", "+C.c.a9(J.a5(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.i(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.i(0)+"}"):u+"-}"},
I:function(){return this.v("")}}
F.bJ.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.I()},
v:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.c.a9(J.a5(u.e),0)+", "+C.c.a9(J.a5(this.b.e),0)},
I:function(){return this.v("")}}
F.bS.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.I()},
v:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.c.a9(J.a5(u.e),0)},
I:function(){return this.v("")}}
F.fZ.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.z():u},
fu:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.U()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){r=g[s]
h.a.l(0,r.fh())}h.a.U()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.U()
o=o.e
if(typeof o!=="number")return o.w()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
n=p[o]
h.b.a.a.l(0,n)
o=new F.bS()
if(n.a==null)H.p(P.o("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.B(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.U()
o=o.e
if(typeof o!=="number")return o.w()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.U()
p=p.e
if(typeof p!=="number")return p.w()
p+=u
o=o.c
if(p>=o.length)return H.f(o,p)
k=o[p]
p=h.c.a
p.a.l(0,l)
p.a.l(0,k)
F.kF(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.U()
o=o.e
if(typeof o!=="number")return o.w()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.U()
p=p.e
if(typeof p!=="number")return p.w()
p+=u
o=o.c
if(p>=o.length)return H.f(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.U()
o=o.e
if(typeof o!=="number")return o.w()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
i=p[o]
o=h.d.a
o.a.l(0,l)
o.a.l(0,k)
o.a.l(0,i)
F.bE(l,k,i)}g=h.e
if(g!=null)g.aq(0)},
al:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.al()||!1
if(!t.a.al())u=!1
s=t.e
if(s!=null)s.aq(0)
return u},
cG:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.ac()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.aN().a)!==0)++s
if((t&$.aM().a)!==0)++s
if((t&$.aO().a)!==0)++s
if((t&$.b8().a)!==0)++s
if((t&$.ch().a)!==0)++s
if((t&$.ci().a)!==0)++s
if((t&$.bw().a)!==0)++s
if((t&$.aL().a)!==0)++s
r=a4.gc0(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.J])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.co])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.fc(m)
k=l.gc0(l)
if(m>=t)return H.f(o,m)
o[m]=new Z.co(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.f(i,j)
h=i[j].fs(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.f(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.cc(p)),35044)
u.bindBuffer(a1,null)
c=new Z.bA(new Z.dh(a1,d),o,a4)
c.b=H.b([],[Z.bg])
if(a0.b.b.length!==0){b=H.b([],[P.u])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.U()
b.push(t.e)}a=Z.j2(u,34963,b)
c.b.push(new Z.bg(0,b.length,a))}if(a0.c.b.length!==0){b=H.b([],[P.u])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.U()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.f(t,m)
t=t[m].b
t.a.a.U()
b.push(t.e)}a=Z.j2(u,34963,b)
c.b.push(new Z.bg(1,b.length,a))}if(a0.d.b.length!==0){b=H.b([],[P.u])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.U()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.f(t,m)
t=t[m].b
t.a.a.U()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.f(t,m)
t=t[m].c
t.a.a.U()
b.push(t.e)}a=Z.j2(u,34963,b)
c.b.push(new Z.bg(4,b.length,a))}return c},
i:function(a){var u=this,t="   ",s=H.b([],[P.r])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.v(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.v(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.v(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.v(t))}return C.a.p(s,"\n")},
Y:function(){var u=this.e
if(u!=null)u.B(null)}}
F.h_.prototype={
fa:function(a){var u,t,s,r,q=H.b([],[F.aR]),p=a[0]
for(u=this.a,t=2;t<4;++t){s=a[t-1]
r=a[t]
u.a.l(0,p)
u.a.l(0,s)
u.a.l(0,r)
q.push(F.bE(p,s,r))}return q},
fb:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.aR])
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
if(p){n.l(0,m)
u.a.l(0,l)
u.a.l(0,j)
h.push(F.bE(m,l,j))
u.a.l(0,m)
u.a.l(0,j)
u.a.l(0,i)
h.push(F.bE(m,j,i))}else{n.l(0,l)
u.a.l(0,j)
u.a.l(0,i)
h.push(F.bE(l,j,i))
u.a.l(0,l)
u.a.l(0,i)
u.a.l(0,m)
h.push(F.bE(l,i,m))}p=!p}r=!r}return h},
gj:function(a){return this.b.length},
al:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.m)(u),++r)if(!u[r].bB())s=!1
return s},
bA:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.m)(u),++r)if(!u[r].bz())s=!1
return s},
i:function(a){return this.I()},
v:function(a){var u,t,s,r=H.b([],[P.r])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].v(a))
return C.a.p(r,"\n")},
I:function(){return this.v("")}}
F.h0.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.I()},
v:function(a){var u,t,s=H.b([],[P.r]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.f(t,u)
s.push(t[u].v(a+(""+u+". ")))}return C.a.p(s,"\n")},
I:function(){return this.v("")}}
F.h1.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.I()},
v:function(a){var u,t,s,r=H.b([],[P.r])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].v(a))
return C.a.p(r,"\n")},
I:function(){return this.v("")}}
F.bp.prototype={
bD:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.hN(u.cx,r,o,t,s,q,p,a,n)},
fh:function(){return this.bD(null)},
sfT:function(a){var u
if(!J.L(this.z,a)){this.z=a
u=this.a
if(u!=null)u.Y()}},
fs:function(a){var u,t,s=this
if(a.q(0,$.ac())){u=s.f
t=[P.J]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.aN())){u=s.r
t=[P.J]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.aM())){u=s.x
t=[P.J]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.aO())){u=s.y
t=[P.J]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.q(0,$.b8())){u=s.z
t=[P.J]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.ch())){u=s.Q
t=[P.J]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.ci())){u=s.Q
t=[P.J]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.q(0,$.bw()))return H.b([s.ch],[P.J])
else if(a.q(0,$.aL())){u=s.cx
t=[P.J]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.J])},
bB:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.dg()
t.d.H(0,new F.hV(s))
s=s.a
t.r=s.u(0,Math.sqrt(s.A(s)))
s=t.a
if(s!=null){s.Y()
s=t.a.e
if(s!=null)s.aq(0)}return!0},
bz:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.dg()
t.d.H(0,new F.hU(s))
s=s.a
t.x=s.u(0,Math.sqrt(s.A(s)))
s=t.a
if(s!=null){s.Y()
s=t.a.e
if(s!=null)s.aq(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.I()},
v:function(a){var u,t,s=this,r="-",q=H.b([],[P.r])
q.push(C.c.a9(J.a5(s.e),0))
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
t=C.a.p(q,", ")
return a+"{"+t+"}"},
I:function(){return this.v("")}}
F.hV.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.w(0,t)}}}
F.hU.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.w(0,t)}}}
F.hO.prototype={
U:function(){},
l:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.o("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.Y()
return!0},
b2:function(a,b,c,d,e,f){var u=F.hN(a,null,b,c,null,d,e,f,0)
this.l(0,u)
return u},
gj:function(a){return this.c.length},
al:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)u[s].bB()
return!0},
bA:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)u[s].bz()
return!0},
fe:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.u(0,Math.sqrt(p*p+o*o+n*n))
if(!J.L(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.B(null)}}}}return!0},
i:function(a){return this.I()},
v:function(a){var u,t,s,r
this.U()
u=H.b([],[P.r])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r)u.push(t[r].v(a))
return C.a.p(u,"\n")},
I:function(){return this.v("")}}
F.hP.prototype={
gj:function(a){return this.b.length+this.c.length+this.d.length},
H:function(a,b){var u=this
C.a.H(u.b,b)
C.a.H(u.c,new F.hQ(u,b))
C.a.H(u.d,new F.hR(u,b))},
i:function(a){return this.I()},
I:function(){var u,t,s,r=H.b([],[P.r])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].v(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].v(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].v(""))
return C.a.p(r,"\n")}}
F.hQ.prototype={
$1:function(a){if(!J.L(a.a,this.a))this.b.$1(a)}}
F.hR.prototype={
$1:function(a){var u=this.a
if(!J.L(a.a,u)&&!J.L(a.b,u))this.b.$1(a)}}
F.hS.prototype={
gj:function(a){return this.b.length+this.c.length},
i:function(a){return this.I()},
I:function(){var u,t,s,r=H.b([],[P.r])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].v(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].v(""))
return C.a.p(r,"\n")}}
F.hT.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.I()},
I:function(){var u,t,s,r=H.b([],[P.r])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].v(""))
return C.a.p(r,"\n")}}
O.cK.prototype={
gm:function(){var u=this.fr
return u==null?this.fr=D.z():u},
R:function(a){var u=this.fr
if(u!=null)u.B(a)},
aJ:function(){return this.R(null)},
co:function(a){this.a=null
this.R(a)},
eW:function(){return this.co(null)},
e3:function(a,b){var u=new D.aT()
u.b=!0
this.R(u)},
e5:function(a,b){var u=new D.aU()
u.b=!0
this.R(u)},
ce:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=P.u
f=[f,f]
u=new H.G(f)
for(t=g.dx.e,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){q=t[r]
p=q.ga2()
o=u.h(0,q.ga2())
u.k(0,p,o==null?1:o)}n=H.b([],[A.cm])
u.H(0,new O.fm(g,n))
C.a.aH(n,new O.fn())
m=new H.G(f)
for(t=g.dx.f,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){q=t[r]
p=q.ga2()
o=m.h(0,q.ga2())
m.k(0,p,o==null?1:o)}l=H.b([],[A.cu])
m.H(0,new O.fo(g,l))
C.a.aH(l,new O.fp())
k=new H.G(f)
for(t=g.dx.r,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){q=t[r]
p=q.ga2()
o=k.h(0,q.ga2())
k.k(0,p,o==null?1:o)}j=H.b([],[A.cS])
k.H(0,new O.fq(g,j))
C.a.aH(j,new O.fr())
i=new H.G(f)
for(f=g.dx.x,t=f.length,r=0;r<f.length;f.length===t||(0,H.m)(f),++r){q=f[r]
s=q.ga2()
p=i.h(0,q.ga2())
i.k(0,s,p==null?1:p)}h=H.b([],[A.cZ])
i.H(0,new O.fs(g,h))
C.a.aH(h,new O.ft())
f=C.d.X(g.e.a.length+3,4)
g.dy.e
return A.kL(!1,!1,!1,!1,f*4,g.f.c,g.r.c,g.x.c,g.y.c,g.z.c,g.Q.c,g.cx.c,g.cy.c,g.db.c,n,l,j,h)},
a7:function(a,b){if(b!=null)if(!C.a.M(a,b)){b.a=a.length
a.push(b)}},
ab:function(a,b){var u
for(u=this.dx.a,u=new J.X(u,u.length);u.t();)C.h.ab(u.d,b)},
da:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=b0.a
if(b1==null){b1=b0.ce()
u=b2.fr.h(0,b1.aP)
if(u==null){u=A.kK(b1,b2.a)
b2.cA(u)}b1=b0.a=u
b3.e=null}t=b1.z
s=t.b6
b1=b3.e
if(!(b1 instanceof Z.bA))b1=b3.e=null
if(b1==null||!b1.d.q(0,s)){b1=t.k4
if(b1)b3.d.al()
r=t.r1
if(r){q=b3.d
p=q.e
if(p!=null)++p.d
q.d.bA()
q.a.bA()
q=q.e
if(q!=null)q.aq(0)}q=t.rx
if(q){p=b3.d
o=p.e
if(o!=null)++o.d
p.a.fe()
p=p.e
if(p!=null)p.aq(0)}n=b3.d.cG(new Z.di(b2.a),s)
n.am($.ac()).e=b0.a.Q.c
if(b1)n.am($.aN()).e=b0.a.cx.c
if(r)n.am($.aM()).e=b0.a.ch.c
if(t.r2)n.am($.aO()).e=b0.a.cy.c
if(q)n.am($.b8()).e=b0.a.db.c
if(t.ry)n.am($.aL()).e=b0.a.dx.c
b3.e=n}m=H.b([],[T.d3])
b0.a.W(b2)
if(t.fr){b1=b0.a
r=b2.dx
r=r.gV(r)
b1=b1.dy
b1.toString
b1.a6(r.a0(0,!0))}if(t.fx){b1=b0.a
r=b2.cx
if(r==null){r=b2.db
r=r.gV(r)
q=b2.dx
q=b2.cx=r.n(0,q.gV(q))
r=q}b1=b1.fr
b1.toString
b1.a6(r.a0(0,!0))}b1=b0.a
r=b2.ch
if(r==null){r=b2.gfL()
q=b2.dx
q=b2.ch=r.n(0,q.gV(q))
r=q}b1=b1.fy
b1.toString
b1.a6(r.a0(0,!0))
if(t.go){b1=b0.a
r=b2.db
r=r.gV(r)
b1=b1.fx
b1.toString
b1.a6(r.a0(0,!0))}if(t.x1){b1=b0.a
r=b0.b
b1=b1.k1
b1.toString
b1.a6(C.h.a0(r,!0))}if(t.x2){b1=b0.a
r=b0.c
b1=b1.k2
b1.toString
b1.a6(C.h.a0(r,!0))}if(t.y1){b1=b0.a
r=b0.d
b1=b1.k3
b1.toString
b1.a6(C.h.a0(r,!0))}if(t.aC>0){l=b0.e.a.length
b1=b0.a.k4
b1.a.uniform1i(b1.d,l)
for(k=0;k<l;++k){b1=b0.a
r=b0.e.a
if(k>=r.length)return H.f(r,k)
r=r[k]
b1=b1.r1
if(k>=b1.length)return H.f(b1,k)
b1=b1[k]
j=new Float32Array(H.cc(r.a0(0,!0)))
b1.a.uniformMatrix4fv(b1.d,!1,j)}}b1=t.a
if(b1.a){r=b0.a
q=b0.f.f
r=r.r2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.a7(m,b0.f.d)
b1=b0.a
r=b0.f.d
b1.ad(b1.rx,r)}if(t.k1){b1=t.b
if(b1.a){r=b0.a
q=b0.r.f
r=r.x1
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.a7(m,b0.r.d)
b1=b0.a
r=b0.r.d
b1.ad(b1.x2,r)}b1=t.c
if(b1.a){r=b0.a
q=b0.x.f
r=r.y2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.a7(m,b0.x.d)
b1=b0.a
r=b0.x.d
b1.ad(b1.aC,r)}b1=t.d
if(b1.a){r=b0.a
q=b0.y.f
r=r.b6
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.a7(m,b0.y.d)
b1=b0.a
r=b0.y.d
b1.ad(b1.cQ,r)}b1=t.e
r=b1.a
if(r||b1.b||!1){q=b0.a
p=b0.z.ch
q=q.cT
q.a.uniform1f(q.d,p)}if(r){r=b0.a
q=b0.z.f
r=r.cR
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.a7(m,b0.z.d)
b1=b0.a
r=b0.z.d
b1.ad(b1.cS,r)}b1=t.z
if(b1.length>0){r=P.u
i=new H.G([r,r])
for(r=b0.dx.e,q=r.length,h=0;h<r.length;r.length===q||(0,H.m)(r),++h){g=r[h]
f=g.ga2()
e=i.h(0,f)
if(e==null)e=0
i.k(0,f,e+1)
d=J.cj(b0.a.bG.h(0,f),e)
p=g.gh_()
o=$.aj
p=p.aV(o==null?$.aj=new V.O(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gh3()
o=$.aj
p=p.aV(o==null?$.aj=new V.O(0,0,0):o)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gaA(g)
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
if(g.gcP()){p=g.gcB()
o=d.e
o.a.uniform1f(o.d,p)
p=g.gcC()
o=d.f
o.a.uniform1f(o.d,p)
p=g.gcD()
o=d.r
o.a.uniform1f(o.d,p)}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.m)(b1),++h){q=b1[h].a
l=i.h(0,q)
if(l==null)l=0
q=b0.a.bF.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.Q
if(b1.length>0){r=b2.db
c=r.gV(r)
r=P.u
b=new H.G([r,r])
for(r=b0.dx.f,q=r.length,h=0;h<r.length;r.length===q||(0,H.m)(r),++h){g=r[h]
f=g.ga2()
e=b.h(0,f)
if(e==null)e=0
b.k(0,f,e+1)
d=J.cj(b0.a.bI.h(0,f),e)
p=g.gcL(g)
o=C.b.n(c.a,p.gb3(p))+C.b.n(c.b,p.gb4(p))+C.b.n(c.c,p.gb5())
a=C.b.n(c.e,p.gb3(p))+C.b.n(c.f,p.gb4(p))+C.b.n(c.r,p.gb5())
p=C.b.n(c.y,p.gb3(p))+C.b.n(c.z,p.gb4(p))+C.b.n(c.Q,p.gb5())
p=new V.D(o,a,p).u(0,Math.sqrt(o*o+a*a+p*p))
a=d.e
o=p.a
a0=p.b
p=p.c
a.a.uniform3f(a.d,o,a0,p)
p=g.gaA(g)
a0=d.f
a0.a.uniform3f(a0.d,p.a,p.b,p.c)
g.gaa()
p=g.gcL(g)
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gbe()
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gbc(g)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gaa()
if(!C.a.M(m,p)){p.a=m.length
m.push(p)}p=g.gaa()
o=p.gb9(p)
if(o){o=d.r
o.toString
a=p.d
if(!a)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.m)(b1),++h){q=b1[h].a
l=b.h(0,q)
if(l==null)l=0
q=b0.a.bH.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.ch
if(b1.length>0){r=b2.db
c=r.gV(r)
r=P.u
a1=new H.G([r,r])
for(r=b0.dx.r,q=r.length,h=0;h<r.length;r.length===q||(0,H.m)(r),++h){g=r[h]
f=g.ga2()
e=a1.h(0,f)
if(e==null)e=0
a1.k(0,f,e+1)
d=J.cj(b0.a.bK.h(0,f),e)
a2=c.n(0,g.gV(g))
p=g.gV(g)
o=$.aj
p=p.aV(o==null?$.aj=new V.O(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=$.aj
p=a2.aV(p==null?$.aj=new V.O(0,0,0):p)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gaA(g)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
g.gaa()
p=a2.bO(0)
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
j=new Float32Array(H.cc(new V.cL(o,a,a0,a3,a4,a5,a6,a7,p).a0(0,!0)))
a8.a.uniformMatrix3fv(a8.d,!1,j)
g.gaa()
p=g.gaa()
if(!C.a.M(m,p)){p.a=m.length
m.push(p)}p=g.gaa()
o=p.gb9(p)
if(o){o=d.f
o.toString
a=p.d
if(a<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}g.gaG()
p=g.gdl()
o=d.x
o.toString
a=p.gb3(p)
a0=p.gb4(p)
a3=p.gb5()
p=p.gfl()
o.a.uniform4f(o.d,a,a0,a3,p)
p=g.gaG()
if(!C.a.M(m,p)){p.a=m.length
m.push(p)}p=g.gaG()
o=p.gb9(p)
if(o){o=d.r
o.toString
a=p.d
if(a<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}if(g.gcP()){p=g.gcB()
o=d.y
o.a.uniform1f(o.d,p)
p=g.gcC()
o=d.z
o.a.uniform1f(o.d,p)
p=g.gcD()
o=d.Q
o.a.uniform1f(o.d,p)}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.m)(b1),++h){q=b1[h].a
l=a1.h(0,q)
if(l==null)l=0
q=b0.a.bJ.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.cx
if(b1.length>0){r=b2.db
c=r.gV(r)
r=P.u
a9=new H.G([r,r])
for(r=b0.dx.x,q=r.length,h=0;h<r.length;r.length===q||(0,H.m)(r),++h){g=r[h]
f=g.ga2()
e=a9.h(0,f)
if(e==null)e=0
a9.k(0,f,e+1)
d=J.cj(b0.a.bM.h(0,f),e)
p=g.gfK(g)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gcL(g).hd()
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=c.aV(g.gfK(g))
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gaA(g)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
g.gaa()
p=g.gbe()
o=d.f
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gbc(g)
o=d.r
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.ghe()
o=d.x
o.a.uniform1f(o.d,p)
p=g.ghf()
o=d.y
o.a.uniform1f(o.d,p)
g.gaa()
p=g.gaa()
if(!C.a.M(m,p)){p.a=m.length
m.push(p)}p=g.gaa()
o=p.gb9(p)
if(o){o=d.dx
o.toString
a=p.d
if(!a)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}g.gaG()
p=g.gdl()
o=d.z
o.toString
a=p.gb3(p)
a0=p.gb4(p)
a3=p.gb5()
p=p.gfl()
o.a.uniform4f(o.d,a,a0,a3,p)
p=g.gaG()
if(!C.a.M(m,p)){p.a=m.length
m.push(p)}p=g.gaG()
o=p.gb9(p)
if(o){o=d.dy
o.toString
a=p.d
if(!a)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}if(g.gh2()){p=g.gh1()
o=d.Q
o.a.uniform1f(o.d,p)
p=g.gh0()
o=d.ch
o.a.uniform1f(o.d,p)}if(g.gcP()){p=g.gcB()
o=d.cx
o.a.uniform1f(o.d,p)
p=g.gcC()
o=d.cy
o.a.uniform1f(o.d,p)
p=g.gcD()
o=d.db
o.a.uniform1f(o.d,p)}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.m)(b1),++h){q=b1[h].a
l=a9.h(0,q)
if(l==null)l=0
q=b0.a.bL.h(0,q)
q.a.uniform1i(q.d,l)}}}if(t.f.b){b0.a7(m,b0.Q.d)
b1=b0.a
r=b0.Q.d
b1.ad(b1.cU,r)}if(t.dy){b1=b0.a
r=b2.Q
if(r==null){r=b2.db
r=b2.Q=r.gV(r).bO(0)}b1=b1.id
b1.toString
b1.a6(r.a0(0,!0))}if(t.db){b0.a7(m,b0.ch)
b1=b0.a
r=b0.ch
b1.eY(b1.cV,r)
b1=t.r
if(b1.a){r=b0.a
q=b0.cx.f
r=r.cW
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.a7(m,b0.cx.d)
b1=b0.a
r=b0.cx.d
b1.ad(b1.cX,r)}b1=t.x
r=b1.a
if(r||b1.b||!1){q=b0.a
p=b0.cy.ch
q=q.cY
q.a.uniform1f(q.d,p)}if(r){r=b0.a
q=b0.cy.f
r=r.cZ
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.a7(m,b0.cy.d)
b1=b0.a
r=b0.cy.d
b1.ad(b1.d_,r)}}b1=t.y
r=b1.a
q=!r
if(!q||b1.b||!1){if(r){r=b0.a
p=b0.db.f
r=r.d0
r.a.uniform1f(r.d,p)}if(b1.b){b0.a7(m,b0.db.d)
r=b0.a
p=b0.db.d
r.ad(r.d1,p)}r=b2.a
r.enable(3042)
r.blendFunc(770,771)}for(r=b2.a,k=0;k<m.length;++k){p=m[k]
if(!p.c&&p.d){p.c=!0
r.activeTexture(33984+p.a)
r.bindTexture(3553,p.b)}}p=b3.e
p.W(b2)
p.a5(b2)
p.aW(b2)
if(!q||b1.b||!1)r.disable(3042)
for(k=0;k<m.length;++k){b1=m[k]
if(b1.c){b1.c=!1
r.activeTexture(33984+b1.a)
r.bindTexture(3553,null)}}b1=b0.a
b1.toString
r.useProgram(null)
b1.x.cM()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.ce().aP}}
O.fm.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.cm(a,C.d.X(b+3,4)*4))}}
O.fn.prototype={
$2:function(a,b){return J.ck(a.a,b.a)}}
O.fo.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.cu(a,C.d.X(b+3,4)*4))}}
O.fp.prototype={
$2:function(a,b){return J.ck(a.a,b.a)}}
O.fq.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.cS(a,C.d.X(b+3,4)*4))}}
O.fr.prototype={
$2:function(a,b){return J.ck(a.a,b.a)}}
O.fs.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.cZ(a,C.d.X(b+3,4)*4))}}
O.ft.prototype={
$2:function(a,b){return J.ck(a.a,b.a)}}
O.fg.prototype={
aj:function(){var u,t=this
t.c3()
u=t.f
if(!(Math.abs(u-1)<$.y().a)){t.f=1
u=new D.x(t.b,u,1)
u.b=!0
t.a.R(u)}}}
O.bN.prototype={
R:function(a){return this.a.R(a)},
aJ:function(){return this.R(null)},
aj:function(){},
cs:function(a){var u,t,s=this
if(!s.c.q(0,a)){u=s.c
if(u.a||u.b||!1)t=!(a.a||a.b||!1)
else t=!0
s.c=a
if(t)s.aj()
u=s.a
u.a=null
u.R(null)}}}
O.fh.prototype={}
O.ag.prototype={
cr:function(a){var u,t,s=this
if(!s.f.q(0,a)){u=s.f
s.f=a
t=new D.x(s.b+".color",u,a)
t.b=!0
s.a.R(t)}},
aj:function(){this.c3()
this.cr(new V.U(1,1,1))},
saA:function(a,b){this.cs(new A.V(!0,this.c.b,!1))
this.cr(b)}}
O.fj.prototype={}
O.fk.prototype={
aj:function(){var u,t=this
t.c4()
u=t.ch
if(!(Math.abs(u-1)<$.y().a)){t.ch=1
u=new D.x(t.b+".refraction",u,1)
u.b=!0
t.a.R(u)}}}
O.fl.prototype={
aj:function(){var u,t=this
t.c4()
u=t.ch
if(!(Math.abs(u-100)<$.y().a)){t.ch=100
u=new D.x(t.b+".shininess",u,100)
u.b=!0
t.a.R(u)}}}
O.cX.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.z():u},
R:function(a){var u=this.e
if(u!=null)u.B(a)},
aJ:function(){return this.R(null)},
da:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=a.fr.h(0,n)
if(u==null){t=a.a
u=new A.h5(t,n)
u.c5(t,n)
u.d2(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.h(0,"posAttr")
u.Q=H.h(u.y.h(0,"fov"),"$iK")
u.ch=H.h(u.y.h(0,"ratio"),"$iK")
u.cx=H.h(u.y.h(0,"boxClr"),"$iA")
u.cy=H.h(u.y.h(0,"boxTxt"),"$ib3")
u.db=H.h(u.y.h(0,"viewMat"),"$ia0")
a.cA(u)}o.a=u}if(b.e==null){t=b.d.cG(new Z.di(a.a),$.ac())
t.am($.ac()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
if(!t.c&&t.d>=6){t.c=!0
s=a.a
s.activeTexture(33985)
s.bindTexture(34067,t.b)}}t=a.d
s=a.c
r=o.a
r.W(a)
q=o.b
p=r.Q
p.a.uniform1f(p.d,q)
q=r.ch
q.a.uniform1f(q.d,t/s)
s=o.c
r.cy.dk(s)
s=o.d
t=r.cx
t.a.uniform3f(t.d,s.a,s.b,s.c)
s=a.db
s=s.gV(s).bO(0)
r=r.db
r.toString
r.a6(s.a0(0,!0))
t=b.e
if(t instanceof Z.bA){t.W(a)
t.a5(a)
t.aW(a)}else b.e=null
t=o.a
t.toString
s=a.a
s.useProgram(null)
t.x.cM()
t=o.c
if(t!=null)if(t.c){t.c=!1
s.activeTexture(33984+t.a)
s.bindTexture(34067,null)}}}
O.d2.prototype={}
T.d3.prototype={}
T.hk.prototype={}
T.hl.prototype={
gm:function(){var u=this.y
return u==null?this.y=D.z():u}}
T.hm.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.z():u}}
T.hn.prototype={
ft:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=W.jr(a)
t=new T.hl()
t.a=0
t.b=q
t.d=t.c=!1
W.N(u,"load",new T.hp(this,t,u,!1,q,!1,!1),!1)
return t},
aw:function(a,b,c,d,e,f){var u=W.jr(c);++this.d
W.N(u,"load",new T.ho(this,u,!1,b,!1,d,a),!1)},
cq:function(a,b,c){var u,t,s,r
b=V.jc(b)
u=V.jc(a.width)
t=V.jc(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.iM()
s.width=u
s.height=t
r=C.f.dg(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.lU(r.getImageData(0,0,s.width,s.height))}}}
T.hp.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.cq(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.t.dd(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.cO()}++s.e}}
T.ho.prototype={
$1:function(a){var u=this,t=u.a,s=t.cq(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.t.dd(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.cO()}++t.e}}
X.iL.prototype={}
X.eX.prototype={
gm:function(){var u=this.x
return u==null?this.x=D.z():u},
ag:function(a){var u=this.x
if(u!=null)u.B(a)},
W:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.t(u)
q=C.b.ae(r*u)
r=s.b
if(typeof t!=="number")return H.t(t)
p=C.b.ae(r*t)
r=C.b.ae(s.c*u)
a.c=r
s=C.b.ae(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)}}
X.eZ.prototype={
gm:function(){var u=this.b
return u==null?this.b=D.z():u},
W:function(a){var u
a.cy.bb(V.bk())
u=V.bk()
a.db.bb(u)},
aW:function(a){a.cy.ap()
a.db.ap()}}
X.cR.prototype={
gm:function(){var u=this.f
return u==null?this.f=D.z():u},
ag:function(a){var u=this.f
if(u!=null)u.B(a)},
dD:function(){return this.ag(null)},
W:function(a){var u,t,s,r,q,p,o,n,m,l=this,k=a.c,j=a.d,i=l.c,h=l.d,g=l.e,f=g-h,e=1/Math.tan(i*0.5),d=V.ah(-e/(k/j),0,0,0,0,e,0,0,0,0,g/f,-g*h/f,0,0,1,0)
a.cy.bb(d)
k=$.jy
if(k==null){k=V.kM()
j=$.jM
if(j==null)j=$.jM=new V.D(0,1,0)
i=$.jL
if(i==null)i=$.jL=new V.D(0,0,-1)
u=i.u(0,Math.sqrt(i.A(i)))
j=j.aO(u)
t=j.u(0,Math.sqrt(j.A(j)))
s=u.aO(t)
r=new V.D(k.a,k.b,k.c)
q=t.L(0).A(r)
p=s.L(0).A(r)
o=u.L(0).A(r)
k=V.ah(t.a,s.a,u.a,q,t.b,s.b,u.b,p,t.c,s.c,u.c,o,0,0,0,1)
$.jy=k
n=k}else n=k
k=l.b
if(k!=null){m=k.aE(0,a,l)
if(m!=null)n=m.n(0,n)}a.db.bb(n)},
aW:function(a){a.cy.ap()
a.db.ap()}}
X.hg.prototype={}
V.iD.prototype={
$1:function(a){var u=C.b.de(this.a.gfo(),2)
if(u!=="0.00")P.jd(u+" fps")}}
V.h2.prototype={
dz:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.N(q,"scroll",new V.h4(o),!1)},
cz:function(a){var u,t,s,r,q,p,o,n
this.f_()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b,r=C.a.fq(a),s.toString,r=new H.M(r),r=new P.c8(s.df(new H.bK(r,r.gj(r))).a());r.t();){s=r.gF(r)
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
if(H.k2(s,"|",0)){p=s.split("|")
o=u.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.f(p,1)
o.href=p[1]
o.textContent=p[0]
t.appendChild(o)}else{n=P.lg(C.K,s,C.o,!1)
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
f_:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new L.hs()
t=P.r
u.a=new H.G([t,L.d0])
u.b=new H.G([t,L.d7])
u.c=P.jt(t)
u.d=u.J(0,q)
t=u.J(0,q).p(0,p)
s=K.R(new H.M("*"))
t.a.push(s)
t.c=!0
t=u.J(0,p).p(0,p)
s=new K.ay()
r=[K.cJ]
s.a=H.b([],r)
t.a.push(s)
t=K.R(new H.M("*"))
s.a.push(t)
t=u.J(0,p).p(0,"BoldEnd")
s=K.R(new H.M("*"))
t.a.push(s)
t.c=!0
t=u.J(0,q).p(0,o)
s=K.R(new H.M("_"))
t.a.push(s)
t.c=!0
t=u.J(0,o).p(0,o)
s=new K.ay()
s.a=H.b([],r)
t.a.push(s)
t=K.R(new H.M("_"))
s.a.push(t)
t=u.J(0,o).p(0,n)
s=K.R(new H.M("_"))
t.a.push(s)
t.c=!0
t=u.J(0,q).p(0,m)
s=K.R(new H.M("`"))
t.a.push(s)
t.c=!0
t=u.J(0,m).p(0,m)
s=new K.ay()
s.a=H.b([],r)
t.a.push(s)
t=K.R(new H.M("`"))
s.a.push(t)
t=u.J(0,m).p(0,"CodeEnd")
s=K.R(new H.M("`"))
t.a.push(s)
t.c=!0
t=u.J(0,q).p(0,l)
s=K.R(new H.M("["))
t.a.push(s)
t.c=!0
t=u.J(0,l).p(0,k)
s=K.R(new H.M("|"))
t.a.push(s)
s=u.J(0,l).p(0,j)
t=K.R(new H.M("]"))
s.a.push(t)
s.c=!0
s=u.J(0,l).p(0,l)
t=new K.ay()
t.a=H.b([],r)
s.a.push(t)
s=K.R(new H.M("|]"))
t.a.push(s)
s=u.J(0,k).p(0,j)
t=K.R(new H.M("]"))
s.a.push(t)
s.c=!0
s=u.J(0,k).p(0,k)
t=new K.ay()
t.a=H.b([],r)
s.a.push(t)
s=K.R(new H.M("|]"))
t.a.push(s)
u.J(0,q).p(0,i).a.push(new K.eg())
s=u.J(0,i).p(0,i)
t=new K.ay()
t.a=H.b([],r)
s.a.push(t)
s=K.R(new H.M("*_`["))
t.a.push(s)
s=u.J(0,"BoldEnd")
s.d=s.a.aU(p)
s=u.J(0,n)
s.d=s.a.aU(o)
s=u.J(0,"CodeEnd")
s.d=s.a.aU(m)
s=u.J(0,j)
s.d=s.a.aU("Link")
s=u.J(0,i)
s.d=s.a.aU(i)
this.b=u}}
V.h4.prototype={
$1:function(a){P.jG(C.i,new V.h3(this.a))}}
V.h3.prototype={
$0:function(){var u=C.b.ae(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}};(function aliases(){var u=J.a.prototype
u.dr=u.i
u=J.cE.prototype
u.ds=u.i
u=K.cA.prototype
u.dq=u.aD
u.c2=u.i
u=O.bN.prototype
u.c3=u.aj
u=O.ag.prototype
u.c4=u.aj})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(J,"lj","kD",19)
t(P,"lO","l7",6)
t(P,"lP","l8",6)
t(P,"lQ","l9",6)
s(P,"jV","lM",9)
var m
r(m=E.as.prototype,"gd8",0,0,null,["$1","$0"],["d9","fC"],0,0)
r(m,"gd6",0,0,null,["$1","$0"],["d7","fz"],0,0)
q(m,"gfv","fw",3)
q(m,"gfA","fB",3)
r(m=E.d4.prototype,"gc7",0,0,null,["$1","$0"],["c9","c8"],0,0)
p(m,"gfP","dc",9)
o(m=X.dc.prototype,"gei","ej",4)
o(m,"ge6","e7",4)
o(m,"gec","ed",2)
o(m,"gem","en",10)
o(m,"gek","el",10)
o(m,"geq","er",2)
o(m,"gev","ew",2)
o(m,"geg","eh",2)
o(m,"ges","eu",2)
o(m,"gee","ef",2)
o(m,"gex","ey",17)
o(m,"gez","eA",4)
o(m,"geP","eQ",5)
o(m,"geL","eM",5)
o(m,"geN","eO",5)
r(m=D.cG.prototype,"gcl",0,0,null,["$1","$0"],["cm","eo"],0,0)
o(m,"geB","eC",18)
q(m,"ge0","e1",11)
q(m,"geF","eG",11)
n(V.C.prototype,"gj","bQ",12)
n(V.D.prototype,"gj","bQ",12)
r(m=U.bF.prototype,"gax",0,0,null,["$1","$0"],["K","a_"],0,0)
q(m,"gdZ","e_",13)
q(m,"geD","eE",13)
r(m=U.dd.prototype,"gax",0,0,null,["$1","$0"],["K","a_"],0,0)
o(m,"gbo","bp",1)
o(m,"gbq","br",1)
o(m,"gbs","bt",1)
r(m=U.de.prototype,"gax",0,0,null,["$1","$0"],["K","a_"],0,0)
o(m,"gbo","bp",1)
o(m,"gbq","br",1)
o(m,"gbs","bt",1)
o(m,"gdT","dU",1)
o(m,"gdV","dW",1)
o(m,"gf7","f8",1)
o(m,"gf5","f6",1)
o(m,"gf3","f4",1)
o(U.df.prototype,"gdX","dY",1)
r(m=M.cq.prototype,"gS",0,0,null,["$1","$0"],["T","aI"],0,0)
q(m,"geH","eI",14)
q(m,"geJ","eK",14)
r(M.cs.prototype,"gS",0,0,null,["$1","$0"],["T","aI"],0,0)
r(m=M.cx.prototype,"gS",0,0,null,["$1","$0"],["T","aI"],0,0)
q(m,"ge8","e9",3)
q(m,"gea","eb",3)
r(m=O.cK.prototype,"gau",0,0,null,["$1","$0"],["R","aJ"],0,0)
r(m,"geV",0,0,null,["$1","$0"],["co","eW"],0,0)
q(m,"ge2","e3",15)
q(m,"ge4","e5",15)
r(O.bN.prototype,"gau",0,0,null,["$1","$0"],["R","aJ"],0,0)
r(O.cX.prototype,"gau",0,0,null,["$1","$0"],["R","aJ"],0,0)
r(X.cR.prototype,"gdC",0,0,null,["$1","$0"],["ag","dD"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.a_,null)
s(P.a_,[H.iV,J.a,J.X,P.dB,P.j,H.bK,P.f1,H.cy,H.hI,H.hx,P.bf,H.bB,H.dS,P.Z,H.f8,H.f9,H.f3,P.dY,P.bq,P.c8,P.dj,P.d1,P.he,P.d5,P.ip,P.ih,P.ib,P.dA,P.q,P.et,P.io,P.b6,P.a7,P.a4,P.aQ,P.fK,P.d_,P.dt,P.eW,P.aY,P.bL,P.aZ,P.r,P.aF,W.ez,W.H,W.cz,P.e2,P.ic,K.eg,K.cA,K.cJ,K.fY,L.d0,L.d6,L.d7,L.hs,O.aq,O.bO,E.ep,E.as,E.bc,E.bl,E.ds,E.fQ,E.d4,Z.dh,Z.di,Z.bA,Z.bg,Z.aI,D.es,D.bD,D.Q,X.cp,X.cF,X.f6,X.fc,X.a8,X.fA,X.ht,X.dc,D.eo,D.eE,D.Y,D.fN,D.h8,V.U,V.ar,V.eN,V.cL,V.av,V.W,V.O,V.aB,V.cU,V.C,V.D,U.dd,U.de,U.df,M.cs,M.cx,M.aa,A.cl,A.ej,A.V,A.cm,A.cu,A.cS,A.cZ,A.fi,A.bW,A.bX,A.bZ,A.c_,A.da,A.hE,F.aR,F.bJ,F.bS,F.fZ,F.h_,F.h0,F.h1,F.bp,F.hO,F.hP,F.hS,F.hT,O.d2,O.bN,O.fj,T.hn,X.iL,X.hg,X.eZ,X.cR,V.h2])
s(J.a,[J.f2,J.cD,J.cE,J.aV,J.bI,J.bh,H.bR,W.d,W.ef,W.cn,W.af,W.F,W.dl,W.a6,W.eD,W.eF,W.dn,W.cw,W.dq,W.eH,W.i,W.du,W.au,W.eY,W.dw,W.aS,W.fb,W.fu,W.dC,W.dD,W.aw,W.dE,W.dH,W.az,W.dL,W.dN,W.aD,W.dO,W.aE,W.dT,W.al,W.dW,W.hr,W.aH,W.dZ,W.hv,W.hK,W.e3,W.e5,W.e7,W.e9,W.eb,P.aX,P.dy,P.b_,P.dJ,P.fP,P.dU,P.b0,P.e0,P.ek,P.dk,P.cV,P.dQ])
s(J.cE,[J.fL,J.c0,J.aW])
t(J.iU,J.aV)
s(J.bI,[J.cC,J.cB])
t(P.fa,P.dB)
s(P.fa,[H.db,W.i3,W.i2,P.eS])
t(H.M,H.db)
s(P.j,[H.n,H.bM,H.hX,P.f0])
t(H.eK,H.bM)
s(P.f1,[H.cI,H.hY])
s(P.bf,[H.fH,H.f5,H.hH,H.er,H.fW,P.cQ,P.ad,P.hJ,P.hG,P.ha,P.ew,P.eC])
s(H.bB,[H.iF,H.hh,H.f4,H.iy,H.iz,H.iA,P.i_,P.hZ,P.i0,P.i1,P.im,P.il,P.iu,P.ie,P.ig,P.fe,P.eI,P.eJ,W.fw,W.fy,W.fV,W.hd,W.i6,P.iv,P.eT,P.eU,P.em,E.fR,E.fS,E.fT,E.hq,D.eO,D.eP,F.iq,F.hV,F.hU,F.hQ,F.hR,O.fm,O.fn,O.fo,O.fp,O.fq,O.fr,O.fs,O.ft,T.hp,T.ho,V.iD,V.h4,V.h3])
s(H.hh,[H.hb,H.by])
t(P.fd,P.Z)
t(H.G,P.fd)
t(H.bj,H.n)
t(H.cM,H.bR)
s(H.cM,[H.c2,H.c4])
t(H.c3,H.c2)
t(H.bQ,H.c3)
t(H.c5,H.c4)
t(H.cN,H.c5)
s(H.cN,[H.fB,H.fC,H.fD,H.fE,H.fF,H.cO,H.fG])
t(P.ik,P.f0)
t(P.id,P.ip)
t(P.ia,P.ih)
t(P.ex,P.he)
t(P.eL,P.et)
t(P.hL,P.eL)
t(P.hM,P.ex)
s(P.a4,[P.J,P.u])
s(P.ad,[P.bn,P.f_])
s(W.d,[W.B,W.eR,W.aC,W.c6,W.aG,W.am,W.c9,W.hW,W.c1,P.en,P.bb])
s(W.B,[W.P,W.aP])
s(W.P,[W.l,P.k])
s(W.l,[W.eh,W.ei,W.bd,W.eV,W.bH,W.fX])
t(W.ey,W.af)
t(W.be,W.dl)
s(W.a6,[W.eA,W.eB])
t(W.dp,W.dn)
t(W.cv,W.dp)
t(W.dr,W.dq)
t(W.eG,W.dr)
t(W.at,W.cn)
t(W.dv,W.du)
t(W.eQ,W.dv)
t(W.dx,W.dw)
t(W.bG,W.dx)
t(W.b1,W.i)
s(W.b1,[W.bi,W.ai,W.bo])
t(W.fv,W.dC)
t(W.fx,W.dD)
t(W.dF,W.dE)
t(W.fz,W.dF)
t(W.dI,W.dH)
t(W.cP,W.dI)
t(W.dM,W.dL)
t(W.fM,W.dM)
t(W.fU,W.dN)
t(W.c7,W.c6)
t(W.h6,W.c7)
t(W.dP,W.dO)
t(W.h7,W.dP)
t(W.hc,W.dT)
t(W.dX,W.dW)
t(W.hi,W.dX)
t(W.ca,W.c9)
t(W.hj,W.ca)
t(W.e_,W.dZ)
t(W.hu,W.e_)
t(W.b4,W.ai)
t(W.e4,W.e3)
t(W.i4,W.e4)
t(W.dm,W.cw)
t(W.e6,W.e5)
t(W.i7,W.e6)
t(W.e8,W.e7)
t(W.dG,W.e8)
t(W.ea,W.e9)
t(W.ii,W.ea)
t(W.ec,W.eb)
t(W.ij,W.ec)
t(W.i5,P.d1)
t(P.a3,P.ic)
t(P.dz,P.dy)
t(P.f7,P.dz)
t(P.dK,P.dJ)
t(P.fI,P.dK)
t(P.dV,P.dU)
t(P.hf,P.dV)
t(P.e1,P.e0)
t(P.hw,P.e1)
t(P.el,P.dk)
t(P.fJ,P.bb)
t(P.dR,P.dQ)
t(P.h9,P.dR)
s(K.cA,[K.ay,L.d9])
s(E.ep,[Z.co,A.cW,T.d3])
s(D.Q,[D.aT,D.aU,D.x,X.fO])
s(X.fO,[X.cH,X.ax,X.bP,X.d8])
s(O.aq,[D.cG,U.bF,M.cq])
s(D.es,[U.ev,U.a2])
t(U.cr,U.a2)
s(A.cW,[A.ff,A.h5])
s(A.da,[A.b2,A.hB,A.hC,A.hD,A.hz,A.K,A.hA,A.A,A.bV,A.hF,A.bY,A.a0,A.S,A.b3])
s(O.d2,[O.cK,O.cX])
s(O.bN,[O.fg,O.fh,O.ag])
s(O.ag,[O.fk,O.fl])
s(T.d3,[T.hk,T.hm])
t(T.hl,T.hk)
t(X.eX,X.hg)
u(H.db,H.hI)
u(H.c2,P.q)
u(H.c3,H.cy)
u(H.c4,P.q)
u(H.c5,H.cy)
u(P.dB,P.q)
u(W.dl,W.ez)
u(W.dn,P.q)
u(W.dp,W.H)
u(W.dq,P.q)
u(W.dr,W.H)
u(W.du,P.q)
u(W.dv,W.H)
u(W.dw,P.q)
u(W.dx,W.H)
u(W.dC,P.Z)
u(W.dD,P.Z)
u(W.dE,P.q)
u(W.dF,W.H)
u(W.dH,P.q)
u(W.dI,W.H)
u(W.dL,P.q)
u(W.dM,W.H)
u(W.dN,P.Z)
u(W.c6,P.q)
u(W.c7,W.H)
u(W.dO,P.q)
u(W.dP,W.H)
u(W.dT,P.Z)
u(W.dW,P.q)
u(W.dX,W.H)
u(W.c9,P.q)
u(W.ca,W.H)
u(W.dZ,P.q)
u(W.e_,W.H)
u(W.e3,P.q)
u(W.e4,W.H)
u(W.e5,P.q)
u(W.e6,W.H)
u(W.e7,P.q)
u(W.e8,W.H)
u(W.e9,P.q)
u(W.ea,W.H)
u(W.eb,P.q)
u(W.ec,W.H)
u(P.dy,P.q)
u(P.dz,W.H)
u(P.dJ,P.q)
u(P.dK,W.H)
u(P.dU,P.q)
u(P.dV,W.H)
u(P.e0,P.q)
u(P.e1,W.H)
u(P.dk,P.Z)
u(P.dQ,P.q)
u(P.dR,W.H)})()
var v={mangledGlobalNames:{u:"int",J:"double",a4:"num",r:"String",b6:"bool",aZ:"Null",aY:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.Q]},{func:1,ret:-1,args:[D.Q]},{func:1,ret:-1,args:[W.ai]},{func:1,ret:-1,args:[P.u,[P.j,E.as]]},{func:1,ret:-1,args:[W.i]},{func:1,ret:-1,args:[W.bo]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.aZ,args:[,,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bi]},{func:1,ret:-1,args:[P.u,[P.j,D.Y]]},{func:1,ret:P.J},{func:1,ret:-1,args:[P.u,[P.j,U.a2]]},{func:1,ret:-1,args:[P.u,[P.j,M.aa]]},{func:1,ret:-1,args:[P.u,[P.j,V.av]]},{func:1,ret:P.aZ,args:[,]},{func:1,ret:-1,args:[W.b4]},{func:1,ret:P.b6,args:[[P.j,D.Y]]},{func:1,ret:P.u,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.f=W.bd.prototype
C.p=W.be.prototype
C.H=J.a.prototype
C.a=J.aV.prototype
C.I=J.cB.prototype
C.d=J.cC.prototype
C.h=J.cD.prototype
C.b=J.bI.prototype
C.c=J.bh.prototype
C.J=J.aW.prototype
C.r=J.fL.prototype
C.t=P.cV.prototype
C.j=J.c0.prototype
C.u=W.b4.prototype
C.v=W.c1.prototype
C.w=new E.bc("Browser.chrome")
C.k=new E.bc("Browser.firefox")
C.l=new E.bc("Browser.edge")
C.x=new E.bc("Browser.other")
C.m=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.y=function() {
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
C.D=function(getTagFallback) {
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
C.z=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.A=function(hooks) {
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
C.C=function(hooks) {
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
C.B=function(hooks) {
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
C.n=function(hooks) { return hooks; }

C.E=new P.fK()
C.o=new P.hL()
C.F=new P.hM()
C.e=new P.id()
C.i=new P.aQ(0)
C.G=new P.aQ(5e6)
C.K=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.u])
C.L=new E.bl("OperatingSystem.windows")
C.q=new E.bl("OperatingSystem.mac")
C.M=new E.bl("OperatingSystem.linux")
C.N=new E.bl("OperatingSystem.other")
C.O=new P.bq(null,2)})();(function staticFields(){$.ae=0
$.bz=null
$.jh=null
$.jY=null
$.jU=null
$.k0=null
$.iw=null
$.iB=null
$.ja=null
$.br=null
$.cd=null
$.ce=null
$.j4=!1
$.ab=C.e
$.a1=[]
$.jn=null
$.jm=null
$.jl=null
$.jk=null
$.eM=null
$.jv=null
$.jz=null
$.aj=null
$.jD=null
$.jK=null
$.jN=null
$.jM=null
$.jL=null
$.jy=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"ml","k7",function(){return H.jW("_$dart_dartClosure")})
u($,"mm","je",function(){return H.jW("_$dart_js")})
u($,"mn","k8",function(){return H.an(H.hy({
toString:function(){return"$receiver$"}}))})
u($,"mo","k9",function(){return H.an(H.hy({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"mp","ka",function(){return H.an(H.hy(null))})
u($,"mq","kb",function(){return H.an(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mt","ke",function(){return H.an(H.hy(void 0))})
u($,"mu","kf",function(){return H.an(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"ms","kd",function(){return H.an(H.jI(null))})
u($,"mr","kc",function(){return H.an(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"mw","kh",function(){return H.an(H.jI(void 0))})
u($,"mv","kg",function(){return H.an(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"mJ","jf",function(){return P.l6()})
u($,"mL","kl",function(){return P.kY("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"mk","k6",function(){return{}})
u($,"mD","kk",function(){return Z.a9(0)})
u($,"mx","ki",function(){return Z.a9(511)})
u($,"mF","ac",function(){return Z.a9(1)})
u($,"mE","aN",function(){return Z.a9(2)})
u($,"mz","aM",function(){return Z.a9(4)})
u($,"mG","aO",function(){return Z.a9(8)})
u($,"mH","b8",function(){return Z.a9(16)})
u($,"mA","ch",function(){return Z.a9(32)})
u($,"mB","ci",function(){return Z.a9(64)})
u($,"mC","kj",function(){return Z.a9(96)})
u($,"mI","bw",function(){return Z.a9(128)})
u($,"my","aL",function(){return Z.a9(256)})
u($,"mj","k5",function(){return new V.eN(1e-9)})
u($,"mi","y",function(){return $.k5()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.bR,ArrayBufferView:H.bR,Float32Array:H.bQ,Float64Array:H.bQ,Int16Array:H.fB,Int32Array:H.fC,Int8Array:H.fD,Uint16Array:H.fE,Uint32Array:H.fF,Uint8ClampedArray:H.cO,CanvasPixelArray:H.cO,Uint8Array:H.fG,HTMLAudioElement:W.l,HTMLBRElement:W.l,HTMLBaseElement:W.l,HTMLBodyElement:W.l,HTMLButtonElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLDivElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLInputElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMediaElement:W.l,HTMLMenuElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTableElement:W.l,HTMLTableRowElement:W.l,HTMLTableSectionElement:W.l,HTMLTemplateElement:W.l,HTMLTextAreaElement:W.l,HTMLTimeElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLVideoElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLFrameSetElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,AccessibleNodeList:W.ef,HTMLAnchorElement:W.eh,HTMLAreaElement:W.ei,Blob:W.cn,HTMLCanvasElement:W.bd,CDATASection:W.aP,CharacterData:W.aP,Comment:W.aP,ProcessingInstruction:W.aP,Text:W.aP,CSSPerspective:W.ey,CSSCharsetRule:W.F,CSSConditionRule:W.F,CSSFontFaceRule:W.F,CSSGroupingRule:W.F,CSSImportRule:W.F,CSSKeyframeRule:W.F,MozCSSKeyframeRule:W.F,WebKitCSSKeyframeRule:W.F,CSSKeyframesRule:W.F,MozCSSKeyframesRule:W.F,WebKitCSSKeyframesRule:W.F,CSSMediaRule:W.F,CSSNamespaceRule:W.F,CSSPageRule:W.F,CSSRule:W.F,CSSStyleRule:W.F,CSSSupportsRule:W.F,CSSViewportRule:W.F,CSSStyleDeclaration:W.be,MSStyleCSSProperties:W.be,CSS2Properties:W.be,CSSImageValue:W.a6,CSSKeywordValue:W.a6,CSSNumericValue:W.a6,CSSPositionValue:W.a6,CSSResourceValue:W.a6,CSSUnitValue:W.a6,CSSURLImageValue:W.a6,CSSStyleValue:W.a6,CSSMatrixComponent:W.af,CSSRotation:W.af,CSSScale:W.af,CSSSkew:W.af,CSSTranslation:W.af,CSSTransformComponent:W.af,CSSTransformValue:W.eA,CSSUnparsedValue:W.eB,DataTransferItemList:W.eD,DOMException:W.eF,ClientRectList:W.cv,DOMRectList:W.cv,DOMRectReadOnly:W.cw,DOMStringList:W.eG,DOMTokenList:W.eH,Element:W.P,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.at,FileList:W.eQ,FileWriter:W.eR,HTMLFormElement:W.eV,Gamepad:W.au,History:W.eY,HTMLCollection:W.bG,HTMLFormControlsCollection:W.bG,HTMLOptionsCollection:W.bG,ImageData:W.aS,HTMLImageElement:W.bH,KeyboardEvent:W.bi,Location:W.fb,MediaList:W.fu,MIDIInputMap:W.fv,MIDIOutputMap:W.fx,MimeType:W.aw,MimeTypeArray:W.fz,PointerEvent:W.ai,MouseEvent:W.ai,DragEvent:W.ai,Document:W.B,DocumentFragment:W.B,HTMLDocument:W.B,ShadowRoot:W.B,XMLDocument:W.B,Attr:W.B,DocumentType:W.B,Node:W.B,NodeList:W.cP,RadioNodeList:W.cP,Plugin:W.az,PluginArray:W.fM,RTCStatsReport:W.fU,HTMLSelectElement:W.fX,SourceBuffer:W.aC,SourceBufferList:W.h6,SpeechGrammar:W.aD,SpeechGrammarList:W.h7,SpeechRecognitionResult:W.aE,Storage:W.hc,CSSStyleSheet:W.al,StyleSheet:W.al,TextTrack:W.aG,TextTrackCue:W.am,VTTCue:W.am,TextTrackCueList:W.hi,TextTrackList:W.hj,TimeRanges:W.hr,Touch:W.aH,TouchEvent:W.bo,TouchList:W.hu,TrackDefaultList:W.hv,CompositionEvent:W.b1,FocusEvent:W.b1,TextEvent:W.b1,UIEvent:W.b1,URL:W.hK,VideoTrackList:W.hW,WheelEvent:W.b4,Window:W.c1,DOMWindow:W.c1,CSSRuleList:W.i4,ClientRect:W.dm,DOMRect:W.dm,GamepadList:W.i7,NamedNodeMap:W.dG,MozNamedAttrMap:W.dG,SpeechRecognitionResultList:W.ii,StyleSheetList:W.ij,SVGLength:P.aX,SVGLengthList:P.f7,SVGNumber:P.b_,SVGNumberList:P.fI,SVGPointList:P.fP,SVGStringList:P.hf,SVGAElement:P.k,SVGAnimateElement:P.k,SVGAnimateMotionElement:P.k,SVGAnimateTransformElement:P.k,SVGAnimationElement:P.k,SVGCircleElement:P.k,SVGClipPathElement:P.k,SVGDefsElement:P.k,SVGDescElement:P.k,SVGDiscardElement:P.k,SVGEllipseElement:P.k,SVGFEBlendElement:P.k,SVGFEColorMatrixElement:P.k,SVGFEComponentTransferElement:P.k,SVGFECompositeElement:P.k,SVGFEConvolveMatrixElement:P.k,SVGFEDiffuseLightingElement:P.k,SVGFEDisplacementMapElement:P.k,SVGFEDistantLightElement:P.k,SVGFEFloodElement:P.k,SVGFEFuncAElement:P.k,SVGFEFuncBElement:P.k,SVGFEFuncGElement:P.k,SVGFEFuncRElement:P.k,SVGFEGaussianBlurElement:P.k,SVGFEImageElement:P.k,SVGFEMergeElement:P.k,SVGFEMergeNodeElement:P.k,SVGFEMorphologyElement:P.k,SVGFEOffsetElement:P.k,SVGFEPointLightElement:P.k,SVGFESpecularLightingElement:P.k,SVGFESpotLightElement:P.k,SVGFETileElement:P.k,SVGFETurbulenceElement:P.k,SVGFilterElement:P.k,SVGForeignObjectElement:P.k,SVGGElement:P.k,SVGGeometryElement:P.k,SVGGraphicsElement:P.k,SVGImageElement:P.k,SVGLineElement:P.k,SVGLinearGradientElement:P.k,SVGMarkerElement:P.k,SVGMaskElement:P.k,SVGMetadataElement:P.k,SVGPathElement:P.k,SVGPatternElement:P.k,SVGPolygonElement:P.k,SVGPolylineElement:P.k,SVGRadialGradientElement:P.k,SVGRectElement:P.k,SVGScriptElement:P.k,SVGSetElement:P.k,SVGStopElement:P.k,SVGStyleElement:P.k,SVGElement:P.k,SVGSVGElement:P.k,SVGSwitchElement:P.k,SVGSymbolElement:P.k,SVGTSpanElement:P.k,SVGTextContentElement:P.k,SVGTextElement:P.k,SVGTextPathElement:P.k,SVGTextPositioningElement:P.k,SVGTitleElement:P.k,SVGUseElement:P.k,SVGViewElement:P.k,SVGGradientElement:P.k,SVGComponentTransferFunctionElement:P.k,SVGFEDropShadowElement:P.k,SVGMPathElement:P.k,SVGTransform:P.b0,SVGTransformList:P.hw,AudioBuffer:P.ek,AudioParamMap:P.el,AudioTrackList:P.en,AudioContext:P.bb,webkitAudioContext:P.bb,BaseAudioContext:P.bb,OfflineAudioContext:P.fJ,WebGL2RenderingContext:P.cV,SQLResultSetRowList:P.h9})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.cM.$nativeSuperclassTag="ArrayBufferView"
H.c2.$nativeSuperclassTag="ArrayBufferView"
H.c3.$nativeSuperclassTag="ArrayBufferView"
H.bQ.$nativeSuperclassTag="ArrayBufferView"
H.c4.$nativeSuperclassTag="ArrayBufferView"
H.c5.$nativeSuperclassTag="ArrayBufferView"
H.cN.$nativeSuperclassTag="ArrayBufferView"
W.c6.$nativeSuperclassTag="EventTarget"
W.c7.$nativeSuperclassTag="EventTarget"
W.c9.$nativeSuperclassTag="EventTarget"
W.ca.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(M.jZ,[])
else M.jZ([])})})()
//# sourceMappingURL=test.dart.js.map
