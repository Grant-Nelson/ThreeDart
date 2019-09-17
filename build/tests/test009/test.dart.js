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
a[c]=function(){a[c]=function(){H.mv(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jk"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jk"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jk(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={ja:function ja(){},
eZ:function(){return new P.bN("No element")},
l_:function(){return new P.bN("Too many elements")},
cT:function(a,b,c,d){if(c-b<=32)H.lk(a,b,c,d)
else H.lj(a,b,c,d)},
lk:function(a,b,c,d){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.c(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.c(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.U()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.c(a,q)
C.a.n(a,s,a[q])
s=q}C.a.n(a,s,t)}},
lj:function(a2,a3,a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.d.X(a4-a3+1,6),d=a3+e,c=a4-e,b=C.d.X(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
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
if(typeof a1!=="number")return a1.U()
if(a1>0){p=t
t=u
u=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.U()
if(a1>0){p=q
q=r
r=p}a1=a5.$2(u,s)
if(typeof a1!=="number")return a1.U()
if(a1>0){p=s
s=u
u=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.U()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(u,r)
if(typeof a1!=="number")return a1.U()
if(a1>0){p=r
r=u
u=p}a1=a5.$2(s,r)
if(typeof a1!=="number")return a1.U()
if(a1>0){p=r
r=s
s=p}a1=a5.$2(t,q)
if(typeof a1!=="number")return a1.U()
if(a1>0){p=q
q=t
t=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.U()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.U()
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
if(J.B(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.a1()
if(k<0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.n(a2,m,a2[o])
C.a.n(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.U()
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
if(typeof g!=="number")return g.a1()
if(g<0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.n(a2,m,a2[o])
C.a.n(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.U()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.U()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a1()
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
H.cT(a2,a3,o-2,a5)
H.cT(a2,n+2,a4,a5)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.c(a2,o)
if(!J.B(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.c(a2,n)
if(!J.B(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.n(a2,m,a2[o])
C.a.n(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a1()
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
break}}}H.cT(a2,o,n,a5)}else H.cT(a2,o,n,a5)},
l:function l(a){this.a=a},
eC:function eC(){},
cA:function cA(){},
bE:function bE(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
fe:function fe(a,b,c){this.a=a
this.b=b
this.$ti=c},
ff:function ff(a,b){this.a=null
this.b=a
this.c=b},
fg:function fg(a,b,c){this.a=a
this.b=b
this.$ti=c},
bW:function bW(a,b,c){this.a=a
this.b=b
this.$ti=c},
i6:function i6(a,b){this.a=a
this.b=b},
co:function co(){},
hM:function hM(){},
d7:function d7(){},
e8:function(a){var u,t=H.mx(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
me:function(a){return v.types[a]},
ml:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.Q(a).$iv},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ab(a)
if(typeof u!=="string")throw H.f(H.bq(a))
return u},
bK:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bL:function(a){return H.l6(a)+H.kf(H.c9(a),0,null)},
l6:function(a){var u,t,s,r,q,p,o,n=J.Q(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.H||!!n.$ibn){r=C.o(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.e8(t.length>1&&C.b.az(t,0)===36?C.b.af(t,1):t)},
jT:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
le:function(a){var u,t,s,r=H.b([],[P.w])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.q)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.bq(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.d.aW(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.f(H.bq(s))}return H.jT(r)},
jU:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.bq(s))
if(s<0)throw H.f(H.bq(s))
if(s>65535)return H.le(a)}return H.jT(a)},
jc:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.aW(u,10))>>>0,56320|u&1023)}throw H.f(P.aj(a,0,1114111,null,null))},
bh:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ld:function(a){var u=H.bh(a).getFullYear()+0
return u},
lb:function(a){var u=H.bh(a).getMonth()+1
return u},
l7:function(a){var u=H.bh(a).getDate()+0
return u},
l8:function(a){var u=H.bh(a).getHours()+0
return u},
la:function(a){var u=H.bh(a).getMinutes()+0
return u},
lc:function(a){var u=H.bh(a).getSeconds()+0
return u},
l9:function(a){var u=H.bh(a).getMilliseconds()+0
return u},
u:function(a){throw H.f(H.bq(a))},
c:function(a,b){if(a==null)J.b4(a)
throw H.f(H.bs(a,b))},
bs:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ac(!0,b,s,null)
u=J.b4(a)
if(!(b<0)){if(typeof u!=="number")return H.u(u)
t=b>=u}else t=!0
if(t)return P.F(b,a,s,null,u)
return P.cQ(b,s)},
m8:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bi(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bi(a,c,!0,b,"end",u)
return new P.ac(!0,b,"end",null)},
bq:function(a){return new P.ac(!0,a,null,null)},
f:function(a){var u
if(a==null)a=new P.cM()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.kr})
u.name=""}else u.toString=H.kr
return u},
kr:function(){return J.ab(this.dartException)},
t:function(a){throw H.f(a)},
q:function(a){throw H.f(P.aE(a))},
ak:function(a){var u,t,s,r,q,p
a=H.kq(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.p])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hA(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hB:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
k3:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
jP:function(a,b){return new H.fK(a,b==null?null:b.method)},
jb:function(a,b){var u=b==null,t=u?null:b.method
return new H.f3(a,t,u?null:b.receiver)},
aw:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.iY(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.aW(t,16)&8191)===10)switch(s){case 438:return f.$1(H.jb(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.jP(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.ku()
q=$.kv()
p=$.kw()
o=$.kx()
n=$.kA()
m=$.kB()
l=$.kz()
$.ky()
k=$.kD()
j=$.kC()
i=r.a4(u)
if(i!=null)return f.$1(H.jb(u,i))
else{i=q.a4(u)
if(i!=null){i.method="call"
return f.$1(H.jb(u,i))}else{i=p.a4(u)
if(i==null){i=o.a4(u)
if(i==null){i=n.a4(u)
if(i==null){i=m.a4(u)
if(i==null){i=l.a4(u)
if(i==null){i=o.a4(u)
if(i==null){i=k.a4(u)
if(i==null){i=j.a4(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.jP(u,i))}}return f.$1(new H.hL(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.cV()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.ac(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.cV()
return a},
jp:function(a){var u
if(a==null)return new H.dN(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dN(a)},
mc:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.n(0,a[u],a[t])}return b},
mk:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(P.r("Unsupported number of arguments for wrapped closure"))},
br:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mk)
a.$identity=u
return u},
kT:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hg().constructor.prototype):Object.create(new H.bw(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ad
if(typeof t!=="number")return t.C()
$.ad=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.jD(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.kP(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.jD(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
kP:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.me,a)
if(typeof a=="function")if(b)return a
else{u=c?H.jB:H.j0
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.f("Error in functionType of tearoff")},
kQ:function(a,b,c,d){var u=H.j0
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jD:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.kS(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.kQ(t,!r,u,b)
if(t===0){r=$.ad
if(typeof r!=="number")return r.C()
$.ad=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bx
return new Function(r+H.e(q==null?$.bx=H.ej("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ad
if(typeof r!=="number")return r.C()
$.ad=r+1
o+=r
r="return function("+o+"){return this."
q=$.bx
return new Function(r+H.e(q==null?$.bx=H.ej("self"):q)+"."+H.e(u)+"("+o+");}")()},
kR:function(a,b,c,d){var u=H.j0,t=H.jB
switch(b?-1:a){case 0:throw H.f(H.lh("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
kS:function(a,b){var u,t,s,r,q,p,o,n=$.bx
if(n==null)n=$.bx=H.ej("self")
u=$.jA
if(u==null)u=$.jA=H.ej("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.kR(s,!q,t,b)
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
jk:function(a,b,c,d,e,f,g){return H.kT(a,b,c,d,!!e,!!f,g)},
j0:function(a){return a.a},
jB:function(a){return a.c},
ej:function(a){var u,t,s,r=new H.bw("self","target","receiver","name"),q=J.j8(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
mp:function(a,b){throw H.f(H.kO(a,H.e8(b.substring(2))))},
n:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.Q(a)[b]
else u=!0
if(u)return a
H.mp(a,b)},
ma:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
kO:function(a,b){return new H.ek("CastError: "+P.j6(a)+": type '"+H.e(H.m2(a))+"' is not a subtype of type '"+b+"'")},
m2:function(a){var u,t=J.Q(a)
if(!!t.$iby){u=H.ma(t)
if(u!=null)return H.mq(u)
return"Closure"}return H.bL(a)},
mv:function(a){throw H.f(new P.eu(a))},
lh:function(a){return new H.h0(a)},
kl:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
c9:function(a){if(a==null)return
return a.$ti},
n3:function(a,b,c){return H.iV(a["$a"+H.e(c)],H.c9(b))},
md:function(a,b,c,d){var u=H.iV(a["$a"+H.e(c)],H.c9(b))
return u==null?null:u[d]},
jo:function(a,b,c){var u=H.iV(a["$a"+H.e(b)],H.c9(a))
return u==null?null:u[c]},
bu:function(a,b){var u=H.c9(a)
return u==null?null:u[b]},
mq:function(a){return H.b_(a,null)},
b_:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.e8(a[0].name)+H.kf(a,1,b)
if(typeof a=="function")return H.e8(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.c(b,t)
return H.e(b[t])}if('func' in a)return H.lB(a,b)
if('futureOr' in a)return"FutureOr<"+H.b_("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lB:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.b([],[P.p])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.c(a0,m)
p=C.b.C(p,a0[m])
l=u[q]
if(l!=null&&l!==P.T)p+=" extends "+H.b_(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.b_(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.b_(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.b_(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.mb(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.b_(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
kf:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.as("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.b_(p,c)}return"<"+u.h(0)+">"},
iV:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
n1:function(a,b,c){return a.apply(b,H.iV(J.Q(b)["$a"+H.e(c)],H.c9(b)))},
n2:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
mm:function(a){var u,t,s,r,q=$.km.$1(a),p=$.iL[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.iR[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.ki.$2(a,q)
if(q!=null){p=$.iL[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.iR[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.iT(u)
$.iL[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.iR[q]=u
return u}if(s==="-"){r=H.iT(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.ko(a,u)
if(s==="*")throw H.f(P.k4(q))
if(v.leafTags[q]===true){r=H.iT(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.ko(a,u)},
ko:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jr(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
iT:function(a){return J.jr(a,!1,null,!!a.$iv)},
mn:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.iT(u)
else return J.jr(u,c,null,null)},
mi:function(){if(!0===$.jq)return
$.jq=!0
H.mj()},
mj:function(){var u,t,s,r,q,p,o,n
$.iL=Object.create(null)
$.iR=Object.create(null)
H.mh()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.kp.$1(q)
if(p!=null){o=H.mn(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
mh:function(){var u,t,s,r,q,p,o=C.w()
o=H.bp(C.x,H.bp(C.y,H.bp(C.p,H.bp(C.p,H.bp(C.z,H.bp(C.A,H.bp(C.B(C.o),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.km=new H.iO(r)
$.ki=new H.iP(q)
$.kp=new H.iQ(p)},
bp:function(a,b){return a(b)||b},
l1:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.f(new P.eQ("Illegal RegExp pattern ("+String(p)+")",a))},
ms:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
m9:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
kq:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
jt:function(a,b,c){var u=H.mt(a,b,c)
return u},
mt:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.kq(b),'g'),H.m9(c))},
hA:function hA(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fK:function fK(a,b){this.a=a
this.b=b},
f3:function f3(a,b,c){this.a=a
this.b=b
this.c=c},
hL:function hL(a){this.a=a},
iY:function iY(a){this.a=a},
dN:function dN(a){this.a=a
this.b=null},
by:function by(){},
ho:function ho(){},
hg:function hg(){},
bw:function bw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ek:function ek(a){this.a=a},
h0:function h0(a){this.a=a},
L:function L(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
f7:function f7(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cy:function cy(a,b){this.a=a
this.$ti=b},
f8:function f8(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
iO:function iO(a){this.a=a},
iP:function iP(a){this.a=a},
iQ:function iQ(a){this.a=a},
f2:function f2(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
c6:function(a){return a},
aZ:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.bs(b,a))},
lA:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.f(H.m8(a,b,c))
return b},
bI:function bI(){},
cH:function cH(){},
bH:function bH(){},
cI:function cI(){},
fB:function fB(){},
fC:function fC(){},
fD:function fD(){},
fE:function fE(){},
fF:function fF(){},
cJ:function cJ(){},
fG:function fG(){},
bZ:function bZ(){},
c_:function c_(){},
c0:function c0(){},
c1:function c1(){},
mb:function(a){return J.jI(a?Object.keys(a):[],null)},
mx:function(a){return v.mangledGlobalNames[a]},
mo:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jr:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iN:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.jq==null){H.mi()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.f(P.k4("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.ju()]
if(r!=null)return r
r=H.mm(a)
if(r!=null)return r
if(typeof a=="function")return C.I
u=Object.getPrototypeOf(a)
if(u==null)return C.r
if(u===Object.prototype)return C.r
if(typeof s=="function"){Object.defineProperty(s,$.ju(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
l0:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.f(P.jz(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.f(P.aj(a,0,4294967295,"length",null))
return J.jI(new Array(a),b)},
jI:function(a,b){return J.j8(H.b(a,[b]))},
j8:function(a){a.fixed$length=Array
return a},
Q:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cs.prototype
return J.f1.prototype}if(typeof a=="string")return J.aK.prototype
if(a==null)return J.ct.prototype
if(typeof a=="boolean")return J.f0.prototype
if(a.constructor==Array)return J.aJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aL.prototype
return a}if(a instanceof P.T)return a
return J.iN(a)},
jl:function(a){if(typeof a=="string")return J.aK.prototype
if(a==null)return a
if(a.constructor==Array)return J.aJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aL.prototype
return a}if(a instanceof P.T)return a
return J.iN(a)},
iM:function(a){if(a==null)return a
if(a.constructor==Array)return J.aJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aL.prototype
return a}if(a instanceof P.T)return a
return J.iN(a)},
kk:function(a){if(typeof a=="number")return J.bD.prototype
if(typeof a=="string")return J.aK.prototype
if(a==null)return a
if(!(a instanceof P.T))return J.bn.prototype
return a},
jm:function(a){if(typeof a=="string")return J.aK.prototype
if(a==null)return a
if(!(a instanceof P.T))return J.bn.prototype
return a},
jn:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aL.prototype
return a}if(a instanceof P.T)return a
return J.iN(a)},
B:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.Q(a).p(a,b)},
jw:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.kk(a).q(a,b)},
e9:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.ml(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.jl(a).i(a,b)},
kJ:function(a,b,c,d){return J.jn(a).fc(a,b,c,d)},
iZ:function(a,b){return J.kk(a).fn(a,b)},
j_:function(a,b){return J.iM(a).A(a,b)},
kK:function(a,b){return J.iM(a).H(a,b)},
kL:function(a){return J.jn(a).gfj(a)},
b2:function(a){return J.Q(a).gF(a)},
b3:function(a){return J.iM(a).gO(a)},
b4:function(a){return J.jl(a).gl(a)},
jx:function(a){return J.iM(a).h1(a)},
kM:function(a,b,c){return J.jm(a).aT(a,b,c)},
kN:function(a){return J.jm(a).hb(a)},
ab:function(a){return J.Q(a).h(a)},
a:function a(){},
f0:function f0(){},
ct:function ct(){},
cu:function cu(){},
fO:function fO(){},
bn:function bn(){},
aL:function aL(){},
aJ:function aJ(a){this.$ti=a},
j9:function j9(a){this.$ti=a},
X:function X(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bD:function bD(){},
cs:function cs(){},
f1:function f1(){},
aK:function aK(){}},P={
lq:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.m3()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.br(new P.i8(s),1)).observe(u,{childList:true})
return new P.i7(s,u,t)}else if(self.setImmediate!=null)return P.m4()
return P.m5()},
lr:function(a){self.scheduleImmediate(H.br(new P.i9(a),0))},
ls:function(a){self.setImmediate(H.br(new P.ia(a),0))},
lt:function(a){P.je(C.i,a)},
je:function(a,b){var u=C.d.X(a.a,1000)
return P.ly(u<0?0:u,b)},
k2:function(a,b){var u=C.d.X(a.a,1000)
return P.lz(u<0?0:u,b)},
ly:function(a,b){var u=new P.dT()
u.dz(a,b)
return u},
lz:function(a,b){var u=new P.dT()
u.dA(a,b)
return u},
lX:function(){var u,t
for(;u=$.bo,u!=null;){$.c8=null
t=u.b
$.bo=t
if(t==null)$.c7=null
u.a.$0()}},
m1:function(){$.ji=!0
try{P.lX()}finally{$.c8=null
$.ji=!1
if($.bo!=null)$.jv().$1(P.kj())}},
m_:function(a){var u=new P.dd(a)
if($.bo==null){$.bo=$.c7=u
if(!$.ji)$.jv().$1(P.kj())}else $.c7=$.c7.b=u},
m0:function(a){var u,t,s=$.bo
if(s==null){P.m_(a)
$.c8=$.c7
return}u=new P.dd(a)
t=$.c8
if(t==null){u.b=s
$.bo=$.c8=u}else{u.b=t.b
$.c8=t.b=u
if(u.b==null)$.c7=u}},
k1:function(a,b){var u=$.aa
if(u===C.e)return P.je(a,b)
return P.je(a,u.fk(b))},
ln:function(a,b){var u=$.aa
if(u===C.e)return P.k2(a,b)
return P.k2(a,u.ct(b,P.d0))},
kg:function(a,b,c,d,e){var u={}
u.a=d
P.m0(new P.iI(u,e))},
lY:function(a,b,c,d){var u,t=$.aa
if(t===c)return d.$0()
$.aa=c
u=t
try{t=d.$0()
return t}finally{$.aa=u}},
lZ:function(a,b,c,d,e){var u,t=$.aa
if(t===c)return d.$1(e)
$.aa=c
u=t
try{t=d.$1(e)
return t}finally{$.aa=u}},
i8:function i8(a){this.a=a},
i7:function i7(a,b,c){this.a=a
this.b=b
this.c=c},
i9:function i9(a){this.a=a},
ia:function ia(a){this.a=a},
dT:function dT(){this.c=0},
iC:function iC(a,b){this.a=a
this.b=b},
iB:function iB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dd:function dd(a){this.a=a
this.b=null},
cX:function cX(){},
hj:function hj(){},
d0:function d0(){},
iF:function iF(){},
iI:function iI(a,b){this.a=a
this.b=b},
ip:function ip(){},
iq:function iq(a,b){this.a=a
this.b=b},
ir:function ir(a,b,c){this.a=a
this.b=b
this.c=c},
jJ:function(a,b){return new H.L([a,b])},
l2:function(a){return H.mc(a,new H.L([null,null]))},
cz:function(a){return new P.il([a])},
jh:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
lx:function(a,b){var u=new P.du(a,b)
u.c=a.e
return u},
kZ:function(a,b,c){var u,t
if(P.jj(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.p])
$.W.push(a)
try{P.lC(a,u)}finally{if(0>=$.W.length)return H.c($.W,-1)
$.W.pop()}t=P.k_(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
j7:function(a,b,c){var u,t
if(P.jj(a))return b+"..."+c
u=new P.as(b)
$.W.push(a)
try{t=u
t.a=P.k_(t.a,a,", ")}finally{if(0>=$.W.length)return H.c($.W,-1)
$.W.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jj:function(a){var u,t
for(u=$.W.length,t=0;t<u;++t)if(a===$.W[t])return!0
return!1},
lC:function(a,b){var u,t,s,r,q,p,o,n=a.gO(a),m=0,l=0
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
jK:function(a,b){var u,t,s=P.cz(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.q)(a),++t)s.m(0,a[t])
return s},
jM:function(a){var u,t={}
if(P.jj(a))return"{...}"
u=new P.as("")
try{$.W.push(a)
u.a+="{"
t.a=!0
J.kK(a,new P.fd(t,u))
u.a+="}"}finally{if(0>=$.W.length)return H.c($.W,-1)
$.W.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
il:function il(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
im:function im(a){this.a=a
this.c=this.b=null},
du:function du(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
f9:function f9(){},
o:function o(){},
fc:function fc(){},
fd:function fd(a,b){this.a=a
this.b=b},
ao:function ao(){},
it:function it(){},
dv:function dv(){},
em:function em(){},
ep:function ep(){},
eE:function eE(){},
eX:function eX(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
eW:function eW(a){this.a=a},
hP:function hP(){},
hQ:function hQ(){},
iD:function iD(a){this.b=0
this.c=a},
kX:function(a){if(a instanceof H.by)return a.h(0)
return"Instance of '"+H.e(H.bL(a))+"'"},
l3:function(a,b,c){var u,t,s=J.l0(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
jL:function(a,b,c){var u,t=H.b([],[c])
for(u=J.b3(a);u.u();)t.push(u.gE(u))
if(b)return t
return J.j8(t)},
jd:function(a){var u,t
if(a.constructor===Array){u=a.length
t=P.jW(0,null,u)
return H.jU(t<u?C.a.dd(a,0,t):a)}return P.ll(a,0,null)},
ll:function(a,b,c){var u,t,s=J.b3(a)
for(u=0;u<b;++u)if(!s.u())throw H.f(P.aj(b,0,u,null,null))
t=[]
for(;s.u();)t.push(s.gE(s))
return H.jU(t)},
lf:function(a){return new H.f2(a,H.l1(a,!1,!0,!1,!1,!1))},
k_:function(a,b,c){var u=J.b3(b)
if(!u.u())return a
if(c.length===0){do a+=H.e(u.gE(u))
while(u.u())}else{a+=H.e(u.gE(u))
for(;u.u();)a=a+c+H.e(u.gE(u))}return a},
ke:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.f){u=$.kI().b
u=u.test(b)}else u=!1
if(u)return b
t=C.D.fo(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.c(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.jc(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
kU:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
kV:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cj:function(a){if(a>=10)return""+a
return"0"+a},
jF:function(a){return new P.aF(1000*a)},
j6:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ab(a)
if(typeof a==="string")return JSON.stringify(a)
return P.kX(a)},
jz:function(a,b,c){return new P.ac(!0,a,b,c)},
cQ:function(a,b){return new P.bi(null,null,!0,a,b,"Value not in range")},
aj:function(a,b,c,d,e){return new P.bi(b,c,!0,a,d,"Invalid value")},
jW:function(a,b,c){if(0>a||a>c)throw H.f(P.aj(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.f(P.aj(b,a,c,"end",null))
return b}return c},
jV:function(a,b){if(typeof a!=="number")return a.a1()
if(a<0)throw H.f(P.aj(a,0,null,b,null))},
F:function(a,b,c,d,e){var u=e==null?J.b4(b):e
return new P.eY(u,!0,a,c,"Index out of range")},
a6:function(a){return new P.hN(a)},
k4:function(a){return new P.hK(a)},
jZ:function(a){return new P.bN(a)},
aE:function(a){return new P.eo(a)},
r:function(a){return new P.dl(a)},
js:function(a){H.mo(a)},
al:function al(){},
a1:function a1(a,b){this.a=a
this.b=b},
J:function J(){},
aF:function aF(a){this.a=a},
eA:function eA(){},
eB:function eB(){},
b9:function b9(){},
cM:function cM(){},
ac:function ac(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bi:function bi(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eY:function eY(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hN:function hN(a){this.a=a},
hK:function hK(a){this.a=a},
bN:function bN(a){this.a=a},
eo:function eo(a){this.a=a},
fN:function fN(){},
cV:function cV(){},
eu:function eu(a){this.a=a},
dl:function dl(a){this.a=a},
eQ:function eQ(a,b){this.a=a
this.b=b},
eS:function eS(){},
w:function w(){},
i:function i(){},
f_:function f_(){},
af:function af(){},
cC:function cC(){},
aO:function aO(){},
a8:function a8(){},
T:function T(){},
p:function p(){},
as:function as(a){this.a=a},
av:function(a){var u,t,s,r,q
if(a==null)return
u=P.jJ(P.p,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.q)(t),++r){q=t[r]
u.n(0,q,a[q])}return u},
m6:function(a){var u={}
a.H(0,new P.iJ(u))
return u},
iJ:function iJ(a){this.a=a},
eM:function eM(a,b){this.a=a
this.b=b},
eN:function eN(){},
eO:function eO(){},
ik:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lw:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
io:function io(){},
a4:function a4(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bf:function bf(){},
f5:function f5(){},
bg:function bg(){},
fL:function fL(){},
fT:function fT(){},
bM:function bM(){},
hk:function hk(){},
j:function j(){},
bk:function bk(){},
hz:function hz(){},
ds:function ds(){},
dt:function dt(){},
dD:function dD(){},
dE:function dE(){},
dP:function dP(){},
dQ:function dQ(){},
dW:function dW(){},
dX:function dX(){},
ee:function ee(){},
ef:function ef(){},
eg:function eg(a){this.a=a},
eh:function eh(){},
b5:function b5(){},
fM:function fM(){},
de:function de(){},
hf:function hf(){},
dL:function dL(){},
dM:function dM(){}},W={
jy:function(){var u=document.createElement("a")
return u},
jC:function(){var u=document.createElement("canvas")
return u},
kW:function(a,b,c){var u=document.body,t=(u&&C.n).a3(u,a,b,c)
t.toString
u=new H.bW(new W.U(t),new W.eD(),[W.G])
return u.gav(u)},
j4:function(a){return"wheel"},
bA:function(a){var u,t,s,r="element tag unavailable"
try{u=J.jn(a)
t=u.gd1(a)
if(typeof t==="string")r=u.gd1(a)}catch(s){H.aw(s)}return r},
ij:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kc:function(a,b,c,d){var u=W.ij(W.ij(W.ij(W.ij(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
R:function(a,b,c,d){var u=W.kh(new W.ih(c),W.h)
if(u!=null&&!0)J.kJ(a,b,u,!1)
return new W.ig(a,b,u,!1)},
kb:function(a){var u=W.jy(),t=window.location
u=new W.bY(new W.is(u,t))
u.ds(a)
return u},
lu:function(a,b,c,d){return!0},
lv:function(a,b,c,d){var u,t=d.a,s=t.a
s.href=c
u=s.hostname
t=t.b
if(!(u==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(u==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
kd:function(){var u=P.p,t=P.jK(C.k,u),s=H.b(["TEMPLATE"],[u])
t=new W.iz(t,P.cz(u),P.cz(u),P.cz(u),null)
t.dw(null,new H.fg(C.k,new W.iA(),[H.bu(C.k,0),u]),s,null)
return t},
kh:function(a,b){var u=$.aa
if(u===C.e)return a
return u.ct(a,b)},
k:function k(){},
ea:function ea(){},
eb:function eb(){},
ec:function ec(){},
cd:function cd(){},
b6:function b6(){},
b7:function b7(){},
aB:function aB(){},
eq:function eq(){},
C:function C(){},
bz:function bz(){},
er:function er(){},
a0:function a0(){},
ae:function ae(){},
es:function es(){},
et:function et(){},
ew:function ew(){},
a9:function a9(){},
ex:function ex(){},
cl:function cl(){},
cm:function cm(){},
ey:function ey(){},
ez:function ez(){},
ic:function ic(a,b){this.a=a
this.b=b},
N:function N(){},
eD:function eD(){},
h:function h(){},
d:function d(){},
aH:function aH(){},
eK:function eK(){},
eL:function eL(){},
eP:function eP(){},
aI:function aI(){},
eV:function eV(){},
bC:function bC(){},
be:function be(){},
fa:function fa(){},
fu:function fu(){},
fv:function fv(){},
fw:function fw(a){this.a=a},
fx:function fx(){},
fy:function fy(a){this.a=a},
aN:function aN(){},
fz:function fz(){},
ai:function ai(){},
U:function U(a){this.a=a},
G:function G(){},
cK:function cK(){},
aP:function aP(){},
fQ:function fQ(){},
fZ:function fZ(){},
h_:function h_(a){this.a=a},
h1:function h1(){},
aR:function aR(){},
hc:function hc(){},
aS:function aS(){},
hd:function hd(){},
aT:function aT(){},
hh:function hh(){},
hi:function hi(a){this.a=a},
at:function at(){},
cY:function cY(){},
hl:function hl(){},
hm:function hm(){},
bO:function bO(){},
aU:function aU(){},
au:function au(){},
hp:function hp(){},
hq:function hq(){},
ht:function ht(){},
aV:function aV(){},
bj:function bj(){},
hx:function hx(){},
hy:function hy(){},
aW:function aW(){},
hO:function hO(){},
i4:function i4(){},
aY:function aY(){},
bX:function bX(){},
id:function id(){},
dg:function dg(){},
ii:function ii(){},
dA:function dA(){},
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
bY:function bY(a){this.a=a},
E:function E(){},
cL:function cL(a){this.a=a},
fI:function fI(a){this.a=a},
fH:function fH(a,b,c){this.a=a
this.b=b
this.c=c},
dI:function dI(){},
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
cp:function cp(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
ar:function ar(){},
is:function is(a,b){this.a=a
this.b=b},
dY:function dY(a){this.a=a},
iE:function iE(a){this.a=a},
df:function df(){},
dh:function dh(){},
di:function di(){},
dj:function dj(){},
dk:function dk(){},
dm:function dm(){},
dn:function dn(){},
dq:function dq(){},
dr:function dr(){},
dw:function dw(){},
dx:function dx(){},
dy:function dy(){},
dz:function dz(){},
dB:function dB(){},
dC:function dC(){},
dF:function dF(){},
dG:function dG(){},
dH:function dH(){},
c2:function c2(){},
c3:function c3(){},
dJ:function dJ(){},
dK:function dK(){},
dO:function dO(){},
dR:function dR(){},
dS:function dS(){},
c4:function c4(){},
c5:function c5(){},
dU:function dU(){},
dV:function dV(){},
dZ:function dZ(){},
e_:function e_(){},
e0:function e0(){},
e1:function e1(){},
e2:function e2(){},
e3:function e3(){},
e4:function e4(){},
e5:function e5(){},
e6:function e6(){},
e7:function e7(){}},T={
H:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.f(P.r("The given low and high character strings for a Range must have one and only one characters."))
u=C.b.az(a,0)
t=C.b.az(b,0)
s=new T.fU()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
m:function(a){var u=new T.h2()
u.dm(a)
return u},
am:function am(){},
cq:function cq(){},
aM:function aM(){},
V:function V(){this.a=null},
fU:function fU(){this.b=this.a=null},
h2:function h2(){this.a=null},
hr:function hr(){}},R={
hv:function(){var u=new R.hu(),t=P.p
u.a=new H.L([t,R.cW])
u.b=new H.L([t,R.d2])
return u},
cW:function cW(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
d1:function d1(a,b,c){this.a=a
this.b=b
this.c=c},
d2:function d2(a){this.b=a
this.c=null},
hu:function hu(){this.c=this.b=this.a=null},
d4:function d4(a){this.b=a
this.a=this.c=null}},O={
j2:function(a){var u=new O.aC([a])
u.bb(a)
return u},
aC:function aC(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bF:function bF(){this.b=this.a=null},
cD:function cD(){var _=this
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
fi:function fi(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cE:function cE(){},
fj:function fj(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
ag:function ag(a,b){var _=this
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
cZ:function cZ(){}},E={
lg:function(a,b){var u=new E.fV(a)
u.dl(a,b)
return u},
lm:function(a,b,c,d,e){var u,t,s=J.Q(a)
if(!!s.$ib7)return E.k0(a,!0,!0,!0,!1)
u=W.jC()
t=u.style
t.width="100%"
t.height="100%"
s.gcv(a).m(0,u)
return E.k0(u,!0,!0,!0,!1)},
k0:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.d_(),p=C.h.d7(a,"webgl2",P.l2(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.t(P.r("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.lg(p,a)
p.getParameter(3379)
p.getParameter(34076)
u=new X.d8(a)
t=new X.f4()
t.c=new X.a2(!1,!1,!1)
t.d=P.cz(P.w)
u.b=t
t=new X.fA(u)
t.f=0
t.r=V.aQ()
t.x=V.aQ()
t.ch=t.Q=1
u.c=t
t=new X.fb(u)
t.r=0
t.x=V.aQ()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hw(u)
t.f=V.aQ()
t.r=V.aQ()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.b([],[[P.cX,P.T]])
u.z=t
s=document
t.push(W.R(s,"contextmenu",u.ged(),!1))
u.z.push(W.R(a,"focus",u.gej(),!1))
u.z.push(W.R(a,"blur",u.ge5(),!1))
u.z.push(W.R(s,"keyup",u.gen(),!1))
u.z.push(W.R(s,"keydown",u.gel(),!1))
u.z.push(W.R(a,"mousedown",u.ger(),!1))
u.z.push(W.R(a,"mouseup",u.gew(),!1))
u.z.push(W.R(a,r,u.geu(),!1))
t=u.z
W.j4(a)
W.j4(a)
t.push(W.R(a,W.j4(a),u.gey(),!1))
u.z.push(W.R(s,r,u.gef(),!1))
u.z.push(W.R(s,"mouseup",u.geh(),!1))
u.z.push(W.R(s,"pointerlockchange",u.geA(),!1))
u.z.push(W.R(a,"touchstart",u.geN(),!1))
u.z.push(W.R(a,"touchend",u.geJ(),!1))
u.z.push(W.R(a,"touchmove",u.geL(),!1))
q.r=u
q.Q=!0
q.ch=!1
q.cx=new P.a1(Date.now(),!1)
q.cy=0
q.ci()
return q},
ei:function ei(){},
aG:function aG(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fV:function fV(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fW:function fW(a){this.a=a},
fX:function fX(a){this.a=a},
fY:function fY(a){this.a=a},
d_:function d_(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=null},
hs:function hs(a){this.a=a}},Z={
lp:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.c6(c)),35044)
a.bindBuffer(b,null)
return new Z.dc(b,u)},
a7:function(a){return new Z.aX(a)},
dc:function dc(a,b){this.a=a
this.b=b},
ce:function ce(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
i5:function i5(a){this.a=a},
cf:function cf(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
cr:function cr(a,b,c){this.a=a
this.b=b
this.c=c},
aX:function aX(a){this.a=a}},D={
D:function(){var u=new D.ba()
u.d=0
return u},
el:function el(){},
ba:function ba(){var _=this
_.d=_.c=_.b=_.a=null},
eG:function eG(a){this.a=a},
eH:function eH(a){this.a=a},
O:function O(){this.b=null},
bc:function bc(){this.b=null},
bd:function bd(){this.b=null},
y:function y(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
b8:function b8(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
Y:function Y(){},
cw:function cw(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
fR:function fR(){},
he:function he(){}},X={cg:function cg(a,b){this.a=a
this.b=b},cv:function cv(a,b){this.a=a
this.b=b},f4:function f4(){var _=this
_.d=_.c=_.b=_.a=null},cB:function cB(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fb:function fb(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},a2:function a2(a,b,c){this.a=a
this.b=b
this.c=c},aq:function aq(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},fA:function fA(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bG:function bG(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fS:function fS(){},d3:function d3(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},hw:function hw(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},d8:function d8(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
kY:function(a){var u=new X.eR(),t=new V.aD(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.jY
if(t==null){t=V.jX(0,0,1,1)
$.jY=t}u.r=t
return u},
j1:function j1(){},
eR:function eR(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cN:function cN(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
hn:function hn(){}},V={
my:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.d8(a-b,u)
return(a<0?a+u:a)+b},
K:function(a,b,c){if(a==null)return C.b.aq("null",c)
return C.b.aq(C.c.d3(Math.abs(a-0)<$.x().a?0:a,b),c+b+1)},
bt:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.p])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.q)(a),++s){r=V.K(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.c(o,q)
u=C.b.aq(o[q],t)
p=o.length
if(q>=p)return H.c(o,q)
o[q]=u}return o},
cG:function(){var u=$.jO
return u==null?$.jO=V.ah(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
ah:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ap(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
jN:function(a,b,c){var u=c.t(0,Math.sqrt(c.w(c))),t=b.al(u),s=t.t(0,Math.sqrt(t.w(t))),r=u.al(s),q=new V.z(a.a,a.b,a.c),p=s.M(0).w(q),o=r.M(0).w(q),n=u.M(0).w(q)
return V.ah(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
aQ:function(){var u=$.jR
return u==null?$.jR=new V.a3(0,0):u},
jS:function(){var u=$.bJ
return u==null?$.bJ=new V.a_(0,0,0):u},
jX:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cR(a,b,c,d)},
bU:function(){var u=$.k8
return u==null?$.k8=new V.z(0,0,0):u},
lo:function(){var u=$.hR
return u==null?$.hR=new V.z(-1,0,0):u},
jg:function(){var u=$.hS
return u==null?$.hS=new V.z(0,1,0):u},
k9:function(){var u=$.hT
return u==null?$.hT=new V.z(0,0,1):u},
M:function M(a,b,c){this.a=a
this.b=b
this.c=c},
aD:function aD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eF:function eF(a){this.a=a},
cF:function cF(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ap:function ap(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a3:function a3(a,b){this.a=a
this.b=b},
a_:function a_(a,b,c){this.a=a
this.b=b
this.c=c},
cR:function cR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
A:function A(a,b){this.a=a
this.b=b},
z:function z(a,b,c){this.a=a
this.b=b
this.c=c},
mr:function(a){P.ln(C.F,new V.iU(a))},
li:function(a){var u=new V.h7()
u.dq(a,!0)
return u},
ch:function ch(){},
iU:function iU(a){this.a=a},
ev:function ev(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eT:function eT(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eU:function eU(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fP:function fP(a){var _=this
_.a=a
_.d=_.c=_.b=null},
h7:function h7(){this.b=this.a=null},
h9:function h9(a){this.a=a},
h8:function h8(a){this.a=a},
ha:function ha(a){this.a=a}},U={
j3:function(){var u=new U.en()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
jE:function(a){var u=new U.ci()
u.a=a
return u},
en:function en(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ci:function ci(){this.b=this.a=null},
bB:function bB(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
Z:function Z(){},
d9:function d9(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
da:function da(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
db:function db(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cn:function cn(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
l4:function(a,b){var u=a.aP,t=new A.fh(b,u)
t.dn(b,u)
t.dk(a,b)
return t},
l5:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="MaterialLight_"+a0.ga7(a0)+a1.ga7(a1)+a2.ga7(a2)+a3.ga7(a3)+a4.ga7(a4)+a5.ga7(a5)+a6.ga7(a6)+a7.ga7(a7)+a8.ga7(a8)+"_"
f+=a?"1":"0"
f+=b?"1":"0"
f+=c?"1":"0"
f=f+"0_"+e
u=a9.length
if(u>0){f+="_Dir"
for(t=0;t<a9.length;a9.length===u||(0,H.q)(a9),++t)f+="_"+H.e(a9[t].a)}u=b0.length
if(u>0){f+="_Point"
for(t=0;t<b0.length;b0.length===u||(0,H.q)(b0),++t)f+="_"+H.e(b0[t].a)}u=b1.length
if(u>0){f+="_Spot"
for(t=0;t<b1.length;b1.length===u||(0,H.q)(b1),++t)f+="_"+H.e(b1[t].a)}for(u=a9.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=a9[t].b
for(u=b0.length,t=0;t<u;++t,r=!0)s+=b0[t].b
for(q=b1.length,t=0;t<q;++t,r=!0)s+=b1[t].b
if(!a6.a)q=!1
else q=!0
if(!q)if(!a7.a)p=!1
else p=!0
else p=!0
if(!a1.a)q=!1
else q=!0
if(!q){if(!a2.a)q=!1
else q=!0
if(!q){if(!a3.a)q=!1
else q=!0
if(!q)if(!a4.a)q=!1
else q=!0
else q=!0
o=q}else o=!0}else o=!0
q=!a4.a
if(q)n=!1
else n=!0
m=n||u>0||p
if(!a2.a)u=!1
else u=!0
if(!u){if(!a3.a)u=!1
else u=!0
if(!u){if(q)u=!1
else u=!0
l=u}else l=!0}else l=!0
if(!l){if(!a5.a)u=!1
else u=!0
k=u||p}else k=!0
if(!a5.a)j=!1
else j=!0
i=e>0
h=k||j||m||!1
g=$.aA()
if(k){u=$.az()
g=new Z.aX(g.a|u.a)}if(j){u=$.ay()
g=new Z.aX(g.a|u.a)}if(i){u=$.ax()
g=new Z.aX(g.a|u.a)}return new A.fk(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,s,p,l,p,r,h,!0,!1,!1,o,r,m,k,j,!1,!1,i,!1,!1,c,!1,e,f.charCodeAt(0)==0?f:f,g)},
iG:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
iH:function(a,b,c){var u
A.iG(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.iW(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
lG:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.iG(b,t,"emission")
t=b.a+="\n"
t+="vec3 emissionColor()\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   return emissionClr;\n"
b.a=t}t+="}\n"
b.a=t
b.a=t+"\n"},
lD:function(a,b){var u,t=a.b
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.iH(b,t,"ambient")
b.a+="\n"},
lE:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.iH(b,t,"diffuse")
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
lH:function(a,b){var u,t=a.d
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.iH(b,t,"invDiffuse")
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
lN:function(a,b){var u,t=a.e
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.iH(b,t,"specular")
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
lJ:function(a,b){var u,t,s
if(!a.k3)return
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
lL:function(a,b){var u,t=a.r,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.iG(b,t,"reflect")
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
lM:function(a,b){var u,t=a.x,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.iG(b,t,"refract")
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
lF:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.e(u)
s=A.iW(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.ae()
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
r=[P.p]
o=H.b([],r)
if(!a.b.a)n=!1
else n=!0
if(n)o.push("ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
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
lK:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.e(u)
s=A.iW(t)
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
if(typeof u!=="number")return u.ae()
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
c.a=r+"\n"}r=[P.p]
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
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
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
lO:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.e(u)
s=A.iW(t)
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
if(typeof u!=="number")return u.ae()
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
c.a=u+"\n"}u=[P.p]
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
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
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
lI:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.b([],[P.p])
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
lP:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.as("")
j.a="precision mediump float;\n"
j.a=l
u=a.k3
if(u){j.a=k
t=k}else t=l
if(a.k4){t+="varying vec3 binormalVec;\n"
j.a=t}if(a.r1){t+="varying vec2 txt2D;\n"
j.a=t}if(a.r2){t+="varying vec3 txtCube;\n"
j.a=t}if(a.k1){t+="varying vec3 objPos;\n"
j.a=t}t=j.a=(a.k2?j.a=t+"varying vec3 viewPos;\n":t)+"\n"
s=a.x2
if(s){t+="uniform mat4 colorMat;\n"
j.a=t}if(a.dx)t=j.a=t+"uniform mat4 invViewMat;\n"
j.a=t+"\n"
A.lG(a,j)
A.lD(a,j)
A.lE(a,j)
A.lH(a,j)
A.lN(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.lL(a,j)
A.lM(a,j)}A.lJ(a,j)
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
r=a.id
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.q)(q),++o)A.lF(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.q)(q),++o)A.lK(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.q)(q),++o)A.lO(a,q[o],j)
A.lI(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.b([],[P.p])
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.q)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.af(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.q)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.af(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.q)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.af(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)u=!1
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
lQ:function(a,b){var u,t,s
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
lS:function(a,b){var u
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
lR:function(a,b){var u
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
lU:function(a,b){var u,t
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
lV:function(a,b){var u,t
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
lT:function(a,b){var u
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
lW:function(a,b){var u
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
iW:function(a){if(0>=a.length)return H.c(a,0)
return a[0].toUpperCase()+C.b.af(a,1)},
jf:function(a,b,c,d,e){var u=new A.hD(a,c,e)
u.f=d
P.l3(d,0,P.w)
return u},
cc:function cc(a,b,c){this.a=a
this.b=b
this.c=c},
ed:function ed(a){this.a=a},
S:function S(a,b,c){this.a=a
this.b=b
this.c=c},
fh:function fh(a,b){var _=this
_.hi=_.hh=_.cF=_.cE=_.aP=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.hv=_.hu=_.ht=_.bG=_.bF=_.bE=_.bD=_.bC=_.bB=_.hs=_.hr=_.cM=_.hq=_.hp=_.cL=_.cK=_.ho=_.hn=_.cJ=_.cI=_.hm=_.hl=_.cH=_.hk=_.hj=_.cG=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ck:function ck(a,b){this.a=a
this.b=b},
cP:function cP(a,b){this.a=a
this.b=b},
cU:function cU(a,b){this.a=a
this.b=b},
fk:function fk(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.aP=b3
_.cE=b4},
bQ:function bQ(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
bS:function bS(a,b,c,d,e,f,g,h,i,j){var _=this
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
bT:function bT(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cS:function cS(){},
d5:function d5(){},
hI:function hI(a){this.a=a},
d6:function d6(a,b,c){this.a=a
this.c=b
this.d=c},
hF:function hF(a,b,c){this.a=a
this.c=b
this.d=c},
hG:function hG(a,b,c){this.a=a
this.c=b
this.d=c},
hH:function hH(a,b,c){this.a=a
this.c=b
this.d=c},
hD:function hD(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
P:function P(a,b,c){this.a=a
this.c=b
this.d=c},
hE:function hE(a,b,c){this.a=a
this.c=b
this.d=c},
I:function I(a,b,c){this.a=a
this.c=b
this.d=c},
bP:function bP(a,b,c){this.a=a
this.c=b
this.d=c},
hJ:function hJ(a,b,c){this.a=a
this.c=b
this.d=c},
bR:function bR(a,b,c){this.a=a
this.c=b
this.d=c},
a5:function a5(a,b,c){this.a=a
this.c=b
this.d=c},
bl:function bl(a,b,c){this.a=a
this.c=b
this.d=c},
bm:function bm(a,b,c){this.a=a
this.c=b
this.d=c}},F={
mw:function(){return F.m7(15,30,0.5,1,new F.iX())},
m7:function(a,b,c,d,e){var u=F.mu(a,b,new F.iK(e,d,b,c))
if(u==null)return
u.aD()
u.fM(new F.hZ(),new F.fJ())
return u},
mu:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
if(a<1)return
if(b<1)return
u=new F.h3()
t=new F.hU(u)
t.b=!1
s=[F.bV]
t.c=H.b([],s)
u.a=t
t=new F.h6()
t.b=H.b([],[F.cO])
u.b=t
t=new F.h5(u)
t.b=H.b([],[F.cx])
u.c=t
t=new F.h4(u)
t.b=H.b([],[F.bb])
u.d=t
u.e=null
r=H.b([],s)
for(q=0;q<=b;++q){p=q/b
t=u.a
if(p<0)s=0
else s=p>1?1:p
o=t.cq(new V.aD(s,0,0,1),new V.a3(p,1))
c.$3(o,p,0)
r.push(o.cB(null))}for(q=1;q<=a;++q){n=q/a
for(t=n>1,s=n<0,m=1-n,l=0;l<=b;++l){p=l/b
k=u.a
if(p<0)j=0
else j=p>1?1:p
if(s)i=0
else i=t?1:n
if(s)h=0
else h=t?1:n
o=k.cq(new V.aD(j,i,h,1),new V.a3(p,m))
c.$3(o,p,n)
r.push(o.cB(null))}}u.d.fd(a+1,b+1,r)
return u},
eI:function(a,b,c){var u=new F.bb(),t=a.a
if(t==null)H.t(P.r("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.t(P.r("May not create a face with vertices attached to different shapes."))
u.f_(a)
u.f0(b)
u.f1(c)
u.a.a.d.b.push(u)
u.a.a.a0()
return u},
ka:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.bV(),r=new F.i1()
r.b=H.b([],[F.cO])
s.b=r
r=new F.hY()
u=[F.cx]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.hV()
u=[F.bb]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.kE()
s.e=0
r=$.aA()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.az().a)!==0?e:t
s.x=(u&$.ay().a)!==0?b:t
s.y=(u&$.b0().a)!==0?f:t
s.z=(u&$.b1().a)!==0?g:t
s.Q=(u&$.kF().a)!==0?c:t
s.ch=(u&$.bv().a)!==0?i:0
s.cx=(u&$.ax().a)!==0?a:t
return s},
iX:function iX(){},
iK:function iK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bb:function bb(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
eJ:function eJ(){},
hb:function hb(){},
cx:function cx(){},
f6:function f6(){},
hC:function hC(){},
cO:function cO(){},
h3:function h3(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
h4:function h4(a){this.a=a
this.b=null},
h5:function h5(a){this.a=a
this.b=null},
h6:function h6(){this.b=null},
bV:function bV(){var _=this
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
fJ:function fJ(){},
i1:function i1(){this.b=null}},Q={
kn:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="testCanvas",d=null,c="modifiers",b=V.li("Test 009"),a=W.jC()
a.className="pageLargeCanvas"
a.id=e
b.a.appendChild(a)
u=[P.p]
b.cr(H.b(["Another test of the Material Lighting shader with solid color and ","a directional lighting. The light and object don't move but the camera can be ","moved around the object."],u))
b.cr(H.b(["\xab[Back to Tests|../]"],u))
t=document.getElementById(e)
if(t==null)H.t(P.r("Failed to find an element with the identifier, testCanvas."))
s=E.lm(t,!0,!0,!0,!1)
r=new E.aG()
r.a=""
r.b=!0
u=E.aG
q=O.j2(u)
r.y=q
q.aS(r.gfN(),r.gfQ())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.sbX(0,d)
r.sbX(0,F.mw())
p=new O.cD()
q=O.j2(V.ap)
p.e=q
q.aS(p.ge1(),p.ge3())
q=new O.ag(p,"emission")
q.c=new A.S(!1,!1,!1)
q.f=new V.M(0,0,0)
p.f=q
q=new O.ag(p,"ambient")
q.c=new A.S(!1,!1,!1)
q.f=new V.M(0,0,0)
p.r=q
q=new O.ag(p,"diffuse")
q.c=new A.S(!1,!1,!1)
q.f=new V.M(0,0,0)
p.x=q
q=new O.ag(p,"invDiffuse")
q.c=new A.S(!1,!1,!1)
q.f=new V.M(0,0,0)
p.y=q
q=new O.fn(p,"specular")
q.c=new A.S(!1,!1,!1)
q.f=new V.M(0,0,0)
q.ch=100
p.z=q
q=new O.fj(p,"bump")
q.c=new A.S(!1,!1,!1)
p.Q=q
p.ch=null
q=new O.ag(p,"reflect")
q.c=new A.S(!1,!1,!1)
q.f=new V.M(0,0,0)
p.cx=q
q=new O.fm(p,"refract")
q.c=new A.S(!1,!1,!1)
q.f=new V.M(0,0,0)
q.ch=1
p.cy=q
q=new O.fi(p,"alpha")
q.c=new A.S(!1,!1,!1)
q.f=1
p.db=q
q=new D.cw()
q.bb(D.Y)
q.e=H.b([],[D.b8])
q.f=H.b([],[D.fR])
q.r=H.b([],[D.he])
q.y=q.x=null
q.bW(q.ge_(),q.geD(),q.geH())
p.dx=q
o=new O.fl()
o.b=new V.aD(0,0,0,0)
o.c=1
o.d=10
o.e=!1
p.dy=o
o=q.x
q=o==null?q.x=D.D():o
q.m(0,p.geV())
q=p.dx
o=q.y
q=o==null?q.y=D.D():o
q.m(0,p.ge7())
p.fr=null
q=p.dx
n=V.jg()
o=U.jE(V.jN(V.jS(),n,new V.z(-1,-1,-1)))
m=new V.M(1,1,1)
l=new D.b8()
l.c=new V.M(1,1,1)
l.a=V.k9()
l.d=V.jg()
l.e=V.lo()
k=l.b
l.b=o
o.gv().m(0,l.gdt())
o=new D.y("mover",k,l.b)
o.b=!0
l.ag(o)
if(!l.c.p(0,m)){k=l.c
l.c=m
o=new D.y("color",k,m)
o.b=!0
l.ag(o)}q.m(0,l)
p.f.saF(0,new V.M(0,0,0))
q=p.r
q.saF(0,new V.M(0,0,1))
q=p.x
q.saF(0,new V.M(0,1,0))
q=p.z
q.saF(0,new V.M(1,0,0))
q=p.z
q.ck(new A.S(!0,!1,!1))
q.cl(10)
j=new U.bB()
j.bb(U.Z)
j.aS(j.gdY(),j.geF())
j.e=null
j.f=V.cG()
j.r=0
q=s.r
o=new U.da()
l=U.j3()
l.sbU(0,!0)
l.sbK(6.283185307179586)
l.sbM(0)
l.sZ(0,0)
l.sbL(100)
l.sP(0)
l.sbA(0.5)
o.b=l
i=o.gax()
l.gv().m(0,i)
l=U.j3()
l.sbU(0,!0)
l.sbK(6.283185307179586)
l.sbM(0)
l.sZ(0,0)
l.sbL(100)
l.sP(0)
l.sbA(0.5)
o.c=l
l.gv().m(0,i)
o.d=null
o.r=o.f=o.e=!1
o.y=o.x=2.5
o.Q=4
o.ch=o.cx=!1
o.db=o.cy=0
o.dx=null
o.dy=0
o.fx=o.fr=null
h=new X.a2(!1,!1,!1)
k=o.d
o.d=h
l=new D.y(c,k,h)
l.b=!0
o.K(l)
l=o.f
if(l!==!1){o.f=!1
l=new D.y("invertX",l,!1)
l.b=!0
o.K(l)}l=o.r
if(l!==!0){o.r=!0
l=new D.y("invertY",l,!0)
l.b=!0
o.K(l)}o.aN(q)
j.m(0,o)
q=s.r
o=new U.d9()
l=U.j3()
l.sbU(0,!0)
l.sbK(6.283185307179586)
l.sbM(0)
l.sZ(0,0)
l.sbL(100)
l.sP(0)
l.sbA(0.2)
o.b=l
l.gv().m(0,o.gax())
o.c=null
o.d=!1
o.e=2.5
o.r=4
o.x=o.y=!1
o.z=0
o.Q=null
o.ch=0
o.cy=o.cx=null
h=new X.a2(!0,!1,!1)
k=o.c
o.c=h
l=new D.y(c,k,h)
l.b=!0
o.K(l)
o.aN(q)
j.m(0,o)
q=s.r
o=new U.db()
o.c=0.01
o.e=o.d=0
h=new X.a2(!1,!1,!1)
o.b=h
l=new D.y(c,d,h)
l.b=!0
o.K(l)
o.aN(q)
j.m(0,o)
j.m(0,U.jE(V.ah(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
q=new M.cn()
q.a=!0
u=O.j2(u)
q.e=u
u.aS(q.ge9(),q.geb())
q.y=q.x=q.r=q.f=null
g=X.kY(d)
f=new X.cN()
f.c=1.0471975511965976
f.d=0.1
f.e=2000
f.scR(d)
u=f.c
if(!(Math.abs(u-1.0471975511965976)<$.x().a)){f.c=1.0471975511965976
u=new D.y("fov",u,1.0471975511965976)
u.b=!0
f.ay(u)}u=f.d
if(!(Math.abs(u-0.1)<$.x().a)){f.d=0.1
u=new D.y("near",u,0.1)
u.b=!0
f.ay(u)}u=f.e
if(!(Math.abs(u-2000)<$.x().a)){f.e=2000
u=new D.y("far",u,2000)
u.b=!0
f.ay(u)}u=q.b
if(u!==f){if(u!=null)u.gv().S(0,q.ga9())
k=q.b
q.b=f
f.gv().m(0,q.ga9())
u=new D.y("camera",k,q.b)
u.b=!0
q.ah(u)}u=q.c
if(u!==g){if(u!=null)u.gv().S(0,q.ga9())
k=q.c
q.c=g
g.gv().m(0,q.ga9())
u=new D.y("target",k,q.c)
u.b=!0
q.ah(u)}q.sd2(d)
q.sd2(p)
q.e.m(0,r)
q.b.scR(j)
u=s.d
if(u!==q){if(u!=null)u.gv().S(0,s.gc1())
s.d=q
q.gv().m(0,s.gc1())
s.c2()}u=s.z
if(u==null)u=s.z=D.D()
q=u.b
u=q==null?u.b=H.b([],[{func:1,ret:-1,args:[D.O]}]):q
u.push(new Q.iS(b,p))
V.mr(s)},
iS:function iS(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,T,R,O,E,Z,D,X,V,U,M,A,F,Q]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.ja.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gF:function(a){return H.bK(a)},
h:function(a){return"Instance of '"+H.e(H.bL(a))+"'"}}
J.f0.prototype={
h:function(a){return String(a)},
gF:function(a){return a?519018:218159},
$ial:1}
J.ct.prototype={
p:function(a,b){return null==b},
h:function(a){return"null"},
gF:function(a){return 0}}
J.cu.prototype={
gF:function(a){return 0},
h:function(a){return String(a)}}
J.fO.prototype={}
J.bn.prototype={}
J.aL.prototype={
h:function(a){var u=a[$.kt()]
if(u==null)return this.dh(a)
return"JavaScript function for "+H.e(J.ab(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.aJ.prototype={
d_:function(a,b){if(!!a.fixed$length)H.t(P.a6("removeAt"))
if(b<0||b>=a.length)throw H.f(P.cQ(b,null))
return a.splice(b,1)[0]},
S:function(a,b){var u
if(!!a.fixed$length)H.t(P.a6("remove"))
for(u=0;u<a.length;++u)if(J.B(a[u],b)){a.splice(u,1)
return!0}return!1},
H:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.f(P.aE(a))}},
k:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.c(r,u)
r[u]=t}return r.join(b)},
fJ:function(a){return this.k(a,"")},
fF:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.f(P.aE(a))}throw H.f(H.eZ())},
A:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
dd:function(a,b,c){var u=a.length
if(b>u)throw H.f(P.aj(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.f(P.aj(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.bu(a,0)])
return H.b(a.slice(b,c),[H.bu(a,0)])},
gfE:function(a){if(a.length>0)return a[0]
throw H.f(H.eZ())},
gb1:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.f(H.eZ())},
cs:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.f(P.aE(a))}return!1},
b8:function(a,b){if(!!a.immutable$list)H.t(P.a6("sort"))
H.cT(a,0,a.length-1,b)},
R:function(a,b){var u
for(u=0;u<a.length;++u)if(J.B(a[u],b))return!0
return!1},
h:function(a){return P.j7(a,"[","]")},
gO:function(a){return new J.X(a,a.length)},
gF:function(a){return H.bK(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.t(P.a6("set length"))
if(b<0)throw H.f(P.aj(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){if(b>=a.length||b<0)throw H.f(H.bs(a,b))
return a[b]},
n:function(a,b,c){if(!!a.immutable$list)H.t(P.a6("indexed set"))
if(b>=a.length||b<0)throw H.f(H.bs(a,b))
a[b]=c},
$ii:1}
J.j9.prototype={}
J.X.prototype={
gE:function(a){return this.d},
u:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.f(H.q(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bD.prototype={
fn:function(a,b){var u
if(typeof b!=="number")throw H.f(H.bq(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gb0(b)
if(this.gb0(a)===u)return 0
if(this.gb0(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gb0:function(a){return a===0?1/a<0:a<0},
cN:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.f(P.a6(""+a+".floor()"))},
a6:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.a6(""+a+".round()"))},
d3:function(a,b){var u
if(b>20)throw H.f(P.aj(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gb0(a))return"-"+u
return u},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gF:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
d8:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
dj:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cm(a,b)},
X:function(a,b){return(a|0)===a?a/b|0:this.cm(a,b)},
cm:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.f(P.a6("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
aW:function(a,b){var u
if(a>0)u=this.f5(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
f5:function(a,b){return b>31?0:a>>>b},
$iJ:1,
$ia8:1}
J.cs.prototype={$iw:1}
J.f1.prototype={}
J.aK.prototype={
bz:function(a,b){if(b<0)throw H.f(H.bs(a,b))
if(b>=a.length)H.t(H.bs(a,b))
return a.charCodeAt(b)},
az:function(a,b){if(b>=a.length)throw H.f(H.bs(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(typeof b!=="string")throw H.f(P.jz(b,null,null))
return a+b},
b9:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
aT:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.f(P.cQ(b,null))
if(b>c)throw H.f(P.cQ(b,null))
if(c>a.length)throw H.f(P.cQ(c,null))
return a.substring(b,c)},
af:function(a,b){return this.aT(a,b,null)},
hb:function(a){return a.toLowerCase()},
q:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.C)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
aq:function(a,b){var u=b-a.length
if(u<=0)return a
return this.q(" ",u)+a},
h:function(a){return a},
gF:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$ip:1}
H.l.prototype={
gl:function(a){return this.a.length},
i:function(a,b){return C.b.bz(this.a,b)},
$ao:function(){return[P.w]},
$ai:function(){return[P.w]}}
H.eC.prototype={}
H.cA.prototype={
gO:function(a){return new H.bE(this,this.gl(this))},
b7:function(a,b){return this.dg(0,b)}}
H.bE.prototype={
gE:function(a){return this.d},
u:function(){var u,t=this,s=t.a,r=J.jl(s),q=r.gl(s)
if(t.b!==q)throw H.f(P.aE(s))
u=t.c
if(u>=q){t.d=null
return!1}t.d=r.A(s,u);++t.c
return!0}}
H.fe.prototype={
gO:function(a){return new H.ff(J.b3(this.a),this.b)},
gl:function(a){return J.b4(this.a)},
A:function(a,b){return this.b.$1(J.j_(this.a,b))},
$ai:function(a,b){return[b]}}
H.ff.prototype={
u:function(){var u=this,t=u.b
if(t.u()){u.a=u.c.$1(t.gE(t))
return!0}u.a=null
return!1},
gE:function(a){return this.a}}
H.fg.prototype={
gl:function(a){return J.b4(this.a)},
A:function(a,b){return this.b.$1(J.j_(this.a,b))},
$acA:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.bW.prototype={
gO:function(a){return new H.i6(J.b3(this.a),this.b)}}
H.i6.prototype={
u:function(){var u,t
for(u=this.a,t=this.b;u.u();)if(t.$1(u.gE(u)))return!0
return!1},
gE:function(a){var u=this.a
return u.gE(u)}}
H.co.prototype={}
H.hM.prototype={}
H.d7.prototype={}
H.hA.prototype={
a4:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.f3.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.hL.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.iY.prototype={
$1:function(a){if(!!J.Q(a).$ib9)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:7}
H.dN.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.by.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
ghc:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.ho.prototype={}
H.hg.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.e8(u)+"'"}}
H.bw.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bw))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gF:function(a){var u,t=this.c
if(t==null)u=H.bK(this.a)
else u=typeof t!=="object"?J.b2(t):H.bK(t)
return(u^H.bK(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.bL(u))+"'")}}
H.ek.prototype={
h:function(a){return this.a}}
H.h0.prototype={
h:function(a){return"RuntimeError: "+H.e(this.a)}}
H.L.prototype={
gl:function(a){return this.a},
gY:function(a){return new H.cy(this,[H.bu(this,0)])},
cA:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.ca(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.ca(t,b)}else return s.fH(b)},
fH:function(a){var u=this.d
if(u==null)return!1
return this.bH(this.bi(u,J.b2(a)&0x3ffffff),a)>=0},
i:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.aV(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.aV(r,b)
s=t==null?null:t.b
return s}else return q.fI(b)},
fI:function(a){var u,t,s=this.d
if(s==null)return
u=this.bi(s,J.b2(a)&0x3ffffff)
t=this.bH(u,a)
if(t<0)return
return u[t].b},
n:function(a,b,c){var u,t,s,r,q,p,o=this
if(typeof b==="string"){u=o.b
o.c5(u==null?o.b=o.br():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.c5(t==null?o.c=o.br():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.br()
r=J.b2(b)&0x3ffffff
q=o.bi(s,r)
if(q==null)o.bu(s,r,[o.bs(b,c)])
else{p=o.bH(q,b)
if(p>=0)q[p].b=c
else q.push(o.bs(b,c))}}},
H:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.f(P.aE(u))
t=t.c}},
c5:function(a,b,c){var u=this.aV(a,b)
if(u==null)this.bu(a,b,this.bs(b,c))
else u.b=c},
dV:function(){this.r=this.r+1&67108863},
bs:function(a,b){var u,t=this,s=new H.f7(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.dV()
return s},
bH:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.B(a[t].a,b))return t
return-1},
h:function(a){return P.jM(this)},
aV:function(a,b){return a[b]},
bi:function(a,b){return a[b]},
bu:function(a,b,c){a[b]=c},
dO:function(a,b){delete a[b]},
ca:function(a,b){return this.aV(a,b)!=null},
br:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bu(t,u,t)
this.dO(t,u)
return t}}
H.f7.prototype={}
H.cy.prototype={
gl:function(a){return this.a.a},
gO:function(a){var u=this.a,t=new H.f8(u,u.r)
t.c=u.e
return t}}
H.f8.prototype={
gE:function(a){return this.d},
u:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.aE(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.iO.prototype={
$1:function(a){return this.a(a)},
$S:7}
H.iP.prototype={
$2:function(a,b){return this.a(a,b)}}
H.iQ.prototype={
$1:function(a){return this.a(a)}}
H.f2.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.bI.prototype={}
H.cH.prototype={
gl:function(a){return a.length},
$iv:1,
$av:function(){}}
H.bH.prototype={
i:function(a,b){H.aZ(b,a,a.length)
return a[b]},
$ao:function(){return[P.J]},
$ii:1,
$ai:function(){return[P.J]}}
H.cI.prototype={
$ao:function(){return[P.w]},
$ii:1,
$ai:function(){return[P.w]}}
H.fB.prototype={
i:function(a,b){H.aZ(b,a,a.length)
return a[b]}}
H.fC.prototype={
i:function(a,b){H.aZ(b,a,a.length)
return a[b]}}
H.fD.prototype={
i:function(a,b){H.aZ(b,a,a.length)
return a[b]}}
H.fE.prototype={
i:function(a,b){H.aZ(b,a,a.length)
return a[b]}}
H.fF.prototype={
i:function(a,b){H.aZ(b,a,a.length)
return a[b]}}
H.cJ.prototype={
gl:function(a){return a.length},
i:function(a,b){H.aZ(b,a,a.length)
return a[b]}}
H.fG.prototype={
gl:function(a){return a.length},
i:function(a,b){H.aZ(b,a,a.length)
return a[b]}}
H.bZ.prototype={}
H.c_.prototype={}
H.c0.prototype={}
H.c1.prototype={}
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
P.dT.prototype={
dz:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.br(new P.iC(this,b),0),a)
else throw H.f(P.a6("`setTimeout()` not found."))},
dA:function(a,b){if(self.setTimeout!=null)self.setInterval(H.br(new P.iB(this,a,Date.now(),b),0),a)
else throw H.f(P.a6("Periodic timer."))},
$id0:1}
P.iC.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.iB.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.dj(u,q)}s.c=r
t.d.$1(s)}}
P.dd.prototype={}
P.cX.prototype={}
P.hj.prototype={}
P.d0.prototype={}
P.iF.prototype={}
P.iI.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.cM():s
s=this.b
if(s==null)throw H.f(t)
u=H.f(t)
u.stack=s.h(0)
throw u}}
P.ip.prototype={
h6:function(a){var u,t,s,r=null
try{if(C.e===$.aa){a.$0()
return}P.lY(r,r,this,a)}catch(s){u=H.aw(s)
t=H.jp(s)
P.kg(r,r,this,u,t)}},
h7:function(a,b){var u,t,s,r=null
try{if(C.e===$.aa){a.$1(b)
return}P.lZ(r,r,this,a,b)}catch(s){u=H.aw(s)
t=H.jp(s)
P.kg(r,r,this,u,t)}},
h8:function(a,b){return this.h7(a,b,null)},
fk:function(a){return new P.iq(this,a)},
ct:function(a,b){return new P.ir(this,a,b)}}
P.iq.prototype={
$0:function(){return this.a.h6(this.b)}}
P.ir.prototype={
$1:function(a){return this.a.h8(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.il.prototype={
gO:function(a){var u=new P.du(this,this.r)
u.c=this.e
return u},
gl:function(a){return this.a},
R:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.dJ(b)
return t}},
dJ:function(a){var u=this.d
if(u==null)return!1
return this.bg(this.cd(u,a),a)>=0},
m:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.c6(u==null?s.b=P.jh():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.c6(t==null?s.c=P.jh():t,b)}else return s.dC(0,b)},
dC:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.jh()
u=s.c8(b)
t=r[u]
if(t==null)r[u]=[s.bd(b)]
else{if(s.bg(t,b)>=0)return!1
t.push(s.bd(b))}return!0},
S:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.eQ(this.c,b)
else return this.eP(0,b)},
eP:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cd(r,b)
t=s.bg(u,b)
if(t<0)return!1
s.cn(u.splice(t,1)[0])
return!0},
c6:function(a,b){if(a[b]!=null)return!1
a[b]=this.bd(b)
return!0},
eQ:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.cn(u)
delete a[b]
return!0},
c7:function(){this.r=1073741823&this.r+1},
bd:function(a){var u,t=this,s=new P.im(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.c7()
return s},
cn:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.c7()},
c8:function(a){return J.b2(a)&1073741823},
cd:function(a,b){return a[this.c8(b)]},
bg:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.B(a[t].a,b))return t
return-1}}
P.im.prototype={}
P.du.prototype={
gE:function(a){return this.d},
u:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.aE(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.f9.prototype={$ii:1}
P.o.prototype={
gO:function(a){return new H.bE(a,this.gl(a))},
A:function(a,b){return this.i(a,b)},
ha:function(a,b){var u,t,s=this,r=H.b([],[H.md(s,a,"o",0)])
C.a.sl(r,s.gl(a))
for(u=0;u<s.gl(a);++u){t=s.i(a,u)
if(u>=r.length)return H.c(r,u)
r[u]=t}return r},
h9:function(a){return this.ha(a,!0)},
h:function(a){return P.j7(a,"[","]")}}
P.fc.prototype={}
P.fd.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:8}
P.ao.prototype={
H:function(a,b){var u,t
for(u=J.b3(this.gY(a));u.u();){t=u.gE(u)
b.$2(t,this.i(a,t))}},
gl:function(a){return J.b4(this.gY(a))},
h:function(a){return P.jM(a)}}
P.it.prototype={
ab:function(a,b){var u
for(u=J.b3(b);u.u();)this.m(0,u.gE(u))},
h:function(a){return P.j7(this,"{","}")},
A:function(a,b){var u,t,s
P.jV(b,"index")
for(u=P.lx(this,this.r),t=0;u.u();){s=u.d
if(b===t)return s;++t}throw H.f(P.F(b,this,"index",null,t))},
$ii:1}
P.dv.prototype={}
P.em.prototype={}
P.ep.prototype={}
P.eE.prototype={}
P.eX.prototype={
h:function(a){return this.a}}
P.eW.prototype={
dL:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.as("")
if(r>b)q.a+=C.b.aT(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.kM(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.hP.prototype={}
P.hQ.prototype={
fo:function(a){var u,t,s=P.jW(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.iD(u)
if(t.dQ(a,0,s)!==s)t.co(C.b.bz(a,s-1),0)
return new Uint8Array(u.subarray(0,H.lA(0,t.b,u.length)))}}
P.iD.prototype={
co:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
dQ:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.bz(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.az(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.co(r,C.b.az(a,p)))s=p}else if(r<=2047){q=n.b
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
P.al.prototype={}
P.a1.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.a1&&this.a===b.a&&!0},
gF:function(a){var u=this.a
return(u^C.d.aW(u,30))&1073741823},
h:function(a){var u=this,t=P.kU(H.ld(u)),s=P.cj(H.lb(u)),r=P.cj(H.l7(u)),q=P.cj(H.l8(u)),p=P.cj(H.la(u)),o=P.cj(H.lc(u)),n=P.kV(H.l9(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.J.prototype={}
P.aF.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.aF&&this.a===b.a},
gF:function(a){return C.d.gF(this.a)},
h:function(a){var u,t,s,r=new P.eB(),q=this.a
if(q<0)return"-"+new P.aF(0-q).h(0)
u=r.$1(C.d.X(q,6e7)%60)
t=r.$1(C.d.X(q,1e6)%60)
s=new P.eA().$1(q%1e6)
return""+C.d.X(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
P.eA.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.eB.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.b9.prototype={}
P.cM.prototype={
h:function(a){return"Throw of null."}}
P.ac.prototype={
gbf:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbe:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbf()+o+u
if(!q.a)return t
s=q.gbe()
r=P.j6(q.b)
return t+s+": "+r}}
P.bi.prototype={
gbf:function(){return"RangeError"},
gbe:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.eY.prototype={
gbf:function(){return"RangeError"},
gbe:function(){var u,t=this.b
if(typeof t!=="number")return t.a1()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gl:function(a){return this.f}}
P.hN.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.hK.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.bN.prototype={
h:function(a){return"Bad state: "+this.a}}
P.eo.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.j6(u)+"."}}
P.fN.prototype={
h:function(a){return"Out of Memory"},
$ib9:1}
P.cV.prototype={
h:function(a){return"Stack Overflow"},
$ib9:1}
P.eu.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dl.prototype={
h:function(a){return"Exception: "+this.a}}
P.eQ.prototype={
h:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.b.aT(s,0,75)+"...":s
return t+"\n"+r}}
P.eS.prototype={}
P.w.prototype={}
P.i.prototype={
b7:function(a,b){return new H.bW(this,b,[H.jo(this,"i",0)])},
gl:function(a){var u,t=this.gO(this)
for(u=0;t.u();)++u
return u},
gav:function(a){var u,t=this.gO(this)
if(!t.u())throw H.f(H.eZ())
u=t.gE(t)
if(t.u())throw H.f(H.l_())
return u},
A:function(a,b){var u,t,s
P.jV(b,"index")
for(u=this.gO(this),t=0;u.u();){s=u.gE(u)
if(b===t)return s;++t}throw H.f(P.F(b,this,"index",null,t))},
h:function(a){return P.kZ(this,"(",")")}}
P.f_.prototype={}
P.af.prototype={$ii:1}
P.cC.prototype={}
P.aO.prototype={
gF:function(a){return P.T.prototype.gF.call(this,this)},
h:function(a){return"null"}}
P.a8.prototype={}
P.T.prototype={constructor:P.T,$iT:1,
p:function(a,b){return this===b},
gF:function(a){return H.bK(this)},
h:function(a){return"Instance of '"+H.e(H.bL(this))+"'"},
toString:function(){return this.h(this)}}
P.p.prototype={}
P.as.prototype={
gl:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.k.prototype={}
W.ea.prototype={
gl:function(a){return a.length}}
W.eb.prototype={
h:function(a){return String(a)}}
W.ec.prototype={
h:function(a){return String(a)}}
W.cd.prototype={}
W.b6.prototype={$ib6:1}
W.b7.prototype={
d7:function(a,b,c){var u=a.getContext(b,P.m6(c))
return u},
$ib7:1}
W.aB.prototype={
gl:function(a){return a.length}}
W.eq.prototype={
gl:function(a){return a.length}}
W.C.prototype={$iC:1}
W.bz.prototype={
gl:function(a){return a.length}}
W.er.prototype={}
W.a0.prototype={}
W.ae.prototype={}
W.es.prototype={
gl:function(a){return a.length}}
W.et.prototype={
gl:function(a){return a.length}}
W.ew.prototype={
gl:function(a){return a.length}}
W.a9.prototype={$ia9:1}
W.ex.prototype={
h:function(a){return String(a)}}
W.cl.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[[P.a4,P.a8]]},
$ao:function(){return[[P.a4,P.a8]]},
$ii:1,
$ai:function(){return[[P.a4,P.a8]]}}
W.cm.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gau(a))+" x "+H.e(this.gam(a))},
p:function(a,b){var u
if(b==null)return!1
u=J.Q(b)
if(!u.$ia4)return!1
return a.left===u.gb2(b)&&a.top===u.gb5(b)&&this.gau(a)===u.gau(b)&&this.gam(a)===u.gam(b)},
gF:function(a){return W.kc(C.c.gF(a.left),C.c.gF(a.top),C.c.gF(this.gau(a)),C.c.gF(this.gam(a)))},
gcu:function(a){return a.bottom},
gam:function(a){return a.height},
gb2:function(a){return a.left},
gbR:function(a){return a.right},
gb5:function(a){return a.top},
gau:function(a){return a.width},
$ia4:1,
$aa4:function(){return[P.a8]}}
W.ey.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[P.p]},
$ao:function(){return[P.p]},
$ii:1,
$ai:function(){return[P.p]}}
W.ez.prototype={
gl:function(a){return a.length}}
W.ic.prototype={
gl:function(a){return this.b.length},
i:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
m:function(a,b){this.a.appendChild(b)
return b},
gO:function(a){var u=this.h9(this)
return new J.X(u,u.length)},
$ao:function(){return[W.N]},
$ai:function(){return[W.N]}}
W.N.prototype={
gfj:function(a){return new W.ie(a)},
gcv:function(a){return new W.ic(a,a.children)},
gcw:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.a1()
if(s<0)s=-s*0
if(typeof r!=="number")return r.a1()
if(r<0)r=-r*0
return new P.a4(u,t,s,r,[P.a8])},
h:function(a){return a.localName},
a3:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.jH
if(u==null){u=H.b([],[W.ar])
t=new W.cL(u)
u.push(W.kb(null))
u.push(W.kd())
$.jH=t
d=t}else d=u
u=$.jG
if(u==null){u=new W.dY(d)
$.jG=u
c=u}else{u.a=d
c=u}}if($.an==null){u=document
t=u.implementation.createHTMLDocument("")
$.an=t
$.j5=t.createRange()
s=$.an.createElement("base")
s.href=u.baseURI
$.an.head.appendChild(s)}u=$.an
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.an
if(!!this.$ib6)r=u.body
else{r=u.createElement(a.tagName)
$.an.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.a.R(C.K,a.tagName)){$.j5.selectNodeContents(r)
q=$.j5.createContextualFragment(b)}else{r.innerHTML=b
q=$.an.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.an.body
if(r==null?u!=null:r!==u)J.jx(r)
c.bV(q)
document.adoptNode(q)
return q},
fp:function(a,b,c){return this.a3(a,b,c,null)},
da:function(a,b){a.textContent=null
a.appendChild(this.a3(a,b,null,null))},
$iN:1,
gd1:function(a){return a.tagName}}
W.eD.prototype={
$1:function(a){return!!J.Q(a).$iN}}
W.h.prototype={$ih:1}
W.d.prototype={
fc:function(a,b,c,d){if(c!=null)this.dD(a,b,c,!1)},
dD:function(a,b,c,d){return a.addEventListener(b,H.br(c,1),!1)}}
W.aH.prototype={$iaH:1}
W.eK.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aH]},
$ao:function(){return[W.aH]},
$ii:1,
$ai:function(){return[W.aH]}}
W.eL.prototype={
gl:function(a){return a.length}}
W.eP.prototype={
gl:function(a){return a.length}}
W.aI.prototype={$iaI:1}
W.eV.prototype={
gl:function(a){return a.length}}
W.bC.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.G]},
$ao:function(){return[W.G]},
$ii:1,
$ai:function(){return[W.G]}}
W.be.prototype={$ibe:1}
W.fa.prototype={
h:function(a){return String(a)}}
W.fu.prototype={
gl:function(a){return a.length}}
W.fv.prototype={
i:function(a,b){return P.av(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.av(u.value[1]))}},
gY:function(a){var u=H.b([],[P.p])
this.H(a,new W.fw(u))
return u},
gl:function(a){return a.size}}
W.fw.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fx.prototype={
i:function(a,b){return P.av(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.av(u.value[1]))}},
gY:function(a){var u=H.b([],[P.p])
this.H(a,new W.fy(u))
return u},
gl:function(a){return a.size}}
W.fy.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aN.prototype={$iaN:1}
W.fz.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aN]},
$ao:function(){return[W.aN]},
$ii:1,
$ai:function(){return[W.aN]}}
W.ai.prototype={$iai:1}
W.U.prototype={
gav:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.f(P.jZ("No elements"))
if(t>1)throw H.f(P.jZ("More than one element"))
return u.firstChild},
ab:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
gO:function(a){var u=this.a.childNodes
return new W.cp(u,u.length)},
gl:function(a){return this.a.childNodes.length},
i:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
$ao:function(){return[W.G]},
$ai:function(){return[W.G]}}
W.G.prototype={
h1:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
h:function(a){var u=a.nodeValue
return u==null?this.df(a):u},
$iG:1}
W.cK.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.G]},
$ao:function(){return[W.G]},
$ii:1,
$ai:function(){return[W.G]}}
W.aP.prototype={$iaP:1,
gl:function(a){return a.length}}
W.fQ.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aP]},
$ao:function(){return[W.aP]},
$ii:1,
$ai:function(){return[W.aP]}}
W.fZ.prototype={
i:function(a,b){return P.av(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.av(u.value[1]))}},
gY:function(a){var u=H.b([],[P.p])
this.H(a,new W.h_(u))
return u},
gl:function(a){return a.size}}
W.h_.prototype={
$2:function(a,b){return this.a.push(a)}}
W.h1.prototype={
gl:function(a){return a.length}}
W.aR.prototype={$iaR:1}
W.hc.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aR]},
$ao:function(){return[W.aR]},
$ii:1,
$ai:function(){return[W.aR]}}
W.aS.prototype={$iaS:1}
W.hd.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aS]},
$ao:function(){return[W.aS]},
$ii:1,
$ai:function(){return[W.aS]}}
W.aT.prototype={$iaT:1,
gl:function(a){return a.length}}
W.hh.prototype={
i:function(a,b){return a.getItem(b)},
H:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gY:function(a){var u=H.b([],[P.p])
this.H(a,new W.hi(u))
return u},
gl:function(a){return a.length}}
W.hi.prototype={
$2:function(a,b){return this.a.push(a)}}
W.at.prototype={$iat:1}
W.cY.prototype={
a3:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.ba(a,b,c,d)
u=W.kW("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.U(t).ab(0,new W.U(u))
return t}}
W.hl.prototype={
a3:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.ba(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.t.a3(u.createElement("table"),b,c,d)
u.toString
u=new W.U(u)
s=u.gav(u)
s.toString
u=new W.U(s)
r=u.gav(u)
t.toString
r.toString
new W.U(t).ab(0,new W.U(r))
return t}}
W.hm.prototype={
a3:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.ba(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.t.a3(u.createElement("table"),b,c,d)
u.toString
u=new W.U(u)
s=u.gav(u)
t.toString
s.toString
new W.U(t).ab(0,new W.U(s))
return t}}
W.bO.prototype={$ibO:1}
W.aU.prototype={$iaU:1}
W.au.prototype={$iau:1}
W.hp.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.au]},
$ao:function(){return[W.au]},
$ii:1,
$ai:function(){return[W.au]}}
W.hq.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aU]},
$ao:function(){return[W.aU]},
$ii:1,
$ai:function(){return[W.aU]}}
W.ht.prototype={
gl:function(a){return a.length}}
W.aV.prototype={$iaV:1}
W.bj.prototype={$ibj:1}
W.hx.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aV]},
$ao:function(){return[W.aV]},
$ii:1,
$ai:function(){return[W.aV]}}
W.hy.prototype={
gl:function(a){return a.length}}
W.aW.prototype={}
W.hO.prototype={
h:function(a){return String(a)}}
W.i4.prototype={
gl:function(a){return a.length}}
W.aY.prototype={
gft:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.a6("deltaY is not supported"))},
gfs:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.a6("deltaX is not supported"))},
$iaY:1}
W.bX.prototype={
eU:function(a,b){return a.requestAnimationFrame(H.br(b,1))},
dP:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.id.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.C]},
$ao:function(){return[W.C]},
$ii:1,
$ai:function(){return[W.C]}}
W.dg.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
p:function(a,b){var u
if(b==null)return!1
u=J.Q(b)
if(!u.$ia4)return!1
return a.left===u.gb2(b)&&a.top===u.gb5(b)&&a.width===u.gau(b)&&a.height===u.gam(b)},
gF:function(a){return W.kc(C.c.gF(a.left),C.c.gF(a.top),C.c.gF(a.width),C.c.gF(a.height))},
gam:function(a){return a.height},
gau:function(a){return a.width}}
W.ii.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aI]},
$ao:function(){return[W.aI]},
$ii:1,
$ai:function(){return[W.aI]}}
W.dA.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.G]},
$ao:function(){return[W.G]},
$ii:1,
$ai:function(){return[W.G]}}
W.iw.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aT]},
$ao:function(){return[W.aT]},
$ii:1,
$ai:function(){return[W.aT]}}
W.ix.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.at]},
$ao:function(){return[W.at]},
$ii:1,
$ai:function(){return[W.at]}}
W.ib.prototype={
H:function(a,b){var u,t,s,r,q
for(u=this.gY(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.q)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gY:function(a){var u,t,s,r=this.a.attributes,q=H.b([],[P.p])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.c(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q}}
W.ie.prototype={
i:function(a,b){return this.a.getAttribute(b)},
gl:function(a){return this.gY(this).length}}
W.ig.prototype={}
W.ih.prototype={
$1:function(a){return this.a.$1(a)}}
W.bY.prototype={
ds:function(a){var u
if($.dp.a===0){for(u=0;u<262;++u)$.dp.n(0,C.J[u],W.mf())
for(u=0;u<12;++u)$.dp.n(0,C.l[u],W.mg())}},
aC:function(a){return $.kH().R(0,W.bA(a))},
ac:function(a,b,c){var u=$.dp.i(0,H.e(W.bA(a))+"::"+b)
if(u==null)u=$.dp.i(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$iar:1}
W.E.prototype={
gO:function(a){return new W.cp(a,this.gl(a))}}
W.cL.prototype={
aC:function(a){return C.a.cs(this.a,new W.fI(a))},
ac:function(a,b,c){return C.a.cs(this.a,new W.fH(a,b,c))},
$iar:1}
W.fI.prototype={
$1:function(a){return a.aC(this.a)}}
W.fH.prototype={
$1:function(a){return a.ac(this.a,this.b,this.c)}}
W.dI.prototype={
dw:function(a,b,c,d){var u,t,s
this.a.ab(0,c)
u=b.b7(0,new W.iu())
t=b.b7(0,new W.iv())
this.b.ab(0,u)
s=this.c
s.ab(0,C.L)
s.ab(0,t)},
aC:function(a){return this.a.R(0,W.bA(a))},
ac:function(a,b,c){var u=this,t=W.bA(a),s=u.c
if(s.R(0,H.e(t)+"::"+b))return u.d.fe(c)
else if(s.R(0,"*::"+b))return u.d.fe(c)
else{s=u.b
if(s.R(0,H.e(t)+"::"+b))return!0
else if(s.R(0,"*::"+b))return!0
else if(s.R(0,H.e(t)+"::*"))return!0
else if(s.R(0,"*::*"))return!0}return!1},
$iar:1}
W.iu.prototype={
$1:function(a){return!C.a.R(C.l,a)}}
W.iv.prototype={
$1:function(a){return C.a.R(C.l,a)}}
W.iz.prototype={
ac:function(a,b,c){if(this.di(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.R(0,b)
return!1}}
W.iA.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)}}
W.iy.prototype={
aC:function(a){var u=J.Q(a)
if(!!u.$ibM)return!1
u=!!u.$ij
if(u&&W.bA(a)==="foreignObject")return!1
if(u)return!0
return!1},
ac:function(a,b,c){if(b==="is"||C.b.b9(b,"on"))return!1
return this.aC(a)},
$iar:1}
W.cp.prototype={
u:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.e9(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gE:function(a){return this.d}}
W.ar.prototype={}
W.is.prototype={}
W.dY.prototype={
bV:function(a){new W.iE(this).$2(a,null)},
aM:function(a,b){if(b==null)J.jx(a)
else b.removeChild(a)},
eY:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
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
p=u?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.aw(r)}t="element unprintable"
try{t=J.ab(a)}catch(r){H.aw(r)}try{s=W.bA(a)
this.eX(a,b,p,t,s,o,n)}catch(r){if(H.aw(r) instanceof P.ac)throw r
else{this.aM(a,b)
window
q="Removing corrupted element "+H.e(t)
if(typeof console!="undefined")window.console.warn(q)}}},
eX:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=this
if(c){p.aM(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!p.a.aC(a)){p.aM(a,b)
window
u="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!p.a.ac(a,"is",g)){p.aM(a,b)
window
u="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gY(f)
t=H.b(u.slice(0),[H.bu(u,0)])
for(s=f.gY(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.c(t,s)
r=t[s]
if(!p.a.ac(a,J.kN(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.e(e)+" "+r+'="'+H.e(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.Q(a).$ibO)p.bV(a.content)}}
W.iE.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.eY(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aM(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.aw(s)
r=u
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=t}}}
W.df.prototype={}
W.dh.prototype={}
W.di.prototype={}
W.dj.prototype={}
W.dk.prototype={}
W.dm.prototype={}
W.dn.prototype={}
W.dq.prototype={}
W.dr.prototype={}
W.dw.prototype={}
W.dx.prototype={}
W.dy.prototype={}
W.dz.prototype={}
W.dB.prototype={}
W.dC.prototype={}
W.dF.prototype={}
W.dG.prototype={}
W.dH.prototype={}
W.c2.prototype={}
W.c3.prototype={}
W.dJ.prototype={}
W.dK.prototype={}
W.dO.prototype={}
W.dR.prototype={}
W.dS.prototype={}
W.c4.prototype={}
W.c5.prototype={}
W.dU.prototype={}
W.dV.prototype={}
W.dZ.prototype={}
W.e_.prototype={}
W.e0.prototype={}
W.e1.prototype={}
W.e2.prototype={}
W.e3.prototype={}
W.e4.prototype={}
W.e5.prototype={}
W.e6.prototype={}
W.e7.prototype={}
P.iJ.prototype={
$2:function(a,b){this.a[a]=b},
$S:8}
P.eM.prototype={
gbj:function(){var u=this.b,t=H.jo(u,"o",0)
return new H.fe(new H.bW(u,new P.eN(),[t]),new P.eO(),[t,W.N])},
m:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.b4(this.gbj().a)},
i:function(a,b){var u=this.gbj()
return u.b.$1(J.j_(u.a,b))},
gO:function(a){var u=P.jL(this.gbj(),!1,W.N)
return new J.X(u,u.length)},
$ao:function(){return[W.N]},
$ai:function(){return[W.N]}}
P.eN.prototype={
$1:function(a){return!!J.Q(a).$iN}}
P.eO.prototype={
$1:function(a){return H.n(a,"$iN")}}
P.io.prototype={
gbR:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.u(t)
return u+t},
gcu:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.u(t)
return u+t},
h:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
p:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.Q(b)
if(!!u.$ia4){t=q.a
if(t==u.gb2(b)){s=q.b
if(s==u.gb5(b)){r=q.c
if(typeof t!=="number")return t.C()
if(typeof r!=="number")return H.u(r)
if(t+r===u.gbR(b)){t=q.d
if(typeof s!=="number")return s.C()
if(typeof t!=="number")return H.u(t)
u=s+t===u.gcu(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gF:function(a){var u=this,t=u.a,s=J.b2(t),r=u.b,q=J.b2(r),p=u.c
if(typeof t!=="number")return t.C()
if(typeof p!=="number")return H.u(p)
p=C.d.gF(t+p)
t=u.d
if(typeof r!=="number")return r.C()
if(typeof t!=="number")return H.u(t)
t=C.d.gF(r+t)
return P.lw(P.ik(P.ik(P.ik(P.ik(0,s),q),p),t))}}
P.a4.prototype={
gb2:function(a){return this.a},
gb5:function(a){return this.b},
gau:function(a){return this.c},
gam:function(a){return this.d}}
P.bf.prototype={$ibf:1}
P.f5.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a.getItem(b)},
A:function(a,b){return this.i(a,b)},
$ao:function(){return[P.bf]},
$ii:1,
$ai:function(){return[P.bf]}}
P.bg.prototype={$ibg:1}
P.fL.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a.getItem(b)},
A:function(a,b){return this.i(a,b)},
$ao:function(){return[P.bg]},
$ii:1,
$ai:function(){return[P.bg]}}
P.fT.prototype={
gl:function(a){return a.length}}
P.bM.prototype={$ibM:1}
P.hk.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a.getItem(b)},
A:function(a,b){return this.i(a,b)},
$ao:function(){return[P.p]},
$ii:1,
$ai:function(){return[P.p]}}
P.j.prototype={
gcv:function(a){return new P.eM(a,new W.U(a))},
a3:function(a,b,c,d){var u,t,s,r,q,p=H.b([],[W.ar])
p.push(W.kb(null))
p.push(W.kd())
p.push(new W.iy())
c=new W.dY(new W.cL(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.n).fp(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.U(s)
q=p.gav(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ij:1}
P.bk.prototype={$ibk:1}
P.hz.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a.getItem(b)},
A:function(a,b){return this.i(a,b)},
$ao:function(){return[P.bk]},
$ii:1,
$ai:function(){return[P.bk]}}
P.ds.prototype={}
P.dt.prototype={}
P.dD.prototype={}
P.dE.prototype={}
P.dP.prototype={}
P.dQ.prototype={}
P.dW.prototype={}
P.dX.prototype={}
P.ee.prototype={
gl:function(a){return a.length}}
P.ef.prototype={
i:function(a,b){return P.av(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.av(u.value[1]))}},
gY:function(a){var u=H.b([],[P.p])
this.H(a,new P.eg(u))
return u},
gl:function(a){return a.size}}
P.eg.prototype={
$2:function(a,b){return this.a.push(a)}}
P.eh.prototype={
gl:function(a){return a.length}}
P.b5.prototype={}
P.fM.prototype={
gl:function(a){return a.length}}
P.de.prototype={}
P.hf.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return P.av(a.item(b))},
A:function(a,b){return this.i(a,b)},
$ao:function(){return[[P.cC,,,]]},
$ii:1,
$ai:function(){return[[P.cC,,,]]}}
P.dL.prototype={}
P.dM.prototype={}
T.am.prototype={
ap:function(a,b){return!0},
h:function(a){return"all"}}
T.cq.prototype={
ap:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)if(u[s].ap(0,b))return!0
return!1},
h:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.q)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.h(0)}return s}}
T.aM.prototype={}
T.V.prototype={
ap:function(a,b){return!this.de(0,b)},
h:function(a){return"!["+this.bZ(0)+"]"}}
T.fU.prototype={
ap:function(a,b){return this.a<=b&&this.b>=b},
h:function(a){var u=H.jc(this.a),t=H.jc(this.b)
return u+".."+t}}
T.h2.prototype={
dm:function(a){var u,t
if(a.a.length<=0)throw H.f(P.r("May not create a Set with zero characters."))
u=new H.L([P.w,P.al])
for(t=new H.bE(a,a.gl(a));t.u();)u.n(0,t.d,!0)
this.a=u},
ap:function(a,b){return this.a.cA(0,b)},
h:function(a){var u=this.a
return P.jd(new H.cy(u,[H.bu(u,0)]))}}
R.cW.prototype={
k:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new R.d4(this.a.j(0,b))
r.a=H.b([],[T.aM])
r.c=!1
this.c.push(r)
return r},
fD:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
if(r.ap(0,a))return r}return},
h:function(a){return this.b}}
R.d1.prototype={
h:function(a){var u=H.jt(this.b,"\n","\\n"),t=H.jt(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
R.d2.prototype={
ar:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.q)(c),++t){s=c[t]
this.c.n(0,s,b)}},
h:function(a){return this.b}}
R.hu.prototype={
j:function(a,b){var u=this.a.i(0,b)
if(u==null){u=new R.cW(this,b)
u.c=H.b([],[R.d4])
this.a.n(0,b,u)}return u},
J:function(a){var u,t=this.b.i(0,a)
if(t==null){t=new R.d2(a)
u=P.p
t.c=new H.L([u,u])
this.b.n(0,a,t)}return t},
d4:function(a){var u,t,s,r,q,p,o,n,m=H.b([],[R.d1]),l=this.c,k=[P.w],j=H.b([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)m.push(t)
return m}r=C.b.az(a,s)
q=l.fD(r)
if(q==null){if(t==null){j.push(r)
p=P.jd(j)
throw H.f(P.r("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}m.push(t)
s=t.c+1
j=H.b([],k)
l=this.c
t=null}else{if(!q.c)j.push(r)
l=q.b
if(l.d!=null){p=P.jd(j)
o=l.d
n=o.c.i(0,p)
t=new R.d1(n==null?o.b:n,p,s)}++s}}}}
R.d4.prototype={
h:function(a){return this.b.b+": "+this.bZ(0)}}
O.aC.prototype={
bb:function(a){this.a=H.b([],[a])
this.c=this.b=null},
bW:function(a,b,c){this.b=b
this.c=a},
aS:function(a,b){return this.bW(a,null,b)},
eC:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
dr:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gO:function(a){var u=this.a
return new J.X(u,u.length)},
A:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
m:function(a,b){var u,t,s=this,r=[H.jo(s,"aC",0)]
if(s.eC(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.dr(t,H.b([b],r))}},
$ii:1}
O.bF.prototype={
gl:function(a){return this.a.length},
gv:function(){var u=this.b
return u==null?this.b=D.D():u},
aw:function(){var u=this.b
if(u!=null)u.B(null)},
gV:function(a){var u=this.a
if(u.length>0)return C.a.gb1(u)
else return V.cG()},
cY:function(a){var u=this.a
if(a==null)u.push(V.cG())
else u.push(a)
this.aw()},
bO:function(){var u=this.a
if(u.length>0){u.pop()
this.aw()}}}
E.ei.prototype={}
E.aG.prototype={
sbX:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gv().S(0,s.gcU())
u=s.c
if(u!=null)u.gv().m(0,s.gcU())
t=new D.y("shape",r,s.c)
t.b=!0
s.b3(t)}},
ad:function(a,b){var u
for(u=this.y.a,u=new J.X(u,u.length);u.u();)u.d.ad(0,b)},
aH:function(a){var u,t=this,s=a.dx
s.a.push(s.gV(s))
s.aw()
a.cZ(t.f)
s=a.dy
u=(s&&C.a).gb1(s)
if(u!=null&&t.d!=null)u.h4(a,t)
for(s=t.y.a,s=new J.X(s,s.length);s.u();)s.d.aH(a)
a.cX()
a.dx.bO()},
b3:function(a){var u=this.z
if(u!=null)u.B(a)},
a0:function(){return this.b3(null)},
cV:function(a){this.e=null
this.b3(a)},
fS:function(){return this.cV(null)},
cT:function(a){this.b3(a)},
fP:function(){return this.cT(null)},
fO:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcS(),s=[{func:1,ret:-1,args:[D.O]}],r=0;r<b.length;b.length===u||(0,H.q)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.ba()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.a0()},
fR:function(a,b){var u,t
for(u=b.gO(b),t=this.gcS();u.u();)u.gE(u).gv().S(0,t)
this.a0()},
h:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.fV.prototype={
dl:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.a1(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.bF()
t=[V.ap]
u.a=H.b([],t)
u.gv().m(0,new E.fW(s))
s.cy=u
u=new O.bF()
u.a=H.b([],t)
u.gv().m(0,new E.fX(s))
s.db=u
u=new O.bF()
u.a=H.b([],t)
u.gv().m(0,new E.fY(s))
s.dx=u
u=H.b([],[O.cZ])
s.dy=u
u.push(null)
s.fr=new H.L([P.p,A.cS])},
gh0:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gV(s)
u=t.db
u=t.z=s.q(0,u.gV(u))
s=u}return s},
cZ:function(a){var u=this.dy
u.push(a==null?(u&&C.a).gb1(u):a)},
cX:function(){var u=this.dy
if(u.length>1)u.pop()}}
E.fW.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.fX.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.fY.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.d_.prototype={
c3:function(a){this.d0()},
c2:function(){return this.c3(null)},
gfG:function(){var u,t=this,s=Date.now(),r=C.d.X(P.jF(s-t.cx.a).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.a1(s,!1)
return u/r},
ci:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.q()
if(typeof r!=="number")return H.u(r)
u=C.c.cN(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.q()
t=C.c.cN(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.k1(C.i,s.gh5())}},
d0:function(){if(!this.ch){this.ch=!0
var u=window
C.v.dP(u)
C.v.eU(u,W.kh(new E.hs(this),P.a8))}},
h3:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.ci()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.a1(r,!1)
s.y=P.jF(r-s.r.a).a*0.000001
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
o.aH(p.e)}s=p.z
if(s!=null)s.B(null)}catch(q){u=H.aw(q)
t=H.jp(q)
P.js("Error: "+H.e(u))
P.js("Stack: "+H.e(t))
throw H.f(u)}}}
E.hs.prototype={
$1:function(a){var u=this.a
if(u.ch){u.ch=!1
u.h3()}}}
Z.dc.prototype={}
Z.ce.prototype={
aY:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.aw(s)
t=P.r('Failed to bind buffer attribute "'+r.a.h(0)+'": '+H.e(u))
throw H.f(t)}},
h:function(a){var u=this
return"["+u.a.h(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.i5.prototype={}
Z.cf.prototype={
aG:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
aY:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].aY(a)},
d5:function(a){var u,t,s
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
h:function(a){var u,t,s,r,q=[P.p],p=H.b([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)p.push(u[s].h(0))
r=H.b([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.ab(q[s]))
return"Buffer:  ["+this.a.h(0)+"]\nIndices: "+C.a.k(p,", ")+"\nAttrs:   "+C.a.k(r,", ")}}
Z.cr.prototype={
h:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.bL(this.c))+"'")+"]"}}
Z.aX.prototype={
gbY:function(a){var u=this.a,t=(u&$.aA().a)!==0?3:0
if((u&$.az().a)!==0)t+=3
if((u&$.ay().a)!==0)t+=3
if((u&$.b0().a)!==0)t+=2
if((u&$.b1().a)!==0)t+=3
if((u&$.ca().a)!==0)t+=3
if((u&$.cb().a)!==0)t+=4
if((u&$.bv().a)!==0)++t
return(u&$.ax().a)!==0?t+4:t},
ff:function(a){var u,t=$.aA(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.az()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ay()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b0()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b1()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ca()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cb()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bv()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ax()
if((s&t.a)!==0)if(u===a)return t
return $.kG()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aX))return!1
return this.a===b.a},
h:function(a){var u=H.b([],[P.p]),t=this.a
if((t&$.aA().a)!==0)u.push("Pos")
if((t&$.az().a)!==0)u.push("Norm")
if((t&$.ay().a)!==0)u.push("Binm")
if((t&$.b0().a)!==0)u.push("Txt2D")
if((t&$.b1().a)!==0)u.push("TxtCube")
if((t&$.ca().a)!==0)u.push("Clr3")
if((t&$.cb().a)!==0)u.push("Clr4")
if((t&$.bv().a)!==0)u.push("Weight")
if((t&$.ax().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.a.k(u,"|")}}
D.el.prototype={}
D.ba.prototype={
m:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.O]}]):u).push(b)},
S:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.a.R(s,b)
if(s===!0){s=t.a
u=(s&&C.a).S(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.a.R(s,b)
if(s===!0){s=t.b
u=(s&&C.a).S(s,b)||u}return u},
B:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.a.H(P.jL(u,!0,{func:1,ret:-1,args:[D.O]}),new D.eG(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.O]}])
C.a.H(u,new D.eH(q))}return!0},
as:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.B(u)}}}}
D.eG.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.eH.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.O.prototype={}
D.bc.prototype={}
D.bd.prototype={}
D.y.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cg.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cg))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.cv.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cv))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.f4.prototype={
fX:function(a){this.c=a.b
this.d.m(0,a.a)
return!1},
fT:function(a){this.c=a.b
this.d.S(0,a.a)
return!1}}
X.cB.prototype={}
X.fb.prototype={
aK:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.q()
u=b.b
t=q.ch
if(typeof u!=="number")return u.q()
s=new V.a3(o.a+n*m,o.b+u*t)
t=q.a.gaE()
r=new X.aq(a,V.aQ(),q.x,t,s)
r.b=!0
q.z=new P.a1(p,!1)
q.x=s
return r},
bN:function(a,b){this.r=a.a
return!1},
aR:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.d9()
if(typeof u!=="number")return u.ae()
this.r=(u&~t)>>>0
return!1},
aQ:function(a,b){var u=this.d
if(u==null)return!1
u.B(this.aK(a,b))
return!0},
fY:function(a){var u,t,s,r,q,p,o=this,n=o.e
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
t=new X.bG(new V.A(s*r,q*p),u,t)
t.b=!0
n.B(t)
return!0},
eq:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.cB(c,r.a.gaE(),b)
s.b=!0
t.B(s)
r.y=new P.a1(u,!1)
r.x=V.aQ()}}
X.a2.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.a2))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
h:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.aq.prototype={}
X.fA.prototype={
bh:function(a,b,c){var u=this,t=new P.a1(Date.now(),!1),s=u.a.gaE(),r=new X.aq(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
bN:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.B(this.bh(a,b,!0))
return!0},
aR:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.d9()
if(typeof t!=="number")return t.ae()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.B(u.bh(a,b,!0))
return!0},
aQ:function(a,b){var u=this.d
if(u==null)return!1
u.B(this.bh(a,b,!1))
return!0},
fZ:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaE()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.q()
r=a.b
q=p.ch
if(typeof r!=="number")return r.q()
u=new X.bG(new V.A(t*s,r*q),u,b)
u.b=!0
o.B(u)
return!0},
gcD:function(){var u=this.b
return u==null?this.b=D.D():u},
gbT:function(){var u=this.c
return u==null?this.c=D.D():u},
gcQ:function(){var u=this.d
return u==null?this.d=D.D():u}}
X.bG.prototype={}
X.fS.prototype={}
X.d3.prototype={}
X.hw.prototype={
aK:function(a,b){var u=this,t=new P.a1(Date.now(),!1),s=a.length>0?a[0]:V.aQ(),r=u.a.gaE(),q=new X.d3(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
fW:function(a){var u=this.b
if(u==null)return!1
u.B(this.aK(a,!0))
return!0},
fU:function(a){var u=this.c
if(u==null)return!1
u.B(this.aK(a,!0))
return!0},
fV:function(a){var u=this.d
if(u==null)return!1
u.B(this.aK(a,!1))
return!0}}
X.d8.prototype={
gaE:function(){var u=this.a,t=C.h.gcw(u).c
t.toString
u=C.h.gcw(u).d
u.toString
return V.jX(0,0,t,u)},
cb:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.cv(u,new X.a2(t,a.altKey,a.shiftKey))},
aB:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.a2(t,a.altKey,a.shiftKey)},
bv:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.a2(t,a.altKey,a.shiftKey)},
ak:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.D()
u=t.top
if(typeof r!=="number")return r.D()
return new V.a3(s-q,r-u)},
aL:function(a){return new V.A(a.movementX,a.movementY)},
bt:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.a3])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
q=C.c.a6(r.pageX)
C.c.a6(r.pageY)
p=o.left
C.c.a6(r.pageX)
n.push(new V.a3(q-p,C.c.a6(r.pageY)-o.top))}return n},
ai:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cg(u,new X.a2(t,a.altKey,a.shiftKey))},
bk:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.D()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.D()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
ek:function(a){this.f=!0},
e6:function(a){this.f=!1},
ee:function(a){if(this.f&&this.bk(a))a.preventDefault()},
eo:function(a){var u
if(!this.f)return
u=this.cb(a)
this.b.fX(u)},
em:function(a){var u
if(!this.f)return
u=this.cb(a)
this.b.fT(u)},
es:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aB(a)
if(r.x){u=r.ai(a)
t=r.aL(a)
if(r.d.bN(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.ai(a)
s=r.ak(a)
if(r.c.bN(u,s))a.preventDefault()},
ex:function(a){var u,t,s,r=this
r.aB(a)
u=r.ai(a)
if(r.x){t=r.aL(a)
if(r.d.aR(u,t))a.preventDefault()
return}if(r.r)return
s=r.ak(a)
if(r.c.aR(u,s))a.preventDefault()},
ei:function(a){var u,t,s,r=this
if(!r.bk(a)){r.aB(a)
u=r.ai(a)
if(r.x){t=r.aL(a)
if(r.d.aR(u,t))a.preventDefault()
return}if(r.r)return
s=r.ak(a)
if(r.c.aR(u,s))a.preventDefault()}},
ev:function(a){var u,t,s,r=this
r.aB(a)
u=r.ai(a)
if(r.x){t=r.aL(a)
if(r.d.aQ(u,t))a.preventDefault()
return}if(r.r)return
s=r.ak(a)
if(r.c.aQ(u,s))a.preventDefault()},
eg:function(a){var u,t,s,r=this
if(!r.bk(a)){r.aB(a)
u=r.ai(a)
if(r.x){t=r.aL(a)
if(r.d.aQ(u,t))a.preventDefault()
return}if(r.r)return
s=r.ak(a)
if(r.c.aQ(u,s))a.preventDefault()}},
ez:function(a){var u,t,s=this
s.aB(a)
u=new V.A((a&&C.u).gfs(a),C.u.gft(a)).t(0,180)
if(s.x){if(s.d.fY(u))a.preventDefault()
return}if(s.r)return
t=s.ak(a)
if(s.c.fZ(u,t))a.preventDefault()},
eB:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ai(s.y)
t=s.ak(s.y)
s.d.eq(u,t,r)}},
eO:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bv(a)
u=t.bt(a)
if(t.e.fW(u))a.preventDefault()},
eK:function(a){var u
this.bv(a)
u=this.bt(a)
if(this.e.fU(u))a.preventDefault()},
eM:function(a){var u
this.bv(a)
u=this.bt(a)
if(this.e.fV(u))a.preventDefault()}}
D.b8.prototype={
ag:function(a){var u=this.r
if(u!=null)u.B(a)},
du:function(){return this.ag(null)},
$iY:1}
D.Y.prototype={}
D.cw.prototype={
ag:function(a){var u=this.x
if(u!=null)u.B(a)},
cf:function(a){var u=this.y
if(u!=null)u.B(a)},
ep:function(){return this.cf(null)},
eE:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.q)(a),++t){s=a[t]
if(s==null||this.dK(s))return!1}return!0},
e0:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gce(),s=[{func:1,ret:-1,args:[D.O]}],r=0;r<b.length;b.length===u||(0,H.q)(b),++r){q=b[r]
if(q instanceof D.b8)this.e.push(q)
p=q.r
if(p==null){p=new D.ba()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}u=new D.bc()
u.b=!0
this.ag(u)},
eI:function(a,b){var u,t,s
for(u=b.gO(b),t=this.gce();u.u();){s=u.gE(u)
C.a.S(this.e,s)
s.gv().S(0,t)}u=new D.bd()
u.b=!0
this.ag(u)},
dK:function(a){var u=C.a.R(this.e,a)
return u},
$ai:function(){return[D.Y]},
$aaC:function(){return[D.Y]}}
D.fR.prototype={$iY:1}
D.he.prototype={$iY:1}
V.M.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.M))return!1
u=b.a
t=$.x().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}}
V.aD.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aD))return!1
u=b.a
t=$.x().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.K(u.a,3,0)+", "+V.K(u.b,3,0)+", "+V.K(u.c,3,0)+", "+V.K(u.d,3,0)+"]"}}
V.eF.prototype={}
V.cF.prototype={
a5:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.J])
return t},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cF))return!1
u=b.a
t=$.x().a
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
h:function(a){var u,t,s,r,q=this,p=[P.J],o=V.bt(H.b([q.a,q.d,q.r],p),3,0),n=V.bt(H.b([q.b,q.e,q.x],p),3,0),m=V.bt(H.b([q.c,q.f,q.y],p),3,0)
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
V.ap.prototype={
a5:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.J])
return t},
cO:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.x().a)return V.cG()
u=1/b1
t=-n
s=-a0
return V.ah((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
q:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.ah(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
b6:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.z(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
bS:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.a_(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ap))return!1
u=b.a
t=$.x().a
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
h:function(a){return this.N()},
I:function(a){var u,t,s,r,q,p=this,o=[P.J],n=V.bt(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.bt(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.bt(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.bt(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
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
N:function(){return this.I("")}}
V.a3.prototype={
D:function(a,b){return new V.a3(this.a-b.a,this.b-b.b)},
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a3))return!1
u=b.a
t=$.x().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
h:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"}}
V.a_.prototype={
C:function(a,b){return new V.a_(this.a+b.a,this.b+b.b,this.c+b.c)},
D:function(a,b){return new V.a_(this.a-b.a,this.b-b.b,this.c-b.c)},
q:function(a,b){return new V.a_(this.a*b,this.b*b,this.c*b)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a_))return!1
u=b.a
t=$.x().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}}
V.cR.prototype={
ga_:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cR))return!1
u=b.a
t=$.x().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.K(u.a,3,0)+", "+V.K(u.b,3,0)+", "+V.K(u.c,3,0)+", "+V.K(u.d,3,0)+"]"}}
V.A.prototype={
bI:function(a){return Math.sqrt(this.w(this))},
w:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.u(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.u(t)
return s*r+u*t},
q:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.q()
u=this.b
if(typeof u!=="number")return u.q()
return new V.A(t*b,u*b)},
t:function(a,b){var u,t
if(Math.abs(b-0)<$.x().a){u=$.k5
return u==null?$.k5=new V.A(0,0):u}u=this.a
if(typeof u!=="number")return u.t()
t=this.b
if(typeof t!=="number")return t.t()
return new V.A(u/b,t/b)},
p:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.A))return!1
u=b.a
t=this.a
s=$.x()
s.toString
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.u(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.u(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"}}
V.z.prototype={
bI:function(a){return Math.sqrt(this.w(this))},
w:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
al:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.z(u*t-s*r,s*q-p*t,p*r-u*q)},
C:function(a,b){return new V.z(this.a+b.a,this.b+b.b,this.c+b.c)},
M:function(a){return new V.z(-this.a,-this.b,-this.c)},
q:function(a,b){return new V.z(this.a*b,this.b*b,this.c*b)},
t:function(a,b){if(Math.abs(b-0)<$.x().a)return V.bU()
return new V.z(this.a/b,this.b/b,this.c/b)},
cP:function(){var u=$.x().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.z))return!1
u=b.a
t=$.x().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}}
U.en.prototype={
bc:function(a){var u=V.my(a,this.c,this.b)
return u},
gv:function(){var u=this.y
return u==null?this.y=D.D():u},
K:function(a){var u=this.y
if(u!=null)u.B(a)},
sbU:function(a,b){},
sbK:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.x().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bc(u)}s=new D.y("maximumLocation",s,t.b)
s.b=!0
t.K(s)}},
sbM:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.x().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bc(u)}s=new D.y("minimumLocation",s,t.c)
s.b=!0
t.K(s)}},
sZ:function(a,b){var u,t=this
b=t.bc(b)
u=t.d
if(!(Math.abs(u-b)<$.x().a)){t.d=b
u=new D.y("location",u,b)
u.b=!0
t.K(u)}},
sbL:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.x().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.y("maximumVelocity",r,a)
r.b=!0
s.K(r)}},
sP:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.x().a)){u.f=a
t=new D.y("velocity",t,a)
t.b=!0
u.K(t)}},
sbA:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.x().a)){this.x=a
u=new D.y("dampening",u,a)
u.b=!0
this.K(u)}},
ad:function(a,b){var u,t,s,r=this,q=r.f,p=$.x().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sZ(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.x().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sP(u)}}}
U.ci.prototype={
gv:function(){var u=this.b
return u==null?this.b=D.D():u},
aI:function(a,b,c){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ci))return!1
return J.B(this.a,b.a)},
h:function(a){return"Constant: "+this.a.I("          ")}}
U.bB.prototype={
gv:function(){var u=this.e
return u==null?this.e=D.D():u},
K:function(a){var u=this.e
if(u!=null)u.B(a)},
W:function(){return this.K(null)},
dZ:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gax(),s=[{func:1,ret:-1,args:[D.O]}],r=0;r<b.length;b.length===u||(0,H.q)(b),++r){q=b[r]
if(q!=null){p=q.gv()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bc()
u.b=!0
this.K(u)},
eG:function(a,b){var u,t
for(u=b.gO(b),t=this.gax();u.u();)u.gE(u).gv().S(0,t)
u=new D.bd()
u.b=!0
this.K(u)},
aI:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.a1()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.X(r,r.length),u=null;r.u();){q=r.d
if(q!=null){t=q.aI(0,b,c)
if(t!=null)u=u==null?t:t.q(0,u)}}s.f=u==null?V.cG():u
r=s.e
if(r!=null)r.as(0)}return s.f},
p:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bB))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.c(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.c(r,t)
if(!J.B(s,r[t]))return!1}return!0},
h:function(a){return"Group"},
$ai:function(){return[U.Z]},
$aaC:function(){return[U.Z]},
$iZ:1}
U.Z.prototype={}
U.d9.prototype={
gv:function(){var u=this.cy
return u==null?this.cy=D.D():u},
K:function(a){var u=this.cy
if(u!=null)u.B(a)},
W:function(){return this.K(null)},
aN:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gcD().m(0,u.gbl())
u.a.c.gcQ().m(0,u.gbn())
u.a.c.gbT().m(0,u.gbp())
return!0},
bm:function(a){var u=this
if(!J.B(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bo:function(a){var u,t,s,r,q,p,o,n=this
H.n(a,"$iaq")
if(!n.y)return
if(n.x){u=a.d.D(0,a.y)
u=new V.A(u.a,u.b)
u=u.w(u)
t=n.r
if(typeof t!=="number")return H.u(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.D(0,a.y)
u=new V.A(t.a,t.b).q(0,2).t(0,u.ga_())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.q()
s=n.e
if(typeof s!=="number")return H.u(s)
t.sP(u*10*s)}else{u=a.c
t=a.d
s=t.D(0,a.y)
r=new V.A(s.a,s.b).q(0,2).t(0,u.ga_())
s=n.b
q=r.a
if(typeof q!=="number")return q.M()
p=n.e
if(typeof p!=="number")return H.u(p)
o=n.z
if(typeof o!=="number")return H.u(o)
s.sZ(0,-q*p+o)
n.b.sP(0)
t=t.D(0,a.z)
n.Q=new V.A(t.a,t.b).q(0,2).t(0,u.ga_())}n.W()},
bq:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.w(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.q()
s=r.e
if(typeof s!=="number")return H.u(s)
u.sP(t*10*s)
r.W()}},
aI:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.a1()
if(q<p){r.ch=p
u=b.y
r.b.ad(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.ah(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$iZ:1}
U.da.prototype={
gv:function(){var u=this.fx
return u==null?this.fx=D.D():u},
K:function(a){var u=this.fx
if(u!=null)u.B(a)},
W:function(){return this.K(null)},
aN:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gcD().m(0,s.gbl())
s.a.c.gcQ().m(0,s.gbn())
s.a.c.gbT().m(0,s.gbp())
u=s.a.d
t=u.f
u=t==null?u.f=D.D():t
u.m(0,s.gdR())
u=s.a.d
t=u.d
u=t==null?u.d=D.D():t
u.m(0,s.gdT())
u=s.a.e
t=u.b
u=t==null?u.b=D.D():t
u.m(0,s.gfa())
u=s.a.e
t=u.d
u=t==null?u.d=D.D():t
u.m(0,s.gf8())
u=s.a.e
t=u.c
u=t==null?u.c=D.D():t
u.m(0,s.gf6())
return!0},
aa:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.M()
u=-u}if(this.r){if(typeof t!=="number")return t.M()
t=-t}return new V.A(u,t)},
bm:function(a){var u=this
H.n(a,"$iaq")
if(!J.B(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bo:function(a){var u,t,s,r,q,p,o,n=this
H.n(a,"$iaq")
if(!n.cx)return
if(n.ch){u=a.d.D(0,a.y)
u=new V.A(u.a,u.b)
u=u.w(u)
t=n.Q
if(typeof t!=="number")return H.u(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.D(0,a.y)
u=n.aa(new V.A(t.a,t.b).q(0,2).t(0,u.ga_()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.M()
s=n.y
if(typeof s!=="number")return H.u(s)
t.sP(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.M()
t=n.x
if(typeof t!=="number")return H.u(t)
s.sP(-u*10*t)}else{u=a.c
t=a.d
s=t.D(0,a.y)
r=n.aa(new V.A(s.a,s.b).q(0,2).t(0,u.ga_()))
s=n.c
q=r.a
if(typeof q!=="number")return q.M()
p=n.y
if(typeof p!=="number")return H.u(p)
o=n.cy
if(typeof o!=="number")return H.u(o)
s.sZ(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.M()
q=n.x
if(typeof q!=="number")return H.u(q)
s=n.db
if(typeof s!=="number")return H.u(s)
o.sZ(0,-p*q+s)
n.b.sP(0)
n.c.sP(0)
t=t.D(0,a.z)
n.dx=n.aa(new V.A(t.a,t.b).q(0,2).t(0,u.ga_()))}n.W()},
bq:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.w(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.M()
s=r.y
if(typeof s!=="number")return H.u(s)
u.sP(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.M()
u=r.x
if(typeof u!=="number")return H.u(u)
s.sP(-t*10*u)
r.W()}},
dS:function(a){var u=this
if(H.n(a,"$icB").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
dU:function(a){var u,t,s,r,q,p,o,n=this
H.n(a,"$iaq")
if(!J.B(n.d,a.x.b))return
u=a.c
t=a.d
s=t.D(0,a.y)
r=n.aa(new V.A(s.a,s.b).q(0,2).t(0,u.ga_()))
s=n.c
q=r.a
if(typeof q!=="number")return q.M()
p=n.y
if(typeof p!=="number")return H.u(p)
o=n.cy
if(typeof o!=="number")return H.u(o)
s.sZ(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.M()
q=n.x
if(typeof q!=="number")return H.u(q)
s=n.db
if(typeof s!=="number")return H.u(s)
o.sZ(0,-p*q+s)
n.b.sP(0)
n.c.sP(0)
t=t.D(0,a.z)
n.dx=n.aa(new V.A(t.a,t.b).q(0,2).t(0,u.ga_()))
n.W()},
fb:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
f9:function(a){var u,t,s,r,q,p,o,n=this
H.n(a,"$id3")
if(!n.cx)return
if(n.ch){u=a.d.D(0,a.y)
u=new V.A(u.a,u.b)
u=u.w(u)
t=n.Q
if(typeof t!=="number")return H.u(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.D(0,a.y)
u=n.aa(new V.A(t.a,t.b).q(0,2).t(0,u.ga_()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.M()
s=n.y
if(typeof s!=="number")return H.u(s)
t.sP(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.M()
t=n.x
if(typeof t!=="number")return H.u(t)
s.sP(-u*10*t)}else{u=a.c
t=a.d
s=t.D(0,a.y)
r=n.aa(new V.A(s.a,s.b).q(0,2).t(0,u.ga_()))
s=n.c
q=r.a
if(typeof q!=="number")return q.M()
p=n.y
if(typeof p!=="number")return H.u(p)
o=n.cy
if(typeof o!=="number")return H.u(o)
s.sZ(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.M()
q=n.x
if(typeof q!=="number")return H.u(q)
s=n.db
if(typeof s!=="number")return H.u(s)
o.sZ(0,-p*q+s)
n.b.sP(0)
n.c.sP(0)
t=t.D(0,a.z)
n.dx=n.aa(new V.A(t.a,t.b).q(0,2).t(0,u.ga_()))}n.W()},
f7:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.w(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.M()
s=r.y
if(typeof s!=="number")return H.u(s)
u.sP(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.M()
u=r.x
if(typeof u!=="number")return H.u(u)
s.sP(-t*10*u)
r.W()}},
aI:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.a1()
if(q<p){r.dy=p
u=b.y
r.c.ad(0,u)
r.b.ad(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.ah(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.q(0,V.ah(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iZ:1}
U.db.prototype={
gv:function(){var u=this.r
return u==null?this.r=D.D():u},
K:function(a){var u=this.r
if(u!=null)u.B(a)},
aN:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.D():t
t=r.gdW()
u.m(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.D():s).m(0,t)
return!0},
dX:function(a){var u,t,s,r,q=this
if(!J.B(q.b,q.a.b.c))return
H.n(a,"$ibG")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.q()
r=u+t*s
if(u!==r){q.d=r
u=new D.y("zoom",u,r)
u.b=!0
q.K(u)}},
aI:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.ah(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$iZ:1}
M.cn.prototype={
ah:function(a){var u=this.y
if(u!=null)u.B(a)},
dv:function(){return this.ah(null)},
ea:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.ga9(),s=[{func:1,ret:-1,args:[D.O]}],r=0;r<b.length;b.length===u||(0,H.q)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.ba()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bc()
u.b=!0
this.ah(u)},
ec:function(a,b){var u,t
for(u=b.gO(b),t=this.ga9();u.u();)u.gE(u).gv().S(0,t)
u=new D.bd()
u.b=!0
this.ah(u)},
sd2:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gv().S(0,t.ga9())
u=t.d
t.d=a
if(a!=null)a.gv().m(0,t.ga9())
s=new D.y("technique",u,t.d)
s.b=!0
t.ah(s)}},
gv:function(){var u=this.y
return u==null?this.y=D.D():u},
aH:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
a.cZ(f.d)
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
o=C.c.a6(p*s)
p=q.b
if(typeof r!=="number")return H.u(r)
n=C.c.a6(p*r)
p=C.c.a6(q.c*s)
a.c=p
q=C.c.a6(q.d*r)
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
i=V.ah(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.cY(i)
t=$.jQ
if(t==null){t=V.jS()
q=V.jg()
p=$.k6
t=V.jN(t,q,p==null?$.k6=new V.z(0,0,-1):p)
$.jQ=t
h=t}else h=t
t=u.b
if(t!=null){g=t.aI(0,a,u)
if(g!=null)h=g.q(0,h)}a.db.cY(h)
u=f.d
if(u!=null)u.ad(0,a)
for(u=f.e.a,u=new J.X(u,u.length);u.u();)u.d.ad(0,a)
for(u=f.e.a,u=new J.X(u,u.length);u.u();)u.d.aH(a)
f.b.toString
a.cy.bO()
a.db.bO()
f.c.toString
a.cX()}}
A.cc.prototype={}
A.ed.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
fB:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
fu:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.S.prototype={
ga7:function(a){var u=this.a?1:0
return u|0|0},
h:function(a){var u=this.a?1:0
return""+(u|0|0)},
p:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.S))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.fh.prototype={
dk:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
b8.z=c3
u=new P.as("")
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
A.lQ(c3,u)
A.lS(c3,u)
A.lR(c3,u)
A.lU(c3,u)
A.lV(c3,u)
A.lT(c3,u)
A.lW(c3,u)
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
m=A.lP(b8.z)
b8.c=n
b8.d=m
b8.e=b8.cc(n,35633)
b8.f=b8.cc(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!s.getProgramParameter(b8.r,35714)){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.t(P.r("Failed to link shader: "+H.e(l)))}b8.f2()
b8.f4()
b8.Q=b8.x.i(0,"posAttr")
b8.cx=b8.x.i(0,"normAttr")
b8.ch=b8.x.i(0,"binmAttr")
b8.cy=b8.x.i(0,"txt2DAttr")
b8.db=b8.x.i(0,"txtCubeAttr")
b8.dx=b8.x.i(0,"bendAttr")
if(c3.dx)b8.id=H.n(b8.y.T(0,"invViewMat"),"$ia5")
if(t)b8.dy=H.n(b8.y.T(0,"objMat"),"$ia5")
if(r)b8.fr=H.n(b8.y.T(0,"viewObjMat"),"$ia5")
b8.fy=H.n(b8.y.T(0,"projViewObjMat"),"$ia5")
if(c3.ry)b8.k1=H.n(b8.y.T(0,"txt2DMat"),"$ibR")
if(c3.x1)b8.k2=H.n(b8.y.T(0,"txtCubeMat"),"$ia5")
if(c3.x2)b8.k3=H.n(b8.y.T(0,"colorMat"),"$ia5")
b8.r1=H.b([],[A.a5])
t=c3.y2
if(t>0){b8.k4=b8.y.T(0,"bendMatCount")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.i(0,q)
if(j==null)H.t(P.r(c0+q+c1))
s.push(H.n(j,"$ia5"))}}if(c3.a.a)b8.r2=H.n(b8.y.T(0,"emissionClr"),"$iI")
if(c3.b.a)b8.x1=H.n(b8.y.T(0,"ambientClr"),"$iI")
if(c3.c.a)b8.y2=H.n(b8.y.T(0,"diffuseClr"),"$iI")
if(c3.d.a)b8.cF=H.n(b8.y.T(0,"invDiffuseClr"),"$iI")
t=c3.e.a
if(!t)s=!1
else s=!0
if(s){b8.cH=H.n(b8.y.T(0,"shininess"),"$iP")
if(t)b8.cG=H.n(b8.y.T(0,"specularClr"),"$iI")}if(c3.cy){b8.cI=H.n(b8.y.T(0,"envSampler"),"$ibm")
if(c3.r.a)b8.cJ=H.n(b8.y.T(0,"reflectClr"),"$iI")
t=c3.x.a
if(!t)s=!1
else s=!0
if(s){b8.cK=H.n(b8.y.T(0,"refraction"),"$iP")
if(t)b8.cL=H.n(b8.y.T(0,"refractClr"),"$iI")}}if(c3.y.a)b8.cM=H.n(b8.y.T(0,"alpha"),"$iP")
t=P.w
s=[t,A.d6]
b8.bB=new H.L(s)
b8.bC=new H.L([t,[P.af,A.bQ]])
b8.bD=new H.L(s)
b8.bE=new H.L([t,[P.af,A.bS]])
b8.bF=new H.L(s)
b8.bG=new H.L([t,[P.af,A.bT]])
if(c3.id){for(t=c3.z,s=t.length,r=[A.bQ],i=0;i<t.length;t.length===s||(0,H.q)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.e(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.ae()
p=(g&1)!==0
if(p){o=b8.y
d=f+"s["+k+"].objUp"
j=o.i(0,d)
if(j==null)H.t(P.r(c0+d+c1))
H.n(j,"$iI")
o=b8.y
d=f+"s["+k+"].objRight"
c=o.i(0,d)
if(c==null)H.t(P.r(c0+d+c1))
H.n(c,"$iI")
o=b8.y
d=f+"s["+k+"].objDir"
b=o.i(0,d)
if(b==null)H.t(P.r(c0+d+c1))
H.n(b,"$iI")
a=b
a0=c
a1=j}else{a=b9
a0=a
a1=a0}o=b8.y
d=f+"s["+k+"].viewDir"
j=o.i(0,d)
if(j==null)H.t(P.r(c0+d+c1))
H.n(j,"$iI")
o=b8.y
d=f+"s["+k+"].color"
c=o.i(0,d)
if(c==null)H.t(P.r(c0+d+c1))
H.n(c,"$iI")
if(p){p=b8.y
o=f+"sTexture2D"+k
b=p.i(0,o)
if(b==null)H.t(P.r(c0+o+c1))
H.n(b,"$ibl")
a2=b}else a2=b9
e.push(new A.bQ(a1,a0,a,j,c,a2))}b8.bC.n(0,g,e)
q=b8.bB
p=b8.y
o=f+"Count"
j=p.i(0,o)
if(j==null)H.t(P.r(c0+o+c1))
q.n(0,g,j)}for(t=c3.Q,s=t.length,r=[A.bS],i=0;i<t.length;t.length===s||(0,H.q)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.e(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.i(0,o)
if(j==null)H.t(P.r(c0+o+c1))
H.n(j,"$iI")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.i(0,o)
if(c==null)H.t(P.r(c0+o+c1))
H.n(c,"$iI")
p=b8.y
o=f+"s["+k+"].color"
b=p.i(0,o)
if(b==null)H.t(P.r(c0+o+c1))
H.n(b,"$iI")
if(typeof g!=="number")return g.ae()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
a3=p.i(0,o)
if(a3==null)H.t(P.r(c0+o+c1))
H.n(a3,"$ibR")
a4=a3}else a4=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
a3=p.i(0,o)
if(a3==null)H.t(P.r(c0+o+c1))
H.n(a3,"$ibm")
a2=a3}else a2=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
a3=p.i(0,o)
if(a3==null)H.t(P.r(c0+o+c1))
H.n(a3,"$ibm")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a5=p.i(0,o)
if(a5==null)H.t(P.r(c0+o+c1))
H.n(a5,"$ibP")
a6=a3
a7=a5}else{a6=b9
a7=a6}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
a3=p.i(0,o)
if(a3==null)H.t(P.r(c0+o+c1))
H.n(a3,"$iP")
p=b8.y
o=f+"s["+k+"].att1"
a5=p.i(0,o)
if(a5==null)H.t(P.r(c0+o+c1))
H.n(a5,"$iP")
p=b8.y
o=f+"s["+k+"].att2"
a8=p.i(0,o)
if(a8==null)H.t(P.r(c0+o+c1))
H.n(a8,"$iP")
a9=a8
b0=a5
b1=a3}else{a9=b9
b0=a9
b1=b0}e.push(new A.bS(j,c,a4,b,a2,a6,a7,b1,b0,a9))}b8.bE.n(0,g,e)
q=b8.bD
p=b8.y
o=f+"Count"
j=p.i(0,o)
if(j==null)H.t(P.r(c0+o+c1))
q.n(0,g,j)}for(t=c3.ch,s=t.length,r=[A.bT],i=0;i<t.length;t.length===s||(0,H.q)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.e(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.i(0,o)
if(j==null)H.t(P.r(c0+o+c1))
H.n(j,"$iI")
p=b8.y
o=f+"s["+k+"].objDir"
c=p.i(0,o)
if(c==null)H.t(P.r(c0+o+c1))
H.n(c,"$iI")
p=b8.y
o=f+"s["+k+"].viewPnt"
b=p.i(0,o)
if(b==null)H.t(P.r(c0+o+c1))
H.n(b,"$iI")
p=b8.y
o=f+"s["+k+"].color"
a3=p.i(0,o)
if(a3==null)H.t(P.r(c0+o+c1))
H.n(a3,"$iI")
if(typeof g!=="number")return g.ae()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a5=p.i(0,o)
if(a5==null)H.t(P.r(c0+o+c1))
H.n(a5,"$iI")
p=b8.y
o=f+"s["+k+"].objRight"
a8=p.i(0,o)
if(a8==null)H.t(P.r(c0+o+c1))
H.n(a8,"$iI")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.i(0,o)
if(b2==null)H.t(P.r(c0+o+c1))
H.n(b2,"$iP")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.i(0,o)
if(b3==null)H.t(P.r(c0+o+c1))
H.n(b3,"$iP")
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
H.n(a5,"$ibP")
a7=a5}else a7=b9
if((g&8)!==0){o=b8.y
d=f+"s["+k+"].cutoff"
a5=o.i(0,d)
if(a5==null)H.t(P.r(c0+d+c1))
H.n(a5,"$iP")
o=b8.y
d=f+"s["+k+"].coneAngle"
a8=o.i(0,d)
if(a8==null)H.t(P.r(c0+d+c1))
H.n(a8,"$iP")
b6=a8
b7=a5}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
d=f+"s["+k+"].att0"
a5=o.i(0,d)
if(a5==null)H.t(P.r(c0+d+c1))
H.n(a5,"$iP")
o=b8.y
d=f+"s["+k+"].att1"
a8=o.i(0,d)
if(a8==null)H.t(P.r(c0+d+c1))
H.n(a8,"$iP")
o=b8.y
d=f+"s["+k+"].att2"
b2=o.i(0,d)
if(b2==null)H.t(P.r(c0+d+c1))
H.n(b2,"$iP")
a9=b2
b0=a8
b1=a5}else{a9=b9
b0=a9
b1=b0}if((g&1)!==0){o=b8.y
d=f+"sTexture2D"+k
a5=o.i(0,d)
if(a5==null)H.t(P.r(c0+d+c1))
H.n(a5,"$ibl")
a2=a5}else a2=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a5=p.i(0,o)
if(a5==null)H.t(P.r(c0+o+c1))
H.n(a5,"$ibl")
a6=a5}else a6=b9
e.push(new A.bT(j,c,b,a3,a1,a0,b5,b4,a7,b7,b6,b1,b0,a9,a2,a6))}b8.bG.n(0,g,e)
q=b8.bF
p=b8.y
o=f+"Count"
j=p.i(0,o)
if(j==null)H.t(P.r(c0+o+c1))
q.n(0,g,j)}}},
eZ:function(a,b){}}
A.ck.prototype={
h:function(a){return"dirLight"+H.e(this.a)}}
A.cP.prototype={
h:function(a){return"pointLight"+H.e(this.a)}}
A.cU.prototype={
h:function(a){return"spotLight"+H.e(this.a)}}
A.fk.prototype={
h:function(a){return this.aP}}
A.bQ.prototype={}
A.bS.prototype={}
A.bT.prototype={}
A.cS.prototype={
dn:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cc:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.f(P.r("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
f2:function(){var u,t,s,r=this,q=H.b([],[A.cc]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.u(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cc(p,t.name,s))}r.x=new A.ed(q)},
f4:function(){var u,t,s,r=this,q=H.b([],[A.d5]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.u(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.fq(t.type,t.size,t.name,s))}r.y=new A.hI(q)},
aA:function(a,b,c){var u=this.a
if(a===1)return new A.d6(u,b,c)
else return A.jf(u,this.r,b,a,c)},
dM:function(a,b,c){var u=this.a
if(a===1)return new A.bl(u,b,c)
else return A.jf(u,this.r,b,a,c)},
dN:function(a,b,c){var u=this.a
if(a===1)return new A.bm(u,b,c)
else return A.jf(u,this.r,b,a,c)},
aX:function(a,b){return new P.dl(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
fq:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aA(b,c,d)
case 5121:return u.aA(b,c,d)
case 5122:return u.aA(b,c,d)
case 5123:return u.aA(b,c,d)
case 5124:return u.aA(b,c,d)
case 5125:return u.aA(b,c,d)
case 5126:return new A.P(u.a,c,d)
case 35664:return new A.hE(u.a,c,d)
case 35665:return new A.I(u.a,c,d)
case 35666:return new A.bP(u.a,c,d)
case 35667:return new A.hF(u.a,c,d)
case 35668:return new A.hG(u.a,c,d)
case 35669:return new A.hH(u.a,c,d)
case 35674:return new A.hJ(u.a,c,d)
case 35675:return new A.bR(u.a,c,d)
case 35676:return new A.a5(u.a,c,d)
case 35678:return u.dM(b,c,d)
case 35680:return u.dN(b,c,d)
case 35670:throw H.f(u.aX("BOOL",c))
case 35671:throw H.f(u.aX("BOOL_VEC2",c))
case 35672:throw H.f(u.aX("BOOL_VEC3",c))
case 35673:throw H.f(u.aX("BOOL_VEC4",c))
default:throw H.f(P.r("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.d5.prototype={}
A.hI.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
T:function(a,b){var u=this.i(0,b)
if(u==null)throw H.f(P.r("Required uniform value, "+b+", was not defined or used in shader."))
return u},
h:function(a){return this.N()},
N:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.q)(u),++r)s+=u[r].h(0)+"\n"
return s}}
A.d6.prototype={
h:function(a){return"Uniform1i: "+H.e(this.c)}}
A.hF.prototype={
h:function(a){return"Uniform2i: "+H.e(this.c)}}
A.hG.prototype={
h:function(a){return"Uniform3i: "+H.e(this.c)}}
A.hH.prototype={
h:function(a){return"Uniform4i: "+H.e(this.c)}}
A.hD.prototype={
h:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.P.prototype={
h:function(a){return"Uniform1f: "+H.e(this.c)}}
A.hE.prototype={
h:function(a){return"Uniform2f: "+H.e(this.c)}}
A.I.prototype={
h:function(a){return"Uniform3f: "+H.e(this.c)}}
A.bP.prototype={
h:function(a){return"Uniform4f: "+H.e(this.c)}}
A.hJ.prototype={
h:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.bR.prototype={
a8:function(a){var u=new Float32Array(H.c6(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
h:function(a){return"UniformMat3: "+H.e(this.c)}}
A.a5.prototype={
a8:function(a){var u=new Float32Array(H.c6(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
h:function(a){return"UniformMat4: "+H.e(this.c)}}
A.bl.prototype={
h:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.bm.prototype={
h:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.iX.prototype={
$1:function(a){return new V.a_(Math.cos(a),Math.sin(a),0)}}
F.iK.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.jw(n.$1(o),m)
m=J.jw(n.$1(o+3.141592653589793/p.c),m).D(0,l)
m=new V.z(m.a,m.b,m.c)
u=m.t(0,Math.sqrt(m.w(m)))
n=$.k7
if(n==null){n=new V.z(1,0,0)
$.k7=n
t=n}else t=n
n=u.al(!J.B(u,t)?V.k9():t)
s=n.t(0,Math.sqrt(n.w(n)))
n=s.al(u)
t=n.t(0,Math.sqrt(n.w(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.q(0,n*m)
m=s.q(0,q*m)
m=l.C(0,new V.a_(n.a-m.a,n.b-m.b,n.c-m.c))
if(!J.B(a.f,m)){a.f=m
n=a.a
if(n!=null)n.a0()}}}
F.bb.prototype={
b_:function(){var u=this
if(!u.gcC()){C.a.S(u.a.a.d.b,u)
u.a.a.a0()}u.eR()
u.eS()
u.eT()},
f_:function(a){this.a=a
a.d.b.push(this)},
f0:function(a){this.b=a
a.d.c.push(this)},
f1:function(a){this.c=a
a.d.d.push(this)},
eR:function(){var u=this.a
if(u!=null){C.a.S(u.d.b,this)
this.a=null}},
eS:function(){var u=this.b
if(u!=null){C.a.S(u.d.c,this)
this.b=null}},
eT:function(){var u=this.c
if(u!=null){C.a.S(u.d.d,this)
this.c=null}},
gcC:function(){return this.a==null||this.b==null||this.c==null},
dG:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.bU()
if(q!=null)s=s.C(0,q)
if(u!=null)s=s.C(0,u)
if(t!=null)s=s.C(0,t)
if(s.cP())return
return s.t(0,Math.sqrt(s.w(s)))},
dI:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.D(0,q)
r=new V.z(r.a,r.b,r.c)
s=r.t(0,Math.sqrt(r.w(r)))
r=t.D(0,q)
r=new V.z(r.a,r.b,r.c)
r=s.al(r.t(0,Math.sqrt(r.w(r))))
return r.t(0,Math.sqrt(r.w(r)))},
by:function(){var u,t=this
if(t.d!=null)return!0
u=t.dG()
if(u==null){u=t.dI()
if(u==null)return!1}t.d=u
t.a.a.a0()
return!0},
dF:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.bU()
if(q!=null)s=s.C(0,q)
if(u!=null)s=s.C(0,u)
if(t!=null)s=s.C(0,t)
if(s.cP())return
return s.t(0,Math.sqrt(s.w(s)))},
dH:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.x().a){l=d.D(0,g)
l=new V.z(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.w(l)))
if(s.a-t.a<0)q=q.M(0)}else{p=(l-u.b)/r
l=d.D(0,g).q(0,p).C(0,g).D(0,j)
l=new V.z(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.w(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.M(0)}l=n.d
if(l!=null){o=l.t(0,Math.sqrt(l.w(l)))
l=o.al(q)
l=l.t(0,Math.sqrt(l.w(l))).al(o)
q=l.t(0,Math.sqrt(l.w(l)))}return q},
bw:function(){var u,t=this
if(t.e!=null)return!0
u=t.dF()
if(u==null){u=t.dH()
if(u==null)return!1}t.e=u
t.a.a.a0()
return!0},
gcz:function(a){var u=this
if(J.B(u.a,u.b))return!0
if(J.B(u.b,u.c))return!0
if(J.B(u.c,u.a))return!0
return!1},
p:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.N()},
I:function(a){var u,t,s=this
if(s.gcC())return a+"disposed"
u=a+C.b.aq(J.ab(s.a.e),0)+", "+C.b.aq(J.ab(s.b.e),0)+", "+C.b.aq(J.ab(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.h(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.h(0)+"}"):u+"-}"},
N:function(){return this.I("")}}
F.eJ.prototype={}
F.hb.prototype={
bJ:function(a,b,c){var u,t=b.a
t.a.a.L()
t=t.e
u=c.a
u.a.a.L()
if(t==u.e){t=b.b
t.a.a.L()
t=t.e
u=c.b
u.a.a.L()
if(t==u.e){t=b.c
t.a.a.L()
t=t.e
u=c.c
u.a.a.L()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.L()
t=t.e
u=c.b
u.a.a.L()
if(t==u.e){t=b.b
t.a.a.L()
t=t.e
u=c.c
u.a.a.L()
if(t==u.e){t=b.c
t.a.a.L()
t=t.e
u=c.a
u.a.a.L()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.L()
t=t.e
u=c.c
u.a.a.L()
if(t==u.e){t=b.b
t.a.a.L()
t=t.e
u=c.a
u.a.a.L()
if(t==u.e){t=b.c
t.a.a.L()
t=t.e
u=c.b
u.a.a.L()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.cx.prototype={}
F.f6.prototype={}
F.hC.prototype={}
F.cO.prototype={}
F.h3.prototype={
gv:function(){var u=this.e
return u==null?this.e=D.D():u},
aD:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aD()||!1
if(!t.a.aD())u=!1
s=t.e
if(s!=null)s.as(0)
return u},
fM:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.b(o.slice(0),[H.bu(o,0)])
for(o=[F.bV];u.length!==0;){t=C.a.gfE(u)
C.a.d_(u,0)
if(t!=null){s=H.b([],o)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.c(u,r)
q=u[r]
if(q!=null&&a.bJ(0,t,q)){s.push(q)
C.a.d_(u,r)}}if(s.length>1)b.fL(s)}}p.a.L()
p.c.bP()
p.d.bP()
p.b.h2()
p.c.bQ(new F.hC())
p.d.bQ(new F.hb())
o=p.e
if(o!=null)o.as(0)},
fl:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.aA()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.az().a)!==0)++s
if((t&$.ay().a)!==0)++s
if((t&$.b0().a)!==0)++s
if((t&$.b1().a)!==0)++s
if((t&$.ca().a)!==0)++s
if((t&$.cb().a)!==0)++s
if((t&$.bv().a)!==0)++s
if((t&$.ax().a)!==0)++s
r=a4.gbY(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.J])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.ce])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.ff(m)
k=l.gbY(l)
if(m>=t)return H.c(o,m)
o[m]=new Z.ce(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.c(i,j)
h=i[j].fK(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.c(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.c6(p)),35044)
u.bindBuffer(a1,null)
c=new Z.cf(new Z.dc(a1,d),o,a4)
c.b=H.b([],[Z.cr])
a0.b.b
a0.c.b
if(a0.d.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.L()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.c(t,m)
t=t[m].b
t.a.a.L()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.c(t,m)
t=t[m].c
t.a.a.L()
b.push(t.e)}a=Z.lp(u,34963,b)
c.b.push(new Z.cr(4,b.length,a))}return c},
h:function(a){var u=this,t=H.b([],[P.p])
if(u.a.c.length!==0){t.push("Vertices:")
t.push(u.a.I("   "))}u.b.b
u.c.b
if(u.d.b.length!==0){t.push("Faces:")
t.push(u.d.I("   "))}return C.a.k(t,"\n")},
a0:function(){var u=this.e
if(u!=null)u.B(null)}}
F.h4.prototype={
fd:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.bb])
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
h.push(F.eI(m,l,j))
u.a.m(0,m)
u.a.m(0,j)
u.a.m(0,i)
h.push(F.eI(m,j,i))}else{n.m(0,l)
u.a.m(0,j)
u.a.m(0,i)
h.push(F.eI(l,j,i))
u.a.m(0,l)
u.a.m(0,i)
u.a.m(0,m)
h.push(F.eI(l,i,m))}p=!p}r=!r}return h},
gl:function(a){return this.b.length},
bQ:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.c(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.i(0,q)
for(o=q-1;o>=0;--o){n=r.d.i(0,o)
if(a.bJ(0,p,n)){p.b_()
break}}}}},
bP:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
s=t[u]
t=s.gcz(s)
if(t)s.b_()}},
aD:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.q)(u),++r)if(!u[r].by())s=!1
return s},
bx:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.q)(u),++r)if(!u[r].bw())s=!1
return s},
h:function(a){return this.N()},
I:function(a){var u,t,s,r=H.b([],[P.p])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].I(a))
return C.a.k(r,"\n")},
N:function(){return this.I("")}}
F.h5.prototype={
gl:function(a){return 0},
bQ:function(a){var u,t,s,r,q
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.c(s,t)
r=s[t]
for(r.c.c,q=-1;!1;--q)r.c.i(0,q)}},
bP:function(){var u,t,s
for(u=-1;!1;--u){t=this.b
return H.c(t,u)
s=t[u]
t=s.gcz(s)
if(t)s.b_()}},
h:function(a){return this.N()},
I:function(a){var u,t,s=H.b([],[P.p])
for(u=0;!1;++u){t=this.b
if(u>=0)return H.c(t,u)
s.push(t[u].I(a+(""+u+". ")))}return C.a.k(s,"\n")},
N:function(){return this.I("")}}
F.h6.prototype={
gl:function(a){return 0},
h2:function(){var u,t
for(u=-1;!1;--u){t=this.b
return H.c(t,u)
t=t[u].ghA()
t=t.ghx(t)
if(t.gl(t).U(0,1)){t=this.b
return H.c(t,u)
t[u].b_()}}},
h:function(a){return this.N()},
I:function(a){var u,t,s=H.b([],[P.p])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.c(u,t)
s.push(u[t].I(a))}return C.a.k(s,"\n")},
N:function(){return this.I("")}}
F.bV.prototype={
cB:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.ka(u.cx,r,o,t,s,q,p,a,n)},
fK:function(a){var u,t,s=this
if(a.p(0,$.aA())){u=s.f
t=[P.J]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.az())){u=s.r
t=[P.J]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.ay())){u=s.x
t=[P.J]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.b0())){u=s.y
t=[P.J]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.p(0,$.b1())){u=s.z
t=[P.J]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.ca())){u=s.Q
t=[P.J]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.cb())){u=s.Q
t=[P.J]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.p(0,$.bv()))return H.b([s.ch],[P.J])
else if(a.p(0,$.ax())){u=H.b([-1,-1,-1,-1],[P.J])
return u}else return H.b([],[P.J])},
by:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.bU()
t.d.H(0,new F.i3(s))
s=s.a
t.r=s.t(0,Math.sqrt(s.w(s)))
s=t.a
if(s!=null){s.a0()
s=t.a.e
if(s!=null)s.as(0)}return!0},
bw:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.bU()
t.d.H(0,new F.i2(s))
s=s.a
t.x=s.t(0,Math.sqrt(s.w(s)))
s=t.a
if(s!=null){s.a0()
s=t.a.e
if(s!=null)s.as(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.N()},
I:function(a){var u,t,s=this,r="-",q=H.b([],[P.p])
q.push(C.b.aq(J.ab(s.e),0))
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
q.push(V.K(s.ch,3,0))
q.push(r)
t=C.a.k(q,", ")
return a+"{"+t+"}"},
N:function(){return this.I("")}}
F.i3.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.C(0,t)}}}
F.i2.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.C(0,t)}}}
F.hU.prototype={
L:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.c(u,r)
u[r].e=s;++s}this.b=!1}},
m:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.f(P.r("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.a0()
return!0},
cq:function(a,b){var u=null,t=F.ka(u,u,a,u,u,b,u,u,0)
this.m(0,t)
return t},
gl:function(a){return this.c.length},
aD:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)u[s].by()
return!0},
bx:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)u[s].bw()
return!0},
fm:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.t(0,Math.sqrt(p*p+o*o+n*n))
if(!J.B(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.B(null)}}}}return!0},
h:function(a){return this.N()},
I:function(a){var u,t,s,r
this.L()
u=H.b([],[P.p])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.q)(t),++r)u.push(t[r].I(a))
return C.a.k(u,"\n")},
N:function(){return this.I("")}}
F.hV.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
i:function(a,b){var u,t=this.b,s=t.length
if(b<s){if(b<0)return H.c(t,b)
return t[b]}b-=s
t=this.c
u=t.length
if(b<u){if(b<0)return H.c(t,b)
return t[b]}b-=u
t=this.d
if(b<0||b>=t.length)return H.c(t,b)
return t[b]},
H:function(a,b){var u=this
C.a.H(u.b,b)
C.a.H(u.c,new F.hW(u,b))
C.a.H(u.d,new F.hX(u,b))},
h:function(a){return this.N()},
N:function(){var u,t,s,r=H.b([],[P.p])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].I(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].I(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].I(""))
return C.a.k(r,"\n")}}
F.hW.prototype={
$1:function(a){if(!J.B(a.a,this.a))this.b.$1(a)}}
F.hX.prototype={
$1:function(a){var u=this.a
if(!J.B(a.a,u)&&!J.B(a.b,u))this.b.$1(a)}}
F.hY.prototype={
gl:function(a){return 0},
i:function(a,b){var u,t
if(b>=0){u=this.c
t=b-0
if(t>=0)return H.c(u,t)
return u[t]}else{u=this.b
return H.c(u,b)
return u[b]}},
h:function(a){return this.N()},
N:function(){var u,t,s=H.b([],[P.p])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.c(u,t)
s.push(u[t].I(""))}for(u=this.c,t=0;!1;++t){if(t>=0)return H.c(u,t)
s.push(u[t].I(""))}return C.a.k(s,"\n")}}
F.i_.prototype={}
F.hZ.prototype={
bJ:function(a,b,c){return J.B(b.f,c.f)}}
F.i0.prototype={}
F.fJ.prototype={
fL:function(a){var u,t,s,r,q,p,o,n,m=V.bU()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null)m=new V.z(m.a+s.a,m.b+s.b,m.c+s.c)}m=m.t(0,Math.sqrt(m.w(m)))
for(u=a.length,s=m==null,t=0;t<a.length;a.length===u||(0,H.q)(a),++t){r=a[t]
if(s)q=null
else{p=m.a
o=m.b
n=m.c
q=m.t(0,Math.sqrt(p*p+o*o+n*n))}if(!J.B(r.r,q)){r.r=q
p=r.a
if(p!=null){p=p.e
if(p!=null)p.B(null)}}}return}}
F.i1.prototype={
gl:function(a){return 0},
h:function(a){return this.N()},
N:function(){var u,t,s=H.b([],[P.p])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.c(u,t)
s.push(u[t].I(""))}return C.a.k(s,"\n")}}
O.cD.prototype={
gv:function(){var u=this.fr
return u==null?this.fr=D.D():u},
a2:function(a){var u=this.fr
if(u!=null)u.B(a)},
e8:function(){return this.a2(null)},
cg:function(a){this.a=null
this.a2(a)},
eW:function(){return this.cg(null)},
e2:function(a,b){var u=new D.bc()
u.b=!0
this.a2(u)},
e4:function(a,b){var u=new D.bd()
u.b=!0
this.a2(u)},
c9:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.w,h=new H.L([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=h.i(0,0)
h.n(0,0,r==null?1:r)}q=H.b([],[A.ck])
h.H(0,new O.fo(j,q))
C.a.b8(q,new O.fp())
p=new H.L([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){o=u[s]
r=o.gaO()
n=p.i(0,o.gaO())
p.n(0,r,n==null?1:n)}m=H.b([],[A.cP])
p.H(0,new O.fq(j,m))
C.a.b8(m,new O.fr())
l=new H.L([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.q)(i),++s){o=i[s]
t=o.gaO()
r=l.i(0,o.gaO())
l.n(0,t,r==null?1:r)}k=H.b([],[A.cU])
l.H(0,new O.fs(j,k))
C.a.b8(k,new O.ft())
i=C.d.X(j.e.a.length+3,4)
j.dy.e
return A.l5(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
dE:function(a,b){},
ad:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.X(u,u.length);u.u();){t=u.d
t.toString
s=$.hT
if(s==null)s=$.hT=new V.z(0,0,1)
t.a=s
r=$.hS
t.d=r==null?$.hS=new V.z(0,1,0):r
r=$.hR
t.e=r==null?$.hR=new V.z(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.b6(s)
r=s.a
p=s.b
o=s.c
t.a=s.t(0,Math.sqrt(r*r+p*p+o*o))
o=q.b6(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.t(0,Math.sqrt(p*p+r*r+s*s))
s=q.b6(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.t(0,Math.sqrt(r*r+p*p+o*o))}}}},
h4:function(b3,b4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.a
if(b2==null){b2=b1.c9()
u=b3.fr.i(0,b2.aP)
if(u==null){u=A.l4(b2,b3.a)
t=u.b
if(t.length===0)H.t(P.r("May not cache a shader with no name."))
if(b3.fr.cA(0,t))H.t(P.r('Shader cache already contains a shader by the name "'+t+'".'))
b3.fr.n(0,t,u)}b2=b1.a=u
b4.e=null}s=b2.z
r=s.cE
b2=b4.e
if(!(b2 instanceof Z.cf))b2=b4.e=null
if(b2==null||!b2.d.p(0,r)){b2=s.k3
if(b2)b4.d.aD()
q=s.k4
if(q){p=b4.d
o=p.e
if(o!=null)++o.d
p.d.bx()
p.a.bx()
p=p.e
if(p!=null)p.as(0)}p=s.r2
if(p){o=b4.d
n=o.e
if(n!=null)++n.d
o.a.fm()
o=o.e
if(o!=null)o.as(0)}m=b4.d.fl(new Z.i5(b3.a),r)
m.aG($.aA()).e=b1.a.Q.c
if(b2)m.aG($.az()).e=b1.a.cx.c
if(q)m.aG($.ay()).e=b1.a.ch.c
if(s.r1)m.aG($.b0()).e=b1.a.cy.c
if(p)m.aG($.b1()).e=b1.a.db.c
if(s.rx)m.aG($.ax()).e=b1.a.dx.c
b4.e=m}l=H.b([],[T.hr])
b2=b1.a
q=b3.a
q.useProgram(b2.r)
b2.x.fB()
if(s.dy){b2=b1.a
p=b3.dx
p=p.gV(p)
b2=b2.dy
b2.toString
b2.a8(p.a5(0,!0))}if(s.fr){b2=b1.a
p=b3.cx
if(p==null){p=b3.db
p=p.gV(p)
o=b3.dx
o=b3.cx=p.q(0,o.gV(o))
p=o}b2=b2.fr
b2.toString
b2.a8(p.a5(0,!0))}b2=b1.a
p=b3.ch
if(p==null){p=b3.gh0()
o=b3.dx
o=b3.ch=p.q(0,o.gV(o))
p=o}b2=b2.fy
b2.toString
b2.a8(p.a5(0,!0))
if(s.ry){b2=b1.a
p=b1.b
b2=b2.k1
b2.toString
b2.a8(C.j.a5(p,!0))}if(s.x1){b2=b1.a
p=b1.c
b2=b2.k2
b2.toString
b2.a8(C.j.a5(p,!0))}if(s.x2){b2=b1.a
p=b1.d
b2=b2.k3
b2.toString
b2.a8(C.j.a5(p,!0))}if(s.y2>0){k=b1.e.a.length
b2=b1.a.k4
b2.a.uniform1i(b2.d,k)
for(j=0;j<k;++j){b2=b1.a
p=b1.e.a
if(j>=p.length)return H.c(p,j)
p=p[j]
b2=b2.r1
if(j>=b2.length)return H.c(b2,j)
b2=b2[j]
i=new Float32Array(H.c6(p.a5(0,!0)))
b2.a.uniformMatrix4fv(b2.d,!1,i)}}if(s.a.a){b2=b1.a
p=b1.f.f
b2=b2.r2
b2.a.uniform3f(b2.d,p.a,p.b,p.c)}if(s.id){if(s.b.a){b2=b1.a
p=b1.r.f
b2=b2.x1
b2.a.uniform3f(b2.d,p.a,p.b,p.c)}if(s.c.a){b2=b1.a
p=b1.x.f
b2=b2.y2
b2.a.uniform3f(b2.d,p.a,p.b,p.c)}if(s.d.a){b2=b1.a
p=b1.y.f
b2=b2.cF
b2.a.uniform3f(b2.d,p.a,p.b,p.c)}b2=s.e.a
if(!b2)p=!1
else p=!0
if(p){p=b1.a
o=b1.z.ch
p=p.cH
p.a.uniform1f(p.d,o)}if(b2){b2=b1.a
p=b1.z.f
b2=b2.cG
b2.a.uniform3f(b2.d,p.a,p.b,p.c)}b2=s.z
if(b2.length>0){p=b3.db
h=p.gV(p)
p=P.w
g=new H.L([p,p])
for(p=b1.dx.e,o=p.length,f=0;f<p.length;p.length===o||(0,H.q)(p),++f){e=p[f]
d=g.i(0,0)
if(d==null)d=0
g.n(0,0,d+1)
c=J.e9(b1.a.bC.i(0,0),d)
n=h.b6(e.a)
b=n.a
a=n.b
a0=n.c
a0=n.t(0,Math.sqrt(b*b+a*a+a0*a0))
a=c.e
b=a0.a
n=a0.b
a0=a0.c
a.a.uniform3f(a.d,b,n,a0)
a0=e.c
n=c.f
n.a.uniform3f(n.d,a0.a,a0.b,a0.c)}for(p=b2.length,f=0;f<b2.length;b2.length===p||(0,H.q)(b2),++f){o=b2[f].a
k=g.i(0,o)
if(k==null)k=0
o=b1.a.bB.i(0,o)
o.a.uniform1i(o.d,k)}}b2=s.Q
if(b2.length>0){p=b3.db
h=p.gV(p)
p=P.w
a1=new H.L([p,p])
for(p=b1.dx.f,o=p.length,f=0;f<p.length;p.length===o||(0,H.q)(p),++f){e=p[f]
a2=e.gaO()
d=a1.i(0,a2)
if(d==null)d=0
a1.n(0,a2,d+1)
c=J.e9(b1.a.bE.i(0,a2),d)
a3=h.q(0,e.gV(e))
n=e.gV(e)
b=$.bJ
n=n.bS(b==null?$.bJ=new V.a_(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=$.bJ
n=a3.bS(n==null?$.bJ=new V.a_(0,0,0):n)
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=e.gaF(e)
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
e.gat()
n=a3.cO(0)
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
i=new Float32Array(H.c6(new V.cF(b,a,a0,a4,a5,a6,a7,a8,n).a5(0,!0)))
a9.a.uniformMatrix3fv(a9.d,!1,i)
e.gat()
n=e.gat()
if(!C.a.R(l,n)){n.san(0,l.length)
l.push(n)}n=e.gat()
b=n.gao(n)
if(b){b=c.f
b.toString
a=n.gao(n)
if(!a)b.a.uniform1i(b.d,0)
else{n=n.gan(n)
b.a.uniform1i(b.d,n)}}e.gaJ()
n=e.gdc()
b=c.x
b.toString
a=n.gfw(n)
a0=n.gfz(n)
a4=n.gfA()
n=n.gfv()
b.a.uniform4f(b.d,a,a0,a4,n)
n=e.gaJ()
if(!C.a.R(l,n)){n.san(0,l.length)
l.push(n)}n=e.gaJ()
b=n.gao(n)
if(b){b=c.r
b.toString
a=n.gao(n)
if(!a)b.a.uniform1i(b.d,0)
else{n=n.gan(n)
b.a.uniform1i(b.d,n)}}if(e.gfC()){n=e.gfg()
b=c.y
b.a.uniform1f(b.d,n)
n=e.gfh()
b=c.z
b.a.uniform1f(b.d,n)
n=e.gfi()
b=c.Q
b.a.uniform1f(b.d,n)}}for(p=b2.length,f=0;f<b2.length;b2.length===p||(0,H.q)(b2),++f){o=b2[f].a
k=a1.i(0,o)
if(k==null)k=0
o=b1.a.bD.i(0,o)
o.a.uniform1i(o.d,k)}}b2=s.ch
if(b2.length>0){p=b3.db
h=p.gV(p)
p=P.w
b0=new H.L([p,p])
for(p=b1.dx.r,o=p.length,f=0;f<p.length;p.length===o||(0,H.q)(p),++f){e=p[f]
a2=e.gaO()
d=b0.i(0,a2)
if(d==null)d=0
b0.n(0,a2,d+1)
c=J.e9(b1.a.bG.i(0,a2),d)
n=e.gh_(e)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=e.ghf(e).hw()
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=h.bS(e.gh_(e))
b=c.d
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=e.gaF(e)
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
e.gat()
n=e.gbT()
b=c.f
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=e.gbR(e)
b=c.r
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=e.ghy()
b=c.x
b.a.uniform1f(b.d,n)
n=e.ghz()
b=c.y
b.a.uniform1f(b.d,n)
e.gat()
n=e.gat()
if(!C.a.R(l,n)){n.san(0,l.length)
l.push(n)}n=e.gat()
b=n.gao(n)
if(b){b=c.dx
b.toString
a=n.gao(n)
if(!a)b.a.uniform1i(b.d,0)
else{n=n.gan(n)
b.a.uniform1i(b.d,n)}}e.gaJ()
n=e.gdc()
b=c.z
b.toString
a=n.gfw(n)
a0=n.gfz(n)
a4=n.gfA()
n=n.gfv()
b.a.uniform4f(b.d,a,a0,a4,n)
n=e.gaJ()
if(!C.a.R(l,n)){n.san(0,l.length)
l.push(n)}n=e.gaJ()
b=n.gao(n)
if(b){b=c.dy
b.toString
a=n.gao(n)
if(!a)b.a.uniform1i(b.d,0)
else{n=n.gan(n)
b.a.uniform1i(b.d,n)}}if(e.ghg()){n=e.ghe()
b=c.Q
b.a.uniform1f(b.d,n)
n=e.ghd()
b=c.ch
b.a.uniform1f(b.d,n)}if(e.gfC()){n=e.gfg()
b=c.cx
b.a.uniform1f(b.d,n)
n=e.gfh()
b=c.cy
b.a.uniform1f(b.d,n)
n=e.gfi()
b=c.db
b.a.uniform1f(b.d,n)}}for(p=b2.length,f=0;f<b2.length;b2.length===p||(0,H.q)(b2),++f){o=b2[f].a
k=b0.i(0,o)
if(k==null)k=0
o=b1.a.bF.i(0,o)
o.a.uniform1i(o.d,k)}}}if(s.dx){b2=b1.a
p=b3.Q
if(p==null){p=b3.db
p=b3.Q=p.gV(p).cO(0)}b2=b2.id
b2.toString
b2.a8(p.a5(0,!0))}if(s.cy){b1.dE(l,b1.ch)
b2=b1.a
p=b1.ch
b2.eZ(b2.cI,p)
if(s.r.a){b2=b1.a
p=b1.cx.f
b2=b2.cJ
b2.a.uniform3f(b2.d,p.a,p.b,p.c)}b2=s.x.a
if(!b2)p=!1
else p=!0
if(p){p=b1.a
o=b1.cy.ch
p=p.cK
p.a.uniform1f(p.d,o)}if(b2){b2=b1.a
p=b1.cy.f
b2=b2.cL
b2.a.uniform3f(b2.d,p.a,p.b,p.c)}}b2=s.y.a
p=!b2
if(p)o=!1
else o=!0
if(o){if(b2){b2=b1.a
o=b1.db.f
b2=b2.cM
b2.a.uniform1f(b2.d,o)}q.enable(3042)
q.blendFunc(770,771)}for(j=0;j<l.length;++j)l[j].aY(b3)
b2=b4.e
b2.aY(b3)
b2.aH(b3)
b2.d5(b3)
if(p)b2=!1
else b2=!0
if(b2)q.disable(3042)
for(j=0;j<l.length;++j)l[j].d5(b3)
b2=b1.a
b2.toString
q.useProgram(null)
b2.x.fu()},
h:function(a){var u=this.a
if(u!=null)return u.b
else return this.c9().aP}}
O.fo.prototype={
$2:function(a,b){if(typeof b!=="number")return b.C()
return this.b.push(new A.ck(a,C.d.X(b+3,4)*4))}}
O.fp.prototype={
$2:function(a,b){return J.iZ(a.a,b.a)}}
O.fq.prototype={
$2:function(a,b){if(typeof b!=="number")return b.C()
return this.b.push(new A.cP(a,C.d.X(b+3,4)*4))}}
O.fr.prototype={
$2:function(a,b){return J.iZ(a.a,b.a)}}
O.fs.prototype={
$2:function(a,b){if(typeof b!=="number")return b.C()
return this.b.push(new A.cU(a,C.d.X(b+3,4)*4))}}
O.ft.prototype={
$2:function(a,b){return J.iZ(a.a,b.a)}}
O.fi.prototype={
aj:function(){var u,t=this
t.c_()
u=t.f
if(!(Math.abs(u-1)<$.x().a)){t.f=1
u=new D.y(t.b,u,1)
u.b=!0
t.a.a2(u)}}}
O.cE.prototype={
aj:function(){},
ck:function(a){var u,t,s=this
if(!s.c.p(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.aj()
u=s.a
u.a=null
u.a2(null)}}}
O.fj.prototype={}
O.ag.prototype={
cj:function(a){var u,t,s=this
if(!s.f.p(0,a)){u=s.f
s.f=a
t=new D.y(s.b+".color",u,a)
t.b=!0
s.a.a2(t)}},
aj:function(){this.c_()
this.cj(new V.M(1,1,1))},
saF:function(a,b){this.ck(new A.S(!0,!1,!1))
this.cj(b)}}
O.fl.prototype={}
O.fm.prototype={
aj:function(){var u,t=this
t.c0()
u=t.ch
if(!(Math.abs(u-1)<$.x().a)){t.ch=1
u=new D.y(t.b+".refraction",u,1)
u.b=!0
t.a.a2(u)}}}
O.fn.prototype={
cl:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.x().a)){u.ch=a
t=new D.y(u.b+".shininess",t,a)
t.b=!0
u.a.a2(t)}},
aj:function(){this.c0()
this.cl(100)}}
O.cZ.prototype={}
T.hr.prototype={}
X.j1.prototype={}
X.eR.prototype={
gv:function(){var u=this.x
return u==null?this.x=D.D():u}}
X.cN.prototype={
gv:function(){var u=this.f
return u==null?this.f=D.D():u},
ay:function(a){var u=this.f
if(u!=null)u.B(a)},
dB:function(){return this.ay(null)},
scR:function(a){var u,t,s=this
if(!J.B(s.b,a)){u=s.b
if(u!=null)u.gv().S(0,s.gc4())
t=s.b
s.b=a
if(a!=null)a.gv().m(0,s.gc4())
u=new D.y("mover",t,s.b)
u.b=!0
s.ay(u)}}}
X.hn.prototype={}
V.ch.prototype={
aU:function(a){this.b=new P.eW(C.G)
this.c=null
this.d=H.b([],[[P.af,W.a9]])},
G:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)l.push(H.b([],[W.a9]))
u=a.split("\n")
for(l=u.length,t=[W.a9],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else m.d.push(H.b([],t))
p=document.createElement("div")
p.className="codePart"
o=m.b.dL(q,0,q.length)
n=o==null?q:o
C.E.da(p,H.jt(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.gb1(m.d).push(p)}},
cW:function(a,b){var u,t,s,r,q=this
q.d=H.b([],[[P.af,W.a9]])
u=C.a.k(b,"\n")
t=q.c
for(t=(t==null?q.c=q.aZ():t).d4(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.q)(t),++r)q.b4(t[r])}}
V.iU.prototype={
$1:function(a){var u=C.c.d3(this.a.gfG(),2)
if(u!=="0.00")P.js(u+" fps")}}
V.ev.prototype={
b4:function(a){var u=this
switch(a.a){case"Class":u.G(a.b,"#551")
break
case"Comment":u.G(a.b,"#777")
break
case"Id":u.G(a.b,"#111")
break
case"Num":u.G(a.b,"#191")
break
case"Reserved":u.G(a.b,"#119")
break
case"String":u.G(a.b,"#171")
break
case"Symbol":u.G(a.b,"#616")
break
case"Type":u.G(a.b,"#B11")
break
case"Whitespace":u.G(a.b,"#111")
break}},
aZ:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=R.hv()
a1.c=a1.j(0,r)
u=a1.j(0,r).k(0,q)
t=T.m(new H.l("_"))
u.a.push(t)
t=T.H("a","z")
u.a.push(t)
t=T.H("A","Z")
u.a.push(t)
t=a1.j(0,q).k(0,q)
u=T.m(new H.l("_"))
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
t=T.m(new H.l("."))
u.a.push(t)
t=a1.j(0,o).k(0,n)
u=T.H("0","9")
t.a.push(u)
u=a1.j(0,n).k(0,n)
t=T.H("0","9")
u.a.push(t)
t=a1.j(0,r).k(0,m)
u=T.m(new H.l(l))
t.a.push(u)
u=a1.j(0,m).k(0,m)
t=T.m(new H.l(l))
u.a.push(t)
t=a1.j(0,r).k(0,k)
u=T.m(new H.l('"'))
t.a.push(u)
u=a1.j(0,k).k(0,j)
t=T.m(new H.l('"'))
u.a.push(t)
t=a1.j(0,k).k(0,i)
u=T.m(new H.l("\\"))
t.a.push(u)
u=a1.j(0,i).k(0,k)
t=T.m(new H.l('"'))
u.a.push(t)
a1.j(0,k).k(0,k).a.push(new T.am())
t=a1.j(0,r).k(0,h)
u=T.m(new H.l("'"))
t.a.push(u)
u=a1.j(0,h).k(0,g)
t=T.m(new H.l("'"))
u.a.push(t)
t=a1.j(0,h).k(0,f)
u=T.m(new H.l("\\"))
t.a.push(u)
u=a1.j(0,f).k(0,h)
t=T.m(new H.l("'"))
u.a.push(t)
a1.j(0,h).k(0,h).a.push(new T.am())
t=a1.j(0,r).k(0,e)
u=T.m(new H.l("/"))
t.a.push(u)
u=a1.j(0,e).k(0,d)
t=T.m(new H.l("/"))
u.a.push(t)
t=a1.j(0,d).k(0,c)
u=T.m(new H.l("\n"))
t.a.push(u)
u=a1.j(0,d).k(0,d)
t=new T.V()
s=[T.aM]
t.a=H.b([],s)
u.a.push(t)
u=T.m(new H.l("\n"))
t.a.push(u)
u=a1.j(0,e).k(0,b)
t=T.m(new H.l("*"))
u.a.push(t)
t=a1.j(0,b).k(0,a)
u=T.m(new H.l("*"))
t.a.push(u)
u=a1.j(0,a).k(0,b)
t=new T.V()
t.a=H.b([],s)
u.a.push(t)
u=T.m(new H.l("*"))
t.a.push(u)
u=a1.j(0,a).k(0,c)
t=T.m(new H.l("/"))
u.a.push(t)
t=a1.j(0,r).k(0,a0)
u=T.m(new H.l(" \n\t"))
t.a.push(u)
u=a1.j(0,a0).k(0,a0)
t=T.m(new H.l(" \n\t"))
u.a.push(t)
t=a1.j(0,p)
t.d=t.a.J("Num")
t=a1.j(0,n)
t.d=t.a.J("Num")
t=a1.j(0,m)
t.d=t.a.J("Symbol")
t=a1.j(0,j)
t.d=t.a.J("String")
t=a1.j(0,g)
t.d=t.a.J("String")
t=a1.j(0,c)
t.d=t.a.J(d)
t=a1.j(0,a0)
t.d=t.a.J(a0)
t=a1.j(0,q)
t=t.d=t.a.J(q)
u=[P.p]
t.ar(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.ar(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.ar(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.eT.prototype={
b4:function(a){var u=this
switch(a.a){case"Builtin":u.G(a.b,"#411")
break
case"Comment":u.G(a.b,"#777")
break
case"Id":u.G(a.b,"#111")
break
case"Num":u.G(a.b,"#191")
break
case"Preprocess":u.G(a.b,"#737")
break
case"Reserved":u.G(a.b,"#119")
break
case"Symbol":u.G(a.b,"#611")
break
case"Type":u.G(a.b,"#171")
break
case"Whitespace":u.G(a.b,"#111")
break}},
aZ:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=R.hv()
e.c=e.j(0,r)
u=e.j(0,r).k(0,q)
t=T.m(new H.l("_"))
u.a.push(t)
t=T.H("a","z")
u.a.push(t)
t=T.H("A","Z")
u.a.push(t)
t=e.j(0,q).k(0,q)
u=T.m(new H.l("_"))
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
t=T.m(new H.l("."))
u.a.push(t)
t=e.j(0,o).k(0,n)
u=T.H("0","9")
t.a.push(u)
u=e.j(0,n).k(0,n)
t=T.H("0","9")
u.a.push(t)
t=e.j(0,r).k(0,m)
u=T.m(new H.l(l))
t.a.push(u)
u=e.j(0,m).k(0,m)
t=T.m(new H.l(l))
u.a.push(t)
t=e.j(0,r).k(0,k)
u=T.m(new H.l("/"))
t.a.push(u)
u=e.j(0,k).k(0,j)
t=T.m(new H.l("/"))
u.a.push(t)
e.j(0,k).k(0,m).a.push(new T.am())
t=e.j(0,j).k(0,i)
u=T.m(new H.l("\n"))
t.a.push(u)
u=e.j(0,j).k(0,j)
t=new T.V()
s=[T.aM]
t.a=H.b([],s)
u.a.push(t)
u=T.m(new H.l("\n"))
t.a.push(u)
u=e.j(0,r).k(0,h)
t=T.m(new H.l("#"))
u.a.push(t)
t=e.j(0,h).k(0,h)
u=new T.V()
u.a=H.b([],s)
t.a.push(u)
t=T.m(new H.l("\n"))
u.a.push(t)
t=e.j(0,h).k(0,g)
u=T.m(new H.l("\n"))
t.a.push(u)
u=e.j(0,r).k(0,f)
t=T.m(new H.l(" \n\t"))
u.a.push(t)
t=e.j(0,f).k(0,f)
u=T.m(new H.l(" \n\t"))
t.a.push(u)
u=e.j(0,p)
u.d=u.a.J("Num")
u=e.j(0,n)
u.d=u.a.J("Num")
u=e.j(0,m)
u.d=u.a.J("Symbol")
u=e.j(0,i)
u.d=u.a.J(j)
u=e.j(0,g)
u.d=u.a.J(h)
u=e.j(0,f)
u.d=u.a.J(f)
u=e.j(0,q)
u=u.d=u.a.J(q)
t=[P.p]
u.ar(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.ar(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.ar(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return e}}
V.eU.prototype={
b4:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.G(a.b,"#911")
u.G("=",t)
break
case"Id":u.G(a.b,t)
break
case"Other":u.G(a.b,t)
break
case"Reserved":u.G(a.b,"#119")
break
case"String":u.G(a.b,"#171")
break
case"Symbol":u.G(a.b,"#616")
break}},
aZ:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=R.hv()
l.c=l.j(0,s)
u=l.j(0,s).k(0,r)
t=T.m(new H.l("_"))
u.a.push(t)
t=T.H("a","z")
u.a.push(t)
t=T.H("A","Z")
u.a.push(t)
t=l.j(0,r).k(0,r)
u=T.m(new H.l("_"))
t.a.push(u)
u=T.H("0","9")
t.a.push(u)
u=T.H("a","z")
t.a.push(u)
u=T.H("A","Z")
t.a.push(u)
u=l.j(0,r).k(0,q)
t=T.m(new H.l("="))
u.a.push(t)
u.c=!0
u=l.j(0,s).k(0,p)
t=T.m(new H.l("</\\-!>="))
u.a.push(t)
t=l.j(0,p).k(0,p)
u=T.m(new H.l("</\\-!>="))
t.a.push(u)
u=l.j(0,s).k(0,o)
t=T.m(new H.l('"'))
u.a.push(t)
t=l.j(0,o).k(0,n)
u=T.m(new H.l('"'))
t.a.push(u)
u=l.j(0,o).k(0,"EscStr")
t=T.m(new H.l("\\"))
u.a.push(t)
t=l.j(0,"EscStr").k(0,o)
u=T.m(new H.l('"'))
t.a.push(u)
l.j(0,o).k(0,o).a.push(new T.am())
l.j(0,s).k(0,m).a.push(new T.am())
u=l.j(0,m).k(0,m)
t=new T.V()
t.a=H.b([],[T.aM])
u.a.push(t)
u=T.m(new H.l('</\\-!>=_"'))
t.a.push(u)
u=T.H("a","z")
t.a.push(u)
u=T.H("A","Z")
t.a.push(u)
u=l.j(0,p)
u.d=u.a.J("Symbol")
u=l.j(0,n)
u.d=u.a.J("String")
u=l.j(0,r)
t=u.a.J(r)
u.d=t
t.ar(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.p]))
t=l.j(0,q)
t.d=t.a.J(q)
t=l.j(0,m)
t.d=t.a.J(m)
return l}}
V.fP.prototype={
cW:function(a,b){this.d=H.b([],[[P.af,W.a9]])
this.G(C.a.k(b,"\n"),"#111")},
b4:function(a){},
aZ:function(){return}}
V.h7.prototype={
dq:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.R(q,"scroll",new V.h9(o),!1)},
cr:function(a){var u,t,s,r,q,p,o,n,m,l,k
this.f3()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.d4(C.a.fJ(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
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
if(H.ms(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.c(m,1)
l.href=m[1]
l.textContent=m[0]
t.appendChild(l)}else{k=P.ke(C.q,n,C.f,!1)
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
d6:function(a){var u,t,s,r=new V.ev("dart")
r.aU("dart")
u=new V.eT("glsl")
u.aU("glsl")
t=new V.eU("html")
t.aU("html")
s=C.a.fF(H.b([r,u,t],[V.ch]),new V.ha(a))
if(s!=null)return s
r=new V.fP("plain")
r.aU("plain")
return r},
cp:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.b([],[P.w])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(J.jm(s).b9(s,"+")){b0[t]=C.b.af(s,1)
a6.push(1)
u=!0}else if(C.b.b9(s,"-")){b0[t]=C.b.af(s,1)
a6.push(-1)
u=!0}else a6.push(0)}r=this.d6(a8)
r.cW(0,b0)
q=document
p=q.createElement("div")
p.className="codeTableScroll"
o=q.createElement("table")
o.className="codeTable"
p.appendChild(o)
this.a.appendChild(p)
n=P.ke(C.q,a7,C.f,!1)
m=q.createElement("tr")
m.className="headerRow"
l=q.createElement("td")
l.className="headerCell"
l.colSpan=u?3:2
k=q.createElement("div")
k.className="tableHeader"
k.id=n
j=W.jy()
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
for(g=s.length,a=0;a<s.length;s.length===g||(0,H.q)(s),++a)b.appendChild(s[a])
f.appendChild(e)
f.appendChild(d)
f.appendChild(b)
o.appendChild(f)}else for(g=r.d,a0=g.length,a1=a9,a=0;a<g.length;g.length===a0||(0,H.q)(g),++a){s=g[a]
f=q.createElement("tr")
f.className=a3
e=q.createElement("td")
e.className=a4;++a1
e.textContent=""+a1
d=q.createElement("td")
d.className=a5
for(a2=C.a.gO(s);a2.u();)d.appendChild(a2.gE(a2))
f.appendChild(e)
f.appendChild(d)
o.appendChild(f)}},
f3:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=R.hv()
u.c=u.j(0,q)
t=u.j(0,q).k(0,p)
s=T.m(new H.l("*"))
t.a.push(s)
t.c=!0
t=u.j(0,p).k(0,p)
s=new T.V()
r=[T.aM]
s.a=H.b([],r)
t.a.push(s)
t=T.m(new H.l("*"))
s.a.push(t)
t=u.j(0,p).k(0,"BoldEnd")
s=T.m(new H.l("*"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,o)
s=T.m(new H.l("_"))
t.a.push(s)
t.c=!0
t=u.j(0,o).k(0,o)
s=new T.V()
s.a=H.b([],r)
t.a.push(s)
t=T.m(new H.l("_"))
s.a.push(t)
t=u.j(0,o).k(0,n)
s=T.m(new H.l("_"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,m)
s=T.m(new H.l("`"))
t.a.push(s)
t.c=!0
t=u.j(0,m).k(0,m)
s=new T.V()
s.a=H.b([],r)
t.a.push(s)
t=T.m(new H.l("`"))
s.a.push(t)
t=u.j(0,m).k(0,"CodeEnd")
s=T.m(new H.l("`"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,l)
s=T.m(new H.l("["))
t.a.push(s)
t.c=!0
t=u.j(0,l).k(0,k)
s=T.m(new H.l("|"))
t.a.push(s)
s=u.j(0,l).k(0,j)
t=T.m(new H.l("]"))
s.a.push(t)
s.c=!0
s=u.j(0,l).k(0,l)
t=new T.V()
t.a=H.b([],r)
s.a.push(t)
s=T.m(new H.l("|]"))
t.a.push(s)
s=u.j(0,k).k(0,j)
t=T.m(new H.l("]"))
s.a.push(t)
s.c=!0
s=u.j(0,k).k(0,k)
t=new T.V()
t.a=H.b([],r)
s.a.push(t)
s=T.m(new H.l("|]"))
t.a.push(s)
u.j(0,q).k(0,i).a.push(new T.am())
s=u.j(0,i).k(0,i)
t=new T.V()
t.a=H.b([],r)
s.a.push(t)
s=T.m(new H.l("*_`["))
t.a.push(s)
s=u.j(0,"BoldEnd")
s.d=s.a.J(p)
s=u.j(0,n)
s.d=s.a.J(o)
s=u.j(0,"CodeEnd")
s.d=s.a.J(m)
s=u.j(0,j)
s.d=s.a.J("Link")
s=u.j(0,i)
s.d=s.a.J(i)
this.b=u}}
V.h9.prototype={
$1:function(a){P.k1(C.i,new V.h8(this.a))}}
V.h8.prototype={
$0:function(){var u=C.c.a6(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
V.ha.prototype={
$1:function(a){return a.a===this.a}}
Q.iS.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.a,r=[P.p]
u.cp("Vertex Shader","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
t=t.a
u.cp("Fragment Shader","glsl",0,H.b((t==null?null:t.d).split("\n"),r))}};(function aliases(){var u=J.a.prototype
u.df=u.h
u=J.cu.prototype
u.dh=u.h
u=P.i.prototype
u.dg=u.b7
u=W.N.prototype
u.ba=u.a3
u=W.dI.prototype
u.di=u.ac
u=T.cq.prototype
u.de=u.ap
u.bZ=u.h
u=O.cE.prototype
u.c_=u.aj
u=O.ag.prototype
u.c0=u.aj})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"m3","lr",6)
u(P,"m4","ls",6)
u(P,"m5","lt",6)
t(P,"kj","m1",9)
s(W,"mf",4,null,["$4"],["lu"],15,0)
s(W,"mg",4,null,["$4"],["lv"],15,0)
var m
r(m=E.aG.prototype,"gcU",0,0,null,["$1","$0"],["cV","fS"],0,0)
r(m,"gcS",0,0,null,["$1","$0"],["cT","fP"],0,0)
q(m,"gfN","fO",3)
q(m,"gfQ","fR",3)
r(m=E.d_.prototype,"gc1",0,0,null,["$1","$0"],["c3","c2"],0,0)
p(m,"gh5","d0",9)
o(m=X.d8.prototype,"gej","ek",4)
o(m,"ge5","e6",4)
o(m,"ged","ee",2)
o(m,"gen","eo",10)
o(m,"gel","em",10)
o(m,"ger","es",2)
o(m,"gew","ex",2)
o(m,"geh","ei",2)
o(m,"geu","ev",2)
o(m,"gef","eg",2)
o(m,"gey","ez",17)
o(m,"geA","eB",4)
o(m,"geN","eO",5)
o(m,"geJ","eK",5)
o(m,"geL","eM",5)
r(D.b8.prototype,"gdt",0,0,null,["$1","$0"],["ag","du"],0,0)
r(m=D.cw.prototype,"gce",0,0,null,["$1","$0"],["cf","ep"],0,0)
o(m,"geD","eE",18)
q(m,"ge_","e0",11)
q(m,"geH","eI",11)
n(V.A.prototype,"gl","bI",12)
n(V.z.prototype,"gl","bI",12)
r(m=U.bB.prototype,"gax",0,0,null,["$1","$0"],["K","W"],0,0)
q(m,"gdY","dZ",13)
q(m,"geF","eG",13)
r(m=U.d9.prototype,"gax",0,0,null,["$1","$0"],["K","W"],0,0)
o(m,"gbl","bm",1)
o(m,"gbn","bo",1)
o(m,"gbp","bq",1)
r(m=U.da.prototype,"gax",0,0,null,["$1","$0"],["K","W"],0,0)
o(m,"gbl","bm",1)
o(m,"gbn","bo",1)
o(m,"gbp","bq",1)
o(m,"gdR","dS",1)
o(m,"gdT","dU",1)
o(m,"gfa","fb",1)
o(m,"gf8","f9",1)
o(m,"gf6","f7",1)
o(U.db.prototype,"gdW","dX",1)
r(m=M.cn.prototype,"ga9",0,0,null,["$1","$0"],["ah","dv"],0,0)
q(m,"ge9","ea",3)
q(m,"geb","ec",3)
r(m=O.cD.prototype,"ge7",0,0,null,["$1","$0"],["a2","e8"],0,0)
r(m,"geV",0,0,null,["$1","$0"],["cg","eW"],0,0)
q(m,"ge1","e2",14)
q(m,"ge3","e4",14)
r(X.cN.prototype,"gc4",0,0,null,["$1","$0"],["ay","dB"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.T,null)
s(P.T,[H.ja,J.a,J.X,P.dv,P.i,H.bE,P.f_,H.co,H.hM,H.hA,P.b9,H.by,H.dN,P.ao,H.f7,H.f8,H.f2,P.dT,P.dd,P.cX,P.hj,P.d0,P.iF,P.it,P.im,P.du,P.o,P.em,P.eX,P.iD,P.al,P.a1,P.a8,P.aF,P.fN,P.cV,P.dl,P.eQ,P.eS,P.af,P.cC,P.aO,P.p,P.as,W.er,W.bY,W.E,W.cL,W.dI,W.iy,W.cp,W.ar,W.is,W.dY,P.io,T.am,T.cq,T.aM,T.fU,T.h2,R.cW,R.d1,R.d2,R.hu,O.aC,O.bF,E.ei,E.aG,E.fV,E.d_,Z.dc,Z.i5,Z.cf,Z.cr,Z.aX,D.el,D.ba,D.O,X.cg,X.cv,X.f4,X.fb,X.a2,X.fA,X.hw,X.d8,D.b8,D.Y,D.fR,D.he,V.M,V.aD,V.eF,V.cF,V.ap,V.a3,V.a_,V.cR,V.A,V.z,U.d9,U.da,U.db,M.cn,A.cc,A.ed,A.S,A.ck,A.cP,A.cU,A.fk,A.bQ,A.bS,A.bT,A.d5,A.hI,F.bb,F.eJ,F.cx,F.f6,F.cO,F.h3,F.h4,F.h5,F.h6,F.bV,F.hU,F.hV,F.hY,F.i_,F.i0,F.i1,O.cZ,O.cE,O.fl,X.j1,X.hn,X.cN,V.ch,V.h7])
s(J.a,[J.f0,J.ct,J.cu,J.aJ,J.bD,J.aK,H.bI,W.d,W.ea,W.cd,W.ae,W.C,W.df,W.a0,W.ew,W.ex,W.dh,W.cm,W.dj,W.ez,W.h,W.dm,W.aI,W.eV,W.dq,W.fa,W.fu,W.dw,W.dx,W.aN,W.dy,W.dB,W.aP,W.dF,W.dH,W.aS,W.dJ,W.aT,W.dO,W.at,W.dR,W.ht,W.aV,W.dU,W.hy,W.hO,W.dZ,W.e0,W.e2,W.e4,W.e6,P.bf,P.ds,P.bg,P.dD,P.fT,P.dP,P.bk,P.dW,P.ee,P.de,P.dL])
s(J.cu,[J.fO,J.bn,J.aL])
t(J.j9,J.aJ)
s(J.bD,[J.cs,J.f1])
t(P.f9,P.dv)
s(P.f9,[H.d7,W.ic,W.U,P.eM])
t(H.l,H.d7)
s(P.i,[H.eC,H.fe,H.bW])
s(H.eC,[H.cA,H.cy])
s(P.f_,[H.ff,H.i6])
t(H.fg,H.cA)
s(P.b9,[H.fK,H.f3,H.hL,H.ek,H.h0,P.cM,P.ac,P.hN,P.hK,P.bN,P.eo,P.eu])
s(H.by,[H.iY,H.ho,H.iO,H.iP,H.iQ,P.i8,P.i7,P.i9,P.ia,P.iC,P.iB,P.iI,P.iq,P.ir,P.fd,P.eA,P.eB,W.eD,W.fw,W.fy,W.h_,W.hi,W.ih,W.fI,W.fH,W.iu,W.iv,W.iA,W.iE,P.iJ,P.eN,P.eO,P.eg,E.fW,E.fX,E.fY,E.hs,D.eG,D.eH,F.iX,F.iK,F.i3,F.i2,F.hW,F.hX,O.fo,O.fp,O.fq,O.fr,O.fs,O.ft,V.iU,V.h9,V.h8,V.ha,Q.iS])
s(H.ho,[H.hg,H.bw])
t(P.fc,P.ao)
s(P.fc,[H.L,W.ib])
t(H.cH,H.bI)
s(H.cH,[H.bZ,H.c0])
t(H.c_,H.bZ)
t(H.bH,H.c_)
t(H.c1,H.c0)
t(H.cI,H.c1)
s(H.cI,[H.fB,H.fC,H.fD,H.fE,H.fF,H.cJ,H.fG])
t(P.ip,P.iF)
t(P.il,P.it)
t(P.ep,P.hj)
t(P.eE,P.em)
s(P.ep,[P.eW,P.hQ])
t(P.hP,P.eE)
s(P.a8,[P.J,P.w])
s(P.ac,[P.bi,P.eY])
s(W.d,[W.G,W.eL,W.aR,W.c2,W.aU,W.au,W.c4,W.i4,W.bX,P.eh,P.b5])
s(W.G,[W.N,W.aB])
s(W.N,[W.k,P.j])
s(W.k,[W.eb,W.ec,W.b6,W.b7,W.a9,W.eP,W.h1,W.cY,W.hl,W.hm,W.bO])
t(W.eq,W.ae)
t(W.bz,W.df)
s(W.a0,[W.es,W.et])
t(W.di,W.dh)
t(W.cl,W.di)
t(W.dk,W.dj)
t(W.ey,W.dk)
t(W.aH,W.cd)
t(W.dn,W.dm)
t(W.eK,W.dn)
t(W.dr,W.dq)
t(W.bC,W.dr)
t(W.aW,W.h)
s(W.aW,[W.be,W.ai,W.bj])
t(W.fv,W.dw)
t(W.fx,W.dx)
t(W.dz,W.dy)
t(W.fz,W.dz)
t(W.dC,W.dB)
t(W.cK,W.dC)
t(W.dG,W.dF)
t(W.fQ,W.dG)
t(W.fZ,W.dH)
t(W.c3,W.c2)
t(W.hc,W.c3)
t(W.dK,W.dJ)
t(W.hd,W.dK)
t(W.hh,W.dO)
t(W.dS,W.dR)
t(W.hp,W.dS)
t(W.c5,W.c4)
t(W.hq,W.c5)
t(W.dV,W.dU)
t(W.hx,W.dV)
t(W.aY,W.ai)
t(W.e_,W.dZ)
t(W.id,W.e_)
t(W.dg,W.cm)
t(W.e1,W.e0)
t(W.ii,W.e1)
t(W.e3,W.e2)
t(W.dA,W.e3)
t(W.e5,W.e4)
t(W.iw,W.e5)
t(W.e7,W.e6)
t(W.ix,W.e7)
t(W.ie,W.ib)
t(W.ig,P.cX)
t(W.iz,W.dI)
t(P.a4,P.io)
t(P.dt,P.ds)
t(P.f5,P.dt)
t(P.dE,P.dD)
t(P.fL,P.dE)
t(P.bM,P.j)
t(P.dQ,P.dP)
t(P.hk,P.dQ)
t(P.dX,P.dW)
t(P.hz,P.dX)
t(P.ef,P.de)
t(P.fM,P.b5)
t(P.dM,P.dL)
t(P.hf,P.dM)
s(T.cq,[T.V,R.d4])
s(E.ei,[Z.ce,A.cS,T.hr])
s(D.O,[D.bc,D.bd,D.y,X.fS])
s(X.fS,[X.cB,X.aq,X.bG,X.d3])
s(O.aC,[D.cw,U.bB])
s(D.el,[U.en,U.Z])
t(U.ci,U.Z)
t(A.fh,A.cS)
s(A.d5,[A.d6,A.hF,A.hG,A.hH,A.hD,A.P,A.hE,A.I,A.bP,A.hJ,A.bR,A.a5,A.bl,A.bm])
t(F.hb,F.eJ)
t(F.hC,F.f6)
t(F.hZ,F.i_)
t(F.fJ,F.i0)
t(O.cD,O.cZ)
s(O.cE,[O.fi,O.fj,O.ag])
s(O.ag,[O.fm,O.fn])
t(X.eR,X.hn)
s(V.ch,[V.ev,V.eT,V.eU,V.fP])
u(H.d7,H.hM)
u(H.bZ,P.o)
u(H.c_,H.co)
u(H.c0,P.o)
u(H.c1,H.co)
u(P.dv,P.o)
u(W.df,W.er)
u(W.dh,P.o)
u(W.di,W.E)
u(W.dj,P.o)
u(W.dk,W.E)
u(W.dm,P.o)
u(W.dn,W.E)
u(W.dq,P.o)
u(W.dr,W.E)
u(W.dw,P.ao)
u(W.dx,P.ao)
u(W.dy,P.o)
u(W.dz,W.E)
u(W.dB,P.o)
u(W.dC,W.E)
u(W.dF,P.o)
u(W.dG,W.E)
u(W.dH,P.ao)
u(W.c2,P.o)
u(W.c3,W.E)
u(W.dJ,P.o)
u(W.dK,W.E)
u(W.dO,P.ao)
u(W.dR,P.o)
u(W.dS,W.E)
u(W.c4,P.o)
u(W.c5,W.E)
u(W.dU,P.o)
u(W.dV,W.E)
u(W.dZ,P.o)
u(W.e_,W.E)
u(W.e0,P.o)
u(W.e1,W.E)
u(W.e2,P.o)
u(W.e3,W.E)
u(W.e4,P.o)
u(W.e5,W.E)
u(W.e6,P.o)
u(W.e7,W.E)
u(P.ds,P.o)
u(P.dt,W.E)
u(P.dD,P.o)
u(P.dE,W.E)
u(P.dP,P.o)
u(P.dQ,W.E)
u(P.dW,P.o)
u(P.dX,W.E)
u(P.de,P.ao)
u(P.dL,P.o)
u(P.dM,W.E)})()
var v={mangledGlobalNames:{w:"int",J:"double",a8:"num",p:"String",al:"bool",aO:"Null",af:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.O]},{func:1,ret:-1,args:[D.O]},{func:1,ret:-1,args:[W.ai]},{func:1,ret:-1,args:[P.w,[P.i,E.aG]]},{func:1,ret:-1,args:[W.h]},{func:1,ret:-1,args:[W.bj]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.aO,args:[,,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.be]},{func:1,ret:-1,args:[P.w,[P.i,D.Y]]},{func:1,ret:P.J},{func:1,ret:-1,args:[P.w,[P.i,U.Z]]},{func:1,ret:-1,args:[P.w,[P.i,V.ap]]},{func:1,ret:P.al,args:[W.N,P.p,P.p,W.bY]},{func:1,ret:P.aO,args:[,]},{func:1,ret:-1,args:[W.aY]},{func:1,ret:P.al,args:[[P.i,D.Y]]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.n=W.b6.prototype
C.h=W.b7.prototype
C.E=W.a9.prototype
C.H=J.a.prototype
C.a=J.aJ.prototype
C.d=J.cs.prototype
C.j=J.ct.prototype
C.c=J.bD.prototype
C.b=J.aK.prototype
C.I=J.aL.prototype
C.r=J.fO.prototype
C.t=W.cY.prototype
C.m=J.bn.prototype
C.u=W.aY.prototype
C.v=W.bX.prototype
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

C.C=new P.fN()
C.f=new P.hP()
C.D=new P.hQ()
C.e=new P.ip()
C.i=new P.aF(0)
C.F=new P.aF(5e6)
C.G=new P.eX("element",!1,!1,!1)
C.J=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.p])
C.K=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.p])
C.L=H.b(u([]),[P.p])
C.q=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.w])
C.k=H.b(u(["bind","if","ref","repeat","syntax"]),[P.p])
C.l=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.p])})();(function staticFields(){$.ad=0
$.bx=null
$.jA=null
$.km=null
$.ki=null
$.kp=null
$.iL=null
$.iR=null
$.jq=null
$.bo=null
$.c7=null
$.c8=null
$.ji=!1
$.aa=C.e
$.W=[]
$.an=null
$.j5=null
$.jH=null
$.jG=null
$.dp=P.jJ(P.p,P.eS)
$.jO=null
$.jR=null
$.bJ=null
$.jY=null
$.k5=null
$.k8=null
$.k7=null
$.hR=null
$.hS=null
$.hT=null
$.k6=null
$.jQ=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"mB","kt",function(){return H.kl("_$dart_dartClosure")})
u($,"mC","ju",function(){return H.kl("_$dart_js")})
u($,"mD","ku",function(){return H.ak(H.hB({
toString:function(){return"$receiver$"}}))})
u($,"mE","kv",function(){return H.ak(H.hB({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"mF","kw",function(){return H.ak(H.hB(null))})
u($,"mG","kx",function(){return H.ak(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mJ","kA",function(){return H.ak(H.hB(void 0))})
u($,"mK","kB",function(){return H.ak(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mI","kz",function(){return H.ak(H.k3(null))})
u($,"mH","ky",function(){return H.ak(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"mM","kD",function(){return H.ak(H.k3(void 0))})
u($,"mL","kC",function(){return H.ak(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"mZ","jv",function(){return P.lq()})
u($,"n0","kI",function(){return P.lf("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"n_","kH",function(){return P.jK(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.p)})
u($,"mT","kG",function(){return Z.a7(0)})
u($,"mN","kE",function(){return Z.a7(511)})
u($,"mV","aA",function(){return Z.a7(1)})
u($,"mU","az",function(){return Z.a7(2)})
u($,"mP","ay",function(){return Z.a7(4)})
u($,"mW","b0",function(){return Z.a7(8)})
u($,"mX","b1",function(){return Z.a7(16)})
u($,"mQ","ca",function(){return Z.a7(32)})
u($,"mR","cb",function(){return Z.a7(64)})
u($,"mS","kF",function(){return Z.a7(96)})
u($,"mY","bv",function(){return Z.a7(128)})
u($,"mO","ax",function(){return Z.a7(256)})
u($,"mA","ks",function(){return new V.eF(1e-9)})
u($,"mz","x",function(){return $.ks()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGL2RenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.bI,ArrayBufferView:H.bI,Float32Array:H.bH,Float64Array:H.bH,Int16Array:H.fB,Int32Array:H.fC,Int8Array:H.fD,Uint16Array:H.fE,Uint32Array:H.fF,Uint8ClampedArray:H.cJ,CanvasPixelArray:H.cJ,Uint8Array:H.fG,HTMLAudioElement:W.k,HTMLBRElement:W.k,HTMLBaseElement:W.k,HTMLButtonElement:W.k,HTMLContentElement:W.k,HTMLDListElement:W.k,HTMLDataElement:W.k,HTMLDataListElement:W.k,HTMLDetailsElement:W.k,HTMLDialogElement:W.k,HTMLEmbedElement:W.k,HTMLFieldSetElement:W.k,HTMLHRElement:W.k,HTMLHeadElement:W.k,HTMLHeadingElement:W.k,HTMLHtmlElement:W.k,HTMLIFrameElement:W.k,HTMLImageElement:W.k,HTMLInputElement:W.k,HTMLLIElement:W.k,HTMLLabelElement:W.k,HTMLLegendElement:W.k,HTMLLinkElement:W.k,HTMLMapElement:W.k,HTMLMediaElement:W.k,HTMLMenuElement:W.k,HTMLMetaElement:W.k,HTMLMeterElement:W.k,HTMLModElement:W.k,HTMLOListElement:W.k,HTMLObjectElement:W.k,HTMLOptGroupElement:W.k,HTMLOptionElement:W.k,HTMLOutputElement:W.k,HTMLParagraphElement:W.k,HTMLParamElement:W.k,HTMLPictureElement:W.k,HTMLPreElement:W.k,HTMLProgressElement:W.k,HTMLQuoteElement:W.k,HTMLScriptElement:W.k,HTMLShadowElement:W.k,HTMLSlotElement:W.k,HTMLSourceElement:W.k,HTMLSpanElement:W.k,HTMLStyleElement:W.k,HTMLTableCaptionElement:W.k,HTMLTableCellElement:W.k,HTMLTableDataCellElement:W.k,HTMLTableHeaderCellElement:W.k,HTMLTableColElement:W.k,HTMLTextAreaElement:W.k,HTMLTimeElement:W.k,HTMLTitleElement:W.k,HTMLTrackElement:W.k,HTMLUListElement:W.k,HTMLUnknownElement:W.k,HTMLVideoElement:W.k,HTMLDirectoryElement:W.k,HTMLFontElement:W.k,HTMLFrameElement:W.k,HTMLFrameSetElement:W.k,HTMLMarqueeElement:W.k,HTMLElement:W.k,AccessibleNodeList:W.ea,HTMLAnchorElement:W.eb,HTMLAreaElement:W.ec,Blob:W.cd,HTMLBodyElement:W.b6,HTMLCanvasElement:W.b7,CDATASection:W.aB,CharacterData:W.aB,Comment:W.aB,ProcessingInstruction:W.aB,Text:W.aB,CSSPerspective:W.eq,CSSCharsetRule:W.C,CSSConditionRule:W.C,CSSFontFaceRule:W.C,CSSGroupingRule:W.C,CSSImportRule:W.C,CSSKeyframeRule:W.C,MozCSSKeyframeRule:W.C,WebKitCSSKeyframeRule:W.C,CSSKeyframesRule:W.C,MozCSSKeyframesRule:W.C,WebKitCSSKeyframesRule:W.C,CSSMediaRule:W.C,CSSNamespaceRule:W.C,CSSPageRule:W.C,CSSRule:W.C,CSSStyleRule:W.C,CSSSupportsRule:W.C,CSSViewportRule:W.C,CSSStyleDeclaration:W.bz,MSStyleCSSProperties:W.bz,CSS2Properties:W.bz,CSSImageValue:W.a0,CSSKeywordValue:W.a0,CSSNumericValue:W.a0,CSSPositionValue:W.a0,CSSResourceValue:W.a0,CSSUnitValue:W.a0,CSSURLImageValue:W.a0,CSSStyleValue:W.a0,CSSMatrixComponent:W.ae,CSSRotation:W.ae,CSSScale:W.ae,CSSSkew:W.ae,CSSTranslation:W.ae,CSSTransformComponent:W.ae,CSSTransformValue:W.es,CSSUnparsedValue:W.et,DataTransferItemList:W.ew,HTMLDivElement:W.a9,DOMException:W.ex,ClientRectList:W.cl,DOMRectList:W.cl,DOMRectReadOnly:W.cm,DOMStringList:W.ey,DOMTokenList:W.ez,Element:W.N,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.aH,FileList:W.eK,FileWriter:W.eL,HTMLFormElement:W.eP,Gamepad:W.aI,History:W.eV,HTMLCollection:W.bC,HTMLFormControlsCollection:W.bC,HTMLOptionsCollection:W.bC,KeyboardEvent:W.be,Location:W.fa,MediaList:W.fu,MIDIInputMap:W.fv,MIDIOutputMap:W.fx,MimeType:W.aN,MimeTypeArray:W.fz,PointerEvent:W.ai,MouseEvent:W.ai,DragEvent:W.ai,Document:W.G,DocumentFragment:W.G,HTMLDocument:W.G,ShadowRoot:W.G,XMLDocument:W.G,Attr:W.G,DocumentType:W.G,Node:W.G,NodeList:W.cK,RadioNodeList:W.cK,Plugin:W.aP,PluginArray:W.fQ,RTCStatsReport:W.fZ,HTMLSelectElement:W.h1,SourceBuffer:W.aR,SourceBufferList:W.hc,SpeechGrammar:W.aS,SpeechGrammarList:W.hd,SpeechRecognitionResult:W.aT,Storage:W.hh,CSSStyleSheet:W.at,StyleSheet:W.at,HTMLTableElement:W.cY,HTMLTableRowElement:W.hl,HTMLTableSectionElement:W.hm,HTMLTemplateElement:W.bO,TextTrack:W.aU,TextTrackCue:W.au,VTTCue:W.au,TextTrackCueList:W.hp,TextTrackList:W.hq,TimeRanges:W.ht,Touch:W.aV,TouchEvent:W.bj,TouchList:W.hx,TrackDefaultList:W.hy,CompositionEvent:W.aW,FocusEvent:W.aW,TextEvent:W.aW,UIEvent:W.aW,URL:W.hO,VideoTrackList:W.i4,WheelEvent:W.aY,Window:W.bX,DOMWindow:W.bX,CSSRuleList:W.id,ClientRect:W.dg,DOMRect:W.dg,GamepadList:W.ii,NamedNodeMap:W.dA,MozNamedAttrMap:W.dA,SpeechRecognitionResultList:W.iw,StyleSheetList:W.ix,SVGLength:P.bf,SVGLengthList:P.f5,SVGNumber:P.bg,SVGNumberList:P.fL,SVGPointList:P.fT,SVGScriptElement:P.bM,SVGStringList:P.hk,SVGAElement:P.j,SVGAnimateElement:P.j,SVGAnimateMotionElement:P.j,SVGAnimateTransformElement:P.j,SVGAnimationElement:P.j,SVGCircleElement:P.j,SVGClipPathElement:P.j,SVGDefsElement:P.j,SVGDescElement:P.j,SVGDiscardElement:P.j,SVGEllipseElement:P.j,SVGFEBlendElement:P.j,SVGFEColorMatrixElement:P.j,SVGFEComponentTransferElement:P.j,SVGFECompositeElement:P.j,SVGFEConvolveMatrixElement:P.j,SVGFEDiffuseLightingElement:P.j,SVGFEDisplacementMapElement:P.j,SVGFEDistantLightElement:P.j,SVGFEFloodElement:P.j,SVGFEFuncAElement:P.j,SVGFEFuncBElement:P.j,SVGFEFuncGElement:P.j,SVGFEFuncRElement:P.j,SVGFEGaussianBlurElement:P.j,SVGFEImageElement:P.j,SVGFEMergeElement:P.j,SVGFEMergeNodeElement:P.j,SVGFEMorphologyElement:P.j,SVGFEOffsetElement:P.j,SVGFEPointLightElement:P.j,SVGFESpecularLightingElement:P.j,SVGFESpotLightElement:P.j,SVGFETileElement:P.j,SVGFETurbulenceElement:P.j,SVGFilterElement:P.j,SVGForeignObjectElement:P.j,SVGGElement:P.j,SVGGeometryElement:P.j,SVGGraphicsElement:P.j,SVGImageElement:P.j,SVGLineElement:P.j,SVGLinearGradientElement:P.j,SVGMarkerElement:P.j,SVGMaskElement:P.j,SVGMetadataElement:P.j,SVGPathElement:P.j,SVGPatternElement:P.j,SVGPolygonElement:P.j,SVGPolylineElement:P.j,SVGRadialGradientElement:P.j,SVGRectElement:P.j,SVGSetElement:P.j,SVGStopElement:P.j,SVGStyleElement:P.j,SVGSVGElement:P.j,SVGSwitchElement:P.j,SVGSymbolElement:P.j,SVGTSpanElement:P.j,SVGTextContentElement:P.j,SVGTextElement:P.j,SVGTextPathElement:P.j,SVGTextPositioningElement:P.j,SVGTitleElement:P.j,SVGUseElement:P.j,SVGViewElement:P.j,SVGGradientElement:P.j,SVGComponentTransferFunctionElement:P.j,SVGFEDropShadowElement:P.j,SVGMPathElement:P.j,SVGElement:P.j,SVGTransform:P.bk,SVGTransformList:P.hz,AudioBuffer:P.ee,AudioParamMap:P.ef,AudioTrackList:P.eh,AudioContext:P.b5,webkitAudioContext:P.b5,BaseAudioContext:P.b5,OfflineAudioContext:P.fM,SQLResultSetRowList:P.hf})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,SQLResultSetRowList:true})
H.cH.$nativeSuperclassTag="ArrayBufferView"
H.bZ.$nativeSuperclassTag="ArrayBufferView"
H.c_.$nativeSuperclassTag="ArrayBufferView"
H.bH.$nativeSuperclassTag="ArrayBufferView"
H.c0.$nativeSuperclassTag="ArrayBufferView"
H.c1.$nativeSuperclassTag="ArrayBufferView"
H.cI.$nativeSuperclassTag="ArrayBufferView"
W.c2.$nativeSuperclassTag="EventTarget"
W.c3.$nativeSuperclassTag="EventTarget"
W.c4.$nativeSuperclassTag="EventTarget"
W.c5.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(Q.kn,[])
else Q.kn([])})})()
//# sourceMappingURL=test.dart.js.map
