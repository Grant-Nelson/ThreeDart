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
a[c]=function(){a[c]=function(){H.md(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.j7"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.j7"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.j7(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={iX:function iX(){},
kz:function(){return new P.hb("No element")},
cW:function(a,b,c,d){if(c-b<=32)H.l_(a,b,c,d)
else H.kZ(a,b,c,d)},
l_:function(a,b,c,d){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.c(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.c(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.a7()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.c(a,q)
C.a.m(a,s,a[q])
s=q}C.a.m(a,s,t)}},
kZ:function(a2,a3,a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.d.a5(a4-a3+1,6),d=a3+e,c=a4-e,b=C.d.a5(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
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
if(typeof a1!=="number")return a1.a7()
if(a1>0){p=t
t=u
u=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.a7()
if(a1>0){p=q
q=r
r=p}a1=a5.$2(u,s)
if(typeof a1!=="number")return a1.a7()
if(a1>0){p=s
s=u
u=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.a7()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(u,r)
if(typeof a1!=="number")return a1.a7()
if(a1>0){p=r
r=u
u=p}a1=a5.$2(s,r)
if(typeof a1!=="number")return a1.a7()
if(a1>0){p=r
r=s
s=p}a1=a5.$2(t,q)
if(typeof a1!=="number")return a1.a7()
if(a1>0){p=q
q=t
t=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.a7()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.a7()
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
if(J.A(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.ac()
if(k<0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.m(a2,m,a2[o])
C.a.m(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a7()
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
if(typeof g!=="number")return g.ac()
if(g<0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.m(a2,m,a2[o])
C.a.m(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.a7()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.a7()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.ac()
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
if(!J.A(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.c(a2,n)
if(!J.A(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.m(a2,m,a2[o])
C.a.m(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.ac()
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
K:function K(a){this.a=a},
eI:function eI(){},
cG:function cG(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
fd:function fd(a,b,c){this.a=a
this.b=b
this.$ti=c},
fe:function fe(a,b){this.a=null
this.b=a
this.c=b},
i_:function i_(a,b,c){this.a=a
this.b=b
this.$ti=c},
i0:function i0(a,b){this.a=a
this.b=b},
cu:function cu(){},
hI:function hI(){},
d9:function d9(){},
e9:function(a){var u,t=H.me(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
lZ:function(a){return v.types[a]},
m3:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.U(a).$iv},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a3(a)
if(typeof u!=="string")throw H.f(H.b6(a))
return u},
bV:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bW:function(a){return H.kL(a)+H.jT(H.ce(a),0,null)},
kL:function(a){var u,t,s,r,q,p,o,n=J.U(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.F||!!n.$ic1){r=C.m(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.e9(t.length>1&&C.c.b4(t,0)===36?C.c.aL(t,1):t)},
jA:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
kU:function(a){var u,t,s,r=H.b([],[P.x])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.o)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.b6(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.d.b7(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.f(H.b6(s))}return H.jA(r)},
jB:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.b6(s))
if(s<0)throw H.f(H.b6(s))
if(s>65535)return H.kU(a)}return H.jA(a)},
kT:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.b7(u,10))>>>0,56320|u&1023)}throw H.f(P.al(a,0,1114111,null,null))},
bk:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
kS:function(a){var u=H.bk(a).getFullYear()+0
return u},
kQ:function(a){var u=H.bk(a).getMonth()+1
return u},
kM:function(a){var u=H.bk(a).getDate()+0
return u},
kN:function(a){var u=H.bk(a).getHours()+0
return u},
kP:function(a){var u=H.bk(a).getMinutes()+0
return u},
kR:function(a){var u=H.bk(a).getSeconds()+0
return u},
kO:function(a){var u=H.bk(a).getMilliseconds()+0
return u},
r:function(a){throw H.f(H.b6(a))},
c:function(a,b){if(a==null)J.bA(a)
throw H.f(H.bw(a,b))},
bw:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ae(!0,b,s,null)
u=J.bA(a)
if(!(b<0)){if(typeof u!=="number")return H.r(u)
t=b>=u}else t=!0
if(t)return P.F(b,a,s,null,u)
return P.fP(b,s)},
lR:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bl(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bl(a,c,!0,b,"end",u)
return new P.ae(!0,b,"end",null)},
b6:function(a){return new P.ae(!0,a,null,null)},
lN:function(a){if(typeof a!=="number")throw H.f(H.b6(a))
return a},
f:function(a){var u
if(a==null)a=new P.cP()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.k5})
u.name=""}else u.toString=H.k5
return u},
k5:function(){return J.a3(this.dartException)},
q:function(a){throw H.f(a)},
o:function(a){throw H.f(P.bE(a))},
am:function(a){var u,t,s,r,q,p
a=H.k3(a.replace(String({}),'$receiver$'))
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
jK:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
jv:function(a,b){return new H.fG(a,b==null?null:b.method)},
iY:function(a,b){var u=b==null,t=u?null:b.method
return new H.f3(a,t,u?null:b.receiver)},
iI:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.iJ(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.b7(t,16)&8191)===10)switch(s){case 438:return f.$1(H.iY(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.jv(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.k8()
q=$.k9()
p=$.ka()
o=$.kb()
n=$.ke()
m=$.kf()
l=$.kd()
$.kc()
k=$.kh()
j=$.kg()
i=r.ag(u)
if(i!=null)return f.$1(H.iY(u,i))
else{i=q.ag(u)
if(i!=null){i.method="call"
return f.$1(H.iY(u,i))}else{i=p.ag(u)
if(i==null){i=o.ag(u)
if(i==null){i=n.ag(u)
if(i==null){i=m.ag(u)
if(i==null){i=l.ag(u)
if(i==null){i=o.ag(u)
if(i==null){i=k.ag(u)
if(i==null){i=j.ag(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.jv(u,i))}}return f.$1(new H.hH(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.cY()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.ae(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.cY()
return a},
ja:function(a){var u
if(a==null)return new H.dO(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dO(a)},
lV:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.m(0,a[u],a[t])}return b},
m2:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(P.m("Unsupported number of arguments for wrapped closure"))},
bv:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.m2)
a.$identity=u
return u},
ku:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hc().constructor.prototype):Object.create(new H.bB(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ag
if(typeof t!=="number")return t.C()
$.ag=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.jk(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.kq(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.jk(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
kq:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.lZ,a)
if(typeof a=="function")if(b)return a
else{u=c?H.jj:H.iM
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.f("Error in functionType of tearoff")},
kr:function(a,b,c,d){var u=H.iM
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jk:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.kt(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.kr(t,!r,u,b)
if(t===0){r=$.ag
if(typeof r!=="number")return r.C()
$.ag=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bC
return new Function(r+H.e(q==null?$.bC=H.em("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ag
if(typeof r!=="number")return r.C()
$.ag=r+1
o+=r
r="return function("+o+"){return this."
q=$.bC
return new Function(r+H.e(q==null?$.bC=H.em("self"):q)+"."+H.e(u)+"("+o+");}")()},
ks:function(a,b,c,d){var u=H.iM,t=H.jj
switch(b?-1:a){case 0:throw H.f(H.kX("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
kt:function(a,b){var u,t,s,r,q,p,o,n=$.bC
if(n==null)n=$.bC=H.em("self")
u=$.ji
if(u==null)u=$.ji=H.em("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.ks(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.ag
if(typeof u!=="number")return u.C()
$.ag=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.ag
if(typeof u!=="number")return u.C()
$.ag=u+1
return new Function(n+u+"}")()},
j7:function(a,b,c,d,e,f,g){return H.ku(a,b,c,d,!!e,!!f,g)},
iM:function(a){return a.a},
jj:function(a){return a.c},
em:function(a){var u,t,s,r=new H.bB("self","target","receiver","name"),q=J.iV(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
m7:function(a,b){throw H.f(H.kp(a,H.e9(b.substring(2))))},
h:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.U(a)[b]
else u=!0
if(u)return a
H.m7(a,b)},
lT:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
kp:function(a,b){return new H.en("CastError: "+P.iS(a)+": type '"+H.e(H.lJ(a))+"' is not a subtype of type '"+b+"'")},
lJ:function(a){var u,t=J.U(a)
if(!!t.$ibD){u=H.lT(t)
if(u!=null)return H.m8(u)
return"Closure"}return H.bW(a)},
md:function(a){throw H.f(new P.ez(a))},
kX:function(a){return new H.fX(a)},
jY:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
ce:function(a){if(a==null)return
return a.$ti},
mK:function(a,b,c){return H.iG(a["$a"+H.e(c)],H.ce(b))},
lY:function(a,b,c,d){var u=H.iG(a["$a"+H.e(c)],H.ce(b))
return u==null?null:u[d]},
jZ:function(a,b,c){var u=H.iG(a["$a"+H.e(b)],H.ce(a))
return u==null?null:u[c]},
cf:function(a,b){var u=H.ce(a)
return u==null?null:u[b]},
m8:function(a){return H.b5(a,null)},
b5:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.e9(a[0].name)+H.jT(a,1,b)
if(typeof a=="function")return H.e9(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.c(b,t)
return H.e(b[t])}if('func' in a)return H.lh(a,b)
if('futureOr' in a)return"FutureOr<"+H.b5("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lh:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.b([],[P.t])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.c(a0,m)
p=C.c.C(p,a0[m])
l=u[q]
if(l!=null&&l!==P.Z)p+=" extends "+H.b5(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.b5(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.b5(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.b5(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.lU(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.b5(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
jT:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.ax("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.b5(p,c)}return"<"+u.i(0)+">"},
iG:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
mI:function(a,b,c){return a.apply(b,H.iG(J.U(b)["$a"+H.e(c)],H.ce(b)))},
mJ:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
m4:function(a){var u,t,s,r,q=$.k_.$1(a),p=$.iy[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.iD[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.jW.$2(a,q)
if(q!=null){p=$.iy[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.iD[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.iE(u)
$.iy[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.iD[q]=u
return u}if(s==="-"){r=H.iE(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.k1(a,u)
if(s==="*")throw H.f(P.jL(q))
if(v.leafTags[q]===true){r=H.iE(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.k1(a,u)},
k1:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jc(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
iE:function(a){return J.jc(a,!1,null,!!a.$iv)},
m5:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.iE(u)
else return J.jc(u,c,null,null)},
m0:function(){if(!0===$.jb)return
$.jb=!0
H.m1()},
m1:function(){var u,t,s,r,q,p,o,n
$.iy=Object.create(null)
$.iD=Object.create(null)
H.m_()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.k2.$1(q)
if(p!=null){o=H.m5(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
m_:function(){var u,t,s,r,q,p,o=C.u()
o=H.bu(C.v,H.bu(C.w,H.bu(C.n,H.bu(C.n,H.bu(C.x,H.bu(C.y,H.bu(C.z(C.m),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.k_=new H.iA(r)
$.jW=new H.iB(q)
$.k2=new H.iC(p)},
bu:function(a,b){return a(b)||b},
kB:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.f(new P.eU("Illegal RegExp pattern ("+String(p)+")",a))},
ma:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
lS:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
k3:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
k4:function(a,b,c){var u=H.mb(a,b,c)
return u},
mb:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.k3(b),'g'),H.lS(c))},
hy:function hy(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fG:function fG(a,b){this.a=a
this.b=b},
f3:function f3(a,b,c){this.a=a
this.b=b
this.c=c},
hH:function hH(a){this.a=a},
iJ:function iJ(a){this.a=a},
dO:function dO(a){this.a=a
this.b=null},
bD:function bD(){},
hi:function hi(){},
hc:function hc(){},
bB:function bB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
en:function en(a){this.a=a},
fX:function fX(a){this.a=a},
I:function I(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
f6:function f6(a,b){this.a=a
this.b=b
this.c=null},
cF:function cF(a,b){this.a=a
this.$ti=b},
f7:function f7(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
iA:function iA(a){this.a=a},
iB:function iB(a){this.a=a},
iC:function iC(a){this.a=a},
f2:function f2(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bs:function(a){return a},
b4:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.bw(b,a))},
lg:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.f(H.lR(a,b,c))
return b},
bS:function bS(){},
cL:function cL(){},
bR:function bR(){},
cM:function cM(){},
fA:function fA(){},
fB:function fB(){},
fC:function fC(){},
fD:function fD(){},
fE:function fE(){},
cN:function cN(){},
fF:function fF(){},
c3:function c3(){},
c4:function c4(){},
c5:function c5(){},
c6:function c6(){},
lU:function(a){return J.jp(a?Object.keys(a):[],null)},
me:function(a){return v.mangledGlobalNames[a]},
m6:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jc:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iz:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.jb==null){H.m0()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.f(P.jL("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.je()]
if(r!=null)return r
r=H.m4(a)
if(r!=null)return r
if(typeof a=="function")return C.H
u=Object.getPrototypeOf(a)
if(u==null)return C.p
if(u===Object.prototype)return C.p
if(typeof s=="function"){Object.defineProperty(s,$.je(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
kA:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.f(P.jh(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.f(P.al(a,0,4294967295,"length",null))
return J.jp(new Array(a),b)},
jp:function(a,b){return J.iV(H.b(a,[b]))},
iV:function(a){a.fixed$length=Array
return a},
U:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cA.prototype
return J.cz.prototype}if(typeof a=="string")return J.bf.prototype
if(a==null)return J.cB.prototype
if(typeof a=="boolean")return J.f1.prototype
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aP.prototype
return a}if(a instanceof P.Z)return a
return J.iz(a)},
j8:function(a){if(typeof a=="string")return J.bf.prototype
if(a==null)return a
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aP.prototype
return a}if(a instanceof P.Z)return a
return J.iz(a)},
j9:function(a){if(a==null)return a
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aP.prototype
return a}if(a instanceof P.Z)return a
return J.iz(a)},
lW:function(a){if(typeof a=="number")return J.bL.prototype
if(typeof a=="string")return J.bf.prototype
if(a==null)return a
if(!(a instanceof P.Z))return J.c1.prototype
return a},
lX:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aP.prototype
return a}if(a instanceof P.Z)return a
return J.iz(a)},
A:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.U(a).n(a,b)},
ea:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.m3(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.j8(a).h(a,b)},
km:function(a,b,c,d){return J.lX(a).fi(a,b,c,d)},
iK:function(a,b){return J.lW(a).fs(a,b)},
jg:function(a,b){return J.j9(a).E(a,b)},
kn:function(a,b){return J.j9(a).J(a,b)},
b8:function(a){return J.U(a).gG(a)},
bz:function(a){return J.j9(a).gT(a)},
bA:function(a){return J.j8(a).gj(a)},
a3:function(a){return J.U(a).i(a)},
a:function a(){},
f1:function f1(){},
cB:function cB(){},
cC:function cC(){},
fK:function fK(){},
c1:function c1(){},
aP:function aP(){},
aO:function aO(a){this.$ti=a},
iW:function iW(a){this.$ti=a},
X:function X(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bL:function bL(){},
cA:function cA(){},
cz:function cz(){},
bf:function bf(){}},P={
l7:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.lK()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bv(new P.i2(s),1)).observe(u,{childList:true})
return new P.i1(s,u,t)}else if(self.setImmediate!=null)return P.lL()
return P.lM()},
l8:function(a){self.scheduleImmediate(H.bv(new P.i3(a),0))},
l9:function(a){self.setImmediate(H.bv(new P.i4(a),0))},
la:function(a){P.j0(C.j,a)},
j0:function(a,b){var u=C.d.a5(a.a,1000)
return P.ld(u<0?0:u,b)},
jJ:function(a,b){var u=C.d.a5(a.a,1000)
return P.le(u<0?0:u,b)},
ld:function(a,b){var u=new P.dU()
u.dJ(a,b)
return u},
le:function(a,b){var u=new P.dU()
u.dK(a,b)
return u},
lD:function(){var u,t
for(;u=$.bt,u!=null;){$.cd=null
t=u.b
$.bt=t
if(t==null)$.cc=null
u.a.$0()}},
lI:function(){$.j5=!0
try{P.lD()}finally{$.cd=null
$.j5=!1
if($.bt!=null)$.jf().$1(P.jX())}},
lG:function(a){var u=new P.dg(a)
if($.bt==null){$.bt=$.cc=u
if(!$.j5)$.jf().$1(P.jX())}else $.cc=$.cc.b=u},
lH:function(a){var u,t,s=$.bt
if(s==null){P.lG(a)
$.cd=$.cc
return}u=new P.dg(a)
t=$.cd
if(t==null){u.b=s
$.bt=$.cd=u}else{u.b=t.b
$.cd=t.b=u
if(u.b==null)$.cc=u}},
jI:function(a,b){var u=$.ad
if(u===C.e)return P.j0(a,b)
return P.j0(a,u.fp(b))},
l4:function(a,b){var u=$.ad
if(u===C.e)return P.jJ(a,b)
return P.jJ(a,u.cK(b,P.d3))},
jU:function(a,b,c,d,e){var u={}
u.a=d
P.lH(new P.iw(u,e))},
lE:function(a,b,c,d){var u,t=$.ad
if(t===c)return d.$0()
$.ad=c
u=t
try{t=d.$0()
return t}finally{$.ad=u}},
lF:function(a,b,c,d,e){var u,t=$.ad
if(t===c)return d.$1(e)
$.ad=c
u=t
try{t=d.$1(e)
return t}finally{$.ad=u}},
i2:function i2(a){this.a=a},
i1:function i1(a,b,c){this.a=a
this.b=b
this.c=c},
i3:function i3(a){this.a=a},
i4:function i4(a){this.a=a},
dU:function dU(){this.c=0},
ip:function ip(a,b){this.a=a
this.b=b},
io:function io(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dg:function dg(a){this.a=a
this.b=null},
d_:function d_(){},
hf:function hf(){},
d3:function d3(){},
ir:function ir(){},
iw:function iw(a,b){this.a=a
this.b=b},
ih:function ih(){},
ii:function ii(a,b){this.a=a
this.b=b},
ij:function ij(a,b,c){this.a=a
this.b=b
this.c=c},
kD:function(a,b){return new H.I([a,b])},
kE:function(a){return H.lV(a,new H.I([null,null]))},
kF:function(a){return new P.id([a])},
j4:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
lc:function(a,b){var u=new P.dw(a,b)
u.c=a.e
return u},
ky:function(a,b,c){var u,t
if(P.j6(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.t])
$.a_.push(a)
try{P.li(a,u)}finally{if(0>=$.a_.length)return H.c($.a_,-1)
$.a_.pop()}t=P.jE(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
iU:function(a,b,c){var u,t
if(P.j6(a))return b+"..."+c
u=new P.ax(b)
$.a_.push(a)
try{t=u
t.a=P.jE(t.a,a,", ")}finally{if(0>=$.a_.length)return H.c($.a_,-1)
$.a_.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
j6:function(a){var u,t
for(u=$.a_.length,t=0;t<u;++t)if(a===$.a_[t])return!0
return!1},
li:function(a,b){var u,t,s,r,q,p,o,n=a.gT(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.w())return
u=H.e(n.gI(n))
b.push(u)
m+=u.length+2;++l}if(!n.w()){if(l<=5)return
if(0>=b.length)return H.c(b,-1)
t=b.pop()
if(0>=b.length)return H.c(b,-1)
s=b.pop()}else{r=n.gI(n);++l
if(!n.w()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.c(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gI(n);++l
for(;n.w();r=q,q=p){p=n.gI(n);++l
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
jr:function(a){var u,t={}
if(P.j6(a))return"{...}"
u=new P.ax("")
try{$.a_.push(a)
u.a+="{"
t.a=!0
J.kn(a,new P.fc(t,u))
u.a+="}"}finally{if(0>=$.a_.length)return H.c($.a_,-1)
$.a_.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
id:function id(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ie:function ie(a){this.a=a
this.c=this.b=null},
dw:function dw(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
f8:function f8(){},
p:function p(){},
fb:function fb(){},
fc:function fc(a,b){this.a=a
this.b=b},
as:function as(){},
ik:function ik(){},
dx:function dx(){},
ep:function ep(){},
et:function et(){},
eJ:function eJ(){},
hL:function hL(){},
hM:function hM(){},
iq:function iq(a){this.b=0
this.c=a},
kx:function(a){if(a instanceof H.bD)return a.i(0)
return"Instance of '"+H.e(H.bW(a))+"'"},
kG:function(a,b,c){var u,t,s=J.kA(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
jq:function(a,b,c){var u,t=H.b([],[c])
for(u=J.bz(a);u.w();)t.push(u.gI(u))
if(b)return t
return J.iV(t)},
j_:function(a){var u,t
if(a.constructor===Array){u=a.length
t=P.jD(0,null,u)
return H.jB(t<u?C.a.ce(a,0,t):a)}return P.l0(a,0,null)},
l0:function(a,b,c){var u,t,s=J.bz(a)
for(u=0;u<b;++u)if(!s.w())throw H.f(P.al(b,0,u,null,null))
t=[]
for(;s.w();)t.push(s.gI(s))
return H.jB(t)},
kV:function(a){return new H.f2(a,H.kB(a,!1,!0,!1,!1,!1))},
jE:function(a,b,c){var u=J.bz(b)
if(!u.w())return a
if(c.length===0){do a+=H.e(u.gI(u))
while(u.w())}else{a+=H.e(u.gI(u))
for(;u.w();)a=a+c+H.e(u.gI(u))}return a},
lf:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.o){u=$.kl().b
u=u.test(b)}else u=!1
if(u)return b
t=C.B.ft(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.c(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.kT(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
kv:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
kw:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cp:function(a){if(a>=10)return""+a
return"0"+a},
jm:function(a){return new P.aG(1000*a)},
iS:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a3(a)
if(typeof a==="string")return JSON.stringify(a)
return P.kx(a)},
ko:function(a){return new P.ae(!1,null,null,a)},
jh:function(a,b,c){return new P.ae(!0,a,b,c)},
fP:function(a,b){return new P.bl(null,null,!0,a,b,"Value not in range")},
al:function(a,b,c,d,e){return new P.bl(b,c,!0,a,d,"Invalid value")},
jD:function(a,b,c){if(0>a||a>c)throw H.f(P.al(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.f(P.al(b,a,c,"end",null))
return b}return c},
jC:function(a,b){if(typeof a!=="number")return a.ac()
if(a<0)throw H.f(P.al(a,0,null,b,null))},
F:function(a,b,c,d,e){var u=e==null?J.bA(b):e
return new P.f_(u,!0,a,c,"Index out of range")},
a2:function(a){return new P.hJ(a)},
jL:function(a){return new P.hG(a)},
bE:function(a){return new P.es(a)},
m:function(a){return new P.dp(a)},
jd:function(a){H.m6(a)},
b7:function b7(){},
a5:function a5(a,b){this.a=a
this.b=b},
G:function G(){},
aG:function aG(a){this.a=a},
eG:function eG(){},
eH:function eH(){},
bd:function bd(){},
cP:function cP(){},
ae:function ae(a,b,c,d){var _=this
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
f_:function f_(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hJ:function hJ(a){this.a=a},
hG:function hG(a){this.a=a},
hb:function hb(a){this.a=a},
es:function es(a){this.a=a},
fJ:function fJ(){},
cY:function cY(){},
ez:function ez(a){this.a=a},
dp:function dp(a){this.a=a},
eU:function eU(a,b){this.a=a
this.b=b},
x:function x(){},
j:function j(){},
f0:function f0(){},
bi:function bi(){},
cI:function cI(){},
aS:function aS(){},
ab:function ab(){},
Z:function Z(){},
t:function t(){},
ax:function ax(a){this.a=a},
lQ:function(a){var u,t=J.U(a)
if(!!t.$iaL){u=t.gcR(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.dZ(a.data,a.height,a.width)},
lP:function(a){if(a instanceof P.dZ)return{data:a.a,height:a.b,width:a.c}
return a},
aA:function(a){var u,t,s,r,q
if(a==null)return
u=P.kD(P.t,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.o)(t),++r){q=t[r]
u.m(0,q,a[q])}return u},
lO:function(a){var u={}
a.J(0,new P.ix(u))
return u},
dZ:function dZ(a,b,c){this.a=a
this.b=b
this.c=c},
ix:function ix(a){this.a=a},
eQ:function eQ(a,b){this.a=a
this.b=b},
eR:function eR(){},
eS:function eS(){},
ic:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lb:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ig:function ig(){},
a8:function a8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bh:function bh(){},
f5:function f5(){},
bj:function bj(){},
fH:function fH(){},
fO:function fO(){},
hg:function hg(){},
k:function k(){},
bo:function bo(){},
hx:function hx(){},
du:function du(){},
dv:function dv(){},
dF:function dF(){},
dG:function dG(){},
dQ:function dQ(){},
dR:function dR(){},
dX:function dX(){},
dY:function dY(){},
eg:function eg(){},
eh:function eh(){},
ei:function ei(a){this.a=a},
ej:function ej(){},
b9:function b9(){},
fI:function fI(){},
dh:function dh(){},
cT:function cT(){},
ha:function ha(){},
dM:function dM(){},
dN:function dN(){}},W={
iO:function(){var u=document.createElement("canvas")
return u},
iR:function(a){return"wheel"},
ib:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jS:function(a,b,c,d){var u=W.ib(W.ib(W.ib(W.ib(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
P:function(a,b,c,d){var u=W.jV(new W.i9(c),W.i)
if(u!=null&&!0)J.km(a,b,u,!1)
return new W.i8(a,b,u,!1)},
jV:function(a,b){var u=$.ad
if(u===C.e)return a
return u.cK(a,b)},
l:function l(){},
eb:function eb(){},
ed:function ed(){},
ee:function ee(){},
ck:function ck(){},
ba:function ba(){},
aF:function aF(){},
ev:function ev(){},
D:function D(){},
bG:function bG(){},
ew:function ew(){},
a4:function a4(){},
ah:function ah(){},
ex:function ex(){},
ey:function ey(){},
eA:function eA(){},
eD:function eD(){},
cr:function cr(){},
cs:function cs(){},
eE:function eE(){},
eF:function eF(){},
i6:function i6(a,b){this.a=a
this.b=b},
Y:function Y(){},
i:function i(){},
d:function d(){},
aJ:function aJ(){},
eO:function eO(){},
eP:function eP(){},
eT:function eT(){},
aK:function aK(){},
eY:function eY(){},
bJ:function bJ(){},
aL:function aL(){},
bK:function bK(){},
bg:function bg(){},
f9:function f9(){},
ft:function ft(){},
fu:function fu(){},
fv:function fv(a){this.a=a},
fw:function fw(){},
fx:function fx(a){this.a=a},
aR:function aR(){},
fy:function fy(){},
ak:function ak(){},
i5:function i5(a){this.a=a},
H:function H(){},
cO:function cO(){},
aT:function aT(){},
fL:function fL(){},
fV:function fV(){},
fW:function fW(a){this.a=a},
fY:function fY(){},
aU:function aU(){},
h7:function h7(){},
aV:function aV(){},
h8:function h8(){},
aW:function aW(){},
hd:function hd(){},
he:function he(a){this.a=a},
ay:function ay(){},
aX:function aX(){},
az:function az(){},
hj:function hj(){},
hk:function hk(){},
hs:function hs(){},
aZ:function aZ(){},
bn:function bn(){},
hv:function hv(){},
hw:function hw(){},
b_:function b_(){},
hK:function hK(){},
hZ:function hZ(){},
b3:function b3(){},
c2:function c2(){},
i7:function i7(){},
dj:function dj(){},
ia:function ia(){},
dC:function dC(){},
il:function il(){},
im:function im(){},
i8:function i8(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
i9:function i9(a){this.a=a},
E:function E(){},
cv:function cv(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
di:function di(){},
dk:function dk(){},
dl:function dl(){},
dm:function dm(){},
dn:function dn(){},
dq:function dq(){},
dr:function dr(){},
ds:function ds(){},
dt:function dt(){},
dy:function dy(){},
dz:function dz(){},
dA:function dA(){},
dB:function dB(){},
dD:function dD(){},
dE:function dE(){},
dH:function dH(){},
dI:function dI(){},
dJ:function dJ(){},
c7:function c7(){},
c8:function c8(){},
dK:function dK(){},
dL:function dL(){},
dP:function dP(){},
dS:function dS(){},
dT:function dT(){},
c9:function c9(){},
ca:function ca(){},
dV:function dV(){},
dW:function dW(){},
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
T:function(a){var u=new T.fZ()
u.dE(a)
return u},
ec:function ec(){},
cy:function cy(){},
cJ:function cJ(){},
au:function au(){this.a=null},
fZ:function fZ(){this.a=null},
jF:function(a){var u=new T.hm()
u.a=0
u.b=a
u.d=u.c=!1
u.x=u.r=u.f=u.e=0
return u},
bm:function bm(){},
hl:function hl(){},
hm:function hm(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hn:function hn(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hp:function hp(a){var _=this
_.a=a
_.e=_.d=_.c=null},
hq:function hq(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},R={cZ:function cZ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},d4:function d4(a,b,c){this.a=a
this.b=b
this.c=c},d5:function d5(a){this.b=a
this.c=null},ht:function ht(){this.c=this.b=this.a=null},d7:function d7(a){this.b=a
this.a=this.c=null}},O={
eq:function(a){var u=new O.aq([a])
u.b3(a)
return u},
aq:function aq(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bP:function bP(){this.b=this.a=null},
jo:function(a,b){var u,t,s,r=new O.cx()
r.r=0
r.sc4(null)
r.sbC(null)
if(a==null){u=$.jM
if(u==null){u=new V.B(1,0)
$.jM=u
t=u}else t=u}else t=a
if(!J.A(r.d,t)){s=r.d
r.d=t
u=new D.n("blurDirection",s,t)
u.b=!0
r.p(u)}r.scP(b)
r.sbD(null)
r.sbE(0)
return r},
jG:function(a,b){var u,t,s,r=new O.aY(),q=r.a
r.a=b
b.gl().k(0,r.gX())
u=new D.n("texture",q,r.a)
u.b=!0
r.p(u)
t=V.aQ()
if(!J.A(r.b,t)){q=r.b
r.b=t
u=new D.n("colorMatrix",q,t)
u.b=!0
r.p(u)}s=V.fQ()
if(!J.A(r.c,s)){q=r.c
r.c=s
u=new D.n("source",q,s)
u.b=!0
r.p(u)}if(!J.A(r.d,a)){q=r.d
r.d=a
u=new D.n("destination",q,a)
u.b=!0
r.p(u)}if(r.e!==!1){r.e=!1
u=new D.n("flip",!0,!1)
u.b=!0
r.p(u)}r.f=null
return r},
eB:function eB(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cx:function cx(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cK:function cK(){var _=this
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
bN:function bN(){},
fh:function fh(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
ai:function ai(a,b){var _=this
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
cV:function cV(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
d0:function d0(){},
d1:function d1(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
aY:function aY(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null}},E={
eK:function(a){var u,t=new E.ar()
t.a=""
t.b=!0
u=O.eq(E.ar)
t.y=u
u.az(t.gfJ(),t.gfM())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.scb(0,a)
t.sda(null)
return t},
kW:function(a,b){var u=new E.fR(a)
u.dD(a,b)
return u},
l3:function(a,b,c,d,e){var u,t,s=J.U(a)
if(!!s.$iba)return E.jH(a,!0,!0,!0,!1)
u=W.iO()
t=u.style
t.width="100%"
t.height="100%"
s.gcN(a).k(0,u)
return E.jH(u,!0,!0,!0,!1)},
jH:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.d2(),p=C.f.c8(a,"webgl2",P.kE(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.q(P.m("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.kW(p,a)
u=new T.hp(p)
p.getParameter(3379)
u.c=p.getParameter(34076)
u.e=u.d=0
q.f=u
u=new X.da(a)
t=new X.f4()
t.c=new X.a7(!1,!1,!1)
t.d=P.kF(P.x)
u.b=t
t=new X.fz(u)
t.f=0
t.r=V.av()
t.x=V.av()
t.ch=t.Q=1
u.c=t
t=new X.fa(u)
t.r=0
t.x=V.av()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hu(u)
t.f=V.av()
t.r=V.av()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.b([],[[P.d_,P.Z]])
u.z=t
s=document
t.push(W.P(s,"contextmenu",u.gek(),!1))
u.z.push(W.P(a,"focus",u.gev(),!1))
u.z.push(W.P(a,"blur",u.gee(),!1))
u.z.push(W.P(s,"keyup",u.gez(),!1))
u.z.push(W.P(s,"keydown",u.gex(),!1))
u.z.push(W.P(a,"mousedown",u.geD(),!1))
u.z.push(W.P(a,"mouseup",u.geH(),!1))
u.z.push(W.P(a,r,u.geF(),!1))
t=u.z
W.iR(a)
W.iR(a)
t.push(W.P(a,W.iR(a),u.geJ(),!1))
u.z.push(W.P(s,r,u.gem(),!1))
u.z.push(W.P(s,"mouseup",u.geo(),!1))
u.z.push(W.P(s,"pointerlockchange",u.geL(),!1))
u.z.push(W.P(a,"touchstart",u.gf0(),!1))
u.z.push(W.P(a,"touchend",u.geX(),!1))
u.z.push(W.P(a,"touchmove",u.geZ(),!1))
q.r=u
q.Q=!0
q.ch=!1
q.cx=new P.a5(Date.now(),!1)
q.cy=0
q.cC()
return q},
el:function el(){},
ar:function ar(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fR:function fR(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fS:function fS(a){this.a=a},
fT:function fT(a){this.a=a},
fU:function fU(a){this.a=a},
d2:function d2(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
hr:function hr(a){this.a=a}},Z={
j3:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.bs(c)),35044)
a.bindBuffer(b,null)
return new Z.df(b,u)},
aa:function(a){return new Z.ao(a)},
df:function df(a,b){this.a=a
this.b=b},
cl:function cl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
b2:function b2(a){this.a=a},
af:function af(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
be:function be(a,b,c){this.a=a
this.b=b
this.c=c},
ao:function ao(a){this.a=a}},D={
w:function(){var u=new D.aH()
u.d=0
return u},
eo:function eo(){},
aH:function aH(){var _=this
_.d=_.c=_.b=_.a=null},
eM:function eM(a){this.a=a},
eN:function eN(a){this.a=a},
M:function M(){this.b=null},
aM:function aM(){this.b=null},
aN:function aN(){this.b=null},
n:function n(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
jl:function(a,b){var u,t,s=new D.bc()
s.c=new V.L(1,1,1)
s.a=V.l6()
s.d=V.j2()
s.e=V.l5()
u=s.b
s.b=b
b.gl().k(0,s.gdH())
t=new D.n("mover",u,s.b)
t.b=!0
s.an(t)
if(!s.c.n(0,a)){u=s.c
s.c=a
t=new D.n("color",u,a)
t.b=!0
s.an(t)}return s},
bc:function bc(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a0:function a0(){},
cE:function cE(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
fM:function fM(){},
h9:function h9(){}},X={cm:function cm(a,b){this.a=a
this.b=b},cD:function cD(a,b){this.a=a
this.b=b},f4:function f4(){var _=this
_.d=_.c=_.b=_.a=null},cH:function cH(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fa:function fa(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},a7:function a7(a,b,c){this.a=a
this.b=b
this.c=c},at:function at(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},fz:function fz(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bQ:function bQ(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fN:function fN(){},d6:function d6(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},hu:function hu(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},da:function da(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
iL:function(a,b,c,d){var u,t,s,r,q=new X.ek()
q.d=q.c=q.b=q.a=512
q.e=!0
q.f=!1
q.x=q.r=1
q.ch=T.jF(null)
q.cx=new V.R(0,0,0,1)
q.cy=!0
q.db=2000
q.dx=!0
q.dy=V.fQ()
q.sai(0,512)
q.saf(0,512)
u=new V.R(0,0,0,1)
if(!q.cx.n(0,u)){t=q.cx
q.cx=u
s=new D.n("color",t,u)
s.b=!0
q.Y(s)}if(q.cy!==d){q.cy=d
s=new D.n("clearColor",!d,d)
s.b=!0
q.Y(s)}s=q.db
if(!(Math.abs(s-2000)<$.u().a)){q.db=2000
s=new D.n("depth",s,2000)
s.b=!0
q.Y(s)}if(!q.f){q.f=!0
s=new D.n("autoResize",!1,!0)
s.b=!0
q.Y(s)}s=q.r
if(!(Math.abs(s-b)<$.u().a)){q.r=b
s=new D.n("autoResizeScalarX",s,b)
s.b=!0
q.Y(s)}s=q.x
if(!(Math.abs(s-c)<$.u().a)){q.x=c
s=new D.n("autoResizeScalarY",s,c)
s.b=!0
q.Y(s)}r=V.fQ()
if(!J.A(q.dy,r)){t=q.dy
q.dy=r
s=new D.n("region",t,r)
s.b=!0
q.Y(s)}return q},
iT:function(a,b){var u=new X.eV(),t=new V.R(0,0,0,1)
u.a=t
u.b=a
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=V.fQ()
u.r=t
return u},
jw:function(a){var u,t,s=new X.cQ()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gl().k(0,s.gdL())
t=new D.n("mover",u,s.b)
t.b=!0
s.Y(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.u().a)){s.c=1.0471975511965976
t=new D.n("fov",t,1.0471975511965976)
t.b=!0
s.Y(t)}t=s.d
if(!(Math.abs(t-0.1)<$.u().a)){s.d=0.1
t=new D.n("near",t,0.1)
t.b=!0
s.Y(t)}t=s.e
if(!(Math.abs(t-2000)<$.u().a)){s.e=2000
t=new D.n("far",t,2000)
t.b=!0
s.Y(t)}return s},
ek:function ek(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iN:function iN(){},
eV:function eV(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eZ:function eZ(){this.b=this.a=null},
cQ:function cQ(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
hh:function hh(){}},V={
mf:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.b.dq(a-b,u)
return(a<0?a+u:a)+b},
z:function(a,b,c){if(a==null)return C.c.ah("null",c)
return C.c.ah(C.b.dl(Math.abs(a-0)<$.u().a?0:a,b),c+b+1)},
bx:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.t])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.o)(a),++s){r=V.z(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.c(o,q)
u=C.c.ah(o[q],t)
p=o.length
if(q>=p)return H.c(o,q)
o[q]=u}return o},
cg:function(a){return C.b.h4(Math.pow(2,C.G.bS(Math.log(H.lN(a))/Math.log(2))))},
aQ:function(){var u=$.fs
return u==null?$.fs=V.aj(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aj:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.a6(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kK:function(a,b,c){return V.aj(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
kJ:function(a,b,c){return V.aj(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1)},
ju:function(a,b,c,d){d=V.j2()
return V.jt(V.jz(),d,new V.y(a,b,c))},
jt:function(a,b,c){var u=c.t(0,Math.sqrt(c.B(c))),t=b.aU(u),s=t.t(0,Math.sqrt(t.B(t))),r=u.aU(s),q=new V.y(a.a,a.b,a.c),p=s.O(0).B(q),o=r.O(0).B(q),n=u.O(0).B(q)
return V.aj(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
av:function(){var u=$.jy
return u==null?$.jy=new V.V(0,0):u},
jz:function(){var u=$.bU
return u==null?$.bU=new V.W(0,0,0):u},
fQ:function(){var u=$.bY
return u==null?$.bY=V.bX(0,0,1,1):u},
bX:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cS(a,b,c,d)},
de:function(){var u=$.jQ
return u==null?$.jQ=new V.y(0,0,0):u},
l5:function(){var u=$.hN
return u==null?$.hN=new V.y(-1,0,0):u},
j2:function(){var u=$.hO
return u==null?$.hO=new V.y(0,1,0):u},
l6:function(){var u=$.hP
return u==null?$.hP=new V.y(0,0,1):u},
L:function L(a,b,c){this.a=a
this.b=b
this.c=c},
R:function R(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eL:function eL(a){this.a=a},
bO:function bO(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
a6:function a6(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
W:function W(a,b,c){this.a=a
this.b=b
this.c=c},
aw:function aw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cS:function cS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
B:function B(a,b){this.a=a
this.b=b},
y:function y(a,b,c){this.a=a
this.b=b
this.c=c},
bq:function bq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
m9:function(a){P.l4(C.E,new V.iF(a))},
kY:function(a){var u=new V.h3()
u.dF(a,!0)
return u},
iF:function iF(a){this.a=a},
h3:function h3(){this.b=this.a=null},
h5:function h5(a){this.a=a},
h4:function h4(a){this.a=a}},U={
iP:function(){var u=new U.er()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
iQ:function(a){var u=new U.bF()
u.a=a
return u},
er:function er(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bF:function bF(){this.b=this.a=null},
bI:function bI(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a1:function a1(){},
db:function db(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dc:function dc(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dd:function dd(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
eu:function(a,b){var u,t,s,r,q,p,o,n,m,l=null,k=new M.co()
k.a=!0
u=E.eK(l)
t=F.iZ()
s=t.a
r=new V.y(-1,-1,1)
r=r.t(0,Math.sqrt(r.B(r)))
q=s.b9(new V.aw(1,2,4,6),new V.R(1,0,0,1),new V.W(-1,-1,0),new V.V(0,1),r,l)
s=t.a
r=new V.y(1,-1,1)
r=r.t(0,Math.sqrt(r.B(r)))
p=s.b9(new V.aw(0,3,4,6),new V.R(0,0,1,1),new V.W(1,-1,0),new V.V(1,1),r,l)
s=t.a
r=new V.y(1,1,1)
r=r.t(0,Math.sqrt(r.B(r)))
o=s.b9(new V.aw(0,2,5,6),new V.R(0,1,0,1),new V.W(1,1,0),new V.V(1,0),r,l)
s=t.a
r=V.av()
n=new V.y(-1,1,1)
n=n.t(0,Math.sqrt(n.B(n)))
m=s.b9(new V.aw(0,2,4,7),new V.R(1,1,0,1),new V.W(-1,1,0),r,n,l)
t.d.fj(H.b([q,p,o,m],[F.br]))
t.as()
u.scb(0,t)
k.e=u
k.saG(l)
k.sal(0,a)
k.sax(b)
return k},
jn:function(){var u,t,s=new M.ct()
s.a=!0
u=O.eq(E.ar)
s.e=u
u.az(s.geg(),s.gei())
s.y=s.x=s.r=s.f=null
t=X.iT(!0,null)
s.saG(null)
s.sal(0,t)
s.sax(null)
return s},
cn:function cn(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
co:function co(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ct:function ct(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cw:function cw(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a9:function a9(){}},A={
kH:function(a,b){var u=a.aW,t=new A.ff(b,u)
t.aM(b,u)
t.dC(a,b)
return t},
kI:function(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="MaterialLight_"+a1.gaj(a1)+a2.gaj(a2)+a3.gaj(a3)+a4.gaj(a4)+a5.gaj(a5)+a6.gaj(a6)+a7.gaj(a7)+a8.gaj(a8)+a9.gaj(a9)+"_"
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
f=$.Q()
if(k){u=$.aD()
f=new Z.ao(f.a|u.a)}if(j){u=$.aC()
f=new Z.ao(f.a|u.a)}if(i){u=$.aE()
f=new Z.ao(f.a|u.a)}if(h){u=$.aB()
f=new Z.ao(f.a|u.a)}return new A.fi(a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,s,p,l,p,r,g,!0,!1,!1,o,r,m,k,j,!1,i,h,!1,b,c,!1,a0,e.charCodeAt(0)==0?e:e,f)},
iu:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.c)a.a+="uniform samplerCube "+c+"Txt;\n"},
iv:function(a,b,c){var u,t="Txt, txtCube).rgb;\n"
A.iu(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.iH(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.c){u+="   "+c+"Color = "+c+"Clr*textureCube("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.c){u+="   "+c+"Color = textureCube("+c+t
a.a=u}a.a=u+"}\n"},
lm:function(a,b){var u,t=a.a,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.iu(b,t,"emission")
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
lj:function(a,b){var u,t=a.b
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.iv(b,t,"ambient")
b.a+="\n"},
lk:function(a,b){var u,t=a.c
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.iv(b,t,"diffuse")
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
ln:function(a,b){var u,t=a.d
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.iv(b,t,"invDiffuse")
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
lt:function(a,b){var u,t=a.e
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.iv(b,t,"specular")
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
lp:function(a,b){var u,t,s
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
lr:function(a,b){var u,t=a.r,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.iu(b,t,"reflect")
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
ls:function(a,b){var u,t=a.x,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.iu(b,t,"refract")
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
ll:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.e(u)
s=A.iH(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.am()
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
lq:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.e(u)
s=A.iH(t)
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
if(typeof u!=="number")return u.am()
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
lu:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.e(u)
s=A.iH(t)
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
if(typeof u!=="number")return u.am()
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
lo:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
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
lv:function(a){var u,t,s,r,q,p,o,n,m,l="   lightAccum += all",k="precision mediump float;\n\n",j="precision mediump float;\n\nvarying vec3 normalVec;\n",i=new P.ax("")
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
A.lm(a,i)
A.lj(a,i)
A.lk(a,i)
A.ln(a,i)
A.lt(a,i)
t=a.cy
if(t){r=i.a+="// === Enviromental ===\n"
r+="\n"
i.a=r
r+="uniform samplerCube envSampler;\n"
i.a=r
i.a=r+"\n"
A.lr(a,i)
A.ls(a,i)}A.lp(a,i)
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
if(r){for(q=a.z,p=q.length,n=0;n<q.length;q.length===p||(0,H.o)(q),++n)A.ll(a,q[n],i)
for(q=a.Q,p=q.length,n=0;n<q.length;q.length===p||(0,H.o)(q),++n)A.lq(a,q[n],i)
for(q=a.ch,p=q.length,n=0;n<q.length;q.length===p||(0,H.o)(q),++n)A.lu(a,q[n],i)
A.lo(a,i)}q=i.a+="// === Main ===\n"
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
for(u=a.z,t=u.length,n=0;n<u.length;u.length===t||(0,H.o)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.c(r,0)
i.a+=l+(r[0].toUpperCase()+C.c.aL(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,n=0;n<u.length;u.length===t||(0,H.o)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.c(r,0)
i.a+=l+(r[0].toUpperCase()+C.c.aL(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,n=0;n<u.length;u.length===t||(0,H.o)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.c(r,0)
i.a+=l+(r[0].toUpperCase()+C.c.aL(r,1))+"Values(norm);\n"}if(a.cx<=0)i.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
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
lw:function(a,b){var u,t,s
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
ly:function(a,b){var u
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
lx:function(a,b){var u
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
lA:function(a,b){var u,t
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
lB:function(a,b){var u,t
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
lz:function(a,b){var u
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
lC:function(a,b){var u
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
iH:function(a){if(0>=a.length)return H.c(a,0)
return a[0].toUpperCase()+C.c.aL(a,1)},
l2:function(a,b){var u,t,s,r
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
l1:function(a,b,c){var u="TextureLayout_"+a+"_"+C.d.i(b.a),t=new A.ho(c,u)
t.aM(c,u)
t.dG(a,b,c)
return t},
j1:function(a,b,c,d,e){var u=new A.hA(a,c,e)
u.f=d
P.kG(d,0,P.x)
return u},
cj:function cj(a,b,c){this.a=a
this.b=b
this.c=c},
ef:function ef(a){this.a=a},
S:function S(a,b,c){this.a=a
this.b=b
this.c=c},
eC:function eC(a,b){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
eW:function eW(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
eX:function eX(a,b){this.a=a
this.b=b},
ff:function ff(a,b){var _=this
_.cU=_.hd=_.cT=_.ba=_.aW=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.hl=_.hk=_.hj=_.bR=_.bQ=_.bP=_.bO=_.bN=_.bM=_.d5=_.hi=_.d4=_.d3=_.hh=_.d2=_.d1=_.d0=_.hg=_.d_=_.cZ=_.cY=_.hf=_.cX=_.cW=_.he=_.cV=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cq:function cq(a,b){this.a=a
this.b=b},
cR:function cR(a,b){this.a=a
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
_.aW=b3
_.ba=b4},
bZ:function bZ(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
c_:function c_(a,b,c,d,e,f,g,h,i,j){var _=this
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
c0:function c0(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cU:function cU(){},
bb:function bb(a,b){this.a=a
this.b=b},
h6:function h6(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ho:function ho(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
d8:function d8(){},
hE:function hE(a){this.a=a},
b0:function b0(a,b,c){this.a=a
this.c=b
this.d=c},
hB:function hB(a,b,c){this.a=a
this.c=b
this.d=c},
hC:function hC(a,b,c){this.a=a
this.c=b
this.d=c},
hD:function hD(a,b,c){this.a=a
this.c=b
this.d=c},
hA:function hA(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
J:function J(a,b,c){this.a=a
this.c=b
this.d=c},
an:function an(a,b,c){this.a=a
this.c=b
this.d=c},
C:function C(a,b,c){this.a=a
this.c=b
this.d=c},
b1:function b1(a,b,c){this.a=a
this.c=b
this.d=c},
hF:function hF(a,b,c){this.a=a
this.c=b
this.d=c},
bp:function bp(a,b,c){this.a=a
this.c=b
this.d=c},
N:function N(a,b,c){this.a=a
this.c=b
this.d=c},
ac:function ac(a,b,c){this.a=a
this.c=b
this.d=c},
O:function O(a,b,c){this.a=a
this.c=b
this.d=c}},F={
it:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cb:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.y(h,g+a1,f+a2)
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
j.d=i}m=F.it(i)
l=F.it(j.b)
k=F.mc(d,a0,new F.is(j,F.it(j.c),F.it(j.d),l,m,c),b)
if(k!=null)a.fI(k)},
mc:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.iZ()
t=H.b([],[F.br])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.hQ(g,g,new V.R(p,0,0,1),g,g,new V.V(r,1),g,g,0)
q.k(0,o)
c.$3(o,r,0)
t.push(o.bJ(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.hQ(g,g,new V.R(j,i,h,1),g,g,new V.V(r,m),g,g,0)
k.k(0,o)
c.$3(o,r,n)
t.push(o.bJ(d))}}u.d.fk(a+1,b+1,t)
return u},
bH:function(a,b,c){var u=new F.aI(),t=a.a
if(t==null)H.q(P.m("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.q(P.m("May not create a face with vertices attached to different shapes."))
u.a=a
a.d.b.push(u)
u.b=b
b.d.c.push(u)
u.c=c
c.d.d.push(u)
u.a.a.d.b.push(u)
u.a.a.a6()
return u},
kC:function(a,b){var u=new F.bM(),t=a.a
if(t==null)H.q(P.m("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.q(P.m("May not create a line with vertices attached to different shapes."))
u.a=a
a.c.b.push(u)
u.b=b
b.c.c.push(u)
u.a.a.c.b.push(u)
u.a.a.a6()
return u},
iZ:function(){var u=new F.h_(),t=new F.hR(u)
t.b=!1
t.c=H.b([],[F.br])
u.a=t
t=new F.h2(u)
t.b=H.b([],[F.bT])
u.b=t
t=new F.h1(u)
t.b=H.b([],[F.bM])
u.c=t
t=new F.h0(u)
t.b=H.b([],[F.aI])
u.d=t
u.e=null
return u},
hQ:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.br(),r=new F.hW()
r.b=H.b([],[F.bT])
s.b=r
r=new F.hV()
u=[F.bM]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.hS()
u=[F.aI]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.ki()
s.e=0
r=$.Q()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aD().a)!==0?e:t
s.x=(u&$.aC().a)!==0?b:t
s.y=(u&$.ap().a)!==0?f:t
s.z=(u&$.aE().a)!==0?g:t
s.Q=(u&$.kj().a)!==0?c:t
s.ch=(u&$.by().a)!==0?i:0
s.cx=(u&$.aB().a)!==0?a:t
return s},
is:function is(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aI:function aI(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bM:function bM(){this.b=this.a=null},
bT:function bT(){this.a=null},
h_:function h_(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
h0:function h0(a){this.a=a
this.b=null},
h1:function h1(a){this.a=a
this.b=null},
h2:function h2(a){this.a=a
this.b=null},
br:function br(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hY:function hY(a){this.a=a},
hX:function hX(a){this.a=a},
hR:function hR(a){this.a=a
this.c=this.b=null},
hS:function hS(){this.d=this.c=this.b=null},
hT:function hT(a,b){this.a=a
this.b=b},
hU:function hU(a,b){this.a=a
this.b=b},
hV:function hV(){this.c=this.b=null},
hW:function hW(){this.b=null}},N={
k0:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1="testCanvas",b2=null,b3="modifiers",b4=V.kY("Test 028"),b5=W.iO()
b5.className="pageLargeCanvas"
b5.id=b1
b4.a.appendChild(b5)
u=[P.t]
b4.cJ(H.b(["Test of a Gaussian blur cover pass. ","Notice the depth of field causing things further away to be blurry."],u))
b4.cJ(H.b(["\xab[Back to Tests|../]"],u))
t=document.getElementById(b1)
if(t==null)H.q(P.m("Failed to find an element with the identifier, testCanvas."))
s=E.l3(t,!0,!0,!0,!1)
r=new U.bI()
r.b3(U.a1)
r.az(r.ge6(),r.geP())
r.e=null
r.f=V.aQ()
r.r=0
u=s.r
q=new U.dc()
p=U.iP()
p.sc7(0,!0)
p.sbY(6.283185307179586)
p.sc_(0)
p.saa(0,0)
p.sbZ(100)
p.sR(0)
p.sbK(0.5)
q.b=p
o=q.gaE()
p.gl().k(0,o)
p=U.iP()
p.sc7(0,!0)
p.sbY(6.283185307179586)
p.sc_(0)
p.saa(0,0)
p.sbZ(100)
p.sR(0)
p.sbK(0.5)
q.c=p
p.gl().k(0,o)
q.d=null
q.r=q.f=q.e=!1
q.y=q.x=2.5
q.Q=4
q.ch=q.cx=!1
q.db=q.cy=0
q.dx=null
q.dy=0
q.fx=q.fr=null
n=new X.a7(!1,!1,!1)
m=q.d
q.d=n
p=new D.n(b3,m,n)
p.b=!0
q.M(p)
p=q.f
if(p!==!1){q.f=!1
p=new D.n("invertX",p,!1)
p.b=!0
q.M(p)}p=q.r
if(p!==!1){q.r=!1
p=new D.n("invertY",p,!1)
p.b=!0
q.M(p)}q.aQ(u)
r.k(0,q)
u=s.r
q=new U.db()
p=U.iP()
p.sc7(0,!0)
p.sbY(6.283185307179586)
p.sc_(0)
p.saa(0,0)
p.sbZ(100)
p.sR(0)
p.sbK(0.2)
q.b=p
p.gl().k(0,q.gaE())
q.c=null
q.d=!1
q.e=2.5
q.r=4
q.x=q.y=!1
q.z=0
q.Q=null
q.ch=0
q.cy=q.cx=null
n=new X.a7(!0,!1,!1)
m=q.c
q.c=n
p=new D.n(b3,m,n)
p.b=!0
q.M(p)
q.aQ(u)
r.k(0,q)
u=s.r
q=new U.dd()
q.c=0.01
q.e=q.d=0
n=new X.a7(!1,!1,!1)
q.b=n
p=new D.n(b3,b2,n)
p.b=!0
q.M(p)
q.aQ(u)
r.k(0,q)
r.k(0,U.iQ(V.kK(0,0,5)))
l=X.jw(r)
k=F.iZ()
F.cb(k,b2,b2,1,1,1,0,0,1)
F.cb(k,b2,b2,1,1,0,1,0,3)
F.cb(k,b2,b2,1,1,0,0,1,2)
F.cb(k,b2,b2,1,1,-1,0,0,0)
F.cb(k,b2,b2,1,1,0,-1,0,0)
F.cb(k,b2,b2,1,1,0,0,-1,3)
k.as()
j=E.eK(k)
i=E.eK(b2)
for(h=-1.6;h<=1.7;h+=0.8)for(g=-1.6;g<=1.7;g+=0.8)for(f=-1.6;f<=1.7;f+=0.8){e=new V.a6(1,0,0,h,0,1,0,g,0,0,1,f,0,0,0,1).u(0,new V.a6(0.2,0,0,0,0,0.2,0,0,0,0,0.2,0,0,0,0,1))
d=E.eK(b2)
u=new U.bF()
u.sU(0,e)
d.sda(u)
u=d.y
q=[H.cf(u,0)]
if(u.b6(H.b([j],q))){p=u.a
c=p.length
p.push(j)
q=H.b([j],q)
u=u.c
if(u!=null)u.$2(c,q)}u=i.y
q=[H.cf(u,0)]
if(u.b6(H.b([d],q))){p=u.a
c=p.length
p.push(d)
q=H.b([d],q)
u=u.c
if(u!=null)u.$2(c,q)}}b=s.f.d7("../resources/diceColor")
a=new O.cK()
u=O.eq(V.a6)
a.e=u
u.az(a.gea(),a.gec())
u=new O.ai(a,"emission")
u.c=new A.S(!1,!1,!1)
u.f=new V.L(0,0,0)
a.f=u
u=new O.ai(a,"ambient")
u.c=new A.S(!1,!1,!1)
u.f=new V.L(0,0,0)
a.r=u
u=new O.ai(a,"diffuse")
u.c=new A.S(!1,!1,!1)
u.f=new V.L(0,0,0)
a.x=u
u=new O.ai(a,"invDiffuse")
u.c=new A.S(!1,!1,!1)
u.f=new V.L(0,0,0)
a.y=u
u=new O.fl(a,"specular")
u.c=new A.S(!1,!1,!1)
u.f=new V.L(0,0,0)
u.ch=100
a.z=u
u=new O.fh(a,"bump")
u.c=new A.S(!1,!1,!1)
a.Q=u
a.ch=null
u=new O.ai(a,"reflect")
u.c=new A.S(!1,!1,!1)
u.f=new V.L(0,0,0)
a.cx=u
u=new O.fk(a,"refract")
u.c=new A.S(!1,!1,!1)
u.f=new V.L(0,0,0)
u.ch=1
a.cy=u
u=new O.fg(a,"alpha")
u.c=new A.S(!1,!1,!1)
u.f=1
a.db=u
u=new D.cE()
u.b3(D.a0)
u.e=H.b([],[D.bc])
u.f=H.b([],[D.fM])
u.r=H.b([],[D.h9])
u.y=u.x=null
u.c9(u.ge8(),u.geN(),u.geR())
a.dx=u
q=new O.fj()
q.b=new V.R(0,0,0,0)
q.c=1
q.d=10
q.e=!1
a.dy=q
q=u.x
u=q==null?u.x=D.w():q
u.k(0,a.gf5())
u=a.dx
q=u.y
u=q==null?u.y=D.w():q
u.k(0,a.gX())
a.fr=null
u=a.dx
q=U.iQ(V.ju(-1,-1,-1,b2))
u.k(0,D.jl(new V.L(1,0.9,0.9),q))
u=a.dx
q=U.iQ(V.ju(1,1,2,b2))
u.k(0,D.jl(new V.L(0.2,0.2,0.35),q))
u=a.r
u.saS(0,new V.L(0.2,0.2,0.2))
a.r.sb1(b)
u=a.x
u.saS(0,new V.L(0.8,0.8,0.8))
a.x.sb1(b)
u=a.z
u.saS(0,new V.L(0.7,0.7,0.7))
u=a.z
u.by(new A.S(!0,!1,u.c.c))
u.cE(10)
a.Q.sb1(s.f.d7("../resources/diceBumpMap"))
a0=X.iL(!0,1,1,!1)
u=s.f.d8("../resources/maskonaive",".jpg")
a1=M.eu(b2,b2)
q=new O.cV()
q.b=1.0471975511965976
q.d=new V.L(1,1,1)
m=q.c
q.c=u
u.gl().k(0,q.gX())
u=new D.n("boxTexture",m,q.c)
u.b=!0
q.p(u)
a1.sax(q)
a1.saG(l)
a1.sal(0,a0)
a2=M.jn()
a2.saG(l)
a2.sal(0,a0)
a2.sax(a)
a2.e.k(0,i)
a3=X.iL(!0,0.5,0.5,!0)
a4=M.jn()
a4.saG(l)
a4.sal(0,a3)
u=new O.eB()
u.b=1
u.c=10
u.f=u.e=u.d=!1
if(!(Math.abs(-2.5)<$.u().a)){u.b=3.5
q=new D.n("start",1,3.5)
q.b=!0
u.p(q)}q=u.c
if(!(Math.abs(q-5.5)<$.u().a)){u.c=5.5
q=new D.n("stop",q,5.5)
q.b=!0
u.p(q)}a4.sax(u)
a4.e.k(0,i)
u=new V.bq(-1,0,0,1)
q=a0.ch
p=a3.ch
a5=new M.cw()
a5.a=!0
a5.c=X.iL(!0,1,1,!1)
o=O.jo(b2,b2)
a6=a5.gS()
o.gl().k(0,a6)
a5.d=o
a5.e=M.eu(a5.c,o)
o=a5.c.ch
a7=$.jN
o=O.jo(a7==null?$.jN=new V.B(0,1):a7,o)
o.gl().k(0,a6)
a5.f=o
a5.r=M.eu(b2,o)
a5.d.sbE(0)
a5.f.sbE(0)
a5.d.scP(q)
a5.d.sbD(p)
a5.f.sbD(p)
a5.d.sc4(b2)
a5.f.sc4(b2)
a5.d.sbC(u)
a5.f.sbC(u)
a5.r.sal(0,b2)
a8=new O.d1()
a8.a=new V.R(0,0,0,0)
u=O.eq(O.aY)
a8.c=u
u.az(a8.geq(),a8.ges())
a8.d=0
a8.e=null
a8.r=a8.f=C.i
a9=new V.R(0,0,0,0)
if(!a8.a.n(0,a9)){m=a8.a
a8.a=a9
u=new D.n("backColor",m,a9)
u.b=!0
a8.p(u)}a8.scL(C.i)
a8.scL(C.h)
u=a8.c
q=a3.ch
u.k(0,O.jG(V.bX(0,0.8,0.2,0.2),q))
q=a8.c
u=a0.ch
q.k(0,O.jG(V.bX(0,0.6,0.2,0.2),u))
b0=M.eu(b2,b2)
b0.sal(0,X.iT(!1,b2))
b0.sax(a8)
u=M.a9
q=H.b([a1,a2,a4,a5,b0],[u])
p=new M.cn()
p.b3(u)
p.e=!0
p.f=!1
p.r=null
p.az(p.geT(),p.geV())
p.bB(0,q)
u=s.d
if(u!==p){if(u!=null)u.gl().N(0,s.gcl())
s.d=p
p.gl().k(0,s.gcl())
s.cm()}V.m9(s)}}
var w=[C,H,J,P,W,T,R,O,E,Z,D,X,V,U,M,A,F,N]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.iX.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gG:function(a){return H.bV(a)},
i:function(a){return"Instance of '"+H.e(H.bW(a))+"'"}}
J.f1.prototype={
i:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$ib7:1}
J.cB.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gG:function(a){return 0}}
J.cC.prototype={
gG:function(a){return 0},
i:function(a){return String(a)}}
J.fK.prototype={}
J.c1.prototype={}
J.aP.prototype={
i:function(a){var u=a[$.k7()]
if(u==null)return this.dA(a)
return"JavaScript function for "+H.e(J.a3(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.aO.prototype={
N:function(a,b){var u
if(!!a.fixed$length)H.q(P.a2("remove"))
for(u=0;u<a.length;++u)if(J.A(a[u],b)){a.splice(u,1)
return!0}return!1},
bB:function(a,b){var u,t
if(!!a.fixed$length)H.q(P.a2("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.o)(b),++t)a.push(b[t])},
J:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.f(P.bE(a))}},
q:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.c(r,u)
r[u]=t}return r.join(b)},
fG:function(a){return this.q(a,"")},
E:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
ce:function(a,b,c){var u=a.length
if(b>u)throw H.f(P.al(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.f(P.al(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.cf(a,0)])
return H.b(a.slice(b,c),[H.cf(a,0)])},
cd:function(a,b){return this.ce(a,b,null)},
gbV:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.f(H.kz())},
bg:function(a,b){if(!!a.immutable$list)H.q(P.a2("sort"))
H.cW(a,0,a.length-1,b)},
ae:function(a,b){var u
for(u=0;u<a.length;++u)if(J.A(a[u],b))return!0
return!1},
i:function(a){return P.iU(a,"[","]")},
gT:function(a){return new J.X(a,a.length)},
gG:function(a){return H.bV(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.q(P.a2("set length"))
if(b<0)throw H.f(P.al(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.f(H.bw(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.q(P.a2("indexed set"))
if(b>=a.length||b<0)throw H.f(H.bw(a,b))
a[b]=c},
$ij:1}
J.iW.prototype={}
J.X.prototype={
gI:function(a){return this.d},
w:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.f(H.o(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bL.prototype={
fs:function(a,b){var u
if(typeof b!=="number")throw H.f(H.b6(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbb(b)
if(this.gbb(a)===u)return 0
if(this.gbb(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbb:function(a){return a===0?1/a<0:a<0},
h4:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.f(P.a2(""+a+".toInt()"))},
bS:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.f(P.a2(""+a+".floor()"))},
W:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.a2(""+a+".round()"))},
dl:function(a,b){var u
if(b>20)throw H.f(P.al(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbb(a))return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gG:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
dq:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
dB:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cG(a,b)},
a5:function(a,b){return(a|0)===a?a/b|0:this.cG(a,b)},
cG:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.f(P.a2("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
b7:function(a,b){var u
if(a>0)u=this.fb(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
fb:function(a,b){return b>31?0:a>>>b},
$iG:1,
$iab:1}
J.cA.prototype={$ix:1}
J.cz.prototype={}
J.bf.prototype={
bI:function(a,b){if(b<0)throw H.f(H.bw(a,b))
if(b>=a.length)H.q(H.bw(a,b))
return a.charCodeAt(b)},
b4:function(a,b){if(b>=a.length)throw H.f(H.bw(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(typeof b!=="string")throw H.f(P.jh(b,null,null))
return a+b},
cf:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.f(P.fP(b,null))
if(b>c)throw H.f(P.fP(b,null))
if(c>a.length)throw H.f(P.fP(c,null))
return a.substring(b,c)},
aL:function(a,b){return this.cf(a,b,null)},
u:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.A)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ah:function(a,b){var u=b-a.length
if(u<=0)return a
return this.u(" ",u)+a},
i:function(a){return a},
gG:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gj:function(a){return a.length},
$it:1}
H.K.prototype={
gj:function(a){return this.a.length},
h:function(a,b){return C.c.bI(this.a,b)},
$ap:function(){return[P.x]},
$aj:function(){return[P.x]}}
H.eI.prototype={}
H.cG.prototype={
gI:function(a){return this.d},
w:function(){var u,t=this,s=t.a,r=J.j8(s),q=r.gj(s)
if(t.b!==q)throw H.f(P.bE(s))
u=t.c
if(u>=q){t.d=null
return!1}t.d=r.E(s,u);++t.c
return!0}}
H.fd.prototype={
gT:function(a){return new H.fe(J.bz(this.a),this.b)},
gj:function(a){return J.bA(this.a)},
E:function(a,b){return this.b.$1(J.jg(this.a,b))},
$aj:function(a,b){return[b]}}
H.fe.prototype={
w:function(){var u=this,t=u.b
if(t.w()){u.a=u.c.$1(t.gI(t))
return!0}u.a=null
return!1},
gI:function(a){return this.a}}
H.i_.prototype={
gT:function(a){return new H.i0(J.bz(this.a),this.b)}}
H.i0.prototype={
w:function(){var u,t
for(u=this.a,t=this.b;u.w();)if(t.$1(u.gI(u)))return!0
return!1},
gI:function(a){var u=this.a
return u.gI(u)}}
H.cu.prototype={}
H.hI.prototype={}
H.d9.prototype={}
H.hy.prototype={
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
H.fG.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.f3.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.hH.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.iJ.prototype={
$1:function(a){if(!!J.U(a).$ibd)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:8}
H.dO.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bD.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
gh8:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hi.prototype={}
H.hc.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.e9(u)+"'"}}
H.bB.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bB))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gG:function(a){var u,t=this.c
if(t==null)u=H.bV(this.a)
else u=typeof t!=="object"?J.b8(t):H.bV(t)
return(u^H.bV(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.bW(u))+"'")}}
H.en.prototype={
i:function(a){return this.a}}
H.fX.prototype={
i:function(a){return"RuntimeError: "+H.e(this.a)}}
H.I.prototype={
gj:function(a){return this.a},
gat:function(a){return new H.cF(this,[H.cf(this,0)])},
cQ:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cs(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cs(t,b)}else return s.fE(b)},
fE:function(a){var u=this.d
if(u==null)return!1
return this.bT(this.bm(u,J.b8(a)&0x3ffffff),a)>=0},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.b5(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.b5(r,b)
s=t==null?null:t.b
return s}else return q.fF(b)},
fF:function(a){var u,t,s=this.d
if(s==null)return
u=this.bm(s,J.b8(a)&0x3ffffff)
t=this.bT(u,a)
if(t<0)return
return u[t].b},
m:function(a,b,c){var u,t,s,r,q,p,o=this
if(typeof b==="string"){u=o.b
o.co(u==null?o.b=o.bv():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.co(t==null?o.c=o.bv():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bv()
r=J.b8(b)&0x3ffffff
q=o.bm(s,r)
if(q==null)o.bz(s,r,[o.bw(b,c)])
else{p=o.bT(q,b)
if(p>=0)q[p].b=c
else q.push(o.bw(b,c))}}},
J:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.f(P.bE(u))
t=t.c}},
co:function(a,b,c){var u=this.b5(a,b)
if(u==null)this.bz(a,b,this.bw(b,c))
else u.b=c},
bw:function(a,b){var u=this,t=new H.f6(a,b)
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
bT:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.A(a[t].a,b))return t
return-1},
i:function(a){return P.jr(this)},
b5:function(a,b){return a[b]},
bm:function(a,b){return a[b]},
bz:function(a,b,c){a[b]=c},
dW:function(a,b){delete a[b]},
cs:function(a,b){return this.b5(a,b)!=null},
bv:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bz(t,u,t)
this.dW(t,u)
return t}}
H.f6.prototype={}
H.cF.prototype={
gj:function(a){return this.a.a},
gT:function(a){var u=this.a,t=new H.f7(u,u.r)
t.c=u.e
return t}}
H.f7.prototype={
gI:function(a){return this.d},
w:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.bE(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.iA.prototype={
$1:function(a){return this.a(a)},
$S:8}
H.iB.prototype={
$2:function(a,b){return this.a(a,b)}}
H.iC.prototype={
$1:function(a){return this.a(a)}}
H.f2.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.bS.prototype={}
H.cL.prototype={
gj:function(a){return a.length},
$iv:1,
$av:function(){}}
H.bR.prototype={
h:function(a,b){H.b4(b,a,a.length)
return a[b]},
$ap:function(){return[P.G]},
$ij:1,
$aj:function(){return[P.G]}}
H.cM.prototype={
$ap:function(){return[P.x]},
$ij:1,
$aj:function(){return[P.x]}}
H.fA.prototype={
h:function(a,b){H.b4(b,a,a.length)
return a[b]}}
H.fB.prototype={
h:function(a,b){H.b4(b,a,a.length)
return a[b]}}
H.fC.prototype={
h:function(a,b){H.b4(b,a,a.length)
return a[b]}}
H.fD.prototype={
h:function(a,b){H.b4(b,a,a.length)
return a[b]}}
H.fE.prototype={
h:function(a,b){H.b4(b,a,a.length)
return a[b]}}
H.cN.prototype={
gj:function(a){return a.length},
h:function(a,b){H.b4(b,a,a.length)
return a[b]}}
H.fF.prototype={
gj:function(a){return a.length},
h:function(a,b){H.b4(b,a,a.length)
return a[b]}}
H.c3.prototype={}
H.c4.prototype={}
H.c5.prototype={}
H.c6.prototype={}
P.i2.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:17}
P.i1.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.i3.prototype={
$0:function(){this.a.$0()}}
P.i4.prototype={
$0:function(){this.a.$0()}}
P.dU.prototype={
dJ:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bv(new P.ip(this,b),0),a)
else throw H.f(P.a2("`setTimeout()` not found."))},
dK:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bv(new P.io(this,a,Date.now(),b),0),a)
else throw H.f(P.a2("Periodic timer."))},
$id3:1}
P.ip.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.io.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.dB(u,q)}s.c=r
t.d.$1(s)}}
P.dg.prototype={}
P.d_.prototype={}
P.hf.prototype={}
P.d3.prototype={}
P.ir.prototype={}
P.iw.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.cP():s
s=this.b
if(s==null)throw H.f(t)
u=H.f(t)
u.stack=s.i(0)
throw u}}
P.ih.prototype={
h0:function(a){var u,t,s,r=null
try{if(C.e===$.ad){a.$0()
return}P.lE(r,r,this,a)}catch(s){u=H.iI(s)
t=H.ja(s)
P.jU(r,r,this,u,t)}},
h1:function(a,b){var u,t,s,r=null
try{if(C.e===$.ad){a.$1(b)
return}P.lF(r,r,this,a,b)}catch(s){u=H.iI(s)
t=H.ja(s)
P.jU(r,r,this,u,t)}},
h2:function(a,b){return this.h1(a,b,null)},
fp:function(a){return new P.ii(this,a)},
cK:function(a,b){return new P.ij(this,a,b)}}
P.ii.prototype={
$0:function(){return this.a.h0(this.b)}}
P.ij.prototype={
$1:function(a){return this.a.h2(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.id.prototype={
gT:function(a){var u=new P.dw(this,this.r)
u.c=this.e
return u},
gj:function(a){return this.a},
k:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cp(u==null?s.b=P.j4():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cp(t==null?s.c=P.j4():t,b)}else return s.dN(0,b)},
dN:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.j4()
u=s.cq(b)
t=r[u]
if(t==null)r[u]=[s.bi(b)]
else{if(s.cv(t,b)>=0)return!1
t.push(s.bi(b))}return!0},
N:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.f3(this.c,b)
else return this.f2(0,b)},
f2:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.dZ(r,b)
t=s.cv(u,b)
if(t<0)return!1
s.cH(u.splice(t,1)[0])
return!0},
cp:function(a,b){if(a[b]!=null)return!1
a[b]=this.bi(b)
return!0},
f3:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.cH(u)
delete a[b]
return!0},
cw:function(){this.r=1073741823&this.r+1},
bi:function(a){var u,t=this,s=new P.ie(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cw()
return s},
cH:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cw()},
cq:function(a){return J.b8(a)&1073741823},
dZ:function(a,b){return a[this.cq(b)]},
cv:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.A(a[t].a,b))return t
return-1}}
P.ie.prototype={}
P.dw.prototype={
gI:function(a){return this.d},
w:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.bE(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.f8.prototype={$ij:1}
P.p.prototype={
gT:function(a){return new H.cG(a,this.gj(a))},
E:function(a,b){return this.h(a,b)},
h6:function(a,b){var u,t,s=this,r=H.b([],[H.lY(s,a,"p",0)])
C.a.sj(r,s.gj(a))
for(u=0;u<s.gj(a);++u){t=s.h(a,u)
if(u>=r.length)return H.c(r,u)
r[u]=t}return r},
h5:function(a){return this.h6(a,!0)},
i:function(a){return P.iU(a,"[","]")}}
P.fb.prototype={}
P.fc.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:9}
P.as.prototype={
J:function(a,b){var u,t
for(u=J.bz(this.gat(a));u.w();){t=u.gI(u)
b.$2(t,this.h(a,t))}},
gj:function(a){return J.bA(this.gat(a))},
i:function(a){return P.jr(a)}}
P.ik.prototype={
i:function(a){return P.iU(this,"{","}")},
E:function(a,b){var u,t,s
P.jC(b,"index")
for(u=P.lc(this,this.r),t=0;u.w();){s=u.d
if(b===t)return s;++t}throw H.f(P.F(b,this,"index",null,t))},
$ij:1}
P.dx.prototype={}
P.ep.prototype={}
P.et.prototype={}
P.eJ.prototype={}
P.hL.prototype={}
P.hM.prototype={
ft:function(a){var u,t,s=P.jD(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.iq(u)
if(t.dY(a,0,s)!==s)t.cI(C.c.bI(a,s-1),0)
return new Uint8Array(u.subarray(0,H.lg(0,t.b,u.length)))}}
P.iq.prototype={
cI:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
dY:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.c.bI(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.c.b4(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cI(r,C.c.b4(a,p)))s=p}else if(r<=2047){q=n.b
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
P.b7.prototype={}
P.a5.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.a5&&this.a===b.a&&!0},
gG:function(a){var u=this.a
return(u^C.d.b7(u,30))&1073741823},
i:function(a){var u=this,t=P.kv(H.kS(u)),s=P.cp(H.kQ(u)),r=P.cp(H.kM(u)),q=P.cp(H.kN(u)),p=P.cp(H.kP(u)),o=P.cp(H.kR(u)),n=P.kw(H.kO(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.G.prototype={}
P.aG.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.aG&&this.a===b.a},
gG:function(a){return C.d.gG(this.a)},
i:function(a){var u,t,s,r=new P.eH(),q=this.a
if(q<0)return"-"+new P.aG(0-q).i(0)
u=r.$1(C.d.a5(q,6e7)%60)
t=r.$1(C.d.a5(q,1e6)%60)
s=new P.eG().$1(q%1e6)
return""+C.d.a5(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
P.eG.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.eH.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bd.prototype={}
P.cP.prototype={
i:function(a){return"Throw of null."}}
P.ae.prototype={
gbk:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbj:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbk()+o+u
if(!q.a)return t
s=q.gbj()
r=P.iS(q.b)
return t+s+": "+r}}
P.bl.prototype={
gbk:function(){return"RangeError"},
gbj:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.f_.prototype={
gbk:function(){return"RangeError"},
gbj:function(){var u,t=this.b
if(typeof t!=="number")return t.ac()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gj:function(a){return this.f}}
P.hJ.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.hG.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.hb.prototype={
i:function(a){return"Bad state: "+this.a}}
P.es.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.iS(u)+"."}}
P.fJ.prototype={
i:function(a){return"Out of Memory"},
$ibd:1}
P.cY.prototype={
i:function(a){return"Stack Overflow"},
$ibd:1}
P.ez.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dp.prototype={
i:function(a){return"Exception: "+this.a}}
P.eU.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.c.cf(s,0,75)+"...":s
return t+"\n"+r}}
P.x.prototype={}
P.j.prototype={
gj:function(a){var u,t=this.gT(this)
for(u=0;t.w();)++u
return u},
E:function(a,b){var u,t,s
P.jC(b,"index")
for(u=this.gT(this),t=0;u.w();){s=u.gI(u)
if(b===t)return s;++t}throw H.f(P.F(b,this,"index",null,t))},
i:function(a){return P.ky(this,"(",")")}}
P.f0.prototype={}
P.bi.prototype={$ij:1}
P.cI.prototype={}
P.aS.prototype={
gG:function(a){return P.Z.prototype.gG.call(this,this)},
i:function(a){return"null"}}
P.ab.prototype={}
P.Z.prototype={constructor:P.Z,$iZ:1,
n:function(a,b){return this===b},
gG:function(a){return H.bV(this)},
i:function(a){return"Instance of '"+H.e(H.bW(this))+"'"},
toString:function(){return this.i(this)}}
P.t.prototype={}
P.ax.prototype={
gj:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.l.prototype={}
W.eb.prototype={
gj:function(a){return a.length}}
W.ed.prototype={
i:function(a){return String(a)}}
W.ee.prototype={
i:function(a){return String(a)}}
W.ck.prototype={}
W.ba.prototype={
c8:function(a,b,c){if(c!=null)return a.getContext(b,P.lO(c))
return a.getContext(b)},
dn:function(a,b){return this.c8(a,b,null)},
$iba:1}
W.aF.prototype={
gj:function(a){return a.length}}
W.ev.prototype={
gj:function(a){return a.length}}
W.D.prototype={$iD:1}
W.bG.prototype={
gj:function(a){return a.length}}
W.ew.prototype={}
W.a4.prototype={}
W.ah.prototype={}
W.ex.prototype={
gj:function(a){return a.length}}
W.ey.prototype={
gj:function(a){return a.length}}
W.eA.prototype={
gj:function(a){return a.length}}
W.eD.prototype={
i:function(a){return String(a)}}
W.cr.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[[P.a8,P.ab]]},
$ap:function(){return[[P.a8,P.ab]]},
$ij:1,
$aj:function(){return[[P.a8,P.ab]]}}
W.cs.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gai(a))+" x "+H.e(this.gaf(a))},
n:function(a,b){var u
if(b==null)return!1
u=J.U(b)
if(!u.$ia8)return!1
return a.left===u.gbc(b)&&a.top===u.gbe(b)&&this.gai(a)===u.gai(b)&&this.gaf(a)===u.gaf(b)},
gG:function(a){return W.jS(C.b.gG(a.left),C.b.gG(a.top),C.b.gG(this.gai(a)),C.b.gG(this.gaf(a)))},
gcM:function(a){return a.bottom},
gaf:function(a){return a.height},
gbc:function(a){return a.left},
gc3:function(a){return a.right},
gbe:function(a){return a.top},
gai:function(a){return a.width},
$ia8:1,
$aa8:function(){return[P.ab]}}
W.eE.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[P.t]},
$ap:function(){return[P.t]},
$ij:1,
$aj:function(){return[P.t]}}
W.eF.prototype={
gj:function(a){return a.length}}
W.i6.prototype={
gj:function(a){return this.b.length},
h:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
k:function(a,b){this.a.appendChild(b)
return b},
gT:function(a){var u=this.h5(this)
return new J.X(u,u.length)},
$ap:function(){return[W.Y]},
$aj:function(){return[W.Y]}}
W.Y.prototype={
gcN:function(a){return new W.i6(a,a.children)},
gcO:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.ac()
if(s<0)s=-s*0
if(typeof r!=="number")return r.ac()
if(r<0)r=-r*0
return new P.a8(u,t,s,r,[P.ab])},
i:function(a){return a.localName},
$iY:1}
W.i.prototype={$ii:1}
W.d.prototype={
fi:function(a,b,c,d){if(c!=null)this.dO(a,b,c,!1)},
dO:function(a,b,c,d){return a.addEventListener(b,H.bv(c,1),!1)}}
W.aJ.prototype={$iaJ:1}
W.eO.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aJ]},
$ap:function(){return[W.aJ]},
$ij:1,
$aj:function(){return[W.aJ]}}
W.eP.prototype={
gj:function(a){return a.length}}
W.eT.prototype={
gj:function(a){return a.length}}
W.aK.prototype={$iaK:1}
W.eY.prototype={
gj:function(a){return a.length}}
W.bJ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.H]},
$ap:function(){return[W.H]},
$ij:1,
$aj:function(){return[W.H]}}
W.aL.prototype={$iaL:1,
gcR:function(a){return a.data}}
W.bK.prototype={$ibK:1}
W.bg.prototype={$ibg:1}
W.f9.prototype={
i:function(a){return String(a)}}
W.ft.prototype={
gj:function(a){return a.length}}
W.fu.prototype={
h:function(a,b){return P.aA(a.get(b))},
J:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aA(u.value[1]))}},
gat:function(a){var u=H.b([],[P.t])
this.J(a,new W.fv(u))
return u},
gj:function(a){return a.size}}
W.fv.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fw.prototype={
h:function(a,b){return P.aA(a.get(b))},
J:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aA(u.value[1]))}},
gat:function(a){var u=H.b([],[P.t])
this.J(a,new W.fx(u))
return u},
gj:function(a){return a.size}}
W.fx.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aR.prototype={$iaR:1}
W.fy.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aR]},
$ap:function(){return[W.aR]},
$ij:1,
$aj:function(){return[W.aR]}}
W.ak.prototype={$iak:1}
W.i5.prototype={
gT:function(a){var u=this.a.childNodes
return new W.cv(u,u.length)},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
$ap:function(){return[W.H]},
$aj:function(){return[W.H]}}
W.H.prototype={
i:function(a){var u=a.nodeValue
return u==null?this.dz(a):u},
$iH:1}
W.cO.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.H]},
$ap:function(){return[W.H]},
$ij:1,
$aj:function(){return[W.H]}}
W.aT.prototype={$iaT:1,
gj:function(a){return a.length}}
W.fL.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aT]},
$ap:function(){return[W.aT]},
$ij:1,
$aj:function(){return[W.aT]}}
W.fV.prototype={
h:function(a,b){return P.aA(a.get(b))},
J:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aA(u.value[1]))}},
gat:function(a){var u=H.b([],[P.t])
this.J(a,new W.fW(u))
return u},
gj:function(a){return a.size}}
W.fW.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fY.prototype={
gj:function(a){return a.length}}
W.aU.prototype={$iaU:1}
W.h7.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aU]},
$ap:function(){return[W.aU]},
$ij:1,
$aj:function(){return[W.aU]}}
W.aV.prototype={$iaV:1}
W.h8.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aV]},
$ap:function(){return[W.aV]},
$ij:1,
$aj:function(){return[W.aV]}}
W.aW.prototype={$iaW:1,
gj:function(a){return a.length}}
W.hd.prototype={
h:function(a,b){return a.getItem(b)},
J:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gat:function(a){var u=H.b([],[P.t])
this.J(a,new W.he(u))
return u},
gj:function(a){return a.length}}
W.he.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ay.prototype={$iay:1}
W.aX.prototype={$iaX:1}
W.az.prototype={$iaz:1}
W.hj.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.az]},
$ap:function(){return[W.az]},
$ij:1,
$aj:function(){return[W.az]}}
W.hk.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aX]},
$ap:function(){return[W.aX]},
$ij:1,
$aj:function(){return[W.aX]}}
W.hs.prototype={
gj:function(a){return a.length}}
W.aZ.prototype={$iaZ:1}
W.bn.prototype={$ibn:1}
W.hv.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aZ]},
$ap:function(){return[W.aZ]},
$ij:1,
$aj:function(){return[W.aZ]}}
W.hw.prototype={
gj:function(a){return a.length}}
W.b_.prototype={}
W.hK.prototype={
i:function(a){return String(a)}}
W.hZ.prototype={
gj:function(a){return a.length}}
W.b3.prototype={
gfz:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.a2("deltaY is not supported"))},
gfw:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.a2("deltaX is not supported"))},
$ib3:1}
W.c2.prototype={
f4:function(a,b){return a.requestAnimationFrame(H.bv(b,1))},
dX:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.i7.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.D]},
$ap:function(){return[W.D]},
$ij:1,
$aj:function(){return[W.D]}}
W.dj.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
n:function(a,b){var u
if(b==null)return!1
u=J.U(b)
if(!u.$ia8)return!1
return a.left===u.gbc(b)&&a.top===u.gbe(b)&&a.width===u.gai(b)&&a.height===u.gaf(b)},
gG:function(a){return W.jS(C.b.gG(a.left),C.b.gG(a.top),C.b.gG(a.width),C.b.gG(a.height))},
gaf:function(a){return a.height},
gai:function(a){return a.width}}
W.ia.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aK]},
$ap:function(){return[W.aK]},
$ij:1,
$aj:function(){return[W.aK]}}
W.dC.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.H]},
$ap:function(){return[W.H]},
$ij:1,
$aj:function(){return[W.H]}}
W.il.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aW]},
$ap:function(){return[W.aW]},
$ij:1,
$aj:function(){return[W.aW]}}
W.im.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.ay]},
$ap:function(){return[W.ay]},
$ij:1,
$aj:function(){return[W.ay]}}
W.i8.prototype={}
W.i9.prototype={
$1:function(a){return this.a.$1(a)}}
W.E.prototype={
gT:function(a){return new W.cv(a,this.gj(a))}}
W.cv.prototype={
w:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.ea(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gI:function(a){return this.d}}
W.di.prototype={}
W.dk.prototype={}
W.dl.prototype={}
W.dm.prototype={}
W.dn.prototype={}
W.dq.prototype={}
W.dr.prototype={}
W.ds.prototype={}
W.dt.prototype={}
W.dy.prototype={}
W.dz.prototype={}
W.dA.prototype={}
W.dB.prototype={}
W.dD.prototype={}
W.dE.prototype={}
W.dH.prototype={}
W.dI.prototype={}
W.dJ.prototype={}
W.c7.prototype={}
W.c8.prototype={}
W.dK.prototype={}
W.dL.prototype={}
W.dP.prototype={}
W.dS.prototype={}
W.dT.prototype={}
W.c9.prototype={}
W.ca.prototype={}
W.dV.prototype={}
W.dW.prototype={}
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
P.dZ.prototype={$iaL:1,
gcR:function(a){return this.a}}
P.ix.prototype={
$2:function(a,b){this.a[a]=b},
$S:9}
P.eQ.prototype={
gbn:function(){var u=this.b,t=H.jZ(u,"p",0)
return new H.fd(new H.i_(u,new P.eR(),[t]),new P.eS(),[t,W.Y])},
k:function(a,b){this.b.a.appendChild(b)},
gj:function(a){return J.bA(this.gbn().a)},
h:function(a,b){var u=this.gbn()
return u.b.$1(J.jg(u.a,b))},
gT:function(a){var u=P.jq(this.gbn(),!1,W.Y)
return new J.X(u,u.length)},
$ap:function(){return[W.Y]},
$aj:function(){return[W.Y]}}
P.eR.prototype={
$1:function(a){return!!J.U(a).$iY}}
P.eS.prototype={
$1:function(a){return H.h(a,"$iY")}}
P.ig.prototype={
gc3:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.r(t)
return u+t},
gcM:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.r(t)
return u+t},
i:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.U(b)
if(!!u.$ia8){t=q.a
if(t==u.gbc(b)){s=q.b
if(s==u.gbe(b)){r=q.c
if(typeof t!=="number")return t.C()
if(typeof r!=="number")return H.r(r)
if(t+r===u.gc3(b)){t=q.d
if(typeof s!=="number")return s.C()
if(typeof t!=="number")return H.r(t)
u=s+t===u.gcM(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gG:function(a){var u=this,t=u.a,s=J.b8(t),r=u.b,q=J.b8(r),p=u.c
if(typeof t!=="number")return t.C()
if(typeof p!=="number")return H.r(p)
p=C.d.gG(t+p)
t=u.d
if(typeof r!=="number")return r.C()
if(typeof t!=="number")return H.r(t)
t=C.d.gG(r+t)
return P.lb(P.ic(P.ic(P.ic(P.ic(0,s),q),p),t))}}
P.a8.prototype={
gbc:function(a){return this.a},
gbe:function(a){return this.b},
gai:function(a){return this.c},
gaf:function(a){return this.d}}
P.bh.prototype={$ibh:1}
P.f5.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.h(a,b)},
$ap:function(){return[P.bh]},
$ij:1,
$aj:function(){return[P.bh]}}
P.bj.prototype={$ibj:1}
P.fH.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.h(a,b)},
$ap:function(){return[P.bj]},
$ij:1,
$aj:function(){return[P.bj]}}
P.fO.prototype={
gj:function(a){return a.length}}
P.hg.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.h(a,b)},
$ap:function(){return[P.t]},
$ij:1,
$aj:function(){return[P.t]}}
P.k.prototype={
gcN:function(a){return new P.eQ(a,new W.i5(a))}}
P.bo.prototype={$ibo:1}
P.hx.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.h(a,b)},
$ap:function(){return[P.bo]},
$ij:1,
$aj:function(){return[P.bo]}}
P.du.prototype={}
P.dv.prototype={}
P.dF.prototype={}
P.dG.prototype={}
P.dQ.prototype={}
P.dR.prototype={}
P.dX.prototype={}
P.dY.prototype={}
P.eg.prototype={
gj:function(a){return a.length}}
P.eh.prototype={
h:function(a,b){return P.aA(a.get(b))},
J:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aA(u.value[1]))}},
gat:function(a){var u=H.b([],[P.t])
this.J(a,new P.ei(u))
return u},
gj:function(a){return a.size}}
P.ei.prototype={
$2:function(a,b){return this.a.push(a)}}
P.ej.prototype={
gj:function(a){return a.length}}
P.b9.prototype={}
P.fI.prototype={
gj:function(a){return a.length}}
P.dh.prototype={}
P.cT.prototype={
dk:function(a,b,c,d,e,f,g,h,i,j){var u,t=i==null
if(!t&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}u=J.U(g)
if(!!u.$iaL&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,P.lP(g))
return}if(!!u.$ibK&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.f(P.ko("Incorrect number or type of arguments"))},
h3:function(a,b,c,d,e,f,g){return this.dk(a,b,c,d,e,f,g,null,null,null)}}
P.ha.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return P.aA(a.item(b))},
E:function(a,b){return this.h(a,b)},
$ap:function(){return[[P.cI,,,]]},
$ij:1,
$aj:function(){return[[P.cI,,,]]}}
P.dM.prototype={}
P.dN.prototype={}
T.ec.prototype={
aI:function(a,b){return!0},
i:function(a){return"all"}}
T.cy.prototype={
aI:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)if(u[s].aI(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.o)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s}}
T.cJ.prototype={}
T.au.prototype={
aI:function(a,b){return!this.dw(0,b)},
i:function(a){return"!["+this.cg(0)+"]"}}
T.fZ.prototype={
dE:function(a){var u,t
if(a.a.length<=0)throw H.f(P.m("May not create a Set with zero characters."))
u=new H.I([P.x,P.b7])
for(t=new H.cG(a,a.gj(a));t.w();)u.m(0,t.d,!0)
this.a=u},
aI:function(a,b){return this.a.cQ(0,b)},
i:function(a){var u=this.a
return P.j_(new H.cF(u,[H.cf(u,0)]))}}
R.cZ.prototype={
q:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new R.d7(this.a.L(0,b))
r.a=H.b([],[T.cJ])
r.c=!1
this.c.push(r)
return r},
fC:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
if(r.aI(0,a))return r}return},
i:function(a){return this.b}}
R.d4.prototype={
i:function(a){var u=H.k4(this.b,"\n","\\n"),t=H.k4(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
R.d5.prototype={
i:function(a){return this.b}}
R.ht.prototype={
L:function(a,b){var u=this.a.h(0,b)
if(u==null){u=new R.cZ(this,b)
u.c=H.b([],[R.d7])
this.a.m(0,b,u)}return u},
b2:function(a){var u,t=this.b.h(0,a)
if(t==null){t=new R.d5(a)
u=P.t
t.c=new H.I([u,u])
this.b.m(0,a,t)}return t},
h7:function(a){var u,t,s,r,q,p,o,n,m=H.b([],[R.d4]),l=this.c,k=[P.x],j=H.b([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)m.push(t)
return m}r=C.c.b4(a,s)
q=l.fC(r)
if(q==null){if(t==null){j.push(r)
p=P.j_(j)
throw H.f(P.m("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}m.push(t)
s=t.c+1
j=H.b([],k)
l=this.c
t=null}else{if(!q.c)j.push(r)
l=q.b
if(l.d!=null){p=P.j_(j)
o=l.d
n=o.c.h(0,p)
t=new R.d4(n==null?o.b:n,p,s)}++s}}}}
R.d7.prototype={
i:function(a){return this.b.b+": "+this.cg(0)}}
O.aq.prototype={
b3:function(a){this.a=H.b([],[a])
this.c=this.b=null},
c9:function(a,b,c){this.b=b
this.c=a},
az:function(a,b){return this.c9(a,null,b)},
b6:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
ck:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gj:function(a){return this.a.length},
gT:function(a){var u=this.a
return new J.X(u,u.length)},
E:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
k:function(a,b){var u,t,s=this,r=[H.jZ(s,"aq",0)]
if(s.b6(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.ck(t,H.b([b],r))}},
bB:function(a,b){var u,t
if(this.b6(b)){u=this.a
t=u.length
C.a.bB(u,b)
this.ck(t,b)}},
$ij:1}
O.bP.prototype={
gj:function(a){return this.a.length},
gl:function(){var u=this.b
return u==null?this.b=D.w():u},
aA:function(){var u=this.b
if(u!=null)u.v(null)},
gU:function(a){var u=this.a
if(u.length>0)return C.a.gbV(u)
else return V.aQ()},
bd:function(a){var u=this.a
if(a==null)u.push(V.aQ())
else u.push(a)
this.aA()},
av:function(){var u=this.a
if(u.length>0){u.pop()
this.aA()}}}
E.el.prototype={}
E.ar.prototype={
scb:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gl().N(0,s.gdg())
u=s.c
if(u!=null)u.gl().k(0,s.gdg())
t=new D.n("shape",r,s.c)
t.b=!0
s.au(t)}},
sda:function(a){var u,t,s=this
if(!J.A(s.r,a)){u=s.r
if(u!=null)u.gl().N(0,s.gde())
if(a!=null)a.gl().k(0,s.gde())
s.r=a
t=new D.n("mover",u,a)
t.b=!0
s.au(t)}},
a1:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.a:null
if(!J.A(q,s.x)){u=s.x
s.x=q
t=new D.n("matrix",u,q)
t.b=!0
s.au(t)}for(r=s.y.a,r=new J.X(r,r.length);r.w();)r.d.a1(0,b)},
V:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)s.a.push(s.gU(s))
else s.a.push(r.u(0,s.gU(s)))
s.aA()
a.c2(t.f)
s=a.dy
u=(s&&C.a).gbV(s)
if(u!=null&&t.d!=null)u.b0(a,t)
for(s=t.y.a,s=new J.X(s,s.length);s.w();)s.d.V(a)
a.c1()
a.dx.av()},
au:function(a){var u=this.z
if(u!=null)u.v(a)},
a6:function(){return this.au(null)},
dh:function(a){this.e=null
this.au(a)},
fP:function(){return this.dh(null)},
df:function(a){this.au(a)},
fO:function(){return this.df(null)},
dd:function(a){this.au(a)},
fL:function(){return this.dd(null)},
fK:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gdc(),s=[{func:1,ret:-1,args:[D.M]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.aH()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.a6()},
fN:function(a,b){var u,t
for(u=b.gT(b),t=this.gdc();u.w();)u.gI(u).gl().N(0,t)
this.a6()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.fR.prototype={
dD:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.a5(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.bP()
t=[V.a6]
u.a=H.b([],t)
u.gl().k(0,new E.fS(s))
s.cy=u
u=new O.bP()
u.a=H.b([],t)
u.gl().k(0,new E.fT(s))
s.db=u
u=new O.bP()
u.a=H.b([],t)
u.gl().k(0,new E.fU(s))
s.dx=u
u=H.b([],[O.d0])
s.dy=u
u.push(null)
s.fr=new H.I([P.t,A.cU])},
gfY:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gU(s)
u=t.db
u=t.z=s.u(0,u.gU(u))
s=u}return s},
gdi:function(){var u,t=this,s=t.ch
if(s==null){s=t.gfY()
u=t.dx
u=t.ch=s.u(0,u.gU(u))
s=u}return s},
gdm:function(){var u,t=this,s=t.cx
if(s==null){s=t.db
s=s.gU(s)
u=t.dx
u=t.cx=s.u(0,u.gU(u))
s=u}return s},
c2:function(a){var u=this.dy
u.push(a==null?(u&&C.a).gbV(u):a)},
c1:function(){var u=this.dy
if(u.length>1)u.pop()},
aP:function(a){var u=a.b
if(u.length===0)throw H.f(P.m("May not cache a shader with no name."))
if(this.fr.cQ(0,u))throw H.f(P.m('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.m(0,u,a)}}
E.fS.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.fT.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.fU.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.d2.prototype={
cn:function(a){this.dj()},
cm:function(){return this.cn(null)},
gfD:function(){var u,t=this,s=Date.now(),r=C.d.a5(P.jm(s-t.cx.a).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.a5(s,!1)
return u/r},
cC:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.u()
if(typeof r!=="number")return H.r(r)
u=C.b.bS(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.u()
t=C.b.bS(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.jI(C.j,s.gh_())}},
dj:function(){if(!this.ch){this.ch=!0
var u=window
C.t.dX(u)
C.t.f4(u,W.jV(new E.hr(this),P.ab))}},
fZ:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.cC()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.a5(r,!1)
s.y=P.jm(r-s.r.a).a*0.000001
r=s.cy
C.a.sj(r.a,0)
r.aA()
r=s.db
C.a.sj(r.a,0)
r.aA()
r=s.dx
C.a.sj(r.a,0)
r.aA()
r=s.dy;(r&&C.a).sj(r,0)
s.dy.push(null)
o.V(p.e)}}catch(q){u=H.iI(q)
t=H.ja(q)
P.jd("Error: "+H.e(u))
P.jd("Stack: "+H.e(t))
throw H.f(u)}}}
E.hr.prototype={
$1:function(a){var u=this.a
if(u.ch){u.ch=!1
u.fZ()}}}
Z.df.prototype={}
Z.cl.prototype={
F:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.iI(s)
t=P.m('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.e(u))
throw H.f(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.b2.prototype={}
Z.af.prototype={
a9:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
F:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].F(a)},
a0:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
V:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.c(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.t],p=H.b([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)p.push(u[s].i(0))
r=H.b([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a3(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.q(p,", ")+"\nAttrs:   "+C.a.q(r,", ")}}
Z.be.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.bW(this.c))+"'")+"]"}}
Z.ao.prototype={
gcc:function(a){var u=this.a,t=(u&$.Q().a)!==0?3:0
if((u&$.aD().a)!==0)t+=3
if((u&$.aC().a)!==0)t+=3
if((u&$.ap().a)!==0)t+=2
if((u&$.aE().a)!==0)t+=3
if((u&$.ch().a)!==0)t+=3
if((u&$.ci().a)!==0)t+=4
if((u&$.by().a)!==0)++t
return(u&$.aB().a)!==0?t+4:t},
fl:function(a){var u,t=$.Q(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aD()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aC()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ap()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aE()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ch()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ci()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.by()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aB()
if((s&t.a)!==0)if(u===a)return t
return $.kk()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.ao))return!1
return this.a===b.a},
i:function(a){var u=H.b([],[P.t]),t=this.a
if((t&$.Q().a)!==0)u.push("Pos")
if((t&$.aD().a)!==0)u.push("Norm")
if((t&$.aC().a)!==0)u.push("Binm")
if((t&$.ap().a)!==0)u.push("Txt2D")
if((t&$.aE().a)!==0)u.push("TxtCube")
if((t&$.ch().a)!==0)u.push("Clr3")
if((t&$.ci().a)!==0)u.push("Clr4")
if((t&$.by().a)!==0)u.push("Weight")
if((t&$.aB().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.a.q(u,"|")}}
D.eo.prototype={}
D.aH.prototype={
k:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.M]}]):u).push(b)},
N:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.a.ae(s,b)
if(s===!0){s=t.a
u=(s&&C.a).N(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.a.ae(s,b)
if(s===!0){s=t.b
u=(s&&C.a).N(s,b)||u}return u},
v:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.M()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.J(P.jq(u,!0,{func:1,ret:-1,args:[D.M]}),new D.eM(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.M]}])
C.a.J(u,new D.eN(q))}return!0},
bL:function(){return this.v(null)},
aw:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.v(u)}}}}
D.eM.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.eN.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.M.prototype={}
D.aM.prototype={}
D.aN.prototype={}
D.n.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cm.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cm))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.cD.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cD))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.f4.prototype={
fU:function(a){this.c=a.b
this.d.k(0,a.a)
return!1},
fQ:function(a){this.c=a.b
this.d.N(0,a.a)
return!1}}
X.cH.prototype={}
X.fa.prototype={
aN:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.u()
u=b.b
t=q.ch
if(typeof u!=="number")return u.u()
s=new V.V(o.a+n*m,o.b+u*t)
t=q.a.gaH()
r=new X.at(a,V.av(),q.x,t,s)
r.b=!0
q.z=new P.a5(p,!1)
q.x=s
return r},
c0:function(a,b){this.r=a.a
return!1},
b_:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.dr()
if(typeof u!=="number")return u.am()
this.r=(u&~t)>>>0
return!1},
aZ:function(a,b){var u=this.d
if(u==null)return!1
u.v(this.aN(a,b))
return!0},
fV:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaH()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.u()
q=a.b
p=o.cy
if(typeof q!=="number")return q.u()
t=new X.bQ(new V.B(s*r,q*p),u,t)
t.b=!0
n.v(t)
return!0},
eC:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.cH(c,r.a.gaH(),b)
s.b=!0
t.v(s)
r.y=new P.a5(u,!1)
r.x=V.av()}}
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
X.at.prototype={}
X.fz.prototype={
bl:function(a,b,c){var u=this,t=new P.a5(Date.now(),!1),s=u.a.gaH(),r=new X.at(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
c0:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.v(this.bl(a,b,!0))
return!0},
b_:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.dr()
if(typeof t!=="number")return t.am()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.v(u.bl(a,b,!0))
return!0},
aZ:function(a,b){var u=this.d
if(u==null)return!1
u.v(this.bl(a,b,!1))
return!0},
fW:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaH()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.u()
r=a.b
q=p.ch
if(typeof r!=="number")return r.u()
u=new X.bQ(new V.B(t*s,r*q),u,b)
u.b=!0
o.v(u)
return!0},
gcS:function(){var u=this.b
return u==null?this.b=D.w():u},
gc6:function(){var u=this.c
return u==null?this.c=D.w():u},
gd9:function(){var u=this.d
return u==null?this.d=D.w():u}}
X.bQ.prototype={}
X.fN.prototype={}
X.d6.prototype={}
X.hu.prototype={
aN:function(a,b){var u=this,t=new P.a5(Date.now(),!1),s=a.length>0?a[0]:V.av(),r=u.a.gaH(),q=new X.d6(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
fT:function(a){var u=this.b
if(u==null)return!1
u.v(this.aN(a,!0))
return!0},
fR:function(a){var u=this.c
if(u==null)return!1
u.v(this.aN(a,!0))
return!0},
fS:function(a){var u=this.d
if(u==null)return!1
u.v(this.aN(a,!1))
return!0}}
X.da.prototype={
gaH:function(){var u=this.a,t=C.f.gcO(u).c
t.toString
u=C.f.gcO(u).d
u.toString
return V.bX(0,0,t,u)},
ct:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.cD(u,new X.a7(t,a.altKey,a.shiftKey))},
aF:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.a7(t,a.altKey,a.shiftKey)},
bA:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.a7(t,a.altKey,a.shiftKey)},
ar:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.H()
u=t.top
if(typeof r!=="number")return r.H()
return new V.V(s-q,r-u)},
aO:function(a){return new V.B(a.movementX,a.movementY)},
bx:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.V])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
q=C.b.W(r.pageX)
C.b.W(r.pageY)
p=o.left
C.b.W(r.pageX)
n.push(new V.V(q-p,C.b.W(r.pageY)-o.top))}return n},
ap:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cm(u,new X.a7(t,a.altKey,a.shiftKey))},
bo:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.H()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.H()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
ew:function(a){this.f=!0},
ef:function(a){this.f=!1},
el:function(a){if(this.f&&this.bo(a))a.preventDefault()},
eA:function(a){var u
if(!this.f)return
u=this.ct(a)
this.b.fU(u)},
ey:function(a){var u
if(!this.f)return
u=this.ct(a)
this.b.fQ(u)},
eE:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aF(a)
if(r.x){u=r.ap(a)
t=r.aO(a)
if(r.d.c0(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.ap(a)
s=r.ar(a)
if(r.c.c0(u,s))a.preventDefault()},
eI:function(a){var u,t,s,r=this
r.aF(a)
u=r.ap(a)
if(r.x){t=r.aO(a)
if(r.d.b_(u,t))a.preventDefault()
return}if(r.r)return
s=r.ar(a)
if(r.c.b_(u,s))a.preventDefault()},
ep:function(a){var u,t,s,r=this
if(!r.bo(a)){r.aF(a)
u=r.ap(a)
if(r.x){t=r.aO(a)
if(r.d.b_(u,t))a.preventDefault()
return}if(r.r)return
s=r.ar(a)
if(r.c.b_(u,s))a.preventDefault()}},
eG:function(a){var u,t,s,r=this
r.aF(a)
u=r.ap(a)
if(r.x){t=r.aO(a)
if(r.d.aZ(u,t))a.preventDefault()
return}if(r.r)return
s=r.ar(a)
if(r.c.aZ(u,s))a.preventDefault()},
en:function(a){var u,t,s,r=this
if(!r.bo(a)){r.aF(a)
u=r.ap(a)
if(r.x){t=r.aO(a)
if(r.d.aZ(u,t))a.preventDefault()
return}if(r.r)return
s=r.ar(a)
if(r.c.aZ(u,s))a.preventDefault()}},
eK:function(a){var u,t,s=this
s.aF(a)
u=new V.B((a&&C.r).gfw(a),C.r.gfz(a)).t(0,180)
if(s.x){if(s.d.fV(u))a.preventDefault()
return}if(s.r)return
t=s.ar(a)
if(s.c.fW(u,t))a.preventDefault()},
eM:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ap(s.y)
t=s.ar(s.y)
s.d.eC(u,t,r)}},
f1:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bA(a)
u=t.bx(a)
if(t.e.fT(u))a.preventDefault()},
eY:function(a){var u
this.bA(a)
u=this.bx(a)
if(this.e.fR(u))a.preventDefault()},
f_:function(a){var u
this.bA(a)
u=this.bx(a)
if(this.e.fS(u))a.preventDefault()}}
D.bc.prototype={
an:function(a){var u=this.r
if(u!=null)u.v(a)},
dI:function(){return this.an(null)},
$ia0:1}
D.a0.prototype={}
D.cE.prototype={
an:function(a){var u=this.x
if(u!=null)u.v(a)},
cA:function(a){var u=this.y
if(u!=null)u.v(a)},
eB:function(){return this.cA(null)},
eO:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.o)(a),++t){s=a[t]
if(s==null||this.dT(s))return!1}return!0},
e9:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcz(),s=[{func:1,ret:-1,args:[D.M]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q instanceof D.bc)this.e.push(q)
p=q.r
if(p==null){p=new D.aH()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}u=new D.aM()
u.b=!0
this.an(u)},
eS:function(a,b){var u,t,s
for(u=b.gT(b),t=this.gcz();u.w();){s=u.gI(u)
C.a.N(this.e,s)
s.gl().N(0,t)}u=new D.aN()
u.b=!0
this.an(u)},
dT:function(a){var u=C.a.ae(this.e,a)
return u},
$aj:function(){return[D.a0]},
$aaq:function(){return[D.a0]}}
D.fM.prototype={$ia0:1}
D.h9.prototype={$ia0:1}
V.L.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.L))return!1
u=b.a
t=$.u().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+"]"}}
V.R.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.R))return!1
u=b.a
t=$.u().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.z(u.a,3,0)+", "+V.z(u.b,3,0)+", "+V.z(u.c,3,0)+", "+V.z(u.d,3,0)+"]"}}
V.eL.prototype={}
V.bO.prototype={
Z:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.G])
return t},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bO))return!1
u=b.a
t=$.u().a
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
i:function(a){var u,t,s,r,q=this,p=[P.G],o=V.bx(H.b([q.a,q.d,q.r],p),3,0),n=V.bx(H.b([q.b,q.e,q.x],p),3,0),m=V.bx(H.b([q.c,q.f,q.y],p),3,0)
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
V.a6.prototype={
Z:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.G])
return t},
bU:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.u().a)return V.aQ()
u=1/b1
t=-n
s=-a0
return V.aj((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
u:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.aj(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bf:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.y(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
c5:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.W(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a6))return!1
u=b.a
t=$.u().a
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
A:function(a){var u,t,s,r,q,p=this,o=[P.G],n=V.bx(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.bx(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.bx(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.bx(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
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
K:function(){return this.A("")}}
V.V.prototype={
H:function(a,b){return new V.V(this.a-b.a,this.b-b.b)},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.V))return!1
u=b.a
t=$.u().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+"]"}}
V.W.prototype={
H:function(a,b){return new V.W(this.a-b.a,this.b-b.b,this.c-b.c)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.W))return!1
u=b.a
t=$.u().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+"]"}}
V.aw.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aw))return!1
u=b.a
t=$.u().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.z(u.a,3,0)+", "+V.z(u.b,3,0)+", "+V.z(u.c,3,0)+", "+V.z(u.d,3,0)+"]"}}
V.cS.prototype={
gab:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cS))return!1
u=b.a
t=$.u().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.z(u.a,3,0)+", "+V.z(u.b,3,0)+", "+V.z(u.c,3,0)+", "+V.z(u.d,3,0)+"]"}}
V.B.prototype={
aY:function(a){return Math.sqrt(this.B(this))},
B:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.u()
if(typeof r!=="number")return H.r(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.r(t)
return s*r+u*t},
u:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.u()
u=this.b
if(typeof u!=="number")return u.u()
return new V.B(t*b,u*b)},
t:function(a,b){var u,t
if(Math.abs(b-0)<$.u().a){u=$.jO
return u==null?$.jO=new V.B(0,0):u}u=this.a
if(typeof u!=="number")return u.t()
t=this.b
if(typeof t!=="number")return t.t()
return new V.B(u/b,t/b)},
n:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.B))return!1
u=b.a
t=this.a
s=$.u()
s.toString
if(typeof u!=="number")return u.H()
if(typeof t!=="number")return H.r(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.H()
if(typeof t!=="number")return H.r(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+"]"}}
V.y.prototype={
aY:function(a){return Math.sqrt(this.B(this))},
B:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bW:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.y(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aU:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.y(u*t-s*r,s*q-p*t,p*r-u*q)},
C:function(a,b){return new V.y(this.a+b.a,this.b+b.b,this.c+b.c)},
O:function(a){return new V.y(-this.a,-this.b,-this.c)},
t:function(a,b){if(Math.abs(b-0)<$.u().a)return V.de()
return new V.y(this.a/b,this.b/b,this.c/b)},
d6:function(){var u=$.u().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.y))return!1
u=b.a
t=$.u().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+"]"}}
V.bq.prototype={
aY:function(a){var u=this,t=u.a,s=u.b,r=u.c,q=u.d
return Math.sqrt(t*t+s*s+r*r+q*q)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bq))return!1
u=b.a
t=$.u().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.z(u.a,3,0)+", "+V.z(u.b,3,0)+", "+V.z(u.c,3,0)+", "+V.z(u.d,3,0)+"]"}}
U.er.prototype={
bh:function(a){var u=V.mf(a,this.c,this.b)
return u},
gl:function(){var u=this.y
return u==null?this.y=D.w():u},
M:function(a){var u=this.y
if(u!=null)u.v(a)},
sc7:function(a,b){},
sbY:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.u().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bh(u)}s=new D.n("maximumLocation",s,t.b)
s.b=!0
t.M(s)}},
sc_:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.u().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bh(u)}s=new D.n("minimumLocation",s,t.c)
s.b=!0
t.M(s)}},
saa:function(a,b){var u,t=this
b=t.bh(b)
u=t.d
if(!(Math.abs(u-b)<$.u().a)){t.d=b
u=new D.n("location",u,b)
u.b=!0
t.M(u)}},
sbZ:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.u().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.n("maximumVelocity",r,a)
r.b=!0
s.M(r)}},
sR:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.u().a)){u.f=a
t=new D.n("velocity",t,a)
t.b=!0
u.M(t)}},
sbK:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.u().a)){this.x=a
u=new D.n("dampening",u,a)
u.b=!0
this.M(u)}},
a1:function(a,b){var u,t,s,r=this,q=r.f,p=$.u().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.saa(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.u().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sR(u)}}}
U.bF.prototype={
gl:function(){var u=this.b
return u==null?this.b=D.w():u},
sU:function(a,b){var u,t,s,r=this
if(!J.A(r.a,b)){u=r.a
r.a=b
t=new D.n("matrix",u,b)
t.b=!0
s=r.b
if(s!=null)s.v(t)}},
aJ:function(a,b,c){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bF))return!1
return J.A(this.a,b.a)},
i:function(a){return"Constant: "+this.a.A("          ")}}
U.bI.prototype={
gl:function(){var u=this.e
return u==null?this.e=D.w():u},
M:function(a){var u=this.e
if(u!=null)u.v(a)},
a8:function(){return this.M(null)},
e7:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaE(),s=[{func:1,ret:-1,args:[D.M]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q!=null){p=q.gl()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.aM()
u.b=!0
this.M(u)},
eQ:function(a,b){var u,t
for(u=b.gT(b),t=this.gaE();u.w();)u.gI(u).gl().N(0,t)
u=new D.aN()
u.b=!0
this.M(u)},
aJ:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.ac()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.X(r,r.length),u=null;r.w();){q=r.d
if(q!=null){t=q.aJ(0,b,c)
if(t!=null)u=u==null?t:t.u(0,u)}}s.f=u==null?V.aQ():u
r=s.e
if(r!=null)r.aw(0)}return s.f},
n:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bI))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.c(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.c(r,t)
if(!J.A(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$aj:function(){return[U.a1]},
$aaq:function(){return[U.a1]},
$ia1:1}
U.a1.prototype={}
U.db.prototype={
gl:function(){var u=this.cy
return u==null?this.cy=D.w():u},
M:function(a){var u=this.cy
if(u!=null)u.v(a)},
a8:function(){return this.M(null)},
aQ:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gcS().k(0,u.gbp())
u.a.c.gd9().k(0,u.gbr())
u.a.c.gc6().k(0,u.gbt())
return!0},
bq:function(a){var u=this
if(!J.A(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bs:function(a){var u,t,s,r,q,p,o,n=this
H.h(a,"$iat")
if(!n.y)return
if(n.x){u=a.d.H(0,a.y)
u=new V.B(u.a,u.b)
u=u.B(u)
t=n.r
if(typeof t!=="number")return H.r(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.H(0,a.y)
u=new V.B(t.a,t.b).u(0,2).t(0,u.gab())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.u()
s=n.e
if(typeof s!=="number")return H.r(s)
t.sR(u*10*s)}else{u=a.c
t=a.d
s=t.H(0,a.y)
r=new V.B(s.a,s.b).u(0,2).t(0,u.gab())
s=n.b
q=r.a
if(typeof q!=="number")return q.O()
p=n.e
if(typeof p!=="number")return H.r(p)
o=n.z
if(typeof o!=="number")return H.r(o)
s.saa(0,-q*p+o)
n.b.sR(0)
t=t.H(0,a.z)
n.Q=new V.B(t.a,t.b).u(0,2).t(0,u.gab())}n.a8()},
bu:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.B(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.u()
s=r.e
if(typeof s!=="number")return H.r(s)
u.sR(t*10*s)
r.a8()}},
aJ:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.ac()
if(q<p){r.ch=p
u=b.y
r.b.a1(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.aj(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$ia1:1}
U.dc.prototype={
gl:function(){var u=this.fx
return u==null?this.fx=D.w():u},
M:function(a){var u=this.fx
if(u!=null)u.v(a)},
a8:function(){return this.M(null)},
aQ:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gcS().k(0,s.gbp())
s.a.c.gd9().k(0,s.gbr())
s.a.c.gc6().k(0,s.gbt())
u=s.a.d
t=u.f
u=t==null?u.f=D.w():t
u.k(0,s.ge0())
u=s.a.d
t=u.d
u=t==null?u.d=D.w():t
u.k(0,s.ge2())
u=s.a.e
t=u.b
u=t==null?u.b=D.w():t
u.k(0,s.gfg())
u=s.a.e
t=u.d
u=t==null?u.d=D.w():t
u.k(0,s.gfe())
u=s.a.e
t=u.c
u=t==null?u.c=D.w():t
u.k(0,s.gfc())
return!0},
ak:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.O()
u=-u}if(this.r){if(typeof t!=="number")return t.O()
t=-t}return new V.B(u,t)},
bq:function(a){var u=this
H.h(a,"$iat")
if(!J.A(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bs:function(a){var u,t,s,r,q,p,o,n=this
H.h(a,"$iat")
if(!n.cx)return
if(n.ch){u=a.d.H(0,a.y)
u=new V.B(u.a,u.b)
u=u.B(u)
t=n.Q
if(typeof t!=="number")return H.r(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.H(0,a.y)
u=n.ak(new V.B(t.a,t.b).u(0,2).t(0,u.gab()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.r(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.r(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.H(0,a.y)
r=n.ak(new V.B(s.a,s.b).u(0,2).t(0,u.gab()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.r(p)
o=n.cy
if(typeof o!=="number")return H.r(o)
s.saa(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.r(q)
s=n.db
if(typeof s!=="number")return H.r(s)
o.saa(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.H(0,a.z)
n.dx=n.ak(new V.B(t.a,t.b).u(0,2).t(0,u.gab()))}n.a8()},
bu:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.B(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.r(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.r(u)
s.sR(-t*10*u)
r.a8()}},
e1:function(a){var u=this
if(H.h(a,"$icH").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
e3:function(a){var u,t,s,r,q,p,o,n=this
H.h(a,"$iat")
if(!J.A(n.d,a.x.b))return
u=a.c
t=a.d
s=t.H(0,a.y)
r=n.ak(new V.B(s.a,s.b).u(0,2).t(0,u.gab()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.r(p)
o=n.cy
if(typeof o!=="number")return H.r(o)
s.saa(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.r(q)
s=n.db
if(typeof s!=="number")return H.r(s)
o.saa(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.H(0,a.z)
n.dx=n.ak(new V.B(t.a,t.b).u(0,2).t(0,u.gab()))
n.a8()},
fh:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
ff:function(a){var u,t,s,r,q,p,o,n=this
H.h(a,"$id6")
if(!n.cx)return
if(n.ch){u=a.d.H(0,a.y)
u=new V.B(u.a,u.b)
u=u.B(u)
t=n.Q
if(typeof t!=="number")return H.r(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.H(0,a.y)
u=n.ak(new V.B(t.a,t.b).u(0,2).t(0,u.gab()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.r(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.r(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.H(0,a.y)
r=n.ak(new V.B(s.a,s.b).u(0,2).t(0,u.gab()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.r(p)
o=n.cy
if(typeof o!=="number")return H.r(o)
s.saa(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.r(q)
s=n.db
if(typeof s!=="number")return H.r(s)
o.saa(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.H(0,a.z)
n.dx=n.ak(new V.B(t.a,t.b).u(0,2).t(0,u.gab()))}n.a8()},
fd:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.B(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.r(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.r(u)
s.sR(-t*10*u)
r.a8()}},
aJ:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.ac()
if(q<p){r.dy=p
u=b.y
r.c.a1(0,u)
r.b.a1(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.aj(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.u(0,V.aj(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$ia1:1}
U.dd.prototype={
gl:function(){var u=this.r
return u==null?this.r=D.w():u},
M:function(a){var u=this.r
if(u!=null)u.v(a)},
aQ:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.w():t
t=r.ge4()
u.k(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.w():s).k(0,t)
return!0},
e5:function(a){var u,t,s,r,q=this
if(!J.A(q.b,q.a.b.c))return
H.h(a,"$ibQ")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.u()
r=u+t*s
if(u!==r){q.d=r
u=new D.n("zoom",u,r)
u.b=!0
q.M(u)}},
aJ:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.kJ(u,u,u)}return t.f},
$ia1:1}
M.cn.prototype={
gl:function(){var u=this.r
return u==null?this.r=D.w():u},
P:function(a){var u=this.r
if(u!=null)u.v(a)},
ao:function(){return this.P(null)},
eU:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gS(),s=[{func:1,ret:-1,args:[D.M]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q!=null){p=q.gl()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.aM()
u.b=!0
this.P(u)},
eW:function(a,b){var u,t
for(u=b.gT(b),t=this.gS();u.w();)u.gI(u).gl().N(0,t)
u=new D.aN()
u.b=!0
this.P(u)},
V:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.X(u,u.length);u.w();){t=u.d
if(t!=null)t.V(a)}s.f=!1},
$aj:function(){return[M.a9]},
$aaq:function(){return[M.a9]},
$ia9:1}
M.co.prototype={
gl:function(){var u=this.r
return u==null?this.r=D.w():u},
P:function(a){var u=this.r
if(u!=null)u.v(a)},
ao:function(){return this.P(null)},
saG:function(a){var u,t,s=this
if(a==null)a=new X.eZ()
u=s.b
if(u!==a){if(u!=null)u.gl().N(0,s.gS())
t=s.b
s.b=a
a.gl().k(0,s.gS())
u=new D.n("camera",t,s.b)
u.b=!0
s.P(u)}},
sal:function(a,b){var u,t,s=this
if(b==null)b=X.iT(!0,null)
u=s.c
if(u!==b){if(u!=null)u.gl().N(0,s.gS())
t=s.c
s.c=b
b.gl().k(0,s.gS())
u=new D.n("target",t,s.c)
u.b=!0
s.P(u)}},
sax:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gl().N(0,t.gS())
u=t.d
t.d=a
if(a!=null)a.gl().k(0,t.gS())
s=new D.n("technique",u,t.d)
s.b=!0
t.P(s)}},
V:function(a){var u,t=this
a.c2(t.d)
t.c.F(a)
t.b.F(a)
u=t.d
if(u!=null)u.a1(0,a)
t.e.a1(0,a)
t.e.V(a)
t.b.a0(a)
t.c.a0(a)
a.c1()},
$ia9:1}
M.ct.prototype={
P:function(a){var u=this.y
if(u!=null)u.v(a)},
ao:function(){return this.P(null)},
eh:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gS(),s=[{func:1,ret:-1,args:[D.M]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.aH()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.aM()
u.b=!0
this.P(u)},
ej:function(a,b){var u,t
for(u=b.gT(b),t=this.gS();u.w();)u.gI(u).gl().N(0,t)
u=new D.aN()
u.b=!0
this.P(u)},
saG:function(a){var u,t,s=this
if(a==null)a=X.jw(null)
u=s.b
if(u!==a){if(u!=null)u.gl().N(0,s.gS())
t=s.b
s.b=a
a.gl().k(0,s.gS())
u=new D.n("camera",t,s.b)
u.b=!0
s.P(u)}},
sal:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gl().N(0,t.gS())
u=t.c
t.c=b
b.gl().k(0,t.gS())
s=new D.n("target",u,t.c)
s.b=!0
t.P(s)}},
sax:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gl().N(0,t.gS())
u=t.d
t.d=a
if(a!=null)a.gl().k(0,t.gS())
s=new D.n("technique",u,t.d)
s.b=!0
t.P(s)}},
gl:function(){var u=this.y
return u==null?this.y=D.w():u},
V:function(a){var u,t=this
a.c2(t.d)
t.c.F(a)
t.b.F(a)
u=t.d
if(u!=null)u.a1(0,a)
for(u=t.e.a,u=new J.X(u,u.length);u.w();)u.d.a1(0,a)
for(u=t.e.a,u=new J.X(u,u.length);u.w();)u.d.V(a)
t.b.toString
a.cy.av()
a.db.av()
t.c.a0(a)
a.c1()},
$ia9:1}
M.cw.prototype={
gl:function(){var u=this.b
return u==null?this.b=D.w():u},
P:function(a){var u=this.b
if(u!=null)u.v(a)},
ao:function(){return this.P(null)},
V:function(a){var u=this.e
if(u!=null)u.V(a)
u=this.r
if(u!=null)u.V(a)},
$ia9:1}
M.a9.prototype={}
A.cj.prototype={}
A.ef.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
fA:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
aV:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.S.prototype={
gaj:function(a){var u=this.a?1:0,t=this.c?4:0
return u|0|t},
i:function(a){var u=this.a?1:0,t=this.c?4:0
return""+(u|0|t)},
n:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.S))return!1
if(this.a===b.a)u=this.c===b.c
else u=!1
return u}}
A.eC.prototype={}
A.eW.prototype={
cF:function(a,b){if(b!=null&&b.d)a.dt(b)}}
A.eX.prototype={
aB:function(a,b,c,d){var u,t,s,r,q=c.length
if(0>=q)return H.c(c,0)
u=Math.abs(c[0]-0)<$.u().a
if(u){if(0>=d.length)return H.c(d,0)
t=d[0]
d=C.a.cd(d,1)
c=C.a.cd(c,1);--q}else t=0
s=a.a+="vec4 blur"+b+"()\n"
s+="{\n"
a.a=s
if(u)s=a.a+="  vec4 color = texture2D(colorTxt, txt2D)*"+H.e(t)+";\n"
else s=a.a=s+"  vec4 color = vec4(0.0);\n"
s=a.a=s+"  vec2 offset;\n"
for(r=0;r<q;++r){if(r>=c.length)return H.c(c,r)
a.a+="  offset = blurScale * "+H.e(c[r])+";\n"
if(r>=d.length)return H.c(d,r)
a.a+="  color += texture2D(colorTxt, txt2D + offset) * "+H.e(d[r])+";\n"
if(r>=d.length)return H.c(d,r)
s=a.a+="  color += texture2D(colorTxt, txt2D - offset) * "+H.e(d[r])+";\n"}s+="  return color; \n"
a.a=s
s+="}\n"
a.a=s
a.a=s+"\n"},
i:function(a){return this.b}}
A.ff.prototype={
dC:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.ax("")
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
A.lw(c0,u)
A.ly(c0,u)
A.lx(c0,u)
A.lA(c0,u)
A.lB(c0,u)
A.lz(c0,u)
A.lC(c0,u)
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
b5.aX(0,s.charCodeAt(0)==0?s:s,A.lv(b5.z))
b5.Q=b5.x.h(0,"posAttr")
b5.cx=b5.x.h(0,"normAttr")
b5.ch=b5.x.h(0,"binmAttr")
b5.cy=b5.x.h(0,"txt2DAttr")
b5.db=b5.x.h(0,"txtCubeAttr")
b5.dx=b5.x.h(0,"bendAttr")
if(c0.dx)b5.id=H.h(b5.y.D(0,"invViewMat"),"$iN")
if(t)b5.dy=H.h(b5.y.D(0,"objMat"),"$iN")
if(r)b5.fr=H.h(b5.y.D(0,"viewObjMat"),"$iN")
b5.fy=H.h(b5.y.D(0,"projViewObjMat"),"$iN")
if(c0.ry)b5.k1=H.h(b5.y.D(0,"txt2DMat"),"$ibp")
if(c0.x1)b5.k2=H.h(b5.y.D(0,"txtCubeMat"),"$iN")
if(c0.x2)b5.k3=H.h(b5.y.D(0,"colorMat"),"$iN")
b5.r1=H.b([],[A.N])
t=c0.y2
if(t>0){b5.k4=b5.y.D(0,"bendMatCount")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.h(0,q)
if(m==null)H.q(P.m(b7+q+b8))
s.push(H.h(m,"$iN"))}}t=c0.a
if(t.a)b5.r2=H.h(b5.y.D(0,"emissionClr"),"$iC")
if(t.c)b5.ry=H.h(b5.y.D(0,"emissionTxt"),"$iO")
t=c0.b
if(t.a)b5.x1=H.h(b5.y.D(0,"ambientClr"),"$iC")
if(t.c)b5.y1=H.h(b5.y.D(0,"ambientTxt"),"$iO")
t=c0.c
if(t.a)b5.y2=H.h(b5.y.D(0,"diffuseClr"),"$iC")
if(t.c)b5.ba=H.h(b5.y.D(0,"diffuseTxt"),"$iO")
t=c0.d
if(t.a)b5.cT=H.h(b5.y.D(0,"invDiffuseClr"),"$iC")
if(t.c)b5.cU=H.h(b5.y.D(0,"invDiffuseTxt"),"$iO")
t=c0.e
s=t.a
if(!s)r=t.c
else r=!0
if(r){b5.cX=H.h(b5.y.D(0,"shininess"),"$iJ")
if(s)b5.cV=H.h(b5.y.D(0,"specularClr"),"$iC")
if(t.c)b5.cW=H.h(b5.y.D(0,"specularTxt"),"$iO")}if(c0.f.c)b5.cY=H.h(b5.y.D(0,"bumpTxt"),"$iO")
if(c0.cy){b5.cZ=H.h(b5.y.D(0,"envSampler"),"$iO")
t=c0.r
if(t.a)b5.d_=H.h(b5.y.D(0,"reflectClr"),"$iC")
if(t.c)b5.d0=H.h(b5.y.D(0,"reflectTxt"),"$iO")
t=c0.x
s=t.a
if(!s)r=t.c
else r=!0
if(r){b5.d1=H.h(b5.y.D(0,"refraction"),"$iJ")
if(s)b5.d2=H.h(b5.y.D(0,"refractClr"),"$iC")
if(t.c)b5.d3=H.h(b5.y.D(0,"refractTxt"),"$iO")}}t=c0.y
if(t.a)b5.d4=H.h(b5.y.D(0,"alpha"),"$iJ")
if(t.c)b5.d5=H.h(b5.y.D(0,"alphaTxt"),"$iO")
t=P.x
s=[t,A.b0]
b5.bM=new H.I(s)
b5.bN=new H.I([t,[P.bi,A.bZ]])
b5.bO=new H.I(s)
b5.bP=new H.I([t,[P.bi,A.c_]])
b5.bQ=new H.I(s)
b5.bR=new H.I([t,[P.bi,A.c0]])
if(c0.id){for(t=c0.z,s=t.length,r=[A.bZ],l=0;l<t.length;t.length===s||(0,H.o)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.am()
p=(j&1)!==0
if(p){o=b5.y
g=i+"s["+n+"].objUp"
m=o.h(0,g)
if(m==null)H.q(P.m(b7+g+b8))
H.h(m,"$iC")
o=b5.y
g=i+"s["+n+"].objRight"
f=o.h(0,g)
if(f==null)H.q(P.m(b7+g+b8))
H.h(f,"$iC")
o=b5.y
g=i+"s["+n+"].objDir"
e=o.h(0,g)
if(e==null)H.q(P.m(b7+g+b8))
H.h(e,"$iC")
d=e
c=f
b=m}else{d=b6
c=d
b=c}o=b5.y
g=i+"s["+n+"].viewDir"
m=o.h(0,g)
if(m==null)H.q(P.m(b7+g+b8))
H.h(m,"$iC")
o=b5.y
g=i+"s["+n+"].color"
f=o.h(0,g)
if(f==null)H.q(P.m(b7+g+b8))
H.h(f,"$iC")
if(p){p=b5.y
o=i+"sTexture2D"+n
e=p.h(0,o)
if(e==null)H.q(P.m(b7+o+b8))
H.h(e,"$iac")
a=e}else a=b6
h.push(new A.bZ(b,c,d,m,f,a))}b5.bN.m(0,j,h)
q=b5.bM
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.q(P.m(b7+o+b8))
q.m(0,j,m)}for(t=c0.Q,s=t.length,r=[A.c_],l=0;l<t.length;t.length===s||(0,H.o)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.h(0,o)
if(m==null)H.q(P.m(b7+o+b8))
H.h(m,"$iC")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.h(0,o)
if(f==null)H.q(P.m(b7+o+b8))
H.h(f,"$iC")
p=b5.y
o=i+"s["+n+"].color"
e=p.h(0,o)
if(e==null)H.q(P.m(b7+o+b8))
H.h(e,"$iC")
if(typeof j!=="number")return j.am()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
a0=p.h(0,o)
if(a0==null)H.q(P.m(b7+o+b8))
H.h(a0,"$ibp")
a1=a0}else a1=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
a0=p.h(0,o)
if(a0==null)H.q(P.m(b7+o+b8))
H.h(a0,"$iO")
a=a0}else a=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
a0=p.h(0,o)
if(a0==null)H.q(P.m(b7+o+b8))
H.h(a0,"$iO")
p=b5.y
o=i+"s["+n+"].shadowAdj"
a2=p.h(0,o)
if(a2==null)H.q(P.m(b7+o+b8))
H.h(a2,"$ib1")
a3=a0
a4=a2}else{a3=b6
a4=a3}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
a0=p.h(0,o)
if(a0==null)H.q(P.m(b7+o+b8))
H.h(a0,"$iJ")
p=b5.y
o=i+"s["+n+"].att1"
a2=p.h(0,o)
if(a2==null)H.q(P.m(b7+o+b8))
H.h(a2,"$iJ")
p=b5.y
o=i+"s["+n+"].att2"
a5=p.h(0,o)
if(a5==null)H.q(P.m(b7+o+b8))
H.h(a5,"$iJ")
a6=a5
a7=a2
a8=a0}else{a6=b6
a7=a6
a8=a7}h.push(new A.c_(m,f,a1,e,a,a3,a4,a8,a7,a6))}b5.bP.m(0,j,h)
q=b5.bO
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.q(P.m(b7+o+b8))
q.m(0,j,m)}for(t=c0.ch,s=t.length,r=[A.c0],l=0;l<t.length;t.length===s||(0,H.o)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.h(0,o)
if(m==null)H.q(P.m(b7+o+b8))
H.h(m,"$iC")
p=b5.y
o=i+"s["+n+"].objDir"
f=p.h(0,o)
if(f==null)H.q(P.m(b7+o+b8))
H.h(f,"$iC")
p=b5.y
o=i+"s["+n+"].viewPnt"
e=p.h(0,o)
if(e==null)H.q(P.m(b7+o+b8))
H.h(e,"$iC")
p=b5.y
o=i+"s["+n+"].color"
a0=p.h(0,o)
if(a0==null)H.q(P.m(b7+o+b8))
H.h(a0,"$iC")
if(typeof j!=="number")return j.am()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
a2=p.h(0,o)
if(a2==null)H.q(P.m(b7+o+b8))
H.h(a2,"$iC")
p=b5.y
o=i+"s["+n+"].objRight"
a5=p.h(0,o)
if(a5==null)H.q(P.m(b7+o+b8))
H.h(a5,"$iC")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.h(0,o)
if(a9==null)H.q(P.m(b7+o+b8))
H.h(a9,"$iJ")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.h(0,o)
if(b0==null)H.q(P.m(b7+o+b8))
H.h(b0,"$iJ")
b1=b0
b2=a9
c=a5
b=a2}else{b1=b6
b2=b1
c=b2
b=c}p=(j&2)!==0
if(p){o=b5.y
g=i+"s["+n+"].shadowAdj"
a2=o.h(0,g)
if(a2==null)H.q(P.m(b7+g+b8))
H.h(a2,"$ib1")
a4=a2}else a4=b6
if((j&8)!==0){o=b5.y
g=i+"s["+n+"].cutoff"
a2=o.h(0,g)
if(a2==null)H.q(P.m(b7+g+b8))
H.h(a2,"$iJ")
o=b5.y
g=i+"s["+n+"].coneAngle"
a5=o.h(0,g)
if(a5==null)H.q(P.m(b7+g+b8))
H.h(a5,"$iJ")
b3=a5
b4=a2}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
g=i+"s["+n+"].att0"
a2=o.h(0,g)
if(a2==null)H.q(P.m(b7+g+b8))
H.h(a2,"$iJ")
o=b5.y
g=i+"s["+n+"].att1"
a5=o.h(0,g)
if(a5==null)H.q(P.m(b7+g+b8))
H.h(a5,"$iJ")
o=b5.y
g=i+"s["+n+"].att2"
a9=o.h(0,g)
if(a9==null)H.q(P.m(b7+g+b8))
H.h(a9,"$iJ")
a6=a9
a7=a5
a8=a2}else{a6=b6
a7=a6
a8=a7}if((j&1)!==0){o=b5.y
g=i+"sTexture2D"+n
a2=o.h(0,g)
if(a2==null)H.q(P.m(b7+g+b8))
H.h(a2,"$iac")
a=a2}else a=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
a2=p.h(0,o)
if(a2==null)H.q(P.m(b7+o+b8))
H.h(a2,"$iac")
a3=a2}else a3=b6
h.push(new A.c0(m,f,e,a0,b,c,b2,b1,a4,b4,b3,a8,a7,a6,a,a3))}b5.bR.m(0,j,h)
q=b5.bQ
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.q(P.m(b7+o+b8))
q.m(0,j,m)}}},
ad:function(a,b){if(b!=null&&b.d>=6)a.ca(b)}}
A.cq.prototype={
i:function(a){return"dirLight"+H.e(this.a)}}
A.cR.prototype={
i:function(a){return"pointLight"+H.e(this.a)}}
A.cX.prototype={
i:function(a){return"spotLight"+H.e(this.a)}}
A.fi.prototype={
i:function(a){return this.aW}}
A.bZ.prototype={}
A.c_.prototype={}
A.c0.prototype={}
A.cU.prototype={
aM:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
aX:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.cu(b,35633)
r.f=r.cu(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!u.getProgramParameter(r.r,35714)){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.q(P.m("Failed to link shader: "+H.e(s)))}r.f8()
r.fa()},
F:function(a){a.a.useProgram(this.r)
this.x.fA()},
cu:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.f(P.m("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
f8:function(){var u,t,s,r=this,q=H.b([],[A.cj]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.r(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cj(p,t.name,s))}r.x=new A.ef(q)},
fa:function(){var u,t,s,r=this,q=H.b([],[A.d8]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.r(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.fv(t.type,t.size,t.name,s))}r.y=new A.hE(q)},
aC:function(a,b,c){var u=this.a
if(a===1)return new A.b0(u,b,c)
else return A.j1(u,this.r,b,a,c)},
dU:function(a,b,c){var u=this.a
if(a===1)return new A.ac(u,b,c)
else return A.j1(u,this.r,b,a,c)},
dV:function(a,b,c){var u=this.a
if(a===1)return new A.O(u,b,c)
else return A.j1(u,this.r,b,a,c)},
b8:function(a,b){return new P.dp(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
fv:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aC(b,c,d)
case 5121:return u.aC(b,c,d)
case 5122:return u.aC(b,c,d)
case 5123:return u.aC(b,c,d)
case 5124:return u.aC(b,c,d)
case 5125:return u.aC(b,c,d)
case 5126:return new A.J(u.a,c,d)
case 35664:return new A.an(u.a,c,d)
case 35665:return new A.C(u.a,c,d)
case 35666:return new A.b1(u.a,c,d)
case 35667:return new A.hB(u.a,c,d)
case 35668:return new A.hC(u.a,c,d)
case 35669:return new A.hD(u.a,c,d)
case 35674:return new A.hF(u.a,c,d)
case 35675:return new A.bp(u.a,c,d)
case 35676:return new A.N(u.a,c,d)
case 35678:return u.dU(b,c,d)
case 35680:return u.dV(b,c,d)
case 35670:throw H.f(u.b8("BOOL",c))
case 35671:throw H.f(u.b8("BOOL_VEC2",c))
case 35672:throw H.f(u.b8("BOOL_VEC3",c))
case 35673:throw H.f(u.b8("BOOL_VEC4",c))
default:throw H.f(P.m("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.bb.prototype={
i:function(a){return this.b}}
A.h6.prototype={}
A.ho.prototype={
dG:function(a,b,c){var u,t,s,r,q,p=this,o="Required uniform value, ",n=", was not defined or used in shader."
p.aX(0,"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n":"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n",A.l2(a,b))
p.z=p.x.h(0,"posAttr")
p.Q=H.h(p.y.D(0,"txtCount"),"$ib0")
p.ch=H.h(p.y.D(0,"backClr"),"$ib1")
p.cx=H.b([],[A.ac])
p.cy=H.b([],[A.N])
u=[A.an]
p.db=H.b([],u)
p.dx=H.b([],u)
p.dy=H.b([],u)
p.fr=H.b([],u)
p.fx=H.b([],[A.b0])
for(t=0;t<a;++t){u=p.cx
s=p.y
r="txt"+t
q=s.h(0,r)
if(q==null)H.q(P.m(o+r+n))
u.push(H.h(q,"$iac"))
u=p.cy
s=p.y
r="clrMat"+t
q=s.h(0,r)
if(q==null)H.q(P.m(o+r+n))
u.push(H.h(q,"$iN"))
u=p.db
s=p.y
r="srcLoc"+t
q=s.h(0,r)
if(q==null)H.q(P.m(o+r+n))
u.push(H.h(q,"$ian"))
u=p.dx
s=p.y
r="srcSize"+t
q=s.h(0,r)
if(q==null)H.q(P.m(o+r+n))
u.push(H.h(q,"$ian"))
u=p.dy
s=p.y
r="destLoc"+t
q=s.h(0,r)
if(q==null)H.q(P.m(o+r+n))
u.push(H.h(q,"$ian"))
u=p.fr
s=p.y
r="destSize"+t
q=s.h(0,r)
if(q==null)H.q(P.m(o+r+n))
u.push(H.h(q,"$ian"))
u=p.fx
s=p.y
r="flip"+t
q=s.h(0,r)
if(q==null)H.q(P.m(o+r+n))
u.push(H.h(q,"$ib0"))}}}
A.d8.prototype={}
A.hE.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
D:function(a,b){var u=this.h(0,b)
if(u==null)throw H.f(P.m("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.K()},
K:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.o)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.b0.prototype={
i:function(a){return"Uniform1i: "+H.e(this.c)}}
A.hB.prototype={
i:function(a){return"Uniform2i: "+H.e(this.c)}}
A.hC.prototype={
i:function(a){return"Uniform3i: "+H.e(this.c)}}
A.hD.prototype={
i:function(a){return"Uniform4i: "+H.e(this.c)}}
A.hA.prototype={
i:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.J.prototype={
i:function(a){return"Uniform1f: "+H.e(this.c)}}
A.an.prototype={
i:function(a){return"Uniform2f: "+H.e(this.c)}}
A.C.prototype={
i:function(a){return"Uniform3f: "+H.e(this.c)}}
A.b1.prototype={
du:function(a){var u=a.a,t=a.b,s=a.c,r=a.d
return this.a.uniform4f(this.d,u,t,s,r)},
ds:function(a){return this.a.uniform4f(this.d,a.a,a.b,a.c,a.d)},
i:function(a){return"Uniform4f: "+H.e(this.c)}}
A.hF.prototype={
i:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.bp.prototype={
a2:function(a){var u=new Float32Array(H.bs(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.e(this.c)}}
A.N.prototype={
a2:function(a){var u=new Float32Array(H.bs(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.e(this.c)}}
A.ac.prototype={
dt:function(a){var u=a==null||!a.d,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.O.prototype={
ca:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.is.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.bW(s.b,b).bW(s.d.bW(s.c,b),c)
s=new V.W(r.a,r.b,r.c)
if(!J.A(a.f,s)){a.f=s
s=a.a
if(s!=null)s.a6()}a.sb1(r.t(0,Math.sqrt(r.B(r))))
s=1-b
u=1-c
u=new V.aw(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.A(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.a6()}}}
F.aI.prototype={
dQ:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.de()
if(q!=null)s=s.C(0,q)
if(u!=null)s=s.C(0,u)
if(t!=null)s=s.C(0,t)
if(s.d6())return
return s.t(0,Math.sqrt(s.B(s)))},
dS:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.H(0,q)
r=new V.y(r.a,r.b,r.c)
s=r.t(0,Math.sqrt(r.B(r)))
r=t.H(0,q)
r=new V.y(r.a,r.b,r.c)
r=s.aU(r.t(0,Math.sqrt(r.B(r))))
return r.t(0,Math.sqrt(r.B(r)))},
bH:function(){var u,t=this
if(t.d!=null)return!0
u=t.dQ()
if(u==null){u=t.dS()
if(u==null)return!1}t.d=u
t.a.a.a6()
return!0},
dP:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.de()
if(q!=null)s=s.C(0,q)
if(u!=null)s=s.C(0,u)
if(t!=null)s=s.C(0,t)
if(s.d6())return
return s.t(0,Math.sqrt(s.B(s)))},
dR:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.u().a){l=d.H(0,g)
l=new V.y(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.B(l)))
if(s.a-t.a<0)q=q.O(0)}else{p=(l-u.b)/r
l=d.H(0,g)
l=new V.W(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).H(0,j)
l=new V.y(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.B(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.O(0)}l=n.d
if(l!=null){o=l.t(0,Math.sqrt(l.B(l)))
l=o.aU(q)
l=l.t(0,Math.sqrt(l.B(l))).aU(o)
q=l.t(0,Math.sqrt(l.B(l)))}return q},
bF:function(){var u,t=this
if(t.e!=null)return!0
u=t.dP()
if(u==null){u=t.dR()
if(u==null)return!1}t.e=u
t.a.a.a6()
return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
A:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.c.ah(J.a3(s.e),0)+", "+C.c.ah(J.a3(t.b.e),0)+", "+C.c.ah(J.a3(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.i(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.i(0)+"}"):u+"-}"},
K:function(){return this.A("")}}
F.bM.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
A:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.c.ah(J.a3(u.e),0)+", "+C.c.ah(J.a3(this.b.e),0)},
K:function(){return this.A("")}}
F.bT.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
A:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.c.ah(J.a3(u.e),0)},
K:function(){return this.A("")}}
F.h_.prototype={
gl:function(){var u=this.e
return u==null?this.e=D.w():u},
fI:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.a_()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.o)(g),++s){r=g[s]
h.a.k(0,r.fu())}h.a.a_()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.o)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.a_()
o=o.e
if(typeof o!=="number")return o.C()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
n=p[o]
h.b.a.a.k(0,n)
o=new F.bT()
if(n.a==null)H.q(P.m("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.v(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.o)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.a_()
o=o.e
if(typeof o!=="number")return o.C()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.a_()
p=p.e
if(typeof p!=="number")return p.C()
p+=u
o=o.c
if(p>=o.length)return H.c(o,p)
k=o[p]
p=h.c.a
p.a.k(0,l)
p.a.k(0,k)
F.kC(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.o)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.a_()
o=o.e
if(typeof o!=="number")return o.C()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.a_()
p=p.e
if(typeof p!=="number")return p.C()
p+=u
o=o.c
if(p>=o.length)return H.c(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.a_()
o=o.e
if(typeof o!=="number")return o.C()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
i=p[o]
o=h.d.a
o.a.k(0,l)
o.a.k(0,k)
o.a.k(0,i)
F.bH(l,k,i)}g=h.e
if(g!=null)g.aw(0)},
as:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.as()||!1
if(!t.a.as())u=!1
s=t.e
if(s!=null)s.aw(0)
return u},
aR:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.Q()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.aD().a)!==0)++s
if((t&$.aC().a)!==0)++s
if((t&$.ap().a)!==0)++s
if((t&$.aE().a)!==0)++s
if((t&$.ch().a)!==0)++s
if((t&$.ci().a)!==0)++s
if((t&$.by().a)!==0)++s
if((t&$.aB().a)!==0)++s
r=a4.gcc(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.G])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.cl])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.fl(m)
k=l.gcc(l)
if(m>=t)return H.c(o,m)
o[m]=new Z.cl(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.c(i,j)
h=i[j].fH(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.c(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.bs(p)),35044)
u.bindBuffer(a1,null)
c=new Z.af(new Z.df(a1,d),o,a4)
c.b=H.b([],[Z.be])
if(a0.b.b.length!==0){b=H.b([],[P.x])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.a_()
b.push(t.e)}a=Z.j3(u,34963,b)
c.b.push(new Z.be(0,b.length,a))}if(a0.c.b.length!==0){b=H.b([],[P.x])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.a_()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.c(t,m)
t=t[m].b
t.a.a.a_()
b.push(t.e)}a=Z.j3(u,34963,b)
c.b.push(new Z.be(1,b.length,a))}if(a0.d.b.length!==0){b=H.b([],[P.x])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.a_()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.c(t,m)
t=t[m].b
t.a.a.a_()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.c(t,m)
t=t[m].c
t.a.a.a_()
b.push(t.e)}a=Z.j3(u,34963,b)
c.b.push(new Z.be(4,b.length,a))}return c},
i:function(a){var u=this,t="   ",s=H.b([],[P.t])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.A(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.A(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.A(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.A(t))}return C.a.q(s,"\n")},
a6:function(){var u=this.e
if(u!=null)u.v(null)}}
F.h0.prototype={
fj:function(a){var u,t,s,r,q=H.b([],[F.aI]),p=a[0]
for(u=this.a,t=2;t<4;++t){s=a[t-1]
r=a[t]
u.a.k(0,p)
u.a.k(0,s)
u.a.k(0,r)
q.push(F.bH(p,s,r))}return q},
fk:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.aI])
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
if(p){n.k(0,m)
u.a.k(0,l)
u.a.k(0,j)
h.push(F.bH(m,l,j))
u.a.k(0,m)
u.a.k(0,j)
u.a.k(0,i)
h.push(F.bH(m,j,i))}else{n.k(0,l)
u.a.k(0,j)
u.a.k(0,i)
h.push(F.bH(l,j,i))
u.a.k(0,l)
u.a.k(0,i)
u.a.k(0,m)
h.push(F.bH(l,i,m))}p=!p}r=!r}return h},
gj:function(a){return this.b.length},
as:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.o)(u),++r)if(!u[r].bH())s=!1
return s},
bG:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.o)(u),++r)if(!u[r].bF())s=!1
return s},
i:function(a){return this.K()},
A:function(a){var u,t,s,r=H.b([],[P.t])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].A(a))
return C.a.q(r,"\n")},
K:function(){return this.A("")}}
F.h1.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.K()},
A:function(a){var u,t,s=H.b([],[P.t]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.c(t,u)
s.push(t[u].A(a+(""+u+". ")))}return C.a.q(s,"\n")},
K:function(){return this.A("")}}
F.h2.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.K()},
A:function(a){var u,t,s,r=H.b([],[P.t])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].A(a))
return C.a.q(r,"\n")},
K:function(){return this.A("")}}
F.br.prototype={
bJ:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.hQ(u.cx,r,o,t,s,q,p,a,n)},
fu:function(){return this.bJ(null)},
sb1:function(a){var u
if(!J.A(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a6()}},
fH:function(a){var u,t,s=this
if(a.n(0,$.Q())){u=s.f
t=[P.G]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.aD())){u=s.r
t=[P.G]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.aC())){u=s.x
t=[P.G]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.ap())){u=s.y
t=[P.G]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.n(0,$.aE())){u=s.z
t=[P.G]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.ch())){u=s.Q
t=[P.G]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.ci())){u=s.Q
t=[P.G]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.n(0,$.by()))return H.b([s.ch],[P.G])
else if(a.n(0,$.aB())){u=s.cx
t=[P.G]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.G])},
bH:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.de()
t.d.J(0,new F.hY(s))
s=s.a
t.r=s.t(0,Math.sqrt(s.B(s)))
s=t.a
if(s!=null){s.a6()
s=t.a.e
if(s!=null)s.aw(0)}return!0},
bF:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.de()
t.d.J(0,new F.hX(s))
s=s.a
t.x=s.t(0,Math.sqrt(s.B(s)))
s=t.a
if(s!=null){s.a6()
s=t.a.e
if(s!=null)s.aw(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
A:function(a){var u,t,s=this,r="-",q=H.b([],[P.t])
q.push(C.c.ah(J.a3(s.e),0))
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
q.push(V.z(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.i(0))
else q.push(r)
t=C.a.q(q,", ")
return a+"{"+t+"}"},
K:function(){return this.A("")}}
F.hY.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.C(0,t)}}}
F.hX.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.C(0,t)}}}
F.hR.prototype={
a_:function(){},
k:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.f(P.m("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.a6()
return!0},
b9:function(a,b,c,d,e,f){var u=F.hQ(a,null,b,c,null,d,e,f,0)
this.k(0,u)
return u},
gj:function(a){return this.c.length},
as:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)u[s].bH()
return!0},
bG:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)u[s].bF()
return!0},
fq:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.t(0,Math.sqrt(p*p+o*o+n*n))
if(!J.A(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.v(null)}}}}return!0},
i:function(a){return this.K()},
A:function(a){var u,t,s,r
this.a_()
u=H.b([],[P.t])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.o)(t),++r)u.push(t[r].A(a))
return C.a.q(u,"\n")},
K:function(){return this.A("")}}
F.hS.prototype={
gj:function(a){return this.b.length+this.c.length+this.d.length},
J:function(a,b){var u=this
C.a.J(u.b,b)
C.a.J(u.c,new F.hT(u,b))
C.a.J(u.d,new F.hU(u,b))},
i:function(a){return this.K()},
K:function(){var u,t,s,r=H.b([],[P.t])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].A(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].A(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].A(""))
return C.a.q(r,"\n")}}
F.hT.prototype={
$1:function(a){if(!J.A(a.a,this.a))this.b.$1(a)}}
F.hU.prototype={
$1:function(a){var u=this.a
if(!J.A(a.a,u)&&!J.A(a.b,u))this.b.$1(a)}}
F.hV.prototype={
gj:function(a){return this.b.length+this.c.length},
i:function(a){return this.K()},
K:function(){var u,t,s,r=H.b([],[P.t])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].A(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].A(""))
return C.a.q(r,"\n")}}
F.hW.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.K()},
K:function(){var u,t,s,r=H.b([],[P.t])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].A(""))
return C.a.q(r,"\n")}}
O.eB.prototype={
gl:function(){var u=this.r
return u==null?this.r=D.w():u},
p:function(a){var u=this.r
if(u!=null)u.v(a)},
a1:function(a,b){},
b0:function(a,b){var u,t,s,r,q=this,p="GreyViewDepth",o=q.a
if(o==null){u=a.fr.h(0,p)
if(u==null){o=a.a
u=new A.eC(o,p)
u.aM(o,p)
u.aX(0,"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n".charCodeAt(0)==0?"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n":"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n","precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n  f = f * 256.0;\n  float r = floor(f);\n  f = (f - r) * 256.0;\n  float g = floor(f);\n  f = (f - g) * 256.0;\n  float b = floor(f);\n  vec3 clr = vec3(r, g, b) / 256.0;\n  gl_FragColor = vec4(clr, 1.0);\n}\n".charCodeAt(0)==0?"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n  f = f * 256.0;\n  float r = floor(f);\n  f = (f - r) * 256.0;\n  float g = floor(f);\n  f = (f - g) * 256.0;\n  float b = floor(f);\n  vec3 clr = vec3(r, g, b) / 256.0;\n  gl_FragColor = vec4(clr, 1.0);\n}\n":"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n  f = f * 256.0;\n  float r = floor(f);\n  f = (f - r) * 256.0;\n  float g = floor(f);\n  f = (f - g) * 256.0;\n  float b = floor(f);\n  vec3 clr = vec3(r, g, b) / 256.0;\n  gl_FragColor = vec4(clr, 1.0);\n}\n")
u.z=u.x.h(0,"posAttr")
u.Q=H.h(u.y.h(0,"width"),"$iJ")
u.ch=H.h(u.y.h(0,"stop"),"$iJ")
u.cx=H.h(u.y.h(0,"viewObjMat"),"$iN")
u.cy=H.h(u.y.h(0,"projMat"),"$iN")
a.aP(u)}q.a=u
o=u}t=b.e
if((!(t instanceof Z.af)?b.e=null:t)==null){o=b.d.aR(new Z.b2(a.a),$.Q())
t=o.a9($.Q())
s=q.a
t.e=s.z.c
b.e=o
o=s}o.F(a)
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
t.a2(s.Z(0,!0))
s=a.gdm()
o=o.cx
o.toString
o.a2(s.Z(0,!0))
o=b.e
o.F(a)
o.V(a)
o.a0(a)
o=q.a
o.toString
a.a.useProgram(null)
o.x.aV()}}
O.cx.prototype={
gl:function(){var u=this.x
return u==null?this.x=D.w():u},
p:function(a){var u=this.x
if(u!=null)u.v(a)},
a3:function(){return this.p(null)},
sbE:function(a){var u=this.r
if(!(Math.abs(u-a)<$.u().a)){this.r=a
u=new D.n("blurValue",u,a)
u.b=!0
this.p(u)}},
scP:function(a){var u,t=this,s=t.e
if(s!=a){if(s!=null)s.gl().N(0,t.gX())
u=t.e
t.e=a
if(a!=null)a.gl().k(0,t.gX())
s=new D.n("colorTexture",u,t.e)
s.b=!0
t.p(s)}},
sbD:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gl().N(0,s.gX())
u=s.f
s.f=a
if(a!=null)a.gl().k(0,s.gX())
r=new D.n("blurTexture",u,s.f)
t=r.b=!0
s.p(r)
r=s.f==null
if(!(r&&u!=null))r=!r&&u==null
else r=t
if(r){s.a=null
s.p(null)}}},
sc4:function(a){var u,t=this,s=$.js
if(s==null){s=new V.bO(1,0,0,0,1,0,0,0,1)
$.js=s
a=s}else a=s
if(!J.A(t.b,a)){u=t.b
t.b=a
s=new D.n("textureMatrix",u,a)
s.b=!0
t.p(s)}},
sbC:function(a){var u,t,s=this
if(a==null){u=$.jR
if(u==null){u=new V.bq(1,0.00390625,0.0000152587890625,0)
$.jR=u
a=u}else a=u}if(!J.A(s.c,a)){t=s.c
s.c=a
u=new D.n("blurAdjust",t,a)
u.b=!0
s.p(u)}},
a1:function(a,b){},
a4:function(a,b){if(b!=null)if(!C.a.ae(a,b)){b.a=a.length
a.push(b)}},
b0:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.a
if(g==null){u=h.f!=null
g="GaussianBlur_"+(u?"1":"0")
t=g.charCodeAt(0)==0?g:g
s=a.fr.h(0,t)
if(s==null){g=a.a
s=new A.eW(g,t)
s.aM(g,t)
r=s.z=new A.eX(u,t)
q=new P.ax("")
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
r.aB(q,3,H.b([0.75],g),H.b([0.5],g))
r.aB(q,6,H.b([0.42857,2.14286],g),H.b([0.41667,0.08333],g))
r.aB(q,9,H.b([0,1.8],g),H.b([0.5122,0.2439],g))
r.aB(q,12,H.b([0,1.38462,3.23077],g),H.b([0.22703,0.31622,0.07027],g))
r.aB(q,15,H.b([0.9375,2.8125],g),H.b([0.36184,0.13816],g))
r.aB(q,18,H.b([0.47368,2.36842,4.26316],g),H.b([0.29916,0.16318,0.03766],g))
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
s.aX(0,"uniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n\nattribute vec3 posAttr;\nattribute vec2 txtAttr;\n\nvarying vec2 txt2D;\n\nvoid main()\n{\n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;\n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"uniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n\nattribute vec3 posAttr;\nattribute vec2 txtAttr;\n\nvarying vec2 txt2D;\n\nvoid main()\n{\n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;\n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n":"uniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n\nattribute vec3 posAttr;\nattribute vec2 txtAttr;\n\nvarying vec2 txt2D;\n\nvoid main()\n{\n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;\n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n",g.charCodeAt(0)==0?g:g)
s.Q=s.x.h(0,"posAttr")
s.ch=s.x.h(0,"txtAttr")
s.cx=H.h(s.y.h(0,"projViewObjMat"),"$iN")
s.cy=H.h(s.y.h(0,"txt2DMat"),"$ibp")
s.dy=H.h(s.y.h(0,"colorTxt"),"$iac")
s.dx=H.h(s.y.h(0,"blurScale"),"$ian")
g=s.y
if(u){s.fr=H.h(g.h(0,"blurTxt"),"$iac")
s.db=H.h(s.y.h(0,"blurAdj"),"$ib1")}else s.fx=H.h(g.h(0,"blurValue"),"$iJ")
a.aP(s)}g=h.a=s
b.e=null}r=g.z
g=b.e
if((!(g instanceof Z.af)?b.e=null:g)==null){g=b.d
p=$.Q()
o=$.ap()
o=g.aR(new Z.b2(a.a),new Z.ao(p.a|o.a))
o.a9($.Q()).e=h.a.Q.c
o.a9($.ap()).e=h.a.ch.c
b.e=o}n=H.b([],[T.bm])
h.a4(n,h.e)
g=r.a
if(g)h.a4(n,h.f)
for(m=0;m<n.length;++m)n[m].F(a)
p=h.a
p.F(a)
o=h.e
p.cF(p.dy,o)
o=h.b
l=p.cy
l.toString
l.a2(o.Z(0,!0))
o=h.d
l=o.a
k=a.c
if(typeof l!=="number")return l.t()
o=o.b
j=a.d
if(typeof o!=="number")return o.t()
i=p.dx
i.a.uniform2f(i.d,l/k,o/j)
j=a.gdi()
p=p.cx
p.toString
p.a2(j.Z(0,!0))
p=h.a
if(g){g=h.f
p.cF(p.fr,g)
g=h.c
p.db.du(g)}else{g=h.r
p=p.fx
p.a.uniform1f(p.d,g)}g=b.e
if(g instanceof Z.af){g.F(a)
g.V(a)
g.a0(a)}else b.e=null
g=h.a
g.toString
p=a.a
p.useProgram(null)
g.x.aV()
for(m=0;m<n.length;++m){g=n[m]
if(g.c){g.c=!1
p.activeTexture(33984+g.a)
p.bindTexture(3553,null)}}}}
O.cK.prototype={
gl:function(){var u=this.fr
return u==null?this.fr=D.w():u},
p:function(a){var u=this.fr
if(u!=null)u.v(a)},
a3:function(){return this.p(null)},
cB:function(a){this.a=null
this.p(a)},
f6:function(){return this.cB(null)},
eb:function(a,b){var u=new D.aM()
u.b=!0
this.p(u)},
ed:function(a,b){var u=new D.aN()
u.b=!0
this.p(u)},
cr:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.x,h=new H.I([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=h.h(0,0)
h.m(0,0,r==null?1:r)}q=H.b([],[A.cq])
h.J(0,new O.fm(j,q))
C.a.bg(q,new O.fn())
p=new H.I([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){o=u[s]
r=o.gaT()
n=p.h(0,o.gaT())
p.m(0,r,n==null?1:n)}m=H.b([],[A.cR])
p.J(0,new O.fo(j,m))
C.a.bg(m,new O.fp())
l=new H.I([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.o)(i),++s){o=i[s]
t=o.gaT()
r=l.h(0,o.gaT())
l.m(0,t,r==null?1:r)}k=H.b([],[A.cX])
l.J(0,new O.fq(j,k))
C.a.bg(k,new O.fr())
i=C.d.a5(j.e.a.length+3,4)
j.dy.e
return A.kI(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
a4:function(a,b){if(b!=null)if(!C.a.ae(a,b)){b.a=a.length
a.push(b)}},
a1:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.X(u,u.length);u.w();){t=u.d
t.toString
s=$.hP
if(s==null)s=$.hP=new V.y(0,0,1)
t.a=s
r=$.hO
t.d=r==null?$.hO=new V.y(0,1,0):r
r=$.hN
t.e=r==null?$.hN=new V.y(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bf(s)
r=s.a
p=s.b
o=s.c
t.a=s.t(0,Math.sqrt(r*r+p*p+o*o))
o=q.bf(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.t(0,Math.sqrt(p*p+r*r+s*s))
s=q.bf(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.t(0,Math.sqrt(r*r+p*p+o*o))}}}},
b0:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=a9.a
if(b0==null){b0=a9.cr()
u=b1.fr.h(0,b0.aW)
if(u==null){u=A.kH(b0,b1.a)
b1.aP(u)}b0=a9.a=u
b2.e=null}t=b0.z
s=t.ba
b0=b2.e
if(!(b0 instanceof Z.af))b0=b2.e=null
if(b0==null||!b0.d.n(0,s)){b0=t.k3
if(b0)b2.d.as()
r=t.k4
if(r){q=b2.d
p=q.e
if(p!=null)++p.d
q.d.bG()
q.a.bG()
q=q.e
if(q!=null)q.aw(0)}q=t.r2
if(q){p=b2.d
o=p.e
if(o!=null)++o.d
p.a.fq()
p=p.e
if(p!=null)p.aw(0)}n=b2.d.aR(new Z.b2(b1.a),s)
n.a9($.Q()).e=a9.a.Q.c
if(b0)n.a9($.aD()).e=a9.a.cx.c
if(r)n.a9($.aC()).e=a9.a.ch.c
if(t.r1)n.a9($.ap()).e=a9.a.cy.c
if(q)n.a9($.aE()).e=a9.a.db.c
if(t.rx)n.a9($.aB()).e=a9.a.dx.c
b2.e=n}m=H.b([],[T.bm])
a9.a.F(b1)
if(t.dy){b0=a9.a
r=b1.dx
r=r.gU(r)
b0=b0.dy
b0.toString
b0.a2(r.Z(0,!0))}if(t.fr){b0=a9.a
r=b1.gdm()
b0=b0.fr
b0.toString
b0.a2(r.Z(0,!0))}b0=a9.a
r=b1.gdi()
b0=b0.fy
b0.toString
b0.a2(r.Z(0,!0))
if(t.ry){b0=a9.a
r=a9.b
b0=b0.k1
b0.toString
b0.a2(C.k.Z(r,!0))}if(t.x1){b0=a9.a
r=a9.c
b0=b0.k2
b0.toString
b0.a2(C.k.Z(r,!0))}if(t.x2){b0=a9.a
r=a9.d
b0=b0.k3
b0.toString
b0.a2(C.k.Z(r,!0))}if(t.y2>0){l=a9.e.a.length
b0=a9.a.k4
b0.a.uniform1i(b0.d,l)
for(k=0;k<l;++k){b0=a9.a
r=a9.e.a
if(k>=r.length)return H.c(r,k)
r=r[k]
b0=b0.r1
if(k>=b0.length)return H.c(b0,k)
b0=b0[k]
j=new Float32Array(H.bs(r.Z(0,!0)))
b0.a.uniformMatrix4fv(b0.d,!1,j)}}b0=t.a
if(b0.a){r=a9.a
q=a9.f.f
r=r.r2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.c){a9.a4(m,a9.f.e)
b0=a9.a
r=a9.f.e
b0.ad(b0.ry,r)}if(t.id){b0=t.b
if(b0.a){r=a9.a
q=a9.r.f
r=r.x1
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.c){a9.a4(m,a9.r.e)
b0=a9.a
r=a9.r.e
b0.ad(b0.y1,r)}b0=t.c
if(b0.a){r=a9.a
q=a9.x.f
r=r.y2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.c){a9.a4(m,a9.x.e)
b0=a9.a
r=a9.x.e
b0.ad(b0.ba,r)}b0=t.d
if(b0.a){r=a9.a
q=a9.y.f
r=r.cT
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.c){a9.a4(m,a9.y.e)
b0=a9.a
r=a9.y.e
b0.ad(b0.cU,r)}b0=t.e
r=b0.a
if(!r)q=b0.c
else q=!0
if(q){q=a9.a
p=a9.z.ch
q=q.cX
q.a.uniform1f(q.d,p)}if(r){r=a9.a
q=a9.z.f
r=r.cV
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.c){a9.a4(m,a9.z.e)
b0=a9.a
r=a9.z.e
b0.ad(b0.cW,r)}b0=t.z
if(b0.length>0){r=b1.db
i=r.gU(r)
r=P.x
h=new H.I([r,r])
for(r=a9.dx.e,q=r.length,g=0;g<r.length;r.length===q||(0,H.o)(r),++g){f=r[g]
e=h.h(0,0)
if(e==null)e=0
h.m(0,0,e+1)
d=J.ea(a9.a.bN.h(0,0),e)
p=i.bf(f.a)
o=p.a
c=p.b
b=p.c
b=p.t(0,Math.sqrt(o*o+c*c+b*b))
c=d.e
o=b.a
p=b.b
b=b.c
c.a.uniform3f(c.d,o,p,b)
b=f.c
p=d.f
p.a.uniform3f(p.d,b.a,b.b,b.c)}for(r=b0.length,g=0;g<b0.length;b0.length===r||(0,H.o)(b0),++g){q=b0[g].a
l=h.h(0,q)
if(l==null)l=0
q=a9.a.bM.h(0,q)
q.a.uniform1i(q.d,l)}}b0=t.Q
if(b0.length>0){r=b1.db
i=r.gU(r)
r=P.x
a=new H.I([r,r])
for(r=a9.dx.f,q=r.length,g=0;g<r.length;r.length===q||(0,H.o)(r),++g){f=r[g]
a0=f.gaT()
e=a.h(0,a0)
if(e==null)e=0
a.m(0,a0,e+1)
d=J.ea(a9.a.bP.h(0,a0),e)
a1=i.u(0,f.gU(f))
p=f.gU(f)
o=$.bU
p=p.c5(o==null?$.bU=new V.W(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=$.bU
p=a1.c5(p==null?$.bU=new V.W(0,0,0):p)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gaS(f)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
f.gay()
p=a1.bU(0)
o=p.a
c=p.b
b=p.c
a2=p.e
a3=p.f
a4=p.r
a5=p.y
a6=p.z
p=p.Q
a7=d.d
a7.toString
j=new Float32Array(H.bs(new V.bO(o,c,b,a2,a3,a4,a5,a6,p).Z(0,!0)))
a7.a.uniformMatrix3fv(a7.d,!1,j)
f.gay()
p=f.gay()
if(!C.a.ae(m,p)){p.a=m.length
m.push(p)}p=f.gay()
o=p.gbX(p)
if(o){o=d.f
o.toString
c=p.d
if(c<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}f.gaK()
p=f.gdv()
o=d.x
o.a.uniform4f(o.d,p.a,p.b,p.c,p.d)
p=f.gaK()
if(!C.a.ae(m,p)){p.a=m.length
m.push(p)}p=f.gaK()
o=p.gbX(p)
if(o){o=d.r
o.toString
c=p.d
if(c<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}if(f.gfB()){p=f.gfm()
o=d.y
o.a.uniform1f(o.d,p)
p=f.gfn()
o=d.z
o.a.uniform1f(o.d,p)
p=f.gfo()
o=d.Q
o.a.uniform1f(o.d,p)}}for(r=b0.length,g=0;g<b0.length;b0.length===r||(0,H.o)(b0),++g){q=b0[g].a
l=a.h(0,q)
if(l==null)l=0
q=a9.a.bO.h(0,q)
q.a.uniform1i(q.d,l)}}b0=t.ch
if(b0.length>0){r=b1.db
i=r.gU(r)
r=P.x
a8=new H.I([r,r])
for(r=a9.dx.r,q=r.length,g=0;g<r.length;r.length===q||(0,H.o)(r),++g){f=r[g]
a0=f.gaT()
e=a8.h(0,a0)
if(e==null)e=0
a8.m(0,a0,e+1)
d=J.ea(a9.a.bR.h(0,a0),e)
p=f.gfX(f)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.ghb(f).hm()
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=i.c5(f.gfX(f))
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gaS(f)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
f.gay()
p=f.gc6()
o=d.f
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gc3(f)
o=d.r
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.ghn()
o=d.x
o.a.uniform1f(o.d,p)
p=f.gho()
o=d.y
o.a.uniform1f(o.d,p)
f.gay()
p=f.gay()
if(!C.a.ae(m,p)){p.a=m.length
m.push(p)}p=f.gay()
o=p.gbX(p)
if(o){o=d.dx
o.toString
c=p.d
if(!c)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}f.gaK()
p=f.gdv()
o=d.z
o.a.uniform4f(o.d,p.a,p.b,p.c,p.d)
p=f.gaK()
if(!C.a.ae(m,p)){p.a=m.length
m.push(p)}p=f.gaK()
o=p.gbX(p)
if(o){o=d.dy
o.toString
c=p.d
if(!c)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}if(f.ghc()){p=f.gha()
o=d.Q
o.a.uniform1f(o.d,p)
p=f.gh9()
o=d.ch
o.a.uniform1f(o.d,p)}if(f.gfB()){p=f.gfm()
o=d.cx
o.a.uniform1f(o.d,p)
p=f.gfn()
o=d.cy
o.a.uniform1f(o.d,p)
p=f.gfo()
o=d.db
o.a.uniform1f(o.d,p)}}for(r=b0.length,g=0;g<b0.length;b0.length===r||(0,H.o)(b0),++g){q=b0[g].a
l=a8.h(0,q)
if(l==null)l=0
q=a9.a.bQ.h(0,q)
q.a.uniform1i(q.d,l)}}}if(t.f.c){a9.a4(m,a9.Q.e)
b0=a9.a
r=a9.Q.e
b0.ad(b0.cY,r)}if(t.dx){b0=a9.a
r=b1.Q
if(r==null){r=b1.db
r=b1.Q=r.gU(r).bU(0)}b0=b0.id
b0.toString
b0.a2(r.Z(0,!0))}if(t.cy){a9.a4(m,a9.ch)
b0=a9.a
r=a9.ch
b0.ad(b0.cZ,r)
b0=t.r
if(b0.a){r=a9.a
q=a9.cx.f
r=r.d_
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.c){a9.a4(m,a9.cx.e)
b0=a9.a
r=a9.cx.e
b0.ad(b0.d0,r)}b0=t.x
r=b0.a
if(!r)q=b0.c
else q=!0
if(q){q=a9.a
p=a9.cy.ch
q=q.d1
q.a.uniform1f(q.d,p)}if(r){r=a9.a
q=a9.cy.f
r=r.d2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.c){a9.a4(m,a9.cy.e)
b0=a9.a
r=a9.cy.e
b0.ad(b0.d3,r)}}b0=t.y
r=b0.a
q=!r
if(q)p=b0.c
else p=!0
if(p){if(r){r=a9.a
p=a9.db.f
r=r.d4
r.a.uniform1f(r.d,p)}if(b0.c){a9.a4(m,a9.db.e)
r=a9.a
p=a9.db.e
r.ad(r.d5,p)}r=b1.a
r.enable(3042)
r.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].F(b1)
r=b2.e
r.F(b1)
r.V(b1)
r.a0(b1)
if(q)b0=b0.c
else b0=!0
if(b0)b1.a.disable(3042)
for(b0=b1.a,k=0;k<m.length;++k){r=m[k]
if(r.c){r.c=!1
b0.activeTexture(33984+r.a)
b0.bindTexture(34067,null)}}r=a9.a
r.toString
b0.useProgram(null)
r.x.aV()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cr().aW}}
O.fm.prototype={
$2:function(a,b){if(typeof b!=="number")return b.C()
return this.b.push(new A.cq(a,C.d.a5(b+3,4)*4))}}
O.fn.prototype={
$2:function(a,b){return J.iK(a.a,b.a)}}
O.fo.prototype={
$2:function(a,b){if(typeof b!=="number")return b.C()
return this.b.push(new A.cR(a,C.d.a5(b+3,4)*4))}}
O.fp.prototype={
$2:function(a,b){return J.iK(a.a,b.a)}}
O.fq.prototype={
$2:function(a,b){if(typeof b!=="number")return b.C()
return this.b.push(new A.cX(a,C.d.a5(b+3,4)*4))}}
O.fr.prototype={
$2:function(a,b){return J.iK(a.a,b.a)}}
O.fg.prototype={
aq:function(){var u,t=this
t.ci()
u=t.f
if(!(Math.abs(u-1)<$.u().a)){t.f=1
u=new D.n(t.b,u,1)
u.b=!0
t.a.p(u)}}}
O.bN.prototype={
p:function(a){return this.a.p(a)},
a3:function(){return this.p(null)},
aq:function(){},
by:function(a){var u,t,s=this
if(!s.c.n(0,a)){u=s.c
if(!u.a)u=u.c
else u=!0
if(u){if(!a.a)u=a.c
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.aq()
u=s.a
u.a=null
u.p(null)}},
sb1:function(a){var u,t=this,s=t.c
if(!s.c)t.by(new A.S(s.a,!1,!0))
s=t.e
if(s!==a){if(s!=null)s.gl().N(0,t.gX())
u=t.e
t.e=a
a.gl().k(0,t.gX())
s=new D.n(t.b+".textureCube",u,t.e)
s.b=!0
t.a.p(s)}}}
O.fh.prototype={}
O.ai.prototype={
cD:function(a){var u,t,s=this
if(!s.f.n(0,a)){u=s.f
s.f=a
t=new D.n(s.b+".color",u,a)
t.b=!0
s.a.p(t)}},
aq:function(){this.ci()
this.cD(new V.L(1,1,1))},
saS:function(a,b){this.by(new A.S(!0,!1,this.c.c))
this.cD(b)}}
O.fj.prototype={}
O.fk.prototype={
aq:function(){var u,t=this
t.cj()
u=t.ch
if(!(Math.abs(u-1)<$.u().a)){t.ch=1
u=new D.n(t.b+".refraction",u,1)
u.b=!0
t.a.p(u)}}}
O.fl.prototype={
cE:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.u().a)){u.ch=a
t=new D.n(u.b+".shininess",t,a)
t.b=!0
u.a.p(t)}},
aq:function(){this.cj()
this.cE(100)}}
O.cV.prototype={
gl:function(){var u=this.e
return u==null?this.e=D.w():u},
p:function(a){var u=this.e
if(u!=null)u.v(a)},
a3:function(){return this.p(null)},
a1:function(a,b){},
b0:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=a.fr.h(0,n)
if(u==null){t=a.a
u=new A.h6(t,n)
u.aM(t,n)
u.aX(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.h(0,"posAttr")
u.Q=H.h(u.y.h(0,"fov"),"$iJ")
u.ch=H.h(u.y.h(0,"ratio"),"$iJ")
u.cx=H.h(u.y.h(0,"boxClr"),"$iC")
u.cy=H.h(u.y.h(0,"boxTxt"),"$iO")
u.db=H.h(u.y.h(0,"viewMat"),"$iN")
a.aP(u)}o.a=u}if(b.e==null){t=b.d.aR(new Z.b2(a.a),$.Q())
t.a9($.Q()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
t.F(a)}t=a.d
s=a.c
r=o.a
r.F(a)
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
s=s.gU(s).bU(0)
r=r.db
r.toString
r.a2(s.Z(0,!0))
t=b.e
if(t instanceof Z.af){t.F(a)
t.V(a)
t.a0(a)}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.aV()
t=o.c
if(t!=null)t.a0(a)}}
O.d0.prototype={}
O.d1.prototype={
gl:function(){var u=this.e
return u==null?this.e=D.w():u},
p:function(a){var u=this.e
if(u!=null)u.v(a)},
a3:function(){return this.p(null)},
er:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gX(),s=[{func:1,ret:-1,args:[D.M]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q!=null){p=q.f
if(p==null){p=new D.aH()
p.d=0
q.f=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.a3()},
eu:function(a,b){var u,t
for(u=b.gT(b),t=this.gX();u.w();)u.gI(u).gl().N(0,t)
this.a3()},
scL:function(a){var u=this.f
if(u!==a){this.f=a
u=new D.n("blend",u,a)
u.b=!0
this.p(u)}},
a1:function(a,b){},
e_:function(a){a=C.d.a5(a+3,4)*4
if(a<=0)return 4
return a},
b0:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.e_(j.c.a.length)
if(i!==j.d||j.f!=j.r){j.d=i
j.r=j.f
j.b=null}u=j.b
if(u==null){u=j.f
t="TextureLayout_"+i+"_"+C.d.i(u.a)
s=a.fr.h(0,t)
if(s==null){s=A.l1(i,u,a.a)
a.aP(s)}j.b=s
u=s}if(b.e==null){u=b.d.aR(new Z.b2(a.a),$.Q())
t=u.a9($.Q())
r=j.b
t.e=r.z.c
b.e=u
u=r}u.F(a)
q=H.b([],[T.bm])
for(p=0,o=0;u=j.c.a,o<u.length;++o){n=u[o]
if(n!=null&&n.a!=null){u=n.a
if(u!=null)if(!C.a.ae(q,u)){u.a=q.length
q.push(u)}u=j.b
t=n.a
u=u.cx
if(p>=u.length)return H.c(u,p)
u=u[p]
r=t==null||!t.d
m=u.a
u=u.d
if(r)m.uniform1i(u,0)
else m.uniform1i(u,t.a)
u=j.b
t=n.b
u=u.cy
if(p>=u.length)return H.c(u,p)
u=u[p]
if(t==null){t=$.fs
if(t==null){t=new V.a6(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.fs=t}}l=new Float32Array(H.bs(t.Z(0,!0)))
u.a.uniformMatrix4fv(u.d,!1,l)
u=j.b
k=n.c
u.toString
if(k==null){t=$.bY
if(t==null){t=V.bX(0,0,1,1)
$.bY=t
k=t}else k=t}t=u.db
if(p>=t.length)return H.c(t,p)
t=t[p]
t.a.uniform2f(t.d,k.a,k.b)
u=u.dx
if(p>=u.length)return H.c(u,p)
u=u[p]
u.a.uniform2f(u.d,k.c,k.d)
u=j.b
k=n.d
u.toString
if(k==null){t=$.bY
if(t==null){t=V.bX(0,0,1,1)
$.bY=t
k=t}else k=t}t=u.dy
if(p>=t.length)return H.c(t,p)
t=t[p]
t.a.uniform2f(t.d,k.a,k.b)
u=u.fr
if(p>=u.length)return H.c(u,p)
u=u[p]
u.a.uniform2f(u.d,k.c,k.d)
u=j.b
t=n.e
u=u.fx
if(p>=u.length)return H.c(u,p)
u=u[p]
t=t?1:0
u.a.uniform1i(u.d,t);++p}}u=j.b.Q
u.a.uniform1i(u.d,p)
u=j.b
t=j.a
u.ch.ds(t)
for(o=0;o<q.length;++o)q[o].F(a)
u=b.e
if(u instanceof Z.af){u.F(a)
u.V(a)
u.a0(a)}else b.e=null
u=j.b
u.toString
t=a.a
t.useProgram(null)
u.x.aV()
for(o=0;o<q.length;++o){u=q[o]
if(u.c){u.c=!1
t.activeTexture(33984+u.a)
t.bindTexture(3553,null)}}}}
O.aY.prototype={
p:function(a){var u=this.f
if(u!=null)u.v(a)},
a3:function(){return this.p(null)}}
T.bm.prototype={}
T.hl.prototype={}
T.hm.prototype={
gl:function(){var u=this.y
return u==null?this.y=D.w():u},
F:function(a){var u,t=this
if(!t.c&&t.d){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(3553,t.b)}}}
T.hn.prototype={
gl:function(){var u=this.e
return u==null?this.e=D.w():u},
F:function(a){var u,t=this
if(!t.c&&t.d>=6){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(34067,t.b)}},
a0:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(34067,null)}}}
T.hp.prototype={
d8:function(a,b){var u,t=this,s=34067,r=a+"/posx"+b,q=a+"/posy"+b,p=a+"/posz"+b,o=a+"/negx"+b,n=a+"/negy"+b,m=a+"/negz"+b,l=t.a,k=l.createTexture()
l.bindTexture(s,k)
l.texParameteri(s,10242,10497)
l.texParameteri(s,10243,10497)
l.texParameteri(s,10241,9729)
l.texParameteri(s,10240,9729)
l.bindTexture(s,null)
u=new T.hn()
u.a=0
u.b=k
u.c=!1
u.d=0
t.aD(u,k,r,34069,!1,!1)
t.aD(u,k,o,34070,!1,!1)
t.aD(u,k,q,34071,!1,!1)
t.aD(u,k,n,34072,!1,!1)
t.aD(u,k,p,34073,!1,!1)
t.aD(u,k,m,34074,!1,!1)
return u},
d7:function(a){return this.d8(a,".png")},
aD:function(a,b,c,d,e,f){var u=document.createElement("img")
u.src=c;++this.d
W.P(u,"load",new T.hq(this,u,!1,b,!1,d,a),!1)},
f7:function(a,b,c){var u,t,s,r
b=V.cg(b)
u=V.cg(a.width)
t=V.cg(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.iO()
s.width=u
s.height=t
r=C.f.dn(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.lQ(r.getImageData(0,0,s.width,s.height))}}}
T.hq.prototype={
$1:function(a){var u=this,t=u.a,s=t.f7(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.q.h3(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.bL()}++t.e}}
X.ek.prototype={
gl:function(){var u=this.fr
return u==null?this.fr=D.w():u},
Y:function(a){var u=this.fr
if(u!=null)u.v(a)},
sai:function(a,b){var u,t=this
if(b<1)b=1
u=t.a
if(u!==b){t.y=null
t.c=t.a=b
u=new D.n("width",u,b)
u.b=!0
t.Y(u)}},
saf:function(a,b){var u,t=this
if(b<1)b=1
u=t.b
if(u!==b){t.y=null
t.d=t.b=b
u=new D.n("height",u,b)
u.b=!0
t.Y(u)}},
F:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=3553,e=36161,d=36160
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
p=V.cg(s)
o=V.cg(r)
q=V.cg(q)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
u.bindTexture(f,n)
u.texParameteri(f,10242,33071)
u.texParameteri(f,10243,33071)
u.texParameteri(f,10241,9729)
u.texParameteri(f,10240,9729)
C.q.dk(u,f,0,6408,p,o,0,6408,5121,g)
u.bindTexture(f,g)
m=T.jF(n)
m.e=s
m.f=r
m.r=p
m.x=o
if(!m.d){m.d=!0
s=m.y
if(s!=null)s.bL()}t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.bL()
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
a0:function(a){a.a.bindFramebuffer(36160,null)}}
X.iN.prototype={}
X.eV.prototype={
gl:function(){var u=this.x
return u==null?this.x=D.w():u},
F:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.r(u)
q=C.b.W(r*u)
r=s.b
if(typeof t!=="number")return H.r(t)
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
a0:function(a){}}
X.eZ.prototype={
gl:function(){var u=this.b
return u==null?this.b=D.w():u},
F:function(a){var u
a.cy.bd(V.aQ())
u=V.aQ()
a.db.bd(u)},
a0:function(a){a.cy.av()
a.db.av()}}
X.cQ.prototype={
gl:function(){var u=this.f
return u==null?this.f=D.w():u},
Y:function(a){var u=this.f
if(u!=null)u.v(a)},
dM:function(){return this.Y(null)},
F:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.aj(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bd(k)
r=$.jx
if(r==null){r=V.jz()
q=V.j2()
p=$.jP
r=V.jt(r,q,p==null?$.jP=new V.y(0,0,-1):p)
$.jx=r
u=r}else u=r
r=s.b
if(r!=null){t=r.aJ(0,a,s)
if(t!=null)u=t.u(0,u)}a.db.bd(u)},
a0:function(a){a.cy.av()
a.db.av()}}
X.hh.prototype={}
V.iF.prototype={
$1:function(a){var u=C.b.dl(this.a.gfD(),2)
if(u!=="0.00")P.jd(u+" fps")}}
V.h3.prototype={
dF:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.P(q,"scroll",new V.h5(o),!1)},
cJ:function(a){var u,t,s,r,q,p,o,n,m,l,k
this.f9()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.h7(C.a.fG(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
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
if(H.ma(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.c(m,1)
l.href=m[1]
l.textContent=m[0]
t.appendChild(l)}else{k=P.lf(C.I,n,C.o,!1)
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
f9:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new R.ht()
t=P.t
u.a=new H.I([t,R.cZ])
u.b=new H.I([t,R.d5])
u.c=u.L(0,q)
t=u.L(0,q).q(0,p)
s=T.T(new H.K("*"))
t.a.push(s)
t.c=!0
t=u.L(0,p).q(0,p)
s=new T.au()
r=[T.cJ]
s.a=H.b([],r)
t.a.push(s)
t=T.T(new H.K("*"))
s.a.push(t)
t=u.L(0,p).q(0,"BoldEnd")
s=T.T(new H.K("*"))
t.a.push(s)
t.c=!0
t=u.L(0,q).q(0,o)
s=T.T(new H.K("_"))
t.a.push(s)
t.c=!0
t=u.L(0,o).q(0,o)
s=new T.au()
s.a=H.b([],r)
t.a.push(s)
t=T.T(new H.K("_"))
s.a.push(t)
t=u.L(0,o).q(0,n)
s=T.T(new H.K("_"))
t.a.push(s)
t.c=!0
t=u.L(0,q).q(0,m)
s=T.T(new H.K("`"))
t.a.push(s)
t.c=!0
t=u.L(0,m).q(0,m)
s=new T.au()
s.a=H.b([],r)
t.a.push(s)
t=T.T(new H.K("`"))
s.a.push(t)
t=u.L(0,m).q(0,"CodeEnd")
s=T.T(new H.K("`"))
t.a.push(s)
t.c=!0
t=u.L(0,q).q(0,l)
s=T.T(new H.K("["))
t.a.push(s)
t.c=!0
t=u.L(0,l).q(0,k)
s=T.T(new H.K("|"))
t.a.push(s)
s=u.L(0,l).q(0,j)
t=T.T(new H.K("]"))
s.a.push(t)
s.c=!0
s=u.L(0,l).q(0,l)
t=new T.au()
t.a=H.b([],r)
s.a.push(t)
s=T.T(new H.K("|]"))
t.a.push(s)
s=u.L(0,k).q(0,j)
t=T.T(new H.K("]"))
s.a.push(t)
s.c=!0
s=u.L(0,k).q(0,k)
t=new T.au()
t.a=H.b([],r)
s.a.push(t)
s=T.T(new H.K("|]"))
t.a.push(s)
u.L(0,q).q(0,i).a.push(new T.ec())
s=u.L(0,i).q(0,i)
t=new T.au()
t.a=H.b([],r)
s.a.push(t)
s=T.T(new H.K("*_`["))
t.a.push(s)
s=u.L(0,"BoldEnd")
s.d=s.a.b2(p)
s=u.L(0,n)
s.d=s.a.b2(o)
s=u.L(0,"CodeEnd")
s.d=s.a.b2(m)
s=u.L(0,j)
s.d=s.a.b2("Link")
s=u.L(0,i)
s.d=s.a.b2(i)
this.b=u}}
V.h5.prototype={
$1:function(a){P.jI(C.j,new V.h4(this.a))}}
V.h4.prototype={
$0:function(){var u=C.b.W(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}};(function aliases(){var u=J.a.prototype
u.dz=u.i
u=J.cC.prototype
u.dA=u.i
u=T.cy.prototype
u.dw=u.aI
u.cg=u.i
u=O.bN.prototype
u.ci=u.aq
u=O.ai.prototype
u.cj=u.aq})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"lK","l8",7)
u(P,"lL","l9",7)
u(P,"lM","la",7)
t(P,"jX","lI",10)
var n
s(n=E.ar.prototype,"gdg",0,0,null,["$1","$0"],["dh","fP"],0,0)
s(n,"gde",0,0,null,["$1","$0"],["df","fO"],0,0)
s(n,"gdc",0,0,null,["$1","$0"],["dd","fL"],0,0)
r(n,"gfJ","fK",3)
r(n,"gfM","fN",3)
s(n=E.d2.prototype,"gcl",0,0,null,["$1","$0"],["cn","cm"],0,0)
q(n,"gh_","dj",10)
p(n=X.da.prototype,"gev","ew",4)
p(n,"gee","ef",4)
p(n,"gek","el",2)
p(n,"gez","eA",11)
p(n,"gex","ey",11)
p(n,"geD","eE",2)
p(n,"geH","eI",2)
p(n,"geo","ep",2)
p(n,"geF","eG",2)
p(n,"gem","en",2)
p(n,"geJ","eK",18)
p(n,"geL","eM",4)
p(n,"gf0","f1",5)
p(n,"geX","eY",5)
p(n,"geZ","f_",5)
s(D.bc.prototype,"gdH",0,0,null,["$1","$0"],["an","dI"],0,0)
s(n=D.cE.prototype,"gcz",0,0,null,["$1","$0"],["cA","eB"],0,0)
p(n,"geN","eO",19)
r(n,"ge8","e9",12)
r(n,"geR","eS",12)
o(V.B.prototype,"gj","aY",6)
o(V.y.prototype,"gj","aY",6)
o(V.bq.prototype,"gj","aY",6)
s(n=U.bI.prototype,"gaE",0,0,null,["$1","$0"],["M","a8"],0,0)
r(n,"ge6","e7",13)
r(n,"geP","eQ",13)
s(n=U.db.prototype,"gaE",0,0,null,["$1","$0"],["M","a8"],0,0)
p(n,"gbp","bq",1)
p(n,"gbr","bs",1)
p(n,"gbt","bu",1)
s(n=U.dc.prototype,"gaE",0,0,null,["$1","$0"],["M","a8"],0,0)
p(n,"gbp","bq",1)
p(n,"gbr","bs",1)
p(n,"gbt","bu",1)
p(n,"ge0","e1",1)
p(n,"ge2","e3",1)
p(n,"gfg","fh",1)
p(n,"gfe","ff",1)
p(n,"gfc","fd",1)
p(U.dd.prototype,"ge4","e5",1)
s(n=M.cn.prototype,"gS",0,0,null,["$1","$0"],["P","ao"],0,0)
r(n,"geT","eU",14)
r(n,"geV","eW",14)
s(M.co.prototype,"gS",0,0,null,["$1","$0"],["P","ao"],0,0)
s(n=M.ct.prototype,"gS",0,0,null,["$1","$0"],["P","ao"],0,0)
r(n,"geg","eh",3)
r(n,"gei","ej",3)
s(M.cw.prototype,"gS",0,0,null,["$1","$0"],["P","ao"],0,0)
s(O.cx.prototype,"gX",0,0,null,["$1","$0"],["p","a3"],0,0)
s(n=O.cK.prototype,"gX",0,0,null,["$1","$0"],["p","a3"],0,0)
s(n,"gf5",0,0,null,["$1","$0"],["cB","f6"],0,0)
r(n,"gea","eb",15)
r(n,"gec","ed",15)
s(O.bN.prototype,"gX",0,0,null,["$1","$0"],["p","a3"],0,0)
s(O.cV.prototype,"gX",0,0,null,["$1","$0"],["p","a3"],0,0)
s(n=O.d1.prototype,"gX",0,0,null,["$1","$0"],["p","a3"],0,0)
r(n,"geq","er",16)
r(n,"ges","eu",16)
s(O.aY.prototype,"gX",0,0,null,["$1","$0"],["p","a3"],0,0)
s(X.cQ.prototype,"gdL",0,0,null,["$1","$0"],["Y","dM"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.Z,null)
s(P.Z,[H.iX,J.a,J.X,P.dx,P.j,H.cG,P.f0,H.cu,H.hI,H.hy,P.bd,H.bD,H.dO,P.as,H.f6,H.f7,H.f2,P.dU,P.dg,P.d_,P.hf,P.d3,P.ir,P.ik,P.ie,P.dw,P.p,P.ep,P.iq,P.b7,P.a5,P.ab,P.aG,P.fJ,P.cY,P.dp,P.eU,P.bi,P.cI,P.aS,P.t,P.ax,W.ew,W.E,W.cv,P.dZ,P.ig,T.ec,T.cy,T.cJ,T.fZ,R.cZ,R.d4,R.d5,R.ht,O.aq,O.bP,E.el,E.ar,E.fR,E.d2,Z.df,Z.b2,Z.af,Z.be,Z.ao,D.eo,D.aH,D.M,X.cm,X.cD,X.f4,X.fa,X.a7,X.fz,X.hu,X.da,D.bc,D.a0,D.fM,D.h9,V.L,V.R,V.eL,V.bO,V.a6,V.V,V.W,V.aw,V.cS,V.B,V.y,V.bq,U.db,U.dc,U.dd,M.co,M.ct,M.cw,M.a9,A.cj,A.ef,A.S,A.eX,A.cq,A.cR,A.cX,A.fi,A.bZ,A.c_,A.c0,A.bb,A.d8,A.hE,F.aI,F.bM,F.bT,F.h_,F.h0,F.h1,F.h2,F.br,F.hR,F.hS,F.hV,F.hW,O.d0,O.bN,O.fj,O.aY,T.hp,X.hh,X.iN,X.eZ,X.cQ,V.h3])
s(J.a,[J.f1,J.cB,J.cC,J.aO,J.bL,J.bf,H.bS,W.d,W.eb,W.ck,W.ah,W.D,W.di,W.a4,W.eA,W.eD,W.dk,W.cs,W.dm,W.eF,W.i,W.dq,W.aK,W.eY,W.ds,W.aL,W.f9,W.ft,W.dy,W.dz,W.aR,W.dA,W.dD,W.aT,W.dH,W.dJ,W.aV,W.dK,W.aW,W.dP,W.ay,W.dS,W.hs,W.aZ,W.dV,W.hw,W.hK,W.e_,W.e1,W.e3,W.e5,W.e7,P.bh,P.du,P.bj,P.dF,P.fO,P.dQ,P.bo,P.dX,P.eg,P.dh,P.cT,P.dM])
s(J.cC,[J.fK,J.c1,J.aP])
t(J.iW,J.aO)
s(J.bL,[J.cA,J.cz])
t(P.f8,P.dx)
s(P.f8,[H.d9,W.i6,W.i5,P.eQ])
t(H.K,H.d9)
s(P.j,[H.eI,H.fd,H.i_])
s(P.f0,[H.fe,H.i0])
s(P.bd,[H.fG,H.f3,H.hH,H.en,H.fX,P.cP,P.ae,P.hJ,P.hG,P.hb,P.es,P.ez])
s(H.bD,[H.iJ,H.hi,H.iA,H.iB,H.iC,P.i2,P.i1,P.i3,P.i4,P.ip,P.io,P.iw,P.ii,P.ij,P.fc,P.eG,P.eH,W.fv,W.fx,W.fW,W.he,W.i9,P.ix,P.eR,P.eS,P.ei,E.fS,E.fT,E.fU,E.hr,D.eM,D.eN,F.is,F.hY,F.hX,F.hT,F.hU,O.fm,O.fn,O.fo,O.fp,O.fq,O.fr,T.hq,V.iF,V.h5,V.h4])
s(H.hi,[H.hc,H.bB])
t(P.fb,P.as)
t(H.I,P.fb)
t(H.cF,H.eI)
t(H.cL,H.bS)
s(H.cL,[H.c3,H.c5])
t(H.c4,H.c3)
t(H.bR,H.c4)
t(H.c6,H.c5)
t(H.cM,H.c6)
s(H.cM,[H.fA,H.fB,H.fC,H.fD,H.fE,H.cN,H.fF])
t(P.ih,P.ir)
t(P.id,P.ik)
t(P.et,P.hf)
t(P.eJ,P.ep)
t(P.hL,P.eJ)
t(P.hM,P.et)
s(P.ab,[P.G,P.x])
s(P.ae,[P.bl,P.f_])
s(W.d,[W.H,W.eP,W.aU,W.c7,W.aX,W.az,W.c9,W.hZ,W.c2,P.ej,P.b9])
s(W.H,[W.Y,W.aF])
s(W.Y,[W.l,P.k])
s(W.l,[W.ed,W.ee,W.ba,W.eT,W.bK,W.fY])
t(W.ev,W.ah)
t(W.bG,W.di)
s(W.a4,[W.ex,W.ey])
t(W.dl,W.dk)
t(W.cr,W.dl)
t(W.dn,W.dm)
t(W.eE,W.dn)
t(W.aJ,W.ck)
t(W.dr,W.dq)
t(W.eO,W.dr)
t(W.dt,W.ds)
t(W.bJ,W.dt)
t(W.b_,W.i)
s(W.b_,[W.bg,W.ak,W.bn])
t(W.fu,W.dy)
t(W.fw,W.dz)
t(W.dB,W.dA)
t(W.fy,W.dB)
t(W.dE,W.dD)
t(W.cO,W.dE)
t(W.dI,W.dH)
t(W.fL,W.dI)
t(W.fV,W.dJ)
t(W.c8,W.c7)
t(W.h7,W.c8)
t(W.dL,W.dK)
t(W.h8,W.dL)
t(W.hd,W.dP)
t(W.dT,W.dS)
t(W.hj,W.dT)
t(W.ca,W.c9)
t(W.hk,W.ca)
t(W.dW,W.dV)
t(W.hv,W.dW)
t(W.b3,W.ak)
t(W.e0,W.e_)
t(W.i7,W.e0)
t(W.dj,W.cs)
t(W.e2,W.e1)
t(W.ia,W.e2)
t(W.e4,W.e3)
t(W.dC,W.e4)
t(W.e6,W.e5)
t(W.il,W.e6)
t(W.e8,W.e7)
t(W.im,W.e8)
t(W.i8,P.d_)
t(P.a8,P.ig)
t(P.dv,P.du)
t(P.f5,P.dv)
t(P.dG,P.dF)
t(P.fH,P.dG)
t(P.dR,P.dQ)
t(P.hg,P.dR)
t(P.dY,P.dX)
t(P.hx,P.dY)
t(P.eh,P.dh)
t(P.fI,P.b9)
t(P.dN,P.dM)
t(P.ha,P.dN)
s(T.cy,[T.au,R.d7])
s(E.el,[Z.cl,A.cU,T.bm])
s(D.M,[D.aM,D.aN,D.n,X.fN])
s(X.fN,[X.cH,X.at,X.bQ,X.d6])
s(O.aq,[D.cE,U.bI,M.cn])
s(D.eo,[U.er,U.a1])
t(U.bF,U.a1)
s(A.cU,[A.eC,A.eW,A.ff,A.h6,A.ho])
s(A.d8,[A.b0,A.hB,A.hC,A.hD,A.hA,A.J,A.an,A.C,A.b1,A.hF,A.bp,A.N,A.ac,A.O])
s(O.d0,[O.eB,O.cx,O.cK,O.cV,O.d1])
s(O.bN,[O.fg,O.fh,O.ai])
s(O.ai,[O.fk,O.fl])
s(T.bm,[T.hl,T.hn])
t(T.hm,T.hl)
s(X.hh,[X.ek,X.eV])
u(H.d9,H.hI)
u(H.c3,P.p)
u(H.c4,H.cu)
u(H.c5,P.p)
u(H.c6,H.cu)
u(P.dx,P.p)
u(W.di,W.ew)
u(W.dk,P.p)
u(W.dl,W.E)
u(W.dm,P.p)
u(W.dn,W.E)
u(W.dq,P.p)
u(W.dr,W.E)
u(W.ds,P.p)
u(W.dt,W.E)
u(W.dy,P.as)
u(W.dz,P.as)
u(W.dA,P.p)
u(W.dB,W.E)
u(W.dD,P.p)
u(W.dE,W.E)
u(W.dH,P.p)
u(W.dI,W.E)
u(W.dJ,P.as)
u(W.c7,P.p)
u(W.c8,W.E)
u(W.dK,P.p)
u(W.dL,W.E)
u(W.dP,P.as)
u(W.dS,P.p)
u(W.dT,W.E)
u(W.c9,P.p)
u(W.ca,W.E)
u(W.dV,P.p)
u(W.dW,W.E)
u(W.e_,P.p)
u(W.e0,W.E)
u(W.e1,P.p)
u(W.e2,W.E)
u(W.e3,P.p)
u(W.e4,W.E)
u(W.e5,P.p)
u(W.e6,W.E)
u(W.e7,P.p)
u(W.e8,W.E)
u(P.du,P.p)
u(P.dv,W.E)
u(P.dF,P.p)
u(P.dG,W.E)
u(P.dQ,P.p)
u(P.dR,W.E)
u(P.dX,P.p)
u(P.dY,W.E)
u(P.dh,P.as)
u(P.dM,P.p)
u(P.dN,W.E)})()
var v={mangledGlobalNames:{x:"int",G:"double",ab:"num",t:"String",b7:"bool",aS:"Null",bi:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.M]},{func:1,ret:-1,args:[D.M]},{func:1,ret:-1,args:[W.ak]},{func:1,ret:-1,args:[P.x,[P.j,E.ar]]},{func:1,ret:-1,args:[W.i]},{func:1,ret:-1,args:[W.bn]},{func:1,ret:P.G},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.aS,args:[,,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bg]},{func:1,ret:-1,args:[P.x,[P.j,D.a0]]},{func:1,ret:-1,args:[P.x,[P.j,U.a1]]},{func:1,ret:-1,args:[P.x,[P.j,M.a9]]},{func:1,ret:-1,args:[P.x,[P.j,V.a6]]},{func:1,ret:-1,args:[P.x,[P.j,O.aY]]},{func:1,ret:P.aS,args:[,]},{func:1,ret:-1,args:[W.b3]},{func:1,ret:P.b7,args:[[P.j,D.a0]]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.f=W.ba.prototype
C.F=J.a.prototype
C.a=J.aO.prototype
C.G=J.cz.prototype
C.d=J.cA.prototype
C.k=J.cB.prototype
C.b=J.bL.prototype
C.c=J.bf.prototype
C.H=J.aP.prototype
C.p=J.fK.prototype
C.q=P.cT.prototype
C.l=J.c1.prototype
C.r=W.b3.prototype
C.t=W.c2.prototype
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

C.A=new P.fJ()
C.o=new P.hL()
C.B=new P.hM()
C.e=new P.ih()
C.h=new A.bb(0,"ColorBlendType.Overwrite")
C.C=new A.bb(1,"ColorBlendType.Additive")
C.D=new A.bb(2,"ColorBlendType.Average")
C.i=new A.bb(3,"ColorBlendType.AlphaBlend")
C.j=new P.aG(0)
C.E=new P.aG(5e6)
C.I=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.x])})();(function staticFields(){$.ag=0
$.bC=null
$.ji=null
$.k_=null
$.jW=null
$.k2=null
$.iy=null
$.iD=null
$.jb=null
$.bt=null
$.cc=null
$.cd=null
$.j5=!1
$.ad=C.e
$.a_=[]
$.js=null
$.fs=null
$.jy=null
$.bU=null
$.bY=null
$.jO=null
$.jM=null
$.jN=null
$.jQ=null
$.hN=null
$.hO=null
$.hP=null
$.jP=null
$.jR=null
$.jx=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"mi","k7",function(){return H.jY("_$dart_dartClosure")})
u($,"mj","je",function(){return H.jY("_$dart_js")})
u($,"mk","k8",function(){return H.am(H.hz({
toString:function(){return"$receiver$"}}))})
u($,"ml","k9",function(){return H.am(H.hz({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"mm","ka",function(){return H.am(H.hz(null))})
u($,"mn","kb",function(){return H.am(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mq","ke",function(){return H.am(H.hz(void 0))})
u($,"mr","kf",function(){return H.am(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mp","kd",function(){return H.am(H.jK(null))})
u($,"mo","kc",function(){return H.am(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"mt","kh",function(){return H.am(H.jK(void 0))})
u($,"ms","kg",function(){return H.am(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"mG","jf",function(){return P.l7()})
u($,"mH","kl",function(){return P.kV("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"mA","kk",function(){return Z.aa(0)})
u($,"mu","ki",function(){return Z.aa(511)})
u($,"mC","Q",function(){return Z.aa(1)})
u($,"mB","aD",function(){return Z.aa(2)})
u($,"mw","aC",function(){return Z.aa(4)})
u($,"mD","ap",function(){return Z.aa(8)})
u($,"mE","aE",function(){return Z.aa(16)})
u($,"mx","ch",function(){return Z.aa(32)})
u($,"my","ci",function(){return Z.aa(64)})
u($,"mz","kj",function(){return Z.aa(96)})
u($,"mF","by",function(){return Z.aa(128)})
u($,"mv","aB",function(){return Z.aa(256)})
u($,"mh","k6",function(){return new V.eL(1e-9)})
u($,"mg","u",function(){return $.k6()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.bS,ArrayBufferView:H.bS,Float32Array:H.bR,Float64Array:H.bR,Int16Array:H.fA,Int32Array:H.fB,Int8Array:H.fC,Uint16Array:H.fD,Uint32Array:H.fE,Uint8ClampedArray:H.cN,CanvasPixelArray:H.cN,Uint8Array:H.fF,HTMLAudioElement:W.l,HTMLBRElement:W.l,HTMLBaseElement:W.l,HTMLBodyElement:W.l,HTMLButtonElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLDivElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLInputElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMediaElement:W.l,HTMLMenuElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTableElement:W.l,HTMLTableRowElement:W.l,HTMLTableSectionElement:W.l,HTMLTemplateElement:W.l,HTMLTextAreaElement:W.l,HTMLTimeElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLVideoElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLFrameSetElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,AccessibleNodeList:W.eb,HTMLAnchorElement:W.ed,HTMLAreaElement:W.ee,Blob:W.ck,HTMLCanvasElement:W.ba,CDATASection:W.aF,CharacterData:W.aF,Comment:W.aF,ProcessingInstruction:W.aF,Text:W.aF,CSSPerspective:W.ev,CSSCharsetRule:W.D,CSSConditionRule:W.D,CSSFontFaceRule:W.D,CSSGroupingRule:W.D,CSSImportRule:W.D,CSSKeyframeRule:W.D,MozCSSKeyframeRule:W.D,WebKitCSSKeyframeRule:W.D,CSSKeyframesRule:W.D,MozCSSKeyframesRule:W.D,WebKitCSSKeyframesRule:W.D,CSSMediaRule:W.D,CSSNamespaceRule:W.D,CSSPageRule:W.D,CSSRule:W.D,CSSStyleRule:W.D,CSSSupportsRule:W.D,CSSViewportRule:W.D,CSSStyleDeclaration:W.bG,MSStyleCSSProperties:W.bG,CSS2Properties:W.bG,CSSImageValue:W.a4,CSSKeywordValue:W.a4,CSSNumericValue:W.a4,CSSPositionValue:W.a4,CSSResourceValue:W.a4,CSSUnitValue:W.a4,CSSURLImageValue:W.a4,CSSStyleValue:W.a4,CSSMatrixComponent:W.ah,CSSRotation:W.ah,CSSScale:W.ah,CSSSkew:W.ah,CSSTranslation:W.ah,CSSTransformComponent:W.ah,CSSTransformValue:W.ex,CSSUnparsedValue:W.ey,DataTransferItemList:W.eA,DOMException:W.eD,ClientRectList:W.cr,DOMRectList:W.cr,DOMRectReadOnly:W.cs,DOMStringList:W.eE,DOMTokenList:W.eF,Element:W.Y,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.aJ,FileList:W.eO,FileWriter:W.eP,HTMLFormElement:W.eT,Gamepad:W.aK,History:W.eY,HTMLCollection:W.bJ,HTMLFormControlsCollection:W.bJ,HTMLOptionsCollection:W.bJ,ImageData:W.aL,HTMLImageElement:W.bK,KeyboardEvent:W.bg,Location:W.f9,MediaList:W.ft,MIDIInputMap:W.fu,MIDIOutputMap:W.fw,MimeType:W.aR,MimeTypeArray:W.fy,PointerEvent:W.ak,MouseEvent:W.ak,DragEvent:W.ak,Document:W.H,DocumentFragment:W.H,HTMLDocument:W.H,ShadowRoot:W.H,XMLDocument:W.H,Attr:W.H,DocumentType:W.H,Node:W.H,NodeList:W.cO,RadioNodeList:W.cO,Plugin:W.aT,PluginArray:W.fL,RTCStatsReport:W.fV,HTMLSelectElement:W.fY,SourceBuffer:W.aU,SourceBufferList:W.h7,SpeechGrammar:W.aV,SpeechGrammarList:W.h8,SpeechRecognitionResult:W.aW,Storage:W.hd,CSSStyleSheet:W.ay,StyleSheet:W.ay,TextTrack:W.aX,TextTrackCue:W.az,VTTCue:W.az,TextTrackCueList:W.hj,TextTrackList:W.hk,TimeRanges:W.hs,Touch:W.aZ,TouchEvent:W.bn,TouchList:W.hv,TrackDefaultList:W.hw,CompositionEvent:W.b_,FocusEvent:W.b_,TextEvent:W.b_,UIEvent:W.b_,URL:W.hK,VideoTrackList:W.hZ,WheelEvent:W.b3,Window:W.c2,DOMWindow:W.c2,CSSRuleList:W.i7,ClientRect:W.dj,DOMRect:W.dj,GamepadList:W.ia,NamedNodeMap:W.dC,MozNamedAttrMap:W.dC,SpeechRecognitionResultList:W.il,StyleSheetList:W.im,SVGLength:P.bh,SVGLengthList:P.f5,SVGNumber:P.bj,SVGNumberList:P.fH,SVGPointList:P.fO,SVGStringList:P.hg,SVGAElement:P.k,SVGAnimateElement:P.k,SVGAnimateMotionElement:P.k,SVGAnimateTransformElement:P.k,SVGAnimationElement:P.k,SVGCircleElement:P.k,SVGClipPathElement:P.k,SVGDefsElement:P.k,SVGDescElement:P.k,SVGDiscardElement:P.k,SVGEllipseElement:P.k,SVGFEBlendElement:P.k,SVGFEColorMatrixElement:P.k,SVGFEComponentTransferElement:P.k,SVGFECompositeElement:P.k,SVGFEConvolveMatrixElement:P.k,SVGFEDiffuseLightingElement:P.k,SVGFEDisplacementMapElement:P.k,SVGFEDistantLightElement:P.k,SVGFEFloodElement:P.k,SVGFEFuncAElement:P.k,SVGFEFuncBElement:P.k,SVGFEFuncGElement:P.k,SVGFEFuncRElement:P.k,SVGFEGaussianBlurElement:P.k,SVGFEImageElement:P.k,SVGFEMergeElement:P.k,SVGFEMergeNodeElement:P.k,SVGFEMorphologyElement:P.k,SVGFEOffsetElement:P.k,SVGFEPointLightElement:P.k,SVGFESpecularLightingElement:P.k,SVGFESpotLightElement:P.k,SVGFETileElement:P.k,SVGFETurbulenceElement:P.k,SVGFilterElement:P.k,SVGForeignObjectElement:P.k,SVGGElement:P.k,SVGGeometryElement:P.k,SVGGraphicsElement:P.k,SVGImageElement:P.k,SVGLineElement:P.k,SVGLinearGradientElement:P.k,SVGMarkerElement:P.k,SVGMaskElement:P.k,SVGMetadataElement:P.k,SVGPathElement:P.k,SVGPatternElement:P.k,SVGPolygonElement:P.k,SVGPolylineElement:P.k,SVGRadialGradientElement:P.k,SVGRectElement:P.k,SVGScriptElement:P.k,SVGSetElement:P.k,SVGStopElement:P.k,SVGStyleElement:P.k,SVGElement:P.k,SVGSVGElement:P.k,SVGSwitchElement:P.k,SVGSymbolElement:P.k,SVGTSpanElement:P.k,SVGTextContentElement:P.k,SVGTextElement:P.k,SVGTextPathElement:P.k,SVGTextPositioningElement:P.k,SVGTitleElement:P.k,SVGUseElement:P.k,SVGViewElement:P.k,SVGGradientElement:P.k,SVGComponentTransferFunctionElement:P.k,SVGFEDropShadowElement:P.k,SVGMPathElement:P.k,SVGTransform:P.bo,SVGTransformList:P.hx,AudioBuffer:P.eg,AudioParamMap:P.eh,AudioTrackList:P.ej,AudioContext:P.b9,webkitAudioContext:P.b9,BaseAudioContext:P.b9,OfflineAudioContext:P.fI,WebGL2RenderingContext:P.cT,SQLResultSetRowList:P.ha})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.cL.$nativeSuperclassTag="ArrayBufferView"
H.c3.$nativeSuperclassTag="ArrayBufferView"
H.c4.$nativeSuperclassTag="ArrayBufferView"
H.bR.$nativeSuperclassTag="ArrayBufferView"
H.c5.$nativeSuperclassTag="ArrayBufferView"
H.c6.$nativeSuperclassTag="ArrayBufferView"
H.cM.$nativeSuperclassTag="ArrayBufferView"
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
if(typeof dartMainRunner==="function")dartMainRunner(N.k0,[])
else N.k0([])})})()
//# sourceMappingURL=test.dart.js.map
