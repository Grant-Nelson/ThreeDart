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
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jm"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jm"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jm(this,a,b,c,true,false,e).prototype
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
eY:function(){return new P.bP("No element")},
l_:function(){return new P.bP("Too many elements")},
cW:function(a,b,c,d){if(c-b<=32)H.ll(a,b,c,d)
else H.lk(a,b,c,d)},
ll:function(a,b,c,d){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.c(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.c(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.T()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.c(a,q)
C.a.m(a,s,a[q])
s=q}C.a.m(a,s,t)}},
lk:function(a2,a3,a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.d.U(a4-a3+1,6),d=a3+e,c=a4-e,b=C.d.U(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
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
if(typeof a1!=="number")return a1.T()
if(a1>0){p=t
t=u
u=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.T()
if(a1>0){p=q
q=r
r=p}a1=a5.$2(u,s)
if(typeof a1!=="number")return a1.T()
if(a1>0){p=s
s=u
u=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.T()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(u,r)
if(typeof a1!=="number")return a1.T()
if(a1>0){p=r
r=u
u=p}a1=a5.$2(s,r)
if(typeof a1!=="number")return a1.T()
if(a1>0){p=r
r=s
s=p}a1=a5.$2(t,q)
if(typeof a1!=="number")return a1.T()
if(a1>0){p=q
q=t
t=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.T()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.T()
if(a1>0){p=q
q=r
r=p}C.a.m(a2,d,u)
C.a.m(a2,b,s)
C.a.m(a2,c,q)
if(a3<0||a3>=a2.length)return H.c(a2,a3)
C.a.m(a2,a,a2[a3])
if(a4<0||a4>=a2.length)return H.c(a2,a4)
C.a.m(a2,a0,a2[a4])
o=a3+1
n=a4-1
if(J.G(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.ay()
if(k<0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.m(a2,m,a2[o])
C.a.m(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.T()
if(k>0){--n
continue}else{j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.c(a2,o)
C.a.m(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.c(a2,n)
C.a.m(a2,o,a2[n])
C.a.m(a2,n,l)
n=j
o=i
break}else{if(n>=a1)return H.c(a2,n)
C.a.m(a2,m,a2[n])
C.a.m(a2,n,l)
n=j
break}}}}h=!0}else{for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
g=a5.$2(l,t)
if(typeof g!=="number")return g.ay()
if(g<0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.m(a2,m,a2[o])
C.a.m(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.T()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.T()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.ay()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.c(a2,o)
C.a.m(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.c(a2,n)
C.a.m(a2,o,a2[n])
C.a.m(a2,n,l)
o=i}else{if(n>=a1)return H.c(a2,n)
C.a.m(a2,m,a2[n])
C.a.m(a2,n,l)}n=j
break}}}}h=!1}a1=o-1
if(a1>=a2.length)return H.c(a2,a1)
C.a.m(a2,a3,a2[a1])
C.a.m(a2,a1,t)
a1=n+1
if(a1<0||a1>=a2.length)return H.c(a2,a1)
C.a.m(a2,a4,a2[a1])
C.a.m(a2,a1,r)
H.cW(a2,a3,o-2,a5)
H.cW(a2,n+2,a4,a5)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.c(a2,o)
if(!J.G(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.c(a2,n)
if(!J.G(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.m(a2,m,a2[o])
C.a.m(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.ay()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.c(a2,o)
C.a.m(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.c(a2,n)
C.a.m(a2,o,a2[n])
C.a.m(a2,n,l)
o=i}else{if(n>=a1)return H.c(a2,n)
C.a.m(a2,m,a2[n])
C.a.m(a2,n,l)}n=j
break}}}H.cW(a2,o,n,a5)}else H.cW(a2,o,n,a5)},
l:function l(a){this.a=a},
eC:function eC(){},
cD:function cD(){},
bE:function bE(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
fc:function fc(a,b,c){this.a=a
this.b=b
this.$ti=c},
fd:function fd(a,b){this.a=null
this.b=a
this.c=b},
fe:function fe(a,b,c){this.a=a
this.b=b
this.$ti=c},
bX:function bX(a,b,c){this.a=a
this.b=b
this.$ti=c},
i7:function i7(a,b){this.a=a
this.b=b},
cs:function cs(){},
hN:function hN(){},
da:function da(){},
e9:function(a){var u,t=H.mz(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
mh:function(a){return v.types[a]},
mo:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.K(a).$iu},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.V(a)
if(typeof u!=="string")throw H.f(H.aY(a))
return u},
bM:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bN:function(a){return H.l6(a)+H.kf(H.cb(a),0,null)},
l6:function(a){var u,t,s,r,q,p,o,n=J.K(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.H||!!n.$ibj){r=C.n(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.e9(t.length>1&&C.b.ao(t,0)===36?C.b.aa(t,1):t)},
jV:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
le:function(a){var u,t,s,r=H.b([],[P.x])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.n)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.aY(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.d.aQ(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.f(H.aY(s))}return H.jV(r)},
jW:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.aY(s))
if(s<0)throw H.f(H.aY(s))
if(s>65535)return H.le(a)}return H.jV(a)},
jd:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.aQ(u,10))>>>0,56320|u&1023)}throw H.f(P.ad(a,0,1114111,null,null))},
be:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ld:function(a){var u=H.be(a).getFullYear()+0
return u},
lb:function(a){var u=H.be(a).getMonth()+1
return u},
l7:function(a){var u=H.be(a).getDate()+0
return u},
l8:function(a){var u=H.be(a).getHours()+0
return u},
la:function(a){var u=H.be(a).getMinutes()+0
return u},
lc:function(a){var u=H.be(a).getSeconds()+0
return u},
l9:function(a){var u=H.be(a).getMilliseconds()+0
return u},
aZ:function(a){throw H.f(H.aY(a))},
c:function(a,b){if(a==null)J.b1(a)
throw H.f(H.bp(a,b))},
bp:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a2(!0,b,s,null)
u=J.b1(a)
if(!(b<0)){if(typeof u!=="number")return H.aZ(u)
t=b>=u}else t=!0
if(t)return P.C(b,a,s,null,u)
return P.cR(b,s)},
ma:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bf(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bf(a,c,!0,b,"end",u)
return new P.a2(!0,b,"end",null)},
aY:function(a){return new P.a2(!0,a,null,null)},
m6:function(a){if(typeof a!=="number")throw H.f(H.aY(a))
return a},
f:function(a){var u
if(a==null)a=new P.cM()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.kq})
u.name=""}else u.toString=H.kq
return u},
kq:function(){return J.V(this.dartException)},
t:function(a){throw H.f(a)},
n:function(a){throw H.f(P.aB(a))},
af:function(a){var u,t,s,r,q,p
a=H.kp(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.q])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hB(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hC:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
k5:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
jR:function(a,b){return new H.fJ(a,b==null?null:b.method)},
jb:function(a,b){var u=b==null,t=u?null:b.method
return new H.f1(a,t,u?null:b.receiver)},
at:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.iY(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.aQ(t,16)&8191)===10)switch(s){case 438:return f.$1(H.jb(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.jR(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.kt()
q=$.ku()
p=$.kv()
o=$.kw()
n=$.kz()
m=$.kA()
l=$.ky()
$.kx()
k=$.kC()
j=$.kB()
i=r.Z(u)
if(i!=null)return f.$1(H.jb(u,i))
else{i=q.Z(u)
if(i!=null){i.method="call"
return f.$1(H.jb(u,i))}else{i=p.Z(u)
if(i==null){i=o.Z(u)
if(i==null){i=n.Z(u)
if(i==null){i=m.Z(u)
if(i==null){i=l.Z(u)
if(i==null){i=o.Z(u)
if(i==null){i=k.Z(u)
if(i==null){i=j.Z(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.jR(u,i))}}return f.$1(new H.hM(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.cY()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.a2(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.cY()
return a},
jr:function(a){var u
if(a==null)return new H.dN(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dN(a)},
me:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.m(0,a[u],a[t])}return b},
mn:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(P.r("Unsupported number of arguments for wrapped closure"))},
bo:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mn)
a.$identity=u
return u},
kT:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.he().constructor.prototype):Object.create(new H.bt(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.a7
if(typeof t!=="number")return t.I()
$.a7=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.jF(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.kP(d,e,f)
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
kP:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.mh,a)
if(typeof a=="function")if(b)return a
else{u=c?H.jE:H.j0
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.f("Error in functionType of tearoff")},
kQ:function(a,b,c,d){var u=H.j0
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jF:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.kS(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.kQ(t,!r,u,b)
if(t===0){r=$.a7
if(typeof r!=="number")return r.I()
$.a7=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bu
return new Function(r+H.e(q==null?$.bu=H.ek("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.a7
if(typeof r!=="number")return r.I()
$.a7=r+1
o+=r
r="return function("+o+"){return this."
q=$.bu
return new Function(r+H.e(q==null?$.bu=H.ek("self"):q)+"."+H.e(u)+"("+o+");}")()},
kR:function(a,b,c,d){var u=H.j0,t=H.jE
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
kS:function(a,b){var u,t,s,r,q,p,o,n=$.bu
if(n==null)n=$.bu=H.ek("self")
u=$.jD
if(u==null)u=$.jD=H.ek("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.kR(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.a7
if(typeof u!=="number")return u.I()
$.a7=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.a7
if(typeof u!=="number")return u.I()
$.a7=u+1
return new Function(n+u+"}")()},
jm:function(a,b,c,d,e,f,g){return H.kT(a,b,c,d,!!e,!!f,g)},
j0:function(a){return a.a},
jE:function(a){return a.c},
ek:function(a){var u,t,s,r=new H.bt("self","target","receiver","name"),q=J.j8(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
ms:function(a,b){throw H.f(H.kO(a,H.e9(b.substring(2))))},
o:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.K(a)[b]
else u=!0
if(u)return a
H.ms(a,b)},
mc:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
kO:function(a,b){return new H.el("CastError: "+P.j6(a)+": type '"+H.e(H.m2(a))+"' is not a subtype of type '"+b+"'")},
m2:function(a){var u,t=J.K(a)
if(!!t.$ibv){u=H.mc(t)
if(u!=null)return H.mt(u)
return"Closure"}return H.bN(a)},
my:function(a){throw H.f(new P.eu(a))},
li:function(a){return new H.fZ(a)},
kk:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
cb:function(a){if(a==null)return
return a.$ti},
n4:function(a,b,c){return H.iW(a["$a"+H.e(c)],H.cb(b))},
mg:function(a,b,c,d){var u=H.iW(a["$a"+H.e(c)],H.cb(b))
return u==null?null:u[d]},
jq:function(a,b,c){var u=H.iW(a["$a"+H.e(b)],H.cb(a))
return u==null?null:u[c]},
br:function(a,b){var u=H.cb(a)
return u==null?null:u[b]},
mt:function(a){return H.aX(a,null)},
aX:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.e9(a[0].name)+H.kf(a,1,b)
if(typeof a=="function")return H.e9(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.c(b,t)
return H.e(b[t])}if('func' in a)return H.lB(a,b)
if('futureOr' in a)return"FutureOr<"+H.aX("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lB:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.b([],[P.q])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.c(a0,m)
p=C.b.I(p,a0[m])
l=u[q]
if(l!=null&&l!==P.Q)p+=" extends "+H.aX(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.aX(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.aX(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.aX(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.md(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.aX(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
kf:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.an("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.aX(p,c)}return"<"+u.h(0)+">"},
iW:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
n2:function(a,b,c){return a.apply(b,H.iW(J.K(b)["$a"+H.e(c)],H.cb(b)))},
n3:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
mp:function(a){var u,t,s,r,q=$.kl.$1(a),p=$.iM[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.iS[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.ki.$2(a,q)
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
return r.i}if(s==="+")return H.kn(a,u)
if(s==="*")throw H.f(P.k6(q))
if(v.leafTags[q]===true){r=H.iU(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.kn(a,u)},
kn:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jt(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
iU:function(a){return J.jt(a,!1,null,!!a.$iu)},
mq:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.iU(u)
else return J.jt(u,c,null,null)},
ml:function(){if(!0===$.js)return
$.js=!0
H.mm()},
mm:function(){var u,t,s,r,q,p,o,n
$.iM=Object.create(null)
$.iS=Object.create(null)
H.mk()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.ko.$1(q)
if(p!=null){o=H.mq(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
mk:function(){var u,t,s,r,q,p,o=C.w()
o=H.bm(C.x,H.bm(C.y,H.bm(C.o,H.bm(C.o,H.bm(C.z,H.bm(C.A,H.bm(C.B(C.n),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.kl=new H.iP(r)
$.ki=new H.iQ(q)
$.ko=new H.iR(p)},
bm:function(a,b){return a(b)||b},
l1:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.f(new P.eP("Illegal RegExp pattern ("+String(p)+")",a))},
mv:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
mb:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
kp:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
jw:function(a,b,c){var u=H.mw(a,b,c)
return u},
mw:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.kp(b),'g'),H.mb(c))},
hB:function hB(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fJ:function fJ(a,b){this.a=a
this.b=b},
f1:function f1(a,b,c){this.a=a
this.b=b
this.c=c},
hM:function hM(a){this.a=a},
iY:function iY(a){this.a=a},
dN:function dN(a){this.a=a
this.b=null},
bv:function bv(){},
hm:function hm(){},
he:function he(){},
bt:function bt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
el:function el(a){this.a=a},
fZ:function fZ(a){this.a=a},
I:function I(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
f5:function f5(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cB:function cB(a,b){this.a=a
this.$ti=b},
f6:function f6(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
iP:function iP(a){this.a=a},
iQ:function iQ(a){this.a=a},
iR:function iR(a){this.a=a},
f0:function f0(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
c8:function(a){return a},
aW:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.bp(b,a))},
lA:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.f(H.ma(a,b,c))
return b},
bJ:function bJ(){},
cH:function cH(){},
bI:function bI(){},
cI:function cI(){},
fA:function fA(){},
fB:function fB(){},
fC:function fC(){},
fD:function fD(){},
fE:function fE(){},
cJ:function cJ(){},
fF:function fF(){},
c_:function c_(){},
c0:function c0(){},
c1:function c1(){},
c2:function c2(){},
md:function(a){return J.jK(a?Object.keys(a):[],null)},
mz:function(a){return v.mangledGlobalNames[a]},
mr:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jt:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iO:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.js==null){H.ml()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.f(P.k6("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.jy()]
if(r!=null)return r
r=H.mp(a)
if(r!=null)return r
if(typeof a=="function")return C.J
u=Object.getPrototypeOf(a)
if(u==null)return C.r
if(u===Object.prototype)return C.r
if(typeof s=="function"){Object.defineProperty(s,$.jy(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
l0:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.f(P.jC(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.f(P.ad(a,0,4294967295,"length",null))
return J.jK(new Array(a),b)},
jK:function(a,b){return J.j8(H.b(a,[b]))},
j8:function(a){a.fixed$length=Array
return a},
K:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cw.prototype
return J.cv.prototype}if(typeof a=="string")return J.aJ.prototype
if(a==null)return J.cx.prototype
if(typeof a=="boolean")return J.f_.prototype
if(a.constructor==Array)return J.aI.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aK.prototype
return a}if(a instanceof P.Q)return a
return J.iO(a)},
jn:function(a){if(typeof a=="string")return J.aJ.prototype
if(a==null)return a
if(a.constructor==Array)return J.aI.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aK.prototype
return a}if(a instanceof P.Q)return a
return J.iO(a)},
iN:function(a){if(a==null)return a
if(a.constructor==Array)return J.aI.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aK.prototype
return a}if(a instanceof P.Q)return a
return J.iO(a)},
mf:function(a){if(typeof a=="number")return J.bC.prototype
if(typeof a=="string")return J.aJ.prototype
if(a==null)return a
if(!(a instanceof P.Q))return J.bj.prototype
return a},
jo:function(a){if(typeof a=="string")return J.aJ.prototype
if(a==null)return a
if(!(a instanceof P.Q))return J.bj.prototype
return a},
jp:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aK.prototype
return a}if(a instanceof P.Q)return a
return J.iO(a)},
G:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.K(a).p(a,b)},
ea:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mo(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.jn(a).i(a,b)},
kI:function(a,b,c,d){return J.jp(a).eL(a,b,c,d)},
iZ:function(a,b){return J.mf(a).eX(a,b)},
j_:function(a,b){return J.iN(a).w(a,b)},
kJ:function(a,b){return J.iN(a).E(a,b)},
kK:function(a){return J.jp(a).geS(a)},
ce:function(a){return J.K(a).gJ(a)},
b0:function(a){return J.iN(a).gM(a)},
b1:function(a){return J.jn(a).gl(a)},
jA:function(a){return J.iN(a).fE(a)},
kL:function(a,b,c){return J.jo(a).aM(a,b,c)},
kM:function(a){return J.jo(a).fR(a)},
V:function(a){return J.K(a).h(a)},
a:function a(){},
f_:function f_(){},
cx:function cx(){},
cy:function cy(){},
fN:function fN(){},
bj:function bj(){},
aK:function aK(){},
aI:function aI(a){this.$ti=a},
j9:function j9(a){this.$ti=a},
Y:function Y(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bC:function bC(){},
cw:function cw(){},
cv:function cv(){},
aJ:function aJ(){}},P={
lr:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.m3()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bo(new P.i9(s),1)).observe(u,{childList:true})
return new P.i8(s,u,t)}else if(self.setImmediate!=null)return P.m4()
return P.m5()},
ls:function(a){self.scheduleImmediate(H.bo(new P.ia(a),0))},
lt:function(a){self.setImmediate(H.bo(new P.ib(a),0))},
lu:function(a){P.jf(C.h,a)},
jf:function(a,b){var u=C.d.U(a.a,1000)
return P.ly(u<0?0:u,b)},
k4:function(a,b){var u=C.d.U(a.a,1000)
return P.lz(u<0?0:u,b)},
ly:function(a,b){var u=new P.dT()
u.dm(a,b)
return u},
lz:function(a,b){var u=new P.dT()
u.dn(a,b)
return u},
lX:function(){var u,t
for(;u=$.bl,u!=null;){$.ca=null
t=u.b
$.bl=t
if(t==null)$.c9=null
u.a.$0()}},
m1:function(){$.jk=!0
try{P.lX()}finally{$.ca=null
$.jk=!1
if($.bl!=null)$.jz().$1(P.kj())}},
m_:function(a){var u=new P.dd(a)
if($.bl==null){$.bl=$.c9=u
if(!$.jk)$.jz().$1(P.kj())}else $.c9=$.c9.b=u},
m0:function(a){var u,t,s=$.bl
if(s==null){P.m_(a)
$.ca=$.c9
return}u=new P.dd(a)
t=$.ca
if(t==null){u.b=s
$.bl=$.ca=u}else{u.b=t.b
$.ca=t.b=u
if(u.b==null)$.c9=u}},
k3:function(a,b){var u=$.a5
if(u===C.e)return P.jf(a,b)
return P.jf(a,u.eT(b))},
lo:function(a,b){var u=$.a5
if(u===C.e)return P.k4(a,b)
return P.k4(a,u.cf(b,P.d4))},
kg:function(a,b,c,d,e){var u={}
u.a=d
P.m0(new P.iK(u,e))},
lY:function(a,b,c,d){var u,t=$.a5
if(t===c)return d.$0()
$.a5=c
u=t
try{t=d.$0()
return t}finally{$.a5=u}},
lZ:function(a,b,c,d,e){var u,t=$.a5
if(t===c)return d.$1(e)
$.a5=c
u=t
try{t=d.$1(e)
return t}finally{$.a5=u}},
i9:function i9(a){this.a=a},
i8:function i8(a,b,c){this.a=a
this.b=b
this.c=c},
ia:function ia(a){this.a=a},
ib:function ib(a){this.a=a},
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
d_:function d_(){},
hh:function hh(){},
d4:function d4(){},
iF:function iF(){},
iK:function iK(a,b){this.a=a
this.b=b},
ip:function ip(){},
iq:function iq(a,b){this.a=a
this.b=b},
ir:function ir(a,b,c){this.a=a
this.b=b
this.c=c},
jL:function(a,b){return new H.I([a,b])},
l2:function(a){return H.me(a,new H.I([null,null]))},
cC:function(a){return new P.il([a])},
jj:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
lx:function(a,b){var u=new P.du(a,b)
u.c=a.e
return u},
kZ:function(a,b,c){var u,t
if(P.jl(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.q])
$.U.push(a)
try{P.lC(a,u)}finally{if(0>=$.U.length)return H.c($.U,-1)
$.U.pop()}t=P.k1(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
j7:function(a,b,c){var u,t
if(P.jl(a))return b+"..."+c
u=new P.an(b)
$.U.push(a)
try{t=u
t.a=P.k1(t.a,a,", ")}finally{if(0>=$.U.length)return H.c($.U,-1)
$.U.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jl:function(a){var u,t
for(u=$.U.length,t=0;t<u;++t)if(a===$.U[t])return!0
return!1},
lC:function(a,b){var u,t,s,r,q,p,o,n=a.gM(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.t())return
u=H.e(n.gD(n))
b.push(u)
m+=u.length+2;++l}if(!n.t()){if(l<=5)return
if(0>=b.length)return H.c(b,-1)
t=b.pop()
if(0>=b.length)return H.c(b,-1)
s=b.pop()}else{r=n.gD(n);++l
if(!n.t()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.c(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gD(n);++l
for(;n.t();r=q,q=p){p=n.gD(n);++l
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
jM:function(a,b){var u,t,s=P.cC(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.n)(a),++t)s.n(0,a[t])
return s},
jO:function(a){var u,t={}
if(P.jl(a))return"{...}"
u=new P.an("")
try{$.U.push(a)
u.a+="{"
t.a=!0
J.kJ(a,new P.fb(t,u))
u.a+="}"}finally{if(0>=$.U.length)return H.c($.U,-1)
$.U.pop()}t=u.a
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
f7:function f7(){},
p:function p(){},
fa:function fa(){},
fb:function fb(a,b){this.a=a
this.b=b},
aj:function aj(){},
it:function it(){},
dv:function dv(){},
en:function en(){},
ep:function ep(){},
eE:function eE(){},
eW:function eW(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
eV:function eV(a){this.a=a},
hQ:function hQ(){},
hR:function hR(){},
iD:function iD(a){this.b=0
this.c=a},
kX:function(a){if(a instanceof H.bv)return a.h(0)
return"Instance of '"+H.e(H.bN(a))+"'"},
l3:function(a,b,c){var u,t,s=J.l0(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
jN:function(a,b,c){var u,t=H.b([],[c])
for(u=J.b0(a);u.t();)t.push(u.gD(u))
if(b)return t
return J.j8(t)},
je:function(a){var u,t
if(a.constructor===Array){u=a.length
t=P.jY(0,null,u)
return H.jW(t<u?C.a.d4(a,0,t):a)}return P.lm(a,0,null)},
lm:function(a,b,c){var u,t,s=J.b0(a)
for(u=0;u<b;++u)if(!s.t())throw H.f(P.ad(b,0,u,null,null))
t=[]
for(;s.t();)t.push(s.gD(s))
return H.jW(t)},
lf:function(a){return new H.f0(a,H.l1(a,!1,!0,!1,!1,!1))},
k1:function(a,b,c){var u=J.b0(b)
if(!u.t())return a
if(c.length===0){do a+=H.e(u.gD(u))
while(u.t())}else{a+=H.e(u.gD(u))
for(;u.t();)a=a+c+H.e(u.gD(u))}return a},
ke:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.f){u=$.kH().b
u=u.test(b)}else u=!1
if(u)return b
t=C.D.eY(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.c(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.jd(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
kU:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
kV:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cm:function(a){if(a>=10)return""+a
return"0"+a},
jH:function(a){return new P.aD(1000*a)},
j6:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.V(a)
if(typeof a==="string")return JSON.stringify(a)
return P.kX(a)},
kN:function(a){return new P.a2(!1,null,null,a)},
jC:function(a,b,c){return new P.a2(!0,a,b,c)},
cR:function(a,b){return new P.bf(null,null,!0,a,b,"Value not in range")},
ad:function(a,b,c,d,e){return new P.bf(b,c,!0,a,d,"Invalid value")},
jY:function(a,b,c){if(0>a||a>c)throw H.f(P.ad(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.f(P.ad(b,a,c,"end",null))
return b}return c},
jX:function(a,b){if(typeof a!=="number")return a.ay()
if(a<0)throw H.f(P.ad(a,0,null,b,null))},
C:function(a,b,c,d,e){var u=e==null?J.b1(b):e
return new P.eX(u,!0,a,c,"Index out of range")},
X:function(a){return new P.hO(a)},
k6:function(a){return new P.hL(a)},
k0:function(a){return new P.bP(a)},
aB:function(a){return new P.eo(a)},
r:function(a){return new P.dl(a)},
jv:function(a){H.mr(a)},
ag:function ag(){},
aC:function aC(a,b){this.a=a
this.b=b},
H:function H(){},
aD:function aD(a){this.a=a},
eA:function eA(){},
eB:function eB(){},
b7:function b7(){},
cM:function cM(){},
a2:function a2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bf:function bf(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eX:function eX(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hO:function hO(a){this.a=a},
hL:function hL(a){this.a=a},
bP:function bP(a){this.a=a},
eo:function eo(a){this.a=a},
fM:function fM(){},
cY:function cY(){},
eu:function eu(a){this.a=a},
dl:function dl(a){this.a=a},
eP:function eP(a,b){this.a=a
this.b=b},
eR:function eR(){},
x:function x(){},
j:function j(){},
eZ:function eZ(){},
a9:function a9(){},
cE:function cE(){},
aN:function aN(){},
a6:function a6(){},
Q:function Q(){},
q:function q(){},
an:function an(a){this.a=a},
m9:function(a){var u,t=J.K(a)
if(!!t.$iaH){u=t.gcj(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.dY(a.data,a.height,a.width)},
m8:function(a){if(a instanceof P.dY)return{data:a.a,height:a.b,width:a.c}
return a},
as:function(a){var u,t,s,r,q
if(a==null)return
u=P.jL(P.q,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.n)(t),++r){q=t[r]
u.m(0,q,a[q])}return u},
m7:function(a){var u={}
a.E(0,new P.iL(u))
return u},
dY:function dY(a,b,c){this.a=a
this.b=b
this.c=c},
iL:function iL(a){this.a=a},
eL:function eL(a,b){this.a=a
this.b=b},
eM:function eM(){},
eN:function eN(){},
io:function io(){},
ae:function ae(){},
bc:function bc(){},
f3:function f3(){},
bd:function bd(){},
fK:function fK(){},
fR:function fR(){},
bO:function bO(){},
hi:function hi(){},
i:function i(){},
bh:function bh(){},
hA:function hA(){},
ds:function ds(){},
dt:function dt(){},
dD:function dD(){},
dE:function dE(){},
dP:function dP(){},
dQ:function dQ(){},
dW:function dW(){},
dX:function dX(){},
ef:function ef(){},
eg:function eg(){},
eh:function eh(a){this.a=a},
ei:function ei(){},
b2:function b2(){},
fL:function fL(){},
de:function de(){},
cT:function cT(){},
hd:function hd(){},
dL:function dL(){},
dM:function dM(){}},W={
jB:function(){var u=document.createElement("a")
return u},
j2:function(){var u=document.createElement("canvas")
return u},
kW:function(a,b,c){var u=document.body,t=(u&&C.m).Y(u,a,b,c)
t.toString
u=new H.bX(new W.R(t),new W.eD(),[W.D])
return u.gal(u)},
j4:function(a){return"wheel"},
bx:function(a){var u,t,s,r="element tag unavailable"
try{u=J.jp(a)
t=u.gcS(a)
if(typeof t==="string")r=u.gcS(a)}catch(s){H.at(s)}return r},
ik:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kc:function(a,b,c,d){var u=W.ik(W.ik(W.ik(W.ik(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
M:function(a,b,c,d){var u=W.kh(new W.ii(c),W.h)
if(u!=null&&!0)J.kI(a,b,u,!1)
return new W.ih(a,b,u,!1)},
kb:function(a){var u=W.jB(),t=window.location
u=new W.bZ(new W.is(u,t))
u.dh(a)
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
kd:function(){var u=P.q,t=P.jM(C.j,u),s=H.b(["TEMPLATE"],[u])
t=new W.iz(t,P.cC(u),P.cC(u),P.cC(u),null)
t.dl(null,new H.fe(C.j,new W.iA(),[H.br(C.j,0),u]),s,null)
return t},
kh:function(a,b){var u=$.a5
if(u===C.e)return a
return u.cf(a,b)},
k:function k(){},
eb:function eb(){},
ec:function ec(){},
ed:function ed(){},
cg:function cg(){},
b3:function b3(){},
b4:function b4(){},
az:function az(){},
eq:function eq(){},
A:function A(){},
bw:function bw(){},
er:function er(){},
Z:function Z(){},
a8:function a8(){},
es:function es(){},
et:function et(){},
ew:function ew(){},
a3:function a3(){},
ex:function ex(){},
co:function co(){},
cp:function cp(){},
ey:function ey(){},
ez:function ez(){},
id:function id(a,b){this.a=a
this.b=b},
J:function J(){},
eD:function eD(){},
h:function h(){},
d:function d(){},
aF:function aF(){},
eJ:function eJ(){},
eK:function eK(){},
eO:function eO(){},
aG:function aG(){},
eU:function eU(){},
by:function by(){},
aH:function aH(){},
bz:function bz(){},
bb:function bb(){},
f8:function f8(){},
fs:function fs(){},
ft:function ft(){},
fu:function fu(a){this.a=a},
fv:function fv(){},
fw:function fw(a){this.a=a},
aM:function aM(){},
fx:function fx(){},
ab:function ab(){},
R:function R(a){this.a=a},
D:function D(){},
cK:function cK(){},
aO:function aO(){},
fP:function fP(){},
fX:function fX(){},
fY:function fY(a){this.a=a},
h_:function h_(){},
aP:function aP(){},
ha:function ha(){},
aQ:function aQ(){},
hb:function hb(){},
aR:function aR(){},
hf:function hf(){},
hg:function hg(a){this.a=a},
ao:function ao(){},
d0:function d0(){},
hj:function hj(){},
hk:function hk(){},
bQ:function bQ(){},
aS:function aS(){},
ap:function ap(){},
hn:function hn(){},
ho:function ho(){},
hu:function hu(){},
aT:function aT(){},
bg:function bg(){},
hy:function hy(){},
hz:function hz(){},
aU:function aU(){},
hP:function hP(){},
i5:function i5(){},
aV:function aV(){},
bY:function bY(){},
ie:function ie(){},
dg:function dg(){},
ij:function ij(){},
dA:function dA(){},
iw:function iw(){},
ix:function ix(){},
ic:function ic(){},
ig:function ig(a){this.a=a},
ih:function ih(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
ii:function ii(a){this.a=a},
bZ:function bZ(a){this.a=a},
B:function B(){},
cL:function cL(a){this.a=a},
fH:function fH(a){this.a=a},
fG:function fG(a,b,c){this.a=a
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
ct:function ct(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
am:function am(){},
is:function is(a,b){this.a=a
this.b=b},
dZ:function dZ(a){this.a=a},
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
c3:function c3(){},
c4:function c4(){},
dJ:function dJ(){},
dK:function dK(){},
dO:function dO(){},
dR:function dR(){},
dS:function dS(){},
c5:function c5(){},
c6:function c6(){},
dU:function dU(){},
dV:function dV(){},
e_:function e_(){},
e0:function e0(){},
e1:function e1(){},
e2:function e2(){},
e3:function e3(){},
e4:function e4(){},
e5:function e5(){},
e6:function e6(){},
e7:function e7(){},
e8:function e8(){}},T={
E:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.f(P.r("The given low and high character strings for a Range must have one and only one characters."))
u=C.b.ao(a,0)
t=C.b.ao(b,0)
s=new T.fS()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
m:function(a){var u=new T.h0()
u.de(a)
return u},
ah:function ah(){},
cu:function cu(){},
aL:function aL(){},
T:function T(){this.a=null},
fS:function fS(){this.b=this.a=null},
h0:function h0(){this.a=null},
d2:function d2(){},
hp:function hp(){},
hq:function hq(){var _=this
_.y=_.d=_.c=_.b=_.a=null},
hr:function hr(a){var _=this
_.a=a
_.e=_.d=_.b=null},
hs:function hs(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},R={
hw:function(){var u=new R.hv(),t=P.q
u.a=new H.I([t,R.cZ])
u.b=new H.I([t,R.d6])
return u},
cZ:function cZ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
d5:function d5(a,b,c){this.a=a
this.b=b
this.c=c},
d6:function d6(a){this.b=a
this.c=null},
hv:function hv(){this.c=this.b=this.a=null},
d7:function d7(a){this.b=a
this.a=this.c=null}},O={
j3:function(a){var u=new O.b5([a])
u.bP(a)
return u},
b5:function b5(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bG:function bG(){this.b=this.a=null},
cF:function cF(){var _=this
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
fg:function fg(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bF:function bF(){},
fh:function fh(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aa:function aa(a,b){var _=this
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
d1:function d1(){}},E={
lh:function(a,b){var u=new E.fT(a)
u.dd(a,b)
return u},
ln:function(a,b,c,d,e){var u,t,s=J.K(a)
if(!!s.$ib4)return E.k2(a,!0,!0,!0,!1)
u=W.j2()
t=u.style
t.width="100%"
t.height="100%"
s.gcg(a).n(0,u)
return E.k2(u,!0,!0,!0,!1)},
k2:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.d3(),p=C.p.bH(a,"webgl2",P.l2(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.t(P.r("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.lh(p,a)
u=new T.hr(p)
u.b=p.getParameter(3379)
p.getParameter(34076)
u.e=u.d=0
q.f=u
u=new X.db(a)
t=new X.f2()
t.d=P.cC(P.x)
u.b=t
t=new X.fy(u)
t.f=0
t.r=V.cO()
t.x=V.cO()
t.ch=t.Q=1
u.c=t
t=new X.f9(u)
t.r=0
t.x=V.cO()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hx(u)
t.f=V.cO()
t.r=V.cO()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.b([],[[P.d_,P.Q]])
u.z=t
s=document
t.push(W.M(s,"contextmenu",u.gdV(),!1))
u.z.push(W.M(a,"focus",u.ge0(),!1))
u.z.push(W.M(a,"blur",u.gdP(),!1))
u.z.push(W.M(s,"keyup",u.ge4(),!1))
u.z.push(W.M(s,"keydown",u.ge2(),!1))
u.z.push(W.M(a,"mousedown",u.ge8(),!1))
u.z.push(W.M(a,"mouseup",u.gec(),!1))
u.z.push(W.M(a,r,u.gea(),!1))
t=u.z
W.j4(a)
W.j4(a)
t.push(W.M(a,W.j4(a),u.gee(),!1))
u.z.push(W.M(s,r,u.gdX(),!1))
u.z.push(W.M(s,"mouseup",u.gdZ(),!1))
u.z.push(W.M(s,"pointerlockchange",u.geg(),!1))
u.z.push(W.M(a,"touchstart",u.ger(),!1))
u.z.push(W.M(a,"touchend",u.gen(),!1))
u.z.push(W.M(a,"touchmove",u.gep(),!1))
q.Q=!0
q.ch=!1
q.cx=new P.aC(Date.now(),!1)
q.cy=0
q.c5()
return q},
ej:function ej(){},
aE:function aE(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fT:function fT(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fU:function fU(a){this.a=a},
fV:function fV(a){this.a=a},
fW:function fW(a){this.a=a},
d3:function d3(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
ht:function ht(a){this.a=a}},Z={
ji:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.c8(c)),35044)
a.bindBuffer(b,null)
return new Z.dc(b,u)},
a1:function(a){return new Z.ar(a)},
dc:function dc(a,b){this.a=a
this.b=b},
ch:function ch(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
i6:function i6(a){this.a=a},
ci:function ci(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
ba:function ba(a,b,c){this.a=a
this.b=b
this.c=c},
ar:function ar(a){this.a=a}},D={
a_:function(){var u=new D.b8()
u.d=0
return u},
em:function em(){},
b8:function b8(){var _=this
_.d=_.c=_.b=_.a=null},
eG:function eG(a){this.a=a},
eH:function eH(a){this.a=a},
S:function S(){this.b=null},
bA:function bA(){this.b=null},
bB:function bB(){this.b=null},
z:function z(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
b6:function b6(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
W:function W(){},
cA:function cA(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
fQ:function fQ(){},
hc:function hc(){}},X={cj:function cj(a,b){this.a=a
this.b=b},cz:function cz(a,b){this.a=a
this.b=b},f2:function f2(){this.d=this.b=this.a=null},f9:function f9(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bH:function bH(a,b,c){this.a=a
this.b=b
this.c=c},fy:function fy(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},hx:function hx(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},db:function db(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
kY:function(a){var u=new X.eQ(),t=V.bn(1)
u.a=new V.aA(0,0,0,t)
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.jZ
if(t==null){t=V.lg(0,0,1,1)
$.jZ=t}u.r=t
return u},
j1:function j1(){},
eQ:function eQ(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cN:function cN(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
hl:function hl(){}},V={
bn:function(a){var u
if(a<0)u=0
else u=a>1?1:a
return u},
jx:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.d_(a-b,u)
return(a<0?a+u:a)+b},
v:function(a,b,c){if(a==null)return C.b.a_("null",c)
return C.b.a_(C.c.cU(Math.abs(a-0)<$.y().a?0:a,b),c+b+1)},
bq:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.q])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.n)(a),++s){r=V.v(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.c(o,q)
u=C.b.a_(o[q],t)
p=o.length
if(q>=p)return H.c(o,q)
o[q]=u}return o},
ju:function(a){return C.c.fO(Math.pow(2,C.I.bw(Math.log(H.m6(a))/Math.log(2))))},
jc:function(){var u=$.jQ
return u==null?$.jQ=V.al(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
al:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ak(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
jP:function(a,b,c){var u=c.B(0,Math.sqrt(c.L(c))),t=b.aE(u),s=t.B(0,Math.sqrt(t.L(t))),r=u.aE(s),q=new V.w(a.a,a.b,a.c),p=s.az(0).L(q),o=r.az(0).L(q),n=u.az(0).L(q)
return V.al(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
cO:function(){var u=$.jT
return u==null?$.jT=new V.ac(0,0):u},
jU:function(){var u=$.bL
return u==null?$.bL=new V.a4(0,0,0):u},
lg:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cS(a,b,c,d)},
bW:function(){var u=$.k9
return u==null?$.k9=new V.w(0,0,0):u},
lp:function(){var u=$.hS
return u==null?$.hS=new V.w(-1,0,0):u},
jh:function(){var u=$.hT
return u==null?$.hT=new V.w(0,1,0):u},
lq:function(){var u=$.hU
return u==null?$.hU=new V.w(0,0,1):u},
N:function N(a,b,c){this.a=a
this.b=b
this.c=c},
aA:function aA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eF:function eF(a){this.a=a},
cG:function cG(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ak:function ak(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ac:function ac(a,b){this.a=a
this.b=b},
a4:function a4(a,b,c){this.a=a
this.b=b
this.c=c},
cP:function cP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cS:function cS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aq:function aq(a,b){this.a=a
this.b=b},
w:function w(a,b,c){this.a=a
this.b=b
this.c=c},
mu:function(a){P.lo(C.F,new V.iV(a))},
lj:function(a){var u=new V.h5()
u.dg(a,!0)
return u},
ck:function ck(){},
iV:function iV(a){this.a=a},
ev:function ev(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eS:function eS(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eT:function eT(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fO:function fO(a){var _=this
_.a=a
_.d=_.c=_.b=null},
h5:function h5(){this.b=this.a=null},
h7:function h7(a){this.a=a},
h6:function h6(a){this.a=a},
h8:function h8(a){this.a=a}},U={
jG:function(a){var u=new U.cl()
u.a=a
return u},
cl:function cl(){this.b=this.a=null},
fz:function fz(){},
cU:function cU(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cq:function cq(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
l4:function(a,b){var u=a.ag,t=new A.ff(b,u)
t.df(b,u)
t.dc(a,b)
return t},
l5:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="MaterialLight_"+a0.ga3(a0)+a1.ga3(a1)+a2.ga3(a2)+a3.ga3(a3)+a4.ga3(a4)+a5.ga3(a5)+a6.ga3(a6)+a7.ga3(a7)+a8.ga3(a8)+"_"
f+=a?"1":"0"
f+=b?"1":"0"
f+=c?"1":"0"
f=f+"0_"+e
u=a9.length
if(u>0){f+="_Dir"
for(t=0;t<a9.length;a9.length===u||(0,H.n)(a9),++t)f+="_"+H.e(a9[t].a)}u=b0.length
if(u>0){f+="_Point"
for(t=0;t<b0.length;b0.length===u||(0,H.n)(b0),++t)f+="_"+H.e(b0[t].a)}u=b1.length
if(u>0){f+="_Spot"
for(t=0;t<b1.length;b1.length===u||(0,H.n)(b1),++t)f+="_"+H.e(b1[t].a)}for(u=a9.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=a9[t].b
for(u=b0.length,t=0;t<u;++t,r=!0)s+=b0[t].b
for(q=b1.length,t=0;t<q;++t,r=!0)s+=b1[t].b
p=a6.a||a6.b||!1||a7.a||a7.b||!1
if(!(a1.a||a1.b||!1))if(!(a2.a||a2.b||!1)){q=a3.a||a3.b||!1||a4.a||a4.b||!1
o=q}else o=!0
else o=!0
q=!a4.a
n=!q||a4.b||!1||u>0||p
if(!(a2.a||a2.b||!1))m=a3.a||a3.b||!1||!q||a4.b||!1
else m=!0
if(!m)l=a5.a||a5.b||!1||p
else l=!0
k=a5.a||a5.b||!1
j=a0.b||a1.b||a2.b||a3.b||a4.b||a5.b||a6.b||a7.b||a8.b
i=e>0
h=l||k||n||!1
a=a&&j
g=$.ax()
if(l){u=$.aw()
g=new Z.ar(g.a|u.a)}if(k){u=$.av()
g=new Z.ar(g.a|u.a)}if(j){u=$.ay()
g=new Z.ar(g.a|u.a)}if(i){u=$.au()
g=new Z.ar(g.a|u.a)}return new A.fi(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,s,p,m,p,r,h,!0,!1,!1,o,r,n,l,k,j,!1,i,a,!1,c,!1,e,f.charCodeAt(0)==0?f:f,g)},
iI:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
iJ:function(a,b,c){var u,t="Txt, txt2D).rgb;\n"
A.iI(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.iX(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.b){u+="   "+c+"Color = "+c+"Clr*texture2D("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.b){u+="   "+c+"Color = texture2D("+c+t
a.a=u}a.a=u+"}\n"},
lG:function(a,b){var u,t=a.a,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.iI(b,t,"emission")
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
lD:function(a,b){var u,t=a.b
if(!(t.a||t.b||!1))return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.iJ(b,t,"ambient")
b.a+="\n"},
lE:function(a,b){var u,t=a.c
if(!(t.a||t.b||!1))return
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
lH:function(a,b){var u,t=a.d
if(!(t.a||t.b||!1))return
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
lN:function(a,b){var u,t=a.e
if(!(t.a||t.b||!1))return
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
lJ:function(a,b){var u,t,s
if(!a.k3)return
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
lL:function(a,b){var u,t=a.r,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.iI(b,t,"reflect")
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
lM:function(a,b){var u,t=a.x,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.iI(b,t,"refract")
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
lF:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
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
if(typeof u!=="number")return u.a9()
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
if(n.a||n.b||!1)o.push("ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
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
if(typeof u!=="number")return u.a9()
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
if(o.a||o.b||!1)l.push("ambientColor")
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
if(r.a||r.b||!1)k.push("diffuse(norm, normDir)")
r=a.d
if(r.a||r.b||!1)k.push("invDiffuse(norm, normDir)")
r=a.e
if(r.a||r.b||!1)k.push("specular(norm, normDir)")
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
if(typeof u!=="number")return u.a9()
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
if(r.a||r.b||!1)j.push("ambientColor")
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
if(u.a||u.b||!1)i.push("diffuse(norm, litVec)")
u=a.d
if(u.a||u.b||!1)i.push("invDiffuse(norm, litVec)")
u=a.e
if(u.a||u.b||!1)i.push("specular(norm, litVec)")
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
t=H.b([],[P.q])
u=a.b
if(u.a||u.b||!1)t.push("ambientColor")
u=a.c
if(u.a||u.b||!1)t.push("diffuse(norm, litVec)")
u=a.d
if(u.a||u.b||!1)t.push("invDiffuse(norm, litVec)")
u=a.e
if(u.a||u.b||!1)t.push("specular(norm, litVec)")
u=b.a+="   return "+C.a.k(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
lP:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.an("")
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
r=a.id
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.n)(q),++o)A.lF(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.n)(q),++o)A.lK(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.n)(q),++o)A.lO(a,q[o],j)
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
n=H.b([],[P.q])
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.n)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.aa(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.n)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.aa(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.n)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.aa(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
if(u.a||u.b||!1)n.push("emissionColor()")
u=a.r
if(u.a||u.b||!1)n.push("reflect(refl)")
u=a.x
if(u.a||u.b||!1)n.push("refract(refl)")
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
iX:function(a){if(0>=a.length)return H.c(a,0)
return a[0].toUpperCase()+C.b.aa(a,1)},
jg:function(a,b,c,d,e){var u=new A.hE(a,c,e)
u.f=d
P.l3(d,0,P.x)
return u},
cf:function cf(a,b,c){this.a=a
this.b=b
this.c=c},
ee:function ee(a){this.a=a},
O:function O(a,b,c){this.a=a
this.b=b
this.c=c},
ff:function ff(a,b){var _=this
_.fY=_.cm=_.cl=_.ck=_.ag=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.h5=_.h4=_.h3=_.bv=_.bu=_.bt=_.bs=_.br=_.bq=_.h2=_.cA=_.cz=_.h1=_.cw=_.cv=_.cu=_.h0=_.ct=_.cs=_.cr=_.h_=_.cq=_.cp=_.fZ=_.co=_.cn=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cn:function cn(a,b){this.a=a
this.b=b},
cQ:function cQ(a,b){this.a=a
this.b=b},
cX:function cX(a,b){this.a=a
this.b=b},
fi:function fi(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.ag=b3
_.ck=b4},
bS:function bS(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
bU:function bU(a,b,c,d,e,f,g,h,i,j){var _=this
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
bV:function bV(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cV:function cV(){},
d8:function d8(){},
hJ:function hJ(a){this.a=a},
d9:function d9(a,b,c){this.a=a
this.c=b
this.d=c},
hG:function hG(a,b,c){this.a=a
this.c=b
this.d=c},
hH:function hH(a,b,c){this.a=a
this.c=b
this.d=c},
hI:function hI(a,b,c){this.a=a
this.c=b
this.d=c},
hE:function hE(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
L:function L(a,b,c){this.a=a
this.c=b
this.d=c},
hF:function hF(a,b,c){this.a=a
this.c=b
this.d=c},
F:function F(a,b,c){this.a=a
this.c=b
this.d=c},
bR:function bR(a,b,c){this.a=a
this.c=b
this.d=c},
hK:function hK(a,b,c){this.a=a
this.c=b
this.d=c},
bT:function bT(a,b,c){this.a=a
this.c=b
this.d=c},
a0:function a0(a,b,c){this.a=a
this.c=b
this.d=c},
P:function P(a,b,c){this.a=a
this.c=b
this.d=c},
bi:function bi(a,b,c){this.a=a
this.c=b
this.d=c}},F={
iH:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
c7:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.w(h,g+a1,f+a2)
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
j.d=i}m=F.iH(i)
l=F.iH(j.b)
k=F.mx(d,a0,new F.iG(j,F.iH(j.c),F.iH(j.d),l,m,c),b)
if(k!=null)a.bB(k)},
mx:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
if(a<1)return
if(b<1)return
u=F.k_()
t=H.b([],[F.bk])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
o=q.cc(new V.aA(p,0,0,1),new V.ac(r,1))
c.$3(o,r,0)
t.push(o.bp(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
o=k.cc(new V.aA(j,i,h,1),new V.ac(r,m))
c.$3(o,r,n)
t.push(o.bp(d))}}u.d.eM(a+1,b+1,t)
return u},
cr:function(a,b,c){var u=new F.b9(),t=a.a
if(t==null)H.t(P.r("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.t(P.r("May not create a face with vertices attached to different shapes."))
u.eE(a)
u.eF(b)
u.eG(c)
u.a.a.d.b.push(u)
u.a.a.S()
return u},
k_:function(){var u=new F.h1(),t=new F.hV(u)
t.b=!1
t.c=H.b([],[F.bk])
u.a=t
t=new F.h4(u)
t.b=H.b([],[F.bK])
u.b=t
t=new F.h3(u)
t.b=H.b([],[F.bD])
u.c=t
t=new F.h2(u)
t.b=H.b([],[F.b9])
u.d=t
u.e=null
return u},
ka:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.bk(),r=new F.i2()
r.b=H.b([],[F.bK])
s.b=r
r=new F.hZ()
u=[F.bD]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.hW()
u=[F.b9]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.kD()
s.e=0
r=$.ax()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aw().a)!==0?e:t
s.x=(u&$.av().a)!==0?b:t
s.y=(u&$.ay().a)!==0?f:t
s.z=(u&$.b_().a)!==0?g:t
s.Q=(u&$.kE().a)!==0?c:t
s.ch=(u&$.bs().a)!==0?i:0
s.cx=(u&$.au().a)!==0?a:t
return s},
iG:function iG(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
b9:function b9(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
eI:function eI(){},
h9:function h9(){},
bD:function bD(){this.b=this.a=null},
f4:function f4(){},
hD:function hD(){},
bK:function bK(){this.a=null},
h1:function h1(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
h2:function h2(a){this.a=a
this.b=null},
h3:function h3(a){this.a=a
this.b=null},
h4:function h4(a){this.a=a
this.b=null},
bk:function bk(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i4:function i4(a){this.a=a},
i3:function i3(a){this.a=a},
hV:function hV(a){this.a=a
this.c=this.b=null},
hW:function hW(){this.d=this.c=this.b=null},
hX:function hX(a,b){this.a=a
this.b=b},
hY:function hY(a,b){this.a=a
this.b=b},
hZ:function hZ(){this.c=this.b=null},
i0:function i0(){},
i_:function i_(){},
i1:function i1(){},
fI:function fI(){},
i2:function i2(){this.b=null},
km:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="testCanvas",e=null,d=V.lj("Test 005"),c=W.j2()
c.className="pageLargeCanvas"
c.id=f
d.a.appendChild(c)
u=[P.q]
d.cd(H.b(["A test of the Material Lighting shader with 2D textures and directional ","lighting. This test has texturing for emission, ambient, diffuse, and ","specular. The same texture is used for ambient and diffuse. ","The emission texture makes the lights on the panel glow. ","The specular texture makes specific parts shiny and other parts not."],u))
d.cd(H.b(["\xab[Back to Tests|../]"],u))
t=document.getElementById(f)
if(t==null)H.t(P.r("Failed to find an element with the identifier, testCanvas."))
s=E.ln(t,!0,!0,!0,!1)
r=new E.aE()
r.a=""
r.b=!0
u=E.aE
q=O.j3(u)
r.y=q
q.b0(r.gfl(),r.gfo())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.sbK(0,e)
r.saJ(e)
p=F.k_()
F.c7(p,e,e,1,1,1,0,0,1)
F.c7(p,e,e,1,1,0,1,0,3)
F.c7(p,e,e,1,1,0,0,1,2)
F.c7(p,e,e,1,1,-1,0,0,0)
F.c7(p,e,e,1,1,0,-1,0,0)
F.c7(p,e,e,1,1,0,0,-1,3)
p.at()
p.fk(new F.i_(),new F.fI())
r.sbK(0,p)
q=new U.cU()
q.r=q.f=q.e=q.d=q.c=q.b=q.a=0
q.scX(0)
q.scL(0,0)
q.scR(0)
o=q.d
if(!(Math.abs(o-0.1)<$.y().a)){q.d=0.1
o=new D.z("deltaYaw",o,0.1)
o.b=!0
q.aq(o)}o=q.e
if(!(Math.abs(o-0.21)<$.y().a)){q.e=0.21
o=new D.z("deltaPitch",o,0.21)
o.b=!0
q.aq(o)}o=q.f
if(!(Math.abs(o-0.32)<$.y().a)){q.f=0.32
o=new D.z("deltaRoll",o,0.32)
o.b=!0
q.aq(o)}r.saJ(q)
n=s.f.bA("../resources/CtrlPnlColor.png")
m=new O.cF()
q=O.j3(V.ak)
m.e=q
q.b0(m.gdL(),m.gdN())
q=new O.aa(m,"emission")
q.c=new A.O(!1,!1,!1)
q.f=new V.N(0,0,0)
m.f=q
q=new O.aa(m,"ambient")
q.c=new A.O(!1,!1,!1)
q.f=new V.N(0,0,0)
m.r=q
q=new O.aa(m,"diffuse")
q.c=new A.O(!1,!1,!1)
q.f=new V.N(0,0,0)
m.x=q
q=new O.aa(m,"invDiffuse")
q.c=new A.O(!1,!1,!1)
q.f=new V.N(0,0,0)
m.y=q
q=new O.fl(m,"specular")
q.c=new A.O(!1,!1,!1)
q.f=new V.N(0,0,0)
q.ch=100
m.z=q
q=new O.fh(m,"bump")
q.c=new A.O(!1,!1,!1)
m.Q=q
m.ch=null
q=new O.aa(m,"reflect")
q.c=new A.O(!1,!1,!1)
q.f=new V.N(0,0,0)
m.cx=q
q=new O.fk(m,"refract")
q.c=new A.O(!1,!1,!1)
q.f=new V.N(0,0,0)
q.ch=1
m.cy=q
q=new O.fg(m,"alpha")
q.c=new A.O(!1,!1,!1)
q.f=1
m.db=q
q=new D.cA()
q.bP(D.W)
q.e=H.b([],[D.b6])
q.f=H.b([],[D.fQ])
q.r=H.b([],[D.hc])
q.y=q.x=null
q.bJ(q.gdJ(),q.gej(),q.gel())
m.dx=q
o=new O.fj()
o.b=new V.aA(0,0,0,0)
o.c=1
o.d=10
o.e=!1
m.dy=o
o=q.x
q=o==null?q.x=D.a_():o
q.n(0,m.gey())
q=m.dx
o=q.y
q=o==null?q.y=D.a_():o
q.n(0,m.gaO())
m.fr=null
q=m.dx
l=V.jh()
o=U.jG(V.jP(V.jU(),l,new V.w(1,-1,-3)))
k=new V.N(1,1,1)
j=new D.b6()
j.c=new V.N(1,1,1)
j.a=V.lq()
j.d=V.jh()
j.e=V.lp()
i=j.b
j.b=o
o.gv().n(0,j.gdi())
o=new D.z("mover",i,j.b)
o.b=!0
j.ab(o)
if(!j.c.p(0,k)){i=j.c
j.c=k
o=new D.z("color",i,k)
o.b=!0
j.ab(o)}q.n(0,j)
m.f.saX(s.f.bA("../resources/CtrlPnlEmission.png"))
m.r.saS(0,new V.N(V.bn(0.2),V.bn(0.2),V.bn(0.2)))
m.x.saS(0,new V.N(V.bn(0.8),V.bn(0.8),V.bn(0.8)))
m.r.saX(n)
m.x.saX(n)
m.z.saX(s.f.bA("../resources/CtrlPnlSpecular.png"))
q=m.z
q.bh(new A.O(!0,q.c.b,!1))
q.c7(10)
q=new M.cq()
q.a=!0
u=O.j3(u)
q.e=u
u.b0(q.gdR(),q.gdT())
q.y=q.x=q.r=q.f=null
h=X.kY(e)
g=new X.cN()
g.c=1.0471975511965976
g.d=0.1
g.e=2000
g.saJ(e)
u=g.c
if(!(Math.abs(u-1.0471975511965976)<$.y().a)){g.c=1.0471975511965976
u=new D.z("fov",u,1.0471975511965976)
u.b=!0
g.an(u)}u=g.d
if(!(Math.abs(u-0.1)<$.y().a)){g.d=0.1
u=new D.z("near",u,0.1)
u.b=!0
g.an(u)}u=g.e
if(!(Math.abs(u-2000)<$.y().a)){g.e=2000
u=new D.z("far",u,2000)
u.b=!0
g.an(u)}u=q.b
if(u!==g){if(u!=null)u.gv().F(0,q.ga5())
i=q.b
q.b=g
g.gv().n(0,q.ga5())
u=new D.z("camera",i,q.b)
u.b=!0
q.ac(u)}u=q.c
if(u!==h){if(u!=null)u.gv().F(0,q.ga5())
i=q.c
q.c=h
h.gv().n(0,q.ga5())
u=new D.z("target",i,q.c)
u.b=!0
q.ac(u)}q.scT(e)
q.scT(m)
q.e.n(0,r)
q.b.saJ(U.jG(V.al(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
u=s.d
if(u!==q){if(u!=null)u.gv().F(0,s.gbQ())
s.d=q
q.gv().n(0,s.gbQ())
s.bR()}u=s.z
if(u==null)u=s.z=D.a_()
q=u.b
u=q==null?u.b=H.b([],[{func:1,ret:-1,args:[D.S]}]):q
u.push(new F.iT(d,m))
V.mu(s)},
iT:function iT(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,T,R,O,E,Z,D,X,V,U,M,A,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.ja.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gJ:function(a){return H.bM(a)},
h:function(a){return"Instance of '"+H.e(H.bN(a))+"'"}}
J.f_.prototype={
h:function(a){return String(a)},
gJ:function(a){return a?519018:218159},
$iag:1}
J.cx.prototype={
p:function(a,b){return null==b},
h:function(a){return"null"},
gJ:function(a){return 0}}
J.cy.prototype={
gJ:function(a){return 0},
h:function(a){return String(a)}}
J.fN.prototype={}
J.bj.prototype={}
J.aK.prototype={
h:function(a){var u=a[$.ks()]
if(u==null)return this.d8(a)
return"JavaScript function for "+H.e(J.V(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.aI.prototype={
cP:function(a,b){if(!!a.fixed$length)H.t(P.X("removeAt"))
if(b<0||b>=a.length)throw H.f(P.cR(b,null))
return a.splice(b,1)[0]},
F:function(a,b){var u
if(!!a.fixed$length)H.t(P.X("remove"))
for(u=0;u<a.length;++u)if(J.G(a[u],b)){a.splice(u,1)
return!0}return!1},
E:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.f(P.aB(a))}},
k:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.c(r,u)
r[u]=t}return r.join(b)},
fi:function(a){return this.k(a,"")},
fd:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.f(P.aB(a))}throw H.f(H.eY())},
w:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
d4:function(a,b,c){var u=a.length
if(b>u)throw H.f(P.ad(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.f(P.ad(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.br(a,0)])
return H.b(a.slice(b,c),[H.br(a,0)])},
gfc:function(a){if(a.length>0)return a[0]
throw H.f(H.eY())},
gaV:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.f(H.eY())},
ce:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.f(P.aB(a))}return!1},
b1:function(a,b){if(!!a.immutable$list)H.t(P.X("sort"))
H.cW(a,0,a.length-1,b)},
K:function(a,b){var u
for(u=0;u<a.length;++u)if(J.G(a[u],b))return!0
return!1},
h:function(a){return P.j7(a,"[","]")},
gM:function(a){return new J.Y(a,a.length)},
gJ:function(a){return H.bM(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.t(P.X("set length"))
if(b<0)throw H.f(P.ad(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){if(b>=a.length||b<0)throw H.f(H.bp(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.t(P.X("indexed set"))
if(b>=a.length||b<0)throw H.f(H.bp(a,b))
a[b]=c},
$ij:1}
J.j9.prototype={}
J.Y.prototype={
gD:function(a){return this.d},
t:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.f(H.n(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bC.prototype={
eX:function(a,b){var u
if(typeof b!=="number")throw H.f(H.aY(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gaU(b)
if(this.gaU(a)===u)return 0
if(this.gaU(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaU:function(a){return a===0?1/a<0:a<0},
fO:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.f(P.X(""+a+".toInt()"))},
bw:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.f(P.X(""+a+".floor()"))},
a2:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.X(""+a+".round()"))},
cU:function(a,b){var u
if(b>20)throw H.f(P.ad(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gaU(a))return"-"+u
return u},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gJ:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
d_:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
da:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.c8(a,b)},
U:function(a,b){return(a|0)===a?a/b|0:this.c8(a,b)},
c8:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.f(P.X("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
aQ:function(a,b){var u
if(a>0)u=this.eK(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
eK:function(a,b){return b>31?0:a>>>b},
$iH:1,
$ia6:1}
J.cw.prototype={$ix:1}
J.cv.prototype={}
J.aJ.prototype={
bo:function(a,b){if(b<0)throw H.f(H.bp(a,b))
if(b>=a.length)H.t(H.bp(a,b))
return a.charCodeAt(b)},
ao:function(a,b){if(b>=a.length)throw H.f(H.bp(a,b))
return a.charCodeAt(b)},
I:function(a,b){if(typeof b!=="string")throw H.f(P.jC(b,null,null))
return a+b},
b2:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
aM:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.f(P.cR(b,null))
if(b>c)throw H.f(P.cR(b,null))
if(c>a.length)throw H.f(P.cR(c,null))
return a.substring(b,c)},
aa:function(a,b){return this.aM(a,b,null)},
fR:function(a){return a.toLowerCase()},
P:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.C)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
a_:function(a,b){var u=b-a.length
if(u<=0)return a
return this.P(" ",u)+a},
h:function(a){return a},
gJ:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$iq:1}
H.l.prototype={
gl:function(a){return this.a.length},
i:function(a,b){return C.b.bo(this.a,b)},
$ap:function(){return[P.x]},
$aj:function(){return[P.x]}}
H.eC.prototype={}
H.cD.prototype={
gM:function(a){return new H.bE(this,this.gl(this))},
b_:function(a,b){return this.d7(0,b)}}
H.bE.prototype={
gD:function(a){return this.d},
t:function(){var u,t=this,s=t.a,r=J.jn(s),q=r.gl(s)
if(t.b!==q)throw H.f(P.aB(s))
u=t.c
if(u>=q){t.d=null
return!1}t.d=r.w(s,u);++t.c
return!0}}
H.fc.prototype={
gM:function(a){return new H.fd(J.b0(this.a),this.b)},
gl:function(a){return J.b1(this.a)},
w:function(a,b){return this.b.$1(J.j_(this.a,b))},
$aj:function(a,b){return[b]}}
H.fd.prototype={
t:function(){var u=this,t=u.b
if(t.t()){u.a=u.c.$1(t.gD(t))
return!0}u.a=null
return!1},
gD:function(a){return this.a}}
H.fe.prototype={
gl:function(a){return J.b1(this.a)},
w:function(a,b){return this.b.$1(J.j_(this.a,b))},
$acD:function(a,b){return[b]},
$aj:function(a,b){return[b]}}
H.bX.prototype={
gM:function(a){return new H.i7(J.b0(this.a),this.b)}}
H.i7.prototype={
t:function(){var u,t
for(u=this.a,t=this.b;u.t();)if(t.$1(u.gD(u)))return!0
return!1},
gD:function(a){var u=this.a
return u.gD(u)}}
H.cs.prototype={}
H.hN.prototype={}
H.da.prototype={}
H.hB.prototype={
Z:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.fJ.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.f1.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.hM.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.iY.prototype={
$1:function(a){if(!!J.K(a).$ib7)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:6}
H.dN.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bv.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
gfT:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hm.prototype={}
H.he.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.e9(u)+"'"}}
H.bt.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bt))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gJ:function(a){var u,t=this.c
if(t==null)u=H.bM(this.a)
else u=typeof t!=="object"?J.ce(t):H.bM(t)
return(u^H.bM(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.bN(u))+"'")}}
H.el.prototype={
h:function(a){return this.a}}
H.fZ.prototype={
h:function(a){return"RuntimeError: "+H.e(this.a)}}
H.I.prototype={
gl:function(a){return this.a},
gV:function(a){return new H.cB(this,[H.br(this,0)])},
ci:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.bZ(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.bZ(t,b)}else return s.fg(b)},
fg:function(a){var u=this.d
if(u==null)return!1
return this.bx(this.b9(u,J.ce(a)&0x3ffffff),a)>=0},
i:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.aP(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.aP(r,b)
s=t==null?null:t.b
return s}else return q.fh(b)},
fh:function(a){var u,t,s=this.d
if(s==null)return
u=this.b9(s,J.ce(a)&0x3ffffff)
t=this.bx(u,a)
if(t<0)return
return u[t].b},
m:function(a,b,c){var u,t,s,r,q,p,o=this
if(typeof b==="string"){u=o.b
o.bU(u==null?o.b=o.bc():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.bU(t==null?o.c=o.bc():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bc()
r=J.ce(b)&0x3ffffff
q=o.b9(s,r)
if(q==null)o.bi(s,r,[o.bd(b,c)])
else{p=o.bx(q,b)
if(p>=0)q[p].b=c
else q.push(o.bd(b,c))}}},
E:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.f(P.aB(u))
t=t.c}},
bU:function(a,b,c){var u=this.aP(a,b)
if(u==null)this.bi(a,b,this.bd(b,c))
else u.b=c},
dH:function(){this.r=this.r+1&67108863},
bd:function(a,b){var u,t=this,s=new H.f5(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.dH()
return s},
bx:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.G(a[t].a,b))return t
return-1},
h:function(a){return P.jO(this)},
aP:function(a,b){return a[b]},
b9:function(a,b){return a[b]},
bi:function(a,b,c){a[b]=c},
dE:function(a,b){delete a[b]},
bZ:function(a,b){return this.aP(a,b)!=null},
bc:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bi(t,u,t)
this.dE(t,u)
return t}}
H.f5.prototype={}
H.cB.prototype={
gl:function(a){return this.a.a},
gM:function(a){var u=this.a,t=new H.f6(u,u.r)
t.c=u.e
return t}}
H.f6.prototype={
gD:function(a){return this.d},
t:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.aB(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.iP.prototype={
$1:function(a){return this.a(a)},
$S:6}
H.iQ.prototype={
$2:function(a,b){return this.a(a,b)}}
H.iR.prototype={
$1:function(a){return this.a(a)}}
H.f0.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.bJ.prototype={}
H.cH.prototype={
gl:function(a){return a.length},
$iu:1,
$au:function(){}}
H.bI.prototype={
i:function(a,b){H.aW(b,a,a.length)
return a[b]},
$ap:function(){return[P.H]},
$ij:1,
$aj:function(){return[P.H]}}
H.cI.prototype={
$ap:function(){return[P.x]},
$ij:1,
$aj:function(){return[P.x]}}
H.fA.prototype={
i:function(a,b){H.aW(b,a,a.length)
return a[b]}}
H.fB.prototype={
i:function(a,b){H.aW(b,a,a.length)
return a[b]}}
H.fC.prototype={
i:function(a,b){H.aW(b,a,a.length)
return a[b]}}
H.fD.prototype={
i:function(a,b){H.aW(b,a,a.length)
return a[b]}}
H.fE.prototype={
i:function(a,b){H.aW(b,a,a.length)
return a[b]}}
H.cJ.prototype={
gl:function(a){return a.length},
i:function(a,b){H.aW(b,a,a.length)
return a[b]}}
H.fF.prototype={
gl:function(a){return a.length},
i:function(a,b){H.aW(b,a,a.length)
return a[b]}}
H.c_.prototype={}
H.c0.prototype={}
H.c1.prototype={}
H.c2.prototype={}
P.i9.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:14}
P.i8.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.ia.prototype={
$0:function(){this.a.$0()}}
P.ib.prototype={
$0:function(){this.a.$0()}}
P.dT.prototype={
dm:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bo(new P.iC(this,b),0),a)
else throw H.f(P.X("`setTimeout()` not found."))},
dn:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bo(new P.iB(this,a,Date.now(),b),0),a)
else throw H.f(P.X("Periodic timer."))},
$id4:1}
P.iC.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.iB.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.da(u,q)}s.c=r
t.d.$1(s)}}
P.dd.prototype={}
P.d_.prototype={}
P.hh.prototype={}
P.d4.prototype={}
P.iF.prototype={}
P.iK.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.cM():s
s=this.b
if(s==null)throw H.f(t)
u=H.f(t)
u.stack=s.h(0)
throw u}}
P.ip.prototype={
fJ:function(a){var u,t,s,r=null
try{if(C.e===$.a5){a.$0()
return}P.lY(r,r,this,a)}catch(s){u=H.at(s)
t=H.jr(s)
P.kg(r,r,this,u,t)}},
fK:function(a,b){var u,t,s,r=null
try{if(C.e===$.a5){a.$1(b)
return}P.lZ(r,r,this,a,b)}catch(s){u=H.at(s)
t=H.jr(s)
P.kg(r,r,this,u,t)}},
fL:function(a,b){return this.fK(a,b,null)},
eT:function(a){return new P.iq(this,a)},
cf:function(a,b){return new P.ir(this,a,b)}}
P.iq.prototype={
$0:function(){return this.a.fJ(this.b)}}
P.ir.prototype={
$1:function(a){return this.a.fL(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.il.prototype={
gM:function(a){var u=new P.du(this,this.r)
u.c=this.e
return u},
gl:function(a){return this.a},
K:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.dz(b)
return t}},
dz:function(a){var u=this.d
if(u==null)return!1
return this.b8(this.c1(u,a),a)>=0},
n:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.bV(u==null?s.b=P.jj():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.bV(t==null?s.c=P.jj():t,b)}else return s.dr(0,b)},
dr:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.jj()
u=s.bX(b)
t=r[u]
if(t==null)r[u]=[s.b5(b)]
else{if(s.b8(t,b)>=0)return!1
t.push(s.b5(b))}return!0},
F:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.ev(this.c,b)
else return this.eu(0,b)},
eu:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.c1(r,b)
t=s.b8(u,b)
if(t<0)return!1
s.c9(u.splice(t,1)[0])
return!0},
bV:function(a,b){if(a[b]!=null)return!1
a[b]=this.b5(b)
return!0},
ev:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.c9(u)
delete a[b]
return!0},
bW:function(){this.r=1073741823&this.r+1},
b5:function(a){var u,t=this,s=new P.im(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.bW()
return s},
c9:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.bW()},
bX:function(a){return J.ce(a)&1073741823},
c1:function(a,b){return a[this.bX(b)]},
b8:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.G(a[t].a,b))return t
return-1}}
P.im.prototype={}
P.du.prototype={
gD:function(a){return this.d},
t:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.aB(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.f7.prototype={$ij:1}
P.p.prototype={
gM:function(a){return new H.bE(a,this.gl(a))},
w:function(a,b){return this.i(a,b)},
fQ:function(a,b){var u,t,s=this,r=H.b([],[H.mg(s,a,"p",0)])
C.a.sl(r,s.gl(a))
for(u=0;u<s.gl(a);++u){t=s.i(a,u)
if(u>=r.length)return H.c(r,u)
r[u]=t}return r},
fP:function(a){return this.fQ(a,!0)},
h:function(a){return P.j7(a,"[","]")}}
P.fa.prototype={}
P.fb.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:7}
P.aj.prototype={
E:function(a,b){var u,t
for(u=J.b0(this.gV(a));u.t();){t=u.gD(u)
b.$2(t,this.i(a,t))}},
gl:function(a){return J.b1(this.gV(a))},
h:function(a){return P.jO(a)}}
P.it.prototype={
a6:function(a,b){var u
for(u=J.b0(b);u.t();)this.n(0,u.gD(u))},
h:function(a){return P.j7(this,"{","}")},
w:function(a,b){var u,t,s
P.jX(b,"index")
for(u=P.lx(this,this.r),t=0;u.t();){s=u.d
if(b===t)return s;++t}throw H.f(P.C(b,this,"index",null,t))},
$ij:1}
P.dv.prototype={}
P.en.prototype={}
P.ep.prototype={}
P.eE.prototype={}
P.eW.prototype={
h:function(a){return this.a}}
P.eV.prototype={
dB:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.an("")
if(r>b)q.a+=C.b.aM(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.kL(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.hQ.prototype={}
P.hR.prototype={
eY:function(a){var u,t,s=P.jY(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.iD(u)
if(t.dG(a,0,s)!==s)t.ca(C.b.bo(a,s-1),0)
return new Uint8Array(u.subarray(0,H.lA(0,t.b,u.length)))}}
P.iD.prototype={
ca:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
dG:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.bo(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.ao(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.ca(r,C.b.ao(a,p)))s=p}else if(r<=2047){q=n.b
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
P.ag.prototype={}
P.aC.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.aC&&this.a===b.a&&!0},
gJ:function(a){var u=this.a
return(u^C.d.aQ(u,30))&1073741823},
h:function(a){var u=this,t=P.kU(H.ld(u)),s=P.cm(H.lb(u)),r=P.cm(H.l7(u)),q=P.cm(H.l8(u)),p=P.cm(H.la(u)),o=P.cm(H.lc(u)),n=P.kV(H.l9(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.H.prototype={}
P.aD.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.aD&&this.a===b.a},
gJ:function(a){return C.d.gJ(this.a)},
h:function(a){var u,t,s,r=new P.eB(),q=this.a
if(q<0)return"-"+new P.aD(0-q).h(0)
u=r.$1(C.d.U(q,6e7)%60)
t=r.$1(C.d.U(q,1e6)%60)
s=new P.eA().$1(q%1e6)
return""+C.d.U(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
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
P.b7.prototype={}
P.cM.prototype={
h:function(a){return"Throw of null."}}
P.a2.prototype={
gb7:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gb6:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gb7()+o+u
if(!q.a)return t
s=q.gb6()
r=P.j6(q.b)
return t+s+": "+r}}
P.bf.prototype={
gb7:function(){return"RangeError"},
gb6:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.eX.prototype={
gb7:function(){return"RangeError"},
gb6:function(){var u,t=this.b
if(typeof t!=="number")return t.ay()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gl:function(a){return this.f}}
P.hO.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.hL.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.bP.prototype={
h:function(a){return"Bad state: "+this.a}}
P.eo.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.j6(u)+"."}}
P.fM.prototype={
h:function(a){return"Out of Memory"},
$ib7:1}
P.cY.prototype={
h:function(a){return"Stack Overflow"},
$ib7:1}
P.eu.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dl.prototype={
h:function(a){return"Exception: "+this.a}}
P.eP.prototype={
h:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.b.aM(s,0,75)+"...":s
return t+"\n"+r}}
P.eR.prototype={}
P.x.prototype={}
P.j.prototype={
b_:function(a,b){return new H.bX(this,b,[H.jq(this,"j",0)])},
gl:function(a){var u,t=this.gM(this)
for(u=0;t.t();)++u
return u},
gal:function(a){var u,t=this.gM(this)
if(!t.t())throw H.f(H.eY())
u=t.gD(t)
if(t.t())throw H.f(H.l_())
return u},
w:function(a,b){var u,t,s
P.jX(b,"index")
for(u=this.gM(this),t=0;u.t();){s=u.gD(u)
if(b===t)return s;++t}throw H.f(P.C(b,this,"index",null,t))},
h:function(a){return P.kZ(this,"(",")")}}
P.eZ.prototype={}
P.a9.prototype={$ij:1}
P.cE.prototype={}
P.aN.prototype={
gJ:function(a){return P.Q.prototype.gJ.call(this,this)},
h:function(a){return"null"}}
P.a6.prototype={}
P.Q.prototype={constructor:P.Q,$iQ:1,
p:function(a,b){return this===b},
gJ:function(a){return H.bM(this)},
h:function(a){return"Instance of '"+H.e(H.bN(this))+"'"},
toString:function(){return this.h(this)}}
P.q.prototype={}
P.an.prototype={
gl:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.k.prototype={}
W.eb.prototype={
gl:function(a){return a.length}}
W.ec.prototype={
h:function(a){return String(a)}}
W.ed.prototype={
h:function(a){return String(a)}}
W.cg.prototype={}
W.b3.prototype={$ib3:1}
W.b4.prototype={
bH:function(a,b,c){if(c!=null)return a.getContext(b,P.m7(c))
return a.getContext(b)},
cZ:function(a,b){return this.bH(a,b,null)},
$ib4:1}
W.az.prototype={
gl:function(a){return a.length}}
W.eq.prototype={
gl:function(a){return a.length}}
W.A.prototype={$iA:1}
W.bw.prototype={
gl:function(a){return a.length}}
W.er.prototype={}
W.Z.prototype={}
W.a8.prototype={}
W.es.prototype={
gl:function(a){return a.length}}
W.et.prototype={
gl:function(a){return a.length}}
W.ew.prototype={
gl:function(a){return a.length}}
W.a3.prototype={$ia3:1}
W.ex.prototype={
h:function(a){return String(a)}}
W.co.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.C(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iu:1,
$au:function(){return[[P.ae,P.a6]]},
$ap:function(){return[[P.ae,P.a6]]},
$ij:1,
$aj:function(){return[[P.ae,P.a6]]}}
W.cp.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gax(a))+" x "+H.e(this.gav(a))},
p:function(a,b){var u
if(b==null)return!1
u=J.K(b)
if(!u.$iae)return!1
return a.left===u.gcD(b)&&a.top===u.gcW(b)&&this.gax(a)===u.gax(b)&&this.gav(a)===u.gav(b)},
gJ:function(a){return W.kc(C.c.gJ(a.left),C.c.gJ(a.top),C.c.gJ(this.gax(a)),C.c.gJ(this.gav(a)))},
gav:function(a){return a.height},
gcD:function(a){return a.left},
gcW:function(a){return a.top},
gax:function(a){return a.width},
$iae:1,
$aae:function(){return[P.a6]}}
W.ey.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.C(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iu:1,
$au:function(){return[P.q]},
$ap:function(){return[P.q]},
$ij:1,
$aj:function(){return[P.q]}}
W.ez.prototype={
gl:function(a){return a.length}}
W.id.prototype={
gl:function(a){return this.b.length},
i:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
n:function(a,b){this.a.appendChild(b)
return b},
gM:function(a){var u=this.fP(this)
return new J.Y(u,u.length)},
$ap:function(){return[W.J]},
$aj:function(){return[W.J]}}
W.J.prototype={
geS:function(a){return new W.ig(a)},
gcg:function(a){return new W.id(a,a.children)},
h:function(a){return a.localName},
Y:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.jJ
if(u==null){u=H.b([],[W.am])
t=new W.cL(u)
u.push(W.kb(null))
u.push(W.kd())
$.jJ=t
d=t}else d=u
u=$.jI
if(u==null){u=new W.dZ(d)
$.jI=u
c=u}else{u.a=d
c=u}}if($.ai==null){u=document
t=u.implementation.createHTMLDocument("")
$.ai=t
$.j5=t.createRange()
s=$.ai.createElement("base")
s.href=u.baseURI
$.ai.head.appendChild(s)}u=$.ai
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.ai
if(!!this.$ib3)r=u.body
else{r=u.createElement(a.tagName)
$.ai.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.a.K(C.L,a.tagName)){$.j5.selectNodeContents(r)
q=$.j5.createContextualFragment(b)}else{r.innerHTML=b
q=$.ai.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.ai.body
if(r==null?u!=null:r!==u)J.jA(r)
c.bI(q)
document.adoptNode(q)
return q},
f_:function(a,b,c){return this.Y(a,b,c,null)},
d1:function(a,b){a.textContent=null
a.appendChild(this.Y(a,b,null,null))},
$iJ:1,
gcS:function(a){return a.tagName}}
W.eD.prototype={
$1:function(a){return!!J.K(a).$iJ}}
W.h.prototype={$ih:1}
W.d.prototype={
eL:function(a,b,c,d){if(c!=null)this.ds(a,b,c,!1)},
ds:function(a,b,c,d){return a.addEventListener(b,H.bo(c,1),!1)}}
W.aF.prototype={$iaF:1}
W.eJ.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.C(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aF]},
$ap:function(){return[W.aF]},
$ij:1,
$aj:function(){return[W.aF]}}
W.eK.prototype={
gl:function(a){return a.length}}
W.eO.prototype={
gl:function(a){return a.length}}
W.aG.prototype={$iaG:1}
W.eU.prototype={
gl:function(a){return a.length}}
W.by.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.C(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.D]},
$ap:function(){return[W.D]},
$ij:1,
$aj:function(){return[W.D]}}
W.aH.prototype={$iaH:1,
gcj:function(a){return a.data}}
W.bz.prototype={$ibz:1}
W.bb.prototype={$ibb:1}
W.f8.prototype={
h:function(a){return String(a)}}
W.fs.prototype={
gl:function(a){return a.length}}
W.ft.prototype={
i:function(a,b){return P.as(a.get(b))},
E:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.as(u.value[1]))}},
gV:function(a){var u=H.b([],[P.q])
this.E(a,new W.fu(u))
return u},
gl:function(a){return a.size}}
W.fu.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fv.prototype={
i:function(a,b){return P.as(a.get(b))},
E:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.as(u.value[1]))}},
gV:function(a){var u=H.b([],[P.q])
this.E(a,new W.fw(u))
return u},
gl:function(a){return a.size}}
W.fw.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aM.prototype={$iaM:1}
W.fx.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.C(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aM]},
$ap:function(){return[W.aM]},
$ij:1,
$aj:function(){return[W.aM]}}
W.ab.prototype={$iab:1}
W.R.prototype={
gal:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.f(P.k0("No elements"))
if(t>1)throw H.f(P.k0("More than one element"))
return u.firstChild},
a6:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
gM:function(a){var u=this.a.childNodes
return new W.ct(u,u.length)},
gl:function(a){return this.a.childNodes.length},
i:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
$ap:function(){return[W.D]},
$aj:function(){return[W.D]}}
W.D.prototype={
fE:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
h:function(a){var u=a.nodeValue
return u==null?this.d6(a):u},
$iD:1}
W.cK.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.C(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.D]},
$ap:function(){return[W.D]},
$ij:1,
$aj:function(){return[W.D]}}
W.aO.prototype={$iaO:1,
gl:function(a){return a.length}}
W.fP.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.C(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aO]},
$ap:function(){return[W.aO]},
$ij:1,
$aj:function(){return[W.aO]}}
W.fX.prototype={
i:function(a,b){return P.as(a.get(b))},
E:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.as(u.value[1]))}},
gV:function(a){var u=H.b([],[P.q])
this.E(a,new W.fY(u))
return u},
gl:function(a){return a.size}}
W.fY.prototype={
$2:function(a,b){return this.a.push(a)}}
W.h_.prototype={
gl:function(a){return a.length}}
W.aP.prototype={$iaP:1}
W.ha.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.C(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aP]},
$ap:function(){return[W.aP]},
$ij:1,
$aj:function(){return[W.aP]}}
W.aQ.prototype={$iaQ:1}
W.hb.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.C(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aQ]},
$ap:function(){return[W.aQ]},
$ij:1,
$aj:function(){return[W.aQ]}}
W.aR.prototype={$iaR:1,
gl:function(a){return a.length}}
W.hf.prototype={
i:function(a,b){return a.getItem(b)},
E:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gV:function(a){var u=H.b([],[P.q])
this.E(a,new W.hg(u))
return u},
gl:function(a){return a.length}}
W.hg.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ao.prototype={$iao:1}
W.d0.prototype={
Y:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.b3(a,b,c,d)
u=W.kW("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.R(t).a6(0,new W.R(u))
return t}}
W.hj.prototype={
Y:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.b3(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.t.Y(u.createElement("table"),b,c,d)
u.toString
u=new W.R(u)
s=u.gal(u)
s.toString
u=new W.R(s)
r=u.gal(u)
t.toString
r.toString
new W.R(t).a6(0,new W.R(r))
return t}}
W.hk.prototype={
Y:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.b3(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.t.Y(u.createElement("table"),b,c,d)
u.toString
u=new W.R(u)
s=u.gal(u)
t.toString
s.toString
new W.R(t).a6(0,new W.R(s))
return t}}
W.bQ.prototype={$ibQ:1}
W.aS.prototype={$iaS:1}
W.ap.prototype={$iap:1}
W.hn.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.C(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.ap]},
$ap:function(){return[W.ap]},
$ij:1,
$aj:function(){return[W.ap]}}
W.ho.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.C(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aS]},
$ap:function(){return[W.aS]},
$ij:1,
$aj:function(){return[W.aS]}}
W.hu.prototype={
gl:function(a){return a.length}}
W.aT.prototype={$iaT:1}
W.bg.prototype={$ibg:1}
W.hy.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.C(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aT]},
$ap:function(){return[W.aT]},
$ij:1,
$aj:function(){return[W.aT]}}
W.hz.prototype={
gl:function(a){return a.length}}
W.aU.prototype={}
W.hP.prototype={
h:function(a){return String(a)}}
W.i5.prototype={
gl:function(a){return a.length}}
W.aV.prototype={
gf2:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.X("deltaY is not supported"))},
gf1:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.X("deltaX is not supported"))},
$iaV:1}
W.bY.prototype={
ex:function(a,b){return a.requestAnimationFrame(H.bo(b,1))},
dF:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.ie.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.C(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.A]},
$ap:function(){return[W.A]},
$ij:1,
$aj:function(){return[W.A]}}
W.dg.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
p:function(a,b){var u
if(b==null)return!1
u=J.K(b)
if(!u.$iae)return!1
return a.left===u.gcD(b)&&a.top===u.gcW(b)&&a.width===u.gax(b)&&a.height===u.gav(b)},
gJ:function(a){return W.kc(C.c.gJ(a.left),C.c.gJ(a.top),C.c.gJ(a.width),C.c.gJ(a.height))},
gav:function(a){return a.height},
gax:function(a){return a.width}}
W.ij.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.C(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aG]},
$ap:function(){return[W.aG]},
$ij:1,
$aj:function(){return[W.aG]}}
W.dA.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.C(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.D]},
$ap:function(){return[W.D]},
$ij:1,
$aj:function(){return[W.D]}}
W.iw.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.C(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aR]},
$ap:function(){return[W.aR]},
$ij:1,
$aj:function(){return[W.aR]}}
W.ix.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.C(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.ao]},
$ap:function(){return[W.ao]},
$ij:1,
$aj:function(){return[W.ao]}}
W.ic.prototype={
E:function(a,b){var u,t,s,r,q
for(u=this.gV(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.n)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gV:function(a){var u,t,s,r=this.a.attributes,q=H.b([],[P.q])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.c(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q}}
W.ig.prototype={
i:function(a,b){return this.a.getAttribute(b)},
gl:function(a){return this.gV(this).length}}
W.ih.prototype={}
W.ii.prototype={
$1:function(a){return this.a.$1(a)}}
W.bZ.prototype={
dh:function(a){var u
if($.dp.a===0){for(u=0;u<262;++u)$.dp.m(0,C.K[u],W.mi())
for(u=0;u<12;++u)$.dp.m(0,C.k[u],W.mj())}},
as:function(a){return $.kG().K(0,W.bx(a))},
a7:function(a,b,c){var u=$.dp.i(0,H.e(W.bx(a))+"::"+b)
if(u==null)u=$.dp.i(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$iam:1}
W.B.prototype={
gM:function(a){return new W.ct(a,this.gl(a))}}
W.cL.prototype={
as:function(a){return C.a.ce(this.a,new W.fH(a))},
a7:function(a,b,c){return C.a.ce(this.a,new W.fG(a,b,c))},
$iam:1}
W.fH.prototype={
$1:function(a){return a.as(this.a)}}
W.fG.prototype={
$1:function(a){return a.a7(this.a,this.b,this.c)}}
W.dI.prototype={
dl:function(a,b,c,d){var u,t,s
this.a.a6(0,c)
u=b.b_(0,new W.iu())
t=b.b_(0,new W.iv())
this.b.a6(0,u)
s=this.c
s.a6(0,C.M)
s.a6(0,t)},
as:function(a){return this.a.K(0,W.bx(a))},
a7:function(a,b,c){var u=this,t=W.bx(a),s=u.c
if(s.K(0,H.e(t)+"::"+b))return u.d.eN(c)
else if(s.K(0,"*::"+b))return u.d.eN(c)
else{s=u.b
if(s.K(0,H.e(t)+"::"+b))return!0
else if(s.K(0,"*::"+b))return!0
else if(s.K(0,H.e(t)+"::*"))return!0
else if(s.K(0,"*::*"))return!0}return!1},
$iam:1}
W.iu.prototype={
$1:function(a){return!C.a.K(C.k,a)}}
W.iv.prototype={
$1:function(a){return C.a.K(C.k,a)}}
W.iz.prototype={
a7:function(a,b,c){if(this.d9(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.K(0,b)
return!1}}
W.iA.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)}}
W.iy.prototype={
as:function(a){var u=J.K(a)
if(!!u.$ibO)return!1
u=!!u.$ii
if(u&&W.bx(a)==="foreignObject")return!1
if(u)return!0
return!1},
a7:function(a,b,c){if(b==="is"||C.b.b2(b,"on"))return!1
return this.as(a)},
$iam:1}
W.ct.prototype={
t:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.ea(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gD:function(a){return this.d}}
W.am.prototype={}
W.is.prototype={}
W.dZ.prototype={
bI:function(a){new W.iE(this).$2(a,null)},
aC:function(a,b){if(b==null)J.jA(a)
else b.removeChild(a)},
eC:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.kK(a)
n=o.a.getAttribute("is")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=u?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.at(r)}t="element unprintable"
try{t=J.V(a)}catch(r){H.at(r)}try{s=W.bx(a)
this.eB(a,b,p,t,s,o,n)}catch(r){if(H.at(r) instanceof P.a2)throw r
else{this.aC(a,b)
window
q="Removing corrupted element "+H.e(t)
if(typeof console!="undefined")window.console.warn(q)}}},
eB:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=this
if(c){p.aC(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!p.a.as(a)){p.aC(a,b)
window
u="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!p.a.a7(a,"is",g)){p.aC(a,b)
window
u="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gV(f)
t=H.b(u.slice(0),[H.br(u,0)])
for(s=f.gV(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.c(t,s)
r=t[s]
if(!p.a.a7(a,J.kM(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.e(e)+" "+r+'="'+H.e(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.K(a).$ibQ)p.bI(a.content)}}
W.iE.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.eC(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aC(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.at(s)
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
W.c3.prototype={}
W.c4.prototype={}
W.dJ.prototype={}
W.dK.prototype={}
W.dO.prototype={}
W.dR.prototype={}
W.dS.prototype={}
W.c5.prototype={}
W.c6.prototype={}
W.dU.prototype={}
W.dV.prototype={}
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
P.dY.prototype={$iaH:1,
gcj:function(a){return this.a}}
P.iL.prototype={
$2:function(a,b){this.a[a]=b},
$S:7}
P.eL.prototype={
gba:function(){var u=this.b,t=H.jq(u,"p",0)
return new H.fc(new H.bX(u,new P.eM(),[t]),new P.eN(),[t,W.J])},
n:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.b1(this.gba().a)},
i:function(a,b){var u=this.gba()
return u.b.$1(J.j_(u.a,b))},
gM:function(a){var u=P.jN(this.gba(),!1,W.J)
return new J.Y(u,u.length)},
$ap:function(){return[W.J]},
$aj:function(){return[W.J]}}
P.eM.prototype={
$1:function(a){return!!J.K(a).$iJ}}
P.eN.prototype={
$1:function(a){return H.o(a,"$iJ")}}
P.io.prototype={}
P.ae.prototype={}
P.bc.prototype={$ibc:1}
P.f3.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.C(b,a,null,null,null))
return a.getItem(b)},
w:function(a,b){return this.i(a,b)},
$ap:function(){return[P.bc]},
$ij:1,
$aj:function(){return[P.bc]}}
P.bd.prototype={$ibd:1}
P.fK.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.C(b,a,null,null,null))
return a.getItem(b)},
w:function(a,b){return this.i(a,b)},
$ap:function(){return[P.bd]},
$ij:1,
$aj:function(){return[P.bd]}}
P.fR.prototype={
gl:function(a){return a.length}}
P.bO.prototype={$ibO:1}
P.hi.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.C(b,a,null,null,null))
return a.getItem(b)},
w:function(a,b){return this.i(a,b)},
$ap:function(){return[P.q]},
$ij:1,
$aj:function(){return[P.q]}}
P.i.prototype={
gcg:function(a){return new P.eL(a,new W.R(a))},
Y:function(a,b,c,d){var u,t,s,r,q,p=H.b([],[W.am])
p.push(W.kb(null))
p.push(W.kd())
p.push(new W.iy())
c=new W.dZ(new W.cL(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.m).f_(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.R(s)
q=p.gal(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ii:1}
P.bh.prototype={$ibh:1}
P.hA.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.C(b,a,null,null,null))
return a.getItem(b)},
w:function(a,b){return this.i(a,b)},
$ap:function(){return[P.bh]},
$ij:1,
$aj:function(){return[P.bh]}}
P.ds.prototype={}
P.dt.prototype={}
P.dD.prototype={}
P.dE.prototype={}
P.dP.prototype={}
P.dQ.prototype={}
P.dW.prototype={}
P.dX.prototype={}
P.ef.prototype={
gl:function(a){return a.length}}
P.eg.prototype={
i:function(a,b){return P.as(a.get(b))},
E:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.as(u.value[1]))}},
gV:function(a){var u=H.b([],[P.q])
this.E(a,new P.eh(u))
return u},
gl:function(a){return a.size}}
P.eh.prototype={
$2:function(a,b){return this.a.push(a)}}
P.ei.prototype={
gl:function(a){return a.length}}
P.b2.prototype={}
P.fL.prototype={
gl:function(a){return a.length}}
P.de.prototype={}
P.cT.prototype={
fM:function(a,b,c,d,e,f,g){var u,t=J.K(g)
if(!!t.$iaH)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.m8(g))
return}if(!!t.$ibz)t=!0
else t=!1
if(t){a.texImage2D(b,c,d,e,f,g)
return}throw H.f(P.kN("Incorrect number or type of arguments"))}}
P.hd.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.C(b,a,null,null,null))
return P.as(a.item(b))},
w:function(a,b){return this.i(a,b)},
$ap:function(){return[[P.cE,,,]]},
$ij:1,
$aj:function(){return[[P.cE,,,]]}}
P.dL.prototype={}
P.dM.prototype={}
T.ah.prototype={
ah:function(a,b){return!0},
h:function(a){return"all"}}
T.cu.prototype={
ah:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)if(u[s].ah(0,b))return!0
return!1},
h:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.n)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.h(0)}return s}}
T.aL.prototype={}
T.T.prototype={
ah:function(a,b){return!this.d5(0,b)},
h:function(a){return"!["+this.bM(0)+"]"}}
T.fS.prototype={
ah:function(a,b){return this.a<=b&&this.b>=b},
h:function(a){var u=H.jd(this.a),t=H.jd(this.b)
return u+".."+t}}
T.h0.prototype={
de:function(a){var u,t
if(a.a.length<=0)throw H.f(P.r("May not create a Set with zero characters."))
u=new H.I([P.x,P.ag])
for(t=new H.bE(a,a.gl(a));t.t();)u.m(0,t.d,!0)
this.a=u},
ah:function(a,b){return this.a.ci(0,b)},
h:function(a){var u=this.a
return P.je(new H.cB(u,[H.br(u,0)]))}}
R.cZ.prototype={
k:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new R.d7(this.a.j(0,b))
r.a=H.b([],[T.aL])
r.c=!1
this.c.push(r)
return r},
fb:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
if(r.ah(0,a))return r}return},
h:function(a){return this.b}}
R.d5.prototype={
h:function(a){var u=H.jw(this.b,"\n","\\n"),t=H.jw(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
R.d6.prototype={
aj:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.n)(c),++t){s=c[t]
this.c.m(0,s,b)}},
h:function(a){return this.b}}
R.hv.prototype={
j:function(a,b){var u=this.a.i(0,b)
if(u==null){u=new R.cZ(this,b)
u.c=H.b([],[R.d7])
this.a.m(0,b,u)}return u},
H:function(a){var u,t=this.b.i(0,a)
if(t==null){t=new R.d6(a)
u=P.q
t.c=new H.I([u,u])
this.b.m(0,a,t)}return t},
cV:function(a){var u,t,s,r,q,p,o,n,m=H.b([],[R.d5]),l=this.c,k=[P.x],j=H.b([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)m.push(t)
return m}r=C.b.ao(a,s)
q=l.fb(r)
if(q==null){if(t==null){j.push(r)
p=P.je(j)
throw H.f(P.r("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}m.push(t)
s=t.c+1
j=H.b([],k)
l=this.c
t=null}else{if(!q.c)j.push(r)
l=q.b
if(l.d!=null){p=P.je(j)
o=l.d
n=o.c.i(0,p)
t=new R.d5(n==null?o.b:n,p,s)}++s}}}}
R.d7.prototype={
h:function(a){return this.b.b+": "+this.bM(0)}}
O.b5.prototype={
bP:function(a){this.a=H.b([],[a])
this.c=this.b=null},
bJ:function(a,b,c){this.b=b
this.c=a},
b0:function(a,b){return this.bJ(a,null,b)},
ei:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
dI:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gM:function(a){var u=this.a
return new J.Y(u,u.length)},
w:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
n:function(a,b){var u,t,s=this,r=[H.jq(s,"b5",0)]
if(s.ei(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.dI(t,H.b([b],r))}},
$ij:1}
O.bG.prototype={
gl:function(a){return this.a.length},
gv:function(){var u=this.b
return u==null?this.b=D.a_():u},
am:function(){var u=this.b
if(u!=null)u.N(null)},
gR:function(a){var u=this.a
if(u.length>0)return C.a.gaV(u)
else return V.jc()},
cN:function(a){var u=this.a
if(a==null)u.push(V.jc())
else u.push(a)
this.am()},
bD:function(){var u=this.a
if(u.length>0){u.pop()
this.am()}}}
E.ej.prototype={}
E.aE.prototype={
sbK:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gv().F(0,s.gcI())
u=s.c
if(u!=null)u.gv().n(0,s.gcI())
t=new D.z("shape",r,s.c)
t.b=!0
s.ai(t)}},
saJ:function(a){var u,t,s=this
if(!J.G(s.r,a)){u=s.r
if(u!=null)u.gv().F(0,s.gcG())
if(a!=null)a.gv().n(0,s.gcG())
s.r=a
t=new D.z("mover",u,a)
t.b=!0
s.ai(t)}},
aZ:function(a,b){var u,t,s,r,q,p,o,n=this,m=n.r
if(m!=null){u=m.r
t=b.e
if(u<t){m.r=t
u=m.y
if(u!=null)++u.d
m.scX(m.a+m.d*b.y)
m.scL(0,m.b+m.e*b.y)
m.scR(m.c+m.f*b.y)
u=m.c
s=Math.cos(u)
r=Math.sin(u)
u=V.al(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)
t=m.b
s=Math.cos(t)
r=Math.sin(t)
u=u.P(0,V.al(s,0,-r,0,0,1,0,0,r,0,s,0,0,0,0,1))
t=m.a
s=Math.cos(t)
r=Math.sin(t)
m.x=u.P(0,V.al(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1))
u=m.y
if(u!=null)u.a8(0)}q=m.x}else q=null
if(!J.G(q,n.x)){p=n.x
n.x=q
o=new D.z("matrix",p,q)
o.b=!0
n.ai(o)}for(m=n.y.a,m=new J.Y(m,m.length);m.t();)m.d.aZ(0,b)},
aw:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)s.a.push(s.gR(s))
else s.a.push(r.P(0,s.gR(s)))
s.am()
a.cO(t.f)
s=a.dy
u=(s&&C.a).gaV(s)
if(u!=null&&t.d!=null)u.fH(a,t)
for(s=t.y.a,s=new J.Y(s,s.length);s.t();)s.d.aw(a)
a.cM()
a.dx.bD()},
ai:function(a){var u=this.z
if(u!=null)u.N(a)},
S:function(){return this.ai(null)},
cJ:function(a){this.e=null
this.ai(a)},
fs:function(){return this.cJ(null)},
cH:function(a){this.ai(a)},
fq:function(){return this.cH(null)},
cF:function(a){this.ai(a)},
fn:function(){return this.cF(null)},
fm:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcE(),s=[{func:1,ret:-1,args:[D.S]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.b8()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.S()},
fp:function(a,b){var u,t
for(u=b.gM(b),t=this.gcE();u.t();)u.gD(u).gv().F(0,t)
this.S()},
h:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.fT.prototype={
dd:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.aC(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.bG()
t=[V.ak]
u.a=H.b([],t)
u.gv().n(0,new E.fU(s))
s.cy=u
u=new O.bG()
u.a=H.b([],t)
u.gv().n(0,new E.fV(s))
s.db=u
u=new O.bG()
u.a=H.b([],t)
u.gv().n(0,new E.fW(s))
s.dx=u
u=H.b([],[O.d1])
s.dy=u
u.push(null)
s.fr=new H.I([P.q,A.cV])},
gfD:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gR(s)
u=t.db
u=t.z=s.P(0,u.gR(u))
s=u}return s},
cO:function(a){var u=this.dy
u.push(a==null?(u&&C.a).gaV(u):a)},
cM:function(){var u=this.dy
if(u.length>1)u.pop()}}
E.fU.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.fV.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.fW.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.d3.prototype={
bS:function(a){this.cQ()},
bR:function(){return this.bS(null)},
gfe:function(){var u,t=this,s=Date.now(),r=C.d.U(P.jH(s-t.cx.a).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.aC(s,!1)
return u/r},
c5:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.P()
if(typeof r!=="number")return H.aZ(r)
u=C.c.bw(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.P()
t=C.c.bw(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.k3(C.h,s.gfI())}},
cQ:function(){if(!this.ch){this.ch=!0
var u=window
C.v.dF(u)
C.v.ex(u,W.kh(new E.ht(this),P.a6))}},
fG:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.c5()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aC(r,!1)
s.y=P.jH(r-s.r.a).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.am()
r=s.db
C.a.sl(r.a,0)
r.am()
r=s.dx
C.a.sl(r.a,0)
r.am()
r=s.dy;(r&&C.a).sl(r,0)
s.dy.push(null)
o.aw(p.e)}s=p.z
if(s!=null)s.N(null)}catch(q){u=H.at(q)
t=H.jr(q)
P.jv("Error: "+H.e(u))
P.jv("Stack: "+H.e(t))
throw H.f(u)}}}
E.ht.prototype={
$1:function(a){var u=this.a
if(u.ch){u.ch=!1
u.fG()}}}
Z.dc.prototype={}
Z.ch.prototype={
bk:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.at(s)
t=P.r('Failed to bind buffer attribute "'+r.a.h(0)+'": '+H.e(u))
throw H.f(t)}},
h:function(a){var u=this
return"["+u.a.h(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.i6.prototype={}
Z.ci.prototype={
au:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bk:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].bk(a)},
fS:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aw:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.c(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
h:function(a){var u,t,s,r,q=[P.q],p=H.b([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)p.push(u[s].h(0))
r=H.b([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.V(q[s]))
return"Buffer:  ["+this.a.h(0)+"]\nIndices: "+C.a.k(p,", ")+"\nAttrs:   "+C.a.k(r,", ")}}
Z.ba.prototype={
h:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.bN(this.c))+"'")+"]"}}
Z.ar.prototype={
gbL:function(a){var u=this.a,t=(u&$.ax().a)!==0?3:0
if((u&$.aw().a)!==0)t+=3
if((u&$.av().a)!==0)t+=3
if((u&$.ay().a)!==0)t+=2
if((u&$.b_().a)!==0)t+=3
if((u&$.cc().a)!==0)t+=3
if((u&$.cd().a)!==0)t+=4
if((u&$.bs().a)!==0)++t
return(u&$.au().a)!==0?t+4:t},
eO:function(a){var u,t=$.ax(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aw()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.av()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ay()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b_()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cc()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cd()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bs()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.au()
if((s&t.a)!==0)if(u===a)return t
return $.kF()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.ar))return!1
return this.a===b.a},
h:function(a){var u=H.b([],[P.q]),t=this.a
if((t&$.ax().a)!==0)u.push("Pos")
if((t&$.aw().a)!==0)u.push("Norm")
if((t&$.av().a)!==0)u.push("Binm")
if((t&$.ay().a)!==0)u.push("Txt2D")
if((t&$.b_().a)!==0)u.push("TxtCube")
if((t&$.cc().a)!==0)u.push("Clr3")
if((t&$.cd().a)!==0)u.push("Clr4")
if((t&$.bs().a)!==0)u.push("Weight")
if((t&$.au().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.a.k(u,"|")}}
D.em.prototype={}
D.b8.prototype={
n:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.S]}]):u).push(b)},
F:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.a.K(s,b)
if(s===!0){s=t.a
u=(s&&C.a).F(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.a.K(s,b)
if(s===!0){s=t.b
u=(s&&C.a).F(s,b)||u}return u},
N:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.S()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.E(P.jN(u,!0,{func:1,ret:-1,args:[D.S]}),new D.eG(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.S]}])
C.a.E(u,new D.eH(q))}return!0},
f8:function(){return this.N(null)},
a8:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.N(u)}}}}
D.eG.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.eH.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.S.prototype={}
D.bA.prototype={}
D.bB.prototype={}
D.z.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cj.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cj))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.cz.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cz))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.f2.prototype={
fz:function(a){this.d.n(0,a.a)
return!1},
ft:function(a){this.d.F(0,a.a)
return!1}}
X.f9.prototype={
bC:function(a,b){this.r=a.a
return!1},
aL:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.d0()
if(typeof u!=="number")return u.a9()
this.r=(u&~t)>>>0
return!1},
aK:function(a,b){return!1},
fA:function(a){return!1},
e7:function(a,b,c){return}}
X.bH.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.bH))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
h:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.fy.prototype={
bC:function(a,b){this.f=a.a
return!1},
aL:function(a,b){var u=this.f,t=a.a
if(typeof t!=="number")return t.d0()
if(typeof u!=="number")return u.a9()
this.f=(u&~t)>>>0
return!1},
aK:function(a,b){return!1},
fB:function(a,b){return!1}}
X.hx.prototype={
fw:function(a){return!1},
fu:function(a){return!1},
fv:function(a){return!1}}
X.db.prototype={
c_:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.cz(u,new X.bH(t,a.altKey,a.shiftKey))},
ar:function(a){a.shiftKey},
bj:function(a){a.shiftKey},
af:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.W()
u=t.top
if(typeof r!=="number")return r.W()
return new V.ac(s-q,r-u)},
aB:function(a){return new V.aq(a.movementX,a.movementY)},
be:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.ac])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
q=C.c.a2(r.pageX)
C.c.a2(r.pageY)
p=o.left
C.c.a2(r.pageX)
n.push(new V.ac(q-p,C.c.a2(r.pageY)-o.top))}return n},
ad:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cj(u,new X.bH(t,a.altKey,a.shiftKey))},
bb:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.W()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.W()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
e1:function(a){this.f=!0},
dQ:function(a){this.f=!1},
dW:function(a){if(this.f&&this.bb(a))a.preventDefault()},
e5:function(a){var u
if(!this.f)return
u=this.c_(a)
this.b.fz(u)},
e3:function(a){var u
if(!this.f)return
u=this.c_(a)
this.b.ft(u)},
e9:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.ar(a)
if(r.x){u=r.ad(a)
t=r.aB(a)
if(r.d.bC(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.ad(a)
s=r.af(a)
if(r.c.bC(u,s))a.preventDefault()},
ed:function(a){var u,t,s,r=this
r.ar(a)
u=r.ad(a)
if(r.x){t=r.aB(a)
if(r.d.aL(u,t))a.preventDefault()
return}if(r.r)return
s=r.af(a)
if(r.c.aL(u,s))a.preventDefault()},
e_:function(a){var u,t,s,r=this
if(!r.bb(a)){r.ar(a)
u=r.ad(a)
if(r.x){t=r.aB(a)
if(r.d.aL(u,t))a.preventDefault()
return}if(r.r)return
s=r.af(a)
if(r.c.aL(u,s))a.preventDefault()}},
eb:function(a){var u,t,s,r=this
r.ar(a)
u=r.ad(a)
if(r.x){t=r.aB(a)
if(r.d.aK(u,t))a.preventDefault()
return}if(r.r)return
s=r.af(a)
if(r.c.aK(u,s))a.preventDefault()},
dY:function(a){var u,t,s,r=this
if(!r.bb(a)){r.ar(a)
u=r.ad(a)
if(r.x){t=r.aB(a)
if(r.d.aK(u,t))a.preventDefault()
return}if(r.r)return
s=r.af(a)
if(r.c.aK(u,s))a.preventDefault()}},
ef:function(a){var u,t,s=this
s.ar(a)
u=new V.aq((a&&C.u).gf1(a),C.u.gf2(a)).B(0,180)
if(s.x){if(s.d.fA(u))a.preventDefault()
return}if(s.r)return
t=s.af(a)
if(s.c.fB(u,t))a.preventDefault()},
eh:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ad(s.y)
t=s.af(s.y)
s.d.e7(u,t,r)}},
es:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bj(a)
u=t.be(a)
if(t.e.fw(u))a.preventDefault()},
eo:function(a){var u
this.bj(a)
u=this.be(a)
if(this.e.fu(u))a.preventDefault()},
eq:function(a){var u
this.bj(a)
u=this.be(a)
if(this.e.fv(u))a.preventDefault()}}
D.b6.prototype={
ab:function(a){var u=this.r
if(u!=null)u.N(a)},
dj:function(){return this.ab(null)},
$iW:1}
D.W.prototype={}
D.cA.prototype={
ab:function(a){var u=this.x
if(u!=null)u.N(a)},
c3:function(a){var u=this.y
if(u!=null)u.N(a)},
e6:function(){return this.c3(null)},
ek:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.n)(a),++t){s=a[t]
if(s==null||this.dA(s))return!1}return!0},
dK:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gc2(),s=[{func:1,ret:-1,args:[D.S]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q instanceof D.b6)this.e.push(q)
p=q.r
if(p==null){p=new D.b8()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}u=new D.bA()
u.b=!0
this.ab(u)},
em:function(a,b){var u,t,s
for(u=b.gM(b),t=this.gc2();u.t();){s=u.gD(u)
C.a.F(this.e,s)
s.gv().F(0,t)}u=new D.bB()
u.b=!0
this.ab(u)},
dA:function(a){var u=C.a.K(this.e,a)
return u},
$aj:function(){return[D.W]},
$ab5:function(){return[D.W]}}
D.fQ.prototype={$iW:1}
D.hc.prototype={$iW:1}
V.N.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.N))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.v(this.a,3,0)+", "+V.v(this.b,3,0)+", "+V.v(this.c,3,0)+"]"}}
V.aA.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aA))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.v(u.a,3,0)+", "+V.v(u.b,3,0)+", "+V.v(u.c,3,0)+", "+V.v(u.d,3,0)+"]"}}
V.eF.prototype={}
V.cG.prototype={
a0:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.H])
return t},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cG))return!1
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
h:function(a){var u,t,s,r,q=this,p=[P.H],o=V.bq(H.b([q.a,q.d,q.r],p),3,0),n=V.bq(H.b([q.b,q.e,q.x],p),3,0),m=V.bq(H.b([q.c,q.f,q.y],p),3,0)
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
V.ak.prototype={
a0:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.H])
return t},
cB:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.y().a)return V.jc()
u=1/b1
t=-n
s=-a0
return V.al((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
P:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.al(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
aY:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.w(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
bG:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.a4(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ak))return!1
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
h:function(a){return this.G()},
u:function(a){var u,t,s,r,q,p=this,o=[P.H],n=V.bq(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.bq(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.bq(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.bq(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
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
G:function(){return this.u("")}}
V.ac.prototype={
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ac))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
h:function(a){return"["+V.v(this.a,3,0)+", "+V.v(this.b,3,0)+"]"}}
V.a4.prototype={
W:function(a,b){return new V.a4(this.a-b.a,this.b-b.b,this.c-b.c)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a4))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.v(this.a,3,0)+", "+V.v(this.b,3,0)+", "+V.v(this.c,3,0)+"]"}}
V.cP.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cP))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.v(u.a,3,0)+", "+V.v(u.b,3,0)+", "+V.v(u.c,3,0)+", "+V.v(u.d,3,0)+"]"}}
V.cS.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cS))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.v(u.a,3,0)+", "+V.v(u.b,3,0)+", "+V.v(u.c,3,0)+", "+V.v(u.d,3,0)+"]"}}
V.aq.prototype={
by:function(a){var u,t=this.a
if(typeof t!=="number")return t.P()
u=this.b
if(typeof u!=="number")return u.P()
return Math.sqrt(t*t+u*u)},
B:function(a,b){var u,t
if(Math.abs(b-0)<$.y().a){u=$.k7
return u==null?$.k7=new V.aq(0,0):u}u=this.a
if(typeof u!=="number")return u.B()
t=this.b
if(typeof t!=="number")return t.B()
return new V.aq(u/b,t/b)},
p:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aq))return!1
u=b.a
t=this.a
s=$.y()
s.toString
if(typeof u!=="number")return u.W()
if(typeof t!=="number")return H.aZ(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.W()
if(typeof t!=="number")return H.aZ(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){return"["+V.v(this.a,3,0)+", "+V.v(this.b,3,0)+"]"}}
V.w.prototype={
by:function(a){return Math.sqrt(this.L(this))},
L:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bz:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.w(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aE:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.w(u*t-s*r,s*q-p*t,p*r-u*q)},
I:function(a,b){return new V.w(this.a+b.a,this.b+b.b,this.c+b.c)},
az:function(a){return new V.w(-this.a,-this.b,-this.c)},
B:function(a,b){if(Math.abs(b-0)<$.y().a)return V.bW()
return new V.w(this.a/b,this.b/b,this.c/b)},
cC:function(){var u=$.y().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.w))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.v(this.a,3,0)+", "+V.v(this.b,3,0)+", "+V.v(this.c,3,0)+"]"}}
U.cl.prototype={
gv:function(){var u=this.b
return u==null?this.b=D.a_():u},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cl))return!1
return J.G(this.a,b.a)},
h:function(a){return"Constant: "+this.a.u("          ")}}
U.fz.prototype={}
U.cU.prototype={
gv:function(){var u=this.y
return u==null?this.y=D.a_():u},
aq:function(a){var u=this.y
if(u!=null)u.N(a)},
scX:function(a){var u
a=V.jx(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.y().a)){this.a=a
u=new D.z("yaw",u,a)
u.b=!0
this.aq(u)}},
scL:function(a,b){var u
b=V.jx(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.y().a)){this.b=b
u=new D.z("pitch",u,b)
u.b=!0
this.aq(u)}},
scR:function(a){var u
a=V.jx(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.y().a)){this.c=a
u=new D.z("roll",u,a)
u.b=!0
this.aq(u)}},
p:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.cU))return!1
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
h:function(a){var u=this
return"Rotater: ["+V.v(u.a,3,0)+", "+V.v(u.b,3,0)+", "+V.v(u.c,3,0)+"], ["+V.v(u.d,3,0)+", "+V.v(u.e,3,0)+", "+V.v(u.f,3,0)+"]"}}
M.cq.prototype={
ac:function(a){var u=this.y
if(u!=null)u.N(a)},
dk:function(){return this.ac(null)},
dS:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.ga5(),s=[{func:1,ret:-1,args:[D.S]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.b8()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bA()
u.b=!0
this.ac(u)},
dU:function(a,b){var u,t
for(u=b.gM(b),t=this.ga5();u.t();)u.gD(u).gv().F(0,t)
u=new D.bB()
u.b=!0
this.ac(u)},
scT:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gv().F(0,t.ga5())
u=t.d
t.d=a
if(a!=null)a.gv().n(0,t.ga5())
s=new D.z("technique",u,t.d)
s.b=!0
t.ac(s)}},
gv:function(){var u=this.y
return u==null?this.y=D.a_():u},
aw:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
a.cO(f.d)
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
if(typeof s!=="number")return H.aZ(s)
o=C.c.a2(p*s)
p=q.b
if(typeof r!=="number")return H.aZ(r)
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
i=V.al(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.cN(i)
t=$.jS
if(t==null){t=V.jU()
q=V.jh()
p=$.k8
t=V.jP(t,q,p==null?$.k8=new V.w(0,0,-1):p)
$.jS=t
h=t}else h=t
u=u.b
if(u!=null){g=u.a
if(g!=null)h=g.P(0,h)}a.db.cN(h)
u=f.d
if(u!=null)u.aZ(0,a)
for(u=f.e.a,u=new J.Y(u,u.length);u.t();)u.d.aZ(0,a)
for(u=f.e.a,u=new J.Y(u,u.length);u.t();)u.d.aw(a)
f.b.toString
a.cy.bD()
a.db.bD()
f.c.toString
a.cM()}}
A.cf.prototype={}
A.ee.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
f9:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
f3:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.O.prototype={
ga3:function(a){var u=this.a?1:0,t=this.b?2:0
return u|t|0},
h:function(a){var u=this.a?1:0,t=this.b?2:0
return""+(u|t|0)},
p:function(a,b){if(b==null)return!1
if(!(b instanceof A.O))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.ff.prototype={
dc:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
b8.z=c3
u=new P.an("")
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
b8.e=b8.c0(n,35633)
b8.f=b8.c0(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!s.getProgramParameter(b8.r,35714)){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.t(P.r("Failed to link shader: "+H.e(l)))}b8.eH()
b8.eJ()
b8.Q=b8.x.i(0,"posAttr")
b8.cx=b8.x.i(0,"normAttr")
b8.ch=b8.x.i(0,"binmAttr")
b8.cy=b8.x.i(0,"txt2DAttr")
b8.db=b8.x.i(0,"txtCubeAttr")
b8.dx=b8.x.i(0,"bendAttr")
if(c3.dx)b8.id=H.o(b8.y.A(0,"invViewMat"),"$ia0")
if(t)b8.dy=H.o(b8.y.A(0,"objMat"),"$ia0")
if(r)b8.fr=H.o(b8.y.A(0,"viewObjMat"),"$ia0")
b8.fy=H.o(b8.y.A(0,"projViewObjMat"),"$ia0")
if(c3.ry)b8.k1=H.o(b8.y.A(0,"txt2DMat"),"$ibT")
if(c3.x1)b8.k2=H.o(b8.y.A(0,"txtCubeMat"),"$ia0")
if(c3.x2)b8.k3=H.o(b8.y.A(0,"colorMat"),"$ia0")
b8.r1=H.b([],[A.a0])
t=c3.y2
if(t>0){b8.k4=b8.y.A(0,"bendMatCount")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.i(0,q)
if(j==null)H.t(P.r(c0+q+c1))
s.push(H.o(j,"$ia0"))}}t=c3.a
if(t.a)b8.r2=H.o(b8.y.A(0,"emissionClr"),"$iF")
if(t.b)b8.rx=H.o(b8.y.A(0,"emissionTxt"),"$iP")
t=c3.b
if(t.a)b8.x1=H.o(b8.y.A(0,"ambientClr"),"$iF")
if(t.b)b8.x2=H.o(b8.y.A(0,"ambientTxt"),"$iP")
t=c3.c
if(t.a)b8.y2=H.o(b8.y.A(0,"diffuseClr"),"$iF")
if(t.b)b8.ag=H.o(b8.y.A(0,"diffuseTxt"),"$iP")
t=c3.d
if(t.a)b8.cl=H.o(b8.y.A(0,"invDiffuseClr"),"$iF")
if(t.b)b8.cm=H.o(b8.y.A(0,"invDiffuseTxt"),"$iP")
t=c3.e
s=t.a
if(s||t.b||!1){b8.cp=H.o(b8.y.A(0,"shininess"),"$iL")
if(s)b8.cn=H.o(b8.y.A(0,"specularClr"),"$iF")
if(t.b)b8.co=H.o(b8.y.A(0,"specularTxt"),"$iP")}if(c3.f.b)b8.cq=H.o(b8.y.A(0,"bumpTxt"),"$iP")
if(c3.cy){b8.cr=H.o(b8.y.A(0,"envSampler"),"$ibi")
t=c3.r
if(t.a)b8.cs=H.o(b8.y.A(0,"reflectClr"),"$iF")
if(t.b)b8.ct=H.o(b8.y.A(0,"reflectTxt"),"$iP")
t=c3.x
s=t.a
if(s||t.b||!1){b8.cu=H.o(b8.y.A(0,"refraction"),"$iL")
if(s)b8.cv=H.o(b8.y.A(0,"refractClr"),"$iF")
if(t.b)b8.cw=H.o(b8.y.A(0,"refractTxt"),"$iP")}}t=c3.y
if(t.a)b8.cz=H.o(b8.y.A(0,"alpha"),"$iL")
if(t.b)b8.cA=H.o(b8.y.A(0,"alphaTxt"),"$iP")
t=P.x
s=[t,A.d9]
b8.bq=new H.I(s)
b8.br=new H.I([t,[P.a9,A.bS]])
b8.bs=new H.I(s)
b8.bt=new H.I([t,[P.a9,A.bU]])
b8.bu=new H.I(s)
b8.bv=new H.I([t,[P.a9,A.bV]])
if(c3.id){for(t=c3.z,s=t.length,r=[A.bS],i=0;i<t.length;t.length===s||(0,H.n)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.e(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.a9()
p=(g&1)!==0
if(p){o=b8.y
d=f+"s["+k+"].objUp"
j=o.i(0,d)
if(j==null)H.t(P.r(c0+d+c1))
H.o(j,"$iF")
o=b8.y
d=f+"s["+k+"].objRight"
c=o.i(0,d)
if(c==null)H.t(P.r(c0+d+c1))
H.o(c,"$iF")
o=b8.y
d=f+"s["+k+"].objDir"
b=o.i(0,d)
if(b==null)H.t(P.r(c0+d+c1))
H.o(b,"$iF")
a=b
a0=c
a1=j}else{a=b9
a0=a
a1=a0}o=b8.y
d=f+"s["+k+"].viewDir"
j=o.i(0,d)
if(j==null)H.t(P.r(c0+d+c1))
H.o(j,"$iF")
o=b8.y
d=f+"s["+k+"].color"
c=o.i(0,d)
if(c==null)H.t(P.r(c0+d+c1))
H.o(c,"$iF")
if(p){p=b8.y
o=f+"sTexture2D"+k
b=p.i(0,o)
if(b==null)H.t(P.r(c0+o+c1))
H.o(b,"$iP")
a2=b}else a2=b9
e.push(new A.bS(a1,a0,a,j,c,a2))}b8.br.m(0,g,e)
q=b8.bq
p=b8.y
o=f+"Count"
j=p.i(0,o)
if(j==null)H.t(P.r(c0+o+c1))
q.m(0,g,j)}for(t=c3.Q,s=t.length,r=[A.bU],i=0;i<t.length;t.length===s||(0,H.n)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.e(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.i(0,o)
if(j==null)H.t(P.r(c0+o+c1))
H.o(j,"$iF")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.i(0,o)
if(c==null)H.t(P.r(c0+o+c1))
H.o(c,"$iF")
p=b8.y
o=f+"s["+k+"].color"
b=p.i(0,o)
if(b==null)H.t(P.r(c0+o+c1))
H.o(b,"$iF")
if(typeof g!=="number")return g.a9()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
a3=p.i(0,o)
if(a3==null)H.t(P.r(c0+o+c1))
H.o(a3,"$ibT")
a4=a3}else a4=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
a3=p.i(0,o)
if(a3==null)H.t(P.r(c0+o+c1))
H.o(a3,"$ibi")
a2=a3}else a2=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
a3=p.i(0,o)
if(a3==null)H.t(P.r(c0+o+c1))
H.o(a3,"$ibi")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a5=p.i(0,o)
if(a5==null)H.t(P.r(c0+o+c1))
H.o(a5,"$ibR")
a6=a3
a7=a5}else{a6=b9
a7=a6}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
a3=p.i(0,o)
if(a3==null)H.t(P.r(c0+o+c1))
H.o(a3,"$iL")
p=b8.y
o=f+"s["+k+"].att1"
a5=p.i(0,o)
if(a5==null)H.t(P.r(c0+o+c1))
H.o(a5,"$iL")
p=b8.y
o=f+"s["+k+"].att2"
a8=p.i(0,o)
if(a8==null)H.t(P.r(c0+o+c1))
H.o(a8,"$iL")
a9=a8
b0=a5
b1=a3}else{a9=b9
b0=a9
b1=b0}e.push(new A.bU(j,c,a4,b,a2,a6,a7,b1,b0,a9))}b8.bt.m(0,g,e)
q=b8.bs
p=b8.y
o=f+"Count"
j=p.i(0,o)
if(j==null)H.t(P.r(c0+o+c1))
q.m(0,g,j)}for(t=c3.ch,s=t.length,r=[A.bV],i=0;i<t.length;t.length===s||(0,H.n)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.e(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.i(0,o)
if(j==null)H.t(P.r(c0+o+c1))
H.o(j,"$iF")
p=b8.y
o=f+"s["+k+"].objDir"
c=p.i(0,o)
if(c==null)H.t(P.r(c0+o+c1))
H.o(c,"$iF")
p=b8.y
o=f+"s["+k+"].viewPnt"
b=p.i(0,o)
if(b==null)H.t(P.r(c0+o+c1))
H.o(b,"$iF")
p=b8.y
o=f+"s["+k+"].color"
a3=p.i(0,o)
if(a3==null)H.t(P.r(c0+o+c1))
H.o(a3,"$iF")
if(typeof g!=="number")return g.a9()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a5=p.i(0,o)
if(a5==null)H.t(P.r(c0+o+c1))
H.o(a5,"$iF")
p=b8.y
o=f+"s["+k+"].objRight"
a8=p.i(0,o)
if(a8==null)H.t(P.r(c0+o+c1))
H.o(a8,"$iF")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.i(0,o)
if(b2==null)H.t(P.r(c0+o+c1))
H.o(b2,"$iL")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.i(0,o)
if(b3==null)H.t(P.r(c0+o+c1))
H.o(b3,"$iL")
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
H.o(a5,"$ibR")
a7=a5}else a7=b9
if((g&8)!==0){o=b8.y
d=f+"s["+k+"].cutoff"
a5=o.i(0,d)
if(a5==null)H.t(P.r(c0+d+c1))
H.o(a5,"$iL")
o=b8.y
d=f+"s["+k+"].coneAngle"
a8=o.i(0,d)
if(a8==null)H.t(P.r(c0+d+c1))
H.o(a8,"$iL")
b6=a8
b7=a5}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
d=f+"s["+k+"].att0"
a5=o.i(0,d)
if(a5==null)H.t(P.r(c0+d+c1))
H.o(a5,"$iL")
o=b8.y
d=f+"s["+k+"].att1"
a8=o.i(0,d)
if(a8==null)H.t(P.r(c0+d+c1))
H.o(a8,"$iL")
o=b8.y
d=f+"s["+k+"].att2"
b2=o.i(0,d)
if(b2==null)H.t(P.r(c0+d+c1))
H.o(b2,"$iL")
a9=b2
b0=a8
b1=a5}else{a9=b9
b0=a9
b1=b0}if((g&1)!==0){o=b8.y
d=f+"sTexture2D"+k
a5=o.i(0,d)
if(a5==null)H.t(P.r(c0+d+c1))
H.o(a5,"$iP")
a2=a5}else a2=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a5=p.i(0,o)
if(a5==null)H.t(P.r(c0+o+c1))
H.o(a5,"$iP")
a6=a5}else a6=b9
e.push(new A.bV(j,c,b,a3,a1,a0,b5,b4,a7,b7,b6,b1,b0,a9,a2,a6))}b8.bv.m(0,g,e)
q=b8.bu
p=b8.y
o=f+"Count"
j=p.i(0,o)
if(j==null)H.t(P.r(c0+o+c1))
q.m(0,g,j)}}},
a1:function(a,b){if(b!=null&&b.d)a.d2(b)},
eD:function(a,b){}}
A.cn.prototype={
h:function(a){return"dirLight"+H.e(this.a)}}
A.cQ.prototype={
h:function(a){return"pointLight"+H.e(this.a)}}
A.cX.prototype={
h:function(a){return"spotLight"+H.e(this.a)}}
A.fi.prototype={
h:function(a){return this.ag}}
A.bS.prototype={}
A.bU.prototype={}
A.bV.prototype={}
A.cV.prototype={
df:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
c0:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.f(P.r("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
eH:function(){var u,t,s,r=this,q=H.b([],[A.cf]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.aZ(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cf(p,t.name,s))}r.x=new A.ee(q)},
eJ:function(){var u,t,s,r=this,q=H.b([],[A.d8]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.aZ(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.f0(t.type,t.size,t.name,s))}r.y=new A.hJ(q)},
ap:function(a,b,c){var u=this.a
if(a===1)return new A.d9(u,b,c)
else return A.jg(u,this.r,b,a,c)},
dC:function(a,b,c){var u=this.a
if(a===1)return new A.P(u,b,c)
else return A.jg(u,this.r,b,a,c)},
dD:function(a,b,c){var u=this.a
if(a===1)return new A.bi(u,b,c)
else return A.jg(u,this.r,b,a,c)},
aR:function(a,b){return new P.dl(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
f0:function(a,b,c,d){var u=this
switch(a){case 5120:return u.ap(b,c,d)
case 5121:return u.ap(b,c,d)
case 5122:return u.ap(b,c,d)
case 5123:return u.ap(b,c,d)
case 5124:return u.ap(b,c,d)
case 5125:return u.ap(b,c,d)
case 5126:return new A.L(u.a,c,d)
case 35664:return new A.hF(u.a,c,d)
case 35665:return new A.F(u.a,c,d)
case 35666:return new A.bR(u.a,c,d)
case 35667:return new A.hG(u.a,c,d)
case 35668:return new A.hH(u.a,c,d)
case 35669:return new A.hI(u.a,c,d)
case 35674:return new A.hK(u.a,c,d)
case 35675:return new A.bT(u.a,c,d)
case 35676:return new A.a0(u.a,c,d)
case 35678:return u.dC(b,c,d)
case 35680:return u.dD(b,c,d)
case 35670:throw H.f(u.aR("BOOL",c))
case 35671:throw H.f(u.aR("BOOL_VEC2",c))
case 35672:throw H.f(u.aR("BOOL_VEC3",c))
case 35673:throw H.f(u.aR("BOOL_VEC4",c))
default:throw H.f(P.r("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.d8.prototype={}
A.hJ.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
A:function(a,b){var u=this.i(0,b)
if(u==null)throw H.f(P.r("Required uniform value, "+b+", was not defined or used in shader."))
return u},
h:function(a){return this.G()},
G:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.n)(u),++r)s+=u[r].h(0)+"\n"
return s}}
A.d9.prototype={
h:function(a){return"Uniform1i: "+H.e(this.c)}}
A.hG.prototype={
h:function(a){return"Uniform2i: "+H.e(this.c)}}
A.hH.prototype={
h:function(a){return"Uniform3i: "+H.e(this.c)}}
A.hI.prototype={
h:function(a){return"Uniform4i: "+H.e(this.c)}}
A.hE.prototype={
h:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.L.prototype={
h:function(a){return"Uniform1f: "+H.e(this.c)}}
A.hF.prototype={
h:function(a){return"Uniform2f: "+H.e(this.c)}}
A.F.prototype={
h:function(a){return"Uniform3f: "+H.e(this.c)}}
A.bR.prototype={
h:function(a){return"Uniform4f: "+H.e(this.c)}}
A.hK.prototype={
h:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.bT.prototype={
a4:function(a){var u=new Float32Array(H.c8(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
h:function(a){return"UniformMat3: "+H.e(this.c)}}
A.a0.prototype={
a4:function(a){var u=new Float32Array(H.c8(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
h:function(a){return"UniformMat4: "+H.e(this.c)}}
A.P.prototype={
d2:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
h:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.bi.prototype={
h:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.iG.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.bz(s.b,b).bz(s.d.bz(s.c,b),c)
s=new V.a4(r.a,r.b,r.c)
if(!J.G(a.f,s)){a.f=s
s=a.a
if(s!=null)s.S()}a.sfN(r.B(0,Math.sqrt(r.L(r))))
s=1-b
u=1-c
u=new V.cP(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.G(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.S()}}}
F.b9.prototype={
aF:function(){var u=this
if(!u.gaG()){C.a.F(u.a.a.d.b,u)
u.a.a.S()}u.bf()
u.bg()
u.ew()},
eE:function(a){this.a=a
a.d.b.push(this)},
eF:function(a){this.b=a
a.d.c.push(this)},
eG:function(a){this.c=a
a.d.d.push(this)},
bf:function(){var u=this.a
if(u!=null){C.a.F(u.d.b,this)
this.a=null}},
bg:function(){var u=this.b
if(u!=null){C.a.F(u.d.c,this)
this.b=null}},
ew:function(){var u=this.c
if(u!=null){C.a.F(u.d.d,this)
this.c=null}},
gaG:function(){return this.a==null||this.b==null||this.c==null},
du:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.bW()
if(q!=null)s=s.I(0,q)
if(u!=null)s=s.I(0,u)
if(t!=null)s=s.I(0,t)
if(s.cC())return
return s.B(0,Math.sqrt(s.L(s)))},
dw:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.W(0,q)
r=new V.w(r.a,r.b,r.c)
s=r.B(0,Math.sqrt(r.L(r)))
r=t.W(0,q)
r=new V.w(r.a,r.b,r.c)
r=s.aE(r.B(0,Math.sqrt(r.L(r))))
return r.B(0,Math.sqrt(r.L(r)))},
bn:function(){var u,t=this
if(t.d!=null)return!0
u=t.du()
if(u==null){u=t.dw()
if(u==null)return!1}t.d=u
t.a.a.S()
return!0},
dt:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.bW()
if(q!=null)s=s.I(0,q)
if(u!=null)s=s.I(0,u)
if(t!=null)s=s.I(0,t)
if(s.cC())return
return s.B(0,Math.sqrt(s.L(s)))},
dv:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.y().a){l=d.W(0,g)
l=new V.w(l.a,l.b,l.c)
q=l.B(0,Math.sqrt(l.L(l)))
if(s.a-t.a<0)q=q.az(0)}else{p=(l-u.b)/r
l=d.W(0,g)
l=new V.a4(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).W(0,j)
l=new V.w(l.a,l.b,l.c)
q=l.B(0,Math.sqrt(l.L(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.az(0)}l=n.d
if(l!=null){o=l.B(0,Math.sqrt(l.L(l)))
l=o.aE(q)
l=l.B(0,Math.sqrt(l.L(l))).aE(o)
q=l.B(0,Math.sqrt(l.L(l)))}return q},
bl:function(){var u,t=this
if(t.e!=null)return!0
u=t.dt()
if(u==null){u=t.dv()
if(u==null)return!1}t.e=u
t.a.a.S()
return!0},
geW:function(a){var u=this
if(J.G(u.a,u.b))return!0
if(J.G(u.b,u.c))return!0
if(J.G(u.c,u.a))return!0
return!1},
p:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.G()},
u:function(a){var u,t,s=this
if(s.gaG())return a+"disposed"
u=a+C.b.a_(J.V(s.a.e),0)+", "+C.b.a_(J.V(s.b.e),0)+", "+C.b.a_(J.V(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.h(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.h(0)+"}"):u+"-}"},
G:function(){return this.u("")}}
F.eI.prototype={}
F.h9.prototype={
aI:function(a,b,c){var u,t=b.a
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
F.bD.prototype={
aF:function(){var u=this
if(!u.gaG()){C.a.F(u.a.a.c.b,u)
u.a.a.S()}u.bf()
u.bg()},
bf:function(){var u=this.a
if(u!=null){C.a.F(u.c.b,this)
this.a=null}},
bg:function(){var u=this.b
if(u!=null){C.a.F(u.c.c,this)
this.b=null}},
gaG:function(){return this.a==null||this.b==null},
p:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.G()},
u:function(a){if(this.gaG())return a+"disposed"
return a+C.b.a_(J.V(this.a.e),0)+", "+C.b.a_(J.V(this.b.e),0)},
G:function(){return this.u("")}}
F.f4.prototype={}
F.hD.prototype={
aI:function(a,b,c){var u,t=b.a
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
F.bK.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.G()},
u:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.a_(J.V(u.e),0)},
G:function(){return this.u("")}}
F.h1.prototype={
gv:function(){var u=this.e
return u==null?this.e=D.a_():u},
bB:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.q()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.n)(g),++s){r=g[s]
h.a.n(0,r.eZ())}h.a.q()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.n)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.q()
o=o.e
if(typeof o!=="number")return o.I()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
n=p[o]
h.b.a.a.n(0,n)
o=new F.bK()
if(n.a==null)H.t(P.r("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.N(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.n)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.q()
o=o.e
if(typeof o!=="number")return o.I()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.q()
p=p.e
if(typeof p!=="number")return p.I()
p+=u
o=o.c
if(p>=o.length)return H.c(o,p)
k=o[p]
p=h.c.a
p.a.n(0,l)
p.a.n(0,k)
p=new F.bD()
o=l.a
if(o==null)H.t(P.r("May not create a line with a start vertex which is not attached to a shape."))
if(o!=k.a)H.t(P.r("May not create a line with vertices attached to different shapes."))
p.a=l
l.c.b.push(p)
p.b=k
k.c.c.push(p)
p.a.a.c.b.push(p)
p=p.a.a.e
if(p!=null)p.N(null)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.n)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.q()
o=o.e
if(typeof o!=="number")return o.I()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.q()
p=p.e
if(typeof p!=="number")return p.I()
p+=u
o=o.c
if(p>=o.length)return H.c(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.q()
o=o.e
if(typeof o!=="number")return o.I()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
i=p[o]
o=h.d.a
o.a.n(0,l)
o.a.n(0,k)
o.a.n(0,i)
F.cr(l,k,i)}g=h.e
if(g!=null)g.a8(0)},
at:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.at()||!1
if(!t.a.at())u=!1
s=t.e
if(s!=null)s.a8(0)
return u},
fk:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.b(o.slice(0),[H.br(o,0)])
for(o=[F.bk];u.length!==0;){t=C.a.gfc(u)
C.a.cP(u,0)
if(t!=null){s=H.b([],o)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.c(u,r)
q=u[r]
if(q!=null&&a.aI(0,t,q)){s.push(q)
C.a.cP(u,r)}}if(s.length>1)b.bB(s)}}p.a.q()
p.c.bE()
p.d.bE()
p.b.fF()
p.c.bF(new F.hD())
p.d.bF(new F.h9())
o=p.e
if(o!=null)o.a8(0)},
eU:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.ax()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.aw().a)!==0)++s
if((t&$.av().a)!==0)++s
if((t&$.ay().a)!==0)++s
if((t&$.b_().a)!==0)++s
if((t&$.cc().a)!==0)++s
if((t&$.cd().a)!==0)++s
if((t&$.bs().a)!==0)++s
if((t&$.au().a)!==0)++s
r=a4.gbL(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.H])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.ch])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.eO(m)
k=l.gbL(l)
if(m>=t)return H.c(o,m)
o[m]=new Z.ch(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.c(i,j)
h=i[j].fj(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.c(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.c8(p)),35044)
u.bindBuffer(a1,null)
c=new Z.ci(new Z.dc(a1,d),o,a4)
c.b=H.b([],[Z.ba])
if(a0.b.b.length!==0){b=H.b([],[P.x])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.q()
b.push(t.e)}a=Z.ji(u,34963,b)
c.b.push(new Z.ba(0,b.length,a))}if(a0.c.b.length!==0){b=H.b([],[P.x])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.q()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.c(t,m)
t=t[m].b
t.a.a.q()
b.push(t.e)}a=Z.ji(u,34963,b)
c.b.push(new Z.ba(1,b.length,a))}if(a0.d.b.length!==0){b=H.b([],[P.x])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.q()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.c(t,m)
t=t[m].b
t.a.a.q()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.c(t,m)
t=t[m].c
t.a.a.q()
b.push(t.e)}a=Z.ji(u,34963,b)
c.b.push(new Z.ba(4,b.length,a))}return c},
h:function(a){var u=this,t="   ",s=H.b([],[P.q])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.u(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.u(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.u(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.u(t))}return C.a.k(s,"\n")},
S:function(){var u=this.e
if(u!=null)u.N(null)}}
F.h2.prototype={
eM:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.b9])
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
if(p){n.n(0,m)
u.a.n(0,l)
u.a.n(0,j)
h.push(F.cr(m,l,j))
u.a.n(0,m)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.cr(m,j,i))}else{n.n(0,l)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.cr(l,j,i))
u.a.n(0,l)
u.a.n(0,i)
u.a.n(0,m)
h.push(F.cr(l,i,m))}p=!p}r=!r}return h},
gl:function(a){return this.b.length},
bF:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.c(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.i(0,q)
for(o=q-1;o>=0;--o){n=r.d.i(0,o)
if(a.aI(0,p,n)){p.aF()
break}}}}},
bE:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
s=t[u]
t=s.geW(s)
if(t)s.aF()}},
at:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.n)(u),++r)if(!u[r].bn())s=!1
return s},
bm:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.n)(u),++r)if(!u[r].bl())s=!1
return s},
h:function(a){return this.G()},
u:function(a){var u,t,s,r=H.b([],[P.q])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].u(a))
return C.a.k(r,"\n")},
G:function(){return this.u("")}}
F.h3.prototype={
gl:function(a){return this.b.length},
bF:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.c(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.i(0,q)
for(o=q-1;o>=0;--o){n=r.c.i(0,o)
if(a.aI(0,p,n)){p.aF()
break}}}}},
bE:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
s=t[u]
t=J.G(s.a,s.b)
if(t)s.aF()}},
h:function(a){return this.G()},
u:function(a){var u,t,s=H.b([],[P.q]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.c(t,u)
s.push(t[u].u(a+(""+u+". ")))}return C.a.k(s,"\n")},
G:function(){return this.u("")}}
F.h4.prototype={
gl:function(a){return this.b.length},
fF:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.F(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.N(null)}s=t.a
if(s!=null){C.a.F(s.b.b,t)
t.a=null}}}},
h:function(a){return this.G()},
u:function(a){var u,t,s,r=H.b([],[P.q])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].u(a))
return C.a.k(r,"\n")},
G:function(){return this.u("")}}
F.bk.prototype={
bp:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.ka(u.cx,r,o,t,s,q,p,a,n)},
eZ:function(){return this.bp(null)},
sfN:function(a){var u
if(!J.G(this.z,a)){this.z=a
u=this.a
if(u!=null)u.S()}},
fj:function(a){var u,t,s=this
if(a.p(0,$.ax())){u=s.f
t=[P.H]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.aw())){u=s.r
t=[P.H]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.av())){u=s.x
t=[P.H]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.ay())){u=s.y
t=[P.H]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.p(0,$.b_())){u=s.z
t=[P.H]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.cc())){u=s.Q
t=[P.H]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.cd())){u=s.Q
t=[P.H]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.p(0,$.bs()))return H.b([s.ch],[P.H])
else if(a.p(0,$.au())){u=s.cx
t=[P.H]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.H])},
bn:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.bW()
t.d.E(0,new F.i4(s))
s=s.a
t.r=s.B(0,Math.sqrt(s.L(s)))
s=t.a
if(s!=null){s.S()
s=t.a.e
if(s!=null)s.a8(0)}return!0},
bl:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.bW()
t.d.E(0,new F.i3(s))
s=s.a
t.x=s.B(0,Math.sqrt(s.L(s)))
s=t.a
if(s!=null){s.S()
s=t.a.e
if(s!=null)s.a8(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.G()},
u:function(a){var u,t,s=this,r="-",q=H.b([],[P.q])
q.push(C.b.a_(J.V(s.e),0))
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
q.push(V.v(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.h(0))
else q.push(r)
t=C.a.k(q,", ")
return a+"{"+t+"}"},
G:function(){return this.u("")}}
F.i4.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.I(0,t)}}}
F.i3.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.I(0,t)}}}
F.hV.prototype={
q:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.c(u,r)
u[r].e=s;++s}this.b=!1}},
n:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.f(P.r("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.S()
return!0},
cc:function(a,b){var u=null,t=F.ka(u,u,a,u,u,b,u,u,0)
this.n(0,t)
return t},
gl:function(a){return this.c.length},
at:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)u[s].bn()
return!0},
bm:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)u[s].bl()
return!0},
eV:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.B(0,Math.sqrt(p*p+o*o+n*n))
if(!J.G(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.N(null)}}}}return!0},
h:function(a){return this.G()},
u:function(a){var u,t,s,r
this.q()
u=H.b([],[P.q])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.n)(t),++r)u.push(t[r].u(a))
return C.a.k(u,"\n")},
G:function(){return this.u("")}}
F.hW.prototype={
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
E:function(a,b){var u=this
C.a.E(u.b,b)
C.a.E(u.c,new F.hX(u,b))
C.a.E(u.d,new F.hY(u,b))},
h:function(a){return this.G()},
G:function(){var u,t,s,r=H.b([],[P.q])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].u(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].u(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].u(""))
return C.a.k(r,"\n")}}
F.hX.prototype={
$1:function(a){if(!J.G(a.a,this.a))this.b.$1(a)}}
F.hY.prototype={
$1:function(a){var u=this.a
if(!J.G(a.a,u)&&!J.G(a.b,u))this.b.$1(a)}}
F.hZ.prototype={
gl:function(a){return this.b.length+this.c.length},
i:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.c(t,u)
return t[u]}else{if(b<0)return H.c(t,b)
return t[b]}},
h:function(a){return this.G()},
G:function(){var u,t,s,r=H.b([],[P.q])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].u(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].u(""))
return C.a.k(r,"\n")}}
F.i0.prototype={}
F.i_.prototype={
aI:function(a,b,c){return J.G(b.f,c.f)}}
F.i1.prototype={}
F.fI.prototype={
bB:function(a){var u,t,s,r,q,p,o,n,m=V.bW()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null)m=new V.w(m.a+s.a,m.b+s.b,m.c+s.c)}m=m.B(0,Math.sqrt(m.L(m)))
for(u=a.length,s=m==null,t=0;t<a.length;a.length===u||(0,H.n)(a),++t){r=a[t]
if(s)q=null
else{p=m.a
o=m.b
n=m.c
q=m.B(0,Math.sqrt(p*p+o*o+n*n))}if(!J.G(r.r,q)){r.r=q
p=r.a
if(p!=null){p=p.e
if(p!=null)p.N(null)}}}return}}
F.i2.prototype={
gl:function(a){return this.b.length},
h:function(a){return this.G()},
G:function(){var u,t,s,r=H.b([],[P.q])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].u(""))
return C.a.k(r,"\n")}}
O.cF.prototype={
gv:function(){var u=this.fr
return u==null?this.fr=D.a_():u},
O:function(a){var u=this.fr
if(u!=null)u.N(a)},
b4:function(){return this.O(null)},
c4:function(a){this.a=null
this.O(a)},
ez:function(){return this.c4(null)},
dM:function(a,b){var u=new D.bA()
u.b=!0
this.O(u)},
dO:function(a,b){var u=new D.bB()
u.b=!0
this.O(u)},
bY:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.x,h=new H.I([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=h.i(0,0)
h.m(0,0,r==null?1:r)}q=H.b([],[A.cn])
h.E(0,new O.fm(j,q))
C.a.b1(q,new O.fn())
p=new H.I([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){o=u[s]
r=o.gaD()
n=p.i(0,o.gaD())
p.m(0,r,n==null?1:n)}m=H.b([],[A.cQ])
p.E(0,new O.fo(j,m))
C.a.b1(m,new O.fp())
l=new H.I([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.n)(i),++s){o=i[s]
t=o.gaD()
r=l.i(0,o.gaD())
l.m(0,t,r==null?1:r)}k=H.b([],[A.cX])
l.E(0,new O.fq(j,k))
C.a.b1(k,new O.fr())
i=C.d.U(j.e.a.length+3,4)
j.dy.e
return A.l5(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
X:function(a,b){if(b!=null)if(!C.a.K(a,b)){b.a=a.length
a.push(b)}},
aZ:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.Y(u,u.length);u.t();){t=u.d
t.toString
s=$.hU
if(s==null)s=$.hU=new V.w(0,0,1)
t.a=s
r=$.hT
t.d=r==null?$.hT=new V.w(0,1,0):r
r=$.hS
t.e=r==null?$.hS=new V.w(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.aY(s)
r=s.a
p=s.b
o=s.c
t.a=s.B(0,Math.sqrt(r*r+p*p+o*o))
o=q.aY(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.B(0,Math.sqrt(p*p+r*r+s*s))
s=q.aY(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.B(0,Math.sqrt(r*r+p*p+o*o))}}}},
fH:function(b3,b4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.a
if(b2==null){b2=b1.bY()
u=b3.fr.i(0,b2.ag)
if(u==null){u=A.l4(b2,b3.a)
t=u.b
if(t.length===0)H.t(P.r("May not cache a shader with no name."))
if(b3.fr.ci(0,t))H.t(P.r('Shader cache already contains a shader by the name "'+t+'".'))
b3.fr.m(0,t,u)}b2=b1.a=u
b4.e=null}s=b2.z
r=s.ck
b2=b4.e
if(!(b2 instanceof Z.ci))b2=b4.e=null
if(b2==null||!b2.d.p(0,r)){b2=s.k3
if(b2)b4.d.at()
q=s.k4
if(q){p=b4.d
o=p.e
if(o!=null)++o.d
p.d.bm()
p.a.bm()
p=p.e
if(p!=null)p.a8(0)}p=s.r2
if(p){o=b4.d
n=o.e
if(n!=null)++n.d
o.a.eV()
o=o.e
if(o!=null)o.a8(0)}m=b4.d.eU(new Z.i6(b3.a),r)
m.au($.ax()).e=b1.a.Q.c
if(b2)m.au($.aw()).e=b1.a.cx.c
if(q)m.au($.av()).e=b1.a.ch.c
if(s.r1)m.au($.ay()).e=b1.a.cy.c
if(p)m.au($.b_()).e=b1.a.db.c
if(s.rx)m.au($.au()).e=b1.a.dx.c
b4.e=m}l=H.b([],[T.d2])
b2=b1.a
q=b3.a
q.useProgram(b2.r)
b2.x.f9()
if(s.dy){b2=b1.a
p=b3.dx
p=p.gR(p)
b2=b2.dy
b2.toString
b2.a4(p.a0(0,!0))}if(s.fr){b2=b1.a
p=b3.cx
if(p==null){p=b3.db
p=p.gR(p)
o=b3.dx
o=b3.cx=p.P(0,o.gR(o))
p=o}b2=b2.fr
b2.toString
b2.a4(p.a0(0,!0))}b2=b1.a
p=b3.ch
if(p==null){p=b3.gfD()
o=b3.dx
o=b3.ch=p.P(0,o.gR(o))
p=o}b2=b2.fy
b2.toString
b2.a4(p.a0(0,!0))
if(s.ry){b2=b1.a
p=b1.b
b2=b2.k1
b2.toString
b2.a4(C.i.a0(p,!0))}if(s.x1){b2=b1.a
p=b1.c
b2=b2.k2
b2.toString
b2.a4(C.i.a0(p,!0))}if(s.x2){b2=b1.a
p=b1.d
b2=b2.k3
b2.toString
b2.a4(C.i.a0(p,!0))}if(s.y2>0){k=b1.e.a.length
b2=b1.a.k4
b2.a.uniform1i(b2.d,k)
for(j=0;j<k;++j){b2=b1.a
p=b1.e.a
if(j>=p.length)return H.c(p,j)
p=p[j]
b2=b2.r1
if(j>=b2.length)return H.c(b2,j)
b2=b2[j]
i=new Float32Array(H.c8(p.a0(0,!0)))
b2.a.uniformMatrix4fv(b2.d,!1,i)}}b2=s.a
if(b2.a){p=b1.a
o=b1.f.f
p=p.r2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b2.b){b1.X(l,b1.f.d)
b2=b1.a
p=b1.f.d
b2.a1(b2.rx,p)}if(s.id){b2=s.b
if(b2.a){p=b1.a
o=b1.r.f
p=p.x1
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b2.b){b1.X(l,b1.r.d)
b2=b1.a
p=b1.r.d
b2.a1(b2.x2,p)}b2=s.c
if(b2.a){p=b1.a
o=b1.x.f
p=p.y2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b2.b){b1.X(l,b1.x.d)
b2=b1.a
p=b1.x.d
b2.a1(b2.ag,p)}b2=s.d
if(b2.a){p=b1.a
o=b1.y.f
p=p.cl
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b2.b){b1.X(l,b1.y.d)
b2=b1.a
p=b1.y.d
b2.a1(b2.cm,p)}b2=s.e
p=b2.a
if(p||b2.b||!1){o=b1.a
n=b1.z.ch
o=o.cp
o.a.uniform1f(o.d,n)}if(p){p=b1.a
o=b1.z.f
p=p.cn
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b2.b){b1.X(l,b1.z.d)
b2=b1.a
p=b1.z.d
b2.a1(b2.co,p)}b2=s.z
if(b2.length>0){p=b3.db
h=p.gR(p)
p=P.x
g=new H.I([p,p])
for(p=b1.dx.e,o=p.length,f=0;f<p.length;p.length===o||(0,H.n)(p),++f){e=p[f]
d=g.i(0,0)
if(d==null)d=0
g.m(0,0,d+1)
c=J.ea(b1.a.br.i(0,0),d)
n=h.aY(e.a)
b=n.a
a=n.b
a0=n.c
a0=n.B(0,Math.sqrt(b*b+a*a+a0*a0))
a=c.e
b=a0.a
n=a0.b
a0=a0.c
a.a.uniform3f(a.d,b,n,a0)
a0=e.c
n=c.f
n.a.uniform3f(n.d,a0.a,a0.b,a0.c)}for(p=b2.length,f=0;f<b2.length;b2.length===p||(0,H.n)(b2),++f){o=b2[f].a
k=g.i(0,o)
if(k==null)k=0
o=b1.a.bq.i(0,o)
o.a.uniform1i(o.d,k)}}b2=s.Q
if(b2.length>0){p=b3.db
h=p.gR(p)
p=P.x
a1=new H.I([p,p])
for(p=b1.dx.f,o=p.length,f=0;f<p.length;p.length===o||(0,H.n)(p),++f){e=p[f]
a2=e.gaD()
d=a1.i(0,a2)
if(d==null)d=0
a1.m(0,a2,d+1)
c=J.ea(b1.a.bt.i(0,a2),d)
a3=h.P(0,e.gR(e))
n=e.gR(e)
b=$.bL
n=n.bG(b==null?$.bL=new V.a4(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=$.bL
n=a3.bG(n==null?$.bL=new V.a4(0,0,0):n)
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=e.gaS(e)
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
e.gak()
n=a3.cB(0)
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
i=new Float32Array(H.c8(new V.cG(b,a,a0,a4,a5,a6,a7,a8,n).a0(0,!0)))
a9.a.uniformMatrix3fv(a9.d,!1,i)
e.gak()
n=e.gak()
if(!C.a.K(l,n)){n.a=l.length
l.push(n)}n=e.gak()
b=n.gaH(n)
if(b){b=c.f
b.toString
a=n.gaH(n)
if(!a)b.a.uniform1i(b.d,0)
else{n=n.gff(n)
b.a.uniform1i(b.d,n)}}e.gaA()
n=e.gd3()
b=c.x
b.toString
a=n.gf5(n)
a0=n.gf6(n)
a4=n.gf7()
n=n.gf4()
b.a.uniform4f(b.d,a,a0,a4,n)
n=e.gaA()
if(!C.a.K(l,n)){n.a=l.length
l.push(n)}n=e.gaA()
b=n.gaH(n)
if(b){b=c.r
b.toString
a=n.gaH(n)
if(!a)b.a.uniform1i(b.d,0)
else{n=n.gff(n)
b.a.uniform1i(b.d,n)}}if(e.gfa()){n=e.geP()
b=c.y
b.a.uniform1f(b.d,n)
n=e.geQ()
b=c.z
b.a.uniform1f(b.d,n)
n=e.geR()
b=c.Q
b.a.uniform1f(b.d,n)}}for(p=b2.length,f=0;f<b2.length;b2.length===p||(0,H.n)(b2),++f){o=b2[f].a
k=a1.i(0,o)
if(k==null)k=0
o=b1.a.bs.i(0,o)
o.a.uniform1i(o.d,k)}}b2=s.ch
if(b2.length>0){p=b3.db
h=p.gR(p)
p=P.x
b0=new H.I([p,p])
for(p=b1.dx.r,o=p.length,f=0;f<p.length;p.length===o||(0,H.n)(p),++f){e=p[f]
a2=e.gaD()
d=b0.i(0,a2)
if(d==null)d=0
b0.m(0,a2,d+1)
c=J.ea(b1.a.bv.i(0,a2),d)
n=e.gfC(e)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=e.gfW(e).h6()
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=h.bG(e.gfC(e))
b=c.d
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=e.gaS(e)
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
e.gak()
n=e.gha()
b=c.f
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=e.gh7(e)
b=c.r
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=e.gh8()
b=c.x
b.a.uniform1f(b.d,n)
n=e.gh9()
b=c.y
b.a.uniform1f(b.d,n)
e.gak()
n=e.gak()
if(!C.a.K(l,n)){n.a=l.length
l.push(n)}n=e.gak()
b=n.gaH(n)
if(b){b=c.dx
b.toString
a=n.d
if(!a)b.a.uniform1i(b.d,0)
else{n=n.a
b.a.uniform1i(b.d,n)}}e.gaA()
n=e.gd3()
b=c.z
b.toString
a=n.gf5(n)
a0=n.gf6(n)
a4=n.gf7()
n=n.gf4()
b.a.uniform4f(b.d,a,a0,a4,n)
n=e.gaA()
if(!C.a.K(l,n)){n.a=l.length
l.push(n)}n=e.gaA()
b=n.gaH(n)
if(b){b=c.dy
b.toString
a=n.d
if(!a)b.a.uniform1i(b.d,0)
else{n=n.a
b.a.uniform1i(b.d,n)}}if(e.gfX()){n=e.gfV()
b=c.Q
b.a.uniform1f(b.d,n)
n=e.gfU()
b=c.ch
b.a.uniform1f(b.d,n)}if(e.gfa()){n=e.geP()
b=c.cx
b.a.uniform1f(b.d,n)
n=e.geQ()
b=c.cy
b.a.uniform1f(b.d,n)
n=e.geR()
b=c.db
b.a.uniform1f(b.d,n)}}for(p=b2.length,f=0;f<b2.length;b2.length===p||(0,H.n)(b2),++f){o=b2[f].a
k=b0.i(0,o)
if(k==null)k=0
o=b1.a.bu.i(0,o)
o.a.uniform1i(o.d,k)}}}if(s.f.b){b1.X(l,b1.Q.d)
b2=b1.a
p=b1.Q.d
b2.a1(b2.cq,p)}if(s.dx){b2=b1.a
p=b3.Q
if(p==null){p=b3.db
p=b3.Q=p.gR(p).cB(0)}b2=b2.id
b2.toString
b2.a4(p.a0(0,!0))}if(s.cy){b1.X(l,b1.ch)
b2=b1.a
p=b1.ch
b2.eD(b2.cr,p)
b2=s.r
if(b2.a){p=b1.a
o=b1.cx.f
p=p.cs
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b2.b){b1.X(l,b1.cx.d)
b2=b1.a
p=b1.cx.d
b2.a1(b2.ct,p)}b2=s.x
p=b2.a
if(p||b2.b||!1){o=b1.a
n=b1.cy.ch
o=o.cu
o.a.uniform1f(o.d,n)}if(p){p=b1.a
o=b1.cy.f
p=p.cv
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b2.b){b1.X(l,b1.cy.d)
b2=b1.a
p=b1.cy.d
b2.a1(b2.cw,p)}}b2=s.y
p=b2.a
o=!p
if(!o||b2.b||!1){if(p){p=b1.a
n=b1.db.f
p=p.cz
p.a.uniform1f(p.d,n)}if(b2.b){b1.X(l,b1.db.d)
p=b1.a
n=b1.db.d
p.a1(p.cA,n)}q.enable(3042)
q.blendFunc(770,771)}for(j=0;j<l.length;++j){p=l[j]
if(!p.c&&p.d){p.c=!0
q.activeTexture(33984+p.a)
q.bindTexture(3553,p.b)}}p=b4.e
p.bk(b3)
p.aw(b3)
p.fS(b3)
if(!o||b2.b||!1)q.disable(3042)
for(j=0;j<l.length;++j){b2=l[j]
if(b2.c){b2.c=!1
q.activeTexture(33984+b2.a)
q.bindTexture(3553,null)}}b2=b1.a
b2.toString
q.useProgram(null)
b2.x.f3()},
h:function(a){var u=this.a
if(u!=null)return u.b
else return this.bY().ag}}
O.fm.prototype={
$2:function(a,b){if(typeof b!=="number")return b.I()
return this.b.push(new A.cn(a,C.d.U(b+3,4)*4))}}
O.fn.prototype={
$2:function(a,b){return J.iZ(a.a,b.a)}}
O.fo.prototype={
$2:function(a,b){if(typeof b!=="number")return b.I()
return this.b.push(new A.cQ(a,C.d.U(b+3,4)*4))}}
O.fp.prototype={
$2:function(a,b){return J.iZ(a.a,b.a)}}
O.fq.prototype={
$2:function(a,b){if(typeof b!=="number")return b.I()
return this.b.push(new A.cX(a,C.d.U(b+3,4)*4))}}
O.fr.prototype={
$2:function(a,b){return J.iZ(a.a,b.a)}}
O.fg.prototype={
ae:function(){var u,t=this
t.bN()
u=t.f
if(!(Math.abs(u-1)<$.y().a)){t.f=1
u=new D.z(t.b,u,1)
u.b=!0
t.a.O(u)}}}
O.bF.prototype={
O:function(a){return this.a.O(a)},
b4:function(){return this.O(null)},
ae:function(){},
bh:function(a){var u,t,s=this
if(!s.c.p(0,a)){u=s.c
if(u.a||u.b||!1)t=!(a.a||a.b||!1)
else t=!0
s.c=a
if(t)s.ae()
u=s.a
u.a=null
u.O(null)}},
saX:function(a){var u,t=this,s=t.c
if(!s.b)t.bh(new A.O(s.a,!0,!1))
s=t.d
if(s!==a){if(s!=null)s.gv().F(0,t.gaO())
u=t.d
t.d=a
a.gv().n(0,t.gaO())
s=new D.z(t.b+".texture2D",u,t.d)
s.b=!0
t.a.O(s)}}}
O.fh.prototype={}
O.aa.prototype={
c6:function(a){var u,t,s=this
if(!s.f.p(0,a)){u=s.f
s.f=a
t=new D.z(s.b+".color",u,a)
t.b=!0
s.a.O(t)}},
ae:function(){this.bN()
this.c6(new V.N(1,1,1))},
saS:function(a,b){this.bh(new A.O(!0,this.c.b,!1))
this.c6(b)}}
O.fj.prototype={}
O.fk.prototype={
ae:function(){var u,t=this
t.bO()
u=t.ch
if(!(Math.abs(u-1)<$.y().a)){t.ch=1
u=new D.z(t.b+".refraction",u,1)
u.b=!0
t.a.O(u)}}}
O.fl.prototype={
c7:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.y().a)){u.ch=a
t=new D.z(u.b+".shininess",t,a)
t.b=!0
u.a.O(t)}},
ae:function(){this.bO()
this.c7(100)}}
O.d1.prototype={}
T.d2.prototype={}
T.hp.prototype={}
T.hq.prototype={
gv:function(){var u=this.y
return u==null?this.y=D.a_():u}}
T.hr.prototype={
bA:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=document.createElement("img")
u.src=a
t=new T.hq()
t.a=0
t.b=q
t.d=t.c=!1
W.M(u,"load",new T.hs(this,t,u,!1,q,!1,!1),!1)
return t},
eA:function(a,b,c){var u,t,s,r
b=V.ju(b)
u=V.ju(a.width)
t=V.ju(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.j2()
s.width=u
s.height=t
r=C.p.cZ(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.m9(r.getImageData(0,0,s.width,s.height))}}}
T.hs.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.eA(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.N.fM(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.f8()}++s.e}}
X.j1.prototype={}
X.eQ.prototype={
gv:function(){var u=this.x
return u==null?this.x=D.a_():u}}
X.cN.prototype={
gv:function(){var u=this.f
return u==null?this.f=D.a_():u},
an:function(a){var u=this.f
if(u!=null)u.N(a)},
dq:function(){return this.an(null)},
saJ:function(a){var u,t,s=this
if(!J.G(s.b,a)){u=s.b
if(u!=null)u.gv().F(0,s.gbT())
t=s.b
s.b=a
if(a!=null)a.gv().n(0,s.gbT())
u=new D.z("mover",t,s.b)
u.b=!0
s.an(u)}}}
X.hl.prototype={}
V.ck.prototype={
aN:function(a){this.b=new P.eV(C.G)
this.c=null
this.d=H.b([],[[P.a9,W.a3]])},
C:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)l.push(H.b([],[W.a3]))
u=a.split("\n")
for(l=u.length,t=[W.a3],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else m.d.push(H.b([],t))
p=document.createElement("div")
p.className="codePart"
o=m.b.dB(q,0,q.length)
n=o==null?q:o
C.E.d1(p,H.jw(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.gaV(m.d).push(p)}},
cK:function(a,b){var u,t,s,r,q=this
q.d=H.b([],[[P.a9,W.a3]])
u=C.a.k(b,"\n")
t=q.c
for(t=(t==null?q.c=q.aT():t).cV(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.n)(t),++r)q.aW(t[r])}}
V.iV.prototype={
$1:function(a){var u=C.c.cU(this.a.gfe(),2)
if(u!=="0.00")P.jv(u+" fps")}}
V.ev.prototype={
aW:function(a){var u=this
switch(a.a){case"Class":u.C(a.b,"#551")
break
case"Comment":u.C(a.b,"#777")
break
case"Id":u.C(a.b,"#111")
break
case"Num":u.C(a.b,"#191")
break
case"Reserved":u.C(a.b,"#119")
break
case"String":u.C(a.b,"#171")
break
case"Symbol":u.C(a.b,"#616")
break
case"Type":u.C(a.b,"#B11")
break
case"Whitespace":u.C(a.b,"#111")
break}},
aT:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=R.hw()
a1.c=a1.j(0,r)
u=a1.j(0,r).k(0,q)
t=T.m(new H.l("_"))
u.a.push(t)
t=T.E("a","z")
u.a.push(t)
t=T.E("A","Z")
u.a.push(t)
t=a1.j(0,q).k(0,q)
u=T.m(new H.l("_"))
t.a.push(u)
u=T.E("0","9")
t.a.push(u)
u=T.E("a","z")
t.a.push(u)
u=T.E("A","Z")
t.a.push(u)
u=a1.j(0,r).k(0,p)
t=T.E("0","9")
u.a.push(t)
t=a1.j(0,p).k(0,p)
u=T.E("0","9")
t.a.push(u)
u=a1.j(0,p).k(0,o)
t=T.m(new H.l("."))
u.a.push(t)
t=a1.j(0,o).k(0,n)
u=T.E("0","9")
t.a.push(u)
u=a1.j(0,n).k(0,n)
t=T.E("0","9")
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
a1.j(0,k).k(0,k).a.push(new T.ah())
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
a1.j(0,h).k(0,h).a.push(new T.ah())
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
t=new T.T()
s=[T.aL]
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
t=new T.T()
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
t.d=t.a.H("Num")
t=a1.j(0,n)
t.d=t.a.H("Num")
t=a1.j(0,m)
t.d=t.a.H("Symbol")
t=a1.j(0,j)
t.d=t.a.H("String")
t=a1.j(0,g)
t.d=t.a.H("String")
t=a1.j(0,c)
t.d=t.a.H(d)
t=a1.j(0,a0)
t.d=t.a.H(a0)
t=a1.j(0,q)
t=t.d=t.a.H(q)
u=[P.q]
t.aj(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aj(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aj(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.eS.prototype={
aW:function(a){var u=this
switch(a.a){case"Builtin":u.C(a.b,"#411")
break
case"Comment":u.C(a.b,"#777")
break
case"Id":u.C(a.b,"#111")
break
case"Num":u.C(a.b,"#191")
break
case"Preprocess":u.C(a.b,"#737")
break
case"Reserved":u.C(a.b,"#119")
break
case"Symbol":u.C(a.b,"#611")
break
case"Type":u.C(a.b,"#171")
break
case"Whitespace":u.C(a.b,"#111")
break}},
aT:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=R.hw()
e.c=e.j(0,r)
u=e.j(0,r).k(0,q)
t=T.m(new H.l("_"))
u.a.push(t)
t=T.E("a","z")
u.a.push(t)
t=T.E("A","Z")
u.a.push(t)
t=e.j(0,q).k(0,q)
u=T.m(new H.l("_"))
t.a.push(u)
u=T.E("0","9")
t.a.push(u)
u=T.E("a","z")
t.a.push(u)
u=T.E("A","Z")
t.a.push(u)
u=e.j(0,r).k(0,p)
t=T.E("0","9")
u.a.push(t)
t=e.j(0,p).k(0,p)
u=T.E("0","9")
t.a.push(u)
u=e.j(0,p).k(0,o)
t=T.m(new H.l("."))
u.a.push(t)
t=e.j(0,o).k(0,n)
u=T.E("0","9")
t.a.push(u)
u=e.j(0,n).k(0,n)
t=T.E("0","9")
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
e.j(0,k).k(0,m).a.push(new T.ah())
t=e.j(0,j).k(0,i)
u=T.m(new H.l("\n"))
t.a.push(u)
u=e.j(0,j).k(0,j)
t=new T.T()
s=[T.aL]
t.a=H.b([],s)
u.a.push(t)
u=T.m(new H.l("\n"))
t.a.push(u)
u=e.j(0,r).k(0,h)
t=T.m(new H.l("#"))
u.a.push(t)
t=e.j(0,h).k(0,h)
u=new T.T()
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
u.d=u.a.H("Num")
u=e.j(0,n)
u.d=u.a.H("Num")
u=e.j(0,m)
u.d=u.a.H("Symbol")
u=e.j(0,i)
u.d=u.a.H(j)
u=e.j(0,g)
u.d=u.a.H(h)
u=e.j(0,f)
u.d=u.a.H(f)
u=e.j(0,q)
u=u.d=u.a.H(q)
t=[P.q]
u.aj(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aj(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aj(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return e}}
V.eT.prototype={
aW:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.C(a.b,"#911")
u.C("=",t)
break
case"Id":u.C(a.b,t)
break
case"Other":u.C(a.b,t)
break
case"Reserved":u.C(a.b,"#119")
break
case"String":u.C(a.b,"#171")
break
case"Symbol":u.C(a.b,"#616")
break}},
aT:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=R.hw()
l.c=l.j(0,s)
u=l.j(0,s).k(0,r)
t=T.m(new H.l("_"))
u.a.push(t)
t=T.E("a","z")
u.a.push(t)
t=T.E("A","Z")
u.a.push(t)
t=l.j(0,r).k(0,r)
u=T.m(new H.l("_"))
t.a.push(u)
u=T.E("0","9")
t.a.push(u)
u=T.E("a","z")
t.a.push(u)
u=T.E("A","Z")
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
l.j(0,o).k(0,o).a.push(new T.ah())
l.j(0,s).k(0,m).a.push(new T.ah())
u=l.j(0,m).k(0,m)
t=new T.T()
t.a=H.b([],[T.aL])
u.a.push(t)
u=T.m(new H.l('</\\-!>=_"'))
t.a.push(u)
u=T.E("a","z")
t.a.push(u)
u=T.E("A","Z")
t.a.push(u)
u=l.j(0,p)
u.d=u.a.H("Symbol")
u=l.j(0,n)
u.d=u.a.H("String")
u=l.j(0,r)
t=u.a.H(r)
u.d=t
t.aj(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.q]))
t=l.j(0,q)
t.d=t.a.H(q)
t=l.j(0,m)
t.d=t.a.H(m)
return l}}
V.fO.prototype={
cK:function(a,b){this.d=H.b([],[[P.a9,W.a3]])
this.C(C.a.k(b,"\n"),"#111")},
aW:function(a){},
aT:function(){return}}
V.h5.prototype={
dg:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.M(q,"scroll",new V.h7(o),!1)},
cd:function(a){var u,t,s,r,q,p,o,n,m,l,k
this.eI()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.cV(C.a.fi(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){p=s[q]
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
if(H.mv(n,"|",0)){m=n.split("|")
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
cY:function(a){var u,t,s,r=new V.ev("dart")
r.aN("dart")
u=new V.eS("glsl")
u.aN("glsl")
t=new V.eT("html")
t.aN("html")
s=C.a.fd(H.b([r,u,t],[V.ck]),new V.h8(a))
if(s!=null)return s
r=new V.fO("plain")
r.aN("plain")
return r},
cb:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.b([],[P.x])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(J.jo(s).b2(s,"+")){b0[t]=C.b.aa(s,1)
a6.push(1)
u=!0}else if(C.b.b2(s,"-")){b0[t]=C.b.aa(s,1)
a6.push(-1)
u=!0}else a6.push(0)}r=this.cY(a8)
r.cK(0,b0)
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
for(g=s.length,a=0;a<s.length;s.length===g||(0,H.n)(s),++a)b.appendChild(s[a])
f.appendChild(e)
f.appendChild(d)
f.appendChild(b)
o.appendChild(f)}else for(g=r.d,a0=g.length,a1=a9,a=0;a<g.length;g.length===a0||(0,H.n)(g),++a){s=g[a]
f=q.createElement("tr")
f.className=a3
e=q.createElement("td")
e.className=a4;++a1
e.textContent=""+a1
d=q.createElement("td")
d.className=a5
for(a2=C.a.gM(s);a2.t();)d.appendChild(a2.gD(a2))
f.appendChild(e)
f.appendChild(d)
o.appendChild(f)}},
eI:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=R.hw()
u.c=u.j(0,q)
t=u.j(0,q).k(0,p)
s=T.m(new H.l("*"))
t.a.push(s)
t.c=!0
t=u.j(0,p).k(0,p)
s=new T.T()
r=[T.aL]
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
s=new T.T()
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
s=new T.T()
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
t=new T.T()
t.a=H.b([],r)
s.a.push(t)
s=T.m(new H.l("|]"))
t.a.push(s)
s=u.j(0,k).k(0,j)
t=T.m(new H.l("]"))
s.a.push(t)
s.c=!0
s=u.j(0,k).k(0,k)
t=new T.T()
t.a=H.b([],r)
s.a.push(t)
s=T.m(new H.l("|]"))
t.a.push(s)
u.j(0,q).k(0,i).a.push(new T.ah())
s=u.j(0,i).k(0,i)
t=new T.T()
t.a=H.b([],r)
s.a.push(t)
s=T.m(new H.l("*_`["))
t.a.push(s)
s=u.j(0,"BoldEnd")
s.d=s.a.H(p)
s=u.j(0,n)
s.d=s.a.H(o)
s=u.j(0,"CodeEnd")
s.d=s.a.H(m)
s=u.j(0,j)
s.d=s.a.H("Link")
s=u.j(0,i)
s.d=s.a.H(i)
this.b=u}}
V.h7.prototype={
$1:function(a){P.k3(C.h,new V.h6(this.a))}}
V.h6.prototype={
$0:function(){var u=C.c.a2(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
V.h8.prototype={
$1:function(a){return a.a===this.a}}
F.iT.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.a,r=[P.q]
u.cb("Vertex Shader","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
t=t.a
u.cb("Fragment Shader","glsl",0,H.b((t==null?null:t.d).split("\n"),r))}};(function aliases(){var u=J.a.prototype
u.d6=u.h
u=J.cy.prototype
u.d8=u.h
u=P.j.prototype
u.d7=u.b_
u=W.J.prototype
u.b3=u.Y
u=W.dI.prototype
u.d9=u.a7
u=T.cu.prototype
u.d5=u.ah
u.bM=u.h
u=O.bF.prototype
u.bN=u.ae
u=O.aa.prototype
u.bO=u.ae})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"m3","ls",5)
u(P,"m4","lt",5)
u(P,"m5","lu",5)
t(P,"kj","m1",8)
s(W,"mi",4,null,["$4"],["lv"],13,0)
s(W,"mj",4,null,["$4"],["lw"],13,0)
var m
r(m=E.aE.prototype,"gcI",0,0,null,["$1","$0"],["cJ","fs"],0,0)
r(m,"gcG",0,0,null,["$1","$0"],["cH","fq"],0,0)
r(m,"gcE",0,0,null,["$1","$0"],["cF","fn"],0,0)
q(m,"gfl","fm",2)
q(m,"gfo","fp",2)
r(m=E.d3.prototype,"gbQ",0,0,null,["$1","$0"],["bS","bR"],0,0)
p(m,"gfI","cQ",8)
o(m=X.db.prototype,"ge0","e1",3)
o(m,"gdP","dQ",3)
o(m,"gdV","dW",1)
o(m,"ge4","e5",9)
o(m,"ge2","e3",9)
o(m,"ge8","e9",1)
o(m,"gec","ed",1)
o(m,"gdZ","e_",1)
o(m,"gea","eb",1)
o(m,"gdX","dY",1)
o(m,"gee","ef",15)
o(m,"geg","eh",3)
o(m,"ger","es",4)
o(m,"gen","eo",4)
o(m,"gep","eq",4)
r(D.b6.prototype,"gdi",0,0,null,["$1","$0"],["ab","dj"],0,0)
r(m=D.cA.prototype,"gc2",0,0,null,["$1","$0"],["c3","e6"],0,0)
o(m,"gej","ek",16)
q(m,"gdJ","dK",10)
q(m,"gel","em",10)
n(V.aq.prototype,"gl","by",11)
n(V.w.prototype,"gl","by",11)
r(m=M.cq.prototype,"ga5",0,0,null,["$1","$0"],["ac","dk"],0,0)
q(m,"gdR","dS",2)
q(m,"gdT","dU",2)
r(m=O.cF.prototype,"gaO",0,0,null,["$1","$0"],["O","b4"],0,0)
r(m,"gey",0,0,null,["$1","$0"],["c4","ez"],0,0)
q(m,"gdL","dM",12)
q(m,"gdN","dO",12)
r(O.bF.prototype,"gaO",0,0,null,["$1","$0"],["O","b4"],0,0)
r(X.cN.prototype,"gbT",0,0,null,["$1","$0"],["an","dq"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.Q,null)
s(P.Q,[H.ja,J.a,J.Y,P.dv,P.j,H.bE,P.eZ,H.cs,H.hN,H.hB,P.b7,H.bv,H.dN,P.aj,H.f5,H.f6,H.f0,P.dT,P.dd,P.d_,P.hh,P.d4,P.iF,P.it,P.im,P.du,P.p,P.en,P.eW,P.iD,P.ag,P.aC,P.a6,P.aD,P.fM,P.cY,P.dl,P.eP,P.eR,P.a9,P.cE,P.aN,P.q,P.an,W.er,W.bZ,W.B,W.cL,W.dI,W.iy,W.ct,W.am,W.is,W.dZ,P.dY,P.io,T.ah,T.cu,T.aL,T.fS,T.h0,R.cZ,R.d5,R.d6,R.hv,O.b5,O.bG,E.ej,E.aE,E.fT,E.d3,Z.dc,Z.i6,Z.ci,Z.ba,Z.ar,D.em,D.b8,D.S,X.cj,X.cz,X.f2,X.f9,X.bH,X.fy,X.hx,X.db,D.b6,D.W,D.fQ,D.hc,V.N,V.aA,V.eF,V.cG,V.ak,V.ac,V.a4,V.cP,V.cS,V.aq,V.w,M.cq,A.cf,A.ee,A.O,A.cn,A.cQ,A.cX,A.fi,A.bS,A.bU,A.bV,A.d8,A.hJ,F.b9,F.eI,F.bD,F.f4,F.bK,F.h1,F.h2,F.h3,F.h4,F.bk,F.hV,F.hW,F.hZ,F.i0,F.i1,F.i2,O.d1,O.bF,O.fj,T.hr,X.j1,X.hl,X.cN,V.ck,V.h5])
s(J.a,[J.f_,J.cx,J.cy,J.aI,J.bC,J.aJ,H.bJ,W.d,W.eb,W.cg,W.a8,W.A,W.df,W.Z,W.ew,W.ex,W.dh,W.cp,W.dj,W.ez,W.h,W.dm,W.aG,W.eU,W.dq,W.aH,W.f8,W.fs,W.dw,W.dx,W.aM,W.dy,W.dB,W.aO,W.dF,W.dH,W.aQ,W.dJ,W.aR,W.dO,W.ao,W.dR,W.hu,W.aT,W.dU,W.hz,W.hP,W.e_,W.e1,W.e3,W.e5,W.e7,P.bc,P.ds,P.bd,P.dD,P.fR,P.dP,P.bh,P.dW,P.ef,P.de,P.cT,P.dL])
s(J.cy,[J.fN,J.bj,J.aK])
t(J.j9,J.aI)
s(J.bC,[J.cw,J.cv])
t(P.f7,P.dv)
s(P.f7,[H.da,W.id,W.R,P.eL])
t(H.l,H.da)
s(P.j,[H.eC,H.fc,H.bX])
s(H.eC,[H.cD,H.cB])
s(P.eZ,[H.fd,H.i7])
t(H.fe,H.cD)
s(P.b7,[H.fJ,H.f1,H.hM,H.el,H.fZ,P.cM,P.a2,P.hO,P.hL,P.bP,P.eo,P.eu])
s(H.bv,[H.iY,H.hm,H.iP,H.iQ,H.iR,P.i9,P.i8,P.ia,P.ib,P.iC,P.iB,P.iK,P.iq,P.ir,P.fb,P.eA,P.eB,W.eD,W.fu,W.fw,W.fY,W.hg,W.ii,W.fH,W.fG,W.iu,W.iv,W.iA,W.iE,P.iL,P.eM,P.eN,P.eh,E.fU,E.fV,E.fW,E.ht,D.eG,D.eH,F.iG,F.i4,F.i3,F.hX,F.hY,O.fm,O.fn,O.fo,O.fp,O.fq,O.fr,T.hs,V.iV,V.h7,V.h6,V.h8,F.iT])
s(H.hm,[H.he,H.bt])
t(P.fa,P.aj)
s(P.fa,[H.I,W.ic])
t(H.cH,H.bJ)
s(H.cH,[H.c_,H.c1])
t(H.c0,H.c_)
t(H.bI,H.c0)
t(H.c2,H.c1)
t(H.cI,H.c2)
s(H.cI,[H.fA,H.fB,H.fC,H.fD,H.fE,H.cJ,H.fF])
t(P.ip,P.iF)
t(P.il,P.it)
t(P.ep,P.hh)
t(P.eE,P.en)
s(P.ep,[P.eV,P.hR])
t(P.hQ,P.eE)
s(P.a6,[P.H,P.x])
s(P.a2,[P.bf,P.eX])
s(W.d,[W.D,W.eK,W.aP,W.c3,W.aS,W.ap,W.c5,W.i5,W.bY,P.ei,P.b2])
s(W.D,[W.J,W.az])
s(W.J,[W.k,P.i])
s(W.k,[W.ec,W.ed,W.b3,W.b4,W.a3,W.eO,W.bz,W.h_,W.d0,W.hj,W.hk,W.bQ])
t(W.eq,W.a8)
t(W.bw,W.df)
s(W.Z,[W.es,W.et])
t(W.di,W.dh)
t(W.co,W.di)
t(W.dk,W.dj)
t(W.ey,W.dk)
t(W.aF,W.cg)
t(W.dn,W.dm)
t(W.eJ,W.dn)
t(W.dr,W.dq)
t(W.by,W.dr)
t(W.aU,W.h)
s(W.aU,[W.bb,W.ab,W.bg])
t(W.ft,W.dw)
t(W.fv,W.dx)
t(W.dz,W.dy)
t(W.fx,W.dz)
t(W.dC,W.dB)
t(W.cK,W.dC)
t(W.dG,W.dF)
t(W.fP,W.dG)
t(W.fX,W.dH)
t(W.c4,W.c3)
t(W.ha,W.c4)
t(W.dK,W.dJ)
t(W.hb,W.dK)
t(W.hf,W.dO)
t(W.dS,W.dR)
t(W.hn,W.dS)
t(W.c6,W.c5)
t(W.ho,W.c6)
t(W.dV,W.dU)
t(W.hy,W.dV)
t(W.aV,W.ab)
t(W.e0,W.e_)
t(W.ie,W.e0)
t(W.dg,W.cp)
t(W.e2,W.e1)
t(W.ij,W.e2)
t(W.e4,W.e3)
t(W.dA,W.e4)
t(W.e6,W.e5)
t(W.iw,W.e6)
t(W.e8,W.e7)
t(W.ix,W.e8)
t(W.ig,W.ic)
t(W.ih,P.d_)
t(W.iz,W.dI)
t(P.ae,P.io)
t(P.dt,P.ds)
t(P.f3,P.dt)
t(P.dE,P.dD)
t(P.fK,P.dE)
t(P.bO,P.i)
t(P.dQ,P.dP)
t(P.hi,P.dQ)
t(P.dX,P.dW)
t(P.hA,P.dX)
t(P.eg,P.de)
t(P.fL,P.b2)
t(P.dM,P.dL)
t(P.hd,P.dM)
s(T.cu,[T.T,R.d7])
s(E.ej,[Z.ch,A.cV,T.d2])
s(D.S,[D.bA,D.bB,D.z])
t(D.cA,O.b5)
t(U.fz,D.em)
s(U.fz,[U.cl,U.cU])
t(A.ff,A.cV)
s(A.d8,[A.d9,A.hG,A.hH,A.hI,A.hE,A.L,A.hF,A.F,A.bR,A.hK,A.bT,A.a0,A.P,A.bi])
t(F.h9,F.eI)
t(F.hD,F.f4)
t(F.i_,F.i0)
t(F.fI,F.i1)
t(O.cF,O.d1)
s(O.bF,[O.fg,O.fh,O.aa])
s(O.aa,[O.fk,O.fl])
t(T.hp,T.d2)
t(T.hq,T.hp)
t(X.eQ,X.hl)
s(V.ck,[V.ev,V.eS,V.eT,V.fO])
u(H.da,H.hN)
u(H.c_,P.p)
u(H.c0,H.cs)
u(H.c1,P.p)
u(H.c2,H.cs)
u(P.dv,P.p)
u(W.df,W.er)
u(W.dh,P.p)
u(W.di,W.B)
u(W.dj,P.p)
u(W.dk,W.B)
u(W.dm,P.p)
u(W.dn,W.B)
u(W.dq,P.p)
u(W.dr,W.B)
u(W.dw,P.aj)
u(W.dx,P.aj)
u(W.dy,P.p)
u(W.dz,W.B)
u(W.dB,P.p)
u(W.dC,W.B)
u(W.dF,P.p)
u(W.dG,W.B)
u(W.dH,P.aj)
u(W.c3,P.p)
u(W.c4,W.B)
u(W.dJ,P.p)
u(W.dK,W.B)
u(W.dO,P.aj)
u(W.dR,P.p)
u(W.dS,W.B)
u(W.c5,P.p)
u(W.c6,W.B)
u(W.dU,P.p)
u(W.dV,W.B)
u(W.e_,P.p)
u(W.e0,W.B)
u(W.e1,P.p)
u(W.e2,W.B)
u(W.e3,P.p)
u(W.e4,W.B)
u(W.e5,P.p)
u(W.e6,W.B)
u(W.e7,P.p)
u(W.e8,W.B)
u(P.ds,P.p)
u(P.dt,W.B)
u(P.dD,P.p)
u(P.dE,W.B)
u(P.dP,P.p)
u(P.dQ,W.B)
u(P.dW,P.p)
u(P.dX,W.B)
u(P.de,P.aj)
u(P.dL,P.p)
u(P.dM,W.B)})()
var v={mangledGlobalNames:{x:"int",H:"double",a6:"num",q:"String",ag:"bool",aN:"Null",a9:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.S]},{func:1,ret:-1,args:[W.ab]},{func:1,ret:-1,args:[P.x,[P.j,E.aE]]},{func:1,ret:-1,args:[W.h]},{func:1,ret:-1,args:[W.bg]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.aN,args:[,,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bb]},{func:1,ret:-1,args:[P.x,[P.j,D.W]]},{func:1,ret:P.H},{func:1,ret:-1,args:[P.x,[P.j,V.ak]]},{func:1,ret:P.ag,args:[W.J,P.q,P.q,W.bZ]},{func:1,ret:P.aN,args:[,]},{func:1,ret:-1,args:[W.aV]},{func:1,ret:P.ag,args:[[P.j,D.W]]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.m=W.b3.prototype
C.p=W.b4.prototype
C.E=W.a3.prototype
C.H=J.a.prototype
C.a=J.aI.prototype
C.I=J.cv.prototype
C.d=J.cw.prototype
C.i=J.cx.prototype
C.c=J.bC.prototype
C.b=J.aJ.prototype
C.J=J.aK.prototype
C.r=J.fN.prototype
C.N=P.cT.prototype
C.t=W.d0.prototype
C.l=J.bj.prototype
C.u=W.aV.prototype
C.v=W.bY.prototype
C.n=function getTagFallback(o) {
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
C.o=function(hooks) { return hooks; }

C.C=new P.fM()
C.f=new P.hQ()
C.D=new P.hR()
C.e=new P.ip()
C.h=new P.aD(0)
C.F=new P.aD(5e6)
C.G=new P.eW("element",!1,!1,!1)
C.K=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.q])
C.L=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.q])
C.M=H.b(u([]),[P.q])
C.q=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.x])
C.j=H.b(u(["bind","if","ref","repeat","syntax"]),[P.q])
C.k=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.q])})();(function staticFields(){$.a7=0
$.bu=null
$.jD=null
$.kl=null
$.ki=null
$.ko=null
$.iM=null
$.iS=null
$.js=null
$.bl=null
$.c9=null
$.ca=null
$.jk=!1
$.a5=C.e
$.U=[]
$.ai=null
$.j5=null
$.jJ=null
$.jI=null
$.dp=P.jL(P.q,P.eR)
$.jQ=null
$.jT=null
$.bL=null
$.jZ=null
$.k7=null
$.k9=null
$.hS=null
$.hT=null
$.hU=null
$.k8=null
$.jS=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"mC","ks",function(){return H.kk("_$dart_dartClosure")})
u($,"mD","jy",function(){return H.kk("_$dart_js")})
u($,"mE","kt",function(){return H.af(H.hC({
toString:function(){return"$receiver$"}}))})
u($,"mF","ku",function(){return H.af(H.hC({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"mG","kv",function(){return H.af(H.hC(null))})
u($,"mH","kw",function(){return H.af(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mK","kz",function(){return H.af(H.hC(void 0))})
u($,"mL","kA",function(){return H.af(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mJ","ky",function(){return H.af(H.k5(null))})
u($,"mI","kx",function(){return H.af(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"mN","kC",function(){return H.af(H.k5(void 0))})
u($,"mM","kB",function(){return H.af(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"n_","jz",function(){return P.lr()})
u($,"n1","kH",function(){return P.lf("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"n0","kG",function(){return P.jM(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.q)})
u($,"mU","kF",function(){return Z.a1(0)})
u($,"mO","kD",function(){return Z.a1(511)})
u($,"mW","ax",function(){return Z.a1(1)})
u($,"mV","aw",function(){return Z.a1(2)})
u($,"mQ","av",function(){return Z.a1(4)})
u($,"mX","ay",function(){return Z.a1(8)})
u($,"mY","b_",function(){return Z.a1(16)})
u($,"mR","cc",function(){return Z.a1(32)})
u($,"mS","cd",function(){return Z.a1(64)})
u($,"mT","kE",function(){return Z.a1(96)})
u($,"mZ","bs",function(){return Z.a1(128)})
u($,"mP","au",function(){return Z.a1(256)})
u($,"mB","kr",function(){return new V.eF(1e-9)})
u($,"mA","y",function(){return $.kr()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.bJ,ArrayBufferView:H.bJ,Float32Array:H.bI,Float64Array:H.bI,Int16Array:H.fA,Int32Array:H.fB,Int8Array:H.fC,Uint16Array:H.fD,Uint32Array:H.fE,Uint8ClampedArray:H.cJ,CanvasPixelArray:H.cJ,Uint8Array:H.fF,HTMLAudioElement:W.k,HTMLBRElement:W.k,HTMLBaseElement:W.k,HTMLButtonElement:W.k,HTMLContentElement:W.k,HTMLDListElement:W.k,HTMLDataElement:W.k,HTMLDataListElement:W.k,HTMLDetailsElement:W.k,HTMLDialogElement:W.k,HTMLEmbedElement:W.k,HTMLFieldSetElement:W.k,HTMLHRElement:W.k,HTMLHeadElement:W.k,HTMLHeadingElement:W.k,HTMLHtmlElement:W.k,HTMLIFrameElement:W.k,HTMLInputElement:W.k,HTMLLIElement:W.k,HTMLLabelElement:W.k,HTMLLegendElement:W.k,HTMLLinkElement:W.k,HTMLMapElement:W.k,HTMLMediaElement:W.k,HTMLMenuElement:W.k,HTMLMetaElement:W.k,HTMLMeterElement:W.k,HTMLModElement:W.k,HTMLOListElement:W.k,HTMLObjectElement:W.k,HTMLOptGroupElement:W.k,HTMLOptionElement:W.k,HTMLOutputElement:W.k,HTMLParagraphElement:W.k,HTMLParamElement:W.k,HTMLPictureElement:W.k,HTMLPreElement:W.k,HTMLProgressElement:W.k,HTMLQuoteElement:W.k,HTMLScriptElement:W.k,HTMLShadowElement:W.k,HTMLSlotElement:W.k,HTMLSourceElement:W.k,HTMLSpanElement:W.k,HTMLStyleElement:W.k,HTMLTableCaptionElement:W.k,HTMLTableCellElement:W.k,HTMLTableDataCellElement:W.k,HTMLTableHeaderCellElement:W.k,HTMLTableColElement:W.k,HTMLTextAreaElement:W.k,HTMLTimeElement:W.k,HTMLTitleElement:W.k,HTMLTrackElement:W.k,HTMLUListElement:W.k,HTMLUnknownElement:W.k,HTMLVideoElement:W.k,HTMLDirectoryElement:W.k,HTMLFontElement:W.k,HTMLFrameElement:W.k,HTMLFrameSetElement:W.k,HTMLMarqueeElement:W.k,HTMLElement:W.k,AccessibleNodeList:W.eb,HTMLAnchorElement:W.ec,HTMLAreaElement:W.ed,Blob:W.cg,HTMLBodyElement:W.b3,HTMLCanvasElement:W.b4,CDATASection:W.az,CharacterData:W.az,Comment:W.az,ProcessingInstruction:W.az,Text:W.az,CSSPerspective:W.eq,CSSCharsetRule:W.A,CSSConditionRule:W.A,CSSFontFaceRule:W.A,CSSGroupingRule:W.A,CSSImportRule:W.A,CSSKeyframeRule:W.A,MozCSSKeyframeRule:W.A,WebKitCSSKeyframeRule:W.A,CSSKeyframesRule:W.A,MozCSSKeyframesRule:W.A,WebKitCSSKeyframesRule:W.A,CSSMediaRule:W.A,CSSNamespaceRule:W.A,CSSPageRule:W.A,CSSRule:W.A,CSSStyleRule:W.A,CSSSupportsRule:W.A,CSSViewportRule:W.A,CSSStyleDeclaration:W.bw,MSStyleCSSProperties:W.bw,CSS2Properties:W.bw,CSSImageValue:W.Z,CSSKeywordValue:W.Z,CSSNumericValue:W.Z,CSSPositionValue:W.Z,CSSResourceValue:W.Z,CSSUnitValue:W.Z,CSSURLImageValue:W.Z,CSSStyleValue:W.Z,CSSMatrixComponent:W.a8,CSSRotation:W.a8,CSSScale:W.a8,CSSSkew:W.a8,CSSTranslation:W.a8,CSSTransformComponent:W.a8,CSSTransformValue:W.es,CSSUnparsedValue:W.et,DataTransferItemList:W.ew,HTMLDivElement:W.a3,DOMException:W.ex,ClientRectList:W.co,DOMRectList:W.co,DOMRectReadOnly:W.cp,DOMStringList:W.ey,DOMTokenList:W.ez,Element:W.J,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.aF,FileList:W.eJ,FileWriter:W.eK,HTMLFormElement:W.eO,Gamepad:W.aG,History:W.eU,HTMLCollection:W.by,HTMLFormControlsCollection:W.by,HTMLOptionsCollection:W.by,ImageData:W.aH,HTMLImageElement:W.bz,KeyboardEvent:W.bb,Location:W.f8,MediaList:W.fs,MIDIInputMap:W.ft,MIDIOutputMap:W.fv,MimeType:W.aM,MimeTypeArray:W.fx,PointerEvent:W.ab,MouseEvent:W.ab,DragEvent:W.ab,Document:W.D,DocumentFragment:W.D,HTMLDocument:W.D,ShadowRoot:W.D,XMLDocument:W.D,Attr:W.D,DocumentType:W.D,Node:W.D,NodeList:W.cK,RadioNodeList:W.cK,Plugin:W.aO,PluginArray:W.fP,RTCStatsReport:W.fX,HTMLSelectElement:W.h_,SourceBuffer:W.aP,SourceBufferList:W.ha,SpeechGrammar:W.aQ,SpeechGrammarList:W.hb,SpeechRecognitionResult:W.aR,Storage:W.hf,CSSStyleSheet:W.ao,StyleSheet:W.ao,HTMLTableElement:W.d0,HTMLTableRowElement:W.hj,HTMLTableSectionElement:W.hk,HTMLTemplateElement:W.bQ,TextTrack:W.aS,TextTrackCue:W.ap,VTTCue:W.ap,TextTrackCueList:W.hn,TextTrackList:W.ho,TimeRanges:W.hu,Touch:W.aT,TouchEvent:W.bg,TouchList:W.hy,TrackDefaultList:W.hz,CompositionEvent:W.aU,FocusEvent:W.aU,TextEvent:W.aU,UIEvent:W.aU,URL:W.hP,VideoTrackList:W.i5,WheelEvent:W.aV,Window:W.bY,DOMWindow:W.bY,CSSRuleList:W.ie,ClientRect:W.dg,DOMRect:W.dg,GamepadList:W.ij,NamedNodeMap:W.dA,MozNamedAttrMap:W.dA,SpeechRecognitionResultList:W.iw,StyleSheetList:W.ix,SVGLength:P.bc,SVGLengthList:P.f3,SVGNumber:P.bd,SVGNumberList:P.fK,SVGPointList:P.fR,SVGScriptElement:P.bO,SVGStringList:P.hi,SVGAElement:P.i,SVGAnimateElement:P.i,SVGAnimateMotionElement:P.i,SVGAnimateTransformElement:P.i,SVGAnimationElement:P.i,SVGCircleElement:P.i,SVGClipPathElement:P.i,SVGDefsElement:P.i,SVGDescElement:P.i,SVGDiscardElement:P.i,SVGEllipseElement:P.i,SVGFEBlendElement:P.i,SVGFEColorMatrixElement:P.i,SVGFEComponentTransferElement:P.i,SVGFECompositeElement:P.i,SVGFEConvolveMatrixElement:P.i,SVGFEDiffuseLightingElement:P.i,SVGFEDisplacementMapElement:P.i,SVGFEDistantLightElement:P.i,SVGFEFloodElement:P.i,SVGFEFuncAElement:P.i,SVGFEFuncBElement:P.i,SVGFEFuncGElement:P.i,SVGFEFuncRElement:P.i,SVGFEGaussianBlurElement:P.i,SVGFEImageElement:P.i,SVGFEMergeElement:P.i,SVGFEMergeNodeElement:P.i,SVGFEMorphologyElement:P.i,SVGFEOffsetElement:P.i,SVGFEPointLightElement:P.i,SVGFESpecularLightingElement:P.i,SVGFESpotLightElement:P.i,SVGFETileElement:P.i,SVGFETurbulenceElement:P.i,SVGFilterElement:P.i,SVGForeignObjectElement:P.i,SVGGElement:P.i,SVGGeometryElement:P.i,SVGGraphicsElement:P.i,SVGImageElement:P.i,SVGLineElement:P.i,SVGLinearGradientElement:P.i,SVGMarkerElement:P.i,SVGMaskElement:P.i,SVGMetadataElement:P.i,SVGPathElement:P.i,SVGPatternElement:P.i,SVGPolygonElement:P.i,SVGPolylineElement:P.i,SVGRadialGradientElement:P.i,SVGRectElement:P.i,SVGSetElement:P.i,SVGStopElement:P.i,SVGStyleElement:P.i,SVGSVGElement:P.i,SVGSwitchElement:P.i,SVGSymbolElement:P.i,SVGTSpanElement:P.i,SVGTextContentElement:P.i,SVGTextElement:P.i,SVGTextPathElement:P.i,SVGTextPositioningElement:P.i,SVGTitleElement:P.i,SVGUseElement:P.i,SVGViewElement:P.i,SVGGradientElement:P.i,SVGComponentTransferFunctionElement:P.i,SVGFEDropShadowElement:P.i,SVGMPathElement:P.i,SVGElement:P.i,SVGTransform:P.bh,SVGTransformList:P.hA,AudioBuffer:P.ef,AudioParamMap:P.eg,AudioTrackList:P.ei,AudioContext:P.b2,webkitAudioContext:P.b2,BaseAudioContext:P.b2,OfflineAudioContext:P.fL,WebGL2RenderingContext:P.cT,SQLResultSetRowList:P.hd})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.cH.$nativeSuperclassTag="ArrayBufferView"
H.c_.$nativeSuperclassTag="ArrayBufferView"
H.c0.$nativeSuperclassTag="ArrayBufferView"
H.bI.$nativeSuperclassTag="ArrayBufferView"
H.c1.$nativeSuperclassTag="ArrayBufferView"
H.c2.$nativeSuperclassTag="ArrayBufferView"
H.cI.$nativeSuperclassTag="ArrayBufferView"
W.c3.$nativeSuperclassTag="EventTarget"
W.c4.$nativeSuperclassTag="EventTarget"
W.c5.$nativeSuperclassTag="EventTarget"
W.c6.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(F.km,[])
else F.km([])})})()
//# sourceMappingURL=test.dart.js.map
