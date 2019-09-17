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
a[c]=function(){a[c]=function(){H.o7(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kg"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kg"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kg(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jZ:function jZ(){},
jq:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
kD:function(){return new P.hA("No element")},
dc:function(a,b,c,d){if(c-b<=32)H.mC(a,b,c,d)
else H.mB(a,b,c,d)},
mC:function(a,b,c,d){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.b(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.b(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.a1()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.b(a,q)
C.b.k(a,s,a[q])
s=q}C.b.k(a,s,t)}},
mB:function(a2,a3,a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.d.a4(a4-a3+1,6),d=a3+e,c=a4-e,b=C.d.a4(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
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
if(typeof a1!=="number")return a1.a1()
if(a1>0){p=t
t=u
u=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.a1()
if(a1>0){p=q
q=r
r=p}a1=a5.$2(u,s)
if(typeof a1!=="number")return a1.a1()
if(a1>0){p=s
s=u
u=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.a1()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(u,r)
if(typeof a1!=="number")return a1.a1()
if(a1>0){p=r
r=u
u=p}a1=a5.$2(s,r)
if(typeof a1!=="number")return a1.a1()
if(a1>0){p=r
r=s
s=p}a1=a5.$2(t,q)
if(typeof a1!=="number")return a1.a1()
if(a1>0){p=q
q=t
t=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.a1()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.a1()
if(a1>0){p=q
q=r
r=p}C.b.k(a2,d,u)
C.b.k(a2,b,s)
C.b.k(a2,c,q)
if(a3<0||a3>=a2.length)return H.b(a2,a3)
C.b.k(a2,a,a2[a3])
if(a4<0||a4>=a2.length)return H.b(a2,a4)
C.b.k(a2,a0,a2[a4])
o=a3+1
n=a4-1
if(J.y(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.R()
if(k<0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.b.k(a2,m,a2[o])
C.b.k(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a1()
if(k>0){--n
continue}else{j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.b(a2,o)
C.b.k(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.b(a2,n)
C.b.k(a2,o,a2[n])
C.b.k(a2,n,l)
n=j
o=i
break}else{if(n>=a1)return H.b(a2,n)
C.b.k(a2,m,a2[n])
C.b.k(a2,n,l)
n=j
break}}}}h=!0}else{for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
g=a5.$2(l,t)
if(typeof g!=="number")return g.R()
if(g<0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.b.k(a2,m,a2[o])
C.b.k(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.a1()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.a1()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.R()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.b(a2,o)
C.b.k(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.b(a2,n)
C.b.k(a2,o,a2[n])
C.b.k(a2,n,l)
o=i}else{if(n>=a1)return H.b(a2,n)
C.b.k(a2,m,a2[n])
C.b.k(a2,n,l)}n=j
break}}}}h=!1}a1=o-1
if(a1>=a2.length)return H.b(a2,a1)
C.b.k(a2,a3,a2[a1])
C.b.k(a2,a1,t)
a1=n+1
if(a1<0||a1>=a2.length)return H.b(a2,a1)
C.b.k(a2,a4,a2[a1])
C.b.k(a2,a1,r)
H.dc(a2,a3,o-2,a5)
H.dc(a2,n+2,a4,a5)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.b(a2,o)
if(!J.y(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.b(a2,n)
if(!J.y(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.b.k(a2,m,a2[o])
C.b.k(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.R()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.b(a2,o)
C.b.k(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.b(a2,n)
C.b.k(a2,o,a2[n])
C.b.k(a2,n,l)
o=i}else{if(n>=a1)return H.b(a2,n)
C.b.k(a2,m,a2[n])
C.b.k(a2,n,l)}n=j
break}}}H.dc(a2,o,n,a5)}else H.dc(a2,o,n,a5)},
N:function N(a){this.a=a},
f6:function f6(){},
cV:function cV(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
fF:function fF(a,b,c){this.a=a
this.b=b
this.$ti=c},
fG:function fG(a,b){this.a=null
this.b=a
this.c=b},
iy:function iy(a,b,c){this.a=a
this.b=b
this.$ti=c},
iz:function iz(a,b){this.a=a
this.b=b},
cK:function cK(){},
i8:function i8(){},
dr:function dr(){},
m1:function(){throw H.d(P.x("Cannot modify unmodifiable Map"))},
es:function(a){var u,t=H.o8(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
nT:function(a){return v.types[a]},
lq:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.R(a).$iz},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a6(a)
if(typeof u!=="string")throw H.d(H.ab(a))
return u},
c5:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
mt:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.b(p,3)
u=p[3]
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.d(P.Y(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.a.H(s,q)|32)>t)return}return parseInt(a,b)},
c6:function(a){return H.mk(a)+H.lg(H.cs(a),0,null)},
mk:function(a){var u,t,s,r,q,p,o,n=J.R(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.N||!!n.$ibA){r=C.r(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.es(t.length>1&&C.a.H(t,0)===36?C.a.ah(t,1):t)},
ml:function(){if(!!self.location)return self.location.href
return},
kQ:function(a){var u,t,s,r,q=J.ah(a)
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
mu:function(a){var u,t,s,r=H.c([],[P.v])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.r)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.ab(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.d.aN(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.d(H.ab(s))}return H.kQ(r)},
kR:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.ab(s))
if(s<0)throw H.d(H.ab(s))
if(s>65535)return H.mu(a)}return H.kQ(a)},
mv:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
d6:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.aN(u,10))>>>0,56320|u&1023)}}throw H.d(P.Y(a,0,1114111,null,null))},
bt:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ms:function(a){var u=H.bt(a).getFullYear()+0
return u},
mq:function(a){var u=H.bt(a).getMonth()+1
return u},
mm:function(a){var u=H.bt(a).getDate()+0
return u},
mn:function(a){var u=H.bt(a).getHours()+0
return u},
mp:function(a){var u=H.bt(a).getMinutes()+0
return u},
mr:function(a){var u=H.bt(a).getSeconds()+0
return u},
mo:function(a){var u=H.bt(a).getMilliseconds()+0
return u},
m:function(a){throw H.d(H.ab(a))},
b:function(a,b){if(a==null)J.ah(a)
throw H.d(H.bJ(a,b))},
bJ:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.an(!0,b,s,null)
u=J.ah(a)
if(!(b<0)){if(typeof u!=="number")return H.m(u)
t=b>=u}else t=!0
if(t)return P.H(b,a,s,null,u)
return P.d7(b,s)},
nM:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bu(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bu(a,c,!0,b,"end",u)
return new P.an(!0,b,"end",null)},
ab:function(a){return new P.an(!0,a,null,null)},
nI:function(a){if(typeof a!=="number")throw H.d(H.ab(a))
return a},
d:function(a){var u
if(a==null)a=new P.d3()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.ly})
u.name=""}else u.toString=H.ly
return u},
ly:function(){return J.a6(this.dartException)},
p:function(a){throw H.d(a)},
r:function(a){throw H.d(P.bo(a))},
ay:function(a){var u,t,s,r,q,p
a=H.lu(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.u])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hX(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hY:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kY:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
kM:function(a,b){return new H.h6(a,b==null?null:b.method)},
k_:function(a,b){var u=b==null,t=u?null:b.method
return new H.fr(a,t,u?null:b.receiver)},
bh:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.jI(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.aN(t,16)&8191)===10)switch(s){case 438:return f.$1(H.k_(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.kM(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.lB()
q=$.lC()
p=$.lD()
o=$.lE()
n=$.lH()
m=$.lI()
l=$.lG()
$.lF()
k=$.lK()
j=$.lJ()
i=r.ak(u)
if(i!=null)return f.$1(H.k_(u,i))
else{i=q.ak(u)
if(i!=null){i.method="call"
return f.$1(H.k_(u,i))}else{i=p.ak(u)
if(i==null){i=o.ak(u)
if(i==null){i=n.ak(u)
if(i==null){i=m.ak(u)
if(i==null){i=l.ak(u)
if(i==null){i=o.ak(u)
if(i==null){i=k.ak(u)
if(i==null){i=j.ak(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.kM(u,i))}}return f.$1(new H.i7(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.de()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.an(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.de()
return a},
ki:function(a){var u
if(a==null)return new H.e3(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.e3(a)},
nQ:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.k(0,a[u],a[t])}return b},
nY:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.q("Unsupported number of arguments for wrapped closure"))},
bI:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nY)
a.$identity=u
return u},
m0:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hB().constructor.prototype):Object.create(new H.bL(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ao
if(typeof t!=="number")return t.w()
$.ao=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.kw(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.lX(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.kw(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
lX:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.nT,a)
if(typeof a=="function")if(b)return a
else{u=c?H.kv:H.jO
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.d("Error in functionType of tearoff")},
lY:function(a,b,c,d){var u=H.jO
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
kw:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.m_(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.lY(t,!r,u,b)
if(t===0){r=$.ao
if(typeof r!=="number")return r.w()
$.ao=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bM
return new Function(r+H.e(q==null?$.bM=H.eG("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ao
if(typeof r!=="number")return r.w()
$.ao=r+1
o+=r
r="return function("+o+"){return this."
q=$.bM
return new Function(r+H.e(q==null?$.bM=H.eG("self"):q)+"."+H.e(u)+"("+o+");}")()},
lZ:function(a,b,c,d){var u=H.jO,t=H.kv
switch(b?-1:a){case 0:throw H.d(H.mz("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
m_:function(a,b){var u,t,s,r,q,p,o,n=$.bM
if(n==null)n=$.bM=H.eG("self")
u=$.ku
if(u==null)u=$.ku=H.eG("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.lZ(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.ao
if(typeof u!=="number")return u.w()
$.ao=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.ao
if(typeof u!=="number")return u.w()
$.ao=u+1
return new Function(n+u+"}")()},
kg:function(a,b,c,d,e,f,g){return H.m0(a,b,c,d,!!e,!!f,g)},
jO:function(a){return a.a},
kv:function(a){return a.c},
eG:function(a){var u,t,s,r=new H.bL("self","target","receiver","name"),q=J.jX(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
o1:function(a,b){throw H.d(H.lW(a,H.es(b.substring(2))))},
h:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.R(a)[b]
else u=!0
if(u)return a
H.o1(a,b)},
nO:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
lW:function(a,b){return new H.eH("CastError: "+P.jU(a)+": type '"+H.e(H.nE(a))+"' is not a subtype of type '"+b+"'")},
nE:function(a){var u,t=J.R(a)
if(!!t.$ibN){u=H.nO(t)
if(u!=null)return H.o2(u)
return"Closure"}return H.c6(a)},
o7:function(a){throw H.d(new P.eX(a))},
mz:function(a){return new H.hl(a)},
ln:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
cs:function(a){if(a==null)return
return a.$ti},
oG:function(a,b,c){return H.jG(a["$a"+H.e(c)],H.cs(b))},
nS:function(a,b,c,d){var u=H.jG(a["$a"+H.e(c)],H.cs(b))
return u==null?null:u[d]},
lo:function(a,b,c){var u=H.jG(a["$a"+H.e(b)],H.cs(a))
return u==null?null:u[c]},
jn:function(a,b){var u=H.cs(a)
return u==null?null:u[b]},
o2:function(a){return H.bf(a,null)},
bf:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.es(a[0].name)+H.lg(a,1,b)
if(typeof a=="function")return H.es(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.b(b,t)
return H.e(b[t])}if('func' in a)return H.nc(a,b)
if('futureOr' in a)return"FutureOr<"+H.bf("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
nc:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],[P.u])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.b(a0,m)
p=C.a.w(p,a0[m])
l=u[q]
if(l!=null&&l!==P.a3)p+=" extends "+H.bf(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bf(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bf(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bf(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.nP(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.bf(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
lg:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.M("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bf(p,c)}return"<"+u.h(0)+">"},
jG:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
oE:function(a,b,c){return a.apply(b,H.jG(J.R(b)["$a"+H.e(c)],H.cs(b)))},
oF:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
nZ:function(a){var u,t,s,r,q=$.lp.$1(a),p=$.jk[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.ju[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.ll.$2(a,q)
if(q!=null){p=$.jk[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.ju[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.jC(u)
$.jk[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.ju[q]=u
return u}if(s==="-"){r=H.jC(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.ls(a,u)
if(s==="*")throw H.d(P.i6(q))
if(v.leafTags[q]===true){r=H.jC(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.ls(a,u)},
ls:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kk(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jC:function(a){return J.kk(a,!1,null,!!a.$iz)},
o_:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jC(u)
else return J.kk(u,c,null,null)},
nW:function(){if(!0===$.kj)return
$.kj=!0
H.nX()},
nX:function(){var u,t,s,r,q,p,o,n
$.jk=Object.create(null)
$.ju=Object.create(null)
H.nV()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.lt.$1(q)
if(p!=null){o=H.o_(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
nV:function(){var u,t,s,r,q,p,o=C.C()
o=H.bH(C.D,H.bH(C.E,H.bH(C.t,H.bH(C.t,H.bH(C.F,H.bH(C.G,H.bH(C.H(C.r),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.lp=new H.jr(r)
$.ll=new H.js(q)
$.lt=new H.jt(p)},
bH:function(a,b){return a(b)||b},
m8:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.d(P.L("Illegal RegExp pattern ("+String(p)+")",a,null))},
o5:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
nN:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
lu:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lw:function(a,b,c){var u=H.o6(a,b,c)
return u},
o6:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.lu(b),'g'),H.nN(c))},
eQ:function eQ(){},
eR:function eR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hX:function hX(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
h6:function h6(a,b){this.a=a
this.b=b},
fr:function fr(a,b,c){this.a=a
this.b=b
this.c=c},
i7:function i7(a){this.a=a},
jI:function jI(a){this.a=a},
e3:function e3(a){this.a=a
this.b=null},
bN:function bN(){},
hH:function hH(){},
hB:function hB(){},
bL:function bL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eH:function eH(a){this.a=a},
hl:function hl(a){this.a=a},
K:function K(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fv:function fv(a,b){this.a=a
this.b=b
this.c=null},
fw:function fw(a,b){this.a=a
this.$ti=b},
fx:function fx(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jr:function jr(a){this.a=a},
js:function js(a){this.a=a},
jt:function jt(a){this.a=a},
fq:function fq(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bF:function(a){return a},
mi:function(a){return new Int8Array(a)},
aA:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.bJ(b,a))},
na:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.d(H.nM(a,b,c))
return b},
c0:function c0(){},
b4:function b4(){},
d_:function d_(){},
c1:function c1(){},
d0:function d0(){},
h0:function h0(){},
h1:function h1(){},
h2:function h2(){},
h3:function h3(){},
h4:function h4(){},
d1:function d1(){},
c2:function c2(){},
cf:function cf(){},
cg:function cg(){},
ch:function ch(){},
ci:function ci(){},
nP:function(a){return J.kE(a?Object.keys(a):[],null)},
o8:function(a){return v.mangledGlobalNames[a]},
o0:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kk:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jm:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.kj==null){H.nW()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.d(P.i6("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.km()]
if(r!=null)return r
r=H.nZ(a)
if(r!=null)return r
if(typeof a=="function")return C.P
u=Object.getPrototypeOf(a)
if(u==null)return C.x
if(u===Object.prototype)return C.x
if(typeof s=="function"){Object.defineProperty(s,$.km(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
m7:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.ks(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.Y(a,0,4294967295,"length",null))
return J.kE(new Array(a),b)},
kE:function(a,b){return J.jX(H.c(a,[b]))},
jX:function(a){a.fixed$length=Array
return a},
R:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cQ.prototype
return J.cP.prototype}if(typeof a=="string")return J.b0.prototype
if(a==null)return J.cR.prototype
if(typeof a=="boolean")return J.fp.prototype
if(a.constructor==Array)return J.b_.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b1.prototype
return a}if(a instanceof P.a3)return a
return J.jm(a)},
cr:function(a){if(typeof a=="string")return J.b0.prototype
if(a==null)return a
if(a.constructor==Array)return J.b_.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b1.prototype
return a}if(a instanceof P.a3)return a
return J.jm(a)},
jl:function(a){if(a==null)return a
if(a.constructor==Array)return J.b_.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b1.prototype
return a}if(a instanceof P.a3)return a
return J.jm(a)},
nR:function(a){if(typeof a=="number")return J.bU.prototype
if(typeof a=="string")return J.b0.prototype
if(a==null)return a
if(!(a instanceof P.a3))return J.bA.prototype
return a},
kh:function(a){if(typeof a=="string")return J.b0.prototype
if(a==null)return a
if(!(a instanceof P.a3))return J.bA.prototype
return a},
eq:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b1.prototype
return a}if(a instanceof P.a3)return a
return J.jm(a)},
y:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.R(a).p(a,b)},
cw:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lq(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cr(a).i(a,b)},
jK:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.lq(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.jl(a).k(a,b,c)},
lQ:function(a,b){return J.kh(a).H(a,b)},
lR:function(a,b,c){return J.eq(a).fS(a,b,c)},
lS:function(a,b,c,d){return J.eq(a).h9(a,b,c,d)},
lT:function(a,b){return J.kh(a).U(a,b)},
jL:function(a,b){return J.nR(a).hh(a,b)},
jM:function(a,b){return J.jl(a).L(a,b)},
lU:function(a,b,c,d){return J.eq(a).hq(a,b,c,d)},
kq:function(a,b){return J.jl(a).J(a,b)},
kr:function(a){return J.eq(a).gbX(a)},
cx:function(a){return J.R(a).gI(a)},
bj:function(a){return J.jl(a).gV(a)},
ah:function(a){return J.cr(a).gj(a)},
lV:function(a,b){return J.eq(a).hY(a,b)},
a6:function(a){return J.R(a).h(a)},
a:function a(){},
fp:function fp(){},
cR:function cR(){},
cS:function cS(){},
ha:function ha(){},
bA:function bA(){},
b1:function b1(){},
b_:function b_(a){this.$ti=a},
jY:function jY(a){this.$ti=a},
a2:function a2(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bU:function bU(){},
cQ:function cQ(){},
cP:function cP(){},
b0:function b0(){}},P={
mP:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.nF()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bI(new P.iB(s),1)).observe(u,{childList:true})
return new P.iA(s,u,t)}else if(self.setImmediate!=null)return P.nG()
return P.nH()},
mQ:function(a){self.scheduleImmediate(H.bI(new P.iC(a),0))},
mR:function(a){self.setImmediate(H.bI(new P.iD(a),0))},
mS:function(a){P.k3(C.p,a)},
k3:function(a,b){var u=C.d.a4(a.a,1000)
return P.mV(u<0?0:u,b)},
kX:function(a,b){var u=C.d.a4(a.a,1000)
return P.mW(u<0?0:u,b)},
mV:function(a,b){var u=new P.e9()
u.eo(a,b)
return u},
mW:function(a,b){var u=new P.e9()
u.ep(a,b)
return u},
ny:function(){var u,t
for(;u=$.bG,u!=null;){$.cq=null
t=u.b
$.bG=t
if(t==null)$.cp=null
u.a.$0()}},
nD:function(){$.ke=!0
try{P.ny()}finally{$.cq=null
$.ke=!1
if($.bG!=null)$.kp().$1(P.lm())}},
nB:function(a){var u=new P.dx(a)
if($.bG==null){$.bG=$.cp=u
if(!$.ke)$.kp().$1(P.lm())}else $.cp=$.cp.b=u},
nC:function(a){var u,t,s=$.bG
if(s==null){P.nB(a)
$.cq=$.cp
return}u=new P.dx(a)
t=$.cq
if(t==null){u.b=s
$.bG=$.cq=u}else{u.b=t.b
$.cq=t.b=u
if(u.b==null)$.cp=u}},
kW:function(a,b){var u=$.al
if(u===C.f)return P.k3(a,b)
return P.k3(a,u.he(b))},
mH:function(a,b){var u=$.al
if(u===C.f)return P.kX(a,b)
return P.kX(a,u.d4(b,P.dk))},
lh:function(a,b,c,d,e){var u={}
u.a=d
P.nC(new P.ji(u,e))},
nz:function(a,b,c,d){var u,t=$.al
if(t===c)return d.$0()
$.al=c
u=t
try{t=d.$0()
return t}finally{$.al=u}},
nA:function(a,b,c,d,e){var u,t=$.al
if(t===c)return d.$1(e)
$.al=c
u=t
try{t=d.$1(e)
return t}finally{$.al=u}},
iB:function iB(a){this.a=a},
iA:function iA(a,b,c){this.a=a
this.b=b
this.c=c},
iC:function iC(a){this.a=a},
iD:function iD(a){this.a=a},
e9:function e9(){this.c=0},
j0:function j0(a,b){this.a=a
this.b=b},
j_:function j_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dx:function dx(a){this.a=a
this.b=null},
dg:function dg(){},
hE:function hE(){},
dk:function dk(){},
j9:function j9(){},
ji:function ji(a,b){this.a=a
this.b=b},
iQ:function iQ(){},
iR:function iR(a,b){this.a=a
this.b=b},
iS:function iS(a,b,c){this.a=a
this.b=b
this.c=c},
ma:function(a,b){return new H.K([a,b])},
kF:function(a,b){return new H.K([a,b])},
mc:function(a){return H.nQ(a,new H.K([null,null]))},
md:function(a){return new P.iN([a])},
k9:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
mU:function(a,b){var u=new P.dM(a,b)
u.c=a.e
return u},
m6:function(a,b,c){var u,t
if(P.kf(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.u])
$.a5.push(a)
try{P.nd(a,u)}finally{if(0>=$.a5.length)return H.b($.a5,-1)
$.a5.pop()}t=P.kT(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
jW:function(a,b,c){var u,t
if(P.kf(a))return b+"..."+c
u=new P.M(b)
$.a5.push(a)
try{t=u
t.a=P.kT(t.a,a,", ")}finally{if(0>=$.a5.length)return H.b($.a5,-1)
$.a5.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kf:function(a){var u,t
for(u=$.a5.length,t=0;t<u;++t)if(a===$.a5[t])return!0
return!1},
nd:function(a,b){var u,t,s,r,q,p,o,n=a.gV(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.C())return
u=H.e(n.gM(n))
b.push(u)
m+=u.length+2;++l}if(!n.C()){if(l<=5)return
if(0>=b.length)return H.b(b,-1)
t=b.pop()
if(0>=b.length)return H.b(b,-1)
s=b.pop()}else{r=n.gM(n);++l
if(!n.C()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.b(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gM(n);++l
for(;n.C();r=q,q=p){p=n.gM(n);++l
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
mb:function(a,b,c){var u=P.ma(b,c)
a.J(0,new P.fy(u))
return u},
k0:function(a){var u,t={}
if(P.kf(a))return"{...}"
u=new P.M("")
try{$.a5.push(a)
u.a+="{"
t.a=!0
J.kq(a,new P.fD(t,u))
u.a+="}"}finally{if(0>=$.a5.length)return H.b($.a5,-1)
$.a5.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
iN:function iN(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iO:function iO(a){this.a=a
this.c=this.b=null},
dM:function dM(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fy:function fy(a){this.a=a},
fz:function fz(){},
t:function t(){},
fC:function fC(){},
fD:function fD(a,b){this.a=a
this.b=b},
aH:function aH(){},
j1:function j1(){},
fE:function fE(){},
ds:function ds(a,b){this.a=a
this.$ti=b},
iT:function iT(){},
dN:function dN(){},
ef:function ef(){},
mK:function(a,b,c,d){if(b instanceof Uint8Array)return P.mL(!1,b,c,d)
return},
mL:function(a,b,c,d){var u,t,s=$.lL()
if(s==null)return
u=0===c
if(u&&!0)return P.k7(s,b)
t=b.length
d=P.b7(c,d,t)
if(u&&d===t)return P.k7(s,b)
return P.k7(s,b.subarray(c,d))},
k7:function(a,b){if(P.mN(b))return
return P.mO(a,b)},
mO:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.bh(t)}return},
mN:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
mM:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.bh(t)}return},
lj:function(a,b,c){var u,t,s
for(u=J.cr(a),t=b;t<c;++t){s=u.i(a,t)
if(typeof s!=="number")return s.ao()
if((s&127)!==s)return t-b}return c-b},
kt:function(a,b,c,d,e,f){if(C.d.au(f,4)!==0)throw H.d(P.L("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.d(P.L("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.d(P.L("Invalid base64 padding, more than two '=' characters",a,b))},
eD:function eD(){},
eE:function eE(){},
eM:function eM(){},
eS:function eS(){},
f7:function f7(){},
ih:function ih(){},
ij:function ij(){},
j8:function j8(a){this.b=0
this.c=a},
ii:function ii(a){this.a=a},
j7:function j7(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
er:function(a,b,c){var u=H.mt(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.d(P.L(a,null,null))},
m4:function(a){if(a instanceof H.bN)return a.h(0)
return"Instance of '"+H.e(H.c6(a))+"'"},
me:function(a,b,c){var u,t,s=J.m7(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
kG:function(a,b,c){var u,t=H.c([],[c])
for(u=J.bj(a);u.C();)t.push(u.gM(u))
if(b)return t
return J.jX(t)},
c9:function(a,b,c){var u
if(typeof a==="object"&&a!==null&&a.constructor===Array){u=a.length
c=P.b7(b,c,u)
return H.kR(b>0||c<u?C.b.cq(a,b,c):a)}if(!!J.R(a).$ic2)return H.mv(a,b,P.b7(b,c,a.length))
return P.mD(a,b,c)},
mD:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.d(P.Y(b,0,J.ah(a),q,q))
u=c==null
if(!u&&c<b)throw H.d(P.Y(c,b,J.ah(a),q,q))
t=J.bj(a)
for(s=0;s<b;++s)if(!t.C())throw H.d(P.Y(b,0,s,q,q))
r=[]
if(u)for(;t.C();)r.push(t.gM(t))
else for(s=b;s<c;++s){if(!t.C())throw H.d(P.Y(c,b,s,q,q))
r.push(t.gM(t))}return H.kR(r)},
mx:function(a){return new H.fq(a,H.m8(a,!1,!0,!1,!1,!1))},
kT:function(a,b,c){var u=J.bj(b)
if(!u.C())return a
if(c.length===0){do a+=H.e(u.gM(u))
while(u.C())}else{a+=H.e(u.gM(u))
for(;u.C();)a=a+c+H.e(u.gM(u))}return a},
k6:function(){var u=H.ml()
if(u!=null)return P.mJ(u)
throw H.d(P.x("'Uri.base' is not supported"))},
j6:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.e){u=$.lO().b
if(typeof b!=="string")H.p(H.ab(b))
u=u.test(b)}else u=!1
if(u)return b
t=c.ghp().bY(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.b(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.d6(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
m2:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
m3:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cF:function(a){if(a>=10)return""+a
return"0"+a},
kz:function(a){return new P.aV(1000*a)},
jU:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a6(a)
if(typeof a==="string")return JSON.stringify(a)
return P.m4(a)},
cy:function(a){return new P.an(!1,null,null,a)},
ks:function(a,b,c){return new P.an(!0,a,b,c)},
d7:function(a,b){return new P.bu(null,null,!0,a,b,"Value not in range")},
Y:function(a,b,c,d,e){return new P.bu(b,c,!0,a,d,"Invalid value")},
b7:function(a,b,c){if(0>a||a>c)throw H.d(P.Y(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.d(P.Y(b,a,c,"end",null))
return b}return c},
kS:function(a,b){if(typeof a!=="number")return a.R()
if(a<0)throw H.d(P.Y(a,0,null,b,null))},
H:function(a,b,c,d,e){var u=e==null?J.ah(b):e
return new P.fn(u,!0,a,c,"Index out of range")},
x:function(a){return new P.i9(a)},
i6:function(a){return new P.i5(a)},
bo:function(a){return new P.eP(a)},
q:function(a){return new P.dF(a)},
L:function(a,b,c){return new P.fh(a,b,c)},
mf:function(a,b,c){var u,t,s=H.c([],[c])
C.b.sj(s,a)
for(u=0;u<a;++u){t=b.$1(u)
if(u>=s.length)return H.b(s,u)
s[u]=t}return s},
kl:function(a){H.o0(a)},
mJ:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.a.H(a,4)^58)*3|C.a.H(a,0)^100|C.a.H(a,1)^97|C.a.H(a,2)^116|C.a.H(a,3)^97)>>>0
if(u===0)return P.kZ(e<e?C.a.q(a,0,e):a,5,f).ge3()
else if(u===32)return P.kZ(C.a.q(a,5,e),0,f).ge3()}t=new Array(8)
t.fixed$length=Array
s=H.c(t,[P.v])
s[0]=0
s[1]=-1
s[2]=-1
s[7]=-1
s[3]=0
s[4]=0
s[5]=e
s[6]=e
if(P.li(a,0,e,0,s)>=14)s[7]=e
r=s[1]
if(typeof r!=="number")return r.ib()
if(r>=0)if(P.li(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.w()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.R()
if(typeof n!=="number")return H.m(n)
if(m<n)n=m
if(typeof o!=="number")return o.R()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.R()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.R()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.a.ab(a,"..",o)))j=n>o+2&&C.a.ab(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.a.ab(a,"file",0)){if(q<=0){if(!C.a.ab(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.a.q(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.a.aQ(a,o,n,"/");++e
n=h}k="file"}else if(C.a.ab(a,"http",0)){if(t&&p+3===o&&C.a.ab(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.a.aQ(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.a.ab(a,"https",0)){if(t&&p+4===o&&C.a.ab(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.a.aQ(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.a.q(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.iU(a,r,q,p,o,n,m,k)}return P.mX(a,0,e,r,q,p,o,n,m,k)},
l0:function(a){var u=P.u
return C.b.hu(H.c(a.split("&"),[u]),P.kF(u,u),new P.ie(C.e))},
mI:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.ib(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.a.U(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.er(C.a.q(a,s,t),n,n)
if(typeof p!=="number")return p.a1()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.b(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.er(C.a.q(a,s,c),n,n)
if(typeof p!=="number")return p.a1()
if(p>255)k.$2(l,s)
if(r>=u)return H.b(j,r)
j[r]=p
return j},
l_:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.ic(a),d=new P.id(e,a)
if(a.length<2)e.$1("address is too short")
u=H.c([],[P.v])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.a.U(a,t)
if(p===58){if(t===b){++t
if(C.a.U(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
u.push(-1)
r=!0}else u.push(d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.b.gaG(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)u.push(d.$2(s,c))
else{m=P.mI(a,s,c)
u.push((m[0]<<8|m[1])>>>0)
u.push((m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.b(l,i)
l[i]=0
f=i+1
if(f>=k)return H.b(l,f)
l[f]=0
i+=2}else{f=C.d.aN(h,8)
if(i<0||i>=k)return H.b(l,i)
l[i]=f
f=i+1
if(f>=k)return H.b(l,f)
l[f]=h&255
i+=2}}return l},
mX:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.n4(a,b,d)
else{if(d===b)P.bE(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.n5(a,u,e-1):""
s=P.n1(a,e,f,!1)
if(typeof f!=="number")return f.w()
r=f+1
if(typeof g!=="number")return H.m(g)
q=r<g?P.n3(P.er(C.a.q(a,r,g),new P.j2(a,f),n),j):n}else{q=n
s=q
t=""}p=P.n2(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.R()
o=h<i?P.kb(a,h+1,i,n):n
return new P.bD(j,t,s,q,p,o,i<c?P.n0(a,i+1,c):n)},
la:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bE:function(a,b,c){throw H.d(P.L(c,a,b))},
n3:function(a,b){if(a!=null&&a===P.la(b))return
return a},
n1:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.a.U(a,b)===91){if(typeof c!=="number")return c.D()
u=c-1
if(C.a.U(a,u)!==93)P.bE(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.mZ(a,t,u)
if(typeof s!=="number")return s.R()
if(s<u){r=s+1
q=P.lf(a,C.a.ab(a,"25",r)?s+3:r,u,"%25")}else q=""
P.l_(a,t,s)
return C.a.q(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.m(c)
p=b
for(;p<c;++p)if(C.a.U(a,p)===58){s=C.a.bl(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.lf(a,C.a.ab(a,"25",r)?s+3:r,c,"%25")}else q=""
P.l_(a,b,s)
return"["+C.a.q(a,b,s)+q+"]"}return P.n7(a,b,c)},
mZ:function(a,b,c){var u,t=C.a.bl(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.m(c)
u=t<c}else u=!1
return u?t:c},
lf:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.M(d):null
if(typeof c!=="number")return H.m(c)
u=b
t=u
s=!0
for(;u<c;){r=C.a.U(a,u)
if(r===37){q=P.kc(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.M("")
o=l.a+=C.a.q(a,t,u)
if(p)q=C.a.q(a,u,u+3)
else if(q==="%")P.bE(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.b(C.h,p)
p=(C.h[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.M("")
if(t<u){l.a+=C.a.q(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.a.U(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.M("")
l.a+=C.a.q(a,t,u)
l.a+=P.ka(r)
u+=m
t=u}}}if(l==null)return C.a.q(a,b,c)
if(t<c)l.a+=C.a.q(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
n7:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.m(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.a.U(a,u)
if(q===37){p=P.kc(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.M("")
n=C.a.q(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.a.q(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.b(C.v,o)
o=(C.v[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.M("")
if(t<u){s.a+=C.a.q(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.b(C.k,o)
o=(C.k[o]&1<<(q&15))!==0}else o=!1
if(o)P.bE(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.a.U(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.M("")
n=C.a.q(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.ka(q)
u+=l
t=u}}}}if(s==null)return C.a.q(a,b,c)
if(t<c){n=C.a.q(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
n4:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.lc(C.a.H(a,b)))P.bE(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.a.H(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.b(C.m,r)
r=(C.m[r]&1<<(s&15))!==0}else r=!1
if(!r)P.bE(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.a.q(a,b,c)
return P.mY(t?a.toLowerCase():a)},
mY:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
n5:function(a,b,c){return P.cn(a,b,c,C.R,!1)},
n2:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.cn(a,b,c,C.w,!0):C.j.iw(d,new P.j3(),P.u).t(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.a.ag(u,"/"))u="/"+u
return P.n6(u,e,f)},
n6:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.a.ag(a,"/"))return P.n8(a,!u||c)
return P.n9(a)},
kb:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.d(P.cy("Both query and queryParameters specified"))
return P.cn(a,b,c,C.l,!0)}if(d==null)return
u=new P.M("")
t.a=""
d.J(0,new P.j4(new P.j5(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
n0:function(a,b,c){return P.cn(a,b,c,C.l,!0)},
kc:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.a.U(a,b+1)
t=C.a.U(a,p)
s=H.jq(u)
r=H.jq(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.d.aN(q,4)
if(p>=8)return H.b(C.h,p)
p=(C.h[p]&1<<(q&15))!==0}else p=!1
if(p)return H.d6(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.a.q(a,b,b+3).toUpperCase()
return},
ka:function(a){var u,t,s,r,q,p,o,n,m="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.c(u,[P.v])
t[0]=37
t[1]=C.a.H(m,a>>>4)
t[2]=C.a.H(m,a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.c(u,[P.v])
for(u=t.length,q=0;--r,r>=0;s=128){p=C.d.h1(a,6*r)&63|s
if(q>=u)return H.b(t,q)
t[q]=37
o=q+1
n=C.a.H(m,p>>>4)
if(o>=u)return H.b(t,o)
t[o]=n
n=q+2
o=C.a.H(m,p&15)
if(n>=u)return H.b(t,n)
t[n]=o
q+=3}}return P.c9(t,0,null)},
cn:function(a,b,c,d,e){var u=P.le(a,b,c,d,e)
return u==null?C.a.q(a,b,c):u},
le:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.R()
if(typeof c!=="number")return H.m(c)
if(!(o<c))break
c$0:{u=C.a.U(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.b(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.kc(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.b(C.k,t)
t=(C.k[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.bE(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.a.U(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.ka(u)}}if(m==null)m=new P.M("")
m.a+=C.a.q(a,n,o)
m.a+=H.e(s)
if(typeof r!=="number")return H.m(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.R()
if(n<c)m.a+=C.a.q(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
ld:function(a){if(C.a.ag(a,"."))return!0
return C.a.dG(a,"/.")!==-1},
n9:function(a){var u,t,s,r,q,p,o
if(!P.ld(a))return a
u=H.c([],[P.u])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.y(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.b(u,-1)
u.pop()
if(u.length===0)u.push("")}r=!0}else if("."===p)r=!0
else{u.push(p)
r=!1}}if(r)u.push("")
return C.b.t(u,"/")},
n8:function(a,b){var u,t,s,r,q,p
if(!P.ld(a))return!b?P.lb(a):a
u=H.c([],[P.u])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.b.gaG(u)!==".."){if(0>=u.length)return H.b(u,-1)
u.pop()
r=!0}else{u.push("..")
r=!1}else if("."===p)r=!0
else{u.push(p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.b(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.b.gaG(u)==="..")u.push("")
if(!b){if(0>=u.length)return H.b(u,0)
t=P.lb(u[0])
if(0>=u.length)return H.b(u,0)
u[0]=t}return C.b.t(u,"/")},
lb:function(a){var u,t,s,r=a.length
if(r>=2&&P.lc(J.lQ(a,0)))for(u=1;u<r;++u){t=C.a.H(a,u)
if(t===58)return C.a.q(a,0,u)+"%3A"+C.a.ah(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.b(C.m,s)
s=(C.m[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
n_:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.a.H(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.d(P.cy("Invalid URL encoding"))}}return u},
kd:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.a.H(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.e!==d)s=!1
else s=!0
if(s)return C.a.q(a,b,c)
else r=new H.N(C.a.q(a,b,c))}else{r=H.c([],[P.v])
for(s=a.length,q=b;q<c;++q){t=C.a.H(a,q)
if(t>127)throw H.d(P.cy("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.d(P.cy("Truncated URI"))
r.push(P.n_(a,q+1))
q+=2}else if(t===43)r.push(32)
else r.push(t)}}return new P.ii(!1).bY(r)},
lc:function(a){var u=a|32
return 97<=u&&u<=122},
kZ:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.c([b-1],[P.v])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.a.H(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.d(P.L(m,a,t))}}if(s<0&&t>b)throw H.d(P.L(m,a,t))
for(;r!==44;){l.push(t);++t
for(q=-1;t<u;++t){r=C.a.H(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)l.push(q)
else{p=C.b.gaG(l)
if(r!==44||t!==p+7||!C.a.ab(a,"base64",p+1))throw H.d(P.L("Expecting '='",a,t))
break}}l.push(t)
o=t+1
if((l.length&1)===1)a=C.B.hD(0,a,o,u)
else{n=P.le(a,o,u,C.l,!0)
if(n!=null)a=C.a.aQ(a,o,u,n)}return new P.ia(a,l,c)},
nb:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.mf(22,new P.jd(),P.bx),n=new P.jc(o),m=new P.je(),l=new P.jf(),k=n.$2(0,225)
m.$3(k,u,1)
m.$3(k,t,14)
m.$3(k,s,34)
m.$3(k,r,3)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(14,225)
m.$3(k,u,1)
m.$3(k,t,15)
m.$3(k,s,34)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(15,225)
m.$3(k,u,1)
m.$3(k,"%",225)
m.$3(k,s,34)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(1,225)
m.$3(k,u,1)
m.$3(k,s,34)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(2,235)
m.$3(k,u,139)
m.$3(k,r,131)
m.$3(k,t,146)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(3,235)
m.$3(k,u,11)
m.$3(k,r,68)
m.$3(k,t,18)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(4,229)
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,"[",232)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(5,229)
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(6,231)
l.$3(k,"19",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(7,231)
l.$3(k,"09",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
m.$3(n.$2(8,8),"]",5)
k=n.$2(9,235)
m.$3(k,u,11)
m.$3(k,t,16)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(16,235)
m.$3(k,u,11)
m.$3(k,t,17)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(17,235)
m.$3(k,u,11)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(10,235)
m.$3(k,u,11)
m.$3(k,t,18)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(18,235)
m.$3(k,u,11)
m.$3(k,t,19)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(19,235)
m.$3(k,u,11)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(11,235)
m.$3(k,u,11)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(12,236)
m.$3(k,u,12)
m.$3(k,q,12)
m.$3(k,p,205)
k=n.$2(13,237)
m.$3(k,u,13)
m.$3(k,q,13)
l.$3(n.$2(20,245),"az",21)
k=n.$2(21,245)
l.$3(k,"az",21)
l.$3(k,"09",21)
m.$3(k,"+-.",21)
return o},
li:function(a,b,c,d,e){var u,t,s,r,q,p=$.lP()
for(u=b;u<c;++u){if(d<0||d>=p.length)return H.b(p,d)
t=p[d]
s=C.a.H(a,u)^96
if(s>95)s=31
if(s>=t.length)return H.b(t,s)
r=t[s]
d=r&31
q=r>>>5
if(q>=8)return H.b(e,q)
e[q]=u}return d},
bg:function bg(){},
a7:function a7(a,b){this.a=a
this.b=b},
F:function F(){},
aV:function aV(a){this.a=a},
f4:function f4(){},
f5:function f5(){},
bp:function bp(){},
d3:function d3(){},
an:function an(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bu:function bu(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fn:function fn(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
i9:function i9(a){this.a=a},
i5:function i5(a){this.a=a},
hA:function hA(a){this.a=a},
eP:function eP(a){this.a=a},
h9:function h9(){},
de:function de(){},
eX:function eX(a){this.a=a},
dF:function dF(a){this.a=a},
fh:function fh(a,b,c){this.a=a
this.b=b
this.c=c},
v:function v(){},
i:function i(){},
fo:function fo(){},
o:function o(){},
O:function O(){},
b5:function b5(){},
ac:function ac(){},
a3:function a3(){},
u:function u(){},
M:function M(a){this.a=a},
ie:function ie(a){this.a=a},
ib:function ib(a){this.a=a},
ic:function ic(a){this.a=a},
id:function id(a,b){this.a=a
this.b=b},
bD:function bD(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
j2:function j2(a,b){this.a=a
this.b=b},
j3:function j3(){},
j5:function j5(a,b){this.a=a
this.b=b},
j4:function j4(a){this.a=a},
ia:function ia(a,b,c){this.a=a
this.b=b
this.c=c},
jd:function jd(){},
jc:function jc(a){this.a=a},
je:function je(){},
jf:function jf(){},
iU:function iU(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
iH:function iH(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
nL:function(a){var u,t=J.R(a)
if(!!t.$iaG){u=t.gda(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.ee(a.data,a.height,a.width)},
nK:function(a){if(a instanceof P.ee)return{data:a.a,height:a.b,width:a.c}
return a},
aS:function(a){var u,t,s,r,q
if(a==null)return
u=P.kF(P.u,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.r)(t),++r){q=t[r]
u.k(0,q,a[q])}return u},
nJ:function(a){var u={}
a.J(0,new P.jj(u))
return u},
iW:function iW(){},
iY:function iY(a,b){this.a=a
this.b=b},
ee:function ee(a,b,c){this.a=a
this.b=b
this.c=c},
jj:function jj(a){this.a=a},
iX:function iX(a,b){this.a=a
this.b=b},
fd:function fd(a,b){this.a=a
this.b=b},
fe:function fe(){},
ff:function ff(){},
iM:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mT:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
iP:function iP(){},
aa:function aa(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b2:function b2(){},
ft:function ft(){},
b6:function b6(){},
h7:function h7(){},
hd:function hd(){},
hF:function hF(){},
k:function k(){},
b9:function b9(){},
hW:function hW(){},
dK:function dK(){},
dL:function dL(){},
dV:function dV(){},
dW:function dW(){},
e5:function e5(){},
e6:function e6(){},
ec:function ec(){},
ed:function ed(){},
bx:function bx(){},
ey:function ey(){},
ez:function ez(){},
eA:function eA(a){this.a=a},
eB:function eB(){},
bk:function bk(){},
h8:function h8(){},
dy:function dy(){},
d9:function d9(){},
hz:function hz(){},
e1:function e1(){},
e2:function e2(){}},W={
jQ:function(){var u=document.createElement("canvas")
return u},
jS:function(a){return"wheel"},
m5:function(a){var u,t=document.createElement("input"),s=t
try{s.type=a}catch(u){H.bh(u)}return s},
iL:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
l9:function(a,b,c,d){var u=W.iL(W.iL(W.iL(W.iL(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
U:function(a,b,c,d){var u=W.lk(new W.iJ(c),W.j)
if(u!=null&&!0)J.lS(a,b,u,!1)
return new W.iI(a,b,u,!1)},
lk:function(a,b){var u=$.al
if(u===C.f)return a
return u.d4(a,b)},
l:function l(){},
et:function et(){},
ev:function ev(){},
ew:function ew(){},
bl:function bl(){},
bm:function bm(){},
aU:function aU(){},
eT:function eT(){},
E:function E(){},
bO:function bO(){},
eU:function eU(){},
ad:function ad(){},
ap:function ap(){},
eV:function eV(){},
eW:function eW(){},
eY:function eY(){},
f1:function f1(){},
cH:function cH(){},
cI:function cI(){},
f2:function f2(){},
f3:function f3(){},
iF:function iF(a,b){this.a=a
this.b=b},
X:function X(){},
j:function j(){},
f:function f(){},
ar:function ar(){},
bQ:function bQ(){},
fc:function fc(){},
fg:function fg(){},
aF:function aF(){},
fl:function fl(){},
bS:function bS(){},
aG:function aG(){},
bT:function bT(){},
eL:function eL(){},
br:function br(){},
fA:function fA(){},
fU:function fU(){},
bZ:function bZ(){},
fV:function fV(){},
fW:function fW(a){this.a=a},
fX:function fX(){},
fY:function fY(a){this.a=a},
aJ:function aJ(){},
fZ:function fZ(){},
au:function au(){},
iE:function iE(a){this.a=a},
D:function D(){},
d2:function d2(){},
aL:function aL(){},
hb:function hb(){},
hj:function hj(){},
hk:function hk(a){this.a=a},
hm:function hm(){},
aN:function aN(){},
hw:function hw(){},
aO:function aO(){},
hx:function hx(){},
aP:function aP(){},
hC:function hC(){},
hD:function hD(a){this.a=a},
aw:function aw(){},
aQ:function aQ(){},
ax:function ax(){},
hI:function hI(){},
hJ:function hJ(){},
hR:function hR(){},
aR:function aR(){},
bw:function bw(){},
hU:function hU(){},
hV:function hV(){},
ba:function ba(){},
ig:function ig(){},
ix:function ix(){},
be:function be(){},
ce:function ce(){},
iG:function iG(){},
dA:function dA(){},
iK:function iK(){},
dS:function dS(){},
iV:function iV(){},
iZ:function iZ(){},
iI:function iI(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
iJ:function iJ(a){this.a=a},
G:function G(){},
cL:function cL(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
dz:function dz(){},
dB:function dB(){},
dC:function dC(){},
dD:function dD(){},
dE:function dE(){},
dG:function dG(){},
dH:function dH(){},
dI:function dI(){},
dJ:function dJ(){},
dO:function dO(){},
dP:function dP(){},
dQ:function dQ(){},
dR:function dR(){},
dT:function dT(){},
dU:function dU(){},
dX:function dX(){},
dY:function dY(){},
dZ:function dZ(){},
cj:function cj(){},
ck:function ck(){},
e_:function e_(){},
e0:function e0(){},
e4:function e4(){},
e7:function e7(){},
e8:function e8(){},
cl:function cl(){},
cm:function cm(){},
ea:function ea(){},
eb:function eb(){},
eg:function eg(){},
eh:function eh(){},
ei:function ei(){},
ej:function ej(){},
ek:function ek(){},
el:function el(){},
em:function em(){},
en:function en(){},
eo:function eo(){},
ep:function ep(){}},T={
a0:function(a){var u=new T.hn()
u.eh(a)
return u},
eu:function eu(){},
cO:function cO(){},
cX:function cX(){},
aK:function aK(){this.a=null},
hn:function hn(){this.a=null},
k2:function(a){var u=new T.hL()
u.a=0
u.b=a
u.d=u.c=!1
u.x=u.r=u.f=u.e=0
return u},
bv:function bv(){},
hK:function hK(){},
hL:function hL(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hN:function hN(a){var _=this
_.a=a
_.e=_.d=_.b=null},
hO:function hO(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
hP:function hP(a,b,c){this.a=a
this.b=b
this.c=c}},R={df:function df(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},dl:function dl(a,b,c){this.a=a
this.b=b
this.c=c},dm:function dm(a){this.b=a
this.c=null},hS:function hS(){this.c=this.b=this.a=null},dp:function dp(a){this.b=a
this.a=this.c=null}},O={
eN:function(a){var u=new O.aE([a])
u.b9(a)
return u},
aE:function aE(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bX:function bX(){this.b=this.a=null},
kB:function(a,b){var u,t,s,r=new O.cN()
r.r=0
r.scg(null)
r.sbR(null)
if(a==null){u=$.l1
if(u==null){u=new V.J(1,0)
$.l1=u
t=u}else t=u}else t=a
if(!J.y(r.d,t)){s=r.d
r.d=t
u=new D.n("blurDirection",s,t)
u.b=!0
r.v(u)}r.sd8(b)
r.saW(null)
r.sbS(0)
return r},
kH:function(){var u,t=new O.cY(),s=O.eN(V.ai)
t.e=s
s.aI(t.geV(),t.geX())
s=new O.as(t,"emission")
s.c=new A.W(!1,!1,!1)
s.f=new V.V(0,0,0)
t.f=s
s=new O.as(t,"ambient")
s.c=new A.W(!1,!1,!1)
s.f=new V.V(0,0,0)
t.r=s
s=new O.as(t,"diffuse")
s.c=new A.W(!1,!1,!1)
s.f=new V.V(0,0,0)
t.x=s
s=new O.as(t,"invDiffuse")
s.c=new A.W(!1,!1,!1)
s.f=new V.V(0,0,0)
t.y=s
s=new O.fN(t,"specular")
s.c=new A.W(!1,!1,!1)
s.f=new V.V(0,0,0)
s.ch=100
t.z=s
s=new O.fJ(t,"bump")
s.c=new A.W(!1,!1,!1)
t.Q=s
t.ch=null
s=new O.as(t,"reflect")
s.c=new A.W(!1,!1,!1)
s.f=new V.V(0,0,0)
t.cx=s
s=new O.fM(t,"refract")
s.c=new A.W(!1,!1,!1)
s.f=new V.V(0,0,0)
s.ch=1
t.cy=s
s=new O.fI(t,"alpha")
s.c=new A.W(!1,!1,!1)
s.f=1
t.db=s
s=new D.cU()
s.b9(D.a8)
s.e=H.c([],[D.f0])
s.f=H.c([],[D.bs])
s.r=H.c([],[D.hy])
s.y=s.x=null
s.cl(s.geT(),s.gfz(),s.gfD())
t.dx=s
u=new O.fL()
u.b=new V.a_(0,0,0,0)
u.c=1
u.d=10
u.e=!1
t.dy=u
u=s.x
s=u==null?s.x=D.B():u
s.l(0,t.gfU())
s=t.dx
u=s.y
s=u==null?s.y=D.B():u
s.l(0,t.ga3())
t.fr=null
return t},
kU:function(a,b){var u,t,s,r=new O.b8(),q=r.a
r.a=b
b.gn().l(0,r.ga3())
u=new D.n("texture",q,r.a)
u.b=!0
r.v(u)
t=V.aI()
if(!J.y(r.b,t)){q=r.b
r.b=t
u=new D.n("colorMatrix",q,t)
u.b=!0
r.v(u)}s=V.he()
if(!J.y(r.c,s)){q=r.c
r.c=s
u=new D.n("source",q,s)
u.b=!0
r.v(u)}if(!J.y(r.d,a)){q=r.d
r.d=a
u=new D.n("destination",q,a)
u.b=!0
r.v(u)}if(r.e!==!1){r.e=!1
u=new D.n("flip",!0,!1)
u.b=!0
r.v(u)}r.f=null
return r},
eZ:function eZ(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cN:function cN(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cY:function cY(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fO:function fO(a,b){this.a=a
this.b=b},
fP:function fP(){},
fQ:function fQ(a,b){this.a=a
this.b=b},
fR:function fR(){},
fS:function fS(a,b){this.a=a
this.b=b},
fT:function fT(){},
fI:function fI(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bW:function bW(){},
fJ:function fJ(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
as:function as(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fL:function fL(){var _=this
_.e=_.d=_.c=_.b=null},
fM:function fM(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fN:function fN(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dh:function dh(){},
di:function di(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
b8:function b8(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null}},E={
jT:function(a){var u,t=new E.aq()
t.a=""
t.b=!0
u=O.eN(E.aq)
t.y=u
u.aI(t.ghE(),t.ghH())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sby(0,a)
t.sam(null)
t.sb3(null)
return t},
my:function(a,b){var u=new E.hf(a)
u.eg(a,b)
return u},
mG:function(a,b,c,d,e){var u,t,s=J.R(a)
if(!!s.$ibm)return E.kV(a,!0,!0,!0,!1)
u=W.jQ()
t=u.style
t.width="100%"
t.height="100%"
s.gbX(a).l(0,u)
return E.kV(u,!0,!0,!0,!1)},
kV:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.dj(),p=C.i.ck(a,"webgl2",P.mc(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.p(P.q("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.my(p,a)
u=new T.hN(p)
u.b=p.getParameter(3379)
p.getParameter(34076)
u.e=u.d=0
q.f=u
u=new X.dt(a)
t=new X.fs()
t.c=new X.aj(!1,!1,!1)
t.d=P.md(P.v)
u.b=t
t=new X.h_(u)
t.f=0
t.r=V.aM()
t.x=V.aM()
t.ch=t.Q=1
u.c=t
t=new X.fB(u)
t.r=0
t.x=V.aM()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hT(u)
t.f=V.aM()
t.r=V.aM()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.c([],[[P.dg,P.a3]])
u.z=t
s=document
t.push(W.U(s,"contextmenu",u.gf4(),!1))
u.z.push(W.U(a,"focus",u.gfe(),!1))
u.z.push(W.U(a,"blur",u.geZ(),!1))
u.z.push(W.U(s,"keyup",u.gfi(),!1))
u.z.push(W.U(s,"keydown",u.gfg(),!1))
u.z.push(W.U(a,"mousedown",u.gfm(),!1))
u.z.push(W.U(a,"mouseup",u.gfq(),!1))
u.z.push(W.U(a,r,u.gfo(),!1))
t=u.z
W.jS(a)
W.jS(a)
t.push(W.U(a,W.jS(a),u.gft(),!1))
u.z.push(W.U(s,r,u.gf6(),!1))
u.z.push(W.U(s,"mouseup",u.gf8(),!1))
u.z.push(W.U(s,"pointerlockchange",u.gfv(),!1))
u.z.push(W.U(a,"touchstart",u.gfN(),!1))
u.z.push(W.U(a,"touchend",u.gfJ(),!1))
u.z.push(W.U(a,"touchmove",u.gfL(),!1))
q.r=u
q.Q=!0
q.ch=!1
q.cx=new P.a7(Date.now(),!1)
q.cy=0
q.cT()
return q},
eF:function eF(){},
aq:function aq(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hf:function hf(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hg:function hg(a){this.a=a},
hh:function hh(a){this.a=a},
hi:function hi(a){this.a=a},
dj:function dj(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
hQ:function hQ(a){this.a=a}},Z={
k8:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.bF(c)),35044)
a.bindBuffer(b,null)
return new Z.dw(b,u)},
af:function(a){return new Z.ak(a)},
dw:function dw(a,b){this.a=a
this.b=b},
cA:function cA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
bC:function bC(a){this.a=a},
aD:function aD(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bq:function bq(a,b,c){this.a=a
this.b=b
this.c=c},
ak:function ak(a){this.a=a}},D={
B:function(){var u=new D.aW()
u.d=0
return u},
eI:function eI(){},
aW:function aW(){var _=this
_.d=_.c=_.b=_.a=null},
f9:function f9(a){this.a=a},
fa:function fa(a){this.a=a},
T:function T(){this.b=null},
aY:function aY(){this.b=null},
aZ:function aZ(){this.b=null},
n:function n(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
f0:function f0(){},
a8:function a8(){},
cU:function cU(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
bs:function bs(){var _=this
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hy:function hy(){}},X={cB:function cB(a,b){this.a=a
this.b=b},cT:function cT(a,b){this.a=a
this.b=b},fs:function fs(){var _=this
_.d=_.c=_.b=_.a=null},cW:function cW(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fB:function fB(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aj:function aj(a,b,c){this.a=a
this.b=b
this.c=c},b3:function b3(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},h_:function h_(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},c_:function c_(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hc:function hc(){},dn:function dn(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},hT:function hT(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dt:function dt(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
jN:function(a,b,c,d){var u,t,s,r,q=new X.eC()
q.d=q.c=q.b=q.a=512
q.e=!0
q.f=!1
q.x=q.r=1
q.ch=T.k2(null)
q.cx=new V.a_(0,0,0,1)
q.cy=!0
q.db=2000
q.dx=!0
q.dy=V.he()
q.san(0,512)
q.saj(0,512)
u=new V.a_(0,0,0,1)
if(!q.cx.p(0,u)){t=q.cx
q.cx=u
s=new D.n("color",t,u)
s.b=!0
q.a_(s)}if(q.cy!==d){q.cy=d
s=new D.n("clearColor",!d,d)
s.b=!0
q.a_(s)}s=q.db
if(!(Math.abs(s-2000)<$.w().a)){q.db=2000
s=new D.n("depth",s,2000)
s.b=!0
q.a_(s)}if(!q.f){q.f=!0
s=new D.n("autoResize",!1,!0)
s.b=!0
q.a_(s)}s=q.r
if(!(Math.abs(s-b)<$.w().a)){q.r=b
s=new D.n("autoResizeScalarX",s,b)
s.b=!0
q.a_(s)}s=q.x
if(!(Math.abs(s-c)<$.w().a)){q.x=c
s=new D.n("autoResizeScalarY",s,c)
s.b=!0
q.a_(s)}r=V.he()
if(!J.y(q.dy,r)){t=q.dy
q.dy=r
s=new D.n("region",t,r)
s.b=!0
q.a_(s)}return q},
jV:function(a,b){var u=new X.fi(),t=new V.a_(0,0,0,1)
u.a=t
u.b=a
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=V.he()
u.r=t
return u},
kN:function(){var u,t=new X.d4()
t.c=1.0471975511965976
t.d=0.1
t.e=2000
t.sb3(null)
u=t.c
if(!(Math.abs(u-1.0471975511965976)<$.w().a)){t.c=1.0471975511965976
u=new D.n("fov",u,1.0471975511965976)
u.b=!0
t.a_(u)}u=t.d
if(!(Math.abs(u-0.1)<$.w().a)){t.d=0.1
u=new D.n("near",u,0.1)
u.b=!0
t.a_(u)}u=t.e
if(!(Math.abs(u-2000)<$.w().a)){t.e=2000
u=new D.n("far",u,2000)
u.b=!0
t.a_(u)}return t},
eC:function eC(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jP:function jP(){},
fi:function fi(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fm:function fm(){this.b=this.a=null},
d4:function d4(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
hG:function hG(){}},V={
jJ:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.au(a-b,u)
return(a<0?a+u:a)+b},
A:function(a,b,c){if(a==null)return C.a.al("null",c)
return C.a.al(C.c.e2(Math.abs(a-0)<$.w().a?0:a,b),c+b+1)},
bK:function(a,b,c){var u,t,s,r,q,p,o=H.c([],[P.u])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.r)(a),++s){r=V.A(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.b(o,q)
u=C.a.al(o[q],t)
p=o.length
if(q>=p)return H.b(o,q)
o[q]=u}return o},
ct:function(a){return C.c.i3(Math.pow(2,C.O.b0(Math.log(H.nI(a))/Math.log(2))))},
aI:function(){var u=$.bY
return u==null?$.bY=V.at(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
at:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ai(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kL:function(a,b,c){return V.at(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
kJ:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.at(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
kK:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.at(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
aM:function(){var u=$.kP
return u==null?$.kP=new V.a4(0,0):u},
mj:function(){var u=$.c4
return u==null?$.c4=new V.S(0,0,0):u},
he:function(){var u=$.c8
return u==null?$.c8=V.c7(0,0,1,1):u},
c7:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.d8(a,b,c,d)},
cd:function(){var u=$.l6
return u==null?$.l6=new V.C(0,0,0):u},
l8:function(){var u=$.l7
return u==null?$.l7=new V.bB(1,0.00390625,0.0000152587890625,0):u},
V:function V(a,b,c){this.a=a
this.b=b
this.c=c},
a_:function a_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f8:function f8(a){this.a=a},
cZ:function cZ(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ai:function ai(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
S:function S(a,b,c){this.a=a
this.b=b
this.c=c},
av:function av(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d8:function d8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
J:function J(a,b){this.a=a
this.b=b},
C:function C(a,b,c){this.a=a
this.b=b
this.c=c},
bB:function bB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
o3:function(a){P.mH(C.M,new V.jD(a))},
mA:function(a){var u=new V.hs()
u.ei(a,!0)
return u},
eJ:function eJ(a){this.a=a
this.d=this.c=null},
eK:function eK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jD:function jD(a){this.a=a},
hs:function hs(){this.b=this.a=null},
hu:function hu(a){this.a=a},
ht:function ht(a){this.a=a}},U={
kx:function(){var u=new U.eO()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
ky:function(a){var u=new U.cD()
u.a=a
return u},
kC:function(a){var u=new U.bR()
u.b9(U.a9)
u.aI(u.gem(),u.gfB())
u.aV(0,a)
u.e=null
u.f=V.aI()
u.r=0
return u},
eO:function eO(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cD:function cD(){this.b=this.a=null},
bR:function bR(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a9:function a9(){},
da:function da(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
du:function du(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dv:function dv(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
jR:function(a,b){var u,t,s,r=new M.cE()
r.a=!0
u=E.jT(null)
u.sby(0,F.lv())
r.e=u
t=new X.fm()
s=r.b
r.b=t
t.gn().l(0,r.gW())
u=new D.n("camera",s,r.b)
u.b=!0
r.T(u)
r.saH(0,a)
r.sam(b)
return r},
kA:function(a){var u,t,s=new M.cJ()
s.a=!0
u=O.eN(E.aq)
s.e=u
u.aI(s.gf0(),s.gf2())
s.y=s.x=s.r=s.f=null
t=X.jV(!0,null)
s.sbW(null)
s.saH(0,t)
s.sam(null)
s.e.aV(0,a)
return s},
cC:function cC(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
cE:function cE(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cJ:function cJ(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cM:function cM(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ae:function ae(){}},A={
mg:function(a,b){var u=a.aF,t=new A.fH(b,u)
t.ba(b,u)
t.ef(a,b)
return t},
mh:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="MaterialLight_"+a0.gat(a0)+a1.gat(a1)+a2.gat(a2)+a3.gat(a3)+a4.gat(a4)+a5.gat(a5)+a6.gat(a6)+a7.gat(a7)+a8.gat(a8)+"_"
f+=a?"1":"0"
f+=b?"1":"0"
f+=c?"1":"0"
f=f+"0_"+e
u=a9.length
if(u>0){f+="_Dir"
for(t=0;t<a9.length;a9.length===u||(0,H.r)(a9),++t)f+="_"+H.e(a9[t].a)}u=b0.length
if(u>0){f+="_Point"
for(t=0;t<b0.length;b0.length===u||(0,H.r)(b0),++t)f+="_"+H.e(b0[t].a)}u=b1.length
if(u>0){f+="_Spot"
for(t=0;t<b1.length;b1.length===u||(0,H.r)(b1),++t)f+="_"+H.e(b1[t].a)}for(u=a9.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=a9[t].b
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
g=$.a1()
if(l){u=$.am()
g=new Z.ak(g.a|u.a)}if(k){u=$.aC()
g=new Z.ak(g.a|u.a)}if(j){u=$.ag()
g=new Z.ak(g.a|u.a)}if(i){u=$.aB()
g=new Z.ak(g.a|u.a)}return new A.fK(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,s,p,m,p,r,h,!0,!1,!1,o,r,n,l,k,j,!1,i,a,!1,c,!1,e,f.charCodeAt(0)==0?f:f,g)},
jg:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
jh:function(a,b,c){var u,t="Txt, txt2D).rgb;\n"
A.jg(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.jH(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.b){u+="   "+c+"Color = "+c+"Clr*texture2D("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.b){u+="   "+c+"Color = texture2D("+c+t
a.a=u}a.a=u+"}\n"},
nh:function(a,b){var u,t=a.a,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.jg(b,t,"emission")
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
ne:function(a,b){var u,t=a.b
if(!(t.a||t.b||!1))return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.jh(b,t,"ambient")
b.a+="\n"},
nf:function(a,b){var u,t=a.c
if(!(t.a||t.b||!1))return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.jh(b,t,"diffuse")
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
ni:function(a,b){var u,t=a.d
if(!(t.a||t.b||!1))return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.jh(b,t,"invDiffuse")
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
no:function(a,b){var u,t=a.e
if(!(t.a||t.b||!1))return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.jh(b,t,"specular")
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
nk:function(a,b){var u,t,s
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
nm:function(a,b){var u,t=a.r,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.jg(b,t,"reflect")
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
nn:function(a,b){var u,t=a.x,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.jg(b,t,"refract")
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
ng:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.e(u)
s=A.jH(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.ao()
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
c.a+="      highLight = intensity*("+C.b.t(m," + ")+");\n"}else c.a+="   highLight = "+C.b.t(m," + ")+";\n"
o.push("highLight")}r=c.a+="   return lit.color*("+C.b.t(o," + ")+");\n"
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
nl:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.e(u)
s=A.jH(t)
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
if(typeof u!=="number")return u.ao()
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
o=c.a+="   return "+C.b.t(l," * ")+";\n"
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
r=c.a+="      highLight = intensity*("+C.b.t(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.b.t(l," + ")+");\n"
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
np:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.e(u)
s=A.jH(t)
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
if(typeof u!=="number")return u.ao()
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
r=c.a+="   return "+C.b.t(j," * ")+";\n"
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
u=c.a+="      highLight = intensity*("+C.b.t(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.b.t(j," + ")+");\n"
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
nj:function(a,b){var u,t
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
if(u.a||u.b||!1)t.push("ambientColor")
u=a.c
if(u.a||u.b||!1)t.push("diffuse(norm, litVec)")
u=a.d
if(u.a||u.b||!1)t.push("invDiffuse(norm, litVec)")
u=a.e
if(u.a||u.b||!1)t.push("specular(norm, litVec)")
u=b.a+="   return "+C.b.t(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
nq:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.M("")
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
A.nh(a,j)
A.ne(a,j)
A.nf(a,j)
A.ni(a,j)
A.no(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.nm(a,j)
A.nn(a,j)}A.nk(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.r)(q),++o)A.ng(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.r)(q),++o)A.nl(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.r)(q),++o)A.np(a,q[o],j)
A.nj(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.c([],[P.u])
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.r)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.ah(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.r)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.ah(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.r)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.ah(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
if(u.a||u.b||!1)n.push("emissionColor()")
u=a.r
if(u.a||u.b||!1)n.push("reflect(refl)")
u=a.x
if(u.a||u.b||!1)n.push("refract(refl)")
if(n.length<=0)n.push("vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.b.t(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
nr:function(a,b){var u,t,s
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
nt:function(a,b){var u
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
ns:function(a,b){var u
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
nv:function(a,b){var u,t
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
nw:function(a,b){var u,t
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
nu:function(a,b){var u
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
nx:function(a,b){var u
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
jH:function(a){if(0>=a.length)return H.b(a,0)
return a[0].toUpperCase()+C.a.ah(a,1)},
mF:function(a,b){var u,t,s,r
for(u=0,t="precision mediump float;\n\nuniform vec4 backClr;\n\nvarying vec2 pos;\n\nuniform int txtCount;\n";u<a;++u)t=t+("uniform sampler2D txt"+u+";\n")+("uniform mat4 clrMat"+u+";\n")+("uniform vec2 srcLoc"+u+";\n")+("uniform vec2 srcSize"+u+";\n")+("uniform vec2 destLoc"+u+";\n")+("uniform vec2 destSize"+u+";\n")+("uniform int flip"+u+";\n")
t+="\nvec4 clrAccum;\n"
s=b===C.L
t=(s||b===C.n?t+"float colorCount;\n":t)+"\nvoid layout(sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      color = clamp(color, vec4(0.0), vec4(1.0));\n"
if(b===C.K)t+="      clrAccum += color;\n"
else if(b===C.o)t+="      clrAccum = mix(clrAccum, color, color.a);\n"
else t=s?t+"      clrAccum += color;\n      colorCount += 1.0;\n":t+"      clrAccum = color;\n      colorCount = 1.0;\n"
t+="   }\n}\n\nvoid layoutAll()\n{\n"
r=b===C.n
if(r)for(u=a-1;u>=0;--u)t=t+("   if(txtCount > "+u+")\n")+"   {\n"+("     layout(txt"+u+", clrMat"+u+", srcLoc"+u+", srcSize"+u+", destLoc"+u+", destSize"+u+", flip"+u+");\n")+"     if(colorCount > 0.0) return;\n   }\n"
else for(u=0;u<a;++u)t=t+("   if(txtCount <= "+u+") return;\n")+("   layout(txt"+u+", clrMat"+u+", srcLoc"+u+", srcSize"+u+", destLoc"+u+", destSize"+u+", flip"+u+");\n")
t+="}\n\nvoid main()\n{\n   clrAccum = backClr;\n"
if(s)t+="   colorCount = 1.0;\n"
else if(r)t+="   colorCount = 0.0;\n"
t+="   layoutAll();\n"
t=(s?t+"   clrAccum = clrAccum/colorCount;\n":t)+"   if(clrAccum.a <= 0.0) discard;\n   gl_FragColor = clrAccum;\n}\n"
return t.charCodeAt(0)==0?t:t},
mE:function(a,b,c){var u="TextureLayout_"+a+"_"+C.d.h(b.a),t=new A.hM(c,u)
t.ba(c,u)
t.ej(a,b,c)
return t},
k4:function(a,b,c,d,e){var u=new A.i_(a,c,e)
u.f=d
P.me(d,0,P.v)
return u},
cz:function cz(a,b,c){this.a=a
this.b=b
this.c=c},
ex:function ex(a){this.a=a},
W:function W(a,b,c){this.a=a
this.b=b
this.c=c},
f_:function f_(a,b){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fj:function fj(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fk:function fk(a,b){this.a=a
this.b=b},
fH:function fH(a,b){var _=this
_.im=_.dj=_.di=_.dh=_.aF=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iv=_.iu=_.it=_.c4=_.c3=_.c2=_.c1=_.c0=_.c_=_.is=_.dz=_.dw=_.ir=_.dv=_.du=_.dt=_.iq=_.ds=_.dr=_.dq=_.ip=_.dn=_.dm=_.io=_.dl=_.dk=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cG:function cG(a,b){this.a=a
this.b=b},
d5:function d5(a,b){this.a=a
this.b=b},
dd:function dd(a,b){this.a=a
this.b=b},
fK:function fK(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.dh=b4},
ca:function ca(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cb:function cb(a,b,c,d,e,f,g,h,i,j){var _=this
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
cc:function cc(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
db:function db(){},
bn:function bn(a,b){this.a=a
this.b=b},
hM:function hM(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dq:function dq(){},
i3:function i3(a){this.a=a},
bb:function bb(a,b,c){this.a=a
this.c=b
this.d=c},
i0:function i0(a,b,c){this.a=a
this.c=b
this.d=c},
i1:function i1(a,b,c){this.a=a
this.c=b
this.d=c},
i2:function i2(a,b,c){this.a=a
this.c=b
this.d=c},
i_:function i_(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
P:function P(a,b,c){this.a=a
this.c=b
this.d=c},
az:function az(a,b,c){this.a=a
this.c=b
this.d=c},
I:function I(a,b,c){this.a=a
this.c=b
this.d=c},
bc:function bc(a,b,c){this.a=a
this.c=b
this.d=c},
i4:function i4(a,b,c){this.a=a
this.c=b
this.d=c},
by:function by(a,b,c){this.a=a
this.c=b
this.d=c},
Z:function Z(a,b,c){this.a=a
this.c=b
this.d=c},
Q:function Q(a,b,c){this.a=a
this.c=b
this.d=c},
bz:function bz(a,b,c){this.a=a
this.c=b
this.d=c}},F={
lv:function(){var u,t,s,r,q,p=null,o=F.k1(),n=o.a,m=new V.C(-1,-1,1)
m=m.A(0,Math.sqrt(m.F(m)))
u=n.bg(new V.av(1,2,4,6),new V.a_(1,0,0,1),new V.S(-1,-1,0),new V.a4(0,1),m,p)
n=o.a
m=new V.C(1,-1,1)
m=m.A(0,Math.sqrt(m.F(m)))
t=n.bg(new V.av(0,3,4,6),new V.a_(0,0,1,1),new V.S(1,-1,0),new V.a4(1,1),m,p)
n=o.a
m=new V.C(1,1,1)
m=m.A(0,Math.sqrt(m.F(m)))
s=n.bg(new V.av(0,2,5,6),new V.a_(0,1,0,1),new V.S(1,1,0),new V.a4(1,0),m,p)
n=o.a
m=V.aM()
r=new V.C(-1,1,1)
r=r.A(0,Math.sqrt(r.F(r)))
q=n.bg(new V.av(0,2,4,7),new V.a_(1,1,0,1),new V.S(-1,1,0),m,r,p)
o.d.ha(H.c([u,t,s,q],[F.bd]))
o.ap()
return o},
jb:function(a){var u,t=a.a>0?1:0
if(a.b>0)t+=2
u=a.c
if(typeof u!=="number")return u.a1()
return(u>0?t+4:t)*2},
co:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.C(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.C(u+a3,t+a1,s+a2)
q=new V.C(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.C(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.jb(i)
l=F.jb(j.b)
k=F.lx(d,a0,new F.ja(j,F.jb(j.c),F.jb(j.d),l,m,c),b)
if(k!=null)a.c9(k)},
o4:function(a){var u,t,s=null,r={}
r.a=u
r.a=null
r.a=new F.jE()
r=new F.jF(r,a)
t=F.k1()
F.co(t,s,r,8,8,1,0,0,1)
F.co(t,s,r,8,8,0,1,0,3)
F.co(t,s,r,8,8,0,0,1,2)
F.co(t,s,r,8,8,-1,0,0,0)
F.co(t,s,r,8,8,0,-1,0,0)
F.co(t,s,r,8,8,0,0,-1,3)
t.ap()
t.hC(new F.ir(),new F.h5())
return t},
nU:function(a,b){var u,t={}
t.a=u
t.a=null
t.a=new F.jo()
return F.lx(b,a,new F.jp(t),null)},
lx:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.k1()
t=H.c([],[F.bd])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.ik(g,g,new V.a_(p,0,0,1),g,g,new V.a4(r,1),g,g,0)
q.l(0,o)
c.$3(o,r,0)
t.push(o.bZ(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.ik(g,g,new V.a_(j,i,h,1),g,g,new V.a4(r,m),g,g,0)
k.l(0,o)
c.$3(o,r,n)
t.push(o.bZ(d))}}u.d.hb(a+1,b+1,t)
return u},
bP:function(a,b,c){var u=new F.aX(),t=a.a
if(t==null)H.p(P.q("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.p(P.q("May not create a face with vertices attached to different shapes."))
u.bO(a)
u.bP(b)
u.fY(c)
u.a.a.d.b.push(u)
u.a.a.a2()
return u},
m9:function(a,b){var u=new F.bV(),t=a.a
if(t==null)H.p(P.q("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.p(P.q("May not create a line with vertices attached to different shapes."))
u.bO(a)
u.bP(b)
u.a.a.c.b.push(u)
u.a.a.a2()
return u},
k1:function(){var u=new F.ho(),t=new F.il(u)
t.b=!1
t.c=H.c([],[F.bd])
u.a=t
t=new F.hr(u)
t.b=H.c([],[F.c3])
u.b=t
t=new F.hq(u)
t.b=H.c([],[F.bV])
u.c=t
t=new F.hp(u)
t.b=H.c([],[F.aX])
u.d=t
u.e=null
return u},
ik:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.bd(),r=new F.iu()
r.b=H.c([],[F.c3])
s.b=r
r=new F.iq()
u=[F.bV]
r.b=H.c([],u)
r.c=H.c([],u)
s.c=r
r=new F.im()
u=[F.aX]
r.b=H.c([],u)
r.c=H.c([],u)
r.d=H.c([],u)
s.d=r
h=$.kn()
s.e=0
r=$.a1()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.am().a)!==0?e:t
s.x=(u&$.aC().a)!==0?b:t
s.y=(u&$.ag().a)!==0?f:t
s.z=(u&$.aT().a)!==0?g:t
s.Q=(u&$.ko().a)!==0?c:t
s.ch=(u&$.bi().a)!==0?i:0
s.cx=(u&$.aB().a)!==0?a:t
return s},
ja:function ja(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jE:function jE(){},
jF:function jF(a,b){this.a=a
this.b=b},
jo:function jo(){},
jp:function jp(a){this.a=a},
aX:function aX(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fb:function fb(){},
hv:function hv(){},
bV:function bV(){this.b=this.a=null},
fu:function fu(){},
hZ:function hZ(){},
c3:function c3(){this.a=null},
ho:function ho(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hp:function hp(a){this.a=a
this.b=null},
hq:function hq(a){this.a=a
this.b=null},
hr:function hr(a){this.a=a
this.b=null},
bd:function bd(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iw:function iw(a){this.a=a},
iv:function iv(a){this.a=a},
il:function il(a){this.a=a
this.c=this.b=null},
im:function im(){this.d=this.c=this.b=null},
io:function io(a,b){this.a=a
this.b=b},
ip:function ip(a,b){this.a=a
this.b=b},
iq:function iq(){this.c=this.b=null},
is:function is(){},
ir:function ir(){},
it:function it(){},
h5:function h5(){},
iu:function iu(){this.b=null}},K={
lr:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="testCanvas",b1=null,b2="controls",b3="modifiers",b4={},b5=V.mA("Test 040"),b6=W.jQ()
b6.className="pageLargeCanvas"
b6.id=b0
b5.a.appendChild(b6)
u=[P.u]
b5.d2(H.c(["A combination of bump mapping with height map and specular map."],u))
b5.h8(H.c(["controls"],u))
b5.d2(H.c(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(b0)
if(t==null)H.p(P.q("Failed to find an element with the identifier, testCanvas."))
s=E.mG(t,!0,!0,!0,!1)
r=s.f.bp("../resources/gravel/colorLarge.png")
q=s.f.bp("../resources/gravel/bumpLarge.png")
p=s.f.bp("../resources/gravel/specularSmall.png")
o=s.f.bp("../resources/gravel/heightSmall.png")
b5=U.ky(V.kL(0,0,2))
n=new U.da()
n.r=n.f=n.e=n.d=n.c=n.b=n.a=0
n.se7(0)
n.sdV(0,0)
n.se_(0)
m=n.d
if(!(Math.abs(m-0.6)<$.w().a)){n.d=0.6
m=new D.n("deltaYaw",m,0.6)
m.b=!0
n.N(m)}m=n.e
if(!(Math.abs(m-0.1)<$.w().a)){n.e=0.1
m=new D.n("deltaPitch",m,0.1)
m.b=!0
n.N(m)}m=n.f
if(!(Math.abs(m-0)<$.w().a)){n.f=0
m=new D.n("deltaRoll",m,0)
m.b=!0
n.N(m)}m=[U.a9]
l=U.kC(H.c([b5,n],m))
k=E.jT(F.o4(0.03))
k.sb3(l)
n=O.kH()
b5=n.f
b5.saX(0,new V.V(1,1,1))
k.sam(n)
j=new V.V(1,1,1)
i=new D.bs()
i.c=new V.V(1,1,1)
i.r=1
i.y=i.x=0
i.z=!0
i.a=V.aI()
h=i.b
i.b=l
l.gn().l(0,i.gek())
b5=new D.n("mover",h,i.b)
b5.b=!0
i.ae(b5)
if(!i.c.p(0,j)){h=i.c
i.c=j
b5=new D.n("color",h,j)
b5.b=!0
i.ae(b5)}g=V.l8()
if(!J.y(i.f,g)){h=i.f
i.f=g
b5=new D.n("shadowAdjust",h,g)
b5.b=!0
i.ae(b5)}b5=i.r
if(!(Math.abs(b5-0.5)<$.w().a)){i.r=0.5
b5=new D.n("attenuation0",b5,0.5)
b5.b=!0
i.ae(b5)}b5=i.x
if(!(Math.abs(b5-0.1)<$.w().a)){i.x=0.1
b5=new D.n("attenuation1",b5,0.1)
b5.b=!0
i.ae(b5)}b5=i.y
if(!(Math.abs(b5-0)<$.w().a)){i.y=0
b5=new D.n("attenuation2",b5,0)
b5.b=!0
i.ae(b5)}f=F.lv()
e=E.jT(f)
b4.a=null
o.gn().l(0,new K.jv(b4,s,o))
d=X.kN()
b5=s.r
n=new U.du()
c=U.kx()
c.se6(0,!0)
c.sdJ(6.283185307179586)
c.sdL(0)
c.sa7(0,0)
c.sdK(100)
c.sZ(0)
c.sd9(0.5)
n.b=c
b=n.gbd()
c.gn().l(0,b)
c=U.kx()
c.se6(0,!0)
c.sdJ(6.283185307179586)
c.sdL(0)
c.sa7(0,0)
c.sdK(100)
c.sZ(0)
c.sd9(0.5)
n.c=c
c.gn().l(0,b)
n.d=null
n.r=n.f=n.e=!1
n.y=n.x=2.5
n.Q=4
n.ch=n.cx=!1
n.db=n.cy=0
n.dx=null
n.dy=0
n.fx=n.fr=null
a=new X.aj(!1,!1,!1)
h=n.d
n.d=a
c=new D.n(b3,h,a)
c.b=!0
n.N(c)
c=n.f
if(c!==!1){n.f=!1
c=new D.n("invertX",c,!1)
c.b=!0
n.N(c)}c=n.r
if(c!==!1){n.r=!1
c=new D.n("invertY",c,!1)
c.b=!0
n.N(c)}n.bQ(b5)
b5=s.r
c=new U.dv()
c.c=0.01
c.e=c.d=0
a=new X.aj(!1,!1,!1)
c.b=a
b=new D.n(b3,b1,a)
b.b=!0
c.N(b)
c.bQ(b5)
d.sb3(U.kC(H.c([n,c,U.ky(V.kL(0,0,5))],m)))
a0=O.kH()
a0.dx.l(0,i)
b5=a0.r
b5.saX(0,new V.V(0.3,0.3,0.3))
a0.x.saX(0,new V.V(1,1,1))
b5=a0.z
b5.be(new A.W(!0,b5.c.b,!1))
b5.cW(40)
a1=X.jN(!0,1,1,!0)
b5=[E.aq]
a2=M.kA(H.c([e,k],b5))
a2.sam(a0)
a2.sbW(d)
a2.saH(0,a1)
a3=X.jN(!0,0.5,0.5,!0)
a4=M.kA(H.c([e,k],b5))
a4.sbW(d)
a4.saH(0,a3)
b5=new O.eZ()
b5.b=1
b5.c=10
b5.f=b5.e=b5.d=!1
if(!(Math.abs(0.5)<$.w().a)){b5.b=0.5
n=new D.n("start",1,0.5)
n.b=!0
b5.v(n)}n=b5.c
if(!(Math.abs(n-5.5)<$.w().a)){b5.c=5.5
n=new D.n("stop",n,5.5)
n.b=!0
b5.v(n)}a4.sam(b5)
b5=new V.bB(-1,0,0,1)
n=a1.ch
m=a3.ch
a5=new M.cM()
a5.a=!0
a5.c=X.jN(!0,1,1,!1)
c=O.kB(b1,b1)
b=a5.gW()
c.gn().l(0,b)
a5.d=c
a5.e=M.jR(a5.c,c)
c=a5.c.ch
a6=$.l2
c=O.kB(a6==null?$.l2=new V.J(0,1):a6,c)
c.gn().l(0,b)
a5.f=c
a5.r=M.jR(b1,c)
a5.d.sbS(0)
a5.f.sbS(0)
a5.d.sd8(n)
a5.d.saW(m)
a5.f.saW(m)
a5.d.scg(b1)
a5.f.scg(b1)
a5.d.sbR(b5)
a5.f.sbR(b5)
a5.r.saH(0,b1)
a7=new O.di()
a7.a=new V.a_(0,0,0,0)
b5=O.eN(O.b8)
a7.c=b5
b5.aI(a7.gfa(),a7.gfc())
a7.d=0
a7.e=null
a7.r=a7.f=C.o
a8=new V.a_(0,0,0,0)
if(!a7.a.p(0,a8)){h=a7.a
a7.a=a8
b5=new D.n("backColor",h,a8)
b5.b=!0
a7.v(b5)}a7.sd5(C.o)
a7.sd5(C.n)
b5=a7.c
n=a3.ch
b5.l(0,O.kU(V.c7(0,0.8,0.2,0.2),n))
n=a7.c
b5=a1.ch
n.l(0,O.kU(V.c7(0,0.6,0.2,0.2),b5))
a9=M.jR(b1,b1)
a9.saH(0,X.jV(!1,b1))
a9.sam(a7)
b5=M.ae
n=H.c([a2,a4,a5,a9],[b5])
m=new M.cC()
m.b9(b5)
m.e=!0
m.f=!1
m.r=null
m.aI(m.gfF(),m.gfH())
m.aV(0,n)
b5=s.d
if(b5!==m){if(b5!=null)b5.gn().E(0,s.gcv())
s.d=m
m.gn().l(0,s.gcv())
s.cw()}b5=new V.eJ(b2)
u=u.getElementById(b2)
b5.c=u
if(u==null)H.p("Failed to find controls for CheckGroup")
b5.d=H.c([],[W.eL])
b5.d1(0,"Color",new K.jw(a0,r),!0)
b5.aU(0,"Specular",new K.jx(a0,p))
b5.aU(0,"Bump",new K.jy(a0,q))
b5.aU(0,"Height",new K.jz(b4,e,f))
b5.aU(0,"Blur",new K.jA(a5,a3))
b5.aU(0,"Passes",new K.jB(a9,a7))
V.o3(s)},
jv:function jv(a,b,c){this.a=a
this.b=b
this.c=c},
jw:function jw(a,b){this.a=a
this.b=b},
jx:function jx(a,b){this.a=a
this.b=b},
jy:function jy(a,b){this.a=a
this.b=b},
jz:function jz(a,b,c){this.a=a
this.b=b
this.c=c},
jA:function jA(a,b){this.a=a
this.b=b},
jB:function jB(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,T,R,O,E,Z,D,X,V,U,M,A,F,K]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jZ.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gI:function(a){return H.c5(a)},
h:function(a){return"Instance of '"+H.e(H.c6(a))+"'"}}
J.fp.prototype={
h:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$ibg:1}
J.cR.prototype={
p:function(a,b){return null==b},
h:function(a){return"null"},
gI:function(a){return 0}}
J.cS.prototype={
gI:function(a){return 0},
h:function(a){return String(a)}}
J.ha.prototype={}
J.bA.prototype={}
J.b1.prototype={
h:function(a){var u=a[$.lA()]
if(u==null)return this.ee(a)
return"JavaScript function for "+H.e(J.a6(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.b_.prototype={
dX:function(a,b){if(!!a.fixed$length)H.p(P.x("removeAt"))
if(b<0||b>=a.length)throw H.d(P.d7(b,null))
return a.splice(b,1)[0]},
E:function(a,b){var u
if(!!a.fixed$length)H.p(P.x("remove"))
for(u=0;u<a.length;++u)if(J.y(a[u],b)){a.splice(u,1)
return!0}return!1},
aV:function(a,b){var u,t
if(!!a.fixed$length)H.p(P.x("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.r)(b),++t)a.push(b[t])},
J:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.d(P.bo(a))}},
t:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.b(r,u)
r[u]=t}return r.join(b)},
hA:function(a){return this.t(a,"")},
ht:function(a,b,c){var u,t,s=a.length
for(u=b,t=0;t<s;++t){u=c.$2(u,a[t])
if(a.length!==s)throw H.d(P.bo(a))}return u},
hu:function(a,b,c){return this.ht(a,b,c,null)},
L:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
cq:function(a,b,c){if(b<0||b>a.length)throw H.d(P.Y(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.d(P.Y(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.jn(a,0)])
return H.c(a.slice(b,c),[H.jn(a,0)])},
cp:function(a,b){return this.cq(a,b,null)},
ghs:function(a){if(a.length>0)return a[0]
throw H.d(H.kD())},
gaG:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.d(H.kD())},
bz:function(a,b){if(!!a.immutable$list)H.p(P.x("sort"))
H.dc(a,0,a.length-1,b)},
ar:function(a,b){var u
for(u=0;u<a.length;++u)if(J.y(a[u],b))return!0
return!1},
h:function(a){return P.jW(a,"[","]")},
gV:function(a){return new J.a2(a,a.length)},
gI:function(a){return H.c5(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.p(P.x("set length"))
if(b<0)throw H.d(P.Y(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){if(b>=a.length||b<0)throw H.d(H.bJ(a,b))
return a[b]},
k:function(a,b,c){if(!!a.immutable$list)H.p(P.x("indexed set"))
if(b>=a.length||b<0)throw H.d(H.bJ(a,b))
a[b]=c},
$ii:1,
$io:1}
J.jY.prototype={}
J.a2.prototype={
gM:function(a){return this.d},
C:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.d(H.r(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bU.prototype={
hh:function(a,b){var u
if(typeof b!=="number")throw H.d(H.ab(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbn(b)
if(this.gbn(a)===u)return 0
if(this.gbn(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbn:function(a){return a===0?1/a<0:a<0},
i3:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.d(P.x(""+a+".toInt()"))},
b0:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.d(P.x(""+a+".floor()"))},
Y:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.x(""+a+".round()"))},
e2:function(a,b){var u
if(b>20)throw H.d(P.Y(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbn(a))return"-"+u
return u},
b7:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.d(P.Y(b,2,36,"radix",null))
u=a.toString(b)
if(C.a.U(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.p(P.x("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.b(t,1)
u=t[1]
if(3>=s)return H.b(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.a.m("0",r)},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gI:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
m:function(a,b){if(typeof b!=="number")throw H.d(H.ab(b))
return a*b},
au:function(a,b){var u
if(typeof b!=="number")throw H.d(H.ab(b))
u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
cu:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cY(a,b)},
a4:function(a,b){return(a|0)===a?a/b|0:this.cY(a,b)},
cY:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.d(P.x("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
aN:function(a,b){var u
if(a>0)u=this.cX(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
h1:function(a,b){if(b<0)throw H.d(H.ab(b))
return this.cX(a,b)},
cX:function(a,b){return b>31?0:a>>>b},
$iF:1,
$iac:1}
J.cQ.prototype={$iv:1}
J.cP.prototype={}
J.b0.prototype={
U:function(a,b){if(b<0)throw H.d(H.bJ(a,b))
if(b>=a.length)H.p(H.bJ(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(b>=a.length)throw H.d(H.bJ(a,b))
return a.charCodeAt(b)},
w:function(a,b){if(typeof b!=="string")throw H.d(P.ks(b,null,null))
return a+b},
aQ:function(a,b,c,d){var u,t
c=P.b7(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
ab:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.Y(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
ag:function(a,b){return this.ab(a,b,0)},
q:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.p(H.ab(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.R()
if(b<0)throw H.d(P.d7(b,null))
if(b>c)throw H.d(P.d7(b,null))
if(c>a.length)throw H.d(P.d7(c,null))
return a.substring(b,c)},
ah:function(a,b){return this.q(a,b,null)},
m:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.I)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
al:function(a,b){var u=b-a.length
if(u<=0)return a
return this.m(" ",u)+a},
hM:function(a,b,c){var u=b-a.length
if(u<=0)return a
return a+this.m(c,u)},
bl:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.Y(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
dG:function(a,b){return this.bl(a,b,0)},
h:function(a){return a},
gI:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gj:function(a){return a.length},
$iu:1}
H.N.prototype={
gj:function(a){return this.a.length},
i:function(a,b){return C.a.U(this.a,b)},
$at:function(){return[P.v]},
$ai:function(){return[P.v]},
$ao:function(){return[P.v]}}
H.f6.prototype={}
H.cV.prototype={
gM:function(a){return this.d},
C:function(){var u,t=this,s=t.a,r=J.cr(s),q=r.gj(s)
if(t.b!==q)throw H.d(P.bo(s))
u=t.c
if(u>=q){t.d=null
return!1}t.d=r.L(s,u);++t.c
return!0}}
H.fF.prototype={
gV:function(a){return new H.fG(J.bj(this.a),this.b)},
gj:function(a){return J.ah(this.a)},
L:function(a,b){return this.b.$1(J.jM(this.a,b))},
$ai:function(a,b){return[b]}}
H.fG.prototype={
C:function(){var u=this,t=u.b
if(t.C()){u.a=u.c.$1(t.gM(t))
return!0}u.a=null
return!1},
gM:function(a){return this.a}}
H.iy.prototype={
gV:function(a){return new H.iz(J.bj(this.a),this.b)}}
H.iz.prototype={
C:function(){var u,t
for(u=this.a,t=this.b;u.C();)if(t.$1(u.gM(u)))return!0
return!1},
gM:function(a){var u=this.a
return u.gM(u)}}
H.cK.prototype={}
H.i8.prototype={
k:function(a,b,c){throw H.d(P.x("Cannot modify an unmodifiable list"))}}
H.dr.prototype={}
H.eQ.prototype={
h:function(a){return P.k0(this)},
k:function(a,b,c){return H.m1()},
$iO:1}
H.eR.prototype={
gj:function(a){return this.a},
bj:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
i:function(a,b){if(!this.bj(0,b))return
return this.cJ(b)},
cJ:function(a){return this.b[a]},
J:function(a,b){var u,t,s,r=this.c
for(u=r.length,t=0;t<u;++t){s=r[t]
b.$2(s,this.cJ(s))}}}
H.hX.prototype={
ak:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.h6.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fr.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.i7.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jI.prototype={
$1:function(a){if(!!J.R(a).$ibp)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:9}
H.e3.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bN.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
gia:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hH.prototype={}
H.hB.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.es(u)+"'"}}
H.bL.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bL))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gI:function(a){var u,t=this.c
if(t==null)u=H.c5(this.a)
else u=typeof t!=="object"?J.cx(t):H.c5(t)
return(u^H.c5(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.c6(u))+"'")}}
H.eH.prototype={
h:function(a){return this.a}}
H.hl.prototype={
h:function(a){return"RuntimeError: "+H.e(this.a)}}
H.K.prototype={
gj:function(a){return this.a},
gax:function(a){return new H.fw(this,[H.jn(this,0)])},
bj:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cG(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cG(t,b)}else return s.hw(b)},
hw:function(a){var u=this,t=u.d
if(t==null)return!1
return u.c7(u.bF(t,u.c6(a)),a)>=0},
i:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bb(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bb(r,b)
s=t==null?null:t.b
return s}else return q.hx(b)},
hx:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bF(r,s.c6(a))
t=s.c7(u,a)
if(t<0)return
return u[t].b},
k:function(a,b,c){var u,t,s=this
if(typeof b==="string"){u=s.b
s.cB(u==null?s.b=s.bH():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cB(t==null?s.c=s.bH():t,b,c)}else s.hy(b,c)},
hy:function(a,b){var u,t,s,r=this,q=r.d
if(q==null)q=r.d=r.bH()
u=r.c6(a)
t=r.bF(q,u)
if(t==null)r.bM(q,u,[r.bI(a,b)])
else{s=r.c7(t,a)
if(s>=0)t[s].b=b
else t.push(r.bI(a,b))}},
J:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.d(P.bo(u))
t=t.c}},
cB:function(a,b,c){var u=this.bb(a,b)
if(u==null)this.bM(a,b,this.bI(b,c))
else u.b=c},
bI:function(a,b){var u=this,t=new H.fv(a,b)
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
c6:function(a){return J.cx(a)&0x3ffffff},
c7:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.y(a[t].a,b))return t
return-1},
h:function(a){return P.k0(this)},
bb:function(a,b){return a[b]},
bF:function(a,b){return a[b]},
bM:function(a,b,c){a[b]=c},
eB:function(a,b){delete a[b]},
cG:function(a,b){return this.bb(a,b)!=null},
bH:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bM(t,u,t)
this.eB(t,u)
return t}}
H.fv.prototype={}
H.fw.prototype={
gj:function(a){return this.a.a},
gV:function(a){var u=this.a,t=new H.fx(u,u.r)
t.c=u.e
return t}}
H.fx.prototype={
gM:function(a){return this.d},
C:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.bo(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.jr.prototype={
$1:function(a){return this.a(a)},
$S:9}
H.js.prototype={
$2:function(a,b){return this.a(a,b)}}
H.jt.prototype={
$1:function(a){return this.a(a)}}
H.fq.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$imw:1}
H.c0.prototype={$ic0:1}
H.b4.prototype={$ib4:1}
H.d_.prototype={
gj:function(a){return a.length},
$iz:1,
$az:function(){}}
H.c1.prototype={
i:function(a,b){H.aA(b,a,a.length)
return a[b]},
k:function(a,b,c){H.aA(b,a,a.length)
a[b]=c},
$at:function(){return[P.F]},
$ii:1,
$ai:function(){return[P.F]},
$io:1,
$ao:function(){return[P.F]}}
H.d0.prototype={
k:function(a,b,c){H.aA(b,a,a.length)
a[b]=c},
$at:function(){return[P.v]},
$ii:1,
$ai:function(){return[P.v]},
$io:1,
$ao:function(){return[P.v]}}
H.h0.prototype={
i:function(a,b){H.aA(b,a,a.length)
return a[b]}}
H.h1.prototype={
i:function(a,b){H.aA(b,a,a.length)
return a[b]}}
H.h2.prototype={
i:function(a,b){H.aA(b,a,a.length)
return a[b]}}
H.h3.prototype={
i:function(a,b){H.aA(b,a,a.length)
return a[b]}}
H.h4.prototype={
i:function(a,b){H.aA(b,a,a.length)
return a[b]}}
H.d1.prototype={
gj:function(a){return a.length},
i:function(a,b){H.aA(b,a,a.length)
return a[b]}}
H.c2.prototype={
gj:function(a){return a.length},
i:function(a,b){H.aA(b,a,a.length)
return a[b]},
$ic2:1,
$ibx:1}
H.cf.prototype={}
H.cg.prototype={}
H.ch.prototype={}
H.ci.prototype={}
P.iB.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:17}
P.iA.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.iC.prototype={
$0:function(){this.a.$0()}}
P.iD.prototype={
$0:function(){this.a.$0()}}
P.e9.prototype={
eo:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bI(new P.j0(this,b),0),a)
else throw H.d(P.x("`setTimeout()` not found."))},
ep:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bI(new P.j_(this,a,Date.now(),b),0),a)
else throw H.d(P.x("Periodic timer."))},
$idk:1}
P.j0.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.j_.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.cu(u,q)}s.c=r
t.d.$1(s)}}
P.dx.prototype={}
P.dg.prototype={}
P.hE.prototype={}
P.dk.prototype={}
P.j9.prototype={}
P.ji.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.d3():s
s=this.b
if(s==null)throw H.d(t)
u=H.d(t)
u.stack=s.h(0)
throw u}}
P.iQ.prototype={
i_:function(a){var u,t,s,r=null
try{if(C.f===$.al){a.$0()
return}P.nz(r,r,this,a)}catch(s){u=H.bh(s)
t=H.ki(s)
P.lh(r,r,this,u,t)}},
i0:function(a,b){var u,t,s,r=null
try{if(C.f===$.al){a.$1(b)
return}P.nA(r,r,this,a,b)}catch(s){u=H.bh(s)
t=H.ki(s)
P.lh(r,r,this,u,t)}},
i1:function(a,b){return this.i0(a,b,null)},
he:function(a){return new P.iR(this,a)},
d4:function(a,b){return new P.iS(this,a,b)}}
P.iR.prototype={
$0:function(){return this.a.i_(this.b)}}
P.iS.prototype={
$1:function(a){return this.a.i1(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.iN.prototype={
gV:function(a){var u=new P.dM(this,this.r)
u.c=this.e
return u},
gj:function(a){return this.a},
l:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cD(u==null?s.b=P.k9():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cD(t==null?s.c=P.k9():t,b)}else return s.er(0,b)},
er:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.k9()
u=s.cE(b)
t=r[u]
if(t==null)r[u]=[s.bB(b)]
else{if(s.cK(t,b)>=0)return!1
t.push(s.bB(b))}return!0},
E:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fQ(this.c,b)
else return this.fP(0,b)},
fP:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.eF(r,b)
t=s.cK(u,b)
if(t<0)return!1
s.cZ(u.splice(t,1)[0])
return!0},
cD:function(a,b){if(a[b]!=null)return!1
a[b]=this.bB(b)
return!0},
fQ:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.cZ(u)
delete a[b]
return!0},
cN:function(){this.r=1073741823&this.r+1},
bB:function(a){var u,t=this,s=new P.iO(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cN()
return s},
cZ:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cN()},
cE:function(a){return J.cx(a)&1073741823},
eF:function(a,b){return a[this.cE(b)]},
cK:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.y(a[t].a,b))return t
return-1}}
P.iO.prototype={}
P.dM.prototype={
gM:function(a){return this.d},
C:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.bo(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fy.prototype={
$2:function(a,b){this.a.k(0,a,b)},
$S:3}
P.fz.prototype={$ii:1,$io:1}
P.t.prototype={
gV:function(a){return new H.cV(a,this.gj(a))},
L:function(a,b){return this.i(a,b)},
i5:function(a,b){var u,t,s=this,r=H.c([],[H.nS(s,a,"t",0)])
C.b.sj(r,s.gj(a))
for(u=0;u<s.gj(a);++u){t=s.i(a,u)
if(u>=r.length)return H.b(r,u)
r[u]=t}return r},
i4:function(a){return this.i5(a,!0)},
hq:function(a,b,c,d){var u
P.b7(b,c,this.gj(a))
for(u=b;u<c;++u)this.k(a,u,d)},
h:function(a){return P.jW(a,"[","]")}}
P.fC.prototype={}
P.fD.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:3}
P.aH.prototype={
J:function(a,b){var u,t
for(u=J.bj(this.gax(a));u.C();){t=u.gM(u)
b.$2(t,this.i(a,t))}},
gj:function(a){return J.ah(this.gax(a))},
h:function(a){return P.k0(a)},
$iO:1}
P.j1.prototype={
k:function(a,b,c){throw H.d(P.x("Cannot modify unmodifiable map"))}}
P.fE.prototype={
i:function(a,b){return J.cw(this.a,b)},
k:function(a,b,c){J.jK(this.a,b,c)},
J:function(a,b){J.kq(this.a,b)},
gj:function(a){return J.ah(this.a)},
h:function(a){return J.a6(this.a)},
$iO:1}
P.ds.prototype={}
P.iT.prototype={
h:function(a){return P.jW(this,"{","}")},
L:function(a,b){var u,t,s
P.kS(b,"index")
for(u=P.mU(this,this.r),t=0;u.C();){s=u.d
if(b===t)return s;++t}throw H.d(P.H(b,this,"index",null,t))},
$ii:1}
P.dN.prototype={}
P.ef.prototype={}
P.eD.prototype={
hD:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.b7(a0,a1,b.length)
u=$.lN()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.a.H(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.jq(C.a.H(b,n))
j=H.jq(C.a.H(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.b(u,i)
h=u[i]
if(h>=0){i=C.a.U("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.M("")
g=r.a+=C.a.q(b,s,t)
r.a=g+H.d6(m)
s=n
continue}}throw H.d(P.L("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.a.q(b,s,a1)
f=g.length
if(q>=0)P.kt(b,p,a1,q,o,f)
else{e=C.d.au(f-1,4)+1
if(e===1)throw H.d(P.L(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.a.aQ(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.kt(b,p,a1,q,o,d)
else{e=C.d.au(d,4)
if(e===1)throw H.d(P.L(c,b,a1))
if(e>1)b=C.a.aQ(b,a1,a1,e===2?"==":"=")}return b}}
P.eE.prototype={}
P.eM.prototype={}
P.eS.prototype={}
P.f7.prototype={}
P.ih.prototype={
ghp:function(){return C.J}}
P.ij.prototype={
bY:function(a){var u,t,s=P.b7(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.j8(u)
if(t.eD(a,0,s)!==s)t.d0(J.lT(a,s-1),0)
return new Uint8Array(u.subarray(0,H.na(0,t.b,u.length)))}}
P.j8.prototype={
d0:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
eD:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.a.U(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.a.H(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.d0(r,C.a.H(a,p)))s=p}else if(r<=2047){q=n.b
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
P.ii.prototype={
bY:function(a){var u,t,s,r,q,p,o,n,m=P.mK(!1,a,0,null)
if(m!=null)return m
u=P.b7(0,null,J.ah(a))
t=P.lj(a,0,u)
if(t>0){s=P.c9(a,0,t)
if(t===u)return s
r=new P.M(s)
q=t
p=!1}else{q=0
r=null
p=!0}if(r==null)r=new P.M("")
o=new P.j7(!1,r)
o.c=p
o.hi(a,q,u)
if(o.e>0){H.p(P.L("Unfinished UTF-8 octet sequence",a,u))
r.a+=H.d6(65533)
o.f=o.e=o.d=0}n=r.a
return n.charCodeAt(0)==0?n:n}}
P.j7.prototype={
hi:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=this,k="Bad UTF-8 encoding 0x",j=l.d,i=l.e,h=l.f
l.f=l.e=l.d=0
$label0$0:for(u=J.cr(a),t=l.b,s=b;!0;s=n){$label1$1:if(i>0){do{if(s===c)break $label0$0
r=u.i(a,s)
if(typeof r!=="number")return r.ao()
if((r&192)!==128){q=P.L(k+C.d.b7(r,16),a,s)
throw H.d(q)}else{j=(j<<6|r&63)>>>0;--i;++s}}while(i>0)
q=h-1
if(q<0||q>=4)return H.b(C.u,q)
if(j<=C.u[q]){q=P.L("Overlong encoding of 0x"+C.d.b7(j,16),a,s-h-1)
throw H.d(q)}if(j>1114111){q=P.L("Character outside valid Unicode range: 0x"+C.d.b7(j,16),a,s-h-1)
throw H.d(q)}if(!l.c||j!==65279)t.a+=H.d6(j)
l.c=!1}for(q=s<c;q;){p=P.lj(a,s,c)
if(p>0){l.c=!1
o=s+p
t.a+=P.c9(a,s,o)
if(o===c)break}else o=s
n=o+1
r=u.i(a,o)
if(typeof r!=="number")return r.R()
if(r<0){m=P.L("Negative UTF-8 code unit: -0x"+C.d.b7(-r,16),a,n-1)
throw H.d(m)}else{if((r&224)===192){j=r&31
i=1
h=1
continue $label0$0}if((r&240)===224){j=r&15
i=2
h=2
continue $label0$0}if((r&248)===240&&r<245){j=r&7
i=3
h=3
continue $label0$0}m=P.L(k+C.d.b7(r,16),a,n-1)
throw H.d(m)}}break $label0$0}if(i>0){l.d=j
l.e=i
l.f=h}}}
P.bg.prototype={}
P.a7.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.a7&&this.a===b.a&&!0},
gI:function(a){var u=this.a
return(u^C.d.aN(u,30))&1073741823},
h:function(a){var u=this,t=P.m2(H.ms(u)),s=P.cF(H.mq(u)),r=P.cF(H.mm(u)),q=P.cF(H.mn(u)),p=P.cF(H.mp(u)),o=P.cF(H.mr(u)),n=P.m3(H.mo(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.F.prototype={}
P.aV.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.aV&&this.a===b.a},
gI:function(a){return C.d.gI(this.a)},
h:function(a){var u,t,s,r=new P.f5(),q=this.a
if(q<0)return"-"+new P.aV(0-q).h(0)
u=r.$1(C.d.a4(q,6e7)%60)
t=r.$1(C.d.a4(q,1e6)%60)
s=new P.f4().$1(q%1e6)
return""+C.d.a4(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
P.f4.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.f5.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bp.prototype={}
P.d3.prototype={
h:function(a){return"Throw of null."}}
P.an.prototype={
gbD:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbC:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbD()+o+u
if(!q.a)return t
s=q.gbC()
r=P.jU(q.b)
return t+s+": "+r}}
P.bu.prototype={
gbD:function(){return"RangeError"},
gbC:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.fn.prototype={
gbD:function(){return"RangeError"},
gbC:function(){var u,t=this.b
if(typeof t!=="number")return t.R()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gj:function(a){return this.f}}
P.i9.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.i5.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.hA.prototype={
h:function(a){return"Bad state: "+this.a}}
P.eP.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.jU(u)+"."}}
P.h9.prototype={
h:function(a){return"Out of Memory"},
$ibp:1}
P.de.prototype={
h:function(a){return"Stack Overflow"},
$ibp:1}
P.eX.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dF.prototype={
h:function(a){return"Exception: "+this.a}}
P.fh.prototype={
h:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.a.q(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.a.H(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.a.U(f,q)
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
k=""}j=C.a.q(f,m,n)
return h+l+j+k+"\n"+C.a.m(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.e(g)+")"):h}}
P.v.prototype={}
P.i.prototype={
gj:function(a){var u,t=this.gV(this)
for(u=0;t.C();)++u
return u},
L:function(a,b){var u,t,s
P.kS(b,"index")
for(u=this.gV(this),t=0;u.C();){s=u.gM(u)
if(b===t)return s;++t}throw H.d(P.H(b,this,"index",null,t))},
h:function(a){return P.m6(this,"(",")")}}
P.fo.prototype={}
P.o.prototype={$ii:1}
P.O.prototype={}
P.b5.prototype={
gI:function(a){return P.a3.prototype.gI.call(this,this)},
h:function(a){return"null"}}
P.ac.prototype={}
P.a3.prototype={constructor:P.a3,$ia3:1,
p:function(a,b){return this===b},
gI:function(a){return H.c5(this)},
h:function(a){return"Instance of '"+H.e(H.c6(this))+"'"},
toString:function(){return this.h(this)}}
P.u.prototype={}
P.M.prototype={
gj:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
P.ie.prototype={
$2:function(a,b){var u,t,s,r=J.kh(b).dG(b,"=")
if(r===-1){if(b!=="")J.jK(a,P.kd(b,0,b.length,this.a,!0),"")}else if(r!==0){u=C.a.q(b,0,r)
t=C.a.ah(b,r+1)
s=this.a
J.jK(a,P.kd(u,0,u.length,s,!0),P.kd(t,0,t.length,s,!0))}return a}}
P.ib.prototype={
$2:function(a,b){throw H.d(P.L("Illegal IPv4 address, "+a,this.a,b))}}
P.ic.prototype={
$2:function(a,b){throw H.d(P.L("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.id.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.er(C.a.q(this.b,a,b),null,16)
if(typeof u!=="number")return u.R()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u}}
P.bD.prototype={
ge4:function(){return this.b},
gc5:function(a){var u=this.c
if(u==null)return""
if(C.a.ag(u,"["))return C.a.q(u,1,u.length-1)
return u},
gbq:function(a){var u=this.d
if(u==null)return P.la(this.a)
return u},
gcd:function(a){var u=this.f
return u==null?"":u},
gdB:function(){var u=this.r
return u==null?"":u},
dY:function(a,b){var u,t,s,r=this,q=r.a,p=q==="file",o=r.b,n=r.d,m=r.c
if(!(m!=null))m=o.length!==0||n!=null||p?"":null
u=r.e
if(!p)t=m!=null&&u.length!==0
else t=!0
if(t&&!C.a.ag(u,"/"))u="/"+u
s=P.kb(null,0,0,b)
return new P.bD(q,o,m,n,u,s,r.r)},
gbs:function(){var u,t=this.Q
if(t==null){t=this.f
u=P.u
u=this.Q=new P.ds(P.l0(t==null?"":t),[u,u])
t=u}return t},
gdC:function(){return this.c!=null},
gdF:function(){return this.f!=null},
gdD:function(){return this.r!=null},
h:function(a){var u,t,s,r=this,q=r.y
if(q==null){q=r.a
u=q.length!==0?H.e(q)+":":""
t=r.c
s=t==null
if(!s||q==="file"){q=u+"//"
u=r.b
if(u.length!==0)q=q+H.e(u)+"@"
if(!s)q+=t
u=r.d
if(u!=null)q=q+":"+H.e(u)}else q=u
q+=r.e
u=r.f
if(u!=null)q=q+"?"+u
u=r.r
if(u!=null)q=q+"#"+u
q=r.y=q.charCodeAt(0)==0?q:q}return q},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.R(b).$ik5)if(s.a==b.gbx())if(s.c!=null===b.gdC())if(s.b==b.ge4())if(s.gc5(s)==b.gc5(b))if(s.gbq(s)==b.gbq(b))if(s.e===b.gdU(b)){u=s.f
t=u==null
if(!t===b.gdF()){if(t)u=""
if(u===b.gcd(b)){u=s.r
t=u==null
if(!t===b.gdD()){if(t)u=""
u=u===b.gdB()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gI:function(a){var u=this.z
return u==null?this.z=C.a.gI(this.h(0)):u},
$ik5:1,
gbx:function(){return this.a},
gdU:function(a){return this.e}}
P.j2.prototype={
$1:function(a){throw H.d(P.L("Invalid port",this.a,this.b+1))}}
P.j3.prototype={
$1:function(a){return P.j6(C.T,a,C.e,!1)}}
P.j5.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.e(P.j6(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.e(P.j6(C.h,b,C.e,!0))}}}
P.j4.prototype={
$2:function(a,b){var u,t
if(b==null||typeof b==="string")this.a.$2(a,b)
else for(u=J.bj(b),t=this.a;u.C();)t.$2(a,u.gM(u))}}
P.ia.prototype={
ge3:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.b(o,0)
u=q.a
o=o[0]+1
t=C.a.bl(u,"?",o)
s=u.length
if(t>=0){r=P.cn(u,t+1,s,C.l,!1)
s=t}else r=p
return q.c=new P.iH("data",p,p,p,P.cn(u,o,s,C.w,!1),r,p)},
h:function(a){var u,t=this.b
if(0>=t.length)return H.b(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.jd.prototype={
$1:function(a){return new Uint8Array(96)}}
P.jc.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.b(u,a)
u=u[a]
J.lU(u,0,96,b)
return u},
$S:18}
P.je.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.a.H(b,s)^96
if(r>=t)return H.b(a,r)
a[r]=c}}}
P.jf.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.a.H(b,0),t=C.a.H(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.b(a,r)
a[r]=c}}}
P.iU.prototype={
gdC:function(){return this.c>0},
gdE:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.w()
t=this.e
if(typeof t!=="number")return H.m(t)
t=u+1<t
u=t}else u=!1
return u},
gdF:function(){var u=this.f
if(typeof u!=="number")return u.R()
return u<this.r},
gdD:function(){return this.r<this.a.length},
gcL:function(){return this.b===4&&C.a.ag(this.a,"http")},
gcM:function(){return this.b===5&&C.a.ag(this.a,"https")},
gbx:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gcL())q=t.x="http"
else if(t.gcM()){t.x="https"
q="https"}else if(q===4&&C.a.ag(t.a,s)){t.x=s
q=s}else if(q===7&&C.a.ag(t.a,r)){t.x=r
q=r}else{q=C.a.q(t.a,0,q)
t.x=q}return q},
ge4:function(){var u=this.c,t=this.b+3
return u>t?C.a.q(this.a,t,u-1):""},
gc5:function(a){var u=this.c
return u>0?C.a.q(this.a,u,this.d):""},
gbq:function(a){var u,t=this
if(t.gdE()){u=t.d
if(typeof u!=="number")return u.w()
return P.er(C.a.q(t.a,u+1,t.e),null,null)}if(t.gcL())return 80
if(t.gcM())return 443
return 0},
gdU:function(a){return C.a.q(this.a,this.e,this.f)},
gcd:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.R()
return u<t?C.a.q(this.a,u+1,t):""},
gdB:function(){var u=this.r,t=this.a
return u<t.length?C.a.ah(t,u+1):""},
gbs:function(){var u=this,t=u.f
if(typeof t!=="number")return t.R()
if(t>=u.r)return C.U
t=P.u
return new P.ds(P.l0(u.gcd(u)),[t,t])},
dY:function(a,b){var u,t,s,r,q,p=this,o=null,n=p.gbx(),m=n==="file",l=p.c,k=l>0?C.a.q(p.a,p.b+3,l):"",j=p.gdE()?p.gbq(p):o
l=p.c
if(l>0)u=C.a.q(p.a,l,p.d)
else u=k.length!==0||j!=null||m?"":o
l=p.a
t=C.a.q(l,p.e,p.f)
if(!m)s=u!=null&&t.length!==0
else s=!0
if(s&&!C.a.ag(t,"/"))t="/"+t
r=P.kb(o,0,0,b)
s=p.r
q=s<l.length?C.a.ah(l,s+1):o
return new P.bD(n,k,u,j,t,r,q)},
gI:function(a){var u=this.y
return u==null?this.y=C.a.gI(this.a):u},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.R(b).$ik5&&this.a===b.h(0)},
h:function(a){return this.a},
$ik5:1}
P.iH.prototype={}
W.l.prototype={}
W.et.prototype={
gj:function(a){return a.length}}
W.ev.prototype={
h:function(a){return String(a)}}
W.ew.prototype={
h:function(a){return String(a)}}
W.bl.prototype={$ibl:1}
W.bm.prototype={
ck:function(a,b,c){if(c!=null)return a.getContext(b,P.nJ(c))
return a.getContext(b)},
e8:function(a,b){return this.ck(a,b,null)},
$ibm:1}
W.aU.prototype={
gj:function(a){return a.length}}
W.eT.prototype={
gj:function(a){return a.length}}
W.E.prototype={$iE:1}
W.bO.prototype={
gj:function(a){return a.length}}
W.eU.prototype={}
W.ad.prototype={}
W.ap.prototype={}
W.eV.prototype={
gj:function(a){return a.length}}
W.eW.prototype={
gj:function(a){return a.length}}
W.eY.prototype={
gj:function(a){return a.length}}
W.f1.prototype={
h:function(a){return String(a)}}
W.cH.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iz:1,
$az:function(){return[[P.aa,P.ac]]},
$at:function(){return[[P.aa,P.ac]]},
$ii:1,
$ai:function(){return[[P.aa,P.ac]]},
$io:1,
$ao:function(){return[[P.aa,P.ac]]}}
W.cI.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gan(a))+" x "+H.e(this.gaj(a))},
p:function(a,b){var u
if(b==null)return!1
u=J.R(b)
if(!u.$iaa)return!1
return a.left===u.gbo(b)&&a.top===u.gbw(b)&&this.gan(a)===u.gan(b)&&this.gaj(a)===u.gaj(b)},
gI:function(a){return W.l9(C.c.gI(a.left),C.c.gI(a.top),C.c.gI(this.gan(a)),C.c.gI(this.gaj(a)))},
gd6:function(a){return a.bottom},
gaj:function(a){return a.height},
gbo:function(a){return a.left},
gbu:function(a){return a.right},
gbw:function(a){return a.top},
gan:function(a){return a.width},
$iaa:1,
$aaa:function(){return[P.ac]}}
W.f2.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iz:1,
$az:function(){return[P.u]},
$at:function(){return[P.u]},
$ii:1,
$ai:function(){return[P.u]},
$io:1,
$ao:function(){return[P.u]}}
W.f3.prototype={
gj:function(a){return a.length}}
W.iF.prototype={
gj:function(a){return this.b.length},
i:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
k:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.b(u,b)
this.a.replaceChild(c,u[b])},
l:function(a,b){this.a.appendChild(b)
return b},
gV:function(a){var u=this.i4(this)
return new J.a2(u,u.length)},
$at:function(){return[W.X]},
$ai:function(){return[W.X]},
$ao:function(){return[W.X]}}
W.X.prototype={
gbX:function(a){return new W.iF(a,a.children)},
gd7:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.R()
if(s<0)s=-s*0
if(typeof r!=="number")return r.R()
if(r<0)r=-r*0
return new P.aa(u,t,s,r,[P.ac])},
h:function(a){return a.localName},
$iX:1}
W.j.prototype={$ij:1}
W.f.prototype={
h9:function(a,b,c,d){if(c!=null)this.es(a,b,c,!1)},
es:function(a,b,c,d){return a.addEventListener(b,H.bI(c,1),!1)}}
W.ar.prototype={$iar:1}
W.bQ.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.ar]},
$at:function(){return[W.ar]},
$ii:1,
$ai:function(){return[W.ar]},
$io:1,
$ao:function(){return[W.ar]},
$ibQ:1}
W.fc.prototype={
gj:function(a){return a.length}}
W.fg.prototype={
gj:function(a){return a.length}}
W.aF.prototype={$iaF:1}
W.fl.prototype={
gj:function(a){return a.length}}
W.bS.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.D]},
$at:function(){return[W.D]},
$ii:1,
$ai:function(){return[W.D]},
$io:1,
$ao:function(){return[W.D]}}
W.aG.prototype={$iaG:1,
gda:function(a){return a.data}}
W.bT.prototype={$ibT:1}
W.eL.prototype={$iX:1,$iD:1}
W.br.prototype={$ibr:1}
W.fA.prototype={
h:function(a){return String(a)}}
W.fU.prototype={
gj:function(a){return a.length}}
W.bZ.prototype={$ibZ:1}
W.fV.prototype={
i:function(a,b){return P.aS(a.get(b))},
J:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aS(u.value[1]))}},
gax:function(a){var u=H.c([],[P.u])
this.J(a,new W.fW(u))
return u},
gj:function(a){return a.size},
k:function(a,b,c){throw H.d(P.x("Not supported"))},
$iO:1,
$aO:function(){return[P.u,null]}}
W.fW.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fX.prototype={
i:function(a,b){return P.aS(a.get(b))},
J:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aS(u.value[1]))}},
gax:function(a){var u=H.c([],[P.u])
this.J(a,new W.fY(u))
return u},
gj:function(a){return a.size},
k:function(a,b,c){throw H.d(P.x("Not supported"))},
$iO:1,
$aO:function(){return[P.u,null]}}
W.fY.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aJ.prototype={$iaJ:1}
W.fZ.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.aJ]},
$at:function(){return[W.aJ]},
$ii:1,
$ai:function(){return[W.aJ]},
$io:1,
$ao:function(){return[W.aJ]}}
W.au.prototype={$iau:1}
W.iE.prototype={
k:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.b(t,b)
u.replaceChild(c,t[b])},
gV:function(a){var u=this.a.childNodes
return new W.cL(u,u.length)},
gj:function(a){return this.a.childNodes.length},
i:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
$at:function(){return[W.D]},
$ai:function(){return[W.D]},
$ao:function(){return[W.D]}}
W.D.prototype={
hY:function(a,b){var u,t
try{u=a.parentNode
J.lR(u,b,a)}catch(t){H.bh(t)}return a},
h:function(a){var u=a.nodeValue
return u==null?this.ed(a):u},
fS:function(a,b,c){return a.replaceChild(b,c)},
$iD:1}
W.d2.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.D]},
$at:function(){return[W.D]},
$ii:1,
$ai:function(){return[W.D]},
$io:1,
$ao:function(){return[W.D]}}
W.aL.prototype={$iaL:1,
gj:function(a){return a.length}}
W.hb.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.aL]},
$at:function(){return[W.aL]},
$ii:1,
$ai:function(){return[W.aL]},
$io:1,
$ao:function(){return[W.aL]}}
W.hj.prototype={
i:function(a,b){return P.aS(a.get(b))},
J:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aS(u.value[1]))}},
gax:function(a){var u=H.c([],[P.u])
this.J(a,new W.hk(u))
return u},
gj:function(a){return a.size},
k:function(a,b,c){throw H.d(P.x("Not supported"))},
$iO:1,
$aO:function(){return[P.u,null]}}
W.hk.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hm.prototype={
gj:function(a){return a.length}}
W.aN.prototype={$iaN:1}
W.hw.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.aN]},
$at:function(){return[W.aN]},
$ii:1,
$ai:function(){return[W.aN]},
$io:1,
$ao:function(){return[W.aN]}}
W.aO.prototype={$iaO:1}
W.hx.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.aO]},
$at:function(){return[W.aO]},
$ii:1,
$ai:function(){return[W.aO]},
$io:1,
$ao:function(){return[W.aO]}}
W.aP.prototype={$iaP:1,
gj:function(a){return a.length}}
W.hC.prototype={
i:function(a,b){return a.getItem(b)},
k:function(a,b,c){a.setItem(b,c)},
J:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gax:function(a){var u=H.c([],[P.u])
this.J(a,new W.hD(u))
return u},
gj:function(a){return a.length},
$iO:1,
$aO:function(){return[P.u,P.u]}}
W.hD.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aw.prototype={$iaw:1}
W.aQ.prototype={$iaQ:1}
W.ax.prototype={$iax:1}
W.hI.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.ax]},
$at:function(){return[W.ax]},
$ii:1,
$ai:function(){return[W.ax]},
$io:1,
$ao:function(){return[W.ax]}}
W.hJ.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.aQ]},
$at:function(){return[W.aQ]},
$ii:1,
$ai:function(){return[W.aQ]},
$io:1,
$ao:function(){return[W.aQ]}}
W.hR.prototype={
gj:function(a){return a.length}}
W.aR.prototype={$iaR:1}
W.bw.prototype={$ibw:1}
W.hU.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.aR]},
$at:function(){return[W.aR]},
$ii:1,
$ai:function(){return[W.aR]},
$io:1,
$ao:function(){return[W.aR]}}
W.hV.prototype={
gj:function(a){return a.length}}
W.ba.prototype={}
W.ig.prototype={
h:function(a){return String(a)}}
W.ix.prototype={
gj:function(a){return a.length}}
W.be.prototype={
ghn:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.x("deltaY is not supported"))},
ghm:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.x("deltaX is not supported"))},
$ibe:1}
W.ce.prototype={
fT:function(a,b){return a.requestAnimationFrame(H.bI(b,1))},
eC:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.iG.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.E]},
$at:function(){return[W.E]},
$ii:1,
$ai:function(){return[W.E]},
$io:1,
$ao:function(){return[W.E]}}
W.dA.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
p:function(a,b){var u
if(b==null)return!1
u=J.R(b)
if(!u.$iaa)return!1
return a.left===u.gbo(b)&&a.top===u.gbw(b)&&a.width===u.gan(b)&&a.height===u.gaj(b)},
gI:function(a){return W.l9(C.c.gI(a.left),C.c.gI(a.top),C.c.gI(a.width),C.c.gI(a.height))},
gaj:function(a){return a.height},
gan:function(a){return a.width}}
W.iK.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.aF]},
$at:function(){return[W.aF]},
$ii:1,
$ai:function(){return[W.aF]},
$io:1,
$ao:function(){return[W.aF]}}
W.dS.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.D]},
$at:function(){return[W.D]},
$ii:1,
$ai:function(){return[W.D]},
$io:1,
$ao:function(){return[W.D]}}
W.iV.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.aP]},
$at:function(){return[W.aP]},
$ii:1,
$ai:function(){return[W.aP]},
$io:1,
$ao:function(){return[W.aP]}}
W.iZ.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.aw]},
$at:function(){return[W.aw]},
$ii:1,
$ai:function(){return[W.aw]},
$io:1,
$ao:function(){return[W.aw]}}
W.iI.prototype={}
W.iJ.prototype={
$1:function(a){return this.a.$1(a)}}
W.G.prototype={
gV:function(a){return new W.cL(a,this.gj(a))}}
W.cL.prototype={
C:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.cw(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gM:function(a){return this.d}}
W.dz.prototype={}
W.dB.prototype={}
W.dC.prototype={}
W.dD.prototype={}
W.dE.prototype={}
W.dG.prototype={}
W.dH.prototype={}
W.dI.prototype={}
W.dJ.prototype={}
W.dO.prototype={}
W.dP.prototype={}
W.dQ.prototype={}
W.dR.prototype={}
W.dT.prototype={}
W.dU.prototype={}
W.dX.prototype={}
W.dY.prototype={}
W.dZ.prototype={}
W.cj.prototype={}
W.ck.prototype={}
W.e_.prototype={}
W.e0.prototype={}
W.e4.prototype={}
W.e7.prototype={}
W.e8.prototype={}
W.cl.prototype={}
W.cm.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.ej.prototype={}
W.ek.prototype={}
W.el.prototype={}
W.em.prototype={}
W.en.prototype={}
W.eo.prototype={}
W.ep.prototype={}
P.iW.prototype={
dA:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
t.push(a)
this.b.push(null)
return s},
cj:function(a){var u,t,s,r,q,p=this,o={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.R(a)
if(!!u.$ia7)return new Date(a.a)
if(!!u.$imw)throw H.d(P.i6("structured clone of RegExp"))
if(!!u.$iar)return a
if(!!u.$ibl)return a
if(!!u.$ibQ)return a
if(!!u.$iaG)return a
if(!!u.$ic0||!!u.$ib4||!!u.$ibZ)return a
if(!!u.$iO){t=p.dA(a)
s=p.b
r=s.length
if(t>=r)return H.b(s,t)
q=o.a=s[t]
if(q!=null)return q
q={}
o.a=q
if(t>=r)return H.b(s,t)
s[t]=q
u.J(a,new P.iY(o,p))
return o.a}if(!!u.$io){t=p.dA(a)
o=p.b
if(t>=o.length)return H.b(o,t)
q=o[t]
if(q!=null)return q
return p.hk(a,t)}throw H.d(P.i6("structured clone of other type"))},
hk:function(a,b){var u,t=J.cr(a),s=t.gj(a),r=new Array(s),q=this.b
if(b>=q.length)return H.b(q,b)
q[b]=r
for(u=0;u<s;++u){q=this.cj(t.i(a,u))
if(u>=r.length)return H.b(r,u)
r[u]=q}return r}}
P.iY.prototype={
$2:function(a,b){this.a.a[a]=this.b.cj(b)},
$S:3}
P.ee.prototype={$iaG:1,
gda:function(a){return this.a}}
P.jj.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.iX.prototype={}
P.fd.prototype={
gbc:function(){var u=this.b,t=H.lo(u,"t",0)
return new H.fF(new H.iy(u,new P.fe(),[t]),new P.ff(),[t,W.X])},
k:function(a,b,c){var u=this.gbc()
J.lV(u.b.$1(J.jM(u.a,b)),c)},
l:function(a,b){this.b.a.appendChild(b)},
gj:function(a){return J.ah(this.gbc().a)},
i:function(a,b){var u=this.gbc()
return u.b.$1(J.jM(u.a,b))},
gV:function(a){var u=P.kG(this.gbc(),!1,W.X)
return new J.a2(u,u.length)},
$at:function(){return[W.X]},
$ai:function(){return[W.X]},
$ao:function(){return[W.X]}}
P.fe.prototype={
$1:function(a){return!!J.R(a).$iX}}
P.ff.prototype={
$1:function(a){return H.h(a,"$iX")}}
P.iP.prototype={
gbu:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.m(t)
return u+t},
gd6:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.m(t)
return u+t},
h:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
p:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.R(b)
if(!!u.$iaa){t=q.a
if(t==u.gbo(b)){s=q.b
if(s==u.gbw(b)){r=q.c
if(typeof t!=="number")return t.w()
if(typeof r!=="number")return H.m(r)
if(t+r===u.gbu(b)){t=q.d
if(typeof s!=="number")return s.w()
if(typeof t!=="number")return H.m(t)
u=s+t===u.gd6(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gI:function(a){var u=this,t=u.a,s=J.cx(t),r=u.b,q=J.cx(r),p=u.c
if(typeof t!=="number")return t.w()
if(typeof p!=="number")return H.m(p)
p=C.d.gI(t+p)
t=u.d
if(typeof r!=="number")return r.w()
if(typeof t!=="number")return H.m(t)
t=C.d.gI(r+t)
return P.mT(P.iM(P.iM(P.iM(P.iM(0,s),q),p),t))}}
P.aa.prototype={
gbo:function(a){return this.a},
gbw:function(a){return this.b},
gan:function(a){return this.c},
gaj:function(a){return this.d}}
P.b2.prototype={$ib2:1}
P.ft.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
L:function(a,b){return this.i(a,b)},
$at:function(){return[P.b2]},
$ii:1,
$ai:function(){return[P.b2]},
$io:1,
$ao:function(){return[P.b2]}}
P.b6.prototype={$ib6:1}
P.h7.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
L:function(a,b){return this.i(a,b)},
$at:function(){return[P.b6]},
$ii:1,
$ai:function(){return[P.b6]},
$io:1,
$ao:function(){return[P.b6]}}
P.hd.prototype={
gj:function(a){return a.length}}
P.hF.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
L:function(a,b){return this.i(a,b)},
$at:function(){return[P.u]},
$ii:1,
$ai:function(){return[P.u]},
$io:1,
$ao:function(){return[P.u]}}
P.k.prototype={
gbX:function(a){return new P.fd(a,new W.iE(a))}}
P.b9.prototype={$ib9:1}
P.hW.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
L:function(a,b){return this.i(a,b)},
$at:function(){return[P.b9]},
$ii:1,
$ai:function(){return[P.b9]},
$io:1,
$ao:function(){return[P.b9]}}
P.dK.prototype={}
P.dL.prototype={}
P.dV.prototype={}
P.dW.prototype={}
P.e5.prototype={}
P.e6.prototype={}
P.ec.prototype={}
P.ed.prototype={}
P.bx.prototype={$ii:1,
$ai:function(){return[P.v]},
$io:1,
$ao:function(){return[P.v]}}
P.ey.prototype={
gj:function(a){return a.length}}
P.ez.prototype={
i:function(a,b){return P.aS(a.get(b))},
J:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aS(u.value[1]))}},
gax:function(a){var u=H.c([],[P.u])
this.J(a,new P.eA(u))
return u},
gj:function(a){return a.size},
k:function(a,b,c){throw H.d(P.x("Not supported"))},
$iO:1,
$aO:function(){return[P.u,null]}}
P.eA.prototype={
$2:function(a,b){return this.a.push(a)}}
P.eB.prototype={
gj:function(a){return a.length}}
P.bk.prototype={}
P.h8.prototype={
gj:function(a){return a.length}}
P.dy.prototype={}
P.d9.prototype={
e0:function(a,b,c,d,e,f,g,h,i,j){var u,t=i==null
if(!t&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}u=J.R(g)
if(!!u.$iaG&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,P.nK(g))
return}if(!!u.$ibT&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.d(P.cy("Incorrect number or type of arguments"))},
i2:function(a,b,c,d,e,f,g){return this.e0(a,b,c,d,e,f,g,null,null,null)}}
P.hz.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return P.aS(a.item(b))},
k:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
L:function(a,b){return this.i(a,b)},
$at:function(){return[[P.O,,,]]},
$ii:1,
$ai:function(){return[[P.O,,,]]},
$io:1,
$ao:function(){return[[P.O,,,]]}}
P.e1.prototype={}
P.e2.prototype={}
T.eu.prototype={
aP:function(a,b){return!0},
h:function(a){return"all"}}
T.cO.prototype={
aP:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s)if(u[s].aP(0,b))return!0
return!1},
h:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.r)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.h(0)}return s}}
T.cX.prototype={}
T.aK.prototype={
aP:function(a,b){return!this.ec(0,b)},
h:function(a){return"!["+this.cr(0)+"]"}}
T.hn.prototype={
eh:function(a){var u,t
if(a.a.length<=0)throw H.d(P.q("May not create a Set with zero characters."))
u=new H.K([P.v,P.bg])
for(t=new H.cV(a,a.gj(a));t.C();)u.k(0,t.d,!0)
this.a=u},
aP:function(a,b){return this.a.bj(0,b)},
h:function(a){var u=this.a
return P.c9(u.gax(u),0,null)}}
R.df.prototype={
t:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new R.dp(this.a.P(0,b))
r.a=H.c([],[T.cX])
r.c=!1
this.c.push(r)
return r},
hr:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s){r=u[s]
if(r.aP(0,a))return r}return},
h:function(a){return this.b}}
R.dl.prototype={
h:function(a){var u=H.lw(this.b,"\n","\\n"),t=H.lw(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
R.dm.prototype={
h:function(a){return this.b}}
R.hS.prototype={
P:function(a,b){var u=this.a.i(0,b)
if(u==null){u=new R.df(this,b)
u.c=H.c([],[R.dp])
this.a.k(0,b,u)}return u},
b8:function(a){var u,t=this.b.i(0,a)
if(t==null){t=new R.dm(a)
u=P.u
t.c=new H.K([u,u])
this.b.k(0,a,t)}return t},
i6:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.c([],[R.dl]),k=this.c,j=[P.v],i=H.c([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)l.push(t)
return l}r=C.a.H(a,s)
q=k.hr(r)
if(q==null){if(t==null){i.push(r)
p=P.c9(i,0,m)
throw H.d(P.q("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}l.push(t)
s=t.c+1
i=H.c([],j)
k=this.c
t=m}else{if(!q.c)i.push(r)
k=q.b
if(k.d!=null){p=P.c9(i,0,m)
o=k.d
n=o.c.i(0,p)
t=new R.dl(n==null?o.b:n,p,s)}++s}}}}
R.dp.prototype={
h:function(a){return this.b.b+": "+this.cr(0)}}
O.aE.prototype={
b9:function(a){this.a=H.c([],[a])
this.c=this.b=null},
cl:function(a,b,c){this.b=b
this.c=a},
aI:function(a,b){return this.cl(a,null,b)},
cR:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
cO:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gj:function(a){return this.a.length},
gV:function(a){var u=this.a
return new J.a2(u,u.length)},
L:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
l:function(a,b){var u,t,s=this,r=[H.lo(s,"aE",0)]
if(s.cR(H.c([b],r))){u=s.a
t=u.length
u.push(b)
s.cO(t,H.c([b],r))}},
aV:function(a,b){var u,t
if(this.cR(b)){u=this.a
t=u.length
C.b.aV(u,b)
this.cO(t,b)}},
$ii:1}
O.bX.prototype={
gj:function(a){return this.a.length},
gn:function(){var u=this.b
return u==null?this.b=D.B():u},
aJ:function(){var u=this.b
if(u!=null)u.B(null)},
ga8:function(a){var u=this.a
if(u.length>0)return C.b.gaG(u)
else return V.aI()},
br:function(a){var u=this.a
if(a==null)u.push(V.aI())
else u.push(a)
this.aJ()},
b6:function(){var u=this.a
if(u.length>0){u.pop()
this.aJ()}}}
E.eF.prototype={}
E.aq.prototype={
cC:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.a2(u,u.length);u.C();){t=u.d
if(t.f==null)t.cC()}},
sby:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gn().E(0,s.gdQ())
u=s.c
if(u!=null)u.gn().l(0,s.gdQ())
t=new D.n("shape",r,s.c)
t.b=!0
s.as(t)}},
sam:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gn().E(0,s.gdS())
u=s.f
s.f=a
if(a!=null)a.gn().l(0,s.gdS())
s.cC()
t=new D.n("technique",u,s.f)
t.b=!0
s.as(t)}},
sb3:function(a){var u,t,s=this
if(!J.y(s.r,a)){u=s.r
if(u!=null)u.gn().E(0,s.gdO())
if(a!=null)a.gn().l(0,s.gdO())
s.r=a
t=new D.n("mover",u,a)
t.b=!0
s.as(t)}},
a9:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aA(0,b,s):null
if(!J.y(q,s.x)){u=s.x
s.x=q
t=new D.n("matrix",u,q)
t.b=!0
s.as(t)}r=s.f
if(r!=null)r.a9(0,b)
for(r=s.y.a,r=new J.a2(r,r.length);r.C();)r.d.a9(0,b)},
a0:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)s.a.push(s.ga8(s))
else s.a.push(r.m(0,s.ga8(s)))
s.aJ()
a.cc(t.f)
s=a.dy
u=(s&&C.b).gaG(s)
if(u!=null&&t.d!=null)u.bt(a,t)
for(s=t.y.a,s=new J.a2(s,s.length);s.C();)s.d.a0(a)
a.cb()
a.dx.b6()},
as:function(a){var u=this.z
if(u!=null)u.B(a)},
a2:function(){return this.as(null)},
dR:function(a){this.e=null
this.as(a)},
hK:function(){return this.dR(null)},
dT:function(a){this.as(a)},
hL:function(){return this.dT(null)},
dP:function(a){this.as(a)},
hJ:function(){return this.dP(null)},
dN:function(a){this.as(a)},
hG:function(){return this.dN(null)},
hF:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gdM(),s=[{func:1,ret:-1,args:[D.T]}],r=0;r<b.length;b.length===u||(0,H.r)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.aW()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}this.a2()},
hI:function(a,b){var u,t
for(u=b.gV(b),t=this.gdM();u.C();)u.gM(u).gn().E(0,t)
this.a2()},
h:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.hf.prototype={
eg:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.a7(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.bX()
t=[V.ai]
u.a=H.c([],t)
u.gn().l(0,new E.hg(s))
s.cy=u
u=new O.bX()
u.a=H.c([],t)
u.gn().l(0,new E.hh(s))
s.db=u
u=new O.bX()
u.a=H.c([],t)
u.gn().l(0,new E.hi(s))
s.dx=u
u=H.c([],[O.dh])
s.dy=u
u.push(null)
s.fr=new H.K([P.u,A.db])},
ghV:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga8(s)
u=t.db
u=t.z=s.m(0,u.ga8(u))
s=u}return s},
gdW:function(){var u,t=this,s=t.ch
if(s==null){s=t.ghV()
u=t.dx
u=t.ch=s.m(0,u.ga8(u))
s=u}return s},
ge5:function(){var u,t=this,s=t.cx
if(s==null){s=t.db
s=s.ga8(s)
u=t.dx
u=t.cx=s.m(0,u.ga8(u))
s=u}return s},
cc:function(a){var u=this.dy
u.push(a==null?(u&&C.b).gaG(u):a)},
cb:function(){var u=this.dy
if(u.length>1)u.pop()},
bh:function(a){var u=a.b
if(u.length===0)throw H.d(P.q("May not cache a shader with no name."))
if(this.fr.bj(0,u))throw H.d(P.q('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.k(0,u,a)}}
E.hg.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.hh.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.hi.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.dj.prototype={
cz:function(a){this.dZ()},
cw:function(){return this.cz(null)},
ghv:function(){var u,t=this,s=Date.now(),r=C.d.a4(P.kz(s-t.cx.a).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.a7(s,!1)
return u/r},
cT:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.m()
if(typeof r!=="number")return H.m(r)
u=C.c.b0(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.m()
t=C.c.b0(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.kW(C.p,s.ghZ())}},
dZ:function(){if(!this.ch){this.ch=!0
var u=window
C.A.eC(u)
C.A.fT(u,W.lk(new E.hQ(this),P.ac))}},
hX:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.cT()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.a7(r,!1)
s.y=P.kz(r-s.r.a).a*0.000001
r=s.cy
C.b.sj(r.a,0)
r.aJ()
r=s.db
C.b.sj(r.a,0)
r.aJ()
r=s.dx
C.b.sj(r.a,0)
r.aJ()
r=s.dy;(r&&C.b).sj(r,0)
s.dy.push(null)
o.a0(p.e)}}catch(q){u=H.bh(q)
t=H.ki(q)
P.kl("Error: "+H.e(u))
P.kl("Stack: "+H.e(t))
throw H.d(u)}}}
E.hQ.prototype={
$1:function(a){var u=this.a
if(u.ch){u.ch=!1
u.hX()}}}
Z.dw.prototype={}
Z.cA.prototype={
X:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.bh(s)
t=P.q('Failed to bind buffer attribute "'+r.a.h(0)+'": '+H.e(u))
throw H.d(t)}},
h:function(a){var u=this
return"["+u.a.h(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.bC.prototype={}
Z.aD.prototype={
ai:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
X:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].X(a)},
az:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
a0:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.b(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
h:function(a){var u,t,s,r,q=[P.u],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s)p.push(u[s].h(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a6(q[s]))
return"Buffer:  ["+this.a.h(0)+"]\nIndices: "+C.b.t(p,", ")+"\nAttrs:   "+C.b.t(r,", ")}}
Z.bq.prototype={
h:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.c6(this.c))+"'")+"]"}}
Z.ak.prototype={
gco:function(a){var u=this.a,t=(u&$.a1().a)!==0?3:0
if((u&$.am().a)!==0)t+=3
if((u&$.aC().a)!==0)t+=3
if((u&$.ag().a)!==0)t+=2
if((u&$.aT().a)!==0)t+=3
if((u&$.cu().a)!==0)t+=3
if((u&$.cv().a)!==0)t+=4
if((u&$.bi().a)!==0)++t
return(u&$.aB().a)!==0?t+4:t},
hd:function(a){var u,t=$.a1(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.am()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aC()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ag()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aT()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cu()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cv()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bi()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aB()
if((s&t.a)!==0)if(u===a)return t
return $.lM()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.ak))return!1
return this.a===b.a},
h:function(a){var u=H.c([],[P.u]),t=this.a
if((t&$.a1().a)!==0)u.push("Pos")
if((t&$.am().a)!==0)u.push("Norm")
if((t&$.aC().a)!==0)u.push("Binm")
if((t&$.ag().a)!==0)u.push("Txt2D")
if((t&$.aT().a)!==0)u.push("TxtCube")
if((t&$.cu().a)!==0)u.push("Clr3")
if((t&$.cv().a)!==0)u.push("Clr4")
if((t&$.bi().a)!==0)u.push("Weight")
if((t&$.aB().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.b.t(u,"|")}}
D.eI.prototype={}
D.aW.prototype={
l:function(a,b){var u=this.a;(u==null?this.a=H.c([],[{func:1,ret:-1,args:[D.T]}]):u).push(b)},
E:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.b.ar(s,b)
if(s===!0){s=t.a
u=(s&&C.b).E(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.b.ar(s,b)
if(s===!0){s=t.b
u=(s&&C.b).E(s,b)||u}return u},
B:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.T()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.b.J(P.kG(u,!0,{func:1,ret:-1,args:[D.T]}),new D.f9(q))
u=r.b
if(u!=null){r.b=H.c([],[{func:1,ret:-1,args:[D.T]}])
C.b.J(u,new D.fa(q))}return!0},
dg:function(){return this.B(null)},
ad:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.B(u)}}}}
D.f9.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.fa.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.T.prototype={}
D.aY.prototype={}
D.aZ.prototype={}
D.n.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cB.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cB))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.cT.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cT))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.fs.prototype={
hR:function(a){this.c=a.b
this.d.l(0,a.a)
return!1},
hN:function(a){this.c=a.b
this.d.E(0,a.a)
return!1}}
X.cW.prototype={}
X.fB.prototype={
aS:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.m()
u=b.b
t=q.ch
if(typeof u!=="number")return u.m()
s=new V.a4(o.a+n*m,o.b+u*t)
t=q.a.gaO()
r=new X.b3(a,V.aM(),q.x,t,s)
r.b=!0
q.z=new P.a7(p,!1)
q.x=s
return r},
ca:function(a,b){this.r=a.a
return!1},
b5:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.e9()
if(typeof u!=="number")return u.ao()
this.r=(u&~t)>>>0
return!1},
b4:function(a,b){var u=this.d
if(u==null)return!1
u.B(this.aS(a,b))
return!0},
hS:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaO()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.m()
q=a.b
p=o.cy
if(typeof q!=="number")return q.m()
t=new X.c_(new V.J(s*r,q*p),u,t)
t.b=!0
n.B(t)
return!0},
fl:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.cW(c,r.a.gaO(),b)
s.b=!0
t.B(s)
r.y=new P.a7(u,!1)
r.x=V.aM()}}
X.aj.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.aj))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
h:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.b3.prototype={}
X.h_.prototype={
bE:function(a,b,c){var u=this,t=new P.a7(Date.now(),!1),s=u.a.gaO(),r=new X.b3(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
ca:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.B(this.bE(a,b,!0))
return!0},
b5:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.e9()
if(typeof t!=="number")return t.ao()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.B(u.bE(a,b,!0))
return!0},
b4:function(a,b){var u=this.d
if(u==null)return!1
u.B(this.bE(a,b,!1))
return!0},
hT:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaO()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.m()
r=a.b
q=p.ch
if(typeof r!=="number")return r.m()
u=new X.c_(new V.J(t*s,r*q),u,b)
u.b=!0
o.B(u)
return!0}}
X.c_.prototype={}
X.hc.prototype={}
X.dn.prototype={}
X.hT.prototype={
aS:function(a,b){var u=this,t=new P.a7(Date.now(),!1),s=a.length>0?a[0]:V.aM(),r=u.a.gaO(),q=new X.dn(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
hQ:function(a){var u=this.b
if(u==null)return!1
u.B(this.aS(a,!0))
return!0},
hO:function(a){var u=this.c
if(u==null)return!1
u.B(this.aS(a,!0))
return!0},
hP:function(a){var u=this.d
if(u==null)return!1
u.B(this.aS(a,!1))
return!0}}
X.dt.prototype={
gaO:function(){var u=this.a,t=C.i.gd7(u).c
t.toString
u=C.i.gd7(u).d
u.toString
return V.c7(0,0,t,u)},
cH:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.cT(u,new X.aj(t,a.altKey,a.shiftKey))},
aM:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.aj(t,a.altKey,a.shiftKey)},
bN:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.aj(t,a.altKey,a.shiftKey)},
aE:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.D()
u=t.top
if(typeof r!=="number")return r.D()
return new V.a4(s-q,r-u)},
aT:function(a){return new V.J(a.movementX,a.movementY)},
bJ:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.a4])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s){r=u[s]
q=C.c.Y(r.pageX)
C.c.Y(r.pageY)
p=o.left
C.c.Y(r.pageX)
n.push(new V.a4(q-p,C.c.Y(r.pageY)-o.top))}return n},
aC:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cB(u,new X.aj(t,a.altKey,a.shiftKey))},
bG:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.D()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.D()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
ff:function(a){this.f=!0},
f_:function(a){this.f=!1},
f5:function(a){if(this.f&&this.bG(a))a.preventDefault()},
fj:function(a){var u
if(!this.f)return
u=this.cH(a)
this.b.hR(u)},
fh:function(a){var u
if(!this.f)return
u=this.cH(a)
this.b.hN(u)},
fn:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aM(a)
if(r.x){u=r.aC(a)
t=r.aT(a)
if(r.d.ca(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.aC(a)
s=r.aE(a)
if(r.c.ca(u,s))a.preventDefault()},
fs:function(a){var u,t,s,r=this
r.aM(a)
u=r.aC(a)
if(r.x){t=r.aT(a)
if(r.d.b5(u,t))a.preventDefault()
return}if(r.r)return
s=r.aE(a)
if(r.c.b5(u,s))a.preventDefault()},
f9:function(a){var u,t,s,r=this
if(!r.bG(a)){r.aM(a)
u=r.aC(a)
if(r.x){t=r.aT(a)
if(r.d.b5(u,t))a.preventDefault()
return}if(r.r)return
s=r.aE(a)
if(r.c.b5(u,s))a.preventDefault()}},
fp:function(a){var u,t,s,r=this
r.aM(a)
u=r.aC(a)
if(r.x){t=r.aT(a)
if(r.d.b4(u,t))a.preventDefault()
return}if(r.r)return
s=r.aE(a)
if(r.c.b4(u,s))a.preventDefault()},
f7:function(a){var u,t,s,r=this
if(!r.bG(a)){r.aM(a)
u=r.aC(a)
if(r.x){t=r.aT(a)
if(r.d.b4(u,t))a.preventDefault()
return}if(r.r)return
s=r.aE(a)
if(r.c.b4(u,s))a.preventDefault()}},
fu:function(a){var u,t,s=this
s.aM(a)
u=new V.J((a&&C.z).ghm(a),C.z.ghn(a)).A(0,180)
if(s.x){if(s.d.hS(u))a.preventDefault()
return}if(s.r)return
t=s.aE(a)
if(s.c.hT(u,t))a.preventDefault()},
fw:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aC(s.y)
t=s.aE(s.y)
s.d.fl(u,t,r)}},
fO:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bN(a)
u=t.bJ(a)
if(t.e.hQ(u))a.preventDefault()},
fK:function(a){var u
this.bN(a)
u=this.bJ(a)
if(this.e.hO(u))a.preventDefault()},
fM:function(a){var u
this.bN(a)
u=this.bJ(a)
if(this.e.hP(u))a.preventDefault()}}
D.f0.prototype={$ia8:1}
D.a8.prototype={}
D.cU.prototype={
ae:function(a){var u=this.x
if(u!=null)u.B(a)},
cQ:function(a){var u=this.y
if(u!=null)u.B(a)},
fk:function(){return this.cQ(null)},
fA:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.r)(a),++t){s=a[t]
if(s==null||this.ey(s))return!1}return!0},
eU:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcP(),s=[{func:1,ret:-1,args:[D.T]}],r=0;r<b.length;b.length===u||(0,H.r)(b),++r){q=b[r]
if(q instanceof D.bs)this.f.push(q)
p=q.Q
if(p==null){p=new D.aW()
p.d=0
q.Q=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}u=new D.aY()
u.b=!0
this.ae(u)},
fE:function(a,b){var u,t,s
for(u=b.gV(b),t=this.gcP();u.C();){s=u.gM(u)
C.b.E(this.e,s)
s.gn().E(0,t)}u=new D.aZ()
u.b=!0
this.ae(u)},
ey:function(a){var u=C.b.ar(this.f,a)
return u},
$ai:function(){return[D.a8]},
$aaE:function(){return[D.a8]}}
D.bs.prototype={
ae:function(a){var u=this.Q
if(u!=null)u.B(a)},
el:function(){return this.ae(null)},
gaq:function(){return 4},
$ia8:1}
D.hy.prototype={$ia8:1}
V.V.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.V))return!1
u=b.a
t=$.w().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}}
V.a_.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a_))return!1
u=b.a
t=$.w().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.A(u.a,3,0)+", "+V.A(u.b,3,0)+", "+V.A(u.c,3,0)+", "+V.A(u.d,3,0)+"]"}}
V.f8.prototype={}
V.cZ.prototype={
a5:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.F])
return t},
p:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.cZ))return!1
u=b.a
t=$.w()
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
if(typeof u!=="number")return u.D()
if(typeof r!=="number")return H.m(r)
if(!(Math.abs(u-r)<s))return!1
u=b.x
t=q.x
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.m(t)
if(!(Math.abs(u-t)<s))return!1
u=b.y
t=q.y
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.m(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){var u,t,s,r,q=this,p=[P.F],o=V.bK(H.c([q.a,q.d,q.r],p),3,0),n=V.bK(H.c([q.b,q.e,q.x],p),3,0),m=V.bK(H.c([q.c,q.f,q.y],p),3,0)
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
V.ai.prototype={
a5:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.F])
return t},
hz:function(b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.a,c=e.f,b=e.b,a=e.e,a0=d*c-b*a,a1=e.r,a2=e.c,a3=d*a1-a2*a,a4=e.x,a5=e.d,a6=d*a4-a5*a,a7=b*a1-a2*c,a8=b*a4-a5*c,a9=a2*a4-a5*a1,b0=e.y,b1=e.cy
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
if(Math.abs(i-0)<$.w().a)return V.aI()
h=1/i
g=-a
f=-t
return V.at((c*j-a1*k+a4*l)*h,(-b*j+a2*k-a5*l)*h,(b1*a9-r*a8+o*a7)*h,(-u*a9+q*a8-n*a7)*h,(g*j+a1*m-a4*p)*h,(d*j-a2*m+a5*p)*h,(f*a9+r*a6-o*a3)*h,(b0*a9-q*a6+n*a3)*h,(a*k-c*m+a4*s)*h,(-d*k+b*m-a5*s)*h,(t*a8-b1*a6+o*a0)*h,(-b0*a8+u*a6-n*a0)*h,(g*l+c*p-a1*s)*h,(d*l-b*p+a2*s)*h,(f*a7+b1*a3-r*a0)*h,(b0*a7-u*a3+q*a0)*h)},
m:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=a5.a,a7=b3.a,a8=a5.b,a9=b3.e,b0=a5.c,b1=b3.y
if(typeof b1!=="number")return H.m(b1)
u=a5.d
t=b3.cx
s=b3.b
r=b3.f
q=b3.z
if(typeof q!=="number")return H.m(q)
p=b3.cy
o=b3.c
n=b3.r
m=b3.Q
if(typeof m!=="number")return H.m(m)
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
return V.at(a6*a7+a8*a9+b0*b1+u*t,a6*s+a8*r+b0*q+u*p,a6*o+a8*n+b0*m+u*l,a6*k+a8*j+b0*i+u*h,g*a7+f*a9+e*b1+d*t,g*s+f*r+e*q+d*p,g*o+f*n+e*m+d*l,g*k+f*j+e*i+d*h,c*a7+b*a9+a*b1+a0*t,c*s+b*r+a*q+a0*p,c*o+b*n+a*m+a0*l,c*k+b*j+a*i+a0*h,a1*a7+a2*a9+a3*b1+a4*t,a1*s+a2*r+a3*q+a4*p,a1*o+a2*n+a3*m+a4*l,a1*k+a2*j+a3*i+a4*h)},
ci:function(a){var u,t,s,r=this,q=a.a,p=a.b,o=a.c
if(typeof o!=="number")return H.m(o)
u=r.y
if(typeof u!=="number")return u.m()
t=r.z
if(typeof t!=="number")return t.m()
s=r.Q
if(typeof s!=="number")return s.m()
return new V.S(r.a*q+r.b*p+r.c*o+r.d,r.e*q+r.f*p+r.r*o+r.x,u*q+t*p+s*o+r.ch)},
p:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.ai))return!1
u=b.a
t=$.w()
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
if(typeof u!=="number")return u.D()
if(typeof r!=="number")return H.m(r)
if(!(Math.abs(u-r)<s))return!1
u=b.z
t=q.z
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.m(t)
if(!(Math.abs(u-t)<s))return!1
u=b.Q
t=q.Q
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.m(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.ch-q.ch)<s))return!1
if(!(Math.abs(b.cx-q.cx)<s))return!1
if(!(Math.abs(b.cy-q.cy)<s))return!1
if(!(Math.abs(b.db-q.db)<s))return!1
if(!(Math.abs(b.dx-q.dx)<s))return!1
return!0},
h:function(a){return this.O()},
G:function(a){var u,t,s,r,q,p=this,o=[P.F],n=V.bK(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.bK(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.bK(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.bK(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
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
O:function(){return this.G("")}}
V.a4.prototype={
D:function(a,b){return new V.a4(this.a-b.a,this.b-b.b)},
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a4))return!1
u=b.a
t=$.w().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
h:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+"]"}}
V.S.prototype={
w:function(a,b){var u=this.c,t=b.c
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.m(t)
return new V.S(this.a+b.a,this.b+b.b,u+t)},
D:function(a,b){var u=this.c,t=b.c
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.m(t)
return new V.S(this.a-b.a,this.b-b.b,u-t)},
p:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.S))return!1
u=b.a
t=$.w()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
u=b.c
r=q.c
t.toString
if(typeof u!=="number")return u.D()
if(typeof r!=="number")return H.m(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
h:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}}
V.av.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.av))return!1
u=b.a
t=$.w().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.A(u.a,3,0)+", "+V.A(u.b,3,0)+", "+V.A(u.c,3,0)+", "+V.A(u.d,3,0)+"]"}}
V.d8.prototype={
gay:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.d8))return!1
u=b.a
t=$.w().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.A(u.a,3,0)+", "+V.A(u.b,3,0)+", "+V.A(u.c,3,0)+", "+V.A(u.d,3,0)+"]"}}
V.J.prototype={
b1:function(a){return Math.sqrt(this.F(this))},
F:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.m(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.m(t)
return s*r+u*t},
m:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.m()
u=this.b
if(typeof u!=="number")return u.m()
return new V.J(t*b,u*b)},
A:function(a,b){var u,t
if(Math.abs(b-0)<$.w().a){u=$.l3
return u==null?$.l3=new V.J(0,0):u}u=this.a
if(typeof u!=="number")return u.A()
t=this.b
if(typeof t!=="number")return t.A()
return new V.J(u/b,t/b)},
p:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.J))return!1
u=b.a
t=this.a
s=$.w()
s.toString
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.m(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.m(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+"]"}}
V.C.prototype={
b1:function(a){return Math.sqrt(this.F(this))},
F:function(a){var u=this.c,t=a.c
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.m(t)
return this.a*a.a+this.b*a.b+u*t},
c8:function(a,b){var u=this.a,t=this.b,s=this.c,r=a.c
if(typeof r!=="number")return r.D()
if(typeof s!=="number")return H.m(s)
return new V.C(u+b*(a.a-u),t+b*(a.b-t),s+b*(r-s))},
aY:function(a){var u,t,s,r,q=this.b,p=a.c
if(typeof p!=="number")return H.m(p)
u=this.c
t=a.b
if(typeof u!=="number")return u.m()
s=a.a
r=this.a
return new V.C(q*p-u*t,u*s-r*p,r*t-q*s)},
w:function(a,b){var u=b.a,t=b.b,s=this.c,r=b.c
if(typeof s!=="number")return s.w()
if(typeof r!=="number")return H.m(r)
return new V.C(this.a+u,this.b+t,s+r)},
S:function(a){var u=this.c
if(typeof u!=="number")return u.S()
return new V.C(-this.a,-this.b,-u)},
m:function(a,b){var u=this.c
if(typeof u!=="number")return u.m()
return new V.C(this.a*b,this.b*b,u*b)},
A:function(a,b){var u
if(Math.abs(b-0)<$.w().a)return V.cd()
u=this.c
if(typeof u!=="number")return u.A()
return new V.C(this.a/b,this.b/b,u/b)},
dH:function(){var u,t=$.w(),s=t.a
if(!(Math.abs(0-this.a)<s))return!1
if(!(Math.abs(0-this.b)<s))return!1
u=this.c
t.toString
if(typeof u!=="number")return H.m(u)
if(!(Math.abs(0-u)<s))return!1
return!0},
p:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.C))return!1
u=b.a
t=$.w()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
u=b.c
r=q.c
t.toString
if(typeof u!=="number")return u.D()
if(typeof r!=="number")return H.m(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
h:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}}
V.bB.prototype={
b1:function(a){var u=this,t=u.a,s=u.b,r=u.c,q=u.d
return Math.sqrt(t*t+s*s+r*r+q*q)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bB))return!1
u=b.a
t=$.w().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.A(u.a,3,0)+", "+V.A(u.b,3,0)+", "+V.A(u.c,3,0)+", "+V.A(u.d,3,0)+"]"}}
U.eO.prototype={
bA:function(a){var u=V.jJ(a,this.c,this.b)
return u},
gn:function(){var u=this.y
return u==null?this.y=D.B():u},
N:function(a){var u=this.y
if(u!=null)u.B(a)},
se6:function(a,b){},
sdJ:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.w().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bA(u)}s=new D.n("maximumLocation",s,t.b)
s.b=!0
t.N(s)}},
sdL:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.w().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bA(u)}s=new D.n("minimumLocation",s,t.c)
s.b=!0
t.N(s)}},
sa7:function(a,b){var u,t=this
b=t.bA(b)
u=t.d
if(!(Math.abs(u-b)<$.w().a)){t.d=b
u=new D.n("location",u,b)
u.b=!0
t.N(u)}},
sdK:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.w().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.n("maximumVelocity",r,a)
r.b=!0
s.N(r)}},
sZ:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.w().a)){u.f=a
t=new D.n("velocity",t,a)
t.b=!0
u.N(t)}},
sd9:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.w().a)){this.x=a
u=new D.n("dampening",u,a)
u.b=!0
this.N(u)}},
a9:function(a,b){var u,t,s,r=this,q=r.f,p=$.w().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa7(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.w().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sZ(u)}}}
U.cD.prototype={
gn:function(){var u=this.b
return u==null?this.b=D.B():u},
aA:function(a,b,c){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cD))return!1
return J.y(this.a,b.a)},
h:function(a){return"Constant: "+this.a.G("          ")}}
U.bR.prototype={
gn:function(){var u=this.e
return u==null?this.e=D.B():u},
N:function(a){var u=this.e
if(u!=null)u.B(a)},
aw:function(){return this.N(null)},
en:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gbd(),s=[{func:1,ret:-1,args:[D.T]}],r=0;r<b.length;b.length===u||(0,H.r)(b),++r){q=b[r]
if(q!=null){p=q.gn()
o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.aY()
u.b=!0
this.N(u)},
fC:function(a,b){var u,t
for(u=b.gV(b),t=this.gbd();u.C();)u.gM(u).gn().E(0,t)
u=new D.aZ()
u.b=!0
this.N(u)},
aA:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.R()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.a2(r,r.length),u=null;r.C();){q=r.d
if(q!=null){t=q.aA(0,b,c)
if(t!=null)u=u==null?t:t.m(0,u)}}s.f=u==null?V.aI():u
r=s.e
if(r!=null)r.ad(0)}return s.f},
p:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bR))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.b(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.b(r,t)
if(!J.y(s,r[t]))return!1}return!0},
h:function(a){return"Group"},
$ai:function(){return[U.a9]},
$aaE:function(){return[U.a9]},
$ia9:1}
U.a9.prototype={}
U.da.prototype={
gn:function(){var u=this.y
return u==null?this.y=D.B():u},
N:function(a){var u=this.y
if(u!=null)u.B(a)},
se7:function(a){var u
a=V.jJ(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.w().a)){this.a=a
u=new D.n("yaw",u,a)
u.b=!0
this.N(u)}},
sdV:function(a,b){var u
b=V.jJ(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.w().a)){this.b=b
u=new D.n("pitch",u,b)
u.b=!0
this.N(u)}},
se_:function(a){var u
a=V.jJ(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.w().a)){this.c=a
u=new D.n("roll",u,a)
u.b=!0
this.N(u)}},
aA:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(r<q){s.r=q
r=s.y
if(r!=null)++r.d
s.se7(s.a+s.d*b.y)
s.sdV(0,s.b+s.e*b.y)
s.se_(s.c+s.f*b.y)
r=s.c
u=Math.cos(r)
t=Math.sin(r)
s.x=V.at(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1).m(0,V.kK(s.b)).m(0,V.kJ(s.a))
r=s.y
if(r!=null)r.ad(0)}return s.x},
p:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.da))return!1
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
return"Rotater: ["+V.A(u.a,3,0)+", "+V.A(u.b,3,0)+", "+V.A(u.c,3,0)+"], ["+V.A(u.d,3,0)+", "+V.A(u.e,3,0)+", "+V.A(u.f,3,0)+"]"}}
U.du.prototype={
gn:function(){var u=this.fx
return u==null?this.fx=D.B():u},
N:function(a){var u=this.fx
if(u!=null)u.B(a)},
aw:function(){return this.N(null)},
bQ:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
u=a.c
t=u.b
u=t==null?u.b=D.B():t
u.l(0,s.geL())
u=s.a.c
t=u.d
u=t==null?u.d=D.B():t
u.l(0,s.geN())
u=s.a.c
t=u.c
u=t==null?u.c=D.B():t
u.l(0,s.geP())
u=s.a.d
t=u.f
u=t==null?u.f=D.B():t
u.l(0,s.geH())
u=s.a.d
t=u.d
u=t==null?u.d=D.B():t
u.l(0,s.geJ())
u=s.a.e
t=u.b
u=t==null?u.b=D.B():t
u.l(0,s.gh6())
u=s.a.e
t=u.d
u=t==null?u.d=D.B():t
u.l(0,s.gh4())
u=s.a.e
t=u.c
u=t==null?u.c=D.B():t
u.l(0,s.gh2())
return!0},
av:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.S()
u=-u}if(this.r){if(typeof t!=="number")return t.S()
t=-t}return new V.J(u,t)},
eM:function(a){var u=this
H.h(a,"$ib3")
if(!J.y(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
eO:function(a){var u,t,s,r,q,p,o,n=this
H.h(a,"$ib3")
if(!n.cx)return
if(n.ch){u=a.d.D(0,a.y)
u=new V.J(u.a,u.b)
u=u.F(u)
t=n.Q
if(typeof t!=="number")return H.m(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.D(0,a.y)
u=n.av(new V.J(t.a,t.b).m(0,2).A(0,u.gay()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.S()
s=n.y
if(typeof s!=="number")return H.m(s)
t.sZ(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.S()
t=n.x
if(typeof t!=="number")return H.m(t)
s.sZ(-u*10*t)}else{u=a.c
t=a.d
s=t.D(0,a.y)
r=n.av(new V.J(s.a,s.b).m(0,2).A(0,u.gay()))
s=n.c
q=r.a
if(typeof q!=="number")return q.S()
p=n.y
if(typeof p!=="number")return H.m(p)
o=n.cy
if(typeof o!=="number")return H.m(o)
s.sa7(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.S()
q=n.x
if(typeof q!=="number")return H.m(q)
s=n.db
if(typeof s!=="number")return H.m(s)
o.sa7(0,-p*q+s)
n.b.sZ(0)
n.c.sZ(0)
t=t.D(0,a.z)
n.dx=n.av(new V.J(t.a,t.b).m(0,2).A(0,u.gay()))}n.aw()},
eQ:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.F(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.S()
s=r.y
if(typeof s!=="number")return H.m(s)
u.sZ(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.S()
u=r.x
if(typeof u!=="number")return H.m(u)
s.sZ(-t*10*u)
r.aw()}},
eI:function(a){var u=this
if(H.h(a,"$icW").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
eK:function(a){var u,t,s,r,q,p,o,n=this
H.h(a,"$ib3")
if(!J.y(n.d,a.x.b))return
u=a.c
t=a.d
s=t.D(0,a.y)
r=n.av(new V.J(s.a,s.b).m(0,2).A(0,u.gay()))
s=n.c
q=r.a
if(typeof q!=="number")return q.S()
p=n.y
if(typeof p!=="number")return H.m(p)
o=n.cy
if(typeof o!=="number")return H.m(o)
s.sa7(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.S()
q=n.x
if(typeof q!=="number")return H.m(q)
s=n.db
if(typeof s!=="number")return H.m(s)
o.sa7(0,-p*q+s)
n.b.sZ(0)
n.c.sZ(0)
t=t.D(0,a.z)
n.dx=n.av(new V.J(t.a,t.b).m(0,2).A(0,u.gay()))
n.aw()},
h7:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
h5:function(a){var u,t,s,r,q,p,o,n=this
H.h(a,"$idn")
if(!n.cx)return
if(n.ch){u=a.d.D(0,a.y)
u=new V.J(u.a,u.b)
u=u.F(u)
t=n.Q
if(typeof t!=="number")return H.m(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.D(0,a.y)
u=n.av(new V.J(t.a,t.b).m(0,2).A(0,u.gay()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.S()
s=n.y
if(typeof s!=="number")return H.m(s)
t.sZ(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.S()
t=n.x
if(typeof t!=="number")return H.m(t)
s.sZ(-u*10*t)}else{u=a.c
t=a.d
s=t.D(0,a.y)
r=n.av(new V.J(s.a,s.b).m(0,2).A(0,u.gay()))
s=n.c
q=r.a
if(typeof q!=="number")return q.S()
p=n.y
if(typeof p!=="number")return H.m(p)
o=n.cy
if(typeof o!=="number")return H.m(o)
s.sa7(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.S()
q=n.x
if(typeof q!=="number")return H.m(q)
s=n.db
if(typeof s!=="number")return H.m(s)
o.sa7(0,-p*q+s)
n.b.sZ(0)
n.c.sZ(0)
t=t.D(0,a.z)
n.dx=n.av(new V.J(t.a,t.b).m(0,2).A(0,u.gay()))}n.aw()},
h3:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.F(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.S()
s=r.y
if(typeof s!=="number")return H.m(s)
u.sZ(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.S()
u=r.x
if(typeof u!=="number")return H.m(u)
s.sZ(-t*10*u)
r.aw()}},
aA:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.R()
if(s<r){t.dy=r
u=b.y
t.c.a9(0,u)
t.b.a9(0,u)
t.fr=V.kJ(t.b.d).m(0,V.kK(t.c.d))}return t.fr},
$ia9:1}
U.dv.prototype={
gn:function(){var u=this.r
return u==null?this.r=D.B():u},
N:function(a){var u=this.r
if(u!=null)u.B(a)},
bQ:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.B():t
t=r.geR()
u.l(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.B():s).l(0,t)
return!0},
eS:function(a){var u,t,s,r,q=this
if(!J.y(q.b,q.a.b.c))return
H.h(a,"$ic_")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.m()
r=u+t*s
if(u!==r){q.d=r
u=new D.n("zoom",u,r)
u.b=!0
q.N(u)}},
aA:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.at(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$ia9:1}
M.cC.prototype={
gn:function(){var u=this.r
return u==null?this.r=D.B():u},
T:function(a){var u=this.r
if(u!=null)u.B(a)},
aB:function(){return this.T(null)},
fG:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gW(),s=[{func:1,ret:-1,args:[D.T]}],r=0;r<b.length;b.length===u||(0,H.r)(b),++r){q=b[r]
if(q!=null){p=q.gn()
o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.aY()
u.b=!0
this.T(u)},
fI:function(a,b){var u,t
for(u=b.gV(b),t=this.gW();u.C();)u.gM(u).gn().E(0,t)
u=new D.aZ()
u.b=!0
this.T(u)},
a0:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.a2(u,u.length);u.C();){t=u.d
if(t!=null)t.a0(a)}s.f=!1},
$ai:function(){return[M.ae]},
$aaE:function(){return[M.ae]},
$iae:1}
M.cE.prototype={
gn:function(){var u=this.r
return u==null?this.r=D.B():u},
T:function(a){var u=this.r
if(u!=null)u.B(a)},
aB:function(){return this.T(null)},
saH:function(a,b){var u,t,s=this
if(b==null)b=X.jV(!0,null)
u=s.c
if(u!==b){if(u!=null)u.gn().E(0,s.gW())
t=s.c
s.c=b
b.gn().l(0,s.gW())
u=new D.n("target",t,s.c)
u.b=!0
s.T(u)}},
sam:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gn().E(0,t.gW())
u=t.d
t.d=a
if(a!=null)a.gn().l(0,t.gW())
s=new D.n("technique",u,t.d)
s.b=!0
t.T(s)}},
a0:function(a){var u,t,s=this
a.cc(s.d)
s.c.X(a)
u=s.b
u.toString
a.cy.br(V.aI())
t=V.aI()
u.a
a.db.br(t)
u=s.d
if(u!=null)u.a9(0,a)
s.e.a9(0,a)
s.e.a0(a)
s.b.toString
a.cy.b6()
a.db.b6()
s.c.az(a)
a.cb()},
$iae:1}
M.cJ.prototype={
T:function(a){var u=this.y
if(u!=null)u.B(a)},
aB:function(){return this.T(null)},
f1:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gW(),s=[{func:1,ret:-1,args:[D.T]}],r=0;r<b.length;b.length===u||(0,H.r)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.aW()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.aY()
u.b=!0
this.T(u)},
f3:function(a,b){var u,t
for(u=b.gV(b),t=this.gW();u.C();)u.gM(u).gn().E(0,t)
u=new D.aZ()
u.b=!0
this.T(u)},
sbW:function(a){var u,t,s=this
if(a==null)a=X.kN()
u=s.b
if(u!==a){if(u!=null)u.gn().E(0,s.gW())
t=s.b
s.b=a
a.gn().l(0,s.gW())
u=new D.n("camera",t,s.b)
u.b=!0
s.T(u)}},
saH:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gn().E(0,t.gW())
u=t.c
t.c=b
b.gn().l(0,t.gW())
s=new D.n("target",u,t.c)
s.b=!0
t.T(s)}},
sam:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gn().E(0,t.gW())
u=t.d
t.d=a
if(a!=null)a.gn().l(0,t.gW())
s=new D.n("technique",u,t.d)
s.b=!0
t.T(s)}},
gn:function(){var u=this.y
return u==null?this.y=D.B():u},
a0:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
a.cc(c.d)
c.c.X(a)
u=c.b
t=a.c
s=a.d
r=u.c
q=u.d
p=u.e
o=p-q
n=1/Math.tan(r*0.5)
m=V.at(-n/(t/s),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0)
u.a
a.cy.br(m)
t=$.kO
if(t==null){t=V.mj()
s=$.l5
if(s==null)s=$.l5=new V.C(0,1,0)
r=$.l4
if(r==null)r=$.l4=new V.C(0,0,-1)
l=r.A(0,Math.sqrt(r.F(r)))
s=s.aY(l)
k=s.A(0,Math.sqrt(s.F(s)))
j=l.aY(k)
i=new V.C(t.a,t.b,t.c)
h=k.S(0).F(i)
g=j.S(0).F(i)
f=l.S(0).F(i)
t=V.at(k.a,j.a,l.a,h,k.b,j.b,l.b,g,k.c,j.c,l.c,f,0,0,0,1)
$.kO=t
e=t}else e=t
t=u.b
if(t!=null){d=t.aA(0,a,u)
if(d!=null)e=d.m(0,e)}a.db.br(e)
u=c.d
if(u!=null)u.a9(0,a)
for(u=c.e.a,u=new J.a2(u,u.length);u.C();)u.d.a9(0,a)
for(u=c.e.a,u=new J.a2(u,u.length);u.C();)u.d.a0(a)
c.b.toString
a.cy.b6()
a.db.b6()
c.c.az(a)
a.cb()},
$iae:1}
M.cM.prototype={
gn:function(){var u=this.b
return u==null?this.b=D.B():u},
T:function(a){var u=this.b
if(u!=null)u.B(a)},
aB:function(){return this.T(null)},
a0:function(a){var u=this.e
if(u!=null)u.a0(a)
u=this.r
if(u!=null)u.a0(a)},
$iae:1}
M.ae.prototype={}
A.cz.prototype={}
A.ex.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
ho:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
bk:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.W.prototype={
gat:function(a){var u=this.a?1:0,t=this.b?2:0
return u|t|0},
h:function(a){var u=this.a?1:0,t=this.b?2:0
return""+(u|t|0)},
p:function(a,b){if(b==null)return!1
if(!(b instanceof A.W))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.f_.prototype={}
A.fj.prototype={
ac:function(a,b){if(b!=null&&b.d)a.cm(b)}}
A.fk.prototype={
aK:function(a,b,c,d){var u,t,s,r,q=c.length
if(0>=q)return H.b(c,0)
u=Math.abs(c[0]-0)<$.w().a
if(u){if(0>=d.length)return H.b(d,0)
t=d[0]
d=C.b.cp(d,1)
c=C.b.cp(c,1);--q}else t=0
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
A.fH.prototype={
ef:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.M("")
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
A.nr(c0,u)
A.nt(c0,u)
A.ns(c0,u)
A.nv(c0,u)
A.nw(c0,u)
A.nu(c0,u)
A.nx(c0,u)
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
b5.bm(0,s.charCodeAt(0)==0?s:s,A.nq(b5.z))
b5.Q=b5.x.i(0,"posAttr")
b5.cx=b5.x.i(0,"normAttr")
b5.ch=b5.x.i(0,"binmAttr")
b5.cy=b5.x.i(0,"txt2DAttr")
b5.db=b5.x.i(0,"txtCubeAttr")
b5.dx=b5.x.i(0,"bendAttr")
if(c0.dx)b5.id=H.h(b5.y.K(0,"invViewMat"),"$iZ")
if(t)b5.dy=H.h(b5.y.K(0,"objMat"),"$iZ")
if(r)b5.fr=H.h(b5.y.K(0,"viewObjMat"),"$iZ")
b5.fy=H.h(b5.y.K(0,"projViewObjMat"),"$iZ")
if(c0.ry)b5.k1=H.h(b5.y.K(0,"txt2DMat"),"$iby")
if(c0.x1)b5.k2=H.h(b5.y.K(0,"txtCubeMat"),"$iZ")
if(c0.x2)b5.k3=H.h(b5.y.K(0,"colorMat"),"$iZ")
b5.r1=H.c([],[A.Z])
t=c0.y2
if(t>0){b5.k4=b5.y.K(0,"bendMatCount")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.i(0,q)
if(m==null)H.p(P.q(b7+q+b8))
s.push(H.h(m,"$iZ"))}}t=c0.a
if(t.a)b5.r2=H.h(b5.y.K(0,"emissionClr"),"$iI")
if(t.b)b5.rx=H.h(b5.y.K(0,"emissionTxt"),"$iQ")
t=c0.b
if(t.a)b5.x1=H.h(b5.y.K(0,"ambientClr"),"$iI")
if(t.b)b5.x2=H.h(b5.y.K(0,"ambientTxt"),"$iQ")
t=c0.c
if(t.a)b5.y2=H.h(b5.y.K(0,"diffuseClr"),"$iI")
if(t.b)b5.aF=H.h(b5.y.K(0,"diffuseTxt"),"$iQ")
t=c0.d
if(t.a)b5.di=H.h(b5.y.K(0,"invDiffuseClr"),"$iI")
if(t.b)b5.dj=H.h(b5.y.K(0,"invDiffuseTxt"),"$iQ")
t=c0.e
s=t.a
if(s||t.b||!1){b5.dm=H.h(b5.y.K(0,"shininess"),"$iP")
if(s)b5.dk=H.h(b5.y.K(0,"specularClr"),"$iI")
if(t.b)b5.dl=H.h(b5.y.K(0,"specularTxt"),"$iQ")}if(c0.f.b)b5.dn=H.h(b5.y.K(0,"bumpTxt"),"$iQ")
if(c0.cy){b5.dq=H.h(b5.y.K(0,"envSampler"),"$ibz")
t=c0.r
if(t.a)b5.dr=H.h(b5.y.K(0,"reflectClr"),"$iI")
if(t.b)b5.ds=H.h(b5.y.K(0,"reflectTxt"),"$iQ")
t=c0.x
s=t.a
if(s||t.b||!1){b5.dt=H.h(b5.y.K(0,"refraction"),"$iP")
if(s)b5.du=H.h(b5.y.K(0,"refractClr"),"$iI")
if(t.b)b5.dv=H.h(b5.y.K(0,"refractTxt"),"$iQ")}}t=c0.y
if(t.a)b5.dw=H.h(b5.y.K(0,"alpha"),"$iP")
if(t.b)b5.dz=H.h(b5.y.K(0,"alphaTxt"),"$iQ")
t=P.v
s=[t,A.bb]
b5.c_=new H.K(s)
b5.c0=new H.K([t,[P.o,A.ca]])
b5.c1=new H.K(s)
b5.c2=new H.K([t,[P.o,A.cb]])
b5.c3=new H.K(s)
b5.c4=new H.K([t,[P.o,A.cc]])
if(c0.id){for(t=c0.z,s=t.length,r=[A.ca],l=0;l<t.length;t.length===s||(0,H.r)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.e(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.ao()
p=(j&1)!==0
if(p){o=b5.y
g=i+"s["+n+"].objUp"
m=o.i(0,g)
if(m==null)H.p(P.q(b7+g+b8))
H.h(m,"$iI")
o=b5.y
g=i+"s["+n+"].objRight"
f=o.i(0,g)
if(f==null)H.p(P.q(b7+g+b8))
H.h(f,"$iI")
o=b5.y
g=i+"s["+n+"].objDir"
e=o.i(0,g)
if(e==null)H.p(P.q(b7+g+b8))
H.h(e,"$iI")
d=e
c=f
b=m}else{d=b6
c=d
b=c}o=b5.y
g=i+"s["+n+"].viewDir"
m=o.i(0,g)
if(m==null)H.p(P.q(b7+g+b8))
H.h(m,"$iI")
o=b5.y
g=i+"s["+n+"].color"
f=o.i(0,g)
if(f==null)H.p(P.q(b7+g+b8))
H.h(f,"$iI")
if(p){p=b5.y
o=i+"sTexture2D"+n
e=p.i(0,o)
if(e==null)H.p(P.q(b7+o+b8))
H.h(e,"$iQ")
a=e}else a=b6
h.push(new A.ca(b,c,d,m,f,a))}b5.c0.k(0,j,h)
q=b5.c_
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.p(P.q(b7+o+b8))
q.k(0,j,m)}for(t=c0.Q,s=t.length,r=[A.cb],l=0;l<t.length;t.length===s||(0,H.r)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.e(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.i(0,o)
if(m==null)H.p(P.q(b7+o+b8))
H.h(m,"$iI")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.i(0,o)
if(f==null)H.p(P.q(b7+o+b8))
H.h(f,"$iI")
p=b5.y
o=i+"s["+n+"].color"
e=p.i(0,o)
if(e==null)H.p(P.q(b7+o+b8))
H.h(e,"$iI")
if(typeof j!=="number")return j.ao()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
a0=p.i(0,o)
if(a0==null)H.p(P.q(b7+o+b8))
H.h(a0,"$iby")
a1=a0}else a1=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
a0=p.i(0,o)
if(a0==null)H.p(P.q(b7+o+b8))
H.h(a0,"$ibz")
a=a0}else a=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
a0=p.i(0,o)
if(a0==null)H.p(P.q(b7+o+b8))
H.h(a0,"$ibz")
p=b5.y
o=i+"s["+n+"].shadowAdj"
a2=p.i(0,o)
if(a2==null)H.p(P.q(b7+o+b8))
H.h(a2,"$ibc")
a3=a0
a4=a2}else{a3=b6
a4=a3}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
a0=p.i(0,o)
if(a0==null)H.p(P.q(b7+o+b8))
H.h(a0,"$iP")
p=b5.y
o=i+"s["+n+"].att1"
a2=p.i(0,o)
if(a2==null)H.p(P.q(b7+o+b8))
H.h(a2,"$iP")
p=b5.y
o=i+"s["+n+"].att2"
a5=p.i(0,o)
if(a5==null)H.p(P.q(b7+o+b8))
H.h(a5,"$iP")
a6=a5
a7=a2
a8=a0}else{a6=b6
a7=a6
a8=a7}h.push(new A.cb(m,f,a1,e,a,a3,a4,a8,a7,a6))}b5.c2.k(0,j,h)
q=b5.c1
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.p(P.q(b7+o+b8))
q.k(0,j,m)}for(t=c0.ch,s=t.length,r=[A.cc],l=0;l<t.length;t.length===s||(0,H.r)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.e(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.i(0,o)
if(m==null)H.p(P.q(b7+o+b8))
H.h(m,"$iI")
p=b5.y
o=i+"s["+n+"].objDir"
f=p.i(0,o)
if(f==null)H.p(P.q(b7+o+b8))
H.h(f,"$iI")
p=b5.y
o=i+"s["+n+"].viewPnt"
e=p.i(0,o)
if(e==null)H.p(P.q(b7+o+b8))
H.h(e,"$iI")
p=b5.y
o=i+"s["+n+"].color"
a0=p.i(0,o)
if(a0==null)H.p(P.q(b7+o+b8))
H.h(a0,"$iI")
if(typeof j!=="number")return j.ao()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
a2=p.i(0,o)
if(a2==null)H.p(P.q(b7+o+b8))
H.h(a2,"$iI")
p=b5.y
o=i+"s["+n+"].objRight"
a5=p.i(0,o)
if(a5==null)H.p(P.q(b7+o+b8))
H.h(a5,"$iI")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.i(0,o)
if(a9==null)H.p(P.q(b7+o+b8))
H.h(a9,"$iP")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.i(0,o)
if(b0==null)H.p(P.q(b7+o+b8))
H.h(b0,"$iP")
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
if(a2==null)H.p(P.q(b7+g+b8))
H.h(a2,"$ibc")
a4=a2}else a4=b6
if((j&8)!==0){o=b5.y
g=i+"s["+n+"].cutoff"
a2=o.i(0,g)
if(a2==null)H.p(P.q(b7+g+b8))
H.h(a2,"$iP")
o=b5.y
g=i+"s["+n+"].coneAngle"
a5=o.i(0,g)
if(a5==null)H.p(P.q(b7+g+b8))
H.h(a5,"$iP")
b3=a5
b4=a2}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
g=i+"s["+n+"].att0"
a2=o.i(0,g)
if(a2==null)H.p(P.q(b7+g+b8))
H.h(a2,"$iP")
o=b5.y
g=i+"s["+n+"].att1"
a5=o.i(0,g)
if(a5==null)H.p(P.q(b7+g+b8))
H.h(a5,"$iP")
o=b5.y
g=i+"s["+n+"].att2"
a9=o.i(0,g)
if(a9==null)H.p(P.q(b7+g+b8))
H.h(a9,"$iP")
a6=a9
a7=a5
a8=a2}else{a6=b6
a7=a6
a8=a7}if((j&1)!==0){o=b5.y
g=i+"sTexture2D"+n
a2=o.i(0,g)
if(a2==null)H.p(P.q(b7+g+b8))
H.h(a2,"$iQ")
a=a2}else a=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
a2=p.i(0,o)
if(a2==null)H.p(P.q(b7+o+b8))
H.h(a2,"$iQ")
a3=a2}else a3=b6
h.push(new A.cc(m,f,e,a0,b,c,b2,b1,a4,b4,b3,a8,a7,a6,a,a3))}b5.c4.k(0,j,h)
q=b5.c3
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.p(P.q(b7+o+b8))
q.k(0,j,m)}}},
ac:function(a,b){if(b!=null&&b.d)a.cm(b)},
fX:function(a,b){}}
A.cG.prototype={
h:function(a){return"dirLight"+H.e(this.a)}}
A.d5.prototype={
h:function(a){return"pointLight"+H.e(this.a)}}
A.dd.prototype={
h:function(a){return"spotLight"+H.e(this.a)}}
A.fK.prototype={
h:function(a){return this.aF}}
A.ca.prototype={}
A.cb.prototype={}
A.cc.prototype={}
A.db.prototype={
ba:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
bm:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.cI(b,35633)
r.f=r.cI(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!u.getProgramParameter(r.r,35714)){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.p(P.q("Failed to link shader: "+H.e(s)))}r.fZ()
r.h0()},
X:function(a){a.a.useProgram(this.r)
this.x.ho()},
cI:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.d(P.q("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
fZ:function(){var u,t,s,r=this,q=H.c([],[A.cz]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.m(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cz(p,t.name,s))}r.x=new A.ex(q)},
h0:function(){var u,t,s,r=this,q=H.c([],[A.dq]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.m(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.hl(t.type,t.size,t.name,s))}r.y=new A.i3(q)},
aL:function(a,b,c){var u=this.a
if(a===1)return new A.bb(u,b,c)
else return A.k4(u,this.r,b,a,c)},
ez:function(a,b,c){var u=this.a
if(a===1)return new A.Q(u,b,c)
else return A.k4(u,this.r,b,a,c)},
eA:function(a,b,c){var u=this.a
if(a===1)return new A.bz(u,b,c)
else return A.k4(u,this.r,b,a,c)},
bf:function(a,b){return new P.dF(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
hl:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aL(b,c,d)
case 5121:return u.aL(b,c,d)
case 5122:return u.aL(b,c,d)
case 5123:return u.aL(b,c,d)
case 5124:return u.aL(b,c,d)
case 5125:return u.aL(b,c,d)
case 5126:return new A.P(u.a,c,d)
case 35664:return new A.az(u.a,c,d)
case 35665:return new A.I(u.a,c,d)
case 35666:return new A.bc(u.a,c,d)
case 35667:return new A.i0(u.a,c,d)
case 35668:return new A.i1(u.a,c,d)
case 35669:return new A.i2(u.a,c,d)
case 35674:return new A.i4(u.a,c,d)
case 35675:return new A.by(u.a,c,d)
case 35676:return new A.Z(u.a,c,d)
case 35678:return u.ez(b,c,d)
case 35680:return u.eA(b,c,d)
case 35670:throw H.d(u.bf("BOOL",c))
case 35671:throw H.d(u.bf("BOOL_VEC2",c))
case 35672:throw H.d(u.bf("BOOL_VEC3",c))
case 35673:throw H.d(u.bf("BOOL_VEC4",c))
default:throw H.d(P.q("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.bn.prototype={
h:function(a){return this.b}}
A.hM.prototype={
ej:function(a,b,c){var u,t,s,r,q,p=this,o="Required uniform value, ",n=", was not defined or used in shader."
p.bm(0,"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n":"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n",A.mF(a,b))
p.z=p.x.i(0,"posAttr")
p.Q=H.h(p.y.K(0,"txtCount"),"$ibb")
p.ch=H.h(p.y.K(0,"backClr"),"$ibc")
p.cx=H.c([],[A.Q])
p.cy=H.c([],[A.Z])
u=[A.az]
p.db=H.c([],u)
p.dx=H.c([],u)
p.dy=H.c([],u)
p.fr=H.c([],u)
p.fx=H.c([],[A.bb])
for(t=0;t<a;++t){u=p.cx
s=p.y
r="txt"+t
q=s.i(0,r)
if(q==null)H.p(P.q(o+r+n))
u.push(H.h(q,"$iQ"))
u=p.cy
s=p.y
r="clrMat"+t
q=s.i(0,r)
if(q==null)H.p(P.q(o+r+n))
u.push(H.h(q,"$iZ"))
u=p.db
s=p.y
r="srcLoc"+t
q=s.i(0,r)
if(q==null)H.p(P.q(o+r+n))
u.push(H.h(q,"$iaz"))
u=p.dx
s=p.y
r="srcSize"+t
q=s.i(0,r)
if(q==null)H.p(P.q(o+r+n))
u.push(H.h(q,"$iaz"))
u=p.dy
s=p.y
r="destLoc"+t
q=s.i(0,r)
if(q==null)H.p(P.q(o+r+n))
u.push(H.h(q,"$iaz"))
u=p.fr
s=p.y
r="destSize"+t
q=s.i(0,r)
if(q==null)H.p(P.q(o+r+n))
u.push(H.h(q,"$iaz"))
u=p.fx
s=p.y
r="flip"+t
q=s.i(0,r)
if(q==null)H.p(P.q(o+r+n))
u.push(H.h(q,"$ibb"))}}}
A.dq.prototype={}
A.i3.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
K:function(a,b){var u=this.i(0,b)
if(u==null)throw H.d(P.q("Required uniform value, "+b+", was not defined or used in shader."))
return u},
h:function(a){return this.O()},
O:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.r)(u),++r)s+=u[r].h(0)+"\n"
return s}}
A.bb.prototype={
h:function(a){return"Uniform1i: "+H.e(this.c)}}
A.i0.prototype={
h:function(a){return"Uniform2i: "+H.e(this.c)}}
A.i1.prototype={
h:function(a){return"Uniform3i: "+H.e(this.c)}}
A.i2.prototype={
h:function(a){return"Uniform4i: "+H.e(this.c)}}
A.i_.prototype={
h:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.P.prototype={
h:function(a){return"Uniform1f: "+H.e(this.c)}}
A.az.prototype={
h:function(a){return"Uniform2f: "+H.e(this.c)}}
A.I.prototype={
h:function(a){return"Uniform3f: "+H.e(this.c)}}
A.bc.prototype={
eb:function(a){var u=a.a,t=a.b,s=a.c,r=a.d
return this.a.uniform4f(this.d,u,t,s,r)},
ea:function(a){return this.a.uniform4f(this.d,a.a,a.b,a.c,a.d)},
h:function(a){return"Uniform4f: "+H.e(this.c)}}
A.i4.prototype={
h:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.by.prototype={
aa:function(a){var u=new Float32Array(H.bF(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
h:function(a){return"UniformMat3: "+H.e(this.c)}}
A.Z.prototype={
aa:function(a){var u=new Float32Array(H.bF(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
h:function(a){return"UniformMat4: "+H.e(this.c)}}
A.Q.prototype={
cm:function(a){var u=a==null||!a.d,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
h:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.bz.prototype={
h:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.ja.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.c8(s.b,b).c8(s.d.c8(s.c,b),c)
a.sa7(0,new V.S(r.a,r.b,r.c))
a.se1(r.A(0,Math.sqrt(r.F(r))))
s=1-b
u=1-c
a.sd3(new V.av(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
t.f.$3(a,b,c)}}
F.jE.prototype={
$2:function(a,b){return 0}}
F.jF.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.m(s)
u=a.f
t=new V.C(u.a,u.b,u.c)
s=t.A(0,Math.sqrt(t.F(t))).m(0,this.b+s)
a.sa7(0,new V.S(s.a,s.b,s.c))}}
F.jo.prototype={
$2:function(a,b){return 0}}
F.jp.prototype={
$3:function(a,b,c){var u,t,s=b*2-1,r=c*2-1
a.sa7(0,new V.S(s,r,this.a.a.$2(b,c)))
u=new V.C(s,r,1)
a.se1(u.A(0,Math.sqrt(u.F(u))))
u=1-b
t=1-c
a.sd3(new V.av(b*c,2+u*c,4+b*t,6+u*t))}}
F.aX.prototype={
aZ:function(){var u=this
if(!u.gb_()){C.b.E(u.a.a.d.b,u)
u.a.a.a2()}u.bK()
u.bL()
u.fR()},
bO:function(a){this.a=a
a.d.b.push(this)},
bP:function(a){this.b=a
a.d.c.push(this)},
fY:function(a){this.c=a
a.d.d.push(this)},
bK:function(){var u=this.a
if(u!=null){C.b.E(u.d.b,this)
this.a=null}},
bL:function(){var u=this.b
if(u!=null){C.b.E(u.d.c,this)
this.b=null}},
fR:function(){var u=this.c
if(u!=null){C.b.E(u.d.d,this)
this.c=null}},
gb_:function(){return this.a==null||this.b==null||this.c==null},
ev:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cd()
if(q!=null)s=s.w(0,q)
if(u!=null)s=s.w(0,u)
if(t!=null)s=s.w(0,t)
if(s.dH())return
return s.A(0,Math.sqrt(s.F(s)))},
ex:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.D(0,q)
r=new V.C(r.a,r.b,r.c)
s=r.A(0,Math.sqrt(r.F(r)))
r=t.D(0,q)
r=new V.C(r.a,r.b,r.c)
r=s.aY(r.A(0,Math.sqrt(r.F(r))))
return r.A(0,Math.sqrt(r.F(r)))},
bV:function(){var u,t=this
if(t.d!=null)return!0
u=t.ev()
if(u==null){u=t.ex()
if(u==null)return!1}t.d=u
t.a.a.a2()
return!0},
eu:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.cd()
if(q!=null)s=s.w(0,q)
if(u!=null)s=s.w(0,u)
if(t!=null)s=s.w(0,t)
if(s.dH())return
return s.A(0,Math.sqrt(s.F(s)))},
ew:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.w().a){l=d.D(0,g)
l=new V.C(l.a,l.b,l.c)
q=l.A(0,Math.sqrt(l.F(l)))
if(s.a-t.a<0)q=q.S(0)}else{p=(l-u.b)/r
l=d.D(0,g)
k=l.c
if(typeof k!=="number")return k.m()
k=new V.S(l.a*p,l.b*p,k*p).w(0,g).D(0,j)
k=new V.C(k.a,k.b,k.c)
q=k.A(0,Math.sqrt(k.F(k)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.S(0)}l=n.d
if(l!=null){o=l.A(0,Math.sqrt(l.F(l)))
l=o.aY(q)
l=l.A(0,Math.sqrt(l.F(l))).aY(o)
q=l.A(0,Math.sqrt(l.F(l)))}return q},
bT:function(){var u,t=this
if(t.e!=null)return!0
u=t.eu()
if(u==null){u=t.ew()
if(u==null)return!1}t.e=u
t.a.a.a2()
return!0},
ghg:function(a){var u=this
if(J.y(u.a,u.b))return!0
if(J.y(u.b,u.c))return!0
if(J.y(u.c,u.a))return!0
return!1},
p:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.O()},
G:function(a){var u,t,s=this
if(s.gb_())return a+"disposed"
u=a+C.a.al(J.a6(s.a.e),0)+", "+C.a.al(J.a6(s.b.e),0)+", "+C.a.al(J.a6(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.h(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.h(0)+"}"):u+"-}"},
O:function(){return this.G("")}}
F.fb.prototype={}
F.hv.prototype={
b2:function(a,b,c){var u,t=b.a
t.a.a.u()
t=t.e
u=c.a
u.a.a.u()
if(t==u.e){t=b.b
t.a.a.u()
t=t.e
u=c.b
u.a.a.u()
if(t==u.e){t=b.c
t.a.a.u()
t=t.e
u=c.c
u.a.a.u()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.u()
t=t.e
u=c.b
u.a.a.u()
if(t==u.e){t=b.b
t.a.a.u()
t=t.e
u=c.c
u.a.a.u()
if(t==u.e){t=b.c
t.a.a.u()
t=t.e
u=c.a
u.a.a.u()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.u()
t=t.e
u=c.c
u.a.a.u()
if(t==u.e){t=b.b
t.a.a.u()
t=t.e
u=c.a
u.a.a.u()
if(t==u.e){t=b.c
t.a.a.u()
t=t.e
u=c.b
u.a.a.u()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.bV.prototype={
aZ:function(){var u=this
if(!u.gb_()){C.b.E(u.a.a.c.b,u)
u.a.a.a2()}u.bK()
u.bL()},
bO:function(a){this.a=a
a.c.b.push(this)},
bP:function(a){this.b=a
a.c.c.push(this)},
bK:function(){var u=this.a
if(u!=null){C.b.E(u.c.b,this)
this.a=null}},
bL:function(){var u=this.b
if(u!=null){C.b.E(u.c.c,this)
this.b=null}},
gb_:function(){return this.a==null||this.b==null},
p:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.O()},
G:function(a){if(this.gb_())return a+"disposed"
return a+C.a.al(J.a6(this.a.e),0)+", "+C.a.al(J.a6(this.b.e),0)},
O:function(){return this.G("")}}
F.fu.prototype={}
F.hZ.prototype={
b2:function(a,b,c){var u,t=b.a
t.a.a.u()
t=t.e
u=c.a
u.a.a.u()
if(t==u.e){t=b.b
t.a.a.u()
t=t.e
u=c.b
u.a.a.u()
return t==u.e}else{t=b.a
t.a.a.u()
t=t.e
u=c.b
u.a.a.u()
if(t==u.e){t=b.b
t.a.a.u()
t=t.e
u=c.a
u.a.a.u()
return t==u.e}else return!1}}}
F.c3.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.O()},
G:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.a.al(J.a6(u.e),0)},
O:function(){return this.G("")}}
F.ho.prototype={
gn:function(){var u=this.e
return u==null?this.e=D.B():u},
c9:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.u()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.r)(g),++s){r=g[s]
h.a.l(0,r.hj())}h.a.u()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.r)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.w()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
n=p[o]
h.b.a.a.l(0,n)
o=new F.c3()
if(n.a==null)H.p(P.q("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.B(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.r)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.w()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.u()
p=p.e
if(typeof p!=="number")return p.w()
p+=u
o=o.c
if(p>=o.length)return H.b(o,p)
k=o[p]
p=h.c.a
p.a.l(0,l)
p.a.l(0,k)
F.m9(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.r)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.w()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.u()
p=p.e
if(typeof p!=="number")return p.w()
p+=u
o=o.c
if(p>=o.length)return H.b(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.w()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
i=p[o]
o=h.d.a
o.a.l(0,l)
o.a.l(0,k)
o.a.l(0,i)
F.bP(l,k,i)}g=h.e
if(g!=null)g.ad(0)},
ap:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.ap()||!1
if(!t.a.ap())u=!1
s=t.e
if(s!=null)s.ad(0)
return u},
hc:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=d.e
if(c!=null)++c.d
for(u=d.a.c.length-1,c=a.b,t=a.a,s=t.length,r=a.c,q=c-1;u>=0;--u){p=d.a.c
if(u>=p.length)return H.b(p,u)
o=p[u]
p=o.y
n=C.c.b0(p.a*q)
p=p.b
if(typeof r!=="number")return r.D()
m=C.c.b0(p*(r-1))
n=n>=0?C.d.au(n,c):c+C.d.au(n,c)
l=(n+(m>=0?C.d.au(m,r):r+C.d.au(m,r))*c)*4
if(l<0||l>=s)return H.b(t,l)
p=t[l]/255
k=l+1
if(k>=s)return H.b(t,k)
k=t[k]/255
j=l+2
if(j>=s)return H.b(t,j)
j=t[j]/255
i=l+3
if(i>=s)return H.b(t,i)
i=t[i]/255
if(p<0)p=0
else if(p>1)p=1
if(k<0)k=0
else if(k>1)k=1
if(j<0)j=0
else if(j>1)j=1
if(!(i<0))if(i>1)i=1
h=(p+k+j)*b/3
p=o.f
k=o.r
j=k.a
i=k.b
k=k.c
if(typeof k!=="number")return k.m()
g=p.a
f=p.b
e=p.c
if(typeof e!=="number")return e.w()
k=new V.S(g+j*h,f+i*h,e+k*h)
if(!J.y(p,k)){o.f=k
p=o.a
if(p!=null){p=p.e
if(p!=null)p.B(null)}}}c=d.e
if(c!=null)c.ad(0)},
i8:function(a){var u,t,s,r,q=this.e
if(q!=null)++q.d
for(q=this.a,u=q.c.length-1,t=a.a;u>=0;--u){s=q.c
if(u>=s.length)return H.b(s,u)
r=s[u]
if((t&$.a1().a)===0)r.f=null
if((t&$.am().a)===0)r.r=null
if((t&$.aC().a)===0)r.x=null
if((t&$.ag().a)===0)r.y=null
if((t&$.aT().a)===0)r.z=null
if((t&$.ko().a)===0)r.Q=null
if((t&$.bi().a)===0)r.ch=0
if((t&$.aB().a)===0)r.cx=null}q=this.e
if(q!=null)q.ad(0)},
i7:function(a){var u,t,s,r=this.e
if(r!=null)++r.d
for(r=this.d,u=r.b.length-1;u>=0;--u){t=r.b
if(u>=t.length)return H.b(t,u)
s=t[u]
s.d=null}r=this.e
if(r!=null)r.ad(0)},
hC:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.c(o.slice(0),[H.jn(o,0)])
for(o=[F.bd];u.length!==0;){t=C.b.ghs(u)
C.b.dX(u,0)
if(t!=null){s=H.c([],o)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.b(u,r)
q=u[r]
if(q!=null&&a.b2(0,t,q)){s.push(q)
C.b.dX(u,r)}}if(s.length>1)b.c9(s)}}p.a.u()
p.c.ce()
p.d.ce()
p.b.hW()
p.c.cf(new F.hZ())
p.d.cf(new F.hv())
o=p.e
if(o!=null)o.ad(0)},
bi:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.a1()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.am().a)!==0)++s
if((t&$.aC().a)!==0)++s
if((t&$.ag().a)!==0)++s
if((t&$.aT().a)!==0)++s
if((t&$.cu().a)!==0)++s
if((t&$.cv().a)!==0)++s
if((t&$.bi().a)!==0)++s
if((t&$.aB().a)!==0)++s
r=a4.gco(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.c(u,[P.F])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.cA])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.hd(m)
k=l.gco(l)
if(m>=t)return H.b(o,m)
o[m]=new Z.cA(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.b(i,j)
h=i[j].hB(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.b(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.bF(p)),35044)
u.bindBuffer(a1,null)
c=new Z.aD(new Z.dw(a1,d),o,a4)
c.b=H.c([],[Z.bq])
if(a0.b.b.length!==0){b=H.c([],[P.v])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.u()
b.push(t.e)}a=Z.k8(u,34963,b)
c.b.push(new Z.bq(0,b.length,a))}if(a0.c.b.length!==0){b=H.c([],[P.v])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.u()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.b(t,m)
t=t[m].b
t.a.a.u()
b.push(t.e)}a=Z.k8(u,34963,b)
c.b.push(new Z.bq(1,b.length,a))}if(a0.d.b.length!==0){b=H.c([],[P.v])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.u()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.b(t,m)
t=t[m].b
t.a.a.u()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.b(t,m)
t=t[m].c
t.a.a.u()
b.push(t.e)}a=Z.k8(u,34963,b)
c.b.push(new Z.bq(4,b.length,a))}return c},
h:function(a){var u=this,t="   ",s=H.c([],[P.u])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.G(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.G(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.G(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.G(t))}return C.b.t(s,"\n")},
a2:function(){var u=this.e
if(u!=null)u.B(null)}}
F.hp.prototype={
ha:function(a){var u,t,s,r,q=H.c([],[F.aX]),p=a[0]
for(u=this.a,t=2;t<4;++t){s=a[t-1]
r=a[t]
u.a.l(0,p)
u.a.l(0,s)
u.a.l(0,r)
q.push(F.bP(p,s,r))}return q},
hb:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.c([],[F.aX])
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
if(p){n.l(0,m)
u.a.l(0,l)
u.a.l(0,j)
h.push(F.bP(m,l,j))
u.a.l(0,m)
u.a.l(0,j)
u.a.l(0,i)
h.push(F.bP(m,j,i))}else{n.l(0,l)
u.a.l(0,j)
u.a.l(0,i)
h.push(F.bP(l,j,i))
u.a.l(0,l)
u.a.l(0,i)
u.a.l(0,m)
h.push(F.bP(l,i,m))}p=!p}r=!r}return h},
gj:function(a){return this.b.length},
cf:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.b(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.i(0,q)
for(o=q-1;o>=0;--o){n=r.d.i(0,o)
if(a.b2(0,p,n)){p.aZ()
break}}}}},
ce:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
s=t[u]
t=s.ghg(s)
if(t)s.aZ()}},
ap:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.r)(u),++r)if(!u[r].bV())s=!1
return s},
bU:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.r)(u),++r)if(!u[r].bT())s=!1
return s},
h:function(a){return this.O()},
G:function(a){var u,t,s,r=H.c([],[P.u])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s)r.push(u[s].G(a))
return C.b.t(r,"\n")},
O:function(){return this.G("")}}
F.hq.prototype={
gj:function(a){return this.b.length},
cf:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.b(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.i(0,q)
for(o=q-1;o>=0;--o){n=r.c.i(0,o)
if(a.b2(0,p,n)){p.aZ()
break}}}}},
ce:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
s=t[u]
t=J.y(s.a,s.b)
if(t)s.aZ()}},
h:function(a){return this.O()},
G:function(a){var u,t,s=H.c([],[P.u]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.b(t,u)
s.push(t[u].G(a+(""+u+". ")))}return C.b.t(s,"\n")},
O:function(){return this.G("")}}
F.hr.prototype={
gj:function(a){return this.b.length},
hW:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.b.E(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.B(null)}s=t.a
if(s!=null){C.b.E(s.b.b,t)
t.a=null}}}},
h:function(a){return this.O()},
G:function(a){var u,t,s,r=H.c([],[P.u])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s)r.push(u[s].G(a))
return C.b.t(r,"\n")},
O:function(){return this.G("")}}
F.bd.prototype={
bZ:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.ik(u.cx,r,o,t,s,q,p,a,n)},
hj:function(){return this.bZ(null)},
sa7:function(a,b){var u
if(!J.y(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a2()}},
se1:function(a){var u
if(!J.y(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a2()}},
sd3:function(a){var u
if(!J.y(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a2()}},
hB:function(a){var u,t,s=this
if(a.p(0,$.a1())){u=s.f
t=[P.F]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.am())){u=s.r
t=[P.F]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.aC())){u=s.x
t=[P.F]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.ag())){u=s.y
t=[P.F]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.p(0,$.aT())){u=s.z
t=[P.F]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.cu())){u=s.Q
t=[P.F]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.cv())){u=s.Q
t=[P.F]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.p(0,$.bi()))return H.c([s.ch],[P.F])
else if(a.p(0,$.aB())){u=s.cx
t=[P.F]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.F])},
bV:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cd()
t.d.J(0,new F.iw(s))
s=s.a
t.r=s.A(0,Math.sqrt(s.F(s)))
s=t.a
if(s!=null){s.a2()
s=t.a.e
if(s!=null)s.ad(0)}return!0},
bT:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cd()
t.d.J(0,new F.iv(s))
s=s.a
t.x=s.A(0,Math.sqrt(s.F(s)))
s=t.a
if(s!=null){s.a2()
s=t.a.e
if(s!=null)s.ad(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.O()},
G:function(a){var u,t,s=this,r="-",q=H.c([],[P.u])
q.push(C.a.al(J.a6(s.e),0))
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
q.push(V.A(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.h(0))
else q.push(r)
t=C.b.t(q,", ")
return a+"{"+t+"}"},
O:function(){return this.G("")}}
F.iw.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.w(0,t)}}}
F.iv.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.w(0,t)}}}
F.il.prototype={
u:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.b(u,r)
u[r].e=s;++s}this.b=!1}},
l:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.d(P.q("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.a2()
return!0},
bg:function(a,b,c,d,e,f){var u=F.ik(a,null,b,c,null,d,e,f,0)
this.l(0,u)
return u},
gj:function(a){return this.c.length},
ap:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s)u[s].bV()
return!0},
bU:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s)u[s].bT()
return!0},
hf:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
if(typeof n!=="number")return n.m()
n=q.A(0,Math.sqrt(p*p+o*o+n*n))
if(!J.y(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.B(null)}}}}return!0},
h:function(a){return this.O()},
G:function(a){var u,t,s,r
this.u()
u=H.c([],[P.u])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.r)(t),++r)u.push(t[r].G(a))
return C.b.t(u,"\n")},
O:function(){return this.G("")}}
F.im.prototype={
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
J:function(a,b){var u=this
C.b.J(u.b,b)
C.b.J(u.c,new F.io(u,b))
C.b.J(u.d,new F.ip(u,b))},
h:function(a){return this.O()},
O:function(){var u,t,s,r=H.c([],[P.u])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s)r.push(u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s)r.push(u[s].G(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s)r.push(u[s].G(""))
return C.b.t(r,"\n")}}
F.io.prototype={
$1:function(a){if(!J.y(a.a,this.a))this.b.$1(a)}}
F.ip.prototype={
$1:function(a){var u=this.a
if(!J.y(a.a,u)&&!J.y(a.b,u))this.b.$1(a)}}
F.iq.prototype={
gj:function(a){return this.b.length+this.c.length},
i:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.b(t,u)
return t[u]}else{if(b<0)return H.b(t,b)
return t[b]}},
h:function(a){return this.O()},
O:function(){var u,t,s,r=H.c([],[P.u])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s)r.push(u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s)r.push(u[s].G(""))
return C.b.t(r,"\n")}}
F.is.prototype={}
F.ir.prototype={
b2:function(a,b,c){return J.y(b.f,c.f)}}
F.it.prototype={}
F.h5.prototype={
c9:function(a){var u,t,s,r,q,p,o,n,m,l,k=V.cd()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null){r=k.a
q=s.a
p=k.b
o=s.b
n=k.c
s=s.c
if(typeof n!=="number")return n.w()
if(typeof s!=="number")return H.m(s)
k=new V.C(r+q,p+o,n+s)}}k=k.A(0,Math.sqrt(k.F(k)))
for(u=a.length,s=k==null,t=0;t<a.length;a.length===u||(0,H.r)(a),++t){m=a[t]
if(s)l=null
else{r=k.a
q=k.b
p=k.c
if(typeof p!=="number")return p.m()
l=k.A(0,Math.sqrt(r*r+q*q+p*p))}if(!J.y(m.r,l)){m.r=l
r=m.a
if(r!=null){r=r.e
if(r!=null)r.B(null)}}}return}}
F.iu.prototype={
gj:function(a){return this.b.length},
h:function(a){return this.O()},
O:function(){var u,t,s,r=H.c([],[P.u])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s)r.push(u[s].G(""))
return C.b.t(r,"\n")}}
O.eZ.prototype={
gn:function(){var u=this.r
return u==null?this.r=D.B():u},
v:function(a){var u=this.r
if(u!=null)u.B(a)},
a9:function(a,b){},
bt:function(a,b){var u,t,s,r,q=this,p="GreyViewDepth",o=q.a
if(o==null){u=a.fr.i(0,p)
if(u==null){o=a.a
u=new A.f_(o,p)
u.ba(o,p)
u.bm(0,"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n".charCodeAt(0)==0?"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n":"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n","precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n  f = f * 256.0;\n  float r = floor(f);\n  f = (f - r) * 256.0;\n  float g = floor(f);\n  f = (f - g) * 256.0;\n  float b = floor(f);\n  vec3 clr = vec3(r, g, b) / 256.0;\n  gl_FragColor = vec4(clr, 1.0);\n}\n".charCodeAt(0)==0?"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n  f = f * 256.0;\n  float r = floor(f);\n  f = (f - r) * 256.0;\n  float g = floor(f);\n  f = (f - g) * 256.0;\n  float b = floor(f);\n  vec3 clr = vec3(r, g, b) / 256.0;\n  gl_FragColor = vec4(clr, 1.0);\n}\n":"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n  f = f * 256.0;\n  float r = floor(f);\n  f = (f - r) * 256.0;\n  float g = floor(f);\n  f = (f - g) * 256.0;\n  float b = floor(f);\n  vec3 clr = vec3(r, g, b) / 256.0;\n  gl_FragColor = vec4(clr, 1.0);\n}\n")
u.z=u.x.i(0,"posAttr")
u.Q=H.h(u.y.i(0,"width"),"$iP")
u.ch=H.h(u.y.i(0,"stop"),"$iP")
u.cx=H.h(u.y.i(0,"viewObjMat"),"$iZ")
u.cy=H.h(u.y.i(0,"projMat"),"$iZ")
a.bh(u)}q.a=u
o=u}t=b.e
if((!(t instanceof Z.aD)?b.e=null:t)==null){o=b.d.bi(new Z.bC(a.a),$.a1())
t=o.ai($.a1())
s=q.a
t.e=s.z.c
b.e=o
o=s}o.X(a)
t=q.b
s=q.c
r=o.Q
r.a.uniform1f(r.d,t-s)
s=q.c
t=o.ch
t.a.uniform1f(t.d,s)
s=a.cy
s=s.ga8(s)
t=o.cy
t.toString
t.aa(s.a5(0,!0))
s=a.ge5()
o=o.cx
o.toString
o.aa(s.a5(0,!0))
o=b.e
o.X(a)
o.a0(a)
o.az(a)
o=q.a
o.toString
a.a.useProgram(null)
o.x.bk()}}
O.cN.prototype={
gn:function(){var u=this.x
return u==null?this.x=D.B():u},
v:function(a){var u=this.x
if(u!=null)u.B(a)},
af:function(){return this.v(null)},
sbS:function(a){var u=this.r
if(!(Math.abs(u-a)<$.w().a)){this.r=a
u=new D.n("blurValue",u,a)
u.b=!0
this.v(u)}},
sd8:function(a){var u,t=this,s=t.e
if(s!=a){if(s!=null)s.gn().E(0,t.ga3())
u=t.e
t.e=a
if(a!=null)a.gn().l(0,t.ga3())
s=new D.n("colorTexture",u,t.e)
s.b=!0
t.v(s)}},
saW:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gn().E(0,s.ga3())
u=s.f
s.f=a
if(a!=null)a.gn().l(0,s.ga3())
r=new D.n("blurTexture",u,s.f)
t=r.b=!0
s.v(r)
r=s.f==null
if(!(r&&u!=null))r=!r&&u==null
else r=t
if(r){s.a=null
s.v(null)}}},
scg:function(a){var u,t=this,s=$.kI
if(s==null){s=new V.cZ(1,0,0,0,1,0,0,0,1)
$.kI=s
a=s}else a=s
if(!J.y(t.b,a)){u=t.b
t.b=a
s=new D.n("textureMatrix",u,a)
s.b=!0
t.v(s)}},
sbR:function(a){var u,t,s=this
if(a==null)a=V.l8()
if(!J.y(s.c,a)){u=s.c
s.c=a
t=new D.n("blurAdjust",u,a)
t.b=!0
s.v(t)}},
a9:function(a,b){},
a6:function(a,b){if(b!=null)if(!C.b.ar(a,b)){b.a=a.length
a.push(b)}},
bt:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.a
if(g==null){u=h.f!=null
g="GaussianBlur_"+(u?"1":"0")
t=g.charCodeAt(0)==0?g:g
s=a.fr.i(0,t)
if(s==null){g=a.a
s=new A.fj(g,t)
s.ba(g,t)
r=s.z=new A.fk(u,t)
q=new P.M("")
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
g=[P.F]
r.aK(q,3,H.c([0.75],g),H.c([0.5],g))
r.aK(q,6,H.c([0.42857,2.14286],g),H.c([0.41667,0.08333],g))
r.aK(q,9,H.c([0,1.8],g),H.c([0.5122,0.2439],g))
r.aK(q,12,H.c([0,1.38462,3.23077],g),H.c([0.22703,0.31622,0.07027],g))
r.aK(q,15,H.c([0.9375,2.8125],g),H.c([0.36184,0.13816],g))
r.aK(q,18,H.c([0.47368,2.36842,4.26316],g),H.c([0.29916,0.16318,0.03766],g))
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
s.bm(0,"uniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n\nattribute vec3 posAttr;\nattribute vec2 txtAttr;\n\nvarying vec2 txt2D;\n\nvoid main()\n{\n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;\n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"uniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n\nattribute vec3 posAttr;\nattribute vec2 txtAttr;\n\nvarying vec2 txt2D;\n\nvoid main()\n{\n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;\n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n":"uniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n\nattribute vec3 posAttr;\nattribute vec2 txtAttr;\n\nvarying vec2 txt2D;\n\nvoid main()\n{\n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;\n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n",g.charCodeAt(0)==0?g:g)
s.Q=s.x.i(0,"posAttr")
s.ch=s.x.i(0,"txtAttr")
s.cx=H.h(s.y.i(0,"projViewObjMat"),"$iZ")
s.cy=H.h(s.y.i(0,"txt2DMat"),"$iby")
s.dy=H.h(s.y.i(0,"colorTxt"),"$iQ")
s.dx=H.h(s.y.i(0,"blurScale"),"$iaz")
g=s.y
if(u){s.fr=H.h(g.i(0,"blurTxt"),"$iQ")
s.db=H.h(s.y.i(0,"blurAdj"),"$ibc")}else s.fx=H.h(g.i(0,"blurValue"),"$iP")
a.bh(s)}g=h.a=s
b.e=null}r=g.z
g=b.e
if((!(g instanceof Z.aD)?b.e=null:g)==null){g=b.d
p=$.a1()
o=$.ag()
o=g.bi(new Z.bC(a.a),new Z.ak(p.a|o.a))
o.ai($.a1()).e=h.a.Q.c
o.ai($.ag()).e=h.a.ch.c
b.e=o}n=H.c([],[T.bv])
h.a6(n,h.e)
g=r.a
if(g)h.a6(n,h.f)
for(m=0;m<n.length;++m)n[m].X(a)
p=h.a
p.X(a)
o=h.e
p.ac(p.dy,o)
o=h.b
l=p.cy
l.toString
l.aa(o.a5(0,!0))
o=h.d
l=o.a
k=a.c
if(typeof l!=="number")return l.A()
o=o.b
j=a.d
if(typeof o!=="number")return o.A()
i=p.dx
i.a.uniform2f(i.d,l/k,o/j)
j=a.gdW()
p=p.cx
p.toString
p.aa(j.a5(0,!0))
p=h.a
if(g){g=h.f
p.ac(p.fr,g)
g=h.c
p.db.eb(g)}else{g=h.r
p=p.fx
p.a.uniform1f(p.d,g)}g=b.e
if(g instanceof Z.aD){g.X(a)
g.a0(a)
g.az(a)}else b.e=null
g=h.a
g.toString
p=a.a
p.useProgram(null)
g.x.bk()
for(m=0;m<n.length;++m){g=n[m]
if(g.c){g.c=!1
p.activeTexture(33984+g.a)
p.bindTexture(3553,null)}}}}
O.cY.prototype={
gn:function(){var u=this.fr
return u==null?this.fr=D.B():u},
v:function(a){var u=this.fr
if(u!=null)u.B(a)},
af:function(){return this.v(null)},
cS:function(a){this.a=null
this.v(a)},
fV:function(){return this.cS(null)},
eW:function(a,b){var u=new D.aY()
u.b=!0
this.v(u)},
eY:function(a,b){var u=new D.aZ()
u.b=!0
this.v(u)},
cF:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.v,h=new H.K([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s){r=u[s]
q=r.gaq()
p=h.i(0,r.gaq())
h.k(0,q,p==null?1:p)}o=H.c([],[A.cG])
h.J(0,new O.fO(j,o))
C.b.bz(o,new O.fP())
n=new H.K([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s){r=u[s]
q=r.gaq()
p=n.i(0,r.gaq())
n.k(0,q,p==null?1:p)}m=H.c([],[A.d5])
n.J(0,new O.fQ(j,m))
C.b.bz(m,new O.fR())
l=new H.K([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.r)(i),++s){r=i[s]
t=r.gaq()
q=l.i(0,r.gaq())
l.k(0,t,q==null?1:q)}k=H.c([],[A.dd])
l.J(0,new O.fS(j,k))
C.b.bz(k,new O.fT())
i=C.d.a4(j.e.a.length+3,4)
j.dy.e
return A.mh(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,o,m,k)},
a6:function(a,b){if(b!=null)if(!C.b.ar(a,b)){b.a=a.length
a.push(b)}},
a9:function(a,b){var u,t,s
for(u=this.dx.a,u=new J.a2(u,u.length);u.C();){t=u.d
t.toString
s=$.bY
t.a=s==null?$.bY=new V.ai(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s
s=t.b
if(s!=null)t.a=s.aA(0,b,t)}},
bt:function(a7,a8){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=a5.a
if(a6==null){a6=a5.cF()
u=a7.fr.i(0,a6.aF)
if(u==null){u=A.mg(a6,a7.a)
a7.bh(u)}a6=a5.a=u
a8.e=null}t=a6.z
s=t.dh
a6=a8.e
if(!(a6 instanceof Z.aD))a6=a8.e=null
if(a6==null||!a6.d.p(0,s)){a6=t.k3
if(a6)a8.d.ap()
r=t.k4
if(r){q=a8.d
p=q.e
if(p!=null)++p.d
q.d.bU()
q.a.bU()
q=q.e
if(q!=null)q.ad(0)}q=t.r2
if(q){p=a8.d
o=p.e
if(o!=null)++o.d
p.a.hf()
p=p.e
if(p!=null)p.ad(0)}n=a8.d.bi(new Z.bC(a7.a),s)
n.ai($.a1()).e=a5.a.Q.c
if(a6)n.ai($.am()).e=a5.a.cx.c
if(r)n.ai($.aC()).e=a5.a.ch.c
if(t.r1)n.ai($.ag()).e=a5.a.cy.c
if(q)n.ai($.aT()).e=a5.a.db.c
if(t.rx)n.ai($.aB()).e=a5.a.dx.c
a8.e=n}m=H.c([],[T.bv])
a5.a.X(a7)
if(t.dy){a6=a5.a
r=a7.dx
r=r.ga8(r)
a6=a6.dy
a6.toString
a6.aa(r.a5(0,!0))}if(t.fr){a6=a5.a
r=a7.ge5()
a6=a6.fr
a6.toString
a6.aa(r.a5(0,!0))}a6=a5.a
r=a7.gdW()
a6=a6.fy
a6.toString
a6.aa(r.a5(0,!0))
if(t.ry){a6=a5.a
r=a5.b
a6=a6.k1
a6.toString
a6.aa(C.j.a5(r,!0))}if(t.x1){a6=a5.a
r=a5.c
a6=a6.k2
a6.toString
a6.aa(C.j.a5(r,!0))}if(t.x2){a6=a5.a
r=a5.d
a6=a6.k3
a6.toString
a6.aa(C.j.a5(r,!0))}if(t.y2>0){l=a5.e.a.length
a6=a5.a.k4
a6.a.uniform1i(a6.d,l)
for(k=0;k<l;++k){a6=a5.a
r=a5.e.a
if(k>=r.length)return H.b(r,k)
r=r[k]
a6=a6.r1
if(k>=a6.length)return H.b(a6,k)
a6=a6[k]
j=new Float32Array(H.bF(r.a5(0,!0)))
a6.a.uniformMatrix4fv(a6.d,!1,j)}}a6=t.a
if(a6.a){r=a5.a
q=a5.f.f
r=r.r2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(a6.b){a5.a6(m,a5.f.d)
a6=a5.a
r=a5.f.d
a6.ac(a6.rx,r)}if(t.id){a6=t.b
if(a6.a){r=a5.a
q=a5.r.f
r=r.x1
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(a6.b){a5.a6(m,a5.r.d)
a6=a5.a
r=a5.r.d
a6.ac(a6.x2,r)}a6=t.c
if(a6.a){r=a5.a
q=a5.x.f
r=r.y2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(a6.b){a5.a6(m,a5.x.d)
a6=a5.a
r=a5.x.d
a6.ac(a6.aF,r)}a6=t.d
if(a6.a){r=a5.a
q=a5.y.f
r=r.di
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(a6.b){a5.a6(m,a5.y.d)
a6=a5.a
r=a5.y.d
a6.ac(a6.dj,r)}a6=t.e
r=a6.a
if(r||a6.b||!1){q=a5.a
p=a5.z.ch
q=q.dm
q.a.uniform1f(q.d,p)}if(r){r=a5.a
q=a5.z.f
r=r.dk
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(a6.b){a5.a6(m,a5.z.d)
a6=a5.a
r=a5.z.d
a6.ac(a6.dl,r)}a6=t.z
if(a6.length>0){r=a7.db
i=r.ga8(r)
r=P.v
h=new H.K([r,r])
for(r=a5.dx.e,q=r.length,g=0;g<r.length;r.length===q||(0,H.r)(r),++g){f=r[g]
e=f.gaq()
d=h.i(0,e)
if(d==null)d=0
h.k(0,e,d+1)
c=J.cw(a5.a.c0.i(0,e),d)
p=f.gdc(f)
o=C.c.m(i.a,p.gdd(p))+C.c.m(i.b,p.gde(p))+C.c.m(i.c,p.gdf())
b=C.c.m(i.e,p.gdd(p))+C.c.m(i.f,p.gde(p))+C.c.m(i.r,p.gdf())
a=i.y
a0=p.gdd(p)
if(typeof a!=="number")return a.m()
a0=C.c.m(a,a0)
a=i.z
a1=p.gde(p)
if(typeof a!=="number")return a.m()
a1=C.c.m(a,a1)
a=i.Q
p=p.gdf()
if(typeof a!=="number")return a.m()
p=a0+a1+C.c.m(a,p)
p=new V.C(o,b,p).A(0,Math.sqrt(o*o+b*b+p*p))
b=c.e
o=p.a
a=p.b
p=p.c
b.a.uniform3f(b.d,o,a,p)
p=f.gaX(f)
a=c.f
a.a.uniform3f(a.d,p.a,p.b,p.c)
f.gaR()
p=f.gdc(f)
o=c.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gi9()
o=c.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gbu(f)
o=c.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gaR()
if(!C.b.ar(m,p)){p.a=m.length
m.push(p)}p=f.gaR()
o=p.gdI(p)
if(o){o=c.r
o.toString
b=p.d
if(!b)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}}for(r=a6.length,g=0;g<a6.length;a6.length===r||(0,H.r)(a6),++g){q=a6[g].a
l=h.i(0,q)
if(l==null)l=0
q=a5.a.c_.i(0,q)
q.a.uniform1i(q.d,l)}}a6=t.Q
if(a6.length>0){r=a7.db
i=r.ga8(r)
r=P.v
a2=new H.K([r,r])
for(r=a5.dx.f,q=r.length,g=0;g<r.length;r.length===q||(0,H.r)(r),++g){f=r[g]
e=f.gaq()
d=a2.i(0,e)
if(d==null)d=0
a2.k(0,e,d+1)
c=J.cw(a5.a.c2.i(0,e),d)
a3=i.m(0,f.a)
p=f.a
o=$.c4
p=p.ci(o==null?$.c4=new V.S(0,0,0):o)
o=c.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=$.c4
p=a3.ci(p==null?$.c4=new V.S(0,0,0):p)
o=c.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.c
o=c.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.r
o=c.y
o.a.uniform1f(o.d,p)
p=f.x
o=c.z
o.a.uniform1f(o.d,p)
p=f.y
o=c.Q
o.a.uniform1f(o.d,p)}for(r=a6.length,g=0;g<a6.length;a6.length===r||(0,H.r)(a6),++g){q=a6[g].a
l=a2.i(0,q)
if(l==null)l=0
q=a5.a.c1.i(0,q)
q.a.uniform1i(q.d,l)}}a6=t.ch
if(a6.length>0){r=a7.db
i=r.ga8(r)
r=P.v
a4=new H.K([r,r])
for(r=a5.dx.r,q=r.length,g=0;g<r.length;r.length===q||(0,H.r)(r),++g){f=r[g]
e=f.gaq()
d=a4.i(0,e)
if(d==null)d=0
a4.k(0,e,d+1)
c=J.cw(a5.a.c4.i(0,e),d)
p=f.ghU(f)
o=c.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gdc(f).ix()
o=c.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=i.ci(f.ghU(f))
o=c.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gaX(f)
o=c.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
f.gaR()
p=f.gi9()
o=c.f
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gbu(f)
o=c.r
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.giy()
o=c.x
o.a.uniform1f(o.d,p)
p=f.giz()
o=c.y
o.a.uniform1f(o.d,p)
f.gaR()
p=f.gaR()
if(!C.b.ar(m,p)){p.a=m.length
m.push(p)}p=f.gaR()
o=p.gdI(p)
if(o){o=c.dx
o.toString
b=p.d
if(!b)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}f.gcn()
p=f.gic()
o=c.z
o.a.uniform4f(o.d,p.a,p.b,p.c,p.d)
p=f.gcn()
if(!C.b.ar(m,p)){p.a=m.length
m.push(p)}p=f.gcn()
o=p.gdI(p)
if(o){o=c.dy
o.toString
b=p.d
if(!b)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}if(f.gil()){p=f.gij()
o=c.Q
o.a.uniform1f(o.d,p)
p=f.gii()
o=c.ch
o.a.uniform1f(o.d,p)}if(f.gik()){p=f.gie()
o=c.cx
o.a.uniform1f(o.d,p)
p=f.gig()
o=c.cy
o.a.uniform1f(o.d,p)
p=f.gih()
o=c.db
o.a.uniform1f(o.d,p)}}for(r=a6.length,g=0;g<a6.length;a6.length===r||(0,H.r)(a6),++g){q=a6[g].a
l=a4.i(0,q)
if(l==null)l=0
q=a5.a.c3.i(0,q)
q.a.uniform1i(q.d,l)}}}if(t.f.b){a5.a6(m,a5.Q.d)
a6=a5.a
r=a5.Q.d
a6.ac(a6.dn,r)}if(t.dx){a6=a5.a
r=a7.Q
if(r==null){r=a7.db
r=a7.Q=r.ga8(r).hz(0)}a6=a6.id
a6.toString
a6.aa(r.a5(0,!0))}if(t.cy){a5.a6(m,a5.ch)
a6=a5.a
r=a5.ch
a6.fX(a6.dq,r)
a6=t.r
if(a6.a){r=a5.a
q=a5.cx.f
r=r.dr
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(a6.b){a5.a6(m,a5.cx.d)
a6=a5.a
r=a5.cx.d
a6.ac(a6.ds,r)}a6=t.x
r=a6.a
if(r||a6.b||!1){q=a5.a
p=a5.cy.ch
q=q.dt
q.a.uniform1f(q.d,p)}if(r){r=a5.a
q=a5.cy.f
r=r.du
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(a6.b){a5.a6(m,a5.cy.d)
a6=a5.a
r=a5.cy.d
a6.ac(a6.dv,r)}}a6=t.y
r=a6.a
q=!r
if(!q||a6.b||!1){if(r){r=a5.a
p=a5.db.f
r=r.dw
r.a.uniform1f(r.d,p)}if(a6.b){a5.a6(m,a5.db.d)
r=a5.a
p=a5.db.d
r.ac(r.dz,p)}r=a7.a
r.enable(3042)
r.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].X(a7)
r=a8.e
r.X(a7)
r.a0(a7)
r.az(a7)
if(!q||a6.b||!1)a7.a.disable(3042)
for(a6=a7.a,k=0;k<m.length;++k){r=m[k]
if(r.c){r.c=!1
a6.activeTexture(33984+r.a)
a6.bindTexture(3553,null)}}r=a5.a
r.toString
a6.useProgram(null)
r.x.bk()},
h:function(a){var u=this.a
if(u!=null)return u.b
else return this.cF().aF}}
O.fO.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.cG(a,C.d.a4(b+3,4)*4))}}
O.fP.prototype={
$2:function(a,b){return J.jL(a.a,b.a)}}
O.fQ.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.d5(a,C.d.a4(b+3,4)*4))}}
O.fR.prototype={
$2:function(a,b){return J.jL(a.a,b.a)}}
O.fS.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.dd(a,C.d.a4(b+3,4)*4))}}
O.fT.prototype={
$2:function(a,b){return J.jL(a.a,b.a)}}
O.fI.prototype={
aD:function(){var u,t=this
t.cs()
u=t.f
if(!(Math.abs(u-1)<$.w().a)){t.f=1
u=new D.n(t.b,u,1)
u.b=!0
t.a.v(u)}}}
O.bW.prototype={
v:function(a){return this.a.v(a)},
af:function(){return this.v(null)},
aD:function(){},
be:function(a){var u,t,s=this
if(!s.c.p(0,a)){u=s.c
if(u.a||u.b||!1)t=!(a.a||a.b||!1)
else t=!0
s.c=a
if(t)s.aD()
u=s.a
u.a=null
u.v(null)}},
sbv:function(a){var u,t,s=this,r=a==null
if(r){u=s.c
s.be(new A.W(u.a,!1,!1))}else{u=s.c
if(!u.b)s.be(new A.W(u.a,!0,!1))}u=s.d
if(u!=a){if(u!=null)u.gn().E(0,s.ga3())
t=s.d
s.d=a
if(!r)a.gn().l(0,s.ga3())
r=new D.n(s.b+".texture2D",t,s.d)
r.b=!0
s.a.v(r)}}}
O.fJ.prototype={}
O.as.prototype={
cU:function(a){var u,t,s=this
if(!s.f.p(0,a)){u=s.f
s.f=a
t=new D.n(s.b+".color",u,a)
t.b=!0
s.a.v(t)}},
aD:function(){this.cs()
this.cU(new V.V(1,1,1))},
saX:function(a,b){this.be(new A.W(!0,this.c.b,!1))
this.cU(b)}}
O.fL.prototype={}
O.fM.prototype={
aD:function(){var u,t=this
t.ct()
u=t.ch
if(!(Math.abs(u-1)<$.w().a)){t.ch=1
u=new D.n(t.b+".refraction",u,1)
u.b=!0
t.a.v(u)}}}
O.fN.prototype={
cW:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.w().a)){u.ch=a
t=new D.n(u.b+".shininess",t,a)
t.b=!0
u.a.v(t)}},
aD:function(){this.ct()
this.cW(100)}}
O.dh.prototype={}
O.di.prototype={
gn:function(){var u=this.e
return u==null?this.e=D.B():u},
v:function(a){var u=this.e
if(u!=null)u.B(a)},
af:function(){return this.v(null)},
fb:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.ga3(),s=[{func:1,ret:-1,args:[D.T]}],r=0;r<b.length;b.length===u||(0,H.r)(b),++r){q=b[r]
if(q!=null){p=q.f
if(p==null){p=new D.aW()
p.d=0
q.f=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}this.af()},
fd:function(a,b){var u,t
for(u=b.gV(b),t=this.ga3();u.C();)u.gM(u).gn().E(0,t)
this.af()},
sd5:function(a){var u=this.f
if(u!==a){this.f=a
u=new D.n("blend",u,a)
u.b=!0
this.v(u)}},
a9:function(a,b){},
eG:function(a){a=C.d.a4(a+3,4)*4
if(a<=0)return 4
return a},
bt:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.eG(j.c.a.length)
if(i!==j.d||j.f!=j.r){j.d=i
j.r=j.f
j.b=null}u=j.b
if(u==null){u=j.f
t="TextureLayout_"+i+"_"+C.d.h(u.a)
s=a.fr.i(0,t)
if(s==null){s=A.mE(i,u,a.a)
a.bh(s)}j.b=s
u=s}if(b.e==null){u=b.d.bi(new Z.bC(a.a),$.a1())
t=u.ai($.a1())
r=j.b
t.e=r.z.c
b.e=u
u=r}u.X(a)
q=H.c([],[T.bv])
for(p=0,o=0;u=j.c.a,o<u.length;++o){n=u[o]
if(n!=null&&n.a!=null){u=n.a
if(u!=null)if(!C.b.ar(q,u)){u.a=q.length
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
if(t==null){t=$.bY
if(t==null){t=new V.ai(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.bY=t}}l=new Float32Array(H.bF(t.a5(0,!0)))
u.a.uniformMatrix4fv(u.d,!1,l)
u=j.b
k=n.c
u.toString
if(k==null){t=$.c8
if(t==null){t=V.c7(0,0,1,1)
$.c8=t
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
if(k==null){t=$.c8
if(t==null){t=V.c7(0,0,1,1)
$.c8=t
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
u.ch.ea(t)
for(o=0;o<q.length;++o)q[o].X(a)
u=b.e
if(u instanceof Z.aD){u.X(a)
u.a0(a)
u.az(a)}else b.e=null
u=j.b
u.toString
t=a.a
t.useProgram(null)
u.x.bk()
for(o=0;o<q.length;++o){u=q[o]
if(u.c){u.c=!1
t.activeTexture(33984+u.a)
t.bindTexture(3553,null)}}}}
O.b8.prototype={
v:function(a){var u=this.f
if(u!=null)u.B(a)},
af:function(){return this.v(null)}}
T.bv.prototype={}
T.hK.prototype={}
T.hL.prototype={
cV:function(){if(!this.d){this.d=!0
var u=this.y
if(u!=null)u.dg()}},
gn:function(){var u=this.y
return u==null?this.y=D.B():u},
X:function(a){var u,t=this
if(!t.c&&t.d){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(3553,t.b)}}}
T.hN.prototype={
bp:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=document.createElement("img")
u.src=a
t=T.k2(q)
W.U(u,"load",new T.hO(this,t,u,!1,q,!1,!1),!1)
return t},
fW:function(a,b,c){var u,t,s,r
b=V.ct(b)
u=V.ct(a.width)
t=V.ct(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.jQ()
s.width=u
s.height=t
r=C.i.e8(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.nL(r.getImageData(0,0,s.width,s.height))}}}
T.hO.prototype={
$1:function(a){var u,t,s=this,r=3553,q=s.b,p=s.c
q.e=p.width
q.f=p.height
u=s.a
t=u.fW(p,u.b,s.d)
q.r=p.width
q.x=p.height
p=u.a
p.bindTexture(r,s.e)
p.pixelStorei(37440,s.f?1:0)
C.y.i2(p,r,0,6408,6408,5121,t)
if(s.r)p.generateMipmap(r)
p.bindTexture(r,null)
q.cV();++u.e}}
T.hP.prototype={
eE:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.c
if(typeof f!=="number")return f.cu()
u=C.d.a4(f,2)
t=this.b
s=this.a
r=s.length
q=t*4
for(;u>=0;--u){p=q*u
o=q*(f-1-u)
for(n=0;n<t;++n){m=4*n
l=p+m
k=o+m
for(j=0;j<4;++j){i=l+j
h=k+j
if(i<0||i>=r)return H.b(s,i)
g=s[i]
if(h<0||h>=r)return H.b(s,h)
s[i]=s[h]
s[h]=g}}}}}
X.eC.prototype={
gn:function(){var u=this.fr
return u==null?this.fr=D.B():u},
a_:function(a){var u=this.fr
if(u!=null)u.B(a)},
san:function(a,b){var u,t=this
if(b<1)b=1
u=t.a
if(u!==b){t.y=null
t.c=t.a=b
u=new D.n("width",u,b)
u.b=!0
t.a_(u)}},
saj:function(a,b){var u,t=this
if(b<1)b=1
u=t.b
if(u!==b){t.y=null
t.d=t.b=b
u=new D.n("height",u,b)
u.b=!0
t.a_(u)}},
X:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=3553,e=36161,d=36160
if(h.f){u=a.a
t=u.drawingBufferWidth
s=h.r
if(typeof t!=="number")return t.m()
h.san(0,C.c.Y(t*s))
u=u.drawingBufferHeight
s=h.x
if(typeof u!=="number")return u.m()
h.saj(0,C.c.Y(u*s))}if(h.y==null){u=a.a
t=h.ch
s=h.a
r=h.b
q=u.getParameter(3379)
p=V.ct(s)
o=V.ct(r)
q=V.ct(q)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
u.bindTexture(f,n)
u.texParameteri(f,10242,33071)
u.texParameteri(f,10243,33071)
u.texParameteri(f,10241,9729)
u.texParameteri(f,10240,9729)
C.y.e0(u,f,0,6408,p,o,0,6408,5121,g)
u.bindTexture(f,g)
m=T.k2(n)
m.e=s
m.f=r
m.r=p
m.x=o
m.cV()
t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.dg()
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
a.c=C.c.Y(s*h.a)
r=t.d
a.d=C.c.Y(r*h.b)
l=t.a
k=h.c
if(typeof k!=="number")return H.m(k)
j=C.c.Y(l*k)
t=t.b
l=h.d
if(typeof l!=="number")return H.m(l)
u.viewport(j,C.c.Y(t*l),C.c.Y(s*k),C.c.Y(r*l))
u.clearDepth(h.db)
if(h.cy){t=h.cx
u.clearColor(t.a,t.b,t.c,t.d)
i=16640}else i=256
if(i>0)u.clear(i)},
az:function(a){a.a.bindFramebuffer(36160,null)}}
X.jP.prototype={}
X.fi.prototype={
gn:function(){var u=this.x
return u==null?this.x=D.B():u},
X:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.m(u)
q=C.c.Y(r*u)
r=s.b
if(typeof t!=="number")return H.m(t)
p=C.c.Y(r*t)
r=C.c.Y(s.c*u)
a.c=r
s=C.c.Y(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)},
az:function(a){}}
X.fm.prototype={
gn:function(){var u=this.b
return u==null?this.b=D.B():u}}
X.d4.prototype={
gn:function(){var u=this.f
return u==null?this.f=D.B():u},
a_:function(a){var u=this.f
if(u!=null)u.B(a)},
eq:function(){return this.a_(null)},
sb3:function(a){var u,t,s=this
if(!J.y(s.b,a)){u=s.b
if(u!=null)u.gn().E(0,s.gcA())
t=s.b
s.b=a
if(a!=null)a.gn().l(0,s.gcA())
u=new D.n("mover",t,s.b)
u.b=!0
s.a_(u)}}}
X.hG.prototype={}
V.eJ.prototype={
d1:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=this
if(l.c==null)return
u=l.d.length
t=P.k6().gbs().i(0,l.a)
if(t==null||t.length<=u){s=d
r=!0}else{if(u>=t.length)return H.b(t,u)
s=t[u]==="1"
r=!1}c.$1(s)
q=document
p=q.createElement("label")
o=p.style
o.whiteSpace="nowrap"
J.kr(l.c).l(0,p)
n=W.m5("checkbox")
n.checked=s
W.U(n,"change",new V.eK(l,c,n,u),!1)
p.appendChild(n)
m=q.createElement("span")
m.textContent=b
p.appendChild(m)
J.kr(l.c).l(0,q.createElement("br"))
l.d.push(n)
if(r)l.d_(u,s)},
aU:function(a,b,c){return this.d1(a,b,c,!1)},
d_:function(a,b){var u,t,s,r,q,p=this.a,o=P.k6().gbs().i(0,p)
if(o==null)o=""
u=o.length
if(u<a)o=C.a.hM(o,a-u+1,"0")
t=a>0?C.a.q(o,0,a):""
t+=b?"1":"0"
u=a+1
if(u<o.length)t+=C.a.ah(o,u)
s=P.k6()
u=P.u
r=P.mb(s.gbs(),u,u)
r.k(0,p,t)
q=s.dY(0,r)
p=window.history
u=q.h(0)
p.toString
p.replaceState(new P.iX([],[]).cj(""),"",u)}}
V.eK.prototype={
$1:function(a){var u=this,t=u.c
u.b.$1(t.checked)
u.a.d_(u.d,t.checked)}}
V.jD.prototype={
$1:function(a){var u=C.c.e2(this.a.ghv(),2)
if(u!=="0.00")P.kl(u+" fps")}}
V.hs.prototype={
ei:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.U(q,"scroll",new V.hu(o),!1)},
d2:function(a){var u,t,s,r,q,p,o,n,m,l,k
this.h_()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.i6(C.b.hA(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
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
if(H.o5(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.b(m,1)
l.href=m[1]
l.textContent=m[0]
t.appendChild(l)}else{k=P.j6(C.S,n,C.e,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.e(k)
l.textContent=n
t.appendChild(l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
t.appendChild(o)
break}}this.a.appendChild(t)},
h8:function(a){var u,t,s,r,q,p="auto",o=document,n=o.createElement("table")
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
h_:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new R.hS()
t=P.u
u.a=new H.K([t,R.df])
u.b=new H.K([t,R.dm])
u.c=u.P(0,q)
t=u.P(0,q).t(0,p)
s=T.a0(new H.N("*"))
t.a.push(s)
t.c=!0
t=u.P(0,p).t(0,p)
s=new T.aK()
r=[T.cX]
s.a=H.c([],r)
t.a.push(s)
t=T.a0(new H.N("*"))
s.a.push(t)
t=u.P(0,p).t(0,"BoldEnd")
s=T.a0(new H.N("*"))
t.a.push(s)
t.c=!0
t=u.P(0,q).t(0,o)
s=T.a0(new H.N("_"))
t.a.push(s)
t.c=!0
t=u.P(0,o).t(0,o)
s=new T.aK()
s.a=H.c([],r)
t.a.push(s)
t=T.a0(new H.N("_"))
s.a.push(t)
t=u.P(0,o).t(0,n)
s=T.a0(new H.N("_"))
t.a.push(s)
t.c=!0
t=u.P(0,q).t(0,m)
s=T.a0(new H.N("`"))
t.a.push(s)
t.c=!0
t=u.P(0,m).t(0,m)
s=new T.aK()
s.a=H.c([],r)
t.a.push(s)
t=T.a0(new H.N("`"))
s.a.push(t)
t=u.P(0,m).t(0,"CodeEnd")
s=T.a0(new H.N("`"))
t.a.push(s)
t.c=!0
t=u.P(0,q).t(0,l)
s=T.a0(new H.N("["))
t.a.push(s)
t.c=!0
t=u.P(0,l).t(0,k)
s=T.a0(new H.N("|"))
t.a.push(s)
s=u.P(0,l).t(0,j)
t=T.a0(new H.N("]"))
s.a.push(t)
s.c=!0
s=u.P(0,l).t(0,l)
t=new T.aK()
t.a=H.c([],r)
s.a.push(t)
s=T.a0(new H.N("|]"))
t.a.push(s)
s=u.P(0,k).t(0,j)
t=T.a0(new H.N("]"))
s.a.push(t)
s.c=!0
s=u.P(0,k).t(0,k)
t=new T.aK()
t.a=H.c([],r)
s.a.push(t)
s=T.a0(new H.N("|]"))
t.a.push(s)
u.P(0,q).t(0,i).a.push(new T.eu())
s=u.P(0,i).t(0,i)
t=new T.aK()
t.a=H.c([],r)
s.a.push(t)
s=T.a0(new H.N("*_`["))
t.a.push(s)
s=u.P(0,"BoldEnd")
s.d=s.a.b8(p)
s=u.P(0,n)
s.d=s.a.b8(o)
s=u.P(0,"CodeEnd")
s.d=s.a.b8(m)
s=u.P(0,j)
s.d=s.a.b8("Link")
s=u.P(0,i)
s.d=s.a.b8(i)
this.b=u}}
V.hu.prototype={
$1:function(a){P.kW(C.p,new V.ht(this.a))}}
V.ht.prototype={
$0:function(){var u=C.c.Y(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
K.jv.prototype={
$1:function(a){var u,t,s,r,q,p=this.c,o=this.b.f.a,n=p.r,m=p.x
if(typeof m!=="number")return m.D()
u=m-m-0
o.bindFramebuffer(36160,o.createFramebuffer())
o.readBuffer(36064)
o.framebufferTexture2D(36160,36064,3553,p.b,0)
if(typeof n!=="number")return n.m()
if(typeof m!=="number")return H.m(m)
t=new Uint8Array(n*m*4)
o.readPixels(0,u,n,m,6408,5121,t)
o.bindFramebuffer(36160,null)
s=new T.hP(t,n,m)
s.eE()
r=F.nU(150,150)
p=this.a
p.a=r
r.ap()
p.a.hc(s,0.05)
o=p.a
q=$.am()
q.toString
o.i8(new Z.ak($.kn().a&~q.a))
p.a.i7(!1)
p.a.ap()}}
K.jw.prototype={
$1:function(a){var u=this.a,t=u.r
t.sbv(a?this.b:null)
u=u.x
u.sbv(a?this.b:null)}}
K.jx.prototype={
$1:function(a){var u=this.a.z
u.sbv(a?this.b:null)}}
K.jy.prototype={
$1:function(a){var u=this.a.Q
u.sbv(a?this.b:null)}}
K.jz.prototype={
$1:function(a){var u=a?this.a.a:this.c
this.b.sby(0,u)}}
K.jA.prototype={
$1:function(a){var u=this.a,t=a?this.b.ch:null
u.d.saW(t)
u.f.saW(t)}}
K.jB.prototype={
$1:function(a){var u=a?this.b:null
this.a.sam(u)}};(function aliases(){var u=J.a.prototype
u.ed=u.h
u=J.cS.prototype
u.ee=u.h
u=T.cO.prototype
u.ec=u.aP
u.cr=u.h
u=O.bW.prototype
u.cs=u.aD
u=O.as.prototype
u.ct=u.aD})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"nF","mQ",8)
u(P,"nG","mR",8)
u(P,"nH","mS",8)
t(P,"lm","nD",10)
var n
s(n=E.aq.prototype,"gdQ",0,0,null,["$1","$0"],["dR","hK"],0,0)
s(n,"gdS",0,0,null,["$1","$0"],["dT","hL"],0,0)
s(n,"gdO",0,0,null,["$1","$0"],["dP","hJ"],0,0)
s(n,"gdM",0,0,null,["$1","$0"],["dN","hG"],0,0)
r(n,"ghE","hF",4)
r(n,"ghH","hI",4)
s(n=E.dj.prototype,"gcv",0,0,null,["$1","$0"],["cz","cw"],0,0)
q(n,"ghZ","dZ",10)
p(n=X.dt.prototype,"gfe","ff",5)
p(n,"geZ","f_",5)
p(n,"gf4","f5",2)
p(n,"gfi","fj",11)
p(n,"gfg","fh",11)
p(n,"gfm","fn",2)
p(n,"gfq","fs",2)
p(n,"gf8","f9",2)
p(n,"gfo","fp",2)
p(n,"gf6","f7",2)
p(n,"gft","fu",19)
p(n,"gfv","fw",5)
p(n,"gfN","fO",6)
p(n,"gfJ","fK",6)
p(n,"gfL","fM",6)
s(n=D.cU.prototype,"gcP",0,0,null,["$1","$0"],["cQ","fk"],0,0)
p(n,"gfz","fA",20)
r(n,"geT","eU",12)
r(n,"gfD","fE",12)
s(D.bs.prototype,"gek",0,0,null,["$1","$0"],["ae","el"],0,0)
o(V.J.prototype,"gj","b1",7)
o(V.C.prototype,"gj","b1",7)
o(V.bB.prototype,"gj","b1",7)
s(n=U.bR.prototype,"gbd",0,0,null,["$1","$0"],["N","aw"],0,0)
r(n,"gem","en",13)
r(n,"gfB","fC",13)
s(n=U.du.prototype,"gbd",0,0,null,["$1","$0"],["N","aw"],0,0)
p(n,"geL","eM",1)
p(n,"geN","eO",1)
p(n,"geP","eQ",1)
p(n,"geH","eI",1)
p(n,"geJ","eK",1)
p(n,"gh6","h7",1)
p(n,"gh4","h5",1)
p(n,"gh2","h3",1)
p(U.dv.prototype,"geR","eS",1)
s(n=M.cC.prototype,"gW",0,0,null,["$1","$0"],["T","aB"],0,0)
r(n,"gfF","fG",14)
r(n,"gfH","fI",14)
s(M.cE.prototype,"gW",0,0,null,["$1","$0"],["T","aB"],0,0)
s(n=M.cJ.prototype,"gW",0,0,null,["$1","$0"],["T","aB"],0,0)
r(n,"gf0","f1",4)
r(n,"gf2","f3",4)
s(M.cM.prototype,"gW",0,0,null,["$1","$0"],["T","aB"],0,0)
s(O.cN.prototype,"ga3",0,0,null,["$1","$0"],["v","af"],0,0)
s(n=O.cY.prototype,"ga3",0,0,null,["$1","$0"],["v","af"],0,0)
s(n,"gfU",0,0,null,["$1","$0"],["cS","fV"],0,0)
r(n,"geV","eW",15)
r(n,"geX","eY",15)
s(O.bW.prototype,"ga3",0,0,null,["$1","$0"],["v","af"],0,0)
s(n=O.di.prototype,"ga3",0,0,null,["$1","$0"],["v","af"],0,0)
r(n,"gfa","fb",16)
r(n,"gfc","fd",16)
s(O.b8.prototype,"ga3",0,0,null,["$1","$0"],["v","af"],0,0)
s(X.d4.prototype,"gcA",0,0,null,["$1","$0"],["a_","eq"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.a3,null)
s(P.a3,[H.jZ,J.a,J.a2,P.dN,P.i,H.cV,P.fo,H.cK,H.i8,H.eQ,H.hX,P.bp,H.bN,H.e3,P.aH,H.fv,H.fx,H.fq,P.e9,P.dx,P.dg,P.hE,P.dk,P.j9,P.iT,P.iO,P.dM,P.t,P.j1,P.fE,P.eM,P.j8,P.j7,P.bg,P.a7,P.ac,P.aV,P.h9,P.de,P.dF,P.fh,P.o,P.O,P.b5,P.u,P.M,P.bD,P.ia,P.iU,W.eU,W.eL,W.G,W.cL,P.iW,P.ee,P.iP,P.bx,T.eu,T.cO,T.cX,T.hn,R.df,R.dl,R.dm,R.hS,O.aE,O.bX,E.eF,E.aq,E.hf,E.dj,Z.dw,Z.bC,Z.aD,Z.bq,Z.ak,D.eI,D.aW,D.T,X.cB,X.cT,X.fs,X.fB,X.aj,X.h_,X.hT,X.dt,D.f0,D.a8,D.bs,D.hy,V.V,V.a_,V.f8,V.cZ,V.ai,V.a4,V.S,V.av,V.d8,V.J,V.C,V.bB,U.du,U.dv,M.cE,M.cJ,M.cM,M.ae,A.cz,A.ex,A.W,A.fk,A.cG,A.d5,A.dd,A.fK,A.ca,A.cb,A.cc,A.bn,A.dq,A.i3,F.aX,F.fb,F.bV,F.fu,F.c3,F.ho,F.hp,F.hq,F.hr,F.bd,F.il,F.im,F.iq,F.is,F.it,F.iu,O.dh,O.bW,O.fL,O.b8,T.hN,T.hP,X.hG,X.jP,X.fm,X.d4,V.eJ,V.hs])
s(J.a,[J.fp,J.cR,J.cS,J.b_,J.bU,J.b0,H.c0,H.b4,W.f,W.et,W.bl,W.ap,W.E,W.dz,W.ad,W.eY,W.f1,W.dB,W.cI,W.dD,W.f3,W.j,W.dG,W.aF,W.fl,W.dI,W.aG,W.fA,W.fU,W.dO,W.dP,W.aJ,W.dQ,W.dT,W.aL,W.dX,W.dZ,W.aO,W.e_,W.aP,W.e4,W.aw,W.e7,W.hR,W.aR,W.ea,W.hV,W.ig,W.eg,W.ei,W.ek,W.em,W.eo,P.b2,P.dK,P.b6,P.dV,P.hd,P.e5,P.b9,P.ec,P.ey,P.dy,P.d9,P.e1])
s(J.cS,[J.ha,J.bA,J.b1])
t(J.jY,J.b_)
s(J.bU,[J.cQ,J.cP])
t(P.fz,P.dN)
s(P.fz,[H.dr,W.iF,W.iE,P.fd])
t(H.N,H.dr)
s(P.i,[H.f6,H.fF,H.iy])
s(P.fo,[H.fG,H.iz])
t(H.eR,H.eQ)
s(P.bp,[H.h6,H.fr,H.i7,H.eH,H.hl,P.d3,P.an,P.i9,P.i5,P.hA,P.eP,P.eX])
s(H.bN,[H.jI,H.hH,H.jr,H.js,H.jt,P.iB,P.iA,P.iC,P.iD,P.j0,P.j_,P.ji,P.iR,P.iS,P.fy,P.fD,P.f4,P.f5,P.ie,P.ib,P.ic,P.id,P.j2,P.j3,P.j5,P.j4,P.jd,P.jc,P.je,P.jf,W.fW,W.fY,W.hk,W.hD,W.iJ,P.iY,P.jj,P.fe,P.ff,P.eA,E.hg,E.hh,E.hi,E.hQ,D.f9,D.fa,F.ja,F.jE,F.jF,F.jo,F.jp,F.iw,F.iv,F.io,F.ip,O.fO,O.fP,O.fQ,O.fR,O.fS,O.fT,T.hO,V.eK,V.jD,V.hu,V.ht,K.jv,K.jw,K.jx,K.jy,K.jz,K.jA,K.jB])
s(H.hH,[H.hB,H.bL])
t(P.fC,P.aH)
t(H.K,P.fC)
t(H.fw,H.f6)
t(H.d_,H.b4)
s(H.d_,[H.cf,H.ch])
t(H.cg,H.cf)
t(H.c1,H.cg)
t(H.ci,H.ch)
t(H.d0,H.ci)
s(H.d0,[H.h0,H.h1,H.h2,H.h3,H.h4,H.d1,H.c2])
t(P.iQ,P.j9)
t(P.iN,P.iT)
t(P.ef,P.fE)
t(P.ds,P.ef)
s(P.eM,[P.eD,P.f7])
t(P.eS,P.hE)
s(P.eS,[P.eE,P.ij,P.ii])
t(P.ih,P.f7)
s(P.ac,[P.F,P.v])
s(P.an,[P.bu,P.fn])
t(P.iH,P.bD)
s(W.f,[W.D,W.fc,W.bZ,W.aN,W.cj,W.aQ,W.ax,W.cl,W.ix,W.ce,P.eB,P.bk])
s(W.D,[W.X,W.aU])
s(W.X,[W.l,P.k])
s(W.l,[W.ev,W.ew,W.bm,W.fg,W.bT,W.hm])
t(W.eT,W.ap)
t(W.bO,W.dz)
s(W.ad,[W.eV,W.eW])
t(W.dC,W.dB)
t(W.cH,W.dC)
t(W.dE,W.dD)
t(W.f2,W.dE)
t(W.ar,W.bl)
t(W.dH,W.dG)
t(W.bQ,W.dH)
t(W.dJ,W.dI)
t(W.bS,W.dJ)
t(W.ba,W.j)
s(W.ba,[W.br,W.au,W.bw])
t(W.fV,W.dO)
t(W.fX,W.dP)
t(W.dR,W.dQ)
t(W.fZ,W.dR)
t(W.dU,W.dT)
t(W.d2,W.dU)
t(W.dY,W.dX)
t(W.hb,W.dY)
t(W.hj,W.dZ)
t(W.ck,W.cj)
t(W.hw,W.ck)
t(W.e0,W.e_)
t(W.hx,W.e0)
t(W.hC,W.e4)
t(W.e8,W.e7)
t(W.hI,W.e8)
t(W.cm,W.cl)
t(W.hJ,W.cm)
t(W.eb,W.ea)
t(W.hU,W.eb)
t(W.be,W.au)
t(W.eh,W.eg)
t(W.iG,W.eh)
t(W.dA,W.cI)
t(W.ej,W.ei)
t(W.iK,W.ej)
t(W.el,W.ek)
t(W.dS,W.el)
t(W.en,W.em)
t(W.iV,W.en)
t(W.ep,W.eo)
t(W.iZ,W.ep)
t(W.iI,P.dg)
t(P.iX,P.iW)
t(P.aa,P.iP)
t(P.dL,P.dK)
t(P.ft,P.dL)
t(P.dW,P.dV)
t(P.h7,P.dW)
t(P.e6,P.e5)
t(P.hF,P.e6)
t(P.ed,P.ec)
t(P.hW,P.ed)
t(P.ez,P.dy)
t(P.h8,P.bk)
t(P.e2,P.e1)
t(P.hz,P.e2)
s(T.cO,[T.aK,R.dp])
s(E.eF,[Z.cA,A.db,T.bv])
s(D.T,[D.aY,D.aZ,D.n,X.hc])
s(X.hc,[X.cW,X.b3,X.c_,X.dn])
s(O.aE,[D.cU,U.bR,M.cC])
s(D.eI,[U.eO,U.a9])
s(U.a9,[U.cD,U.da])
s(A.db,[A.f_,A.fj,A.fH,A.hM])
s(A.dq,[A.bb,A.i0,A.i1,A.i2,A.i_,A.P,A.az,A.I,A.bc,A.i4,A.by,A.Z,A.Q,A.bz])
t(F.hv,F.fb)
t(F.hZ,F.fu)
t(F.ir,F.is)
t(F.h5,F.it)
s(O.dh,[O.eZ,O.cN,O.cY,O.di])
s(O.bW,[O.fI,O.fJ,O.as])
s(O.as,[O.fM,O.fN])
t(T.hK,T.bv)
t(T.hL,T.hK)
s(X.hG,[X.eC,X.fi])
u(H.dr,H.i8)
u(H.cf,P.t)
u(H.cg,H.cK)
u(H.ch,P.t)
u(H.ci,H.cK)
u(P.dN,P.t)
u(P.ef,P.j1)
u(W.dz,W.eU)
u(W.dB,P.t)
u(W.dC,W.G)
u(W.dD,P.t)
u(W.dE,W.G)
u(W.dG,P.t)
u(W.dH,W.G)
u(W.dI,P.t)
u(W.dJ,W.G)
u(W.dO,P.aH)
u(W.dP,P.aH)
u(W.dQ,P.t)
u(W.dR,W.G)
u(W.dT,P.t)
u(W.dU,W.G)
u(W.dX,P.t)
u(W.dY,W.G)
u(W.dZ,P.aH)
u(W.cj,P.t)
u(W.ck,W.G)
u(W.e_,P.t)
u(W.e0,W.G)
u(W.e4,P.aH)
u(W.e7,P.t)
u(W.e8,W.G)
u(W.cl,P.t)
u(W.cm,W.G)
u(W.ea,P.t)
u(W.eb,W.G)
u(W.eg,P.t)
u(W.eh,W.G)
u(W.ei,P.t)
u(W.ej,W.G)
u(W.ek,P.t)
u(W.el,W.G)
u(W.em,P.t)
u(W.en,W.G)
u(W.eo,P.t)
u(W.ep,W.G)
u(P.dK,P.t)
u(P.dL,W.G)
u(P.dV,P.t)
u(P.dW,W.G)
u(P.e5,P.t)
u(P.e6,W.G)
u(P.ec,P.t)
u(P.ed,W.G)
u(P.dy,P.aH)
u(P.e1,P.t)
u(P.e2,W.G)})()
var v={mangledGlobalNames:{v:"int",F:"double",ac:"num",u:"String",bg:"bool",b5:"Null",o:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.T]},{func:1,ret:-1,args:[D.T]},{func:1,ret:-1,args:[W.au]},{func:1,ret:P.b5,args:[,,]},{func:1,ret:-1,args:[P.v,[P.i,E.aq]]},{func:1,ret:-1,args:[W.j]},{func:1,ret:-1,args:[W.bw]},{func:1,ret:P.F},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.br]},{func:1,ret:-1,args:[P.v,[P.i,D.a8]]},{func:1,ret:-1,args:[P.v,[P.i,U.a9]]},{func:1,ret:-1,args:[P.v,[P.i,M.ae]]},{func:1,ret:-1,args:[P.v,[P.i,V.ai]]},{func:1,ret:-1,args:[P.v,[P.i,O.b8]]},{func:1,ret:P.b5,args:[,]},{func:1,ret:P.bx,args:[,,]},{func:1,ret:-1,args:[W.be]},{func:1,ret:P.bg,args:[[P.i,D.a8]]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.i=W.bm.prototype
C.N=J.a.prototype
C.b=J.b_.prototype
C.O=J.cP.prototype
C.d=J.cQ.prototype
C.j=J.cR.prototype
C.c=J.bU.prototype
C.a=J.b0.prototype
C.P=J.b1.prototype
C.x=J.ha.prototype
C.y=P.d9.prototype
C.q=J.bA.prototype
C.z=W.be.prototype
C.A=W.ce.prototype
C.V=new P.eE()
C.B=new P.eD()
C.r=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.C=function() {
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
C.H=function(getTagFallback) {
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
C.D=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.E=function(hooks) {
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
C.G=function(hooks) {
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
C.F=function(hooks) {
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
C.t=function(hooks) { return hooks; }

C.I=new P.h9()
C.e=new P.ih()
C.J=new P.ij()
C.f=new P.iQ()
C.n=new A.bn(0,"ColorBlendType.Overwrite")
C.K=new A.bn(1,"ColorBlendType.Additive")
C.L=new A.bn(2,"ColorBlendType.Average")
C.o=new A.bn(3,"ColorBlendType.AlphaBlend")
C.p=new P.aV(0)
C.M=new P.aV(5e6)
C.u=H.c(u([127,2047,65535,1114111]),[P.v])
C.k=H.c(u([0,0,32776,33792,1,10240,0,0]),[P.v])
C.l=H.c(u([0,0,65490,45055,65535,34815,65534,18431]),[P.v])
C.m=H.c(u([0,0,26624,1023,65534,2047,65534,2047]),[P.v])
C.R=H.c(u([0,0,32722,12287,65534,34815,65534,18431]),[P.v])
C.S=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.v])
C.h=H.c(u([0,0,24576,1023,65534,34815,65534,18431]),[P.v])
C.v=H.c(u([0,0,32754,11263,65534,34815,65534,18431]),[P.v])
C.T=H.c(u([0,0,32722,12287,65535,34815,65534,18431]),[P.v])
C.w=H.c(u([0,0,65490,12287,65535,34815,65534,18431]),[P.v])
C.Q=H.c(u([]),[P.u])
C.U=new H.eR(0,{},C.Q,[P.u,P.u])})();(function staticFields(){$.ao=0
$.bM=null
$.ku=null
$.lp=null
$.ll=null
$.lt=null
$.jk=null
$.ju=null
$.kj=null
$.bG=null
$.cp=null
$.cq=null
$.ke=!1
$.al=C.f
$.a5=[]
$.kI=null
$.bY=null
$.kP=null
$.c4=null
$.c8=null
$.l3=null
$.l1=null
$.l2=null
$.l6=null
$.l5=null
$.l4=null
$.l7=null
$.kO=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"ob","lA",function(){return H.ln("_$dart_dartClosure")})
u($,"oc","km",function(){return H.ln("_$dart_js")})
u($,"od","lB",function(){return H.ay(H.hY({
toString:function(){return"$receiver$"}}))})
u($,"oe","lC",function(){return H.ay(H.hY({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"of","lD",function(){return H.ay(H.hY(null))})
u($,"og","lE",function(){return H.ay(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"oj","lH",function(){return H.ay(H.hY(void 0))})
u($,"ok","lI",function(){return H.ay(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"oi","lG",function(){return H.ay(H.kY(null))})
u($,"oh","lF",function(){return H.ay(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"om","lK",function(){return H.ay(H.kY(void 0))})
u($,"ol","lJ",function(){return H.ay(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"oA","kp",function(){return P.mP()})
u($,"on","lL",function(){return P.mM()})
u($,"oB","lN",function(){return H.mi(H.bF(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.v])))})
u($,"oC","lO",function(){return P.mx("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"oD","lP",function(){return P.nb()})
u($,"ou","lM",function(){return Z.af(0)})
u($,"oo","kn",function(){return Z.af(511)})
u($,"ow","a1",function(){return Z.af(1)})
u($,"ov","am",function(){return Z.af(2)})
u($,"oq","aC",function(){return Z.af(4)})
u($,"ox","ag",function(){return Z.af(8)})
u($,"oy","aT",function(){return Z.af(16)})
u($,"or","cu",function(){return Z.af(32)})
u($,"os","cv",function(){return Z.af(64)})
u($,"ot","ko",function(){return Z.af(96)})
u($,"oz","bi",function(){return Z.af(128)})
u($,"op","aB",function(){return Z.af(256)})
u($,"oa","lz",function(){return new V.f8(1e-9)})
u($,"o9","w",function(){return $.lz()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.c0,DataView:H.b4,ArrayBufferView:H.b4,Float32Array:H.c1,Float64Array:H.c1,Int16Array:H.h0,Int32Array:H.h1,Int8Array:H.h2,Uint16Array:H.h3,Uint32Array:H.h4,Uint8ClampedArray:H.d1,CanvasPixelArray:H.d1,Uint8Array:H.c2,HTMLAudioElement:W.l,HTMLBRElement:W.l,HTMLBaseElement:W.l,HTMLBodyElement:W.l,HTMLButtonElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLDivElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLInputElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMediaElement:W.l,HTMLMenuElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTableElement:W.l,HTMLTableRowElement:W.l,HTMLTableSectionElement:W.l,HTMLTemplateElement:W.l,HTMLTextAreaElement:W.l,HTMLTimeElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLVideoElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLFrameSetElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,AccessibleNodeList:W.et,HTMLAnchorElement:W.ev,HTMLAreaElement:W.ew,Blob:W.bl,HTMLCanvasElement:W.bm,CDATASection:W.aU,CharacterData:W.aU,Comment:W.aU,ProcessingInstruction:W.aU,Text:W.aU,CSSPerspective:W.eT,CSSCharsetRule:W.E,CSSConditionRule:W.E,CSSFontFaceRule:W.E,CSSGroupingRule:W.E,CSSImportRule:W.E,CSSKeyframeRule:W.E,MozCSSKeyframeRule:W.E,WebKitCSSKeyframeRule:W.E,CSSKeyframesRule:W.E,MozCSSKeyframesRule:W.E,WebKitCSSKeyframesRule:W.E,CSSMediaRule:W.E,CSSNamespaceRule:W.E,CSSPageRule:W.E,CSSRule:W.E,CSSStyleRule:W.E,CSSSupportsRule:W.E,CSSViewportRule:W.E,CSSStyleDeclaration:W.bO,MSStyleCSSProperties:W.bO,CSS2Properties:W.bO,CSSImageValue:W.ad,CSSKeywordValue:W.ad,CSSNumericValue:W.ad,CSSPositionValue:W.ad,CSSResourceValue:W.ad,CSSUnitValue:W.ad,CSSURLImageValue:W.ad,CSSStyleValue:W.ad,CSSMatrixComponent:W.ap,CSSRotation:W.ap,CSSScale:W.ap,CSSSkew:W.ap,CSSTranslation:W.ap,CSSTransformComponent:W.ap,CSSTransformValue:W.eV,CSSUnparsedValue:W.eW,DataTransferItemList:W.eY,DOMException:W.f1,ClientRectList:W.cH,DOMRectList:W.cH,DOMRectReadOnly:W.cI,DOMStringList:W.f2,DOMTokenList:W.f3,Element:W.X,AbortPaymentEvent:W.j,AnimationEvent:W.j,AnimationPlaybackEvent:W.j,ApplicationCacheErrorEvent:W.j,BackgroundFetchClickEvent:W.j,BackgroundFetchEvent:W.j,BackgroundFetchFailEvent:W.j,BackgroundFetchedEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,CanMakePaymentEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,ForeignFetchEvent:W.j,GamepadEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,MutationEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PaymentRequestEvent:W.j,PaymentRequestUpdateEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCPeerConnectionIceEvent:W.j,RTCTrackEvent:W.j,SecurityPolicyViolationEvent:W.j,SensorErrorEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,VRDeviceEvent:W.j,VRDisplayEvent:W.j,VRSessionEvent:W.j,MojoInterfaceRequestEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.ar,FileList:W.bQ,FileWriter:W.fc,HTMLFormElement:W.fg,Gamepad:W.aF,History:W.fl,HTMLCollection:W.bS,HTMLFormControlsCollection:W.bS,HTMLOptionsCollection:W.bS,ImageData:W.aG,HTMLImageElement:W.bT,KeyboardEvent:W.br,Location:W.fA,MediaList:W.fU,MessagePort:W.bZ,MIDIInputMap:W.fV,MIDIOutputMap:W.fX,MimeType:W.aJ,MimeTypeArray:W.fZ,PointerEvent:W.au,MouseEvent:W.au,DragEvent:W.au,Document:W.D,DocumentFragment:W.D,HTMLDocument:W.D,ShadowRoot:W.D,XMLDocument:W.D,Attr:W.D,DocumentType:W.D,Node:W.D,NodeList:W.d2,RadioNodeList:W.d2,Plugin:W.aL,PluginArray:W.hb,RTCStatsReport:W.hj,HTMLSelectElement:W.hm,SourceBuffer:W.aN,SourceBufferList:W.hw,SpeechGrammar:W.aO,SpeechGrammarList:W.hx,SpeechRecognitionResult:W.aP,Storage:W.hC,CSSStyleSheet:W.aw,StyleSheet:W.aw,TextTrack:W.aQ,TextTrackCue:W.ax,VTTCue:W.ax,TextTrackCueList:W.hI,TextTrackList:W.hJ,TimeRanges:W.hR,Touch:W.aR,TouchEvent:W.bw,TouchList:W.hU,TrackDefaultList:W.hV,CompositionEvent:W.ba,FocusEvent:W.ba,TextEvent:W.ba,UIEvent:W.ba,URL:W.ig,VideoTrackList:W.ix,WheelEvent:W.be,Window:W.ce,DOMWindow:W.ce,CSSRuleList:W.iG,ClientRect:W.dA,DOMRect:W.dA,GamepadList:W.iK,NamedNodeMap:W.dS,MozNamedAttrMap:W.dS,SpeechRecognitionResultList:W.iV,StyleSheetList:W.iZ,SVGLength:P.b2,SVGLengthList:P.ft,SVGNumber:P.b6,SVGNumberList:P.h7,SVGPointList:P.hd,SVGStringList:P.hF,SVGAElement:P.k,SVGAnimateElement:P.k,SVGAnimateMotionElement:P.k,SVGAnimateTransformElement:P.k,SVGAnimationElement:P.k,SVGCircleElement:P.k,SVGClipPathElement:P.k,SVGDefsElement:P.k,SVGDescElement:P.k,SVGDiscardElement:P.k,SVGEllipseElement:P.k,SVGFEBlendElement:P.k,SVGFEColorMatrixElement:P.k,SVGFEComponentTransferElement:P.k,SVGFECompositeElement:P.k,SVGFEConvolveMatrixElement:P.k,SVGFEDiffuseLightingElement:P.k,SVGFEDisplacementMapElement:P.k,SVGFEDistantLightElement:P.k,SVGFEFloodElement:P.k,SVGFEFuncAElement:P.k,SVGFEFuncBElement:P.k,SVGFEFuncGElement:P.k,SVGFEFuncRElement:P.k,SVGFEGaussianBlurElement:P.k,SVGFEImageElement:P.k,SVGFEMergeElement:P.k,SVGFEMergeNodeElement:P.k,SVGFEMorphologyElement:P.k,SVGFEOffsetElement:P.k,SVGFEPointLightElement:P.k,SVGFESpecularLightingElement:P.k,SVGFESpotLightElement:P.k,SVGFETileElement:P.k,SVGFETurbulenceElement:P.k,SVGFilterElement:P.k,SVGForeignObjectElement:P.k,SVGGElement:P.k,SVGGeometryElement:P.k,SVGGraphicsElement:P.k,SVGImageElement:P.k,SVGLineElement:P.k,SVGLinearGradientElement:P.k,SVGMarkerElement:P.k,SVGMaskElement:P.k,SVGMetadataElement:P.k,SVGPathElement:P.k,SVGPatternElement:P.k,SVGPolygonElement:P.k,SVGPolylineElement:P.k,SVGRadialGradientElement:P.k,SVGRectElement:P.k,SVGScriptElement:P.k,SVGSetElement:P.k,SVGStopElement:P.k,SVGStyleElement:P.k,SVGElement:P.k,SVGSVGElement:P.k,SVGSwitchElement:P.k,SVGSymbolElement:P.k,SVGTSpanElement:P.k,SVGTextContentElement:P.k,SVGTextElement:P.k,SVGTextPathElement:P.k,SVGTextPositioningElement:P.k,SVGTitleElement:P.k,SVGUseElement:P.k,SVGViewElement:P.k,SVGGradientElement:P.k,SVGComponentTransferFunctionElement:P.k,SVGFEDropShadowElement:P.k,SVGMPathElement:P.k,SVGTransform:P.b9,SVGTransformList:P.hW,AudioBuffer:P.ey,AudioParamMap:P.ez,AudioTrackList:P.eB,AudioContext:P.bk,webkitAudioContext:P.bk,BaseAudioContext:P.bk,OfflineAudioContext:P.h8,WebGL2RenderingContext:P.d9,SQLResultSetRowList:P.hz})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.d_.$nativeSuperclassTag="ArrayBufferView"
H.cf.$nativeSuperclassTag="ArrayBufferView"
H.cg.$nativeSuperclassTag="ArrayBufferView"
H.c1.$nativeSuperclassTag="ArrayBufferView"
H.ch.$nativeSuperclassTag="ArrayBufferView"
H.ci.$nativeSuperclassTag="ArrayBufferView"
H.d0.$nativeSuperclassTag="ArrayBufferView"
W.cj.$nativeSuperclassTag="EventTarget"
W.ck.$nativeSuperclassTag="EventTarget"
W.cl.$nativeSuperclassTag="EventTarget"
W.cm.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(K.lr,[])
else K.lr([])})})()
//# sourceMappingURL=test.dart.js.map
