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
a[c]=function(){a[c]=function(){H.lV(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.iU"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.iU"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.iU(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={iI:function iI(){},
kn:function(a,b,c,d){if(!!a.$in)return new H.et(a,b,[c,d])
return new H.bA(a,b,[c,d])},
j8:function(){return new P.fW("No element")},
kI:function(a,b){var u=J.aZ(a)
if(typeof u!=="number")return u.R()
H.cO(a,0,u-1,b)},
cO:function(a,b,c,d){if(c-b<=32)H.kH(a,b,c,d)
else H.kG(a,b,c,d)},
kH:function(a,b,c,d){var u,t,s,r,q,p
for(u=b+1,t=J.dY(a);u<=c;++u){s=t.h(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.h(a,r-1),s)
if(typeof q!=="number")return q.U()
q=q>0}else q=!1
if(!q)break
p=r-1
t.k(a,r,t.h(a,p))
r=p}t.k(a,r,s)}},
kG:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j=C.d.S(a5-a4+1,6),i=a4+j,h=a5-j,g=C.d.S(a4+a5,2),f=g-j,e=g+j,d=J.dY(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.U()
if(a2>0){u=b
b=c
c=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.U()
if(a2>0){u=a1
a1=a0
a0=u}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.U()
if(a2>0){u=a
a=c
c=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.U()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.U()
if(a2>0){u=a0
a0=c
c=u}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.U()
if(a2>0){u=a0
a0=a
a=u}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.U()
if(a2>0){u=a1
a1=b
b=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.U()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.U()
if(a2>0){u=a1
a1=a0
a0=u}d.k(a3,i,c)
d.k(a3,g,a)
d.k(a3,h,a1)
d.k(a3,f,d.h(a3,a4))
d.k(a3,e,d.h(a3,a5))
t=a4+1
s=a5-1
if(J.H(a6.$2(b,a0),0)){for(r=t;r<=s;++r){q=d.h(a3,r)
p=a6.$2(q,b)
if(p===0)continue
if(typeof p!=="number")return p.af()
if(p<0){if(r!==t){d.k(a3,r,d.h(a3,t))
d.k(a3,t,q)}++t}else for(;!0;){p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.U()
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
if(typeof l!=="number")return l.af()
if(l<0){if(r!==t){d.k(a3,r,d.h(a3,t))
d.k(a3,t,q)}++t}else{k=a6.$2(q,a0)
if(typeof k!=="number")return k.U()
if(k>0)for(;!0;){p=a6.$2(d.h(a3,s),a0)
if(typeof p!=="number")return p.U()
if(p>0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.af()
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
H.cO(a3,a4,t-2,a6)
H.cO(a3,s+2,a5,a6)
if(m)return
if(t<i&&s>h){for(;J.H(a6.$2(d.h(a3,t),b),0);)++t
for(;J.H(a6.$2(d.h(a3,s),a0),0);)--s
for(r=t;r<=s;++r){q=d.h(a3,r)
if(a6.$2(q,b)===0){if(r!==t){d.k(a3,r,d.h(a3,t))
d.k(a3,t,q)}++t}else if(a6.$2(q,a0)===0)for(;!0;)if(a6.$2(d.h(a3,s),a0)===0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.af()
o=s-1
if(p<0){d.k(a3,r,d.h(a3,t))
n=t+1
d.k(a3,t,d.h(a3,s))
d.k(a3,s,q)
t=n}else{d.k(a3,r,d.h(a3,s))
d.k(a3,s,q)}s=o
break}}H.cO(a3,t,s,a6)}else H.cO(a3,t,s,a6)},
I:function I(a){this.a=a},
n:function n(){},
by:function by(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bA:function bA(a,b,c){this.a=a
this.b=b
this.$ti=c},
et:function et(a,b,c){this.a=a
this.b=b
this.$ti=c},
cw:function cw(a,b){this.a=null
this.b=a
this.c=b},
hN:function hN(a,b,c){this.a=a
this.b=b
this.$ti=c},
hO:function hO(a,b){this.a=a
this.b=b},
cn:function cn(){},
hs:function hs(){},
d1:function d1(){},
c5:function(a){var u,t=H.lW(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
lG:function(a){return v.types[a]},
lL:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.Q(a).$iu},
f:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.Z(a)
if(typeof u!=="string")throw H.c(H.ax(a))
return u},
bH:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bI:function(a){return H.kq(a)+H.jy(H.c4(a),0,null)},
kq:function(a){var u,t,s,r,q,p,o,n=J.Q(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.A||!!n.$ibP){r=C.j(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.c5(t.length>1&&C.b.aW(t,0)===36?C.b.ag(t,1):t)},
ji:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
kA:function(a){var u,t,s,r=H.b([],[P.v])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.m)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ax(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.d.aO(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.c(H.ax(s))}return H.ji(r)},
kz:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ax(s))
if(s<0)throw H.c(H.ax(s))
if(s>65535)return H.kA(a)}return H.ji(a)},
ky:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.aO(u,10))>>>0,56320|u&1023)}throw H.c(P.ao(a,0,1114111,null,null))},
ba:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
kx:function(a){var u=H.ba(a).getFullYear()+0
return u},
kv:function(a){var u=H.ba(a).getMonth()+1
return u},
kr:function(a){var u=H.ba(a).getDate()+0
return u},
ks:function(a){var u=H.ba(a).getHours()+0
return u},
ku:function(a){var u=H.ba(a).getMinutes()+0
return u},
kw:function(a){var u=H.ba(a).getSeconds()+0
return u},
kt:function(a){var u=H.ba(a).getMilliseconds()+0
return u},
Y:function(a){throw H.c(H.ax(a))},
e:function(a,b){if(a==null)J.aZ(a)
throw H.c(H.bk(a,b))},
bk:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a6(!0,b,s,null)
u=J.aZ(a)
if(!(b<0)){if(typeof u!=="number")return H.Y(u)
t=b>=u}else t=!0
if(t)return P.F(b,a,s,null,u)
return P.cJ(b,s)},
lz:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bb(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bb(a,c,!0,b,"end",u)
return new P.a6(!0,b,"end",null)},
ax:function(a){return new P.a6(!0,a,null,null)},
lv:function(a){if(typeof a!=="number")throw H.c(H.ax(a))
return a},
c:function(a){var u
if(a==null)a=new P.cE()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.jL})
u.name=""}else u.toString=H.jL
return u},
jL:function(){return J.Z(this.dartException)},
p:function(a){throw H.c(a)},
m:function(a){throw H.c(P.bq(a))},
af:function(a){var u,t,s,r,q,p
a=H.jJ(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.r])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hg(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hh:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
jr:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
je:function(a,b){return new H.ft(a,b==null?null:b.method)},
iJ:function(a,b){var u=b==null,t=u?null:b.method
return new H.eO(a,t,u?null:b.receiver)},
e_:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.iv(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.aO(t,16)&8191)===10)switch(s){case 438:return f.$1(H.iJ(H.f(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.je(H.f(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.jO()
q=$.jP()
p=$.jQ()
o=$.jR()
n=$.jU()
m=$.jV()
l=$.jT()
$.jS()
k=$.jX()
j=$.jW()
i=r.X(u)
if(i!=null)return f.$1(H.iJ(u,i))
else{i=q.X(u)
if(i!=null){i.method="call"
return f.$1(H.iJ(u,i))}else{i=p.X(u)
if(i==null){i=o.X(u)
if(i==null){i=n.X(u)
if(i==null){i=m.X(u)
if(i==null){i=l.X(u)
if(i==null){i=o.X(u)
if(i==null){i=k.X(u)
if(i==null){i=j.X(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.je(u,i))}}return f.$1(new H.hr(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.cQ()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.a6(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.cQ()
return a},
iX:function(a){var u
if(a==null)return new H.dC(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dC(a)},
lD:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.k(0,a[u],a[t])}return b},
lK:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.o("Unsupported number of arguments for wrapped closure"))},
bj:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.lK)
a.$identity=u
return u},
kb:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.fX().constructor.prototype):Object.create(new H.bn(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.a7
if(typeof t!=="number")return t.D()
$.a7=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.j6(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.k7(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.j6(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
k7:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.lG,a)
if(typeof a=="function")if(b)return a
else{u=c?H.j5:H.iy
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.c("Error in functionType of tearoff")},
k8:function(a,b,c,d){var u=H.iy
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
j6:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.ka(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.k8(t,!r,u,b)
if(t===0){r=$.a7
if(typeof r!=="number")return r.D()
$.a7=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bo
return new Function(r+H.f(q==null?$.bo=H.ec("self"):q)+";return "+p+"."+H.f(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.a7
if(typeof r!=="number")return r.D()
$.a7=r+1
o+=r
r="return function("+o+"){return this."
q=$.bo
return new Function(r+H.f(q==null?$.bo=H.ec("self"):q)+"."+H.f(u)+"("+o+");}")()},
k9:function(a,b,c,d){var u=H.iy,t=H.j5
switch(b?-1:a){case 0:throw H.c(H.kE("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
ka:function(a,b){var u,t,s,r,q,p,o,n=$.bo
if(n==null)n=$.bo=H.ec("self")
u=$.j4
if(u==null)u=$.j4=H.ec("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.k9(s,!q,t,b)
if(s===1){n="return function(){return this."+H.f(n)+"."+H.f(t)+"(this."+H.f(u)+");"
u=$.a7
if(typeof u!=="number")return u.D()
$.a7=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.f(n)+"."+H.f(t)+"(this."+H.f(u)+", "+o+");"
u=$.a7
if(typeof u!=="number")return u.D()
$.a7=u+1
return new Function(n+u+"}")()},
iU:function(a,b,c,d,e,f,g){return H.kb(a,b,c,d,!!e,!!f,g)},
iy:function(a){return a.a},
j5:function(a){return a.c},
ec:function(a){var u,t,s,r=new H.bn("self","target","receiver","name"),q=J.iG(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
lP:function(a,b){throw H.c(H.k6(a,H.c5(b.substring(2))))},
l:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.Q(a)[b]
else u=!0
if(u)return a
H.lP(a,b)},
lB:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
k6:function(a,b){return new H.ed("CastError: "+P.iE(a)+": type '"+H.f(H.lr(a))+"' is not a subtype of type '"+b+"'")},
lr:function(a){var u,t=J.Q(a)
if(!!t.$ibp){u=H.lB(t)
if(u!=null)return H.lQ(u)
return"Closure"}return H.bI(a)},
lV:function(a){throw H.c(new P.em(a))},
kE:function(a){return new H.fH(a)},
jD:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
c4:function(a){if(a==null)return
return a.$ti},
mr:function(a,b,c){return H.iu(a["$a"+H.f(c)],H.c4(b))},
lF:function(a,b,c,d){var u=H.iu(a["$a"+H.f(c)],H.c4(b))
return u==null?null:u[d]},
jE:function(a,b,c){var u=H.iu(a["$a"+H.f(b)],H.c4(a))
return u==null?null:u[c]},
az:function(a,b){var u=H.c4(a)
return u==null?null:u[b]},
lQ:function(a){return H.aV(a,null)},
aV:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.c5(a[0].name)+H.jy(a,1,b)
if(typeof a=="function")return H.c5(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.f(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.e(b,t)
return H.f(b[t])}if('func' in a)return H.kX(a,b)
if('futureOr' in a)return"FutureOr<"+H.aV("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kX:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.b([],[P.r])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.e(a0,m)
p=C.b.D(p,a0[m])
l=u[q]
if(l!=null&&l!==P.T)p+=" extends "+H.aV(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.aV(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.aV(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.aV(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.lC(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.aV(d[c],a0)+(" "+H.f(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
jy:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.as("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.aV(p,c)}return"<"+u.i(0)+">"},
iu:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
mp:function(a,b,c){return a.apply(b,H.iu(J.Q(b)["$a"+H.f(c)],H.c4(b)))},
mq:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
lM:function(a){var u,t,s,r,q=$.jF.$1(a),p=$.ik[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.iq[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.jB.$2(a,q)
if(q!=null){p=$.ik[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.iq[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.is(u)
$.ik[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.iq[q]=u
return u}if(s==="-"){r=H.is(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.jH(a,u)
if(s==="*")throw H.c(P.js(q))
if(v.leafTags[q]===true){r=H.is(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.jH(a,u)},
jH:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.iZ(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
is:function(a){return J.iZ(a,!1,null,!!a.$iu)},
lN:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.is(u)
else return J.iZ(u,c,null,null)},
lI:function(){if(!0===$.iY)return
$.iY=!0
H.lJ()},
lJ:function(){var u,t,s,r,q,p,o,n
$.ik=Object.create(null)
$.iq=Object.create(null)
H.lH()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.jI.$1(q)
if(p!=null){o=H.lN(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
lH:function(){var u,t,s,r,q,p,o=C.q()
o=H.bh(C.r,H.bh(C.t,H.bh(C.k,H.bh(C.k,H.bh(C.u,H.bh(C.v,H.bh(C.w(C.j),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.jF=new H.im(r)
$.jB=new H.io(q)
$.jI=new H.ip(p)},
bh:function(a,b){return a(b)||b},
kj:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.c(new P.eF("Illegal RegExp pattern ("+String(p)+")",a))},
lS:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
lA:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
jJ:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
jK:function(a,b,c){var u=H.lT(a,b,c)
return u},
lT:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.jJ(b),'g'),H.lA(c))},
hg:function hg(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ft:function ft(a,b){this.a=a
this.b=b},
eO:function eO(a,b,c){this.a=a
this.b=b
this.c=c},
hr:function hr(a){this.a=a},
iv:function iv(a){this.a=a},
dC:function dC(a){this.a=a
this.b=null},
bp:function bp(){},
h2:function h2(){},
fX:function fX(){},
bn:function bn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ed:function ed(a){this.a=a},
fH:function fH(a){this.a=a},
C:function C(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
eN:function eN(a){this.a=a},
eS:function eS(a,b){this.a=a
this.b=b
this.c=null},
b9:function b9(a,b){this.a=a
this.$ti=b},
eT:function eT(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
im:function im(a){this.a=a},
io:function io(a){this.a=a},
ip:function ip(a){this.a=a},
eM:function eM(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
c1:function(a){return a},
ag:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bk(b,a))},
kW:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.lz(a,b,c))
return b},
bF:function bF(){},
cA:function cA(){},
bE:function bE(){},
cB:function cB(){},
fm:function fm(){},
fn:function fn(){},
fo:function fo(){},
fp:function fp(){},
fq:function fq(){},
cC:function cC(){},
fr:function fr(){},
bS:function bS(){},
bT:function bT(){},
bU:function bU(){},
bV:function bV(){},
lC:function(a){return J.j9(a?Object.keys(a):[],null)},
lW:function(a){return v.mangledGlobalNames[a]},
lO:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
iZ:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
il:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.iY==null){H.lI()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.js("Return interceptor for "+H.f(u(a,q))))}s=a.constructor
r=s==null?null:s[$.j2()]
if(r!=null)return r
r=H.lM(a)
if(r!=null)return r
if(typeof a=="function")return C.C
u=Object.getPrototypeOf(a)
if(u==null)return C.n
if(u===Object.prototype)return C.n
if(typeof s=="function"){Object.defineProperty(s,$.j2(),{value:C.i,enumerable:false,writable:true,configurable:true})
return C.i}return C.i},
kh:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.ix(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.ao(a,0,4294967295,"length",null))
return J.j9(new Array(a),b)},
j9:function(a,b){return J.iG(H.b(a,[b]))},
iG:function(a){a.fixed$length=Array
return a},
ki:function(a,b){return J.c9(a,b)},
Q:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cr.prototype
return J.cq.prototype}if(typeof a=="string")return J.b7.prototype
if(a==null)return J.cs.prototype
if(typeof a=="boolean")return J.eL.prototype
if(a.constructor==Array)return J.aL.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aM.prototype
return a}if(a instanceof P.T)return a
return J.il(a)},
dY:function(a){if(typeof a=="string")return J.b7.prototype
if(a==null)return a
if(a.constructor==Array)return J.aL.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aM.prototype
return a}if(a instanceof P.T)return a
return J.il(a)},
iV:function(a){if(a==null)return a
if(a.constructor==Array)return J.aL.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aM.prototype
return a}if(a instanceof P.T)return a
return J.il(a)},
lE:function(a){if(typeof a=="number")return J.bw.prototype
if(typeof a=="string")return J.b7.prototype
if(a==null)return a
if(!(a instanceof P.T))return J.bP.prototype
return a},
iW:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aM.prototype
return a}if(a instanceof P.T)return a
return J.il(a)},
H:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.Q(a).m(a,b)},
c8:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lL(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.dY(a).h(a,b)},
k1:function(a,b,c){return J.iW(a).ee(a,b,c)},
k2:function(a,b,c,d){return J.iW(a).es(a,b,c,d)},
c9:function(a,b){return J.lE(a).an(a,b)},
iw:function(a,b){return J.iV(a).v(a,b)},
k3:function(a,b){return J.iV(a).B(a,b)},
e0:function(a){return J.Q(a).gH(a)},
aY:function(a){return J.iV(a).gJ(a)},
aZ:function(a){return J.dY(a).gj(a)},
k4:function(a,b){return J.iW(a).fc(a,b)},
Z:function(a){return J.Q(a).i(a)},
a:function a(){},
eL:function eL(){},
cs:function cs(){},
ct:function ct(){},
fx:function fx(){},
bP:function bP(){},
aM:function aM(){},
aL:function aL(a){this.$ti=a},
iH:function iH(a){this.$ti=a},
a_:function a_(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bw:function bw(){},
cr:function cr(){},
cq:function cq(){},
b7:function b7(){}},P={
kM:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.ls()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bj(new P.hQ(s),1)).observe(u,{childList:true})
return new P.hP(s,u,t)}else if(self.setImmediate!=null)return P.lt()
return P.lu()},
kN:function(a){self.scheduleImmediate(H.bj(new P.hR(a),0))},
kO:function(a){self.setImmediate(H.bj(new P.hS(a),0))},
kP:function(a){P.iN(C.f,a)},
iN:function(a,b){var u=C.d.S(a.a,1000)
return P.kT(u<0?0:u,b)},
jq:function(a,b){var u=C.d.S(a.a,1000)
return P.kU(u<0?0:u,b)},
kT:function(a,b){var u=new P.dI()
u.d4(a,b)
return u},
kU:function(a,b){var u=new P.dI()
u.d5(a,b)
return u},
mn:function(a){return new P.bf(a,1)},
kQ:function(){return C.F},
kR:function(a){return new P.bf(a,3)},
l_:function(a,b){return new P.i8(a,[b])},
ll:function(){var u,t
for(;u=$.bg,u!=null;){$.c3=null
t=u.b
$.bg=t
if(t==null)$.c2=null
u.a.$0()}},
lq:function(){$.iS=!0
try{P.ll()}finally{$.c3=null
$.iS=!1
if($.bg!=null)$.j3().$1(P.jC())}},
lo:function(a){var u=new P.d4(a)
if($.bg==null){$.bg=$.c2=u
if(!$.iS)$.j3().$1(P.jC())}else $.c2=$.c2.b=u},
lp:function(a){var u,t,s=$.bg
if(s==null){P.lo(a)
$.c3=$.c2
return}u=new P.d4(a)
t=$.c3
if(t==null){u.b=s
$.bg=$.c3=u}else{u.b=t.b
$.c3=t.b=u
if(u.b==null)$.c2=u}},
jo:function(a,b){var u=$.a5
if(u===C.e)return P.iN(a,b)
return P.iN(a,u.ew(b))},
jp:function(a,b){var u=$.a5
if(u===C.e)return P.jq(a,b)
return P.jq(a,u.c5(b,P.cX))},
jz:function(a,b,c,d,e){var u={}
u.a=d
P.lp(new P.ii(u,e))},
lm:function(a,b,c,d){var u,t=$.a5
if(t===c)return d.$0()
$.a5=c
u=t
try{t=d.$0()
return t}finally{$.a5=u}},
ln:function(a,b,c,d,e){var u,t=$.a5
if(t===c)return d.$1(e)
$.a5=c
u=t
try{t=d.$1(e)
return t}finally{$.a5=u}},
hQ:function hQ(a){this.a=a},
hP:function hP(a,b,c){this.a=a
this.b=b
this.c=c},
hR:function hR(a){this.a=a},
hS:function hS(a){this.a=a},
dI:function dI(){this.c=0},
ia:function ia(a,b){this.a=a
this.b=b},
i9:function i9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bf:function bf(a,b){this.a=a
this.b=b},
bY:function bY(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i8:function i8(a,b){this.a=a
this.$ti=b},
d4:function d4(a){this.a=a
this.b=null},
cS:function cS(){},
h_:function h_(){},
cX:function cX(){},
ic:function ic(){},
ii:function ii(a,b){this.a=a
this.b=b},
i2:function i2(){},
i3:function i3(a,b){this.a=a
this.b=b},
i4:function i4(a,b,c){this.a=a
this.b=b
this.c=c},
kk:function(a,b){return new H.C([a,b])},
kl:function(a){return H.lD(a,new H.C([null,null]))},
ja:function(a){return new P.i_([a])},
iR:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
kS:function(a,b){var u=new P.dj(a,b)
u.c=a.e
return u},
kg:function(a,b,c){var u,t
if(P.iT(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.r])
$.U.push(a)
try{P.kZ(a,u)}finally{if(0>=$.U.length)return H.e($.U,-1)
$.U.pop()}t=P.jm(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
iF:function(a,b,c){var u,t
if(P.iT(a))return b+"..."+c
u=new P.as(b)
$.U.push(a)
try{t=u
t.a=P.jm(t.a,a,", ")}finally{if(0>=$.U.length)return H.e($.U,-1)
$.U.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
iT:function(a){var u,t
for(u=$.U.length,t=0;t<u;++t)if(a===$.U[t])return!0
return!1},
kZ:function(a,b){var u,t,s,r,q,p,o,n=a.gJ(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.q())return
u=H.f(n.gE(n))
b.push(u)
m+=u.length+2;++l}if(!n.q()){if(l<=5)return
if(0>=b.length)return H.e(b,-1)
t=b.pop()
if(0>=b.length)return H.e(b,-1)
s=b.pop()}else{r=n.gE(n);++l
if(!n.q()){if(l<=4){b.push(H.f(r))
return}t=H.f(r)
if(0>=b.length)return H.e(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gE(n);++l
for(;n.q();r=q,q=p){p=n.gE(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.e(b,-1)
m-=b.pop().length+2;--l}b.push("...")
return}}s=H.f(r)
t=H.f(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)b.push(o)
b.push(s)
b.push(t)},
jb:function(a){var u,t={}
if(P.iT(a))return"{...}"
u=new P.as("")
try{$.U.push(a)
u.a+="{"
t.a=!0
J.k3(a,new P.eZ(t,u))
u.a+="}"}finally{if(0>=$.U.length)return H.e($.U,-1)
$.U.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
i_:function i_(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
i0:function i0(a){this.a=a
this.c=this.b=null},
dj:function dj(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
eJ:function eJ(){},
eU:function eU(){},
q:function q(){},
eY:function eY(){},
eZ:function eZ(a,b){this.a=a
this.b=b},
S:function S(){},
i5:function i5(){},
dk:function dk(){},
ef:function ef(){},
eh:function eh(){},
eu:function eu(){},
hv:function hv(){},
hw:function hw(){},
ib:function ib(a){this.b=0
this.c=a},
ke:function(a){if(a instanceof H.bp)return a.i(0)
return"Instance of '"+H.f(H.bI(a))+"'"},
km:function(a,b,c){var u,t,s=J.kh(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
eV:function(a,b,c){var u,t=H.b([],[c])
for(u=J.aY(a);u.q();)t.push(u.gE(u))
if(b)return t
return J.iG(t)},
iM:function(a){var u,t=a.length,s=P.iL(0,null,t)
if(typeof s!=="number")return s.af()
u=s<t
return H.kz(u?C.a.cS(a,0,s):a)},
kB:function(a){return new H.eM(a,H.kj(a,!1,!0,!1,!1,!1))},
jm:function(a,b,c){var u=J.aY(b)
if(!u.q())return a
if(c.length===0){do a+=H.f(u.gE(u))
while(u.q())}else{a+=H.f(u.gE(u))
for(;u.q();)a=a+c+H.f(u.gE(u))}return a},
kV:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.l){u=$.k0().b
u=u.test(b)}else u=!1
if(u)return b
t=C.y.eB(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.e(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.ky(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
kc:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
kd:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ch:function(a){if(a>=10)return""+a
return"0"+a},
iC:function(a){return new P.aI(1000*a)},
iE:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.Z(a)
if(typeof a==="string")return JSON.stringify(a)
return P.ke(a)},
k5:function(a){return new P.a6(!1,null,null,a)},
ix:function(a,b,c){return new P.a6(!0,a,b,c)},
cJ:function(a,b){return new P.bb(null,null,!0,a,b,"Value not in range")},
ao:function(a,b,c,d,e){return new P.bb(b,c,!0,a,d,"Invalid value")},
iL:function(a,b,c){var u
if(typeof a!=="number")return H.Y(a)
if(0<=a){if(typeof c!=="number")return H.Y(c)
u=a>c}else u=!0
if(u)throw H.c(P.ao(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.Y(c)
u=b>c}else u=!0
if(u)throw H.c(P.ao(b,a,c,"end",null))
return b}return c},
jj:function(a,b){if(typeof a!=="number")return a.af()
if(a<0)throw H.c(P.ao(a,0,null,b,null))},
F:function(a,b,c,d,e){var u=e==null?J.aZ(b):e
return new P.eI(u,!0,a,c,"Index out of range")},
t:function(a){return new P.ht(a)},
js:function(a){return new P.hq(a)},
bq:function(a){return new P.eg(a)},
o:function(a){return new P.dc(a)},
j0:function(a){H.lO(a)},
aW:function aW(){},
aH:function aH(a,b){this.a=a
this.b=b},
G:function G(){},
aI:function aI(a){this.a=a},
er:function er(){},
es:function es(){},
b3:function b3(){},
cE:function cE(){},
a6:function a6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bb:function bb(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eI:function eI(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
ht:function ht(a){this.a=a},
hq:function hq(a){this.a=a},
fW:function fW(a){this.a=a},
eg:function eg(a){this.a=a},
fw:function fw(){},
cQ:function cQ(){},
em:function em(a){this.a=a},
dc:function dc(a){this.a=a},
eF:function eF(a,b){this.a=a
this.b=b},
v:function v(){},
k:function k(){},
eK:function eK(){},
aO:function aO(){},
bz:function bz(){},
aP:function aP(){},
a2:function a2(){},
T:function T(){},
r:function r(){},
as:function as(a){this.a=a},
ly:function(a){var u,t=J.Q(a)
if(!!t.$iaK){u=t.gc7(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.dN(a.data,a.height,a.width)},
lx:function(a){if(a instanceof P.dN)return{data:a.a,height:a.b,width:a.c}
return a},
ay:function(a){var u,t,s,r,q
if(a==null)return
u=P.kk(P.r,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){q=t[r]
u.k(0,q,a[q])}return u},
lw:function(a){var u={}
a.B(0,new P.ij(u))
return u},
dN:function dN(a,b,c){this.a=a
this.b=b
this.c=c},
ij:function ij(a){this.a=a},
eB:function eB(a,b){this.a=a
this.b=b},
eC:function eC(){},
eD:function eD(){},
i1:function i1(){},
a4:function a4(){},
aN:function aN(){},
eQ:function eQ(){},
aQ:function aQ(){},
fu:function fu(){},
fA:function fA(){},
h0:function h0(){},
i:function i(){},
aR:function aR(){},
hf:function hf(){},
dh:function dh(){},
di:function di(){},
dt:function dt(){},
du:function du(){},
dE:function dE(){},
dF:function dF(){},
dL:function dL(){},
dM:function dM(){},
e6:function e6(){},
e7:function e7(){},
e8:function e8(a){this.a=a},
e9:function e9(){},
b_:function b_(){},
fv:function fv(){},
d5:function d5(){},
cL:function cL(){},
fV:function fV(){},
dA:function dA(){},
dB:function dB(){}},W={
iA:function(){var u=document.createElement("canvas")
return u},
iD:function(a){return"wheel"},
hZ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jx:function(a,b,c,d){var u=W.hZ(W.hZ(W.hZ(W.hZ(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
K:function(a,b,c,d){var u=W.jA(new W.hX(c),W.h)
if(u!=null&&!0)J.k2(a,b,u,!1)
return new W.hW(a,b,u,!1)},
jA:function(a,b){var u=$.a5
if(u===C.e)return a
return u.c5(a,b)},
j:function j(){},
e1:function e1(){},
e3:function e3(){},
e4:function e4(){},
cc:function cc(){},
b0:function b0(){},
aF:function aF(){},
ei:function ei(){},
B:function B(){},
br:function br(){},
ej:function ej(){},
a0:function a0(){},
a8:function a8(){},
ek:function ek(){},
el:function el(){},
en:function en(){},
eo:function eo(){},
cj:function cj(){},
ck:function ck(){},
ep:function ep(){},
eq:function eq(){},
hU:function hU(a,b){this.a=a
this.b=b},
M:function M(){},
h:function h(){},
d:function d(){},
ah:function ah(){},
ez:function ez(){},
eA:function eA(){},
eE:function eE(){},
ai:function ai(){},
eH:function eH(){},
bs:function bs(){},
aK:function aK(){},
bt:function bt(){},
b8:function b8(){},
eW:function eW(){},
fe:function fe(){},
ff:function ff(){},
fg:function fg(a){this.a=a},
fh:function fh(){},
fi:function fi(a){this.a=a},
al:function al(){},
fj:function fj(){},
aa:function aa(){},
hT:function hT(a){this.a=a},
z:function z(){},
cD:function cD(){},
an:function an(){},
fy:function fy(){},
fF:function fF(){},
fG:function fG(a){this.a=a},
fI:function fI(){},
ap:function ap(){},
fS:function fS(){},
aq:function aq(){},
fT:function fT(){},
ar:function ar(){},
fY:function fY(){},
fZ:function fZ(a){this.a=a},
ad:function ad(){},
at:function at(){},
ae:function ae(){},
h3:function h3(){},
h4:function h4(){},
ha:function ha(){},
au:function au(){},
bc:function bc(){},
hd:function hd(){},
he:function he(){},
aS:function aS(){},
hu:function hu(){},
hL:function hL(){},
aU:function aU(){},
bR:function bR(){},
hV:function hV(){},
d7:function d7(){},
hY:function hY(){},
dq:function dq(){},
i6:function i6(){},
i7:function i7(){},
hW:function hW(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
hX:function hX(a){this.a=a},
E:function E(){},
co:function co(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
d6:function d6(){},
d8:function d8(){},
d9:function d9(){},
da:function da(){},
db:function db(){},
dd:function dd(){},
de:function de(){},
df:function df(){},
dg:function dg(){},
dl:function dl(){},
dm:function dm(){},
dn:function dn(){},
dp:function dp(){},
dr:function dr(){},
ds:function ds(){},
dv:function dv(){},
dw:function dw(){},
dx:function dx(){},
bW:function bW(){},
bX:function bX(){},
dy:function dy(){},
dz:function dz(){},
dD:function dD(){},
dG:function dG(){},
dH:function dH(){},
bZ:function bZ(){},
c_:function c_(){},
dJ:function dJ(){},
dK:function dK(){},
dO:function dO(){},
dP:function dP(){},
dQ:function dQ(){},
dR:function dR(){},
dS:function dS(){},
dT:function dT(){},
dU:function dU(){},
dV:function dV(){},
dW:function dW(){},
dX:function dX(){}},K={
N:function(a){var u=new K.fJ()
u.cZ(a)
return u},
e2:function e2(){},
cp:function cp(){},
cx:function cx(){},
am:function am(){this.a=null},
fJ:function fJ(){this.a=null}},L={cR:function cR(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},cY:function cY(a,b,c){this.a=a
this.b=b
this.c=c},cZ:function cZ(a){this.b=a
this.c=null},hb:function hb(){var _=this
_.d=_.c=_.b=_.a=null},d_:function d_(a){this.b=a
this.a=this.c=null}},O={
iB:function(a){var u=new O.b1([a])
u.bD(a)
return u},
b1:function b1(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bC:function bC(){this.b=this.a=null},
cy:function cy(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
f6:function f6(a,b){this.a=a
this.b=b},
f7:function f7(){},
f8:function f8(a,b){this.a=a
this.b=b},
f9:function f9(){},
fa:function fa(a,b){this.a=a
this.b=b},
fb:function fb(){},
fc:function fc(a,b){this.a=a
this.b=b},
fd:function fd(){},
f0:function f0(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bB:function bB(){},
f1:function f1(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
a9:function a9(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
f3:function f3(){var _=this
_.e=_.d=_.c=_.b=null},
f4:function f4(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
f5:function f5(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cT:function cT(){}},E={
kD:function(a,b){var u=new E.fB(a)
u.cY(a,b)
return u},
kJ:function(a,b,c,d,e){var u,t,s=J.Q(a)
if(!!s.$ib0)return E.jn(a,!0,!0,!0,!1)
u=W.iA()
t=u.style
t.width="100%"
t.height="100%"
s.gc6(a).n(0,u)
return E.jn(u,!0,!0,!0,!1)},
jn:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.cW(),p=C.m.bv(a,"webgl2",P.kl(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.p(P.o("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.kD(p,a)
u=new T.h7(p)
u.b=p.getParameter(3379)
p.getParameter(34076)
u.e=u.d=0
q.f=u
u=new X.d2(a)
t=new X.eP()
t.d=P.ja(P.v)
u.b=t
t=new X.fk(u)
t.f=0
t.r=V.cG()
t.x=V.cG()
t.ch=t.Q=1
u.c=t
t=new X.eX(u)
t.r=0
t.x=V.cG()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hc(u)
t.f=V.cG()
t.r=V.cG()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.b([],[[P.cS,P.T]])
u.z=t
s=document
t.push(W.K(s,"contextmenu",u.gdD(),!1))
u.z.push(W.K(a,"focus",u.gdJ(),!1))
u.z.push(W.K(a,"blur",u.gdv(),!1))
u.z.push(W.K(s,"keyup",u.gdN(),!1))
u.z.push(W.K(s,"keydown",u.gdL(),!1))
u.z.push(W.K(a,"mousedown",u.gdR(),!1))
u.z.push(W.K(a,"mouseup",u.gdV(),!1))
u.z.push(W.K(a,r,u.gdT(),!1))
t=u.z
W.iD(a)
W.iD(a)
t.push(W.K(a,W.iD(a),u.gdX(),!1))
u.z.push(W.K(s,r,u.gdF(),!1))
u.z.push(W.K(s,"mouseup",u.gdH(),!1))
u.z.push(W.K(s,"pointerlockchange",u.gdZ(),!1))
u.z.push(W.K(a,"touchstart",u.ge9(),!1))
u.z.push(W.K(a,"touchend",u.ge5(),!1))
u.z.push(W.K(a,"touchmove",u.ge7(),!1))
q.ch=!0
q.cx=!1
q.cy=new P.aH(Date.now(),!1)
q.db=0
q.bU()
return q},
eb:function eb(){},
aJ:function aJ(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fB:function fB(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fC:function fC(a){this.a=a},
fD:function fD(a){this.a=a},
fE:function fE(a){this.a=a},
cW:function cW(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.f=_.e=_.d=_.c=_.b=null},
h9:function h9(a){this.a=a}},Z={
iQ:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.c1(c)),35044)
a.bindBuffer(b,null)
return new Z.d3(b,u)},
a1:function(a){return new Z.aw(a)},
d3:function d3(a,b){this.a=a
this.b=b},
cd:function cd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
hM:function hM(a){this.a=a},
ce:function ce(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
b6:function b6(a,b,c){this.a=a
this.b=b
this.c=c},
aw:function aw(a){this.a=a}},D={
a3:function(){var u=new D.b4()
u.d=0
return u},
ee:function ee(){},
b4:function b4(){var _=this
_.d=_.c=_.b=_.a=null},
ew:function ew(a){this.a=a},
ex:function ex(a){this.a=a},
V:function V(){this.b=null},
bu:function bu(){this.b=null},
bv:function bv(){this.b=null},
D:function D(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
ea:function ea(){},
b2:function b2(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
R:function R(){},
cv:function cv(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
fz:function fz(){},
fU:function fU(){}},X={cf:function cf(a,b){this.a=a
this.b=b},cu:function cu(a,b){this.a=a
this.b=b},eP:function eP(){this.d=this.b=this.a=null},eX:function eX(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bD:function bD(a,b,c){this.a=a
this.b=b
this.c=c},fk:function fk(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},hc:function hc(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},d2:function d2(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
kf:function(a){var u=new X.eG(),t=V.bi(1)
u.a=new V.aG(0,0,0,t)
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.jk
if(t==null){t=V.kC(0,0,1,1)
$.jk=t}u.r=t
return u},
iz:function iz(){},
eG:function eG(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cF:function cF(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
h1:function h1(){}},V={
bi:function(a){var u
if(a<0)u=0
else u=a>1?1:a
return u},
j1:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.cN(a-b,u)
return(a<0?a+u:a)+b},
w:function(a,b,c){if(a==null)return C.b.Y("null",c)
return C.b.Y(C.c.cI(Math.abs(a-0)<$.y().a?0:a,b),c+b+1)},
bl:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.r])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.m)(a),++s){r=V.w(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.e(o,q)
u=C.b.Y(o[q],t)
p=o.length
if(q>=p)return H.e(o,q)
o[q]=u}return o},
j_:function(a){return C.c.fj(Math.pow(2,C.B.bl(Math.log(H.lv(a))/Math.log(2))))},
iK:function(){var u=$.jd
return u==null?$.jd=V.ak(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
ak:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aj(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
jc:function(a,b,c){var u=c.A(0,Math.sqrt(c.I(c))),t=b.aA(u),s=t.A(0,Math.sqrt(t.I(t))),r=u.aA(s),q=new V.x(a.a,a.b,a.c),p=s.av(0).I(q),o=r.av(0).I(q),n=u.av(0).I(q)
return V.ak(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
cG:function(){var u=$.jg
return u==null?$.jg=new V.ab(0,0):u},
jh:function(){var u=$.ac
return u==null?$.ac=new V.W(0,0,0):u},
kC:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cK(a,b,c,d)},
bQ:function(){var u=$.jv
return u==null?$.jv=new V.x(0,0,0):u},
kK:function(){var u=$.hx
return u==null?$.hx=new V.x(-1,0,0):u},
iP:function(){var u=$.hy
return u==null?$.hy=new V.x(0,1,0):u},
kL:function(){var u=$.hz
return u==null?$.hz=new V.x(0,0,1):u},
L:function L(a,b,c){this.a=a
this.b=b
this.c=c},
aG:function aG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ev:function ev(a){this.a=a},
cz:function cz(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aj:function aj(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ab:function ab(a,b){this.a=a
this.b=b},
W:function W(a,b,c){this.a=a
this.b=b
this.c=c},
cH:function cH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cK:function cK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
av:function av(a,b){this.a=a
this.b=b},
x:function x(a,b,c){this.a=a
this.b=b
this.c=c},
lR:function(a){P.jp(C.z,new V.it(a))},
kF:function(a){var u=new V.fO()
u.d0(a,!0)
return u},
it:function it(a){this.a=a},
fO:function fO(){this.b=this.a=null},
fQ:function fQ(a){this.a=a},
fP:function fP(a){this.a=a}},U={
j7:function(a){var u=new U.cg()
u.a=a
return u},
cg:function cg(){this.b=this.a=null},
fl:function fl(){},
cM:function cM(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cl:function cl(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
ko:function(a,b){var u=a.aD,t=new A.f_(b,u)
t.d_(b,u)
t.cX(a,b)
return t},
kp:function(a,b,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="MaterialLight_"+a3.ga2(a3)+a4.ga2(a4)+a5.ga2(a5)+a6.ga2(a6)+a7.ga2(a7)+a8.ga2(a8)+a9.ga2(a9)+b0.ga2(b0)+b1.ga2(b1)+"_"
c+=a?"1":"0"
c+=b?"1":"0"
c+=a0?"1":"0"
c=c+"0_"+a2
u=b2.length
if(u>0){c+="_Bar"
for(t=0;t<b2.length;b2.length===u||(0,H.m)(b2),++t)c+="_"+H.f(b2[t].a)}u=b3.length
if(u>0){c+="_Dir"
for(t=0;t<b3.length;b3.length===u||(0,H.m)(b3),++t)c+="_"+H.f(b3[t].a)}u=b4.length
if(u>0){c+="_Point"
for(t=0;t<b4.length;b4.length===u||(0,H.m)(b4),++t)c+="_"+H.f(b4[t].a)}u=b5.length
if(u>0){c+="_Spot"
for(t=0;t<b5.length;b5.length===u||(0,H.m)(b5),++t)c+="_"+H.f(b5[t].a)}for(u=b2.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=b2[t].b
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
d=$.aD()
if(j){u=$.aC()
d=new Z.aw(d.a|u.a)}if(i){u=$.aB()
d=new Z.aw(d.a|u.a)}if(h){u=$.aE()
d=new Z.aw(d.a|u.a)}if(g){u=$.aA()
d=new Z.aw(d.a|u.a)}return new A.f2(a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,s,o,k,o,r,f,!0,e,!1,m,r,l,j,i,h,!1,g,a,!1,a0,!1,a2,c.charCodeAt(0)==0?c:c,d)},
ig:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
ih:function(a,b,c){var u,t="Txt, txt2D).rgb;\n"
A.ig(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.dZ(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.b){u+="   "+c+"Color = "+c+"Clr*texture2D("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.b){u+="   "+c+"Color = texture2D("+c+t
a.a=u}a.a=u+"}\n"},
l4:function(a,b){var u,t=a.a,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.ig(b,t,"emission")
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
l0:function(a,b){var u,t=a.b
if(!(t.a||t.b||!1))return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.ih(b,t,"ambient")
b.a+="\n"},
l2:function(a,b){var u,t=a.c
if(!(t.a||t.b||!1))return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.ih(b,t,"diffuse")
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
l5:function(a,b){var u,t=a.d
if(!(t.a||t.b||!1))return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.ih(b,t,"invDiffuse")
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
lb:function(a,b){var u,t=a.e
if(!(t.a||t.b||!1))return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.ih(b,t,"specular")
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
l7:function(a,b){var u,t,s
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
l9:function(a,b){var u,t=a.r,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.ig(b,t,"reflect")
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
la:function(a,b){var u,t=a.x,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.ig(b,t,"refract")
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
l1:function(a,b,c){var u,t,s,r,q,p,o=b.b
if(o<=0)return
u=b.a
t="barLight"+H.f(u)
s=A.dZ(t)
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
if(typeof u!=="number")return u.Z()
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
u=c.a+="   return "+C.a.l(q," * ")+";\n"
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
u=c.a+="      highLight = intensity*("+C.a.l(p," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.a.l(q," + ")+");\n"
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
l3:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.f(u)
s=A.dZ(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.Z()
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
c.a+="      highLight = intensity*("+C.a.l(m," + ")+");\n"}else c.a+="   highLight = "+C.a.l(m," + ")+";\n"
o.push("highLight")}r=c.a+="   return lit.color*("+C.a.l(o," + ")+");\n"
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
l8:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.f(u)
s=A.dZ(t)
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
if(typeof u!=="number")return u.Z()
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
o=c.a+="   return "+C.a.l(l," * ")+";\n"
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
r=c.a+="      highLight = intensity*("+C.a.l(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.a.l(l," + ")+");\n"
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
lc:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.f(u)
s=A.dZ(t)
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
if(typeof u!=="number")return u.Z()
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
c.a=u+"\n"}u=[P.r]
j=H.b([],u)
if(n)j.push("attenuation")
if(o)j.push("scale")
if(m)j.push("texture2D(txt2D, txtLoc).rgb")
else j.push("vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.a.l(j," * ")+";\n"
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
u=c.a+="      highLight = intensity*("+C.a.l(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.a.l(j," + ")+");\n"
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
l6:function(a,b){var u,t
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
u=b.a+="   return "+C.a.l(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
ld:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.as("")
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
A.l4(a,j)
A.l0(a,j)
A.l2(a,j)
A.l5(a,j)
A.lb(a,j)
t=a.db
if(t){r=j.a+="// === Environmental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.l9(a,j)
A.la(a,j)}A.l7(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.m)(q),++o)A.l1(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.m)(q),++o)A.l3(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.m)(q),++o)A.l8(a,q[o],j)
for(q=a.cx,p=q.length,o=0;o<q.length;q.length===p||(0,H.m)(q),++o)A.lc(a,q[o],j)
A.l6(a,j)}q=j.a+="// === Main ===\n"
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
if(0>=r.length)return H.e(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.ag(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.m)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.e(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.ag(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.m)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.e(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.ag(r,1))+"Values(norm);\n"}for(u=a.cx,t=u.length,o=0;o<u.length;u.length===t||(0,H.m)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.e(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.ag(r,1))+"Values(norm);\n"}if(a.cy<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
if(u.a||u.b||!1)n.push("emissionColor()")
u=a.r
if(u.a||u.b||!1)n.push("reflect(refl)")
u=a.x
if(u.a||u.b||!1)n.push("refract(refl)")
if(n.length<=0)n.push("vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.a.l(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
le:function(a,b){var u,t,s
if(!a.ry)return
u=b.a+="struct BendingValue\n"
u+="{\n"
b.a=u
u+="   mat4 mat;\n"
b.a=u
u+="};\n"
b.a=u
b.a=u+"uniform int bendMatCount;\n"
u=b.a+="uniform BendingValue bendValues["+a.ao+"];\n"
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
lg:function(a,b){var u
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
lf:function(a,b){var u
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
li:function(a,b){var u,t
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
lj:function(a,b){var u,t
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
lh:function(a,b){var u
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
lk:function(a,b){var u
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
dZ:function(a){if(0>=a.length)return H.e(a,0)
return a[0].toUpperCase()+C.b.ag(a,1)},
iO:function(a,b,c,d,e){var u=new A.hj(a,c,e)
u.f=d
P.km(d,0,P.v)
return u},
ca:function ca(a,b,c){this.a=a
this.b=b
this.c=c},
e5:function e5(a){this.a=a},
P:function P(a,b,c){this.a=a
this.b=b
this.c=c},
f_:function f_(a,b){var _=this
_.fw=_.ca=_.aQ=_.aD=_.ao=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.fG=_.fF=_.fE=_.bk=_.bj=_.bi=_.bh=_.bg=_.bf=_.be=_.bd=_.fD=_.cn=_.cm=_.fC=_.cl=_.ck=_.cj=_.fB=_.ci=_.cg=_.cf=_.fA=_.ce=_.cd=_.fz=_.cc=_.cb=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cb:function cb(a,b){this.a=a
this.b=b},
ci:function ci(a,b){this.a=a
this.b=b},
cI:function cI(a,b){this.a=a
this.b=b},
cP:function cP(a,b){this.a=a
this.b=b},
f2:function f2(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.ao=b3
_.aD=b4
_.aQ=b5},
bK:function bK(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
bL:function bL(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
bN:function bN(a,b,c,d,e,f,g,h,i,j){var _=this
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
bO:function bO(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cN:function cN(){},
d0:function d0(){},
ho:function ho(a){this.a=a},
aT:function aT(a,b,c){this.a=a
this.c=b
this.d=c},
hl:function hl(a,b,c){this.a=a
this.c=b
this.d=c},
hm:function hm(a,b,c){this.a=a
this.c=b
this.d=c},
hn:function hn(a,b,c){this.a=a
this.c=b
this.d=c},
hj:function hj(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
J:function J(a,b,c){this.a=a
this.c=b
this.d=c},
hk:function hk(a,b,c){this.a=a
this.c=b
this.d=c},
A:function A(a,b,c){this.a=a
this.c=b
this.d=c},
bJ:function bJ(a,b,c){this.a=a
this.c=b
this.d=c},
hp:function hp(a,b,c){this.a=a
this.c=b
this.d=c},
bM:function bM(a,b,c){this.a=a
this.c=b
this.d=c},
X:function X(a,b,c){this.a=a
this.c=b
this.d=c},
O:function O(a,b,c){this.a=a
this.c=b
this.d=c},
bd:function bd(a,b,c){this.a=a
this.c=b
this.d=c}},F={
ie:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
c0:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.x(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.x(u+a3,t+a1,s+a2)
q=new V.x(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.x(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.ie(i)
l=F.ie(h)
k=F.lU(d,a0,new F.id(j,F.ie(g),F.ie(f),l,m,c),b)
if(k!=null)a.bp(k)},
lU:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
if(a<1)return
if(b<1)return
u=F.jl()
t=H.b([],[F.be])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
o=q.c0(new V.aG(p,0,0,1),new V.ab(r,1))
c.$3(o,r,0)
t.push(o.bc(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
o=k.c0(new V.aG(j,i,h,1),new V.ab(r,m))
c.$3(o,r,n)
t.push(o.bc(d))}}u.d.eu(a+1,b+1,t)
return u},
cm:function(a,b,c){var u=new F.b5(),t=a.a
if(t==null)H.p(P.o("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.p(P.o("May not create a face with vertices attached to different shapes."))
u.ek(a)
u.el(b)
u.em(c)
u.a.a.d.b.push(u)
u.a.a.P()
return u},
jl:function(){var u=new F.fK(),t=new F.hA(u)
t.b=!1
t.c=H.b([],[F.be])
u.a=t
t=new F.fN(u)
t.b=H.b([],[F.bG])
u.b=t
t=new F.fM(u)
t.b=H.b([],[F.bx])
u.c=t
t=new F.fL(u)
t.b=H.b([],[F.b5])
u.d=t
u.e=null
return u},
jw:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.be(),r=new F.hI()
r.b=H.b([],[F.bG])
s.b=r
r=new F.hE()
u=[F.bx]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.hB()
u=[F.b5]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.jY()
s.e=0
r=$.aD()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aC().a)!==0?e:t
s.x=(u&$.aB().a)!==0?b:t
s.y=(u&$.aE().a)!==0?f:t
s.z=(u&$.aX().a)!==0?g:t
s.Q=(u&$.jZ().a)!==0?c:t
s.ch=(u&$.bm().a)!==0?i:0
s.cx=(u&$.aA().a)!==0?a:t
return s},
id:function id(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
b5:function b5(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ey:function ey(){},
fR:function fR(){},
bx:function bx(){this.b=this.a=null},
eR:function eR(){},
hi:function hi(){},
bG:function bG(){this.a=null},
fK:function fK(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fL:function fL(a){this.a=a
this.b=null},
fM:function fM(a){this.a=a
this.b=null},
fN:function fN(a){this.a=a
this.b=null},
be:function be(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hK:function hK(a){this.a=a},
hJ:function hJ(a){this.a=a},
hA:function hA(a){this.a=a
this.c=this.b=null},
hB:function hB(){this.d=this.c=this.b=null},
hC:function hC(a,b){this.a=a
this.b=b},
hD:function hD(a,b){this.a=a
this.b=b},
hE:function hE(){this.c=this.b=null},
hG:function hG(){},
hF:function hF(){},
hH:function hH(){},
fs:function fs(){},
hI:function hI(){this.b=null}},T={cU:function cU(){},cV:function cV(){},h5:function h5(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},h6:function h6(){var _=this
_.y=_.d=_.c=_.b=_.a=null},h7:function h7(a){var _=this
_.a=a
_.e=_.d=_.b=null},h8:function h8(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},N={
jG:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="testCanvas",f=null,e=V.kF("Test 039"),d=W.iA()
d.className="pageLargeCanvas"
d.id=g
e.a.appendChild(d)
u=[P.r]
e.c1(H.b(["Test of an animated texture on a square."],u))
e.c1(H.b(["\xab[Back to Tests|../]"],u))
t=document.getElementById(g)
if(t==null)H.p(P.o("Failed to find an element with the identifier, testCanvas."))
s=E.kJ(t,!0,!0,!0,!1)
r=new E.aJ()
r.a=""
r.b=!0
e=E.aJ
u=O.iB(e)
r.y=u
u.aU(r.geU(),r.geX())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.sbx(0,f)
r.saF(f)
q=F.jl()
F.c0(q,f,f,1,1,1,0,0,1)
F.c0(q,f,f,1,1,0,1,0,3)
F.c0(q,f,f,1,1,0,0,1,2)
F.c0(q,f,f,1,1,-1,0,0,0)
F.c0(q,f,f,1,1,0,-1,0,0)
F.c0(q,f,f,1,1,0,0,-1,3)
q.am()
q.eT(new F.hF(),new F.fs())
r.sbx(0,q)
u=new U.cM()
u.r=u.f=u.e=u.d=u.c=u.b=u.a=0
u.scL(0)
u.scA(0,0)
u.scF(0)
p=u.d
if(!(Math.abs(p-0.1)<$.y().a)){u.d=0.1
p=new D.D("deltaYaw",p,0.1)
p.b=!0
u.ak(p)}p=u.e
if(!(Math.abs(p-0.21)<$.y().a)){u.e=0.21
p=new D.D("deltaPitch",p,0.21)
p.b=!0
u.ak(p)}p=u.f
if(!(Math.abs(p-0.32)<$.y().a)){u.f=0.32
p=new D.D("deltaRoll",p,0.32)
p.b=!0
u.ak(p)}r.saF(u)
u=P.eV([s.f.ar("../resources/diceColor/posx.png"),s.f.ar("../resources/diceColor/posz.png"),s.f.ar("../resources/diceColor/negx.png"),s.f.ar("../resources/diceColor/negy.png"),s.f.ar("../resources/diceColor/posy.png"),s.f.ar("../resources/diceColor/negz.png")],!0,T.cV)
o=new T.h5()
o.b=o.a=0
o.e=u
P.jp(P.iC(500),new N.ir(o))
n=new O.cy()
u=O.iB(V.aj)
n.e=u
u.aU(n.gdr(),n.gdt())
u=new O.a9(n,"emission")
u.c=new A.P(!1,!1,!1)
u.f=new V.L(0,0,0)
n.f=u
u=new O.a9(n,"ambient")
u.c=new A.P(!1,!1,!1)
u.f=new V.L(0,0,0)
n.r=u
u=new O.a9(n,"diffuse")
u.c=new A.P(!1,!1,!1)
u.f=new V.L(0,0,0)
n.x=u
u=new O.a9(n,"invDiffuse")
u.c=new A.P(!1,!1,!1)
u.f=new V.L(0,0,0)
n.y=u
u=new O.f5(n,"specular")
u.c=new A.P(!1,!1,!1)
u.f=new V.L(0,0,0)
u.ch=100
n.z=u
u=new O.f1(n,"bump")
u.c=new A.P(!1,!1,!1)
n.Q=u
n.ch=null
u=new O.a9(n,"reflect")
u.c=new A.P(!1,!1,!1)
u.f=new V.L(0,0,0)
n.cx=u
u=new O.f4(n,"refract")
u.c=new A.P(!1,!1,!1)
u.f=new V.L(0,0,0)
u.ch=1
n.cy=u
u=new O.f0(n,"alpha")
u.c=new A.P(!1,!1,!1)
u.f=1
n.db=u
u=new D.cv()
u.bD(D.R)
u.e=H.b([],[D.ea])
u.f=H.b([],[D.b2])
u.r=H.b([],[D.fz])
u.x=H.b([],[D.fU])
u.z=u.y=null
u.bw(u.gdn(),u.ge1(),u.ge3())
n.dx=u
p=new O.f3()
p.b=new V.aG(0,0,0,0)
p.c=1
p.d=10
p.e=!1
n.dy=p
p=u.y
u=p==null?u.y=D.a3():p
u.n(0,n.geg())
u=n.dx
p=u.z
u=p==null?u.z=D.a3():p
u.n(0,n.gaL())
n.fr=null
u=n.dx
m=V.iP()
p=U.j7(V.jc(V.jh(),m,new V.x(1,-1,-3)))
l=new V.L(1,1,1)
k=new D.b2()
k.c=new V.L(1,1,1)
k.a=V.kL()
k.d=V.iP()
k.e=V.kK()
j=k.b
k.b=p
p.gu().n(0,k.gd1())
p=new D.D("mover",j,k.b)
p.b=!0
k.a6(p)
if(!k.c.m(0,l)){j=k.c
k.c=l
p=new D.D("color",j,l)
p.b=!0
k.a6(p)}u.n(0,k)
n.r.saz(0,new V.L(V.bi(0.2),V.bi(0.2),V.bi(0.2)))
n.x.saz(0,new V.L(V.bi(0.8),V.bi(0.8),V.bi(0.8)))
n.r.scH(o)
n.x.scH(o)
u=new M.cl()
u.a=!0
e=O.iB(e)
u.e=e
e.aU(u.gdz(),u.gdB())
u.y=u.x=u.r=u.f=null
i=X.kf(f)
h=new X.cF()
h.c=1.0471975511965976
h.d=0.1
h.e=2000
h.saF(f)
e=h.c
if(!(Math.abs(e-1.0471975511965976)<$.y().a)){h.c=1.0471975511965976
e=new D.D("fov",e,1.0471975511965976)
e.b=!0
h.ai(e)}e=h.d
if(!(Math.abs(e-0.1)<$.y().a)){h.d=0.1
e=new D.D("near",e,0.1)
e.b=!0
h.ai(e)}e=h.e
if(!(Math.abs(e-2000)<$.y().a)){h.e=2000
e=new D.D("far",e,2000)
e.b=!0
h.ai(e)}e=u.b
if(e!==h){if(e!=null)e.gu().C(0,u.ga3())
j=u.b
u.b=h
h.gu().n(0,u.ga3())
e=new D.D("camera",j,u.b)
e.b=!0
u.a7(e)}e=u.c
if(e!==i){if(e!=null)e.gu().C(0,u.ga3())
j=u.c
u.c=i
i.gu().n(0,u.ga3())
e=new D.D("target",j,u.c)
e.b=!0
u.a7(e)}u.scG(f)
u.scG(n)
u.e.n(0,r)
u.b.saF(U.j7(V.ak(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
e=s.d
if(e!==u){if(e!=null)e.gu().C(0,s.gbE())
s.d=u
u.gu().n(0,s.gbE())
s.bF()}V.lR(s)},
ir:function ir(a){this.a=a}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T,N]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.iI.prototype={}
J.a.prototype={
m:function(a,b){return a===b},
gH:function(a){return H.bH(a)},
i:function(a){return"Instance of '"+H.f(H.bI(a))+"'"}}
J.eL.prototype={
i:function(a){return String(a)},
gH:function(a){return a?519018:218159},
$iaW:1}
J.cs.prototype={
m:function(a,b){return null==b},
i:function(a){return"null"},
gH:function(a){return 0}}
J.ct.prototype={
gH:function(a){return 0},
i:function(a){return String(a)}}
J.fx.prototype={}
J.bP.prototype={}
J.aM.prototype={
i:function(a){var u=a[$.jN()]
if(u==null)return this.cV(a)
return"JavaScript function for "+H.f(J.Z(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.aL.prototype={
bs:function(a,b){if(!!a.fixed$length)H.p(P.t("removeAt"))
if(b<0||b>=a.length)throw H.c(P.cJ(b,null))
return a.splice(b,1)[0]},
C:function(a,b){var u
if(!!a.fixed$length)H.p(P.t("remove"))
for(u=0;u<a.length;++u)if(J.H(a[u],b)){a.splice(u,1)
return!0}return!1},
er:function(a,b){var u,t
if(!!a.fixed$length)H.p(P.t("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.m)(b),++t)a.push(b[t])},
B:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.c(P.bq(a))}},
l:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.f(a[u])
if(u>=s)return H.e(r,u)
r[u]=t}return r.join(b)},
eR:function(a){return this.l(a,"")},
v:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
cS:function(a,b,c){var u=a.length
if(b>u)throw H.c(P.ao(b,0,u,"start",null))
if(c==null)c=u
else if(c<b||c>u)throw H.c(P.ao(c,b,u,"end",null))
if(b===c)return H.b([],[H.az(a,0)])
return H.b(a.slice(b,c),[H.az(a,0)])},
geN:function(a){if(a.length>0)return a[0]
throw H.c(H.j8())},
gbm:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.j8())},
ax:function(a,b){if(!!a.immutable$list)H.p(P.t("sort"))
H.kI(a,b==null?J.kY():b)},
cR:function(a){return this.ax(a,null)},
O:function(a,b){var u
for(u=0;u<a.length;++u)if(J.H(a[u],b))return!0
return!1},
i:function(a){return P.iF(a,"[","]")},
gJ:function(a){return new J.a_(a,a.length)},
gH:function(a){return H.bH(a)},
gj:function(a){return a.length},
sj:function(a,b){var u="newLength"
if(!!a.fixed$length)H.p(P.t("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.ix(b,u,null))
if(b<0)throw H.c(P.ao(b,0,null,u,null))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bk(a,b))
return a[b]},
k:function(a,b,c){if(!!a.immutable$list)H.p(P.t("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bk(a,b))
a[b]=c},
$in:1,
$ik:1}
J.iH.prototype={}
J.a_.prototype={
gE:function(a){return this.d},
q:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.m(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bw.prototype={
an:function(a,b){var u
if(typeof b!=="number")throw H.c(H.ax(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gaR(b)
if(this.gaR(a)===u)return 0
if(this.gaR(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaR:function(a){return a===0?1/a<0:a<0},
fj:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.t(""+a+".toInt()"))},
bl:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.t(""+a+".floor()"))},
a1:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.t(""+a+".round()"))},
cI:function(a,b){var u
if(b>20)throw H.c(P.ao(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gaR(a))return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gH:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
cN:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
cW:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.bX(a,b)},
S:function(a,b){return(a|0)===a?a/b|0:this.bX(a,b)},
bX:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.t("Result of truncating division is "+H.f(u)+": "+H.f(a)+" ~/ "+b))},
aO:function(a,b){var u
if(a>0)u=this.eq(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
eq:function(a,b){return b>31?0:a>>>b},
$iG:1,
$ia2:1}
J.cr.prototype={$iv:1}
J.cq.prototype={}
J.b7.prototype={
bb:function(a,b){if(b<0)throw H.c(H.bk(a,b))
if(b>=a.length)H.p(H.bk(a,b))
return a.charCodeAt(b)},
aW:function(a,b){if(b>=a.length)throw H.c(H.bk(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(typeof b!=="string")throw H.c(P.ix(b,null,null))
return a+b},
bz:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.cJ(b,null))
if(b>c)throw H.c(P.cJ(b,null))
if(c>a.length)throw H.c(P.cJ(c,null))
return a.substring(b,c)},
ag:function(a,b){return this.bz(a,b,null)},
N:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.x)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
Y:function(a,b){var u=b-a.length
if(u<=0)return a
return this.N(" ",u)+a},
an:function(a,b){var u
if(typeof b!=="string")throw H.c(H.ax(b))
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
gj:function(a){return a.length},
$ir:1}
H.I.prototype={
gj:function(a){return this.a.length},
h:function(a,b){return C.b.bb(this.a,b)},
$an:function(){return[P.v]},
$aq:function(){return[P.v]},
$ak:function(){return[P.v]}}
H.n.prototype={}
H.by.prototype={
gE:function(a){return this.d},
q:function(){var u,t=this,s=t.a,r=J.dY(s),q=r.gj(s)
if(t.b!=q)throw H.c(P.bq(s))
u=t.c
if(typeof q!=="number")return H.Y(q)
if(u>=q){t.d=null
return!1}t.d=r.v(s,u);++t.c
return!0}}
H.bA.prototype={
gJ:function(a){return new H.cw(J.aY(this.a),this.b)},
gj:function(a){return J.aZ(this.a)},
v:function(a,b){return this.b.$1(J.iw(this.a,b))},
$ak:function(a,b){return[b]}}
H.et.prototype={$in:1,
$an:function(a,b){return[b]}}
H.cw.prototype={
q:function(){var u=this,t=u.b
if(t.q()){u.a=u.c.$1(t.gE(t))
return!0}u.a=null
return!1},
gE:function(a){return this.a}}
H.hN.prototype={
gJ:function(a){return new H.hO(J.aY(this.a),this.b)}}
H.hO.prototype={
q:function(){var u,t
for(u=this.a,t=this.b;u.q();)if(t.$1(u.gE(u)))return!0
return!1},
gE:function(a){var u=this.a
return u.gE(u)}}
H.cn.prototype={}
H.hs.prototype={
k:function(a,b,c){throw H.c(P.t("Cannot modify an unmodifiable list"))}}
H.d1.prototype={}
H.hg.prototype={
X:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.ft.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.f(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.eO.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.f(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.f(t.a)+")"
return s+r+"' on '"+u+"' ("+H.f(t.a)+")"}}
H.hr.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.iv.prototype={
$1:function(a){if(!!J.Q(a).$ib3)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:6}
H.dC.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bp.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.c5(t==null?"unknown":t)+"'"},
gfo:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.h2.prototype={}
H.fX.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.c5(u)+"'"}}
H.bn.prototype={
m:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bn))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gH:function(a){var u,t=this.c
if(t==null)u=H.bH(this.a)
else u=typeof t!=="object"?J.e0(t):H.bH(t)
return(u^H.bH(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.f(H.bI(u))+"'")}}
H.ed.prototype={
i:function(a){return this.a}}
H.fH.prototype={
i:function(a){return"RuntimeError: "+H.f(this.a)}}
H.C.prototype={
gj:function(a){return this.a},
gac:function(a){return new H.b9(this,[H.az(this,0)])},
gfn:function(a){var u=this,t=H.az(u,0)
return H.kn(new H.b9(u,[t]),new H.eN(u),t,H.az(u,1))},
eA:function(a,b){var u=this.b
if(u==null)return!1
return this.dg(u,b)},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.aM(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.aM(r,b)
s=t==null?null:t.b
return s}else return q.eQ(b)},
eQ:function(a){var u,t,s=this.d
if(s==null)return
u=this.bP(s,J.e0(a)&0x3ffffff)
t=this.co(u,a)
if(t<0)return
return u[t].b},
k:function(a,b,c){var u,t,s,r,q,p,o=this
if(typeof b==="string"){u=o.b
o.bI(u==null?o.b=o.b1():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.bI(t==null?o.c=o.b1():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.b1()
r=J.e0(b)&0x3ffffff
q=o.bP(s,r)
if(q==null)o.b6(s,r,[o.b2(b,c)])
else{p=o.co(q,b)
if(p>=0)q[p].b=c
else q.push(o.b2(b,c))}}},
B:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.c(P.bq(u))
t=t.c}},
bI:function(a,b,c){var u=this.aM(a,b)
if(u==null)this.b6(a,b,this.b2(b,c))
else u.b=c},
b2:function(a,b){var u=this,t=new H.eS(a,b)
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
co:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.H(a[t].a,b))return t
return-1},
i:function(a){return P.jb(this)},
aM:function(a,b){return a[b]},
bP:function(a,b){return a[b]},
b6:function(a,b,c){a[b]=c},
dj:function(a,b){delete a[b]},
dg:function(a,b){return this.aM(a,b)!=null},
b1:function(){var u="<non-identifier-key>",t=Object.create(null)
this.b6(t,u,t)
this.dj(t,u)
return t}}
H.eN.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.az(u,1),args:[H.az(u,0)]}}}
H.eS.prototype={}
H.b9.prototype={
gj:function(a){return this.a.a},
gJ:function(a){var u=this.a,t=new H.eT(u,u.r)
t.c=u.e
return t}}
H.eT.prototype={
gE:function(a){return this.d},
q:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bq(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.im.prototype={
$1:function(a){return this.a(a)},
$S:6}
H.io.prototype={
$2:function(a,b){return this.a(a,b)}}
H.ip.prototype={
$1:function(a){return this.a(a)}}
H.eM.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.bF.prototype={}
H.cA.prototype={
gj:function(a){return a.length},
$iu:1,
$au:function(){}}
H.bE.prototype={
h:function(a,b){H.ag(b,a,a.length)
return a[b]},
k:function(a,b,c){H.ag(b,a,a.length)
a[b]=c},
$in:1,
$an:function(){return[P.G]},
$aq:function(){return[P.G]},
$ik:1,
$ak:function(){return[P.G]}}
H.cB.prototype={
k:function(a,b,c){H.ag(b,a,a.length)
a[b]=c},
$in:1,
$an:function(){return[P.v]},
$aq:function(){return[P.v]},
$ik:1,
$ak:function(){return[P.v]}}
H.fm.prototype={
h:function(a,b){H.ag(b,a,a.length)
return a[b]}}
H.fn.prototype={
h:function(a,b){H.ag(b,a,a.length)
return a[b]}}
H.fo.prototype={
h:function(a,b){H.ag(b,a,a.length)
return a[b]}}
H.fp.prototype={
h:function(a,b){H.ag(b,a,a.length)
return a[b]}}
H.fq.prototype={
h:function(a,b){H.ag(b,a,a.length)
return a[b]}}
H.cC.prototype={
gj:function(a){return a.length},
h:function(a,b){H.ag(b,a,a.length)
return a[b]}}
H.fr.prototype={
gj:function(a){return a.length},
h:function(a,b){H.ag(b,a,a.length)
return a[b]}}
H.bS.prototype={}
H.bT.prototype={}
H.bU.prototype={}
H.bV.prototype={}
P.hQ.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:13}
P.hP.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.hR.prototype={
$0:function(){this.a.$0()}}
P.hS.prototype={
$0:function(){this.a.$0()}}
P.dI.prototype={
d4:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bj(new P.ia(this,b),0),a)
else throw H.c(P.t("`setTimeout()` not found."))},
d5:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bj(new P.i9(this,a,Date.now(),b),0),a)
else throw H.c(P.t("Periodic timer."))},
$icX:1}
P.ia.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.i9.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.cW(u,q)}s.c=r
t.d.$1(s)}}
P.bf.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.f(this.a)+")"}}
P.bY.prototype={
gE:function(a){var u=this.c
if(u==null)return this.b
return u.gE(u)},
q:function(){var u,t,s,r,q=this
for(;!0;){u=q.c
if(u!=null)if(u.q())return!0
else q.c=null
t=function(a,b,c){var p,o=b
while(true)try{return a(o,p)}catch(n){p=n
o=c}}(q.a,0,1)
if(t instanceof P.bf){s=t.b
if(s===2){u=q.d
if(u==null||u.length===0){q.b=null
return!1}if(0>=u.length)return H.e(u,-1)
q.a=u.pop()
continue}else{u=t.a
if(s===3)throw u
else{r=J.aY(u)
if(!!r.$ibY){u=q.d
if(u==null)u=q.d=[]
u.push(q.a)
q.a=r.a
continue}else{q.c=r
continue}}}}else{q.b=t
return!0}}return!1}}
P.i8.prototype={
gJ:function(a){return new P.bY(this.a())}}
P.d4.prototype={}
P.cS.prototype={}
P.h_.prototype={}
P.cX.prototype={}
P.ic.prototype={}
P.ii.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.cE():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u}}
P.i2.prototype={
fe:function(a){var u,t,s,r=null
try{if(C.e===$.a5){a.$0()
return}P.lm(r,r,this,a)}catch(s){u=H.e_(s)
t=H.iX(s)
P.jz(r,r,this,u,t)}},
ff:function(a,b){var u,t,s,r=null
try{if(C.e===$.a5){a.$1(b)
return}P.ln(r,r,this,a,b)}catch(s){u=H.e_(s)
t=H.iX(s)
P.jz(r,r,this,u,t)}},
fg:function(a,b){return this.ff(a,b,null)},
ew:function(a){return new P.i3(this,a)},
c5:function(a,b){return new P.i4(this,a,b)}}
P.i3.prototype={
$0:function(){return this.a.fe(this.b)}}
P.i4.prototype={
$1:function(a){return this.a.fg(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.i_.prototype={
gJ:function(a){var u=new P.dj(this,this.r)
u.c=this.e
return u},
gj:function(a){return this.a},
O:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.de(b)
return t}},
de:function(a){var u=this.d
if(u==null)return!1
return this.b_(this.bO(u,a),a)>=0},
n:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.bJ(u==null?s.b=P.iR():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.bJ(t==null?s.c=P.iR():t,b)}else return s.d7(0,b)},
d7:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.iR()
u=s.bK(b)
t=r[u]
if(t==null)r[u]=[s.aX(b)]
else{if(s.b_(t,b)>=0)return!1
t.push(s.aX(b))}return!0},
C:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.ec(this.c,b)
else return this.eb(0,b)},
eb:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.bO(r,b)
t=s.b_(u,b)
if(t<0)return!1
s.bZ(u.splice(t,1)[0])
return!0},
bJ:function(a,b){if(a[b]!=null)return!1
a[b]=this.aX(b)
return!0},
ec:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.bZ(u)
delete a[b]
return!0},
bQ:function(){this.r=1073741823&this.r+1},
aX:function(a){var u,t=this,s=new P.i0(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.bQ()
return s},
bZ:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.bQ()},
bK:function(a){return J.e0(a)&1073741823},
bO:function(a,b){return a[this.bK(b)]},
b_:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.H(a[t].a,b))return t
return-1}}
P.i0.prototype={}
P.dj.prototype={
gE:function(a){return this.d},
q:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bq(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.eJ.prototype={}
P.eU.prototype={$in:1,$ik:1}
P.q.prototype={
gJ:function(a){return new H.by(a,this.gj(a))},
v:function(a,b){return this.h(a,b)},
fl:function(a,b){var u,t,s=this,r=H.b([],[H.lF(s,a,"q",0)])
C.a.sj(r,s.gj(a))
u=0
while(!0){t=s.gj(a)
if(typeof t!=="number")return H.Y(t)
if(!(u<t))break
t=s.h(a,u)
if(u>=r.length)return H.e(r,u)
r[u]=t;++u}return r},
fk:function(a){return this.fl(a,!0)},
i:function(a){return P.iF(a,"[","]")}}
P.eY.prototype={}
P.eZ.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.f(a)
t.a=u+": "
t.a+=H.f(b)},
$S:7}
P.S.prototype={
B:function(a,b){var u,t
for(u=J.aY(this.gac(a));u.q();){t=u.gE(u)
b.$2(t,this.h(a,t))}},
gj:function(a){return J.aZ(this.gac(a))},
i:function(a){return P.jb(a)}}
P.i5.prototype={
i:function(a){return P.iF(this,"{","}")},
v:function(a,b){var u,t,s
P.jj(b,"index")
for(u=P.kS(this,this.r),t=0;u.q();){s=u.d
if(b===t)return s;++t}throw H.c(P.F(b,this,"index",null,t))},
$in:1,
$ik:1}
P.dk.prototype={}
P.ef.prototype={}
P.eh.prototype={}
P.eu.prototype={}
P.hv.prototype={}
P.hw.prototype={
eB:function(a){var u,t,s,r=P.iL(0,null,a.length)
if(typeof r!=="number")return r.R()
u=r-0
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.ib(t)
if(s.dl(a,0,r)!==r)s.c_(C.b.bb(a,r-1),0)
return new Uint8Array(t.subarray(0,H.kW(0,s.b,t.length)))}}
P.ib.prototype={
c_:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
if((b&64512)===56320){u=65536+((a&1023)<<10)|b&1023
t.b=q
if(r>=p)return H.e(s,r)
s[r]=240|u>>>18
r=t.b=q+1
if(q>=p)return H.e(s,q)
s[q]=128|u>>>12&63
q=t.b=r+1
if(r>=p)return H.e(s,r)
s[r]=128|u>>>6&63
t.b=q+1
if(q>=p)return H.e(s,q)
s[q]=128|u&63
return!0}else{t.b=q
if(r>=p)return H.e(s,r)
s[r]=224|a>>>12
r=t.b=q+1
if(q>=p)return H.e(s,q)
s[q]=128|a>>>6&63
t.b=r+1
if(r>=p)return H.e(s,r)
s[r]=128|a&63
return!1}},
dl:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.bb(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.aW(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.c_(r,C.b.aW(a,p)))s=p}else if(r<=2047){q=n.b
o=q+1
if(o>=t)break
n.b=o
if(q>=t)return H.e(u,q)
u[q]=192|r>>>6
n.b=o+1
u[o]=128|r&63}else{q=n.b
if(q+2>=t)break
o=n.b=q+1
if(q>=t)return H.e(u,q)
u[q]=224|r>>>12
q=n.b=o+1
if(o>=t)return H.e(u,o)
u[o]=128|r>>>6&63
n.b=q+1
if(q>=t)return H.e(u,q)
u[q]=128|r&63}}return s}}
P.aW.prototype={}
P.aH.prototype={
m:function(a,b){if(b==null)return!1
return b instanceof P.aH&&this.a===b.a&&!0},
an:function(a,b){return C.d.an(this.a,b.a)},
gH:function(a){var u=this.a
return(u^C.d.aO(u,30))&1073741823},
i:function(a){var u=this,t=P.kc(H.kx(u)),s=P.ch(H.kv(u)),r=P.ch(H.kr(u)),q=P.ch(H.ks(u)),p=P.ch(H.ku(u)),o=P.ch(H.kw(u)),n=P.kd(H.kt(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.G.prototype={}
P.aI.prototype={
m:function(a,b){if(b==null)return!1
return b instanceof P.aI&&this.a===b.a},
gH:function(a){return C.d.gH(this.a)},
an:function(a,b){return C.d.an(this.a,b.a)},
i:function(a){var u,t,s,r=new P.es(),q=this.a
if(q<0)return"-"+new P.aI(0-q).i(0)
u=r.$1(C.d.S(q,6e7)%60)
t=r.$1(C.d.S(q,1e6)%60)
s=new P.er().$1(q%1e6)
return""+C.d.S(q,36e8)+":"+H.f(u)+":"+H.f(t)+"."+H.f(s)}}
P.er.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.es.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.b3.prototype={}
P.cE.prototype={
i:function(a){return"Throw of null."}}
P.a6.prototype={
gaZ:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaY:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gaZ()+o+u
if(!q.a)return t
s=q.gaY()
r=P.iE(q.b)
return t+s+": "+r}}
P.bb.prototype={
gaZ:function(){return"RangeError"},
gaY:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.f(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.f(s)
else if(t>s)u=": Not in range "+H.f(s)+".."+H.f(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.f(s)}return u}}
P.eI.prototype={
gaZ:function(){return"RangeError"},
gaY:function(){var u,t=this.b
if(typeof t!=="number")return t.af()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.f(u)},
gj:function(a){return this.f}}
P.ht.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.hq.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.fW.prototype={
i:function(a){return"Bad state: "+this.a}}
P.eg.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.iE(u)+"."}}
P.fw.prototype={
i:function(a){return"Out of Memory"},
$ib3:1}
P.cQ.prototype={
i:function(a){return"Stack Overflow"},
$ib3:1}
P.em.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dc.prototype={
i:function(a){return"Exception: "+this.a}}
P.eF.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.b.bz(s,0,75)+"...":s
return t+"\n"+r}}
P.v.prototype={}
P.k.prototype={
gj:function(a){var u,t=this.gJ(this)
for(u=0;t.q();)++u
return u},
v:function(a,b){var u,t,s
P.jj(b,"index")
for(u=this.gJ(this),t=0;u.q();){s=u.gE(u)
if(b===t)return s;++t}throw H.c(P.F(b,this,"index",null,t))},
i:function(a){return P.kg(this,"(",")")}}
P.eK.prototype={}
P.aO.prototype={$in:1,$ik:1}
P.bz.prototype={}
P.aP.prototype={
gH:function(a){return P.T.prototype.gH.call(this,this)},
i:function(a){return"null"}}
P.a2.prototype={}
P.T.prototype={constructor:P.T,$iT:1,
m:function(a,b){return this===b},
gH:function(a){return H.bH(this)},
i:function(a){return"Instance of '"+H.f(H.bI(this))+"'"},
toString:function(){return this.i(this)}}
P.r.prototype={}
P.as.prototype={
gj:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.j.prototype={}
W.e1.prototype={
gj:function(a){return a.length}}
W.e3.prototype={
i:function(a){return String(a)}}
W.e4.prototype={
i:function(a){return String(a)}}
W.cc.prototype={}
W.b0.prototype={
bv:function(a,b,c){if(c!=null)return a.getContext(b,P.lw(c))
return a.getContext(b)},
cM:function(a,b){return this.bv(a,b,null)},
$ib0:1}
W.aF.prototype={
gj:function(a){return a.length}}
W.ei.prototype={
gj:function(a){return a.length}}
W.B.prototype={$iB:1}
W.br.prototype={
gj:function(a){return a.length}}
W.ej.prototype={}
W.a0.prototype={}
W.a8.prototype={}
W.ek.prototype={
gj:function(a){return a.length}}
W.el.prototype={
gj:function(a){return a.length}}
W.en.prototype={
gj:function(a){return a.length}}
W.eo.prototype={
i:function(a){return String(a)}}
W.cj.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$in:1,
$an:function(){return[[P.a4,P.a2]]},
$iu:1,
$au:function(){return[[P.a4,P.a2]]},
$aq:function(){return[[P.a4,P.a2]]},
$ik:1,
$ak:function(){return[[P.a4,P.a2]]}}
W.ck.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gau(a))+" x "+H.f(this.gaq(a))},
m:function(a,b){var u
if(b==null)return!1
u=J.Q(b)
return!!u.$ia4&&a.left===u.gcr(b)&&a.top===u.gcK(b)&&this.gau(a)===u.gau(b)&&this.gaq(a)===u.gaq(b)},
gH:function(a){return W.jx(C.c.gH(a.left),C.c.gH(a.top),C.c.gH(this.gau(a)),C.c.gH(this.gaq(a)))},
gaq:function(a){return a.height},
gcr:function(a){return a.left},
gcK:function(a){return a.top},
gau:function(a){return a.width},
$ia4:1,
$aa4:function(){return[P.a2]}}
W.ep.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$in:1,
$an:function(){return[P.r]},
$iu:1,
$au:function(){return[P.r]},
$aq:function(){return[P.r]},
$ik:1,
$ak:function(){return[P.r]}}
W.eq.prototype={
gj:function(a){return a.length}}
W.hU.prototype={
gj:function(a){return this.b.length},
h:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
k:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.e(u,b)
this.a.replaceChild(c,u[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gJ:function(a){var u=this.fk(this)
return new J.a_(u,u.length)},
$an:function(){return[W.M]},
$aq:function(){return[W.M]},
$ak:function(){return[W.M]}}
W.M.prototype={
gc6:function(a){return new W.hU(a,a.children)},
i:function(a){return a.localName},
$iM:1}
W.h.prototype={$ih:1}
W.d.prototype={
es:function(a,b,c,d){if(c!=null)this.d8(a,b,c,!1)},
d8:function(a,b,c,d){return a.addEventListener(b,H.bj(c,1),!1)}}
W.ah.prototype={$iah:1}
W.ez.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$in:1,
$an:function(){return[W.ah]},
$iu:1,
$au:function(){return[W.ah]},
$aq:function(){return[W.ah]},
$ik:1,
$ak:function(){return[W.ah]}}
W.eA.prototype={
gj:function(a){return a.length}}
W.eE.prototype={
gj:function(a){return a.length}}
W.ai.prototype={$iai:1}
W.eH.prototype={
gj:function(a){return a.length}}
W.bs.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$in:1,
$an:function(){return[W.z]},
$iu:1,
$au:function(){return[W.z]},
$aq:function(){return[W.z]},
$ik:1,
$ak:function(){return[W.z]}}
W.aK.prototype={$iaK:1,
gc7:function(a){return a.data}}
W.bt.prototype={$ibt:1}
W.b8.prototype={$ib8:1}
W.eW.prototype={
i:function(a){return String(a)}}
W.fe.prototype={
gj:function(a){return a.length}}
W.ff.prototype={
h:function(a,b){return P.ay(a.get(b))},
B:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.ay(u.value[1]))}},
gac:function(a){var u=H.b([],[P.r])
this.B(a,new W.fg(u))
return u},
gj:function(a){return a.size},
$aS:function(){return[P.r,null]}}
W.fg.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fh.prototype={
h:function(a,b){return P.ay(a.get(b))},
B:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.ay(u.value[1]))}},
gac:function(a){var u=H.b([],[P.r])
this.B(a,new W.fi(u))
return u},
gj:function(a){return a.size},
$aS:function(){return[P.r,null]}}
W.fi.prototype={
$2:function(a,b){return this.a.push(a)}}
W.al.prototype={$ial:1}
W.fj.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$in:1,
$an:function(){return[W.al]},
$iu:1,
$au:function(){return[W.al]},
$aq:function(){return[W.al]},
$ik:1,
$ak:function(){return[W.al]}}
W.aa.prototype={$iaa:1}
W.hT.prototype={
k:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.e(t,b)
u.replaceChild(c,t[b])},
gJ:function(a){var u=this.a.childNodes
return new W.co(u,u.length)},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
$an:function(){return[W.z]},
$aq:function(){return[W.z]},
$ak:function(){return[W.z]}}
W.z.prototype={
fc:function(a,b){var u,t
try{u=a.parentNode
J.k1(u,b,a)}catch(t){H.e_(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.cU(a):u},
ee:function(a,b,c){return a.replaceChild(b,c)},
$iz:1}
W.cD.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$in:1,
$an:function(){return[W.z]},
$iu:1,
$au:function(){return[W.z]},
$aq:function(){return[W.z]},
$ik:1,
$ak:function(){return[W.z]}}
W.an.prototype={$ian:1,
gj:function(a){return a.length}}
W.fy.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$in:1,
$an:function(){return[W.an]},
$iu:1,
$au:function(){return[W.an]},
$aq:function(){return[W.an]},
$ik:1,
$ak:function(){return[W.an]}}
W.fF.prototype={
h:function(a,b){return P.ay(a.get(b))},
B:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.ay(u.value[1]))}},
gac:function(a){var u=H.b([],[P.r])
this.B(a,new W.fG(u))
return u},
gj:function(a){return a.size},
$aS:function(){return[P.r,null]}}
W.fG.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fI.prototype={
gj:function(a){return a.length}}
W.ap.prototype={$iap:1}
W.fS.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$in:1,
$an:function(){return[W.ap]},
$iu:1,
$au:function(){return[W.ap]},
$aq:function(){return[W.ap]},
$ik:1,
$ak:function(){return[W.ap]}}
W.aq.prototype={$iaq:1}
W.fT.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$in:1,
$an:function(){return[W.aq]},
$iu:1,
$au:function(){return[W.aq]},
$aq:function(){return[W.aq]},
$ik:1,
$ak:function(){return[W.aq]}}
W.ar.prototype={$iar:1,
gj:function(a){return a.length}}
W.fY.prototype={
h:function(a,b){return a.getItem(b)},
B:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gac:function(a){var u=H.b([],[P.r])
this.B(a,new W.fZ(u))
return u},
gj:function(a){return a.length},
$aS:function(){return[P.r,P.r]}}
W.fZ.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ad.prototype={$iad:1}
W.at.prototype={$iat:1}
W.ae.prototype={$iae:1}
W.h3.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$in:1,
$an:function(){return[W.ae]},
$iu:1,
$au:function(){return[W.ae]},
$aq:function(){return[W.ae]},
$ik:1,
$ak:function(){return[W.ae]}}
W.h4.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$in:1,
$an:function(){return[W.at]},
$iu:1,
$au:function(){return[W.at]},
$aq:function(){return[W.at]},
$ik:1,
$ak:function(){return[W.at]}}
W.ha.prototype={
gj:function(a){return a.length}}
W.au.prototype={$iau:1}
W.bc.prototype={$ibc:1}
W.hd.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$in:1,
$an:function(){return[W.au]},
$iu:1,
$au:function(){return[W.au]},
$aq:function(){return[W.au]},
$ik:1,
$ak:function(){return[W.au]}}
W.he.prototype={
gj:function(a){return a.length}}
W.aS.prototype={}
W.hu.prototype={
i:function(a){return String(a)}}
W.hL.prototype={
gj:function(a){return a.length}}
W.aU.prototype={
geF:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.t("deltaY is not supported"))},
geE:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.t("deltaX is not supported"))},
$iaU:1}
W.bR.prototype={
ef:function(a,b){return a.requestAnimationFrame(H.bj(b,1))},
dk:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.hV.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$in:1,
$an:function(){return[W.B]},
$iu:1,
$au:function(){return[W.B]},
$aq:function(){return[W.B]},
$ik:1,
$ak:function(){return[W.B]}}
W.d7.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
m:function(a,b){var u
if(b==null)return!1
u=J.Q(b)
return!!u.$ia4&&a.left===u.gcr(b)&&a.top===u.gcK(b)&&a.width===u.gau(b)&&a.height===u.gaq(b)},
gH:function(a){return W.jx(C.c.gH(a.left),C.c.gH(a.top),C.c.gH(a.width),C.c.gH(a.height))},
gaq:function(a){return a.height},
gau:function(a){return a.width}}
W.hY.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$in:1,
$an:function(){return[W.ai]},
$iu:1,
$au:function(){return[W.ai]},
$aq:function(){return[W.ai]},
$ik:1,
$ak:function(){return[W.ai]}}
W.dq.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$in:1,
$an:function(){return[W.z]},
$iu:1,
$au:function(){return[W.z]},
$aq:function(){return[W.z]},
$ik:1,
$ak:function(){return[W.z]}}
W.i6.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$in:1,
$an:function(){return[W.ar]},
$iu:1,
$au:function(){return[W.ar]},
$aq:function(){return[W.ar]},
$ik:1,
$ak:function(){return[W.ar]}}
W.i7.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$in:1,
$an:function(){return[W.ad]},
$iu:1,
$au:function(){return[W.ad]},
$aq:function(){return[W.ad]},
$ik:1,
$ak:function(){return[W.ad]}}
W.hW.prototype={}
W.hX.prototype={
$1:function(a){return this.a.$1(a)}}
W.E.prototype={
gJ:function(a){return new W.co(a,this.gj(a))}}
W.co.prototype={
q:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.c8(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gE:function(a){return this.d}}
W.d6.prototype={}
W.d8.prototype={}
W.d9.prototype={}
W.da.prototype={}
W.db.prototype={}
W.dd.prototype={}
W.de.prototype={}
W.df.prototype={}
W.dg.prototype={}
W.dl.prototype={}
W.dm.prototype={}
W.dn.prototype={}
W.dp.prototype={}
W.dr.prototype={}
W.ds.prototype={}
W.dv.prototype={}
W.dw.prototype={}
W.dx.prototype={}
W.bW.prototype={}
W.bX.prototype={}
W.dy.prototype={}
W.dz.prototype={}
W.dD.prototype={}
W.dG.prototype={}
W.dH.prototype={}
W.bZ.prototype={}
W.c_.prototype={}
W.dJ.prototype={}
W.dK.prototype={}
W.dO.prototype={}
W.dP.prototype={}
W.dQ.prototype={}
W.dR.prototype={}
W.dS.prototype={}
W.dT.prototype={}
W.dU.prototype={}
W.dV.prototype={}
W.dW.prototype={}
W.dX.prototype={}
P.dN.prototype={$iaK:1,
gc7:function(a){return this.a}}
P.ij.prototype={
$2:function(a,b){this.a[a]=b},
$S:7}
P.eB.prototype={
gaN:function(){var u=this.b,t=H.jE(u,"q",0)
return new H.bA(new H.hN(u,new P.eC(),[t]),new P.eD(),[t,W.M])},
k:function(a,b,c){var u=this.gaN()
J.k4(u.b.$1(J.iw(u.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gj:function(a){return J.aZ(this.gaN().a)},
h:function(a,b){var u=this.gaN()
return u.b.$1(J.iw(u.a,b))},
gJ:function(a){var u=P.eV(this.gaN(),!1,W.M)
return new J.a_(u,u.length)},
$an:function(){return[W.M]},
$aq:function(){return[W.M]},
$ak:function(){return[W.M]}}
P.eC.prototype={
$1:function(a){return!!J.Q(a).$iM}}
P.eD.prototype={
$1:function(a){return H.l(a,"$iM")}}
P.i1.prototype={}
P.a4.prototype={}
P.aN.prototype={$iaN:1}
P.eQ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$in:1,
$an:function(){return[P.aN]},
$aq:function(){return[P.aN]},
$ik:1,
$ak:function(){return[P.aN]}}
P.aQ.prototype={$iaQ:1}
P.fu.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$in:1,
$an:function(){return[P.aQ]},
$aq:function(){return[P.aQ]},
$ik:1,
$ak:function(){return[P.aQ]}}
P.fA.prototype={
gj:function(a){return a.length}}
P.h0.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$in:1,
$an:function(){return[P.r]},
$aq:function(){return[P.r]},
$ik:1,
$ak:function(){return[P.r]}}
P.i.prototype={
gc6:function(a){return new P.eB(a,new W.hT(a))}}
P.aR.prototype={$iaR:1}
P.hf.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$in:1,
$an:function(){return[P.aR]},
$aq:function(){return[P.aR]},
$ik:1,
$ak:function(){return[P.aR]}}
P.dh.prototype={}
P.di.prototype={}
P.dt.prototype={}
P.du.prototype={}
P.dE.prototype={}
P.dF.prototype={}
P.dL.prototype={}
P.dM.prototype={}
P.e6.prototype={
gj:function(a){return a.length}}
P.e7.prototype={
h:function(a,b){return P.ay(a.get(b))},
B:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.ay(u.value[1]))}},
gac:function(a){var u=H.b([],[P.r])
this.B(a,new P.e8(u))
return u},
gj:function(a){return a.size},
$aS:function(){return[P.r,null]}}
P.e8.prototype={
$2:function(a,b){return this.a.push(a)}}
P.e9.prototype={
gj:function(a){return a.length}}
P.b_.prototype={}
P.fv.prototype={
gj:function(a){return a.length}}
P.d5.prototype={}
P.cL.prototype={
fh:function(a,b,c,d,e,f,g){var u,t=J.Q(g)
if(!!t.$iaK)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.lx(g))
return}if(!!t.$ibt)t=!0
else t=!1
if(t){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.k5("Incorrect number or type of arguments"))}}
P.fV.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return P.ay(a.item(b))},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$in:1,
$an:function(){return[[P.bz,,,]]},
$aq:function(){return[[P.bz,,,]]},
$ik:1,
$ak:function(){return[[P.bz,,,]]}}
P.dA.prototype={}
P.dB.prototype={}
K.e2.prototype={
as:function(a,b){return!0},
i:function(a){return"all"}}
K.cp.prototype={
as:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)if(u[s].as(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.m)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s}}
K.cx.prototype={}
K.am.prototype={
as:function(a,b){return!this.cT(0,b)},
i:function(a){return"!["+this.bA(0)+"]"}}
K.fJ.prototype={
cZ:function(a){var u,t,s,r
if(a.a.length<=0)throw H.c(P.o("May not create a Set with zero characters."))
u=P.v
t=new H.C([u,P.aW])
for(s=new H.by(a,a.gj(a));s.q();)t.k(0,s.d,!0)
r=P.eV(new H.b9(t,[u]),!0,u)
C.a.cR(r)
this.a=r},
as:function(a,b){return C.a.O(this.a,b)},
i:function(a){return P.iM(this.a)}}
L.cR.prototype={
l:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new L.d_(this.a.G(0,b))
r.a=H.b([],[K.cx])
r.c=!1
this.c.push(r)
return r},
eM:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
if(r.as(0,a))return r}return},
i:function(a){return this.b},
bY:function(){var u,t,s,r,q,p=this,o="("+p.b+")",n=p.d
if(n!=null){n=n.b
o+=" => ["+n+"]"
u=p.a
if(u.c.O(0,n))o+=" (consume)"
for(n=p.d.c,n=new H.b9(n,[H.az(n,0)]),n=n.gJ(n);n.q();){t=n.d
o+="\n"
s=p.d.c.h(0,t)
t=o+("  -- "+H.f(t)+" => ["+H.f(s)+"]")
o=u.c.O(0,s)?t+" (consume)":t}}for(n=p.c,u=n.length,r=0;r<n.length;n.length===u||(0,H.m)(n),++r){q=n[r]
o=o+"\n"+("  -- "+q.i(0))}return o.charCodeAt(0)==0?o:o}}
L.cY.prototype={
i:function(a){var u=H.jK(this.b,"\n","\\n"),t=H.jK(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
L.cZ.prototype={
i:function(a){return this.b}}
L.hb.prototype={
G:function(a,b){var u=this.a.h(0,b)
if(u==null){u=new L.cR(this,b)
u.c=H.b([],[L.d_])
this.a.k(0,b,u)}return u},
aI:function(a){var u,t=this.b.h(0,a)
if(t==null){t=new L.cZ(a)
u=P.r
t.c=new H.C([u,u])
this.b.k(0,a,t)}return t},
cJ:function(a){return this.fm(a)},
fm:function(a){var u=this
return P.l_(function(){var t=a
var s=0,r=1,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
return function $async$cJ(b,a0){if(b===1){q=a0
s=r}while(true)switch(s){case 0:g=u.d
f=[P.v]
e=H.b([],f)
d=H.b([],f)
c=H.b([],f)
p=null,o=0,n=0,m=0
case 2:if(!!0){s=3
break}if(c.length!==0)l=C.a.bs(c,0)
else{if(!t.q()){s=3
break}l=t.d}d.push(l);++o
k=g.eM(l)
s=k==null?4:6
break
case 4:if(p==null){j=P.iM(d)
throw H.c(P.o("Untokenizable string [state: "+g.b+", index "+o+']: "'+j+'"'))}if(!!d.fixed$length)H.p(P.t("removeRange"))
P.iL(0,m,d.length)
d.splice(0,m-0)
C.a.er(c,d)
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
if(g.d!=null){j=P.iM(e)
i=g.d
h=i.c.h(0,j)
p=new L.cY(h==null?i.b:h,j,o)
m=d.length
n=o}case 5:s=2
break
case 3:s=p!=null&&!u.c.O(0,p.a)?10:11
break
case 10:s=12
return p
case 12:case 11:return P.kQ()
case 1:return P.kR(q)}}},L.cY)},
i:function(a){var u,t=new P.as(""),s=this.d
if(s!=null)t.a=s.bY()+"\n"
for(s=this.a,s=s.gfn(s),s=new H.cw(J.aY(s.a),s.b);s.q();){u=s.a
if(u!=this.d)t.a+=u.bY()+"\n"}s=t.a
return s.charCodeAt(0)==0?s:s}}
L.d_.prototype={
i:function(a){return this.b.b+": "+this.bA(0)}}
O.b1.prototype={
bD:function(a){this.a=H.b([],[a])
this.c=this.b=null},
bw:function(a,b,c){this.b=b
this.c=a},
aU:function(a,b){return this.bw(a,null,b)},
e0:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
dm:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gj:function(a){return this.a.length},
gJ:function(a){var u=this.a
return new J.a_(u,u.length)},
v:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
n:function(a,b){var u,t,s=this,r=[H.jE(s,"b1",0)]
if(s.e0(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.dm(t,H.b([b],r))}},
$ik:1}
O.bC.prototype={
gj:function(a){return this.a.length},
gu:function(){var u=this.b
return u==null?this.b=D.a3():u},
ah:function(){var u=this.b
if(u!=null)u.K(null)},
gM:function(a){var u=this.a
if(u.length>0)return C.a.gbm(u)
else return V.iK()},
cC:function(a){var u=this.a
if(a==null)u.push(V.iK())
else u.push(a)
this.ah()},
br:function(){var u=this.a
if(u.length>0){u.pop()
this.ah()}}}
E.eb.prototype={}
E.aJ.prototype={
sbx:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gu().C(0,s.gcw())
u=s.c
if(u!=null)u.gu().n(0,s.gcw())
t=new D.D("shape",r,s.c)
t.b=!0
s.ad(t)}},
saF:function(a){var u,t,s=this
if(!J.H(s.r,a)){u=s.r
if(u!=null)u.gu().C(0,s.gcu())
if(a!=null)a.gu().n(0,s.gcu())
s.r=a
t=new D.D("mover",u,a)
t.b=!0
s.ad(t)}},
aT:function(a,b){var u,t,s,r,q,p,o,n=this,m=n.r
if(m!=null){u=m.r
t=b.e
if(u<t){m.r=t
u=m.y
if(u!=null)++u.d
m.scL(m.a+m.d*b.y)
m.scA(0,m.b+m.e*b.y)
m.scF(m.c+m.f*b.y)
u=m.c
s=Math.cos(u)
r=Math.sin(u)
u=V.ak(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)
t=m.b
s=Math.cos(t)
r=Math.sin(t)
u=u.N(0,V.ak(s,0,-r,0,0,1,0,0,r,0,s,0,0,0,0,1))
t=m.a
s=Math.cos(t)
r=Math.sin(t)
m.x=u.N(0,V.ak(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1))
u=m.y
if(u!=null)u.a5(0)}q=m.x}else q=null
if(!J.H(q,n.x)){p=n.x
n.x=q
o=new D.D("matrix",p,q)
o.b=!0
n.ad(o)}for(m=n.y.a,m=new J.a_(m,m.length);m.q();)m.d.aT(0,b)},
at:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)s.a.push(s.gM(s))
else s.a.push(r.N(0,s.gM(s)))
s.ah()
a.cD(t.f)
s=a.dy
u=(s&&C.a).gbm(s)
if(u!=null&&t.d!=null)u.fb(a,t)
for(s=t.y.a,s=new J.a_(s,s.length);s.q();)s.d.at(a)
a.cB()
a.dx.br()},
ad:function(a){var u=this.z
if(u!=null)u.K(a)},
P:function(){return this.ad(null)},
cz:function(a){this.e=null
this.ad(a)},
f_:function(){return this.cz(null)},
cv:function(a){this.ad(a)},
eZ:function(){return this.cv(null)},
ct:function(a){this.ad(a)},
eW:function(){return this.ct(null)},
eV:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcs(),s=[{func:1,ret:-1,args:[D.V]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.b4()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.P()},
eY:function(a,b){var u,t
for(u=b.gJ(b),t=this.gcs();u.q();)u.gE(u).gu().C(0,t)
this.P()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.fB.prototype={
cY:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.aH(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.bC()
t=[V.aj]
u.a=H.b([],t)
u.gu().n(0,new E.fC(s))
s.cy=u
u=new O.bC()
u.a=H.b([],t)
u.gu().n(0,new E.fD(s))
s.db=u
u=new O.bC()
u.a=H.b([],t)
u.gu().n(0,new E.fE(s))
s.dx=u
u=H.b([],[O.cT])
s.dy=u
u.push(null)
s.fr=new H.C([P.r,A.cN])},
gf8:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gM(s)
u=t.db
u=t.z=s.N(0,u.gM(u))
s=u}return s},
cD:function(a){var u=this.dy
u.push(a==null?(u&&C.a).gbm(u):a)},
cB:function(){var u=this.dy
if(u.length>1)u.pop()}}
E.fC.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.fD.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.fE.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.cW.prototype={
bG:function(a){this.cE()},
bF:function(){return this.bG(null)},
geO:function(){var u,t=this,s=Date.now(),r=C.d.S(P.iC(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.aH(s,!1)
return u/r},
bU:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.N()
if(typeof r!=="number")return H.Y(r)
u=C.c.bl(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.N()
t=C.c.bl(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.jo(C.f,s.gfd())}},
cE:function(){if(!this.cx){this.cx=!0
var u=window
C.p.dk(u)
C.p.ef(u,W.jA(new E.h9(this),P.a2))}},
fa:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.bU()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aH(r,!1)
s.y=P.iC(r-s.r.a).a*0.000001
r=s.cy
C.a.sj(r.a,0)
r.ah()
r=s.db
C.a.sj(r.a,0)
r.ah()
r=s.dx
C.a.sj(r.a,0)
r.ah()
r=s.dy;(r&&C.a).sj(r,0)
s.dy.push(null)
o.at(p.e)}}catch(q){u=H.e_(q)
t=H.iX(q)
P.j0("Error: "+H.f(u))
P.j0("Stack: "+H.f(t))
throw H.c(u)}}}
E.h9.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.fa()}}}
Z.d3.prototype={}
Z.cd.prototype={
ab:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.e_(s)
t=P.o('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.f(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.f(u.e)+"]"}}
Z.hM.prototype={}
Z.ce.prototype={
ap:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
ab:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].ab(a)},
aK:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
at:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.e(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.r],p=H.b([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)p.push(u[s].i(0))
r=H.b([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.Z(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(p,", ")+"\nAttrs:   "+C.a.l(r,", ")}}
Z.b6.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.f(H.bI(this.c))+"'")+"]"}}
Z.aw.prototype={
gby:function(a){var u=this.a,t=(u&$.aD().a)!==0?3:0
if((u&$.aC().a)!==0)t+=3
if((u&$.aB().a)!==0)t+=3
if((u&$.aE().a)!==0)t+=2
if((u&$.aX().a)!==0)t+=3
if((u&$.c6().a)!==0)t+=3
if((u&$.c7().a)!==0)t+=4
if((u&$.bm().a)!==0)++t
return(u&$.aA().a)!==0?t+4:t},
ev:function(a){var u,t=$.aD(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aC()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aB()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aE()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aX()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.c6()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.c7()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bm()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aA()
if((s&t.a)!==0)if(u===a)return t
return $.k_()},
m:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aw))return!1
return this.a===b.a},
i:function(a){var u=H.b([],[P.r]),t=this.a
if((t&$.aD().a)!==0)u.push("Pos")
if((t&$.aC().a)!==0)u.push("Norm")
if((t&$.aB().a)!==0)u.push("Binm")
if((t&$.aE().a)!==0)u.push("Txt2D")
if((t&$.aX().a)!==0)u.push("TxtCube")
if((t&$.c6().a)!==0)u.push("Clr3")
if((t&$.c7().a)!==0)u.push("Clr4")
if((t&$.bm().a)!==0)u.push("Weight")
if((t&$.aA().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.a.l(u,"|")}}
D.ee.prototype={}
D.b4.prototype={
n:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.V]}]):u).push(b)},
C:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.a.O(s,b)
if(s===!0){s=t.a
u=(s&&C.a).C(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.a.O(s,b)
if(s===!0){s=t.b
u=(s&&C.a).C(s,b)||u}return u},
K:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.a.B(P.eV(u,!0,{func:1,ret:-1,args:[D.V]}),new D.ew(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.V]}])
C.a.B(u,new D.ex(q))}return!0},
c8:function(){return this.K(null)},
a5:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.K(u)}}}}
D.ew.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.ex.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.V.prototype={}
D.bu.prototype={}
D.bv.prototype={}
D.D.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.f(this.d)+" => "+H.f(this.e)}}
X.cf.prototype={
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cf))return!1
if(this.a!=b.a)return!1
if(!this.b.m(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.cu.prototype={
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cu))return!1
if(this.a!=b.a)return!1
if(!this.b.m(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.eP.prototype={
f4:function(a){this.d.n(0,a.a)
return!1},
f0:function(a){this.d.C(0,a.a)
return!1}}
X.eX.prototype={
bq:function(a,b){this.r=a.a
return!1},
aH:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.cO()
if(typeof u!=="number")return u.Z()
this.r=(u&~t)>>>0
return!1},
aG:function(a,b){return!1},
f5:function(a){return!1},
dQ:function(a,b,c){return}}
X.bD.prototype={
m:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.bD))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.fk.prototype={
bq:function(a,b){this.f=a.a
return!1},
aH:function(a,b){var u=this.f,t=a.a
if(typeof t!=="number")return t.cO()
if(typeof u!=="number")return u.Z()
this.f=(u&~t)>>>0
return!1},
aG:function(a,b){return!1},
f6:function(a,b){return!1}}
X.hc.prototype={
f3:function(a){return!1},
f1:function(a){return!1},
f2:function(a){return!1}}
X.d2.prototype={
bM:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.cu(u,new X.bD(t,a.altKey,a.shiftKey))},
al:function(a){a.shiftKey},
b7:function(a){a.shiftKey},
aa:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.R()
u=t.top
if(typeof r!=="number")return r.R()
return new V.ab(s-q,r-u)},
ay:function(a){return new V.av(a.movementX,a.movementY)},
b3:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.ab])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
q=C.c.a1(r.pageX)
C.c.a1(r.pageY)
p=o.left
C.c.a1(r.pageX)
n.push(new V.ab(q-p,C.c.a1(r.pageY)-o.top))}return n},
a8:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cf(u,new X.bD(t,a.altKey,a.shiftKey))},
b0:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.R()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.R()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
dK:function(a){this.f=!0},
dw:function(a){this.f=!1},
dE:function(a){if(this.f&&this.b0(a))a.preventDefault()},
dO:function(a){var u
if(!this.f)return
u=this.bM(a)
this.b.f4(u)},
dM:function(a){var u
if(!this.f)return
u=this.bM(a)
this.b.f0(u)},
dS:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.al(a)
if(r.x){u=r.a8(a)
t=r.ay(a)
if(r.d.bq(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.a8(a)
s=r.aa(a)
if(r.c.bq(u,s))a.preventDefault()},
dW:function(a){var u,t,s,r=this
r.al(a)
u=r.a8(a)
if(r.x){t=r.ay(a)
if(r.d.aH(u,t))a.preventDefault()
return}if(r.r)return
s=r.aa(a)
if(r.c.aH(u,s))a.preventDefault()},
dI:function(a){var u,t,s,r=this
if(!r.b0(a)){r.al(a)
u=r.a8(a)
if(r.x){t=r.ay(a)
if(r.d.aH(u,t))a.preventDefault()
return}if(r.r)return
s=r.aa(a)
if(r.c.aH(u,s))a.preventDefault()}},
dU:function(a){var u,t,s,r=this
r.al(a)
u=r.a8(a)
if(r.x){t=r.ay(a)
if(r.d.aG(u,t))a.preventDefault()
return}if(r.r)return
s=r.aa(a)
if(r.c.aG(u,s))a.preventDefault()},
dG:function(a){var u,t,s,r=this
if(!r.b0(a)){r.al(a)
u=r.a8(a)
if(r.x){t=r.ay(a)
if(r.d.aG(u,t))a.preventDefault()
return}if(r.r)return
s=r.aa(a)
if(r.c.aG(u,s))a.preventDefault()}},
dY:function(a){var u,t,s=this
s.al(a)
u=new V.av((a&&C.o).geE(a),C.o.geF(a)).A(0,180)
if(s.x){if(s.d.f5(u))a.preventDefault()
return}if(s.r)return
t=s.aa(a)
if(s.c.f6(u,t))a.preventDefault()},
e_:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.a8(s.y)
t=s.aa(s.y)
s.d.dQ(u,t,r)}},
ea:function(a){var u,t=this
t.a.focus()
t.f=!0
t.b7(a)
u=t.b3(a)
if(t.e.f3(u))a.preventDefault()},
e6:function(a){var u
this.b7(a)
u=this.b3(a)
if(this.e.f1(u))a.preventDefault()},
e8:function(a){var u
this.b7(a)
u=this.b3(a)
if(this.e.f2(u))a.preventDefault()}}
D.ea.prototype={$iR:1}
D.b2.prototype={
a6:function(a){var u=this.r
if(u!=null)u.K(a)},
d2:function(){return this.a6(null)},
$iR:1}
D.R.prototype={}
D.cv.prototype={
a6:function(a){var u=this.y
if(u!=null)u.K(a)},
bS:function(a){var u=this.z
if(u!=null)u.K(a)},
dP:function(){return this.bS(null)},
e2:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.m)(a),++t){s=a[t]
if(s==null||this.df(s))return!1}return!0},
dq:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gbR(),s=[{func:1,ret:-1,args:[D.V]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q instanceof D.b2)this.f.push(q)
p=q.r
if(p==null){p=new D.b4()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}u=new D.bu()
u.b=!0
this.a6(u)},
e4:function(a,b){var u,t,s
for(u=b.gJ(b),t=this.gbR();u.q();){s=u.gE(u)
C.a.C(this.e,s)
s.gu().C(0,t)}u=new D.bv()
u.b=!0
this.a6(u)},
df:function(a){var u=C.a.O(this.f,a)
return u},
$ak:function(){return[D.R]},
$ab1:function(){return[D.R]}}
D.fz.prototype={$iR:1}
D.fU.prototype={$iR:1}
V.L.prototype={
m:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.L))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.w(this.a,3,0)+", "+V.w(this.b,3,0)+", "+V.w(this.c,3,0)+"]"}}
V.aG.prototype={
m:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aG))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.w(u.a,3,0)+", "+V.w(u.b,3,0)+", "+V.w(u.c,3,0)+", "+V.w(u.d,3,0)+"]"}}
V.ev.prototype={}
V.cz.prototype={
V:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.G])
return t},
m:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cz))return!1
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
i:function(a){var u,t,s,r,q=this,p=[P.G],o=V.bl(H.b([q.a,q.d,q.r],p),3,0),n=V.bl(H.b([q.b,q.e,q.x],p),3,0),m=V.bl(H.b([q.c,q.f,q.y],p),3,0)
p=o.length
if(0>=p)return H.e(o,0)
u="["+o[0]+", "
t=n.length
if(0>=t)return H.e(n,0)
u=u+n[0]+", "
s=m.length
if(0>=s)return H.e(m,0)
u=u+m[0]+",\n"
if(1>=p)return H.e(o,1)
r=" "+o[1]+", "
if(1>=t)return H.e(n,1)
r=r+n[1]+", "
if(1>=s)return H.e(m,1)
r=u+(r+m[1]+",\n")
if(2>=p)return H.e(o,2)
p=" "+o[2]+", "
if(2>=t)return H.e(n,2)
p=p+n[2]+", "
if(2>=s)return H.e(m,2)
return r+(p+m[2]+"]")}}
V.aj.prototype={
V:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.G])
return t},
cp:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.y().a)return V.iK()
u=1/b1
t=-n
s=-a0
return V.ak((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
N:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.ak(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
aS:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.x(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
aJ:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.W(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
m:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aj))return!1
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
i:function(a){return this.F()},
t:function(a){var u,t,s,r,q,p=this,o=[P.G],n=V.bl(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.bl(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.bl(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.bl(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
o=n.length
if(0>=o)return H.e(n,0)
u="["+n[0]+", "
t=m.length
if(0>=t)return H.e(m,0)
u=u+m[0]+", "
s=l.length
if(0>=s)return H.e(l,0)
u=u+l[0]+", "
r=k.length
if(0>=r)return H.e(k,0)
u=u+k[0]+",\n"
q=a+" "
if(1>=o)return H.e(n,1)
q=q+n[1]+", "
if(1>=t)return H.e(m,1)
q=q+m[1]+", "
if(1>=s)return H.e(l,1)
q=q+l[1]+", "
if(1>=r)return H.e(k,1)
q=u+(q+k[1]+",\n")
u=a+" "
if(2>=o)return H.e(n,2)
u=u+n[2]+", "
if(2>=t)return H.e(m,2)
u=u+m[2]+", "
if(2>=s)return H.e(l,2)
u=u+l[2]+", "
if(2>=r)return H.e(k,2)
u=q+(u+k[2]+",\n")
q=a+" "
if(3>=o)return H.e(n,3)
q=q+n[3]+", "
if(3>=t)return H.e(m,3)
q=q+m[3]+", "
if(3>=s)return H.e(l,3)
q=q+l[3]+", "
if(3>=r)return H.e(k,3)
return u+(q+k[3]+"]")},
F:function(){return this.t("")}}
V.ab.prototype={
m:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ab))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.w(this.a,3,0)+", "+V.w(this.b,3,0)+"]"}}
V.W.prototype={
R:function(a,b){return new V.W(this.a-b.a,this.b-b.b,this.c-b.c)},
m:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.W))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.w(this.a,3,0)+", "+V.w(this.b,3,0)+", "+V.w(this.c,3,0)+"]"}}
V.cH.prototype={
m:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cH))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.w(u.a,3,0)+", "+V.w(u.b,3,0)+", "+V.w(u.c,3,0)+", "+V.w(u.d,3,0)+"]"}}
V.cK.prototype={
m:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cK))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.w(u.a,3,0)+", "+V.w(u.b,3,0)+", "+V.w(u.c,3,0)+", "+V.w(u.d,3,0)+"]"}}
V.av.prototype={
bn:function(a){var u,t=this.a
if(typeof t!=="number")return t.N()
u=this.b
if(typeof u!=="number")return u.N()
return Math.sqrt(t*t+u*u)},
A:function(a,b){var u,t
if(Math.abs(b-0)<$.y().a){u=$.jt
return u==null?$.jt=new V.av(0,0):u}u=this.a
if(typeof u!=="number")return u.A()
t=this.b
if(typeof t!=="number")return t.A()
return new V.av(u/b,t/b)},
m:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.av))return!1
u=b.a
t=this.a
s=$.y()
s.toString
if(typeof u!=="number")return u.R()
if(typeof t!=="number")return H.Y(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.R()
if(typeof t!=="number")return H.Y(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.w(this.a,3,0)+", "+V.w(this.b,3,0)+"]"}}
V.x.prototype={
bn:function(a){return Math.sqrt(this.I(this))},
I:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bo:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.x(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aA:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.x(u*t-s*r,s*q-p*t,p*r-u*q)},
D:function(a,b){return new V.x(this.a+b.a,this.b+b.b,this.c+b.c)},
av:function(a){return new V.x(-this.a,-this.b,-this.c)},
A:function(a,b){if(Math.abs(b-0)<$.y().a)return V.bQ()
return new V.x(this.a/b,this.b/b,this.c/b)},
cq:function(){var u=$.y().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
m:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.x))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.w(this.a,3,0)+", "+V.w(this.b,3,0)+", "+V.w(this.c,3,0)+"]"}}
U.cg.prototype={
gu:function(){var u=this.b
return u==null?this.b=D.a3():u},
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cg))return!1
return J.H(this.a,b.a)},
i:function(a){return"Constant: "+this.a.t("          ")}}
U.fl.prototype={}
U.cM.prototype={
gu:function(){var u=this.y
return u==null?this.y=D.a3():u},
ak:function(a){var u=this.y
if(u!=null)u.K(a)},
scL:function(a){var u
a=V.j1(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.y().a)){this.a=a
u=new D.D("yaw",u,a)
u.b=!0
this.ak(u)}},
scA:function(a,b){var u
b=V.j1(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.y().a)){this.b=b
u=new D.D("pitch",u,b)
u.b=!0
this.ak(u)}},
scF:function(a){var u
a=V.j1(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.y().a)){this.c=a
u=new D.D("roll",u,a)
u.b=!0
this.ak(u)}},
m:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.cM))return!1
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
return"Rotator: ["+V.w(u.a,3,0)+", "+V.w(u.b,3,0)+", "+V.w(u.c,3,0)+"], ["+V.w(u.d,3,0)+", "+V.w(u.e,3,0)+", "+V.w(u.f,3,0)+"]"}}
M.cl.prototype={
a7:function(a){var u=this.y
if(u!=null)u.K(a)},
d3:function(){return this.a7(null)},
dA:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.ga3(),s=[{func:1,ret:-1,args:[D.V]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.b4()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bu()
u.b=!0
this.a7(u)},
dC:function(a,b){var u,t
for(u=b.gJ(b),t=this.ga3();u.q();)u.gE(u).gu().C(0,t)
u=new D.bv()
u.b=!0
this.a7(u)},
scG:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gu().C(0,t.ga3())
u=t.d
t.d=a
if(a!=null)a.gu().n(0,t.ga3())
s=new D.D("technique",u,t.d)
s.b=!0
t.a7(s)}},
gu:function(){var u=this.y
return u==null?this.y=D.a3():u},
at:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
a.cD(f.d)
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
if(typeof s!=="number")return H.Y(s)
o=C.c.a1(p*s)
p=q.b
if(typeof r!=="number")return H.Y(r)
n=C.c.a1(p*r)
p=C.c.a1(q.c*s)
a.c=p
q=C.c.a1(q.d*r)
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
i=V.ak(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.cC(i)
t=$.jf
if(t==null){t=V.jh()
q=V.iP()
p=$.ju
t=V.jc(t,q,p==null?$.ju=new V.x(0,0,-1):p)
$.jf=t
h=t}else h=t
u=u.b
if(u!=null){g=u.a
if(g!=null)h=g.N(0,h)}a.db.cC(h)
u=f.d
if(u!=null)u.aT(0,a)
for(u=f.e.a,u=new J.a_(u,u.length);u.q();)u.d.aT(0,a)
for(u=f.e.a,u=new J.a_(u,u.length);u.q();)u.d.at(a)
f.b.toString
a.cy.br()
a.db.br()
f.c.toString
a.cB()}}
A.ca.prototype={}
A.e5.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
eL:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
eG:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.P.prototype={
ga2:function(a){var u=this.a?1:0,t=this.b?2:0
return u|t|0},
i:function(a){var u=this.a?1:0,t=this.b?2:0
return""+(u|t|0)},
m:function(a,b){if(b==null)return!1
if(!(b instanceof A.P))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.f_.prototype={
cX:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
b8.z=c3
u=new P.as("")
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
A.le(c3,u)
A.lg(c3,u)
A.lf(c3,u)
A.li(c3,u)
A.lj(c3,u)
A.lh(c3,u)
A.lk(c3,u)
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
m=A.ld(b8.z)
b8.c=n
b8.d=m
b8.e=b8.bN(n,35633)
b8.f=b8.bN(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!s.getProgramParameter(b8.r,35714)){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.p(P.o("Failed to link shader: "+H.f(l)))}b8.en()
b8.ep()
b8.Q=b8.x.h(0,"posAttr")
b8.cx=b8.x.h(0,"normAttr")
b8.ch=b8.x.h(0,"binmAttr")
b8.cy=b8.x.h(0,"txt2DAttr")
b8.db=b8.x.h(0,"txtCubeAttr")
b8.dx=b8.x.h(0,"bendAttr")
if(c3.dy)b8.id=H.l(b8.y.w(0,"invViewMat"),"$iX")
if(t)b8.dy=H.l(b8.y.w(0,"objMat"),"$iX")
if(r)b8.fr=H.l(b8.y.w(0,"viewObjMat"),"$iX")
b8.fy=H.l(b8.y.w(0,"projViewObjMat"),"$iX")
if(c3.go)b8.fx=H.l(b8.y.w(0,"viewMat"),"$iX")
if(c3.x1)b8.k1=H.l(b8.y.w(0,"txt2DMat"),"$ibM")
if(c3.x2)b8.k2=H.l(b8.y.w(0,"txtCubeMat"),"$iX")
if(c3.y1)b8.k3=H.l(b8.y.w(0,"colorMat"),"$iX")
b8.r1=H.b([],[A.X])
t=c3.ao
if(t>0){b8.k4=b8.y.w(0,"bendMatCount")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.h(0,q)
if(j==null)H.p(P.o(c0+q+c1))
s.push(H.l(j,"$iX"))}}t=c3.a
if(t.a)b8.r2=H.l(b8.y.w(0,"emissionClr"),"$iA")
if(t.b)b8.rx=H.l(b8.y.w(0,"emissionTxt"),"$iO")
t=c3.b
if(t.a)b8.x1=H.l(b8.y.w(0,"ambientClr"),"$iA")
if(t.b)b8.x2=H.l(b8.y.w(0,"ambientTxt"),"$iO")
t=c3.c
if(t.a)b8.y2=H.l(b8.y.w(0,"diffuseClr"),"$iA")
if(t.b)b8.ao=H.l(b8.y.w(0,"diffuseTxt"),"$iO")
t=c3.d
if(t.a)b8.aQ=H.l(b8.y.w(0,"invDiffuseClr"),"$iA")
if(t.b)b8.ca=H.l(b8.y.w(0,"invDiffuseTxt"),"$iO")
t=c3.e
s=t.a
if(s||t.b||!1){b8.cd=H.l(b8.y.w(0,"shininess"),"$iJ")
if(s)b8.cb=H.l(b8.y.w(0,"specularClr"),"$iA")
if(t.b)b8.cc=H.l(b8.y.w(0,"specularTxt"),"$iO")}if(c3.f.b)b8.ce=H.l(b8.y.w(0,"bumpTxt"),"$iO")
if(c3.db){b8.cf=H.l(b8.y.w(0,"envSampler"),"$ibd")
t=c3.r
if(t.a)b8.cg=H.l(b8.y.w(0,"reflectClr"),"$iA")
if(t.b)b8.ci=H.l(b8.y.w(0,"reflectTxt"),"$iO")
t=c3.x
s=t.a
if(s||t.b||!1){b8.cj=H.l(b8.y.w(0,"refraction"),"$iJ")
if(s)b8.ck=H.l(b8.y.w(0,"refractClr"),"$iA")
if(t.b)b8.cl=H.l(b8.y.w(0,"refractTxt"),"$iO")}}t=c3.y
if(t.a)b8.cm=H.l(b8.y.w(0,"alpha"),"$iJ")
if(t.b)b8.cn=H.l(b8.y.w(0,"alphaTxt"),"$iO")
if(c3.k1){t=c3.z
s=t.length
if(s!==0){r=P.v
b8.bd=new H.C([r,A.aT])
b8.be=new H.C([r,[P.aO,A.bK]])
for(r=[A.bK],i=0;i<t.length;t.length===s||(0,H.m)(t),++i){h=t[i]
g=h.a
f="barLight"+H.f(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].startPnt"
j=p.h(0,o)
if(j==null)H.p(P.o(c0+o+c1))
H.l(j,"$iA")
p=b8.y
o=f+"s["+k+"].endPnt"
d=p.h(0,o)
if(d==null)H.p(P.o(c0+o+c1))
H.l(d,"$iA")
p=b8.y
o=f+"s["+k+"].color"
c=p.h(0,o)
if(c==null)H.p(P.o(c0+o+c1))
H.l(c,"$iA")
if(typeof g!=="number")return g.Z()
if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
b=p.h(0,o)
if(b==null)H.p(P.o(c0+o+c1))
H.l(b,"$iJ")
p=b8.y
o=f+"s["+k+"].att1"
a=p.h(0,o)
if(a==null)H.p(P.o(c0+o+c1))
H.l(a,"$iJ")
p=b8.y
o=f+"s["+k+"].att2"
a0=p.h(0,o)
if(a0==null)H.p(P.o(c0+o+c1))
H.l(a0,"$iJ")
a1=a0
a2=a
a3=b}else{a1=b9
a2=a1
a3=a2}e.push(new A.bK(j,d,c,a3,a2,a1))}b8.be.k(0,g,e)
q=b8.bd
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.p(P.o(c0+o+c1))
q.k(0,g,j)}}t=c3.Q
s=t.length
if(s!==0){r=P.v
b8.bf=new H.C([r,A.aT])
b8.bg=new H.C([r,[P.aO,A.bL]])
for(r=[A.bL],i=0;i<t.length;t.length===s||(0,H.m)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.f(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.Z()
p=(g&1)!==0
if(p){o=b8.y
a4=f+"s["+k+"].objUp"
j=o.h(0,a4)
if(j==null)H.p(P.o(c0+a4+c1))
H.l(j,"$iA")
o=b8.y
a4=f+"s["+k+"].objRight"
d=o.h(0,a4)
if(d==null)H.p(P.o(c0+a4+c1))
H.l(d,"$iA")
o=b8.y
a4=f+"s["+k+"].objDir"
c=o.h(0,a4)
if(c==null)H.p(P.o(c0+a4+c1))
H.l(c,"$iA")
a5=c
a6=d
a7=j}else{a5=b9
a6=a5
a7=a6}o=b8.y
a4=f+"s["+k+"].viewDir"
j=o.h(0,a4)
if(j==null)H.p(P.o(c0+a4+c1))
H.l(j,"$iA")
o=b8.y
a4=f+"s["+k+"].color"
d=o.h(0,a4)
if(d==null)H.p(P.o(c0+a4+c1))
H.l(d,"$iA")
if(p){p=b8.y
o=f+"sTexture2D"+k
c=p.h(0,o)
if(c==null)H.p(P.o(c0+o+c1))
H.l(c,"$iO")
a8=c}else a8=b9
e.push(new A.bL(a7,a6,a5,j,d,a8))}b8.bg.k(0,g,e)
q=b8.bf
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.p(P.o(c0+o+c1))
q.k(0,g,j)}}t=c3.ch
s=t.length
if(s!==0){r=P.v
b8.bh=new H.C([r,A.aT])
b8.bi=new H.C([r,[P.aO,A.bN]])
for(r=[A.bN],i=0;i<t.length;t.length===s||(0,H.m)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.f(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.h(0,o)
if(j==null)H.p(P.o(c0+o+c1))
H.l(j,"$iA")
p=b8.y
o=f+"s["+k+"].viewPnt"
d=p.h(0,o)
if(d==null)H.p(P.o(c0+o+c1))
H.l(d,"$iA")
p=b8.y
o=f+"s["+k+"].color"
c=p.h(0,o)
if(c==null)H.p(P.o(c0+o+c1))
H.l(c,"$iA")
if(typeof g!=="number")return g.Z()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
b=p.h(0,o)
if(b==null)H.p(P.o(c0+o+c1))
H.l(b,"$ibM")
a9=b}else a9=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
b=p.h(0,o)
if(b==null)H.p(P.o(c0+o+c1))
H.l(b,"$ibd")
a8=b}else a8=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
b=p.h(0,o)
if(b==null)H.p(P.o(c0+o+c1))
H.l(b,"$ibd")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a=p.h(0,o)
if(a==null)H.p(P.o(c0+o+c1))
H.l(a,"$ibJ")
b0=b
b1=a}else{b0=b9
b1=b0}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
b=p.h(0,o)
if(b==null)H.p(P.o(c0+o+c1))
H.l(b,"$iJ")
p=b8.y
o=f+"s["+k+"].att1"
a=p.h(0,o)
if(a==null)H.p(P.o(c0+o+c1))
H.l(a,"$iJ")
p=b8.y
o=f+"s["+k+"].att2"
a0=p.h(0,o)
if(a0==null)H.p(P.o(c0+o+c1))
H.l(a0,"$iJ")
a1=a0
a2=a
a3=b}else{a1=b9
a2=a1
a3=a2}e.push(new A.bN(j,d,a9,c,a8,b0,b1,a3,a2,a1))}b8.bi.k(0,g,e)
q=b8.bh
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.p(P.o(c0+o+c1))
q.k(0,g,j)}}t=c3.cx
s=t.length
if(s!==0){r=P.v
b8.bj=new H.C([r,A.aT])
b8.bk=new H.C([r,[P.aO,A.bO]])
for(r=[A.bO],i=0;i<t.length;t.length===s||(0,H.m)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.f(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.h(0,o)
if(j==null)H.p(P.o(c0+o+c1))
H.l(j,"$iA")
p=b8.y
o=f+"s["+k+"].objDir"
d=p.h(0,o)
if(d==null)H.p(P.o(c0+o+c1))
H.l(d,"$iA")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.h(0,o)
if(c==null)H.p(P.o(c0+o+c1))
H.l(c,"$iA")
p=b8.y
o=f+"s["+k+"].color"
b=p.h(0,o)
if(b==null)H.p(P.o(c0+o+c1))
H.l(b,"$iA")
if(typeof g!=="number")return g.Z()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a=p.h(0,o)
if(a==null)H.p(P.o(c0+o+c1))
H.l(a,"$iA")
p=b8.y
o=f+"s["+k+"].objRight"
a0=p.h(0,o)
if(a0==null)H.p(P.o(c0+o+c1))
H.l(a0,"$iA")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.h(0,o)
if(b2==null)H.p(P.o(c0+o+c1))
H.l(b2,"$iJ")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.h(0,o)
if(b3==null)H.p(P.o(c0+o+c1))
H.l(b3,"$iJ")
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
if(a==null)H.p(P.o(c0+a4+c1))
H.l(a,"$ibJ")
b1=a}else b1=b9
if((g&8)!==0){o=b8.y
a4=f+"s["+k+"].cutoff"
a=o.h(0,a4)
if(a==null)H.p(P.o(c0+a4+c1))
H.l(a,"$iJ")
o=b8.y
a4=f+"s["+k+"].coneAngle"
a0=o.h(0,a4)
if(a0==null)H.p(P.o(c0+a4+c1))
H.l(a0,"$iJ")
b6=a0
b7=a}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
a4=f+"s["+k+"].att0"
a=o.h(0,a4)
if(a==null)H.p(P.o(c0+a4+c1))
H.l(a,"$iJ")
o=b8.y
a4=f+"s["+k+"].att1"
a0=o.h(0,a4)
if(a0==null)H.p(P.o(c0+a4+c1))
H.l(a0,"$iJ")
o=b8.y
a4=f+"s["+k+"].att2"
b2=o.h(0,a4)
if(b2==null)H.p(P.o(c0+a4+c1))
H.l(b2,"$iJ")
a1=b2
a2=a0
a3=a}else{a1=b9
a2=a1
a3=a2}if((g&1)!==0){o=b8.y
a4=f+"sTexture2D"+k
a=o.h(0,a4)
if(a==null)H.p(P.o(c0+a4+c1))
H.l(a,"$iO")
a8=a}else a8=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a=p.h(0,o)
if(a==null)H.p(P.o(c0+o+c1))
H.l(a,"$iO")
b0=a}else b0=b9
e.push(new A.bO(j,d,c,b,a7,a6,b5,b4,b1,b7,b6,a3,a2,a1,a8,b0))}b8.bk.k(0,g,e)
q=b8.bj
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.p(P.o(c0+o+c1))
q.k(0,g,j)}}}},
a0:function(a,b){if(b!=null&&b.gT(b))a.cP(b)},
ej:function(a,b){}}
A.cb.prototype={
i:function(a){return"barLight"+H.f(this.a)}}
A.ci.prototype={
i:function(a){return"dirLight"+H.f(this.a)}}
A.cI.prototype={
i:function(a){return"pointLight"+H.f(this.a)}}
A.cP.prototype={
i:function(a){return"spotLight"+H.f(this.a)}}
A.f2.prototype={
i:function(a){return this.aD}}
A.bK.prototype={}
A.bL.prototype={}
A.bN.prototype={}
A.bO.prototype={}
A.cN.prototype={
d_:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
bN:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.o("Error compiling shader '"+H.f(s)+"': "+H.f(u)))}return s},
en:function(){var u,t,s,r=this,q=H.b([],[A.ca]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.Y(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.ca(p,t.name,s))}r.x=new A.e5(q)},
ep:function(){var u,t,s,r=this,q=H.b([],[A.d0]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.Y(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.eD(t.type,t.size,t.name,s))}r.y=new A.ho(q)},
aj:function(a,b,c){var u=this.a
if(a===1)return new A.aT(u,b,c)
else return A.iO(u,this.r,b,a,c)},
dh:function(a,b,c){var u=this.a
if(a===1)return new A.O(u,b,c)
else return A.iO(u,this.r,b,a,c)},
di:function(a,b,c){var u=this.a
if(a===1)return new A.bd(u,b,c)
else return A.iO(u,this.r,b,a,c)},
aP:function(a,b){return new P.dc(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.f(b)+"."))},
eD:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aj(b,c,d)
case 5121:return u.aj(b,c,d)
case 5122:return u.aj(b,c,d)
case 5123:return u.aj(b,c,d)
case 5124:return u.aj(b,c,d)
case 5125:return u.aj(b,c,d)
case 5126:return new A.J(u.a,c,d)
case 35664:return new A.hk(u.a,c,d)
case 35665:return new A.A(u.a,c,d)
case 35666:return new A.bJ(u.a,c,d)
case 35667:return new A.hl(u.a,c,d)
case 35668:return new A.hm(u.a,c,d)
case 35669:return new A.hn(u.a,c,d)
case 35674:return new A.hp(u.a,c,d)
case 35675:return new A.bM(u.a,c,d)
case 35676:return new A.X(u.a,c,d)
case 35678:return u.dh(b,c,d)
case 35680:return u.di(b,c,d)
case 35670:throw H.c(u.aP("BOOL",c))
case 35671:throw H.c(u.aP("BOOL_VEC2",c))
case 35672:throw H.c(u.aP("BOOL_VEC3",c))
case 35673:throw H.c(u.aP("BOOL_VEC4",c))
default:throw H.c(P.o("Unknown uniform variable type "+H.f(a)+" for "+H.f(c)+"."))}}}
A.d0.prototype={}
A.ho.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
w:function(a,b){var u=this.h(0,b)
if(u==null)throw H.c(P.o("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.F()},
F:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.m)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.aT.prototype={
i:function(a){return"Uniform1i: "+H.f(this.c)}}
A.hl.prototype={
i:function(a){return"Uniform2i: "+H.f(this.c)}}
A.hm.prototype={
i:function(a){return"Uniform3i: "+H.f(this.c)}}
A.hn.prototype={
i:function(a){return"Uniform4i: "+H.f(this.c)}}
A.hj.prototype={
i:function(a){return"Uniform1iv: "+H.f(this.c)}}
A.J.prototype={
i:function(a){return"Uniform1f: "+H.f(this.c)}}
A.hk.prototype={
i:function(a){return"Uniform2f: "+H.f(this.c)}}
A.A.prototype={
i:function(a){return"Uniform3f: "+H.f(this.c)}}
A.bJ.prototype={
i:function(a){return"Uniform4f: "+H.f(this.c)}}
A.hp.prototype={
i:function(a){return"Uniform1Mat2 "+H.f(this.c)}}
A.bM.prototype={
a_:function(a){var u=new Float32Array(H.c1(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.f(this.c)}}
A.X.prototype={
a_:function(a){var u=new Float32Array(H.c1(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.f(this.c)}}
A.O.prototype={
cP:function(a){var u=a.gT(a),t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.f(this.c)}}
A.bd.prototype={
i:function(a){return"UniformSamplerCube: "+H.f(this.c)}}
F.id.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.bo(s.b,b).bo(s.d.bo(s.c,b),c)
s=new V.W(r.a,r.b,r.c)
if(!J.H(a.f,s)){a.f=s
s=a.a
if(s!=null)s.P()}a.sfi(r.A(0,Math.sqrt(r.I(r))))
s=1-b
u=1-c
u=new V.cH(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.H(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.P()}}}
F.b5.prototype={
aB:function(){var u=this
if(!u.gaC()){C.a.C(u.a.a.d.b,u)
u.a.a.P()}u.b4()
u.b5()
u.ed()},
ek:function(a){this.a=a
a.d.b.push(this)},
el:function(a){this.b=a
a.d.c.push(this)},
em:function(a){this.c=a
a.d.d.push(this)},
b4:function(){var u=this.a
if(u!=null){C.a.C(u.d.b,this)
this.a=null}},
b5:function(){var u=this.b
if(u!=null){C.a.C(u.d.c,this)
this.b=null}},
ed:function(){var u=this.c
if(u!=null){C.a.C(u.d.d,this)
this.c=null}},
gaC:function(){return this.a==null||this.b==null||this.c==null},
da:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.bQ()
if(q!=null)s=s.D(0,q)
if(u!=null)s=s.D(0,u)
if(t!=null)s=s.D(0,t)
if(s.cq())return
return s.A(0,Math.sqrt(s.I(s)))},
dd:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.R(0,q)
r=new V.x(r.a,r.b,r.c)
s=r.A(0,Math.sqrt(r.I(r)))
r=t.R(0,q)
r=new V.x(r.a,r.b,r.c)
r=s.aA(r.A(0,Math.sqrt(r.I(r))))
return r.A(0,Math.sqrt(r.I(r)))},
ba:function(){var u,t=this
if(t.d!=null)return!0
u=t.da()
if(u==null){u=t.dd()
if(u==null)return!1}t.d=u
t.a.a.P()
return!0},
d9:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.bQ()
if(q!=null)s=s.D(0,q)
if(u!=null)s=s.D(0,u)
if(t!=null)s=s.D(0,t)
if(s.cq())return
return s.A(0,Math.sqrt(s.I(s)))},
dc:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.y().a){l=d.R(0,g)
l=new V.x(l.a,l.b,l.c)
q=l.A(0,Math.sqrt(l.I(l)))
if(s.a-t.a<0)q=q.av(0)}else{p=(l-u.b)/r
l=d.R(0,g)
l=new V.W(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).R(0,j)
l=new V.x(l.a,l.b,l.c)
q=l.A(0,Math.sqrt(l.I(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.av(0)}l=n.d
if(l!=null){o=l.A(0,Math.sqrt(l.I(l)))
l=o.aA(q)
l=l.A(0,Math.sqrt(l.I(l))).aA(o)
q=l.A(0,Math.sqrt(l.I(l)))}return q},
b8:function(){var u,t=this
if(t.e!=null)return!0
u=t.d9()
if(u==null){u=t.dc()
if(u==null)return!1}t.e=u
t.a.a.P()
return!0},
gez:function(a){var u=this
if(J.H(u.a,u.b))return!0
if(J.H(u.b,u.c))return!0
if(J.H(u.c,u.a))return!0
return!1},
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
t:function(a){var u,t,s=this
if(s.gaC())return a+"disposed"
u=a+C.b.Y(J.Z(s.a.e),0)+", "+C.b.Y(J.Z(s.b.e),0)+", "+C.b.Y(J.Z(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
F:function(){return this.t("")}}
F.ey.prototype={}
F.fR.prototype={
aE:function(a,b,c){var u,t=b.a
t.a.a.p()
t=t.e
u=c.a
u.a.a.p()
if(t==u.e){t=b.b
t.a.a.p()
t=t.e
u=c.b
u.a.a.p()
if(t==u.e){t=b.c
t.a.a.p()
t=t.e
u=c.c
u.a.a.p()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.p()
t=t.e
u=c.b
u.a.a.p()
if(t==u.e){t=b.b
t.a.a.p()
t=t.e
u=c.c
u.a.a.p()
if(t==u.e){t=b.c
t.a.a.p()
t=t.e
u=c.a
u.a.a.p()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.p()
t=t.e
u=c.c
u.a.a.p()
if(t==u.e){t=b.b
t.a.a.p()
t=t.e
u=c.a
u.a.a.p()
if(t==u.e){t=b.c
t.a.a.p()
t=t.e
u=c.b
u.a.a.p()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.bx.prototype={
aB:function(){var u=this
if(!u.gaC()){C.a.C(u.a.a.c.b,u)
u.a.a.P()}u.b4()
u.b5()},
b4:function(){var u=this.a
if(u!=null){C.a.C(u.c.b,this)
this.a=null}},
b5:function(){var u=this.b
if(u!=null){C.a.C(u.c.c,this)
this.b=null}},
gaC:function(){return this.a==null||this.b==null},
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
t:function(a){if(this.gaC())return a+"disposed"
return a+C.b.Y(J.Z(this.a.e),0)+", "+C.b.Y(J.Z(this.b.e),0)},
F:function(){return this.t("")}}
F.eR.prototype={}
F.hi.prototype={
aE:function(a,b,c){var u,t=b.a
t.a.a.p()
t=t.e
u=c.a
u.a.a.p()
if(t==u.e){t=b.b
t.a.a.p()
t=t.e
u=c.b
u.a.a.p()
return t==u.e}else{t=b.a
t.a.a.p()
t=t.e
u=c.b
u.a.a.p()
if(t==u.e){t=b.b
t.a.a.p()
t=t.e
u=c.a
u.a.a.p()
return t==u.e}else return!1}}}
F.bG.prototype={
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
t:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.Y(J.Z(u.e),0)},
F:function(){return this.t("")}}
F.fK.prototype={
gu:function(){var u=this.e
return u==null?this.e=D.a3():u},
bp:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.p()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){r=g[s]
h.a.n(0,r.eC())}h.a.p()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.p()
o=o.e
if(typeof o!=="number")return o.D()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
n=p[o]
h.b.a.a.n(0,n)
o=new F.bG()
if(n.a==null)H.p(P.o("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.K(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.p()
o=o.e
if(typeof o!=="number")return o.D()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.p()
p=p.e
if(typeof p!=="number")return p.D()
p+=u
o=o.c
if(p>=o.length)return H.e(o,p)
k=o[p]
p=h.c.a
p.a.n(0,l)
p.a.n(0,k)
p=new F.bx()
o=l.a
if(o==null)H.p(P.o("May not create a line with a start vertex which is not attached to a shape."))
if(o!=k.a)H.p(P.o("May not create a line with vertices attached to different shapes."))
p.a=l
l.c.b.push(p)
p.b=k
k.c.c.push(p)
p.a.a.c.b.push(p)
p=p.a.a.e
if(p!=null)p.K(null)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.p()
o=o.e
if(typeof o!=="number")return o.D()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.p()
p=p.e
if(typeof p!=="number")return p.D()
p+=u
o=o.c
if(p>=o.length)return H.e(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.p()
o=o.e
if(typeof o!=="number")return o.D()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
i=p[o]
o=h.d.a
o.a.n(0,l)
o.a.n(0,k)
o.a.n(0,i)
F.cm(l,k,i)}g=h.e
if(g!=null)g.a5(0)},
am:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.am()||!1
if(!t.a.am())u=!1
s=t.e
if(s!=null)s.a5(0)
return u},
eT:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.b(o.slice(0),[H.az(o,0)])
for(o=[F.be];u.length!==0;){t=C.a.geN(u)
C.a.bs(u,0)
if(t!=null){s=H.b([],o)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.e(u,r)
q=u[r]
if(q!=null&&a.aE(0,t,q)){s.push(q)
C.a.bs(u,r)}}if(s.length>1)b.bp(s)}}p.a.p()
p.c.bt()
p.d.bt()
p.b.f9()
p.c.bu(new F.hi())
p.d.bu(new F.fR())
o=p.e
if(o!=null)o.a5(0)},
ex:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.aD()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.aC().a)!==0)++s
if((t&$.aB().a)!==0)++s
if((t&$.aE().a)!==0)++s
if((t&$.aX().a)!==0)++s
if((t&$.c6().a)!==0)++s
if((t&$.c7().a)!==0)++s
if((t&$.bm().a)!==0)++s
if((t&$.aA().a)!==0)++s
r=a4.gby(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.G])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.cd])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.ev(m)
k=l.gby(l)
if(m>=t)return H.e(o,m)
o[m]=new Z.cd(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.e(i,j)
h=i[j].eS(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.e(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.c1(p)),35044)
u.bindBuffer(a1,null)
c=new Z.ce(new Z.d3(a1,d),o,a4)
c.b=H.b([],[Z.b6])
if(a0.b.b.length!==0){b=H.b([],[P.v])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.p()
b.push(t.e)}a=Z.iQ(u,34963,b)
c.b.push(new Z.b6(0,b.length,a))}if(a0.c.b.length!==0){b=H.b([],[P.v])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.p()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.e(t,m)
t=t[m].b
t.a.a.p()
b.push(t.e)}a=Z.iQ(u,34963,b)
c.b.push(new Z.b6(1,b.length,a))}if(a0.d.b.length!==0){b=H.b([],[P.v])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.p()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.e(t,m)
t=t[m].b
t.a.a.p()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.e(t,m)
t=t[m].c
t.a.a.p()
b.push(t.e)}a=Z.iQ(u,34963,b)
c.b.push(new Z.b6(4,b.length,a))}return c},
i:function(a){var u=this,t="   ",s=H.b([],[P.r])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.t(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.t(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.t(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.t(t))}return C.a.l(s,"\n")},
P:function(){var u=this.e
if(u!=null)u.K(null)}}
F.fL.prototype={
eu:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.b5])
for(u=this.a,t=b,s=0,r=!1,q=1;q<a;++q,++s,++t){for(p=r,o=1;o<b;++o,t=k){n=c.length
if(s<0||s>=n)return H.e(c,s)
m=c[s];++s
if(s>=n)return H.e(c,s)
l=c[s]
k=t+1
if(k<0||k>=n)return H.e(c,k)
j=c[k]
if(t<0||t>=n)return H.e(c,t)
i=c[t]
n=u.a
if(p){n.n(0,m)
u.a.n(0,l)
u.a.n(0,j)
h.push(F.cm(m,l,j))
u.a.n(0,m)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.cm(m,j,i))}else{n.n(0,l)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.cm(l,j,i))
u.a.n(0,l)
u.a.n(0,i)
u.a.n(0,m)
h.push(F.cm(l,i,m))}p=!p}r=!r}return h},
gj:function(a){return this.b.length},
bu:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.h(0,q)
for(o=q-1;o>=0;--o){n=r.d.h(0,o)
if(a.aE(0,p,n)){p.aB()
break}}}}},
bt:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=s.gez(s)
if(t)s.aB()}},
am:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.m)(u),++r)if(!u[r].ba())s=!1
return s},
b9:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.m)(u),++r)if(!u[r].b8())s=!1
return s},
i:function(a){return this.F()},
t:function(a){var u,t,s,r=H.b([],[P.r])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].t(a))
return C.a.l(r,"\n")},
F:function(){return this.t("")}}
F.fM.prototype={
gj:function(a){return this.b.length},
bu:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.h(0,q)
for(o=q-1;o>=0;--o){n=r.c.h(0,o)
if(a.aE(0,p,n)){p.aB()
break}}}}},
bt:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=J.H(s.a,s.b)
if(t)s.aB()}},
i:function(a){return this.F()},
t:function(a){var u,t,s=H.b([],[P.r]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.e(t,u)
s.push(t[u].t(a+(""+u+". ")))}return C.a.l(s,"\n")},
F:function(){return this.t("")}}
F.fN.prototype={
gj:function(a){return this.b.length},
f9:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.C(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.K(null)}s=t.a
if(s!=null){C.a.C(s.b.b,t)
t.a=null}}}},
i:function(a){return this.F()},
t:function(a){var u,t,s,r=H.b([],[P.r])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].t(a))
return C.a.l(r,"\n")},
F:function(){return this.t("")}}
F.be.prototype={
bc:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.jw(u.cx,r,o,t,s,q,p,a,n)},
eC:function(){return this.bc(null)},
sfi:function(a){var u
if(!J.H(this.z,a)){this.z=a
u=this.a
if(u!=null)u.P()}},
eS:function(a){var u,t,s=this
if(a.m(0,$.aD())){u=s.f
t=[P.G]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.m(0,$.aC())){u=s.r
t=[P.G]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.m(0,$.aB())){u=s.x
t=[P.G]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.m(0,$.aE())){u=s.y
t=[P.G]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.m(0,$.aX())){u=s.z
t=[P.G]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.m(0,$.c6())){u=s.Q
t=[P.G]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.m(0,$.c7())){u=s.Q
t=[P.G]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.m(0,$.bm()))return H.b([s.ch],[P.G])
else if(a.m(0,$.aA())){u=s.cx
t=[P.G]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.G])},
ba:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.bQ()
t.d.B(0,new F.hK(s))
s=s.a
t.r=s.A(0,Math.sqrt(s.I(s)))
s=t.a
if(s!=null){s.P()
s=t.a.e
if(s!=null)s.a5(0)}return!0},
b8:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.bQ()
t.d.B(0,new F.hJ(s))
s=s.a
t.x=s.A(0,Math.sqrt(s.I(s)))
s=t.a
if(s!=null){s.P()
s=t.a.e
if(s!=null)s.a5(0)}return!0},
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
t:function(a){var u,t,s=this,r="-",q=H.b([],[P.r])
q.push(C.b.Y(J.Z(s.e),0))
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
q.push(V.w(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.i(0))
else q.push(r)
t=C.a.l(q,", ")
return a+"{"+t+"}"},
F:function(){return this.t("")}}
F.hK.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.D(0,t)}}}
F.hJ.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.D(0,t)}}}
F.hA.prototype={
p:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.e(u,r)
u[r].e=s;++s}this.b=!1}},
n:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.o("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.P()
return!0},
c0:function(a,b){var u=null,t=F.jw(u,u,a,u,u,b,u,u,0)
this.n(0,t)
return t},
gj:function(a){return this.c.length},
am:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)u[s].ba()
return!0},
b9:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)u[s].b8()
return!0},
ey:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.A(0,Math.sqrt(p*p+o*o+n*n))
if(!J.H(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.K(null)}}}}return!0},
i:function(a){return this.F()},
t:function(a){var u,t,s,r
this.p()
u=H.b([],[P.r])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r)u.push(t[r].t(a))
return C.a.l(u,"\n")},
F:function(){return this.t("")}}
F.hB.prototype={
gj:function(a){return this.b.length+this.c.length+this.d.length},
h:function(a,b){var u,t=this.b,s=t.length
if(b<s){if(b<0)return H.e(t,b)
return t[b]}b-=s
t=this.c
u=t.length
if(b<u){if(b<0)return H.e(t,b)
return t[b]}b-=u
t=this.d
if(b<0||b>=t.length)return H.e(t,b)
return t[b]},
B:function(a,b){var u=this
C.a.B(u.b,b)
C.a.B(u.c,new F.hC(u,b))
C.a.B(u.d,new F.hD(u,b))},
i:function(a){return this.F()},
F:function(){var u,t,s,r=H.b([],[P.r])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].t(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].t(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].t(""))
return C.a.l(r,"\n")}}
F.hC.prototype={
$1:function(a){if(!J.H(a.a,this.a))this.b.$1(a)}}
F.hD.prototype={
$1:function(a){var u=this.a
if(!J.H(a.a,u)&&!J.H(a.b,u))this.b.$1(a)}}
F.hE.prototype={
gj:function(a){return this.b.length+this.c.length},
h:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.e(t,u)
return t[u]}else{if(b<0)return H.e(t,b)
return t[b]}},
i:function(a){return this.F()},
F:function(){var u,t,s,r=H.b([],[P.r])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].t(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].t(""))
return C.a.l(r,"\n")}}
F.hG.prototype={}
F.hF.prototype={
aE:function(a,b,c){return J.H(b.f,c.f)}}
F.hH.prototype={}
F.fs.prototype={
bp:function(a){var u,t,s,r,q,p,o,n,m=V.bQ()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null)m=new V.x(m.a+s.a,m.b+s.b,m.c+s.c)}m=m.A(0,Math.sqrt(m.I(m)))
for(u=a.length,s=m==null,t=0;t<a.length;a.length===u||(0,H.m)(a),++t){r=a[t]
if(s)q=null
else{p=m.a
o=m.b
n=m.c
q=m.A(0,Math.sqrt(p*p+o*o+n*n))}if(!J.H(r.r,q)){r.r=q
p=r.a
if(p!=null){p=p.e
if(p!=null)p.K(null)}}}return}}
F.hI.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.F()},
F:function(){var u,t,s,r=H.b([],[P.r])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].t(""))
return C.a.l(r,"\n")}}
O.cy.prototype={
gu:function(){var u=this.fr
return u==null?this.fr=D.a3():u},
L:function(a){var u=this.fr
if(u!=null)u.K(a)},
aV:function(){return this.L(null)},
bT:function(a){this.a=null
this.L(a)},
eh:function(){return this.bT(null)},
ds:function(a,b){var u=new D.bu()
u.b=!0
this.L(u)},
du:function(a,b){var u=new D.bv()
u.b=!0
this.L(u)},
bL:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=P.v
f=[f,f]
u=new H.C(f)
for(t=g.dx.e,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){q=t[r]
p=q.ga4()
o=u.h(0,q.ga4())
u.k(0,p,o==null?1:o)}n=H.b([],[A.cb])
u.B(0,new O.f6(g,n))
C.a.ax(n,new O.f7())
m=new H.C(f)
for(t=g.dx.f,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){p=m.h(0,0)
m.k(0,0,p==null?1:p)}l=H.b([],[A.ci])
m.B(0,new O.f8(g,l))
C.a.ax(l,new O.f9())
k=new H.C(f)
for(t=g.dx.r,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){q=t[r]
p=q.ga4()
o=k.h(0,q.ga4())
k.k(0,p,o==null?1:o)}j=H.b([],[A.cI])
k.B(0,new O.fa(g,j))
C.a.ax(j,new O.fb())
i=new H.C(f)
for(f=g.dx.x,t=f.length,r=0;r<f.length;f.length===t||(0,H.m)(f),++r){q=f[r]
s=q.ga4()
p=i.h(0,q.ga4())
i.k(0,s,p==null?1:p)}h=H.b([],[A.cP])
i.B(0,new O.fc(g,h))
C.a.ax(h,new O.fd())
f=C.d.S(g.e.a.length+3,4)
g.dy.e
return A.kp(!1,!1,!1,!1,f*4,g.f.c,g.r.c,g.x.c,g.y.c,g.z.c,g.Q.c,g.cx.c,g.cy.c,g.db.c,n,l,j,h)},
W:function(a,b){if(b!=null)if(!C.a.O(a,b)){b.a=a.length
a.push(b)}},
aT:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.a_(u,u.length);u.q();){t=u.d
t.toString
s=$.hz
if(s==null)s=$.hz=new V.x(0,0,1)
t.a=s
r=$.hy
t.d=r==null?$.hy=new V.x(0,1,0):r
r=$.hx
t.e=r==null?$.hx=new V.x(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.aS(s)
r=s.a
p=s.b
o=s.c
t.a=s.A(0,Math.sqrt(r*r+p*p+o*o))
o=q.aS(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.A(0,Math.sqrt(p*p+r*r+s*s))
s=q.aS(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.A(0,Math.sqrt(r*r+p*p+o*o))}}}},
fb:function(b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.bL()
u=b4.fr.h(0,b3.aD)
if(u==null){u=A.ko(b3,b4.a)
t=u.b
if(t.length===0)H.p(P.o("May not cache a shader with no name."))
if(b4.fr.eA(0,t))H.p(P.o('Shader cache already contains a shader by the name "'+t+'".'))
b4.fr.k(0,t,u)}b3=b2.a=u
b5.e=null}s=b3.z
r=s.aQ
b3=b5.e
if(!(b3 instanceof Z.ce))b3=b5.e=null
if(b3==null||!b3.d.m(0,r)){b3=s.k4
if(b3)b5.d.am()
q=s.r1
if(q){p=b5.d
o=p.e
if(o!=null)++o.d
p.d.b9()
p.a.b9()
p=p.e
if(p!=null)p.a5(0)}p=s.rx
if(p){o=b5.d
n=o.e
if(n!=null)++n.d
o.a.ey()
o=o.e
if(o!=null)o.a5(0)}m=b5.d.ex(new Z.hM(b4.a),r)
m.ap($.aD()).e=b2.a.Q.c
if(b3)m.ap($.aC()).e=b2.a.cx.c
if(q)m.ap($.aB()).e=b2.a.ch.c
if(s.r2)m.ap($.aE()).e=b2.a.cy.c
if(p)m.ap($.aX()).e=b2.a.db.c
if(s.ry)m.ap($.aA()).e=b2.a.dx.c
b5.e=m}l=H.b([],[T.cU])
b3=b2.a
q=b4.a
q.useProgram(b3.r)
b3.x.eL()
if(s.fr){b3=b2.a
p=b4.dx
p=p.gM(p)
b3=b3.dy
b3.toString
b3.a_(p.V(0,!0))}if(s.fx){b3=b2.a
p=b4.cx
if(p==null){p=b4.db
p=p.gM(p)
o=b4.dx
o=b4.cx=p.N(0,o.gM(o))
p=o}b3=b3.fr
b3.toString
b3.a_(p.V(0,!0))}b3=b2.a
p=b4.ch
if(p==null){p=b4.gf8()
o=b4.dx
o=b4.ch=p.N(0,o.gM(o))
p=o}b3=b3.fy
b3.toString
b3.a_(p.V(0,!0))
if(s.go){b3=b2.a
p=b4.db
p=p.gM(p)
b3=b3.fx
b3.toString
b3.a_(p.V(0,!0))}if(s.x1){b3=b2.a
p=b2.b
b3=b3.k1
b3.toString
b3.a_(C.h.V(p,!0))}if(s.x2){b3=b2.a
p=b2.c
b3=b3.k2
b3.toString
b3.a_(C.h.V(p,!0))}if(s.y1){b3=b2.a
p=b2.d
b3=b3.k3
b3.toString
b3.a_(C.h.V(p,!0))}if(s.ao>0){k=b2.e.a.length
b3=b2.a.k4
b3.a.uniform1i(b3.d,k)
for(j=0;j<k;++j){b3=b2.a
p=b2.e.a
if(j>=p.length)return H.e(p,j)
p=p[j]
b3=b3.r1
if(j>=b3.length)return H.e(b3,j)
b3=b3[j]
i=new Float32Array(H.c1(p.V(0,!0)))
b3.a.uniformMatrix4fv(b3.d,!1,i)}}b3=s.a
if(b3.a){p=b2.a
o=b2.f.f
p=p.r2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.W(l,b2.f.d)
b3=b2.a
p=b2.f.d
b3.a0(b3.rx,p)}if(s.k1){b3=s.b
if(b3.a){p=b2.a
o=b2.r.f
p=p.x1
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.W(l,b2.r.d)
b3=b2.a
p=b2.r.d
b3.a0(b3.x2,p)}b3=s.c
if(b3.a){p=b2.a
o=b2.x.f
p=p.y2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.W(l,b2.x.d)
b3=b2.a
p=b2.x.d
b3.a0(b3.ao,p)}b3=s.d
if(b3.a){p=b2.a
o=b2.y.f
p=p.aQ
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.W(l,b2.y.d)
b3=b2.a
p=b2.y.d
b3.a0(b3.ca,p)}b3=s.e
p=b3.a
if(p||b3.b||!1){o=b2.a
n=b2.z.ch
o=o.cd
o.a.uniform1f(o.d,n)}if(p){p=b2.a
o=b2.z.f
p=p.cb
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.W(l,b2.z.d)
b3=b2.a
p=b2.z.d
b3.a0(b3.cc,p)}b3=s.z
if(b3.length>0){p=P.v
h=new H.C([p,p])
for(p=b2.dx.e,o=p.length,g=0;g<p.length;p.length===o||(0,H.m)(p),++g){f=p[g]
e=f.ga4()
d=h.h(0,e)
if(d==null)d=0
h.k(0,e,d+1)
c=J.c8(b2.a.be.h(0,e),d)
n=f.gfp()
b=$.ac
n=n.aJ(b==null?$.ac=new V.W(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gfv()
b=$.ac
n=n.aJ(b==null?$.ac=new V.W(0,0,0):b)
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gaz(f)
b=c.d
b.a.uniform3f(b.d,n.a,n.b,n.c)
if(f.gc9()){n=f.gc2()
b=c.e
b.a.uniform1f(b.d,n)
n=f.gc3()
b=c.f
b.a.uniform1f(b.d,n)
n=f.gc4()
b=c.r
b.a.uniform1f(b.d,n)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.m)(b3),++g){o=b3[g].a
k=h.h(0,o)
if(k==null)k=0
o=b2.a.bd.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.Q
if(b3.length>0){p=b4.db
a=p.gM(p)
p=P.v
a0=new H.C([p,p])
for(p=b2.dx.f,o=p.length,g=0;g<p.length;p.length===o||(0,H.m)(p),++g){f=p[g]
d=a0.h(0,0)
if(d==null)d=0
a0.k(0,0,d+1)
c=J.c8(b2.a.bg.h(0,0),d)
n=a.aS(f.a)
b=n.a
a1=n.b
a2=n.c
a2=n.A(0,Math.sqrt(b*b+a1*a1+a2*a2))
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
o=b2.a.bf.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.ch
if(b3.length>0){p=b4.db
a=p.gM(p)
p=P.v
a3=new H.C([p,p])
for(p=b2.dx.r,o=p.length,g=0;g<p.length;p.length===o||(0,H.m)(p),++g){f=p[g]
e=f.ga4()
d=a3.h(0,e)
if(d==null)d=0
a3.k(0,e,d+1)
c=J.c8(b2.a.bi.h(0,e),d)
a4=a.N(0,f.gM(f))
n=f.gM(f)
b=$.ac
n=n.aJ(b==null?$.ac=new V.W(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=$.ac
n=a4.aJ(n==null?$.ac=new V.W(0,0,0):n)
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gaz(f)
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
f.gae()
n=a4.cp(0)
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
i=new Float32Array(H.c1(new V.cz(b,a1,a2,a5,a6,a7,a8,a9,n).V(0,!0)))
b0.a.uniformMatrix3fv(b0.d,!1,i)
f.gae()
n=f.gae()
if(!C.a.O(l,n)){n.a=l.length
l.push(n)}n=f.gae()
b=n.gT(n)
if(b){b=c.f
b.toString
a1=n.gT(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.geP(n)
b.a.uniform1i(b.d,n)}}f.gaw()
n=f.gcQ()
b=c.x
b.toString
a1=n.geI(n)
a2=n.geJ(n)
a5=n.geK()
n=n.geH()
b.a.uniform4f(b.d,a1,a2,a5,n)
n=f.gaw()
if(!C.a.O(l,n)){n.a=l.length
l.push(n)}n=f.gaw()
b=n.gT(n)
if(b){b=c.r
b.toString
a1=n.gT(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.geP(n)
b.a.uniform1i(b.d,n)}}if(f.gc9()){n=f.gc2()
b=c.y
b.a.uniform1f(b.d,n)
n=f.gc3()
b=c.z
b.a.uniform1f(b.d,n)
n=f.gc4()
b=c.Q
b.a.uniform1f(b.d,n)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.m)(b3),++g){o=b3[g].a
k=a3.h(0,o)
if(k==null)k=0
o=b2.a.bh.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.cx
if(b3.length>0){p=b4.db
a=p.gM(p)
p=P.v
b1=new H.C([p,p])
for(p=b2.dx.x,o=p.length,g=0;g<p.length;p.length===o||(0,H.m)(p),++g){f=p[g]
e=f.ga4()
d=b1.h(0,e)
if(d==null)d=0
b1.k(0,e,d+1)
c=J.c8(b2.a.bk.h(0,e),d)
n=f.gf7(f)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gft(f).fH()
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=a.aJ(f.gf7(f))
b=c.d
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gaz(f)
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
f.gae()
n=f.gfL()
b=c.f
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gfI(f)
b=c.r
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gfJ()
b=c.x
b.a.uniform1f(b.d,n)
n=f.gfK()
b=c.y
b.a.uniform1f(b.d,n)
f.gae()
n=f.gae()
if(!C.a.O(l,n)){n.a=l.length
l.push(n)}n=f.gae()
b=n.gT(n)
if(b){b=c.dx
b.toString
a1=n.gT(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.a
b.a.uniform1i(b.d,n)}}f.gaw()
n=f.gcQ()
b=c.z
b.toString
a1=n.geI(n)
a2=n.geJ(n)
a5=n.geK()
n=n.geH()
b.a.uniform4f(b.d,a1,a2,a5,n)
n=f.gaw()
if(!C.a.O(l,n)){n.a=l.length
l.push(n)}n=f.gaw()
b=n.gT(n)
if(b){b=c.dy
b.toString
a1=n.gT(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.a
b.a.uniform1i(b.d,n)}}if(f.gfu()){n=f.gfs()
b=c.Q
b.a.uniform1f(b.d,n)
n=f.gfq()
b=c.ch
b.a.uniform1f(b.d,n)}if(f.gc9()){n=f.gc2()
b=c.cx
b.a.uniform1f(b.d,n)
n=f.gc3()
b=c.cy
b.a.uniform1f(b.d,n)
n=f.gc4()
b=c.db
b.a.uniform1f(b.d,n)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.m)(b3),++g){o=b3[g].a
k=b1.h(0,o)
if(k==null)k=0
o=b2.a.bj.h(0,o)
o.a.uniform1i(o.d,k)}}}if(s.f.b){b2.W(l,b2.Q.d)
b3=b2.a
p=b2.Q.d
b3.a0(b3.ce,p)}if(s.dy){b3=b2.a
p=b4.Q
if(p==null){p=b4.db
p=b4.Q=p.gM(p).cp(0)}b3=b3.id
b3.toString
b3.a_(p.V(0,!0))}if(s.db){b2.W(l,b2.ch)
b3=b2.a
p=b2.ch
b3.ej(b3.cf,p)
b3=s.r
if(b3.a){p=b2.a
o=b2.cx.f
p=p.cg
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.W(l,b2.cx.d)
b3=b2.a
p=b2.cx.d
b3.a0(b3.ci,p)}b3=s.x
p=b3.a
if(p||b3.b||!1){o=b2.a
n=b2.cy.ch
o=o.cj
o.a.uniform1f(o.d,n)}if(p){p=b2.a
o=b2.cy.f
p=p.ck
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.W(l,b2.cy.d)
b3=b2.a
p=b2.cy.d
b3.a0(b3.cl,p)}}b3=s.y
p=b3.a
o=!p
if(!o||b3.b||!1){if(p){p=b2.a
n=b2.db.f
p=p.cm
p.a.uniform1f(p.d,n)}if(b3.b){b2.W(l,b2.db.d)
p=b2.a
n=b2.db.d
p.a0(p.cn,n)}q.enable(3042)
q.blendFunc(770,771)}for(j=0;j<l.length;++j){p=l[j]
if(p.d==null){p=p.d=p.c
if(p!=null)p.ab(b4)}}p=b5.e
p.ab(b4)
p.at(b4)
p.aK(b4)
if(!o||b3.b||!1)q.disable(3042)
for(j=0;j<l.length;++j){b3=l[j]
p=b3.d
if(p!=null){p.aK(b4)
b3.d=null}}b3=b2.a
b3.toString
q.useProgram(null)
b3.x.eG()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.bL().aD}}
O.f6.prototype={
$2:function(a,b){if(typeof b!=="number")return b.D()
return this.b.push(new A.cb(a,C.d.S(b+3,4)*4))}}
O.f7.prototype={
$2:function(a,b){return J.c9(a.a,b.a)}}
O.f8.prototype={
$2:function(a,b){if(typeof b!=="number")return b.D()
return this.b.push(new A.ci(a,C.d.S(b+3,4)*4))}}
O.f9.prototype={
$2:function(a,b){return J.c9(a.a,b.a)}}
O.fa.prototype={
$2:function(a,b){if(typeof b!=="number")return b.D()
return this.b.push(new A.cI(a,C.d.S(b+3,4)*4))}}
O.fb.prototype={
$2:function(a,b){return J.c9(a.a,b.a)}}
O.fc.prototype={
$2:function(a,b){if(typeof b!=="number")return b.D()
return this.b.push(new A.cP(a,C.d.S(b+3,4)*4))}}
O.fd.prototype={
$2:function(a,b){return J.c9(a.a,b.a)}}
O.f0.prototype={
a9:function(){var u,t=this
t.bB()
u=t.f
if(!(Math.abs(u-1)<$.y().a)){t.f=1
u=new D.D(t.b,u,1)
u.b=!0
t.a.L(u)}}}
O.bB.prototype={
L:function(a){return this.a.L(a)},
aV:function(){return this.L(null)},
a9:function(){},
bW:function(a){var u,t,s=this
if(!s.c.m(0,a)){u=s.c
if(u.a||u.b||!1)t=!(a.a||a.b||!1)
else t=!0
s.c=a
if(t)s.a9()
u=s.a
u.a=null
u.L(null)}},
scH:function(a){var u,t=this,s=t.c
if(!s.b)t.bW(new A.P(s.a,!0,!1))
s=t.d
if(s!==a){if(s!=null)s.gu().C(0,t.gaL())
u=t.d
t.d=a
a.gu().n(0,t.gaL())
s=new D.D(t.b+".texture2D",u,t.d)
s.b=!0
t.a.L(s)}}}
O.f1.prototype={}
O.a9.prototype={
bV:function(a){var u,t,s=this
if(!s.f.m(0,a)){u=s.f
s.f=a
t=new D.D(s.b+".color",u,a)
t.b=!0
s.a.L(t)}},
a9:function(){this.bB()
this.bV(new V.L(1,1,1))},
saz:function(a,b){this.bW(new A.P(!0,this.c.b,!1))
this.bV(b)}}
O.f3.prototype={}
O.f4.prototype={
a9:function(){var u,t=this
t.bC()
u=t.ch
if(!(Math.abs(u-1)<$.y().a)){t.ch=1
u=new D.D(t.b+".refraction",u,1)
u.b=!0
t.a.L(u)}}}
O.f5.prototype={
a9:function(){var u,t=this
t.bC()
u=t.ch
if(!(Math.abs(u-100)<$.y().a)){t.ch=100
u=new D.D(t.b+".shininess",u,100)
u.b=!0
t.a.L(u)}}}
O.cT.prototype={}
T.cU.prototype={}
T.cV.prototype={}
T.h5.prototype={
gT:function(a){var u=this.d
u=u==null?null:u.gT(u)
if(u==null){u=this.c
u=u==null?null:u.gT(u)}return u===!0},
gu:function(){var u=this.f
return u==null?this.f=D.a3():u},
ab:function(a){var u
if(this.d==null){u=this.d=this.c
if(u!=null)u.ab(a)}},
aK:function(a){var u=this.d
if(u!=null){u.aK(a)
this.d=null}}}
T.h6.prototype={
gT:function(a){return this.d},
ab:function(a){var u,t=this
if(!t.c&&t.d){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(3553,t.b)}},
aK:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(3553,null)}}}
T.h7.prototype={
ar:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=document.createElement("img")
u.src=a
t=new T.h6()
t.a=0
t.b=q
t.d=t.c=!1
W.K(u,"load",new T.h8(this,t,u,!1,q,!1,!1),!1)
return t},
ei:function(a,b,c){var u,t,s,r
b=V.j_(b)
u=V.j_(a.width)
t=V.j_(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.iA()
s.width=u
s.height=t
r=C.m.cM(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.ly(r.getImageData(0,0,s.width,s.height))}}}
T.h8.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.ei(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.E.fh(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.c8()}++s.e}}
X.iz.prototype={}
X.eG.prototype={
gu:function(){var u=this.x
return u==null?this.x=D.a3():u}}
X.cF.prototype={
gu:function(){var u=this.f
return u==null?this.f=D.a3():u},
ai:function(a){var u=this.f
if(u!=null)u.K(a)},
d6:function(){return this.ai(null)},
saF:function(a){var u,t,s=this
if(!J.H(s.b,a)){u=s.b
if(u!=null)u.gu().C(0,s.gbH())
t=s.b
s.b=a
if(a!=null)a.gu().n(0,s.gbH())
u=new D.D("mover",t,s.b)
u.b=!0
s.ai(u)}}}
X.h1.prototype={}
V.it.prototype={
$1:function(a){var u=C.c.cI(this.a.geO(),2)
if(u!=="0.00")P.j0(u+" fps")}}
V.fO.prototype={
d0:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.K(q,"scroll",new V.fQ(o),!1)},
c1:function(a){var u,t,s,r,q,p,o,n
this.eo()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b,r=C.a.eR(a),s.toString,r=new H.I(r),r=new P.bY(s.cJ(new H.by(r,r.gj(r))).a());r.q();){s=r.gE(r)
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
if(H.lS(s,"|",0)){p=s.split("|")
o=u.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.e(p,1)
o.href=p[1]
o.textContent=p[0]
t.appendChild(o)}else{n=P.kV(C.D,s,C.l,!1)
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
eo:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new L.hb()
t=P.r
u.a=new H.C([t,L.cR])
u.b=new H.C([t,L.cZ])
u.c=P.ja(t)
u.d=u.G(0,q)
t=u.G(0,q).l(0,p)
s=K.N(new H.I("*"))
t.a.push(s)
t.c=!0
t=u.G(0,p).l(0,p)
s=new K.am()
r=[K.cx]
s.a=H.b([],r)
t.a.push(s)
t=K.N(new H.I("*"))
s.a.push(t)
t=u.G(0,p).l(0,"BoldEnd")
s=K.N(new H.I("*"))
t.a.push(s)
t.c=!0
t=u.G(0,q).l(0,o)
s=K.N(new H.I("_"))
t.a.push(s)
t.c=!0
t=u.G(0,o).l(0,o)
s=new K.am()
s.a=H.b([],r)
t.a.push(s)
t=K.N(new H.I("_"))
s.a.push(t)
t=u.G(0,o).l(0,n)
s=K.N(new H.I("_"))
t.a.push(s)
t.c=!0
t=u.G(0,q).l(0,m)
s=K.N(new H.I("`"))
t.a.push(s)
t.c=!0
t=u.G(0,m).l(0,m)
s=new K.am()
s.a=H.b([],r)
t.a.push(s)
t=K.N(new H.I("`"))
s.a.push(t)
t=u.G(0,m).l(0,"CodeEnd")
s=K.N(new H.I("`"))
t.a.push(s)
t.c=!0
t=u.G(0,q).l(0,l)
s=K.N(new H.I("["))
t.a.push(s)
t.c=!0
t=u.G(0,l).l(0,k)
s=K.N(new H.I("|"))
t.a.push(s)
s=u.G(0,l).l(0,j)
t=K.N(new H.I("]"))
s.a.push(t)
s.c=!0
s=u.G(0,l).l(0,l)
t=new K.am()
t.a=H.b([],r)
s.a.push(t)
s=K.N(new H.I("|]"))
t.a.push(s)
s=u.G(0,k).l(0,j)
t=K.N(new H.I("]"))
s.a.push(t)
s.c=!0
s=u.G(0,k).l(0,k)
t=new K.am()
t.a=H.b([],r)
s.a.push(t)
s=K.N(new H.I("|]"))
t.a.push(s)
u.G(0,q).l(0,i).a.push(new K.e2())
s=u.G(0,i).l(0,i)
t=new K.am()
t.a=H.b([],r)
s.a.push(t)
s=K.N(new H.I("*_`["))
t.a.push(s)
s=u.G(0,"BoldEnd")
s.d=s.a.aI(p)
s=u.G(0,n)
s.d=s.a.aI(o)
s=u.G(0,"CodeEnd")
s.d=s.a.aI(m)
s=u.G(0,j)
s.d=s.a.aI("Link")
s=u.G(0,i)
s.d=s.a.aI(i)
this.b=u}}
V.fQ.prototype={
$1:function(a){P.jo(C.f,new V.fP(this.a))}}
V.fP.prototype={
$0:function(){var u=C.c.a1(document.documentElement.scrollTop),t=this.a.style,s=H.f(-0.01*u)+"px"
t.top=s}}
N.ir.prototype={
$1:function(a){var u=this.a,t=u.b,s=u.e,r=s.length
t=(t+1)%r
if(t<r){u.b=t
u.c=s[t]
u=u.f
if(u!=null)u.c8()}return}};(function aliases(){var u=J.a.prototype
u.cU=u.i
u=J.ct.prototype
u.cV=u.i
u=K.cp.prototype
u.cT=u.as
u.bA=u.i
u=O.bB.prototype
u.bB=u.a9
u=O.a9.prototype
u.bC=u.a9})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(J,"kY","ki",16)
t(P,"ls","kN",5)
t(P,"lt","kO",5)
t(P,"lu","kP",5)
s(P,"jC","lq",8)
var m
r(m=E.aJ.prototype,"gcw",0,0,null,["$1","$0"],["cz","f_"],0,0)
r(m,"gcu",0,0,null,["$1","$0"],["cv","eZ"],0,0)
r(m,"gcs",0,0,null,["$1","$0"],["ct","eW"],0,0)
q(m,"geU","eV",2)
q(m,"geX","eY",2)
r(m=E.cW.prototype,"gbE",0,0,null,["$1","$0"],["bG","bF"],0,0)
p(m,"gfd","cE",8)
o(m=X.d2.prototype,"gdJ","dK",3)
o(m,"gdv","dw",3)
o(m,"gdD","dE",1)
o(m,"gdN","dO",9)
o(m,"gdL","dM",9)
o(m,"gdR","dS",1)
o(m,"gdV","dW",1)
o(m,"gdH","dI",1)
o(m,"gdT","dU",1)
o(m,"gdF","dG",1)
o(m,"gdX","dY",14)
o(m,"gdZ","e_",3)
o(m,"ge9","ea",4)
o(m,"ge5","e6",4)
o(m,"ge7","e8",4)
r(D.b2.prototype,"gd1",0,0,null,["$1","$0"],["a6","d2"],0,0)
r(m=D.cv.prototype,"gbR",0,0,null,["$1","$0"],["bS","dP"],0,0)
o(m,"ge1","e2",15)
q(m,"gdn","dq",10)
q(m,"ge3","e4",10)
n(V.av.prototype,"gj","bn",11)
n(V.x.prototype,"gj","bn",11)
r(m=M.cl.prototype,"ga3",0,0,null,["$1","$0"],["a7","d3"],0,0)
q(m,"gdz","dA",2)
q(m,"gdB","dC",2)
r(m=O.cy.prototype,"gaL",0,0,null,["$1","$0"],["L","aV"],0,0)
r(m,"geg",0,0,null,["$1","$0"],["bT","eh"],0,0)
q(m,"gdr","ds",12)
q(m,"gdt","du",12)
r(O.bB.prototype,"gaL",0,0,null,["$1","$0"],["L","aV"],0,0)
r(X.cF.prototype,"gbH",0,0,null,["$1","$0"],["ai","d6"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.T,null)
s(P.T,[H.iI,J.a,J.a_,P.dk,P.k,H.by,P.eK,H.cn,H.hs,H.hg,P.b3,H.bp,H.dC,P.S,H.eS,H.eT,H.eM,P.dI,P.bf,P.bY,P.d4,P.cS,P.h_,P.cX,P.ic,P.i5,P.i0,P.dj,P.q,P.ef,P.ib,P.aW,P.aH,P.a2,P.aI,P.fw,P.cQ,P.dc,P.eF,P.aO,P.bz,P.aP,P.r,P.as,W.ej,W.E,W.co,P.dN,P.i1,K.e2,K.cp,K.cx,K.fJ,L.cR,L.cY,L.cZ,L.hb,O.b1,O.bC,E.eb,E.aJ,E.fB,E.cW,Z.d3,Z.hM,Z.ce,Z.b6,Z.aw,D.ee,D.b4,D.V,X.cf,X.cu,X.eP,X.eX,X.bD,X.fk,X.hc,X.d2,D.ea,D.b2,D.R,D.fz,D.fU,V.L,V.aG,V.ev,V.cz,V.aj,V.ab,V.W,V.cH,V.cK,V.av,V.x,M.cl,A.ca,A.e5,A.P,A.cb,A.ci,A.cI,A.cP,A.f2,A.bK,A.bL,A.bN,A.bO,A.d0,A.ho,F.b5,F.ey,F.bx,F.eR,F.bG,F.fK,F.fL,F.fM,F.fN,F.be,F.hA,F.hB,F.hE,F.hG,F.hH,F.hI,O.cT,O.bB,O.f3,T.h7,X.iz,X.h1,X.cF,V.fO])
s(J.a,[J.eL,J.cs,J.ct,J.aL,J.bw,J.b7,H.bF,W.d,W.e1,W.cc,W.a8,W.B,W.d6,W.a0,W.en,W.eo,W.d8,W.ck,W.da,W.eq,W.h,W.dd,W.ai,W.eH,W.df,W.aK,W.eW,W.fe,W.dl,W.dm,W.al,W.dn,W.dr,W.an,W.dv,W.dx,W.aq,W.dy,W.ar,W.dD,W.ad,W.dG,W.ha,W.au,W.dJ,W.he,W.hu,W.dO,W.dQ,W.dS,W.dU,W.dW,P.aN,P.dh,P.aQ,P.dt,P.fA,P.dE,P.aR,P.dL,P.e6,P.d5,P.cL,P.dA])
s(J.ct,[J.fx,J.bP,J.aM])
t(J.iH,J.aL)
s(J.bw,[J.cr,J.cq])
t(P.eU,P.dk)
s(P.eU,[H.d1,W.hU,W.hT,P.eB])
t(H.I,H.d1)
s(P.k,[H.n,H.bA,H.hN,P.eJ])
t(H.et,H.bA)
s(P.eK,[H.cw,H.hO])
s(P.b3,[H.ft,H.eO,H.hr,H.ed,H.fH,P.cE,P.a6,P.ht,P.hq,P.fW,P.eg,P.em])
s(H.bp,[H.iv,H.h2,H.eN,H.im,H.io,H.ip,P.hQ,P.hP,P.hR,P.hS,P.ia,P.i9,P.ii,P.i3,P.i4,P.eZ,P.er,P.es,W.fg,W.fi,W.fG,W.fZ,W.hX,P.ij,P.eC,P.eD,P.e8,E.fC,E.fD,E.fE,E.h9,D.ew,D.ex,F.id,F.hK,F.hJ,F.hC,F.hD,O.f6,O.f7,O.f8,O.f9,O.fa,O.fb,O.fc,O.fd,T.h8,V.it,V.fQ,V.fP,N.ir])
s(H.h2,[H.fX,H.bn])
t(P.eY,P.S)
t(H.C,P.eY)
t(H.b9,H.n)
t(H.cA,H.bF)
s(H.cA,[H.bS,H.bU])
t(H.bT,H.bS)
t(H.bE,H.bT)
t(H.bV,H.bU)
t(H.cB,H.bV)
s(H.cB,[H.fm,H.fn,H.fo,H.fp,H.fq,H.cC,H.fr])
t(P.i8,P.eJ)
t(P.i2,P.ic)
t(P.i_,P.i5)
t(P.eh,P.h_)
t(P.eu,P.ef)
t(P.hv,P.eu)
t(P.hw,P.eh)
s(P.a2,[P.G,P.v])
s(P.a6,[P.bb,P.eI])
s(W.d,[W.z,W.eA,W.ap,W.bW,W.at,W.ae,W.bZ,W.hL,W.bR,P.e9,P.b_])
s(W.z,[W.M,W.aF])
s(W.M,[W.j,P.i])
s(W.j,[W.e3,W.e4,W.b0,W.eE,W.bt,W.fI])
t(W.ei,W.a8)
t(W.br,W.d6)
s(W.a0,[W.ek,W.el])
t(W.d9,W.d8)
t(W.cj,W.d9)
t(W.db,W.da)
t(W.ep,W.db)
t(W.ah,W.cc)
t(W.de,W.dd)
t(W.ez,W.de)
t(W.dg,W.df)
t(W.bs,W.dg)
t(W.aS,W.h)
s(W.aS,[W.b8,W.aa,W.bc])
t(W.ff,W.dl)
t(W.fh,W.dm)
t(W.dp,W.dn)
t(W.fj,W.dp)
t(W.ds,W.dr)
t(W.cD,W.ds)
t(W.dw,W.dv)
t(W.fy,W.dw)
t(W.fF,W.dx)
t(W.bX,W.bW)
t(W.fS,W.bX)
t(W.dz,W.dy)
t(W.fT,W.dz)
t(W.fY,W.dD)
t(W.dH,W.dG)
t(W.h3,W.dH)
t(W.c_,W.bZ)
t(W.h4,W.c_)
t(W.dK,W.dJ)
t(W.hd,W.dK)
t(W.aU,W.aa)
t(W.dP,W.dO)
t(W.hV,W.dP)
t(W.d7,W.ck)
t(W.dR,W.dQ)
t(W.hY,W.dR)
t(W.dT,W.dS)
t(W.dq,W.dT)
t(W.dV,W.dU)
t(W.i6,W.dV)
t(W.dX,W.dW)
t(W.i7,W.dX)
t(W.hW,P.cS)
t(P.a4,P.i1)
t(P.di,P.dh)
t(P.eQ,P.di)
t(P.du,P.dt)
t(P.fu,P.du)
t(P.dF,P.dE)
t(P.h0,P.dF)
t(P.dM,P.dL)
t(P.hf,P.dM)
t(P.e7,P.d5)
t(P.fv,P.b_)
t(P.dB,P.dA)
t(P.fV,P.dB)
s(K.cp,[K.am,L.d_])
s(E.eb,[Z.cd,A.cN,T.cU])
s(D.V,[D.bu,D.bv,D.D])
t(D.cv,O.b1)
t(U.fl,D.ee)
s(U.fl,[U.cg,U.cM])
t(A.f_,A.cN)
s(A.d0,[A.aT,A.hl,A.hm,A.hn,A.hj,A.J,A.hk,A.A,A.bJ,A.hp,A.bM,A.X,A.O,A.bd])
t(F.fR,F.ey)
t(F.hi,F.eR)
t(F.hF,F.hG)
t(F.fs,F.hH)
t(O.cy,O.cT)
s(O.bB,[O.f0,O.f1,O.a9])
s(O.a9,[O.f4,O.f5])
t(T.cV,T.cU)
s(T.cV,[T.h5,T.h6])
t(X.eG,X.h1)
u(H.d1,H.hs)
u(H.bS,P.q)
u(H.bT,H.cn)
u(H.bU,P.q)
u(H.bV,H.cn)
u(P.dk,P.q)
u(W.d6,W.ej)
u(W.d8,P.q)
u(W.d9,W.E)
u(W.da,P.q)
u(W.db,W.E)
u(W.dd,P.q)
u(W.de,W.E)
u(W.df,P.q)
u(W.dg,W.E)
u(W.dl,P.S)
u(W.dm,P.S)
u(W.dn,P.q)
u(W.dp,W.E)
u(W.dr,P.q)
u(W.ds,W.E)
u(W.dv,P.q)
u(W.dw,W.E)
u(W.dx,P.S)
u(W.bW,P.q)
u(W.bX,W.E)
u(W.dy,P.q)
u(W.dz,W.E)
u(W.dD,P.S)
u(W.dG,P.q)
u(W.dH,W.E)
u(W.bZ,P.q)
u(W.c_,W.E)
u(W.dJ,P.q)
u(W.dK,W.E)
u(W.dO,P.q)
u(W.dP,W.E)
u(W.dQ,P.q)
u(W.dR,W.E)
u(W.dS,P.q)
u(W.dT,W.E)
u(W.dU,P.q)
u(W.dV,W.E)
u(W.dW,P.q)
u(W.dX,W.E)
u(P.dh,P.q)
u(P.di,W.E)
u(P.dt,P.q)
u(P.du,W.E)
u(P.dE,P.q)
u(P.dF,W.E)
u(P.dL,P.q)
u(P.dM,W.E)
u(P.d5,P.S)
u(P.dA,P.q)
u(P.dB,W.E)})()
var v={mangledGlobalNames:{v:"int",G:"double",a2:"num",r:"String",aW:"bool",aP:"Null",aO:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.V]},{func:1,ret:-1,args:[W.aa]},{func:1,ret:-1,args:[P.v,[P.k,E.aJ]]},{func:1,ret:-1,args:[W.h]},{func:1,ret:-1,args:[W.bc]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.aP,args:[,,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.b8]},{func:1,ret:-1,args:[P.v,[P.k,D.R]]},{func:1,ret:P.G},{func:1,ret:-1,args:[P.v,[P.k,V.aj]]},{func:1,ret:P.aP,args:[,]},{func:1,ret:-1,args:[W.aU]},{func:1,ret:P.aW,args:[[P.k,D.R]]},{func:1,ret:P.v,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.m=W.b0.prototype
C.A=J.a.prototype
C.a=J.aL.prototype
C.B=J.cq.prototype
C.d=J.cr.prototype
C.h=J.cs.prototype
C.c=J.bw.prototype
C.b=J.b7.prototype
C.C=J.aM.prototype
C.n=J.fx.prototype
C.E=P.cL.prototype
C.i=J.bP.prototype
C.o=W.aU.prototype
C.p=W.bR.prototype
C.j=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.q=function() {
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
C.w=function(getTagFallback) {
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
C.r=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.t=function(hooks) {
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
C.v=function(hooks) {
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
C.u=function(hooks) {
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
C.k=function(hooks) { return hooks; }

C.x=new P.fw()
C.l=new P.hv()
C.y=new P.hw()
C.e=new P.i2()
C.f=new P.aI(0)
C.z=new P.aI(5e6)
C.D=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.v])
C.F=new P.bf(null,2)})();(function staticFields(){$.a7=0
$.bo=null
$.j4=null
$.jF=null
$.jB=null
$.jI=null
$.ik=null
$.iq=null
$.iY=null
$.bg=null
$.c2=null
$.c3=null
$.iS=!1
$.a5=C.e
$.U=[]
$.jd=null
$.jg=null
$.ac=null
$.jk=null
$.jt=null
$.jv=null
$.hx=null
$.hy=null
$.hz=null
$.ju=null
$.jf=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"lZ","jN",function(){return H.jD("_$dart_dartClosure")})
u($,"m_","j2",function(){return H.jD("_$dart_js")})
u($,"m0","jO",function(){return H.af(H.hh({
toString:function(){return"$receiver$"}}))})
u($,"m1","jP",function(){return H.af(H.hh({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"m2","jQ",function(){return H.af(H.hh(null))})
u($,"m3","jR",function(){return H.af(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"m6","jU",function(){return H.af(H.hh(void 0))})
u($,"m7","jV",function(){return H.af(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"m5","jT",function(){return H.af(H.jr(null))})
u($,"m4","jS",function(){return H.af(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"m9","jX",function(){return H.af(H.jr(void 0))})
u($,"m8","jW",function(){return H.af(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"mm","j3",function(){return P.kM()})
u($,"mo","k0",function(){return P.kB("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"mg","k_",function(){return Z.a1(0)})
u($,"ma","jY",function(){return Z.a1(511)})
u($,"mi","aD",function(){return Z.a1(1)})
u($,"mh","aC",function(){return Z.a1(2)})
u($,"mc","aB",function(){return Z.a1(4)})
u($,"mj","aE",function(){return Z.a1(8)})
u($,"mk","aX",function(){return Z.a1(16)})
u($,"md","c6",function(){return Z.a1(32)})
u($,"me","c7",function(){return Z.a1(64)})
u($,"mf","jZ",function(){return Z.a1(96)})
u($,"ml","bm",function(){return Z.a1(128)})
u($,"mb","aA",function(){return Z.a1(256)})
u($,"lY","jM",function(){return new V.ev(1e-9)})
u($,"lX","y",function(){return $.jM()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.bF,ArrayBufferView:H.bF,Float32Array:H.bE,Float64Array:H.bE,Int16Array:H.fm,Int32Array:H.fn,Int8Array:H.fo,Uint16Array:H.fp,Uint32Array:H.fq,Uint8ClampedArray:H.cC,CanvasPixelArray:H.cC,Uint8Array:H.fr,HTMLAudioElement:W.j,HTMLBRElement:W.j,HTMLBaseElement:W.j,HTMLBodyElement:W.j,HTMLButtonElement:W.j,HTMLContentElement:W.j,HTMLDListElement:W.j,HTMLDataElement:W.j,HTMLDataListElement:W.j,HTMLDetailsElement:W.j,HTMLDialogElement:W.j,HTMLDivElement:W.j,HTMLEmbedElement:W.j,HTMLFieldSetElement:W.j,HTMLHRElement:W.j,HTMLHeadElement:W.j,HTMLHeadingElement:W.j,HTMLHtmlElement:W.j,HTMLIFrameElement:W.j,HTMLInputElement:W.j,HTMLLIElement:W.j,HTMLLabelElement:W.j,HTMLLegendElement:W.j,HTMLLinkElement:W.j,HTMLMapElement:W.j,HTMLMediaElement:W.j,HTMLMenuElement:W.j,HTMLMetaElement:W.j,HTMLMeterElement:W.j,HTMLModElement:W.j,HTMLOListElement:W.j,HTMLObjectElement:W.j,HTMLOptGroupElement:W.j,HTMLOptionElement:W.j,HTMLOutputElement:W.j,HTMLParagraphElement:W.j,HTMLParamElement:W.j,HTMLPictureElement:W.j,HTMLPreElement:W.j,HTMLProgressElement:W.j,HTMLQuoteElement:W.j,HTMLScriptElement:W.j,HTMLShadowElement:W.j,HTMLSlotElement:W.j,HTMLSourceElement:W.j,HTMLSpanElement:W.j,HTMLStyleElement:W.j,HTMLTableCaptionElement:W.j,HTMLTableCellElement:W.j,HTMLTableDataCellElement:W.j,HTMLTableHeaderCellElement:W.j,HTMLTableColElement:W.j,HTMLTableElement:W.j,HTMLTableRowElement:W.j,HTMLTableSectionElement:W.j,HTMLTemplateElement:W.j,HTMLTextAreaElement:W.j,HTMLTimeElement:W.j,HTMLTitleElement:W.j,HTMLTrackElement:W.j,HTMLUListElement:W.j,HTMLUnknownElement:W.j,HTMLVideoElement:W.j,HTMLDirectoryElement:W.j,HTMLFontElement:W.j,HTMLFrameElement:W.j,HTMLFrameSetElement:W.j,HTMLMarqueeElement:W.j,HTMLElement:W.j,AccessibleNodeList:W.e1,HTMLAnchorElement:W.e3,HTMLAreaElement:W.e4,Blob:W.cc,HTMLCanvasElement:W.b0,CDATASection:W.aF,CharacterData:W.aF,Comment:W.aF,ProcessingInstruction:W.aF,Text:W.aF,CSSPerspective:W.ei,CSSCharsetRule:W.B,CSSConditionRule:W.B,CSSFontFaceRule:W.B,CSSGroupingRule:W.B,CSSImportRule:W.B,CSSKeyframeRule:W.B,MozCSSKeyframeRule:W.B,WebKitCSSKeyframeRule:W.B,CSSKeyframesRule:W.B,MozCSSKeyframesRule:W.B,WebKitCSSKeyframesRule:W.B,CSSMediaRule:W.B,CSSNamespaceRule:W.B,CSSPageRule:W.B,CSSRule:W.B,CSSStyleRule:W.B,CSSSupportsRule:W.B,CSSViewportRule:W.B,CSSStyleDeclaration:W.br,MSStyleCSSProperties:W.br,CSS2Properties:W.br,CSSImageValue:W.a0,CSSKeywordValue:W.a0,CSSNumericValue:W.a0,CSSPositionValue:W.a0,CSSResourceValue:W.a0,CSSUnitValue:W.a0,CSSURLImageValue:W.a0,CSSStyleValue:W.a0,CSSMatrixComponent:W.a8,CSSRotation:W.a8,CSSScale:W.a8,CSSSkew:W.a8,CSSTranslation:W.a8,CSSTransformComponent:W.a8,CSSTransformValue:W.ek,CSSUnparsedValue:W.el,DataTransferItemList:W.en,DOMException:W.eo,ClientRectList:W.cj,DOMRectList:W.cj,DOMRectReadOnly:W.ck,DOMStringList:W.ep,DOMTokenList:W.eq,Element:W.M,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.ah,FileList:W.ez,FileWriter:W.eA,HTMLFormElement:W.eE,Gamepad:W.ai,History:W.eH,HTMLCollection:W.bs,HTMLFormControlsCollection:W.bs,HTMLOptionsCollection:W.bs,ImageData:W.aK,HTMLImageElement:W.bt,KeyboardEvent:W.b8,Location:W.eW,MediaList:W.fe,MIDIInputMap:W.ff,MIDIOutputMap:W.fh,MimeType:W.al,MimeTypeArray:W.fj,PointerEvent:W.aa,MouseEvent:W.aa,DragEvent:W.aa,Document:W.z,DocumentFragment:W.z,HTMLDocument:W.z,ShadowRoot:W.z,XMLDocument:W.z,Attr:W.z,DocumentType:W.z,Node:W.z,NodeList:W.cD,RadioNodeList:W.cD,Plugin:W.an,PluginArray:W.fy,RTCStatsReport:W.fF,HTMLSelectElement:W.fI,SourceBuffer:W.ap,SourceBufferList:W.fS,SpeechGrammar:W.aq,SpeechGrammarList:W.fT,SpeechRecognitionResult:W.ar,Storage:W.fY,CSSStyleSheet:W.ad,StyleSheet:W.ad,TextTrack:W.at,TextTrackCue:W.ae,VTTCue:W.ae,TextTrackCueList:W.h3,TextTrackList:W.h4,TimeRanges:W.ha,Touch:W.au,TouchEvent:W.bc,TouchList:W.hd,TrackDefaultList:W.he,CompositionEvent:W.aS,FocusEvent:W.aS,TextEvent:W.aS,UIEvent:W.aS,URL:W.hu,VideoTrackList:W.hL,WheelEvent:W.aU,Window:W.bR,DOMWindow:W.bR,CSSRuleList:W.hV,ClientRect:W.d7,DOMRect:W.d7,GamepadList:W.hY,NamedNodeMap:W.dq,MozNamedAttrMap:W.dq,SpeechRecognitionResultList:W.i6,StyleSheetList:W.i7,SVGLength:P.aN,SVGLengthList:P.eQ,SVGNumber:P.aQ,SVGNumberList:P.fu,SVGPointList:P.fA,SVGStringList:P.h0,SVGAElement:P.i,SVGAnimateElement:P.i,SVGAnimateMotionElement:P.i,SVGAnimateTransformElement:P.i,SVGAnimationElement:P.i,SVGCircleElement:P.i,SVGClipPathElement:P.i,SVGDefsElement:P.i,SVGDescElement:P.i,SVGDiscardElement:P.i,SVGEllipseElement:P.i,SVGFEBlendElement:P.i,SVGFEColorMatrixElement:P.i,SVGFEComponentTransferElement:P.i,SVGFECompositeElement:P.i,SVGFEConvolveMatrixElement:P.i,SVGFEDiffuseLightingElement:P.i,SVGFEDisplacementMapElement:P.i,SVGFEDistantLightElement:P.i,SVGFEFloodElement:P.i,SVGFEFuncAElement:P.i,SVGFEFuncBElement:P.i,SVGFEFuncGElement:P.i,SVGFEFuncRElement:P.i,SVGFEGaussianBlurElement:P.i,SVGFEImageElement:P.i,SVGFEMergeElement:P.i,SVGFEMergeNodeElement:P.i,SVGFEMorphologyElement:P.i,SVGFEOffsetElement:P.i,SVGFEPointLightElement:P.i,SVGFESpecularLightingElement:P.i,SVGFESpotLightElement:P.i,SVGFETileElement:P.i,SVGFETurbulenceElement:P.i,SVGFilterElement:P.i,SVGForeignObjectElement:P.i,SVGGElement:P.i,SVGGeometryElement:P.i,SVGGraphicsElement:P.i,SVGImageElement:P.i,SVGLineElement:P.i,SVGLinearGradientElement:P.i,SVGMarkerElement:P.i,SVGMaskElement:P.i,SVGMetadataElement:P.i,SVGPathElement:P.i,SVGPatternElement:P.i,SVGPolygonElement:P.i,SVGPolylineElement:P.i,SVGRadialGradientElement:P.i,SVGRectElement:P.i,SVGScriptElement:P.i,SVGSetElement:P.i,SVGStopElement:P.i,SVGStyleElement:P.i,SVGElement:P.i,SVGSVGElement:P.i,SVGSwitchElement:P.i,SVGSymbolElement:P.i,SVGTSpanElement:P.i,SVGTextContentElement:P.i,SVGTextElement:P.i,SVGTextPathElement:P.i,SVGTextPositioningElement:P.i,SVGTitleElement:P.i,SVGUseElement:P.i,SVGViewElement:P.i,SVGGradientElement:P.i,SVGComponentTransferFunctionElement:P.i,SVGFEDropShadowElement:P.i,SVGMPathElement:P.i,SVGTransform:P.aR,SVGTransformList:P.hf,AudioBuffer:P.e6,AudioParamMap:P.e7,AudioTrackList:P.e9,AudioContext:P.b_,webkitAudioContext:P.b_,BaseAudioContext:P.b_,OfflineAudioContext:P.fv,WebGL2RenderingContext:P.cL,SQLResultSetRowList:P.fV})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.cA.$nativeSuperclassTag="ArrayBufferView"
H.bS.$nativeSuperclassTag="ArrayBufferView"
H.bT.$nativeSuperclassTag="ArrayBufferView"
H.bE.$nativeSuperclassTag="ArrayBufferView"
H.bU.$nativeSuperclassTag="ArrayBufferView"
H.bV.$nativeSuperclassTag="ArrayBufferView"
H.cB.$nativeSuperclassTag="ArrayBufferView"
W.bW.$nativeSuperclassTag="EventTarget"
W.bX.$nativeSuperclassTag="EventTarget"
W.bZ.$nativeSuperclassTag="EventTarget"
W.c_.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(N.jG,[])
else N.jG([])})})()
//# sourceMappingURL=test.dart.js.map
