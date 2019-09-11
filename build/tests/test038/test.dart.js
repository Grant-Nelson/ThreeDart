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
a[c]=function(){a[c]=function(){H.oD(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kE"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kE"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kE(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={kg:function kg(){},
jS:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
mB:function(){return new P.hR("No element")},
dL:function(a,b,c,d,e){if(c-b<=32)H.n5(a,b,c,d,e)
else H.n4(a,b,c,d,e)},
n5:function(a,b,c,d,e){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.d(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.d(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.V()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.d(a,q)
C.a.k(a,s,a[q])
s=q}C.a.k(a,s,t)}},
n4:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.d.a1(a4-a3+1,6),d=a3+e,c=a4-e,b=C.d.a1(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
if(d<0||d>=a1)return H.d(a2,d)
u=a2[d]
if(a<0||a>=a1)return H.d(a2,a)
t=a2[a]
if(b<0||b>=a1)return H.d(a2,b)
s=a2[b]
if(a0<0||a0>=a1)return H.d(a2,a0)
r=a2[a0]
if(c<0||c>=a1)return H.d(a2,c)
q=a2[c]
a1=a5.$2(u,t)
if(typeof a1!=="number")return a1.V()
if(a1>0){p=t
t=u
u=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.V()
if(a1>0){p=q
q=r
r=p}a1=a5.$2(u,s)
if(typeof a1!=="number")return a1.V()
if(a1>0){p=s
s=u
u=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.V()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(u,r)
if(typeof a1!=="number")return a1.V()
if(a1>0){p=r
r=u
u=p}a1=a5.$2(s,r)
if(typeof a1!=="number")return a1.V()
if(a1>0){p=r
r=s
s=p}a1=a5.$2(t,q)
if(typeof a1!=="number")return a1.V()
if(a1>0){p=q
q=t
t=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.V()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.V()
if(a1>0){p=q
q=r
r=p}C.a.k(a2,d,u)
C.a.k(a2,b,s)
C.a.k(a2,c,q)
if(a3<0||a3>=a2.length)return H.d(a2,a3)
C.a.k(a2,a,a2[a3])
if(a4<0||a4>=a2.length)return H.d(a2,a4)
C.a.k(a2,a0,a2[a4])
o=a3+1
n=a4-1
if(J.T(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.d(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.M()
if(k<0){if(m!==o){if(o>=a2.length)return H.d(a2,o)
C.a.k(a2,m,a2[o])
C.a.k(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.d(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.V()
if(k>0){--n
continue}else{j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.d(a2,o)
C.a.k(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.d(a2,n)
C.a.k(a2,o,a2[n])
C.a.k(a2,n,l)
n=j
o=i
break}else{if(n>=a1)return H.d(a2,n)
C.a.k(a2,m,a2[n])
C.a.k(a2,n,l)
n=j
break}}}}h=!0}else{for(m=o;m<=n;++m){if(m>=a2.length)return H.d(a2,m)
l=a2[m]
g=a5.$2(l,t)
if(typeof g!=="number")return g.M()
if(g<0){if(m!==o){if(o>=a2.length)return H.d(a2,o)
C.a.k(a2,m,a2[o])
C.a.k(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.V()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.d(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.V()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.d(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.M()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.d(a2,o)
C.a.k(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.d(a2,n)
C.a.k(a2,o,a2[n])
C.a.k(a2,n,l)
o=i}else{if(n>=a1)return H.d(a2,n)
C.a.k(a2,m,a2[n])
C.a.k(a2,n,l)}n=j
break}}}}h=!1}a1=o-1
if(a1>=a2.length)return H.d(a2,a1)
C.a.k(a2,a3,a2[a1])
C.a.k(a2,a1,t)
a1=n+1
if(a1<0||a1>=a2.length)return H.d(a2,a1)
C.a.k(a2,a4,a2[a1])
C.a.k(a2,a1,r)
H.dL(a2,a3,o-2,a5,a6)
H.dL(a2,n+2,a4,a5,a6)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.d(a2,o)
if(!J.T(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.d(a2,n)
if(!J.T(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.d(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.d(a2,o)
C.a.k(a2,m,a2[o])
C.a.k(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.d(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.d(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.M()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.d(a2,o)
C.a.k(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.d(a2,n)
C.a.k(a2,o,a2[n])
C.a.k(a2,n,l)
o=i}else{if(n>=a1)return H.d(a2,n)
C.a.k(a2,m,a2[n])
C.a.k(a2,n,l)}n=j
break}}}H.dL(a2,o,n,a5,a6)}else H.dL(a2,o,n,a5,a6)},
a3:function a3(a){this.a=a},
fw:function fw(){},
du:function du(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
h_:function h_(a,b,c){this.a=a
this.b=b
this.$ti=c},
h0:function h0(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
iO:function iO(a,b,c){this.a=a
this.b=b
this.$ti=c},
iP:function iP(a,b,c){this.a=a
this.b=b
this.$ti=c},
bP:function bP(){},
cN:function cN(){},
dW:function dW(){},
mu:function(){throw H.b(P.E("Cannot modify unmodifiable Map"))},
cb:function(a){var u,t=H.oE(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
on:function(a){return v.types[H.a9(a)]},
ot:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.Q(a).$iK},
k:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.as(a)
if(typeof u!=="string")throw H.b(H.aT(a))
return u},
cC:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
mX:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.d(p,3)
u=H.S(p[3])
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.b(P.ad(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.b.D(s,q)|32)>t)return}return parseInt(a,b)},
cD:function(a){return H.mO(a)+H.kB(H.bF(a),0,null)},
mO:function(a){var u,t,s,r,q,p,o,n=J.Q(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.J||!!n.$ic_){r=C.q(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cb(t.length>1&&C.b.D(t,0)===36?C.b.a5(t,1):t)},
mP:function(){if(!!self.location)return self.location.href
return},
l9:function(a){var u,t,s,r,q=J.aE(a)
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
mY:function(a){var u,t,s,r=H.e([],[P.l])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.w)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.b(H.aT(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.d.aK(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.b(H.aT(s))}return H.l9(r)},
la:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.b(H.aT(s))
if(s<0)throw H.b(H.aT(s))
if(s>65535)return H.mY(a)}return H.l9(a)},
mZ:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
dF:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.aK(u,10))>>>0,56320|u&1023)}}throw H.b(P.ad(a,0,1114111,null,null))},
bS:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mW:function(a){var u=H.bS(a).getFullYear()+0
return u},
mU:function(a){var u=H.bS(a).getMonth()+1
return u},
mQ:function(a){var u=H.bS(a).getDate()+0
return u},
mR:function(a){var u=H.bS(a).getHours()+0
return u},
mT:function(a){var u=H.bS(a).getMinutes()+0
return u},
mV:function(a){var u=H.bS(a).getSeconds()+0
return u},
mS:function(a){var u=H.bS(a).getMilliseconds()+0
return u},
q:function(a){throw H.b(H.aT(a))},
d:function(a,b){if(a==null)J.aE(a)
throw H.b(H.c6(a,b))},
c6:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aU(!0,b,s,null)
u=H.a9(J.aE(a))
if(!(b<0)){if(typeof u!=="number")return H.q(u)
t=b>=u}else t=!0
if(t)return P.U(b,a,s,null,u)
return P.hy(b,s)},
oh:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bT(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bT(a,c,!0,b,"end",u)
return new P.aU(!0,b,"end",null)},
aT:function(a){return new P.aU(!0,a,null,null)},
oc:function(a){if(typeof a!=="number")throw H.b(H.aT(a))
return a},
b:function(a){var u
if(a==null)a=new P.dC()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.lZ})
u.name=""}else u.toString=H.lZ
return u},
lZ:function(){return J.as(this.dartException)},
x:function(a){throw H.b(a)},
w:function(a){throw H.b(P.bM(a))},
b6:function(a){var u,t,s,r,q,p
a=H.lW(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.e([],[P.i])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.ic(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
id:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
lk:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
l4:function(a,b){return new H.hq(a,b==null?null:b.method)},
kh:function(a,b){var u=b==null,t=u?null:b.method
return new H.fN(a,t,u?null:b.receiver)},
aD:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.k2(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.aK(t,16)&8191)===10)switch(s){case 438:return f.$1(H.kh(H.k(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.l4(H.k(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.m1()
q=$.m2()
p=$.m3()
o=$.m4()
n=$.m7()
m=$.m8()
l=$.m6()
$.m5()
k=$.ma()
j=$.m9()
i=r.a9(u)
if(i!=null)return f.$1(H.kh(H.S(u),i))
else{i=q.a9(u)
if(i!=null){i.method="call"
return f.$1(H.kh(H.S(u),i))}else{i=p.a9(u)
if(i==null){i=o.a9(u)
if(i==null){i=n.a9(u)
if(i==null){i=m.a9(u)
if(i==null){i=l.a9(u)
if(i==null){i=o.a9(u)
if(i==null){i=k.a9(u)
if(i==null){i=j.a9(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.l4(H.S(u),i))}}return f.$1(new H.iq(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dN()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aU(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dN()
return a},
c9:function(a){var u
if(a==null)return new H.ez(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.ez(a)},
ol:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.k(0,a[u],a[t])}return b},
os:function(a,b,c,d,e,f){H.f(a,"$ikc")
switch(H.a9(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.B("Unsupported number of arguments for wrapped closure"))},
c5:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.os)
a.$identity=u
return u},
mt:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hS().constructor.prototype):Object.create(new H.cd(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aV
if(typeof t!=="number")return t.u()
$.aV=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.kS(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.mp(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.kS(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
mp:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.on,a)
if(typeof a=="function")if(b)return a
else{u=c?H.kR:H.k8
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.b("Error in functionType of tearoff")},
mq:function(a,b,c,d){var u=H.k8
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
kS:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.ms(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mq(t,!r,u,b)
if(t===0){r=$.aV
if(typeof r!=="number")return r.u()
$.aV=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.ce
return new Function(r+H.k(q==null?$.ce=H.fb("self"):q)+";return "+p+"."+H.k(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aV
if(typeof r!=="number")return r.u()
$.aV=r+1
o+=r
r="return function("+o+"){return this."
q=$.ce
return new Function(r+H.k(q==null?$.ce=H.fb("self"):q)+"."+H.k(u)+"("+o+");}")()},
mr:function(a,b,c,d){var u=H.k8,t=H.kR
switch(b?-1:a){case 0:throw H.b(H.n2("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
ms:function(a,b){var u,t,s,r,q,p,o,n=$.ce
if(n==null)n=$.ce=H.fb("self")
u=$.kQ
if(u==null)u=$.kQ=H.fb("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.mr(s,!q,t,b)
if(s===1){n="return function(){return this."+H.k(n)+"."+H.k(t)+"(this."+H.k(u)+");"
u=$.aV
if(typeof u!=="number")return u.u()
$.aV=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.k(n)+"."+H.k(t)+"(this."+H.k(u)+", "+o+");"
u=$.aV
if(typeof u!=="number")return u.u()
$.aV=u+1
return new Function(n+u+"}")()},
kE:function(a,b,c,d,e,f,g){return H.mt(a,b,c,d,!!e,!!f,g)},
k8:function(a){return a.a},
kR:function(a){return a.c},
fb:function(a){var u,t,s,r=new H.cd("self","target","receiver","name"),q=J.ke(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
F:function(a){if(a==null)H.o8("boolean expression must not be null")
return a},
S:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.b(H.aS(a,"String"))},
oi:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.b(H.aS(a,"double"))},
lS:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.b(H.aS(a,"num"))},
lL:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.b(H.aS(a,"bool"))},
a9:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.b(H.aS(a,"int"))},
lU:function(a,b){throw H.b(H.aS(a,H.cb(H.S(b).substring(2))))},
oy:function(a,b){throw H.b(H.mo(a,H.cb(H.S(b).substring(2))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.Q(a)[b])return a
H.lU(a,b)},
u:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.Q(a)[b]
else u=!0
if(u)return a
H.oy(a,b)},
pk:function(a){if(a==null)return a
if(!!J.Q(a).$ic)return a
throw H.b(H.aS(a,"List<dynamic>"))},
lQ:function(a,b){var u
if(a==null)return a
u=J.Q(a)
if(!!u.$ic)return a
if(u[b])return a
H.lU(a,b)},
lM:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a9(u)]
else return a.$S()}return},
eW:function(a,b){var u
if(typeof a=="function")return!0
u=H.lM(J.Q(a))
if(u==null)return!1
return H.lA(u,null,b,null)},
o:function(a,b){var u,t
if(a==null)return a
if($.ky)return a
$.ky=!0
try{if(H.eW(a,b))return a
u=H.k_(b)
t=H.aS(a,u)
throw H.b(t)}finally{$.ky=!1}},
kF:function(a,b){if(a!=null&&!H.kD(a,b))H.x(H.aS(a,H.k_(b)))
return a},
aS:function(a,b){return new H.ie("TypeError: "+P.dk(a)+": type '"+H.k(H.lG(a))+"' is not a subtype of type '"+b+"'")},
mo:function(a,b){return new H.fc("CastError: "+P.dk(a)+": type '"+H.k(H.lG(a))+"' is not a subtype of type '"+b+"'")},
lG:function(a){var u,t=J.Q(a)
if(!!t.$ich){u=H.lM(t)
if(u!=null)return H.k_(u)
return"Closure"}return H.cD(a)},
o8:function(a){throw H.b(new H.iQ(a))},
oD:function(a){throw H.b(new P.fp(a))},
n2:function(a){return new H.hF(a)},
lN:function(a){return v.getIsolateTag(a)},
e:function(a,b){a.$ti=b
return a},
bF:function(a){if(a==null)return
return a.$ti},
pj:function(a,b,c){return H.ca(a["$a"+H.k(c)],H.bF(b))},
c8:function(a,b,c,d){var u=H.ca(a["$a"+H.k(c)],H.bF(b))
return u==null?null:u[d]},
av:function(a,b,c){var u=H.ca(a["$a"+H.k(b)],H.bF(a))
return u==null?null:u[c]},
t:function(a,b){var u=H.bF(a)
return u==null?null:u[b]},
k_:function(a){return H.bE(a,null)},
bE:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cb(a[0].name)+H.kB(a,1,b)
if(typeof a=="function")return H.cb(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a9(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.k(b[t])}if('func' in a)return H.nI(a,b)
if('futureOr' in a)return"FutureOr<"+H.bE("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
nI:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.e([],[P.i])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.d(a0,m)
p=C.b.u(p,a0[m])
l=u[q]
if(l!=null&&l!==P.O)p+=" extends "+H.bE(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bE(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bE(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bE(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.ok(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.S(n[g])
i=i+h+H.bE(d[c],a0)+(" "+H.k(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
kB:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.a4("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bE(p,c)}return"<"+u.i(0)+">"},
ca:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
kC:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.bF(a)
t=J.Q(a)
if(t[b]==null)return!1
return H.lJ(H.ca(t[d],u),null,c,null)},
n:function(a,b,c,d){if(a==null)return a
if(H.kC(a,b,c,d))return a
throw H.b(H.aS(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cb(b.substring(2))+H.kB(c,0,null),v.mangledGlobalNames)))},
lJ:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aC(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aC(a[t],b,c[t],d))return!1
return!0},
ph:function(a,b,c){return a.apply(b,H.ca(J.Q(b)["$a"+H.k(c)],H.bF(b)))},
lP:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="O"||a.name==="J"||a===-1||a===-2||H.lP(u)}return!1},
kD:function(a,b){var u,t
if(a==null)return b==null||b.name==="O"||b.name==="J"||b===-1||b===-2||H.lP(b)
if(b==null||b===-1||b.name==="O"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.kD(a,"type" in b?b.type:null))return!0
if('func' in b)return H.eW(a,b)}u=J.Q(a).constructor
t=H.bF(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aC(u,null,b,null)},
C:function(a,b){if(a!=null&&!H.kD(a,b))throw H.b(H.aS(a,H.k_(b)))
return a},
aC:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="O"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="O"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aC(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="J")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aC("type" in a?a.type:l,b,s,d)
else if(H.aC(a,b,s,d))return!0
else{if(!('$i'+"cm" in t.prototype))return!1
r=t.prototype["$a"+"cm"]
q=H.ca(r,u?a.slice(1):l)
return H.aC(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.lA(a,b,c,d)
if('func' in a)return c.name==="kc"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.lJ(H.ca(m,u),b,p,d)},
lA:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aC(a.ret,b,c.ret,d))return!1
s=a.args
r=c.args
q=a.opt
p=c.opt
o=s!=null?s.length:0
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
if(o>n)return!1
if(o+m<n+l)return!1
for(k=0;k<o;++k)if(!H.aC(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aC(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aC(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.ow(h,b,g,d)},
ow:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aC(c[s],d,a[s],b))return!1}return!0},
pi:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
ou:function(a){var u,t,s,r,q=H.S($.lO.$1(a)),p=$.jN[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jW[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.S($.lI.$2(a,q))
if(q!=null){p=$.jN[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jW[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.jZ(u)
$.jN[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.jW[q]=u
return u}if(s==="-"){r=H.jZ(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.lT(a,u)
if(s==="*")throw H.b(P.ip(q))
if(v.leafTags[q]===true){r=H.jZ(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.lT(a,u)},
lT:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kI(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jZ:function(a){return J.kI(a,!1,null,!!a.$iK)},
ov:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jZ(u)
else return J.kI(u,c,null,null)},
oq:function(){if(!0===$.kH)return
$.kH=!0
H.or()},
or:function(){var u,t,s,r,q,p,o,n
$.jN=Object.create(null)
$.jW=Object.create(null)
H.op()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.lV.$1(q)
if(p!=null){o=H.ov(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
op:function(){var u,t,s,r,q,p,o=C.A()
o=H.c4(C.B,H.c4(C.C,H.c4(C.r,H.c4(C.r,H.c4(C.D,H.c4(C.E,H.c4(C.F(C.q),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.lO=new H.jT(r)
$.lI=new H.jU(q)
$.lV=new H.jV(p)},
c4:function(a,b){return a(b)||b},
mD:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.b(P.a1("Illegal RegExp pattern ("+String(p)+")",a,null))},
oB:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
oj:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
lW:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lX:function(a,b,c){var u=H.oC(a,b,c)
return u},
oC:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.lW(b),'g'),H.oj(c))},
fj:function fj(){},
fk:function fk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ic:function ic(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hq:function hq(a,b){this.a=a
this.b=b},
fN:function fN(a,b,c){this.a=a
this.b=b
this.c=c},
iq:function iq(a){this.a=a},
k2:function k2(a){this.a=a},
ez:function ez(a){this.a=a
this.b=null},
ch:function ch(){},
i_:function i_(){},
hS:function hS(){},
cd:function cd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ie:function ie(a){this.a=a},
fc:function fc(a){this.a=a},
hF:function hF(a){this.a=a},
iQ:function iQ(a){this.a=a},
a_:function a_(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fQ:function fQ(a,b){this.a=a
this.b=b
this.c=null},
fR:function fR(a,b){this.a=a
this.$ti=b},
fS:function fS(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
jT:function jT(a){this.a=a},
jU:function jU(a){this.a=a},
jV:function jV(a){this.a=a},
fM:function fM(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
c2:function(a){return a},
mN:function(a){return new Int8Array(a)},
ba:function(a,b,c){if(a>>>0!==a||a>=c)throw H.b(H.c6(b,a))},
nG:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.b(H.oh(a,b,c))
return b},
cw:function cw(){},
bz:function bz(){},
dz:function dz(){},
cx:function cx(){},
dA:function dA(){},
hl:function hl(){},
hm:function hm(){},
hn:function hn(){},
ho:function ho(){},
hp:function hp(){},
dB:function dB(){},
cy:function cy(){},
cR:function cR(){},
cS:function cS(){},
cT:function cT(){},
cU:function cU(){},
ok:function(a){return J.kW(a?Object.keys(a):[],null)},
oE:function(a){return v.mangledGlobalNames[a]},
ox:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kI:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jP:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.kH==null){H.oq()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.b(P.ip("Return interceptor for "+H.k(u(a,q))))}s=a.constructor
r=s==null?null:s[$.kL()]
if(r!=null)return r
r=H.ou(a)
if(r!=null)return r
if(typeof a=="function")return C.L
u=Object.getPrototypeOf(a)
if(u==null)return C.w
if(u===Object.prototype)return C.w
if(typeof s=="function"){Object.defineProperty(s,$.kL(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
mC:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.b(P.k7(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.b(P.ad(a,0,4294967295,"length",null))
return J.kW(new Array(a),b)},
kW:function(a,b){return J.ke(H.e(a,[b]))},
ke:function(a){a.fixed$length=Array
return a},
Q:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dp.prototype
return J.dn.prototype}if(typeof a=="string")return J.bw.prototype
if(a==null)return J.dq.prototype
if(typeof a=="boolean")return J.fL.prototype
if(a.constructor==Array)return J.aZ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bx.prototype
return a}if(a instanceof P.O)return a
return J.jP(a)},
d2:function(a){if(typeof a=="string")return J.bw.prototype
if(a==null)return a
if(a.constructor==Array)return J.aZ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bx.prototype
return a}if(a instanceof P.O)return a
return J.jP(a)},
jO:function(a){if(a==null)return a
if(a.constructor==Array)return J.aZ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bx.prototype
return a}if(a instanceof P.O)return a
return J.jP(a)},
om:function(a){if(typeof a=="number")return J.cq.prototype
if(typeof a=="string")return J.bw.prototype
if(a==null)return a
if(!(a instanceof P.O))return J.c_.prototype
return a},
kG:function(a){if(typeof a=="string")return J.bw.prototype
if(a==null)return a
if(!(a instanceof P.O))return J.c_.prototype
return a},
eX:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bx.prototype
return a}if(a instanceof P.O)return a
return J.jP(a)},
T:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.Q(a).n(a,b)},
d5:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.ot(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.d2(a).j(a,b)},
k4:function(a,b,c){return J.jO(a).k(a,b,c)},
mi:function(a,b){return J.kG(a).D(a,b)},
mj:function(a,b,c){return J.eX(a).h6(a,b,c)},
mk:function(a,b,c,d){return J.eX(a).hz(a,b,c,d)},
ml:function(a,b){return J.kG(a).P(a,b)},
k5:function(a,b){return J.om(a).hI(a,b)},
k6:function(a,b){return J.jO(a).G(a,b)},
mm:function(a,b,c,d){return J.eX(a).hY(a,b,c,d)},
kN:function(a,b){return J.jO(a).F(a,b)},
kO:function(a){return J.eX(a).gbT(a)},
d6:function(a){return J.Q(a).gE(a)},
bH:function(a){return J.jO(a).gS(a)},
aE:function(a){return J.d2(a).gl(a)},
mn:function(a,b){return J.eX(a).iz(a,b)},
as:function(a){return J.Q(a).i(a)},
a:function a(){},
fL:function fL(){},
dq:function dq(){},
dr:function dr(){},
hu:function hu(){},
c_:function c_(){},
bx:function bx(){},
aZ:function aZ(a){this.$ti=a},
kf:function kf(a){this.$ti=a},
ap:function ap(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cq:function cq(){},
dp:function dp(){},
dn:function dn(){},
bw:function bw(){}},P={
nj:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.o9()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.c5(new P.iS(s),1)).observe(u,{childList:true})
return new P.iR(s,u,t)}else if(self.setImmediate!=null)return P.oa()
return P.ob()},
nk:function(a){self.scheduleImmediate(H.c5(new P.iT(H.o(a,{func:1,ret:-1})),0))},
nl:function(a){self.setImmediate(H.c5(new P.iU(H.o(a,{func:1,ret:-1})),0))},
nm:function(a){P.kl(C.n,H.o(a,{func:1,ret:-1}))},
kl:function(a,b){var u=C.d.a1(a.a,1000)
return P.nq(u<0?0:u,b)},
lj:function(a,b){var u=C.d.a1(a.a,1000)
return P.nr(u<0?0:u,b)},
nq:function(a,b){var u=new P.eF()
u.eu(a,b)
return u},
nr:function(a,b){var u=new P.eF()
u.ev(a,b)
return u},
nn:function(a,b){var u,t,s
b.a=1
try{a.dW(new P.j2(b),new P.j3(b),null)}catch(s){u=H.aD(s)
t=H.c9(s)
P.oz(new P.j4(b,u,t))}},
ls:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.f(a.c,"$iaB")
if(u>=4){t=b.bI()
b.a=a.a
b.c=a.c
P.cP(b,t)}else{t=H.f(b.c,"$ib9")
b.a=2
b.c=a
a.cV(t)}},
cP:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.f(g.c,"$ian")
P.jJ(i,i,g.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.cP(h.a,b)}g=h.a
q=g.c
u.a=t
u.b=q
p=!t
if(p){o=b.c
o=(o&1)!==0||(o&15)===8}else o=!0
if(o){o=b.b
n=o.b
if(t){m=g.b===n
m=!(m||m)}else m=!1
if(m){H.f(q,"$ian")
P.jJ(i,i,g.b,q.a,q.b)
return}l=$.W
if(l!==n)$.W=n
else l=i
g=b.c
if((g&15)===8)new P.j8(h,u,b,t).$0()
else if(p){if((g&1)!==0)new P.j7(u,b,q).$0()}else if((g&2)!==0)new P.j6(h,u,b).$0()
if(l!=null)$.W=l
g=u.b
if(!!J.Q(g).$icm){if(g.a>=4){k=H.f(o.c,"$ib9")
o.c=null
b=o.ba(k)
o.a=g.a
o.c=g.c
h.a=g
continue}else P.ls(g,o)
return}}j=b.b
k=H.f(j.c,"$ib9")
j.c=null
b=j.ba(k)
g=u.a
p=u.b
if(!g){H.C(p,H.t(j,0))
j.a=4
j.c=p}else{H.f(p,"$ian")
j.a=8
j.c=p}h.a=j
g=j}},
o4:function(a,b){if(H.eW(a,{func:1,args:[P.O,P.aq]}))return H.o(a,{func:1,ret:null,args:[P.O,P.aq]})
if(H.eW(a,{func:1,args:[P.O]}))return H.o(a,{func:1,ret:null,args:[P.O]})
throw H.b(P.k7(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
o3:function(){var u,t
for(;u=$.c3,u!=null;){$.d1=null
t=u.b
$.c3=t
if(t==null)$.d0=null
u.a.$0()}},
o7:function(){$.kz=!0
try{P.o3()}finally{$.d1=null
$.kz=!1
if($.c3!=null)$.kM().$1(P.lK())}},
lF:function(a){var u=new P.e2(a)
if($.c3==null){$.c3=$.d0=u
if(!$.kz)$.kM().$1(P.lK())}else $.d0=$.d0.b=u},
o6:function(a){var u,t,s=$.c3
if(s==null){P.lF(a)
$.d1=$.d0
return}u=new P.e2(a)
t=$.d1
if(t==null){u.b=s
$.c3=$.d1=u}else{u.b=t.b
$.d1=t.b=u
if(u.b==null)$.d0=u}},
oz:function(a){var u=null,t=$.W
if(C.f===t){P.jL(u,u,C.f,a)
return}P.jL(u,u,t,H.o(t.bP(a),{func:1,ret:-1}))},
li:function(a,b){var u=$.W
if(u===C.f)return P.kl(a,H.o(b,{func:1,ret:-1}))
return P.kl(a,H.o(u.bP(b),{func:1,ret:-1}))},
n8:function(a,b){var u=$.W
if(u===C.f)return P.lj(a,H.o(b,{func:1,ret:-1,args:[P.b4]}))
return P.lj(a,H.o(u.d7(b,P.b4),{func:1,ret:-1,args:[P.b4]}))},
jJ:function(a,b,c,d,e){var u={}
u.a=d
P.o6(new P.jK(u,e))},
lB:function(a,b,c,d,e){var u,t=$.W
if(t===c)return d.$0()
$.W=c
u=t
try{t=d.$0()
return t}finally{$.W=u}},
lC:function(a,b,c,d,e,f,g){var u,t=$.W
if(t===c)return d.$1(e)
$.W=c
u=t
try{t=d.$1(e)
return t}finally{$.W=u}},
o5:function(a,b,c,d,e,f,g,h,i){var u,t=$.W
if(t===c)return d.$2(e,f)
$.W=c
u=t
try{t=d.$2(e,f)
return t}finally{$.W=u}},
jL:function(a,b,c,d){var u
H.o(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.bP(d):c.hF(d,-1)
P.lF(d)},
iS:function iS(a){this.a=a},
iR:function iR(a,b,c){this.a=a
this.b=b
this.c=c},
iT:function iT(a){this.a=a},
iU:function iU(a){this.a=a},
eF:function eF(){this.c=0},
jr:function jr(a,b){this.a=a
this.b=b},
jq:function jq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b9:function b9(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aB:function aB(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
j1:function j1(a,b){this.a=a
this.b=b},
j5:function j5(a,b){this.a=a
this.b=b},
j2:function j2(a){this.a=a},
j3:function j3(a){this.a=a},
j4:function j4(a,b,c){this.a=a
this.b=b
this.c=c},
j8:function j8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j9:function j9(a){this.a=a},
j7:function j7(a,b,c){this.a=a
this.b=b
this.c=c},
j6:function j6(a,b,c){this.a=a
this.b=b
this.c=c},
e2:function e2(a){this.a=a
this.b=null},
hV:function hV(){},
hX:function hX(a,b){this.a=a
this.b=b},
hY:function hY(a,b){this.a=a
this.b=b},
cG:function cG(){},
hW:function hW(){},
b4:function b4(){},
an:function an(a,b){this.a=a
this.b=b},
jA:function jA(){},
jK:function jK(a,b){this.a=a
this.b=b},
jf:function jf(){},
jh:function jh(a,b,c){this.a=a
this.b=b
this.c=c},
jg:function jg(a,b){this.a=a
this.b=b},
ji:function ji(a,b,c){this.a=a
this.b=b
this.c=c},
mE:function(a,b){return new H.a_([a,b])},
kX:function(a,b){return new H.a_([a,b])},
mG:function(a){return H.ol(a,new H.a_([null,null]))},
mH:function(a){return new P.jd([a])},
kt:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
np:function(a,b,c){var u=new P.eh(a,b,[c])
u.c=a.e
return u},
mA:function(a,b,c){var u,t
if(P.kA(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.e([],[P.i])
C.a.h($.ar,a)
try{P.nJ(a,u)}finally{if(0>=$.ar.length)return H.d($.ar,-1)
$.ar.pop()}t=P.lg(b,H.lQ(u,"$ih"),", ")+c
return t.charCodeAt(0)==0?t:t},
kd:function(a,b,c){var u,t
if(P.kA(a))return b+"..."+c
u=new P.a4(b)
C.a.h($.ar,a)
try{t=u
t.a=P.lg(t.a,a,", ")}finally{if(0>=$.ar.length)return H.d($.ar,-1)
$.ar.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kA:function(a){var u,t
for(u=$.ar.length,t=0;t<u;++t)if(a===$.ar[t])return!0
return!1},
nJ:function(a,b){var u,t,s,r,q,p,o,n=a.gS(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.v())return
u=H.k(n.gJ(n))
C.a.h(b,u)
m+=u.length+2;++l}if(!n.v()){if(l<=5)return
if(0>=b.length)return H.d(b,-1)
t=b.pop()
if(0>=b.length)return H.d(b,-1)
s=b.pop()}else{r=n.gJ(n);++l
if(!n.v()){if(l<=4){C.a.h(b,H.k(r))
return}t=H.k(r)
if(0>=b.length)return H.d(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gJ(n);++l
for(;n.v();r=q,q=p){p=n.gJ(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.d(b,-1)
m-=b.pop().length+2;--l}C.a.h(b,"...")
return}}s=H.k(r)
t=H.k(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)C.a.h(b,o)
C.a.h(b,s)
C.a.h(b,t)},
mF:function(a,b,c){var u=P.mE(b,c)
a.F(0,new P.fT(u,b,c))
return u},
ki:function(a){var u,t={}
if(P.kA(a))return"{...}"
u=new P.a4("")
try{C.a.h($.ar,a)
u.a+="{"
t.a=!0
J.kN(a,new P.fY(t,u))
u.a+="}"}finally{if(0>=$.ar.length)return H.d($.ar,-1)
$.ar.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jd:function jd(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cQ:function cQ(a){this.a=a
this.c=this.b=null},
eh:function eh(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fT:function fT(a,b,c){this.a=a
this.b=b
this.c=c},
fU:function fU(){},
v:function v(){},
fX:function fX(){},
fY:function fY(a,b){this.a=a
this.b=b},
ah:function ah(){},
js:function js(){},
fZ:function fZ(){},
dX:function dX(a,b){this.a=a
this.$ti=b},
jj:function jj(){},
ei:function ei(){},
eL:function eL(){},
nc:function(a,b,c,d){if(b instanceof Uint8Array)return P.nd(!1,b,c,d)
return},
nd:function(a,b,c,d){var u,t,s=$.mb()
if(s==null)return
u=0===c
if(u&&!0)return P.kp(s,b)
t=b.length
d=P.bC(c,d,t)
if(u&&d===t)return P.kp(s,b)
return P.kp(s,b.subarray(c,d))},
kp:function(a,b){if(P.nf(b))return
return P.ng(a,b)},
ng:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.aD(t)}return},
nf:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
ne:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.aD(t)}return},
lE:function(a,b,c){var u,t,s
for(u=J.d2(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.ad()
if((s&127)!==s)return t-b}return c-b},
kP:function(a,b,c,d,e,f){if(C.d.b4(f,4)!==0)throw H.b(P.a1("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.b(P.a1("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.b(P.a1("Invalid base64 padding, more than two '=' characters",a,b))},
f8:function f8(){},
f9:function f9(){},
bL:function bL(){},
bN:function bN(){},
fx:function fx(){},
iy:function iy(){},
iA:function iA(){},
jz:function jz(a){this.b=0
this.c=a},
iz:function iz(a){this.a=a},
jy:function jy(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
eY:function(a,b,c){var u=H.mX(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.b(P.a1(a,null,null))},
mx:function(a){if(a instanceof H.ch)return a.i(0)
return"Instance of '"+H.k(H.cD(a))+"'"},
mI:function(a,b,c){var u,t=J.mC(a,c)
if(a!==0&&!0)for(u=0;u<t.length;++u)C.a.k(t,u,b)
return H.n(t,"$ic",[c],"$ac")},
kY:function(a,b,c){var u,t=[c],s=H.e([],t)
for(u=J.bH(a);u.v();)C.a.h(s,H.C(u.gJ(u),c))
if(b)return s
return H.n(J.ke(s),"$ic",t,"$ac")},
cH:function(a,b,c){var u
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.n(a,"$iaZ",[P.l],"$aaZ")
u=a.length
c=P.bC(b,c,u)
return H.la(b>0||c<u?C.a.e7(a,b,c):a)}if(!!J.Q(a).$icy)return H.mZ(a,b,P.bC(b,c,a.length))
return P.n6(a,b,c)},
n6:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.b(P.ad(b,0,J.aE(a),q,q))
u=c==null
if(!u&&c<b)throw H.b(P.ad(c,b,J.aE(a),q,q))
t=J.bH(a)
for(s=0;s<b;++s)if(!t.v())throw H.b(P.ad(b,0,s,q,q))
r=[]
if(u)for(;t.v();)r.push(t.gJ(t))
else for(s=b;s<c;++s){if(!t.v())throw H.b(P.ad(c,b,s,q,q))
r.push(t.gJ(t))}return H.la(r)},
n0:function(a){return new H.fM(a,H.mD(a,!1,!0,!1,!1,!1))},
lg:function(a,b,c){var u=J.bH(b)
if(!u.v())return a
if(c.length===0){do a+=H.k(u.gJ(u))
while(u.v())}else{a+=H.k(u.gJ(u))
for(;u.v();)a=a+c+H.k(u.gJ(u))}return a},
ko:function(){var u=H.mP()
if(u!=null)return P.nb(u)
throw H.b(P.E("'Uri.base' is not supported"))},
jx:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.h){u=$.mg().b
if(typeof b!=="string")H.x(H.aT(b))
u=u.test(b)}else u=!1
if(u)return b
H.C(b,H.av(c,"bL",0))
t=c.ghX().bU(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.d(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.dF(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
mv:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
mw:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
df:function(a){if(a>=10)return""+a
return"0"+a},
kT:function(a){return new P.br(1000*a)},
dk:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.as(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mx(a)},
d7:function(a){return new P.aU(!1,null,null,a)},
k7:function(a,b,c){return new P.aU(!0,a,b,c)},
hy:function(a,b){return new P.bT(null,null,!0,a,b,"Value not in range")},
ad:function(a,b,c,d,e){return new P.bT(b,c,!0,a,d,"Invalid value")},
bC:function(a,b,c){if(0>a||a>c)throw H.b(P.ad(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.b(P.ad(b,a,c,"end",null))
return b}return c},
lb:function(a,b){if(typeof a!=="number")return a.M()
if(a<0)throw H.b(P.ad(a,0,null,b,null))},
U:function(a,b,c,d,e){var u=H.a9(e==null?J.aE(b):e)
return new P.fK(u,!0,a,c,"Index out of range")},
E:function(a){return new P.ir(a)},
ip:function(a){return new P.io(a)},
bM:function(a){return new P.fh(a)},
B:function(a){return new P.ea(a)},
a1:function(a,b,c){return new P.fH(a,b,c)},
mJ:function(a,b,c){var u,t=H.e([],[c])
C.a.sl(t,a)
for(u=0;u<a;++u)C.a.k(t,u,b.$1(u))
return t},
kK:function(a){H.ox(a)},
nb:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.D(a,4)^58)*3|C.b.D(a,0)^100|C.b.D(a,1)^97|C.b.D(a,2)^116|C.b.D(a,3)^97)>>>0
if(u===0)return P.ll(e<e?C.b.p(a,0,e):a,5,f).ge0()
else if(u===32)return P.ll(C.b.p(a,5,e),0,f).ge0()}t=new Array(8)
t.fixed$length=Array
s=H.e(t,[P.l])
C.a.k(s,0,0)
C.a.k(s,1,-1)
C.a.k(s,2,-1)
C.a.k(s,7,-1)
C.a.k(s,3,0)
C.a.k(s,4,0)
C.a.k(s,5,e)
C.a.k(s,6,e)
if(P.lD(a,0,e,0,s)>=14)C.a.k(s,7,e)
r=s[1]
if(typeof r!=="number")return r.iM()
if(r>=0)if(P.lD(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.u()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.M()
if(typeof n!=="number")return H.q(n)
if(m<n)n=m
if(typeof o!=="number")return o.M()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.M()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.M()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.b.a0(a,"..",o)))j=n>o+2&&C.b.a0(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.b.a0(a,"file",0)){if(q<=0){if(!C.b.a0(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.b.p(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.b.aR(a,o,n,"/");++e
n=h}k="file"}else if(C.b.a0(a,"http",0)){if(t&&p+3===o&&C.b.a0(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.aR(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.a0(a,"https",0)){if(t&&p+4===o&&C.b.a0(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.b.aR(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.b.p(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.jk(a,r,q,p,o,n,m,k)}return P.ns(a,0,e,r,q,p,o,n,m,k)},
ln:function(a){var u=P.i
return C.a.i_(H.e(a.split("&"),[u]),P.kX(u,u),new P.iw(C.h),[P.y,P.i,P.i])},
na:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.it(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.P(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.eY(C.b.p(a,s,t),n,n)
if(typeof p!=="number")return p.V()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.d(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.eY(C.b.p(a,s,c),n,n)
if(typeof p!=="number")return p.V()
if(p>255)k.$2(l,s)
if(r>=u)return H.d(j,r)
j[r]=p
return j},
lm:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.iu(a),d=new P.iv(e,a)
if(a.length<2)e.$1("address is too short")
u=H.e([],[P.l])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.b.P(a,t)
if(p===58){if(t===b){++t
if(C.b.P(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
C.a.h(u,-1)
r=!0}else C.a.h(u,d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.a.gay(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)C.a.h(u,d.$2(s,c))
else{m=P.na(a,s,c)
C.a.h(u,(m[0]<<8|m[1])>>>0)
C.a.h(u,(m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.d(l,i)
l[i]=0
f=i+1
if(f>=k)return H.d(l,f)
l[f]=0
i+=2}else{f=C.d.aK(h,8)
if(i<0||i>=k)return H.d(l,i)
l[i]=f
f=i+1
if(f>=k)return H.d(l,f)
l[f]=h&255
i+=2}}return l},
ns:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.nA(a,b,d)
else{if(d===b)P.c1(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.nB(a,u,e-1):""
s=P.nx(a,e,f,!1)
if(typeof f!=="number")return f.u()
r=f+1
if(typeof g!=="number")return H.q(g)
q=r<g?P.nz(P.eY(C.b.p(a,r,g),new P.jt(a,f),n),j):n}else{q=n
s=q
t=""}p=P.ny(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.M()
o=h<i?P.kv(a,h+1,i,n):n
return new P.c0(j,t,s,q,p,o,i<c?P.nw(a,i+1,c):n)},
lu:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
c1:function(a,b,c){throw H.b(P.a1(c,a,b))},
nz:function(a,b){if(a!=null&&a===P.lu(b))return
return a},
nx:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.b.P(a,b)===91){if(typeof c!=="number")return c.A()
u=c-1
if(C.b.P(a,u)!==93)P.c1(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.nu(a,t,u)
if(typeof s!=="number")return s.M()
if(s<u){r=s+1
q=P.lz(a,C.b.a0(a,"25",r)?s+3:r,u,"%25")}else q=""
P.lm(a,t,s)
return C.b.p(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.q(c)
p=b
for(;p<c;++p)if(C.b.P(a,p)===58){s=C.b.be(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.lz(a,C.b.a0(a,"25",r)?s+3:r,c,"%25")}else q=""
P.lm(a,b,s)
return"["+C.b.p(a,b,s)+q+"]"}return P.nD(a,b,c)},
nu:function(a,b,c){var u,t=C.b.be(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.q(c)
u=t<c}else u=!1
return u?t:c},
lz:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.a4(d):null
if(typeof c!=="number")return H.q(c)
u=b
t=u
s=!0
for(;u<c;){r=C.b.P(a,u)
if(r===37){q=P.kw(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.a4("")
o=l.a+=C.b.p(a,t,u)
if(p)q=C.b.p(a,u,u+3)
else if(q==="%")P.c1(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.d(C.i,p)
p=(C.i[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.a4("")
if(t<u){l.a+=C.b.p(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.b.P(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.a4("")
l.a+=C.b.p(a,t,u)
l.a+=P.ku(r)
u+=m
t=u}}}if(l==null)return C.b.p(a,b,c)
if(t<c)l.a+=C.b.p(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
nD:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.q(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.P(a,u)
if(q===37){p=P.kw(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.a4("")
n=C.b.p(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.b.p(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.d(C.u,o)
o=(C.u[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.a4("")
if(t<u){s.a+=C.b.p(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.d(C.k,o)
o=(C.k[o]&1<<(q&15))!==0}else o=!1
if(o)P.c1(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.P(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.a4("")
n=C.b.p(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.ku(q)
u+=l
t=u}}}}if(s==null)return C.b.p(a,b,c)
if(t<c){n=C.b.p(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
nA:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.lw(C.b.D(a,b)))P.c1(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.D(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.d(C.m,r)
r=(C.m[r]&1<<(s&15))!==0}else r=!1
if(!r)P.c1(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.p(a,b,c)
return P.nt(t?a.toLowerCase():a)},
nt:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
nB:function(a,b,c){return P.cZ(a,b,c,C.N,!1)},
ny:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.cZ(a,b,c,C.v,!0):C.o.j_(d,new P.ju(),P.i).q(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.a4(u,"/"))u="/"+u
return P.nC(u,e,f)},
nC:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.a4(a,"/"))return P.nE(a,!u||c)
return P.nF(a)},
kv:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.b(P.d7("Both query and queryParameters specified"))
return P.cZ(a,b,c,C.l,!0)}if(d==null)return
u=new P.a4("")
t.a=""
d.F(0,new P.jv(new P.jw(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
nw:function(a,b,c){return P.cZ(a,b,c,C.l,!0)},
kw:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.P(a,b+1)
t=C.b.P(a,p)
s=H.jS(u)
r=H.jS(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.d.aK(q,4)
if(p>=8)return H.d(C.i,p)
p=(C.i[p]&1<<(q&15))!==0}else p=!1
if(p)return H.dF(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.p(a,b,b+3).toUpperCase()
return},
ku:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.e(u,[P.l])
C.a.k(t,0,37)
C.a.k(t,1,C.b.D(o,a>>>4))
C.a.k(t,2,C.b.D(o,a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.e(u,[P.l])
for(q=0;--r,r>=0;s=128){p=C.d.hh(a,6*r)&63|s
C.a.k(t,q,37)
C.a.k(t,q+1,C.b.D(o,p>>>4))
C.a.k(t,q+2,C.b.D(o,p&15))
q+=3}}return P.cH(t,0,null)},
cZ:function(a,b,c,d,e){var u=P.ly(a,b,c,d,e)
return u==null?C.b.p(a,b,c):u},
ly:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.M()
if(typeof c!=="number")return H.q(c)
if(!(o<c))break
c$0:{u=C.b.P(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.d(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.kw(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.d(C.k,t)
t=(C.k[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.c1(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.b.P(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.ku(u)}}if(m==null)m=new P.a4("")
m.a+=C.b.p(a,n,o)
m.a+=H.k(s)
if(typeof r!=="number")return H.q(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.M()
if(n<c)m.a+=C.b.p(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
lx:function(a){if(C.b.a4(a,"."))return!0
return C.b.dB(a,"/.")!==-1},
nF:function(a){var u,t,s,r,q,p,o
if(!P.lx(a))return a
u=H.e([],[P.i])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.T(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.d(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.q(u,"/")},
nE:function(a,b){var u,t,s,r,q,p
if(!P.lx(a))return!b?P.lv(a):a
u=H.e([],[P.i])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gay(u)!==".."){if(0>=u.length)return H.d(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.d(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gay(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.d(u,0)
C.a.k(u,0,P.lv(u[0]))}return C.a.q(u,"/")},
lv:function(a){var u,t,s,r=a.length
if(r>=2&&P.lw(J.mi(a,0)))for(u=1;u<r;++u){t=C.b.D(a,u)
if(t===58)return C.b.p(a,0,u)+"%3A"+C.b.a5(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.d(C.m,s)
s=(C.m[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
nv:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.D(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.b(P.d7("Invalid URL encoding"))}}return u},
kx:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.b.D(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.h!==d)s=!1
else s=!0
if(s)return C.b.p(a,b,c)
else r=new H.a3(C.b.p(a,b,c))}else{r=H.e([],[P.l])
for(s=a.length,q=b;q<c;++q){t=C.b.D(a,q)
if(t>127)throw H.b(P.d7("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.b(P.d7("Truncated URI"))
C.a.h(r,P.nv(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.n(r,"$ic",[P.l],"$ac")
return new P.iz(!1).bU(r)},
lw:function(a){var u=a|32
return 97<=u&&u<=122},
ll:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.e([b-1],[P.l])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.D(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.b(P.a1(m,a,t))}}if(s<0&&t>b)throw H.b(P.a1(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.D(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gay(l)
if(r!==44||t!==p+7||!C.b.a0(a,"base64",p+1))throw H.b(P.a1("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.z.ib(0,a,o,u)
else{n=P.ly(a,o,u,C.l,!0)
if(n!=null)a=C.b.aR(a,o,u,n)}return new P.is(a,l,c)},
nH:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.mJ(22,new P.jE(),P.N),n=new P.jD(o),m=new P.jF(),l=new P.jG(),k=H.f(n.$2(0,225),"$iN")
m.$3(k,u,1)
m.$3(k,t,14)
m.$3(k,s,34)
m.$3(k,r,3)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(14,225),"$iN")
m.$3(k,u,1)
m.$3(k,t,15)
m.$3(k,s,34)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(15,225),"$iN")
m.$3(k,u,1)
m.$3(k,"%",225)
m.$3(k,s,34)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(1,225),"$iN")
m.$3(k,u,1)
m.$3(k,s,34)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(2,235),"$iN")
m.$3(k,u,139)
m.$3(k,r,131)
m.$3(k,t,146)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(3,235),"$iN")
m.$3(k,u,11)
m.$3(k,r,68)
m.$3(k,t,18)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(4,229),"$iN")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,"[",232)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(5,229),"$iN")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(6,231),"$iN")
l.$3(k,"19",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(7,231),"$iN")
l.$3(k,"09",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
m.$3(H.f(n.$2(8,8),"$iN"),"]",5)
k=H.f(n.$2(9,235),"$iN")
m.$3(k,u,11)
m.$3(k,t,16)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(16,235),"$iN")
m.$3(k,u,11)
m.$3(k,t,17)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(17,235),"$iN")
m.$3(k,u,11)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(10,235),"$iN")
m.$3(k,u,11)
m.$3(k,t,18)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(18,235),"$iN")
m.$3(k,u,11)
m.$3(k,t,19)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(19,235),"$iN")
m.$3(k,u,11)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(11,235),"$iN")
m.$3(k,u,11)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(12,236),"$iN")
m.$3(k,u,12)
m.$3(k,q,12)
m.$3(k,p,205)
k=H.f(n.$2(13,237),"$iN")
m.$3(k,u,13)
m.$3(k,q,13)
l.$3(H.f(n.$2(20,245),"$iN"),"az",21)
k=H.f(n.$2(21,245),"$iN")
l.$3(k,"az",21)
l.$3(k,"09",21)
m.$3(k,"+-.",21)
return o},
lD:function(a,b,c,d,e){var u,t,s,r,q=$.mh()
for(u=b;u<c;++u){if(d<0||d>=q.length)return H.d(q,d)
t=q[d]
s=C.b.D(a,u)^96
if(s>95)s=31
if(s>=t.length)return H.d(t,s)
r=t[s]
d=r&31
C.a.k(e,r>>>5,u)}return d},
X:function X(){},
at:function at(a,b){this.a=a
this.b=b},
z:function z(){},
br:function br(a){this.a=a},
fu:function fu(){},
fv:function fv(){},
bs:function bs(){},
f2:function f2(){},
dC:function dC(){},
aU:function aU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bT:function bT(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fK:function fK(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
ir:function ir(a){this.a=a},
io:function io(a){this.a=a},
hR:function hR(a){this.a=a},
fh:function fh(a){this.a=a},
ht:function ht(){},
dN:function dN(){},
fp:function fp(a){this.a=a},
ea:function ea(a){this.a=a},
fH:function fH(a,b,c){this.a=a
this.b=b
this.c=c},
l:function l(){},
h:function h(){},
aY:function aY(){},
c:function c(){},
y:function y(){},
J:function J(){},
a7:function a7(){},
O:function O(){},
aq:function aq(){},
i:function i(){},
a4:function a4(a){this.a=a},
iw:function iw(a){this.a=a},
it:function it(a){this.a=a},
iu:function iu(a){this.a=a},
iv:function iv(a,b){this.a=a
this.b=b},
c0:function c0(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
jt:function jt(a,b){this.a=a
this.b=b},
ju:function ju(){},
jw:function jw(a,b){this.a=a
this.b=b},
jv:function jv(a){this.a=a},
is:function is(a,b,c){this.a=a
this.b=b
this.c=c},
jE:function jE(){},
jD:function jD(a){this.a=a},
jF:function jF(){},
jG:function jG(){},
jk:function jk(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
iY:function iY(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
of:function(a){var u,t=J.Q(a)
if(!!t.$ibb){u=t.gda(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.eK(a.data,a.height,a.width)},
oe:function(a){if(a instanceof P.eK)return{data:a.a,height:a.b,width:a.c}
return a},
bi:function(a){var u,t,s,r,q
if(a==null)return
u=P.kX(P.i,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.w)(t),++r){q=H.S(t[r])
u.k(0,q,a[q])}return u},
od:function(a){var u={}
a.F(0,new P.jM(u))
return u},
jm:function jm(){},
jo:function jo(a,b){this.a=a
this.b=b},
eK:function eK(a,b,c){this.a=a
this.b=b
this.c=c},
jM:function jM(a){this.a=a},
jn:function jn(a,b){this.a=a
this.b=b},
fD:function fD(a,b){this.a=a
this.b=b},
fE:function fE(){},
fF:function fF(){},
jc:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
no:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
je:function je(){},
ak:function ak(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b0:function b0(){},
fP:function fP(){},
b3:function b3(){},
hr:function hr(){},
hx:function hx(){},
hZ:function hZ(){},
p:function p(){},
b5:function b5(){},
ib:function ib(){},
ef:function ef(){},
eg:function eg(){},
eq:function eq(){},
er:function er(){},
eB:function eB(){},
eC:function eC(){},
eI:function eI(){},
eJ:function eJ(){},
N:function N(){},
f4:function f4(){},
f5:function f5(){},
f6:function f6(a){this.a=a},
f7:function f7(){},
bI:function bI(){},
hs:function hs(){},
e3:function e3(){},
d9:function d9(){},
dG:function dG(){},
bU:function bU(){},
dJ:function dJ(){},
dP:function dP(){},
dV:function dV(){},
hQ:function hQ(){},
ex:function ex(){},
ey:function ey(){}},W={
k9:function(){var u=document.createElement("canvas")
return u},
kU:function(a){H.f(a,"$ij")
return"wheel"},
mz:function(a){var u,t=document.createElement("input"),s=H.f(t,"$icp")
try{s.type=a}catch(u){H.aD(u)}return s},
jb:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lt:function(a,b,c,d){var u=W.jb(W.jb(W.jb(W.jb(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a6:function(a,b,c,d,e){var u=W.lH(new W.j0(c),W.m)
if(u!=null&&!0)J.mk(a,b,u,!1)
return new W.j_(a,b,u,!1,[e])},
lH:function(a,b){var u=$.W
if(u===C.f)return a
return u.d7(a,b)},
r:function r(){},
eZ:function eZ(){},
f0:function f0(){},
f1:function f1(){},
bJ:function bJ(){},
bK:function bK(){},
cf:function cf(){},
bo:function bo(){},
cj:function cj(){},
fl:function fl(){},
P:function P(){},
ck:function ck(){},
fm:function fm(){},
aW:function aW(){},
aX:function aX(){},
fn:function fn(){},
fo:function fo(){},
fq:function fq(){},
dg:function dg(){},
fr:function fr(){},
dh:function dh(){},
di:function di(){},
fs:function fs(){},
ft:function ft(){},
iW:function iW(a,b){this.a=a
this.b=b},
a0:function a0(){},
m:function m(){},
j:function j(){},
aw:function aw(){},
cl:function cl(){},
fC:function fC(){},
fG:function fG(){},
aG:function aG(){},
fJ:function fJ(){},
bQ:function bQ(){},
bb:function bb(){},
co:function co(){},
cp:function cp(){},
cg:function cg(){},
b_:function b_(){},
fV:function fV(){},
he:function he(){},
cu:function cu(){},
hf:function hf(){},
hg:function hg(a){this.a=a},
hh:function hh(){},
hi:function hi(a){this.a=a},
aI:function aI(){},
hj:function hj(){},
ac:function ac(){},
iV:function iV(a){this.a=a},
G:function G(){},
cz:function cz(){},
aJ:function aJ(){},
hv:function hv(){},
hD:function hD(){},
hE:function hE(a){this.a=a},
hG:function hG(){},
aL:function aL(){},
hO:function hO(){},
aM:function aM(){},
hP:function hP(){},
aN:function aN(){},
hT:function hT(){},
hU:function hU(a){this.a=a},
ax:function ax(){},
bg:function bg(){},
aP:function aP(){},
ay:function ay(){},
i0:function i0(){},
i1:function i1(){},
i6:function i6(){},
aQ:function aQ(){},
aR:function aR(){},
i9:function i9(){},
ia:function ia(){},
bD:function bD(){},
ix:function ix(){},
iM:function iM(){},
b8:function b8(){},
cO:function cO(){},
iX:function iX(){},
e5:function e5(){},
ja:function ja(){},
en:function en(){},
jl:function jl(){},
jp:function jp(){},
iZ:function iZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ks:function ks(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
j_:function j_(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
j0:function j0(a){this.a=a},
D:function D(){},
dm:function dm(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
e4:function e4(){},
e6:function e6(){},
e7:function e7(){},
e8:function e8(){},
e9:function e9(){},
eb:function eb(){},
ec:function ec(){},
ed:function ed(){},
ee:function ee(){},
ej:function ej(){},
ek:function ek(){},
el:function el(){},
em:function em(){},
eo:function eo(){},
ep:function ep(){},
es:function es(){},
et:function et(){},
eu:function eu(){},
cV:function cV(){},
cW:function cW(){},
ev:function ev(){},
ew:function ew(){},
eA:function eA(){},
eD:function eD(){},
eE:function eE(){},
cX:function cX(){},
cY:function cY(){},
eG:function eG(){},
eH:function eH(){},
eM:function eM(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(){},
eR:function eR(){},
eS:function eS(){},
eT:function eT(){},
eU:function eU(){},
eV:function eV(){}},O={
ka:function(a){var u=new O.Y([a])
u.b6(a)
return u},
Y:function Y(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
ct:function ct(){this.b=this.a=null},
kZ:function(){var u,t,s=new O.dx()
s.seC(O.ka(V.ab))
s.e.b5(s.gfe(),s.gfg())
u=new O.b1(s,"emission")
u.c=new A.af(!1,!1,!1)
u.f=new V.Z(0,0,0)
s.f=u
u=new O.b1(s,"ambient")
u.c=new A.af(!1,!1,!1)
u.f=new V.Z(0,0,0)
s.r=u
u=new O.b1(s,"diffuse")
u.c=new A.af(!1,!1,!1)
u.f=new V.Z(0,0,0)
s.x=u
u=new O.b1(s,"invDiffuse")
u.c=new A.af(!1,!1,!1)
u.f=new V.Z(0,0,0)
s.y=u
u=new O.h7(s,"specular")
u.c=new A.af(!1,!1,!1)
u.f=new V.Z(0,0,0)
u.ch=100
s.z=u
u=new O.h3(s,"bump")
u.c=new A.af(!1,!1,!1)
s.Q=u
s.ch=null
u=new O.b1(s,"reflect")
u.c=new A.af(!1,!1,!1)
u.f=new V.Z(0,0,0)
s.cx=u
u=new O.h6(s,"refract")
u.c=new A.af(!1,!1,!1)
u.f=new V.Z(0,0,0)
u.ch=1
s.cy=u
u=new O.h2(s,"alpha")
u.c=new A.af(!1,!1,!1)
u.f=1
s.db=u
u=new D.dt()
u.b6(D.aa)
u.seo(H.e([],[D.bq]))
u.sfZ(H.e([],[D.dE]))
u.ser(H.e([],[D.dM]))
u.y=u.x=null
u.bn(u.gfc(),u.gfN(),u.gfR())
s.dx=u
t=new O.h5()
t.b=new V.bp(0,0,0,0)
t.c=1
t.d=10
t.e=!1
s.dy=t
t=u.x
u=t==null?u.x=D.R():t
u.h(0,s.gh8())
u=s.dx
t=u.y
u=t==null?u.y=D.R():t
u.h(0,s.gb9())
s.fr=null
return s},
dx:function dx(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h8:function h8(a,b){this.a=a
this.b=b},
h9:function h9(){},
ha:function ha(a,b){this.a=a
this.b=b},
hb:function hb(){},
hc:function hc(a,b){this.a=a
this.b=b},
hd:function hd(){},
h2:function h2(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cs:function cs(){},
h3:function h3(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
b1:function b1(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h5:function h5(){var _=this
_.e=_.d=_.c=_.b=null},
h6:function h6(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h7:function h7(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bV:function bV(){}},E={
fy:function(){var u=new E.ao()
u.a=""
u.b=!0
u.seh(0,O.ka(E.ao))
u.y.b5(u.gic(),u.gih())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sbo(0,null)
u.sce(null)
u.saP(null)
return u},
n1:function(a,b){var u=new E.hz(a)
u.ed(a,b)
return u},
n7:function(a,b,c,d,e){var u,t,s=J.Q(a)
if(!!s.$ibK)return E.lh(a,!0,!0,!0,!1)
u=W.k9()
t=u.style
t.width="100%"
t.height="100%"
s.gbT(a).h(0,u)
return E.lh(u,!0,!0,!0,!1)},
lh:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.dR(),j=H.f(C.j.cj(a,"webgl2",P.mG(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibU")
if(j==null)H.x(P.B("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.n1(j,a)
u=new T.i3(j)
u.b=H.a9(j.getParameter(3379))
H.a9(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.dY(a)
t=new X.fO()
t.sh1(P.mH(P.l))
u.b=t
t=new X.hk(u)
t.f=0
t.r=V.bB()
t.x=V.bB()
t.ch=t.Q=1
u.c=t
t=new X.fW(u)
t.r=0
t.x=V.bB()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.i8(u)
t.f=V.bB()
t.r=V.bB()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.seP(H.e([],[[P.cG,P.O]]))
t=u.z
s=document
r=W.ac
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.a6(s,"contextmenu",H.o(u.gfo(),q),!1,r))
t=u.z
p=W.m
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.a6(a,"focus",H.o(u.gfv(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.a6(a,"blur",H.o(u.gfi(),o),!1,p))
t=u.z
n=W.b_
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.a6(s,"keyup",H.o(u.gbD(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.a6(s,"keydown",H.o(u.gbq(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.a6(a,"mousedown",H.o(u.gfD(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a6(a,"mouseup",H.o(u.gfH(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a6(a,l,H.o(u.gfF(),q),!1,r))
n=u.z
W.kU(a)
m=W.b8;(n&&C.a).h(n,W.a6(a,H.S(W.kU(a)),H.o(u.gfJ(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.a6(s,l,H.o(u.gfq(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.a6(s,"mouseup",H.o(u.gft(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.a6(s,"pointerlockchange",H.o(u.gfL(),o),!1,p))
p=u.z
o=W.aR
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.a6(a,"touchstart",H.o(u.gfX(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a6(a,"touchend",H.o(u.gfT(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a6(a,"touchmove",H.o(u.gfV(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.at(Date.now(),!1)
k.cy=0
k.cX()
return k},
fa:function fa(){},
ao:function ao(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hz:function hz(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hA:function hA(a){this.a=a},
hB:function hB(a){this.a=a},
hC:function hC(a){this.a=a},
dR:function dR(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
i5:function i5(a){this.a=a}},Z={
kr:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.c2(c)),35044)
a.bindBuffer(b,null)
return new Z.e1(b,u)},
aA:function(a){return new Z.bh(a)},
e1:function e1(a,b){this.a=a
this.b=b},
da:function da(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
iN:function iN(a){this.a=a},
db:function db(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bt:function bt(a,b,c){this.a=a
this.b=b
this.c=c},
bh:function bh(a){this.a=a}},D={
R:function(){var u=new D.bO()
u.sae(null)
u.saV(null)
u.c=null
u.d=0
return u},
fd:function fd(){},
bO:function bO(){var _=this
_.d=_.c=_.b=_.a=null},
fA:function fA(a){this.a=a},
fB:function fB(a){this.a=a},
A:function A(){this.b=null},
bu:function bu(a){this.b=null
this.$ti=a},
bv:function bv(a){this.b=null
this.$ti=a},
H:function H(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
kb:function(a,b){var u,t,s=new D.bq()
s.c=new V.Z(1,1,1)
s.a=V.ni()
s.d=V.kq()
s.e=V.nh()
u=s.b
s.b=b
b.gt().h(0,s.gep())
t=new D.H("mover",u,s.b,[U.a5])
t.b=!0
s.ap(t)
if(!s.c.n(0,a)){u=s.c
s.c=a
t=new D.H("color",u,a,[V.Z])
t.b=!0
s.ap(t)}return s},
bq:function bq(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
aa:function aa(){},
dt:function dt(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
dE:function dE(){},
dM:function dM(){}},X={
cr:function(){var u=new X.ds()
u.b6(X.ag)
u.f=u.e=null
u.r=!1
u.y=u.x=null
u.bn(u.gei(),u.gek(),u.gem())
return u},
dc:function dc(a,b){this.a=a
this.b=b},
ag:function ag(a,b){this.a=a
this.b=b},
bR:function bR(a){this.c=a
this.b=null},
ds:function ds(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
fO:function fO(){this.d=this.b=this.a=null},
dv:function dv(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},
fW:function fW(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
be:function be(a,b,c){this.a=a
this.b=b
this.c=c},
by:function by(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},
hk:function hk(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
hw:function hw(){},
dT:function dT(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},
i8:function i8(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},
dY:function dY(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
my:function(a){var u=new X.fI(),t=new V.bp(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.ld
if(t==null){t=V.lc(0,0,1,1)
$.ld=t}u.r=t
return u},
dd:function dd(){},
fI:function fI(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dD:function dD(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dO:function dO(){},
og:function(a){var u,t,s,r,q,p,o,n,m,l,k,j=null,i=O.kZ(),h=i.dx,g=U.fi(V.kk(1,-3,-1,j))
h.h(0,D.kb(new V.Z(0.4,0.4,1),g))
h=i.dx
g=U.fi(V.kk(0,1,0,j))
h.h(0,D.kb(new V.Z(0,0.2,0.1),g))
h=i.r
h.sau(0,new V.Z(0.2,0.2,0.2))
h=i.x
h.sau(0,new V.Z(0.7,0.7,0.7))
i.z.sau(0,new V.Z(1,1,1))
h=i.z
h.bJ(new A.af(!0,h.c.b,!1))
h.cZ(10)
u=E.fy()
u.sce(i)
t=F.lf()
F.d_(t,j,j,1,1,1,0,0,1)
F.d_(t,j,j,1,1,0,1,0,3)
F.d_(t,j,j,1,1,0,0,1,2)
F.d_(t,j,j,1,1,-1,0,0,0)
F.d_(t,j,j,1,1,0,-1,0,0)
F.d_(t,j,j,1,1,0,0,-1,3)
t.aL()
for(h=[U.a5],g=[P.z],s=-60;s<=60;s+=12)for(r=s/10,q=-60;q<=60;q+=12){p=E.fy()
p.sbo(0,t)
o=q/10
n=new U.dI()
n.r=n.f=n.e=n.d=n.c=n.b=n.a=0
n.se2(r)
n.sdM(0,o)
n.sdS(0)
m=n.d
if(!(Math.abs(m-r)<$.I().a)){n.d=r
m=new D.H("deltaYaw",m,r,g)
m.b=!0
l=n.y
if(l!=null)l.B(m)}m=n.e
if(!(Math.abs(m-o)<$.I().a)){n.e=o
o=new D.H("deltaPitch",m,o,g)
o.b=!0
m=n.y
if(m!=null)m.B(o)}o=n.f
if(!(Math.abs(o-0.32)<$.I().a)){n.f=0.32
o=new D.H("deltaRoll",o,0.32,g)
o.b=!0
m=n.y
if(m!=null)m.B(o)}o=new U.ci()
o.sX(0,new V.ab(1,0,0,s,0,1,0,0,0,0,1,q,0,0,0,1))
p.saP(U.kV(H.e([n,o],h)))
o=u.y
n=H.t(o,0)
H.C(p,n)
m=[n]
if(H.F(o.bF(H.e([p],m)))){l=o.a
k=l.length
C.a.h(l,p)
n=H.n(H.e([p],m),"$ih",[n],"$ah")
o=o.c
if(o!=null)o.$2(k,n)}}return u},
lR:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="testCanvas",c=null,b=1000,a=V.n3("Test 038"),a0=W.k9()
a0.className="pageLargeCanvas"
a0.id=d
a.a.appendChild(a0)
u=[P.i]
a.d5(H.e(["A test of basic 3D movement around a room similar to a first person view. ","A and D (left and right arrow keys) strifes left and right. ","W and S (up and down arrow keys) moves forward and backward. ","Q and E moves up and down. Mouse looks around with left mouse button pressed."],u))
a.hy(H.e(["options"],u))
a.d5(H.e(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(d)
if(t==null)H.x(P.B("Failed to find an element with the identifier, testCanvas."))
s=E.n7(t,!0,!0,!0,!1)
r=E.fy()
a=r.y
q=s.f.i8("../resources/Grass.png",!0,!0)
p=U.fi(V.l2(0,-3,0).m(0,V.b2(b,0,0,0,0,1,0,0,0,0,b,0,0,0,0,1)).m(0,V.kj(-1.5707963267948966)))
o=O.kZ()
n=new V.aH(b,0,0,0,b,0,0,0,1)
if(!J.T(o.b,n)){m=o.b
l=m==null&&!0
if(l)o.a=null
o.b=n
m=new D.H("texture2DMatrix",m,n,[V.aH])
m.b=!0
o.W(m)}o.dx.h(0,D.kb(new V.Z(1,1,1),U.fi(V.kk(1,-3,-1,c))))
m=o.r
m.sau(0,new V.Z(0.5,0.5,0.5))
m=o.x
m.sau(0,new V.Z(0.5,0.5,0.5))
o.r.sdU(q)
o.x.sdU(q)
m=E.fy()
m.sbo(0,F.oo(20,20))
m.saP(p)
m.sce(o)
a.h(0,m)
r.y.h(0,X.og(s))
m=s.r
k=new U.e_()
a=X.cr()
a.a8(39)
a.a8(68)
l=k.gfz()
a.gaN().h(0,l)
k.a=a
a=X.cr()
a.a8(37)
a.a8(65)
a.gaN().h(0,l)
k.b=a
a=X.cr()
a.a8(81)
a.gaN().h(0,l)
k.c=a
a=X.cr()
a.a8(69)
a.gaN().h(0,l)
k.d=a
a=X.cr()
a.a8(40)
a.a8(83)
a.gaN().h(0,l)
k.e=a
a=X.cr()
a.a8(38)
a.a8(87)
a.gaN().h(0,l)
k.f=a
a=U.de()
a.sb_(30)
a.sav(0)
l=k.gaE()
a.gt().h(0,l)
k.r=a
a=U.de()
a.sb_(30)
a.sav(0)
a.gt().h(0,l)
k.x=a
a=U.de()
a.sb_(30)
a.sav(0)
a.gt().h(0,l)
k.y=a
k.Q=k.z=null
k.ch=60
k.cx=15
k.cy=0
k.dx=k.db=null
k.seH(c)
k.a.al(m)
k.b.al(m)
k.c.al(m)
k.d.al(m)
k.e.al(m)
k.f.al(m)
a=s.r
j=new U.dZ()
m=U.de()
m.sci(0,!0)
m.sc7(6.283185307179586)
m.sc8(0)
m.sZ(0,0)
m.sb_(100)
m.sR(0)
m.sav(0.5)
j.b=m
l=j.gaE()
m.gt().h(0,l)
m=U.de()
m.sci(0,!0)
m.sc7(6.283185307179586)
m.sc8(0)
m.sZ(0,0)
m.sb_(100)
m.sR(0)
m.sav(0.5)
j.c=m
m.gt().h(0,l)
j.d=null
j.r=j.f=j.e=!1
j.y=j.x=2.5
j.Q=4
j.ch=j.cx=!1
j.db=j.cy=0
j.dx=null
j.dy=0
j.fx=j.fr=null
i=new X.be(!1,!1,!1)
h=j.d
j.d=i
m=new D.H("modifiers",h,i,[X.be])
m.b=!0
j.I(m)
m=j.f
if(m!==!1){j.f=!1
m=new D.H("invertX",m,!1,[P.X])
m.b=!0
j.I(m)}m=j.r
if(m!==!1){j.r=!1
m=new D.H("invertY",m,!1,[P.X])
m.b=!0
j.I(m)}j.al(a)
j.b.sc7(1.5707963267948966)
j.b.sc8(-1.5707963267948966)
j.b.sav(1)
j.c.sav(1)
j.b.sci(0,!1)
j.gt().h(0,new X.jX(k,j))
g=U.kV(H.e([k,j],[U.a5]))
a=new M.dj()
a.a=!0
a.seG(0,O.ka(E.ao))
a.e.b5(a.gfk(),a.gfm())
a.y=a.x=a.r=a.f=null
f=X.my(c)
e=new X.dD()
e.c=1.0471975511965976
e.d=0.1
e.e=2000
e.saP(c)
m=e.c
if(!(Math.abs(m-1.0471975511965976)<$.I().a)){e.c=1.0471975511965976
m=new D.H("fov",m,1.0471975511965976,[P.z])
m.b=!0
e.aH(m)}m=e.d
if(!(Math.abs(m-0.1)<$.I().a)){e.d=0.1
m=new D.H("near",m,0.1,[P.z])
m.b=!0
e.aH(m)}m=e.e
if(!(Math.abs(m-2000)<$.I().a)){e.e=2000
m=new D.H("far",m,2000,[P.z])
m.b=!0
e.aH(m)}m=a.b
if(m!==e){if(m!=null)m.gt().T(0,a.gaF())
h=a.b
a.b=e
e.gt().h(0,a.gaF())
m=new D.H("camera",h,a.b,[X.dd])
m.b=!0
a.aG(m)}m=a.c
if(m!==f){if(m!=null)m.gt().T(0,a.gaF())
h=a.c
a.c=f
f.gt().h(0,a.gaF())
m=new D.H("target",h,a.c,[X.dO])
m.b=!0
a.aG(m)}a.e.h(0,r)
a.b.saP(g)
m=s.d
if(m!==a){if(m!=null)m.gt().T(0,s.gcp())
s.d=a
a.gt().h(0,s.gcp())
s.cq()}a=new V.fe("options")
u=u.getElementById("options")
a.c=u
if(u==null)H.x("Failed to find options for CheckGroup")
a.seF(H.e([],[W.cg]))
a.hx(0,"Mouse Locking",new X.jY(s),!1)
V.oA(s)},
jX:function jX(a,b){this.a=a
this.b=b},
jY:function jY(a){this.a=a}},V={
k3:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.b4(a-b,u)
return(a<0?a+u:a)+b},
M:function(a,b,c){if(a==null)return C.b.aa("null",c)
return C.b.aa(C.e.dX(Math.abs(a-0)<$.I().a?0:a,b),c+b+1)},
c7:function(a,b,c){var u,t,s,r,q,p=H.e([],[P.i])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.w)(a),++s){r=V.M(a[s],b,c)
t=Math.max(t,r.length)
C.a.h(p,r)}for(q=p.length-1;q>=0;--q){if(q>=p.length)return H.d(p,q)
C.a.k(p,q,C.b.aa(p[q],t))}return p},
kJ:function(a){return C.e.iG(Math.pow(2,C.K.c1(Math.log(H.oc(a))/Math.log(2))))},
mM:function(){var u=$.l_
return u==null?$.l_=new V.aH(1,0,0,0,1,0,0,0,1):u},
dy:function(){var u=$.l3
return u==null?$.l3=V.b2(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
b2:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ab(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
l2:function(a,b,c){return V.b2(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
kj:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.b2(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
l1:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.b2(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
kk:function(a,b,c,d){d=V.kq()
return V.l0(V.l8(),d,new V.L(a,b,c))},
l0:function(a,b,c){var u=c.w(0,Math.sqrt(c.K(c))),t=b.aY(u),s=t.w(0,Math.sqrt(t.K(t))),r=u.aY(s),q=new V.L(a.a,a.b,a.c),p=s.O(0).K(q),o=r.O(0).K(q),n=u.O(0).K(q)
return V.b2(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bB:function(){var u=$.l7
return u==null?$.l7=new V.ai(0,0):u},
l8:function(){var u=$.cA
return u==null?$.cA=new V.aj(0,0,0):u},
lc:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dH(a,b,c,d)},
e0:function(){var u=$.lq
return u==null?$.lq=new V.L(0,0,0):u},
nh:function(){var u=$.iB
return u==null?$.iB=new V.L(-1,0,0):u},
kq:function(){var u=$.iC
return u==null?$.iC=new V.L(0,1,0):u},
ni:function(){var u=$.iD
return u==null?$.iD=new V.L(0,0,1):u},
Z:function Z(a,b,c){this.a=a
this.b=b
this.c=c},
bp:function bp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fz:function fz(a){this.a=a},
aH:function aH(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ab:function ab(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ai:function ai(a,b){this.a=a
this.b=b},
aj:function aj(a,b,c){this.a=a
this.b=b
this.c=c},
cB:function cB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dH:function dH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a2:function a2(a,b){this.a=a
this.b=b},
L:function L(a,b,c){this.a=a
this.b=b
this.c=c},
al:function(a){var u=new V.hH()
u.ee(a)
return u},
f_:function f_(){},
bd:function bd(){},
dw:function dw(){},
bf:function bf(){this.a=null},
hH:function hH(){this.a=null},
cF:function cF(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dS:function dS(a,b,c){this.a=a
this.b=b
this.c=c},
cJ:function cJ(a){this.b=a
this.c=null},
i7:function i7(){this.c=this.b=this.a=null},
cK:function cK(a){this.b=a
this.a=this.c=null},
oA:function(a){P.n8(C.I,new V.k0(a))},
n3:function(a){var u=new V.hL()
u.eg(a,!0)
return u},
fe:function fe(a){this.a=a
this.d=this.c=null},
ff:function ff(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k0:function k0(a){this.a=a},
hL:function hL(){this.b=this.a=null},
hN:function hN(a){this.a=a},
hM:function hM(a){this.a=a}},U={
de:function(){var u=new U.fg()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
fi:function(a){var u=new U.ci()
u.a=a
return u},
kV:function(a){var u=new U.cn()
u.b6(U.a5)
u.b5(u.gfa(),u.gfP())
u.bN(0,a)
u.e=null
u.f=V.dy()
u.r=0
return u},
fg:function fg(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ci:function ci(){this.b=this.a=null},
cn:function cn(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a5:function a5(){},
dI:function dI(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dZ:function dZ(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e_:function e_(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dj:function dj(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
mK:function(a,b){var u=a.aw,t=new A.h1(b,u)
t.ef(b,u)
t.ec(a,b)
return t},
mL:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="MaterialLight_"+a0.gai(a0)+a1.gai(a1)+a2.gai(a2)+a3.gai(a3)+a4.gai(a4)+a5.gai(a5)+a6.gai(a6)+a7.gai(a7)+a8.gai(a8)+"_"
f+=a?"1":"0"
f+=b?"1":"0"
f+=c?"1":"0"
f=f+"0_"+e
u=a9.length
if(u>0){f+="_Dir"
for(t=0;t<a9.length;a9.length===u||(0,H.w)(a9),++t)f+="_"+H.k(a9[t].a)}u=b0.length
if(u>0){f+="_Point"
for(t=0;t<b0.length;b0.length===u||(0,H.w)(b0),++t)f+="_"+H.k(b0[t].a)}u=b1.length
if(u>0){f+="_Spot"
for(t=0;t<b1.length;b1.length===u||(0,H.w)(b1),++t)f+="_"+H.k(b1[t].a)}for(u=a9.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=a9[t].b
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
g=$.bm()
if(l){u=$.bl()
g=new Z.bh(g.a|u.a)}if(k){u=$.bk()
g=new Z.bh(g.a|u.a)}if(j){u=$.bn()
g=new Z.bh(g.a|u.a)}if(i){u=$.bj()
g=new Z.bh(g.a|u.a)}return new A.h4(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,s,p,m,p,r,h,!0,!1,!1,o,r,n,l,k,j,!1,i,a,!1,c,!1,e,f.charCodeAt(0)==0?f:f,g)},
jH:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
jI:function(a,b,c){var u,t="Txt, txt2D).rgb;\n"
A.jH(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.k1(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.b){u+="   "+c+"Color = "+c+"Clr*texture2D("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.b){u+="   "+c+"Color = texture2D("+c+t
a.a=u}a.a=u+"}\n"},
nN:function(a,b){var u,t=a.a,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.jH(b,t,"emission")
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
nK:function(a,b){var u,t=a.b
if(!(t.a||t.b||!1))return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.jI(b,t,"ambient")
b.a+="\n"},
nL:function(a,b){var u,t=a.c
if(!(t.a||t.b||!1))return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.jI(b,t,"diffuse")
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
nO:function(a,b){var u,t=a.d
if(!(t.a||t.b||!1))return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.jI(b,t,"invDiffuse")
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
nU:function(a,b){var u,t=a.e
if(!(t.a||t.b||!1))return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.jI(b,t,"specular")
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
nQ:function(a,b){var u,t,s
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
nS:function(a,b){var u,t=a.r,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.jH(b,t,"reflect")
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
nT:function(a,b){var u,t=a.x,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.jH(b,t,"refract")
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
nM:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.k(u)
s=A.k1(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.ad()
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
r=[P.i]
o=H.e([],r)
n=a.b
if(n.a||n.b||!1)C.a.h(o,"ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.e([],r)
r=a.c
if(r.a||r.b||!1)C.a.h(m,"diffuse(norm, lit.viewDir)")
r=a.d
if(r.a||r.b||!1)C.a.h(m,"invDiffuse(norm, lit.viewDir)")
r=a.e
if(r.a||r.b||!1)C.a.h(m,"specular(norm, lit.viewDir)")
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
C.a.h(o,"highLight")}r=c.a+="   return lit.color*("+C.a.q(o," + ")+");\n"
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
nR:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.k(u)
s=A.k1(t)
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
if(typeof u!=="number")return u.ad()
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
c.a=r+"\n"}r=[P.i]
l=H.e([],r)
C.a.h(l,"lit.color")
if(o)C.a.h(l,"attenuation")
if(u)C.a.h(l,"textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.a.q(l," * ")+";\n"
o+="}\n"
c.a=o
o+="\n"
c.a=o
o+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+m+")\n"
c.a=o
c.a=o+"{\n"
l=H.e([],r)
o=a.b
if(o.a||o.b||!1)C.a.h(l,"ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
C.a.h(l,"highLight")
m=u?", txtCube":""
if(p)m+=", shadowCube"
o=c.a+="   vec3 normDir = normalize(viewPos - lit.viewPnt);\n"
o+="   vec3 intensity = "+t+"Intensity(normDir, lit"+m+");\n"
c.a=o
c.a=o+"   if(length(intensity) > 0.0001) {\n"
k=H.e([],r)
r=a.c
if(r.a||r.b||!1)C.a.h(k,"diffuse(norm, normDir)")
r=a.d
if(r.a||r.b||!1)C.a.h(k,"invDiffuse(norm, normDir)")
r=a.e
if(r.a||r.b||!1)C.a.h(k,"specular(norm, normDir)")
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
nV:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.k(u)
s=A.k1(t)
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
if(typeof u!=="number")return u.ad()
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
c.a=u+"\n"}u=[P.i]
j=H.e([],u)
if(n)C.a.h(j,"attenuation")
if(o)C.a.h(j,"scale")
if(m)C.a.h(j,"texture2D(txt2D, txtLoc).rgb")
else C.a.h(j,"vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.a.q(j," * ")+";\n"
r+="}\n"
c.a=r
r+="\n"
c.a=r
r+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+k+")\n"
c.a=r
c.a=r+"{\n"
j=H.e([],u)
r=a.b
if(r.a||r.b||!1)C.a.h(j,"ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
C.a.h(j,"highLight")
k=m?", txt2D":""
if(p)k+=", shadow2D"
r=c.a+="   vec3 intensity = "+t+"Intensity(lit"+k+");\n"
r+="   if(length(intensity) > 0.0001) {\n"
c.a=r
c.a=r+"      vec3 litVec = normalize(viewPos - lit.viewPnt);\n"
i=H.e([],u)
u=a.c
if(u.a||u.b||!1)C.a.h(i,"diffuse(norm, litVec)")
u=a.d
if(u.a||u.b||!1)C.a.h(i,"invDiffuse(norm, litVec)")
u=a.e
if(u.a||u.b||!1)C.a.h(i,"specular(norm, litVec)")
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
nP:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.e([],[P.i])
u=a.b
if(u.a||u.b||!1)C.a.h(t,"ambientColor")
u=a.c
if(u.a||u.b||!1)C.a.h(t,"diffuse(norm, litVec)")
u=a.d
if(u.a||u.b||!1)C.a.h(t,"invDiffuse(norm, litVec)")
u=a.e
if(u.a||u.b||!1)C.a.h(t,"specular(norm, litVec)")
u=b.a+="   return "+C.a.q(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
nW:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.a4("")
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
A.nN(a,j)
A.nK(a,j)
A.nL(a,j)
A.nO(a,j)
A.nU(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.nS(a,j)
A.nT(a,j)}A.nQ(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.w)(q),++o)A.nM(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.w)(q),++o)A.nR(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.w)(q),++o)A.nV(a,q[o],j)
A.nP(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.e([],[P.i])
if(r){j.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(n,"lightAccum")
u=a.b
if(u.a||u.b||!1)j.a+="   setAmbientColor();\n"
u=a.c
if(u.a||u.b||!1)j.a+="   setDiffuseColor();\n"
u=a.d
if(u.a||u.b||!1)j.a+="   setInvDiffuseColor();\n"
u=a.e
if(u.a||u.b||!1)j.a+="   setSpecularColor();\n"
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.w)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.a5(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.w)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.a5(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.w)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.a5(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
if(u.a||u.b||!1)C.a.h(n,"emissionColor()")
u=a.r
if(u.a||u.b||!1)C.a.h(n,"reflect(refl)")
u=a.x
if(u.a||u.b||!1)C.a.h(n,"refract(refl)")
if(n.length<=0)C.a.h(n,"vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.a.q(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
nX:function(a,b){var u,t,s
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
nZ:function(a,b){var u
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
nY:function(a,b){var u
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
o0:function(a,b){var u,t
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
o1:function(a,b){var u,t
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
o_:function(a,b){var u
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
o2:function(a,b){var u
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
k1:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.b.a5(a,1)},
km:function(a,b,c,d,e){var u=new A.ig(a,c,e)
u.f=d
u.shv(P.mI(d,0,P.l))
return u},
d8:function d8(a,b,c){this.a=a
this.b=b
this.c=c},
f3:function f3(a){this.a=a},
af:function af(a,b,c){this.a=a
this.b=b
this.c=c},
h1:function h1(a,b){var _=this
_.iR=_.de=_.dd=_.dc=_.aw=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iZ=_.iY=_.iX=_.c0=_.c_=_.bZ=_.bY=_.bX=_.bW=_.iW=_.ds=_.dr=_.iV=_.dq=_.dn=_.dm=_.iU=_.dl=_.dk=_.dj=_.iT=_.di=_.dh=_.iS=_.dg=_.df=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
aF:function aF(a,b){this.a=a
this.b=b},
aK:function aK(a,b){this.a=a
this.b=b},
aO:function aO(a,b){this.a=a
this.b=b},
h4:function h4(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.aw=b3
_.dc=b4},
bW:function bW(a,b,c,d,e,f){var _=this
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
cE:function cE(){},
dU:function dU(){},
il:function il(a){this.a=a},
az:function az(a,b,c){this.a=a
this.c=b
this.d=c},
ii:function ii(a,b,c){this.a=a
this.c=b
this.d=c},
ij:function ij(a,b,c){this.a=a
this.c=b
this.d=c},
ik:function ik(a,b,c){this.a=a
this.c=b
this.d=c},
ig:function ig(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
ae:function ae(a,b,c){this.a=a
this.c=b
this.d=c},
ih:function ih(a,b,c){this.a=a
this.c=b
this.d=c},
V:function V(a,b,c){this.a=a
this.c=b
this.d=c},
cL:function cL(a,b,c){this.a=a
this.c=b
this.d=c},
im:function im(a,b,c){this.a=a
this.c=b
this.d=c},
cM:function cM(a,b,c){this.a=a
this.c=b
this.d=c},
au:function au(a,b,c){this.a=a
this.c=b
this.d=c},
am:function am(a,b,c){this.a=a
this.c=b
this.d=c},
bY:function bY(a,b,c){this.a=a
this.c=b
this.d=c}},F={
jC:function(a){var u,t=a.a>0?1:0
if(a.b>0)t+=2
u=a.c
if(typeof u!=="number")return u.V()
return(u>0?t+4:t)*2},
d_:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.L(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.L(u+a3,t+a1,s+a2)
q=new V.L(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.L(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.jC(i)
l=F.jC(j.b)
k=F.lY(d,a0,new F.jB(j,F.jC(j.c),F.jC(j.d),l,m,c),b)
if(k!=null)a.ia(k)},
oo:function(a,b){var u,t={}
t.a=u
t.a=null
t.a=new F.jQ()
return F.lY(b,a,new F.jR(t),null)},
lY:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
if(a<1)return
if(b<1)return
u=F.lf()
t=H.e([],[F.b7])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
o=q.d4(new V.bp(p,0,0,1),new V.ai(r,1))
c.$3(o,r,0)
C.a.h(t,o.bV(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
o=k.d4(new V.bp(j,i,h,1),new V.ai(r,m))
c.$3(o,r,n)
C.a.h(t,o.bV(d))}}u.d.hA(a+1,b+1,t)
return u},
dl:function(a,b,c){var u=new F.a8(),t=a.a
if(t==null)H.x(P.B("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.x(P.B("May not create a face with vertices attached to different shapes."))
u.a=a
C.a.h(a.d.b,u)
u.b=b
C.a.h(b.d.c,u)
u.c=c
C.a.h(c.d.d,u)
C.a.h(u.a.a.d.b,u)
u.a.a.a2()
return u},
lf:function(){var u=new F.dK(),t=new F.iE(u)
t.b=!1
t.shw(H.e([],[F.b7]))
u.a=t
t=new F.hK(u)
t.sbG(H.e([],[F.bA]))
u.b=t
t=new F.hJ(u)
t.seX(H.e([],[F.bc]))
u.c=t
t=new F.hI(u)
t.seQ(H.e([],[F.a8]))
u.d=t
u.e=null
return u},
lr:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.b7(),r=new F.iJ()
r.sbG(H.e([],[F.bA]))
s.b=r
r=new F.iI()
u=[F.bc]
r.seY(H.e([],u))
r.seZ(H.e([],u))
s.c=r
r=new F.iF()
u=[F.a8]
r.seR(H.e([],u))
r.seS(H.e([],u))
r.seT(H.e([],u))
s.d=r
h=$.mc()
s.e=0
r=$.bm()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bl().a)!==0?e:t
s.x=(u&$.bk().a)!==0?b:t
s.y=(u&$.bn().a)!==0?f:t
s.z=(u&$.bG().a)!==0?g:t
s.Q=(u&$.md().a)!==0?c:t
s.ch=(u&$.cc().a)!==0?i:0
s.cx=(u&$.bj().a)!==0?a:t
return s},
jB:function jB(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jQ:function jQ(){},
jR:function jR(a){this.a=a},
a8:function a8(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bc:function bc(){this.b=this.a=null},
bA:function bA(){this.a=null},
dK:function dK(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hI:function hI(a){this.a=a
this.b=null},
hJ:function hJ(a){this.a=a
this.b=null},
hK:function hK(a){this.a=a
this.b=null},
b7:function b7(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iL:function iL(a){this.a=a},
iK:function iK(a){this.a=a},
iE:function iE(a){this.a=a
this.c=this.b=null},
iF:function iF(){this.d=this.c=this.b=null},
iG:function iG(a,b){this.a=a
this.b=b},
iH:function iH(a,b){this.a=a
this.b=b},
iI:function iI(){this.c=this.b=null},
iJ:function iJ(){this.b=null}},T={cI:function cI(){},dQ:function dQ(){},i2:function i2(){var _=this
_.y=_.d=_.c=_.b=_.a=null},i3:function i3(a){var _=this
_.a=a
_.e=_.d=_.b=null},i4:function i4(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kg.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gE:function(a){return H.cC(a)},
i:function(a){return"Instance of '"+H.k(H.cD(a))+"'"}}
J.fL.prototype={
i:function(a){return String(a)},
gE:function(a){return a?519018:218159},
$iX:1}
J.dq.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gE:function(a){return 0}}
J.dr.prototype={
gE:function(a){return 0},
i:function(a){return String(a)}}
J.hu.prototype={}
J.c_.prototype={}
J.bx.prototype={
i:function(a){var u=a[$.m0()]
if(u==null)return this.e9(a)
return"JavaScript function for "+H.k(J.as(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ikc:1}
J.aZ.prototype={
h:function(a,b){H.C(b,H.t(a,0))
if(!!a.fixed$length)H.x(P.E("add"))
a.push(b)},
T:function(a,b){var u
if(!!a.fixed$length)H.x(P.E("remove"))
for(u=0;u<a.length;++u)if(J.T(a[u],b)){a.splice(u,1)
return!0}return!1},
bN:function(a,b){var u,t
H.n(b,"$ih",[H.t(a,0)],"$ah")
if(!!a.fixed$length)H.x(P.E("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.w)(b),++t)a.push(b[t])},
F:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[H.t(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.b(P.bM(a))}},
q:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.k(t,u,H.k(a[u]))
return t.join(b)},
i6:function(a){return this.q(a,"")},
i_:function(a,b,c,d){var u,t,s
H.C(b,d)
H.o(c,{func:1,ret:d,args:[d,H.t(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.b(P.bM(a))}return t},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
e7:function(a,b,c){if(b<0||b>a.length)throw H.b(P.ad(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.b(P.ad(c,b,a.length,"end",null))
if(b===c)return H.e([],[H.t(a,0)])
return H.e(a.slice(b,c),[H.t(a,0)])},
gay:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.b(H.mB())},
bp:function(a,b){var u=H.t(a,0)
H.o(b,{func:1,ret:P.l,args:[u,u]})
if(!!a.immutable$list)H.x(P.E("sort"))
H.dL(a,0,a.length-1,b,u)},
a3:function(a,b){var u
for(u=0;u<a.length;++u)if(J.T(a[u],b))return!0
return!1},
i:function(a){return P.kd(a,"[","]")},
gS:function(a){return new J.ap(a,a.length,[H.t(a,0)])},
gE:function(a){return H.cC(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.x(P.E("set length"))
if(b<0)throw H.b(P.ad(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.b(H.c6(a,b))
return a[b]},
k:function(a,b,c){H.C(c,H.t(a,0))
if(!!a.immutable$list)H.x(P.E("indexed set"))
if(b>=a.length||b<0)throw H.b(H.c6(a,b))
a[b]=c},
$ih:1,
$ic:1}
J.kf.prototype={}
J.ap.prototype={
gJ:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.b(H.w(s))
u=t.c
if(u>=r){t.scJ(null)
return!1}t.scJ(s[u]);++t.c
return!0},
scJ:function(a){this.d=H.C(a,H.t(this,0))},
$iaY:1}
J.cq.prototype={
hI:function(a,b){var u
H.lS(b)
if(typeof b!=="number")throw H.b(H.aT(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbg(b)
if(this.gbg(a)===u)return 0
if(this.gbg(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbg:function(a){return a===0?1/a<0:a<0},
iG:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.b(P.E(""+a+".toInt()"))},
c1:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.b(P.E(""+a+".floor()"))},
ah:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.b(P.E(""+a+".round()"))},
dX:function(a,b){var u
if(b>20)throw H.b(P.ad(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbg(a))return"-"+u
return u},
b2:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.b(P.ad(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.P(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.x(P.E("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.d(t,1)
u=t[1]
if(3>=s)return H.d(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.m("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gE:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
b4:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eb:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d0(a,b)},
a1:function(a,b){return(a|0)===a?a/b|0:this.d0(a,b)},
d0:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.b(P.E("Result of truncating division is "+H.k(u)+": "+H.k(a)+" ~/ "+b))},
aK:function(a,b){var u
if(a>0)u=this.d_(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hh:function(a,b){if(b<0)throw H.b(H.aT(b))
return this.d_(a,b)},
d_:function(a,b){return b>31?0:a>>>b},
$iz:1,
$ia7:1}
J.dp.prototype={$il:1}
J.dn.prototype={}
J.bw.prototype={
P:function(a,b){if(b<0)throw H.b(H.c6(a,b))
if(b>=a.length)H.x(H.c6(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(b>=a.length)throw H.b(H.c6(a,b))
return a.charCodeAt(b)},
u:function(a,b){if(typeof b!=="string")throw H.b(P.k7(b,null,null))
return a+b},
aR:function(a,b,c,d){var u,t
c=P.bC(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a0:function(a,b,c){var u
if(c<0||c>a.length)throw H.b(P.ad(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a4:function(a,b){return this.a0(a,b,0)},
p:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.x(H.aT(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.M()
if(b<0)throw H.b(P.hy(b,null))
if(b>c)throw H.b(P.hy(b,null))
if(c>a.length)throw H.b(P.hy(c,null))
return a.substring(b,c)},
a5:function(a,b){return this.p(a,b,null)},
m:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.b(C.G)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
aa:function(a,b){var u=b-a.length
if(u<=0)return a
return this.m(" ",u)+a},
im:function(a,b,c){var u=b-a.length
if(u<=0)return a
return a+this.m(c,u)},
be:function(a,b,c){var u
if(c<0||c>a.length)throw H.b(P.ad(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
dB:function(a,b){return this.be(a,b,0)},
i:function(a){return a},
gE:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$il5:1,
$ii:1}
H.a3.prototype={
gl:function(a){return this.a.length},
j:function(a,b){return C.b.P(this.a,b)},
$acN:function(){return[P.l]},
$av:function(){return[P.l]},
$ah:function(){return[P.l]},
$ac:function(){return[P.l]}}
H.fw.prototype={}
H.du.prototype={
gJ:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=J.d2(s),q=r.gl(s)
if(t.b!==q)throw H.b(P.bM(s))
u=t.c
if(u>=q){t.saT(null)
return!1}t.saT(r.G(s,u));++t.c
return!0},
saT:function(a){this.d=H.C(a,H.t(this,0))},
$iaY:1}
H.h_.prototype={
gS:function(a){return new H.h0(J.bH(this.a),this.b,this.$ti)},
gl:function(a){return J.aE(this.a)},
G:function(a,b){return this.b.$1(J.k6(this.a,b))},
$ah:function(a,b){return[b]}}
H.h0.prototype={
v:function(){var u=this,t=u.b
if(t.v()){u.saT(u.c.$1(t.gJ(t)))
return!0}u.saT(null)
return!1},
gJ:function(a){return this.a},
saT:function(a){this.a=H.C(a,H.t(this,1))},
$aaY:function(a,b){return[b]}}
H.iO.prototype={
gS:function(a){return new H.iP(J.bH(this.a),this.b,this.$ti)}}
H.iP.prototype={
v:function(){var u,t
for(u=this.a,t=this.b;u.v();)if(H.F(t.$1(u.gJ(u))))return!0
return!1},
gJ:function(a){var u=this.a
return u.gJ(u)}}
H.bP.prototype={}
H.cN.prototype={
k:function(a,b,c){H.C(c,H.av(this,"cN",0))
throw H.b(P.E("Cannot modify an unmodifiable list"))}}
H.dW.prototype={}
H.fj.prototype={
i:function(a){return P.ki(this)},
k:function(a,b,c){H.C(b,H.t(this,0))
H.C(c,H.t(this,1))
return H.mu()},
$iy:1}
H.fk.prototype={
gl:function(a){return this.a},
bd:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bd(0,b))return
return this.cK(b)},
cK:function(a){return this.b[H.S(a)]},
F:function(a,b){var u,t,s,r,q=this,p=H.t(q,1)
H.o(b,{func:1,ret:-1,args:[H.t(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.C(q.cK(r),p))}}}
H.ic.prototype={
a9:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.hq.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.k(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fN.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.k(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.k(t.a)+")"
return s+r+"' on '"+u+"' ("+H.k(t.a)+")"}}
H.iq.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.k2.prototype={
$1:function(a){if(!!J.Q(a).$ibs)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:22}
H.ez.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iaq:1}
H.ch.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
$ikc:1,
giL:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.i_.prototype={}
H.hS.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cb(u)+"'"}}
H.cd.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cd))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gE:function(a){var u,t=this.c
if(t==null)u=H.cC(this.a)
else u=typeof t!=="object"?J.d6(t):H.cC(t)
return(u^H.cC(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.k(this.d)+"' of "+("Instance of '"+H.k(H.cD(u))+"'")}}
H.ie.prototype={
i:function(a){return this.a}}
H.fc.prototype={
i:function(a){return this.a}}
H.hF.prototype={
i:function(a){return"RuntimeError: "+H.k(this.a)}}
H.iQ.prototype={
i:function(a){return"Assertion failed: "+P.dk(this.a)}}
H.a_.prototype={
gl:function(a){return this.a},
gam:function(a){return new H.fR(this,[H.t(this,0)])},
bd:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cG(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cG(t,b)}else return s.i3(b)},
i3:function(a){var u=this,t=u.d
if(t==null)return!1
return u.c4(u.bx(t,u.c3(a)),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.b7(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.b7(r,b)
s=t==null?null:t.b
return s}else return q.i4(b)},
i4:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bx(r,s.c3(a))
t=s.c4(u,a)
if(t<0)return
return u[t].b},
k:function(a,b,c){var u,t,s=this
H.C(b,H.t(s,0))
H.C(c,H.t(s,1))
if(typeof b==="string"){u=s.b
s.cv(u==null?s.b=s.bA():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cv(t==null?s.c=s.bA():t,b,c)}else s.i5(b,c)},
i5:function(a,b){var u,t,s,r,q=this
H.C(a,H.t(q,0))
H.C(b,H.t(q,1))
u=q.d
if(u==null)u=q.d=q.bA()
t=q.c3(a)
s=q.bx(u,t)
if(s==null)q.bK(u,t,[q.bB(a,b)])
else{r=q.c4(s,a)
if(r>=0)s[r].b=b
else s.push(q.bB(a,b))}},
F:function(a,b){var u,t,s=this
H.o(b,{func:1,ret:-1,args:[H.t(s,0),H.t(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.b(P.bM(s))
u=u.c}},
cv:function(a,b,c){var u,t=this
H.C(b,H.t(t,0))
H.C(c,H.t(t,1))
u=t.b7(a,b)
if(u==null)t.bK(a,b,t.bB(b,c))
else u.b=c},
bB:function(a,b){var u=this,t=new H.fQ(H.C(a,H.t(u,0)),H.C(b,H.t(u,1)))
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
c3:function(a){return J.d6(a)&0x3ffffff},
c4:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.T(a[t].a,b))return t
return-1},
i:function(a){return P.ki(this)},
b7:function(a,b){return a[b]},
bx:function(a,b){return a[b]},
bK:function(a,b,c){a[b]=c},
eL:function(a,b){delete a[b]},
cG:function(a,b){return this.b7(a,b)!=null},
bA:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bK(t,u,t)
this.eL(t,u)
return t}}
H.fQ.prototype={}
H.fR.prototype={
gl:function(a){return this.a.a},
gS:function(a){var u=this.a,t=new H.fS(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fS.prototype={
gJ:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.b(P.bM(t))
else{t=u.c
if(t==null){u.scu(null)
return!1}else{u.scu(t.a)
u.c=u.c.c
return!0}}},
scu:function(a){this.d=H.C(a,H.t(this,0))},
$iaY:1}
H.jT.prototype={
$1:function(a){return this.a(a)},
$S:22}
H.jU.prototype={
$2:function(a,b){return this.a(a,b)},
$S:50}
H.jV.prototype={
$1:function(a){return this.a(H.S(a))},
$S:46}
H.fM.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$il5:1,
$in_:1}
H.cw.prototype={$icw:1}
H.bz.prototype={$ibz:1,$in9:1}
H.dz.prototype={
gl:function(a){return a.length},
$iK:1,
$aK:function(){}}
H.cx.prototype={
j:function(a,b){H.ba(b,a,a.length)
return a[b]},
k:function(a,b,c){H.oi(c)
H.ba(b,a,a.length)
a[b]=c},
$abP:function(){return[P.z]},
$av:function(){return[P.z]},
$ih:1,
$ah:function(){return[P.z]},
$ic:1,
$ac:function(){return[P.z]}}
H.dA.prototype={
k:function(a,b,c){H.a9(c)
H.ba(b,a,a.length)
a[b]=c},
$abP:function(){return[P.l]},
$av:function(){return[P.l]},
$ih:1,
$ah:function(){return[P.l]},
$ic:1,
$ac:function(){return[P.l]}}
H.hl.prototype={
j:function(a,b){H.ba(b,a,a.length)
return a[b]}}
H.hm.prototype={
j:function(a,b){H.ba(b,a,a.length)
return a[b]}}
H.hn.prototype={
j:function(a,b){H.ba(b,a,a.length)
return a[b]}}
H.ho.prototype={
j:function(a,b){H.ba(b,a,a.length)
return a[b]}}
H.hp.prototype={
j:function(a,b){H.ba(b,a,a.length)
return a[b]}}
H.dB.prototype={
gl:function(a){return a.length},
j:function(a,b){H.ba(b,a,a.length)
return a[b]},
$ioZ:1}
H.cy.prototype={
gl:function(a){return a.length},
j:function(a,b){H.ba(b,a,a.length)
return a[b]},
$icy:1,
$iN:1}
H.cR.prototype={}
H.cS.prototype={}
H.cT.prototype={}
H.cU.prototype={}
P.iS.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:21}
P.iR.prototype={
$1:function(a){var u,t
this.a.a=H.o(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:45}
P.iT.prototype={
$0:function(){this.a.$0()},
$S:2}
P.iU.prototype={
$0:function(){this.a.$0()},
$S:2}
P.eF.prototype={
eu:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.c5(new P.jr(this,b),0),a)
else throw H.b(P.E("`setTimeout()` not found."))},
ev:function(a,b){if(self.setTimeout!=null)self.setInterval(H.c5(new P.jq(this,a,Date.now(),b),0),a)
else throw H.b(P.E("Periodic timer."))},
$ib4:1}
P.jr.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.jq.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.eb(u,q)}s.c=r
t.d.$1(s)},
$S:2}
P.b9.prototype={
i9:function(a){if((this.c&15)!==6)return!0
return this.b.b.cd(H.o(this.d,{func:1,ret:P.X,args:[P.O]}),a.a,P.X,P.O)},
i1:function(a){var u=this.e,t=P.O,s={futureOr:1,type:H.t(this,1)},r=this.b.b
if(H.eW(u,{func:1,args:[P.O,P.aq]}))return H.kF(r.iB(u,a.a,a.b,null,t,P.aq),s)
else return H.kF(r.cd(H.o(u,{func:1,args:[P.O]}),a.a,null,t),s)}}
P.aB.prototype={
dW:function(a,b,c){var u,t,s,r=H.t(this,0)
H.o(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.W
if(u!==C.f){H.o(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.o4(b,u)}t=new P.aB($.W,[c])
s=b==null?1:3
this.cw(new P.b9(t,s,a,b,[r,c]))
return t},
iF:function(a,b){return this.dW(a,null,b)},
cw:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.f(t.c,"$ib9")
t.c=a}else{if(s===2){u=H.f(t.c,"$iaB")
s=u.a
if(s<4){u.cw(a)
return}t.a=s
t.c=u.c}P.jL(null,null,t.b,H.o(new P.j1(t,a),{func:1,ret:-1}))}},
cV:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.f(p.c,"$ib9")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.f(p.c,"$iaB")
u=q.a
if(u<4){q.cV(a)
return}p.a=u
p.c=q.c}o.a=p.ba(a)
P.jL(null,null,p.b,H.o(new P.j5(o,p),{func:1,ret:-1}))}},
bI:function(){var u=H.f(this.c,"$ib9")
this.c=null
return this.ba(u)},
ba:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cC:function(a){var u,t,s=this,r=H.t(s,0)
H.kF(a,{futureOr:1,type:r})
u=s.$ti
if(H.kC(a,"$icm",u,"$acm"))if(H.kC(a,"$iaB",u,null))P.ls(a,s)
else P.nn(a,s)
else{t=s.bI()
H.C(a,r)
s.a=4
s.c=a
P.cP(s,t)}},
cD:function(a,b){var u,t=this
H.f(b,"$iaq")
u=t.bI()
t.a=8
t.c=new P.an(a,b)
P.cP(t,u)},
$icm:1}
P.j1.prototype={
$0:function(){P.cP(this.a,this.b)},
$S:2}
P.j5.prototype={
$0:function(){P.cP(this.b,this.a.a)},
$S:2}
P.j2.prototype={
$1:function(a){var u=this.a
u.a=0
u.cC(a)},
$S:21}
P.j3.prototype={
$2:function(a,b){H.f(b,"$iaq")
this.a.cD(a,b)},
$1:function(a){return this.$2(a,null)},
$S:44}
P.j4.prototype={
$0:function(){this.a.cD(this.b,this.c)},
$S:2}
P.j8.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.dT(H.o(s.d,{func:1}),null)}catch(r){u=H.aD(r)
t=H.c9(r)
if(o.d){s=H.f(o.a.a.c,"$ian").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.f(o.a.a.c,"$ian")
else q.b=new P.an(u,t)
q.a=!0
return}if(!!J.Q(n).$icm){if(n instanceof P.aB&&n.a>=4){if(n.a===8){s=o.b
s.b=H.f(n.c,"$ian")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.iF(new P.j9(p),null)
s.a=!1}},
$S:3}
P.j9.prototype={
$1:function(a){return this.a},
$S:42}
P.j7.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.t(s,0)
q=H.C(n.c,r)
p=H.t(s,1)
n.a.b=s.b.b.cd(H.o(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.aD(o)
t=H.c9(o)
s=n.a
s.b=new P.an(u,t)
s.a=!0}},
$S:3}
P.j6.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.f(m.a.a.c,"$ian")
r=m.c
if(H.F(r.i9(u))&&r.e!=null){q=m.b
q.b=r.i1(u)
q.a=!1}}catch(p){t=H.aD(p)
s=H.c9(p)
r=H.f(m.a.a.c,"$ian")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.an(t,s)
n.a=!0}},
$S:3}
P.e2.prototype={}
P.hV.prototype={
gl:function(a){var u,t,s=this,r={},q=new P.aB($.W,[P.l])
r.a=0
u=H.t(s,0)
t=H.o(new P.hX(r,s),{func:1,ret:-1,args:[u]})
H.o(new P.hY(r,q),{func:1,ret:-1})
W.a6(s.a,s.b,t,!1,u)
return q}}
P.hX.prototype={
$1:function(a){H.C(a,H.t(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.J,args:[H.t(this.b,0)]}}}
P.hY.prototype={
$0:function(){this.b.cC(this.a.a)},
$S:2}
P.cG.prototype={}
P.hW.prototype={}
P.b4.prototype={}
P.an.prototype={
i:function(a){return H.k(this.a)},
$ibs:1}
P.jA.prototype={$ipc:1}
P.jK.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dC():s
s=this.b
if(s==null)throw H.b(t)
u=H.b(t)
u.stack=s.i(0)
throw u},
$S:2}
P.jf.prototype={
iC:function(a){var u,t,s,r=null
H.o(a,{func:1,ret:-1})
try{if(C.f===$.W){a.$0()
return}P.lB(r,r,this,a,-1)}catch(s){u=H.aD(s)
t=H.c9(s)
P.jJ(r,r,this,u,H.f(t,"$iaq"))}},
iD:function(a,b,c){var u,t,s,r=null
H.o(a,{func:1,ret:-1,args:[c]})
H.C(b,c)
try{if(C.f===$.W){a.$1(b)
return}P.lC(r,r,this,a,b,-1,c)}catch(s){u=H.aD(s)
t=H.c9(s)
P.jJ(r,r,this,u,H.f(t,"$iaq"))}},
hF:function(a,b){return new P.jh(this,H.o(a,{func:1,ret:b}),b)},
bP:function(a){return new P.jg(this,H.o(a,{func:1,ret:-1}))},
d7:function(a,b){return new P.ji(this,H.o(a,{func:1,ret:-1,args:[b]}),b)},
dT:function(a,b){H.o(a,{func:1,ret:b})
if($.W===C.f)return a.$0()
return P.lB(null,null,this,a,b)},
cd:function(a,b,c,d){H.o(a,{func:1,ret:c,args:[d]})
H.C(b,d)
if($.W===C.f)return a.$1(b)
return P.lC(null,null,this,a,b,c,d)},
iB:function(a,b,c,d,e,f){H.o(a,{func:1,ret:d,args:[e,f]})
H.C(b,e)
H.C(c,f)
if($.W===C.f)return a.$2(b,c)
return P.o5(null,null,this,a,b,c,d,e,f)}}
P.jh.prototype={
$0:function(){return this.a.dT(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jg.prototype={
$0:function(){return this.a.iC(this.b)},
$S:3}
P.ji.prototype={
$1:function(a){var u=this.c
return this.a.iD(this.b,H.C(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jd.prototype={
gS:function(a){var u=this,t=new P.eh(u,u.r,u.$ti)
t.c=u.e
return t},
gl:function(a){return this.a},
h:function(a,b){var u,t,s=this
H.C(b,H.t(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cA(u==null?s.b=P.kt():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cA(t==null?s.c=P.kt():t,b)}else return s.ex(0,b)},
ex:function(a,b){var u,t,s,r=this
H.C(b,H.t(r,0))
u=r.d
if(u==null)u=r.d=P.kt()
t=r.cE(b)
s=u[t]
if(s==null)u[t]=[r.bt(b)]
else{if(r.cL(s,b)>=0)return!1
s.push(r.bt(b))}return!0},
T:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.h4(this.c,b)
else return this.h3(0,b)},
h3:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.eV(r,b)
t=s.cL(u,b)
if(t<0)return!1
s.d1(u.splice(t,1)[0])
return!0},
cA:function(a,b){H.C(b,H.t(this,0))
if(H.f(a[b],"$icQ")!=null)return!1
a[b]=this.bt(b)
return!0},
h4:function(a,b){var u
if(a==null)return!1
u=H.f(a[b],"$icQ")
if(u==null)return!1
this.d1(u)
delete a[b]
return!0},
cP:function(){this.r=1073741823&this.r+1},
bt:function(a){var u,t=this,s=new P.cQ(H.C(a,H.t(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cP()
return s},
d1:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cP()},
cE:function(a){return J.d6(a)&1073741823},
eV:function(a,b){return a[this.cE(b)]},
cL:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.T(a[t].a,b))return t
return-1}}
P.cQ.prototype={}
P.eh.prototype={
gJ:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.b(P.bM(t))
else{t=u.c
if(t==null){u.scB(null)
return!1}else{u.scB(H.C(t.a,H.t(u,0)))
u.c=u.c.b
return!0}}},
scB:function(a){this.d=H.C(a,H.t(this,0))},
$iaY:1}
P.fT.prototype={
$2:function(a,b){this.a.k(0,H.C(a,this.b),H.C(b,this.c))},
$S:6}
P.fU.prototype={$ih:1,$ic:1}
P.v.prototype={
gS:function(a){return new H.du(a,this.gl(a),[H.c8(this,a,"v",0)])},
G:function(a,b){return this.j(a,b)},
iI:function(a,b){var u,t=this,s=H.e([],[H.c8(t,a,"v",0)])
C.a.sl(s,t.gl(a))
for(u=0;u<t.gl(a);++u)C.a.k(s,u,t.j(a,u))
return s},
iH:function(a){return this.iI(a,!0)},
hY:function(a,b,c,d){var u
H.C(d,H.c8(this,a,"v",0))
P.bC(b,c,this.gl(a))
for(u=b;u<c;++u)this.k(a,u,d)},
i:function(a){return P.kd(a,"[","]")}}
P.fX.prototype={}
P.fY.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.k(a)
t.a=u+": "
t.a+=H.k(b)},
$S:6}
P.ah.prototype={
F:function(a,b){var u,t,s=this
H.o(b,{func:1,ret:-1,args:[H.c8(s,a,"ah",0),H.c8(s,a,"ah",1)]})
for(u=J.bH(s.gam(a));u.v();){t=u.gJ(u)
b.$2(t,s.j(a,t))}},
gl:function(a){return J.aE(this.gam(a))},
i:function(a){return P.ki(a)},
$iy:1}
P.js.prototype={
k:function(a,b,c){H.C(b,H.t(this,0))
H.C(c,H.t(this,1))
throw H.b(P.E("Cannot modify unmodifiable map"))}}
P.fZ.prototype={
j:function(a,b){return J.d5(this.a,b)},
k:function(a,b,c){J.k4(this.a,H.C(b,H.t(this,0)),H.C(c,H.t(this,1)))},
F:function(a,b){J.kN(this.a,H.o(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]}))},
gl:function(a){return J.aE(this.a)},
i:function(a){return J.as(this.a)},
$iy:1}
P.dX.prototype={}
P.jj.prototype={
i:function(a){return P.kd(this,"{","}")},
G:function(a,b){var u,t,s,r=this
P.lb(b,"index")
for(u=P.np(r,r.r,H.t(r,0)),t=0;u.v();){s=u.d
if(b===t)return s;++t}throw H.b(P.U(b,r,"index",null,t))},
$ih:1,
$ile:1}
P.ei.prototype={}
P.eL.prototype={}
P.f8.prototype={
ib:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bC(a0,a1,b.length)
u=$.mf()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.b.D(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.jS(C.b.D(b,n))
j=H.jS(C.b.D(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.d(u,i)
h=u[i]
if(h>=0){i=C.b.P("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.a4("")
g=r.a+=C.b.p(b,s,t)
r.a=g+H.dF(m)
s=n
continue}}throw H.b(P.a1("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.p(b,s,a1)
f=g.length
if(q>=0)P.kP(b,p,a1,q,o,f)
else{e=C.d.b4(f-1,4)+1
if(e===1)throw H.b(P.a1(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.aR(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.kP(b,p,a1,q,o,d)
else{e=C.d.b4(d,4)
if(e===1)throw H.b(P.a1(c,b,a1))
if(e>1)b=C.b.aR(b,a1,a1,e===2?"==":"=")}return b},
$abL:function(){return[[P.c,P.l],P.i]}}
P.f9.prototype={
$abN:function(){return[[P.c,P.l],P.i]}}
P.bL.prototype={}
P.bN.prototype={}
P.fx.prototype={
$abL:function(){return[P.i,[P.c,P.l]]}}
P.iy.prototype={
ghX:function(){return C.H}}
P.iA.prototype={
bU:function(a){var u,t,s=P.bC(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.jz(u)
if(t.eU(a,0,s)!==s)t.d3(J.ml(a,s-1),0)
return new Uint8Array(u.subarray(0,H.nG(0,t.b,u.length)))},
$abN:function(){return[P.i,[P.c,P.l]]}}
P.jz.prototype={
d3:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
if((b&64512)===56320){u=65536+((a&1023)<<10)|b&1023
t.b=q
if(r>=p)return H.d(s,r)
s[r]=240|u>>>18
r=t.b=q+1
if(q>=p)return H.d(s,q)
s[q]=128|u>>>12&63
q=t.b=r+1
if(r>=p)return H.d(s,r)
s[r]=128|u>>>6&63
t.b=q+1
if(q>=p)return H.d(s,q)
s[q]=128|u&63
return!0}else{t.b=q
if(r>=p)return H.d(s,r)
s[r]=224|a>>>12
r=t.b=q+1
if(q>=p)return H.d(s,q)
s[q]=128|a>>>6&63
t.b=r+1
if(r>=p)return H.d(s,r)
s[r]=128|a&63
return!1}},
eU:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.P(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.D(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.d3(r,C.b.D(a,p)))s=p}else if(r<=2047){q=n.b
o=q+1
if(o>=t)break
n.b=o
if(q>=t)return H.d(u,q)
u[q]=192|r>>>6
n.b=o+1
u[o]=128|r&63}else{q=n.b
if(q+2>=t)break
o=n.b=q+1
if(q>=t)return H.d(u,q)
u[q]=224|r>>>12
q=n.b=o+1
if(o>=t)return H.d(u,o)
u[o]=128|r>>>6&63
n.b=q+1
if(q>=t)return H.d(u,q)
u[q]=128|r&63}}return s}}
P.iz.prototype={
bU:function(a){var u,t,s,r,q,p,o,n,m
H.n(a,"$ic",[P.l],"$ac")
u=P.nc(!1,a,0,null)
if(u!=null)return u
t=P.bC(0,null,J.aE(a))
s=P.lE(a,0,t)
if(s>0){r=P.cH(a,0,s)
if(s===t)return r
q=new P.a4(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.a4("")
n=new P.jy(!1,q)
n.c=o
n.hJ(a,p,t)
if(n.e>0){H.x(P.a1("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.dF(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$abN:function(){return[[P.c,P.l],P.i]}}
P.jy.prototype={
hJ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.n(a,"$ic",[P.l],"$ac")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.d2(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.j(a,p)
if(typeof o!=="number")return o.ad()
if((o&192)!==128){n=P.a1(h+C.d.b2(o,16),a,p)
throw H.b(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.d(C.t,n)
if(u<=C.t[n]){n=P.a1("Overlong encoding of 0x"+C.d.b2(u,16),a,p-s-1)
throw H.b(n)}if(u>1114111){n=P.a1("Character outside valid Unicode range: 0x"+C.d.b2(u,16),a,p-s-1)
throw H.b(n)}if(!i.c||u!==65279)q.a+=H.dF(u)
i.c=!1}for(n=p<c;n;){m=P.lE(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.cH(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.j(a,l)
if(typeof o!=="number")return o.M()
if(o<0){j=P.a1("Negative UTF-8 code unit: -0x"+C.d.b2(-o,16),a,k-1)
throw H.b(j)}else{if((o&224)===192){u=o&31
t=1
s=1
continue $label0$0}if((o&240)===224){u=o&15
t=2
s=2
continue $label0$0}if((o&248)===240&&o<245){u=o&7
t=3
s=3
continue $label0$0}j=P.a1(h+C.d.b2(o,16),a,k-1)
throw H.b(j)}}break $label0$0}if(t>0){i.d=u
i.e=t
i.f=s}}}
P.X.prototype={}
P.at.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.at&&this.a===b.a&&!0},
gE:function(a){var u=this.a
return(u^C.d.aK(u,30))&1073741823},
i:function(a){var u=this,t=P.mv(H.mW(u)),s=P.df(H.mU(u)),r=P.df(H.mQ(u)),q=P.df(H.mR(u)),p=P.df(H.mT(u)),o=P.df(H.mV(u)),n=P.mw(H.mS(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.z.prototype={}
P.br.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.br&&this.a===b.a},
gE:function(a){return C.d.gE(this.a)},
i:function(a){var u,t,s,r=new P.fv(),q=this.a
if(q<0)return"-"+new P.br(0-q).i(0)
u=r.$1(C.d.a1(q,6e7)%60)
t=r.$1(C.d.a1(q,1e6)%60)
s=new P.fu().$1(q%1e6)
return""+C.d.a1(q,36e8)+":"+H.k(u)+":"+H.k(t)+"."+H.k(s)}}
P.fu.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:17}
P.fv.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:17}
P.bs.prototype={}
P.f2.prototype={
i:function(a){return"Assertion failed"}}
P.dC.prototype={
i:function(a){return"Throw of null."}}
P.aU.prototype={
gbv:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbu:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbv()+o+u
if(!q.a)return t
s=q.gbu()
r=P.dk(q.b)
return t+s+": "+r}}
P.bT.prototype={
gbv:function(){return"RangeError"},
gbu:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.k(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.k(s)
else if(t>s)u=": Not in range "+H.k(s)+".."+H.k(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.k(s)}return u}}
P.fK.prototype={
gbv:function(){return"RangeError"},
gbu:function(){var u,t=H.a9(this.b)
if(typeof t!=="number")return t.M()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.k(u)},
gl:function(a){return this.f}}
P.ir.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.io.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.hR.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fh.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dk(u)+"."}}
P.ht.prototype={
i:function(a){return"Out of Memory"},
$ibs:1}
P.dN.prototype={
i:function(a){return"Stack Overflow"},
$ibs:1}
P.fp.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ea.prototype={
i:function(a){return"Exception: "+this.a}}
P.fH.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.b.p(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.b.D(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.b.P(f,q)
if(p===10||p===13){o=q
break}}if(o-s>78)if(g-s<75){n=s+75
m=s
l=""
k="..."}else{if(o-g<75){m=o-75
n=o
k=""}else{m=g-36
n=g+36
k="..."}l="..."}else{n=o
m=s
l=""
k=""}j=C.b.p(f,m,n)
return h+l+j+k+"\n"+C.b.m(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.k(g)+")"):h}}
P.l.prototype={}
P.h.prototype={
gl:function(a){var u,t=this.gS(this)
for(u=0;t.v();)++u
return u},
G:function(a,b){var u,t,s
P.lb(b,"index")
for(u=this.gS(this),t=0;u.v();){s=u.gJ(u)
if(b===t)return s;++t}throw H.b(P.U(b,this,"index",null,t))},
i:function(a){return P.mA(this,"(",")")}}
P.aY.prototype={}
P.c.prototype={$ih:1}
P.y.prototype={}
P.J.prototype={
gE:function(a){return P.O.prototype.gE.call(this,this)},
i:function(a){return"null"}}
P.a7.prototype={}
P.O.prototype={constructor:P.O,$iO:1,
n:function(a,b){return this===b},
gE:function(a){return H.cC(this)},
i:function(a){return"Instance of '"+H.k(H.cD(this))+"'"},
toString:function(){return this.i(this)}}
P.aq.prototype={}
P.i.prototype={$il5:1}
P.a4.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ioN:1}
P.iw.prototype={
$2:function(a,b){var u,t,s,r=P.i
H.n(a,"$iy",[r,r],"$ay")
H.S(b)
u=J.kG(b).dB(b,"=")
if(u===-1){if(b!=="")J.k4(a,P.kx(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.p(b,0,u)
s=C.b.a5(b,u+1)
r=this.a
J.k4(a,P.kx(t,0,t.length,r,!0),P.kx(s,0,s.length,r,!0))}return a},
$S:41}
P.it.prototype={
$2:function(a,b){throw H.b(P.a1("Illegal IPv4 address, "+a,this.a,b))},
$S:40}
P.iu.prototype={
$2:function(a,b){throw H.b(P.a1("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:39}
P.iv.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.eY(C.b.p(this.b,a,b),null,16)
if(typeof u!=="number")return u.M()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:37}
P.c0.prototype={
ge1:function(){return this.b},
gc2:function(a){var u=this.c
if(u==null)return""
if(C.b.a4(u,"["))return C.b.p(u,1,u.length-1)
return u},
gbi:function(a){var u=this.d
if(u==null)return P.lu(this.a)
return u},
gcb:function(a){var u=this.f
return u==null?"":u},
gdu:function(){var u=this.r
return u==null?"":u},
dQ:function(a,b){var u,t,s,r,q,p,o,n,m=this
H.n(b,"$iy",[P.i,null],"$ay")
u=m.a
t=u==="file"
s=m.b
r=m.d
q=m.c
if(!(q!=null))q=s.length!==0||r!=null||t?"":null
p=m.e
if(!t)o=q!=null&&p.length!==0
else o=!0
if(o&&!C.b.a4(p,"/"))p="/"+p
n=P.kv(null,0,0,b)
return new P.c0(u,s,q,r,p,n,m.r)},
gbj:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.i
s.sh2(new P.dX(P.ln(u==null?"":u),[t,t]))}return s.Q},
gdv:function(){return this.c!=null},
gdA:function(){return this.f!=null},
gdw:function(){return this.r!=null},
i:function(a){var u,t,s,r=this,q=r.y
if(q==null){q=r.a
u=q.length!==0?H.k(q)+":":""
t=r.c
s=t==null
if(!s||q==="file"){q=u+"//"
u=r.b
if(u.length!==0)q=q+H.k(u)+"@"
if(!s)q+=t
u=r.d
if(u!=null)q=q+":"+H.k(u)}else q=u
q+=r.e
u=r.f
if(u!=null)q=q+"?"+u
u=r.r
if(u!=null)q=q+"#"+u
q=r.y=q.charCodeAt(0)==0?q:q}return q},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.Q(b).$ikn)if(s.a==b.gbm())if(s.c!=null===b.gdv())if(s.b==b.ge1())if(s.gc2(s)==b.gc2(b))if(s.gbi(s)==b.gbi(b))if(s.e===b.gdL(b)){u=s.f
t=u==null
if(!t===b.gdA()){if(t)u=""
if(u===b.gcb(b)){u=s.r
t=u==null
if(!t===b.gdw()){if(t)u=""
u=u===b.gdu()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gE:function(a){var u=this.z
return u==null?this.z=C.b.gE(this.i(0)):u},
sh2:function(a){var u=P.i
this.Q=H.n(a,"$iy",[u,u],"$ay")},
$ikn:1,
gbm:function(){return this.a},
gdL:function(a){return this.e}}
P.jt.prototype={
$1:function(a){throw H.b(P.a1("Invalid port",this.a,this.b+1))},
$S:35}
P.ju.prototype={
$1:function(a){return P.jx(C.P,a,C.h,!1)},
$S:34}
P.jw.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.k(P.jx(C.i,a,C.h,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.k(P.jx(C.i,b,C.h,!0))}},
$S:26}
P.jv.prototype={
$2:function(a,b){var u,t
H.S(a)
if(b==null||typeof b==="string")this.a.$2(a,H.S(b))
else for(u=J.bH(H.lQ(b,"$ih")),t=this.a;u.v();)t.$2(a,H.S(u.gJ(u)))},
$S:33}
P.is.prototype={
ge0:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.d(o,0)
u=q.a
o=o[0]+1
t=C.b.be(u,"?",o)
s=u.length
if(t>=0){r=P.cZ(u,t+1,s,C.l,!1)
s=t}else r=p
return q.c=new P.iY("data",p,p,p,P.cZ(u,o,s,C.v,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.d(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.jE.prototype={
$1:function(a){return new Uint8Array(96)},
$S:32}
P.jD.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.d(u,a)
u=u[a]
J.mm(u,0,96,b)
return u},
$S:31}
P.jF.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.b.D(b,s)^96
if(r>=t)return H.d(a,r)
a[r]=c}}}
P.jG.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.b.D(b,0),t=C.b.D(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.d(a,r)
a[r]=c}}}
P.jk.prototype={
gdv:function(){return this.c>0},
gdz:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.u()
t=this.e
if(typeof t!=="number")return H.q(t)
t=u+1<t
u=t}else u=!1
return u},
gdA:function(){var u=this.f
if(typeof u!=="number")return u.M()
return u<this.r},
gdw:function(){return this.r<this.a.length},
gcN:function(){return this.b===4&&C.b.a4(this.a,"http")},
gcO:function(){return this.b===5&&C.b.a4(this.a,"https")},
gbm:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gcN())q=t.x="http"
else if(t.gcO()){t.x="https"
q="https"}else if(q===4&&C.b.a4(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.a4(t.a,r)){t.x=r
q=r}else{q=C.b.p(t.a,0,q)
t.x=q}return q},
ge1:function(){var u=this.c,t=this.b+3
return u>t?C.b.p(this.a,t,u-1):""},
gc2:function(a){var u=this.c
return u>0?C.b.p(this.a,u,this.d):""},
gbi:function(a){var u,t=this
if(t.gdz()){u=t.d
if(typeof u!=="number")return u.u()
return P.eY(C.b.p(t.a,u+1,t.e),null,null)}if(t.gcN())return 80
if(t.gcO())return 443
return 0},
gdL:function(a){return C.b.p(this.a,this.e,this.f)},
gcb:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.M()
return u<t?C.b.p(this.a,u+1,t):""},
gdu:function(){var u=this.r,t=this.a
return u<t.length?C.b.a5(t,u+1):""},
gbj:function(){var u=this,t=u.f
if(typeof t!=="number")return t.M()
if(t>=u.r)return C.Q
t=P.i
return new P.dX(P.ln(u.gcb(u)),[t,t])},
dQ:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.n(b,"$iy",[P.i,null],"$ay")
u=k.gbm()
t=u==="file"
s=k.c
r=s>0?C.b.p(k.a,k.b+3,s):""
q=k.gdz()?k.gbi(k):j
s=k.c
if(s>0)p=C.b.p(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.p(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.a4(o,"/"))o="/"+o
m=P.kv(j,0,0,b)
n=k.r
l=n<s.length?C.b.a5(s,n+1):j
return new P.c0(u,r,p,q,o,m,l)},
gE:function(a){var u=this.y
return u==null?this.y=C.b.gE(this.a):u},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.Q(b).$ikn&&this.a===b.i(0)},
i:function(a){return this.a},
$ikn:1}
P.iY.prototype={}
W.r.prototype={}
W.eZ.prototype={
gl:function(a){return a.length}}
W.f0.prototype={
i:function(a){return String(a)}}
W.f1.prototype={
i:function(a){return String(a)}}
W.bJ.prototype={$ibJ:1}
W.bK.prototype={
cj:function(a,b,c){if(c!=null)return a.getContext(b,P.od(c))
return a.getContext(b)},
e3:function(a,b){return this.cj(a,b,null)},
$ibK:1}
W.cf.prototype={$icf:1}
W.bo.prototype={
gl:function(a){return a.length}}
W.cj.prototype={$icj:1}
W.fl.prototype={
gl:function(a){return a.length}}
W.P.prototype={$iP:1}
W.ck.prototype={
gl:function(a){return a.length}}
W.fm.prototype={}
W.aW.prototype={}
W.aX.prototype={}
W.fn.prototype={
gl:function(a){return a.length}}
W.fo.prototype={
gl:function(a){return a.length}}
W.fq.prototype={
gl:function(a){return a.length}}
W.dg.prototype={$idg:1}
W.fr.prototype={
i:function(a){return String(a)}}
W.dh.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.n(c,"$iak",[P.a7],"$aak")
throw H.b(P.E("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[[P.ak,P.a7]]},
$av:function(){return[[P.ak,P.a7]]},
$ih:1,
$ah:function(){return[[P.ak,P.a7]]},
$ic:1,
$ac:function(){return[[P.ak,P.a7]]},
$aD:function(){return[[P.ak,P.a7]]}}
W.di.prototype={
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(this.gaC(a))+" x "+H.k(this.gax(a))},
n:function(a,b){var u
if(b==null)return!1
u=J.Q(b)
if(!u.$iak)return!1
return a.left===u.gbh(b)&&a.top===u.gbk(b)&&this.gaC(a)===u.gaC(b)&&this.gax(a)===u.gax(b)},
gE:function(a){return W.lt(C.e.gE(a.left),C.e.gE(a.top),C.e.gE(this.gaC(a)),C.e.gE(this.gax(a)))},
gd8:function(a){return a.bottom},
gax:function(a){return a.height},
gbh:function(a){return a.left},
gcc:function(a){return a.right},
gbk:function(a){return a.top},
gaC:function(a){return a.width},
$iak:1,
$aak:function(){return[P.a7]}}
W.fs.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.S(c)
throw H.b(P.E("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[P.i]},
$av:function(){return[P.i]},
$ih:1,
$ah:function(){return[P.i]},
$ic:1,
$ac:function(){return[P.i]},
$aD:function(){return[P.i]}}
W.ft.prototype={
gl:function(a){return a.length}}
W.iW.prototype={
gl:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
return H.f(u[b],"$ia0")},
k:function(a,b,c){var u
H.f(c,"$ia0")
u=this.b
if(b<0||b>=u.length)return H.d(u,b)
this.a.replaceChild(c,u[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gS:function(a){var u=this.iH(this)
return new J.ap(u,u.length,[H.t(u,0)])},
$av:function(){return[W.a0]},
$ah:function(){return[W.a0]},
$ac:function(){return[W.a0]}}
W.a0.prototype={
gbT:function(a){return new W.iW(a,a.children)},
gd9:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.M()
if(s<0)s=-s*0
if(typeof r!=="number")return r.M()
if(r<0)r=-r*0
return new P.ak(u,t,s,r,[P.a7])},
i:function(a){return a.localName},
$ia0:1}
W.m.prototype={$im:1}
W.j.prototype={
hz:function(a,b,c,d){H.o(c,{func:1,args:[W.m]})
if(c!=null)this.ey(a,b,c,!1)},
ey:function(a,b,c,d){return a.addEventListener(b,H.c5(H.o(c,{func:1,args:[W.m]}),1),!1)},
$ij:1}
W.aw.prototype={$iaw:1}
W.cl.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaw")
throw H.b(P.E("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aw]},
$av:function(){return[W.aw]},
$ih:1,
$ah:function(){return[W.aw]},
$ic:1,
$ac:function(){return[W.aw]},
$icl:1,
$aD:function(){return[W.aw]}}
W.fC.prototype={
gl:function(a){return a.length}}
W.fG.prototype={
gl:function(a){return a.length}}
W.aG.prototype={$iaG:1}
W.fJ.prototype={
gl:function(a){return a.length}}
W.bQ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iG")
throw H.b(P.E("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.G]},
$av:function(){return[W.G]},
$ih:1,
$ah:function(){return[W.G]},
$ic:1,
$ac:function(){return[W.G]},
$ibQ:1,
$aD:function(){return[W.G]}}
W.bb.prototype={$ibb:1,
gda:function(a){return a.data}}
W.co.prototype={$ico:1}
W.cp.prototype={$icp:1,$icg:1}
W.cg.prototype={$ia0:1,$ij:1,$iG:1}
W.b_.prototype={$ib_:1}
W.fV.prototype={
i:function(a){return String(a)}}
W.he.prototype={
gl:function(a){return a.length}}
W.cu.prototype={$icu:1}
W.hf.prototype={
j:function(a,b){return P.bi(a.get(H.S(b)))},
F:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.i,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bi(t.value[1]))}},
gam:function(a){var u=H.e([],[P.i])
this.F(a,new W.hg(u))
return u},
gl:function(a){return a.size},
k:function(a,b,c){throw H.b(P.E("Not supported"))},
$aah:function(){return[P.i,null]},
$iy:1,
$ay:function(){return[P.i,null]}}
W.hg.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.hh.prototype={
j:function(a,b){return P.bi(a.get(H.S(b)))},
F:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.i,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bi(t.value[1]))}},
gam:function(a){var u=H.e([],[P.i])
this.F(a,new W.hi(u))
return u},
gl:function(a){return a.size},
k:function(a,b,c){throw H.b(P.E("Not supported"))},
$aah:function(){return[P.i,null]},
$iy:1,
$ay:function(){return[P.i,null]}}
W.hi.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.aI.prototype={$iaI:1}
W.hj.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaI")
throw H.b(P.E("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aI]},
$av:function(){return[W.aI]},
$ih:1,
$ah:function(){return[W.aI]},
$ic:1,
$ac:function(){return[W.aI]},
$aD:function(){return[W.aI]}}
W.ac.prototype={$iac:1}
W.iV.prototype={
k:function(a,b,c){var u,t
H.f(c,"$iG")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.d(t,b)
u.replaceChild(c,t[b])},
gS:function(a){var u=this.a.childNodes
return new W.dm(u,u.length,[H.c8(C.R,u,"D",0)])},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$av:function(){return[W.G]},
$ah:function(){return[W.G]},
$ac:function(){return[W.G]}}
W.G.prototype={
iz:function(a,b){var u,t
try{u=a.parentNode
J.mj(u,b,a)}catch(t){H.aD(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.e8(a):u},
h6:function(a,b,c){return a.replaceChild(b,c)},
$iG:1}
W.cz.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iG")
throw H.b(P.E("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.G]},
$av:function(){return[W.G]},
$ih:1,
$ah:function(){return[W.G]},
$ic:1,
$ac:function(){return[W.G]},
$aD:function(){return[W.G]}}
W.aJ.prototype={$iaJ:1,
gl:function(a){return a.length}}
W.hv.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaJ")
throw H.b(P.E("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aJ]},
$av:function(){return[W.aJ]},
$ih:1,
$ah:function(){return[W.aJ]},
$ic:1,
$ac:function(){return[W.aJ]},
$aD:function(){return[W.aJ]}}
W.hD.prototype={
j:function(a,b){return P.bi(a.get(H.S(b)))},
F:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.i,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bi(t.value[1]))}},
gam:function(a){var u=H.e([],[P.i])
this.F(a,new W.hE(u))
return u},
gl:function(a){return a.size},
k:function(a,b,c){throw H.b(P.E("Not supported"))},
$aah:function(){return[P.i,null]},
$iy:1,
$ay:function(){return[P.i,null]}}
W.hE.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.hG.prototype={
gl:function(a){return a.length}}
W.aL.prototype={$iaL:1}
W.hO.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaL")
throw H.b(P.E("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aL]},
$av:function(){return[W.aL]},
$ih:1,
$ah:function(){return[W.aL]},
$ic:1,
$ac:function(){return[W.aL]},
$aD:function(){return[W.aL]}}
W.aM.prototype={$iaM:1}
W.hP.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaM")
throw H.b(P.E("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aM]},
$av:function(){return[W.aM]},
$ih:1,
$ah:function(){return[W.aM]},
$ic:1,
$ac:function(){return[W.aM]},
$aD:function(){return[W.aM]}}
W.aN.prototype={$iaN:1,
gl:function(a){return a.length}}
W.hT.prototype={
j:function(a,b){return a.getItem(H.S(b))},
k:function(a,b,c){a.setItem(b,c)},
F:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.i,P.i]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gam:function(a){var u=H.e([],[P.i])
this.F(a,new W.hU(u))
return u},
gl:function(a){return a.length},
$aah:function(){return[P.i,P.i]},
$iy:1,
$ay:function(){return[P.i,P.i]}}
W.hU.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:26}
W.ax.prototype={$iax:1}
W.bg.prototype={$ibg:1}
W.aP.prototype={$iaP:1}
W.ay.prototype={$iay:1}
W.i0.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iay")
throw H.b(P.E("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.ay]},
$av:function(){return[W.ay]},
$ih:1,
$ah:function(){return[W.ay]},
$ic:1,
$ac:function(){return[W.ay]},
$aD:function(){return[W.ay]}}
W.i1.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaP")
throw H.b(P.E("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aP]},
$av:function(){return[W.aP]},
$ih:1,
$ah:function(){return[W.aP]},
$ic:1,
$ac:function(){return[W.aP]},
$aD:function(){return[W.aP]}}
W.i6.prototype={
gl:function(a){return a.length}}
W.aQ.prototype={$iaQ:1}
W.aR.prototype={$iaR:1}
W.i9.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaQ")
throw H.b(P.E("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aQ]},
$av:function(){return[W.aQ]},
$ih:1,
$ah:function(){return[W.aQ]},
$ic:1,
$ac:function(){return[W.aQ]},
$aD:function(){return[W.aQ]}}
W.ia.prototype={
gl:function(a){return a.length}}
W.bD.prototype={}
W.ix.prototype={
i:function(a){return String(a)}}
W.iM.prototype={
gl:function(a){return a.length}}
W.b8.prototype={
ghO:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.b(P.E("deltaY is not supported"))},
ghN:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.b(P.E("deltaX is not supported"))},
$ib8:1}
W.cO.prototype={
h7:function(a,b){return a.requestAnimationFrame(H.c5(H.o(b,{func:1,ret:-1,args:[P.a7]}),1))},
eO:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.iX.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iP")
throw H.b(P.E("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.P]},
$av:function(){return[W.P]},
$ih:1,
$ah:function(){return[W.P]},
$ic:1,
$ac:function(){return[W.P]},
$aD:function(){return[W.P]}}
W.e5.prototype={
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(a.width)+" x "+H.k(a.height)},
n:function(a,b){var u
if(b==null)return!1
u=J.Q(b)
if(!u.$iak)return!1
return a.left===u.gbh(b)&&a.top===u.gbk(b)&&a.width===u.gaC(b)&&a.height===u.gax(b)},
gE:function(a){return W.lt(C.e.gE(a.left),C.e.gE(a.top),C.e.gE(a.width),C.e.gE(a.height))},
gax:function(a){return a.height},
gaC:function(a){return a.width}}
W.ja.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaG")
throw H.b(P.E("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aG]},
$av:function(){return[W.aG]},
$ih:1,
$ah:function(){return[W.aG]},
$ic:1,
$ac:function(){return[W.aG]},
$aD:function(){return[W.aG]}}
W.en.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iG")
throw H.b(P.E("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.G]},
$av:function(){return[W.G]},
$ih:1,
$ah:function(){return[W.G]},
$ic:1,
$ac:function(){return[W.G]},
$aD:function(){return[W.G]}}
W.jl.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaN")
throw H.b(P.E("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aN]},
$av:function(){return[W.aN]},
$ih:1,
$ah:function(){return[W.aN]},
$ic:1,
$ac:function(){return[W.aN]},
$aD:function(){return[W.aN]}}
W.jp.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iax")
throw H.b(P.E("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.ax]},
$av:function(){return[W.ax]},
$ih:1,
$ah:function(){return[W.ax]},
$ic:1,
$ac:function(){return[W.ax]},
$aD:function(){return[W.ax]}}
W.iZ.prototype={}
W.ks.prototype={}
W.j_.prototype={}
W.j0.prototype={
$1:function(a){return this.a.$1(H.f(a,"$im"))},
$S:29}
W.D.prototype={
gS:function(a){return new W.dm(a,this.gl(a),[H.c8(this,a,"D",0)])}}
W.dm.prototype={
v:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.scM(J.d5(u.a,t))
u.c=t
return!0}u.scM(null)
u.c=s
return!1},
gJ:function(a){return this.d},
scM:function(a){this.d=H.C(a,H.t(this,0))},
$iaY:1}
W.e4.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.ee.prototype={}
W.ej.prototype={}
W.ek.prototype={}
W.el.prototype={}
W.em.prototype={}
W.eo.prototype={}
W.ep.prototype={}
W.es.prototype={}
W.et.prototype={}
W.eu.prototype={}
W.cV.prototype={}
W.cW.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.eA.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.cX.prototype={}
W.cY.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eR.prototype={}
W.eS.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.eV.prototype={}
P.jm.prototype={
dt:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
cg:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.Q(a)
if(!!u.$iat)return new Date(a.a)
if(!!u.$in_)throw H.b(P.ip("structured clone of RegExp"))
if(!!u.$iaw)return a
if(!!u.$ibJ)return a
if(!!u.$icl)return a
if(!!u.$ibb)return a
if(!!u.$icw||!!u.$ibz||!!u.$icu)return a
if(!!u.$iy){t=q.dt(a)
s=q.b
if(t>=s.length)return H.d(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.k(s,t,r)
u.F(a,new P.jo(p,q))
return p.a}if(!!u.$ic){t=q.dt(a)
p=q.b
if(t>=p.length)return H.d(p,t)
r=p[t]
if(r!=null)return r
return q.hL(a,t)}throw H.b(P.ip("structured clone of other type"))},
hL:function(a,b){var u,t=J.d2(a),s=t.gl(a),r=new Array(s)
C.a.k(this.b,b,r)
for(u=0;u<s;++u)C.a.k(r,u,this.cg(t.j(a,u)))
return r}}
P.jo.prototype={
$2:function(a,b){this.a.a[a]=this.b.cg(b)},
$S:6}
P.eK.prototype={$ibb:1,
gda:function(a){return this.a}}
P.jM.prototype={
$2:function(a,b){this.a[a]=b},
$S:6}
P.jn.prototype={}
P.fD.prototype={
gb8:function(){var u=this.b,t=H.av(u,"v",0),s=W.a0
return new H.h_(new H.iO(u,H.o(new P.fE(),{func:1,ret:P.X,args:[t]}),[t]),H.o(new P.fF(),{func:1,ret:s,args:[t]}),[t,s])},
k:function(a,b,c){var u
H.f(c,"$ia0")
u=this.gb8()
J.mn(u.b.$1(J.k6(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.aE(this.gb8().a)},
j:function(a,b){var u=this.gb8()
return u.b.$1(J.k6(u.a,b))},
gS:function(a){var u=P.kY(this.gb8(),!1,W.a0)
return new J.ap(u,u.length,[H.t(u,0)])},
$av:function(){return[W.a0]},
$ah:function(){return[W.a0]},
$ac:function(){return[W.a0]}}
P.fE.prototype={
$1:function(a){return!!J.Q(H.f(a,"$iG")).$ia0},
$S:27}
P.fF.prototype={
$1:function(a){return H.u(H.f(a,"$iG"),"$ia0")},
$S:53}
P.je.prototype={
gcc:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.q(t)
return H.C(u+t,H.t(this,0))},
gd8:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.q(t)
return H.C(u+t,H.t(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.k(u.a)+", "+H.k(u.b)+") "+H.k(u.c)+" x "+H.k(u.d)},
n:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.Q(b)
if(!!u.$iak){t=p.a
if(t==u.gbh(b)){s=p.b
if(s==u.gbk(b)){r=p.c
if(typeof t!=="number")return t.u()
if(typeof r!=="number")return H.q(r)
q=H.t(p,0)
if(H.C(t+r,q)===u.gcc(b)){t=p.d
if(typeof s!=="number")return s.u()
if(typeof t!=="number")return H.q(t)
u=H.C(s+t,q)===u.gd8(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gE:function(a){var u,t=this,s=t.a,r=J.d6(s),q=t.b,p=J.d6(q),o=t.c
if(typeof s!=="number")return s.u()
if(typeof o!=="number")return H.q(o)
u=H.t(t,0)
o=C.d.gE(H.C(s+o,u))
s=t.d
if(typeof q!=="number")return q.u()
if(typeof s!=="number")return H.q(s)
u=C.d.gE(H.C(q+s,u))
return P.no(P.jc(P.jc(P.jc(P.jc(0,r),p),o),u))}}
P.ak.prototype={
gbh:function(a){return this.a},
gbk:function(a){return this.b},
gaC:function(a){return this.c},
gax:function(a){return this.d}}
P.b0.prototype={$ib0:1}
P.fP.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.U(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ib0")
throw H.b(P.E("Cannot assign element of immutable List."))},
G:function(a,b){return this.j(a,b)},
$av:function(){return[P.b0]},
$ih:1,
$ah:function(){return[P.b0]},
$ic:1,
$ac:function(){return[P.b0]},
$aD:function(){return[P.b0]}}
P.b3.prototype={$ib3:1}
P.hr.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.U(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ib3")
throw H.b(P.E("Cannot assign element of immutable List."))},
G:function(a,b){return this.j(a,b)},
$av:function(){return[P.b3]},
$ih:1,
$ah:function(){return[P.b3]},
$ic:1,
$ac:function(){return[P.b3]},
$aD:function(){return[P.b3]}}
P.hx.prototype={
gl:function(a){return a.length}}
P.hZ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.U(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.S(c)
throw H.b(P.E("Cannot assign element of immutable List."))},
G:function(a,b){return this.j(a,b)},
$av:function(){return[P.i]},
$ih:1,
$ah:function(){return[P.i]},
$ic:1,
$ac:function(){return[P.i]},
$aD:function(){return[P.i]}}
P.p.prototype={
gbT:function(a){return new P.fD(a,new W.iV(a))}}
P.b5.prototype={$ib5:1}
P.ib.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.U(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ib5")
throw H.b(P.E("Cannot assign element of immutable List."))},
G:function(a,b){return this.j(a,b)},
$av:function(){return[P.b5]},
$ih:1,
$ah:function(){return[P.b5]},
$ic:1,
$ac:function(){return[P.b5]},
$aD:function(){return[P.b5]}}
P.ef.prototype={}
P.eg.prototype={}
P.eq.prototype={}
P.er.prototype={}
P.eB.prototype={}
P.eC.prototype={}
P.eI.prototype={}
P.eJ.prototype={}
P.N.prototype={$ih:1,
$ah:function(){return[P.l]},
$ic:1,
$ac:function(){return[P.l]},
$in9:1}
P.f4.prototype={
gl:function(a){return a.length}}
P.f5.prototype={
j:function(a,b){return P.bi(a.get(H.S(b)))},
F:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.i,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bi(t.value[1]))}},
gam:function(a){var u=H.e([],[P.i])
this.F(a,new P.f6(u))
return u},
gl:function(a){return a.size},
k:function(a,b,c){throw H.b(P.E("Not supported"))},
$aah:function(){return[P.i,null]},
$iy:1,
$ay:function(){return[P.i,null]}}
P.f6.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
P.f7.prototype={
gl:function(a){return a.length}}
P.bI.prototype={}
P.hs.prototype={
gl:function(a){return a.length}}
P.e3.prototype={}
P.d9.prototype={$id9:1}
P.dG.prototype={$idG:1}
P.bU.prototype={
iE:function(a,b,c,d,e,f,g){var u,t=J.Q(g)
if(!!t.$ibb)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.oe(g))
return}if(!!t.$ico)t=!0
else t=!1
if(t){this.hm(a,b,c,d,e,f,g)
return}throw H.b(P.d7("Incorrect number or type of arguments"))},
hm:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
a_:function(a,b,c){return a.uniform1f(b,c)},
bl:function(a,b,c){return a.uniform1i(b,c)},
U:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
dY:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
dZ:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
e_:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ibU:1}
P.dJ.prototype={$idJ:1}
P.dP.prototype={$idP:1}
P.dV.prototype={$idV:1}
P.hQ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.U(b,a,null,null,null))
return P.bi(a.item(b))},
k:function(a,b,c){H.f(c,"$iy")
throw H.b(P.E("Cannot assign element of immutable List."))},
G:function(a,b){return this.j(a,b)},
$av:function(){return[[P.y,,,]]},
$ih:1,
$ah:function(){return[[P.y,,,]]},
$ic:1,
$ac:function(){return[[P.y,,,]]},
$aD:function(){return[[P.y,,,]]}}
P.ex.prototype={}
P.ey.prototype={}
O.Y.prototype={
b6:function(a){var u=this
u.sf_(H.e([],[a]))
u.scT(null)
u.scQ(null)
u.scU(null)},
bn:function(a,b,c){var u=this,t=H.av(u,"Y",0)
H.o(b,{func:1,ret:P.X,args:[[P.h,t]]})
t={func:1,ret:-1,args:[P.l,[P.h,t]]}
H.o(a,t)
H.o(c,t)
u.scT(b)
u.scQ(a)
u.scU(c)},
b5:function(a,b){return this.bn(a,null,b)},
bF:function(a){var u
H.n(a,"$ih",[H.av(this,"Y",0)],"$ah")
u=this.b
if(u!=null)return u.$1(a)
return!0},
co:function(a,b){var u
H.n(b,"$ih",[H.av(this,"Y",0)],"$ah")
u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gS:function(a){var u=this.a
return new J.ap(u,u.length,[H.t(u,0)])},
G:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.av(s,"Y",0)
H.C(b,r)
r=[r]
if(H.F(s.bF(H.e([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.co(t,H.e([b],r))}},
bN:function(a,b){var u,t,s=this
H.n(b,"$ih",[H.av(s,"Y",0)],"$ah")
if(H.F(s.bF(b))){u=s.a
t=u.length
C.a.bN(u,b)
s.co(t,b)}},
sf_:function(a){this.a=H.n(a,"$ic",[H.av(this,"Y",0)],"$ac")},
scT:function(a){this.b=H.o(a,{func:1,ret:P.X,args:[[P.h,H.av(this,"Y",0)]]})},
scQ:function(a){this.c=H.o(a,{func:1,ret:-1,args:[P.l,[P.h,H.av(this,"Y",0)]]})},
scU:function(a){H.o(a,{func:1,ret:-1,args:[P.l,[P.h,H.av(this,"Y",0)]]})},
$ih:1}
O.ct.prototype={
gl:function(a){return this.a.length},
gt:function(){var u=this.b
return u==null?this.b=D.R():u},
aD:function(){var u=this.b
if(u!=null)u.B(null)},
gX:function(a){var u=this.a
if(u.length>0)return C.a.gay(u)
else return V.dy()},
dO:function(a){var u=this.a
if(a==null)C.a.h(u,V.dy())
else C.a.h(u,a)
this.aD()},
ca:function(){var u=this.a
if(u.length>0){u.pop()
this.aD()}},
sby:function(a){this.a=H.n(a,"$ic",[V.ab],"$ac")}}
E.fa.prototype={}
E.ao.prototype={
cz:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.ap(u,u.length,[H.t(u,0)]);u.v();){t=u.d
if(t.f==null)t.cz()}},
sbo:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gt().T(0,s.gdH())
u=s.c
if(u!=null)u.gt().h(0,s.gdH())
t=new D.H("shape",r,s.c,[F.dK])
t.b=!0
s.ag(t)}},
sce:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gt().T(0,s.gdJ())
u=s.f
s.f=a
if(a!=null)a.gt().h(0,s.gdJ())
s.cz()
t=new D.H("technique",u,s.f,[O.bV])
t.b=!0
s.ag(t)}},
saP:function(a){var u,t,s=this
if(!J.T(s.r,a)){u=s.r
if(u!=null)u.gt().T(0,s.gdF())
if(a!=null)a.gt().h(0,s.gdF())
s.r=a
t=new D.H("mover",u,a,[U.a5])
t.b=!0
s.ag(t)}},
ac:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aB(0,b,s):null
if(!J.T(q,s.x)){u=s.x
s.x=q
t=new D.H("matrix",u,q,[V.ab])
t.b=!0
s.ag(t)}r=s.f
if(r!=null)r.ac(0,b)
for(r=s.y.a,r=new J.ap(r,r.length,[H.t(r,0)]);r.v();)r.d.ac(0,b)},
aQ:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.gX(s))
else C.a.h(s.a,r.m(0,s.gX(s)))
s.aD()
a.dP(t.f)
s=a.dy
u=(s&&C.a).gay(s)
if(u!=null&&t.d!=null)u.iy(a,t)
for(s=t.y.a,s=new J.ap(s,s.length,[H.t(s,0)]);s.v();)s.d.aQ(a)
a.dN()
a.dx.ca()},
ag:function(a){var u=this.z
if(u!=null)u.B(a)},
a2:function(){return this.ag(null)},
dI:function(a){H.f(a,"$iA")
this.e=null
this.ag(a)},
ik:function(){return this.dI(null)},
dK:function(a){this.ag(H.f(a,"$iA"))},
il:function(){return this.dK(null)},
dG:function(a){this.ag(H.f(a,"$iA"))},
ij:function(){return this.dG(null)},
dE:function(a){this.ag(H.f(a,"$iA"))},
ig:function(){return this.dE(null)},
ie:function(a,b){var u,t,s,r,q,p,o
H.n(b,"$ih",[E.ao],"$ah")
for(u=b.length,t=this.gdD(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.w)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bO()
o.sae(null)
o.saV(null)
o.c=null
o.d=0
p.z=o}H.o(t,s)
if(o.a==null)o.sae(H.e([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a2()},
ii:function(a,b){var u,t
H.n(b,"$ih",[E.ao],"$ah")
for(u=b.gS(b),t=this.gdD();u.v();)u.gJ(u).gt().T(0,t)
this.a2()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
seh:function(a,b){this.y=H.n(b,"$iY",[E.ao],"$aY")},
$icv:1}
E.hz.prototype={
ed:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.at(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.ct()
t=[V.ab]
u.sby(H.e([],t))
u.b=null
u.gt().h(0,new E.hA(s))
s.cy=u
u=new O.ct()
u.sby(H.e([],t))
u.b=null
u.gt().h(0,new E.hB(s))
s.db=u
u=new O.ct()
u.sby(H.e([],t))
u.b=null
u.gt().h(0,new E.hC(s))
s.dx=u
s.shl(H.e([],[O.bV]))
u=s.dy;(u&&C.a).h(u,null)
s.shg(new H.a_([P.i,A.cE]))},
giw:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gX(s)
u=t.db
u=t.z=s.m(0,u.gX(u))
s=u}return s},
dP:function(a){var u=this.dy,t=a==null?(u&&C.a).gay(u):a;(u&&C.a).h(u,t)},
dN:function(){var u=this.dy
if(u.length>1)u.pop()},
shl:function(a){this.dy=H.n(a,"$ic",[O.bV],"$ac")},
shg:function(a){this.fr=H.n(a,"$iy",[P.i,A.cE],"$ay")}}
E.hA.prototype={
$1:function(a){var u
H.f(a,"$iA")
u=this.a
u.ch=u.z=null},
$S:8}
E.hB.prototype={
$1:function(a){var u
H.f(a,"$iA")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:8}
E.hC.prototype={
$1:function(a){var u
H.f(a,"$iA")
u=this.a
u.cx=u.ch=null},
$S:8}
E.dR.prototype={
cr:function(a){H.f(a,"$iA")
this.dR()},
cq:function(){return this.cr(null)},
gi0:function(){var u,t=this,s=Date.now(),r=C.d.a1(P.kT(s-t.cx.a).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.at(s,!1)
return u/r},
cX:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.m()
if(typeof r!=="number")return H.q(r)
u=C.e.c1(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.m()
t=C.e.c1(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.li(C.n,s.giA())}},
dR:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.o(new E.i5(this),{func:1,ret:-1,args:[P.a7]})
C.y.eO(u)
C.y.h7(u,W.lH(t,P.a7))}},
ix:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.cX()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.at(r,!1)
s.y=P.kT(r-s.r.a).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.aD()
r=s.db
C.a.sl(r.a,0)
r.aD()
r=s.dx
C.a.sl(r.a,0)
r.aD()
r=s.dy;(r&&C.a).sl(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.aQ(p.e)}}catch(q){u=H.aD(q)
t=H.c9(q)
P.kK("Error: "+H.k(u))
P.kK("Stack: "+H.k(t))
throw H.b(u)}}}
E.i5.prototype={
$1:function(a){var u
H.lS(a)
u=this.a
if(u.ch){u.ch=!1
u.ix()}},
$S:28}
Z.e1.prototype={$ioF:1}
Z.da.prototype={
bO:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.aD(s)
t=P.B('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.k(u))
throw H.b(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.k(u.e)+"]"}}
Z.iN.prototype={$ioG:1}
Z.db.prototype={
aM:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bO:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].bO(a)},
iK:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aQ:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.d(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.i],p=H.e([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)C.a.h(p,u[s].i(0))
r=H.e([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.as(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.q(p,", ")+"\nAttrs:   "+C.a.q(r,", ")},
seW:function(a){this.b=H.n(a,"$ic",[Z.bt],"$ac")},
$ioO:1}
Z.bt.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.k(H.cD(this.c))+"'")+"]"}}
Z.bh.prototype={
gck:function(a){var u=this.a,t=(u&$.bm().a)!==0?3:0
if((u&$.bl().a)!==0)t+=3
if((u&$.bk().a)!==0)t+=3
if((u&$.bn().a)!==0)t+=2
if((u&$.bG().a)!==0)t+=3
if((u&$.d3().a)!==0)t+=3
if((u&$.d4().a)!==0)t+=4
if((u&$.cc().a)!==0)++t
return(u&$.bj().a)!==0?t+4:t},
hB:function(a){var u,t=$.bm(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bl()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bk()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bn()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bG()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d3()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d4()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cc()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bj()
if((s&t.a)!==0)if(u===a)return t
return $.me()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bh))return!1
return this.a===b.a},
i:function(a){var u=H.e([],[P.i]),t=this.a
if((t&$.bm().a)!==0)C.a.h(u,"Pos")
if((t&$.bl().a)!==0)C.a.h(u,"Norm")
if((t&$.bk().a)!==0)C.a.h(u,"Binm")
if((t&$.bn().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bG().a)!==0)C.a.h(u,"TxtCube")
if((t&$.d3().a)!==0)C.a.h(u,"Clr3")
if((t&$.d4().a)!==0)C.a.h(u,"Clr4")
if((t&$.cc().a)!==0)C.a.h(u,"Weight")
if((t&$.bj().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.q(u,"|")}}
D.fd.prototype={}
D.bO.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.A]}
H.o(b,u)
if(this.a==null)this.sae(H.e([],[u]))
u=this.a;(u&&C.a).h(u,b)},
T:function(a,b){var u,t,s=this
H.o(b,{func:1,ret:-1,args:[D.A]})
u=s.a
u=u==null?null:C.a.a3(u,b)
if(u===!0){u=s.a
t=(u&&C.a).T(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.a3(u,b)
if(u===!0){u=s.b
t=(u&&C.a).T(u,b)||t}return t},
B:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.A()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.F(P.kY(u,!0,{func:1,ret:-1,args:[D.A]}),new D.fA(q))
u=r.b
if(u!=null){r.saV(H.e([],[{func:1,ret:-1,args:[D.A]}]))
C.a.F(u,new D.fB(q))}return!0},
hU:function(){return this.B(null)},
ao:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.B(u)}}},
sae:function(a){this.a=H.n(a,"$ic",[{func:1,ret:-1,args:[D.A]}],"$ac")},
saV:function(a){this.b=H.n(a,"$ic",[{func:1,ret:-1,args:[D.A]}],"$ac")}}
D.fA.prototype={
$1:function(a){var u
H.o(a,{func:1,ret:-1,args:[D.A]})
u=this.a.a
u.b
a.$1(u)},
$S:25}
D.fB.prototype={
$1:function(a){var u
H.o(a,{func:1,ret:-1,args:[D.A]})
u=this.a.a
u.b
a.$1(u)},
$S:25}
D.A.prototype={}
D.bu.prototype={}
D.bv.prototype={}
D.H.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.k(this.d)+" => "+H.k(this.e)}}
X.dc.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dc))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)}}
X.ag.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ag))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)}}
X.bR.prototype={}
X.ds.prototype={
gaN:function(){var u=this.y
return u==null?this.y=D.R():u},
a8:function(a){this.h(0,new X.ag(a,new X.be(!1,!1,!1)))},
cs:function(a){},
el:function(a){var u,t,s
H.n(a,"$ih",[X.ag],"$ah")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.w)(a),++t){s=a[t]
if(C.a.a3(this.a,s))return!1}return!0},
ej:function(a,b){var u=X.ag
H.n(b,"$ih",[u],"$ah")
u=new D.bu([u])
u.b=!0
this.cs(u)},
en:function(a,b){var u=X.ag
H.n(b,"$ih",[u],"$ah")
u=new D.bv([u])
u.b=!0
this.cs(u)},
br:function(a){var u,t=this
H.f(a,"$iA")
if(!t.r&&a instanceof X.bR){u=a.c
if(C.a.a3(t.a,u)){t.r=!0
u=t.y
if(u!=null)u.B(a)}}},
bE:function(a){var u
H.f(a,"$iA")
if(this.r&&a instanceof X.bR){u=a.c
if(C.a.a3(this.a,u))this.r=!1}},
al:function(a){var u,t,s=this
if(s.f!=null)return!1
s.f=a
u=a.b
t=u.b
if(t==null)t=u.b=D.R()
t.h(0,s.gbq())
t=u.a
u=t==null?u.a=D.R():t
u.h(0,s.gbD())
return!0},
$ah:function(){return[X.ag]},
$aY:function(){return[X.ag]}}
X.fO.prototype={
is:function(a){var u,t
this.d.h(0,a.a)
u=this.a
if(u==null)return!1
t=new X.bR(a)
t.b=!0
return u.B(t)},
io:function(a){var u,t
this.d.T(0,a.a)
u=this.b
if(u==null)return!1
t=new X.bR(a)
t.b=!0
return u.B(t)},
sh1:function(a){this.d=H.n(a,"$ile",[P.l],"$ale")}}
X.dv.prototype={}
X.fW.prototype={
aU:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.m()
u=b.b
t=q.ch
if(typeof u!=="number")return u.m()
s=new V.ai(o.a+n*m,o.b+u*t)
t=q.a.gbc()
r=new X.by(a,V.bB(),q.x,t,s)
r.b=!0
q.z=new P.at(p,!1)
q.x=s
return r},
c9:function(a,b){this.r=a.a
return!1},
b1:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.e4()
if(typeof u!=="number")return u.ad()
this.r=(u&~t)>>>0
return!1},
b0:function(a,b){var u=this.d
if(u==null)return!1
u.B(this.aU(a,b))
return!0},
it:function(a){return!1},
fC:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dv(c,r.a.gbc(),b)
s.b=!0
t.B(s)
r.y=new P.at(u,!1)
r.x=V.bB()}}
X.be.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.be))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.F(this.b)?"Alt+":""
return u+(H.F(this.c)?"Shift+":"")}}
X.by.prototype={}
X.hk.prototype={
bw:function(a,b,c){var u=this,t=new P.at(Date.now(),!1),s=u.a.gbc(),r=new X.by(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
c9:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.B(this.bw(a,b,!0))
return!0},
b1:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.e4()
if(typeof t!=="number")return t.ad()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.B(u.bw(a,b,!0))
return!0},
b0:function(a,b){var u=this.d
if(u==null)return!1
u.B(this.bw(a,b,!1))
return!0},
iu:function(a,b){return!1}}
X.hw.prototype={}
X.dT.prototype={}
X.i8.prototype={
aU:function(a,b){var u,t,s,r,q=this
H.n(a,"$ic",[V.ai],"$ac")
u=new P.at(Date.now(),!1)
t=a.length>0?a[0]:V.bB()
s=q.a.gbc()
r=new X.dT(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
ir:function(a){var u
H.n(a,"$ic",[V.ai],"$ac")
u=this.b
if(u==null)return!1
u.B(this.aU(a,!0))
return!0},
ip:function(a){var u
H.n(a,"$ic",[V.ai],"$ac")
u=this.c
if(u==null)return!1
u.B(this.aU(a,!0))
return!0},
iq:function(a){var u
H.n(a,"$ic",[V.ai],"$ac")
u=this.d
if(u==null)return!1
u.B(this.aU(a,!1))
return!0}}
X.dY.prototype={
gbc:function(){var u=this.a,t=C.j.gd9(u).c
t.toString
u=C.j.gd9(u).d
u.toString
return V.lc(0,0,t,u)},
cH:function(a){var u=a.keyCode,t=H.F(a.ctrlKey)||H.F(a.metaKey)
return new X.ag(u,new X.be(t,a.altKey,a.shiftKey))},
aJ:function(a){if(!H.F(a.ctrlKey))H.F(a.metaKey)
a.shiftKey},
bL:function(a){if(!H.F(a.ctrlKey))H.F(a.metaKey)
a.shiftKey},
at:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.A()
u=t.top
if(typeof r!=="number")return r.A()
return new V.ai(s-q,r-u)},
aW:function(a){return new V.a2(a.movementX,a.movementY)},
bH:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.e([],[V.ai])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s){r=u[s]
q=C.e.ah(r.pageX)
C.e.ah(r.pageY)
p=o.left
C.e.ah(r.pageX)
C.a.h(n,new V.ai(q-p,C.e.ah(r.pageY)-o.top))}return n},
aq:function(a){var u=a.buttons,t=H.F(a.ctrlKey)||H.F(a.metaKey)
return new X.dc(u,new X.be(t,a.altKey,a.shiftKey))},
bz:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.A()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.A()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fw:function(a){this.f=!0},
fj:function(a){this.f=!1},
fp:function(a){H.f(a,"$iac")
if(H.F(this.f)&&this.bz(a))a.preventDefault()},
bE:function(a){var u
H.f(a,"$ib_")
if(!H.F(this.f))return
u=this.cH(a)
if(this.b.is(u))a.preventDefault()},
br:function(a){var u
H.f(a,"$ib_")
if(!H.F(this.f))return
u=this.cH(a)
if(this.b.io(u))a.preventDefault()},
fE:function(a){var u,t,s,r,q=this
H.f(a,"$iac")
u=q.a
u.focus()
q.f=!0
q.aJ(a)
if(H.F(q.x)){t=q.aq(a)
s=q.aW(a)
if(q.d.c9(t,s))a.preventDefault()
return}if(H.F(q.r)){q.y=a
u.requestPointerLock()
return}t=q.aq(a)
r=q.at(a)
if(q.c.c9(t,r))a.preventDefault()},
fI:function(a){var u,t,s,r=this
H.f(a,"$iac")
r.aJ(a)
u=r.aq(a)
if(H.F(r.x)){t=r.aW(a)
if(r.d.b1(u,t))a.preventDefault()
return}if(H.F(r.r))return
s=r.at(a)
if(r.c.b1(u,s))a.preventDefault()},
fu:function(a){var u,t,s,r=this
H.f(a,"$iac")
if(!r.bz(a)){r.aJ(a)
u=r.aq(a)
if(H.F(r.x)){t=r.aW(a)
if(r.d.b1(u,t))a.preventDefault()
return}if(H.F(r.r))return
s=r.at(a)
if(r.c.b1(u,s))a.preventDefault()}},
fG:function(a){var u,t,s,r=this
H.f(a,"$iac")
r.aJ(a)
u=r.aq(a)
if(H.F(r.x)){t=r.aW(a)
if(r.d.b0(u,t))a.preventDefault()
return}if(H.F(r.r))return
s=r.at(a)
if(r.c.b0(u,s))a.preventDefault()},
fs:function(a){var u,t,s,r=this
H.f(a,"$iac")
if(!r.bz(a)){r.aJ(a)
u=r.aq(a)
if(H.F(r.x)){t=r.aW(a)
if(r.d.b0(u,t))a.preventDefault()
return}if(H.F(r.r))return
s=r.at(a)
if(r.c.b0(u,s))a.preventDefault()}},
fK:function(a){var u,t,s=this
H.f(a,"$ib8")
s.aJ(a)
u=new V.a2((a&&C.x).ghN(a),C.x.ghO(a)).w(0,180)
if(H.F(s.x)){if(s.d.it(u))a.preventDefault()
return}if(H.F(s.r))return
t=s.at(a)
if(s.c.iu(u,t))a.preventDefault()},
fM:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aq(s.y)
t=s.at(s.y)
s.d.fC(u,t,r)}},
fY:function(a){var u,t=this
H.f(a,"$iaR")
t.a.focus()
t.f=!0
t.bL(a)
u=t.bH(a)
if(t.e.ir(u))a.preventDefault()},
fU:function(a){var u
H.f(a,"$iaR")
this.bL(a)
u=this.bH(a)
if(this.e.ip(u))a.preventDefault()},
fW:function(a){var u
H.f(a,"$iaR")
this.bL(a)
u=this.bH(a)
if(this.e.iq(u))a.preventDefault()},
seP:function(a){this.z=H.n(a,"$ic",[[P.cG,P.O]],"$ac")}}
D.bq.prototype={
ap:function(a){var u
H.f(a,"$iA")
u=this.r
if(u!=null)u.B(a)},
eq:function(){return this.ap(null)},
$iaa:1,
$icv:1}
D.aa.prototype={$icv:1}
D.dt.prototype={
ap:function(a){var u=this.x
if(u!=null)u.B(a)},
cS:function(a){var u
H.f(a,"$iA")
u=this.y
if(u!=null)u.B(a)},
fB:function(){return this.cS(null)},
fO:function(a){var u,t,s
H.n(a,"$ih",[D.aa],"$ah")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.w)(a),++t){s=a[t]
if(s==null||this.eI(s))return!1}return!0},
fd:function(a,b){var u,t,s,r,q,p,o,n=D.aa
H.n(b,"$ih",[n],"$ah")
for(u=b.length,t=this.gcR(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.w)(b),++q){p=H.f(b[q],"$iaa")
if(p instanceof D.bq)C.a.h(this.e,p)
o=p.r
if(o==null){o=new D.bO()
o.sae(null)
o.saV(null)
o.c=null
o.d=0
p.r=o}H.o(t,s)
if(o.a==null)o.sae(H.e([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bu([n])
n.b=!0
this.ap(n)},
fS:function(a,b){var u,t,s,r=D.aa
H.n(b,"$ih",[r],"$ah")
for(u=b.gS(b),t=this.gcR();u.v();){s=u.gJ(u)
C.a.T(this.e,s)
s.gt().T(0,t)}r=new D.bv([r])
r.b=!0
this.ap(r)},
eI:function(a){var u=C.a.a3(this.e,a)
return u},
seo:function(a){this.e=H.n(a,"$ic",[D.bq],"$ac")},
sfZ:function(a){this.f=H.n(a,"$ic",[D.dE],"$ac")},
ser:function(a){this.r=H.n(a,"$ic",[D.dM],"$ac")},
$ah:function(){return[D.aa]},
$aY:function(){return[D.aa]}}
D.dE.prototype={$iaa:1,$icv:1}
D.dM.prototype={$iaa:1,$icv:1}
V.Z.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.Z))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+"]"}}
V.bp.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bp))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.M(u.a,3,0)+", "+V.M(u.b,3,0)+", "+V.M(u.c,3,0)+", "+V.M(u.d,3,0)+"]"}}
V.fz.prototype={}
V.aH.prototype={
ab:function(a,b){var u=this,t=H.e([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.z])
return t},
bf:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.a,g=i.e,f=i.y
if(typeof f!=="number")return H.q(f)
u=g*f
t=i.f
s=i.x
if(typeof s!=="number")return H.q(s)
r=i.d
q=i.b
p=q*f
o=i.c
n=s*o
m=i.r
l=q*t-g*o
if(typeof m!=="number")return m.m()
k=h*(u-t*s)-r*(p-n)+m*l
if(Math.abs(k-0)<$.I().a)return V.mM()
j=1/k
return new V.aH((u-s*t)*j,(n-p)*j,l*j,(m*t-r*f)*j,(h*f-m*o)*j,(r*o-h*t)*j,(r*s-m*g)*j,(m*q-h*s)*j,(h*g-r*q)*j)},
aA:function(a){var u,t,s,r=this,q=a.a,p=a.b,o=a.c
if(typeof o!=="number")return H.q(o)
u=r.r
if(typeof u!=="number")return u.m()
t=r.x
if(typeof t!=="number")return t.m()
s=r.y
if(typeof s!=="number")return s.m()
return new V.L(r.a*q+r.b*p+r.c*o,r.d*q+r.e*p+r.f*o,u*q+t*p+s*o)},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.aH))return!1
u=b.a
t=$.I()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
if(!(Math.abs(b.c-q.c)<s))return!1
if(!(Math.abs(b.d-q.d)<s))return!1
if(!(Math.abs(b.e-q.e)<s))return!1
if(!(Math.abs(b.f-q.f)<s))return!1
u=b.r
r=q.r
t.toString
if(typeof u!=="number")return u.A()
if(typeof r!=="number")return H.q(r)
if(!(Math.abs(u-r)<s))return!1
u=b.x
t=q.x
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.q(t)
if(!(Math.abs(u-t)<s))return!1
u=b.y
t=q.y
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.q(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){var u,t,s,r,q=this,p=[P.z],o=V.c7(H.e([q.a,q.d,q.r],p),3,0),n=V.c7(H.e([q.b,q.e,q.x],p),3,0),m=V.c7(H.e([q.c,q.f,q.y],p),3,0)
p=o.length
if(0>=p)return H.d(o,0)
u="["+o[0]+", "
t=n.length
if(0>=t)return H.d(n,0)
u=u+n[0]+", "
s=m.length
if(0>=s)return H.d(m,0)
u=u+m[0]+",\n"
if(1>=p)return H.d(o,1)
r=" "+o[1]+", "
if(1>=t)return H.d(n,1)
r=r+n[1]+", "
if(1>=s)return H.d(m,1)
r=u+(r+m[1]+",\n")
if(2>=p)return H.d(o,2)
p=" "+o[2]+", "
if(2>=t)return H.d(n,2)
p=p+n[2]+", "
if(2>=s)return H.d(m,2)
return r+(p+m[2]+"]")}}
V.ab.prototype={
ab:function(a,b){var u=this,t=H.e([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.z])
return t},
bf:function(b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.a,c=e.f,b=e.b,a=e.e,a0=d*c-b*a,a1=e.r,a2=e.c,a3=d*a1-a2*a,a4=e.x,a5=e.d,a6=d*a4-a5*a,a7=b*a1-a2*c,a8=b*a4-a5*c,a9=a2*a4-a5*a1,b0=e.y,b1=e.cy
if(typeof b0!=="number")return b0.m()
u=e.z
t=e.cx
if(typeof u!=="number")return u.m()
s=b0*b1-u*t
r=e.db
q=e.Q
if(typeof q!=="number")return q.m()
p=b0*r-q*t
o=e.dx
n=e.ch
m=b0*o-n*t
l=u*r-q*b1
k=u*o-n*b1
j=q*o-n*r
i=a0*j-a3*k+a6*l+a7*m-a8*p+a9*s
if(Math.abs(i-0)<$.I().a)return V.dy()
h=1/i
g=-a
f=-t
return V.b2((c*j-a1*k+a4*l)*h,(-b*j+a2*k-a5*l)*h,(b1*a9-r*a8+o*a7)*h,(-u*a9+q*a8-n*a7)*h,(g*j+a1*m-a4*p)*h,(d*j-a2*m+a5*p)*h,(f*a9+r*a6-o*a3)*h,(b0*a9-q*a6+n*a3)*h,(a*k-c*m+a4*s)*h,(-d*k+b*m-a5*s)*h,(t*a8-b1*a6+o*a0)*h,(-b0*a8+u*a6-n*a0)*h,(g*l+c*p-a1*s)*h,(d*l-b*p+a2*s)*h,(f*a7+b1*a3-r*a0)*h,(b0*a7-u*a3+q*a0)*h)},
m:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=a5.a,a7=b3.a,a8=a5.b,a9=b3.e,b0=a5.c,b1=b3.y
if(typeof b1!=="number")return H.q(b1)
u=a5.d
t=b3.cx
s=b3.b
r=b3.f
q=b3.z
if(typeof q!=="number")return H.q(q)
p=b3.cy
o=b3.c
n=b3.r
m=b3.Q
if(typeof m!=="number")return H.q(m)
l=b3.db
k=b3.d
j=b3.x
i=b3.ch
h=b3.dx
g=a5.e
f=a5.f
e=a5.r
d=a5.x
c=a5.y
if(typeof c!=="number")return c.m()
b=a5.z
if(typeof b!=="number")return b.m()
a=a5.Q
if(typeof a!=="number")return a.m()
a0=a5.ch
a1=a5.cx
a2=a5.cy
a3=a5.db
a4=a5.dx
return V.b2(a6*a7+a8*a9+b0*b1+u*t,a6*s+a8*r+b0*q+u*p,a6*o+a8*n+b0*m+u*l,a6*k+a8*j+b0*i+u*h,g*a7+f*a9+e*b1+d*t,g*s+f*r+e*q+d*p,g*o+f*n+e*m+d*l,g*k+f*j+e*i+d*h,c*a7+b*a9+a*b1+a0*t,c*s+b*r+a*q+a0*p,c*o+b*n+a*m+a0*l,c*k+b*j+a*i+a0*h,a1*a7+a2*a9+a3*b1+a4*t,a1*s+a2*r+a3*q+a4*p,a1*o+a2*n+a3*m+a4*l,a1*k+a2*j+a3*i+a4*h)},
aA:function(a){var u,t,s,r=this,q=a.a,p=a.b,o=a.c
if(typeof o!=="number")return H.q(o)
u=r.y
if(typeof u!=="number")return u.m()
t=r.z
if(typeof t!=="number")return t.m()
s=r.Q
if(typeof s!=="number")return s.m()
return new V.L(r.a*q+r.b*p+r.c*o,r.e*q+r.f*p+r.r*o,u*q+t*p+s*o)},
cf:function(a){var u,t,s,r=this,q=a.a,p=a.b,o=a.c
if(typeof o!=="number")return H.q(o)
u=r.y
if(typeof u!=="number")return u.m()
t=r.z
if(typeof t!=="number")return t.m()
s=r.Q
if(typeof s!=="number")return s.m()
return new V.aj(r.a*q+r.b*p+r.c*o+r.d,r.e*q+r.f*p+r.r*o+r.x,u*q+t*p+s*o+r.ch)},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.ab))return!1
u=b.a
t=$.I()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
if(!(Math.abs(b.c-q.c)<s))return!1
if(!(Math.abs(b.d-q.d)<s))return!1
if(!(Math.abs(b.e-q.e)<s))return!1
if(!(Math.abs(b.f-q.f)<s))return!1
if(!(Math.abs(b.r-q.r)<s))return!1
if(!(Math.abs(b.x-q.x)<s))return!1
u=b.y
r=q.y
t.toString
if(typeof u!=="number")return u.A()
if(typeof r!=="number")return H.q(r)
if(!(Math.abs(u-r)<s))return!1
u=b.z
t=q.z
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.q(t)
if(!(Math.abs(u-t)<s))return!1
u=b.Q
t=q.Q
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.q(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.ch-q.ch)<s))return!1
if(!(Math.abs(b.cx-q.cx)<s))return!1
if(!(Math.abs(b.cy-q.cy)<s))return!1
if(!(Math.abs(b.db-q.db)<s))return!1
if(!(Math.abs(b.dx-q.dx)<s))return!1
return!0},
i:function(a){return this.L()},
C:function(a){var u,t,s,r,q,p=this,o=[P.z],n=V.c7(H.e([p.a,p.e,p.y,p.cx],o),3,0),m=V.c7(H.e([p.b,p.f,p.z,p.cy],o),3,0),l=V.c7(H.e([p.c,p.r,p.Q,p.db],o),3,0),k=V.c7(H.e([p.d,p.x,p.ch,p.dx],o),3,0)
o=n.length
if(0>=o)return H.d(n,0)
u="["+n[0]+", "
t=m.length
if(0>=t)return H.d(m,0)
u=u+m[0]+", "
s=l.length
if(0>=s)return H.d(l,0)
u=u+l[0]+", "
r=k.length
if(0>=r)return H.d(k,0)
u=u+k[0]+",\n"
q=a+" "
if(1>=o)return H.d(n,1)
q=q+n[1]+", "
if(1>=t)return H.d(m,1)
q=q+m[1]+", "
if(1>=s)return H.d(l,1)
q=q+l[1]+", "
if(1>=r)return H.d(k,1)
q=u+(q+k[1]+",\n")
u=a+" "
if(2>=o)return H.d(n,2)
u=u+n[2]+", "
if(2>=t)return H.d(m,2)
u=u+m[2]+", "
if(2>=s)return H.d(l,2)
u=u+l[2]+", "
if(2>=r)return H.d(k,2)
u=q+(u+k[2]+",\n")
q=a+" "
if(3>=o)return H.d(n,3)
q=q+n[3]+", "
if(3>=t)return H.d(m,3)
q=q+m[3]+", "
if(3>=s)return H.d(l,3)
q=q+l[3]+", "
if(3>=r)return H.d(k,3)
return u+(q+k[3]+"]")},
L:function(){return this.C("")}}
V.ai.prototype={
A:function(a,b){return new V.ai(this.a-b.a,this.b-b.b)},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ai))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+"]"}}
V.aj.prototype={
A:function(a,b){var u=this.c,t=b.c
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.q(t)
return new V.aj(this.a-b.a,this.b-b.b,u-t)},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.aj))return!1
u=b.a
t=$.I()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
u=b.c
r=q.c
t.toString
if(typeof u!=="number")return u.A()
if(typeof r!=="number")return H.q(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+"]"}}
V.cB.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cB))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.M(u.a,3,0)+", "+V.M(u.b,3,0)+", "+V.M(u.c,3,0)+", "+V.M(u.d,3,0)+"]"}}
V.dH.prototype={
gan:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dH))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.M(u.a,3,0)+", "+V.M(u.b,3,0)+", "+V.M(u.c,3,0)+", "+V.M(u.d,3,0)+"]"}}
V.a2.prototype={
c5:function(a){return Math.sqrt(this.K(this))},
K:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.q(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.q(t)
return s*r+u*t},
m:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.m()
u=this.b
if(typeof u!=="number")return u.m()
return new V.a2(t*b,u*b)},
w:function(a,b){var u,t
if(Math.abs(b-0)<$.I().a){u=$.lo
return u==null?$.lo=new V.a2(0,0):u}u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
return new V.a2(u/b,t/b)},
n:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a2))return!1
u=b.a
t=this.a
s=$.I()
s.toString
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.q(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.q(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+"]"}}
V.L.prototype={
c5:function(a){return Math.sqrt(this.K(this))},
K:function(a){var u=this.c,t=a.c
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.q(t)
return this.a*a.a+this.b*a.b+u*t},
c6:function(a,b){var u=this.a,t=this.b,s=this.c,r=a.c
if(typeof r!=="number")return r.A()
if(typeof s!=="number")return H.q(s)
return new V.L(u+b*(a.a-u),t+b*(a.b-t),s+b*(r-s))},
aY:function(a){var u,t,s,r,q=this.b,p=a.c
if(typeof p!=="number")return H.q(p)
u=this.c
t=a.b
if(typeof u!=="number")return u.m()
s=a.a
r=this.a
return new V.L(q*p-u*t,u*s-r*p,r*t-q*s)},
u:function(a,b){var u=this.c,t=b.c
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.q(t)
return new V.L(this.a+b.a,this.b+b.b,u+t)},
O:function(a){var u=this.c
if(typeof u!=="number")return u.O()
return new V.L(-this.a,-this.b,-u)},
w:function(a,b){var u
if(Math.abs(b-0)<$.I().a)return V.e0()
u=this.c
if(typeof u!=="number")return u.w()
return new V.L(this.a/b,this.b/b,u/b)},
dC:function(){var u,t=$.I(),s=t.a
if(!(Math.abs(0-this.a)<s))return!1
if(!(Math.abs(0-this.b)<s))return!1
u=this.c
t.toString
if(typeof u!=="number")return H.q(u)
if(!(Math.abs(0-u)<s))return!1
return!0},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.L))return!1
u=b.a
t=$.I()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
u=b.c
r=q.c
t.toString
if(typeof u!=="number")return u.A()
if(typeof r!=="number")return H.q(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+"]"}}
U.fg.prototype={
bs:function(a){var u=this.a,t=this.c,s=this.b
if(u)return V.k3(a,t,s)
else{if(a<t)u=t
else u=a>s?s:a
return u}},
gt:function(){var u=this.y
return u==null?this.y=D.R():u},
I:function(a){var u=this.y
if(u!=null)u.B(a)},
sci:function(a,b){var u=this.a
if(u!==b){this.a=b
u=new D.H("wrap",u,b,[P.X])
u.b=!0
this.I(u)}},
sc7:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.I().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bs(u)}s=new D.H("maximumLocation",s,t.b,[P.z])
s.b=!0
t.I(s)}},
sc8:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.I().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bs(u)}s=new D.H("minimumLocation",s,t.c,[P.z])
s.b=!0
t.I(s)}},
sZ:function(a,b){var u,t=this
b=t.bs(b==null?0:b)
u=t.d
if(!(Math.abs(u-b)<$.I().a)){t.d=b
u=new D.H("location",u,b,[P.z])
u.b=!0
t.I(u)}},
sb_:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.I().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.H("maximumVelocity",r,a,[P.z])
r.b=!0
s.I(r)}},
sR:function(a){var u=this,t=a==null?0:a,s=u.e
a=-s
if(!(t<a))a=t>s?s:t
t=u.f
if(!(Math.abs(t-a)<$.I().a)){u.f=a
t=new D.H("velocity",t,a,[P.z])
t.b=!0
u.I(t)}},
sav:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.I().a)){this.x=a
u=new D.H("dampening",u,a,[P.z])
u.b=!0
this.I(u)}},
ac:function(a,b){var u,t,s,r=this,q=r.f,p=$.I().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sZ(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.I().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sR(u)}}}
U.ci.prototype={
gt:function(){var u=this.b
return u==null?this.b=D.R():u},
sX:function(a,b){var u,t,s,r=this
if(!J.T(r.a,b)){u=r.a
r.a=b
t=new D.H("matrix",u,b,[V.ab])
t.b=!0
s=r.b
if(s!=null)s.B(t)}},
aB:function(a,b,c){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ci))return!1
return J.T(this.a,b.a)},
i:function(a){return"Constant: "+this.a.C("          ")}}
U.cn.prototype={
gt:function(){var u=this.e
return u==null?this.e=D.R():u},
I:function(a){var u
H.f(a,"$iA")
u=this.e
if(u!=null)u.B(a)},
a6:function(){return this.I(null)},
fb:function(a,b){var u,t,s,r,q,p,o,n=U.a5
H.n(b,"$ih",[n],"$ah")
for(u=b.length,t=this.gaE(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.w)(b),++q){p=b[q]
if(p!=null){o=p.gt()
o.toString
H.o(t,s)
if(o.a==null)o.sae(H.e([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bu([n])
n.b=!0
this.I(n)},
fQ:function(a,b){var u,t,s=U.a5
H.n(b,"$ih",[s],"$ah")
for(u=b.gS(b),t=this.gaE();u.v();)u.gJ(u).gt().T(0,t)
s=new D.bv([s])
s.b=!0
this.I(s)},
aB:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.M()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.ap(r,r.length,[H.t(r,0)]),u=null;r.v();){q=r.d
if(q!=null){t=q.aB(0,b,c)
if(t!=null)u=u==null?t:t.m(0,u)}}s.f=u==null?V.dy():u
r=s.e
if(r!=null)r.ao(0)}return s.f},
n:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cn))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.d(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.d(r,t)
if(!J.T(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ah:function(){return[U.a5]},
$aY:function(){return[U.a5]},
$ia5:1}
U.a5.prototype={}
U.dI.prototype={
gt:function(){var u=this.y
return u==null?this.y=D.R():u},
I:function(a){var u=this.y
if(u!=null)u.B(a)},
se2:function(a){var u
a=V.k3(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.I().a)){this.a=a
u=new D.H("yaw",u,a,[P.z])
u.b=!0
this.I(u)}},
sdM:function(a,b){var u
b=V.k3(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.I().a)){this.b=b
u=new D.H("pitch",u,b,[P.z])
u.b=!0
this.I(u)}},
sdS:function(a){var u
a=V.k3(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.I().a)){this.c=a
u=new D.H("roll",u,a,[P.z])
u.b=!0
this.I(u)}},
aB:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(r<q){s.r=q
r=s.y
if(r!=null)++r.d
s.se2(s.a+s.d*b.y)
s.sdM(0,s.b+s.e*b.y)
s.sdS(s.c+s.f*b.y)
r=s.c
u=Math.cos(r)
t=Math.sin(r)
s.x=V.b2(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1).m(0,V.l1(s.b)).m(0,V.kj(s.a))
r=s.y
if(r!=null)r.ao(0)}return s.x},
n:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.dI))return!1
u=r.a
t=b.a
s=$.I().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
i:function(a){var u=this
return"Rotater: ["+V.M(u.a,3,0)+", "+V.M(u.b,3,0)+", "+V.M(u.c,3,0)+"], ["+V.M(u.d,3,0)+", "+V.M(u.e,3,0)+", "+V.M(u.f,3,0)+"]"}}
U.dZ.prototype={
gt:function(){var u=this.fx
return u==null?this.fx=D.R():u},
I:function(a){var u
H.f(a,"$iA")
u=this.fx
if(u!=null)u.B(a)},
a6:function(){return this.I(null)},
al:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
u=a.c
t=u.b
u=t==null?u.b=D.R():t
u.h(0,s.gf4())
u=s.a.c
t=u.d
u=t==null?u.d=D.R():t
u.h(0,s.gf6())
u=s.a.c
t=u.c
u=t==null?u.c=D.R():t
u.h(0,s.gf8())
u=s.a.d
t=u.f
u=t==null?u.f=D.R():t
u.h(0,s.gf0())
u=s.a.d
t=u.d
u=t==null?u.d=D.R():t
u.h(0,s.gf2())
u=s.a.e
t=u.b
u=t==null?u.b=D.R():t
u.h(0,s.ghs())
u=s.a.e
t=u.d
u=t==null?u.d=D.R():t
u.h(0,s.ghq())
u=s.a.e
t=u.c
u=t==null?u.c=D.R():t
u.h(0,s.gho())
return!0},
ak:function(a){var u=a.a,t=a.b
if(H.F(this.f)){if(typeof u!=="number")return u.O()
u=-u}if(H.F(this.r)){if(typeof t!=="number")return t.O()
t=-t}return new V.a2(u,t)},
f5:function(a){var u=this
a=H.u(H.f(a,"$iA"),"$iby")
if(!J.T(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
f7:function(a){var u,t,s,r,q,p,o,n=this
a=H.u(H.f(a,"$iA"),"$iby")
if(!H.F(n.cx))return
if(H.F(n.ch)){u=a.d.A(0,a.y)
u=new V.a2(u.a,u.b)
u=u.K(u)
t=n.Q
if(typeof t!=="number")return H.q(t)
if(u<t)return
n.ch=!1}if(H.F(n.e)){u=a.c
t=a.d.A(0,a.y)
u=n.ak(new V.a2(t.a,t.b).m(0,2).w(0,u.gan()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.q(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.q(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.A(0,a.y)
r=n.ak(new V.a2(s.a,s.b).m(0,2).w(0,u.gan()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.q(p)
o=n.cy
if(typeof o!=="number")return H.q(o)
s.sZ(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.q(q)
s=n.db
if(typeof s!=="number")return H.q(s)
o.sZ(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.A(0,a.z)
n.dx=n.ak(new V.a2(t.a,t.b).m(0,2).w(0,u.gan()))}n.a6()},
f9:function(a){var u,t,s,r=this
H.f(a,"$iA")
if(!H.F(r.cx))return
r.cx=!1
if(H.F(r.ch))return
u=r.dx
if(u.K(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.q(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.q(u)
s.sR(-t*10*u)
r.a6()}},
f1:function(a){var u=this
if(H.u(H.f(a,"$iA"),"$idv").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
f3:function(a){var u,t,s,r,q,p,o,n=this
a=H.u(H.f(a,"$iA"),"$iby")
if(!J.T(n.d,a.x.b))return
u=a.c
t=a.d
s=t.A(0,a.y)
r=n.ak(new V.a2(s.a,s.b).m(0,2).w(0,u.gan()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.q(p)
o=n.cy
if(typeof o!=="number")return H.q(o)
s.sZ(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.q(q)
s=n.db
if(typeof s!=="number")return H.q(s)
o.sZ(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.A(0,a.z)
n.dx=n.ak(new V.a2(t.a,t.b).m(0,2).w(0,u.gan()))
n.a6()},
ht:function(a){var u=this
H.f(a,"$iA")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hr:function(a){var u,t,s,r,q,p,o,n=this
a=H.u(H.f(a,"$iA"),"$idT")
if(!H.F(n.cx))return
if(H.F(n.ch)){u=a.d.A(0,a.y)
u=new V.a2(u.a,u.b)
u=u.K(u)
t=n.Q
if(typeof t!=="number")return H.q(t)
if(u<t)return
n.ch=!1}if(H.F(n.e)){u=a.c
t=a.d.A(0,a.y)
u=n.ak(new V.a2(t.a,t.b).m(0,2).w(0,u.gan()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.q(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.q(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.A(0,a.y)
r=n.ak(new V.a2(s.a,s.b).m(0,2).w(0,u.gan()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.q(p)
o=n.cy
if(typeof o!=="number")return H.q(o)
s.sZ(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.q(q)
s=n.db
if(typeof s!=="number")return H.q(s)
o.sZ(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.A(0,a.z)
n.dx=n.ak(new V.a2(t.a,t.b).m(0,2).w(0,u.gan()))}n.a6()},
hp:function(a){var u,t,s,r=this
H.f(a,"$iA")
if(!H.F(r.cx))return
r.cx=!1
if(H.F(r.ch))return
u=r.dx
if(u.K(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.q(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.q(u)
s.sR(-t*10*u)
r.a6()}},
aB:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.M()
if(s<r){t.dy=r
u=b.y
t.c.ac(0,u)
t.b.ac(0,u)
t.fr=V.kj(t.b.d).m(0,V.l1(t.c.d))}return t.fr},
$ia5:1}
U.e_.prototype={
gt:function(){var u=this.dx
return u==null?this.dx=D.R():u},
I:function(a){var u
H.f(a,"$iA")
u=this.dx
if(u!=null)u.B(a)},
a6:function(){return this.I(null)},
gZ:function(a){return new V.aj(this.r.d,this.x.d,this.y.d)},
fA:function(a){this.I(H.f(a,"$iA"))},
bM:function(a,b,c,d,e){if(a.r){if(typeof e!=="number")return e.u()
e+=d}else if(b.r){if(typeof e!=="number")return e.A()
e-=d}else{if(typeof e!=="number")return e.V()
e=e>0?e-Math.min(e,c):e+Math.min(-e,c)}return e},
aB:function(a,b,c){var u,t,s,r,q=this,p=q.cy,o=b.e
if(typeof p!=="number")return p.M()
if(p<o){q.cy=o
q.gZ(q)
u=b.y
if(u>0.1)u=0.1
p=q.ch
if(typeof p!=="number")return p.m()
t=p*u
p=q.cx
if(typeof p!=="number")return p.m()
s=p*u
r=new V.L(q.r.f,q.x.f,q.y.f)
p=q.Q
if(p!=null)r=p.aA(r)
r=new V.L(q.bM(q.a,q.b,t,s,r.a),q.bM(q.c,q.d,t,s,r.b),q.bM(q.e,q.f,t,s,r.c))
p=q.z
if(p!=null)r=p.aA(r)
q.r.sR(r.a)
q.x.sR(r.b)
q.y.sR(r.c)
q.r.ac(0,u)
q.x.ac(0,u)
q.y.ac(0,u)
q.db=V.l2(q.r.d,-q.x.d,q.y.d)}return q.db},
seH:function(a){this.dy=H.o(a,{func:1,ret:V.aj,args:[V.aj,V.aj]})},
$ia5:1}
M.dj.prototype={
aG:function(a){var u
H.f(a,"$iA")
u=this.y
if(u!=null)u.B(a)},
es:function(){return this.aG(null)},
fl:function(a,b){var u,t,s,r,q,p,o,n=E.ao
H.n(b,"$ih",[n],"$ah")
for(u=b.length,t=this.gaF(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.w)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bO()
o.sae(null)
o.saV(null)
o.c=null
o.d=0
p.z=o}H.o(t,s)
if(o.a==null)o.sae(H.e([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bu([n])
n.b=!0
this.aG(n)},
fn:function(a,b){var u,t,s=E.ao
H.n(b,"$ih",[s],"$ah")
for(u=b.gS(b),t=this.gaF();u.v();)u.gJ(u).gt().T(0,t)
s=new D.bv([s])
s.b=!0
this.aG(s)},
gt:function(){var u=this.y
return u==null?this.y=D.R():u},
aQ:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
a.dP(f.d)
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
if(typeof s!=="number")return H.q(s)
o=C.e.ah(p*s)
p=q.b
if(typeof r!=="number")return H.q(r)
n=C.e.ah(p*r)
p=C.e.ah(q.c*s)
a.c=p
q=C.e.ah(q.d*r)
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
i=V.b2(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.dO(i)
t=$.l6
if(t==null){t=V.l8()
q=V.kq()
p=$.lp
t=V.l0(t,q,p==null?$.lp=new V.L(0,0,-1):p)
$.l6=t
h=t}else h=t
t=u.b
if(t!=null){g=t.aB(0,a,u)
if(g!=null)h=g.m(0,h)}a.db.dO(h)
for(u=f.e.a,u=new J.ap(u,u.length,[H.t(u,0)]);u.v();)u.d.ac(0,a)
for(u=f.e.a,u=new J.ap(u,u.length,[H.t(u,0)]);u.v();)u.d.aQ(a)
f.b.toString
a.cy.ca()
a.db.ca()
f.c.toString
a.dN()},
seG:function(a,b){this.e=H.n(b,"$iY",[E.ao],"$aY")},
$ioL:1}
A.d8.prototype={}
A.f3.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hV:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
hP:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.af.prototype={
gai:function(a){var u=this.a?1:0,t=this.b?2:0
return u|t|0},
i:function(a){var u=this.a?1:0,t=this.b?2:0
return""+(u|t|0)},
n:function(a,b){if(b==null)return!1
if(!(b instanceof A.af))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.h1.prototype={
ec:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
b8.z=c3
u=new P.a4("")
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
A.nX(c3,u)
A.nZ(c3,u)
A.nY(c3,u)
A.o0(c3,u)
A.o1(c3,u)
A.o_(c3,u)
A.o2(c3,u)
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
m=A.nW(b8.z)
b8.c=n
b8.d=m
b8.e=b8.cI(n,35633)
b8.f=b8.cI(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!H.F(H.lL(s.getProgramParameter(b8.r,35714)))){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.x(P.B("Failed to link shader: "+H.k(l)))}b8.hd()
b8.hf()
b8.Q=b8.x.j(0,"posAttr")
b8.cx=b8.x.j(0,"normAttr")
b8.ch=b8.x.j(0,"binmAttr")
b8.cy=b8.x.j(0,"txt2DAttr")
b8.db=b8.x.j(0,"txtCubeAttr")
b8.dx=b8.x.j(0,"bendAttr")
if(c3.dx)b8.id=H.u(b8.y.H(0,"invViewMat"),"$iau")
if(t)b8.dy=H.u(b8.y.H(0,"objMat"),"$iau")
if(r)b8.fr=H.u(b8.y.H(0,"viewObjMat"),"$iau")
b8.fy=H.u(b8.y.H(0,"projViewObjMat"),"$iau")
if(c3.ry)b8.k1=H.u(b8.y.H(0,"txt2DMat"),"$icM")
if(c3.x1)b8.k2=H.u(b8.y.H(0,"txtCubeMat"),"$iau")
if(c3.x2)b8.k3=H.u(b8.y.H(0,"colorMat"),"$iau")
b8.seB(H.e([],[A.au]))
t=c3.y2
if(t>0){b8.k4=H.f(b8.y.H(0,"bendMatCount"),"$iaz")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.j(0,q)
if(j==null)H.x(P.B(c0+q+c1));(s&&C.a).h(s,H.u(j,"$iau"))}}t=c3.a
if(t.a)b8.r2=H.u(b8.y.H(0,"emissionClr"),"$iV")
if(t.b)b8.rx=H.u(b8.y.H(0,"emissionTxt"),"$iam")
t=c3.b
if(t.a)b8.x1=H.u(b8.y.H(0,"ambientClr"),"$iV")
if(t.b)b8.x2=H.u(b8.y.H(0,"ambientTxt"),"$iam")
t=c3.c
if(t.a)b8.y2=H.u(b8.y.H(0,"diffuseClr"),"$iV")
if(t.b)b8.aw=H.u(b8.y.H(0,"diffuseTxt"),"$iam")
t=c3.d
if(t.a)b8.dd=H.u(b8.y.H(0,"invDiffuseClr"),"$iV")
if(t.b)b8.de=H.u(b8.y.H(0,"invDiffuseTxt"),"$iam")
t=c3.e
s=t.a
if(s||t.b||!1){b8.dh=H.u(b8.y.H(0,"shininess"),"$iae")
if(s)b8.df=H.u(b8.y.H(0,"specularClr"),"$iV")
if(t.b)b8.dg=H.u(b8.y.H(0,"specularTxt"),"$iam")}if(c3.f.b)b8.di=H.u(b8.y.H(0,"bumpTxt"),"$iam")
if(c3.cy){b8.dj=H.u(b8.y.H(0,"envSampler"),"$ibY")
t=c3.r
if(t.a)b8.dk=H.u(b8.y.H(0,"reflectClr"),"$iV")
if(t.b)b8.dl=H.u(b8.y.H(0,"reflectTxt"),"$iam")
t=c3.x
s=t.a
if(s||t.b||!1){b8.dm=H.u(b8.y.H(0,"refraction"),"$iae")
if(s)b8.dn=H.u(b8.y.H(0,"refractClr"),"$iV")
if(t.b)b8.dq=H.u(b8.y.H(0,"refractTxt"),"$iam")}}t=c3.y
if(t.a)b8.dr=H.u(b8.y.H(0,"alpha"),"$iae")
if(t.b)b8.ds=H.u(b8.y.H(0,"alphaTxt"),"$iam")
t=P.l
s=[t,A.az]
b8.seM(new H.a_(s))
b8.seN(new H.a_([t,[P.c,A.bW]]))
b8.sh_(new H.a_(s))
b8.sh0(new H.a_([t,[P.c,A.bX]]))
b8.shi(new H.a_(s))
b8.shj(new H.a_([t,[P.c,A.bZ]]))
if(c3.id){for(t=c3.z,s=t.length,r=[A.bW],i=0;i<t.length;t.length===s||(0,H.w)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.k(g)
e=H.e([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.ad()
p=(g&1)!==0
if(p){o=b8.y
d=f+"s["+k+"].objUp"
j=o.j(0,d)
if(j==null)H.x(P.B(c0+d+c1))
H.u(j,"$iV")
o=b8.y
d=f+"s["+k+"].objRight"
c=o.j(0,d)
if(c==null)H.x(P.B(c0+d+c1))
H.u(c,"$iV")
o=b8.y
d=f+"s["+k+"].objDir"
b=o.j(0,d)
if(b==null)H.x(P.B(c0+d+c1))
H.u(b,"$iV")
a=b
a0=c
a1=j}else{a=b9
a0=a
a1=a0}o=b8.y
d=f+"s["+k+"].viewDir"
j=o.j(0,d)
if(j==null)H.x(P.B(c0+d+c1))
H.u(j,"$iV")
o=b8.y
d=f+"s["+k+"].color"
c=o.j(0,d)
if(c==null)H.x(P.B(c0+d+c1))
H.u(c,"$iV")
if(p){p=b8.y
o=f+"sTexture2D"+k
b=p.j(0,o)
if(b==null)H.x(P.B(c0+o+c1))
H.u(b,"$iam")
a2=b}else a2=b9
C.a.h(e,new A.bW(a1,a0,a,j,c,a2))}b8.bX.k(0,g,e)
q=b8.bW
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.x(P.B(c0+o+c1))
q.k(0,g,H.f(j,"$iaz"))}for(t=c3.Q,s=t.length,r=[A.bX],i=0;i<t.length;t.length===s||(0,H.w)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.k(g)
e=H.e([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.j(0,o)
if(j==null)H.x(P.B(c0+o+c1))
H.u(j,"$iV")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.j(0,o)
if(c==null)H.x(P.B(c0+o+c1))
H.u(c,"$iV")
p=b8.y
o=f+"s["+k+"].color"
b=p.j(0,o)
if(b==null)H.x(P.B(c0+o+c1))
H.u(b,"$iV")
if(typeof g!=="number")return g.ad()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
a3=p.j(0,o)
if(a3==null)H.x(P.B(c0+o+c1))
H.u(a3,"$icM")
a4=a3}else a4=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
a3=p.j(0,o)
if(a3==null)H.x(P.B(c0+o+c1))
H.u(a3,"$ibY")
a2=a3}else a2=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
a3=p.j(0,o)
if(a3==null)H.x(P.B(c0+o+c1))
H.u(a3,"$ibY")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a5=p.j(0,o)
if(a5==null)H.x(P.B(c0+o+c1))
H.u(a5,"$icL")
a6=a3
a7=a5}else{a6=b9
a7=a6}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
a3=p.j(0,o)
if(a3==null)H.x(P.B(c0+o+c1))
H.u(a3,"$iae")
p=b8.y
o=f+"s["+k+"].att1"
a5=p.j(0,o)
if(a5==null)H.x(P.B(c0+o+c1))
H.u(a5,"$iae")
p=b8.y
o=f+"s["+k+"].att2"
a8=p.j(0,o)
if(a8==null)H.x(P.B(c0+o+c1))
H.u(a8,"$iae")
a9=a8
b0=a5
b1=a3}else{a9=b9
b0=a9
b1=b0}C.a.h(e,new A.bX(j,c,a4,b,a2,a6,a7,b1,b0,a9))}b8.bZ.k(0,g,e)
q=b8.bY
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.x(P.B(c0+o+c1))
q.k(0,g,H.f(j,"$iaz"))}for(t=c3.ch,s=t.length,r=[A.bZ],i=0;i<t.length;t.length===s||(0,H.w)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.k(g)
e=H.e([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.j(0,o)
if(j==null)H.x(P.B(c0+o+c1))
H.u(j,"$iV")
p=b8.y
o=f+"s["+k+"].objDir"
c=p.j(0,o)
if(c==null)H.x(P.B(c0+o+c1))
H.u(c,"$iV")
p=b8.y
o=f+"s["+k+"].viewPnt"
b=p.j(0,o)
if(b==null)H.x(P.B(c0+o+c1))
H.u(b,"$iV")
p=b8.y
o=f+"s["+k+"].color"
a3=p.j(0,o)
if(a3==null)H.x(P.B(c0+o+c1))
H.u(a3,"$iV")
if(typeof g!=="number")return g.ad()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a5=p.j(0,o)
if(a5==null)H.x(P.B(c0+o+c1))
H.u(a5,"$iV")
p=b8.y
o=f+"s["+k+"].objRight"
a8=p.j(0,o)
if(a8==null)H.x(P.B(c0+o+c1))
H.u(a8,"$iV")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.j(0,o)
if(b2==null)H.x(P.B(c0+o+c1))
H.u(b2,"$iae")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.j(0,o)
if(b3==null)H.x(P.B(c0+o+c1))
H.u(b3,"$iae")
b4=b3
b5=b2
a0=a8
a1=a5}else{b4=b9
b5=b4
a0=b5
a1=a0}p=(g&2)!==0
if(p){o=b8.y
d=f+"s["+k+"].shadowAdj"
a5=o.j(0,d)
if(a5==null)H.x(P.B(c0+d+c1))
H.u(a5,"$icL")
a7=a5}else a7=b9
if((g&8)!==0){o=b8.y
d=f+"s["+k+"].cutoff"
a5=o.j(0,d)
if(a5==null)H.x(P.B(c0+d+c1))
H.u(a5,"$iae")
o=b8.y
d=f+"s["+k+"].coneAngle"
a8=o.j(0,d)
if(a8==null)H.x(P.B(c0+d+c1))
H.u(a8,"$iae")
b6=a8
b7=a5}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
d=f+"s["+k+"].att0"
a5=o.j(0,d)
if(a5==null)H.x(P.B(c0+d+c1))
H.u(a5,"$iae")
o=b8.y
d=f+"s["+k+"].att1"
a8=o.j(0,d)
if(a8==null)H.x(P.B(c0+d+c1))
H.u(a8,"$iae")
o=b8.y
d=f+"s["+k+"].att2"
b2=o.j(0,d)
if(b2==null)H.x(P.B(c0+d+c1))
H.u(b2,"$iae")
a9=b2
b0=a8
b1=a5}else{a9=b9
b0=a9
b1=b0}if((g&1)!==0){o=b8.y
d=f+"sTexture2D"+k
a5=o.j(0,d)
if(a5==null)H.x(P.B(c0+d+c1))
H.u(a5,"$iam")
a2=a5}else a2=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a5=p.j(0,o)
if(a5==null)H.x(P.B(c0+o+c1))
H.u(a5,"$iam")
a6=a5}else a6=b9
C.a.h(e,new A.bZ(j,c,b,a3,a1,a0,b5,b4,a7,b7,b6,b1,b0,a9,a2,a6))}b8.c0.k(0,g,e)
q=b8.c_
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.x(P.B(c0+o+c1))
q.k(0,g,H.f(j,"$iaz"))}}},
af:function(a,b){if(b!=null&&b.d)a.e5(b)},
hc:function(a,b){},
seB:function(a){this.r1=H.n(a,"$ic",[A.au],"$ac")},
seM:function(a){this.bW=H.n(a,"$iy",[P.l,A.az],"$ay")},
seN:function(a){this.bX=H.n(a,"$iy",[P.l,[P.c,A.bW]],"$ay")},
sh_:function(a){this.bY=H.n(a,"$iy",[P.l,A.az],"$ay")},
sh0:function(a){this.bZ=H.n(a,"$iy",[P.l,[P.c,A.bX]],"$ay")},
shi:function(a){this.c_=H.n(a,"$iy",[P.l,A.az],"$ay")},
shj:function(a){this.c0=H.n(a,"$iy",[P.l,[P.c,A.bZ]],"$ay")}}
A.aF.prototype={
i:function(a){return"dirLight"+H.k(this.a)}}
A.aK.prototype={
i:function(a){return"pointLight"+H.k(this.a)}}
A.aO.prototype={
i:function(a){return"spotLight"+H.k(this.a)}}
A.h4.prototype={
i:function(a){return this.aw}}
A.bW.prototype={}
A.bX.prototype={}
A.bZ.prototype={}
A.cE.prototype={
ef:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cI:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.F(H.lL(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.b(P.B("Error compiling shader '"+H.k(s)+"': "+H.k(u)))}return s},
hd:function(){var u,t,s,r=this,q=H.e([],[A.d8]),p=r.a,o=H.a9(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.q(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.d8(p,t.name,s))}r.x=new A.f3(q)},
hf:function(){var u,t,s,r=this,q=H.e([],[A.dU]),p=r.a,o=H.a9(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.q(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.hM(t.type,t.size,t.name,s))}r.y=new A.il(q)},
aI:function(a,b,c){var u=this.a
if(a===1)return new A.az(u,b,c)
else return A.km(u,this.r,b,a,c)},
eJ:function(a,b,c){var u=this.a
if(a===1)return new A.am(u,b,c)
else return A.km(u,this.r,b,a,c)},
eK:function(a,b,c){var u=this.a
if(a===1)return new A.bY(u,b,c)
else return A.km(u,this.r,b,a,c)},
bb:function(a,b){return new P.ea(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.k(b)+"."))},
hM:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aI(b,c,d)
case 5121:return u.aI(b,c,d)
case 5122:return u.aI(b,c,d)
case 5123:return u.aI(b,c,d)
case 5124:return u.aI(b,c,d)
case 5125:return u.aI(b,c,d)
case 5126:return new A.ae(u.a,c,d)
case 35664:return new A.ih(u.a,c,d)
case 35665:return new A.V(u.a,c,d)
case 35666:return new A.cL(u.a,c,d)
case 35667:return new A.ii(u.a,c,d)
case 35668:return new A.ij(u.a,c,d)
case 35669:return new A.ik(u.a,c,d)
case 35674:return new A.im(u.a,c,d)
case 35675:return new A.cM(u.a,c,d)
case 35676:return new A.au(u.a,c,d)
case 35678:return u.eJ(b,c,d)
case 35680:return u.eK(b,c,d)
case 35670:throw H.b(u.bb("BOOL",c))
case 35671:throw H.b(u.bb("BOOL_VEC2",c))
case 35672:throw H.b(u.bb("BOOL_VEC3",c))
case 35673:throw H.b(u.bb("BOOL_VEC4",c))
default:throw H.b(P.B("Unknown uniform variable type "+H.k(a)+" for "+H.k(c)+"."))}}}
A.dU.prototype={}
A.il.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
H:function(a,b){var u=this.j(0,b)
if(u==null)throw H.b(P.B("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.L()},
L:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.w)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.az.prototype={
i:function(a){return"Uniform1i: "+H.k(this.c)}}
A.ii.prototype={
i:function(a){return"Uniform2i: "+H.k(this.c)}}
A.ij.prototype={
i:function(a){return"Uniform3i: "+H.k(this.c)}}
A.ik.prototype={
i:function(a){return"Uniform4i: "+H.k(this.c)}}
A.ig.prototype={
i:function(a){return"Uniform1iv: "+H.k(this.c)},
shv:function(a){H.n(a,"$ic",[P.l],"$ac")}}
A.ae.prototype={
i:function(a){return"Uniform1f: "+H.k(this.c)}}
A.ih.prototype={
i:function(a){return"Uniform2f: "+H.k(this.c)}}
A.V.prototype={
i:function(a){return"Uniform3f: "+H.k(this.c)}}
A.cL.prototype={
i:function(a){return"Uniform4f: "+H.k(this.c)}}
A.im.prototype={
i:function(a){return"Uniform1Mat2 "+H.k(this.c)}}
A.cM.prototype={
aj:function(a){var u=new Float32Array(H.c2(H.n(a,"$ic",[P.z],"$ac")))
C.c.dZ(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.k(this.c)}}
A.au.prototype={
aj:function(a){var u=new Float32Array(H.c2(H.n(a,"$ic",[P.z],"$ac")))
C.c.e_(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.k(this.c)}}
A.am.prototype={
e5:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.k(this.c)}}
A.bY.prototype={
i:function(a){return"UniformSamplerCube: "+H.k(this.c)}}
F.jB.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.c6(s.b,b).c6(s.d.c6(s.c,b),c)
a.sZ(0,new V.aj(r.a,r.b,r.c))
a.sdV(r.w(0,Math.sqrt(r.K(r))))
s=1-b
u=1-c
a.sd6(new V.cB(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))},
$S:16}
F.jQ.prototype={
$2:function(a,b){return 0},
$S:43}
F.jR.prototype={
$3:function(a,b,c){var u,t,s=b*2-1,r=c*2-1
a.sZ(0,new V.aj(s,r,this.a.a.$2(b,c)))
u=new V.L(s,r,1)
a.sdV(u.w(0,Math.sqrt(u.K(u))))
u=1-b
t=1-c
a.sd6(new V.cB(b*c,2+u*c,4+b*t,6+u*t))},
$S:16}
F.a8.prototype={
eA:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.e0()
if(q!=null)s=s.u(0,q)
if(u!=null)s=s.u(0,u)
if(t!=null)s=s.u(0,t)
if(s.dC())return
return s.w(0,Math.sqrt(s.K(s)))},
eE:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.A(0,q)
r=new V.L(r.a,r.b,r.c)
s=r.w(0,Math.sqrt(r.K(r)))
r=t.A(0,q)
r=new V.L(r.a,r.b,r.c)
r=s.aY(r.w(0,Math.sqrt(r.K(r))))
return r.w(0,Math.sqrt(r.K(r)))},
bS:function(){var u,t=this
if(t.d!=null)return!0
u=t.eA()
if(u==null){u=t.eE()
if(u==null)return!1}t.d=u
t.a.a.a2()
return!0},
ez:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.e0()
if(q!=null)s=s.u(0,q)
if(u!=null)s=s.u(0,u)
if(t!=null)s=s.u(0,t)
if(s.dC())return
return s.w(0,Math.sqrt(s.K(s)))},
eD:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.I().a){l=d.A(0,g)
l=new V.L(l.a,l.b,l.c)
q=l.w(0,Math.sqrt(l.K(l)))
if(s.a-t.a<0)q=q.O(0)}else{p=(l-u.b)/r
l=d.A(0,g)
k=l.c
if(typeof k!=="number")return k.m()
i=g.a
h=g.b
f=g.c
if(typeof f!=="number")return H.q(f)
f=new V.aj(l.a*p+i,l.b*p+h,k*p+f).A(0,j)
f=new V.L(f.a,f.b,f.c)
q=f.w(0,Math.sqrt(f.K(f)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.O(0)}l=n.d
if(l!=null){o=l.w(0,Math.sqrt(l.K(l)))
l=o.aY(q)
l=l.w(0,Math.sqrt(l.K(l))).aY(o)
q=l.w(0,Math.sqrt(l.K(l)))}return q},
bQ:function(){var u,t=this
if(t.e!=null)return!0
u=t.ez()
if(u==null){u=t.eD()
if(u==null)return!1}t.e=u
t.a.a.a2()
return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
C:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.b.aa(J.as(s.e),0)+", "+C.b.aa(J.as(t.b.e),0)+", "+C.b.aa(J.as(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.i(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.i(0)+"}"):u+"-}"},
L:function(){return this.C("")}}
F.bc.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
C:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.b.aa(J.as(u.e),0)+", "+C.b.aa(J.as(this.b.e),0)},
L:function(){return this.C("")}}
F.bA.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
C:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.aa(J.as(u.e),0)},
L:function(){return this.C("")}}
F.dK.prototype={
gt:function(){var u=this.e
return u==null?this.e=D.R():u},
ia:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.Y()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.w)(g),++s){r=g[s]
h.a.h(0,r.hK())}h.a.Y()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.w)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.Y()
o=o.e
if(typeof o!=="number")return o.u()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bA()
if(n.a==null)H.x(P.B("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.B(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.w)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.Y()
o=o.e
if(typeof o!=="number")return o.u()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.Y()
p=p.e
if(typeof p!=="number")return p.u()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
p=new F.bc()
o=l.a
if(o==null)H.x(P.B("May not create a line with a start vertex which is not attached to a shape."))
if(o!=k.a)H.x(P.B("May not create a line with vertices attached to different shapes."))
p.a=l
C.a.h(l.c.b,p)
p.b=k
C.a.h(k.c.c,p)
C.a.h(p.a.a.c.b,p)
p=p.a.a.e
if(p!=null)p.B(null)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.w)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.Y()
o=o.e
if(typeof o!=="number")return o.u()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.Y()
p=p.e
if(typeof p!=="number")return p.u()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.Y()
o=o.e
if(typeof o!=="number")return o.u()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.dl(l,k,i)}g=h.e
if(g!=null)g.ao(0)},
aL:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aL()||!1
if(!t.a.aL())u=!1
s=t.e
if(s!=null)s.ao(0)
return u},
hG:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.bm()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bl().a)!==0)++s
if((t&$.bk().a)!==0)++s
if((t&$.bn().a)!==0)++s
if((t&$.bG().a)!==0)++s
if((t&$.d3().a)!==0)++s
if((t&$.d4().a)!==0)++s
if((t&$.cc().a)!==0)++s
if((t&$.bj().a)!==0)++s
r=a3.gck(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.z
p=H.e(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.e(u,[Z.da])
for(n=0,m=0;m<s;++m){l=a3.hB(m)
k=l.gck(l)
C.a.k(o,m,new Z.da(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.d(u,j)
i=u[j].i7(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.k(p,h,i[g]);++h}}n+=k}H.n(p,"$ic",[t],"$ac")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.c2(p)),35044)
u.bindBuffer(a0,null)
e=new Z.db(new Z.e1(a0,f),o,a3)
e.seW(H.e([],[Z.bt]))
if(a.b.b.length!==0){t=P.l
d=H.e([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.Y()
C.a.h(d,c.e)}b=Z.kr(u,34963,H.n(d,"$ic",[t],"$ac"))
C.a.h(e.b,new Z.bt(0,d.length,b))}if(a.c.b.length!==0){t=P.l
d=H.e([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.Y()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.d(c,m)
c=c[m].b
c.a.a.Y()
C.a.h(d,c.e)}b=Z.kr(u,34963,H.n(d,"$ic",[t],"$ac"))
C.a.h(e.b,new Z.bt(1,d.length,b))}if(a.d.b.length!==0){t=P.l
d=H.e([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.Y()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.d(c,m)
c=c[m].b
c.a.a.Y()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.d(c,m)
c=c[m].c
c.a.a.Y()
C.a.h(d,c.e)}b=Z.kr(u,34963,H.n(d,"$ic",[t],"$ac"))
C.a.h(e.b,new Z.bt(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.e([],[P.i])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.C(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.C(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.C(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.C(t))}return C.a.q(s,"\n")},
a2:function(){var u=this.e
if(u!=null)u.B(null)},
$ioM:1}
F.hI.prototype={
hA:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.n(c,"$ic",[F.b7],"$ac")
u=H.e([],[F.a8])
for(t=this.a,s=b,r=0,q=!1,p=1;p<a;++p,++r,++s){for(o=q,n=1;n<b;++n,s=j){m=c.length
if(r<0||r>=m)return H.d(c,r)
l=c[r];++r
if(r>=m)return H.d(c,r)
k=c[r]
j=s+1
if(j<0||j>=m)return H.d(c,j)
i=c[j]
if(s<0||s>=m)return H.d(c,s)
h=c[s]
m=t.a
if(o){m.h(0,l)
t.a.h(0,k)
t.a.h(0,i)
C.a.h(u,F.dl(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dl(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dl(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.dl(k,h,l))}o=!o}q=!q}return u},
gl:function(a){return this.b.length},
aL:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.w)(u),++r)if(!u[r].bS())s=!1
return s},
bR:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.w)(u),++r)if(!u[r].bQ())s=!1
return s},
i:function(a){return this.L()},
C:function(a){var u,t,s,r=H.e([],[P.i])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)C.a.h(r,u[s].C(a))
return C.a.q(r,"\n")},
L:function(){return this.C("")},
seQ:function(a){this.b=H.n(a,"$ic",[F.a8],"$ac")}}
F.hJ.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.L()},
C:function(a){var u,t,s=H.e([],[P.i]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.d(t,u)
C.a.h(s,t[u].C(a+(""+u+". ")))}return C.a.q(s,"\n")},
L:function(){return this.C("")},
seX:function(a){this.b=H.n(a,"$ic",[F.bc],"$ac")}}
F.hK.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.L()},
C:function(a){var u,t,s,r=H.e([],[P.i])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)C.a.h(r,u[s].C(a))
return C.a.q(r,"\n")},
L:function(){return this.C("")},
sbG:function(a){this.b=H.n(a,"$ic",[F.bA],"$ac")}}
F.b7.prototype={
bV:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.lr(u.cx,r,o,t,s,q,p,a,n)},
hK:function(){return this.bV(null)},
sZ:function(a,b){var u
if(!J.T(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a2()}},
sdV:function(a){var u
if(!J.T(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a2()}},
sd6:function(a){var u
if(!J.T(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a2()}},
i7:function(a){var u,t,s=this
if(a.n(0,$.bm())){u=s.f
t=[P.z]
if(u==null)return H.e([0,0,0],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.n(0,$.bl())){u=s.r
t=[P.z]
if(u==null)return H.e([0,1,0],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.n(0,$.bk())){u=s.x
t=[P.z]
if(u==null)return H.e([0,0,1],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.n(0,$.bn())){u=s.y
t=[P.z]
if(u==null)return H.e([0,0],t)
else return H.e([u.a,u.b],t)}else if(a.n(0,$.bG())){u=s.z
t=[P.z]
if(u==null)return H.e([0,0,0],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.n(0,$.d3())){u=s.Q
t=[P.z]
if(u==null)return H.e([1,1,1],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.n(0,$.d4())){u=s.Q
t=[P.z]
if(u==null)return H.e([1,1,1,1],t)
else return H.e([u.a,u.b,u.c,u.d],t)}else if(a.n(0,$.cc()))return H.e([s.ch],[P.z])
else if(a.n(0,$.bj())){u=s.cx
t=[P.z]
if(u==null)return H.e([-1,-1,-1,-1],t)
else return H.e([u.a,u.b,u.c,u.d],t)}else return H.e([],[P.z])},
bS:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.e0()
t.d.F(0,new F.iL(s))
s=s.a
t.r=s.w(0,Math.sqrt(s.K(s)))
s=t.a
if(s!=null){s.a2()
s=t.a.e
if(s!=null)s.ao(0)}return!0},
bQ:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.e0()
t.d.F(0,new F.iK(s))
s=s.a
t.x=s.w(0,Math.sqrt(s.K(s)))
s=t.a
if(s!=null){s.a2()
s=t.a.e
if(s!=null)s.ao(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
C:function(a){var u,t,s=this,r="-",q=H.e([],[P.i])
C.a.h(q,C.b.aa(J.as(s.e),0))
u=s.f
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
u=s.r
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
u=s.x
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
u=s.y
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
u=s.z
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
u=s.Q
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
C.a.h(q,V.M(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.q(q,", ")
return a+"{"+t+"}"},
L:function(){return this.C("")}}
F.iL.prototype={
$1:function(a){var u,t
H.f(a,"$ia8")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.u(0,u)}},
$S:9}
F.iK.prototype={
$1:function(a){var u,t
H.f(a,"$ia8")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.u(0,u)}},
$S:9}
F.iE.prototype={
Y:function(){},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.b(P.B("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.a2()
return!0},
d4:function(a,b){var u=null,t=F.lr(u,u,a,u,u,b,u,u,0)
this.h(0,t)
return t},
gl:function(a){return this.c.length},
aL:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)u[s].bS()
return!0},
bR:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)u[s].bQ()
return!0},
hH:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
if(typeof n!=="number")return n.m()
n=q.w(0,Math.sqrt(p*p+o*o+n*n))
if(!J.T(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.B(null)}}}}return!0},
i:function(a){return this.L()},
C:function(a){var u,t,s,r
this.Y()
u=H.e([],[P.i])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.w)(t),++r)C.a.h(u,t[r].C(a))
return C.a.q(u,"\n")},
L:function(){return this.C("")},
shw:function(a){this.c=H.n(a,"$ic",[F.b7],"$ac")}}
F.iF.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
F:function(a,b){var u=this
H.o(b,{func:1,ret:-1,args:[F.a8]})
C.a.F(u.b,b)
C.a.F(u.c,new F.iG(u,b))
C.a.F(u.d,new F.iH(u,b))},
i:function(a){return this.L()},
L:function(){var u,t,s,r=H.e([],[P.i])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)C.a.h(r,u[s].C(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)C.a.h(r,u[s].C(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)C.a.h(r,u[s].C(""))
return C.a.q(r,"\n")},
seR:function(a){this.b=H.n(a,"$ic",[F.a8],"$ac")},
seS:function(a){this.c=H.n(a,"$ic",[F.a8],"$ac")},
seT:function(a){this.d=H.n(a,"$ic",[F.a8],"$ac")}}
F.iG.prototype={
$1:function(a){H.f(a,"$ia8")
if(!J.T(a.a,this.a))this.b.$1(a)},
$S:9}
F.iH.prototype={
$1:function(a){var u
H.f(a,"$ia8")
u=this.a
if(!J.T(a.a,u)&&!J.T(a.b,u))this.b.$1(a)},
$S:9}
F.iI.prototype={
gl:function(a){return this.b.length+this.c.length},
i:function(a){return this.L()},
L:function(){var u,t,s,r=H.e([],[P.i])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)C.a.h(r,u[s].C(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)C.a.h(r,u[s].C(""))
return C.a.q(r,"\n")},
seY:function(a){this.b=H.n(a,"$ic",[F.bc],"$ac")},
seZ:function(a){this.c=H.n(a,"$ic",[F.bc],"$ac")}}
F.iJ.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.L()},
L:function(){var u,t,s,r=H.e([],[P.i])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)C.a.h(r,u[s].C(""))
return C.a.q(r,"\n")},
sbG:function(a){this.b=H.n(a,"$ic",[F.bA],"$ac")}}
O.dx.prototype={
gt:function(){var u=this.fr
return u==null?this.fr=D.R():u},
W:function(a){var u
H.f(a,"$iA")
u=this.fr
if(u!=null)u.B(a)},
bC:function(){return this.W(null)},
cW:function(a){H.f(a,"$iA")
this.a=null
this.W(a)},
h9:function(){return this.cW(null)},
ff:function(a,b){var u=V.ab
H.n(b,"$ih",[u],"$ah")
u=new D.bu([u])
u.b=!0
this.W(u)},
fh:function(a,b){var u=V.ab
H.n(b,"$ih",[u],"$ah")
u=new D.bv([u])
u.b=!0
this.W(u)},
cF:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.l,h=new H.a_([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s){r=h.j(0,0)
h.k(0,0,r==null?1:r)}q=H.e([],[A.aF])
h.F(0,new O.h8(j,q))
C.a.bp(q,new O.h9())
p=new H.a_([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s){o=u[s]
r=o.gaX()
n=p.j(0,o.gaX())
p.k(0,r,n==null?1:n)}m=H.e([],[A.aK])
p.F(0,new O.ha(j,m))
C.a.bp(m,new O.hb())
l=new H.a_([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.w)(i),++s){o=i[s]
t=o.gaX()
r=l.j(0,o.gaX())
l.k(0,t,r==null?1:r)}k=H.e([],[A.aO])
l.F(0,new O.hc(j,k))
C.a.bp(k,new O.hd())
i=C.d.a1(j.e.a.length+3,4)
u=j.b
j.dy.e
return A.mL(u!=null,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
a7:function(a,b){H.n(a,"$ic",[T.cI],"$ac")
if(b!=null)if(!C.a.a3(a,b)){b.a=a.length
C.a.h(a,b)}},
ac:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.ap(u,u.length,[H.t(u,0)]);u.v();){t=u.d
t.toString
s=$.iD
if(s==null)s=$.iD=new V.L(0,0,1)
t.a=s
r=$.iC
t.d=r==null?$.iC=new V.L(0,1,0):r
r=$.iB
t.e=r==null?$.iB=new V.L(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.aA(s)
r=s.a
p=s.b
o=s.c
if(typeof o!=="number")return o.m()
t.a=s.w(0,Math.sqrt(r*r+p*p+o*o))
o=q.aA(t.d)
p=o.a
r=o.b
s=o.c
if(typeof s!=="number")return s.m()
t.d=o.w(0,Math.sqrt(p*p+r*r+s*s))
s=q.aA(t.e)
r=s.a
p=s.b
o=s.c
if(typeof o!=="number")return o.m()
t.e=s.w(0,Math.sqrt(r*r+p*p+o*o))}}}},
iy:function(b6,b7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=b4.a
if(b5==null){b5=b4.cF()
u=b6.fr.j(0,b5.aw)
if(u==null){u=A.mK(b5,b6.a)
t=u.b
if(t.length===0)H.x(P.B("May not cache a shader with no name."))
if(b6.fr.bd(0,t))H.x(P.B('Shader cache already contains a shader by the name "'+t+'".'))
b6.fr.k(0,t,u)}b5=b4.a=u
b7.e=null}s=b5.z
r=s.dc
b5=b7.e
if(!(b5 instanceof Z.db))b5=b7.e=null
if(b5==null||!b5.d.n(0,r)){b5=s.k3
if(b5)b7.d.aL()
q=s.k4
if(q){p=b7.d
o=p.e
if(o!=null)++o.d
p.d.bR()
p.a.bR()
p=p.e
if(p!=null)p.ao(0)}p=s.r2
if(p){o=b7.d
n=o.e
if(n!=null)++n.d
o.a.hH()
o=o.e
if(o!=null)o.ao(0)}m=b7.d.hG(new Z.iN(b6.a),r)
m.aM($.bm()).e=b4.a.Q.c
if(b5)m.aM($.bl()).e=b4.a.cx.c
if(q)m.aM($.bk()).e=b4.a.ch.c
if(s.r1)m.aM($.bn()).e=b4.a.cy.c
if(p)m.aM($.bG()).e=b4.a.db.c
if(s.rx)m.aM($.bj()).e=b4.a.dx.c
b7.e=m}b5=T.cI
l=H.e([],[b5])
q=b4.a
p=b6.a
p.useProgram(q.r)
q.x.hV()
if(s.dy){q=b4.a
o=b6.dx
o=o.gX(o)
q=q.dy
q.toString
q.aj(o.ab(0,!0))}if(s.fr){q=b4.a
o=b6.cx
if(o==null){o=b6.db
o=o.gX(o)
n=b6.dx
n=b6.cx=o.m(0,n.gX(n))
o=n}q=q.fr
q.toString
q.aj(o.ab(0,!0))}q=b4.a
o=b6.ch
if(o==null){o=b6.giw()
n=b6.dx
n=b6.ch=o.m(0,n.gX(n))
o=n}q=q.fy
q.toString
q.aj(o.ab(0,!0))
if(s.ry){q=b4.a
o=b4.b
q=q.k1
q.toString
q.aj(o.ab(0,!0))}if(s.x1){q=b4.a
o=b4.c
q=q.k2
q.toString
q.aj(C.o.ab(o,!0))}if(s.x2){q=b4.a
o=b4.d
q=q.k3
q.toString
q.aj(C.o.ab(o,!0))}if(s.y2>0){k=b4.e.a.length
q=b4.a.k4
C.c.bl(q.a,q.d,k)
for(q=[P.z],j=0;j<k;++j){o=b4.a
n=b4.e.a
if(j>=n.length)return H.d(n,j)
n=n[j]
o.toString
H.f(n,"$iab")
o=o.r1
if(j>=o.length)return H.d(o,j)
o=o[j]
i=new Float32Array(H.c2(H.n(n.ab(0,!0),"$ic",q,"$ac")))
C.c.e_(o.a,o.d,!1,i)}}q=s.a
if(q.a){o=b4.a
n=b4.f.f
o=o.r2
C.c.U(o.a,o.d,n.a,n.b,n.c)}if(q.b){b4.a7(l,b4.f.d)
q=b4.a
o=b4.f.d
q.af(q.rx,o)}if(s.id){q=s.b
if(q.a){o=b4.a
n=b4.r.f
o=o.x1
C.c.U(o.a,o.d,n.a,n.b,n.c)}if(q.b){b4.a7(l,b4.r.d)
q=b4.a
o=b4.r.d
q.af(q.x2,o)}q=s.c
if(q.a){o=b4.a
n=b4.x.f
o=o.y2
C.c.U(o.a,o.d,n.a,n.b,n.c)}if(q.b){b4.a7(l,b4.x.d)
q=b4.a
o=b4.x.d
q.af(q.aw,o)}q=s.d
if(q.a){o=b4.a
n=b4.y.f
o=o.dd
C.c.U(o.a,o.d,n.a,n.b,n.c)}if(q.b){b4.a7(l,b4.y.d)
q=b4.a
o=b4.y.d
q.af(q.de,o)}q=s.e
o=q.a
if(o||q.b||!1){n=b4.a
h=b4.z.ch
n=n.dh
C.c.a_(n.a,n.d,h)}if(o){o=b4.a
n=b4.z.f
o=o.df
C.c.U(o.a,o.d,n.a,n.b,n.c)}if(q.b){b4.a7(l,b4.z.d)
q=b4.a
o=b4.z.d
q.af(q.dg,o)}q=s.z
if(q.length>0){o=b6.db
g=o.gX(o)
o=P.l
f=new H.a_([o,o])
for(o=b4.dx.e,n=o.length,e=0;e<o.length;o.length===n||(0,H.w)(o),++e){d=o[e]
c=f.j(0,0)
if(c==null)c=0
f.k(0,0,c+1)
b=J.d5(b4.a.bX.j(0,0),c)
h=g.aA(d.a)
a=h.a
a0=h.b
a1=h.c
if(typeof a1!=="number")return a1.m()
a1=h.w(0,Math.sqrt(a*a+a0*a0+a1*a1))
a0=b.e
a=a1.a
h=a1.b
a1=a1.c
C.c.U(a0.a,a0.d,a,h,a1)
a1=d.c
h=b.f
C.c.U(h.a,h.d,a1.a,a1.b,a1.c)}for(o=q.length,e=0;e<q.length;q.length===o||(0,H.w)(q),++e){n=q[e].a
k=f.j(0,n)
if(k==null)k=0
n=b4.a.bW.j(0,n)
C.c.bl(n.a,n.d,k)}}q=s.Q
if(q.length>0){o=b6.db
g=o.gX(o)
o=P.l
a2=new H.a_([o,o])
for(o=b4.dx.f,n=o.length,h=[b5],a=[P.z],e=0;e<o.length;o.length===n||(0,H.w)(o),++e){d=o[e]
a3=d.gaX()
c=a2.j(0,a3)
if(c==null)c=0
a2.k(0,a3,c+1)
b=J.d5(b4.a.bZ.j(0,a3),c)
a4=g.m(0,d.gX(d))
a0=d.gX(d)
a1=$.cA
a0=a0.cf(a1==null?$.cA=new V.aj(0,0,0):a1)
a1=b.b
C.c.U(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=$.cA
a0=a4.cf(a0==null?$.cA=new V.aj(0,0,0):a0)
a1=b.c
C.c.U(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=d.gau(d)
a1=b.e
C.c.U(a1.a,a1.d,a0.a,a0.b,a0.c)
d.gaz()
a0=a4.bf(0)
a1=a0.a
a5=a0.b
a6=a0.c
a7=a0.e
a8=a0.f
a9=a0.r
b0=a0.y
b1=a0.z
a0=a0.Q
b2=b.d
b2.toString
i=new Float32Array(H.c2(H.n(new V.aH(a1,a5,a6,a7,a8,a9,b0,b1,a0).ab(0,!0),"$ic",a,"$ac")))
C.c.dZ(b2.a,b2.d,!1,i)
d.gaz()
a0=d.gaz()
H.n(l,"$ic",h,"$ac")
if(!C.a.a3(l,a0)){a0.a=l.length
C.a.h(l,a0)}a0=d.gaz()
a1=a0.gaZ(a0)
if(a1){a1=b.f
a1.toString
a5=a0.gaZ(a0)
if(!a5)a1.a.uniform1i(a1.d,0)
else{a0=a0.gi2(a0)
a1.a.uniform1i(a1.d,a0)}}d.gaS()
a0=d.ge6()
a1=b.x
a1.toString
a5=a0.ghR(a0)
a6=a0.ghS(a0)
a7=a0.ghT()
a0=a0.ghQ()
C.c.dY(a1.a,a1.d,a5,a6,a7,a0)
a0=d.gaS()
if(!C.a.a3(l,a0)){a0.a=l.length
C.a.h(l,a0)}a0=d.gaS()
a1=a0.gaZ(a0)
if(a1){a1=b.r
a1.toString
a5=a0.gaZ(a0)
if(!a5)a1.a.uniform1i(a1.d,0)
else{a0=a0.gi2(a0)
a1.a.uniform1i(a1.d,a0)}}if(d.ghW()){a0=d.ghC()
a1=b.y
C.c.a_(a1.a,a1.d,a0)
a0=d.ghD()
a1=b.z
C.c.a_(a1.a,a1.d,a0)
a0=d.ghE()
a1=b.Q
C.c.a_(a1.a,a1.d,a0)}}for(o=q.length,e=0;e<q.length;q.length===o||(0,H.w)(q),++e){n=q[e].a
k=a2.j(0,n)
if(k==null)k=0
n=b4.a.bY.j(0,n)
C.c.bl(n.a,n.d,k)}}q=s.ch
if(q.length>0){o=b6.db
g=o.gX(o)
o=P.l
b3=new H.a_([o,o])
for(o=b4.dx.r,n=o.length,b5=[b5],e=0;e<o.length;o.length===n||(0,H.w)(o),++e){d=o[e]
a3=d.gaX()
c=b3.j(0,a3)
if(c==null)c=0
b3.k(0,a3,c+1)
b=J.d5(b4.a.c0.j(0,a3),c)
h=d.giv(d)
a=b.b
C.c.U(a.a,a.d,h.a,h.b,h.c)
h=d.giP(d).j0()
a=b.c
C.c.U(a.a,a.d,h.a,h.b,h.c)
h=g.cf(d.giv(d))
a=b.d
C.c.U(a.a,a.d,h.a,h.b,h.c)
h=d.gau(d)
a=b.e
C.c.U(a.a,a.d,h.a,h.b,h.c)
d.gaz()
h=d.gj3()
a=b.f
C.c.U(a.a,a.d,h.a,h.b,h.c)
h=d.gcc(d)
a=b.r
C.c.U(a.a,a.d,h.a,h.b,h.c)
h=d.gj1()
a=b.x
C.c.a_(a.a,a.d,h)
h=d.gj2()
a=b.y
C.c.a_(a.a,a.d,h)
d.gaz()
h=d.gaz()
H.n(l,"$ic",b5,"$ac")
if(!C.a.a3(l,h)){h.a=l.length
C.a.h(l,h)}h=d.gaz()
a=h.gaZ(h)
if(a){a=b.dx
a.toString
a0=h.d
if(!a0)a.a.uniform1i(a.d,0)
else{h=h.a
a.a.uniform1i(a.d,h)}}d.gaS()
h=d.ge6()
a=b.z
a.toString
a0=h.ghR(h)
a1=h.ghS(h)
a5=h.ghT()
h=h.ghQ()
C.c.dY(a.a,a.d,a0,a1,a5,h)
h=d.gaS()
if(!C.a.a3(l,h)){h.a=l.length
C.a.h(l,h)}h=d.gaS()
a=h.gaZ(h)
if(a){a=b.dy
a.toString
a0=h.d
if(!a0)a.a.uniform1i(a.d,0)
else{h=h.a
a.a.uniform1i(a.d,h)}}if(d.giQ()){h=d.giO()
a=b.Q
C.c.a_(a.a,a.d,h)
h=d.giN()
a=b.ch
C.c.a_(a.a,a.d,h)}if(d.ghW()){h=d.ghC()
a=b.cx
C.c.a_(a.a,a.d,h)
h=d.ghD()
a=b.cy
C.c.a_(a.a,a.d,h)
h=d.ghE()
a=b.db
C.c.a_(a.a,a.d,h)}}for(b5=q.length,e=0;e<q.length;q.length===b5||(0,H.w)(q),++e){o=q[e].a
k=b3.j(0,o)
if(k==null)k=0
o=b4.a.c_.j(0,o)
C.c.bl(o.a,o.d,k)}}}if(s.f.b){b4.a7(l,b4.Q.d)
b5=b4.a
q=b4.Q.d
b5.af(b5.di,q)}if(s.dx){b5=b4.a
q=b6.Q
if(q==null){q=b6.db
q=b6.Q=q.gX(q).bf(0)}b5=b5.id
b5.toString
b5.aj(q.ab(0,!0))}if(s.cy){b4.a7(l,b4.ch)
b5=b4.a
q=b4.ch
b5.hc(b5.dj,q)
b5=s.r
if(b5.a){q=b4.a
o=b4.cx.f
q=q.dk
C.c.U(q.a,q.d,o.a,o.b,o.c)}if(b5.b){b4.a7(l,b4.cx.d)
b5=b4.a
q=b4.cx.d
b5.af(b5.dl,q)}b5=s.x
q=b5.a
if(q||b5.b||!1){o=b4.a
n=b4.cy.ch
o=o.dm
C.c.a_(o.a,o.d,n)}if(q){q=b4.a
o=b4.cy.f
q=q.dn
C.c.U(q.a,q.d,o.a,o.b,o.c)}if(b5.b){b4.a7(l,b4.cy.d)
b5=b4.a
q=b4.cy.d
b5.af(b5.dq,q)}}b5=s.y
q=b5.a
o=!q
if(!o||b5.b||!1){if(q){q=b4.a
n=b4.db.f
q=q.dr
C.c.a_(q.a,q.d,n)}if(b5.b){b4.a7(l,b4.db.d)
q=b4.a
n=b4.db.d
q.af(q.ds,n)}p.enable(3042)
p.blendFunc(770,771)}for(j=0;j<l.length;++j){q=l[j]
if(!q.c&&q.d){q.c=!0
p.activeTexture(33984+q.a)
p.bindTexture(3553,q.b)}}q=b7.e
q.bO(b6)
q.aQ(b6)
q.iK(b6)
if(!o||b5.b||!1)p.disable(3042)
for(j=0;j<l.length;++j){b5=l[j]
if(b5.c){b5.c=!1
p.activeTexture(33984+b5.a)
p.bindTexture(3553,null)}}b5=b4.a
b5.toString
p.useProgram(null)
b5.x.hP()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cF().aw},
seC:function(a){this.e=H.n(a,"$iY",[V.ab],"$aY")}}
O.h8.prototype={
$2:function(a,b){H.a9(a)
H.a9(b)
if(typeof b!=="number")return b.u()
return C.a.h(this.b,new A.aF(a,C.d.a1(b+3,4)*4))},
$S:10}
O.h9.prototype={
$2:function(a,b){H.f(a,"$iaF")
H.f(b,"$iaF")
return J.k5(a.a,b.a)},
$S:47}
O.ha.prototype={
$2:function(a,b){H.a9(a)
H.a9(b)
if(typeof b!=="number")return b.u()
return C.a.h(this.b,new A.aK(a,C.d.a1(b+3,4)*4))},
$S:10}
O.hb.prototype={
$2:function(a,b){H.f(a,"$iaK")
H.f(b,"$iaK")
return J.k5(a.a,b.a)},
$S:48}
O.hc.prototype={
$2:function(a,b){H.a9(a)
H.a9(b)
if(typeof b!=="number")return b.u()
return C.a.h(this.b,new A.aO(a,C.d.a1(b+3,4)*4))},
$S:10}
O.hd.prototype={
$2:function(a,b){H.f(a,"$iaO")
H.f(b,"$iaO")
return J.k5(a.a,b.a)},
$S:49}
O.h2.prototype={
as:function(){var u,t=this
t.cm()
u=t.f
if(!(Math.abs(u-1)<$.I().a)){t.f=1
u=new D.H(t.b,u,1,[P.z])
u.b=!0
t.a.W(u)}}}
O.cs.prototype={
W:function(a){return this.a.W(H.f(a,"$iA"))},
bC:function(){return this.W(null)},
as:function(){},
bJ:function(a){var u,t,s=this
if(!s.c.n(0,a)){u=s.c
if(u.a||u.b||!1)t=!(a.a||a.b||!1)
else t=!0
s.c=a
if(t)s.as()
u=s.a
u.a=null
u.W(null)}},
sdU:function(a){var u,t=this,s=t.c
if(!s.b)t.bJ(new A.af(s.a,!0,!1))
s=t.d
if(s!==a){if(s!=null)s.gt().T(0,t.gb9())
u=t.d
t.d=a
a.gt().h(0,t.gb9())
s=new D.H(t.b+".texture2D",u,t.d,[T.dQ])
s.b=!0
t.a.W(s)}}}
O.h3.prototype={}
O.b1.prototype={
cY:function(a){var u,t,s=this
if(!s.f.n(0,a)){u=s.f
s.f=a
t=new D.H(s.b+".color",u,a,[V.Z])
t.b=!0
s.a.W(t)}},
as:function(){this.cm()
this.cY(new V.Z(1,1,1))},
sau:function(a,b){this.bJ(new A.af(!0,this.c.b,!1))
this.cY(b)}}
O.h5.prototype={}
O.h6.prototype={
as:function(){var u,t=this
t.cn()
u=t.ch
if(!(Math.abs(u-1)<$.I().a)){t.ch=1
u=new D.H(t.b+".refraction",u,1,[P.z])
u.b=!0
t.a.W(u)}}}
O.h7.prototype={
cZ:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.I().a)){u.ch=a
t=new D.H(u.b+".shininess",t,a,[P.z])
t.b=!0
u.a.W(t)}},
as:function(){this.cn()
this.cZ(100)}}
O.bV.prototype={}
T.cI.prototype={}
T.dQ.prototype={}
T.i2.prototype={
gt:function(){var u=this.y
return u==null?this.y=D.R():u}}
T.i3.prototype={
i8:function(a,b,c){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,10497)
r.texParameteri(s,10243,10497)
r.texParameteri(s,10241,9987)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=document.createElement("img")
u.src=a
t=new T.i2()
t.a=0
t.b=q
t.d=t.c=!1
r=W.m
W.a6(u,"load",H.o(new T.i4(this,t,u,!1,q,!1,!0),{func:1,ret:-1,args:[r]}),!1,r)
return t},
ha:function(a,b,c){var u,t,s,r
b=V.kJ(b)
u=V.kJ(a.width)
t=V.kJ(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.k9()
s.width=u
s.height=t
r=H.f(C.j.e3(s,"2d"),"$icf")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.of(r.getImageData(0,0,s.width,s.height))}}}
T.i4.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.ha(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.c.iE(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.hU()}++s.e},
$S:14}
V.f_.prototype={
aO:function(a,b){return!0},
i:function(a){return"all"},
$ibd:1}
V.bd.prototype={}
V.dw.prototype={
aO:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)if(u[s].aO(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.w)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sar:function(a){this.a=H.n(a,"$ic",[V.bd],"$ac")},
$ibd:1}
V.bf.prototype={
aO:function(a,b){return!this.ea(0,b)},
i:function(a){return"!["+this.cl(0)+"]"}}
V.hH.prototype={
ee:function(a){var u,t
if(a.a.length<=0)throw H.b(P.B("May not create a SetMatcher with zero characters."))
u=new H.a_([P.l,P.X])
for(t=new H.du(a,a.gl(a),[H.av(a,"v",0)]);t.v();)u.k(0,t.d,!0)
this.shb(u)},
aO:function(a,b){return this.a.bd(0,b)},
i:function(a){var u=this.a
return P.cH(u.gam(u),0,null)},
shb:function(a){this.a=H.n(a,"$iy",[P.l,P.X],"$ay")},
$ibd:1}
V.cF.prototype={
q:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cK(this.a.N(0,b))
r.sar(H.e([],[V.bd]))
r.c=!1
C.a.h(this.c,r)
return r},
hZ:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s){r=u[s]
if(r.aO(0,a))return r}return},
i:function(a){return this.b},
shu:function(a){this.c=H.n(a,"$ic",[V.cK],"$ac")}}
V.dS.prototype={
i:function(a){var u=H.lX(this.b,"\n","\\n"),t=H.lX(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cJ.prototype={
i:function(a){return this.b},
sh5:function(a){var u=P.i
this.c=H.n(a,"$iy",[u,u],"$ay")}}
V.i7.prototype={
N:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cF(this,b)
u.shu(H.e([],[V.cK]))
u.d=null
this.a.k(0,b,u)}return u},
b3:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cJ(a)
u=P.i
t.sh5(new H.a_([u,u]))
this.b.k(0,a,t)}return t},
iJ:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.e([],[V.dS]),k=this.c,j=[P.l],i=H.e([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.D(a,s)
q=k.hZ(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.cH(i,0,m)
throw H.b(P.B("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.e([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.cH(i,0,m)
o=k.d
n=o.c.j(0,p)
t=new V.dS(n==null?o.b:n,p,s)}++s}}},
shk:function(a){this.a=H.n(a,"$iy",[P.i,V.cF],"$ay")},
shn:function(a){this.b=H.n(a,"$iy",[P.i,V.cJ],"$ay")}}
V.cK.prototype={
i:function(a){return this.b.b+": "+this.cl(0)}}
X.dd.prototype={$icv:1}
X.fI.prototype={
gt:function(){var u=this.x
return u==null?this.x=D.R():u}}
X.dD.prototype={
gt:function(){var u=this.f
return u==null?this.f=D.R():u},
aH:function(a){var u
H.f(a,"$iA")
u=this.f
if(u!=null)u.B(a)},
ew:function(){return this.aH(null)},
saP:function(a){var u,t,s=this
if(!J.T(s.b,a)){u=s.b
if(u!=null)u.gt().T(0,s.gct())
t=s.b
s.b=a
if(a!=null)a.gt().h(0,s.gct())
u=new D.H("mover",t,s.b,[U.a5])
u.b=!0
s.aH(u)}},
$icv:1,
$idd:1}
X.dO.prototype={}
V.fe.prototype={
hx:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=this
H.o(c,{func:1,ret:-1,args:[P.X]})
if(l.c==null)return
u=l.d.length
t=P.ko().gbj().j(0,l.a)
if(t==null||t.length<=u){s=!0
r=!1}else{if(u>=t.length)return H.d(t,u)
r=t[u]==="1"
s=!1}c.$1(r)
q=document
p=q.createElement("label")
o=p.style
o.whiteSpace="nowrap"
J.kO(l.c).h(0,p)
n=W.mz("checkbox")
n.checked=r
o=W.m
W.a6(n,"change",H.o(new V.ff(l,c,n,u),{func:1,ret:-1,args:[o]}),!1,o)
p.appendChild(n)
m=q.createElement("span")
m.textContent=b
p.appendChild(m)
J.kO(l.c).h(0,q.createElement("br"))
C.a.h(l.d,n)
if(s)l.d2(u,r)},
d2:function(a,b){var u,t,s,r,q,p=this.a,o=P.ko().gbj().j(0,p)
if(o==null)o=""
u=o.length
if(u<a)o=C.b.im(o,a-u+1,"0")
t=a>0?C.b.p(o,0,a):""
t+=H.F(b)?"1":"0"
u=a+1
if(u<o.length)t+=C.b.a5(o,u)
s=P.ko()
u=P.i
r=P.mF(s.gbj(),u,u)
r.k(0,p,t)
q=s.dQ(0,r)
p=window.history
u=q.i(0)
p.toString
p.replaceState(new P.jn([],[]).cg(""),"",u)},
seF:function(a){this.d=H.n(a,"$ic",[W.cg],"$ac")}}
V.ff.prototype={
$1:function(a){var u=this,t=u.c
u.b.$1(t.checked)
u.a.d2(u.d,t.checked)},
$S:14}
V.k0.prototype={
$1:function(a){var u
H.f(a,"$ib4")
u=C.e.dX(this.a.gi0(),2)
if(u!=="0.00")P.kK(u+" fps")},
$S:51}
V.hL.prototype={
eg:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
r=W.m
W.a6(q,"scroll",H.o(new V.hN(o),{func:1,ret:-1,args:[r]}),!1,r)},
d5:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.n(a,"$ic",[P.i],"$ac")
this.he()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.iJ(C.a.i6(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.w)(s),++q){p=s[q]
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
if(H.oB(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.d(m,1)
l.href=H.S(m[1])
l.textContent=H.S(m[0])
t.appendChild(l)}else{k=P.jx(C.O,n,C.h,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.k(k)
l.textContent=n
t.appendChild(l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
t.appendChild(o)
break}}this.a.appendChild(t)},
hy:function(a){var u,t,s,r,q,p,o,n="auto"
H.n(a,"$ic",[P.i],"$ac")
u=document
t=u.createElement("table")
t.id="shellTable"
s=t.style
s.width="100%"
s.padding="0px"
s.marginLeft=n
s.marginRight=n
this.a.appendChild(t)
r=t.insertRow(-1)
s=H.f(r.insertCell(-1),"$ibg").style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
for(q=0;q<1;++q){p=u.createElement("div")
p.id=a[q]
s=p.style
s.textAlign="left"
s=p.style
s.verticalAlign="top"
o=H.f(r.insertCell(-1),"$ibg")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
o.appendChild(p)}},
he:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new V.i7()
t=P.i
u.shk(new H.a_([t,V.cF]))
u.shn(new H.a_([t,V.cJ]))
u.c=null
u.c=u.N(0,q)
t=u.N(0,q).q(0,p)
s=V.al(new H.a3("*"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,p).q(0,p)
s=new V.bf()
r=[V.bd]
s.sar(H.e([],r))
C.a.h(t.a,s)
t=V.al(new H.a3("*"))
C.a.h(s.a,t)
t=u.N(0,p).q(0,"BoldEnd")
s=V.al(new H.a3("*"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,q).q(0,o)
s=V.al(new H.a3("_"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,o).q(0,o)
s=new V.bf()
s.sar(H.e([],r))
C.a.h(t.a,s)
t=V.al(new H.a3("_"))
C.a.h(s.a,t)
t=u.N(0,o).q(0,n)
s=V.al(new H.a3("_"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,q).q(0,m)
s=V.al(new H.a3("`"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,m).q(0,m)
s=new V.bf()
s.sar(H.e([],r))
C.a.h(t.a,s)
t=V.al(new H.a3("`"))
C.a.h(s.a,t)
t=u.N(0,m).q(0,"CodeEnd")
s=V.al(new H.a3("`"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,q).q(0,l)
s=V.al(new H.a3("["))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,l).q(0,k)
s=V.al(new H.a3("|"))
C.a.h(t.a,s)
s=u.N(0,l).q(0,j)
t=V.al(new H.a3("]"))
C.a.h(s.a,t)
s.c=!0
s=u.N(0,l).q(0,l)
t=new V.bf()
t.sar(H.e([],r))
C.a.h(s.a,t)
s=V.al(new H.a3("|]"))
C.a.h(t.a,s)
s=u.N(0,k).q(0,j)
t=V.al(new H.a3("]"))
C.a.h(s.a,t)
s.c=!0
s=u.N(0,k).q(0,k)
t=new V.bf()
t.sar(H.e([],r))
C.a.h(s.a,t)
s=V.al(new H.a3("|]"))
C.a.h(t.a,s)
C.a.h(u.N(0,q).q(0,i).a,new V.f_())
s=u.N(0,i).q(0,i)
t=new V.bf()
t.sar(H.e([],r))
C.a.h(s.a,t)
s=V.al(new H.a3("*_`["))
C.a.h(t.a,s)
s=u.N(0,"BoldEnd")
s.d=s.a.b3(p)
s=u.N(0,n)
s.d=s.a.b3(o)
s=u.N(0,"CodeEnd")
s.d=s.a.b3(m)
s=u.N(0,j)
s.d=s.a.b3("Link")
s=u.N(0,i)
s.d=s.a.b3(i)
this.b=u}}
V.hN.prototype={
$1:function(a){P.li(C.n,new V.hM(this.a))},
$S:14}
V.hM.prototype={
$0:function(){var u=C.e.ah(document.documentElement.scrollTop),t=this.a.style,s=H.k(-0.01*u)+"px"
t.top=s},
$S:2}
X.jX.prototype={
$1:function(a){var u,t,s,r,q
H.f(a,"$iA")
u=this.a
t=-this.b.c.d
s=Math.cos(t)
r=Math.sin(t)
t=new V.aH(s,0,-r,0,1,0,r,0,s)
if(!J.T(u.z,t)){q=u.z
u.z=t
u.Q=t.bf(0)
t=new D.H("velocityRotation",q,u.z,[V.aH])
t.b=!0
u.I(t)}},
$S:8}
X.jY.prototype={
$1:function(a){this.a.r.r=a},
$S:52};(function aliases(){var u=J.a.prototype
u.e8=u.i
u=J.dr.prototype
u.e9=u.i
u=O.cs.prototype
u.cm=u.as
u=O.b1.prototype
u.cn=u.as
u=V.dw.prototype
u.ea=u.aO
u.cl=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"o9","nk",12)
u(P,"oa","nl",12)
u(P,"ob","nm",12)
t(P,"lK","o7",3)
var n
s(n=E.ao.prototype,"gdH",0,0,null,["$1","$0"],["dI","ik"],0,0)
s(n,"gdJ",0,0,null,["$1","$0"],["dK","il"],0,0)
s(n,"gdF",0,0,null,["$1","$0"],["dG","ij"],0,0)
s(n,"gdD",0,0,null,["$1","$0"],["dE","ig"],0,0)
r(n,"gic","ie",5)
r(n,"gih","ii",5)
s(n=E.dR.prototype,"gcp",0,0,null,["$1","$0"],["cr","cq"],0,0)
q(n,"giA","dR",3)
p(n=X.ds.prototype,"gek","el",30)
r(n,"gei","ej",24)
r(n,"gem","en",24)
p(n,"gbq","br",1)
p(n,"gbD","bE",1)
p(n=X.dY.prototype,"gfv","fw",13)
p(n,"gfi","fj",13)
p(n,"gfo","fp",4)
p(n,"gbD","bE",15)
p(n,"gbq","br",15)
p(n,"gfD","fE",4)
p(n,"gfH","fI",4)
p(n,"gft","fu",4)
p(n,"gfF","fG",4)
p(n,"gfq","fs",4)
p(n,"gfJ","fK",36)
p(n,"gfL","fM",13)
p(n,"gfX","fY",11)
p(n,"gfT","fU",11)
p(n,"gfV","fW",11)
s(D.bq.prototype,"gep",0,0,null,["$1","$0"],["ap","eq"],0,0)
s(n=D.dt.prototype,"gcR",0,0,null,["$1","$0"],["cS","fB"],0,0)
p(n,"gfN","fO",38)
r(n,"gfc","fd",20)
r(n,"gfR","fS",20)
o(V.a2.prototype,"gl","c5",19)
o(V.L.prototype,"gl","c5",19)
s(n=U.cn.prototype,"gaE",0,0,null,["$1","$0"],["I","a6"],0,0)
r(n,"gfa","fb",18)
r(n,"gfP","fQ",18)
s(n=U.dZ.prototype,"gaE",0,0,null,["$1","$0"],["I","a6"],0,0)
p(n,"gf4","f5",1)
p(n,"gf6","f7",1)
p(n,"gf8","f9",1)
p(n,"gf0","f1",1)
p(n,"gf2","f3",1)
p(n,"ghs","ht",1)
p(n,"ghq","hr",1)
p(n,"gho","hp",1)
s(n=U.e_.prototype,"gaE",0,0,null,["$1","$0"],["I","a6"],0,0)
p(n,"gfz","fA",1)
s(n=M.dj.prototype,"gaF",0,0,null,["$1","$0"],["aG","es"],0,0)
r(n,"gfk","fl",5)
r(n,"gfm","fn",5)
s(n=O.dx.prototype,"gb9",0,0,null,["$1","$0"],["W","bC"],0,0)
s(n,"gh8",0,0,null,["$1","$0"],["cW","h9"],0,0)
r(n,"gfe","ff",23)
r(n,"gfg","fh",23)
s(O.cs.prototype,"gb9",0,0,null,["$1","$0"],["W","bC"],0,0)
s(X.dD.prototype,"gct",0,0,null,["$1","$0"],["aH","ew"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.O,null)
s(P.O,[H.kg,J.a,J.ap,P.ei,P.h,H.du,P.aY,H.bP,H.cN,H.fj,H.ic,P.bs,H.ch,H.ez,P.ah,H.fQ,H.fS,H.fM,P.eF,P.b9,P.aB,P.e2,P.hV,P.cG,P.hW,P.b4,P.an,P.jA,P.jj,P.cQ,P.eh,P.v,P.js,P.fZ,P.bL,P.jz,P.jy,P.X,P.at,P.a7,P.br,P.ht,P.dN,P.ea,P.fH,P.c,P.y,P.J,P.aq,P.i,P.a4,P.c0,P.is,P.jk,W.fm,W.cg,W.D,W.dm,P.jm,P.eK,P.je,P.N,O.Y,O.ct,E.fa,E.ao,E.hz,E.dR,Z.e1,Z.iN,Z.db,Z.bt,Z.bh,D.fd,D.bO,D.A,X.dc,X.ag,X.fO,X.fW,X.be,X.hk,X.i8,X.dY,D.bq,D.aa,D.dE,D.dM,V.Z,V.bp,V.fz,V.aH,V.ab,V.ai,V.aj,V.cB,V.dH,V.a2,V.L,U.dZ,U.e_,M.dj,A.d8,A.f3,A.af,A.aF,A.aK,A.aO,A.h4,A.bW,A.bX,A.bZ,A.dU,A.il,F.a8,F.bc,F.bA,F.dK,F.hI,F.hJ,F.hK,F.b7,F.iE,F.iF,F.iI,F.iJ,O.bV,O.cs,O.h5,T.i3,V.f_,V.bd,V.dw,V.hH,V.cF,V.dS,V.cJ,V.i7,X.dd,X.dO,X.dD,V.fe,V.hL])
s(J.a,[J.fL,J.dq,J.dr,J.aZ,J.cq,J.bw,H.cw,H.bz,W.j,W.eZ,W.bJ,W.cf,W.aW,W.aX,W.P,W.e4,W.fq,W.fr,W.e6,W.di,W.e8,W.ft,W.m,W.eb,W.aG,W.fJ,W.ed,W.bb,W.fV,W.he,W.ej,W.ek,W.aI,W.el,W.eo,W.aJ,W.es,W.eu,W.aM,W.ev,W.aN,W.eA,W.ax,W.eD,W.i6,W.aQ,W.eG,W.ia,W.ix,W.eM,W.eO,W.eQ,W.eS,W.eU,P.b0,P.ef,P.b3,P.eq,P.hx,P.eB,P.b5,P.eI,P.f4,P.e3,P.d9,P.dG,P.bU,P.dJ,P.dP,P.dV,P.ex])
s(J.dr,[J.hu,J.c_,J.bx])
t(J.kf,J.aZ)
s(J.cq,[J.dp,J.dn])
t(P.fU,P.ei)
s(P.fU,[H.dW,W.iW,W.iV,P.fD])
t(H.a3,H.dW)
s(P.h,[H.fw,H.h_,H.iO])
s(P.aY,[H.h0,H.iP])
t(H.fk,H.fj)
s(P.bs,[H.hq,H.fN,H.iq,H.ie,H.fc,H.hF,P.f2,P.dC,P.aU,P.ir,P.io,P.hR,P.fh,P.fp])
s(H.ch,[H.k2,H.i_,H.jT,H.jU,H.jV,P.iS,P.iR,P.iT,P.iU,P.jr,P.jq,P.j1,P.j5,P.j2,P.j3,P.j4,P.j8,P.j9,P.j7,P.j6,P.hX,P.hY,P.jK,P.jh,P.jg,P.ji,P.fT,P.fY,P.fu,P.fv,P.iw,P.it,P.iu,P.iv,P.jt,P.ju,P.jw,P.jv,P.jE,P.jD,P.jF,P.jG,W.hg,W.hi,W.hE,W.hU,W.j0,P.jo,P.jM,P.fE,P.fF,P.f6,E.hA,E.hB,E.hC,E.i5,D.fA,D.fB,F.jB,F.jQ,F.jR,F.iL,F.iK,F.iG,F.iH,O.h8,O.h9,O.ha,O.hb,O.hc,O.hd,T.i4,V.ff,V.k0,V.hN,V.hM,X.jX,X.jY])
s(H.i_,[H.hS,H.cd])
t(H.iQ,P.f2)
t(P.fX,P.ah)
t(H.a_,P.fX)
t(H.fR,H.fw)
t(H.dz,H.bz)
s(H.dz,[H.cR,H.cT])
t(H.cS,H.cR)
t(H.cx,H.cS)
t(H.cU,H.cT)
t(H.dA,H.cU)
s(H.dA,[H.hl,H.hm,H.hn,H.ho,H.hp,H.dB,H.cy])
t(P.jf,P.jA)
t(P.jd,P.jj)
t(P.eL,P.fZ)
t(P.dX,P.eL)
s(P.bL,[P.f8,P.fx])
t(P.bN,P.hW)
s(P.bN,[P.f9,P.iA,P.iz])
t(P.iy,P.fx)
s(P.a7,[P.z,P.l])
s(P.aU,[P.bT,P.fK])
t(P.iY,P.c0)
s(W.j,[W.G,W.fC,W.cu,W.aL,W.cV,W.aP,W.ay,W.cX,W.iM,W.cO,P.f7,P.bI])
s(W.G,[W.a0,W.bo])
s(W.a0,[W.r,P.p])
s(W.r,[W.f0,W.f1,W.bK,W.dg,W.fG,W.co,W.cp,W.hG,W.bg])
s(W.aW,[W.cj,W.fn,W.fo])
t(W.fl,W.aX)
t(W.ck,W.e4)
t(W.e7,W.e6)
t(W.dh,W.e7)
t(W.e9,W.e8)
t(W.fs,W.e9)
t(W.aw,W.bJ)
t(W.ec,W.eb)
t(W.cl,W.ec)
t(W.ee,W.ed)
t(W.bQ,W.ee)
t(W.bD,W.m)
s(W.bD,[W.b_,W.ac,W.aR])
t(W.hf,W.ej)
t(W.hh,W.ek)
t(W.em,W.el)
t(W.hj,W.em)
t(W.ep,W.eo)
t(W.cz,W.ep)
t(W.et,W.es)
t(W.hv,W.et)
t(W.hD,W.eu)
t(W.cW,W.cV)
t(W.hO,W.cW)
t(W.ew,W.ev)
t(W.hP,W.ew)
t(W.hT,W.eA)
t(W.eE,W.eD)
t(W.i0,W.eE)
t(W.cY,W.cX)
t(W.i1,W.cY)
t(W.eH,W.eG)
t(W.i9,W.eH)
t(W.b8,W.ac)
t(W.eN,W.eM)
t(W.iX,W.eN)
t(W.e5,W.di)
t(W.eP,W.eO)
t(W.ja,W.eP)
t(W.eR,W.eQ)
t(W.en,W.eR)
t(W.eT,W.eS)
t(W.jl,W.eT)
t(W.eV,W.eU)
t(W.jp,W.eV)
t(W.iZ,P.hV)
t(W.ks,W.iZ)
t(W.j_,P.cG)
t(P.jn,P.jm)
t(P.ak,P.je)
t(P.eg,P.ef)
t(P.fP,P.eg)
t(P.er,P.eq)
t(P.hr,P.er)
t(P.eC,P.eB)
t(P.hZ,P.eC)
t(P.eJ,P.eI)
t(P.ib,P.eJ)
t(P.f5,P.e3)
t(P.hs,P.bI)
t(P.ey,P.ex)
t(P.hQ,P.ey)
s(E.fa,[Z.da,A.cE,T.cI])
s(D.A,[D.bu,D.bv,D.H,X.bR,X.hw])
s(O.Y,[X.ds,D.dt,U.cn])
s(X.hw,[X.dv,X.by,X.dT])
s(D.fd,[U.fg,U.a5])
s(U.a5,[U.ci,U.dI])
t(A.h1,A.cE)
s(A.dU,[A.az,A.ii,A.ij,A.ik,A.ig,A.ae,A.ih,A.V,A.cL,A.im,A.cM,A.au,A.am,A.bY])
t(O.dx,O.bV)
s(O.cs,[O.h2,O.h3,O.b1])
s(O.b1,[O.h6,O.h7])
t(T.dQ,T.cI)
t(T.i2,T.dQ)
s(V.dw,[V.bf,V.cK])
t(X.fI,X.dO)
u(H.dW,H.cN)
u(H.cR,P.v)
u(H.cS,H.bP)
u(H.cT,P.v)
u(H.cU,H.bP)
u(P.ei,P.v)
u(P.eL,P.js)
u(W.e4,W.fm)
u(W.e6,P.v)
u(W.e7,W.D)
u(W.e8,P.v)
u(W.e9,W.D)
u(W.eb,P.v)
u(W.ec,W.D)
u(W.ed,P.v)
u(W.ee,W.D)
u(W.ej,P.ah)
u(W.ek,P.ah)
u(W.el,P.v)
u(W.em,W.D)
u(W.eo,P.v)
u(W.ep,W.D)
u(W.es,P.v)
u(W.et,W.D)
u(W.eu,P.ah)
u(W.cV,P.v)
u(W.cW,W.D)
u(W.ev,P.v)
u(W.ew,W.D)
u(W.eA,P.ah)
u(W.eD,P.v)
u(W.eE,W.D)
u(W.cX,P.v)
u(W.cY,W.D)
u(W.eG,P.v)
u(W.eH,W.D)
u(W.eM,P.v)
u(W.eN,W.D)
u(W.eO,P.v)
u(W.eP,W.D)
u(W.eQ,P.v)
u(W.eR,W.D)
u(W.eS,P.v)
u(W.eT,W.D)
u(W.eU,P.v)
u(W.eV,W.D)
u(P.ef,P.v)
u(P.eg,W.D)
u(P.eq,P.v)
u(P.er,W.D)
u(P.eB,P.v)
u(P.eC,W.D)
u(P.eI,P.v)
u(P.eJ,W.D)
u(P.e3,P.ah)
u(P.ex,P.v)
u(P.ey,W.D)})()
var v={mangledGlobalNames:{l:"int",z:"double",a7:"num",i:"String",X:"bool",J:"Null",c:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.A]},{func:1,ret:-1,args:[D.A]},{func:1,ret:P.J},{func:1,ret:-1},{func:1,ret:-1,args:[W.ac]},{func:1,ret:-1,args:[P.l,[P.h,E.ao]]},{func:1,ret:P.J,args:[,,]},{func:1,ret:-1,args:[P.i,,]},{func:1,ret:P.J,args:[D.A]},{func:1,ret:P.J,args:[F.a8]},{func:1,ret:-1,args:[P.l,P.l]},{func:1,ret:-1,args:[W.aR]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.m]},{func:1,ret:P.J,args:[W.m]},{func:1,ret:-1,args:[W.b_]},{func:1,ret:P.J,args:[F.b7,P.z,P.z]},{func:1,ret:P.i,args:[P.l]},{func:1,ret:-1,args:[P.l,[P.h,U.a5]]},{func:1,ret:P.z},{func:1,ret:-1,args:[P.l,[P.h,D.aa]]},{func:1,ret:P.J,args:[,]},{func:1,args:[,]},{func:1,ret:-1,args:[P.l,[P.h,V.ab]]},{func:1,ret:-1,args:[P.l,[P.h,X.ag]]},{func:1,ret:P.J,args:[{func:1,ret:-1,args:[D.A]}]},{func:1,ret:-1,args:[P.i,P.i]},{func:1,ret:P.X,args:[W.G]},{func:1,ret:P.J,args:[P.a7]},{func:1,args:[W.m]},{func:1,ret:P.X,args:[[P.h,X.ag]]},{func:1,ret:P.N,args:[,,]},{func:1,ret:P.N,args:[P.l]},{func:1,ret:P.J,args:[P.i,,]},{func:1,ret:P.i,args:[P.i]},{func:1,ret:P.J,args:[P.i]},{func:1,ret:-1,args:[W.b8]},{func:1,ret:P.l,args:[P.l,P.l]},{func:1,ret:P.X,args:[[P.h,D.aa]]},{func:1,ret:-1,args:[P.i],opt:[,]},{func:1,ret:-1,args:[P.i,P.l]},{func:1,ret:[P.y,P.i,P.i],args:[[P.y,P.i,P.i],P.i]},{func:1,ret:[P.aB,,],args:[,]},{func:1,ret:P.z,args:[P.z,P.z]},{func:1,ret:P.J,args:[,],opt:[P.aq]},{func:1,ret:P.J,args:[{func:1,ret:-1}]},{func:1,args:[P.i]},{func:1,ret:P.l,args:[A.aF,A.aF]},{func:1,ret:P.l,args:[A.aK,A.aK]},{func:1,ret:P.l,args:[A.aO,A.aO]},{func:1,args:[,P.i]},{func:1,ret:P.J,args:[P.b4]},{func:1,ret:P.J,args:[P.X]},{func:1,ret:W.a0,args:[W.G]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.j=W.bK.prototype
C.J=J.a.prototype
C.a=J.aZ.prototype
C.K=J.dn.prototype
C.d=J.dp.prototype
C.o=J.dq.prototype
C.e=J.cq.prototype
C.b=J.bw.prototype
C.L=J.bx.prototype
C.R=W.cz.prototype
C.w=J.hu.prototype
C.c=P.bU.prototype
C.p=J.c_.prototype
C.x=W.b8.prototype
C.y=W.cO.prototype
C.S=new P.f9()
C.z=new P.f8()
C.q=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.A=function() {
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
C.F=function(getTagFallback) {
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
C.B=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.C=function(hooks) {
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
C.E=function(hooks) {
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
C.D=function(hooks) {
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
C.r=function(hooks) { return hooks; }

C.G=new P.ht()
C.h=new P.iy()
C.H=new P.iA()
C.f=new P.jf()
C.n=new P.br(0)
C.I=new P.br(5e6)
C.t=H.e(u([127,2047,65535,1114111]),[P.l])
C.k=H.e(u([0,0,32776,33792,1,10240,0,0]),[P.l])
C.l=H.e(u([0,0,65490,45055,65535,34815,65534,18431]),[P.l])
C.m=H.e(u([0,0,26624,1023,65534,2047,65534,2047]),[P.l])
C.N=H.e(u([0,0,32722,12287,65534,34815,65534,18431]),[P.l])
C.O=H.e(u([0,0,65498,45055,65535,34815,65534,18431]),[P.l])
C.i=H.e(u([0,0,24576,1023,65534,34815,65534,18431]),[P.l])
C.u=H.e(u([0,0,32754,11263,65534,34815,65534,18431]),[P.l])
C.P=H.e(u([0,0,32722,12287,65535,34815,65534,18431]),[P.l])
C.v=H.e(u([0,0,65490,12287,65535,34815,65534,18431]),[P.l])
C.M=H.e(u([]),[P.i])
C.Q=new H.fk(0,{},C.M,[P.i,P.i])})();(function staticFields(){$.aV=0
$.ce=null
$.kQ=null
$.ky=!1
$.lO=null
$.lI=null
$.lV=null
$.jN=null
$.jW=null
$.kH=null
$.c3=null
$.d0=null
$.d1=null
$.kz=!1
$.W=C.f
$.ar=[]
$.l_=null
$.l3=null
$.l7=null
$.cA=null
$.ld=null
$.lo=null
$.lq=null
$.iB=null
$.iC=null
$.iD=null
$.lp=null
$.l6=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"oJ","m0",function(){return H.lN("_$dart_dartClosure")})
u($,"oK","kL",function(){return H.lN("_$dart_js")})
u($,"oP","m1",function(){return H.b6(H.id({
toString:function(){return"$receiver$"}}))})
u($,"oQ","m2",function(){return H.b6(H.id({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"oR","m3",function(){return H.b6(H.id(null))})
u($,"oS","m4",function(){return H.b6(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"oV","m7",function(){return H.b6(H.id(void 0))})
u($,"oW","m8",function(){return H.b6(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"oU","m6",function(){return H.b6(H.lk(null))})
u($,"oT","m5",function(){return H.b6(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"oY","ma",function(){return H.b6(H.lk(void 0))})
u($,"oX","m9",function(){return H.b6(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"pd","kM",function(){return P.nj()})
u($,"p_","mb",function(){return P.ne()})
u($,"pe","mf",function(){return H.mN(H.c2(H.e([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.l])))})
u($,"pf","mg",function(){return P.n0("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"pg","mh",function(){return P.nH()})
u($,"p6","me",function(){return Z.aA(0)})
u($,"p0","mc",function(){return Z.aA(511)})
u($,"p8","bm",function(){return Z.aA(1)})
u($,"p7","bl",function(){return Z.aA(2)})
u($,"p2","bk",function(){return Z.aA(4)})
u($,"p9","bn",function(){return Z.aA(8)})
u($,"pa","bG",function(){return Z.aA(16)})
u($,"p3","d3",function(){return Z.aA(32)})
u($,"p4","d4",function(){return Z.aA(64)})
u($,"p5","md",function(){return Z.aA(96)})
u($,"pb","cc",function(){return Z.aA(128)})
u($,"p1","bj",function(){return Z.aA(256)})
u($,"oI","m_",function(){return new V.fz(1e-9)})
u($,"oH","I",function(){return $.m_()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cw,DataView:H.bz,ArrayBufferView:H.bz,Float32Array:H.cx,Float64Array:H.cx,Int16Array:H.hl,Int32Array:H.hm,Int8Array:H.hn,Uint16Array:H.ho,Uint32Array:H.hp,Uint8ClampedArray:H.dB,CanvasPixelArray:H.dB,Uint8Array:H.cy,HTMLAudioElement:W.r,HTMLBRElement:W.r,HTMLBaseElement:W.r,HTMLBodyElement:W.r,HTMLButtonElement:W.r,HTMLContentElement:W.r,HTMLDListElement:W.r,HTMLDataElement:W.r,HTMLDataListElement:W.r,HTMLDetailsElement:W.r,HTMLDialogElement:W.r,HTMLEmbedElement:W.r,HTMLFieldSetElement:W.r,HTMLHRElement:W.r,HTMLHeadElement:W.r,HTMLHeadingElement:W.r,HTMLHtmlElement:W.r,HTMLIFrameElement:W.r,HTMLLIElement:W.r,HTMLLabelElement:W.r,HTMLLegendElement:W.r,HTMLLinkElement:W.r,HTMLMapElement:W.r,HTMLMediaElement:W.r,HTMLMenuElement:W.r,HTMLMetaElement:W.r,HTMLMeterElement:W.r,HTMLModElement:W.r,HTMLOListElement:W.r,HTMLObjectElement:W.r,HTMLOptGroupElement:W.r,HTMLOptionElement:W.r,HTMLOutputElement:W.r,HTMLParagraphElement:W.r,HTMLParamElement:W.r,HTMLPictureElement:W.r,HTMLPreElement:W.r,HTMLProgressElement:W.r,HTMLQuoteElement:W.r,HTMLScriptElement:W.r,HTMLShadowElement:W.r,HTMLSlotElement:W.r,HTMLSourceElement:W.r,HTMLSpanElement:W.r,HTMLStyleElement:W.r,HTMLTableCaptionElement:W.r,HTMLTableColElement:W.r,HTMLTableElement:W.r,HTMLTableRowElement:W.r,HTMLTableSectionElement:W.r,HTMLTemplateElement:W.r,HTMLTextAreaElement:W.r,HTMLTimeElement:W.r,HTMLTitleElement:W.r,HTMLTrackElement:W.r,HTMLUListElement:W.r,HTMLUnknownElement:W.r,HTMLVideoElement:W.r,HTMLDirectoryElement:W.r,HTMLFontElement:W.r,HTMLFrameElement:W.r,HTMLFrameSetElement:W.r,HTMLMarqueeElement:W.r,HTMLElement:W.r,AccessibleNodeList:W.eZ,HTMLAnchorElement:W.f0,HTMLAreaElement:W.f1,Blob:W.bJ,HTMLCanvasElement:W.bK,CanvasRenderingContext2D:W.cf,CDATASection:W.bo,CharacterData:W.bo,Comment:W.bo,ProcessingInstruction:W.bo,Text:W.bo,CSSNumericValue:W.cj,CSSUnitValue:W.cj,CSSPerspective:W.fl,CSSCharsetRule:W.P,CSSConditionRule:W.P,CSSFontFaceRule:W.P,CSSGroupingRule:W.P,CSSImportRule:W.P,CSSKeyframeRule:W.P,MozCSSKeyframeRule:W.P,WebKitCSSKeyframeRule:W.P,CSSKeyframesRule:W.P,MozCSSKeyframesRule:W.P,WebKitCSSKeyframesRule:W.P,CSSMediaRule:W.P,CSSNamespaceRule:W.P,CSSPageRule:W.P,CSSRule:W.P,CSSStyleRule:W.P,CSSSupportsRule:W.P,CSSViewportRule:W.P,CSSStyleDeclaration:W.ck,MSStyleCSSProperties:W.ck,CSS2Properties:W.ck,CSSImageValue:W.aW,CSSKeywordValue:W.aW,CSSPositionValue:W.aW,CSSResourceValue:W.aW,CSSURLImageValue:W.aW,CSSStyleValue:W.aW,CSSMatrixComponent:W.aX,CSSRotation:W.aX,CSSScale:W.aX,CSSSkew:W.aX,CSSTranslation:W.aX,CSSTransformComponent:W.aX,CSSTransformValue:W.fn,CSSUnparsedValue:W.fo,DataTransferItemList:W.fq,HTMLDivElement:W.dg,DOMException:W.fr,ClientRectList:W.dh,DOMRectList:W.dh,DOMRectReadOnly:W.di,DOMStringList:W.fs,DOMTokenList:W.ft,Element:W.a0,AbortPaymentEvent:W.m,AnimationEvent:W.m,AnimationPlaybackEvent:W.m,ApplicationCacheErrorEvent:W.m,BackgroundFetchClickEvent:W.m,BackgroundFetchEvent:W.m,BackgroundFetchFailEvent:W.m,BackgroundFetchedEvent:W.m,BeforeInstallPromptEvent:W.m,BeforeUnloadEvent:W.m,BlobEvent:W.m,CanMakePaymentEvent:W.m,ClipboardEvent:W.m,CloseEvent:W.m,CustomEvent:W.m,DeviceMotionEvent:W.m,DeviceOrientationEvent:W.m,ErrorEvent:W.m,ExtendableEvent:W.m,ExtendableMessageEvent:W.m,FetchEvent:W.m,FontFaceSetLoadEvent:W.m,ForeignFetchEvent:W.m,GamepadEvent:W.m,HashChangeEvent:W.m,InstallEvent:W.m,MediaEncryptedEvent:W.m,MediaKeyMessageEvent:W.m,MediaQueryListEvent:W.m,MediaStreamEvent:W.m,MediaStreamTrackEvent:W.m,MessageEvent:W.m,MIDIConnectionEvent:W.m,MIDIMessageEvent:W.m,MutationEvent:W.m,NotificationEvent:W.m,PageTransitionEvent:W.m,PaymentRequestEvent:W.m,PaymentRequestUpdateEvent:W.m,PopStateEvent:W.m,PresentationConnectionAvailableEvent:W.m,PresentationConnectionCloseEvent:W.m,ProgressEvent:W.m,PromiseRejectionEvent:W.m,PushEvent:W.m,RTCDataChannelEvent:W.m,RTCDTMFToneChangeEvent:W.m,RTCPeerConnectionIceEvent:W.m,RTCTrackEvent:W.m,SecurityPolicyViolationEvent:W.m,SensorErrorEvent:W.m,SpeechRecognitionError:W.m,SpeechRecognitionEvent:W.m,SpeechSynthesisEvent:W.m,StorageEvent:W.m,SyncEvent:W.m,TrackEvent:W.m,TransitionEvent:W.m,WebKitTransitionEvent:W.m,VRDeviceEvent:W.m,VRDisplayEvent:W.m,VRSessionEvent:W.m,MojoInterfaceRequestEvent:W.m,ResourceProgressEvent:W.m,USBConnectionEvent:W.m,IDBVersionChangeEvent:W.m,AudioProcessingEvent:W.m,OfflineAudioCompletionEvent:W.m,WebGLContextEvent:W.m,Event:W.m,InputEvent:W.m,AbsoluteOrientationSensor:W.j,Accelerometer:W.j,AccessibleNode:W.j,AmbientLightSensor:W.j,Animation:W.j,ApplicationCache:W.j,DOMApplicationCache:W.j,OfflineResourceList:W.j,BackgroundFetchRegistration:W.j,BatteryManager:W.j,BroadcastChannel:W.j,CanvasCaptureMediaStreamTrack:W.j,DedicatedWorkerGlobalScope:W.j,EventSource:W.j,FileReader:W.j,FontFaceSet:W.j,Gyroscope:W.j,XMLHttpRequest:W.j,XMLHttpRequestEventTarget:W.j,XMLHttpRequestUpload:W.j,LinearAccelerationSensor:W.j,Magnetometer:W.j,MediaDevices:W.j,MediaKeySession:W.j,MediaQueryList:W.j,MediaRecorder:W.j,MediaSource:W.j,MediaStream:W.j,MediaStreamTrack:W.j,MIDIAccess:W.j,MIDIInput:W.j,MIDIOutput:W.j,MIDIPort:W.j,NetworkInformation:W.j,Notification:W.j,OffscreenCanvas:W.j,OrientationSensor:W.j,PaymentRequest:W.j,Performance:W.j,PermissionStatus:W.j,PresentationAvailability:W.j,PresentationConnection:W.j,PresentationConnectionList:W.j,PresentationRequest:W.j,RelativeOrientationSensor:W.j,RemotePlayback:W.j,RTCDataChannel:W.j,DataChannel:W.j,RTCDTMFSender:W.j,RTCPeerConnection:W.j,webkitRTCPeerConnection:W.j,mozRTCPeerConnection:W.j,ScreenOrientation:W.j,Sensor:W.j,ServiceWorker:W.j,ServiceWorkerContainer:W.j,ServiceWorkerGlobalScope:W.j,ServiceWorkerRegistration:W.j,SharedWorker:W.j,SharedWorkerGlobalScope:W.j,SpeechRecognition:W.j,SpeechSynthesis:W.j,SpeechSynthesisUtterance:W.j,VR:W.j,VRDevice:W.j,VRDisplay:W.j,VRSession:W.j,VisualViewport:W.j,WebSocket:W.j,Worker:W.j,WorkerGlobalScope:W.j,WorkerPerformance:W.j,BluetoothDevice:W.j,BluetoothRemoteGATTCharacteristic:W.j,Clipboard:W.j,MojoInterfaceInterceptor:W.j,USB:W.j,IDBDatabase:W.j,IDBOpenDBRequest:W.j,IDBVersionChangeRequest:W.j,IDBRequest:W.j,IDBTransaction:W.j,AnalyserNode:W.j,RealtimeAnalyserNode:W.j,AudioBufferSourceNode:W.j,AudioDestinationNode:W.j,AudioNode:W.j,AudioScheduledSourceNode:W.j,AudioWorkletNode:W.j,BiquadFilterNode:W.j,ChannelMergerNode:W.j,AudioChannelMerger:W.j,ChannelSplitterNode:W.j,AudioChannelSplitter:W.j,ConstantSourceNode:W.j,ConvolverNode:W.j,DelayNode:W.j,DynamicsCompressorNode:W.j,GainNode:W.j,AudioGainNode:W.j,IIRFilterNode:W.j,MediaElementAudioSourceNode:W.j,MediaStreamAudioDestinationNode:W.j,MediaStreamAudioSourceNode:W.j,OscillatorNode:W.j,Oscillator:W.j,PannerNode:W.j,AudioPannerNode:W.j,webkitAudioPannerNode:W.j,ScriptProcessorNode:W.j,JavaScriptAudioNode:W.j,StereoPannerNode:W.j,WaveShaperNode:W.j,EventTarget:W.j,File:W.aw,FileList:W.cl,FileWriter:W.fC,HTMLFormElement:W.fG,Gamepad:W.aG,History:W.fJ,HTMLCollection:W.bQ,HTMLFormControlsCollection:W.bQ,HTMLOptionsCollection:W.bQ,ImageData:W.bb,HTMLImageElement:W.co,HTMLInputElement:W.cp,KeyboardEvent:W.b_,Location:W.fV,MediaList:W.he,MessagePort:W.cu,MIDIInputMap:W.hf,MIDIOutputMap:W.hh,MimeType:W.aI,MimeTypeArray:W.hj,PointerEvent:W.ac,MouseEvent:W.ac,DragEvent:W.ac,Document:W.G,DocumentFragment:W.G,HTMLDocument:W.G,ShadowRoot:W.G,XMLDocument:W.G,Attr:W.G,DocumentType:W.G,Node:W.G,NodeList:W.cz,RadioNodeList:W.cz,Plugin:W.aJ,PluginArray:W.hv,RTCStatsReport:W.hD,HTMLSelectElement:W.hG,SourceBuffer:W.aL,SourceBufferList:W.hO,SpeechGrammar:W.aM,SpeechGrammarList:W.hP,SpeechRecognitionResult:W.aN,Storage:W.hT,CSSStyleSheet:W.ax,StyleSheet:W.ax,HTMLTableCellElement:W.bg,HTMLTableDataCellElement:W.bg,HTMLTableHeaderCellElement:W.bg,TextTrack:W.aP,TextTrackCue:W.ay,VTTCue:W.ay,TextTrackCueList:W.i0,TextTrackList:W.i1,TimeRanges:W.i6,Touch:W.aQ,TouchEvent:W.aR,TouchList:W.i9,TrackDefaultList:W.ia,CompositionEvent:W.bD,FocusEvent:W.bD,TextEvent:W.bD,UIEvent:W.bD,URL:W.ix,VideoTrackList:W.iM,WheelEvent:W.b8,Window:W.cO,DOMWindow:W.cO,CSSRuleList:W.iX,ClientRect:W.e5,DOMRect:W.e5,GamepadList:W.ja,NamedNodeMap:W.en,MozNamedAttrMap:W.en,SpeechRecognitionResultList:W.jl,StyleSheetList:W.jp,SVGLength:P.b0,SVGLengthList:P.fP,SVGNumber:P.b3,SVGNumberList:P.hr,SVGPointList:P.hx,SVGStringList:P.hZ,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGScriptElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGTransform:P.b5,SVGTransformList:P.ib,AudioBuffer:P.f4,AudioParamMap:P.f5,AudioTrackList:P.f7,AudioContext:P.bI,webkitAudioContext:P.bI,BaseAudioContext:P.bI,OfflineAudioContext:P.hs,WebGLBuffer:P.d9,WebGLProgram:P.dG,WebGL2RenderingContext:P.bU,WebGLShader:P.dJ,WebGLTexture:P.dP,WebGLUniformLocation:P.dV,SQLResultSetRowList:P.hQ})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dz.$nativeSuperclassTag="ArrayBufferView"
H.cR.$nativeSuperclassTag="ArrayBufferView"
H.cS.$nativeSuperclassTag="ArrayBufferView"
H.cx.$nativeSuperclassTag="ArrayBufferView"
H.cT.$nativeSuperclassTag="ArrayBufferView"
H.cU.$nativeSuperclassTag="ArrayBufferView"
H.dA.$nativeSuperclassTag="ArrayBufferView"
W.cV.$nativeSuperclassTag="EventTarget"
W.cW.$nativeSuperclassTag="EventTarget"
W.cX.$nativeSuperclassTag="EventTarget"
W.cY.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(X.lR,[])
else X.lR([])})})()
//# sourceMappingURL=test.dart.js.map
