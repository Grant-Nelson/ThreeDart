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
a[c]=function(){a[c]=function(){H.ms(b)}
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
if(w[u][a])return w[u][a]}}var C={},H={j7:function j7(){},
jC:function(){return new P.hh("No element")},
cZ:function(a,b,c,d){if(c-b<=32)H.lf(a,b,c,d)
else H.le(a,b,c,d)},
lf:function(a,b,c,d){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.b(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.b(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.a4()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.b(a,q)
C.a.m(a,s,a[q])
s=q}C.a.m(a,s,t)}},
le:function(a2,a3,a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.d.a1(a4-a3+1,6),d=a3+e,c=a4-e,b=C.d.a1(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
if(d<0||d>=a1)return H.b(a2,d)
u=a2[d]
if(a<0||a>=a1)return H.b(a2,a)
t=a2[a]
if(b<0||b>=a1)return H.b(a2,b)
s=a2[b]
if(a0<0||a0>=a1)return H.b(a2,a0)
r=a2[a0]
if(c<0||c>=a1)return H.b(a2,c)
q=a2[c]
a1=a5.$2(u,t)
if(typeof a1!=="number")return a1.a4()
if(a1>0){p=t
t=u
u=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.a4()
if(a1>0){p=q
q=r
r=p}a1=a5.$2(u,s)
if(typeof a1!=="number")return a1.a4()
if(a1>0){p=s
s=u
u=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.a4()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(u,r)
if(typeof a1!=="number")return a1.a4()
if(a1>0){p=r
r=u
u=p}a1=a5.$2(s,r)
if(typeof a1!=="number")return a1.a4()
if(a1>0){p=r
r=s
s=p}a1=a5.$2(t,q)
if(typeof a1!=="number")return a1.a4()
if(a1>0){p=q
q=t
t=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.a4()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.a4()
if(a1>0){p=q
q=r
r=p}C.a.m(a2,d,u)
C.a.m(a2,b,s)
C.a.m(a2,c,q)
if(a3<0||a3>=a2.length)return H.b(a2,a3)
C.a.m(a2,a,a2[a3])
if(a4<0||a4>=a2.length)return H.b(a2,a4)
C.a.m(a2,a0,a2[a4])
o=a3+1
n=a4-1
if(J.v(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.ab()
if(k<0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.a.m(a2,m,a2[o])
C.a.m(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a4()
if(k>0){--n
continue}else{j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.b(a2,o)
C.a.m(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.b(a2,n)
C.a.m(a2,o,a2[n])
C.a.m(a2,n,l)
n=j
o=i
break}else{if(n>=a1)return H.b(a2,n)
C.a.m(a2,m,a2[n])
C.a.m(a2,n,l)
n=j
break}}}}h=!0}else{for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
g=a5.$2(l,t)
if(typeof g!=="number")return g.ab()
if(g<0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.a.m(a2,m,a2[o])
C.a.m(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.a4()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.a4()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.ab()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.b(a2,o)
C.a.m(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.b(a2,n)
C.a.m(a2,o,a2[n])
C.a.m(a2,n,l)
o=i}else{if(n>=a1)return H.b(a2,n)
C.a.m(a2,m,a2[n])
C.a.m(a2,n,l)}n=j
break}}}}h=!1}a1=o-1
if(a1>=a2.length)return H.b(a2,a1)
C.a.m(a2,a3,a2[a1])
C.a.m(a2,a1,t)
a1=n+1
if(a1<0||a1>=a2.length)return H.b(a2,a1)
C.a.m(a2,a4,a2[a1])
C.a.m(a2,a1,r)
H.cZ(a2,a3,o-2,a5)
H.cZ(a2,n+2,a4,a5)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.b(a2,o)
if(!J.v(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.b(a2,n)
if(!J.v(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.a.m(a2,m,a2[o])
C.a.m(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.ab()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.b(a2,o)
C.a.m(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.b(a2,n)
C.a.m(a2,o,a2[n])
C.a.m(a2,n,l)
o=i}else{if(n>=a1)return H.b(a2,n)
C.a.m(a2,m,a2[n])
C.a.m(a2,n,l)}n=j
break}}}H.cZ(a2,o,n,a5)}else H.cZ(a2,o,n,a5)},
J:function J(a){this.a=a},
eN:function eN(){},
cH:function cH(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
fj:function fj(a,b,c){this.a=a
this.b=b
this.$ti=c},
fk:function fk(a,b){this.a=null
this.b=a
this.c=b},
i5:function i5(a,b,c){this.a=a
this.b=b
this.$ti=c},
i6:function i6(a,b){this.a=a
this.b=b},
cv:function cv(){},
hP:function hP(){},
dc:function dc(){},
ed:function(a){var u,t=H.mt(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
md:function(a){return v.types[a]},
mi:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.S(a).$ix},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a4(a)
if(typeof u!=="string")throw H.f(H.aC(a))
return u},
bU:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bV:function(a){return H.l0(a)+H.k7(H.ce(a),0,null)},
l0:function(a){var u,t,s,r,q,p,o,n=J.S(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.F||!!n.$ic_){r=C.l(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.ed(t.length>1&&C.c.b2(t,0)===36?C.c.aN(t,1):t)},
jN:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
l9:function(a){var u,t,s,r=H.c([],[P.z])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.n)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.aC(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.d.b4(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.f(H.aC(s))}return H.jN(r)},
jO:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.aC(s))
if(s<0)throw H.f(H.aC(s))
if(s>65535)return H.l9(a)}return H.jN(a)},
l8:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.b4(u,10))>>>0,56320|u&1023)}throw H.f(P.an(a,0,1114111,null,null))},
bk:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
l7:function(a){var u=H.bk(a).getFullYear()+0
return u},
l5:function(a){var u=H.bk(a).getMonth()+1
return u},
l1:function(a){var u=H.bk(a).getDate()+0
return u},
l2:function(a){var u=H.bk(a).getHours()+0
return u},
l4:function(a){var u=H.bk(a).getMinutes()+0
return u},
l6:function(a){var u=H.bk(a).getSeconds()+0
return u},
l3:function(a){var u=H.bk(a).getMilliseconds()+0
return u},
t:function(a){throw H.f(H.aC(a))},
b:function(a,b){if(a==null)J.bz(a)
throw H.f(H.bv(a,b))},
bv:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ag(!0,b,s,null)
u=J.bz(a)
if(!(b<0)){if(typeof u!=="number")return H.t(u)
t=b>=u}else t=!0
if(t)return P.E(b,a,s,null,u)
return P.cT(b,s)},
m5:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bl(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bl(a,c,!0,b,"end",u)
return new P.ag(!0,b,"end",null)},
aC:function(a){return new P.ag(!0,a,null,null)},
m0:function(a){if(typeof a!=="number")throw H.f(H.aC(a))
return a},
f:function(a){var u
if(a==null)a=new P.cQ()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.kn})
u.name=""}else u.toString=H.kn
return u},
kn:function(){return J.a4(this.dartException)},
q:function(a){throw H.f(a)},
n:function(a){throw H.f(P.bD(a))},
ao:function(a){var u,t,s,r,q,p
a=H.kk(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.u])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hE(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hF:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
jX:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
jK:function(a,b){return new H.fN(a,b==null?null:b.method)},
j8:function(a,b){var u=b==null,t=u?null:b.method
return new H.f8(a,t,u?null:b.receiver)},
iU:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.iV(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.b4(t,16)&8191)===10)switch(s){case 438:return f.$1(H.j8(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.jK(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.kq()
q=$.kr()
p=$.ks()
o=$.kt()
n=$.kw()
m=$.kx()
l=$.kv()
$.ku()
k=$.kz()
j=$.ky()
i=r.ag(u)
if(i!=null)return f.$1(H.j8(u,i))
else{i=q.ag(u)
if(i!=null){i.method="call"
return f.$1(H.j8(u,i))}else{i=p.ag(u)
if(i==null){i=o.ag(u)
if(i==null){i=n.ag(u)
if(i==null){i=m.ag(u)
if(i==null){i=l.ag(u)
if(i==null){i=o.ag(u)
if(i==null){i=k.ag(u)
if(i==null){i=j.ag(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.jK(u,i))}}return f.$1(new H.hO(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.d0()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.ag(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.d0()
return a},
jm:function(a){var u
if(a==null)return new H.dR(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dR(a)},
m9:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.m(0,a[u],a[t])}return b},
mh:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(P.o("Unsupported number of arguments for wrapped closure"))},
bu:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mh)
a.$identity=u
return u},
kM:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hi().constructor.prototype):Object.create(new H.bA(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ah
if(typeof t!=="number")return t.F()
$.ah=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.jw(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.kI(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.jw(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
kI:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.md,a)
if(typeof a=="function")if(b)return a
else{u=c?H.jv:H.iY
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.f("Error in functionType of tearoff")},
kJ:function(a,b,c,d){var u=H.iY
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jw:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.kL(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.kJ(t,!r,u,b)
if(t===0){r=$.ah
if(typeof r!=="number")return r.F()
$.ah=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bB
return new Function(r+H.e(q==null?$.bB=H.er("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ah
if(typeof r!=="number")return r.F()
$.ah=r+1
o+=r
r="return function("+o+"){return this."
q=$.bB
return new Function(r+H.e(q==null?$.bB=H.er("self"):q)+"."+H.e(u)+"("+o+");}")()},
kK:function(a,b,c,d){var u=H.iY,t=H.jv
switch(b?-1:a){case 0:throw H.f(H.lc("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
kL:function(a,b){var u,t,s,r,q,p,o,n=$.bB
if(n==null)n=$.bB=H.er("self")
u=$.ju
if(u==null)u=$.ju=H.er("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.kK(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.ah
if(typeof u!=="number")return u.F()
$.ah=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.ah
if(typeof u!=="number")return u.F()
$.ah=u+1
return new Function(n+u+"}")()},
ji:function(a,b,c,d,e,f,g){return H.kM(a,b,c,d,!!e,!!f,g)},
iY:function(a){return a.a},
jv:function(a){return a.c},
er:function(a){var u,t,s,r=new H.bA("self","target","receiver","name"),q=J.j5(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
mm:function(a,b){throw H.f(H.kH(a,H.ed(b.substring(2))))},
h:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.S(a)[b]
else u=!0
if(u)return a
H.mm(a,b)},
m7:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
kH:function(a,b){return new H.es("CastError: "+P.j3(a)+": type '"+H.e(H.lX(a))+"' is not a subtype of type '"+b+"'")},
lX:function(a){var u,t=J.S(a)
if(!!t.$ibC){u=H.m7(t)
if(u!=null)return H.mn(u)
return"Closure"}return H.bV(a)},
ms:function(a){throw H.f(new P.eF(a))},
lc:function(a){return new H.h1(a)},
kf:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
ce:function(a){if(a==null)return
return a.$ti},
mY:function(a,b,c){return H.iS(a["$a"+H.e(c)],H.ce(b))},
mc:function(a,b,c,d){var u=H.iS(a["$a"+H.e(c)],H.ce(b))
return u==null?null:u[d]},
jl:function(a,b,c){var u=H.iS(a["$a"+H.e(b)],H.ce(a))
return u==null?null:u[c]},
ec:function(a,b){var u=H.ce(a)
return u==null?null:u[b]},
mn:function(a){return H.b6(a,null)},
b6:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.ed(a[0].name)+H.k7(a,1,b)
if(typeof a=="function")return H.ed(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.b(b,t)
return H.e(b[t])}if('func' in a)return H.lv(a,b)
if('futureOr' in a)return"FutureOr<"+H.b6("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lv:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],[P.u])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.b(a0,m)
p=C.c.F(p,a0[m])
l=u[q]
if(l!=null&&l!==P.Y)p+=" extends "+H.b6(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.b6(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.b6(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.b6(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.m8(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.b6(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
k7:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.ay("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.b6(p,c)}return"<"+u.h(0)+">"},
iS:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
mW:function(a,b,c){return a.apply(b,H.iS(J.S(b)["$a"+H.e(c)],H.ce(b)))},
mX:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
mj:function(a){var u,t,s,r,q=$.kg.$1(a),p=$.iI[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.iN[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.ka.$2(a,q)
if(q!=null){p=$.iI[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.iN[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.iO(u)
$.iI[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.iN[q]=u
return u}if(s==="-"){r=H.iO(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.ki(a,u)
if(s==="*")throw H.f(P.jY(q))
if(v.leafTags[q]===true){r=H.iO(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.ki(a,u)},
ki:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jo(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
iO:function(a){return J.jo(a,!1,null,!!a.$ix)},
mk:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.iO(u)
else return J.jo(u,c,null,null)},
mf:function(){if(!0===$.jn)return
$.jn=!0
H.mg()},
mg:function(){var u,t,s,r,q,p,o,n
$.iI=Object.create(null)
$.iN=Object.create(null)
H.me()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.kj.$1(q)
if(p!=null){o=H.mk(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
me:function(){var u,t,s,r,q,p,o=C.v()
o=H.bt(C.w,H.bt(C.x,H.bt(C.m,H.bt(C.m,H.bt(C.y,H.bt(C.z,H.bt(C.A(C.l),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.kg=new H.iK(r)
$.ka=new H.iL(q)
$.kj=new H.iM(p)},
bt:function(a,b){return a(b)||b},
kS:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.f(new P.eZ("Illegal RegExp pattern ("+String(p)+")",a))},
mq:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
m6:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
kk:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kl:function(a,b,c){var u=H.mr(a,b,c)
return u},
mr:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.kk(b),'g'),H.m6(c))},
hE:function hE(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fN:function fN(a,b){this.a=a
this.b=b},
f8:function f8(a,b,c){this.a=a
this.b=b
this.c=c},
hO:function hO(a){this.a=a},
iV:function iV(a){this.a=a},
dR:function dR(a){this.a=a
this.b=null},
bC:function bC(){},
ho:function ho(){},
hi:function hi(){},
bA:function bA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
es:function es(a){this.a=a},
h1:function h1(a){this.a=a},
I:function I(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fc:function fc(a,b){this.a=a
this.b=b
this.c=null},
cG:function cG(a,b){this.a=a
this.$ti=b},
fd:function fd(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
iK:function iK(a){this.a=a},
iL:function iL(a){this.a=a},
iM:function iM(a){this.a=a},
f7:function f7(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
br:function(a){return a},
b5:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.bv(b,a))},
lu:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.f(H.m5(a,b,c))
return b},
bR:function bR(){},
cM:function cM(){},
bQ:function bQ(){},
cN:function cN(){},
fG:function fG(){},
fH:function fH(){},
fI:function fI(){},
fJ:function fJ(){},
fK:function fK(){},
cO:function cO(){},
fL:function fL(){},
c3:function c3(){},
c4:function c4(){},
c5:function c5(){},
c6:function c6(){},
m8:function(a){return J.jD(a?Object.keys(a):[],null)},
mt:function(a){return v.mangledGlobalNames[a]},
ml:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jo:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iJ:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.jn==null){H.mf()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.f(P.jY("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.jq()]
if(r!=null)return r
r=H.mj(a)
if(r!=null)return r
if(typeof a=="function")return C.H
u=Object.getPrototypeOf(a)
if(u==null)return C.q
if(u===Object.prototype)return C.q
if(typeof s=="function"){Object.defineProperty(s,$.jq(),{value:C.k,enumerable:false,writable:true,configurable:true})
return C.k}return C.k},
kR:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.f(P.jt(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.f(P.an(a,0,4294967295,"length",null))
return J.jD(new Array(a),b)},
jD:function(a,b){return J.j5(H.c(a,[b]))},
j5:function(a){a.fixed$length=Array
return a},
S:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cB.prototype
return J.cA.prototype}if(typeof a=="string")return J.be.prototype
if(a==null)return J.cC.prototype
if(typeof a=="boolean")return J.f6.prototype
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aS.prototype
return a}if(a instanceof P.Y)return a
return J.iJ(a)},
jj:function(a){if(typeof a=="string")return J.be.prototype
if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aS.prototype
return a}if(a instanceof P.Y)return a
return J.iJ(a)},
jk:function(a){if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aS.prototype
return a}if(a instanceof P.Y)return a
return J.iJ(a)},
ma:function(a){if(typeof a=="number")return J.bJ.prototype
if(typeof a=="string")return J.be.prototype
if(a==null)return a
if(!(a instanceof P.Y))return J.c_.prototype
return a},
mb:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aS.prototype
return a}if(a instanceof P.Y)return a
return J.iJ(a)},
v:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.S(a).p(a,b)},
ee:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mi(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.jj(a).i(a,b)},
kE:function(a,b,c,d){return J.mb(a).fI(a,b,c,d)},
iX:function(a,b){return J.ma(a).fP(a,b)},
js:function(a,b){return J.jk(a).H(a,b)},
kF:function(a,b){return J.jk(a).L(a,b)},
b8:function(a){return J.S(a).gI(a)},
by:function(a){return J.jk(a).gS(a)},
bz:function(a){return J.jj(a).gj(a)},
a4:function(a){return J.S(a).h(a)},
a:function a(){},
f6:function f6(){},
cC:function cC(){},
cD:function cD(){},
fR:function fR(){},
c_:function c_(){},
aS:function aS(){},
aR:function aR(a){this.$ti=a},
j6:function j6(a){this.$ti=a},
T:function T(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bJ:function bJ(){},
cB:function cB(){},
cA:function cA(){},
be:function be(){}},P={
ll:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.lY()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bu(new P.i8(s),1)).observe(u,{childList:true})
return new P.i7(s,u,t)}else if(self.setImmediate!=null)return P.lZ()
return P.m_()},
lm:function(a){self.scheduleImmediate(H.bu(new P.i9(a),0))},
ln:function(a){self.setImmediate(H.bu(new P.ia(a),0))},
lo:function(a){P.jc(C.i,a)},
jc:function(a,b){var u=C.d.a1(a.a,1000)
return P.lr(u<0?0:u,b)},
jW:function(a,b){var u=C.d.a1(a.a,1000)
return P.ls(u<0?0:u,b)},
lr:function(a,b){var u=new P.dX()
u.e6(a,b)
return u},
ls:function(a,b){var u=new P.dX()
u.e7(a,b)
return u},
lR:function(){var u,t
for(;u=$.bs,u!=null;){$.cd=null
t=u.b
$.bs=t
if(t==null)$.cc=null
u.a.$0()}},
lW:function(){$.jg=!0
try{P.lR()}finally{$.cd=null
$.jg=!1
if($.bs!=null)$.jr().$1(P.kb())}},
lU:function(a){var u=new P.dj(a)
if($.bs==null){$.bs=$.cc=u
if(!$.jg)$.jr().$1(P.kb())}else $.cc=$.cc.b=u},
lV:function(a){var u,t,s=$.bs
if(s==null){P.lU(a)
$.cd=$.cc
return}u=new P.dj(a)
t=$.cd
if(t==null){u.b=s
$.bs=$.cd=u}else{u.b=t.b
$.cd=t.b=u
if(u.b==null)$.cc=u}},
jV:function(a,b){var u=$.af
if(u===C.e)return P.jc(a,b)
return P.jc(a,u.fM(b))},
lk:function(a,b){var u=$.af
if(u===C.e)return P.jW(a,b)
return P.jW(a,u.cX(b,P.d6))},
k8:function(a,b,c,d,e){var u={}
u.a=d
P.lV(new P.iC(u,e))},
lS:function(a,b,c,d){var u,t=$.af
if(t===c)return d.$0()
$.af=c
u=t
try{t=d.$0()
return t}finally{$.af=u}},
lT:function(a,b,c,d,e){var u,t=$.af
if(t===c)return d.$1(e)
$.af=c
u=t
try{t=d.$1(e)
return t}finally{$.af=u}},
i8:function i8(a){this.a=a},
i7:function i7(a,b,c){this.a=a
this.b=b
this.c=c},
i9:function i9(a){this.a=a},
ia:function ia(a){this.a=a},
dX:function dX(){this.c=0},
iv:function iv(a,b){this.a=a
this.b=b},
iu:function iu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dj:function dj(a){this.a=a
this.b=null},
d2:function d2(){},
hl:function hl(){},
d6:function d6(){},
ix:function ix(){},
iC:function iC(a,b){this.a=a
this.b=b},
io:function io(){},
ip:function ip(a,b){this.a=a
this.b=b},
iq:function iq(a,b,c){this.a=a
this.b=b
this.c=c},
kU:function(a,b){return new H.I([a,b])},
kV:function(a){return H.m9(a,new H.I([null,null]))},
kW:function(a){return new P.ik([a])},
jf:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
lq:function(a,b){var u=new P.dz(a,b)
u.c=a.e
return u},
kQ:function(a,b,c){var u,t
if(P.jh(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.u])
$.a_.push(a)
try{P.lw(a,u)}finally{if(0>=$.a_.length)return H.b($.a_,-1)
$.a_.pop()}t=P.jR(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
j4:function(a,b,c){var u,t
if(P.jh(a))return b+"..."+c
u=new P.ay(b)
$.a_.push(a)
try{t=u
t.a=P.jR(t.a,a,", ")}finally{if(0>=$.a_.length)return H.b($.a_,-1)
$.a_.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jh:function(a){var u,t
for(u=$.a_.length,t=0;t<u;++t)if(a===$.a_[t])return!0
return!1},
lw:function(a,b){var u,t,s,r,q,p,o,n=a.gS(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.A())return
u=H.e(n.gK(n))
b.push(u)
m+=u.length+2;++l}if(!n.A()){if(l<=5)return
if(0>=b.length)return H.b(b,-1)
t=b.pop()
if(0>=b.length)return H.b(b,-1)
s=b.pop()}else{r=n.gK(n);++l
if(!n.A()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.b(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gK(n);++l
for(;n.A();r=q,q=p){p=n.gK(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.b(b,-1)
m-=b.pop().length+2;--l}b.push("...")
return}}s=H.e(r)
t=H.e(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.b(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)b.push(o)
b.push(s)
b.push(t)},
jF:function(a){var u,t={}
if(P.jh(a))return"{...}"
u=new P.ay("")
try{$.a_.push(a)
u.a+="{"
t.a=!0
J.kF(a,new P.fi(t,u))
u.a+="}"}finally{if(0>=$.a_.length)return H.b($.a_,-1)
$.a_.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
ik:function ik(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
il:function il(a){this.a=a
this.c=this.b=null},
dz:function dz(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fe:function fe(){},
p:function p(){},
fh:function fh(){},
fi:function fi(a,b){this.a=a
this.b=b},
at:function at(){},
ir:function ir(){},
dA:function dA(){},
eu:function eu(){},
ez:function ez(){},
eO:function eO(){},
hS:function hS(){},
hT:function hT(){},
iw:function iw(a){this.b=0
this.c=a},
kP:function(a){if(a instanceof H.bC)return a.h(0)
return"Instance of '"+H.e(H.bV(a))+"'"},
kX:function(a,b,c){var u,t,s=J.kR(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
jE:function(a,b,c){var u,t=H.c([],[c])
for(u=J.by(a);u.A();)t.push(u.gK(u))
if(b)return t
return J.j5(t)},
ja:function(a){var u,t
if(a.constructor===Array){u=a.length
t=P.jQ(0,null,u)
return H.jO(t<u?C.a.cm(a,0,t):a)}return P.lg(a,0,null)},
lg:function(a,b,c){var u,t,s=J.by(a)
for(u=0;u<b;++u)if(!s.A())throw H.f(P.an(b,0,u,null,null))
t=[]
for(;s.A();)t.push(s.gK(s))
return H.jO(t)},
la:function(a){return new H.f7(a,H.kS(a,!1,!0,!1,!1,!1))},
jR:function(a,b,c){var u=J.by(b)
if(!u.A())return a
if(c.length===0){do a+=H.e(u.gK(u))
while(u.A())}else{a+=H.e(u.gK(u))
for(;u.A();)a=a+c+H.e(u.gK(u))}return a},
lt:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.n){u=$.kD().b
u=u.test(b)}else u=!1
if(u)return b
t=C.C.fQ(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.b(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.l8(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
kN:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
kO:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cp:function(a){if(a>=10)return""+a
return"0"+a},
jy:function(a){return new P.aK(1000*a)},
j3:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a4(a)
if(typeof a==="string")return JSON.stringify(a)
return P.kP(a)},
kG:function(a){return new P.ag(!1,null,null,a)},
jt:function(a,b,c){return new P.ag(!0,a,b,c)},
cT:function(a,b){return new P.bl(null,null,!0,a,b,"Value not in range")},
an:function(a,b,c,d,e){return new P.bl(b,c,!0,a,d,"Invalid value")},
jQ:function(a,b,c){if(0>a||a>c)throw H.f(P.an(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.f(P.an(b,a,c,"end",null))
return b}return c},
jP:function(a,b){if(typeof a!=="number")return a.ab()
if(a<0)throw H.f(P.an(a,0,null,b,null))},
E:function(a,b,c,d,e){var u=e==null?J.bz(b):e
return new P.f4(u,!0,a,c,"Index out of range")},
Z:function(a){return new P.hQ(a)},
jY:function(a){return new P.hN(a)},
bD:function(a){return new P.ey(a)},
o:function(a){return new P.ds(a)},
jp:function(a){H.ml(a)},
b7:function b7(){},
a6:function a6(a,b){this.a=a
this.b=b},
G:function G(){},
aK:function aK(a){this.a=a},
eL:function eL(){},
eM:function eM(){},
bc:function bc(){},
cQ:function cQ(){},
ag:function ag(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bl:function bl(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
f4:function f4(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hQ:function hQ(a){this.a=a},
hN:function hN(a){this.a=a},
hh:function hh(a){this.a=a},
ey:function ey(a){this.a=a},
fQ:function fQ(){},
d0:function d0(){},
eF:function eF(a){this.a=a},
ds:function ds(a){this.a=a},
eZ:function eZ(a,b){this.a=a
this.b=b},
z:function z(){},
j:function j(){},
f5:function f5(){},
bh:function bh(){},
cJ:function cJ(){},
aU:function aU(){},
ab:function ab(){},
Y:function Y(){},
u:function u(){},
ay:function ay(a){this.a=a},
m3:function(a){var u,t=J.S(a)
if(!!t.$iaO){u=t.gd3(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.e1(a.data,a.height,a.width)},
m2:function(a){if(a instanceof P.e1)return{data:a.a,height:a.b,width:a.c}
return a},
aD:function(a){var u,t,s,r,q
if(a==null)return
u=P.kU(P.u,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.n)(t),++r){q=t[r]
u.m(0,q,a[q])}return u},
m1:function(a){var u={}
a.L(0,new P.iD(u))
return u},
e1:function e1(a,b,c){this.a=a
this.b=b
this.c=c},
iD:function iD(a){this.a=a},
eV:function eV(a,b){this.a=a
this.b=b},
eW:function eW(){},
eX:function eX(){},
ij:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lp:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
im:function im(){},
a9:function a9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bg:function bg(){},
fa:function fa(){},
bi:function bi(){},
fO:function fO(){},
fU:function fU(){},
hm:function hm(){},
k:function k(){},
bo:function bo(){},
hD:function hD(){},
dx:function dx(){},
dy:function dy(){},
dI:function dI(){},
dJ:function dJ(){},
dT:function dT(){},
dU:function dU(){},
e_:function e_(){},
e0:function e0(){},
ek:function ek(){},
el:function el(){},
em:function em(a){this.a=a},
en:function en(){},
b9:function b9(){},
fP:function fP(){},
dk:function dk(){},
cW:function cW(){},
hg:function hg(){},
dP:function dP(){},
dQ:function dQ(){}},W={
j_:function(){var u=document.createElement("canvas")
return u},
j2:function(a){return"wheel"},
ii:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
k6:function(a,b,c,d){var u=W.ii(W.ii(W.ii(W.ii(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
P:function(a,b,c,d){var u=W.k9(new W.ig(c),W.i)
if(u!=null&&!0)J.kE(a,b,u,!1)
return new W.ie(a,b,u,!1)},
k9:function(a,b){var u=$.af
if(u===C.e)return a
return u.cX(a,b)},
l:function l(){},
ef:function ef(){},
eh:function eh(){},
ei:function ei(){},
cj:function cj(){},
ba:function ba(){},
aJ:function aJ(){},
eB:function eB(){},
C:function C(){},
bE:function bE(){},
eC:function eC(){},
a5:function a5(){},
aj:function aj(){},
eD:function eD(){},
eE:function eE(){},
eG:function eG(){},
eI:function eI(){},
cr:function cr(){},
cs:function cs(){},
eJ:function eJ(){},
eK:function eK(){},
ic:function ic(a,b){this.a=a
this.b=b},
X:function X(){},
i:function i(){},
d:function d(){},
aM:function aM(){},
eT:function eT(){},
eU:function eU(){},
eY:function eY(){},
aN:function aN(){},
f2:function f2(){},
bH:function bH(){},
aO:function aO(){},
bI:function bI(){},
bf:function bf(){},
ff:function ff(){},
fz:function fz(){},
fA:function fA(){},
fB:function fB(a){this.a=a},
fC:function fC(){},
fD:function fD(a){this.a=a},
aT:function aT(){},
fE:function fE(){},
am:function am(){},
ib:function ib(a){this.a=a},
H:function H(){},
cP:function cP(){},
aV:function aV(){},
fS:function fS(){},
h_:function h_(){},
h0:function h0(a){this.a=a},
h2:function h2(){},
aW:function aW(){},
hd:function hd(){},
aX:function aX(){},
he:function he(){},
aY:function aY(){},
hj:function hj(){},
hk:function hk(a){this.a=a},
az:function az(){},
aZ:function aZ(){},
aA:function aA(){},
hp:function hp(){},
hq:function hq(){},
hy:function hy(){},
b0:function b0(){},
bn:function bn(){},
hB:function hB(){},
hC:function hC(){},
b1:function b1(){},
hR:function hR(){},
i4:function i4(){},
b4:function b4(){},
c2:function c2(){},
id:function id(){},
dm:function dm(){},
ih:function ih(){},
dF:function dF(){},
is:function is(){},
it:function it(){},
ie:function ie(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
ig:function ig(a){this.a=a},
D:function D(){},
cw:function cw(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
dl:function dl(){},
dn:function dn(){},
dp:function dp(){},
dq:function dq(){},
dr:function dr(){},
dt:function dt(){},
du:function du(){},
dv:function dv(){},
dw:function dw(){},
dB:function dB(){},
dC:function dC(){},
dD:function dD(){},
dE:function dE(){},
dG:function dG(){},
dH:function dH(){},
dK:function dK(){},
dL:function dL(){},
dM:function dM(){},
c7:function c7(){},
c8:function c8(){},
dN:function dN(){},
dO:function dO(){},
dS:function dS(){},
dV:function dV(){},
dW:function dW(){},
c9:function c9(){},
ca:function ca(){},
dY:function dY(){},
dZ:function dZ(){},
e2:function e2(){},
e3:function e3(){},
e4:function e4(){},
e5:function e5(){},
e6:function e6(){},
e7:function e7(){},
e8:function e8(){},
e9:function e9(){},
ea:function ea(){},
eb:function eb(){}},T={
Q:function(a){var u=new T.h3()
u.e0(a)
return u},
eg:function eg(){},
cz:function cz(){},
cK:function cK(){},
aw:function aw(){this.a=null},
h3:function h3(){this.a=null},
jS:function(a){var u=new T.hs()
u.a=0
u.b=a
u.d=u.c=!1
u.x=u.r=u.f=u.e=0
return u},
bm:function bm(){},
hr:function hr(){},
hs:function hs(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ht:function ht(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hv:function hv(a){var _=this
_.a=a
_.e=_.d=_.c=null},
hw:function hw(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},R={d1:function d1(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},d7:function d7(a,b,c){this.a=a
this.b=b
this.c=c},d8:function d8(a){this.b=a
this.c=null},hz:function hz(){this.c=this.b=this.a=null},da:function da(a){this.b=a
this.a=this.c=null}},O={
ev:function(a){var u=new O.ai([a])
u.b1(a)
return u},
ai:function ai(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bN:function bN(){this.b=this.a=null},
jA:function(a,b){var u,t,s,r=new O.cy()
r.r=0
r.scd(null)
r.sbI(null)
if(a==null){u=$.jZ
if(u==null){u=new V.B(1,0)
$.jZ=u
t=u}else t=u}else t=a
if(!J.v(r.d,t)){s=r.d
r.d=t
u=new D.m("blurDirection",s,t)
u.b=!0
r.w(u)}r.sd1(b)
r.sbJ(null)
r.sbK(0)
return r},
fm:function(){var u,t=new O.cL(),s=O.ev(V.ac)
t.e=s
s.aA(t.gew(),t.gey())
s=new O.al(t,"emission")
s.c=new A.V(!1,!1,!1)
s.f=new V.M(0,0,0)
t.f=s
s=new O.al(t,"ambient")
s.c=new A.V(!1,!1,!1)
s.f=new V.M(0,0,0)
t.r=s
s=new O.al(t,"diffuse")
s.c=new A.V(!1,!1,!1)
s.f=new V.M(0,0,0)
t.x=s
s=new O.al(t,"invDiffuse")
s.c=new A.V(!1,!1,!1)
s.f=new V.M(0,0,0)
t.y=s
s=new O.fs(t,"specular")
s.c=new A.V(!1,!1,!1)
s.f=new V.M(0,0,0)
s.ch=100
t.z=s
s=new O.fo(t,"bump")
s.c=new A.V(!1,!1,!1)
t.Q=s
t.ch=null
s=new O.al(t,"reflect")
s.c=new A.V(!1,!1,!1)
s.f=new V.M(0,0,0)
t.cx=s
s=new O.fr(t,"refract")
s.c=new A.V(!1,!1,!1)
s.f=new V.M(0,0,0)
s.ch=1
t.cy=s
s=new O.fn(t,"alpha")
s.c=new A.V(!1,!1,!1)
s.f=1
t.db=s
s=new D.cF()
s.b1(D.a0)
s.e=H.c([],[D.eH])
s.f=H.c([],[D.bj])
s.r=H.c([],[D.hf])
s.y=s.x=null
s.ci(s.geu(),s.gf7(),s.gfb())
t.dx=s
u=new O.fq()
u.b=new V.U(0,0,0,0)
u.c=1
u.d=10
u.e=!1
t.dy=u
u=s.x
s=u==null?s.x=D.A():u
s.k(0,t.gfs())
s=t.dx
u=s.y
s=u==null?s.y=D.A():u
s.k(0,t.ga_())
t.fr=null
return t},
jT:function(){var u,t,s,r=new O.d4()
r.a=new V.U(0,0,0,0)
u=O.ev(O.b_)
r.c=u
u.aA(r.geM(),r.geO())
r.d=0
r.e=null
r.r=r.f=C.h
t=new V.U(0,0,0,0)
if(!r.a.p(0,t)){s=r.a
r.a=t
u=new D.m("backColor",s,t)
u.b=!0
r.w(u)}r.scY(C.h)
return r},
jb:function(a,b){var u,t,s,r,q=new O.b_(),p=q.a
q.a=b
b.gl().k(0,q.ga_())
u=new D.m("texture",p,q.a)
u.b=!0
q.w(u)
t=a==null?V.au():a
if(!J.v(q.b,t)){p=q.b
q.b=t
u=new D.m("colorMatrix",p,t)
u.b=!0
q.w(u)}s=V.cV()
if(!J.v(q.c,s)){p=q.c
q.c=s
u=new D.m("source",p,s)
u.b=!0
q.w(u)}r=V.cV()
if(!J.v(q.d,r)){p=q.d
q.d=r
u=new D.m("destination",p,r)
u.b=!0
q.w(u)}if(q.e!==!1){q.e=!1
u=new D.m("flip",!0,!1)
u.b=!0
q.w(u)}q.f=null
return q},
cy:function cy(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cL:function cL(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ft:function ft(a,b){this.a=a
this.b=b},
fu:function fu(){},
fv:function fv(a,b){this.a=a
this.b=b},
fw:function fw(){},
fx:function fx(a,b){this.a=a
this.b=b},
fy:function fy(){},
fn:function fn(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bL:function bL(){},
fo:function fo(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
al:function al(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fq:function fq(){var _=this
_.e=_.d=_.c=_.b=null},
fr:function fr(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fs:function fs(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
d3:function d3(){},
d4:function d4(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
b_:function b_(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null}},E={
ct:function(){var u,t=new E.as()
t.a=""
t.b=!0
u=O.ev(E.as)
t.y=u
u.aA(t.gh3(),t.gh6())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.saB(0,null)
t.saa(null)
t.sar(null)
return t},
lb:function(a,b){var u=new E.fW(a)
u.e_(a,b)
return u},
lj:function(a,b,c,d,e){var u,t,s=J.S(a)
if(!!s.$iba)return E.jU(a,!0,!0,!0,!1)
u=W.j_()
t=u.style
t.width="100%"
t.height="100%"
s.gd_(a).k(0,u)
return E.jU(u,!0,!0,!0,!1)},
jU:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.d5(),p=C.f.cg(a,"webgl2",P.kV(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.q(P.o("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.lb(p,a)
u=new T.hv(p)
p.getParameter(3379)
u.c=p.getParameter(34076)
u.e=u.d=0
q.f=u
u=new X.dd(a)
t=new X.f9()
t.c=new X.a7(!1,!1,!1)
t.d=P.kW(P.z)
u.b=t
t=new X.fF(u)
t.f=0
t.r=V.ax()
t.x=V.ax()
t.ch=t.Q=1
u.c=t
t=new X.fg(u)
t.r=0
t.x=V.ax()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hA(u)
t.f=V.ax()
t.r=V.ax()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.c([],[[P.d2,P.Y]])
u.z=t
s=document
t.push(W.P(s,"contextmenu",u.geG(),!1))
u.z.push(W.P(a,"focus",u.geQ(),!1))
u.z.push(W.P(a,"blur",u.geA(),!1))
u.z.push(W.P(s,"keyup",u.geU(),!1))
u.z.push(W.P(s,"keydown",u.geS(),!1))
u.z.push(W.P(a,"mousedown",u.geY(),!1))
u.z.push(W.P(a,"mouseup",u.gf1(),!1))
u.z.push(W.P(a,r,u.gf_(),!1))
t=u.z
W.j2(a)
W.j2(a)
t.push(W.P(a,W.j2(a),u.gf3(),!1))
u.z.push(W.P(s,r,u.geI(),!1))
u.z.push(W.P(s,"mouseup",u.geK(),!1))
u.z.push(W.P(s,"pointerlockchange",u.gf5(),!1))
u.z.push(W.P(a,"touchstart",u.gfl(),!1))
u.z.push(W.P(a,"touchend",u.gfh(),!1))
u.z.push(W.P(a,"touchmove",u.gfj(),!1))
q.x=u
q.ch=!0
q.cx=!1
q.cy=new P.a6(Date.now(),!1)
q.db=0
q.cL()
return q},
eq:function eq(){},
as:function as(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fW:function fW(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fX:function fX(a){this.a=a},
fY:function fY(a){this.a=a},
fZ:function fZ(a){this.a=a},
d5:function d5(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
hx:function hx(a){this.a=a}},Z={
je:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.br(c)),35044)
a.bindBuffer(b,null)
return new Z.di(b,u)},
aa:function(a){return new Z.aq(a)},
di:function di(a,b){this.a=a
this.b=b},
ck:function ck(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
c1:function c1(a){this.a=a},
aI:function aI(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bd:function bd(a,b,c){this.a=a
this.b=b
this.c=c},
aq:function aq(a){this.a=a}},D={
A:function(){var u=new D.ak()
u.d=0
return u},
et:function et(){},
ak:function ak(){var _=this
_.d=_.c=_.b=_.a=null},
eQ:function eQ(a){this.a=a},
eR:function eR(a){this.a=a},
K:function K(){this.b=null},
aP:function aP(){this.b=null},
aQ:function aQ(){this.b=null},
m:function m(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
eH:function eH(){},
a0:function a0(){},
cF:function cF(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
bj:function bj(){var _=this
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hf:function hf(){}},X={cl:function cl(a,b){this.a=a
this.b=b},cE:function cE(a,b){this.a=a
this.b=b},f9:function f9(){var _=this
_.d=_.c=_.b=_.a=null},cI:function cI(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fg:function fg(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},a7:function a7(a,b,c){this.a=a
this.b=b
this.c=c},av:function av(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},fF:function fF(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bP:function bP(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fT:function fT(){},d9:function d9(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},hA:function hA(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dd:function dd(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
ep:function(a,b,c,d){var u,t,s,r,q=new X.eo()
q.d=q.c=q.b=q.a=512
q.e=!0
q.f=!1
q.x=q.r=1
q.ch=T.jS(null)
q.cx=new V.U(0,0,0,1)
q.cy=!0
q.db=2000
q.dx=!0
q.dy=V.cV()
q.saj(0,512)
q.saf(0,512)
u=new V.U(0,0,0,1)
if(!q.cx.p(0,u)){t=q.cx
q.cx=u
s=new D.m("color",t,u)
s.b=!0
q.V(s)}if(q.cy!==d){q.cy=d
s=new D.m("clearColor",!d,d)
s.b=!0
q.V(s)}s=q.db
if(!(Math.abs(s-2000)<$.r().a)){q.db=2000
s=new D.m("depth",s,2000)
s.b=!0
q.V(s)}if(!q.f){q.f=!0
s=new D.m("autoResize",!1,!0)
s.b=!0
q.V(s)}s=q.r
if(!(Math.abs(s-b)<$.r().a)){q.r=b
s=new D.m("autoResizeScalarX",s,b)
s.b=!0
q.V(s)}s=q.x
if(!(Math.abs(s-c)<$.r().a)){q.x=c
s=new D.m("autoResizeScalarY",s,c)
s.b=!0
q.V(s)}r=V.cV()
if(!J.v(q.dy,r)){t=q.dy
q.dy=r
s=new D.m("region",t,r)
s.b=!0
q.V(s)}return q},
jz:function(a){var u=new X.f_(),t=new V.U(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=V.cV()
u.r=t
return u},
eo:function eo(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iZ:function iZ(){},
f_:function f_(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
f3:function f3(){this.b=this.a=null},
cR:function cR(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
hn:function hn(){}},V={
ew:function(a,b,c){var u=a/255,t=b/255,s=c/255
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.U(u,t,s,1)},
iW:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.b.dP(a-b,u)
return(a<0?a+u:a)+b},
y:function(a,b,c){if(a==null)return C.c.ah("null",c)
return C.c.ah(C.b.dM(Math.abs(a-0)<$.r().a?0:a,b),c+b+1)},
bw:function(a,b,c){var u,t,s,r,q,p,o=H.c([],[P.u])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.n)(a),++s){r=V.y(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.b(o,q)
u=C.c.ah(o[q],t)
p=o.length
if(q>=p)return H.b(o,q)
o[q]=u}return o},
cf:function(a){return C.b.hr(Math.pow(2,C.G.c_(Math.log(H.m0(a))/Math.log(2))))},
au:function(){var u=$.bO
return u==null?$.bO=V.ad(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
ad:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ac(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
jJ:function(a,b,c,d){return V.ad(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
j9:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.ad(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
jH:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.ad(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
jI:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.ad(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1)},
ax:function(){var u=$.jM
return u==null?$.jM=new V.O(0,0):u},
l_:function(){var u=$.bT
return u==null?$.bT=new V.L(0,0,0):u},
cV:function(){var u=$.bW
return u==null?$.bW=V.fV(0,0,1,1):u},
fV:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cU(a,b,c,d)},
c0:function(){var u=$.k3
return u==null?$.k3=new V.w(0,0,0):u},
k5:function(){var u=$.k4
return u==null?$.k4=new V.bq(1,0.00390625,0.0000152587890625,0):u},
M:function M(a,b,c){this.a=a
this.b=b
this.c=c},
U:function U(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eP:function eP(a){this.a=a},
bM:function bM(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ac:function ac(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
O:function O(a,b){this.a=a
this.b=b},
L:function L(a,b,c){this.a=a
this.b=b
this.c=c},
a8:function a8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cU:function cU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
B:function B(a,b){this.a=a
this.b=b},
w:function w(a,b,c){this.a=a
this.b=b
this.c=c},
bq:function bq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mo:function(a){P.lk(C.E,new V.iP(a))},
ld:function(a){var u=new V.h9()
u.e1(a,!0)
return u},
iP:function iP(a){this.a=a},
h9:function h9(){this.b=this.a=null},
hb:function hb(a){this.a=a},
ha:function ha(a){this.a=a}},U={
j0:function(){var u=new U.ex()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
j1:function(a){var u=new U.cn()
u.a=a
return u},
jB:function(){var u=new U.bG()
u.b1(U.a1)
u.aA(u.ge4(),u.gf9())
u.e=null
u.f=V.au()
u.r=0
return u},
ex:function ex(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cn:function cn(){this.b=this.a=null},
bG:function bG(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a1:function a1(){},
cX:function cX(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
de:function de(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
df:function df(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dg:function dg(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
kh:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8="testCanvas",b9=null,c0="../resources/StarsCan.png",c1="../resources/Stars.png",c2="modifiers",c3=V.ld("Test 042"),c4=W.j_()
c4.className="pageLargeCanvas"
c4.id=b8
c3.a.appendChild(c4)
u=[P.u]
c3.cU(H.c(["Test of the Blum effect technique."],u))
c3.cU(H.c(["\xab[Back to Tests|../]"],u))
t=document.getElementById(b8)
if(t==null)H.q(P.o("Failed to find an element with the identifier, testCanvas."))
s=E.lj(t,!0,!0,!0,!1)
r=U.jB()
c3=new U.cX()
c3.r=c3.f=c3.e=c3.d=c3.c=c3.b=c3.a=0
c3.sdN(0)
c3.sdG(0,0)
c3.sdK(0)
u=c3.d
if(!(Math.abs(u-0)<$.r().a)){c3.d=0
u=new D.m("deltaYaw",u,0)
u.b=!0
c3.E(u)}u=c3.e
if(!(Math.abs(u-0)<$.r().a)){c3.e=0
u=new D.m("deltaPitch",u,0)
u.b=!0
c3.E(u)}u=c3.f
if(!(Math.abs(u-0.5)<$.r().a)){c3.f=0.5
u=new D.m("deltaRoll",u,0.5)
u.b=!0
c3.E(u)}r.k(0,c3)
r.k(0,U.j1(V.j9(1.5707963267948966)))
q=E.ct()
q.sar(r)
q.saB(0,F.mp(0.6))
c3=O.fm()
c3.f.saJ(0,new V.M(1,1,1))
q.saa(c3)
p=s.f.ds(c0,c0,c0,c0,c0,c0)
o=E.ct()
o.sar(r)
o.saB(0,F.kd(1.2,16,1.2))
c3=O.fm()
c3.x.say(p)
c3.db.say(p)
o.saa(c3)
n=E.ct()
n.sar(r)
c3=F.kd(1.2,16,1.2)
c3.b8()
n.saB(0,c3)
c3=O.fm()
u=c3.r
u.saJ(0,new V.M(0.6,0.6,0.6))
c3.x.say(p)
c3.db.say(p)
n.saa(c3)
m=s.f.ds(c1,c1,c1,c1,c1,c1)
l=new D.bj()
l.c=new V.M(1,1,1)
l.r=1
l.y=l.x=0
l.z=!0
l.a=V.au()
k=l.b
l.b=r
r.gl().k(0,l.gbh())
c3=new D.m("mover",k,l.b)
c3.b=!0
l.a5(c3)
j=new V.M(1,1,1)
if(!l.c.p(0,j)){k=l.c
l.c=j
c3=new D.m("color",k,j)
c3.b=!0
l.a5(c3)}c3=l.d
if(c3!==m){if(c3!=null)c3.gl().C(0,l.gbh())
k=l.d
l.d=m
m.gl().k(0,l.gbh())
c3=new D.m("texture",k,l.d)
c3.b=!0
l.a5(c3)}i=V.k5()
if(!J.v(l.f,i)){k=l.f
l.f=i
c3=new D.m("shadowAdjust",k,i)
c3.b=!0
l.a5(c3)}c3=l.r
if(!(Math.abs(c3-0.5)<$.r().a)){l.r=0.5
c3=new D.m("attenuation0",c3,0.5)
c3.b=!0
l.a5(c3)}c3=l.x
if(!(Math.abs(c3-0.05)<$.r().a)){l.x=0.05
c3=new D.m("attenuation1",c3,0.05)
c3.b=!0
l.a5(c3)}c3=l.y
if(!(Math.abs(c3-0.025)<$.r().a)){l.y=0.025
c3=new D.m("attenuation2",c3,0.025)
c3.b=!0
l.a5(c3)}h=E.ct()
h.sar(U.j1(V.jJ(10,10,10,1)))
c3=F.kc(1,b9,b9,1)
c3.b8()
h.saB(0,c3)
g=U.jB()
c3=s.x
u=new U.df()
f=U.j0()
f.scf(0,!0)
f.sc4(6.283185307179586)
f.sc6(0)
f.sY(0,0)
f.sc5(100)
f.sR(0)
f.sbR(0.5)
u.b=f
e=u.gaG()
f.gl().k(0,e)
f=U.j0()
f.scf(0,!0)
f.sc4(6.283185307179586)
f.sc6(0)
f.sY(0,0)
f.sc5(100)
f.sR(0)
f.sbR(0.5)
u.c=f
f.gl().k(0,e)
u.d=null
u.r=u.f=u.e=!1
u.y=u.x=2.5
u.Q=4
u.ch=u.cx=!1
u.db=u.cy=0
u.dx=null
u.dy=0
u.fx=u.fr=null
d=new X.a7(!1,!1,!1)
k=u.d
u.d=d
f=new D.m(c2,k,d)
f.b=!0
u.E(f)
f=u.f
if(f!==!1){u.f=!1
f=new D.m("invertX",f,!1)
f.b=!0
u.E(f)}f=u.r
if(f!==!1){u.r=!1
f=new D.m("invertY",f,!1)
f.b=!0
u.E(f)}u.aQ(c3)
g.k(0,u)
c3=s.x
u=new U.de()
f=U.j0()
f.scf(0,!0)
f.sc4(6.283185307179586)
f.sc6(0)
f.sY(0,0)
f.sc5(100)
f.sR(0)
f.sbR(0.2)
u.b=f
f.gl().k(0,u.gaG())
u.c=null
u.d=!1
u.e=2.5
u.r=4
u.x=u.y=!1
u.z=0
u.Q=null
u.ch=0
u.cy=u.cx=null
d=new X.a7(!0,!1,!1)
k=u.c
u.c=d
f=new D.m(c2,k,d)
f.b=!0
u.E(f)
u.aQ(c3)
g.k(0,u)
c3=s.x
u=new U.dg()
u.c=0.01
u.e=u.d=0
d=new X.a7(!1,!1,!1)
u.b=d
f=new D.m(c2,b9,d)
f.b=!0
u.E(f)
u.aQ(c3)
g.k(0,u)
g.k(0,U.j1(V.ad(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
c=O.fm()
c.dx.k(0,l)
c3=c.r
c3.saJ(0,new V.M(0.05,0.05,0.05))
c3=c.x
c3.saJ(0,new V.M(0.7,0.7,0.7))
b=X.ep(!0,1,1,!0)
a=new M.cu()
a.a=!0
c3=O.ev(E.as)
a.e=c3
c3.aA(a.geC(),a.geE())
a.y=a.x=a.r=a.f=null
a0=X.jz(b9)
a1=new X.cR()
a1.c=1.0471975511965976
a1.d=0.1
a1.e=2000
a1.sar(b9)
c3=a1.c
if(!(Math.abs(c3-1.0471975511965976)<$.r().a)){a1.c=1.0471975511965976
c3=new D.m("fov",c3,1.0471975511965976)
c3.b=!0
a1.V(c3)}c3=a1.d
if(!(Math.abs(c3-0.1)<$.r().a)){a1.d=0.1
c3=new D.m("near",c3,0.1)
c3.b=!0
a1.V(c3)}c3=a1.e
if(!(Math.abs(c3-2000)<$.r().a)){a1.e=2000
c3=new D.m("far",c3,2000)
c3.b=!0
a1.V(c3)}c3=a.b
if(c3!==a1){if(c3!=null)c3.gl().C(0,a.gT())
k=a.b
a.b=a1
a1.gl().k(0,a.gT())
c3=new D.m("camera",k,a.b)
c3.b=!0
a.P(c3)}a.saL(0,a0)
a.saa(b9)
a.saa(c)
a.e.k(0,h)
a.e.k(0,q)
a.e.k(0,n)
a.e.k(0,o)
a.b.sar(g)
a.saL(0,b)
a2=X.ep(!0,1,1,!1)
a3=O.jT()
c3=a3.c
u=b.ch
c3.k(0,O.jb(V.ad(3,3,3,-8,3,3,3,-8,3,3,3,-8,0,0,0,1),u))
a4=M.eA(b9,b9)
a4.saL(0,a2)
a4.saa(a3)
a5=M.jx(b9)
for(c3=[H.jl(a5,"ai",0)],u=[{func:1,ret:-1,args:[D.K]}],a6=a2,a7=0;a7<4;++a7,a6=a8){a8=X.ep(!0,0.25,0.25,!1)
f=new V.bq(10,10,10,1)
e=a6.ch
a9=a2.ch
b0=new M.cx()
b0.a=!0
b0.c=X.ep(!0,1,1,!1)
b1=O.jA(b9,b9)
b2=b1.x
if(b2==null){b2=new D.ak()
b2.d=0
b1.x=b2}b3=b0.gT()
b4=b2.a;(b4==null?b2.a=H.c([],u):b4).push(b3)
b0.d=b1
b0.e=M.eA(b0.c,b1)
b1=b0.c.ch
b2=$.k_
b1=O.jA(b2==null?$.k_=new V.B(0,1):b2,b1)
b2=b1.x
if(b2==null){b2=new D.ak()
b2.d=0
b1.x=b2}b4=b2.a;(b4==null?b2.a=H.c([],u):b4).push(b3)
b0.f=b1
b0.r=M.eA(b9,b1)
b0.d.sbK(0)
b0.f.sbK(0)
b0.d.sd1(e)
b0.d.sbJ(a9)
b0.f.sbJ(a9)
b0.d.scd(b9)
b0.f.scd(b9)
b0.d.sbI(f)
b0.f.sbI(f)
b0.r.saL(0,a8)
if(a5.by(H.c([b0],c3))){f=a5.a
b5=f.length
f.push(b0)
f=H.c([b0],c3)
e=a5.c
if(e!=null)e.$2(b5,f)}}b6=O.jT()
b6.scY(C.p)
b6.c.k(0,O.jb(b9,b.ch))
b6.c.k(0,O.jb(b9,a6.ch))
b7=M.eA(b9,b9)
b7.saa(b6)
c3=M.jx(H.c([a,a4,a5,b7],[M.a2]))
u=s.d
if(u!==c3){if(u!=null)u.gl().C(0,s.gcr())
s.d=c3
c3.gl().k(0,s.gcr())
s.cs()}V.mo(s)}},M={
jx:function(a){var u=new M.cm()
u.b1(M.a2)
u.e=!0
u.f=!1
u.r=null
u.aA(u.gfd(),u.gff())
if(a!=null)u.bG(0,a)
return u},
eA:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j=null,i=new M.co()
i.a=!0
u=E.ct()
t=F.h5()
s=t.a
r=new V.w(-1,-1,1)
r=r.q(0,Math.sqrt(r.B(r)))
q=s.b6(new V.a8(1,2,4,6),V.ew(255,0,0),new V.L(-1,-1,0),new V.O(0,1),r,j)
r=t.a
s=new V.w(1,-1,1)
s=s.q(0,Math.sqrt(s.B(s)))
p=r.b6(new V.a8(0,3,4,6),V.ew(0,0,255),new V.L(1,-1,0),new V.O(1,1),s,j)
s=t.a
r=new V.w(1,1,1)
r=r.q(0,Math.sqrt(r.B(r)))
o=s.b6(new V.a8(0,2,5,6),V.ew(0,128,0),new V.L(1,1,0),new V.O(1,0),r,j)
r=t.a
s=V.ax()
n=new V.w(-1,1,1)
n=n.q(0,Math.sqrt(n.B(n)))
m=r.b6(new V.a8(0,2,4,7),V.ew(255,255,0),new V.L(-1,1,0),s,n,j)
t.d.cS(H.c([q,p,o,m],[F.aB]))
t.aq()
u.saB(0,t)
i.e=u
l=new X.f3()
k=i.b
i.b=l
l.gl().k(0,i.gT())
u=new D.m("camera",k,i.b)
u.b=!0
i.P(u)
i.saL(0,a)
i.saa(b)
return i},
cm:function cm(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
co:function co(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cu:function cu(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cx:function cx(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a2:function a2(){}},A={
kY:function(a,b){var u=a.aU,t=new A.fl(b,u)
t.bg(b,u)
t.dZ(a,b)
return t},
kZ:function(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="MaterialLight_"+a1.gao(a1)+a2.gao(a2)+a3.gao(a3)+a4.gao(a4)+a5.gao(a5)+a6.gao(a6)+a7.gao(a7)+a8.gao(a8)+a9.gao(a9)+"_"
e+=a?"1":"0"
e+=b?"1":"0"
e+=c?"1":"0"
e=e+"0_"+a0
u=b0.length
if(u>0){e+="_Dir"
for(t=0;t<b0.length;b0.length===u||(0,H.n)(b0),++t)e+="_"+H.e(b0[t].a)}u=b1.length
if(u>0){e+="_Point"
for(t=0;t<b1.length;b1.length===u||(0,H.n)(b1),++t)e+="_"+H.e(b1[t].a)}u=b2.length
if(u>0){e+="_Spot"
for(t=0;t<b2.length;b2.length===u||(0,H.n)(b2),++t)e+="_"+H.e(b2[t].a)}for(u=b0.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=b0[t].b
for(u=b1.length,t=0;t<u;++t,r=!0)s+=b1[t].b
for(q=b2.length,t=0;t<q;++t,r=!0)s+=b2[t].b
if(!a7.a)q=a7.c
else q=!0
if(!q)if(!a8.a){q=a8.c
p=q}else p=!0
else p=!0
if(!a2.a)q=a2.c
else q=!0
if(!q){if(!a3.a)q=a3.c
else q=!0
if(!q){if(!a4.a)q=a4.c
else q=!0
if(!q)if(!a5.a)q=a5.c
else q=!0
else q=!0
o=q}else o=!0}else o=!0
q=!a5.a
if(q)n=a5.c
else n=!0
m=n||u>0||p
if(!a3.a)u=a3.c
else u=!0
if(!u){if(!a4.a)u=a4.c
else u=!0
if(!u){if(q)u=a5.c
else u=!0
l=u}else l=!0}else l=!0
if(!l){if(!a6.a)u=a6.c
else u=!0
k=u||p}else k=!0
if(!a6.a)j=a6.c
else j=!0
i=a1.c||a2.c||a3.c||a4.c||a5.c||a6.c||a7.c||a8.c||a9.c
h=a0>0
g=k||j||m||!1
b=b&&i
f=$.a3()
if(k){u=$.aG()
f=new Z.aq(f.a|u.a)}if(j){u=$.aF()
f=new Z.aq(f.a|u.a)}if(i){u=$.aH()
f=new Z.aq(f.a|u.a)}if(h){u=$.aE()
f=new Z.aq(f.a|u.a)}return new A.fp(a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,s,p,l,p,r,g,!0,!1,!1,o,r,m,k,j,!1,i,h,!1,b,c,!1,a0,e.charCodeAt(0)==0?e:e,f)},
iA:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.c)a.a+="uniform samplerCube "+c+"Txt;\n"},
iB:function(a,b,c){var u,t="Txt, txtCube).rgb;\n"
A.iA(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.iT(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.c){u+="   "+c+"Color = "+c+"Clr*textureCube("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.c){u+="   "+c+"Color = textureCube("+c+t
a.a=u}a.a=u+"}\n"},
lA:function(a,b){var u,t=a.a,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.iA(b,t,"emission")
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
lx:function(a,b){var u,t=a.b
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.iB(b,t,"ambient")
b.a+="\n"},
ly:function(a,b){var u,t=a.c
if(!t.a)u=t.c
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
lB:function(a,b){var u,t=a.d
if(!t.a)u=t.c
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
lH:function(a,b){var u,t=a.e
if(!t.a)u=t.c
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
lD:function(a,b){var u,t,s
if(!a.k3)return
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
lF:function(a,b){var u,t=a.r,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.iA(b,t,"reflect")
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
lG:function(a,b){var u,t=a.x,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.iA(b,t,"refract")
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
lz:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.e(u)
s=A.iT(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.as()
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
r=[P.u]
o=H.c([],r)
n=a.b
if(!n.a)n=n.c
else n=!0
if(n)o.push("ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.c([],r)
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
c.a+="      highLight = intensity*("+C.a.u(m," + ")+");\n"}else c.a+="   highLight = "+C.a.u(m," + ")+";\n"
o.push("highLight")}r=c.a+="   return lit.color*("+C.a.u(o," + ")+");\n"
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
lE:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.e(u)
s=A.iT(t)
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
if(typeof u!=="number")return u.as()
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
c.a=r+"\n"}r=[P.u]
l=H.c([],r)
l.push("lit.color")
if(o)l.push("attenuation")
if(u)l.push("textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.a.u(l," * ")+";\n"
o+="}\n"
c.a=o
o+="\n"
c.a=o
o+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+m+")\n"
c.a=o
c.a=o+"{\n"
l=H.c([],r)
o=a.b
if(!o.a)o=o.c
else o=!0
if(o)l.push("ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
l.push("highLight")
m=u?", txtCube":""
if(p)m+=", shadowCube"
o=c.a+="   vec3 normDir = normalize(viewPos - lit.viewPnt);\n"
o+="   vec3 intensity = "+t+"Intensity(normDir, lit"+m+");\n"
c.a=o
c.a=o+"   if(length(intensity) > 0.0001) {\n"
k=H.c([],r)
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
r=c.a+="      highLight = intensity*("+C.a.u(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.a.u(l," + ")+");\n"
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
lI:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.e(u)
s=A.iT(t)
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
if(typeof u!=="number")return u.as()
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
c.a=u+"\n"}u=[P.u]
j=H.c([],u)
if(n)j.push("attenuation")
if(o)j.push("scale")
if(m)j.push("texture2D(txt2D, txtLoc).rgb")
else j.push("vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.a.u(j," * ")+";\n"
r+="}\n"
c.a=r
r+="\n"
c.a=r
r+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+k+")\n"
c.a=r
c.a=r+"{\n"
j=H.c([],u)
r=a.b
if(!r.a)r=r.c
else r=!0
if(r)j.push("ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
j.push("highLight")
k=m?", txt2D":""
if(p)k+=", shadow2D"
r=c.a+="   vec3 intensity = "+t+"Intensity(lit"+k+");\n"
r+="   if(length(intensity) > 0.0001) {\n"
c.a=r
c.a=r+"      vec3 litVec = normalize(viewPos - lit.viewPnt);\n"
i=H.c([],u)
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
u=c.a+="      highLight = intensity*("+C.a.u(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.a.u(j," + ")+");\n"
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
lC:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.c([],[P.u])
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
u=b.a+="   return "+C.a.u(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
lJ:function(a){var u,t,s,r,q,p,o,n,m,l="   lightAccum += all",k="precision mediump float;\n\n",j="precision mediump float;\n\nvarying vec3 normalVec;\n",i=new P.ay("")
i.a="precision mediump float;\n"
i.a=k
u=a.k3
if(u){i.a=j
t=j}else t=k
if(a.k4){t+="varying vec3 binormalVec;\n"
i.a=t}if(a.r1){t+="varying vec2 txt2D;\n"
i.a=t}if(a.r2){t+="varying vec3 txtCube;\n"
i.a=t}if(a.k1){t+="varying vec3 objPos;\n"
i.a=t}t=i.a=(a.k2?i.a=t+"varying vec3 viewPos;\n":t)+"\n"
s=a.x2
if(s){t+="uniform mat4 colorMat;\n"
i.a=t}if(a.dx)t=i.a=t+"uniform mat4 invViewMat;\n"
i.a=t+"\n"
A.lA(a,i)
A.lx(a,i)
A.ly(a,i)
A.lB(a,i)
A.lH(a,i)
t=a.cy
if(t){r=i.a+="// === Enviromental ===\n"
r+="\n"
i.a=r
r+="uniform samplerCube envSampler;\n"
i.a=r
i.a=r+"\n"
A.lF(a,i)
A.lG(a,i)}A.lD(a,i)
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
r=a.id
if(r){for(q=a.z,p=q.length,n=0;n<q.length;q.length===p||(0,H.n)(q),++n)A.lz(a,q[n],i)
for(q=a.Q,p=q.length,n=0;n<q.length;q.length===p||(0,H.n)(q),++n)A.lE(a,q[n],i)
for(q=a.ch,p=q.length,n=0;n<q.length;q.length===p||(0,H.n)(q),++n)A.lI(a,q[n],i)
A.lC(a,i)}q=i.a+="// === Main ===\n"
q+="\n"
i.a=q
q+="void main()\n"
i.a=q
q+="{\n"
i.a=q
q=i.a=q+"   float alpha = alphaValue();\n"
u=u?i.a=q+"   vec3 norm = normal();\n":q
if(t)i.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
m=H.c([],[P.u])
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
for(u=a.z,t=u.length,n=0;n<u.length;u.length===t||(0,H.n)(u),++n){r=u[n].h(0)
if(0>=r.length)return H.b(r,0)
i.a+=l+(r[0].toUpperCase()+C.c.aN(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,n=0;n<u.length;u.length===t||(0,H.n)(u),++n){r=u[n].h(0)
if(0>=r.length)return H.b(r,0)
i.a+=l+(r[0].toUpperCase()+C.c.aN(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,n=0;n<u.length;u.length===t||(0,H.n)(u),++n){r=u[n].h(0)
if(0>=r.length)return H.b(r,0)
i.a+=l+(r[0].toUpperCase()+C.c.aN(r,1))+"Values(norm);\n"}if(a.cx<=0)i.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
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
u=i.a+="   vec4 objClr = vec4("+C.a.u(m," + ")+", alpha);\n"
if(s)u=i.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
i.a=u
u=i.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
lK:function(a,b){var u,t,s
if(!a.rx)return
u=b.a+="struct BendingValue\n"
u+="{\n"
b.a=u
u+="   mat4 mat;\n"
b.a=u
u+="};\n"
b.a=u
b.a=u+"uniform int bendMatCount;\n"
u=b.a+="uniform BendingValue bendValues["+a.y2+"];\n"
u+="attribute vec4 bendAttr;\n"
b.a=u
u+="\n"
b.a=u
u+="float weightSum;\n"
b.a=u
u=b.a=u+"vec3 bendPos;\n"
t=a.k3
if(t){u+="vec3 bendNorm;\n"
b.a=u}s=a.k4
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
lM:function(a,b){var u
if(!a.k3)return
u=b.a+="varying vec3 normalVec;\n"
u+="\n"
b.a=u
u+="vec3 getNorm()\n"
b.a=u
u+="{\n"
b.a=u
u+="   return normalize((viewObjMat*vec4("+(a.rx?"bendNorm":"normAttr")+", 0.0)).xyz);\n"
b.a=u
u+="}\n"
b.a=u
b.a=u+"\n"},
lL:function(a,b){var u
if(!a.k4)return
u=b.a+="varying vec3 binormalVec;\n"
u+="\n"
b.a=u
u+="vec3 getBinm()\n"
b.a=u
u+="{\n"
b.a=u
u+="   return normalize((viewObjMat*vec4("+(a.rx?"bendBinm":"binmAttr")+", 0.0)).xyz);\n"
b.a=u
u+="}\n"
b.a=u
b.a=u+"\n"},
lO:function(a,b){var u,t
if(!a.r1)return
u=a.ry
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
lP:function(a,b){var u,t
if(!a.r2)return
u=a.x1
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
lN:function(a,b){var u
if(!a.k1)return
u=b.a+="varying vec3 objPos;\n"
u+="\n"
b.a=u
u+="vec3 getObjPos()\n"
b.a=u
u+="{\n"
b.a=u
u+="   return (objMat*vec4("+(a.rx?"bendPos":"posAttr")+", 1.0)).xyz;\n"
b.a=u
u+="}\n"
b.a=u
b.a=u+"\n"},
lQ:function(a,b){var u
if(!a.k2)return
u=b.a+="varying vec3 viewPos;\n"
u+="\n"
b.a=u
u+="vec3 getViewPos()\n"
b.a=u
u+="{\n"
b.a=u
u+="   return (viewObjMat*vec4("+(a.rx?"bendPos":"posAttr")+", 1.0)).xyz;\n"
b.a=u
u+="}\n"
b.a=u
b.a=u+"\n"},
iT:function(a){if(0>=a.length)return H.b(a,0)
return a[0].toUpperCase()+C.c.aN(a,1)},
li:function(a,b){var u,t,s,r
for(u=0,t="precision mediump float;\n\nuniform vec4 backClr;\n\nvarying vec2 pos;\n\nuniform int txtCount;\n";u<a;++u)t=t+("uniform sampler2D txt"+u+";\n")+("uniform mat4 clrMat"+u+";\n")+("uniform vec2 srcLoc"+u+";\n")+("uniform vec2 srcSize"+u+";\n")+("uniform vec2 destLoc"+u+";\n")+("uniform vec2 destSize"+u+";\n")+("uniform int flip"+u+";\n")
t+="\nvec4 clrAccum;\n"
s=b===C.D
t=(s||b===C.o?t+"float colorCount;\n":t)+"\nvoid layout(sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      color = clamp(color, vec4(0.0), vec4(1.0));\n"
if(b===C.p)t+="      clrAccum += color;\n"
else if(b===C.h)t+="      clrAccum = mix(clrAccum, color, color.a);\n"
else t=s?t+"      clrAccum += color;\n      colorCount += 1.0;\n":t+"      clrAccum = color;\n      colorCount = 1.0;\n"
t+="   }\n}\n\nvoid layoutAll()\n{\n"
r=b===C.o
if(r)for(u=a-1;u>=0;--u)t=t+("   if(txtCount > "+u+")\n")+"   {\n"+("     layout(txt"+u+", clrMat"+u+", srcLoc"+u+", srcSize"+u+", destLoc"+u+", destSize"+u+", flip"+u+");\n")+"     if(colorCount > 0.0) return;\n   }\n"
else for(u=0;u<a;++u)t=t+("   if(txtCount <= "+u+") return;\n")+("   layout(txt"+u+", clrMat"+u+", srcLoc"+u+", srcSize"+u+", destLoc"+u+", destSize"+u+", flip"+u+");\n")
t+="}\n\nvoid main()\n{\n   clrAccum = backClr;\n"
if(s)t+="   colorCount = 1.0;\n"
else if(r)t+="   colorCount = 0.0;\n"
t+="   layoutAll();\n"
t=(s?t+"   clrAccum = clrAccum/colorCount;\n":t)+"   if(clrAccum.a <= 0.0) discard;\n   gl_FragColor = clrAccum;\n}\n"
return t.charCodeAt(0)==0?t:t},
lh:function(a,b,c){var u="TextureLayout_"+a+"_"+C.d.h(b.a),t=new A.hu(c,u)
t.bg(c,u)
t.e2(a,b,c)
return t},
jd:function(a,b,c,d,e){var u=new A.hH(a,c,e)
u.f=d
P.kX(d,0,P.z)
return u},
ci:function ci(a,b,c){this.a=a
this.b=b
this.c=c},
ej:function ej(a){this.a=a},
V:function V(a,b,c){this.a=a
this.b=b
this.c=c},
f0:function f0(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
f1:function f1(a,b){this.a=a
this.b=b},
fl:function fl(a,b){var _=this
_.da=_.hE=_.d9=_.b7=_.aU=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.hM=_.hL=_.hK=_.bZ=_.bY=_.bX=_.bW=_.bV=_.bU=_.dn=_.hJ=_.dm=_.dl=_.hI=_.dk=_.dj=_.di=_.hH=_.dh=_.dg=_.df=_.hG=_.de=_.dd=_.hF=_.dc=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cq:function cq(a,b){this.a=a
this.b=b},
cS:function cS(a,b){this.a=a
this.b=b},
d_:function d_(a,b){this.a=a
this.b=b},
fp:function fp(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.aU=b3
_.b7=b4},
bX:function bX(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
bY:function bY(a,b,c,d,e,f,g,h,i,j){var _=this
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
bZ:function bZ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
bb:function bb(a,b){this.a=a
this.b=b},
hu:function hu(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
db:function db(){},
hL:function hL(a){this.a=a},
b2:function b2(a,b,c){this.a=a
this.c=b
this.d=c},
hI:function hI(a,b,c){this.a=a
this.c=b
this.d=c},
hJ:function hJ(a,b,c){this.a=a
this.c=b
this.d=c},
hK:function hK(a,b,c){this.a=a
this.c=b
this.d=c},
hH:function hH(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
N:function N(a,b,c){this.a=a
this.c=b
this.d=c},
ap:function ap(a,b,c){this.a=a
this.c=b
this.d=c},
F:function F(a,b,c){this.a=a
this.c=b
this.d=c},
b3:function b3(a,b,c){this.a=a
this.c=b
this.d=c},
hM:function hM(a,b,c){this.a=a
this.c=b
this.d=c},
bp:function bp(a,b,c){this.a=a
this.c=b
this.d=c},
W:function W(a,b,c){this.a=a
this.c=b
this.d=c},
ae:function ae(a,b,c){this.a=a
this.c=b
this.d=c},
R:function R(a,b,c){this.a=a
this.c=b
this.d=c}},F={
kc:function(a,b,c,d){var u=F.h5()
F.cb(u,b,c,d,a,1,0,0,1)
F.cb(u,b,c,d,a,0,1,0,3)
F.cb(u,b,c,d,a,0,0,1,2)
F.cb(u,b,c,d,a,-1,0,0,0)
F.cb(u,b,c,d,a,0,-1,0,0)
F.cb(u,b,c,d,a,0,0,-1,3)
u.aq()
return u},
iz:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cb:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.w(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.w(u+a3,t+a1,s+a2)
q=new V.w(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.w(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.iz(i)
l=F.iz(j.b)
k=F.km(d,a0,new F.iy(j,F.iz(j.c),F.iz(j.d),l,m,c),b)
if(k!=null)a.aX(k)},
ke:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(e<3)return
u=F.h5()
t=b?-1:1
s=-6.283185307179586/e
r=H.c([],[F.aB])
q=u.a
p=new V.w(0,0,t)
p=p.q(0,Math.sqrt(p.B(p)))
r.push(q.fK(new V.a8(a,-1,-1,-1),new V.U(1,1,1,1),new V.L(0,0,c),new V.w(0,0,t),new V.O(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.t(k)
j=new V.w(m,l,t).q(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.dh(new V.a8(a,-1,-1,-1),null,new V.U(i,g,h,1),new V.L(m*k,l*k,c),new V.w(0,0,t),new V.O(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.k(0,f)
r.push(f)}u.d.cS(r)
return u},
kd:function(a,b,c){return F.m4(!0,!0,1,new F.iE(a,c),b)},
m4:function(a,b,c,d,e){var u
if(e<3)return
if(c<1)return
u=F.km(c,e,new F.iF(d),null)
if(u==null)return
u.aq()
u.cV()
u.aX(F.ke(3,!1,1,new F.iG(d),e))
u.aX(F.ke(1,!0,-1,new F.iH(d),e))
return u},
mp:function(a){var u,t,s={}
s.a=u
s.a=null
s.a=new F.iQ()
t=F.kc(8,null,new F.iR(s,a),8)
t.cV()
return t},
km:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.h5()
t=H.c([],[F.aB])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.dh(g,g,new V.U(p,0,0,1),g,g,new V.O(r,1),g,g,0)
q.k(0,o)
c.$3(o,r,0)
t.push(o.bQ(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.dh(g,g,new V.U(j,i,h,1),g,g,new V.O(r,m),g,g,0)
k.k(0,o)
c.$3(o,r,n)
t.push(o.bQ(d))}}u.d.fJ(a+1,b+1,t)
return u},
bF:function(a,b,c){var u=new F.aL(),t=a.a
if(t==null)H.q(P.o("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.q(P.o("May not create a face with vertices attached to different shapes."))
u.bE(a)
u.bF(b)
u.fv(c)
u.a.a.d.b.push(u)
u.a.a.X()
return u},
kT:function(a,b){var u=new F.bK(),t=a.a
if(t==null)H.q(P.o("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.q(P.o("May not create a line with vertices attached to different shapes."))
u.bE(a)
u.bF(b)
u.a.a.c.b.push(u)
u.a.a.X()
return u},
h5:function(){var u=new F.h4(),t=new F.hU(u)
t.b=!1
t.c=H.c([],[F.aB])
u.a=t
t=new F.h8(u)
t.b=H.c([],[F.bS])
u.b=t
t=new F.h7(u)
t.b=H.c([],[F.bK])
u.c=t
t=new F.h6(u)
t.b=H.c([],[F.aL])
u.d=t
u.e=null
return u},
dh:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.aB(),r=new F.i1()
r.b=H.c([],[F.bS])
s.b=r
r=new F.hY()
u=[F.bK]
r.b=H.c([],u)
r.c=H.c([],u)
s.c=r
r=new F.hV()
u=[F.aL]
r.b=H.c([],u)
r.c=H.c([],u)
r.d=H.c([],u)
s.d=r
h=$.kA()
s.e=0
r=$.a3()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aG().a)!==0?e:t
s.x=(u&$.aF().a)!==0?b:t
s.y=(u&$.ar().a)!==0?f:t
s.z=(u&$.aH().a)!==0?g:t
s.Q=(u&$.kB().a)!==0?c:t
s.ch=(u&$.bx().a)!==0?i:0
s.cx=(u&$.aE().a)!==0?a:t
return s},
iy:function iy(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iE:function iE(a,b){this.a=a
this.b=b},
iF:function iF(a){this.a=a},
iG:function iG(a){this.a=a},
iH:function iH(a){this.a=a},
iQ:function iQ(){},
iR:function iR(a,b){this.a=a
this.b=b},
aL:function aL(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
eS:function eS(){},
hc:function hc(){},
bK:function bK(){this.b=this.a=null},
fb:function fb(){},
hG:function hG(){},
bS:function bS(){this.a=null},
h4:function h4(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
h6:function h6(a){this.a=a
this.b=null},
h7:function h7(a){this.a=a
this.b=null},
h8:function h8(a){this.a=a
this.b=null},
aB:function aB(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i3:function i3(a){this.a=a},
i2:function i2(a){this.a=a},
hU:function hU(a){this.a=a
this.c=this.b=null},
hV:function hV(){this.d=this.c=this.b=null},
hW:function hW(a,b){this.a=a
this.b=b},
hX:function hX(a,b){this.a=a
this.b=b},
hY:function hY(){this.c=this.b=null},
i_:function i_(){},
hZ:function hZ(){},
i0:function i0(){},
fM:function fM(){},
i1:function i1(){this.b=null}}
var w=[C,H,J,P,W,T,R,O,E,Z,D,X,V,U,M,A,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.j7.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gI:function(a){return H.bU(a)},
h:function(a){return"Instance of '"+H.e(H.bV(a))+"'"}}
J.f6.prototype={
h:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$ib7:1}
J.cC.prototype={
p:function(a,b){return null==b},
h:function(a){return"null"},
gI:function(a){return 0}}
J.cD.prototype={
gI:function(a){return 0},
h:function(a){return String(a)}}
J.fR.prototype={}
J.c_.prototype={}
J.aS.prototype={
h:function(a){var u=a[$.kp()]
if(u==null)return this.dX(a)
return"JavaScript function for "+H.e(J.a4(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.aR.prototype={
dI:function(a,b){if(!!a.fixed$length)H.q(P.Z("removeAt"))
if(b<0||b>=a.length)throw H.f(P.cT(b,null))
return a.splice(b,1)[0]},
C:function(a,b){var u
if(!!a.fixed$length)H.q(P.Z("remove"))
for(u=0;u<a.length;++u)if(J.v(a[u],b)){a.splice(u,1)
return!0}return!1},
bG:function(a,b){var u,t
if(!!a.fixed$length)H.q(P.Z("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.n)(b),++t)a.push(b[t])},
L:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.f(P.bD(a))}},
u:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.b(r,u)
r[u]=t}return r.join(b)},
h0:function(a){return this.u(a,"")},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
cm:function(a,b,c){var u=a.length
if(b>u)throw H.f(P.an(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.f(P.an(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.ec(a,0)])
return H.c(a.slice(b,c),[H.ec(a,0)])},
cl:function(a,b){return this.cm(a,b,null)},
gfX:function(a){if(a.length>0)return a[0]
throw H.f(H.jC())},
gc2:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.f(H.jC())},
bf:function(a,b){if(!!a.immutable$list)H.q(P.Z("sort"))
H.cZ(a,0,a.length-1,b)},
ae:function(a,b){var u
for(u=0;u<a.length;++u)if(J.v(a[u],b))return!0
return!1},
h:function(a){return P.j4(a,"[","]")},
gS:function(a){return new J.T(a,a.length)},
gI:function(a){return H.bU(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.q(P.Z("set length"))
if(b<0)throw H.f(P.an(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){if(b>=a.length||b<0)throw H.f(H.bv(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.q(P.Z("indexed set"))
if(b>=a.length||b<0)throw H.f(H.bv(a,b))
a[b]=c},
$ij:1}
J.j6.prototype={}
J.T.prototype={
gK:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.f(H.n(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bJ.prototype={
fP:function(a,b){var u
if(typeof b!=="number")throw H.f(H.aC(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gb9(b)
if(this.gb9(a)===u)return 0
if(this.gb9(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gb9:function(a){return a===0?1/a<0:a<0},
hr:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.f(P.Z(""+a+".toInt()"))},
c_:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.f(P.Z(""+a+".floor()"))},
U:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.Z(""+a+".round()"))},
dM:function(a,b){var u
if(b>20)throw H.f(P.an(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gb9(a))return"-"+u
return u},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gI:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
n:function(a,b){if(typeof b!=="number")throw H.f(H.aC(b))
return a*b},
dP:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
dY:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cP(a,b)},
a1:function(a,b){return(a|0)===a?a/b|0:this.cP(a,b)},
cP:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.f(P.Z("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
b4:function(a,b){var u
if(a>0)u=this.fB(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
fB:function(a,b){return b>31?0:a>>>b},
$iG:1,
$iab:1}
J.cB.prototype={$iz:1}
J.cA.prototype={}
J.be.prototype={
bP:function(a,b){if(b<0)throw H.f(H.bv(a,b))
if(b>=a.length)H.q(H.bv(a,b))
return a.charCodeAt(b)},
b2:function(a,b){if(b>=a.length)throw H.f(H.bv(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(typeof b!=="string")throw H.f(P.jt(b,null,null))
return a+b},
cn:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.f(P.cT(b,null))
if(b>c)throw H.f(P.cT(b,null))
if(c>a.length)throw H.f(P.cT(c,null))
return a.substring(b,c)},
aN:function(a,b){return this.cn(a,b,null)},
n:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.B)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ah:function(a,b){var u=b-a.length
if(u<=0)return a
return this.n(" ",u)+a},
h:function(a){return a},
gI:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gj:function(a){return a.length},
$iu:1}
H.J.prototype={
gj:function(a){return this.a.length},
i:function(a,b){return C.c.bP(this.a,b)},
$ap:function(){return[P.z]},
$aj:function(){return[P.z]}}
H.eN.prototype={}
H.cH.prototype={
gK:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=J.jj(s),q=r.gj(s)
if(t.b!==q)throw H.f(P.bD(s))
u=t.c
if(u>=q){t.d=null
return!1}t.d=r.H(s,u);++t.c
return!0}}
H.fj.prototype={
gS:function(a){return new H.fk(J.by(this.a),this.b)},
gj:function(a){return J.bz(this.a)},
H:function(a,b){return this.b.$1(J.js(this.a,b))},
$aj:function(a,b){return[b]}}
H.fk.prototype={
A:function(){var u=this,t=u.b
if(t.A()){u.a=u.c.$1(t.gK(t))
return!0}u.a=null
return!1},
gK:function(a){return this.a}}
H.i5.prototype={
gS:function(a){return new H.i6(J.by(this.a),this.b)}}
H.i6.prototype={
A:function(){var u,t
for(u=this.a,t=this.b;u.A();)if(t.$1(u.gK(u)))return!0
return!1},
gK:function(a){var u=this.a
return u.gK(u)}}
H.cv.prototype={}
H.hP.prototype={}
H.dc.prototype={}
H.hE.prototype={
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
H.fN.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.f8.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.hO.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.iV.prototype={
$1:function(a){if(!!J.S(a).$ibc)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:8}
H.dR.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bC.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
ghv:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.ho.prototype={}
H.hi.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.ed(u)+"'"}}
H.bA.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bA))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gI:function(a){var u,t=this.c
if(t==null)u=H.bU(this.a)
else u=typeof t!=="object"?J.b8(t):H.bU(t)
return(u^H.bU(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.bV(u))+"'")}}
H.es.prototype={
h:function(a){return this.a}}
H.h1.prototype={
h:function(a){return"RuntimeError: "+H.e(this.a)}}
H.I.prototype={
gj:function(a){return this.a},
gax:function(a){return new H.cG(this,[H.ec(this,0)])},
d2:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cC(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cC(t,b)}else return s.fZ(b)},
fZ:function(a){var u=this.d
if(u==null)return!1
return this.c1(this.bn(u,J.b8(a)&0x3ffffff),a)>=0},
i:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.b3(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.b3(r,b)
s=t==null?null:t.b
return s}else return q.h_(b)},
h_:function(a){var u,t,s=this.d
if(s==null)return
u=this.bn(s,J.b8(a)&0x3ffffff)
t=this.c1(u,a)
if(t<0)return
return u[t].b},
m:function(a,b,c){var u,t,s,r,q,p,o=this
if(typeof b==="string"){u=o.b
o.cv(u==null?o.b=o.bw():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.cv(t==null?o.c=o.bw():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bw()
r=J.b8(b)&0x3ffffff
q=o.bn(s,r)
if(q==null)o.bC(s,r,[o.bx(b,c)])
else{p=o.c1(q,b)
if(p>=0)q[p].b=c
else q.push(o.bx(b,c))}}},
L:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.f(P.bD(u))
t=t.c}},
cv:function(a,b,c){var u=this.b3(a,b)
if(u==null)this.bC(a,b,this.bx(b,c))
else u.b=c},
bx:function(a,b){var u=this,t=new H.fc(a,b)
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
c1:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.v(a[t].a,b))return t
return-1},
h:function(a){return P.jF(this)},
b3:function(a,b){return a[b]},
bn:function(a,b){return a[b]},
bC:function(a,b,c){a[b]=c},
ei:function(a,b){delete a[b]},
cC:function(a,b){return this.b3(a,b)!=null},
bw:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bC(t,u,t)
this.ei(t,u)
return t}}
H.fc.prototype={}
H.cG.prototype={
gj:function(a){return this.a.a},
gS:function(a){var u=this.a,t=new H.fd(u,u.r)
t.c=u.e
return t}}
H.fd.prototype={
gK:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.bD(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.iK.prototype={
$1:function(a){return this.a(a)},
$S:8}
H.iL.prototype={
$2:function(a,b){return this.a(a,b)}}
H.iM.prototype={
$1:function(a){return this.a(a)}}
H.f7.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.bR.prototype={}
H.cM.prototype={
gj:function(a){return a.length},
$ix:1,
$ax:function(){}}
H.bQ.prototype={
i:function(a,b){H.b5(b,a,a.length)
return a[b]},
$ap:function(){return[P.G]},
$ij:1,
$aj:function(){return[P.G]}}
H.cN.prototype={
$ap:function(){return[P.z]},
$ij:1,
$aj:function(){return[P.z]}}
H.fG.prototype={
i:function(a,b){H.b5(b,a,a.length)
return a[b]}}
H.fH.prototype={
i:function(a,b){H.b5(b,a,a.length)
return a[b]}}
H.fI.prototype={
i:function(a,b){H.b5(b,a,a.length)
return a[b]}}
H.fJ.prototype={
i:function(a,b){H.b5(b,a,a.length)
return a[b]}}
H.fK.prototype={
i:function(a,b){H.b5(b,a,a.length)
return a[b]}}
H.cO.prototype={
gj:function(a){return a.length},
i:function(a,b){H.b5(b,a,a.length)
return a[b]}}
H.fL.prototype={
gj:function(a){return a.length},
i:function(a,b){H.b5(b,a,a.length)
return a[b]}}
H.c3.prototype={}
H.c4.prototype={}
H.c5.prototype={}
H.c6.prototype={}
P.i8.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:17}
P.i7.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.i9.prototype={
$0:function(){this.a.$0()}}
P.ia.prototype={
$0:function(){this.a.$0()}}
P.dX.prototype={
e6:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bu(new P.iv(this,b),0),a)
else throw H.f(P.Z("`setTimeout()` not found."))},
e7:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bu(new P.iu(this,a,Date.now(),b),0),a)
else throw H.f(P.Z("Periodic timer."))},
$id6:1}
P.iv.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.iu.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.dY(u,q)}s.c=r
t.d.$1(s)}}
P.dj.prototype={}
P.d2.prototype={}
P.hl.prototype={}
P.d6.prototype={}
P.ix.prototype={}
P.iC.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.cQ():s
s=this.b
if(s==null)throw H.f(t)
u=H.f(t)
u.stack=s.h(0)
throw u}}
P.io.prototype={
hn:function(a){var u,t,s,r=null
try{if(C.e===$.af){a.$0()
return}P.lS(r,r,this,a)}catch(s){u=H.iU(s)
t=H.jm(s)
P.k8(r,r,this,u,t)}},
ho:function(a,b){var u,t,s,r=null
try{if(C.e===$.af){a.$1(b)
return}P.lT(r,r,this,a,b)}catch(s){u=H.iU(s)
t=H.jm(s)
P.k8(r,r,this,u,t)}},
hp:function(a,b){return this.ho(a,b,null)},
fM:function(a){return new P.ip(this,a)},
cX:function(a,b){return new P.iq(this,a,b)}}
P.ip.prototype={
$0:function(){return this.a.hn(this.b)}}
P.iq.prototype={
$1:function(a){return this.a.hp(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.ik.prototype={
gS:function(a){var u=new P.dz(this,this.r)
u.c=this.e
return u},
gj:function(a){return this.a},
k:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cz(u==null?s.b=P.jf():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cz(t==null?s.c=P.jf():t,b)}else return s.e9(0,b)},
e9:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.jf()
u=s.cA(b)
t=r[u]
if(t==null)r[u]=[s.bj(b)]
else{if(s.cF(t,b)>=0)return!1
t.push(s.bj(b))}return!0},
C:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fo(this.c,b)
else return this.fn(0,b)},
fn:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.el(r,b)
t=s.cF(u,b)
if(t<0)return!1
s.cQ(u.splice(t,1)[0])
return!0},
cz:function(a,b){if(a[b]!=null)return!1
a[b]=this.bj(b)
return!0},
fo:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.cQ(u)
delete a[b]
return!0},
cG:function(){this.r=1073741823&this.r+1},
bj:function(a){var u,t=this,s=new P.il(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cG()
return s},
cQ:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cG()},
cA:function(a){return J.b8(a)&1073741823},
el:function(a,b){return a[this.cA(b)]},
cF:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.v(a[t].a,b))return t
return-1}}
P.il.prototype={}
P.dz.prototype={
gK:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.bD(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fe.prototype={$ij:1}
P.p.prototype={
gS:function(a){return new H.cH(a,this.gj(a))},
H:function(a,b){return this.i(a,b)},
ht:function(a,b){var u,t,s=this,r=H.c([],[H.mc(s,a,"p",0)])
C.a.sj(r,s.gj(a))
for(u=0;u<s.gj(a);++u){t=s.i(a,u)
if(u>=r.length)return H.b(r,u)
r[u]=t}return r},
hs:function(a){return this.ht(a,!0)},
h:function(a){return P.j4(a,"[","]")}}
P.fh.prototype={}
P.fi.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:9}
P.at.prototype={
L:function(a,b){var u,t
for(u=J.by(this.gax(a));u.A();){t=u.gK(u)
b.$2(t,this.i(a,t))}},
gj:function(a){return J.bz(this.gax(a))},
h:function(a){return P.jF(a)}}
P.ir.prototype={
h:function(a){return P.j4(this,"{","}")},
H:function(a,b){var u,t,s
P.jP(b,"index")
for(u=P.lq(this,this.r),t=0;u.A();){s=u.d
if(b===t)return s;++t}throw H.f(P.E(b,this,"index",null,t))},
$ij:1}
P.dA.prototype={}
P.eu.prototype={}
P.ez.prototype={}
P.eO.prototype={}
P.hS.prototype={}
P.hT.prototype={
fQ:function(a){var u,t,s=P.jQ(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.iw(u)
if(t.ek(a,0,s)!==s)t.cR(C.c.bP(a,s-1),0)
return new Uint8Array(u.subarray(0,H.lu(0,t.b,u.length)))}}
P.iw.prototype={
cR:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
if((b&64512)===56320){u=65536+((a&1023)<<10)|b&1023
t.b=q
if(r>=p)return H.b(s,r)
s[r]=240|u>>>18
r=t.b=q+1
if(q>=p)return H.b(s,q)
s[q]=128|u>>>12&63
q=t.b=r+1
if(r>=p)return H.b(s,r)
s[r]=128|u>>>6&63
t.b=q+1
if(q>=p)return H.b(s,q)
s[q]=128|u&63
return!0}else{t.b=q
if(r>=p)return H.b(s,r)
s[r]=224|a>>>12
r=t.b=q+1
if(q>=p)return H.b(s,q)
s[q]=128|a>>>6&63
t.b=r+1
if(r>=p)return H.b(s,r)
s[r]=128|a&63
return!1}},
ek:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.c.bP(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.c.b2(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cR(r,C.c.b2(a,p)))s=p}else if(r<=2047){q=n.b
o=q+1
if(o>=t)break
n.b=o
if(q>=t)return H.b(u,q)
u[q]=192|r>>>6
n.b=o+1
u[o]=128|r&63}else{q=n.b
if(q+2>=t)break
o=n.b=q+1
if(q>=t)return H.b(u,q)
u[q]=224|r>>>12
q=n.b=o+1
if(o>=t)return H.b(u,o)
u[o]=128|r>>>6&63
n.b=q+1
if(q>=t)return H.b(u,q)
u[q]=128|r&63}}return s}}
P.b7.prototype={}
P.a6.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.a6&&this.a===b.a&&!0},
gI:function(a){var u=this.a
return(u^C.d.b4(u,30))&1073741823},
h:function(a){var u=this,t=P.kN(H.l7(u)),s=P.cp(H.l5(u)),r=P.cp(H.l1(u)),q=P.cp(H.l2(u)),p=P.cp(H.l4(u)),o=P.cp(H.l6(u)),n=P.kO(H.l3(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.G.prototype={}
P.aK.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.aK&&this.a===b.a},
gI:function(a){return C.d.gI(this.a)},
h:function(a){var u,t,s,r=new P.eM(),q=this.a
if(q<0)return"-"+new P.aK(0-q).h(0)
u=r.$1(C.d.a1(q,6e7)%60)
t=r.$1(C.d.a1(q,1e6)%60)
s=new P.eL().$1(q%1e6)
return""+C.d.a1(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
P.eL.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.eM.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bc.prototype={}
P.cQ.prototype={
h:function(a){return"Throw of null."}}
P.ag.prototype={
gbl:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbk:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbl()+o+u
if(!q.a)return t
s=q.gbk()
r=P.j3(q.b)
return t+s+": "+r}}
P.bl.prototype={
gbl:function(){return"RangeError"},
gbk:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.f4.prototype={
gbl:function(){return"RangeError"},
gbk:function(){var u,t=this.b
if(typeof t!=="number")return t.ab()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gj:function(a){return this.f}}
P.hQ.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.hN.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.hh.prototype={
h:function(a){return"Bad state: "+this.a}}
P.ey.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.j3(u)+"."}}
P.fQ.prototype={
h:function(a){return"Out of Memory"},
$ibc:1}
P.d0.prototype={
h:function(a){return"Stack Overflow"},
$ibc:1}
P.eF.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ds.prototype={
h:function(a){return"Exception: "+this.a}}
P.eZ.prototype={
h:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.c.cn(s,0,75)+"...":s
return t+"\n"+r}}
P.z.prototype={}
P.j.prototype={
gj:function(a){var u,t=this.gS(this)
for(u=0;t.A();)++u
return u},
H:function(a,b){var u,t,s
P.jP(b,"index")
for(u=this.gS(this),t=0;u.A();){s=u.gK(u)
if(b===t)return s;++t}throw H.f(P.E(b,this,"index",null,t))},
h:function(a){return P.kQ(this,"(",")")}}
P.f5.prototype={}
P.bh.prototype={$ij:1}
P.cJ.prototype={}
P.aU.prototype={
gI:function(a){return P.Y.prototype.gI.call(this,this)},
h:function(a){return"null"}}
P.ab.prototype={}
P.Y.prototype={constructor:P.Y,$iY:1,
p:function(a,b){return this===b},
gI:function(a){return H.bU(this)},
h:function(a){return"Instance of '"+H.e(H.bV(this))+"'"},
toString:function(){return this.h(this)}}
P.u.prototype={}
P.ay.prototype={
gj:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.l.prototype={}
W.ef.prototype={
gj:function(a){return a.length}}
W.eh.prototype={
h:function(a){return String(a)}}
W.ei.prototype={
h:function(a){return String(a)}}
W.cj.prototype={}
W.ba.prototype={
cg:function(a,b,c){if(c!=null)return a.getContext(b,P.m1(c))
return a.getContext(b)},
dO:function(a,b){return this.cg(a,b,null)},
$iba:1}
W.aJ.prototype={
gj:function(a){return a.length}}
W.eB.prototype={
gj:function(a){return a.length}}
W.C.prototype={$iC:1}
W.bE.prototype={
gj:function(a){return a.length}}
W.eC.prototype={}
W.a5.prototype={}
W.aj.prototype={}
W.eD.prototype={
gj:function(a){return a.length}}
W.eE.prototype={
gj:function(a){return a.length}}
W.eG.prototype={
gj:function(a){return a.length}}
W.eI.prototype={
h:function(a){return String(a)}}
W.cr.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ax:function(){return[[P.a9,P.ab]]},
$ap:function(){return[[P.a9,P.ab]]},
$ij:1,
$aj:function(){return[[P.a9,P.ab]]}}
W.cs.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gaj(a))+" x "+H.e(this.gaf(a))},
p:function(a,b){var u
if(b==null)return!1
u=J.S(b)
if(!u.$ia9)return!1
return a.left===u.gba(b)&&a.top===u.gbd(b)&&this.gaj(a)===u.gaj(b)&&this.gaf(a)===u.gaf(b)},
gI:function(a){return W.k6(C.b.gI(a.left),C.b.gI(a.top),C.b.gI(this.gaj(a)),C.b.gI(this.gaf(a)))},
gcZ:function(a){return a.bottom},
gaf:function(a){return a.height},
gba:function(a){return a.left},
gbc:function(a){return a.right},
gbd:function(a){return a.top},
gaj:function(a){return a.width},
$ia9:1,
$aa9:function(){return[P.ab]}}
W.eJ.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ax:function(){return[P.u]},
$ap:function(){return[P.u]},
$ij:1,
$aj:function(){return[P.u]}}
W.eK.prototype={
gj:function(a){return a.length}}
W.ic.prototype={
gj:function(a){return this.b.length},
i:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
k:function(a,b){this.a.appendChild(b)
return b},
gS:function(a){var u=this.hs(this)
return new J.T(u,u.length)},
$ap:function(){return[W.X]},
$aj:function(){return[W.X]}}
W.X.prototype={
gd_:function(a){return new W.ic(a,a.children)},
gd0:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.ab()
if(s<0)s=-s*0
if(typeof r!=="number")return r.ab()
if(r<0)r=-r*0
return new P.a9(u,t,s,r,[P.ab])},
h:function(a){return a.localName},
$iX:1}
W.i.prototype={$ii:1}
W.d.prototype={
fI:function(a,b,c,d){if(c!=null)this.ea(a,b,c,!1)},
ea:function(a,b,c,d){return a.addEventListener(b,H.bu(c,1),!1)}}
W.aM.prototype={$iaM:1}
W.eT.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.aM]},
$ap:function(){return[W.aM]},
$ij:1,
$aj:function(){return[W.aM]}}
W.eU.prototype={
gj:function(a){return a.length}}
W.eY.prototype={
gj:function(a){return a.length}}
W.aN.prototype={$iaN:1}
W.f2.prototype={
gj:function(a){return a.length}}
W.bH.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.H]},
$ap:function(){return[W.H]},
$ij:1,
$aj:function(){return[W.H]}}
W.aO.prototype={$iaO:1,
gd3:function(a){return a.data}}
W.bI.prototype={$ibI:1}
W.bf.prototype={$ibf:1}
W.ff.prototype={
h:function(a){return String(a)}}
W.fz.prototype={
gj:function(a){return a.length}}
W.fA.prototype={
i:function(a,b){return P.aD(a.get(b))},
L:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aD(u.value[1]))}},
gax:function(a){var u=H.c([],[P.u])
this.L(a,new W.fB(u))
return u},
gj:function(a){return a.size}}
W.fB.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fC.prototype={
i:function(a,b){return P.aD(a.get(b))},
L:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aD(u.value[1]))}},
gax:function(a){var u=H.c([],[P.u])
this.L(a,new W.fD(u))
return u},
gj:function(a){return a.size}}
W.fD.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aT.prototype={$iaT:1}
W.fE.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.aT]},
$ap:function(){return[W.aT]},
$ij:1,
$aj:function(){return[W.aT]}}
W.am.prototype={$iam:1}
W.ib.prototype={
gS:function(a){var u=this.a.childNodes
return new W.cw(u,u.length)},
gj:function(a){return this.a.childNodes.length},
i:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
$ap:function(){return[W.H]},
$aj:function(){return[W.H]}}
W.H.prototype={
h:function(a){var u=a.nodeValue
return u==null?this.dW(a):u},
$iH:1}
W.cP.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.H]},
$ap:function(){return[W.H]},
$ij:1,
$aj:function(){return[W.H]}}
W.aV.prototype={$iaV:1,
gj:function(a){return a.length}}
W.fS.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.aV]},
$ap:function(){return[W.aV]},
$ij:1,
$aj:function(){return[W.aV]}}
W.h_.prototype={
i:function(a,b){return P.aD(a.get(b))},
L:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aD(u.value[1]))}},
gax:function(a){var u=H.c([],[P.u])
this.L(a,new W.h0(u))
return u},
gj:function(a){return a.size}}
W.h0.prototype={
$2:function(a,b){return this.a.push(a)}}
W.h2.prototype={
gj:function(a){return a.length}}
W.aW.prototype={$iaW:1}
W.hd.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.aW]},
$ap:function(){return[W.aW]},
$ij:1,
$aj:function(){return[W.aW]}}
W.aX.prototype={$iaX:1}
W.he.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.aX]},
$ap:function(){return[W.aX]},
$ij:1,
$aj:function(){return[W.aX]}}
W.aY.prototype={$iaY:1,
gj:function(a){return a.length}}
W.hj.prototype={
i:function(a,b){return a.getItem(b)},
L:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gax:function(a){var u=H.c([],[P.u])
this.L(a,new W.hk(u))
return u},
gj:function(a){return a.length}}
W.hk.prototype={
$2:function(a,b){return this.a.push(a)}}
W.az.prototype={$iaz:1}
W.aZ.prototype={$iaZ:1}
W.aA.prototype={$iaA:1}
W.hp.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.aA]},
$ap:function(){return[W.aA]},
$ij:1,
$aj:function(){return[W.aA]}}
W.hq.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.aZ]},
$ap:function(){return[W.aZ]},
$ij:1,
$aj:function(){return[W.aZ]}}
W.hy.prototype={
gj:function(a){return a.length}}
W.b0.prototype={$ib0:1}
W.bn.prototype={$ibn:1}
W.hB.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.b0]},
$ap:function(){return[W.b0]},
$ij:1,
$aj:function(){return[W.b0]}}
W.hC.prototype={
gj:function(a){return a.length}}
W.b1.prototype={}
W.hR.prototype={
h:function(a){return String(a)}}
W.i4.prototype={
gj:function(a){return a.length}}
W.b4.prototype={
gfU:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.Z("deltaY is not supported"))},
gfT:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.Z("deltaX is not supported"))},
$ib4:1}
W.c2.prototype={
fq:function(a,b){return a.requestAnimationFrame(H.bu(b,1))},
ej:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.id.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.C]},
$ap:function(){return[W.C]},
$ij:1,
$aj:function(){return[W.C]}}
W.dm.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
p:function(a,b){var u
if(b==null)return!1
u=J.S(b)
if(!u.$ia9)return!1
return a.left===u.gba(b)&&a.top===u.gbd(b)&&a.width===u.gaj(b)&&a.height===u.gaf(b)},
gI:function(a){return W.k6(C.b.gI(a.left),C.b.gI(a.top),C.b.gI(a.width),C.b.gI(a.height))},
gaf:function(a){return a.height},
gaj:function(a){return a.width}}
W.ih.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.aN]},
$ap:function(){return[W.aN]},
$ij:1,
$aj:function(){return[W.aN]}}
W.dF.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.H]},
$ap:function(){return[W.H]},
$ij:1,
$aj:function(){return[W.H]}}
W.is.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.aY]},
$ap:function(){return[W.aY]},
$ij:1,
$aj:function(){return[W.aY]}}
W.it.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.az]},
$ap:function(){return[W.az]},
$ij:1,
$aj:function(){return[W.az]}}
W.ie.prototype={}
W.ig.prototype={
$1:function(a){return this.a.$1(a)}}
W.D.prototype={
gS:function(a){return new W.cw(a,this.gj(a))}}
W.cw.prototype={
A:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.ee(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gK:function(a){return this.d}}
W.dl.prototype={}
W.dn.prototype={}
W.dp.prototype={}
W.dq.prototype={}
W.dr.prototype={}
W.dt.prototype={}
W.du.prototype={}
W.dv.prototype={}
W.dw.prototype={}
W.dB.prototype={}
W.dC.prototype={}
W.dD.prototype={}
W.dE.prototype={}
W.dG.prototype={}
W.dH.prototype={}
W.dK.prototype={}
W.dL.prototype={}
W.dM.prototype={}
W.c7.prototype={}
W.c8.prototype={}
W.dN.prototype={}
W.dO.prototype={}
W.dS.prototype={}
W.dV.prototype={}
W.dW.prototype={}
W.c9.prototype={}
W.ca.prototype={}
W.dY.prototype={}
W.dZ.prototype={}
W.e2.prototype={}
W.e3.prototype={}
W.e4.prototype={}
W.e5.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.ea.prototype={}
W.eb.prototype={}
P.e1.prototype={$iaO:1,
gd3:function(a){return this.a}}
P.iD.prototype={
$2:function(a,b){this.a[a]=b},
$S:9}
P.eV.prototype={
gbo:function(){var u=this.b,t=H.jl(u,"p",0)
return new H.fj(new H.i5(u,new P.eW(),[t]),new P.eX(),[t,W.X])},
k:function(a,b){this.b.a.appendChild(b)},
gj:function(a){return J.bz(this.gbo().a)},
i:function(a,b){var u=this.gbo()
return u.b.$1(J.js(u.a,b))},
gS:function(a){var u=P.jE(this.gbo(),!1,W.X)
return new J.T(u,u.length)},
$ap:function(){return[W.X]},
$aj:function(){return[W.X]}}
P.eW.prototype={
$1:function(a){return!!J.S(a).$iX}}
P.eX.prototype={
$1:function(a){return H.h(a,"$iX")}}
P.im.prototype={
gbc:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.F()
if(typeof t!=="number")return H.t(t)
return u+t},
gcZ:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.F()
if(typeof t!=="number")return H.t(t)
return u+t},
h:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
p:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.S(b)
if(!!u.$ia9){t=q.a
if(t==u.gba(b)){s=q.b
if(s==u.gbd(b)){r=q.c
if(typeof t!=="number")return t.F()
if(typeof r!=="number")return H.t(r)
if(t+r===u.gbc(b)){t=q.d
if(typeof s!=="number")return s.F()
if(typeof t!=="number")return H.t(t)
u=s+t===u.gcZ(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gI:function(a){var u=this,t=u.a,s=J.b8(t),r=u.b,q=J.b8(r),p=u.c
if(typeof t!=="number")return t.F()
if(typeof p!=="number")return H.t(p)
p=C.d.gI(t+p)
t=u.d
if(typeof r!=="number")return r.F()
if(typeof t!=="number")return H.t(t)
t=C.d.gI(r+t)
return P.lp(P.ij(P.ij(P.ij(P.ij(0,s),q),p),t))}}
P.a9.prototype={
gba:function(a){return this.a},
gbd:function(a){return this.b},
gaj:function(a){return this.c},
gaf:function(a){return this.d}}
P.bg.prototype={$ibg:1}
P.fa.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a.getItem(b)},
H:function(a,b){return this.i(a,b)},
$ap:function(){return[P.bg]},
$ij:1,
$aj:function(){return[P.bg]}}
P.bi.prototype={$ibi:1}
P.fO.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a.getItem(b)},
H:function(a,b){return this.i(a,b)},
$ap:function(){return[P.bi]},
$ij:1,
$aj:function(){return[P.bi]}}
P.fU.prototype={
gj:function(a){return a.length}}
P.hm.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a.getItem(b)},
H:function(a,b){return this.i(a,b)},
$ap:function(){return[P.u]},
$ij:1,
$aj:function(){return[P.u]}}
P.k.prototype={
gd_:function(a){return new P.eV(a,new W.ib(a))}}
P.bo.prototype={$ibo:1}
P.hD.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a.getItem(b)},
H:function(a,b){return this.i(a,b)},
$ap:function(){return[P.bo]},
$ij:1,
$aj:function(){return[P.bo]}}
P.dx.prototype={}
P.dy.prototype={}
P.dI.prototype={}
P.dJ.prototype={}
P.dT.prototype={}
P.dU.prototype={}
P.e_.prototype={}
P.e0.prototype={}
P.ek.prototype={
gj:function(a){return a.length}}
P.el.prototype={
i:function(a,b){return P.aD(a.get(b))},
L:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aD(u.value[1]))}},
gax:function(a){var u=H.c([],[P.u])
this.L(a,new P.em(u))
return u},
gj:function(a){return a.size}}
P.em.prototype={
$2:function(a,b){return this.a.push(a)}}
P.en.prototype={
gj:function(a){return a.length}}
P.b9.prototype={}
P.fP.prototype={
gj:function(a){return a.length}}
P.dk.prototype={}
P.cW.prototype={
dL:function(a,b,c,d,e,f,g,h,i,j){var u,t=i==null
if(!t&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}u=J.S(g)
if(!!u.$iaO&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,P.m2(g))
return}if(!!u.$ibI&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.f(P.kG("Incorrect number or type of arguments"))},
hq:function(a,b,c,d,e,f,g){return this.dL(a,b,c,d,e,f,g,null,null,null)}}
P.hg.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return P.aD(a.item(b))},
H:function(a,b){return this.i(a,b)},
$ap:function(){return[[P.cJ,,,]]},
$ij:1,
$aj:function(){return[[P.cJ,,,]]}}
P.dP.prototype={}
P.dQ.prototype={}
T.eg.prototype={
aK:function(a,b){return!0},
h:function(a){return"all"}}
T.cz.prototype={
aK:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)if(u[s].aK(0,b))return!0
return!1},
h:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.n)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.h(0)}return s}}
T.cK.prototype={}
T.aw.prototype={
aK:function(a,b){return!this.dV(0,b)},
h:function(a){return"!["+this.co(0)+"]"}}
T.h3.prototype={
e0:function(a){var u,t
if(a.a.length<=0)throw H.f(P.o("May not create a Set with zero characters."))
u=new H.I([P.z,P.b7])
for(t=new H.cH(a,a.gj(a));t.A();)u.m(0,t.d,!0)
this.a=u},
aK:function(a,b){return this.a.d2(0,b)},
h:function(a){var u=this.a
return P.ja(new H.cG(u,[H.ec(u,0)]))}}
R.d1.prototype={
u:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new R.da(this.a.N(0,b))
r.a=H.c([],[T.cK])
r.c=!1
this.c.push(r)
return r},
fW:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
if(r.aK(0,a))return r}return},
h:function(a){return this.b}}
R.d7.prototype={
h:function(a){var u=H.kl(this.b,"\n","\\n"),t=H.kl(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
R.d8.prototype={
h:function(a){return this.b}}
R.hz.prototype={
N:function(a,b){var u=this.a.i(0,b)
if(u==null){u=new R.d1(this,b)
u.c=H.c([],[R.da])
this.a.m(0,b,u)}return u},
b0:function(a){var u,t=this.b.i(0,a)
if(t==null){t=new R.d8(a)
u=P.u
t.c=new H.I([u,u])
this.b.m(0,a,t)}return t},
hu:function(a){var u,t,s,r,q,p,o,n,m=H.c([],[R.d7]),l=this.c,k=[P.z],j=H.c([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)m.push(t)
return m}r=C.c.b2(a,s)
q=l.fW(r)
if(q==null){if(t==null){j.push(r)
p=P.ja(j)
throw H.f(P.o("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}m.push(t)
s=t.c+1
j=H.c([],k)
l=this.c
t=null}else{if(!q.c)j.push(r)
l=q.b
if(l.d!=null){p=P.ja(j)
o=l.d
n=o.c.i(0,p)
t=new R.d7(n==null?o.b:n,p,s)}++s}}}}
R.da.prototype={
h:function(a){return this.b.b+": "+this.co(0)}}
O.ai.prototype={
b1:function(a){this.a=H.c([],[a])
this.c=this.b=null},
ci:function(a,b,c){this.b=b
this.c=a},
aA:function(a,b){return this.ci(a,null,b)},
by:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
cH:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gj:function(a){return this.a.length},
gS:function(a){var u=this.a
return new J.T(u,u.length)},
H:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
k:function(a,b){var u,t,s=this,r=[H.jl(s,"ai",0)]
if(s.by(H.c([b],r))){u=s.a
t=u.length
u.push(b)
s.cH(t,H.c([b],r))}},
bG:function(a,b){var u,t
if(this.by(b)){u=this.a
t=u.length
C.a.bG(u,b)
this.cH(t,b)}},
$ij:1}
O.bN.prototype={
gj:function(a){return this.a.length},
gl:function(){var u=this.b
return u==null?this.b=D.A():u},
aC:function(){var u=this.b
if(u!=null)u.v(null)},
ga7:function(a){var u=this.a
if(u.length>0)return C.a.gc2(u)
else return V.au()},
bb:function(a){var u=this.a
if(a==null)u.push(V.au())
else u.push(a)
this.aC()},
b_:function(){var u=this.a
if(u.length>0){u.pop()
this.aC()}}}
E.eq.prototype={}
E.as.prototype={
cw:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.T(u,u.length);u.A();){t=u.d
if(t.f==null)t.cw()}},
saB:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gl().C(0,s.gdC())
u=s.c
if(u!=null)u.gl().k(0,s.gdC())
t=new D.m("shape",r,s.c)
t.b=!0
s.am(t)}},
saa:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gl().C(0,s.gdE())
u=s.f
s.f=a
if(a!=null)a.gl().k(0,s.gdE())
s.cw()
t=new D.m("technique",u,s.f)
t.b=!0
s.am(t)}},
sar:function(a){var u,t,s=this
if(!J.v(s.r,a)){u=s.r
if(u!=null)u.gl().C(0,s.gdA())
if(a!=null)a.gl().k(0,s.gdA())
s.r=a
t=new D.m("mover",u,a)
t.b=!0
s.am(t)}},
a3:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.an(0,b,s):null
if(!J.v(q,s.x)){u=s.x
s.x=q
t=new D.m("matrix",u,q)
t.b=!0
s.am(t)}r=s.f
if(r!=null)r.a3(0,b)
for(r=s.y.a,r=new J.T(r,r.length);r.A();)r.d.a3(0,b)},
Z:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)s.a.push(s.ga7(s))
else s.a.push(r.n(0,s.ga7(s)))
s.aC()
a.c9(t.f)
s=a.dy
u=(s&&C.a).gc2(s)
if(u!=null&&t.d!=null)u.cc(a,t)
for(s=t.y.a,s=new J.T(s,s.length);s.A();)s.d.Z(a)
a.c8()
a.dx.b_()},
am:function(a){var u=this.z
if(u!=null)u.v(a)},
X:function(){return this.am(null)},
dD:function(a){this.e=null
this.am(a)},
h9:function(){return this.dD(null)},
dF:function(a){this.am(a)},
ha:function(){return this.dF(null)},
dB:function(a){this.am(a)},
h8:function(){return this.dB(null)},
dz:function(a){this.am(a)},
h5:function(){return this.dz(null)},
h4:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gdw(),s=[{func:1,ret:-1,args:[D.K]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.ak()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}this.X()},
h7:function(a,b){var u,t
for(u=b.gS(b),t=this.gdw();u.A();)u.gK(u).gl().C(0,t)
this.X()},
h:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.fW.prototype={
e_:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.a6(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.bN()
t=[V.ac]
u.a=H.c([],t)
u.gl().k(0,new E.fX(s))
s.cy=u
u=new O.bN()
u.a=H.c([],t)
u.gl().k(0,new E.fY(s))
s.db=u
u=new O.bN()
u.a=H.c([],t)
u.gl().k(0,new E.fZ(s))
s.dx=u
u=H.c([],[O.d3])
s.dy=u
u.push(null)
s.fr=new H.I([P.u,A.cY])},
ghj:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga7(s)
u=t.db
u=t.z=s.n(0,u.ga7(u))
s=u}return s},
gdH:function(){var u,t=this,s=t.ch
if(s==null){s=t.ghj()
u=t.dx
u=t.ch=s.n(0,u.ga7(u))
s=u}return s},
c9:function(a){var u=this.dy
u.push(a==null?(u&&C.a).gc2(u):a)},
c8:function(){var u=this.dy
if(u.length>1)u.pop()},
bH:function(a){var u=a.b
if(u.length===0)throw H.f(P.o("May not cache a shader with no name."))
if(this.fr.d2(0,u))throw H.f(P.o('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.m(0,u,a)}}
E.fX.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.fY.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.fZ.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.d5.prototype={
ct:function(a){this.dJ()},
cs:function(){return this.ct(null)},
gfY:function(){var u,t=this,s=Date.now(),r=C.d.a1(P.jy(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.a6(s,!1)
return u/r},
cL:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.n()
if(typeof r!=="number")return H.t(r)
u=C.b.c_(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.n()
t=C.b.c_(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.jV(C.i,s.ghm())}},
dJ:function(){if(!this.cx){this.cx=!0
var u=window
C.u.ej(u)
C.u.fq(u,W.k9(new E.hx(this),P.ab))}},
hl:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.cL()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.a6(r,!1)
s.y=P.jy(r-s.r.a).a*0.000001
r=s.cy
C.a.sj(r.a,0)
r.aC()
r=s.db
C.a.sj(r.a,0)
r.aC()
r=s.dx
C.a.sj(r.a,0)
r.aC()
r=s.dy;(r&&C.a).sj(r,0)
s.dy.push(null)
o.Z(p.e)}}catch(q){u=H.iU(q)
t=H.jm(q)
P.jp("Error: "+H.e(u))
P.jp("Stack: "+H.e(t))
throw H.f(u)}}}
E.hx.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.hl()}}}
Z.di.prototype={}
Z.ck.prototype={
W:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.iU(s)
t=P.o('Failed to bind buffer attribute "'+r.a.h(0)+'": '+H.e(u))
throw H.f(t)}},
h:function(a){var u=this
return"["+u.a.h(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.c1.prototype={}
Z.aI.prototype={
al:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
W:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].W(a)},
az:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
Z:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.b(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
h:function(a){var u,t,s,r,q=[P.u],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)p.push(u[s].h(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a4(q[s]))
return"Buffer:  ["+this.a.h(0)+"]\nIndices: "+C.a.u(p,", ")+"\nAttrs:   "+C.a.u(r,", ")}}
Z.bd.prototype={
h:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.bV(this.c))+"'")+"]"}}
Z.aq.prototype={
gck:function(a){var u=this.a,t=(u&$.a3().a)!==0?3:0
if((u&$.aG().a)!==0)t+=3
if((u&$.aF().a)!==0)t+=3
if((u&$.ar().a)!==0)t+=2
if((u&$.aH().a)!==0)t+=3
if((u&$.cg().a)!==0)t+=3
if((u&$.ch().a)!==0)t+=4
if((u&$.bx().a)!==0)++t
return(u&$.aE().a)!==0?t+4:t},
fL:function(a){var u,t=$.a3(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aG()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aF()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ar()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aH()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cg()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ch()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bx()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aE()
if((s&t.a)!==0)if(u===a)return t
return $.kC()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aq))return!1
return this.a===b.a},
h:function(a){var u=H.c([],[P.u]),t=this.a
if((t&$.a3().a)!==0)u.push("Pos")
if((t&$.aG().a)!==0)u.push("Norm")
if((t&$.aF().a)!==0)u.push("Binm")
if((t&$.ar().a)!==0)u.push("Txt2D")
if((t&$.aH().a)!==0)u.push("TxtCube")
if((t&$.cg().a)!==0)u.push("Clr3")
if((t&$.ch().a)!==0)u.push("Clr4")
if((t&$.bx().a)!==0)u.push("Weight")
if((t&$.aE().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.a.u(u,"|")}}
D.et.prototype={}
D.ak.prototype={
k:function(a,b){var u=this.a;(u==null?this.a=H.c([],[{func:1,ret:-1,args:[D.K]}]):u).push(b)},
C:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.a.ae(s,b)
if(s===!0){s=t.a
u=(s&&C.a).C(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.a.ae(s,b)
if(s===!0){s=t.b
u=(s&&C.a).C(s,b)||u}return u},
v:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.K()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.L(P.jE(u,!0,{func:1,ret:-1,args:[D.K]}),new D.eQ(q))
u=r.b
if(u!=null){r.b=H.c([],[{func:1,ret:-1,args:[D.K]}])
C.a.L(u,new D.eR(q))}return!0},
bT:function(){return this.v(null)},
ai:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.v(u)}}}}
D.eQ.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.eR.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.K.prototype={}
D.aP.prototype={}
D.aQ.prototype={}
D.m.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cl.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cl))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.cE.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cE))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.f9.prototype={
hf:function(a){this.c=a.b
this.d.k(0,a.a)
return!1},
hb:function(a){this.c=a.b
this.d.C(0,a.a)
return!1}}
X.cI.prototype={}
X.fg.prototype={
aO:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.n()
u=b.b
t=q.ch
if(typeof u!=="number")return u.n()
s=new V.O(o.a+n*m,o.b+u*t)
t=q.a.gaI()
r=new X.av(a,V.ax(),q.x,t,s)
r.b=!0
q.z=new P.a6(p,!1)
q.x=s
return r},
c7:function(a,b){this.r=a.a
return!1},
aZ:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.dQ()
if(typeof u!=="number")return u.as()
this.r=(u&~t)>>>0
return!1},
aY:function(a,b){var u=this.d
if(u==null)return!1
u.v(this.aO(a,b))
return!0},
hg:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaI()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.n()
q=a.b
p=o.cy
if(typeof q!=="number")return q.n()
t=new X.bP(new V.B(s*r,q*p),u,t)
t.b=!0
n.v(t)
return!0},
eX:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.cI(c,r.a.gaI(),b)
s.b=!0
t.v(s)
r.y=new P.a6(u,!1)
r.x=V.ax()}}
X.a7.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.a7))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
h:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.av.prototype={}
X.fF.prototype={
bm:function(a,b,c){var u=this,t=new P.a6(Date.now(),!1),s=u.a.gaI(),r=new X.av(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
c7:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.v(this.bm(a,b,!0))
return!0},
aZ:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.dQ()
if(typeof t!=="number")return t.as()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.v(u.bm(a,b,!0))
return!0},
aY:function(a,b){var u=this.d
if(u==null)return!1
u.v(this.bm(a,b,!1))
return!0},
hh:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaI()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.n()
r=a.b
q=p.ch
if(typeof r!=="number")return r.n()
u=new X.bP(new V.B(t*s,r*q),u,b)
u.b=!0
o.v(u)
return!0},
gd5:function(){var u=this.b
return u==null?this.b=D.A():u},
gbe:function(){var u=this.c
return u==null?this.c=D.A():u},
gdu:function(){var u=this.d
return u==null?this.d=D.A():u}}
X.bP.prototype={}
X.fT.prototype={}
X.d9.prototype={}
X.hA.prototype={
aO:function(a,b){var u=this,t=new P.a6(Date.now(),!1),s=a.length>0?a[0]:V.ax(),r=u.a.gaI(),q=new X.d9(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
he:function(a){var u=this.b
if(u==null)return!1
u.v(this.aO(a,!0))
return!0},
hc:function(a){var u=this.c
if(u==null)return!1
u.v(this.aO(a,!0))
return!0},
hd:function(a){var u=this.d
if(u==null)return!1
u.v(this.aO(a,!1))
return!0}}
X.dd.prototype={
gaI:function(){var u=this.a,t=C.f.gd0(u).c
t.toString
u=C.f.gd0(u).d
u.toString
return V.fV(0,0,t,u)},
cD:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.cE(u,new X.a7(t,a.altKey,a.shiftKey))},
aH:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.a7(t,a.altKey,a.shiftKey)},
bD:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.a7(t,a.altKey,a.shiftKey)},
aw:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.J()
u=t.top
if(typeof r!=="number")return r.J()
return new V.O(s-q,r-u)},
aP:function(a){return new V.B(a.movementX,a.movementY)},
bz:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.O])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
q=C.b.U(r.pageX)
C.b.U(r.pageY)
p=o.left
C.b.U(r.pageX)
n.push(new V.O(q-p,C.b.U(r.pageY)-o.top))}return n},
au:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cl(u,new X.a7(t,a.altKey,a.shiftKey))},
bp:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.J()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.J()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
eR:function(a){this.f=!0},
eB:function(a){this.f=!1},
eH:function(a){if(this.f&&this.bp(a))a.preventDefault()},
eV:function(a){var u
if(!this.f)return
u=this.cD(a)
this.b.hf(u)},
eT:function(a){var u
if(!this.f)return
u=this.cD(a)
this.b.hb(u)},
eZ:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aH(a)
if(r.x){u=r.au(a)
t=r.aP(a)
if(r.d.c7(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.au(a)
s=r.aw(a)
if(r.c.c7(u,s))a.preventDefault()},
f2:function(a){var u,t,s,r=this
r.aH(a)
u=r.au(a)
if(r.x){t=r.aP(a)
if(r.d.aZ(u,t))a.preventDefault()
return}if(r.r)return
s=r.aw(a)
if(r.c.aZ(u,s))a.preventDefault()},
eL:function(a){var u,t,s,r=this
if(!r.bp(a)){r.aH(a)
u=r.au(a)
if(r.x){t=r.aP(a)
if(r.d.aZ(u,t))a.preventDefault()
return}if(r.r)return
s=r.aw(a)
if(r.c.aZ(u,s))a.preventDefault()}},
f0:function(a){var u,t,s,r=this
r.aH(a)
u=r.au(a)
if(r.x){t=r.aP(a)
if(r.d.aY(u,t))a.preventDefault()
return}if(r.r)return
s=r.aw(a)
if(r.c.aY(u,s))a.preventDefault()},
eJ:function(a){var u,t,s,r=this
if(!r.bp(a)){r.aH(a)
u=r.au(a)
if(r.x){t=r.aP(a)
if(r.d.aY(u,t))a.preventDefault()
return}if(r.r)return
s=r.aw(a)
if(r.c.aY(u,s))a.preventDefault()}},
f4:function(a){var u,t,s=this
s.aH(a)
u=new V.B((a&&C.t).gfT(a),C.t.gfU(a)).q(0,180)
if(s.x){if(s.d.hg(u))a.preventDefault()
return}if(s.r)return
t=s.aw(a)
if(s.c.hh(u,t))a.preventDefault()},
f6:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.au(s.y)
t=s.aw(s.y)
s.d.eX(u,t,r)}},
fm:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bD(a)
u=t.bz(a)
if(t.e.he(u))a.preventDefault()},
fi:function(a){var u
this.bD(a)
u=this.bz(a)
if(this.e.hc(u))a.preventDefault()},
fk:function(a){var u
this.bD(a)
u=this.bz(a)
if(this.e.hd(u))a.preventDefault()}}
D.eH.prototype={$ia0:1}
D.a0.prototype={}
D.cF.prototype={
a5:function(a){var u=this.x
if(u!=null)u.v(a)},
cJ:function(a){var u=this.y
if(u!=null)u.v(a)},
eW:function(){return this.cJ(null)},
f8:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.n)(a),++t){s=a[t]
if(s==null||this.ef(s))return!1}return!0},
ev:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcI(),s=[{func:1,ret:-1,args:[D.K]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q instanceof D.bj)this.f.push(q)
p=q.Q
if(p==null){p=new D.ak()
p.d=0
q.Q=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}u=new D.aP()
u.b=!0
this.a5(u)},
fc:function(a,b){var u,t,s
for(u=b.gS(b),t=this.gcI();u.A();){s=u.gK(u)
C.a.C(this.e,s)
s.gl().C(0,t)}u=new D.aQ()
u.b=!0
this.a5(u)},
ef:function(a){var u=C.a.ae(this.f,a)
return u},
$aj:function(){return[D.a0]},
$aai:function(){return[D.a0]}}
D.bj.prototype={
a5:function(a){var u=this.Q
if(u!=null)u.v(a)},
e3:function(){return this.a5(null)},
gak:function(){var u=this.d!=null?1:0
return u+4},
$ia0:1}
D.hf.prototype={$ia0:1}
V.M.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.M))return!1
u=b.a
t=$.r().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+", "+V.y(this.c,3,0)+"]"}}
V.U.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.U))return!1
u=b.a
t=$.r().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.y(u.a,3,0)+", "+V.y(u.b,3,0)+", "+V.y(u.c,3,0)+", "+V.y(u.d,3,0)+"]"}}
V.eP.prototype={}
V.bM.prototype={
a2:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.G])
return t},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bM))return!1
u=b.a
t=$.r().a
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
h:function(a){var u,t,s,r,q=this,p=[P.G],o=V.bw(H.c([q.a,q.d,q.r],p),3,0),n=V.bw(H.c([q.b,q.e,q.x],p),3,0),m=V.bw(H.c([q.c,q.f,q.y],p),3,0)
p=o.length
if(0>=p)return H.b(o,0)
u="["+o[0]+", "
t=n.length
if(0>=t)return H.b(n,0)
u=u+n[0]+", "
s=m.length
if(0>=s)return H.b(m,0)
u=u+m[0]+",\n"
if(1>=p)return H.b(o,1)
r=" "+o[1]+", "
if(1>=t)return H.b(n,1)
r=r+n[1]+", "
if(1>=s)return H.b(m,1)
r=u+(r+m[1]+",\n")
if(2>=p)return H.b(o,2)
p=" "+o[2]+", "
if(2>=t)return H.b(n,2)
p=p+n[2]+", "
if(2>=s)return H.b(m,2)
return r+(p+m[2]+"]")}}
V.ac.prototype={
a2:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.G])
return t},
dq:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.r().a)return V.au()
u=1/b1
t=-n
s=-a0
return V.ad((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
n:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.ad(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
ce:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.L(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ac))return!1
u=b.a
t=$.r().a
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
h:function(a){return this.M()},
D:function(a){var u,t,s,r,q,p=this,o=[P.G],n=V.bw(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.bw(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.bw(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.bw(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
o=n.length
if(0>=o)return H.b(n,0)
u="["+n[0]+", "
t=m.length
if(0>=t)return H.b(m,0)
u=u+m[0]+", "
s=l.length
if(0>=s)return H.b(l,0)
u=u+l[0]+", "
r=k.length
if(0>=r)return H.b(k,0)
u=u+k[0]+",\n"
q=a+" "
if(1>=o)return H.b(n,1)
q=q+n[1]+", "
if(1>=t)return H.b(m,1)
q=q+m[1]+", "
if(1>=s)return H.b(l,1)
q=q+l[1]+", "
if(1>=r)return H.b(k,1)
q=u+(q+k[1]+",\n")
u=a+" "
if(2>=o)return H.b(n,2)
u=u+n[2]+", "
if(2>=t)return H.b(m,2)
u=u+m[2]+", "
if(2>=s)return H.b(l,2)
u=u+l[2]+", "
if(2>=r)return H.b(k,2)
u=q+(u+k[2]+",\n")
q=a+" "
if(3>=o)return H.b(n,3)
q=q+n[3]+", "
if(3>=t)return H.b(m,3)
q=q+m[3]+", "
if(3>=s)return H.b(l,3)
q=q+l[3]+", "
if(3>=r)return H.b(k,3)
return u+(q+k[3]+"]")},
M:function(){return this.D("")}}
V.O.prototype={
J:function(a,b){return new V.O(this.a-b.a,this.b-b.b)},
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.O))return!1
u=b.a
t=$.r().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
h:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+"]"}}
V.L.prototype={
J:function(a,b){return new V.L(this.a-b.a,this.b-b.b,this.c-b.c)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.L))return!1
u=b.a
t=$.r().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+", "+V.y(this.c,3,0)+"]"}}
V.a8.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a8))return!1
u=b.a
t=$.r().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.y(u.a,3,0)+", "+V.y(u.b,3,0)+", "+V.y(u.c,3,0)+", "+V.y(u.d,3,0)+"]"}}
V.cU.prototype={
ga9:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cU))return!1
u=b.a
t=$.r().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.y(u.a,3,0)+", "+V.y(u.b,3,0)+", "+V.y(u.c,3,0)+", "+V.y(u.d,3,0)+"]"}}
V.B.prototype={
aV:function(a){return Math.sqrt(this.B(this))},
B:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.t(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.t(t)
return s*r+u*t},
n:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.n()
u=this.b
if(typeof u!=="number")return u.n()
return new V.B(t*b,u*b)},
q:function(a,b){var u,t
if(Math.abs(b-0)<$.r().a){u=$.k0
return u==null?$.k0=new V.B(0,0):u}u=this.a
if(typeof u!=="number")return u.q()
t=this.b
if(typeof t!=="number")return t.q()
return new V.B(u/b,t/b)},
p:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.B))return!1
u=b.a
t=this.a
s=$.r()
s.toString
if(typeof u!=="number")return u.J()
if(typeof t!=="number")return H.t(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.J()
if(typeof t!=="number")return H.t(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+"]"}}
V.w.prototype={
aV:function(a){return Math.sqrt(this.B(this))},
B:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
c3:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.w(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aR:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.w(u*t-s*r,s*q-p*t,p*r-u*q)},
F:function(a,b){return new V.w(this.a+b.a,this.b+b.b,this.c+b.c)},
O:function(a){return new V.w(-this.a,-this.b,-this.c)},
q:function(a,b){if(Math.abs(b-0)<$.r().a)return V.c0()
return new V.w(this.a/b,this.b/b,this.c/b)},
dr:function(){var u=$.r().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.w))return!1
u=b.a
t=$.r().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+", "+V.y(this.c,3,0)+"]"}}
V.bq.prototype={
aV:function(a){var u=this,t=u.a,s=u.b,r=u.c,q=u.d
return Math.sqrt(t*t+s*s+r*r+q*q)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bq))return!1
u=b.a
t=$.r().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.y(u.a,3,0)+", "+V.y(u.b,3,0)+", "+V.y(u.c,3,0)+", "+V.y(u.d,3,0)+"]"}}
U.ex.prototype={
bi:function(a){var u=V.iW(a,this.c,this.b)
return u},
gl:function(){var u=this.y
return u==null?this.y=D.A():u},
E:function(a){var u=this.y
if(u!=null)u.v(a)},
scf:function(a,b){},
sc4:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.r().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bi(u)}s=new D.m("maximumLocation",s,t.b)
s.b=!0
t.E(s)}},
sc6:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.r().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bi(u)}s=new D.m("minimumLocation",s,t.c)
s.b=!0
t.E(s)}},
sY:function(a,b){var u,t=this
b=t.bi(b)
u=t.d
if(!(Math.abs(u-b)<$.r().a)){t.d=b
u=new D.m("location",u,b)
u.b=!0
t.E(u)}},
sc5:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.r().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.m("maximumVelocity",r,a)
r.b=!0
s.E(r)}},
sR:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.r().a)){u.f=a
t=new D.m("velocity",t,a)
t.b=!0
u.E(t)}},
sbR:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.r().a)){this.x=a
u=new D.m("dampening",u,a)
u.b=!0
this.E(u)}},
a3:function(a,b){var u,t,s,r=this,q=r.f,p=$.r().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sY(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.r().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sR(u)}}}
U.cn.prototype={
gl:function(){var u=this.b
return u==null?this.b=D.A():u},
an:function(a,b,c){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cn))return!1
return J.v(this.a,b.a)},
h:function(a){return"Constant: "+this.a.D("          ")}}
U.bG.prototype={
gl:function(){var u=this.e
return u==null?this.e=D.A():u},
E:function(a){var u=this.e
if(u!=null)u.v(a)},
a6:function(){return this.E(null)},
e5:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaG(),s=[{func:1,ret:-1,args:[D.K]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q!=null){p=q.gl()
o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.aP()
u.b=!0
this.E(u)},
fa:function(a,b){var u,t
for(u=b.gS(b),t=this.gaG();u.A();)u.gK(u).gl().C(0,t)
u=new D.aQ()
u.b=!0
this.E(u)},
an:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.ab()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.T(r,r.length),u=null;r.A();){q=r.d
if(q!=null){t=q.an(0,b,c)
if(t!=null)u=u==null?t:t.n(0,u)}}s.f=u==null?V.au():u
r=s.e
if(r!=null)r.ai(0)}return s.f},
p:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bG))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.b(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.b(r,t)
if(!J.v(s,r[t]))return!1}return!0},
h:function(a){return"Group"},
$aj:function(){return[U.a1]},
$aai:function(){return[U.a1]},
$ia1:1}
U.a1.prototype={}
U.cX.prototype={
gl:function(){var u=this.y
return u==null?this.y=D.A():u},
E:function(a){var u=this.y
if(u!=null)u.v(a)},
sdN:function(a){var u
a=V.iW(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.r().a)){this.a=a
u=new D.m("yaw",u,a)
u.b=!0
this.E(u)}},
sdG:function(a,b){var u
b=V.iW(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.r().a)){this.b=b
u=new D.m("pitch",u,b)
u.b=!0
this.E(u)}},
sdK:function(a){var u
a=V.iW(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.r().a)){this.c=a
u=new D.m("roll",u,a)
u.b=!0
this.E(u)}},
an:function(a,b,c){var u=this,t=u.r,s=b.e
if(t<s){u.r=s
t=u.y
if(t!=null)++t.d
u.sdN(u.a+u.d*b.y)
u.sdG(0,u.b+u.e*b.y)
u.sdK(u.c+u.f*b.y)
u.x=V.jI(u.c).n(0,V.jH(u.b)).n(0,V.j9(u.a))
t=u.y
if(t!=null)t.ai(0)}return u.x},
p:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.cX))return!1
u=r.a
t=b.a
s=$.r().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
h:function(a){var u=this
return"Rotater: ["+V.y(u.a,3,0)+", "+V.y(u.b,3,0)+", "+V.y(u.c,3,0)+"], ["+V.y(u.d,3,0)+", "+V.y(u.e,3,0)+", "+V.y(u.f,3,0)+"]"}}
U.de.prototype={
gl:function(){var u=this.cy
return u==null?this.cy=D.A():u},
E:function(a){var u=this.cy
if(u!=null)u.v(a)},
a6:function(){return this.E(null)},
aQ:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gd5().k(0,u.gbq())
u.a.c.gdu().k(0,u.gbs())
u.a.c.gbe().k(0,u.gbu())
return!0},
br:function(a){var u=this
if(!J.v(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bt:function(a){var u,t,s,r,q,p,o,n=this
H.h(a,"$iav")
if(!n.y)return
if(n.x){u=a.d.J(0,a.y)
u=new V.B(u.a,u.b)
u=u.B(u)
t=n.r
if(typeof t!=="number")return H.t(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.J(0,a.y)
u=new V.B(t.a,t.b).n(0,2).q(0,u.ga9())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.n()
s=n.e
if(typeof s!=="number")return H.t(s)
t.sR(u*10*s)}else{u=a.c
t=a.d
s=t.J(0,a.y)
r=new V.B(s.a,s.b).n(0,2).q(0,u.ga9())
s=n.b
q=r.a
if(typeof q!=="number")return q.O()
p=n.e
if(typeof p!=="number")return H.t(p)
o=n.z
if(typeof o!=="number")return H.t(o)
s.sY(0,-q*p+o)
n.b.sR(0)
t=t.J(0,a.z)
n.Q=new V.B(t.a,t.b).n(0,2).q(0,u.ga9())}n.a6()},
bv:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.B(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.n()
s=r.e
if(typeof s!=="number")return H.t(s)
u.sR(t*10*s)
r.a6()}},
an:function(a,b,c){var u,t=this,s=t.ch,r=b.e
if(typeof s!=="number")return s.ab()
if(s<r){t.ch=r
u=b.y
t.b.a3(0,u)
t.cx=V.jI(t.b.d)}return t.cx},
$ia1:1}
U.df.prototype={
gl:function(){var u=this.fx
return u==null?this.fx=D.A():u},
E:function(a){var u=this.fx
if(u!=null)u.v(a)},
a6:function(){return this.E(null)},
aQ:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gd5().k(0,s.gbq())
s.a.c.gdu().k(0,s.gbs())
s.a.c.gbe().k(0,s.gbu())
u=s.a.d
t=u.f
u=t==null?u.f=D.A():t
u.k(0,s.gen())
u=s.a.d
t=u.d
u=t==null?u.d=D.A():t
u.k(0,s.gep())
u=s.a.e
t=u.b
u=t==null?u.b=D.A():t
u.k(0,s.gfG())
u=s.a.e
t=u.d
u=t==null?u.d=D.A():t
u.k(0,s.gfE())
u=s.a.e
t=u.c
u=t==null?u.c=D.A():t
u.k(0,s.gfC())
return!0},
ap:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.O()
u=-u}if(this.r){if(typeof t!=="number")return t.O()
t=-t}return new V.B(u,t)},
br:function(a){var u=this
H.h(a,"$iav")
if(!J.v(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bt:function(a){var u,t,s,r,q,p,o,n=this
H.h(a,"$iav")
if(!n.cx)return
if(n.ch){u=a.d.J(0,a.y)
u=new V.B(u.a,u.b)
u=u.B(u)
t=n.Q
if(typeof t!=="number")return H.t(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.J(0,a.y)
u=n.ap(new V.B(t.a,t.b).n(0,2).q(0,u.ga9()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.t(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.t(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.J(0,a.y)
r=n.ap(new V.B(s.a,s.b).n(0,2).q(0,u.ga9()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.t(p)
o=n.cy
if(typeof o!=="number")return H.t(o)
s.sY(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.t(q)
s=n.db
if(typeof s!=="number")return H.t(s)
o.sY(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.J(0,a.z)
n.dx=n.ap(new V.B(t.a,t.b).n(0,2).q(0,u.ga9()))}n.a6()},
bv:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.B(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.t(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.t(u)
s.sR(-t*10*u)
r.a6()}},
eo:function(a){var u=this
if(H.h(a,"$icI").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
eq:function(a){var u,t,s,r,q,p,o,n=this
H.h(a,"$iav")
if(!J.v(n.d,a.x.b))return
u=a.c
t=a.d
s=t.J(0,a.y)
r=n.ap(new V.B(s.a,s.b).n(0,2).q(0,u.ga9()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.t(p)
o=n.cy
if(typeof o!=="number")return H.t(o)
s.sY(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.t(q)
s=n.db
if(typeof s!=="number")return H.t(s)
o.sY(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.J(0,a.z)
n.dx=n.ap(new V.B(t.a,t.b).n(0,2).q(0,u.ga9()))
n.a6()},
fH:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fF:function(a){var u,t,s,r,q,p,o,n=this
H.h(a,"$id9")
if(!n.cx)return
if(n.ch){u=a.d.J(0,a.y)
u=new V.B(u.a,u.b)
u=u.B(u)
t=n.Q
if(typeof t!=="number")return H.t(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.J(0,a.y)
u=n.ap(new V.B(t.a,t.b).n(0,2).q(0,u.ga9()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.t(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.t(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.J(0,a.y)
r=n.ap(new V.B(s.a,s.b).n(0,2).q(0,u.ga9()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.t(p)
o=n.cy
if(typeof o!=="number")return H.t(o)
s.sY(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.t(q)
s=n.db
if(typeof s!=="number")return H.t(s)
o.sY(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.J(0,a.z)
n.dx=n.ap(new V.B(t.a,t.b).n(0,2).q(0,u.ga9()))}n.a6()},
fD:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.B(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.t(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.t(u)
s.sR(-t*10*u)
r.a6()}},
an:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.ab()
if(s<r){t.dy=r
u=b.y
t.c.a3(0,u)
t.b.a3(0,u)
t.fr=V.j9(t.b.d).n(0,V.jH(t.c.d))}return t.fr},
$ia1:1}
U.dg.prototype={
gl:function(){var u=this.r
return u==null?this.r=D.A():u},
E:function(a){var u=this.r
if(u!=null)u.v(a)},
aQ:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.A():t
t=r.ger()
u.k(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.A():s).k(0,t)
return!0},
es:function(a){var u,t,s,r,q=this
if(!J.v(q.b,q.a.b.c))return
H.h(a,"$ibP")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.n()
r=u+t*s
if(u!==r){q.d=r
u=new D.m("zoom",u,r)
u.b=!0
q.E(u)}},
an:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.jJ(u,u,u,1)}return t.f},
$ia1:1}
M.cm.prototype={
gl:function(){var u=this.r
return u==null?this.r=D.A():u},
P:function(a){var u=this.r
if(u!=null)u.v(a)},
at:function(){return this.P(null)},
fe:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gT(),s=[{func:1,ret:-1,args:[D.K]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q!=null){p=q.gl()
o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.aP()
u.b=!0
this.P(u)},
fg:function(a,b){var u,t
for(u=b.gS(b),t=this.gT();u.A();)u.gK(u).gl().C(0,t)
u=new D.aQ()
u.b=!0
this.P(u)},
Z:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.T(u,u.length);u.A();){t=u.d
if(t!=null)t.Z(a)}s.f=!1},
$aj:function(){return[M.a2]},
$aai:function(){return[M.a2]},
$ia2:1}
M.co.prototype={
gl:function(){var u=this.r
return u==null?this.r=D.A():u},
P:function(a){var u=this.r
if(u!=null)u.v(a)},
at:function(){return this.P(null)},
saL:function(a,b){var u,t,s=this
if(b==null)b=X.jz(null)
u=s.c
if(u!==b){if(u!=null)u.gl().C(0,s.gT())
t=s.c
s.c=b
b.gl().k(0,s.gT())
u=new D.m("target",t,s.c)
u.b=!0
s.P(u)}},
saa:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gl().C(0,t.gT())
u=t.d
t.d=a
if(a!=null)a.gl().k(0,t.gT())
s=new D.m("technique",u,t.d)
s.b=!0
t.P(s)}},
Z:function(a){var u,t,s=this
a.c9(s.d)
s.c.W(a)
u=s.b
u.toString
a.cy.bb(V.au())
t=V.au()
u.a
a.db.bb(t)
u=s.d
if(u!=null)u.a3(0,a)
s.e.a3(0,a)
s.e.Z(a)
s.b.toString
a.cy.b_()
a.db.b_()
s.c.az(a)
a.c8()},
$ia2:1}
M.cu.prototype={
P:function(a){var u=this.y
if(u!=null)u.v(a)},
at:function(){return this.P(null)},
eD:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gT(),s=[{func:1,ret:-1,args:[D.K]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.ak()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.aP()
u.b=!0
this.P(u)},
eF:function(a,b){var u,t
for(u=b.gS(b),t=this.gT();u.A();)u.gK(u).gl().C(0,t)
u=new D.aQ()
u.b=!0
this.P(u)},
saL:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gl().C(0,t.gT())
u=t.c
t.c=b
b.gl().k(0,t.gT())
s=new D.m("target",u,t.c)
s.b=!0
t.P(s)}},
saa:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gl().C(0,t.gT())
u=t.d
t.d=a
if(a!=null)a.gl().k(0,t.gT())
s=new D.m("technique",u,t.d)
s.b=!0
t.P(s)}},
gl:function(){var u=this.y
return u==null?this.y=D.A():u},
Z:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
a.c9(c.d)
c.c.W(a)
u=c.b
t=a.c
s=a.d
r=u.c
q=u.d
p=u.e
o=p-q
n=1/Math.tan(r*0.5)
m=V.ad(-n/(t/s),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0)
u.a
a.cy.bb(m)
t=$.jL
if(t==null){t=V.l_()
s=$.k2
if(s==null)s=$.k2=new V.w(0,1,0)
r=$.k1
if(r==null)r=$.k1=new V.w(0,0,-1)
l=r.q(0,Math.sqrt(r.B(r)))
s=s.aR(l)
k=s.q(0,Math.sqrt(s.B(s)))
j=l.aR(k)
i=new V.w(t.a,t.b,t.c)
h=k.O(0).B(i)
g=j.O(0).B(i)
f=l.O(0).B(i)
t=V.ad(k.a,j.a,l.a,h,k.b,j.b,l.b,g,k.c,j.c,l.c,f,0,0,0,1)
$.jL=t
e=t}else e=t
t=u.b
if(t!=null){d=t.an(0,a,u)
if(d!=null)e=d.n(0,e)}a.db.bb(e)
u=c.d
if(u!=null)u.a3(0,a)
for(u=c.e.a,u=new J.T(u,u.length);u.A();)u.d.a3(0,a)
for(u=c.e.a,u=new J.T(u,u.length);u.A();)u.d.Z(a)
c.b.toString
a.cy.b_()
a.db.b_()
c.c.az(a)
a.c8()},
$ia2:1}
M.cx.prototype={
gl:function(){var u=this.b
return u==null?this.b=D.A():u},
P:function(a){var u=this.b
if(u!=null)u.v(a)},
at:function(){return this.P(null)},
Z:function(a){var u=this.e
if(u!=null)u.Z(a)
u=this.r
if(u!=null)u.Z(a)},
$ia2:1}
M.a2.prototype={}
A.ci.prototype={}
A.ej.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
fV:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
bS:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.V.prototype={
gao:function(a){var u=this.a?1:0,t=this.c?4:0
return u|0|t},
h:function(a){var u=this.a?1:0,t=this.c?4:0
return""+(u|0|t)},
p:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.V))return!1
if(this.a===b.a)u=this.c===b.c
else u=!1
return u}}
A.f0.prototype={
cO:function(a,b){if(b!=null&&b.d)a.dS(b)}}
A.f1.prototype={
aD:function(a,b,c,d){var u,t,s,r,q=c.length
if(0>=q)return H.b(c,0)
u=Math.abs(c[0]-0)<$.r().a
if(u){if(0>=d.length)return H.b(d,0)
t=d[0]
d=C.a.cl(d,1)
c=C.a.cl(c,1);--q}else t=0
s=a.a+="vec4 blur"+b+"()\n"
s+="{\n"
a.a=s
if(u)s=a.a+="  vec4 color = texture2D(colorTxt, txt2D)*"+H.e(t)+";\n"
else s=a.a=s+"  vec4 color = vec4(0.0);\n"
s=a.a=s+"  vec2 offset;\n"
for(r=0;r<q;++r){if(r>=c.length)return H.b(c,r)
a.a+="  offset = blurScale * "+H.e(c[r])+";\n"
if(r>=d.length)return H.b(d,r)
a.a+="  color += texture2D(colorTxt, txt2D + offset) * "+H.e(d[r])+";\n"
if(r>=d.length)return H.b(d,r)
s=a.a+="  color += texture2D(colorTxt, txt2D - offset) * "+H.e(d[r])+";\n"}s+="  return color; \n"
a.a=s
s+="}\n"
a.a=s
a.a=s+"\n"},
h:function(a){return this.b}}
A.fl.prototype={
dZ:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.ay("")
t=c0.dy
if(t){u.a=b9
s=b9}else s=""
r=c0.fr
s=(r?u.a=s+"uniform mat4 viewObjMat;\n":s)+"uniform mat4 projViewObjMat;\n"
u.a=s
s+="\n"
u.a=s
s=u.a=s+"attribute vec3 posAttr;\n"
q=c0.k3
if(q){s+="attribute vec3 normAttr;\n"
u.a=s}p=c0.k4
u.a=(p?u.a=s+"attribute vec3 binmAttr;\n":s)+"\n"
A.lK(c0,u)
A.lM(c0,u)
A.lL(c0,u)
A.lO(c0,u)
A.lP(c0,u)
A.lN(c0,u)
A.lQ(c0,u)
s=u.a+="vec4 getPos()\n"
s+="{\n"
u.a=s
o=c0.rx
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
u.a=s}if(c0.r1){s+="   txt2D = getTxt2D();\n"
u.a=s}if(c0.r2){s+="   txtCube = getTxtCube();\n"
u.a=s}if(c0.k1){s+="   objPos = getObjPos();\n"
u.a=s}s=(c0.k2?u.a=s+"   viewPos = getViewPos();\n":s)+"   gl_Position = getPos();\n"
u.a=s
s+="}\n"
u.a=s
s=u.a=s+"\n"
b5.c0(0,s.charCodeAt(0)==0?s:s,A.lJ(b5.z))
b5.Q=b5.x.i(0,"posAttr")
b5.cx=b5.x.i(0,"normAttr")
b5.ch=b5.x.i(0,"binmAttr")
b5.cy=b5.x.i(0,"txt2DAttr")
b5.db=b5.x.i(0,"txtCubeAttr")
b5.dx=b5.x.i(0,"bendAttr")
if(c0.dx)b5.id=H.h(b5.y.G(0,"invViewMat"),"$iW")
if(t)b5.dy=H.h(b5.y.G(0,"objMat"),"$iW")
if(r)b5.fr=H.h(b5.y.G(0,"viewObjMat"),"$iW")
b5.fy=H.h(b5.y.G(0,"projViewObjMat"),"$iW")
if(c0.ry)b5.k1=H.h(b5.y.G(0,"txt2DMat"),"$ibp")
if(c0.x1)b5.k2=H.h(b5.y.G(0,"txtCubeMat"),"$iW")
if(c0.x2)b5.k3=H.h(b5.y.G(0,"colorMat"),"$iW")
b5.r1=H.c([],[A.W])
t=c0.y2
if(t>0){b5.k4=b5.y.G(0,"bendMatCount")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.i(0,q)
if(m==null)H.q(P.o(b7+q+b8))
s.push(H.h(m,"$iW"))}}t=c0.a
if(t.a)b5.r2=H.h(b5.y.G(0,"emissionClr"),"$iF")
if(t.c)b5.ry=H.h(b5.y.G(0,"emissionTxt"),"$iR")
t=c0.b
if(t.a)b5.x1=H.h(b5.y.G(0,"ambientClr"),"$iF")
if(t.c)b5.y1=H.h(b5.y.G(0,"ambientTxt"),"$iR")
t=c0.c
if(t.a)b5.y2=H.h(b5.y.G(0,"diffuseClr"),"$iF")
if(t.c)b5.b7=H.h(b5.y.G(0,"diffuseTxt"),"$iR")
t=c0.d
if(t.a)b5.d9=H.h(b5.y.G(0,"invDiffuseClr"),"$iF")
if(t.c)b5.da=H.h(b5.y.G(0,"invDiffuseTxt"),"$iR")
t=c0.e
s=t.a
if(!s)r=t.c
else r=!0
if(r){b5.de=H.h(b5.y.G(0,"shininess"),"$iN")
if(s)b5.dc=H.h(b5.y.G(0,"specularClr"),"$iF")
if(t.c)b5.dd=H.h(b5.y.G(0,"specularTxt"),"$iR")}if(c0.f.c)b5.df=H.h(b5.y.G(0,"bumpTxt"),"$iR")
if(c0.cy){b5.dg=H.h(b5.y.G(0,"envSampler"),"$iR")
t=c0.r
if(t.a)b5.dh=H.h(b5.y.G(0,"reflectClr"),"$iF")
if(t.c)b5.di=H.h(b5.y.G(0,"reflectTxt"),"$iR")
t=c0.x
s=t.a
if(!s)r=t.c
else r=!0
if(r){b5.dj=H.h(b5.y.G(0,"refraction"),"$iN")
if(s)b5.dk=H.h(b5.y.G(0,"refractClr"),"$iF")
if(t.c)b5.dl=H.h(b5.y.G(0,"refractTxt"),"$iR")}}t=c0.y
if(t.a)b5.dm=H.h(b5.y.G(0,"alpha"),"$iN")
if(t.c)b5.dn=H.h(b5.y.G(0,"alphaTxt"),"$iR")
t=P.z
s=[t,A.b2]
b5.bU=new H.I(s)
b5.bV=new H.I([t,[P.bh,A.bX]])
b5.bW=new H.I(s)
b5.bX=new H.I([t,[P.bh,A.bY]])
b5.bY=new H.I(s)
b5.bZ=new H.I([t,[P.bh,A.bZ]])
if(c0.id){for(t=c0.z,s=t.length,r=[A.bX],l=0;l<t.length;t.length===s||(0,H.n)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.e(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.as()
p=(j&1)!==0
if(p){o=b5.y
g=i+"s["+n+"].objUp"
m=o.i(0,g)
if(m==null)H.q(P.o(b7+g+b8))
H.h(m,"$iF")
o=b5.y
g=i+"s["+n+"].objRight"
f=o.i(0,g)
if(f==null)H.q(P.o(b7+g+b8))
H.h(f,"$iF")
o=b5.y
g=i+"s["+n+"].objDir"
e=o.i(0,g)
if(e==null)H.q(P.o(b7+g+b8))
H.h(e,"$iF")
d=e
c=f
b=m}else{d=b6
c=d
b=c}o=b5.y
g=i+"s["+n+"].viewDir"
m=o.i(0,g)
if(m==null)H.q(P.o(b7+g+b8))
H.h(m,"$iF")
o=b5.y
g=i+"s["+n+"].color"
f=o.i(0,g)
if(f==null)H.q(P.o(b7+g+b8))
H.h(f,"$iF")
if(p){p=b5.y
o=i+"sTexture2D"+n
e=p.i(0,o)
if(e==null)H.q(P.o(b7+o+b8))
H.h(e,"$iae")
a=e}else a=b6
h.push(new A.bX(b,c,d,m,f,a))}b5.bV.m(0,j,h)
q=b5.bU
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.q(P.o(b7+o+b8))
q.m(0,j,m)}for(t=c0.Q,s=t.length,r=[A.bY],l=0;l<t.length;t.length===s||(0,H.n)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.e(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.i(0,o)
if(m==null)H.q(P.o(b7+o+b8))
H.h(m,"$iF")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.i(0,o)
if(f==null)H.q(P.o(b7+o+b8))
H.h(f,"$iF")
p=b5.y
o=i+"s["+n+"].color"
e=p.i(0,o)
if(e==null)H.q(P.o(b7+o+b8))
H.h(e,"$iF")
if(typeof j!=="number")return j.as()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
a0=p.i(0,o)
if(a0==null)H.q(P.o(b7+o+b8))
H.h(a0,"$ibp")
a1=a0}else a1=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
a0=p.i(0,o)
if(a0==null)H.q(P.o(b7+o+b8))
H.h(a0,"$iR")
a=a0}else a=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
a0=p.i(0,o)
if(a0==null)H.q(P.o(b7+o+b8))
H.h(a0,"$iR")
p=b5.y
o=i+"s["+n+"].shadowAdj"
a2=p.i(0,o)
if(a2==null)H.q(P.o(b7+o+b8))
H.h(a2,"$ib3")
a3=a0
a4=a2}else{a3=b6
a4=a3}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
a0=p.i(0,o)
if(a0==null)H.q(P.o(b7+o+b8))
H.h(a0,"$iN")
p=b5.y
o=i+"s["+n+"].att1"
a2=p.i(0,o)
if(a2==null)H.q(P.o(b7+o+b8))
H.h(a2,"$iN")
p=b5.y
o=i+"s["+n+"].att2"
a5=p.i(0,o)
if(a5==null)H.q(P.o(b7+o+b8))
H.h(a5,"$iN")
a6=a5
a7=a2
a8=a0}else{a6=b6
a7=a6
a8=a7}h.push(new A.bY(m,f,a1,e,a,a3,a4,a8,a7,a6))}b5.bX.m(0,j,h)
q=b5.bW
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.q(P.o(b7+o+b8))
q.m(0,j,m)}for(t=c0.ch,s=t.length,r=[A.bZ],l=0;l<t.length;t.length===s||(0,H.n)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.e(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.i(0,o)
if(m==null)H.q(P.o(b7+o+b8))
H.h(m,"$iF")
p=b5.y
o=i+"s["+n+"].objDir"
f=p.i(0,o)
if(f==null)H.q(P.o(b7+o+b8))
H.h(f,"$iF")
p=b5.y
o=i+"s["+n+"].viewPnt"
e=p.i(0,o)
if(e==null)H.q(P.o(b7+o+b8))
H.h(e,"$iF")
p=b5.y
o=i+"s["+n+"].color"
a0=p.i(0,o)
if(a0==null)H.q(P.o(b7+o+b8))
H.h(a0,"$iF")
if(typeof j!=="number")return j.as()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
a2=p.i(0,o)
if(a2==null)H.q(P.o(b7+o+b8))
H.h(a2,"$iF")
p=b5.y
o=i+"s["+n+"].objRight"
a5=p.i(0,o)
if(a5==null)H.q(P.o(b7+o+b8))
H.h(a5,"$iF")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.i(0,o)
if(a9==null)H.q(P.o(b7+o+b8))
H.h(a9,"$iN")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.i(0,o)
if(b0==null)H.q(P.o(b7+o+b8))
H.h(b0,"$iN")
b1=b0
b2=a9
c=a5
b=a2}else{b1=b6
b2=b1
c=b2
b=c}p=(j&2)!==0
if(p){o=b5.y
g=i+"s["+n+"].shadowAdj"
a2=o.i(0,g)
if(a2==null)H.q(P.o(b7+g+b8))
H.h(a2,"$ib3")
a4=a2}else a4=b6
if((j&8)!==0){o=b5.y
g=i+"s["+n+"].cutoff"
a2=o.i(0,g)
if(a2==null)H.q(P.o(b7+g+b8))
H.h(a2,"$iN")
o=b5.y
g=i+"s["+n+"].coneAngle"
a5=o.i(0,g)
if(a5==null)H.q(P.o(b7+g+b8))
H.h(a5,"$iN")
b3=a5
b4=a2}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
g=i+"s["+n+"].att0"
a2=o.i(0,g)
if(a2==null)H.q(P.o(b7+g+b8))
H.h(a2,"$iN")
o=b5.y
g=i+"s["+n+"].att1"
a5=o.i(0,g)
if(a5==null)H.q(P.o(b7+g+b8))
H.h(a5,"$iN")
o=b5.y
g=i+"s["+n+"].att2"
a9=o.i(0,g)
if(a9==null)H.q(P.o(b7+g+b8))
H.h(a9,"$iN")
a6=a9
a7=a5
a8=a2}else{a6=b6
a7=a6
a8=a7}if((j&1)!==0){o=b5.y
g=i+"sTexture2D"+n
a2=o.i(0,g)
if(a2==null)H.q(P.o(b7+g+b8))
H.h(a2,"$iae")
a=a2}else a=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
a2=p.i(0,o)
if(a2==null)H.q(P.o(b7+o+b8))
H.h(a2,"$iae")
a3=a2}else a3=b6
h.push(new A.bZ(m,f,e,a0,b,c,b2,b1,a4,b4,b3,a8,a7,a6,a,a3))}b5.bZ.m(0,j,h)
q=b5.bY
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.q(P.o(b7+o+b8))
q.m(0,j,m)}}},
ad:function(a,b){if(b!=null&&b.d>=6)a.dT(b)}}
A.cq.prototype={
h:function(a){return"dirLight"+H.e(this.a)}}
A.cS.prototype={
h:function(a){return"pointLight"+H.e(this.a)}}
A.d_.prototype={
h:function(a){return"spotLight"+H.e(this.a)}}
A.fp.prototype={
h:function(a){return this.aU}}
A.bX.prototype={}
A.bY.prototype={}
A.bZ.prototype={}
A.cY.prototype={
bg:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
c0:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.cE(b,35633)
r.f=r.cE(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!u.getProgramParameter(r.r,35714)){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.q(P.o("Failed to link shader: "+H.e(s)))}r.fw()
r.fA()},
W:function(a){a.a.useProgram(this.r)
this.x.fV()},
cE:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.f(P.o("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
fw:function(){var u,t,s,r=this,q=H.c([],[A.ci]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.t(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.ci(p,t.name,s))}r.x=new A.ej(q)},
fA:function(){var u,t,s,r=this,q=H.c([],[A.db]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.t(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.fS(t.type,t.size,t.name,s))}r.y=new A.hL(q)},
aE:function(a,b,c){var u=this.a
if(a===1)return new A.b2(u,b,c)
else return A.jd(u,this.r,b,a,c)},
eg:function(a,b,c){var u=this.a
if(a===1)return new A.ae(u,b,c)
else return A.jd(u,this.r,b,a,c)},
eh:function(a,b,c){var u=this.a
if(a===1)return new A.R(u,b,c)
else return A.jd(u,this.r,b,a,c)},
b5:function(a,b){return new P.ds(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
fS:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aE(b,c,d)
case 5121:return u.aE(b,c,d)
case 5122:return u.aE(b,c,d)
case 5123:return u.aE(b,c,d)
case 5124:return u.aE(b,c,d)
case 5125:return u.aE(b,c,d)
case 5126:return new A.N(u.a,c,d)
case 35664:return new A.ap(u.a,c,d)
case 35665:return new A.F(u.a,c,d)
case 35666:return new A.b3(u.a,c,d)
case 35667:return new A.hI(u.a,c,d)
case 35668:return new A.hJ(u.a,c,d)
case 35669:return new A.hK(u.a,c,d)
case 35674:return new A.hM(u.a,c,d)
case 35675:return new A.bp(u.a,c,d)
case 35676:return new A.W(u.a,c,d)
case 35678:return u.eg(b,c,d)
case 35680:return u.eh(b,c,d)
case 35670:throw H.f(u.b5("BOOL",c))
case 35671:throw H.f(u.b5("BOOL_VEC2",c))
case 35672:throw H.f(u.b5("BOOL_VEC3",c))
case 35673:throw H.f(u.b5("BOOL_VEC4",c))
default:throw H.f(P.o("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.bb.prototype={
h:function(a){return this.b}}
A.hu.prototype={
e2:function(a,b,c){var u,t,s,r,q,p=this,o="Required uniform value, ",n=", was not defined or used in shader."
p.c0(0,"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n":"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n",A.li(a,b))
p.z=p.x.i(0,"posAttr")
p.Q=H.h(p.y.G(0,"txtCount"),"$ib2")
p.ch=H.h(p.y.G(0,"backClr"),"$ib3")
p.cx=H.c([],[A.ae])
p.cy=H.c([],[A.W])
u=[A.ap]
p.db=H.c([],u)
p.dx=H.c([],u)
p.dy=H.c([],u)
p.fr=H.c([],u)
p.fx=H.c([],[A.b2])
for(t=0;t<a;++t){u=p.cx
s=p.y
r="txt"+t
q=s.i(0,r)
if(q==null)H.q(P.o(o+r+n))
u.push(H.h(q,"$iae"))
u=p.cy
s=p.y
r="clrMat"+t
q=s.i(0,r)
if(q==null)H.q(P.o(o+r+n))
u.push(H.h(q,"$iW"))
u=p.db
s=p.y
r="srcLoc"+t
q=s.i(0,r)
if(q==null)H.q(P.o(o+r+n))
u.push(H.h(q,"$iap"))
u=p.dx
s=p.y
r="srcSize"+t
q=s.i(0,r)
if(q==null)H.q(P.o(o+r+n))
u.push(H.h(q,"$iap"))
u=p.dy
s=p.y
r="destLoc"+t
q=s.i(0,r)
if(q==null)H.q(P.o(o+r+n))
u.push(H.h(q,"$iap"))
u=p.fr
s=p.y
r="destSize"+t
q=s.i(0,r)
if(q==null)H.q(P.o(o+r+n))
u.push(H.h(q,"$iap"))
u=p.fx
s=p.y
r="flip"+t
q=s.i(0,r)
if(q==null)H.q(P.o(o+r+n))
u.push(H.h(q,"$ib2"))}}}
A.db.prototype={}
A.hL.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
G:function(a,b){var u=this.i(0,b)
if(u==null)throw H.f(P.o("Required uniform value, "+b+", was not defined or used in shader."))
return u},
h:function(a){return this.M()},
M:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.n)(u),++r)s+=u[r].h(0)+"\n"
return s}}
A.b2.prototype={
h:function(a){return"Uniform1i: "+H.e(this.c)}}
A.hI.prototype={
h:function(a){return"Uniform2i: "+H.e(this.c)}}
A.hJ.prototype={
h:function(a){return"Uniform3i: "+H.e(this.c)}}
A.hK.prototype={
h:function(a){return"Uniform4i: "+H.e(this.c)}}
A.hH.prototype={
h:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.N.prototype={
h:function(a){return"Uniform1f: "+H.e(this.c)}}
A.ap.prototype={
h:function(a){return"Uniform2f: "+H.e(this.c)}}
A.F.prototype={
h:function(a){return"Uniform3f: "+H.e(this.c)}}
A.b3.prototype={
dU:function(a){var u=a.a,t=a.b,s=a.c,r=a.d
return this.a.uniform4f(this.d,u,t,s,r)},
dR:function(a){return this.a.uniform4f(this.d,a.a,a.b,a.c,a.d)},
h:function(a){return"Uniform4f: "+H.e(this.c)}}
A.hM.prototype={
h:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.bp.prototype={
ac:function(a){var u=new Float32Array(H.br(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
h:function(a){return"UniformMat3: "+H.e(this.c)}}
A.W.prototype={
ac:function(a){var u=new Float32Array(H.br(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
h:function(a){return"UniformMat4: "+H.e(this.c)}}
A.ae.prototype={
dS:function(a){var u=a==null||!a.d,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
h:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.R.prototype={
dT:function(a){var u=a.d,t=this.a,s=this.d
if(u<6)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
h:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.iy.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.c3(s.b,b).c3(s.d.c3(s.c,b),c)
a.sY(0,new V.L(r.a,r.b,r.c))
a.say(r.q(0,Math.sqrt(r.B(r))))
s=1-b
u=1-c
a.scW(new V.a8(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)}}
F.iE.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)}}
F.iF.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.t(p)
s=-s*p
u=r*p
a.sY(0,new V.L(s,u,q))
u=new V.w(s,u,q)
a.say(u.q(0,Math.sqrt(u.B(u))))
a.scW(new V.a8(1-c,2+c,-1,-1))}}
F.iG.prototype={
$1:function(a){return this.a.$2(a,1)}}
F.iH.prototype={
$1:function(a){return this.a.$2(1-a,0)}}
F.iQ.prototype={
$2:function(a,b){return 0}}
F.iR.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.t(s)
u=this.b+s
s=a.f
t=new V.w(s.a,s.b,s.c)
s=t.q(0,Math.sqrt(t.B(t)))
a.sY(0,new V.L(s.a*u,s.b*u,s.c*u))}}
F.aL.prototype={
aS:function(){var u=this
if(!u.gaT()){C.a.C(u.a.a.d.b,u)
u.a.a.X()}u.bA()
u.bB()
u.fp()},
bE:function(a){this.a=a
a.d.b.push(this)},
bF:function(a){this.b=a
a.d.c.push(this)},
fv:function(a){this.c=a
a.d.d.push(this)},
bA:function(){var u=this.a
if(u!=null){C.a.C(u.d.b,this)
this.a=null}},
bB:function(){var u=this.b
if(u!=null){C.a.C(u.d.c,this)
this.b=null}},
fp:function(){var u=this.c
if(u!=null){C.a.C(u.d.d,this)
this.c=null}},
gaT:function(){return this.a==null||this.b==null||this.c==null},
ec:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.c0()
if(q!=null)s=s.F(0,q)
if(u!=null)s=s.F(0,u)
if(t!=null)s=s.F(0,t)
if(s.dr())return
return s.q(0,Math.sqrt(s.B(s)))},
ee:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.J(0,q)
r=new V.w(r.a,r.b,r.c)
s=r.q(0,Math.sqrt(r.B(r)))
r=t.J(0,q)
r=new V.w(r.a,r.b,r.c)
r=s.aR(r.q(0,Math.sqrt(r.B(r))))
return r.q(0,Math.sqrt(r.B(r)))},
bO:function(){var u,t=this
if(t.d!=null)return!0
u=t.ec()
if(u==null){u=t.ee()
if(u==null)return!1}t.d=u
t.a.a.X()
return!0},
eb:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.c0()
if(q!=null)s=s.F(0,q)
if(u!=null)s=s.F(0,u)
if(t!=null)s=s.F(0,t)
if(s.dr())return
return s.q(0,Math.sqrt(s.B(s)))},
ed:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.r().a){l=d.J(0,g)
l=new V.w(l.a,l.b,l.c)
q=l.q(0,Math.sqrt(l.B(l)))
if(s.a-t.a<0)q=q.O(0)}else{p=(l-u.b)/r
l=d.J(0,g)
l=new V.L(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).J(0,j)
l=new V.w(l.a,l.b,l.c)
q=l.q(0,Math.sqrt(l.B(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.O(0)}l=n.d
if(l!=null){o=l.q(0,Math.sqrt(l.B(l)))
l=o.aR(q)
l=l.q(0,Math.sqrt(l.B(l))).aR(o)
q=l.q(0,Math.sqrt(l.B(l)))}return q},
bM:function(){var u,t=this
if(t.e!=null)return!0
u=t.eb()
if(u==null){u=t.ed()
if(u==null)return!1}t.e=u
t.a.a.X()
return!0},
gfO:function(a){var u=this
if(J.v(u.a,u.b))return!0
if(J.v(u.b,u.c))return!0
if(J.v(u.c,u.a))return!0
return!1},
p:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.M()},
D:function(a){var u,t,s=this
if(s.gaT())return a+"disposed"
u=a+C.c.ah(J.a4(s.a.e),0)+", "+C.c.ah(J.a4(s.b.e),0)+", "+C.c.ah(J.a4(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.h(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.h(0)+"}"):u+"-}"},
M:function(){return this.D("")}}
F.eS.prototype={}
F.hc.prototype={
aW:function(a,b,c){var u,t=b.a
t.a.a.t()
t=t.e
u=c.a
u.a.a.t()
if(t==u.e){t=b.b
t.a.a.t()
t=t.e
u=c.b
u.a.a.t()
if(t==u.e){t=b.c
t.a.a.t()
t=t.e
u=c.c
u.a.a.t()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.t()
t=t.e
u=c.b
u.a.a.t()
if(t==u.e){t=b.b
t.a.a.t()
t=t.e
u=c.c
u.a.a.t()
if(t==u.e){t=b.c
t.a.a.t()
t=t.e
u=c.a
u.a.a.t()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.t()
t=t.e
u=c.c
u.a.a.t()
if(t==u.e){t=b.b
t.a.a.t()
t=t.e
u=c.a
u.a.a.t()
if(t==u.e){t=b.c
t.a.a.t()
t=t.e
u=c.b
u.a.a.t()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.bK.prototype={
aS:function(){var u=this
if(!u.gaT()){C.a.C(u.a.a.c.b,u)
u.a.a.X()}u.bA()
u.bB()},
bE:function(a){this.a=a
a.c.b.push(this)},
bF:function(a){this.b=a
a.c.c.push(this)},
bA:function(){var u=this.a
if(u!=null){C.a.C(u.c.b,this)
this.a=null}},
bB:function(){var u=this.b
if(u!=null){C.a.C(u.c.c,this)
this.b=null}},
gaT:function(){return this.a==null||this.b==null},
p:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.M()},
D:function(a){if(this.gaT())return a+"disposed"
return a+C.c.ah(J.a4(this.a.e),0)+", "+C.c.ah(J.a4(this.b.e),0)},
M:function(){return this.D("")}}
F.fb.prototype={}
F.hG.prototype={
aW:function(a,b,c){var u,t=b.a
t.a.a.t()
t=t.e
u=c.a
u.a.a.t()
if(t==u.e){t=b.b
t.a.a.t()
t=t.e
u=c.b
u.a.a.t()
return t==u.e}else{t=b.a
t.a.a.t()
t=t.e
u=c.b
u.a.a.t()
if(t==u.e){t=b.b
t.a.a.t()
t=t.e
u=c.a
u.a.a.t()
return t==u.e}else return!1}}}
F.bS.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.M()},
D:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.c.ah(J.a4(u.e),0)},
M:function(){return this.D("")}}
F.h4.prototype={
gl:function(){var u=this.e
return u==null?this.e=D.A():u},
aX:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.t()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.n)(g),++s){r=g[s]
h.a.k(0,r.fR())}h.a.t()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.n)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.t()
o=o.e
if(typeof o!=="number")return o.F()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
n=p[o]
h.b.a.a.k(0,n)
o=new F.bS()
if(n.a==null)H.q(P.o("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.v(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.n)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.t()
o=o.e
if(typeof o!=="number")return o.F()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.t()
p=p.e
if(typeof p!=="number")return p.F()
p+=u
o=o.c
if(p>=o.length)return H.b(o,p)
k=o[p]
p=h.c.a
p.a.k(0,l)
p.a.k(0,k)
F.kT(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.n)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.t()
o=o.e
if(typeof o!=="number")return o.F()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.t()
p=p.e
if(typeof p!=="number")return p.F()
p+=u
o=o.c
if(p>=o.length)return H.b(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.t()
o=o.e
if(typeof o!=="number")return o.F()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
i=p[o]
o=h.d.a
o.a.k(0,l)
o.a.k(0,k)
o.a.k(0,i)
F.bF(l,k,i)}g=h.e
if(g!=null)g.ai(0)},
aq:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aq()||!1
if(!t.a.aq())u=!1
s=t.e
if(s!=null)s.ai(0)
return u},
h2:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.c(o.slice(0),[H.ec(o,0)])
for(o=[F.aB];u.length!==0;){t=C.a.gfX(u)
C.a.dI(u,0)
if(t!=null){s=H.c([],o)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.b(u,r)
q=u[r]
if(q!=null&&a.aW(0,t,q)){s.push(q)
C.a.dI(u,r)}}if(s.length>1)b.aX(s)}}p.a.t()
p.c.ca()
p.d.ca()
p.b.hk()
p.c.cb(new F.hG())
p.d.cb(new F.hc())
o=p.e
if(o!=null)o.ai(0)},
cV:function(){this.h2(new F.hZ(),new F.fM())},
b8:function(){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
p.d.b8()
for(u=p.a.c.length-1;u>=0;--u){o=p.a.c
if(u>=o.length)return H.b(o,u)
t=o[u]
o=t.r
if(o!=null)t.sdv(new V.w(-o.a,-o.b,-o.c))
o=t.x
if(o!=null){s=-o.a
r=-o.b
o=-o.c
q=new V.w(s,r,o).q(0,Math.sqrt(s*s+r*r+o*o))
if(!J.v(t.x,q)){t.x=q
o=t.a
if(o!=null){o=o.e
if(o!=null)o.v(null)}}}}o=p.e
if(o!=null)o.ai(0)},
bL:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.a3()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.aG().a)!==0)++s
if((t&$.aF().a)!==0)++s
if((t&$.ar().a)!==0)++s
if((t&$.aH().a)!==0)++s
if((t&$.cg().a)!==0)++s
if((t&$.ch().a)!==0)++s
if((t&$.bx().a)!==0)++s
if((t&$.aE().a)!==0)++s
r=a4.gck(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.c(u,[P.G])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.ck])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.fL(m)
k=l.gck(l)
if(m>=t)return H.b(o,m)
o[m]=new Z.ck(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.b(i,j)
h=i[j].h1(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.b(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.br(p)),35044)
u.bindBuffer(a1,null)
c=new Z.aI(new Z.di(a1,d),o,a4)
c.b=H.c([],[Z.bd])
if(a0.b.b.length!==0){b=H.c([],[P.z])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.t()
b.push(t.e)}a=Z.je(u,34963,b)
c.b.push(new Z.bd(0,b.length,a))}if(a0.c.b.length!==0){b=H.c([],[P.z])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.t()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.b(t,m)
t=t[m].b
t.a.a.t()
b.push(t.e)}a=Z.je(u,34963,b)
c.b.push(new Z.bd(1,b.length,a))}if(a0.d.b.length!==0){b=H.c([],[P.z])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.t()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.b(t,m)
t=t[m].b
t.a.a.t()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.b(t,m)
t=t[m].c
t.a.a.t()
b.push(t.e)}a=Z.je(u,34963,b)
c.b.push(new Z.bd(4,b.length,a))}return c},
h:function(a){var u=this,t="   ",s=H.c([],[P.u])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.D(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.D(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.D(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.D(t))}return C.a.u(s,"\n")},
X:function(){var u=this.e
if(u!=null)u.v(null)}}
F.h6.prototype={
cS:function(a){var u,t,s,r,q,p=H.c([],[F.aL]),o=a.length
if(o>0){u=a[0]
for(t=this.a,s=2;s<o;++s){r=s-1
q=a.length
if(r>=q)return H.b(a,r)
r=a[r]
if(s>=q)return H.b(a,s)
q=a[s]
t.a.k(0,u)
t.a.k(0,r)
t.a.k(0,q)
p.push(F.bF(u,r,q))}}return p},
fJ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.c([],[F.aL])
for(u=this.a,t=b,s=0,r=!1,q=1;q<a;++q,++s,++t){for(p=r,o=1;o<b;++o,t=k){n=c.length
if(s<0||s>=n)return H.b(c,s)
m=c[s];++s
if(s>=n)return H.b(c,s)
l=c[s]
k=t+1
if(k<0||k>=n)return H.b(c,k)
j=c[k]
if(t<0||t>=n)return H.b(c,t)
i=c[t]
n=u.a
if(p){n.k(0,m)
u.a.k(0,l)
u.a.k(0,j)
h.push(F.bF(m,l,j))
u.a.k(0,m)
u.a.k(0,j)
u.a.k(0,i)
h.push(F.bF(m,j,i))}else{n.k(0,l)
u.a.k(0,j)
u.a.k(0,i)
h.push(F.bF(l,j,i))
u.a.k(0,l)
u.a.k(0,i)
u.a.k(0,m)
h.push(F.bF(l,i,m))}p=!p}r=!r}return h},
gj:function(a){return this.b.length},
cb:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.b(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.i(0,q)
for(o=q-1;o>=0;--o){n=r.d.i(0,o)
if(a.aW(0,p,n)){p.aS()
break}}}}},
ca:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
s=t[u]
t=s.gfO(s)
if(t)s.aS()}},
aq:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.n)(u),++r)if(!u[r].bO())s=!1
return s},
bN:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.n)(u),++r)if(!u[r].bM())s=!1
return s},
b8:function(){var u,t,s,r,q,p
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
q=r.b
r.b=r.c
r.c=q
p=r.d
if(p!=null)r.d=new V.w(-p.a,-p.b,-p.c)
p=r.e
if(p!=null)r.e=new V.w(-p.a,-p.b,-p.c)
p=r.a.a.e
if(p!=null)p.v(null)}},
h:function(a){return this.M()},
D:function(a){var u,t,s,r=H.c([],[P.u])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].D(a))
return C.a.u(r,"\n")},
M:function(){return this.D("")}}
F.h7.prototype={
gj:function(a){return this.b.length},
cb:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.b(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.i(0,q)
for(o=q-1;o>=0;--o){n=r.c.i(0,o)
if(a.aW(0,p,n)){p.aS()
break}}}}},
ca:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
s=t[u]
t=J.v(s.a,s.b)
if(t)s.aS()}},
h:function(a){return this.M()},
D:function(a){var u,t,s=H.c([],[P.u]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.b(t,u)
s.push(t[u].D(a+(""+u+". ")))}return C.a.u(s,"\n")},
M:function(){return this.D("")}}
F.h8.prototype={
gj:function(a){return this.b.length},
hk:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.C(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.v(null)}s=t.a
if(s!=null){C.a.C(s.b.b,t)
t.a=null}}}},
h:function(a){return this.M()},
D:function(a){var u,t,s,r=H.c([],[P.u])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].D(a))
return C.a.u(r,"\n")},
M:function(){return this.D("")}}
F.aB.prototype={
bQ:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.dh(u.cx,r,o,t,s,q,p,a,n)},
fR:function(){return this.bQ(null)},
sY:function(a,b){var u
if(!J.v(this.f,b)){this.f=b
u=this.a
if(u!=null)u.X()}},
sdv:function(a){var u
a=a==null?null:a.q(0,Math.sqrt(a.B(a)))
if(!J.v(this.r,a)){this.r=a
u=this.a
if(u!=null)u.X()}},
say:function(a){var u
if(!J.v(this.z,a)){this.z=a
u=this.a
if(u!=null)u.X()}},
scW:function(a){var u
if(!J.v(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.X()}},
h1:function(a){var u,t,s=this
if(a.p(0,$.a3())){u=s.f
t=[P.G]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.aG())){u=s.r
t=[P.G]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.aF())){u=s.x
t=[P.G]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.ar())){u=s.y
t=[P.G]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.p(0,$.aH())){u=s.z
t=[P.G]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.cg())){u=s.Q
t=[P.G]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.ch())){u=s.Q
t=[P.G]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.p(0,$.bx()))return H.c([s.ch],[P.G])
else if(a.p(0,$.aE())){u=s.cx
t=[P.G]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.G])},
bO:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.c0()
t.d.L(0,new F.i3(s))
s=s.a
t.r=s.q(0,Math.sqrt(s.B(s)))
s=t.a
if(s!=null){s.X()
s=t.a.e
if(s!=null)s.ai(0)}return!0},
bM:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.c0()
t.d.L(0,new F.i2(s))
s=s.a
t.x=s.q(0,Math.sqrt(s.B(s)))
s=t.a
if(s!=null){s.X()
s=t.a.e
if(s!=null)s.ai(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.M()},
D:function(a){var u,t,s=this,r="-",q=H.c([],[P.u])
q.push(C.c.ah(J.a4(s.e),0))
u=s.f
if(u!=null)q.push(u.h(0))
else q.push(r)
u=s.r
if(u!=null)q.push(u.h(0))
else q.push(r)
u=s.x
if(u!=null)q.push(u.h(0))
else q.push(r)
u=s.y
if(u!=null)q.push(u.h(0))
else q.push(r)
u=s.z
if(u!=null)q.push(u.h(0))
else q.push(r)
u=s.Q
if(u!=null)q.push(u.h(0))
else q.push(r)
q.push(V.y(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.h(0))
else q.push(r)
t=C.a.u(q,", ")
return a+"{"+t+"}"},
M:function(){return this.D("")}}
F.i3.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.F(0,t)}}}
F.i2.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.F(0,t)}}}
F.hU.prototype={
t:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.b(u,r)
u[r].e=s;++s}this.b=!1}},
k:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.f(P.o("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.X()
return!0},
cT:function(a,b,c,d,e,f,g){var u=F.dh(a,null,b,c,d,e,f,g,0)
this.k(0,u)
return u},
b6:function(a,b,c,d,e,f){return this.cT(a,b,c,null,d,e,f)},
fK:function(a,b,c,d,e,f){return this.cT(a,b,c,d,e,f,null)},
gj:function(a){return this.c.length},
aq:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)u[s].bO()
return!0},
bN:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)u[s].bM()
return!0},
fN:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.q(0,Math.sqrt(p*p+o*o+n*n))
if(!J.v(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.v(null)}}}}return!0},
h:function(a){return this.M()},
D:function(a){var u,t,s,r
this.t()
u=H.c([],[P.u])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.n)(t),++r)u.push(t[r].D(a))
return C.a.u(u,"\n")},
M:function(){return this.D("")}}
F.hV.prototype={
gj:function(a){return this.b.length+this.c.length+this.d.length},
i:function(a,b){var u,t=this.b,s=t.length
if(b<s){if(b<0)return H.b(t,b)
return t[b]}b-=s
t=this.c
u=t.length
if(b<u){if(b<0)return H.b(t,b)
return t[b]}b-=u
t=this.d
if(b<0||b>=t.length)return H.b(t,b)
return t[b]},
L:function(a,b){var u=this
C.a.L(u.b,b)
C.a.L(u.c,new F.hW(u,b))
C.a.L(u.d,new F.hX(u,b))},
h:function(a){return this.M()},
M:function(){var u,t,s,r=H.c([],[P.u])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].D(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].D(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].D(""))
return C.a.u(r,"\n")}}
F.hW.prototype={
$1:function(a){if(!J.v(a.a,this.a))this.b.$1(a)}}
F.hX.prototype={
$1:function(a){var u=this.a
if(!J.v(a.a,u)&&!J.v(a.b,u))this.b.$1(a)}}
F.hY.prototype={
gj:function(a){return this.b.length+this.c.length},
i:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.b(t,u)
return t[u]}else{if(b<0)return H.b(t,b)
return t[b]}},
h:function(a){return this.M()},
M:function(){var u,t,s,r=H.c([],[P.u])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].D(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].D(""))
return C.a.u(r,"\n")}}
F.i_.prototype={}
F.hZ.prototype={
aW:function(a,b,c){return J.v(b.f,c.f)}}
F.i0.prototype={}
F.fM.prototype={
aX:function(a){var u,t,s,r=V.c0()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null)r=new V.w(r.a+s.a,r.b+s.b,r.c+s.c)}r=r.q(0,Math.sqrt(r.B(r)))
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.n)(a),++t)a[t].sdv(r)
return}}
F.i1.prototype={
gj:function(a){return this.b.length},
h:function(a){return this.M()},
M:function(){var u,t,s,r=H.c([],[P.u])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].D(""))
return C.a.u(r,"\n")}}
O.cy.prototype={
gl:function(){var u=this.x
return u==null?this.x=D.A():u},
w:function(a){var u=this.x
if(u!=null)u.v(a)},
a8:function(){return this.w(null)},
sbK:function(a){var u=this.r
if(!(Math.abs(u-a)<$.r().a)){this.r=a
u=new D.m("blurValue",u,a)
u.b=!0
this.w(u)}},
sd1:function(a){var u,t=this,s=t.e
if(s!=a){if(s!=null)s.gl().C(0,t.ga_())
u=t.e
t.e=a
if(a!=null)a.gl().k(0,t.ga_())
s=new D.m("colorTexture",u,t.e)
s.b=!0
t.w(s)}},
sbJ:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gl().C(0,s.ga_())
u=s.f
s.f=a
if(a!=null)a.gl().k(0,s.ga_())
r=new D.m("blurTexture",u,s.f)
t=r.b=!0
s.w(r)
r=s.f==null
if(!(r&&u!=null))r=!r&&u==null
else r=t
if(r){s.a=null
s.w(null)}}},
scd:function(a){var u,t=this,s=$.jG
if(s==null){s=new V.bM(1,0,0,0,1,0,0,0,1)
$.jG=s
a=s}else a=s
if(!J.v(t.b,a)){u=t.b
t.b=a
s=new D.m("textureMatrix",u,a)
s.b=!0
t.w(s)}},
sbI:function(a){var u,t,s=this
if(a==null)a=V.k5()
if(!J.v(s.c,a)){u=s.c
s.c=a
t=new D.m("blurAdjust",u,a)
t.b=!0
s.w(t)}},
a3:function(a,b){},
a0:function(a,b){if(b!=null)if(!C.a.ae(a,b)){b.a=a.length
a.push(b)}},
cc:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.a
if(g==null){u=h.f!=null
g="GaussianBlur_"+(u?"1":"0")
t=g.charCodeAt(0)==0?g:g
s=a.fr.i(0,t)
if(s==null){g=a.a
s=new A.f0(g,t)
s.bg(g,t)
r=s.z=new A.f1(u,t)
q=new P.ay("")
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
g=[P.G]
r.aD(q,3,H.c([0.75],g),H.c([0.5],g))
r.aD(q,6,H.c([0.42857,2.14286],g),H.c([0.41667,0.08333],g))
r.aD(q,9,H.c([0,1.8],g),H.c([0.5122,0.2439],g))
r.aD(q,12,H.c([0,1.38462,3.23077],g),H.c([0.22703,0.31622,0.07027],g))
r.aD(q,15,H.c([0.9375,2.8125],g),H.c([0.36184,0.13816],g))
r.aD(q,18,H.c([0.47368,2.36842,4.26316],g),H.c([0.29916,0.16318,0.03766],g))
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
s.c0(0,"uniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n\nattribute vec3 posAttr;\nattribute vec2 txtAttr;\n\nvarying vec2 txt2D;\n\nvoid main()\n{\n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;\n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"uniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n\nattribute vec3 posAttr;\nattribute vec2 txtAttr;\n\nvarying vec2 txt2D;\n\nvoid main()\n{\n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;\n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n":"uniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n\nattribute vec3 posAttr;\nattribute vec2 txtAttr;\n\nvarying vec2 txt2D;\n\nvoid main()\n{\n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;\n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n",g.charCodeAt(0)==0?g:g)
s.Q=s.x.i(0,"posAttr")
s.ch=s.x.i(0,"txtAttr")
s.cx=H.h(s.y.i(0,"projViewObjMat"),"$iW")
s.cy=H.h(s.y.i(0,"txt2DMat"),"$ibp")
s.dy=H.h(s.y.i(0,"colorTxt"),"$iae")
s.dx=H.h(s.y.i(0,"blurScale"),"$iap")
g=s.y
if(u){s.fr=H.h(g.i(0,"blurTxt"),"$iae")
s.db=H.h(s.y.i(0,"blurAdj"),"$ib3")}else s.fx=H.h(g.i(0,"blurValue"),"$iN")
a.bH(s)}g=h.a=s
b.e=null}r=g.z
g=b.e
if((!(g instanceof Z.aI)?b.e=null:g)==null){g=b.d
p=$.a3()
o=$.ar()
o=g.bL(new Z.c1(a.a),new Z.aq(p.a|o.a))
o.al($.a3()).e=h.a.Q.c
o.al($.ar()).e=h.a.ch.c
b.e=o}n=H.c([],[T.bm])
h.a0(n,h.e)
g=r.a
if(g)h.a0(n,h.f)
for(m=0;m<n.length;++m)n[m].W(a)
p=h.a
p.W(a)
o=h.e
p.cO(p.dy,o)
o=h.b
l=p.cy
l.toString
l.ac(o.a2(0,!0))
o=h.d
l=o.a
k=a.c
if(typeof l!=="number")return l.q()
o=o.b
j=a.d
if(typeof o!=="number")return o.q()
i=p.dx
i.a.uniform2f(i.d,l/k,o/j)
j=a.gdH()
p=p.cx
p.toString
p.ac(j.a2(0,!0))
p=h.a
if(g){g=h.f
p.cO(p.fr,g)
g=h.c
p.db.dU(g)}else{g=h.r
p=p.fx
p.a.uniform1f(p.d,g)}g=b.e
if(g instanceof Z.aI){g.W(a)
g.Z(a)
g.az(a)}else b.e=null
g=h.a
g.toString
p=a.a
p.useProgram(null)
g.x.bS()
for(m=0;m<n.length;++m){g=n[m]
if(g.c){g.c=!1
p.activeTexture(33984+g.a)
p.bindTexture(3553,null)}}}}
O.cL.prototype={
gl:function(){var u=this.fr
return u==null?this.fr=D.A():u},
w:function(a){var u=this.fr
if(u!=null)u.v(a)},
a8:function(){return this.w(null)},
cK:function(a){this.a=null
this.w(a)},
ft:function(){return this.cK(null)},
ex:function(a,b){var u=new D.aP()
u.b=!0
this.w(u)},
ez:function(a,b){var u=new D.aQ()
u.b=!0
this.w(u)},
cB:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.z,h=new H.I([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
q=r.gak()
p=h.i(0,r.gak())
h.m(0,q,p==null?1:p)}o=H.c([],[A.cq])
h.L(0,new O.ft(j,o))
C.a.bf(o,new O.fu())
n=new H.I([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
q=r.gak()
p=n.i(0,r.gak())
n.m(0,q,p==null?1:p)}m=H.c([],[A.cS])
n.L(0,new O.fv(j,m))
C.a.bf(m,new O.fw())
l=new H.I([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.n)(i),++s){r=i[s]
t=r.gak()
q=l.i(0,r.gak())
l.m(0,t,q==null?1:q)}k=H.c([],[A.d_])
l.L(0,new O.fx(j,k))
C.a.bf(k,new O.fy())
i=C.d.a1(j.e.a.length+3,4)
j.dy.e
return A.kZ(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,o,m,k)},
a0:function(a,b){if(b!=null)if(!C.a.ae(a,b)){b.a=a.length
a.push(b)}},
a3:function(a,b){var u,t,s
for(u=this.dx.a,u=new J.T(u,u.length);u.A();){t=u.d
t.toString
s=$.bO
t.a=s==null?$.bO=new V.ac(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s
s=t.b
if(s!=null)t.a=s.an(0,b,t)}},
cc:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=a9.a
if(b0==null){b0=a9.cB()
u=b1.fr.i(0,b0.aU)
if(u==null){u=A.kY(b0,b1.a)
b1.bH(u)}b0=a9.a=u
b2.e=null}t=b0.z
s=t.b7
b0=b2.e
if(!(b0 instanceof Z.aI))b0=b2.e=null
if(b0==null||!b0.d.p(0,s)){b0=t.k3
if(b0)b2.d.aq()
r=t.k4
if(r){q=b2.d
p=q.e
if(p!=null)++p.d
q.d.bN()
q.a.bN()
q=q.e
if(q!=null)q.ai(0)}q=t.r2
if(q){p=b2.d
o=p.e
if(o!=null)++o.d
p.a.fN()
p=p.e
if(p!=null)p.ai(0)}n=b2.d.bL(new Z.c1(b1.a),s)
n.al($.a3()).e=a9.a.Q.c
if(b0)n.al($.aG()).e=a9.a.cx.c
if(r)n.al($.aF()).e=a9.a.ch.c
if(t.r1)n.al($.ar()).e=a9.a.cy.c
if(q)n.al($.aH()).e=a9.a.db.c
if(t.rx)n.al($.aE()).e=a9.a.dx.c
b2.e=n}m=H.c([],[T.bm])
a9.a.W(b1)
if(t.dy){b0=a9.a
r=b1.dx
r=r.ga7(r)
b0=b0.dy
b0.toString
b0.ac(r.a2(0,!0))}if(t.fr){b0=a9.a
r=b1.cx
if(r==null){r=b1.db
r=r.ga7(r)
q=b1.dx
q=b1.cx=r.n(0,q.ga7(q))
r=q}b0=b0.fr
b0.toString
b0.ac(r.a2(0,!0))}b0=a9.a
r=b1.gdH()
b0=b0.fy
b0.toString
b0.ac(r.a2(0,!0))
if(t.ry){b0=a9.a
r=a9.b
b0=b0.k1
b0.toString
b0.ac(C.j.a2(r,!0))}if(t.x1){b0=a9.a
r=a9.c
b0=b0.k2
b0.toString
b0.ac(C.j.a2(r,!0))}if(t.x2){b0=a9.a
r=a9.d
b0=b0.k3
b0.toString
b0.ac(C.j.a2(r,!0))}if(t.y2>0){l=a9.e.a.length
b0=a9.a.k4
b0.a.uniform1i(b0.d,l)
for(k=0;k<l;++k){b0=a9.a
r=a9.e.a
if(k>=r.length)return H.b(r,k)
r=r[k]
b0=b0.r1
if(k>=b0.length)return H.b(b0,k)
b0=b0[k]
j=new Float32Array(H.br(r.a2(0,!0)))
b0.a.uniformMatrix4fv(b0.d,!1,j)}}b0=t.a
if(b0.a){r=a9.a
q=a9.f.f
r=r.r2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.c){a9.a0(m,a9.f.e)
b0=a9.a
r=a9.f.e
b0.ad(b0.ry,r)}if(t.id){b0=t.b
if(b0.a){r=a9.a
q=a9.r.f
r=r.x1
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.c){a9.a0(m,a9.r.e)
b0=a9.a
r=a9.r.e
b0.ad(b0.y1,r)}b0=t.c
if(b0.a){r=a9.a
q=a9.x.f
r=r.y2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.c){a9.a0(m,a9.x.e)
b0=a9.a
r=a9.x.e
b0.ad(b0.b7,r)}b0=t.d
if(b0.a){r=a9.a
q=a9.y.f
r=r.d9
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.c){a9.a0(m,a9.y.e)
b0=a9.a
r=a9.y.e
b0.ad(b0.da,r)}b0=t.e
r=b0.a
if(!r)q=b0.c
else q=!0
if(q){q=a9.a
p=a9.z.ch
q=q.de
q.a.uniform1f(q.d,p)}if(r){r=a9.a
q=a9.z.f
r=r.dc
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.c){a9.a0(m,a9.z.e)
b0=a9.a
r=a9.z.e
b0.ad(b0.dd,r)}b0=t.z
if(b0.length>0){r=b1.db
i=r.ga7(r)
r=P.z
h=new H.I([r,r])
for(r=a9.dx.e,q=r.length,g=0;g<r.length;r.length===q||(0,H.n)(r),++g){f=r[g]
e=f.gak()
d=h.i(0,e)
if(d==null)d=0
h.m(0,e,d+1)
c=J.ee(a9.a.bV.i(0,e),d)
p=f.gd4(f)
o=C.b.n(i.a,p.gd6(p))+C.b.n(i.b,p.gd7(p))+C.b.n(i.c,p.gd8())
b=C.b.n(i.e,p.gd6(p))+C.b.n(i.f,p.gd7(p))+C.b.n(i.r,p.gd8())
p=C.b.n(i.y,p.gd6(p))+C.b.n(i.z,p.gd7(p))+C.b.n(i.Q,p.gd8())
p=new V.w(o,b,p).q(0,Math.sqrt(o*o+b*b+p*p))
b=c.e
o=p.a
a=p.b
p=p.c
b.a.uniform3f(b.d,o,a,p)
p=f.gaJ(f)
a=c.f
a.a.uniform3f(a.d,p.a,p.b,p.c)
f.gaM()
p=f.gd4(f)
o=c.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gbe()
o=c.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gbc(f)
o=c.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gaM()
if(!C.a.ae(m,p)){p.a=m.length
m.push(p)}p=f.gaM()
o=p.gdt(p)
if(o){o=c.r
o.toString
b=p.d
if(!b)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}}for(r=b0.length,g=0;g<b0.length;b0.length===r||(0,H.n)(b0),++g){q=b0[g].a
l=h.i(0,q)
if(l==null)l=0
q=a9.a.bU.i(0,q)
q.a.uniform1i(q.d,l)}}b0=t.Q
if(b0.length>0){r=b1.db
i=r.ga7(r)
r=P.z
a0=new H.I([r,r])
for(r=a9.dx.f,q=r.length,g=0;g<r.length;r.length===q||(0,H.n)(r),++g){f=r[g]
e=f.gak()
d=a0.i(0,e)
if(d==null)d=0
a0.m(0,e,d+1)
c=J.ee(a9.a.bX.i(0,e),d)
a1=i.n(0,f.a)
p=f.a
o=$.bT
p=p.ce(o==null?$.bT=new V.L(0,0,0):o)
o=c.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=$.bT
p=a1.ce(p==null?$.bT=new V.L(0,0,0):p)
o=c.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.c
o=c.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
if(f.d!=null||!1){p=a1.dq(0)
o=p.a
b=p.b
a=p.c
a2=p.e
a3=p.f
a4=p.r
a5=p.y
a6=p.z
p=p.Q
a7=c.d
a7.toString
j=new Float32Array(H.br(new V.bM(o,b,a,a2,a3,a4,a5,a6,p).a2(0,!0)))
a7.a.uniformMatrix3fv(a7.d,!1,j)}p=f.d
o=p!=null
if(o){if(o)if(!C.a.ae(m,p)){p.a=m.length
m.push(p)}p=f.d
o=p!=null
if(o&&p.d>=6){b=c.f
b.toString
if(!o||p.d<6)b.a.uniform1i(b.d,0)
else{p=p.a
b.a.uniform1i(b.d,p)}}}p=f.r
o=c.y
o.a.uniform1f(o.d,p)
p=f.x
o=c.z
o.a.uniform1f(o.d,p)
p=f.y
o=c.Q
o.a.uniform1f(o.d,p)}for(r=b0.length,g=0;g<b0.length;b0.length===r||(0,H.n)(b0),++g){q=b0[g].a
l=a0.i(0,q)
if(l==null)l=0
q=a9.a.bW.i(0,q)
q.a.uniform1i(q.d,l)}}b0=t.ch
if(b0.length>0){r=b1.db
i=r.ga7(r)
r=P.z
a8=new H.I([r,r])
for(r=a9.dx.r,q=r.length,g=0;g<r.length;r.length===q||(0,H.n)(r),++g){f=r[g]
e=f.gak()
d=a8.i(0,e)
if(d==null)d=0
a8.m(0,e,d+1)
c=J.ee(a9.a.bZ.i(0,e),d)
p=f.ghi(f)
o=c.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gd4(f).hN()
o=c.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=i.ce(f.ghi(f))
o=c.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gaJ(f)
o=c.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
f.gaM()
p=f.gbe()
o=c.f
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gbc(f)
o=c.r
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.ghO()
o=c.x
o.a.uniform1f(o.d,p)
p=f.ghP()
o=c.y
o.a.uniform1f(o.d,p)
f.gaM()
p=f.gaM()
if(!C.a.ae(m,p)){p.a=m.length
m.push(p)}p=f.gaM()
o=p.gdt(p)
if(o){o=c.dx
o.toString
b=p.d
if(!b)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}f.gcj()
p=f.ghw()
o=c.z
o.a.uniform4f(o.d,p.a,p.b,p.c,p.d)
p=f.gcj()
if(!C.a.ae(m,p)){p.a=m.length
m.push(p)}p=f.gcj()
o=p.gdt(p)
if(o){o=c.dy
o.toString
b=p.d
if(!b)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}if(f.ghD()){p=f.ghB()
o=c.Q
o.a.uniform1f(o.d,p)
p=f.ghA()
o=c.ch
o.a.uniform1f(o.d,p)}if(f.ghC()){p=f.ghx()
o=c.cx
o.a.uniform1f(o.d,p)
p=f.ghy()
o=c.cy
o.a.uniform1f(o.d,p)
p=f.ghz()
o=c.db
o.a.uniform1f(o.d,p)}}for(r=b0.length,g=0;g<b0.length;b0.length===r||(0,H.n)(b0),++g){q=b0[g].a
l=a8.i(0,q)
if(l==null)l=0
q=a9.a.bY.i(0,q)
q.a.uniform1i(q.d,l)}}}if(t.f.c){a9.a0(m,a9.Q.e)
b0=a9.a
r=a9.Q.e
b0.ad(b0.df,r)}if(t.dx){b0=a9.a
r=b1.Q
if(r==null){r=b1.db
r=b1.Q=r.ga7(r).dq(0)}b0=b0.id
b0.toString
b0.ac(r.a2(0,!0))}if(t.cy){a9.a0(m,a9.ch)
b0=a9.a
r=a9.ch
b0.ad(b0.dg,r)
b0=t.r
if(b0.a){r=a9.a
q=a9.cx.f
r=r.dh
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.c){a9.a0(m,a9.cx.e)
b0=a9.a
r=a9.cx.e
b0.ad(b0.di,r)}b0=t.x
r=b0.a
if(!r)q=b0.c
else q=!0
if(q){q=a9.a
p=a9.cy.ch
q=q.dj
q.a.uniform1f(q.d,p)}if(r){r=a9.a
q=a9.cy.f
r=r.dk
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.c){a9.a0(m,a9.cy.e)
b0=a9.a
r=a9.cy.e
b0.ad(b0.dl,r)}}b0=t.y
r=b0.a
q=!r
if(q)p=b0.c
else p=!0
if(p){if(r){r=a9.a
p=a9.db.f
r=r.dm
r.a.uniform1f(r.d,p)}if(b0.c){a9.a0(m,a9.db.e)
r=a9.a
p=a9.db.e
r.ad(r.dn,p)}r=b1.a
r.enable(3042)
r.blendFunc(770,771)}for(r=b1.a,k=0;k<m.length;++k){p=m[k]
if(!p.c&&p.d>=6){p.c=!0
r.activeTexture(33984+p.a)
r.bindTexture(34067,p.b)}}p=b2.e
p.W(b1)
p.Z(b1)
p.az(b1)
if(q)b0=b0.c
else b0=!0
if(b0)r.disable(3042)
for(k=0;k<m.length;++k){b0=m[k]
if(b0.c){b0.c=!1
r.activeTexture(33984+b0.a)
r.bindTexture(34067,null)}}b0=a9.a
b0.toString
r.useProgram(null)
b0.x.bS()},
h:function(a){var u=this.a
if(u!=null)return u.b
else return this.cB().aU}}
O.ft.prototype={
$2:function(a,b){if(typeof b!=="number")return b.F()
return this.b.push(new A.cq(a,C.d.a1(b+3,4)*4))}}
O.fu.prototype={
$2:function(a,b){return J.iX(a.a,b.a)}}
O.fv.prototype={
$2:function(a,b){if(typeof b!=="number")return b.F()
return this.b.push(new A.cS(a,C.d.a1(b+3,4)*4))}}
O.fw.prototype={
$2:function(a,b){return J.iX(a.a,b.a)}}
O.fx.prototype={
$2:function(a,b){if(typeof b!=="number")return b.F()
return this.b.push(new A.d_(a,C.d.a1(b+3,4)*4))}}
O.fy.prototype={
$2:function(a,b){return J.iX(a.a,b.a)}}
O.fn.prototype={
av:function(){var u,t=this
t.cp()
u=t.f
if(!(Math.abs(u-1)<$.r().a)){t.f=1
u=new D.m(t.b,u,1)
u.b=!0
t.a.w(u)}}}
O.bL.prototype={
w:function(a){return this.a.w(a)},
a8:function(){return this.w(null)},
av:function(){},
cN:function(a){var u,t,s=this
if(!s.c.p(0,a)){u=s.c
if(!u.a)u=u.c
else u=!0
if(u){if(!a.a)u=a.c
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.av()
u=s.a
u.a=null
u.w(null)}},
say:function(a){var u,t=this,s=t.c
if(!s.c)t.cN(new A.V(s.a,!1,!0))
s=t.e
if(s!==a){if(s!=null)s.gl().C(0,t.ga_())
u=t.e
t.e=a
a.gl().k(0,t.ga_())
s=new D.m(t.b+".textureCube",u,t.e)
s.b=!0
t.a.w(s)}}}
O.fo.prototype={}
O.al.prototype={
cM:function(a){var u,t,s=this
if(!s.f.p(0,a)){u=s.f
s.f=a
t=new D.m(s.b+".color",u,a)
t.b=!0
s.a.w(t)}},
av:function(){this.cp()
this.cM(new V.M(1,1,1))},
saJ:function(a,b){this.cN(new A.V(!0,!1,this.c.c))
this.cM(b)}}
O.fq.prototype={}
O.fr.prototype={
av:function(){var u,t=this
t.cq()
u=t.ch
if(!(Math.abs(u-1)<$.r().a)){t.ch=1
u=new D.m(t.b+".refraction",u,1)
u.b=!0
t.a.w(u)}}}
O.fs.prototype={
av:function(){var u,t=this
t.cq()
u=t.ch
if(!(Math.abs(u-100)<$.r().a)){t.ch=100
u=new D.m(t.b+".shininess",u,100)
u.b=!0
t.a.w(u)}}}
O.d3.prototype={}
O.d4.prototype={
gl:function(){var u=this.e
return u==null?this.e=D.A():u},
w:function(a){var u=this.e
if(u!=null)u.v(a)},
a8:function(){return this.w(null)},
eN:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.ga_(),s=[{func:1,ret:-1,args:[D.K]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q!=null){p=q.f
if(p==null){p=new D.ak()
p.d=0
q.f=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}this.a8()},
eP:function(a,b){var u,t
for(u=b.gS(b),t=this.ga_();u.A();)u.gK(u).gl().C(0,t)
this.a8()},
scY:function(a){var u=this.f
if(u!==a){this.f=a
u=new D.m("blend",u,a)
u.b=!0
this.w(u)}},
a3:function(a,b){},
em:function(a){a=C.d.a1(a+3,4)*4
if(a<=0)return 4
return a},
cc:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.em(j.c.a.length)
if(i!==j.d||j.f!=j.r){j.d=i
j.r=j.f
j.b=null}u=j.b
if(u==null){u=j.f
t="TextureLayout_"+i+"_"+C.d.h(u.a)
s=a.fr.i(0,t)
if(s==null){s=A.lh(i,u,a.a)
a.bH(s)}j.b=s
u=s}if(b.e==null){u=b.d.bL(new Z.c1(a.a),$.a3())
t=u.al($.a3())
r=j.b
t.e=r.z.c
b.e=u
u=r}u.W(a)
q=H.c([],[T.bm])
for(p=0,o=0;u=j.c.a,o<u.length;++o){n=u[o]
if(n!=null&&n.a!=null){u=n.a
if(u!=null)if(!C.a.ae(q,u)){u.a=q.length
q.push(u)}u=j.b
t=n.a
u=u.cx
if(p>=u.length)return H.b(u,p)
u=u[p]
r=t==null||!t.d
m=u.a
u=u.d
if(r)m.uniform1i(u,0)
else m.uniform1i(u,t.a)
u=j.b
t=n.b
u=u.cy
if(p>=u.length)return H.b(u,p)
u=u[p]
if(t==null){t=$.bO
if(t==null){t=new V.ac(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.bO=t}}l=new Float32Array(H.br(t.a2(0,!0)))
u.a.uniformMatrix4fv(u.d,!1,l)
u=j.b
k=n.c
u.toString
if(k==null){t=$.bW
if(t==null){t=V.fV(0,0,1,1)
$.bW=t
k=t}else k=t}t=u.db
if(p>=t.length)return H.b(t,p)
t=t[p]
t.a.uniform2f(t.d,k.a,k.b)
u=u.dx
if(p>=u.length)return H.b(u,p)
u=u[p]
u.a.uniform2f(u.d,k.c,k.d)
u=j.b
k=n.d
u.toString
if(k==null){t=$.bW
if(t==null){t=V.fV(0,0,1,1)
$.bW=t
k=t}else k=t}t=u.dy
if(p>=t.length)return H.b(t,p)
t=t[p]
t.a.uniform2f(t.d,k.a,k.b)
u=u.fr
if(p>=u.length)return H.b(u,p)
u=u[p]
u.a.uniform2f(u.d,k.c,k.d)
u=j.b
t=n.e
u=u.fx
if(p>=u.length)return H.b(u,p)
u=u[p]
t=t?1:0
u.a.uniform1i(u.d,t);++p}}u=j.b.Q
u.a.uniform1i(u.d,p)
u=j.b
t=j.a
u.ch.dR(t)
for(o=0;o<q.length;++o)q[o].W(a)
u=b.e
if(u instanceof Z.aI){u.W(a)
u.Z(a)
u.az(a)}else b.e=null
u=j.b
u.toString
t=a.a
t.useProgram(null)
u.x.bS()
for(o=0;o<q.length;++o){u=q[o]
if(u.c){u.c=!1
t.activeTexture(33984+u.a)
t.bindTexture(3553,null)}}}}
O.b_.prototype={
w:function(a){var u=this.f
if(u!=null)u.v(a)},
a8:function(){return this.w(null)}}
T.bm.prototype={}
T.hr.prototype={}
T.hs.prototype={
gl:function(){var u=this.y
return u==null?this.y=D.A():u},
W:function(a){var u,t=this
if(!t.c&&t.d){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(3553,t.b)}}}
T.ht.prototype={
gl:function(){var u=this.e
return u==null?this.e=D.A():u}}
T.hv.prototype={
ds:function(a,b,c,d,e,f){var u,t=this,s=34067,r=t.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,10497)
r.texParameteri(s,10243,10497)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null)
u=new T.ht()
u.a=0
u.b=q
u.c=!1
u.d=0
t.aF(u,q,a,34069,!1,!1)
t.aF(u,q,d,34070,!1,!1)
t.aF(u,q,b,34071,!1,!1)
t.aF(u,q,e,34072,!1,!1)
t.aF(u,q,c,34073,!1,!1)
t.aF(u,q,f,34074,!1,!1)
return u},
aF:function(a,b,c,d,e,f){var u=document.createElement("img")
u.src=c;++this.d
W.P(u,"load",new T.hw(this,u,!1,b,!1,d,a),!1)},
fu:function(a,b,c){var u,t,s,r
b=V.cf(b)
u=V.cf(a.width)
t=V.cf(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.j_()
s.width=u
s.height=t
r=C.f.dO(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.m3(r.getImageData(0,0,s.width,s.height))}}}
T.hw.prototype={
$1:function(a){var u=this,t=u.a,s=t.fu(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.r.hq(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.bT()}++t.e}}
X.eo.prototype={
gl:function(){var u=this.fr
return u==null?this.fr=D.A():u},
V:function(a){var u=this.fr
if(u!=null)u.v(a)},
saj:function(a,b){var u,t=this
if(b<1)b=1
u=t.a
if(u!==b){t.y=null
t.c=t.a=b
u=new D.m("width",u,b)
u.b=!0
t.V(u)}},
saf:function(a,b){var u,t=this
if(b<1)b=1
u=t.b
if(u!==b){t.y=null
t.d=t.b=b
u=new D.m("height",u,b)
u.b=!0
t.V(u)}},
W:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=3553,e=36161,d=36160
if(h.f){u=a.a
t=u.drawingBufferWidth
s=h.r
if(typeof t!=="number")return t.n()
h.saj(0,C.b.U(t*s))
u=u.drawingBufferHeight
s=h.x
if(typeof u!=="number")return u.n()
h.saf(0,C.b.U(u*s))}if(h.y==null){u=a.a
t=h.ch
s=h.a
r=h.b
q=u.getParameter(3379)
p=V.cf(s)
o=V.cf(r)
q=V.cf(q)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
u.bindTexture(f,n)
u.texParameteri(f,10242,33071)
u.texParameteri(f,10243,33071)
u.texParameteri(f,10241,9729)
u.texParameteri(f,10240,9729)
C.r.dL(u,f,0,6408,p,o,0,6408,5121,g)
u.bindTexture(f,g)
m=T.jS(n)
m.e=s
m.f=r
m.r=p
m.x=o
if(!m.d){m.d=!0
s=m.y
if(s!=null)s.bT()}t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.bT()
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
a.c=C.b.U(s*h.a)
r=t.d
a.d=C.b.U(r*h.b)
l=t.a
k=h.c
j=C.b.U(l*k)
t=t.b
l=h.d
u.viewport(j,C.b.U(t*l),C.b.U(s*k),C.b.U(r*l))
u.clearDepth(h.db)
if(h.cy){t=h.cx
u.clearColor(t.a,t.b,t.c,t.d)
i=16640}else i=256
if(i>0)u.clear(i)},
az:function(a){a.a.bindFramebuffer(36160,null)}}
X.iZ.prototype={}
X.f_.prototype={
gl:function(){var u=this.x
return u==null?this.x=D.A():u},
W:function(a){var u,t,s,r,q,p,o=a.a
o.bindFramebuffer(36160,null)
o.enable(2884)
o.enable(2929)
o.depthFunc(513)
u=o.drawingBufferWidth
t=o.drawingBufferHeight
s=this.r
r=s.a
if(typeof u!=="number")return H.t(u)
q=C.b.U(r*u)
r=s.b
if(typeof t!=="number")return H.t(t)
p=C.b.U(r*t)
r=C.b.U(s.c*u)
a.c=r
s=C.b.U(s.d*t)
a.d=s
o.viewport(q,p,r,s)
o.clearDepth(this.c)
s=this.a
o.clearColor(s.a,s.b,s.c,s.d)
o.clear(16640)},
az:function(a){}}
X.f3.prototype={
gl:function(){var u=this.b
return u==null?this.b=D.A():u}}
X.cR.prototype={
gl:function(){var u=this.f
return u==null?this.f=D.A():u},
V:function(a){var u=this.f
if(u!=null)u.v(a)},
e8:function(){return this.V(null)},
sar:function(a){var u,t,s=this
if(!J.v(s.b,a)){u=s.b
if(u!=null)u.gl().C(0,s.gcu())
t=s.b
s.b=a
if(a!=null)a.gl().k(0,s.gcu())
u=new D.m("mover",t,s.b)
u.b=!0
s.V(u)}}}
X.hn.prototype={}
V.iP.prototype={
$1:function(a){var u=C.b.dM(this.a.gfY(),2)
if(u!=="0.00")P.jp(u+" fps")}}
V.h9.prototype={
e1:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.P(q,"scroll",new V.hb(o),!1)},
cU:function(a){var u,t,s,r,q,p,o,n,m,l,k
this.fz()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.hu(C.a.h0(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
t.appendChild(o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
t.appendChild(o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
t.appendChild(o)
break
case"Link":n=p.b
if(H.mq(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.b(m,1)
l.href=m[1]
l.textContent=m[0]
t.appendChild(l)}else{k=P.lt(C.I,n,C.n,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+k
l.textContent=n
t.appendChild(l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
t.appendChild(o)
break}}this.a.appendChild(t)},
fz:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new R.hz()
t=P.u
u.a=new H.I([t,R.d1])
u.b=new H.I([t,R.d8])
u.c=u.N(0,q)
t=u.N(0,q).u(0,p)
s=T.Q(new H.J("*"))
t.a.push(s)
t.c=!0
t=u.N(0,p).u(0,p)
s=new T.aw()
r=[T.cK]
s.a=H.c([],r)
t.a.push(s)
t=T.Q(new H.J("*"))
s.a.push(t)
t=u.N(0,p).u(0,"BoldEnd")
s=T.Q(new H.J("*"))
t.a.push(s)
t.c=!0
t=u.N(0,q).u(0,o)
s=T.Q(new H.J("_"))
t.a.push(s)
t.c=!0
t=u.N(0,o).u(0,o)
s=new T.aw()
s.a=H.c([],r)
t.a.push(s)
t=T.Q(new H.J("_"))
s.a.push(t)
t=u.N(0,o).u(0,n)
s=T.Q(new H.J("_"))
t.a.push(s)
t.c=!0
t=u.N(0,q).u(0,m)
s=T.Q(new H.J("`"))
t.a.push(s)
t.c=!0
t=u.N(0,m).u(0,m)
s=new T.aw()
s.a=H.c([],r)
t.a.push(s)
t=T.Q(new H.J("`"))
s.a.push(t)
t=u.N(0,m).u(0,"CodeEnd")
s=T.Q(new H.J("`"))
t.a.push(s)
t.c=!0
t=u.N(0,q).u(0,l)
s=T.Q(new H.J("["))
t.a.push(s)
t.c=!0
t=u.N(0,l).u(0,k)
s=T.Q(new H.J("|"))
t.a.push(s)
s=u.N(0,l).u(0,j)
t=T.Q(new H.J("]"))
s.a.push(t)
s.c=!0
s=u.N(0,l).u(0,l)
t=new T.aw()
t.a=H.c([],r)
s.a.push(t)
s=T.Q(new H.J("|]"))
t.a.push(s)
s=u.N(0,k).u(0,j)
t=T.Q(new H.J("]"))
s.a.push(t)
s.c=!0
s=u.N(0,k).u(0,k)
t=new T.aw()
t.a=H.c([],r)
s.a.push(t)
s=T.Q(new H.J("|]"))
t.a.push(s)
u.N(0,q).u(0,i).a.push(new T.eg())
s=u.N(0,i).u(0,i)
t=new T.aw()
t.a=H.c([],r)
s.a.push(t)
s=T.Q(new H.J("*_`["))
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
V.hb.prototype={
$1:function(a){P.jV(C.i,new V.ha(this.a))}}
V.ha.prototype={
$0:function(){var u=C.b.U(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}};(function aliases(){var u=J.a.prototype
u.dW=u.h
u=J.cD.prototype
u.dX=u.h
u=T.cz.prototype
u.dV=u.aK
u.co=u.h
u=O.bL.prototype
u.cp=u.av
u=O.al.prototype
u.cq=u.av})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"lY","lm",7)
u(P,"lZ","ln",7)
u(P,"m_","lo",7)
t(P,"kb","lW",10)
var n
s(n=E.as.prototype,"gdC",0,0,null,["$1","$0"],["dD","h9"],0,0)
s(n,"gdE",0,0,null,["$1","$0"],["dF","ha"],0,0)
s(n,"gdA",0,0,null,["$1","$0"],["dB","h8"],0,0)
s(n,"gdw",0,0,null,["$1","$0"],["dz","h5"],0,0)
r(n,"gh3","h4",3)
r(n,"gh6","h7",3)
s(n=E.d5.prototype,"gcr",0,0,null,["$1","$0"],["ct","cs"],0,0)
q(n,"ghm","dJ",10)
p(n=X.dd.prototype,"geQ","eR",4)
p(n,"geA","eB",4)
p(n,"geG","eH",2)
p(n,"geU","eV",11)
p(n,"geS","eT",11)
p(n,"geY","eZ",2)
p(n,"gf1","f2",2)
p(n,"geK","eL",2)
p(n,"gf_","f0",2)
p(n,"geI","eJ",2)
p(n,"gf3","f4",18)
p(n,"gf5","f6",4)
p(n,"gfl","fm",5)
p(n,"gfh","fi",5)
p(n,"gfj","fk",5)
s(n=D.cF.prototype,"gcI",0,0,null,["$1","$0"],["cJ","eW"],0,0)
p(n,"gf7","f8",19)
r(n,"geu","ev",12)
r(n,"gfb","fc",12)
s(D.bj.prototype,"gbh",0,0,null,["$1","$0"],["a5","e3"],0,0)
o(V.B.prototype,"gj","aV",6)
o(V.w.prototype,"gj","aV",6)
o(V.bq.prototype,"gj","aV",6)
s(n=U.bG.prototype,"gaG",0,0,null,["$1","$0"],["E","a6"],0,0)
r(n,"ge4","e5",13)
r(n,"gf9","fa",13)
s(n=U.de.prototype,"gaG",0,0,null,["$1","$0"],["E","a6"],0,0)
p(n,"gbq","br",1)
p(n,"gbs","bt",1)
p(n,"gbu","bv",1)
s(n=U.df.prototype,"gaG",0,0,null,["$1","$0"],["E","a6"],0,0)
p(n,"gbq","br",1)
p(n,"gbs","bt",1)
p(n,"gbu","bv",1)
p(n,"gen","eo",1)
p(n,"gep","eq",1)
p(n,"gfG","fH",1)
p(n,"gfE","fF",1)
p(n,"gfC","fD",1)
p(U.dg.prototype,"ger","es",1)
s(n=M.cm.prototype,"gT",0,0,null,["$1","$0"],["P","at"],0,0)
r(n,"gfd","fe",14)
r(n,"gff","fg",14)
s(M.co.prototype,"gT",0,0,null,["$1","$0"],["P","at"],0,0)
s(n=M.cu.prototype,"gT",0,0,null,["$1","$0"],["P","at"],0,0)
r(n,"geC","eD",3)
r(n,"geE","eF",3)
s(M.cx.prototype,"gT",0,0,null,["$1","$0"],["P","at"],0,0)
s(O.cy.prototype,"ga_",0,0,null,["$1","$0"],["w","a8"],0,0)
s(n=O.cL.prototype,"ga_",0,0,null,["$1","$0"],["w","a8"],0,0)
s(n,"gfs",0,0,null,["$1","$0"],["cK","ft"],0,0)
r(n,"gew","ex",15)
r(n,"gey","ez",15)
s(O.bL.prototype,"ga_",0,0,null,["$1","$0"],["w","a8"],0,0)
s(n=O.d4.prototype,"ga_",0,0,null,["$1","$0"],["w","a8"],0,0)
r(n,"geM","eN",16)
r(n,"geO","eP",16)
s(O.b_.prototype,"ga_",0,0,null,["$1","$0"],["w","a8"],0,0)
s(X.cR.prototype,"gcu",0,0,null,["$1","$0"],["V","e8"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.Y,null)
s(P.Y,[H.j7,J.a,J.T,P.dA,P.j,H.cH,P.f5,H.cv,H.hP,H.hE,P.bc,H.bC,H.dR,P.at,H.fc,H.fd,H.f7,P.dX,P.dj,P.d2,P.hl,P.d6,P.ix,P.ir,P.il,P.dz,P.p,P.eu,P.iw,P.b7,P.a6,P.ab,P.aK,P.fQ,P.d0,P.ds,P.eZ,P.bh,P.cJ,P.aU,P.u,P.ay,W.eC,W.D,W.cw,P.e1,P.im,T.eg,T.cz,T.cK,T.h3,R.d1,R.d7,R.d8,R.hz,O.ai,O.bN,E.eq,E.as,E.fW,E.d5,Z.di,Z.c1,Z.aI,Z.bd,Z.aq,D.et,D.ak,D.K,X.cl,X.cE,X.f9,X.fg,X.a7,X.fF,X.hA,X.dd,D.eH,D.a0,D.bj,D.hf,V.M,V.U,V.eP,V.bM,V.ac,V.O,V.L,V.a8,V.cU,V.B,V.w,V.bq,U.de,U.df,U.dg,M.co,M.cu,M.cx,M.a2,A.ci,A.ej,A.V,A.f1,A.cq,A.cS,A.d_,A.fp,A.bX,A.bY,A.bZ,A.bb,A.db,A.hL,F.aL,F.eS,F.bK,F.fb,F.bS,F.h4,F.h6,F.h7,F.h8,F.aB,F.hU,F.hV,F.hY,F.i_,F.i0,F.i1,O.d3,O.bL,O.fq,O.b_,T.hv,X.hn,X.iZ,X.f3,X.cR,V.h9])
s(J.a,[J.f6,J.cC,J.cD,J.aR,J.bJ,J.be,H.bR,W.d,W.ef,W.cj,W.aj,W.C,W.dl,W.a5,W.eG,W.eI,W.dn,W.cs,W.dq,W.eK,W.i,W.dt,W.aN,W.f2,W.dv,W.aO,W.ff,W.fz,W.dB,W.dC,W.aT,W.dD,W.dG,W.aV,W.dK,W.dM,W.aX,W.dN,W.aY,W.dS,W.az,W.dV,W.hy,W.b0,W.dY,W.hC,W.hR,W.e2,W.e4,W.e6,W.e8,W.ea,P.bg,P.dx,P.bi,P.dI,P.fU,P.dT,P.bo,P.e_,P.ek,P.dk,P.cW,P.dP])
s(J.cD,[J.fR,J.c_,J.aS])
t(J.j6,J.aR)
s(J.bJ,[J.cB,J.cA])
t(P.fe,P.dA)
s(P.fe,[H.dc,W.ic,W.ib,P.eV])
t(H.J,H.dc)
s(P.j,[H.eN,H.fj,H.i5])
s(P.f5,[H.fk,H.i6])
s(P.bc,[H.fN,H.f8,H.hO,H.es,H.h1,P.cQ,P.ag,P.hQ,P.hN,P.hh,P.ey,P.eF])
s(H.bC,[H.iV,H.ho,H.iK,H.iL,H.iM,P.i8,P.i7,P.i9,P.ia,P.iv,P.iu,P.iC,P.ip,P.iq,P.fi,P.eL,P.eM,W.fB,W.fD,W.h0,W.hk,W.ig,P.iD,P.eW,P.eX,P.em,E.fX,E.fY,E.fZ,E.hx,D.eQ,D.eR,F.iy,F.iE,F.iF,F.iG,F.iH,F.iQ,F.iR,F.i3,F.i2,F.hW,F.hX,O.ft,O.fu,O.fv,O.fw,O.fx,O.fy,T.hw,V.iP,V.hb,V.ha])
s(H.ho,[H.hi,H.bA])
t(P.fh,P.at)
t(H.I,P.fh)
t(H.cG,H.eN)
t(H.cM,H.bR)
s(H.cM,[H.c3,H.c5])
t(H.c4,H.c3)
t(H.bQ,H.c4)
t(H.c6,H.c5)
t(H.cN,H.c6)
s(H.cN,[H.fG,H.fH,H.fI,H.fJ,H.fK,H.cO,H.fL])
t(P.io,P.ix)
t(P.ik,P.ir)
t(P.ez,P.hl)
t(P.eO,P.eu)
t(P.hS,P.eO)
t(P.hT,P.ez)
s(P.ab,[P.G,P.z])
s(P.ag,[P.bl,P.f4])
s(W.d,[W.H,W.eU,W.aW,W.c7,W.aZ,W.aA,W.c9,W.i4,W.c2,P.en,P.b9])
s(W.H,[W.X,W.aJ])
s(W.X,[W.l,P.k])
s(W.l,[W.eh,W.ei,W.ba,W.eY,W.bI,W.h2])
t(W.eB,W.aj)
t(W.bE,W.dl)
s(W.a5,[W.eD,W.eE])
t(W.dp,W.dn)
t(W.cr,W.dp)
t(W.dr,W.dq)
t(W.eJ,W.dr)
t(W.aM,W.cj)
t(W.du,W.dt)
t(W.eT,W.du)
t(W.dw,W.dv)
t(W.bH,W.dw)
t(W.b1,W.i)
s(W.b1,[W.bf,W.am,W.bn])
t(W.fA,W.dB)
t(W.fC,W.dC)
t(W.dE,W.dD)
t(W.fE,W.dE)
t(W.dH,W.dG)
t(W.cP,W.dH)
t(W.dL,W.dK)
t(W.fS,W.dL)
t(W.h_,W.dM)
t(W.c8,W.c7)
t(W.hd,W.c8)
t(W.dO,W.dN)
t(W.he,W.dO)
t(W.hj,W.dS)
t(W.dW,W.dV)
t(W.hp,W.dW)
t(W.ca,W.c9)
t(W.hq,W.ca)
t(W.dZ,W.dY)
t(W.hB,W.dZ)
t(W.b4,W.am)
t(W.e3,W.e2)
t(W.id,W.e3)
t(W.dm,W.cs)
t(W.e5,W.e4)
t(W.ih,W.e5)
t(W.e7,W.e6)
t(W.dF,W.e7)
t(W.e9,W.e8)
t(W.is,W.e9)
t(W.eb,W.ea)
t(W.it,W.eb)
t(W.ie,P.d2)
t(P.a9,P.im)
t(P.dy,P.dx)
t(P.fa,P.dy)
t(P.dJ,P.dI)
t(P.fO,P.dJ)
t(P.dU,P.dT)
t(P.hm,P.dU)
t(P.e0,P.e_)
t(P.hD,P.e0)
t(P.el,P.dk)
t(P.fP,P.b9)
t(P.dQ,P.dP)
t(P.hg,P.dQ)
s(T.cz,[T.aw,R.da])
s(E.eq,[Z.ck,A.cY,T.bm])
s(D.K,[D.aP,D.aQ,D.m,X.fT])
s(X.fT,[X.cI,X.av,X.bP,X.d9])
s(O.ai,[D.cF,U.bG,M.cm])
s(D.et,[U.ex,U.a1])
s(U.a1,[U.cn,U.cX])
s(A.cY,[A.f0,A.fl,A.hu])
s(A.db,[A.b2,A.hI,A.hJ,A.hK,A.hH,A.N,A.ap,A.F,A.b3,A.hM,A.bp,A.W,A.ae,A.R])
t(F.hc,F.eS)
t(F.hG,F.fb)
t(F.hZ,F.i_)
t(F.fM,F.i0)
s(O.d3,[O.cy,O.cL,O.d4])
s(O.bL,[O.fn,O.fo,O.al])
s(O.al,[O.fr,O.fs])
s(T.bm,[T.hr,T.ht])
t(T.hs,T.hr)
s(X.hn,[X.eo,X.f_])
u(H.dc,H.hP)
u(H.c3,P.p)
u(H.c4,H.cv)
u(H.c5,P.p)
u(H.c6,H.cv)
u(P.dA,P.p)
u(W.dl,W.eC)
u(W.dn,P.p)
u(W.dp,W.D)
u(W.dq,P.p)
u(W.dr,W.D)
u(W.dt,P.p)
u(W.du,W.D)
u(W.dv,P.p)
u(W.dw,W.D)
u(W.dB,P.at)
u(W.dC,P.at)
u(W.dD,P.p)
u(W.dE,W.D)
u(W.dG,P.p)
u(W.dH,W.D)
u(W.dK,P.p)
u(W.dL,W.D)
u(W.dM,P.at)
u(W.c7,P.p)
u(W.c8,W.D)
u(W.dN,P.p)
u(W.dO,W.D)
u(W.dS,P.at)
u(W.dV,P.p)
u(W.dW,W.D)
u(W.c9,P.p)
u(W.ca,W.D)
u(W.dY,P.p)
u(W.dZ,W.D)
u(W.e2,P.p)
u(W.e3,W.D)
u(W.e4,P.p)
u(W.e5,W.D)
u(W.e6,P.p)
u(W.e7,W.D)
u(W.e8,P.p)
u(W.e9,W.D)
u(W.ea,P.p)
u(W.eb,W.D)
u(P.dx,P.p)
u(P.dy,W.D)
u(P.dI,P.p)
u(P.dJ,W.D)
u(P.dT,P.p)
u(P.dU,W.D)
u(P.e_,P.p)
u(P.e0,W.D)
u(P.dk,P.at)
u(P.dP,P.p)
u(P.dQ,W.D)})()
var v={mangledGlobalNames:{z:"int",G:"double",ab:"num",u:"String",b7:"bool",aU:"Null",bh:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.K]},{func:1,ret:-1,args:[D.K]},{func:1,ret:-1,args:[W.am]},{func:1,ret:-1,args:[P.z,[P.j,E.as]]},{func:1,ret:-1,args:[W.i]},{func:1,ret:-1,args:[W.bn]},{func:1,ret:P.G},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.aU,args:[,,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bf]},{func:1,ret:-1,args:[P.z,[P.j,D.a0]]},{func:1,ret:-1,args:[P.z,[P.j,U.a1]]},{func:1,ret:-1,args:[P.z,[P.j,M.a2]]},{func:1,ret:-1,args:[P.z,[P.j,V.ac]]},{func:1,ret:-1,args:[P.z,[P.j,O.b_]]},{func:1,ret:P.aU,args:[,]},{func:1,ret:-1,args:[W.b4]},{func:1,ret:P.b7,args:[[P.j,D.a0]]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.f=W.ba.prototype
C.F=J.a.prototype
C.a=J.aR.prototype
C.G=J.cA.prototype
C.d=J.cB.prototype
C.j=J.cC.prototype
C.b=J.bJ.prototype
C.c=J.be.prototype
C.H=J.aS.prototype
C.q=J.fR.prototype
C.r=P.cW.prototype
C.k=J.c_.prototype
C.t=W.b4.prototype
C.u=W.c2.prototype
C.l=function getTagFallback(o) {
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
C.m=function(hooks) { return hooks; }

C.B=new P.fQ()
C.n=new P.hS()
C.C=new P.hT()
C.e=new P.io()
C.o=new A.bb(0,"ColorBlendType.Overwrite")
C.p=new A.bb(1,"ColorBlendType.Additive")
C.D=new A.bb(2,"ColorBlendType.Average")
C.h=new A.bb(3,"ColorBlendType.AlphaBlend")
C.i=new P.aK(0)
C.E=new P.aK(5e6)
C.I=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.z])})();(function staticFields(){$.ah=0
$.bB=null
$.ju=null
$.kg=null
$.ka=null
$.kj=null
$.iI=null
$.iN=null
$.jn=null
$.bs=null
$.cc=null
$.cd=null
$.jg=!1
$.af=C.e
$.a_=[]
$.jG=null
$.bO=null
$.jM=null
$.bT=null
$.bW=null
$.k0=null
$.jZ=null
$.k_=null
$.k3=null
$.k2=null
$.k1=null
$.k4=null
$.jL=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"mw","kp",function(){return H.kf("_$dart_dartClosure")})
u($,"mx","jq",function(){return H.kf("_$dart_js")})
u($,"my","kq",function(){return H.ao(H.hF({
toString:function(){return"$receiver$"}}))})
u($,"mz","kr",function(){return H.ao(H.hF({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"mA","ks",function(){return H.ao(H.hF(null))})
u($,"mB","kt",function(){return H.ao(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mE","kw",function(){return H.ao(H.hF(void 0))})
u($,"mF","kx",function(){return H.ao(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mD","kv",function(){return H.ao(H.jX(null))})
u($,"mC","ku",function(){return H.ao(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"mH","kz",function(){return H.ao(H.jX(void 0))})
u($,"mG","ky",function(){return H.ao(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"mU","jr",function(){return P.ll()})
u($,"mV","kD",function(){return P.la("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"mO","kC",function(){return Z.aa(0)})
u($,"mI","kA",function(){return Z.aa(511)})
u($,"mQ","a3",function(){return Z.aa(1)})
u($,"mP","aG",function(){return Z.aa(2)})
u($,"mK","aF",function(){return Z.aa(4)})
u($,"mR","ar",function(){return Z.aa(8)})
u($,"mS","aH",function(){return Z.aa(16)})
u($,"mL","cg",function(){return Z.aa(32)})
u($,"mM","ch",function(){return Z.aa(64)})
u($,"mN","kB",function(){return Z.aa(96)})
u($,"mT","bx",function(){return Z.aa(128)})
u($,"mJ","aE",function(){return Z.aa(256)})
u($,"mv","ko",function(){return new V.eP(1e-9)})
u($,"mu","r",function(){return $.ko()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.bR,ArrayBufferView:H.bR,Float32Array:H.bQ,Float64Array:H.bQ,Int16Array:H.fG,Int32Array:H.fH,Int8Array:H.fI,Uint16Array:H.fJ,Uint32Array:H.fK,Uint8ClampedArray:H.cO,CanvasPixelArray:H.cO,Uint8Array:H.fL,HTMLAudioElement:W.l,HTMLBRElement:W.l,HTMLBaseElement:W.l,HTMLBodyElement:W.l,HTMLButtonElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLDivElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLInputElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMediaElement:W.l,HTMLMenuElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTableElement:W.l,HTMLTableRowElement:W.l,HTMLTableSectionElement:W.l,HTMLTemplateElement:W.l,HTMLTextAreaElement:W.l,HTMLTimeElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLVideoElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLFrameSetElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,AccessibleNodeList:W.ef,HTMLAnchorElement:W.eh,HTMLAreaElement:W.ei,Blob:W.cj,HTMLCanvasElement:W.ba,CDATASection:W.aJ,CharacterData:W.aJ,Comment:W.aJ,ProcessingInstruction:W.aJ,Text:W.aJ,CSSPerspective:W.eB,CSSCharsetRule:W.C,CSSConditionRule:W.C,CSSFontFaceRule:W.C,CSSGroupingRule:W.C,CSSImportRule:W.C,CSSKeyframeRule:W.C,MozCSSKeyframeRule:W.C,WebKitCSSKeyframeRule:W.C,CSSKeyframesRule:W.C,MozCSSKeyframesRule:W.C,WebKitCSSKeyframesRule:W.C,CSSMediaRule:W.C,CSSNamespaceRule:W.C,CSSPageRule:W.C,CSSRule:W.C,CSSStyleRule:W.C,CSSSupportsRule:W.C,CSSViewportRule:W.C,CSSStyleDeclaration:W.bE,MSStyleCSSProperties:W.bE,CSS2Properties:W.bE,CSSImageValue:W.a5,CSSKeywordValue:W.a5,CSSNumericValue:W.a5,CSSPositionValue:W.a5,CSSResourceValue:W.a5,CSSUnitValue:W.a5,CSSURLImageValue:W.a5,CSSStyleValue:W.a5,CSSMatrixComponent:W.aj,CSSRotation:W.aj,CSSScale:W.aj,CSSSkew:W.aj,CSSTranslation:W.aj,CSSTransformComponent:W.aj,CSSTransformValue:W.eD,CSSUnparsedValue:W.eE,DataTransferItemList:W.eG,DOMException:W.eI,ClientRectList:W.cr,DOMRectList:W.cr,DOMRectReadOnly:W.cs,DOMStringList:W.eJ,DOMTokenList:W.eK,Element:W.X,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.aM,FileList:W.eT,FileWriter:W.eU,HTMLFormElement:W.eY,Gamepad:W.aN,History:W.f2,HTMLCollection:W.bH,HTMLFormControlsCollection:W.bH,HTMLOptionsCollection:W.bH,ImageData:W.aO,HTMLImageElement:W.bI,KeyboardEvent:W.bf,Location:W.ff,MediaList:W.fz,MIDIInputMap:W.fA,MIDIOutputMap:W.fC,MimeType:W.aT,MimeTypeArray:W.fE,PointerEvent:W.am,MouseEvent:W.am,DragEvent:W.am,Document:W.H,DocumentFragment:W.H,HTMLDocument:W.H,ShadowRoot:W.H,XMLDocument:W.H,Attr:W.H,DocumentType:W.H,Node:W.H,NodeList:W.cP,RadioNodeList:W.cP,Plugin:W.aV,PluginArray:W.fS,RTCStatsReport:W.h_,HTMLSelectElement:W.h2,SourceBuffer:W.aW,SourceBufferList:W.hd,SpeechGrammar:W.aX,SpeechGrammarList:W.he,SpeechRecognitionResult:W.aY,Storage:W.hj,CSSStyleSheet:W.az,StyleSheet:W.az,TextTrack:W.aZ,TextTrackCue:W.aA,VTTCue:W.aA,TextTrackCueList:W.hp,TextTrackList:W.hq,TimeRanges:W.hy,Touch:W.b0,TouchEvent:W.bn,TouchList:W.hB,TrackDefaultList:W.hC,CompositionEvent:W.b1,FocusEvent:W.b1,TextEvent:W.b1,UIEvent:W.b1,URL:W.hR,VideoTrackList:W.i4,WheelEvent:W.b4,Window:W.c2,DOMWindow:W.c2,CSSRuleList:W.id,ClientRect:W.dm,DOMRect:W.dm,GamepadList:W.ih,NamedNodeMap:W.dF,MozNamedAttrMap:W.dF,SpeechRecognitionResultList:W.is,StyleSheetList:W.it,SVGLength:P.bg,SVGLengthList:P.fa,SVGNumber:P.bi,SVGNumberList:P.fO,SVGPointList:P.fU,SVGStringList:P.hm,SVGAElement:P.k,SVGAnimateElement:P.k,SVGAnimateMotionElement:P.k,SVGAnimateTransformElement:P.k,SVGAnimationElement:P.k,SVGCircleElement:P.k,SVGClipPathElement:P.k,SVGDefsElement:P.k,SVGDescElement:P.k,SVGDiscardElement:P.k,SVGEllipseElement:P.k,SVGFEBlendElement:P.k,SVGFEColorMatrixElement:P.k,SVGFEComponentTransferElement:P.k,SVGFECompositeElement:P.k,SVGFEConvolveMatrixElement:P.k,SVGFEDiffuseLightingElement:P.k,SVGFEDisplacementMapElement:P.k,SVGFEDistantLightElement:P.k,SVGFEFloodElement:P.k,SVGFEFuncAElement:P.k,SVGFEFuncBElement:P.k,SVGFEFuncGElement:P.k,SVGFEFuncRElement:P.k,SVGFEGaussianBlurElement:P.k,SVGFEImageElement:P.k,SVGFEMergeElement:P.k,SVGFEMergeNodeElement:P.k,SVGFEMorphologyElement:P.k,SVGFEOffsetElement:P.k,SVGFEPointLightElement:P.k,SVGFESpecularLightingElement:P.k,SVGFESpotLightElement:P.k,SVGFETileElement:P.k,SVGFETurbulenceElement:P.k,SVGFilterElement:P.k,SVGForeignObjectElement:P.k,SVGGElement:P.k,SVGGeometryElement:P.k,SVGGraphicsElement:P.k,SVGImageElement:P.k,SVGLineElement:P.k,SVGLinearGradientElement:P.k,SVGMarkerElement:P.k,SVGMaskElement:P.k,SVGMetadataElement:P.k,SVGPathElement:P.k,SVGPatternElement:P.k,SVGPolygonElement:P.k,SVGPolylineElement:P.k,SVGRadialGradientElement:P.k,SVGRectElement:P.k,SVGScriptElement:P.k,SVGSetElement:P.k,SVGStopElement:P.k,SVGStyleElement:P.k,SVGElement:P.k,SVGSVGElement:P.k,SVGSwitchElement:P.k,SVGSymbolElement:P.k,SVGTSpanElement:P.k,SVGTextContentElement:P.k,SVGTextElement:P.k,SVGTextPathElement:P.k,SVGTextPositioningElement:P.k,SVGTitleElement:P.k,SVGUseElement:P.k,SVGViewElement:P.k,SVGGradientElement:P.k,SVGComponentTransferFunctionElement:P.k,SVGFEDropShadowElement:P.k,SVGMPathElement:P.k,SVGTransform:P.bo,SVGTransformList:P.hD,AudioBuffer:P.ek,AudioParamMap:P.el,AudioTrackList:P.en,AudioContext:P.b9,webkitAudioContext:P.b9,BaseAudioContext:P.b9,OfflineAudioContext:P.fP,WebGL2RenderingContext:P.cW,SQLResultSetRowList:P.hg})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.cM.$nativeSuperclassTag="ArrayBufferView"
H.c3.$nativeSuperclassTag="ArrayBufferView"
H.c4.$nativeSuperclassTag="ArrayBufferView"
H.bQ.$nativeSuperclassTag="ArrayBufferView"
H.c5.$nativeSuperclassTag="ArrayBufferView"
H.c6.$nativeSuperclassTag="ArrayBufferView"
H.cN.$nativeSuperclassTag="ArrayBufferView"
W.c7.$nativeSuperclassTag="EventTarget"
W.c8.$nativeSuperclassTag="EventTarget"
W.c9.$nativeSuperclassTag="EventTarget"
W.ca.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(U.kh,[])
else U.kh([])})})()
//# sourceMappingURL=test.dart.js.map
