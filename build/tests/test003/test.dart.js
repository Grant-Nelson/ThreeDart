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
a[c]=function(){a[c]=function(){H.ml(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.ja"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.ja"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.ja(this,a,b,c,true,false,e).prototype
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
eQ:function(){return new P.bI("No element")},
kQ:function(){return new P.bI("Too many elements")},
cP:function(a,b,c,d){if(c-b<=32)H.lb(a,b,c,d)
else H.la(a,b,c,d)},
lb:function(a,b,c,d){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.c(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.c(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.R()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.c(a,q)
C.a.m(a,s,a[q])
s=q}C.a.m(a,s,t)}},
la:function(a2,a3,a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.d.T(a4-a3+1,6),d=a3+e,c=a4-e,b=C.d.T(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
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
r=p}C.a.m(a2,d,u)
C.a.m(a2,b,s)
C.a.m(a2,c,q)
if(a3<0||a3>=a2.length)return H.c(a2,a3)
C.a.m(a2,a,a2[a3])
if(a4<0||a4>=a2.length)return H.c(a2,a4)
C.a.m(a2,a0,a2[a4])
o=a3+1
n=a4-1
if(J.H(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.ay()
if(k<0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.m(a2,m,a2[o])
C.a.m(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.R()
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
if(typeof f!=="number")return f.R()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.R()
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
H.cP(a2,a3,o-2,a5)
H.cP(a2,n+2,a4,a5)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.c(a2,o)
if(!J.H(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.c(a2,n)
if(!J.H(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
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
break}}}H.cP(a2,o,n,a5)}else H.cP(a2,o,n,a5)},
l:function l(a){this.a=a},
et:function et(){},
cw:function cw(){},
bz:function bz(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
f5:function f5(a,b,c){this.a=a
this.b=b
this.$ti=c},
f6:function f6(a,b){this.a=null
this.b=a
this.c=b},
f7:function f7(a,b,c){this.a=a
this.b=b
this.$ti=c},
bR:function bR(a,b,c){this.a=a
this.b=b
this.$ti=c},
hY:function hY(a,b){this.a=a
this.b=b},
ck:function ck(){},
hD:function hD(){},
d2:function d2(){},
e0:function(a){var u,t=H.mn(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
m4:function(a){return v.types[a]},
mb:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.N(a).$iu},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a4(a)
if(typeof u!=="string")throw H.f(H.bk(a))
return u},
bF:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bG:function(a){return H.kX(a)+H.k5(H.c4(a),0,null)},
kX:function(a){var u,t,s,r,q,p,o,n=J.N(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.H||!!n.$ibh){r=C.n(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.e0(t.length>1&&C.b.ao(t,0)===36?C.b.a6(t,1):t)},
jK:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
l4:function(a){var u,t,s,r=H.b([],[P.y])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.p)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.bk(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.d.aM(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.f(H.bk(s))}return H.jK(r)},
jL:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.bk(s))
if(s<0)throw H.f(H.bk(s))
if(s>65535)return H.l4(a)}return H.jK(a)},
j2:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.aM(u,10))>>>0,56320|u&1023)}throw H.f(P.ac(a,0,1114111,null,null))},
bb:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
l3:function(a){var u=H.bb(a).getFullYear()+0
return u},
l1:function(a){var u=H.bb(a).getMonth()+1
return u},
kY:function(a){var u=H.bb(a).getDate()+0
return u},
kZ:function(a){var u=H.bb(a).getHours()+0
return u},
l0:function(a){var u=H.bb(a).getMinutes()+0
return u},
l2:function(a){var u=H.bb(a).getSeconds()+0
return u},
l_:function(a){var u=H.bb(a).getMilliseconds()+0
return u},
aW:function(a){throw H.f(H.bk(a))},
c:function(a,b){if(a==null)J.b_(a)
throw H.f(H.bm(a,b))},
bm:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a5(!0,b,s,null)
u=J.b_(a)
if(!(b<0)){if(typeof u!=="number")return H.aW(u)
t=b>=u}else t=!0
if(t)return P.B(b,a,s,null,u)
return P.cL(b,s)},
lZ:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bc(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bc(a,c,!0,b,"end",u)
return new P.a5(!0,b,"end",null)},
bk:function(a){return new P.a5(!0,a,null,null)},
f:function(a){var u
if(a==null)a=new P.cG()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.kh})
u.name=""}else u.toString=H.kh
return u},
kh:function(){return J.a4(this.dartException)},
t:function(a){throw H.f(a)},
p:function(a){throw H.f(P.az(a))},
ae:function(a){var u,t,s,r,q,p
a=H.kg(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.o])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hr(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hs:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
jU:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
jG:function(a,b){return new H.fC(a,b==null?null:b.method)},
j0:function(a,b){var u=b==null,t=u?null:b.method
return new H.eV(a,t,u?null:b.receiver)},
as:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.iO(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.aM(t,16)&8191)===10)switch(s){case 438:return f.$1(H.j0(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.jG(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.kk()
q=$.kl()
p=$.km()
o=$.kn()
n=$.kq()
m=$.kr()
l=$.kp()
$.ko()
k=$.kt()
j=$.ks()
i=r.Y(u)
if(i!=null)return f.$1(H.j0(u,i))
else{i=q.Y(u)
if(i!=null){i.method="call"
return f.$1(H.j0(u,i))}else{i=p.Y(u)
if(i==null){i=o.Y(u)
if(i==null){i=n.Y(u)
if(i==null){i=m.Y(u)
if(i==null){i=l.Y(u)
if(i==null){i=o.Y(u)
if(i==null){i=k.Y(u)
if(i==null){i=j.Y(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.jG(u,i))}}return f.$1(new H.hC(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.cR()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.a5(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.cR()
return a},
jf:function(a){var u
if(a==null)return new H.dF(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dF(a)},
m2:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.m(0,a[u],a[t])}return b},
ma:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(P.q("Unsupported number of arguments for wrapped closure"))},
bl:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.ma)
a.$identity=u
return u},
kJ:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.h7().constructor.prototype):Object.create(new H.bq(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.a6
if(typeof t!=="number")return t.H()
$.a6=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.ju(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.kF(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.ju(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
kF:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.m4,a)
if(typeof a=="function")if(b)return a
else{u=c?H.js:H.iR
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.f("Error in functionType of tearoff")},
kG:function(a,b,c,d){var u=H.iR
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
ju:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.kI(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.kG(t,!r,u,b)
if(t===0){r=$.a6
if(typeof r!=="number")return r.H()
$.a6=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.br
return new Function(r+H.e(q==null?$.br=H.eb("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.a6
if(typeof r!=="number")return r.H()
$.a6=r+1
o+=r
r="return function("+o+"){return this."
q=$.br
return new Function(r+H.e(q==null?$.br=H.eb("self"):q)+"."+H.e(u)+"("+o+");}")()},
kH:function(a,b,c,d){var u=H.iR,t=H.js
switch(b?-1:a){case 0:throw H.f(H.l8("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
kI:function(a,b){var u,t,s,r,q,p,o,n=$.br
if(n==null)n=$.br=H.eb("self")
u=$.jr
if(u==null)u=$.jr=H.eb("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.kH(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.a6
if(typeof u!=="number")return u.H()
$.a6=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.a6
if(typeof u!=="number")return u.H()
$.a6=u+1
return new Function(n+u+"}")()},
ja:function(a,b,c,d,e,f,g){return H.kJ(a,b,c,d,!!e,!!f,g)},
iR:function(a){return a.a},
js:function(a){return a.c},
eb:function(a){var u,t,s,r=new H.bq("self","target","receiver","name"),q=J.iY(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
mf:function(a,b){throw H.f(H.kE(a,H.e0(b.substring(2))))},
r:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.N(a)[b]
else u=!0
if(u)return a
H.mf(a,b)},
m0:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
kE:function(a,b){return new H.ec("CastError: "+P.iW(a)+": type '"+H.e(H.lT(a))+"' is not a subtype of type '"+b+"'")},
lT:function(a){var u,t=J.N(a)
if(!!t.$ibs){u=H.m0(t)
if(u!=null)return H.mg(u)
return"Closure"}return H.bG(a)},
ml:function(a){throw H.f(new P.el(a))},
l8:function(a){return new H.fS(a)},
kb:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
c4:function(a){if(a==null)return
return a.$ti},
mT:function(a,b,c){return H.iL(a["$a"+H.e(c)],H.c4(b))},
m3:function(a,b,c,d){var u=H.iL(a["$a"+H.e(c)],H.c4(b))
return u==null?null:u[d]},
je:function(a,b,c){var u=H.iL(a["$a"+H.e(b)],H.c4(a))
return u==null?null:u[c]},
bo:function(a,b){var u=H.c4(a)
return u==null?null:u[b]},
mg:function(a){return H.aV(a,null)},
aV:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.e0(a[0].name)+H.k5(a,1,b)
if(typeof a=="function")return H.e0(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.c(b,t)
return H.e(b[t])}if('func' in a)return H.lr(a,b)
if('futureOr' in a)return"FutureOr<"+H.aV("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lr:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.b([],[P.o])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.c(a0,m)
p=C.b.H(p,a0[m])
l=u[q]
if(l!=null&&l!==P.P)p+=" extends "+H.aV(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.aV(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.aV(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.aV(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.m1(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.aV(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
k5:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.an("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.aV(p,c)}return"<"+u.h(0)+">"},
iL:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
mR:function(a,b,c){return a.apply(b,H.iL(J.N(b)["$a"+H.e(c)],H.c4(b)))},
mS:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
mc:function(a){var u,t,s,r,q=$.kc.$1(a),p=$.iB[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.iH[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.k8.$2(a,q)
if(q!=null){p=$.iB[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.iH[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.iJ(u)
$.iB[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.iH[q]=u
return u}if(s==="-"){r=H.iJ(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.ke(a,u)
if(s==="*")throw H.f(P.jV(q))
if(v.leafTags[q]===true){r=H.iJ(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.ke(a,u)},
ke:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jh(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
iJ:function(a){return J.jh(a,!1,null,!!a.$iu)},
md:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.iJ(u)
else return J.jh(u,c,null,null)},
m8:function(){if(!0===$.jg)return
$.jg=!0
H.m9()},
m9:function(){var u,t,s,r,q,p,o,n
$.iB=Object.create(null)
$.iH=Object.create(null)
H.m7()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.kf.$1(q)
if(p!=null){o=H.md(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
m7:function(){var u,t,s,r,q,p,o=C.v()
o=H.bj(C.w,H.bj(C.x,H.bj(C.o,H.bj(C.o,H.bj(C.y,H.bj(C.z,H.bj(C.A(C.n),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.kc=new H.iE(r)
$.k8=new H.iF(q)
$.kf=new H.iG(p)},
bj:function(a,b){return a(b)||b},
kS:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.f(new P.eH("Illegal RegExp pattern ("+String(p)+")",a))},
mi:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
m_:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
kg:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
jj:function(a,b,c){var u=H.mj(a,b,c)
return u},
mj:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.kg(b),'g'),H.m_(c))},
hr:function hr(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fC:function fC(a,b){this.a=a
this.b=b},
eV:function eV(a,b,c){this.a=a
this.b=b
this.c=c},
hC:function hC(a){this.a=a},
iO:function iO(a){this.a=a},
dF:function dF(a){this.a=a
this.b=null},
bs:function bs(){},
hf:function hf(){},
h7:function h7(){},
bq:function bq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ec:function ec(a){this.a=a},
fS:function fS(a){this.a=a},
I:function I(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
eZ:function eZ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cu:function cu(a,b){this.a=a
this.$ti=b},
f_:function f_(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
iE:function iE(a){this.a=a},
iF:function iF(a){this.a=a},
iG:function iG(a){this.a=a},
eU:function eU(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
c1:function(a){return a},
aU:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.bm(b,a))},
lq:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.f(H.lZ(a,b,c))
return b},
bD:function bD(){},
cB:function cB(){},
bC:function bC(){},
cC:function cC(){},
ft:function ft(){},
fu:function fu(){},
fv:function fv(){},
fw:function fw(){},
fx:function fx(){},
cD:function cD(){},
fy:function fy(){},
bU:function bU(){},
bV:function bV(){},
bW:function bW(){},
bX:function bX(){},
m1:function(a){return J.jz(a?Object.keys(a):[],null)},
mn:function(a){return v.mangledGlobalNames[a]},
me:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jh:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iD:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.jg==null){H.m8()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.f(P.jV("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.jl()]
if(r!=null)return r
r=H.mc(a)
if(r!=null)return r
if(typeof a=="function")return C.I
u=Object.getPrototypeOf(a)
if(u==null)return C.q
if(u===Object.prototype)return C.q
if(typeof s=="function"){Object.defineProperty(s,$.jl(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
kR:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.f(P.jq(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.f(P.ac(a,0,4294967295,"length",null))
return J.jz(new Array(a),b)},
jz:function(a,b){return J.iY(H.b(a,[b]))},
iY:function(a){a.fixed$length=Array
return a},
N:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.co.prototype
return J.eT.prototype}if(typeof a=="string")return J.aG.prototype
if(a==null)return J.cp.prototype
if(typeof a=="boolean")return J.eS.prototype
if(a.constructor==Array)return J.aF.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aH.prototype
return a}if(a instanceof P.P)return a
return J.iD(a)},
jb:function(a){if(typeof a=="string")return J.aG.prototype
if(a==null)return a
if(a.constructor==Array)return J.aF.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aH.prototype
return a}if(a instanceof P.P)return a
return J.iD(a)},
iC:function(a){if(a==null)return a
if(a.constructor==Array)return J.aF.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aH.prototype
return a}if(a instanceof P.P)return a
return J.iD(a)},
ka:function(a){if(typeof a=="number")return J.by.prototype
if(typeof a=="string")return J.aG.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.bh.prototype
return a},
jc:function(a){if(typeof a=="string")return J.aG.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.bh.prototype
return a},
jd:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aH.prototype
return a}if(a instanceof P.P)return a
return J.iD(a)},
H:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.N(a).n(a,b)},
jn:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.ka(a).J(a,b)},
e1:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mb(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.jb(a).i(a,b)},
kz:function(a,b,c,d){return J.jd(a).ez(a,b,c,d)},
iP:function(a,b){return J.ka(a).eK(a,b)},
iQ:function(a,b){return J.iC(a).t(a,b)},
kA:function(a,b){return J.iC(a).B(a,b)},
kB:function(a){return J.jd(a).geG(a)},
c7:function(a){return J.N(a).gE(a)},
aZ:function(a){return J.iC(a).gL(a)},
b_:function(a){return J.jb(a).gl(a)},
jo:function(a){return J.iC(a).fm(a)},
kC:function(a,b,c){return J.jc(a).aJ(a,b,c)},
kD:function(a){return J.jc(a).fz(a)},
a4:function(a){return J.N(a).h(a)},
a:function a(){},
eS:function eS(){},
cp:function cp(){},
cq:function cq(){},
fG:function fG(){},
bh:function bh(){},
aH:function aH(){},
aF:function aF(a){this.$ti=a},
iZ:function iZ(a){this.$ti=a},
W:function W(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
by:function by(){},
co:function co(){},
eT:function eT(){},
aG:function aG(){}},P={
lh:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.lU()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bl(new P.i_(s),1)).observe(u,{childList:true})
return new P.hZ(s,u,t)}else if(self.setImmediate!=null)return P.lV()
return P.lW()},
li:function(a){self.scheduleImmediate(H.bl(new P.i0(a),0))},
lj:function(a){self.setImmediate(H.bl(new P.i1(a),0))},
lk:function(a){P.j4(C.h,a)},
j4:function(a,b){var u=C.d.T(a.a,1000)
return P.lo(u<0?0:u,b)},
jT:function(a,b){var u=C.d.T(a.a,1000)
return P.lp(u<0?0:u,b)},
lo:function(a,b){var u=new P.dL()
u.d7(a,b)
return u},
lp:function(a,b){var u=new P.dL()
u.d8(a,b)
return u},
lN:function(){var u,t
for(;u=$.bi,u!=null;){$.c3=null
t=u.b
$.bi=t
if(t==null)$.c2=null
u.a.$0()}},
lS:function(){$.j8=!0
try{P.lN()}finally{$.c3=null
$.j8=!1
if($.bi!=null)$.jm().$1(P.k9())}},
lQ:function(a){var u=new P.d5(a)
if($.bi==null){$.bi=$.c2=u
if(!$.j8)$.jm().$1(P.k9())}else $.c2=$.c2.b=u},
lR:function(a){var u,t,s=$.bi
if(s==null){P.lQ(a)
$.c3=$.c2
return}u=new P.d5(a)
t=$.c3
if(t==null){u.b=s
$.bi=$.c3=u}else{u.b=t.b
$.c3=t.b=u
if(u.b==null)$.c2=u}},
jS:function(a,b){var u=$.a2
if(u===C.e)return P.j4(a,b)
return P.j4(a,u.eH(b))},
le:function(a,b){var u=$.a2
if(u===C.e)return P.jT(a,b)
return P.jT(a,u.c2(b,P.cX))},
k6:function(a,b,c,d,e){var u={}
u.a=d
P.lR(new P.iy(u,e))},
lO:function(a,b,c,d){var u,t=$.a2
if(t===c)return d.$0()
$.a2=c
u=t
try{t=d.$0()
return t}finally{$.a2=u}},
lP:function(a,b,c,d,e){var u,t=$.a2
if(t===c)return d.$1(e)
$.a2=c
u=t
try{t=d.$1(e)
return t}finally{$.a2=u}},
i_:function i_(a){this.a=a},
hZ:function hZ(a,b,c){this.a=a
this.b=b
this.c=c},
i0:function i0(a){this.a=a},
i1:function i1(a){this.a=a},
dL:function dL(){this.c=0},
is:function is(a,b){this.a=a
this.b=b},
ir:function ir(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d5:function d5(a){this.a=a
this.b=null},
cT:function cT(){},
ha:function ha(){},
cX:function cX(){},
iv:function iv(){},
iy:function iy(a,b){this.a=a
this.b=b},
id:function id(){},
ie:function ie(a,b){this.a=a
this.b=b},
ig:function ig(a,b,c){this.a=a
this.b=b
this.c=c},
jA:function(a,b){return new H.I([a,b])},
kT:function(a){return H.m2(a,new H.I([null,null]))},
cv:function(a){return new P.ia([a])},
j7:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
ln:function(a,b){var u=new P.dl(a,b)
u.c=a.e
return u},
kP:function(a,b,c){var u,t
if(P.j9(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.o])
$.T.push(a)
try{P.ls(a,u)}finally{if(0>=$.T.length)return H.c($.T,-1)
$.T.pop()}t=P.jQ(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
iX:function(a,b,c){var u,t
if(P.j9(a))return b+"..."+c
u=new P.an(b)
$.T.push(a)
try{t=u
t.a=P.jQ(t.a,a,", ")}finally{if(0>=$.T.length)return H.c($.T,-1)
$.T.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
j9:function(a){var u,t
for(u=$.T.length,t=0;t<u;++t)if(a===$.T[t])return!0
return!1},
ls:function(a,b){var u,t,s,r,q,p,o,n=a.gL(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.q())return
u=H.e(n.gA(n))
b.push(u)
m+=u.length+2;++l}if(!n.q()){if(l<=5)return
if(0>=b.length)return H.c(b,-1)
t=b.pop()
if(0>=b.length)return H.c(b,-1)
s=b.pop()}else{r=n.gA(n);++l
if(!n.q()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.c(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gA(n);++l
for(;n.q();r=q,q=p){p=n.gA(n);++l
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
jB:function(a,b){var u,t,s=P.cv(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.p)(a),++t)s.p(0,a[t])
return s},
jD:function(a){var u,t={}
if(P.j9(a))return"{...}"
u=new P.an("")
try{$.T.push(a)
u.a+="{"
t.a=!0
J.kA(a,new P.f4(t,u))
u.a+="}"}finally{if(0>=$.T.length)return H.c($.T,-1)
$.T.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
ia:function ia(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ib:function ib(a){this.a=a
this.c=this.b=null},
dl:function dl(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
f0:function f0(){},
n:function n(){},
f3:function f3(){},
f4:function f4(a,b){this.a=a
this.b=b},
aj:function aj(){},
ii:function ii(){},
dm:function dm(){},
ee:function ee(){},
eg:function eg(){},
ev:function ev(){},
eO:function eO(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
eN:function eN(a){this.a=a},
hG:function hG(){},
hH:function hH(){},
it:function it(a){this.b=0
this.c=a},
kN:function(a){if(a instanceof H.bs)return a.h(0)
return"Instance of '"+H.e(H.bG(a))+"'"},
kU:function(a,b,c){var u,t,s=J.kR(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
jC:function(a,b,c){var u,t=H.b([],[c])
for(u=J.aZ(a);u.q();)t.push(u.gA(u))
if(b)return t
return J.iY(t)},
j3:function(a){var u,t
if(a.constructor===Array){u=a.length
t=P.jN(0,null,u)
return H.jL(t<u?C.a.cP(a,0,t):a)}return P.lc(a,0,null)},
lc:function(a,b,c){var u,t,s=J.aZ(a)
for(u=0;u<b;++u)if(!s.q())throw H.f(P.ac(b,0,u,null,null))
t=[]
for(;s.q();)t.push(s.gA(s))
return H.jL(t)},
l5:function(a){return new H.eU(a,H.kS(a,!1,!0,!1,!1,!1))},
jQ:function(a,b,c){var u=J.aZ(b)
if(!u.q())return a
if(c.length===0){do a+=H.e(u.gA(u))
while(u.q())}else{a+=H.e(u.gA(u))
for(;u.q();)a=a+c+H.e(u.gA(u))}return a},
k4:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.f){u=$.ky().b
u=u.test(b)}else u=!1
if(u)return b
t=C.C.eL(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.c(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.j2(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
kK:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
kL:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cf:function(a){if(a>=10)return""+a
return"0"+a},
jw:function(a){return new P.aB(1000*a)},
iW:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a4(a)
if(typeof a==="string")return JSON.stringify(a)
return P.kN(a)},
jq:function(a,b,c){return new P.a5(!0,a,b,c)},
cL:function(a,b){return new P.bc(null,null,!0,a,b,"Value not in range")},
ac:function(a,b,c,d,e){return new P.bc(b,c,!0,a,d,"Invalid value")},
jN:function(a,b,c){if(0>a||a>c)throw H.f(P.ac(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.f(P.ac(b,a,c,"end",null))
return b}return c},
jM:function(a,b){if(typeof a!=="number")return a.ay()
if(a<0)throw H.f(P.ac(a,0,null,b,null))},
B:function(a,b,c,d,e){var u=e==null?J.b_(b):e
return new P.eP(u,!0,a,c,"Index out of range")},
Z:function(a){return new P.hE(a)},
jV:function(a){return new P.hB(a)},
jP:function(a){return new P.bI(a)},
az:function(a){return new P.ef(a)},
q:function(a){return new P.dd(a)},
ji:function(a){H.me(a)},
af:function af(){},
aA:function aA(a,b){this.a=a
this.b=b},
G:function G(){},
aB:function aB(a){this.a=a},
er:function er(){},
es:function es(){},
b5:function b5(){},
cG:function cG(){},
a5:function a5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bc:function bc(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eP:function eP(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hE:function hE(a){this.a=a},
hB:function hB(a){this.a=a},
bI:function bI(a){this.a=a},
ef:function ef(a){this.a=a},
fF:function fF(){},
cR:function cR(){},
el:function el(a){this.a=a},
dd:function dd(a){this.a=a},
eH:function eH(a,b){this.a=a
this.b=b},
eJ:function eJ(){},
y:function y(){},
j:function j(){},
eR:function eR(){},
a8:function a8(){},
cx:function cx(){},
aK:function aK(){},
a3:function a3(){},
P:function P(){},
o:function o(){},
an:function an(a){this.a=a},
ar:function(a){var u,t,s,r,q
if(a==null)return
u=P.jA(P.o,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.p)(t),++r){q=t[r]
u.m(0,q,a[q])}return u},
lX:function(a){var u={}
a.B(0,new P.iz(u))
return u},
iz:function iz(a){this.a=a},
eD:function eD(a,b){this.a=a
this.b=b},
eE:function eE(){},
eF:function eF(){},
ic:function ic(){},
ad:function ad(){},
b9:function b9(){},
eX:function eX(){},
ba:function ba(){},
fD:function fD(){},
fK:function fK(){},
bH:function bH(){},
hb:function hb(){},
i:function i(){},
be:function be(){},
hq:function hq(){},
dj:function dj(){},
dk:function dk(){},
dv:function dv(){},
dw:function dw(){},
dH:function dH(){},
dI:function dI(){},
dO:function dO(){},
dP:function dP(){},
e6:function e6(){},
e7:function e7(){},
e8:function e8(a){this.a=a},
e9:function e9(){},
b0:function b0(){},
fE:function fE(){},
d6:function d6(){},
h6:function h6(){},
dD:function dD(){},
dE:function dE(){}},W={
jp:function(){var u=document.createElement("a")
return u},
jt:function(){var u=document.createElement("canvas")
return u},
kM:function(a,b,c){var u=document.body,t=(u&&C.m).X(u,a,b,c)
t.toString
u=new H.bR(new W.Q(t),new W.eu(),[W.C])
return u.gal(u)},
iU:function(a){return"wheel"},
bu:function(a){var u,t,s,r="element tag unavailable"
try{u=J.jd(a)
t=u.gcC(a)
if(typeof t==="string")r=u.gcC(a)}catch(s){H.as(s)}return r},
i9:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
k2:function(a,b,c,d){var u=W.i9(W.i9(W.i9(W.i9(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
M:function(a,b,c,d){var u=W.k7(new W.i7(c),W.h)
if(u!=null&&!0)J.kz(a,b,u,!1)
return new W.i6(a,b,u,!1)},
k1:function(a){var u=W.jp(),t=window.location
u=new W.bT(new W.ih(u,t))
u.d0(a)
return u},
ll:function(a,b,c,d){return!0},
lm:function(a,b,c,d){var u,t=d.a,s=t.a
s.href=c
u=s.hostname
t=t.b
if(!(u==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(u==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
k3:function(){var u=P.o,t=P.jB(C.j,u),s=H.b(["TEMPLATE"],[u])
t=new W.ip(t,P.cv(u),P.cv(u),P.cv(u),null)
t.d4(null,new H.f7(C.j,new W.iq(),[H.bo(C.j,0),u]),s,null)
return t},
k7:function(a,b){var u=$.a2
if(u===C.e)return a
return u.c2(a,b)},
k:function k(){},
e2:function e2(){},
e3:function e3(){},
e4:function e4(){},
c9:function c9(){},
b1:function b1(){},
b2:function b2(){},
ax:function ax(){},
eh:function eh(){},
z:function z(){},
bt:function bt(){},
ei:function ei(){},
X:function X(){},
a7:function a7(){},
ej:function ej(){},
ek:function ek(){},
en:function en(){},
a0:function a0(){},
eo:function eo(){},
ch:function ch(){},
ci:function ci(){},
ep:function ep(){},
eq:function eq(){},
i3:function i3(a,b){this.a=a
this.b=b},
J:function J(){},
eu:function eu(){},
h:function h(){},
d:function d(){},
aD:function aD(){},
eB:function eB(){},
eC:function eC(){},
eG:function eG(){},
aE:function aE(){},
eM:function eM(){},
bv:function bv(){},
b8:function b8(){},
f1:function f1(){},
fl:function fl(){},
fm:function fm(){},
fn:function fn(a){this.a=a},
fo:function fo(){},
fp:function fp(a){this.a=a},
aJ:function aJ(){},
fq:function fq(){},
aa:function aa(){},
Q:function Q(a){this.a=a},
C:function C(){},
cE:function cE(){},
aL:function aL(){},
fI:function fI(){},
fQ:function fQ(){},
fR:function fR(a){this.a=a},
fT:function fT(){},
aM:function aM(){},
h3:function h3(){},
aN:function aN(){},
h4:function h4(){},
aO:function aO(){},
h8:function h8(){},
h9:function h9(a){this.a=a},
ao:function ao(){},
cU:function cU(){},
hc:function hc(){},
hd:function hd(){},
bJ:function bJ(){},
aP:function aP(){},
ap:function ap(){},
hg:function hg(){},
hh:function hh(){},
hk:function hk(){},
aQ:function aQ(){},
bd:function bd(){},
ho:function ho(){},
hp:function hp(){},
aR:function aR(){},
hF:function hF(){},
hW:function hW(){},
aT:function aT(){},
bS:function bS(){},
i4:function i4(){},
d8:function d8(){},
i8:function i8(){},
ds:function ds(){},
il:function il(){},
im:function im(){},
i2:function i2(){},
i5:function i5(a){this.a=a},
i6:function i6(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
i7:function i7(a){this.a=a},
bT:function bT(a){this.a=a},
A:function A(){},
cF:function cF(a){this.a=a},
fA:function fA(a){this.a=a},
fz:function fz(a,b,c){this.a=a
this.b=b
this.c=c},
dA:function dA(){},
ij:function ij(){},
ik:function ik(){},
ip:function ip(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
iq:function iq(){},
io:function io(){},
cl:function cl(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
am:function am(){},
ih:function ih(a,b){this.a=a
this.b=b},
dQ:function dQ(a){this.a=a},
iu:function iu(a){this.a=a},
d7:function d7(){},
d9:function d9(){},
da:function da(){},
db:function db(){},
dc:function dc(){},
de:function de(){},
df:function df(){},
dh:function dh(){},
di:function di(){},
dn:function dn(){},
dp:function dp(){},
dq:function dq(){},
dr:function dr(){},
dt:function dt(){},
du:function du(){},
dx:function dx(){},
dy:function dy(){},
dz:function dz(){},
bY:function bY(){},
bZ:function bZ(){},
dB:function dB(){},
dC:function dC(){},
dG:function dG(){},
dJ:function dJ(){},
dK:function dK(){},
c_:function c_(){},
c0:function c0(){},
dM:function dM(){},
dN:function dN(){},
dR:function dR(){},
dS:function dS(){},
dT:function dT(){},
dU:function dU(){},
dV:function dV(){},
dW:function dW(){},
dX:function dX(){},
dY:function dY(){},
dZ:function dZ(){},
e_:function e_(){}},T={
D:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.f(P.q("The given low and high character strings for a Range must have one and only one characters."))
u=C.b.ao(a,0)
t=C.b.ao(b,0)
s=new T.fL()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
m:function(a){var u=new T.fU()
u.cY(a)
return u},
ah:function ah(){},
cm:function cm(){},
aI:function aI(){},
S:function S(){this.a=null},
fL:function fL(){this.b=this.a=null},
fU:function fU(){this.a=null},
hi:function hi(){}},R={
hm:function(){var u=new R.hl(),t=P.o
u.a=new H.I([t,R.cS])
u.b=new H.I([t,R.cZ])
return u},
cS:function cS(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cY:function cY(a,b,c){this.a=a
this.b=b
this.c=c},
cZ:function cZ(a){this.b=a
this.c=null},
hl:function hl(){this.c=this.b=this.a=null},
d_:function d_(a){this.b=a
this.a=this.c=null}},O={
iT:function(a){var u=new O.b3([a])
u.bB(a)
return u},
b3:function b3(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bA:function bA(){this.b=this.a=null},
cy:function cy(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ff:function ff(a,b){this.a=a
this.b=b},
fg:function fg(){},
fh:function fh(a,b){this.a=a
this.b=b},
fi:function fi(){},
fj:function fj(a,b){this.a=a
this.b=b},
fk:function fk(){},
f9:function f9(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cz:function cz(){},
fa:function fa(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
a9:function a9(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fc:function fc(){var _=this
_.e=_.d=_.c=_.b=null},
fd:function fd(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fe:function fe(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cV:function cV(){}},E={
l7:function(a,b){var u=new E.fM(a)
u.cX(a,b)
return u},
ld:function(a,b,c,d,e){var u,t,s=J.N(a)
if(!!s.$ib2)return E.jR(a,!0,!0,!0,!1)
u=W.jt()
t=u.style
t.width="100%"
t.height="100%"
s.gc3(a).p(0,u)
return E.jR(u,!0,!0,!0,!1)},
jR:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.cW(),p=C.D.cK(a,"webgl2",P.kT(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.t(P.q("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.l7(p,a)
p.getParameter(3379)
p.getParameter(34076)
u=new X.d3(a)
t=new X.eW()
t.d=P.cv(P.y)
u.b=t
t=new X.fr(u)
t.f=0
t.r=V.cJ()
t.x=V.cJ()
t.ch=t.Q=1
u.c=t
t=new X.f2(u)
t.r=0
t.x=V.cJ()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hn(u)
t.f=V.cJ()
t.r=V.cJ()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.b([],[[P.cT,P.P]])
u.z=t
s=document
t.push(W.M(s,"contextmenu",u.gdI(),!1))
u.z.push(W.M(a,"focus",u.gdO(),!1))
u.z.push(W.M(a,"blur",u.gdC(),!1))
u.z.push(W.M(s,"keyup",u.gdS(),!1))
u.z.push(W.M(s,"keydown",u.gdQ(),!1))
u.z.push(W.M(a,"mousedown",u.gdW(),!1))
u.z.push(W.M(a,"mouseup",u.ge_(),!1))
u.z.push(W.M(a,r,u.gdY(),!1))
t=u.z
W.iU(a)
W.iU(a)
t.push(W.M(a,W.iU(a),u.ge1(),!1))
u.z.push(W.M(s,r,u.gdK(),!1))
u.z.push(W.M(s,"mouseup",u.gdM(),!1))
u.z.push(W.M(s,"pointerlockchange",u.ge3(),!1))
u.z.push(W.M(a,"touchstart",u.gee(),!1))
u.z.push(W.M(a,"touchend",u.gea(),!1))
u.z.push(W.M(a,"touchmove",u.gec(),!1))
q.Q=!0
q.ch=!1
q.cx=new P.aA(Date.now(),!1)
q.cy=0
q.bS()
return q},
ea:function ea(){},
aC:function aC(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fM:function fM(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fN:function fN(a){this.a=a},
fO:function fO(a){this.a=a},
fP:function fP(a){this.a=a},
cW:function cW(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.e=_.d=_.c=_.b=null},
hj:function hj(a){this.a=a}},Z={
lg:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.c1(c)),35044)
a.bindBuffer(b,null)
return new Z.d4(b,u)},
a_:function(a){return new Z.aS(a)},
d4:function d4(a,b){this.a=a
this.b=b},
ca:function ca(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
hX:function hX(a){this.a=a},
cb:function cb(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
cn:function cn(a,b,c){this.a=a
this.b=b
this.c=c},
aS:function aS(a){this.a=a}},D={
a1:function(){var u=new D.b6()
u.d=0
return u},
ed:function ed(){},
b6:function b6(){var _=this
_.d=_.c=_.b=_.a=null},
ex:function ex(a){this.a=a},
ey:function ey(a){this.a=a},
R:function R(){this.b=null},
bw:function bw(){this.b=null},
bx:function bx(){this.b=null},
F:function F(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
b4:function b4(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
U:function U(){},
cs:function cs(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
fJ:function fJ(){},
h5:function h5(){}},X={cc:function cc(a,b){this.a=a
this.b=b},cr:function cr(a,b){this.a=a
this.b=b},eW:function eW(){this.d=this.b=this.a=null},f2:function f2(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bB:function bB(a,b,c){this.a=a
this.b=b
this.c=c},fr:function fr(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},hn:function hn(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},d3:function d3(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
kO:function(a){var u=new X.eI(),t=V.ag(1)
u.a=new V.ay(0,0,0,t)
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.jO
if(t==null){t=V.l6(0,0,1,1)
$.jO=t}u.r=t
return u},
iS:function iS(){},
eI:function eI(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cH:function cH(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
he:function he(){},
kd:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="testCanvas",f=null,e=V.l9("Test 003"),d=W.jt()
d.className="pageLargeCanvas"
d.id=g
e.a.appendChild(d)
u=[P.o]
e.c0(H.b(["A test of the Material Light Shader with a solid color directional lighting."],u))
e.c0(H.b(["\xab[Back to Tests|../]"],u))
t=new E.aC()
t.a=""
t.b=!0
u=E.aC
s=O.iT(u)
t.y=s
s.aX(t.gf6(),t.gf9())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sbw(0,f)
t.saG(f)
t.sbw(0,F.mm())
s=new U.cN()
s.r=s.f=s.e=s.d=s.c=s.b=s.a=0
s.scI(0)
s.sct(0,0)
s.scB(0)
r=s.d
if(!(Math.abs(r-0.1)<$.w().a)){s.d=0.1
r=new D.F("deltaYaw",r,0.1)
r.b=!0
s.aq(r)}r=s.e
if(!(Math.abs(r-0.21)<$.w().a)){s.e=0.21
r=new D.F("deltaPitch",r,0.21)
r.b=!0
s.aq(r)}r=s.f
if(!(Math.abs(r-0.32)<$.w().a)){s.f=0.32
r=new D.F("deltaRoll",r,0.32)
r.b=!0
s.aq(r)}t.saG(s)
q=new O.cy()
s=O.iT(V.ak)
q.e=s
s.aX(q.gdw(),q.gdA())
s=new O.a9(q,"emission")
s.c=new A.O(!1,!1,!1)
s.f=new V.K(0,0,0)
q.f=s
s=new O.a9(q,"ambient")
s.c=new A.O(!1,!1,!1)
s.f=new V.K(0,0,0)
q.r=s
s=new O.a9(q,"diffuse")
s.c=new A.O(!1,!1,!1)
s.f=new V.K(0,0,0)
q.x=s
s=new O.a9(q,"invDiffuse")
s.c=new A.O(!1,!1,!1)
s.f=new V.K(0,0,0)
q.y=s
s=new O.fe(q,"specular")
s.c=new A.O(!1,!1,!1)
s.f=new V.K(0,0,0)
s.ch=100
q.z=s
s=new O.fa(q,"bump")
s.c=new A.O(!1,!1,!1)
q.Q=s
q.ch=null
s=new O.a9(q,"reflect")
s.c=new A.O(!1,!1,!1)
s.f=new V.K(0,0,0)
q.cx=s
s=new O.fd(q,"refract")
s.c=new A.O(!1,!1,!1)
s.f=new V.K(0,0,0)
s.ch=1
q.cy=s
s=new O.f9(q,"alpha")
s.c=new A.O(!1,!1,!1)
s.f=1
q.db=s
s=new D.cs()
s.bB(D.U)
s.e=H.b([],[D.b4])
s.f=H.b([],[D.fJ])
s.r=H.b([],[D.h5])
s.y=s.x=null
s.bv(s.gdu(),s.ge6(),s.ge8())
q.dx=s
r=new O.fc()
r.b=new V.ay(0,0,0,0)
r.c=1
r.d=10
r.e=!1
q.dy=r
r=s.x
s=r==null?s.x=D.a1():r
s.p(0,q.gem())
s=q.dx
r=s.y
s=r==null?s.y=D.a1():r
s.p(0,q.gd5())
q.fr=null
s=q.dx
p=V.j6()
r=U.jv(V.jE(V.jJ(),p,new V.x(1,1,-3)))
o=new V.K(1,1,1)
n=new D.b4()
n.c=new V.K(1,1,1)
n.a=V.k_()
n.d=V.j6()
n.e=V.lf()
m=n.b
n.b=r
r.gv().p(0,n.gd1())
r=new D.F("mover",m,n.b)
r.b=!0
n.a7(r)
if(!n.c.n(0,o)){m=n.c
n.c=o
r=new D.F("color",m,o)
r.b=!0
n.a7(r)}s.p(0,n)
q.r.saD(0,new V.K(V.ag(0),V.ag(0),V.ag(1)))
q.x.saD(0,new V.K(V.ag(0),V.ag(1),V.ag(0)))
q.z.saD(0,new V.K(V.ag(1),V.ag(0),V.ag(0)))
s=q.z
s.bU(new A.O(!0,!1,!1))
s.bV(10)
l=new M.cj()
l.a=!0
u=O.iT(u)
l.e=u
u.aX(l.gdE(),l.gdG())
l.y=l.x=l.r=l.f=null
k=X.kO(f)
j=new X.cH()
j.c=1.0471975511965976
j.d=0.1
j.e=2000
j.saG(f)
u=j.c
if(!(Math.abs(u-1.0471975511965976)<$.w().a)){j.c=1.0471975511965976
u=new D.F("fov",u,1.0471975511965976)
u.b=!0
j.an(u)}u=j.d
if(!(Math.abs(u-0.1)<$.w().a)){j.d=0.1
u=new D.F("near",u,0.1)
u.b=!0
j.an(u)}u=j.e
if(!(Math.abs(u-2000)<$.w().a)){j.e=2000
u=new D.F("far",u,2000)
u.b=!0
j.an(u)}u=l.b
if(u!==j){if(u!=null)u.gv().M(0,l.ga2())
m=l.b
l.b=j
j.gv().p(0,l.ga2())
u=new D.F("camera",m,l.b)
u.b=!0
l.a8(u)}u=l.c
if(u!==k){if(u!=null)u.gv().M(0,l.ga2())
m=l.c
l.c=k
k.gv().p(0,l.ga2())
u=new D.F("target",m,l.c)
u.b=!0
l.a8(u)}l.scD(f)
l.scD(q)
l.e.p(0,t)
l.b.saG(U.jv(V.al(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
i=document.getElementById(g)
if(i==null)H.t(P.q("Failed to find an element with the identifier, testCanvas."))
h=E.ld(i,!0,!0,!0,!1)
u=h.d
if(u!==l){if(u!=null)u.gv().M(0,h.gbC())
h.d=l
l.gv().p(0,h.gbC())
h.bD()}u=h.z
if(u==null)u=h.z=D.a1()
s=u.b
u=s==null?u.b=H.b([],[{func:1,ret:-1,args:[D.R]}]):s
u.push(new X.iI(e,q))
V.mh(h)},
iI:function iI(a,b){this.a=a
this.b=b}},V={
ag:function(a){var u
if(a<0)u=0
else u=a>1?1:a
return u},
jk:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.cL(a-b,u)
return(a<0?a+u:a)+b},
v:function(a,b,c){if(a==null)return C.b.ah("null",c)
return C.b.ah(C.c.cE(Math.abs(a-0)<$.w().a?0:a,b),c+b+1)},
bn:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.o])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.p)(a),++s){r=V.v(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.c(o,q)
u=C.b.ah(o[q],t)
p=o.length
if(q>=p)return H.c(o,q)
o[q]=u}return o},
j1:function(){var u=$.jF
return u==null?$.jF=V.al(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
al:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ak(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
jE:function(a,b,c){var u=c.u(0,Math.sqrt(c.G(c))),t=b.ac(u),s=t.u(0,Math.sqrt(t.G(t))),r=u.ac(s),q=new V.x(a.a,a.b,a.c),p=s.az(0).G(q),o=r.az(0).G(q),n=u.az(0).G(q)
return V.al(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
cJ:function(){var u=$.jI
return u==null?$.jI=new V.ab(0,0):u},
jJ:function(){var u=$.bE
return u==null?$.bE=new V.V(0,0,0):u},
l6:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cM(a,b,c,d)},
bP:function(){var u=$.jZ
return u==null?$.jZ=new V.x(0,0,0):u},
lf:function(){var u=$.hI
return u==null?$.hI=new V.x(-1,0,0):u},
j6:function(){var u=$.hJ
return u==null?$.hJ=new V.x(0,1,0):u},
k_:function(){var u=$.hK
return u==null?$.hK=new V.x(0,0,1):u},
K:function K(a,b,c){this.a=a
this.b=b
this.c=c},
ay:function ay(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ew:function ew(a){this.a=a},
cA:function cA(a,b,c,d,e,f,g,h,i){var _=this
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
ab:function ab(a,b){this.a=a
this.b=b},
V:function V(a,b,c){this.a=a
this.b=b
this.c=c},
cM:function cM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aq:function aq(a,b){this.a=a
this.b=b},
x:function x(a,b,c){this.a=a
this.b=b
this.c=c},
mh:function(a){P.le(C.F,new V.iK(a))},
l9:function(a){var u=new V.fZ()
u.d_(a,!0)
return u},
cd:function cd(){},
iK:function iK(a){this.a=a},
em:function em(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eK:function eK(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eL:function eL(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fH:function fH(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fZ:function fZ(){this.b=this.a=null},
h0:function h0(a){this.a=a},
h_:function h_(a){this.a=a},
h1:function h1(a){this.a=a}},U={
jv:function(a){var u=new U.ce()
u.a=a
return u},
ce:function ce(){this.b=this.a=null},
fs:function fs(){},
cN:function cN(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cj:function cj(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
kV:function(a,b){var u=a.aF,t=new A.f8(b,u)
t.cZ(b,u)
t.cW(a,b)
return t},
kW:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="MaterialLight_"+a0.ga0(a0)+a1.ga0(a1)+a2.ga0(a2)+a3.ga0(a3)+a4.ga0(a4)+a5.ga0(a5)+a6.ga0(a6)+a7.ga0(a7)+a8.ga0(a8)+"_"
f+=a?"1":"0"
f+=b?"1":"0"
f+=c?"1":"0"
f=f+"0_"+e
u=a9.length
if(u>0){f+="_Dir"
for(t=0;t<a9.length;a9.length===u||(0,H.p)(a9),++t)f+="_"+H.e(a9[t].a)}u=b0.length
if(u>0){f+="_Point"
for(t=0;t<b0.length;b0.length===u||(0,H.p)(b0),++t)f+="_"+H.e(b0[t].a)}u=b1.length
if(u>0){f+="_Spot"
for(t=0;t<b1.length;b1.length===u||(0,H.p)(b1),++t)f+="_"+H.e(b1[t].a)}for(u=a9.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=a9[t].b
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
g=$.aw()
if(k){u=$.av()
g=new Z.aS(g.a|u.a)}if(j){u=$.au()
g=new Z.aS(g.a|u.a)}if(i){u=$.at()
g=new Z.aS(g.a|u.a)}return new A.fb(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,s,p,l,p,r,h,!0,!1,!1,o,r,m,k,j,!1,!1,i,!1,!1,c,!1,e,f.charCodeAt(0)==0?f:f,g)},
iw:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
ix:function(a,b,c){var u
A.iw(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.iM(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
lw:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.iw(b,t,"emission")
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
A.ix(b,t,"ambient")
b.a+="\n"},
lu:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.ix(b,t,"diffuse")
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
lx:function(a,b){var u,t=a.d
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.ix(b,t,"invDiffuse")
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
lD:function(a,b){var u,t=a.e
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.ix(b,t,"specular")
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
lz:function(a,b){var u,t,s
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
lB:function(a,b){var u,t=a.r,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.iw(b,t,"reflect")
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
lC:function(a,b){var u,t=a.x,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.iw(b,t,"refract")
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
lv:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.e(u)
s=A.iM(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.a5()
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
r=[P.o]
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
lA:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.e(u)
s=A.iM(t)
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
if(typeof u!=="number")return u.a5()
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
c.a=r+"\n"}r=[P.o]
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
lE:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.e(u)
s=A.iM(t)
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
if(typeof u!=="number")return u.a5()
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
c.a=u+"\n"}u=[P.o]
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
ly:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.b([],[P.o])
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
lF:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.an("")
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
A.lw(a,j)
A.lt(a,j)
A.lu(a,j)
A.lx(a,j)
A.lD(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.lB(a,j)
A.lC(a,j)}A.lz(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.p)(q),++o)A.lv(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.p)(q),++o)A.lA(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.p)(q),++o)A.lE(a,q[o],j)
A.ly(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.b([],[P.o])
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.p)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.a6(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.p)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.a6(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.p)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.a6(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)u=!1
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
lG:function(a,b){var u,t,s
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
lI:function(a,b){var u
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
lH:function(a,b){var u
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
lK:function(a,b){var u,t
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
lL:function(a,b){var u,t
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
lJ:function(a,b){var u
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
lM:function(a,b){var u
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
iM:function(a){if(0>=a.length)return H.c(a,0)
return a[0].toUpperCase()+C.b.a6(a,1)},
j5:function(a,b,c,d,e){var u=new A.hu(a,c,e)
u.f=d
P.kU(d,0,P.y)
return u},
c8:function c8(a,b,c){this.a=a
this.b=b
this.c=c},
e5:function e5(a){this.a=a},
O:function O(a,b,c){this.a=a
this.b=b
this.c=c},
f8:function f8(a,b){var _=this
_.fG=_.fF=_.c9=_.c8=_.aF=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.fT=_.fS=_.fR=_.bl=_.bk=_.bj=_.bi=_.bh=_.bg=_.fQ=_.fP=_.cg=_.fO=_.fN=_.cf=_.ce=_.fM=_.fL=_.cd=_.cc=_.fK=_.fJ=_.cb=_.fI=_.fH=_.ca=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cg:function cg(a,b){this.a=a
this.b=b},
cK:function cK(a,b){this.a=a
this.b=b},
cQ:function cQ(a,b){this.a=a
this.b=b},
fb:function fb(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.aF=b3
_.c8=b4},
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
cO:function cO(){},
d0:function d0(){},
hz:function hz(a){this.a=a},
d1:function d1(a,b,c){this.a=a
this.c=b
this.d=c},
hw:function hw(a,b,c){this.a=a
this.c=b
this.d=c},
hx:function hx(a,b,c){this.a=a
this.c=b
this.d=c},
hy:function hy(a,b,c){this.a=a
this.c=b
this.d=c},
hu:function hu(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
L:function L(a,b,c){this.a=a
this.c=b
this.d=c},
hv:function hv(a,b,c){this.a=a
this.c=b
this.d=c},
E:function E(a,b,c){this.a=a
this.c=b
this.d=c},
bK:function bK(a,b,c){this.a=a
this.c=b
this.d=c},
hA:function hA(a,b,c){this.a=a
this.c=b
this.d=c},
bM:function bM(a,b,c){this.a=a
this.c=b
this.d=c},
Y:function Y(a,b,c){this.a=a
this.c=b
this.d=c},
bf:function bf(a,b,c){this.a=a
this.c=b
this.d=c},
bg:function bg(a,b,c){this.a=a
this.c=b
this.d=c}},F={
mm:function(){return F.lY(15,30,0.5,1,new F.iN())},
lY:function(a,b,c,d,e){var u=F.mk(a,b,new F.iA(e,d,b,c))
if(u==null)return
u.at()
u.f5(new F.hQ(),new F.fB())
return u},
mk:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
if(a<1)return
if(b<1)return
u=new F.fV()
t=new F.hL(u)
t.b=!1
s=[F.bQ]
t.c=H.b([],s)
u.a=t
t=new F.fY()
t.b=H.b([],[F.cI])
u.b=t
t=new F.fX(u)
t.b=H.b([],[F.ct])
u.c=t
t=new F.fW(u)
t.b=H.b([],[F.b7])
u.d=t
u.e=null
r=H.b([],s)
for(q=0;q<=b;++q){p=q/b
t=u.a
if(p<0)s=0
else s=p>1?1:p
o=t.c_(new V.ay(s,0,0,1),new V.ab(p,1))
c.$3(o,p,0)
r.push(o.c6(null))}for(q=1;q<=a;++q){n=q/a
for(t=n>1,s=n<0,m=1-n,l=0;l<=b;++l){p=l/b
k=u.a
if(p<0)j=0
else j=p>1?1:p
if(s)i=0
else i=t?1:n
if(s)h=0
else h=t?1:n
o=k.c_(new V.ay(j,i,h,1),new V.ab(p,m))
c.$3(o,p,n)
r.push(o.c6(null))}}u.d.eA(a+1,b+1,r)
return u},
ez:function(a,b,c){var u=new F.b7(),t=a.a
if(t==null)H.t(P.q("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.t(P.q("May not create a face with vertices attached to different shapes."))
u.er(a)
u.es(b)
u.eu(c)
u.a.a.d.b.push(u)
u.a.a.V()
return u},
k0:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.bQ(),r=new F.hT()
r.b=H.b([],[F.cI])
s.b=r
r=new F.hP()
u=[F.ct]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.hM()
u=[F.b7]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.ku()
s.e=0
r=$.aw()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.av().a)!==0?e:t
s.x=(u&$.au().a)!==0?b:t
s.y=(u&$.aX().a)!==0?f:t
s.z=(u&$.aY().a)!==0?g:t
s.Q=(u&$.kv().a)!==0?c:t
s.ch=(u&$.bp().a)!==0?i:0
s.cx=(u&$.at().a)!==0?a:t
return s},
iN:function iN(){},
iA:function iA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b7:function b7(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
eA:function eA(){},
h2:function h2(){},
ct:function ct(){},
eY:function eY(){},
ht:function ht(){},
cI:function cI(){},
fV:function fV(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fW:function fW(a){this.a=a
this.b=null},
fX:function fX(a){this.a=a
this.b=null},
fY:function fY(){this.b=null},
bQ:function bQ(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hV:function hV(a){this.a=a},
hU:function hU(a){this.a=a},
hL:function hL(a){this.a=a
this.c=this.b=null},
hM:function hM(){this.d=this.c=this.b=null},
hN:function hN(a,b){this.a=a
this.b=b},
hO:function hO(a,b){this.a=a
this.b=b},
hP:function hP(){this.c=this.b=null},
hR:function hR(){},
hQ:function hQ(){},
hS:function hS(){},
fB:function fB(){},
hT:function hT(){this.b=null}}
var w=[C,H,J,P,W,T,R,O,E,Z,D,X,V,U,M,A,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.j_.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gE:function(a){return H.bF(a)},
h:function(a){return"Instance of '"+H.e(H.bG(a))+"'"}}
J.eS.prototype={
h:function(a){return String(a)},
gE:function(a){return a?519018:218159},
$iaf:1}
J.cp.prototype={
n:function(a,b){return null==b},
h:function(a){return"null"},
gE:function(a){return 0}}
J.cq.prototype={
gE:function(a){return 0},
h:function(a){return String(a)}}
J.fG.prototype={}
J.bh.prototype={}
J.aH.prototype={
h:function(a){var u=a[$.kj()]
if(u==null)return this.cT(a)
return"JavaScript function for "+H.e(J.a4(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.aF.prototype={
cz:function(a,b){if(!!a.fixed$length)H.t(P.Z("removeAt"))
if(b<0||b>=a.length)throw H.f(P.cL(b,null))
return a.splice(b,1)[0]},
M:function(a,b){var u
if(!!a.fixed$length)H.t(P.Z("remove"))
for(u=0;u<a.length;++u)if(J.H(a[u],b)){a.splice(u,1)
return!0}return!1},
B:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.f(P.az(a))}},
k:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.c(r,u)
r[u]=t}return r.join(b)},
f2:function(a){return this.k(a,"")},
eZ:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.f(P.az(a))}throw H.f(H.eQ())},
t:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
cP:function(a,b,c){var u=a.length
if(b>u)throw H.f(P.ac(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.f(P.ac(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.bo(a,0)])
return H.b(a.slice(b,c),[H.bo(a,0)])},
geY:function(a){if(a.length>0)return a[0]
throw H.f(H.eQ())},
gaS:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.f(H.eQ())},
c1:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.f(P.az(a))}return!1},
aY:function(a,b){if(!!a.immutable$list)H.t(P.Z("sort"))
H.cP(a,0,a.length-1,b)},
K:function(a,b){var u
for(u=0;u<a.length;++u)if(J.H(a[u],b))return!0
return!1},
h:function(a){return P.iX(a,"[","]")},
gL:function(a){return new J.W(a,a.length)},
gE:function(a){return H.bF(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.t(P.Z("set length"))
if(b<0)throw H.f(P.ac(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){if(b>=a.length||b<0)throw H.f(H.bm(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.t(P.Z("indexed set"))
if(b>=a.length||b<0)throw H.f(H.bm(a,b))
a[b]=c},
$ij:1}
J.iZ.prototype={}
J.W.prototype={
gA:function(a){return this.d},
q:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.f(H.p(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.by.prototype={
eK:function(a,b){var u
if(typeof b!=="number")throw H.f(H.bk(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gaR(b)
if(this.gaR(a)===u)return 0
if(this.gaR(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaR:function(a){return a===0?1/a<0:a<0},
ci:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.f(P.Z(""+a+".floor()"))},
a_:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.Z(""+a+".round()"))},
cE:function(a,b){var u
if(b>20)throw H.f(P.ac(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gaR(a))return"-"+u
return u},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gE:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
cL:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
cV:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.bW(a,b)},
T:function(a,b){return(a|0)===a?a/b|0:this.bW(a,b)},
bW:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.f(P.Z("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
aM:function(a,b){var u
if(a>0)u=this.ey(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
ey:function(a,b){return b>31?0:a>>>b},
$iG:1,
$ia3:1}
J.co.prototype={$iy:1}
J.eT.prototype={}
J.aG.prototype={
bf:function(a,b){if(b<0)throw H.f(H.bm(a,b))
if(b>=a.length)H.t(H.bm(a,b))
return a.charCodeAt(b)},
ao:function(a,b){if(b>=a.length)throw H.f(H.bm(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(typeof b!=="string")throw H.f(P.jq(b,null,null))
return a+b},
aZ:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
aJ:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.f(P.cL(b,null))
if(b>c)throw H.f(P.cL(b,null))
if(c>a.length)throw H.f(P.cL(c,null))
return a.substring(b,c)},
a6:function(a,b){return this.aJ(a,b,null)},
fz:function(a){return a.toLowerCase()},
J:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.B)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ah:function(a,b){var u=b-a.length
if(u<=0)return a
return this.J(" ",u)+a},
h:function(a){return a},
gE:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$io:1}
H.l.prototype={
gl:function(a){return this.a.length},
i:function(a,b){return C.b.bf(this.a,b)},
$an:function(){return[P.y]},
$aj:function(){return[P.y]}}
H.et.prototype={}
H.cw.prototype={
gL:function(a){return new H.bz(this,this.gl(this))},
aW:function(a,b){return this.cS(0,b)}}
H.bz.prototype={
gA:function(a){return this.d},
q:function(){var u,t=this,s=t.a,r=J.jb(s),q=r.gl(s)
if(t.b!==q)throw H.f(P.az(s))
u=t.c
if(u>=q){t.d=null
return!1}t.d=r.t(s,u);++t.c
return!0}}
H.f5.prototype={
gL:function(a){return new H.f6(J.aZ(this.a),this.b)},
gl:function(a){return J.b_(this.a)},
t:function(a,b){return this.b.$1(J.iQ(this.a,b))},
$aj:function(a,b){return[b]}}
H.f6.prototype={
q:function(){var u=this,t=u.b
if(t.q()){u.a=u.c.$1(t.gA(t))
return!0}u.a=null
return!1},
gA:function(a){return this.a}}
H.f7.prototype={
gl:function(a){return J.b_(this.a)},
t:function(a,b){return this.b.$1(J.iQ(this.a,b))},
$acw:function(a,b){return[b]},
$aj:function(a,b){return[b]}}
H.bR.prototype={
gL:function(a){return new H.hY(J.aZ(this.a),this.b)}}
H.hY.prototype={
q:function(){var u,t
for(u=this.a,t=this.b;u.q();)if(t.$1(u.gA(u)))return!0
return!1},
gA:function(a){var u=this.a
return u.gA(u)}}
H.ck.prototype={}
H.hD.prototype={}
H.d2.prototype={}
H.hr.prototype={
Y:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.fC.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.eV.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.hC.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.iO.prototype={
$1:function(a){if(!!J.N(a).$ib5)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:6}
H.dF.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bs.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
gfA:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hf.prototype={}
H.h7.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.e0(u)+"'"}}
H.bq.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bq))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gE:function(a){var u,t=this.c
if(t==null)u=H.bF(this.a)
else u=typeof t!=="object"?J.c7(t):H.bF(t)
return(u^H.bF(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.bG(u))+"'")}}
H.ec.prototype={
h:function(a){return this.a}}
H.fS.prototype={
h:function(a){return"RuntimeError: "+H.e(this.a)}}
H.I.prototype={
gl:function(a){return this.a},
gU:function(a){return new H.cu(this,[H.bo(this,0)])},
c5:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.bL(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.bL(t,b)}else return s.f0(b)},
f0:function(a){var u=this.d
if(u==null)return!1
return this.bm(this.b4(u,J.c7(a)&0x3ffffff),a)>=0},
i:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.aL(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.aL(r,b)
s=t==null?null:t.b
return s}else return q.f1(b)},
f1:function(a){var u,t,s=this.d
if(s==null)return
u=this.b4(s,J.c7(a)&0x3ffffff)
t=this.bm(u,a)
if(t<0)return
return u[t].b},
m:function(a,b,c){var u,t,s,r,q,p,o=this
if(typeof b==="string"){u=o.b
o.bG(u==null?o.b=o.b7():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.bG(t==null?o.c=o.b7():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.b7()
r=J.c7(b)&0x3ffffff
q=o.b4(s,r)
if(q==null)o.ba(s,r,[o.b8(b,c)])
else{p=o.bm(q,b)
if(p>=0)q[p].b=c
else q.push(o.b8(b,c))}}},
B:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.f(P.az(u))
t=t.c}},
bG:function(a,b,c){var u=this.aL(a,b)
if(u==null)this.ba(a,b,this.b8(b,c))
else u.b=c},
ds:function(){this.r=this.r+1&67108863},
b8:function(a,b){var u,t=this,s=new H.eZ(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.ds()
return s},
bm:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.H(a[t].a,b))return t
return-1},
h:function(a){return P.jD(this)},
aL:function(a,b){return a[b]},
b4:function(a,b){return a[b]},
ba:function(a,b,c){a[b]=c},
dn:function(a,b){delete a[b]},
bL:function(a,b){return this.aL(a,b)!=null},
b7:function(){var u="<non-identifier-key>",t=Object.create(null)
this.ba(t,u,t)
this.dn(t,u)
return t}}
H.eZ.prototype={}
H.cu.prototype={
gl:function(a){return this.a.a},
gL:function(a){var u=this.a,t=new H.f_(u,u.r)
t.c=u.e
return t}}
H.f_.prototype={
gA:function(a){return this.d},
q:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.az(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.iE.prototype={
$1:function(a){return this.a(a)},
$S:6}
H.iF.prototype={
$2:function(a,b){return this.a(a,b)}}
H.iG.prototype={
$1:function(a){return this.a(a)}}
H.eU.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.bD.prototype={}
H.cB.prototype={
gl:function(a){return a.length},
$iu:1,
$au:function(){}}
H.bC.prototype={
i:function(a,b){H.aU(b,a,a.length)
return a[b]},
$an:function(){return[P.G]},
$ij:1,
$aj:function(){return[P.G]}}
H.cC.prototype={
$an:function(){return[P.y]},
$ij:1,
$aj:function(){return[P.y]}}
H.ft.prototype={
i:function(a,b){H.aU(b,a,a.length)
return a[b]}}
H.fu.prototype={
i:function(a,b){H.aU(b,a,a.length)
return a[b]}}
H.fv.prototype={
i:function(a,b){H.aU(b,a,a.length)
return a[b]}}
H.fw.prototype={
i:function(a,b){H.aU(b,a,a.length)
return a[b]}}
H.fx.prototype={
i:function(a,b){H.aU(b,a,a.length)
return a[b]}}
H.cD.prototype={
gl:function(a){return a.length},
i:function(a,b){H.aU(b,a,a.length)
return a[b]}}
H.fy.prototype={
gl:function(a){return a.length},
i:function(a,b){H.aU(b,a,a.length)
return a[b]}}
H.bU.prototype={}
H.bV.prototype={}
H.bW.prototype={}
H.bX.prototype={}
P.i_.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:14}
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
P.dL.prototype={
d7:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bl(new P.is(this,b),0),a)
else throw H.f(P.Z("`setTimeout()` not found."))},
d8:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bl(new P.ir(this,a,Date.now(),b),0),a)
else throw H.f(P.Z("Periodic timer."))},
$icX:1}
P.is.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.ir.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.cV(u,q)}s.c=r
t.d.$1(s)}}
P.d5.prototype={}
P.cT.prototype={}
P.ha.prototype={}
P.cX.prototype={}
P.iv.prototype={}
P.iy.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.cG():s
s=this.b
if(s==null)throw H.f(t)
u=H.f(t)
u.stack=s.h(0)
throw u}}
P.id.prototype={
fs:function(a){var u,t,s,r=null
try{if(C.e===$.a2){a.$0()
return}P.lO(r,r,this,a)}catch(s){u=H.as(s)
t=H.jf(s)
P.k6(r,r,this,u,t)}},
ft:function(a,b){var u,t,s,r=null
try{if(C.e===$.a2){a.$1(b)
return}P.lP(r,r,this,a,b)}catch(s){u=H.as(s)
t=H.jf(s)
P.k6(r,r,this,u,t)}},
fu:function(a,b){return this.ft(a,b,null)},
eH:function(a){return new P.ie(this,a)},
c2:function(a,b){return new P.ig(this,a,b)}}
P.ie.prototype={
$0:function(){return this.a.fs(this.b)}}
P.ig.prototype={
$1:function(a){return this.a.fu(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.ia.prototype={
gL:function(a){var u=new P.dl(this,this.r)
u.c=this.e
return u},
gl:function(a){return this.a},
K:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.di(b)
return t}},
di:function(a){var u=this.d
if(u==null)return!1
return this.b3(this.bO(u,a),a)>=0},
p:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.bH(u==null?s.b=P.j7():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.bH(t==null?s.c=P.j7():t,b)}else return s.da(0,b)},
da:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.j7()
u=s.bJ(b)
t=r[u]
if(t==null)r[u]=[s.b0(b)]
else{if(s.b3(t,b)>=0)return!1
t.push(s.b0(b))}return!0},
M:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.eh(this.c,b)
else return this.eg(0,b)},
eg:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.bO(r,b)
t=s.b3(u,b)
if(t<0)return!1
s.bX(u.splice(t,1)[0])
return!0},
bH:function(a,b){if(a[b]!=null)return!1
a[b]=this.b0(b)
return!0},
eh:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.bX(u)
delete a[b]
return!0},
bI:function(){this.r=1073741823&this.r+1},
b0:function(a){var u,t=this,s=new P.ib(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.bI()
return s},
bX:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.bI()},
bJ:function(a){return J.c7(a)&1073741823},
bO:function(a,b){return a[this.bJ(b)]},
b3:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.H(a[t].a,b))return t
return-1}}
P.ib.prototype={}
P.dl.prototype={
gA:function(a){return this.d},
q:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.az(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.f0.prototype={$ij:1}
P.n.prototype={
gL:function(a){return new H.bz(a,this.gl(a))},
t:function(a,b){return this.i(a,b)},
fw:function(a,b){var u,t,s=this,r=H.b([],[H.m3(s,a,"n",0)])
C.a.sl(r,s.gl(a))
for(u=0;u<s.gl(a);++u){t=s.i(a,u)
if(u>=r.length)return H.c(r,u)
r[u]=t}return r},
fv:function(a){return this.fw(a,!0)},
h:function(a){return P.iX(a,"[","]")}}
P.f3.prototype={}
P.f4.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:7}
P.aj.prototype={
B:function(a,b){var u,t
for(u=J.aZ(this.gU(a));u.q();){t=u.gA(u)
b.$2(t,this.i(a,t))}},
gl:function(a){return J.b_(this.gU(a))},
h:function(a){return P.jD(a)}}
P.ii.prototype={
a3:function(a,b){var u
for(u=J.aZ(b);u.q();)this.p(0,u.gA(u))},
h:function(a){return P.iX(this,"{","}")},
t:function(a,b){var u,t,s
P.jM(b,"index")
for(u=P.ln(this,this.r),t=0;u.q();){s=u.d
if(b===t)return s;++t}throw H.f(P.B(b,this,"index",null,t))},
$ij:1}
P.dm.prototype={}
P.ee.prototype={}
P.eg.prototype={}
P.ev.prototype={}
P.eO.prototype={
h:function(a){return this.a}}
P.eN.prototype={
dk:function(a,b,c){var u,t,s,r,q,p,o=null
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
if(r>b)q.a+=C.b.aJ(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.kC(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.hG.prototype={}
P.hH.prototype={
eL:function(a){var u,t,s=P.jN(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.it(u)
if(t.dr(a,0,s)!==s)t.bY(C.b.bf(a,s-1),0)
return new Uint8Array(u.subarray(0,H.lq(0,t.b,u.length)))}}
P.it.prototype={
bY:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
dr:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.bf(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.ao(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.bY(r,C.b.ao(a,p)))s=p}else if(r<=2047){q=n.b
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
P.af.prototype={}
P.aA.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.aA&&this.a===b.a&&!0},
gE:function(a){var u=this.a
return(u^C.d.aM(u,30))&1073741823},
h:function(a){var u=this,t=P.kK(H.l3(u)),s=P.cf(H.l1(u)),r=P.cf(H.kY(u)),q=P.cf(H.kZ(u)),p=P.cf(H.l0(u)),o=P.cf(H.l2(u)),n=P.kL(H.l_(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.G.prototype={}
P.aB.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.aB&&this.a===b.a},
gE:function(a){return C.d.gE(this.a)},
h:function(a){var u,t,s,r=new P.es(),q=this.a
if(q<0)return"-"+new P.aB(0-q).h(0)
u=r.$1(C.d.T(q,6e7)%60)
t=r.$1(C.d.T(q,1e6)%60)
s=new P.er().$1(q%1e6)
return""+C.d.T(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
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
P.b5.prototype={}
P.cG.prototype={
h:function(a){return"Throw of null."}}
P.a5.prototype={
gb2:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gb1:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gb2()+o+u
if(!q.a)return t
s=q.gb1()
r=P.iW(q.b)
return t+s+": "+r}}
P.bc.prototype={
gb2:function(){return"RangeError"},
gb1:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.eP.prototype={
gb2:function(){return"RangeError"},
gb1:function(){var u,t=this.b
if(typeof t!=="number")return t.ay()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gl:function(a){return this.f}}
P.hE.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.hB.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.bI.prototype={
h:function(a){return"Bad state: "+this.a}}
P.ef.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.iW(u)+"."}}
P.fF.prototype={
h:function(a){return"Out of Memory"},
$ib5:1}
P.cR.prototype={
h:function(a){return"Stack Overflow"},
$ib5:1}
P.el.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dd.prototype={
h:function(a){return"Exception: "+this.a}}
P.eH.prototype={
h:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.b.aJ(s,0,75)+"...":s
return t+"\n"+r}}
P.eJ.prototype={}
P.y.prototype={}
P.j.prototype={
aW:function(a,b){return new H.bR(this,b,[H.je(this,"j",0)])},
gl:function(a){var u,t=this.gL(this)
for(u=0;t.q();)++u
return u},
gal:function(a){var u,t=this.gL(this)
if(!t.q())throw H.f(H.eQ())
u=t.gA(t)
if(t.q())throw H.f(H.kQ())
return u},
t:function(a,b){var u,t,s
P.jM(b,"index")
for(u=this.gL(this),t=0;u.q();){s=u.gA(u)
if(b===t)return s;++t}throw H.f(P.B(b,this,"index",null,t))},
h:function(a){return P.kP(this,"(",")")}}
P.eR.prototype={}
P.a8.prototype={$ij:1}
P.cx.prototype={}
P.aK.prototype={
gE:function(a){return P.P.prototype.gE.call(this,this)},
h:function(a){return"null"}}
P.a3.prototype={}
P.P.prototype={constructor:P.P,$iP:1,
n:function(a,b){return this===b},
gE:function(a){return H.bF(this)},
h:function(a){return"Instance of '"+H.e(H.bG(this))+"'"},
toString:function(){return this.h(this)}}
P.o.prototype={}
P.an.prototype={
gl:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.k.prototype={}
W.e2.prototype={
gl:function(a){return a.length}}
W.e3.prototype={
h:function(a){return String(a)}}
W.e4.prototype={
h:function(a){return String(a)}}
W.c9.prototype={}
W.b1.prototype={$ib1:1}
W.b2.prototype={
cK:function(a,b,c){var u=a.getContext(b,P.lX(c))
return u},
$ib2:1}
W.ax.prototype={
gl:function(a){return a.length}}
W.eh.prototype={
gl:function(a){return a.length}}
W.z.prototype={$iz:1}
W.bt.prototype={
gl:function(a){return a.length}}
W.ei.prototype={}
W.X.prototype={}
W.a7.prototype={}
W.ej.prototype={
gl:function(a){return a.length}}
W.ek.prototype={
gl:function(a){return a.length}}
W.en.prototype={
gl:function(a){return a.length}}
W.a0.prototype={$ia0:1}
W.eo.prototype={
h:function(a){return String(a)}}
W.ch.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.B(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iu:1,
$au:function(){return[[P.ad,P.a3]]},
$an:function(){return[[P.ad,P.a3]]},
$ij:1,
$aj:function(){return[[P.ad,P.a3]]}}
W.ci.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gax(a))+" x "+H.e(this.gav(a))},
n:function(a,b){var u
if(b==null)return!1
u=J.N(b)
if(!u.$iad)return!1
return a.left===u.gcl(b)&&a.top===u.gcG(b)&&this.gax(a)===u.gax(b)&&this.gav(a)===u.gav(b)},
gE:function(a){return W.k2(C.c.gE(a.left),C.c.gE(a.top),C.c.gE(this.gax(a)),C.c.gE(this.gav(a)))},
gav:function(a){return a.height},
gcl:function(a){return a.left},
gcG:function(a){return a.top},
gax:function(a){return a.width},
$iad:1,
$aad:function(){return[P.a3]}}
W.ep.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.B(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iu:1,
$au:function(){return[P.o]},
$an:function(){return[P.o]},
$ij:1,
$aj:function(){return[P.o]}}
W.eq.prototype={
gl:function(a){return a.length}}
W.i3.prototype={
gl:function(a){return this.b.length},
i:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
p:function(a,b){this.a.appendChild(b)
return b},
gL:function(a){var u=this.fv(this)
return new J.W(u,u.length)},
$an:function(){return[W.J]},
$aj:function(){return[W.J]}}
W.J.prototype={
geG:function(a){return new W.i5(a)},
gc3:function(a){return new W.i3(a,a.children)},
h:function(a){return a.localName},
X:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.jy
if(u==null){u=H.b([],[W.am])
t=new W.cF(u)
u.push(W.k1(null))
u.push(W.k3())
$.jy=t
d=t}else d=u
u=$.jx
if(u==null){u=new W.dQ(d)
$.jx=u
c=u}else{u.a=d
c=u}}if($.ai==null){u=document
t=u.implementation.createHTMLDocument("")
$.ai=t
$.iV=t.createRange()
s=$.ai.createElement("base")
s.href=u.baseURI
$.ai.head.appendChild(s)}u=$.ai
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.ai
if(!!this.$ib1)r=u.body
else{r=u.createElement(a.tagName)
$.ai.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.a.K(C.K,a.tagName)){$.iV.selectNodeContents(r)
q=$.iV.createContextualFragment(b)}else{r.innerHTML=b
q=$.ai.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.ai.body
if(r==null?u!=null:r!==u)J.jo(r)
c.bu(q)
document.adoptNode(q)
return q},
eM:function(a,b,c){return this.X(a,b,c,null)},
cN:function(a,b){a.textContent=null
a.appendChild(this.X(a,b,null,null))},
$iJ:1,
gcC:function(a){return a.tagName}}
W.eu.prototype={
$1:function(a){return!!J.N(a).$iJ}}
W.h.prototype={$ih:1}
W.d.prototype={
ez:function(a,b,c,d){if(c!=null)this.dc(a,b,c,!1)},
dc:function(a,b,c,d){return a.addEventListener(b,H.bl(c,1),!1)}}
W.aD.prototype={$iaD:1}
W.eB.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.B(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aD]},
$an:function(){return[W.aD]},
$ij:1,
$aj:function(){return[W.aD]}}
W.eC.prototype={
gl:function(a){return a.length}}
W.eG.prototype={
gl:function(a){return a.length}}
W.aE.prototype={$iaE:1}
W.eM.prototype={
gl:function(a){return a.length}}
W.bv.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.B(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.C]},
$an:function(){return[W.C]},
$ij:1,
$aj:function(){return[W.C]}}
W.b8.prototype={$ib8:1}
W.f1.prototype={
h:function(a){return String(a)}}
W.fl.prototype={
gl:function(a){return a.length}}
W.fm.prototype={
i:function(a,b){return P.ar(a.get(b))},
B:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.ar(u.value[1]))}},
gU:function(a){var u=H.b([],[P.o])
this.B(a,new W.fn(u))
return u},
gl:function(a){return a.size}}
W.fn.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fo.prototype={
i:function(a,b){return P.ar(a.get(b))},
B:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.ar(u.value[1]))}},
gU:function(a){var u=H.b([],[P.o])
this.B(a,new W.fp(u))
return u},
gl:function(a){return a.size}}
W.fp.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aJ.prototype={$iaJ:1}
W.fq.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.B(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aJ]},
$an:function(){return[W.aJ]},
$ij:1,
$aj:function(){return[W.aJ]}}
W.aa.prototype={$iaa:1}
W.Q.prototype={
gal:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.f(P.jP("No elements"))
if(t>1)throw H.f(P.jP("More than one element"))
return u.firstChild},
a3:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
gL:function(a){var u=this.a.childNodes
return new W.cl(u,u.length)},
gl:function(a){return this.a.childNodes.length},
i:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
$an:function(){return[W.C]},
$aj:function(){return[W.C]}}
W.C.prototype={
fm:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
h:function(a){var u=a.nodeValue
return u==null?this.cR(a):u},
$iC:1}
W.cE.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.B(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.C]},
$an:function(){return[W.C]},
$ij:1,
$aj:function(){return[W.C]}}
W.aL.prototype={$iaL:1,
gl:function(a){return a.length}}
W.fI.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.B(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aL]},
$an:function(){return[W.aL]},
$ij:1,
$aj:function(){return[W.aL]}}
W.fQ.prototype={
i:function(a,b){return P.ar(a.get(b))},
B:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.ar(u.value[1]))}},
gU:function(a){var u=H.b([],[P.o])
this.B(a,new W.fR(u))
return u},
gl:function(a){return a.size}}
W.fR.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fT.prototype={
gl:function(a){return a.length}}
W.aM.prototype={$iaM:1}
W.h3.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.B(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aM]},
$an:function(){return[W.aM]},
$ij:1,
$aj:function(){return[W.aM]}}
W.aN.prototype={$iaN:1}
W.h4.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.B(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aN]},
$an:function(){return[W.aN]},
$ij:1,
$aj:function(){return[W.aN]}}
W.aO.prototype={$iaO:1,
gl:function(a){return a.length}}
W.h8.prototype={
i:function(a,b){return a.getItem(b)},
B:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gU:function(a){var u=H.b([],[P.o])
this.B(a,new W.h9(u))
return u},
gl:function(a){return a.length}}
W.h9.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ao.prototype={$iao:1}
W.cU.prototype={
X:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.b_(a,b,c,d)
u=W.kM("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.Q(t).a3(0,new W.Q(u))
return t}}
W.hc.prototype={
X:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.b_(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.r.X(u.createElement("table"),b,c,d)
u.toString
u=new W.Q(u)
s=u.gal(u)
s.toString
u=new W.Q(s)
r=u.gal(u)
t.toString
r.toString
new W.Q(t).a3(0,new W.Q(r))
return t}}
W.hd.prototype={
X:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.b_(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.r.X(u.createElement("table"),b,c,d)
u.toString
u=new W.Q(u)
s=u.gal(u)
t.toString
s.toString
new W.Q(t).a3(0,new W.Q(s))
return t}}
W.bJ.prototype={$ibJ:1}
W.aP.prototype={$iaP:1}
W.ap.prototype={$iap:1}
W.hg.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.B(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.ap]},
$an:function(){return[W.ap]},
$ij:1,
$aj:function(){return[W.ap]}}
W.hh.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.B(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aP]},
$an:function(){return[W.aP]},
$ij:1,
$aj:function(){return[W.aP]}}
W.hk.prototype={
gl:function(a){return a.length}}
W.aQ.prototype={$iaQ:1}
W.bd.prototype={$ibd:1}
W.ho.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.B(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aQ]},
$an:function(){return[W.aQ]},
$ij:1,
$aj:function(){return[W.aQ]}}
W.hp.prototype={
gl:function(a){return a.length}}
W.aR.prototype={}
W.hF.prototype={
h:function(a){return String(a)}}
W.hW.prototype={
gl:function(a){return a.length}}
W.aT.prototype={
geP:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.Z("deltaY is not supported"))},
geO:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.Z("deltaX is not supported"))},
$iaT:1}
W.bS.prototype={
el:function(a,b){return a.requestAnimationFrame(H.bl(b,1))},
dq:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.i4.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.B(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.z]},
$an:function(){return[W.z]},
$ij:1,
$aj:function(){return[W.z]}}
W.d8.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
n:function(a,b){var u
if(b==null)return!1
u=J.N(b)
if(!u.$iad)return!1
return a.left===u.gcl(b)&&a.top===u.gcG(b)&&a.width===u.gax(b)&&a.height===u.gav(b)},
gE:function(a){return W.k2(C.c.gE(a.left),C.c.gE(a.top),C.c.gE(a.width),C.c.gE(a.height))},
gav:function(a){return a.height},
gax:function(a){return a.width}}
W.i8.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.B(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aE]},
$an:function(){return[W.aE]},
$ij:1,
$aj:function(){return[W.aE]}}
W.ds.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.B(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.C]},
$an:function(){return[W.C]},
$ij:1,
$aj:function(){return[W.C]}}
W.il.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.B(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aO]},
$an:function(){return[W.aO]},
$ij:1,
$aj:function(){return[W.aO]}}
W.im.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.B(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.ao]},
$an:function(){return[W.ao]},
$ij:1,
$aj:function(){return[W.ao]}}
W.i2.prototype={
B:function(a,b){var u,t,s,r,q
for(u=this.gU(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.p)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gU:function(a){var u,t,s,r=this.a.attributes,q=H.b([],[P.o])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.c(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q}}
W.i5.prototype={
i:function(a,b){return this.a.getAttribute(b)},
gl:function(a){return this.gU(this).length}}
W.i6.prototype={}
W.i7.prototype={
$1:function(a){return this.a.$1(a)}}
W.bT.prototype={
d0:function(a){var u
if($.dg.a===0){for(u=0;u<262;++u)$.dg.m(0,C.J[u],W.m5())
for(u=0;u<12;++u)$.dg.m(0,C.k[u],W.m6())}},
as:function(a){return $.kx().K(0,W.bu(a))},
a4:function(a,b,c){var u=$.dg.i(0,H.e(W.bu(a))+"::"+b)
if(u==null)u=$.dg.i(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$iam:1}
W.A.prototype={
gL:function(a){return new W.cl(a,this.gl(a))}}
W.cF.prototype={
as:function(a){return C.a.c1(this.a,new W.fA(a))},
a4:function(a,b,c){return C.a.c1(this.a,new W.fz(a,b,c))},
$iam:1}
W.fA.prototype={
$1:function(a){return a.as(this.a)}}
W.fz.prototype={
$1:function(a){return a.a4(this.a,this.b,this.c)}}
W.dA.prototype={
d4:function(a,b,c,d){var u,t,s
this.a.a3(0,c)
u=b.aW(0,new W.ij())
t=b.aW(0,new W.ik())
this.b.a3(0,u)
s=this.c
s.a3(0,C.L)
s.a3(0,t)},
as:function(a){return this.a.K(0,W.bu(a))},
a4:function(a,b,c){var u=this,t=W.bu(a),s=u.c
if(s.K(0,H.e(t)+"::"+b))return u.d.eB(c)
else if(s.K(0,"*::"+b))return u.d.eB(c)
else{s=u.b
if(s.K(0,H.e(t)+"::"+b))return!0
else if(s.K(0,"*::"+b))return!0
else if(s.K(0,H.e(t)+"::*"))return!0
else if(s.K(0,"*::*"))return!0}return!1},
$iam:1}
W.ij.prototype={
$1:function(a){return!C.a.K(C.k,a)}}
W.ik.prototype={
$1:function(a){return C.a.K(C.k,a)}}
W.ip.prototype={
a4:function(a,b,c){if(this.cU(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.K(0,b)
return!1}}
W.iq.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)}}
W.io.prototype={
as:function(a){var u=J.N(a)
if(!!u.$ibH)return!1
u=!!u.$ii
if(u&&W.bu(a)==="foreignObject")return!1
if(u)return!0
return!1},
a4:function(a,b,c){if(b==="is"||C.b.aZ(b,"on"))return!1
return this.as(a)},
$iam:1}
W.cl.prototype={
q:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.e1(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gA:function(a){return this.d}}
W.am.prototype={}
W.ih.prototype={}
W.dQ.prototype={
bu:function(a){new W.iu(this).$2(a,null)},
aC:function(a,b){if(b==null)J.jo(a)
else b.removeChild(a)},
ep:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.kB(a)
n=o.a.getAttribute("is")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=u?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.as(r)}t="element unprintable"
try{t=J.a4(a)}catch(r){H.as(r)}try{s=W.bu(a)
this.eo(a,b,p,t,s,o,n)}catch(r){if(H.as(r) instanceof P.a5)throw r
else{this.aC(a,b)
window
q="Removing corrupted element "+H.e(t)
if(typeof console!="undefined")window.console.warn(q)}}},
eo:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=this
if(c){p.aC(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!p.a.as(a)){p.aC(a,b)
window
u="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!p.a.a4(a,"is",g)){p.aC(a,b)
window
u="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gU(f)
t=H.b(u.slice(0),[H.bo(u,0)])
for(s=f.gU(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.c(t,s)
r=t[s]
if(!p.a.a4(a,J.kD(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.e(e)+" "+r+'="'+H.e(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.N(a).$ibJ)p.bu(a.content)}}
W.iu.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.ep(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aC(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.as(s)
r=u
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=t}}}
W.d7.prototype={}
W.d9.prototype={}
W.da.prototype={}
W.db.prototype={}
W.dc.prototype={}
W.de.prototype={}
W.df.prototype={}
W.dh.prototype={}
W.di.prototype={}
W.dn.prototype={}
W.dp.prototype={}
W.dq.prototype={}
W.dr.prototype={}
W.dt.prototype={}
W.du.prototype={}
W.dx.prototype={}
W.dy.prototype={}
W.dz.prototype={}
W.bY.prototype={}
W.bZ.prototype={}
W.dB.prototype={}
W.dC.prototype={}
W.dG.prototype={}
W.dJ.prototype={}
W.dK.prototype={}
W.c_.prototype={}
W.c0.prototype={}
W.dM.prototype={}
W.dN.prototype={}
W.dR.prototype={}
W.dS.prototype={}
W.dT.prototype={}
W.dU.prototype={}
W.dV.prototype={}
W.dW.prototype={}
W.dX.prototype={}
W.dY.prototype={}
W.dZ.prototype={}
W.e_.prototype={}
P.iz.prototype={
$2:function(a,b){this.a[a]=b},
$S:7}
P.eD.prototype={
gb5:function(){var u=this.b,t=H.je(u,"n",0)
return new H.f5(new H.bR(u,new P.eE(),[t]),new P.eF(),[t,W.J])},
p:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.b_(this.gb5().a)},
i:function(a,b){var u=this.gb5()
return u.b.$1(J.iQ(u.a,b))},
gL:function(a){var u=P.jC(this.gb5(),!1,W.J)
return new J.W(u,u.length)},
$an:function(){return[W.J]},
$aj:function(){return[W.J]}}
P.eE.prototype={
$1:function(a){return!!J.N(a).$iJ}}
P.eF.prototype={
$1:function(a){return H.r(a,"$iJ")}}
P.ic.prototype={}
P.ad.prototype={}
P.b9.prototype={$ib9:1}
P.eX.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.B(b,a,null,null,null))
return a.getItem(b)},
t:function(a,b){return this.i(a,b)},
$an:function(){return[P.b9]},
$ij:1,
$aj:function(){return[P.b9]}}
P.ba.prototype={$iba:1}
P.fD.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.B(b,a,null,null,null))
return a.getItem(b)},
t:function(a,b){return this.i(a,b)},
$an:function(){return[P.ba]},
$ij:1,
$aj:function(){return[P.ba]}}
P.fK.prototype={
gl:function(a){return a.length}}
P.bH.prototype={$ibH:1}
P.hb.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.B(b,a,null,null,null))
return a.getItem(b)},
t:function(a,b){return this.i(a,b)},
$an:function(){return[P.o]},
$ij:1,
$aj:function(){return[P.o]}}
P.i.prototype={
gc3:function(a){return new P.eD(a,new W.Q(a))},
X:function(a,b,c,d){var u,t,s,r,q,p=H.b([],[W.am])
p.push(W.k1(null))
p.push(W.k3())
p.push(new W.io())
c=new W.dQ(new W.cF(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.m).eM(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.Q(s)
q=p.gal(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ii:1}
P.be.prototype={$ibe:1}
P.hq.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.B(b,a,null,null,null))
return a.getItem(b)},
t:function(a,b){return this.i(a,b)},
$an:function(){return[P.be]},
$ij:1,
$aj:function(){return[P.be]}}
P.dj.prototype={}
P.dk.prototype={}
P.dv.prototype={}
P.dw.prototype={}
P.dH.prototype={}
P.dI.prototype={}
P.dO.prototype={}
P.dP.prototype={}
P.e6.prototype={
gl:function(a){return a.length}}
P.e7.prototype={
i:function(a,b){return P.ar(a.get(b))},
B:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.ar(u.value[1]))}},
gU:function(a){var u=H.b([],[P.o])
this.B(a,new P.e8(u))
return u},
gl:function(a){return a.size}}
P.e8.prototype={
$2:function(a,b){return this.a.push(a)}}
P.e9.prototype={
gl:function(a){return a.length}}
P.b0.prototype={}
P.fE.prototype={
gl:function(a){return a.length}}
P.d6.prototype={}
P.h6.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.B(b,a,null,null,null))
return P.ar(a.item(b))},
t:function(a,b){return this.i(a,b)},
$an:function(){return[[P.cx,,,]]},
$ij:1,
$aj:function(){return[[P.cx,,,]]}}
P.dD.prototype={}
P.dE.prototype={}
T.ah.prototype={
af:function(a,b){return!0},
h:function(a){return"all"}}
T.cm.prototype={
af:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)if(u[s].af(0,b))return!0
return!1},
h:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.p)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.h(0)}return s}}
T.aI.prototype={}
T.S.prototype={
af:function(a,b){return!this.cQ(0,b)},
h:function(a){return"!["+this.by(0)+"]"}}
T.fL.prototype={
af:function(a,b){return this.a<=b&&this.b>=b},
h:function(a){var u=H.j2(this.a),t=H.j2(this.b)
return u+".."+t}}
T.fU.prototype={
cY:function(a){var u,t
if(a.a.length<=0)throw H.f(P.q("May not create a Set with zero characters."))
u=new H.I([P.y,P.af])
for(t=new H.bz(a,a.gl(a));t.q();)u.m(0,t.d,!0)
this.a=u},
af:function(a,b){return this.a.c5(0,b)},
h:function(a){var u=this.a
return P.j3(new H.cu(u,[H.bo(u,0)]))}}
R.cS.prototype={
k:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new R.d_(this.a.j(0,b))
r.a=H.b([],[T.aI])
r.c=!1
this.c.push(r)
return r},
eX:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
if(r.af(0,a))return r}return},
h:function(a){return this.b}}
R.cY.prototype={
h:function(a){var u=H.jj(this.b,"\n","\\n"),t=H.jj(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
R.cZ.prototype={
ai:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.p)(c),++t){s=c[t]
this.c.m(0,s,b)}},
h:function(a){return this.b}}
R.hl.prototype={
j:function(a,b){var u=this.a.i(0,b)
if(u==null){u=new R.cS(this,b)
u.c=H.b([],[R.d_])
this.a.m(0,b,u)}return u},
D:function(a){var u,t=this.b.i(0,a)
if(t==null){t=new R.cZ(a)
u=P.o
t.c=new H.I([u,u])
this.b.m(0,a,t)}return t},
cF:function(a){var u,t,s,r,q,p,o,n,m=H.b([],[R.cY]),l=this.c,k=[P.y],j=H.b([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)m.push(t)
return m}r=C.b.ao(a,s)
q=l.eX(r)
if(q==null){if(t==null){j.push(r)
p=P.j3(j)
throw H.f(P.q("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}m.push(t)
s=t.c+1
j=H.b([],k)
l=this.c
t=null}else{if(!q.c)j.push(r)
l=q.b
if(l.d!=null){p=P.j3(j)
o=l.d
n=o.c.i(0,p)
t=new R.cY(n==null?o.b:n,p,s)}++s}}}}
R.d_.prototype={
h:function(a){return this.b.b+": "+this.by(0)}}
O.b3.prototype={
bB:function(a){this.a=H.b([],[a])
this.c=this.b=null},
bv:function(a,b,c){this.b=b
this.c=a},
aX:function(a,b){return this.bv(a,null,b)},
e5:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
dt:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gL:function(a){var u=this.a
return new J.W(u,u.length)},
t:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
p:function(a,b){var u,t,s=this,r=[H.je(s,"b3",0)]
if(s.e5(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.dt(t,H.b([b],r))}},
$ij:1}
O.bA.prototype={
gl:function(a){return this.a.length},
gv:function(){var u=this.b
return u==null?this.b=D.a1():u},
am:function(){var u=this.b
if(u!=null)u.O(null)},
gP:function(a){var u=this.a
if(u.length>0)return C.a.gaS(u)
else return V.j1()},
cv:function(a){var u=this.a
if(a==null)u.push(V.j1())
else u.push(a)
this.am()},
bq:function(){var u=this.a
if(u.length>0){u.pop()
this.am()}}}
E.ea.prototype={}
E.aC.prototype={
sbw:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gv().M(0,s.gcq())
u=s.c
if(u!=null)u.gv().p(0,s.gcq())
t=new D.F("shape",r,s.c)
t.b=!0
s.ag(t)}},
saG:function(a){var u,t,s=this
if(!J.H(s.r,a)){u=s.r
if(u!=null)u.gv().M(0,s.gco())
if(a!=null)a.gv().p(0,s.gco())
s.r=a
t=new D.F("mover",u,a)
t.b=!0
s.ag(t)}},
aV:function(a,b){var u,t,s,r,q,p,o,n=this,m=n.r
if(m!=null){u=m.r
t=b.e
if(u<t){m.r=t
u=m.y
if(u!=null)++u.d
m.scI(m.a+m.d*b.y)
m.sct(0,m.b+m.e*b.y)
m.scB(m.c+m.f*b.y)
u=m.c
s=Math.cos(u)
r=Math.sin(u)
u=V.al(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)
t=m.b
s=Math.cos(t)
r=Math.sin(t)
u=u.J(0,V.al(s,0,-r,0,0,1,0,0,r,0,s,0,0,0,0,1))
t=m.a
s=Math.cos(t)
r=Math.sin(t)
m.x=u.J(0,V.al(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1))
u=m.y
if(u!=null)u.aj(0)}q=m.x}else q=null
if(!J.H(q,n.x)){p=n.x
n.x=q
o=new D.F("matrix",p,q)
o.b=!0
n.ag(o)}for(m=n.y.a,m=new J.W(m,m.length);m.q();)m.d.aV(0,b)},
aw:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)s.a.push(s.gP(s))
else s.a.push(r.J(0,s.gP(s)))
s.am()
a.cw(t.f)
s=a.dy
u=(s&&C.a).gaS(s)
if(u!=null&&t.d!=null)u.fp(a,t)
for(s=t.y.a,s=new J.W(s,s.length);s.q();)s.d.aw(a)
a.cu()
a.dx.bq()},
ag:function(a){var u=this.z
if(u!=null)u.O(a)},
V:function(){return this.ag(null)},
cr:function(a){this.e=null
this.ag(a)},
fc:function(){return this.cr(null)},
cp:function(a){this.ag(a)},
fb:function(){return this.cp(null)},
cn:function(a){this.ag(a)},
f8:function(){return this.cn(null)},
f7:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcm(),s=[{func:1,ret:-1,args:[D.R]}],r=0;r<b.length;b.length===u||(0,H.p)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.b6()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.V()},
fa:function(a,b){var u,t
for(u=b.gL(b),t=this.gcm();u.q();)u.gA(u).gv().M(0,t)
this.V()},
h:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.fM.prototype={
cX:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.aA(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.bA()
t=[V.ak]
u.a=H.b([],t)
u.gv().p(0,new E.fN(s))
s.cy=u
u=new O.bA()
u.a=H.b([],t)
u.gv().p(0,new E.fO(s))
s.db=u
u=new O.bA()
u.a=H.b([],t)
u.gv().p(0,new E.fP(s))
s.dx=u
u=H.b([],[O.cV])
s.dy=u
u.push(null)
s.fr=new H.I([P.o,A.cO])},
gfl:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gP(s)
u=t.db
u=t.z=s.J(0,u.gP(u))
s=u}return s},
cw:function(a){var u=this.dy
u.push(a==null?(u&&C.a).gaS(u):a)},
cu:function(){var u=this.dy
if(u.length>1)u.pop()}}
E.fN.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.fO.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.fP.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.cW.prototype={
bE:function(a){this.cA()},
bD:function(){return this.bE(null)},
gf_:function(){var u,t=this,s=Date.now(),r=C.d.T(P.jw(s-t.cx.a).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.aA(s,!1)
return u/r},
bS:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.J()
if(typeof r!=="number")return H.aW(r)
u=C.c.ci(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.J()
t=C.c.ci(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.jS(C.h,s.gfq())}},
cA:function(){if(!this.ch){this.ch=!0
var u=window
C.u.dq(u)
C.u.el(u,W.k7(new E.hj(this),P.a3))}},
fo:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.bS()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aA(r,!1)
s.y=P.jw(r-s.r.a).a*0.000001
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
if(s!=null)s.O(null)}catch(q){u=H.as(q)
t=H.jf(q)
P.ji("Error: "+H.e(u))
P.ji("Stack: "+H.e(t))
throw H.f(u)}}}
E.hj.prototype={
$1:function(a){var u=this.a
if(u.ch){u.ch=!1
u.fo()}}}
Z.d4.prototype={}
Z.ca.prototype={
aO:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.as(s)
t=P.q('Failed to bind buffer attribute "'+r.a.h(0)+'": '+H.e(u))
throw H.f(t)}},
h:function(a){var u=this
return"["+u.a.h(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.hX.prototype={}
Z.cb.prototype={
au:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
aO:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].aO(a)},
cH:function(a){var u,t,s
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
h:function(a){var u,t,s,r,q=[P.o],p=H.b([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)p.push(u[s].h(0))
r=H.b([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a4(q[s]))
return"Buffer:  ["+this.a.h(0)+"]\nIndices: "+C.a.k(p,", ")+"\nAttrs:   "+C.a.k(r,", ")}}
Z.cn.prototype={
h:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.bG(this.c))+"'")+"]"}}
Z.aS.prototype={
gbx:function(a){var u=this.a,t=(u&$.aw().a)!==0?3:0
if((u&$.av().a)!==0)t+=3
if((u&$.au().a)!==0)t+=3
if((u&$.aX().a)!==0)t+=2
if((u&$.aY().a)!==0)t+=3
if((u&$.c5().a)!==0)t+=3
if((u&$.c6().a)!==0)t+=4
if((u&$.bp().a)!==0)++t
return(u&$.at().a)!==0?t+4:t},
eC:function(a){var u,t=$.aw(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.av()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.au()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aX()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aY()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.c5()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.c6()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bp()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.at()
if((s&t.a)!==0)if(u===a)return t
return $.kw()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aS))return!1
return this.a===b.a},
h:function(a){var u=H.b([],[P.o]),t=this.a
if((t&$.aw().a)!==0)u.push("Pos")
if((t&$.av().a)!==0)u.push("Norm")
if((t&$.au().a)!==0)u.push("Binm")
if((t&$.aX().a)!==0)u.push("Txt2D")
if((t&$.aY().a)!==0)u.push("TxtCube")
if((t&$.c5().a)!==0)u.push("Clr3")
if((t&$.c6().a)!==0)u.push("Clr4")
if((t&$.bp().a)!==0)u.push("Weight")
if((t&$.at().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.a.k(u,"|")}}
D.ed.prototype={}
D.b6.prototype={
p:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.R]}]):u).push(b)},
M:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.a.K(s,b)
if(s===!0){s=t.a
u=(s&&C.a).M(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.a.K(s,b)
if(s===!0){s=t.b
u=(s&&C.a).M(s,b)||u}return u},
O:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.a.B(P.jC(u,!0,{func:1,ret:-1,args:[D.R]}),new D.ex(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.R]}])
C.a.B(u,new D.ey(q))}return!0},
aj:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.O(u)}}}}
D.ex.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.ey.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.R.prototype={}
D.bw.prototype={}
D.bx.prototype={}
D.F.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cc.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cc))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.cr.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cr))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.eW.prototype={
fh:function(a){this.d.p(0,a.a)
return!1},
fd:function(a){this.d.M(0,a.a)
return!1}}
X.f2.prototype={
bp:function(a,b){this.r=a.a
return!1},
aI:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.cM()
if(typeof u!=="number")return u.a5()
this.r=(u&~t)>>>0
return!1},
aH:function(a,b){return!1},
fi:function(a){return!1},
dV:function(a,b,c){return}}
X.bB.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.bB))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
h:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.fr.prototype={
bp:function(a,b){this.f=a.a
return!1},
aI:function(a,b){var u=this.f,t=a.a
if(typeof t!=="number")return t.cM()
if(typeof u!=="number")return u.a5()
this.f=(u&~t)>>>0
return!1},
aH:function(a,b){return!1},
fj:function(a,b){return!1}}
X.hn.prototype={
fg:function(a){return!1},
fe:function(a){return!1},
ff:function(a){return!1}}
X.d3.prototype={
bM:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.cr(u,new X.bB(t,a.altKey,a.shiftKey))},
ar:function(a){a.shiftKey},
bb:function(a){a.shiftKey},
ab:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.S()
u=t.top
if(typeof r!=="number")return r.S()
return new V.ab(s-q,r-u)},
aB:function(a){return new V.aq(a.movementX,a.movementY)},
b9:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.ab])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
q=C.c.a_(r.pageX)
C.c.a_(r.pageY)
p=o.left
C.c.a_(r.pageX)
n.push(new V.ab(q-p,C.c.a_(r.pageY)-o.top))}return n},
a9:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cc(u,new X.bB(t,a.altKey,a.shiftKey))},
b6:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.S()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.S()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
dP:function(a){this.f=!0},
dD:function(a){this.f=!1},
dJ:function(a){if(this.f&&this.b6(a))a.preventDefault()},
dT:function(a){var u
if(!this.f)return
u=this.bM(a)
this.b.fh(u)},
dR:function(a){var u
if(!this.f)return
u=this.bM(a)
this.b.fd(u)},
dX:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.ar(a)
if(r.x){u=r.a9(a)
t=r.aB(a)
if(r.d.bp(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.a9(a)
s=r.ab(a)
if(r.c.bp(u,s))a.preventDefault()},
e0:function(a){var u,t,s,r=this
r.ar(a)
u=r.a9(a)
if(r.x){t=r.aB(a)
if(r.d.aI(u,t))a.preventDefault()
return}if(r.r)return
s=r.ab(a)
if(r.c.aI(u,s))a.preventDefault()},
dN:function(a){var u,t,s,r=this
if(!r.b6(a)){r.ar(a)
u=r.a9(a)
if(r.x){t=r.aB(a)
if(r.d.aI(u,t))a.preventDefault()
return}if(r.r)return
s=r.ab(a)
if(r.c.aI(u,s))a.preventDefault()}},
dZ:function(a){var u,t,s,r=this
r.ar(a)
u=r.a9(a)
if(r.x){t=r.aB(a)
if(r.d.aH(u,t))a.preventDefault()
return}if(r.r)return
s=r.ab(a)
if(r.c.aH(u,s))a.preventDefault()},
dL:function(a){var u,t,s,r=this
if(!r.b6(a)){r.ar(a)
u=r.a9(a)
if(r.x){t=r.aB(a)
if(r.d.aH(u,t))a.preventDefault()
return}if(r.r)return
s=r.ab(a)
if(r.c.aH(u,s))a.preventDefault()}},
e2:function(a){var u,t,s=this
s.ar(a)
u=new V.aq((a&&C.t).geO(a),C.t.geP(a)).u(0,180)
if(s.x){if(s.d.fi(u))a.preventDefault()
return}if(s.r)return
t=s.ab(a)
if(s.c.fj(u,t))a.preventDefault()},
e4:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.a9(s.y)
t=s.ab(s.y)
s.d.dV(u,t,r)}},
ef:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bb(a)
u=t.b9(a)
if(t.e.fg(u))a.preventDefault()},
eb:function(a){var u
this.bb(a)
u=this.b9(a)
if(this.e.fe(u))a.preventDefault()},
ed:function(a){var u
this.bb(a)
u=this.b9(a)
if(this.e.ff(u))a.preventDefault()}}
D.b4.prototype={
a7:function(a){var u=this.r
if(u!=null)u.O(a)},
d2:function(){return this.a7(null)},
$iU:1}
D.U.prototype={}
D.cs.prototype={
a7:function(a){var u=this.x
if(u!=null)u.O(a)},
bQ:function(a){var u=this.y
if(u!=null)u.O(a)},
dU:function(){return this.bQ(null)},
e7:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.p)(a),++t){s=a[t]
if(s==null||this.dj(s))return!1}return!0},
dv:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gbP(),s=[{func:1,ret:-1,args:[D.R]}],r=0;r<b.length;b.length===u||(0,H.p)(b),++r){q=b[r]
if(q instanceof D.b4)this.e.push(q)
p=q.r
if(p==null){p=new D.b6()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}u=new D.bw()
u.b=!0
this.a7(u)},
e9:function(a,b){var u,t,s
for(u=b.gL(b),t=this.gbP();u.q();){s=u.gA(u)
C.a.M(this.e,s)
s.gv().M(0,t)}u=new D.bx()
u.b=!0
this.a7(u)},
dj:function(a){var u=C.a.K(this.e,a)
return u},
$aj:function(){return[D.U]},
$ab3:function(){return[D.U]}}
D.fJ.prototype={$iU:1}
D.h5.prototype={$iU:1}
V.K.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.K))return!1
u=b.a
t=$.w().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.v(this.a,3,0)+", "+V.v(this.b,3,0)+", "+V.v(this.c,3,0)+"]"}}
V.ay.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ay))return!1
u=b.a
t=$.w().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.v(u.a,3,0)+", "+V.v(u.b,3,0)+", "+V.v(u.c,3,0)+", "+V.v(u.d,3,0)+"]"}}
V.ew.prototype={}
V.cA.prototype={
Z:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.G])
return t},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cA))return!1
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
h:function(a){var u,t,s,r,q=this,p=[P.G],o=V.bn(H.b([q.a,q.d,q.r],p),3,0),n=V.bn(H.b([q.b,q.e,q.x],p),3,0),m=V.bn(H.b([q.c,q.f,q.y],p),3,0)
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
Z:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.G])
return t},
cj:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.w().a)return V.j1()
u=1/b1
t=-n
s=-a0
return V.al((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
J:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.al(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
aU:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.x(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
bt:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.V(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ak))return!1
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
h:function(a){return this.I()},
C:function(a){var u,t,s,r,q,p=this,o=[P.G],n=V.bn(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.bn(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.bn(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.bn(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
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
I:function(){return this.C("")}}
V.ab.prototype={
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ab))return!1
u=b.a
t=$.w().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
h:function(a){return"["+V.v(this.a,3,0)+", "+V.v(this.b,3,0)+"]"}}
V.V.prototype={
H:function(a,b){return new V.V(this.a+b.a,this.b+b.b,this.c+b.c)},
S:function(a,b){return new V.V(this.a-b.a,this.b-b.b,this.c-b.c)},
J:function(a,b){return new V.V(this.a*b,this.b*b,this.c*b)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.V))return!1
u=b.a
t=$.w().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.v(this.a,3,0)+", "+V.v(this.b,3,0)+", "+V.v(this.c,3,0)+"]"}}
V.cM.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cM))return!1
u=b.a
t=$.w().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.v(u.a,3,0)+", "+V.v(u.b,3,0)+", "+V.v(u.c,3,0)+", "+V.v(u.d,3,0)+"]"}}
V.aq.prototype={
bn:function(a){var u,t=this.a
if(typeof t!=="number")return t.J()
u=this.b
if(typeof u!=="number")return u.J()
return Math.sqrt(t*t+u*u)},
u:function(a,b){var u,t
if(Math.abs(b-0)<$.w().a){u=$.jW
return u==null?$.jW=new V.aq(0,0):u}u=this.a
if(typeof u!=="number")return u.u()
t=this.b
if(typeof t!=="number")return t.u()
return new V.aq(u/b,t/b)},
n:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aq))return!1
u=b.a
t=this.a
s=$.w()
s.toString
if(typeof u!=="number")return u.S()
if(typeof t!=="number")return H.aW(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.S()
if(typeof t!=="number")return H.aW(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){return"["+V.v(this.a,3,0)+", "+V.v(this.b,3,0)+"]"}}
V.x.prototype={
bn:function(a){return Math.sqrt(this.G(this))},
G:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ac:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.x(u*t-s*r,s*q-p*t,p*r-u*q)},
H:function(a,b){return new V.x(this.a+b.a,this.b+b.b,this.c+b.c)},
az:function(a){return new V.x(-this.a,-this.b,-this.c)},
J:function(a,b){return new V.x(this.a*b,this.b*b,this.c*b)},
u:function(a,b){if(Math.abs(b-0)<$.w().a)return V.bP()
return new V.x(this.a/b,this.b/b,this.c/b)},
ck:function(){var u=$.w().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.x))return!1
u=b.a
t=$.w().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.v(this.a,3,0)+", "+V.v(this.b,3,0)+", "+V.v(this.c,3,0)+"]"}}
U.ce.prototype={
gv:function(){var u=this.b
return u==null?this.b=D.a1():u},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ce))return!1
return J.H(this.a,b.a)},
h:function(a){return"Constant: "+this.a.C("          ")}}
U.fs.prototype={}
U.cN.prototype={
gv:function(){var u=this.y
return u==null?this.y=D.a1():u},
aq:function(a){var u=this.y
if(u!=null)u.O(a)},
scI:function(a){var u
a=V.jk(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.w().a)){this.a=a
u=new D.F("yaw",u,a)
u.b=!0
this.aq(u)}},
sct:function(a,b){var u
b=V.jk(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.w().a)){this.b=b
u=new D.F("pitch",u,b)
u.b=!0
this.aq(u)}},
scB:function(a){var u
a=V.jk(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.w().a)){this.c=a
u=new D.F("roll",u,a)
u.b=!0
this.aq(u)}},
n:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.cN))return!1
u=r.a
t=b.a
s=$.w().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
h:function(a){var u=this
return"Rotater: ["+V.v(u.a,3,0)+", "+V.v(u.b,3,0)+", "+V.v(u.c,3,0)+"], ["+V.v(u.d,3,0)+", "+V.v(u.e,3,0)+", "+V.v(u.f,3,0)+"]"}}
M.cj.prototype={
a8:function(a){var u=this.y
if(u!=null)u.O(a)},
d3:function(){return this.a8(null)},
dF:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.ga2(),s=[{func:1,ret:-1,args:[D.R]}],r=0;r<b.length;b.length===u||(0,H.p)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.b6()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bw()
u.b=!0
this.a8(u)},
dH:function(a,b){var u,t
for(u=b.gL(b),t=this.ga2();u.q();)u.gA(u).gv().M(0,t)
u=new D.bx()
u.b=!0
this.a8(u)},
scD:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gv().M(0,t.ga2())
u=t.d
t.d=a
if(a!=null)a.gv().p(0,t.ga2())
s=new D.F("technique",u,t.d)
s.b=!0
t.a8(s)}},
gv:function(){var u=this.y
return u==null?this.y=D.a1():u},
aw:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
a.cw(f.d)
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
if(typeof s!=="number")return H.aW(s)
o=C.c.a_(p*s)
p=q.b
if(typeof r!=="number")return H.aW(r)
n=C.c.a_(p*r)
p=C.c.a_(q.c*s)
a.c=p
q=C.c.a_(q.d*r)
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
a.cy.cv(i)
t=$.jH
if(t==null){t=V.jJ()
q=V.j6()
p=$.jX
t=V.jE(t,q,p==null?$.jX=new V.x(0,0,-1):p)
$.jH=t
h=t}else h=t
u=u.b
if(u!=null){g=u.a
if(g!=null)h=g.J(0,h)}a.db.cv(h)
u=f.d
if(u!=null)u.aV(0,a)
for(u=f.e.a,u=new J.W(u,u.length);u.q();)u.d.aV(0,a)
for(u=f.e.a,u=new J.W(u,u.length);u.q();)u.d.aw(a)
f.b.toString
a.cy.bq()
a.db.bq()
f.c.toString
a.cu()}}
A.c8.prototype={}
A.e5.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
eV:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
eQ:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.O.prototype={
ga0:function(a){var u=this.a?1:0
return u|0|0},
h:function(a){var u=this.a?1:0
return""+(u|0|0)},
n:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.O))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.f8.prototype={
cW:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
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
A.lG(c3,u)
A.lI(c3,u)
A.lH(c3,u)
A.lK(c3,u)
A.lL(c3,u)
A.lJ(c3,u)
A.lM(c3,u)
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
m=A.lF(b8.z)
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
H.t(P.q("Failed to link shader: "+H.e(l)))}b8.ev()
b8.ex()
b8.Q=b8.x.i(0,"posAttr")
b8.cx=b8.x.i(0,"normAttr")
b8.ch=b8.x.i(0,"binmAttr")
b8.cy=b8.x.i(0,"txt2DAttr")
b8.db=b8.x.i(0,"txtCubeAttr")
b8.dx=b8.x.i(0,"bendAttr")
if(c3.dx)b8.id=H.r(b8.y.N(0,"invViewMat"),"$iY")
if(t)b8.dy=H.r(b8.y.N(0,"objMat"),"$iY")
if(r)b8.fr=H.r(b8.y.N(0,"viewObjMat"),"$iY")
b8.fy=H.r(b8.y.N(0,"projViewObjMat"),"$iY")
if(c3.ry)b8.k1=H.r(b8.y.N(0,"txt2DMat"),"$ibM")
if(c3.x1)b8.k2=H.r(b8.y.N(0,"txtCubeMat"),"$iY")
if(c3.x2)b8.k3=H.r(b8.y.N(0,"colorMat"),"$iY")
b8.r1=H.b([],[A.Y])
t=c3.y2
if(t>0){b8.k4=b8.y.N(0,"bendMatCount")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.i(0,q)
if(j==null)H.t(P.q(c0+q+c1))
s.push(H.r(j,"$iY"))}}if(c3.a.a)b8.r2=H.r(b8.y.N(0,"emissionClr"),"$iE")
if(c3.b.a)b8.x1=H.r(b8.y.N(0,"ambientClr"),"$iE")
if(c3.c.a)b8.y2=H.r(b8.y.N(0,"diffuseClr"),"$iE")
if(c3.d.a)b8.c9=H.r(b8.y.N(0,"invDiffuseClr"),"$iE")
t=c3.e.a
if(!t)s=!1
else s=!0
if(s){b8.cb=H.r(b8.y.N(0,"shininess"),"$iL")
if(t)b8.ca=H.r(b8.y.N(0,"specularClr"),"$iE")}if(c3.cy){b8.cc=H.r(b8.y.N(0,"envSampler"),"$ibg")
if(c3.r.a)b8.cd=H.r(b8.y.N(0,"reflectClr"),"$iE")
t=c3.x.a
if(!t)s=!1
else s=!0
if(s){b8.ce=H.r(b8.y.N(0,"refraction"),"$iL")
if(t)b8.cf=H.r(b8.y.N(0,"refractClr"),"$iE")}}if(c3.y.a)b8.cg=H.r(b8.y.N(0,"alpha"),"$iL")
t=P.y
s=[t,A.d1]
b8.bg=new H.I(s)
b8.bh=new H.I([t,[P.a8,A.bL]])
b8.bi=new H.I(s)
b8.bj=new H.I([t,[P.a8,A.bN]])
b8.bk=new H.I(s)
b8.bl=new H.I([t,[P.a8,A.bO]])
if(c3.id){for(t=c3.z,s=t.length,r=[A.bL],i=0;i<t.length;t.length===s||(0,H.p)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.e(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.a5()
p=(g&1)!==0
if(p){o=b8.y
d=f+"s["+k+"].objUp"
j=o.i(0,d)
if(j==null)H.t(P.q(c0+d+c1))
H.r(j,"$iE")
o=b8.y
d=f+"s["+k+"].objRight"
c=o.i(0,d)
if(c==null)H.t(P.q(c0+d+c1))
H.r(c,"$iE")
o=b8.y
d=f+"s["+k+"].objDir"
b=o.i(0,d)
if(b==null)H.t(P.q(c0+d+c1))
H.r(b,"$iE")
a=b
a0=c
a1=j}else{a=b9
a0=a
a1=a0}o=b8.y
d=f+"s["+k+"].viewDir"
j=o.i(0,d)
if(j==null)H.t(P.q(c0+d+c1))
H.r(j,"$iE")
o=b8.y
d=f+"s["+k+"].color"
c=o.i(0,d)
if(c==null)H.t(P.q(c0+d+c1))
H.r(c,"$iE")
if(p){p=b8.y
o=f+"sTexture2D"+k
b=p.i(0,o)
if(b==null)H.t(P.q(c0+o+c1))
H.r(b,"$ibf")
a2=b}else a2=b9
e.push(new A.bL(a1,a0,a,j,c,a2))}b8.bh.m(0,g,e)
q=b8.bg
p=b8.y
o=f+"Count"
j=p.i(0,o)
if(j==null)H.t(P.q(c0+o+c1))
q.m(0,g,j)}for(t=c3.Q,s=t.length,r=[A.bN],i=0;i<t.length;t.length===s||(0,H.p)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.e(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.i(0,o)
if(j==null)H.t(P.q(c0+o+c1))
H.r(j,"$iE")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.i(0,o)
if(c==null)H.t(P.q(c0+o+c1))
H.r(c,"$iE")
p=b8.y
o=f+"s["+k+"].color"
b=p.i(0,o)
if(b==null)H.t(P.q(c0+o+c1))
H.r(b,"$iE")
if(typeof g!=="number")return g.a5()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
a3=p.i(0,o)
if(a3==null)H.t(P.q(c0+o+c1))
H.r(a3,"$ibM")
a4=a3}else a4=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
a3=p.i(0,o)
if(a3==null)H.t(P.q(c0+o+c1))
H.r(a3,"$ibg")
a2=a3}else a2=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
a3=p.i(0,o)
if(a3==null)H.t(P.q(c0+o+c1))
H.r(a3,"$ibg")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a5=p.i(0,o)
if(a5==null)H.t(P.q(c0+o+c1))
H.r(a5,"$ibK")
a6=a3
a7=a5}else{a6=b9
a7=a6}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
a3=p.i(0,o)
if(a3==null)H.t(P.q(c0+o+c1))
H.r(a3,"$iL")
p=b8.y
o=f+"s["+k+"].att1"
a5=p.i(0,o)
if(a5==null)H.t(P.q(c0+o+c1))
H.r(a5,"$iL")
p=b8.y
o=f+"s["+k+"].att2"
a8=p.i(0,o)
if(a8==null)H.t(P.q(c0+o+c1))
H.r(a8,"$iL")
a9=a8
b0=a5
b1=a3}else{a9=b9
b0=a9
b1=b0}e.push(new A.bN(j,c,a4,b,a2,a6,a7,b1,b0,a9))}b8.bj.m(0,g,e)
q=b8.bi
p=b8.y
o=f+"Count"
j=p.i(0,o)
if(j==null)H.t(P.q(c0+o+c1))
q.m(0,g,j)}for(t=c3.ch,s=t.length,r=[A.bO],i=0;i<t.length;t.length===s||(0,H.p)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.e(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.i(0,o)
if(j==null)H.t(P.q(c0+o+c1))
H.r(j,"$iE")
p=b8.y
o=f+"s["+k+"].objDir"
c=p.i(0,o)
if(c==null)H.t(P.q(c0+o+c1))
H.r(c,"$iE")
p=b8.y
o=f+"s["+k+"].viewPnt"
b=p.i(0,o)
if(b==null)H.t(P.q(c0+o+c1))
H.r(b,"$iE")
p=b8.y
o=f+"s["+k+"].color"
a3=p.i(0,o)
if(a3==null)H.t(P.q(c0+o+c1))
H.r(a3,"$iE")
if(typeof g!=="number")return g.a5()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a5=p.i(0,o)
if(a5==null)H.t(P.q(c0+o+c1))
H.r(a5,"$iE")
p=b8.y
o=f+"s["+k+"].objRight"
a8=p.i(0,o)
if(a8==null)H.t(P.q(c0+o+c1))
H.r(a8,"$iE")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.i(0,o)
if(b2==null)H.t(P.q(c0+o+c1))
H.r(b2,"$iL")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.i(0,o)
if(b3==null)H.t(P.q(c0+o+c1))
H.r(b3,"$iL")
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
if(a5==null)H.t(P.q(c0+d+c1))
H.r(a5,"$ibK")
a7=a5}else a7=b9
if((g&8)!==0){o=b8.y
d=f+"s["+k+"].cutoff"
a5=o.i(0,d)
if(a5==null)H.t(P.q(c0+d+c1))
H.r(a5,"$iL")
o=b8.y
d=f+"s["+k+"].coneAngle"
a8=o.i(0,d)
if(a8==null)H.t(P.q(c0+d+c1))
H.r(a8,"$iL")
b6=a8
b7=a5}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
d=f+"s["+k+"].att0"
a5=o.i(0,d)
if(a5==null)H.t(P.q(c0+d+c1))
H.r(a5,"$iL")
o=b8.y
d=f+"s["+k+"].att1"
a8=o.i(0,d)
if(a8==null)H.t(P.q(c0+d+c1))
H.r(a8,"$iL")
o=b8.y
d=f+"s["+k+"].att2"
b2=o.i(0,d)
if(b2==null)H.t(P.q(c0+d+c1))
H.r(b2,"$iL")
a9=b2
b0=a8
b1=a5}else{a9=b9
b0=a9
b1=b0}if((g&1)!==0){o=b8.y
d=f+"sTexture2D"+k
a5=o.i(0,d)
if(a5==null)H.t(P.q(c0+d+c1))
H.r(a5,"$ibf")
a2=a5}else a2=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a5=p.i(0,o)
if(a5==null)H.t(P.q(c0+o+c1))
H.r(a5,"$ibf")
a6=a5}else a6=b9
e.push(new A.bO(j,c,b,a3,a1,a0,b5,b4,a7,b7,b6,b1,b0,a9,a2,a6))}b8.bl.m(0,g,e)
q=b8.bk
p=b8.y
o=f+"Count"
j=p.i(0,o)
if(j==null)H.t(P.q(c0+o+c1))
q.m(0,g,j)}}},
eq:function(a,b){}}
A.cg.prototype={
h:function(a){return"dirLight"+H.e(this.a)}}
A.cK.prototype={
h:function(a){return"pointLight"+H.e(this.a)}}
A.cQ.prototype={
h:function(a){return"spotLight"+H.e(this.a)}}
A.fb.prototype={
h:function(a){return this.aF}}
A.bL.prototype={}
A.bN.prototype={}
A.bO.prototype={}
A.cO.prototype={
cZ:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
bN:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.f(P.q("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
ev:function(){var u,t,s,r=this,q=H.b([],[A.c8]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.aW(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.c8(p,t.name,s))}r.x=new A.e5(q)},
ex:function(){var u,t,s,r=this,q=H.b([],[A.d0]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.aW(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.eN(t.type,t.size,t.name,s))}r.y=new A.hz(q)},
ap:function(a,b,c){var u=this.a
if(a===1)return new A.d1(u,b,c)
else return A.j5(u,this.r,b,a,c)},
dl:function(a,b,c){var u=this.a
if(a===1)return new A.bf(u,b,c)
else return A.j5(u,this.r,b,a,c)},
dm:function(a,b,c){var u=this.a
if(a===1)return new A.bg(u,b,c)
else return A.j5(u,this.r,b,a,c)},
aN:function(a,b){return new P.dd(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
eN:function(a,b,c,d){var u=this
switch(a){case 5120:return u.ap(b,c,d)
case 5121:return u.ap(b,c,d)
case 5122:return u.ap(b,c,d)
case 5123:return u.ap(b,c,d)
case 5124:return u.ap(b,c,d)
case 5125:return u.ap(b,c,d)
case 5126:return new A.L(u.a,c,d)
case 35664:return new A.hv(u.a,c,d)
case 35665:return new A.E(u.a,c,d)
case 35666:return new A.bK(u.a,c,d)
case 35667:return new A.hw(u.a,c,d)
case 35668:return new A.hx(u.a,c,d)
case 35669:return new A.hy(u.a,c,d)
case 35674:return new A.hA(u.a,c,d)
case 35675:return new A.bM(u.a,c,d)
case 35676:return new A.Y(u.a,c,d)
case 35678:return u.dl(b,c,d)
case 35680:return u.dm(b,c,d)
case 35670:throw H.f(u.aN("BOOL",c))
case 35671:throw H.f(u.aN("BOOL_VEC2",c))
case 35672:throw H.f(u.aN("BOOL_VEC3",c))
case 35673:throw H.f(u.aN("BOOL_VEC4",c))
default:throw H.f(P.q("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.d0.prototype={}
A.hz.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
N:function(a,b){var u=this.i(0,b)
if(u==null)throw H.f(P.q("Required uniform value, "+b+", was not defined or used in shader."))
return u},
h:function(a){return this.I()},
I:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.p)(u),++r)s+=u[r].h(0)+"\n"
return s}}
A.d1.prototype={
h:function(a){return"Uniform1i: "+H.e(this.c)}}
A.hw.prototype={
h:function(a){return"Uniform2i: "+H.e(this.c)}}
A.hx.prototype={
h:function(a){return"Uniform3i: "+H.e(this.c)}}
A.hy.prototype={
h:function(a){return"Uniform4i: "+H.e(this.c)}}
A.hu.prototype={
h:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.L.prototype={
h:function(a){return"Uniform1f: "+H.e(this.c)}}
A.hv.prototype={
h:function(a){return"Uniform2f: "+H.e(this.c)}}
A.E.prototype={
h:function(a){return"Uniform3f: "+H.e(this.c)}}
A.bK.prototype={
h:function(a){return"Uniform4f: "+H.e(this.c)}}
A.hA.prototype={
h:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.bM.prototype={
a1:function(a){var u=new Float32Array(H.c1(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
h:function(a){return"UniformMat3: "+H.e(this.c)}}
A.Y.prototype={
a1:function(a){var u=new Float32Array(H.c1(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
h:function(a){return"UniformMat4: "+H.e(this.c)}}
A.bf.prototype={
h:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.bg.prototype={
h:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.iN.prototype={
$1:function(a){return new V.V(Math.cos(a),Math.sin(a),0)}}
F.iA.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.jn(n.$1(o),m)
m=J.jn(n.$1(o+3.141592653589793/p.c),m).S(0,l)
m=new V.x(m.a,m.b,m.c)
u=m.u(0,Math.sqrt(m.G(m)))
n=$.jY
if(n==null){n=new V.x(1,0,0)
$.jY=n
t=n}else t=n
n=u.ac(!J.H(u,t)?V.k_():t)
s=n.u(0,Math.sqrt(n.G(n)))
n=s.ac(u)
t=n.u(0,Math.sqrt(n.G(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.J(0,n*m)
m=s.J(0,q*m)
m=l.H(0,new V.V(n.a-m.a,n.b-m.b,n.c-m.c))
if(!J.H(a.f,m)){a.f=m
n=a.a
if(n!=null)n.V()}}}
F.b7.prototype={
aQ:function(){var u=this
if(!u.gc7()){C.a.M(u.a.a.d.b,u)
u.a.a.V()}u.ei()
u.ej()
u.ek()},
er:function(a){this.a=a
a.d.b.push(this)},
es:function(a){this.b=a
a.d.c.push(this)},
eu:function(a){this.c=a
a.d.d.push(this)},
ei:function(){var u=this.a
if(u!=null){C.a.M(u.d.b,this)
this.a=null}},
ej:function(){var u=this.b
if(u!=null){C.a.M(u.d.c,this)
this.b=null}},
ek:function(){var u=this.c
if(u!=null){C.a.M(u.d.d,this)
this.c=null}},
gc7:function(){return this.a==null||this.b==null||this.c==null},
df:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.bP()
if(q!=null)s=s.H(0,q)
if(u!=null)s=s.H(0,u)
if(t!=null)s=s.H(0,t)
if(s.ck())return
return s.u(0,Math.sqrt(s.G(s)))},
dh:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.S(0,q)
r=new V.x(r.a,r.b,r.c)
s=r.u(0,Math.sqrt(r.G(r)))
r=t.S(0,q)
r=new V.x(r.a,r.b,r.c)
r=s.ac(r.u(0,Math.sqrt(r.G(r))))
return r.u(0,Math.sqrt(r.G(r)))},
be:function(){var u,t=this
if(t.d!=null)return!0
u=t.df()
if(u==null){u=t.dh()
if(u==null)return!1}t.d=u
t.a.a.V()
return!0},
de:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.bP()
if(q!=null)s=s.H(0,q)
if(u!=null)s=s.H(0,u)
if(t!=null)s=s.H(0,t)
if(s.ck())return
return s.u(0,Math.sqrt(s.G(s)))},
dg:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.w().a){l=d.S(0,g)
l=new V.x(l.a,l.b,l.c)
q=l.u(0,Math.sqrt(l.G(l)))
if(s.a-t.a<0)q=q.az(0)}else{p=(l-u.b)/r
l=d.S(0,g).J(0,p).H(0,g).S(0,j)
l=new V.x(l.a,l.b,l.c)
q=l.u(0,Math.sqrt(l.G(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.az(0)}l=n.d
if(l!=null){o=l.u(0,Math.sqrt(l.G(l)))
l=o.ac(q)
l=l.u(0,Math.sqrt(l.G(l))).ac(o)
q=l.u(0,Math.sqrt(l.G(l)))}return q},
bc:function(){var u,t=this
if(t.e!=null)return!0
u=t.de()
if(u==null){u=t.dg()
if(u==null)return!1}t.e=u
t.a.a.V()
return!0},
gc4:function(a){var u=this
if(J.H(u.a,u.b))return!0
if(J.H(u.b,u.c))return!0
if(J.H(u.c,u.a))return!0
return!1},
n:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.I()},
C:function(a){var u,t,s=this
if(s.gc7())return a+"disposed"
u=a+C.b.ah(J.a4(s.a.e),0)+", "+C.b.ah(J.a4(s.b.e),0)+", "+C.b.ah(J.a4(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.h(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.h(0)+"}"):u+"-}"},
I:function(){return this.C("")}}
F.eA.prototype={}
F.h2.prototype={
bo:function(a,b,c){var u,t=b.a
t.a.a.F()
t=t.e
u=c.a
u.a.a.F()
if(t==u.e){t=b.b
t.a.a.F()
t=t.e
u=c.b
u.a.a.F()
if(t==u.e){t=b.c
t.a.a.F()
t=t.e
u=c.c
u.a.a.F()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.F()
t=t.e
u=c.b
u.a.a.F()
if(t==u.e){t=b.b
t.a.a.F()
t=t.e
u=c.c
u.a.a.F()
if(t==u.e){t=b.c
t.a.a.F()
t=t.e
u=c.a
u.a.a.F()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.F()
t=t.e
u=c.c
u.a.a.F()
if(t==u.e){t=b.b
t.a.a.F()
t=t.e
u=c.a
u.a.a.F()
if(t==u.e){t=b.c
t.a.a.F()
t=t.e
u=c.b
u.a.a.F()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.ct.prototype={}
F.eY.prototype={}
F.ht.prototype={}
F.cI.prototype={}
F.fV.prototype={
gv:function(){var u=this.e
return u==null?this.e=D.a1():u},
at:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.at()||!1
if(!t.a.at())u=!1
s=t.e
if(s!=null)s.aj(0)
return u},
f5:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.b(o.slice(0),[H.bo(o,0)])
for(o=[F.bQ];u.length!==0;){t=C.a.geY(u)
C.a.cz(u,0)
if(t!=null){s=H.b([],o)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.c(u,r)
q=u[r]
if(q!=null&&a.bo(0,t,q)){s.push(q)
C.a.cz(u,r)}}if(s.length>1)b.f4(s)}}p.a.F()
p.c.br()
p.d.br()
p.b.fn()
p.c.bs(new F.ht())
p.d.bs(new F.h2())
o=p.e
if(o!=null)o.aj(0)},
eI:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.aw()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.av().a)!==0)++s
if((t&$.au().a)!==0)++s
if((t&$.aX().a)!==0)++s
if((t&$.aY().a)!==0)++s
if((t&$.c5().a)!==0)++s
if((t&$.c6().a)!==0)++s
if((t&$.bp().a)!==0)++s
if((t&$.at().a)!==0)++s
r=a4.gbx(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.G])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.ca])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.eC(m)
k=l.gbx(l)
if(m>=t)return H.c(o,m)
o[m]=new Z.ca(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.c(i,j)
h=i[j].f3(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.c(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.c1(p)),35044)
u.bindBuffer(a1,null)
c=new Z.cb(new Z.d4(a1,d),o,a4)
c.b=H.b([],[Z.cn])
a0.b.b
a0.c.b
if(a0.d.b.length!==0){b=H.b([],[P.y])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.F()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.c(t,m)
t=t[m].b
t.a.a.F()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.c(t,m)
t=t[m].c
t.a.a.F()
b.push(t.e)}a=Z.lg(u,34963,b)
c.b.push(new Z.cn(4,b.length,a))}return c},
h:function(a){var u=this,t=H.b([],[P.o])
if(u.a.c.length!==0){t.push("Vertices:")
t.push(u.a.C("   "))}u.b.b
u.c.b
if(u.d.b.length!==0){t.push("Faces:")
t.push(u.d.C("   "))}return C.a.k(t,"\n")},
V:function(){var u=this.e
if(u!=null)u.O(null)}}
F.fW.prototype={
eA:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.b7])
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
if(p){n.p(0,m)
u.a.p(0,l)
u.a.p(0,j)
h.push(F.ez(m,l,j))
u.a.p(0,m)
u.a.p(0,j)
u.a.p(0,i)
h.push(F.ez(m,j,i))}else{n.p(0,l)
u.a.p(0,j)
u.a.p(0,i)
h.push(F.ez(l,j,i))
u.a.p(0,l)
u.a.p(0,i)
u.a.p(0,m)
h.push(F.ez(l,i,m))}p=!p}r=!r}return h},
gl:function(a){return this.b.length},
bs:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.c(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.i(0,q)
for(o=q-1;o>=0;--o){n=r.d.i(0,o)
if(a.bo(0,p,n)){p.aQ()
break}}}}},
br:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
s=t[u]
t=s.gc4(s)
if(t)s.aQ()}},
at:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.p)(u),++r)if(!u[r].be())s=!1
return s},
bd:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.p)(u),++r)if(!u[r].bc())s=!1
return s},
h:function(a){return this.I()},
C:function(a){var u,t,s,r=H.b([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].C(a))
return C.a.k(r,"\n")},
I:function(){return this.C("")}}
F.fX.prototype={
gl:function(a){return 0},
bs:function(a){var u,t,s,r,q
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.c(s,t)
r=s[t]
for(r.c.c,q=-1;!1;--q)r.c.i(0,q)}},
br:function(){var u,t,s
for(u=-1;!1;--u){t=this.b
return H.c(t,u)
s=t[u]
t=s.gc4(s)
if(t)s.aQ()}},
h:function(a){return this.I()},
C:function(a){var u,t,s=H.b([],[P.o])
for(u=0;!1;++u){t=this.b
if(u>=0)return H.c(t,u)
s.push(t[u].C(a+(""+u+". ")))}return C.a.k(s,"\n")},
I:function(){return this.C("")}}
F.fY.prototype={
gl:function(a){return 0},
fn:function(){var u,t
for(u=-1;!1;--u){t=this.b
return H.c(t,u)
t=t[u].gh_()
t=t.gfV(t)
if(t.gl(t).R(0,1)){t=this.b
return H.c(t,u)
t[u].aQ()}}},
h:function(a){return this.I()},
C:function(a){var u,t,s=H.b([],[P.o])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.c(u,t)
s.push(u[t].C(a))}return C.a.k(s,"\n")},
I:function(){return this.C("")}}
F.bQ.prototype={
c6:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.k0(u.cx,r,o,t,s,q,p,a,n)},
f3:function(a){var u,t,s=this
if(a.n(0,$.aw())){u=s.f
t=[P.G]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.av())){u=s.r
t=[P.G]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.au())){u=s.x
t=[P.G]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.aX())){u=s.y
t=[P.G]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.n(0,$.aY())){u=s.z
t=[P.G]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.c5())){u=s.Q
t=[P.G]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.c6())){u=s.Q
t=[P.G]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.n(0,$.bp()))return H.b([s.ch],[P.G])
else if(a.n(0,$.at())){u=H.b([-1,-1,-1,-1],[P.G])
return u}else return H.b([],[P.G])},
be:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.bP()
t.d.B(0,new F.hV(s))
s=s.a
t.r=s.u(0,Math.sqrt(s.G(s)))
s=t.a
if(s!=null){s.V()
s=t.a.e
if(s!=null)s.aj(0)}return!0},
bc:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.bP()
t.d.B(0,new F.hU(s))
s=s.a
t.x=s.u(0,Math.sqrt(s.G(s)))
s=t.a
if(s!=null){s.V()
s=t.a.e
if(s!=null)s.aj(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.I()},
C:function(a){var u,t,s=this,r="-",q=H.b([],[P.o])
q.push(C.b.ah(J.a4(s.e),0))
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
q.push(r)
t=C.a.k(q,", ")
return a+"{"+t+"}"},
I:function(){return this.C("")}}
F.hV.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.H(0,t)}}}
F.hU.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.H(0,t)}}}
F.hL.prototype={
F:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.c(u,r)
u[r].e=s;++s}this.b=!1}},
p:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.f(P.q("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.V()
return!0},
c_:function(a,b){var u=null,t=F.k0(u,u,a,u,u,b,u,u,0)
this.p(0,t)
return t},
gl:function(a){return this.c.length},
at:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)u[s].be()
return!0},
bd:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)u[s].bc()
return!0},
eJ:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.u(0,Math.sqrt(p*p+o*o+n*n))
if(!J.H(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.O(null)}}}}return!0},
h:function(a){return this.I()},
C:function(a){var u,t,s,r
this.F()
u=H.b([],[P.o])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.p)(t),++r)u.push(t[r].C(a))
return C.a.k(u,"\n")},
I:function(){return this.C("")}}
F.hM.prototype={
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
B:function(a,b){var u=this
C.a.B(u.b,b)
C.a.B(u.c,new F.hN(u,b))
C.a.B(u.d,new F.hO(u,b))},
h:function(a){return this.I()},
I:function(){var u,t,s,r=H.b([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].C(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].C(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].C(""))
return C.a.k(r,"\n")}}
F.hN.prototype={
$1:function(a){if(!J.H(a.a,this.a))this.b.$1(a)}}
F.hO.prototype={
$1:function(a){var u=this.a
if(!J.H(a.a,u)&&!J.H(a.b,u))this.b.$1(a)}}
F.hP.prototype={
gl:function(a){return 0},
i:function(a,b){var u,t
if(b>=0){u=this.c
t=b-0
if(t>=0)return H.c(u,t)
return u[t]}else{u=this.b
return H.c(u,b)
return u[b]}},
h:function(a){return this.I()},
I:function(){var u,t,s=H.b([],[P.o])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.c(u,t)
s.push(u[t].C(""))}for(u=this.c,t=0;!1;++t){if(t>=0)return H.c(u,t)
s.push(u[t].C(""))}return C.a.k(s,"\n")}}
F.hR.prototype={}
F.hQ.prototype={
bo:function(a,b,c){return J.H(b.f,c.f)}}
F.hS.prototype={}
F.fB.prototype={
f4:function(a){var u,t,s,r,q,p,o,n,m=V.bP()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null)m=new V.x(m.a+s.a,m.b+s.b,m.c+s.c)}m=m.u(0,Math.sqrt(m.G(m)))
for(u=a.length,s=m==null,t=0;t<a.length;a.length===u||(0,H.p)(a),++t){r=a[t]
if(s)q=null
else{p=m.a
o=m.b
n=m.c
q=m.u(0,Math.sqrt(p*p+o*o+n*n))}if(!J.H(r.r,q)){r.r=q
p=r.a
if(p!=null){p=p.e
if(p!=null)p.O(null)}}}return}}
F.hT.prototype={
gl:function(a){return 0},
h:function(a){return this.I()},
I:function(){var u,t,s=H.b([],[P.o])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.c(u,t)
s.push(u[t].C(""))}return C.a.k(s,"\n")}}
O.cy.prototype={
gv:function(){var u=this.fr
return u==null?this.fr=D.a1():u},
W:function(a){var u=this.fr
if(u!=null)u.O(a)},
d6:function(){return this.W(null)},
bR:function(a){this.a=null
this.W(a)},
en:function(){return this.bR(null)},
dz:function(a,b){var u=new D.bw()
u.b=!0
this.W(u)},
dB:function(a,b){var u=new D.bx()
u.b=!0
this.W(u)},
bK:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.y,h=new H.I([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=h.i(0,0)
h.m(0,0,r==null?1:r)}q=H.b([],[A.cg])
h.B(0,new O.ff(j,q))
C.a.aY(q,new O.fg())
p=new H.I([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){o=u[s]
r=o.gaE()
n=p.i(0,o.gaE())
p.m(0,r,n==null?1:n)}m=H.b([],[A.cK])
p.B(0,new O.fh(j,m))
C.a.aY(m,new O.fi())
l=new H.I([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.p)(i),++s){o=i[s]
t=o.gaE()
r=l.i(0,o.gaE())
l.m(0,t,r==null?1:r)}k=H.b([],[A.cQ])
l.B(0,new O.fj(j,k))
C.a.aY(k,new O.fk())
i=C.d.T(j.e.a.length+3,4)
j.dy.e
return A.kW(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
dd:function(a,b){},
aV:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.W(u,u.length);u.q();){t=u.d
t.toString
s=$.hK
if(s==null)s=$.hK=new V.x(0,0,1)
t.a=s
r=$.hJ
t.d=r==null?$.hJ=new V.x(0,1,0):r
r=$.hI
t.e=r==null?$.hI=new V.x(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.aU(s)
r=s.a
p=s.b
o=s.c
t.a=s.u(0,Math.sqrt(r*r+p*p+o*o))
o=q.aU(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.u(0,Math.sqrt(p*p+r*r+s*s))
s=q.aU(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.u(0,Math.sqrt(r*r+p*p+o*o))}}}},
fp:function(b3,b4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.a
if(b2==null){b2=b1.bK()
u=b3.fr.i(0,b2.aF)
if(u==null){u=A.kV(b2,b3.a)
t=u.b
if(t.length===0)H.t(P.q("May not cache a shader with no name."))
if(b3.fr.c5(0,t))H.t(P.q('Shader cache already contains a shader by the name "'+t+'".'))
b3.fr.m(0,t,u)}b2=b1.a=u
b4.e=null}s=b2.z
r=s.c8
b2=b4.e
if(!(b2 instanceof Z.cb))b2=b4.e=null
if(b2==null||!b2.d.n(0,r)){b2=s.k3
if(b2)b4.d.at()
q=s.k4
if(q){p=b4.d
o=p.e
if(o!=null)++o.d
p.d.bd()
p.a.bd()
p=p.e
if(p!=null)p.aj(0)}p=s.r2
if(p){o=b4.d
n=o.e
if(n!=null)++n.d
o.a.eJ()
o=o.e
if(o!=null)o.aj(0)}m=b4.d.eI(new Z.hX(b3.a),r)
m.au($.aw()).e=b1.a.Q.c
if(b2)m.au($.av()).e=b1.a.cx.c
if(q)m.au($.au()).e=b1.a.ch.c
if(s.r1)m.au($.aX()).e=b1.a.cy.c
if(p)m.au($.aY()).e=b1.a.db.c
if(s.rx)m.au($.at()).e=b1.a.dx.c
b4.e=m}l=H.b([],[T.hi])
b2=b1.a
q=b3.a
q.useProgram(b2.r)
b2.x.eV()
if(s.dy){b2=b1.a
p=b3.dx
p=p.gP(p)
b2=b2.dy
b2.toString
b2.a1(p.Z(0,!0))}if(s.fr){b2=b1.a
p=b3.cx
if(p==null){p=b3.db
p=p.gP(p)
o=b3.dx
o=b3.cx=p.J(0,o.gP(o))
p=o}b2=b2.fr
b2.toString
b2.a1(p.Z(0,!0))}b2=b1.a
p=b3.ch
if(p==null){p=b3.gfl()
o=b3.dx
o=b3.ch=p.J(0,o.gP(o))
p=o}b2=b2.fy
b2.toString
b2.a1(p.Z(0,!0))
if(s.ry){b2=b1.a
p=b1.b
b2=b2.k1
b2.toString
b2.a1(C.i.Z(p,!0))}if(s.x1){b2=b1.a
p=b1.c
b2=b2.k2
b2.toString
b2.a1(C.i.Z(p,!0))}if(s.x2){b2=b1.a
p=b1.d
b2=b2.k3
b2.toString
b2.a1(C.i.Z(p,!0))}if(s.y2>0){k=b1.e.a.length
b2=b1.a.k4
b2.a.uniform1i(b2.d,k)
for(j=0;j<k;++j){b2=b1.a
p=b1.e.a
if(j>=p.length)return H.c(p,j)
p=p[j]
b2=b2.r1
if(j>=b2.length)return H.c(b2,j)
b2=b2[j]
i=new Float32Array(H.c1(p.Z(0,!0)))
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
b2=b2.c9
b2.a.uniform3f(b2.d,p.a,p.b,p.c)}b2=s.e.a
if(!b2)p=!1
else p=!0
if(p){p=b1.a
o=b1.z.ch
p=p.cb
p.a.uniform1f(p.d,o)}if(b2){b2=b1.a
p=b1.z.f
b2=b2.ca
b2.a.uniform3f(b2.d,p.a,p.b,p.c)}b2=s.z
if(b2.length>0){p=b3.db
h=p.gP(p)
p=P.y
g=new H.I([p,p])
for(p=b1.dx.e,o=p.length,f=0;f<p.length;p.length===o||(0,H.p)(p),++f){e=p[f]
d=g.i(0,0)
if(d==null)d=0
g.m(0,0,d+1)
c=J.e1(b1.a.bh.i(0,0),d)
n=h.aU(e.a)
b=n.a
a=n.b
a0=n.c
a0=n.u(0,Math.sqrt(b*b+a*a+a0*a0))
a=c.e
b=a0.a
n=a0.b
a0=a0.c
a.a.uniform3f(a.d,b,n,a0)
a0=e.c
n=c.f
n.a.uniform3f(n.d,a0.a,a0.b,a0.c)}for(p=b2.length,f=0;f<b2.length;b2.length===p||(0,H.p)(b2),++f){o=b2[f].a
k=g.i(0,o)
if(k==null)k=0
o=b1.a.bg.i(0,o)
o.a.uniform1i(o.d,k)}}b2=s.Q
if(b2.length>0){p=b3.db
h=p.gP(p)
p=P.y
a1=new H.I([p,p])
for(p=b1.dx.f,o=p.length,f=0;f<p.length;p.length===o||(0,H.p)(p),++f){e=p[f]
a2=e.gaE()
d=a1.i(0,a2)
if(d==null)d=0
a1.m(0,a2,d+1)
c=J.e1(b1.a.bj.i(0,a2),d)
a3=h.J(0,e.gP(e))
n=e.gP(e)
b=$.bE
n=n.bt(b==null?$.bE=new V.V(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=$.bE
n=a3.bt(n==null?$.bE=new V.V(0,0,0):n)
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=e.gaD(e)
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
e.gak()
n=a3.cj(0)
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
i=new Float32Array(H.c1(new V.cA(b,a,a0,a4,a5,a6,a7,a8,n).Z(0,!0)))
a9.a.uniformMatrix3fv(a9.d,!1,i)
e.gak()
n=e.gak()
if(!C.a.K(l,n)){n.sad(0,l.length)
l.push(n)}n=e.gak()
b=n.gae(n)
if(b){b=c.f
b.toString
a=n.gae(n)
if(!a)b.a.uniform1i(b.d,0)
else{n=n.gad(n)
b.a.uniform1i(b.d,n)}}e.gaA()
n=e.gcO()
b=c.x
b.toString
a=n.geS(n)
a0=n.geT(n)
a4=n.geU()
n=n.geR()
b.a.uniform4f(b.d,a,a0,a4,n)
n=e.gaA()
if(!C.a.K(l,n)){n.sad(0,l.length)
l.push(n)}n=e.gaA()
b=n.gae(n)
if(b){b=c.r
b.toString
a=n.gae(n)
if(!a)b.a.uniform1i(b.d,0)
else{n=n.gad(n)
b.a.uniform1i(b.d,n)}}if(e.geW()){n=e.geD()
b=c.y
b.a.uniform1f(b.d,n)
n=e.geE()
b=c.z
b.a.uniform1f(b.d,n)
n=e.geF()
b=c.Q
b.a.uniform1f(b.d,n)}}for(p=b2.length,f=0;f<b2.length;b2.length===p||(0,H.p)(b2),++f){o=b2[f].a
k=a1.i(0,o)
if(k==null)k=0
o=b1.a.bi.i(0,o)
o.a.uniform1i(o.d,k)}}b2=s.ch
if(b2.length>0){p=b3.db
h=p.gP(p)
p=P.y
b0=new H.I([p,p])
for(p=b1.dx.r,o=p.length,f=0;f<p.length;p.length===o||(0,H.p)(p),++f){e=p[f]
a2=e.gaE()
d=b0.i(0,a2)
if(d==null)d=0
b0.m(0,a2,d+1)
c=J.e1(b1.a.bl.i(0,a2),d)
n=e.gfk(e)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=e.gfD(e).fU()
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=h.bt(e.gfk(e))
b=c.d
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=e.gaD(e)
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
e.gak()
n=e.gfZ()
b=c.f
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=e.gfW(e)
b=c.r
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=e.gfX()
b=c.x
b.a.uniform1f(b.d,n)
n=e.gfY()
b=c.y
b.a.uniform1f(b.d,n)
e.gak()
n=e.gak()
if(!C.a.K(l,n)){n.sad(0,l.length)
l.push(n)}n=e.gak()
b=n.gae(n)
if(b){b=c.dx
b.toString
a=n.gae(n)
if(!a)b.a.uniform1i(b.d,0)
else{n=n.gad(n)
b.a.uniform1i(b.d,n)}}e.gaA()
n=e.gcO()
b=c.z
b.toString
a=n.geS(n)
a0=n.geT(n)
a4=n.geU()
n=n.geR()
b.a.uniform4f(b.d,a,a0,a4,n)
n=e.gaA()
if(!C.a.K(l,n)){n.sad(0,l.length)
l.push(n)}n=e.gaA()
b=n.gae(n)
if(b){b=c.dy
b.toString
a=n.gae(n)
if(!a)b.a.uniform1i(b.d,0)
else{n=n.gad(n)
b.a.uniform1i(b.d,n)}}if(e.gfE()){n=e.gfC()
b=c.Q
b.a.uniform1f(b.d,n)
n=e.gfB()
b=c.ch
b.a.uniform1f(b.d,n)}if(e.geW()){n=e.geD()
b=c.cx
b.a.uniform1f(b.d,n)
n=e.geE()
b=c.cy
b.a.uniform1f(b.d,n)
n=e.geF()
b=c.db
b.a.uniform1f(b.d,n)}}for(p=b2.length,f=0;f<b2.length;b2.length===p||(0,H.p)(b2),++f){o=b2[f].a
k=b0.i(0,o)
if(k==null)k=0
o=b1.a.bk.i(0,o)
o.a.uniform1i(o.d,k)}}}if(s.dx){b2=b1.a
p=b3.Q
if(p==null){p=b3.db
p=b3.Q=p.gP(p).cj(0)}b2=b2.id
b2.toString
b2.a1(p.Z(0,!0))}if(s.cy){b1.dd(l,b1.ch)
b2=b1.a
p=b1.ch
b2.eq(b2.cc,p)
if(s.r.a){b2=b1.a
p=b1.cx.f
b2=b2.cd
b2.a.uniform3f(b2.d,p.a,p.b,p.c)}b2=s.x.a
if(!b2)p=!1
else p=!0
if(p){p=b1.a
o=b1.cy.ch
p=p.ce
p.a.uniform1f(p.d,o)}if(b2){b2=b1.a
p=b1.cy.f
b2=b2.cf
b2.a.uniform3f(b2.d,p.a,p.b,p.c)}}b2=s.y.a
p=!b2
if(p)o=!1
else o=!0
if(o){if(b2){b2=b1.a
o=b1.db.f
b2=b2.cg
b2.a.uniform1f(b2.d,o)}q.enable(3042)
q.blendFunc(770,771)}for(j=0;j<l.length;++j)l[j].aO(b3)
b2=b4.e
b2.aO(b3)
b2.aw(b3)
b2.cH(b3)
if(p)b2=!1
else b2=!0
if(b2)q.disable(3042)
for(j=0;j<l.length;++j)l[j].cH(b3)
b2=b1.a
b2.toString
q.useProgram(null)
b2.x.eQ()},
h:function(a){var u=this.a
if(u!=null)return u.b
else return this.bK().aF}}
O.ff.prototype={
$2:function(a,b){if(typeof b!=="number")return b.H()
return this.b.push(new A.cg(a,C.d.T(b+3,4)*4))}}
O.fg.prototype={
$2:function(a,b){return J.iP(a.a,b.a)}}
O.fh.prototype={
$2:function(a,b){if(typeof b!=="number")return b.H()
return this.b.push(new A.cK(a,C.d.T(b+3,4)*4))}}
O.fi.prototype={
$2:function(a,b){return J.iP(a.a,b.a)}}
O.fj.prototype={
$2:function(a,b){if(typeof b!=="number")return b.H()
return this.b.push(new A.cQ(a,C.d.T(b+3,4)*4))}}
O.fk.prototype={
$2:function(a,b){return J.iP(a.a,b.a)}}
O.f9.prototype={
aa:function(){var u,t=this
t.bz()
u=t.f
if(!(Math.abs(u-1)<$.w().a)){t.f=1
u=new D.F(t.b,u,1)
u.b=!0
t.a.W(u)}}}
O.cz.prototype={
aa:function(){},
bU:function(a){var u,t,s=this
if(!s.c.n(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.aa()
u=s.a
u.a=null
u.W(null)}}}
O.fa.prototype={}
O.a9.prototype={
bT:function(a){var u,t,s=this
if(!s.f.n(0,a)){u=s.f
s.f=a
t=new D.F(s.b+".color",u,a)
t.b=!0
s.a.W(t)}},
aa:function(){this.bz()
this.bT(new V.K(1,1,1))},
saD:function(a,b){this.bU(new A.O(!0,!1,!1))
this.bT(b)}}
O.fc.prototype={}
O.fd.prototype={
aa:function(){var u,t=this
t.bA()
u=t.ch
if(!(Math.abs(u-1)<$.w().a)){t.ch=1
u=new D.F(t.b+".refraction",u,1)
u.b=!0
t.a.W(u)}}}
O.fe.prototype={
bV:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.w().a)){u.ch=a
t=new D.F(u.b+".shininess",t,a)
t.b=!0
u.a.W(t)}},
aa:function(){this.bA()
this.bV(100)}}
O.cV.prototype={}
T.hi.prototype={}
X.iS.prototype={}
X.eI.prototype={
gv:function(){var u=this.x
return u==null?this.x=D.a1():u}}
X.cH.prototype={
gv:function(){var u=this.f
return u==null?this.f=D.a1():u},
an:function(a){var u=this.f
if(u!=null)u.O(a)},
d9:function(){return this.an(null)},
saG:function(a){var u,t,s=this
if(!J.H(s.b,a)){u=s.b
if(u!=null)u.gv().M(0,s.gbF())
t=s.b
s.b=a
if(a!=null)a.gv().p(0,s.gbF())
u=new D.F("mover",t,s.b)
u.b=!0
s.an(u)}}}
X.he.prototype={}
V.cd.prototype={
aK:function(a){this.b=new P.eN(C.G)
this.c=null
this.d=H.b([],[[P.a8,W.a0]])},
w:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)l.push(H.b([],[W.a0]))
u=a.split("\n")
for(l=u.length,t=[W.a0],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else m.d.push(H.b([],t))
p=document.createElement("div")
p.className="codePart"
o=m.b.dk(q,0,q.length)
n=o==null?q:o
C.E.cN(p,H.jj(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.gaS(m.d).push(p)}},
cs:function(a,b){var u,t,s,r,q=this
q.d=H.b([],[[P.a8,W.a0]])
u=C.a.k(b,"\n")
t=q.c
for(t=(t==null?q.c=q.aP():t).cF(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.p)(t),++r)q.aT(t[r])}}
V.iK.prototype={
$1:function(a){var u=C.c.cE(this.a.gf_(),2)
if(u!=="0.00")P.ji(u+" fps")}}
V.em.prototype={
aT:function(a){var u=this
switch(a.a){case"Class":u.w(a.b,"#551")
break
case"Comment":u.w(a.b,"#777")
break
case"Id":u.w(a.b,"#111")
break
case"Num":u.w(a.b,"#191")
break
case"Reserved":u.w(a.b,"#119")
break
case"String":u.w(a.b,"#171")
break
case"Symbol":u.w(a.b,"#616")
break
case"Type":u.w(a.b,"#B11")
break
case"Whitespace":u.w(a.b,"#111")
break}},
aP:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=R.hm()
a1.c=a1.j(0,r)
u=a1.j(0,r).k(0,q)
t=T.m(new H.l("_"))
u.a.push(t)
t=T.D("a","z")
u.a.push(t)
t=T.D("A","Z")
u.a.push(t)
t=a1.j(0,q).k(0,q)
u=T.m(new H.l("_"))
t.a.push(u)
u=T.D("0","9")
t.a.push(u)
u=T.D("a","z")
t.a.push(u)
u=T.D("A","Z")
t.a.push(u)
u=a1.j(0,r).k(0,p)
t=T.D("0","9")
u.a.push(t)
t=a1.j(0,p).k(0,p)
u=T.D("0","9")
t.a.push(u)
u=a1.j(0,p).k(0,o)
t=T.m(new H.l("."))
u.a.push(t)
t=a1.j(0,o).k(0,n)
u=T.D("0","9")
t.a.push(u)
u=a1.j(0,n).k(0,n)
t=T.D("0","9")
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
t=new T.S()
s=[T.aI]
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
t=new T.S()
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
t.d=t.a.D("Num")
t=a1.j(0,n)
t.d=t.a.D("Num")
t=a1.j(0,m)
t.d=t.a.D("Symbol")
t=a1.j(0,j)
t.d=t.a.D("String")
t=a1.j(0,g)
t.d=t.a.D("String")
t=a1.j(0,c)
t.d=t.a.D(d)
t=a1.j(0,a0)
t.d=t.a.D(a0)
t=a1.j(0,q)
t=t.d=t.a.D(q)
u=[P.o]
t.ai(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.ai(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.ai(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.eK.prototype={
aT:function(a){var u=this
switch(a.a){case"Builtin":u.w(a.b,"#411")
break
case"Comment":u.w(a.b,"#777")
break
case"Id":u.w(a.b,"#111")
break
case"Num":u.w(a.b,"#191")
break
case"Preprocess":u.w(a.b,"#737")
break
case"Reserved":u.w(a.b,"#119")
break
case"Symbol":u.w(a.b,"#611")
break
case"Type":u.w(a.b,"#171")
break
case"Whitespace":u.w(a.b,"#111")
break}},
aP:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=R.hm()
e.c=e.j(0,r)
u=e.j(0,r).k(0,q)
t=T.m(new H.l("_"))
u.a.push(t)
t=T.D("a","z")
u.a.push(t)
t=T.D("A","Z")
u.a.push(t)
t=e.j(0,q).k(0,q)
u=T.m(new H.l("_"))
t.a.push(u)
u=T.D("0","9")
t.a.push(u)
u=T.D("a","z")
t.a.push(u)
u=T.D("A","Z")
t.a.push(u)
u=e.j(0,r).k(0,p)
t=T.D("0","9")
u.a.push(t)
t=e.j(0,p).k(0,p)
u=T.D("0","9")
t.a.push(u)
u=e.j(0,p).k(0,o)
t=T.m(new H.l("."))
u.a.push(t)
t=e.j(0,o).k(0,n)
u=T.D("0","9")
t.a.push(u)
u=e.j(0,n).k(0,n)
t=T.D("0","9")
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
t=new T.S()
s=[T.aI]
t.a=H.b([],s)
u.a.push(t)
u=T.m(new H.l("\n"))
t.a.push(u)
u=e.j(0,r).k(0,h)
t=T.m(new H.l("#"))
u.a.push(t)
t=e.j(0,h).k(0,h)
u=new T.S()
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
u.d=u.a.D("Num")
u=e.j(0,n)
u.d=u.a.D("Num")
u=e.j(0,m)
u.d=u.a.D("Symbol")
u=e.j(0,i)
u.d=u.a.D(j)
u=e.j(0,g)
u.d=u.a.D(h)
u=e.j(0,f)
u.d=u.a.D(f)
u=e.j(0,q)
u=u.d=u.a.D(q)
t=[P.o]
u.ai(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.ai(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.ai(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return e}}
V.eL.prototype={
aT:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.w(a.b,"#911")
u.w("=",t)
break
case"Id":u.w(a.b,t)
break
case"Other":u.w(a.b,t)
break
case"Reserved":u.w(a.b,"#119")
break
case"String":u.w(a.b,"#171")
break
case"Symbol":u.w(a.b,"#616")
break}},
aP:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=R.hm()
l.c=l.j(0,s)
u=l.j(0,s).k(0,r)
t=T.m(new H.l("_"))
u.a.push(t)
t=T.D("a","z")
u.a.push(t)
t=T.D("A","Z")
u.a.push(t)
t=l.j(0,r).k(0,r)
u=T.m(new H.l("_"))
t.a.push(u)
u=T.D("0","9")
t.a.push(u)
u=T.D("a","z")
t.a.push(u)
u=T.D("A","Z")
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
t=new T.S()
t.a=H.b([],[T.aI])
u.a.push(t)
u=T.m(new H.l('</\\-!>=_"'))
t.a.push(u)
u=T.D("a","z")
t.a.push(u)
u=T.D("A","Z")
t.a.push(u)
u=l.j(0,p)
u.d=u.a.D("Symbol")
u=l.j(0,n)
u.d=u.a.D("String")
u=l.j(0,r)
t=u.a.D(r)
u.d=t
t.ai(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.o]))
t=l.j(0,q)
t.d=t.a.D(q)
t=l.j(0,m)
t.d=t.a.D(m)
return l}}
V.fH.prototype={
cs:function(a,b){this.d=H.b([],[[P.a8,W.a0]])
this.w(C.a.k(b,"\n"),"#111")},
aT:function(a){},
aP:function(){return}}
V.fZ.prototype={
d_:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.M(q,"scroll",new V.h0(o),!1)},
c0:function(a){var u,t,s,r,q,p,o,n,m,l,k
this.ew()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.cF(C.a.f2(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q){p=s[q]
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
if(H.mi(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.c(m,1)
l.href=m[1]
l.textContent=m[0]
t.appendChild(l)}else{k=P.k4(C.p,n,C.f,!1)
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
cJ:function(a){var u,t,s,r=new V.em("dart")
r.aK("dart")
u=new V.eK("glsl")
u.aK("glsl")
t=new V.eL("html")
t.aK("html")
s=C.a.eZ(H.b([r,u,t],[V.cd]),new V.h1(a))
if(s!=null)return s
r=new V.fH("plain")
r.aK("plain")
return r},
bZ:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.b([],[P.y])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(J.jc(s).aZ(s,"+")){b0[t]=C.b.a6(s,1)
a6.push(1)
u=!0}else if(C.b.aZ(s,"-")){b0[t]=C.b.a6(s,1)
a6.push(-1)
u=!0}else a6.push(0)}r=this.cJ(a8)
r.cs(0,b0)
q=document
p=q.createElement("div")
p.className="codeTableScroll"
o=q.createElement("table")
o.className="codeTable"
p.appendChild(o)
this.a.appendChild(p)
n=P.k4(C.p,a7,C.f,!1)
m=q.createElement("tr")
m.className="headerRow"
l=q.createElement("td")
l.className="headerCell"
l.colSpan=u?3:2
k=q.createElement("div")
k.className="tableHeader"
k.id=n
j=W.jp()
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
for(g=s.length,a=0;a<s.length;s.length===g||(0,H.p)(s),++a)b.appendChild(s[a])
f.appendChild(e)
f.appendChild(d)
f.appendChild(b)
o.appendChild(f)}else for(g=r.d,a0=g.length,a1=a9,a=0;a<g.length;g.length===a0||(0,H.p)(g),++a){s=g[a]
f=q.createElement("tr")
f.className=a3
e=q.createElement("td")
e.className=a4;++a1
e.textContent=""+a1
d=q.createElement("td")
d.className=a5
for(a2=C.a.gL(s);a2.q();)d.appendChild(a2.gA(a2))
f.appendChild(e)
f.appendChild(d)
o.appendChild(f)}},
ew:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=R.hm()
u.c=u.j(0,q)
t=u.j(0,q).k(0,p)
s=T.m(new H.l("*"))
t.a.push(s)
t.c=!0
t=u.j(0,p).k(0,p)
s=new T.S()
r=[T.aI]
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
s=new T.S()
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
s=new T.S()
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
t=new T.S()
t.a=H.b([],r)
s.a.push(t)
s=T.m(new H.l("|]"))
t.a.push(s)
s=u.j(0,k).k(0,j)
t=T.m(new H.l("]"))
s.a.push(t)
s.c=!0
s=u.j(0,k).k(0,k)
t=new T.S()
t.a=H.b([],r)
s.a.push(t)
s=T.m(new H.l("|]"))
t.a.push(s)
u.j(0,q).k(0,i).a.push(new T.ah())
s=u.j(0,i).k(0,i)
t=new T.S()
t.a=H.b([],r)
s.a.push(t)
s=T.m(new H.l("*_`["))
t.a.push(s)
s=u.j(0,"BoldEnd")
s.d=s.a.D(p)
s=u.j(0,n)
s.d=s.a.D(o)
s=u.j(0,"CodeEnd")
s.d=s.a.D(m)
s=u.j(0,j)
s.d=s.a.D("Link")
s=u.j(0,i)
s.d=s.a.D(i)
this.b=u}}
V.h0.prototype={
$1:function(a){P.jS(C.h,new V.h_(this.a))}}
V.h_.prototype={
$0:function(){var u=C.c.a_(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
V.h1.prototype={
$1:function(a){return a.a===this.a}}
X.iI.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.a,r=[P.o]
u.bZ("Vertex Shader","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
t=t.a
u.bZ("Fragment Shader","glsl",0,H.b((t==null?null:t.d).split("\n"),r))}};(function aliases(){var u=J.a.prototype
u.cR=u.h
u=J.cq.prototype
u.cT=u.h
u=P.j.prototype
u.cS=u.aW
u=W.J.prototype
u.b_=u.X
u=W.dA.prototype
u.cU=u.a4
u=T.cm.prototype
u.cQ=u.af
u.by=u.h
u=O.cz.prototype
u.bz=u.aa
u=O.a9.prototype
u.bA=u.aa})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"lU","li",5)
u(P,"lV","lj",5)
u(P,"lW","lk",5)
t(P,"k9","lS",8)
s(W,"m5",4,null,["$4"],["ll"],13,0)
s(W,"m6",4,null,["$4"],["lm"],13,0)
var m
r(m=E.aC.prototype,"gcq",0,0,null,["$1","$0"],["cr","fc"],0,0)
r(m,"gco",0,0,null,["$1","$0"],["cp","fb"],0,0)
r(m,"gcm",0,0,null,["$1","$0"],["cn","f8"],0,0)
q(m,"gf6","f7",2)
q(m,"gf9","fa",2)
r(m=E.cW.prototype,"gbC",0,0,null,["$1","$0"],["bE","bD"],0,0)
p(m,"gfq","cA",8)
o(m=X.d3.prototype,"gdO","dP",3)
o(m,"gdC","dD",3)
o(m,"gdI","dJ",1)
o(m,"gdS","dT",9)
o(m,"gdQ","dR",9)
o(m,"gdW","dX",1)
o(m,"ge_","e0",1)
o(m,"gdM","dN",1)
o(m,"gdY","dZ",1)
o(m,"gdK","dL",1)
o(m,"ge1","e2",15)
o(m,"ge3","e4",3)
o(m,"gee","ef",4)
o(m,"gea","eb",4)
o(m,"gec","ed",4)
r(D.b4.prototype,"gd1",0,0,null,["$1","$0"],["a7","d2"],0,0)
r(m=D.cs.prototype,"gbP",0,0,null,["$1","$0"],["bQ","dU"],0,0)
o(m,"ge6","e7",16)
q(m,"gdu","dv",10)
q(m,"ge8","e9",10)
n(V.aq.prototype,"gl","bn",11)
n(V.x.prototype,"gl","bn",11)
r(m=M.cj.prototype,"ga2",0,0,null,["$1","$0"],["a8","d3"],0,0)
q(m,"gdE","dF",2)
q(m,"gdG","dH",2)
r(m=O.cy.prototype,"gd5",0,0,null,["$1","$0"],["W","d6"],0,0)
r(m,"gem",0,0,null,["$1","$0"],["bR","en"],0,0)
q(m,"gdw","dz",12)
q(m,"gdA","dB",12)
r(X.cH.prototype,"gbF",0,0,null,["$1","$0"],["an","d9"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.P,null)
s(P.P,[H.j_,J.a,J.W,P.dm,P.j,H.bz,P.eR,H.ck,H.hD,H.hr,P.b5,H.bs,H.dF,P.aj,H.eZ,H.f_,H.eU,P.dL,P.d5,P.cT,P.ha,P.cX,P.iv,P.ii,P.ib,P.dl,P.n,P.ee,P.eO,P.it,P.af,P.aA,P.a3,P.aB,P.fF,P.cR,P.dd,P.eH,P.eJ,P.a8,P.cx,P.aK,P.o,P.an,W.ei,W.bT,W.A,W.cF,W.dA,W.io,W.cl,W.am,W.ih,W.dQ,P.ic,T.ah,T.cm,T.aI,T.fL,T.fU,R.cS,R.cY,R.cZ,R.hl,O.b3,O.bA,E.ea,E.aC,E.fM,E.cW,Z.d4,Z.hX,Z.cb,Z.cn,Z.aS,D.ed,D.b6,D.R,X.cc,X.cr,X.eW,X.f2,X.bB,X.fr,X.hn,X.d3,D.b4,D.U,D.fJ,D.h5,V.K,V.ay,V.ew,V.cA,V.ak,V.ab,V.V,V.cM,V.aq,V.x,M.cj,A.c8,A.e5,A.O,A.cg,A.cK,A.cQ,A.fb,A.bL,A.bN,A.bO,A.d0,A.hz,F.b7,F.eA,F.ct,F.eY,F.cI,F.fV,F.fW,F.fX,F.fY,F.bQ,F.hL,F.hM,F.hP,F.hR,F.hS,F.hT,O.cV,O.cz,O.fc,X.iS,X.he,X.cH,V.cd,V.fZ])
s(J.a,[J.eS,J.cp,J.cq,J.aF,J.by,J.aG,H.bD,W.d,W.e2,W.c9,W.a7,W.z,W.d7,W.X,W.en,W.eo,W.d9,W.ci,W.db,W.eq,W.h,W.de,W.aE,W.eM,W.dh,W.f1,W.fl,W.dn,W.dp,W.aJ,W.dq,W.dt,W.aL,W.dx,W.dz,W.aN,W.dB,W.aO,W.dG,W.ao,W.dJ,W.hk,W.aQ,W.dM,W.hp,W.hF,W.dR,W.dT,W.dV,W.dX,W.dZ,P.b9,P.dj,P.ba,P.dv,P.fK,P.dH,P.be,P.dO,P.e6,P.d6,P.dD])
s(J.cq,[J.fG,J.bh,J.aH])
t(J.iZ,J.aF)
s(J.by,[J.co,J.eT])
t(P.f0,P.dm)
s(P.f0,[H.d2,W.i3,W.Q,P.eD])
t(H.l,H.d2)
s(P.j,[H.et,H.f5,H.bR])
s(H.et,[H.cw,H.cu])
s(P.eR,[H.f6,H.hY])
t(H.f7,H.cw)
s(P.b5,[H.fC,H.eV,H.hC,H.ec,H.fS,P.cG,P.a5,P.hE,P.hB,P.bI,P.ef,P.el])
s(H.bs,[H.iO,H.hf,H.iE,H.iF,H.iG,P.i_,P.hZ,P.i0,P.i1,P.is,P.ir,P.iy,P.ie,P.ig,P.f4,P.er,P.es,W.eu,W.fn,W.fp,W.fR,W.h9,W.i7,W.fA,W.fz,W.ij,W.ik,W.iq,W.iu,P.iz,P.eE,P.eF,P.e8,E.fN,E.fO,E.fP,E.hj,D.ex,D.ey,F.iN,F.iA,F.hV,F.hU,F.hN,F.hO,O.ff,O.fg,O.fh,O.fi,O.fj,O.fk,V.iK,V.h0,V.h_,V.h1,X.iI])
s(H.hf,[H.h7,H.bq])
t(P.f3,P.aj)
s(P.f3,[H.I,W.i2])
t(H.cB,H.bD)
s(H.cB,[H.bU,H.bW])
t(H.bV,H.bU)
t(H.bC,H.bV)
t(H.bX,H.bW)
t(H.cC,H.bX)
s(H.cC,[H.ft,H.fu,H.fv,H.fw,H.fx,H.cD,H.fy])
t(P.id,P.iv)
t(P.ia,P.ii)
t(P.eg,P.ha)
t(P.ev,P.ee)
s(P.eg,[P.eN,P.hH])
t(P.hG,P.ev)
s(P.a3,[P.G,P.y])
s(P.a5,[P.bc,P.eP])
s(W.d,[W.C,W.eC,W.aM,W.bY,W.aP,W.ap,W.c_,W.hW,W.bS,P.e9,P.b0])
s(W.C,[W.J,W.ax])
s(W.J,[W.k,P.i])
s(W.k,[W.e3,W.e4,W.b1,W.b2,W.a0,W.eG,W.fT,W.cU,W.hc,W.hd,W.bJ])
t(W.eh,W.a7)
t(W.bt,W.d7)
s(W.X,[W.ej,W.ek])
t(W.da,W.d9)
t(W.ch,W.da)
t(W.dc,W.db)
t(W.ep,W.dc)
t(W.aD,W.c9)
t(W.df,W.de)
t(W.eB,W.df)
t(W.di,W.dh)
t(W.bv,W.di)
t(W.aR,W.h)
s(W.aR,[W.b8,W.aa,W.bd])
t(W.fm,W.dn)
t(W.fo,W.dp)
t(W.dr,W.dq)
t(W.fq,W.dr)
t(W.du,W.dt)
t(W.cE,W.du)
t(W.dy,W.dx)
t(W.fI,W.dy)
t(W.fQ,W.dz)
t(W.bZ,W.bY)
t(W.h3,W.bZ)
t(W.dC,W.dB)
t(W.h4,W.dC)
t(W.h8,W.dG)
t(W.dK,W.dJ)
t(W.hg,W.dK)
t(W.c0,W.c_)
t(W.hh,W.c0)
t(W.dN,W.dM)
t(W.ho,W.dN)
t(W.aT,W.aa)
t(W.dS,W.dR)
t(W.i4,W.dS)
t(W.d8,W.ci)
t(W.dU,W.dT)
t(W.i8,W.dU)
t(W.dW,W.dV)
t(W.ds,W.dW)
t(W.dY,W.dX)
t(W.il,W.dY)
t(W.e_,W.dZ)
t(W.im,W.e_)
t(W.i5,W.i2)
t(W.i6,P.cT)
t(W.ip,W.dA)
t(P.ad,P.ic)
t(P.dk,P.dj)
t(P.eX,P.dk)
t(P.dw,P.dv)
t(P.fD,P.dw)
t(P.bH,P.i)
t(P.dI,P.dH)
t(P.hb,P.dI)
t(P.dP,P.dO)
t(P.hq,P.dP)
t(P.e7,P.d6)
t(P.fE,P.b0)
t(P.dE,P.dD)
t(P.h6,P.dE)
s(T.cm,[T.S,R.d_])
s(E.ea,[Z.ca,A.cO,T.hi])
s(D.R,[D.bw,D.bx,D.F])
t(D.cs,O.b3)
t(U.fs,D.ed)
s(U.fs,[U.ce,U.cN])
t(A.f8,A.cO)
s(A.d0,[A.d1,A.hw,A.hx,A.hy,A.hu,A.L,A.hv,A.E,A.bK,A.hA,A.bM,A.Y,A.bf,A.bg])
t(F.h2,F.eA)
t(F.ht,F.eY)
t(F.hQ,F.hR)
t(F.fB,F.hS)
t(O.cy,O.cV)
s(O.cz,[O.f9,O.fa,O.a9])
s(O.a9,[O.fd,O.fe])
t(X.eI,X.he)
s(V.cd,[V.em,V.eK,V.eL,V.fH])
u(H.d2,H.hD)
u(H.bU,P.n)
u(H.bV,H.ck)
u(H.bW,P.n)
u(H.bX,H.ck)
u(P.dm,P.n)
u(W.d7,W.ei)
u(W.d9,P.n)
u(W.da,W.A)
u(W.db,P.n)
u(W.dc,W.A)
u(W.de,P.n)
u(W.df,W.A)
u(W.dh,P.n)
u(W.di,W.A)
u(W.dn,P.aj)
u(W.dp,P.aj)
u(W.dq,P.n)
u(W.dr,W.A)
u(W.dt,P.n)
u(W.du,W.A)
u(W.dx,P.n)
u(W.dy,W.A)
u(W.dz,P.aj)
u(W.bY,P.n)
u(W.bZ,W.A)
u(W.dB,P.n)
u(W.dC,W.A)
u(W.dG,P.aj)
u(W.dJ,P.n)
u(W.dK,W.A)
u(W.c_,P.n)
u(W.c0,W.A)
u(W.dM,P.n)
u(W.dN,W.A)
u(W.dR,P.n)
u(W.dS,W.A)
u(W.dT,P.n)
u(W.dU,W.A)
u(W.dV,P.n)
u(W.dW,W.A)
u(W.dX,P.n)
u(W.dY,W.A)
u(W.dZ,P.n)
u(W.e_,W.A)
u(P.dj,P.n)
u(P.dk,W.A)
u(P.dv,P.n)
u(P.dw,W.A)
u(P.dH,P.n)
u(P.dI,W.A)
u(P.dO,P.n)
u(P.dP,W.A)
u(P.d6,P.aj)
u(P.dD,P.n)
u(P.dE,W.A)})()
var v={mangledGlobalNames:{y:"int",G:"double",a3:"num",o:"String",af:"bool",aK:"Null",a8:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.R]},{func:1,ret:-1,args:[W.aa]},{func:1,ret:-1,args:[P.y,[P.j,E.aC]]},{func:1,ret:-1,args:[W.h]},{func:1,ret:-1,args:[W.bd]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.aK,args:[,,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.b8]},{func:1,ret:-1,args:[P.y,[P.j,D.U]]},{func:1,ret:P.G},{func:1,ret:-1,args:[P.y,[P.j,V.ak]]},{func:1,ret:P.af,args:[W.J,P.o,P.o,W.bT]},{func:1,ret:P.aK,args:[,]},{func:1,ret:-1,args:[W.aT]},{func:1,ret:P.af,args:[[P.j,D.U]]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.m=W.b1.prototype
C.D=W.b2.prototype
C.E=W.a0.prototype
C.H=J.a.prototype
C.a=J.aF.prototype
C.d=J.co.prototype
C.i=J.cp.prototype
C.c=J.by.prototype
C.b=J.aG.prototype
C.I=J.aH.prototype
C.q=J.fG.prototype
C.r=W.cU.prototype
C.l=J.bh.prototype
C.t=W.aT.prototype
C.u=W.bS.prototype
C.n=function getTagFallback(o) {
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
C.o=function(hooks) { return hooks; }

C.B=new P.fF()
C.f=new P.hG()
C.C=new P.hH()
C.e=new P.id()
C.h=new P.aB(0)
C.F=new P.aB(5e6)
C.G=new P.eO("element",!1,!1,!1)
C.J=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.o])
C.K=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.o])
C.L=H.b(u([]),[P.o])
C.p=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.y])
C.j=H.b(u(["bind","if","ref","repeat","syntax"]),[P.o])
C.k=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.o])})();(function staticFields(){$.a6=0
$.br=null
$.jr=null
$.kc=null
$.k8=null
$.kf=null
$.iB=null
$.iH=null
$.jg=null
$.bi=null
$.c2=null
$.c3=null
$.j8=!1
$.a2=C.e
$.T=[]
$.ai=null
$.iV=null
$.jy=null
$.jx=null
$.dg=P.jA(P.o,P.eJ)
$.jF=null
$.jI=null
$.bE=null
$.jO=null
$.jW=null
$.jZ=null
$.jY=null
$.hI=null
$.hJ=null
$.hK=null
$.jX=null
$.jH=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"mq","kj",function(){return H.kb("_$dart_dartClosure")})
u($,"mr","jl",function(){return H.kb("_$dart_js")})
u($,"ms","kk",function(){return H.ae(H.hs({
toString:function(){return"$receiver$"}}))})
u($,"mt","kl",function(){return H.ae(H.hs({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"mu","km",function(){return H.ae(H.hs(null))})
u($,"mv","kn",function(){return H.ae(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"my","kq",function(){return H.ae(H.hs(void 0))})
u($,"mz","kr",function(){return H.ae(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mx","kp",function(){return H.ae(H.jU(null))})
u($,"mw","ko",function(){return H.ae(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"mB","kt",function(){return H.ae(H.jU(void 0))})
u($,"mA","ks",function(){return H.ae(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"mO","jm",function(){return P.lh()})
u($,"mQ","ky",function(){return P.l5("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"mP","kx",function(){return P.jB(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.o)})
u($,"mI","kw",function(){return Z.a_(0)})
u($,"mC","ku",function(){return Z.a_(511)})
u($,"mK","aw",function(){return Z.a_(1)})
u($,"mJ","av",function(){return Z.a_(2)})
u($,"mE","au",function(){return Z.a_(4)})
u($,"mL","aX",function(){return Z.a_(8)})
u($,"mM","aY",function(){return Z.a_(16)})
u($,"mF","c5",function(){return Z.a_(32)})
u($,"mG","c6",function(){return Z.a_(64)})
u($,"mH","kv",function(){return Z.a_(96)})
u($,"mN","bp",function(){return Z.a_(128)})
u($,"mD","at",function(){return Z.a_(256)})
u($,"mp","ki",function(){return new V.ew(1e-9)})
u($,"mo","w",function(){return $.ki()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGL2RenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.bD,ArrayBufferView:H.bD,Float32Array:H.bC,Float64Array:H.bC,Int16Array:H.ft,Int32Array:H.fu,Int8Array:H.fv,Uint16Array:H.fw,Uint32Array:H.fx,Uint8ClampedArray:H.cD,CanvasPixelArray:H.cD,Uint8Array:H.fy,HTMLAudioElement:W.k,HTMLBRElement:W.k,HTMLBaseElement:W.k,HTMLButtonElement:W.k,HTMLContentElement:W.k,HTMLDListElement:W.k,HTMLDataElement:W.k,HTMLDataListElement:W.k,HTMLDetailsElement:W.k,HTMLDialogElement:W.k,HTMLEmbedElement:W.k,HTMLFieldSetElement:W.k,HTMLHRElement:W.k,HTMLHeadElement:W.k,HTMLHeadingElement:W.k,HTMLHtmlElement:W.k,HTMLIFrameElement:W.k,HTMLImageElement:W.k,HTMLInputElement:W.k,HTMLLIElement:W.k,HTMLLabelElement:W.k,HTMLLegendElement:W.k,HTMLLinkElement:W.k,HTMLMapElement:W.k,HTMLMediaElement:W.k,HTMLMenuElement:W.k,HTMLMetaElement:W.k,HTMLMeterElement:W.k,HTMLModElement:W.k,HTMLOListElement:W.k,HTMLObjectElement:W.k,HTMLOptGroupElement:W.k,HTMLOptionElement:W.k,HTMLOutputElement:W.k,HTMLParagraphElement:W.k,HTMLParamElement:W.k,HTMLPictureElement:W.k,HTMLPreElement:W.k,HTMLProgressElement:W.k,HTMLQuoteElement:W.k,HTMLScriptElement:W.k,HTMLShadowElement:W.k,HTMLSlotElement:W.k,HTMLSourceElement:W.k,HTMLSpanElement:W.k,HTMLStyleElement:W.k,HTMLTableCaptionElement:W.k,HTMLTableCellElement:W.k,HTMLTableDataCellElement:W.k,HTMLTableHeaderCellElement:W.k,HTMLTableColElement:W.k,HTMLTextAreaElement:W.k,HTMLTimeElement:W.k,HTMLTitleElement:W.k,HTMLTrackElement:W.k,HTMLUListElement:W.k,HTMLUnknownElement:W.k,HTMLVideoElement:W.k,HTMLDirectoryElement:W.k,HTMLFontElement:W.k,HTMLFrameElement:W.k,HTMLFrameSetElement:W.k,HTMLMarqueeElement:W.k,HTMLElement:W.k,AccessibleNodeList:W.e2,HTMLAnchorElement:W.e3,HTMLAreaElement:W.e4,Blob:W.c9,HTMLBodyElement:W.b1,HTMLCanvasElement:W.b2,CDATASection:W.ax,CharacterData:W.ax,Comment:W.ax,ProcessingInstruction:W.ax,Text:W.ax,CSSPerspective:W.eh,CSSCharsetRule:W.z,CSSConditionRule:W.z,CSSFontFaceRule:W.z,CSSGroupingRule:W.z,CSSImportRule:W.z,CSSKeyframeRule:W.z,MozCSSKeyframeRule:W.z,WebKitCSSKeyframeRule:W.z,CSSKeyframesRule:W.z,MozCSSKeyframesRule:W.z,WebKitCSSKeyframesRule:W.z,CSSMediaRule:W.z,CSSNamespaceRule:W.z,CSSPageRule:W.z,CSSRule:W.z,CSSStyleRule:W.z,CSSSupportsRule:W.z,CSSViewportRule:W.z,CSSStyleDeclaration:W.bt,MSStyleCSSProperties:W.bt,CSS2Properties:W.bt,CSSImageValue:W.X,CSSKeywordValue:W.X,CSSNumericValue:W.X,CSSPositionValue:W.X,CSSResourceValue:W.X,CSSUnitValue:W.X,CSSURLImageValue:W.X,CSSStyleValue:W.X,CSSMatrixComponent:W.a7,CSSRotation:W.a7,CSSScale:W.a7,CSSSkew:W.a7,CSSTranslation:W.a7,CSSTransformComponent:W.a7,CSSTransformValue:W.ej,CSSUnparsedValue:W.ek,DataTransferItemList:W.en,HTMLDivElement:W.a0,DOMException:W.eo,ClientRectList:W.ch,DOMRectList:W.ch,DOMRectReadOnly:W.ci,DOMStringList:W.ep,DOMTokenList:W.eq,Element:W.J,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.aD,FileList:W.eB,FileWriter:W.eC,HTMLFormElement:W.eG,Gamepad:W.aE,History:W.eM,HTMLCollection:W.bv,HTMLFormControlsCollection:W.bv,HTMLOptionsCollection:W.bv,KeyboardEvent:W.b8,Location:W.f1,MediaList:W.fl,MIDIInputMap:W.fm,MIDIOutputMap:W.fo,MimeType:W.aJ,MimeTypeArray:W.fq,PointerEvent:W.aa,MouseEvent:W.aa,DragEvent:W.aa,Document:W.C,DocumentFragment:W.C,HTMLDocument:W.C,ShadowRoot:W.C,XMLDocument:W.C,Attr:W.C,DocumentType:W.C,Node:W.C,NodeList:W.cE,RadioNodeList:W.cE,Plugin:W.aL,PluginArray:W.fI,RTCStatsReport:W.fQ,HTMLSelectElement:W.fT,SourceBuffer:W.aM,SourceBufferList:W.h3,SpeechGrammar:W.aN,SpeechGrammarList:W.h4,SpeechRecognitionResult:W.aO,Storage:W.h8,CSSStyleSheet:W.ao,StyleSheet:W.ao,HTMLTableElement:W.cU,HTMLTableRowElement:W.hc,HTMLTableSectionElement:W.hd,HTMLTemplateElement:W.bJ,TextTrack:W.aP,TextTrackCue:W.ap,VTTCue:W.ap,TextTrackCueList:W.hg,TextTrackList:W.hh,TimeRanges:W.hk,Touch:W.aQ,TouchEvent:W.bd,TouchList:W.ho,TrackDefaultList:W.hp,CompositionEvent:W.aR,FocusEvent:W.aR,TextEvent:W.aR,UIEvent:W.aR,URL:W.hF,VideoTrackList:W.hW,WheelEvent:W.aT,Window:W.bS,DOMWindow:W.bS,CSSRuleList:W.i4,ClientRect:W.d8,DOMRect:W.d8,GamepadList:W.i8,NamedNodeMap:W.ds,MozNamedAttrMap:W.ds,SpeechRecognitionResultList:W.il,StyleSheetList:W.im,SVGLength:P.b9,SVGLengthList:P.eX,SVGNumber:P.ba,SVGNumberList:P.fD,SVGPointList:P.fK,SVGScriptElement:P.bH,SVGStringList:P.hb,SVGAElement:P.i,SVGAnimateElement:P.i,SVGAnimateMotionElement:P.i,SVGAnimateTransformElement:P.i,SVGAnimationElement:P.i,SVGCircleElement:P.i,SVGClipPathElement:P.i,SVGDefsElement:P.i,SVGDescElement:P.i,SVGDiscardElement:P.i,SVGEllipseElement:P.i,SVGFEBlendElement:P.i,SVGFEColorMatrixElement:P.i,SVGFEComponentTransferElement:P.i,SVGFECompositeElement:P.i,SVGFEConvolveMatrixElement:P.i,SVGFEDiffuseLightingElement:P.i,SVGFEDisplacementMapElement:P.i,SVGFEDistantLightElement:P.i,SVGFEFloodElement:P.i,SVGFEFuncAElement:P.i,SVGFEFuncBElement:P.i,SVGFEFuncGElement:P.i,SVGFEFuncRElement:P.i,SVGFEGaussianBlurElement:P.i,SVGFEImageElement:P.i,SVGFEMergeElement:P.i,SVGFEMergeNodeElement:P.i,SVGFEMorphologyElement:P.i,SVGFEOffsetElement:P.i,SVGFEPointLightElement:P.i,SVGFESpecularLightingElement:P.i,SVGFESpotLightElement:P.i,SVGFETileElement:P.i,SVGFETurbulenceElement:P.i,SVGFilterElement:P.i,SVGForeignObjectElement:P.i,SVGGElement:P.i,SVGGeometryElement:P.i,SVGGraphicsElement:P.i,SVGImageElement:P.i,SVGLineElement:P.i,SVGLinearGradientElement:P.i,SVGMarkerElement:P.i,SVGMaskElement:P.i,SVGMetadataElement:P.i,SVGPathElement:P.i,SVGPatternElement:P.i,SVGPolygonElement:P.i,SVGPolylineElement:P.i,SVGRadialGradientElement:P.i,SVGRectElement:P.i,SVGSetElement:P.i,SVGStopElement:P.i,SVGStyleElement:P.i,SVGSVGElement:P.i,SVGSwitchElement:P.i,SVGSymbolElement:P.i,SVGTSpanElement:P.i,SVGTextContentElement:P.i,SVGTextElement:P.i,SVGTextPathElement:P.i,SVGTextPositioningElement:P.i,SVGTitleElement:P.i,SVGUseElement:P.i,SVGViewElement:P.i,SVGGradientElement:P.i,SVGComponentTransferFunctionElement:P.i,SVGFEDropShadowElement:P.i,SVGMPathElement:P.i,SVGElement:P.i,SVGTransform:P.be,SVGTransformList:P.hq,AudioBuffer:P.e6,AudioParamMap:P.e7,AudioTrackList:P.e9,AudioContext:P.b0,webkitAudioContext:P.b0,BaseAudioContext:P.b0,OfflineAudioContext:P.fE,SQLResultSetRowList:P.h6})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,SQLResultSetRowList:true})
H.cB.$nativeSuperclassTag="ArrayBufferView"
H.bU.$nativeSuperclassTag="ArrayBufferView"
H.bV.$nativeSuperclassTag="ArrayBufferView"
H.bC.$nativeSuperclassTag="ArrayBufferView"
H.bW.$nativeSuperclassTag="ArrayBufferView"
H.bX.$nativeSuperclassTag="ArrayBufferView"
H.cC.$nativeSuperclassTag="ArrayBufferView"
W.bY.$nativeSuperclassTag="EventTarget"
W.bZ.$nativeSuperclassTag="EventTarget"
W.c_.$nativeSuperclassTag="EventTarget"
W.c0.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(X.kd,[])
else X.kd([])})})()
//# sourceMappingURL=test.dart.js.map
