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
a[c]=function(){a[c]=function(){H.my(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jo"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jo"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jo(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jb:function jb(){},
kW:function(a,b,c,d){if(!!a.$ip)return new H.eW(a,b,[c,d])
return new H.bU(a,b,[c,d])},
kO:function(){return new P.hq("No element")},
lh:function(a,b){var u=J.bg(a)
if(typeof u!=="number")return u.F()
H.d6(a,0,u-1,b)},
d6:function(a,b,c,d){if(c-b<=32)H.lg(a,b,c,d)
else H.lf(a,b,c,d)},
lg:function(a,b,c,d){var u,t,s,r,q,p
for(u=b+1,t=J.ek(a);u<=c;++u){s=t.h(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.h(a,r-1),s)
if(typeof q!=="number")return q.a8()
q=q>0}else q=!1
if(!q)break
p=r-1
t.k(a,r,t.h(a,p))
r=p}t.k(a,r,s)}},
lf:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j=C.c.a2(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.a2(a4+a5,2),f=g-j,e=g+j,d=J.ek(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.a8()
if(a2>0){u=b
b=c
c=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a8()
if(a2>0){u=a1
a1=a0
a0=u}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.a8()
if(a2>0){u=a
a=c
c=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a8()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.a8()
if(a2>0){u=a0
a0=c
c=u}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.a8()
if(a2>0){u=a0
a0=a
a=u}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.a8()
if(a2>0){u=a1
a1=b
b=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a8()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a8()
if(a2>0){u=a1
a1=a0
a0=u}d.k(a3,i,c)
d.k(a3,g,a)
d.k(a3,h,a1)
d.k(a3,f,d.h(a3,a4))
d.k(a3,e,d.h(a3,a5))
t=a4+1
s=a5-1
if(J.C(a6.$2(b,a0),0)){for(r=t;r<=s;++r){q=d.h(a3,r)
p=a6.$2(q,b)
if(p===0)continue
if(typeof p!=="number")return p.aa()
if(p<0){if(r!==t){d.k(a3,r,d.h(a3,t))
d.k(a3,t,q)}++t}else for(;!0;){p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.a8()
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
if(typeof l!=="number")return l.aa()
if(l<0){if(r!==t){d.k(a3,r,d.h(a3,t))
d.k(a3,t,q)}++t}else{k=a6.$2(q,a0)
if(typeof k!=="number")return k.a8()
if(k>0)for(;!0;){p=a6.$2(d.h(a3,s),a0)
if(typeof p!=="number")return p.a8()
if(p>0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.aa()
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
H.d6(a3,a4,t-2,a6)
H.d6(a3,s+2,a5,a6)
if(m)return
if(t<i&&s>h){for(;J.C(a6.$2(d.h(a3,t),b),0);)++t
for(;J.C(a6.$2(d.h(a3,s),a0),0);)--s
for(r=t;r<=s;++r){q=d.h(a3,r)
if(a6.$2(q,b)===0){if(r!==t){d.k(a3,r,d.h(a3,t))
d.k(a3,t,q)}++t}else if(a6.$2(q,a0)===0)for(;!0;)if(a6.$2(d.h(a3,s),a0)===0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.aa()
o=s-1
if(p<0){d.k(a3,r,d.h(a3,t))
n=t+1
d.k(a3,t,d.h(a3,s))
d.k(a3,s,q)
t=n}else{d.k(a3,r,d.h(a3,s))
d.k(a3,s,q)}s=o
break}}H.d6(a3,t,s,a6)}else H.d6(a3,t,s,a6)},
M:function M(a){this.a=a},
p:function p(){},
bS:function bS(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bU:function bU(a,b,c){this.a=a
this.b=b
this.$ti=c},
eW:function eW(a,b,c){this.a=a
this.b=b
this.$ti=c},
cS:function cS(a,b){this.a=null
this.b=a
this.c=b},
ie:function ie(a,b,c){this.a=a
this.b=b
this.$ti=c},
ig:function ig(a,b){this.a=a
this.b=b},
cG:function cG(){},
hX:function hX(){},
dk:function dk(){},
cp:function(a){var u,t=H.mz(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
mj:function(a){return v.types[a]},
mo:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.X(a).$iy},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a7(a)
if(typeof u!=="string")throw H.c(H.aO(a))
return u},
c1:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
c2:function(a){return H.l0(a)+H.k5(H.cn(a),0,null)},
l0:function(a){var u,t,s,r,q,p,o,n=J.X(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.F||!!n.$ic9){r=C.m(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cp(t.length>1&&C.d.bm(t,0)===36?C.d.aC(t,1):t)},
jP:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
la:function(a){var u,t,s,r=H.b([],[P.v])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.n)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aO(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.ba(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.c(H.aO(s))}return H.jP(r)},
l9:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aO(s))
if(s<0)throw H.c(H.aO(s))
if(s>65535)return H.la(a)}return H.jP(a)},
l8:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.ba(u,10))>>>0,56320|u&1023)}throw H.c(P.aI(a,0,1114111,null,null))},
bq:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
l7:function(a){var u=H.bq(a).getFullYear()+0
return u},
l5:function(a){var u=H.bq(a).getMonth()+1
return u},
l1:function(a){var u=H.bq(a).getDate()+0
return u},
l2:function(a){var u=H.bq(a).getHours()+0
return u},
l4:function(a){var u=H.bq(a).getMinutes()+0
return u},
l6:function(a){var u=H.bq(a).getSeconds()+0
return u},
l3:function(a){var u=H.bq(a).getMilliseconds()+0
return u},
u:function(a){throw H.c(H.aO(a))},
f:function(a,b){if(a==null)J.bg(a)
throw H.c(H.bC(a,b))},
bC:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ah(!0,b,s,null)
u=J.bg(a)
if(!(b<0)){if(typeof u!=="number")return H.u(u)
t=b>=u}else t=!0
if(t)return P.K(b,a,s,null,u)
return P.d1(b,s)},
mc:function(a,b,c){var u="Invalid value"
if(a>c)return new P.br(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.br(a,c,!0,b,"end",u)
return new P.ah(!0,b,"end",null)},
aO:function(a){return new P.ah(!0,a,null,null)},
m8:function(a){if(typeof a!=="number")throw H.c(H.aO(a))
return a},
c:function(a){var u
if(a==null)a=new P.cZ()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.ki})
u.name=""}else u.toString=H.ki
return u},
ki:function(){return J.a7(this.dartException)},
o:function(a){throw H.c(a)},
n:function(a){throw H.c(P.bJ(a))},
as:function(a){var u,t,s,r,q,p
a=H.kg(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.t])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hN(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hO:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
jX:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
jK:function(a,b){return new H.fW(a,b==null?null:b.method)},
jc:function(a,b){var u=b==null,t=u?null:b.method
return new H.fj(a,t,u?null:b.receiver)},
em:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.iX(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.ba(t,16)&8191)===10)switch(s){case 438:return f.$1(H.jc(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.jK(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.kl()
q=$.km()
p=$.kn()
o=$.ko()
n=$.kr()
m=$.ks()
l=$.kq()
$.kp()
k=$.ku()
j=$.kt()
i=r.ag(u)
if(i!=null)return f.$1(H.jc(u,i))
else{i=q.ag(u)
if(i!=null){i.method="call"
return f.$1(H.jc(u,i))}else{i=p.ag(u)
if(i==null){i=o.ag(u)
if(i==null){i=n.ag(u)
if(i==null){i=m.ag(u)
if(i==null){i=l.ag(u)
if(i==null){i=o.ag(u)
if(i==null){i=k.ag(u)
if(i==null){i=j.ag(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.jK(u,i))}}return f.$1(new H.hW(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.d8()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.ah(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.d8()
return a},
jr:function(a){var u
if(a==null)return new H.dZ(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dZ(a)},
mg:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.k(0,a[u],a[t])}return b},
mn:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.m("Unsupported number of arguments for wrapped closure"))},
bB:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mn)
a.$identity=u
return u},
kJ:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hr().constructor.prototype):Object.create(new H.bG(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aj
if(typeof t!=="number")return t.B()
$.aj=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.jz(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.kF(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.jz(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
kF:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.mj,a)
if(typeof a=="function")if(b)return a
else{u=c?H.jy:H.j0
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.c("Error in functionType of tearoff")},
kG:function(a,b,c,d){var u=H.j0
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jz:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.kI(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.kG(t,!r,u,b)
if(t===0){r=$.aj
if(typeof r!=="number")return r.B()
$.aj=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bH
return new Function(r+H.e(q==null?$.bH=H.ez("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aj
if(typeof r!=="number")return r.B()
$.aj=r+1
o+=r
r="return function("+o+"){return this."
q=$.bH
return new Function(r+H.e(q==null?$.bH=H.ez("self"):q)+"."+H.e(u)+"("+o+");}")()},
kH:function(a,b,c,d){var u=H.j0,t=H.jy
switch(b?-1:a){case 0:throw H.c(H.ld("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
kI:function(a,b){var u,t,s,r,q,p,o,n=$.bH
if(n==null)n=$.bH=H.ez("self")
u=$.jx
if(u==null)u=$.jx=H.ez("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.kH(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.aj
if(typeof u!=="number")return u.B()
$.aj=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.aj
if(typeof u!=="number")return u.B()
$.aj=u+1
return new Function(n+u+"}")()},
jo:function(a,b,c,d,e,f,g){return H.kJ(a,b,c,d,!!e,!!f,g)},
j0:function(a){return a.a},
jy:function(a){return a.c},
ez:function(a){var u,t,s,r=new H.bG("self","target","receiver","name"),q=J.j9(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
ms:function(a,b){throw H.c(H.kE(a,H.cp(b.substring(2))))},
h:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.X(a)[b]
else u=!0
if(u)return a
H.ms(a,b)},
me:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
kE:function(a,b){return new H.eA("CastError: "+P.j6(a)+": type '"+H.e(H.m4(a))+"' is not a subtype of type '"+b+"'")},
m4:function(a){var u,t=J.X(a)
if(!!t.$ibI){u=H.me(t)
if(u!=null)return H.mt(u)
return"Closure"}return H.c2(a)},
my:function(a){throw H.c(new P.eN(a))},
ld:function(a){return new H.hb(a)},
ka:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
cn:function(a){if(a==null)return
return a.$ti},
n5:function(a,b,c){return H.iW(a["$a"+H.e(c)],H.cn(b))},
mi:function(a,b,c,d){var u=H.iW(a["$a"+H.e(c)],H.cn(b))
return u==null?null:u[d]},
kb:function(a,b,c){var u=H.iW(a["$a"+H.e(b)],H.cn(a))
return u==null?null:u[c]},
aw:function(a,b){var u=H.cn(a)
return u==null?null:u[b]},
mt:function(a){return H.bd(a,null)},
bd:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cp(a[0].name)+H.k5(a,1,b)
if(typeof a=="function")return H.cp(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.f(b,t)
return H.e(b[t])}if('func' in a)return H.lA(a,b)
if('futureOr' in a)return"FutureOr<"+H.bd("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lA:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.b([],[P.t])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.f(a0,m)
p=C.d.B(p,a0[m])
l=u[q]
if(l!=null&&l!==P.a1)p+=" extends "+H.bd(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bd(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bd(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bd(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.mf(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.bd(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
k5:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.ap("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bd(p,c)}return"<"+u.i(0)+">"},
iW:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
n3:function(a,b,c){return a.apply(b,H.iW(J.X(b)["$a"+H.e(c)],H.cn(b)))},
n4:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
mp:function(a){var u,t,s,r,q=$.kc.$1(a),p=$.iO[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.iT[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.k8.$2(a,q)
if(q!=null){p=$.iO[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.iT[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.iU(u)
$.iO[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.iT[q]=u
return u}if(s==="-"){r=H.iU(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.ke(a,u)
if(s==="*")throw H.c(P.jY(q))
if(v.leafTags[q]===true){r=H.iU(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.ke(a,u)},
ke:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jt(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
iU:function(a){return J.jt(a,!1,null,!!a.$iy)},
mq:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.iU(u)
else return J.jt(u,c,null,null)},
ml:function(){if(!0===$.js)return
$.js=!0
H.mm()},
mm:function(){var u,t,s,r,q,p,o,n
$.iO=Object.create(null)
$.iT=Object.create(null)
H.mk()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.kf.$1(q)
if(p!=null){o=H.mq(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
mk:function(){var u,t,s,r,q,p,o=C.u()
o=H.bA(C.v,H.bA(C.w,H.bA(C.n,H.bA(C.n,H.bA(C.x,H.bA(C.y,H.bA(C.z(C.m),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.kc=new H.iQ(r)
$.k8=new H.iR(q)
$.kf=new H.iS(p)},
bA:function(a,b){return a(b)||b},
kR:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.c(new P.f7("Illegal RegExp pattern ("+String(p)+")",a))},
mv:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
md:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
kg:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kh:function(a,b,c){var u=H.mw(a,b,c)
return u},
mw:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.kg(b),'g'),H.md(c))},
hN:function hN(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fW:function fW(a,b){this.a=a
this.b=b},
fj:function fj(a,b,c){this.a=a
this.b=b
this.c=c},
hW:function hW(a){this.a=a},
iX:function iX(a){this.a=a},
dZ:function dZ(a){this.a=a
this.b=null},
bI:function bI(){},
hx:function hx(){},
hr:function hr(){},
bG:function bG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eA:function eA(a){this.a=a},
hb:function hb(a){this.a=a},
H:function H(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fi:function fi(a){this.a=a},
fm:function fm(a,b){this.a=a
this.b=b
this.c=null},
bp:function bp(a,b){this.a=a
this.$ti=b},
fn:function fn(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
iQ:function iQ(a){this.a=a},
iR:function iR(a){this.a=a},
iS:function iS(a){this.a=a},
fh:function fh(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
by:function(a){return a},
av:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bC(b,a))},
lz:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.mc(a,b,c))
return b},
c_:function c_(){},
cV:function cV(){},
bZ:function bZ(){},
cW:function cW(){},
fQ:function fQ(){},
fR:function fR(){},
fS:function fS(){},
fT:function fT(){},
fU:function fU(){},
cX:function cX(){},
fV:function fV(){},
cb:function cb(){},
cc:function cc(){},
cd:function cd(){},
ce:function ce(){},
mf:function(a){return J.jE(a?Object.keys(a):[],null)},
mz:function(a){return v.mangledGlobalNames[a]},
mr:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jt:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iP:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.js==null){H.ml()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.jY("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.jv()]
if(r!=null)return r
r=H.mp(a)
if(r!=null)return r
if(typeof a=="function")return C.H
u=Object.getPrototypeOf(a)
if(u==null)return C.p
if(u===Object.prototype)return C.p
if(typeof s=="function"){Object.defineProperty(s,$.jv(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
kP:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.iZ(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.aI(a,0,4294967295,"length",null))
return J.jE(new Array(a),b)},
jE:function(a,b){return J.j9(H.b(a,[b]))},
j9:function(a){a.fixed$length=Array
return a},
kQ:function(a,b){return J.ct(a,b)},
X:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cM.prototype
return J.cL.prototype}if(typeof a=="string")return J.bn.prototype
if(a==null)return J.cN.prototype
if(typeof a=="boolean")return J.fg.prototype
if(a.constructor==Array)return J.b0.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b1.prototype
return a}if(a instanceof P.a1)return a
return J.iP(a)},
ek:function(a){if(typeof a=="string")return J.bn.prototype
if(a==null)return a
if(a.constructor==Array)return J.b0.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b1.prototype
return a}if(a instanceof P.a1)return a
return J.iP(a)},
jp:function(a){if(a==null)return a
if(a.constructor==Array)return J.b0.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b1.prototype
return a}if(a instanceof P.a1)return a
return J.iP(a)},
mh:function(a){if(typeof a=="number")return J.bQ.prototype
if(typeof a=="string")return J.bn.prototype
if(a==null)return a
if(!(a instanceof P.a1))return J.c9.prototype
return a},
jq:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b1.prototype
return a}if(a instanceof P.a1)return a
return J.iP(a)},
C:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.X(a).n(a,b)},
cs:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mo(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ek(a).h(a,b)},
kz:function(a,b,c){return J.jq(a).fe(a,b,c)},
kA:function(a,b,c,d){return J.jq(a).fu(a,b,c,d)},
ct:function(a,b){return J.mh(a).aM(a,b)},
iY:function(a,b){return J.jp(a).E(a,b)},
kB:function(a,b){return J.jp(a).J(a,b)},
bF:function(a){return J.X(a).gI(a)},
bf:function(a){return J.jp(a).gP(a)},
bg:function(a){return J.ek(a).gj(a)},
kC:function(a,b){return J.jq(a).h6(a,b)},
a7:function(a){return J.X(a).i(a)},
a:function a(){},
fg:function fg(){},
cN:function cN(){},
cO:function cO(){},
h_:function h_(){},
c9:function c9(){},
b1:function b1(){},
b0:function b0(a){this.$ti=a},
ja:function ja(a){this.$ti=a},
Z:function Z(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bQ:function bQ(){},
cM:function cM(){},
cL:function cL(){},
bn:function bn(){}},P={
lo:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.m5()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bB(new P.ii(s),1)).observe(u,{childList:true})
return new P.ih(s,u,t)}else if(self.setImmediate!=null)return P.m6()
return P.m7()},
lp:function(a){self.scheduleImmediate(H.bB(new P.ij(a),0))},
lq:function(a){self.setImmediate(H.bB(new P.ik(a),0))},
lr:function(a){P.jh(C.j,a)},
jh:function(a,b){var u=C.c.a2(a.a,1000)
return P.lw(u<0?0:u,b)},
jW:function(a,b){var u=C.c.a2(a.a,1000)
return P.lx(u<0?0:u,b)},
lw:function(a,b){var u=new P.e4()
u.dS(a,b)
return u},
lx:function(a,b){var u=new P.e4()
u.dT(a,b)
return u},
n1:function(a){return new P.bx(a,1)},
ls:function(){return C.J},
lt:function(a){return new P.bx(a,3)},
lD:function(a,b){return new P.iD(a,[b])},
lZ:function(){var u,t
for(;u=$.bz,u!=null;){$.cm=null
t=u.b
$.bz=t
if(t==null)$.cl=null
u.a.$0()}},
m3:function(){$.jm=!0
try{P.lZ()}finally{$.cm=null
$.jm=!1
if($.bz!=null)$.jw().$1(P.k9())}},
m1:function(a){var u=new P.ds(a)
if($.bz==null){$.bz=$.cl=u
if(!$.jm)$.jw().$1(P.k9())}else $.cl=$.cl.b=u},
m2:function(a){var u,t,s=$.bz
if(s==null){P.m1(a)
$.cm=$.cl
return}u=new P.ds(a)
t=$.cm
if(t==null){u.b=s
$.bz=$.cm=u}else{u.b=t.b
$.cm=t.b=u
if(u.b==null)$.cl=u}},
jV:function(a,b){var u=$.ag
if(u===C.e)return P.jh(a,b)
return P.jh(a,u.fA(b))},
ll:function(a,b){var u=$.ag
if(u===C.e)return P.jW(a,b)
return P.jW(a,u.cR(b,P.de))},
k6:function(a,b,c,d,e){var u={}
u.a=d
P.m2(new P.iM(u,e))},
m_:function(a,b,c,d){var u,t=$.ag
if(t===c)return d.$0()
$.ag=c
u=t
try{t=d.$0()
return t}finally{$.ag=u}},
m0:function(a,b,c,d,e){var u,t=$.ag
if(t===c)return d.$1(e)
$.ag=c
u=t
try{t=d.$1(e)
return t}finally{$.ag=u}},
ii:function ii(a){this.a=a},
ih:function ih(a,b,c){this.a=a
this.b=b
this.c=c},
ij:function ij(a){this.a=a},
ik:function ik(a){this.a=a},
e4:function e4(){this.c=0},
iF:function iF(a,b){this.a=a
this.b=b},
iE:function iE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bx:function bx(a,b){this.a=a
this.b=b},
ch:function ch(a){var _=this
_.a=a
_.d=_.c=_.b=null},
iD:function iD(a,b){this.a=a
this.$ti=b},
ds:function ds(a){this.a=a
this.b=null},
da:function da(){},
hu:function hu(){},
de:function de(){},
iH:function iH(){},
iM:function iM(a,b){this.a=a
this.b=b},
ix:function ix(){},
iy:function iy(a,b){this.a=a
this.b=b},
iz:function iz(a,b,c){this.a=a
this.b=b
this.c=c},
kT:function(a,b){return new H.H([a,b])},
kU:function(a){return H.mg(a,new H.H([null,null]))},
jF:function(a){return new P.iu([a])},
jl:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
lv:function(a,b){var u=new P.dH(a,b)
u.c=a.e
return u},
kN:function(a,b,c){var u,t
if(P.jn(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.t])
$.a2.push(a)
try{P.lC(a,u)}finally{if(0>=$.a2.length)return H.f($.a2,-1)
$.a2.pop()}t=P.jR(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
j8:function(a,b,c){var u,t
if(P.jn(a))return b+"..."+c
u=new P.ap(b)
$.a2.push(a)
try{t=u
t.a=P.jR(t.a,a,", ")}finally{if(0>=$.a2.length)return H.f($.a2,-1)
$.a2.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jn:function(a){var u,t
for(u=$.a2.length,t=0;t<u;++t)if(a===$.a2[t])return!0
return!1},
lC:function(a,b){var u,t,s,r,q,p,o,n=a.gP(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.v())return
u=H.e(n.gG(n))
b.push(u)
m+=u.length+2;++l}if(!n.v()){if(l<=5)return
if(0>=b.length)return H.f(b,-1)
t=b.pop()
if(0>=b.length)return H.f(b,-1)
s=b.pop()}else{r=n.gG(n);++l
if(!n.v()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.f(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gG(n);++l
for(;n.v();r=q,q=p){p=n.gG(n);++l
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
jG:function(a){var u,t={}
if(P.jn(a))return"{...}"
u=new P.ap("")
try{$.a2.push(a)
u.a+="{"
t.a=!0
J.kB(a,new P.fs(t,u))
u.a+="}"}finally{if(0>=$.a2.length)return H.f($.a2,-1)
$.a2.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
iu:function iu(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iv:function iv(a){this.a=a
this.c=this.b=null},
dH:function dH(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fe:function fe(){},
fo:function fo(){},
r:function r(){},
fr:function fr(){},
fs:function fs(a,b){this.a=a
this.b=b},
a0:function a0(){},
iA:function iA(){},
dI:function dI(){},
eC:function eC(){},
eH:function eH(){},
eX:function eX(){},
i_:function i_(){},
i0:function i0(){},
iG:function iG(a){this.b=0
this.c=a},
kM:function(a){if(a instanceof H.bI)return a.i(0)
return"Instance of '"+H.e(H.c2(a))+"'"},
kV:function(a,b,c){var u,t,s=J.kP(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
jd:function(a,b,c){var u,t=H.b([],[c])
for(u=J.bf(a);u.v();)t.push(u.gG(u))
if(b)return t
return J.j9(t)},
jg:function(a){var u,t=a.length,s=P.je(0,null,t)
if(typeof s!=="number")return s.aa()
u=s<t
return H.l9(u?C.a.ci(a,0,s):a)},
lb:function(a){return new H.fh(a,H.kR(a,!1,!0,!1,!1,!1))},
jR:function(a,b,c){var u=J.bf(b)
if(!u.v())return a
if(c.length===0){do a+=H.e(u.gG(u))
while(u.v())}else{a+=H.e(u.gG(u))
for(;u.v();)a=a+c+H.e(u.gG(u))}return a},
ly:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.o){u=$.ky().b
u=u.test(b)}else u=!1
if(u)return b
t=C.B.fD(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.f(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.l8(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
kK:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
kL:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cB:function(a){if(a>=10)return""+a
return"0"+a},
jB:function(a){return new P.aV(1000*a)},
j6:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a7(a)
if(typeof a==="string")return JSON.stringify(a)
return P.kM(a)},
kD:function(a){return new P.ah(!1,null,null,a)},
iZ:function(a,b,c){return new P.ah(!0,a,b,c)},
d1:function(a,b){return new P.br(null,null,!0,a,b,"Value not in range")},
aI:function(a,b,c,d,e){return new P.br(b,c,!0,a,d,"Invalid value")},
je:function(a,b,c){var u
if(typeof a!=="number")return H.u(a)
if(0<=a){if(typeof c!=="number")return H.u(c)
u=a>c}else u=!0
if(u)throw H.c(P.aI(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.u(c)
u=b>c}else u=!0
if(u)throw H.c(P.aI(b,a,c,"end",null))
return b}return c},
jQ:function(a,b){if(typeof a!=="number")return a.aa()
if(a<0)throw H.c(P.aI(a,0,null,b,null))},
K:function(a,b,c,d,e){var u=e==null?J.bg(b):e
return new P.fd(u,!0,a,c,"Index out of range")},
x:function(a){return new P.hY(a)},
jY:function(a){return new P.hV(a)},
bJ:function(a){return new P.eG(a)},
m:function(a){return new P.dA(a)},
ju:function(a){H.mr(a)},
be:function be(){},
a9:function a9(a,b){this.a=a
this.b=b},
I:function I(){},
aV:function aV(a){this.a=a},
eU:function eU(){},
eV:function eV(){},
bl:function bl(){},
cZ:function cZ(){},
ah:function ah(a,b,c,d){var _=this
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
fd:function fd(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hY:function hY(a){this.a=a},
hV:function hV(a){this.a=a},
hq:function hq(a){this.a=a},
eG:function eG(a){this.a=a},
fZ:function fZ(){},
d8:function d8(){},
eN:function eN(a){this.a=a},
dA:function dA(a){this.a=a},
f7:function f7(a,b){this.a=a
this.b=b},
v:function v(){},
j:function j(){},
ff:function ff(){},
b3:function b3(){},
bT:function bT(){},
b5:function b5(){},
a6:function a6(){},
a1:function a1(){},
t:function t(){},
ap:function ap(a){this.a=a},
mb:function(a){var u,t=J.X(a)
if(!!t.$iaY){u=t.gcX(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.e9(a.data,a.height,a.width)},
ma:function(a){if(a instanceof P.e9)return{data:a.a,height:a.b,width:a.c}
return a},
aP:function(a){var u,t,s,r,q
if(a==null)return
u=P.kT(P.t,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.n)(t),++r){q=t[r]
u.k(0,q,a[q])}return u},
m9:function(a){var u={}
a.J(0,new P.iN(u))
return u},
e9:function e9(a,b,c){this.a=a
this.b=b
this.c=c},
iN:function iN(a){this.a=a},
f3:function f3(a,b){this.a=a
this.b=b},
f4:function f4(){},
f5:function f5(){},
it:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lu:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
iw:function iw(){},
a5:function a5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b2:function b2(){},
fl:function fl(){},
b6:function b6(){},
fX:function fX(){},
h3:function h3(){},
hv:function hv(){},
k:function k(){},
b8:function b8(){},
hM:function hM(){},
dF:function dF(){},
dG:function dG(){},
dQ:function dQ(){},
dR:function dR(){},
e0:function e0(){},
e1:function e1(){},
e7:function e7(){},
e8:function e8(){},
es:function es(){},
et:function et(){},
eu:function eu(a){this.a=a},
ev:function ev(){},
bh:function bh(){},
fY:function fY(){},
dt:function dt(){},
d3:function d3(){},
hp:function hp(){},
dX:function dX(){},
dY:function dY(){}},W={
j2:function(){var u=document.createElement("canvas")
return u},
j5:function(a){return"wheel"},
is:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
k4:function(a,b,c,d){var u=W.is(W.is(W.is(W.is(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
S:function(a,b,c,d){var u=W.k7(new W.iq(c),W.i)
if(u!=null&&!0)J.kA(a,b,u,!1)
return new W.ip(a,b,u,!1)},
k7:function(a,b){var u=$.ag
if(u===C.e)return a
return u.cR(a,b)},
l:function l(){},
en:function en(){},
ep:function ep(){},
eq:function eq(){},
cw:function cw(){},
bi:function bi(){},
aU:function aU(){},
eJ:function eJ(){},
G:function G(){},
bL:function bL(){},
eK:function eK(){},
a8:function a8(){},
ak:function ak(){},
eL:function eL(){},
eM:function eM(){},
eO:function eO(){},
eR:function eR(){},
cD:function cD(){},
cE:function cE(){},
eS:function eS(){},
eT:function eT(){},
im:function im(a,b){this.a=a
this.b=b},
V:function V(){},
i:function i(){},
d:function d(){},
aA:function aA(){},
f1:function f1(){},
f2:function f2(){},
f6:function f6(){},
aB:function aB(){},
fb:function fb(){},
bO:function bO(){},
aY:function aY(){},
bP:function bP(){},
bo:function bo(){},
fp:function fp(){},
fJ:function fJ(){},
fK:function fK(){},
fL:function fL(a){this.a=a},
fM:function fM(){},
fN:function fN(a){this.a=a},
aC:function aC(){},
fO:function fO(){},
an:function an(){},
il:function il(a){this.a=a},
F:function F(){},
cY:function cY(){},
aF:function aF(){},
h0:function h0(){},
h9:function h9(){},
ha:function ha(a){this.a=a},
hc:function hc(){},
aJ:function aJ(){},
hm:function hm(){},
aK:function aK(){},
hn:function hn(){},
aL:function aL(){},
hs:function hs(){},
ht:function ht(a){this.a=a},
aq:function aq(){},
aM:function aM(){},
ar:function ar(){},
hy:function hy(){},
hz:function hz(){},
hH:function hH(){},
aN:function aN(){},
bt:function bt(){},
hK:function hK(){},
hL:function hL(){},
b9:function b9(){},
hZ:function hZ(){},
id:function id(){},
bc:function bc(){},
ca:function ca(){},
io:function io(){},
dv:function dv(){},
ir:function ir(){},
dN:function dN(){},
iB:function iB(){},
iC:function iC(){},
ip:function ip(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
iq:function iq(a){this.a=a},
J:function J(){},
cH:function cH(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
du:function du(){},
dw:function dw(){},
dx:function dx(){},
dy:function dy(){},
dz:function dz(){},
dB:function dB(){},
dC:function dC(){},
dD:function dD(){},
dE:function dE(){},
dJ:function dJ(){},
dK:function dK(){},
dL:function dL(){},
dM:function dM(){},
dO:function dO(){},
dP:function dP(){},
dS:function dS(){},
dT:function dT(){},
dU:function dU(){},
cf:function cf(){},
cg:function cg(){},
dV:function dV(){},
dW:function dW(){},
e_:function e_(){},
e2:function e2(){},
e3:function e3(){},
ci:function ci(){},
cj:function cj(){},
e5:function e5(){},
e6:function e6(){},
ea:function ea(){},
eb:function eb(){},
ec:function ec(){},
ed:function ed(){},
ee:function ee(){},
ef:function ef(){},
eg:function eg(){},
eh:function eh(){},
ei:function ei(){},
ej:function ej(){}},K={
W:function(a){var u=new K.hd()
u.dN(a)
return u},
eo:function eo(){},
cK:function cK(){},
cT:function cT(){},
aE:function aE(){this.a=null},
hd:function hd(){this.a=null}},L={d9:function d9(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},df:function df(a,b,c){this.a=a
this.b=b
this.c=c},dg:function dg(a){this.b=a
this.c=null},hI:function hI(){var _=this
_.d=_.c=_.b=_.a=null},di:function di(a){this.b=a
this.a=this.c=null}},O={
eD:function(a){var u=new O.ay([a])
u.b6(a)
return u},
ay:function ay(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bX:function bX(){this.b=this.a=null},
jD:function(a,b){var u,t,s,r=new O.cJ()
r.r=0
r.sc8(null)
r.sbF(null)
if(a==null){u=$.jZ
if(u==null){u=new V.E(1,0)
$.jZ=u
t=u}else t=u}else t=a
if(!J.C(r.d,t)){s=r.d
r.d=t
u=new D.q("blurDirection",s,t)
u.b=!0
r.p(u)}r.scW(b)
r.sbG(null)
r.sbH(0)
return r},
jT:function(a,b){var u,t,s,r=new O.b7(),q=r.a
r.a=b
b.gm().l(0,r.gY())
u=new D.q("texture",q,r.a)
u.b=!0
r.p(u)
t=V.b4()
if(!J.C(r.b,t)){q=r.b
r.b=t
u=new D.q("colorMatrix",q,t)
u.b=!0
r.p(u)}s=V.h4()
if(!J.C(r.c,s)){q=r.c
r.c=s
u=new D.q("source",q,s)
u.b=!0
r.p(u)}if(!J.C(r.d,a)){q=r.d
r.d=a
u=new D.q("destination",q,a)
u.b=!0
r.p(u)}if(r.e!==!1){r.e=!1
u=new D.q("flip",!0,!1)
u.b=!0
r.p(u)}r.f=null
return r},
eP:function eP(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cJ:function cJ(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cU:function cU(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fA:function fA(a,b){this.a=a
this.b=b},
fB:function fB(){},
fC:function fC(a,b){this.a=a
this.b=b},
fD:function fD(){},
fE:function fE(a,b){this.a=a
this.b=b},
fF:function fF(){},
fG:function fG(a,b){this.a=a
this.b=b},
fH:function fH(){},
fu:function fu(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bV:function bV(){},
fv:function fv(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
al:function al(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fx:function fx(){var _=this
_.e=_.d=_.c=_.b=null},
fy:function fy(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fz:function fz(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
d5:function d5(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
db:function db(){},
dc:function dc(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
b7:function b7(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null}},E={
eY:function(a){var u,t=new E.az()
t.a=""
t.b=!0
u=O.eD(E.az)
t.y=u
u.aB(t.gfP(),t.gfS())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sce(0,a)
t.sdi(null)
return t},
lc:function(a,b){var u=new E.h5(a)
u.dM(a,b)
return u},
lk:function(a,b,c,d,e){var u,t,s=J.X(a)
if(!!s.$ibi)return E.jU(a,!0,!0,!0,!1)
u=W.j2()
t=u.style
t.width="100%"
t.height="100%"
s.gcU(a).l(0,u)
return E.jU(u,!0,!0,!0,!1)},
jU:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.dd(),p=C.f.cb(a,"webgl2",P.kU(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.o(P.m("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.lc(p,a)
u=new T.hE(p)
p.getParameter(3379)
u.c=p.getParameter(34076)
u.e=u.d=0
q.f=u
u=new X.dl(a)
t=new X.fk()
t.c=new X.ab(!1,!1,!1)
t.d=P.jF(P.v)
u.b=t
t=new X.fP(u)
t.f=0
t.r=V.aG()
t.x=V.aG()
t.ch=t.Q=1
u.c=t
t=new X.fq(u)
t.r=0
t.x=V.aG()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hJ(u)
t.f=V.aG()
t.r=V.aG()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.b([],[[P.da,P.a1]])
u.z=t
s=document
t.push(W.S(s,"contextmenu",u.gev(),!1))
u.z.push(W.S(a,"focus",u.geF(),!1))
u.z.push(W.S(a,"blur",u.geo(),!1))
u.z.push(W.S(s,"keyup",u.geJ(),!1))
u.z.push(W.S(s,"keydown",u.geH(),!1))
u.z.push(W.S(a,"mousedown",u.geN(),!1))
u.z.push(W.S(a,"mouseup",u.geR(),!1))
u.z.push(W.S(a,r,u.geP(),!1))
t=u.z
W.j5(a)
W.j5(a)
t.push(W.S(a,W.j5(a),u.geT(),!1))
u.z.push(W.S(s,r,u.gex(),!1))
u.z.push(W.S(s,"mouseup",u.gez(),!1))
u.z.push(W.S(s,"pointerlockchange",u.geV(),!1))
u.z.push(W.S(a,"touchstart",u.gfa(),!1))
u.z.push(W.S(a,"touchend",u.gf6(),!1))
u.z.push(W.S(a,"touchmove",u.gf8(),!1))
q.x=u
q.ch=!0
q.cx=!1
q.cy=new P.a9(Date.now(),!1)
q.db=0
q.cF()
return q},
ey:function ey(){},
az:function az(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h5:function h5(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
h6:function h6(a){this.a=a},
h7:function h7(a){this.a=a},
h8:function h8(a){this.a=a},
dd:function dd(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
hG:function hG(a){this.a=a}},Z={
jk:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.by(c)),35044)
a.bindBuffer(b,null)
return new Z.dr(b,u)},
ad:function(a){return new Z.au(a)},
dr:function dr(a,b){this.a=a
this.b=b},
cx:function cx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
bb:function bb(a){this.a=a},
ai:function ai(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bm:function bm(a,b,c){this.a=a
this.b=b
this.c=c},
au:function au(a){this.a=a}},D={
z:function(){var u=new D.aW()
u.d=0
return u},
eB:function eB(){},
aW:function aW(){var _=this
_.d=_.c=_.b=_.a=null},
f_:function f_(a){this.a=a},
f0:function f0(a){this.a=a},
P:function P(){this.b=null},
aZ:function aZ(){this.b=null},
b_:function b_(){this.b=null},
q:function q(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
jA:function(a,b){var u,t,s=new D.bk()
s.c=new V.N(1,1,1)
s.a=V.ln()
s.d=V.jj()
s.e=V.lm()
u=s.b
s.b=b
b.gm().l(0,s.gdQ())
t=new D.q("mover",u,s.b)
t.b=!0
s.ao(t)
if(!s.c.n(0,a)){u=s.c
s.c=a
t=new D.q("color",u,a)
t.b=!0
s.ao(t)}return s},
ex:function ex(){},
bk:function bk(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a_:function a_(){},
cQ:function cQ(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
h1:function h1(){},
ho:function ho(){}},X={cy:function cy(a,b){this.a=a
this.b=b},cP:function cP(a,b){this.a=a
this.b=b},fk:function fk(){var _=this
_.d=_.c=_.b=_.a=null},cR:function cR(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fq:function fq(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ab:function ab(a,b,c){this.a=a
this.b=b
this.c=c},aD:function aD(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},fP:function fP(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bY:function bY(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},h2:function h2(){},dh:function dh(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},hJ:function hJ(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dl:function dl(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
j_:function(a,b,c,d){var u,t,s,r,q=new X.ew()
q.d=q.c=q.b=q.a=512
q.e=!0
q.f=!1
q.x=q.r=1
q.ch=T.jS(null)
q.cx=new V.a3(0,0,0,1)
q.cy=!0
q.db=2000
q.dx=!0
q.dy=V.h4()
q.sai(0,512)
q.saf(0,512)
u=new V.a3(0,0,0,1)
if(!q.cx.n(0,u)){t=q.cx
q.cx=u
s=new D.q("color",t,u)
s.b=!0
q.Z(s)}if(q.cy!==d){q.cy=d
s=new D.q("clearColor",!d,d)
s.b=!0
q.Z(s)}s=q.db
if(!(Math.abs(s-2000)<$.w().a)){q.db=2000
s=new D.q("depth",s,2000)
s.b=!0
q.Z(s)}if(!q.f){q.f=!0
s=new D.q("autoResize",!1,!0)
s.b=!0
q.Z(s)}s=q.r
if(!(Math.abs(s-b)<$.w().a)){q.r=b
s=new D.q("autoResizeScalarX",s,b)
s.b=!0
q.Z(s)}s=q.x
if(!(Math.abs(s-c)<$.w().a)){q.x=c
s=new D.q("autoResizeScalarY",s,c)
s.b=!0
q.Z(s)}r=V.h4()
if(!J.C(q.dy,r)){t=q.dy
q.dy=r
s=new D.q("region",t,r)
s.b=!0
q.Z(s)}return q},
j7:function(a,b){var u=new X.f8(),t=new V.a3(0,0,0,1)
u.a=t
u.b=a
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=V.h4()
u.r=t
return u},
jL:function(a){var u,t,s=new X.d_()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gm().l(0,s.gdU())
t=new D.q("mover",u,s.b)
t.b=!0
s.Z(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.w().a)){s.c=1.0471975511965976
t=new D.q("fov",t,1.0471975511965976)
t.b=!0
s.Z(t)}t=s.d
if(!(Math.abs(t-0.1)<$.w().a)){s.d=0.1
t=new D.q("near",t,0.1)
t.b=!0
s.Z(t)}t=s.e
if(!(Math.abs(t-2000)<$.w().a)){s.e=2000
t=new D.q("far",t,2000)
t.b=!0
s.Z(t)}return s},
ew:function ew(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
j1:function j1(){},
f8:function f8(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fc:function fc(){this.b=this.a=null},
d_:function d_(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
hw:function hw(){}},V={
eE:function(a,b,c){var u=a/255,t=b/255,s=c/255
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a3(u,t,s,1)},
mA:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.b.dA(a-b,u)
return(a<0?a+u:a)+b},
B:function(a,b,c){if(a==null)return C.d.ah("null",c)
return C.d.ah(C.b.du(Math.abs(a-0)<$.w().a?0:a,b),c+b+1)},
bD:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.t])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.n)(a),++s){r=V.B(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.f(o,q)
u=C.d.ah(o[q],t)
p=o.length
if(q>=p)return H.f(o,q)
o[q]=u}return o},
co:function(a){return C.b.hc(Math.pow(2,C.G.bX(Math.log(H.m8(a))/Math.log(2))))},
b4:function(){var u=$.fI
return u==null?$.fI=V.am(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
am:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aa(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
l_:function(a,b,c){return V.am(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
kZ:function(a,b,c){return V.am(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1)},
jJ:function(a,b,c,d){d=V.jj()
return V.jI(V.jO(),d,new V.A(a,b,c))},
jI:function(a,b,c){var u=c.t(0,Math.sqrt(c.C(c))),t=b.aX(u),s=t.t(0,Math.sqrt(t.C(t))),r=u.aX(s),q=new V.A(a.a,a.b,a.c),p=s.O(0).C(q),o=r.O(0).C(q),n=u.O(0).C(q)
return V.am(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
aG:function(){var u=$.jN
return u==null?$.jN=new V.Y(0,0):u},
jO:function(){var u=$.ao
return u==null?$.ao=new V.Q(0,0,0):u},
h4:function(){var u=$.c4
return u==null?$.c4=V.c3(0,0,1,1):u},
c3:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.d2(a,b,c,d)},
dq:function(){var u=$.k2
return u==null?$.k2=new V.A(0,0,0):u},
lm:function(){var u=$.i1
return u==null?$.i1=new V.A(-1,0,0):u},
jj:function(){var u=$.i2
return u==null?$.i2=new V.A(0,1,0):u},
ln:function(){var u=$.i3
return u==null?$.i3=new V.A(0,0,1):u},
N:function N(a,b,c){this.a=a
this.b=b
this.c=c},
a3:function a3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eZ:function eZ(a){this.a=a},
bW:function bW(a,b,c,d,e,f,g,h,i){var _=this
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
Y:function Y(a,b){this.a=a
this.b=b},
Q:function Q(a,b,c){this.a=a
this.b=b
this.c=c},
aH:function aH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d2:function d2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
E:function E(a,b){this.a=a
this.b=b},
A:function A(a,b,c){this.a=a
this.b=b
this.c=c},
bv:function bv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mu:function(a){P.ll(C.E,new V.iV(a))},
le:function(a){var u=new V.hi()
u.dO(a,!0)
return u},
iV:function iV(a){this.a=a},
hi:function hi(){this.b=this.a=null},
hk:function hk(a){this.a=a},
hj:function hj(a){this.a=a}},U={
j3:function(){var u=new U.eF()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
j4:function(a){var u=new U.bK()
u.a=a
return u},
eF:function eF(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bK:function bK(){this.b=this.a=null},
bN:function bN(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a4:function a4(){},
dm:function dm(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dn:function dn(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dp:function dp(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
eI:function(a,b){var u,t,s,r,q,p,o,n,m,l=null,k=new M.cA()
k.a=!0
u=E.eY(l)
t=F.jf()
s=t.a
r=new V.A(-1,-1,1)
r=r.t(0,Math.sqrt(r.C(r)))
q=s.bd(new V.aH(1,2,4,6),V.eE(255,0,0),new V.Q(-1,-1,0),new V.Y(0,1),r,l)
r=t.a
s=new V.A(1,-1,1)
s=s.t(0,Math.sqrt(s.C(s)))
p=r.bd(new V.aH(0,3,4,6),V.eE(0,0,255),new V.Q(1,-1,0),new V.Y(1,1),s,l)
s=t.a
r=new V.A(1,1,1)
r=r.t(0,Math.sqrt(r.C(r)))
o=s.bd(new V.aH(0,2,5,6),V.eE(0,128,0),new V.Q(1,1,0),new V.Y(1,0),r,l)
r=t.a
s=V.aG()
n=new V.A(-1,1,1)
n=n.t(0,Math.sqrt(n.C(n)))
m=r.bd(new V.aH(0,2,4,7),V.eE(255,255,0),new V.Q(-1,1,0),s,n,l)
t.d.fv(H.b([q,p,o,m],[F.bw]))
t.at()
u.sce(0,t)
k.e=u
k.saJ(l)
k.san(0,a)
k.saz(b)
return k},
jC:function(){var u,t,s=new M.cF()
s.a=!0
u=O.eD(E.az)
s.e=u
u.aB(s.geq(),s.ges())
s.y=s.x=s.r=s.f=null
t=X.j7(!0,null)
s.saJ(null)
s.san(0,t)
s.saz(null)
return s},
cz:function cz(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
cA:function cA(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cF:function cF(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cI:function cI(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ac:function ac(){}},A={
kX:function(a,b){var u=a.au,t=new A.ft(b,u)
t.aR(b,u)
t.dL(a,b)
return t},
kY:function(a,b,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="MaterialLight_"+a3.gak(a3)+a4.gak(a4)+a5.gak(a5)+a6.gak(a6)+a7.gak(a7)+a8.gak(a8)+a9.gak(a9)+b0.gak(b0)+b1.gak(b1)+"_"
c+=a?"1":"0"
c+=b?"1":"0"
c+=a0?"1":"0"
c=c+"0_"+a2
u=b2.length
if(u>0){c+="_Bar"
for(t=0;t<b2.length;b2.length===u||(0,H.n)(b2),++t)c+="_"+H.e(b2[t].a)}u=b3.length
if(u>0){c+="_Dir"
for(t=0;t<b3.length;b3.length===u||(0,H.n)(b3),++t)c+="_"+H.e(b3[t].a)}u=b4.length
if(u>0){c+="_Point"
for(t=0;t<b4.length;b4.length===u||(0,H.n)(b4),++t)c+="_"+H.e(b4[t].a)}u=b5.length
if(u>0){c+="_Spot"
for(t=0;t<b5.length;b5.length===u||(0,H.n)(b5),++t)c+="_"+H.e(b5[t].a)}for(u=b2.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=b2[t].b
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
d=$.T()
if(j){u=$.aS()
d=new Z.au(d.a|u.a)}if(i){u=$.aR()
d=new Z.au(d.a|u.a)}if(h){u=$.aT()
d=new Z.au(d.a|u.a)}if(g){u=$.aQ()
d=new Z.au(d.a|u.a)}return new A.fw(a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,s,o,k,o,r,f,!0,e,!1,m,r,l,j,i,!1,h,g,!1,b,a0,!1,a2,c.charCodeAt(0)==0?c:c,d)},
iK:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.c)a.a+="uniform samplerCube "+c+"Txt;\n"},
iL:function(a,b,c){var u,t="Txt, txtCube).rgb;\n"
A.iK(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.el(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.c){u+="   "+c+"Color = "+c+"Clr*textureCube("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.c){u+="   "+c+"Color = textureCube("+c+t
a.a=u}a.a=u+"}\n"},
lI:function(a,b){var u,t=a.a,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.iK(b,t,"emission")
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
lE:function(a,b){var u,t=a.b
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.iL(b,t,"ambient")
b.a+="\n"},
lG:function(a,b){var u,t=a.c
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.iL(b,t,"diffuse")
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
lJ:function(a,b){var u,t=a.d
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.iL(b,t,"invDiffuse")
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
lP:function(a,b){var u,t=a.e
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.iL(b,t,"specular")
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
lL:function(a,b){var u,t,s
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
lN:function(a,b){var u,t=a.r,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.iK(b,t,"reflect")
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
lO:function(a,b){var u,t=a.x,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.iK(b,t,"refract")
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
lF:function(a,b,c){var u,t,s,r,q,p,o=b.b
if(o<=0)return
u=b.a
t="barLight"+H.e(u)
s=A.el(t)
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
c.a=r+"\n"}r=[P.t]
q=H.b([],r)
q.push("lit.color")
if(u)q.push("attenuation")
u=c.a+="   return "+C.a.q(q," * ")+";\n"
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
u=c.a+="      highLight = intensity*("+C.a.q(p," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.a.q(q," + ")+");\n"
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
lH:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.e(u)
s=A.el(t)
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
c.a+="      highLight = intensity*("+C.a.q(m," + ")+");\n"}else c.a+="   highLight = "+C.a.q(m," + ")+";\n"
o.push("highLight")}r=c.a+="   return lit.color*("+C.a.q(o," + ")+");\n"
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
lM:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.e(u)
s=A.el(t)
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
c.a=r+"\n"}r=[P.t]
l=H.b([],r)
l.push("lit.color")
if(o)l.push("attenuation")
if(u)l.push("textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.a.q(l," * ")+";\n"
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
r=c.a+="      highLight = intensity*("+C.a.q(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.a.q(l," + ")+");\n"
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
lQ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.e(u)
s=A.el(t)
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
c.a=u+"\n"}u=[P.t]
j=H.b([],u)
if(n)j.push("attenuation")
if(o)j.push("scale")
if(m)j.push("texture2D(txt2D, txtLoc).rgb")
else j.push("vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.a.q(j," * ")+";\n"
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
u=c.a+="      highLight = intensity*("+C.a.q(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.a.q(j," + ")+");\n"
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
lK:function(a,b){var u,t
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
u=b.a+="   return "+C.a.q(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
lR:function(a){var u,t,s,r,q,p,o,n,m,l="   lightAccum += all",k="precision mediump float;\n\n",j="precision mediump float;\n\nvarying vec3 normalVec;\n",i=new P.ap("")
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
A.lI(a,i)
A.lE(a,i)
A.lG(a,i)
A.lJ(a,i)
A.lP(a,i)
t=a.db
if(t){r=i.a+="// === Environmental ===\n"
r+="\n"
i.a=r
r+="uniform samplerCube envSampler;\n"
i.a=r
i.a=r+"\n"
A.lN(a,i)
A.lO(a,i)}A.lL(a,i)
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
if(r){for(q=a.z,p=q.length,n=0;n<q.length;q.length===p||(0,H.n)(q),++n)A.lF(a,q[n],i)
for(q=a.Q,p=q.length,n=0;n<q.length;q.length===p||(0,H.n)(q),++n)A.lH(a,q[n],i)
for(q=a.ch,p=q.length,n=0;n<q.length;q.length===p||(0,H.n)(q),++n)A.lM(a,q[n],i)
for(q=a.cx,p=q.length,n=0;n<q.length;q.length===p||(0,H.n)(q),++n)A.lQ(a,q[n],i)
A.lK(a,i)}q=i.a+="// === Main ===\n"
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
for(u=a.z,t=u.length,n=0;n<u.length;u.length===t||(0,H.n)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.f(r,0)
i.a+=l+(r[0].toUpperCase()+C.d.aC(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,n=0;n<u.length;u.length===t||(0,H.n)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.f(r,0)
i.a+=l+(r[0].toUpperCase()+C.d.aC(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,n=0;n<u.length;u.length===t||(0,H.n)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.f(r,0)
i.a+=l+(r[0].toUpperCase()+C.d.aC(r,1))+"Values(norm);\n"}for(u=a.cx,t=u.length,n=0;n<u.length;u.length===t||(0,H.n)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.f(r,0)
i.a+=l+(r[0].toUpperCase()+C.d.aC(r,1))+"Values(norm);\n"}if(a.cy<=0)i.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
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
u=i.a+="   vec4 objClr = vec4("+C.a.q(m," + ")+", alpha);\n"
if(s)u=i.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
i.a=u
u=i.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
lS:function(a,b){var u,t,s
if(!a.ry)return
u=b.a+="struct BendingValue\n"
u+="{\n"
b.a=u
u+="   mat4 mat;\n"
b.a=u
u+="};\n"
b.a=u
b.a=u+"uniform int bendMatCount;\n"
u=b.a+="uniform BendingValue bendValues["+a.be+"];\n"
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
lU:function(a,b){var u
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
lT:function(a,b){var u
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
lW:function(a,b){var u,t
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
lX:function(a,b){var u,t
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
lV:function(a,b){var u
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
lY:function(a,b){var u
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
el:function(a){if(0>=a.length)return H.f(a,0)
return a[0].toUpperCase()+C.d.aC(a,1)},
lj:function(a,b){var u,t,s,r
for(u=0,t="precision mediump float;\n\nuniform vec4 backClr;\n\nvarying vec2 pos;\n\nuniform int txtCount;\n";u<a;++u)t=t+("uniform sampler2D txt"+u+";\n")+("uniform mat4 clrMat"+u+";\n")+("uniform vec2 srcLoc"+u+";\n")+("uniform vec2 srcSize"+u+";\n")+("uniform vec2 destLoc"+u+";\n")+("uniform vec2 destSize"+u+";\n")+("uniform int flip"+u+";\n")
t+="\nvec4 clrAccum;\n"
s=b===C.D
t=(s||b===C.h?t+"float colorCount;\n":t)+"\nvoid layout(sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      color = clamp(color, vec4(0.0), vec4(1.0));\n"
if(b===C.C)t+="      clrAccum += color;\n"
else if(b===C.i)t+="      clrAccum = mix(clrAccum, color, color.a);\n"
else t=s?t+"      clrAccum += color;\n      colorCount += 1.0;\n":t+"      clrAccum = color;\n      colorCount = 1.0;\n"
t+="   }\n}\n\nvoid layoutAll()\n{\n"
r=b===C.h
if(r)for(u=a-1;u>=0;--u)t=t+("   if(txtCount > "+u+")\n")+"   {\n"+("     layout(txt"+u+", clrMat"+u+", srcLoc"+u+", srcSize"+u+", destLoc"+u+", destSize"+u+", flip"+u+");\n")+"     if(colorCount > 0.0) return;\n   }\n"
else for(u=0;u<a;++u)t=t+("   if(txtCount <= "+u+") return;\n")+("   layout(txt"+u+", clrMat"+u+", srcLoc"+u+", srcSize"+u+", destLoc"+u+", destSize"+u+", flip"+u+");\n")
t+="}\n\nvoid main()\n{\n   clrAccum = backClr;\n"
if(s)t+="   colorCount = 1.0;\n"
else if(r)t+="   colorCount = 0.0;\n"
t+="   layoutAll();\n"
t=(s?t+"   clrAccum = clrAccum/colorCount;\n":t)+"   if(clrAccum.a <= 0.0) discard;\n   gl_FragColor = clrAccum;\n}\n"
return t.charCodeAt(0)==0?t:t},
li:function(a,b,c){var u="TextureLayout_"+a+"_"+C.c.i(b.a),t=new A.hD(c,u)
t.aR(c,u)
t.dP(a,b,c)
return t},
ji:function(a,b,c,d,e){var u=new A.hP(a,c,e)
u.f=d
P.kV(d,0,P.v)
return u},
cu:function cu(a,b,c){this.a=a
this.b=b
this.c=c},
er:function er(a){this.a=a},
U:function U(a,b,c){this.a=a
this.b=b
this.c=c},
eQ:function eQ(a,b){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
f9:function f9(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fa:function fa(a,b){this.a=a
this.b=b},
ft:function ft(a,b){var _=this
_.d_=_.ho=_.bf=_.au=_.be=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.hw=_.hv=_.hu=_.bW=_.bV=_.bU=_.bT=_.bS=_.bR=_.bQ=_.bP=_.dc=_.ht=_.da=_.d9=_.hs=_.d8=_.d7=_.d6=_.hr=_.d5=_.d4=_.d3=_.hq=_.d2=_.d1=_.hp=_.d0=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cv:function cv(a,b){this.a=a
this.b=b},
cC:function cC(a,b){this.a=a
this.b=b},
d0:function d0(a,b){this.a=a
this.b=b},
d7:function d7(a,b){this.a=a
this.b=b},
fw:function fw(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.be=b3
_.au=b4
_.bf=b5},
c5:function c5(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
c6:function c6(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
c7:function c7(a,b,c,d,e,f,g,h,i,j){var _=this
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
c8:function c8(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
d4:function d4(){},
bj:function bj(a,b){this.a=a
this.b=b},
hl:function hl(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hD:function hD(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dj:function dj(){},
hT:function hT(a){this.a=a},
ae:function ae(a,b,c){this.a=a
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
hP:function hP(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
L:function L(a,b,c){this.a=a
this.c=b
this.d=c},
at:function at(a,b,c){this.a=a
this.c=b
this.d=c},
D:function D(a,b,c){this.a=a
this.c=b
this.d=c},
ba:function ba(a,b,c){this.a=a
this.c=b
this.d=c},
hU:function hU(a,b,c){this.a=a
this.c=b
this.d=c},
bu:function bu(a,b,c){this.a=a
this.c=b
this.d=c},
O:function O(a,b,c){this.a=a
this.c=b
this.d=c},
af:function af(a,b,c){this.a=a
this.c=b
this.d=c},
R:function R(a,b,c){this.a=a
this.c=b
this.d=c}},F={
iJ:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
ck:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.A(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.A(u+a3,t+a1,s+a2)
q=new V.A(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.A(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.iJ(i)
l=F.iJ(h)
k=F.mx(d,a0,new F.iI(j,F.iJ(g),F.iJ(f),l,m,c),b)
if(k!=null)a.fO(k)},
mx:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.jf()
t=H.b([],[F.bw])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.i4(g,g,new V.a3(p,0,0,1),g,g,new V.Y(r,1),g,g,0)
q.l(0,o)
c.$3(o,r,0)
t.push(o.bM(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.i4(g,g,new V.a3(j,i,h,1),g,g,new V.Y(r,m),g,g,0)
k.l(0,o)
c.$3(o,r,n)
t.push(o.bM(d))}}u.d.fw(a+1,b+1,t)
return u},
bM:function(a,b,c){var u=new F.aX(),t=a.a
if(t==null)H.o(P.m("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.o(P.m("May not create a face with vertices attached to different shapes."))
u.a=a
a.d.b.push(u)
u.b=b
b.d.c.push(u)
u.c=c
c.d.d.push(u)
u.a.a.d.b.push(u)
u.a.a.a7()
return u},
kS:function(a,b){var u=new F.bR(),t=a.a
if(t==null)H.o(P.m("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.o(P.m("May not create a line with vertices attached to different shapes."))
u.a=a
a.c.b.push(u)
u.b=b
b.c.c.push(u)
u.a.a.c.b.push(u)
u.a.a.a7()
return u},
jf:function(){var u=new F.he(),t=new F.i5(u)
t.b=!1
t.c=H.b([],[F.bw])
u.a=t
t=new F.hh(u)
t.b=H.b([],[F.c0])
u.b=t
t=new F.hg(u)
t.b=H.b([],[F.bR])
u.c=t
t=new F.hf(u)
t.b=H.b([],[F.aX])
u.d=t
u.e=null
return u},
i4:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.bw(),r=new F.ia()
r.b=H.b([],[F.c0])
s.b=r
r=new F.i9()
u=[F.bR]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.i6()
u=[F.aX]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.kv()
s.e=0
r=$.T()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aS().a)!==0?e:t
s.x=(u&$.aR().a)!==0?b:t
s.y=(u&$.ax().a)!==0?f:t
s.z=(u&$.aT().a)!==0?g:t
s.Q=(u&$.kw().a)!==0?c:t
s.ch=(u&$.bE().a)!==0?i:0
s.cx=(u&$.aQ().a)!==0?a:t
return s},
iI:function iI(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aX:function aX(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bR:function bR(){this.b=this.a=null},
c0:function c0(){this.a=null},
he:function he(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hf:function hf(a){this.a=a
this.b=null},
hg:function hg(a){this.a=a
this.b=null},
hh:function hh(a){this.a=a
this.b=null},
bw:function bw(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ic:function ic(a){this.a=a},
ib:function ib(a){this.a=a},
i5:function i5(a){this.a=a
this.c=this.b=null},
i6:function i6(){this.d=this.c=this.b=null},
i7:function i7(a,b){this.a=a
this.b=b},
i8:function i8(a,b){this.a=a
this.b=b},
i9:function i9(){this.c=this.b=null},
ia:function ia(){this.b=null}},T={
jS:function(a){var u=new T.hB()
u.a=0
u.b=a
u.d=u.c=!1
u.x=u.r=u.f=u.e=0
return u},
bs:function bs(){},
hA:function hA(){},
hB:function hB(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hC:function hC(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hE:function hE(a){var _=this
_.a=a
_.e=_.d=_.c=null},
hF:function hF(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},N={
kd:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="testCanvas",b1=null,b2="modifiers",b3=V.le("Test 028"),b4=W.j2()
b4.className="pageLargeCanvas"
b4.id=b0
b3.a.appendChild(b4)
u=[P.t]
b3.cN(H.b(["Test of a Gaussian blur cover pass. ","Notice the depth of field causing things further away to be blurry."],u))
b3.cN(H.b(["\xab[Back to Tests|../]"],u))
t=document.getElementById(b0)
if(t==null)H.o(P.m("Failed to find an element with the identifier, testCanvas."))
s=E.lk(t,!0,!0,!0,!1)
r=new U.bN()
r.b6(U.a4)
r.aB(r.geg(),r.geZ())
r.e=null
r.f=V.b4()
r.r=0
b3=s.x
u=new U.dn()
q=U.j3()
q.sca(0,!0)
q.sc1(6.283185307179586)
q.sc3(0)
q.sac(0,0)
q.sc2(100)
q.sS(0)
q.sbN(0.5)
u.b=q
p=u.gaH()
q.gm().l(0,p)
q=U.j3()
q.sca(0,!0)
q.sc1(6.283185307179586)
q.sc3(0)
q.sac(0,0)
q.sc2(100)
q.sS(0)
q.sbN(0.5)
u.c=q
q.gm().l(0,p)
u.d=null
u.r=u.f=u.e=!1
u.y=u.x=2.5
u.Q=4
u.ch=u.cx=!1
u.db=u.cy=0
u.dx=null
u.dy=0
u.fx=u.fr=null
o=new X.ab(!1,!1,!1)
n=u.d
u.d=o
q=new D.q(b2,n,o)
q.b=!0
u.M(q)
q=u.f
if(q!==!1){u.f=!1
q=new D.q("invertX",q,!1)
q.b=!0
u.M(q)}q=u.r
if(q!==!1){u.r=!1
q=new D.q("invertY",q,!1)
q.b=!0
u.M(q)}u.aV(b3)
r.l(0,u)
b3=s.x
u=new U.dm()
q=U.j3()
q.sca(0,!0)
q.sc1(6.283185307179586)
q.sc3(0)
q.sac(0,0)
q.sc2(100)
q.sS(0)
q.sbN(0.2)
u.b=q
q.gm().l(0,u.gaH())
u.c=null
u.d=!1
u.e=2.5
u.r=4
u.x=u.y=!1
u.z=0
u.Q=null
u.ch=0
u.cy=u.cx=null
o=new X.ab(!0,!1,!1)
n=u.c
u.c=o
q=new D.q(b2,n,o)
q.b=!0
u.M(q)
u.aV(b3)
r.l(0,u)
b3=s.x
u=new U.dp()
u.c=0.01
u.e=u.d=0
o=new X.ab(!1,!1,!1)
u.b=o
q=new D.q(b2,b1,o)
q.b=!0
u.M(q)
u.aV(b3)
r.l(0,u)
r.l(0,U.j4(V.l_(0,0,5)))
m=X.jL(r)
l=F.jf()
F.ck(l,b1,b1,1,1,1,0,0,1)
F.ck(l,b1,b1,1,1,0,1,0,3)
F.ck(l,b1,b1,1,1,0,0,1,2)
F.ck(l,b1,b1,1,1,-1,0,0,0)
F.ck(l,b1,b1,1,1,0,-1,0,0)
F.ck(l,b1,b1,1,1,0,0,-1,3)
l.at()
k=E.eY(l)
j=E.eY(b1)
for(i=-1.6;i<=1.7;i+=0.8)for(h=-1.6;h<=1.7;h+=0.8)for(g=-1.6;g<=1.7;g+=0.8){f=new V.aa(1,0,0,i,0,1,0,h,0,0,1,g,0,0,0,1).u(0,new V.aa(0.2,0,0,0,0,0.2,0,0,0,0,0.2,0,0,0,0,1))
e=E.eY(b1)
b3=new U.bK()
b3.sU(0,f)
e.sdi(b3)
b3=e.y
u=[H.aw(b3,0)]
if(b3.b9(H.b([k],u))){q=b3.a
d=q.length
q.push(k)
u=H.b([k],u)
b3=b3.c
if(b3!=null)b3.$2(d,u)}b3=j.y
u=[H.aw(b3,0)]
if(b3.b9(H.b([e],u))){q=b3.a
d=q.length
q.push(e)
u=H.b([e],u)
b3=b3.c
if(b3!=null)b3.$2(d,u)}}c=s.f.df("../resources/diceColor")
b=new O.cU()
b3=O.eD(V.aa)
b.e=b3
b3.aB(b.gek(),b.gem())
b3=new O.al(b,"emission")
b3.c=new A.U(!1,!1,!1)
b3.f=new V.N(0,0,0)
b.f=b3
b3=new O.al(b,"ambient")
b3.c=new A.U(!1,!1,!1)
b3.f=new V.N(0,0,0)
b.r=b3
b3=new O.al(b,"diffuse")
b3.c=new A.U(!1,!1,!1)
b3.f=new V.N(0,0,0)
b.x=b3
b3=new O.al(b,"invDiffuse")
b3.c=new A.U(!1,!1,!1)
b3.f=new V.N(0,0,0)
b.y=b3
b3=new O.fz(b,"specular")
b3.c=new A.U(!1,!1,!1)
b3.f=new V.N(0,0,0)
b3.ch=100
b.z=b3
b3=new O.fv(b,"bump")
b3.c=new A.U(!1,!1,!1)
b.Q=b3
b.ch=null
b3=new O.al(b,"reflect")
b3.c=new A.U(!1,!1,!1)
b3.f=new V.N(0,0,0)
b.cx=b3
b3=new O.fy(b,"refract")
b3.c=new A.U(!1,!1,!1)
b3.f=new V.N(0,0,0)
b3.ch=1
b.cy=b3
b3=new O.fu(b,"alpha")
b3.c=new A.U(!1,!1,!1)
b3.f=1
b.db=b3
b3=new D.cQ()
b3.b6(D.a_)
b3.e=H.b([],[D.ex])
b3.f=H.b([],[D.bk])
b3.r=H.b([],[D.h1])
b3.x=H.b([],[D.ho])
b3.z=b3.y=null
b3.cc(b3.gei(),b3.geX(),b3.gf0())
b.dx=b3
u=new O.fx()
u.b=new V.a3(0,0,0,0)
u.c=1
u.d=10
u.e=!1
b.dy=u
u=b3.y
b3=u==null?b3.y=D.z():u
b3.l(0,b.gfg())
b3=b.dx
u=b3.z
b3=u==null?b3.z=D.z():u
b3.l(0,b.gY())
b.fr=null
b3=b.dx
u=U.j4(V.jJ(-1,-1,-1,b1))
b3.l(0,D.jA(new V.N(1,0.9,0.9),u))
b3=b.dx
u=U.j4(V.jJ(1,1,2,b1))
b3.l(0,D.jA(new V.N(0.2,0.2,0.35),u))
b3=b.r
b3.saL(0,new V.N(0.2,0.2,0.2))
b.r.sb3(c)
b3=b.x
b3.saL(0,new V.N(0.8,0.8,0.8))
b.x.sb3(c)
b3=b.z
b3.saL(0,new V.N(0.7,0.7,0.7))
b3=b.z
b3.bC(new A.U(!0,!1,b3.c.c))
b3.cH(10)
b.Q.sb3(s.f.df("../resources/diceBumpMap"))
a=X.j_(!0,1,1,!1)
b3=s.f.dg("../resources/maskonaive",".jpg")
a0=M.eI(b1,b1)
u=new O.d5()
u.b=1.0471975511965976
u.d=new V.N(1,1,1)
n=u.c
u.c=b3
b3.gm().l(0,u.gY())
b3=new D.q("boxTexture",n,u.c)
b3.b=!0
u.p(b3)
a0.saz(u)
a0.saJ(m)
a0.san(0,a)
a1=M.jC()
a1.saJ(m)
a1.san(0,a)
a1.saz(b)
a1.e.l(0,j)
a2=X.j_(!0,0.5,0.5,!0)
a3=M.jC()
a3.saJ(m)
a3.san(0,a2)
b3=new O.eP()
b3.b=1
b3.c=10
b3.f=b3.e=b3.d=!1
if(!(Math.abs(-2.5)<$.w().a)){b3.b=3.5
u=new D.q("start",1,3.5)
u.b=!0
b3.p(u)}u=b3.c
if(!(Math.abs(u-5.5)<$.w().a)){b3.c=5.5
u=new D.q("stop",u,5.5)
u.b=!0
b3.p(u)}a3.saz(b3)
a3.e.l(0,j)
b3=new V.bv(-1,0,0,1)
u=a.ch
q=a2.ch
a4=new M.cI()
a4.a=!0
a4.c=X.j_(!0,1,1,!1)
p=O.jD(b1,b1)
a5=a4.gT()
p.gm().l(0,a5)
a4.d=p
a4.e=M.eI(a4.c,p)
p=a4.c.ch
a6=$.k_
p=O.jD(a6==null?$.k_=new V.E(0,1):a6,p)
p.gm().l(0,a5)
a4.f=p
a4.r=M.eI(b1,p)
a4.d.sbH(0)
a4.f.sbH(0)
a4.d.scW(u)
a4.d.sbG(q)
a4.f.sbG(q)
a4.d.sc8(b1)
a4.f.sc8(b1)
a4.d.sbF(b3)
a4.f.sbF(b3)
a4.r.san(0,b1)
a7=new O.dc()
a7.a=new V.a3(0,0,0,0)
b3=O.eD(O.b7)
a7.c=b3
b3.aB(a7.geB(),a7.geD())
a7.d=0
a7.e=null
a7.r=a7.f=C.i
a8=new V.a3(0,0,0,0)
if(!a7.a.n(0,a8)){n=a7.a
a7.a=a8
b3=new D.q("backColor",n,a8)
b3.b=!0
a7.p(b3)}a7.scS(C.i)
a7.scS(C.h)
b3=a7.c
u=a2.ch
b3.l(0,O.jT(V.c3(0,0.8,0.2,0.2),u))
u=a7.c
b3=a.ch
u.l(0,O.jT(V.c3(0,0.6,0.2,0.2),b3))
a9=M.eI(b1,b1)
a9.san(0,X.j7(!1,b1))
a9.saz(a7)
b3=M.ac
u=H.b([a0,a1,a3,a4,a9],[b3])
q=new M.cz()
q.b6(b3)
q.e=!0
q.f=!1
q.r=null
q.aB(q.gf2(),q.gf4())
q.bc(0,u)
b3=s.d
if(b3!==q){if(b3!=null)b3.gm().N(0,s.gco())
s.d=q
q.gm().l(0,s.gco())
s.cp()}V.mu(s)}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T,N]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jb.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gI:function(a){return H.c1(a)},
i:function(a){return"Instance of '"+H.e(H.c2(a))+"'"}}
J.fg.prototype={
i:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$ibe:1}
J.cN.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gI:function(a){return 0}}
J.cO.prototype={
gI:function(a){return 0},
i:function(a){return String(a)}}
J.h_.prototype={}
J.c9.prototype={}
J.b1.prototype={
i:function(a){var u=a[$.kk()]
if(u==null)return this.dJ(a)
return"JavaScript function for "+H.e(J.a7(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.b0.prototype={
h4:function(a,b){var u
if(!!a.fixed$length)H.o(P.x("removeAt"))
u=a.length
if(b>=u)throw H.c(P.d1(b,null))
return a.splice(b,1)[0]},
N:function(a,b){var u
if(!!a.fixed$length)H.o(P.x("remove"))
for(u=0;u<a.length;++u)if(J.C(a[u],b)){a.splice(u,1)
return!0}return!1},
bc:function(a,b){var u,t
if(!!a.fixed$length)H.o(P.x("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.n)(b),++t)a.push(b[t])},
J:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.c(P.bJ(a))}},
q:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.f(r,u)
r[u]=t}return r.join(b)},
fM:function(a){return this.q(a,"")},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
ci:function(a,b,c){var u=a.length
if(b>u)throw H.c(P.aI(b,0,u,"start",null))
if(c==null)c=u
else if(c<b||c>u)throw H.c(P.aI(c,b,u,"end",null))
if(b===c)return H.b([],[H.aw(a,0)])
return H.b(a.slice(b,c),[H.aw(a,0)])},
cg:function(a,b){return this.ci(a,b,null)},
gbZ:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.kO())},
aQ:function(a,b){if(!!a.immutable$list)H.o(P.x("sort"))
H.lh(a,b==null?J.lB():b)},
dG:function(a){return this.aQ(a,null)},
a_:function(a,b){var u
for(u=0;u<a.length;++u)if(J.C(a[u],b))return!0
return!1},
i:function(a){return P.j8(a,"[","]")},
gP:function(a){return new J.Z(a,a.length)},
gI:function(a){return H.c1(a)},
gj:function(a){return a.length},
sj:function(a,b){var u="newLength"
if(!!a.fixed$length)H.o(P.x("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.iZ(b,u,null))
if(b<0)throw H.c(P.aI(b,0,null,u,null))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bC(a,b))
return a[b]},
k:function(a,b,c){if(!!a.immutable$list)H.o(P.x("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bC(a,b))
a[b]=c},
$ip:1,
$ij:1}
J.ja.prototype={}
J.Z.prototype={
gG:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.n(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bQ.prototype={
aM:function(a,b){var u
if(typeof b!=="number")throw H.c(H.aO(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbg(b)
if(this.gbg(a)===u)return 0
if(this.gbg(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbg:function(a){return a===0?1/a<0:a<0},
hc:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.x(""+a+".toInt()"))},
bX:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.x(""+a+".floor()"))},
W:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.x(""+a+".round()"))},
du:function(a,b){var u
if(b>20)throw H.c(P.aI(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbg(a))return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gI:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
dA:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
dK:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cJ(a,b)},
a2:function(a,b){return(a|0)===a?a/b|0:this.cJ(a,b)},
cJ:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.x("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
ba:function(a,b){var u
if(a>0)u=this.fm(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
fm:function(a,b){return b>31?0:a>>>b},
$iI:1,
$ia6:1}
J.cM.prototype={$iv:1}
J.cL.prototype={}
J.bn.prototype={
bL:function(a,b){if(b<0)throw H.c(H.bC(a,b))
if(b>=a.length)H.o(H.bC(a,b))
return a.charCodeAt(b)},
bm:function(a,b){if(b>=a.length)throw H.c(H.bC(a,b))
return a.charCodeAt(b)},
B:function(a,b){if(typeof b!=="string")throw H.c(P.iZ(b,null,null))
return a+b},
cj:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.d1(b,null))
if(b>c)throw H.c(P.d1(b,null))
if(c>a.length)throw H.c(P.d1(c,null))
return a.substring(b,c)},
aC:function(a,b){return this.cj(a,b,null)},
u:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.A)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ah:function(a,b){var u=b-a.length
if(u<=0)return a
return this.u(" ",u)+a},
aM:function(a,b){var u
if(typeof b!=="string")throw H.c(H.aO(b))
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
gj:function(a){return a.length},
$it:1}
H.M.prototype={
gj:function(a){return this.a.length},
h:function(a,b){return C.d.bL(this.a,b)},
$ap:function(){return[P.v]},
$ar:function(){return[P.v]},
$aj:function(){return[P.v]}}
H.p.prototype={}
H.bS.prototype={
gG:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=J.ek(s),q=r.gj(s)
if(t.b!=q)throw H.c(P.bJ(s))
u=t.c
if(typeof q!=="number")return H.u(q)
if(u>=q){t.d=null
return!1}t.d=r.E(s,u);++t.c
return!0}}
H.bU.prototype={
gP:function(a){return new H.cS(J.bf(this.a),this.b)},
gj:function(a){return J.bg(this.a)},
E:function(a,b){return this.b.$1(J.iY(this.a,b))},
$aj:function(a,b){return[b]}}
H.eW.prototype={$ip:1,
$ap:function(a,b){return[b]}}
H.cS.prototype={
v:function(){var u=this,t=u.b
if(t.v()){u.a=u.c.$1(t.gG(t))
return!0}u.a=null
return!1},
gG:function(a){return this.a}}
H.ie.prototype={
gP:function(a){return new H.ig(J.bf(this.a),this.b)}}
H.ig.prototype={
v:function(){var u,t
for(u=this.a,t=this.b;u.v();)if(t.$1(u.gG(u)))return!0
return!1},
gG:function(a){var u=this.a
return u.gG(u)}}
H.cG.prototype={}
H.hX.prototype={
k:function(a,b,c){throw H.c(P.x("Cannot modify an unmodifiable list"))}}
H.dk.prototype={}
H.hN.prototype={
ag:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.fW.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fj.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.hW.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.iX.prototype={
$1:function(a){if(!!J.X(a).$ibl)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:8}
H.dZ.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bI.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.cp(t==null?"unknown":t)+"'"},
ghh:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hx.prototype={}
H.hr.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cp(u)+"'"}}
H.bG.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bG))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gI:function(a){var u,t=this.c
if(t==null)u=H.c1(this.a)
else u=typeof t!=="object"?J.bF(t):H.c1(t)
return(u^H.c1(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.c2(u))+"'")}}
H.eA.prototype={
i:function(a){return this.a}}
H.hb.prototype={
i:function(a){return"RuntimeError: "+H.e(this.a)}}
H.H.prototype={
gj:function(a){return this.a},
gav:function(a){return new H.bp(this,[H.aw(this,0)])},
ghg:function(a){var u=this,t=H.aw(u,0)
return H.kW(new H.bp(u,[t]),new H.fi(u),t,H.aw(u,1))},
fC:function(a,b){var u=this.b
if(u==null)return!1
return this.e3(u,b)},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.b7(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.b7(r,b)
s=t==null?null:t.b
return s}else return q.fL(b)},
fL:function(a){var u,t,s=this.d
if(s==null)return
u=this.cA(s,J.bF(a)&0x3ffffff)
t=this.dd(u,a)
if(t<0)return
return u[t].b},
k:function(a,b,c){var u,t,s,r,q,p,o=this
if(typeof b==="string"){u=o.b
o.cr(u==null?o.b=o.bz():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.cr(t==null?o.c=o.bz():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bz()
r=J.bF(b)&0x3ffffff
q=o.cA(s,r)
if(q==null)o.bD(s,r,[o.bA(b,c)])
else{p=o.dd(q,b)
if(p>=0)q[p].b=c
else q.push(o.bA(b,c))}}},
J:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.c(P.bJ(u))
t=t.c}},
cr:function(a,b,c){var u=this.b7(a,b)
if(u==null)this.bD(a,b,this.bA(b,c))
else u.b=c},
bA:function(a,b){var u=this,t=new H.fm(a,b)
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
dd:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.C(a[t].a,b))return t
return-1},
i:function(a){return P.jG(this)},
b7:function(a,b){return a[b]},
cA:function(a,b){return a[b]},
bD:function(a,b,c){a[b]=c},
e6:function(a,b){delete a[b]},
e3:function(a,b){return this.b7(a,b)!=null},
bz:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bD(t,u,t)
this.e6(t,u)
return t}}
H.fi.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.aw(u,1),args:[H.aw(u,0)]}}}
H.fm.prototype={}
H.bp.prototype={
gj:function(a){return this.a.a},
gP:function(a){var u=this.a,t=new H.fn(u,u.r)
t.c=u.e
return t}}
H.fn.prototype={
gG:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bJ(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.iQ.prototype={
$1:function(a){return this.a(a)},
$S:8}
H.iR.prototype={
$2:function(a,b){return this.a(a,b)}}
H.iS.prototype={
$1:function(a){return this.a(a)}}
H.fh.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.c_.prototype={}
H.cV.prototype={
gj:function(a){return a.length},
$iy:1,
$ay:function(){}}
H.bZ.prototype={
h:function(a,b){H.av(b,a,a.length)
return a[b]},
k:function(a,b,c){H.av(b,a,a.length)
a[b]=c},
$ip:1,
$ap:function(){return[P.I]},
$ar:function(){return[P.I]},
$ij:1,
$aj:function(){return[P.I]}}
H.cW.prototype={
k:function(a,b,c){H.av(b,a,a.length)
a[b]=c},
$ip:1,
$ap:function(){return[P.v]},
$ar:function(){return[P.v]},
$ij:1,
$aj:function(){return[P.v]}}
H.fQ.prototype={
h:function(a,b){H.av(b,a,a.length)
return a[b]}}
H.fR.prototype={
h:function(a,b){H.av(b,a,a.length)
return a[b]}}
H.fS.prototype={
h:function(a,b){H.av(b,a,a.length)
return a[b]}}
H.fT.prototype={
h:function(a,b){H.av(b,a,a.length)
return a[b]}}
H.fU.prototype={
h:function(a,b){H.av(b,a,a.length)
return a[b]}}
H.cX.prototype={
gj:function(a){return a.length},
h:function(a,b){H.av(b,a,a.length)
return a[b]}}
H.fV.prototype={
gj:function(a){return a.length},
h:function(a,b){H.av(b,a,a.length)
return a[b]}}
H.cb.prototype={}
H.cc.prototype={}
H.cd.prototype={}
H.ce.prototype={}
P.ii.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:17}
P.ih.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.ij.prototype={
$0:function(){this.a.$0()}}
P.ik.prototype={
$0:function(){this.a.$0()}}
P.e4.prototype={
dS:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bB(new P.iF(this,b),0),a)
else throw H.c(P.x("`setTimeout()` not found."))},
dT:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bB(new P.iE(this,a,Date.now(),b),0),a)
else throw H.c(P.x("Periodic timer."))},
$ide:1}
P.iF.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.iE.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.dK(u,q)}s.c=r
t.d.$1(s)}}
P.bx.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.e(this.a)+")"}}
P.ch.prototype={
gG:function(a){var u=this.c
if(u==null)return this.b
return u.gG(u)},
v:function(){var u,t,s,r,q=this
for(;!0;){u=q.c
if(u!=null)if(u.v())return!0
else q.c=null
t=function(a,b,c){var p,o=b
while(true)try{return a(o,p)}catch(n){p=n
o=c}}(q.a,0,1)
if(t instanceof P.bx){s=t.b
if(s===2){u=q.d
if(u==null||u.length===0){q.b=null
return!1}if(0>=u.length)return H.f(u,-1)
q.a=u.pop()
continue}else{u=t.a
if(s===3)throw u
else{r=J.bf(u)
if(!!r.$ich){u=q.d
if(u==null)u=q.d=[]
u.push(q.a)
q.a=r.a
continue}else{q.c=r
continue}}}}else{q.b=t
return!0}}return!1}}
P.iD.prototype={
gP:function(a){return new P.ch(this.a())}}
P.ds.prototype={}
P.da.prototype={}
P.hu.prototype={}
P.de.prototype={}
P.iH.prototype={}
P.iM.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.cZ():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u}}
P.ix.prototype={
h8:function(a){var u,t,s,r=null
try{if(C.e===$.ag){a.$0()
return}P.m_(r,r,this,a)}catch(s){u=H.em(s)
t=H.jr(s)
P.k6(r,r,this,u,t)}},
h9:function(a,b){var u,t,s,r=null
try{if(C.e===$.ag){a.$1(b)
return}P.m0(r,r,this,a,b)}catch(s){u=H.em(s)
t=H.jr(s)
P.k6(r,r,this,u,t)}},
ha:function(a,b){return this.h9(a,b,null)},
fA:function(a){return new P.iy(this,a)},
cR:function(a,b){return new P.iz(this,a,b)}}
P.iy.prototype={
$0:function(){return this.a.h8(this.b)}}
P.iz.prototype={
$1:function(a){return this.a.ha(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.iu.prototype={
gP:function(a){var u=new P.dH(this,this.r)
u.c=this.e
return u},
gj:function(a){return this.a},
a_:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.e1(b)
return t}},
e1:function(a){var u=this.d
if(u==null)return!1
return this.bq(this.cz(u,a),a)>=0},
l:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cs(u==null?s.b=P.jl():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cs(t==null?s.c=P.jl():t,b)}else return s.dW(0,b)},
dW:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.jl()
u=s.ct(b)
t=r[u]
if(t==null)r[u]=[s.bn(b)]
else{if(s.bq(t,b)>=0)return!1
t.push(s.bn(b))}return!0},
N:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fd(this.c,b)
else return this.fc(0,b)},
fc:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cz(r,b)
t=s.bq(u,b)
if(t<0)return!1
s.cL(u.splice(t,1)[0])
return!0},
cs:function(a,b){if(a[b]!=null)return!1
a[b]=this.bn(b)
return!0},
fd:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.cL(u)
delete a[b]
return!0},
cB:function(){this.r=1073741823&this.r+1},
bn:function(a){var u,t=this,s=new P.iv(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cB()
return s},
cL:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cB()},
ct:function(a){return J.bF(a)&1073741823},
cz:function(a,b){return a[this.ct(b)]},
bq:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.C(a[t].a,b))return t
return-1}}
P.iv.prototype={}
P.dH.prototype={
gG:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bJ(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fe.prototype={}
P.fo.prototype={$ip:1,$ij:1}
P.r.prototype={
gP:function(a){return new H.bS(a,this.gj(a))},
E:function(a,b){return this.h(a,b)},
he:function(a,b){var u,t,s=this,r=H.b([],[H.mi(s,a,"r",0)])
C.a.sj(r,s.gj(a))
u=0
while(!0){t=s.gj(a)
if(typeof t!=="number")return H.u(t)
if(!(u<t))break
t=s.h(a,u)
if(u>=r.length)return H.f(r,u)
r[u]=t;++u}return r},
hd:function(a){return this.he(a,!0)},
i:function(a){return P.j8(a,"[","]")}}
P.fr.prototype={}
P.fs.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:9}
P.a0.prototype={
J:function(a,b){var u,t
for(u=J.bf(this.gav(a));u.v();){t=u.gG(u)
b.$2(t,this.h(a,t))}},
gj:function(a){return J.bg(this.gav(a))},
i:function(a){return P.jG(a)}}
P.iA.prototype={
i:function(a){return P.j8(this,"{","}")},
E:function(a,b){var u,t,s
P.jQ(b,"index")
for(u=P.lv(this,this.r),t=0;u.v();){s=u.d
if(b===t)return s;++t}throw H.c(P.K(b,this,"index",null,t))},
$ip:1,
$ij:1}
P.dI.prototype={}
P.eC.prototype={}
P.eH.prototype={}
P.eX.prototype={}
P.i_.prototype={}
P.i0.prototype={
fD:function(a){var u,t,s,r=P.je(0,null,a.length)
if(typeof r!=="number")return r.F()
u=r-0
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.iG(t)
if(s.e8(a,0,r)!==r)s.cM(C.d.bL(a,r-1),0)
return new Uint8Array(t.subarray(0,H.lz(0,s.b,t.length)))}}
P.iG.prototype={
cM:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
e8:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.d.bL(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.d.bm(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cM(r,C.d.bm(a,p)))s=p}else if(r<=2047){q=n.b
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
P.be.prototype={}
P.a9.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.a9&&this.a===b.a&&!0},
aM:function(a,b){return C.c.aM(this.a,b.a)},
gI:function(a){var u=this.a
return(u^C.c.ba(u,30))&1073741823},
i:function(a){var u=this,t=P.kK(H.l7(u)),s=P.cB(H.l5(u)),r=P.cB(H.l1(u)),q=P.cB(H.l2(u)),p=P.cB(H.l4(u)),o=P.cB(H.l6(u)),n=P.kL(H.l3(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.I.prototype={}
P.aV.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.aV&&this.a===b.a},
gI:function(a){return C.c.gI(this.a)},
aM:function(a,b){return C.c.aM(this.a,b.a)},
i:function(a){var u,t,s,r=new P.eV(),q=this.a
if(q<0)return"-"+new P.aV(0-q).i(0)
u=r.$1(C.c.a2(q,6e7)%60)
t=r.$1(C.c.a2(q,1e6)%60)
s=new P.eU().$1(q%1e6)
return""+C.c.a2(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
P.eU.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.eV.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bl.prototype={}
P.cZ.prototype={
i:function(a){return"Throw of null."}}
P.ah.prototype={
gbp:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbo:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbp()+o+u
if(!q.a)return t
s=q.gbo()
r=P.j6(q.b)
return t+s+": "+r}}
P.br.prototype={
gbp:function(){return"RangeError"},
gbo:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.fd.prototype={
gbp:function(){return"RangeError"},
gbo:function(){var u,t=this.b
if(typeof t!=="number")return t.aa()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gj:function(a){return this.f}}
P.hY.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.hV.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.hq.prototype={
i:function(a){return"Bad state: "+this.a}}
P.eG.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.j6(u)+"."}}
P.fZ.prototype={
i:function(a){return"Out of Memory"},
$ibl:1}
P.d8.prototype={
i:function(a){return"Stack Overflow"},
$ibl:1}
P.eN.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dA.prototype={
i:function(a){return"Exception: "+this.a}}
P.f7.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.d.cj(s,0,75)+"...":s
return t+"\n"+r}}
P.v.prototype={}
P.j.prototype={
gj:function(a){var u,t=this.gP(this)
for(u=0;t.v();)++u
return u},
E:function(a,b){var u,t,s
P.jQ(b,"index")
for(u=this.gP(this),t=0;u.v();){s=u.gG(u)
if(b===t)return s;++t}throw H.c(P.K(b,this,"index",null,t))},
i:function(a){return P.kN(this,"(",")")}}
P.ff.prototype={}
P.b3.prototype={$ip:1,$ij:1}
P.bT.prototype={}
P.b5.prototype={
gI:function(a){return P.a1.prototype.gI.call(this,this)},
i:function(a){return"null"}}
P.a6.prototype={}
P.a1.prototype={constructor:P.a1,$ia1:1,
n:function(a,b){return this===b},
gI:function(a){return H.c1(this)},
i:function(a){return"Instance of '"+H.e(H.c2(this))+"'"},
toString:function(){return this.i(this)}}
P.t.prototype={}
P.ap.prototype={
gj:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.l.prototype={}
W.en.prototype={
gj:function(a){return a.length}}
W.ep.prototype={
i:function(a){return String(a)}}
W.eq.prototype={
i:function(a){return String(a)}}
W.cw.prototype={}
W.bi.prototype={
cb:function(a,b,c){if(c!=null)return a.getContext(b,P.m9(c))
return a.getContext(b)},
dz:function(a,b){return this.cb(a,b,null)},
$ibi:1}
W.aU.prototype={
gj:function(a){return a.length}}
W.eJ.prototype={
gj:function(a){return a.length}}
W.G.prototype={$iG:1}
W.bL.prototype={
gj:function(a){return a.length}}
W.eK.prototype={}
W.a8.prototype={}
W.ak.prototype={}
W.eL.prototype={
gj:function(a){return a.length}}
W.eM.prototype={
gj:function(a){return a.length}}
W.eO.prototype={
gj:function(a){return a.length}}
W.eR.prototype={
i:function(a){return String(a)}}
W.cD.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[[P.a5,P.a6]]},
$iy:1,
$ay:function(){return[[P.a5,P.a6]]},
$ar:function(){return[[P.a5,P.a6]]},
$ij:1,
$aj:function(){return[[P.a5,P.a6]]}}
W.cE.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gai(a))+" x "+H.e(this.gaf(a))},
n:function(a,b){var u
if(b==null)return!1
u=J.X(b)
return!!u.$ia5&&a.left===u.gbh(b)&&a.top===u.gbj(b)&&this.gai(a)===u.gai(b)&&this.gaf(a)===u.gaf(b)},
gI:function(a){return W.k4(C.b.gI(a.left),C.b.gI(a.top),C.b.gI(this.gai(a)),C.b.gI(this.gaf(a)))},
gcT:function(a){return a.bottom},
gaf:function(a){return a.height},
gbh:function(a){return a.left},
gc7:function(a){return a.right},
gbj:function(a){return a.top},
gai:function(a){return a.width},
$ia5:1,
$aa5:function(){return[P.a6]}}
W.eS.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[P.t]},
$iy:1,
$ay:function(){return[P.t]},
$ar:function(){return[P.t]},
$ij:1,
$aj:function(){return[P.t]}}
W.eT.prototype={
gj:function(a){return a.length}}
W.im.prototype={
gj:function(a){return this.b.length},
h:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
k:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
this.a.replaceChild(c,u[b])},
l:function(a,b){this.a.appendChild(b)
return b},
gP:function(a){var u=this.hd(this)
return new J.Z(u,u.length)},
$ap:function(){return[W.V]},
$ar:function(){return[W.V]},
$aj:function(){return[W.V]}}
W.V.prototype={
gcU:function(a){return new W.im(a,a.children)},
gcV:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.aa()
if(s<0)s=-s*0
if(typeof r!=="number")return r.aa()
if(r<0)r=-r*0
return new P.a5(u,t,s,r,[P.a6])},
i:function(a){return a.localName},
$iV:1}
W.i.prototype={$ii:1}
W.d.prototype={
fu:function(a,b,c,d){if(c!=null)this.dX(a,b,c,!1)},
dX:function(a,b,c,d){return a.addEventListener(b,H.bB(c,1),!1)}}
W.aA.prototype={$iaA:1}
W.f1.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aA]},
$iy:1,
$ay:function(){return[W.aA]},
$ar:function(){return[W.aA]},
$ij:1,
$aj:function(){return[W.aA]}}
W.f2.prototype={
gj:function(a){return a.length}}
W.f6.prototype={
gj:function(a){return a.length}}
W.aB.prototype={$iaB:1}
W.fb.prototype={
gj:function(a){return a.length}}
W.bO.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.F]},
$iy:1,
$ay:function(){return[W.F]},
$ar:function(){return[W.F]},
$ij:1,
$aj:function(){return[W.F]}}
W.aY.prototype={$iaY:1,
gcX:function(a){return a.data}}
W.bP.prototype={$ibP:1}
W.bo.prototype={$ibo:1}
W.fp.prototype={
i:function(a){return String(a)}}
W.fJ.prototype={
gj:function(a){return a.length}}
W.fK.prototype={
h:function(a,b){return P.aP(a.get(b))},
J:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aP(u.value[1]))}},
gav:function(a){var u=H.b([],[P.t])
this.J(a,new W.fL(u))
return u},
gj:function(a){return a.size},
$aa0:function(){return[P.t,null]}}
W.fL.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fM.prototype={
h:function(a,b){return P.aP(a.get(b))},
J:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aP(u.value[1]))}},
gav:function(a){var u=H.b([],[P.t])
this.J(a,new W.fN(u))
return u},
gj:function(a){return a.size},
$aa0:function(){return[P.t,null]}}
W.fN.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aC.prototype={$iaC:1}
W.fO.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aC]},
$iy:1,
$ay:function(){return[W.aC]},
$ar:function(){return[W.aC]},
$ij:1,
$aj:function(){return[W.aC]}}
W.an.prototype={$ian:1}
W.il.prototype={
k:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.f(t,b)
u.replaceChild(c,t[b])},
gP:function(a){var u=this.a.childNodes
return new W.cH(u,u.length)},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
$ap:function(){return[W.F]},
$ar:function(){return[W.F]},
$aj:function(){return[W.F]}}
W.F.prototype={
h6:function(a,b){var u,t
try{u=a.parentNode
J.kz(u,b,a)}catch(t){H.em(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.dI(a):u},
fe:function(a,b,c){return a.replaceChild(b,c)},
$iF:1}
W.cY.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.F]},
$iy:1,
$ay:function(){return[W.F]},
$ar:function(){return[W.F]},
$ij:1,
$aj:function(){return[W.F]}}
W.aF.prototype={$iaF:1,
gj:function(a){return a.length}}
W.h0.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aF]},
$iy:1,
$ay:function(){return[W.aF]},
$ar:function(){return[W.aF]},
$ij:1,
$aj:function(){return[W.aF]}}
W.h9.prototype={
h:function(a,b){return P.aP(a.get(b))},
J:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aP(u.value[1]))}},
gav:function(a){var u=H.b([],[P.t])
this.J(a,new W.ha(u))
return u},
gj:function(a){return a.size},
$aa0:function(){return[P.t,null]}}
W.ha.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hc.prototype={
gj:function(a){return a.length}}
W.aJ.prototype={$iaJ:1}
W.hm.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aJ]},
$iy:1,
$ay:function(){return[W.aJ]},
$ar:function(){return[W.aJ]},
$ij:1,
$aj:function(){return[W.aJ]}}
W.aK.prototype={$iaK:1}
W.hn.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aK]},
$iy:1,
$ay:function(){return[W.aK]},
$ar:function(){return[W.aK]},
$ij:1,
$aj:function(){return[W.aK]}}
W.aL.prototype={$iaL:1,
gj:function(a){return a.length}}
W.hs.prototype={
h:function(a,b){return a.getItem(b)},
J:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gav:function(a){var u=H.b([],[P.t])
this.J(a,new W.ht(u))
return u},
gj:function(a){return a.length},
$aa0:function(){return[P.t,P.t]}}
W.ht.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aq.prototype={$iaq:1}
W.aM.prototype={$iaM:1}
W.ar.prototype={$iar:1}
W.hy.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.ar]},
$iy:1,
$ay:function(){return[W.ar]},
$ar:function(){return[W.ar]},
$ij:1,
$aj:function(){return[W.ar]}}
W.hz.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aM]},
$iy:1,
$ay:function(){return[W.aM]},
$ar:function(){return[W.aM]},
$ij:1,
$aj:function(){return[W.aM]}}
W.hH.prototype={
gj:function(a){return a.length}}
W.aN.prototype={$iaN:1}
W.bt.prototype={$ibt:1}
W.hK.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aN]},
$iy:1,
$ay:function(){return[W.aN]},
$ar:function(){return[W.aN]},
$ij:1,
$aj:function(){return[W.aN]}}
W.hL.prototype={
gj:function(a){return a.length}}
W.b9.prototype={}
W.hZ.prototype={
i:function(a){return String(a)}}
W.id.prototype={
gj:function(a){return a.length}}
W.bc.prototype={
gfH:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.x("deltaY is not supported"))},
gfG:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.x("deltaX is not supported"))},
$ibc:1}
W.ca.prototype={
ff:function(a,b){return a.requestAnimationFrame(H.bB(b,1))},
e7:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.io.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.G]},
$iy:1,
$ay:function(){return[W.G]},
$ar:function(){return[W.G]},
$ij:1,
$aj:function(){return[W.G]}}
W.dv.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
n:function(a,b){var u
if(b==null)return!1
u=J.X(b)
return!!u.$ia5&&a.left===u.gbh(b)&&a.top===u.gbj(b)&&a.width===u.gai(b)&&a.height===u.gaf(b)},
gI:function(a){return W.k4(C.b.gI(a.left),C.b.gI(a.top),C.b.gI(a.width),C.b.gI(a.height))},
gaf:function(a){return a.height},
gai:function(a){return a.width}}
W.ir.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aB]},
$iy:1,
$ay:function(){return[W.aB]},
$ar:function(){return[W.aB]},
$ij:1,
$aj:function(){return[W.aB]}}
W.dN.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.F]},
$iy:1,
$ay:function(){return[W.F]},
$ar:function(){return[W.F]},
$ij:1,
$aj:function(){return[W.F]}}
W.iB.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aL]},
$iy:1,
$ay:function(){return[W.aL]},
$ar:function(){return[W.aL]},
$ij:1,
$aj:function(){return[W.aL]}}
W.iC.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aq]},
$iy:1,
$ay:function(){return[W.aq]},
$ar:function(){return[W.aq]},
$ij:1,
$aj:function(){return[W.aq]}}
W.ip.prototype={}
W.iq.prototype={
$1:function(a){return this.a.$1(a)}}
W.J.prototype={
gP:function(a){return new W.cH(a,this.gj(a))}}
W.cH.prototype={
v:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.cs(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gG:function(a){return this.d}}
W.du.prototype={}
W.dw.prototype={}
W.dx.prototype={}
W.dy.prototype={}
W.dz.prototype={}
W.dB.prototype={}
W.dC.prototype={}
W.dD.prototype={}
W.dE.prototype={}
W.dJ.prototype={}
W.dK.prototype={}
W.dL.prototype={}
W.dM.prototype={}
W.dO.prototype={}
W.dP.prototype={}
W.dS.prototype={}
W.dT.prototype={}
W.dU.prototype={}
W.cf.prototype={}
W.cg.prototype={}
W.dV.prototype={}
W.dW.prototype={}
W.e_.prototype={}
W.e2.prototype={}
W.e3.prototype={}
W.ci.prototype={}
W.cj.prototype={}
W.e5.prototype={}
W.e6.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.ee.prototype={}
W.ef.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.ej.prototype={}
P.e9.prototype={$iaY:1,
gcX:function(a){return this.a}}
P.iN.prototype={
$2:function(a,b){this.a[a]=b},
$S:9}
P.f3.prototype={
gb8:function(){var u=this.b,t=H.kb(u,"r",0)
return new H.bU(new H.ie(u,new P.f4(),[t]),new P.f5(),[t,W.V])},
k:function(a,b,c){var u=this.gb8()
J.kC(u.b.$1(J.iY(u.a,b)),c)},
l:function(a,b){this.b.a.appendChild(b)},
gj:function(a){return J.bg(this.gb8().a)},
h:function(a,b){var u=this.gb8()
return u.b.$1(J.iY(u.a,b))},
gP:function(a){var u=P.jd(this.gb8(),!1,W.V)
return new J.Z(u,u.length)},
$ap:function(){return[W.V]},
$ar:function(){return[W.V]},
$aj:function(){return[W.V]}}
P.f4.prototype={
$1:function(a){return!!J.X(a).$iV}}
P.f5.prototype={
$1:function(a){return H.h(a,"$iV")}}
P.iw.prototype={
gc7:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.u(t)
return u+t},
gcT:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.u(t)
return u+t},
i:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.X(b)
if(!!u.$ia5){t=q.a
if(t==u.gbh(b)){s=q.b
if(s==u.gbj(b)){r=q.c
if(typeof t!=="number")return t.B()
if(typeof r!=="number")return H.u(r)
if(t+r===u.gc7(b)){t=q.d
if(typeof s!=="number")return s.B()
if(typeof t!=="number")return H.u(t)
u=s+t===u.gcT(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gI:function(a){var u=this,t=u.a,s=J.bF(t),r=u.b,q=J.bF(r),p=u.c
if(typeof t!=="number")return t.B()
if(typeof p!=="number")return H.u(p)
p=C.c.gI(t+p)
t=u.d
if(typeof r!=="number")return r.B()
if(typeof t!=="number")return H.u(t)
t=C.c.gI(r+t)
return P.lu(P.it(P.it(P.it(P.it(0,s),q),p),t))}}
P.a5.prototype={
gbh:function(a){return this.a},
gbj:function(a){return this.b},
gai:function(a){return this.c},
gaf:function(a){return this.d}}
P.b2.prototype={$ib2:1}
P.fl.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){return this.h(a,b)},
$ip:1,
$ap:function(){return[P.b2]},
$ar:function(){return[P.b2]},
$ij:1,
$aj:function(){return[P.b2]}}
P.b6.prototype={$ib6:1}
P.fX.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){return this.h(a,b)},
$ip:1,
$ap:function(){return[P.b6]},
$ar:function(){return[P.b6]},
$ij:1,
$aj:function(){return[P.b6]}}
P.h3.prototype={
gj:function(a){return a.length}}
P.hv.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){return this.h(a,b)},
$ip:1,
$ap:function(){return[P.t]},
$ar:function(){return[P.t]},
$ij:1,
$aj:function(){return[P.t]}}
P.k.prototype={
gcU:function(a){return new P.f3(a,new W.il(a))}}
P.b8.prototype={$ib8:1}
P.hM.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){return this.h(a,b)},
$ip:1,
$ap:function(){return[P.b8]},
$ar:function(){return[P.b8]},
$ij:1,
$aj:function(){return[P.b8]}}
P.dF.prototype={}
P.dG.prototype={}
P.dQ.prototype={}
P.dR.prototype={}
P.e0.prototype={}
P.e1.prototype={}
P.e7.prototype={}
P.e8.prototype={}
P.es.prototype={
gj:function(a){return a.length}}
P.et.prototype={
h:function(a,b){return P.aP(a.get(b))},
J:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aP(u.value[1]))}},
gav:function(a){var u=H.b([],[P.t])
this.J(a,new P.eu(u))
return u},
gj:function(a){return a.size},
$aa0:function(){return[P.t,null]}}
P.eu.prototype={
$2:function(a,b){return this.a.push(a)}}
P.ev.prototype={
gj:function(a){return a.length}}
P.bh.prototype={}
P.fY.prototype={
gj:function(a){return a.length}}
P.dt.prototype={}
P.d3.prototype={
dt:function(a,b,c,d,e,f,g,h,i,j){var u,t=i==null
if(!t&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}u=J.X(g)
if(!!u.$iaY&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,P.ma(g))
return}if(!!u.$ibP&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.kD("Incorrect number or type of arguments"))},
hb:function(a,b,c,d,e,f,g){return this.dt(a,b,c,d,e,f,g,null,null,null)}}
P.hp.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return P.aP(a.item(b))},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){return this.h(a,b)},
$ip:1,
$ap:function(){return[[P.bT,,,]]},
$ar:function(){return[[P.bT,,,]]},
$ij:1,
$aj:function(){return[[P.bT,,,]]}}
P.dX.prototype={}
P.dY.prototype={}
K.eo.prototype={
aN:function(a,b){return!0},
i:function(a){return"all"}}
K.cK.prototype={
aN:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)if(u[s].aN(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.n)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s}}
K.cT.prototype={}
K.aE.prototype={
aN:function(a,b){return!this.dH(0,b)},
i:function(a){return"!["+this.ck(0)+"]"}}
K.hd.prototype={
dN:function(a){var u,t,s,r
if(a.a.length<=0)throw H.c(P.m("May not create a Set with zero characters."))
u=P.v
t=new H.H([u,P.be])
for(s=new H.bS(a,a.gj(a));s.v();)t.k(0,s.d,!0)
r=P.jd(new H.bp(t,[u]),!0,u)
C.a.dG(r)
this.a=r},
aN:function(a,b){return C.a.a_(this.a,b)},
i:function(a){return P.jg(this.a)}}
L.d9.prototype={
q:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new L.di(this.a.L(0,b))
r.a=H.b([],[K.cT])
r.c=!1
this.c.push(r)
return r},
fJ:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
if(r.aN(0,a))return r}return},
i:function(a){return this.b},
cK:function(){var u,t,s,r,q,p=this,o="("+p.b+")",n=p.d
if(n!=null){n=n.b
o+=" => ["+n+"]"
u=p.a
if(u.c.a_(0,n))o+=" (consume)"
for(n=p.d.c,n=new H.bp(n,[H.aw(n,0)]),n=n.gP(n);n.v();){t=n.d
o+="\n"
s=p.d.c.h(0,t)
t=o+("  -- "+H.e(t)+" => ["+H.e(s)+"]")
o=u.c.a_(0,s)?t+" (consume)":t}}for(n=p.c,u=n.length,r=0;r<n.length;n.length===u||(0,H.n)(n),++r){q=n[r]
o=o+"\n"+("  -- "+q.i(0))}return o.charCodeAt(0)==0?o:o}}
L.df.prototype={
i:function(a){var u=H.kh(this.b,"\n","\\n"),t=H.kh(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
L.dg.prototype={
i:function(a){return this.b}}
L.hI.prototype={
L:function(a,b){var u=this.a.h(0,b)
if(u==null){u=new L.d9(this,b)
u.c=H.b([],[L.di])
this.a.k(0,b,u)}return u},
b4:function(a){var u,t=this.b.h(0,a)
if(t==null){t=new L.dg(a)
u=P.t
t.c=new H.H([u,u])
this.b.k(0,a,t)}return t},
dv:function(a){return this.hf(a)},
hf:function(a){var u=this
return P.lD(function(){var t=a
var s=0,r=1,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
return function $async$dv(b,a0){if(b===1){q=a0
s=r}while(true)switch(s){case 0:g=u.d
f=[P.v]
e=H.b([],f)
d=H.b([],f)
c=H.b([],f)
p=null,o=0,n=0,m=0
case 2:if(!!0){s=3
break}if(c.length!==0)l=C.a.h4(c,0)
else{if(!t.v()){s=3
break}l=t.d}d.push(l);++o
k=g.fJ(l)
s=k==null?4:6
break
case 4:if(p==null){j=P.jg(d)
throw H.c(P.m("Untokenizable string [state: "+g.b+", index "+o+']: "'+j+'"'))}if(!!d.fixed$length)H.o(P.x("removeRange"))
P.je(0,m,d.length)
d.splice(0,m-0)
C.a.bc(c,d)
d=H.b([],f)
e=H.b([],f)
g=u.d
s=!u.c.a_(0,p.a)?7:8
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
if(g.d!=null){j=P.jg(e)
i=g.d
h=i.c.h(0,j)
p=new L.df(h==null?i.b:h,j,o)
m=d.length
n=o}case 5:s=2
break
case 3:s=p!=null&&!u.c.a_(0,p.a)?10:11
break
case 10:s=12
return p
case 12:case 11:return P.ls()
case 1:return P.lt(q)}}},L.df)},
i:function(a){var u,t=new P.ap(""),s=this.d
if(s!=null)t.a=s.cK()+"\n"
for(s=this.a,s=s.ghg(s),s=new H.cS(J.bf(s.a),s.b);s.v();){u=s.a
if(u!=this.d)t.a+=u.cK()+"\n"}s=t.a
return s.charCodeAt(0)==0?s:s}}
L.di.prototype={
i:function(a){return this.b.b+": "+this.ck(0)}}
O.ay.prototype={
b6:function(a){this.a=H.b([],[a])
this.c=this.b=null},
cc:function(a,b,c){this.b=b
this.c=a},
aB:function(a,b){return this.cc(a,null,b)},
b9:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
cn:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gj:function(a){return this.a.length},
gP:function(a){var u=this.a
return new J.Z(u,u.length)},
E:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
l:function(a,b){var u,t,s=this,r=[H.kb(s,"ay",0)]
if(s.b9(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.cn(t,H.b([b],r))}},
bc:function(a,b){var u,t
if(this.b9(b)){u=this.a
t=u.length
C.a.bc(u,b)
this.cn(t,b)}},
$ij:1}
O.bX.prototype={
gj:function(a){return this.a.length},
gm:function(){var u=this.b
return u==null?this.b=D.z():u},
aD:function(){var u=this.b
if(u!=null)u.w(null)},
gU:function(a){var u=this.a
if(u.length>0)return C.a.gbZ(u)
else return V.b4()},
bi:function(a){var u=this.a
if(a==null)u.push(V.b4())
else u.push(a)
this.aD()},
ax:function(){var u=this.a
if(u.length>0){u.pop()
this.aD()}}}
E.ey.prototype={}
E.az.prototype={
sce:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gm().N(0,s.gdn())
u=s.c
if(u!=null)u.gm().l(0,s.gdn())
t=new D.q("shape",r,s.c)
t.b=!0
s.aw(t)}},
sdi:function(a){var u,t,s=this
if(!J.C(s.r,a)){u=s.r
if(u!=null)u.gm().N(0,s.gdl())
if(a!=null)a.gm().l(0,s.gdl())
s.r=a
t=new D.q("mover",u,a)
t.b=!0
s.aw(t)}},
a4:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.a:null
if(!J.C(q,s.x)){u=s.x
s.x=q
t=new D.q("matrix",u,q)
t.b=!0
s.aw(t)}for(r=s.y.a,r=new J.Z(r,r.length);r.v();)r.d.a4(0,b)},
V:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)s.a.push(s.gU(s))
else s.a.push(r.u(0,s.gU(s)))
s.aD()
a.c6(t.f)
s=a.dy
u=(s&&C.a).gbZ(s)
if(u!=null&&t.d!=null)u.b2(a,t)
for(s=t.y.a,s=new J.Z(s,s.length);s.v();)s.d.V(a)
a.c5()
a.dx.ax()},
aw:function(a){var u=this.z
if(u!=null)u.w(a)},
a7:function(){return this.aw(null)},
dq:function(a){this.e=null
this.aw(a)},
fV:function(){return this.dq(null)},
dm:function(a){this.aw(a)},
fU:function(){return this.dm(null)},
dk:function(a){this.aw(a)},
fR:function(){return this.dk(null)},
fQ:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gdj(),s=[{func:1,ret:-1,args:[D.P]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.aW()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.a7()},
fT:function(a,b){var u,t
for(u=b.gP(b),t=this.gdj();u.v();)u.gG(u).gm().N(0,t)
this.a7()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.h5.prototype={
dM:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.a9(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.bX()
t=[V.aa]
u.a=H.b([],t)
u.gm().l(0,new E.h6(s))
s.cy=u
u=new O.bX()
u.a=H.b([],t)
u.gm().l(0,new E.h7(s))
s.db=u
u=new O.bX()
u.a=H.b([],t)
u.gm().l(0,new E.h8(s))
s.dx=u
u=H.b([],[O.db])
s.dy=u
u.push(null)
s.fr=new H.H([P.t,A.d4])},
gh3:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gU(s)
u=t.db
u=t.z=s.u(0,u.gU(u))
s=u}return s},
gdr:function(){var u,t=this,s=t.ch
if(s==null){s=t.gh3()
u=t.dx
u=t.ch=s.u(0,u.gU(u))
s=u}return s},
gdw:function(){var u,t=this,s=t.cx
if(s==null){s=t.db
s=s.gU(s)
u=t.dx
u=t.cx=s.u(0,u.gU(u))
s=u}return s},
c6:function(a){var u=this.dy
u.push(a==null?(u&&C.a).gbZ(u):a)},
c5:function(){var u=this.dy
if(u.length>1)u.pop()},
aU:function(a){var u=a.b
if(u.length===0)throw H.c(P.m("May not cache a shader with no name."))
if(this.fr.fC(0,u))throw H.c(P.m('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.k(0,u,a)}}
E.h6.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.h7.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.h8.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.dd.prototype={
cq:function(a){this.ds()},
cp:function(){return this.cq(null)},
gfK:function(){var u,t=this,s=Date.now(),r=C.c.a2(P.jB(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.a9(s,!1)
return u/r},
cF:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.u()
if(typeof r!=="number")return H.u(r)
u=C.b.bX(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.u()
t=C.b.bX(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.jV(C.j,s.gh7())}},
ds:function(){if(!this.cx){this.cx=!0
var u=window
C.t.e7(u)
C.t.ff(u,W.k7(new E.hG(this),P.a6))}},
h5:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.cF()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.a9(r,!1)
s.y=P.jB(r-s.r.a).a*0.000001
r=s.cy
C.a.sj(r.a,0)
r.aD()
r=s.db
C.a.sj(r.a,0)
r.aD()
r=s.dx
C.a.sj(r.a,0)
r.aD()
r=s.dy;(r&&C.a).sj(r,0)
s.dy.push(null)
o.V(p.e)}}catch(q){u=H.em(q)
t=H.jr(q)
P.ju("Error: "+H.e(u))
P.ju("Stack: "+H.e(t))
throw H.c(u)}}}
E.hG.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.h5()}}}
Z.dr.prototype={}
Z.cx.prototype={
H:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.em(s)
t=P.m('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.e(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.bb.prototype={}
Z.ai.prototype={
ab:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
H:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].H(a)},
a3:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
V:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.f(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.t],p=H.b([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)p.push(u[s].i(0))
r=H.b([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a7(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.q(p,", ")+"\nAttrs:   "+C.a.q(r,", ")}}
Z.bm.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.c2(this.c))+"'")+"]"}}
Z.au.prototype={
gcf:function(a){var u=this.a,t=(u&$.T().a)!==0?3:0
if((u&$.aS().a)!==0)t+=3
if((u&$.aR().a)!==0)t+=3
if((u&$.ax().a)!==0)t+=2
if((u&$.aT().a)!==0)t+=3
if((u&$.cq().a)!==0)t+=3
if((u&$.cr().a)!==0)t+=4
if((u&$.bE().a)!==0)++t
return(u&$.aQ().a)!==0?t+4:t},
fz:function(a){var u,t=$.T(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aS()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aR()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ax()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aT()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cq()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cr()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bE()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aQ()
if((s&t.a)!==0)if(u===a)return t
return $.kx()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.au))return!1
return this.a===b.a},
i:function(a){var u=H.b([],[P.t]),t=this.a
if((t&$.T().a)!==0)u.push("Pos")
if((t&$.aS().a)!==0)u.push("Norm")
if((t&$.aR().a)!==0)u.push("Binm")
if((t&$.ax().a)!==0)u.push("Txt2D")
if((t&$.aT().a)!==0)u.push("TxtCube")
if((t&$.cq().a)!==0)u.push("Clr3")
if((t&$.cr().a)!==0)u.push("Clr4")
if((t&$.bE().a)!==0)u.push("Weight")
if((t&$.aQ().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.a.q(u,"|")}}
D.eB.prototype={}
D.aW.prototype={
l:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.P]}]):u).push(b)},
N:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.a.a_(s,b)
if(s===!0){s=t.a
u=(s&&C.a).N(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.a.a_(s,b)
if(s===!0){s=t.b
u=(s&&C.a).N(s,b)||u}return u},
w:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.P()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.J(P.jd(u,!0,{func:1,ret:-1,args:[D.P]}),new D.f_(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.P]}])
C.a.J(u,new D.f0(q))}return!0},
bO:function(){return this.w(null)},
ay:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.w(u)}}}}
D.f_.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.f0.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.P.prototype={}
D.aZ.prototype={}
D.b_.prototype={}
D.q.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cy.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cy))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.cP.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cP))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.fk.prototype={
h_:function(a){this.c=a.b
this.d.l(0,a.a)
return!1},
fW:function(a){this.c=a.b
this.d.N(0,a.a)
return!1}}
X.cR.prototype={}
X.fq.prototype={
aS:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.u()
u=b.b
t=q.ch
if(typeof u!=="number")return u.u()
s=new V.Y(o.a+n*m,o.b+u*t)
t=q.a.gaK()
r=new X.aD(a,V.aG(),q.x,t,s)
r.b=!0
q.z=new P.a9(p,!1)
q.x=s
return r},
c4:function(a,b){this.r=a.a
return!1},
b1:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.dB()
if(typeof u!=="number")return u.aj()
this.r=(u&~t)>>>0
return!1},
b0:function(a,b){var u=this.d
if(u==null)return!1
u.w(this.aS(a,b))
return!0},
h0:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaK()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.u()
q=a.b
p=o.cy
if(typeof q!=="number")return q.u()
t=new X.bY(new V.E(s*r,q*p),u,t)
t.b=!0
n.w(t)
return!0},
eM:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.cR(c,r.a.gaK(),b)
s.b=!0
t.w(s)
r.y=new P.a9(u,!1)
r.x=V.aG()}}
X.ab.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.ab))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.aD.prototype={}
X.fP.prototype={
br:function(a,b,c){var u=this,t=new P.a9(Date.now(),!1),s=u.a.gaK(),r=new X.aD(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
c4:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.w(this.br(a,b,!0))
return!0},
b1:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.dB()
if(typeof t!=="number")return t.aj()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.w(u.br(a,b,!0))
return!0},
b0:function(a,b){var u=this.d
if(u==null)return!1
u.w(this.br(a,b,!1))
return!0},
h1:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaK()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.u()
r=a.b
q=p.ch
if(typeof r!=="number")return r.u()
u=new X.bY(new V.E(t*s,r*q),u,b)
u.b=!0
o.w(u)
return!0},
gcY:function(){var u=this.b
return u==null?this.b=D.z():u},
gc9:function(){var u=this.c
return u==null?this.c=D.z():u},
gdh:function(){var u=this.d
return u==null?this.d=D.z():u}}
X.bY.prototype={}
X.h2.prototype={}
X.dh.prototype={}
X.hJ.prototype={
aS:function(a,b){var u=this,t=new P.a9(Date.now(),!1),s=a.length>0?a[0]:V.aG(),r=u.a.gaK(),q=new X.dh(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
fZ:function(a){var u=this.b
if(u==null)return!1
u.w(this.aS(a,!0))
return!0},
fX:function(a){var u=this.c
if(u==null)return!1
u.w(this.aS(a,!0))
return!0},
fY:function(a){var u=this.d
if(u==null)return!1
u.w(this.aS(a,!1))
return!0}}
X.dl.prototype={
gaK:function(){var u=this.a,t=C.f.gcV(u).c
t.toString
u=C.f.gcV(u).d
u.toString
return V.c3(0,0,t,u)},
cv:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.cP(u,new X.ab(t,a.altKey,a.shiftKey))},
aI:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.ab(t,a.altKey,a.shiftKey)},
bE:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.ab(t,a.altKey,a.shiftKey)},
as:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.F()
u=t.top
if(typeof r!=="number")return r.F()
return new V.Y(s-q,r-u)},
aT:function(a){return new V.E(a.movementX,a.movementY)},
bB:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.Y])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
q=C.b.W(r.pageX)
C.b.W(r.pageY)
p=o.left
C.b.W(r.pageX)
n.push(new V.Y(q-p,C.b.W(r.pageY)-o.top))}return n},
aq:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cy(u,new X.ab(t,a.altKey,a.shiftKey))},
bs:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.F()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.F()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
eG:function(a){this.f=!0},
ep:function(a){this.f=!1},
ew:function(a){if(this.f&&this.bs(a))a.preventDefault()},
eK:function(a){var u
if(!this.f)return
u=this.cv(a)
this.b.h_(u)},
eI:function(a){var u
if(!this.f)return
u=this.cv(a)
this.b.fW(u)},
eO:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aI(a)
if(r.x){u=r.aq(a)
t=r.aT(a)
if(r.d.c4(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.aq(a)
s=r.as(a)
if(r.c.c4(u,s))a.preventDefault()},
eS:function(a){var u,t,s,r=this
r.aI(a)
u=r.aq(a)
if(r.x){t=r.aT(a)
if(r.d.b1(u,t))a.preventDefault()
return}if(r.r)return
s=r.as(a)
if(r.c.b1(u,s))a.preventDefault()},
eA:function(a){var u,t,s,r=this
if(!r.bs(a)){r.aI(a)
u=r.aq(a)
if(r.x){t=r.aT(a)
if(r.d.b1(u,t))a.preventDefault()
return}if(r.r)return
s=r.as(a)
if(r.c.b1(u,s))a.preventDefault()}},
eQ:function(a){var u,t,s,r=this
r.aI(a)
u=r.aq(a)
if(r.x){t=r.aT(a)
if(r.d.b0(u,t))a.preventDefault()
return}if(r.r)return
s=r.as(a)
if(r.c.b0(u,s))a.preventDefault()},
ey:function(a){var u,t,s,r=this
if(!r.bs(a)){r.aI(a)
u=r.aq(a)
if(r.x){t=r.aT(a)
if(r.d.b0(u,t))a.preventDefault()
return}if(r.r)return
s=r.as(a)
if(r.c.b0(u,s))a.preventDefault()}},
eU:function(a){var u,t,s=this
s.aI(a)
u=new V.E((a&&C.r).gfG(a),C.r.gfH(a)).t(0,180)
if(s.x){if(s.d.h0(u))a.preventDefault()
return}if(s.r)return
t=s.as(a)
if(s.c.h1(u,t))a.preventDefault()},
eW:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aq(s.y)
t=s.as(s.y)
s.d.eM(u,t,r)}},
fb:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bE(a)
u=t.bB(a)
if(t.e.fZ(u))a.preventDefault()},
f7:function(a){var u
this.bE(a)
u=this.bB(a)
if(this.e.fX(u))a.preventDefault()},
f9:function(a){var u
this.bE(a)
u=this.bB(a)
if(this.e.fY(u))a.preventDefault()}}
D.ex.prototype={$ia_:1}
D.bk.prototype={
ao:function(a){var u=this.r
if(u!=null)u.w(a)},
dR:function(){return this.ao(null)},
$ia_:1}
D.a_.prototype={}
D.cQ.prototype={
ao:function(a){var u=this.y
if(u!=null)u.w(a)},
cD:function(a){var u=this.z
if(u!=null)u.w(a)},
eL:function(){return this.cD(null)},
eY:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.n)(a),++t){s=a[t]
if(s==null||this.e2(s))return!1}return!0},
ej:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcC(),s=[{func:1,ret:-1,args:[D.P]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q instanceof D.bk)this.f.push(q)
p=q.r
if(p==null){p=new D.aW()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}u=new D.aZ()
u.b=!0
this.ao(u)},
f1:function(a,b){var u,t,s
for(u=b.gP(b),t=this.gcC();u.v();){s=u.gG(u)
C.a.N(this.e,s)
s.gm().N(0,t)}u=new D.b_()
u.b=!0
this.ao(u)},
e2:function(a){var u=C.a.a_(this.f,a)
return u},
$aj:function(){return[D.a_]},
$aay:function(){return[D.a_]}}
D.h1.prototype={$ia_:1}
D.ho.prototype={$ia_:1}
V.N.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.N))return!1
u=b.a
t=$.w().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"}}
V.a3.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a3))return!1
u=b.a
t=$.w().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.B(u.a,3,0)+", "+V.B(u.b,3,0)+", "+V.B(u.c,3,0)+", "+V.B(u.d,3,0)+"]"}}
V.eZ.prototype={}
V.bW.prototype={
X:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.I])
return t},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bW))return!1
u=b.a
t=$.w().a
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
i:function(a){var u,t,s,r,q=this,p=[P.I],o=V.bD(H.b([q.a,q.d,q.r],p),3,0),n=V.bD(H.b([q.b,q.e,q.x],p),3,0),m=V.bD(H.b([q.c,q.f,q.y],p),3,0)
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
X:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.I])
return t},
bY:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.w().a)return V.b4()
u=1/b1
t=-n
s=-a0
return V.am((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
u:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.am(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bk:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.A(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
b5:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.Q(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aa))return!1
u=b.a
t=$.w().a
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
A:function(a){var u,t,s,r,q,p=this,o=[P.I],n=V.bD(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.bD(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.bD(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.bD(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
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
K:function(){return this.A("")}}
V.Y.prototype={
F:function(a,b){return new V.Y(this.a-b.a,this.b-b.b)},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Y))return!1
u=b.a
t=$.w().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+"]"}}
V.Q.prototype={
F:function(a,b){return new V.Q(this.a-b.a,this.b-b.b,this.c-b.c)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.Q))return!1
u=b.a
t=$.w().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"}}
V.aH.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aH))return!1
u=b.a
t=$.w().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.B(u.a,3,0)+", "+V.B(u.b,3,0)+", "+V.B(u.c,3,0)+", "+V.B(u.d,3,0)+"]"}}
V.d2.prototype={
gad:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.d2))return!1
u=b.a
t=$.w().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.B(u.a,3,0)+", "+V.B(u.b,3,0)+", "+V.B(u.c,3,0)+", "+V.B(u.d,3,0)+"]"}}
V.E.prototype={
b_:function(a){return Math.sqrt(this.C(this))},
C:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.u()
if(typeof r!=="number")return H.u(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.u(t)
return s*r+u*t},
u:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.u()
u=this.b
if(typeof u!=="number")return u.u()
return new V.E(t*b,u*b)},
t:function(a,b){var u,t
if(Math.abs(b-0)<$.w().a){u=$.k0
return u==null?$.k0=new V.E(0,0):u}u=this.a
if(typeof u!=="number")return u.t()
t=this.b
if(typeof t!=="number")return t.t()
return new V.E(u/b,t/b)},
n:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.E))return!1
u=b.a
t=this.a
s=$.w()
s.toString
if(typeof u!=="number")return u.F()
if(typeof t!=="number")return H.u(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.F()
if(typeof t!=="number")return H.u(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+"]"}}
V.A.prototype={
b_:function(a){return Math.sqrt(this.C(this))},
C:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
c_:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.A(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aX:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.A(u*t-s*r,s*q-p*t,p*r-u*q)},
B:function(a,b){return new V.A(this.a+b.a,this.b+b.b,this.c+b.c)},
O:function(a){return new V.A(-this.a,-this.b,-this.c)},
t:function(a,b){if(Math.abs(b-0)<$.w().a)return V.dq()
return new V.A(this.a/b,this.b/b,this.c/b)},
de:function(){var u=$.w().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.A))return!1
u=b.a
t=$.w().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"}}
V.bv.prototype={
b_:function(a){var u=this,t=u.a,s=u.b,r=u.c,q=u.d
return Math.sqrt(t*t+s*s+r*r+q*q)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bv))return!1
u=b.a
t=$.w().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.B(u.a,3,0)+", "+V.B(u.b,3,0)+", "+V.B(u.c,3,0)+", "+V.B(u.d,3,0)+"]"}}
U.eF.prototype={
bl:function(a){var u=V.mA(a,this.c,this.b)
return u},
gm:function(){var u=this.y
return u==null?this.y=D.z():u},
M:function(a){var u=this.y
if(u!=null)u.w(a)},
sca:function(a,b){},
sc1:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.w().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bl(u)}s=new D.q("maximumLocation",s,t.b)
s.b=!0
t.M(s)}},
sc3:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.w().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bl(u)}s=new D.q("minimumLocation",s,t.c)
s.b=!0
t.M(s)}},
sac:function(a,b){var u,t=this
b=t.bl(b)
u=t.d
if(!(Math.abs(u-b)<$.w().a)){t.d=b
u=new D.q("location",u,b)
u.b=!0
t.M(u)}},
sc2:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.w().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.q("maximumVelocity",r,a)
r.b=!0
s.M(r)}},
sS:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.w().a)){u.f=a
t=new D.q("velocity",t,a)
t.b=!0
u.M(t)}},
sbN:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.w().a)){this.x=a
u=new D.q("dampening",u,a)
u.b=!0
this.M(u)}},
a4:function(a,b){var u,t,s,r=this,q=r.f,p=$.w().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sac(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.w().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sS(u)}}}
U.bK.prototype={
gm:function(){var u=this.b
return u==null?this.b=D.z():u},
sU:function(a,b){var u,t,s,r=this
if(!J.C(r.a,b)){u=r.a
r.a=b
t=new D.q("matrix",u,b)
t.b=!0
s=r.b
if(s!=null)s.w(t)}},
aO:function(a,b,c){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bK))return!1
return J.C(this.a,b.a)},
i:function(a){return"Constant: "+this.a.A("          ")}}
U.bN.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.z():u},
M:function(a){var u=this.e
if(u!=null)u.w(a)},
a9:function(){return this.M(null)},
eh:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaH(),s=[{func:1,ret:-1,args:[D.P]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q!=null){p=q.gm()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.aZ()
u.b=!0
this.M(u)},
f_:function(a,b){var u,t
for(u=b.gP(b),t=this.gaH();u.v();)u.gG(u).gm().N(0,t)
u=new D.b_()
u.b=!0
this.M(u)},
aO:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.aa()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.Z(r,r.length),u=null;r.v();){q=r.d
if(q!=null){t=q.aO(0,b,c)
if(t!=null)u=u==null?t:t.u(0,u)}}s.f=u==null?V.b4():u
r=s.e
if(r!=null)r.ay(0)}return s.f},
n:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bN))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.f(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.f(r,t)
if(!J.C(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$aj:function(){return[U.a4]},
$aay:function(){return[U.a4]},
$ia4:1}
U.a4.prototype={}
U.dm.prototype={
gm:function(){var u=this.cy
return u==null?this.cy=D.z():u},
M:function(a){var u=this.cy
if(u!=null)u.w(a)},
a9:function(){return this.M(null)},
aV:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gcY().l(0,u.gbt())
u.a.c.gdh().l(0,u.gbv())
u.a.c.gc9().l(0,u.gbx())
return!0},
bu:function(a){var u=this
if(!J.C(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bw:function(a){var u,t,s,r,q,p,o,n=this
H.h(a,"$iaD")
if(!n.y)return
if(n.x){u=a.d.F(0,a.y)
u=new V.E(u.a,u.b)
u=u.C(u)
t=n.r
if(typeof t!=="number")return H.u(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.F(0,a.y)
u=new V.E(t.a,t.b).u(0,2).t(0,u.gad())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.u()
s=n.e
if(typeof s!=="number")return H.u(s)
t.sS(u*10*s)}else{u=a.c
t=a.d
s=t.F(0,a.y)
r=new V.E(s.a,s.b).u(0,2).t(0,u.gad())
s=n.b
q=r.a
if(typeof q!=="number")return q.O()
p=n.e
if(typeof p!=="number")return H.u(p)
o=n.z
if(typeof o!=="number")return H.u(o)
s.sac(0,-q*p+o)
n.b.sS(0)
t=t.F(0,a.z)
n.Q=new V.E(t.a,t.b).u(0,2).t(0,u.gad())}n.a9()},
by:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.C(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.u()
s=r.e
if(typeof s!=="number")return H.u(s)
u.sS(t*10*s)
r.a9()}},
aO:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.aa()
if(q<p){r.ch=p
u=b.y
r.b.a4(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.am(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$ia4:1}
U.dn.prototype={
gm:function(){var u=this.fx
return u==null?this.fx=D.z():u},
M:function(a){var u=this.fx
if(u!=null)u.w(a)},
a9:function(){return this.M(null)},
aV:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gcY().l(0,s.gbt())
s.a.c.gdh().l(0,s.gbv())
s.a.c.gc9().l(0,s.gbx())
u=s.a.d
t=u.f
u=t==null?u.f=D.z():t
u.l(0,s.gea())
u=s.a.d
t=u.d
u=t==null?u.d=D.z():t
u.l(0,s.gec())
u=s.a.e
t=u.b
u=t==null?u.b=D.z():t
u.l(0,s.gfs())
u=s.a.e
t=u.d
u=t==null?u.d=D.z():t
u.l(0,s.gfp())
u=s.a.e
t=u.c
u=t==null?u.c=D.z():t
u.l(0,s.gfn())
return!0},
al:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.O()
u=-u}if(this.r){if(typeof t!=="number")return t.O()
t=-t}return new V.E(u,t)},
bu:function(a){var u=this
H.h(a,"$iaD")
if(!J.C(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bw:function(a){var u,t,s,r,q,p,o,n=this
H.h(a,"$iaD")
if(!n.cx)return
if(n.ch){u=a.d.F(0,a.y)
u=new V.E(u.a,u.b)
u=u.C(u)
t=n.Q
if(typeof t!=="number")return H.u(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.F(0,a.y)
u=n.al(new V.E(t.a,t.b).u(0,2).t(0,u.gad()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.u(s)
t.sS(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.u(t)
s.sS(-u*10*t)}else{u=a.c
t=a.d
s=t.F(0,a.y)
r=n.al(new V.E(s.a,s.b).u(0,2).t(0,u.gad()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.u(p)
o=n.cy
if(typeof o!=="number")return H.u(o)
s.sac(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.u(q)
s=n.db
if(typeof s!=="number")return H.u(s)
o.sac(0,-p*q+s)
n.b.sS(0)
n.c.sS(0)
t=t.F(0,a.z)
n.dx=n.al(new V.E(t.a,t.b).u(0,2).t(0,u.gad()))}n.a9()},
by:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.C(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.u(s)
u.sS(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.u(u)
s.sS(-t*10*u)
r.a9()}},
eb:function(a){var u=this
if(H.h(a,"$icR").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
ed:function(a){var u,t,s,r,q,p,o,n=this
H.h(a,"$iaD")
if(!J.C(n.d,a.x.b))return
u=a.c
t=a.d
s=t.F(0,a.y)
r=n.al(new V.E(s.a,s.b).u(0,2).t(0,u.gad()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.u(p)
o=n.cy
if(typeof o!=="number")return H.u(o)
s.sac(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.u(q)
s=n.db
if(typeof s!=="number")return H.u(s)
o.sac(0,-p*q+s)
n.b.sS(0)
n.c.sS(0)
t=t.F(0,a.z)
n.dx=n.al(new V.E(t.a,t.b).u(0,2).t(0,u.gad()))
n.a9()},
ft:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fq:function(a){var u,t,s,r,q,p,o,n=this
H.h(a,"$idh")
if(!n.cx)return
if(n.ch){u=a.d.F(0,a.y)
u=new V.E(u.a,u.b)
u=u.C(u)
t=n.Q
if(typeof t!=="number")return H.u(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.F(0,a.y)
u=n.al(new V.E(t.a,t.b).u(0,2).t(0,u.gad()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.u(s)
t.sS(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.u(t)
s.sS(-u*10*t)}else{u=a.c
t=a.d
s=t.F(0,a.y)
r=n.al(new V.E(s.a,s.b).u(0,2).t(0,u.gad()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.u(p)
o=n.cy
if(typeof o!=="number")return H.u(o)
s.sac(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.u(q)
s=n.db
if(typeof s!=="number")return H.u(s)
o.sac(0,-p*q+s)
n.b.sS(0)
n.c.sS(0)
t=t.F(0,a.z)
n.dx=n.al(new V.E(t.a,t.b).u(0,2).t(0,u.gad()))}n.a9()},
fo:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.C(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.u(s)
u.sS(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.u(u)
s.sS(-t*10*u)
r.a9()}},
aO:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.aa()
if(q<p){r.dy=p
u=b.y
r.c.a4(0,u)
r.b.a4(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.am(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.u(0,V.am(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$ia4:1}
U.dp.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.z():u},
M:function(a){var u=this.r
if(u!=null)u.w(a)},
aV:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.z():t
t=r.gee()
u.l(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.z():s).l(0,t)
return!0},
ef:function(a){var u,t,s,r,q=this
if(!J.C(q.b,q.a.b.c))return
H.h(a,"$ibY")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.u()
r=u+t*s
if(u!==r){q.d=r
u=new D.q("zoom",u,r)
u.b=!0
q.M(u)}},
aO:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.kZ(u,u,u)}return t.f},
$ia4:1}
M.cz.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.z():u},
R:function(a){var u=this.r
if(u!=null)u.w(a)},
ap:function(){return this.R(null)},
f3:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gT(),s=[{func:1,ret:-1,args:[D.P]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q!=null){p=q.gm()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.aZ()
u.b=!0
this.R(u)},
f5:function(a,b){var u,t
for(u=b.gP(b),t=this.gT();u.v();)u.gG(u).gm().N(0,t)
u=new D.b_()
u.b=!0
this.R(u)},
V:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.Z(u,u.length);u.v();){t=u.d
if(t!=null)t.V(a)}s.f=!1},
$aj:function(){return[M.ac]},
$aay:function(){return[M.ac]},
$iac:1}
M.cA.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.z():u},
R:function(a){var u=this.r
if(u!=null)u.w(a)},
ap:function(){return this.R(null)},
saJ:function(a){var u,t,s=this
if(a==null)a=new X.fc()
u=s.b
if(u!==a){if(u!=null)u.gm().N(0,s.gT())
t=s.b
s.b=a
a.gm().l(0,s.gT())
u=new D.q("camera",t,s.b)
u.b=!0
s.R(u)}},
san:function(a,b){var u,t,s=this
if(b==null)b=X.j7(!0,null)
u=s.c
if(u!==b){if(u!=null)u.gm().N(0,s.gT())
t=s.c
s.c=b
b.gm().l(0,s.gT())
u=new D.q("target",t,s.c)
u.b=!0
s.R(u)}},
saz:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gm().N(0,t.gT())
u=t.d
t.d=a
if(a!=null)a.gm().l(0,t.gT())
s=new D.q("technique",u,t.d)
s.b=!0
t.R(s)}},
V:function(a){var u,t=this
a.c6(t.d)
t.c.H(a)
t.b.H(a)
u=t.d
if(u!=null)u.a4(0,a)
t.e.a4(0,a)
t.e.V(a)
t.b.a3(a)
t.c.a3(a)
a.c5()},
$iac:1}
M.cF.prototype={
R:function(a){var u=this.y
if(u!=null)u.w(a)},
ap:function(){return this.R(null)},
er:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gT(),s=[{func:1,ret:-1,args:[D.P]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.aW()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.aZ()
u.b=!0
this.R(u)},
eu:function(a,b){var u,t
for(u=b.gP(b),t=this.gT();u.v();)u.gG(u).gm().N(0,t)
u=new D.b_()
u.b=!0
this.R(u)},
saJ:function(a){var u,t,s=this
if(a==null)a=X.jL(null)
u=s.b
if(u!==a){if(u!=null)u.gm().N(0,s.gT())
t=s.b
s.b=a
a.gm().l(0,s.gT())
u=new D.q("camera",t,s.b)
u.b=!0
s.R(u)}},
san:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gm().N(0,t.gT())
u=t.c
t.c=b
b.gm().l(0,t.gT())
s=new D.q("target",u,t.c)
s.b=!0
t.R(s)}},
saz:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gm().N(0,t.gT())
u=t.d
t.d=a
if(a!=null)a.gm().l(0,t.gT())
s=new D.q("technique",u,t.d)
s.b=!0
t.R(s)}},
gm:function(){var u=this.y
return u==null?this.y=D.z():u},
V:function(a){var u,t=this
a.c6(t.d)
t.c.H(a)
t.b.H(a)
u=t.d
if(u!=null)u.a4(0,a)
for(u=t.e.a,u=new J.Z(u,u.length);u.v();)u.d.a4(0,a)
for(u=t.e.a,u=new J.Z(u,u.length);u.v();)u.d.V(a)
t.b.toString
a.cy.ax()
a.db.ax()
t.c.a3(a)
a.c5()},
$iac:1}
M.cI.prototype={
gm:function(){var u=this.b
return u==null?this.b=D.z():u},
R:function(a){var u=this.b
if(u!=null)u.w(a)},
ap:function(){return this.R(null)},
V:function(a){var u=this.e
if(u!=null)u.V(a)
u=this.r
if(u!=null)u.V(a)},
$iac:1}
M.ac.prototype={}
A.cu.prototype={}
A.er.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
fI:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
aY:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.U.prototype={
gak:function(a){var u=this.a?1:0,t=this.c?4:0
return u|0|t},
i:function(a){var u=this.a?1:0,t=this.c?4:0
return""+(u|0|t)},
n:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.U))return!1
if(this.a===b.a)u=this.c===b.c
else u=!1
return u}}
A.eQ.prototype={}
A.f9.prototype={
cI:function(a,b){if(b!=null&&b.d)a.dD(b)}}
A.fa.prototype={
aE:function(a,b,c,d){var u,t,s,r,q=c.length
if(0>=q)return H.f(c,0)
u=Math.abs(c[0]-0)<$.w().a
if(u){if(0>=d.length)return H.f(d,0)
t=d[0]
d=C.a.cg(d,1)
c=C.a.cg(c,1);--q}else t=0
s=a.a+="vec4 blur"+b+"()\n"
s+="{\n"
a.a=s
if(u)s=a.a+="  vec4 color = texture2D(colorTxt, txt2D)*"+H.e(t)+";\n"
else s=a.a=s+"  vec4 color = vec4(0.0);\n"
s=a.a=s+"  vec2 offset;\n"
for(r=0;r<q;++r){if(r>=c.length)return H.f(c,r)
a.a+="  offset = blurScale * "+H.e(c[r])+";\n"
if(r>=d.length)return H.f(d,r)
a.a+="  color += texture2D(colorTxt, txt2D + offset) * "+H.e(d[r])+";\n"
if(r>=d.length)return H.f(d,r)
s=a.a+="  color += texture2D(colorTxt, txt2D - offset) * "+H.e(d[r])+";\n"}s+="  return color; \n"
a.a=s
s+="}\n"
a.a=s
a.a=s+"\n"},
i:function(a){return this.b}}
A.ft.prototype={
dL:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.ap("")
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
A.lS(c0,u)
A.lU(c0,u)
A.lT(c0,u)
A.lW(c0,u)
A.lX(c0,u)
A.lV(c0,u)
A.lY(c0,u)
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
b5.aZ(0,s.charCodeAt(0)==0?s:s,A.lR(b5.z))
b5.Q=b5.x.h(0,"posAttr")
b5.cx=b5.x.h(0,"normAttr")
b5.ch=b5.x.h(0,"binmAttr")
b5.cy=b5.x.h(0,"txt2DAttr")
b5.db=b5.x.h(0,"txtCubeAttr")
b5.dx=b5.x.h(0,"bendAttr")
if(c0.dy)b5.id=H.h(b5.y.D(0,"invViewMat"),"$iO")
if(t)b5.dy=H.h(b5.y.D(0,"objMat"),"$iO")
if(r)b5.fr=H.h(b5.y.D(0,"viewObjMat"),"$iO")
b5.fy=H.h(b5.y.D(0,"projViewObjMat"),"$iO")
if(c0.go)b5.fx=H.h(b5.y.D(0,"viewMat"),"$iO")
if(c0.x1)b5.k1=H.h(b5.y.D(0,"txt2DMat"),"$ibu")
if(c0.x2)b5.k2=H.h(b5.y.D(0,"txtCubeMat"),"$iO")
if(c0.y1)b5.k3=H.h(b5.y.D(0,"colorMat"),"$iO")
b5.r1=H.b([],[A.O])
t=c0.be
if(t>0){b5.k4=b5.y.D(0,"bendMatCount")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.h(0,q)
if(m==null)H.o(P.m(b7+q+b8))
s.push(H.h(m,"$iO"))}}t=c0.a
if(t.a)b5.r2=H.h(b5.y.D(0,"emissionClr"),"$iD")
if(t.c)b5.ry=H.h(b5.y.D(0,"emissionTxt"),"$iR")
t=c0.b
if(t.a)b5.x1=H.h(b5.y.D(0,"ambientClr"),"$iD")
if(t.c)b5.y1=H.h(b5.y.D(0,"ambientTxt"),"$iR")
t=c0.c
if(t.a)b5.y2=H.h(b5.y.D(0,"diffuseClr"),"$iD")
if(t.c)b5.au=H.h(b5.y.D(0,"diffuseTxt"),"$iR")
t=c0.d
if(t.a)b5.bf=H.h(b5.y.D(0,"invDiffuseClr"),"$iD")
if(t.c)b5.d_=H.h(b5.y.D(0,"invDiffuseTxt"),"$iR")
t=c0.e
s=t.a
if(!s)r=t.c
else r=!0
if(r){b5.d2=H.h(b5.y.D(0,"shininess"),"$iL")
if(s)b5.d0=H.h(b5.y.D(0,"specularClr"),"$iD")
if(t.c)b5.d1=H.h(b5.y.D(0,"specularTxt"),"$iR")}if(c0.f.c)b5.d3=H.h(b5.y.D(0,"bumpTxt"),"$iR")
if(c0.db){b5.d4=H.h(b5.y.D(0,"envSampler"),"$iR")
t=c0.r
if(t.a)b5.d5=H.h(b5.y.D(0,"reflectClr"),"$iD")
if(t.c)b5.d6=H.h(b5.y.D(0,"reflectTxt"),"$iR")
t=c0.x
s=t.a
if(!s)r=t.c
else r=!0
if(r){b5.d7=H.h(b5.y.D(0,"refraction"),"$iL")
if(s)b5.d8=H.h(b5.y.D(0,"refractClr"),"$iD")
if(t.c)b5.d9=H.h(b5.y.D(0,"refractTxt"),"$iR")}}t=c0.y
if(t.a)b5.da=H.h(b5.y.D(0,"alpha"),"$iL")
if(t.c)b5.dc=H.h(b5.y.D(0,"alphaTxt"),"$iR")
if(c0.k1){t=c0.z
s=t.length
if(s!==0){r=P.v
b5.bP=new H.H([r,A.ae])
b5.bQ=new H.H([r,[P.b3,A.c5]])
for(r=[A.c5],l=0;l<t.length;t.length===s||(0,H.n)(t),++l){k=t[l]
j=k.a
i="barLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].startPnt"
m=p.h(0,o)
if(m==null)H.o(P.m(b7+o+b8))
H.h(m,"$iD")
p=b5.y
o=i+"s["+n+"].endPnt"
g=p.h(0,o)
if(g==null)H.o(P.m(b7+o+b8))
H.h(g,"$iD")
p=b5.y
o=i+"s["+n+"].color"
f=p.h(0,o)
if(f==null)H.o(P.m(b7+o+b8))
H.h(f,"$iD")
if(typeof j!=="number")return j.aj()
if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
e=p.h(0,o)
if(e==null)H.o(P.m(b7+o+b8))
H.h(e,"$iL")
p=b5.y
o=i+"s["+n+"].att1"
d=p.h(0,o)
if(d==null)H.o(P.m(b7+o+b8))
H.h(d,"$iL")
p=b5.y
o=i+"s["+n+"].att2"
c=p.h(0,o)
if(c==null)H.o(P.m(b7+o+b8))
H.h(c,"$iL")
b=c
a=d
a0=e}else{b=b6
a=b
a0=a}h.push(new A.c5(m,g,f,a0,a,b))}b5.bQ.k(0,j,h)
q=b5.bP
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.o(P.m(b7+o+b8))
q.k(0,j,m)}}t=c0.Q
s=t.length
if(s!==0){r=P.v
b5.bR=new H.H([r,A.ae])
b5.bS=new H.H([r,[P.b3,A.c6]])
for(r=[A.c6],l=0;l<t.length;t.length===s||(0,H.n)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.aj()
p=(j&1)!==0
if(p){o=b5.y
a1=i+"s["+n+"].objUp"
m=o.h(0,a1)
if(m==null)H.o(P.m(b7+a1+b8))
H.h(m,"$iD")
o=b5.y
a1=i+"s["+n+"].objRight"
g=o.h(0,a1)
if(g==null)H.o(P.m(b7+a1+b8))
H.h(g,"$iD")
o=b5.y
a1=i+"s["+n+"].objDir"
f=o.h(0,a1)
if(f==null)H.o(P.m(b7+a1+b8))
H.h(f,"$iD")
a2=f
a3=g
a4=m}else{a2=b6
a3=a2
a4=a3}o=b5.y
a1=i+"s["+n+"].viewDir"
m=o.h(0,a1)
if(m==null)H.o(P.m(b7+a1+b8))
H.h(m,"$iD")
o=b5.y
a1=i+"s["+n+"].color"
g=o.h(0,a1)
if(g==null)H.o(P.m(b7+a1+b8))
H.h(g,"$iD")
if(p){p=b5.y
o=i+"sTexture2D"+n
f=p.h(0,o)
if(f==null)H.o(P.m(b7+o+b8))
H.h(f,"$iaf")
a5=f}else a5=b6
h.push(new A.c6(a4,a3,a2,m,g,a5))}b5.bS.k(0,j,h)
q=b5.bR
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.o(P.m(b7+o+b8))
q.k(0,j,m)}}t=c0.ch
s=t.length
if(s!==0){r=P.v
b5.bT=new H.H([r,A.ae])
b5.bU=new H.H([r,[P.b3,A.c7]])
for(r=[A.c7],l=0;l<t.length;t.length===s||(0,H.n)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.h(0,o)
if(m==null)H.o(P.m(b7+o+b8))
H.h(m,"$iD")
p=b5.y
o=i+"s["+n+"].viewPnt"
g=p.h(0,o)
if(g==null)H.o(P.m(b7+o+b8))
H.h(g,"$iD")
p=b5.y
o=i+"s["+n+"].color"
f=p.h(0,o)
if(f==null)H.o(P.m(b7+o+b8))
H.h(f,"$iD")
if(typeof j!=="number")return j.aj()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
e=p.h(0,o)
if(e==null)H.o(P.m(b7+o+b8))
H.h(e,"$ibu")
a6=e}else a6=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
e=p.h(0,o)
if(e==null)H.o(P.m(b7+o+b8))
H.h(e,"$iR")
a5=e}else a5=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
e=p.h(0,o)
if(e==null)H.o(P.m(b7+o+b8))
H.h(e,"$iR")
p=b5.y
o=i+"s["+n+"].shadowAdj"
d=p.h(0,o)
if(d==null)H.o(P.m(b7+o+b8))
H.h(d,"$iba")
a7=e
a8=d}else{a7=b6
a8=a7}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
e=p.h(0,o)
if(e==null)H.o(P.m(b7+o+b8))
H.h(e,"$iL")
p=b5.y
o=i+"s["+n+"].att1"
d=p.h(0,o)
if(d==null)H.o(P.m(b7+o+b8))
H.h(d,"$iL")
p=b5.y
o=i+"s["+n+"].att2"
c=p.h(0,o)
if(c==null)H.o(P.m(b7+o+b8))
H.h(c,"$iL")
b=c
a=d
a0=e}else{b=b6
a=b
a0=a}h.push(new A.c7(m,g,a6,f,a5,a7,a8,a0,a,b))}b5.bU.k(0,j,h)
q=b5.bT
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.o(P.m(b7+o+b8))
q.k(0,j,m)}}t=c0.cx
s=t.length
if(s!==0){r=P.v
b5.bV=new H.H([r,A.ae])
b5.bW=new H.H([r,[P.b3,A.c8]])
for(r=[A.c8],l=0;l<t.length;t.length===s||(0,H.n)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.h(0,o)
if(m==null)H.o(P.m(b7+o+b8))
H.h(m,"$iD")
p=b5.y
o=i+"s["+n+"].objDir"
g=p.h(0,o)
if(g==null)H.o(P.m(b7+o+b8))
H.h(g,"$iD")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.h(0,o)
if(f==null)H.o(P.m(b7+o+b8))
H.h(f,"$iD")
p=b5.y
o=i+"s["+n+"].color"
e=p.h(0,o)
if(e==null)H.o(P.m(b7+o+b8))
H.h(e,"$iD")
if(typeof j!=="number")return j.aj()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
d=p.h(0,o)
if(d==null)H.o(P.m(b7+o+b8))
H.h(d,"$iD")
p=b5.y
o=i+"s["+n+"].objRight"
c=p.h(0,o)
if(c==null)H.o(P.m(b7+o+b8))
H.h(c,"$iD")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.h(0,o)
if(a9==null)H.o(P.m(b7+o+b8))
H.h(a9,"$iL")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.h(0,o)
if(b0==null)H.o(P.m(b7+o+b8))
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
if(d==null)H.o(P.m(b7+a1+b8))
H.h(d,"$iba")
a8=d}else a8=b6
if((j&8)!==0){o=b5.y
a1=i+"s["+n+"].cutoff"
d=o.h(0,a1)
if(d==null)H.o(P.m(b7+a1+b8))
H.h(d,"$iL")
o=b5.y
a1=i+"s["+n+"].coneAngle"
c=o.h(0,a1)
if(c==null)H.o(P.m(b7+a1+b8))
H.h(c,"$iL")
b3=c
b4=d}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
a1=i+"s["+n+"].att0"
d=o.h(0,a1)
if(d==null)H.o(P.m(b7+a1+b8))
H.h(d,"$iL")
o=b5.y
a1=i+"s["+n+"].att1"
c=o.h(0,a1)
if(c==null)H.o(P.m(b7+a1+b8))
H.h(c,"$iL")
o=b5.y
a1=i+"s["+n+"].att2"
a9=o.h(0,a1)
if(a9==null)H.o(P.m(b7+a1+b8))
H.h(a9,"$iL")
b=a9
a=c
a0=d}else{b=b6
a=b
a0=a}if((j&1)!==0){o=b5.y
a1=i+"sTexture2D"+n
d=o.h(0,a1)
if(d==null)H.o(P.m(b7+a1+b8))
H.h(d,"$iaf")
a5=d}else a5=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
d=p.h(0,o)
if(d==null)H.o(P.m(b7+o+b8))
H.h(d,"$iaf")
a7=d}else a7=b6
h.push(new A.c8(m,g,f,e,a4,a3,b2,b1,a8,b4,b3,a0,a,b,a5,a7))}b5.bW.k(0,j,h)
q=b5.bV
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.o(P.m(b7+o+b8))
q.k(0,j,m)}}}},
ae:function(a,b){if(b!=null&&b.d>=6)a.cd(b)}}
A.cv.prototype={
i:function(a){return"barLight"+H.e(this.a)}}
A.cC.prototype={
i:function(a){return"dirLight"+H.e(this.a)}}
A.d0.prototype={
i:function(a){return"pointLight"+H.e(this.a)}}
A.d7.prototype={
i:function(a){return"spotLight"+H.e(this.a)}}
A.fw.prototype={
i:function(a){return this.au}}
A.c5.prototype={}
A.c6.prototype={}
A.c7.prototype={}
A.c8.prototype={}
A.d4.prototype={
aR:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
aZ:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.cw(b,35633)
r.f=r.cw(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!u.getProgramParameter(r.r,35714)){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.o(P.m("Failed to link shader: "+H.e(s)))}r.fj()
r.fl()},
H:function(a){a.a.useProgram(this.r)
this.x.fI()},
cw:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.m("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
fj:function(){var u,t,s,r=this,q=H.b([],[A.cu]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.u(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cu(p,t.name,s))}r.x=new A.er(q)},
fl:function(){var u,t,s,r=this,q=H.b([],[A.dj]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.u(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.fF(t.type,t.size,t.name,s))}r.y=new A.hT(q)},
aF:function(a,b,c){var u=this.a
if(a===1)return new A.ae(u,b,c)
else return A.ji(u,this.r,b,a,c)},
e4:function(a,b,c){var u=this.a
if(a===1)return new A.af(u,b,c)
else return A.ji(u,this.r,b,a,c)},
e5:function(a,b,c){var u=this.a
if(a===1)return new A.R(u,b,c)
else return A.ji(u,this.r,b,a,c)},
bb:function(a,b){return new P.dA(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
fF:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aF(b,c,d)
case 5121:return u.aF(b,c,d)
case 5122:return u.aF(b,c,d)
case 5123:return u.aF(b,c,d)
case 5124:return u.aF(b,c,d)
case 5125:return u.aF(b,c,d)
case 5126:return new A.L(u.a,c,d)
case 35664:return new A.at(u.a,c,d)
case 35665:return new A.D(u.a,c,d)
case 35666:return new A.ba(u.a,c,d)
case 35667:return new A.hQ(u.a,c,d)
case 35668:return new A.hR(u.a,c,d)
case 35669:return new A.hS(u.a,c,d)
case 35674:return new A.hU(u.a,c,d)
case 35675:return new A.bu(u.a,c,d)
case 35676:return new A.O(u.a,c,d)
case 35678:return u.e4(b,c,d)
case 35680:return u.e5(b,c,d)
case 35670:throw H.c(u.bb("BOOL",c))
case 35671:throw H.c(u.bb("BOOL_VEC2",c))
case 35672:throw H.c(u.bb("BOOL_VEC3",c))
case 35673:throw H.c(u.bb("BOOL_VEC4",c))
default:throw H.c(P.m("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.bj.prototype={
i:function(a){return this.b}}
A.hl.prototype={}
A.hD.prototype={
dP:function(a,b,c){var u,t,s,r,q,p=this,o="Required uniform value, ",n=", was not defined or used in shader."
p.aZ(0,"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n":"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n",A.lj(a,b))
p.z=p.x.h(0,"posAttr")
p.Q=H.h(p.y.D(0,"txtCount"),"$iae")
p.ch=H.h(p.y.D(0,"backClr"),"$iba")
p.cx=H.b([],[A.af])
p.cy=H.b([],[A.O])
u=[A.at]
p.db=H.b([],u)
p.dx=H.b([],u)
p.dy=H.b([],u)
p.fr=H.b([],u)
p.fx=H.b([],[A.ae])
for(t=0;t<a;++t){u=p.cx
s=p.y
r="txt"+t
q=s.h(0,r)
if(q==null)H.o(P.m(o+r+n))
u.push(H.h(q,"$iaf"))
u=p.cy
s=p.y
r="clrMat"+t
q=s.h(0,r)
if(q==null)H.o(P.m(o+r+n))
u.push(H.h(q,"$iO"))
u=p.db
s=p.y
r="srcLoc"+t
q=s.h(0,r)
if(q==null)H.o(P.m(o+r+n))
u.push(H.h(q,"$iat"))
u=p.dx
s=p.y
r="srcSize"+t
q=s.h(0,r)
if(q==null)H.o(P.m(o+r+n))
u.push(H.h(q,"$iat"))
u=p.dy
s=p.y
r="destLoc"+t
q=s.h(0,r)
if(q==null)H.o(P.m(o+r+n))
u.push(H.h(q,"$iat"))
u=p.fr
s=p.y
r="destSize"+t
q=s.h(0,r)
if(q==null)H.o(P.m(o+r+n))
u.push(H.h(q,"$iat"))
u=p.fx
s=p.y
r="flip"+t
q=s.h(0,r)
if(q==null)H.o(P.m(o+r+n))
u.push(H.h(q,"$iae"))}}}
A.dj.prototype={}
A.hT.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
D:function(a,b){var u=this.h(0,b)
if(u==null)throw H.c(P.m("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.K()},
K:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.n)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.ae.prototype={
i:function(a){return"Uniform1i: "+H.e(this.c)}}
A.hQ.prototype={
i:function(a){return"Uniform2i: "+H.e(this.c)}}
A.hR.prototype={
i:function(a){return"Uniform3i: "+H.e(this.c)}}
A.hS.prototype={
i:function(a){return"Uniform4i: "+H.e(this.c)}}
A.hP.prototype={
i:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.L.prototype={
i:function(a){return"Uniform1f: "+H.e(this.c)}}
A.at.prototype={
i:function(a){return"Uniform2f: "+H.e(this.c)}}
A.D.prototype={
i:function(a){return"Uniform3f: "+H.e(this.c)}}
A.ba.prototype={
dE:function(a){var u=a.a,t=a.b,s=a.c,r=a.d
return this.a.uniform4f(this.d,u,t,s,r)},
dC:function(a){return this.a.uniform4f(this.d,a.a,a.b,a.c,a.d)},
i:function(a){return"Uniform4f: "+H.e(this.c)}}
A.hU.prototype={
i:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.bu.prototype={
a1:function(a){var u=new Float32Array(H.by(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.e(this.c)}}
A.O.prototype={
a1:function(a){var u=new Float32Array(H.by(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.e(this.c)}}
A.af.prototype={
dD:function(a){var u=a==null||!a.d,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.R.prototype={
cd:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.iI.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.c_(s.b,b).c_(s.d.c_(s.c,b),c)
s=new V.Q(r.a,r.b,r.c)
if(!J.C(a.f,s)){a.f=s
s=a.a
if(s!=null)s.a7()}a.sb3(r.t(0,Math.sqrt(r.C(r))))
s=1-b
u=1-c
u=new V.aH(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.C(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.a7()}}}
F.aX.prototype={
dZ:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.dq()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.de())return
return s.t(0,Math.sqrt(s.C(s)))},
e0:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.F(0,q)
r=new V.A(r.a,r.b,r.c)
s=r.t(0,Math.sqrt(r.C(r)))
r=t.F(0,q)
r=new V.A(r.a,r.b,r.c)
r=s.aX(r.t(0,Math.sqrt(r.C(r))))
return r.t(0,Math.sqrt(r.C(r)))},
bK:function(){var u,t=this
if(t.d!=null)return!0
u=t.dZ()
if(u==null){u=t.e0()
if(u==null)return!1}t.d=u
t.a.a.a7()
return!0},
dY:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.dq()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.de())return
return s.t(0,Math.sqrt(s.C(s)))},
e_:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.w().a){l=d.F(0,g)
l=new V.A(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.C(l)))
if(s.a-t.a<0)q=q.O(0)}else{p=(l-u.b)/r
l=d.F(0,g)
l=new V.Q(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).F(0,j)
l=new V.A(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.C(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.O(0)}l=n.d
if(l!=null){o=l.t(0,Math.sqrt(l.C(l)))
l=o.aX(q)
l=l.t(0,Math.sqrt(l.C(l))).aX(o)
q=l.t(0,Math.sqrt(l.C(l)))}return q},
bI:function(){var u,t=this
if(t.e!=null)return!0
u=t.dY()
if(u==null){u=t.e_()
if(u==null)return!1}t.e=u
t.a.a.a7()
return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
A:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.d.ah(J.a7(s.e),0)+", "+C.d.ah(J.a7(t.b.e),0)+", "+C.d.ah(J.a7(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.i(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.i(0)+"}"):u+"-}"},
K:function(){return this.A("")}}
F.bR.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
A:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.d.ah(J.a7(u.e),0)+", "+C.d.ah(J.a7(this.b.e),0)},
K:function(){return this.A("")}}
F.c0.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
A:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.d.ah(J.a7(u.e),0)},
K:function(){return this.A("")}}
F.he.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.z():u},
fO:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.a0()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.n)(g),++s){r=g[s]
h.a.l(0,r.fE())}h.a.a0()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.n)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.a0()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
n=p[o]
h.b.a.a.l(0,n)
o=new F.c0()
if(n.a==null)H.o(P.m("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.w(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.n)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.a0()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.a0()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.f(o,p)
k=o[p]
p=h.c.a
p.a.l(0,l)
p.a.l(0,k)
F.kS(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.n)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.a0()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.a0()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.f(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.a0()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
i=p[o]
o=h.d.a
o.a.l(0,l)
o.a.l(0,k)
o.a.l(0,i)
F.bM(l,k,i)}g=h.e
if(g!=null)g.ay(0)},
at:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.at()||!1
if(!t.a.at())u=!1
s=t.e
if(s!=null)s.ay(0)
return u},
aW:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.T()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.aS().a)!==0)++s
if((t&$.aR().a)!==0)++s
if((t&$.ax().a)!==0)++s
if((t&$.aT().a)!==0)++s
if((t&$.cq().a)!==0)++s
if((t&$.cr().a)!==0)++s
if((t&$.bE().a)!==0)++s
if((t&$.aQ().a)!==0)++s
r=a4.gcf(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.I])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.cx])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.fz(m)
k=l.gcf(l)
if(m>=t)return H.f(o,m)
o[m]=new Z.cx(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.f(i,j)
h=i[j].fN(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.f(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.by(p)),35044)
u.bindBuffer(a1,null)
c=new Z.ai(new Z.dr(a1,d),o,a4)
c.b=H.b([],[Z.bm])
if(a0.b.b.length!==0){b=H.b([],[P.v])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.a0()
b.push(t.e)}a=Z.jk(u,34963,b)
c.b.push(new Z.bm(0,b.length,a))}if(a0.c.b.length!==0){b=H.b([],[P.v])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.a0()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.f(t,m)
t=t[m].b
t.a.a.a0()
b.push(t.e)}a=Z.jk(u,34963,b)
c.b.push(new Z.bm(1,b.length,a))}if(a0.d.b.length!==0){b=H.b([],[P.v])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.a0()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.f(t,m)
t=t[m].b
t.a.a.a0()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.f(t,m)
t=t[m].c
t.a.a.a0()
b.push(t.e)}a=Z.jk(u,34963,b)
c.b.push(new Z.bm(4,b.length,a))}return c},
i:function(a){var u=this,t="   ",s=H.b([],[P.t])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.A(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.A(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.A(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.A(t))}return C.a.q(s,"\n")},
a7:function(){var u=this.e
if(u!=null)u.w(null)}}
F.hf.prototype={
fv:function(a){var u,t,s,r,q=H.b([],[F.aX]),p=a[0]
for(u=this.a,t=2;t<4;++t){s=a[t-1]
r=a[t]
u.a.l(0,p)
u.a.l(0,s)
u.a.l(0,r)
q.push(F.bM(p,s,r))}return q},
fw:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.aX])
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
h.push(F.bM(m,l,j))
u.a.l(0,m)
u.a.l(0,j)
u.a.l(0,i)
h.push(F.bM(m,j,i))}else{n.l(0,l)
u.a.l(0,j)
u.a.l(0,i)
h.push(F.bM(l,j,i))
u.a.l(0,l)
u.a.l(0,i)
u.a.l(0,m)
h.push(F.bM(l,i,m))}p=!p}r=!r}return h},
gj:function(a){return this.b.length},
at:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.n)(u),++r)if(!u[r].bK())s=!1
return s},
bJ:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.n)(u),++r)if(!u[r].bI())s=!1
return s},
i:function(a){return this.K()},
A:function(a){var u,t,s,r=H.b([],[P.t])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].A(a))
return C.a.q(r,"\n")},
K:function(){return this.A("")}}
F.hg.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.K()},
A:function(a){var u,t,s=H.b([],[P.t]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.f(t,u)
s.push(t[u].A(a+(""+u+". ")))}return C.a.q(s,"\n")},
K:function(){return this.A("")}}
F.hh.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.K()},
A:function(a){var u,t,s,r=H.b([],[P.t])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].A(a))
return C.a.q(r,"\n")},
K:function(){return this.A("")}}
F.bw.prototype={
bM:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.i4(u.cx,r,o,t,s,q,p,a,n)},
fE:function(){return this.bM(null)},
sb3:function(a){var u
if(!J.C(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a7()}},
fN:function(a){var u,t,s=this
if(a.n(0,$.T())){u=s.f
t=[P.I]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.aS())){u=s.r
t=[P.I]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.aR())){u=s.x
t=[P.I]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.ax())){u=s.y
t=[P.I]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.n(0,$.aT())){u=s.z
t=[P.I]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.cq())){u=s.Q
t=[P.I]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.cr())){u=s.Q
t=[P.I]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.n(0,$.bE()))return H.b([s.ch],[P.I])
else if(a.n(0,$.aQ())){u=s.cx
t=[P.I]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.I])},
bK:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.dq()
t.d.J(0,new F.ic(s))
s=s.a
t.r=s.t(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.a7()
s=t.a.e
if(s!=null)s.ay(0)}return!0},
bI:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.dq()
t.d.J(0,new F.ib(s))
s=s.a
t.x=s.t(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.a7()
s=t.a.e
if(s!=null)s.ay(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
A:function(a){var u,t,s=this,r="-",q=H.b([],[P.t])
q.push(C.d.ah(J.a7(s.e),0))
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
q.push(V.B(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.i(0))
else q.push(r)
t=C.a.q(q,", ")
return a+"{"+t+"}"},
K:function(){return this.A("")}}
F.ic.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.B(0,t)}}}
F.ib.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.B(0,t)}}}
F.i5.prototype={
a0:function(){},
l:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.m("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.a7()
return!0},
bd:function(a,b,c,d,e,f){var u=F.i4(a,null,b,c,null,d,e,f,0)
this.l(0,u)
return u},
gj:function(a){return this.c.length},
at:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)u[s].bK()
return!0},
bJ:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)u[s].bI()
return!0},
fB:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.t(0,Math.sqrt(p*p+o*o+n*n))
if(!J.C(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.w(null)}}}}return!0},
i:function(a){return this.K()},
A:function(a){var u,t,s,r
this.a0()
u=H.b([],[P.t])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.n)(t),++r)u.push(t[r].A(a))
return C.a.q(u,"\n")},
K:function(){return this.A("")}}
F.i6.prototype={
gj:function(a){return this.b.length+this.c.length+this.d.length},
J:function(a,b){var u=this
C.a.J(u.b,b)
C.a.J(u.c,new F.i7(u,b))
C.a.J(u.d,new F.i8(u,b))},
i:function(a){return this.K()},
K:function(){var u,t,s,r=H.b([],[P.t])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].A(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].A(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].A(""))
return C.a.q(r,"\n")}}
F.i7.prototype={
$1:function(a){if(!J.C(a.a,this.a))this.b.$1(a)}}
F.i8.prototype={
$1:function(a){var u=this.a
if(!J.C(a.a,u)&&!J.C(a.b,u))this.b.$1(a)}}
F.i9.prototype={
gj:function(a){return this.b.length+this.c.length},
i:function(a){return this.K()},
K:function(){var u,t,s,r=H.b([],[P.t])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].A(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].A(""))
return C.a.q(r,"\n")}}
F.ia.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.K()},
K:function(){var u,t,s,r=H.b([],[P.t])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].A(""))
return C.a.q(r,"\n")}}
O.eP.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.z():u},
p:function(a){var u=this.r
if(u!=null)u.w(a)},
a4:function(a,b){},
b2:function(a,b){var u,t,s,r,q=this,p="GreyViewDepth",o=q.a
if(o==null){u=a.fr.h(0,p)
if(u==null){o=a.a
u=new A.eQ(o,p)
u.aR(o,p)
u.aZ(0,"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n".charCodeAt(0)==0?"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n":"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n","precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n  f = f * 256.0;\n  float r = floor(f);\n  f = (f - r) * 256.0;\n  float g = floor(f);\n  f = (f - g) * 256.0;\n  float b = floor(f);\n  vec3 clr = vec3(r, g, b) / 256.0;\n  gl_FragColor = vec4(clr, 1.0);\n}\n".charCodeAt(0)==0?"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n  f = f * 256.0;\n  float r = floor(f);\n  f = (f - r) * 256.0;\n  float g = floor(f);\n  f = (f - g) * 256.0;\n  float b = floor(f);\n  vec3 clr = vec3(r, g, b) / 256.0;\n  gl_FragColor = vec4(clr, 1.0);\n}\n":"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n  f = f * 256.0;\n  float r = floor(f);\n  f = (f - r) * 256.0;\n  float g = floor(f);\n  f = (f - g) * 256.0;\n  float b = floor(f);\n  vec3 clr = vec3(r, g, b) / 256.0;\n  gl_FragColor = vec4(clr, 1.0);\n}\n")
u.z=u.x.h(0,"posAttr")
u.Q=H.h(u.y.h(0,"width"),"$iL")
u.ch=H.h(u.y.h(0,"stop"),"$iL")
u.cx=H.h(u.y.h(0,"viewObjMat"),"$iO")
u.cy=H.h(u.y.h(0,"projMat"),"$iO")
a.aU(u)}q.a=u
o=u}t=b.e
if((!(t instanceof Z.ai)?b.e=null:t)==null){o=b.d.aW(new Z.bb(a.a),$.T())
t=o.ab($.T())
s=q.a
t.e=s.z.c
b.e=o
o=s}o.H(a)
t=q.b
s=q.c
r=o.Q
r.a.uniform1f(r.d,t-s)
s=q.c
t=o.ch
t.a.uniform1f(t.d,s)
s=a.cy
s=s.gU(s)
t=o.cy
t.toString
t.a1(s.X(0,!0))
s=a.gdw()
o=o.cx
o.toString
o.a1(s.X(0,!0))
o=b.e
o.H(a)
o.V(a)
o.a3(a)
o=q.a
o.toString
a.a.useProgram(null)
o.x.aY()}}
O.cJ.prototype={
gm:function(){var u=this.x
return u==null?this.x=D.z():u},
p:function(a){var u=this.x
if(u!=null)u.w(a)},
a5:function(){return this.p(null)},
sbH:function(a){var u=this.r
if(!(Math.abs(u-a)<$.w().a)){this.r=a
u=new D.q("blurValue",u,a)
u.b=!0
this.p(u)}},
scW:function(a){var u,t=this,s=t.e
if(s!=a){if(s!=null)s.gm().N(0,t.gY())
u=t.e
t.e=a
if(a!=null)a.gm().l(0,t.gY())
s=new D.q("colorTexture",u,t.e)
s.b=!0
t.p(s)}},
sbG:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gm().N(0,s.gY())
u=s.f
s.f=a
if(a!=null)a.gm().l(0,s.gY())
r=new D.q("blurTexture",u,s.f)
t=r.b=!0
s.p(r)
r=s.f==null
if(!(r&&u!=null))r=!r&&u==null
else r=t
if(r){s.a=null
s.p(null)}}},
sc8:function(a){var u,t=this,s=$.jH
if(s==null){s=new V.bW(1,0,0,0,1,0,0,0,1)
$.jH=s
a=s}else a=s
if(!J.C(t.b,a)){u=t.b
t.b=a
s=new D.q("textureMatrix",u,a)
s.b=!0
t.p(s)}},
sbF:function(a){var u,t,s=this
if(a==null){u=$.k3
if(u==null){u=new V.bv(1,0.00390625,0.0000152587890625,0)
$.k3=u
a=u}else a=u}if(!J.C(s.c,a)){t=s.c
s.c=a
u=new D.q("blurAdjust",t,a)
u.b=!0
s.p(u)}},
a4:function(a,b){},
a6:function(a,b){if(b!=null)if(!C.a.a_(a,b)){b.a=a.length
a.push(b)}},
b2:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.a
if(g==null){u=h.f!=null
g="GaussianBlur_"+(u?"1":"0")
t=g.charCodeAt(0)==0?g:g
s=a.fr.h(0,t)
if(s==null){g=a.a
s=new A.f9(g,t)
s.aR(g,t)
r=s.z=new A.fa(u,t)
q=new P.ap("")
q.a="precision mediump float;\n"
q.a="precision mediump float;\n\n"
q.a="precision mediump float;\n\nuniform sampler2D colorTxt;\n"
if(u){q.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform sampler2D blurTxt;\n"
g=q.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform sampler2D blurTxt;\nuniform vec4 blurAdj;\n"}else g=q.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform float blurValue;\n"
g+="uniform vec2 blurScale;\n"
q.a=g
g+="\n"
q.a=g
g+="varying vec2 txt2D;\n"
q.a=g
q.a=g+"\n"
g=[P.I]
r.aE(q,3,H.b([0.75],g),H.b([0.5],g))
r.aE(q,6,H.b([0.42857,2.14286],g),H.b([0.41667,0.08333],g))
r.aE(q,9,H.b([0,1.8],g),H.b([0.5122,0.2439],g))
r.aE(q,12,H.b([0,1.38462,3.23077],g),H.b([0.22703,0.31622,0.07027],g))
r.aE(q,15,H.b([0.9375,2.8125],g),H.b([0.36184,0.13816],g))
r.aE(q,18,H.b([0.47368,2.36842,4.26316],g),H.b([0.29916,0.16318,0.03766],g))
g=q.a+="void main()\n"
g=q.a=g+"{\n"
g=(u?q.a=g+"   float blurValue = dot(texture2D(blurTxt, txt2D), blurAdj);\n":g)+"   float blurOffset = abs(blurValue);\n"
q.a=g
g+="\n"
q.a=g
g+="   if     (blurOffset < 0.15) gl_FragColor = texture2D(colorTxt, txt2D);\n"
q.a=g
g+="   else if(blurOffset < 0.3)  gl_FragColor = blur3();\n"
q.a=g
g+="   else if(blurOffset < 0.45) gl_FragColor = blur6();\n"
q.a=g
g+="   else if(blurOffset < 0.6)  gl_FragColor = blur9();\n"
q.a=g
g+="   else if(blurOffset < 0.75) gl_FragColor = blur12();\n"
q.a=g
g+="   else if(blurOffset < 0.9)  gl_FragColor = blur15();\n"
q.a=g
g+="   else                       gl_FragColor = blur18();\n"
q.a=g
g=q.a=g+"}\n"
s.aZ(0,"uniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n\nattribute vec3 posAttr;\nattribute vec2 txtAttr;\n\nvarying vec2 txt2D;\n\nvoid main()\n{\n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;\n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"uniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n\nattribute vec3 posAttr;\nattribute vec2 txtAttr;\n\nvarying vec2 txt2D;\n\nvoid main()\n{\n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;\n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n":"uniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n\nattribute vec3 posAttr;\nattribute vec2 txtAttr;\n\nvarying vec2 txt2D;\n\nvoid main()\n{\n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;\n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n",g.charCodeAt(0)==0?g:g)
s.Q=s.x.h(0,"posAttr")
s.ch=s.x.h(0,"txtAttr")
s.cx=H.h(s.y.h(0,"projViewObjMat"),"$iO")
s.cy=H.h(s.y.h(0,"txt2DMat"),"$ibu")
s.dy=H.h(s.y.h(0,"colorTxt"),"$iaf")
s.dx=H.h(s.y.h(0,"blurScale"),"$iat")
g=s.y
if(u){s.fr=H.h(g.h(0,"blurTxt"),"$iaf")
s.db=H.h(s.y.h(0,"blurAdj"),"$iba")}else s.fx=H.h(g.h(0,"blurValue"),"$iL")
a.aU(s)}g=h.a=s
b.e=null}r=g.z
g=b.e
if((!(g instanceof Z.ai)?b.e=null:g)==null){g=b.d
p=$.T()
o=$.ax()
o=g.aW(new Z.bb(a.a),new Z.au(p.a|o.a))
o.ab($.T()).e=h.a.Q.c
o.ab($.ax()).e=h.a.ch.c
b.e=o}n=H.b([],[T.bs])
h.a6(n,h.e)
g=r.a
if(g)h.a6(n,h.f)
for(m=0;m<n.length;++m)n[m].H(a)
p=h.a
p.H(a)
o=h.e
p.cI(p.dy,o)
o=h.b
l=p.cy
l.toString
l.a1(o.X(0,!0))
o=h.d
l=o.a
k=a.c
if(typeof l!=="number")return l.t()
o=o.b
j=a.d
if(typeof o!=="number")return o.t()
i=p.dx
i.a.uniform2f(i.d,l/k,o/j)
j=a.gdr()
p=p.cx
p.toString
p.a1(j.X(0,!0))
p=h.a
if(g){g=h.f
p.cI(p.fr,g)
g=h.c
p.db.dE(g)}else{g=h.r
p=p.fx
p.a.uniform1f(p.d,g)}g=b.e
if(g instanceof Z.ai){g.H(a)
g.V(a)
g.a3(a)}else b.e=null
g=h.a
g.toString
p=a.a
p.useProgram(null)
g.x.aY()
for(m=0;m<n.length;++m){g=n[m]
if(g.c){g.c=!1
p.activeTexture(33984+g.a)
p.bindTexture(3553,null)}}}}
O.cU.prototype={
gm:function(){var u=this.fr
return u==null?this.fr=D.z():u},
p:function(a){var u=this.fr
if(u!=null)u.w(a)},
a5:function(){return this.p(null)},
cE:function(a){this.a=null
this.p(a)},
fh:function(){return this.cE(null)},
el:function(a,b){var u=new D.aZ()
u.b=!0
this.p(u)},
en:function(a,b){var u=new D.b_()
u.b=!0
this.p(u)},
cu:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=P.v
f=[f,f]
u=new H.H(f)
for(t=g.dx.e,s=t.length,r=0;r<t.length;t.length===s||(0,H.n)(t),++r){q=t[r]
p=q.gam()
o=u.h(0,q.gam())
u.k(0,p,o==null?1:o)}n=H.b([],[A.cv])
u.J(0,new O.fA(g,n))
C.a.aQ(n,new O.fB())
m=new H.H(f)
for(t=g.dx.f,s=t.length,r=0;r<t.length;t.length===s||(0,H.n)(t),++r){p=m.h(0,0)
m.k(0,0,p==null?1:p)}l=H.b([],[A.cC])
m.J(0,new O.fC(g,l))
C.a.aQ(l,new O.fD())
k=new H.H(f)
for(t=g.dx.r,s=t.length,r=0;r<t.length;t.length===s||(0,H.n)(t),++r){q=t[r]
p=q.gam()
o=k.h(0,q.gam())
k.k(0,p,o==null?1:o)}j=H.b([],[A.d0])
k.J(0,new O.fE(g,j))
C.a.aQ(j,new O.fF())
i=new H.H(f)
for(f=g.dx.x,t=f.length,r=0;r<f.length;f.length===t||(0,H.n)(f),++r){q=f[r]
s=q.gam()
p=i.h(0,q.gam())
i.k(0,s,p==null?1:p)}h=H.b([],[A.d7])
i.J(0,new O.fG(g,h))
C.a.aQ(h,new O.fH())
f=C.c.a2(g.e.a.length+3,4)
g.dy.e
return A.kY(!1,!1,!1,!1,f*4,g.f.c,g.r.c,g.x.c,g.y.c,g.z.c,g.Q.c,g.cx.c,g.cy.c,g.db.c,n,l,j,h)},
a6:function(a,b){if(b!=null)if(!C.a.a_(a,b)){b.a=a.length
a.push(b)}},
a4:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.Z(u,u.length);u.v();){t=u.d
t.toString
s=$.i3
if(s==null)s=$.i3=new V.A(0,0,1)
t.a=s
r=$.i2
t.d=r==null?$.i2=new V.A(0,1,0):r
r=$.i1
t.e=r==null?$.i1=new V.A(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bk(s)
r=s.a
p=s.b
o=s.c
t.a=s.t(0,Math.sqrt(r*r+p*p+o*o))
o=q.bk(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.t(0,Math.sqrt(p*p+r*r+s*s))
s=q.bk(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.t(0,Math.sqrt(r*r+p*p+o*o))}}}},
b2:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=b0.a
if(b1==null){b1=b0.cu()
u=b2.fr.h(0,b1.au)
if(u==null){u=A.kX(b1,b2.a)
b2.aU(u)}b1=b0.a=u
b3.e=null}t=b1.z
s=t.bf
b1=b3.e
if(!(b1 instanceof Z.ai))b1=b3.e=null
if(b1==null||!b1.d.n(0,s)){b1=t.k4
if(b1)b3.d.at()
r=t.r1
if(r){q=b3.d
p=q.e
if(p!=null)++p.d
q.d.bJ()
q.a.bJ()
q=q.e
if(q!=null)q.ay(0)}q=t.rx
if(q){p=b3.d
o=p.e
if(o!=null)++o.d
p.a.fB()
p=p.e
if(p!=null)p.ay(0)}n=b3.d.aW(new Z.bb(b2.a),s)
n.ab($.T()).e=b0.a.Q.c
if(b1)n.ab($.aS()).e=b0.a.cx.c
if(r)n.ab($.aR()).e=b0.a.ch.c
if(t.r2)n.ab($.ax()).e=b0.a.cy.c
if(q)n.ab($.aT()).e=b0.a.db.c
if(t.ry)n.ab($.aQ()).e=b0.a.dx.c
b3.e=n}m=H.b([],[T.bs])
b0.a.H(b2)
if(t.fr){b1=b0.a
r=b2.dx
r=r.gU(r)
b1=b1.dy
b1.toString
b1.a1(r.X(0,!0))}if(t.fx){b1=b0.a
r=b2.gdw()
b1=b1.fr
b1.toString
b1.a1(r.X(0,!0))}b1=b0.a
r=b2.gdr()
b1=b1.fy
b1.toString
b1.a1(r.X(0,!0))
if(t.go){b1=b0.a
r=b2.db
r=r.gU(r)
b1=b1.fx
b1.toString
b1.a1(r.X(0,!0))}if(t.x1){b1=b0.a
r=b0.b
b1=b1.k1
b1.toString
b1.a1(C.k.X(r,!0))}if(t.x2){b1=b0.a
r=b0.c
b1=b1.k2
b1.toString
b1.a1(C.k.X(r,!0))}if(t.y1){b1=b0.a
r=b0.d
b1=b1.k3
b1.toString
b1.a1(C.k.X(r,!0))}if(t.be>0){l=b0.e.a.length
b1=b0.a.k4
b1.a.uniform1i(b1.d,l)
for(k=0;k<l;++k){b1=b0.a
r=b0.e.a
if(k>=r.length)return H.f(r,k)
r=r[k]
b1=b1.r1
if(k>=b1.length)return H.f(b1,k)
b1=b1[k]
j=new Float32Array(H.by(r.X(0,!0)))
b1.a.uniformMatrix4fv(b1.d,!1,j)}}b1=t.a
if(b1.a){r=b0.a
q=b0.f.f
r=r.r2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.c){b0.a6(m,b0.f.e)
b1=b0.a
r=b0.f.e
b1.ae(b1.ry,r)}if(t.k1){b1=t.b
if(b1.a){r=b0.a
q=b0.r.f
r=r.x1
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.c){b0.a6(m,b0.r.e)
b1=b0.a
r=b0.r.e
b1.ae(b1.y1,r)}b1=t.c
if(b1.a){r=b0.a
q=b0.x.f
r=r.y2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.c){b0.a6(m,b0.x.e)
b1=b0.a
r=b0.x.e
b1.ae(b1.au,r)}b1=t.d
if(b1.a){r=b0.a
q=b0.y.f
r=r.bf
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.c){b0.a6(m,b0.y.e)
b1=b0.a
r=b0.y.e
b1.ae(b1.d_,r)}b1=t.e
r=b1.a
if(!r)q=b1.c
else q=!0
if(q){q=b0.a
p=b0.z.ch
q=q.d2
q.a.uniform1f(q.d,p)}if(r){r=b0.a
q=b0.z.f
r=r.d0
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.c){b0.a6(m,b0.z.e)
b1=b0.a
r=b0.z.e
b1.ae(b1.d1,r)}b1=t.z
if(b1.length>0){r=P.v
i=new H.H([r,r])
for(r=b0.dx.e,q=r.length,h=0;h<r.length;r.length===q||(0,H.n)(r),++h){g=r[h]
f=g.gam()
e=i.h(0,f)
if(e==null)e=0
i.k(0,f,e+1)
d=J.cs(b0.a.bQ.h(0,f),e)
p=g.ghi()
o=$.ao
p=p.b5(o==null?$.ao=new V.Q(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.ghn()
o=$.ao
p=p.b5(o==null?$.ao=new V.Q(0,0,0):o)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gaL(g)
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
if(g.gcZ()){p=g.gcO()
o=d.e
o.a.uniform1f(o.d,p)
p=g.gcP()
o=d.f
o.a.uniform1f(o.d,p)
p=g.gcQ()
o=d.r
o.a.uniform1f(o.d,p)}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.n)(b1),++h){q=b1[h].a
l=i.h(0,q)
if(l==null)l=0
q=b0.a.bP.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.Q
if(b1.length>0){r=b2.db
c=r.gU(r)
r=P.v
b=new H.H([r,r])
for(r=b0.dx.f,q=r.length,h=0;h<r.length;r.length===q||(0,H.n)(r),++h){g=r[h]
e=b.h(0,0)
if(e==null)e=0
b.k(0,0,e+1)
d=J.cs(b0.a.bS.h(0,0),e)
p=c.bk(g.a)
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
p.a.uniform3f(p.d,a0.a,a0.b,a0.c)}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.n)(b1),++h){q=b1[h].a
l=b.h(0,q)
if(l==null)l=0
q=b0.a.bR.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.ch
if(b1.length>0){r=b2.db
c=r.gU(r)
r=P.v
a1=new H.H([r,r])
for(r=b0.dx.r,q=r.length,h=0;h<r.length;r.length===q||(0,H.n)(r),++h){g=r[h]
f=g.gam()
e=a1.h(0,f)
if(e==null)e=0
a1.k(0,f,e+1)
d=J.cs(b0.a.bU.h(0,f),e)
a2=c.u(0,g.gU(g))
p=g.gU(g)
o=$.ao
p=p.b5(o==null?$.ao=new V.Q(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=$.ao
p=a2.b5(p==null?$.ao=new V.Q(0,0,0):p)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gaL(g)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
g.gaA()
p=a2.bY(0)
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
j=new Float32Array(H.by(new V.bW(o,a,a0,a3,a4,a5,a6,a7,p).X(0,!0)))
a8.a.uniformMatrix3fv(a8.d,!1,j)
g.gaA()
p=g.gaA()
if(!C.a.a_(m,p)){p.a=m.length
m.push(p)}p=g.gaA()
o=p.gc0(p)
if(o){o=d.f
o.toString
a=p.d
if(a<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}g.gaP()
p=g.gdF()
o=d.x
o.a.uniform4f(o.d,p.a,p.b,p.c,p.d)
p=g.gaP()
if(!C.a.a_(m,p)){p.a=m.length
m.push(p)}p=g.gaP()
o=p.gc0(p)
if(o){o=d.r
o.toString
a=p.d
if(a<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}if(g.gcZ()){p=g.gcO()
o=d.y
o.a.uniform1f(o.d,p)
p=g.gcP()
o=d.z
o.a.uniform1f(o.d,p)
p=g.gcQ()
o=d.Q
o.a.uniform1f(o.d,p)}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.n)(b1),++h){q=b1[h].a
l=a1.h(0,q)
if(l==null)l=0
q=b0.a.bT.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.cx
if(b1.length>0){r=b2.db
c=r.gU(r)
r=P.v
a9=new H.H([r,r])
for(r=b0.dx.x,q=r.length,h=0;h<r.length;r.length===q||(0,H.n)(r),++h){g=r[h]
f=g.gam()
e=a9.h(0,f)
if(e==null)e=0
a9.k(0,f,e+1)
d=J.cs(b0.a.bW.h(0,f),e)
p=g.gh2(g)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.ghl(g).hx()
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=c.b5(g.gh2(g))
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gaL(g)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
g.gaA()
p=g.gc9()
o=d.f
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gc7(g)
o=d.r
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.ghy()
o=d.x
o.a.uniform1f(o.d,p)
p=g.ghz()
o=d.y
o.a.uniform1f(o.d,p)
g.gaA()
p=g.gaA()
if(!C.a.a_(m,p)){p.a=m.length
m.push(p)}p=g.gaA()
o=p.gc0(p)
if(o){o=d.dx
o.toString
a=p.d
if(!a)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}g.gaP()
p=g.gdF()
o=d.z
o.a.uniform4f(o.d,p.a,p.b,p.c,p.d)
p=g.gaP()
if(!C.a.a_(m,p)){p.a=m.length
m.push(p)}p=g.gaP()
o=p.gc0(p)
if(o){o=d.dy
o.toString
a=p.d
if(!a)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}if(g.ghm()){p=g.ghk()
o=d.Q
o.a.uniform1f(o.d,p)
p=g.ghj()
o=d.ch
o.a.uniform1f(o.d,p)}if(g.gcZ()){p=g.gcO()
o=d.cx
o.a.uniform1f(o.d,p)
p=g.gcP()
o=d.cy
o.a.uniform1f(o.d,p)
p=g.gcQ()
o=d.db
o.a.uniform1f(o.d,p)}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.n)(b1),++h){q=b1[h].a
l=a9.h(0,q)
if(l==null)l=0
q=b0.a.bV.h(0,q)
q.a.uniform1i(q.d,l)}}}if(t.f.c){b0.a6(m,b0.Q.e)
b1=b0.a
r=b0.Q.e
b1.ae(b1.d3,r)}if(t.dy){b1=b0.a
r=b2.Q
if(r==null){r=b2.db
r=b2.Q=r.gU(r).bY(0)}b1=b1.id
b1.toString
b1.a1(r.X(0,!0))}if(t.db){b0.a6(m,b0.ch)
b1=b0.a
r=b0.ch
b1.ae(b1.d4,r)
b1=t.r
if(b1.a){r=b0.a
q=b0.cx.f
r=r.d5
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.c){b0.a6(m,b0.cx.e)
b1=b0.a
r=b0.cx.e
b1.ae(b1.d6,r)}b1=t.x
r=b1.a
if(!r)q=b1.c
else q=!0
if(q){q=b0.a
p=b0.cy.ch
q=q.d7
q.a.uniform1f(q.d,p)}if(r){r=b0.a
q=b0.cy.f
r=r.d8
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.c){b0.a6(m,b0.cy.e)
b1=b0.a
r=b0.cy.e
b1.ae(b1.d9,r)}}b1=t.y
r=b1.a
q=!r
if(q)p=b1.c
else p=!0
if(p){if(r){r=b0.a
p=b0.db.f
r=r.da
r.a.uniform1f(r.d,p)}if(b1.c){b0.a6(m,b0.db.e)
r=b0.a
p=b0.db.e
r.ae(r.dc,p)}r=b2.a
r.enable(3042)
r.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].H(b2)
r=b3.e
r.H(b2)
r.V(b2)
r.a3(b2)
if(q)b1=b1.c
else b1=!0
if(b1)b2.a.disable(3042)
for(b1=b2.a,k=0;k<m.length;++k){r=m[k]
if(r.c){r.c=!1
b1.activeTexture(33984+r.a)
b1.bindTexture(34067,null)}}r=b0.a
r.toString
b1.useProgram(null)
r.x.aY()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cu().au}}
O.fA.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.cv(a,C.c.a2(b+3,4)*4))}}
O.fB.prototype={
$2:function(a,b){return J.ct(a.a,b.a)}}
O.fC.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.cC(a,C.c.a2(b+3,4)*4))}}
O.fD.prototype={
$2:function(a,b){return J.ct(a.a,b.a)}}
O.fE.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.d0(a,C.c.a2(b+3,4)*4))}}
O.fF.prototype={
$2:function(a,b){return J.ct(a.a,b.a)}}
O.fG.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.d7(a,C.c.a2(b+3,4)*4))}}
O.fH.prototype={
$2:function(a,b){return J.ct(a.a,b.a)}}
O.fu.prototype={
ar:function(){var u,t=this
t.cl()
u=t.f
if(!(Math.abs(u-1)<$.w().a)){t.f=1
u=new D.q(t.b,u,1)
u.b=!0
t.a.p(u)}}}
O.bV.prototype={
p:function(a){return this.a.p(a)},
a5:function(){return this.p(null)},
ar:function(){},
bC:function(a){var u,t,s=this
if(!s.c.n(0,a)){u=s.c
if(!u.a)u=u.c
else u=!0
if(u){if(!a.a)u=a.c
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.ar()
u=s.a
u.a=null
u.p(null)}},
sb3:function(a){var u,t=this,s=t.c
if(!s.c)t.bC(new A.U(s.a,!1,!0))
s=t.e
if(s!==a){if(s!=null)s.gm().N(0,t.gY())
u=t.e
t.e=a
a.gm().l(0,t.gY())
s=new D.q(t.b+".textureCube",u,t.e)
s.b=!0
t.a.p(s)}}}
O.fv.prototype={}
O.al.prototype={
cG:function(a){var u,t,s=this
if(!s.f.n(0,a)){u=s.f
s.f=a
t=new D.q(s.b+".color",u,a)
t.b=!0
s.a.p(t)}},
ar:function(){this.cl()
this.cG(new V.N(1,1,1))},
saL:function(a,b){this.bC(new A.U(!0,!1,this.c.c))
this.cG(b)}}
O.fx.prototype={}
O.fy.prototype={
ar:function(){var u,t=this
t.cm()
u=t.ch
if(!(Math.abs(u-1)<$.w().a)){t.ch=1
u=new D.q(t.b+".refraction",u,1)
u.b=!0
t.a.p(u)}}}
O.fz.prototype={
cH:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.w().a)){u.ch=a
t=new D.q(u.b+".shininess",t,a)
t.b=!0
u.a.p(t)}},
ar:function(){this.cm()
this.cH(100)}}
O.d5.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.z():u},
p:function(a){var u=this.e
if(u!=null)u.w(a)},
a5:function(){return this.p(null)},
a4:function(a,b){},
b2:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=a.fr.h(0,n)
if(u==null){t=a.a
u=new A.hl(t,n)
u.aR(t,n)
u.aZ(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.h(0,"posAttr")
u.Q=H.h(u.y.h(0,"fov"),"$iL")
u.ch=H.h(u.y.h(0,"ratio"),"$iL")
u.cx=H.h(u.y.h(0,"boxClr"),"$iD")
u.cy=H.h(u.y.h(0,"boxTxt"),"$iR")
u.db=H.h(u.y.h(0,"viewMat"),"$iO")
a.aU(u)}o.a=u}if(b.e==null){t=b.d.aW(new Z.bb(a.a),$.T())
t.ab($.T()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
t.H(a)}t=a.d
s=a.c
r=o.a
r.H(a)
q=o.b
p=r.Q
p.a.uniform1f(p.d,q)
q=r.ch
q.a.uniform1f(q.d,t/s)
s=o.c
r.cy.cd(s)
s=o.d
t=r.cx
t.a.uniform3f(t.d,s.a,s.b,s.c)
s=a.db
s=s.gU(s).bY(0)
r=r.db
r.toString
r.a1(s.X(0,!0))
t=b.e
if(t instanceof Z.ai){t.H(a)
t.V(a)
t.a3(a)}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.aY()
t=o.c
if(t!=null)t.a3(a)}}
O.db.prototype={}
O.dc.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.z():u},
p:function(a){var u=this.e
if(u!=null)u.w(a)},
a5:function(){return this.p(null)},
eC:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gY(),s=[{func:1,ret:-1,args:[D.P]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q!=null){p=q.f
if(p==null){p=new D.aW()
p.d=0
q.f=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.a5()},
eE:function(a,b){var u,t
for(u=b.gP(b),t=this.gY();u.v();)u.gG(u).gm().N(0,t)
this.a5()},
scS:function(a){var u=this.f
if(u!==a){this.f=a
u=new D.q("blend",u,a)
u.b=!0
this.p(u)}},
a4:function(a,b){},
e9:function(a){a=C.c.a2(a+3,4)*4
if(a<=0)return 4
return a},
b2:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.e9(j.c.a.length)
if(i!==j.d||j.f!=j.r){j.d=i
j.r=j.f
j.b=null}u=j.b
if(u==null){u=j.f
t="TextureLayout_"+i+"_"+C.c.i(u.a)
s=a.fr.h(0,t)
if(s==null){s=A.li(i,u,a.a)
a.aU(s)}j.b=s
u=s}if(b.e==null){u=b.d.aW(new Z.bb(a.a),$.T())
t=u.ab($.T())
r=j.b
t.e=r.z.c
b.e=u
u=r}u.H(a)
q=H.b([],[T.bs])
for(p=0,o=0;u=j.c.a,o<u.length;++o){n=u[o]
if(n!=null&&n.a!=null){u=n.a
if(u!=null)if(!C.a.a_(q,u)){u.a=q.length
q.push(u)}u=j.b
t=n.a
u=u.cx
if(p>=u.length)return H.f(u,p)
u=u[p]
r=t==null||!t.d
m=u.a
u=u.d
if(r)m.uniform1i(u,0)
else m.uniform1i(u,t.a)
u=j.b
t=n.b
u=u.cy
if(p>=u.length)return H.f(u,p)
u=u[p]
if(t==null){t=$.fI
if(t==null){t=new V.aa(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.fI=t}}l=new Float32Array(H.by(t.X(0,!0)))
u.a.uniformMatrix4fv(u.d,!1,l)
u=j.b
k=n.c
u.toString
if(k==null){t=$.c4
if(t==null){t=V.c3(0,0,1,1)
$.c4=t
k=t}else k=t}t=u.db
if(p>=t.length)return H.f(t,p)
t=t[p]
t.a.uniform2f(t.d,k.a,k.b)
u=u.dx
if(p>=u.length)return H.f(u,p)
u=u[p]
u.a.uniform2f(u.d,k.c,k.d)
u=j.b
k=n.d
u.toString
if(k==null){t=$.c4
if(t==null){t=V.c3(0,0,1,1)
$.c4=t
k=t}else k=t}t=u.dy
if(p>=t.length)return H.f(t,p)
t=t[p]
t.a.uniform2f(t.d,k.a,k.b)
u=u.fr
if(p>=u.length)return H.f(u,p)
u=u[p]
u.a.uniform2f(u.d,k.c,k.d)
u=j.b
t=n.e
u=u.fx
if(p>=u.length)return H.f(u,p)
u=u[p]
t=t?1:0
u.a.uniform1i(u.d,t);++p}}u=j.b.Q
u.a.uniform1i(u.d,p)
u=j.b
t=j.a
u.ch.dC(t)
for(o=0;o<q.length;++o)q[o].H(a)
u=b.e
if(u instanceof Z.ai){u.H(a)
u.V(a)
u.a3(a)}else b.e=null
u=j.b
u.toString
t=a.a
t.useProgram(null)
u.x.aY()
for(o=0;o<q.length;++o){u=q[o]
if(u.c){u.c=!1
t.activeTexture(33984+u.a)
t.bindTexture(3553,null)}}}}
O.b7.prototype={
p:function(a){var u=this.f
if(u!=null)u.w(a)},
a5:function(){return this.p(null)}}
T.bs.prototype={}
T.hA.prototype={}
T.hB.prototype={
gm:function(){var u=this.y
return u==null?this.y=D.z():u},
H:function(a){var u,t=this
if(!t.c&&t.d){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(3553,t.b)}}}
T.hC.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.z():u},
H:function(a){var u,t=this
if(!t.c&&t.d>=6){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(34067,t.b)}},
a3:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(34067,null)}}}
T.hE.prototype={
dg:function(a,b){var u,t=this,s=34067,r=a+"/posx"+b,q=a+"/posy"+b,p=a+"/posz"+b,o=a+"/negx"+b,n=a+"/negy"+b,m=a+"/negz"+b,l=t.a,k=l.createTexture()
l.bindTexture(s,k)
l.texParameteri(s,10242,10497)
l.texParameteri(s,10243,10497)
l.texParameteri(s,10241,9729)
l.texParameteri(s,10240,9729)
l.bindTexture(s,null)
u=new T.hC()
u.a=0
u.b=k
u.c=!1
u.d=0
t.aG(u,k,r,34069,!1,!1)
t.aG(u,k,o,34070,!1,!1)
t.aG(u,k,q,34071,!1,!1)
t.aG(u,k,n,34072,!1,!1)
t.aG(u,k,p,34073,!1,!1)
t.aG(u,k,m,34074,!1,!1)
return u},
df:function(a){return this.dg(a,".png")},
aG:function(a,b,c,d,e,f){var u=document.createElement("img")
u.src=c;++this.d
W.S(u,"load",new T.hF(this,u,!1,b,!1,d,a),!1)},
fi:function(a,b,c){var u,t,s,r
b=V.co(b)
u=V.co(a.width)
t=V.co(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.j2()
s.width=u
s.height=t
r=C.f.dz(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.mb(r.getImageData(0,0,s.width,s.height))}}}
T.hF.prototype={
$1:function(a){var u=this,t=u.a,s=t.fi(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.q.hb(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.bO()}++t.e}}
X.ew.prototype={
gm:function(){var u=this.fr
return u==null?this.fr=D.z():u},
Z:function(a){var u=this.fr
if(u!=null)u.w(a)},
sai:function(a,b){var u,t=this
if(b<1)b=1
u=t.a
if(u!==b){t.y=null
t.c=t.a=b
u=new D.q("width",u,b)
u.b=!0
t.Z(u)}},
saf:function(a,b){var u,t=this
if(b<1)b=1
u=t.b
if(u!==b){t.y=null
t.d=t.b=b
u=new D.q("height",u,b)
u.b=!0
t.Z(u)}},
H:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=3553,e=36161,d=36160
if(h.f){u=a.a
t=u.drawingBufferWidth
s=h.r
if(typeof t!=="number")return t.u()
h.sai(0,C.b.W(t*s))
u=u.drawingBufferHeight
s=h.x
if(typeof u!=="number")return u.u()
h.saf(0,C.b.W(u*s))}if(h.y==null){u=a.a
t=h.ch
s=h.a
r=h.b
q=u.getParameter(3379)
p=V.co(s)
o=V.co(r)
q=V.co(q)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
u.bindTexture(f,n)
u.texParameteri(f,10242,33071)
u.texParameteri(f,10243,33071)
u.texParameteri(f,10241,9729)
u.texParameteri(f,10240,9729)
C.q.dt(u,f,0,6408,p,o,0,6408,5121,g)
u.bindTexture(f,g)
m=T.jS(n)
m.e=s
m.f=r
m.r=p
m.x=o
if(!m.d){m.d=!0
s=m.y
if(s!=null)s.bO()}t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.bO()
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
a.c=C.b.W(s*h.a)
r=t.d
a.d=C.b.W(r*h.b)
l=t.a
k=h.c
j=C.b.W(l*k)
t=t.b
l=h.d
u.viewport(j,C.b.W(t*l),C.b.W(s*k),C.b.W(r*l))
u.clearDepth(h.db)
if(h.cy){t=h.cx
u.clearColor(t.a,t.b,t.c,t.d)
i=16640}else i=256
if(i>0)u.clear(i)},
a3:function(a){a.a.bindFramebuffer(36160,null)}}
X.j1.prototype={}
X.f8.prototype={
gm:function(){var u=this.x
return u==null?this.x=D.z():u},
H:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.u(u)
q=C.b.W(r*u)
r=s.b
if(typeof t!=="number")return H.u(t)
p=C.b.W(r*t)
r=C.b.W(s.c*u)
a.c=r
s=C.b.W(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)},
a3:function(a){}}
X.fc.prototype={
gm:function(){var u=this.b
return u==null?this.b=D.z():u},
H:function(a){var u
a.cy.bi(V.b4())
u=V.b4()
a.db.bi(u)},
a3:function(a){a.cy.ax()
a.db.ax()}}
X.d_.prototype={
gm:function(){var u=this.f
return u==null?this.f=D.z():u},
Z:function(a){var u=this.f
if(u!=null)u.w(a)},
dV:function(){return this.Z(null)},
H:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.am(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bi(k)
r=$.jM
if(r==null){r=V.jO()
q=V.jj()
p=$.k1
r=V.jI(r,q,p==null?$.k1=new V.A(0,0,-1):p)
$.jM=r
u=r}else u=r
r=s.b
if(r!=null){t=r.aO(0,a,s)
if(t!=null)u=t.u(0,u)}a.db.bi(u)},
a3:function(a){a.cy.ax()
a.db.ax()}}
X.hw.prototype={}
V.iV.prototype={
$1:function(a){var u=C.b.du(this.a.gfK(),2)
if(u!=="0.00")P.ju(u+" fps")}}
V.hi.prototype={
dO:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.S(q,"scroll",new V.hk(o),!1)},
cN:function(a){var u,t,s,r,q,p,o,n
this.fk()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b,r=C.a.fM(a),s.toString,r=new H.M(r),r=new P.ch(s.dv(new H.bS(r,r.gj(r))).a());r.v();){s=r.gG(r)
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
if(H.mv(s,"|",0)){p=s.split("|")
o=u.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.f(p,1)
o.href=p[1]
o.textContent=p[0]
t.appendChild(o)}else{n=P.ly(C.I,s,C.o,!1)
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
fk:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new L.hI()
t=P.t
u.a=new H.H([t,L.d9])
u.b=new H.H([t,L.dg])
u.c=P.jF(t)
u.d=u.L(0,q)
t=u.L(0,q).q(0,p)
s=K.W(new H.M("*"))
t.a.push(s)
t.c=!0
t=u.L(0,p).q(0,p)
s=new K.aE()
r=[K.cT]
s.a=H.b([],r)
t.a.push(s)
t=K.W(new H.M("*"))
s.a.push(t)
t=u.L(0,p).q(0,"BoldEnd")
s=K.W(new H.M("*"))
t.a.push(s)
t.c=!0
t=u.L(0,q).q(0,o)
s=K.W(new H.M("_"))
t.a.push(s)
t.c=!0
t=u.L(0,o).q(0,o)
s=new K.aE()
s.a=H.b([],r)
t.a.push(s)
t=K.W(new H.M("_"))
s.a.push(t)
t=u.L(0,o).q(0,n)
s=K.W(new H.M("_"))
t.a.push(s)
t.c=!0
t=u.L(0,q).q(0,m)
s=K.W(new H.M("`"))
t.a.push(s)
t.c=!0
t=u.L(0,m).q(0,m)
s=new K.aE()
s.a=H.b([],r)
t.a.push(s)
t=K.W(new H.M("`"))
s.a.push(t)
t=u.L(0,m).q(0,"CodeEnd")
s=K.W(new H.M("`"))
t.a.push(s)
t.c=!0
t=u.L(0,q).q(0,l)
s=K.W(new H.M("["))
t.a.push(s)
t.c=!0
t=u.L(0,l).q(0,k)
s=K.W(new H.M("|"))
t.a.push(s)
s=u.L(0,l).q(0,j)
t=K.W(new H.M("]"))
s.a.push(t)
s.c=!0
s=u.L(0,l).q(0,l)
t=new K.aE()
t.a=H.b([],r)
s.a.push(t)
s=K.W(new H.M("|]"))
t.a.push(s)
s=u.L(0,k).q(0,j)
t=K.W(new H.M("]"))
s.a.push(t)
s.c=!0
s=u.L(0,k).q(0,k)
t=new K.aE()
t.a=H.b([],r)
s.a.push(t)
s=K.W(new H.M("|]"))
t.a.push(s)
u.L(0,q).q(0,i).a.push(new K.eo())
s=u.L(0,i).q(0,i)
t=new K.aE()
t.a=H.b([],r)
s.a.push(t)
s=K.W(new H.M("*_`["))
t.a.push(s)
s=u.L(0,"BoldEnd")
s.d=s.a.b4(p)
s=u.L(0,n)
s.d=s.a.b4(o)
s=u.L(0,"CodeEnd")
s.d=s.a.b4(m)
s=u.L(0,j)
s.d=s.a.b4("Link")
s=u.L(0,i)
s.d=s.a.b4(i)
this.b=u}}
V.hk.prototype={
$1:function(a){P.jV(C.j,new V.hj(this.a))}}
V.hj.prototype={
$0:function(){var u=C.b.W(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}};(function aliases(){var u=J.a.prototype
u.dI=u.i
u=J.cO.prototype
u.dJ=u.i
u=K.cK.prototype
u.dH=u.aN
u.ck=u.i
u=O.bV.prototype
u.cl=u.ar
u=O.al.prototype
u.cm=u.ar})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(J,"lB","kQ",20)
t(P,"m5","lp",7)
t(P,"m6","lq",7)
t(P,"m7","lr",7)
s(P,"k9","m3",10)
var m
r(m=E.az.prototype,"gdn",0,0,null,["$1","$0"],["dq","fV"],0,0)
r(m,"gdl",0,0,null,["$1","$0"],["dm","fU"],0,0)
r(m,"gdj",0,0,null,["$1","$0"],["dk","fR"],0,0)
q(m,"gfP","fQ",3)
q(m,"gfS","fT",3)
r(m=E.dd.prototype,"gco",0,0,null,["$1","$0"],["cq","cp"],0,0)
p(m,"gh7","ds",10)
o(m=X.dl.prototype,"geF","eG",4)
o(m,"geo","ep",4)
o(m,"gev","ew",2)
o(m,"geJ","eK",11)
o(m,"geH","eI",11)
o(m,"geN","eO",2)
o(m,"geR","eS",2)
o(m,"gez","eA",2)
o(m,"geP","eQ",2)
o(m,"gex","ey",2)
o(m,"geT","eU",18)
o(m,"geV","eW",4)
o(m,"gfa","fb",5)
o(m,"gf6","f7",5)
o(m,"gf8","f9",5)
r(D.bk.prototype,"gdQ",0,0,null,["$1","$0"],["ao","dR"],0,0)
r(m=D.cQ.prototype,"gcC",0,0,null,["$1","$0"],["cD","eL"],0,0)
o(m,"geX","eY",19)
q(m,"gei","ej",12)
q(m,"gf0","f1",12)
n(V.E.prototype,"gj","b_",6)
n(V.A.prototype,"gj","b_",6)
n(V.bv.prototype,"gj","b_",6)
r(m=U.bN.prototype,"gaH",0,0,null,["$1","$0"],["M","a9"],0,0)
q(m,"geg","eh",13)
q(m,"geZ","f_",13)
r(m=U.dm.prototype,"gaH",0,0,null,["$1","$0"],["M","a9"],0,0)
o(m,"gbt","bu",1)
o(m,"gbv","bw",1)
o(m,"gbx","by",1)
r(m=U.dn.prototype,"gaH",0,0,null,["$1","$0"],["M","a9"],0,0)
o(m,"gbt","bu",1)
o(m,"gbv","bw",1)
o(m,"gbx","by",1)
o(m,"gea","eb",1)
o(m,"gec","ed",1)
o(m,"gfs","ft",1)
o(m,"gfp","fq",1)
o(m,"gfn","fo",1)
o(U.dp.prototype,"gee","ef",1)
r(m=M.cz.prototype,"gT",0,0,null,["$1","$0"],["R","ap"],0,0)
q(m,"gf2","f3",14)
q(m,"gf4","f5",14)
r(M.cA.prototype,"gT",0,0,null,["$1","$0"],["R","ap"],0,0)
r(m=M.cF.prototype,"gT",0,0,null,["$1","$0"],["R","ap"],0,0)
q(m,"geq","er",3)
q(m,"ges","eu",3)
r(M.cI.prototype,"gT",0,0,null,["$1","$0"],["R","ap"],0,0)
r(O.cJ.prototype,"gY",0,0,null,["$1","$0"],["p","a5"],0,0)
r(m=O.cU.prototype,"gY",0,0,null,["$1","$0"],["p","a5"],0,0)
r(m,"gfg",0,0,null,["$1","$0"],["cE","fh"],0,0)
q(m,"gek","el",15)
q(m,"gem","en",15)
r(O.bV.prototype,"gY",0,0,null,["$1","$0"],["p","a5"],0,0)
r(O.d5.prototype,"gY",0,0,null,["$1","$0"],["p","a5"],0,0)
r(m=O.dc.prototype,"gY",0,0,null,["$1","$0"],["p","a5"],0,0)
q(m,"geB","eC",16)
q(m,"geD","eE",16)
r(O.b7.prototype,"gY",0,0,null,["$1","$0"],["p","a5"],0,0)
r(X.d_.prototype,"gdU",0,0,null,["$1","$0"],["Z","dV"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.a1,null)
s(P.a1,[H.jb,J.a,J.Z,P.dI,P.j,H.bS,P.ff,H.cG,H.hX,H.hN,P.bl,H.bI,H.dZ,P.a0,H.fm,H.fn,H.fh,P.e4,P.bx,P.ch,P.ds,P.da,P.hu,P.de,P.iH,P.iA,P.iv,P.dH,P.r,P.eC,P.iG,P.be,P.a9,P.a6,P.aV,P.fZ,P.d8,P.dA,P.f7,P.b3,P.bT,P.b5,P.t,P.ap,W.eK,W.J,W.cH,P.e9,P.iw,K.eo,K.cK,K.cT,K.hd,L.d9,L.df,L.dg,L.hI,O.ay,O.bX,E.ey,E.az,E.h5,E.dd,Z.dr,Z.bb,Z.ai,Z.bm,Z.au,D.eB,D.aW,D.P,X.cy,X.cP,X.fk,X.fq,X.ab,X.fP,X.hJ,X.dl,D.ex,D.bk,D.a_,D.h1,D.ho,V.N,V.a3,V.eZ,V.bW,V.aa,V.Y,V.Q,V.aH,V.d2,V.E,V.A,V.bv,U.dm,U.dn,U.dp,M.cA,M.cF,M.cI,M.ac,A.cu,A.er,A.U,A.fa,A.cv,A.cC,A.d0,A.d7,A.fw,A.c5,A.c6,A.c7,A.c8,A.bj,A.dj,A.hT,F.aX,F.bR,F.c0,F.he,F.hf,F.hg,F.hh,F.bw,F.i5,F.i6,F.i9,F.ia,O.db,O.bV,O.fx,O.b7,T.hE,X.hw,X.j1,X.fc,X.d_,V.hi])
s(J.a,[J.fg,J.cN,J.cO,J.b0,J.bQ,J.bn,H.c_,W.d,W.en,W.cw,W.ak,W.G,W.du,W.a8,W.eO,W.eR,W.dw,W.cE,W.dy,W.eT,W.i,W.dB,W.aB,W.fb,W.dD,W.aY,W.fp,W.fJ,W.dJ,W.dK,W.aC,W.dL,W.dO,W.aF,W.dS,W.dU,W.aK,W.dV,W.aL,W.e_,W.aq,W.e2,W.hH,W.aN,W.e5,W.hL,W.hZ,W.ea,W.ec,W.ee,W.eg,W.ei,P.b2,P.dF,P.b6,P.dQ,P.h3,P.e0,P.b8,P.e7,P.es,P.dt,P.d3,P.dX])
s(J.cO,[J.h_,J.c9,J.b1])
t(J.ja,J.b0)
s(J.bQ,[J.cM,J.cL])
t(P.fo,P.dI)
s(P.fo,[H.dk,W.im,W.il,P.f3])
t(H.M,H.dk)
s(P.j,[H.p,H.bU,H.ie,P.fe])
t(H.eW,H.bU)
s(P.ff,[H.cS,H.ig])
s(P.bl,[H.fW,H.fj,H.hW,H.eA,H.hb,P.cZ,P.ah,P.hY,P.hV,P.hq,P.eG,P.eN])
s(H.bI,[H.iX,H.hx,H.fi,H.iQ,H.iR,H.iS,P.ii,P.ih,P.ij,P.ik,P.iF,P.iE,P.iM,P.iy,P.iz,P.fs,P.eU,P.eV,W.fL,W.fN,W.ha,W.ht,W.iq,P.iN,P.f4,P.f5,P.eu,E.h6,E.h7,E.h8,E.hG,D.f_,D.f0,F.iI,F.ic,F.ib,F.i7,F.i8,O.fA,O.fB,O.fC,O.fD,O.fE,O.fF,O.fG,O.fH,T.hF,V.iV,V.hk,V.hj])
s(H.hx,[H.hr,H.bG])
t(P.fr,P.a0)
t(H.H,P.fr)
t(H.bp,H.p)
t(H.cV,H.c_)
s(H.cV,[H.cb,H.cd])
t(H.cc,H.cb)
t(H.bZ,H.cc)
t(H.ce,H.cd)
t(H.cW,H.ce)
s(H.cW,[H.fQ,H.fR,H.fS,H.fT,H.fU,H.cX,H.fV])
t(P.iD,P.fe)
t(P.ix,P.iH)
t(P.iu,P.iA)
t(P.eH,P.hu)
t(P.eX,P.eC)
t(P.i_,P.eX)
t(P.i0,P.eH)
s(P.a6,[P.I,P.v])
s(P.ah,[P.br,P.fd])
s(W.d,[W.F,W.f2,W.aJ,W.cf,W.aM,W.ar,W.ci,W.id,W.ca,P.ev,P.bh])
s(W.F,[W.V,W.aU])
s(W.V,[W.l,P.k])
s(W.l,[W.ep,W.eq,W.bi,W.f6,W.bP,W.hc])
t(W.eJ,W.ak)
t(W.bL,W.du)
s(W.a8,[W.eL,W.eM])
t(W.dx,W.dw)
t(W.cD,W.dx)
t(W.dz,W.dy)
t(W.eS,W.dz)
t(W.aA,W.cw)
t(W.dC,W.dB)
t(W.f1,W.dC)
t(W.dE,W.dD)
t(W.bO,W.dE)
t(W.b9,W.i)
s(W.b9,[W.bo,W.an,W.bt])
t(W.fK,W.dJ)
t(W.fM,W.dK)
t(W.dM,W.dL)
t(W.fO,W.dM)
t(W.dP,W.dO)
t(W.cY,W.dP)
t(W.dT,W.dS)
t(W.h0,W.dT)
t(W.h9,W.dU)
t(W.cg,W.cf)
t(W.hm,W.cg)
t(W.dW,W.dV)
t(W.hn,W.dW)
t(W.hs,W.e_)
t(W.e3,W.e2)
t(W.hy,W.e3)
t(W.cj,W.ci)
t(W.hz,W.cj)
t(W.e6,W.e5)
t(W.hK,W.e6)
t(W.bc,W.an)
t(W.eb,W.ea)
t(W.io,W.eb)
t(W.dv,W.cE)
t(W.ed,W.ec)
t(W.ir,W.ed)
t(W.ef,W.ee)
t(W.dN,W.ef)
t(W.eh,W.eg)
t(W.iB,W.eh)
t(W.ej,W.ei)
t(W.iC,W.ej)
t(W.ip,P.da)
t(P.a5,P.iw)
t(P.dG,P.dF)
t(P.fl,P.dG)
t(P.dR,P.dQ)
t(P.fX,P.dR)
t(P.e1,P.e0)
t(P.hv,P.e1)
t(P.e8,P.e7)
t(P.hM,P.e8)
t(P.et,P.dt)
t(P.fY,P.bh)
t(P.dY,P.dX)
t(P.hp,P.dY)
s(K.cK,[K.aE,L.di])
s(E.ey,[Z.cx,A.d4,T.bs])
s(D.P,[D.aZ,D.b_,D.q,X.h2])
s(X.h2,[X.cR,X.aD,X.bY,X.dh])
s(O.ay,[D.cQ,U.bN,M.cz])
s(D.eB,[U.eF,U.a4])
t(U.bK,U.a4)
s(A.d4,[A.eQ,A.f9,A.ft,A.hl,A.hD])
s(A.dj,[A.ae,A.hQ,A.hR,A.hS,A.hP,A.L,A.at,A.D,A.ba,A.hU,A.bu,A.O,A.af,A.R])
s(O.db,[O.eP,O.cJ,O.cU,O.d5,O.dc])
s(O.bV,[O.fu,O.fv,O.al])
s(O.al,[O.fy,O.fz])
s(T.bs,[T.hA,T.hC])
t(T.hB,T.hA)
s(X.hw,[X.ew,X.f8])
u(H.dk,H.hX)
u(H.cb,P.r)
u(H.cc,H.cG)
u(H.cd,P.r)
u(H.ce,H.cG)
u(P.dI,P.r)
u(W.du,W.eK)
u(W.dw,P.r)
u(W.dx,W.J)
u(W.dy,P.r)
u(W.dz,W.J)
u(W.dB,P.r)
u(W.dC,W.J)
u(W.dD,P.r)
u(W.dE,W.J)
u(W.dJ,P.a0)
u(W.dK,P.a0)
u(W.dL,P.r)
u(W.dM,W.J)
u(W.dO,P.r)
u(W.dP,W.J)
u(W.dS,P.r)
u(W.dT,W.J)
u(W.dU,P.a0)
u(W.cf,P.r)
u(W.cg,W.J)
u(W.dV,P.r)
u(W.dW,W.J)
u(W.e_,P.a0)
u(W.e2,P.r)
u(W.e3,W.J)
u(W.ci,P.r)
u(W.cj,W.J)
u(W.e5,P.r)
u(W.e6,W.J)
u(W.ea,P.r)
u(W.eb,W.J)
u(W.ec,P.r)
u(W.ed,W.J)
u(W.ee,P.r)
u(W.ef,W.J)
u(W.eg,P.r)
u(W.eh,W.J)
u(W.ei,P.r)
u(W.ej,W.J)
u(P.dF,P.r)
u(P.dG,W.J)
u(P.dQ,P.r)
u(P.dR,W.J)
u(P.e0,P.r)
u(P.e1,W.J)
u(P.e7,P.r)
u(P.e8,W.J)
u(P.dt,P.a0)
u(P.dX,P.r)
u(P.dY,W.J)})()
var v={mangledGlobalNames:{v:"int",I:"double",a6:"num",t:"String",be:"bool",b5:"Null",b3:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.P]},{func:1,ret:-1,args:[D.P]},{func:1,ret:-1,args:[W.an]},{func:1,ret:-1,args:[P.v,[P.j,E.az]]},{func:1,ret:-1,args:[W.i]},{func:1,ret:-1,args:[W.bt]},{func:1,ret:P.I},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.b5,args:[,,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bo]},{func:1,ret:-1,args:[P.v,[P.j,D.a_]]},{func:1,ret:-1,args:[P.v,[P.j,U.a4]]},{func:1,ret:-1,args:[P.v,[P.j,M.ac]]},{func:1,ret:-1,args:[P.v,[P.j,V.aa]]},{func:1,ret:-1,args:[P.v,[P.j,O.b7]]},{func:1,ret:P.b5,args:[,]},{func:1,ret:-1,args:[W.bc]},{func:1,ret:P.be,args:[[P.j,D.a_]]},{func:1,ret:P.v,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.f=W.bi.prototype
C.F=J.a.prototype
C.a=J.b0.prototype
C.G=J.cL.prototype
C.c=J.cM.prototype
C.k=J.cN.prototype
C.b=J.bQ.prototype
C.d=J.bn.prototype
C.H=J.b1.prototype
C.p=J.h_.prototype
C.q=P.d3.prototype
C.l=J.c9.prototype
C.r=W.bc.prototype
C.t=W.ca.prototype
C.m=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.u=function() {
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
C.z=function(getTagFallback) {
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
C.v=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.w=function(hooks) {
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
C.y=function(hooks) {
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
C.x=function(hooks) {
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

C.A=new P.fZ()
C.o=new P.i_()
C.B=new P.i0()
C.e=new P.ix()
C.h=new A.bj(0,"ColorBlendType.Overwrite")
C.C=new A.bj(1,"ColorBlendType.Additive")
C.D=new A.bj(2,"ColorBlendType.Average")
C.i=new A.bj(3,"ColorBlendType.AlphaBlend")
C.j=new P.aV(0)
C.E=new P.aV(5e6)
C.I=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.v])
C.J=new P.bx(null,2)})();(function staticFields(){$.aj=0
$.bH=null
$.jx=null
$.kc=null
$.k8=null
$.kf=null
$.iO=null
$.iT=null
$.js=null
$.bz=null
$.cl=null
$.cm=null
$.jm=!1
$.ag=C.e
$.a2=[]
$.jH=null
$.fI=null
$.jN=null
$.ao=null
$.c4=null
$.k0=null
$.jZ=null
$.k_=null
$.k2=null
$.i1=null
$.i2=null
$.i3=null
$.k1=null
$.k3=null
$.jM=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"mD","kk",function(){return H.ka("_$dart_dartClosure")})
u($,"mE","jv",function(){return H.ka("_$dart_js")})
u($,"mF","kl",function(){return H.as(H.hO({
toString:function(){return"$receiver$"}}))})
u($,"mG","km",function(){return H.as(H.hO({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"mH","kn",function(){return H.as(H.hO(null))})
u($,"mI","ko",function(){return H.as(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mL","kr",function(){return H.as(H.hO(void 0))})
u($,"mM","ks",function(){return H.as(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mK","kq",function(){return H.as(H.jX(null))})
u($,"mJ","kp",function(){return H.as(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"mO","ku",function(){return H.as(H.jX(void 0))})
u($,"mN","kt",function(){return H.as(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"n0","jw",function(){return P.lo()})
u($,"n2","ky",function(){return P.lb("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"mV","kx",function(){return Z.ad(0)})
u($,"mP","kv",function(){return Z.ad(511)})
u($,"mX","T",function(){return Z.ad(1)})
u($,"mW","aS",function(){return Z.ad(2)})
u($,"mR","aR",function(){return Z.ad(4)})
u($,"mY","ax",function(){return Z.ad(8)})
u($,"mZ","aT",function(){return Z.ad(16)})
u($,"mS","cq",function(){return Z.ad(32)})
u($,"mT","cr",function(){return Z.ad(64)})
u($,"mU","kw",function(){return Z.ad(96)})
u($,"n_","bE",function(){return Z.ad(128)})
u($,"mQ","aQ",function(){return Z.ad(256)})
u($,"mC","kj",function(){return new V.eZ(1e-9)})
u($,"mB","w",function(){return $.kj()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.c_,ArrayBufferView:H.c_,Float32Array:H.bZ,Float64Array:H.bZ,Int16Array:H.fQ,Int32Array:H.fR,Int8Array:H.fS,Uint16Array:H.fT,Uint32Array:H.fU,Uint8ClampedArray:H.cX,CanvasPixelArray:H.cX,Uint8Array:H.fV,HTMLAudioElement:W.l,HTMLBRElement:W.l,HTMLBaseElement:W.l,HTMLBodyElement:W.l,HTMLButtonElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLDivElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLInputElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMediaElement:W.l,HTMLMenuElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTableElement:W.l,HTMLTableRowElement:W.l,HTMLTableSectionElement:W.l,HTMLTemplateElement:W.l,HTMLTextAreaElement:W.l,HTMLTimeElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLVideoElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLFrameSetElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,AccessibleNodeList:W.en,HTMLAnchorElement:W.ep,HTMLAreaElement:W.eq,Blob:W.cw,HTMLCanvasElement:W.bi,CDATASection:W.aU,CharacterData:W.aU,Comment:W.aU,ProcessingInstruction:W.aU,Text:W.aU,CSSPerspective:W.eJ,CSSCharsetRule:W.G,CSSConditionRule:W.G,CSSFontFaceRule:W.G,CSSGroupingRule:W.G,CSSImportRule:W.G,CSSKeyframeRule:W.G,MozCSSKeyframeRule:W.G,WebKitCSSKeyframeRule:W.G,CSSKeyframesRule:W.G,MozCSSKeyframesRule:W.G,WebKitCSSKeyframesRule:W.G,CSSMediaRule:W.G,CSSNamespaceRule:W.G,CSSPageRule:W.G,CSSRule:W.G,CSSStyleRule:W.G,CSSSupportsRule:W.G,CSSViewportRule:W.G,CSSStyleDeclaration:W.bL,MSStyleCSSProperties:W.bL,CSS2Properties:W.bL,CSSImageValue:W.a8,CSSKeywordValue:W.a8,CSSNumericValue:W.a8,CSSPositionValue:W.a8,CSSResourceValue:W.a8,CSSUnitValue:W.a8,CSSURLImageValue:W.a8,CSSStyleValue:W.a8,CSSMatrixComponent:W.ak,CSSRotation:W.ak,CSSScale:W.ak,CSSSkew:W.ak,CSSTranslation:W.ak,CSSTransformComponent:W.ak,CSSTransformValue:W.eL,CSSUnparsedValue:W.eM,DataTransferItemList:W.eO,DOMException:W.eR,ClientRectList:W.cD,DOMRectList:W.cD,DOMRectReadOnly:W.cE,DOMStringList:W.eS,DOMTokenList:W.eT,Element:W.V,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.aA,FileList:W.f1,FileWriter:W.f2,HTMLFormElement:W.f6,Gamepad:W.aB,History:W.fb,HTMLCollection:W.bO,HTMLFormControlsCollection:W.bO,HTMLOptionsCollection:W.bO,ImageData:W.aY,HTMLImageElement:W.bP,KeyboardEvent:W.bo,Location:W.fp,MediaList:W.fJ,MIDIInputMap:W.fK,MIDIOutputMap:W.fM,MimeType:W.aC,MimeTypeArray:W.fO,PointerEvent:W.an,MouseEvent:W.an,DragEvent:W.an,Document:W.F,DocumentFragment:W.F,HTMLDocument:W.F,ShadowRoot:W.F,XMLDocument:W.F,Attr:W.F,DocumentType:W.F,Node:W.F,NodeList:W.cY,RadioNodeList:W.cY,Plugin:W.aF,PluginArray:W.h0,RTCStatsReport:W.h9,HTMLSelectElement:W.hc,SourceBuffer:W.aJ,SourceBufferList:W.hm,SpeechGrammar:W.aK,SpeechGrammarList:W.hn,SpeechRecognitionResult:W.aL,Storage:W.hs,CSSStyleSheet:W.aq,StyleSheet:W.aq,TextTrack:W.aM,TextTrackCue:W.ar,VTTCue:W.ar,TextTrackCueList:W.hy,TextTrackList:W.hz,TimeRanges:W.hH,Touch:W.aN,TouchEvent:W.bt,TouchList:W.hK,TrackDefaultList:W.hL,CompositionEvent:W.b9,FocusEvent:W.b9,TextEvent:W.b9,UIEvent:W.b9,URL:W.hZ,VideoTrackList:W.id,WheelEvent:W.bc,Window:W.ca,DOMWindow:W.ca,CSSRuleList:W.io,ClientRect:W.dv,DOMRect:W.dv,GamepadList:W.ir,NamedNodeMap:W.dN,MozNamedAttrMap:W.dN,SpeechRecognitionResultList:W.iB,StyleSheetList:W.iC,SVGLength:P.b2,SVGLengthList:P.fl,SVGNumber:P.b6,SVGNumberList:P.fX,SVGPointList:P.h3,SVGStringList:P.hv,SVGAElement:P.k,SVGAnimateElement:P.k,SVGAnimateMotionElement:P.k,SVGAnimateTransformElement:P.k,SVGAnimationElement:P.k,SVGCircleElement:P.k,SVGClipPathElement:P.k,SVGDefsElement:P.k,SVGDescElement:P.k,SVGDiscardElement:P.k,SVGEllipseElement:P.k,SVGFEBlendElement:P.k,SVGFEColorMatrixElement:P.k,SVGFEComponentTransferElement:P.k,SVGFECompositeElement:P.k,SVGFEConvolveMatrixElement:P.k,SVGFEDiffuseLightingElement:P.k,SVGFEDisplacementMapElement:P.k,SVGFEDistantLightElement:P.k,SVGFEFloodElement:P.k,SVGFEFuncAElement:P.k,SVGFEFuncBElement:P.k,SVGFEFuncGElement:P.k,SVGFEFuncRElement:P.k,SVGFEGaussianBlurElement:P.k,SVGFEImageElement:P.k,SVGFEMergeElement:P.k,SVGFEMergeNodeElement:P.k,SVGFEMorphologyElement:P.k,SVGFEOffsetElement:P.k,SVGFEPointLightElement:P.k,SVGFESpecularLightingElement:P.k,SVGFESpotLightElement:P.k,SVGFETileElement:P.k,SVGFETurbulenceElement:P.k,SVGFilterElement:P.k,SVGForeignObjectElement:P.k,SVGGElement:P.k,SVGGeometryElement:P.k,SVGGraphicsElement:P.k,SVGImageElement:P.k,SVGLineElement:P.k,SVGLinearGradientElement:P.k,SVGMarkerElement:P.k,SVGMaskElement:P.k,SVGMetadataElement:P.k,SVGPathElement:P.k,SVGPatternElement:P.k,SVGPolygonElement:P.k,SVGPolylineElement:P.k,SVGRadialGradientElement:P.k,SVGRectElement:P.k,SVGScriptElement:P.k,SVGSetElement:P.k,SVGStopElement:P.k,SVGStyleElement:P.k,SVGElement:P.k,SVGSVGElement:P.k,SVGSwitchElement:P.k,SVGSymbolElement:P.k,SVGTSpanElement:P.k,SVGTextContentElement:P.k,SVGTextElement:P.k,SVGTextPathElement:P.k,SVGTextPositioningElement:P.k,SVGTitleElement:P.k,SVGUseElement:P.k,SVGViewElement:P.k,SVGGradientElement:P.k,SVGComponentTransferFunctionElement:P.k,SVGFEDropShadowElement:P.k,SVGMPathElement:P.k,SVGTransform:P.b8,SVGTransformList:P.hM,AudioBuffer:P.es,AudioParamMap:P.et,AudioTrackList:P.ev,AudioContext:P.bh,webkitAudioContext:P.bh,BaseAudioContext:P.bh,OfflineAudioContext:P.fY,WebGL2RenderingContext:P.d3,SQLResultSetRowList:P.hp})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.cV.$nativeSuperclassTag="ArrayBufferView"
H.cb.$nativeSuperclassTag="ArrayBufferView"
H.cc.$nativeSuperclassTag="ArrayBufferView"
H.bZ.$nativeSuperclassTag="ArrayBufferView"
H.cd.$nativeSuperclassTag="ArrayBufferView"
H.ce.$nativeSuperclassTag="ArrayBufferView"
H.cW.$nativeSuperclassTag="ArrayBufferView"
W.cf.$nativeSuperclassTag="EventTarget"
W.cg.$nativeSuperclassTag="EventTarget"
W.ci.$nativeSuperclassTag="EventTarget"
W.cj.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(N.kd,[])
else N.kd([])})})()
//# sourceMappingURL=test.dart.js.map
