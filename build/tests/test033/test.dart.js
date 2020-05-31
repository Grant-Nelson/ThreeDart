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
a[c]=function(){a[c]=function(){H.mi(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jf"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jf"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jf(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={j_:function j_(){},
kJ:function(a,b,c,d){if(!!a.$in)return new H.eM(a,b,[c,d])
return new H.bO(a,b,[c,d])},
kB:function(){return new P.hg("No element")},
l4:function(a,b){var u=J.bc(a)
if(typeof u!=="number")return u.C()
H.cZ(a,0,u-1,b)},
cZ:function(a,b,c,d){if(c-b<=32)H.l3(a,b,c,d)
else H.l2(a,b,c,d)},
l3:function(a,b,c,d){var u,t,s,r,q,p
for(u=b+1,t=J.b9(a);u<=c;++u){s=t.h(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.h(a,r-1),s)
if(typeof q!=="number")return q.Z()
q=q>0}else q=!1
if(!q)break
p=r-1
t.k(a,r,t.h(a,p))
r=p}t.k(a,r,s)}},
l2:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j=C.c.X(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.X(a4+a5,2),f=g-j,e=g+j,d=J.b9(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
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
if(J.F(a6.$2(b,a0),0)){for(r=t;r<=s;++r){q=d.h(a3,r)
p=a6.$2(q,b)
if(p===0)continue
if(typeof p!=="number")return p.a2()
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
if(typeof l!=="number")return l.a2()
if(l<0){if(r!==t){d.k(a3,r,d.h(a3,t))
d.k(a3,t,q)}++t}else{k=a6.$2(q,a0)
if(typeof k!=="number")return k.Z()
if(k>0)for(;!0;){p=a6.$2(d.h(a3,s),a0)
if(typeof p!=="number")return p.Z()
if(p>0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.a2()
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
H.cZ(a3,a4,t-2,a6)
H.cZ(a3,s+2,a5,a6)
if(m)return
if(t<i&&s>h){for(;J.F(a6.$2(d.h(a3,t),b),0);)++t
for(;J.F(a6.$2(d.h(a3,s),a0),0);)--s
for(r=t;r<=s;++r){q=d.h(a3,r)
if(a6.$2(q,b)===0){if(r!==t){d.k(a3,r,d.h(a3,t))
d.k(a3,t,q)}++t}else if(a6.$2(q,a0)===0)for(;!0;)if(a6.$2(d.h(a3,s),a0)===0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.a2()
o=s-1
if(p<0){d.k(a3,r,d.h(a3,t))
n=t+1
d.k(a3,t,d.h(a3,s))
d.k(a3,s,q)
t=n}else{d.k(a3,r,d.h(a3,s))
d.k(a3,s,q)}s=o
break}}H.cZ(a3,t,s,a6)}else H.cZ(a3,t,s,a6)},
M:function M(a){this.a=a},
n:function n(){},
bM:function bM(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bO:function bO(a,b,c){this.a=a
this.b=b
this.$ti=c},
eM:function eM(a,b,c){this.a=a
this.b=b
this.$ti=c},
cJ:function cJ(a,b){this.a=null
this.b=a
this.c=b},
i2:function i2(a,b,c){this.a=a
this.b=b
this.$ti=c},
i3:function i3(a,b){this.a=a
this.b=b},
cz:function cz(){},
hL:function hL(){},
dd:function dd(){},
ci:function(a){var u,t=H.mj(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
m4:function(a){return v.types[a]},
m9:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.V(a).$ix},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a5(a)
if(typeof u!=="string")throw H.c(H.aJ(a))
return u},
bV:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bW:function(a){return H.kN(a)+H.jT(H.ch(a),0,null)},
kN:function(a){var u,t,s,r,q,p,o,n=J.V(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.F||!!n.$ic2){r=C.m(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.ci(t.length>1&&C.b.bf(t,0)===36?C.b.aw(t,1):t)},
jE:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
kX:function(a){var u,t,s,r=H.b([],[P.v])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.m)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aJ(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.b3(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.c(H.aJ(s))}return H.jE(r)},
kW:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aJ(s))
if(s<0)throw H.c(H.aJ(s))
if(s>65535)return H.kX(a)}return H.jE(a)},
kV:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.b3(u,10))>>>0,56320|u&1023)}throw H.c(P.am(a,0,1114111,null,null))},
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
r:function(a){throw H.c(H.aJ(a))},
f:function(a,b){if(a==null)J.bc(a)
throw H.c(H.bv(a,b))},
bv:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ad(!0,b,s,null)
u=J.bc(a)
if(!(b<0)){if(typeof u!=="number")return H.r(u)
t=b>=u}else t=!0
if(t)return P.J(b,a,s,null,u)
return P.cU(b,s)},
lY:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bn(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bn(a,c,!0,b,"end",u)
return new P.ad(!0,b,"end",null)},
aJ:function(a){return new P.ad(!0,a,null,null)},
lU:function(a){if(typeof a!=="number")throw H.c(H.aJ(a))
return a},
c:function(a){var u
if(a==null)a=new P.cR()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.k5})
u.name=""}else u.toString=H.k5
return u},
k5:function(){return J.a5(this.dartException)},
p:function(a){throw H.c(a)},
m:function(a){throw H.c(P.bD(a))},
ap:function(a){var u,t,s,r,q,p
a=H.k2(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.t])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hA(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hB:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
jL:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
jA:function(a,b){return new H.fL(a,b==null?null:b.method)},
j0:function(a,b){var u=b==null,t=u?null:b.method
return new H.f9(a,t,u?null:b.receiver)},
eg:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.iM(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.b3(t,16)&8191)===10)switch(s){case 438:return f.$1(H.j0(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.jA(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.k8()
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
if(i!=null)return f.$1(H.j0(u,i))
else{i=q.a8(u)
if(i!=null){i.method="call"
return f.$1(H.j0(u,i))}else{i=p.a8(u)
if(i==null){i=o.a8(u)
if(i==null){i=n.a8(u)
if(i==null){i=m.a8(u)
if(i==null){i=l.a8(u)
if(i==null){i=o.a8(u)
if(i==null){i=k.a8(u)
if(i==null){i=j.a8(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.jA(u,i))}}return f.$1(new H.hK(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.d0()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.ad(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.d0()
return a},
ji:function(a){var u
if(a==null)return new H.dU(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dU(a)},
m1:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.k(0,a[u],a[t])}return b},
m8:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.o("Unsupported number of arguments for wrapped closure"))},
bu:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.m8)
a.$identity=u
return u},
kw:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hh().constructor.prototype):Object.create(new H.bz(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ae
if(typeof t!=="number")return t.A()
$.ae=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.jr(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.ks(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.jr(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
ks:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.m4,a)
if(typeof a=="function")if(b)return a
else{u=c?H.jq:H.iQ
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.c("Error in functionType of tearoff")},
kt:function(a,b,c,d){var u=H.iQ
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jr:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.kv(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.kt(t,!r,u,b)
if(t===0){r=$.ae
if(typeof r!=="number")return r.A()
$.ae=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bA
return new Function(r+H.e(q==null?$.bA=H.es("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ae
if(typeof r!=="number")return r.A()
$.ae=r+1
o+=r
r="return function("+o+"){return this."
q=$.bA
return new Function(r+H.e(q==null?$.bA=H.es("self"):q)+"."+H.e(u)+"("+o+");}")()},
ku:function(a,b,c,d){var u=H.iQ,t=H.jq
switch(b?-1:a){case 0:throw H.c(H.l0("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
kv:function(a,b){var u,t,s,r,q,p,o,n=$.bA
if(n==null)n=$.bA=H.es("self")
u=$.jp
if(u==null)u=$.jp=H.es("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.ku(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.ae
if(typeof u!=="number")return u.A()
$.ae=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.ae
if(typeof u!=="number")return u.A()
$.ae=u+1
return new Function(n+u+"}")()},
jf:function(a,b,c,d,e,f,g){return H.kw(a,b,c,d,!!e,!!f,g)},
iQ:function(a){return a.a},
jq:function(a){return a.c},
es:function(a){var u,t,s,r=new H.bz("self","target","receiver","name"),q=J.iY(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
md:function(a,b){throw H.c(H.kr(a,H.ci(b.substring(2))))},
h:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.V(a)[b]
else u=!0
if(u)return a
H.md(a,b)},
m_:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
kr:function(a,b){return new H.et("CastError: "+P.iV(a)+": type '"+H.e(H.lQ(a))+"' is not a subtype of type '"+b+"'")},
lQ:function(a){var u,t=J.V(a)
if(!!t.$ibC){u=H.m_(t)
if(u!=null)return H.me(u)
return"Closure"}return H.bW(a)},
mi:function(a){throw H.c(new P.eF(a))},
l0:function(a){return new H.h0(a)},
jY:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
ch:function(a){if(a==null)return
return a.$ti},
mQ:function(a,b,c){return H.iL(a["$a"+H.e(c)],H.ch(b))},
m3:function(a,b,c,d){var u=H.iL(a["$a"+H.e(c)],H.ch(b))
return u==null?null:u[d]},
iE:function(a,b,c){var u=H.iL(a["$a"+H.e(b)],H.ch(a))
return u==null?null:u[c]},
ar:function(a,b){var u=H.ch(a)
return u==null?null:u[b]},
me:function(a){return H.b7(a,null)},
b7:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.ci(a[0].name)+H.jT(a,1,b)
if(typeof a=="function")return H.ci(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.f(b,t)
return H.e(b[t])}if('func' in a)return H.ll(a,b)
if('futureOr' in a)return"FutureOr<"+H.b7("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
ll:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.b([],[P.t])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.f(a0,m)
p=C.b.A(p,a0[m])
l=u[q]
if(l!=null&&l!==P.a0)p+=" extends "+H.b7(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.b7(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.b7(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.b7(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.m0(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.b7(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
jT:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.aF("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.b7(p,c)}return"<"+u.i(0)+">"},
iL:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
mO:function(a,b,c){return a.apply(b,H.iL(J.V(b)["$a"+H.e(c)],H.ch(b)))},
mP:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
ma:function(a){var u,t,s,r,q=$.jZ.$1(a),p=$.iC[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.iI[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.jW.$2(a,q)
if(q!=null){p=$.iC[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.iI[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.iJ(u)
$.iC[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.iI[q]=u
return u}if(s==="-"){r=H.iJ(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.k0(a,u)
if(s==="*")throw H.c(P.jM(q))
if(v.leafTags[q]===true){r=H.iJ(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.k0(a,u)},
k0:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jk(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
iJ:function(a){return J.jk(a,!1,null,!!a.$ix)},
mb:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.iJ(u)
else return J.jk(u,c,null,null)},
m6:function(){if(!0===$.jj)return
$.jj=!0
H.m7()},
m7:function(){var u,t,s,r,q,p,o,n
$.iC=Object.create(null)
$.iI=Object.create(null)
H.m5()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.k1.$1(q)
if(p!=null){o=H.mb(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
m5:function(){var u,t,s,r,q,p,o=C.w()
o=H.bt(C.x,H.bt(C.y,H.bt(C.n,H.bt(C.n,H.bt(C.z,H.bt(C.A,H.bt(C.B(C.m),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.jZ=new H.iF(r)
$.jW=new H.iG(q)
$.k1=new H.iH(p)},
bt:function(a,b){return a(b)||b},
kE:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.c(new P.eZ("Illegal RegExp pattern ("+String(p)+")",a))},
k3:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
lZ:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
k2:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
k4:function(a,b,c){var u=H.mg(a,b,c)
return u},
mg:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.k2(b),'g'),H.lZ(c))},
hA:function hA(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fL:function fL(a,b){this.a=a
this.b=b},
f9:function f9(a,b,c){this.a=a
this.b=b
this.c=c},
hK:function hK(a){this.a=a},
iM:function iM(a){this.a=a},
dU:function dU(a){this.a=a
this.b=null},
bC:function bC(){},
hn:function hn(){},
hh:function hh(){},
bz:function bz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
et:function et(a){this.a=a},
h0:function h0(a){this.a=a},
H:function H(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
f8:function f8(a){this.a=a},
fc:function fc(a,b){this.a=a
this.b=b
this.c=null},
bk:function bk(a,b){this.a=a
this.$ti=b},
fd:function fd(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
iF:function iF(a){this.a=a},
iG:function iG(a){this.a=a},
iH:function iH(a){this.a=a},
f7:function f7(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ce:function(a){return a},
aq:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bv(b,a))},
lk:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.lY(a,b,c))
return b},
bT:function bT(){},
cN:function cN(){},
bS:function bS(){},
cO:function cO(){},
fF:function fF(){},
fG:function fG(){},
fH:function fH(){},
fI:function fI(){},
fJ:function fJ(){},
cP:function cP(){},
fK:function fK(){},
c4:function c4(){},
c5:function c5(){},
c6:function c6(){},
c7:function c7(){},
m0:function(a){return J.ju(a?Object.keys(a):[],null)},
mj:function(a){return v.mangledGlobalNames[a]},
mc:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jk:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iD:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.jj==null){H.m6()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.jM("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.jn()]
if(r!=null)return r
r=H.ma(a)
if(r!=null)return r
if(typeof a=="function")return C.H
u=Object.getPrototypeOf(a)
if(u==null)return C.q
if(u===Object.prototype)return C.q
if(typeof s=="function"){Object.defineProperty(s,$.jn(),{value:C.j,enumerable:false,writable:true,configurable:true})
return C.j}return C.j},
kC:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.iP(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.am(a,0,4294967295,"length",null))
return J.ju(new Array(a),b)},
ju:function(a,b){return J.iY(H.b(a,[b]))},
iY:function(a){a.fixed$length=Array
return a},
kD:function(a,b){return J.cm(a,b)},
V:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cD.prototype
return J.cC.prototype}if(typeof a=="string")return J.bi.prototype
if(a==null)return J.cE.prototype
if(typeof a=="boolean")return J.f6.prototype
if(a.constructor==Array)return J.aW.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aX.prototype
return a}if(a instanceof P.a0)return a
return J.iD(a)},
b9:function(a){if(typeof a=="string")return J.bi.prototype
if(a==null)return a
if(a.constructor==Array)return J.aW.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aX.prototype
return a}if(a instanceof P.a0)return a
return J.iD(a)},
jg:function(a){if(a==null)return a
if(a.constructor==Array)return J.aW.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aX.prototype
return a}if(a instanceof P.a0)return a
return J.iD(a)},
m2:function(a){if(typeof a=="number")return J.bK.prototype
if(typeof a=="string")return J.bi.prototype
if(a==null)return a
if(!(a instanceof P.a0))return J.c2.prototype
return a},
jh:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aX.prototype
return a}if(a instanceof P.a0)return a
return J.iD(a)},
F:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.V(a).n(a,b)},
cl:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.m9(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.b9(a).h(a,b)},
km:function(a,b,c){return J.jh(a).eU(a,b,c)},
kn:function(a,b,c,d){return J.jh(a).f8(a,b,c,d)},
cm:function(a,b){return J.m2(a).aG(a,b)},
iN:function(a,b){return J.b9(a).N(a,b)},
iO:function(a,b){return J.jg(a).D(a,b)},
ko:function(a,b){return J.jg(a).G(a,b)},
by:function(a){return J.V(a).gF(a)},
bb:function(a){return J.jg(a).gV(a)},
bc:function(a){return J.b9(a).gj(a)},
kp:function(a,b){return J.jh(a).fT(a,b)},
a5:function(a){return J.V(a).i(a)},
a:function a(){},
f6:function f6(){},
cE:function cE(){},
cF:function cF(){},
fP:function fP(){},
c2:function c2(){},
aX:function aX(){},
aW:function aW(a){this.$ti=a},
iZ:function iZ(a){this.$ti=a},
W:function W(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bK:function bK(){},
cD:function cD(){},
cC:function cC(){},
bi:function bi(){}},P={
l9:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.lR()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bu(new P.i5(s),1)).observe(u,{childList:true})
return new P.i4(s,u,t)}else if(self.setImmediate!=null)return P.lS()
return P.lT()},
la:function(a){self.scheduleImmediate(H.bu(new P.i6(a),0))},
lb:function(a){self.setImmediate(H.bu(new P.i7(a),0))},
lc:function(a){P.j8(C.h,a)},
j8:function(a,b){var u=C.c.X(a.a,1000)
return P.lh(u<0?0:u,b)},
jK:function(a,b){var u=C.c.X(a.a,1000)
return P.li(u<0?0:u,b)},
lh:function(a,b){var u=new P.e_()
u.dE(a,b)
return u},
li:function(a,b){var u=new P.e_()
u.dF(a,b)
return u},
mM:function(a){return new P.br(a,1)},
ld:function(){return C.N},
le:function(a){return new P.br(a,3)},
lo:function(a,b){return new P.ir(a,[b])},
lK:function(){var u,t
for(;u=$.bs,u!=null;){$.cg=null
t=u.b
$.bs=t
if(t==null)$.cf=null
u.a.$0()}},
lP:function(){$.jd=!0
try{P.lK()}finally{$.cg=null
$.jd=!1
if($.bs!=null)$.jo().$1(P.jX())}},
lN:function(a){var u=new P.dl(a)
if($.bs==null){$.bs=$.cf=u
if(!$.jd)$.jo().$1(P.jX())}else $.cf=$.cf.b=u},
lO:function(a){var u,t,s=$.bs
if(s==null){P.lN(a)
$.cg=$.cf
return}u=new P.dl(a)
t=$.cg
if(t==null){u.b=s
$.bs=$.cg=u}else{u.b=t.b
$.cg=t.b=u
if(u.b==null)$.cf=u}},
jJ:function(a,b){var u=$.ab
if(u===C.e)return P.j8(a,b)
return P.j8(a,u.fc(b))},
l6:function(a,b){var u=$.ab
if(u===C.e)return P.jK(a,b)
return P.jK(a,u.cE(b,P.d7))},
jU:function(a,b,c,d,e){var u={}
u.a=d
P.lO(new P.iA(u,e))},
lL:function(a,b,c,d){var u,t=$.ab
if(t===c)return d.$0()
$.ab=c
u=t
try{t=d.$0()
return t}finally{$.ab=u}},
lM:function(a,b,c,d,e){var u,t=$.ab
if(t===c)return d.$1(e)
$.ab=c
u=t
try{t=d.$1(e)
return t}finally{$.ab=u}},
i5:function i5(a){this.a=a},
i4:function i4(a,b,c){this.a=a
this.b=b
this.c=c},
i6:function i6(a){this.a=a},
i7:function i7(a){this.a=a},
e_:function e_(){this.c=0},
it:function it(a,b){this.a=a
this.b=b},
is:function is(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
br:function br(a,b){this.a=a
this.b=b},
ca:function ca(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ir:function ir(a,b){this.a=a
this.$ti=b},
dl:function dl(a){this.a=a
this.b=null},
d3:function d3(){},
hk:function hk(){},
d7:function d7(){},
iv:function iv(){},
iA:function iA(a,b){this.a=a
this.b=b},
ik:function ik(){},
il:function il(a,b){this.a=a
this.b=b},
im:function im(a,b,c){this.a=a
this.b=b
this.c=c},
kG:function(a,b){return new H.H([a,b])},
kH:function(a){return H.m1(a,new H.H([null,null]))},
jv:function(a){return new P.ih([a])},
jc:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
lg:function(a,b){var u=new P.dC(a,b)
u.c=a.e
return u},
kA:function(a,b,c){var u,t
if(P.je(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.t])
$.a2.push(a)
try{P.ln(a,u)}finally{if(0>=$.a2.length)return H.f($.a2,-1)
$.a2.pop()}t=P.jH(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
iX:function(a,b,c){var u,t
if(P.je(a))return b+"..."+c
u=new P.aF(b)
$.a2.push(a)
try{t=u
t.a=P.jH(t.a,a,", ")}finally{if(0>=$.a2.length)return H.f($.a2,-1)
$.a2.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
je:function(a){var u,t
for(u=$.a2.length,t=0;t<u;++t)if(a===$.a2[t])return!0
return!1},
ln:function(a,b){var u,t,s,r,q,p,o,n=a.gV(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.u())return
u=H.e(n.gL(n))
b.push(u)
m+=u.length+2;++l}if(!n.u()){if(l<=5)return
if(0>=b.length)return H.f(b,-1)
t=b.pop()
if(0>=b.length)return H.f(b,-1)
s=b.pop()}else{r=n.gL(n);++l
if(!n.u()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.f(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gL(n);++l
for(;n.u();r=q,q=p){p=n.gL(n);++l
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
jw:function(a){var u,t={}
if(P.je(a))return"{...}"
u=new P.aF("")
try{$.a2.push(a)
u.a+="{"
t.a=!0
J.ko(a,new P.fi(t,u))
u.a+="}"}finally{if(0>=$.a2.length)return H.f($.a2,-1)
$.a2.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
ih:function ih(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ii:function ii(a){this.a=a
this.c=this.b=null},
dC:function dC(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
f4:function f4(){},
fe:function fe(){},
q:function q(){},
fh:function fh(){},
fi:function fi(a,b){this.a=a
this.b=b},
Z:function Z(){},
io:function io(){},
dD:function dD(){},
ev:function ev(){},
eA:function eA(){},
eN:function eN(){},
hO:function hO(){},
hP:function hP(){},
iu:function iu(a){this.b=0
this.c=a},
kz:function(a){if(a instanceof H.bC)return a.i(0)
return"Instance of '"+H.e(H.bW(a))+"'"},
kI:function(a,b,c){var u,t,s=J.kC(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
j1:function(a,b,c){var u,t=H.b([],[c])
for(u=J.bb(a);u.u();)t.push(u.gL(u))
if(b)return t
return J.iY(t)},
j7:function(a){var u,t=a.length,s=P.j5(0,null,t)
if(typeof s!=="number")return s.a2()
u=s<t
return H.kW(u?C.a.dn(a,0,s):a)},
kY:function(a){return new H.f7(a,H.kE(a,!1,!0,!1,!1,!1))},
jH:function(a,b,c){var u=J.bb(b)
if(!u.u())return a
if(c.length===0){do a+=H.e(u.gL(u))
while(u.u())}else{a+=H.e(u.gL(u))
for(;u.u();)a=a+c+H.e(u.gL(u))}return a},
lj:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.o){u=$.kl().b
u=u.test(b)}else u=!1
if(u)return b
t=C.D.fg(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.f(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.kV(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
kx:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
ky:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cu:function(a){if(a>=10)return""+a
return"0"+a},
jt:function(a){return new P.aR(1000*a)},
iV:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a5(a)
if(typeof a==="string")return JSON.stringify(a)
return P.kz(a)},
kq:function(a){return new P.ad(!1,null,null,a)},
iP:function(a,b,c){return new P.ad(!0,a,b,c)},
cU:function(a,b){return new P.bn(null,null,!0,a,b,"Value not in range")},
am:function(a,b,c,d,e){return new P.bn(b,c,!0,a,d,"Invalid value")},
j5:function(a,b,c){var u
if(typeof a!=="number")return H.r(a)
if(0<=a){if(typeof c!=="number")return H.r(c)
u=a>c}else u=!0
if(u)throw H.c(P.am(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.r(c)
u=b>c}else u=!0
if(u)throw H.c(P.am(b,a,c,"end",null))
return b}return c},
jF:function(a,b){if(typeof a!=="number")return a.a2()
if(a<0)throw H.c(P.am(a,0,null,b,null))},
J:function(a,b,c,d,e){var u=e==null?J.bc(b):e
return new P.f3(u,!0,a,c,"Index out of range")},
w:function(a){return new P.hM(a)},
jM:function(a){return new P.hJ(a)},
bD:function(a){return new P.ez(a)},
o:function(a){return new P.dv(a)},
jm:function(a){H.mc(a)},
b8:function b8(){},
a7:function a7(a,b){this.a=a
this.b=b},
K:function K(){},
aR:function aR(a){this.a=a},
eK:function eK(){},
eL:function eL(){},
bg:function bg(){},
cR:function cR(){},
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
f3:function f3(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hM:function hM(a){this.a=a},
hJ:function hJ(a){this.a=a},
hg:function hg(a){this.a=a},
ez:function ez(a){this.a=a},
fO:function fO(){},
d0:function d0(){},
eF:function eF(a){this.a=a},
dv:function dv(a){this.a=a},
eZ:function eZ(a,b){this.a=a
this.b=b},
v:function v(){},
j:function j(){},
f5:function f5(){},
aZ:function aZ(){},
bN:function bN(){},
b0:function b0(){},
a4:function a4(){},
a0:function a0(){},
t:function t(){},
aF:function aF(a){this.a=a},
lX:function(a){var u,t=J.V(a)
if(!!t.$iaT){u=t.gcJ(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.e4(a.data,a.height,a.width)},
lW:function(a){if(a instanceof P.e4)return{data:a.a,height:a.b,width:a.c}
return a},
aK:function(a){var u,t,s,r,q
if(a==null)return
u=P.kG(P.t,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){q=t[r]
u.k(0,q,a[q])}return u},
lV:function(a){var u={}
a.G(0,new P.iB(u))
return u},
e4:function e4(a,b,c){this.a=a
this.b=b
this.c=c},
iB:function iB(a){this.a=a},
eV:function eV(a,b){this.a=a
this.b=b},
eW:function eW(){},
eX:function eX(){},
ig:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lf:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ij:function ij(){},
a3:function a3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aY:function aY(){},
fb:function fb(){},
b1:function b1(){},
fM:function fM(){},
fT:function fT(){},
hl:function hl(){},
k:function k(){},
b3:function b3(){},
hz:function hz(){},
dA:function dA(){},
dB:function dB(){},
dL:function dL(){},
dM:function dM(){},
dW:function dW(){},
dX:function dX(){},
e2:function e2(){},
e3:function e3(){},
em:function em(){},
en:function en(){},
eo:function eo(a){this.a=a},
ep:function ep(){},
bd:function bd(){},
fN:function fN(){},
dm:function dm(){},
cW:function cW(){},
hf:function hf(){},
dS:function dS(){},
dT:function dT(){}},W={
iS:function(){var u=document.createElement("canvas")
return u},
iU:function(a){return"wheel"},
ie:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jS:function(a,b,c,d){var u=W.ie(W.ie(W.ie(W.ie(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
R:function(a,b,c,d){var u=W.jV(new W.ic(c),W.i)
if(u!=null&&!0)J.kn(a,b,u,!1)
return new W.ib(a,b,u,!1)},
jV:function(a,b){var u=$.ab
if(u===C.e)return a
return u.cE(a,b)},
l:function l(){},
eh:function eh(){},
ej:function ej(){},
ek:function ek(){},
cp:function cp(){},
bf:function bf(){},
aP:function aP(){},
eB:function eB(){},
G:function G(){},
bF:function bF(){},
eC:function eC(){},
a6:function a6(){},
ag:function ag(){},
eD:function eD(){},
eE:function eE(){},
eG:function eG(){},
eH:function eH(){},
cw:function cw(){},
cx:function cx(){},
eI:function eI(){},
eJ:function eJ(){},
i9:function i9(a,b){this.a=a
this.b=b},
T:function T(){},
i:function i(){},
d:function d(){},
au:function au(){},
eT:function eT(){},
eU:function eU(){},
eY:function eY(){},
av:function av(){},
f1:function f1(){},
bI:function bI(){},
aT:function aT(){},
bJ:function bJ(){},
bj:function bj(){},
ff:function ff(){},
fy:function fy(){},
fz:function fz(){},
fA:function fA(a){this.a=a},
fB:function fB(){},
fC:function fC(a){this.a=a},
aw:function aw(){},
fD:function fD(){},
ak:function ak(){},
i8:function i8(a){this.a=a},
C:function C(){},
cQ:function cQ(){},
az:function az(){},
fQ:function fQ(){},
fZ:function fZ(){},
h_:function h_(a){this.a=a},
h2:function h2(){},
aC:function aC(){},
hc:function hc(){},
aD:function aD(){},
hd:function hd(){},
aE:function aE(){},
hi:function hi(){},
hj:function hj(a){this.a=a},
an:function an(){},
aG:function aG(){},
ao:function ao(){},
ho:function ho(){},
hp:function hp(){},
hu:function hu(){},
aH:function aH(){},
bo:function bo(){},
hx:function hx(){},
hy:function hy(){},
b4:function b4(){},
hN:function hN(){},
i1:function i1(){},
b6:function b6(){},
c3:function c3(){},
ia:function ia(){},
dp:function dp(){},
id:function id(){},
dI:function dI(){},
ip:function ip(){},
iq:function iq(){},
ib:function ib(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
ic:function ic(a){this.a=a},
I:function I(){},
cA:function cA(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
dn:function dn(){},
dq:function dq(){},
dr:function dr(){},
ds:function ds(){},
dt:function dt(){},
dw:function dw(){},
dx:function dx(){},
dy:function dy(){},
dz:function dz(){},
dE:function dE(){},
dF:function dF(){},
dG:function dG(){},
dH:function dH(){},
dJ:function dJ(){},
dK:function dK(){},
dN:function dN(){},
dO:function dO(){},
dP:function dP(){},
c8:function c8(){},
c9:function c9(){},
dQ:function dQ(){},
dR:function dR(){},
dV:function dV(){},
dY:function dY(){},
dZ:function dZ(){},
cb:function cb(){},
cc:function cc(){},
e0:function e0(){},
e1:function e1(){},
e5:function e5(){},
e6:function e6(){},
e7:function e7(){},
e8:function e8(){},
e9:function e9(){},
ea:function ea(){},
eb:function eb(){},
ec:function ec(){},
ed:function ed(){},
ee:function ee(){}},K={
U:function(a){var u=new K.h3()
u.dw(a)
return u},
ei:function ei(){},
cB:function cB(){},
cK:function cK(){},
ay:function ay(){this.a=null},
h3:function h3(){this.a=null},
k_:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9="testCanvas",b0=null,b1="modifiers",b2=V.l1("Test 033"),b3=W.iS()
b3.className="pageLargeCanvas"
b3.id=a9
b2.a.appendChild(b3)
u=[P.t]
b2.cz(H.b(["Test of a Stereoscopic scene."],u))
b2.cz(H.b(["\xab[Back to Tests|../]"],u))
t=document.getElementById(a9)
if(t==null)H.p(P.o("Failed to find an element with the identifier, testCanvas."))
s=E.l5(t,!0,!0,!0,!1)
r=F.j6()
F.cd(r,b0,b0,1,1,1,0,0,1)
F.cd(r,b0,b0,1,1,0,1,0,3)
F.cd(r,b0,b0,1,1,0,0,1,2)
F.cd(r,b0,b0,1,1,-1,0,0,0)
F.cd(r,b0,b0,1,1,0,-1,0,0)
F.cd(r,b0,b0,1,1,0,0,-1,3)
r.al()
q=E.eO(r)
p=E.eO(b0)
for(o=-1.6;o<=1.7;o+=0.8)for(n=-1.6;n<=1.7;n+=0.8)for(m=-1.6;m<=1.7;m+=0.8){l=new V.aa(1,0,0,o,0,1,0,n,0,0,1,m,0,0,0,1).q(0,new V.aa(0.2,0,0,0,0,0.2,0,0,0,0,0.2,0,0,0,0,1))
k=E.eO(b0)
b2=new U.bE()
b2.sO(0,l)
k.sd5(b2)
b2=k.y
u=[H.ar(b2,0)]
if(b2.aP(H.b([q],u))){j=b2.a
i=j.length
j.push(q)
u=H.b([q],u)
b2=b2.c
if(b2!=null)b2.$2(i,u)}b2=p.y
u=[H.ar(b2,0)]
if(b2.aP(H.b([k],u))){j=b2.a
i=j.length
j.push(k)
u=H.b([k],u)
b2=b2.c
if(b2!=null)b2.$2(i,u)}}h=s.f.d2("../resources/diceColor")
g=new O.cL()
b2=O.ew(V.aa)
g.e=b2
b2.aJ(g.ge5(),g.ge7())
b2=new O.ai(g,"emission")
b2.c=new A.S(!1,!1,!1)
b2.f=new V.N(0,0,0)
g.f=b2
b2=new O.ai(g,"ambient")
b2.c=new A.S(!1,!1,!1)
b2.f=new V.N(0,0,0)
g.r=b2
b2=new O.ai(g,"diffuse")
b2.c=new A.S(!1,!1,!1)
b2.f=new V.N(0,0,0)
g.x=b2
b2=new O.ai(g,"invDiffuse")
b2.c=new A.S(!1,!1,!1)
b2.f=new V.N(0,0,0)
g.y=b2
b2=new O.fp(g,"specular")
b2.c=new A.S(!1,!1,!1)
b2.f=new V.N(0,0,0)
b2.ch=100
g.z=b2
b2=new O.fl(g,"bump")
b2.c=new A.S(!1,!1,!1)
g.Q=b2
g.ch=null
b2=new O.ai(g,"reflect")
b2.c=new A.S(!1,!1,!1)
b2.f=new V.N(0,0,0)
g.cx=b2
b2=new O.fo(g,"refract")
b2.c=new A.S(!1,!1,!1)
b2.f=new V.N(0,0,0)
b2.ch=1
g.cy=b2
b2=new O.fk(g,"alpha")
b2.c=new A.S(!1,!1,!1)
b2.f=1
g.db=b2
b2=new D.cH()
b2.bd(D.Y)
b2.e=H.b([],[D.eq])
b2.f=H.b([],[D.aQ])
b2.r=H.b([],[D.fR])
b2.x=H.b([],[D.he])
b2.z=b2.y=null
b2.c1(b2.ge1(),b2.geE(),b2.geI())
g.dx=b2
u=new O.fn()
u.b=new V.as(0,0,0,0)
u.c=1
u.d=10
u.e=!1
g.dy=u
u=b2.y
b2=u==null?b2.y=D.A():u
b2.l(0,g.geW())
b2=g.dx
u=b2.z
b2=u==null?b2.z=D.A():u
b2.l(0,g.gaB())
g.fr=null
b2=g.dx
u=U.cs(V.jy(-1,-1,-1,b0))
b2.l(0,D.js(new V.N(1,0.9,0.9),u))
b2=g.dx
u=U.cs(V.jy(1,1,2,b0))
b2.l(0,D.js(new V.N(0.2,0.2,0.35),u))
b2=g.r
b2.saF(0,new V.N(0.2,0.2,0.2))
g.r.saZ(h)
b2=g.x
b2.saF(0,new V.N(0.8,0.8,0.8))
g.x.saZ(h)
b2=g.z
b2.saF(0,new V.N(0.7,0.7,0.7))
b2=g.z
b2.bw(new A.S(!0,!1,b2.c.c))
b2.cs(10)
g.Q.saZ(s.f.d2("../resources/diceBumpMap"))
f=U.iW(b0)
b2=s.x
u=new U.dg()
j=U.iT()
j.sc_(0,!0)
j.sbS(6.283185307179586)
j.sbU(0)
j.sa3(0,0)
j.sbT(100)
j.sP(0)
j.sbE(0.5)
u.b=j
e=u.gay()
j.gm().l(0,e)
j=U.iT()
j.sc_(0,!0)
j.sbS(6.283185307179586)
j.sbU(0)
j.sa3(0,0)
j.sbT(100)
j.sP(0)
j.sbE(0.5)
u.c=j
j.gm().l(0,e)
u.d=null
u.r=u.f=u.e=!1
u.y=u.x=2.5
u.Q=4
u.ch=u.cx=!1
u.db=u.cy=0
u.dx=null
u.dy=0
u.fx=u.fr=null
d=new X.a8(!1,!1,!1)
c=u.d
u.d=d
j=new D.u(b1,c,d)
j.b=!0
u.J(j)
j=u.f
if(j!==!1){u.f=!1
j=new D.u("invertX",j,!1)
j.b=!0
u.J(j)}j=u.r
if(j!==!1){u.r=!1
j=new D.u("invertY",j,!1)
j.b=!0
u.J(j)}u.aR(b2)
f.l(0,u)
b2=s.x
u=new U.df()
j=U.iT()
j.sc_(0,!0)
j.sbS(6.283185307179586)
j.sbU(0)
j.sa3(0,0)
j.sbT(100)
j.sP(0)
j.sbE(0.2)
u.b=j
j.gm().l(0,u.gay())
u.c=null
u.d=!1
u.e=2.5
u.r=4
u.x=u.y=!1
u.z=0
u.Q=null
u.ch=0
u.cy=u.cx=null
d=new X.a8(!0,!1,!1)
c=u.c
u.c=d
j=new D.u(b1,c,d)
j.b=!0
u.J(j)
u.aR(b2)
f.l(0,u)
b2=s.x
u=new U.dh()
u.c=0.01
u.e=u.d=0
d=new X.a8(!1,!1,!1)
u.b=d
j=new D.u(b1,b0,d)
j.b=!0
u.J(j)
u.aR(b2)
f.l(0,u)
f.l(0,U.cs(V.j3(0,0,6)))
b=X.f0(b0)
if(b.b){b.b=!1
b2=new D.u("clearColor",!0,!1)
b2.b=!0
b.ab(b2)}b2=s.f.d3("../resources/maskonaive",".jpg")
a=new M.ct()
a.a=!0
u=E.eO(b0)
r=F.j6()
j=r.a
e=new V.y(-1,-1,1)
e=e.t(0,Math.sqrt(e.B(e)))
a0=j.b5(new V.aB(1,2,4,6),V.ex(255,0,0),new V.P(-1,-1,0),new V.X(0,1),e,b0)
e=r.a
j=new V.y(1,-1,1)
j=j.t(0,Math.sqrt(j.B(j)))
a1=e.b5(new V.aB(0,3,4,6),V.ex(0,0,255),new V.P(1,-1,0),new V.X(1,1),j,b0)
j=r.a
e=new V.y(1,1,1)
e=e.t(0,Math.sqrt(e.B(e)))
a2=j.b5(new V.aB(0,2,5,6),V.ex(0,128,0),new V.P(1,1,0),new V.X(1,0),e,b0)
e=r.a
j=V.aA()
a3=new V.y(-1,1,1)
a3=a3.t(0,Math.sqrt(a3.B(a3)))
a4=e.b5(new V.aB(0,2,4,7),V.ex(255,255,0),new V.P(-1,1,0),j,a3,b0)
r.d.f9(H.b([a0,a1,a2,a4],[F.bq]))
r.al()
u.sc3(0,r)
a.e=u
a.saS(b0)
a.saX(0,b0)
a.saY(b0)
u=new O.cY()
u.b=1.0471975511965976
u.d=new V.N(1,1,1)
c=u.c
u.c=b2
b2.gm().l(0,u.gaB())
b2=new D.u("boxTexture",c,u.c)
b2.b=!0
u.T(b2)
a.saY(u)
a5=new M.cy()
a5.a=!0
b2=O.ew(E.at)
a5.e=b2
b2.aJ(a5.geb(),a5.ged())
a5.y=a5.x=a5.r=a5.f=null
a6=X.f0(b0)
a5.saS(b0)
a5.saX(0,a6)
a5.saY(b0)
a5.saY(g)
a5.e.l(0,p)
b2=M.b2
u=H.b([a,a5],[b2])
j=new M.d2()
j.a=!0
e=U.cs(b0)
j.b=e
a3=U.cs(b0)
j.c=a3
a7=[U.a_]
e=U.iW(H.b([null,e],a7))
j.d=e
a7=U.iW(H.b([null,a3],a7))
j.e=a7
j.f=X.j4(e)
j.r=X.j4(a7)
j.x=V.fU(0,0,0.5,1)
j.y=V.fU(0.5,0,0.5,1)
b2=O.ew(b2)
j.Q=b2
b2.aJ(j.ge3(),j.geK())
j.Q.aD(0,u)
j.ch=0.1
j.cx=12
j.db=j.cy=null
b2=j.d.a
if(0>=b2.length)return H.f(b2,0)
if(!J.F(b2[0],f)){b2=j.d
e=b2.a
if(0>=e.length)return H.f(e,0)
c=e[0]
b2.k(0,0,f)
j.e.k(0,0,f)
b2=new D.u("cameraMover",c,f)
b2.b=!0
j.S(b2)}b2=j.z
if(b2!==b){if(b2!=null)b2.gm().M(0,j.gR())
c=j.z
j.z=b
b.gm().l(0,j.gR())
b2=new D.u("target",c,j.z)
b2.b=!0
j.S(b2)}j.Q.aD(0,u)
j.ch=0.1
j.cx=12
a8=Math.atan2(0.1,12)
b2=j.b
u=j.ch
if(typeof u!=="number")return u.K()
b2.sO(0,V.j3(-u,0,0).q(0,V.j2(a8)))
j.c.sO(0,V.j3(j.ch,0,0).q(0,V.j2(-a8)))
b2=s.d
if(b2!==j){if(b2!=null)b2.gm().M(0,s.gca())
s.d=j
j.gm().l(0,s.gca())
s.cb()}V.mf(s)}},L={d1:function d1(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},d8:function d8(a,b,c){this.a=a
this.b=b
this.c=c},d9:function d9(a){this.b=a
this.c=null},hv:function hv(){var _=this
_.d=_.c=_.b=_.a=null},db:function db(a){this.b=a
this.a=this.c=null}},O={
ew:function(a){var u=new O.af([a])
u.bd(a)
return u},
af:function af(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
bQ:function bQ(){this.b=this.a=null},
cL:function cL(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fq:function fq(a,b){this.a=a
this.b=b},
fr:function fr(){},
fs:function fs(a,b){this.a=a
this.b=b},
ft:function ft(){},
fu:function fu(a,b){this.a=a
this.b=b},
fv:function fv(){},
fw:function fw(a,b){this.a=a
this.b=b},
fx:function fx(){},
fk:function fk(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bP:function bP(){},
fl:function fl(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
ai:function ai(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fn:function fn(){var _=this
_.e=_.d=_.c=_.b=null},
fo:function fo(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fp:function fp(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cY:function cY(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
d4:function d4(){}},E={
eO:function(a){var u,t=new E.at()
t.a=""
t.b=!0
u=O.ew(E.at)
t.y=u
u.aJ(t.gfB(),t.gfE())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sc3(0,a)
t.sd5(null)
return t},
jQ:function(){if(J.iN(window.navigator.vendor,"Google"))return C.u
if(J.iN(window.navigator.userAgent,"Firefox"))return C.k
var u=window.navigator.appVersion
if(J.b9(u).N(u,"Trident")||C.b.N(u,"Edge"))return C.l
if(J.iN(window.navigator.appName,"Microsoft"))return C.l
return C.v},
jR:function(){var u=window.navigator.appVersion
if(J.b9(u).N(u,"Win"))return C.J
if(C.b.N(u,"Mac"))return C.p
if(C.b.N(u,"Linux"))return C.K
return C.L},
l_:function(a,b){var u=new E.fV(a)
u.dv(a,b)
return u},
l5:function(a,b,c,d,e){var u,t,s=J.V(a)
if(!!s.$ibf)return E.jI(a,!0,!0,!0,!1)
u=W.iS()
t=u.style
t.width="100%"
t.height="100%"
s.gcH(a).l(0,u)
return E.jI(u,!0,!0,!0,!1)},
jI:function(a,b,c,d,e){var u,t,s,r,q="mousemove",p=new E.d6(),o=C.f.c0(a,"webgl2",P.kH(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(o==null)H.p(P.o("Failed to get the rendering context for WebGL."))
p.b=a
p.c=o
p.e=E.l_(o,a)
u=new T.hr(o)
o.getParameter(3379)
u.c=o.getParameter(34076)
u.e=u.d=0
p.f=u
u=new X.de(a)
t=new X.fa()
t.c=new X.a8(!1,!1,!1)
t.d=P.jv(P.v)
u.b=t
t=new X.fE(u)
t.f=0
t.r=V.aA()
t.x=V.aA()
t.ch=t.Q=1
u.c=t
t=new X.fg(u)
t.r=0
t.x=V.aA()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hw(u)
t.f=V.aA()
t.r=V.aA()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.z=H.b([],[[P.d3,P.a0]])
t=$.eP
u.Q=(t==null?$.eP=new E.du(E.jQ(),E.jR()):t).a===C.k?0.16666666666666666:0.005555555555555556
s=u.z
r=document
s.push(W.R(r,"contextmenu",u.gef(),!1))
u.z.push(W.R(a,"focus",u.gel(),!1))
u.z.push(W.R(a,"blur",u.ge9(),!1))
u.z.push(W.R(r,"keyup",u.gep(),!1))
u.z.push(W.R(r,"keydown",u.gen(),!1))
u.z.push(W.R(a,"mousedown",u.geu(),!1))
u.z.push(W.R(a,"mouseup",u.gey(),!1))
u.z.push(W.R(a,q,u.gew(),!1))
s=u.z
W.iU(a)
W.iU(a)
s.push(W.R(a,W.iU(a),u.geA(),!1))
u.z.push(W.R(r,q,u.geh(),!1))
u.z.push(W.R(r,"mouseup",u.gej(),!1))
u.z.push(W.R(r,"pointerlockchange",u.geC(),!1))
u.z.push(W.R(a,"touchstart",u.geQ(),!1))
u.z.push(W.R(a,"touchend",u.geM(),!1))
u.z.push(W.R(a,"touchmove",u.geO(),!1))
p.x=u
p.ch=!0
p.cx=!1
p.cy=new P.a7(Date.now(),!1)
p.db=0
p.cq()
return p},
er:function er(){},
at:function at(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
be:function be(a){this.b=a},
bl:function bl(a){this.b=a},
du:function du(a,b){this.a=a
this.b=b},
fV:function fV(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fW:function fW(a){this.a=a},
fX:function fX(a){this.a=a},
fY:function fY(a){this.a=a},
d6:function d6(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
ht:function ht(a){this.a=a}},Z={
jb:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.ce(c)),35044)
a.bindBuffer(b,null)
return new Z.dj(b,u)},
a9:function(a){return new Z.aI(a)},
dj:function dj(a,b){this.a=a
this.b=b},
cq:function cq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
dk:function dk(a){this.a=a},
bB:function bB(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bh:function bh(a,b,c){this.a=a
this.b=b
this.c=c},
aI:function aI(a){this.a=a}},D={
A:function(){var u=new D.ah()
u.d=0
return u},
eu:function eu(){},
ah:function ah(){var _=this
_.d=_.c=_.b=_.a=null},
eR:function eR(a){this.a=a},
eS:function eS(a){this.a=a},
O:function O(){this.b=null},
aU:function aU(){this.b=null},
aV:function aV(){this.b=null},
u:function u(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
js:function(a,b){var u,t,s=new D.aQ()
s.c=new V.N(1,1,1)
s.a=V.l8()
s.d=V.ja()
s.e=V.l7()
u=s.b
s.b=b
b.gm().l(0,s.gdA())
t=new D.u("mover",u,s.b)
t.b=!0
s.ah(t)
if(!s.c.n(0,a)){u=s.c
s.c=a
t=new D.u("color",u,a)
t.b=!0
s.ah(t)}return s},
eq:function eq(){},
aQ:function aQ(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
Y:function Y(){},
cH:function cH(){var _=this
_.d=_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
fR:function fR(){},
he:function he(){}},X={cr:function cr(a,b){this.a=a
this.b=b},cG:function cG(a,b){this.a=a
this.b=b},fa:function fa(){var _=this
_.d=_.c=_.b=_.a=null},cI:function cI(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fg:function fg(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},a8:function a8(a,b,c){this.a=a
this.b=b
this.c=c},ax:function ax(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},fE:function fE(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bR:function bR(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fS:function fS(){},da:function da(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},hw:function hw(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},de:function de(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
f0:function(a){var u=new X.f_(),t=new V.as(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=V.kZ()
u.r=t
return u},
j4:function(a){var u,t,s=new X.cS()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gm().l(0,s.gdG())
t=new D.u("mover",u,s.b)
t.b=!0
s.ab(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.z().a)){s.c=1.0471975511965976
t=new D.u("fov",t,1.0471975511965976)
t.b=!0
s.ab(t)}t=s.d
if(!(Math.abs(t-0.1)<$.z().a)){s.d=0.1
t=new D.u("near",t,0.1)
t.b=!0
s.ab(t)}t=s.e
if(!(Math.abs(t-2000)<$.z().a)){s.e=2000
t=new D.u("far",t,2000)
t.b=!0
s.ab(t)}return s},
iR:function iR(){},
f_:function f_(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
f2:function f2(){this.b=this.a=null},
cS:function cS(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
hm:function hm(){}},V={
ex:function(a,b,c){var u=a/255,t=b/255,s=c/255
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.as(u,t,s,1)},
mk:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.dj(a-b,u)
return(a<0?a+u:a)+b},
E:function(a,b,c){if(a==null)return C.b.a9("null",c)
return C.b.a9(C.d.dg(Math.abs(a-0)<$.z().a?0:a,b),c+b+1)},
bw:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.t])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.m)(a),++s){r=V.E(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.f(o,q)
u=C.b.a9(o[q],t)
p=o.length
if(q>=p)return H.f(o,q)
o[q]=u}return o},
jl:function(a){return C.d.fZ(Math.pow(2,C.G.bN(Math.log(H.lU(a))/Math.log(2))))},
b_:function(){var u=$.jz
return u==null?$.jz=V.aj(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aj:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aa(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
j3:function(a,b,c){return V.aj(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
kM:function(a,b,c){return V.aj(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1)},
j2:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.aj(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
jy:function(a,b,c,d){d=V.ja()
return V.jx(V.jD(),d,new V.y(a,b,c))},
jx:function(a,b,c){var u=c.t(0,Math.sqrt(c.B(c))),t=b.aT(u),s=t.t(0,Math.sqrt(t.B(t))),r=u.aT(s),q=new V.y(a.a,a.b,a.c),p=s.K(0).B(q),o=r.K(0).B(q),n=u.K(0).B(q)
return V.aj(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
aA:function(){var u=$.jC
return u==null?$.jC=new V.X(0,0):u},
jD:function(){var u=$.al
return u==null?$.al=new V.P(0,0,0):u},
kZ:function(){var u=$.jG
return u==null?$.jG=V.fU(0,0,1,1):u},
fU:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cV(a,b,c,d)},
di:function(){var u=$.jP
return u==null?$.jP=new V.y(0,0,0):u},
l7:function(){var u=$.hQ
return u==null?$.hQ=new V.y(-1,0,0):u},
ja:function(){var u=$.hR
return u==null?$.hR=new V.y(0,1,0):u},
l8:function(){var u=$.hS
return u==null?$.hS=new V.y(0,0,1):u},
N:function N(a,b,c){this.a=a
this.b=b
this.c=c},
as:function as(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eQ:function eQ(a){this.a=a},
cM:function cM(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aa:function aa(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
X:function X(a,b){this.a=a
this.b=b},
P:function P(a,b,c){this.a=a
this.b=b
this.c=c},
aB:function aB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cV:function cV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
D:function D(a,b){this.a=a
this.b=b},
y:function y(a,b,c){this.a=a
this.b=b
this.c=c},
mf:function(a){P.l6(C.E,new V.iK(a))},
l1:function(a){var u=new V.h8()
u.dz(a,!0)
return u},
iK:function iK(a){this.a=a},
h8:function h8(){this.b=this.a=null},
ha:function ha(a){this.a=a},
h9:function h9(a){this.a=a}},U={
iT:function(){var u=new U.ey()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
cs:function(a){var u=new U.bE()
u.sO(0,a)
return u},
iW:function(a){var u=new U.bH()
u.bd(U.a_)
u.aJ(u.gdC(),u.geG())
if(a!=null)u.aD(0,a)
u.e=null
u.f=V.b_()
u.r=0
return u},
ey:function ey(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bE:function bE(){this.b=this.a=null},
bH:function bH(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
a_:function a_(){},
df:function df(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dg:function dg(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dh:function dh(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={ct:function ct(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},cy:function cy(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},b2:function b2(){},h1:function h1(){},d2:function d2(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
kK:function(a,b){var u=a.am,t=new A.fj(b,u)
t.c9(b,u)
t.du(a,b)
return t},
kL:function(a,b,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="MaterialLight_"+a3.gae(a3)+a4.gae(a4)+a5.gae(a5)+a6.gae(a6)+a7.gae(a7)+a8.gae(a8)+a9.gae(a9)+b0.gae(b0)+b1.gae(b1)+"_"
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
if(!a9.a)p=a9.c
else p=!0
if(!p)if(!b0.a){p=b0.c
o=p}else o=!0
else o=!0
n=u>0
if(!a4.a)u=a4.c
else u=!0
if(!u){if(!a5.a)u=a5.c
else u=!0
if(!u){if(!a6.a)u=a6.c
else u=!0
if(!u)if(!a7.a)u=a7.c
else u=!0
else u=!0
m=u}else m=!0}else m=!0
u=!a7.a
if(u)p=a7.c
else p=!0
l=p||n||q>0||o
if(!a5.a)q=a5.c
else q=!0
if(!q){if(!a6.a)q=a6.c
else q=!0
if(!q){if(u)u=a7.c
else u=!0
k=u}else k=!0}else k=!0
if(!k){if(!a8.a)u=a8.c
else u=!0
j=u||o}else j=!0
if(!a8.a)i=a8.c
else i=!0
h=a3.c||a4.c||a5.c||a6.c||a7.c||a8.c||a9.c||b0.c||b1.c
g=a2>0
f=j||i||l||!1
e=n&&k
b=b&&h
d=$.ac()
if(j){u=$.aN()
d=new Z.aI(d.a|u.a)}if(i){u=$.aM()
d=new Z.aI(d.a|u.a)}if(h){u=$.aO()
d=new Z.aI(d.a|u.a)}if(g){u=$.aL()
d=new Z.aI(d.a|u.a)}return new A.fm(a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,s,o,k,o,r,f,!0,e,!1,m,r,l,j,i,!1,h,g,!1,b,a0,!1,a2,c.charCodeAt(0)==0?c:c,d)},
iy:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.c)a.a+="uniform samplerCube "+c+"Txt;\n"},
iz:function(a,b,c){var u,t="Txt, txtCube).rgb;\n"
A.iy(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.ef(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.c){u+="   "+c+"Color = "+c+"Clr*textureCube("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.c){u+="   "+c+"Color = textureCube("+c+t
a.a=u}a.a=u+"}\n"},
lt:function(a,b){var u,t=a.a,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.iy(b,t,"emission")
u=b.a+="\n"
u+="vec3 emissionColor()\n"
b.a=u
u=b.a=u+"{\n"
if(s)if(t.c){t=u+"   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
b.a=t}else{t=u+"   return emissionClr;\n"
b.a=t}else if(t.c){t=u+"   return textureCube(emissionTxt, txtCube).rgb;\n"
b.a=t}else t=u
t+="}\n"
b.a=t
b.a=t+"\n"},
lp:function(a,b){var u,t=a.b
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.iz(b,t,"ambient")
b.a+="\n"},
lr:function(a,b){var u,t=a.c
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.iz(b,t,"diffuse")
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
lu:function(a,b){var u,t=a.d
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.iz(b,t,"invDiffuse")
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
lA:function(a,b){var u,t=a.e
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.iz(b,t,"specular")
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
lw:function(a,b){var u,t,s
if(!a.k4)return
u=b.a+="// === Normal ===\n"
u=b.a=u+"\n"
if(a.f.c){u+="uniform samplerCube bumpTxt;\n"
b.a=u
u+="\n"
b.a=u}u+="vec3 normal()\n"
b.a=u
u=b.a=u+"{\n"
t=a.f
s=t.a
if(!s)t=t.c
else t=!0
if(!t||s)u=b.a=u+"   return normalize(normalVec);\n"
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
ly:function(a,b){var u,t=a.r,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.iy(b,t,"reflect")
u=b.a+="\n"
u+="vec3 reflect(vec3 refl)\n"
b.a=u
u=b.a=u+"{\n"
if(s)if(t.c){t=u+"   vec3 scalar = reflectClr*textureCube(reflectTxt, txtCube).rgb;\n"
b.a=t}else{t=u+"   vec3 scalar = reflectClr;\n"
b.a=t}else if(t.c){t=u+"   vec3 scalar = textureCube(reflectTxt, txtCube).rgb;\n"
b.a=t}else t=u
t+="   vec3 invRefl = vec3(invViewMat*vec4(refl, 0.0));\n"
b.a=t
t+="   return scalar*textureCube(envSampler, invRefl).rgb;\n"
b.a=t
t+="}\n"
b.a=t
b.a=t+"\n"},
lz:function(a,b){var u,t=a.x,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.iy(b,t,"refract")
u=b.a+="uniform float refraction;\n"
u+="\n"
b.a=u
u+="vec3 refract(vec3 refl)\n"
b.a=u
u=b.a=u+"{\n"
if(s)if(t.c){t=u+"   vec3 scalar = refractClr*textureCube(refractTxt, txtCube).rgb;\n"
b.a=t}else{t=u+"   vec3 scalar = refractClr;\n"
b.a=t}else if(t.c){t=u+"   vec3 scalar = textureCube(refractTxt, txtCube).rgb;\n"
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
lq:function(a,b,c){var u,t,s,r,q,p,o=b.b
if(o<=0)return
u=b.a
t="barLight"+H.e(u)
s=A.ef(t)
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
if(typeof u!=="number")return u.aa()
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
c.a=r+"\n"}r=[P.t]
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
if(!u.a)u=u.c
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
u=a.c
if(!u.a)u=u.c
else u=!0
if(u)p.push("diffuse(norm, normDir)")
u=a.d
if(!u.a)u=u.c
else u=!0
if(u)p.push("invDiffuse(norm, normDir)")
u=a.e
if(!u.a)u=u.c
else u=!0
if(u)p.push("specular(norm, normDir)")
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
ls:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.e(u)
s=A.ef(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.aa()
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
r=[P.t]
o=H.b([],r)
n=a.b
if(!n.a)n=n.c
else n=!0
if(n)o.push("ambientColor")
if(a.dx){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.b([],r)
r=a.c
if(!r.a)r=r.c
else r=!0
if(r)m.push("diffuse(norm, lit.viewDir)")
r=a.d
if(!r.a)r=r.c
else r=!0
if(r)m.push("invDiffuse(norm, lit.viewDir)")
r=a.e
if(!r.a)r=r.c
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
lx:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.e(u)
s=A.ef(t)
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
if(typeof u!=="number")return u.aa()
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
c.a=r+"\n"}r=[P.t]
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
if(!o.a)o=o.c
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
r=a.c
if(!r.a)r=r.c
else r=!0
if(r)k.push("diffuse(norm, normDir)")
r=a.d
if(!r.a)r=r.c
else r=!0
if(r)k.push("invDiffuse(norm, normDir)")
r=a.e
if(!r.a)r=r.c
else r=!0
if(r)k.push("specular(norm, normDir)")
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
lB:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.e(u)
s=A.ef(t)
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
if(typeof u!=="number")return u.aa()
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
if(o){u=$.eP
if(u==null)u=$.eP=new E.du(E.jQ(),E.jR())
r=c.a
if(u.b===C.p){u=r+"   float crossMag = length(cross(normDir, lit.objDir));\n"
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
c.a=u+"\n"}u=[P.t]
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
if(!r.a)r=r.c
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
u=a.c
if(!u.a)u=u.c
else u=!0
if(u)i.push("diffuse(norm, litVec)")
u=a.d
if(!u.a)u=u.c
else u=!0
if(u)i.push("invDiffuse(norm, litVec)")
u=a.e
if(!u.a)u=u.c
else u=!0
if(u)i.push("specular(norm, litVec)")
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
lv:function(a,b){var u,t
if(a.cy>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.dx)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.b([],[P.t])
u=a.b
if(!u.a)u=u.c
else u=!0
if(u)t.push("ambientColor")
u=a.c
if(!u.a)u=u.c
else u=!0
if(u)t.push("diffuse(norm, litVec)")
u=a.d
if(!u.a)u=u.c
else u=!0
if(u)t.push("invDiffuse(norm, litVec)")
u=a.e
if(!u.a)u=u.c
else u=!0
if(u)t.push("specular(norm, litVec)")
u=b.a+="   return "+C.a.p(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
lC:function(a){var u,t,s,r,q,p,o,n,m,l="   lightAccum += all",k="precision mediump float;\n\n",j="precision mediump float;\n\nvarying vec3 normalVec;\n",i=new P.aF("")
i.a="precision mediump float;\n"
i.a=k
u=a.k4
if(u){i.a=j
t=j}else t=k
if(a.r1){t+="varying vec3 binormalVec;\n"
i.a=t}if(a.r2){t+="varying vec2 txt2D;\n"
i.a=t}if(a.rx){t+="varying vec3 txtCube;\n"
i.a=t}if(a.k2){t+="varying vec3 objPos;\n"
i.a=t}t=i.a=(a.k3?i.a=t+"varying vec3 viewPos;\n":t)+"\n"
s=a.y1
if(s){t+="uniform mat4 colorMat;\n"
i.a=t}if(a.go){t+="uniform mat4 viewMat;\n"
i.a=t}if(a.dy)t=i.a=t+"uniform mat4 invViewMat;\n"
i.a=t+"\n"
A.lt(a,i)
A.lp(a,i)
A.lr(a,i)
A.lu(a,i)
A.lA(a,i)
t=a.db
if(t){r=i.a+="// === Environmental ===\n"
r+="\n"
i.a=r
r+="uniform samplerCube envSampler;\n"
i.a=r
i.a=r+"\n"
A.ly(a,i)
A.lz(a,i)}A.lw(a,i)
r=i.a+="// === Alpha ===\n"
r=i.a=r+"\n"
q=a.y
p=q.a
if(p){r+="uniform float alpha;\n"
i.a=r}q=q.c
r=(q?i.a=r+"uniform samplerCube alphaTxt;\n":r)+"float alphaValue()\n"
i.a=r
r=i.a=r+"{\n"
if(!p)o=q
else o=!0
if(!o)r=i.a=r+"   return 1.0;\n"
else if(q){if(p){r+="   float a = alpha*textureCube(alphaTxt, txtCube).a;\n"
i.a=r}else{r+="   float a = textureCube(alphaTxt, txtCube).a;\n"
i.a=r}r+="   if (a <= 0.000001) discard;\n"
i.a=r
r+="   return a;\n"
i.a=r}else if(p){r+="   return alpha;\n"
i.a=r}r+="}\n"
i.a=r
i.a=r+"\n"
r=a.k1
if(r){for(q=a.z,p=q.length,n=0;n<q.length;q.length===p||(0,H.m)(q),++n)A.lq(a,q[n],i)
for(q=a.Q,p=q.length,n=0;n<q.length;q.length===p||(0,H.m)(q),++n)A.ls(a,q[n],i)
for(q=a.ch,p=q.length,n=0;n<q.length;q.length===p||(0,H.m)(q),++n)A.lx(a,q[n],i)
for(q=a.cx,p=q.length,n=0;n<q.length;q.length===p||(0,H.m)(q),++n)A.lB(a,q[n],i)
A.lv(a,i)}q=i.a+="// === Main ===\n"
q+="\n"
i.a=q
q+="void main()\n"
i.a=q
q+="{\n"
i.a=q
q=i.a=q+"   float alpha = alphaValue();\n"
u=u?i.a=q+"   vec3 norm = normal();\n":q
if(t)i.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
m=H.b([],[P.t])
if(r){i.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
m.push("lightAccum")
u=a.b
if(!u.a)u=u.c
else u=!0
if(u)i.a+="   setAmbientColor();\n"
u=a.c
if(!u.a)u=u.c
else u=!0
if(u)i.a+="   setDiffuseColor();\n"
u=a.d
if(!u.a)u=u.c
else u=!0
if(u)i.a+="   setInvDiffuseColor();\n"
u=a.e
if(!u.a)u=u.c
else u=!0
if(u)i.a+="   setSpecularColor();\n"
for(u=a.z,t=u.length,n=0;n<u.length;u.length===t||(0,H.m)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.f(r,0)
i.a+=l+(r[0].toUpperCase()+C.b.aw(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,n=0;n<u.length;u.length===t||(0,H.m)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.f(r,0)
i.a+=l+(r[0].toUpperCase()+C.b.aw(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,n=0;n<u.length;u.length===t||(0,H.m)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.f(r,0)
i.a+=l+(r[0].toUpperCase()+C.b.aw(r,1))+"Values(norm);\n"}for(u=a.cx,t=u.length,n=0;n<u.length;u.length===t||(0,H.m)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.f(r,0)
i.a+=l+(r[0].toUpperCase()+C.b.aw(r,1))+"Values(norm);\n"}if(a.cy<=0)i.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
if(!u.a)u=u.c
else u=!0
if(u)m.push("emissionColor()")
u=a.r
if(!u.a)u=u.c
else u=!0
if(u)m.push("reflect(refl)")
u=a.x
if(!u.a)u=u.c
else u=!0
if(u)m.push("refract(refl)")
if(m.length<=0)m.push("vec3(0.0, 0.0, 0.0)")
u=i.a+="   vec4 objClr = vec4("+C.a.p(m," + ")+", alpha);\n"
if(s)u=i.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
i.a=u
u=i.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
lD:function(a,b){var u,t,s
if(!a.ry)return
u=b.a+="struct BendingValue\n"
u+="{\n"
b.a=u
u+="   mat4 mat;\n"
b.a=u
u+="};\n"
b.a=u
b.a=u+"uniform int bendMatCount;\n"
u=b.a+="uniform BendingValue bendValues["+a.b6+"];\n"
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
lF:function(a,b){var u
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
lE:function(a,b){var u
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
lH:function(a,b){var u,t
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
lI:function(a,b){var u,t
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
lG:function(a,b){var u
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
lJ:function(a,b){var u
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
ef:function(a){if(0>=a.length)return H.f(a,0)
return a[0].toUpperCase()+C.b.aw(a,1)},
j9:function(a,b,c,d,e){var u=new A.hC(a,c,e)
u.f=d
P.kI(d,0,P.v)
return u},
cn:function cn(a,b,c){this.a=a
this.b=b
this.c=c},
el:function el(a){this.a=a},
S:function S(a,b,c){this.a=a
this.b=b
this.c=c},
fj:function fj(a,b){var _=this
_.cN=_.ha=_.b7=_.am=_.b6=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.hi=_.hh=_.hg=_.bM=_.bL=_.bK=_.bJ=_.bI=_.bH=_.bG=_.bF=_.cZ=_.hf=_.cY=_.cX=_.he=_.cW=_.cV=_.cU=_.hd=_.cT=_.cS=_.cR=_.hc=_.cQ=_.cP=_.hb=_.cO=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
co:function co(a,b){this.a=a
this.b=b},
cv:function cv(a,b){this.a=a
this.b=b},
cT:function cT(a,b){this.a=a
this.b=b},
d_:function d_(a,b){this.a=a
this.b=b},
fm:function fm(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.b6=b3
_.am=b4
_.b7=b5},
bY:function bY(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
bZ:function bZ(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
c0:function c0(a,b,c,d,e,f,g,h,i,j){var _=this
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
c1:function c1(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cX:function cX(){},
hb:function hb(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dc:function dc(){},
hH:function hH(a){this.a=a},
b5:function b5(a,b,c){this.a=a
this.c=b
this.d=c},
hE:function hE(a,b,c){this.a=a
this.c=b
this.d=c},
hF:function hF(a,b,c){this.a=a
this.c=b
this.d=c},
hG:function hG(a,b,c){this.a=a
this.c=b
this.d=c},
hC:function hC(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
L:function L(a,b,c){this.a=a
this.c=b
this.d=c},
hD:function hD(a,b,c){this.a=a
this.c=b
this.d=c},
B:function B(a,b,c){this.a=a
this.c=b
this.d=c},
bX:function bX(a,b,c){this.a=a
this.c=b
this.d=c},
hI:function hI(a,b,c){this.a=a
this.c=b
this.d=c},
c_:function c_(a,b,c){this.a=a
this.c=b
this.d=c},
a1:function a1(a,b,c){this.a=a
this.c=b
this.d=c},
bp:function bp(a,b,c){this.a=a
this.c=b
this.d=c},
Q:function Q(a,b,c){this.a=a
this.c=b
this.d=c}},F={
ix:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cd:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.y(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.y(u+a3,t+a1,s+a2)
q=new V.y(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.y(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.ix(i)
l=F.ix(h)
k=F.mh(d,a0,new F.iw(j,F.ix(g),F.ix(f),l,m,c),b)
if(k!=null)a.fA(k)},
mh:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.j6()
t=H.b([],[F.bq])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.hT(g,g,new V.as(p,0,0,1),g,g,new V.X(r,1),g,g,0)
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
o=F.hT(g,g,new V.as(j,i,h,1),g,g,new V.X(r,m),g,g,0)
k.l(0,o)
c.$3(o,r,n)
t.push(o.bD(d))}}u.d.fa(a+1,b+1,t)
return u},
bG:function(a,b,c){var u=new F.aS(),t=a.a
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
kF:function(a,b){var u=new F.bL(),t=a.a
if(t==null)H.p(P.o("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.p(P.o("May not create a line with vertices attached to different shapes."))
u.a=a
a.c.b.push(u)
u.b=b
b.c.c.push(u)
u.a.a.c.b.push(u)
u.a.a.Y()
return u},
j6:function(){var u=new F.h4(),t=new F.hU(u)
t.b=!1
t.c=H.b([],[F.bq])
u.a=t
t=new F.h7(u)
t.b=H.b([],[F.bU])
u.b=t
t=new F.h6(u)
t.b=H.b([],[F.bL])
u.c=t
t=new F.h5(u)
t.b=H.b([],[F.aS])
u.d=t
u.e=null
return u},
hT:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.bq(),r=new F.hZ()
r.b=H.b([],[F.bU])
s.b=r
r=new F.hY()
u=[F.bL]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.hV()
u=[F.aS]
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
s.y=(u&$.ba().a)!==0?f:t
s.z=(u&$.aO().a)!==0?g:t
s.Q=(u&$.kj().a)!==0?c:t
s.ch=(u&$.bx().a)!==0?i:0
s.cx=(u&$.aL().a)!==0?a:t
return s},
iw:function iw(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aS:function aS(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bL:function bL(){this.b=this.a=null},
bU:function bU(){this.a=null},
h4:function h4(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
h5:function h5(a){this.a=a
this.b=null},
h6:function h6(a){this.a=a
this.b=null},
h7:function h7(a){this.a=a
this.b=null},
bq:function bq(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i0:function i0(a){this.a=a},
i_:function i_(a){this.a=a},
hU:function hU(a){this.a=a
this.c=this.b=null},
hV:function hV(){this.d=this.c=this.b=null},
hW:function hW(a,b){this.a=a
this.b=b},
hX:function hX(a,b){this.a=a
this.b=b},
hY:function hY(){this.c=this.b=null},
hZ:function hZ(){this.b=null}},T={d5:function d5(){},hq:function hq(){var _=this
_.e=_.d=_.c=_.b=_.a=null},hr:function hr(a){var _=this
_.a=a
_.e=_.d=_.c=null},hs:function hs(a,b,c,d,e,f,g){var _=this
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
H.j_.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gF:function(a){return H.bV(a)},
i:function(a){return"Instance of '"+H.e(H.bW(a))+"'"}}
J.f6.prototype={
i:function(a){return String(a)},
gF:function(a){return a?519018:218159},
$ib8:1}
J.cE.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gF:function(a){return 0}}
J.cF.prototype={
gF:function(a){return 0},
i:function(a){return String(a)}}
J.fP.prototype={}
J.c2.prototype={}
J.aX.prototype={
i:function(a){var u=a[$.k7()]
if(u==null)return this.ds(a)
return"JavaScript function for "+H.e(J.a5(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.aW.prototype={
fR:function(a,b){var u
if(!!a.fixed$length)H.p(P.w("removeAt"))
u=a.length
if(b>=u)throw H.c(P.cU(b,null))
return a.splice(b,1)[0]},
M:function(a,b){var u
if(!!a.fixed$length)H.p(P.w("remove"))
for(u=0;u<a.length;++u)if(J.F(a[u],b)){a.splice(u,1)
return!0}return!1},
aD:function(a,b){var u,t
if(!!a.fixed$length)H.p(P.w("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.m)(b),++t)a.push(b[t])},
G:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.c(P.bD(a))}},
p:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.f(r,u)
r[u]=t}return r.join(b)},
fw:function(a){return this.p(a,"")},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
dn:function(a,b,c){var u=a.length
if(b>u)throw H.c(P.am(b,0,u,"start",null))
if(c==null)c=u
else if(c<b||c>u)throw H.c(P.am(c,b,u,"end",null))
if(b===c)return H.b([],[H.ar(a,0)])
return H.b(a.slice(b,c),[H.ar(a,0)])},
gbP:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.kB())},
aL:function(a,b){if(!!a.immutable$list)H.p(P.w("sort"))
H.l4(a,b==null?J.lm():b)},
dm:function(a){return this.aL(a,null)},
N:function(a,b){var u
for(u=0;u<a.length;++u)if(J.F(a[u],b))return!0
return!1},
i:function(a){return P.iX(a,"[","]")},
gV:function(a){return new J.W(a,a.length)},
gF:function(a){return H.bV(a)},
gj:function(a){return a.length},
sj:function(a,b){var u="newLength"
if(!!a.fixed$length)H.p(P.w("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.iP(b,u,null))
if(b<0)throw H.c(P.am(b,0,null,u,null))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bv(a,b))
return a[b]},
k:function(a,b,c){if(!!a.immutable$list)H.p(P.w("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bv(a,b))
a[b]=c},
$in:1,
$ij:1}
J.iZ.prototype={}
J.W.prototype={
gL:function(a){return this.d},
u:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.m(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bK.prototype={
aG:function(a,b){var u
if(typeof b!=="number")throw H.c(H.aJ(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gb8(b)
if(this.gb8(a)===u)return 0
if(this.gb8(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gb8:function(a){return a===0?1/a<0:a<0},
fZ:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.w(""+a+".toInt()"))},
bN:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.w(""+a+".floor()"))},
ac:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.w(""+a+".round()"))},
dg:function(a,b){var u
if(b>20)throw H.c(P.am(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gb8(a))return"-"+u
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
dj:function(a,b){var u=a%b
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
throw H.c(P.w("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
b3:function(a,b){var u
if(a>0)u=this.f1(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
f1:function(a,b){return b>31?0:a>>>b},
$iK:1,
$ia4:1}
J.cD.prototype={$iv:1}
J.cC.prototype={}
J.bi.prototype={
bC:function(a,b){if(b<0)throw H.c(H.bv(a,b))
if(b>=a.length)H.p(H.bv(a,b))
return a.charCodeAt(b)},
bf:function(a,b){if(b>=a.length)throw H.c(H.bv(a,b))
return a.charCodeAt(b)},
A:function(a,b){if(typeof b!=="string")throw H.c(P.iP(b,null,null))
return a+b},
c5:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.cU(b,null))
if(b>c)throw H.c(P.cU(b,null))
if(c>a.length)throw H.c(P.cU(c,null))
return a.substring(b,c)},
aw:function(a,b){return this.c5(a,b,null)},
q:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.C)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
a9:function(a,b){var u=b-a.length
if(u<=0)return a
return this.q(" ",u)+a},
fe:function(a,b,c){var u=a.length
if(c>u)throw H.c(P.am(c,0,u,null,null))
return H.k3(a,b,c)},
N:function(a,b){return this.fe(a,b,0)},
aG:function(a,b){var u
if(typeof b!=="string")throw H.c(H.aJ(b))
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
gj:function(a){return a.length},
$it:1}
H.M.prototype={
gj:function(a){return this.a.length},
h:function(a,b){return C.b.bC(this.a,b)},
$an:function(){return[P.v]},
$aq:function(){return[P.v]},
$aj:function(){return[P.v]}}
H.n.prototype={}
H.bM.prototype={
gL:function(a){return this.d},
u:function(){var u,t=this,s=t.a,r=J.b9(s),q=r.gj(s)
if(t.b!=q)throw H.c(P.bD(s))
u=t.c
if(typeof q!=="number")return H.r(q)
if(u>=q){t.d=null
return!1}t.d=r.D(s,u);++t.c
return!0}}
H.bO.prototype={
gV:function(a){return new H.cJ(J.bb(this.a),this.b)},
gj:function(a){return J.bc(this.a)},
D:function(a,b){return this.b.$1(J.iO(this.a,b))},
$aj:function(a,b){return[b]}}
H.eM.prototype={$in:1,
$an:function(a,b){return[b]}}
H.cJ.prototype={
u:function(){var u=this,t=u.b
if(t.u()){u.a=u.c.$1(t.gL(t))
return!0}u.a=null
return!1},
gL:function(a){return this.a}}
H.i2.prototype={
gV:function(a){return new H.i3(J.bb(this.a),this.b)}}
H.i3.prototype={
u:function(){var u,t
for(u=this.a,t=this.b;u.u();)if(t.$1(u.gL(u)))return!0
return!1},
gL:function(a){var u=this.a
return u.gL(u)}}
H.cz.prototype={}
H.hL.prototype={
k:function(a,b,c){throw H.c(P.w("Cannot modify an unmodifiable list"))}}
H.dd.prototype={}
H.hA.prototype={
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
H.fL.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.f9.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.hK.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.iM.prototype={
$1:function(a){if(!!J.V(a).$ibg)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:7}
H.dU.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bC.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.ci(t==null?"unknown":t)+"'"},
gh3:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hn.prototype={}
H.hh.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.ci(u)+"'"}}
H.bz.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bz))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gF:function(a){var u,t=this.c
if(t==null)u=H.bV(this.a)
else u=typeof t!=="object"?J.by(t):H.bV(t)
return(u^H.bV(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.bW(u))+"'")}}
H.et.prototype={
i:function(a){return this.a}}
H.h0.prototype={
i:function(a){return"RuntimeError: "+H.e(this.a)}}
H.H.prototype={
gj:function(a){return this.a},
gap:function(a){return new H.bk(this,[H.ar(this,0)])},
gh2:function(a){var u=this,t=H.ar(u,0)
return H.kJ(new H.bk(u,[t]),new H.f8(u),t,H.ar(u,1))},
ff:function(a,b){var u=this.b
if(u==null)return!1
return this.dQ(u,b)},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.b1(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.b1(r,b)
s=t==null?null:t.b
return s}else return q.fv(b)},
fv:function(a){var u,t,s=this.d
if(s==null)return
u=this.cl(s,J.by(a)&0x3ffffff)
t=this.d0(u,a)
if(t<0)return
return u[t].b},
k:function(a,b,c){var u,t,s,r,q,p,o=this
if(typeof b==="string"){u=o.b
o.cd(u==null?o.b=o.bs():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.cd(t==null?o.c=o.bs():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bs()
r=J.by(b)&0x3ffffff
q=o.cl(s,r)
if(q==null)o.bx(s,r,[o.bt(b,c)])
else{p=o.d0(q,b)
if(p>=0)q[p].b=c
else q.push(o.bt(b,c))}}},
G:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.c(P.bD(u))
t=t.c}},
cd:function(a,b,c){var u=this.b1(a,b)
if(u==null)this.bx(a,b,this.bt(b,c))
else u.b=c},
bt:function(a,b){var u=this,t=new H.fc(a,b)
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
d0:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.F(a[t].a,b))return t
return-1},
i:function(a){return P.jw(this)},
b1:function(a,b){return a[b]},
cl:function(a,b){return a[b]},
bx:function(a,b,c){a[b]=c},
dT:function(a,b){delete a[b]},
dQ:function(a,b){return this.b1(a,b)!=null},
bs:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bx(t,u,t)
this.dT(t,u)
return t}}
H.f8.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.ar(u,1),args:[H.ar(u,0)]}}}
H.fc.prototype={}
H.bk.prototype={
gj:function(a){return this.a.a},
gV:function(a){var u=this.a,t=new H.fd(u,u.r)
t.c=u.e
return t}}
H.fd.prototype={
gL:function(a){return this.d},
u:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bD(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.iF.prototype={
$1:function(a){return this.a(a)},
$S:7}
H.iG.prototype={
$2:function(a,b){return this.a(a,b)}}
H.iH.prototype={
$1:function(a){return this.a(a)}}
H.f7.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.bT.prototype={}
H.cN.prototype={
gj:function(a){return a.length},
$ix:1,
$ax:function(){}}
H.bS.prototype={
h:function(a,b){H.aq(b,a,a.length)
return a[b]},
k:function(a,b,c){H.aq(b,a,a.length)
a[b]=c},
$in:1,
$an:function(){return[P.K]},
$aq:function(){return[P.K]},
$ij:1,
$aj:function(){return[P.K]}}
H.cO.prototype={
k:function(a,b,c){H.aq(b,a,a.length)
a[b]=c},
$in:1,
$an:function(){return[P.v]},
$aq:function(){return[P.v]},
$ij:1,
$aj:function(){return[P.v]}}
H.fF.prototype={
h:function(a,b){H.aq(b,a,a.length)
return a[b]}}
H.fG.prototype={
h:function(a,b){H.aq(b,a,a.length)
return a[b]}}
H.fH.prototype={
h:function(a,b){H.aq(b,a,a.length)
return a[b]}}
H.fI.prototype={
h:function(a,b){H.aq(b,a,a.length)
return a[b]}}
H.fJ.prototype={
h:function(a,b){H.aq(b,a,a.length)
return a[b]}}
H.cP.prototype={
gj:function(a){return a.length},
h:function(a,b){H.aq(b,a,a.length)
return a[b]}}
H.fK.prototype={
gj:function(a){return a.length},
h:function(a,b){H.aq(b,a,a.length)
return a[b]}}
H.c4.prototype={}
H.c5.prototype={}
H.c6.prototype={}
H.c7.prototype={}
P.i5.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:16}
P.i4.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.i6.prototype={
$0:function(){this.a.$0()}}
P.i7.prototype={
$0:function(){this.a.$0()}}
P.e_.prototype={
dE:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bu(new P.it(this,b),0),a)
else throw H.c(P.w("`setTimeout()` not found."))},
dF:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bu(new P.is(this,a,Date.now(),b),0),a)
else throw H.c(P.w("Periodic timer."))},
$id7:1}
P.it.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.is.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.dt(u,q)}s.c=r
t.d.$1(s)}}
P.br.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.e(this.a)+")"}}
P.ca.prototype={
gL:function(a){var u=this.c
if(u==null)return this.b
return u.gL(u)},
u:function(){var u,t,s,r,q=this
for(;!0;){u=q.c
if(u!=null)if(u.u())return!0
else q.c=null
t=function(a,b,c){var p,o=b
while(true)try{return a(o,p)}catch(n){p=n
o=c}}(q.a,0,1)
if(t instanceof P.br){s=t.b
if(s===2){u=q.d
if(u==null||u.length===0){q.b=null
return!1}if(0>=u.length)return H.f(u,-1)
q.a=u.pop()
continue}else{u=t.a
if(s===3)throw u
else{r=J.bb(u)
if(!!r.$ica){u=q.d
if(u==null)u=q.d=[]
u.push(q.a)
q.a=r.a
continue}else{q.c=r
continue}}}}else{q.b=t
return!0}}return!1}}
P.ir.prototype={
gV:function(a){return new P.ca(this.a())}}
P.dl.prototype={}
P.d3.prototype={}
P.hk.prototype={}
P.d7.prototype={}
P.iv.prototype={}
P.iA.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.cR():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u}}
P.ik.prototype={
fV:function(a){var u,t,s,r=null
try{if(C.e===$.ab){a.$0()
return}P.lL(r,r,this,a)}catch(s){u=H.eg(s)
t=H.ji(s)
P.jU(r,r,this,u,t)}},
fW:function(a,b){var u,t,s,r=null
try{if(C.e===$.ab){a.$1(b)
return}P.lM(r,r,this,a,b)}catch(s){u=H.eg(s)
t=H.ji(s)
P.jU(r,r,this,u,t)}},
fX:function(a,b){return this.fW(a,b,null)},
fc:function(a){return new P.il(this,a)},
cE:function(a,b){return new P.im(this,a,b)}}
P.il.prototype={
$0:function(){return this.a.fV(this.b)}}
P.im.prototype={
$1:function(a){return this.a.fX(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.ih.prototype={
gV:function(a){var u=new P.dC(this,this.r)
u.c=this.e
return u},
gj:function(a){return this.a},
N:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.dO(b)
return t}},
dO:function(a){var u=this.d
if(u==null)return!1
return this.bj(this.ck(u,a),a)>=0},
l:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.ce(u==null?s.b=P.jc():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.ce(t==null?s.c=P.jc():t,b)}else return s.dI(0,b)},
dI:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.jc()
u=s.cf(b)
t=r[u]
if(t==null)r[u]=[s.bg(b)]
else{if(s.bj(t,b)>=0)return!1
t.push(s.bg(b))}return!0},
M:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.eT(this.c,b)
else return this.eS(0,b)},
eS:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.ck(r,b)
t=s.bj(u,b)
if(t<0)return!1
s.cv(u.splice(t,1)[0])
return!0},
ce:function(a,b){if(a[b]!=null)return!1
a[b]=this.bg(b)
return!0},
eT:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.cv(u)
delete a[b]
return!0},
cm:function(){this.r=1073741823&this.r+1},
bg:function(a){var u,t=this,s=new P.ii(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cm()
return s},
cv:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cm()},
cf:function(a){return J.by(a)&1073741823},
ck:function(a,b){return a[this.cf(b)]},
bj:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.F(a[t].a,b))return t
return-1}}
P.ii.prototype={}
P.dC.prototype={
gL:function(a){return this.d},
u:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bD(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.f4.prototype={}
P.fe.prototype={$in:1,$ij:1}
P.q.prototype={
gV:function(a){return new H.bM(a,this.gj(a))},
D:function(a,b){return this.h(a,b)},
h0:function(a,b){var u,t,s=this,r=H.b([],[H.m3(s,a,"q",0)])
C.a.sj(r,s.gj(a))
u=0
while(!0){t=s.gj(a)
if(typeof t!=="number")return H.r(t)
if(!(u<t))break
t=s.h(a,u)
if(u>=r.length)return H.f(r,u)
r[u]=t;++u}return r},
h_:function(a){return this.h0(a,!0)},
i:function(a){return P.iX(a,"[","]")}}
P.fh.prototype={}
P.fi.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:8}
P.Z.prototype={
G:function(a,b){var u,t
for(u=J.bb(this.gap(a));u.u();){t=u.gL(u)
b.$2(t,this.h(a,t))}},
gj:function(a){return J.bc(this.gap(a))},
i:function(a){return P.jw(a)}}
P.io.prototype={
i:function(a){return P.iX(this,"{","}")},
D:function(a,b){var u,t,s
P.jF(b,"index")
for(u=P.lg(this,this.r),t=0;u.u();){s=u.d
if(b===t)return s;++t}throw H.c(P.J(b,this,"index",null,t))},
$in:1,
$ij:1}
P.dD.prototype={}
P.ev.prototype={}
P.eA.prototype={}
P.eN.prototype={}
P.hO.prototype={}
P.hP.prototype={
fg:function(a){var u,t,s,r=P.j5(0,null,a.length)
if(typeof r!=="number")return r.C()
u=r-0
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.iu(t)
if(s.dV(a,0,r)!==r)s.cw(C.b.bC(a,r-1),0)
return new Uint8Array(t.subarray(0,H.lk(0,s.b,t.length)))}}
P.iu.prototype={
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
dV:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.bC(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.bf(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cw(r,C.b.bf(a,p)))s=p}else if(r<=2047){q=n.b
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
P.b8.prototype={}
P.a7.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.a7&&this.a===b.a&&!0},
aG:function(a,b){return C.c.aG(this.a,b.a)},
gF:function(a){var u=this.a
return(u^C.c.b3(u,30))&1073741823},
i:function(a){var u=this,t=P.kx(H.kU(u)),s=P.cu(H.kS(u)),r=P.cu(H.kO(u)),q=P.cu(H.kP(u)),p=P.cu(H.kR(u)),o=P.cu(H.kT(u)),n=P.ky(H.kQ(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.K.prototype={}
P.aR.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.aR&&this.a===b.a},
gF:function(a){return C.c.gF(this.a)},
aG:function(a,b){return C.c.aG(this.a,b.a)},
i:function(a){var u,t,s,r=new P.eL(),q=this.a
if(q<0)return"-"+new P.aR(0-q).i(0)
u=r.$1(C.c.X(q,6e7)%60)
t=r.$1(C.c.X(q,1e6)%60)
s=new P.eK().$1(q%1e6)
return""+C.c.X(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
P.eK.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.eL.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bg.prototype={}
P.cR.prototype={
i:function(a){return"Throw of null."}}
P.ad.prototype={
gbi:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbh:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbi()+o+u
if(!q.a)return t
s=q.gbh()
r=P.iV(q.b)
return t+s+": "+r}}
P.bn.prototype={
gbi:function(){return"RangeError"},
gbh:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.f3.prototype={
gbi:function(){return"RangeError"},
gbh:function(){var u,t=this.b
if(typeof t!=="number")return t.a2()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gj:function(a){return this.f}}
P.hM.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.hJ.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.hg.prototype={
i:function(a){return"Bad state: "+this.a}}
P.ez.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.iV(u)+"."}}
P.fO.prototype={
i:function(a){return"Out of Memory"},
$ibg:1}
P.d0.prototype={
i:function(a){return"Stack Overflow"},
$ibg:1}
P.eF.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dv.prototype={
i:function(a){return"Exception: "+this.a}}
P.eZ.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.b.c5(s,0,75)+"...":s
return t+"\n"+r}}
P.v.prototype={}
P.j.prototype={
gj:function(a){var u,t=this.gV(this)
for(u=0;t.u();)++u
return u},
D:function(a,b){var u,t,s
P.jF(b,"index")
for(u=this.gV(this),t=0;u.u();){s=u.gL(u)
if(b===t)return s;++t}throw H.c(P.J(b,this,"index",null,t))},
i:function(a){return P.kA(this,"(",")")}}
P.f5.prototype={}
P.aZ.prototype={$in:1,$ij:1}
P.bN.prototype={}
P.b0.prototype={
gF:function(a){return P.a0.prototype.gF.call(this,this)},
i:function(a){return"null"}}
P.a4.prototype={}
P.a0.prototype={constructor:P.a0,$ia0:1,
n:function(a,b){return this===b},
gF:function(a){return H.bV(this)},
i:function(a){return"Instance of '"+H.e(H.bW(this))+"'"},
toString:function(){return this.i(this)}}
P.t.prototype={}
P.aF.prototype={
gj:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.l.prototype={}
W.eh.prototype={
gj:function(a){return a.length}}
W.ej.prototype={
i:function(a){return String(a)}}
W.ek.prototype={
i:function(a){return String(a)}}
W.cp.prototype={}
W.bf.prototype={
c0:function(a,b,c){if(c!=null)return a.getContext(b,P.lV(c))
return a.getContext(b)},
di:function(a,b){return this.c0(a,b,null)},
$ibf:1}
W.aP.prototype={
gj:function(a){return a.length}}
W.eB.prototype={
gj:function(a){return a.length}}
W.G.prototype={$iG:1}
W.bF.prototype={
gj:function(a){return a.length}}
W.eC.prototype={}
W.a6.prototype={}
W.ag.prototype={}
W.eD.prototype={
gj:function(a){return a.length}}
W.eE.prototype={
gj:function(a){return a.length}}
W.eG.prototype={
gj:function(a){return a.length}}
W.eH.prototype={
i:function(a){return String(a)}}
W.cw.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[[P.a3,P.a4]]},
$ix:1,
$ax:function(){return[[P.a3,P.a4]]},
$aq:function(){return[[P.a3,P.a4]]},
$ij:1,
$aj:function(){return[[P.a3,P.a4]]}}
W.cx.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gav(a))+" x "+H.e(this.gao(a))},
n:function(a,b){var u
if(b==null)return!1
u=J.V(b)
return!!u.$ia3&&a.left===u.gb9(b)&&a.top===u.gbb(b)&&this.gav(a)===u.gav(b)&&this.gao(a)===u.gao(b)},
gF:function(a){return W.jS(C.d.gF(a.left),C.d.gF(a.top),C.d.gF(this.gav(a)),C.d.gF(this.gao(a)))},
gcF:function(a){return a.bottom},
gao:function(a){return a.height},
gb9:function(a){return a.left},
gbY:function(a){return a.right},
gbb:function(a){return a.top},
gav:function(a){return a.width},
$ia3:1,
$aa3:function(){return[P.a4]}}
W.eI.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[P.t]},
$ix:1,
$ax:function(){return[P.t]},
$aq:function(){return[P.t]},
$ij:1,
$aj:function(){return[P.t]}}
W.eJ.prototype={
gj:function(a){return a.length}}
W.i9.prototype={
gj:function(a){return this.b.length},
h:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
k:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
this.a.replaceChild(c,u[b])},
l:function(a,b){this.a.appendChild(b)
return b},
gV:function(a){var u=this.h_(this)
return new J.W(u,u.length)},
$an:function(){return[W.T]},
$aq:function(){return[W.T]},
$aj:function(){return[W.T]}}
W.T.prototype={
gcH:function(a){return new W.i9(a,a.children)},
gcI:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.a2()
if(s<0)s=-s*0
if(typeof r!=="number")return r.a2()
if(r<0)r=-r*0
return new P.a3(u,t,s,r,[P.a4])},
i:function(a){return a.localName},
$iT:1}
W.i.prototype={$ii:1}
W.d.prototype={
f8:function(a,b,c,d){if(c!=null)this.dJ(a,b,c,!1)},
dJ:function(a,b,c,d){return a.addEventListener(b,H.bu(c,1),!1)}}
W.au.prototype={$iau:1}
W.eT.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.au]},
$ix:1,
$ax:function(){return[W.au]},
$aq:function(){return[W.au]},
$ij:1,
$aj:function(){return[W.au]}}
W.eU.prototype={
gj:function(a){return a.length}}
W.eY.prototype={
gj:function(a){return a.length}}
W.av.prototype={$iav:1}
W.f1.prototype={
gj:function(a){return a.length}}
W.bI.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.C]},
$ix:1,
$ax:function(){return[W.C]},
$aq:function(){return[W.C]},
$ij:1,
$aj:function(){return[W.C]}}
W.aT.prototype={$iaT:1,
gcJ:function(a){return a.data}}
W.bJ.prototype={$ibJ:1}
W.bj.prototype={$ibj:1}
W.ff.prototype={
i:function(a){return String(a)}}
W.fy.prototype={
gj:function(a){return a.length}}
W.fz.prototype={
h:function(a,b){return P.aK(a.get(b))},
G:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aK(u.value[1]))}},
gap:function(a){var u=H.b([],[P.t])
this.G(a,new W.fA(u))
return u},
gj:function(a){return a.size},
$aZ:function(){return[P.t,null]}}
W.fA.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fB.prototype={
h:function(a,b){return P.aK(a.get(b))},
G:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aK(u.value[1]))}},
gap:function(a){var u=H.b([],[P.t])
this.G(a,new W.fC(u))
return u},
gj:function(a){return a.size},
$aZ:function(){return[P.t,null]}}
W.fC.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aw.prototype={$iaw:1}
W.fD.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.aw]},
$ix:1,
$ax:function(){return[W.aw]},
$aq:function(){return[W.aw]},
$ij:1,
$aj:function(){return[W.aw]}}
W.ak.prototype={$iak:1}
W.i8.prototype={
k:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.f(t,b)
u.replaceChild(c,t[b])},
gV:function(a){var u=this.a.childNodes
return new W.cA(u,u.length)},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
$an:function(){return[W.C]},
$aq:function(){return[W.C]},
$aj:function(){return[W.C]}}
W.C.prototype={
fT:function(a,b){var u,t
try{u=a.parentNode
J.km(u,b,a)}catch(t){H.eg(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.dr(a):u},
eU:function(a,b,c){return a.replaceChild(b,c)},
$iC:1}
W.cQ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.C]},
$ix:1,
$ax:function(){return[W.C]},
$aq:function(){return[W.C]},
$ij:1,
$aj:function(){return[W.C]}}
W.az.prototype={$iaz:1,
gj:function(a){return a.length}}
W.fQ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.az]},
$ix:1,
$ax:function(){return[W.az]},
$aq:function(){return[W.az]},
$ij:1,
$aj:function(){return[W.az]}}
W.fZ.prototype={
h:function(a,b){return P.aK(a.get(b))},
G:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aK(u.value[1]))}},
gap:function(a){var u=H.b([],[P.t])
this.G(a,new W.h_(u))
return u},
gj:function(a){return a.size},
$aZ:function(){return[P.t,null]}}
W.h_.prototype={
$2:function(a,b){return this.a.push(a)}}
W.h2.prototype={
gj:function(a){return a.length}}
W.aC.prototype={$iaC:1}
W.hc.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.aC]},
$ix:1,
$ax:function(){return[W.aC]},
$aq:function(){return[W.aC]},
$ij:1,
$aj:function(){return[W.aC]}}
W.aD.prototype={$iaD:1}
W.hd.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.aD]},
$ix:1,
$ax:function(){return[W.aD]},
$aq:function(){return[W.aD]},
$ij:1,
$aj:function(){return[W.aD]}}
W.aE.prototype={$iaE:1,
gj:function(a){return a.length}}
W.hi.prototype={
h:function(a,b){return a.getItem(b)},
G:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gap:function(a){var u=H.b([],[P.t])
this.G(a,new W.hj(u))
return u},
gj:function(a){return a.length},
$aZ:function(){return[P.t,P.t]}}
W.hj.prototype={
$2:function(a,b){return this.a.push(a)}}
W.an.prototype={$ian:1}
W.aG.prototype={$iaG:1}
W.ao.prototype={$iao:1}
W.ho.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.ao]},
$ix:1,
$ax:function(){return[W.ao]},
$aq:function(){return[W.ao]},
$ij:1,
$aj:function(){return[W.ao]}}
W.hp.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.aG]},
$ix:1,
$ax:function(){return[W.aG]},
$aq:function(){return[W.aG]},
$ij:1,
$aj:function(){return[W.aG]}}
W.hu.prototype={
gj:function(a){return a.length}}
W.aH.prototype={$iaH:1}
W.bo.prototype={$ibo:1}
W.hx.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.aH]},
$ix:1,
$ax:function(){return[W.aH]},
$aq:function(){return[W.aH]},
$ij:1,
$aj:function(){return[W.aH]}}
W.hy.prototype={
gj:function(a){return a.length}}
W.b4.prototype={}
W.hN.prototype={
i:function(a){return String(a)}}
W.i1.prototype={
gj:function(a){return a.length}}
W.b6.prototype={
gfk:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.w("deltaY is not supported"))},
gfj:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.w("deltaX is not supported"))},
$ib6:1}
W.c3.prototype={
eV:function(a,b){return a.requestAnimationFrame(H.bu(b,1))},
dU:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.ia.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.G]},
$ix:1,
$ax:function(){return[W.G]},
$aq:function(){return[W.G]},
$ij:1,
$aj:function(){return[W.G]}}
W.dp.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
n:function(a,b){var u
if(b==null)return!1
u=J.V(b)
return!!u.$ia3&&a.left===u.gb9(b)&&a.top===u.gbb(b)&&a.width===u.gav(b)&&a.height===u.gao(b)},
gF:function(a){return W.jS(C.d.gF(a.left),C.d.gF(a.top),C.d.gF(a.width),C.d.gF(a.height))},
gao:function(a){return a.height},
gav:function(a){return a.width}}
W.id.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.av]},
$ix:1,
$ax:function(){return[W.av]},
$aq:function(){return[W.av]},
$ij:1,
$aj:function(){return[W.av]}}
W.dI.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.C]},
$ix:1,
$ax:function(){return[W.C]},
$aq:function(){return[W.C]},
$ij:1,
$aj:function(){return[W.C]}}
W.ip.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.aE]},
$ix:1,
$ax:function(){return[W.aE]},
$aq:function(){return[W.aE]},
$ij:1,
$aj:function(){return[W.aE]}}
W.iq.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.an]},
$ix:1,
$ax:function(){return[W.an]},
$aq:function(){return[W.an]},
$ij:1,
$aj:function(){return[W.an]}}
W.ib.prototype={}
W.ic.prototype={
$1:function(a){return this.a.$1(a)}}
W.I.prototype={
gV:function(a){return new W.cA(a,this.gj(a))}}
W.cA.prototype={
u:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.cl(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gL:function(a){return this.d}}
W.dn.prototype={}
W.dq.prototype={}
W.dr.prototype={}
W.ds.prototype={}
W.dt.prototype={}
W.dw.prototype={}
W.dx.prototype={}
W.dy.prototype={}
W.dz.prototype={}
W.dE.prototype={}
W.dF.prototype={}
W.dG.prototype={}
W.dH.prototype={}
W.dJ.prototype={}
W.dK.prototype={}
W.dN.prototype={}
W.dO.prototype={}
W.dP.prototype={}
W.c8.prototype={}
W.c9.prototype={}
W.dQ.prototype={}
W.dR.prototype={}
W.dV.prototype={}
W.dY.prototype={}
W.dZ.prototype={}
W.cb.prototype={}
W.cc.prototype={}
W.e0.prototype={}
W.e1.prototype={}
W.e5.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.ee.prototype={}
P.e4.prototype={$iaT:1,
gcJ:function(a){return this.a}}
P.iB.prototype={
$2:function(a,b){this.a[a]=b},
$S:8}
P.eV.prototype={
gb2:function(){var u=this.b,t=H.iE(u,"q",0)
return new H.bO(new H.i2(u,new P.eW(),[t]),new P.eX(),[t,W.T])},
k:function(a,b,c){var u=this.gb2()
J.kp(u.b.$1(J.iO(u.a,b)),c)},
l:function(a,b){this.b.a.appendChild(b)},
gj:function(a){return J.bc(this.gb2().a)},
h:function(a,b){var u=this.gb2()
return u.b.$1(J.iO(u.a,b))},
gV:function(a){var u=P.j1(this.gb2(),!1,W.T)
return new J.W(u,u.length)},
$an:function(){return[W.T]},
$aq:function(){return[W.T]},
$aj:function(){return[W.T]}}
P.eW.prototype={
$1:function(a){return!!J.V(a).$iT}}
P.eX.prototype={
$1:function(a){return H.h(a,"$iT")}}
P.ij.prototype={
gbY:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.r(t)
return u+t},
gcF:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.r(t)
return u+t},
i:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.V(b)
if(!!u.$ia3){t=q.a
if(t==u.gb9(b)){s=q.b
if(s==u.gbb(b)){r=q.c
if(typeof t!=="number")return t.A()
if(typeof r!=="number")return H.r(r)
if(t+r===u.gbY(b)){t=q.d
if(typeof s!=="number")return s.A()
if(typeof t!=="number")return H.r(t)
u=s+t===u.gcF(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gF:function(a){var u=this,t=u.a,s=J.by(t),r=u.b,q=J.by(r),p=u.c
if(typeof t!=="number")return t.A()
if(typeof p!=="number")return H.r(p)
p=C.c.gF(t+p)
t=u.d
if(typeof r!=="number")return r.A()
if(typeof t!=="number")return H.r(t)
t=C.c.gF(r+t)
return P.lf(P.ig(P.ig(P.ig(P.ig(0,s),q),p),t))}}
P.a3.prototype={
gb9:function(a){return this.a},
gbb:function(a){return this.b},
gav:function(a){return this.c},
gao:function(a){return this.d}}
P.aY.prototype={$iaY:1}
P.fb.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){return this.h(a,b)},
$in:1,
$an:function(){return[P.aY]},
$aq:function(){return[P.aY]},
$ij:1,
$aj:function(){return[P.aY]}}
P.b1.prototype={$ib1:1}
P.fM.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){return this.h(a,b)},
$in:1,
$an:function(){return[P.b1]},
$aq:function(){return[P.b1]},
$ij:1,
$aj:function(){return[P.b1]}}
P.fT.prototype={
gj:function(a){return a.length}}
P.hl.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){return this.h(a,b)},
$in:1,
$an:function(){return[P.t]},
$aq:function(){return[P.t]},
$ij:1,
$aj:function(){return[P.t]}}
P.k.prototype={
gcH:function(a){return new P.eV(a,new W.i8(a))}}
P.b3.prototype={$ib3:1}
P.hz.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){return this.h(a,b)},
$in:1,
$an:function(){return[P.b3]},
$aq:function(){return[P.b3]},
$ij:1,
$aj:function(){return[P.b3]}}
P.dA.prototype={}
P.dB.prototype={}
P.dL.prototype={}
P.dM.prototype={}
P.dW.prototype={}
P.dX.prototype={}
P.e2.prototype={}
P.e3.prototype={}
P.em.prototype={
gj:function(a){return a.length}}
P.en.prototype={
h:function(a,b){return P.aK(a.get(b))},
G:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aK(u.value[1]))}},
gap:function(a){var u=H.b([],[P.t])
this.G(a,new P.eo(u))
return u},
gj:function(a){return a.size},
$aZ:function(){return[P.t,null]}}
P.eo.prototype={
$2:function(a,b){return this.a.push(a)}}
P.ep.prototype={
gj:function(a){return a.length}}
P.bd.prototype={}
P.fN.prototype={
gj:function(a){return a.length}}
P.dm.prototype={}
P.cW.prototype={
fY:function(a,b,c,d,e,f,g){var u,t=J.V(g)
if(!!t.$iaT)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.lW(g))
return}if(!!t.$ibJ)t=!0
else t=!1
if(t){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.kq("Incorrect number or type of arguments"))}}
P.hf.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return P.aK(a.item(b))},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){return this.h(a,b)},
$in:1,
$an:function(){return[[P.bN,,,]]},
$aq:function(){return[[P.bN,,,]]},
$ij:1,
$aj:function(){return[[P.bN,,,]]}}
P.dS.prototype={}
P.dT.prototype={}
K.ei.prototype={
aH:function(a,b){return!0},
i:function(a){return"all"}}
K.cB.prototype={
aH:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)if(u[s].aH(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.m)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s}}
K.cK.prototype={}
K.ay.prototype={
aH:function(a,b){return!this.dq(0,b)},
i:function(a){return"!["+this.c6(0)+"]"}}
K.h3.prototype={
dw:function(a){var u,t,s,r
if(a.a.length<=0)throw H.c(P.o("May not create a Set with zero characters."))
u=P.v
t=new H.H([u,P.b8])
for(s=new H.bM(a,a.gj(a));s.u();)t.k(0,s.d,!0)
r=P.j1(new H.bk(t,[u]),!0,u)
C.a.dm(r)
this.a=r},
aH:function(a,b){return C.a.N(this.a,b)},
i:function(a){return P.j7(this.a)}}
L.d1.prototype={
p:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new L.db(this.a.I(0,b))
r.a=H.b([],[K.cK])
r.c=!1
this.c.push(r)
return r},
fs:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
if(r.aH(0,a))return r}return},
i:function(a){return this.b},
cu:function(){var u,t,s,r,q,p=this,o="("+p.b+")",n=p.d
if(n!=null){n=n.b
o+=" => ["+n+"]"
u=p.a
if(u.c.N(0,n))o+=" (consume)"
for(n=p.d.c,n=new H.bk(n,[H.ar(n,0)]),n=n.gV(n);n.u();){t=n.d
o+="\n"
s=p.d.c.h(0,t)
t=o+("  -- "+H.e(t)+" => ["+H.e(s)+"]")
o=u.c.N(0,s)?t+" (consume)":t}}for(n=p.c,u=n.length,r=0;r<n.length;n.length===u||(0,H.m)(n),++r){q=n[r]
o=o+"\n"+("  -- "+q.i(0))}return o.charCodeAt(0)==0?o:o}}
L.d8.prototype={
i:function(a){var u=H.k4(this.b,"\n","\\n"),t=H.k4(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
L.d9.prototype={
i:function(a){return this.b}}
L.hv.prototype={
I:function(a,b){var u=this.a.h(0,b)
if(u==null){u=new L.d1(this,b)
u.c=H.b([],[L.db])
this.a.k(0,b,u)}return u},
b_:function(a){var u,t=this.b.h(0,a)
if(t==null){t=new L.d9(a)
u=P.t
t.c=new H.H([u,u])
this.b.k(0,a,t)}return t},
dh:function(a){return this.h1(a)},
h1:function(a){var u=this
return P.lo(function(){var t=a
var s=0,r=1,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
return function $async$dh(b,a0){if(b===1){q=a0
s=r}while(true)switch(s){case 0:g=u.d
f=[P.v]
e=H.b([],f)
d=H.b([],f)
c=H.b([],f)
p=null,o=0,n=0,m=0
case 2:if(!!0){s=3
break}if(c.length!==0)l=C.a.fR(c,0)
else{if(!t.u()){s=3
break}l=t.d}d.push(l);++o
k=g.fs(l)
s=k==null?4:6
break
case 4:if(p==null){j=P.j7(d)
throw H.c(P.o("Untokenizable string [state: "+g.b+", index "+o+']: "'+j+'"'))}if(!!d.fixed$length)H.p(P.w("removeRange"))
P.j5(0,m,d.length)
d.splice(0,m-0)
C.a.aD(c,d)
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
if(g.d!=null){j=P.j7(e)
i=g.d
h=i.c.h(0,j)
p=new L.d8(h==null?i.b:h,j,o)
m=d.length
n=o}case 5:s=2
break
case 3:s=p!=null&&!u.c.N(0,p.a)?10:11
break
case 10:s=12
return p
case 12:case 11:return P.ld()
case 1:return P.le(q)}}},L.d8)},
i:function(a){var u,t=new P.aF(""),s=this.d
if(s!=null)t.a=s.cu()+"\n"
for(s=this.a,s=s.gh2(s),s=new H.cJ(J.bb(s.a),s.b);s.u();){u=s.a
if(u!=this.d)t.a+=u.cu()+"\n"}s=t.a
return s.charCodeAt(0)==0?s:s}}
L.db.prototype={
i:function(a){return this.b.b+": "+this.c6(0)}}
O.af.prototype={
bd:function(a){var u=this
u.a=H.b([],[a])
u.d=u.c=u.b=null},
c1:function(a,b,c){this.b=b
this.c=a
this.d=c},
aJ:function(a,b){return this.c1(a,null,b)},
aP:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
bu:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gj:function(a){return this.a.length},
gV:function(a){var u=this.a
return new J.W(u,u.length)},
D:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
l:function(a,b){var u,t,s=this,r=[H.iE(s,"af",0)]
if(s.aP(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.bu(t,H.b([b],r))}},
aD:function(a,b){var u,t
if(this.aP(b)){u=this.a
t=u.length
C.a.aD(u,b)
this.bu(t,b)}},
k:function(a,b,c){var u,t,s,r=this,q=r.a
if(b>=q.length)return H.f(q,b)
u=q[b]
if(!J.F(u,c)&&r.aP(H.b([c],[H.iE(r,"af",0)]))){q=r.a
if(b>=q.length)return H.f(q,b)
q[b]=c
q=[H.iE(r,"af",0)]
t=H.b([u],q)
s=r.d
if(s!=null)s.$2(b,t)
r.bu(b,H.b([c],q))}},
$ij:1}
O.bQ.prototype={
gj:function(a){return this.a.length},
gm:function(){var u=this.b
return u==null?this.b=D.A():u},
ax:function(){var u=this.b
if(u!=null)u.v(null)},
gO:function(a){var u=this.a
if(u.length>0)return C.a.gbP(u)
else return V.b_()},
ba:function(a){var u=this.a
if(a==null)u.push(V.b_())
else u.push(a)
this.ax()},
ar:function(){var u=this.a
if(u.length>0){u.pop()
this.ax()}}}
E.er.prototype={}
E.at.prototype={
sc3:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gm().M(0,s.gda())
u=s.c
if(u!=null)u.gm().l(0,s.gda())
t=new D.u("shape",r,s.c)
t.b=!0
s.aq(t)}},
sd5:function(a){var u,t,s=this
if(!J.F(s.r,a)){u=s.r
if(u!=null)u.gm().M(0,s.gd8())
if(a!=null)a.gm().l(0,s.gd8())
s.r=a
t=new D.u("mover",u,a)
t.b=!0
s.aq(t)}},
ad:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.a:null
if(!J.F(q,s.x)){u=s.x
s.x=q
t=new D.u("matrix",u,q)
t.b=!0
s.aq(t)}for(r=s.y.a,r=new J.W(r,r.length);r.u();)r.d.ad(0,b)},
a0:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)s.a.push(s.gO(s))
else s.a.push(r.q(0,s.gO(s)))
s.ax()
a.bX(t.f)
s=a.dy
u=(s&&C.a).gbP(s)
if(u!=null&&t.d!=null)u.de(a,t)
for(s=t.y.a,s=new J.W(s,s.length);s.u();)s.d.a0(a)
a.bW()
a.dx.ar()},
aq:function(a){var u=this.z
if(u!=null)u.v(a)},
Y:function(){return this.aq(null)},
dc:function(a){this.e=null
this.aq(a)},
fH:function(){return this.dc(null)},
d9:function(a){this.aq(a)},
fG:function(){return this.d9(null)},
d7:function(a){this.aq(a)},
fD:function(){return this.d7(null)},
fC:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gd6(),s=[{func:1,ret:-1,args:[D.O]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.ah()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.Y()},
fF:function(a,b){var u,t,s,r,q
for(u=b.length,t=this.gd6(),s=0;s<b.length;b.length===u||(0,H.m)(b),++s){r=b[s]
if(r!=null){q=r.z
if(q==null){q=new D.ah()
q.d=0
r.z=q}q.M(0,t)}}this.Y()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.be.prototype={
i:function(a){return this.b}}
E.bl.prototype={
i:function(a){return this.b}}
E.du.prototype={}
E.fV.prototype={
dv:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.a7(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.bQ()
t=[V.aa]
u.a=H.b([],t)
u.gm().l(0,new E.fW(s))
s.cy=u
u=new O.bQ()
u.a=H.b([],t)
u.gm().l(0,new E.fX(s))
s.db=u
u=new O.bQ()
u.a=H.b([],t)
u.gm().l(0,new E.fY(s))
s.dx=u
u=H.b([],[O.d4])
s.dy=u
u.push(null)
s.fr=new H.H([P.t,A.cX])},
gfQ:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gO(s)
u=t.db
u=t.z=s.q(0,u.gO(u))
s=u}return s},
bX:function(a){var u=this.dy
u.push(a==null?(u&&C.a).gbP(u):a)},
bW:function(){var u=this.dy
if(u.length>1)u.pop()},
cA:function(a){var u=a.b
if(u.length===0)throw H.c(P.o("May not cache a shader with no name."))
if(this.fr.ff(0,u))throw H.c(P.o('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.k(0,u,a)}}
E.fW.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.fX.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.fY.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.d6.prototype={
cc:function(a){this.df()},
cb:function(){return this.cc(null)},
gft:function(){var u,t=this,s=Date.now(),r=C.c.X(P.jt(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.a7(s,!1)
return u/r},
cq:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.q()
if(typeof r!=="number")return H.r(r)
u=C.d.bN(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.q()
t=C.d.bN(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.jJ(C.h,s.gfU())}},
df:function(){if(!this.cx){this.cx=!0
var u=window
C.t.dU(u)
C.t.eV(u,W.jV(new E.ht(this),P.a4))}},
fS:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.cq()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.a7(r,!1)
s.y=P.jt(r-s.r.a).a*0.000001
r=s.cy
C.a.sj(r.a,0)
r.ax()
r=s.db
C.a.sj(r.a,0)
r.ax()
r=s.dx
C.a.sj(r.a,0)
r.ax()
r=s.dy;(r&&C.a).sj(r,0)
s.dy.push(null)
o.a0(p.e)}}catch(q){u=H.eg(q)
t=H.ji(q)
P.jm("Error: "+H.e(u))
P.jm("Stack: "+H.e(t))
throw H.c(u)}}}
E.ht.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.fS()}}}
Z.dj.prototype={}
Z.cq.prototype={
U:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.eg(s)
t=P.o('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.e(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.dk.prototype={}
Z.bB.prototype={
an:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
U:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].U(a)},
au:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
a0:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.f(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.t],p=H.b([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)p.push(u[s].i(0))
r=H.b([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a5(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.p(p,", ")+"\nAttrs:   "+C.a.p(r,", ")}}
Z.bh.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.bW(this.c))+"'")+"]"}}
Z.aI.prototype={
gc4:function(a){var u=this.a,t=(u&$.ac().a)!==0?3:0
if((u&$.aN().a)!==0)t+=3
if((u&$.aM().a)!==0)t+=3
if((u&$.ba().a)!==0)t+=2
if((u&$.aO().a)!==0)t+=3
if((u&$.cj().a)!==0)t+=3
if((u&$.ck().a)!==0)t+=4
if((u&$.bx().a)!==0)++t
return(u&$.aL().a)!==0?t+4:t},
fb:function(a){var u,t=$.ac(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aN()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aM()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ba()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aO()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cj()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ck()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bx()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aL()
if((s&t.a)!==0)if(u===a)return t
return $.kk()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aI))return!1
return this.a===b.a},
i:function(a){var u=H.b([],[P.t]),t=this.a
if((t&$.ac().a)!==0)u.push("Pos")
if((t&$.aN().a)!==0)u.push("Norm")
if((t&$.aM().a)!==0)u.push("Binm")
if((t&$.ba().a)!==0)u.push("Txt2D")
if((t&$.aO().a)!==0)u.push("TxtCube")
if((t&$.cj().a)!==0)u.push("Clr3")
if((t&$.ck().a)!==0)u.push("Clr4")
if((t&$.bx().a)!==0)u.push("Weight")
if((t&$.aL().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.a.p(u,"|")}}
D.eu.prototype={}
D.ah.prototype={
l:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.O]}]):u).push(b)},
M:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.a.N(s,b)
if(s===!0){s=t.a
u=(s&&C.a).M(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.a.N(s,b)
if(s===!0){s=t.b
u=(s&&C.a).M(s,b)||u}return u},
v:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.O()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.G(P.j1(u,!0,{func:1,ret:-1,args:[D.O]}),new D.eR(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.O]}])
C.a.G(u,new D.eS(q))}return!0},
fp:function(){return this.v(null)},
as:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.v(u)}}}}
D.eR.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.eS.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.O.prototype={}
D.aU.prototype={}
D.aV.prototype={}
D.u.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cr.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cr))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.cG.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cG))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.fa.prototype={
fM:function(a){this.c=a.b
this.d.l(0,a.a)
return!1},
fI:function(a){this.c=a.b
this.d.M(0,a.a)
return!1}}
X.cI.prototype={}
X.fg.prototype={
aN:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.q()
u=b.b
t=q.ch
if(typeof u!=="number")return u.q()
s=new V.X(o.a+n*m,o.b+u*t)
t=q.a.gaE()
r=new X.ax(a,V.aA(),q.x,t,s)
r.b=!0
q.z=new P.a7(p,!1)
q.x=s
return r},
bV:function(a,b){this.r=a.a
return!1},
aW:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.dk()
if(typeof u!=="number")return u.aa()
this.r=(u&~t)>>>0
return!1},
aV:function(a,b){var u=this.d
if(u==null)return!1
u.v(this.aN(a,b))
return!0},
fN:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaE()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.q()
q=a.b
p=o.cy
if(typeof q!=="number")return q.q()
t=new X.bR(new V.D(s*r,q*p),u,t)
t.b=!0
n.v(t)
return!0},
es:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.cI(c,r.a.gaE(),b)
s.b=!0
t.v(s)
r.y=new P.a7(u,!1)
r.x=V.aA()}}
X.a8.prototype={
n:function(a,b){var u=this
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
X.fE.prototype={
bk:function(a,b,c){var u=this,t=new P.a7(Date.now(),!1),s=u.a.gaE(),r=new X.ax(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
bV:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.v(this.bk(a,b,!0))
return!0},
aW:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.dk()
if(typeof t!=="number")return t.aa()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.v(u.bk(a,b,!0))
return!0},
aV:function(a,b){var u=this.d
if(u==null)return!1
u.v(this.bk(a,b,!1))
return!0},
fO:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaE()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.q()
r=a.b
q=p.ch
if(typeof r!=="number")return r.q()
u=new X.bR(new V.D(t*s,r*q),u,b)
u.b=!0
o.v(u)
return!0},
gcL:function(){var u=this.b
return u==null?this.b=D.A():u},
gbZ:function(){var u=this.c
return u==null?this.c=D.A():u},
gd4:function(){var u=this.d
return u==null?this.d=D.A():u}}
X.bR.prototype={}
X.fS.prototype={}
X.da.prototype={}
X.hw.prototype={
aN:function(a,b){var u=this,t=new P.a7(Date.now(),!1),s=a.length>0?a[0]:V.aA(),r=u.a.gaE(),q=new X.da(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
fL:function(a){var u=this.b
if(u==null)return!1
u.v(this.aN(a,!0))
return!0},
fJ:function(a){var u=this.c
if(u==null)return!1
u.v(this.aN(a,!0))
return!0},
fK:function(a){var u=this.d
if(u==null)return!1
u.v(this.aN(a,!1))
return!0}}
X.de.prototype={
gaE:function(){var u=this.a,t=C.f.gcI(u).c
t.toString
u=C.f.gcI(u).d
u.toString
return V.fU(0,0,t,u)},
ci:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.cG(u,new X.a8(t,a.altKey,a.shiftKey))},
aC:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.a8(t,a.altKey,a.shiftKey)},
by:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.a8(t,a.altKey,a.shiftKey)},
ak:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.C()
u=t.top
if(typeof r!=="number")return r.C()
return new V.X(s-q,r-u)},
aQ:function(a){return new V.D(a.movementX,a.movementY)},
bv:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.X])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
q=C.d.ac(r.pageX)
C.d.ac(r.pageY)
p=o.left
C.d.ac(r.pageX)
n.push(new V.X(q-p,C.d.ac(r.pageY)-o.top))}return n},
ai:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cr(u,new X.a8(t,a.altKey,a.shiftKey))},
bl:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.C()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.C()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
em:function(a){this.f=!0},
ea:function(a){this.f=!1},
eg:function(a){if(this.f&&this.bl(a))a.preventDefault()},
eq:function(a){var u
if(!this.f)return
u=this.ci(a)
this.b.fM(u)},
eo:function(a){var u
if(!this.f)return
u=this.ci(a)
this.b.fI(u)},
ev:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aC(a)
if(r.x){u=r.ai(a)
t=r.aQ(a)
if(r.d.bV(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.ai(a)
s=r.ak(a)
if(r.c.bV(u,s))a.preventDefault()},
ez:function(a){var u,t,s,r=this
r.aC(a)
u=r.ai(a)
if(r.x){t=r.aQ(a)
if(r.d.aW(u,t))a.preventDefault()
return}if(r.r)return
s=r.ak(a)
if(r.c.aW(u,s))a.preventDefault()},
ek:function(a){var u,t,s,r=this
if(!r.bl(a)){r.aC(a)
u=r.ai(a)
if(r.x){t=r.aQ(a)
if(r.d.aW(u,t))a.preventDefault()
return}if(r.r)return
s=r.ak(a)
if(r.c.aW(u,s))a.preventDefault()}},
ex:function(a){var u,t,s,r=this
r.aC(a)
u=r.ai(a)
if(r.x){t=r.aQ(a)
if(r.d.aV(u,t))a.preventDefault()
return}if(r.r)return
s=r.ak(a)
if(r.c.aV(u,s))a.preventDefault()},
ei:function(a){var u,t,s,r=this
if(!r.bl(a)){r.aC(a)
u=r.ai(a)
if(r.x){t=r.aQ(a)
if(r.d.aV(u,t))a.preventDefault()
return}if(r.r)return
s=r.ak(a)
if(r.c.aV(u,s))a.preventDefault()}},
eB:function(a){var u,t,s=this
s.aC(a)
u=new V.D((a&&C.r).gfj(a),C.r.gfk(a)).q(0,s.Q)
if(s.x){if(s.d.fN(u))a.preventDefault()
return}if(s.r)return
t=s.ak(a)
if(s.c.fO(u,t))a.preventDefault()},
eD:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ai(s.y)
t=s.ak(s.y)
s.d.es(u,t,r)}},
eR:function(a){var u,t=this
t.a.focus()
t.f=!0
t.by(a)
u=t.bv(a)
if(t.e.fL(u))a.preventDefault()},
eN:function(a){var u
this.by(a)
u=this.bv(a)
if(this.e.fJ(u))a.preventDefault()},
eP:function(a){var u
this.by(a)
u=this.bv(a)
if(this.e.fK(u))a.preventDefault()}}
D.eq.prototype={$iY:1}
D.aQ.prototype={
ah:function(a){var u=this.r
if(u!=null)u.v(a)},
dB:function(){return this.ah(null)},
$iY:1}
D.Y.prototype={}
D.cH.prototype={
ah:function(a){var u=this.y
if(u!=null)u.v(a)},
co:function(a){var u=this.z
if(u!=null)u.v(a)},
er:function(){return this.co(null)},
eF:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.m)(a),++t){s=a[t]
if(s==null||this.dP(s))return!1}return!0},
e2:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcn(),s=[{func:1,ret:-1,args:[D.O]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q instanceof D.aQ)this.f.push(q)
p=q.r
if(p==null){p=new D.ah()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}u=new D.aU()
u.b=!0
this.ah(u)},
eJ:function(a,b){var u,t,s,r,q
for(u=b.length,t=this.gcn(),s=0;s<b.length;b.length===u||(0,H.m)(b),++s){r=b[s]
if(r instanceof D.aQ)C.a.M(this.f,r)
q=r.r
if(q==null){q=new D.ah()
q.d=0
r.r=q}q.M(0,t)}u=new D.aV()
u.b=!0
this.ah(u)},
dP:function(a){var u=C.a.N(this.f,a)
return u},
$aj:function(){return[D.Y]},
$aaf:function(){return[D.Y]}}
D.fR.prototype={$iY:1}
D.he.prototype={$iY:1}
V.N.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.N))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"]"}}
V.as.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.as))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.E(u.a,3,0)+", "+V.E(u.b,3,0)+", "+V.E(u.c,3,0)+", "+V.E(u.d,3,0)+"]"}}
V.eQ.prototype={}
V.cM.prototype={
a1:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.K])
return t},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cM))return!1
u=b.a
t=$.z().a
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
i:function(a){var u,t,s,r,q=this,p=[P.K],o=V.bw(H.b([q.a,q.d,q.r],p),3,0),n=V.bw(H.b([q.b,q.e,q.x],p),3,0),m=V.bw(H.b([q.c,q.f,q.y],p),3,0)
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
V.aa.prototype={
a1:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.K])
return t},
bO:function(b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.a,a3=a1.f,a4=a1.b,a5=a1.e,a6=a2*a3-a4*a5,a7=a1.r,a8=a1.c,a9=a2*a7-a8*a5,b0=a1.x,b1=a1.d
if(typeof b1!=="number")return b1.q()
u=a2*b0-b1*a5
t=a4*a7-a8*a3
s=a4*b0-b1*a3
r=a8*b0-b1*a7
q=a1.y
p=a1.cy
o=a1.z
n=a1.cx
m=q*p-o*n
l=a1.db
k=a1.Q
j=q*l-k*n
i=a1.dx
h=a1.ch
g=q*i-h*n
f=o*l-k*p
e=o*i-h*p
d=k*i-h*l
c=a6*d-a9*e+u*f+t*g-s*j+r*m
if(Math.abs(c-0)<$.z().a)return V.b_()
b=1/c
a=-a5
a0=-n
return V.aj((a3*d-a7*e+b0*f)*b,(-a4*d+a8*e-b1*f)*b,(p*r-l*s+i*t)*b,(-o*r+k*s-h*t)*b,(a*d+a7*g-b0*j)*b,(a2*d-a8*g+b1*j)*b,(a0*r+l*u-i*a9)*b,(q*r-k*u+h*a9)*b,(a5*e-a3*g+b0*m)*b,(-a2*e+a4*g-b1*m)*b,(n*s-p*u+i*a6)*b,(-q*s+o*u-h*a6)*b,(a*f+a3*j-a7*m)*b,(a2*f-a4*j+a8*m)*b,(a0*t+p*a9-l*a6)*b,(q*t-o*a9+k*a6)*b)},
q:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=a3.a,a5=b3.a,a6=a3.b,a7=b3.e,a8=a3.c,a9=b3.y,b0=a3.d,b1=b3.cx
if(typeof b0!=="number")return b0.q()
u=b3.b
t=b3.f
s=b3.z
r=b3.cy
q=b3.c
p=b3.r
o=b3.Q
n=b3.db
m=b3.d
if(typeof m!=="number")return H.r(m)
l=b3.x
k=b3.ch
j=b3.dx
i=a3.e
h=a3.f
g=a3.r
f=a3.x
e=a3.y
d=a3.z
c=a3.Q
b=a3.ch
a=a3.cx
a0=a3.cy
a1=a3.db
a2=a3.dx
return V.aj(a4*a5+a6*a7+a8*a9+b0*b1,a4*u+a6*t+a8*s+b0*r,a4*q+a6*p+a8*o+b0*n,a4*m+a6*l+a8*k+b0*j,i*a5+h*a7+g*a9+f*b1,i*u+h*t+g*s+f*r,i*q+h*p+g*o+f*n,i*m+h*l+g*k+f*j,e*a5+d*a7+c*a9+b*b1,e*u+d*t+c*s+b*r,e*q+d*p+c*o+b*n,e*m+d*l+c*k+b*j,a*a5+a0*a7+a1*a9+a2*b1,a*u+a0*t+a1*s+a2*r,a*q+a0*p+a1*o+a2*n,a*m+a0*l+a1*k+a2*j)},
bc:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.y(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
b0:function(a){var u=this,t=a.a,s=a.b,r=a.c,q=u.d
if(typeof q!=="number")return H.r(q)
return new V.P(u.a*t+u.b*s+u.c*r+q,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.aa))return!1
u=b.a
t=$.z()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
if(!(Math.abs(b.c-q.c)<s))return!1
u=b.d
r=q.d
t.toString
if(typeof u!=="number")return u.C()
if(typeof r!=="number")return H.r(r)
if(!(Math.abs(u-r)<s))return!1
if(!(Math.abs(b.e-q.e)<s))return!1
if(!(Math.abs(b.f-q.f)<s))return!1
if(!(Math.abs(b.r-q.r)<s))return!1
if(!(Math.abs(b.x-q.x)<s))return!1
if(!(Math.abs(b.y-q.y)<s))return!1
if(!(Math.abs(b.z-q.z)<s))return!1
if(!(Math.abs(b.Q-q.Q)<s))return!1
if(!(Math.abs(b.ch-q.ch)<s))return!1
if(!(Math.abs(b.cx-q.cx)<s))return!1
if(!(Math.abs(b.cy-q.cy)<s))return!1
if(!(Math.abs(b.db-q.db)<s))return!1
if(!(Math.abs(b.dx-q.dx)<s))return!1
return!0},
i:function(a){return this.H()},
w:function(a){var u,t,s,r,q,p=this,o=[P.K],n=V.bw(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.bw(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.bw(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.bw(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
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
H:function(){return this.w("")}}
V.X.prototype={
C:function(a,b){return new V.X(this.a-b.a,this.b-b.b)},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+"]"}}
V.P.prototype={
C:function(a,b){return new V.P(this.a-b.a,this.b-b.b,this.c-b.c)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.P))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"]"}}
V.aB.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aB))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.E(u.a,3,0)+", "+V.E(u.b,3,0)+", "+V.E(u.c,3,0)+", "+V.E(u.d,3,0)+"]"}}
V.cV.prototype={
ga4:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cV))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.E(u.a,3,0)+", "+V.E(u.b,3,0)+", "+V.E(u.c,3,0)+", "+V.E(u.d,3,0)+"]"}}
V.D.prototype={
bQ:function(a){return Math.sqrt(this.B(this))},
B:function(a){var u,t,s=this.a,r=a.a
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
return new V.D(t*b,u*b)},
t:function(a,b){var u,t
if(Math.abs(b-0)<$.z().a){u=$.jN
return u==null?$.jN=new V.D(0,0):u}u=this.a
if(typeof u!=="number")return u.t()
t=this.b
if(typeof t!=="number")return t.t()
return new V.D(u/b,t/b)},
n:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.D))return!1
u=b.a
t=this.a
s=$.z()
s.toString
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.r(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.r(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+"]"}}
V.y.prototype={
bQ:function(a){return Math.sqrt(this.B(this))},
B:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bR:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.y(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aT:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.y(u*t-s*r,s*q-p*t,p*r-u*q)},
A:function(a,b){return new V.y(this.a+b.a,this.b+b.b,this.c+b.c)},
K:function(a){return new V.y(-this.a,-this.b,-this.c)},
t:function(a,b){if(Math.abs(b-0)<$.z().a)return V.di()
return new V.y(this.a/b,this.b/b,this.c/b)},
d1:function(){var u=$.z().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.y))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"]"}}
U.ey.prototype={
be:function(a){var u=V.mk(a,this.c,this.b)
return u},
gm:function(){var u=this.y
return u==null?this.y=D.A():u},
J:function(a){var u=this.y
if(u!=null)u.v(a)},
sc_:function(a,b){},
sbS:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.z().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.be(u)}s=new D.u("maximumLocation",s,t.b)
s.b=!0
t.J(s)}},
sbU:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.z().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.be(u)}s=new D.u("minimumLocation",s,t.c)
s.b=!0
t.J(s)}},
sa3:function(a,b){var u,t=this
b=t.be(b)
u=t.d
if(!(Math.abs(u-b)<$.z().a)){t.d=b
u=new D.u("location",u,b)
u.b=!0
t.J(u)}},
sbT:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.z().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.u("maximumVelocity",r,a)
r.b=!0
s.J(r)}},
sP:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.z().a)){u.f=a
t=new D.u("velocity",t,a)
t.b=!0
u.J(t)}},
sbE:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.z().a)){this.x=a
u=new D.u("dampening",u,a)
u.b=!0
this.J(u)}},
ad:function(a,b){var u,t,s,r=this,q=r.f,p=$.z().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa3(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.z().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sP(u)}}}
U.bE.prototype={
gm:function(){var u=this.b
return u==null?this.b=D.A():u},
sO:function(a,b){var u,t,s,r=this
if(b==null)b=V.b_()
if(!J.F(r.a,b)){u=r.a
r.a=b
t=new D.u("matrix",u,b)
t.b=!0
s=r.b
if(s!=null)s.v(t)}},
aI:function(a,b,c){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bE))return!1
return J.F(this.a,b.a)},
i:function(a){return"Constant: "+this.a.w("          ")}}
U.bH.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.A():u},
J:function(a){var u=this.e
if(u!=null)u.v(a)},
a_:function(){return this.J(null)},
dD:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gay(),s=[{func:1,ret:-1,args:[D.O]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.gm()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.aU()
u.b=!0
this.J(u)},
eH:function(a,b){var u,t,s,r
for(u=b.length,t=this.gay(),s=0;s<b.length;b.length===u||(0,H.m)(b),++s){r=b[s]
if(r!=null)r.gm().M(0,t)}u=new D.aV()
u.b=!0
this.J(u)},
aI:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.a2()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.W(r,r.length),u=null;r.u();){q=r.d
if(q!=null){t=q.aI(0,b,c)
if(t!=null)u=u==null?t:t.q(0,u)}}s.f=u==null?V.b_():u
r=s.e
if(r!=null)r.as(0)}return s.f},
n:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bH))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.f(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.f(r,t)
if(!J.F(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$aj:function(){return[U.a_]},
$aaf:function(){return[U.a_]},
$ia_:1}
U.a_.prototype={}
U.df.prototype={
gm:function(){var u=this.cy
return u==null?this.cy=D.A():u},
J:function(a){var u=this.cy
if(u!=null)u.v(a)},
a_:function(){return this.J(null)},
aR:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gcL().l(0,u.gbm())
u.a.c.gd4().l(0,u.gbo())
u.a.c.gbZ().l(0,u.gbq())
return!0},
bn:function(a){var u=this
if(!J.F(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bp:function(a){var u,t,s,r,q,p,o,n=this
H.h(a,"$iax")
if(!n.y)return
if(n.x){u=a.d.C(0,a.y)
u=new V.D(u.a,u.b)
u=u.B(u)
t=n.r
if(typeof t!=="number")return H.r(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.C(0,a.y)
u=new V.D(t.a,t.b).q(0,2).t(0,u.ga4())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.q()
s=n.e
if(typeof s!=="number")return H.r(s)
t.sP(u*10*s)}else{u=a.c
t=a.d
s=t.C(0,a.y)
r=new V.D(s.a,s.b).q(0,2).t(0,u.ga4())
s=n.b
q=r.a
if(typeof q!=="number")return q.K()
p=n.e
if(typeof p!=="number")return H.r(p)
o=n.z
if(typeof o!=="number")return H.r(o)
s.sa3(0,-q*p+o)
n.b.sP(0)
t=t.C(0,a.z)
n.Q=new V.D(t.a,t.b).q(0,2).t(0,u.ga4())}n.a_()},
br:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.B(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.q()
s=r.e
if(typeof s!=="number")return H.r(s)
u.sP(t*10*s)
r.a_()}},
aI:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.a2()
if(q<p){r.ch=p
u=b.y
r.b.ad(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.aj(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$ia_:1}
U.dg.prototype={
gm:function(){var u=this.fx
return u==null?this.fx=D.A():u},
J:function(a){var u=this.fx
if(u!=null)u.v(a)},
a_:function(){return this.J(null)},
aR:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gcL().l(0,s.gbm())
s.a.c.gd4().l(0,s.gbo())
s.a.c.gbZ().l(0,s.gbq())
u=s.a.d
t=u.f
u=t==null?u.f=D.A():t
u.l(0,s.gdW())
u=s.a.d
t=u.d
u=t==null?u.d=D.A():t
u.l(0,s.gdY())
u=s.a.e
t=u.b
u=t==null?u.b=D.A():t
u.l(0,s.gf6())
u=s.a.e
t=u.d
u=t==null?u.d=D.A():t
u.l(0,s.gf4())
u=s.a.e
t=u.c
u=t==null?u.c=D.A():t
u.l(0,s.gf2())
return!0},
af:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.K()
u=-u}if(this.r){if(typeof t!=="number")return t.K()
t=-t}return new V.D(u,t)},
bn:function(a){var u=this
H.h(a,"$iax")
if(!J.F(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bp:function(a){var u,t,s,r,q,p,o,n=this
H.h(a,"$iax")
if(!n.cx)return
if(n.ch){u=a.d.C(0,a.y)
u=new V.D(u.a,u.b)
u=u.B(u)
t=n.Q
if(typeof t!=="number")return H.r(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.C(0,a.y)
u=n.af(new V.D(t.a,t.b).q(0,2).t(0,u.ga4()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.K()
s=n.y
if(typeof s!=="number")return H.r(s)
t.sP(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.K()
t=n.x
if(typeof t!=="number")return H.r(t)
s.sP(-u*10*t)}else{u=a.c
t=a.d
s=t.C(0,a.y)
r=n.af(new V.D(s.a,s.b).q(0,2).t(0,u.ga4()))
s=n.c
q=r.a
if(typeof q!=="number")return q.K()
p=n.y
if(typeof p!=="number")return H.r(p)
o=n.cy
if(typeof o!=="number")return H.r(o)
s.sa3(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.K()
q=n.x
if(typeof q!=="number")return H.r(q)
s=n.db
if(typeof s!=="number")return H.r(s)
o.sa3(0,-p*q+s)
n.b.sP(0)
n.c.sP(0)
t=t.C(0,a.z)
n.dx=n.af(new V.D(t.a,t.b).q(0,2).t(0,u.ga4()))}n.a_()},
br:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.B(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.K()
s=r.y
if(typeof s!=="number")return H.r(s)
u.sP(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.K()
u=r.x
if(typeof u!=="number")return H.r(u)
s.sP(-t*10*u)
r.a_()}},
dX:function(a){var u=this
if(H.h(a,"$icI").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
dZ:function(a){var u,t,s,r,q,p,o,n=this
H.h(a,"$iax")
if(!J.F(n.d,a.x.b))return
u=a.c
t=a.d
s=t.C(0,a.y)
r=n.af(new V.D(s.a,s.b).q(0,2).t(0,u.ga4()))
s=n.c
q=r.a
if(typeof q!=="number")return q.K()
p=n.y
if(typeof p!=="number")return H.r(p)
o=n.cy
if(typeof o!=="number")return H.r(o)
s.sa3(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.K()
q=n.x
if(typeof q!=="number")return H.r(q)
s=n.db
if(typeof s!=="number")return H.r(s)
o.sa3(0,-p*q+s)
n.b.sP(0)
n.c.sP(0)
t=t.C(0,a.z)
n.dx=n.af(new V.D(t.a,t.b).q(0,2).t(0,u.ga4()))
n.a_()},
f7:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
f5:function(a){var u,t,s,r,q,p,o,n=this
H.h(a,"$ida")
if(!n.cx)return
if(n.ch){u=a.d.C(0,a.y)
u=new V.D(u.a,u.b)
u=u.B(u)
t=n.Q
if(typeof t!=="number")return H.r(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.C(0,a.y)
u=n.af(new V.D(t.a,t.b).q(0,2).t(0,u.ga4()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.K()
s=n.y
if(typeof s!=="number")return H.r(s)
t.sP(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.K()
t=n.x
if(typeof t!=="number")return H.r(t)
s.sP(-u*10*t)}else{u=a.c
t=a.d
s=t.C(0,a.y)
r=n.af(new V.D(s.a,s.b).q(0,2).t(0,u.ga4()))
s=n.c
q=r.a
if(typeof q!=="number")return q.K()
p=n.y
if(typeof p!=="number")return H.r(p)
o=n.cy
if(typeof o!=="number")return H.r(o)
s.sa3(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.K()
q=n.x
if(typeof q!=="number")return H.r(q)
s=n.db
if(typeof s!=="number")return H.r(s)
o.sa3(0,-p*q+s)
n.b.sP(0)
n.c.sP(0)
t=t.C(0,a.z)
n.dx=n.af(new V.D(t.a,t.b).q(0,2).t(0,u.ga4()))}n.a_()},
f3:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.B(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.K()
s=r.y
if(typeof s!=="number")return H.r(s)
u.sP(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.K()
u=r.x
if(typeof u!=="number")return H.r(u)
s.sP(-t*10*u)
r.a_()}},
aI:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.a2()
if(q<p){r.dy=p
u=b.y
r.c.ad(0,u)
r.b.ad(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.fr=V.aj(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1).q(0,V.j2(r.c.d))}return r.fr},
$ia_:1}
U.dh.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.A():u},
J:function(a){var u=this.r
if(u!=null)u.v(a)},
aR:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.A():t
t=r.ge_()
u.l(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.A():s).l(0,t)
return!0},
e0:function(a){var u,t,s,r,q=this
if(!J.F(q.b,q.a.b.c))return
H.h(a,"$ibR")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.q()
r=u+t*s
if(u!==r){q.d=r
u=new D.u("zoom",u,r)
u.b=!0
q.J(u)}},
aI:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.kM(u,u,u)}return t.f},
$ia_:1}
M.ct.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.A():u},
S:function(a){var u=this.r
if(u!=null)u.v(a)},
aM:function(){return this.S(null)},
saS:function(a){var u,t,s=this
if(a==null)a=new X.f2()
u=s.b
if(u!==a){if(u!=null)u.gm().M(0,s.gR())
t=s.b
s.b=a
a.gm().l(0,s.gR())
u=new D.u("camera",t,s.b)
u.b=!0
s.S(u)}},
saX:function(a,b){var u,t,s=this
if(b==null)b=X.f0(null)
u=s.c
if(u!==b){if(u!=null)u.gm().M(0,s.gR())
t=s.c
s.c=b
b.gm().l(0,s.gR())
u=new D.u("target",t,s.c)
u.b=!0
s.S(u)}},
saY:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gm().M(0,t.gR())
u=t.d
t.d=a
if(a!=null)a.gm().l(0,t.gR())
s=new D.u("technique",u,t.d)
s.b=!0
t.S(s)}},
a0:function(a){var u=this
a.bX(u.d)
u.c.U(a)
u.b.U(a)
u.e.ad(0,a)
u.e.a0(a)
u.b.au(a)
u.c.toString
a.bW()},
$ib2:1}
M.cy.prototype={
S:function(a){var u=this.y
if(u!=null)u.v(a)},
aM:function(){return this.S(null)},
ec:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gR(),s=[{func:1,ret:-1,args:[D.O]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.ah()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.aU()
u.b=!0
this.S(u)},
ee:function(a,b){var u,t,s,r,q
for(u=b.length,t=this.gR(),s=0;s<b.length;b.length===u||(0,H.m)(b),++s){r=b[s]
if(r!=null){q=r.z
if(q==null){q=new D.ah()
q.d=0
r.z=q}q.M(0,t)}}u=new D.aV()
u.b=!0
this.S(u)},
saS:function(a){var u,t,s=this
if(a==null)a=X.j4(null)
u=s.b
if(u!==a){if(u!=null)u.gm().M(0,s.gR())
t=s.b
s.b=a
a.gm().l(0,s.gR())
u=new D.u("camera",t,s.b)
u.b=!0
s.S(u)}},
saX:function(a,b){var u,t,s=this
if(b==null)b=X.f0(null)
u=s.c
if(u!==b){if(u!=null)u.gm().M(0,s.gR())
t=s.c
s.c=b
b.gm().l(0,s.gR())
u=new D.u("target",t,s.c)
u.b=!0
s.S(u)}},
saY:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gm().M(0,t.gR())
u=t.d
t.d=a
if(a!=null)a.gm().l(0,t.gR())
s=new D.u("technique",u,t.d)
s.b=!0
t.S(s)}},
gm:function(){var u=this.y
return u==null?this.y=D.A():u},
a0:function(a){var u,t=this
a.bX(t.d)
t.c.U(a)
t.b.U(a)
u=t.d
if(u!=null)u.ad(0,a)
for(u=t.e.a,u=new J.W(u,u.length);u.u();)u.d.ad(0,a)
for(u=t.e.a,u=new J.W(u,u.length);u.u();)u.d.a0(a)
t.b.toString
a.cy.ar()
a.db.ar()
t.c.toString
a.bW()},
$ib2:1}
M.b2.prototype={}
M.h1.prototype={}
M.d2.prototype={
gm:function(){var u=this.db
return u==null?this.db=D.A():u},
S:function(a){var u=this.db
if(u!=null)u.v(a)},
aM:function(){return this.S(null)},
e4:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gR(),s=[{func:1,ret:-1,args:[D.O]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.gm()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.aU()
u.b=!0
this.S(u)},
eL:function(a,b){var u,t,s,r
for(u=b.length,t=this.gR(),s=0;s<b.length;b.length===u||(0,H.m)(b),++s){r=b[s]
if(r!=null)r.gm().M(0,t)}u=new D.aV()
u.b=!0
this.S(u)},
a0:function(a){var u,t,s=this
s.z.sdd(0,s.x)
for(u=s.Q.a,u=new J.W(u,u.length);u.u();){t=u.d
t.saX(0,s.z)
t.saS(s.f)
t.a0(a)}s.z.sdd(0,s.y)
for(u=s.Q.a,u=new J.W(u,u.length);u.u();){t=u.d
t.saX(0,s.z)
t.saS(s.r)
t.a0(a)}}}
A.cn.prototype={}
A.el.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
fq:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
cK:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.S.prototype={
gae:function(a){var u=this.a?1:0,t=this.c?4:0
return u|0|t},
i:function(a){var u=this.a?1:0,t=this.c?4:0
return""+(u|0|t)},
n:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.S))return!1
if(this.a===b.a)u=this.c===b.c
else u=!1
return u}}
A.fj.prototype={
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
A.lD(c0,u)
A.lF(c0,u)
A.lE(c0,u)
A.lH(c0,u)
A.lI(c0,u)
A.lG(c0,u)
A.lJ(c0,u)
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
b5.d_(0,s.charCodeAt(0)==0?s:s,A.lC(b5.z))
b5.Q=b5.x.h(0,"posAttr")
b5.cx=b5.x.h(0,"normAttr")
b5.ch=b5.x.h(0,"binmAttr")
b5.cy=b5.x.h(0,"txt2DAttr")
b5.db=b5.x.h(0,"txtCubeAttr")
b5.dx=b5.x.h(0,"bendAttr")
if(c0.dy)b5.id=H.h(b5.y.E(0,"invViewMat"),"$ia1")
if(t)b5.dy=H.h(b5.y.E(0,"objMat"),"$ia1")
if(r)b5.fr=H.h(b5.y.E(0,"viewObjMat"),"$ia1")
b5.fy=H.h(b5.y.E(0,"projViewObjMat"),"$ia1")
if(c0.go)b5.fx=H.h(b5.y.E(0,"viewMat"),"$ia1")
if(c0.x1)b5.k1=H.h(b5.y.E(0,"txt2DMat"),"$ic_")
if(c0.x2)b5.k2=H.h(b5.y.E(0,"txtCubeMat"),"$ia1")
if(c0.y1)b5.k3=H.h(b5.y.E(0,"colorMat"),"$ia1")
b5.r1=H.b([],[A.a1])
t=c0.b6
if(t>0){b5.k4=b5.y.E(0,"bendMatCount")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.h(0,q)
if(m==null)H.p(P.o(b7+q+b8))
s.push(H.h(m,"$ia1"))}}t=c0.a
if(t.a)b5.r2=H.h(b5.y.E(0,"emissionClr"),"$iB")
if(t.c)b5.ry=H.h(b5.y.E(0,"emissionTxt"),"$iQ")
t=c0.b
if(t.a)b5.x1=H.h(b5.y.E(0,"ambientClr"),"$iB")
if(t.c)b5.y1=H.h(b5.y.E(0,"ambientTxt"),"$iQ")
t=c0.c
if(t.a)b5.y2=H.h(b5.y.E(0,"diffuseClr"),"$iB")
if(t.c)b5.am=H.h(b5.y.E(0,"diffuseTxt"),"$iQ")
t=c0.d
if(t.a)b5.b7=H.h(b5.y.E(0,"invDiffuseClr"),"$iB")
if(t.c)b5.cN=H.h(b5.y.E(0,"invDiffuseTxt"),"$iQ")
t=c0.e
s=t.a
if(!s)r=t.c
else r=!0
if(r){b5.cQ=H.h(b5.y.E(0,"shininess"),"$iL")
if(s)b5.cO=H.h(b5.y.E(0,"specularClr"),"$iB")
if(t.c)b5.cP=H.h(b5.y.E(0,"specularTxt"),"$iQ")}if(c0.f.c)b5.cR=H.h(b5.y.E(0,"bumpTxt"),"$iQ")
if(c0.db){b5.cS=H.h(b5.y.E(0,"envSampler"),"$iQ")
t=c0.r
if(t.a)b5.cT=H.h(b5.y.E(0,"reflectClr"),"$iB")
if(t.c)b5.cU=H.h(b5.y.E(0,"reflectTxt"),"$iQ")
t=c0.x
s=t.a
if(!s)r=t.c
else r=!0
if(r){b5.cV=H.h(b5.y.E(0,"refraction"),"$iL")
if(s)b5.cW=H.h(b5.y.E(0,"refractClr"),"$iB")
if(t.c)b5.cX=H.h(b5.y.E(0,"refractTxt"),"$iQ")}}t=c0.y
if(t.a)b5.cY=H.h(b5.y.E(0,"alpha"),"$iL")
if(t.c)b5.cZ=H.h(b5.y.E(0,"alphaTxt"),"$iQ")
if(c0.k1){t=c0.z
s=t.length
if(s!==0){r=P.v
b5.bF=new H.H([r,A.b5])
b5.bG=new H.H([r,[P.aZ,A.bY]])
for(r=[A.bY],l=0;l<t.length;t.length===s||(0,H.m)(t),++l){k=t[l]
j=k.a
i="barLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].startPnt"
m=p.h(0,o)
if(m==null)H.p(P.o(b7+o+b8))
H.h(m,"$iB")
p=b5.y
o=i+"s["+n+"].endPnt"
g=p.h(0,o)
if(g==null)H.p(P.o(b7+o+b8))
H.h(g,"$iB")
p=b5.y
o=i+"s["+n+"].color"
f=p.h(0,o)
if(f==null)H.p(P.o(b7+o+b8))
H.h(f,"$iB")
if(typeof j!=="number")return j.aa()
if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
e=p.h(0,o)
if(e==null)H.p(P.o(b7+o+b8))
H.h(e,"$iL")
p=b5.y
o=i+"s["+n+"].att1"
d=p.h(0,o)
if(d==null)H.p(P.o(b7+o+b8))
H.h(d,"$iL")
p=b5.y
o=i+"s["+n+"].att2"
c=p.h(0,o)
if(c==null)H.p(P.o(b7+o+b8))
H.h(c,"$iL")
b=c
a=d
a0=e}else{b=b6
a=b
a0=a}h.push(new A.bY(m,g,f,a0,a,b))}b5.bG.k(0,j,h)
q=b5.bF
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.p(P.o(b7+o+b8))
q.k(0,j,m)}}t=c0.Q
s=t.length
if(s!==0){r=P.v
b5.bH=new H.H([r,A.b5])
b5.bI=new H.H([r,[P.aZ,A.bZ]])
for(r=[A.bZ],l=0;l<t.length;t.length===s||(0,H.m)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.aa()
p=(j&1)!==0
if(p){o=b5.y
a1=i+"s["+n+"].objUp"
m=o.h(0,a1)
if(m==null)H.p(P.o(b7+a1+b8))
H.h(m,"$iB")
o=b5.y
a1=i+"s["+n+"].objRight"
g=o.h(0,a1)
if(g==null)H.p(P.o(b7+a1+b8))
H.h(g,"$iB")
o=b5.y
a1=i+"s["+n+"].objDir"
f=o.h(0,a1)
if(f==null)H.p(P.o(b7+a1+b8))
H.h(f,"$iB")
a2=f
a3=g
a4=m}else{a2=b6
a3=a2
a4=a3}o=b5.y
a1=i+"s["+n+"].viewDir"
m=o.h(0,a1)
if(m==null)H.p(P.o(b7+a1+b8))
H.h(m,"$iB")
o=b5.y
a1=i+"s["+n+"].color"
g=o.h(0,a1)
if(g==null)H.p(P.o(b7+a1+b8))
H.h(g,"$iB")
if(p){p=b5.y
o=i+"sTexture2D"+n
f=p.h(0,o)
if(f==null)H.p(P.o(b7+o+b8))
H.h(f,"$ibp")
a5=f}else a5=b6
h.push(new A.bZ(a4,a3,a2,m,g,a5))}b5.bI.k(0,j,h)
q=b5.bH
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.p(P.o(b7+o+b8))
q.k(0,j,m)}}t=c0.ch
s=t.length
if(s!==0){r=P.v
b5.bJ=new H.H([r,A.b5])
b5.bK=new H.H([r,[P.aZ,A.c0]])
for(r=[A.c0],l=0;l<t.length;t.length===s||(0,H.m)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.h(0,o)
if(m==null)H.p(P.o(b7+o+b8))
H.h(m,"$iB")
p=b5.y
o=i+"s["+n+"].viewPnt"
g=p.h(0,o)
if(g==null)H.p(P.o(b7+o+b8))
H.h(g,"$iB")
p=b5.y
o=i+"s["+n+"].color"
f=p.h(0,o)
if(f==null)H.p(P.o(b7+o+b8))
H.h(f,"$iB")
if(typeof j!=="number")return j.aa()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
e=p.h(0,o)
if(e==null)H.p(P.o(b7+o+b8))
H.h(e,"$ic_")
a6=e}else a6=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
e=p.h(0,o)
if(e==null)H.p(P.o(b7+o+b8))
H.h(e,"$iQ")
a5=e}else a5=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
e=p.h(0,o)
if(e==null)H.p(P.o(b7+o+b8))
H.h(e,"$iQ")
p=b5.y
o=i+"s["+n+"].shadowAdj"
d=p.h(0,o)
if(d==null)H.p(P.o(b7+o+b8))
H.h(d,"$ibX")
a7=e
a8=d}else{a7=b6
a8=a7}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
e=p.h(0,o)
if(e==null)H.p(P.o(b7+o+b8))
H.h(e,"$iL")
p=b5.y
o=i+"s["+n+"].att1"
d=p.h(0,o)
if(d==null)H.p(P.o(b7+o+b8))
H.h(d,"$iL")
p=b5.y
o=i+"s["+n+"].att2"
c=p.h(0,o)
if(c==null)H.p(P.o(b7+o+b8))
H.h(c,"$iL")
b=c
a=d
a0=e}else{b=b6
a=b
a0=a}h.push(new A.c0(m,g,a6,f,a5,a7,a8,a0,a,b))}b5.bK.k(0,j,h)
q=b5.bJ
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.p(P.o(b7+o+b8))
q.k(0,j,m)}}t=c0.cx
s=t.length
if(s!==0){r=P.v
b5.bL=new H.H([r,A.b5])
b5.bM=new H.H([r,[P.aZ,A.c1]])
for(r=[A.c1],l=0;l<t.length;t.length===s||(0,H.m)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.h(0,o)
if(m==null)H.p(P.o(b7+o+b8))
H.h(m,"$iB")
p=b5.y
o=i+"s["+n+"].objDir"
g=p.h(0,o)
if(g==null)H.p(P.o(b7+o+b8))
H.h(g,"$iB")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.h(0,o)
if(f==null)H.p(P.o(b7+o+b8))
H.h(f,"$iB")
p=b5.y
o=i+"s["+n+"].color"
e=p.h(0,o)
if(e==null)H.p(P.o(b7+o+b8))
H.h(e,"$iB")
if(typeof j!=="number")return j.aa()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
d=p.h(0,o)
if(d==null)H.p(P.o(b7+o+b8))
H.h(d,"$iB")
p=b5.y
o=i+"s["+n+"].objRight"
c=p.h(0,o)
if(c==null)H.p(P.o(b7+o+b8))
H.h(c,"$iB")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.h(0,o)
if(a9==null)H.p(P.o(b7+o+b8))
H.h(a9,"$iL")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.h(0,o)
if(b0==null)H.p(P.o(b7+o+b8))
H.h(b0,"$iL")
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
H.h(d,"$ibX")
a8=d}else a8=b6
if((j&8)!==0){o=b5.y
a1=i+"s["+n+"].cutoff"
d=o.h(0,a1)
if(d==null)H.p(P.o(b7+a1+b8))
H.h(d,"$iL")
o=b5.y
a1=i+"s["+n+"].coneAngle"
c=o.h(0,a1)
if(c==null)H.p(P.o(b7+a1+b8))
H.h(c,"$iL")
b3=c
b4=d}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
a1=i+"s["+n+"].att0"
d=o.h(0,a1)
if(d==null)H.p(P.o(b7+a1+b8))
H.h(d,"$iL")
o=b5.y
a1=i+"s["+n+"].att1"
c=o.h(0,a1)
if(c==null)H.p(P.o(b7+a1+b8))
H.h(c,"$iL")
o=b5.y
a1=i+"s["+n+"].att2"
a9=o.h(0,a1)
if(a9==null)H.p(P.o(b7+a1+b8))
H.h(a9,"$iL")
b=a9
a=c
a0=d}else{b=b6
a=b
a0=a}if((j&1)!==0){o=b5.y
a1=i+"sTexture2D"+n
d=o.h(0,a1)
if(d==null)H.p(P.o(b7+a1+b8))
H.h(d,"$ibp")
a5=d}else a5=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
d=p.h(0,o)
if(d==null)H.p(P.o(b7+o+b8))
H.h(d,"$ibp")
a7=d}else a7=b6
h.push(new A.c1(m,g,f,e,a4,a3,b2,b1,a8,b4,b3,a0,a,b,a5,a7))}b5.bM.k(0,j,h)
q=b5.bL
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.p(P.o(b7+o+b8))
q.k(0,j,m)}}}},
a7:function(a,b){if(b!=null&&b.d>=6)a.c2(b)}}
A.co.prototype={
i:function(a){return"barLight"+H.e(this.a)}}
A.cv.prototype={
i:function(a){return"dirLight"+H.e(this.a)}}
A.cT.prototype={
i:function(a){return"pointLight"+H.e(this.a)}}
A.d_.prototype={
i:function(a){return"spotLight"+H.e(this.a)}}
A.fm.prototype={
i:function(a){return this.am}}
A.bY.prototype={}
A.bZ.prototype={}
A.c0.prototype={}
A.c1.prototype={}
A.cX.prototype={
c9:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
d_:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.cj(b,35633)
r.f=r.cj(r.d,35632)
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
U:function(a){a.a.useProgram(this.r)
this.x.fq()},
cj:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.o("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
eZ:function(){var u,t,s,r=this,q=H.b([],[A.cn]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.r(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cn(p,t.name,s))}r.x=new A.el(q)},
f0:function(){var u,t,s,r=this,q=H.b([],[A.dc]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.r(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.fi(t.type,t.size,t.name,s))}r.y=new A.hH(q)},
az:function(a,b,c){var u=this.a
if(a===1)return new A.b5(u,b,c)
else return A.j9(u,this.r,b,a,c)},
dR:function(a,b,c){var u=this.a
if(a===1)return new A.bp(u,b,c)
else return A.j9(u,this.r,b,a,c)},
dS:function(a,b,c){var u=this.a
if(a===1)return new A.Q(u,b,c)
else return A.j9(u,this.r,b,a,c)},
b4:function(a,b){return new P.dv(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
fi:function(a,b,c,d){var u=this
switch(a){case 5120:return u.az(b,c,d)
case 5121:return u.az(b,c,d)
case 5122:return u.az(b,c,d)
case 5123:return u.az(b,c,d)
case 5124:return u.az(b,c,d)
case 5125:return u.az(b,c,d)
case 5126:return new A.L(u.a,c,d)
case 35664:return new A.hD(u.a,c,d)
case 35665:return new A.B(u.a,c,d)
case 35666:return new A.bX(u.a,c,d)
case 35667:return new A.hE(u.a,c,d)
case 35668:return new A.hF(u.a,c,d)
case 35669:return new A.hG(u.a,c,d)
case 35674:return new A.hI(u.a,c,d)
case 35675:return new A.c_(u.a,c,d)
case 35676:return new A.a1(u.a,c,d)
case 35678:return u.dR(b,c,d)
case 35680:return u.dS(b,c,d)
case 35670:throw H.c(u.b4("BOOL",c))
case 35671:throw H.c(u.b4("BOOL_VEC2",c))
case 35672:throw H.c(u.b4("BOOL_VEC3",c))
case 35673:throw H.c(u.b4("BOOL_VEC4",c))
default:throw H.c(P.o("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.hb.prototype={}
A.dc.prototype={}
A.hH.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
E:function(a,b){var u=this.h(0,b)
if(u==null)throw H.c(P.o("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.H()},
H:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.m)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.b5.prototype={
i:function(a){return"Uniform1i: "+H.e(this.c)}}
A.hE.prototype={
i:function(a){return"Uniform2i: "+H.e(this.c)}}
A.hF.prototype={
i:function(a){return"Uniform3i: "+H.e(this.c)}}
A.hG.prototype={
i:function(a){return"Uniform4i: "+H.e(this.c)}}
A.hC.prototype={
i:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.L.prototype={
i:function(a){return"Uniform1f: "+H.e(this.c)}}
A.hD.prototype={
i:function(a){return"Uniform2f: "+H.e(this.c)}}
A.B.prototype={
i:function(a){return"Uniform3f: "+H.e(this.c)}}
A.bX.prototype={
i:function(a){return"Uniform4f: "+H.e(this.c)}}
A.hI.prototype={
i:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.c_.prototype={
a5:function(a){var u=new Float32Array(H.ce(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.e(this.c)}}
A.a1.prototype={
a5:function(a){var u=new Float32Array(H.ce(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.e(this.c)}}
A.bp.prototype={
i:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.Q.prototype={
c2:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.iw.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.bR(s.b,b).bR(s.d.bR(s.c,b),c)
s=new V.P(r.a,r.b,r.c)
if(!J.F(a.f,s)){a.f=s
s=a.a
if(s!=null)s.Y()}a.saZ(r.t(0,Math.sqrt(r.B(r))))
s=1-b
u=1-c
u=new V.aB(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.F(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.Y()}}}
F.aS.prototype={
dL:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.di()
if(q!=null)s=s.A(0,q)
if(u!=null)s=s.A(0,u)
if(t!=null)s=s.A(0,t)
if(s.d1())return
return s.t(0,Math.sqrt(s.B(s)))},
dN:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.C(0,q)
r=new V.y(r.a,r.b,r.c)
s=r.t(0,Math.sqrt(r.B(r)))
r=t.C(0,q)
r=new V.y(r.a,r.b,r.c)
r=s.aT(r.t(0,Math.sqrt(r.B(r))))
return r.t(0,Math.sqrt(r.B(r)))},
bB:function(){var u,t=this
if(t.d!=null)return!0
u=t.dL()
if(u==null){u=t.dN()
if(u==null)return!1}t.d=u
t.a.a.Y()
return!0},
dK:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.di()
if(q!=null)s=s.A(0,q)
if(u!=null)s=s.A(0,u)
if(t!=null)s=s.A(0,t)
if(s.d1())return
return s.t(0,Math.sqrt(s.B(s)))},
dM:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.z().a){l=d.C(0,g)
l=new V.y(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.B(l)))
if(s.a-t.a<0)q=q.K(0)}else{p=(l-u.b)/r
l=d.C(0,g)
l=new V.P(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).C(0,j)
l=new V.y(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.B(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.K(0)}l=n.d
if(l!=null){o=l.t(0,Math.sqrt(l.B(l)))
l=o.aT(q)
l=l.t(0,Math.sqrt(l.B(l))).aT(o)
q=l.t(0,Math.sqrt(l.B(l)))}return q},
bz:function(){var u,t=this
if(t.e!=null)return!0
u=t.dK()
if(u==null){u=t.dM()
if(u==null)return!1}t.e=u
t.a.a.Y()
return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
w:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.b.a9(J.a5(s.e),0)+", "+C.b.a9(J.a5(t.b.e),0)+", "+C.b.a9(J.a5(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.i(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.i(0)+"}"):u+"-}"},
H:function(){return this.w("")}}
F.bL.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
w:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.b.a9(J.a5(u.e),0)+", "+C.b.a9(J.a5(this.b.e),0)},
H:function(){return this.w("")}}
F.bU.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
w:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.a9(J.a5(u.e),0)},
H:function(){return this.w("")}}
F.h4.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.A():u},
fA:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.W()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){r=g[s]
h.a.l(0,r.fh())}h.a.W()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.W()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
n=p[o]
h.b.a.a.l(0,n)
o=new F.bU()
if(n.a==null)H.p(P.o("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.v(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.W()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.W()
p=p.e
if(typeof p!=="number")return p.A()
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
o.a.a.W()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.W()
p=p.e
if(typeof p!=="number")return p.A()
p+=u
o=o.c
if(p>=o.length)return H.f(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.W()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
i=p[o]
o=h.d.a
o.a.l(0,l)
o.a.l(0,k)
o.a.l(0,i)
F.bG(l,k,i)}g=h.e
if(g!=null)g.as(0)},
al:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.al()||!1
if(!t.a.al())u=!1
s=t.e
if(s!=null)s.as(0)
return u},
cG:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.ac()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.aN().a)!==0)++s
if((t&$.aM().a)!==0)++s
if((t&$.ba().a)!==0)++s
if((t&$.aO().a)!==0)++s
if((t&$.cj().a)!==0)++s
if((t&$.ck().a)!==0)++s
if((t&$.bx().a)!==0)++s
if((t&$.aL().a)!==0)++s
r=a4.gc4(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.K])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.cq])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.fb(m)
k=l.gc4(l)
if(m>=t)return H.f(o,m)
o[m]=new Z.cq(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.f(i,j)
h=i[j].fz(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.f(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.ce(p)),35044)
u.bindBuffer(a1,null)
c=new Z.bB(new Z.dj(a1,d),o,a4)
c.b=H.b([],[Z.bh])
if(a0.b.b.length!==0){b=H.b([],[P.v])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.W()
b.push(t.e)}a=Z.jb(u,34963,b)
c.b.push(new Z.bh(0,b.length,a))}if(a0.c.b.length!==0){b=H.b([],[P.v])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.W()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.f(t,m)
t=t[m].b
t.a.a.W()
b.push(t.e)}a=Z.jb(u,34963,b)
c.b.push(new Z.bh(1,b.length,a))}if(a0.d.b.length!==0){b=H.b([],[P.v])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.W()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.f(t,m)
t=t[m].b
t.a.a.W()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.f(t,m)
t=t[m].c
t.a.a.W()
b.push(t.e)}a=Z.jb(u,34963,b)
c.b.push(new Z.bh(4,b.length,a))}return c},
i:function(a){var u=this,t="   ",s=H.b([],[P.t])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.w(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.w(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.w(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.w(t))}return C.a.p(s,"\n")},
Y:function(){var u=this.e
if(u!=null)u.v(null)}}
F.h5.prototype={
f9:function(a){var u,t,s,r,q=H.b([],[F.aS]),p=a[0]
for(u=this.a,t=2;t<4;++t){s=a[t-1]
r=a[t]
u.a.l(0,p)
u.a.l(0,s)
u.a.l(0,r)
q.push(F.bG(p,s,r))}return q},
fa:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.aS])
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
h.push(F.bG(m,l,j))
u.a.l(0,m)
u.a.l(0,j)
u.a.l(0,i)
h.push(F.bG(m,j,i))}else{n.l(0,l)
u.a.l(0,j)
u.a.l(0,i)
h.push(F.bG(l,j,i))
u.a.l(0,l)
u.a.l(0,i)
u.a.l(0,m)
h.push(F.bG(l,i,m))}p=!p}r=!r}return h},
gj:function(a){return this.b.length},
al:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.m)(u),++r)if(!u[r].bB())s=!1
return s},
bA:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.m)(u),++r)if(!u[r].bz())s=!1
return s},
i:function(a){return this.H()},
w:function(a){var u,t,s,r=H.b([],[P.t])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].w(a))
return C.a.p(r,"\n")},
H:function(){return this.w("")}}
F.h6.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.H()},
w:function(a){var u,t,s=H.b([],[P.t]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.f(t,u)
s.push(t[u].w(a+(""+u+". ")))}return C.a.p(s,"\n")},
H:function(){return this.w("")}}
F.h7.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.H()},
w:function(a){var u,t,s,r=H.b([],[P.t])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].w(a))
return C.a.p(r,"\n")},
H:function(){return this.w("")}}
F.bq.prototype={
bD:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.hT(u.cx,r,o,t,s,q,p,a,n)},
fh:function(){return this.bD(null)},
saZ:function(a){var u
if(!J.F(this.z,a)){this.z=a
u=this.a
if(u!=null)u.Y()}},
fz:function(a){var u,t,s=this
if(a.n(0,$.ac())){u=s.f
t=[P.K]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.aN())){u=s.r
t=[P.K]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.aM())){u=s.x
t=[P.K]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.ba())){u=s.y
t=[P.K]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.n(0,$.aO())){u=s.z
t=[P.K]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.cj())){u=s.Q
t=[P.K]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.ck())){u=s.Q
t=[P.K]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.n(0,$.bx()))return H.b([s.ch],[P.K])
else if(a.n(0,$.aL())){u=s.cx
t=[P.K]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.K])},
bB:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.di()
t.d.G(0,new F.i0(s))
s=s.a
t.r=s.t(0,Math.sqrt(s.B(s)))
s=t.a
if(s!=null){s.Y()
s=t.a.e
if(s!=null)s.as(0)}return!0},
bz:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.di()
t.d.G(0,new F.i_(s))
s=s.a
t.x=s.t(0,Math.sqrt(s.B(s)))
s=t.a
if(s!=null){s.Y()
s=t.a.e
if(s!=null)s.as(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
w:function(a){var u,t,s=this,r="-",q=H.b([],[P.t])
q.push(C.b.a9(J.a5(s.e),0))
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
H:function(){return this.w("")}}
F.i0.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.A(0,t)}}}
F.i_.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.A(0,t)}}}
F.hU.prototype={
W:function(){},
l:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.o("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.Y()
return!0},
b5:function(a,b,c,d,e,f){var u=F.hT(a,null,b,c,null,d,e,f,0)
this.l(0,u)
return u},
gj:function(a){return this.c.length},
al:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)u[s].bB()
return!0},
bA:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)u[s].bz()
return!0},
fd:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.t(0,Math.sqrt(p*p+o*o+n*n))
if(!J.F(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.v(null)}}}}return!0},
i:function(a){return this.H()},
w:function(a){var u,t,s,r
this.W()
u=H.b([],[P.t])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r)u.push(t[r].w(a))
return C.a.p(u,"\n")},
H:function(){return this.w("")}}
F.hV.prototype={
gj:function(a){return this.b.length+this.c.length+this.d.length},
G:function(a,b){var u=this
C.a.G(u.b,b)
C.a.G(u.c,new F.hW(u,b))
C.a.G(u.d,new F.hX(u,b))},
i:function(a){return this.H()},
H:function(){var u,t,s,r=H.b([],[P.t])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].w(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].w(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].w(""))
return C.a.p(r,"\n")}}
F.hW.prototype={
$1:function(a){if(!J.F(a.a,this.a))this.b.$1(a)}}
F.hX.prototype={
$1:function(a){var u=this.a
if(!J.F(a.a,u)&&!J.F(a.b,u))this.b.$1(a)}}
F.hY.prototype={
gj:function(a){return this.b.length+this.c.length},
i:function(a){return this.H()},
H:function(){var u,t,s,r=H.b([],[P.t])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].w(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].w(""))
return C.a.p(r,"\n")}}
F.hZ.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.H()},
H:function(){var u,t,s,r=H.b([],[P.t])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].w(""))
return C.a.p(r,"\n")}}
O.cL.prototype={
gm:function(){var u=this.fr
return u==null?this.fr=D.A():u},
T:function(a){var u=this.fr
if(u!=null)u.v(a)},
aO:function(){return this.T(null)},
cp:function(a){this.a=null
this.T(a)},
eX:function(){return this.cp(null)},
e6:function(a,b){var u=new D.aU()
u.b=!0
this.T(u)},
e8:function(a,b){var u=new D.aV()
u.b=!0
this.T(u)},
cg:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=P.v
f=[f,f]
u=new H.H(f)
for(t=g.dx.e,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){q=t[r]
p=q.gag()
o=u.h(0,q.gag())
u.k(0,p,o==null?1:o)}n=H.b([],[A.co])
u.G(0,new O.fq(g,n))
C.a.aL(n,new O.fr())
m=new H.H(f)
for(t=g.dx.f,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){p=m.h(0,0)
m.k(0,0,p==null?1:p)}l=H.b([],[A.cv])
m.G(0,new O.fs(g,l))
C.a.aL(l,new O.ft())
k=new H.H(f)
for(t=g.dx.r,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){q=t[r]
p=q.gag()
o=k.h(0,q.gag())
k.k(0,p,o==null?1:o)}j=H.b([],[A.cT])
k.G(0,new O.fu(g,j))
C.a.aL(j,new O.fv())
i=new H.H(f)
for(f=g.dx.x,t=f.length,r=0;r<f.length;f.length===t||(0,H.m)(f),++r){q=f[r]
s=q.gag()
p=i.h(0,q.gag())
i.k(0,s,p==null?1:p)}h=H.b([],[A.d_])
i.G(0,new O.fw(g,h))
C.a.aL(h,new O.fx())
f=C.c.X(g.e.a.length+3,4)
g.dy.e
return A.kL(!1,!1,!1,!1,f*4,g.f.c,g.r.c,g.x.c,g.y.c,g.z.c,g.Q.c,g.cx.c,g.cy.c,g.db.c,n,l,j,h)},
a6:function(a,b){if(b!=null)if(!C.a.N(a,b)){b.a=a.length
a.push(b)}},
ad:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.W(u,u.length);u.u();){t=u.d
t.toString
s=$.hS
if(s==null)s=$.hS=new V.y(0,0,1)
t.a=s
r=$.hR
t.d=r==null?$.hR=new V.y(0,1,0):r
r=$.hQ
t.e=r==null?$.hQ=new V.y(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bc(s)
r=s.a
p=s.b
o=s.c
t.a=s.t(0,Math.sqrt(r*r+p*p+o*o))
o=q.bc(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.t(0,Math.sqrt(p*p+r*r+s*s))
s=q.bc(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.t(0,Math.sqrt(r*r+p*p+o*o))}}}},
de:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=b0.a
if(b1==null){b1=b0.cg()
u=b2.fr.h(0,b1.am)
if(u==null){u=A.kK(b1,b2.a)
b2.cA(u)}b1=b0.a=u
b3.e=null}t=b1.z
s=t.b7
b1=b3.e
if(!(b1 instanceof Z.bB))b1=b3.e=null
if(b1==null||!b1.d.n(0,s)){b1=t.k4
if(b1)b3.d.al()
r=t.r1
if(r){q=b3.d
p=q.e
if(p!=null)++p.d
q.d.bA()
q.a.bA()
q=q.e
if(q!=null)q.as(0)}q=t.rx
if(q){p=b3.d
o=p.e
if(o!=null)++o.d
p.a.fd()
p=p.e
if(p!=null)p.as(0)}n=b3.d.cG(new Z.dk(b2.a),s)
n.an($.ac()).e=b0.a.Q.c
if(b1)n.an($.aN()).e=b0.a.cx.c
if(r)n.an($.aM()).e=b0.a.ch.c
if(t.r2)n.an($.ba()).e=b0.a.cy.c
if(q)n.an($.aO()).e=b0.a.db.c
if(t.ry)n.an($.aL()).e=b0.a.dx.c
b3.e=n}m=H.b([],[T.d5])
b0.a.U(b2)
if(t.fr){b1=b0.a
r=b2.dx
r=r.gO(r)
b1=b1.dy
b1.toString
b1.a5(r.a1(0,!0))}if(t.fx){b1=b0.a
r=b2.cx
if(r==null){r=b2.db
r=r.gO(r)
q=b2.dx
q=b2.cx=r.q(0,q.gO(q))
r=q}b1=b1.fr
b1.toString
b1.a5(r.a1(0,!0))}b1=b0.a
r=b2.ch
if(r==null){r=b2.gfQ()
q=b2.dx
q=b2.ch=r.q(0,q.gO(q))
r=q}b1=b1.fy
b1.toString
b1.a5(r.a1(0,!0))
if(t.go){b1=b0.a
r=b2.db
r=r.gO(r)
b1=b1.fx
b1.toString
b1.a5(r.a1(0,!0))}if(t.x1){b1=b0.a
r=b0.b
b1=b1.k1
b1.toString
b1.a5(C.i.a1(r,!0))}if(t.x2){b1=b0.a
r=b0.c
b1=b1.k2
b1.toString
b1.a5(C.i.a1(r,!0))}if(t.y1){b1=b0.a
r=b0.d
b1=b1.k3
b1.toString
b1.a5(C.i.a1(r,!0))}if(t.b6>0){l=b0.e.a.length
b1=b0.a.k4
b1.a.uniform1i(b1.d,l)
for(k=0;k<l;++k){b1=b0.a
r=b0.e.a
if(k>=r.length)return H.f(r,k)
r=r[k]
b1=b1.r1
if(k>=b1.length)return H.f(b1,k)
b1=b1[k]
j=new Float32Array(H.ce(r.a1(0,!0)))
b1.a.uniformMatrix4fv(b1.d,!1,j)}}b1=t.a
if(b1.a){r=b0.a
q=b0.f.f
r=r.r2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.c){b0.a6(m,b0.f.e)
b1=b0.a
r=b0.f.e
b1.a7(b1.ry,r)}if(t.k1){b1=t.b
if(b1.a){r=b0.a
q=b0.r.f
r=r.x1
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.c){b0.a6(m,b0.r.e)
b1=b0.a
r=b0.r.e
b1.a7(b1.y1,r)}b1=t.c
if(b1.a){r=b0.a
q=b0.x.f
r=r.y2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.c){b0.a6(m,b0.x.e)
b1=b0.a
r=b0.x.e
b1.a7(b1.am,r)}b1=t.d
if(b1.a){r=b0.a
q=b0.y.f
r=r.b7
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.c){b0.a6(m,b0.y.e)
b1=b0.a
r=b0.y.e
b1.a7(b1.cN,r)}b1=t.e
r=b1.a
if(!r)q=b1.c
else q=!0
if(q){q=b0.a
p=b0.z.ch
q=q.cQ
q.a.uniform1f(q.d,p)}if(r){r=b0.a
q=b0.z.f
r=r.cO
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.c){b0.a6(m,b0.z.e)
b1=b0.a
r=b0.z.e
b1.a7(b1.cP,r)}b1=t.z
if(b1.length>0){r=P.v
i=new H.H([r,r])
for(r=b0.dx.e,q=r.length,h=0;h<r.length;r.length===q||(0,H.m)(r),++h){g=r[h]
f=g.gag()
e=i.h(0,f)
if(e==null)e=0
i.k(0,f,e+1)
d=J.cl(b0.a.bG.h(0,f),e)
p=g.gh4()
o=$.al
p=p.b0(o==null?$.al=new V.P(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gh9()
o=$.al
p=p.b0(o==null?$.al=new V.P(0,0,0):o)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gaF(g)
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
if(g.gcM()){p=g.gcB()
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
c=r.gO(r)
r=P.v
b=new H.H([r,r])
for(r=b0.dx.f,q=r.length,h=0;h<r.length;r.length===q||(0,H.m)(r),++h){g=r[h]
e=b.h(0,0)
if(e==null)e=0
b.k(0,0,e+1)
d=J.cl(b0.a.bI.h(0,0),e)
p=c.bc(g.a)
o=p.a
a=p.b
a0=p.c
a0=p.t(0,Math.sqrt(o*o+a*a+a0*a0))
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
q=b0.a.bH.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.ch
if(b1.length>0){r=b2.db
c=r.gO(r)
r=P.v
a1=new H.H([r,r])
for(r=b0.dx.r,q=r.length,h=0;h<r.length;r.length===q||(0,H.m)(r),++h){g=r[h]
f=g.gag()
e=a1.h(0,f)
if(e==null)e=0
a1.k(0,f,e+1)
d=J.cl(b0.a.bK.h(0,f),e)
a2=c.q(0,g.gO(g))
p=g.gO(g)
o=$.al
p=p.b0(o==null?$.al=new V.P(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=$.al
p=a2.b0(p==null?$.al=new V.P(0,0,0):p)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gaF(g)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
g.gat()
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
j=new Float32Array(H.ce(new V.cM(o,a,a0,a3,a4,a5,a6,a7,p).a1(0,!0)))
a8.a.uniformMatrix3fv(a8.d,!1,j)
g.gat()
p=g.gat()
if(!C.a.N(m,p)){p.a=m.length
m.push(p)}p=g.gat()
o=p.gaU(p)
if(o){o=d.f
o.toString
a=p.d
if(a<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}g.gaK()
p=g.gdl()
o=d.x
o.toString
a=p.gfm(p)
a0=p.gfn(p)
a3=p.gfo()
p=p.gfl()
o.a.uniform4f(o.d,a,a0,a3,p)
p=g.gaK()
if(!C.a.N(m,p)){p.a=m.length
m.push(p)}p=g.gaK()
o=p.gaU(p)
if(o){o=d.r
o.toString
a=p.d
if(a<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}if(g.gcM()){p=g.gcB()
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
c=r.gO(r)
r=P.v
a9=new H.H([r,r])
for(r=b0.dx.x,q=r.length,h=0;h<r.length;r.length===q||(0,H.m)(r),++h){g=r[h]
f=g.gag()
e=a9.h(0,f)
if(e==null)e=0
a9.k(0,f,e+1)
d=J.cl(b0.a.bM.h(0,f),e)
p=g.gfP(g)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gh7(g).hj()
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=c.b0(g.gfP(g))
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gaF(g)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
g.gat()
p=g.gbZ()
o=d.f
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gbY(g)
o=d.r
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.ghk()
o=d.x
o.a.uniform1f(o.d,p)
p=g.ghl()
o=d.y
o.a.uniform1f(o.d,p)
g.gat()
p=g.gat()
if(!C.a.N(m,p)){p.a=m.length
m.push(p)}p=g.gat()
o=p.gaU(p)
if(o){o=d.dx
o.toString
a=p.gaU(p)
if(!a)o.a.uniform1i(o.d,0)
else{p=p.gfu(p)
o.a.uniform1i(o.d,p)}}g.gaK()
p=g.gdl()
o=d.z
o.toString
a=p.gfm(p)
a0=p.gfn(p)
a3=p.gfo()
p=p.gfl()
o.a.uniform4f(o.d,a,a0,a3,p)
p=g.gaK()
if(!C.a.N(m,p)){p.a=m.length
m.push(p)}p=g.gaK()
o=p.gaU(p)
if(o){o=d.dy
o.toString
a=p.gaU(p)
if(!a)o.a.uniform1i(o.d,0)
else{p=p.gfu(p)
o.a.uniform1i(o.d,p)}}if(g.gh8()){p=g.gh6()
o=d.Q
o.a.uniform1f(o.d,p)
p=g.gh5()
o=d.ch
o.a.uniform1f(o.d,p)}if(g.gcM()){p=g.gcB()
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
q.a.uniform1i(q.d,l)}}}if(t.f.c){b0.a6(m,b0.Q.e)
b1=b0.a
r=b0.Q.e
b1.a7(b1.cR,r)}if(t.dy){b1=b0.a
r=b2.Q
if(r==null){r=b2.db
r=b2.Q=r.gO(r).bO(0)}b1=b1.id
b1.toString
b1.a5(r.a1(0,!0))}if(t.db){b0.a6(m,b0.ch)
b1=b0.a
r=b0.ch
b1.a7(b1.cS,r)
b1=t.r
if(b1.a){r=b0.a
q=b0.cx.f
r=r.cT
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.c){b0.a6(m,b0.cx.e)
b1=b0.a
r=b0.cx.e
b1.a7(b1.cU,r)}b1=t.x
r=b1.a
if(!r)q=b1.c
else q=!0
if(q){q=b0.a
p=b0.cy.ch
q=q.cV
q.a.uniform1f(q.d,p)}if(r){r=b0.a
q=b0.cy.f
r=r.cW
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.c){b0.a6(m,b0.cy.e)
b1=b0.a
r=b0.cy.e
b1.a7(b1.cX,r)}}b1=t.y
r=b1.a
q=!r
if(q)p=b1.c
else p=!0
if(p){if(r){r=b0.a
p=b0.db.f
r=r.cY
r.a.uniform1f(r.d,p)}if(b1.c){b0.a6(m,b0.db.e)
r=b0.a
p=b0.db.e
r.a7(r.cZ,p)}r=b2.a
r.enable(3042)
r.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].U(b2)
r=b3.e
r.U(b2)
r.a0(b2)
r.au(b2)
if(q)b1=b1.c
else b1=!0
if(b1)b2.a.disable(3042)
for(b1=b2.a,k=0;k<m.length;++k){r=m[k]
if(r.c){r.c=!1
b1.activeTexture(33984+r.a)
b1.bindTexture(34067,null)}}r=b0.a
r.toString
b1.useProgram(null)
r.x.cK()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cg().am}}
O.fq.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.co(a,C.c.X(b+3,4)*4))}}
O.fr.prototype={
$2:function(a,b){return J.cm(a.a,b.a)}}
O.fs.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.cv(a,C.c.X(b+3,4)*4))}}
O.ft.prototype={
$2:function(a,b){return J.cm(a.a,b.a)}}
O.fu.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.cT(a,C.c.X(b+3,4)*4))}}
O.fv.prototype={
$2:function(a,b){return J.cm(a.a,b.a)}}
O.fw.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.d_(a,C.c.X(b+3,4)*4))}}
O.fx.prototype={
$2:function(a,b){return J.cm(a.a,b.a)}}
O.fk.prototype={
aj:function(){var u,t=this
t.c7()
u=t.f
if(!(Math.abs(u-1)<$.z().a)){t.f=1
u=new D.u(t.b,u,1)
u.b=!0
t.a.T(u)}}}
O.bP.prototype={
T:function(a){return this.a.T(a)},
aO:function(){return this.T(null)},
aj:function(){},
bw:function(a){var u,t,s=this
if(!s.c.n(0,a)){u=s.c
if(!u.a)u=u.c
else u=!0
if(u){if(!a.a)u=a.c
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.aj()
u=s.a
u.a=null
u.T(null)}},
saZ:function(a){var u,t=this,s=t.c
if(!s.c)t.bw(new A.S(s.a,!1,!0))
s=t.e
if(s!==a){if(s!=null)s.gm().M(0,t.gaB())
u=t.e
t.e=a
a.gm().l(0,t.gaB())
s=new D.u(t.b+".textureCube",u,t.e)
s.b=!0
t.a.T(s)}}}
O.fl.prototype={}
O.ai.prototype={
cr:function(a){var u,t,s=this
if(!s.f.n(0,a)){u=s.f
s.f=a
t=new D.u(s.b+".color",u,a)
t.b=!0
s.a.T(t)}},
aj:function(){this.c7()
this.cr(new V.N(1,1,1))},
saF:function(a,b){this.bw(new A.S(!0,!1,this.c.c))
this.cr(b)}}
O.fn.prototype={}
O.fo.prototype={
aj:function(){var u,t=this
t.c8()
u=t.ch
if(!(Math.abs(u-1)<$.z().a)){t.ch=1
u=new D.u(t.b+".refraction",u,1)
u.b=!0
t.a.T(u)}}}
O.fp.prototype={
cs:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.z().a)){u.ch=a
t=new D.u(u.b+".shininess",t,a)
t.b=!0
u.a.T(t)}},
aj:function(){this.c8()
this.cs(100)}}
O.cY.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.A():u},
T:function(a){var u=this.e
if(u!=null)u.v(a)},
aO:function(){return this.T(null)},
de:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=a.fr.h(0,n)
if(u==null){t=a.a
u=new A.hb(t,n)
u.c9(t,n)
u.d_(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.h(0,"posAttr")
u.Q=H.h(u.y.h(0,"fov"),"$iL")
u.ch=H.h(u.y.h(0,"ratio"),"$iL")
u.cx=H.h(u.y.h(0,"boxClr"),"$iB")
u.cy=H.h(u.y.h(0,"boxTxt"),"$iQ")
u.db=H.h(u.y.h(0,"viewMat"),"$ia1")
a.cA(u)}o.a=u}if(b.e==null){t=b.d.cG(new Z.dk(a.a),$.ac())
t.an($.ac()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
t.U(a)}t=a.d
s=a.c
r=o.a
r.U(a)
q=o.b
p=r.Q
p.a.uniform1f(p.d,q)
q=r.ch
q.a.uniform1f(q.d,t/s)
s=o.c
r.cy.c2(s)
s=o.d
t=r.cx
t.a.uniform3f(t.d,s.a,s.b,s.c)
s=a.db
s=s.gO(s).bO(0)
r=r.db
r.toString
r.a5(s.a1(0,!0))
t=b.e
if(t instanceof Z.bB){t.U(a)
t.a0(a)
t.au(a)}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.cK()
t=o.c
if(t!=null)t.au(a)}}
O.d4.prototype={}
T.d5.prototype={}
T.hq.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.A():u},
U:function(a){var u,t=this
if(!t.c&&t.d>=6){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(34067,t.b)}},
au:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(34067,null)}}}
T.hr.prototype={
d3:function(a,b){var u,t=this,s=34067,r=a+"/posx"+b,q=a+"/posy"+b,p=a+"/posz"+b,o=a+"/negx"+b,n=a+"/negy"+b,m=a+"/negz"+b,l=t.a,k=l.createTexture()
l.bindTexture(s,k)
l.texParameteri(s,10242,10497)
l.texParameteri(s,10243,10497)
l.texParameteri(s,10241,9729)
l.texParameteri(s,10240,9729)
l.bindTexture(s,null)
u=new T.hq()
u.a=0
u.b=k
u.c=!1
u.d=0
t.aA(u,k,r,34069,!1,!1)
t.aA(u,k,o,34070,!1,!1)
t.aA(u,k,q,34071,!1,!1)
t.aA(u,k,n,34072,!1,!1)
t.aA(u,k,p,34073,!1,!1)
t.aA(u,k,m,34074,!1,!1)
return u},
d2:function(a){return this.d3(a,".png")},
aA:function(a,b,c,d,e,f){var u=document.createElement("img")
u.src=c;++this.d
W.R(u,"load",new T.hs(this,u,!1,b,!1,d,a),!1)},
eY:function(a,b,c){var u,t,s,r
b=V.jl(b)
u=V.jl(a.width)
t=V.jl(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.iS()
s.width=u
s.height=t
r=C.f.di(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.lX(r.getImageData(0,0,s.width,s.height))}}}
T.hs.prototype={
$1:function(a){var u=this,t=u.a,s=t.eY(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.M.fY(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.fp()}++t.e}}
X.iR.prototype={}
X.f_.prototype={
gm:function(){var u=this.x
return u==null?this.x=D.A():u},
ab:function(a){var u=this.x
if(u!=null)u.v(a)},
sdd:function(a,b){var u,t,s=this
if(!J.F(s.r,b)){u=s.r
s.r=b
t=new D.u("region",u,b)
t.b=!0
s.ab(t)}},
U:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.r(u)
q=C.d.ac(r*u)
r=s.b
if(typeof t!=="number")return H.r(t)
p=C.d.ac(r*t)
r=C.d.ac(s.c*u)
a.c=r
s=C.d.ac(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)}}
X.f2.prototype={
gm:function(){var u=this.b
return u==null?this.b=D.A():u},
U:function(a){var u
a.cy.ba(V.b_())
u=V.b_()
a.db.ba(u)},
au:function(a){a.cy.ar()
a.db.ar()}}
X.cS.prototype={
gm:function(){var u=this.f
return u==null?this.f=D.A():u},
ab:function(a){var u=this.f
if(u!=null)u.v(a)},
dH:function(){return this.ab(null)},
U:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.aj(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.ba(k)
r=$.jB
if(r==null){r=V.jD()
q=V.ja()
p=$.jO
r=V.jx(r,q,p==null?$.jO=new V.y(0,0,-1):p)
$.jB=r
u=r}else u=r
r=s.b
if(r!=null){t=r.aI(0,a,s)
if(t!=null)u=t.q(0,u)}a.db.ba(u)},
au:function(a){a.cy.ar()
a.db.ar()}}
X.hm.prototype={}
V.iK.prototype={
$1:function(a){var u=C.d.dg(this.a.gft(),2)
if(u!=="0.00")P.jm(u+" fps")}}
V.h8.prototype={
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
W.R(q,"scroll",new V.ha(o),!1)},
cz:function(a){var u,t,s,r,q,p,o,n
this.f_()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b,r=C.a.fw(a),s.toString,r=new H.M(r),r=new P.ca(s.dh(new H.bM(r,r.gj(r))).a());r.u();){s=r.gL(r)
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
if(H.k3(s,"|",0)){p=s.split("|")
o=u.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.f(p,1)
o.href=p[1]
o.textContent=p[0]
t.appendChild(o)}else{n=P.lj(C.I,s,C.o,!1)
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
u=new L.hv()
t=P.t
u.a=new H.H([t,L.d1])
u.b=new H.H([t,L.d9])
u.c=P.jv(t)
u.d=u.I(0,q)
t=u.I(0,q).p(0,p)
s=K.U(new H.M("*"))
t.a.push(s)
t.c=!0
t=u.I(0,p).p(0,p)
s=new K.ay()
r=[K.cK]
s.a=H.b([],r)
t.a.push(s)
t=K.U(new H.M("*"))
s.a.push(t)
t=u.I(0,p).p(0,"BoldEnd")
s=K.U(new H.M("*"))
t.a.push(s)
t.c=!0
t=u.I(0,q).p(0,o)
s=K.U(new H.M("_"))
t.a.push(s)
t.c=!0
t=u.I(0,o).p(0,o)
s=new K.ay()
s.a=H.b([],r)
t.a.push(s)
t=K.U(new H.M("_"))
s.a.push(t)
t=u.I(0,o).p(0,n)
s=K.U(new H.M("_"))
t.a.push(s)
t.c=!0
t=u.I(0,q).p(0,m)
s=K.U(new H.M("`"))
t.a.push(s)
t.c=!0
t=u.I(0,m).p(0,m)
s=new K.ay()
s.a=H.b([],r)
t.a.push(s)
t=K.U(new H.M("`"))
s.a.push(t)
t=u.I(0,m).p(0,"CodeEnd")
s=K.U(new H.M("`"))
t.a.push(s)
t.c=!0
t=u.I(0,q).p(0,l)
s=K.U(new H.M("["))
t.a.push(s)
t.c=!0
t=u.I(0,l).p(0,k)
s=K.U(new H.M("|"))
t.a.push(s)
s=u.I(0,l).p(0,j)
t=K.U(new H.M("]"))
s.a.push(t)
s.c=!0
s=u.I(0,l).p(0,l)
t=new K.ay()
t.a=H.b([],r)
s.a.push(t)
s=K.U(new H.M("|]"))
t.a.push(s)
s=u.I(0,k).p(0,j)
t=K.U(new H.M("]"))
s.a.push(t)
s.c=!0
s=u.I(0,k).p(0,k)
t=new K.ay()
t.a=H.b([],r)
s.a.push(t)
s=K.U(new H.M("|]"))
t.a.push(s)
u.I(0,q).p(0,i).a.push(new K.ei())
s=u.I(0,i).p(0,i)
t=new K.ay()
t.a=H.b([],r)
s.a.push(t)
s=K.U(new H.M("*_`["))
t.a.push(s)
s=u.I(0,"BoldEnd")
s.d=s.a.b_(p)
s=u.I(0,n)
s.d=s.a.b_(o)
s=u.I(0,"CodeEnd")
s.d=s.a.b_(m)
s=u.I(0,j)
s.d=s.a.b_("Link")
s=u.I(0,i)
s.d=s.a.b_(i)
this.b=u}}
V.ha.prototype={
$1:function(a){P.jJ(C.h,new V.h9(this.a))}}
V.h9.prototype={
$0:function(){var u=C.d.ac(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}};(function aliases(){var u=J.a.prototype
u.dr=u.i
u=J.cF.prototype
u.ds=u.i
u=K.cB.prototype
u.dq=u.aH
u.c6=u.i
u=O.bP.prototype
u.c7=u.aj
u=O.ai.prototype
u.c8=u.aj})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(J,"lm","kD",19)
t(P,"lR","la",6)
t(P,"lS","lb",6)
t(P,"lT","lc",6)
s(P,"jX","lP",9)
var m
r(m=E.at.prototype,"gda",0,0,null,["$1","$0"],["dc","fH"],0,0)
r(m,"gd8",0,0,null,["$1","$0"],["d9","fG"],0,0)
r(m,"gd6",0,0,null,["$1","$0"],["d7","fD"],0,0)
q(m,"gfB","fC",3)
q(m,"gfE","fF",3)
r(m=E.d6.prototype,"gca",0,0,null,["$1","$0"],["cc","cb"],0,0)
p(m,"gfU","df",9)
o(m=X.de.prototype,"gel","em",4)
o(m,"ge9","ea",4)
o(m,"gef","eg",2)
o(m,"gep","eq",10)
o(m,"gen","eo",10)
o(m,"geu","ev",2)
o(m,"gey","ez",2)
o(m,"gej","ek",2)
o(m,"gew","ex",2)
o(m,"geh","ei",2)
o(m,"geA","eB",17)
o(m,"geC","eD",4)
o(m,"geQ","eR",5)
o(m,"geM","eN",5)
o(m,"geO","eP",5)
r(D.aQ.prototype,"gdA",0,0,null,["$1","$0"],["ah","dB"],0,0)
r(m=D.cH.prototype,"gcn",0,0,null,["$1","$0"],["co","er"],0,0)
o(m,"geE","eF",18)
q(m,"ge1","e2",11)
q(m,"geI","eJ",11)
n(V.D.prototype,"gj","bQ",12)
n(V.y.prototype,"gj","bQ",12)
r(m=U.bH.prototype,"gay",0,0,null,["$1","$0"],["J","a_"],0,0)
q(m,"gdC","dD",13)
q(m,"geG","eH",13)
r(m=U.df.prototype,"gay",0,0,null,["$1","$0"],["J","a_"],0,0)
o(m,"gbm","bn",1)
o(m,"gbo","bp",1)
o(m,"gbq","br",1)
r(m=U.dg.prototype,"gay",0,0,null,["$1","$0"],["J","a_"],0,0)
o(m,"gbm","bn",1)
o(m,"gbo","bp",1)
o(m,"gbq","br",1)
o(m,"gdW","dX",1)
o(m,"gdY","dZ",1)
o(m,"gf6","f7",1)
o(m,"gf4","f5",1)
o(m,"gf2","f3",1)
o(U.dh.prototype,"ge_","e0",1)
r(M.ct.prototype,"gR",0,0,null,["$1","$0"],["S","aM"],0,0)
r(m=M.cy.prototype,"gR",0,0,null,["$1","$0"],["S","aM"],0,0)
q(m,"geb","ec",3)
q(m,"ged","ee",3)
r(m=M.d2.prototype,"gR",0,0,null,["$1","$0"],["S","aM"],0,0)
q(m,"ge3","e4",14)
q(m,"geK","eL",14)
r(m=O.cL.prototype,"gaB",0,0,null,["$1","$0"],["T","aO"],0,0)
r(m,"geW",0,0,null,["$1","$0"],["cp","eX"],0,0)
q(m,"ge5","e6",15)
q(m,"ge7","e8",15)
r(O.bP.prototype,"gaB",0,0,null,["$1","$0"],["T","aO"],0,0)
r(O.cY.prototype,"gaB",0,0,null,["$1","$0"],["T","aO"],0,0)
r(X.cS.prototype,"gdG",0,0,null,["$1","$0"],["ab","dH"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.a0,null)
s(P.a0,[H.j_,J.a,J.W,P.dD,P.j,H.bM,P.f5,H.cz,H.hL,H.hA,P.bg,H.bC,H.dU,P.Z,H.fc,H.fd,H.f7,P.e_,P.br,P.ca,P.dl,P.d3,P.hk,P.d7,P.iv,P.io,P.ii,P.dC,P.q,P.ev,P.iu,P.b8,P.a7,P.a4,P.aR,P.fO,P.d0,P.dv,P.eZ,P.aZ,P.bN,P.b0,P.t,P.aF,W.eC,W.I,W.cA,P.e4,P.ij,K.ei,K.cB,K.cK,K.h3,L.d1,L.d8,L.d9,L.hv,O.af,O.bQ,E.er,E.at,E.be,E.bl,E.du,E.fV,E.d6,Z.dj,Z.dk,Z.bB,Z.bh,Z.aI,D.eu,D.ah,D.O,X.cr,X.cG,X.fa,X.fg,X.a8,X.fE,X.hw,X.de,D.eq,D.aQ,D.Y,D.fR,D.he,V.N,V.as,V.eQ,V.cM,V.aa,V.X,V.P,V.aB,V.cV,V.D,V.y,U.df,U.dg,U.dh,M.ct,M.cy,M.h1,M.d2,A.cn,A.el,A.S,A.co,A.cv,A.cT,A.d_,A.fm,A.bY,A.bZ,A.c0,A.c1,A.dc,A.hH,F.aS,F.bL,F.bU,F.h4,F.h5,F.h6,F.h7,F.bq,F.hU,F.hV,F.hY,F.hZ,O.d4,O.bP,O.fn,T.hr,X.iR,X.hm,X.f2,X.cS,V.h8])
s(J.a,[J.f6,J.cE,J.cF,J.aW,J.bK,J.bi,H.bT,W.d,W.eh,W.cp,W.ag,W.G,W.dn,W.a6,W.eG,W.eH,W.dq,W.cx,W.ds,W.eJ,W.i,W.dw,W.av,W.f1,W.dy,W.aT,W.ff,W.fy,W.dE,W.dF,W.aw,W.dG,W.dJ,W.az,W.dN,W.dP,W.aD,W.dQ,W.aE,W.dV,W.an,W.dY,W.hu,W.aH,W.e0,W.hy,W.hN,W.e5,W.e7,W.e9,W.eb,W.ed,P.aY,P.dA,P.b1,P.dL,P.fT,P.dW,P.b3,P.e2,P.em,P.dm,P.cW,P.dS])
s(J.cF,[J.fP,J.c2,J.aX])
t(J.iZ,J.aW)
s(J.bK,[J.cD,J.cC])
t(P.fe,P.dD)
s(P.fe,[H.dd,W.i9,W.i8,P.eV])
t(H.M,H.dd)
s(P.j,[H.n,H.bO,H.i2,P.f4])
t(H.eM,H.bO)
s(P.f5,[H.cJ,H.i3])
s(P.bg,[H.fL,H.f9,H.hK,H.et,H.h0,P.cR,P.ad,P.hM,P.hJ,P.hg,P.ez,P.eF])
s(H.bC,[H.iM,H.hn,H.f8,H.iF,H.iG,H.iH,P.i5,P.i4,P.i6,P.i7,P.it,P.is,P.iA,P.il,P.im,P.fi,P.eK,P.eL,W.fA,W.fC,W.h_,W.hj,W.ic,P.iB,P.eW,P.eX,P.eo,E.fW,E.fX,E.fY,E.ht,D.eR,D.eS,F.iw,F.i0,F.i_,F.hW,F.hX,O.fq,O.fr,O.fs,O.ft,O.fu,O.fv,O.fw,O.fx,T.hs,V.iK,V.ha,V.h9])
s(H.hn,[H.hh,H.bz])
t(P.fh,P.Z)
t(H.H,P.fh)
t(H.bk,H.n)
t(H.cN,H.bT)
s(H.cN,[H.c4,H.c6])
t(H.c5,H.c4)
t(H.bS,H.c5)
t(H.c7,H.c6)
t(H.cO,H.c7)
s(H.cO,[H.fF,H.fG,H.fH,H.fI,H.fJ,H.cP,H.fK])
t(P.ir,P.f4)
t(P.ik,P.iv)
t(P.ih,P.io)
t(P.eA,P.hk)
t(P.eN,P.ev)
t(P.hO,P.eN)
t(P.hP,P.eA)
s(P.a4,[P.K,P.v])
s(P.ad,[P.bn,P.f3])
s(W.d,[W.C,W.eU,W.aC,W.c8,W.aG,W.ao,W.cb,W.i1,W.c3,P.ep,P.bd])
s(W.C,[W.T,W.aP])
s(W.T,[W.l,P.k])
s(W.l,[W.ej,W.ek,W.bf,W.eY,W.bJ,W.h2])
t(W.eB,W.ag)
t(W.bF,W.dn)
s(W.a6,[W.eD,W.eE])
t(W.dr,W.dq)
t(W.cw,W.dr)
t(W.dt,W.ds)
t(W.eI,W.dt)
t(W.au,W.cp)
t(W.dx,W.dw)
t(W.eT,W.dx)
t(W.dz,W.dy)
t(W.bI,W.dz)
t(W.b4,W.i)
s(W.b4,[W.bj,W.ak,W.bo])
t(W.fz,W.dE)
t(W.fB,W.dF)
t(W.dH,W.dG)
t(W.fD,W.dH)
t(W.dK,W.dJ)
t(W.cQ,W.dK)
t(W.dO,W.dN)
t(W.fQ,W.dO)
t(W.fZ,W.dP)
t(W.c9,W.c8)
t(W.hc,W.c9)
t(W.dR,W.dQ)
t(W.hd,W.dR)
t(W.hi,W.dV)
t(W.dZ,W.dY)
t(W.ho,W.dZ)
t(W.cc,W.cb)
t(W.hp,W.cc)
t(W.e1,W.e0)
t(W.hx,W.e1)
t(W.b6,W.ak)
t(W.e6,W.e5)
t(W.ia,W.e6)
t(W.dp,W.cx)
t(W.e8,W.e7)
t(W.id,W.e8)
t(W.ea,W.e9)
t(W.dI,W.ea)
t(W.ec,W.eb)
t(W.ip,W.ec)
t(W.ee,W.ed)
t(W.iq,W.ee)
t(W.ib,P.d3)
t(P.a3,P.ij)
t(P.dB,P.dA)
t(P.fb,P.dB)
t(P.dM,P.dL)
t(P.fM,P.dM)
t(P.dX,P.dW)
t(P.hl,P.dX)
t(P.e3,P.e2)
t(P.hz,P.e3)
t(P.en,P.dm)
t(P.fN,P.bd)
t(P.dT,P.dS)
t(P.hf,P.dT)
s(K.cB,[K.ay,L.db])
s(E.er,[Z.cq,A.cX,T.d5])
s(D.O,[D.aU,D.aV,D.u,X.fS])
s(X.fS,[X.cI,X.ax,X.bR,X.da])
s(O.af,[D.cH,U.bH])
s(D.eu,[U.ey,U.a_])
t(U.bE,U.a_)
t(M.b2,M.h1)
s(A.cX,[A.fj,A.hb])
s(A.dc,[A.b5,A.hE,A.hF,A.hG,A.hC,A.L,A.hD,A.B,A.bX,A.hI,A.c_,A.a1,A.bp,A.Q])
s(O.d4,[O.cL,O.cY])
s(O.bP,[O.fk,O.fl,O.ai])
s(O.ai,[O.fo,O.fp])
t(T.hq,T.d5)
t(X.f_,X.hm)
u(H.dd,H.hL)
u(H.c4,P.q)
u(H.c5,H.cz)
u(H.c6,P.q)
u(H.c7,H.cz)
u(P.dD,P.q)
u(W.dn,W.eC)
u(W.dq,P.q)
u(W.dr,W.I)
u(W.ds,P.q)
u(W.dt,W.I)
u(W.dw,P.q)
u(W.dx,W.I)
u(W.dy,P.q)
u(W.dz,W.I)
u(W.dE,P.Z)
u(W.dF,P.Z)
u(W.dG,P.q)
u(W.dH,W.I)
u(W.dJ,P.q)
u(W.dK,W.I)
u(W.dN,P.q)
u(W.dO,W.I)
u(W.dP,P.Z)
u(W.c8,P.q)
u(W.c9,W.I)
u(W.dQ,P.q)
u(W.dR,W.I)
u(W.dV,P.Z)
u(W.dY,P.q)
u(W.dZ,W.I)
u(W.cb,P.q)
u(W.cc,W.I)
u(W.e0,P.q)
u(W.e1,W.I)
u(W.e5,P.q)
u(W.e6,W.I)
u(W.e7,P.q)
u(W.e8,W.I)
u(W.e9,P.q)
u(W.ea,W.I)
u(W.eb,P.q)
u(W.ec,W.I)
u(W.ed,P.q)
u(W.ee,W.I)
u(P.dA,P.q)
u(P.dB,W.I)
u(P.dL,P.q)
u(P.dM,W.I)
u(P.dW,P.q)
u(P.dX,W.I)
u(P.e2,P.q)
u(P.e3,W.I)
u(P.dm,P.Z)
u(P.dS,P.q)
u(P.dT,W.I)})()
var v={mangledGlobalNames:{v:"int",K:"double",a4:"num",t:"String",b8:"bool",b0:"Null",aZ:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.O]},{func:1,ret:-1,args:[D.O]},{func:1,ret:-1,args:[W.ak]},{func:1,ret:-1,args:[P.v,[P.j,E.at]]},{func:1,ret:-1,args:[W.i]},{func:1,ret:-1,args:[W.bo]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.b0,args:[,,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bj]},{func:1,ret:-1,args:[P.v,[P.j,D.Y]]},{func:1,ret:P.K},{func:1,ret:-1,args:[P.v,[P.j,U.a_]]},{func:1,ret:-1,args:[P.v,[P.j,M.b2]]},{func:1,ret:-1,args:[P.v,[P.j,V.aa]]},{func:1,ret:P.b0,args:[,]},{func:1,ret:-1,args:[W.b6]},{func:1,ret:P.b8,args:[[P.j,D.Y]]},{func:1,ret:P.v,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.f=W.bf.prototype
C.F=J.a.prototype
C.a=J.aW.prototype
C.G=J.cC.prototype
C.c=J.cD.prototype
C.i=J.cE.prototype
C.d=J.bK.prototype
C.b=J.bi.prototype
C.H=J.aX.prototype
C.q=J.fP.prototype
C.M=P.cW.prototype
C.j=J.c2.prototype
C.r=W.b6.prototype
C.t=W.c3.prototype
C.u=new E.be("Browser.chrome")
C.k=new E.be("Browser.firefox")
C.l=new E.be("Browser.edge")
C.v=new E.be("Browser.other")
C.m=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.w=function() {
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
C.B=function(getTagFallback) {
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
C.x=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.y=function(hooks) {
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
C.A=function(hooks) {
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
C.z=function(hooks) {
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

C.C=new P.fO()
C.o=new P.hO()
C.D=new P.hP()
C.e=new P.ik()
C.h=new P.aR(0)
C.E=new P.aR(5e6)
C.I=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.v])
C.J=new E.bl("OperatingSystem.windows")
C.p=new E.bl("OperatingSystem.mac")
C.K=new E.bl("OperatingSystem.linux")
C.L=new E.bl("OperatingSystem.other")
C.N=new P.br(null,2)})();(function staticFields(){$.ae=0
$.bA=null
$.jp=null
$.jZ=null
$.jW=null
$.k1=null
$.iC=null
$.iI=null
$.jj=null
$.bs=null
$.cf=null
$.cg=null
$.jd=!1
$.ab=C.e
$.a2=[]
$.eP=null
$.jz=null
$.jC=null
$.al=null
$.jG=null
$.jN=null
$.jP=null
$.hQ=null
$.hR=null
$.hS=null
$.jO=null
$.jB=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"mn","k7",function(){return H.jY("_$dart_dartClosure")})
u($,"mo","jn",function(){return H.jY("_$dart_js")})
u($,"mp","k8",function(){return H.ap(H.hB({
toString:function(){return"$receiver$"}}))})
u($,"mq","k9",function(){return H.ap(H.hB({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"mr","ka",function(){return H.ap(H.hB(null))})
u($,"ms","kb",function(){return H.ap(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mv","ke",function(){return H.ap(H.hB(void 0))})
u($,"mw","kf",function(){return H.ap(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mu","kd",function(){return H.ap(H.jL(null))})
u($,"mt","kc",function(){return H.ap(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"my","kh",function(){return H.ap(H.jL(void 0))})
u($,"mx","kg",function(){return H.ap(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"mL","jo",function(){return P.l9()})
u($,"mN","kl",function(){return P.kY("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"mF","kk",function(){return Z.a9(0)})
u($,"mz","ki",function(){return Z.a9(511)})
u($,"mH","ac",function(){return Z.a9(1)})
u($,"mG","aN",function(){return Z.a9(2)})
u($,"mB","aM",function(){return Z.a9(4)})
u($,"mI","ba",function(){return Z.a9(8)})
u($,"mJ","aO",function(){return Z.a9(16)})
u($,"mC","cj",function(){return Z.a9(32)})
u($,"mD","ck",function(){return Z.a9(64)})
u($,"mE","kj",function(){return Z.a9(96)})
u($,"mK","bx",function(){return Z.a9(128)})
u($,"mA","aL",function(){return Z.a9(256)})
u($,"mm","k6",function(){return new V.eQ(1e-9)})
u($,"ml","z",function(){return $.k6()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.bT,ArrayBufferView:H.bT,Float32Array:H.bS,Float64Array:H.bS,Int16Array:H.fF,Int32Array:H.fG,Int8Array:H.fH,Uint16Array:H.fI,Uint32Array:H.fJ,Uint8ClampedArray:H.cP,CanvasPixelArray:H.cP,Uint8Array:H.fK,HTMLAudioElement:W.l,HTMLBRElement:W.l,HTMLBaseElement:W.l,HTMLBodyElement:W.l,HTMLButtonElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLDivElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLInputElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMediaElement:W.l,HTMLMenuElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTableElement:W.l,HTMLTableRowElement:W.l,HTMLTableSectionElement:W.l,HTMLTemplateElement:W.l,HTMLTextAreaElement:W.l,HTMLTimeElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLVideoElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLFrameSetElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,AccessibleNodeList:W.eh,HTMLAnchorElement:W.ej,HTMLAreaElement:W.ek,Blob:W.cp,HTMLCanvasElement:W.bf,CDATASection:W.aP,CharacterData:W.aP,Comment:W.aP,ProcessingInstruction:W.aP,Text:W.aP,CSSPerspective:W.eB,CSSCharsetRule:W.G,CSSConditionRule:W.G,CSSFontFaceRule:W.G,CSSGroupingRule:W.G,CSSImportRule:W.G,CSSKeyframeRule:W.G,MozCSSKeyframeRule:W.G,WebKitCSSKeyframeRule:W.G,CSSKeyframesRule:W.G,MozCSSKeyframesRule:W.G,WebKitCSSKeyframesRule:W.G,CSSMediaRule:W.G,CSSNamespaceRule:W.G,CSSPageRule:W.G,CSSRule:W.G,CSSStyleRule:W.G,CSSSupportsRule:W.G,CSSViewportRule:W.G,CSSStyleDeclaration:W.bF,MSStyleCSSProperties:W.bF,CSS2Properties:W.bF,CSSImageValue:W.a6,CSSKeywordValue:W.a6,CSSNumericValue:W.a6,CSSPositionValue:W.a6,CSSResourceValue:W.a6,CSSUnitValue:W.a6,CSSURLImageValue:W.a6,CSSStyleValue:W.a6,CSSMatrixComponent:W.ag,CSSRotation:W.ag,CSSScale:W.ag,CSSSkew:W.ag,CSSTranslation:W.ag,CSSTransformComponent:W.ag,CSSTransformValue:W.eD,CSSUnparsedValue:W.eE,DataTransferItemList:W.eG,DOMException:W.eH,ClientRectList:W.cw,DOMRectList:W.cw,DOMRectReadOnly:W.cx,DOMStringList:W.eI,DOMTokenList:W.eJ,Element:W.T,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.au,FileList:W.eT,FileWriter:W.eU,HTMLFormElement:W.eY,Gamepad:W.av,History:W.f1,HTMLCollection:W.bI,HTMLFormControlsCollection:W.bI,HTMLOptionsCollection:W.bI,ImageData:W.aT,HTMLImageElement:W.bJ,KeyboardEvent:W.bj,Location:W.ff,MediaList:W.fy,MIDIInputMap:W.fz,MIDIOutputMap:W.fB,MimeType:W.aw,MimeTypeArray:W.fD,PointerEvent:W.ak,MouseEvent:W.ak,DragEvent:W.ak,Document:W.C,DocumentFragment:W.C,HTMLDocument:W.C,ShadowRoot:W.C,XMLDocument:W.C,Attr:W.C,DocumentType:W.C,Node:W.C,NodeList:W.cQ,RadioNodeList:W.cQ,Plugin:W.az,PluginArray:W.fQ,RTCStatsReport:W.fZ,HTMLSelectElement:W.h2,SourceBuffer:W.aC,SourceBufferList:W.hc,SpeechGrammar:W.aD,SpeechGrammarList:W.hd,SpeechRecognitionResult:W.aE,Storage:W.hi,CSSStyleSheet:W.an,StyleSheet:W.an,TextTrack:W.aG,TextTrackCue:W.ao,VTTCue:W.ao,TextTrackCueList:W.ho,TextTrackList:W.hp,TimeRanges:W.hu,Touch:W.aH,TouchEvent:W.bo,TouchList:W.hx,TrackDefaultList:W.hy,CompositionEvent:W.b4,FocusEvent:W.b4,TextEvent:W.b4,UIEvent:W.b4,URL:W.hN,VideoTrackList:W.i1,WheelEvent:W.b6,Window:W.c3,DOMWindow:W.c3,CSSRuleList:W.ia,ClientRect:W.dp,DOMRect:W.dp,GamepadList:W.id,NamedNodeMap:W.dI,MozNamedAttrMap:W.dI,SpeechRecognitionResultList:W.ip,StyleSheetList:W.iq,SVGLength:P.aY,SVGLengthList:P.fb,SVGNumber:P.b1,SVGNumberList:P.fM,SVGPointList:P.fT,SVGStringList:P.hl,SVGAElement:P.k,SVGAnimateElement:P.k,SVGAnimateMotionElement:P.k,SVGAnimateTransformElement:P.k,SVGAnimationElement:P.k,SVGCircleElement:P.k,SVGClipPathElement:P.k,SVGDefsElement:P.k,SVGDescElement:P.k,SVGDiscardElement:P.k,SVGEllipseElement:P.k,SVGFEBlendElement:P.k,SVGFEColorMatrixElement:P.k,SVGFEComponentTransferElement:P.k,SVGFECompositeElement:P.k,SVGFEConvolveMatrixElement:P.k,SVGFEDiffuseLightingElement:P.k,SVGFEDisplacementMapElement:P.k,SVGFEDistantLightElement:P.k,SVGFEFloodElement:P.k,SVGFEFuncAElement:P.k,SVGFEFuncBElement:P.k,SVGFEFuncGElement:P.k,SVGFEFuncRElement:P.k,SVGFEGaussianBlurElement:P.k,SVGFEImageElement:P.k,SVGFEMergeElement:P.k,SVGFEMergeNodeElement:P.k,SVGFEMorphologyElement:P.k,SVGFEOffsetElement:P.k,SVGFEPointLightElement:P.k,SVGFESpecularLightingElement:P.k,SVGFESpotLightElement:P.k,SVGFETileElement:P.k,SVGFETurbulenceElement:P.k,SVGFilterElement:P.k,SVGForeignObjectElement:P.k,SVGGElement:P.k,SVGGeometryElement:P.k,SVGGraphicsElement:P.k,SVGImageElement:P.k,SVGLineElement:P.k,SVGLinearGradientElement:P.k,SVGMarkerElement:P.k,SVGMaskElement:P.k,SVGMetadataElement:P.k,SVGPathElement:P.k,SVGPatternElement:P.k,SVGPolygonElement:P.k,SVGPolylineElement:P.k,SVGRadialGradientElement:P.k,SVGRectElement:P.k,SVGScriptElement:P.k,SVGSetElement:P.k,SVGStopElement:P.k,SVGStyleElement:P.k,SVGElement:P.k,SVGSVGElement:P.k,SVGSwitchElement:P.k,SVGSymbolElement:P.k,SVGTSpanElement:P.k,SVGTextContentElement:P.k,SVGTextElement:P.k,SVGTextPathElement:P.k,SVGTextPositioningElement:P.k,SVGTitleElement:P.k,SVGUseElement:P.k,SVGViewElement:P.k,SVGGradientElement:P.k,SVGComponentTransferFunctionElement:P.k,SVGFEDropShadowElement:P.k,SVGMPathElement:P.k,SVGTransform:P.b3,SVGTransformList:P.hz,AudioBuffer:P.em,AudioParamMap:P.en,AudioTrackList:P.ep,AudioContext:P.bd,webkitAudioContext:P.bd,BaseAudioContext:P.bd,OfflineAudioContext:P.fN,WebGL2RenderingContext:P.cW,SQLResultSetRowList:P.hf})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.cN.$nativeSuperclassTag="ArrayBufferView"
H.c4.$nativeSuperclassTag="ArrayBufferView"
H.c5.$nativeSuperclassTag="ArrayBufferView"
H.bS.$nativeSuperclassTag="ArrayBufferView"
H.c6.$nativeSuperclassTag="ArrayBufferView"
H.c7.$nativeSuperclassTag="ArrayBufferView"
H.cO.$nativeSuperclassTag="ArrayBufferView"
W.c8.$nativeSuperclassTag="EventTarget"
W.c9.$nativeSuperclassTag="EventTarget"
W.cb.$nativeSuperclassTag="EventTarget"
W.cc.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(K.k_,[])
else K.k_([])})})()
//# sourceMappingURL=test.dart.js.map
