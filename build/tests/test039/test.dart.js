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
a[c]=function(){a[c]=function(){H.lB(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.iF"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.iF"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.iF(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={it:function it(){},
iW:function(){return new P.fH("No element")},
cD:function(a,b,c,d){if(c-b<=32)H.kr(a,b,c,d)
else H.kq(a,b,c,d)},
kr:function(a,b,c,d){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.b(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.b(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.R()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.b(a,q)
C.a.k(a,s,a[q])
s=q}C.a.k(a,s,t)}},
kq:function(a2,a3,a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.d.S(a4-a3+1,6),d=a3+e,c=a4-e,b=C.d.S(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
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
if(typeof a1!=="number")return a1.R()
if(a1>0){p=t
t=u
u=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.R()
if(a1>0){p=q
q=r
r=p}a1=a5.$2(u,s)
if(typeof a1!=="number")return a1.R()
if(a1>0){p=s
s=u
u=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.R()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(u,r)
if(typeof a1!=="number")return a1.R()
if(a1>0){p=r
r=u
u=p}a1=a5.$2(s,r)
if(typeof a1!=="number")return a1.R()
if(a1>0){p=r
r=s
s=p}a1=a5.$2(t,q)
if(typeof a1!=="number")return a1.R()
if(a1>0){p=q
q=t
t=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.R()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.R()
if(a1>0){p=q
q=r
r=p}C.a.k(a2,d,u)
C.a.k(a2,b,s)
C.a.k(a2,c,q)
if(a3<0||a3>=a2.length)return H.b(a2,a3)
C.a.k(a2,a,a2[a3])
if(a4<0||a4>=a2.length)return H.b(a2,a4)
C.a.k(a2,a0,a2[a4])
o=a3+1
n=a4-1
if(J.C(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.ar()
if(k<0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.a.k(a2,m,a2[o])
C.a.k(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.R()
if(k>0){--n
continue}else{j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.b(a2,o)
C.a.k(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.b(a2,n)
C.a.k(a2,o,a2[n])
C.a.k(a2,n,l)
n=j
o=i
break}else{if(n>=a1)return H.b(a2,n)
C.a.k(a2,m,a2[n])
C.a.k(a2,n,l)
n=j
break}}}}h=!0}else{for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
g=a5.$2(l,t)
if(typeof g!=="number")return g.ar()
if(g<0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.a.k(a2,m,a2[o])
C.a.k(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.R()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.R()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.ar()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.b(a2,o)
C.a.k(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.b(a2,n)
C.a.k(a2,o,a2[n])
C.a.k(a2,n,l)
o=i}else{if(n>=a1)return H.b(a2,n)
C.a.k(a2,m,a2[n])
C.a.k(a2,n,l)}n=j
break}}}}h=!1}a1=o-1
if(a1>=a2.length)return H.b(a2,a1)
C.a.k(a2,a3,a2[a1])
C.a.k(a2,a1,t)
a1=n+1
if(a1<0||a1>=a2.length)return H.b(a2,a1)
C.a.k(a2,a4,a2[a1])
C.a.k(a2,a1,r)
H.cD(a2,a3,o-2,a5)
H.cD(a2,n+2,a4,a5)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.b(a2,o)
if(!J.C(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.b(a2,n)
if(!J.C(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.a.k(a2,m,a2[o])
C.a.k(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.ar()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.b(a2,o)
C.a.k(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.b(a2,n)
C.a.k(a2,o,a2[n])
C.a.k(a2,n,l)
o=i}else{if(n>=a1)return H.b(a2,n)
C.a.k(a2,m,a2[n])
C.a.k(a2,n,l)}n=j
break}}}H.cD(a2,o,n,a5)}else H.cD(a2,o,n,a5)},
G:function G(a){this.a=a},
eh:function eh(){},
ck:function ck(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
eL:function eL(a,b,c){this.a=a
this.b=b
this.$ti=c},
eM:function eM(a,b){this.a=null
this.b=a
this.c=b},
hy:function hy(a,b,c){this.a=a
this.b=b
this.$ti=c},
hz:function hz(a,b){this.a=a
this.b=b},
ca:function ca(){},
hd:function hd(){},
cS:function cS(){},
dP:function(a){var u,t=H.lC(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
lm:function(a){return v.types[a]},
lr:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.N(a).$ir},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.U(a)
if(typeof u!=="string")throw H.f(H.aM(a))
return u},
bz:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bA:function(a){return H.kb(a)+H.jm(H.bV(a),0,null)},
kb:function(a){var u,t,s,r,q,p,o,n=J.N(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.A||!!n.$ibG){r=C.j(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.dP(t.length>1&&C.b.aH(t,0)===36?C.b.au(t,1):t)},
j4:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
kk:function(a){var u,t,s,r=H.c([],[P.w])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.n)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.aM(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.d.aJ(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.f(H.aM(s))}return H.j4(r)},
j5:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.aM(s))
if(s<0)throw H.f(H.aM(s))
if(s>65535)return H.kk(a)}return H.j4(a)},
kj:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.aJ(u,10))>>>0,56320|u&1023)}throw H.f(P.a8(a,0,1114111,null,null))},
b2:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ki:function(a){var u=H.b2(a).getFullYear()+0
return u},
kg:function(a){var u=H.b2(a).getMonth()+1
return u},
kc:function(a){var u=H.b2(a).getDate()+0
return u},
kd:function(a){var u=H.b2(a).getHours()+0
return u},
kf:function(a){var u=H.b2(a).getMinutes()+0
return u},
kh:function(a){var u=H.b2(a).getSeconds()+0
return u},
ke:function(a){var u=H.b2(a).getMilliseconds()+0
return u},
aO:function(a){throw H.f(H.aM(a))},
b:function(a,b){if(a==null)J.bg(a)
throw H.f(H.bc(a,b))},
bc:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a2(!0,b,s,null)
u=J.bg(a)
if(!(b<0)){if(typeof u!=="number")return H.aO(u)
t=b>=u}else t=!0
if(t)return P.A(b,a,s,null,u)
return P.cy(b,s)},
le:function(a,b,c){var u="Invalid value"
if(a>c)return new P.b3(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.b3(a,c,!0,b,"end",u)
return new P.a2(!0,b,"end",null)},
aM:function(a){return new P.a2(!0,a,null,null)},
la:function(a){if(typeof a!=="number")throw H.f(H.aM(a))
return a},
f:function(a){var u
if(a==null)a=new P.ct()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.jz})
u.name=""}else u.toString=H.jz
return u},
jz:function(){return J.U(this.dartException)},
p:function(a){throw H.f(a)},
n:function(a){throw H.f(P.bk(a))},
aa:function(a){var u,t,s,r,q,p
a=H.jx(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.q])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.h1(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
h2:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
jf:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
j0:function(a,b){return new H.fe(a,b==null?null:b.method)},
iu:function(a,b){var u=b==null,t=u?null:b.method
return new H.eA(a,t,u?null:b.receiver)},
ie:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.ig(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.aJ(t,16)&8191)===10)switch(s){case 438:return f.$1(H.iu(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.j0(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.jC()
q=$.jD()
p=$.jE()
o=$.jF()
n=$.jI()
m=$.jJ()
l=$.jH()
$.jG()
k=$.jL()
j=$.jK()
i=r.V(u)
if(i!=null)return f.$1(H.iu(u,i))
else{i=q.V(u)
if(i!=null){i.method="call"
return f.$1(H.iu(u,i))}else{i=p.V(u)
if(i==null){i=o.V(u)
if(i==null){i=n.V(u)
if(i==null){i=m.V(u)
if(i==null){i=l.V(u)
if(i==null){i=o.V(u)
if(i==null){i=k.V(u)
if(i==null){i=j.V(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.j0(u,i))}}return f.$1(new H.hc(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.cF()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.a2(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.cF()
return a},
iI:function(a){var u
if(a==null)return new H.ds(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.ds(a)},
li:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.k(0,a[u],a[t])}return b},
lq:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(P.o("Unsupported number of arguments for wrapped closure"))},
bb:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.lq)
a.$identity=u
return u},
jY:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.fI().constructor.prototype):Object.create(new H.bh(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.a3
if(typeof t!=="number")return t.E()
$.a3=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.iU(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.jU(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.iU(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
jU:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.lm,a)
if(typeof a=="function")if(b)return a
else{u=c?H.iT:H.ii
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.f("Error in functionType of tearoff")},
jV:function(a,b,c,d){var u=H.ii
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
iU:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.jX(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.jV(t,!r,u,b)
if(t===0){r=$.a3
if(typeof r!=="number")return r.E()
$.a3=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bi
return new Function(r+H.e(q==null?$.bi=H.e0("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.a3
if(typeof r!=="number")return r.E()
$.a3=r+1
o+=r
r="return function("+o+"){return this."
q=$.bi
return new Function(r+H.e(q==null?$.bi=H.e0("self"):q)+"."+H.e(u)+"("+o+");}")()},
jW:function(a,b,c,d){var u=H.ii,t=H.iT
switch(b?-1:a){case 0:throw H.f(H.ko("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
jX:function(a,b){var u,t,s,r,q,p,o,n=$.bi
if(n==null)n=$.bi=H.e0("self")
u=$.iS
if(u==null)u=$.iS=H.e0("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.jW(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.a3
if(typeof u!=="number")return u.E()
$.a3=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.a3
if(typeof u!=="number")return u.E()
$.a3=u+1
return new Function(n+u+"}")()},
iF:function(a,b,c,d,e,f,g){return H.jY(a,b,c,d,!!e,!!f,g)},
ii:function(a){return a.a},
iT:function(a){return a.c},
e0:function(a){var u,t,s,r=new H.bh("self","target","receiver","name"),q=J.ir(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
lv:function(a,b){throw H.f(H.jT(a,H.dP(b.substring(2))))},
l:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.N(a)[b]
else u=!0
if(u)return a
H.lv(a,b)},
lg:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
jT:function(a,b){return new H.e1("CastError: "+P.ip(a)+": type '"+H.e(H.l6(a))+"' is not a subtype of type '"+b+"'")},
l6:function(a){var u,t=J.N(a)
if(!!t.$ibj){u=H.lg(t)
if(u!=null)return H.lw(u)
return"Closure"}return H.bA(a)},
lB:function(a){throw H.f(new P.ea(a))},
ko:function(a){return new H.fs(a)},
jr:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bV:function(a){if(a==null)return
return a.$ti},
m6:function(a,b,c){return H.ic(a["$a"+H.e(c)],H.bV(b))},
ll:function(a,b,c,d){var u=H.ic(a["$a"+H.e(c)],H.bV(b))
return u==null?null:u[d]},
js:function(a,b,c){var u=H.ic(a["$a"+H.e(b)],H.bV(a))
return u==null?null:u[c]},
dO:function(a,b){var u=H.bV(a)
return u==null?null:u[b]},
lw:function(a){return H.aL(a,null)},
aL:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.dP(a[0].name)+H.jm(a,1,b)
if(typeof a=="function")return H.dP(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.b(b,t)
return H.e(b[t])}if('func' in a)return H.kF(a,b)
if('futureOr' in a)return"FutureOr<"+H.aL("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kF:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],[P.q])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.b(a0,m)
p=C.b.E(p,a0[m])
l=u[q]
if(l!=null&&l!==P.P)p+=" extends "+H.aL(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.aL(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.aL(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.aL(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.lh(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.aL(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
jm:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.aF("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.aL(p,c)}return"<"+u.h(0)+">"},
ic:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
m4:function(a,b,c){return a.apply(b,H.ic(J.N(b)["$a"+H.e(c)],H.bV(b)))},
m5:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
ls:function(a){var u,t,s,r,q=$.jt.$1(a),p=$.i3[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.i8[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.jp.$2(a,q)
if(q!=null){p=$.i3[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.i8[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.ia(u)
$.i3[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.i8[q]=u
return u}if(s==="-"){r=H.ia(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.jv(a,u)
if(s==="*")throw H.f(P.jg(q))
if(v.leafTags[q]===true){r=H.ia(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.jv(a,u)},
jv:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.iK(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
ia:function(a){return J.iK(a,!1,null,!!a.$ir)},
lt:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.ia(u)
else return J.iK(u,c,null,null)},
lo:function(){if(!0===$.iJ)return
$.iJ=!0
H.lp()},
lp:function(){var u,t,s,r,q,p,o,n
$.i3=Object.create(null)
$.i8=Object.create(null)
H.ln()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.jw.$1(q)
if(p!=null){o=H.lt(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
ln:function(){var u,t,s,r,q,p,o=C.q()
o=H.b9(C.r,H.b9(C.t,H.b9(C.k,H.b9(C.k,H.b9(C.u,H.b9(C.v,H.b9(C.w(C.j),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.jt=new H.i5(r)
$.jp=new H.i6(q)
$.jw=new H.i7(p)},
b9:function(a,b){return a(b)||b},
k4:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.f(new P.et("Illegal RegExp pattern ("+String(p)+")",a))},
ly:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
lf:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
jx:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
jy:function(a,b,c){var u=H.lz(a,b,c)
return u},
lz:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.jx(b),'g'),H.lf(c))},
h1:function h1(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fe:function fe(a,b){this.a=a
this.b=b},
eA:function eA(a,b,c){this.a=a
this.b=b
this.c=c},
hc:function hc(a){this.a=a},
ig:function ig(a){this.a=a},
ds:function ds(a){this.a=a
this.b=null},
bj:function bj(){},
fO:function fO(){},
fI:function fI(){},
bh:function bh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e1:function e1(a){this.a=a},
fs:function fs(a){this.a=a},
F:function F(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
eE:function eE(a,b){this.a=a
this.b=b
this.c=null},
cj:function cj(a,b){this.a=a
this.$ti=b},
eF:function eF(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
i5:function i5(a){this.a=a},
i6:function i6(a){this.a=a},
i7:function i7(a){this.a=a},
ez:function ez(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bS:function(a){return a},
aK:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.bc(b,a))},
kE:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.f(H.le(a,b,c))
return b},
bw:function bw(){},
cp:function cp(){},
bv:function bv(){},
cq:function cq(){},
f7:function f7(){},
f8:function f8(){},
f9:function f9(){},
fa:function fa(){},
fb:function fb(){},
cr:function cr(){},
fc:function fc(){},
bJ:function bJ(){},
bK:function bK(){},
bL:function bL(){},
bM:function bM(){},
lh:function(a){return J.iX(a?Object.keys(a):[],null)},
lC:function(a){return v.mangledGlobalNames[a]},
lu:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
iK:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
i4:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.iJ==null){H.lo()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.f(P.jg("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.iO()]
if(r!=null)return r
r=H.ls(a)
if(r!=null)return r
if(typeof a=="function")return C.C
u=Object.getPrototypeOf(a)
if(u==null)return C.n
if(u===Object.prototype)return C.n
if(typeof s=="function"){Object.defineProperty(s,$.iO(),{value:C.i,enumerable:false,writable:true,configurable:true})
return C.i}return C.i},
k3:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.f(P.iR(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.f(P.a8(a,0,4294967295,"length",null))
return J.iX(new Array(a),b)},
iX:function(a,b){return J.ir(H.c(a,[b]))},
ir:function(a){a.fixed$length=Array
return a},
N:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ce.prototype
return J.cd.prototype}if(typeof a=="string")return J.aY.prototype
if(a==null)return J.cf.prototype
if(typeof a=="boolean")return J.ey.prototype
if(a.constructor==Array)return J.ax.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ay.prototype
return a}if(a instanceof P.P)return a
return J.i4(a)},
iG:function(a){if(typeof a=="string")return J.aY.prototype
if(a==null)return a
if(a.constructor==Array)return J.ax.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ay.prototype
return a}if(a instanceof P.P)return a
return J.i4(a)},
iH:function(a){if(a==null)return a
if(a.constructor==Array)return J.ax.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ay.prototype
return a}if(a instanceof P.P)return a
return J.i4(a)},
lj:function(a){if(typeof a=="number")return J.bq.prototype
if(typeof a=="string")return J.aY.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.bG.prototype
return a},
lk:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ay.prototype
return a}if(a instanceof P.P)return a
return J.i4(a)},
C:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.N(a).l(a,b)},
dQ:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lr(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.iG(a).i(a,b)},
jQ:function(a,b,c,d){return J.lk(a).eg(a,b,c,d)},
ih:function(a,b){return J.lj(a).eq(a,b)},
iQ:function(a,b){return J.iH(a).v(a,b)},
jR:function(a,b){return J.iH(a).C(a,b)},
bY:function(a){return J.N(a).gG(a)},
bf:function(a){return J.iH(a).gK(a)},
bg:function(a){return J.iG(a).gj(a)},
U:function(a){return J.N(a).h(a)},
a:function a(){},
ey:function ey(){},
cf:function cf(){},
cg:function cg(){},
fi:function fi(){},
bG:function bG(){},
ay:function ay(){},
ax:function ax(a){this.$ti=a},
is:function is(a){this.$ti=a},
V:function V(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bq:function bq(){},
ce:function ce(){},
cd:function cd(){},
aY:function aY(){}},P={
kw:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.l7()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bb(new P.hB(s),1)).observe(u,{childList:true})
return new P.hA(s,u,t)}else if(self.setImmediate!=null)return P.l8()
return P.l9()},
kx:function(a){self.scheduleImmediate(H.bb(new P.hC(a),0))},
ky:function(a){self.setImmediate(H.bb(new P.hD(a),0))},
kz:function(a){P.iy(C.f,a)},
iy:function(a,b){var u=C.d.S(a.a,1000)
return P.kB(u<0?0:u,b)},
je:function(a,b){var u=C.d.S(a.a,1000)
return P.kC(u<0?0:u,b)},
kB:function(a,b){var u=new P.dy()
u.cW(a,b)
return u},
kC:function(a,b){var u=new P.dy()
u.cX(a,b)
return u},
l0:function(){var u,t
for(;u=$.b8,u!=null;){$.bU=null
t=u.b
$.b8=t
if(t==null)$.bT=null
u.a.$0()}},
l5:function(){$.iD=!0
try{P.l0()}finally{$.bU=null
$.iD=!1
if($.b8!=null)$.iP().$1(P.jq())}},
l3:function(a){var u=new P.cV(a)
if($.b8==null){$.b8=$.bT=u
if(!$.iD)$.iP().$1(P.jq())}else $.bT=$.bT.b=u},
l4:function(a){var u,t,s=$.b8
if(s==null){P.l3(a)
$.bU=$.bT
return}u=new P.cV(a)
t=$.bU
if(t==null){u.b=s
$.b8=$.bU=u}else{u.b=t.b
$.bU=t.b=u
if(u.b==null)$.bT=u}},
jc:function(a,b){var u=$.a0
if(u===C.e)return P.iy(a,b)
return P.iy(a,u.em(b))},
jd:function(a,b){var u=$.a0
if(u===C.e)return P.je(a,b)
return P.je(a,u.bX(b,P.cM))},
jn:function(a,b,c,d,e){var u={}
u.a=d
P.l4(new P.i1(u,e))},
l1:function(a,b,c,d){var u,t=$.a0
if(t===c)return d.$0()
$.a0=c
u=t
try{t=d.$0()
return t}finally{$.a0=u}},
l2:function(a,b,c,d,e){var u,t=$.a0
if(t===c)return d.$1(e)
$.a0=c
u=t
try{t=d.$1(e)
return t}finally{$.a0=u}},
hB:function hB(a){this.a=a},
hA:function hA(a,b,c){this.a=a
this.b=b
this.c=c},
hC:function hC(a){this.a=a},
hD:function hD(a){this.a=a},
dy:function dy(){this.c=0},
hV:function hV(a,b){this.a=a
this.b=b},
hU:function hU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cV:function cV(a){this.a=a
this.b=null},
cH:function cH(){},
fL:function fL(){},
cM:function cM(){},
hX:function hX(){},
i1:function i1(a,b){this.a=a
this.b=b},
hO:function hO(){},
hP:function hP(a,b){this.a=a
this.b=b},
hQ:function hQ(a,b,c){this.a=a
this.b=b
this.c=c},
k5:function(a,b){return new H.F([a,b])},
k6:function(a){return H.li(a,new H.F([null,null]))},
k7:function(a){return new P.hL([a])},
iC:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
kA:function(a,b){var u=new P.d9(a,b)
u.c=a.e
return u},
k2:function(a,b,c){var u,t
if(P.iE(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.q])
$.Q.push(a)
try{P.kG(a,u)}finally{if(0>=$.Q.length)return H.b($.Q,-1)
$.Q.pop()}t=P.ja(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
iq:function(a,b,c){var u,t
if(P.iE(a))return b+"..."+c
u=new P.aF(b)
$.Q.push(a)
try{t=u
t.a=P.ja(t.a,a,", ")}finally{if(0>=$.Q.length)return H.b($.Q,-1)
$.Q.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
iE:function(a){var u,t
for(u=$.Q.length,t=0;t<u;++t)if(a===$.Q[t])return!0
return!1},
kG:function(a,b){var u,t,s,r,q,p,o,n=a.gK(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.u())return
u=H.e(n.gH(n))
b.push(u)
m+=u.length+2;++l}if(!n.u()){if(l<=5)return
if(0>=b.length)return H.b(b,-1)
t=b.pop()
if(0>=b.length)return H.b(b,-1)
s=b.pop()}else{r=n.gH(n);++l
if(!n.u()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.b(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gH(n);++l
for(;n.u();r=q,q=p){p=n.gH(n);++l
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
iY:function(a){var u,t={}
if(P.iE(a))return"{...}"
u=new P.aF("")
try{$.Q.push(a)
u.a+="{"
t.a=!0
J.jR(a,new P.eK(t,u))
u.a+="}"}finally{if(0>=$.Q.length)return H.b($.Q,-1)
$.Q.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
hL:function hL(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hM:function hM(a){this.a=a
this.c=this.b=null},
d9:function d9(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
eG:function eG(){},
m:function m(){},
eJ:function eJ(){},
eK:function eK(a,b){this.a=a
this.b=b},
ab:function ab(){},
hR:function hR(){},
da:function da(){},
e3:function e3(){},
e5:function e5(){},
ei:function ei(){},
hg:function hg(){},
hh:function hh(){},
hW:function hW(a){this.b=0
this.c=a},
k0:function(a){if(a instanceof H.bj)return a.h(0)
return"Instance of '"+H.e(H.bA(a))+"'"},
k8:function(a,b,c){var u,t,s=J.k3(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
iv:function(a,b,c){var u,t=H.c([],[c])
for(u=J.bf(a);u.u();)t.push(u.gH(u))
if(b)return t
return J.ir(t)},
ix:function(a){var u,t
if(a.constructor===Array){u=a.length
t=P.j7(0,null,u)
return H.j5(t<u?C.a.cJ(a,0,t):a)}return P.ks(a,0,null)},
ks:function(a,b,c){var u,t,s=J.bf(a)
for(u=0;u<b;++u)if(!s.u())throw H.f(P.a8(b,0,u,null,null))
t=[]
for(;s.u();)t.push(s.gH(s))
return H.j5(t)},
kl:function(a){return new H.ez(a,H.k4(a,!1,!0,!1,!1,!1))},
ja:function(a,b,c){var u=J.bf(b)
if(!u.u())return a
if(c.length===0){do a+=H.e(u.gH(u))
while(u.u())}else{a+=H.e(u.gH(u))
for(;u.u();)a=a+c+H.e(u.gH(u))}return a},
kD:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.l){u=$.jP().b
u=u.test(b)}else u=!1
if(u)return b
t=C.y.er(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.b(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.kj(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
jZ:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
k_:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c4:function(a){if(a>=10)return""+a
return"0"+a},
im:function(a){return new P.as(1000*a)},
ip:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.U(a)
if(typeof a==="string")return JSON.stringify(a)
return P.k0(a)},
jS:function(a){return new P.a2(!1,null,null,a)},
iR:function(a,b,c){return new P.a2(!0,a,b,c)},
cy:function(a,b){return new P.b3(null,null,!0,a,b,"Value not in range")},
a8:function(a,b,c,d,e){return new P.b3(b,c,!0,a,d,"Invalid value")},
j7:function(a,b,c){if(0>a||a>c)throw H.f(P.a8(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.f(P.a8(b,a,c,"end",null))
return b}return c},
j6:function(a,b){if(typeof a!=="number")return a.ar()
if(a<0)throw H.f(P.a8(a,0,null,b,null))},
A:function(a,b,c,d,e){var u=e==null?J.bg(b):e
return new P.ew(u,!0,a,c,"Index out of range")},
T:function(a){return new P.he(a)},
jg:function(a){return new P.hb(a)},
bk:function(a){return new P.e4(a)},
o:function(a){return new P.d2(a)},
iM:function(a){H.lu(a)},
aN:function aN(){},
ar:function ar(a,b){this.a=a
this.b=b},
E:function E(){},
as:function as(a){this.a=a},
ef:function ef(){},
eg:function eg(){},
aU:function aU(){},
ct:function ct(){},
a2:function a2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b3:function b3(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ew:function ew(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
he:function he(a){this.a=a},
hb:function hb(a){this.a=a},
fH:function fH(a){this.a=a},
e4:function e4(a){this.a=a},
fh:function fh(){},
cF:function cF(){},
ea:function ea(a){this.a=a},
d2:function d2(a){this.a=a},
et:function et(a,b){this.a=a
this.b=b},
w:function w(){},
k:function k(){},
ex:function ex(){},
b0:function b0(){},
cl:function cl(){},
aA:function aA(){},
a1:function a1(){},
P:function P(){},
q:function q(){},
aF:function aF(a){this.a=a},
ld:function(a){var u,t=J.N(a)
if(!!t.$iaw){u=t.gc_(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.dD(a.data,a.height,a.width)},
lc:function(a){if(a instanceof P.dD)return{data:a.a,height:a.b,width:a.c}
return a},
aj:function(a){var u,t,s,r,q
if(a==null)return
u=P.k5(P.q,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.n)(t),++r){q=t[r]
u.k(0,q,a[q])}return u},
lb:function(a){var u={}
a.C(0,new P.i2(u))
return u},
dD:function dD(a,b,c){this.a=a
this.b=b
this.c=c},
i2:function i2(a){this.a=a},
ep:function ep(a,b){this.a=a
this.b=b},
eq:function eq(){},
er:function er(){},
hN:function hN(){},
a9:function a9(){},
b_:function b_(){},
eC:function eC(){},
b1:function b1(){},
ff:function ff(){},
fl:function fl(){},
fM:function fM(){},
i:function i(){},
b5:function b5(){},
h0:function h0(){},
d7:function d7(){},
d8:function d8(){},
di:function di(){},
dj:function dj(){},
du:function du(){},
dv:function dv(){},
dB:function dB(){},
dC:function dC(){},
dW:function dW(){},
dX:function dX(){},
dY:function dY(a){this.a=a},
dZ:function dZ(){},
aQ:function aQ(){},
fg:function fg(){},
cW:function cW(){},
cA:function cA(){},
fG:function fG(){},
dq:function dq(){},
dr:function dr(){}},W={
ik:function(){var u=document.createElement("canvas")
return u},
io:function(a){return"wheel"},
hK:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jl:function(a,b,c,d){var u=W.hK(W.hK(W.hK(W.hK(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
I:function(a,b,c,d){var u=W.jo(new W.hI(c),W.h)
if(u!=null&&!0)J.jQ(a,b,u,!1)
return new W.hH(a,b,u,!1)},
jo:function(a,b){var u=$.a0
if(u===C.e)return a
return u.bX(a,b)},
j:function j(){},
dR:function dR(){},
dT:function dT(){},
dU:function dU(){},
c_:function c_(){},
aR:function aR(){},
ap:function ap(){},
e6:function e6(){},
y:function y(){},
bl:function bl(){},
e7:function e7(){},
W:function W(){},
a4:function a4(){},
e8:function e8(){},
e9:function e9(){},
eb:function eb(){},
ec:function ec(){},
c6:function c6(){},
c7:function c7(){},
ed:function ed(){},
ee:function ee(){},
hF:function hF(a,b){this.a=a
this.b=b},
O:function O(){},
h:function h(){},
d:function d(){},
au:function au(){},
en:function en(){},
eo:function eo(){},
es:function es(){},
av:function av(){},
ev:function ev(){},
bm:function bm(){},
aw:function aw(){},
bn:function bn(){},
aZ:function aZ(){},
eH:function eH(){},
f_:function f_(){},
f0:function f0(){},
f1:function f1(a){this.a=a},
f2:function f2(){},
f3:function f3(a){this.a=a},
az:function az(){},
f4:function f4(){},
a6:function a6(){},
hE:function hE(a){this.a=a},
D:function D(){},
cs:function cs(){},
aB:function aB(){},
fj:function fj(){},
fq:function fq(){},
fr:function fr(a){this.a=a},
ft:function ft(){},
aC:function aC(){},
fD:function fD(){},
aD:function aD(){},
fE:function fE(){},
aE:function aE(){},
fJ:function fJ(){},
fK:function fK(a){this.a=a},
af:function af(){},
aG:function aG(){},
ag:function ag(){},
fP:function fP(){},
fQ:function fQ(){},
fW:function fW(){},
aH:function aH(){},
b4:function b4(){},
fZ:function fZ(){},
h_:function h_(){},
aI:function aI(){},
hf:function hf(){},
hw:function hw(){},
aJ:function aJ(){},
bI:function bI(){},
hG:function hG(){},
cY:function cY(){},
hJ:function hJ(){},
df:function df(){},
hS:function hS(){},
hT:function hT(){},
hH:function hH(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
hI:function hI(a){this.a=a},
z:function z(){},
cb:function cb(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
cX:function cX(){},
cZ:function cZ(){},
d_:function d_(){},
d0:function d0(){},
d1:function d1(){},
d3:function d3(){},
d4:function d4(){},
d5:function d5(){},
d6:function d6(){},
db:function db(){},
dc:function dc(){},
dd:function dd(){},
de:function de(){},
dg:function dg(){},
dh:function dh(){},
dk:function dk(){},
dl:function dl(){},
dm:function dm(){},
bN:function bN(){},
bO:function bO(){},
dn:function dn(){},
dp:function dp(){},
dt:function dt(){},
dw:function dw(){},
dx:function dx(){},
bP:function bP(){},
bQ:function bQ(){},
dz:function dz(){},
dA:function dA(){},
dE:function dE(){},
dF:function dF(){},
dG:function dG(){},
dH:function dH(){},
dI:function dI(){},
dJ:function dJ(){},
dK:function dK(){},
dL:function dL(){},
dM:function dM(){},
dN:function dN(){}},T={
K:function(a){var u=new T.fu()
u.cQ(a)
return u},
dS:function dS(){},
cc:function cc(){},
cm:function cm(){},
ae:function ae(){this.a=null},
fu:function fu(){this.a=null},
cJ:function cJ(){},
cK:function cK(){},
fR:function fR(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
fS:function fS(){var _=this
_.y=_.d=_.c=_.b=_.a=null},
fT:function fT(a){var _=this
_.a=a
_.e=_.d=_.b=null},
fU:function fU(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},R={cG:function cG(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},cN:function cN(a,b,c){this.a=a
this.b=b
this.c=c},cO:function cO(a){this.b=a
this.c=null},fX:function fX(){this.c=this.b=this.a=null},cP:function cP(a){this.b=a
this.a=this.c=null}},O={
il:function(a){var u=new O.aS([a])
u.by(a)
return u},
aS:function aS(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bt:function bt(){this.b=this.a=null},
cn:function cn(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eU:function eU(a,b){this.a=a
this.b=b},
eV:function eV(){},
eW:function eW(a,b){this.a=a
this.b=b},
eX:function eX(){},
eY:function eY(a,b){this.a=a
this.b=b},
eZ:function eZ(){},
eO:function eO(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bs:function bs(){},
eP:function eP(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
a5:function a5(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
eR:function eR(){var _=this
_.e=_.d=_.c=_.b=null},
eS:function eS(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
eT:function eT(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cI:function cI(){}},E={
kn:function(a,b){var u=new E.fm(a)
u.cP(a,b)
return u},
kt:function(a,b,c,d,e){var u,t,s=J.N(a)
if(!!s.$iaR)return E.jb(a,!0,!0,!0,!1)
u=W.ik()
t=u.style
t.width="100%"
t.height="100%"
s.gbY(a).m(0,u)
return E.jb(u,!0,!0,!0,!1)},
jb:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.cL(),p=C.m.bq(a,"webgl2",P.k6(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.p(P.o("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.kn(p,a)
u=new T.fT(p)
u.b=p.getParameter(3379)
p.getParameter(34076)
u.e=u.d=0
q.f=u
u=new X.cT(a)
t=new X.eB()
t.d=P.k7(P.w)
u.b=t
t=new X.f5(u)
t.f=0
t.r=V.cv()
t.x=V.cv()
t.ch=t.Q=1
u.c=t
t=new X.eI(u)
t.r=0
t.x=V.cv()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.fY(u)
t.f=V.cv()
t.r=V.cv()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.c([],[[P.cH,P.P]])
u.z=t
s=document
t.push(W.I(s,"contextmenu",u.gdr(),!1))
u.z.push(W.I(a,"focus",u.gdz(),!1))
u.z.push(W.I(a,"blur",u.gdj(),!1))
u.z.push(W.I(s,"keyup",u.gdD(),!1))
u.z.push(W.I(s,"keydown",u.gdB(),!1))
u.z.push(W.I(a,"mousedown",u.gdH(),!1))
u.z.push(W.I(a,"mouseup",u.gdL(),!1))
u.z.push(W.I(a,r,u.gdJ(),!1))
t=u.z
W.io(a)
W.io(a)
t.push(W.I(a,W.io(a),u.gdN(),!1))
u.z.push(W.I(s,r,u.gdt(),!1))
u.z.push(W.I(s,"mouseup",u.gdv(),!1))
u.z.push(W.I(s,"pointerlockchange",u.gdP(),!1))
u.z.push(W.I(a,"touchstart",u.ge_(),!1))
u.z.push(W.I(a,"touchend",u.gdW(),!1))
u.z.push(W.I(a,"touchmove",u.gdY(),!1))
q.ch=!0
q.cx=!1
q.cy=new P.ar(Date.now(),!1)
q.db=0
q.bP()
return q},
e_:function e_(){},
at:function at(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fm:function fm(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fn:function fn(a){this.a=a},
fo:function fo(a){this.a=a},
fp:function fp(a){this.a=a},
cL:function cL(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.f=_.e=_.d=_.c=_.b=null},
fV:function fV(a){this.a=a}},Z={
iB:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.bS(c)),35044)
a.bindBuffer(b,null)
return new Z.cU(b,u)},
Y:function(a){return new Z.ai(a)},
cU:function cU(a,b){this.a=a
this.b=b},
c0:function c0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
hx:function hx(a){this.a=a},
c1:function c1(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
aX:function aX(a,b,c){this.a=a
this.b=b
this.c=c},
ai:function ai(a){this.a=a}},D={
Z:function(){var u=new D.aV()
u.d=0
return u},
e2:function e2(){},
aV:function aV(){var _=this
_.d=_.c=_.b=_.a=null},
ek:function ek(a){this.a=a},
el:function el(a){this.a=a},
R:function R(){this.b=null},
bo:function bo(){this.b=null},
bp:function bp(){this.b=null},
x:function x(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
aT:function aT(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
S:function S(){},
ci:function ci(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
fk:function fk(){},
fF:function fF(){}},X={c2:function c2(a,b){this.a=a
this.b=b},ch:function ch(a,b){this.a=a
this.b=b},eB:function eB(){this.d=this.b=this.a=null},eI:function eI(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bu:function bu(a,b,c){this.a=a
this.b=b
this.c=c},f5:function f5(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},fY:function fY(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},cT:function cT(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
k1:function(a){var u=new X.eu(),t=V.ba(1)
u.a=new V.aq(0,0,0,t)
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.j8
if(t==null){t=V.km(0,0,1,1)
$.j8=t}u.r=t
return u},
ij:function ij(){},
eu:function eu(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cu:function cu(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
fN:function fN(){}},V={
ba:function(a){var u
if(a<0)u=0
else u=a>1?1:a
return u},
iN:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.cF(a-b,u)
return(a<0?a+u:a)+b},
t:function(a,b,c){if(a==null)return C.b.W("null",c)
return C.b.W(C.c.cB(Math.abs(a-0)<$.v().a?0:a,b),c+b+1)},
bd:function(a,b,c){var u,t,s,r,q,p,o=H.c([],[P.q])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.n)(a),++s){r=V.t(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.b(o,q)
u=C.b.W(o[q],t)
p=o.length
if(q>=p)return H.b(o,q)
o[q]=u}return o},
iL:function(a){return C.c.fb(Math.pow(2,C.B.bf(Math.log(H.la(a))/Math.log(2))))},
iw:function(){var u=$.j_
return u==null?$.j_=V.ad(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
ad:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ac(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
iZ:function(a,b,c){var u=c.A(0,Math.sqrt(c.I(c))),t=b.ax(u),s=t.A(0,Math.sqrt(t.I(t))),r=u.ax(s),q=new V.u(a.a,a.b,a.c),p=s.as(0).I(q),o=r.as(0).I(q),n=u.as(0).I(q)
return V.ad(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
cv:function(){var u=$.j2
return u==null?$.j2=new V.a7(0,0):u},
j3:function(){var u=$.by
return u==null?$.by=new V.a_(0,0,0):u},
km:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cz(a,b,c,d)},
bH:function(){var u=$.jj
return u==null?$.jj=new V.u(0,0,0):u},
ku:function(){var u=$.hi
return u==null?$.hi=new V.u(-1,0,0):u},
iA:function(){var u=$.hj
return u==null?$.hj=new V.u(0,1,0):u},
kv:function(){var u=$.hk
return u==null?$.hk=new V.u(0,0,1):u},
J:function J(a,b,c){this.a=a
this.b=b
this.c=c},
aq:function aq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ej:function ej(a){this.a=a},
co:function co(a,b,c,d,e,f,g,h,i){var _=this
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
a7:function a7(a,b){this.a=a
this.b=b},
a_:function a_(a,b,c){this.a=a
this.b=b
this.c=c},
cw:function cw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cz:function cz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ah:function ah(a,b){this.a=a
this.b=b},
u:function u(a,b,c){this.a=a
this.b=b
this.c=c},
lx:function(a){P.jd(C.z,new V.ib(a))},
kp:function(a){var u=new V.fz()
u.cS(a,!0)
return u},
ib:function ib(a){this.a=a},
fz:function fz(){this.b=this.a=null},
fB:function fB(a){this.a=a},
fA:function fA(a){this.a=a}},U={
iV:function(a){var u=new U.c3()
u.a=a
return u},
c3:function c3(){this.b=this.a=null},
f6:function f6(){},
cB:function cB(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={c8:function c8(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
k9:function(a,b){var u=a.ab,t=new A.eN(b,u)
t.cR(b,u)
t.cO(a,b)
return t},
ka:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="MaterialLight_"+a0.ga_(a0)+a1.ga_(a1)+a2.ga_(a2)+a3.ga_(a3)+a4.ga_(a4)+a5.ga_(a5)+a6.ga_(a6)+a7.ga_(a7)+a8.ga_(a8)+"_"
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
g=$.an()
if(l){u=$.am()
g=new Z.ai(g.a|u.a)}if(k){u=$.al()
g=new Z.ai(g.a|u.a)}if(j){u=$.ao()
g=new Z.ai(g.a|u.a)}if(i){u=$.ak()
g=new Z.ai(g.a|u.a)}return new A.eQ(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,s,p,m,p,r,h,!0,!1,!1,o,r,n,l,k,j,!1,i,a,!1,c,!1,e,f.charCodeAt(0)==0?f:f,g)},
i_:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
i0:function(a,b,c){var u,t="Txt, txt2D).rgb;\n"
A.i_(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.id(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.b){u+="   "+c+"Color = "+c+"Clr*texture2D("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.b){u+="   "+c+"Color = texture2D("+c+t
a.a=u}a.a=u+"}\n"},
kK:function(a,b){var u,t=a.a,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.i_(b,t,"emission")
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
kH:function(a,b){var u,t=a.b
if(!(t.a||t.b||!1))return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.i0(b,t,"ambient")
b.a+="\n"},
kI:function(a,b){var u,t=a.c
if(!(t.a||t.b||!1))return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.i0(b,t,"diffuse")
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
kL:function(a,b){var u,t=a.d
if(!(t.a||t.b||!1))return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.i0(b,t,"invDiffuse")
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
kR:function(a,b){var u,t=a.e
if(!(t.a||t.b||!1))return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.i0(b,t,"specular")
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
kN:function(a,b){var u,t,s
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
kP:function(a,b){var u,t=a.r,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.i_(b,t,"reflect")
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
kQ:function(a,b){var u,t=a.x,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.i_(b,t,"refract")
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
kJ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.e(u)
s=A.id(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.a4()
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
o=H.c([],r)
n=a.b
if(n.a||n.b||!1)o.push("ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.c([],r)
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
kO:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.e(u)
s=A.id(t)
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
if(typeof u!=="number")return u.a4()
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
l=H.c([],r)
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
l=H.c([],r)
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
k=H.c([],r)
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
kS:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.e(u)
s=A.id(t)
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
if(typeof u!=="number")return u.a4()
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
j=H.c([],u)
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
j=H.c([],u)
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
i=H.c([],u)
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
kM:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.c([],[P.q])
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
kT:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.aF("")
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
A.kK(a,j)
A.kH(a,j)
A.kI(a,j)
A.kL(a,j)
A.kR(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.kP(a,j)
A.kQ(a,j)}A.kN(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.n)(q),++o)A.kJ(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.n)(q),++o)A.kO(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.n)(q),++o)A.kS(a,q[o],j)
A.kM(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.c([],[P.q])
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
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.au(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.n)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.au(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.n)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.au(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
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
kU:function(a,b){var u,t,s
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
kW:function(a,b){var u
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
kV:function(a,b){var u
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
kY:function(a,b){var u,t
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
kZ:function(a,b){var u,t
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
kX:function(a,b){var u
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
l_:function(a,b){var u
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
id:function(a){if(0>=a.length)return H.b(a,0)
return a[0].toUpperCase()+C.b.au(a,1)},
iz:function(a,b,c,d,e){var u=new A.h4(a,c,e)
u.f=d
P.k8(d,0,P.w)
return u},
bZ:function bZ(a,b,c){this.a=a
this.b=b
this.c=c},
dV:function dV(a){this.a=a},
M:function M(a,b,c){this.a=a
this.b=b
this.c=c},
eN:function eN(a,b){var _=this
_.fk=_.c3=_.c2=_.c1=_.ab=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.ft=_.fs=_.fq=_.be=_.bd=_.bc=_.bb=_.ba=_.b9=_.fp=_.cf=_.ce=_.fo=_.cd=_.cc=_.cb=_.fn=_.ca=_.c9=_.c8=_.fm=_.c7=_.c6=_.fl=_.c5=_.c4=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
c5:function c5(a,b){this.a=a
this.b=b},
cx:function cx(a,b){this.a=a
this.b=b},
cE:function cE(a,b){this.a=a
this.b=b},
eQ:function eQ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.ab=b3
_.c1=b4},
bC:function bC(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
bE:function bE(a,b,c,d,e,f,g,h,i,j){var _=this
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
bF:function bF(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cC:function cC(){},
cQ:function cQ(){},
h9:function h9(a){this.a=a},
cR:function cR(a,b,c){this.a=a
this.c=b
this.d=c},
h6:function h6(a,b,c){this.a=a
this.c=b
this.d=c},
h7:function h7(a,b,c){this.a=a
this.c=b
this.d=c},
h8:function h8(a,b,c){this.a=a
this.c=b
this.d=c},
h4:function h4(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
H:function H(a,b,c){this.a=a
this.c=b
this.d=c},
h5:function h5(a,b,c){this.a=a
this.c=b
this.d=c},
B:function B(a,b,c){this.a=a
this.c=b
this.d=c},
bB:function bB(a,b,c){this.a=a
this.c=b
this.d=c},
ha:function ha(a,b,c){this.a=a
this.c=b
this.d=c},
bD:function bD(a,b,c){this.a=a
this.c=b
this.d=c},
X:function X(a,b,c){this.a=a
this.c=b
this.d=c},
L:function L(a,b,c){this.a=a
this.c=b
this.d=c},
b6:function b6(a,b,c){this.a=a
this.c=b
this.d=c}},F={
hZ:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
bR:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.u(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.u(u+a3,t+a1,s+a2)
q=new V.u(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.u(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.hZ(i)
l=F.hZ(j.b)
k=F.lA(d,a0,new F.hY(j,F.hZ(j.c),F.hZ(j.d),l,m,c),b)
if(k!=null)a.bk(k)},
lA:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
if(a<1)return
if(b<1)return
u=F.j9()
t=H.c([],[F.b7])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
o=q.bV(new V.aq(p,0,0,1),new V.a7(r,1))
c.$3(o,r,0)
t.push(o.b8(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
o=k.bV(new V.aq(j,i,h,1),new V.a7(r,m))
c.$3(o,r,n)
t.push(o.b8(d))}}u.d.eh(a+1,b+1,t)
return u},
c9:function(a,b,c){var u=new F.aW(),t=a.a
if(t==null)H.p(P.o("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.p(P.o("May not create a face with vertices attached to different shapes."))
u.e9(a)
u.ea(b)
u.eb(c)
u.a.a.d.b.push(u)
u.a.a.O()
return u},
j9:function(){var u=new F.fv(),t=new F.hl(u)
t.b=!1
t.c=H.c([],[F.b7])
u.a=t
t=new F.fy(u)
t.b=H.c([],[F.bx])
u.b=t
t=new F.fx(u)
t.b=H.c([],[F.br])
u.c=t
t=new F.fw(u)
t.b=H.c([],[F.aW])
u.d=t
u.e=null
return u},
jk:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.b7(),r=new F.ht()
r.b=H.c([],[F.bx])
s.b=r
r=new F.hp()
u=[F.br]
r.b=H.c([],u)
r.c=H.c([],u)
s.c=r
r=new F.hm()
u=[F.aW]
r.b=H.c([],u)
r.c=H.c([],u)
r.d=H.c([],u)
s.d=r
h=$.jM()
s.e=0
r=$.an()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.am().a)!==0?e:t
s.x=(u&$.al().a)!==0?b:t
s.y=(u&$.ao().a)!==0?f:t
s.z=(u&$.aP().a)!==0?g:t
s.Q=(u&$.jN().a)!==0?c:t
s.ch=(u&$.be().a)!==0?i:0
s.cx=(u&$.ak().a)!==0?a:t
return s},
hY:function hY(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aW:function aW(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
em:function em(){},
fC:function fC(){},
br:function br(){this.b=this.a=null},
eD:function eD(){},
h3:function h3(){},
bx:function bx(){this.a=null},
fv:function fv(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fw:function fw(a){this.a=a
this.b=null},
fx:function fx(a){this.a=a
this.b=null},
fy:function fy(a){this.a=a
this.b=null},
b7:function b7(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hv:function hv(a){this.a=a},
hu:function hu(a){this.a=a},
hl:function hl(a){this.a=a
this.c=this.b=null},
hm:function hm(){this.d=this.c=this.b=null},
hn:function hn(a,b){this.a=a
this.b=b},
ho:function ho(a,b){this.a=a
this.b=b},
hp:function hp(){this.c=this.b=null},
hr:function hr(){},
hq:function hq(){},
hs:function hs(){},
fd:function fd(){},
ht:function ht(){this.b=null}},N={
ju:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="testCanvas",f=null,e=V.kp("Test 039"),d=W.ik()
d.className="pageLargeCanvas"
d.id=g
e.a.appendChild(d)
u=[P.q]
e.bW(H.c(["Test of an animated texture on a square."],u))
e.bW(H.c(["\xab[Back to Tests|../]"],u))
t=document.getElementById(g)
if(t==null)H.p(P.o("Failed to find an element with the identifier, testCanvas."))
s=E.kt(t,!0,!0,!0,!1)
r=new E.at()
r.a=""
r.b=!0
e=E.at
u=O.il(e)
r.y=u
u.aP(r.geN(),r.geQ())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.sbs(0,f)
r.saB(f)
q=F.j9()
F.bR(q,f,f,1,1,1,0,0,1)
F.bR(q,f,f,1,1,0,1,0,3)
F.bR(q,f,f,1,1,0,0,1,2)
F.bR(q,f,f,1,1,-1,0,0,0)
F.bR(q,f,f,1,1,0,-1,0,0)
F.bR(q,f,f,1,1,0,0,-1,3)
q.ak()
q.eM(new F.hq(),new F.fd())
r.sbs(0,q)
u=new U.cB()
u.r=u.f=u.e=u.d=u.c=u.b=u.a=0
u.scD(0)
u.scq(0,0)
u.scw(0)
p=u.d
if(!(Math.abs(p-0.1)<$.v().a)){u.d=0.1
p=new D.x("deltaYaw",p,0.1)
p.b=!0
u.ai(p)}p=u.e
if(!(Math.abs(p-0.21)<$.v().a)){u.e=0.21
p=new D.x("deltaPitch",p,0.21)
p.b=!0
u.ai(p)}p=u.f
if(!(Math.abs(p-0.32)<$.v().a)){u.f=0.32
p=new D.x("deltaRoll",p,0.32)
p.b=!0
u.ai(p)}r.saB(u)
u=P.iv([s.f.an("../resources/diceColor/posx.png"),s.f.an("../resources/diceColor/posz.png"),s.f.an("../resources/diceColor/negx.png"),s.f.an("../resources/diceColor/negy.png"),s.f.an("../resources/diceColor/posy.png"),s.f.an("../resources/diceColor/negz.png")],!0,T.cK)
o=new T.fR()
o.b=o.a=0
o.e=u
P.jd(P.im(500),new N.i9(o))
n=new O.cn()
u=O.il(V.ac)
n.e=u
u.aP(n.gdf(),n.gdh())
u=new O.a5(n,"emission")
u.c=new A.M(!1,!1,!1)
u.f=new V.J(0,0,0)
n.f=u
u=new O.a5(n,"ambient")
u.c=new A.M(!1,!1,!1)
u.f=new V.J(0,0,0)
n.r=u
u=new O.a5(n,"diffuse")
u.c=new A.M(!1,!1,!1)
u.f=new V.J(0,0,0)
n.x=u
u=new O.a5(n,"invDiffuse")
u.c=new A.M(!1,!1,!1)
u.f=new V.J(0,0,0)
n.y=u
u=new O.eT(n,"specular")
u.c=new A.M(!1,!1,!1)
u.f=new V.J(0,0,0)
u.ch=100
n.z=u
u=new O.eP(n,"bump")
u.c=new A.M(!1,!1,!1)
n.Q=u
n.ch=null
u=new O.a5(n,"reflect")
u.c=new A.M(!1,!1,!1)
u.f=new V.J(0,0,0)
n.cx=u
u=new O.eS(n,"refract")
u.c=new A.M(!1,!1,!1)
u.f=new V.J(0,0,0)
u.ch=1
n.cy=u
u=new O.eO(n,"alpha")
u.c=new A.M(!1,!1,!1)
u.f=1
n.db=u
u=new D.ci()
u.by(D.S)
u.e=H.c([],[D.aT])
u.f=H.c([],[D.fk])
u.r=H.c([],[D.fF])
u.y=u.x=null
u.br(u.gdd(),u.gdS(),u.gdU())
n.dx=u
p=new O.eR()
p.b=new V.aq(0,0,0,0)
p.c=1
p.d=10
p.e=!1
n.dy=p
p=u.x
u=p==null?u.x=D.Z():p
u.m(0,n.ge5())
u=n.dx
p=u.y
u=p==null?u.y=D.Z():p
u.m(0,n.gaG())
n.fr=null
u=n.dx
m=V.iA()
p=U.iV(V.iZ(V.j3(),m,new V.u(1,-1,-3)))
l=new V.J(1,1,1)
k=new D.aT()
k.c=new V.J(1,1,1)
k.a=V.kv()
k.d=V.iA()
k.e=V.ku()
j=k.b
k.b=p
p.gt().m(0,k.gcT())
p=new D.x("mover",j,k.b)
p.b=!0
k.a5(p)
if(!k.c.l(0,l)){j=k.c
k.c=l
p=new D.x("color",j,l)
p.b=!0
k.a5(p)}u.m(0,k)
n.r.saL(0,new V.J(V.ba(0.2),V.ba(0.2),V.ba(0.2)))
n.x.saL(0,new V.J(V.ba(0.8),V.ba(0.8),V.ba(0.8)))
n.r.scA(o)
n.x.scA(o)
u=new M.c8()
u.a=!0
e=O.il(e)
u.e=e
e.aP(u.gdl(),u.gdn())
u.y=u.x=u.r=u.f=null
i=X.k1(f)
h=new X.cu()
h.c=1.0471975511965976
h.d=0.1
h.e=2000
h.saB(f)
e=h.c
if(!(Math.abs(e-1.0471975511965976)<$.v().a)){h.c=1.0471975511965976
e=new D.x("fov",e,1.0471975511965976)
e.b=!0
h.ag(e)}e=h.d
if(!(Math.abs(e-0.1)<$.v().a)){h.d=0.1
e=new D.x("near",e,0.1)
e.b=!0
h.ag(e)}e=h.e
if(!(Math.abs(e-2000)<$.v().a)){h.e=2000
e=new D.x("far",e,2000)
e.b=!0
h.ag(e)}e=u.b
if(e!==h){if(e!=null)e.gt().B(0,u.ga1())
j=u.b
u.b=h
h.gt().m(0,u.ga1())
e=new D.x("camera",j,u.b)
e.b=!0
u.a6(e)}e=u.c
if(e!==i){if(e!=null)e.gt().B(0,u.ga1())
j=u.c
u.c=i
i.gt().m(0,u.ga1())
e=new D.x("target",j,u.c)
e.b=!0
u.a6(e)}u.scz(f)
u.scz(n)
u.e.m(0,r)
u.b.saB(U.iV(V.ad(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
e=s.d
if(e!==u){if(e!=null)e.gt().B(0,s.gbz())
s.d=u
u.gt().m(0,s.gbz())
s.bA()}V.lx(s)},
i9:function i9(a){this.a=a}}
var w=[C,H,J,P,W,T,R,O,E,Z,D,X,V,U,M,A,F,N]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.it.prototype={}
J.a.prototype={
l:function(a,b){return a===b},
gG:function(a){return H.bz(a)},
h:function(a){return"Instance of '"+H.e(H.bA(a))+"'"}}
J.ey.prototype={
h:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$iaN:1}
J.cf.prototype={
l:function(a,b){return null==b},
h:function(a){return"null"},
gG:function(a){return 0}}
J.cg.prototype={
gG:function(a){return 0},
h:function(a){return String(a)}}
J.fi.prototype={}
J.bG.prototype={}
J.ay.prototype={
h:function(a){var u=a[$.jB()]
if(u==null)return this.cM(a)
return"JavaScript function for "+H.e(J.U(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.ax.prototype={
cu:function(a,b){if(!!a.fixed$length)H.p(P.T("removeAt"))
if(b<0||b>=a.length)throw H.f(P.cy(b,null))
return a.splice(b,1)[0]},
B:function(a,b){var u
if(!!a.fixed$length)H.p(P.T("remove"))
for(u=0;u<a.length;++u)if(J.C(a[u],b)){a.splice(u,1)
return!0}return!1},
C:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.f(P.bk(a))}},
p:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.b(r,u)
r[u]=t}return r.join(b)},
eK:function(a){return this.p(a,"")},
v:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
cJ:function(a,b,c){var u=a.length
if(b>u)throw H.f(P.a8(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.f(P.a8(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.dO(a,0)])
return H.c(a.slice(b,c),[H.dO(a,0)])},
geF:function(a){if(a.length>0)return a[0]
throw H.f(H.iW())},
gbh:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.f(H.iW())},
aQ:function(a,b){if(!!a.immutable$list)H.p(P.T("sort"))
H.cD(a,0,a.length-1,b)},
a2:function(a,b){var u
for(u=0;u<a.length;++u)if(J.C(a[u],b))return!0
return!1},
h:function(a){return P.iq(a,"[","]")},
gK:function(a){return new J.V(a,a.length)},
gG:function(a){return H.bz(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.p(P.T("set length"))
if(b<0)throw H.f(P.a8(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){if(b>=a.length||b<0)throw H.f(H.bc(a,b))
return a[b]},
k:function(a,b,c){if(!!a.immutable$list)H.p(P.T("indexed set"))
if(b>=a.length||b<0)throw H.f(H.bc(a,b))
a[b]=c},
$ik:1}
J.is.prototype={}
J.V.prototype={
gH:function(a){return this.d},
u:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.f(H.n(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bq.prototype={
eq:function(a,b){var u
if(typeof b!=="number")throw H.f(H.aM(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gaM(b)
if(this.gaM(a)===u)return 0
if(this.gaM(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaM:function(a){return a===0?1/a<0:a<0},
fb:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.f(P.T(""+a+".toInt()"))},
bf:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.f(P.T(""+a+".floor()"))},
Z:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.T(""+a+".round()"))},
cB:function(a,b){var u
if(b>20)throw H.f(P.a8(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gaM(a))return"-"+u
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
cF:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
cN:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.bS(a,b)},
S:function(a,b){return(a|0)===a?a/b|0:this.bS(a,b)},
bS:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.f(P.T("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
aJ:function(a,b){var u
if(a>0)u=this.ef(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
ef:function(a,b){return b>31?0:a>>>b},
$iE:1,
$ia1:1}
J.ce.prototype={$iw:1}
J.cd.prototype={}
J.aY.prototype={
b7:function(a,b){if(b<0)throw H.f(H.bc(a,b))
if(b>=a.length)H.p(H.bc(a,b))
return a.charCodeAt(b)},
aH:function(a,b){if(b>=a.length)throw H.f(H.bc(a,b))
return a.charCodeAt(b)},
E:function(a,b){if(typeof b!=="string")throw H.f(P.iR(b,null,null))
return a+b},
bu:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.f(P.cy(b,null))
if(b>c)throw H.f(P.cy(b,null))
if(c>a.length)throw H.f(P.cy(c,null))
return a.substring(b,c)},
au:function(a,b){return this.bu(a,b,null)},
M:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.x)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
W:function(a,b){var u=b-a.length
if(u<=0)return a
return this.M(" ",u)+a},
h:function(a){return a},
gG:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gj:function(a){return a.length},
$iq:1}
H.G.prototype={
gj:function(a){return this.a.length},
i:function(a,b){return C.b.b7(this.a,b)},
$am:function(){return[P.w]},
$ak:function(){return[P.w]}}
H.eh.prototype={}
H.ck.prototype={
gH:function(a){return this.d},
u:function(){var u,t=this,s=t.a,r=J.iG(s),q=r.gj(s)
if(t.b!==q)throw H.f(P.bk(s))
u=t.c
if(u>=q){t.d=null
return!1}t.d=r.v(s,u);++t.c
return!0}}
H.eL.prototype={
gK:function(a){return new H.eM(J.bf(this.a),this.b)},
gj:function(a){return J.bg(this.a)},
v:function(a,b){return this.b.$1(J.iQ(this.a,b))},
$ak:function(a,b){return[b]}}
H.eM.prototype={
u:function(){var u=this,t=u.b
if(t.u()){u.a=u.c.$1(t.gH(t))
return!0}u.a=null
return!1},
gH:function(a){return this.a}}
H.hy.prototype={
gK:function(a){return new H.hz(J.bf(this.a),this.b)}}
H.hz.prototype={
u:function(){var u,t
for(u=this.a,t=this.b;u.u();)if(t.$1(u.gH(u)))return!0
return!1},
gH:function(a){var u=this.a
return u.gH(u)}}
H.ca.prototype={}
H.hd.prototype={}
H.cS.prototype={}
H.h1.prototype={
V:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.fe.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.eA.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.hc.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.ig.prototype={
$1:function(a){if(!!J.N(a).$iaU)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:6}
H.ds.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bj.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
gff:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.fO.prototype={}
H.fI.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.dP(u)+"'"}}
H.bh.prototype={
l:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bh))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gG:function(a){var u,t=this.c
if(t==null)u=H.bz(this.a)
else u=typeof t!=="object"?J.bY(t):H.bz(t)
return(u^H.bz(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.bA(u))+"'")}}
H.e1.prototype={
h:function(a){return this.a}}
H.fs.prototype={
h:function(a){return"RuntimeError: "+H.e(this.a)}}
H.F.prototype={
gj:function(a){return this.a},
gac:function(a){return new H.cj(this,[H.dO(this,0)])},
bZ:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.bH(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.bH(t,b)}else return s.eI(b)},
eI:function(a){var u=this.d
if(u==null)return!1
return this.bg(this.aV(u,J.bY(a)&0x3ffffff),a)>=0},
i:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.aI(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.aI(r,b)
s=t==null?null:t.b
return s}else return q.eJ(b)},
eJ:function(a){var u,t,s=this.d
if(s==null)return
u=this.aV(s,J.bY(a)&0x3ffffff)
t=this.bg(u,a)
if(t<0)return
return u[t].b},
k:function(a,b,c){var u,t,s,r,q,p,o=this
if(typeof b==="string"){u=o.b
o.bD(u==null?o.b=o.aY():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.bD(t==null?o.c=o.aY():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.aY()
r=J.bY(b)&0x3ffffff
q=o.aV(s,r)
if(q==null)o.b2(s,r,[o.aZ(b,c)])
else{p=o.bg(q,b)
if(p>=0)q[p].b=c
else q.push(o.aZ(b,c))}}},
C:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.f(P.bk(u))
t=t.c}},
bD:function(a,b,c){var u=this.aI(a,b)
if(u==null)this.b2(a,b,this.aZ(b,c))
else u.b=c},
aZ:function(a,b){var u=this,t=new H.eE(a,b)
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
bg:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.C(a[t].a,b))return t
return-1},
h:function(a){return P.iY(this)},
aI:function(a,b){return a[b]},
aV:function(a,b){return a[b]},
b2:function(a,b,c){a[b]=c},
d7:function(a,b){delete a[b]},
bH:function(a,b){return this.aI(a,b)!=null},
aY:function(){var u="<non-identifier-key>",t=Object.create(null)
this.b2(t,u,t)
this.d7(t,u)
return t}}
H.eE.prototype={}
H.cj.prototype={
gj:function(a){return this.a.a},
gK:function(a){var u=this.a,t=new H.eF(u,u.r)
t.c=u.e
return t}}
H.eF.prototype={
gH:function(a){return this.d},
u:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.bk(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.i5.prototype={
$1:function(a){return this.a(a)},
$S:6}
H.i6.prototype={
$2:function(a,b){return this.a(a,b)}}
H.i7.prototype={
$1:function(a){return this.a(a)}}
H.ez.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.bw.prototype={}
H.cp.prototype={
gj:function(a){return a.length},
$ir:1,
$ar:function(){}}
H.bv.prototype={
i:function(a,b){H.aK(b,a,a.length)
return a[b]},
$am:function(){return[P.E]},
$ik:1,
$ak:function(){return[P.E]}}
H.cq.prototype={
$am:function(){return[P.w]},
$ik:1,
$ak:function(){return[P.w]}}
H.f7.prototype={
i:function(a,b){H.aK(b,a,a.length)
return a[b]}}
H.f8.prototype={
i:function(a,b){H.aK(b,a,a.length)
return a[b]}}
H.f9.prototype={
i:function(a,b){H.aK(b,a,a.length)
return a[b]}}
H.fa.prototype={
i:function(a,b){H.aK(b,a,a.length)
return a[b]}}
H.fb.prototype={
i:function(a,b){H.aK(b,a,a.length)
return a[b]}}
H.cr.prototype={
gj:function(a){return a.length},
i:function(a,b){H.aK(b,a,a.length)
return a[b]}}
H.fc.prototype={
gj:function(a){return a.length},
i:function(a,b){H.aK(b,a,a.length)
return a[b]}}
H.bJ.prototype={}
H.bK.prototype={}
H.bL.prototype={}
H.bM.prototype={}
P.hB.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:13}
P.hA.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.hC.prototype={
$0:function(){this.a.$0()}}
P.hD.prototype={
$0:function(){this.a.$0()}}
P.dy.prototype={
cW:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bb(new P.hV(this,b),0),a)
else throw H.f(P.T("`setTimeout()` not found."))},
cX:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bb(new P.hU(this,a,Date.now(),b),0),a)
else throw H.f(P.T("Periodic timer."))},
$icM:1}
P.hV.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.hU.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.cN(u,q)}s.c=r
t.d.$1(s)}}
P.cV.prototype={}
P.cH.prototype={}
P.fL.prototype={}
P.cM.prototype={}
P.hX.prototype={}
P.i1.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.ct():s
s=this.b
if(s==null)throw H.f(t)
u=H.f(t)
u.stack=s.h(0)
throw u}}
P.hO.prototype={
f6:function(a){var u,t,s,r=null
try{if(C.e===$.a0){a.$0()
return}P.l1(r,r,this,a)}catch(s){u=H.ie(s)
t=H.iI(s)
P.jn(r,r,this,u,t)}},
f7:function(a,b){var u,t,s,r=null
try{if(C.e===$.a0){a.$1(b)
return}P.l2(r,r,this,a,b)}catch(s){u=H.ie(s)
t=H.iI(s)
P.jn(r,r,this,u,t)}},
f8:function(a,b){return this.f7(a,b,null)},
em:function(a){return new P.hP(this,a)},
bX:function(a,b){return new P.hQ(this,a,b)}}
P.hP.prototype={
$0:function(){return this.a.f6(this.b)}}
P.hQ.prototype={
$1:function(a){return this.a.f8(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.hL.prototype={
gK:function(a){var u=new P.d9(this,this.r)
u.c=this.e
return u},
gj:function(a){return this.a},
m:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.bE(u==null?s.b=P.iC():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.bE(t==null?s.c=P.iC():t,b)}else return s.cZ(0,b)},
cZ:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.iC()
u=s.bF(b)
t=r[u]
if(t==null)r[u]=[s.aS(b)]
else{if(s.bK(t,b)>=0)return!1
t.push(s.aS(b))}return!0},
B:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.e2(this.c,b)
else return this.e1(0,b)},
e1:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.da(r,b)
t=s.bK(u,b)
if(t<0)return!1
s.bT(u.splice(t,1)[0])
return!0},
bE:function(a,b){if(a[b]!=null)return!1
a[b]=this.aS(b)
return!0},
e2:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.bT(u)
delete a[b]
return!0},
bL:function(){this.r=1073741823&this.r+1},
aS:function(a){var u,t=this,s=new P.hM(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.bL()
return s},
bT:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.bL()},
bF:function(a){return J.bY(a)&1073741823},
da:function(a,b){return a[this.bF(b)]},
bK:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.C(a[t].a,b))return t
return-1}}
P.hM.prototype={}
P.d9.prototype={
gH:function(a){return this.d},
u:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.bk(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.eG.prototype={$ik:1}
P.m.prototype={
gK:function(a){return new H.ck(a,this.gj(a))},
v:function(a,b){return this.i(a,b)},
fd:function(a,b){var u,t,s=this,r=H.c([],[H.ll(s,a,"m",0)])
C.a.sj(r,s.gj(a))
for(u=0;u<s.gj(a);++u){t=s.i(a,u)
if(u>=r.length)return H.b(r,u)
r[u]=t}return r},
fc:function(a){return this.fd(a,!0)},
h:function(a){return P.iq(a,"[","]")}}
P.eJ.prototype={}
P.eK.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:7}
P.ab.prototype={
C:function(a,b){var u,t
for(u=J.bf(this.gac(a));u.u();){t=u.gH(u)
b.$2(t,this.i(a,t))}},
gj:function(a){return J.bg(this.gac(a))},
h:function(a){return P.iY(a)}}
P.hR.prototype={
h:function(a){return P.iq(this,"{","}")},
v:function(a,b){var u,t,s
P.j6(b,"index")
for(u=P.kA(this,this.r),t=0;u.u();){s=u.d
if(b===t)return s;++t}throw H.f(P.A(b,this,"index",null,t))},
$ik:1}
P.da.prototype={}
P.e3.prototype={}
P.e5.prototype={}
P.ei.prototype={}
P.hg.prototype={}
P.hh.prototype={
er:function(a){var u,t,s=P.j7(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.hW(u)
if(t.d9(a,0,s)!==s)t.bU(C.b.b7(a,s-1),0)
return new Uint8Array(u.subarray(0,H.kE(0,t.b,u.length)))}}
P.hW.prototype={
bU:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
d9:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.b7(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.aH(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.bU(r,C.b.aH(a,p)))s=p}else if(r<=2047){q=n.b
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
P.aN.prototype={}
P.ar.prototype={
l:function(a,b){if(b==null)return!1
return b instanceof P.ar&&this.a===b.a&&!0},
gG:function(a){var u=this.a
return(u^C.d.aJ(u,30))&1073741823},
h:function(a){var u=this,t=P.jZ(H.ki(u)),s=P.c4(H.kg(u)),r=P.c4(H.kc(u)),q=P.c4(H.kd(u)),p=P.c4(H.kf(u)),o=P.c4(H.kh(u)),n=P.k_(H.ke(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.E.prototype={}
P.as.prototype={
l:function(a,b){if(b==null)return!1
return b instanceof P.as&&this.a===b.a},
gG:function(a){return C.d.gG(this.a)},
h:function(a){var u,t,s,r=new P.eg(),q=this.a
if(q<0)return"-"+new P.as(0-q).h(0)
u=r.$1(C.d.S(q,6e7)%60)
t=r.$1(C.d.S(q,1e6)%60)
s=new P.ef().$1(q%1e6)
return""+C.d.S(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
P.ef.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.eg.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.aU.prototype={}
P.ct.prototype={
h:function(a){return"Throw of null."}}
P.a2.prototype={
gaU:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaT:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gaU()+o+u
if(!q.a)return t
s=q.gaT()
r=P.ip(q.b)
return t+s+": "+r}}
P.b3.prototype={
gaU:function(){return"RangeError"},
gaT:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.ew.prototype={
gaU:function(){return"RangeError"},
gaT:function(){var u,t=this.b
if(typeof t!=="number")return t.ar()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gj:function(a){return this.f}}
P.he.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.hb.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.fH.prototype={
h:function(a){return"Bad state: "+this.a}}
P.e4.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.ip(u)+"."}}
P.fh.prototype={
h:function(a){return"Out of Memory"},
$iaU:1}
P.cF.prototype={
h:function(a){return"Stack Overflow"},
$iaU:1}
P.ea.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.d2.prototype={
h:function(a){return"Exception: "+this.a}}
P.et.prototype={
h:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.b.bu(s,0,75)+"...":s
return t+"\n"+r}}
P.w.prototype={}
P.k.prototype={
gj:function(a){var u,t=this.gK(this)
for(u=0;t.u();)++u
return u},
v:function(a,b){var u,t,s
P.j6(b,"index")
for(u=this.gK(this),t=0;u.u();){s=u.gH(u)
if(b===t)return s;++t}throw H.f(P.A(b,this,"index",null,t))},
h:function(a){return P.k2(this,"(",")")}}
P.ex.prototype={}
P.b0.prototype={$ik:1}
P.cl.prototype={}
P.aA.prototype={
gG:function(a){return P.P.prototype.gG.call(this,this)},
h:function(a){return"null"}}
P.a1.prototype={}
P.P.prototype={constructor:P.P,$iP:1,
l:function(a,b){return this===b},
gG:function(a){return H.bz(this)},
h:function(a){return"Instance of '"+H.e(H.bA(this))+"'"},
toString:function(){return this.h(this)}}
P.q.prototype={}
P.aF.prototype={
gj:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.j.prototype={}
W.dR.prototype={
gj:function(a){return a.length}}
W.dT.prototype={
h:function(a){return String(a)}}
W.dU.prototype={
h:function(a){return String(a)}}
W.c_.prototype={}
W.aR.prototype={
bq:function(a,b,c){if(c!=null)return a.getContext(b,P.lb(c))
return a.getContext(b)},
cE:function(a,b){return this.bq(a,b,null)},
$iaR:1}
W.ap.prototype={
gj:function(a){return a.length}}
W.e6.prototype={
gj:function(a){return a.length}}
W.y.prototype={$iy:1}
W.bl.prototype={
gj:function(a){return a.length}}
W.e7.prototype={}
W.W.prototype={}
W.a4.prototype={}
W.e8.prototype={
gj:function(a){return a.length}}
W.e9.prototype={
gj:function(a){return a.length}}
W.eb.prototype={
gj:function(a){return a.length}}
W.ec.prototype={
h:function(a){return String(a)}}
W.c6.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.A(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ir:1,
$ar:function(){return[[P.a9,P.a1]]},
$am:function(){return[[P.a9,P.a1]]},
$ik:1,
$ak:function(){return[[P.a9,P.a1]]}}
W.c7.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gaq(a))+" x "+H.e(this.gam(a))},
l:function(a,b){var u
if(b==null)return!1
u=J.N(b)
if(!u.$ia9)return!1
return a.left===u.gcj(b)&&a.top===u.gcC(b)&&this.gaq(a)===u.gaq(b)&&this.gam(a)===u.gam(b)},
gG:function(a){return W.jl(C.c.gG(a.left),C.c.gG(a.top),C.c.gG(this.gaq(a)),C.c.gG(this.gam(a)))},
gam:function(a){return a.height},
gcj:function(a){return a.left},
gcC:function(a){return a.top},
gaq:function(a){return a.width},
$ia9:1,
$aa9:function(){return[P.a1]}}
W.ed.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.A(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ir:1,
$ar:function(){return[P.q]},
$am:function(){return[P.q]},
$ik:1,
$ak:function(){return[P.q]}}
W.ee.prototype={
gj:function(a){return a.length}}
W.hF.prototype={
gj:function(a){return this.b.length},
i:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
m:function(a,b){this.a.appendChild(b)
return b},
gK:function(a){var u=this.fc(this)
return new J.V(u,u.length)},
$am:function(){return[W.O]},
$ak:function(){return[W.O]}}
W.O.prototype={
gbY:function(a){return new W.hF(a,a.children)},
h:function(a){return a.localName},
$iO:1}
W.h.prototype={$ih:1}
W.d.prototype={
eg:function(a,b,c,d){if(c!=null)this.d_(a,b,c,!1)},
d_:function(a,b,c,d){return a.addEventListener(b,H.bb(c,1),!1)}}
W.au.prototype={$iau:1}
W.en.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.A(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.au]},
$am:function(){return[W.au]},
$ik:1,
$ak:function(){return[W.au]}}
W.eo.prototype={
gj:function(a){return a.length}}
W.es.prototype={
gj:function(a){return a.length}}
W.av.prototype={$iav:1}
W.ev.prototype={
gj:function(a){return a.length}}
W.bm.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.A(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.D]},
$am:function(){return[W.D]},
$ik:1,
$ak:function(){return[W.D]}}
W.aw.prototype={$iaw:1,
gc_:function(a){return a.data}}
W.bn.prototype={$ibn:1}
W.aZ.prototype={$iaZ:1}
W.eH.prototype={
h:function(a){return String(a)}}
W.f_.prototype={
gj:function(a){return a.length}}
W.f0.prototype={
i:function(a,b){return P.aj(a.get(b))},
C:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aj(u.value[1]))}},
gac:function(a){var u=H.c([],[P.q])
this.C(a,new W.f1(u))
return u},
gj:function(a){return a.size}}
W.f1.prototype={
$2:function(a,b){return this.a.push(a)}}
W.f2.prototype={
i:function(a,b){return P.aj(a.get(b))},
C:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aj(u.value[1]))}},
gac:function(a){var u=H.c([],[P.q])
this.C(a,new W.f3(u))
return u},
gj:function(a){return a.size}}
W.f3.prototype={
$2:function(a,b){return this.a.push(a)}}
W.az.prototype={$iaz:1}
W.f4.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.A(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.az]},
$am:function(){return[W.az]},
$ik:1,
$ak:function(){return[W.az]}}
W.a6.prototype={$ia6:1}
W.hE.prototype={
gK:function(a){var u=this.a.childNodes
return new W.cb(u,u.length)},
gj:function(a){return this.a.childNodes.length},
i:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
$am:function(){return[W.D]},
$ak:function(){return[W.D]}}
W.D.prototype={
h:function(a){var u=a.nodeValue
return u==null?this.cL(a):u},
$iD:1}
W.cs.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.A(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.D]},
$am:function(){return[W.D]},
$ik:1,
$ak:function(){return[W.D]}}
W.aB.prototype={$iaB:1,
gj:function(a){return a.length}}
W.fj.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.A(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.aB]},
$am:function(){return[W.aB]},
$ik:1,
$ak:function(){return[W.aB]}}
W.fq.prototype={
i:function(a,b){return P.aj(a.get(b))},
C:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aj(u.value[1]))}},
gac:function(a){var u=H.c([],[P.q])
this.C(a,new W.fr(u))
return u},
gj:function(a){return a.size}}
W.fr.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ft.prototype={
gj:function(a){return a.length}}
W.aC.prototype={$iaC:1}
W.fD.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.A(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.aC]},
$am:function(){return[W.aC]},
$ik:1,
$ak:function(){return[W.aC]}}
W.aD.prototype={$iaD:1}
W.fE.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.A(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.aD]},
$am:function(){return[W.aD]},
$ik:1,
$ak:function(){return[W.aD]}}
W.aE.prototype={$iaE:1,
gj:function(a){return a.length}}
W.fJ.prototype={
i:function(a,b){return a.getItem(b)},
C:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gac:function(a){var u=H.c([],[P.q])
this.C(a,new W.fK(u))
return u},
gj:function(a){return a.length}}
W.fK.prototype={
$2:function(a,b){return this.a.push(a)}}
W.af.prototype={$iaf:1}
W.aG.prototype={$iaG:1}
W.ag.prototype={$iag:1}
W.fP.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.A(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.ag]},
$am:function(){return[W.ag]},
$ik:1,
$ak:function(){return[W.ag]}}
W.fQ.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.A(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.aG]},
$am:function(){return[W.aG]},
$ik:1,
$ak:function(){return[W.aG]}}
W.fW.prototype={
gj:function(a){return a.length}}
W.aH.prototype={$iaH:1}
W.b4.prototype={$ib4:1}
W.fZ.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.A(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.aH]},
$am:function(){return[W.aH]},
$ik:1,
$ak:function(){return[W.aH]}}
W.h_.prototype={
gj:function(a){return a.length}}
W.aI.prototype={}
W.hf.prototype={
h:function(a){return String(a)}}
W.hw.prototype={
gj:function(a){return a.length}}
W.aJ.prototype={
gew:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.T("deltaY is not supported"))},
gev:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.T("deltaX is not supported"))},
$iaJ:1}
W.bI.prototype={
e4:function(a,b){return a.requestAnimationFrame(H.bb(b,1))},
d8:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.hG.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.A(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.y]},
$am:function(){return[W.y]},
$ik:1,
$ak:function(){return[W.y]}}
W.cY.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
l:function(a,b){var u
if(b==null)return!1
u=J.N(b)
if(!u.$ia9)return!1
return a.left===u.gcj(b)&&a.top===u.gcC(b)&&a.width===u.gaq(b)&&a.height===u.gam(b)},
gG:function(a){return W.jl(C.c.gG(a.left),C.c.gG(a.top),C.c.gG(a.width),C.c.gG(a.height))},
gam:function(a){return a.height},
gaq:function(a){return a.width}}
W.hJ.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.A(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.av]},
$am:function(){return[W.av]},
$ik:1,
$ak:function(){return[W.av]}}
W.df.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.A(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.D]},
$am:function(){return[W.D]},
$ik:1,
$ak:function(){return[W.D]}}
W.hS.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.A(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.aE]},
$am:function(){return[W.aE]},
$ik:1,
$ak:function(){return[W.aE]}}
W.hT.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.A(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.af]},
$am:function(){return[W.af]},
$ik:1,
$ak:function(){return[W.af]}}
W.hH.prototype={}
W.hI.prototype={
$1:function(a){return this.a.$1(a)}}
W.z.prototype={
gK:function(a){return new W.cb(a,this.gj(a))}}
W.cb.prototype={
u:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.dQ(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gH:function(a){return this.d}}
W.cX.prototype={}
W.cZ.prototype={}
W.d_.prototype={}
W.d0.prototype={}
W.d1.prototype={}
W.d3.prototype={}
W.d4.prototype={}
W.d5.prototype={}
W.d6.prototype={}
W.db.prototype={}
W.dc.prototype={}
W.dd.prototype={}
W.de.prototype={}
W.dg.prototype={}
W.dh.prototype={}
W.dk.prototype={}
W.dl.prototype={}
W.dm.prototype={}
W.bN.prototype={}
W.bO.prototype={}
W.dn.prototype={}
W.dp.prototype={}
W.dt.prototype={}
W.dw.prototype={}
W.dx.prototype={}
W.bP.prototype={}
W.bQ.prototype={}
W.dz.prototype={}
W.dA.prototype={}
W.dE.prototype={}
W.dF.prototype={}
W.dG.prototype={}
W.dH.prototype={}
W.dI.prototype={}
W.dJ.prototype={}
W.dK.prototype={}
W.dL.prototype={}
W.dM.prototype={}
W.dN.prototype={}
P.dD.prototype={$iaw:1,
gc_:function(a){return this.a}}
P.i2.prototype={
$2:function(a,b){this.a[a]=b},
$S:7}
P.ep.prototype={
gaW:function(){var u=this.b,t=H.js(u,"m",0)
return new H.eL(new H.hy(u,new P.eq(),[t]),new P.er(),[t,W.O])},
m:function(a,b){this.b.a.appendChild(b)},
gj:function(a){return J.bg(this.gaW().a)},
i:function(a,b){var u=this.gaW()
return u.b.$1(J.iQ(u.a,b))},
gK:function(a){var u=P.iv(this.gaW(),!1,W.O)
return new J.V(u,u.length)},
$am:function(){return[W.O]},
$ak:function(){return[W.O]}}
P.eq.prototype={
$1:function(a){return!!J.N(a).$iO}}
P.er.prototype={
$1:function(a){return H.l(a,"$iO")}}
P.hN.prototype={}
P.a9.prototype={}
P.b_.prototype={$ib_:1}
P.eC.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.A(b,a,null,null,null))
return a.getItem(b)},
v:function(a,b){return this.i(a,b)},
$am:function(){return[P.b_]},
$ik:1,
$ak:function(){return[P.b_]}}
P.b1.prototype={$ib1:1}
P.ff.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.A(b,a,null,null,null))
return a.getItem(b)},
v:function(a,b){return this.i(a,b)},
$am:function(){return[P.b1]},
$ik:1,
$ak:function(){return[P.b1]}}
P.fl.prototype={
gj:function(a){return a.length}}
P.fM.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.A(b,a,null,null,null))
return a.getItem(b)},
v:function(a,b){return this.i(a,b)},
$am:function(){return[P.q]},
$ik:1,
$ak:function(){return[P.q]}}
P.i.prototype={
gbY:function(a){return new P.ep(a,new W.hE(a))}}
P.b5.prototype={$ib5:1}
P.h0.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.A(b,a,null,null,null))
return a.getItem(b)},
v:function(a,b){return this.i(a,b)},
$am:function(){return[P.b5]},
$ik:1,
$ak:function(){return[P.b5]}}
P.d7.prototype={}
P.d8.prototype={}
P.di.prototype={}
P.dj.prototype={}
P.du.prototype={}
P.dv.prototype={}
P.dB.prototype={}
P.dC.prototype={}
P.dW.prototype={
gj:function(a){return a.length}}
P.dX.prototype={
i:function(a,b){return P.aj(a.get(b))},
C:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aj(u.value[1]))}},
gac:function(a){var u=H.c([],[P.q])
this.C(a,new P.dY(u))
return u},
gj:function(a){return a.size}}
P.dY.prototype={
$2:function(a,b){return this.a.push(a)}}
P.dZ.prototype={
gj:function(a){return a.length}}
P.aQ.prototype={}
P.fg.prototype={
gj:function(a){return a.length}}
P.cW.prototype={}
P.cA.prototype={
f9:function(a,b,c,d,e,f,g){var u,t=J.N(g)
if(!!t.$iaw)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.lc(g))
return}if(!!t.$ibn)t=!0
else t=!1
if(t){a.texImage2D(b,c,d,e,f,g)
return}throw H.f(P.jS("Incorrect number or type of arguments"))}}
P.fG.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.A(b,a,null,null,null))
return P.aj(a.item(b))},
v:function(a,b){return this.i(a,b)},
$am:function(){return[[P.cl,,,]]},
$ik:1,
$ak:function(){return[[P.cl,,,]]}}
P.dq.prototype={}
P.dr.prototype={}
T.dS.prototype={
ao:function(a,b){return!0},
h:function(a){return"all"}}
T.cc.prototype={
ao:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)if(u[s].ao(0,b))return!0
return!1},
h:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.n)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.h(0)}return s}}
T.cm.prototype={}
T.ae.prototype={
ao:function(a,b){return!this.cK(0,b)},
h:function(a){return"!["+this.bv(0)+"]"}}
T.fu.prototype={
cQ:function(a){var u,t
if(a.a.length<=0)throw H.f(P.o("May not create a Set with zero characters."))
u=new H.F([P.w,P.aN])
for(t=new H.ck(a,a.gj(a));t.u();)u.k(0,t.d,!0)
this.a=u},
ao:function(a,b){return this.a.bZ(0,b)},
h:function(a){var u=this.a
return P.ix(new H.cj(u,[H.dO(u,0)]))}}
R.cG.prototype={
p:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new R.cP(this.a.F(0,b))
r.a=H.c([],[T.cm])
r.c=!1
this.c.push(r)
return r},
eE:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
if(r.ao(0,a))return r}return},
h:function(a){return this.b}}
R.cN.prototype={
h:function(a){var u=H.jy(this.b,"\n","\\n"),t=H.jy(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
R.cO.prototype={
h:function(a){return this.b}}
R.fX.prototype={
F:function(a,b){var u=this.a.i(0,b)
if(u==null){u=new R.cG(this,b)
u.c=H.c([],[R.cP])
this.a.k(0,b,u)}return u},
aE:function(a){var u,t=this.b.i(0,a)
if(t==null){t=new R.cO(a)
u=P.q
t.c=new H.F([u,u])
this.b.k(0,a,t)}return t},
fe:function(a){var u,t,s,r,q,p,o,n,m=H.c([],[R.cN]),l=this.c,k=[P.w],j=H.c([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)m.push(t)
return m}r=C.b.aH(a,s)
q=l.eE(r)
if(q==null){if(t==null){j.push(r)
p=P.ix(j)
throw H.f(P.o("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}m.push(t)
s=t.c+1
j=H.c([],k)
l=this.c
t=null}else{if(!q.c)j.push(r)
l=q.b
if(l.d!=null){p=P.ix(j)
o=l.d
n=o.c.i(0,p)
t=new R.cN(n==null?o.b:n,p,s)}++s}}}}
R.cP.prototype={
h:function(a){return this.b.b+": "+this.bv(0)}}
O.aS.prototype={
by:function(a){this.a=H.c([],[a])
this.c=this.b=null},
br:function(a,b,c){this.b=b
this.c=a},
aP:function(a,b){return this.br(a,null,b)},
dR:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
dc:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gj:function(a){return this.a.length},
gK:function(a){var u=this.a
return new J.V(u,u.length)},
v:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
m:function(a,b){var u,t,s=this,r=[H.js(s,"aS",0)]
if(s.dR(H.c([b],r))){u=s.a
t=u.length
u.push(b)
s.dc(t,H.c([b],r))}},
$ik:1}
O.bt.prototype={
gj:function(a){return this.a.length},
gt:function(){var u=this.b
return u==null?this.b=D.Z():u},
af:function(){var u=this.b
if(u!=null)u.J(null)},
gN:function(a){var u=this.a
if(u.length>0)return C.a.gbh(u)
else return V.iw()},
cs:function(a){var u=this.a
if(a==null)u.push(V.iw())
else u.push(a)
this.af()},
bm:function(){var u=this.a
if(u.length>0){u.pop()
this.af()}}}
E.e_.prototype={}
E.at.prototype={
sbs:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gt().B(0,s.gco())
u=s.c
if(u!=null)u.gt().m(0,s.gco())
t=new D.x("shape",r,s.c)
t.b=!0
s.ad(t)}},
saB:function(a){var u,t,s=this
if(!J.C(s.r,a)){u=s.r
if(u!=null)u.gt().B(0,s.gcm())
if(a!=null)a.gt().m(0,s.gcm())
s.r=a
t=new D.x("mover",u,a)
t.b=!0
s.ad(t)}},
aO:function(a,b){var u,t,s,r,q,p,o,n=this,m=n.r
if(m!=null){u=m.r
t=b.e
if(u<t){m.r=t
u=m.y
if(u!=null)++u.d
m.scD(m.a+m.d*b.y)
m.scq(0,m.b+m.e*b.y)
m.scw(m.c+m.f*b.y)
u=m.c
s=Math.cos(u)
r=Math.sin(u)
u=V.ad(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)
t=m.b
s=Math.cos(t)
r=Math.sin(t)
u=u.M(0,V.ad(s,0,-r,0,0,1,0,0,r,0,s,0,0,0,0,1))
t=m.a
s=Math.cos(t)
r=Math.sin(t)
m.x=u.M(0,V.ad(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1))
u=m.y
if(u!=null)u.a3(0)}q=m.x}else q=null
if(!J.C(q,n.x)){p=n.x
n.x=q
o=new D.x("matrix",p,q)
o.b=!0
n.ad(o)}for(m=n.y.a,m=new J.V(m,m.length);m.u();)m.d.aO(0,b)},
ap:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)s.a.push(s.gN(s))
else s.a.push(r.M(0,s.gN(s)))
s.af()
a.ct(t.f)
s=a.dy
u=(s&&C.a).gbh(s)
if(u!=null&&t.d!=null)u.f4(a,t)
for(s=t.y.a,s=new J.V(s,s.length);s.u();)s.d.ap(a)
a.cr()
a.dx.bm()},
ad:function(a){var u=this.z
if(u!=null)u.J(a)},
O:function(){return this.ad(null)},
cp:function(a){this.e=null
this.ad(a)},
eT:function(){return this.cp(null)},
cn:function(a){this.ad(a)},
eS:function(){return this.cn(null)},
cl:function(a){this.ad(a)},
eP:function(){return this.cl(null)},
eO:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gck(),s=[{func:1,ret:-1,args:[D.R]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.aV()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}this.O()},
eR:function(a,b){var u,t
for(u=b.gK(b),t=this.gck();u.u();)u.gH(u).gt().B(0,t)
this.O()},
h:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.fm.prototype={
cP:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.ar(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.bt()
t=[V.ac]
u.a=H.c([],t)
u.gt().m(0,new E.fn(s))
s.cy=u
u=new O.bt()
u.a=H.c([],t)
u.gt().m(0,new E.fo(s))
s.db=u
u=new O.bt()
u.a=H.c([],t)
u.gt().m(0,new E.fp(s))
s.dx=u
u=H.c([],[O.cI])
s.dy=u
u.push(null)
s.fr=new H.F([P.q,A.cC])},
gf1:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gN(s)
u=t.db
u=t.z=s.M(0,u.gN(u))
s=u}return s},
ct:function(a){var u=this.dy
u.push(a==null?(u&&C.a).gbh(u):a)},
cr:function(){var u=this.dy
if(u.length>1)u.pop()}}
E.fn.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.fo.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.fp.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.cL.prototype={
bB:function(a){this.cv()},
bA:function(){return this.bB(null)},
geG:function(){var u,t=this,s=Date.now(),r=C.d.S(P.im(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.ar(s,!1)
return u/r},
bP:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.M()
if(typeof r!=="number")return H.aO(r)
u=C.c.bf(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.M()
t=C.c.bf(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.jc(C.f,s.gf5())}},
cv:function(){if(!this.cx){this.cx=!0
var u=window
C.p.d8(u)
C.p.e4(u,W.jo(new E.fV(this),P.a1))}},
f3:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.bP()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ar(r,!1)
s.y=P.im(r-s.r.a).a*0.000001
r=s.cy
C.a.sj(r.a,0)
r.af()
r=s.db
C.a.sj(r.a,0)
r.af()
r=s.dx
C.a.sj(r.a,0)
r.af()
r=s.dy;(r&&C.a).sj(r,0)
s.dy.push(null)
o.ap(p.e)}}catch(q){u=H.ie(q)
t=H.iI(q)
P.iM("Error: "+H.e(u))
P.iM("Stack: "+H.e(t))
throw H.f(u)}}}
E.fV.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.f3()}}}
Z.cU.prototype={}
Z.c0.prototype={
aa:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ie(s)
t=P.o('Failed to bind buffer attribute "'+r.a.h(0)+'": '+H.e(u))
throw H.f(t)}},
h:function(a){var u=this
return"["+u.a.h(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.hx.prototype={}
Z.c1.prototype={
al:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
aa:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].aa(a)},
aF:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
ap:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.b(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
h:function(a){var u,t,s,r,q=[P.q],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)p.push(u[s].h(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.U(q[s]))
return"Buffer:  ["+this.a.h(0)+"]\nIndices: "+C.a.p(p,", ")+"\nAttrs:   "+C.a.p(r,", ")}}
Z.aX.prototype={
h:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.bA(this.c))+"'")+"]"}}
Z.ai.prototype={
gbt:function(a){var u=this.a,t=(u&$.an().a)!==0?3:0
if((u&$.am().a)!==0)t+=3
if((u&$.al().a)!==0)t+=3
if((u&$.ao().a)!==0)t+=2
if((u&$.aP().a)!==0)t+=3
if((u&$.bW().a)!==0)t+=3
if((u&$.bX().a)!==0)t+=4
if((u&$.be().a)!==0)++t
return(u&$.ak().a)!==0?t+4:t},
ei:function(a){var u,t=$.an(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.am()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.al()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ao()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aP()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bW()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bX()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.be()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ak()
if((s&t.a)!==0)if(u===a)return t
return $.jO()},
l:function(a,b){if(b==null)return!1
if(!(b instanceof Z.ai))return!1
return this.a===b.a},
h:function(a){var u=H.c([],[P.q]),t=this.a
if((t&$.an().a)!==0)u.push("Pos")
if((t&$.am().a)!==0)u.push("Norm")
if((t&$.al().a)!==0)u.push("Binm")
if((t&$.ao().a)!==0)u.push("Txt2D")
if((t&$.aP().a)!==0)u.push("TxtCube")
if((t&$.bW().a)!==0)u.push("Clr3")
if((t&$.bX().a)!==0)u.push("Clr4")
if((t&$.be().a)!==0)u.push("Weight")
if((t&$.ak().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.a.p(u,"|")}}
D.e2.prototype={}
D.aV.prototype={
m:function(a,b){var u=this.a;(u==null?this.a=H.c([],[{func:1,ret:-1,args:[D.R]}]):u).push(b)},
B:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.a.a2(s,b)
if(s===!0){s=t.a
u=(s&&C.a).B(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.a.a2(s,b)
if(s===!0){s=t.b
u=(s&&C.a).B(s,b)||u}return u},
J:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.R()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.C(P.iv(u,!0,{func:1,ret:-1,args:[D.R]}),new D.ek(q))
u=r.b
if(u!=null){r.b=H.c([],[{func:1,ret:-1,args:[D.R]}])
C.a.C(u,new D.el(q))}return!0},
c0:function(){return this.J(null)},
a3:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.J(u)}}}}
D.ek.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.el.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.R.prototype={}
D.bo.prototype={}
D.bp.prototype={}
D.x.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.c2.prototype={
l:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.c2))return!1
if(this.a!=b.a)return!1
if(!this.b.l(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.ch.prototype={
l:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ch))return!1
if(this.a!=b.a)return!1
if(!this.b.l(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.eB.prototype={
eY:function(a){this.d.m(0,a.a)
return!1},
eU:function(a){this.d.B(0,a.a)
return!1}}
X.eI.prototype={
bl:function(a,b){this.r=a.a
return!1},
aD:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.cG()
if(typeof u!=="number")return u.a4()
this.r=(u&~t)>>>0
return!1},
aC:function(a,b){return!1},
eZ:function(a){return!1},
dG:function(a,b,c){return}}
X.bu.prototype={
l:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.bu))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
h:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.f5.prototype={
bl:function(a,b){this.f=a.a
return!1},
aD:function(a,b){var u=this.f,t=a.a
if(typeof t!=="number")return t.cG()
if(typeof u!=="number")return u.a4()
this.f=(u&~t)>>>0
return!1},
aC:function(a,b){return!1},
f_:function(a,b){return!1}}
X.fY.prototype={
eX:function(a){return!1},
eV:function(a){return!1},
eW:function(a){return!1}}
X.cT.prototype={
bI:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.ch(u,new X.bu(t,a.altKey,a.shiftKey))},
aj:function(a){a.shiftKey},
b3:function(a){a.shiftKey},
a9:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.T()
u=t.top
if(typeof r!=="number")return r.T()
return new V.a7(s-q,r-u)},
av:function(a){return new V.ah(a.movementX,a.movementY)},
b_:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.a7])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
q=C.c.Z(r.pageX)
C.c.Z(r.pageY)
p=o.left
C.c.Z(r.pageX)
n.push(new V.a7(q-p,C.c.Z(r.pageY)-o.top))}return n},
a7:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.c2(u,new X.bu(t,a.altKey,a.shiftKey))},
aX:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.T()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.T()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
dA:function(a){this.f=!0},
dk:function(a){this.f=!1},
ds:function(a){if(this.f&&this.aX(a))a.preventDefault()},
dE:function(a){var u
if(!this.f)return
u=this.bI(a)
this.b.eY(u)},
dC:function(a){var u
if(!this.f)return
u=this.bI(a)
this.b.eU(u)},
dI:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aj(a)
if(r.x){u=r.a7(a)
t=r.av(a)
if(r.d.bl(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.a7(a)
s=r.a9(a)
if(r.c.bl(u,s))a.preventDefault()},
dM:function(a){var u,t,s,r=this
r.aj(a)
u=r.a7(a)
if(r.x){t=r.av(a)
if(r.d.aD(u,t))a.preventDefault()
return}if(r.r)return
s=r.a9(a)
if(r.c.aD(u,s))a.preventDefault()},
dw:function(a){var u,t,s,r=this
if(!r.aX(a)){r.aj(a)
u=r.a7(a)
if(r.x){t=r.av(a)
if(r.d.aD(u,t))a.preventDefault()
return}if(r.r)return
s=r.a9(a)
if(r.c.aD(u,s))a.preventDefault()}},
dK:function(a){var u,t,s,r=this
r.aj(a)
u=r.a7(a)
if(r.x){t=r.av(a)
if(r.d.aC(u,t))a.preventDefault()
return}if(r.r)return
s=r.a9(a)
if(r.c.aC(u,s))a.preventDefault()},
du:function(a){var u,t,s,r=this
if(!r.aX(a)){r.aj(a)
u=r.a7(a)
if(r.x){t=r.av(a)
if(r.d.aC(u,t))a.preventDefault()
return}if(r.r)return
s=r.a9(a)
if(r.c.aC(u,s))a.preventDefault()}},
dO:function(a){var u,t,s=this
s.aj(a)
u=new V.ah((a&&C.o).gev(a),C.o.gew(a)).A(0,180)
if(s.x){if(s.d.eZ(u))a.preventDefault()
return}if(s.r)return
t=s.a9(a)
if(s.c.f_(u,t))a.preventDefault()},
dQ:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.a7(s.y)
t=s.a9(s.y)
s.d.dG(u,t,r)}},
e0:function(a){var u,t=this
t.a.focus()
t.f=!0
t.b3(a)
u=t.b_(a)
if(t.e.eX(u))a.preventDefault()},
dX:function(a){var u
this.b3(a)
u=this.b_(a)
if(this.e.eV(u))a.preventDefault()},
dZ:function(a){var u
this.b3(a)
u=this.b_(a)
if(this.e.eW(u))a.preventDefault()}}
D.aT.prototype={
a5:function(a){var u=this.r
if(u!=null)u.J(a)},
cU:function(){return this.a5(null)},
$iS:1}
D.S.prototype={}
D.ci.prototype={
a5:function(a){var u=this.x
if(u!=null)u.J(a)},
bN:function(a){var u=this.y
if(u!=null)u.J(a)},
dF:function(){return this.bN(null)},
dT:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.n)(a),++t){s=a[t]
if(s==null||this.d4(s))return!1}return!0},
de:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gbM(),s=[{func:1,ret:-1,args:[D.R]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q instanceof D.aT)this.e.push(q)
p=q.r
if(p==null){p=new D.aV()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}u=new D.bo()
u.b=!0
this.a5(u)},
dV:function(a,b){var u,t,s
for(u=b.gK(b),t=this.gbM();u.u();){s=u.gH(u)
C.a.B(this.e,s)
s.gt().B(0,t)}u=new D.bp()
u.b=!0
this.a5(u)},
d4:function(a){var u=C.a.a2(this.e,a)
return u},
$ak:function(){return[D.S]},
$aaS:function(){return[D.S]}}
D.fk.prototype={$iS:1}
D.fF.prototype={$iS:1}
V.J.prototype={
l:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.J))return!1
u=b.a
t=$.v().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.t(this.a,3,0)+", "+V.t(this.b,3,0)+", "+V.t(this.c,3,0)+"]"}}
V.aq.prototype={
l:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aq))return!1
u=b.a
t=$.v().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.t(u.a,3,0)+", "+V.t(u.b,3,0)+", "+V.t(u.c,3,0)+", "+V.t(u.d,3,0)+"]"}}
V.ej.prototype={}
V.co.prototype={
X:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.E])
return t},
l:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.co))return!1
u=b.a
t=$.v().a
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
h:function(a){var u,t,s,r,q=this,p=[P.E],o=V.bd(H.c([q.a,q.d,q.r],p),3,0),n=V.bd(H.c([q.b,q.e,q.x],p),3,0),m=V.bd(H.c([q.c,q.f,q.y],p),3,0)
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
X:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.E])
return t},
cg:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.v().a)return V.iw()
u=1/b1
t=-n
s=-a0
return V.ad((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
M:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.ad(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
aN:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.u(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
bp:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.a_(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
l:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ac))return!1
u=b.a
t=$.v().a
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
h:function(a){return this.D()},
q:function(a){var u,t,s,r,q,p=this,o=[P.E],n=V.bd(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.bd(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.bd(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.bd(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
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
D:function(){return this.q("")}}
V.a7.prototype={
l:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a7))return!1
u=b.a
t=$.v().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
h:function(a){return"["+V.t(this.a,3,0)+", "+V.t(this.b,3,0)+"]"}}
V.a_.prototype={
T:function(a,b){return new V.a_(this.a-b.a,this.b-b.b,this.c-b.c)},
l:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a_))return!1
u=b.a
t=$.v().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.t(this.a,3,0)+", "+V.t(this.b,3,0)+", "+V.t(this.c,3,0)+"]"}}
V.cw.prototype={
l:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cw))return!1
u=b.a
t=$.v().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.t(u.a,3,0)+", "+V.t(u.b,3,0)+", "+V.t(u.c,3,0)+", "+V.t(u.d,3,0)+"]"}}
V.cz.prototype={
l:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cz))return!1
u=b.a
t=$.v().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.t(u.a,3,0)+", "+V.t(u.b,3,0)+", "+V.t(u.c,3,0)+", "+V.t(u.d,3,0)+"]"}}
V.ah.prototype={
bi:function(a){var u,t=this.a
if(typeof t!=="number")return t.M()
u=this.b
if(typeof u!=="number")return u.M()
return Math.sqrt(t*t+u*u)},
A:function(a,b){var u,t
if(Math.abs(b-0)<$.v().a){u=$.jh
return u==null?$.jh=new V.ah(0,0):u}u=this.a
if(typeof u!=="number")return u.A()
t=this.b
if(typeof t!=="number")return t.A()
return new V.ah(u/b,t/b)},
l:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ah))return!1
u=b.a
t=this.a
s=$.v()
s.toString
if(typeof u!=="number")return u.T()
if(typeof t!=="number")return H.aO(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.T()
if(typeof t!=="number")return H.aO(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){return"["+V.t(this.a,3,0)+", "+V.t(this.b,3,0)+"]"}}
V.u.prototype={
bi:function(a){return Math.sqrt(this.I(this))},
I:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bj:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.u(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
ax:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.u(u*t-s*r,s*q-p*t,p*r-u*q)},
E:function(a,b){return new V.u(this.a+b.a,this.b+b.b,this.c+b.c)},
as:function(a){return new V.u(-this.a,-this.b,-this.c)},
A:function(a,b){if(Math.abs(b-0)<$.v().a)return V.bH()
return new V.u(this.a/b,this.b/b,this.c/b)},
ci:function(){var u=$.v().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
l:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.u))return!1
u=b.a
t=$.v().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.t(this.a,3,0)+", "+V.t(this.b,3,0)+", "+V.t(this.c,3,0)+"]"}}
U.c3.prototype={
gt:function(){var u=this.b
return u==null?this.b=D.Z():u},
l:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.c3))return!1
return J.C(this.a,b.a)},
h:function(a){return"Constant: "+this.a.q("          ")}}
U.f6.prototype={}
U.cB.prototype={
gt:function(){var u=this.y
return u==null?this.y=D.Z():u},
ai:function(a){var u=this.y
if(u!=null)u.J(a)},
scD:function(a){var u
a=V.iN(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.v().a)){this.a=a
u=new D.x("yaw",u,a)
u.b=!0
this.ai(u)}},
scq:function(a,b){var u
b=V.iN(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.v().a)){this.b=b
u=new D.x("pitch",u,b)
u.b=!0
this.ai(u)}},
scw:function(a){var u
a=V.iN(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.v().a)){this.c=a
u=new D.x("roll",u,a)
u.b=!0
this.ai(u)}},
l:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.cB))return!1
u=r.a
t=b.a
s=$.v().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
h:function(a){var u=this
return"Rotater: ["+V.t(u.a,3,0)+", "+V.t(u.b,3,0)+", "+V.t(u.c,3,0)+"], ["+V.t(u.d,3,0)+", "+V.t(u.e,3,0)+", "+V.t(u.f,3,0)+"]"}}
M.c8.prototype={
a6:function(a){var u=this.y
if(u!=null)u.J(a)},
cV:function(){return this.a6(null)},
dm:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.ga1(),s=[{func:1,ret:-1,args:[D.R]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.aV()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.bo()
u.b=!0
this.a6(u)},
dq:function(a,b){var u,t
for(u=b.gK(b),t=this.ga1();u.u();)u.gH(u).gt().B(0,t)
u=new D.bp()
u.b=!0
this.a6(u)},
scz:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gt().B(0,t.ga1())
u=t.d
t.d=a
if(a!=null)a.gt().m(0,t.ga1())
s=new D.x("technique",u,t.d)
s.b=!0
t.a6(s)}},
gt:function(){var u=this.y
return u==null?this.y=D.Z():u},
ap:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
a.ct(f.d)
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
if(typeof s!=="number")return H.aO(s)
o=C.c.Z(p*s)
p=q.b
if(typeof r!=="number")return H.aO(r)
n=C.c.Z(p*r)
p=C.c.Z(q.c*s)
a.c=p
q=C.c.Z(q.d*r)
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
i=V.ad(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.cs(i)
t=$.j1
if(t==null){t=V.j3()
q=V.iA()
p=$.ji
t=V.iZ(t,q,p==null?$.ji=new V.u(0,0,-1):p)
$.j1=t
h=t}else h=t
u=u.b
if(u!=null){g=u.a
if(g!=null)h=g.M(0,h)}a.db.cs(h)
u=f.d
if(u!=null)u.aO(0,a)
for(u=f.e.a,u=new J.V(u,u.length);u.u();)u.d.aO(0,a)
for(u=f.e.a,u=new J.V(u,u.length);u.u();)u.d.ap(a)
f.b.toString
a.cy.bm()
a.db.bm()
f.c.toString
a.cr()}}
A.bZ.prototype={}
A.dV.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
eC:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
ex:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.M.prototype={
ga_:function(a){var u=this.a?1:0,t=this.b?2:0
return u|t|0},
h:function(a){var u=this.a?1:0,t=this.b?2:0
return""+(u|t|0)},
l:function(a,b){if(b==null)return!1
if(!(b instanceof A.M))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.eN.prototype={
cO:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
b8.z=c3
u=new P.aF("")
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
A.kU(c3,u)
A.kW(c3,u)
A.kV(c3,u)
A.kY(c3,u)
A.kZ(c3,u)
A.kX(c3,u)
A.l_(c3,u)
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
m=A.kT(b8.z)
b8.c=n
b8.d=m
b8.e=b8.bJ(n,35633)
b8.f=b8.bJ(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!s.getProgramParameter(b8.r,35714)){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.p(P.o("Failed to link shader: "+H.e(l)))}b8.ec()
b8.ee()
b8.Q=b8.x.i(0,"posAttr")
b8.cx=b8.x.i(0,"normAttr")
b8.ch=b8.x.i(0,"binmAttr")
b8.cy=b8.x.i(0,"txt2DAttr")
b8.db=b8.x.i(0,"txtCubeAttr")
b8.dx=b8.x.i(0,"bendAttr")
if(c3.dx)b8.id=H.l(b8.y.w(0,"invViewMat"),"$iX")
if(t)b8.dy=H.l(b8.y.w(0,"objMat"),"$iX")
if(r)b8.fr=H.l(b8.y.w(0,"viewObjMat"),"$iX")
b8.fy=H.l(b8.y.w(0,"projViewObjMat"),"$iX")
if(c3.ry)b8.k1=H.l(b8.y.w(0,"txt2DMat"),"$ibD")
if(c3.x1)b8.k2=H.l(b8.y.w(0,"txtCubeMat"),"$iX")
if(c3.x2)b8.k3=H.l(b8.y.w(0,"colorMat"),"$iX")
b8.r1=H.c([],[A.X])
t=c3.y2
if(t>0){b8.k4=b8.y.w(0,"bendMatCount")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.i(0,q)
if(j==null)H.p(P.o(c0+q+c1))
s.push(H.l(j,"$iX"))}}t=c3.a
if(t.a)b8.r2=H.l(b8.y.w(0,"emissionClr"),"$iB")
if(t.b)b8.rx=H.l(b8.y.w(0,"emissionTxt"),"$iL")
t=c3.b
if(t.a)b8.x1=H.l(b8.y.w(0,"ambientClr"),"$iB")
if(t.b)b8.x2=H.l(b8.y.w(0,"ambientTxt"),"$iL")
t=c3.c
if(t.a)b8.y2=H.l(b8.y.w(0,"diffuseClr"),"$iB")
if(t.b)b8.ab=H.l(b8.y.w(0,"diffuseTxt"),"$iL")
t=c3.d
if(t.a)b8.c2=H.l(b8.y.w(0,"invDiffuseClr"),"$iB")
if(t.b)b8.c3=H.l(b8.y.w(0,"invDiffuseTxt"),"$iL")
t=c3.e
s=t.a
if(s||t.b||!1){b8.c6=H.l(b8.y.w(0,"shininess"),"$iH")
if(s)b8.c4=H.l(b8.y.w(0,"specularClr"),"$iB")
if(t.b)b8.c5=H.l(b8.y.w(0,"specularTxt"),"$iL")}if(c3.f.b)b8.c7=H.l(b8.y.w(0,"bumpTxt"),"$iL")
if(c3.cy){b8.c8=H.l(b8.y.w(0,"envSampler"),"$ib6")
t=c3.r
if(t.a)b8.c9=H.l(b8.y.w(0,"reflectClr"),"$iB")
if(t.b)b8.ca=H.l(b8.y.w(0,"reflectTxt"),"$iL")
t=c3.x
s=t.a
if(s||t.b||!1){b8.cb=H.l(b8.y.w(0,"refraction"),"$iH")
if(s)b8.cc=H.l(b8.y.w(0,"refractClr"),"$iB")
if(t.b)b8.cd=H.l(b8.y.w(0,"refractTxt"),"$iL")}}t=c3.y
if(t.a)b8.ce=H.l(b8.y.w(0,"alpha"),"$iH")
if(t.b)b8.cf=H.l(b8.y.w(0,"alphaTxt"),"$iL")
t=P.w
s=[t,A.cR]
b8.b9=new H.F(s)
b8.ba=new H.F([t,[P.b0,A.bC]])
b8.bb=new H.F(s)
b8.bc=new H.F([t,[P.b0,A.bE]])
b8.bd=new H.F(s)
b8.be=new H.F([t,[P.b0,A.bF]])
if(c3.id){for(t=c3.z,s=t.length,r=[A.bC],i=0;i<t.length;t.length===s||(0,H.n)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.e(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.a4()
p=(g&1)!==0
if(p){o=b8.y
d=f+"s["+k+"].objUp"
j=o.i(0,d)
if(j==null)H.p(P.o(c0+d+c1))
H.l(j,"$iB")
o=b8.y
d=f+"s["+k+"].objRight"
c=o.i(0,d)
if(c==null)H.p(P.o(c0+d+c1))
H.l(c,"$iB")
o=b8.y
d=f+"s["+k+"].objDir"
b=o.i(0,d)
if(b==null)H.p(P.o(c0+d+c1))
H.l(b,"$iB")
a=b
a0=c
a1=j}else{a=b9
a0=a
a1=a0}o=b8.y
d=f+"s["+k+"].viewDir"
j=o.i(0,d)
if(j==null)H.p(P.o(c0+d+c1))
H.l(j,"$iB")
o=b8.y
d=f+"s["+k+"].color"
c=o.i(0,d)
if(c==null)H.p(P.o(c0+d+c1))
H.l(c,"$iB")
if(p){p=b8.y
o=f+"sTexture2D"+k
b=p.i(0,o)
if(b==null)H.p(P.o(c0+o+c1))
H.l(b,"$iL")
a2=b}else a2=b9
e.push(new A.bC(a1,a0,a,j,c,a2))}b8.ba.k(0,g,e)
q=b8.b9
p=b8.y
o=f+"Count"
j=p.i(0,o)
if(j==null)H.p(P.o(c0+o+c1))
q.k(0,g,j)}for(t=c3.Q,s=t.length,r=[A.bE],i=0;i<t.length;t.length===s||(0,H.n)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.e(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.i(0,o)
if(j==null)H.p(P.o(c0+o+c1))
H.l(j,"$iB")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.i(0,o)
if(c==null)H.p(P.o(c0+o+c1))
H.l(c,"$iB")
p=b8.y
o=f+"s["+k+"].color"
b=p.i(0,o)
if(b==null)H.p(P.o(c0+o+c1))
H.l(b,"$iB")
if(typeof g!=="number")return g.a4()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
a3=p.i(0,o)
if(a3==null)H.p(P.o(c0+o+c1))
H.l(a3,"$ibD")
a4=a3}else a4=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
a3=p.i(0,o)
if(a3==null)H.p(P.o(c0+o+c1))
H.l(a3,"$ib6")
a2=a3}else a2=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
a3=p.i(0,o)
if(a3==null)H.p(P.o(c0+o+c1))
H.l(a3,"$ib6")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a5=p.i(0,o)
if(a5==null)H.p(P.o(c0+o+c1))
H.l(a5,"$ibB")
a6=a3
a7=a5}else{a6=b9
a7=a6}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
a3=p.i(0,o)
if(a3==null)H.p(P.o(c0+o+c1))
H.l(a3,"$iH")
p=b8.y
o=f+"s["+k+"].att1"
a5=p.i(0,o)
if(a5==null)H.p(P.o(c0+o+c1))
H.l(a5,"$iH")
p=b8.y
o=f+"s["+k+"].att2"
a8=p.i(0,o)
if(a8==null)H.p(P.o(c0+o+c1))
H.l(a8,"$iH")
a9=a8
b0=a5
b1=a3}else{a9=b9
b0=a9
b1=b0}e.push(new A.bE(j,c,a4,b,a2,a6,a7,b1,b0,a9))}b8.bc.k(0,g,e)
q=b8.bb
p=b8.y
o=f+"Count"
j=p.i(0,o)
if(j==null)H.p(P.o(c0+o+c1))
q.k(0,g,j)}for(t=c3.ch,s=t.length,r=[A.bF],i=0;i<t.length;t.length===s||(0,H.n)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.e(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.i(0,o)
if(j==null)H.p(P.o(c0+o+c1))
H.l(j,"$iB")
p=b8.y
o=f+"s["+k+"].objDir"
c=p.i(0,o)
if(c==null)H.p(P.o(c0+o+c1))
H.l(c,"$iB")
p=b8.y
o=f+"s["+k+"].viewPnt"
b=p.i(0,o)
if(b==null)H.p(P.o(c0+o+c1))
H.l(b,"$iB")
p=b8.y
o=f+"s["+k+"].color"
a3=p.i(0,o)
if(a3==null)H.p(P.o(c0+o+c1))
H.l(a3,"$iB")
if(typeof g!=="number")return g.a4()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a5=p.i(0,o)
if(a5==null)H.p(P.o(c0+o+c1))
H.l(a5,"$iB")
p=b8.y
o=f+"s["+k+"].objRight"
a8=p.i(0,o)
if(a8==null)H.p(P.o(c0+o+c1))
H.l(a8,"$iB")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.i(0,o)
if(b2==null)H.p(P.o(c0+o+c1))
H.l(b2,"$iH")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.i(0,o)
if(b3==null)H.p(P.o(c0+o+c1))
H.l(b3,"$iH")
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
if(a5==null)H.p(P.o(c0+d+c1))
H.l(a5,"$ibB")
a7=a5}else a7=b9
if((g&8)!==0){o=b8.y
d=f+"s["+k+"].cutoff"
a5=o.i(0,d)
if(a5==null)H.p(P.o(c0+d+c1))
H.l(a5,"$iH")
o=b8.y
d=f+"s["+k+"].coneAngle"
a8=o.i(0,d)
if(a8==null)H.p(P.o(c0+d+c1))
H.l(a8,"$iH")
b6=a8
b7=a5}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
d=f+"s["+k+"].att0"
a5=o.i(0,d)
if(a5==null)H.p(P.o(c0+d+c1))
H.l(a5,"$iH")
o=b8.y
d=f+"s["+k+"].att1"
a8=o.i(0,d)
if(a8==null)H.p(P.o(c0+d+c1))
H.l(a8,"$iH")
o=b8.y
d=f+"s["+k+"].att2"
b2=o.i(0,d)
if(b2==null)H.p(P.o(c0+d+c1))
H.l(b2,"$iH")
a9=b2
b0=a8
b1=a5}else{a9=b9
b0=a9
b1=b0}if((g&1)!==0){o=b8.y
d=f+"sTexture2D"+k
a5=o.i(0,d)
if(a5==null)H.p(P.o(c0+d+c1))
H.l(a5,"$iL")
a2=a5}else a2=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a5=p.i(0,o)
if(a5==null)H.p(P.o(c0+o+c1))
H.l(a5,"$iL")
a6=a5}else a6=b9
e.push(new A.bF(j,c,b,a3,a1,a0,b5,b4,a7,b7,b6,b1,b0,a9,a2,a6))}b8.be.k(0,g,e)
q=b8.bd
p=b8.y
o=f+"Count"
j=p.i(0,o)
if(j==null)H.p(P.o(c0+o+c1))
q.k(0,g,j)}}},
Y:function(a,b){if(b!=null&&b.gP(b))a.cH(b)},
e8:function(a,b){}}
A.c5.prototype={
h:function(a){return"dirLight"+H.e(this.a)}}
A.cx.prototype={
h:function(a){return"pointLight"+H.e(this.a)}}
A.cE.prototype={
h:function(a){return"spotLight"+H.e(this.a)}}
A.eQ.prototype={
h:function(a){return this.ab}}
A.bC.prototype={}
A.bE.prototype={}
A.bF.prototype={}
A.cC.prototype={
cR:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
bJ:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.f(P.o("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
ec:function(){var u,t,s,r=this,q=H.c([],[A.bZ]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.aO(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.bZ(p,t.name,s))}r.x=new A.dV(q)},
ee:function(){var u,t,s,r=this,q=H.c([],[A.cQ]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.aO(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.eu(t.type,t.size,t.name,s))}r.y=new A.h9(q)},
ah:function(a,b,c){var u=this.a
if(a===1)return new A.cR(u,b,c)
else return A.iz(u,this.r,b,a,c)},
d5:function(a,b,c){var u=this.a
if(a===1)return new A.L(u,b,c)
else return A.iz(u,this.r,b,a,c)},
d6:function(a,b,c){var u=this.a
if(a===1)return new A.b6(u,b,c)
else return A.iz(u,this.r,b,a,c)},
aK:function(a,b){return new P.d2(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
eu:function(a,b,c,d){var u=this
switch(a){case 5120:return u.ah(b,c,d)
case 5121:return u.ah(b,c,d)
case 5122:return u.ah(b,c,d)
case 5123:return u.ah(b,c,d)
case 5124:return u.ah(b,c,d)
case 5125:return u.ah(b,c,d)
case 5126:return new A.H(u.a,c,d)
case 35664:return new A.h5(u.a,c,d)
case 35665:return new A.B(u.a,c,d)
case 35666:return new A.bB(u.a,c,d)
case 35667:return new A.h6(u.a,c,d)
case 35668:return new A.h7(u.a,c,d)
case 35669:return new A.h8(u.a,c,d)
case 35674:return new A.ha(u.a,c,d)
case 35675:return new A.bD(u.a,c,d)
case 35676:return new A.X(u.a,c,d)
case 35678:return u.d5(b,c,d)
case 35680:return u.d6(b,c,d)
case 35670:throw H.f(u.aK("BOOL",c))
case 35671:throw H.f(u.aK("BOOL_VEC2",c))
case 35672:throw H.f(u.aK("BOOL_VEC3",c))
case 35673:throw H.f(u.aK("BOOL_VEC4",c))
default:throw H.f(P.o("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.cQ.prototype={}
A.h9.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
w:function(a,b){var u=this.i(0,b)
if(u==null)throw H.f(P.o("Required uniform value, "+b+", was not defined or used in shader."))
return u},
h:function(a){return this.D()},
D:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.n)(u),++r)s+=u[r].h(0)+"\n"
return s}}
A.cR.prototype={
h:function(a){return"Uniform1i: "+H.e(this.c)}}
A.h6.prototype={
h:function(a){return"Uniform2i: "+H.e(this.c)}}
A.h7.prototype={
h:function(a){return"Uniform3i: "+H.e(this.c)}}
A.h8.prototype={
h:function(a){return"Uniform4i: "+H.e(this.c)}}
A.h4.prototype={
h:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.H.prototype={
h:function(a){return"Uniform1f: "+H.e(this.c)}}
A.h5.prototype={
h:function(a){return"Uniform2f: "+H.e(this.c)}}
A.B.prototype={
h:function(a){return"Uniform3f: "+H.e(this.c)}}
A.bB.prototype={
h:function(a){return"Uniform4f: "+H.e(this.c)}}
A.ha.prototype={
h:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.bD.prototype={
a0:function(a){var u=new Float32Array(H.bS(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
h:function(a){return"UniformMat3: "+H.e(this.c)}}
A.X.prototype={
a0:function(a){var u=new Float32Array(H.bS(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
h:function(a){return"UniformMat4: "+H.e(this.c)}}
A.L.prototype={
cH:function(a){var u=a.gP(a),t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
h:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.b6.prototype={
h:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.hY.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.bj(s.b,b).bj(s.d.bj(s.c,b),c)
s=new V.a_(r.a,r.b,r.c)
if(!J.C(a.f,s)){a.f=s
s=a.a
if(s!=null)s.O()}a.sfa(r.A(0,Math.sqrt(r.I(r))))
s=1-b
u=1-c
u=new V.cw(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.C(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.O()}}}
F.aW.prototype={
ay:function(){var u=this
if(!u.gaz()){C.a.B(u.a.a.d.b,u)
u.a.a.O()}u.b0()
u.b1()
u.e3()},
e9:function(a){this.a=a
a.d.b.push(this)},
ea:function(a){this.b=a
a.d.c.push(this)},
eb:function(a){this.c=a
a.d.d.push(this)},
b0:function(){var u=this.a
if(u!=null){C.a.B(u.d.b,this)
this.a=null}},
b1:function(){var u=this.b
if(u!=null){C.a.B(u.d.c,this)
this.b=null}},
e3:function(){var u=this.c
if(u!=null){C.a.B(u.d.d,this)
this.c=null}},
gaz:function(){return this.a==null||this.b==null||this.c==null},
d1:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.bH()
if(q!=null)s=s.E(0,q)
if(u!=null)s=s.E(0,u)
if(t!=null)s=s.E(0,t)
if(s.ci())return
return s.A(0,Math.sqrt(s.I(s)))},
d3:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.T(0,q)
r=new V.u(r.a,r.b,r.c)
s=r.A(0,Math.sqrt(r.I(r)))
r=t.T(0,q)
r=new V.u(r.a,r.b,r.c)
r=s.ax(r.A(0,Math.sqrt(r.I(r))))
return r.A(0,Math.sqrt(r.I(r)))},
b6:function(){var u,t=this
if(t.d!=null)return!0
u=t.d1()
if(u==null){u=t.d3()
if(u==null)return!1}t.d=u
t.a.a.O()
return!0},
d0:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.bH()
if(q!=null)s=s.E(0,q)
if(u!=null)s=s.E(0,u)
if(t!=null)s=s.E(0,t)
if(s.ci())return
return s.A(0,Math.sqrt(s.I(s)))},
d2:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.v().a){l=d.T(0,g)
l=new V.u(l.a,l.b,l.c)
q=l.A(0,Math.sqrt(l.I(l)))
if(s.a-t.a<0)q=q.as(0)}else{p=(l-u.b)/r
l=d.T(0,g)
l=new V.a_(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).T(0,j)
l=new V.u(l.a,l.b,l.c)
q=l.A(0,Math.sqrt(l.I(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.as(0)}l=n.d
if(l!=null){o=l.A(0,Math.sqrt(l.I(l)))
l=o.ax(q)
l=l.A(0,Math.sqrt(l.I(l))).ax(o)
q=l.A(0,Math.sqrt(l.I(l)))}return q},
b4:function(){var u,t=this
if(t.e!=null)return!0
u=t.d0()
if(u==null){u=t.d2()
if(u==null)return!1}t.e=u
t.a.a.O()
return!0},
gep:function(a){var u=this
if(J.C(u.a,u.b))return!0
if(J.C(u.b,u.c))return!0
if(J.C(u.c,u.a))return!0
return!1},
l:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.D()},
q:function(a){var u,t,s=this
if(s.gaz())return a+"disposed"
u=a+C.b.W(J.U(s.a.e),0)+", "+C.b.W(J.U(s.b.e),0)+", "+C.b.W(J.U(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.h(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.h(0)+"}"):u+"-}"},
D:function(){return this.q("")}}
F.em.prototype={}
F.fC.prototype={
aA:function(a,b,c){var u,t=b.a
t.a.a.n()
t=t.e
u=c.a
u.a.a.n()
if(t==u.e){t=b.b
t.a.a.n()
t=t.e
u=c.b
u.a.a.n()
if(t==u.e){t=b.c
t.a.a.n()
t=t.e
u=c.c
u.a.a.n()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.n()
t=t.e
u=c.b
u.a.a.n()
if(t==u.e){t=b.b
t.a.a.n()
t=t.e
u=c.c
u.a.a.n()
if(t==u.e){t=b.c
t.a.a.n()
t=t.e
u=c.a
u.a.a.n()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.n()
t=t.e
u=c.c
u.a.a.n()
if(t==u.e){t=b.b
t.a.a.n()
t=t.e
u=c.a
u.a.a.n()
if(t==u.e){t=b.c
t.a.a.n()
t=t.e
u=c.b
u.a.a.n()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.br.prototype={
ay:function(){var u=this
if(!u.gaz()){C.a.B(u.a.a.c.b,u)
u.a.a.O()}u.b0()
u.b1()},
b0:function(){var u=this.a
if(u!=null){C.a.B(u.c.b,this)
this.a=null}},
b1:function(){var u=this.b
if(u!=null){C.a.B(u.c.c,this)
this.b=null}},
gaz:function(){return this.a==null||this.b==null},
l:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.D()},
q:function(a){if(this.gaz())return a+"disposed"
return a+C.b.W(J.U(this.a.e),0)+", "+C.b.W(J.U(this.b.e),0)},
D:function(){return this.q("")}}
F.eD.prototype={}
F.h3.prototype={
aA:function(a,b,c){var u,t=b.a
t.a.a.n()
t=t.e
u=c.a
u.a.a.n()
if(t==u.e){t=b.b
t.a.a.n()
t=t.e
u=c.b
u.a.a.n()
return t==u.e}else{t=b.a
t.a.a.n()
t=t.e
u=c.b
u.a.a.n()
if(t==u.e){t=b.b
t.a.a.n()
t=t.e
u=c.a
u.a.a.n()
return t==u.e}else return!1}}}
F.bx.prototype={
l:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.D()},
q:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.W(J.U(u.e),0)},
D:function(){return this.q("")}}
F.fv.prototype={
gt:function(){var u=this.e
return u==null?this.e=D.Z():u},
bk:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.n()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.n)(g),++s){r=g[s]
h.a.m(0,r.es())}h.a.n()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.n)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.n()
o=o.e
if(typeof o!=="number")return o.E()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
n=p[o]
h.b.a.a.m(0,n)
o=new F.bx()
if(n.a==null)H.p(P.o("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.J(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.n)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.n()
o=o.e
if(typeof o!=="number")return o.E()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.n()
p=p.e
if(typeof p!=="number")return p.E()
p+=u
o=o.c
if(p>=o.length)return H.b(o,p)
k=o[p]
p=h.c.a
p.a.m(0,l)
p.a.m(0,k)
p=new F.br()
o=l.a
if(o==null)H.p(P.o("May not create a line with a start vertex which is not attached to a shape."))
if(o!=k.a)H.p(P.o("May not create a line with vertices attached to different shapes."))
p.a=l
l.c.b.push(p)
p.b=k
k.c.c.push(p)
p.a.a.c.b.push(p)
p=p.a.a.e
if(p!=null)p.J(null)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.n)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.n()
o=o.e
if(typeof o!=="number")return o.E()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.n()
p=p.e
if(typeof p!=="number")return p.E()
p+=u
o=o.c
if(p>=o.length)return H.b(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.n()
o=o.e
if(typeof o!=="number")return o.E()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
i=p[o]
o=h.d.a
o.a.m(0,l)
o.a.m(0,k)
o.a.m(0,i)
F.c9(l,k,i)}g=h.e
if(g!=null)g.a3(0)},
ak:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.ak()||!1
if(!t.a.ak())u=!1
s=t.e
if(s!=null)s.a3(0)
return u},
eM:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.c(o.slice(0),[H.dO(o,0)])
for(o=[F.b7];u.length!==0;){t=C.a.geF(u)
C.a.cu(u,0)
if(t!=null){s=H.c([],o)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.b(u,r)
q=u[r]
if(q!=null&&a.aA(0,t,q)){s.push(q)
C.a.cu(u,r)}}if(s.length>1)b.bk(s)}}p.a.n()
p.c.bn()
p.d.bn()
p.b.f2()
p.c.bo(new F.h3())
p.d.bo(new F.fC())
o=p.e
if(o!=null)o.a3(0)},
en:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.an()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.am().a)!==0)++s
if((t&$.al().a)!==0)++s
if((t&$.ao().a)!==0)++s
if((t&$.aP().a)!==0)++s
if((t&$.bW().a)!==0)++s
if((t&$.bX().a)!==0)++s
if((t&$.be().a)!==0)++s
if((t&$.ak().a)!==0)++s
r=a4.gbt(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.c(u,[P.E])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.c0])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.ei(m)
k=l.gbt(l)
if(m>=t)return H.b(o,m)
o[m]=new Z.c0(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.b(i,j)
h=i[j].eL(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.b(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.bS(p)),35044)
u.bindBuffer(a1,null)
c=new Z.c1(new Z.cU(a1,d),o,a4)
c.b=H.c([],[Z.aX])
if(a0.b.b.length!==0){b=H.c([],[P.w])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.n()
b.push(t.e)}a=Z.iB(u,34963,b)
c.b.push(new Z.aX(0,b.length,a))}if(a0.c.b.length!==0){b=H.c([],[P.w])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.n()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.b(t,m)
t=t[m].b
t.a.a.n()
b.push(t.e)}a=Z.iB(u,34963,b)
c.b.push(new Z.aX(1,b.length,a))}if(a0.d.b.length!==0){b=H.c([],[P.w])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.n()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.b(t,m)
t=t[m].b
t.a.a.n()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.b(t,m)
t=t[m].c
t.a.a.n()
b.push(t.e)}a=Z.iB(u,34963,b)
c.b.push(new Z.aX(4,b.length,a))}return c},
h:function(a){var u=this,t="   ",s=H.c([],[P.q])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.q(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.q(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.q(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.q(t))}return C.a.p(s,"\n")},
O:function(){var u=this.e
if(u!=null)u.J(null)}}
F.fw.prototype={
eh:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.c([],[F.aW])
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
if(p){n.m(0,m)
u.a.m(0,l)
u.a.m(0,j)
h.push(F.c9(m,l,j))
u.a.m(0,m)
u.a.m(0,j)
u.a.m(0,i)
h.push(F.c9(m,j,i))}else{n.m(0,l)
u.a.m(0,j)
u.a.m(0,i)
h.push(F.c9(l,j,i))
u.a.m(0,l)
u.a.m(0,i)
u.a.m(0,m)
h.push(F.c9(l,i,m))}p=!p}r=!r}return h},
gj:function(a){return this.b.length},
bo:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.b(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.i(0,q)
for(o=q-1;o>=0;--o){n=r.d.i(0,o)
if(a.aA(0,p,n)){p.ay()
break}}}}},
bn:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
s=t[u]
t=s.gep(s)
if(t)s.ay()}},
ak:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.n)(u),++r)if(!u[r].b6())s=!1
return s},
b5:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.n)(u),++r)if(!u[r].b4())s=!1
return s},
h:function(a){return this.D()},
q:function(a){var u,t,s,r=H.c([],[P.q])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].q(a))
return C.a.p(r,"\n")},
D:function(){return this.q("")}}
F.fx.prototype={
gj:function(a){return this.b.length},
bo:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.b(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.i(0,q)
for(o=q-1;o>=0;--o){n=r.c.i(0,o)
if(a.aA(0,p,n)){p.ay()
break}}}}},
bn:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
s=t[u]
t=J.C(s.a,s.b)
if(t)s.ay()}},
h:function(a){return this.D()},
q:function(a){var u,t,s=H.c([],[P.q]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.b(t,u)
s.push(t[u].q(a+(""+u+". ")))}return C.a.p(s,"\n")},
D:function(){return this.q("")}}
F.fy.prototype={
gj:function(a){return this.b.length},
f2:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.B(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.J(null)}s=t.a
if(s!=null){C.a.B(s.b.b,t)
t.a=null}}}},
h:function(a){return this.D()},
q:function(a){var u,t,s,r=H.c([],[P.q])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].q(a))
return C.a.p(r,"\n")},
D:function(){return this.q("")}}
F.b7.prototype={
b8:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.jk(u.cx,r,o,t,s,q,p,a,n)},
es:function(){return this.b8(null)},
sfa:function(a){var u
if(!J.C(this.z,a)){this.z=a
u=this.a
if(u!=null)u.O()}},
eL:function(a){var u,t,s=this
if(a.l(0,$.an())){u=s.f
t=[P.E]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.l(0,$.am())){u=s.r
t=[P.E]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.l(0,$.al())){u=s.x
t=[P.E]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.l(0,$.ao())){u=s.y
t=[P.E]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.l(0,$.aP())){u=s.z
t=[P.E]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.l(0,$.bW())){u=s.Q
t=[P.E]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.l(0,$.bX())){u=s.Q
t=[P.E]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.l(0,$.be()))return H.c([s.ch],[P.E])
else if(a.l(0,$.ak())){u=s.cx
t=[P.E]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.E])},
b6:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.bH()
t.d.C(0,new F.hv(s))
s=s.a
t.r=s.A(0,Math.sqrt(s.I(s)))
s=t.a
if(s!=null){s.O()
s=t.a.e
if(s!=null)s.a3(0)}return!0},
b4:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.bH()
t.d.C(0,new F.hu(s))
s=s.a
t.x=s.A(0,Math.sqrt(s.I(s)))
s=t.a
if(s!=null){s.O()
s=t.a.e
if(s!=null)s.a3(0)}return!0},
l:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.D()},
q:function(a){var u,t,s=this,r="-",q=H.c([],[P.q])
q.push(C.b.W(J.U(s.e),0))
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
q.push(V.t(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.h(0))
else q.push(r)
t=C.a.p(q,", ")
return a+"{"+t+"}"},
D:function(){return this.q("")}}
F.hv.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.E(0,t)}}}
F.hu.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.E(0,t)}}}
F.hl.prototype={
n:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.b(u,r)
u[r].e=s;++s}this.b=!1}},
m:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.f(P.o("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.O()
return!0},
bV:function(a,b){var u=null,t=F.jk(u,u,a,u,u,b,u,u,0)
this.m(0,t)
return t},
gj:function(a){return this.c.length},
ak:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)u[s].b6()
return!0},
b5:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)u[s].b4()
return!0},
eo:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.A(0,Math.sqrt(p*p+o*o+n*n))
if(!J.C(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.J(null)}}}}return!0},
h:function(a){return this.D()},
q:function(a){var u,t,s,r
this.n()
u=H.c([],[P.q])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.n)(t),++r)u.push(t[r].q(a))
return C.a.p(u,"\n")},
D:function(){return this.q("")}}
F.hm.prototype={
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
C:function(a,b){var u=this
C.a.C(u.b,b)
C.a.C(u.c,new F.hn(u,b))
C.a.C(u.d,new F.ho(u,b))},
h:function(a){return this.D()},
D:function(){var u,t,s,r=H.c([],[P.q])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].q(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].q(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].q(""))
return C.a.p(r,"\n")}}
F.hn.prototype={
$1:function(a){if(!J.C(a.a,this.a))this.b.$1(a)}}
F.ho.prototype={
$1:function(a){var u=this.a
if(!J.C(a.a,u)&&!J.C(a.b,u))this.b.$1(a)}}
F.hp.prototype={
gj:function(a){return this.b.length+this.c.length},
i:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.b(t,u)
return t[u]}else{if(b<0)return H.b(t,b)
return t[b]}},
h:function(a){return this.D()},
D:function(){var u,t,s,r=H.c([],[P.q])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].q(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].q(""))
return C.a.p(r,"\n")}}
F.hr.prototype={}
F.hq.prototype={
aA:function(a,b,c){return J.C(b.f,c.f)}}
F.hs.prototype={}
F.fd.prototype={
bk:function(a){var u,t,s,r,q,p,o,n,m=V.bH()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null)m=new V.u(m.a+s.a,m.b+s.b,m.c+s.c)}m=m.A(0,Math.sqrt(m.I(m)))
for(u=a.length,s=m==null,t=0;t<a.length;a.length===u||(0,H.n)(a),++t){r=a[t]
if(s)q=null
else{p=m.a
o=m.b
n=m.c
q=m.A(0,Math.sqrt(p*p+o*o+n*n))}if(!J.C(r.r,q)){r.r=q
p=r.a
if(p!=null){p=p.e
if(p!=null)p.J(null)}}}return}}
F.ht.prototype={
gj:function(a){return this.b.length},
h:function(a){return this.D()},
D:function(){var u,t,s,r=H.c([],[P.q])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].q(""))
return C.a.p(r,"\n")}}
O.cn.prototype={
gt:function(){var u=this.fr
return u==null?this.fr=D.Z():u},
L:function(a){var u=this.fr
if(u!=null)u.J(a)},
aR:function(){return this.L(null)},
bO:function(a){this.a=null
this.L(a)},
e6:function(){return this.bO(null)},
dg:function(a,b){var u=new D.bo()
u.b=!0
this.L(u)},
di:function(a,b){var u=new D.bp()
u.b=!0
this.L(u)},
bG:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.w,h=new H.F([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=h.i(0,0)
h.k(0,0,r==null?1:r)}q=H.c([],[A.c5])
h.C(0,new O.eU(j,q))
C.a.aQ(q,new O.eV())
p=new H.F([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){o=u[s]
r=o.gaw()
n=p.i(0,o.gaw())
p.k(0,r,n==null?1:n)}m=H.c([],[A.cx])
p.C(0,new O.eW(j,m))
C.a.aQ(m,new O.eX())
l=new H.F([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.n)(i),++s){o=i[s]
t=o.gaw()
r=l.i(0,o.gaw())
l.k(0,t,r==null?1:r)}k=H.c([],[A.cE])
l.C(0,new O.eY(j,k))
C.a.aQ(k,new O.eZ())
i=C.d.S(j.e.a.length+3,4)
j.dy.e
return A.ka(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
U:function(a,b){if(b!=null)if(!C.a.a2(a,b)){b.a=a.length
a.push(b)}},
aO:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.V(u,u.length);u.u();){t=u.d
t.toString
s=$.hk
if(s==null)s=$.hk=new V.u(0,0,1)
t.a=s
r=$.hj
t.d=r==null?$.hj=new V.u(0,1,0):r
r=$.hi
t.e=r==null?$.hi=new V.u(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.aN(s)
r=s.a
p=s.b
o=s.c
t.a=s.A(0,Math.sqrt(r*r+p*p+o*o))
o=q.aN(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.A(0,Math.sqrt(p*p+r*r+s*s))
s=q.aN(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.A(0,Math.sqrt(r*r+p*p+o*o))}}}},
f4:function(b3,b4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.a
if(b2==null){b2=b1.bG()
u=b3.fr.i(0,b2.ab)
if(u==null){u=A.k9(b2,b3.a)
t=u.b
if(t.length===0)H.p(P.o("May not cache a shader with no name."))
if(b3.fr.bZ(0,t))H.p(P.o('Shader cache already contains a shader by the name "'+t+'".'))
b3.fr.k(0,t,u)}b2=b1.a=u
b4.e=null}s=b2.z
r=s.c1
b2=b4.e
if(!(b2 instanceof Z.c1))b2=b4.e=null
if(b2==null||!b2.d.l(0,r)){b2=s.k3
if(b2)b4.d.ak()
q=s.k4
if(q){p=b4.d
o=p.e
if(o!=null)++o.d
p.d.b5()
p.a.b5()
p=p.e
if(p!=null)p.a3(0)}p=s.r2
if(p){o=b4.d
n=o.e
if(n!=null)++n.d
o.a.eo()
o=o.e
if(o!=null)o.a3(0)}m=b4.d.en(new Z.hx(b3.a),r)
m.al($.an()).e=b1.a.Q.c
if(b2)m.al($.am()).e=b1.a.cx.c
if(q)m.al($.al()).e=b1.a.ch.c
if(s.r1)m.al($.ao()).e=b1.a.cy.c
if(p)m.al($.aP()).e=b1.a.db.c
if(s.rx)m.al($.ak()).e=b1.a.dx.c
b4.e=m}l=H.c([],[T.cJ])
b2=b1.a
q=b3.a
q.useProgram(b2.r)
b2.x.eC()
if(s.dy){b2=b1.a
p=b3.dx
p=p.gN(p)
b2=b2.dy
b2.toString
b2.a0(p.X(0,!0))}if(s.fr){b2=b1.a
p=b3.cx
if(p==null){p=b3.db
p=p.gN(p)
o=b3.dx
o=b3.cx=p.M(0,o.gN(o))
p=o}b2=b2.fr
b2.toString
b2.a0(p.X(0,!0))}b2=b1.a
p=b3.ch
if(p==null){p=b3.gf1()
o=b3.dx
o=b3.ch=p.M(0,o.gN(o))
p=o}b2=b2.fy
b2.toString
b2.a0(p.X(0,!0))
if(s.ry){b2=b1.a
p=b1.b
b2=b2.k1
b2.toString
b2.a0(C.h.X(p,!0))}if(s.x1){b2=b1.a
p=b1.c
b2=b2.k2
b2.toString
b2.a0(C.h.X(p,!0))}if(s.x2){b2=b1.a
p=b1.d
b2=b2.k3
b2.toString
b2.a0(C.h.X(p,!0))}if(s.y2>0){k=b1.e.a.length
b2=b1.a.k4
b2.a.uniform1i(b2.d,k)
for(j=0;j<k;++j){b2=b1.a
p=b1.e.a
if(j>=p.length)return H.b(p,j)
p=p[j]
b2=b2.r1
if(j>=b2.length)return H.b(b2,j)
b2=b2[j]
i=new Float32Array(H.bS(p.X(0,!0)))
b2.a.uniformMatrix4fv(b2.d,!1,i)}}b2=s.a
if(b2.a){p=b1.a
o=b1.f.f
p=p.r2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b2.b){b1.U(l,b1.f.d)
b2=b1.a
p=b1.f.d
b2.Y(b2.rx,p)}if(s.id){b2=s.b
if(b2.a){p=b1.a
o=b1.r.f
p=p.x1
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b2.b){b1.U(l,b1.r.d)
b2=b1.a
p=b1.r.d
b2.Y(b2.x2,p)}b2=s.c
if(b2.a){p=b1.a
o=b1.x.f
p=p.y2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b2.b){b1.U(l,b1.x.d)
b2=b1.a
p=b1.x.d
b2.Y(b2.ab,p)}b2=s.d
if(b2.a){p=b1.a
o=b1.y.f
p=p.c2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b2.b){b1.U(l,b1.y.d)
b2=b1.a
p=b1.y.d
b2.Y(b2.c3,p)}b2=s.e
p=b2.a
if(p||b2.b||!1){o=b1.a
n=b1.z.ch
o=o.c6
o.a.uniform1f(o.d,n)}if(p){p=b1.a
o=b1.z.f
p=p.c4
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b2.b){b1.U(l,b1.z.d)
b2=b1.a
p=b1.z.d
b2.Y(b2.c5,p)}b2=s.z
if(b2.length>0){p=b3.db
h=p.gN(p)
p=P.w
g=new H.F([p,p])
for(p=b1.dx.e,o=p.length,f=0;f<p.length;p.length===o||(0,H.n)(p),++f){e=p[f]
d=g.i(0,0)
if(d==null)d=0
g.k(0,0,d+1)
c=J.dQ(b1.a.ba.i(0,0),d)
n=h.aN(e.a)
b=n.a
a=n.b
a0=n.c
a0=n.A(0,Math.sqrt(b*b+a*a+a0*a0))
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
o=b1.a.b9.i(0,o)
o.a.uniform1i(o.d,k)}}b2=s.Q
if(b2.length>0){p=b3.db
h=p.gN(p)
p=P.w
a1=new H.F([p,p])
for(p=b1.dx.f,o=p.length,f=0;f<p.length;p.length===o||(0,H.n)(p),++f){e=p[f]
a2=e.gaw()
d=a1.i(0,a2)
if(d==null)d=0
a1.k(0,a2,d+1)
c=J.dQ(b1.a.bc.i(0,a2),d)
a3=h.M(0,e.gN(e))
n=e.gN(e)
b=$.by
n=n.bp(b==null?$.by=new V.a_(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=$.by
n=a3.bp(n==null?$.by=new V.a_(0,0,0):n)
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=e.gaL(e)
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
e.gae()
n=a3.cg(0)
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
i=new Float32Array(H.bS(new V.co(b,a,a0,a4,a5,a6,a7,a8,n).X(0,!0)))
a9.a.uniformMatrix3fv(a9.d,!1,i)
e.gae()
n=e.gae()
if(!C.a.a2(l,n)){n.a=l.length
l.push(n)}n=e.gae()
b=n.gP(n)
if(b){b=c.f
b.toString
a=n.gP(n)
if(!a)b.a.uniform1i(b.d,0)
else{n=n.geH(n)
b.a.uniform1i(b.d,n)}}e.gat()
n=e.gcI()
b=c.x
b.toString
a=n.gez(n)
a0=n.geA(n)
a4=n.geB()
n=n.gey()
b.a.uniform4f(b.d,a,a0,a4,n)
n=e.gat()
if(!C.a.a2(l,n)){n.a=l.length
l.push(n)}n=e.gat()
b=n.gP(n)
if(b){b=c.r
b.toString
a=n.gP(n)
if(!a)b.a.uniform1i(b.d,0)
else{n=n.geH(n)
b.a.uniform1i(b.d,n)}}if(e.geD()){n=e.gej()
b=c.y
b.a.uniform1f(b.d,n)
n=e.gek()
b=c.z
b.a.uniform1f(b.d,n)
n=e.gel()
b=c.Q
b.a.uniform1f(b.d,n)}}for(p=b2.length,f=0;f<b2.length;b2.length===p||(0,H.n)(b2),++f){o=b2[f].a
k=a1.i(0,o)
if(k==null)k=0
o=b1.a.bb.i(0,o)
o.a.uniform1i(o.d,k)}}b2=s.ch
if(b2.length>0){p=b3.db
h=p.gN(p)
p=P.w
b0=new H.F([p,p])
for(p=b1.dx.r,o=p.length,f=0;f<p.length;p.length===o||(0,H.n)(p),++f){e=p[f]
a2=e.gaw()
d=b0.i(0,a2)
if(d==null)d=0
b0.k(0,a2,d+1)
c=J.dQ(b1.a.be.i(0,a2),d)
n=e.gf0(e)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=e.gfi(e).fu()
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=h.bp(e.gf0(e))
b=c.d
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=e.gaL(e)
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
e.gae()
n=e.gfA()
b=c.f
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=e.gfv(e)
b=c.r
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=e.gfw()
b=c.x
b.a.uniform1f(b.d,n)
n=e.gfz()
b=c.y
b.a.uniform1f(b.d,n)
e.gae()
n=e.gae()
if(!C.a.a2(l,n)){n.a=l.length
l.push(n)}n=e.gae()
b=n.gP(n)
if(b){b=c.dx
b.toString
a=n.gP(n)
if(!a)b.a.uniform1i(b.d,0)
else{n=n.a
b.a.uniform1i(b.d,n)}}e.gat()
n=e.gcI()
b=c.z
b.toString
a=n.gez(n)
a0=n.geA(n)
a4=n.geB()
n=n.gey()
b.a.uniform4f(b.d,a,a0,a4,n)
n=e.gat()
if(!C.a.a2(l,n)){n.a=l.length
l.push(n)}n=e.gat()
b=n.gP(n)
if(b){b=c.dy
b.toString
a=n.gP(n)
if(!a)b.a.uniform1i(b.d,0)
else{n=n.a
b.a.uniform1i(b.d,n)}}if(e.gfj()){n=e.gfh()
b=c.Q
b.a.uniform1f(b.d,n)
n=e.gfg()
b=c.ch
b.a.uniform1f(b.d,n)}if(e.geD()){n=e.gej()
b=c.cx
b.a.uniform1f(b.d,n)
n=e.gek()
b=c.cy
b.a.uniform1f(b.d,n)
n=e.gel()
b=c.db
b.a.uniform1f(b.d,n)}}for(p=b2.length,f=0;f<b2.length;b2.length===p||(0,H.n)(b2),++f){o=b2[f].a
k=b0.i(0,o)
if(k==null)k=0
o=b1.a.bd.i(0,o)
o.a.uniform1i(o.d,k)}}}if(s.f.b){b1.U(l,b1.Q.d)
b2=b1.a
p=b1.Q.d
b2.Y(b2.c7,p)}if(s.dx){b2=b1.a
p=b3.Q
if(p==null){p=b3.db
p=b3.Q=p.gN(p).cg(0)}b2=b2.id
b2.toString
b2.a0(p.X(0,!0))}if(s.cy){b1.U(l,b1.ch)
b2=b1.a
p=b1.ch
b2.e8(b2.c8,p)
b2=s.r
if(b2.a){p=b1.a
o=b1.cx.f
p=p.c9
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b2.b){b1.U(l,b1.cx.d)
b2=b1.a
p=b1.cx.d
b2.Y(b2.ca,p)}b2=s.x
p=b2.a
if(p||b2.b||!1){o=b1.a
n=b1.cy.ch
o=o.cb
o.a.uniform1f(o.d,n)}if(p){p=b1.a
o=b1.cy.f
p=p.cc
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b2.b){b1.U(l,b1.cy.d)
b2=b1.a
p=b1.cy.d
b2.Y(b2.cd,p)}}b2=s.y
p=b2.a
o=!p
if(!o||b2.b||!1){if(p){p=b1.a
n=b1.db.f
p=p.ce
p.a.uniform1f(p.d,n)}if(b2.b){b1.U(l,b1.db.d)
p=b1.a
n=b1.db.d
p.Y(p.cf,n)}q.enable(3042)
q.blendFunc(770,771)}for(j=0;j<l.length;++j){p=l[j]
if(p.d==null){p=p.d=p.c
if(p!=null)p.aa(b3)}}p=b4.e
p.aa(b3)
p.ap(b3)
p.aF(b3)
if(!o||b2.b||!1)q.disable(3042)
for(j=0;j<l.length;++j){b2=l[j]
p=b2.d
if(p!=null){p.aF(b3)
b2.d=null}}b2=b1.a
b2.toString
q.useProgram(null)
b2.x.ex()},
h:function(a){var u=this.a
if(u!=null)return u.b
else return this.bG().ab}}
O.eU.prototype={
$2:function(a,b){if(typeof b!=="number")return b.E()
return this.b.push(new A.c5(a,C.d.S(b+3,4)*4))}}
O.eV.prototype={
$2:function(a,b){return J.ih(a.a,b.a)}}
O.eW.prototype={
$2:function(a,b){if(typeof b!=="number")return b.E()
return this.b.push(new A.cx(a,C.d.S(b+3,4)*4))}}
O.eX.prototype={
$2:function(a,b){return J.ih(a.a,b.a)}}
O.eY.prototype={
$2:function(a,b){if(typeof b!=="number")return b.E()
return this.b.push(new A.cE(a,C.d.S(b+3,4)*4))}}
O.eZ.prototype={
$2:function(a,b){return J.ih(a.a,b.a)}}
O.eO.prototype={
a8:function(){var u,t=this
t.bw()
u=t.f
if(!(Math.abs(u-1)<$.v().a)){t.f=1
u=new D.x(t.b,u,1)
u.b=!0
t.a.L(u)}}}
O.bs.prototype={
L:function(a){return this.a.L(a)},
aR:function(){return this.L(null)},
a8:function(){},
bR:function(a){var u,t,s=this
if(!s.c.l(0,a)){u=s.c
if(u.a||u.b||!1)t=!(a.a||a.b||!1)
else t=!0
s.c=a
if(t)s.a8()
u=s.a
u.a=null
u.L(null)}},
scA:function(a){var u,t=this,s=t.c
if(!s.b)t.bR(new A.M(s.a,!0,!1))
s=t.d
if(s!==a){if(s!=null)s.gt().B(0,t.gaG())
u=t.d
t.d=a
a.gt().m(0,t.gaG())
s=new D.x(t.b+".texture2D",u,t.d)
s.b=!0
t.a.L(s)}}}
O.eP.prototype={}
O.a5.prototype={
bQ:function(a){var u,t,s=this
if(!s.f.l(0,a)){u=s.f
s.f=a
t=new D.x(s.b+".color",u,a)
t.b=!0
s.a.L(t)}},
a8:function(){this.bw()
this.bQ(new V.J(1,1,1))},
saL:function(a,b){this.bR(new A.M(!0,this.c.b,!1))
this.bQ(b)}}
O.eR.prototype={}
O.eS.prototype={
a8:function(){var u,t=this
t.bx()
u=t.ch
if(!(Math.abs(u-1)<$.v().a)){t.ch=1
u=new D.x(t.b+".refraction",u,1)
u.b=!0
t.a.L(u)}}}
O.eT.prototype={
a8:function(){var u,t=this
t.bx()
u=t.ch
if(!(Math.abs(u-100)<$.v().a)){t.ch=100
u=new D.x(t.b+".shininess",u,100)
u.b=!0
t.a.L(u)}}}
O.cI.prototype={}
T.cJ.prototype={}
T.cK.prototype={}
T.fR.prototype={
gP:function(a){var u=this.d
u=u==null?null:u.gP(u)
if(u==null){u=this.c
u=u==null?null:u.gP(u)}return u===!0},
gt:function(){var u=this.f
return u==null?this.f=D.Z():u},
aa:function(a){var u
if(this.d==null){u=this.d=this.c
if(u!=null)u.aa(a)}},
aF:function(a){var u=this.d
if(u!=null){u.aF(a)
this.d=null}}}
T.fS.prototype={
gP:function(a){return this.d},
aa:function(a){var u,t=this
if(!t.c&&t.d){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(3553,t.b)}},
aF:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(3553,null)}}}
T.fT.prototype={
an:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=document.createElement("img")
u.src=a
t=new T.fS()
t.a=0
t.b=q
t.d=t.c=!1
W.I(u,"load",new T.fU(this,t,u,!1,q,!1,!1),!1)
return t},
e7:function(a,b,c){var u,t,s,r
b=V.iL(b)
u=V.iL(a.width)
t=V.iL(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.ik()
s.width=u
s.height=t
r=C.m.cE(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.ld(r.getImageData(0,0,s.width,s.height))}}}
T.fU.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.e7(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.E.f9(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.c0()}++s.e}}
X.ij.prototype={}
X.eu.prototype={
gt:function(){var u=this.x
return u==null?this.x=D.Z():u}}
X.cu.prototype={
gt:function(){var u=this.f
return u==null?this.f=D.Z():u},
ag:function(a){var u=this.f
if(u!=null)u.J(a)},
cY:function(){return this.ag(null)},
saB:function(a){var u,t,s=this
if(!J.C(s.b,a)){u=s.b
if(u!=null)u.gt().B(0,s.gbC())
t=s.b
s.b=a
if(a!=null)a.gt().m(0,s.gbC())
u=new D.x("mover",t,s.b)
u.b=!0
s.ag(u)}}}
X.fN.prototype={}
V.ib.prototype={
$1:function(a){var u=C.c.cB(this.a.geG(),2)
if(u!=="0.00")P.iM(u+" fps")}}
V.fz.prototype={
cS:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.I(q,"scroll",new V.fB(o),!1)},
bW:function(a){var u,t,s,r,q,p,o,n,m,l,k
this.ed()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.fe(C.a.eK(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){p=s[q]
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
if(H.ly(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.b(m,1)
l.href=m[1]
l.textContent=m[0]
t.appendChild(l)}else{k=P.kD(C.D,n,C.l,!1)
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
ed:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new R.fX()
t=P.q
u.a=new H.F([t,R.cG])
u.b=new H.F([t,R.cO])
u.c=u.F(0,q)
t=u.F(0,q).p(0,p)
s=T.K(new H.G("*"))
t.a.push(s)
t.c=!0
t=u.F(0,p).p(0,p)
s=new T.ae()
r=[T.cm]
s.a=H.c([],r)
t.a.push(s)
t=T.K(new H.G("*"))
s.a.push(t)
t=u.F(0,p).p(0,"BoldEnd")
s=T.K(new H.G("*"))
t.a.push(s)
t.c=!0
t=u.F(0,q).p(0,o)
s=T.K(new H.G("_"))
t.a.push(s)
t.c=!0
t=u.F(0,o).p(0,o)
s=new T.ae()
s.a=H.c([],r)
t.a.push(s)
t=T.K(new H.G("_"))
s.a.push(t)
t=u.F(0,o).p(0,n)
s=T.K(new H.G("_"))
t.a.push(s)
t.c=!0
t=u.F(0,q).p(0,m)
s=T.K(new H.G("`"))
t.a.push(s)
t.c=!0
t=u.F(0,m).p(0,m)
s=new T.ae()
s.a=H.c([],r)
t.a.push(s)
t=T.K(new H.G("`"))
s.a.push(t)
t=u.F(0,m).p(0,"CodeEnd")
s=T.K(new H.G("`"))
t.a.push(s)
t.c=!0
t=u.F(0,q).p(0,l)
s=T.K(new H.G("["))
t.a.push(s)
t.c=!0
t=u.F(0,l).p(0,k)
s=T.K(new H.G("|"))
t.a.push(s)
s=u.F(0,l).p(0,j)
t=T.K(new H.G("]"))
s.a.push(t)
s.c=!0
s=u.F(0,l).p(0,l)
t=new T.ae()
t.a=H.c([],r)
s.a.push(t)
s=T.K(new H.G("|]"))
t.a.push(s)
s=u.F(0,k).p(0,j)
t=T.K(new H.G("]"))
s.a.push(t)
s.c=!0
s=u.F(0,k).p(0,k)
t=new T.ae()
t.a=H.c([],r)
s.a.push(t)
s=T.K(new H.G("|]"))
t.a.push(s)
u.F(0,q).p(0,i).a.push(new T.dS())
s=u.F(0,i).p(0,i)
t=new T.ae()
t.a=H.c([],r)
s.a.push(t)
s=T.K(new H.G("*_`["))
t.a.push(s)
s=u.F(0,"BoldEnd")
s.d=s.a.aE(p)
s=u.F(0,n)
s.d=s.a.aE(o)
s=u.F(0,"CodeEnd")
s.d=s.a.aE(m)
s=u.F(0,j)
s.d=s.a.aE("Link")
s=u.F(0,i)
s.d=s.a.aE(i)
this.b=u}}
V.fB.prototype={
$1:function(a){P.jc(C.f,new V.fA(this.a))}}
V.fA.prototype={
$0:function(){var u=C.c.Z(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
N.i9.prototype={
$1:function(a){var u=this.a,t=u.b,s=u.e,r=s.length
t=(t+1)%r
if(t<r){u.b=t
u.c=s[t]
u=u.f
if(u!=null)u.c0()}return}};(function aliases(){var u=J.a.prototype
u.cL=u.h
u=J.cg.prototype
u.cM=u.h
u=T.cc.prototype
u.cK=u.ao
u.bv=u.h
u=O.bs.prototype
u.bw=u.a8
u=O.a5.prototype
u.bx=u.a8})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"l7","kx",5)
u(P,"l8","ky",5)
u(P,"l9","kz",5)
t(P,"jq","l5",8)
var n
s(n=E.at.prototype,"gco",0,0,null,["$1","$0"],["cp","eT"],0,0)
s(n,"gcm",0,0,null,["$1","$0"],["cn","eS"],0,0)
s(n,"gck",0,0,null,["$1","$0"],["cl","eP"],0,0)
r(n,"geN","eO",2)
r(n,"geQ","eR",2)
s(n=E.cL.prototype,"gbz",0,0,null,["$1","$0"],["bB","bA"],0,0)
q(n,"gf5","cv",8)
p(n=X.cT.prototype,"gdz","dA",3)
p(n,"gdj","dk",3)
p(n,"gdr","ds",1)
p(n,"gdD","dE",9)
p(n,"gdB","dC",9)
p(n,"gdH","dI",1)
p(n,"gdL","dM",1)
p(n,"gdv","dw",1)
p(n,"gdJ","dK",1)
p(n,"gdt","du",1)
p(n,"gdN","dO",14)
p(n,"gdP","dQ",3)
p(n,"ge_","e0",4)
p(n,"gdW","dX",4)
p(n,"gdY","dZ",4)
s(D.aT.prototype,"gcT",0,0,null,["$1","$0"],["a5","cU"],0,0)
s(n=D.ci.prototype,"gbM",0,0,null,["$1","$0"],["bN","dF"],0,0)
p(n,"gdS","dT",15)
r(n,"gdd","de",10)
r(n,"gdU","dV",10)
o(V.ah.prototype,"gj","bi",11)
o(V.u.prototype,"gj","bi",11)
s(n=M.c8.prototype,"ga1",0,0,null,["$1","$0"],["a6","cV"],0,0)
r(n,"gdl","dm",2)
r(n,"gdn","dq",2)
s(n=O.cn.prototype,"gaG",0,0,null,["$1","$0"],["L","aR"],0,0)
s(n,"ge5",0,0,null,["$1","$0"],["bO","e6"],0,0)
r(n,"gdf","dg",12)
r(n,"gdh","di",12)
s(O.bs.prototype,"gaG",0,0,null,["$1","$0"],["L","aR"],0,0)
s(X.cu.prototype,"gbC",0,0,null,["$1","$0"],["ag","cY"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.P,null)
s(P.P,[H.it,J.a,J.V,P.da,P.k,H.ck,P.ex,H.ca,H.hd,H.h1,P.aU,H.bj,H.ds,P.ab,H.eE,H.eF,H.ez,P.dy,P.cV,P.cH,P.fL,P.cM,P.hX,P.hR,P.hM,P.d9,P.m,P.e3,P.hW,P.aN,P.ar,P.a1,P.as,P.fh,P.cF,P.d2,P.et,P.b0,P.cl,P.aA,P.q,P.aF,W.e7,W.z,W.cb,P.dD,P.hN,T.dS,T.cc,T.cm,T.fu,R.cG,R.cN,R.cO,R.fX,O.aS,O.bt,E.e_,E.at,E.fm,E.cL,Z.cU,Z.hx,Z.c1,Z.aX,Z.ai,D.e2,D.aV,D.R,X.c2,X.ch,X.eB,X.eI,X.bu,X.f5,X.fY,X.cT,D.aT,D.S,D.fk,D.fF,V.J,V.aq,V.ej,V.co,V.ac,V.a7,V.a_,V.cw,V.cz,V.ah,V.u,M.c8,A.bZ,A.dV,A.M,A.c5,A.cx,A.cE,A.eQ,A.bC,A.bE,A.bF,A.cQ,A.h9,F.aW,F.em,F.br,F.eD,F.bx,F.fv,F.fw,F.fx,F.fy,F.b7,F.hl,F.hm,F.hp,F.hr,F.hs,F.ht,O.cI,O.bs,O.eR,T.fT,X.ij,X.fN,X.cu,V.fz])
s(J.a,[J.ey,J.cf,J.cg,J.ax,J.bq,J.aY,H.bw,W.d,W.dR,W.c_,W.a4,W.y,W.cX,W.W,W.eb,W.ec,W.cZ,W.c7,W.d0,W.ee,W.h,W.d3,W.av,W.ev,W.d5,W.aw,W.eH,W.f_,W.db,W.dc,W.az,W.dd,W.dg,W.aB,W.dk,W.dm,W.aD,W.dn,W.aE,W.dt,W.af,W.dw,W.fW,W.aH,W.dz,W.h_,W.hf,W.dE,W.dG,W.dI,W.dK,W.dM,P.b_,P.d7,P.b1,P.di,P.fl,P.du,P.b5,P.dB,P.dW,P.cW,P.cA,P.dq])
s(J.cg,[J.fi,J.bG,J.ay])
t(J.is,J.ax)
s(J.bq,[J.ce,J.cd])
t(P.eG,P.da)
s(P.eG,[H.cS,W.hF,W.hE,P.ep])
t(H.G,H.cS)
s(P.k,[H.eh,H.eL,H.hy])
s(P.ex,[H.eM,H.hz])
s(P.aU,[H.fe,H.eA,H.hc,H.e1,H.fs,P.ct,P.a2,P.he,P.hb,P.fH,P.e4,P.ea])
s(H.bj,[H.ig,H.fO,H.i5,H.i6,H.i7,P.hB,P.hA,P.hC,P.hD,P.hV,P.hU,P.i1,P.hP,P.hQ,P.eK,P.ef,P.eg,W.f1,W.f3,W.fr,W.fK,W.hI,P.i2,P.eq,P.er,P.dY,E.fn,E.fo,E.fp,E.fV,D.ek,D.el,F.hY,F.hv,F.hu,F.hn,F.ho,O.eU,O.eV,O.eW,O.eX,O.eY,O.eZ,T.fU,V.ib,V.fB,V.fA,N.i9])
s(H.fO,[H.fI,H.bh])
t(P.eJ,P.ab)
t(H.F,P.eJ)
t(H.cj,H.eh)
t(H.cp,H.bw)
s(H.cp,[H.bJ,H.bL])
t(H.bK,H.bJ)
t(H.bv,H.bK)
t(H.bM,H.bL)
t(H.cq,H.bM)
s(H.cq,[H.f7,H.f8,H.f9,H.fa,H.fb,H.cr,H.fc])
t(P.hO,P.hX)
t(P.hL,P.hR)
t(P.e5,P.fL)
t(P.ei,P.e3)
t(P.hg,P.ei)
t(P.hh,P.e5)
s(P.a1,[P.E,P.w])
s(P.a2,[P.b3,P.ew])
s(W.d,[W.D,W.eo,W.aC,W.bN,W.aG,W.ag,W.bP,W.hw,W.bI,P.dZ,P.aQ])
s(W.D,[W.O,W.ap])
s(W.O,[W.j,P.i])
s(W.j,[W.dT,W.dU,W.aR,W.es,W.bn,W.ft])
t(W.e6,W.a4)
t(W.bl,W.cX)
s(W.W,[W.e8,W.e9])
t(W.d_,W.cZ)
t(W.c6,W.d_)
t(W.d1,W.d0)
t(W.ed,W.d1)
t(W.au,W.c_)
t(W.d4,W.d3)
t(W.en,W.d4)
t(W.d6,W.d5)
t(W.bm,W.d6)
t(W.aI,W.h)
s(W.aI,[W.aZ,W.a6,W.b4])
t(W.f0,W.db)
t(W.f2,W.dc)
t(W.de,W.dd)
t(W.f4,W.de)
t(W.dh,W.dg)
t(W.cs,W.dh)
t(W.dl,W.dk)
t(W.fj,W.dl)
t(W.fq,W.dm)
t(W.bO,W.bN)
t(W.fD,W.bO)
t(W.dp,W.dn)
t(W.fE,W.dp)
t(W.fJ,W.dt)
t(W.dx,W.dw)
t(W.fP,W.dx)
t(W.bQ,W.bP)
t(W.fQ,W.bQ)
t(W.dA,W.dz)
t(W.fZ,W.dA)
t(W.aJ,W.a6)
t(W.dF,W.dE)
t(W.hG,W.dF)
t(W.cY,W.c7)
t(W.dH,W.dG)
t(W.hJ,W.dH)
t(W.dJ,W.dI)
t(W.df,W.dJ)
t(W.dL,W.dK)
t(W.hS,W.dL)
t(W.dN,W.dM)
t(W.hT,W.dN)
t(W.hH,P.cH)
t(P.a9,P.hN)
t(P.d8,P.d7)
t(P.eC,P.d8)
t(P.dj,P.di)
t(P.ff,P.dj)
t(P.dv,P.du)
t(P.fM,P.dv)
t(P.dC,P.dB)
t(P.h0,P.dC)
t(P.dX,P.cW)
t(P.fg,P.aQ)
t(P.dr,P.dq)
t(P.fG,P.dr)
s(T.cc,[T.ae,R.cP])
s(E.e_,[Z.c0,A.cC,T.cJ])
s(D.R,[D.bo,D.bp,D.x])
t(D.ci,O.aS)
t(U.f6,D.e2)
s(U.f6,[U.c3,U.cB])
t(A.eN,A.cC)
s(A.cQ,[A.cR,A.h6,A.h7,A.h8,A.h4,A.H,A.h5,A.B,A.bB,A.ha,A.bD,A.X,A.L,A.b6])
t(F.fC,F.em)
t(F.h3,F.eD)
t(F.hq,F.hr)
t(F.fd,F.hs)
t(O.cn,O.cI)
s(O.bs,[O.eO,O.eP,O.a5])
s(O.a5,[O.eS,O.eT])
t(T.cK,T.cJ)
s(T.cK,[T.fR,T.fS])
t(X.eu,X.fN)
u(H.cS,H.hd)
u(H.bJ,P.m)
u(H.bK,H.ca)
u(H.bL,P.m)
u(H.bM,H.ca)
u(P.da,P.m)
u(W.cX,W.e7)
u(W.cZ,P.m)
u(W.d_,W.z)
u(W.d0,P.m)
u(W.d1,W.z)
u(W.d3,P.m)
u(W.d4,W.z)
u(W.d5,P.m)
u(W.d6,W.z)
u(W.db,P.ab)
u(W.dc,P.ab)
u(W.dd,P.m)
u(W.de,W.z)
u(W.dg,P.m)
u(W.dh,W.z)
u(W.dk,P.m)
u(W.dl,W.z)
u(W.dm,P.ab)
u(W.bN,P.m)
u(W.bO,W.z)
u(W.dn,P.m)
u(W.dp,W.z)
u(W.dt,P.ab)
u(W.dw,P.m)
u(W.dx,W.z)
u(W.bP,P.m)
u(W.bQ,W.z)
u(W.dz,P.m)
u(W.dA,W.z)
u(W.dE,P.m)
u(W.dF,W.z)
u(W.dG,P.m)
u(W.dH,W.z)
u(W.dI,P.m)
u(W.dJ,W.z)
u(W.dK,P.m)
u(W.dL,W.z)
u(W.dM,P.m)
u(W.dN,W.z)
u(P.d7,P.m)
u(P.d8,W.z)
u(P.di,P.m)
u(P.dj,W.z)
u(P.du,P.m)
u(P.dv,W.z)
u(P.dB,P.m)
u(P.dC,W.z)
u(P.cW,P.ab)
u(P.dq,P.m)
u(P.dr,W.z)})()
var v={mangledGlobalNames:{w:"int",E:"double",a1:"num",q:"String",aN:"bool",aA:"Null",b0:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.R]},{func:1,ret:-1,args:[W.a6]},{func:1,ret:-1,args:[P.w,[P.k,E.at]]},{func:1,ret:-1,args:[W.h]},{func:1,ret:-1,args:[W.b4]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.aA,args:[,,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.aZ]},{func:1,ret:-1,args:[P.w,[P.k,D.S]]},{func:1,ret:P.E},{func:1,ret:-1,args:[P.w,[P.k,V.ac]]},{func:1,ret:P.aA,args:[,]},{func:1,ret:-1,args:[W.aJ]},{func:1,ret:P.aN,args:[[P.k,D.S]]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.m=W.aR.prototype
C.A=J.a.prototype
C.a=J.ax.prototype
C.B=J.cd.prototype
C.d=J.ce.prototype
C.h=J.cf.prototype
C.c=J.bq.prototype
C.b=J.aY.prototype
C.C=J.ay.prototype
C.n=J.fi.prototype
C.E=P.cA.prototype
C.i=J.bG.prototype
C.o=W.aJ.prototype
C.p=W.bI.prototype
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

C.x=new P.fh()
C.l=new P.hg()
C.y=new P.hh()
C.e=new P.hO()
C.f=new P.as(0)
C.z=new P.as(5e6)
C.D=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.w])})();(function staticFields(){$.a3=0
$.bi=null
$.iS=null
$.jt=null
$.jp=null
$.jw=null
$.i3=null
$.i8=null
$.iJ=null
$.b8=null
$.bT=null
$.bU=null
$.iD=!1
$.a0=C.e
$.Q=[]
$.j_=null
$.j2=null
$.by=null
$.j8=null
$.jh=null
$.jj=null
$.hi=null
$.hj=null
$.hk=null
$.ji=null
$.j1=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"lF","jB",function(){return H.jr("_$dart_dartClosure")})
u($,"lG","iO",function(){return H.jr("_$dart_js")})
u($,"lH","jC",function(){return H.aa(H.h2({
toString:function(){return"$receiver$"}}))})
u($,"lI","jD",function(){return H.aa(H.h2({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"lJ","jE",function(){return H.aa(H.h2(null))})
u($,"lK","jF",function(){return H.aa(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"lN","jI",function(){return H.aa(H.h2(void 0))})
u($,"lO","jJ",function(){return H.aa(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"lM","jH",function(){return H.aa(H.jf(null))})
u($,"lL","jG",function(){return H.aa(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"lQ","jL",function(){return H.aa(H.jf(void 0))})
u($,"lP","jK",function(){return H.aa(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"m2","iP",function(){return P.kw()})
u($,"m3","jP",function(){return P.kl("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"lX","jO",function(){return Z.Y(0)})
u($,"lR","jM",function(){return Z.Y(511)})
u($,"lZ","an",function(){return Z.Y(1)})
u($,"lY","am",function(){return Z.Y(2)})
u($,"lT","al",function(){return Z.Y(4)})
u($,"m_","ao",function(){return Z.Y(8)})
u($,"m0","aP",function(){return Z.Y(16)})
u($,"lU","bW",function(){return Z.Y(32)})
u($,"lV","bX",function(){return Z.Y(64)})
u($,"lW","jN",function(){return Z.Y(96)})
u($,"m1","be",function(){return Z.Y(128)})
u($,"lS","ak",function(){return Z.Y(256)})
u($,"lE","jA",function(){return new V.ej(1e-9)})
u($,"lD","v",function(){return $.jA()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.bw,ArrayBufferView:H.bw,Float32Array:H.bv,Float64Array:H.bv,Int16Array:H.f7,Int32Array:H.f8,Int8Array:H.f9,Uint16Array:H.fa,Uint32Array:H.fb,Uint8ClampedArray:H.cr,CanvasPixelArray:H.cr,Uint8Array:H.fc,HTMLAudioElement:W.j,HTMLBRElement:W.j,HTMLBaseElement:W.j,HTMLBodyElement:W.j,HTMLButtonElement:W.j,HTMLContentElement:W.j,HTMLDListElement:W.j,HTMLDataElement:W.j,HTMLDataListElement:W.j,HTMLDetailsElement:W.j,HTMLDialogElement:W.j,HTMLDivElement:W.j,HTMLEmbedElement:W.j,HTMLFieldSetElement:W.j,HTMLHRElement:W.j,HTMLHeadElement:W.j,HTMLHeadingElement:W.j,HTMLHtmlElement:W.j,HTMLIFrameElement:W.j,HTMLInputElement:W.j,HTMLLIElement:W.j,HTMLLabelElement:W.j,HTMLLegendElement:W.j,HTMLLinkElement:W.j,HTMLMapElement:W.j,HTMLMediaElement:W.j,HTMLMenuElement:W.j,HTMLMetaElement:W.j,HTMLMeterElement:W.j,HTMLModElement:W.j,HTMLOListElement:W.j,HTMLObjectElement:W.j,HTMLOptGroupElement:W.j,HTMLOptionElement:W.j,HTMLOutputElement:W.j,HTMLParagraphElement:W.j,HTMLParamElement:W.j,HTMLPictureElement:W.j,HTMLPreElement:W.j,HTMLProgressElement:W.j,HTMLQuoteElement:W.j,HTMLScriptElement:W.j,HTMLShadowElement:W.j,HTMLSlotElement:W.j,HTMLSourceElement:W.j,HTMLSpanElement:W.j,HTMLStyleElement:W.j,HTMLTableCaptionElement:W.j,HTMLTableCellElement:W.j,HTMLTableDataCellElement:W.j,HTMLTableHeaderCellElement:W.j,HTMLTableColElement:W.j,HTMLTableElement:W.j,HTMLTableRowElement:W.j,HTMLTableSectionElement:W.j,HTMLTemplateElement:W.j,HTMLTextAreaElement:W.j,HTMLTimeElement:W.j,HTMLTitleElement:W.j,HTMLTrackElement:W.j,HTMLUListElement:W.j,HTMLUnknownElement:W.j,HTMLVideoElement:W.j,HTMLDirectoryElement:W.j,HTMLFontElement:W.j,HTMLFrameElement:W.j,HTMLFrameSetElement:W.j,HTMLMarqueeElement:W.j,HTMLElement:W.j,AccessibleNodeList:W.dR,HTMLAnchorElement:W.dT,HTMLAreaElement:W.dU,Blob:W.c_,HTMLCanvasElement:W.aR,CDATASection:W.ap,CharacterData:W.ap,Comment:W.ap,ProcessingInstruction:W.ap,Text:W.ap,CSSPerspective:W.e6,CSSCharsetRule:W.y,CSSConditionRule:W.y,CSSFontFaceRule:W.y,CSSGroupingRule:W.y,CSSImportRule:W.y,CSSKeyframeRule:W.y,MozCSSKeyframeRule:W.y,WebKitCSSKeyframeRule:W.y,CSSKeyframesRule:W.y,MozCSSKeyframesRule:W.y,WebKitCSSKeyframesRule:W.y,CSSMediaRule:W.y,CSSNamespaceRule:W.y,CSSPageRule:W.y,CSSRule:W.y,CSSStyleRule:W.y,CSSSupportsRule:W.y,CSSViewportRule:W.y,CSSStyleDeclaration:W.bl,MSStyleCSSProperties:W.bl,CSS2Properties:W.bl,CSSImageValue:W.W,CSSKeywordValue:W.W,CSSNumericValue:W.W,CSSPositionValue:W.W,CSSResourceValue:W.W,CSSUnitValue:W.W,CSSURLImageValue:W.W,CSSStyleValue:W.W,CSSMatrixComponent:W.a4,CSSRotation:W.a4,CSSScale:W.a4,CSSSkew:W.a4,CSSTranslation:W.a4,CSSTransformComponent:W.a4,CSSTransformValue:W.e8,CSSUnparsedValue:W.e9,DataTransferItemList:W.eb,DOMException:W.ec,ClientRectList:W.c6,DOMRectList:W.c6,DOMRectReadOnly:W.c7,DOMStringList:W.ed,DOMTokenList:W.ee,Element:W.O,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.au,FileList:W.en,FileWriter:W.eo,HTMLFormElement:W.es,Gamepad:W.av,History:W.ev,HTMLCollection:W.bm,HTMLFormControlsCollection:W.bm,HTMLOptionsCollection:W.bm,ImageData:W.aw,HTMLImageElement:W.bn,KeyboardEvent:W.aZ,Location:W.eH,MediaList:W.f_,MIDIInputMap:W.f0,MIDIOutputMap:W.f2,MimeType:W.az,MimeTypeArray:W.f4,PointerEvent:W.a6,MouseEvent:W.a6,DragEvent:W.a6,Document:W.D,DocumentFragment:W.D,HTMLDocument:W.D,ShadowRoot:W.D,XMLDocument:W.D,Attr:W.D,DocumentType:W.D,Node:W.D,NodeList:W.cs,RadioNodeList:W.cs,Plugin:W.aB,PluginArray:W.fj,RTCStatsReport:W.fq,HTMLSelectElement:W.ft,SourceBuffer:W.aC,SourceBufferList:W.fD,SpeechGrammar:W.aD,SpeechGrammarList:W.fE,SpeechRecognitionResult:W.aE,Storage:W.fJ,CSSStyleSheet:W.af,StyleSheet:W.af,TextTrack:W.aG,TextTrackCue:W.ag,VTTCue:W.ag,TextTrackCueList:W.fP,TextTrackList:W.fQ,TimeRanges:W.fW,Touch:W.aH,TouchEvent:W.b4,TouchList:W.fZ,TrackDefaultList:W.h_,CompositionEvent:W.aI,FocusEvent:W.aI,TextEvent:W.aI,UIEvent:W.aI,URL:W.hf,VideoTrackList:W.hw,WheelEvent:W.aJ,Window:W.bI,DOMWindow:W.bI,CSSRuleList:W.hG,ClientRect:W.cY,DOMRect:W.cY,GamepadList:W.hJ,NamedNodeMap:W.df,MozNamedAttrMap:W.df,SpeechRecognitionResultList:W.hS,StyleSheetList:W.hT,SVGLength:P.b_,SVGLengthList:P.eC,SVGNumber:P.b1,SVGNumberList:P.ff,SVGPointList:P.fl,SVGStringList:P.fM,SVGAElement:P.i,SVGAnimateElement:P.i,SVGAnimateMotionElement:P.i,SVGAnimateTransformElement:P.i,SVGAnimationElement:P.i,SVGCircleElement:P.i,SVGClipPathElement:P.i,SVGDefsElement:P.i,SVGDescElement:P.i,SVGDiscardElement:P.i,SVGEllipseElement:P.i,SVGFEBlendElement:P.i,SVGFEColorMatrixElement:P.i,SVGFEComponentTransferElement:P.i,SVGFECompositeElement:P.i,SVGFEConvolveMatrixElement:P.i,SVGFEDiffuseLightingElement:P.i,SVGFEDisplacementMapElement:P.i,SVGFEDistantLightElement:P.i,SVGFEFloodElement:P.i,SVGFEFuncAElement:P.i,SVGFEFuncBElement:P.i,SVGFEFuncGElement:P.i,SVGFEFuncRElement:P.i,SVGFEGaussianBlurElement:P.i,SVGFEImageElement:P.i,SVGFEMergeElement:P.i,SVGFEMergeNodeElement:P.i,SVGFEMorphologyElement:P.i,SVGFEOffsetElement:P.i,SVGFEPointLightElement:P.i,SVGFESpecularLightingElement:P.i,SVGFESpotLightElement:P.i,SVGFETileElement:P.i,SVGFETurbulenceElement:P.i,SVGFilterElement:P.i,SVGForeignObjectElement:P.i,SVGGElement:P.i,SVGGeometryElement:P.i,SVGGraphicsElement:P.i,SVGImageElement:P.i,SVGLineElement:P.i,SVGLinearGradientElement:P.i,SVGMarkerElement:P.i,SVGMaskElement:P.i,SVGMetadataElement:P.i,SVGPathElement:P.i,SVGPatternElement:P.i,SVGPolygonElement:P.i,SVGPolylineElement:P.i,SVGRadialGradientElement:P.i,SVGRectElement:P.i,SVGScriptElement:P.i,SVGSetElement:P.i,SVGStopElement:P.i,SVGStyleElement:P.i,SVGElement:P.i,SVGSVGElement:P.i,SVGSwitchElement:P.i,SVGSymbolElement:P.i,SVGTSpanElement:P.i,SVGTextContentElement:P.i,SVGTextElement:P.i,SVGTextPathElement:P.i,SVGTextPositioningElement:P.i,SVGTitleElement:P.i,SVGUseElement:P.i,SVGViewElement:P.i,SVGGradientElement:P.i,SVGComponentTransferFunctionElement:P.i,SVGFEDropShadowElement:P.i,SVGMPathElement:P.i,SVGTransform:P.b5,SVGTransformList:P.h0,AudioBuffer:P.dW,AudioParamMap:P.dX,AudioTrackList:P.dZ,AudioContext:P.aQ,webkitAudioContext:P.aQ,BaseAudioContext:P.aQ,OfflineAudioContext:P.fg,WebGL2RenderingContext:P.cA,SQLResultSetRowList:P.fG})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.cp.$nativeSuperclassTag="ArrayBufferView"
H.bJ.$nativeSuperclassTag="ArrayBufferView"
H.bK.$nativeSuperclassTag="ArrayBufferView"
H.bv.$nativeSuperclassTag="ArrayBufferView"
H.bL.$nativeSuperclassTag="ArrayBufferView"
H.bM.$nativeSuperclassTag="ArrayBufferView"
H.cq.$nativeSuperclassTag="ArrayBufferView"
W.bN.$nativeSuperclassTag="EventTarget"
W.bO.$nativeSuperclassTag="EventTarget"
W.bP.$nativeSuperclassTag="EventTarget"
W.bQ.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(N.ju,[])
else N.ju([])})})()
//# sourceMappingURL=test.dart.js.map
