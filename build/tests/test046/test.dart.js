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
a[c]=function(){a[c]=function(){H.mn(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.ji"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.ji"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.ji(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={j5:function j5(){},
kP:function(a,b,c,d){if(!!a.$in)return new H.eK(a,b,[c,d])
return new H.bN(a,b,[c,d])},
jx:function(){return new P.he("No element")},
l8:function(a,b){var u=J.ba(a)
if(typeof u!=="number")return u.F()
H.d_(a,0,u-1,b)},
d_:function(a,b,c,d){if(c-b<=32)H.l7(a,b,c,d)
else H.l6(a,b,c,d)},
l7:function(a,b,c,d){var u,t,s,r,q,p
for(u=b+1,t=J.b6(a);u<=c;++u){s=t.h(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.h(a,r-1),s)
if(typeof q!=="number")return q.a_()
q=q>0}else q=!1
if(!q)break
p=r-1
t.k(a,r,t.h(a,p))
r=p}t.k(a,r,s)}},
l6:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j=C.c.Z(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.Z(a4+a5,2),f=g-j,e=g+j,d=J.b6(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.a_()
if(a2>0){u=b
b=c
c=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a_()
if(a2>0){u=a1
a1=a0
a0=u}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.a_()
if(a2>0){u=a
a=c
c=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a_()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.a_()
if(a2>0){u=a0
a0=c
c=u}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.a_()
if(a2>0){u=a0
a0=a
a=u}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.a_()
if(a2>0){u=a1
a1=b
b=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a_()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a_()
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
if(typeof p!=="number")return p.a_()
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
if(typeof k!=="number")return k.a_()
if(k>0)for(;!0;){p=a6.$2(d.h(a3,s),a0)
if(typeof p!=="number")return p.a_()
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
H.d_(a3,a4,t-2,a6)
H.d_(a3,s+2,a5,a6)
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
break}}H.d_(a3,t,s,a6)}else H.d_(a3,t,s,a6)},
M:function M(a){this.a=a},
n:function n(){},
bL:function bL(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bN:function bN(a,b,c){this.a=a
this.b=b
this.$ti=c},
eK:function eK(a,b,c){this.a=a
this.b=b
this.$ti=c},
cJ:function cJ(a,b){this.a=null
this.b=a
this.c=b},
i4:function i4(a,b,c){this.a=a
this.b=b
this.$ti=c},
i5:function i5(a,b){this.a=a
this.b=b},
cz:function cz(){},
hK:function hK(){},
dd:function dd(){},
ch:function(a){var u,t=H.mo(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
m8:function(a){return v.types[a]},
md:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.U(a).$iw},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a4(a)
if(typeof u!=="string")throw H.c(H.aG(a))
return u},
bT:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bU:function(a){return H.kS(a)+H.jY(H.cg(a),0,null)},
kS:function(a){var u,t,s,r,q,p,o,n=J.U(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.F||!!n.$ic0){r=C.m(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.ch(t.length>1&&C.b.bd(t,0)===36?C.b.at(t,1):t)},
jI:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
l1:function(a){var u,t,s,r=H.b([],[P.u])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.m)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aG(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.b_(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.c(H.aG(s))}return H.jI(r)},
l0:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aG(s))
if(s<0)throw H.c(H.aG(s))
if(s>65535)return H.l1(a)}return H.jI(a)},
l_:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.b_(u,10))>>>0,56320|u&1023)}throw H.c(P.aj(a,0,1114111,null,null))},
bn:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
kZ:function(a){var u=H.bn(a).getFullYear()+0
return u},
kX:function(a){var u=H.bn(a).getMonth()+1
return u},
kT:function(a){var u=H.bn(a).getDate()+0
return u},
kU:function(a){var u=H.bn(a).getHours()+0
return u},
kW:function(a){var u=H.bn(a).getMinutes()+0
return u},
kY:function(a){var u=H.bn(a).getSeconds()+0
return u},
kV:function(a){var u=H.bn(a).getMilliseconds()+0
return u},
r:function(a){throw H.c(H.aG(a))},
f:function(a,b){if(a==null)J.ba(a)
throw H.c(H.bv(a,b))},
bv:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ac(!0,b,s,null)
u=J.ba(a)
if(!(b<0)){if(typeof u!=="number")return H.r(u)
t=b>=u}else t=!0
if(t)return P.J(b,a,s,null,u)
return P.cV(b,s)},
m1:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bo(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bo(a,c,!0,b,"end",u)
return new P.ac(!0,b,"end",null)},
aG:function(a){return new P.ac(!0,a,null,null)},
lY:function(a){if(typeof a!=="number")throw H.c(H.aG(a))
return a},
c:function(a){var u
if(a==null)a=new P.cS()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.kb})
u.name=""}else u.toString=H.kb
return u},
kb:function(){return J.a4(this.dartException)},
p:function(a){throw H.c(a)},
m:function(a){throw H.c(P.bD(a))},
am:function(a){var u,t,s,r,q,p
a=H.k8(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.t])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hy(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hz:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
jQ:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
jD:function(a,b){return new H.fK(a,b==null?null:b.method)},
j6:function(a,b){var u=b==null,t=u?null:b.method
return new H.f6(a,t,u?null:b.receiver)},
ef:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.iR(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.b_(t,16)&8191)===10)switch(s){case 438:return f.$1(H.j6(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.jD(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.ke()
q=$.kf()
p=$.kg()
o=$.kh()
n=$.kk()
m=$.kl()
l=$.kj()
$.ki()
k=$.kn()
j=$.km()
i=r.a6(u)
if(i!=null)return f.$1(H.j6(u,i))
else{i=q.a6(u)
if(i!=null){i.method="call"
return f.$1(H.j6(u,i))}else{i=p.a6(u)
if(i==null){i=o.a6(u)
if(i==null){i=n.a6(u)
if(i==null){i=m.a6(u)
if(i==null){i=l.a6(u)
if(i==null){i=o.a6(u)
if(i==null){i=k.a6(u)
if(i==null){i=j.a6(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.jD(u,i))}}return f.$1(new H.hJ(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.d1()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.ac(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.d1()
return a},
jk:function(a){var u
if(a==null)return new H.dT(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dT(a)},
m5:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.k(0,a[u],a[t])}return b},
mc:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.o("Unsupported number of arguments for wrapped closure"))},
bu:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mc)
a.$identity=u
return u},
kD:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hf().constructor.prototype):Object.create(new H.bz(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ad
if(typeof t!=="number")return t.C()
$.ad=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.jt(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.kz(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.jt(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
kz:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.m8,a)
if(typeof a=="function")if(b)return a
else{u=c?H.js:H.iV
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.c("Error in functionType of tearoff")},
kA:function(a,b,c,d){var u=H.iV
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jt:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.kC(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.kA(t,!r,u,b)
if(t===0){r=$.ad
if(typeof r!=="number")return r.C()
$.ad=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bA
return new Function(r+H.e(q==null?$.bA=H.er("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ad
if(typeof r!=="number")return r.C()
$.ad=r+1
o+=r
r="return function("+o+"){return this."
q=$.bA
return new Function(r+H.e(q==null?$.bA=H.er("self"):q)+"."+H.e(u)+"("+o+");}")()},
kB:function(a,b,c,d){var u=H.iV,t=H.js
switch(b?-1:a){case 0:throw H.c(H.l4("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
kC:function(a,b){var u,t,s,r,q,p,o,n=$.bA
if(n==null)n=$.bA=H.er("self")
u=$.jr
if(u==null)u=$.jr=H.er("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.kB(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.ad
if(typeof u!=="number")return u.C()
$.ad=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.ad
if(typeof u!=="number")return u.C()
$.ad=u+1
return new Function(n+u+"}")()},
ji:function(a,b,c,d,e,f,g){return H.kD(a,b,c,d,!!e,!!f,g)},
iV:function(a){return a.a},
js:function(a){return a.c},
er:function(a){var u,t,s,r=new H.bz("self","target","receiver","name"),q=J.j3(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
mh:function(a,b){throw H.c(H.ky(a,H.ch(b.substring(2))))},
l:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.U(a)[b]
else u=!0
if(u)return a
H.mh(a,b)},
m3:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
ky:function(a,b){return new H.es("CastError: "+P.j0(a)+": type '"+H.e(H.lU(a))+"' is not a subtype of type '"+b+"'")},
lU:function(a){var u,t=J.U(a)
if(!!t.$ibC){u=H.m3(t)
if(u!=null)return H.mi(u)
return"Closure"}return H.bU(a)},
mn:function(a){throw H.c(new P.eD(a))},
l4:function(a){return new H.fZ(a)},
k2:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
cg:function(a){if(a==null)return
return a.$ti},
mV:function(a,b,c){return H.iQ(a["$a"+H.e(c)],H.cg(b))},
m7:function(a,b,c,d){var u=H.iQ(a["$a"+H.e(c)],H.cg(b))
return u==null?null:u[d]},
k3:function(a,b,c){var u=H.iQ(a["$a"+H.e(b)],H.cg(a))
return u==null?null:u[c]},
aI:function(a,b){var u=H.cg(a)
return u==null?null:u[b]},
mi:function(a){return H.b4(a,null)},
b4:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.ch(a[0].name)+H.jY(a,1,b)
if(typeof a=="function")return H.ch(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.f(b,t)
return H.e(b[t])}if('func' in a)return H.lp(a,b)
if('futureOr' in a)return"FutureOr<"+H.b4("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lp:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.b([],[P.t])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.f(a0,m)
p=C.b.C(p,a0[m])
l=u[q]
if(l!=null&&l!==P.Z)p+=" extends "+H.b4(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.b4(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.b4(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.b4(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.m4(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.b4(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
jY:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.aD("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.b4(p,c)}return"<"+u.i(0)+">"},
iQ:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
mT:function(a,b,c){return a.apply(b,H.iQ(J.U(b)["$a"+H.e(c)],H.cg(b)))},
mU:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
me:function(a){var u,t,s,r,q=$.k4.$1(a),p=$.iE[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.iK[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.k0.$2(a,q)
if(q!=null){p=$.iE[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.iK[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.iM(u)
$.iE[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.iK[q]=u
return u}if(s==="-"){r=H.iM(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.k6(a,u)
if(s==="*")throw H.c(P.jR(q))
if(v.leafTags[q]===true){r=H.iM(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.k6(a,u)},
k6:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jm(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
iM:function(a){return J.jm(a,!1,null,!!a.$iw)},
mf:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.iM(u)
else return J.jm(u,c,null,null)},
ma:function(){if(!0===$.jl)return
$.jl=!0
H.mb()},
mb:function(){var u,t,s,r,q,p,o,n
$.iE=Object.create(null)
$.iK=Object.create(null)
H.m9()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.k7.$1(q)
if(p!=null){o=H.mf(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
m9:function(){var u,t,s,r,q,p,o=C.w()
o=H.bt(C.x,H.bt(C.y,H.bt(C.n,H.bt(C.n,H.bt(C.z,H.bt(C.A,H.bt(C.B(C.m),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.k4=new H.iH(r)
$.k0=new H.iI(q)
$.k7=new H.iJ(p)},
bt:function(a,b){return a(b)||b},
kK:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.c(new P.eX("Illegal RegExp pattern ("+String(p)+")",a))},
k9:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
m2:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
k8:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
ka:function(a,b,c){var u=H.ml(a,b,c)
return u},
ml:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.k8(b),'g'),H.m2(c))},
hy:function hy(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fK:function fK(a,b){this.a=a
this.b=b},
f6:function f6(a,b,c){this.a=a
this.b=b
this.c=c},
hJ:function hJ(a){this.a=a},
iR:function iR(a){this.a=a},
dT:function dT(a){this.a=a
this.b=null},
bC:function bC(){},
hl:function hl(){},
hf:function hf(){},
bz:function bz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
es:function es(a){this.a=a},
fZ:function fZ(a){this.a=a},
H:function H(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
f5:function f5(a){this.a=a},
fa:function fa(a,b){this.a=a
this.b=b
this.c=null},
bk:function bk(a,b){this.a=a
this.$ti=b},
fb:function fb(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
iH:function iH(a){this.a=a},
iI:function iI(a){this.a=a},
iJ:function iJ(a){this.a=a},
f4:function f4(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cd:function(a){return a},
an:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bv(b,a))},
lo:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.m1(a,b,c))
return b},
bR:function bR(){},
cO:function cO(){},
bQ:function bQ(){},
cP:function cP(){},
fD:function fD(){},
fE:function fE(){},
fF:function fF(){},
fG:function fG(){},
fH:function fH(){},
cQ:function cQ(){},
fI:function fI(){},
c3:function c3(){},
c4:function c4(){},
c5:function c5(){},
c6:function c6(){},
m4:function(a){return J.jy(a?Object.keys(a):[],null)},
mo:function(a){return v.mangledGlobalNames[a]},
mg:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jm:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iG:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.jl==null){H.ma()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.jR("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.jp()]
if(r!=null)return r
r=H.me(a)
if(r!=null)return r
if(typeof a=="function")return C.H
u=Object.getPrototypeOf(a)
if(u==null)return C.q
if(u===Object.prototype)return C.q
if(typeof s=="function"){Object.defineProperty(s,$.jp(),{value:C.j,enumerable:false,writable:true,configurable:true})
return C.j}return C.j},
kI:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.iU(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.aj(a,0,4294967295,"length",null))
return J.jy(new Array(a),b)},
jy:function(a,b){return J.j3(H.b(a,[b]))},
j3:function(a){a.fixed$length=Array
return a},
kJ:function(a,b){return J.cl(a,b)},
U:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cD.prototype
return J.cC.prototype}if(typeof a=="string")return J.bi.prototype
if(a==null)return J.cE.prototype
if(typeof a=="boolean")return J.f3.prototype
if(a.constructor==Array)return J.aS.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aT.prototype
return a}if(a instanceof P.Z)return a
return J.iG(a)},
b6:function(a){if(typeof a=="string")return J.bi.prototype
if(a==null)return a
if(a.constructor==Array)return J.aS.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aT.prototype
return a}if(a instanceof P.Z)return a
return J.iG(a)},
jj:function(a){if(a==null)return a
if(a.constructor==Array)return J.aS.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aT.prototype
return a}if(a instanceof P.Z)return a
return J.iG(a)},
m6:function(a){if(typeof a=="number")return J.bJ.prototype
if(typeof a=="string")return J.bi.prototype
if(a==null)return a
if(!(a instanceof P.Z))return J.c0.prototype
return a},
iF:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aT.prototype
return a}if(a instanceof P.Z)return a
return J.iG(a)},
F:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.U(a).n(a,b)},
ck:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.md(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.b6(a).h(a,b)},
ks:function(a,b,c){return J.iF(a).eU(a,b,c)},
kt:function(a,b,c,d){return J.iF(a).fb(a,b,c,d)},
cl:function(a,b){return J.m6(a).aA(a,b)},
iS:function(a,b){return J.b6(a).N(a,b)},
iT:function(a,b){return J.jj(a).D(a,b)},
ku:function(a,b){return J.jj(a).I(a,b)},
kv:function(a){return J.iF(a).gbF(a)},
by:function(a){return J.U(a).gH(a)},
b9:function(a){return J.jj(a).gO(a)},
ba:function(a){return J.b6(a).gj(a)},
kw:function(a,b){return J.iF(a).fX(a,b)},
a4:function(a){return J.U(a).i(a)},
a:function a(){},
f3:function f3(){},
cE:function cE(){},
cF:function cF(){},
fO:function fO(){},
c0:function c0(){},
aT:function aT(){},
aS:function aS(a){this.$ti=a},
j4:function j4(a){this.$ti=a},
W:function W(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bJ:function bJ(){},
cD:function cD(){},
cC:function cC(){},
bi:function bi(){}},P={
ld:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.lV()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bu(new P.i7(s),1)).observe(u,{childList:true})
return new P.i6(s,u,t)}else if(self.setImmediate!=null)return P.lW()
return P.lX()},
le:function(a){self.scheduleImmediate(H.bu(new P.i8(a),0))},
lf:function(a){self.setImmediate(H.bu(new P.i9(a),0))},
lg:function(a){P.jb(C.h,a)},
jb:function(a,b){var u=C.c.Z(a.a,1000)
return P.ll(u<0?0:u,b)},
jP:function(a,b){var u=C.c.Z(a.a,1000)
return P.lm(u<0?0:u,b)},
ll:function(a,b){var u=new P.dZ()
u.dA(a,b)
return u},
lm:function(a,b){var u=new P.dZ()
u.dB(a,b)
return u},
mR:function(a){return new P.br(a,1)},
lh:function(){return C.N},
li:function(a){return new P.br(a,3)},
ls:function(a,b){return new P.it(a,[b])},
lO:function(){var u,t
for(;u=$.bs,u!=null;){$.cf=null
t=u.b
$.bs=t
if(t==null)$.ce=null
u.a.$0()}},
lT:function(){$.jg=!0
try{P.lO()}finally{$.cf=null
$.jg=!1
if($.bs!=null)$.jq().$1(P.k1())}},
lR:function(a){var u=new P.dk(a)
if($.bs==null){$.bs=$.ce=u
if(!$.jg)$.jq().$1(P.k1())}else $.ce=$.ce.b=u},
lS:function(a){var u,t,s=$.bs
if(s==null){P.lR(a)
$.cf=$.ce
return}u=new P.dk(a)
t=$.cf
if(t==null){u.b=s
$.bs=$.cf=u}else{u.b=t.b
$.cf=t.b=u
if(u.b==null)$.ce=u}},
jO:function(a,b){var u=$.aa
if(u===C.e)return P.jb(a,b)
return P.jb(a,u.ff(b))},
la:function(a,b){var u=$.aa
if(u===C.e)return P.jP(a,b)
return P.jP(a,u.cO(b,P.d7))},
jZ:function(a,b,c,d,e){var u={}
u.a=d
P.lS(new P.iC(u,e))},
lP:function(a,b,c,d){var u,t=$.aa
if(t===c)return d.$0()
$.aa=c
u=t
try{t=d.$0()
return t}finally{$.aa=u}},
lQ:function(a,b,c,d,e){var u,t=$.aa
if(t===c)return d.$1(e)
$.aa=c
u=t
try{t=d.$1(e)
return t}finally{$.aa=u}},
i7:function i7(a){this.a=a},
i6:function i6(a,b,c){this.a=a
this.b=b
this.c=c},
i8:function i8(a){this.a=a},
i9:function i9(a){this.a=a},
dZ:function dZ(){this.c=0},
iv:function iv(a,b){this.a=a
this.b=b},
iu:function iu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
br:function br(a,b){this.a=a
this.b=b},
c9:function c9(a){var _=this
_.a=a
_.d=_.c=_.b=null},
it:function it(a,b){this.a=a
this.$ti=b},
dk:function dk(a){this.a=a
this.b=null},
d3:function d3(){},
hi:function hi(){},
d7:function d7(){},
ix:function ix(){},
iC:function iC(a,b){this.a=a
this.b=b},
im:function im(){},
io:function io(a,b){this.a=a
this.b=b},
ip:function ip(a,b,c){this.a=a
this.b=b
this.c=c},
kM:function(a,b){return new H.H([a,b])},
kN:function(a){return H.m5(a,new H.H([null,null]))},
jz:function(a){return new P.ij([a])},
jf:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
lk:function(a,b){var u=new P.dB(a,b)
u.c=a.e
return u},
kH:function(a,b,c){var u,t
if(P.jh(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.t])
$.a0.push(a)
try{P.lr(a,u)}finally{if(0>=$.a0.length)return H.f($.a0,-1)
$.a0.pop()}t=P.jM(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
j2:function(a,b,c){var u,t
if(P.jh(a))return b+"..."+c
u=new P.aD(b)
$.a0.push(a)
try{t=u
t.a=P.jM(t.a,a,", ")}finally{if(0>=$.a0.length)return H.f($.a0,-1)
$.a0.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jh:function(a){var u,t
for(u=$.a0.length,t=0;t<u;++t)if(a===$.a0[t])return!0
return!1},
lr:function(a,b){var u,t,s,r,q,p,o,n=a.gO(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.u())return
u=H.e(n.gG(n))
b.push(u)
m+=u.length+2;++l}if(!n.u()){if(l<=5)return
if(0>=b.length)return H.f(b,-1)
t=b.pop()
if(0>=b.length)return H.f(b,-1)
s=b.pop()}else{r=n.gG(n);++l
if(!n.u()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.f(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gG(n);++l
for(;n.u();r=q,q=p){p=n.gG(n);++l
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
jA:function(a){var u,t={}
if(P.jh(a))return"{...}"
u=new P.aD("")
try{$.a0.push(a)
u.a+="{"
t.a=!0
J.ku(a,new P.fg(t,u))
u.a+="}"}finally{if(0>=$.a0.length)return H.f($.a0,-1)
$.a0.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
ij:function ij(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ik:function ik(a){this.a=a
this.c=this.b=null},
dB:function dB(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
f1:function f1(){},
fc:function fc(){},
q:function q(){},
ff:function ff(){},
fg:function fg(a,b){this.a=a
this.b=b},
Y:function Y(){},
iq:function iq(){},
dC:function dC(){},
eu:function eu(){},
ey:function ey(){},
eL:function eL(){},
hN:function hN(){},
hO:function hO(){},
iw:function iw(a){this.b=0
this.c=a},
kG:function(a){if(a instanceof H.bC)return a.i(0)
return"Instance of '"+H.e(H.bU(a))+"'"},
kO:function(a,b,c){var u,t,s=J.kI(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
j7:function(a,b,c){var u,t=H.b([],[c])
for(u=J.b9(a);u.u();)t.push(u.gG(u))
if(b)return t
return J.j3(t)},
ja:function(a){var u,t=a.length,s=P.j8(0,null,t)
if(typeof s!=="number")return s.a2()
u=s<t
return H.l0(u?C.a.dl(a,0,s):a)},
l2:function(a){return new H.f4(a,H.kK(a,!1,!0,!1,!1,!1))},
jM:function(a,b,c){var u=J.b9(b)
if(!u.u())return a
if(c.length===0){do a+=H.e(u.gG(u))
while(u.u())}else{a+=H.e(u.gG(u))
for(;u.u();)a=a+c+H.e(u.gG(u))}return a},
ln:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.o){u=$.kr().b
u=u.test(b)}else u=!1
if(u)return b
t=C.D.fk(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.f(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.l_(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
kE:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
kF:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cu:function(a){if(a>=10)return""+a
return"0"+a},
jv:function(a){return new P.aN(1000*a)},
j0:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a4(a)
if(typeof a==="string")return JSON.stringify(a)
return P.kG(a)},
kx:function(a){return new P.ac(!1,null,null,a)},
iU:function(a,b,c){return new P.ac(!0,a,b,c)},
cV:function(a,b){return new P.bo(null,null,!0,a,b,"Value not in range")},
aj:function(a,b,c,d,e){return new P.bo(b,c,!0,a,d,"Invalid value")},
j8:function(a,b,c){var u
if(typeof a!=="number")return H.r(a)
if(0<=a){if(typeof c!=="number")return H.r(c)
u=a>c}else u=!0
if(u)throw H.c(P.aj(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.r(c)
u=b>c}else u=!0
if(u)throw H.c(P.aj(b,a,c,"end",null))
return b}return c},
jJ:function(a,b){if(typeof a!=="number")return a.a2()
if(a<0)throw H.c(P.aj(a,0,null,b,null))},
J:function(a,b,c,d,e){var u=e==null?J.ba(b):e
return new P.f0(u,!0,a,c,"Index out of range")},
v:function(a){return new P.hL(a)},
jR:function(a){return new P.hI(a)},
bD:function(a){return new P.ex(a)},
o:function(a){return new P.du(a)},
jo:function(a){H.mg(a)},
b5:function b5(){},
a6:function a6(a,b){this.a=a
this.b=b},
K:function K(){},
aN:function aN(a){this.a=a},
eI:function eI(){},
eJ:function eJ(){},
bf:function bf(){},
cS:function cS(){},
ac:function ac(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bo:function bo(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
f0:function f0(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hL:function hL(a){this.a=a},
hI:function hI(a){this.a=a},
he:function he(a){this.a=a},
ex:function ex(a){this.a=a},
fN:function fN(){},
d1:function d1(){},
eD:function eD(a){this.a=a},
du:function du(a){this.a=a},
eX:function eX(a,b){this.a=a
this.b=b},
u:function u(){},
i:function i(){},
f2:function f2(){},
aV:function aV(){},
bM:function bM(){},
aW:function aW(){},
a3:function a3(){},
Z:function Z(){},
t:function t(){},
aD:function aD(a){this.a=a},
m0:function(a){var u,t=J.U(a)
if(!!t.$iaP){u=t.gcT(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.e3(a.data,a.height,a.width)},
m_:function(a){if(a instanceof P.e3)return{data:a.a,height:a.b,width:a.c}
return a},
aH:function(a){var u,t,s,r,q
if(a==null)return
u=P.kM(P.t,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){q=t[r]
u.k(0,q,a[q])}return u},
lZ:function(a){var u={}
a.I(0,new P.iD(u))
return u},
e3:function e3(a,b,c){this.a=a
this.b=b
this.c=c},
iD:function iD(a){this.a=a},
eT:function eT(a,b){this.a=a
this.b=b},
eU:function eU(){},
eV:function eV(){},
ii:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lj:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
il:function il(){},
a2:function a2(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aU:function aU(){},
f8:function f8(){},
aX:function aX(){},
fL:function fL(){},
fS:function fS(){},
hj:function hj(){},
j:function j(){},
aY:function aY(){},
hx:function hx(){},
dz:function dz(){},
dA:function dA(){},
dK:function dK(){},
dL:function dL(){},
dV:function dV(){},
dW:function dW(){},
e1:function e1(){},
e2:function e2(){},
el:function el(){},
em:function em(){},
en:function en(a){this.a=a},
eo:function eo(){},
bb:function bb(){},
fM:function fM(){},
dl:function dl(){},
cX:function cX(){},
hd:function hd(){},
dR:function dR(){},
dS:function dS(){}},W={
iX:function(){var u=document.createElement("canvas")
return u},
j_:function(a){return"wheel"},
ih:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jX:function(a,b,c,d){var u=W.ih(W.ih(W.ih(W.ih(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
P:function(a,b,c,d){var u=W.k_(new W.ie(c),W.h)
if(u!=null&&!0)J.kt(a,b,u,!1)
return new W.id(a,b,u,!1)},
k_:function(a,b){var u=$.aa
if(u===C.e)return a
return u.cO(a,b)},
k:function k(){},
eg:function eg(){},
ei:function ei(){},
ej:function ej(){},
co:function co(){},
bd:function bd(){},
aM:function aM(){},
ez:function ez(){},
G:function G(){},
bE:function bE(){},
eA:function eA(){},
a5:function a5(){},
ae:function ae(){},
eB:function eB(){},
eC:function eC(){},
eE:function eE(){},
eF:function eF(){},
cw:function cw(){},
cx:function cx(){},
eG:function eG(){},
eH:function eH(){},
ib:function ib(a,b){this.a=a
this.b=b},
S:function S(){},
h:function h(){},
d:function d(){},
ar:function ar(){},
eR:function eR(){},
eS:function eS(){},
eW:function eW(){},
as:function as(){},
eZ:function eZ(){},
bH:function bH(){},
aP:function aP(){},
bI:function bI(){},
bj:function bj(){},
fd:function fd(){},
fw:function fw(){},
fx:function fx(){},
fy:function fy(a){this.a=a},
fz:function fz(){},
fA:function fA(a){this.a=a},
au:function au(){},
fB:function fB(){},
ah:function ah(){},
ia:function ia(a){this.a=a},
C:function C(){},
cR:function cR(){},
ax:function ax(){},
fP:function fP(){},
fX:function fX(){},
fY:function fY(a){this.a=a},
h_:function h_(){},
aA:function aA(){},
ha:function ha(){},
aB:function aB(){},
hb:function hb(){},
aC:function aC(){},
hg:function hg(){},
hh:function hh(a){this.a=a},
ak:function ak(){},
aE:function aE(){},
al:function al(){},
hm:function hm(){},
hn:function hn(){},
hs:function hs(){},
aF:function aF(){},
bp:function bp(){},
hv:function hv(){},
hw:function hw(){},
aZ:function aZ(){},
hM:function hM(){},
i3:function i3(){},
b3:function b3(){},
c2:function c2(){},
ic:function ic(){},
dn:function dn(){},
ig:function ig(){},
dH:function dH(){},
ir:function ir(){},
is:function is(){},
id:function id(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
ie:function ie(a){this.a=a},
I:function I(){},
cA:function cA(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
dm:function dm(){},
dp:function dp(){},
dq:function dq(){},
dr:function dr(){},
ds:function ds(){},
dv:function dv(){},
dw:function dw(){},
dx:function dx(){},
dy:function dy(){},
dD:function dD(){},
dE:function dE(){},
dF:function dF(){},
dG:function dG(){},
dI:function dI(){},
dJ:function dJ(){},
dM:function dM(){},
dN:function dN(){},
dO:function dO(){},
c7:function c7(){},
c8:function c8(){},
dP:function dP(){},
dQ:function dQ(){},
dU:function dU(){},
dX:function dX(){},
dY:function dY(){},
ca:function ca(){},
cb:function cb(){},
e_:function e_(){},
e0:function e0(){},
e4:function e4(){},
e5:function e5(){},
e6:function e6(){},
e7:function e7(){},
e8:function e8(){},
e9:function e9(){},
ea:function ea(){},
eb:function eb(){},
ec:function ec(){},
ed:function ed(){}},K={
T:function(a){var u=new K.h0()
u.du(a)
return u},
eh:function eh(){},
cB:function cB(){},
cK:function cK(){},
aw:function aw(){this.a=null},
h0:function h0(){this.a=null}},L={d2:function d2(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},d8:function d8(a,b,c){this.a=a
this.b=b
this.c=c},d9:function d9(a){this.b=a
this.c=null},ht:function ht(){var _=this
_.d=_.c=_.b=_.a=null},db:function db(a){this.b=a
this.a=this.c=null}},O={
iY:function(a){var u=new O.ao([a])
u.aX(a)
return u},
ao:function ao(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bO:function bO(){this.b=this.a=null},
cL:function cL(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fo:function fo(a,b){this.a=a
this.b=b},
fp:function fp(){},
fq:function fq(a,b){this.a=a
this.b=b},
fr:function fr(){},
fs:function fs(a,b){this.a=a
this.b=b},
ft:function ft(){},
fu:function fu(a,b){this.a=a
this.b=b},
fv:function fv(){},
fi:function fi(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cM:function cM(){},
fj:function fj(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
af:function af(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fl:function fl(){var _=this
_.e=_.d=_.c=_.b=null},
fm:function fm(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fn:function fn(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cZ:function cZ(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
d4:function d4(){},
k5:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="testCanvas",a6=null,a7=34067,a8="modifiers",a9=V.l5("Test 046"),b0=W.iX()
b0.className="pageLargeCanvas"
b0.id=a5
a9.a.appendChild(b0)
u=[P.t]
a9.fa(H.b(["buttons"],u))
a9.cJ(H.b(["Test of the fullscreen function of the ThreeDart."],u))
a9.cJ(H.b(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(a5)
if(t==null)H.p(P.o("Failed to find an element with the identifier, testCanvas."))
s=E.l9(t,!0,!0,!0,!1)
r=X.j1(a6)
r.scR(0,!1)
q=E.jw()
q.sbb(0,F.mk())
a9=s.f
p=a9.a
o=p.createTexture()
p.bindTexture(a7,o)
p.texParameteri(a7,10242,10497)
p.texParameteri(a7,10243,10497)
p.texParameteri(a7,10241,9729)
p.texParameteri(a7,10240,9729)
p.bindTexture(a7,a6)
n=new T.ho()
n.a=0
n.b=o
n.c=!1
n.d=0
a9.ax(n,o,"../resources/maskonaive/posx.jpg",34069,!1,!1)
a9.ax(n,o,"../resources/maskonaive/negx.jpg",34070,!1,!1)
a9.ax(n,o,"../resources/maskonaive/posy.jpg",34071,!1,!1)
a9.ax(n,o,"../resources/maskonaive/negy.jpg",34072,!1,!1)
a9.ax(n,o,"../resources/maskonaive/posz.jpg",34073,!1,!1)
a9.ax(n,o,"../resources/maskonaive/negz.jpg",34074,!1,!1)
m=new O.cL()
a9=O.iY(V.at)
m.e=a9
a9.aD(m.ge2(),m.ge4())
a9=new O.af(m,"emission")
a9.c=new A.R(!1,!1,!1)
a9.f=new V.N(0,0,0)
m.f=a9
a9=new O.af(m,"ambient")
a9.c=new A.R(!1,!1,!1)
a9.f=new V.N(0,0,0)
m.r=a9
a9=new O.af(m,"diffuse")
a9.c=new A.R(!1,!1,!1)
a9.f=new V.N(0,0,0)
m.x=a9
a9=new O.af(m,"invDiffuse")
a9.c=new A.R(!1,!1,!1)
a9.f=new V.N(0,0,0)
m.y=a9
a9=new O.fn(m,"specular")
a9.c=new A.R(!1,!1,!1)
a9.f=new V.N(0,0,0)
a9.ch=100
m.z=a9
a9=new O.fj(m,"bump")
a9.c=new A.R(!1,!1,!1)
m.Q=a9
m.ch=null
a9=new O.af(m,"reflect")
a9.c=new A.R(!1,!1,!1)
a9.f=new V.N(0,0,0)
m.cx=a9
a9=new O.fm(m,"refract")
a9.c=new A.R(!1,!1,!1)
a9.f=new V.N(0,0,0)
a9.ch=1
m.cy=a9
a9=new O.fi(m,"alpha")
a9.c=new A.R(!1,!1,!1)
a9.f=1
m.db=a9
a9=new D.cH()
a9.aX(D.X)
a9.e=H.b([],[D.ep])
a9.f=H.b([],[D.be])
a9.r=H.b([],[D.fQ])
a9.x=H.b([],[D.hc])
a9.z=a9.y=null
a9.c9(a9.ge0(),a9.geB(),a9.geF())
m.dx=a9
p=new O.fl()
p.b=new V.ap(0,0,0,0)
p.c=1
p.d=10
p.e=!1
m.dy=p
p=a9.y
a9=p==null?a9.y=D.A():p
a9.l(0,m.geW())
a9=m.dx
p=a9.z
a9=p==null?a9.z=D.A():p
p=m.gbs()
a9.l(0,p)
m.fr=null
a9=m.dx
l=V.jd()
k=U.ju(V.jB(V.jH(),l,new V.y(-1,-1,-1)))
j=new V.N(1,1,1)
i=new D.be()
i.c=new V.N(1,1,1)
i.a=V.lc()
i.d=V.jd()
i.e=V.lb()
h=i.b
i.b=k
k.gm().l(0,i.gdw())
k=new D.x("mover",h,i.b)
k.b=!0
i.ah(k)
if(!i.c.n(0,j)){h=i.c
i.c=j
k=new D.x("color",h,j)
k.b=!0
i.ah(k)}a9.l(0,i)
a9=m.r
a9.sae(0,new V.N(0.1,0.1,0.1))
a9=m.x
a9.sae(0,new V.N(0.1,0.1,0.1))
a9=m.z
a9.sae(0,new V.N(1,1,1))
a9=m.z
a9.bx(new A.R(!0,!1,!1))
a9.cE(10)
a9=m.ch
if(a9!==n){if(a9!=null)a9.gm().E(0,p)
h=m.ch
m.ch=n
n.gm().l(0,p)
a9=new D.x("environment",h,m.ch)
a9.b=!0
m.V(a9)}a9=m.cy
a9.bx(new A.R(!0,!1,!1))
a9.cD(0.6)
a9=m.cy
a9.sae(0,new V.N(1,1,1))
a9=m.cx
a9.sae(0,new V.N(0.6,0.6,0.6))
g=new U.bG()
g.aX(U.a1)
g.aD(g.gdZ(),g.geD())
g.e=null
g.f=V.bl()
g.r=0
a9=s.x
p=new U.dg()
k=U.iZ()
k.sc7(0,!0)
k.sbW(6.283185307179586)
k.sbZ(0)
k.sY(0,0)
k.sbX(100)
k.sP(0)
k.sbI(0.5)
p.b=k
i=p.gav()
k.gm().l(0,i)
k=U.iZ()
k.sc7(0,!0)
k.sbW(6.283185307179586)
k.sbZ(0)
k.sY(0,0)
k.sbX(100)
k.sP(0)
k.sbI(0.5)
p.c=k
k.gm().l(0,i)
p.d=null
p.r=p.f=p.e=!1
p.y=p.x=2.5
p.Q=4
p.ch=p.cx=!1
p.db=p.cy=0
p.dx=null
p.dy=0
p.fx=p.fr=null
f=new X.a7(!1,!1,!1)
h=p.d
p.d=f
k=new D.x(a8,h,f)
k.b=!0
p.L(k)
k=p.f
if(k!==!1){p.f=!1
k=new D.x("invertX",k,!1)
k.b=!0
p.L(k)}k=p.r
if(k!==!1){p.r=!1
k=new D.x("invertY",k,!1)
k.b=!0
p.L(k)}p.aJ(a9)
g.l(0,p)
a9=s.x
p=new U.df()
k=U.iZ()
k.sc7(0,!0)
k.sbW(6.283185307179586)
k.sbZ(0)
k.sY(0,0)
k.sbX(100)
k.sP(0)
k.sbI(0.2)
p.b=k
k.gm().l(0,p.gav())
p.c=null
p.d=!1
p.e=2.5
p.r=4
p.x=p.y=!1
p.z=0
p.Q=null
p.ch=0
p.cy=p.cx=null
f=new X.a7(!0,!1,!1)
h=p.c
p.c=f
k=new D.x(a8,h,f)
k.b=!0
p.L(k)
p.aJ(a9)
g.l(0,p)
a9=s.x
p=new U.dh()
p.c=0.01
p.e=p.d=0
f=new X.a7(!1,!1,!1)
p.b=f
k=new D.x(a8,a6,f)
k.b=!0
p.L(k)
p.aJ(a9)
g.l(0,p)
g.l(0,U.ju(V.ag(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
e=X.jE(g)
d=new M.ct()
d.a=!0
a9=E.jw()
c=F.j9()
p=c.a
k=new V.y(-1,-1,1)
k=k.t(0,Math.sqrt(k.A(k)))
b=p.b2(new V.az(1,2,4,6),V.ev(255,0,0),new V.O(-1,-1,0),new V.V(0,1),k,a6)
k=c.a
p=new V.y(1,-1,1)
p=p.t(0,Math.sqrt(p.A(p)))
a=k.b2(new V.az(0,3,4,6),V.ev(0,0,255),new V.O(1,-1,0),new V.V(1,1),p,a6)
p=c.a
k=new V.y(1,1,1)
k=k.t(0,Math.sqrt(k.A(k)))
a0=p.b2(new V.az(0,2,5,6),V.ev(0,128,0),new V.O(1,1,0),new V.V(1,0),k,a6)
k=c.a
p=V.ay()
i=new V.y(-1,1,1)
i=i.t(0,Math.sqrt(i.A(i)))
a1=k.b2(new V.az(0,2,4,7),V.ev(255,255,0),new V.O(-1,1,0),p,i,a6)
c.d.fc(H.b([b,a,a0,a1],[F.b1]))
c.al()
a9.sbb(0,c)
d.e=a9
d.saK(a6)
d.saT(0,a6)
d.saU(a6)
a9=new O.cZ()
a9.b=1.0471975511965976
a9.d=new V.N(1,1,1)
h=a9.c
a9.c=n
n.gm().l(0,a9.gbs())
p=new D.x("boxTexture",h,a9.c)
p.b=!0
a9.V(p)
d.saU(a9)
d.saT(0,r)
d.saK(e)
a2=new M.cy()
a2.a=!0
a9=O.iY(E.aq)
a2.e=a9
a9.aD(a2.ge8(),a2.gea())
a2.y=a2.x=a2.r=a2.f=null
a3=X.j1(a6)
a2.saK(a6)
a2.saT(0,a3)
a2.saU(a6)
a2.saK(e)
a2.saU(m)
a2.saT(0,r)
a2.e.l(0,q)
a2.c.scR(0,!1)
a9=M.a9
p=H.b([d,a2],[a9])
k=new M.cr()
k.aX(a9)
k.e=!0
k.f=!1
k.r=null
k.aD(k.geH(),k.geJ())
k.b1(0,p)
a9=s.d
if(a9!==k){if(a9!=null)a9.gm().E(0,s.gcj())
s.d=k
k.gm().l(0,s.gcj())
s.ck()}t=u.getElementById("buttons")
a4=u.createElement("button")
a4.textContent="Fullscreen"
W.P(a4,"click",new O.iL(s),!1)
J.kv(t).l(0,a4)
V.mj(s)},
iL:function iL(a){this.a=a}},E={
jw:function(){var u,t=new E.aq()
t.a=""
t.b=!0
u=O.iY(E.aq)
t.y=u
u.aD(t.gfG(),t.gfJ())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sbb(0,null)
return t},
jV:function(){if(J.iS(window.navigator.vendor,"Google"))return C.u
if(J.iS(window.navigator.userAgent,"Firefox"))return C.k
var u=window.navigator.appVersion
if(J.b6(u).N(u,"Trident")||C.b.N(u,"Edge"))return C.l
if(J.iS(window.navigator.appName,"Microsoft"))return C.l
return C.v},
jW:function(){var u=window.navigator.appVersion
if(J.b6(u).N(u,"Win"))return C.J
if(C.b.N(u,"Mac"))return C.p
if(C.b.N(u,"Linux"))return C.K
return C.L},
l3:function(a,b){var u=new E.fT(a)
u.dt(a,b)
return u},
l9:function(a,b,c,d,e){var u,t,s=J.U(a)
if(!!s.$ibd)return E.jN(a,!0,!0,!0,!1)
u=W.iX()
t=u.style
t.width="100%"
t.height="100%"
s.gbF(a).l(0,u)
return E.jN(u,!0,!0,!0,!1)},
jN:function(a,b,c,d,e){var u,t,s,r,q="mousemove",p=new E.d6(),o=C.f.c8(a,"webgl2",P.kN(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(o==null)H.p(P.o("Failed to get the rendering context for WebGL."))
p.b=a
p.c=o
p.e=E.l3(o,a)
u=new T.hp(o)
o.getParameter(3379)
u.c=o.getParameter(34076)
u.e=u.d=0
p.f=u
u=new X.de(a)
t=new X.f7()
t.c=new X.a7(!1,!1,!1)
t.d=P.jz(P.u)
u.b=t
t=new X.fC(u)
t.f=0
t.r=V.ay()
t.x=V.ay()
t.ch=t.Q=1
u.c=t
t=new X.fe(u)
t.r=0
t.x=V.ay()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hu(u)
t.f=V.ay()
t.r=V.ay()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.z=H.b([],[[P.d3,P.Z]])
t=$.eM
u.Q=(t==null?$.eM=new E.dt(E.jV(),E.jW()):t).a===C.k?0.16666666666666666:0.005555555555555556
s=u.z
r=document
s.push(W.P(r,"contextmenu",u.gec(),!1))
u.z.push(W.P(a,"focus",u.gei(),!1))
u.z.push(W.P(a,"blur",u.ge6(),!1))
u.z.push(W.P(r,"keyup",u.gem(),!1))
u.z.push(W.P(r,"keydown",u.gek(),!1))
u.z.push(W.P(a,"mousedown",u.geq(),!1))
u.z.push(W.P(a,"mouseup",u.gev(),!1))
u.z.push(W.P(a,q,u.ges(),!1))
s=u.z
W.j_(a)
W.j_(a)
s.push(W.P(a,W.j_(a),u.gex(),!1))
u.z.push(W.P(r,q,u.gee(),!1))
u.z.push(W.P(r,"mouseup",u.geg(),!1))
u.z.push(W.P(r,"pointerlockchange",u.gez(),!1))
u.z.push(W.P(a,"touchstart",u.geP(),!1))
u.z.push(W.P(a,"touchend",u.geL(),!1))
u.z.push(W.P(a,"touchmove",u.geN(),!1))
p.x=u
p.ch=!0
p.cx=!1
p.cy=new P.a6(Date.now(),!1)
p.db=0
p.cB()
return p},
eq:function eq(){},
aq:function aq(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bc:function bc(a){this.b=a},
bm:function bm(a){this.b=a},
dt:function dt(a,b){this.a=a
this.b=b},
fT:function fT(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fU:function fU(a){this.a=a},
fV:function fV(a){this.a=a},
fW:function fW(a){this.a=a},
d6:function d6(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
hr:function hr(a){this.a=a}},Z={
je:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cd(c)),35044)
a.bindBuffer(b,null)
return new Z.di(b,u)},
a8:function(a){return new Z.b2(a)},
di:function di(a,b){this.a=a
this.b=b},
cp:function cp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
dj:function dj(a){this.a=a},
bB:function bB(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bh:function bh(a,b,c){this.a=a
this.b=b
this.c=c},
b2:function b2(a){this.a=a}},D={
A:function(){var u=new D.bg()
u.d=0
return u},
et:function et(){},
bg:function bg(){var _=this
_.d=_.c=_.b=_.a=null},
eO:function eO(a){this.a=a},
eP:function eP(a){this.a=a},
Q:function Q(){this.b=null},
aQ:function aQ(){this.b=null},
aR:function aR(){this.b=null},
x:function x(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
ep:function ep(){},
be:function be(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
X:function X(){},
cH:function cH(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
fQ:function fQ(){},
hc:function hc(){}},X={cq:function cq(a,b){this.a=a
this.b=b},cG:function cG(a,b){this.a=a
this.b=b},f7:function f7(){var _=this
_.d=_.c=_.b=_.a=null},cI:function cI(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fe:function fe(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},a7:function a7(a,b,c){this.a=a
this.b=b
this.c=c},av:function av(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},fC:function fC(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bP:function bP(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fR:function fR(){},da:function da(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},hu:function hu(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},de:function de(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
j1:function(a){var u=new X.eY(),t=new V.ap(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.jL
if(t==null){t=V.jK(0,0,1,1)
$.jL=t}u.r=t
return u},
jE:function(a){var u,t,s=new X.cT()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gm().l(0,s.gdC())
t=new D.x("mover",u,s.b)
t.b=!0
s.ac(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.z().a)){s.c=1.0471975511965976
t=new D.x("fov",t,1.0471975511965976)
t.b=!0
s.ac(t)}t=s.d
if(!(Math.abs(t-0.1)<$.z().a)){s.d=0.1
t=new D.x("near",t,0.1)
t.b=!0
s.ac(t)}t=s.e
if(!(Math.abs(t-2000)<$.z().a)){s.e=2000
t=new D.x("far",t,2000)
t.b=!0
s.ac(t)}return s},
iW:function iW(){},
eY:function eY(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
f_:function f_(){this.b=this.a=null},
cT:function cT(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
hk:function hk(){}},V={
ev:function(a,b,c){var u=a/255,t=b/255,s=c/255
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.ap(u,t,s,1)},
mp:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.dh(a-b,u)
return(a<0?a+u:a)+b},
E:function(a,b,c){if(a==null)return C.b.a7("null",c)
return C.b.a7(C.d.de(Math.abs(a-0)<$.z().a?0:a,b),c+b+1)},
bw:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.t])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.m)(a),++s){r=V.E(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.f(o,q)
u=C.b.a7(o[q],t)
p=o.length
if(q>=p)return H.f(o,q)
o[q]=u}return o},
jn:function(a){return C.d.h3(Math.pow(2,C.G.bR(Math.log(H.lY(a))/Math.log(2))))},
bl:function(){var u=$.jC
return u==null?$.jC=V.ag(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
ag:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.at(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
jB:function(a,b,c){var u=c.t(0,Math.sqrt(c.A(c))),t=b.aL(u),s=t.t(0,Math.sqrt(t.A(t))),r=u.aL(s),q=new V.y(a.a,a.b,a.c),p=s.M(0).A(q),o=r.M(0).A(q),n=u.M(0).A(q)
return V.ag(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
ay:function(){var u=$.jG
return u==null?$.jG=new V.V(0,0):u},
jH:function(){var u=$.ai
return u==null?$.ai=new V.O(0,0,0):u},
jK:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cW(a,b,c,d)},
c1:function(){var u=$.jU
return u==null?$.jU=new V.y(0,0,0):u},
lb:function(){var u=$.hP
return u==null?$.hP=new V.y(-1,0,0):u},
jd:function(){var u=$.hQ
return u==null?$.hQ=new V.y(0,1,0):u},
lc:function(){var u=$.hR
return u==null?$.hR=new V.y(0,0,1):u},
N:function N(a,b,c){this.a=a
this.b=b
this.c=c},
ap:function ap(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eN:function eN(a){this.a=a},
cN:function cN(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
at:function at(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
V:function V(a,b){this.a=a
this.b=b},
O:function O(a,b,c){this.a=a
this.b=b
this.c=c},
az:function az(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cW:function cW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
D:function D(a,b){this.a=a
this.b=b},
y:function y(a,b,c){this.a=a
this.b=b
this.c=c},
mj:function(a){P.la(C.E,new V.iN(a))},
l5:function(a){var u=new V.h5()
u.dv(a,!0)
return u},
iN:function iN(a){this.a=a},
h5:function h5(){this.b=this.a=null},
h7:function h7(a){this.a=a},
h6:function h6(a){this.a=a}},U={
iZ:function(){var u=new U.ew()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
ju:function(a){var u=new U.cs()
u.a=a
return u},
ew:function ew(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cs:function cs(){this.b=this.a=null},
bG:function bG(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a1:function a1(){},
df:function df(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dg:function dg(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dh:function dh(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cr:function cr(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},ct:function ct(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},cy:function cy(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},a9:function a9(){}},A={
kQ:function(a,b){var u=a.aO,t=new A.fh(b,u)
t.cg(b,u)
t.ds(a,b)
return t},
kR:function(a,b,c,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="MaterialLight_"+a2.gab(a2)+a3.gab(a3)+a4.gab(a4)+a5.gab(a5)+a6.gab(a6)+a7.gab(a7)+a8.gab(a8)+a9.gab(a9)+b0.gab(b0)+"_"
d+=a?"1":"0"
d+=b?"1":"0"
d+=c?"1":"0"
d=d+"0_"+a1
u=b1.length
if(u>0){d+="_Bar"
for(t=0;t<b1.length;b1.length===u||(0,H.m)(b1),++t)d+="_"+H.e(b1[t].a)}u=b2.length
if(u>0){d+="_Dir"
for(t=0;t<b2.length;b2.length===u||(0,H.m)(b2),++t)d+="_"+H.e(b2[t].a)}u=b3.length
if(u>0){d+="_Point"
for(t=0;t<b3.length;b3.length===u||(0,H.m)(b3),++t)d+="_"+H.e(b3[t].a)}u=b4.length
if(u>0){d+="_Spot"
for(t=0;t<b4.length;b4.length===u||(0,H.m)(b4),++t)d+="_"+H.e(b4[t].a)}for(u=b1.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=b1[t].b
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
e=$.ab()
if(j){u=$.aL()
e=new Z.b2(e.a|u.a)}if(i){u=$.aK()
e=new Z.b2(e.a|u.a)}if(h){u=$.aJ()
e=new Z.b2(e.a|u.a)}return new A.fk(a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,s,o,k,o,r,g,!0,f,!1,m,r,l,j,i,!1,!1,h,!1,!1,c,!1,a1,d.charCodeAt(0)==0?d:d,e)},
iA:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
iB:function(a,b,c){var u
A.iA(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.ee(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
lx:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.iA(b,t,"emission")
t=b.a+="\n"
t+="vec3 emissionColor()\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   return emissionClr;\n"
b.a=t}t+="}\n"
b.a=t
b.a=t+"\n"},
lt:function(a,b){var u,t=a.b
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.iB(b,t,"ambient")
b.a+="\n"},
lv:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.iB(b,t,"diffuse")
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
ly:function(a,b){var u,t=a.d
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.iB(b,t,"invDiffuse")
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
lE:function(a,b){var u,t=a.e
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.iB(b,t,"specular")
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
lA:function(a,b){var u,t,s
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
lC:function(a,b){var u,t=a.r,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.iA(b,t,"reflect")
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
lD:function(a,b){var u,t=a.x,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.iA(b,t,"refract")
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
lu:function(a,b,c){var u,t,s,r,q,p,o=b.b
if(o<=0)return
u=b.a
t="barLight"+H.e(u)
s=A.ee(t)
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
if(typeof u!=="number")return u.a8()
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
lw:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.e(u)
s=A.ee(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.a8()
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
lB:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.e(u)
s=A.ee(t)
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
if(typeof u!=="number")return u.a8()
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
lF:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.e(u)
s=A.ee(t)
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
if(typeof u!=="number")return u.a8()
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
if(u==null)u=$.eM=new E.dt(E.jV(),E.jW())
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
lz:function(a,b){var u,t
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
u=b.a+="   return "+C.a.p(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
lG:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.aD("")
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
A.lx(a,j)
A.lt(a,j)
A.lv(a,j)
A.ly(a,j)
A.lE(a,j)
t=a.db
if(t){r=j.a+="// === Environmental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.lC(a,j)
A.lD(a,j)}A.lA(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.m)(q),++o)A.lu(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.m)(q),++o)A.lw(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.m)(q),++o)A.lB(a,q[o],j)
for(q=a.cx,p=q.length,o=0;o<q.length;q.length===p||(0,H.m)(q),++o)A.lF(a,q[o],j)
A.lz(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.b([],[P.t])
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.m)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.f(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.at(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.m)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.f(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.at(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.m)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.f(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.at(r,1))+"Values(norm);\n"}for(u=a.cx,t=u.length,o=0;o<u.length;u.length===t||(0,H.m)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.f(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.at(r,1))+"Values(norm);\n"}if(a.cy<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)u=!1
else u=!0
if(u)n.push("emissionColor()")
if(!a.r.a)u=!1
else u=!0
if(u)n.push("reflect(refl)")
if(!a.x.a)u=!1
else u=!0
if(u)n.push("refract(refl)")
if(n.length<=0)n.push("vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.a.p(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
lH:function(a,b){var u,t,s
if(!a.ry)return
u=b.a+="struct BendingValue\n"
u+="{\n"
b.a=u
u+="   mat4 mat;\n"
b.a=u
u+="};\n"
b.a=u
b.a=u+"uniform int bendMatCount;\n"
u=b.a+="uniform BendingValue bendValues["+a.b3+"];\n"
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
lJ:function(a,b){var u
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
lI:function(a,b){var u
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
lL:function(a,b){var u,t
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
lM:function(a,b){var u,t
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
lK:function(a,b){var u
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
lN:function(a,b){var u
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
ee:function(a){if(0>=a.length)return H.f(a,0)
return a[0].toUpperCase()+C.b.at(a,1)},
jc:function(a,b,c,d,e){var u=new A.hB(a,c,e)
u.f=d
P.kO(d,0,P.u)
return u},
cm:function cm(a,b,c){this.a=a
this.b=b
this.c=c},
ek:function ek(a){this.a=a},
R:function R(a,b,c){this.a=a
this.b=b
this.c=c},
fh:function fh(a,b){var _=this
_.hg=_.hf=_.b4=_.aO=_.b3=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.ht=_.hs=_.hr=_.bQ=_.bP=_.bO=_.bN=_.bM=_.bL=_.bK=_.bJ=_.hq=_.hp=_.d2=_.ho=_.hn=_.d1=_.d0=_.hm=_.hl=_.d_=_.cZ=_.hk=_.hj=_.cY=_.hi=_.hh=_.cX=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cn:function cn(a,b){this.a=a
this.b=b},
cv:function cv(a,b){this.a=a
this.b=b},
cU:function cU(a,b){this.a=a
this.b=b},
d0:function d0(a,b){this.a=a
this.b=b},
fk:function fk(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.b3=b3
_.aO=b4
_.b4=b5},
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
cY:function cY(){},
h9:function h9(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dc:function dc(){},
hG:function hG(a){this.a=a},
b_:function b_(a,b,c){this.a=a
this.c=b
this.d=c},
hD:function hD(a,b,c){this.a=a
this.c=b
this.d=c},
hE:function hE(a,b,c){this.a=a
this.c=b
this.d=c},
hF:function hF(a,b,c){this.a=a
this.c=b
this.d=c},
hB:function hB(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
L:function L(a,b,c){this.a=a
this.c=b
this.d=c},
hC:function hC(a,b,c){this.a=a
this.c=b
this.d=c},
B:function B(a,b,c){this.a=a
this.c=b
this.d=c},
bV:function bV(a,b,c){this.a=a
this.c=b
this.d=c},
hH:function hH(a,b,c){this.a=a
this.c=b
this.d=c},
bY:function bY(a,b,c){this.a=a
this.c=b
this.d=c},
a_:function a_(a,b,c){this.a=a
this.c=b
this.d=c},
bq:function bq(a,b,c){this.a=a
this.c=b
this.d=c},
b0:function b0(a,b,c){this.a=a
this.c=b
this.d=c}},F={
iz:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cc:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.y(h,g+a1,f+a2)
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
j.d=i}m=F.iz(i)
l=F.iz(h)
k=F.mm(d,a0,new F.iy(j,F.iz(g),F.iz(f),l,m,c),b)
if(k!=null)a.bY(k)},
mk:function(){var u,t,s=null,r={}
r.a=u
r.a=null
r.a=new F.iO()
r=new F.iP(r,1)
t=F.j9()
F.cc(t,s,r,8,8,1,0,0,1)
F.cc(t,s,r,8,8,0,1,0,3)
F.cc(t,s,r,8,8,0,0,1,2)
F.cc(t,s,r,8,8,-1,0,0,0)
F.cc(t,s,r,8,8,0,-1,0,0)
F.cc(t,s,r,8,8,0,0,-1,3)
t.al()
t.fF(new F.hY(),new F.fJ())
return t},
mm:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.j9()
t=H.b([],[F.b1])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.hS(g,g,new V.ap(p,0,0,1),g,g,new V.V(r,1),g,g,0)
q.l(0,o)
c.$3(o,r,0)
t.push(o.bH(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.hS(g,g,new V.ap(j,i,h,1),g,g,new V.V(r,m),g,g,0)
k.l(0,o)
c.$3(o,r,n)
t.push(o.bH(d))}}u.d.fd(a+1,b+1,t)
return u},
bF:function(a,b,c){var u=new F.aO(),t=a.a
if(t==null)H.p(P.o("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.p(P.o("May not create a face with vertices attached to different shapes."))
u.bA(a)
u.bB(b)
u.f_(c)
u.a.a.d.b.push(u)
u.a.a.X()
return u},
kL:function(a,b){var u=new F.bK(),t=a.a
if(t==null)H.p(P.o("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.p(P.o("May not create a line with vertices attached to different shapes."))
u.bA(a)
u.bB(b)
u.a.a.c.b.push(u)
u.a.a.X()
return u},
j9:function(){var u=new F.h1(),t=new F.hT(u)
t.b=!1
t.c=H.b([],[F.b1])
u.a=t
t=new F.h4(u)
t.b=H.b([],[F.bS])
u.b=t
t=new F.h3(u)
t.b=H.b([],[F.bK])
u.c=t
t=new F.h2(u)
t.b=H.b([],[F.aO])
u.d=t
u.e=null
return u},
hS:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.b1(),r=new F.i0()
r.b=H.b([],[F.bS])
s.b=r
r=new F.hX()
u=[F.bK]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.hU()
u=[F.aO]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.ko()
s.e=0
r=$.ab()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aL().a)!==0?e:t
s.x=(u&$.aK().a)!==0?b:t
s.y=(u&$.b7().a)!==0?f:t
s.z=(u&$.b8().a)!==0?g:t
s.Q=(u&$.kp().a)!==0?c:t
s.ch=(u&$.bx().a)!==0?i:0
s.cx=(u&$.aJ().a)!==0?a:t
return s},
iy:function iy(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iO:function iO(){},
iP:function iP(a,b){this.a=a
this.b=b},
aO:function aO(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
eQ:function eQ(){},
h8:function h8(){},
bK:function bK(){this.b=this.a=null},
f9:function f9(){},
hA:function hA(){},
bS:function bS(){this.a=null},
h1:function h1(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
h2:function h2(a){this.a=a
this.b=null},
h3:function h3(a){this.a=a
this.b=null},
h4:function h4(a){this.a=a
this.b=null},
b1:function b1(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i2:function i2(a){this.a=a},
i1:function i1(a){this.a=a},
hT:function hT(a){this.a=a
this.c=this.b=null},
hU:function hU(){this.d=this.c=this.b=null},
hV:function hV(a,b){this.a=a
this.b=b},
hW:function hW(a,b){this.a=a
this.b=b},
hX:function hX(){this.c=this.b=null},
hZ:function hZ(){},
hY:function hY(){},
i_:function i_(){},
fJ:function fJ(){},
i0:function i0(){this.b=null}},T={d5:function d5(){},ho:function ho(){var _=this
_.e=_.d=_.c=_.b=_.a=null},hp:function hp(a){var _=this
_.a=a
_.e=_.d=_.c=null},hq:function hq(a,b,c,d,e,f,g){var _=this
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
H.j5.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gH:function(a){return H.bT(a)},
i:function(a){return"Instance of '"+H.e(H.bU(a))+"'"}}
J.f3.prototype={
i:function(a){return String(a)},
gH:function(a){return a?519018:218159},
$ib5:1}
J.cE.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gH:function(a){return 0}}
J.cF.prototype={
gH:function(a){return 0},
i:function(a){return String(a)}}
J.fO.prototype={}
J.c0.prototype={}
J.aT.prototype={
i:function(a){var u=a[$.kd()]
if(u==null)return this.dq(a)
return"JavaScript function for "+H.e(J.a4(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.aS.prototype={
c2:function(a,b){if(!!a.fixed$length)H.p(P.v("removeAt"))
if(b<0||b>=a.length)throw H.c(P.cV(b,null))
return a.splice(b,1)[0]},
E:function(a,b){var u
if(!!a.fixed$length)H.p(P.v("remove"))
for(u=0;u<a.length;++u)if(J.F(a[u],b)){a.splice(u,1)
return!0}return!1},
b1:function(a,b){var u,t
if(!!a.fixed$length)H.p(P.v("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.m)(b),++t)a.push(b[t])},
I:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.c(P.bD(a))}},
p:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.f(r,u)
r[u]=t}return r.join(b)},
fD:function(a){return this.p(a,"")},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
dl:function(a,b,c){var u=a.length
if(b>u)throw H.c(P.aj(b,0,u,"start",null))
if(c==null)c=u
else if(c<b||c>u)throw H.c(P.aj(c,b,u,"end",null))
if(b===c)return H.b([],[H.aI(a,0)])
return H.b(a.slice(b,c),[H.aI(a,0)])},
gfz:function(a){if(a.length>0)return a[0]
throw H.c(H.jx())},
gbT:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.jx())},
aF:function(a,b){if(!!a.immutable$list)H.p(P.v("sort"))
H.l8(a,b==null?J.lq():b)},
dk:function(a){return this.aF(a,null)},
N:function(a,b){var u
for(u=0;u<a.length;++u)if(J.F(a[u],b))return!0
return!1},
i:function(a){return P.j2(a,"[","]")},
gO:function(a){return new J.W(a,a.length)},
gH:function(a){return H.bT(a)},
gj:function(a){return a.length},
sj:function(a,b){var u="newLength"
if(!!a.fixed$length)H.p(P.v("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.iU(b,u,null))
if(b<0)throw H.c(P.aj(b,0,null,u,null))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bv(a,b))
return a[b]},
k:function(a,b,c){if(!!a.immutable$list)H.p(P.v("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bv(a,b))
a[b]=c},
$in:1,
$ii:1}
J.j4.prototype={}
J.W.prototype={
gG:function(a){return this.d},
u:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.m(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bJ.prototype={
aA:function(a,b){var u
if(typeof b!=="number")throw H.c(H.aG(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gb5(b)
if(this.gb5(a)===u)return 0
if(this.gb5(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gb5:function(a){return a===0?1/a<0:a<0},
h3:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.v(""+a+".toInt()"))},
bR:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.v(""+a+".floor()"))},
a9:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.v(""+a+".round()"))},
de:function(a,b){var u
if(b>20)throw H.c(P.aj(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gb5(a))return"-"+u
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
dh:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
dr:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cF(a,b)},
Z:function(a,b){return(a|0)===a?a/b|0:this.cF(a,b)},
cF:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.v("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
b_:function(a,b){var u
if(a>0)u=this.f3(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
f3:function(a,b){return b>31?0:a>>>b},
$iK:1,
$ia3:1}
J.cD.prototype={$iu:1}
J.cC.prototype={}
J.bi.prototype={
bG:function(a,b){if(b<0)throw H.c(H.bv(a,b))
if(b>=a.length)H.p(H.bv(a,b))
return a.charCodeAt(b)},
bd:function(a,b){if(b>=a.length)throw H.c(H.bv(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(typeof b!=="string")throw H.c(P.iU(b,null,null))
return a+b},
cc:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.cV(b,null))
if(b>c)throw H.c(P.cV(b,null))
if(c>a.length)throw H.c(P.cV(c,null))
return a.substring(b,c)},
at:function(a,b){return this.cc(a,b,null)},
v:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.C)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
a7:function(a,b){var u=b-a.length
if(u<=0)return a
return this.v(" ",u)+a},
fi:function(a,b,c){var u=a.length
if(c>u)throw H.c(P.aj(c,0,u,null,null))
return H.k9(a,b,c)},
N:function(a,b){return this.fi(a,b,0)},
aA:function(a,b){var u
if(typeof b!=="string")throw H.c(H.aG(b))
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
$it:1}
H.M.prototype={
gj:function(a){return this.a.length},
h:function(a,b){return C.b.bG(this.a,b)},
$an:function(){return[P.u]},
$aq:function(){return[P.u]},
$ai:function(){return[P.u]}}
H.n.prototype={}
H.bL.prototype={
gG:function(a){return this.d},
u:function(){var u,t=this,s=t.a,r=J.b6(s),q=r.gj(s)
if(t.b!=q)throw H.c(P.bD(s))
u=t.c
if(typeof q!=="number")return H.r(q)
if(u>=q){t.d=null
return!1}t.d=r.D(s,u);++t.c
return!0}}
H.bN.prototype={
gO:function(a){return new H.cJ(J.b9(this.a),this.b)},
gj:function(a){return J.ba(this.a)},
D:function(a,b){return this.b.$1(J.iT(this.a,b))},
$ai:function(a,b){return[b]}}
H.eK.prototype={$in:1,
$an:function(a,b){return[b]}}
H.cJ.prototype={
u:function(){var u=this,t=u.b
if(t.u()){u.a=u.c.$1(t.gG(t))
return!0}u.a=null
return!1},
gG:function(a){return this.a}}
H.i4.prototype={
gO:function(a){return new H.i5(J.b9(this.a),this.b)}}
H.i5.prototype={
u:function(){var u,t
for(u=this.a,t=this.b;u.u();)if(t.$1(u.gG(u)))return!0
return!1},
gG:function(a){var u=this.a
return u.gG(u)}}
H.cz.prototype={}
H.hK.prototype={
k:function(a,b,c){throw H.c(P.v("Cannot modify an unmodifiable list"))}}
H.dd.prototype={}
H.hy.prototype={
a6:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.fK.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.f6.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.hJ.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.iR.prototype={
$1:function(a){if(!!J.U(a).$ibf)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:7}
H.dT.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bC.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.ch(t==null?"unknown":t)+"'"},
gh8:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hl.prototype={}
H.hf.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.ch(u)+"'"}}
H.bz.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bz))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gH:function(a){var u,t=this.c
if(t==null)u=H.bT(this.a)
else u=typeof t!=="object"?J.by(t):H.bT(t)
return(u^H.bT(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.bU(u))+"'")}}
H.es.prototype={
i:function(a){return this.a}}
H.fZ.prototype={
i:function(a){return"RuntimeError: "+H.e(this.a)}}
H.H.prototype={
gj:function(a){return this.a},
gao:function(a){return new H.bk(this,[H.aI(this,0)])},
gh7:function(a){var u=this,t=H.aI(u,0)
return H.kP(new H.bk(u,[t]),new H.f5(u),t,H.aI(u,1))},
fj:function(a,b){var u=this.b
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
return s}else return q.fC(b)},
fC:function(a){var u,t,s=this.d
if(s==null)return
u=this.ct(s,J.by(a)&0x3ffffff)
t=this.d4(u,a)
if(t<0)return
return u[t].b},
k:function(a,b,c){var u,t,s,r,q,p,o=this
if(typeof b==="string"){u=o.b
o.cm(u==null?o.b=o.bq():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.cm(t==null?o.c=o.bq():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bq()
r=J.by(b)&0x3ffffff
q=o.ct(s,r)
if(q==null)o.by(s,r,[o.br(b,c)])
else{p=o.d4(q,b)
if(p>=0)q[p].b=c
else q.push(o.br(b,c))}}},
I:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.c(P.bD(u))
t=t.c}},
cm:function(a,b,c){var u=this.aY(a,b)
if(u==null)this.by(a,b,this.br(b,c))
else u.b=c},
br:function(a,b){var u=this,t=new H.fa(a,b)
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
d4:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.F(a[t].a,b))return t
return-1},
i:function(a){return P.jA(this)},
aY:function(a,b){return a[b]},
ct:function(a,b){return a[b]},
by:function(a,b,c){a[b]=c},
dQ:function(a,b){delete a[b]},
dN:function(a,b){return this.aY(a,b)!=null},
bq:function(){var u="<non-identifier-key>",t=Object.create(null)
this.by(t,u,t)
this.dQ(t,u)
return t}}
H.f5.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.aI(u,1),args:[H.aI(u,0)]}}}
H.fa.prototype={}
H.bk.prototype={
gj:function(a){return this.a.a},
gO:function(a){var u=this.a,t=new H.fb(u,u.r)
t.c=u.e
return t}}
H.fb.prototype={
gG:function(a){return this.d},
u:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bD(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.iH.prototype={
$1:function(a){return this.a(a)},
$S:7}
H.iI.prototype={
$2:function(a,b){return this.a(a,b)}}
H.iJ.prototype={
$1:function(a){return this.a(a)}}
H.f4.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.bR.prototype={}
H.cO.prototype={
gj:function(a){return a.length},
$iw:1,
$aw:function(){}}
H.bQ.prototype={
h:function(a,b){H.an(b,a,a.length)
return a[b]},
k:function(a,b,c){H.an(b,a,a.length)
a[b]=c},
$in:1,
$an:function(){return[P.K]},
$aq:function(){return[P.K]},
$ii:1,
$ai:function(){return[P.K]}}
H.cP.prototype={
k:function(a,b,c){H.an(b,a,a.length)
a[b]=c},
$in:1,
$an:function(){return[P.u]},
$aq:function(){return[P.u]},
$ii:1,
$ai:function(){return[P.u]}}
H.fD.prototype={
h:function(a,b){H.an(b,a,a.length)
return a[b]}}
H.fE.prototype={
h:function(a,b){H.an(b,a,a.length)
return a[b]}}
H.fF.prototype={
h:function(a,b){H.an(b,a,a.length)
return a[b]}}
H.fG.prototype={
h:function(a,b){H.an(b,a,a.length)
return a[b]}}
H.fH.prototype={
h:function(a,b){H.an(b,a,a.length)
return a[b]}}
H.cQ.prototype={
gj:function(a){return a.length},
h:function(a,b){H.an(b,a,a.length)
return a[b]}}
H.fI.prototype={
gj:function(a){return a.length},
h:function(a,b){H.an(b,a,a.length)
return a[b]}}
H.c3.prototype={}
H.c4.prototype={}
H.c5.prototype={}
H.c6.prototype={}
P.i7.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:16}
P.i6.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.i8.prototype={
$0:function(){this.a.$0()}}
P.i9.prototype={
$0:function(){this.a.$0()}}
P.dZ.prototype={
dA:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bu(new P.iv(this,b),0),a)
else throw H.c(P.v("`setTimeout()` not found."))},
dB:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bu(new P.iu(this,a,Date.now(),b),0),a)
else throw H.c(P.v("Periodic timer."))},
$id7:1}
P.iv.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.iu.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.dr(u,q)}s.c=r
t.d.$1(s)}}
P.br.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.e(this.a)+")"}}
P.c9.prototype={
gG:function(a){var u=this.c
if(u==null)return this.b
return u.gG(u)},
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
else{r=J.b9(u)
if(!!r.$ic9){u=q.d
if(u==null)u=q.d=[]
u.push(q.a)
q.a=r.a
continue}else{q.c=r
continue}}}}else{q.b=t
return!0}}return!1}}
P.it.prototype={
gO:function(a){return new P.c9(this.a())}}
P.dk.prototype={}
P.d3.prototype={}
P.hi.prototype={}
P.d7.prototype={}
P.ix.prototype={}
P.iC.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.cS():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u}}
P.im.prototype={
fZ:function(a){var u,t,s,r=null
try{if(C.e===$.aa){a.$0()
return}P.lP(r,r,this,a)}catch(s){u=H.ef(s)
t=H.jk(s)
P.jZ(r,r,this,u,t)}},
h_:function(a,b){var u,t,s,r=null
try{if(C.e===$.aa){a.$1(b)
return}P.lQ(r,r,this,a,b)}catch(s){u=H.ef(s)
t=H.jk(s)
P.jZ(r,r,this,u,t)}},
h0:function(a,b){return this.h_(a,b,null)},
ff:function(a){return new P.io(this,a)},
cO:function(a,b){return new P.ip(this,a,b)}}
P.io.prototype={
$0:function(){return this.a.fZ(this.b)}}
P.ip.prototype={
$1:function(a){return this.a.h0(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.ij.prototype={
gO:function(a){var u=new P.dB(this,this.r)
u.c=this.e
return u},
gj:function(a){return this.a},
N:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.dL(b)
return t}},
dL:function(a){var u=this.d
if(u==null)return!1
return this.bh(this.cs(u,a),a)>=0},
l:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cn(u==null?s.b=P.jf():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cn(t==null?s.c=P.jf():t,b)}else return s.dE(0,b)},
dE:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.jf()
u=s.co(b)
t=r[u]
if(t==null)r[u]=[s.be(b)]
else{if(s.bh(t,b)>=0)return!1
t.push(s.be(b))}return!0},
E:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.eS(this.c,b)
else return this.eR(0,b)},
eR:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cs(r,b)
t=s.bh(u,b)
if(t<0)return!1
s.cH(u.splice(t,1)[0])
return!0},
cn:function(a,b){if(a[b]!=null)return!1
a[b]=this.be(b)
return!0},
eS:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.cH(u)
delete a[b]
return!0},
cu:function(){this.r=1073741823&this.r+1},
be:function(a){var u,t=this,s=new P.ik(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cu()
return s},
cH:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cu()},
co:function(a){return J.by(a)&1073741823},
cs:function(a,b){return a[this.co(b)]},
bh:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.F(a[t].a,b))return t
return-1}}
P.ik.prototype={}
P.dB.prototype={
gG:function(a){return this.d},
u:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bD(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.f1.prototype={}
P.fc.prototype={$in:1,$ii:1}
P.q.prototype={
gO:function(a){return new H.bL(a,this.gj(a))},
D:function(a,b){return this.h(a,b)},
h5:function(a,b){var u,t,s=this,r=H.b([],[H.m7(s,a,"q",0)])
C.a.sj(r,s.gj(a))
u=0
while(!0){t=s.gj(a)
if(typeof t!=="number")return H.r(t)
if(!(u<t))break
t=s.h(a,u)
if(u>=r.length)return H.f(r,u)
r[u]=t;++u}return r},
h4:function(a){return this.h5(a,!0)},
i:function(a){return P.j2(a,"[","]")}}
P.ff.prototype={}
P.fg.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:8}
P.Y.prototype={
I:function(a,b){var u,t
for(u=J.b9(this.gao(a));u.u();){t=u.gG(u)
b.$2(t,this.h(a,t))}},
gj:function(a){return J.ba(this.gao(a))},
i:function(a){return P.jA(a)}}
P.iq.prototype={
i:function(a){return P.j2(this,"{","}")},
D:function(a,b){var u,t,s
P.jJ(b,"index")
for(u=P.lk(this,this.r),t=0;u.u();){s=u.d
if(b===t)return s;++t}throw H.c(P.J(b,this,"index",null,t))},
$in:1,
$ii:1}
P.dC.prototype={}
P.eu.prototype={}
P.ey.prototype={}
P.eL.prototype={}
P.hN.prototype={}
P.hO.prototype={
fk:function(a){var u,t,s,r=P.j8(0,null,a.length)
if(typeof r!=="number")return r.F()
u=r-0
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.iw(t)
if(s.dS(a,0,r)!==r)s.cI(C.b.bG(a,r-1),0)
return new Uint8Array(t.subarray(0,H.lo(0,s.b,t.length)))}}
P.iw.prototype={
cI:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
if(b!==c&&(C.b.bG(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.bd(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cI(r,C.b.bd(a,p)))s=p}else if(r<=2047){q=n.b
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
P.b5.prototype={}
P.a6.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.a6&&this.a===b.a&&!0},
aA:function(a,b){return C.c.aA(this.a,b.a)},
gH:function(a){var u=this.a
return(u^C.c.b_(u,30))&1073741823},
i:function(a){var u=this,t=P.kE(H.kZ(u)),s=P.cu(H.kX(u)),r=P.cu(H.kT(u)),q=P.cu(H.kU(u)),p=P.cu(H.kW(u)),o=P.cu(H.kY(u)),n=P.kF(H.kV(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.K.prototype={}
P.aN.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.aN&&this.a===b.a},
gH:function(a){return C.c.gH(this.a)},
aA:function(a,b){return C.c.aA(this.a,b.a)},
i:function(a){var u,t,s,r=new P.eJ(),q=this.a
if(q<0)return"-"+new P.aN(0-q).i(0)
u=r.$1(C.c.Z(q,6e7)%60)
t=r.$1(C.c.Z(q,1e6)%60)
s=new P.eI().$1(q%1e6)
return""+C.c.Z(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
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
P.cS.prototype={
i:function(a){return"Throw of null."}}
P.ac.prototype={
gbg:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbf:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbg()+o+u
if(!q.a)return t
s=q.gbf()
r=P.j0(q.b)
return t+s+": "+r}}
P.bo.prototype={
gbg:function(){return"RangeError"},
gbf:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.f0.prototype={
gbg:function(){return"RangeError"},
gbf:function(){var u,t=this.b
if(typeof t!=="number")return t.a2()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gj:function(a){return this.f}}
P.hL.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.hI.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.he.prototype={
i:function(a){return"Bad state: "+this.a}}
P.ex.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.j0(u)+"."}}
P.fN.prototype={
i:function(a){return"Out of Memory"},
$ibf:1}
P.d1.prototype={
i:function(a){return"Stack Overflow"},
$ibf:1}
P.eD.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.du.prototype={
i:function(a){return"Exception: "+this.a}}
P.eX.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.b.cc(s,0,75)+"...":s
return t+"\n"+r}}
P.u.prototype={}
P.i.prototype={
gj:function(a){var u,t=this.gO(this)
for(u=0;t.u();)++u
return u},
D:function(a,b){var u,t,s
P.jJ(b,"index")
for(u=this.gO(this),t=0;u.u();){s=u.gG(u)
if(b===t)return s;++t}throw H.c(P.J(b,this,"index",null,t))},
i:function(a){return P.kH(this,"(",")")}}
P.f2.prototype={}
P.aV.prototype={$in:1,$ii:1}
P.bM.prototype={}
P.aW.prototype={
gH:function(a){return P.Z.prototype.gH.call(this,this)},
i:function(a){return"null"}}
P.a3.prototype={}
P.Z.prototype={constructor:P.Z,$iZ:1,
n:function(a,b){return this===b},
gH:function(a){return H.bT(this)},
i:function(a){return"Instance of '"+H.e(H.bU(this))+"'"},
toString:function(){return this.i(this)}}
P.t.prototype={}
P.aD.prototype={
gj:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.k.prototype={}
W.eg.prototype={
gj:function(a){return a.length}}
W.ei.prototype={
i:function(a){return String(a)}}
W.ej.prototype={
i:function(a){return String(a)}}
W.co.prototype={}
W.bd.prototype={
c8:function(a,b,c){if(c!=null)return a.getContext(b,P.lZ(c))
return a.getContext(b)},
dg:function(a,b){return this.c8(a,b,null)},
$ibd:1}
W.aM.prototype={
gj:function(a){return a.length}}
W.ez.prototype={
gj:function(a){return a.length}}
W.G.prototype={$iG:1}
W.bE.prototype={
gj:function(a){return a.length}}
W.eA.prototype={}
W.a5.prototype={}
W.ae.prototype={}
W.eB.prototype={
gj:function(a){return a.length}}
W.eC.prototype={
gj:function(a){return a.length}}
W.eE.prototype={
gj:function(a){return a.length}}
W.eF.prototype={
i:function(a){return String(a)}}
W.cw.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[[P.a2,P.a3]]},
$iw:1,
$aw:function(){return[[P.a2,P.a3]]},
$aq:function(){return[[P.a2,P.a3]]},
$ii:1,
$ai:function(){return[[P.a2,P.a3]]}}
W.cx.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gas(a))+" x "+H.e(this.gan(a))},
n:function(a,b){var u
if(b==null)return!1
u=J.U(b)
return!!u.$ia2&&a.left===u.gb6(b)&&a.top===u.gb9(b)&&this.gas(a)===u.gas(b)&&this.gan(a)===u.gan(b)},
gH:function(a){return W.jX(C.d.gH(a.left),C.d.gH(a.top),C.d.gH(this.gas(a)),C.d.gH(this.gan(a)))},
gcP:function(a){return a.bottom},
gan:function(a){return a.height},
gb6:function(a){return a.left},
gc5:function(a){return a.right},
gb9:function(a){return a.top},
gas:function(a){return a.width},
$ia2:1,
$aa2:function(){return[P.a3]}}
W.eG.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[P.t]},
$iw:1,
$aw:function(){return[P.t]},
$aq:function(){return[P.t]},
$ii:1,
$ai:function(){return[P.t]}}
W.eH.prototype={
gj:function(a){return a.length}}
W.ib.prototype={
gj:function(a){return this.b.length},
h:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
k:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
this.a.replaceChild(c,u[b])},
l:function(a,b){this.a.appendChild(b)
return b},
gO:function(a){var u=this.h4(this)
return new J.W(u,u.length)},
$an:function(){return[W.S]},
$aq:function(){return[W.S]},
$ai:function(){return[W.S]}}
W.S.prototype={
gbF:function(a){return new W.ib(a,a.children)},
gcS:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.a2()
if(s<0)s=-s*0
if(typeof r!=="number")return r.a2()
if(r<0)r=-r*0
return new P.a2(u,t,s,r,[P.a3])},
i:function(a){return a.localName},
$iS:1}
W.h.prototype={$ih:1}
W.d.prototype={
fb:function(a,b,c,d){if(c!=null)this.dF(a,b,c,!1)},
dF:function(a,b,c,d){return a.addEventListener(b,H.bu(c,1),!1)}}
W.ar.prototype={$iar:1}
W.eR.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.ar]},
$iw:1,
$aw:function(){return[W.ar]},
$aq:function(){return[W.ar]},
$ii:1,
$ai:function(){return[W.ar]}}
W.eS.prototype={
gj:function(a){return a.length}}
W.eW.prototype={
gj:function(a){return a.length}}
W.as.prototype={$ias:1}
W.eZ.prototype={
gj:function(a){return a.length}}
W.bH.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.C]},
$iw:1,
$aw:function(){return[W.C]},
$aq:function(){return[W.C]},
$ii:1,
$ai:function(){return[W.C]}}
W.aP.prototype={$iaP:1,
gcT:function(a){return a.data}}
W.bI.prototype={$ibI:1}
W.bj.prototype={$ibj:1}
W.fd.prototype={
i:function(a){return String(a)}}
W.fw.prototype={
gj:function(a){return a.length}}
W.fx.prototype={
h:function(a,b){return P.aH(a.get(b))},
I:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aH(u.value[1]))}},
gao:function(a){var u=H.b([],[P.t])
this.I(a,new W.fy(u))
return u},
gj:function(a){return a.size},
$aY:function(){return[P.t,null]}}
W.fy.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fz.prototype={
h:function(a,b){return P.aH(a.get(b))},
I:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aH(u.value[1]))}},
gao:function(a){var u=H.b([],[P.t])
this.I(a,new W.fA(u))
return u},
gj:function(a){return a.size},
$aY:function(){return[P.t,null]}}
W.fA.prototype={
$2:function(a,b){return this.a.push(a)}}
W.au.prototype={$iau:1}
W.fB.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.au]},
$iw:1,
$aw:function(){return[W.au]},
$aq:function(){return[W.au]},
$ii:1,
$ai:function(){return[W.au]}}
W.ah.prototype={$iah:1}
W.ia.prototype={
k:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.f(t,b)
u.replaceChild(c,t[b])},
gO:function(a){var u=this.a.childNodes
return new W.cA(u,u.length)},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
$an:function(){return[W.C]},
$aq:function(){return[W.C]},
$ai:function(){return[W.C]}}
W.C.prototype={
fX:function(a,b){var u,t
try{u=a.parentNode
J.ks(u,b,a)}catch(t){H.ef(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.dn(a):u},
eU:function(a,b,c){return a.replaceChild(b,c)},
$iC:1}
W.cR.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.C]},
$iw:1,
$aw:function(){return[W.C]},
$aq:function(){return[W.C]},
$ii:1,
$ai:function(){return[W.C]}}
W.ax.prototype={$iax:1,
gj:function(a){return a.length}}
W.fP.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.ax]},
$iw:1,
$aw:function(){return[W.ax]},
$aq:function(){return[W.ax]},
$ii:1,
$ai:function(){return[W.ax]}}
W.fX.prototype={
h:function(a,b){return P.aH(a.get(b))},
I:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aH(u.value[1]))}},
gao:function(a){var u=H.b([],[P.t])
this.I(a,new W.fY(u))
return u},
gj:function(a){return a.size},
$aY:function(){return[P.t,null]}}
W.fY.prototype={
$2:function(a,b){return this.a.push(a)}}
W.h_.prototype={
gj:function(a){return a.length}}
W.aA.prototype={$iaA:1}
W.ha.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.aA]},
$iw:1,
$aw:function(){return[W.aA]},
$aq:function(){return[W.aA]},
$ii:1,
$ai:function(){return[W.aA]}}
W.aB.prototype={$iaB:1}
W.hb.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.aB]},
$iw:1,
$aw:function(){return[W.aB]},
$aq:function(){return[W.aB]},
$ii:1,
$ai:function(){return[W.aB]}}
W.aC.prototype={$iaC:1,
gj:function(a){return a.length}}
W.hg.prototype={
h:function(a,b){return a.getItem(b)},
I:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gao:function(a){var u=H.b([],[P.t])
this.I(a,new W.hh(u))
return u},
gj:function(a){return a.length},
$aY:function(){return[P.t,P.t]}}
W.hh.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ak.prototype={$iak:1}
W.aE.prototype={$iaE:1}
W.al.prototype={$ial:1}
W.hm.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.al]},
$iw:1,
$aw:function(){return[W.al]},
$aq:function(){return[W.al]},
$ii:1,
$ai:function(){return[W.al]}}
W.hn.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.aE]},
$iw:1,
$aw:function(){return[W.aE]},
$aq:function(){return[W.aE]},
$ii:1,
$ai:function(){return[W.aE]}}
W.hs.prototype={
gj:function(a){return a.length}}
W.aF.prototype={$iaF:1}
W.bp.prototype={$ibp:1}
W.hv.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.aF]},
$iw:1,
$aw:function(){return[W.aF]},
$aq:function(){return[W.aF]},
$ii:1,
$ai:function(){return[W.aF]}}
W.hw.prototype={
gj:function(a){return a.length}}
W.aZ.prototype={}
W.hM.prototype={
i:function(a){return String(a)}}
W.i3.prototype={
gj:function(a){return a.length}}
W.b3.prototype={
gfo:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.v("deltaY is not supported"))},
gfn:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.v("deltaX is not supported"))},
$ib3:1}
W.c2.prototype={
eV:function(a,b){return a.requestAnimationFrame(H.bu(b,1))},
dR:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.ic.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.G]},
$iw:1,
$aw:function(){return[W.G]},
$aq:function(){return[W.G]},
$ii:1,
$ai:function(){return[W.G]}}
W.dn.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
n:function(a,b){var u
if(b==null)return!1
u=J.U(b)
return!!u.$ia2&&a.left===u.gb6(b)&&a.top===u.gb9(b)&&a.width===u.gas(b)&&a.height===u.gan(b)},
gH:function(a){return W.jX(C.d.gH(a.left),C.d.gH(a.top),C.d.gH(a.width),C.d.gH(a.height))},
gan:function(a){return a.height},
gas:function(a){return a.width}}
W.ig.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.as]},
$iw:1,
$aw:function(){return[W.as]},
$aq:function(){return[W.as]},
$ii:1,
$ai:function(){return[W.as]}}
W.dH.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.C]},
$iw:1,
$aw:function(){return[W.C]},
$aq:function(){return[W.C]},
$ii:1,
$ai:function(){return[W.C]}}
W.ir.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.aC]},
$iw:1,
$aw:function(){return[W.aC]},
$aq:function(){return[W.aC]},
$ii:1,
$ai:function(){return[W.aC]}}
W.is.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.ak]},
$iw:1,
$aw:function(){return[W.ak]},
$aq:function(){return[W.ak]},
$ii:1,
$ai:function(){return[W.ak]}}
W.id.prototype={}
W.ie.prototype={
$1:function(a){return this.a.$1(a)}}
W.I.prototype={
gO:function(a){return new W.cA(a,this.gj(a))}}
W.cA.prototype={
u:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.ck(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gG:function(a){return this.d}}
W.dm.prototype={}
W.dp.prototype={}
W.dq.prototype={}
W.dr.prototype={}
W.ds.prototype={}
W.dv.prototype={}
W.dw.prototype={}
W.dx.prototype={}
W.dy.prototype={}
W.dD.prototype={}
W.dE.prototype={}
W.dF.prototype={}
W.dG.prototype={}
W.dI.prototype={}
W.dJ.prototype={}
W.dM.prototype={}
W.dN.prototype={}
W.dO.prototype={}
W.c7.prototype={}
W.c8.prototype={}
W.dP.prototype={}
W.dQ.prototype={}
W.dU.prototype={}
W.dX.prototype={}
W.dY.prototype={}
W.ca.prototype={}
W.cb.prototype={}
W.e_.prototype={}
W.e0.prototype={}
W.e4.prototype={}
W.e5.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.ed.prototype={}
P.e3.prototype={$iaP:1,
gcT:function(a){return this.a}}
P.iD.prototype={
$2:function(a,b){this.a[a]=b},
$S:8}
P.eT.prototype={
gaZ:function(){var u=this.b,t=H.k3(u,"q",0)
return new H.bN(new H.i4(u,new P.eU(),[t]),new P.eV(),[t,W.S])},
k:function(a,b,c){var u=this.gaZ()
J.kw(u.b.$1(J.iT(u.a,b)),c)},
l:function(a,b){this.b.a.appendChild(b)},
gj:function(a){return J.ba(this.gaZ().a)},
h:function(a,b){var u=this.gaZ()
return u.b.$1(J.iT(u.a,b))},
gO:function(a){var u=P.j7(this.gaZ(),!1,W.S)
return new J.W(u,u.length)},
$an:function(){return[W.S]},
$aq:function(){return[W.S]},
$ai:function(){return[W.S]}}
P.eU.prototype={
$1:function(a){return!!J.U(a).$iS}}
P.eV.prototype={
$1:function(a){return H.l(a,"$iS")}}
P.il.prototype={
gc5:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.r(t)
return u+t},
gcP:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.r(t)
return u+t},
i:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.U(b)
if(!!u.$ia2){t=q.a
if(t==u.gb6(b)){s=q.b
if(s==u.gb9(b)){r=q.c
if(typeof t!=="number")return t.C()
if(typeof r!=="number")return H.r(r)
if(t+r===u.gc5(b)){t=q.d
if(typeof s!=="number")return s.C()
if(typeof t!=="number")return H.r(t)
u=s+t===u.gcP(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gH:function(a){var u=this,t=u.a,s=J.by(t),r=u.b,q=J.by(r),p=u.c
if(typeof t!=="number")return t.C()
if(typeof p!=="number")return H.r(p)
p=C.c.gH(t+p)
t=u.d
if(typeof r!=="number")return r.C()
if(typeof t!=="number")return H.r(t)
t=C.c.gH(r+t)
return P.lj(P.ii(P.ii(P.ii(P.ii(0,s),q),p),t))}}
P.a2.prototype={
gb6:function(a){return this.a},
gb9:function(a){return this.b},
gas:function(a){return this.c},
gan:function(a){return this.d}}
P.aU.prototype={$iaU:1}
P.f8.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
D:function(a,b){return this.h(a,b)},
$in:1,
$an:function(){return[P.aU]},
$aq:function(){return[P.aU]},
$ii:1,
$ai:function(){return[P.aU]}}
P.aX.prototype={$iaX:1}
P.fL.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
D:function(a,b){return this.h(a,b)},
$in:1,
$an:function(){return[P.aX]},
$aq:function(){return[P.aX]},
$ii:1,
$ai:function(){return[P.aX]}}
P.fS.prototype={
gj:function(a){return a.length}}
P.hj.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
D:function(a,b){return this.h(a,b)},
$in:1,
$an:function(){return[P.t]},
$aq:function(){return[P.t]},
$ii:1,
$ai:function(){return[P.t]}}
P.j.prototype={
gbF:function(a){return new P.eT(a,new W.ia(a))}}
P.aY.prototype={$iaY:1}
P.hx.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
D:function(a,b){return this.h(a,b)},
$in:1,
$an:function(){return[P.aY]},
$aq:function(){return[P.aY]},
$ii:1,
$ai:function(){return[P.aY]}}
P.dz.prototype={}
P.dA.prototype={}
P.dK.prototype={}
P.dL.prototype={}
P.dV.prototype={}
P.dW.prototype={}
P.e1.prototype={}
P.e2.prototype={}
P.el.prototype={
gj:function(a){return a.length}}
P.em.prototype={
h:function(a,b){return P.aH(a.get(b))},
I:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aH(u.value[1]))}},
gao:function(a){var u=H.b([],[P.t])
this.I(a,new P.en(u))
return u},
gj:function(a){return a.size},
$aY:function(){return[P.t,null]}}
P.en.prototype={
$2:function(a,b){return this.a.push(a)}}
P.eo.prototype={
gj:function(a){return a.length}}
P.bb.prototype={}
P.fM.prototype={
gj:function(a){return a.length}}
P.dl.prototype={}
P.cX.prototype={
h1:function(a,b,c,d,e,f,g){var u,t=J.U(g)
if(!!t.$iaP)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.m_(g))
return}if(!!t.$ibI)t=!0
else t=!1
if(t){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.kx("Incorrect number or type of arguments"))}}
P.hd.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return P.aH(a.item(b))},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
D:function(a,b){return this.h(a,b)},
$in:1,
$an:function(){return[[P.bM,,,]]},
$aq:function(){return[[P.bM,,,]]},
$ii:1,
$ai:function(){return[[P.bM,,,]]}}
P.dR.prototype={}
P.dS.prototype={}
K.eh.prototype={
aB:function(a,b){return!0},
i:function(a){return"all"}}
K.cB.prototype={
aB:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)if(u[s].aB(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.m)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s}}
K.cK.prototype={}
K.aw.prototype={
aB:function(a,b){return!this.dm(0,b)},
i:function(a){return"!["+this.cd(0)+"]"}}
K.h0.prototype={
du:function(a){var u,t,s,r
if(a.a.length<=0)throw H.c(P.o("May not create a Set with zero characters."))
u=P.u
t=new H.H([u,P.b5])
for(s=new H.bL(a,a.gj(a));s.u();)t.k(0,s.d,!0)
r=P.j7(new H.bk(t,[u]),!0,u)
C.a.dk(r)
this.a=r},
aB:function(a,b){return C.a.N(this.a,b)},
i:function(a){return P.ja(this.a)}}
L.d2.prototype={
p:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new L.db(this.a.K(0,b))
r.a=H.b([],[K.cK])
r.c=!1
this.c.push(r)
return r},
fw:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
if(r.aB(0,a))return r}return},
i:function(a){return this.b},
cG:function(){var u,t,s,r,q,p=this,o="("+p.b+")",n=p.d
if(n!=null){n=n.b
o+=" => ["+n+"]"
u=p.a
if(u.c.N(0,n))o+=" (consume)"
for(n=p.d.c,n=new H.bk(n,[H.aI(n,0)]),n=n.gO(n);n.u();){t=n.d
o+="\n"
s=p.d.c.h(0,t)
t=o+("  -- "+H.e(t)+" => ["+H.e(s)+"]")
o=u.c.N(0,s)?t+" (consume)":t}}for(n=p.c,u=n.length,r=0;r<n.length;n.length===u||(0,H.m)(n),++r){q=n[r]
o=o+"\n"+("  -- "+q.i(0))}return o.charCodeAt(0)==0?o:o}}
L.d8.prototype={
i:function(a){var u=H.ka(this.b,"\n","\\n"),t=H.ka(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
L.d9.prototype={
i:function(a){return this.b}}
L.ht.prototype={
K:function(a,b){var u=this.a.h(0,b)
if(u==null){u=new L.d2(this,b)
u.c=H.b([],[L.db])
this.a.k(0,b,u)}return u},
aV:function(a){var u,t=this.b.h(0,a)
if(t==null){t=new L.d9(a)
u=P.t
t.c=new H.H([u,u])
this.b.k(0,a,t)}return t},
df:function(a){return this.h6(a)},
h6:function(a){var u=this
return P.ls(function(){var t=a
var s=0,r=1,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
return function $async$df(b,a0){if(b===1){q=a0
s=r}while(true)switch(s){case 0:g=u.d
f=[P.u]
e=H.b([],f)
d=H.b([],f)
c=H.b([],f)
p=null,o=0,n=0,m=0
case 2:if(!!0){s=3
break}if(c.length!==0)l=C.a.c2(c,0)
else{if(!t.u()){s=3
break}l=t.d}d.push(l);++o
k=g.fw(l)
s=k==null?4:6
break
case 4:if(p==null){j=P.ja(d)
throw H.c(P.o("Untokenizable string [state: "+g.b+", index "+o+']: "'+j+'"'))}if(!!d.fixed$length)H.p(P.v("removeRange"))
P.j8(0,m,d.length)
d.splice(0,m-0)
C.a.b1(c,d)
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
if(g.d!=null){j=P.ja(e)
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
case 12:case 11:return P.lh()
case 1:return P.li(q)}}},L.d8)},
i:function(a){var u,t=new P.aD(""),s=this.d
if(s!=null)t.a=s.cG()+"\n"
for(s=this.a,s=s.gh7(s),s=new H.cJ(J.b9(s.a),s.b);s.u();){u=s.a
if(u!=this.d)t.a+=u.cG()+"\n"}s=t.a
return s.charCodeAt(0)==0?s:s}}
L.db.prototype={
i:function(a){return this.b.b+": "+this.cd(0)}}
O.ao.prototype={
aX:function(a){this.a=H.b([],[a])
this.c=this.b=null},
c9:function(a,b,c){this.b=b
this.c=a},
aD:function(a,b){return this.c9(a,null,b)},
cz:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
ci:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gj:function(a){return this.a.length},
gO:function(a){var u=this.a
return new J.W(u,u.length)},
D:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
l:function(a,b){var u,t,s=this,r=[H.k3(s,"ao",0)]
if(s.cz(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.ci(t,H.b([b],r))}},
b1:function(a,b){var u,t
if(this.cz(b)){u=this.a
t=u.length
C.a.b1(u,b)
this.ci(t,b)}},
$ii:1}
O.bO.prototype={
gj:function(a){return this.a.length},
gm:function(){var u=this.b
return u==null?this.b=D.A():u},
au:function(){var u=this.b
if(u!=null)u.w(null)},
gW:function(a){var u=this.a
if(u.length>0)return C.a.gbT(u)
else return V.bl()},
b8:function(a){var u=this.a
if(a==null)u.push(V.bl())
else u.push(a)
this.au()},
ap:function(){var u=this.a
if(u.length>0){u.pop()
this.au()}}}
E.eq.prototype={}
E.aq.prototype={
sbb:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gm().E(0,s.gd9())
u=s.c
if(u!=null)u.gm().l(0,s.gd9())
t=new D.x("shape",r,s.c)
t.b=!0
s.b7(t)}},
aa:function(a,b){var u
for(u=this.y.a,u=new J.W(u,u.length);u.u();)u.d.aa(0,b)},
a4:function(a){var u,t=this,s=a.dx
s.a.push(s.gW(s))
s.au()
a.c1(t.f)
s=a.dy
u=(s&&C.a).gbT(s)
if(u!=null&&t.d!=null)u.dc(a,t)
for(s=t.y.a,s=new J.W(s,s.length);s.u();)s.d.a4(a)
a.c0()
a.dx.ap()},
b7:function(a){var u=this.z
if(u!=null)u.w(a)},
X:function(){return this.b7(null)},
da:function(a){this.e=null
this.b7(a)},
fL:function(){return this.da(null)},
d8:function(a){this.b7(a)},
fI:function(){return this.d8(null)},
fH:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gd7(),s=[{func:1,ret:-1,args:[D.Q]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bg()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.X()},
fK:function(a,b){var u,t
for(u=b.gO(b),t=this.gd7();u.u();)u.gG(u).gm().E(0,t)
this.X()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.bc.prototype={
i:function(a){return this.b}}
E.bm.prototype={
i:function(a){return this.b}}
E.dt.prototype={}
E.fT.prototype={
dt:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.a6(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.bO()
t=[V.at]
u.a=H.b([],t)
u.gm().l(0,new E.fU(s))
s.cy=u
u=new O.bO()
u.a=H.b([],t)
u.gm().l(0,new E.fV(s))
s.db=u
u=new O.bO()
u.a=H.b([],t)
u.gm().l(0,new E.fW(s))
s.dx=u
u=H.b([],[O.d4])
s.dy=u
u.push(null)
s.fr=new H.H([P.t,A.cY])},
gfU:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gW(s)
u=t.db
u=t.z=s.v(0,u.gW(u))
s=u}return s},
c1:function(a){var u=this.dy
u.push(a==null?(u&&C.a).gbT(u):a)},
c0:function(){var u=this.dy
if(u.length>1)u.pop()},
cK:function(a){var u=a.b
if(u.length===0)throw H.c(P.o("May not cache a shader with no name."))
if(this.fr.fj(0,u))throw H.c(P.o('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.k(0,u,a)}}
E.fU.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.fV.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.fW.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.d6.prototype={
cl:function(a){this.dd()},
ck:function(){return this.cl(null)},
gfA:function(){var u,t=this,s=Date.now(),r=C.c.Z(P.jv(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.a6(s,!1)
return u/r},
cB:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.v()
if(typeof r!=="number")return H.r(r)
u=C.d.bR(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.v()
t=C.d.bR(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.jO(C.h,s.gfY())}},
dd:function(){if(!this.cx){this.cx=!0
var u=window
C.t.dR(u)
C.t.eV(u,W.k_(new E.hr(this),P.a3))}},
fW:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.cB()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.a6(r,!1)
s.y=P.jv(r-s.r.a).a*0.000001
r=s.cy
C.a.sj(r.a,0)
r.au()
r=s.db
C.a.sj(r.a,0)
r.au()
r=s.dx
C.a.sj(r.a,0)
r.au()
r=s.dy;(r&&C.a).sj(r,0)
s.dy.push(null)
o.a4(p.e)}}catch(q){u=H.ef(q)
t=H.jk(q)
P.jo("Error: "+H.e(u))
P.jo("Stack: "+H.e(t))
throw H.c(u)}}}
E.hr.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.fW()}}}
Z.di.prototype={}
Z.cp.prototype={
U:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ef(s)
t=P.o('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.e(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.dj.prototype={}
Z.bB.prototype={
am:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
U:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].U(a)},
ar:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
a4:function(a){var u,t,s,r,q,p=this.b.length
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
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a4(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.p(p,", ")+"\nAttrs:   "+C.a.p(r,", ")}}
Z.bh.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.bU(this.c))+"'")+"]"}}
Z.b2.prototype={
gcb:function(a){var u=this.a,t=(u&$.ab().a)!==0?3:0
if((u&$.aL().a)!==0)t+=3
if((u&$.aK().a)!==0)t+=3
if((u&$.b7().a)!==0)t+=2
if((u&$.b8().a)!==0)t+=3
if((u&$.ci().a)!==0)t+=3
if((u&$.cj().a)!==0)t+=4
if((u&$.bx().a)!==0)++t
return(u&$.aJ().a)!==0?t+4:t},
fe:function(a){var u,t=$.ab(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aL()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aK()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b7()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b8()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ci()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cj()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bx()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aJ()
if((s&t.a)!==0)if(u===a)return t
return $.kq()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b2))return!1
return this.a===b.a},
i:function(a){var u=H.b([],[P.t]),t=this.a
if((t&$.ab().a)!==0)u.push("Pos")
if((t&$.aL().a)!==0)u.push("Norm")
if((t&$.aK().a)!==0)u.push("Binm")
if((t&$.b7().a)!==0)u.push("Txt2D")
if((t&$.b8().a)!==0)u.push("TxtCube")
if((t&$.ci().a)!==0)u.push("Clr3")
if((t&$.cj().a)!==0)u.push("Clr4")
if((t&$.bx().a)!==0)u.push("Weight")
if((t&$.aJ().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.a.p(u,"|")}}
D.et.prototype={}
D.bg.prototype={
l:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.Q]}]):u).push(b)},
E:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.a.N(s,b)
if(s===!0){s=t.a
u=(s&&C.a).E(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.a.N(s,b)
if(s===!0){s=t.b
u=(s&&C.a).E(s,b)||u}return u},
w:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.a.I(P.j7(u,!0,{func:1,ret:-1,args:[D.Q]}),new D.eO(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.Q]}])
C.a.I(u,new D.eP(q))}return!0},
fu:function(){return this.w(null)},
ag:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.w(u)}}}}
D.eO.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.eP.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.Q.prototype={}
D.aQ.prototype={}
D.aR.prototype={}
D.x.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cq.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cq))return!1
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
X.f7.prototype={
fQ:function(a){this.c=a.b
this.d.l(0,a.a)
return!1},
fM:function(a){this.c=a.b
this.d.E(0,a.a)
return!1}}
X.cI.prototype={}
X.fe.prototype={
aH:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.v()
u=b.b
t=q.ch
if(typeof u!=="number")return u.v()
s=new V.V(o.a+n*m,o.b+u*t)
t=q.a.gaz()
r=new X.av(a,V.ay(),q.x,t,s)
r.b=!0
q.z=new P.a6(p,!1)
q.x=s
return r},
c_:function(a,b){this.r=a.a
return!1},
aS:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.di()
if(typeof u!=="number")return u.a8()
this.r=(u&~t)>>>0
return!1},
aR:function(a,b){var u=this.d
if(u==null)return!1
u.w(this.aH(a,b))
return!0},
fR:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaz()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.v()
q=a.b
p=o.cy
if(typeof q!=="number")return q.v()
t=new X.bP(new V.D(s*r,q*p),u,t)
t.b=!0
n.w(t)
return!0},
ep:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.cI(c,r.a.gaz(),b)
s.b=!0
t.w(s)
r.y=new P.a6(u,!1)
r.x=V.ay()}}
X.a7.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.a7))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.av.prototype={}
X.fC.prototype={
bi:function(a,b,c){var u=this,t=new P.a6(Date.now(),!1),s=u.a.gaz(),r=new X.av(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
c_:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.w(this.bi(a,b,!0))
return!0},
aS:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.di()
if(typeof t!=="number")return t.a8()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.w(u.bi(a,b,!0))
return!0},
aR:function(a,b){var u=this.d
if(u==null)return!1
u.w(this.bi(a,b,!1))
return!0},
fS:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaz()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.v()
r=a.b
q=p.ch
if(typeof r!=="number")return r.v()
u=new X.bP(new V.D(t*s,r*q),u,b)
u.b=!0
o.w(u)
return!0},
gcV:function(){var u=this.b
return u==null?this.b=D.A():u},
gc6:function(){var u=this.c
return u==null?this.c=D.A():u},
gd6:function(){var u=this.d
return u==null?this.d=D.A():u}}
X.bP.prototype={}
X.fR.prototype={}
X.da.prototype={}
X.hu.prototype={
aH:function(a,b){var u=this,t=new P.a6(Date.now(),!1),s=a.length>0?a[0]:V.ay(),r=u.a.gaz(),q=new X.da(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
fP:function(a){var u=this.b
if(u==null)return!1
u.w(this.aH(a,!0))
return!0},
fN:function(a){var u=this.c
if(u==null)return!1
u.w(this.aH(a,!0))
return!0},
fO:function(a){var u=this.d
if(u==null)return!1
u.w(this.aH(a,!1))
return!0}}
X.de.prototype={
gaz:function(){var u=this.a,t=C.f.gcS(u).c
t.toString
u=C.f.gcS(u).d
u.toString
return V.jK(0,0,t,u)},
cq:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.cG(u,new X.a7(t,a.altKey,a.shiftKey))},
ay:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.a7(t,a.altKey,a.shiftKey)},
bz:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.a7(t,a.altKey,a.shiftKey)},
ak:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.F()
u=t.top
if(typeof r!=="number")return r.F()
return new V.V(s-q,r-u)},
aI:function(a){return new V.D(a.movementX,a.movementY)},
bu:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.V])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
q=C.d.a9(r.pageX)
C.d.a9(r.pageY)
p=o.left
C.d.a9(r.pageX)
n.push(new V.V(q-p,C.d.a9(r.pageY)-o.top))}return n},
ai:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cq(u,new X.a7(t,a.altKey,a.shiftKey))},
bj:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.F()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.F()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
ej:function(a){this.f=!0},
e7:function(a){this.f=!1},
ed:function(a){if(this.f&&this.bj(a))a.preventDefault()},
en:function(a){var u
if(!this.f)return
u=this.cq(a)
this.b.fQ(u)},
el:function(a){var u
if(!this.f)return
u=this.cq(a)
this.b.fM(u)},
er:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.ay(a)
if(r.x){u=r.ai(a)
t=r.aI(a)
if(r.d.c_(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.ai(a)
s=r.ak(a)
if(r.c.c_(u,s))a.preventDefault()},
ew:function(a){var u,t,s,r=this
r.ay(a)
u=r.ai(a)
if(r.x){t=r.aI(a)
if(r.d.aS(u,t))a.preventDefault()
return}if(r.r)return
s=r.ak(a)
if(r.c.aS(u,s))a.preventDefault()},
eh:function(a){var u,t,s,r=this
if(!r.bj(a)){r.ay(a)
u=r.ai(a)
if(r.x){t=r.aI(a)
if(r.d.aS(u,t))a.preventDefault()
return}if(r.r)return
s=r.ak(a)
if(r.c.aS(u,s))a.preventDefault()}},
eu:function(a){var u,t,s,r=this
r.ay(a)
u=r.ai(a)
if(r.x){t=r.aI(a)
if(r.d.aR(u,t))a.preventDefault()
return}if(r.r)return
s=r.ak(a)
if(r.c.aR(u,s))a.preventDefault()},
ef:function(a){var u,t,s,r=this
if(!r.bj(a)){r.ay(a)
u=r.ai(a)
if(r.x){t=r.aI(a)
if(r.d.aR(u,t))a.preventDefault()
return}if(r.r)return
s=r.ak(a)
if(r.c.aR(u,s))a.preventDefault()}},
ey:function(a){var u,t,s=this
s.ay(a)
u=new V.D((a&&C.r).gfn(a),C.r.gfo(a)).v(0,s.Q)
if(s.x){if(s.d.fR(u))a.preventDefault()
return}if(s.r)return
t=s.ak(a)
if(s.c.fS(u,t))a.preventDefault()},
eA:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ai(s.y)
t=s.ak(s.y)
s.d.ep(u,t,r)}},
eQ:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bz(a)
u=t.bu(a)
if(t.e.fP(u))a.preventDefault()},
eM:function(a){var u
this.bz(a)
u=this.bu(a)
if(this.e.fN(u))a.preventDefault()},
eO:function(a){var u
this.bz(a)
u=this.bu(a)
if(this.e.fO(u))a.preventDefault()}}
D.ep.prototype={$iX:1}
D.be.prototype={
ah:function(a){var u=this.r
if(u!=null)u.w(a)},
dz:function(){return this.ah(null)},
$iX:1}
D.X.prototype={}
D.cH.prototype={
ah:function(a){var u=this.y
if(u!=null)u.w(a)},
cw:function(a){var u=this.z
if(u!=null)u.w(a)},
eo:function(){return this.cw(null)},
eC:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.m)(a),++t){s=a[t]
if(s==null||this.dM(s))return!1}return!0},
e1:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcv(),s=[{func:1,ret:-1,args:[D.Q]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q instanceof D.be)this.f.push(q)
p=q.r
if(p==null){p=new D.bg()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}u=new D.aQ()
u.b=!0
this.ah(u)},
eG:function(a,b){var u,t,s
for(u=b.gO(b),t=this.gcv();u.u();){s=u.gG(u)
C.a.E(this.e,s)
s.gm().E(0,t)}u=new D.aR()
u.b=!0
this.ah(u)},
dM:function(a){var u=C.a.N(this.f,a)
return u},
$ai:function(){return[D.X]},
$aao:function(){return[D.X]}}
D.fQ.prototype={$iX:1}
D.hc.prototype={$iX:1}
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
V.ap.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ap))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.E(u.a,3,0)+", "+V.E(u.b,3,0)+", "+V.E(u.c,3,0)+", "+V.E(u.d,3,0)+"]"}}
V.eN.prototype={}
V.cN.prototype={
a1:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.K])
return t},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cN))return!1
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
V.at.prototype={
a1:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.K])
return t},
bS:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.z().a)return V.bl()
u=1/b1
t=-n
s=-a0
return V.ag((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
v:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.ag(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
ba:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.y(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
aW:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.O(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.at))return!1
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
if(!(Math.abs(b.z-s.z)<t))return!1
if(!(Math.abs(b.Q-s.Q)<t))return!1
if(!(Math.abs(b.ch-s.ch)<t))return!1
if(!(Math.abs(b.cx-s.cx)<t))return!1
if(!(Math.abs(b.cy-s.cy)<t))return!1
if(!(Math.abs(b.db-s.db)<t))return!1
if(!(Math.abs(b.dx-s.dx)<t))return!1
return!0},
i:function(a){return this.J()},
B:function(a){var u,t,s,r,q,p=this,o=[P.K],n=V.bw(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.bw(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.bw(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.bw(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
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
J:function(){return this.B("")}}
V.V.prototype={
F:function(a,b){return new V.V(this.a-b.a,this.b-b.b)},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.V))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+"]"}}
V.O.prototype={
F:function(a,b){return new V.O(this.a-b.a,this.b-b.b,this.c-b.c)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.O))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"]"}}
V.az.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.az))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.E(u.a,3,0)+", "+V.E(u.b,3,0)+", "+V.E(u.c,3,0)+", "+V.E(u.d,3,0)+"]"}}
V.cW.prototype={
ga3:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cW))return!1
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
bU:function(a){return Math.sqrt(this.A(this))},
A:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.r(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.r(t)
return s*r+u*t},
v:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.v()
if(typeof b!=="number")return H.r(b)
u=this.b
if(typeof u!=="number")return u.v()
return new V.D(t*b,u*b)},
t:function(a,b){var u,t
if(Math.abs(b-0)<$.z().a){u=$.jS
return u==null?$.jS=new V.D(0,0):u}u=this.a
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
if(typeof u!=="number")return u.F()
if(typeof t!=="number")return H.r(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.F()
if(typeof t!=="number")return H.r(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+"]"}}
V.y.prototype={
bU:function(a){return Math.sqrt(this.A(this))},
A:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bV:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.y(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aL:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.y(u*t-s*r,s*q-p*t,p*r-u*q)},
C:function(a,b){return new V.y(this.a+b.a,this.b+b.b,this.c+b.c)},
M:function(a){return new V.y(-this.a,-this.b,-this.c)},
t:function(a,b){if(Math.abs(b-0)<$.z().a)return V.c1()
return new V.y(this.a/b,this.b/b,this.c/b)},
d5:function(){var u=$.z().a
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
U.ew.prototype={
bc:function(a){var u=V.mp(a,this.c,this.b)
return u},
gm:function(){var u=this.y
return u==null?this.y=D.A():u},
L:function(a){var u=this.y
if(u!=null)u.w(a)},
sc7:function(a,b){},
sbW:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.z().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bc(u)}s=new D.x("maximumLocation",s,t.b)
s.b=!0
t.L(s)}},
sbZ:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.z().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bc(u)}s=new D.x("minimumLocation",s,t.c)
s.b=!0
t.L(s)}},
sY:function(a,b){var u,t=this
b=t.bc(b)
u=t.d
if(!(Math.abs(u-b)<$.z().a)){t.d=b
u=new D.x("location",u,b)
u.b=!0
t.L(u)}},
sbX:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.z().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.x("maximumVelocity",r,a)
r.b=!0
s.L(r)}},
sP:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.z().a)){u.f=a
t=new D.x("velocity",t,a)
t.b=!0
u.L(t)}},
sbI:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.z().a)){this.x=a
u=new D.x("dampening",u,a)
u.b=!0
this.L(u)}},
aa:function(a,b){var u,t,s,r=this,q=r.f,p=$.z().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sY(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.z().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sP(u)}}}
U.cs.prototype={
gm:function(){var u=this.b
return u==null?this.b=D.A():u},
aC:function(a,b,c){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cs))return!1
return J.F(this.a,b.a)},
i:function(a){return"Constant: "+this.a.B("          ")}}
U.bG.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.A():u},
L:function(a){var u=this.e
if(u!=null)u.w(a)},
a0:function(){return this.L(null)},
e_:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gav(),s=[{func:1,ret:-1,args:[D.Q]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.gm()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.aQ()
u.b=!0
this.L(u)},
eE:function(a,b){var u,t
for(u=b.gO(b),t=this.gav();u.u();)u.gG(u).gm().E(0,t)
u=new D.aR()
u.b=!0
this.L(u)},
aC:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.a2()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.W(r,r.length),u=null;r.u();){q=r.d
if(q!=null){t=q.aC(0,b,c)
if(t!=null)u=u==null?t:t.v(0,u)}}s.f=u==null?V.bl():u
r=s.e
if(r!=null)r.ag(0)}return s.f},
n:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bG))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.f(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.f(r,t)
if(!J.F(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ai:function(){return[U.a1]},
$aao:function(){return[U.a1]},
$ia1:1}
U.a1.prototype={}
U.df.prototype={
gm:function(){var u=this.cy
return u==null?this.cy=D.A():u},
L:function(a){var u=this.cy
if(u!=null)u.w(a)},
a0:function(){return this.L(null)},
aJ:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gcV().l(0,u.gbk())
u.a.c.gd6().l(0,u.gbm())
u.a.c.gc6().l(0,u.gbo())
return!0},
bl:function(a){var u=this
if(!J.F(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bn:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$iav")
if(!n.y)return
if(n.x){u=a.d.F(0,a.y)
u=new V.D(u.a,u.b)
u=u.A(u)
t=n.r
if(typeof t!=="number")return H.r(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.F(0,a.y)
u=new V.D(t.a,t.b).v(0,2).t(0,u.ga3())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.v()
s=n.e
if(typeof s!=="number")return H.r(s)
t.sP(u*10*s)}else{u=a.c
t=a.d
s=t.F(0,a.y)
r=new V.D(s.a,s.b).v(0,2).t(0,u.ga3())
s=n.b
q=r.a
if(typeof q!=="number")return q.M()
p=n.e
if(typeof p!=="number")return H.r(p)
o=n.z
if(typeof o!=="number")return H.r(o)
s.sY(0,-q*p+o)
n.b.sP(0)
t=t.F(0,a.z)
n.Q=new V.D(t.a,t.b).v(0,2).t(0,u.ga3())}n.a0()},
bp:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.A(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.v()
s=r.e
if(typeof s!=="number")return H.r(s)
u.sP(t*10*s)
r.a0()}},
aC:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.a2()
if(q<p){r.ch=p
u=b.y
r.b.aa(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.ag(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$ia1:1}
U.dg.prototype={
gm:function(){var u=this.fx
return u==null?this.fx=D.A():u},
L:function(a){var u=this.fx
if(u!=null)u.w(a)},
a0:function(){return this.L(null)},
aJ:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gcV().l(0,s.gbk())
s.a.c.gd6().l(0,s.gbm())
s.a.c.gc6().l(0,s.gbo())
u=s.a.d
t=u.f
u=t==null?u.f=D.A():t
u.l(0,s.gdT())
u=s.a.d
t=u.d
u=t==null?u.d=D.A():t
u.l(0,s.gdV())
u=s.a.e
t=u.b
u=t==null?u.b=D.A():t
u.l(0,s.gf8())
u=s.a.e
t=u.d
u=t==null?u.d=D.A():t
u.l(0,s.gf6())
u=s.a.e
t=u.c
u=t==null?u.c=D.A():t
u.l(0,s.gf4())
return!0},
ad:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.M()
u=-u}if(this.r){if(typeof t!=="number")return t.M()
t=-t}return new V.D(u,t)},
bl:function(a){var u=this
H.l(a,"$iav")
if(!J.F(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bn:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$iav")
if(!n.cx)return
if(n.ch){u=a.d.F(0,a.y)
u=new V.D(u.a,u.b)
u=u.A(u)
t=n.Q
if(typeof t!=="number")return H.r(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.F(0,a.y)
u=n.ad(new V.D(t.a,t.b).v(0,2).t(0,u.ga3()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.M()
s=n.y
if(typeof s!=="number")return H.r(s)
t.sP(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.M()
t=n.x
if(typeof t!=="number")return H.r(t)
s.sP(-u*10*t)}else{u=a.c
t=a.d
s=t.F(0,a.y)
r=n.ad(new V.D(s.a,s.b).v(0,2).t(0,u.ga3()))
s=n.c
q=r.a
if(typeof q!=="number")return q.M()
p=n.y
if(typeof p!=="number")return H.r(p)
o=n.cy
if(typeof o!=="number")return H.r(o)
s.sY(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.M()
q=n.x
if(typeof q!=="number")return H.r(q)
s=n.db
if(typeof s!=="number")return H.r(s)
o.sY(0,-p*q+s)
n.b.sP(0)
n.c.sP(0)
t=t.F(0,a.z)
n.dx=n.ad(new V.D(t.a,t.b).v(0,2).t(0,u.ga3()))}n.a0()},
bp:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.A(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.M()
s=r.y
if(typeof s!=="number")return H.r(s)
u.sP(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.M()
u=r.x
if(typeof u!=="number")return H.r(u)
s.sP(-t*10*u)
r.a0()}},
dU:function(a){var u=this
if(H.l(a,"$icI").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
dW:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$iav")
if(!J.F(n.d,a.x.b))return
u=a.c
t=a.d
s=t.F(0,a.y)
r=n.ad(new V.D(s.a,s.b).v(0,2).t(0,u.ga3()))
s=n.c
q=r.a
if(typeof q!=="number")return q.M()
p=n.y
if(typeof p!=="number")return H.r(p)
o=n.cy
if(typeof o!=="number")return H.r(o)
s.sY(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.M()
q=n.x
if(typeof q!=="number")return H.r(q)
s=n.db
if(typeof s!=="number")return H.r(s)
o.sY(0,-p*q+s)
n.b.sP(0)
n.c.sP(0)
t=t.F(0,a.z)
n.dx=n.ad(new V.D(t.a,t.b).v(0,2).t(0,u.ga3()))
n.a0()},
f9:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
f7:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$ida")
if(!n.cx)return
if(n.ch){u=a.d.F(0,a.y)
u=new V.D(u.a,u.b)
u=u.A(u)
t=n.Q
if(typeof t!=="number")return H.r(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.F(0,a.y)
u=n.ad(new V.D(t.a,t.b).v(0,2).t(0,u.ga3()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.M()
s=n.y
if(typeof s!=="number")return H.r(s)
t.sP(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.M()
t=n.x
if(typeof t!=="number")return H.r(t)
s.sP(-u*10*t)}else{u=a.c
t=a.d
s=t.F(0,a.y)
r=n.ad(new V.D(s.a,s.b).v(0,2).t(0,u.ga3()))
s=n.c
q=r.a
if(typeof q!=="number")return q.M()
p=n.y
if(typeof p!=="number")return H.r(p)
o=n.cy
if(typeof o!=="number")return H.r(o)
s.sY(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.M()
q=n.x
if(typeof q!=="number")return H.r(q)
s=n.db
if(typeof s!=="number")return H.r(s)
o.sY(0,-p*q+s)
n.b.sP(0)
n.c.sP(0)
t=t.F(0,a.z)
n.dx=n.ad(new V.D(t.a,t.b).v(0,2).t(0,u.ga3()))}n.a0()},
f5:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.A(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.M()
s=r.y
if(typeof s!=="number")return H.r(s)
u.sP(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.M()
u=r.x
if(typeof u!=="number")return H.r(u)
s.sP(-t*10*u)
r.a0()}},
aC:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.a2()
if(q<p){r.dy=p
u=b.y
r.c.aa(0,u)
r.b.aa(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.ag(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.v(0,V.ag(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$ia1:1}
U.dh.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.A():u},
L:function(a){var u=this.r
if(u!=null)u.w(a)},
aJ:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.A():t
t=r.gdX()
u.l(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.A():s).l(0,t)
return!0},
dY:function(a){var u,t,s,r,q=this
if(!J.F(q.b,q.a.b.c))return
H.l(a,"$ibP")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.v()
r=u+t*s
if(u!==r){q.d=r
u=new D.x("zoom",u,r)
u.b=!0
q.L(u)}},
aC:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.ag(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$ia1:1}
M.cr.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.A():u},
T:function(a){var u=this.r
if(u!=null)u.w(a)},
aG:function(){return this.T(null)},
eI:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gS(),s=[{func:1,ret:-1,args:[D.Q]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.gm()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.aQ()
u.b=!0
this.T(u)},
eK:function(a,b){var u,t
for(u=b.gO(b),t=this.gS();u.u();)u.gG(u).gm().E(0,t)
u=new D.aR()
u.b=!0
this.T(u)},
a4:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.W(u,u.length);u.u();){t=u.d
if(t!=null)t.a4(a)}s.f=!1},
$ai:function(){return[M.a9]},
$aao:function(){return[M.a9]},
$ia9:1}
M.ct.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.A():u},
T:function(a){var u=this.r
if(u!=null)u.w(a)},
aG:function(){return this.T(null)},
saK:function(a){var u,t,s=this
if(a==null)a=new X.f_()
u=s.b
if(u!==a){if(u!=null)u.gm().E(0,s.gS())
t=s.b
s.b=a
a.gm().l(0,s.gS())
u=new D.x("camera",t,s.b)
u.b=!0
s.T(u)}},
saT:function(a,b){var u,t,s=this
if(b==null)b=X.j1(null)
u=s.c
if(u!==b){if(u!=null)u.gm().E(0,s.gS())
t=s.c
s.c=b
b.gm().l(0,s.gS())
u=new D.x("target",t,s.c)
u.b=!0
s.T(u)}},
saU:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gm().E(0,t.gS())
u=t.d
t.d=a
if(a!=null)a.gm().l(0,t.gS())
s=new D.x("technique",u,t.d)
s.b=!0
t.T(s)}},
a4:function(a){var u=this
a.c1(u.d)
u.c.U(a)
u.b.U(a)
u.e.aa(0,a)
u.e.a4(a)
u.b.ar(a)
u.c.toString
a.c0()},
$ia9:1}
M.cy.prototype={
T:function(a){var u=this.y
if(u!=null)u.w(a)},
aG:function(){return this.T(null)},
e9:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gS(),s=[{func:1,ret:-1,args:[D.Q]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bg()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.aQ()
u.b=!0
this.T(u)},
eb:function(a,b){var u,t
for(u=b.gO(b),t=this.gS();u.u();)u.gG(u).gm().E(0,t)
u=new D.aR()
u.b=!0
this.T(u)},
saK:function(a){var u,t,s=this
if(a==null)a=X.jE(null)
u=s.b
if(u!==a){if(u!=null)u.gm().E(0,s.gS())
t=s.b
s.b=a
a.gm().l(0,s.gS())
u=new D.x("camera",t,s.b)
u.b=!0
s.T(u)}},
saT:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gm().E(0,t.gS())
u=t.c
t.c=b
b.gm().l(0,t.gS())
s=new D.x("target",u,t.c)
s.b=!0
t.T(s)}},
saU:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gm().E(0,t.gS())
u=t.d
t.d=a
if(a!=null)a.gm().l(0,t.gS())
s=new D.x("technique",u,t.d)
s.b=!0
t.T(s)}},
gm:function(){var u=this.y
return u==null?this.y=D.A():u},
a4:function(a){var u,t=this
a.c1(t.d)
t.c.U(a)
t.b.U(a)
u=t.d
if(u!=null)u.aa(0,a)
for(u=t.e.a,u=new J.W(u,u.length);u.u();)u.d.aa(0,a)
for(u=t.e.a,u=new J.W(u,u.length);u.u();)u.d.a4(a)
t.b.toString
a.cy.ap()
a.db.ap()
t.c.toString
a.c0()},
$ia9:1}
M.a9.prototype={}
A.cm.prototype={}
A.ek.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
fv:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
cU:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.R.prototype={
gab:function(a){var u=this.a?1:0
return u|0|0},
i:function(a){var u=this.a?1:0
return""+(u|0|0)},
n:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.R))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.fh.prototype={
ds:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.aD("")
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
A.lH(c0,u)
A.lJ(c0,u)
A.lI(c0,u)
A.lL(c0,u)
A.lM(c0,u)
A.lK(c0,u)
A.lN(c0,u)
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
b5.d3(0,s.charCodeAt(0)==0?s:s,A.lG(b5.z))
b5.Q=b5.x.h(0,"posAttr")
b5.cx=b5.x.h(0,"normAttr")
b5.ch=b5.x.h(0,"binmAttr")
b5.cy=b5.x.h(0,"txt2DAttr")
b5.db=b5.x.h(0,"txtCubeAttr")
b5.dx=b5.x.h(0,"bendAttr")
if(c0.dy)b5.id=H.l(b5.y.R(0,"invViewMat"),"$ia_")
if(t)b5.dy=H.l(b5.y.R(0,"objMat"),"$ia_")
if(r)b5.fr=H.l(b5.y.R(0,"viewObjMat"),"$ia_")
b5.fy=H.l(b5.y.R(0,"projViewObjMat"),"$ia_")
if(c0.go)b5.fx=H.l(b5.y.R(0,"viewMat"),"$ia_")
if(c0.x1)b5.k1=H.l(b5.y.R(0,"txt2DMat"),"$ibY")
if(c0.x2)b5.k2=H.l(b5.y.R(0,"txtCubeMat"),"$ia_")
if(c0.y1)b5.k3=H.l(b5.y.R(0,"colorMat"),"$ia_")
b5.r1=H.b([],[A.a_])
t=c0.b3
if(t>0){b5.k4=b5.y.R(0,"bendMatCount")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.h(0,q)
if(m==null)H.p(P.o(b7+q+b8))
s.push(H.l(m,"$ia_"))}}if(c0.a.a)b5.r2=H.l(b5.y.R(0,"emissionClr"),"$iB")
if(c0.b.a)b5.x1=H.l(b5.y.R(0,"ambientClr"),"$iB")
if(c0.c.a)b5.y2=H.l(b5.y.R(0,"diffuseClr"),"$iB")
if(c0.d.a)b5.b4=H.l(b5.y.R(0,"invDiffuseClr"),"$iB")
t=c0.e.a
if(!t)s=!1
else s=!0
if(s){b5.cY=H.l(b5.y.R(0,"shininess"),"$iL")
if(t)b5.cX=H.l(b5.y.R(0,"specularClr"),"$iB")}if(c0.db){b5.cZ=H.l(b5.y.R(0,"envSampler"),"$ib0")
if(c0.r.a)b5.d_=H.l(b5.y.R(0,"reflectClr"),"$iB")
t=c0.x.a
if(!t)s=!1
else s=!0
if(s){b5.d0=H.l(b5.y.R(0,"refraction"),"$iL")
if(t)b5.d1=H.l(b5.y.R(0,"refractClr"),"$iB")}}if(c0.y.a)b5.d2=H.l(b5.y.R(0,"alpha"),"$iL")
if(c0.k1){t=c0.z
s=t.length
if(s!==0){r=P.u
b5.bJ=new H.H([r,A.b_])
b5.bK=new H.H([r,[P.aV,A.bW]])
for(r=[A.bW],l=0;l<t.length;t.length===s||(0,H.m)(t),++l){k=t[l]
j=k.a
i="barLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].startPnt"
m=p.h(0,o)
if(m==null)H.p(P.o(b7+o+b8))
H.l(m,"$iB")
p=b5.y
o=i+"s["+n+"].endPnt"
g=p.h(0,o)
if(g==null)H.p(P.o(b7+o+b8))
H.l(g,"$iB")
p=b5.y
o=i+"s["+n+"].color"
f=p.h(0,o)
if(f==null)H.p(P.o(b7+o+b8))
H.l(f,"$iB")
if(typeof j!=="number")return j.a8()
if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
e=p.h(0,o)
if(e==null)H.p(P.o(b7+o+b8))
H.l(e,"$iL")
p=b5.y
o=i+"s["+n+"].att1"
d=p.h(0,o)
if(d==null)H.p(P.o(b7+o+b8))
H.l(d,"$iL")
p=b5.y
o=i+"s["+n+"].att2"
c=p.h(0,o)
if(c==null)H.p(P.o(b7+o+b8))
H.l(c,"$iL")
b=c
a=d
a0=e}else{b=b6
a=b
a0=a}h.push(new A.bW(m,g,f,a0,a,b))}b5.bK.k(0,j,h)
q=b5.bJ
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.p(P.o(b7+o+b8))
q.k(0,j,m)}}t=c0.Q
s=t.length
if(s!==0){r=P.u
b5.bL=new H.H([r,A.b_])
b5.bM=new H.H([r,[P.aV,A.bX]])
for(r=[A.bX],l=0;l<t.length;t.length===s||(0,H.m)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.a8()
p=(j&1)!==0
if(p){o=b5.y
a1=i+"s["+n+"].objUp"
m=o.h(0,a1)
if(m==null)H.p(P.o(b7+a1+b8))
H.l(m,"$iB")
o=b5.y
a1=i+"s["+n+"].objRight"
g=o.h(0,a1)
if(g==null)H.p(P.o(b7+a1+b8))
H.l(g,"$iB")
o=b5.y
a1=i+"s["+n+"].objDir"
f=o.h(0,a1)
if(f==null)H.p(P.o(b7+a1+b8))
H.l(f,"$iB")
a2=f
a3=g
a4=m}else{a2=b6
a3=a2
a4=a3}o=b5.y
a1=i+"s["+n+"].viewDir"
m=o.h(0,a1)
if(m==null)H.p(P.o(b7+a1+b8))
H.l(m,"$iB")
o=b5.y
a1=i+"s["+n+"].color"
g=o.h(0,a1)
if(g==null)H.p(P.o(b7+a1+b8))
H.l(g,"$iB")
if(p){p=b5.y
o=i+"sTexture2D"+n
f=p.h(0,o)
if(f==null)H.p(P.o(b7+o+b8))
H.l(f,"$ibq")
a5=f}else a5=b6
h.push(new A.bX(a4,a3,a2,m,g,a5))}b5.bM.k(0,j,h)
q=b5.bL
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.p(P.o(b7+o+b8))
q.k(0,j,m)}}t=c0.ch
s=t.length
if(s!==0){r=P.u
b5.bN=new H.H([r,A.b_])
b5.bO=new H.H([r,[P.aV,A.bZ]])
for(r=[A.bZ],l=0;l<t.length;t.length===s||(0,H.m)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.h(0,o)
if(m==null)H.p(P.o(b7+o+b8))
H.l(m,"$iB")
p=b5.y
o=i+"s["+n+"].viewPnt"
g=p.h(0,o)
if(g==null)H.p(P.o(b7+o+b8))
H.l(g,"$iB")
p=b5.y
o=i+"s["+n+"].color"
f=p.h(0,o)
if(f==null)H.p(P.o(b7+o+b8))
H.l(f,"$iB")
if(typeof j!=="number")return j.a8()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
e=p.h(0,o)
if(e==null)H.p(P.o(b7+o+b8))
H.l(e,"$ibY")
a6=e}else a6=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
e=p.h(0,o)
if(e==null)H.p(P.o(b7+o+b8))
H.l(e,"$ib0")
a5=e}else a5=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
e=p.h(0,o)
if(e==null)H.p(P.o(b7+o+b8))
H.l(e,"$ib0")
p=b5.y
o=i+"s["+n+"].shadowAdj"
d=p.h(0,o)
if(d==null)H.p(P.o(b7+o+b8))
H.l(d,"$ibV")
a7=e
a8=d}else{a7=b6
a8=a7}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
e=p.h(0,o)
if(e==null)H.p(P.o(b7+o+b8))
H.l(e,"$iL")
p=b5.y
o=i+"s["+n+"].att1"
d=p.h(0,o)
if(d==null)H.p(P.o(b7+o+b8))
H.l(d,"$iL")
p=b5.y
o=i+"s["+n+"].att2"
c=p.h(0,o)
if(c==null)H.p(P.o(b7+o+b8))
H.l(c,"$iL")
b=c
a=d
a0=e}else{b=b6
a=b
a0=a}h.push(new A.bZ(m,g,a6,f,a5,a7,a8,a0,a,b))}b5.bO.k(0,j,h)
q=b5.bN
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.p(P.o(b7+o+b8))
q.k(0,j,m)}}t=c0.cx
s=t.length
if(s!==0){r=P.u
b5.bP=new H.H([r,A.b_])
b5.bQ=new H.H([r,[P.aV,A.c_]])
for(r=[A.c_],l=0;l<t.length;t.length===s||(0,H.m)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.h(0,o)
if(m==null)H.p(P.o(b7+o+b8))
H.l(m,"$iB")
p=b5.y
o=i+"s["+n+"].objDir"
g=p.h(0,o)
if(g==null)H.p(P.o(b7+o+b8))
H.l(g,"$iB")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.h(0,o)
if(f==null)H.p(P.o(b7+o+b8))
H.l(f,"$iB")
p=b5.y
o=i+"s["+n+"].color"
e=p.h(0,o)
if(e==null)H.p(P.o(b7+o+b8))
H.l(e,"$iB")
if(typeof j!=="number")return j.a8()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
d=p.h(0,o)
if(d==null)H.p(P.o(b7+o+b8))
H.l(d,"$iB")
p=b5.y
o=i+"s["+n+"].objRight"
c=p.h(0,o)
if(c==null)H.p(P.o(b7+o+b8))
H.l(c,"$iB")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.h(0,o)
if(a9==null)H.p(P.o(b7+o+b8))
H.l(a9,"$iL")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.h(0,o)
if(b0==null)H.p(P.o(b7+o+b8))
H.l(b0,"$iL")
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
H.l(d,"$ibV")
a8=d}else a8=b6
if((j&8)!==0){o=b5.y
a1=i+"s["+n+"].cutoff"
d=o.h(0,a1)
if(d==null)H.p(P.o(b7+a1+b8))
H.l(d,"$iL")
o=b5.y
a1=i+"s["+n+"].coneAngle"
c=o.h(0,a1)
if(c==null)H.p(P.o(b7+a1+b8))
H.l(c,"$iL")
b3=c
b4=d}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
a1=i+"s["+n+"].att0"
d=o.h(0,a1)
if(d==null)H.p(P.o(b7+a1+b8))
H.l(d,"$iL")
o=b5.y
a1=i+"s["+n+"].att1"
c=o.h(0,a1)
if(c==null)H.p(P.o(b7+a1+b8))
H.l(c,"$iL")
o=b5.y
a1=i+"s["+n+"].att2"
a9=o.h(0,a1)
if(a9==null)H.p(P.o(b7+a1+b8))
H.l(a9,"$iL")
b=a9
a=c
a0=d}else{b=b6
a=b
a0=a}if((j&1)!==0){o=b5.y
a1=i+"sTexture2D"+n
d=o.h(0,a1)
if(d==null)H.p(P.o(b7+a1+b8))
H.l(d,"$ibq")
a5=d}else a5=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
d=p.h(0,o)
if(d==null)H.p(P.o(b7+o+b8))
H.l(d,"$ibq")
a7=d}else a7=b6
h.push(new A.c_(m,g,f,e,a4,a3,b2,b1,a8,b4,b3,a0,a,b,a5,a7))}b5.bQ.k(0,j,h)
q=b5.bP
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.p(P.o(b7+o+b8))
q.k(0,j,m)}}}},
eZ:function(a,b){if(b!=null&&b.d>=6)a.ca(b)}}
A.cn.prototype={
i:function(a){return"barLight"+H.e(this.a)}}
A.cv.prototype={
i:function(a){return"dirLight"+H.e(this.a)}}
A.cU.prototype={
i:function(a){return"pointLight"+H.e(this.a)}}
A.d0.prototype={
i:function(a){return"spotLight"+H.e(this.a)}}
A.fk.prototype={
i:function(a){return this.aO}}
A.bW.prototype={}
A.bX.prototype={}
A.bZ.prototype={}
A.c_.prototype={}
A.cY.prototype={
cg:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
d3:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.cr(b,35633)
r.f=r.cr(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!u.getProgramParameter(r.r,35714)){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.p(P.o("Failed to link shader: "+H.e(s)))}r.f0()
r.f2()},
U:function(a){a.a.useProgram(this.r)
this.x.fv()},
cr:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.o("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
f0:function(){var u,t,s,r=this,q=H.b([],[A.cm]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.r(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cm(p,t.name,s))}r.x=new A.ek(q)},
f2:function(){var u,t,s,r=this,q=H.b([],[A.dc]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.r(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.fm(t.type,t.size,t.name,s))}r.y=new A.hG(q)},
aw:function(a,b,c){var u=this.a
if(a===1)return new A.b_(u,b,c)
else return A.jc(u,this.r,b,a,c)},
dO:function(a,b,c){var u=this.a
if(a===1)return new A.bq(u,b,c)
else return A.jc(u,this.r,b,a,c)},
dP:function(a,b,c){var u=this.a
if(a===1)return new A.b0(u,b,c)
else return A.jc(u,this.r,b,a,c)},
b0:function(a,b){return new P.du(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
fm:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aw(b,c,d)
case 5121:return u.aw(b,c,d)
case 5122:return u.aw(b,c,d)
case 5123:return u.aw(b,c,d)
case 5124:return u.aw(b,c,d)
case 5125:return u.aw(b,c,d)
case 5126:return new A.L(u.a,c,d)
case 35664:return new A.hC(u.a,c,d)
case 35665:return new A.B(u.a,c,d)
case 35666:return new A.bV(u.a,c,d)
case 35667:return new A.hD(u.a,c,d)
case 35668:return new A.hE(u.a,c,d)
case 35669:return new A.hF(u.a,c,d)
case 35674:return new A.hH(u.a,c,d)
case 35675:return new A.bY(u.a,c,d)
case 35676:return new A.a_(u.a,c,d)
case 35678:return u.dO(b,c,d)
case 35680:return u.dP(b,c,d)
case 35670:throw H.c(u.b0("BOOL",c))
case 35671:throw H.c(u.b0("BOOL_VEC2",c))
case 35672:throw H.c(u.b0("BOOL_VEC3",c))
case 35673:throw H.c(u.b0("BOOL_VEC4",c))
default:throw H.c(P.o("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.h9.prototype={}
A.dc.prototype={}
A.hG.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
R:function(a,b){var u=this.h(0,b)
if(u==null)throw H.c(P.o("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.J()},
J:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.m)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.b_.prototype={
i:function(a){return"Uniform1i: "+H.e(this.c)}}
A.hD.prototype={
i:function(a){return"Uniform2i: "+H.e(this.c)}}
A.hE.prototype={
i:function(a){return"Uniform3i: "+H.e(this.c)}}
A.hF.prototype={
i:function(a){return"Uniform4i: "+H.e(this.c)}}
A.hB.prototype={
i:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.L.prototype={
i:function(a){return"Uniform1f: "+H.e(this.c)}}
A.hC.prototype={
i:function(a){return"Uniform2f: "+H.e(this.c)}}
A.B.prototype={
i:function(a){return"Uniform3f: "+H.e(this.c)}}
A.bV.prototype={
i:function(a){return"Uniform4f: "+H.e(this.c)}}
A.hH.prototype={
i:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.bY.prototype={
a5:function(a){var u=new Float32Array(H.cd(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.e(this.c)}}
A.a_.prototype={
a5:function(a){var u=new Float32Array(H.cd(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.e(this.c)}}
A.bq.prototype={
i:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.b0.prototype={
ca:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.iy.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.bV(s.b,b).bV(s.d.bV(s.c,b),c)
a.sY(0,new V.O(r.a,r.b,r.c))
a.sh2(r.t(0,Math.sqrt(r.A(r))))
s=1-b
u=1-c
u=new V.az(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.F(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.X()}t.f.$3(a,b,c)}}
F.iO.prototype={
$2:function(a,b){return 0}}
F.iP.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.r(s)
u=this.b+s
s=a.f
t=new V.y(s.a,s.b,s.c)
s=t.t(0,Math.sqrt(t.A(t)))
a.sY(0,new V.O(s.a*u,s.b*u,s.c*u))}}
F.aO.prototype={
aM:function(){var u=this
if(!u.gaN()){C.a.E(u.a.a.d.b,u)
u.a.a.X()}u.bv()
u.bw()
u.eT()},
bA:function(a){this.a=a
a.d.b.push(this)},
bB:function(a){this.b=a
a.d.c.push(this)},
f_:function(a){this.c=a
a.d.d.push(this)},
bv:function(){var u=this.a
if(u!=null){C.a.E(u.d.b,this)
this.a=null}},
bw:function(){var u=this.b
if(u!=null){C.a.E(u.d.c,this)
this.b=null}},
eT:function(){var u=this.c
if(u!=null){C.a.E(u.d.d,this)
this.c=null}},
gaN:function(){return this.a==null||this.b==null||this.c==null},
dI:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.c1()
if(q!=null)s=s.C(0,q)
if(u!=null)s=s.C(0,u)
if(t!=null)s=s.C(0,t)
if(s.d5())return
return s.t(0,Math.sqrt(s.A(s)))},
dK:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.F(0,q)
r=new V.y(r.a,r.b,r.c)
s=r.t(0,Math.sqrt(r.A(r)))
r=t.F(0,q)
r=new V.y(r.a,r.b,r.c)
r=s.aL(r.t(0,Math.sqrt(r.A(r))))
return r.t(0,Math.sqrt(r.A(r)))},
bE:function(){var u,t=this
if(t.d!=null)return!0
u=t.dI()
if(u==null){u=t.dK()
if(u==null)return!1}t.d=u
t.a.a.X()
return!0},
dH:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.c1()
if(q!=null)s=s.C(0,q)
if(u!=null)s=s.C(0,u)
if(t!=null)s=s.C(0,t)
if(s.d5())return
return s.t(0,Math.sqrt(s.A(s)))},
dJ:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.z().a){l=d.F(0,g)
l=new V.y(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.A(l)))
if(s.a-t.a<0)q=q.M(0)}else{p=(l-u.b)/r
l=d.F(0,g)
l=new V.O(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).F(0,j)
l=new V.y(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.A(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.M(0)}l=n.d
if(l!=null){o=l.t(0,Math.sqrt(l.A(l)))
l=o.aL(q)
l=l.t(0,Math.sqrt(l.A(l))).aL(o)
q=l.t(0,Math.sqrt(l.A(l)))}return q},
bC:function(){var u,t=this
if(t.e!=null)return!0
u=t.dH()
if(u==null){u=t.dJ()
if(u==null)return!1}t.e=u
t.a.a.X()
return!0},
gfh:function(a){var u=this
if(J.F(u.a,u.b))return!0
if(J.F(u.b,u.c))return!0
if(J.F(u.c,u.a))return!0
return!1},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
B:function(a){var u,t,s=this
if(s.gaN())return a+"disposed"
u=a+C.b.a7(J.a4(s.a.e),0)+", "+C.b.a7(J.a4(s.b.e),0)+", "+C.b.a7(J.a4(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
J:function(){return this.B("")}}
F.eQ.prototype={}
F.h8.prototype={
aQ:function(a,b,c){var u,t=b.a
t.a.a.q()
t=t.e
u=c.a
u.a.a.q()
if(t==u.e){t=b.b
t.a.a.q()
t=t.e
u=c.b
u.a.a.q()
if(t==u.e){t=b.c
t.a.a.q()
t=t.e
u=c.c
u.a.a.q()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.q()
t=t.e
u=c.b
u.a.a.q()
if(t==u.e){t=b.b
t.a.a.q()
t=t.e
u=c.c
u.a.a.q()
if(t==u.e){t=b.c
t.a.a.q()
t=t.e
u=c.a
u.a.a.q()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.q()
t=t.e
u=c.c
u.a.a.q()
if(t==u.e){t=b.b
t.a.a.q()
t=t.e
u=c.a
u.a.a.q()
if(t==u.e){t=b.c
t.a.a.q()
t=t.e
u=c.b
u.a.a.q()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.bK.prototype={
aM:function(){var u=this
if(!u.gaN()){C.a.E(u.a.a.c.b,u)
u.a.a.X()}u.bv()
u.bw()},
bA:function(a){this.a=a
a.c.b.push(this)},
bB:function(a){this.b=a
a.c.c.push(this)},
bv:function(){var u=this.a
if(u!=null){C.a.E(u.c.b,this)
this.a=null}},
bw:function(){var u=this.b
if(u!=null){C.a.E(u.c.c,this)
this.b=null}},
gaN:function(){return this.a==null||this.b==null},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
B:function(a){if(this.gaN())return a+"disposed"
return a+C.b.a7(J.a4(this.a.e),0)+", "+C.b.a7(J.a4(this.b.e),0)},
J:function(){return this.B("")}}
F.f9.prototype={}
F.hA.prototype={
aQ:function(a,b,c){var u,t=b.a
t.a.a.q()
t=t.e
u=c.a
u.a.a.q()
if(t==u.e){t=b.b
t.a.a.q()
t=t.e
u=c.b
u.a.a.q()
return t==u.e}else{t=b.a
t.a.a.q()
t=t.e
u=c.b
u.a.a.q()
if(t==u.e){t=b.b
t.a.a.q()
t=t.e
u=c.a
u.a.a.q()
return t==u.e}else return!1}}}
F.bS.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
B:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.a7(J.a4(u.e),0)},
J:function(){return this.B("")}}
F.h1.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.A():u},
bY:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.q()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){r=g[s]
h.a.l(0,r.fl())}h.a.q()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.q()
o=o.e
if(typeof o!=="number")return o.C()
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
if(p!=null)p.w(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.q()
o=o.e
if(typeof o!=="number")return o.C()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.q()
p=p.e
if(typeof p!=="number")return p.C()
p+=u
o=o.c
if(p>=o.length)return H.f(o,p)
k=o[p]
p=h.c.a
p.a.l(0,l)
p.a.l(0,k)
F.kL(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.q()
o=o.e
if(typeof o!=="number")return o.C()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.q()
p=p.e
if(typeof p!=="number")return p.C()
p+=u
o=o.c
if(p>=o.length)return H.f(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.q()
o=o.e
if(typeof o!=="number")return o.C()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
i=p[o]
o=h.d.a
o.a.l(0,l)
o.a.l(0,k)
o.a.l(0,i)
F.bF(l,k,i)}g=h.e
if(g!=null)g.ag(0)},
al:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.al()||!1
if(!t.a.al())u=!1
s=t.e
if(s!=null)s.ag(0)
return u},
fF:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.b(o.slice(0),[H.aI(o,0)])
for(o=[F.b1];u.length!==0;){t=C.a.gfz(u)
C.a.c2(u,0)
if(t!=null){s=H.b([],o)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.f(u,r)
q=u[r]
if(q!=null&&a.aQ(0,t,q)){s.push(q)
C.a.c2(u,r)}}if(s.length>1)b.bY(s)}}p.a.q()
p.c.c3()
p.d.c3()
p.b.fV()
p.c.c4(new F.hA())
p.d.c4(new F.h8())
o=p.e
if(o!=null)o.ag(0)},
cQ:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.ab()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.aL().a)!==0)++s
if((t&$.aK().a)!==0)++s
if((t&$.b7().a)!==0)++s
if((t&$.b8().a)!==0)++s
if((t&$.ci().a)!==0)++s
if((t&$.cj().a)!==0)++s
if((t&$.bx().a)!==0)++s
if((t&$.aJ().a)!==0)++s
r=a4.gcb(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.K])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.cp])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.fe(m)
k=l.gcb(l)
if(m>=t)return H.f(o,m)
o[m]=new Z.cp(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.f(i,j)
h=i[j].fE(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.f(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.cd(p)),35044)
u.bindBuffer(a1,null)
c=new Z.bB(new Z.di(a1,d),o,a4)
c.b=H.b([],[Z.bh])
if(a0.b.b.length!==0){b=H.b([],[P.u])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.q()
b.push(t.e)}a=Z.je(u,34963,b)
c.b.push(new Z.bh(0,b.length,a))}if(a0.c.b.length!==0){b=H.b([],[P.u])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.q()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.f(t,m)
t=t[m].b
t.a.a.q()
b.push(t.e)}a=Z.je(u,34963,b)
c.b.push(new Z.bh(1,b.length,a))}if(a0.d.b.length!==0){b=H.b([],[P.u])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.q()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.f(t,m)
t=t[m].b
t.a.a.q()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.f(t,m)
t=t[m].c
t.a.a.q()
b.push(t.e)}a=Z.je(u,34963,b)
c.b.push(new Z.bh(4,b.length,a))}return c},
i:function(a){var u=this,t="   ",s=H.b([],[P.t])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.B(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.B(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.B(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.B(t))}return C.a.p(s,"\n")},
X:function(){var u=this.e
if(u!=null)u.w(null)}}
F.h2.prototype={
fc:function(a){var u,t,s,r,q=H.b([],[F.aO]),p=a[0]
for(u=this.a,t=2;t<4;++t){s=a[t-1]
r=a[t]
u.a.l(0,p)
u.a.l(0,s)
u.a.l(0,r)
q.push(F.bF(p,s,r))}return q},
fd:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.aO])
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
h.push(F.bF(m,l,j))
u.a.l(0,m)
u.a.l(0,j)
u.a.l(0,i)
h.push(F.bF(m,j,i))}else{n.l(0,l)
u.a.l(0,j)
u.a.l(0,i)
h.push(F.bF(l,j,i))
u.a.l(0,l)
u.a.l(0,i)
u.a.l(0,m)
h.push(F.bF(l,i,m))}p=!p}r=!r}return h},
gj:function(a){return this.b.length},
c4:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.f(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.h(0,q)
for(o=q-1;o>=0;--o){n=r.d.h(0,o)
if(a.aQ(0,p,n)){p.aM()
break}}}}},
c3:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.f(t,u)
s=t[u]
t=s.gfh(s)
if(t)s.aM()}},
al:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.m)(u),++r)if(!u[r].bE())s=!1
return s},
bD:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.m)(u),++r)if(!u[r].bC())s=!1
return s},
i:function(a){return this.J()},
B:function(a){var u,t,s,r=H.b([],[P.t])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].B(a))
return C.a.p(r,"\n")},
J:function(){return this.B("")}}
F.h3.prototype={
gj:function(a){return this.b.length},
c4:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.f(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.h(0,q)
for(o=q-1;o>=0;--o){n=r.c.h(0,o)
if(a.aQ(0,p,n)){p.aM()
break}}}}},
c3:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.f(t,u)
s=t[u]
t=J.F(s.a,s.b)
if(t)s.aM()}},
i:function(a){return this.J()},
B:function(a){var u,t,s=H.b([],[P.t]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.f(t,u)
s.push(t[u].B(a+(""+u+". ")))}return C.a.p(s,"\n")},
J:function(){return this.B("")}}
F.h4.prototype={
gj:function(a){return this.b.length},
fV:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.f(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.E(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.w(null)}s=t.a
if(s!=null){C.a.E(s.b.b,t)
t.a=null}}}},
i:function(a){return this.J()},
B:function(a){var u,t,s,r=H.b([],[P.t])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].B(a))
return C.a.p(r,"\n")},
J:function(){return this.B("")}}
F.b1.prototype={
bH:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.hS(u.cx,r,o,t,s,q,p,a,n)},
fl:function(){return this.bH(null)},
sY:function(a,b){var u
if(!J.F(this.f,b)){this.f=b
u=this.a
if(u!=null)u.X()}},
sh2:function(a){var u
if(!J.F(this.z,a)){this.z=a
u=this.a
if(u!=null)u.X()}},
fE:function(a){var u,t,s=this
if(a.n(0,$.ab())){u=s.f
t=[P.K]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.aL())){u=s.r
t=[P.K]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.aK())){u=s.x
t=[P.K]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.b7())){u=s.y
t=[P.K]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.n(0,$.b8())){u=s.z
t=[P.K]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.ci())){u=s.Q
t=[P.K]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.cj())){u=s.Q
t=[P.K]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.n(0,$.bx()))return H.b([s.ch],[P.K])
else if(a.n(0,$.aJ())){u=s.cx
t=[P.K]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.K])},
bE:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.c1()
t.d.I(0,new F.i2(s))
s=s.a
t.r=s.t(0,Math.sqrt(s.A(s)))
s=t.a
if(s!=null){s.X()
s=t.a.e
if(s!=null)s.ag(0)}return!0},
bC:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.c1()
t.d.I(0,new F.i1(s))
s=s.a
t.x=s.t(0,Math.sqrt(s.A(s)))
s=t.a
if(s!=null){s.X()
s=t.a.e
if(s!=null)s.ag(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
B:function(a){var u,t,s=this,r="-",q=H.b([],[P.t])
q.push(C.b.a7(J.a4(s.e),0))
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
J:function(){return this.B("")}}
F.i2.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.C(0,t)}}}
F.i1.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.C(0,t)}}}
F.hT.prototype={
q:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.f(u,r)
u[r].e=s;++s}this.b=!1}},
l:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.o("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.X()
return!0},
b2:function(a,b,c,d,e,f){var u=F.hS(a,null,b,c,null,d,e,f,0)
this.l(0,u)
return u},
gj:function(a){return this.c.length},
al:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)u[s].bE()
return!0},
bD:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)u[s].bC()
return!0},
fg:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.t(0,Math.sqrt(p*p+o*o+n*n))
if(!J.F(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.w(null)}}}}return!0},
i:function(a){return this.J()},
B:function(a){var u,t,s,r
this.q()
u=H.b([],[P.t])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r)u.push(t[r].B(a))
return C.a.p(u,"\n")},
J:function(){return this.B("")}}
F.hU.prototype={
gj:function(a){return this.b.length+this.c.length+this.d.length},
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
I:function(a,b){var u=this
C.a.I(u.b,b)
C.a.I(u.c,new F.hV(u,b))
C.a.I(u.d,new F.hW(u,b))},
i:function(a){return this.J()},
J:function(){var u,t,s,r=H.b([],[P.t])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].B(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].B(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].B(""))
return C.a.p(r,"\n")}}
F.hV.prototype={
$1:function(a){if(!J.F(a.a,this.a))this.b.$1(a)}}
F.hW.prototype={
$1:function(a){var u=this.a
if(!J.F(a.a,u)&&!J.F(a.b,u))this.b.$1(a)}}
F.hX.prototype={
gj:function(a){return this.b.length+this.c.length},
h:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.f(t,u)
return t[u]}else{if(b<0)return H.f(t,b)
return t[b]}},
i:function(a){return this.J()},
J:function(){var u,t,s,r=H.b([],[P.t])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].B(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].B(""))
return C.a.p(r,"\n")}}
F.hZ.prototype={}
F.hY.prototype={
aQ:function(a,b,c){return J.F(b.f,c.f)}}
F.i_.prototype={}
F.fJ.prototype={
bY:function(a){var u,t,s,r,q,p,o,n,m=V.c1()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null)m=new V.y(m.a+s.a,m.b+s.b,m.c+s.c)}m=m.t(0,Math.sqrt(m.A(m)))
for(u=a.length,s=m==null,t=0;t<a.length;a.length===u||(0,H.m)(a),++t){r=a[t]
if(s)q=null
else{p=m.a
o=m.b
n=m.c
q=m.t(0,Math.sqrt(p*p+o*o+n*n))}if(!J.F(r.r,q)){r.r=q
p=r.a
if(p!=null){p=p.e
if(p!=null)p.w(null)}}}return}}
F.i0.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.J()},
J:function(){var u,t,s,r=H.b([],[P.t])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].B(""))
return C.a.p(r,"\n")}}
O.cL.prototype={
gm:function(){var u=this.fr
return u==null?this.fr=D.A():u},
V:function(a){var u=this.fr
if(u!=null)u.w(a)},
bt:function(){return this.V(null)},
cA:function(a){this.a=null
this.V(a)},
eX:function(){return this.cA(null)},
e3:function(a,b){var u=new D.aQ()
u.b=!0
this.V(u)},
e5:function(a,b){var u=new D.aR()
u.b=!0
this.V(u)},
cp:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=P.u
f=[f,f]
u=new H.H(f)
for(t=g.dx.e,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){q=t[r]
p=q.gaf()
o=u.h(0,q.gaf())
u.k(0,p,o==null?1:o)}n=H.b([],[A.cn])
u.I(0,new O.fo(g,n))
C.a.aF(n,new O.fp())
m=new H.H(f)
for(t=g.dx.f,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){p=m.h(0,0)
m.k(0,0,p==null?1:p)}l=H.b([],[A.cv])
m.I(0,new O.fq(g,l))
C.a.aF(l,new O.fr())
k=new H.H(f)
for(t=g.dx.r,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){q=t[r]
p=q.gaf()
o=k.h(0,q.gaf())
k.k(0,p,o==null?1:o)}j=H.b([],[A.cU])
k.I(0,new O.fs(g,j))
C.a.aF(j,new O.ft())
i=new H.H(f)
for(f=g.dx.x,t=f.length,r=0;r<f.length;f.length===t||(0,H.m)(f),++r){q=f[r]
s=q.gaf()
p=i.h(0,q.gaf())
i.k(0,s,p==null?1:p)}h=H.b([],[A.d0])
i.I(0,new O.fu(g,h))
C.a.aF(h,new O.fv())
f=C.c.Z(g.e.a.length+3,4)
g.dy.e
return A.kR(!1,!1,!1,!1,f*4,g.f.c,g.r.c,g.x.c,g.y.c,g.z.c,g.Q.c,g.cx.c,g.cy.c,g.db.c,n,l,j,h)},
dG:function(a,b){if(b!=null)if(!C.a.N(a,b)){b.a=a.length
a.push(b)}},
aa:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.W(u,u.length);u.u();){t=u.d
t.toString
s=$.hR
if(s==null)s=$.hR=new V.y(0,0,1)
t.a=s
r=$.hQ
t.d=r==null?$.hQ=new V.y(0,1,0):r
r=$.hP
t.e=r==null?$.hP=new V.y(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.ba(s)
r=s.a
p=s.b
o=s.c
t.a=s.t(0,Math.sqrt(r*r+p*p+o*o))
o=q.ba(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.t(0,Math.sqrt(p*p+r*r+s*s))
s=q.ba(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.t(0,Math.sqrt(r*r+p*p+o*o))}}}},
dc:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=b0.a
if(b1==null){b1=b0.cp()
u=b2.fr.h(0,b1.aO)
if(u==null){u=A.kQ(b1,b2.a)
b2.cK(u)}b1=b0.a=u
b3.e=null}t=b1.z
s=t.b4
b1=b3.e
if(!(b1 instanceof Z.bB))b1=b3.e=null
if(b1==null||!b1.d.n(0,s)){b1=t.k4
if(b1)b3.d.al()
r=t.r1
if(r){q=b3.d
p=q.e
if(p!=null)++p.d
q.d.bD()
q.a.bD()
q=q.e
if(q!=null)q.ag(0)}q=t.rx
if(q){p=b3.d
o=p.e
if(o!=null)++o.d
p.a.fg()
p=p.e
if(p!=null)p.ag(0)}n=b3.d.cQ(new Z.dj(b2.a),s)
n.am($.ab()).e=b0.a.Q.c
if(b1)n.am($.aL()).e=b0.a.cx.c
if(r)n.am($.aK()).e=b0.a.ch.c
if(t.r2)n.am($.b7()).e=b0.a.cy.c
if(q)n.am($.b8()).e=b0.a.db.c
if(t.ry)n.am($.aJ()).e=b0.a.dx.c
b3.e=n}m=H.b([],[T.d5])
b0.a.U(b2)
if(t.fr){b1=b0.a
r=b2.dx
r=r.gW(r)
b1=b1.dy
b1.toString
b1.a5(r.a1(0,!0))}if(t.fx){b1=b0.a
r=b2.cx
if(r==null){r=b2.db
r=r.gW(r)
q=b2.dx
q=b2.cx=r.v(0,q.gW(q))
r=q}b1=b1.fr
b1.toString
b1.a5(r.a1(0,!0))}b1=b0.a
r=b2.ch
if(r==null){r=b2.gfU()
q=b2.dx
q=b2.ch=r.v(0,q.gW(q))
r=q}b1=b1.fy
b1.toString
b1.a5(r.a1(0,!0))
if(t.go){b1=b0.a
r=b2.db
r=r.gW(r)
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
b1.a5(C.i.a1(r,!0))}if(t.b3>0){l=b0.e.a.length
b1=b0.a.k4
b1.a.uniform1i(b1.d,l)
for(k=0;k<l;++k){b1=b0.a
r=b0.e.a
if(k>=r.length)return H.f(r,k)
r=r[k]
b1=b1.r1
if(k>=b1.length)return H.f(b1,k)
b1=b1[k]
j=new Float32Array(H.cd(r.a1(0,!0)))
b1.a.uniformMatrix4fv(b1.d,!1,j)}}if(t.a.a){b1=b0.a
r=b0.f.f
b1=b1.r2
b1.a.uniform3f(b1.d,r.a,r.b,r.c)}if(t.k1){if(t.b.a){b1=b0.a
r=b0.r.f
b1=b1.x1
b1.a.uniform3f(b1.d,r.a,r.b,r.c)}if(t.c.a){b1=b0.a
r=b0.x.f
b1=b1.y2
b1.a.uniform3f(b1.d,r.a,r.b,r.c)}if(t.d.a){b1=b0.a
r=b0.y.f
b1=b1.b4
b1.a.uniform3f(b1.d,r.a,r.b,r.c)}b1=t.e.a
if(!b1)r=!1
else r=!0
if(r){r=b0.a
q=b0.z.ch
r=r.cY
r.a.uniform1f(r.d,q)}if(b1){b1=b0.a
r=b0.z.f
b1=b1.cX
b1.a.uniform3f(b1.d,r.a,r.b,r.c)}b1=t.z
if(b1.length>0){r=P.u
i=new H.H([r,r])
for(r=b0.dx.e,q=r.length,h=0;h<r.length;r.length===q||(0,H.m)(r),++h){g=r[h]
f=g.gaf()
e=i.h(0,f)
if(e==null)e=0
i.k(0,f,e+1)
d=J.ck(b0.a.bK.h(0,f),e)
p=g.gh9()
o=$.ai
p=p.aW(o==null?$.ai=new V.O(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.ghe()
o=$.ai
p=p.aW(o==null?$.ai=new V.O(0,0,0):o)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gae(g)
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
if(g.gcW()){p=g.gcL()
o=d.e
o.a.uniform1f(o.d,p)
p=g.gcM()
o=d.f
o.a.uniform1f(o.d,p)
p=g.gcN()
o=d.r
o.a.uniform1f(o.d,p)}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.m)(b1),++h){q=b1[h].a
l=i.h(0,q)
if(l==null)l=0
q=b0.a.bJ.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.Q
if(b1.length>0){r=b2.db
c=r.gW(r)
r=P.u
b=new H.H([r,r])
for(r=b0.dx.f,q=r.length,h=0;h<r.length;r.length===q||(0,H.m)(r),++h){g=r[h]
e=b.h(0,0)
if(e==null)e=0
b.k(0,0,e+1)
d=J.ck(b0.a.bM.h(0,0),e)
p=c.ba(g.a)
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
q=b0.a.bL.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.ch
if(b1.length>0){r=b2.db
c=r.gW(r)
r=P.u
a1=new H.H([r,r])
for(r=b0.dx.r,q=r.length,h=0;h<r.length;r.length===q||(0,H.m)(r),++h){g=r[h]
f=g.gaf()
e=a1.h(0,f)
if(e==null)e=0
a1.k(0,f,e+1)
d=J.ck(b0.a.bO.h(0,f),e)
a2=c.v(0,g.gW(g))
p=g.gW(g)
o=$.ai
p=p.aW(o==null?$.ai=new V.O(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=$.ai
p=a2.aW(p==null?$.ai=new V.O(0,0,0):p)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gae(g)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
g.gaq()
p=a2.bS(0)
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
j=new Float32Array(H.cd(new V.cN(o,a,a0,a3,a4,a5,a6,a7,p).a1(0,!0)))
a8.a.uniformMatrix3fv(a8.d,!1,j)
g.gaq()
p=g.gaq()
if(!C.a.N(m,p)){p.a=m.length
m.push(p)}p=g.gaq()
o=p.gaP(p)
if(o){o=d.f
o.toString
a=p.d
if(a<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}g.gaE()
p=g.gdj()
o=d.x
o.toString
a=p.gfq(p)
a0=p.gfs(p)
a3=p.gft()
p=p.gfp()
o.a.uniform4f(o.d,a,a0,a3,p)
p=g.gaE()
if(!C.a.N(m,p)){p.a=m.length
m.push(p)}p=g.gaE()
o=p.gaP(p)
if(o){o=d.r
o.toString
a=p.d
if(a<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}if(g.gcW()){p=g.gcL()
o=d.y
o.a.uniform1f(o.d,p)
p=g.gcM()
o=d.z
o.a.uniform1f(o.d,p)
p=g.gcN()
o=d.Q
o.a.uniform1f(o.d,p)}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.m)(b1),++h){q=b1[h].a
l=a1.h(0,q)
if(l==null)l=0
q=b0.a.bN.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.cx
if(b1.length>0){r=b2.db
c=r.gW(r)
r=P.u
a9=new H.H([r,r])
for(r=b0.dx.x,q=r.length,h=0;h<r.length;r.length===q||(0,H.m)(r),++h){g=r[h]
f=g.gaf()
e=a9.h(0,f)
if(e==null)e=0
a9.k(0,f,e+1)
d=J.ck(b0.a.bQ.h(0,f),e)
p=g.gfT(g)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.ghc(g).hu()
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=c.aW(g.gfT(g))
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gae(g)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
g.gaq()
p=g.gc6()
o=d.f
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gc5(g)
o=d.r
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.ghv()
o=d.x
o.a.uniform1f(o.d,p)
p=g.ghw()
o=d.y
o.a.uniform1f(o.d,p)
g.gaq()
p=g.gaq()
if(!C.a.N(m,p)){p.a=m.length
m.push(p)}p=g.gaq()
o=p.gaP(p)
if(o){o=d.dx
o.toString
a=p.gaP(p)
if(!a)o.a.uniform1i(o.d,0)
else{p=p.gfB(p)
o.a.uniform1i(o.d,p)}}g.gaE()
p=g.gdj()
o=d.z
o.toString
a=p.gfq(p)
a0=p.gfs(p)
a3=p.gft()
p=p.gfp()
o.a.uniform4f(o.d,a,a0,a3,p)
p=g.gaE()
if(!C.a.N(m,p)){p.a=m.length
m.push(p)}p=g.gaE()
o=p.gaP(p)
if(o){o=d.dy
o.toString
a=p.gaP(p)
if(!a)o.a.uniform1i(o.d,0)
else{p=p.gfB(p)
o.a.uniform1i(o.d,p)}}if(g.ghd()){p=g.ghb()
o=d.Q
o.a.uniform1f(o.d,p)
p=g.gha()
o=d.ch
o.a.uniform1f(o.d,p)}if(g.gcW()){p=g.gcL()
o=d.cx
o.a.uniform1f(o.d,p)
p=g.gcM()
o=d.cy
o.a.uniform1f(o.d,p)
p=g.gcN()
o=d.db
o.a.uniform1f(o.d,p)}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.m)(b1),++h){q=b1[h].a
l=a9.h(0,q)
if(l==null)l=0
q=b0.a.bP.h(0,q)
q.a.uniform1i(q.d,l)}}}if(t.dy){b1=b0.a
r=b2.Q
if(r==null){r=b2.db
r=b2.Q=r.gW(r).bS(0)}b1=b1.id
b1.toString
b1.a5(r.a1(0,!0))}if(t.db){b0.dG(m,b0.ch)
b1=b0.a
r=b0.ch
b1.eZ(b1.cZ,r)
if(t.r.a){b1=b0.a
r=b0.cx.f
b1=b1.d_
b1.a.uniform3f(b1.d,r.a,r.b,r.c)}b1=t.x.a
if(!b1)r=!1
else r=!0
if(r){r=b0.a
q=b0.cy.ch
r=r.d0
r.a.uniform1f(r.d,q)}if(b1){b1=b0.a
r=b0.cy.f
b1=b1.d1
b1.a.uniform3f(b1.d,r.a,r.b,r.c)}}b1=t.y.a
r=!b1
if(r)q=!1
else q=!0
if(q){if(b1){b1=b0.a
q=b0.db.f
b1=b1.d2
b1.a.uniform1f(b1.d,q)}b1=b2.a
b1.enable(3042)
b1.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].U(b2)
b1=b3.e
b1.U(b2)
b1.a4(b2)
b1.ar(b2)
if(r)b1=!1
else b1=!0
if(b1)b2.a.disable(3042)
for(b1=b2.a,k=0;k<m.length;++k){r=m[k]
if(r.c){r.c=!1
b1.activeTexture(33984+r.a)
b1.bindTexture(34067,null)}}r=b0.a
r.toString
b1.useProgram(null)
r.x.cU()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cp().aO}}
O.fo.prototype={
$2:function(a,b){if(typeof b!=="number")return b.C()
return this.b.push(new A.cn(a,C.c.Z(b+3,4)*4))}}
O.fp.prototype={
$2:function(a,b){return J.cl(a.a,b.a)}}
O.fq.prototype={
$2:function(a,b){if(typeof b!=="number")return b.C()
return this.b.push(new A.cv(a,C.c.Z(b+3,4)*4))}}
O.fr.prototype={
$2:function(a,b){return J.cl(a.a,b.a)}}
O.fs.prototype={
$2:function(a,b){if(typeof b!=="number")return b.C()
return this.b.push(new A.cU(a,C.c.Z(b+3,4)*4))}}
O.ft.prototype={
$2:function(a,b){return J.cl(a.a,b.a)}}
O.fu.prototype={
$2:function(a,b){if(typeof b!=="number")return b.C()
return this.b.push(new A.d0(a,C.c.Z(b+3,4)*4))}}
O.fv.prototype={
$2:function(a,b){return J.cl(a.a,b.a)}}
O.fi.prototype={
aj:function(){var u,t=this
t.ce()
u=t.f
if(!(Math.abs(u-1)<$.z().a)){t.f=1
u=new D.x(t.b,u,1)
u.b=!0
t.a.V(u)}}}
O.cM.prototype={
aj:function(){},
bx:function(a){var u,t,s=this
if(!s.c.n(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.aj()
u=s.a
u.a=null
u.V(null)}}}
O.fj.prototype={}
O.af.prototype={
cC:function(a){var u,t,s=this
if(!s.f.n(0,a)){u=s.f
s.f=a
t=new D.x(s.b+".color",u,a)
t.b=!0
s.a.V(t)}},
aj:function(){this.ce()
this.cC(new V.N(1,1,1))},
sae:function(a,b){this.bx(new A.R(!0,!1,!1))
this.cC(b)}}
O.fl.prototype={}
O.fm.prototype={
cD:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.z().a)){u.ch=a
t=new D.x(u.b+".refraction",t,a)
t.b=!0
u.a.V(t)}},
aj:function(){this.cf()
this.cD(1)}}
O.fn.prototype={
cE:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.z().a)){u.ch=a
t=new D.x(u.b+".shininess",t,a)
t.b=!0
u.a.V(t)}},
aj:function(){this.cf()
this.cE(100)}}
O.cZ.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.A():u},
V:function(a){var u=this.e
if(u!=null)u.w(a)},
bt:function(){return this.V(null)},
dc:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=a.fr.h(0,n)
if(u==null){t=a.a
u=new A.h9(t,n)
u.cg(t,n)
u.d3(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.h(0,"posAttr")
u.Q=H.l(u.y.h(0,"fov"),"$iL")
u.ch=H.l(u.y.h(0,"ratio"),"$iL")
u.cx=H.l(u.y.h(0,"boxClr"),"$iB")
u.cy=H.l(u.y.h(0,"boxTxt"),"$ib0")
u.db=H.l(u.y.h(0,"viewMat"),"$ia_")
a.cK(u)}o.a=u}if(b.e==null){t=b.d.cQ(new Z.dj(a.a),$.ab())
t.am($.ab()).e=o.a.z.c
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
r.cy.ca(s)
s=o.d
t=r.cx
t.a.uniform3f(t.d,s.a,s.b,s.c)
s=a.db
s=s.gW(s).bS(0)
r=r.db
r.toString
r.a5(s.a1(0,!0))
t=b.e
if(t instanceof Z.bB){t.U(a)
t.a4(a)
t.ar(a)}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.cU()
t=o.c
if(t!=null)t.ar(a)}}
O.d4.prototype={}
T.d5.prototype={}
T.ho.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.A():u},
U:function(a){var u,t=this
if(!t.c&&t.d>=6){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(34067,t.b)}},
ar:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(34067,null)}}}
T.hp.prototype={
ax:function(a,b,c,d,e,f){var u=document.createElement("img")
u.src=c;++this.d
W.P(u,"load",new T.hq(this,u,!1,b,!1,d,a),!1)},
eY:function(a,b,c){var u,t,s,r
b=V.jn(b)
u=V.jn(a.width)
t=V.jn(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.iX()
s.width=u
s.height=t
r=C.f.dg(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.m0(r.getImageData(0,0,s.width,s.height))}}}
T.hq.prototype={
$1:function(a){var u=this,t=u.a,s=t.eY(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.M.h1(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.fu()}++t.e}}
X.iW.prototype={}
X.eY.prototype={
gm:function(){var u=this.x
return u==null?this.x=D.A():u},
ac:function(a){var u=this.x
if(u!=null)u.w(a)},
scR:function(a,b){var u
if(this.b){this.b=!1
u=new D.x("clearColor",!0,!1)
u.b=!0
this.ac(u)}},
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
q=C.d.a9(r*u)
r=s.b
if(typeof t!=="number")return H.r(t)
p=C.d.a9(r*t)
r=C.d.a9(s.c*u)
a.c=r
s=C.d.a9(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)}}
X.f_.prototype={
gm:function(){var u=this.b
return u==null?this.b=D.A():u},
U:function(a){var u
a.cy.b8(V.bl())
u=V.bl()
a.db.b8(u)},
ar:function(a){a.cy.ap()
a.db.ap()}}
X.cT.prototype={
gm:function(){var u=this.f
return u==null?this.f=D.A():u},
ac:function(a){var u=this.f
if(u!=null)u.w(a)},
dD:function(){return this.ac(null)},
U:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.ag(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.b8(k)
r=$.jF
if(r==null){r=V.jH()
q=V.jd()
p=$.jT
r=V.jB(r,q,p==null?$.jT=new V.y(0,0,-1):p)
$.jF=r
u=r}else u=r
r=s.b
if(r!=null){t=r.aC(0,a,s)
if(t!=null)u=t.v(0,u)}a.db.b8(u)},
ar:function(a){a.cy.ap()
a.db.ap()}}
X.hk.prototype={}
V.iN.prototype={
$1:function(a){var u=C.d.de(this.a.gfA(),2)
if(u!=="0.00")P.jo(u+" fps")}}
V.h5.prototype={
dv:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.P(q,"scroll",new V.h7(o),!1)},
cJ:function(a){var u,t,s,r,q,p,o,n
this.f1()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b,r=C.a.fD(a),s.toString,r=new H.M(r),r=new P.c9(s.df(new H.bL(r,r.gj(r))).a());r.u();){s=r.gG(r)
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
if(H.k9(s,"|",0)){p=s.split("|")
o=u.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.f(p,1)
o.href=p[1]
o.textContent=p[0]
t.appendChild(o)}else{n=P.ln(C.I,s,C.o,!1)
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
fa:function(a){var u,t,s,r,q,p="auto",o=document,n=o.createElement("table")
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
f1:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new L.ht()
t=P.t
u.a=new H.H([t,L.d2])
u.b=new H.H([t,L.d9])
u.c=P.jz(t)
u.d=u.K(0,q)
t=u.K(0,q).p(0,p)
s=K.T(new H.M("*"))
t.a.push(s)
t.c=!0
t=u.K(0,p).p(0,p)
s=new K.aw()
r=[K.cK]
s.a=H.b([],r)
t.a.push(s)
t=K.T(new H.M("*"))
s.a.push(t)
t=u.K(0,p).p(0,"BoldEnd")
s=K.T(new H.M("*"))
t.a.push(s)
t.c=!0
t=u.K(0,q).p(0,o)
s=K.T(new H.M("_"))
t.a.push(s)
t.c=!0
t=u.K(0,o).p(0,o)
s=new K.aw()
s.a=H.b([],r)
t.a.push(s)
t=K.T(new H.M("_"))
s.a.push(t)
t=u.K(0,o).p(0,n)
s=K.T(new H.M("_"))
t.a.push(s)
t.c=!0
t=u.K(0,q).p(0,m)
s=K.T(new H.M("`"))
t.a.push(s)
t.c=!0
t=u.K(0,m).p(0,m)
s=new K.aw()
s.a=H.b([],r)
t.a.push(s)
t=K.T(new H.M("`"))
s.a.push(t)
t=u.K(0,m).p(0,"CodeEnd")
s=K.T(new H.M("`"))
t.a.push(s)
t.c=!0
t=u.K(0,q).p(0,l)
s=K.T(new H.M("["))
t.a.push(s)
t.c=!0
t=u.K(0,l).p(0,k)
s=K.T(new H.M("|"))
t.a.push(s)
s=u.K(0,l).p(0,j)
t=K.T(new H.M("]"))
s.a.push(t)
s.c=!0
s=u.K(0,l).p(0,l)
t=new K.aw()
t.a=H.b([],r)
s.a.push(t)
s=K.T(new H.M("|]"))
t.a.push(s)
s=u.K(0,k).p(0,j)
t=K.T(new H.M("]"))
s.a.push(t)
s.c=!0
s=u.K(0,k).p(0,k)
t=new K.aw()
t.a=H.b([],r)
s.a.push(t)
s=K.T(new H.M("|]"))
t.a.push(s)
u.K(0,q).p(0,i).a.push(new K.eh())
s=u.K(0,i).p(0,i)
t=new K.aw()
t.a=H.b([],r)
s.a.push(t)
s=K.T(new H.M("*_`["))
t.a.push(s)
s=u.K(0,"BoldEnd")
s.d=s.a.aV(p)
s=u.K(0,n)
s.d=s.a.aV(o)
s=u.K(0,"CodeEnd")
s.d=s.a.aV(m)
s=u.K(0,j)
s.d=s.a.aV("Link")
s=u.K(0,i)
s.d=s.a.aV(i)
this.b=u}}
V.h7.prototype={
$1:function(a){P.jO(C.h,new V.h6(this.a))}}
V.h6.prototype={
$0:function(){var u=C.d.a9(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
O.iL.prototype={
$1:function(a){this.a.b.webkitRequestFullscreen()
return}};(function aliases(){var u=J.a.prototype
u.dn=u.i
u=J.cF.prototype
u.dq=u.i
u=K.cB.prototype
u.dm=u.aB
u.cd=u.i
u=O.cM.prototype
u.ce=u.aj
u=O.af.prototype
u.cf=u.aj})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(J,"lq","kJ",19)
t(P,"lV","le",6)
t(P,"lW","lf",6)
t(P,"lX","lg",6)
s(P,"k1","lT",9)
var m
r(m=E.aq.prototype,"gd9",0,0,null,["$1","$0"],["da","fL"],0,0)
r(m,"gd7",0,0,null,["$1","$0"],["d8","fI"],0,0)
q(m,"gfG","fH",3)
q(m,"gfJ","fK",3)
r(m=E.d6.prototype,"gcj",0,0,null,["$1","$0"],["cl","ck"],0,0)
p(m,"gfY","dd",9)
o(m=X.de.prototype,"gei","ej",4)
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
r(D.be.prototype,"gdw",0,0,null,["$1","$0"],["ah","dz"],0,0)
r(m=D.cH.prototype,"gcv",0,0,null,["$1","$0"],["cw","eo"],0,0)
o(m,"geB","eC",18)
q(m,"ge0","e1",11)
q(m,"geF","eG",11)
n(V.D.prototype,"gj","bU",12)
n(V.y.prototype,"gj","bU",12)
r(m=U.bG.prototype,"gav",0,0,null,["$1","$0"],["L","a0"],0,0)
q(m,"gdZ","e_",13)
q(m,"geD","eE",13)
r(m=U.df.prototype,"gav",0,0,null,["$1","$0"],["L","a0"],0,0)
o(m,"gbk","bl",1)
o(m,"gbm","bn",1)
o(m,"gbo","bp",1)
r(m=U.dg.prototype,"gav",0,0,null,["$1","$0"],["L","a0"],0,0)
o(m,"gbk","bl",1)
o(m,"gbm","bn",1)
o(m,"gbo","bp",1)
o(m,"gdT","dU",1)
o(m,"gdV","dW",1)
o(m,"gf8","f9",1)
o(m,"gf6","f7",1)
o(m,"gf4","f5",1)
o(U.dh.prototype,"gdX","dY",1)
r(m=M.cr.prototype,"gS",0,0,null,["$1","$0"],["T","aG"],0,0)
q(m,"geH","eI",14)
q(m,"geJ","eK",14)
r(M.ct.prototype,"gS",0,0,null,["$1","$0"],["T","aG"],0,0)
r(m=M.cy.prototype,"gS",0,0,null,["$1","$0"],["T","aG"],0,0)
q(m,"ge8","e9",3)
q(m,"gea","eb",3)
r(m=O.cL.prototype,"gbs",0,0,null,["$1","$0"],["V","bt"],0,0)
r(m,"geW",0,0,null,["$1","$0"],["cA","eX"],0,0)
q(m,"ge2","e3",15)
q(m,"ge4","e5",15)
r(O.cZ.prototype,"gbs",0,0,null,["$1","$0"],["V","bt"],0,0)
r(X.cT.prototype,"gdC",0,0,null,["$1","$0"],["ac","dD"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.Z,null)
s(P.Z,[H.j5,J.a,J.W,P.dC,P.i,H.bL,P.f2,H.cz,H.hK,H.hy,P.bf,H.bC,H.dT,P.Y,H.fa,H.fb,H.f4,P.dZ,P.br,P.c9,P.dk,P.d3,P.hi,P.d7,P.ix,P.iq,P.ik,P.dB,P.q,P.eu,P.iw,P.b5,P.a6,P.a3,P.aN,P.fN,P.d1,P.du,P.eX,P.aV,P.bM,P.aW,P.t,P.aD,W.eA,W.I,W.cA,P.e3,P.il,K.eh,K.cB,K.cK,K.h0,L.d2,L.d8,L.d9,L.ht,O.ao,O.bO,E.eq,E.aq,E.bc,E.bm,E.dt,E.fT,E.d6,Z.di,Z.dj,Z.bB,Z.bh,Z.b2,D.et,D.bg,D.Q,X.cq,X.cG,X.f7,X.fe,X.a7,X.fC,X.hu,X.de,D.ep,D.be,D.X,D.fQ,D.hc,V.N,V.ap,V.eN,V.cN,V.at,V.V,V.O,V.az,V.cW,V.D,V.y,U.df,U.dg,U.dh,M.ct,M.cy,M.a9,A.cm,A.ek,A.R,A.cn,A.cv,A.cU,A.d0,A.fk,A.bW,A.bX,A.bZ,A.c_,A.dc,A.hG,F.aO,F.eQ,F.bK,F.f9,F.bS,F.h1,F.h2,F.h3,F.h4,F.b1,F.hT,F.hU,F.hX,F.hZ,F.i_,F.i0,O.d4,O.cM,O.fl,T.hp,X.iW,X.hk,X.f_,X.cT,V.h5])
s(J.a,[J.f3,J.cE,J.cF,J.aS,J.bJ,J.bi,H.bR,W.d,W.eg,W.co,W.ae,W.G,W.dm,W.a5,W.eE,W.eF,W.dp,W.cx,W.dr,W.eH,W.h,W.dv,W.as,W.eZ,W.dx,W.aP,W.fd,W.fw,W.dD,W.dE,W.au,W.dF,W.dI,W.ax,W.dM,W.dO,W.aB,W.dP,W.aC,W.dU,W.ak,W.dX,W.hs,W.aF,W.e_,W.hw,W.hM,W.e4,W.e6,W.e8,W.ea,W.ec,P.aU,P.dz,P.aX,P.dK,P.fS,P.dV,P.aY,P.e1,P.el,P.dl,P.cX,P.dR])
s(J.cF,[J.fO,J.c0,J.aT])
t(J.j4,J.aS)
s(J.bJ,[J.cD,J.cC])
t(P.fc,P.dC)
s(P.fc,[H.dd,W.ib,W.ia,P.eT])
t(H.M,H.dd)
s(P.i,[H.n,H.bN,H.i4,P.f1])
t(H.eK,H.bN)
s(P.f2,[H.cJ,H.i5])
s(P.bf,[H.fK,H.f6,H.hJ,H.es,H.fZ,P.cS,P.ac,P.hL,P.hI,P.he,P.ex,P.eD])
s(H.bC,[H.iR,H.hl,H.f5,H.iH,H.iI,H.iJ,P.i7,P.i6,P.i8,P.i9,P.iv,P.iu,P.iC,P.io,P.ip,P.fg,P.eI,P.eJ,W.fy,W.fA,W.fY,W.hh,W.ie,P.iD,P.eU,P.eV,P.en,E.fU,E.fV,E.fW,E.hr,D.eO,D.eP,F.iy,F.iO,F.iP,F.i2,F.i1,F.hV,F.hW,O.fo,O.fp,O.fq,O.fr,O.fs,O.ft,O.fu,O.fv,T.hq,V.iN,V.h7,V.h6,O.iL])
s(H.hl,[H.hf,H.bz])
t(P.ff,P.Y)
t(H.H,P.ff)
t(H.bk,H.n)
t(H.cO,H.bR)
s(H.cO,[H.c3,H.c5])
t(H.c4,H.c3)
t(H.bQ,H.c4)
t(H.c6,H.c5)
t(H.cP,H.c6)
s(H.cP,[H.fD,H.fE,H.fF,H.fG,H.fH,H.cQ,H.fI])
t(P.it,P.f1)
t(P.im,P.ix)
t(P.ij,P.iq)
t(P.ey,P.hi)
t(P.eL,P.eu)
t(P.hN,P.eL)
t(P.hO,P.ey)
s(P.a3,[P.K,P.u])
s(P.ac,[P.bo,P.f0])
s(W.d,[W.C,W.eS,W.aA,W.c7,W.aE,W.al,W.ca,W.i3,W.c2,P.eo,P.bb])
s(W.C,[W.S,W.aM])
s(W.S,[W.k,P.j])
s(W.k,[W.ei,W.ej,W.bd,W.eW,W.bI,W.h_])
t(W.ez,W.ae)
t(W.bE,W.dm)
s(W.a5,[W.eB,W.eC])
t(W.dq,W.dp)
t(W.cw,W.dq)
t(W.ds,W.dr)
t(W.eG,W.ds)
t(W.ar,W.co)
t(W.dw,W.dv)
t(W.eR,W.dw)
t(W.dy,W.dx)
t(W.bH,W.dy)
t(W.aZ,W.h)
s(W.aZ,[W.bj,W.ah,W.bp])
t(W.fx,W.dD)
t(W.fz,W.dE)
t(W.dG,W.dF)
t(W.fB,W.dG)
t(W.dJ,W.dI)
t(W.cR,W.dJ)
t(W.dN,W.dM)
t(W.fP,W.dN)
t(W.fX,W.dO)
t(W.c8,W.c7)
t(W.ha,W.c8)
t(W.dQ,W.dP)
t(W.hb,W.dQ)
t(W.hg,W.dU)
t(W.dY,W.dX)
t(W.hm,W.dY)
t(W.cb,W.ca)
t(W.hn,W.cb)
t(W.e0,W.e_)
t(W.hv,W.e0)
t(W.b3,W.ah)
t(W.e5,W.e4)
t(W.ic,W.e5)
t(W.dn,W.cx)
t(W.e7,W.e6)
t(W.ig,W.e7)
t(W.e9,W.e8)
t(W.dH,W.e9)
t(W.eb,W.ea)
t(W.ir,W.eb)
t(W.ed,W.ec)
t(W.is,W.ed)
t(W.id,P.d3)
t(P.a2,P.il)
t(P.dA,P.dz)
t(P.f8,P.dA)
t(P.dL,P.dK)
t(P.fL,P.dL)
t(P.dW,P.dV)
t(P.hj,P.dW)
t(P.e2,P.e1)
t(P.hx,P.e2)
t(P.em,P.dl)
t(P.fM,P.bb)
t(P.dS,P.dR)
t(P.hd,P.dS)
s(K.cB,[K.aw,L.db])
s(E.eq,[Z.cp,A.cY,T.d5])
s(D.Q,[D.aQ,D.aR,D.x,X.fR])
s(X.fR,[X.cI,X.av,X.bP,X.da])
s(O.ao,[D.cH,U.bG,M.cr])
s(D.et,[U.ew,U.a1])
t(U.cs,U.a1)
s(A.cY,[A.fh,A.h9])
s(A.dc,[A.b_,A.hD,A.hE,A.hF,A.hB,A.L,A.hC,A.B,A.bV,A.hH,A.bY,A.a_,A.bq,A.b0])
t(F.h8,F.eQ)
t(F.hA,F.f9)
t(F.hY,F.hZ)
t(F.fJ,F.i_)
s(O.d4,[O.cL,O.cZ])
s(O.cM,[O.fi,O.fj,O.af])
s(O.af,[O.fm,O.fn])
t(T.ho,T.d5)
t(X.eY,X.hk)
u(H.dd,H.hK)
u(H.c3,P.q)
u(H.c4,H.cz)
u(H.c5,P.q)
u(H.c6,H.cz)
u(P.dC,P.q)
u(W.dm,W.eA)
u(W.dp,P.q)
u(W.dq,W.I)
u(W.dr,P.q)
u(W.ds,W.I)
u(W.dv,P.q)
u(W.dw,W.I)
u(W.dx,P.q)
u(W.dy,W.I)
u(W.dD,P.Y)
u(W.dE,P.Y)
u(W.dF,P.q)
u(W.dG,W.I)
u(W.dI,P.q)
u(W.dJ,W.I)
u(W.dM,P.q)
u(W.dN,W.I)
u(W.dO,P.Y)
u(W.c7,P.q)
u(W.c8,W.I)
u(W.dP,P.q)
u(W.dQ,W.I)
u(W.dU,P.Y)
u(W.dX,P.q)
u(W.dY,W.I)
u(W.ca,P.q)
u(W.cb,W.I)
u(W.e_,P.q)
u(W.e0,W.I)
u(W.e4,P.q)
u(W.e5,W.I)
u(W.e6,P.q)
u(W.e7,W.I)
u(W.e8,P.q)
u(W.e9,W.I)
u(W.ea,P.q)
u(W.eb,W.I)
u(W.ec,P.q)
u(W.ed,W.I)
u(P.dz,P.q)
u(P.dA,W.I)
u(P.dK,P.q)
u(P.dL,W.I)
u(P.dV,P.q)
u(P.dW,W.I)
u(P.e1,P.q)
u(P.e2,W.I)
u(P.dl,P.Y)
u(P.dR,P.q)
u(P.dS,W.I)})()
var v={mangledGlobalNames:{u:"int",K:"double",a3:"num",t:"String",b5:"bool",aW:"Null",aV:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.Q]},{func:1,ret:-1,args:[D.Q]},{func:1,ret:-1,args:[W.ah]},{func:1,ret:-1,args:[P.u,[P.i,E.aq]]},{func:1,ret:-1,args:[W.h]},{func:1,ret:-1,args:[W.bp]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.aW,args:[,,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bj]},{func:1,ret:-1,args:[P.u,[P.i,D.X]]},{func:1,ret:P.K},{func:1,ret:-1,args:[P.u,[P.i,U.a1]]},{func:1,ret:-1,args:[P.u,[P.i,M.a9]]},{func:1,ret:-1,args:[P.u,[P.i,V.at]]},{func:1,ret:P.aW,args:[,]},{func:1,ret:-1,args:[W.b3]},{func:1,ret:P.b5,args:[[P.i,D.X]]},{func:1,ret:P.u,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.f=W.bd.prototype
C.F=J.a.prototype
C.a=J.aS.prototype
C.G=J.cC.prototype
C.c=J.cD.prototype
C.i=J.cE.prototype
C.d=J.bJ.prototype
C.b=J.bi.prototype
C.H=J.aT.prototype
C.q=J.fO.prototype
C.M=P.cX.prototype
C.j=J.c0.prototype
C.r=W.b3.prototype
C.t=W.c2.prototype
C.u=new E.bc("Browser.chrome")
C.k=new E.bc("Browser.firefox")
C.l=new E.bc("Browser.edge")
C.v=new E.bc("Browser.other")
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

C.C=new P.fN()
C.o=new P.hN()
C.D=new P.hO()
C.e=new P.im()
C.h=new P.aN(0)
C.E=new P.aN(5e6)
C.I=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.u])
C.J=new E.bm("OperatingSystem.windows")
C.p=new E.bm("OperatingSystem.mac")
C.K=new E.bm("OperatingSystem.linux")
C.L=new E.bm("OperatingSystem.other")
C.N=new P.br(null,2)})();(function staticFields(){$.ad=0
$.bA=null
$.jr=null
$.k4=null
$.k0=null
$.k7=null
$.iE=null
$.iK=null
$.jl=null
$.bs=null
$.ce=null
$.cf=null
$.jg=!1
$.aa=C.e
$.a0=[]
$.eM=null
$.jC=null
$.jG=null
$.ai=null
$.jL=null
$.jS=null
$.jU=null
$.hP=null
$.hQ=null
$.hR=null
$.jT=null
$.jF=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"ms","kd",function(){return H.k2("_$dart_dartClosure")})
u($,"mt","jp",function(){return H.k2("_$dart_js")})
u($,"mu","ke",function(){return H.am(H.hz({
toString:function(){return"$receiver$"}}))})
u($,"mv","kf",function(){return H.am(H.hz({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"mw","kg",function(){return H.am(H.hz(null))})
u($,"mx","kh",function(){return H.am(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mA","kk",function(){return H.am(H.hz(void 0))})
u($,"mB","kl",function(){return H.am(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mz","kj",function(){return H.am(H.jQ(null))})
u($,"my","ki",function(){return H.am(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"mD","kn",function(){return H.am(H.jQ(void 0))})
u($,"mC","km",function(){return H.am(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"mQ","jq",function(){return P.ld()})
u($,"mS","kr",function(){return P.l2("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"mK","kq",function(){return Z.a8(0)})
u($,"mE","ko",function(){return Z.a8(511)})
u($,"mM","ab",function(){return Z.a8(1)})
u($,"mL","aL",function(){return Z.a8(2)})
u($,"mG","aK",function(){return Z.a8(4)})
u($,"mN","b7",function(){return Z.a8(8)})
u($,"mO","b8",function(){return Z.a8(16)})
u($,"mH","ci",function(){return Z.a8(32)})
u($,"mI","cj",function(){return Z.a8(64)})
u($,"mJ","kp",function(){return Z.a8(96)})
u($,"mP","bx",function(){return Z.a8(128)})
u($,"mF","aJ",function(){return Z.a8(256)})
u($,"mr","kc",function(){return new V.eN(1e-9)})
u($,"mq","z",function(){return $.kc()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.bR,ArrayBufferView:H.bR,Float32Array:H.bQ,Float64Array:H.bQ,Int16Array:H.fD,Int32Array:H.fE,Int8Array:H.fF,Uint16Array:H.fG,Uint32Array:H.fH,Uint8ClampedArray:H.cQ,CanvasPixelArray:H.cQ,Uint8Array:H.fI,HTMLAudioElement:W.k,HTMLBRElement:W.k,HTMLBaseElement:W.k,HTMLBodyElement:W.k,HTMLButtonElement:W.k,HTMLContentElement:W.k,HTMLDListElement:W.k,HTMLDataElement:W.k,HTMLDataListElement:W.k,HTMLDetailsElement:W.k,HTMLDialogElement:W.k,HTMLDivElement:W.k,HTMLEmbedElement:W.k,HTMLFieldSetElement:W.k,HTMLHRElement:W.k,HTMLHeadElement:W.k,HTMLHeadingElement:W.k,HTMLHtmlElement:W.k,HTMLIFrameElement:W.k,HTMLInputElement:W.k,HTMLLIElement:W.k,HTMLLabelElement:W.k,HTMLLegendElement:W.k,HTMLLinkElement:W.k,HTMLMapElement:W.k,HTMLMediaElement:W.k,HTMLMenuElement:W.k,HTMLMetaElement:W.k,HTMLMeterElement:W.k,HTMLModElement:W.k,HTMLOListElement:W.k,HTMLObjectElement:W.k,HTMLOptGroupElement:W.k,HTMLOptionElement:W.k,HTMLOutputElement:W.k,HTMLParagraphElement:W.k,HTMLParamElement:W.k,HTMLPictureElement:W.k,HTMLPreElement:W.k,HTMLProgressElement:W.k,HTMLQuoteElement:W.k,HTMLScriptElement:W.k,HTMLShadowElement:W.k,HTMLSlotElement:W.k,HTMLSourceElement:W.k,HTMLSpanElement:W.k,HTMLStyleElement:W.k,HTMLTableCaptionElement:W.k,HTMLTableCellElement:W.k,HTMLTableDataCellElement:W.k,HTMLTableHeaderCellElement:W.k,HTMLTableColElement:W.k,HTMLTableElement:W.k,HTMLTableRowElement:W.k,HTMLTableSectionElement:W.k,HTMLTemplateElement:W.k,HTMLTextAreaElement:W.k,HTMLTimeElement:W.k,HTMLTitleElement:W.k,HTMLTrackElement:W.k,HTMLUListElement:W.k,HTMLUnknownElement:W.k,HTMLVideoElement:W.k,HTMLDirectoryElement:W.k,HTMLFontElement:W.k,HTMLFrameElement:W.k,HTMLFrameSetElement:W.k,HTMLMarqueeElement:W.k,HTMLElement:W.k,AccessibleNodeList:W.eg,HTMLAnchorElement:W.ei,HTMLAreaElement:W.ej,Blob:W.co,HTMLCanvasElement:W.bd,CDATASection:W.aM,CharacterData:W.aM,Comment:W.aM,ProcessingInstruction:W.aM,Text:W.aM,CSSPerspective:W.ez,CSSCharsetRule:W.G,CSSConditionRule:W.G,CSSFontFaceRule:W.G,CSSGroupingRule:W.G,CSSImportRule:W.G,CSSKeyframeRule:W.G,MozCSSKeyframeRule:W.G,WebKitCSSKeyframeRule:W.G,CSSKeyframesRule:W.G,MozCSSKeyframesRule:W.G,WebKitCSSKeyframesRule:W.G,CSSMediaRule:W.G,CSSNamespaceRule:W.G,CSSPageRule:W.G,CSSRule:W.G,CSSStyleRule:W.G,CSSSupportsRule:W.G,CSSViewportRule:W.G,CSSStyleDeclaration:W.bE,MSStyleCSSProperties:W.bE,CSS2Properties:W.bE,CSSImageValue:W.a5,CSSKeywordValue:W.a5,CSSNumericValue:W.a5,CSSPositionValue:W.a5,CSSResourceValue:W.a5,CSSUnitValue:W.a5,CSSURLImageValue:W.a5,CSSStyleValue:W.a5,CSSMatrixComponent:W.ae,CSSRotation:W.ae,CSSScale:W.ae,CSSSkew:W.ae,CSSTranslation:W.ae,CSSTransformComponent:W.ae,CSSTransformValue:W.eB,CSSUnparsedValue:W.eC,DataTransferItemList:W.eE,DOMException:W.eF,ClientRectList:W.cw,DOMRectList:W.cw,DOMRectReadOnly:W.cx,DOMStringList:W.eG,DOMTokenList:W.eH,Element:W.S,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.ar,FileList:W.eR,FileWriter:W.eS,HTMLFormElement:W.eW,Gamepad:W.as,History:W.eZ,HTMLCollection:W.bH,HTMLFormControlsCollection:W.bH,HTMLOptionsCollection:W.bH,ImageData:W.aP,HTMLImageElement:W.bI,KeyboardEvent:W.bj,Location:W.fd,MediaList:W.fw,MIDIInputMap:W.fx,MIDIOutputMap:W.fz,MimeType:W.au,MimeTypeArray:W.fB,PointerEvent:W.ah,MouseEvent:W.ah,DragEvent:W.ah,Document:W.C,DocumentFragment:W.C,HTMLDocument:W.C,ShadowRoot:W.C,XMLDocument:W.C,Attr:W.C,DocumentType:W.C,Node:W.C,NodeList:W.cR,RadioNodeList:W.cR,Plugin:W.ax,PluginArray:W.fP,RTCStatsReport:W.fX,HTMLSelectElement:W.h_,SourceBuffer:W.aA,SourceBufferList:W.ha,SpeechGrammar:W.aB,SpeechGrammarList:W.hb,SpeechRecognitionResult:W.aC,Storage:W.hg,CSSStyleSheet:W.ak,StyleSheet:W.ak,TextTrack:W.aE,TextTrackCue:W.al,VTTCue:W.al,TextTrackCueList:W.hm,TextTrackList:W.hn,TimeRanges:W.hs,Touch:W.aF,TouchEvent:W.bp,TouchList:W.hv,TrackDefaultList:W.hw,CompositionEvent:W.aZ,FocusEvent:W.aZ,TextEvent:W.aZ,UIEvent:W.aZ,URL:W.hM,VideoTrackList:W.i3,WheelEvent:W.b3,Window:W.c2,DOMWindow:W.c2,CSSRuleList:W.ic,ClientRect:W.dn,DOMRect:W.dn,GamepadList:W.ig,NamedNodeMap:W.dH,MozNamedAttrMap:W.dH,SpeechRecognitionResultList:W.ir,StyleSheetList:W.is,SVGLength:P.aU,SVGLengthList:P.f8,SVGNumber:P.aX,SVGNumberList:P.fL,SVGPointList:P.fS,SVGStringList:P.hj,SVGAElement:P.j,SVGAnimateElement:P.j,SVGAnimateMotionElement:P.j,SVGAnimateTransformElement:P.j,SVGAnimationElement:P.j,SVGCircleElement:P.j,SVGClipPathElement:P.j,SVGDefsElement:P.j,SVGDescElement:P.j,SVGDiscardElement:P.j,SVGEllipseElement:P.j,SVGFEBlendElement:P.j,SVGFEColorMatrixElement:P.j,SVGFEComponentTransferElement:P.j,SVGFECompositeElement:P.j,SVGFEConvolveMatrixElement:P.j,SVGFEDiffuseLightingElement:P.j,SVGFEDisplacementMapElement:P.j,SVGFEDistantLightElement:P.j,SVGFEFloodElement:P.j,SVGFEFuncAElement:P.j,SVGFEFuncBElement:P.j,SVGFEFuncGElement:P.j,SVGFEFuncRElement:P.j,SVGFEGaussianBlurElement:P.j,SVGFEImageElement:P.j,SVGFEMergeElement:P.j,SVGFEMergeNodeElement:P.j,SVGFEMorphologyElement:P.j,SVGFEOffsetElement:P.j,SVGFEPointLightElement:P.j,SVGFESpecularLightingElement:P.j,SVGFESpotLightElement:P.j,SVGFETileElement:P.j,SVGFETurbulenceElement:P.j,SVGFilterElement:P.j,SVGForeignObjectElement:P.j,SVGGElement:P.j,SVGGeometryElement:P.j,SVGGraphicsElement:P.j,SVGImageElement:P.j,SVGLineElement:P.j,SVGLinearGradientElement:P.j,SVGMarkerElement:P.j,SVGMaskElement:P.j,SVGMetadataElement:P.j,SVGPathElement:P.j,SVGPatternElement:P.j,SVGPolygonElement:P.j,SVGPolylineElement:P.j,SVGRadialGradientElement:P.j,SVGRectElement:P.j,SVGScriptElement:P.j,SVGSetElement:P.j,SVGStopElement:P.j,SVGStyleElement:P.j,SVGElement:P.j,SVGSVGElement:P.j,SVGSwitchElement:P.j,SVGSymbolElement:P.j,SVGTSpanElement:P.j,SVGTextContentElement:P.j,SVGTextElement:P.j,SVGTextPathElement:P.j,SVGTextPositioningElement:P.j,SVGTitleElement:P.j,SVGUseElement:P.j,SVGViewElement:P.j,SVGGradientElement:P.j,SVGComponentTransferFunctionElement:P.j,SVGFEDropShadowElement:P.j,SVGMPathElement:P.j,SVGTransform:P.aY,SVGTransformList:P.hx,AudioBuffer:P.el,AudioParamMap:P.em,AudioTrackList:P.eo,AudioContext:P.bb,webkitAudioContext:P.bb,BaseAudioContext:P.bb,OfflineAudioContext:P.fM,WebGL2RenderingContext:P.cX,SQLResultSetRowList:P.hd})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.cO.$nativeSuperclassTag="ArrayBufferView"
H.c3.$nativeSuperclassTag="ArrayBufferView"
H.c4.$nativeSuperclassTag="ArrayBufferView"
H.bQ.$nativeSuperclassTag="ArrayBufferView"
H.c5.$nativeSuperclassTag="ArrayBufferView"
H.c6.$nativeSuperclassTag="ArrayBufferView"
H.cP.$nativeSuperclassTag="ArrayBufferView"
W.c7.$nativeSuperclassTag="EventTarget"
W.c8.$nativeSuperclassTag="EventTarget"
W.ca.$nativeSuperclassTag="EventTarget"
W.cb.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(O.k5,[])
else O.k5([])})})()
//# sourceMappingURL=test.dart.js.map
