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
a[c]=function(){a[c]=function(){H.mz(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jn"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jn"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jn(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jc:function jc(){},
j9:function(){return new P.bS("No element")},
l0:function(){return new P.bS("Too many elements")},
cY:function(a,b,c,d){if(c-b<=32)H.ll(a,b,c,d)
else H.lk(a,b,c,d)},
ll:function(a,b,c,d){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.c(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.c(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.W()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.c(a,q)
C.a.n(a,s,a[q])
s=q}C.a.n(a,s,t)}},
lk:function(a2,a3,a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.d.Y(a4-a3+1,6),d=a3+e,c=a4-e,b=C.d.Y(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
if(d<0||d>=a1)return H.c(a2,d)
u=a2[d]
if(a<0||a>=a1)return H.c(a2,a)
t=a2[a]
if(b<0||b>=a1)return H.c(a2,b)
s=a2[b]
if(a0<0||a0>=a1)return H.c(a2,a0)
r=a2[a0]
if(c<0||c>=a1)return H.c(a2,c)
q=a2[c]
a1=a5.$2(u,t)
if(typeof a1!=="number")return a1.W()
if(a1>0){p=t
t=u
u=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.W()
if(a1>0){p=q
q=r
r=p}a1=a5.$2(u,s)
if(typeof a1!=="number")return a1.W()
if(a1>0){p=s
s=u
u=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.W()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(u,r)
if(typeof a1!=="number")return a1.W()
if(a1>0){p=r
r=u
u=p}a1=a5.$2(s,r)
if(typeof a1!=="number")return a1.W()
if(a1>0){p=r
r=s
s=p}a1=a5.$2(t,q)
if(typeof a1!=="number")return a1.W()
if(a1>0){p=q
q=t
t=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.W()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.W()
if(a1>0){p=q
q=r
r=p}C.a.n(a2,d,u)
C.a.n(a2,b,s)
C.a.n(a2,c,q)
if(a3<0||a3>=a2.length)return H.c(a2,a3)
C.a.n(a2,a,a2[a3])
if(a4<0||a4>=a2.length)return H.c(a2,a4)
C.a.n(a2,a0,a2[a4])
o=a3+1
n=a4-1
if(J.K(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.a2()
if(k<0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.n(a2,m,a2[o])
C.a.n(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.W()
if(k>0){--n
continue}else{j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.c(a2,o)
C.a.n(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.c(a2,n)
C.a.n(a2,o,a2[n])
C.a.n(a2,n,l)
n=j
o=i
break}else{if(n>=a1)return H.c(a2,n)
C.a.n(a2,m,a2[n])
C.a.n(a2,n,l)
n=j
break}}}}h=!0}else{for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
g=a5.$2(l,t)
if(typeof g!=="number")return g.a2()
if(g<0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.n(a2,m,a2[o])
C.a.n(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.W()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.W()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a2()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.c(a2,o)
C.a.n(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.c(a2,n)
C.a.n(a2,o,a2[n])
C.a.n(a2,n,l)
o=i}else{if(n>=a1)return H.c(a2,n)
C.a.n(a2,m,a2[n])
C.a.n(a2,n,l)}n=j
break}}}}h=!1}a1=o-1
if(a1>=a2.length)return H.c(a2,a1)
C.a.n(a2,a3,a2[a1])
C.a.n(a2,a1,t)
a1=n+1
if(a1<0||a1>=a2.length)return H.c(a2,a1)
C.a.n(a2,a4,a2[a1])
C.a.n(a2,a1,r)
H.cY(a2,a3,o-2,a5)
H.cY(a2,n+2,a4,a5)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.c(a2,o)
if(!J.K(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.c(a2,n)
if(!J.K(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.n(a2,m,a2[o])
C.a.n(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a2()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.c(a2,o)
C.a.n(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.c(a2,n)
C.a.n(a2,o,a2[n])
C.a.n(a2,n,l)
o=i}else{if(n>=a1)return H.c(a2,n)
C.a.n(a2,m,a2[n])
C.a.n(a2,n,l)}n=j
break}}}H.cY(a2,o,n,a5)}else H.cY(a2,o,n,a5)},
m:function m(a){this.a=a},
eK:function eK(){},
cG:function cG(){},
bH:function bH(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
fh:function fh(a,b,c){this.a=a
this.b=b
this.$ti=c},
fi:function fi(a,b){this.a=null
this.b=a
this.c=b},
fj:function fj(a,b,c){this.a=a
this.b=b
this.$ti=c},
c_:function c_(a,b,c){this.a=a
this.b=b
this.$ti=c},
i6:function i6(a,b){this.a=a
this.b=b},
cv:function cv(){},
hP:function hP(){},
dd:function dd(){},
eg:function(a){var u,t=H.mA(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
mi:function(a){return v.types[a]},
mp:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.M(a).$iv},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.Y(a)
if(typeof u!=="string")throw H.f(H.b3(a))
return u},
bP:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bQ:function(a){return H.l7(a)+H.kg(H.ce(a),0,null)},
l7:function(a){var u,t,s,r,q,p,o,n=J.M(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.H||!!n.$ibq){r=C.o(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.eg(t.length>1&&C.b.ay(t,0)===36?C.b.ai(t,1):t)},
jV:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
lf:function(a){var u,t,s,r=H.b([],[P.x])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.o)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.b3(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.d.b0(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.f(H.b3(s))}return H.jV(r)},
jW:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.b3(s))
if(s<0)throw H.f(H.b3(s))
if(s>65535)return H.lf(a)}return H.jV(a)},
je:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.b0(u,10))>>>0,56320|u&1023)}throw H.f(P.ak(a,0,1114111,null,null))},
bl:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
le:function(a){var u=H.bl(a).getFullYear()+0
return u},
lc:function(a){var u=H.bl(a).getMonth()+1
return u},
l8:function(a){var u=H.bl(a).getDate()+0
return u},
l9:function(a){var u=H.bl(a).getHours()+0
return u},
lb:function(a){var u=H.bl(a).getMinutes()+0
return u},
ld:function(a){var u=H.bl(a).getSeconds()+0
return u},
la:function(a){var u=H.bl(a).getMilliseconds()+0
return u},
u:function(a){throw H.f(H.b3(a))},
c:function(a,b){if(a==null)J.b7(a)
throw H.f(H.bu(a,b))},
bu:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aa(!0,b,s,null)
u=J.b7(a)
if(!(b<0)){if(typeof u!=="number")return H.u(u)
t=b>=u}else t=!0
if(t)return P.F(b,a,s,null,u)
return P.fX(b,s)},
mb:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bm(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bm(a,c,!0,b,"end",u)
return new P.aa(!0,b,"end",null)},
b3:function(a){return new P.aa(!0,a,null,null)},
m7:function(a){if(typeof a!=="number")throw H.f(H.b3(a))
return a},
f:function(a){var u
if(a==null)a=new P.cR()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.kr})
u.name=""}else u.toString=H.kr
return u},
kr:function(){return J.Y(this.dartException)},
t:function(a){throw H.f(a)},
o:function(a){throw H.f(P.aH(a))},
al:function(a){var u,t,s,r,q,p
a=H.kq(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.q])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hE(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hF:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
k6:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
jR:function(a,b){return new H.fM(a,b==null?null:b.method)},
jd:function(a,b){var u=b==null,t=u?null:b.method
return new H.f7(a,t,u?null:b.receiver)},
ay:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.iY(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.b0(t,16)&8191)===10)switch(s){case 438:return f.$1(H.jd(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.jR(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.ku()
q=$.kv()
p=$.kw()
o=$.kx()
n=$.kA()
m=$.kB()
l=$.kz()
$.ky()
k=$.kD()
j=$.kC()
i=r.a6(u)
if(i!=null)return f.$1(H.jd(u,i))
else{i=q.a6(u)
if(i!=null){i.method="call"
return f.$1(H.jd(u,i))}else{i=p.a6(u)
if(i==null){i=o.a6(u)
if(i==null){i=n.a6(u)
if(i==null){i=m.a6(u)
if(i==null){i=l.a6(u)
if(i==null){i=o.a6(u)
if(i==null){i=k.a6(u)
if(i==null){i=j.a6(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.jR(u,i))}}return f.$1(new H.hO(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.d_()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aa(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.d_()
return a},
js:function(a){var u
if(a==null)return new H.dU(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dU(a)},
mf:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.n(0,a[u],a[t])}return b},
mo:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(P.r("Unsupported number of arguments for wrapped closure"))},
bt:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mo)
a.$identity=u
return u},
kU:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hi().constructor.prototype):Object.create(new H.bx(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ae
if(typeof t!=="number")return t.A()
$.ae=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.jF(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.kQ(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.jF(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
kQ:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.mi,a)
if(typeof a=="function")if(b)return a
else{u=c?H.jE:H.j0
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.f("Error in functionType of tearoff")},
kR:function(a,b,c,d){var u=H.j0
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jF:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.kT(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.kR(t,!r,u,b)
if(t===0){r=$.ae
if(typeof r!=="number")return r.A()
$.ae=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.by
return new Function(r+H.e(q==null?$.by=H.er("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ae
if(typeof r!=="number")return r.A()
$.ae=r+1
o+=r
r="return function("+o+"){return this."
q=$.by
return new Function(r+H.e(q==null?$.by=H.er("self"):q)+"."+H.e(u)+"("+o+");}")()},
kS:function(a,b,c,d){var u=H.j0,t=H.jE
switch(b?-1:a){case 0:throw H.f(H.li("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
kT:function(a,b){var u,t,s,r,q,p,o,n=$.by
if(n==null)n=$.by=H.er("self")
u=$.jD
if(u==null)u=$.jD=H.er("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.kS(s,!q,t,b)
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
jn:function(a,b,c,d,e,f,g){return H.kU(a,b,c,d,!!e,!!f,g)},
j0:function(a){return a.a},
jE:function(a){return a.c},
er:function(a){var u,t,s,r=new H.bx("self","target","receiver","name"),q=J.ja(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
mt:function(a,b){throw H.f(H.kP(a,H.eg(b.substring(2))))},
k:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.M(a)[b]
else u=!0
if(u)return a
H.mt(a,b)},
md:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
kP:function(a,b){return new H.es("CastError: "+P.j7(a)+": type '"+H.e(H.m3(a))+"' is not a subtype of type '"+b+"'")},
m3:function(a){var u,t=J.M(a)
if(!!t.$ibz){u=H.md(t)
if(u!=null)return H.mu(u)
return"Closure"}return H.bQ(a)},
mz:function(a){throw H.f(new P.eC(a))},
li:function(a){return new H.h3(a)},
kl:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
ce:function(a){if(a==null)return
return a.$ti},
n6:function(a,b,c){return H.iW(a["$a"+H.e(c)],H.ce(b))},
mh:function(a,b,c,d){var u=H.iW(a["$a"+H.e(c)],H.ce(b))
return u==null?null:u[d]},
jr:function(a,b,c){var u=H.iW(a["$a"+H.e(b)],H.ce(a))
return u==null?null:u[c]},
cf:function(a,b){var u=H.ce(a)
return u==null?null:u[b]},
mu:function(a){return H.b2(a,null)},
b2:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.eg(a[0].name)+H.kg(a,1,b)
if(typeof a=="function")return H.eg(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.c(b,t)
return H.e(b[t])}if('func' in a)return H.lC(a,b)
if('futureOr' in a)return"FutureOr<"+H.b2("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lC:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.b([],[P.q])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.c(a0,m)
p=C.b.A(p,a0[m])
l=u[q]
if(l!=null&&l!==P.U)p+=" extends "+H.b2(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.b2(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.b2(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.b2(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.me(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.b2(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
kg:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.at("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.b2(p,c)}return"<"+u.h(0)+">"},
iW:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
n4:function(a,b,c){return a.apply(b,H.iW(J.M(b)["$a"+H.e(c)],H.ce(b)))},
n5:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
mq:function(a){var u,t,s,r,q=$.km.$1(a),p=$.iM[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.iS[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.kj.$2(a,q)
if(q!=null){p=$.iM[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.iS[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.iU(u)
$.iM[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.iS[q]=u
return u}if(s==="-"){r=H.iU(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.ko(a,u)
if(s==="*")throw H.f(P.k7(q))
if(v.leafTags[q]===true){r=H.iU(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.ko(a,u)},
ko:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.ju(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
iU:function(a){return J.ju(a,!1,null,!!a.$iv)},
mr:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.iU(u)
else return J.ju(u,c,null,null)},
mm:function(){if(!0===$.jt)return
$.jt=!0
H.mn()},
mn:function(){var u,t,s,r,q,p,o,n
$.iM=Object.create(null)
$.iS=Object.create(null)
H.ml()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.kp.$1(q)
if(p!=null){o=H.mr(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
ml:function(){var u,t,s,r,q,p,o=C.w()
o=H.bs(C.x,H.bs(C.y,H.bs(C.p,H.bs(C.p,H.bs(C.z,H.bs(C.A,H.bs(C.B(C.o),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.km=new H.iP(r)
$.kj=new H.iQ(q)
$.kp=new H.iR(p)},
bs:function(a,b){return a(b)||b},
l2:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.f(new P.eW("Illegal RegExp pattern ("+String(p)+")",a))},
mw:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
mc:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
kq:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
jx:function(a,b,c){var u=H.mx(a,b,c)
return u},
mx:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.kq(b),'g'),H.mc(c))},
hE:function hE(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fM:function fM(a,b){this.a=a
this.b=b},
f7:function f7(a,b,c){this.a=a
this.b=b
this.c=c},
hO:function hO(a){this.a=a},
iY:function iY(a){this.a=a},
dU:function dU(a){this.a=a
this.b=null},
bz:function bz(){},
hq:function hq(){},
hi:function hi(){},
bx:function bx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
es:function es(a){this.a=a},
h3:function h3(a){this.a=a},
L:function L(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fa:function fa(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cE:function cE(a,b){this.a=a
this.$ti=b},
fb:function fb(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
iP:function iP(a){this.a=a},
iQ:function iQ(a){this.a=a},
iR:function iR(a){this.a=a},
f6:function f6(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cb:function(a){return a},
b1:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.bu(b,a))},
lB:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.f(H.mb(a,b,c))
return b},
bM:function bM(){},
cM:function cM(){},
bL:function bL(){},
cN:function cN(){},
fE:function fE(){},
fF:function fF(){},
fG:function fG(){},
fH:function fH(){},
fI:function fI(){},
cO:function cO(){},
fJ:function fJ(){},
c2:function c2(){},
c3:function c3(){},
c4:function c4(){},
c5:function c5(){},
me:function(a){return J.jK(a?Object.keys(a):[],null)},
mA:function(a){return v.mangledGlobalNames[a]},
ms:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
ju:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iO:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.jt==null){H.mm()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.f(P.k7("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.jy()]
if(r!=null)return r
r=H.mq(a)
if(r!=null)return r
if(typeof a=="function")return C.J
u=Object.getPrototypeOf(a)
if(u==null)return C.r
if(u===Object.prototype)return C.r
if(typeof s=="function"){Object.defineProperty(s,$.jy(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
l1:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.f(P.jC(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.f(P.ak(a,0,4294967295,"length",null))
return J.jK(new Array(a),b)},
jK:function(a,b){return J.ja(H.b(a,[b]))},
ja:function(a){a.fixed$length=Array
return a},
M:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cz.prototype
return J.cy.prototype}if(typeof a=="string")return J.aO.prototype
if(a==null)return J.cA.prototype
if(typeof a=="boolean")return J.f5.prototype
if(a.constructor==Array)return J.aN.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aP.prototype
return a}if(a instanceof P.U)return a
return J.iO(a)},
jo:function(a){if(typeof a=="string")return J.aO.prototype
if(a==null)return a
if(a.constructor==Array)return J.aN.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aP.prototype
return a}if(a instanceof P.U)return a
return J.iO(a)},
iN:function(a){if(a==null)return a
if(a.constructor==Array)return J.aN.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aP.prototype
return a}if(a instanceof P.U)return a
return J.iO(a)},
mg:function(a){if(typeof a=="number")return J.bF.prototype
if(typeof a=="string")return J.aO.prototype
if(a==null)return a
if(!(a instanceof P.U))return J.bq.prototype
return a},
jp:function(a){if(typeof a=="string")return J.aO.prototype
if(a==null)return a
if(!(a instanceof P.U))return J.bq.prototype
return a},
jq:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aP.prototype
return a}if(a instanceof P.U)return a
return J.iO(a)},
K:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.M(a).p(a,b)},
eh:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mp(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.jo(a).i(a,b)},
kJ:function(a,b,c,d){return J.jq(a).fb(a,b,c,d)},
iZ:function(a,b){return J.mg(a).fm(a,b)},
j_:function(a,b){return J.iN(a).B(a,b)},
kK:function(a,b){return J.iN(a).J(a,b)},
kL:function(a){return J.jq(a).gfi(a)},
b5:function(a){return J.M(a).gG(a)},
b6:function(a){return J.iN(a).gP(a)},
b7:function(a){return J.jo(a).gl(a)},
jA:function(a){return J.iN(a).h2(a)},
kM:function(a,b,c){return J.jp(a).aX(a,b,c)},
kN:function(a){return J.jp(a).he(a)},
Y:function(a){return J.M(a).h(a)},
a:function a(){},
f5:function f5(){},
cA:function cA(){},
cB:function cB(){},
fQ:function fQ(){},
bq:function bq(){},
aP:function aP(){},
aN:function aN(a){this.$ti=a},
jb:function jb(a){this.$ti=a},
Z:function Z(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bF:function bF(){},
cz:function cz(){},
cy:function cy(){},
aO:function aO(){}},P={
lr:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.m4()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bt(new P.i8(s),1)).observe(u,{childList:true})
return new P.i7(s,u,t)}else if(self.setImmediate!=null)return P.m5()
return P.m6()},
ls:function(a){self.scheduleImmediate(H.bt(new P.i9(a),0))},
lt:function(a){self.setImmediate(H.bt(new P.ia(a),0))},
lu:function(a){P.jg(C.i,a)},
jg:function(a,b){var u=C.d.Y(a.a,1000)
return P.lz(u<0?0:u,b)},
k5:function(a,b){var u=C.d.Y(a.a,1000)
return P.lA(u<0?0:u,b)},
lz:function(a,b){var u=new P.e_()
u.dH(a,b)
return u},
lA:function(a,b){var u=new P.e_()
u.dI(a,b)
return u},
lY:function(){var u,t
for(;u=$.br,u!=null;){$.cd=null
t=u.b
$.br=t
if(t==null)$.cc=null
u.a.$0()}},
m2:function(){$.jl=!0
try{P.lY()}finally{$.cd=null
$.jl=!1
if($.br!=null)$.jz().$1(P.kk())}},
m0:function(a){var u=new P.dk(a)
if($.br==null){$.br=$.cc=u
if(!$.jl)$.jz().$1(P.kk())}else $.cc=$.cc.b=u},
m1:function(a){var u,t,s=$.br
if(s==null){P.m0(a)
$.cd=$.cc
return}u=new P.dk(a)
t=$.cd
if(t==null){u.b=s
$.br=$.cd=u}else{u.b=t.b
$.cd=t.b=u
if(u.b==null)$.cc=u}},
k4:function(a,b){var u=$.ad
if(u===C.e)return P.jg(a,b)
return P.jg(a,u.fj(b))},
lo:function(a,b){var u=$.ad
if(u===C.e)return P.k5(a,b)
return P.k5(a,u.cB(b,P.d6))},
kh:function(a,b,c,d,e){var u={}
u.a=d
P.m1(new P.iK(u,e))},
lZ:function(a,b,c,d){var u,t=$.ad
if(t===c)return d.$0()
$.ad=c
u=t
try{t=d.$0()
return t}finally{$.ad=u}},
m_:function(a,b,c,d,e){var u,t=$.ad
if(t===c)return d.$1(e)
$.ad=c
u=t
try{t=d.$1(e)
return t}finally{$.ad=u}},
i8:function i8(a){this.a=a},
i7:function i7(a,b,c){this.a=a
this.b=b
this.c=c},
i9:function i9(a){this.a=a},
ia:function ia(a){this.a=a},
e_:function e_(){this.c=0},
iC:function iC(a,b){this.a=a
this.b=b},
iB:function iB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dk:function dk(a){this.a=a
this.b=null},
d1:function d1(){},
hl:function hl(){},
d6:function d6(){},
iF:function iF(){},
iK:function iK(a,b){this.a=a
this.b=b},
ip:function ip(){},
iq:function iq(a,b){this.a=a
this.b=b},
ir:function ir(a,b,c){this.a=a
this.b=b
this.c=c},
jL:function(a,b){return new H.L([a,b])},
l3:function(a){return H.mf(a,new H.L([null,null]))},
cF:function(a){return new P.il([a])},
jk:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
ly:function(a,b){var u=new P.dB(a,b)
u.c=a.e
return u},
l_:function(a,b,c){var u,t
if(P.jm(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.q])
$.X.push(a)
try{P.lD(a,u)}finally{if(0>=$.X.length)return H.c($.X,-1)
$.X.pop()}t=P.k2(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
j8:function(a,b,c){var u,t
if(P.jm(a))return b+"..."+c
u=new P.at(b)
$.X.push(a)
try{t=u
t.a=P.k2(t.a,a,", ")}finally{if(0>=$.X.length)return H.c($.X,-1)
$.X.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jm:function(a){var u,t
for(u=$.X.length,t=0;t<u;++t)if(a===$.X[t])return!0
return!1},
lD:function(a,b){var u,t,s,r,q,p,o,n=a.gP(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.u())return
u=H.e(n.gE(n))
b.push(u)
m+=u.length+2;++l}if(!n.u()){if(l<=5)return
if(0>=b.length)return H.c(b,-1)
t=b.pop()
if(0>=b.length)return H.c(b,-1)
s=b.pop()}else{r=n.gE(n);++l
if(!n.u()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.c(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gE(n);++l
for(;n.u();r=q,q=p){p=n.gE(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.c(b,-1)
m-=b.pop().length+2;--l}b.push("...")
return}}s=H.e(r)
t=H.e(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.c(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)b.push(o)
b.push(s)
b.push(t)},
jM:function(a,b){var u,t,s=P.cF(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.o)(a),++t)s.m(0,a[t])
return s},
jO:function(a){var u,t={}
if(P.jm(a))return"{...}"
u=new P.at("")
try{$.X.push(a)
u.a+="{"
t.a=!0
J.kK(a,new P.fg(t,u))
u.a+="}"}finally{if(0>=$.X.length)return H.c($.X,-1)
$.X.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
il:function il(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
im:function im(a){this.a=a
this.c=this.b=null},
dB:function dB(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fc:function fc(){},
p:function p(){},
ff:function ff(){},
fg:function fg(a,b){this.a=a
this.b=b},
ap:function ap(){},
it:function it(){},
dC:function dC(){},
eu:function eu(){},
ex:function ex(){},
eM:function eM(){},
f2:function f2(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
f1:function f1(a){this.a=a},
hS:function hS(){},
hT:function hT(){},
iD:function iD(a){this.b=0
this.c=a},
kY:function(a){if(a instanceof H.bz)return a.h(0)
return"Instance of '"+H.e(H.bQ(a))+"'"},
l4:function(a,b,c){var u,t,s=J.l1(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
jN:function(a,b,c){var u,t=H.b([],[c])
for(u=J.b6(a);u.u();)t.push(u.gE(u))
if(b)return t
return J.ja(t)},
jf:function(a){var u,t
if(a.constructor===Array){u=a.length
t=P.jY(0,null,u)
return H.jW(t<u?C.a.dl(a,0,t):a)}return P.lm(a,0,null)},
lm:function(a,b,c){var u,t,s=J.b6(a)
for(u=0;u<b;++u)if(!s.u())throw H.f(P.ak(b,0,u,null,null))
t=[]
for(;s.u();)t.push(s.gE(s))
return H.jW(t)},
lg:function(a){return new H.f6(a,H.l2(a,!1,!0,!1,!1,!1))},
k2:function(a,b,c){var u=J.b6(b)
if(!u.u())return a
if(c.length===0){do a+=H.e(u.gE(u))
while(u.u())}else{a+=H.e(u.gE(u))
for(;u.u();)a=a+c+H.e(u.gE(u))}return a},
kf:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.h){u=$.kI().b
u=u.test(b)}else u=!1
if(u)return b
t=C.D.fn(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.c(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.je(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
kV:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
kW:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cp:function(a){if(a>=10)return""+a
return"0"+a},
jH:function(a){return new P.aI(1000*a)},
j7:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.Y(a)
if(typeof a==="string")return JSON.stringify(a)
return P.kY(a)},
kO:function(a){return new P.aa(!1,null,null,a)},
jC:function(a,b,c){return new P.aa(!0,a,b,c)},
fX:function(a,b){return new P.bm(null,null,!0,a,b,"Value not in range")},
ak:function(a,b,c,d,e){return new P.bm(b,c,!0,a,d,"Invalid value")},
jY:function(a,b,c){if(0>a||a>c)throw H.f(P.ak(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.f(P.ak(b,a,c,"end",null))
return b}return c},
jX:function(a,b){if(typeof a!=="number")return a.a2()
if(a<0)throw H.f(P.ak(a,0,null,b,null))},
F:function(a,b,c,d,e){var u=e==null?J.b7(b):e
return new P.f3(u,!0,a,c,"Index out of range")},
a7:function(a){return new P.hQ(a)},
k7:function(a){return new P.hN(a)},
k1:function(a){return new P.bS(a)},
aH:function(a){return new P.ew(a)},
r:function(a){return new P.dt(a)},
jw:function(a){H.ms(a)},
am:function am(){},
a2:function a2(a,b){this.a=a
this.b=b},
J:function J(){},
aI:function aI(a){this.a=a},
eI:function eI(){},
eJ:function eJ(){},
bc:function bc(){},
cR:function cR(){},
aa:function aa(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bm:function bm(a,b,c,d,e,f){var _=this
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
hQ:function hQ(a){this.a=a},
hN:function hN(a){this.a=a},
bS:function bS(a){this.a=a},
ew:function ew(a){this.a=a},
fP:function fP(){},
d_:function d_(){},
eC:function eC(a){this.a=a},
dt:function dt(a){this.a=a},
eW:function eW(a,b){this.a=a
this.b=b},
eY:function eY(){},
x:function x(){},
i:function i(){},
f4:function f4(){},
ag:function ag(){},
cI:function cI(){},
aS:function aS(){},
a9:function a9(){},
U:function U(){},
q:function q(){},
at:function at(a){this.a=a},
ma:function(a){var u,t=J.M(a)
if(!!t.$iaM){u=t.gcG(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.e4(a.data,a.height,a.width)},
m9:function(a){if(a instanceof P.e4)return{data:a.a,height:a.b,width:a.c}
return a},
ax:function(a){var u,t,s,r,q
if(a==null)return
u=P.jL(P.q,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.o)(t),++r){q=t[r]
u.n(0,q,a[q])}return u},
m8:function(a){var u={}
a.J(0,new P.iL(u))
return u},
e4:function e4(a,b,c){this.a=a
this.b=b
this.c=c},
iL:function iL(a){this.a=a},
eS:function eS(a,b){this.a=a
this.b=b},
eT:function eT(){},
eU:function eU(){},
ik:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lx:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
io:function io(){},
a5:function a5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bj:function bj(){},
f9:function f9(){},
bk:function bk(){},
fN:function fN(){},
fV:function fV(){},
bR:function bR(){},
hm:function hm(){},
j:function j(){},
bo:function bo(){},
hD:function hD(){},
dz:function dz(){},
dA:function dA(){},
dK:function dK(){},
dL:function dL(){},
dW:function dW(){},
dX:function dX(){},
e2:function e2(){},
e3:function e3(){},
em:function em(){},
en:function en(){},
eo:function eo(a){this.a=a},
ep:function ep(){},
b8:function b8(){},
fO:function fO(){},
dl:function dl(){},
cW:function cW(){},
hh:function hh(){},
dS:function dS(){},
dT:function dT(){}},W={
jB:function(){var u=document.createElement("a")
return u},
j2:function(){var u=document.createElement("canvas")
return u},
kX:function(a,b,c){var u=document.body,t=(u&&C.n).a5(u,a,b,c)
t.toString
u=new H.c_(new W.V(t),new W.eL(),[W.G])
return u.gav(u)},
j5:function(a){return"wheel"},
bB:function(a){var u,t,s,r="element tag unavailable"
try{u=J.jq(a)
t=u.gd9(a)
if(typeof t==="string")r=u.gd9(a)}catch(s){H.ay(s)}return r},
ij:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kd:function(a,b,c,d){var u=W.ij(W.ij(W.ij(W.ij(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
R:function(a,b,c,d){var u=W.ki(new W.ih(c),W.h)
if(u!=null&&!0)J.kJ(a,b,u,!1)
return new W.ig(a,b,u,!1)},
kc:function(a){var u=W.jB(),t=window.location
u=new W.c1(new W.is(u,t))
u.dC(a)
return u},
lv:function(a,b,c,d){return!0},
lw:function(a,b,c,d){var u,t=d.a,s=t.a
s.href=c
u=s.hostname
t=t.b
if(!(u==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(u==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
ke:function(){var u=P.q,t=P.jM(C.k,u),s=H.b(["TEMPLATE"],[u])
t=new W.iz(t,P.cF(u),P.cF(u),P.cF(u),null)
t.dG(null,new H.fj(C.k,new W.iA(),[H.cf(C.k,0),u]),s,null)
return t},
ki:function(a,b){var u=$.ad
if(u===C.e)return a
return u.cB(a,b)},
l:function l(){},
ei:function ei(){},
ej:function ej(){},
ek:function ek(){},
cj:function cj(){},
b9:function b9(){},
ba:function ba(){},
aE:function aE(){},
ey:function ey(){},
D:function D(){},
bA:function bA(){},
ez:function ez(){},
a1:function a1(){},
af:function af(){},
eA:function eA(){},
eB:function eB(){},
eE:function eE(){},
ab:function ab(){},
eF:function eF(){},
cr:function cr(){},
cs:function cs(){},
eG:function eG(){},
eH:function eH(){},
ic:function ic(a,b){this.a=a
this.b=b},
N:function N(){},
eL:function eL(){},
h:function h(){},
d:function d(){},
aK:function aK(){},
eQ:function eQ(){},
eR:function eR(){},
eV:function eV(){},
aL:function aL(){},
f0:function f0(){},
bD:function bD(){},
aM:function aM(){},
bE:function bE(){},
bi:function bi(){},
fd:function fd(){},
fx:function fx(){},
fy:function fy(){},
fz:function fz(a){this.a=a},
fA:function fA(){},
fB:function fB(a){this.a=a},
aR:function aR(){},
fC:function fC(){},
aj:function aj(){},
V:function V(a){this.a=a},
G:function G(){},
cP:function cP(){},
aT:function aT(){},
fS:function fS(){},
h1:function h1(){},
h2:function h2(a){this.a=a},
h4:function h4(){},
aV:function aV(){},
he:function he(){},
aW:function aW(){},
hf:function hf(){},
aX:function aX(){},
hj:function hj(){},
hk:function hk(a){this.a=a},
au:function au(){},
d2:function d2(){},
hn:function hn(){},
ho:function ho(){},
bT:function bT(){},
aY:function aY(){},
av:function av(){},
hr:function hr(){},
hs:function hs(){},
hx:function hx(){},
aZ:function aZ(){},
bn:function bn(){},
hB:function hB(){},
hC:function hC(){},
b_:function b_(){},
hR:function hR(){},
i4:function i4(){},
b0:function b0(){},
c0:function c0(){},
id:function id(){},
dn:function dn(){},
ii:function ii(){},
dH:function dH(){},
iw:function iw(){},
ix:function ix(){},
ib:function ib(){},
ie:function ie(a){this.a=a},
ig:function ig(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
ih:function ih(a){this.a=a},
c1:function c1(a){this.a=a},
E:function E(){},
cQ:function cQ(a){this.a=a},
fL:function fL(a){this.a=a},
fK:function fK(a,b,c){this.a=a
this.b=b
this.c=c},
dP:function dP(){},
iu:function iu(){},
iv:function iv(){},
iz:function iz(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
iA:function iA(){},
iy:function iy(){},
cw:function cw(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
as:function as(){},
is:function is(a,b){this.a=a
this.b=b},
e5:function e5(a){this.a=a},
iE:function iE(a){this.a=a},
dm:function dm(){},
dp:function dp(){},
dq:function dq(){},
dr:function dr(){},
ds:function ds(){},
du:function du(){},
dv:function dv(){},
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
c6:function c6(){},
c7:function c7(){},
dQ:function dQ(){},
dR:function dR(){},
dV:function dV(){},
dY:function dY(){},
dZ:function dZ(){},
c8:function c8(){},
c9:function c9(){},
e0:function e0(){},
e1:function e1(){},
e6:function e6(){},
e7:function e7(){},
e8:function e8(){},
e9:function e9(){},
ea:function ea(){},
eb:function eb(){},
ec:function ec(){},
ed:function ed(){},
ee:function ee(){},
ef:function ef(){}},T={
H:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.f(P.r("The given low and high character strings for a Range must have one and only one characters."))
u=C.b.ay(a,0)
t=C.b.ay(b,0)
s=new T.fW()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
n:function(a){var u=new T.h5()
u.dw(a)
return u},
an:function an(){},
cx:function cx(){},
aQ:function aQ(){},
W:function W(){this.a=null},
fW:function fW(){this.b=this.a=null},
h5:function h5(){this.a=null},
d4:function d4(){},
ht:function ht(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hu:function hu(a){var _=this
_.a=a
_.e=_.d=_.c=null},
hv:function hv(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},R={
hz:function(){var u=new R.hy(),t=P.q
u.a=new H.L([t,R.d0])
u.b=new H.L([t,R.d8])
return u},
d0:function d0(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
d7:function d7(a,b,c){this.a=a
this.b=b
this.c=c},
d8:function d8(a){this.b=a
this.c=null},
hy:function hy(){this.c=this.b=this.a=null},
da:function da(a){this.b=a
this.a=this.c=null}},O={
j3:function(a){var u=new O.aF([a])
u.be(a)
return u},
aF:function aF(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bJ:function bJ(){this.b=this.a=null},
cJ:function cJ(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fr:function fr(a,b){this.a=a
this.b=b},
fs:function fs(){},
ft:function ft(a,b){this.a=a
this.b=b},
fu:function fu(){},
fv:function fv(a,b){this.a=a
this.b=b},
fw:function fw(){},
fl:function fl(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bI:function bI(){},
fm:function fm(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
ah:function ah(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fo:function fo(){var _=this
_.e=_.d=_.c=_.b=null},
fp:function fp(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fq:function fq(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
d3:function d3(){}},E={
lh:function(a,b){var u=new E.fY(a)
u.dv(a,b)
return u},
ln:function(a,b,c,d,e){var u,t,s=J.M(a)
if(!!s.$iba)return E.k3(a,!0,!0,!0,!1)
u=W.j2()
t=u.style
t.width="100%"
t.height="100%"
s.gcD(a).m(0,u)
return E.k3(u,!0,!0,!0,!1)},
k3:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.d5(),p=C.f.c0(a,"webgl2",P.l3(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.t(P.r("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.lh(p,a)
u=new T.hu(p)
p.getParameter(3379)
u.c=p.getParameter(34076)
u.e=u.d=0
q.f=u
u=new X.de(a)
t=new X.f8()
t.c=new X.a3(!1,!1,!1)
t.d=P.cF(P.x)
u.b=t
t=new X.fD(u)
t.f=0
t.r=V.aU()
t.x=V.aU()
t.ch=t.Q=1
u.c=t
t=new X.fe(u)
t.r=0
t.x=V.aU()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hA(u)
t.f=V.aU()
t.r=V.aU()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.b([],[[P.d1,P.U]])
u.z=t
s=document
t.push(W.R(s,"contextmenu",u.gei(),!1))
u.z.push(W.R(a,"focus",u.geo(),!1))
u.z.push(W.R(a,"blur",u.gec(),!1))
u.z.push(W.R(s,"keyup",u.ges(),!1))
u.z.push(W.R(s,"keydown",u.geq(),!1))
u.z.push(W.R(a,"mousedown",u.gex(),!1))
u.z.push(W.R(a,"mouseup",u.geB(),!1))
u.z.push(W.R(a,r,u.gez(),!1))
t=u.z
W.j5(a)
W.j5(a)
t.push(W.R(a,W.j5(a),u.geD(),!1))
u.z.push(W.R(s,r,u.gek(),!1))
u.z.push(W.R(s,"mouseup",u.gem(),!1))
u.z.push(W.R(s,"pointerlockchange",u.geF(),!1))
u.z.push(W.R(a,"touchstart",u.geS(),!1))
u.z.push(W.R(a,"touchend",u.geO(),!1))
u.z.push(W.R(a,"touchmove",u.geQ(),!1))
q.x=u
q.ch=!0
q.cx=!1
q.cy=new P.a2(Date.now(),!1)
q.db=0
q.cp()
return q},
eq:function eq(){},
aJ:function aJ(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fY:function fY(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fZ:function fZ(a){this.a=a},
h_:function h_(a){this.a=a},
h0:function h0(a){this.a=a},
d5:function d5(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
hw:function hw(a){this.a=a}},Z={
jj:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cb(c)),35044)
a.bindBuffer(b,null)
return new Z.dj(b,u)},
a8:function(a){return new Z.aw(a)},
dj:function dj(a,b){this.a=a
this.b=b},
ck:function ck(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
i5:function i5(a){this.a=a},
cl:function cl(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bf:function bf(a,b,c){this.a=a
this.b=b
this.c=c},
aw:function aw(a){this.a=a}},D={
C:function(){var u=new D.bd()
u.d=0
return u},
et:function et(){},
bd:function bd(){var _=this
_.d=_.c=_.b=_.a=null},
eO:function eO(a){this.a=a},
eP:function eP(a){this.a=a},
P:function P(){this.b=null},
bg:function bg(){this.b=null},
bh:function bh(){this.b=null},
w:function w(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
bb:function bb(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a_:function a_(){},
cD:function cD(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
fT:function fT(){},
hg:function hg(){}},X={cm:function cm(a,b){this.a=a
this.b=b},cC:function cC(a,b){this.a=a
this.b=b},f8:function f8(){var _=this
_.d=_.c=_.b=_.a=null},cH:function cH(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fe:function fe(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},a3:function a3(a,b,c){this.a=a
this.b=b
this.c=c},ar:function ar(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},fD:function fD(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bK:function bK(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fU:function fU(){},d9:function d9(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},hA:function hA(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},de:function de(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
kZ:function(a){var u=new X.eX(),t=new V.aG(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.k_
if(t==null){t=V.jZ(0,0,1,1)
$.k_=t}u.r=t
return u},
j1:function j1(){},
eX:function eX(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cS:function cS(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
hp:function hp(){}},V={
mB:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.dg(a-b,u)
return(a<0?a+u:a)+b},
B:function(a,b,c){if(a==null)return C.b.a7("null",c)
return C.b.a7(C.c.dc(Math.abs(a-0)<$.y().a?0:a,b),c+b+1)},
bv:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.q])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.o)(a),++s){r=V.B(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.c(o,q)
u=C.b.a7(o[q],t)
p=o.length
if(q>=p)return H.c(o,q)
o[q]=u}return o},
jv:function(a){return C.c.hb(Math.pow(2,C.I.bO(Math.log(H.m7(a))/Math.log(2))))},
cL:function(){var u=$.jQ
return u==null?$.jQ=V.ai(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
ai:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aq(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
jP:function(a,b,c){var u=c.v(0,Math.sqrt(c.F(c))),t=b.aQ(u),s=t.v(0,Math.sqrt(t.F(t))),r=u.aQ(s),q=new V.z(a.a,a.b,a.c),p=s.N(0).F(q),o=r.N(0).F(q),n=u.N(0).F(q)
return V.ai(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
aU:function(){var u=$.jT
return u==null?$.jT=new V.a4(0,0):u},
jU:function(){var u=$.bO
return u==null?$.bO=new V.ac(0,0,0):u},
jZ:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cV(a,b,c,d)},
di:function(){var u=$.ka
return u==null?$.ka=new V.z(0,0,0):u},
lp:function(){var u=$.hU
return u==null?$.hU=new V.z(-1,0,0):u},
ji:function(){var u=$.hV
return u==null?$.hV=new V.z(0,1,0):u},
lq:function(){var u=$.hW
return u==null?$.hW=new V.z(0,0,1):u},
O:function O(a,b,c){this.a=a
this.b=b
this.c=c},
aG:function aG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eN:function eN(a){this.a=a},
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
a4:function a4(a,b){this.a=a
this.b=b},
ac:function ac(a,b,c){this.a=a
this.b=b
this.c=c},
cT:function cT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cV:function cV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
A:function A(a,b){this.a=a
this.b=b},
z:function z(a,b,c){this.a=a
this.b=b
this.c=c},
mv:function(a){P.lo(C.F,new V.iV(a))},
lj:function(a){var u=new V.ha()
u.dA(a,!0)
return u},
cn:function cn(){},
iV:function iV(a){this.a=a},
eD:function eD(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eZ:function eZ(a){var _=this
_.a=a
_.d=_.c=_.b=null},
f_:function f_(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fR:function fR(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ha:function ha(){this.b=this.a=null},
hc:function hc(a){this.a=a},
hb:function hb(a){this.a=a},
hd:function hd(a){this.a=a}},U={
j4:function(){var u=new U.ev()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
jG:function(a){var u=new U.co()
u.a=a
return u},
ev:function ev(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
co:function co(){this.b=this.a=null},
bC:function bC(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a0:function a0(){},
df:function df(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dg:function dg(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dh:function dh(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={ct:function ct(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
l5:function(a,b){var u=a.aR,t=new A.fk(b,u)
t.dz(b,u)
t.du(a,b)
return t},
l6:function(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="MaterialLight_"+a1.gaa(a1)+a2.gaa(a2)+a3.gaa(a3)+a4.gaa(a4)+a5.gaa(a5)+a6.gaa(a6)+a7.gaa(a7)+a8.gaa(a8)+a9.gaa(a9)+"_"
e+=a?"1":"0"
e+=b?"1":"0"
e+=c?"1":"0"
e=e+"0_"+a0
u=b0.length
if(u>0){e+="_Dir"
for(t=0;t<b0.length;b0.length===u||(0,H.o)(b0),++t)e+="_"+H.e(b0[t].a)}u=b1.length
if(u>0){e+="_Point"
for(t=0;t<b1.length;b1.length===u||(0,H.o)(b1),++t)e+="_"+H.e(b1[t].a)}u=b2.length
if(u>0){e+="_Spot"
for(t=0;t<b2.length;b2.length===u||(0,H.o)(b2),++t)e+="_"+H.e(b2[t].a)}for(u=b0.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=b0[t].b
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
f=$.aC()
if(k){u=$.aB()
f=new Z.aw(f.a|u.a)}if(j){u=$.aA()
f=new Z.aw(f.a|u.a)}if(i){u=$.aD()
f=new Z.aw(f.a|u.a)}if(h){u=$.az()
f=new Z.aw(f.a|u.a)}return new A.fn(a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,s,p,l,p,r,g,!0,!1,!1,o,r,m,k,j,!1,i,h,!1,b,c,!1,a0,e.charCodeAt(0)==0?e:e,f)},
iI:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.c)a.a+="uniform samplerCube "+c+"Txt;\n"},
iJ:function(a,b,c){var u,t="Txt, txtCube).rgb;\n"
A.iI(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.iX(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.c){u+="   "+c+"Color = "+c+"Clr*textureCube("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.c){u+="   "+c+"Color = textureCube("+c+t
a.a=u}a.a=u+"}\n"},
lH:function(a,b){var u,t=a.a,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.iI(b,t,"emission")
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
A.iJ(b,t,"ambient")
b.a+="\n"},
lF:function(a,b){var u,t=a.c
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.iJ(b,t,"diffuse")
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
lI:function(a,b){var u,t=a.d
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.iJ(b,t,"invDiffuse")
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
lO:function(a,b){var u,t=a.e
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.iJ(b,t,"specular")
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
lK:function(a,b){var u,t,s
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
lM:function(a,b){var u,t=a.r,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.iI(b,t,"reflect")
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
lN:function(a,b){var u,t=a.x,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.iI(b,t,"refract")
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
lG:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.e(u)
s=A.iX(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.ah()
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
r=[P.q]
o=H.b([],r)
n=a.b
if(!n.a)n=n.c
else n=!0
if(n)o.push("ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
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
lL:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.e(u)
s=A.iX(t)
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
if(typeof u!=="number")return u.ah()
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
c.a=r+"\n"}r=[P.q]
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
lP:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.e(u)
s=A.iX(t)
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
if(typeof u!=="number")return u.ah()
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
c.a=u+"\n"}u=[P.q]
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
lJ:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.b([],[P.q])
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
u=b.a+="   return "+C.a.k(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
lQ:function(a){var u,t,s,r,q,p,o,n,m,l="   lightAccum += all",k="precision mediump float;\n\n",j="precision mediump float;\n\nvarying vec3 normalVec;\n",i=new P.at("")
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
A.lH(a,i)
A.lE(a,i)
A.lF(a,i)
A.lI(a,i)
A.lO(a,i)
t=a.cy
if(t){r=i.a+="// === Enviromental ===\n"
r+="\n"
i.a=r
r+="uniform samplerCube envSampler;\n"
i.a=r
i.a=r+"\n"
A.lM(a,i)
A.lN(a,i)}A.lK(a,i)
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
if(r){for(q=a.z,p=q.length,n=0;n<q.length;q.length===p||(0,H.o)(q),++n)A.lG(a,q[n],i)
for(q=a.Q,p=q.length,n=0;n<q.length;q.length===p||(0,H.o)(q),++n)A.lL(a,q[n],i)
for(q=a.ch,p=q.length,n=0;n<q.length;q.length===p||(0,H.o)(q),++n)A.lP(a,q[n],i)
A.lJ(a,i)}q=i.a+="// === Main ===\n"
q+="\n"
i.a=q
q+="void main()\n"
i.a=q
q+="{\n"
i.a=q
q=i.a=q+"   float alpha = alphaValue();\n"
u=u?i.a=q+"   vec3 norm = normal();\n":q
if(t)i.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
m=H.b([],[P.q])
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
for(u=a.z,t=u.length,n=0;n<u.length;u.length===t||(0,H.o)(u),++n){r=u[n].h(0)
if(0>=r.length)return H.c(r,0)
i.a+=l+(r[0].toUpperCase()+C.b.ai(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,n=0;n<u.length;u.length===t||(0,H.o)(u),++n){r=u[n].h(0)
if(0>=r.length)return H.c(r,0)
i.a+=l+(r[0].toUpperCase()+C.b.ai(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,n=0;n<u.length;u.length===t||(0,H.o)(u),++n){r=u[n].h(0)
if(0>=r.length)return H.c(r,0)
i.a+=l+(r[0].toUpperCase()+C.b.ai(r,1))+"Values(norm);\n"}if(a.cx<=0)i.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
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
u=i.a+="   vec4 objClr = vec4("+C.a.k(m," + ")+", alpha);\n"
if(s)u=i.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
i.a=u
u=i.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
lR:function(a,b){var u,t,s
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
lT:function(a,b){var u
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
lS:function(a,b){var u
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
lV:function(a,b){var u,t
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
lW:function(a,b){var u,t
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
lU:function(a,b){var u
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
lX:function(a,b){var u
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
iX:function(a){if(0>=a.length)return H.c(a,0)
return a[0].toUpperCase()+C.b.ai(a,1)},
jh:function(a,b,c,d,e){var u=new A.hG(a,c,e)
u.f=d
P.l4(d,0,P.x)
return u},
ci:function ci(a,b,c){this.a=a
this.b=b
this.c=c},
el:function el(a){this.a=a},
S:function S(a,b,c){this.a=a
this.b=b
this.c=c},
fk:function fk(a,b){var _=this
_.cJ=_.hl=_.cI=_.b3=_.aR=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.ht=_.hs=_.hr=_.bN=_.bM=_.bL=_.bK=_.bJ=_.bI=_.cV=_.hq=_.cU=_.cT=_.hp=_.cS=_.cR=_.cQ=_.ho=_.cP=_.cO=_.cN=_.hn=_.cM=_.cL=_.hm=_.cK=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cq:function cq(a,b){this.a=a
this.b=b},
cU:function cU(a,b){this.a=a
this.b=b},
cZ:function cZ(a,b){this.a=a
this.b=b},
fn:function fn(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.aR=b3
_.b3=b4},
bV:function bV(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
bX:function bX(a,b,c,d,e,f,g,h,i,j){var _=this
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
bY:function bY(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
db:function db(){},
hL:function hL(a){this.a=a},
dc:function dc(a,b,c){this.a=a
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
hG:function hG(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
Q:function Q(a,b,c){this.a=a
this.c=b
this.d=c},
hH:function hH(a,b,c){this.a=a
this.c=b
this.d=c},
I:function I(a,b,c){this.a=a
this.c=b
this.d=c},
bU:function bU(a,b,c){this.a=a
this.c=b
this.d=c},
hM:function hM(a,b,c){this.a=a
this.c=b
this.d=c},
bW:function bW(a,b,c){this.a=a
this.c=b
this.d=c},
a6:function a6(a,b,c){this.a=a
this.c=b
this.d=c},
bp:function bp(a,b,c){this.a=a
this.c=b
this.d=c},
T:function T(a,b,c){this.a=a
this.c=b
this.d=c}},F={
iH:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
ca:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.z(h,g+a1,f+a2)
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
j.d=i}m=F.iH(i)
l=F.iH(j.b)
k=F.my(d,a0,new F.iG(j,F.iH(j.c),F.iH(j.d),l,m,c),b)
if(k!=null)a.fM(k)},
my:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
if(a<1)return
if(b<1)return
u=F.k0()
t=H.b([],[F.bZ])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
o=q.cw(new V.aG(p,0,0,1),new V.a4(r,1))
c.$3(o,r,0)
t.push(o.bG(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
o=k.cw(new V.aG(j,i,h,1),new V.a4(r,m))
c.$3(o,r,n)
t.push(o.bG(d))}}u.d.fc(a+1,b+1,t)
return u},
cu:function(a,b,c){var u=new F.be(),t=a.a
if(t==null)H.t(P.r("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.t(P.r("May not create a face with vertices attached to different shapes."))
u.a=a
a.d.b.push(u)
u.b=b
b.d.c.push(u)
u.c=c
c.d.d.push(u)
u.a.a.d.b.push(u)
u.a.a.a_()
return u},
k0:function(){var u=new F.h6(),t=new F.hX(u)
t.b=!1
t.c=H.b([],[F.bZ])
u.a=t
t=new F.h9(u)
t.b=H.b([],[F.bN])
u.b=t
t=new F.h8(u)
t.b=H.b([],[F.bG])
u.c=t
t=new F.h7(u)
t.b=H.b([],[F.be])
u.d=t
u.e=null
return u},
kb:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.bZ(),r=new F.i1()
r.b=H.b([],[F.bN])
s.b=r
r=new F.i0()
u=[F.bG]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.hY()
u=[F.be]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.kE()
s.e=0
r=$.aC()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aB().a)!==0?e:t
s.x=(u&$.aA().a)!==0?b:t
s.y=(u&$.b4().a)!==0?f:t
s.z=(u&$.aD().a)!==0?g:t
s.Q=(u&$.kF().a)!==0?c:t
s.ch=(u&$.bw().a)!==0?i:0
s.cx=(u&$.az().a)!==0?a:t
return s},
iG:function iG(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
be:function be(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bG:function bG(){this.b=this.a=null},
bN:function bN(){this.a=null},
h6:function h6(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
h7:function h7(a){this.a=a
this.b=null},
h8:function h8(a){this.a=a
this.b=null},
h9:function h9(a){this.a=a
this.b=null},
bZ:function bZ(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i3:function i3(a){this.a=a},
i2:function i2(a){this.a=a},
hX:function hX(a){this.a=a
this.c=this.b=null},
hY:function hY(){this.d=this.c=this.b=null},
hZ:function hZ(a,b){this.a=a
this.b=b},
i_:function i_(a,b){this.a=a
this.b=b},
i0:function i0(){this.c=this.b=null},
i1:function i1(){this.b=null}},B={
kn:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="testCanvas",a=null,a0="modifiers",a1=34067,a2=V.lj("Test 010"),a3=W.j2()
a3.className="pageLargeCanvas"
a3.id=b
a2.a.appendChild(a3)
u=[P.q]
a2.cz(H.b(["A test of the Material Lighting shader with solid color and ","a directional light= with a cube texture bump map."],u))
a2.cz(H.b(["\xab[Back to Tests|../]"],u))
t=document.getElementById(b)
if(t==null)H.t(P.r("Failed to find an element with the identifier, testCanvas."))
s=E.ln(t,!0,!0,!0,!1)
r=new E.aJ()
r.a=""
r.b=!0
u=E.aJ
q=O.j3(u)
r.y=q
q.aW(r.gfN(),r.gfQ())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.sc3(0,a)
r.saT(a)
p=F.k0()
F.ca(p,a,a,1,1,1,0,0,1)
F.ca(p,a,a,1,1,0,1,0,3)
F.ca(p,a,a,1,1,0,0,1,2)
F.ca(p,a,a,1,1,-1,0,0,0)
F.ca(p,a,a,1,1,0,-1,0,0)
F.ca(p,a,a,1,1,0,0,-1,3)
p.aE()
r.sc3(0,p)
q=new U.bC()
q.be(U.a0)
q.aW(q.ge4(),q.geK())
q.e=null
q.f=V.cL()
q.r=0
o=s.x
n=new U.dg()
m=U.j4()
m.sc_(0,!0)
m.sbS(6.283185307179586)
m.sbU(0)
m.sa0(0,0)
m.sbT(100)
m.sR(0)
m.sbH(0.5)
n.b=m
l=n.gaB()
m.gq().m(0,l)
m=U.j4()
m.sc_(0,!0)
m.sbS(6.283185307179586)
m.sbU(0)
m.sa0(0,0)
m.sbT(100)
m.sR(0)
m.sbH(0.5)
n.c=m
m.gq().m(0,l)
n.d=null
n.r=n.f=n.e=!1
n.y=n.x=2.5
n.Q=4
n.ch=n.cx=!1
n.db=n.cy=0
n.dx=null
n.dy=0
n.fx=n.fr=null
k=new X.a3(!1,!1,!1)
j=n.d
n.d=k
m=new D.w(a0,j,k)
m.b=!0
n.M(m)
m=n.f
if(m!==!1){n.f=!1
m=new D.w("invertX",m,!1)
m.b=!0
n.M(m)}m=n.r
if(m!==!0){n.r=!0
m=new D.w("invertY",m,!0)
m.b=!0
n.M(m)}n.aN(o)
q.m(0,n)
o=s.x
n=new U.df()
m=U.j4()
m.sc_(0,!0)
m.sbS(6.283185307179586)
m.sbU(0)
m.sa0(0,0)
m.sbT(100)
m.sR(0)
m.sbH(0.2)
n.b=m
m.gq().m(0,n.gaB())
n.c=null
n.d=!1
n.e=2.5
n.r=4
n.x=n.y=!1
n.z=0
n.Q=null
n.ch=0
n.cy=n.cx=null
k=new X.a3(!0,!1,!1)
j=n.c
n.c=k
m=new D.w(a0,j,k)
m.b=!0
n.M(m)
n.aN(o)
q.m(0,n)
o=s.x
n=new U.dh()
n.c=0.01
n.e=n.d=0
k=new X.a3(!1,!1,!1)
n.b=k
m=new D.w(a0,a,k)
m.b=!0
n.M(m)
n.aN(o)
q.m(0,n)
r.saT(q)
i=new O.cJ()
q=O.j3(V.aq)
i.e=q
q.aW(i.ge8(),i.gea())
q=new O.ah(i,"emission")
q.c=new A.S(!1,!1,!1)
q.f=new V.O(0,0,0)
i.f=q
q=new O.ah(i,"ambient")
q.c=new A.S(!1,!1,!1)
q.f=new V.O(0,0,0)
i.r=q
q=new O.ah(i,"diffuse")
q.c=new A.S(!1,!1,!1)
q.f=new V.O(0,0,0)
i.x=q
q=new O.ah(i,"invDiffuse")
q.c=new A.S(!1,!1,!1)
q.f=new V.O(0,0,0)
i.y=q
q=new O.fq(i,"specular")
q.c=new A.S(!1,!1,!1)
q.f=new V.O(0,0,0)
q.ch=100
i.z=q
q=new O.fm(i,"bump")
q.c=new A.S(!1,!1,!1)
i.Q=q
i.ch=null
q=new O.ah(i,"reflect")
q.c=new A.S(!1,!1,!1)
q.f=new V.O(0,0,0)
i.cx=q
q=new O.fp(i,"refract")
q.c=new A.S(!1,!1,!1)
q.f=new V.O(0,0,0)
q.ch=1
i.cy=q
q=new O.fl(i,"alpha")
q.c=new A.S(!1,!1,!1)
q.f=1
i.db=q
q=new D.cD()
q.be(D.a_)
q.e=H.b([],[D.bb])
q.f=H.b([],[D.fT])
q.r=H.b([],[D.hg])
q.y=q.x=null
q.c2(q.ge6(),q.geI(),q.geM())
i.dx=q
o=new O.fo()
o.b=new V.aG(0,0,0,0)
o.c=1
o.d=10
o.e=!1
i.dy=o
o=q.x
q=o==null?q.x=D.C():o
q.m(0,i.geX())
q=i.dx
o=q.y
q=o==null?q.y=D.C():o
q.m(0,i.gaZ())
i.fr=null
q=i.dx
h=V.ji()
o=U.jG(V.jP(V.jU(),h,new V.z(1,1,-3)))
g=new V.O(1,1,1)
n=new D.bb()
n.c=new V.O(1,1,1)
n.a=V.lq()
n.d=V.ji()
n.e=V.lp()
j=n.b
n.b=o
o.gq().m(0,n.gdD())
o=new D.w("mover",j,n.b)
o.b=!0
n.aj(o)
if(!n.c.p(0,g)){j=n.c
n.c=g
o=new D.w("color",j,g)
o.b=!0
n.aj(o)}q.m(0,n)
q=i.r
q.saO(0,new V.O(0,0,1))
q=i.x
q.saO(0,new V.O(0,1,0))
q=i.z
q.saO(0,new V.O(1,0,0))
q=i.z
q.by(new A.S(!0,!1,q.c.c))
q.cr(10)
q=i.Q
o=s.f
n=o.a
f=n.createTexture()
n.bindTexture(a1,f)
n.texParameteri(a1,10242,10497)
n.texParameteri(a1,10243,10497)
n.texParameteri(a1,10241,9729)
n.texParameteri(a1,10240,9729)
n.bindTexture(a1,a)
e=new T.ht()
e.a=0
e.b=f
e.c=!1
e.d=0
o.aA(e,f,"../resources/diceBumpMap/posx.png",34069,!1,!1)
o.aA(e,f,"../resources/diceBumpMap/negx.png",34070,!1,!1)
o.aA(e,f,"../resources/diceBumpMap/posy.png",34071,!1,!1)
o.aA(e,f,"../resources/diceBumpMap/negy.png",34072,!1,!1)
o.aA(e,f,"../resources/diceBumpMap/posz.png",34073,!1,!1)
o.aA(e,f,"../resources/diceBumpMap/negz.png",34074,!1,!1)
o=q.c
if(!o.c)q.by(new A.S(o.a,!1,!0))
o=q.e
if(o!==e){if(o!=null)o.gq().S(0,q.gaZ())
j=q.e
q.e=e
e.gq().m(0,q.gaZ())
o=new D.w(q.b+".textureCube",j,q.e)
o.b=!0
q.a.T(o)}q=new M.ct()
q.a=!0
u=O.j3(u)
q.e=u
u.aW(q.gee(),q.geg())
q.y=q.x=q.r=q.f=null
d=X.kZ(a)
c=new X.cS()
c.c=1.0471975511965976
c.d=0.1
c.e=2000
c.saT(a)
u=c.c
if(!(Math.abs(u-1.0471975511965976)<$.y().a)){c.c=1.0471975511965976
u=new D.w("fov",u,1.0471975511965976)
u.b=!0
c.ax(u)}u=c.d
if(!(Math.abs(u-0.1)<$.y().a)){c.d=0.1
u=new D.w("near",u,0.1)
u.b=!0
c.ax(u)}u=c.e
if(!(Math.abs(u-2000)<$.y().a)){c.e=2000
u=new D.w("far",u,2000)
u.b=!0
c.ax(u)}u=q.b
if(u!==c){if(u!=null)u.gq().S(0,q.gac())
j=q.b
q.b=c
c.gq().m(0,q.gac())
u=new D.w("camera",j,q.b)
u.b=!0
q.ak(u)}u=q.c
if(u!==d){if(u!=null)u.gq().S(0,q.gac())
j=q.c
q.c=d
d.gq().m(0,q.gac())
u=new D.w("target",j,q.c)
u.b=!0
q.ak(u)}q.sda(a)
q.sda(i)
q.e.m(0,r)
q.b.saT(U.jG(V.ai(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
u=s.d
if(u!==q){if(u!=null)u.gq().S(0,s.gc8())
s.d=q
q.gq().m(0,s.gc8())
s.c9()}u=s.Q
if(u==null)u=s.Q=D.C()
q=u.b
u=q==null?u.b=H.b([],[{func:1,ret:-1,args:[D.P]}]):q
u.push(new B.iT(a2,i))
V.mv(s)},
iT:function iT(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,T,R,O,E,Z,D,X,V,U,M,A,F,B]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jc.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gG:function(a){return H.bP(a)},
h:function(a){return"Instance of '"+H.e(H.bQ(a))+"'"}}
J.f5.prototype={
h:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$iam:1}
J.cA.prototype={
p:function(a,b){return null==b},
h:function(a){return"null"},
gG:function(a){return 0}}
J.cB.prototype={
gG:function(a){return 0},
h:function(a){return String(a)}}
J.fQ.prototype={}
J.bq.prototype={}
J.aP.prototype={
h:function(a){var u=a[$.kt()]
if(u==null)return this.dr(a)
return"JavaScript function for "+H.e(J.Y(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.aN.prototype={
S:function(a,b){var u
if(!!a.fixed$length)H.t(P.a7("remove"))
for(u=0;u<a.length;++u)if(J.K(a[u],b)){a.splice(u,1)
return!0}return!1},
J:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.f(P.aH(a))}},
k:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.c(r,u)
r[u]=t}return r.join(b)},
fK:function(a){return this.k(a,"")},
fF:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.f(P.aH(a))}throw H.f(H.j9())},
B:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
dl:function(a,b,c){var u=a.length
if(b>u)throw H.f(P.ak(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.f(P.ak(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.cf(a,0)])
return H.b(a.slice(b,c),[H.cf(a,0)])},
gb5:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.f(H.j9())},
cA:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.f(P.aH(a))}return!1},
bb:function(a,b){if(!!a.immutable$list)H.t(P.a7("sort"))
H.cY(a,0,a.length-1,b)},
O:function(a,b){var u
for(u=0;u<a.length;++u)if(J.K(a[u],b))return!0
return!1},
h:function(a){return P.j8(a,"[","]")},
gP:function(a){return new J.Z(a,a.length)},
gG:function(a){return H.bP(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.t(P.a7("set length"))
if(b<0)throw H.f(P.ak(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){if(b>=a.length||b<0)throw H.f(H.bu(a,b))
return a[b]},
n:function(a,b,c){if(!!a.immutable$list)H.t(P.a7("indexed set"))
if(b>=a.length||b<0)throw H.f(H.bu(a,b))
a[b]=c},
$ii:1}
J.jb.prototype={}
J.Z.prototype={
gE:function(a){return this.d},
u:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.f(H.o(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bF.prototype={
fm:function(a,b){var u
if(typeof b!=="number")throw H.f(H.b3(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gb4(b)
if(this.gb4(a)===u)return 0
if(this.gb4(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gb4:function(a){return a===0?1/a<0:a<0},
hb:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.f(P.a7(""+a+".toInt()"))},
bO:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.f(P.a7(""+a+".floor()"))},
a9:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.a7(""+a+".round()"))},
dc:function(a,b){var u
if(b>20)throw H.f(P.ak(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gb4(a))return"-"+u
return u},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gG:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
dg:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
dt:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cs(a,b)},
Y:function(a,b){return(a|0)===a?a/b|0:this.cs(a,b)},
cs:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.f(P.a7("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
b0:function(a,b){var u
if(a>0)u=this.f4(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
f4:function(a,b){return b>31?0:a>>>b},
$iJ:1,
$ia9:1}
J.cz.prototype={$ix:1}
J.cy.prototype={}
J.aO.prototype={
bF:function(a,b){if(b<0)throw H.f(H.bu(a,b))
if(b>=a.length)H.t(H.bu(a,b))
return a.charCodeAt(b)},
ay:function(a,b){if(b>=a.length)throw H.f(H.bu(a,b))
return a.charCodeAt(b)},
A:function(a,b){if(typeof b!=="string")throw H.f(P.jC(b,null,null))
return a+b},
bc:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
aX:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.f(P.fX(b,null))
if(b>c)throw H.f(P.fX(b,null))
if(c>a.length)throw H.f(P.fX(c,null))
return a.substring(b,c)},
ai:function(a,b){return this.aX(a,b,null)},
he:function(a){return a.toLowerCase()},
t:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.C)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
a7:function(a,b){var u=b-a.length
if(u<=0)return a
return this.t(" ",u)+a},
h:function(a){return a},
gG:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$iq:1}
H.m.prototype={
gl:function(a){return this.a.length},
i:function(a,b){return C.b.bF(this.a,b)},
$ap:function(){return[P.x]},
$ai:function(){return[P.x]}}
H.eK.prototype={}
H.cG.prototype={
gP:function(a){return new H.bH(this,this.gl(this))},
ba:function(a,b){return this.dq(0,b)}}
H.bH.prototype={
gE:function(a){return this.d},
u:function(){var u,t=this,s=t.a,r=J.jo(s),q=r.gl(s)
if(t.b!==q)throw H.f(P.aH(s))
u=t.c
if(u>=q){t.d=null
return!1}t.d=r.B(s,u);++t.c
return!0}}
H.fh.prototype={
gP:function(a){return new H.fi(J.b6(this.a),this.b)},
gl:function(a){return J.b7(this.a)},
B:function(a,b){return this.b.$1(J.j_(this.a,b))},
$ai:function(a,b){return[b]}}
H.fi.prototype={
u:function(){var u=this,t=u.b
if(t.u()){u.a=u.c.$1(t.gE(t))
return!0}u.a=null
return!1},
gE:function(a){return this.a}}
H.fj.prototype={
gl:function(a){return J.b7(this.a)},
B:function(a,b){return this.b.$1(J.j_(this.a,b))},
$acG:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.c_.prototype={
gP:function(a){return new H.i6(J.b6(this.a),this.b)}}
H.i6.prototype={
u:function(){var u,t
for(u=this.a,t=this.b;u.u();)if(t.$1(u.gE(u)))return!0
return!1},
gE:function(a){var u=this.a
return u.gE(u)}}
H.cv.prototype={}
H.hP.prototype={}
H.dd.prototype={}
H.hE.prototype={
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
H.fM.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.f7.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.hO.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.iY.prototype={
$1:function(a){if(!!J.M(a).$ibc)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:7}
H.dU.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bz.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
ghg:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hq.prototype={}
H.hi.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.eg(u)+"'"}}
H.bx.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bx))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gG:function(a){var u,t=this.c
if(t==null)u=H.bP(this.a)
else u=typeof t!=="object"?J.b5(t):H.bP(t)
return(u^H.bP(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.bQ(u))+"'")}}
H.es.prototype={
h:function(a){return this.a}}
H.h3.prototype={
h:function(a){return"RuntimeError: "+H.e(this.a)}}
H.L.prototype={
gl:function(a){return this.a},
gZ:function(a){return new H.cE(this,[H.cf(this,0)])},
cF:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.ci(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.ci(t,b)}else return s.fI(b)},
fI:function(a){var u=this.d
if(u==null)return!1
return this.bP(this.bm(u,J.b5(a)&0x3ffffff),a)>=0},
i:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.b_(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.b_(r,b)
s=t==null?null:t.b
return s}else return q.fJ(b)},
fJ:function(a){var u,t,s=this.d
if(s==null)return
u=this.bm(s,J.b5(a)&0x3ffffff)
t=this.bP(u,a)
if(t<0)return
return u[t].b},
n:function(a,b,c){var u,t,s,r,q,p,o=this
if(typeof b==="string"){u=o.b
o.cc(u==null?o.b=o.bv():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.cc(t==null?o.c=o.bv():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bv()
r=J.b5(b)&0x3ffffff
q=o.bm(s,r)
if(q==null)o.bz(s,r,[o.bw(b,c)])
else{p=o.bP(q,b)
if(p>=0)q[p].b=c
else q.push(o.bw(b,c))}}},
J:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.f(P.aH(u))
t=t.c}},
cc:function(a,b,c){var u=this.b_(a,b)
if(u==null)this.bz(a,b,this.bw(b,c))
else u.b=c},
e1:function(){this.r=this.r+1&67108863},
bw:function(a,b){var u,t=this,s=new H.fa(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.e1()
return s},
bP:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.K(a[t].a,b))return t
return-1},
h:function(a){return P.jO(this)},
b_:function(a,b){return a[b]},
bm:function(a,b){return a[b]},
bz:function(a,b,c){a[b]=c},
dV:function(a,b){delete a[b]},
ci:function(a,b){return this.b_(a,b)!=null},
bv:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bz(t,u,t)
this.dV(t,u)
return t}}
H.fa.prototype={}
H.cE.prototype={
gl:function(a){return this.a.a},
gP:function(a){var u=this.a,t=new H.fb(u,u.r)
t.c=u.e
return t}}
H.fb.prototype={
gE:function(a){return this.d},
u:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.aH(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.iP.prototype={
$1:function(a){return this.a(a)},
$S:7}
H.iQ.prototype={
$2:function(a,b){return this.a(a,b)}}
H.iR.prototype={
$1:function(a){return this.a(a)}}
H.f6.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.bM.prototype={}
H.cM.prototype={
gl:function(a){return a.length},
$iv:1,
$av:function(){}}
H.bL.prototype={
i:function(a,b){H.b1(b,a,a.length)
return a[b]},
$ap:function(){return[P.J]},
$ii:1,
$ai:function(){return[P.J]}}
H.cN.prototype={
$ap:function(){return[P.x]},
$ii:1,
$ai:function(){return[P.x]}}
H.fE.prototype={
i:function(a,b){H.b1(b,a,a.length)
return a[b]}}
H.fF.prototype={
i:function(a,b){H.b1(b,a,a.length)
return a[b]}}
H.fG.prototype={
i:function(a,b){H.b1(b,a,a.length)
return a[b]}}
H.fH.prototype={
i:function(a,b){H.b1(b,a,a.length)
return a[b]}}
H.fI.prototype={
i:function(a,b){H.b1(b,a,a.length)
return a[b]}}
H.cO.prototype={
gl:function(a){return a.length},
i:function(a,b){H.b1(b,a,a.length)
return a[b]}}
H.fJ.prototype={
gl:function(a){return a.length},
i:function(a,b){H.b1(b,a,a.length)
return a[b]}}
H.c2.prototype={}
H.c3.prototype={}
H.c4.prototype={}
H.c5.prototype={}
P.i8.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:16}
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
P.e_.prototype={
dH:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bt(new P.iC(this,b),0),a)
else throw H.f(P.a7("`setTimeout()` not found."))},
dI:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bt(new P.iB(this,a,Date.now(),b),0),a)
else throw H.f(P.a7("Periodic timer."))},
$id6:1}
P.iC.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.iB.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.dt(u,q)}s.c=r
t.d.$1(s)}}
P.dk.prototype={}
P.d1.prototype={}
P.hl.prototype={}
P.d6.prototype={}
P.iF.prototype={}
P.iK.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.cR():s
s=this.b
if(s==null)throw H.f(t)
u=H.f(t)
u.stack=s.h(0)
throw u}}
P.ip.prototype={
h6:function(a){var u,t,s,r=null
try{if(C.e===$.ad){a.$0()
return}P.lZ(r,r,this,a)}catch(s){u=H.ay(s)
t=H.js(s)
P.kh(r,r,this,u,t)}},
h7:function(a,b){var u,t,s,r=null
try{if(C.e===$.ad){a.$1(b)
return}P.m_(r,r,this,a,b)}catch(s){u=H.ay(s)
t=H.js(s)
P.kh(r,r,this,u,t)}},
h8:function(a,b){return this.h7(a,b,null)},
fj:function(a){return new P.iq(this,a)},
cB:function(a,b){return new P.ir(this,a,b)}}
P.iq.prototype={
$0:function(){return this.a.h6(this.b)}}
P.ir.prototype={
$1:function(a){return this.a.h8(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.il.prototype={
gP:function(a){var u=new P.dB(this,this.r)
u.c=this.e
return u},
gl:function(a){return this.a},
O:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.dQ(b)
return t}},
dQ:function(a){var u=this.d
if(u==null)return!1
return this.bk(this.cl(u,a),a)>=0},
m:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cd(u==null?s.b=P.jk():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cd(t==null?s.c=P.jk():t,b)}else return s.dK(0,b)},
dK:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.jk()
u=s.cf(b)
t=r[u]
if(t==null)r[u]=[s.bh(b)]
else{if(s.bk(t,b)>=0)return!1
t.push(s.bh(b))}return!0},
S:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.eV(this.c,b)
else return this.eU(0,b)},
eU:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cl(r,b)
t=s.bk(u,b)
if(t<0)return!1
s.ct(u.splice(t,1)[0])
return!0},
cd:function(a,b){if(a[b]!=null)return!1
a[b]=this.bh(b)
return!0},
eV:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.ct(u)
delete a[b]
return!0},
ce:function(){this.r=1073741823&this.r+1},
bh:function(a){var u,t=this,s=new P.im(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.ce()
return s},
ct:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.ce()},
cf:function(a){return J.b5(a)&1073741823},
cl:function(a,b){return a[this.cf(b)]},
bk:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.K(a[t].a,b))return t
return-1}}
P.im.prototype={}
P.dB.prototype={
gE:function(a){return this.d},
u:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.aH(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fc.prototype={$ii:1}
P.p.prototype={
gP:function(a){return new H.bH(a,this.gl(a))},
B:function(a,b){return this.i(a,b)},
hd:function(a,b){var u,t,s=this,r=H.b([],[H.mh(s,a,"p",0)])
C.a.sl(r,s.gl(a))
for(u=0;u<s.gl(a);++u){t=s.i(a,u)
if(u>=r.length)return H.c(r,u)
r[u]=t}return r},
hc:function(a){return this.hd(a,!0)},
h:function(a){return P.j8(a,"[","]")}}
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
P.ap.prototype={
J:function(a,b){var u,t
for(u=J.b6(this.gZ(a));u.u();){t=u.gE(u)
b.$2(t,this.i(a,t))}},
gl:function(a){return J.b7(this.gZ(a))},
h:function(a){return P.jO(a)}}
P.it.prototype={
ae:function(a,b){var u
for(u=J.b6(b);u.u();)this.m(0,u.gE(u))},
h:function(a){return P.j8(this,"{","}")},
B:function(a,b){var u,t,s
P.jX(b,"index")
for(u=P.ly(this,this.r),t=0;u.u();){s=u.d
if(b===t)return s;++t}throw H.f(P.F(b,this,"index",null,t))},
$ii:1}
P.dC.prototype={}
P.eu.prototype={}
P.ex.prototype={}
P.eM.prototype={}
P.f2.prototype={
h:function(a){return this.a}}
P.f1.prototype={
dS:function(a,b,c){var u,t,s,r,q,p,o=null
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=o;r<c;++r){if(r>=a.length)return H.c(a,r)
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
default:p=o}if(p!=null){if(q==null)q=new P.at("")
if(r>b)q.a+=C.b.aX(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.kM(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.hS.prototype={}
P.hT.prototype={
fn:function(a){var u,t,s=P.jY(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.iD(u)
if(t.dX(a,0,s)!==s)t.cu(C.b.bF(a,s-1),0)
return new Uint8Array(u.subarray(0,H.lB(0,t.b,u.length)))}}
P.iD.prototype={
cu:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
if((b&64512)===56320){u=65536+((a&1023)<<10)|b&1023
t.b=q
if(r>=p)return H.c(s,r)
s[r]=240|u>>>18
r=t.b=q+1
if(q>=p)return H.c(s,q)
s[q]=128|u>>>12&63
q=t.b=r+1
if(r>=p)return H.c(s,r)
s[r]=128|u>>>6&63
t.b=q+1
if(q>=p)return H.c(s,q)
s[q]=128|u&63
return!0}else{t.b=q
if(r>=p)return H.c(s,r)
s[r]=224|a>>>12
r=t.b=q+1
if(q>=p)return H.c(s,q)
s[q]=128|a>>>6&63
t.b=r+1
if(r>=p)return H.c(s,r)
s[r]=128|a&63
return!1}},
dX:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.bF(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.ay(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cu(r,C.b.ay(a,p)))s=p}else if(r<=2047){q=n.b
o=q+1
if(o>=t)break
n.b=o
if(q>=t)return H.c(u,q)
u[q]=192|r>>>6
n.b=o+1
u[o]=128|r&63}else{q=n.b
if(q+2>=t)break
o=n.b=q+1
if(q>=t)return H.c(u,q)
u[q]=224|r>>>12
q=n.b=o+1
if(o>=t)return H.c(u,o)
u[o]=128|r>>>6&63
n.b=q+1
if(q>=t)return H.c(u,q)
u[q]=128|r&63}}return s}}
P.am.prototype={}
P.a2.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.a2&&this.a===b.a&&!0},
gG:function(a){var u=this.a
return(u^C.d.b0(u,30))&1073741823},
h:function(a){var u=this,t=P.kV(H.le(u)),s=P.cp(H.lc(u)),r=P.cp(H.l8(u)),q=P.cp(H.l9(u)),p=P.cp(H.lb(u)),o=P.cp(H.ld(u)),n=P.kW(H.la(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.J.prototype={}
P.aI.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.aI&&this.a===b.a},
gG:function(a){return C.d.gG(this.a)},
h:function(a){var u,t,s,r=new P.eJ(),q=this.a
if(q<0)return"-"+new P.aI(0-q).h(0)
u=r.$1(C.d.Y(q,6e7)%60)
t=r.$1(C.d.Y(q,1e6)%60)
s=new P.eI().$1(q%1e6)
return""+C.d.Y(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
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
P.bc.prototype={}
P.cR.prototype={
h:function(a){return"Throw of null."}}
P.aa.prototype={
gbj:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbi:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbj()+o+u
if(!q.a)return t
s=q.gbi()
r=P.j7(q.b)
return t+s+": "+r}}
P.bm.prototype={
gbj:function(){return"RangeError"},
gbi:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.f3.prototype={
gbj:function(){return"RangeError"},
gbi:function(){var u,t=this.b
if(typeof t!=="number")return t.a2()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gl:function(a){return this.f}}
P.hQ.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.hN.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.bS.prototype={
h:function(a){return"Bad state: "+this.a}}
P.ew.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.j7(u)+"."}}
P.fP.prototype={
h:function(a){return"Out of Memory"},
$ibc:1}
P.d_.prototype={
h:function(a){return"Stack Overflow"},
$ibc:1}
P.eC.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dt.prototype={
h:function(a){return"Exception: "+this.a}}
P.eW.prototype={
h:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.b.aX(s,0,75)+"...":s
return t+"\n"+r}}
P.eY.prototype={}
P.x.prototype={}
P.i.prototype={
ba:function(a,b){return new H.c_(this,b,[H.jr(this,"i",0)])},
gl:function(a){var u,t=this.gP(this)
for(u=0;t.u();)++u
return u},
gav:function(a){var u,t=this.gP(this)
if(!t.u())throw H.f(H.j9())
u=t.gE(t)
if(t.u())throw H.f(H.l0())
return u},
B:function(a,b){var u,t,s
P.jX(b,"index")
for(u=this.gP(this),t=0;u.u();){s=u.gE(u)
if(b===t)return s;++t}throw H.f(P.F(b,this,"index",null,t))},
h:function(a){return P.l_(this,"(",")")}}
P.f4.prototype={}
P.ag.prototype={$ii:1}
P.cI.prototype={}
P.aS.prototype={
gG:function(a){return P.U.prototype.gG.call(this,this)},
h:function(a){return"null"}}
P.a9.prototype={}
P.U.prototype={constructor:P.U,$iU:1,
p:function(a,b){return this===b},
gG:function(a){return H.bP(this)},
h:function(a){return"Instance of '"+H.e(H.bQ(this))+"'"},
toString:function(){return this.h(this)}}
P.q.prototype={}
P.at.prototype={
gl:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.l.prototype={}
W.ei.prototype={
gl:function(a){return a.length}}
W.ej.prototype={
h:function(a){return String(a)}}
W.ek.prototype={
h:function(a){return String(a)}}
W.cj.prototype={}
W.b9.prototype={$ib9:1}
W.ba.prototype={
c0:function(a,b,c){if(c!=null)return a.getContext(b,P.m8(c))
return a.getContext(b)},
df:function(a,b){return this.c0(a,b,null)},
$iba:1}
W.aE.prototype={
gl:function(a){return a.length}}
W.ey.prototype={
gl:function(a){return a.length}}
W.D.prototype={$iD:1}
W.bA.prototype={
gl:function(a){return a.length}}
W.ez.prototype={}
W.a1.prototype={}
W.af.prototype={}
W.eA.prototype={
gl:function(a){return a.length}}
W.eB.prototype={
gl:function(a){return a.length}}
W.eE.prototype={
gl:function(a){return a.length}}
W.ab.prototype={$iab:1}
W.eF.prototype={
h:function(a){return String(a)}}
W.cr.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[[P.a5,P.a9]]},
$ap:function(){return[[P.a5,P.a9]]},
$ii:1,
$ai:function(){return[[P.a5,P.a9]]}}
W.cs.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gau(a))+" x "+H.e(this.gao(a))},
p:function(a,b){var u
if(b==null)return!1
u=J.M(b)
if(!u.$ia5)return!1
return a.left===u.gb6(b)&&a.top===u.gb8(b)&&this.gau(a)===u.gau(b)&&this.gao(a)===u.gao(b)},
gG:function(a){return W.kd(C.c.gG(a.left),C.c.gG(a.top),C.c.gG(this.gau(a)),C.c.gG(this.gao(a)))},
gcC:function(a){return a.bottom},
gao:function(a){return a.height},
gb6:function(a){return a.left},
gbX:function(a){return a.right},
gb8:function(a){return a.top},
gau:function(a){return a.width},
$ia5:1,
$aa5:function(){return[P.a9]}}
W.eG.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[P.q]},
$ap:function(){return[P.q]},
$ii:1,
$ai:function(){return[P.q]}}
W.eH.prototype={
gl:function(a){return a.length}}
W.ic.prototype={
gl:function(a){return this.b.length},
i:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
m:function(a,b){this.a.appendChild(b)
return b},
gP:function(a){var u=this.hc(this)
return new J.Z(u,u.length)},
$ap:function(){return[W.N]},
$ai:function(){return[W.N]}}
W.N.prototype={
gfi:function(a){return new W.ie(a)},
gcD:function(a){return new W.ic(a,a.children)},
gcE:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.a2()
if(s<0)s=-s*0
if(typeof r!=="number")return r.a2()
if(r<0)r=-r*0
return new P.a5(u,t,s,r,[P.a9])},
h:function(a){return a.localName},
a5:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.jJ
if(u==null){u=H.b([],[W.as])
t=new W.cQ(u)
u.push(W.kc(null))
u.push(W.ke())
$.jJ=t
d=t}else d=u
u=$.jI
if(u==null){u=new W.e5(d)
$.jI=u
c=u}else{u.a=d
c=u}}if($.ao==null){u=document
t=u.implementation.createHTMLDocument("")
$.ao=t
$.j6=t.createRange()
s=$.ao.createElement("base")
s.href=u.baseURI
$.ao.head.appendChild(s)}u=$.ao
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.ao
if(!!this.$ib9)r=u.body
else{r=u.createElement(a.tagName)
$.ao.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.a.O(C.L,a.tagName)){$.j6.selectNodeContents(r)
q=$.j6.createContextualFragment(b)}else{r.innerHTML=b
q=$.ao.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.ao.body
if(r==null?u!=null:r!==u)J.jA(r)
c.c1(q)
document.adoptNode(q)
return q},
fp:function(a,b,c){return this.a5(a,b,c,null)},
di:function(a,b){a.textContent=null
a.appendChild(this.a5(a,b,null,null))},
$iN:1,
gd9:function(a){return a.tagName}}
W.eL.prototype={
$1:function(a){return!!J.M(a).$iN}}
W.h.prototype={$ih:1}
W.d.prototype={
fb:function(a,b,c,d){if(c!=null)this.dL(a,b,c,!1)},
dL:function(a,b,c,d){return a.addEventListener(b,H.bt(c,1),!1)}}
W.aK.prototype={$iaK:1}
W.eQ.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aK]},
$ap:function(){return[W.aK]},
$ii:1,
$ai:function(){return[W.aK]}}
W.eR.prototype={
gl:function(a){return a.length}}
W.eV.prototype={
gl:function(a){return a.length}}
W.aL.prototype={$iaL:1}
W.f0.prototype={
gl:function(a){return a.length}}
W.bD.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.G]},
$ap:function(){return[W.G]},
$ii:1,
$ai:function(){return[W.G]}}
W.aM.prototype={$iaM:1,
gcG:function(a){return a.data}}
W.bE.prototype={$ibE:1}
W.bi.prototype={$ibi:1}
W.fd.prototype={
h:function(a){return String(a)}}
W.fx.prototype={
gl:function(a){return a.length}}
W.fy.prototype={
i:function(a,b){return P.ax(a.get(b))},
J:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.ax(u.value[1]))}},
gZ:function(a){var u=H.b([],[P.q])
this.J(a,new W.fz(u))
return u},
gl:function(a){return a.size}}
W.fz.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fA.prototype={
i:function(a,b){return P.ax(a.get(b))},
J:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.ax(u.value[1]))}},
gZ:function(a){var u=H.b([],[P.q])
this.J(a,new W.fB(u))
return u},
gl:function(a){return a.size}}
W.fB.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aR.prototype={$iaR:1}
W.fC.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aR]},
$ap:function(){return[W.aR]},
$ii:1,
$ai:function(){return[W.aR]}}
W.aj.prototype={$iaj:1}
W.V.prototype={
gav:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.f(P.k1("No elements"))
if(t>1)throw H.f(P.k1("More than one element"))
return u.firstChild},
ae:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
gP:function(a){var u=this.a.childNodes
return new W.cw(u,u.length)},
gl:function(a){return this.a.childNodes.length},
i:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
$ap:function(){return[W.G]},
$ai:function(){return[W.G]}}
W.G.prototype={
h2:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
h:function(a){var u=a.nodeValue
return u==null?this.dn(a):u},
$iG:1}
W.cP.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.G]},
$ap:function(){return[W.G]},
$ii:1,
$ai:function(){return[W.G]}}
W.aT.prototype={$iaT:1,
gl:function(a){return a.length}}
W.fS.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aT]},
$ap:function(){return[W.aT]},
$ii:1,
$ai:function(){return[W.aT]}}
W.h1.prototype={
i:function(a,b){return P.ax(a.get(b))},
J:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.ax(u.value[1]))}},
gZ:function(a){var u=H.b([],[P.q])
this.J(a,new W.h2(u))
return u},
gl:function(a){return a.size}}
W.h2.prototype={
$2:function(a,b){return this.a.push(a)}}
W.h4.prototype={
gl:function(a){return a.length}}
W.aV.prototype={$iaV:1}
W.he.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aV]},
$ap:function(){return[W.aV]},
$ii:1,
$ai:function(){return[W.aV]}}
W.aW.prototype={$iaW:1}
W.hf.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aW]},
$ap:function(){return[W.aW]},
$ii:1,
$ai:function(){return[W.aW]}}
W.aX.prototype={$iaX:1,
gl:function(a){return a.length}}
W.hj.prototype={
i:function(a,b){return a.getItem(b)},
J:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gZ:function(a){var u=H.b([],[P.q])
this.J(a,new W.hk(u))
return u},
gl:function(a){return a.length}}
W.hk.prototype={
$2:function(a,b){return this.a.push(a)}}
W.au.prototype={$iau:1}
W.d2.prototype={
a5:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bd(a,b,c,d)
u=W.kX("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.V(t).ae(0,new W.V(u))
return t}}
W.hn.prototype={
a5:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bd(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.t.a5(u.createElement("table"),b,c,d)
u.toString
u=new W.V(u)
s=u.gav(u)
s.toString
u=new W.V(s)
r=u.gav(u)
t.toString
r.toString
new W.V(t).ae(0,new W.V(r))
return t}}
W.ho.prototype={
a5:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bd(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.t.a5(u.createElement("table"),b,c,d)
u.toString
u=new W.V(u)
s=u.gav(u)
t.toString
s.toString
new W.V(t).ae(0,new W.V(s))
return t}}
W.bT.prototype={$ibT:1}
W.aY.prototype={$iaY:1}
W.av.prototype={$iav:1}
W.hr.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.av]},
$ap:function(){return[W.av]},
$ii:1,
$ai:function(){return[W.av]}}
W.hs.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aY]},
$ap:function(){return[W.aY]},
$ii:1,
$ai:function(){return[W.aY]}}
W.hx.prototype={
gl:function(a){return a.length}}
W.aZ.prototype={$iaZ:1}
W.bn.prototype={$ibn:1}
W.hB.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aZ]},
$ap:function(){return[W.aZ]},
$ii:1,
$ai:function(){return[W.aZ]}}
W.hC.prototype={
gl:function(a){return a.length}}
W.b_.prototype={}
W.hR.prototype={
h:function(a){return String(a)}}
W.i4.prototype={
gl:function(a){return a.length}}
W.b0.prototype={
gft:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.a7("deltaY is not supported"))},
gfs:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.a7("deltaX is not supported"))},
$ib0:1}
W.c0.prototype={
eW:function(a,b){return a.requestAnimationFrame(H.bt(b,1))},
dW:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.id.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.D]},
$ap:function(){return[W.D]},
$ii:1,
$ai:function(){return[W.D]}}
W.dn.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
p:function(a,b){var u
if(b==null)return!1
u=J.M(b)
if(!u.$ia5)return!1
return a.left===u.gb6(b)&&a.top===u.gb8(b)&&a.width===u.gau(b)&&a.height===u.gao(b)},
gG:function(a){return W.kd(C.c.gG(a.left),C.c.gG(a.top),C.c.gG(a.width),C.c.gG(a.height))},
gao:function(a){return a.height},
gau:function(a){return a.width}}
W.ii.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aL]},
$ap:function(){return[W.aL]},
$ii:1,
$ai:function(){return[W.aL]}}
W.dH.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.G]},
$ap:function(){return[W.G]},
$ii:1,
$ai:function(){return[W.G]}}
W.iw.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aX]},
$ap:function(){return[W.aX]},
$ii:1,
$ai:function(){return[W.aX]}}
W.ix.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.au]},
$ap:function(){return[W.au]},
$ii:1,
$ai:function(){return[W.au]}}
W.ib.prototype={
J:function(a,b){var u,t,s,r,q
for(u=this.gZ(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.o)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gZ:function(a){var u,t,s,r=this.a.attributes,q=H.b([],[P.q])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.c(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q}}
W.ie.prototype={
i:function(a,b){return this.a.getAttribute(b)},
gl:function(a){return this.gZ(this).length}}
W.ig.prototype={}
W.ih.prototype={
$1:function(a){return this.a.$1(a)}}
W.c1.prototype={
dC:function(a){var u
if($.dw.a===0){for(u=0;u<262;++u)$.dw.n(0,C.K[u],W.mj())
for(u=0;u<12;++u)$.dw.n(0,C.l[u],W.mk())}},
aD:function(a){return $.kH().O(0,W.bB(a))},
af:function(a,b,c){var u=$.dw.i(0,H.e(W.bB(a))+"::"+b)
if(u==null)u=$.dw.i(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$ias:1}
W.E.prototype={
gP:function(a){return new W.cw(a,this.gl(a))}}
W.cQ.prototype={
aD:function(a){return C.a.cA(this.a,new W.fL(a))},
af:function(a,b,c){return C.a.cA(this.a,new W.fK(a,b,c))},
$ias:1}
W.fL.prototype={
$1:function(a){return a.aD(this.a)}}
W.fK.prototype={
$1:function(a){return a.af(this.a,this.b,this.c)}}
W.dP.prototype={
dG:function(a,b,c,d){var u,t,s
this.a.ae(0,c)
u=b.ba(0,new W.iu())
t=b.ba(0,new W.iv())
this.b.ae(0,u)
s=this.c
s.ae(0,C.M)
s.ae(0,t)},
aD:function(a){return this.a.O(0,W.bB(a))},
af:function(a,b,c){var u=this,t=W.bB(a),s=u.c
if(s.O(0,H.e(t)+"::"+b))return u.d.fd(c)
else if(s.O(0,"*::"+b))return u.d.fd(c)
else{s=u.b
if(s.O(0,H.e(t)+"::"+b))return!0
else if(s.O(0,"*::"+b))return!0
else if(s.O(0,H.e(t)+"::*"))return!0
else if(s.O(0,"*::*"))return!0}return!1},
$ias:1}
W.iu.prototype={
$1:function(a){return!C.a.O(C.l,a)}}
W.iv.prototype={
$1:function(a){return C.a.O(C.l,a)}}
W.iz.prototype={
af:function(a,b,c){if(this.ds(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.O(0,b)
return!1}}
W.iA.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)}}
W.iy.prototype={
aD:function(a){var u=J.M(a)
if(!!u.$ibR)return!1
u=!!u.$ij
if(u&&W.bB(a)==="foreignObject")return!1
if(u)return!0
return!1},
af:function(a,b,c){if(b==="is"||C.b.bc(b,"on"))return!1
return this.aD(a)},
$ias:1}
W.cw.prototype={
u:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.eh(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gE:function(a){return this.d}}
W.as.prototype={}
W.is.prototype={}
W.e5.prototype={
c1:function(a){new W.iE(this).$2(a,null)},
aM:function(a,b){if(b==null)J.jA(a)
else b.removeChild(a)},
f0:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.kL(a)
n=o.a.getAttribute("is")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=u?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ay(r)}t="element unprintable"
try{t=J.Y(a)}catch(r){H.ay(r)}try{s=W.bB(a)
this.f_(a,b,p,t,s,o,n)}catch(r){if(H.ay(r) instanceof P.aa)throw r
else{this.aM(a,b)
window
q="Removing corrupted element "+H.e(t)
if(typeof console!="undefined")window.console.warn(q)}}},
f_:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=this
if(c){p.aM(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!p.a.aD(a)){p.aM(a,b)
window
u="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!p.a.af(a,"is",g)){p.aM(a,b)
window
u="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gZ(f)
t=H.b(u.slice(0),[H.cf(u,0)])
for(s=f.gZ(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.c(t,s)
r=t[s]
if(!p.a.af(a,J.kN(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.e(e)+" "+r+'="'+H.e(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.M(a).$ibT)p.c1(a.content)}}
W.iE.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.f0(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aM(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ay(s)
r=u
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=t}}}
W.dm.prototype={}
W.dp.prototype={}
W.dq.prototype={}
W.dr.prototype={}
W.ds.prototype={}
W.du.prototype={}
W.dv.prototype={}
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
W.c6.prototype={}
W.c7.prototype={}
W.dQ.prototype={}
W.dR.prototype={}
W.dV.prototype={}
W.dY.prototype={}
W.dZ.prototype={}
W.c8.prototype={}
W.c9.prototype={}
W.e0.prototype={}
W.e1.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.ee.prototype={}
W.ef.prototype={}
P.e4.prototype={$iaM:1,
gcG:function(a){return this.a}}
P.iL.prototype={
$2:function(a,b){this.a[a]=b},
$S:8}
P.eS.prototype={
gbn:function(){var u=this.b,t=H.jr(u,"p",0)
return new H.fh(new H.c_(u,new P.eT(),[t]),new P.eU(),[t,W.N])},
m:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.b7(this.gbn().a)},
i:function(a,b){var u=this.gbn()
return u.b.$1(J.j_(u.a,b))},
gP:function(a){var u=P.jN(this.gbn(),!1,W.N)
return new J.Z(u,u.length)},
$ap:function(){return[W.N]},
$ai:function(){return[W.N]}}
P.eT.prototype={
$1:function(a){return!!J.M(a).$iN}}
P.eU.prototype={
$1:function(a){return H.k(a,"$iN")}}
P.io.prototype={
gbX:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.u(t)
return u+t},
gcC:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.u(t)
return u+t},
h:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
p:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.M(b)
if(!!u.$ia5){t=q.a
if(t==u.gb6(b)){s=q.b
if(s==u.gb8(b)){r=q.c
if(typeof t!=="number")return t.A()
if(typeof r!=="number")return H.u(r)
if(t+r===u.gbX(b)){t=q.d
if(typeof s!=="number")return s.A()
if(typeof t!=="number")return H.u(t)
u=s+t===u.gcC(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gG:function(a){var u=this,t=u.a,s=J.b5(t),r=u.b,q=J.b5(r),p=u.c
if(typeof t!=="number")return t.A()
if(typeof p!=="number")return H.u(p)
p=C.d.gG(t+p)
t=u.d
if(typeof r!=="number")return r.A()
if(typeof t!=="number")return H.u(t)
t=C.d.gG(r+t)
return P.lx(P.ik(P.ik(P.ik(P.ik(0,s),q),p),t))}}
P.a5.prototype={
gb6:function(a){return this.a},
gb8:function(a){return this.b},
gau:function(a){return this.c},
gao:function(a){return this.d}}
P.bj.prototype={$ibj:1}
P.f9.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a.getItem(b)},
B:function(a,b){return this.i(a,b)},
$ap:function(){return[P.bj]},
$ii:1,
$ai:function(){return[P.bj]}}
P.bk.prototype={$ibk:1}
P.fN.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a.getItem(b)},
B:function(a,b){return this.i(a,b)},
$ap:function(){return[P.bk]},
$ii:1,
$ai:function(){return[P.bk]}}
P.fV.prototype={
gl:function(a){return a.length}}
P.bR.prototype={$ibR:1}
P.hm.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a.getItem(b)},
B:function(a,b){return this.i(a,b)},
$ap:function(){return[P.q]},
$ii:1,
$ai:function(){return[P.q]}}
P.j.prototype={
gcD:function(a){return new P.eS(a,new W.V(a))},
a5:function(a,b,c,d){var u,t,s,r,q,p=H.b([],[W.as])
p.push(W.kc(null))
p.push(W.ke())
p.push(new W.iy())
c=new W.e5(new W.cQ(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.n).fp(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.V(s)
q=p.gav(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ij:1}
P.bo.prototype={$ibo:1}
P.hD.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a.getItem(b)},
B:function(a,b){return this.i(a,b)},
$ap:function(){return[P.bo]},
$ii:1,
$ai:function(){return[P.bo]}}
P.dz.prototype={}
P.dA.prototype={}
P.dK.prototype={}
P.dL.prototype={}
P.dW.prototype={}
P.dX.prototype={}
P.e2.prototype={}
P.e3.prototype={}
P.em.prototype={
gl:function(a){return a.length}}
P.en.prototype={
i:function(a,b){return P.ax(a.get(b))},
J:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.ax(u.value[1]))}},
gZ:function(a){var u=H.b([],[P.q])
this.J(a,new P.eo(u))
return u},
gl:function(a){return a.size}}
P.eo.prototype={
$2:function(a,b){return this.a.push(a)}}
P.ep.prototype={
gl:function(a){return a.length}}
P.b8.prototype={}
P.fO.prototype={
gl:function(a){return a.length}}
P.dl.prototype={}
P.cW.prototype={
h9:function(a,b,c,d,e,f,g){var u,t=J.M(g)
if(!!t.$iaM)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.m9(g))
return}if(!!t.$ibE)t=!0
else t=!1
if(t){a.texImage2D(b,c,d,e,f,g)
return}throw H.f(P.kO("Incorrect number or type of arguments"))}}
P.hh.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return P.ax(a.item(b))},
B:function(a,b){return this.i(a,b)},
$ap:function(){return[[P.cI,,,]]},
$ii:1,
$ai:function(){return[[P.cI,,,]]}}
P.dS.prototype={}
P.dT.prototype={}
T.an.prototype={
ap:function(a,b){return!0},
h:function(a){return"all"}}
T.cx.prototype={
ap:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)if(u[s].ap(0,b))return!0
return!1},
h:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.o)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.h(0)}return s}}
T.aQ.prototype={}
T.W.prototype={
ap:function(a,b){return!this.dm(0,b)},
h:function(a){return"!["+this.c5(0)+"]"}}
T.fW.prototype={
ap:function(a,b){return this.a<=b&&this.b>=b},
h:function(a){var u=H.je(this.a),t=H.je(this.b)
return u+".."+t}}
T.h5.prototype={
dw:function(a){var u,t
if(a.a.length<=0)throw H.f(P.r("May not create a Set with zero characters."))
u=new H.L([P.x,P.am])
for(t=new H.bH(a,a.gl(a));t.u();)u.n(0,t.d,!0)
this.a=u},
ap:function(a,b){return this.a.cF(0,b)},
h:function(a){var u=this.a
return P.jf(new H.cE(u,[H.cf(u,0)]))}}
R.d0.prototype={
k:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new R.da(this.a.j(0,b))
r.a=H.b([],[T.aQ])
r.c=!1
this.c.push(r)
return r},
fE:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
if(r.ap(0,a))return r}return},
h:function(a){return this.b}}
R.d7.prototype={
h:function(a){var u=H.jx(this.b,"\n","\\n"),t=H.jx(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
R.d8.prototype={
ar:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.o)(c),++t){s=c[t]
this.c.n(0,s,b)}},
h:function(a){return this.b}}
R.hy.prototype={
j:function(a,b){var u=this.a.i(0,b)
if(u==null){u=new R.d0(this,b)
u.c=H.b([],[R.da])
this.a.n(0,b,u)}return u},
L:function(a){var u,t=this.b.i(0,a)
if(t==null){t=new R.d8(a)
u=P.q
t.c=new H.L([u,u])
this.b.n(0,a,t)}return t},
dd:function(a){var u,t,s,r,q,p,o,n,m=H.b([],[R.d7]),l=this.c,k=[P.x],j=H.b([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)m.push(t)
return m}r=C.b.ay(a,s)
q=l.fE(r)
if(q==null){if(t==null){j.push(r)
p=P.jf(j)
throw H.f(P.r("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}m.push(t)
s=t.c+1
j=H.b([],k)
l=this.c
t=null}else{if(!q.c)j.push(r)
l=q.b
if(l.d!=null){p=P.jf(j)
o=l.d
n=o.c.i(0,p)
t=new R.d7(n==null?o.b:n,p,s)}++s}}}}
R.da.prototype={
h:function(a){return this.b.b+": "+this.c5(0)}}
O.aF.prototype={
be:function(a){this.a=H.b([],[a])
this.c=this.b=null},
c2:function(a,b,c){this.b=b
this.c=a},
aW:function(a,b){return this.c2(a,null,b)},
eH:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
dB:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gP:function(a){var u=this.a
return new J.Z(u,u.length)},
B:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
m:function(a,b){var u,t,s=this,r=[H.jr(s,"aF",0)]
if(s.eH(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.dB(t,H.b([b],r))}},
$ii:1}
O.bJ.prototype={
gl:function(a){return this.a.length},
gq:function(){var u=this.b
return u==null?this.b=D.C():u},
aw:function(){var u=this.b
if(u!=null)u.C(null)},
gV:function(a){var u=this.a
if(u.length>0)return C.a.gb5(u)
else return V.cL()},
d6:function(a){var u=this.a
if(a==null)u.push(V.cL())
else u.push(a)
this.aw()},
bW:function(){var u=this.a
if(u.length>0){u.pop()
this.aw()}}}
E.eq.prototype={}
E.aJ.prototype={
sc3:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gq().S(0,s.gd2())
u=s.c
if(u!=null)u.gq().m(0,s.gd2())
t=new D.w("shape",r,s.c)
t.b=!0
s.aq(t)}},
saT:function(a){var u,t,s=this
if(!J.K(s.r,a)){u=s.r
if(u!=null)u.gq().S(0,s.gd0())
if(a!=null)a.gq().m(0,s.gd0())
s.r=a
t=new D.w("mover",u,a)
t.b=!0
s.aq(t)}},
ag:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aI(0,b,s):null
if(!J.K(q,s.x)){u=s.x
s.x=q
t=new D.w("matrix",u,q)
t.b=!0
s.aq(t)}for(r=s.y.a,r=new J.Z(r,r.length);r.u();)r.d.ag(0,b)},
aH:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)s.a.push(s.gV(s))
else s.a.push(r.t(0,s.gV(s)))
s.aw()
a.d7(t.f)
s=a.dy
u=(s&&C.a).gb5(s)
if(u!=null&&t.d!=null)u.h4(a,t)
for(s=t.y.a,s=new J.Z(s,s.length);s.u();)s.d.aH(a)
a.d5()
a.dx.bW()},
aq:function(a){var u=this.z
if(u!=null)u.C(a)},
a_:function(){return this.aq(null)},
d3:function(a){this.e=null
this.aq(a)},
fT:function(){return this.d3(null)},
d1:function(a){this.aq(a)},
fS:function(){return this.d1(null)},
d_:function(a){this.aq(a)},
fP:function(){return this.d_(null)},
fO:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcZ(),s=[{func:1,ret:-1,args:[D.P]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bd()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.a_()},
fR:function(a,b){var u,t
for(u=b.gP(b),t=this.gcZ();u.u();)u.gE(u).gq().S(0,t)
this.a_()},
h:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.fY.prototype={
dv:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.a2(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.bJ()
t=[V.aq]
u.a=H.b([],t)
u.gq().m(0,new E.fZ(s))
s.cy=u
u=new O.bJ()
u.a=H.b([],t)
u.gq().m(0,new E.h_(s))
s.db=u
u=new O.bJ()
u.a=H.b([],t)
u.gq().m(0,new E.h0(s))
s.dx=u
u=H.b([],[O.d3])
s.dy=u
u.push(null)
s.fr=new H.L([P.q,A.cX])},
gh1:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gV(s)
u=t.db
u=t.z=s.t(0,u.gV(u))
s=u}return s},
d7:function(a){var u=this.dy
u.push(a==null?(u&&C.a).gb5(u):a)},
d5:function(){var u=this.dy
if(u.length>1)u.pop()}}
E.fZ.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.h_.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.h0.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.d5.prototype={
ca:function(a){this.d8()},
c9:function(){return this.ca(null)},
gfG:function(){var u,t=this,s=Date.now(),r=C.d.Y(P.jH(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.a2(s,!1)
return u/r},
cp:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.t()
if(typeof r!=="number")return H.u(r)
u=C.c.bO(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.t()
t=C.c.bO(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.k4(C.i,s.gh5())}},
d8:function(){if(!this.cx){this.cx=!0
var u=window
C.v.dW(u)
C.v.eW(u,W.ki(new E.hw(this),P.a9))}},
h3:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.cp()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.a2(r,!1)
s.y=P.jH(r-s.r.a).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.aw()
r=s.db
C.a.sl(r.a,0)
r.aw()
r=s.dx
C.a.sl(r.a,0)
r.aw()
r=s.dy;(r&&C.a).sl(r,0)
s.dy.push(null)
o.aH(p.e)}s=p.Q
if(s!=null)s.C(null)}catch(q){u=H.ay(q)
t=H.js(q)
P.jw("Error: "+H.e(u))
P.jw("Stack: "+H.e(t))
throw H.f(u)}}}
E.hw.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.h3()}}}
Z.dj.prototype={}
Z.ck.prototype={
bB:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ay(s)
t=P.r('Failed to bind buffer attribute "'+r.a.h(0)+'": '+H.e(u))
throw H.f(t)}},
h:function(a){var u=this
return"["+u.a.h(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.i5.prototype={}
Z.cl.prototype={
aG:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bB:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].bB(a)},
hf:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aH:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.c(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
h:function(a){var u,t,s,r,q=[P.q],p=H.b([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)p.push(u[s].h(0))
r=H.b([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.Y(q[s]))
return"Buffer:  ["+this.a.h(0)+"]\nIndices: "+C.a.k(p,", ")+"\nAttrs:   "+C.a.k(r,", ")}}
Z.bf.prototype={
h:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.bQ(this.c))+"'")+"]"}}
Z.aw.prototype={
gc4:function(a){var u=this.a,t=(u&$.aC().a)!==0?3:0
if((u&$.aB().a)!==0)t+=3
if((u&$.aA().a)!==0)t+=3
if((u&$.b4().a)!==0)t+=2
if((u&$.aD().a)!==0)t+=3
if((u&$.cg().a)!==0)t+=3
if((u&$.ch().a)!==0)t+=4
if((u&$.bw().a)!==0)++t
return(u&$.az().a)!==0?t+4:t},
fe:function(a){var u,t=$.aC(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aB()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aA()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b4()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aD()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cg()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ch()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bw()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.az()
if((s&t.a)!==0)if(u===a)return t
return $.kG()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aw))return!1
return this.a===b.a},
h:function(a){var u=H.b([],[P.q]),t=this.a
if((t&$.aC().a)!==0)u.push("Pos")
if((t&$.aB().a)!==0)u.push("Norm")
if((t&$.aA().a)!==0)u.push("Binm")
if((t&$.b4().a)!==0)u.push("Txt2D")
if((t&$.aD().a)!==0)u.push("TxtCube")
if((t&$.cg().a)!==0)u.push("Clr3")
if((t&$.ch().a)!==0)u.push("Clr4")
if((t&$.bw().a)!==0)u.push("Weight")
if((t&$.az().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.a.k(u,"|")}}
D.et.prototype={}
D.bd.prototype={
m:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.P]}]):u).push(b)},
S:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.a.O(s,b)
if(s===!0){s=t.a
u=(s&&C.a).S(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.a.O(s,b)
if(s===!0){s=t.b
u=(s&&C.a).S(s,b)||u}return u},
C:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.a.J(P.jN(u,!0,{func:1,ret:-1,args:[D.P]}),new D.eO(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.P]}])
C.a.J(u,new D.eP(q))}return!0},
fB:function(){return this.C(null)},
as:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.C(u)}}}}
D.eO.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.eP.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.P.prototype={}
D.bg.prototype={}
D.bh.prototype={}
D.w.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cm.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cm))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.cC.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cC))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.f8.prototype={
fY:function(a){this.c=a.b
this.d.m(0,a.a)
return!1},
fU:function(a){this.c=a.b
this.d.S(0,a.a)
return!1}}
X.cH.prototype={}
X.fe.prototype={
aK:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.t()
u=b.b
t=q.ch
if(typeof u!=="number")return u.t()
s=new V.a4(o.a+n*m,o.b+u*t)
t=q.a.gaF()
r=new X.ar(a,V.aU(),q.x,t,s)
r.b=!0
q.z=new P.a2(p,!1)
q.x=s
return r},
bV:function(a,b){this.r=a.a
return!1},
aV:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.dh()
if(typeof u!=="number")return u.ah()
this.r=(u&~t)>>>0
return!1},
aU:function(a,b){var u=this.d
if(u==null)return!1
u.C(this.aK(a,b))
return!0},
fZ:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaF()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.t()
q=a.b
p=o.cy
if(typeof q!=="number")return q.t()
t=new X.bK(new V.A(s*r,q*p),u,t)
t.b=!0
n.C(t)
return!0},
ew:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.cH(c,r.a.gaF(),b)
s.b=!0
t.C(s)
r.y=new P.a2(u,!1)
r.x=V.aU()}}
X.a3.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.a3))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
h:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.ar.prototype={}
X.fD.prototype={
bl:function(a,b,c){var u=this,t=new P.a2(Date.now(),!1),s=u.a.gaF(),r=new X.ar(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
bV:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.C(this.bl(a,b,!0))
return!0},
aV:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.dh()
if(typeof t!=="number")return t.ah()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.C(u.bl(a,b,!0))
return!0},
aU:function(a,b){var u=this.d
if(u==null)return!1
u.C(this.bl(a,b,!1))
return!0},
h_:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaF()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.t()
r=a.b
q=p.ch
if(typeof r!=="number")return r.t()
u=new X.bK(new V.A(t*s,r*q),u,b)
u.b=!0
o.C(u)
return!0},
gcH:function(){var u=this.b
return u==null?this.b=D.C():u},
gbZ:function(){var u=this.c
return u==null?this.c=D.C():u},
gcY:function(){var u=this.d
return u==null?this.d=D.C():u}}
X.bK.prototype={}
X.fU.prototype={}
X.d9.prototype={}
X.hA.prototype={
aK:function(a,b){var u=this,t=new P.a2(Date.now(),!1),s=a.length>0?a[0]:V.aU(),r=u.a.gaF(),q=new X.d9(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
fX:function(a){var u=this.b
if(u==null)return!1
u.C(this.aK(a,!0))
return!0},
fV:function(a){var u=this.c
if(u==null)return!1
u.C(this.aK(a,!0))
return!0},
fW:function(a){var u=this.d
if(u==null)return!1
u.C(this.aK(a,!1))
return!0}}
X.de.prototype={
gaF:function(){var u=this.a,t=C.f.gcE(u).c
t.toString
u=C.f.gcE(u).d
u.toString
return V.jZ(0,0,t,u)},
cj:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.cC(u,new X.a3(t,a.altKey,a.shiftKey))},
aC:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.a3(t,a.altKey,a.shiftKey)},
bA:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.a3(t,a.altKey,a.shiftKey)},
an:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.H()
u=t.top
if(typeof r!=="number")return r.H()
return new V.a4(s-q,r-u)},
aL:function(a){return new V.A(a.movementX,a.movementY)},
bx:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.a4])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
q=C.c.a9(r.pageX)
C.c.a9(r.pageY)
p=o.left
C.c.a9(r.pageX)
n.push(new V.a4(q-p,C.c.a9(r.pageY)-o.top))}return n},
al:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cm(u,new X.a3(t,a.altKey,a.shiftKey))},
bo:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.H()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.H()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
ep:function(a){this.f=!0},
ed:function(a){this.f=!1},
ej:function(a){if(this.f&&this.bo(a))a.preventDefault()},
eu:function(a){var u
if(!this.f)return
u=this.cj(a)
this.b.fY(u)},
er:function(a){var u
if(!this.f)return
u=this.cj(a)
this.b.fU(u)},
ey:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aC(a)
if(r.x){u=r.al(a)
t=r.aL(a)
if(r.d.bV(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.al(a)
s=r.an(a)
if(r.c.bV(u,s))a.preventDefault()},
eC:function(a){var u,t,s,r=this
r.aC(a)
u=r.al(a)
if(r.x){t=r.aL(a)
if(r.d.aV(u,t))a.preventDefault()
return}if(r.r)return
s=r.an(a)
if(r.c.aV(u,s))a.preventDefault()},
en:function(a){var u,t,s,r=this
if(!r.bo(a)){r.aC(a)
u=r.al(a)
if(r.x){t=r.aL(a)
if(r.d.aV(u,t))a.preventDefault()
return}if(r.r)return
s=r.an(a)
if(r.c.aV(u,s))a.preventDefault()}},
eA:function(a){var u,t,s,r=this
r.aC(a)
u=r.al(a)
if(r.x){t=r.aL(a)
if(r.d.aU(u,t))a.preventDefault()
return}if(r.r)return
s=r.an(a)
if(r.c.aU(u,s))a.preventDefault()},
el:function(a){var u,t,s,r=this
if(!r.bo(a)){r.aC(a)
u=r.al(a)
if(r.x){t=r.aL(a)
if(r.d.aU(u,t))a.preventDefault()
return}if(r.r)return
s=r.an(a)
if(r.c.aU(u,s))a.preventDefault()}},
eE:function(a){var u,t,s=this
s.aC(a)
u=new V.A((a&&C.u).gfs(a),C.u.gft(a)).v(0,180)
if(s.x){if(s.d.fZ(u))a.preventDefault()
return}if(s.r)return
t=s.an(a)
if(s.c.h_(u,t))a.preventDefault()},
eG:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.al(s.y)
t=s.an(s.y)
s.d.ew(u,t,r)}},
eT:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bA(a)
u=t.bx(a)
if(t.e.fX(u))a.preventDefault()},
eP:function(a){var u
this.bA(a)
u=this.bx(a)
if(this.e.fV(u))a.preventDefault()},
eR:function(a){var u
this.bA(a)
u=this.bx(a)
if(this.e.fW(u))a.preventDefault()}}
D.bb.prototype={
aj:function(a){var u=this.r
if(u!=null)u.C(a)},
dE:function(){return this.aj(null)},
$ia_:1}
D.a_.prototype={}
D.cD.prototype={
aj:function(a){var u=this.x
if(u!=null)u.C(a)},
cn:function(a){var u=this.y
if(u!=null)u.C(a)},
ev:function(){return this.cn(null)},
eJ:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.o)(a),++t){s=a[t]
if(s==null||this.dR(s))return!1}return!0},
e7:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcm(),s=[{func:1,ret:-1,args:[D.P]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q instanceof D.bb)this.e.push(q)
p=q.r
if(p==null){p=new D.bd()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}u=new D.bg()
u.b=!0
this.aj(u)},
eN:function(a,b){var u,t,s
for(u=b.gP(b),t=this.gcm();u.u();){s=u.gE(u)
C.a.S(this.e,s)
s.gq().S(0,t)}u=new D.bh()
u.b=!0
this.aj(u)},
dR:function(a){var u=C.a.O(this.e,a)
return u},
$ai:function(){return[D.a_]},
$aaF:function(){return[D.a_]}}
D.fT.prototype={$ia_:1}
D.hg.prototype={$ia_:1}
V.O.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.O))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"}}
V.aG.prototype={
p:function(a,b){var u,t,s=this
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
h:function(a){var u=this
return"["+V.B(u.a,3,0)+", "+V.B(u.b,3,0)+", "+V.B(u.c,3,0)+", "+V.B(u.d,3,0)+"]"}}
V.eN.prototype={}
V.cK.prototype={
a8:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.J])
return t},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cK))return!1
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
h:function(a){var u,t,s,r,q=this,p=[P.J],o=V.bv(H.b([q.a,q.d,q.r],p),3,0),n=V.bv(H.b([q.b,q.e,q.x],p),3,0),m=V.bv(H.b([q.c,q.f,q.y],p),3,0)
p=o.length
if(0>=p)return H.c(o,0)
u="["+o[0]+", "
t=n.length
if(0>=t)return H.c(n,0)
u=u+n[0]+", "
s=m.length
if(0>=s)return H.c(m,0)
u=u+m[0]+",\n"
if(1>=p)return H.c(o,1)
r=" "+o[1]+", "
if(1>=t)return H.c(n,1)
r=r+n[1]+", "
if(1>=s)return H.c(m,1)
r=u+(r+m[1]+",\n")
if(2>=p)return H.c(o,2)
p=" "+o[2]+", "
if(2>=t)return H.c(n,2)
p=p+n[2]+", "
if(2>=s)return H.c(m,2)
return r+(p+m[2]+"]")}}
V.aq.prototype={
a8:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.J])
return t},
cW:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.y().a)return V.cL()
u=1/b1
t=-n
s=-a0
return V.ai((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
t:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.ai(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
b9:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.z(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
bY:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.ac(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aq))return!1
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
h:function(a){return this.K()},
w:function(a){var u,t,s,r,q,p=this,o=[P.J],n=V.bv(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.bv(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.bv(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.bv(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
o=n.length
if(0>=o)return H.c(n,0)
u="["+n[0]+", "
t=m.length
if(0>=t)return H.c(m,0)
u=u+m[0]+", "
s=l.length
if(0>=s)return H.c(l,0)
u=u+l[0]+", "
r=k.length
if(0>=r)return H.c(k,0)
u=u+k[0]+",\n"
q=a+" "
if(1>=o)return H.c(n,1)
q=q+n[1]+", "
if(1>=t)return H.c(m,1)
q=q+m[1]+", "
if(1>=s)return H.c(l,1)
q=q+l[1]+", "
if(1>=r)return H.c(k,1)
q=u+(q+k[1]+",\n")
u=a+" "
if(2>=o)return H.c(n,2)
u=u+n[2]+", "
if(2>=t)return H.c(m,2)
u=u+m[2]+", "
if(2>=s)return H.c(l,2)
u=u+l[2]+", "
if(2>=r)return H.c(k,2)
u=q+(u+k[2]+",\n")
q=a+" "
if(3>=o)return H.c(n,3)
q=q+n[3]+", "
if(3>=t)return H.c(m,3)
q=q+m[3]+", "
if(3>=s)return H.c(l,3)
q=q+l[3]+", "
if(3>=r)return H.c(k,3)
return u+(q+k[3]+"]")},
K:function(){return this.w("")}}
V.a4.prototype={
H:function(a,b){return new V.a4(this.a-b.a,this.b-b.b)},
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a4))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
h:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+"]"}}
V.ac.prototype={
H:function(a,b){return new V.ac(this.a-b.a,this.b-b.b,this.c-b.c)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ac))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"}}
V.cT.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cT))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.B(u.a,3,0)+", "+V.B(u.b,3,0)+", "+V.B(u.c,3,0)+", "+V.B(u.d,3,0)+"]"}}
V.cV.prototype={
ga1:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cV))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.B(u.a,3,0)+", "+V.B(u.b,3,0)+", "+V.B(u.c,3,0)+", "+V.B(u.d,3,0)+"]"}}
V.A.prototype={
bQ:function(a){return Math.sqrt(this.F(this))},
F:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.u(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.u(t)
return s*r+u*t},
t:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.t()
u=this.b
if(typeof u!=="number")return u.t()
return new V.A(t*b,u*b)},
v:function(a,b){var u,t
if(Math.abs(b-0)<$.y().a){u=$.k8
return u==null?$.k8=new V.A(0,0):u}u=this.a
if(typeof u!=="number")return u.v()
t=this.b
if(typeof t!=="number")return t.v()
return new V.A(u/b,t/b)},
p:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.A))return!1
u=b.a
t=this.a
s=$.y()
s.toString
if(typeof u!=="number")return u.H()
if(typeof t!=="number")return H.u(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.H()
if(typeof t!=="number")return H.u(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+"]"}}
V.z.prototype={
bQ:function(a){return Math.sqrt(this.F(this))},
F:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bR:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.z(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aQ:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.z(u*t-s*r,s*q-p*t,p*r-u*q)},
A:function(a,b){return new V.z(this.a+b.a,this.b+b.b,this.c+b.c)},
N:function(a){return new V.z(-this.a,-this.b,-this.c)},
v:function(a,b){if(Math.abs(b-0)<$.y().a)return V.di()
return new V.z(this.a/b,this.b/b,this.c/b)},
cX:function(){var u=$.y().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.z))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"}}
U.ev.prototype={
bg:function(a){var u=V.mB(a,this.c,this.b)
return u},
gq:function(){var u=this.y
return u==null?this.y=D.C():u},
M:function(a){var u=this.y
if(u!=null)u.C(a)},
sc_:function(a,b){},
sbS:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.y().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bg(u)}s=new D.w("maximumLocation",s,t.b)
s.b=!0
t.M(s)}},
sbU:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.y().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bg(u)}s=new D.w("minimumLocation",s,t.c)
s.b=!0
t.M(s)}},
sa0:function(a,b){var u,t=this
b=t.bg(b)
u=t.d
if(!(Math.abs(u-b)<$.y().a)){t.d=b
u=new D.w("location",u,b)
u.b=!0
t.M(u)}},
sbT:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.y().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.w("maximumVelocity",r,a)
r.b=!0
s.M(r)}},
sR:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.y().a)){u.f=a
t=new D.w("velocity",t,a)
t.b=!0
u.M(t)}},
sbH:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.y().a)){this.x=a
u=new D.w("dampening",u,a)
u.b=!0
this.M(u)}},
ag:function(a,b){var u,t,s,r=this,q=r.f,p=$.y().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa0(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.y().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sR(u)}}}
U.co.prototype={
gq:function(){var u=this.b
return u==null?this.b=D.C():u},
aI:function(a,b,c){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.co))return!1
return J.K(this.a,b.a)},
h:function(a){return"Constant: "+this.a.w("          ")}}
U.bC.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.C():u},
M:function(a){var u=this.e
if(u!=null)u.C(a)},
X:function(){return this.M(null)},
e5:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaB(),s=[{func:1,ret:-1,args:[D.P]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q!=null){p=q.gq()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bg()
u.b=!0
this.M(u)},
eL:function(a,b){var u,t
for(u=b.gP(b),t=this.gaB();u.u();)u.gE(u).gq().S(0,t)
u=new D.bh()
u.b=!0
this.M(u)},
aI:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.a2()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.Z(r,r.length),u=null;r.u();){q=r.d
if(q!=null){t=q.aI(0,b,c)
if(t!=null)u=u==null?t:t.t(0,u)}}s.f=u==null?V.cL():u
r=s.e
if(r!=null)r.as(0)}return s.f},
p:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bC))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.c(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.c(r,t)
if(!J.K(s,r[t]))return!1}return!0},
h:function(a){return"Group"},
$ai:function(){return[U.a0]},
$aaF:function(){return[U.a0]},
$ia0:1}
U.a0.prototype={}
U.df.prototype={
gq:function(){var u=this.cy
return u==null?this.cy=D.C():u},
M:function(a){var u=this.cy
if(u!=null)u.C(a)},
X:function(){return this.M(null)},
aN:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gcH().m(0,u.gbp())
u.a.c.gcY().m(0,u.gbr())
u.a.c.gbZ().m(0,u.gbt())
return!0},
bq:function(a){var u=this
if(!J.K(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bs:function(a){var u,t,s,r,q,p,o,n=this
H.k(a,"$iar")
if(!n.y)return
if(n.x){u=a.d.H(0,a.y)
u=new V.A(u.a,u.b)
u=u.F(u)
t=n.r
if(typeof t!=="number")return H.u(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.H(0,a.y)
u=new V.A(t.a,t.b).t(0,2).v(0,u.ga1())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.t()
s=n.e
if(typeof s!=="number")return H.u(s)
t.sR(u*10*s)}else{u=a.c
t=a.d
s=t.H(0,a.y)
r=new V.A(s.a,s.b).t(0,2).v(0,u.ga1())
s=n.b
q=r.a
if(typeof q!=="number")return q.N()
p=n.e
if(typeof p!=="number")return H.u(p)
o=n.z
if(typeof o!=="number")return H.u(o)
s.sa0(0,-q*p+o)
n.b.sR(0)
t=t.H(0,a.z)
n.Q=new V.A(t.a,t.b).t(0,2).v(0,u.ga1())}n.X()},
bu:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.F(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.t()
s=r.e
if(typeof s!=="number")return H.u(s)
u.sR(t*10*s)
r.X()}},
aI:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.a2()
if(q<p){r.ch=p
u=b.y
r.b.ag(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.ai(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$ia0:1}
U.dg.prototype={
gq:function(){var u=this.fx
return u==null?this.fx=D.C():u},
M:function(a){var u=this.fx
if(u!=null)u.C(a)},
X:function(){return this.M(null)},
aN:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gcH().m(0,s.gbp())
s.a.c.gcY().m(0,s.gbr())
s.a.c.gbZ().m(0,s.gbt())
u=s.a.d
t=u.f
u=t==null?u.f=D.C():t
u.m(0,s.gdY())
u=s.a.d
t=u.d
u=t==null?u.d=D.C():t
u.m(0,s.ge_())
u=s.a.e
t=u.b
u=t==null?u.b=D.C():t
u.m(0,s.gf9())
u=s.a.e
t=u.d
u=t==null?u.d=D.C():t
u.m(0,s.gf7())
u=s.a.e
t=u.c
u=t==null?u.c=D.C():t
u.m(0,s.gf5())
return!0},
ad:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.N()
u=-u}if(this.r){if(typeof t!=="number")return t.N()
t=-t}return new V.A(u,t)},
bq:function(a){var u=this
H.k(a,"$iar")
if(!J.K(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bs:function(a){var u,t,s,r,q,p,o,n=this
H.k(a,"$iar")
if(!n.cx)return
if(n.ch){u=a.d.H(0,a.y)
u=new V.A(u.a,u.b)
u=u.F(u)
t=n.Q
if(typeof t!=="number")return H.u(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.H(0,a.y)
u=n.ad(new V.A(t.a,t.b).t(0,2).v(0,u.ga1()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.N()
s=n.y
if(typeof s!=="number")return H.u(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.N()
t=n.x
if(typeof t!=="number")return H.u(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.H(0,a.y)
r=n.ad(new V.A(s.a,s.b).t(0,2).v(0,u.ga1()))
s=n.c
q=r.a
if(typeof q!=="number")return q.N()
p=n.y
if(typeof p!=="number")return H.u(p)
o=n.cy
if(typeof o!=="number")return H.u(o)
s.sa0(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.N()
q=n.x
if(typeof q!=="number")return H.u(q)
s=n.db
if(typeof s!=="number")return H.u(s)
o.sa0(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.H(0,a.z)
n.dx=n.ad(new V.A(t.a,t.b).t(0,2).v(0,u.ga1()))}n.X()},
bu:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.F(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.N()
s=r.y
if(typeof s!=="number")return H.u(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.N()
u=r.x
if(typeof u!=="number")return H.u(u)
s.sR(-t*10*u)
r.X()}},
dZ:function(a){var u=this
if(H.k(a,"$icH").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
e0:function(a){var u,t,s,r,q,p,o,n=this
H.k(a,"$iar")
if(!J.K(n.d,a.x.b))return
u=a.c
t=a.d
s=t.H(0,a.y)
r=n.ad(new V.A(s.a,s.b).t(0,2).v(0,u.ga1()))
s=n.c
q=r.a
if(typeof q!=="number")return q.N()
p=n.y
if(typeof p!=="number")return H.u(p)
o=n.cy
if(typeof o!=="number")return H.u(o)
s.sa0(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.N()
q=n.x
if(typeof q!=="number")return H.u(q)
s=n.db
if(typeof s!=="number")return H.u(s)
o.sa0(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.H(0,a.z)
n.dx=n.ad(new V.A(t.a,t.b).t(0,2).v(0,u.ga1()))
n.X()},
fa:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
f8:function(a){var u,t,s,r,q,p,o,n=this
H.k(a,"$id9")
if(!n.cx)return
if(n.ch){u=a.d.H(0,a.y)
u=new V.A(u.a,u.b)
u=u.F(u)
t=n.Q
if(typeof t!=="number")return H.u(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.H(0,a.y)
u=n.ad(new V.A(t.a,t.b).t(0,2).v(0,u.ga1()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.N()
s=n.y
if(typeof s!=="number")return H.u(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.N()
t=n.x
if(typeof t!=="number")return H.u(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.H(0,a.y)
r=n.ad(new V.A(s.a,s.b).t(0,2).v(0,u.ga1()))
s=n.c
q=r.a
if(typeof q!=="number")return q.N()
p=n.y
if(typeof p!=="number")return H.u(p)
o=n.cy
if(typeof o!=="number")return H.u(o)
s.sa0(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.N()
q=n.x
if(typeof q!=="number")return H.u(q)
s=n.db
if(typeof s!=="number")return H.u(s)
o.sa0(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.H(0,a.z)
n.dx=n.ad(new V.A(t.a,t.b).t(0,2).v(0,u.ga1()))}n.X()},
f6:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.F(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.N()
s=r.y
if(typeof s!=="number")return H.u(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.N()
u=r.x
if(typeof u!=="number")return H.u(u)
s.sR(-t*10*u)
r.X()}},
aI:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.a2()
if(q<p){r.dy=p
u=b.y
r.c.ag(0,u)
r.b.ag(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.ai(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.t(0,V.ai(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$ia0:1}
U.dh.prototype={
gq:function(){var u=this.r
return u==null?this.r=D.C():u},
M:function(a){var u=this.r
if(u!=null)u.C(a)},
aN:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.C():t
t=r.ge2()
u.m(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.C():s).m(0,t)
return!0},
e3:function(a){var u,t,s,r,q=this
if(!J.K(q.b,q.a.b.c))return
H.k(a,"$ibK")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.t()
r=u+t*s
if(u!==r){q.d=r
u=new D.w("zoom",u,r)
u.b=!0
q.M(u)}},
aI:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.ai(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$ia0:1}
M.ct.prototype={
ak:function(a){var u=this.y
if(u!=null)u.C(a)},
dF:function(){return this.ak(null)},
ef:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gac(),s=[{func:1,ret:-1,args:[D.P]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bd()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bg()
u.b=!0
this.ak(u)},
eh:function(a,b){var u,t
for(u=b.gP(b),t=this.gac();u.u();)u.gE(u).gq().S(0,t)
u=new D.bh()
u.b=!0
this.ak(u)},
sda:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gq().S(0,t.gac())
u=t.d
t.d=a
if(a!=null)a.gq().m(0,t.gac())
s=new D.w("technique",u,t.d)
s.b=!0
t.ak(s)}},
gq:function(){var u=this.y
return u==null?this.y=D.C():u},
aH:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
a.d7(f.d)
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
if(typeof s!=="number")return H.u(s)
o=C.c.a9(p*s)
p=q.b
if(typeof r!=="number")return H.u(r)
n=C.c.a9(p*r)
p=C.c.a9(q.c*s)
a.c=p
q=C.c.a9(q.d*r)
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
i=V.ai(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.d6(i)
t=$.jS
if(t==null){t=V.jU()
q=V.ji()
p=$.k9
t=V.jP(t,q,p==null?$.k9=new V.z(0,0,-1):p)
$.jS=t
h=t}else h=t
u=u.b
if(u!=null){g=u.a
if(g!=null)h=g.t(0,h)}a.db.d6(h)
u=f.d
if(u!=null)u.ag(0,a)
for(u=f.e.a,u=new J.Z(u,u.length);u.u();)u.d.ag(0,a)
for(u=f.e.a,u=new J.Z(u,u.length);u.u();)u.d.aH(a)
f.b.toString
a.cy.bW()
a.db.bW()
f.c.toString
a.d5()}}
A.ci.prototype={}
A.el.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
fC:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
fu:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.S.prototype={
gaa:function(a){var u=this.a?1:0,t=this.c?4:0
return u|0|t},
h:function(a){var u=this.a?1:0,t=this.c?4:0
return""+(u|0|t)},
p:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.S))return!1
if(this.a===b.a)u=this.c===b.c
else u=!1
return u}}
A.fk.prototype={
du:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
b8.z=c3
u=new P.at("")
t=c3.dy
if(t){u.a=c2
s=c2}else s=""
r=c3.fr
s=(r?u.a=s+"uniform mat4 viewObjMat;\n":s)+"uniform mat4 projViewObjMat;\n"
u.a=s
s+="\n"
u.a=s
s=u.a=s+"attribute vec3 posAttr;\n"
q=c3.k3
if(q){s+="attribute vec3 normAttr;\n"
u.a=s}p=c3.k4
u.a=(p?u.a=s+"attribute vec3 binmAttr;\n":s)+"\n"
A.lR(c3,u)
A.lT(c3,u)
A.lS(c3,u)
A.lV(c3,u)
A.lW(c3,u)
A.lU(c3,u)
A.lX(c3,u)
s=u.a+="vec4 getPos()\n"
s+="{\n"
u.a=s
o=c3.rx
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
u.a=s}if(c3.r1){s+="   txt2D = getTxt2D();\n"
u.a=s}if(c3.r2){s+="   txtCube = getTxtCube();\n"
u.a=s}if(c3.k1){s+="   objPos = getObjPos();\n"
u.a=s}s=(c3.k2?u.a=s+"   viewPos = getViewPos();\n":s)+"   gl_Position = getPos();\n"
u.a=s
s+="}\n"
u.a=s
s=u.a=s+"\n"
n=s.charCodeAt(0)==0?s:s
m=A.lQ(b8.z)
b8.c=n
b8.d=m
b8.e=b8.ck(n,35633)
b8.f=b8.ck(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!s.getProgramParameter(b8.r,35714)){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.t(P.r("Failed to link shader: "+H.e(l)))}b8.f1()
b8.f3()
b8.Q=b8.x.i(0,"posAttr")
b8.cx=b8.x.i(0,"normAttr")
b8.ch=b8.x.i(0,"binmAttr")
b8.cy=b8.x.i(0,"txt2DAttr")
b8.db=b8.x.i(0,"txtCubeAttr")
b8.dx=b8.x.i(0,"bendAttr")
if(c3.dx)b8.id=H.k(b8.y.D(0,"invViewMat"),"$ia6")
if(t)b8.dy=H.k(b8.y.D(0,"objMat"),"$ia6")
if(r)b8.fr=H.k(b8.y.D(0,"viewObjMat"),"$ia6")
b8.fy=H.k(b8.y.D(0,"projViewObjMat"),"$ia6")
if(c3.ry)b8.k1=H.k(b8.y.D(0,"txt2DMat"),"$ibW")
if(c3.x1)b8.k2=H.k(b8.y.D(0,"txtCubeMat"),"$ia6")
if(c3.x2)b8.k3=H.k(b8.y.D(0,"colorMat"),"$ia6")
b8.r1=H.b([],[A.a6])
t=c3.y2
if(t>0){b8.k4=b8.y.D(0,"bendMatCount")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.i(0,q)
if(j==null)H.t(P.r(c0+q+c1))
s.push(H.k(j,"$ia6"))}}t=c3.a
if(t.a)b8.r2=H.k(b8.y.D(0,"emissionClr"),"$iI")
if(t.c)b8.ry=H.k(b8.y.D(0,"emissionTxt"),"$iT")
t=c3.b
if(t.a)b8.x1=H.k(b8.y.D(0,"ambientClr"),"$iI")
if(t.c)b8.y1=H.k(b8.y.D(0,"ambientTxt"),"$iT")
t=c3.c
if(t.a)b8.y2=H.k(b8.y.D(0,"diffuseClr"),"$iI")
if(t.c)b8.b3=H.k(b8.y.D(0,"diffuseTxt"),"$iT")
t=c3.d
if(t.a)b8.cI=H.k(b8.y.D(0,"invDiffuseClr"),"$iI")
if(t.c)b8.cJ=H.k(b8.y.D(0,"invDiffuseTxt"),"$iT")
t=c3.e
s=t.a
if(!s)r=t.c
else r=!0
if(r){b8.cM=H.k(b8.y.D(0,"shininess"),"$iQ")
if(s)b8.cK=H.k(b8.y.D(0,"specularClr"),"$iI")
if(t.c)b8.cL=H.k(b8.y.D(0,"specularTxt"),"$iT")}if(c3.f.c)b8.cN=H.k(b8.y.D(0,"bumpTxt"),"$iT")
if(c3.cy){b8.cO=H.k(b8.y.D(0,"envSampler"),"$iT")
t=c3.r
if(t.a)b8.cP=H.k(b8.y.D(0,"reflectClr"),"$iI")
if(t.c)b8.cQ=H.k(b8.y.D(0,"reflectTxt"),"$iT")
t=c3.x
s=t.a
if(!s)r=t.c
else r=!0
if(r){b8.cR=H.k(b8.y.D(0,"refraction"),"$iQ")
if(s)b8.cS=H.k(b8.y.D(0,"refractClr"),"$iI")
if(t.c)b8.cT=H.k(b8.y.D(0,"refractTxt"),"$iT")}}t=c3.y
if(t.a)b8.cU=H.k(b8.y.D(0,"alpha"),"$iQ")
if(t.c)b8.cV=H.k(b8.y.D(0,"alphaTxt"),"$iT")
t=P.x
s=[t,A.dc]
b8.bI=new H.L(s)
b8.bJ=new H.L([t,[P.ag,A.bV]])
b8.bK=new H.L(s)
b8.bL=new H.L([t,[P.ag,A.bX]])
b8.bM=new H.L(s)
b8.bN=new H.L([t,[P.ag,A.bY]])
if(c3.id){for(t=c3.z,s=t.length,r=[A.bV],i=0;i<t.length;t.length===s||(0,H.o)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.e(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.ah()
p=(g&1)!==0
if(p){o=b8.y
d=f+"s["+k+"].objUp"
j=o.i(0,d)
if(j==null)H.t(P.r(c0+d+c1))
H.k(j,"$iI")
o=b8.y
d=f+"s["+k+"].objRight"
c=o.i(0,d)
if(c==null)H.t(P.r(c0+d+c1))
H.k(c,"$iI")
o=b8.y
d=f+"s["+k+"].objDir"
b=o.i(0,d)
if(b==null)H.t(P.r(c0+d+c1))
H.k(b,"$iI")
a=b
a0=c
a1=j}else{a=b9
a0=a
a1=a0}o=b8.y
d=f+"s["+k+"].viewDir"
j=o.i(0,d)
if(j==null)H.t(P.r(c0+d+c1))
H.k(j,"$iI")
o=b8.y
d=f+"s["+k+"].color"
c=o.i(0,d)
if(c==null)H.t(P.r(c0+d+c1))
H.k(c,"$iI")
if(p){p=b8.y
o=f+"sTexture2D"+k
b=p.i(0,o)
if(b==null)H.t(P.r(c0+o+c1))
H.k(b,"$ibp")
a2=b}else a2=b9
e.push(new A.bV(a1,a0,a,j,c,a2))}b8.bJ.n(0,g,e)
q=b8.bI
p=b8.y
o=f+"Count"
j=p.i(0,o)
if(j==null)H.t(P.r(c0+o+c1))
q.n(0,g,j)}for(t=c3.Q,s=t.length,r=[A.bX],i=0;i<t.length;t.length===s||(0,H.o)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.e(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.i(0,o)
if(j==null)H.t(P.r(c0+o+c1))
H.k(j,"$iI")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.i(0,o)
if(c==null)H.t(P.r(c0+o+c1))
H.k(c,"$iI")
p=b8.y
o=f+"s["+k+"].color"
b=p.i(0,o)
if(b==null)H.t(P.r(c0+o+c1))
H.k(b,"$iI")
if(typeof g!=="number")return g.ah()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
a3=p.i(0,o)
if(a3==null)H.t(P.r(c0+o+c1))
H.k(a3,"$ibW")
a4=a3}else a4=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
a3=p.i(0,o)
if(a3==null)H.t(P.r(c0+o+c1))
H.k(a3,"$iT")
a2=a3}else a2=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
a3=p.i(0,o)
if(a3==null)H.t(P.r(c0+o+c1))
H.k(a3,"$iT")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a5=p.i(0,o)
if(a5==null)H.t(P.r(c0+o+c1))
H.k(a5,"$ibU")
a6=a3
a7=a5}else{a6=b9
a7=a6}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
a3=p.i(0,o)
if(a3==null)H.t(P.r(c0+o+c1))
H.k(a3,"$iQ")
p=b8.y
o=f+"s["+k+"].att1"
a5=p.i(0,o)
if(a5==null)H.t(P.r(c0+o+c1))
H.k(a5,"$iQ")
p=b8.y
o=f+"s["+k+"].att2"
a8=p.i(0,o)
if(a8==null)H.t(P.r(c0+o+c1))
H.k(a8,"$iQ")
a9=a8
b0=a5
b1=a3}else{a9=b9
b0=a9
b1=b0}e.push(new A.bX(j,c,a4,b,a2,a6,a7,b1,b0,a9))}b8.bL.n(0,g,e)
q=b8.bK
p=b8.y
o=f+"Count"
j=p.i(0,o)
if(j==null)H.t(P.r(c0+o+c1))
q.n(0,g,j)}for(t=c3.ch,s=t.length,r=[A.bY],i=0;i<t.length;t.length===s||(0,H.o)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.e(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.i(0,o)
if(j==null)H.t(P.r(c0+o+c1))
H.k(j,"$iI")
p=b8.y
o=f+"s["+k+"].objDir"
c=p.i(0,o)
if(c==null)H.t(P.r(c0+o+c1))
H.k(c,"$iI")
p=b8.y
o=f+"s["+k+"].viewPnt"
b=p.i(0,o)
if(b==null)H.t(P.r(c0+o+c1))
H.k(b,"$iI")
p=b8.y
o=f+"s["+k+"].color"
a3=p.i(0,o)
if(a3==null)H.t(P.r(c0+o+c1))
H.k(a3,"$iI")
if(typeof g!=="number")return g.ah()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a5=p.i(0,o)
if(a5==null)H.t(P.r(c0+o+c1))
H.k(a5,"$iI")
p=b8.y
o=f+"s["+k+"].objRight"
a8=p.i(0,o)
if(a8==null)H.t(P.r(c0+o+c1))
H.k(a8,"$iI")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.i(0,o)
if(b2==null)H.t(P.r(c0+o+c1))
H.k(b2,"$iQ")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.i(0,o)
if(b3==null)H.t(P.r(c0+o+c1))
H.k(b3,"$iQ")
b4=b3
b5=b2
a0=a8
a1=a5}else{b4=b9
b5=b4
a0=b5
a1=a0}p=(g&2)!==0
if(p){o=b8.y
d=f+"s["+k+"].shadowAdj"
a5=o.i(0,d)
if(a5==null)H.t(P.r(c0+d+c1))
H.k(a5,"$ibU")
a7=a5}else a7=b9
if((g&8)!==0){o=b8.y
d=f+"s["+k+"].cutoff"
a5=o.i(0,d)
if(a5==null)H.t(P.r(c0+d+c1))
H.k(a5,"$iQ")
o=b8.y
d=f+"s["+k+"].coneAngle"
a8=o.i(0,d)
if(a8==null)H.t(P.r(c0+d+c1))
H.k(a8,"$iQ")
b6=a8
b7=a5}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
d=f+"s["+k+"].att0"
a5=o.i(0,d)
if(a5==null)H.t(P.r(c0+d+c1))
H.k(a5,"$iQ")
o=b8.y
d=f+"s["+k+"].att1"
a8=o.i(0,d)
if(a8==null)H.t(P.r(c0+d+c1))
H.k(a8,"$iQ")
o=b8.y
d=f+"s["+k+"].att2"
b2=o.i(0,d)
if(b2==null)H.t(P.r(c0+d+c1))
H.k(b2,"$iQ")
a9=b2
b0=a8
b1=a5}else{a9=b9
b0=a9
b1=b0}if((g&1)!==0){o=b8.y
d=f+"sTexture2D"+k
a5=o.i(0,d)
if(a5==null)H.t(P.r(c0+d+c1))
H.k(a5,"$ibp")
a2=a5}else a2=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a5=p.i(0,o)
if(a5==null)H.t(P.r(c0+o+c1))
H.k(a5,"$ibp")
a6=a5}else a6=b9
e.push(new A.bY(j,c,b,a3,a1,a0,b5,b4,a7,b7,b6,b1,b0,a9,a2,a6))}b8.bN.n(0,g,e)
q=b8.bM
p=b8.y
o=f+"Count"
j=p.i(0,o)
if(j==null)H.t(P.r(c0+o+c1))
q.n(0,g,j)}}},
a4:function(a,b){if(b!=null&&b.d>=6)a.dj(b)}}
A.cq.prototype={
h:function(a){return"dirLight"+H.e(this.a)}}
A.cU.prototype={
h:function(a){return"pointLight"+H.e(this.a)}}
A.cZ.prototype={
h:function(a){return"spotLight"+H.e(this.a)}}
A.fn.prototype={
h:function(a){return this.aR}}
A.bV.prototype={}
A.bX.prototype={}
A.bY.prototype={}
A.cX.prototype={
dz:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
ck:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.f(P.r("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
f1:function(){var u,t,s,r=this,q=H.b([],[A.ci]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.u(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.ci(p,t.name,s))}r.x=new A.el(q)},
f3:function(){var u,t,s,r=this,q=H.b([],[A.db]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.u(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.fq(t.type,t.size,t.name,s))}r.y=new A.hL(q)},
az:function(a,b,c){var u=this.a
if(a===1)return new A.dc(u,b,c)
else return A.jh(u,this.r,b,a,c)},
dT:function(a,b,c){var u=this.a
if(a===1)return new A.bp(u,b,c)
else return A.jh(u,this.r,b,a,c)},
dU:function(a,b,c){var u=this.a
if(a===1)return new A.T(u,b,c)
else return A.jh(u,this.r,b,a,c)},
b1:function(a,b){return new P.dt(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
fq:function(a,b,c,d){var u=this
switch(a){case 5120:return u.az(b,c,d)
case 5121:return u.az(b,c,d)
case 5122:return u.az(b,c,d)
case 5123:return u.az(b,c,d)
case 5124:return u.az(b,c,d)
case 5125:return u.az(b,c,d)
case 5126:return new A.Q(u.a,c,d)
case 35664:return new A.hH(u.a,c,d)
case 35665:return new A.I(u.a,c,d)
case 35666:return new A.bU(u.a,c,d)
case 35667:return new A.hI(u.a,c,d)
case 35668:return new A.hJ(u.a,c,d)
case 35669:return new A.hK(u.a,c,d)
case 35674:return new A.hM(u.a,c,d)
case 35675:return new A.bW(u.a,c,d)
case 35676:return new A.a6(u.a,c,d)
case 35678:return u.dT(b,c,d)
case 35680:return u.dU(b,c,d)
case 35670:throw H.f(u.b1("BOOL",c))
case 35671:throw H.f(u.b1("BOOL_VEC2",c))
case 35672:throw H.f(u.b1("BOOL_VEC3",c))
case 35673:throw H.f(u.b1("BOOL_VEC4",c))
default:throw H.f(P.r("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.db.prototype={}
A.hL.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
D:function(a,b){var u=this.i(0,b)
if(u==null)throw H.f(P.r("Required uniform value, "+b+", was not defined or used in shader."))
return u},
h:function(a){return this.K()},
K:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.o)(u),++r)s+=u[r].h(0)+"\n"
return s}}
A.dc.prototype={
h:function(a){return"Uniform1i: "+H.e(this.c)}}
A.hI.prototype={
h:function(a){return"Uniform2i: "+H.e(this.c)}}
A.hJ.prototype={
h:function(a){return"Uniform3i: "+H.e(this.c)}}
A.hK.prototype={
h:function(a){return"Uniform4i: "+H.e(this.c)}}
A.hG.prototype={
h:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.Q.prototype={
h:function(a){return"Uniform1f: "+H.e(this.c)}}
A.hH.prototype={
h:function(a){return"Uniform2f: "+H.e(this.c)}}
A.I.prototype={
h:function(a){return"Uniform3f: "+H.e(this.c)}}
A.bU.prototype={
h:function(a){return"Uniform4f: "+H.e(this.c)}}
A.hM.prototype={
h:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.bW.prototype={
ab:function(a){var u=new Float32Array(H.cb(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
h:function(a){return"UniformMat3: "+H.e(this.c)}}
A.a6.prototype={
ab:function(a){var u=new Float32Array(H.cb(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
h:function(a){return"UniformMat4: "+H.e(this.c)}}
A.bp.prototype={
h:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.T.prototype={
dj:function(a){var u=a.d,t=this.a,s=this.d
if(u<6)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
h:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.iG.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.bR(s.b,b).bR(s.d.bR(s.c,b),c)
s=new V.ac(r.a,r.b,r.c)
if(!J.K(a.f,s)){a.f=s
s=a.a
if(s!=null)s.a_()}a.sha(r.v(0,Math.sqrt(r.F(r))))
s=1-b
u=1-c
u=new V.cT(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.K(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.a_()}}}
F.be.prototype={
dN:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.di()
if(q!=null)s=s.A(0,q)
if(u!=null)s=s.A(0,u)
if(t!=null)s=s.A(0,t)
if(s.cX())return
return s.v(0,Math.sqrt(s.F(s)))},
dP:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.H(0,q)
r=new V.z(r.a,r.b,r.c)
s=r.v(0,Math.sqrt(r.F(r)))
r=t.H(0,q)
r=new V.z(r.a,r.b,r.c)
r=s.aQ(r.v(0,Math.sqrt(r.F(r))))
return r.v(0,Math.sqrt(r.F(r)))},
bE:function(){var u,t=this
if(t.d!=null)return!0
u=t.dN()
if(u==null){u=t.dP()
if(u==null)return!1}t.d=u
t.a.a.a_()
return!0},
dM:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.di()
if(q!=null)s=s.A(0,q)
if(u!=null)s=s.A(0,u)
if(t!=null)s=s.A(0,t)
if(s.cX())return
return s.v(0,Math.sqrt(s.F(s)))},
dO:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.y().a){l=d.H(0,g)
l=new V.z(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.F(l)))
if(s.a-t.a<0)q=q.N(0)}else{p=(l-u.b)/r
l=d.H(0,g)
l=new V.ac(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).H(0,j)
l=new V.z(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.F(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.N(0)}l=n.d
if(l!=null){o=l.v(0,Math.sqrt(l.F(l)))
l=o.aQ(q)
l=l.v(0,Math.sqrt(l.F(l))).aQ(o)
q=l.v(0,Math.sqrt(l.F(l)))}return q},
bC:function(){var u,t=this
if(t.e!=null)return!0
u=t.dM()
if(u==null){u=t.dO()
if(u==null)return!1}t.e=u
t.a.a.a_()
return!0},
p:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.K()},
w:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.b.a7(J.Y(s.e),0)+", "+C.b.a7(J.Y(t.b.e),0)+", "+C.b.a7(J.Y(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.h(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.h(0)+"}"):u+"-}"},
K:function(){return this.w("")}}
F.bG.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.K()},
w:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.b.a7(J.Y(u.e),0)+", "+C.b.a7(J.Y(this.b.e),0)},
K:function(){return this.w("")}}
F.bN.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.K()},
w:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.a7(J.Y(u.e),0)},
K:function(){return this.w("")}}
F.h6.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.C():u},
fM:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.U()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.o)(g),++s){r=g[s]
h.a.m(0,r.fo())}h.a.U()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.o)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.U()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
n=p[o]
h.b.a.a.m(0,n)
o=new F.bN()
if(n.a==null)H.t(P.r("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.C(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.o)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.U()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.U()
p=p.e
if(typeof p!=="number")return p.A()
p+=u
o=o.c
if(p>=o.length)return H.c(o,p)
k=o[p]
p=h.c.a
p.a.m(0,l)
p.a.m(0,k)
p=new F.bG()
o=l.a
if(o==null)H.t(P.r("May not create a line with a start vertex which is not attached to a shape."))
if(o!=k.a)H.t(P.r("May not create a line with vertices attached to different shapes."))
p.a=l
l.c.b.push(p)
p.b=k
k.c.c.push(p)
p.a.a.c.b.push(p)
p=p.a.a.e
if(p!=null)p.C(null)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.o)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.U()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.U()
p=p.e
if(typeof p!=="number")return p.A()
p+=u
o=o.c
if(p>=o.length)return H.c(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.U()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
i=p[o]
o=h.d.a
o.a.m(0,l)
o.a.m(0,k)
o.a.m(0,i)
F.cu(l,k,i)}g=h.e
if(g!=null)g.as(0)},
aE:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aE()||!1
if(!t.a.aE())u=!1
s=t.e
if(s!=null)s.as(0)
return u},
fk:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.aC()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.aB().a)!==0)++s
if((t&$.aA().a)!==0)++s
if((t&$.b4().a)!==0)++s
if((t&$.aD().a)!==0)++s
if((t&$.cg().a)!==0)++s
if((t&$.ch().a)!==0)++s
if((t&$.bw().a)!==0)++s
if((t&$.az().a)!==0)++s
r=a4.gc4(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.J])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.ck])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.fe(m)
k=l.gc4(l)
if(m>=t)return H.c(o,m)
o[m]=new Z.ck(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.c(i,j)
h=i[j].fL(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.c(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.cb(p)),35044)
u.bindBuffer(a1,null)
c=new Z.cl(new Z.dj(a1,d),o,a4)
c.b=H.b([],[Z.bf])
if(a0.b.b.length!==0){b=H.b([],[P.x])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.U()
b.push(t.e)}a=Z.jj(u,34963,b)
c.b.push(new Z.bf(0,b.length,a))}if(a0.c.b.length!==0){b=H.b([],[P.x])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.U()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.c(t,m)
t=t[m].b
t.a.a.U()
b.push(t.e)}a=Z.jj(u,34963,b)
c.b.push(new Z.bf(1,b.length,a))}if(a0.d.b.length!==0){b=H.b([],[P.x])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.U()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.c(t,m)
t=t[m].b
t.a.a.U()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.c(t,m)
t=t[m].c
t.a.a.U()
b.push(t.e)}a=Z.jj(u,34963,b)
c.b.push(new Z.bf(4,b.length,a))}return c},
h:function(a){var u=this,t="   ",s=H.b([],[P.q])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.w(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.w(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.w(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.w(t))}return C.a.k(s,"\n")},
a_:function(){var u=this.e
if(u!=null)u.C(null)}}
F.h7.prototype={
fc:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.be])
for(u=this.a,t=b,s=0,r=!1,q=1;q<a;++q,++s,++t){for(p=r,o=1;o<b;++o,t=k){n=c.length
if(s<0||s>=n)return H.c(c,s)
m=c[s];++s
if(s>=n)return H.c(c,s)
l=c[s]
k=t+1
if(k<0||k>=n)return H.c(c,k)
j=c[k]
if(t<0||t>=n)return H.c(c,t)
i=c[t]
n=u.a
if(p){n.m(0,m)
u.a.m(0,l)
u.a.m(0,j)
h.push(F.cu(m,l,j))
u.a.m(0,m)
u.a.m(0,j)
u.a.m(0,i)
h.push(F.cu(m,j,i))}else{n.m(0,l)
u.a.m(0,j)
u.a.m(0,i)
h.push(F.cu(l,j,i))
u.a.m(0,l)
u.a.m(0,i)
u.a.m(0,m)
h.push(F.cu(l,i,m))}p=!p}r=!r}return h},
gl:function(a){return this.b.length},
aE:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.o)(u),++r)if(!u[r].bE())s=!1
return s},
bD:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.o)(u),++r)if(!u[r].bC())s=!1
return s},
h:function(a){return this.K()},
w:function(a){var u,t,s,r=H.b([],[P.q])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].w(a))
return C.a.k(r,"\n")},
K:function(){return this.w("")}}
F.h8.prototype={
gl:function(a){return this.b.length},
h:function(a){return this.K()},
w:function(a){var u,t,s=H.b([],[P.q]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.c(t,u)
s.push(t[u].w(a+(""+u+". ")))}return C.a.k(s,"\n")},
K:function(){return this.w("")}}
F.h9.prototype={
gl:function(a){return this.b.length},
h:function(a){return this.K()},
w:function(a){var u,t,s,r=H.b([],[P.q])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].w(a))
return C.a.k(r,"\n")},
K:function(){return this.w("")}}
F.bZ.prototype={
bG:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.kb(u.cx,r,o,t,s,q,p,a,n)},
fo:function(){return this.bG(null)},
sha:function(a){var u
if(!J.K(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a_()}},
fL:function(a){var u,t,s=this
if(a.p(0,$.aC())){u=s.f
t=[P.J]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.aB())){u=s.r
t=[P.J]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.aA())){u=s.x
t=[P.J]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.b4())){u=s.y
t=[P.J]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.p(0,$.aD())){u=s.z
t=[P.J]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.cg())){u=s.Q
t=[P.J]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.ch())){u=s.Q
t=[P.J]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.p(0,$.bw()))return H.b([s.ch],[P.J])
else if(a.p(0,$.az())){u=s.cx
t=[P.J]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.J])},
bE:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.di()
t.d.J(0,new F.i3(s))
s=s.a
t.r=s.v(0,Math.sqrt(s.F(s)))
s=t.a
if(s!=null){s.a_()
s=t.a.e
if(s!=null)s.as(0)}return!0},
bC:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.di()
t.d.J(0,new F.i2(s))
s=s.a
t.x=s.v(0,Math.sqrt(s.F(s)))
s=t.a
if(s!=null){s.a_()
s=t.a.e
if(s!=null)s.as(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.K()},
w:function(a){var u,t,s=this,r="-",q=H.b([],[P.q])
q.push(C.b.a7(J.Y(s.e),0))
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
q.push(V.B(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.h(0))
else q.push(r)
t=C.a.k(q,", ")
return a+"{"+t+"}"},
K:function(){return this.w("")}}
F.i3.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.A(0,t)}}}
F.i2.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.A(0,t)}}}
F.hX.prototype={
U:function(){},
m:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.f(P.r("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.a_()
return!0},
cw:function(a,b){var u=null,t=F.kb(u,u,a,u,u,b,u,u,0)
this.m(0,t)
return t},
gl:function(a){return this.c.length},
aE:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)u[s].bE()
return!0},
bD:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)u[s].bC()
return!0},
fl:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.v(0,Math.sqrt(p*p+o*o+n*n))
if(!J.K(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.C(null)}}}}return!0},
h:function(a){return this.K()},
w:function(a){var u,t,s,r
this.U()
u=H.b([],[P.q])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.o)(t),++r)u.push(t[r].w(a))
return C.a.k(u,"\n")},
K:function(){return this.w("")}}
F.hY.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
J:function(a,b){var u=this
C.a.J(u.b,b)
C.a.J(u.c,new F.hZ(u,b))
C.a.J(u.d,new F.i_(u,b))},
h:function(a){return this.K()},
K:function(){var u,t,s,r=H.b([],[P.q])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].w(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].w(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].w(""))
return C.a.k(r,"\n")}}
F.hZ.prototype={
$1:function(a){if(!J.K(a.a,this.a))this.b.$1(a)}}
F.i_.prototype={
$1:function(a){var u=this.a
if(!J.K(a.a,u)&&!J.K(a.b,u))this.b.$1(a)}}
F.i0.prototype={
gl:function(a){return this.b.length+this.c.length},
h:function(a){return this.K()},
K:function(){var u,t,s,r=H.b([],[P.q])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].w(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].w(""))
return C.a.k(r,"\n")}}
F.i1.prototype={
gl:function(a){return this.b.length},
h:function(a){return this.K()},
K:function(){var u,t,s,r=H.b([],[P.q])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].w(""))
return C.a.k(r,"\n")}}
O.cJ.prototype={
gq:function(){var u=this.fr
return u==null?this.fr=D.C():u},
T:function(a){var u=this.fr
if(u!=null)u.C(a)},
bf:function(){return this.T(null)},
co:function(a){this.a=null
this.T(a)},
eY:function(){return this.co(null)},
e9:function(a,b){var u=new D.bg()
u.b=!0
this.T(u)},
eb:function(a,b){var u=new D.bh()
u.b=!0
this.T(u)},
cg:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.x,h=new H.L([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=h.i(0,0)
h.n(0,0,r==null?1:r)}q=H.b([],[A.cq])
h.J(0,new O.fr(j,q))
C.a.bb(q,new O.fs())
p=new H.L([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){o=u[s]
r=o.gaP()
n=p.i(0,o.gaP())
p.n(0,r,n==null?1:n)}m=H.b([],[A.cU])
p.J(0,new O.ft(j,m))
C.a.bb(m,new O.fu())
l=new H.L([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.o)(i),++s){o=i[s]
t=o.gaP()
r=l.i(0,o.gaP())
l.n(0,t,r==null?1:r)}k=H.b([],[A.cZ])
l.J(0,new O.fv(j,k))
C.a.bb(k,new O.fw())
i=C.d.Y(j.e.a.length+3,4)
j.dy.e
return A.l6(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
a3:function(a,b){if(b!=null)if(!C.a.O(a,b)){b.a=a.length
a.push(b)}},
ag:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.Z(u,u.length);u.u();){t=u.d
t.toString
s=$.hW
if(s==null)s=$.hW=new V.z(0,0,1)
t.a=s
r=$.hV
t.d=r==null?$.hV=new V.z(0,1,0):r
r=$.hU
t.e=r==null?$.hU=new V.z(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.b9(s)
r=s.a
p=s.b
o=s.c
t.a=s.v(0,Math.sqrt(r*r+p*p+o*o))
o=q.b9(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.v(0,Math.sqrt(p*p+r*r+s*s))
s=q.b9(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.v(0,Math.sqrt(r*r+p*p+o*o))}}}},
h4:function(b3,b4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.a
if(b2==null){b2=b1.cg()
u=b3.fr.i(0,b2.aR)
if(u==null){u=A.l5(b2,b3.a)
t=u.b
if(t.length===0)H.t(P.r("May not cache a shader with no name."))
if(b3.fr.cF(0,t))H.t(P.r('Shader cache already contains a shader by the name "'+t+'".'))
b3.fr.n(0,t,u)}b2=b1.a=u
b4.e=null}s=b2.z
r=s.b3
b2=b4.e
if(!(b2 instanceof Z.cl))b2=b4.e=null
if(b2==null||!b2.d.p(0,r)){b2=s.k3
if(b2)b4.d.aE()
q=s.k4
if(q){p=b4.d
o=p.e
if(o!=null)++o.d
p.d.bD()
p.a.bD()
p=p.e
if(p!=null)p.as(0)}p=s.r2
if(p){o=b4.d
n=o.e
if(n!=null)++n.d
o.a.fl()
o=o.e
if(o!=null)o.as(0)}m=b4.d.fk(new Z.i5(b3.a),r)
m.aG($.aC()).e=b1.a.Q.c
if(b2)m.aG($.aB()).e=b1.a.cx.c
if(q)m.aG($.aA()).e=b1.a.ch.c
if(s.r1)m.aG($.b4()).e=b1.a.cy.c
if(p)m.aG($.aD()).e=b1.a.db.c
if(s.rx)m.aG($.az()).e=b1.a.dx.c
b4.e=m}l=H.b([],[T.d4])
b2=b1.a
q=b3.a
q.useProgram(b2.r)
b2.x.fC()
if(s.dy){b2=b1.a
p=b3.dx
p=p.gV(p)
b2=b2.dy
b2.toString
b2.ab(p.a8(0,!0))}if(s.fr){b2=b1.a
p=b3.cx
if(p==null){p=b3.db
p=p.gV(p)
o=b3.dx
o=b3.cx=p.t(0,o.gV(o))
p=o}b2=b2.fr
b2.toString
b2.ab(p.a8(0,!0))}b2=b1.a
p=b3.ch
if(p==null){p=b3.gh1()
o=b3.dx
o=b3.ch=p.t(0,o.gV(o))
p=o}b2=b2.fy
b2.toString
b2.ab(p.a8(0,!0))
if(s.ry){b2=b1.a
p=b1.b
b2=b2.k1
b2.toString
b2.ab(C.j.a8(p,!0))}if(s.x1){b2=b1.a
p=b1.c
b2=b2.k2
b2.toString
b2.ab(C.j.a8(p,!0))}if(s.x2){b2=b1.a
p=b1.d
b2=b2.k3
b2.toString
b2.ab(C.j.a8(p,!0))}if(s.y2>0){k=b1.e.a.length
b2=b1.a.k4
b2.a.uniform1i(b2.d,k)
for(j=0;j<k;++j){b2=b1.a
p=b1.e.a
if(j>=p.length)return H.c(p,j)
p=p[j]
b2=b2.r1
if(j>=b2.length)return H.c(b2,j)
b2=b2[j]
i=new Float32Array(H.cb(p.a8(0,!0)))
b2.a.uniformMatrix4fv(b2.d,!1,i)}}b2=s.a
if(b2.a){p=b1.a
o=b1.f.f
p=p.r2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b2.c){b1.a3(l,b1.f.e)
b2=b1.a
p=b1.f.e
b2.a4(b2.ry,p)}if(s.id){b2=s.b
if(b2.a){p=b1.a
o=b1.r.f
p=p.x1
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b2.c){b1.a3(l,b1.r.e)
b2=b1.a
p=b1.r.e
b2.a4(b2.y1,p)}b2=s.c
if(b2.a){p=b1.a
o=b1.x.f
p=p.y2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b2.c){b1.a3(l,b1.x.e)
b2=b1.a
p=b1.x.e
b2.a4(b2.b3,p)}b2=s.d
if(b2.a){p=b1.a
o=b1.y.f
p=p.cI
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b2.c){b1.a3(l,b1.y.e)
b2=b1.a
p=b1.y.e
b2.a4(b2.cJ,p)}b2=s.e
p=b2.a
if(!p)o=b2.c
else o=!0
if(o){o=b1.a
n=b1.z.ch
o=o.cM
o.a.uniform1f(o.d,n)}if(p){p=b1.a
o=b1.z.f
p=p.cK
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b2.c){b1.a3(l,b1.z.e)
b2=b1.a
p=b1.z.e
b2.a4(b2.cL,p)}b2=s.z
if(b2.length>0){p=b3.db
h=p.gV(p)
p=P.x
g=new H.L([p,p])
for(p=b1.dx.e,o=p.length,f=0;f<p.length;p.length===o||(0,H.o)(p),++f){e=p[f]
d=g.i(0,0)
if(d==null)d=0
g.n(0,0,d+1)
c=J.eh(b1.a.bJ.i(0,0),d)
n=h.b9(e.a)
b=n.a
a=n.b
a0=n.c
a0=n.v(0,Math.sqrt(b*b+a*a+a0*a0))
a=c.e
b=a0.a
n=a0.b
a0=a0.c
a.a.uniform3f(a.d,b,n,a0)
a0=e.c
n=c.f
n.a.uniform3f(n.d,a0.a,a0.b,a0.c)}for(p=b2.length,f=0;f<b2.length;b2.length===p||(0,H.o)(b2),++f){o=b2[f].a
k=g.i(0,o)
if(k==null)k=0
o=b1.a.bI.i(0,o)
o.a.uniform1i(o.d,k)}}b2=s.Q
if(b2.length>0){p=b3.db
h=p.gV(p)
p=P.x
a1=new H.L([p,p])
for(p=b1.dx.f,o=p.length,f=0;f<p.length;p.length===o||(0,H.o)(p),++f){e=p[f]
a2=e.gaP()
d=a1.i(0,a2)
if(d==null)d=0
a1.n(0,a2,d+1)
c=J.eh(b1.a.bL.i(0,a2),d)
a3=h.t(0,e.gV(e))
n=e.gV(e)
b=$.bO
n=n.bY(b==null?$.bO=new V.ac(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=$.bO
n=a3.bY(n==null?$.bO=new V.ac(0,0,0):n)
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=e.gaO(e)
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
e.gat()
n=a3.cW(0)
b=n.a
a=n.b
a0=n.c
a4=n.e
a5=n.f
a6=n.r
a7=n.y
a8=n.z
n=n.Q
a9=c.d
a9.toString
i=new Float32Array(H.cb(new V.cK(b,a,a0,a4,a5,a6,a7,a8,n).a8(0,!0)))
a9.a.uniformMatrix3fv(a9.d,!1,i)
e.gat()
n=e.gat()
if(!C.a.O(l,n)){n.a=l.length
l.push(n)}n=e.gat()
b=n.gaS(n)
if(b){b=c.f
b.toString
a=n.d
if(a<6)b.a.uniform1i(b.d,0)
else{n=n.a
b.a.uniform1i(b.d,n)}}e.gaJ()
n=e.gdk()
b=c.x
b.toString
a=n.gfw(n)
a0=n.gfz(n)
a4=n.gfA()
n=n.gfv()
b.a.uniform4f(b.d,a,a0,a4,n)
n=e.gaJ()
if(!C.a.O(l,n)){n.a=l.length
l.push(n)}n=e.gaJ()
b=n.gaS(n)
if(b){b=c.r
b.toString
a=n.d
if(a<6)b.a.uniform1i(b.d,0)
else{n=n.a
b.a.uniform1i(b.d,n)}}if(e.gfD()){n=e.gff()
b=c.y
b.a.uniform1f(b.d,n)
n=e.gfg()
b=c.z
b.a.uniform1f(b.d,n)
n=e.gfh()
b=c.Q
b.a.uniform1f(b.d,n)}}for(p=b2.length,f=0;f<b2.length;b2.length===p||(0,H.o)(b2),++f){o=b2[f].a
k=a1.i(0,o)
if(k==null)k=0
o=b1.a.bK.i(0,o)
o.a.uniform1i(o.d,k)}}b2=s.ch
if(b2.length>0){p=b3.db
h=p.gV(p)
p=P.x
b0=new H.L([p,p])
for(p=b1.dx.r,o=p.length,f=0;f<p.length;p.length===o||(0,H.o)(p),++f){e=p[f]
a2=e.gaP()
d=b0.i(0,a2)
if(d==null)d=0
b0.n(0,a2,d+1)
c=J.eh(b1.a.bN.i(0,a2),d)
n=e.gh0(e)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=e.ghj(e).hu()
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=h.bY(e.gh0(e))
b=c.d
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=e.gaO(e)
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
e.gat()
n=e.gbZ()
b=c.f
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=e.gbX(e)
b=c.r
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=e.ghv()
b=c.x
b.a.uniform1f(b.d,n)
n=e.ghw()
b=c.y
b.a.uniform1f(b.d,n)
e.gat()
n=e.gat()
if(!C.a.O(l,n)){n.a=l.length
l.push(n)}n=e.gat()
b=n.gaS(n)
if(b){b=c.dx
b.toString
a=n.gaS(n)
if(!a)b.a.uniform1i(b.d,0)
else{n=n.gfH(n)
b.a.uniform1i(b.d,n)}}e.gaJ()
n=e.gdk()
b=c.z
b.toString
a=n.gfw(n)
a0=n.gfz(n)
a4=n.gfA()
n=n.gfv()
b.a.uniform4f(b.d,a,a0,a4,n)
n=e.gaJ()
if(!C.a.O(l,n)){n.a=l.length
l.push(n)}n=e.gaJ()
b=n.gaS(n)
if(b){b=c.dy
b.toString
a=n.gaS(n)
if(!a)b.a.uniform1i(b.d,0)
else{n=n.gfH(n)
b.a.uniform1i(b.d,n)}}if(e.ghk()){n=e.ghi()
b=c.Q
b.a.uniform1f(b.d,n)
n=e.ghh()
b=c.ch
b.a.uniform1f(b.d,n)}if(e.gfD()){n=e.gff()
b=c.cx
b.a.uniform1f(b.d,n)
n=e.gfg()
b=c.cy
b.a.uniform1f(b.d,n)
n=e.gfh()
b=c.db
b.a.uniform1f(b.d,n)}}for(p=b2.length,f=0;f<b2.length;b2.length===p||(0,H.o)(b2),++f){o=b2[f].a
k=b0.i(0,o)
if(k==null)k=0
o=b1.a.bM.i(0,o)
o.a.uniform1i(o.d,k)}}}if(s.f.c){b1.a3(l,b1.Q.e)
b2=b1.a
p=b1.Q.e
b2.a4(b2.cN,p)}if(s.dx){b2=b1.a
p=b3.Q
if(p==null){p=b3.db
p=b3.Q=p.gV(p).cW(0)}b2=b2.id
b2.toString
b2.ab(p.a8(0,!0))}if(s.cy){b1.a3(l,b1.ch)
b2=b1.a
p=b1.ch
b2.a4(b2.cO,p)
b2=s.r
if(b2.a){p=b1.a
o=b1.cx.f
p=p.cP
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b2.c){b1.a3(l,b1.cx.e)
b2=b1.a
p=b1.cx.e
b2.a4(b2.cQ,p)}b2=s.x
p=b2.a
if(!p)o=b2.c
else o=!0
if(o){o=b1.a
n=b1.cy.ch
o=o.cR
o.a.uniform1f(o.d,n)}if(p){p=b1.a
o=b1.cy.f
p=p.cS
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b2.c){b1.a3(l,b1.cy.e)
b2=b1.a
p=b1.cy.e
b2.a4(b2.cT,p)}}b2=s.y
p=b2.a
o=!p
if(o)n=b2.c
else n=!0
if(n){if(p){p=b1.a
n=b1.db.f
p=p.cU
p.a.uniform1f(p.d,n)}if(b2.c){b1.a3(l,b1.db.e)
p=b1.a
n=b1.db.e
p.a4(p.cV,n)}q.enable(3042)
q.blendFunc(770,771)}for(j=0;j<l.length;++j){p=l[j]
if(!p.c&&p.d>=6){p.c=!0
q.activeTexture(33984+p.a)
q.bindTexture(34067,p.b)}}p=b4.e
p.bB(b3)
p.aH(b3)
p.hf(b3)
if(o)b2=b2.c
else b2=!0
if(b2)q.disable(3042)
for(j=0;j<l.length;++j){b2=l[j]
if(b2.c){b2.c=!1
q.activeTexture(33984+b2.a)
q.bindTexture(34067,null)}}b2=b1.a
b2.toString
q.useProgram(null)
b2.x.fu()},
h:function(a){var u=this.a
if(u!=null)return u.b
else return this.cg().aR}}
O.fr.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.cq(a,C.d.Y(b+3,4)*4))}}
O.fs.prototype={
$2:function(a,b){return J.iZ(a.a,b.a)}}
O.ft.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.cU(a,C.d.Y(b+3,4)*4))}}
O.fu.prototype={
$2:function(a,b){return J.iZ(a.a,b.a)}}
O.fv.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.cZ(a,C.d.Y(b+3,4)*4))}}
O.fw.prototype={
$2:function(a,b){return J.iZ(a.a,b.a)}}
O.fl.prototype={
am:function(){var u,t=this
t.c6()
u=t.f
if(!(Math.abs(u-1)<$.y().a)){t.f=1
u=new D.w(t.b,u,1)
u.b=!0
t.a.T(u)}}}
O.bI.prototype={
T:function(a){return this.a.T(a)},
bf:function(){return this.T(null)},
am:function(){},
by:function(a){var u,t,s=this
if(!s.c.p(0,a)){u=s.c
if(!u.a)u=u.c
else u=!0
if(u){if(!a.a)u=a.c
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.am()
u=s.a
u.a=null
u.T(null)}}}
O.fm.prototype={}
O.ah.prototype={
cq:function(a){var u,t,s=this
if(!s.f.p(0,a)){u=s.f
s.f=a
t=new D.w(s.b+".color",u,a)
t.b=!0
s.a.T(t)}},
am:function(){this.c6()
this.cq(new V.O(1,1,1))},
saO:function(a,b){this.by(new A.S(!0,!1,this.c.c))
this.cq(b)}}
O.fo.prototype={}
O.fp.prototype={
am:function(){var u,t=this
t.c7()
u=t.ch
if(!(Math.abs(u-1)<$.y().a)){t.ch=1
u=new D.w(t.b+".refraction",u,1)
u.b=!0
t.a.T(u)}}}
O.fq.prototype={
cr:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.y().a)){u.ch=a
t=new D.w(u.b+".shininess",t,a)
t.b=!0
u.a.T(t)}},
am:function(){this.c7()
this.cr(100)}}
O.d3.prototype={}
T.d4.prototype={}
T.ht.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.C():u}}
T.hu.prototype={
aA:function(a,b,c,d,e,f){var u=document.createElement("img")
u.src=c;++this.d
W.R(u,"load",new T.hv(this,u,!1,b,!1,d,a),!1)},
eZ:function(a,b,c){var u,t,s,r
b=V.jv(b)
u=V.jv(a.width)
t=V.jv(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.j2()
s.width=u
s.height=t
r=C.f.df(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.ma(r.getImageData(0,0,s.width,s.height))}}}
T.hv.prototype={
$1:function(a){var u=this,t=u.a,s=t.eZ(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.N.h9(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.fB()}++t.e}}
X.j1.prototype={}
X.eX.prototype={
gq:function(){var u=this.x
return u==null?this.x=D.C():u}}
X.cS.prototype={
gq:function(){var u=this.f
return u==null?this.f=D.C():u},
ax:function(a){var u=this.f
if(u!=null)u.C(a)},
dJ:function(){return this.ax(null)},
saT:function(a){var u,t,s=this
if(!J.K(s.b,a)){u=s.b
if(u!=null)u.gq().S(0,s.gcb())
t=s.b
s.b=a
if(a!=null)a.gq().m(0,s.gcb())
u=new D.w("mover",t,s.b)
u.b=!0
s.ax(u)}}}
X.hp.prototype={}
V.cn.prototype={
aY:function(a){this.b=new P.f1(C.G)
this.c=null
this.d=H.b([],[[P.ag,W.ab]])},
I:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)l.push(H.b([],[W.ab]))
u=a.split("\n")
for(l=u.length,t=[W.ab],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else m.d.push(H.b([],t))
p=document.createElement("div")
p.className="codePart"
o=m.b.dS(q,0,q.length)
n=o==null?q:o
C.E.di(p,H.jx(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.gb5(m.d).push(p)}},
d4:function(a,b){var u,t,s,r,q=this
q.d=H.b([],[[P.ag,W.ab]])
u=C.a.k(b,"\n")
t=q.c
for(t=(t==null?q.c=q.b2():t).dd(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.o)(t),++r)q.b7(t[r])}}
V.iV.prototype={
$1:function(a){var u=C.c.dc(this.a.gfG(),2)
if(u!=="0.00")P.jw(u+" fps")}}
V.eD.prototype={
b7:function(a){var u=this
switch(a.a){case"Class":u.I(a.b,"#551")
break
case"Comment":u.I(a.b,"#777")
break
case"Id":u.I(a.b,"#111")
break
case"Num":u.I(a.b,"#191")
break
case"Reserved":u.I(a.b,"#119")
break
case"String":u.I(a.b,"#171")
break
case"Symbol":u.I(a.b,"#616")
break
case"Type":u.I(a.b,"#B11")
break
case"Whitespace":u.I(a.b,"#111")
break}},
b2:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=R.hz()
a1.c=a1.j(0,r)
u=a1.j(0,r).k(0,q)
t=T.n(new H.m("_"))
u.a.push(t)
t=T.H("a","z")
u.a.push(t)
t=T.H("A","Z")
u.a.push(t)
t=a1.j(0,q).k(0,q)
u=T.n(new H.m("_"))
t.a.push(u)
u=T.H("0","9")
t.a.push(u)
u=T.H("a","z")
t.a.push(u)
u=T.H("A","Z")
t.a.push(u)
u=a1.j(0,r).k(0,p)
t=T.H("0","9")
u.a.push(t)
t=a1.j(0,p).k(0,p)
u=T.H("0","9")
t.a.push(u)
u=a1.j(0,p).k(0,o)
t=T.n(new H.m("."))
u.a.push(t)
t=a1.j(0,o).k(0,n)
u=T.H("0","9")
t.a.push(u)
u=a1.j(0,n).k(0,n)
t=T.H("0","9")
u.a.push(t)
t=a1.j(0,r).k(0,m)
u=T.n(new H.m(l))
t.a.push(u)
u=a1.j(0,m).k(0,m)
t=T.n(new H.m(l))
u.a.push(t)
t=a1.j(0,r).k(0,k)
u=T.n(new H.m('"'))
t.a.push(u)
u=a1.j(0,k).k(0,j)
t=T.n(new H.m('"'))
u.a.push(t)
t=a1.j(0,k).k(0,i)
u=T.n(new H.m("\\"))
t.a.push(u)
u=a1.j(0,i).k(0,k)
t=T.n(new H.m('"'))
u.a.push(t)
a1.j(0,k).k(0,k).a.push(new T.an())
t=a1.j(0,r).k(0,h)
u=T.n(new H.m("'"))
t.a.push(u)
u=a1.j(0,h).k(0,g)
t=T.n(new H.m("'"))
u.a.push(t)
t=a1.j(0,h).k(0,f)
u=T.n(new H.m("\\"))
t.a.push(u)
u=a1.j(0,f).k(0,h)
t=T.n(new H.m("'"))
u.a.push(t)
a1.j(0,h).k(0,h).a.push(new T.an())
t=a1.j(0,r).k(0,e)
u=T.n(new H.m("/"))
t.a.push(u)
u=a1.j(0,e).k(0,d)
t=T.n(new H.m("/"))
u.a.push(t)
t=a1.j(0,d).k(0,c)
u=T.n(new H.m("\n"))
t.a.push(u)
u=a1.j(0,d).k(0,d)
t=new T.W()
s=[T.aQ]
t.a=H.b([],s)
u.a.push(t)
u=T.n(new H.m("\n"))
t.a.push(u)
u=a1.j(0,e).k(0,b)
t=T.n(new H.m("*"))
u.a.push(t)
t=a1.j(0,b).k(0,a)
u=T.n(new H.m("*"))
t.a.push(u)
u=a1.j(0,a).k(0,b)
t=new T.W()
t.a=H.b([],s)
u.a.push(t)
u=T.n(new H.m("*"))
t.a.push(u)
u=a1.j(0,a).k(0,c)
t=T.n(new H.m("/"))
u.a.push(t)
t=a1.j(0,r).k(0,a0)
u=T.n(new H.m(" \n\t"))
t.a.push(u)
u=a1.j(0,a0).k(0,a0)
t=T.n(new H.m(" \n\t"))
u.a.push(t)
t=a1.j(0,p)
t.d=t.a.L("Num")
t=a1.j(0,n)
t.d=t.a.L("Num")
t=a1.j(0,m)
t.d=t.a.L("Symbol")
t=a1.j(0,j)
t.d=t.a.L("String")
t=a1.j(0,g)
t.d=t.a.L("String")
t=a1.j(0,c)
t.d=t.a.L(d)
t=a1.j(0,a0)
t.d=t.a.L(a0)
t=a1.j(0,q)
t=t.d=t.a.L(q)
u=[P.q]
t.ar(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.ar(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.ar(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.eZ.prototype={
b7:function(a){var u=this
switch(a.a){case"Builtin":u.I(a.b,"#411")
break
case"Comment":u.I(a.b,"#777")
break
case"Id":u.I(a.b,"#111")
break
case"Num":u.I(a.b,"#191")
break
case"Preprocess":u.I(a.b,"#737")
break
case"Reserved":u.I(a.b,"#119")
break
case"Symbol":u.I(a.b,"#611")
break
case"Type":u.I(a.b,"#171")
break
case"Whitespace":u.I(a.b,"#111")
break}},
b2:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=R.hz()
e.c=e.j(0,r)
u=e.j(0,r).k(0,q)
t=T.n(new H.m("_"))
u.a.push(t)
t=T.H("a","z")
u.a.push(t)
t=T.H("A","Z")
u.a.push(t)
t=e.j(0,q).k(0,q)
u=T.n(new H.m("_"))
t.a.push(u)
u=T.H("0","9")
t.a.push(u)
u=T.H("a","z")
t.a.push(u)
u=T.H("A","Z")
t.a.push(u)
u=e.j(0,r).k(0,p)
t=T.H("0","9")
u.a.push(t)
t=e.j(0,p).k(0,p)
u=T.H("0","9")
t.a.push(u)
u=e.j(0,p).k(0,o)
t=T.n(new H.m("."))
u.a.push(t)
t=e.j(0,o).k(0,n)
u=T.H("0","9")
t.a.push(u)
u=e.j(0,n).k(0,n)
t=T.H("0","9")
u.a.push(t)
t=e.j(0,r).k(0,m)
u=T.n(new H.m(l))
t.a.push(u)
u=e.j(0,m).k(0,m)
t=T.n(new H.m(l))
u.a.push(t)
t=e.j(0,r).k(0,k)
u=T.n(new H.m("/"))
t.a.push(u)
u=e.j(0,k).k(0,j)
t=T.n(new H.m("/"))
u.a.push(t)
e.j(0,k).k(0,m).a.push(new T.an())
t=e.j(0,j).k(0,i)
u=T.n(new H.m("\n"))
t.a.push(u)
u=e.j(0,j).k(0,j)
t=new T.W()
s=[T.aQ]
t.a=H.b([],s)
u.a.push(t)
u=T.n(new H.m("\n"))
t.a.push(u)
u=e.j(0,r).k(0,h)
t=T.n(new H.m("#"))
u.a.push(t)
t=e.j(0,h).k(0,h)
u=new T.W()
u.a=H.b([],s)
t.a.push(u)
t=T.n(new H.m("\n"))
u.a.push(t)
t=e.j(0,h).k(0,g)
u=T.n(new H.m("\n"))
t.a.push(u)
u=e.j(0,r).k(0,f)
t=T.n(new H.m(" \n\t"))
u.a.push(t)
t=e.j(0,f).k(0,f)
u=T.n(new H.m(" \n\t"))
t.a.push(u)
u=e.j(0,p)
u.d=u.a.L("Num")
u=e.j(0,n)
u.d=u.a.L("Num")
u=e.j(0,m)
u.d=u.a.L("Symbol")
u=e.j(0,i)
u.d=u.a.L(j)
u=e.j(0,g)
u.d=u.a.L(h)
u=e.j(0,f)
u.d=u.a.L(f)
u=e.j(0,q)
u=u.d=u.a.L(q)
t=[P.q]
u.ar(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.ar(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.ar(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return e}}
V.f_.prototype={
b7:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.I(a.b,"#911")
u.I("=",t)
break
case"Id":u.I(a.b,t)
break
case"Other":u.I(a.b,t)
break
case"Reserved":u.I(a.b,"#119")
break
case"String":u.I(a.b,"#171")
break
case"Symbol":u.I(a.b,"#616")
break}},
b2:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=R.hz()
l.c=l.j(0,s)
u=l.j(0,s).k(0,r)
t=T.n(new H.m("_"))
u.a.push(t)
t=T.H("a","z")
u.a.push(t)
t=T.H("A","Z")
u.a.push(t)
t=l.j(0,r).k(0,r)
u=T.n(new H.m("_"))
t.a.push(u)
u=T.H("0","9")
t.a.push(u)
u=T.H("a","z")
t.a.push(u)
u=T.H("A","Z")
t.a.push(u)
u=l.j(0,r).k(0,q)
t=T.n(new H.m("="))
u.a.push(t)
u.c=!0
u=l.j(0,s).k(0,p)
t=T.n(new H.m("</\\-!>="))
u.a.push(t)
t=l.j(0,p).k(0,p)
u=T.n(new H.m("</\\-!>="))
t.a.push(u)
u=l.j(0,s).k(0,o)
t=T.n(new H.m('"'))
u.a.push(t)
t=l.j(0,o).k(0,n)
u=T.n(new H.m('"'))
t.a.push(u)
u=l.j(0,o).k(0,"EscStr")
t=T.n(new H.m("\\"))
u.a.push(t)
t=l.j(0,"EscStr").k(0,o)
u=T.n(new H.m('"'))
t.a.push(u)
l.j(0,o).k(0,o).a.push(new T.an())
l.j(0,s).k(0,m).a.push(new T.an())
u=l.j(0,m).k(0,m)
t=new T.W()
t.a=H.b([],[T.aQ])
u.a.push(t)
u=T.n(new H.m('</\\-!>=_"'))
t.a.push(u)
u=T.H("a","z")
t.a.push(u)
u=T.H("A","Z")
t.a.push(u)
u=l.j(0,p)
u.d=u.a.L("Symbol")
u=l.j(0,n)
u.d=u.a.L("String")
u=l.j(0,r)
t=u.a.L(r)
u.d=t
t.ar(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.q]))
t=l.j(0,q)
t.d=t.a.L(q)
t=l.j(0,m)
t.d=t.a.L(m)
return l}}
V.fR.prototype={
d4:function(a,b){this.d=H.b([],[[P.ag,W.ab]])
this.I(C.a.k(b,"\n"),"#111")},
b7:function(a){},
b2:function(){return}}
V.ha.prototype={
dA:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.R(q,"scroll",new V.hc(o),!1)},
cz:function(a){var u,t,s,r,q,p,o,n,m,l,k
this.f2()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.dd(C.a.fK(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
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
if(H.mw(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.c(m,1)
l.href=m[1]
l.textContent=m[0]
t.appendChild(l)}else{k=P.kf(C.q,n,C.h,!1)
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
de:function(a){var u,t,s,r=new V.eD("dart")
r.aY("dart")
u=new V.eZ("glsl")
u.aY("glsl")
t=new V.f_("html")
t.aY("html")
s=C.a.fF(H.b([r,u,t],[V.cn]),new V.hd(a))
if(s!=null)return s
r=new V.fR("plain")
r.aY("plain")
return r},
cv:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.b([],[P.x])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(J.jp(s).bc(s,"+")){b0[t]=C.b.ai(s,1)
a6.push(1)
u=!0}else if(C.b.bc(s,"-")){b0[t]=C.b.ai(s,1)
a6.push(-1)
u=!0}else a6.push(0)}r=this.de(a8)
r.d4(0,b0)
q=document
p=q.createElement("div")
p.className="codeTableScroll"
o=q.createElement("table")
o.className="codeTable"
p.appendChild(o)
this.a.appendChild(p)
n=P.kf(C.q,a7,C.h,!1)
m=q.createElement("tr")
m.className="headerRow"
l=q.createElement("td")
l.className="headerCell"
l.colSpan=u?3:2
k=q.createElement("div")
k.className="tableHeader"
k.id=n
j=W.jB()
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
if(t>=a6.length)return H.c(a6,t)
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
for(g=s.length,a=0;a<s.length;s.length===g||(0,H.o)(s),++a)b.appendChild(s[a])
f.appendChild(e)
f.appendChild(d)
f.appendChild(b)
o.appendChild(f)}else for(g=r.d,a0=g.length,a1=a9,a=0;a<g.length;g.length===a0||(0,H.o)(g),++a){s=g[a]
f=q.createElement("tr")
f.className=a3
e=q.createElement("td")
e.className=a4;++a1
e.textContent=""+a1
d=q.createElement("td")
d.className=a5
for(a2=C.a.gP(s);a2.u();)d.appendChild(a2.gE(a2))
f.appendChild(e)
f.appendChild(d)
o.appendChild(f)}},
f2:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=R.hz()
u.c=u.j(0,q)
t=u.j(0,q).k(0,p)
s=T.n(new H.m("*"))
t.a.push(s)
t.c=!0
t=u.j(0,p).k(0,p)
s=new T.W()
r=[T.aQ]
s.a=H.b([],r)
t.a.push(s)
t=T.n(new H.m("*"))
s.a.push(t)
t=u.j(0,p).k(0,"BoldEnd")
s=T.n(new H.m("*"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,o)
s=T.n(new H.m("_"))
t.a.push(s)
t.c=!0
t=u.j(0,o).k(0,o)
s=new T.W()
s.a=H.b([],r)
t.a.push(s)
t=T.n(new H.m("_"))
s.a.push(t)
t=u.j(0,o).k(0,n)
s=T.n(new H.m("_"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,m)
s=T.n(new H.m("`"))
t.a.push(s)
t.c=!0
t=u.j(0,m).k(0,m)
s=new T.W()
s.a=H.b([],r)
t.a.push(s)
t=T.n(new H.m("`"))
s.a.push(t)
t=u.j(0,m).k(0,"CodeEnd")
s=T.n(new H.m("`"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,l)
s=T.n(new H.m("["))
t.a.push(s)
t.c=!0
t=u.j(0,l).k(0,k)
s=T.n(new H.m("|"))
t.a.push(s)
s=u.j(0,l).k(0,j)
t=T.n(new H.m("]"))
s.a.push(t)
s.c=!0
s=u.j(0,l).k(0,l)
t=new T.W()
t.a=H.b([],r)
s.a.push(t)
s=T.n(new H.m("|]"))
t.a.push(s)
s=u.j(0,k).k(0,j)
t=T.n(new H.m("]"))
s.a.push(t)
s.c=!0
s=u.j(0,k).k(0,k)
t=new T.W()
t.a=H.b([],r)
s.a.push(t)
s=T.n(new H.m("|]"))
t.a.push(s)
u.j(0,q).k(0,i).a.push(new T.an())
s=u.j(0,i).k(0,i)
t=new T.W()
t.a=H.b([],r)
s.a.push(t)
s=T.n(new H.m("*_`["))
t.a.push(s)
s=u.j(0,"BoldEnd")
s.d=s.a.L(p)
s=u.j(0,n)
s.d=s.a.L(o)
s=u.j(0,"CodeEnd")
s.d=s.a.L(m)
s=u.j(0,j)
s.d=s.a.L("Link")
s=u.j(0,i)
s.d=s.a.L(i)
this.b=u}}
V.hc.prototype={
$1:function(a){P.k4(C.i,new V.hb(this.a))}}
V.hb.prototype={
$0:function(){var u=C.c.a9(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
V.hd.prototype={
$1:function(a){return a.a===this.a}}
B.iT.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.a,r=[P.q]
u.cv("Vertex Shader","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
t=t.a
u.cv("Fragment Shader","glsl",0,H.b((t==null?null:t.d).split("\n"),r))}};(function aliases(){var u=J.a.prototype
u.dn=u.h
u=J.cB.prototype
u.dr=u.h
u=P.i.prototype
u.dq=u.ba
u=W.N.prototype
u.bd=u.a5
u=W.dP.prototype
u.ds=u.af
u=T.cx.prototype
u.dm=u.ap
u.c5=u.h
u=O.bI.prototype
u.c6=u.am
u=O.ah.prototype
u.c7=u.am})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"m4","ls",6)
u(P,"m5","lt",6)
u(P,"m6","lu",6)
t(P,"kk","m2",9)
s(W,"mj",4,null,["$4"],["lv"],15,0)
s(W,"mk",4,null,["$4"],["lw"],15,0)
var m
r(m=E.aJ.prototype,"gd2",0,0,null,["$1","$0"],["d3","fT"],0,0)
r(m,"gd0",0,0,null,["$1","$0"],["d1","fS"],0,0)
r(m,"gcZ",0,0,null,["$1","$0"],["d_","fP"],0,0)
q(m,"gfN","fO",3)
q(m,"gfQ","fR",3)
r(m=E.d5.prototype,"gc8",0,0,null,["$1","$0"],["ca","c9"],0,0)
p(m,"gh5","d8",9)
o(m=X.de.prototype,"geo","ep",4)
o(m,"gec","ed",4)
o(m,"gei","ej",2)
o(m,"ges","eu",10)
o(m,"geq","er",10)
o(m,"gex","ey",2)
o(m,"geB","eC",2)
o(m,"gem","en",2)
o(m,"gez","eA",2)
o(m,"gek","el",2)
o(m,"geD","eE",17)
o(m,"geF","eG",4)
o(m,"geS","eT",5)
o(m,"geO","eP",5)
o(m,"geQ","eR",5)
r(D.bb.prototype,"gdD",0,0,null,["$1","$0"],["aj","dE"],0,0)
r(m=D.cD.prototype,"gcm",0,0,null,["$1","$0"],["cn","ev"],0,0)
o(m,"geI","eJ",18)
q(m,"ge6","e7",11)
q(m,"geM","eN",11)
n(V.A.prototype,"gl","bQ",12)
n(V.z.prototype,"gl","bQ",12)
r(m=U.bC.prototype,"gaB",0,0,null,["$1","$0"],["M","X"],0,0)
q(m,"ge4","e5",13)
q(m,"geK","eL",13)
r(m=U.df.prototype,"gaB",0,0,null,["$1","$0"],["M","X"],0,0)
o(m,"gbp","bq",1)
o(m,"gbr","bs",1)
o(m,"gbt","bu",1)
r(m=U.dg.prototype,"gaB",0,0,null,["$1","$0"],["M","X"],0,0)
o(m,"gbp","bq",1)
o(m,"gbr","bs",1)
o(m,"gbt","bu",1)
o(m,"gdY","dZ",1)
o(m,"ge_","e0",1)
o(m,"gf9","fa",1)
o(m,"gf7","f8",1)
o(m,"gf5","f6",1)
o(U.dh.prototype,"ge2","e3",1)
r(m=M.ct.prototype,"gac",0,0,null,["$1","$0"],["ak","dF"],0,0)
q(m,"gee","ef",3)
q(m,"geg","eh",3)
r(m=O.cJ.prototype,"gaZ",0,0,null,["$1","$0"],["T","bf"],0,0)
r(m,"geX",0,0,null,["$1","$0"],["co","eY"],0,0)
q(m,"ge8","e9",14)
q(m,"gea","eb",14)
r(O.bI.prototype,"gaZ",0,0,null,["$1","$0"],["T","bf"],0,0)
r(X.cS.prototype,"gcb",0,0,null,["$1","$0"],["ax","dJ"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.U,null)
s(P.U,[H.jc,J.a,J.Z,P.dC,P.i,H.bH,P.f4,H.cv,H.hP,H.hE,P.bc,H.bz,H.dU,P.ap,H.fa,H.fb,H.f6,P.e_,P.dk,P.d1,P.hl,P.d6,P.iF,P.it,P.im,P.dB,P.p,P.eu,P.f2,P.iD,P.am,P.a2,P.a9,P.aI,P.fP,P.d_,P.dt,P.eW,P.eY,P.ag,P.cI,P.aS,P.q,P.at,W.ez,W.c1,W.E,W.cQ,W.dP,W.iy,W.cw,W.as,W.is,W.e5,P.e4,P.io,T.an,T.cx,T.aQ,T.fW,T.h5,R.d0,R.d7,R.d8,R.hy,O.aF,O.bJ,E.eq,E.aJ,E.fY,E.d5,Z.dj,Z.i5,Z.cl,Z.bf,Z.aw,D.et,D.bd,D.P,X.cm,X.cC,X.f8,X.fe,X.a3,X.fD,X.hA,X.de,D.bb,D.a_,D.fT,D.hg,V.O,V.aG,V.eN,V.cK,V.aq,V.a4,V.ac,V.cT,V.cV,V.A,V.z,U.df,U.dg,U.dh,M.ct,A.ci,A.el,A.S,A.cq,A.cU,A.cZ,A.fn,A.bV,A.bX,A.bY,A.db,A.hL,F.be,F.bG,F.bN,F.h6,F.h7,F.h8,F.h9,F.bZ,F.hX,F.hY,F.i0,F.i1,O.d3,O.bI,O.fo,T.hu,X.j1,X.hp,X.cS,V.cn,V.ha])
s(J.a,[J.f5,J.cA,J.cB,J.aN,J.bF,J.aO,H.bM,W.d,W.ei,W.cj,W.af,W.D,W.dm,W.a1,W.eE,W.eF,W.dp,W.cs,W.dr,W.eH,W.h,W.du,W.aL,W.f0,W.dx,W.aM,W.fd,W.fx,W.dD,W.dE,W.aR,W.dF,W.dI,W.aT,W.dM,W.dO,W.aW,W.dQ,W.aX,W.dV,W.au,W.dY,W.hx,W.aZ,W.e0,W.hC,W.hR,W.e6,W.e8,W.ea,W.ec,W.ee,P.bj,P.dz,P.bk,P.dK,P.fV,P.dW,P.bo,P.e2,P.em,P.dl,P.cW,P.dS])
s(J.cB,[J.fQ,J.bq,J.aP])
t(J.jb,J.aN)
s(J.bF,[J.cz,J.cy])
t(P.fc,P.dC)
s(P.fc,[H.dd,W.ic,W.V,P.eS])
t(H.m,H.dd)
s(P.i,[H.eK,H.fh,H.c_])
s(H.eK,[H.cG,H.cE])
s(P.f4,[H.fi,H.i6])
t(H.fj,H.cG)
s(P.bc,[H.fM,H.f7,H.hO,H.es,H.h3,P.cR,P.aa,P.hQ,P.hN,P.bS,P.ew,P.eC])
s(H.bz,[H.iY,H.hq,H.iP,H.iQ,H.iR,P.i8,P.i7,P.i9,P.ia,P.iC,P.iB,P.iK,P.iq,P.ir,P.fg,P.eI,P.eJ,W.eL,W.fz,W.fB,W.h2,W.hk,W.ih,W.fL,W.fK,W.iu,W.iv,W.iA,W.iE,P.iL,P.eT,P.eU,P.eo,E.fZ,E.h_,E.h0,E.hw,D.eO,D.eP,F.iG,F.i3,F.i2,F.hZ,F.i_,O.fr,O.fs,O.ft,O.fu,O.fv,O.fw,T.hv,V.iV,V.hc,V.hb,V.hd,B.iT])
s(H.hq,[H.hi,H.bx])
t(P.ff,P.ap)
s(P.ff,[H.L,W.ib])
t(H.cM,H.bM)
s(H.cM,[H.c2,H.c4])
t(H.c3,H.c2)
t(H.bL,H.c3)
t(H.c5,H.c4)
t(H.cN,H.c5)
s(H.cN,[H.fE,H.fF,H.fG,H.fH,H.fI,H.cO,H.fJ])
t(P.ip,P.iF)
t(P.il,P.it)
t(P.ex,P.hl)
t(P.eM,P.eu)
s(P.ex,[P.f1,P.hT])
t(P.hS,P.eM)
s(P.a9,[P.J,P.x])
s(P.aa,[P.bm,P.f3])
s(W.d,[W.G,W.eR,W.aV,W.c6,W.aY,W.av,W.c8,W.i4,W.c0,P.ep,P.b8])
s(W.G,[W.N,W.aE])
s(W.N,[W.l,P.j])
s(W.l,[W.ej,W.ek,W.b9,W.ba,W.ab,W.eV,W.bE,W.h4,W.d2,W.hn,W.ho,W.bT])
t(W.ey,W.af)
t(W.bA,W.dm)
s(W.a1,[W.eA,W.eB])
t(W.dq,W.dp)
t(W.cr,W.dq)
t(W.ds,W.dr)
t(W.eG,W.ds)
t(W.aK,W.cj)
t(W.dv,W.du)
t(W.eQ,W.dv)
t(W.dy,W.dx)
t(W.bD,W.dy)
t(W.b_,W.h)
s(W.b_,[W.bi,W.aj,W.bn])
t(W.fy,W.dD)
t(W.fA,W.dE)
t(W.dG,W.dF)
t(W.fC,W.dG)
t(W.dJ,W.dI)
t(W.cP,W.dJ)
t(W.dN,W.dM)
t(W.fS,W.dN)
t(W.h1,W.dO)
t(W.c7,W.c6)
t(W.he,W.c7)
t(W.dR,W.dQ)
t(W.hf,W.dR)
t(W.hj,W.dV)
t(W.dZ,W.dY)
t(W.hr,W.dZ)
t(W.c9,W.c8)
t(W.hs,W.c9)
t(W.e1,W.e0)
t(W.hB,W.e1)
t(W.b0,W.aj)
t(W.e7,W.e6)
t(W.id,W.e7)
t(W.dn,W.cs)
t(W.e9,W.e8)
t(W.ii,W.e9)
t(W.eb,W.ea)
t(W.dH,W.eb)
t(W.ed,W.ec)
t(W.iw,W.ed)
t(W.ef,W.ee)
t(W.ix,W.ef)
t(W.ie,W.ib)
t(W.ig,P.d1)
t(W.iz,W.dP)
t(P.a5,P.io)
t(P.dA,P.dz)
t(P.f9,P.dA)
t(P.dL,P.dK)
t(P.fN,P.dL)
t(P.bR,P.j)
t(P.dX,P.dW)
t(P.hm,P.dX)
t(P.e3,P.e2)
t(P.hD,P.e3)
t(P.en,P.dl)
t(P.fO,P.b8)
t(P.dT,P.dS)
t(P.hh,P.dT)
s(T.cx,[T.W,R.da])
s(E.eq,[Z.ck,A.cX,T.d4])
s(D.P,[D.bg,D.bh,D.w,X.fU])
s(X.fU,[X.cH,X.ar,X.bK,X.d9])
s(O.aF,[D.cD,U.bC])
s(D.et,[U.ev,U.a0])
t(U.co,U.a0)
t(A.fk,A.cX)
s(A.db,[A.dc,A.hI,A.hJ,A.hK,A.hG,A.Q,A.hH,A.I,A.bU,A.hM,A.bW,A.a6,A.bp,A.T])
t(O.cJ,O.d3)
s(O.bI,[O.fl,O.fm,O.ah])
s(O.ah,[O.fp,O.fq])
t(T.ht,T.d4)
t(X.eX,X.hp)
s(V.cn,[V.eD,V.eZ,V.f_,V.fR])
u(H.dd,H.hP)
u(H.c2,P.p)
u(H.c3,H.cv)
u(H.c4,P.p)
u(H.c5,H.cv)
u(P.dC,P.p)
u(W.dm,W.ez)
u(W.dp,P.p)
u(W.dq,W.E)
u(W.dr,P.p)
u(W.ds,W.E)
u(W.du,P.p)
u(W.dv,W.E)
u(W.dx,P.p)
u(W.dy,W.E)
u(W.dD,P.ap)
u(W.dE,P.ap)
u(W.dF,P.p)
u(W.dG,W.E)
u(W.dI,P.p)
u(W.dJ,W.E)
u(W.dM,P.p)
u(W.dN,W.E)
u(W.dO,P.ap)
u(W.c6,P.p)
u(W.c7,W.E)
u(W.dQ,P.p)
u(W.dR,W.E)
u(W.dV,P.ap)
u(W.dY,P.p)
u(W.dZ,W.E)
u(W.c8,P.p)
u(W.c9,W.E)
u(W.e0,P.p)
u(W.e1,W.E)
u(W.e6,P.p)
u(W.e7,W.E)
u(W.e8,P.p)
u(W.e9,W.E)
u(W.ea,P.p)
u(W.eb,W.E)
u(W.ec,P.p)
u(W.ed,W.E)
u(W.ee,P.p)
u(W.ef,W.E)
u(P.dz,P.p)
u(P.dA,W.E)
u(P.dK,P.p)
u(P.dL,W.E)
u(P.dW,P.p)
u(P.dX,W.E)
u(P.e2,P.p)
u(P.e3,W.E)
u(P.dl,P.ap)
u(P.dS,P.p)
u(P.dT,W.E)})()
var v={mangledGlobalNames:{x:"int",J:"double",a9:"num",q:"String",am:"bool",aS:"Null",ag:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.P]},{func:1,ret:-1,args:[D.P]},{func:1,ret:-1,args:[W.aj]},{func:1,ret:-1,args:[P.x,[P.i,E.aJ]]},{func:1,ret:-1,args:[W.h]},{func:1,ret:-1,args:[W.bn]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.aS,args:[,,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bi]},{func:1,ret:-1,args:[P.x,[P.i,D.a_]]},{func:1,ret:P.J},{func:1,ret:-1,args:[P.x,[P.i,U.a0]]},{func:1,ret:-1,args:[P.x,[P.i,V.aq]]},{func:1,ret:P.am,args:[W.N,P.q,P.q,W.c1]},{func:1,ret:P.aS,args:[,]},{func:1,ret:-1,args:[W.b0]},{func:1,ret:P.am,args:[[P.i,D.a_]]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.n=W.b9.prototype
C.f=W.ba.prototype
C.E=W.ab.prototype
C.H=J.a.prototype
C.a=J.aN.prototype
C.I=J.cy.prototype
C.d=J.cz.prototype
C.j=J.cA.prototype
C.c=J.bF.prototype
C.b=J.aO.prototype
C.J=J.aP.prototype
C.r=J.fQ.prototype
C.N=P.cW.prototype
C.t=W.d2.prototype
C.m=J.bq.prototype
C.u=W.b0.prototype
C.v=W.c0.prototype
C.o=function getTagFallback(o) {
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
C.p=function(hooks) { return hooks; }

C.C=new P.fP()
C.h=new P.hS()
C.D=new P.hT()
C.e=new P.ip()
C.i=new P.aI(0)
C.F=new P.aI(5e6)
C.G=new P.f2("element",!1,!1,!1)
C.K=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.q])
C.L=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.q])
C.M=H.b(u([]),[P.q])
C.q=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.x])
C.k=H.b(u(["bind","if","ref","repeat","syntax"]),[P.q])
C.l=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.q])})();(function staticFields(){$.ae=0
$.by=null
$.jD=null
$.km=null
$.kj=null
$.kp=null
$.iM=null
$.iS=null
$.jt=null
$.br=null
$.cc=null
$.cd=null
$.jl=!1
$.ad=C.e
$.X=[]
$.ao=null
$.j6=null
$.jJ=null
$.jI=null
$.dw=P.jL(P.q,P.eY)
$.jQ=null
$.jT=null
$.bO=null
$.k_=null
$.k8=null
$.ka=null
$.hU=null
$.hV=null
$.hW=null
$.k9=null
$.jS=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"mE","kt",function(){return H.kl("_$dart_dartClosure")})
u($,"mF","jy",function(){return H.kl("_$dart_js")})
u($,"mG","ku",function(){return H.al(H.hF({
toString:function(){return"$receiver$"}}))})
u($,"mH","kv",function(){return H.al(H.hF({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"mI","kw",function(){return H.al(H.hF(null))})
u($,"mJ","kx",function(){return H.al(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mM","kA",function(){return H.al(H.hF(void 0))})
u($,"mN","kB",function(){return H.al(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mL","kz",function(){return H.al(H.k6(null))})
u($,"mK","ky",function(){return H.al(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"mP","kD",function(){return H.al(H.k6(void 0))})
u($,"mO","kC",function(){return H.al(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"n1","jz",function(){return P.lr()})
u($,"n3","kI",function(){return P.lg("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"n2","kH",function(){return P.jM(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.q)})
u($,"mW","kG",function(){return Z.a8(0)})
u($,"mQ","kE",function(){return Z.a8(511)})
u($,"mY","aC",function(){return Z.a8(1)})
u($,"mX","aB",function(){return Z.a8(2)})
u($,"mS","aA",function(){return Z.a8(4)})
u($,"mZ","b4",function(){return Z.a8(8)})
u($,"n_","aD",function(){return Z.a8(16)})
u($,"mT","cg",function(){return Z.a8(32)})
u($,"mU","ch",function(){return Z.a8(64)})
u($,"mV","kF",function(){return Z.a8(96)})
u($,"n0","bw",function(){return Z.a8(128)})
u($,"mR","az",function(){return Z.a8(256)})
u($,"mD","ks",function(){return new V.eN(1e-9)})
u($,"mC","y",function(){return $.ks()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.bM,ArrayBufferView:H.bM,Float32Array:H.bL,Float64Array:H.bL,Int16Array:H.fE,Int32Array:H.fF,Int8Array:H.fG,Uint16Array:H.fH,Uint32Array:H.fI,Uint8ClampedArray:H.cO,CanvasPixelArray:H.cO,Uint8Array:H.fJ,HTMLAudioElement:W.l,HTMLBRElement:W.l,HTMLBaseElement:W.l,HTMLButtonElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLInputElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMediaElement:W.l,HTMLMenuElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTextAreaElement:W.l,HTMLTimeElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLVideoElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLFrameSetElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,AccessibleNodeList:W.ei,HTMLAnchorElement:W.ej,HTMLAreaElement:W.ek,Blob:W.cj,HTMLBodyElement:W.b9,HTMLCanvasElement:W.ba,CDATASection:W.aE,CharacterData:W.aE,Comment:W.aE,ProcessingInstruction:W.aE,Text:W.aE,CSSPerspective:W.ey,CSSCharsetRule:W.D,CSSConditionRule:W.D,CSSFontFaceRule:W.D,CSSGroupingRule:W.D,CSSImportRule:W.D,CSSKeyframeRule:W.D,MozCSSKeyframeRule:W.D,WebKitCSSKeyframeRule:W.D,CSSKeyframesRule:W.D,MozCSSKeyframesRule:W.D,WebKitCSSKeyframesRule:W.D,CSSMediaRule:W.D,CSSNamespaceRule:W.D,CSSPageRule:W.D,CSSRule:W.D,CSSStyleRule:W.D,CSSSupportsRule:W.D,CSSViewportRule:W.D,CSSStyleDeclaration:W.bA,MSStyleCSSProperties:W.bA,CSS2Properties:W.bA,CSSImageValue:W.a1,CSSKeywordValue:W.a1,CSSNumericValue:W.a1,CSSPositionValue:W.a1,CSSResourceValue:W.a1,CSSUnitValue:W.a1,CSSURLImageValue:W.a1,CSSStyleValue:W.a1,CSSMatrixComponent:W.af,CSSRotation:W.af,CSSScale:W.af,CSSSkew:W.af,CSSTranslation:W.af,CSSTransformComponent:W.af,CSSTransformValue:W.eA,CSSUnparsedValue:W.eB,DataTransferItemList:W.eE,HTMLDivElement:W.ab,DOMException:W.eF,ClientRectList:W.cr,DOMRectList:W.cr,DOMRectReadOnly:W.cs,DOMStringList:W.eG,DOMTokenList:W.eH,Element:W.N,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.aK,FileList:W.eQ,FileWriter:W.eR,HTMLFormElement:W.eV,Gamepad:W.aL,History:W.f0,HTMLCollection:W.bD,HTMLFormControlsCollection:W.bD,HTMLOptionsCollection:W.bD,ImageData:W.aM,HTMLImageElement:W.bE,KeyboardEvent:W.bi,Location:W.fd,MediaList:W.fx,MIDIInputMap:W.fy,MIDIOutputMap:W.fA,MimeType:W.aR,MimeTypeArray:W.fC,PointerEvent:W.aj,MouseEvent:W.aj,DragEvent:W.aj,Document:W.G,DocumentFragment:W.G,HTMLDocument:W.G,ShadowRoot:W.G,XMLDocument:W.G,Attr:W.G,DocumentType:W.G,Node:W.G,NodeList:W.cP,RadioNodeList:W.cP,Plugin:W.aT,PluginArray:W.fS,RTCStatsReport:W.h1,HTMLSelectElement:W.h4,SourceBuffer:W.aV,SourceBufferList:W.he,SpeechGrammar:W.aW,SpeechGrammarList:W.hf,SpeechRecognitionResult:W.aX,Storage:W.hj,CSSStyleSheet:W.au,StyleSheet:W.au,HTMLTableElement:W.d2,HTMLTableRowElement:W.hn,HTMLTableSectionElement:W.ho,HTMLTemplateElement:W.bT,TextTrack:W.aY,TextTrackCue:W.av,VTTCue:W.av,TextTrackCueList:W.hr,TextTrackList:W.hs,TimeRanges:W.hx,Touch:W.aZ,TouchEvent:W.bn,TouchList:W.hB,TrackDefaultList:W.hC,CompositionEvent:W.b_,FocusEvent:W.b_,TextEvent:W.b_,UIEvent:W.b_,URL:W.hR,VideoTrackList:W.i4,WheelEvent:W.b0,Window:W.c0,DOMWindow:W.c0,CSSRuleList:W.id,ClientRect:W.dn,DOMRect:W.dn,GamepadList:W.ii,NamedNodeMap:W.dH,MozNamedAttrMap:W.dH,SpeechRecognitionResultList:W.iw,StyleSheetList:W.ix,SVGLength:P.bj,SVGLengthList:P.f9,SVGNumber:P.bk,SVGNumberList:P.fN,SVGPointList:P.fV,SVGScriptElement:P.bR,SVGStringList:P.hm,SVGAElement:P.j,SVGAnimateElement:P.j,SVGAnimateMotionElement:P.j,SVGAnimateTransformElement:P.j,SVGAnimationElement:P.j,SVGCircleElement:P.j,SVGClipPathElement:P.j,SVGDefsElement:P.j,SVGDescElement:P.j,SVGDiscardElement:P.j,SVGEllipseElement:P.j,SVGFEBlendElement:P.j,SVGFEColorMatrixElement:P.j,SVGFEComponentTransferElement:P.j,SVGFECompositeElement:P.j,SVGFEConvolveMatrixElement:P.j,SVGFEDiffuseLightingElement:P.j,SVGFEDisplacementMapElement:P.j,SVGFEDistantLightElement:P.j,SVGFEFloodElement:P.j,SVGFEFuncAElement:P.j,SVGFEFuncBElement:P.j,SVGFEFuncGElement:P.j,SVGFEFuncRElement:P.j,SVGFEGaussianBlurElement:P.j,SVGFEImageElement:P.j,SVGFEMergeElement:P.j,SVGFEMergeNodeElement:P.j,SVGFEMorphologyElement:P.j,SVGFEOffsetElement:P.j,SVGFEPointLightElement:P.j,SVGFESpecularLightingElement:P.j,SVGFESpotLightElement:P.j,SVGFETileElement:P.j,SVGFETurbulenceElement:P.j,SVGFilterElement:P.j,SVGForeignObjectElement:P.j,SVGGElement:P.j,SVGGeometryElement:P.j,SVGGraphicsElement:P.j,SVGImageElement:P.j,SVGLineElement:P.j,SVGLinearGradientElement:P.j,SVGMarkerElement:P.j,SVGMaskElement:P.j,SVGMetadataElement:P.j,SVGPathElement:P.j,SVGPatternElement:P.j,SVGPolygonElement:P.j,SVGPolylineElement:P.j,SVGRadialGradientElement:P.j,SVGRectElement:P.j,SVGSetElement:P.j,SVGStopElement:P.j,SVGStyleElement:P.j,SVGSVGElement:P.j,SVGSwitchElement:P.j,SVGSymbolElement:P.j,SVGTSpanElement:P.j,SVGTextContentElement:P.j,SVGTextElement:P.j,SVGTextPathElement:P.j,SVGTextPositioningElement:P.j,SVGTitleElement:P.j,SVGUseElement:P.j,SVGViewElement:P.j,SVGGradientElement:P.j,SVGComponentTransferFunctionElement:P.j,SVGFEDropShadowElement:P.j,SVGMPathElement:P.j,SVGElement:P.j,SVGTransform:P.bo,SVGTransformList:P.hD,AudioBuffer:P.em,AudioParamMap:P.en,AudioTrackList:P.ep,AudioContext:P.b8,webkitAudioContext:P.b8,BaseAudioContext:P.b8,OfflineAudioContext:P.fO,WebGL2RenderingContext:P.cW,SQLResultSetRowList:P.hh})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.cM.$nativeSuperclassTag="ArrayBufferView"
H.c2.$nativeSuperclassTag="ArrayBufferView"
H.c3.$nativeSuperclassTag="ArrayBufferView"
H.bL.$nativeSuperclassTag="ArrayBufferView"
H.c4.$nativeSuperclassTag="ArrayBufferView"
H.c5.$nativeSuperclassTag="ArrayBufferView"
H.cN.$nativeSuperclassTag="ArrayBufferView"
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
if(typeof dartMainRunner==="function")dartMainRunner(B.kn,[])
else B.kn([])})})()
//# sourceMappingURL=test.dart.js.map
