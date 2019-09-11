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
a[c]=function(){a[c]=function(){H.p9(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.l9"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.l9"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.l9(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={kM:function kM(){},
k3:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
lw:function(){return new P.hR("No element")},
dK:function(a,b,c,d,e){if(c-b<=32)H.nB(a,b,c,d,e)
else H.nA(a,b,c,d,e)},
nB:function(a,b,c,d,e){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.b(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.b(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.X()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.b(a,q)
C.a.k(a,s,a[q])
s=q}C.a.k(a,s,t)}},
nA:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.d.a0(a4-a3+1,6),d=a3+e,c=a4-e,b=C.d.a0(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
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
if(typeof a1!=="number")return a1.X()
if(a1>0){p=t
t=u
u=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.X()
if(a1>0){p=q
q=r
r=p}a1=a5.$2(u,s)
if(typeof a1!=="number")return a1.X()
if(a1>0){p=s
s=u
u=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.X()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(u,r)
if(typeof a1!=="number")return a1.X()
if(a1>0){p=r
r=u
u=p}a1=a5.$2(s,r)
if(typeof a1!=="number")return a1.X()
if(a1>0){p=r
r=s
s=p}a1=a5.$2(t,q)
if(typeof a1!=="number")return a1.X()
if(a1>0){p=q
q=t
t=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.X()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.X()
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
if(J.K(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.M()
if(k<0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.a.k(a2,m,a2[o])
C.a.k(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.X()
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
if(typeof g!=="number")return g.M()
if(g<0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.a.k(a2,m,a2[o])
C.a.k(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.X()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.X()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.M()
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
H.dK(a2,a3,o-2,a5,a6)
H.dK(a2,n+2,a4,a5,a6)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.b(a2,o)
if(!J.K(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.b(a2,n)
if(!J.K(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.a.k(a2,m,a2[o])
C.a.k(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.M()
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
break}}}H.dK(a2,o,n,a5,a6)}else H.dK(a2,o,n,a5,a6)},
a3:function a3(a){this.a=a},
fs:function fs(){},
ds:function ds(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
fX:function fX(a,b,c){this.a=a
this.b=b
this.$ti=c},
fY:function fY(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
iY:function iY(a,b,c){this.a=a
this.b=b
this.$ti=c},
iZ:function iZ(a,b,c){this.a=a
this.b=b
this.$ti=c},
bM:function bM(){},
cJ:function cJ(){},
dU:function dU(){},
n1:function(){throw H.c(P.F("Cannot modify unmodifiable Map"))},
cc:function(a){var u,t=H.pb(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
oT:function(a){return v.types[H.ab(a)]},
oY:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.P(a).$iI},
j:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aq(a)
if(typeof u!=="string")throw H.c(H.aC(a))
return u},
cy:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
ns:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.b(p,3)
u=H.U(p[3])
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.ad(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.b.F(s,q)|32)>t)return}return parseInt(a,b)},
cz:function(a){return H.nj(a)+H.l6(H.bD(a),0,null)},
nj:function(a){var u,t,s,r,q,p,o,n=J.P(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.J||!!n.$ic1){r=C.q(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cc(t.length>1&&C.b.F(t,0)===36?C.b.ad(t,1):t)},
nk:function(){if(!!self.location)return self.location.href
return},
lH:function(a){var u,t,s,r,q=J.aF(a)
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
nt:function(a){var u,t,s,r=H.e([],[P.l])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.x)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aC(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.d.aH(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.c(H.aC(s))}return H.lH(r)},
lI:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aC(s))
if(s<0)throw H.c(H.aC(s))
if(s>65535)return H.nt(a)}return H.lH(a)},
nu:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
dF:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.aH(u,10))>>>0,56320|u&1023)}}throw H.c(P.ad(a,0,1114111,null,null))},
bS:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nr:function(a){var u=H.bS(a).getFullYear()+0
return u},
np:function(a){var u=H.bS(a).getMonth()+1
return u},
nl:function(a){var u=H.bS(a).getDate()+0
return u},
nm:function(a){var u=H.bS(a).getHours()+0
return u},
no:function(a){var u=H.bS(a).getMinutes()+0
return u},
nq:function(a){var u=H.bS(a).getSeconds()+0
return u},
nn:function(a){var u=H.bS(a).getMilliseconds()+0
return u},
p:function(a){throw H.c(H.aC(a))},
b:function(a,b){if(a==null)J.aF(a)
throw H.c(H.c8(a,b))},
c8:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aU(!0,b,s,null)
u=H.ab(J.aF(a))
if(!(b<0)){if(typeof u!=="number")return H.p(u)
t=b>=u}else t=!0
if(t)return P.W(b,a,s,null,u)
return P.dH(b,s)},
oO:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bT(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bT(a,c,!0,b,"end",u)
return new P.aU(!0,b,"end",null)},
aC:function(a){return new P.aU(!0,a,null,null)},
oH:function(a){if(typeof a!=="number")throw H.c(H.aC(a))
return a},
c:function(a){var u
if(a==null)a=new P.dC()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.my})
u.name=""}else u.toString=H.my
return u},
my:function(){return J.aq(this.dartException)},
v:function(a){throw H.c(a)},
x:function(a){throw H.c(P.bp(a))},
b6:function(a){var u,t,s,r,q,p
a=H.mw(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.e([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.ii(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
ij:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
lS:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lC:function(a,b){return new H.ho(a,b==null?null:b.method)},
kN:function(a,b){var u=b==null,t=u?null:b.method
return new H.fJ(a,t,u?null:b.receiver)},
aE:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.kz(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.aH(t,16)&8191)===10)switch(s){case 438:return f.$1(H.kN(H.j(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.lC(H.j(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.mB()
q=$.mC()
p=$.mD()
o=$.mE()
n=$.mH()
m=$.mI()
l=$.mG()
$.mF()
k=$.mK()
j=$.mJ()
i=r.a9(u)
if(i!=null)return f.$1(H.kN(H.U(u),i))
else{i=q.a9(u)
if(i!=null){i.method="call"
return f.$1(H.kN(H.U(u),i))}else{i=p.a9(u)
if(i==null){i=o.a9(u)
if(i==null){i=n.a9(u)
if(i==null){i=m.a9(u)
if(i==null){i=l.a9(u)
if(i==null){i=o.a9(u)
if(i==null){i=k.a9(u)
if(i==null){i=j.a9(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.lC(H.U(u),i))}}return f.$1(new H.iw(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dM()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aU(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dM()
return a},
ca:function(a){var u
if(a==null)return new H.ex(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.ex(a)},
oS:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.k(0,a[u],a[t])}return b},
oX:function(a,b,c,d,e,f){H.f(a,"$ikI")
switch(H.ab(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.B("Unsupported number of arguments for wrapped closure"))},
c7:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.oX)
a.$identity=u
return u},
n0:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hS().constructor.prototype):Object.create(new H.ce(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aV
if(typeof t!=="number")return t.v()
$.aV=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.lq(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.mX(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.lq(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
mX:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.oT,a)
if(typeof a=="function")if(b)return a
else{u=c?H.lp:H.kE
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.c("Error in functionType of tearoff")},
mY:function(a,b,c,d){var u=H.kE
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lq:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.n_(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mY(t,!r,u,b)
if(t===0){r=$.aV
if(typeof r!=="number")return r.v()
$.aV=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cf
return new Function(r+H.j(q==null?$.cf=H.fa("self"):q)+";return "+p+"."+H.j(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aV
if(typeof r!=="number")return r.v()
$.aV=r+1
o+=r
r="return function("+o+"){return this."
q=$.cf
return new Function(r+H.j(q==null?$.cf=H.fa("self"):q)+"."+H.j(u)+"("+o+");}")()},
mZ:function(a,b,c,d){var u=H.kE,t=H.lp
switch(b?-1:a){case 0:throw H.c(H.ny("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
n_:function(a,b){var u,t,s,r,q,p,o,n=$.cf
if(n==null)n=$.cf=H.fa("self")
u=$.lo
if(u==null)u=$.lo=H.fa("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.mZ(s,!q,t,b)
if(s===1){n="return function(){return this."+H.j(n)+"."+H.j(t)+"(this."+H.j(u)+");"
u=$.aV
if(typeof u!=="number")return u.v()
$.aV=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.j(n)+"."+H.j(t)+"(this."+H.j(u)+", "+o+");"
u=$.aV
if(typeof u!=="number")return u.v()
$.aV=u+1
return new Function(n+u+"}")()},
l9:function(a,b,c,d,e,f,g){return H.n0(a,b,c,d,!!e,!!f,g)},
kE:function(a){return a.a},
lp:function(a){return a.c},
fa:function(a){var u,t,s,r=new H.ce("self","target","receiver","name"),q=J.kK(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
E:function(a){if(a==null)H.oD("boolean expression must not be null")
return a},
U:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.aS(a,"String"))},
oP:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aS(a,"double"))},
ms:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aS(a,"num"))},
mj:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.aS(a,"bool"))},
ab:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.aS(a,"int"))},
mu:function(a,b){throw H.c(H.aS(a,H.cc(H.U(b).substring(2))))},
p3:function(a,b){throw H.c(H.mW(a,H.cc(H.U(b).substring(2))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.P(a)[b])return a
H.mu(a,b)},
w:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.P(a)[b]
else u=!0
if(u)return a
H.p3(a,b)},
pT:function(a){if(a==null)return a
if(!!J.P(a).$id)return a
throw H.c(H.aS(a,"List<dynamic>"))},
mq:function(a,b){var u
if(a==null)return a
u=J.P(a)
if(!!u.$id)return a
if(u[b])return a
H.mu(a,b)},
ml:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ab(u)]
else return a.$S()}return},
eV:function(a,b){var u
if(typeof a=="function")return!0
u=H.ml(J.P(a))
if(u==null)return!1
return H.m8(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.l3)return a
$.l3=!0
try{if(H.eV(a,b))return a
u=H.kt(b)
t=H.aS(a,u)
throw H.c(t)}finally{$.l3=!1}},
la:function(a,b){if(a!=null&&!H.l8(a,b))H.v(H.aS(a,H.kt(b)))
return a},
aS:function(a,b){return new H.ik("TypeError: "+P.di(a)+": type '"+H.j(H.me(a))+"' is not a subtype of type '"+b+"'")},
mW:function(a,b){return new H.fb("CastError: "+P.di(a)+": type '"+H.j(H.me(a))+"' is not a subtype of type '"+b+"'")},
me:function(a){var u,t=J.P(a)
if(!!t.$ich){u=H.ml(t)
if(u!=null)return H.kt(u)
return"Closure"}return H.cz(a)},
oD:function(a){throw H.c(new H.j_(a))},
p9:function(a){throw H.c(new P.fl(a))},
ny:function(a){return new H.hE(a)},
mn:function(a){return v.getIsolateTag(a)},
e:function(a,b){a.$ti=b
return a},
bD:function(a){if(a==null)return
return a.$ti},
pS:function(a,b,c){return H.cb(a["$a"+H.j(c)],H.bD(b))},
bC:function(a,b,c,d){var u=H.cb(a["$a"+H.j(c)],H.bD(b))
return u==null?null:u[d]},
aD:function(a,b,c){var u=H.cb(a["$a"+H.j(b)],H.bD(a))
return u==null?null:u[c]},
t:function(a,b){var u=H.bD(a)
return u==null?null:u[b]},
kt:function(a){return H.bB(a,null)},
bB:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cc(a[0].name)+H.l6(a,1,b)
if(typeof a=="function")return H.cc(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ab(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.b(b,t)
return H.j(b[t])}if('func' in a)return H.oc(a,b)
if('futureOr' in a)return"FutureOr<"+H.bB("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
oc:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.e([],[P.h])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.b(a0,m)
p=C.b.v(p,a0[m])
l=u[q]
if(l!=null&&l!==P.O)p+=" extends "+H.bB(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bB(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bB(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bB(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.oR(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.U(n[g])
i=i+h+H.bB(d[c],a0)+(" "+H.j(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
l6:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.a4("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bB(p,c)}return"<"+u.i(0)+">"},
cb:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
l7:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.bD(a)
t=J.P(a)
if(t[b]==null)return!1
return H.mh(H.cb(t[d],u),null,c,null)},
o:function(a,b,c,d){if(a==null)return a
if(H.l7(a,b,c,d))return a
throw H.c(H.aS(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cc(b.substring(2))+H.l6(c,0,null),v.mangledGlobalNames)))},
mh:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aB(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aB(a[t],b,c[t],d))return!1
return!0},
pQ:function(a,b,c){return a.apply(b,H.cb(J.P(b)["$a"+H.j(c)],H.bD(b)))},
mp:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="O"||a.name==="G"||a===-1||a===-2||H.mp(u)}return!1},
l8:function(a,b){var u,t
if(a==null)return b==null||b.name==="O"||b.name==="G"||b===-1||b===-2||H.mp(b)
if(b==null||b===-1||b.name==="O"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.l8(a,"type" in b?b.type:null))return!0
if('func' in b)return H.eV(a,b)}u=J.P(a).constructor
t=H.bD(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aB(u,null,b,null)},
C:function(a,b){if(a!=null&&!H.l8(a,b))throw H.c(H.aS(a,H.kt(b)))
return a},
aB:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="O"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="O"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aB(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="G")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aB("type" in a?a.type:l,b,s,d)
else if(H.aB(a,b,s,d))return!0
else{if(!('$i'+"cl" in t.prototype))return!1
r=t.prototype["$a"+"cl"]
q=H.cb(r,u?a.slice(1):l)
return H.aB(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.m8(a,b,c,d)
if('func' in a)return c.name==="kI"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.mh(H.cb(m,u),b,p,d)},
m8:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aB(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aB(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aB(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aB(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.p1(h,b,g,d)},
p1:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aB(c[s],d,a[s],b))return!1}return!0},
pR:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
p_:function(a){var u,t,s,r,q=H.U($.mo.$1(a)),p=$.jZ[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.k7[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.U($.mg.$2(a,q))
if(q!=null){p=$.jZ[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.k7[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.ks(u)
$.jZ[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.k7[q]=u
return u}if(s==="-"){r=H.ks(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.mt(a,u)
if(s==="*")throw H.c(P.iv(q))
if(v.leafTags[q]===true){r=H.ks(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.mt(a,u)},
mt:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.le(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
ks:function(a){return J.le(a,!1,null,!!a.$iI)},
p0:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.ks(u)
else return J.le(u,c,null,null)},
oV:function(){if(!0===$.ld)return
$.ld=!0
H.oW()},
oW:function(){var u,t,s,r,q,p,o,n
$.jZ=Object.create(null)
$.k7=Object.create(null)
H.oU()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.mv.$1(q)
if(p!=null){o=H.p0(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
oU:function(){var u,t,s,r,q,p,o=C.A()
o=H.c6(C.B,H.c6(C.C,H.c6(C.r,H.c6(C.r,H.c6(C.D,H.c6(C.E,H.c6(C.F(C.q),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.mo=new H.k4(r)
$.mg=new H.k5(q)
$.mv=new H.k6(p)},
c6:function(a,b){return a(b)||b},
n9:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.c(P.a0("Illegal RegExp pattern ("+String(p)+")",a,null))},
p7:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
oQ:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mw:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
mx:function(a,b,c){var u=H.p8(a,b,c)
return u},
p8:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.mw(b),'g'),H.oQ(c))},
ff:function ff(){},
fg:function fg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ii:function ii(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ho:function ho(a,b){this.a=a
this.b=b},
fJ:function fJ(a,b,c){this.a=a
this.b=b
this.c=c},
iw:function iw(a){this.a=a},
kz:function kz(a){this.a=a},
ex:function ex(a){this.a=a
this.b=null},
ch:function ch(){},
i_:function i_(){},
hS:function hS(){},
ce:function ce(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ik:function ik(a){this.a=a},
fb:function fb(a){this.a=a},
hE:function hE(a){this.a=a},
j_:function j_(a){this.a=a},
Z:function Z(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fN:function fN(a,b){this.a=a
this.b=b
this.c=null},
fO:function fO(a,b){this.a=a
this.$ti=b},
fP:function fP(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
k4:function k4(a){this.a=a},
k5:function k5(a){this.a=a},
k6:function k6(a){this.a=a},
fI:function fI(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
c4:function(a){return a},
ni:function(a){return new Int8Array(a)},
b9:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.c8(b,a))},
oa:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.oO(a,b,c))
return b},
ct:function ct(){},
bw:function bw(){},
dz:function dz(){},
cu:function cu(){},
dA:function dA(){},
hi:function hi(){},
hj:function hj(){},
hk:function hk(){},
hl:function hl(){},
hm:function hm(){},
dB:function dB(){},
cv:function cv(){},
cO:function cO(){},
cP:function cP(){},
cQ:function cQ(){},
cR:function cR(){},
oR:function(a){return J.lx(a?Object.keys(a):[],null)},
pb:function(a){return v.mangledGlobalNames[a]},
p2:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
le:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
k0:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.ld==null){H.oV()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.iv("Return interceptor for "+H.j(u(a,q))))}s=a.constructor
r=s==null?null:s[$.lh()]
if(r!=null)return r
r=H.p_(a)
if(r!=null)return r
if(typeof a=="function")return C.L
u=Object.getPrototypeOf(a)
if(u==null)return C.w
if(u===Object.prototype)return C.w
if(typeof s=="function"){Object.defineProperty(s,$.lh(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
n8:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.kD(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.ad(a,0,4294967295,"length",null))
return J.lx(new Array(a),b)},
lx:function(a,b){return J.kK(H.e(a,[b]))},
kK:function(a){a.fixed$length=Array
return a},
P:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dm.prototype
return J.dl.prototype}if(typeof a=="string")return J.bu.prototype
if(a==null)return J.dn.prototype
if(typeof a=="boolean")return J.fH.prototype
if(a.constructor==Array)return J.aZ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bv.prototype
return a}if(a instanceof P.O)return a
return J.k0(a)},
d_:function(a){if(typeof a=="string")return J.bu.prototype
if(a==null)return a
if(a.constructor==Array)return J.aZ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bv.prototype
return a}if(a instanceof P.O)return a
return J.k0(a)},
k_:function(a){if(a==null)return a
if(a.constructor==Array)return J.aZ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bv.prototype
return a}if(a instanceof P.O)return a
return J.k0(a)},
mm:function(a){if(typeof a=="number")return J.co.prototype
if(typeof a=="string")return J.bu.prototype
if(a==null)return a
if(!(a instanceof P.O))return J.c1.prototype
return a},
lb:function(a){if(typeof a=="string")return J.bu.prototype
if(a==null)return a
if(!(a instanceof P.O))return J.c1.prototype
return a},
eW:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bv.prototype
return a}if(a instanceof P.O)return a
return J.k0(a)},
K:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.P(a).n(a,b)},
ll:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mm(a).m(a,b)},
d3:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.oY(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.d_(a).j(a,b)},
kA:function(a,b,c){return J.k_(a).k(a,b,c)},
mQ:function(a,b){return J.lb(a).F(a,b)},
mR:function(a,b,c){return J.eW(a).h1(a,b,c)},
mS:function(a,b,c,d){return J.eW(a).hu(a,b,c,d)},
mT:function(a,b){return J.lb(a).S(a,b)},
kB:function(a,b){return J.mm(a).hF(a,b)},
kC:function(a,b){return J.k_(a).I(a,b)},
mU:function(a,b,c,d){return J.eW(a).hV(a,b,c,d)},
lm:function(a,b){return J.k_(a).D(a,b)},
cd:function(a){return J.eW(a).gbX(a)},
d4:function(a){return J.P(a).gH(a)},
bF:function(a){return J.k_(a).gU(a)},
aF:function(a){return J.d_(a).gl(a)},
mV:function(a,b){return J.eW(a).iw(a,b)},
aq:function(a){return J.P(a).i(a)},
a:function a(){},
fH:function fH(){},
dn:function dn(){},
dp:function dp(){},
hs:function hs(){},
c1:function c1(){},
bv:function bv(){},
aZ:function aZ(a){this.$ti=a},
kL:function kL(a){this.$ti=a},
an:function an(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
co:function co(){},
dm:function dm(){},
dl:function dl(){},
bu:function bu(){}},P={
nO:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.oE()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.c7(new P.j1(s),1)).observe(u,{childList:true})
return new P.j0(s,u,t)}else if(self.setImmediate!=null)return P.oF()
return P.oG()},
nP:function(a){self.scheduleImmediate(H.c7(new P.j2(H.n(a,{func:1,ret:-1})),0))},
nQ:function(a){self.setImmediate(H.c7(new P.j3(H.n(a,{func:1,ret:-1})),0))},
nR:function(a){P.kR(C.o,H.n(a,{func:1,ret:-1}))},
kR:function(a,b){var u=C.d.a0(a.a,1000)
return P.nV(u<0?0:u,b)},
lR:function(a,b){var u=C.d.a0(a.a,1000)
return P.nW(u<0?0:u,b)},
nV:function(a,b){var u=new P.eE()
u.em(a,b)
return u},
nW:function(a,b){var u=new P.eE()
u.en(a,b)
return u},
nS:function(a,b){var u,t,s
b.a=1
try{a.dW(new P.jc(b),new P.jd(b),null)}catch(s){u=H.aE(s)
t=H.ca(s)
P.p4(new P.je(b,u,t))}},
m0:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.f(a.c,"$iaA")
if(u>=4){t=b.bK()
b.a=a.a
b.c=a.c
P.cM(b,t)}else{t=H.f(b.c,"$ib8")
b.a=2
b.c=a
a.d2(t)}},
cM:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.f(g.c,"$iaj")
P.jS(i,i,g.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.cM(h.a,b)}g=h.a
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
if(m){H.f(q,"$iaj")
P.jS(i,i,g.b,q.a,q.b)
return}l=$.Y
if(l!==n)$.Y=n
else l=i
g=b.c
if((g&15)===8)new P.ji(h,u,b,t).$0()
else if(p){if((g&1)!==0)new P.jh(u,b,q).$0()}else if((g&2)!==0)new P.jg(h,u,b).$0()
if(l!=null)$.Y=l
g=u.b
if(!!J.P(g).$icl){if(g.a>=4){k=H.f(o.c,"$ib8")
o.c=null
b=o.ba(k)
o.a=g.a
o.c=g.c
h.a=g
continue}else P.m0(g,o)
return}}j=b.b
k=H.f(j.c,"$ib8")
j.c=null
b=j.ba(k)
g=u.a
p=u.b
if(!g){H.C(p,H.t(j,0))
j.a=4
j.c=p}else{H.f(p,"$iaj")
j.a=8
j.c=p}h.a=j
g=j}},
oz:function(a,b){if(H.eV(a,{func:1,args:[P.O,P.ao]}))return H.n(a,{func:1,ret:null,args:[P.O,P.ao]})
if(H.eV(a,{func:1,args:[P.O]}))return H.n(a,{func:1,ret:null,args:[P.O]})
throw H.c(P.kD(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
oy:function(){var u,t
for(;u=$.c5,u!=null;){$.cZ=null
t=u.b
$.c5=t
if(t==null)$.cY=null
u.a.$0()}},
oC:function(){$.l4=!0
try{P.oy()}finally{$.cZ=null
$.l4=!1
if($.c5!=null)$.lk().$1(P.mi())}},
md:function(a){var u=new P.e0(a)
if($.c5==null){$.c5=$.cY=u
if(!$.l4)$.lk().$1(P.mi())}else $.cY=$.cY.b=u},
oB:function(a){var u,t,s=$.c5
if(s==null){P.md(a)
$.cZ=$.cY
return}u=new P.e0(a)
t=$.cZ
if(t==null){u.b=s
$.c5=$.cZ=u}else{u.b=t.b
$.cZ=t.b=u
if(u.b==null)$.cY=u}},
p4:function(a){var u=null,t=$.Y
if(C.f===t){P.jU(u,u,C.f,a)
return}P.jU(u,u,t,H.n(t.bT(a),{func:1,ret:-1}))},
lQ:function(a,b){var u=$.Y
if(u===C.f)return P.kR(a,H.n(b,{func:1,ret:-1}))
return P.kR(a,H.n(u.bT(b),{func:1,ret:-1}))},
nE:function(a,b){var u=$.Y
if(u===C.f)return P.lR(a,H.n(b,{func:1,ret:-1,args:[P.b4]}))
return P.lR(a,H.n(u.de(b,P.b4),{func:1,ret:-1,args:[P.b4]}))},
jS:function(a,b,c,d,e){var u={}
u.a=d
P.oB(new P.jT(u,e))},
m9:function(a,b,c,d,e){var u,t=$.Y
if(t===c)return d.$0()
$.Y=c
u=t
try{t=d.$0()
return t}finally{$.Y=u}},
ma:function(a,b,c,d,e,f,g){var u,t=$.Y
if(t===c)return d.$1(e)
$.Y=c
u=t
try{t=d.$1(e)
return t}finally{$.Y=u}},
oA:function(a,b,c,d,e,f,g,h,i){var u,t=$.Y
if(t===c)return d.$2(e,f)
$.Y=c
u=t
try{t=d.$2(e,f)
return t}finally{$.Y=u}},
jU:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.bT(d):c.hB(d,-1)
P.md(d)},
j1:function j1(a){this.a=a},
j0:function j0(a,b,c){this.a=a
this.b=b
this.c=c},
j2:function j2(a){this.a=a},
j3:function j3(a){this.a=a},
eE:function eE(){this.c=0},
jA:function jA(a,b){this.a=a
this.b=b},
jz:function jz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b8:function b8(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aA:function aA(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
jb:function jb(a,b){this.a=a
this.b=b},
jf:function jf(a,b){this.a=a
this.b=b},
jc:function jc(a){this.a=a},
jd:function jd(a){this.a=a},
je:function je(a,b,c){this.a=a
this.b=b
this.c=c},
ji:function ji(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jj:function jj(a){this.a=a},
jh:function jh(a,b,c){this.a=a
this.b=b
this.c=c},
jg:function jg(a,b,c){this.a=a
this.b=b
this.c=c},
e0:function e0(a){this.a=a
this.b=null},
hV:function hV(){},
hX:function hX(a,b){this.a=a
this.b=b},
hY:function hY(a,b){this.a=a
this.b=b},
cC:function cC(){},
hW:function hW(){},
b4:function b4(){},
aj:function aj(a,b){this.a=a
this.b=b},
jJ:function jJ(){},
jT:function jT(a,b){this.a=a
this.b=b},
jp:function jp(){},
jr:function jr(a,b,c){this.a=a
this.b=b
this.c=c},
jq:function jq(a,b){this.a=a
this.b=b},
js:function js(a,b,c){this.a=a
this.b=b
this.c=c},
nb:function(a,b){return new H.Z([a,b])},
ly:function(a,b){return new H.Z([a,b])},
nc:function(a){return H.oS(a,new H.Z([null,null]))},
nd:function(a){return new P.jn([a])},
kZ:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
nU:function(a,b,c){var u=new P.ef(a,b,[c])
u.c=a.e
return u},
n7:function(a,b,c){var u,t
if(P.l5(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.e([],[P.h])
C.a.h($.ap,a)
try{P.od(a,u)}finally{if(0>=$.ap.length)return H.b($.ap,-1)
$.ap.pop()}t=P.lO(b,H.mq(u,"$ik"),", ")+c
return t.charCodeAt(0)==0?t:t},
kJ:function(a,b,c){var u,t
if(P.l5(a))return b+"..."+c
u=new P.a4(b)
C.a.h($.ap,a)
try{t=u
t.a=P.lO(t.a,a,", ")}finally{if(0>=$.ap.length)return H.b($.ap,-1)
$.ap.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
l5:function(a){var u,t
for(u=$.ap.length,t=0;t<u;++t)if(a===$.ap[t])return!0
return!1},
od:function(a,b){var u,t,s,r,q,p,o,n=a.gU(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.B())return
u=H.j(n.gJ(n))
C.a.h(b,u)
m+=u.length+2;++l}if(!n.B()){if(l<=5)return
if(0>=b.length)return H.b(b,-1)
t=b.pop()
if(0>=b.length)return H.b(b,-1)
s=b.pop()}else{r=n.gJ(n);++l
if(!n.B()){if(l<=4){C.a.h(b,H.j(r))
return}t=H.j(r)
if(0>=b.length)return H.b(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gJ(n);++l
for(;n.B();r=q,q=p){p=n.gJ(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.b(b,-1)
m-=b.pop().length+2;--l}C.a.h(b,"...")
return}}s=H.j(r)
t=H.j(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.b(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)C.a.h(b,o)
C.a.h(b,s)
C.a.h(b,t)},
lz:function(a,b,c){var u=P.nb(b,c)
a.D(0,new P.fQ(u,b,c))
return u},
kP:function(a){var u,t={}
if(P.l5(a))return"{...}"
u=new P.a4("")
try{C.a.h($.ap,a)
u.a+="{"
t.a=!0
J.lm(a,new P.fV(t,u))
u.a+="}"}finally{if(0>=$.ap.length)return H.b($.ap,-1)
$.ap.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jn:function jn(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cN:function cN(a){this.a=a
this.c=this.b=null},
ef:function ef(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fQ:function fQ(a,b,c){this.a=a
this.b=b
this.c=c},
fR:function fR(){},
u:function u(){},
fU:function fU(){},
fV:function fV(a,b){this.a=a
this.b=b},
af:function af(){},
jB:function jB(){},
fW:function fW(){},
dV:function dV(a,b){this.a=a
this.$ti=b},
jt:function jt(){},
eg:function eg(){},
eK:function eK(){},
nI:function(a,b,c,d){if(b instanceof Uint8Array)return P.nJ(!1,b,c,d)
return},
nJ:function(a,b,c,d){var u,t,s=$.mL()
if(s==null)return
u=0===c
if(u&&!0)return P.kU(s,b)
t=b.length
d=P.bz(c,d,t)
if(u&&d===t)return P.kU(s,b)
return P.kU(s,b.subarray(c,d))},
kU:function(a,b){if(P.nL(b))return
return P.nM(a,b)},
nM:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.aE(t)}return},
nL:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
nK:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.aE(t)}return},
mc:function(a,b,c){var u,t,s
for(u=J.d_(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.ac()
if((s&127)!==s)return t-b}return c-b},
ln:function(a,b,c,d,e,f){if(C.d.ai(f,4)!==0)throw H.c(P.a0("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a0("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a0("Invalid base64 padding, more than two '=' characters",a,b))},
f7:function f7(){},
f8:function f8(){},
bJ:function bJ(){},
bK:function bK(){},
ft:function ft(){},
iF:function iF(){},
iH:function iH(){},
jI:function jI(a){this.b=0
this.c=a},
iG:function iG(a){this.a=a},
jH:function jH(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
d0:function(a,b,c){var u=H.ns(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a0(a,null,null))},
n4:function(a){if(a instanceof H.ch)return a.i(0)
return"Instance of '"+H.j(H.cz(a))+"'"},
ne:function(a,b,c){var u,t=J.n8(a,c)
if(a!==0&&!0)for(u=0;u<t.length;++u)C.a.k(t,u,b)
return H.o(t,"$id",[c],"$ad")},
kO:function(a,b,c){var u,t=[c],s=H.e([],t)
for(u=J.bF(a);u.B();)C.a.h(s,H.C(u.gJ(u),c))
if(b)return s
return H.o(J.kK(s),"$id",t,"$ad")},
cD:function(a,b,c){var u
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.o(a,"$iaZ",[P.l],"$aaZ")
u=a.length
c=P.bz(b,c,u)
return H.lI(b>0||c<u?C.a.e6(a,b,c):a)}if(!!J.P(a).$icv)return H.nu(a,b,P.bz(b,c,a.length))
return P.nC(a,b,c)},
nC:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.c(P.ad(b,0,J.aF(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.ad(c,b,J.aF(a),q,q))
t=J.bF(a)
for(s=0;s<b;++s)if(!t.B())throw H.c(P.ad(b,0,s,q,q))
r=[]
if(u)for(;t.B();)r.push(t.gJ(t))
else for(s=b;s<c;++s){if(!t.B())throw H.c(P.ad(c,b,s,q,q))
r.push(t.gJ(t))}return H.lI(r)},
nw:function(a){return new H.fI(a,H.n9(a,!1,!0,!1,!1,!1))},
lO:function(a,b,c){var u=J.bF(b)
if(!u.B())return a
if(c.length===0){do a+=H.j(u.gJ(u))
while(u.B())}else{a+=H.j(u.gJ(u))
for(;u.B();)a=a+c+H.j(u.gJ(u))}return a},
iA:function(){var u=H.nk()
if(u!=null)return P.nH(u)
throw H.c(P.F("'Uri.base' is not supported"))},
jG:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.h){u=$.mO().b
if(typeof b!=="string")H.v(H.aC(b))
u=u.test(b)}else u=!1
if(u)return b
H.C(b,H.aD(c,"bJ",0))
t=c.ghU().bY(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.b(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.dF(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
n2:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
n3:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dd:function(a){if(a>=10)return""+a
return"0"+a},
ls:function(a){return new P.br(1000*a)},
di:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aq(a)
if(typeof a==="string")return JSON.stringify(a)
return P.n4(a)},
d5:function(a){return new P.aU(!1,null,null,a)},
kD:function(a,b,c){return new P.aU(!0,a,b,c)},
dH:function(a,b){return new P.bT(null,null,!0,a,b,"Value not in range")},
ad:function(a,b,c,d,e){return new P.bT(b,c,!0,a,d,"Invalid value")},
bz:function(a,b,c){if(0>a||a>c)throw H.c(P.ad(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.ad(b,a,c,"end",null))
return b}return c},
lK:function(a,b){if(typeof a!=="number")return a.M()
if(a<0)throw H.c(P.ad(a,0,null,b,null))},
W:function(a,b,c,d,e){var u=H.ab(e==null?J.aF(b):e)
return new P.fG(u,!0,a,c,"Index out of range")},
F:function(a){return new P.ix(a)},
iv:function(a){return new P.iu(a)},
bp:function(a){return new P.fe(a)},
B:function(a){return new P.e8(a)},
a0:function(a,b,c){return new P.fD(a,b,c)},
nf:function(a,b,c){var u,t=H.e([],[c])
C.a.sl(t,a)
for(u=0;u<a;++u)C.a.k(t,u,b.$1(u))
return t},
lg:function(a){H.p2(a)},
nH:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.F(a,4)^58)*3|C.b.F(a,0)^100|C.b.F(a,1)^97|C.b.F(a,2)^116|C.b.F(a,3)^97)>>>0
if(u===0)return P.lT(e<e?C.b.p(a,0,e):a,5,f).ge1()
else if(u===32)return P.lT(C.b.p(a,5,e),0,f).ge1()}t=new Array(8)
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
if(P.mb(a,0,e,0,s)>=14)C.a.k(s,7,e)
r=s[1]
if(typeof r!=="number")return r.iK()
if(r>=0)if(P.mb(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.v()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.M()
if(typeof n!=="number")return H.p(n)
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
l=!1}else{if(!(n<e&&n===o+2&&C.b.a2(a,"..",o)))j=n>o+2&&C.b.a2(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.b.a2(a,"file",0)){if(q<=0){if(!C.b.a2(a,"/",o)){i="file:///"
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
a=C.b.aM(a,o,n,"/");++e
n=h}k="file"}else if(C.b.a2(a,"http",0)){if(t&&p+3===o&&C.b.a2(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.aM(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.a2(a,"https",0)){if(t&&p+4===o&&C.b.a2(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.b.aM(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.b.p(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.ju(a,r,q,p,o,n,m,k)}return P.nX(a,0,e,r,q,p,o,n,m,k)},
lV:function(a){var u=P.h
return C.a.hY(H.e(a.split("&"),[u]),P.ly(u,u),new P.iD(C.h),[P.y,P.h,P.h])},
nG:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.iz(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.S(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.d0(C.b.p(a,s,t),n,n)
if(typeof p!=="number")return p.X()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.b(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.d0(C.b.p(a,s,c),n,n)
if(typeof p!=="number")return p.X()
if(p>255)k.$2(l,s)
if(r>=u)return H.b(j,r)
j[r]=p
return j},
lU:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.iB(a),d=new P.iC(e,a)
if(a.length<2)e.$1("address is too short")
u=H.e([],[P.l])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.b.S(a,t)
if(p===58){if(t===b){++t
if(C.b.S(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
C.a.h(u,-1)
r=!0}else C.a.h(u,d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.a.gaw(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)C.a.h(u,d.$2(s,c))
else{m=P.nG(a,s,c)
C.a.h(u,(m[0]<<8|m[1])>>>0)
C.a.h(u,(m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.b(l,i)
l[i]=0
f=i+1
if(f>=k)return H.b(l,f)
l[f]=0
i+=2}else{f=C.d.aH(h,8)
if(i<0||i>=k)return H.b(l,i)
l[i]=f
f=i+1
if(f>=k)return H.b(l,f)
l[f]=h&255
i+=2}}return l},
nX:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.o4(a,b,d)
else{if(d===b)P.c3(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.o5(a,u,e-1):""
s=P.o1(a,e,f,!1)
if(typeof f!=="number")return f.v()
r=f+1
if(typeof g!=="number")return H.p(g)
q=r<g?P.o3(P.d0(C.b.p(a,r,g),new P.jC(a,f),n),j):n}else{q=n
s=q
t=""}p=P.o2(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.M()
o=h<i?P.l0(a,h+1,i,n):n
return new P.c2(j,t,s,q,p,o,i<c?P.o0(a,i+1,c):n)},
m2:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
c3:function(a,b,c){throw H.c(P.a0(c,a,b))},
o3:function(a,b){if(a!=null&&a===P.m2(b))return
return a},
o1:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.b.S(a,b)===91){if(typeof c!=="number")return c.w()
u=c-1
if(C.b.S(a,u)!==93)P.c3(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.nZ(a,t,u)
if(typeof s!=="number")return s.M()
if(s<u){r=s+1
q=P.m7(a,C.b.a2(a,"25",r)?s+3:r,u,"%25")}else q=""
P.lU(a,t,s)
return C.b.p(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.p(c)
p=b
for(;p<c;++p)if(C.b.S(a,p)===58){s=C.b.bf(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.m7(a,C.b.a2(a,"25",r)?s+3:r,c,"%25")}else q=""
P.lU(a,b,s)
return"["+C.b.p(a,b,s)+q+"]"}return P.o7(a,b,c)},
nZ:function(a,b,c){var u,t=C.b.bf(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.p(c)
u=t<c}else u=!1
return u?t:c},
m7:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.a4(d):null
if(typeof c!=="number")return H.p(c)
u=b
t=u
s=!0
for(;u<c;){r=C.b.S(a,u)
if(r===37){q=P.l1(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.a4("")
o=l.a+=C.b.p(a,t,u)
if(p)q=C.b.p(a,u,u+3)
else if(q==="%")P.c3(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.b(C.i,p)
p=(C.i[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.a4("")
if(t<u){l.a+=C.b.p(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.b.S(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.a4("")
l.a+=C.b.p(a,t,u)
l.a+=P.l_(r)
u+=m
t=u}}}if(l==null)return C.b.p(a,b,c)
if(t<c)l.a+=C.b.p(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
o7:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.p(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.S(a,u)
if(q===37){p=P.l1(a,u,!0)
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
if(o>=8)return H.b(C.u,o)
o=(C.u[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.a4("")
if(t<u){s.a+=C.b.p(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.b(C.l,o)
o=(C.l[o]&1<<(q&15))!==0}else o=!1
if(o)P.c3(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.S(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.a4("")
n=C.b.p(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.l_(q)
u+=l
t=u}}}}if(s==null)return C.b.p(a,b,c)
if(t<c){n=C.b.p(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
o4:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.m4(C.b.F(a,b)))P.c3(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.F(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.b(C.n,r)
r=(C.n[r]&1<<(s&15))!==0}else r=!1
if(!r)P.c3(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.p(a,b,c)
return P.nY(t?a.toLowerCase():a)},
nY:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
o5:function(a,b,c){return P.cW(a,b,c,C.N,!1)},
o2:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.cW(a,b,c,C.v,!0):C.k.j3(d,new P.jD(),P.h).t(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.a7(u,"/"))u="/"+u
return P.o6(u,e,f)},
o6:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.a7(a,"/"))return P.o8(a,!u||c)
return P.o9(a)},
l0:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.c(P.d5("Both query and queryParameters specified"))
return P.cW(a,b,c,C.m,!0)}if(d==null)return
u=new P.a4("")
t.a=""
d.D(0,new P.jE(new P.jF(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
o0:function(a,b,c){return P.cW(a,b,c,C.m,!0)},
l1:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.S(a,b+1)
t=C.b.S(a,p)
s=H.k3(u)
r=H.k3(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.d.aH(q,4)
if(p>=8)return H.b(C.i,p)
p=(C.i[p]&1<<(q&15))!==0}else p=!1
if(p)return H.dF(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.p(a,b,b+3).toUpperCase()
return},
l_:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.e(u,[P.l])
C.a.k(t,0,37)
C.a.k(t,1,C.b.F(o,a>>>4))
C.a.k(t,2,C.b.F(o,a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.e(u,[P.l])
for(q=0;--r,r>=0;s=128){p=C.d.hd(a,6*r)&63|s
C.a.k(t,q,37)
C.a.k(t,q+1,C.b.F(o,p>>>4))
C.a.k(t,q+2,C.b.F(o,p&15))
q+=3}}return P.cD(t,0,null)},
cW:function(a,b,c,d,e){var u=P.m6(a,b,c,d,e)
return u==null?C.b.p(a,b,c):u},
m6:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.M()
if(typeof c!=="number")return H.p(c)
if(!(o<c))break
c$0:{u=C.b.S(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.b(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.l1(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.b(C.l,t)
t=(C.l[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.c3(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.b.S(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.l_(u)}}if(m==null)m=new P.a4("")
m.a+=C.b.p(a,n,o)
m.a+=H.j(s)
if(typeof r!=="number")return H.p(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.M()
if(n<c)m.a+=C.b.p(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
m5:function(a){if(C.b.a7(a,"."))return!0
return C.b.dC(a,"/.")!==-1},
o9:function(a){var u,t,s,r,q,p,o
if(!P.m5(a))return a
u=H.e([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.K(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.b(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.t(u,"/")},
o8:function(a,b){var u,t,s,r,q,p
if(!P.m5(a))return!b?P.m3(a):a
u=H.e([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaw(u)!==".."){if(0>=u.length)return H.b(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.b(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaw(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.b(u,0)
C.a.k(u,0,P.m3(u[0]))}return C.a.t(u,"/")},
m3:function(a){var u,t,s,r=a.length
if(r>=2&&P.m4(J.mQ(a,0)))for(u=1;u<r;++u){t=C.b.F(a,u)
if(t===58)return C.b.p(a,0,u)+"%3A"+C.b.ad(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.b(C.n,s)
s=(C.n[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
o_:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.F(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.d5("Invalid URL encoding"))}}return u},
l2:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.b.F(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.h!==d)s=!1
else s=!0
if(s)return C.b.p(a,b,c)
else r=new H.a3(C.b.p(a,b,c))}else{r=H.e([],[P.l])
for(s=a.length,q=b;q<c;++q){t=C.b.F(a,q)
if(t>127)throw H.c(P.d5("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.d5("Truncated URI"))
C.a.h(r,P.o_(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.o(r,"$id",[P.l],"$ad")
return new P.iG(!1).bY(r)},
m4:function(a){var u=a|32
return 97<=u&&u<=122},
lT:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.e([b-1],[P.l])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.F(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.a0(m,a,t))}}if(s<0&&t>b)throw H.c(P.a0(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.F(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gaw(l)
if(r!==44||t!==p+7||!C.b.a2(a,"base64",p+1))throw H.c(P.a0("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.z.i8(0,a,o,u)
else{n=P.m6(a,o,u,C.m,!0)
if(n!=null)a=C.b.aM(a,o,u,n)}return new P.iy(a,l,c)},
ob:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.nf(22,new P.jN(),P.L),n=new P.jM(o),m=new P.jO(),l=new P.jP(),k=H.f(n.$2(0,225),"$iL")
m.$3(k,u,1)
m.$3(k,t,14)
m.$3(k,s,34)
m.$3(k,r,3)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(14,225),"$iL")
m.$3(k,u,1)
m.$3(k,t,15)
m.$3(k,s,34)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(15,225),"$iL")
m.$3(k,u,1)
m.$3(k,"%",225)
m.$3(k,s,34)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(1,225),"$iL")
m.$3(k,u,1)
m.$3(k,s,34)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(2,235),"$iL")
m.$3(k,u,139)
m.$3(k,r,131)
m.$3(k,t,146)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(3,235),"$iL")
m.$3(k,u,11)
m.$3(k,r,68)
m.$3(k,t,18)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(4,229),"$iL")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,"[",232)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(5,229),"$iL")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(6,231),"$iL")
l.$3(k,"19",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(7,231),"$iL")
l.$3(k,"09",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
m.$3(H.f(n.$2(8,8),"$iL"),"]",5)
k=H.f(n.$2(9,235),"$iL")
m.$3(k,u,11)
m.$3(k,t,16)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(16,235),"$iL")
m.$3(k,u,11)
m.$3(k,t,17)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(17,235),"$iL")
m.$3(k,u,11)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(10,235),"$iL")
m.$3(k,u,11)
m.$3(k,t,18)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(18,235),"$iL")
m.$3(k,u,11)
m.$3(k,t,19)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(19,235),"$iL")
m.$3(k,u,11)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(11,235),"$iL")
m.$3(k,u,11)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(12,236),"$iL")
m.$3(k,u,12)
m.$3(k,q,12)
m.$3(k,p,205)
k=H.f(n.$2(13,237),"$iL")
m.$3(k,u,13)
m.$3(k,q,13)
l.$3(H.f(n.$2(20,245),"$iL"),"az",21)
k=H.f(n.$2(21,245),"$iL")
l.$3(k,"az",21)
l.$3(k,"09",21)
m.$3(k,"+-.",21)
return o},
mb:function(a,b,c,d,e){var u,t,s,r,q=$.mP()
for(u=b;u<c;++u){if(d<0||d>=q.length)return H.b(q,d)
t=q[d]
s=C.b.F(a,u)^96
if(s>95)s=31
if(s>=t.length)return H.b(t,s)
r=t[s]
d=r&31
C.a.k(e,r>>>5,u)}return d},
aa:function aa(){},
ar:function ar(a,b){this.a=a
this.b=b},
z:function z(){},
br:function br(a){this.a=a},
fq:function fq(){},
fr:function fr(){},
bs:function bs(){},
f1:function f1(){},
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
fG:function fG(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
ix:function ix(a){this.a=a},
iu:function iu(a){this.a=a},
hR:function hR(a){this.a=a},
fe:function fe(a){this.a=a},
hr:function hr(){},
dM:function dM(){},
fl:function fl(a){this.a=a},
e8:function e8(a){this.a=a},
fD:function fD(a,b,c){this.a=a
this.b=b
this.c=c},
l:function l(){},
k:function k(){},
aY:function aY(){},
d:function d(){},
y:function y(){},
G:function G(){},
a7:function a7(){},
O:function O(){},
ao:function ao(){},
h:function h(){},
a4:function a4(a){this.a=a},
iD:function iD(a){this.a=a},
iz:function iz(a){this.a=a},
iB:function iB(a){this.a=a},
iC:function iC(a,b){this.a=a
this.b=b},
c2:function c2(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
jC:function jC(a,b){this.a=a
this.b=b},
jD:function jD(){},
jF:function jF(a,b){this.a=a
this.b=b},
jE:function jE(a){this.a=a},
iy:function iy(a,b,c){this.a=a
this.b=b
this.c=c},
jN:function jN(){},
jM:function jM(a){this.a=a},
jO:function jO(){},
jP:function jP(){},
ju:function ju(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
j7:function j7(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
oK:function(a){var u,t=J.P(a)
if(!!t.$ibd){u=t.gdh(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.eJ(a.data,a.height,a.width)},
oJ:function(a){if(a instanceof P.eJ)return{data:a.a,height:a.b,width:a.c}
return a},
bk:function(a){var u,t,s,r,q
if(a==null)return
u=P.ly(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r){q=H.U(t[r])
u.k(0,q,a[q])}return u},
oI:function(a){var u={}
a.D(0,new P.jV(u))
return u},
jw:function jw(){},
jx:function jx(a,b){this.a=a
this.b=b},
eJ:function eJ(a,b,c){this.a=a
this.b=b
this.c=c},
jV:function jV(a){this.a=a},
eB:function eB(a,b){this.a=a
this.b=b},
fz:function fz(a,b){this.a=a
this.b=b},
fA:function fA(){},
fB:function fB(){},
jm:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
nT:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jo:function jo(){},
ah:function ah(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b0:function b0(){},
fL:function fL(){},
b3:function b3(){},
hp:function hp(){},
hv:function hv(){},
hZ:function hZ(){},
q:function q(){},
b5:function b5(){},
ih:function ih(){},
ed:function ed(){},
ee:function ee(){},
eo:function eo(){},
ep:function ep(){},
ez:function ez(){},
eA:function eA(){},
eH:function eH(){},
eI:function eI(){},
L:function L(){},
f3:function f3(){},
f4:function f4(){},
f5:function f5(a){this.a=a},
f6:function f6(){},
bG:function bG(){},
hq:function hq(){},
e1:function e1(){},
d7:function d7(){},
dG:function dG(){},
bU:function bU(){},
dJ:function dJ(){},
dO:function dO(){},
dT:function dT(){},
hQ:function hQ(){},
ev:function ev(){},
ew:function ew(){}},W={
kF:function(){var u=document.createElement("canvas")
return u},
lt:function(a){H.f(a,"$ii")
return"wheel"},
lv:function(a){var u=document.createElement("img")
if(a!=null)u.src=a
return u},
n6:function(a){var u,t=document.createElement("input"),s=H.f(t,"$icn")
try{s.type=a}catch(u){H.aE(u)}return s},
jl:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
m1:function(a,b,c,d){var u=W.jl(W.jl(W.jl(W.jl(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a5:function(a,b,c,d,e){var u=W.mf(new W.ja(c),W.m)
if(u!=null&&!0)J.mS(a,b,u,!1)
return new W.j9(a,b,u,!1,[e])},
mf:function(a,b){var u=$.Y
if(u===C.f)return a
return u.de(a,b)},
r:function r(){},
eY:function eY(){},
f_:function f_(){},
f0:function f0(){},
bH:function bH(){},
bI:function bI(){},
cg:function cg(){},
bn:function bn(){},
ci:function ci(){},
fh:function fh(){},
Q:function Q(){},
cj:function cj(){},
fi:function fi(){},
aW:function aW(){},
aX:function aX(){},
fj:function fj(){},
fk:function fk(){},
fm:function fm(){},
de:function de(){},
fn:function fn(){},
df:function df(){},
dg:function dg(){},
fo:function fo(){},
fp:function fp(){},
j5:function j5(a,b){this.a=a
this.b=b},
T:function T(){},
m:function m(){},
i:function i(){},
au:function au(){},
ck:function ck(){},
fy:function fy(){},
fC:function fC(){},
aH:function aH(){},
fF:function fF(){},
bN:function bN(){},
bd:function bd(){},
bO:function bO(){},
cn:function cn(){},
b_:function b_(){},
fS:function fS(){},
hb:function hb(){},
cq:function cq(){},
hc:function hc(){},
hd:function hd(a){this.a=a},
he:function he(){},
hf:function hf(a){this.a=a},
aI:function aI(){},
hg:function hg(){},
a1:function a1(){},
j4:function j4(a){this.a=a},
H:function H(){},
cw:function cw(){},
aJ:function aJ(){},
ht:function ht(){},
hC:function hC(){},
hD:function hD(a){this.a=a},
hF:function hF(){},
aL:function aL(){},
hO:function hO(){},
aM:function aM(){},
hP:function hP(){},
aN:function aN(){},
hT:function hT(){},
hU:function hU(a){this.a=a},
av:function av(){},
bi:function bi(){},
aP:function aP(){},
aw:function aw(){},
i0:function i0(){},
i1:function i1(){},
ib:function ib(){},
aQ:function aQ(){},
aR:function aR(){},
ie:function ie(){},
ig:function ig(){},
bA:function bA(){},
iE:function iE(){},
iW:function iW(){},
b7:function b7(){},
cL:function cL(){},
j6:function j6(){},
e3:function e3(){},
jk:function jk(){},
el:function el(){},
jv:function jv(){},
jy:function jy(){},
j8:function j8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
kY:function kY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
j9:function j9(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ja:function ja(a){this.a=a},
D:function D(){},
dk:function dk(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
e2:function e2(){},
e4:function e4(){},
e5:function e5(){},
e6:function e6(){},
e7:function e7(){},
e9:function e9(){},
ea:function ea(){},
eb:function eb(){},
ec:function ec(){},
eh:function eh(){},
ei:function ei(){},
ej:function ej(){},
ek:function ek(){},
em:function em(){},
en:function en(){},
eq:function eq(){},
er:function er(){},
es:function es(){},
cS:function cS(){},
cT:function cT(){},
et:function et(){},
eu:function eu(){},
ey:function ey(){},
eC:function eC(){},
eD:function eD(){},
cU:function cU(){},
cV:function cV(){},
eF:function eF(){},
eG:function eG(){},
eL:function eL(){},
eM:function eM(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(){},
eR:function eR(){},
eS:function eS(){},
eT:function eT(){},
eU:function eU(){}},O={
kG:function(a){var u=new O.a_([a])
u.br(a)
return u},
a_:function a_(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cp:function cp(){this.b=this.a=null},
dv:function dv(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h5:function h5(a,b){this.a=a
this.b=b},
h6:function h6(){},
h7:function h7(a,b){this.a=a
this.b=b},
h8:function h8(){},
h9:function h9(a,b){this.a=a
this.b=b},
ha:function ha(){},
h_:function h_(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dw:function dw(){},
h0:function h0(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
b1:function b1(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h2:function h2(){var _=this
_.e=_.d=_.c=_.b=null},
h3:function h3(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h4:function h4(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bW:function bW(){}},E={
lu:function(){var u=new E.al()
u.a=""
u.b=!0
u.seg(0,O.kG(E.al))
u.y.b8(u.gi9(),u.gic())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.scs(0,null)
u.sdV(null)
u.sb2(null)
return u},
nx:function(a,b){var u=new E.hy(a)
u.eb(a,b)
return u},
nD:function(a,b,c,d,e){var u,t,s=J.P(a)
if(!!s.$ibI)return E.lP(a,!0,!0,!0,!1)
u=W.kF()
t=u.style
t.width="100%"
t.height="100%"
s.gbX(a).h(0,u)
return E.lP(u,!0,!0,!0,!1)},
lP:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.dP(),j=H.f(C.j.cq(a,"webgl2",P.nc(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibU")
if(j==null)H.v(P.B("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.nx(j,a)
u=new T.i7(j)
u.b=H.ab(j.getParameter(3379))
H.ab(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.dW(a)
t=new X.fK()
t.c=new X.as(!1,!1,!1)
t.sfW(P.nd(P.l))
u.b=t
t=new X.hh(u)
t.f=0
t.r=V.by()
t.x=V.by()
t.ch=t.Q=1
u.c=t
t=new X.fT(u)
t.r=0
t.x=V.by()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.id(u)
t.f=V.by()
t.r=V.by()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.seH(H.e([],[[P.cC,P.O]]))
t=u.z
s=document
r=W.a1
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.a5(s,"contextmenu",H.n(u.gff(),q),!1,r))
t=u.z
p=W.m
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.a5(a,"focus",H.n(u.gfl(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.a5(a,"blur",H.n(u.gf7(),o),!1,p))
t=u.z
n=W.b_
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.a5(s,"keyup",H.n(u.gfp(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.a5(s,"keydown",H.n(u.gfn(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.a5(a,"mousedown",H.n(u.gfu(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a5(a,"mouseup",H.n(u.gfA(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a5(a,l,H.n(u.gfw(),q),!1,r))
n=u.z
W.lt(a)
m=W.b7;(n&&C.a).h(n,W.a5(a,H.U(W.lt(a)),H.n(u.gfC(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.a5(s,l,H.n(u.gfh(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.a5(s,"mouseup",H.n(u.gfj(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.a5(s,"pointerlockchange",H.n(u.gfE(),o),!1,p))
p=u.z
o=W.aR
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.a5(a,"touchstart",H.n(u.gfR(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a5(a,"touchend",H.n(u.gfN(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a5(a,"touchmove",H.n(u.gfP(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.ar(Date.now(),!1)
k.cy=0
k.d4()
return k},
f9:function f9(){},
al:function al(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hy:function hy(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hz:function hz(a){this.a=a},
hA:function hA(a){this.a=a},
hB:function hB(a){this.a=a},
dP:function dP(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
ia:function ia(a){this.a=a}},Z={
kX:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.c4(c)),35044)
a.bindBuffer(b,null)
return new Z.e_(b,u)},
az:function(a){return new Z.bj(a)},
e_:function e_(a,b){this.a=a
this.b=b},
d8:function d8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
iX:function iX(a){this.a=a},
d9:function d9(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bt:function bt(a,b,c){this.a=a
this.b=b
this.c=c},
bj:function bj(a){this.a=a}},D={
V:function(){var u=new D.bL()
u.sae(null)
u.saS(null)
u.c=null
u.d=0
return u},
fc:function fc(){},
bL:function bL(){var _=this
_.d=_.c=_.b=_.a=null},
fv:function fv(a){this.a=a},
fw:function fw(a){this.a=a},
A:function A(){this.b=null},
bP:function bP(a){this.b=null
this.$ti=a},
bQ:function bQ(a){this.b=null
this.$ti=a},
M:function M(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
bq:function bq(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ac:function ac(){},
dr:function dr(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
dE:function dE(){},
dL:function dL(){}},X={da:function da(a,b){this.a=a
this.b=b},dq:function dq(a,b){this.a=a
this.b=b},fK:function fK(){var _=this
_.d=_.c=_.b=_.a=null},dt:function dt(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fT:function fT(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},as:function as(a,b,c){this.a=a
this.b=b
this.c=c},bg:function bg(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hh:function hh(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cr:function cr(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hu:function hu(){},dR:function dR(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},id:function id(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dW:function dW(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
n5:function(a){var u=new X.fE(),t=new V.bo(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.lM
if(t==null){t=V.lL(0,0,1,1)
$.lM=t}u.r=t
return u},
db:function db(){},
fE:function fE(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dD:function dD(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dN:function dN(){}},V={
pc:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.ai(a-b,u)
return(a<0?a+u:a)+b},
S:function(a,b,c){if(a==null)return C.b.aa("null",c)
return C.b.aa(C.e.dX(Math.abs(a-0)<$.N().a?0:a,b),c+b+1)},
c9:function(a,b,c){var u,t,s,r,q,p=H.e([],[P.h])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.x)(a),++s){r=V.S(a[s],b,c)
t=Math.max(t,r.length)
C.a.h(p,r)}for(q=p.length-1;q>=0;--q){if(q>=p.length)return H.b(p,q)
C.a.k(p,q,C.b.aa(p[q],t))}return p},
lf:function(a){return C.e.iD(Math.pow(2,C.K.b0(Math.log(H.oH(a))/Math.log(2))))},
dy:function(){var u=$.lB
return u==null?$.lB=V.b2(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
b2:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.am(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lA:function(a,b,c){var u=c.q(0,Math.sqrt(c.C(c))),t=b.at(u),s=t.q(0,Math.sqrt(t.C(t))),r=u.at(s),q=new V.J(a.a,a.b,a.c),p=s.P(0).C(q),o=r.P(0).C(q),n=u.P(0).C(q)
return V.b2(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
by:function(){var u=$.lF
return u==null?$.lF=new V.ag(0,0):u},
lG:function(){var u=$.cx
return u==null?$.cx=new V.a2(0,0,0):u},
lL:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dI(a,b,c,d)},
cK:function(){var u=$.lZ
return u==null?$.lZ=new V.J(0,0,0):u},
nN:function(){var u=$.iI
return u==null?$.iI=new V.J(-1,0,0):u},
kV:function(){var u=$.iJ
return u==null?$.iJ=new V.J(0,1,0):u},
m_:function(){var u=$.iK
return u==null?$.iK=new V.J(0,0,1):u},
a6:function a6(a,b,c){this.a=a
this.b=b
this.c=c},
bo:function bo(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fu:function fu(a){this.a=a},
dx:function dx(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
am:function am(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ag:function ag(a,b){this.a=a
this.b=b},
a2:function a2(a,b,c){this.a=a
this.b=b
this.c=c},
bR:function bR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dI:function dI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
R:function R(a,b){this.a=a
this.b=b},
J:function J(a,b,c){this.a=a
this.b=b
this.c=c},
ai:function(a){var u=new V.hG()
u.ec(a)
return u},
eZ:function eZ(){},
bf:function bf(){},
du:function du(){},
bh:function bh(){this.a=null},
hG:function hG(){this.a=null},
cB:function cB(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dQ:function dQ(a,b,c){this.a=a
this.b=b
this.c=c},
cF:function cF(a){this.b=a
this.c=null},
ic:function ic(){this.c=this.b=this.a=null},
cG:function cG(a){this.b=a
this.a=this.c=null},
p5:function(a){P.nE(C.I,new V.ku(a))},
lJ:function(a){var u=new V.hw(a),t=document.getElementById(a)
u.c=t
if(t==null)H.v("Failed to find "+a+" for RadioGroup")
return u},
nz:function(a){var u=new V.hK()
u.ee(a,!0)
return u},
ku:function ku(a){this.a=a},
hw:function hw(a){this.a=a
this.c=null},
hx:function hx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hK:function hK(){this.b=this.a=null},
hM:function hM(a){this.a=a},
hL:function hL(a){this.a=a},
i3:function i3(a,b){this.a=a
this.c=null
this.d=b},
i5:function i5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i4:function i4(){}},U={
kH:function(){var u=new U.fd()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
lr:function(a){var u=new U.dc()
u.a=a
return u},
fd:function fd(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dc:function dc(){this.b=this.a=null},
cm:function cm(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a9:function a9(){},
dX:function dX(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dY:function dY(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dZ:function dZ(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dh:function dh(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
ng:function(a,b){var u=a.b_,t=new A.fZ(b,u)
t.ed(b,u)
t.ea(a,b)
return t},
nh:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="MaterialLight_"+a0.gah(a0)+a1.gah(a1)+a2.gah(a2)+a3.gah(a3)+a4.gah(a4)+a5.gah(a5)+a6.gah(a6)+a7.gah(a7)+a8.gah(a8)+"_"
f+=a?"1":"0"
f+=b?"1":"0"
f+=c?"1":"0"
f=f+"0_"+e
u=a9.length
if(u>0){f+="_Dir"
for(t=0;t<a9.length;a9.length===u||(0,H.x)(a9),++t)f+="_"+H.j(a9[t].a)}u=b0.length
if(u>0){f+="_Point"
for(t=0;t<b0.length;b0.length===u||(0,H.x)(b0),++t)f+="_"+H.j(b0[t].a)}u=b1.length
if(u>0){f+="_Spot"
for(t=0;t<b1.length;b1.length===u||(0,H.x)(b1),++t)f+="_"+H.j(b1[t].a)}for(u=a9.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=a9[t].b
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
g=$.bc()
if(k){u=$.aT()
g=new Z.bj(g.a|u.a)}if(j){u=$.bb()
g=new Z.bj(g.a|u.a)}if(i){u=$.ba()
g=new Z.bj(g.a|u.a)}return new A.h1(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,s,p,l,p,r,h,!0,!1,!1,o,r,m,k,j,!1,!1,i,!1,!1,c,!1,e,f.charCodeAt(0)==0?f:f,g)},
jQ:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
jR:function(a,b,c){var u
A.jQ(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.kx(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
oh:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.jQ(b,t,"emission")
t=b.a+="\n"
t+="vec3 emissionColor()\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   return emissionClr;\n"
b.a=t}t+="}\n"
b.a=t
b.a=t+"\n"},
oe:function(a,b){var u,t=a.b
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.jR(b,t,"ambient")
b.a+="\n"},
of:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.jR(b,t,"diffuse")
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
oi:function(a,b){var u,t=a.d
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.jR(b,t,"invDiffuse")
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
oo:function(a,b){var u,t=a.e
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.jR(b,t,"specular")
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
ok:function(a,b){var u,t,s
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
om:function(a,b){var u,t=a.r,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.jQ(b,t,"reflect")
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
on:function(a,b){var u,t=a.x,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.jQ(b,t,"refract")
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
og:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.j(u)
s=A.kx(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.ac()
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
r=[P.h]
o=H.e([],r)
if(!a.b.a)n=!1
else n=!0
if(n)C.a.h(o,"ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.e([],r)
if(!a.c.a)r=!1
else r=!0
if(r)C.a.h(m,"diffuse(norm, lit.viewDir)")
if(!a.d.a)r=!1
else r=!0
if(r)C.a.h(m,"invDiffuse(norm, lit.viewDir)")
if(!a.e.a)r=!1
else r=!0
if(r)C.a.h(m,"specular(norm, lit.viewDir)")
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
c.a+="      highLight = intensity*("+C.a.t(m," + ")+");\n"}else c.a+="   highLight = "+C.a.t(m," + ")+";\n"
C.a.h(o,"highLight")}r=c.a+="   return lit.color*("+C.a.t(o," + ")+");\n"
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
ol:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.j(u)
s=A.kx(t)
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
if(typeof u!=="number")return u.ac()
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
c.a=r+"\n"}r=[P.h]
l=H.e([],r)
C.a.h(l,"lit.color")
if(o)C.a.h(l,"attenuation")
if(u)C.a.h(l,"textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.a.t(l," * ")+";\n"
o+="}\n"
c.a=o
o+="\n"
c.a=o
o+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+m+")\n"
c.a=o
c.a=o+"{\n"
l=H.e([],r)
if(!a.b.a)o=!1
else o=!0
if(o)C.a.h(l,"ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
C.a.h(l,"highLight")
m=u?", txtCube":""
if(p)m+=", shadowCube"
o=c.a+="   vec3 normDir = normalize(viewPos - lit.viewPnt);\n"
o+="   vec3 intensity = "+t+"Intensity(normDir, lit"+m+");\n"
c.a=o
c.a=o+"   if(length(intensity) > 0.0001) {\n"
k=H.e([],r)
if(!a.c.a)r=!1
else r=!0
if(r)C.a.h(k,"diffuse(norm, normDir)")
if(!a.d.a)r=!1
else r=!0
if(r)C.a.h(k,"invDiffuse(norm, normDir)")
if(!a.e.a)r=!1
else r=!0
if(r)C.a.h(k,"specular(norm, normDir)")
r=c.a+="      highLight = intensity*("+C.a.t(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.a.t(l," + ")+");\n"
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
op:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.j(u)
s=A.kx(t)
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
if(typeof u!=="number")return u.ac()
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
c.a=u+"\n"}u=[P.h]
j=H.e([],u)
if(n)C.a.h(j,"attenuation")
if(o)C.a.h(j,"scale")
if(m)C.a.h(j,"texture2D(txt2D, txtLoc).rgb")
else C.a.h(j,"vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.a.t(j," * ")+";\n"
r+="}\n"
c.a=r
r+="\n"
c.a=r
r+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+k+")\n"
c.a=r
c.a=r+"{\n"
j=H.e([],u)
if(!a.b.a)r=!1
else r=!0
if(r)C.a.h(j,"ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
C.a.h(j,"highLight")
k=m?", txt2D":""
if(p)k+=", shadow2D"
r=c.a+="   vec3 intensity = "+t+"Intensity(lit"+k+");\n"
r+="   if(length(intensity) > 0.0001) {\n"
c.a=r
c.a=r+"      vec3 litVec = normalize(viewPos - lit.viewPnt);\n"
i=H.e([],u)
if(!a.c.a)u=!1
else u=!0
if(u)C.a.h(i,"diffuse(norm, litVec)")
if(!a.d.a)u=!1
else u=!0
if(u)C.a.h(i,"invDiffuse(norm, litVec)")
if(!a.e.a)u=!1
else u=!0
if(u)C.a.h(i,"specular(norm, litVec)")
u=c.a+="      highLight = intensity*("+C.a.t(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.a.t(j," + ")+");\n"
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
oj:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.e([],[P.h])
if(!a.b.a)u=!1
else u=!0
if(u)C.a.h(t,"ambientColor")
if(!a.c.a)u=!1
else u=!0
if(u)C.a.h(t,"diffuse(norm, litVec)")
if(!a.d.a)u=!1
else u=!0
if(u)C.a.h(t,"invDiffuse(norm, litVec)")
if(!a.e.a)u=!1
else u=!0
if(u)C.a.h(t,"specular(norm, litVec)")
u=b.a+="   return "+C.a.t(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
oq:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.a4("")
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
A.oh(a,j)
A.oe(a,j)
A.of(a,j)
A.oi(a,j)
A.oo(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.om(a,j)
A.on(a,j)}A.ok(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.x)(q),++o)A.og(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.x)(q),++o)A.ol(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.x)(q),++o)A.op(a,q[o],j)
A.oj(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.e([],[P.h])
if(r){j.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(n,"lightAccum")
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.x)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.ad(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.x)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.ad(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.x)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.ad(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)u=!1
else u=!0
if(u)C.a.h(n,"emissionColor()")
if(!a.r.a)u=!1
else u=!0
if(u)C.a.h(n,"reflect(refl)")
if(!a.x.a)u=!1
else u=!0
if(u)C.a.h(n,"refract(refl)")
if(n.length<=0)C.a.h(n,"vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.a.t(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
or:function(a,b){var u,t,s
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
ot:function(a,b){var u
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
os:function(a,b){var u
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
ov:function(a,b){var u,t
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
ow:function(a,b){var u,t
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
ou:function(a,b){var u
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
ox:function(a,b){var u
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
kx:function(a){if(0>=a.length)return H.b(a,0)
return a[0].toUpperCase()+C.b.ad(a,1)},
kS:function(a,b,c,d,e){var u=new A.im(a,c,e)
u.f=d
u.shr(P.ne(d,0,P.l))
return u},
d6:function d6(a,b,c){this.a=a
this.b=b
this.c=c},
f2:function f2(a){this.a=a},
ak:function ak(a,b,c){this.a=a
this.b=b
this.c=c},
fZ:function fZ(a,b){var _=this
_.iQ=_.iP=_.dk=_.dj=_.b_=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.j2=_.j1=_.j0=_.c5=_.c4=_.c3=_.c2=_.c1=_.c0=_.j_=_.iZ=_.dt=_.iY=_.iX=_.ds=_.dr=_.iW=_.iV=_.dq=_.dn=_.iU=_.iT=_.dm=_.iS=_.iR=_.dl=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
aG:function aG(a,b){this.a=a
this.b=b},
aK:function aK(a,b){this.a=a
this.b=b},
aO:function aO(a,b){this.a=a
this.b=b},
h1:function h1(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.b_=b3
_.dj=b4},
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
cA:function cA(){},
dS:function dS(){},
is:function is(a){this.a=a},
ax:function ax(a,b,c){this.a=a
this.c=b
this.d=c},
ip:function ip(a,b,c){this.a=a
this.c=b
this.d=c},
iq:function iq(a,b,c){this.a=a
this.c=b
this.d=c},
ir:function ir(a,b,c){this.a=a
this.c=b
this.d=c},
im:function im(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
ae:function ae(a,b,c){this.a=a
this.c=b
this.d=c},
io:function io(a,b,c){this.a=a
this.c=b
this.d=c},
X:function X(a,b,c){this.a=a
this.c=b
this.d=c},
cH:function cH(a,b,c){this.a=a
this.c=b
this.d=c},
it:function it(a,b,c){this.a=a
this.c=b
this.d=c},
cI:function cI(a,b,c){this.a=a
this.c=b
this.d=c},
at:function at(a,b,c){this.a=a
this.c=b
this.d=c},
bZ:function bZ(a,b,c){this.a=a
this.c=b
this.d=c},
c_:function c_(a,b,c){this.a=a
this.c=b
this.d=c}},F={
mk:function(a,b,c){var u=null,t=F.kQ()
F.cX(t,u,b,c,a,1,0,0,1)
F.cX(t,u,b,c,a,0,1,0,3)
F.cX(t,u,b,c,a,0,0,1,2)
F.cX(t,u,b,c,a,-1,0,0,0)
F.cX(t,u,b,c,a,0,-1,0,0)
F.cX(t,u,b,c,a,0,0,-1,3)
t.a4()
return t},
jL:function(a){var u,t=a.a>0?1:0
if(a.b>0)t+=2
u=a.c
if(typeof u!=="number")return u.X()
return(u>0?t+4:t)*2},
cX:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.J(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.J(u+a3,t+a1,s+a2)
q=new V.J(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.J(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.jL(i)
l=F.jL(j.b)
k=F.eX(d,a0,new F.jK(j,F.jL(j.c),F.jL(j.d),l,m,c),b)
if(k!=null)a.bi(k)},
oL:function(a,b,c,d){return F.oM(!1,!1,c,new F.jW(1,1),d)},
oM:function(a,b,c,d,e){var u
if(e<3)return
if(c<1)return
u=F.eX(c,e,new F.jY(d),null)
if(u==null)return
u.a4()
u.bc()
return u},
oZ:function(a,b){var u=F.eX(a,b,new F.k8(),null)
u.d.bk()
u.a4()
u.bc()
return u},
p6:function(a,b){var u,t,s={}
s.a=u
s.a=null
s.a=new F.kv()
t=F.mk(a,new F.kw(s,1),b)
t.bc()
return t},
pa:function(a,b){return F.oN(b,a,0.5,1,new F.ky())},
oN:function(a,b,c,d,e){var u=F.eX(a,b,new F.jX(e,d,b,c),null)
if(u==null)return
u.a4()
u.bc()
return u},
lc:function(a,b){var u,t={}
t.a=u
t.a=null
t.a=new F.k1()
return F.eX(b,a,new F.k2(t),null)},
eX:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.kQ()
t=H.e([],[F.ay])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.kW(g,g,new V.bo(p,0,0,1),g,g,new V.ag(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.bZ(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.kW(g,g,new V.bo(j,i,h,1),g,g,new V.ag(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.bZ(d))}}u.d.hv(a+1,b+1,t)
return u},
dj:function(a,b,c){var u=new F.a8(),t=a.a
if(t==null)H.v(P.B("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.v(P.B("May not create a face with vertices attached to different shapes."))
u.bP(a)
u.bQ(b)
u.h8(c)
C.a.h(u.a.a.d.b,u)
u.a.a.Z()
return u},
na:function(a,b){var u=new F.be(),t=a.a
if(t==null)H.v(P.B("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.v(P.B("May not create a line with vertices attached to different shapes."))
u.bP(a)
u.bQ(b)
C.a.h(u.a.a.c.b,u)
u.a.a.Z()
return u},
kQ:function(){var u=new F.bV(),t=new F.iL(u)
t.b=!1
t.shs(H.e([],[F.ay]))
u.a=t
t=new F.hJ(u)
t.sbI(H.e([],[F.bx]))
u.b=t
t=new F.hI(u)
t.seQ(H.e([],[F.be]))
u.c=t
t=new F.hH(u)
t.seI(H.e([],[F.a8]))
u.d=t
u.e=null
return u},
kW:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.ay(),r=new F.iT()
r.sbI(H.e([],[F.bx]))
s.b=r
r=new F.iP()
u=[F.be]
r.seR(H.e([],u))
r.seS(H.e([],u))
s.c=r
r=new F.iM()
u=[F.a8]
r.seJ(H.e([],u))
r.seK(H.e([],u))
r.seL(H.e([],u))
s.d=r
h=$.li()
s.e=0
r=$.bc()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aT().a)!==0?e:t
s.x=(u&$.bb().a)!==0?b:t
s.y=(u&$.bl().a)!==0?f:t
s.z=(u&$.bm().a)!==0?g:t
s.Q=(u&$.lj().a)!==0?c:t
s.ch=(u&$.bE().a)!==0?i:0
s.cx=(u&$.ba().a)!==0?a:t
return s},
jK:function jK(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jW:function jW(a,b){this.a=a
this.b=b},
jY:function jY(a){this.a=a},
k8:function k8(){},
kv:function kv(){},
kw:function kw(a,b){this.a=a
this.b=b},
ky:function ky(){},
jX:function jX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k1:function k1(){},
k2:function k2(a){this.a=a},
a8:function a8(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fx:function fx(){},
hN:function hN(){},
be:function be(){this.b=this.a=null},
fM:function fM(){},
il:function il(){},
bx:function bx(){this.a=null},
bV:function bV(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hH:function hH(a){this.a=a
this.b=null},
hI:function hI(a){this.a=a
this.b=null},
hJ:function hJ(a){this.a=a
this.b=null},
ay:function ay(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iV:function iV(a){this.a=a},
iU:function iU(a){this.a=a},
iL:function iL(a){this.a=a
this.c=this.b=null},
iM:function iM(){this.d=this.c=this.b=null},
iN:function iN(a,b){this.a=a
this.b=b},
iO:function iO(a,b){this.a=a
this.b=b},
iP:function iP(){this.c=this.b=null},
iR:function iR(){},
iQ:function iQ(){},
iS:function iS(){},
hn:function hn(){},
iT:function iT(){this.b=null}},T={cE:function cE(){},i2:function i2(){},i6:function i6(){var _=this
_.y=_.x=_.r=_.d=_.c=_.b=_.a=null},i7:function i7(a){var _=this
_.a=a
_.e=_.d=_.b=null},i8:function i8(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},i9:function i9(a,b,c){this.a=a
this.b=b
this.c=c}},K={
mr:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="testCanvas",a="heightMaps",a0="modifiers",a1={},a2=V.nz("Test 037"),a3=W.kF()
a3.className="pageLargeCanvas"
a3.id=b
a2.a.appendChild(a3)
u=[P.h]
a2.dd(H.e(["A test of applying a height map to an image. ","Some shapes will take a bit to calculate depending on quality of mapping."],u))
a2.ht(H.e(["heightMaps","shapes","scalars"],u))
a2.dd(H.e(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(b)
if(t==null)H.v(P.B("Failed to find an element with the identifier, testCanvas."))
s=E.nD(t,!0,!0,!0,!1)
r=new O.dv()
r.sew(O.kG(V.am))
r.e.b8(r.gf3(),r.gf5())
a2=new O.b1(r,"emission")
a2.c=new A.ak(!1,!1,!1)
a2.f=new V.a6(0,0,0)
r.f=a2
a2=new O.b1(r,"ambient")
a2.c=new A.ak(!1,!1,!1)
a2.f=new V.a6(0,0,0)
r.r=a2
a2=new O.b1(r,"diffuse")
a2.c=new A.ak(!1,!1,!1)
a2.f=new V.a6(0,0,0)
r.x=a2
a2=new O.b1(r,"invDiffuse")
a2.c=new A.ak(!1,!1,!1)
a2.f=new V.a6(0,0,0)
r.y=a2
a2=new O.h4(r,"specular")
a2.c=new A.ak(!1,!1,!1)
a2.f=new V.a6(0,0,0)
a2.ch=100
r.z=a2
a2=new O.h0(r,"bump")
a2.c=new A.ak(!1,!1,!1)
r.Q=a2
r.ch=null
a2=new O.b1(r,"reflect")
a2.c=new A.ak(!1,!1,!1)
a2.f=new V.a6(0,0,0)
r.cx=a2
a2=new O.h3(r,"refract")
a2.c=new A.ak(!1,!1,!1)
a2.f=new V.a6(0,0,0)
a2.ch=1
r.cy=a2
a2=new O.h_(r,"alpha")
a2.c=new A.ak(!1,!1,!1)
a2.f=1
r.db=a2
a2=new D.dr()
a2.br(D.ac)
a2.seF(H.e([],[D.bq]))
a2.sfT(H.e([],[D.dE]))
a2.shf(H.e([],[D.dL]))
a2.y=a2.x=null
a2.cr(a2.gf1(),a2.gfH(),a2.gfL())
r.dx=a2
q=new O.h2()
q.b=new V.bo(0,0,0,0)
q.c=1
q.d=10
q.e=!1
r.dy=q
q=a2.x
a2=q==null?a2.x=D.V():q
a2.h(0,r.gh3())
a2=r.dx
q=a2.y
a2=q==null?a2.y=D.V():q
a2.h(0,r.gf9())
r.fr=null
a2=r.dx
p=V.kV()
q=U.lr(V.lA(V.lG(),p,new V.J(1,1,-3)))
o=new V.a6(1,1,1)
n=new D.bq()
n.c=new V.a6(1,1,1)
n.a=V.m_()
n.d=V.kV()
n.e=V.nN()
m=n.b
n.b=q
q.gA().h(0,n.geh())
q=new D.M("mover",m,n.b,[U.a9])
q.b=!0
n.an(q)
if(!n.c.n(0,o)){m=n.c
n.c=o
q=new D.M("color",m,o,[V.a6])
q.b=!0
n.an(q)}a2.h(0,n)
a2=r.r
a2.saW(0,new V.a6(0,0,1))
a2=r.x
a2.saW(0,new V.a6(0,1,0))
a2=r.z
a2.saW(0,new V.a6(1,0,0))
a2=r.z
a2.d6(new A.ak(!0,!1,!1))
a2.d7(10)
l=E.lu()
l.sdV(r)
k=E.lu()
k.y.h(0,l)
a2=new U.cm()
a2.br(U.a9)
a2.b8(a2.gf_(),a2.gfJ())
a2.e=null
a2.f=V.dy()
a2.r=0
q=s.r
n=new U.dY()
j=U.kH()
j.scp(0,!0)
j.scb(6.283185307179586)
j.scd(0)
j.sV(0,0)
j.scc(100)
j.sR(0)
j.sc_(0.5)
n.b=j
i=n.gaB()
j.gA().h(0,i)
j=U.kH()
j.scp(0,!0)
j.scb(6.283185307179586)
j.scd(0)
j.sV(0,0)
j.scc(100)
j.sR(0)
j.sc_(0.5)
n.c=j
j.gA().h(0,i)
n.d=null
n.r=n.f=n.e=!1
n.y=n.x=2.5
n.Q=4
n.ch=n.cx=!1
n.db=n.cy=0
n.dx=null
n.dy=0
n.fx=n.fr=null
h=new X.as(!1,!1,!1)
m=n.d
n.d=h
j=[X.as]
i=new D.M(a0,m,h,j)
i.b=!0
n.O(i)
i=n.f
if(i!==!1){n.f=!1
i=new D.M("invertX",i,!1,[P.aa])
i.b=!0
n.O(i)}i=n.r
if(i!==!1){n.r=!1
i=new D.M("invertY",i,!1,[P.aa])
i.b=!0
n.O(i)}n.aV(q)
a2.h(0,n)
q=s.r
n=new U.dX()
i=U.kH()
i.scp(0,!0)
i.scb(6.283185307179586)
i.scd(0)
i.sV(0,0)
i.scc(100)
i.sR(0)
i.sc_(0.2)
n.b=i
i.gA().h(0,n.gaB())
n.c=null
n.d=!1
n.e=2.5
n.r=4
n.x=n.y=!1
n.z=0
n.Q=null
n.ch=0
n.cy=n.cx=null
h=new X.as(!0,!1,!1)
m=n.c
n.c=h
i=new D.M(a0,m,h,j)
i.b=!0
n.O(i)
n.aV(q)
a2.h(0,n)
q=s.r
n=new U.dZ()
n.c=0.01
n.e=n.d=0
h=new X.as(!1,!1,!1)
n.b=h
j=new D.M(a0,null,h,j)
j.b=!0
n.O(j)
n.aV(q)
a2.h(0,n)
k.sb2(a2)
a2=new M.dh()
a2.a=!0
a2.sez(0,O.kG(E.al))
a2.e.b8(a2.gfb(),a2.gfd())
a2.y=a2.x=a2.r=a2.f=null
g=X.n5(null)
f=new X.dD()
f.c=1.0471975511965976
f.d=0.1
f.e=2000
f.sb2(null)
q=f.c
if(!(Math.abs(q-1.0471975511965976)<$.N().a)){f.c=1.0471975511965976
q=new D.M("fov",q,1.0471975511965976,[P.z])
q.b=!0
f.aE(q)}q=f.d
if(!(Math.abs(q-0.1)<$.N().a)){f.d=0.1
q=new D.M("near",q,0.1,[P.z])
q.b=!0
f.aE(q)}q=f.e
if(!(Math.abs(q-2000)<$.N().a)){f.e=2000
q=new D.M("far",q,2000,[P.z])
q.b=!0
f.aE(q)}q=a2.b
if(q!==f){if(q!=null)q.gA().K(0,a2.gaC())
m=a2.b
a2.b=f
f.gA().h(0,a2.gaC())
q=new D.M("camera",m,a2.b,[X.db])
q.b=!0
a2.aD(q)}q=a2.c
if(q!==g){if(q!=null)q.gA().K(0,a2.gaC())
m=a2.c
a2.c=g
g.gA().h(0,a2.gaC())
q=new D.M("target",m,a2.c,[X.dN])
q.b=!0
a2.aD(q)}a2.e.h(0,k)
a2.b.sb2(U.lr(V.b2(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
q=s.d
if(q!==a2){if(q!=null)q.gA().K(0,s.gcA())
s.d=a2
a2.gA().h(0,s.gcA())
s.cB()}a1.a=null
a1.b=""
a1.c=1
e=new K.ka(a1,s,l)
a2=new V.i3(a,new K.kb(a1,e))
u=u.getElementById(a)
a2.c=u
if(u==null)H.v("Failed to find heightMaps for Texture2DGroup")
a2.Y(0,"../resources/HeightMap1.png",!0)
a2.h(0,"../resources/HeightMap2.png")
a2.h(0,"../resources/HeightMap3.png")
a2.h(0,"../resources/HeightMap4.png")
a2.h(0,"../resources/ScrewHeightMap.png")
d=new K.kc(a1,e)
a2=V.lJ("shapes")
a2.Y(0,"Cuboid",new K.kk(d))
a2.Y(0,"Cylinder",new K.kl(d))
a2.Y(0,"LatLonSphere",new K.km(d))
a2.Y(0,"Sphere",new K.kn(d))
a2.Y(0,"Toroid",new K.ko(d))
a2.Y(0,"Grid Small",new K.kp(d))
a2.bR(0,"Grid Medium",new K.kq(d),!0)
a2.Y(0,"Grid Large",new K.kr(d))
c=new K.kd(a1,e)
a1=V.lJ("scalars")
a1.Y(0,"0.1",new K.ke(c))
a1.Y(0,"0.2",new K.kf(c))
a1.Y(0,"0.4",new K.kg(c))
a1.bR(0,"0.6",new K.kh(c),!0)
a1.Y(0,"0.8",new K.ki(c))
a1.Y(0,"1.0",new K.kj(c))
V.p5(s)},
ka:function ka(a,b,c){this.a=a
this.b=b
this.c=c},
k9:function k9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kb:function kb(a,b){this.a=a
this.b=b},
kc:function kc(a,b){this.a=a
this.b=b},
kk:function kk(a){this.a=a},
kl:function kl(a){this.a=a},
km:function km(a){this.a=a},
kn:function kn(a){this.a=a},
ko:function ko(a){this.a=a},
kp:function kp(a){this.a=a},
kq:function kq(a){this.a=a},
kr:function kr(a){this.a=a},
kd:function kd(a,b){this.a=a
this.b=b},
ke:function ke(a){this.a=a},
kf:function kf(a){this.a=a},
kg:function kg(a){this.a=a},
kh:function kh(a){this.a=a},
ki:function ki(a){this.a=a},
kj:function kj(a){this.a=a}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,K]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kM.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gH:function(a){return H.cy(a)},
i:function(a){return"Instance of '"+H.j(H.cz(a))+"'"}}
J.fH.prototype={
i:function(a){return String(a)},
gH:function(a){return a?519018:218159},
$iaa:1}
J.dn.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gH:function(a){return 0}}
J.dp.prototype={
gH:function(a){return 0},
i:function(a){return String(a)}}
J.hs.prototype={}
J.c1.prototype={}
J.bv.prototype={
i:function(a){var u=a[$.mA()]
if(u==null)return this.e8(a)
return"JavaScript function for "+H.j(J.aq(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ikI:1}
J.aZ.prototype={
h:function(a,b){H.C(b,H.t(a,0))
if(!!a.fixed$length)H.v(P.F("add"))
a.push(b)},
dS:function(a,b){if(!!a.fixed$length)H.v(P.F("removeAt"))
if(b<0||b>=a.length)throw H.c(P.dH(b,null))
return a.splice(b,1)[0]},
K:function(a,b){var u
if(!!a.fixed$length)H.v(P.F("remove"))
for(u=0;u<a.length;++u)if(J.K(a[u],b)){a.splice(u,1)
return!0}return!1},
D:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.t(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.bp(a))}},
t:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.k(t,u,H.j(a[u]))
return t.join(b)},
i3:function(a){return this.t(a,"")},
hY:function(a,b,c,d){var u,t,s
H.C(b,d)
H.n(c,{func:1,ret:d,args:[d,H.t(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.bp(a))}return t},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
e6:function(a,b,c){if(b<0||b>a.length)throw H.c(P.ad(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.ad(c,b,a.length,"end",null))
if(b===c)return H.e([],[H.t(a,0)])
return H.e(a.slice(b,c),[H.t(a,0)])},
ghX:function(a){if(a.length>0)return a[0]
throw H.c(H.lw())},
gaw:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.lw())},
bq:function(a,b){var u=H.t(a,0)
H.n(b,{func:1,ret:P.l,args:[u,u]})
if(!!a.immutable$list)H.v(P.F("sort"))
H.dK(a,0,a.length-1,b,u)},
as:function(a,b){var u
for(u=0;u<a.length;++u)if(J.K(a[u],b))return!0
return!1},
i:function(a){return P.kJ(a,"[","]")},
gU:function(a){return new J.an(a,a.length,[H.t(a,0)])},
gH:function(a){return H.cy(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.v(P.F("set length"))
if(b<0)throw H.c(P.ad(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.c8(a,b))
return a[b]},
k:function(a,b,c){H.C(c,H.t(a,0))
if(!!a.immutable$list)H.v(P.F("indexed set"))
if(b>=a.length||b<0)throw H.c(H.c8(a,b))
a[b]=c},
$ik:1,
$id:1}
J.kL.prototype={}
J.an.prototype={
gJ:function(a){return this.d},
B:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.x(s))
u=t.c
if(u>=r){t.scE(null)
return!1}t.scE(s[u]);++t.c
return!0},
scE:function(a){this.d=H.C(a,H.t(this,0))},
$iaY:1}
J.co.prototype={
hF:function(a,b){var u
H.ms(b)
if(typeof b!=="number")throw H.c(H.aC(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbg(b)
if(this.gbg(a)===u)return 0
if(this.gbg(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbg:function(a){return a===0?1/a<0:a<0},
iD:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.F(""+a+".toInt()"))},
b0:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.F(""+a+".floor()"))},
ag:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.F(""+a+".round()"))},
dX:function(a,b){var u
if(b>20)throw H.c(P.ad(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbg(a))return"-"+u
return u},
b6:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.ad(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.S(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.v(P.F("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.b(t,1)
u=t[1]
if(3>=s)return H.b(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.m("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gH:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
ai:function(a,b){var u
if(typeof b!=="number")throw H.c(H.aC(b))
u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
cz:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d9(a,b)},
a0:function(a,b){return(a|0)===a?a/b|0:this.d9(a,b)},
d9:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.F("Result of truncating division is "+H.j(u)+": "+H.j(a)+" ~/ "+b))},
aH:function(a,b){var u
if(a>0)u=this.d8(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hd:function(a,b){if(b<0)throw H.c(H.aC(b))
return this.d8(a,b)},
d8:function(a,b){return b>31?0:a>>>b},
$iz:1,
$ia7:1}
J.dm.prototype={$il:1}
J.dl.prototype={}
J.bu.prototype={
S:function(a,b){if(b<0)throw H.c(H.c8(a,b))
if(b>=a.length)H.v(H.c8(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(b>=a.length)throw H.c(H.c8(a,b))
return a.charCodeAt(b)},
v:function(a,b){if(typeof b!=="string")throw H.c(P.kD(b,null,null))
return a+b},
aM:function(a,b,c,d){var u,t
c=P.bz(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a2:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ad(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a7:function(a,b){return this.a2(a,b,0)},
p:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.v(H.aC(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.M()
if(b<0)throw H.c(P.dH(b,null))
if(b>c)throw H.c(P.dH(b,null))
if(c>a.length)throw H.c(P.dH(c,null))
return a.substring(b,c)},
ad:function(a,b){return this.p(a,b,null)},
m:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.G)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
aa:function(a,b){var u=b-a.length
if(u<=0)return a
return this.m(" ",u)+a},
bf:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ad(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
dC:function(a,b){return this.bf(a,b,0)},
i:function(a){return a},
gH:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$ilD:1,
$ih:1}
H.a3.prototype={
gl:function(a){return this.a.length},
j:function(a,b){return C.b.S(this.a,b)},
$acJ:function(){return[P.l]},
$au:function(){return[P.l]},
$ak:function(){return[P.l]},
$ad:function(){return[P.l]}}
H.fs.prototype={}
H.ds.prototype={
gJ:function(a){return this.d},
B:function(){var u,t=this,s=t.a,r=J.d_(s),q=r.gl(s)
if(t.b!==q)throw H.c(P.bp(s))
u=t.c
if(u>=q){t.saP(null)
return!1}t.saP(r.I(s,u));++t.c
return!0},
saP:function(a){this.d=H.C(a,H.t(this,0))},
$iaY:1}
H.fX.prototype={
gU:function(a){return new H.fY(J.bF(this.a),this.b,this.$ti)},
gl:function(a){return J.aF(this.a)},
I:function(a,b){return this.b.$1(J.kC(this.a,b))},
$ak:function(a,b){return[b]}}
H.fY.prototype={
B:function(){var u=this,t=u.b
if(t.B()){u.saP(u.c.$1(t.gJ(t)))
return!0}u.saP(null)
return!1},
gJ:function(a){return this.a},
saP:function(a){this.a=H.C(a,H.t(this,1))},
$aaY:function(a,b){return[b]}}
H.iY.prototype={
gU:function(a){return new H.iZ(J.bF(this.a),this.b,this.$ti)}}
H.iZ.prototype={
B:function(){var u,t
for(u=this.a,t=this.b;u.B();)if(H.E(t.$1(u.gJ(u))))return!0
return!1},
gJ:function(a){var u=this.a
return u.gJ(u)}}
H.bM.prototype={}
H.cJ.prototype={
k:function(a,b,c){H.C(c,H.aD(this,"cJ",0))
throw H.c(P.F("Cannot modify an unmodifiable list"))}}
H.dU.prototype={}
H.ff.prototype={
i:function(a){return P.kP(this)},
k:function(a,b,c){H.C(b,H.t(this,0))
H.C(c,H.t(this,1))
return H.n1()},
$iy:1}
H.fg.prototype={
gl:function(a){return this.a},
be:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.be(0,b))return
return this.cS(b)},
cS:function(a){return this.b[H.U(a)]},
D:function(a,b){var u,t,s,r,q=this,p=H.t(q,1)
H.n(b,{func:1,ret:-1,args:[H.t(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.C(q.cS(r),p))}}}
H.ii.prototype={
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
H.ho.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.j(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fJ.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.j(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.j(t.a)+")"
return s+r+"' on '"+u+"' ("+H.j(t.a)+")"}}
H.iw.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kz.prototype={
$1:function(a){if(!!J.P(a).$ibs)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:23}
H.ex.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iao:1}
H.ch.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
$ikI:1,
giJ:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.i_.prototype={}
H.hS.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cc(u)+"'"}}
H.ce.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.ce))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gH:function(a){var u,t=this.c
if(t==null)u=H.cy(this.a)
else u=typeof t!=="object"?J.d4(t):H.cy(t)
return(u^H.cy(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.j(H.cz(u))+"'")}}
H.ik.prototype={
i:function(a){return this.a}}
H.fb.prototype={
i:function(a){return this.a}}
H.hE.prototype={
i:function(a){return"RuntimeError: "+H.j(this.a)}}
H.j_.prototype={
i:function(a){return"Assertion failed: "+P.di(this.a)}}
H.Z.prototype={
gl:function(a){return this.a},
gal:function(a){return new H.fO(this,[H.t(this,0)])},
be:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cO(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cO(t,b)}else return s.i0(b)},
i0:function(a){var u=this,t=u.d
if(t==null)return!1
return u.c8(u.bx(t,u.c7(a)),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.b9(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.b9(r,b)
s=t==null?null:t.b
return s}else return q.i1(b)},
i1:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bx(r,s.c7(a))
t=s.c8(u,a)
if(t<0)return
return u[t].b},
k:function(a,b,c){var u,t,s=this
H.C(b,H.t(s,0))
H.C(c,H.t(s,1))
if(typeof b==="string"){u=s.b
s.cF(u==null?s.b=s.bG():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cF(t==null?s.c=s.bG():t,b,c)}else s.i2(b,c)},
i2:function(a,b){var u,t,s,r,q=this
H.C(a,H.t(q,0))
H.C(b,H.t(q,1))
u=q.d
if(u==null)u=q.d=q.bG()
t=q.c7(a)
s=q.bx(u,t)
if(s==null)q.bN(u,t,[q.bH(a,b)])
else{r=q.c8(s,a)
if(r>=0)s[r].b=b
else s.push(q.bH(a,b))}},
D:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.t(s,0),H.t(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.c(P.bp(s))
u=u.c}},
cF:function(a,b,c){var u,t=this
H.C(b,H.t(t,0))
H.C(c,H.t(t,1))
u=t.b9(a,b)
if(u==null)t.bN(a,b,t.bH(b,c))
else u.b=c},
bH:function(a,b){var u=this,t=new H.fN(H.C(a,H.t(u,0)),H.C(b,H.t(u,1)))
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
c7:function(a){return J.d4(a)&0x3ffffff},
c8:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.K(a[t].a,b))return t
return-1},
i:function(a){return P.kP(this)},
b9:function(a,b){return a[b]},
bx:function(a,b){return a[b]},
bN:function(a,b,c){a[b]=c},
eD:function(a,b){delete a[b]},
cO:function(a,b){return this.b9(a,b)!=null},
bG:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bN(t,u,t)
this.eD(t,u)
return t}}
H.fN.prototype={}
H.fO.prototype={
gl:function(a){return this.a.a},
gU:function(a){var u=this.a,t=new H.fP(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fP.prototype={
gJ:function(a){return this.d},
B:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bp(t))
else{t=u.c
if(t==null){u.scR(null)
return!1}else{u.scR(t.a)
u.c=u.c.c
return!0}}},
scR:function(a){this.d=H.C(a,H.t(this,0))},
$iaY:1}
H.k4.prototype={
$1:function(a){return this.a(a)},
$S:23}
H.k5.prototype={
$2:function(a,b){return this.a(a,b)},
$S:39}
H.k6.prototype={
$1:function(a){return this.a(H.U(a))},
$S:40}
H.fI.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$ilD:1,
$inv:1}
H.ct.prototype={$ict:1}
H.bw.prototype={$ibw:1,$inF:1}
H.dz.prototype={
gl:function(a){return a.length},
$iI:1,
$aI:function(){}}
H.cu.prototype={
j:function(a,b){H.b9(b,a,a.length)
return a[b]},
k:function(a,b,c){H.oP(c)
H.b9(b,a,a.length)
a[b]=c},
$abM:function(){return[P.z]},
$au:function(){return[P.z]},
$ik:1,
$ak:function(){return[P.z]},
$id:1,
$ad:function(){return[P.z]}}
H.dA.prototype={
k:function(a,b,c){H.ab(c)
H.b9(b,a,a.length)
a[b]=c},
$abM:function(){return[P.l]},
$au:function(){return[P.l]},
$ik:1,
$ak:function(){return[P.l]},
$id:1,
$ad:function(){return[P.l]}}
H.hi.prototype={
j:function(a,b){H.b9(b,a,a.length)
return a[b]}}
H.hj.prototype={
j:function(a,b){H.b9(b,a,a.length)
return a[b]}}
H.hk.prototype={
j:function(a,b){H.b9(b,a,a.length)
return a[b]}}
H.hl.prototype={
j:function(a,b){H.b9(b,a,a.length)
return a[b]}}
H.hm.prototype={
j:function(a,b){H.b9(b,a,a.length)
return a[b]}}
H.dB.prototype={
gl:function(a){return a.length},
j:function(a,b){H.b9(b,a,a.length)
return a[b]},
$ipx:1}
H.cv.prototype={
gl:function(a){return a.length},
j:function(a,b){H.b9(b,a,a.length)
return a[b]},
$icv:1,
$iL:1}
H.cO.prototype={}
H.cP.prototype={}
H.cQ.prototype={}
H.cR.prototype={}
P.j1.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:26}
P.j0.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:31}
P.j2.prototype={
$0:function(){this.a.$0()},
$S:0}
P.j3.prototype={
$0:function(){this.a.$0()},
$S:0}
P.eE.prototype={
em:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.c7(new P.jA(this,b),0),a)
else throw H.c(P.F("`setTimeout()` not found."))},
en:function(a,b){if(self.setTimeout!=null)self.setInterval(H.c7(new P.jz(this,a,Date.now(),b),0),a)
else throw H.c(P.F("Periodic timer."))},
$ib4:1}
P.jA.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.jz.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.cz(u,q)}s.c=r
t.d.$1(s)},
$S:0}
P.b8.prototype={
i6:function(a){if((this.c&15)!==6)return!0
return this.b.b.cl(H.n(this.d,{func:1,ret:P.aa,args:[P.O]}),a.a,P.aa,P.O)},
i_:function(a){var u=this.e,t=P.O,s={futureOr:1,type:H.t(this,1)},r=this.b.b
if(H.eV(u,{func:1,args:[P.O,P.ao]}))return H.la(r.iy(u,a.a,a.b,null,t,P.ao),s)
else return H.la(r.cl(H.n(u,{func:1,args:[P.O]}),a.a,null,t),s)}}
P.aA.prototype={
dW:function(a,b,c){var u,t,s,r=H.t(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.Y
if(u!==C.f){H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.oz(b,u)}t=new P.aA($.Y,[c])
s=b==null?1:3
this.cG(new P.b8(t,s,a,b,[r,c]))
return t},
iC:function(a,b){return this.dW(a,null,b)},
cG:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.f(t.c,"$ib8")
t.c=a}else{if(s===2){u=H.f(t.c,"$iaA")
s=u.a
if(s<4){u.cG(a)
return}t.a=s
t.c=u.c}P.jU(null,null,t.b,H.n(new P.jb(t,a),{func:1,ret:-1}))}},
d2:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.f(p.c,"$ib8")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.f(p.c,"$iaA")
u=q.a
if(u<4){q.d2(a)
return}p.a=u
p.c=q.c}o.a=p.ba(a)
P.jU(null,null,p.b,H.n(new P.jf(o,p),{func:1,ret:-1}))}},
bK:function(){var u=H.f(this.c,"$ib8")
this.c=null
return this.ba(u)},
ba:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cK:function(a){var u,t,s=this,r=H.t(s,0)
H.la(a,{futureOr:1,type:r})
u=s.$ti
if(H.l7(a,"$icl",u,"$acl"))if(H.l7(a,"$iaA",u,null))P.m0(a,s)
else P.nS(a,s)
else{t=s.bK()
H.C(a,r)
s.a=4
s.c=a
P.cM(s,t)}},
cL:function(a,b){var u,t=this
H.f(b,"$iao")
u=t.bK()
t.a=8
t.c=new P.aj(a,b)
P.cM(t,u)},
$icl:1}
P.jb.prototype={
$0:function(){P.cM(this.a,this.b)},
$S:0}
P.jf.prototype={
$0:function(){P.cM(this.b,this.a.a)},
$S:0}
P.jc.prototype={
$1:function(a){var u=this.a
u.a=0
u.cK(a)},
$S:26}
P.jd.prototype={
$2:function(a,b){H.f(b,"$iao")
this.a.cL(a,b)},
$1:function(a){return this.$2(a,null)},
$S:49}
P.je.prototype={
$0:function(){this.a.cL(this.b,this.c)},
$S:0}
P.ji.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.dU(H.n(s.d,{func:1}),null)}catch(r){u=H.aE(r)
t=H.ca(r)
if(o.d){s=H.f(o.a.a.c,"$iaj").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.f(o.a.a.c,"$iaj")
else q.b=new P.aj(u,t)
q.a=!0
return}if(!!J.P(n).$icl){if(n instanceof P.aA&&n.a>=4){if(n.a===8){s=o.b
s.b=H.f(n.c,"$iaj")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.iC(new P.jj(p),null)
s.a=!1}},
$S:3}
P.jj.prototype={
$1:function(a){return this.a},
$S:45}
P.jh.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.t(s,0)
q=H.C(n.c,r)
p=H.t(s,1)
n.a.b=s.b.b.cl(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.aE(o)
t=H.ca(o)
s=n.a
s.b=new P.aj(u,t)
s.a=!0}},
$S:3}
P.jg.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.f(m.a.a.c,"$iaj")
r=m.c
if(H.E(r.i6(u))&&r.e!=null){q=m.b
q.b=r.i_(u)
q.a=!1}}catch(p){t=H.aE(p)
s=H.ca(p)
r=H.f(m.a.a.c,"$iaj")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.aj(t,s)
n.a=!0}},
$S:3}
P.e0.prototype={}
P.hV.prototype={
gl:function(a){var u,t,s=this,r={},q=new P.aA($.Y,[P.l])
r.a=0
u=H.t(s,0)
t=H.n(new P.hX(r,s),{func:1,ret:-1,args:[u]})
H.n(new P.hY(r,q),{func:1,ret:-1})
W.a5(s.a,s.b,t,!1,u)
return q}}
P.hX.prototype={
$1:function(a){H.C(a,H.t(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.G,args:[H.t(this.b,0)]}}}
P.hY.prototype={
$0:function(){this.b.cK(this.a.a)},
$S:0}
P.cC.prototype={}
P.hW.prototype={}
P.b4.prototype={}
P.aj.prototype={
i:function(a){return H.j(this.a)},
$ibs:1}
P.jJ.prototype={$ipL:1}
P.jT.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dC():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u},
$S:0}
P.jp.prototype={
iz:function(a){var u,t,s,r=null
H.n(a,{func:1,ret:-1})
try{if(C.f===$.Y){a.$0()
return}P.m9(r,r,this,a,-1)}catch(s){u=H.aE(s)
t=H.ca(s)
P.jS(r,r,this,u,H.f(t,"$iao"))}},
iA:function(a,b,c){var u,t,s,r=null
H.n(a,{func:1,ret:-1,args:[c]})
H.C(b,c)
try{if(C.f===$.Y){a.$1(b)
return}P.ma(r,r,this,a,b,-1,c)}catch(s){u=H.aE(s)
t=H.ca(s)
P.jS(r,r,this,u,H.f(t,"$iao"))}},
hB:function(a,b){return new P.jr(this,H.n(a,{func:1,ret:b}),b)},
bT:function(a){return new P.jq(this,H.n(a,{func:1,ret:-1}))},
de:function(a,b){return new P.js(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
dU:function(a,b){H.n(a,{func:1,ret:b})
if($.Y===C.f)return a.$0()
return P.m9(null,null,this,a,b)},
cl:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.C(b,d)
if($.Y===C.f)return a.$1(b)
return P.ma(null,null,this,a,b,c,d)},
iy:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.C(b,e)
H.C(c,f)
if($.Y===C.f)return a.$2(b,c)
return P.oA(null,null,this,a,b,c,d,e,f)}}
P.jr.prototype={
$0:function(){return this.a.dU(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jq.prototype={
$0:function(){return this.a.iz(this.b)},
$S:3}
P.js.prototype={
$1:function(a){var u=this.c
return this.a.iA(this.b,H.C(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jn.prototype={
gU:function(a){var u=this,t=new P.ef(u,u.r,u.$ti)
t.c=u.e
return t},
gl:function(a){return this.a},
h:function(a,b){var u,t,s=this
H.C(b,H.t(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cI(u==null?s.b=P.kZ():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cI(t==null?s.c=P.kZ():t,b)}else return s.ep(0,b)},
ep:function(a,b){var u,t,s,r=this
H.C(b,H.t(r,0))
u=r.d
if(u==null)u=r.d=P.kZ()
t=r.cM(b)
s=u[t]
if(s==null)u[t]=[r.bt(b)]
else{if(r.cT(s,b)>=0)return!1
s.push(r.bt(b))}return!0},
K:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fZ(this.c,b)
else return this.fY(0,b)},
fY:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.eO(r,b)
t=s.cT(u,b)
if(t<0)return!1
s.da(u.splice(t,1)[0])
return!0},
cI:function(a,b){H.C(b,H.t(this,0))
if(H.f(a[b],"$icN")!=null)return!1
a[b]=this.bt(b)
return!0},
fZ:function(a,b){var u
if(a==null)return!1
u=H.f(a[b],"$icN")
if(u==null)return!1
this.da(u)
delete a[b]
return!0},
cX:function(){this.r=1073741823&this.r+1},
bt:function(a){var u,t=this,s=new P.cN(H.C(a,H.t(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cX()
return s},
da:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cX()},
cM:function(a){return J.d4(a)&1073741823},
eO:function(a,b){return a[this.cM(b)]},
cT:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.K(a[t].a,b))return t
return-1}}
P.cN.prototype={}
P.ef.prototype={
gJ:function(a){return this.d},
B:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bp(t))
else{t=u.c
if(t==null){u.scJ(null)
return!1}else{u.scJ(H.C(t.a,H.t(u,0)))
u.c=u.c.b
return!0}}},
scJ:function(a){this.d=H.C(a,H.t(this,0))},
$iaY:1}
P.fQ.prototype={
$2:function(a,b){this.a.k(0,H.C(a,this.b),H.C(b,this.c))},
$S:7}
P.fR.prototype={$ik:1,$id:1}
P.u.prototype={
gU:function(a){return new H.ds(a,this.gl(a),[H.bC(this,a,"u",0)])},
I:function(a,b){return this.j(a,b)},
D:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.bC(s,a,"u",0)]})
u=s.gl(a)
for(t=0;t<u;++t){b.$1(s.j(a,t))
if(u!==s.gl(a))throw H.c(P.bp(a))}},
iF:function(a,b){var u,t=this,s=H.e([],[H.bC(t,a,"u",0)])
C.a.sl(s,t.gl(a))
for(u=0;u<t.gl(a);++u)C.a.k(s,u,t.j(a,u))
return s},
iE:function(a){return this.iF(a,!0)},
hV:function(a,b,c,d){var u
H.C(d,H.bC(this,a,"u",0))
P.bz(b,c,this.gl(a))
for(u=b;u<c;++u)this.k(a,u,d)},
i:function(a){return P.kJ(a,"[","]")}}
P.fU.prototype={}
P.fV.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.j(a)
t.a=u+": "
t.a+=H.j(b)},
$S:7}
P.af.prototype={
D:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.bC(s,a,"af",0),H.bC(s,a,"af",1)]})
for(u=J.bF(s.gal(a));u.B();){t=u.gJ(u)
b.$2(t,s.j(a,t))}},
gl:function(a){return J.aF(this.gal(a))},
i:function(a){return P.kP(a)},
$iy:1}
P.jB.prototype={
k:function(a,b,c){H.C(b,H.t(this,0))
H.C(c,H.t(this,1))
throw H.c(P.F("Cannot modify unmodifiable map"))}}
P.fW.prototype={
j:function(a,b){return J.d3(this.a,b)},
k:function(a,b,c){J.kA(this.a,H.C(b,H.t(this,0)),H.C(c,H.t(this,1)))},
D:function(a,b){J.lm(this.a,H.n(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]}))},
gl:function(a){return J.aF(this.a)},
i:function(a){return J.aq(this.a)},
$iy:1}
P.dV.prototype={}
P.jt.prototype={
i:function(a){return P.kJ(this,"{","}")},
I:function(a,b){var u,t,s,r=this
P.lK(b,"index")
for(u=P.nU(r,r.r,H.t(r,0)),t=0;u.B();){s=u.d
if(b===t)return s;++t}throw H.c(P.W(b,r,"index",null,t))},
$ik:1,
$ilN:1}
P.eg.prototype={}
P.eK.prototype={}
P.f7.prototype={
i8:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bz(a0,a1,b.length)
u=$.mN()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.b.F(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.k3(C.b.F(b,n))
j=H.k3(C.b.F(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.b(u,i)
h=u[i]
if(h>=0){i=C.b.S("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.a4("")
g=r.a+=C.b.p(b,s,t)
r.a=g+H.dF(m)
s=n
continue}}throw H.c(P.a0("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.p(b,s,a1)
f=g.length
if(q>=0)P.ln(b,p,a1,q,o,f)
else{e=C.d.ai(f-1,4)+1
if(e===1)throw H.c(P.a0(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.aM(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.ln(b,p,a1,q,o,d)
else{e=C.d.ai(d,4)
if(e===1)throw H.c(P.a0(c,b,a1))
if(e>1)b=C.b.aM(b,a1,a1,e===2?"==":"=")}return b},
$abJ:function(){return[[P.d,P.l],P.h]}}
P.f8.prototype={
$abK:function(){return[[P.d,P.l],P.h]}}
P.bJ.prototype={}
P.bK.prototype={}
P.ft.prototype={
$abJ:function(){return[P.h,[P.d,P.l]]}}
P.iF.prototype={
ghU:function(){return C.H}}
P.iH.prototype={
bY:function(a){var u,t,s=P.bz(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.jI(u)
if(t.eM(a,0,s)!==s)t.dc(J.mT(a,s-1),0)
return new Uint8Array(u.subarray(0,H.oa(0,t.b,u.length)))},
$abK:function(){return[P.h,[P.d,P.l]]}}
P.jI.prototype={
dc:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
eM:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.S(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.F(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dc(r,C.b.F(a,p)))s=p}else if(r<=2047){q=n.b
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
P.iG.prototype={
bY:function(a){var u,t,s,r,q,p,o,n,m
H.o(a,"$id",[P.l],"$ad")
u=P.nI(!1,a,0,null)
if(u!=null)return u
t=P.bz(0,null,J.aF(a))
s=P.mc(a,0,t)
if(s>0){r=P.cD(a,0,s)
if(s===t)return r
q=new P.a4(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.a4("")
n=new P.jH(!1,q)
n.c=o
n.hG(a,p,t)
if(n.e>0){H.v(P.a0("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.dF(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$abK:function(){return[[P.d,P.l],P.h]}}
P.jH.prototype={
hG:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.o(a,"$id",[P.l],"$ad")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.d_(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.j(a,p)
if(typeof o!=="number")return o.ac()
if((o&192)!==128){n=P.a0(h+C.d.b6(o,16),a,p)
throw H.c(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.b(C.t,n)
if(u<=C.t[n]){n=P.a0("Overlong encoding of 0x"+C.d.b6(u,16),a,p-s-1)
throw H.c(n)}if(u>1114111){n=P.a0("Character outside valid Unicode range: 0x"+C.d.b6(u,16),a,p-s-1)
throw H.c(n)}if(!i.c||u!==65279)q.a+=H.dF(u)
i.c=!1}for(n=p<c;n;){m=P.mc(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.cD(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.j(a,l)
if(typeof o!=="number")return o.M()
if(o<0){j=P.a0("Negative UTF-8 code unit: -0x"+C.d.b6(-o,16),a,k-1)
throw H.c(j)}else{if((o&224)===192){u=o&31
t=1
s=1
continue $label0$0}if((o&240)===224){u=o&15
t=2
s=2
continue $label0$0}if((o&248)===240&&o<245){u=o&7
t=3
s=3
continue $label0$0}j=P.a0(h+C.d.b6(o,16),a,k-1)
throw H.c(j)}}break $label0$0}if(t>0){i.d=u
i.e=t
i.f=s}}}
P.aa.prototype={}
P.ar.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.ar&&this.a===b.a&&!0},
gH:function(a){var u=this.a
return(u^C.d.aH(u,30))&1073741823},
i:function(a){var u=this,t=P.n2(H.nr(u)),s=P.dd(H.np(u)),r=P.dd(H.nl(u)),q=P.dd(H.nm(u)),p=P.dd(H.no(u)),o=P.dd(H.nq(u)),n=P.n3(H.nn(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.z.prototype={}
P.br.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.br&&this.a===b.a},
gH:function(a){return C.d.gH(this.a)},
i:function(a){var u,t,s,r=new P.fr(),q=this.a
if(q<0)return"-"+new P.br(0-q).i(0)
u=r.$1(C.d.a0(q,6e7)%60)
t=r.$1(C.d.a0(q,1e6)%60)
s=new P.fq().$1(q%1e6)
return""+C.d.a0(q,36e8)+":"+H.j(u)+":"+H.j(t)+"."+H.j(s)}}
P.fq.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:17}
P.fr.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:17}
P.bs.prototype={}
P.f1.prototype={
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
r=P.di(q.b)
return t+s+": "+r}}
P.bT.prototype={
gbv:function(){return"RangeError"},
gbu:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.j(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.j(s)
else if(t>s)u=": Not in range "+H.j(s)+".."+H.j(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.j(s)}return u}}
P.fG.prototype={
gbv:function(){return"RangeError"},
gbu:function(){var u,t=H.ab(this.b)
if(typeof t!=="number")return t.M()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.j(u)},
gl:function(a){return this.f}}
P.ix.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iu.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.hR.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fe.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.di(u)+"."}}
P.hr.prototype={
i:function(a){return"Out of Memory"},
$ibs:1}
P.dM.prototype={
i:function(a){return"Stack Overflow"},
$ibs:1}
P.fl.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.e8.prototype={
i:function(a){return"Exception: "+this.a}}
P.fD.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.b.p(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.b.F(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.b.S(f,q)
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
return h+l+j+k+"\n"+C.b.m(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.j(g)+")"):h}}
P.l.prototype={}
P.k.prototype={
gl:function(a){var u,t=this.gU(this)
for(u=0;t.B();)++u
return u},
I:function(a,b){var u,t,s
P.lK(b,"index")
for(u=this.gU(this),t=0;u.B();){s=u.gJ(u)
if(b===t)return s;++t}throw H.c(P.W(b,this,"index",null,t))},
i:function(a){return P.n7(this,"(",")")}}
P.aY.prototype={}
P.d.prototype={$ik:1}
P.y.prototype={}
P.G.prototype={
gH:function(a){return P.O.prototype.gH.call(this,this)},
i:function(a){return"null"}}
P.a7.prototype={}
P.O.prototype={constructor:P.O,$iO:1,
n:function(a,b){return this===b},
gH:function(a){return H.cy(this)},
i:function(a){return"Instance of '"+H.j(H.cz(this))+"'"},
toString:function(){return this.i(this)}}
P.ao.prototype={}
P.h.prototype={$ilD:1}
P.a4.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ipl:1}
P.iD.prototype={
$2:function(a,b){var u,t,s,r=P.h
H.o(a,"$iy",[r,r],"$ay")
H.U(b)
u=J.lb(b).dC(b,"=")
if(u===-1){if(b!=="")J.kA(a,P.l2(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.p(b,0,u)
s=C.b.ad(b,u+1)
r=this.a
J.kA(a,P.l2(t,0,t.length,r,!0),P.l2(s,0,s.length,r,!0))}return a},
$S:44}
P.iz.prototype={
$2:function(a,b){throw H.c(P.a0("Illegal IPv4 address, "+a,this.a,b))},
$S:43}
P.iB.prototype={
$2:function(a,b){throw H.c(P.a0("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:41}
P.iC.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.d0(C.b.p(this.b,a,b),null,16)
if(typeof u!=="number")return u.M()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:38}
P.c2.prototype={
ge2:function(){return this.b},
gc6:function(a){var u=this.c
if(u==null)return""
if(C.b.a7(u,"["))return C.b.p(u,1,u.length-1)
return u},
gbj:function(a){var u=this.d
if(u==null)return P.m2(this.a)
return u},
gcg:function(a){var u=this.f
return u==null?"":u},
gdv:function(){var u=this.r
return u==null?"":u},
cj:function(a,b){var u,t,s,r,q,p,o,n,m=this
H.o(b,"$iy",[P.h,null],"$ay")
u=m.a
t=u==="file"
s=m.b
r=m.d
q=m.c
if(!(q!=null))q=s.length!==0||r!=null||t?"":null
p=m.e
if(!t)o=q!=null&&p.length!==0
else o=!0
if(o&&!C.b.a7(p,"/"))p="/"+p
n=P.l0(null,0,0,b)
return new P.c2(u,s,q,r,p,n,m.r)},
gb5:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.h
s.sfX(new P.dV(P.lV(u==null?"":u),[t,t]))}return s.Q},
gdw:function(){return this.c!=null},
gdB:function(){return this.f!=null},
gdz:function(){return this.r!=null},
i:function(a){var u,t,s,r=this,q=r.y
if(q==null){q=r.a
u=q.length!==0?H.j(q)+":":""
t=r.c
s=t==null
if(!s||q==="file"){q=u+"//"
u=r.b
if(u.length!==0)q=q+H.j(u)+"@"
if(!s)q+=t
u=r.d
if(u!=null)q=q+":"+H.j(u)}else q=u
q+=r.e
u=r.f
if(u!=null)q=q+"?"+u
u=r.r
if(u!=null)q=q+"#"+u
q=r.y=q.charCodeAt(0)==0?q:q}return q},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.P(b).$ikT)if(s.a==b.gbp())if(s.c!=null===b.gdw())if(s.b==b.ge2())if(s.gc6(s)==b.gc6(b))if(s.gbj(s)==b.gbj(b))if(s.e===b.gdO(b)){u=s.f
t=u==null
if(!t===b.gdB()){if(t)u=""
if(u===b.gcg(b)){u=s.r
t=u==null
if(!t===b.gdz()){if(t)u=""
u=u===b.gdv()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gH:function(a){var u=this.z
return u==null?this.z=C.b.gH(this.i(0)):u},
sfX:function(a){var u=P.h
this.Q=H.o(a,"$iy",[u,u],"$ay")},
$ikT:1,
gbp:function(){return this.a},
gdO:function(a){return this.e}}
P.jC.prototype={
$1:function(a){throw H.c(P.a0("Invalid port",this.a,this.b+1))},
$S:20}
P.jD.prototype={
$1:function(a){return P.jG(C.P,a,C.h,!1)},
$S:37}
P.jF.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.j(P.jG(C.i,a,C.h,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.j(P.jG(C.i,b,C.h,!0))}},
$S:22}
P.jE.prototype={
$2:function(a,b){var u,t
H.U(a)
if(b==null||typeof b==="string")this.a.$2(a,H.U(b))
else for(u=J.bF(H.mq(b,"$ik")),t=this.a;u.B();)t.$2(a,H.U(u.gJ(u)))},
$S:55}
P.iy.prototype={
ge1:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.b(o,0)
u=q.a
o=o[0]+1
t=C.b.bf(u,"?",o)
s=u.length
if(t>=0){r=P.cW(u,t+1,s,C.m,!1)
s=t}else r=p
return q.c=new P.j7("data",p,p,p,P.cW(u,o,s,C.v,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.b(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.jN.prototype={
$1:function(a){return new Uint8Array(96)},
$S:36}
P.jM.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.b(u,a)
u=u[a]
J.mU(u,0,96,b)
return u},
$S:34}
P.jO.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.b.F(b,s)^96
if(r>=t)return H.b(a,r)
a[r]=c}}}
P.jP.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.b.F(b,0),t=C.b.F(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.b(a,r)
a[r]=c}}}
P.ju.prototype={
gdw:function(){return this.c>0},
gdA:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.v()
t=this.e
if(typeof t!=="number")return H.p(t)
t=u+1<t
u=t}else u=!1
return u},
gdB:function(){var u=this.f
if(typeof u!=="number")return u.M()
return u<this.r},
gdz:function(){return this.r<this.a.length},
gcV:function(){return this.b===4&&C.b.a7(this.a,"http")},
gcW:function(){return this.b===5&&C.b.a7(this.a,"https")},
gbp:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gcV())q=t.x="http"
else if(t.gcW()){t.x="https"
q="https"}else if(q===4&&C.b.a7(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.a7(t.a,r)){t.x=r
q=r}else{q=C.b.p(t.a,0,q)
t.x=q}return q},
ge2:function(){var u=this.c,t=this.b+3
return u>t?C.b.p(this.a,t,u-1):""},
gc6:function(a){var u=this.c
return u>0?C.b.p(this.a,u,this.d):""},
gbj:function(a){var u,t=this
if(t.gdA()){u=t.d
if(typeof u!=="number")return u.v()
return P.d0(C.b.p(t.a,u+1,t.e),null,null)}if(t.gcV())return 80
if(t.gcW())return 443
return 0},
gdO:function(a){return C.b.p(this.a,this.e,this.f)},
gcg:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.M()
return u<t?C.b.p(this.a,u+1,t):""},
gdv:function(){var u=this.r,t=this.a
return u<t.length?C.b.ad(t,u+1):""},
gb5:function(){var u=this,t=u.f
if(typeof t!=="number")return t.M()
if(t>=u.r)return C.Q
t=P.h
return new P.dV(P.lV(u.gcg(u)),[t,t])},
cj:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.o(b,"$iy",[P.h,null],"$ay")
u=k.gbp()
t=u==="file"
s=k.c
r=s>0?C.b.p(k.a,k.b+3,s):""
q=k.gdA()?k.gbj(k):j
s=k.c
if(s>0)p=C.b.p(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.p(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.a7(o,"/"))o="/"+o
m=P.l0(j,0,0,b)
n=k.r
l=n<s.length?C.b.ad(s,n+1):j
return new P.c2(u,r,p,q,o,m,l)},
gH:function(a){var u=this.y
return u==null?this.y=C.b.gH(this.a):u},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.P(b).$ikT&&this.a===b.i(0)},
i:function(a){return this.a},
$ikT:1}
P.j7.prototype={}
W.r.prototype={}
W.eY.prototype={
gl:function(a){return a.length}}
W.f_.prototype={
i:function(a){return String(a)}}
W.f0.prototype={
i:function(a){return String(a)}}
W.bH.prototype={$ibH:1}
W.bI.prototype={
cq:function(a,b,c){if(c!=null)return a.getContext(b,P.oI(c))
return a.getContext(b)},
e3:function(a,b){return this.cq(a,b,null)},
$ibI:1}
W.cg.prototype={$icg:1}
W.bn.prototype={
gl:function(a){return a.length}}
W.ci.prototype={$ici:1}
W.fh.prototype={
gl:function(a){return a.length}}
W.Q.prototype={$iQ:1}
W.cj.prototype={
gl:function(a){return a.length}}
W.fi.prototype={}
W.aW.prototype={}
W.aX.prototype={}
W.fj.prototype={
gl:function(a){return a.length}}
W.fk.prototype={
gl:function(a){return a.length}}
W.fm.prototype={
gl:function(a){return a.length}}
W.de.prototype={$ide:1}
W.fn.prototype={
i:function(a){return String(a)}}
W.df.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.o(c,"$iah",[P.a7],"$aah")
throw H.c(P.F("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iI:1,
$aI:function(){return[[P.ah,P.a7]]},
$au:function(){return[[P.ah,P.a7]]},
$ik:1,
$ak:function(){return[[P.ah,P.a7]]},
$id:1,
$ad:function(){return[[P.ah,P.a7]]},
$aD:function(){return[[P.ah,P.a7]]}}
W.dg.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.gaz(a))+" x "+H.j(this.gau(a))},
n:function(a,b){var u
if(b==null)return!1
u=J.P(b)
if(!u.$iah)return!1
return a.left===u.gbh(b)&&a.top===u.gbl(b)&&this.gaz(a)===u.gaz(b)&&this.gau(a)===u.gau(b)},
gH:function(a){return W.m1(C.e.gH(a.left),C.e.gH(a.top),C.e.gH(this.gaz(a)),C.e.gH(this.gau(a)))},
gdf:function(a){return a.bottom},
gau:function(a){return a.height},
gbh:function(a){return a.left},
gck:function(a){return a.right},
gbl:function(a){return a.top},
gaz:function(a){return a.width},
$iah:1,
$aah:function(){return[P.a7]}}
W.fo.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.U(c)
throw H.c(P.F("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iI:1,
$aI:function(){return[P.h]},
$au:function(){return[P.h]},
$ik:1,
$ak:function(){return[P.h]},
$id:1,
$ad:function(){return[P.h]},
$aD:function(){return[P.h]}}
W.fp.prototype={
gl:function(a){return a.length}}
W.j5.prototype={
gl:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.b(u,b)
return H.f(u[b],"$iT")},
k:function(a,b,c){var u
H.f(c,"$iT")
u=this.b
if(b<0||b>=u.length)return H.b(u,b)
this.a.replaceChild(c,u[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gU:function(a){var u=this.iE(this)
return new J.an(u,u.length,[H.t(u,0)])},
$au:function(){return[W.T]},
$ak:function(){return[W.T]},
$ad:function(){return[W.T]}}
W.T.prototype={
gbX:function(a){return new W.j5(a,a.children)},
gdg:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.M()
if(s<0)s=-s*0
if(typeof r!=="number")return r.M()
if(r<0)r=-r*0
return new P.ah(u,t,s,r,[P.a7])},
i:function(a){return a.localName},
$iT:1}
W.m.prototype={$im:1}
W.i.prototype={
hu:function(a,b,c,d){H.n(c,{func:1,args:[W.m]})
if(c!=null)this.eq(a,b,c,!1)},
eq:function(a,b,c,d){return a.addEventListener(b,H.c7(H.n(c,{func:1,args:[W.m]}),1),!1)},
$ii:1}
W.au.prototype={$iau:1}
W.ck.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iau")
throw H.c(P.F("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.au]},
$au:function(){return[W.au]},
$ik:1,
$ak:function(){return[W.au]},
$id:1,
$ad:function(){return[W.au]},
$ick:1,
$aD:function(){return[W.au]}}
W.fy.prototype={
gl:function(a){return a.length}}
W.fC.prototype={
gl:function(a){return a.length}}
W.aH.prototype={$iaH:1}
W.fF.prototype={
gl:function(a){return a.length}}
W.bN.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iH")
throw H.c(P.F("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.H]},
$au:function(){return[W.H]},
$ik:1,
$ak:function(){return[W.H]},
$id:1,
$ad:function(){return[W.H]},
$ibN:1,
$aD:function(){return[W.H]}}
W.bd.prototype={$ibd:1,
gdh:function(a){return a.data}}
W.bO.prototype={$ibO:1}
W.cn.prototype={$icn:1}
W.b_.prototype={$ib_:1}
W.fS.prototype={
i:function(a){return String(a)}}
W.hb.prototype={
gl:function(a){return a.length}}
W.cq.prototype={$icq:1}
W.hc.prototype={
j:function(a,b){return P.bk(a.get(H.U(b)))},
D:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bk(t.value[1]))}},
gal:function(a){var u=H.e([],[P.h])
this.D(a,new W.hd(u))
return u},
gl:function(a){return a.size},
k:function(a,b,c){throw H.c(P.F("Not supported"))},
$aaf:function(){return[P.h,null]},
$iy:1,
$ay:function(){return[P.h,null]}}
W.hd.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.he.prototype={
j:function(a,b){return P.bk(a.get(H.U(b)))},
D:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bk(t.value[1]))}},
gal:function(a){var u=H.e([],[P.h])
this.D(a,new W.hf(u))
return u},
gl:function(a){return a.size},
k:function(a,b,c){throw H.c(P.F("Not supported"))},
$aaf:function(){return[P.h,null]},
$iy:1,
$ay:function(){return[P.h,null]}}
W.hf.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.aI.prototype={$iaI:1}
W.hg.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaI")
throw H.c(P.F("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aI]},
$au:function(){return[W.aI]},
$ik:1,
$ak:function(){return[W.aI]},
$id:1,
$ad:function(){return[W.aI]},
$aD:function(){return[W.aI]}}
W.a1.prototype={$ia1:1}
W.j4.prototype={
k:function(a,b,c){var u,t
H.f(c,"$iH")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.b(t,b)
u.replaceChild(c,t[b])},
gU:function(a){var u=this.a.childNodes
return new W.dk(u,u.length,[H.bC(C.R,u,"D",0)])},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
$au:function(){return[W.H]},
$ak:function(){return[W.H]},
$ad:function(){return[W.H]}}
W.H.prototype={
iw:function(a,b){var u,t
try{u=a.parentNode
J.mR(u,b,a)}catch(t){H.aE(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.e7(a):u},
h1:function(a,b,c){return a.replaceChild(b,c)},
$iH:1}
W.cw.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iH")
throw H.c(P.F("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.H]},
$au:function(){return[W.H]},
$ik:1,
$ak:function(){return[W.H]},
$id:1,
$ad:function(){return[W.H]},
$aD:function(){return[W.H]}}
W.aJ.prototype={$iaJ:1,
gl:function(a){return a.length}}
W.ht.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaJ")
throw H.c(P.F("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aJ]},
$au:function(){return[W.aJ]},
$ik:1,
$ak:function(){return[W.aJ]},
$id:1,
$ad:function(){return[W.aJ]},
$aD:function(){return[W.aJ]}}
W.hC.prototype={
j:function(a,b){return P.bk(a.get(H.U(b)))},
D:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bk(t.value[1]))}},
gal:function(a){var u=H.e([],[P.h])
this.D(a,new W.hD(u))
return u},
gl:function(a){return a.size},
k:function(a,b,c){throw H.c(P.F("Not supported"))},
$aaf:function(){return[P.h,null]},
$iy:1,
$ay:function(){return[P.h,null]}}
W.hD.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.hF.prototype={
gl:function(a){return a.length}}
W.aL.prototype={$iaL:1}
W.hO.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaL")
throw H.c(P.F("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aL]},
$au:function(){return[W.aL]},
$ik:1,
$ak:function(){return[W.aL]},
$id:1,
$ad:function(){return[W.aL]},
$aD:function(){return[W.aL]}}
W.aM.prototype={$iaM:1}
W.hP.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaM")
throw H.c(P.F("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aM]},
$au:function(){return[W.aM]},
$ik:1,
$ak:function(){return[W.aM]},
$id:1,
$ad:function(){return[W.aM]},
$aD:function(){return[W.aM]}}
W.aN.prototype={$iaN:1,
gl:function(a){return a.length}}
W.hT.prototype={
j:function(a,b){return a.getItem(H.U(b))},
k:function(a,b,c){a.setItem(b,c)},
D:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gal:function(a){var u=H.e([],[P.h])
this.D(a,new W.hU(u))
return u},
gl:function(a){return a.length},
$aaf:function(){return[P.h,P.h]},
$iy:1,
$ay:function(){return[P.h,P.h]}}
W.hU.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:22}
W.av.prototype={$iav:1}
W.bi.prototype={$ibi:1}
W.aP.prototype={$iaP:1}
W.aw.prototype={$iaw:1}
W.i0.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaw")
throw H.c(P.F("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aw]},
$au:function(){return[W.aw]},
$ik:1,
$ak:function(){return[W.aw]},
$id:1,
$ad:function(){return[W.aw]},
$aD:function(){return[W.aw]}}
W.i1.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaP")
throw H.c(P.F("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aP]},
$au:function(){return[W.aP]},
$ik:1,
$ak:function(){return[W.aP]},
$id:1,
$ad:function(){return[W.aP]},
$aD:function(){return[W.aP]}}
W.ib.prototype={
gl:function(a){return a.length}}
W.aQ.prototype={$iaQ:1}
W.aR.prototype={$iaR:1}
W.ie.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaQ")
throw H.c(P.F("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aQ]},
$au:function(){return[W.aQ]},
$ik:1,
$ak:function(){return[W.aQ]},
$id:1,
$ad:function(){return[W.aQ]},
$aD:function(){return[W.aQ]}}
W.ig.prototype={
gl:function(a){return a.length}}
W.bA.prototype={}
W.iE.prototype={
i:function(a){return String(a)}}
W.iW.prototype={
gl:function(a){return a.length}}
W.b7.prototype={
ghL:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.F("deltaY is not supported"))},
ghK:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.F("deltaX is not supported"))},
$ib7:1}
W.cL.prototype={
h2:function(a,b){return a.requestAnimationFrame(H.c7(H.n(b,{func:1,ret:-1,args:[P.a7]}),1))},
eG:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.j6.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iQ")
throw H.c(P.F("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.Q]},
$au:function(){return[W.Q]},
$ik:1,
$ak:function(){return[W.Q]},
$id:1,
$ad:function(){return[W.Q]},
$aD:function(){return[W.Q]}}
W.e3.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
n:function(a,b){var u
if(b==null)return!1
u=J.P(b)
if(!u.$iah)return!1
return a.left===u.gbh(b)&&a.top===u.gbl(b)&&a.width===u.gaz(b)&&a.height===u.gau(b)},
gH:function(a){return W.m1(C.e.gH(a.left),C.e.gH(a.top),C.e.gH(a.width),C.e.gH(a.height))},
gau:function(a){return a.height},
gaz:function(a){return a.width}}
W.jk.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaH")
throw H.c(P.F("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aH]},
$au:function(){return[W.aH]},
$ik:1,
$ak:function(){return[W.aH]},
$id:1,
$ad:function(){return[W.aH]},
$aD:function(){return[W.aH]}}
W.el.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iH")
throw H.c(P.F("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.H]},
$au:function(){return[W.H]},
$ik:1,
$ak:function(){return[W.H]},
$id:1,
$ad:function(){return[W.H]},
$aD:function(){return[W.H]}}
W.jv.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaN")
throw H.c(P.F("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aN]},
$au:function(){return[W.aN]},
$ik:1,
$ak:function(){return[W.aN]},
$id:1,
$ad:function(){return[W.aN]},
$aD:function(){return[W.aN]}}
W.jy.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iav")
throw H.c(P.F("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.av]},
$au:function(){return[W.av]},
$ik:1,
$ak:function(){return[W.av]},
$id:1,
$ad:function(){return[W.av]},
$aD:function(){return[W.av]}}
W.j8.prototype={}
W.kY.prototype={}
W.j9.prototype={}
W.ja.prototype={
$1:function(a){return this.a.$1(H.f(a,"$im"))},
$S:32}
W.D.prototype={
gU:function(a){return new W.dk(a,this.gl(a),[H.bC(this,a,"D",0)])}}
W.dk.prototype={
B:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.scU(J.d3(u.a,t))
u.c=t
return!0}u.scU(null)
u.c=s
return!1},
gJ:function(a){return this.d},
scU:function(a){this.d=H.C(a,H.t(this,0))},
$iaY:1}
W.e2.prototype={}
W.e4.prototype={}
W.e5.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.e9.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.ej.prototype={}
W.ek.prototype={}
W.em.prototype={}
W.en.prototype={}
W.eq.prototype={}
W.er.prototype={}
W.es.prototype={}
W.cS.prototype={}
W.cT.prototype={}
W.et.prototype={}
W.eu.prototype={}
W.ey.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.cU.prototype={}
W.cV.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eR.prototype={}
W.eS.prototype={}
W.eT.prototype={}
W.eU.prototype={}
P.jw.prototype={
du:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
bo:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.P(a)
if(!!u.$iar)return new Date(a.a)
if(!!u.$inv)throw H.c(P.iv("structured clone of RegExp"))
if(!!u.$iau)return a
if(!!u.$ibH)return a
if(!!u.$ick)return a
if(!!u.$ibd)return a
if(!!u.$ict||!!u.$ibw||!!u.$icq)return a
if(!!u.$iy){t=q.du(a)
s=q.b
if(t>=s.length)return H.b(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.k(s,t,r)
u.D(a,new P.jx(p,q))
return p.a}if(!!u.$id){t=q.du(a)
p=q.b
if(t>=p.length)return H.b(p,t)
r=p[t]
if(r!=null)return r
return q.hI(a,t)}throw H.c(P.iv("structured clone of other type"))},
hI:function(a,b){var u,t=J.d_(a),s=t.gl(a),r=new Array(s)
C.a.k(this.b,b,r)
for(u=0;u<s;++u)C.a.k(r,u,this.bo(t.j(a,u)))
return r}}
P.jx.prototype={
$2:function(a,b){this.a.a[a]=this.b.bo(b)},
$S:7}
P.eJ.prototype={$ibd:1,
gdh:function(a){return this.a}}
P.jV.prototype={
$2:function(a,b){this.a[a]=b},
$S:7}
P.eB.prototype={}
P.fz.prototype={
gaR:function(){var u=this.b,t=H.aD(u,"u",0),s=W.T
return new H.fX(new H.iY(u,H.n(new P.fA(),{func:1,ret:P.aa,args:[t]}),[t]),H.n(new P.fB(),{func:1,ret:s,args:[t]}),[t,s])},
D:function(a,b){H.n(b,{func:1,ret:-1,args:[W.T]})
C.a.D(P.kO(this.gaR(),!1,W.T),b)},
k:function(a,b,c){var u
H.f(c,"$iT")
u=this.gaR()
J.mV(u.b.$1(J.kC(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.aF(this.gaR().a)},
j:function(a,b){var u=this.gaR()
return u.b.$1(J.kC(u.a,b))},
gU:function(a){var u=P.kO(this.gaR(),!1,W.T)
return new J.an(u,u.length,[H.t(u,0)])},
$au:function(){return[W.T]},
$ak:function(){return[W.T]},
$ad:function(){return[W.T]}}
P.fA.prototype={
$1:function(a){return!!J.P(H.f(a,"$iH")).$iT},
$S:30}
P.fB.prototype={
$1:function(a){return H.w(H.f(a,"$iH"),"$iT")},
$S:29}
P.jo.prototype={
gck:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.p(t)
return H.C(u+t,H.t(this,0))},
gdf:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.p(t)
return H.C(u+t,H.t(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.j(u.a)+", "+H.j(u.b)+") "+H.j(u.c)+" x "+H.j(u.d)},
n:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.P(b)
if(!!u.$iah){t=p.a
if(t==u.gbh(b)){s=p.b
if(s==u.gbl(b)){r=p.c
if(typeof t!=="number")return t.v()
if(typeof r!=="number")return H.p(r)
q=H.t(p,0)
if(H.C(t+r,q)===u.gck(b)){t=p.d
if(typeof s!=="number")return s.v()
if(typeof t!=="number")return H.p(t)
u=H.C(s+t,q)===u.gdf(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gH:function(a){var u,t=this,s=t.a,r=J.d4(s),q=t.b,p=J.d4(q),o=t.c
if(typeof s!=="number")return s.v()
if(typeof o!=="number")return H.p(o)
u=H.t(t,0)
o=C.d.gH(H.C(s+o,u))
s=t.d
if(typeof q!=="number")return q.v()
if(typeof s!=="number")return H.p(s)
u=C.d.gH(H.C(q+s,u))
return P.nT(P.jm(P.jm(P.jm(P.jm(0,r),p),o),u))}}
P.ah.prototype={
gbh:function(a){return this.a},
gbl:function(a){return this.b},
gaz:function(a){return this.c},
gau:function(a){return this.d}}
P.b0.prototype={$ib0:1}
P.fL.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ib0")
throw H.c(P.F("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$au:function(){return[P.b0]},
$ik:1,
$ak:function(){return[P.b0]},
$id:1,
$ad:function(){return[P.b0]},
$aD:function(){return[P.b0]}}
P.b3.prototype={$ib3:1}
P.hp.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ib3")
throw H.c(P.F("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$au:function(){return[P.b3]},
$ik:1,
$ak:function(){return[P.b3]},
$id:1,
$ad:function(){return[P.b3]},
$aD:function(){return[P.b3]}}
P.hv.prototype={
gl:function(a){return a.length}}
P.hZ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.U(c)
throw H.c(P.F("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$au:function(){return[P.h]},
$ik:1,
$ak:function(){return[P.h]},
$id:1,
$ad:function(){return[P.h]},
$aD:function(){return[P.h]}}
P.q.prototype={
gbX:function(a){return new P.fz(a,new W.j4(a))}}
P.b5.prototype={$ib5:1}
P.ih.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ib5")
throw H.c(P.F("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$au:function(){return[P.b5]},
$ik:1,
$ak:function(){return[P.b5]},
$id:1,
$ad:function(){return[P.b5]},
$aD:function(){return[P.b5]}}
P.ed.prototype={}
P.ee.prototype={}
P.eo.prototype={}
P.ep.prototype={}
P.ez.prototype={}
P.eA.prototype={}
P.eH.prototype={}
P.eI.prototype={}
P.L.prototype={$ik:1,
$ak:function(){return[P.l]},
$id:1,
$ad:function(){return[P.l]},
$inF:1}
P.f3.prototype={
gl:function(a){return a.length}}
P.f4.prototype={
j:function(a,b){return P.bk(a.get(H.U(b)))},
D:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bk(t.value[1]))}},
gal:function(a){var u=H.e([],[P.h])
this.D(a,new P.f5(u))
return u},
gl:function(a){return a.size},
k:function(a,b,c){throw H.c(P.F("Not supported"))},
$aaf:function(){return[P.h,null]},
$iy:1,
$ay:function(){return[P.h,null]}}
P.f5.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
P.f6.prototype={
gl:function(a){return a.length}}
P.bG.prototype={}
P.hq.prototype={
gl:function(a){return a.length}}
P.e1.prototype={}
P.d7.prototype={$id7:1}
P.dG.prototype={$idG:1}
P.bU.prototype={
iB:function(a,b,c,d,e,f,g){var u,t=J.P(g)
if(!!t.$ibd)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.oJ(g))
return}if(!!t.$ibO)t=!0
else t=!1
if(t){this.hi(a,b,c,d,e,f,g)
return}throw H.c(P.d5("Incorrect number or type of arguments"))},
hi:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
a1:function(a,b,c){return a.uniform1f(b,c)},
bn:function(a,b,c){return a.uniform1i(b,c)},
W:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
dZ:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
e_:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
e0:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ibU:1}
P.dJ.prototype={$idJ:1}
P.dO.prototype={$idO:1}
P.dT.prototype={$idT:1}
P.hQ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return P.bk(a.item(b))},
k:function(a,b,c){H.f(c,"$iy")
throw H.c(P.F("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$au:function(){return[[P.y,,,]]},
$ik:1,
$ak:function(){return[[P.y,,,]]},
$id:1,
$ad:function(){return[[P.y,,,]]},
$aD:function(){return[[P.y,,,]]}}
P.ev.prototype={}
P.ew.prototype={}
O.a_.prototype={
br:function(a){var u=this
u.seT(H.e([],[a]))
u.sd0(null)
u.scY(null)
u.sd1(null)},
cr:function(a,b,c){var u=this,t=H.aD(u,"a_",0)
H.n(b,{func:1,ret:P.aa,args:[[P.k,t]]})
t={func:1,ret:-1,args:[P.l,[P.k,t]]}
H.n(a,t)
H.n(c,t)
u.sd0(b)
u.scY(a)
u.sd1(c)},
b8:function(a,b){return this.cr(a,null,b)},
fG:function(a){var u
H.o(a,"$ik",[H.aD(this,"a_",0)],"$ak")
u=this.b
if(u!=null)return u.$1(a)
return!0},
ef:function(a,b){var u
H.o(b,"$ik",[H.aD(this,"a_",0)],"$ak")
u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gU:function(a){var u=this.a
return new J.an(u,u.length,[H.t(u,0)])},
I:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.aD(s,"a_",0)
H.C(b,r)
r=[r]
if(H.E(s.fG(H.e([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.ef(t,H.e([b],r))}},
seT:function(a){this.a=H.o(a,"$id",[H.aD(this,"a_",0)],"$ad")},
sd0:function(a){this.b=H.n(a,{func:1,ret:P.aa,args:[[P.k,H.aD(this,"a_",0)]]})},
scY:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.l,[P.k,H.aD(this,"a_",0)]]})},
sd1:function(a){H.n(a,{func:1,ret:-1,args:[P.l,[P.k,H.aD(this,"a_",0)]]})},
$ik:1}
O.cp.prototype={
gl:function(a){return this.a.length},
gA:function(){var u=this.b
return u==null?this.b=D.V():u},
aA:function(){var u=this.b
if(u!=null)u.G(null)},
ga_:function(a){var u=this.a
if(u.length>0)return C.a.gaw(u)
else return V.dy()},
dQ:function(a){var u=this.a
if(a==null)C.a.h(u,V.dy())
else C.a.h(u,a)
this.aA()},
cf:function(){var u=this.a
if(u.length>0){u.pop()
this.aA()}},
sby:function(a){this.a=H.o(a,"$id",[V.am],"$ad")}}
E.f9.prototype={}
E.al.prototype={
cH:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.an(u,u.length,[H.t(u,0)]);u.B();){t=u.d
if(t.f==null)t.cH()}},
scs:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gA().K(0,s.gdK())
u=s.c
if(u!=null)u.gA().h(0,s.gdK())
t=new D.M("shape",r,s.c,[F.bV])
t.b=!0
s.af(t)}},
sdV:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gA().K(0,s.gdM())
u=s.f
s.f=a
if(a!=null)a.gA().h(0,s.gdM())
s.cH()
t=new D.M("technique",u,s.f,[O.bW])
t.b=!0
s.af(t)}},
sb2:function(a){var u,t,s=this
if(!J.K(s.r,a)){u=s.r
if(u!=null)u.gA().K(0,s.gdI())
if(a!=null)a.gA().h(0,s.gdI())
s.r=a
t=new D.M("mover",u,a,[U.a9])
t.b=!0
s.af(t)}},
am:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aN(0,b,s):null
if(!J.K(q,s.x)){u=s.x
s.x=q
t=new D.M("matrix",u,q,[V.am])
t.b=!0
s.af(t)}r=s.f
if(r!=null)r.am(0,b)
for(r=s.y.a,r=new J.an(r,r.length,[H.t(r,0)]);r.B();)r.d.am(0,b)},
aL:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.ga_(s))
else C.a.h(s.a,r.m(0,s.ga_(s)))
s.aA()
a.dR(t.f)
s=a.dy
u=(s&&C.a).gaw(s)
if(u!=null&&t.d!=null)u.iv(a,t)
for(s=t.y.a,s=new J.an(s,s.length,[H.t(s,0)]);s.B();)s.d.aL(a)
a.dP()
a.dx.cf()},
af:function(a){var u=this.z
if(u!=null)u.G(a)},
Z:function(){return this.af(null)},
dL:function(a){H.f(a,"$iA")
this.e=null
this.af(a)},
ih:function(){return this.dL(null)},
dN:function(a){this.af(H.f(a,"$iA"))},
ii:function(){return this.dN(null)},
dJ:function(a){this.af(H.f(a,"$iA"))},
ig:function(){return this.dJ(null)},
dH:function(a){this.af(H.f(a,"$iA"))},
ib:function(){return this.dH(null)},
ia:function(a,b){var u,t,s,r,q,p,o
H.o(b,"$ik",[E.al],"$ak")
for(u=b.length,t=this.gdG(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.x)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bL()
o.sae(null)
o.saS(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sae(H.e([],r))
o=o.a;(o&&C.a).h(o,t)}}this.Z()},
ie:function(a,b){var u,t
H.o(b,"$ik",[E.al],"$ak")
for(u=b.gU(b),t=this.gdG();u.B();)u.gJ(u).gA().K(0,t)
this.Z()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
seg:function(a,b){this.y=H.o(b,"$ia_",[E.al],"$aa_")},
$ics:1}
E.hy.prototype={
eb:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.ar(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cp()
t=[V.am]
u.sby(H.e([],t))
u.b=null
u.gA().h(0,new E.hz(s))
s.cy=u
u=new O.cp()
u.sby(H.e([],t))
u.b=null
u.gA().h(0,new E.hA(s))
s.db=u
u=new O.cp()
u.sby(H.e([],t))
u.b=null
u.gA().h(0,new E.hB(s))
s.dx=u
s.shh(H.e([],[O.bW]))
u=s.dy;(u&&C.a).h(u,null)
s.shc(new H.Z([P.h,A.cA]))},
gis:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga_(s)
u=t.db
u=t.z=s.m(0,u.ga_(u))
s=u}return s},
dR:function(a){var u=this.dy,t=a==null?(u&&C.a).gaw(u):a;(u&&C.a).h(u,t)},
dP:function(){var u=this.dy
if(u.length>1)u.pop()},
shh:function(a){this.dy=H.o(a,"$id",[O.bW],"$ad")},
shc:function(a){this.fr=H.o(a,"$iy",[P.h,A.cA],"$ay")}}
E.hz.prototype={
$1:function(a){var u
H.f(a,"$iA")
u=this.a
u.ch=u.z=null},
$S:6}
E.hA.prototype={
$1:function(a){var u
H.f(a,"$iA")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:6}
E.hB.prototype={
$1:function(a){var u
H.f(a,"$iA")
u=this.a
u.cx=u.ch=null},
$S:6}
E.dP.prototype={
cC:function(a){H.f(a,"$iA")
this.dT()},
cB:function(){return this.cC(null)},
ghZ:function(){var u,t=this,s=Date.now(),r=C.d.a0(P.ls(s-t.cx.a).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.ar(s,!1)
return u/r},
d4:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.m()
if(typeof r!=="number")return H.p(r)
u=C.e.b0(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.m()
t=C.e.b0(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.lQ(C.o,s.gix())}},
dT:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.ia(this),{func:1,ret:-1,args:[P.a7]})
C.y.eG(u)
C.y.h2(u,W.mf(t,P.a7))}},
iu:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.d4()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ar(r,!1)
s.y=P.ls(r-s.r.a).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.aA()
r=s.db
C.a.sl(r.a,0)
r.aA()
r=s.dx
C.a.sl(r.a,0)
r.aA()
r=s.dy;(r&&C.a).sl(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.aL(p.e)}}catch(q){u=H.aE(q)
t=H.ca(q)
P.lg("Error: "+H.j(u))
P.lg("Stack: "+H.j(t))
throw H.c(u)}}}
E.ia.prototype={
$1:function(a){var u
H.ms(a)
u=this.a
if(u.ch){u.ch=!1
u.iu()}},
$S:28}
Z.e_.prototype={$ipd:1}
Z.d8.prototype={
bd:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.aE(s)
t=P.B('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.j(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.j(u.e)+"]"}}
Z.iX.prototype={$ipe:1}
Z.d9.prototype={
aJ:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bd:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].bd(a)},
dY:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aL:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.b(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.h],p=H.e([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(p,u[s].i(0))
r=H.e([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.aq(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.t(p,", ")+"\nAttrs:   "+C.a.t(r,", ")},
seP:function(a){this.b=H.o(a,"$id",[Z.bt],"$ad")},
$ipm:1}
Z.bt.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.j(H.cz(this.c))+"'")+"]"}}
Z.bj.prototype={
gct:function(a){var u=this.a,t=(u&$.bc().a)!==0?3:0
if((u&$.aT().a)!==0)t+=3
if((u&$.bb().a)!==0)t+=3
if((u&$.bl().a)!==0)t+=2
if((u&$.bm().a)!==0)t+=3
if((u&$.d1().a)!==0)t+=3
if((u&$.d2().a)!==0)t+=4
if((u&$.bE().a)!==0)++t
return(u&$.ba().a)!==0?t+4:t},
hx:function(a){var u,t=$.bc(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aT()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bb()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bl()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bm()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d1()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d2()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bE()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ba()
if((s&t.a)!==0)if(u===a)return t
return $.mM()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bj))return!1
return this.a===b.a},
i:function(a){var u=H.e([],[P.h]),t=this.a
if((t&$.bc().a)!==0)C.a.h(u,"Pos")
if((t&$.aT().a)!==0)C.a.h(u,"Norm")
if((t&$.bb().a)!==0)C.a.h(u,"Binm")
if((t&$.bl().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bm().a)!==0)C.a.h(u,"TxtCube")
if((t&$.d1().a)!==0)C.a.h(u,"Clr3")
if((t&$.d2().a)!==0)C.a.h(u,"Clr4")
if((t&$.bE().a)!==0)C.a.h(u,"Weight")
if((t&$.ba().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.t(u,"|")}}
D.fc.prototype={}
D.bL.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.A]}
H.n(b,u)
if(this.a==null)this.sae(H.e([],[u]))
u=this.a;(u&&C.a).h(u,b)},
K:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[D.A]})
u=s.a
u=u==null?null:C.a.as(u,b)
if(u===!0){u=s.a
t=(u&&C.a).K(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.as(u,b)
if(u===!0){u=s.b
t=(u&&C.a).K(u,b)||t}return t},
G:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.a.D(P.kO(u,!0,{func:1,ret:-1,args:[D.A]}),new D.fv(q))
u=r.b
if(u!=null){r.saS(H.e([],[{func:1,ret:-1,args:[D.A]}]))
C.a.D(u,new D.fw(q))}return!0},
hR:function(){return this.G(null)},
a6:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.G(u)}}},
sae:function(a){this.a=H.o(a,"$id",[{func:1,ret:-1,args:[D.A]}],"$ad")},
saS:function(a){this.b=H.o(a,"$id",[{func:1,ret:-1,args:[D.A]}],"$ad")}}
D.fv.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.A]})
u=this.a.a
u.b
a.$1(u)},
$S:25}
D.fw.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.A]})
u=this.a.a
u.b
a.$1(u)},
$S:25}
D.A.prototype={}
D.bP.prototype={}
D.bQ.prototype={}
D.M.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}
X.da.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.da))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.dq.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dq))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.fK.prototype={
io:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
ij:function(a){this.c=a.b
this.d.K(0,a.a)
return!1},
sfW:function(a){this.d=H.o(a,"$ilN",[P.l],"$alN")}}
X.dt.prototype={}
X.fT.prototype={
aQ:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.m()
u=b.b
t=q.ch
if(typeof u!=="number")return u.m()
s=new V.ag(o.a+n*m,o.b+u*t)
t=q.a.gaI()
r=new X.bg(a,V.by(),q.x,t,s)
r.b=!0
q.z=new P.ar(p,!1)
q.x=s
return r},
ce:function(a,b){this.r=a.a
return!1},
b4:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.e4()
if(typeof u!=="number")return u.ac()
this.r=(u&~t)>>>0
return!1},
b3:function(a,b){var u=this.d
if(u==null)return!1
u.G(this.aQ(a,b))
return!0},
ip:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaI()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.m()
q=a.b
p=o.cy
if(typeof q!=="number")return q.m()
t=new X.cr(new V.R(s*r,q*p),u,t)
t.b=!0
n.G(t)
return!0},
ft:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dt(c,r.a.gaI(),b)
s.b=!0
t.G(s)
r.y=new P.ar(u,!1)
r.x=V.by()}}
X.as.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.as))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.E(this.b)?"Alt+":""
return u+(H.E(this.c)?"Shift+":"")}}
X.bg.prototype={}
X.hh.prototype={
bw:function(a,b,c){var u=this,t=new P.ar(Date.now(),!1),s=u.a.gaI(),r=new X.bg(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
ce:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.G(this.bw(a,b,!0))
return!0},
b4:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.e4()
if(typeof t!=="number")return t.ac()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.G(u.bw(a,b,!0))
return!0},
b3:function(a,b){var u=this.d
if(u==null)return!1
u.G(this.bw(a,b,!1))
return!0},
iq:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaI()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.m()
r=a.b
q=p.ch
if(typeof r!=="number")return r.m()
u=new X.cr(new V.R(t*s,r*q),u,b)
u.b=!0
o.G(u)
return!0},
gdi:function(){var u=this.b
return u==null?this.b=D.V():u},
gco:function(){var u=this.c
return u==null?this.c=D.V():u},
gdF:function(){var u=this.d
return u==null?this.d=D.V():u}}
X.cr.prototype={}
X.hu.prototype={}
X.dR.prototype={}
X.id.prototype={
aQ:function(a,b){var u,t,s,r,q=this
H.o(a,"$id",[V.ag],"$ad")
u=new P.ar(Date.now(),!1)
t=a.length>0?a[0]:V.by()
s=q.a.gaI()
r=new X.dR(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
im:function(a){var u
H.o(a,"$id",[V.ag],"$ad")
u=this.b
if(u==null)return!1
u.G(this.aQ(a,!0))
return!0},
ik:function(a){var u
H.o(a,"$id",[V.ag],"$ad")
u=this.c
if(u==null)return!1
u.G(this.aQ(a,!0))
return!0},
il:function(a){var u
H.o(a,"$id",[V.ag],"$ad")
u=this.d
if(u==null)return!1
u.G(this.aQ(a,!1))
return!0}}
X.dW.prototype={
gaI:function(){var u=this.a,t=C.j.gdg(u).c
t.toString
u=C.j.gdg(u).d
u.toString
return V.lL(0,0,t,u)},
cP:function(a){var u=a.keyCode,t=H.E(a.ctrlKey)||H.E(a.metaKey)
return new X.dq(u,new X.as(t,a.altKey,a.shiftKey))},
aG:function(a){var u=this.b,t=H.E(a.ctrlKey)||H.E(a.metaKey)
u.c=new X.as(t,a.altKey,a.shiftKey)},
bO:function(a){var u=this.b,t=H.E(a.ctrlKey)||H.E(a.metaKey)
u.c=new X.as(t,a.altKey,a.shiftKey)},
ar:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.w()
u=t.top
if(typeof r!=="number")return r.w()
return new V.ag(s-q,r-u)},
aT:function(a){return new V.R(a.movementX,a.movementY)},
bJ:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.e([],[V.ag])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
q=C.e.ag(r.pageX)
C.e.ag(r.pageY)
p=o.left
C.e.ag(r.pageX)
C.a.h(n,new V.ag(q-p,C.e.ag(r.pageY)-o.top))}return n},
ao:function(a){var u=a.buttons,t=H.E(a.ctrlKey)||H.E(a.metaKey)
return new X.da(u,new X.as(t,a.altKey,a.shiftKey))},
bz:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.w()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.w()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fm:function(a){this.f=!0},
f8:function(a){this.f=!1},
fg:function(a){H.f(a,"$ia1")
if(H.E(this.f)&&this.bz(a))a.preventDefault()},
fq:function(a){var u
H.f(a,"$ib_")
if(!H.E(this.f))return
u=this.cP(a)
this.b.io(u)},
fo:function(a){var u
H.f(a,"$ib_")
if(!H.E(this.f))return
u=this.cP(a)
this.b.ij(u)},
fv:function(a){var u,t,s,r,q=this
H.f(a,"$ia1")
u=q.a
u.focus()
q.f=!0
q.aG(a)
if(H.E(q.x)){t=q.ao(a)
s=q.aT(a)
if(q.d.ce(t,s))a.preventDefault()
return}if(H.E(q.r)){q.y=a
u.requestPointerLock()
return}t=q.ao(a)
r=q.ar(a)
if(q.c.ce(t,r))a.preventDefault()},
fB:function(a){var u,t,s,r=this
H.f(a,"$ia1")
r.aG(a)
u=r.ao(a)
if(H.E(r.x)){t=r.aT(a)
if(r.d.b4(u,t))a.preventDefault()
return}if(H.E(r.r))return
s=r.ar(a)
if(r.c.b4(u,s))a.preventDefault()},
fk:function(a){var u,t,s,r=this
H.f(a,"$ia1")
if(!r.bz(a)){r.aG(a)
u=r.ao(a)
if(H.E(r.x)){t=r.aT(a)
if(r.d.b4(u,t))a.preventDefault()
return}if(H.E(r.r))return
s=r.ar(a)
if(r.c.b4(u,s))a.preventDefault()}},
fz:function(a){var u,t,s,r=this
H.f(a,"$ia1")
r.aG(a)
u=r.ao(a)
if(H.E(r.x)){t=r.aT(a)
if(r.d.b3(u,t))a.preventDefault()
return}if(H.E(r.r))return
s=r.ar(a)
if(r.c.b3(u,s))a.preventDefault()},
fi:function(a){var u,t,s,r=this
H.f(a,"$ia1")
if(!r.bz(a)){r.aG(a)
u=r.ao(a)
if(H.E(r.x)){t=r.aT(a)
if(r.d.b3(u,t))a.preventDefault()
return}if(H.E(r.r))return
s=r.ar(a)
if(r.c.b3(u,s))a.preventDefault()}},
fD:function(a){var u,t,s=this
H.f(a,"$ib7")
s.aG(a)
u=new V.R((a&&C.x).ghK(a),C.x.ghL(a)).q(0,180)
if(H.E(s.x)){if(s.d.ip(u))a.preventDefault()
return}if(H.E(s.r))return
t=s.ar(a)
if(s.c.iq(u,t))a.preventDefault()},
fF:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ao(s.y)
t=s.ar(s.y)
s.d.ft(u,t,r)}},
fS:function(a){var u,t=this
H.f(a,"$iaR")
t.a.focus()
t.f=!0
t.bO(a)
u=t.bJ(a)
if(t.e.im(u))a.preventDefault()},
fO:function(a){var u
H.f(a,"$iaR")
this.bO(a)
u=this.bJ(a)
if(this.e.ik(u))a.preventDefault()},
fQ:function(a){var u
H.f(a,"$iaR")
this.bO(a)
u=this.bJ(a)
if(this.e.il(u))a.preventDefault()},
seH:function(a){this.z=H.o(a,"$id",[[P.cC,P.O]],"$ad")}}
D.bq.prototype={
an:function(a){var u
H.f(a,"$iA")
u=this.r
if(u!=null)u.G(a)},
ei:function(){return this.an(null)},
$iac:1,
$ics:1}
D.ac.prototype={$ics:1}
D.dr.prototype={
an:function(a){var u=this.x
if(u!=null)u.G(a)},
d_:function(a){var u
H.f(a,"$iA")
u=this.y
if(u!=null)u.G(a)},
fs:function(){return this.d_(null)},
fI:function(a){var u,t,s
H.o(a,"$ik",[D.ac],"$ak")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.x)(a),++t){s=a[t]
if(s==null||this.eA(s))return!1}return!0},
f2:function(a,b){var u,t,s,r,q,p,o,n=D.ac
H.o(b,"$ik",[n],"$ak")
for(u=b.length,t=this.gcZ(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.x)(b),++q){p=H.f(b[q],"$iac")
if(p instanceof D.bq)C.a.h(this.e,p)
o=p.r
if(o==null){o=new D.bL()
o.sae(null)
o.saS(null)
o.c=null
o.d=0
p.r=o}H.n(t,s)
if(o.a==null)o.sae(H.e([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bP([n])
n.b=!0
this.an(n)},
fM:function(a,b){var u,t,s,r=D.ac
H.o(b,"$ik",[r],"$ak")
for(u=b.gU(b),t=this.gcZ();u.B();){s=u.gJ(u)
C.a.K(this.e,s)
s.gA().K(0,t)}r=new D.bQ([r])
r.b=!0
this.an(r)},
eA:function(a){var u=C.a.as(this.e,a)
return u},
seF:function(a){this.e=H.o(a,"$id",[D.bq],"$ad")},
sfT:function(a){this.f=H.o(a,"$id",[D.dE],"$ad")},
shf:function(a){this.r=H.o(a,"$id",[D.dL],"$ad")},
$ak:function(){return[D.ac]},
$aa_:function(){return[D.ac]}}
D.dE.prototype={$iac:1,$ics:1}
D.dL.prototype={$iac:1,$ics:1}
V.a6.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a6))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+"]"}}
V.bo.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bo))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.S(u.a,3,0)+", "+V.S(u.b,3,0)+", "+V.S(u.c,3,0)+", "+V.S(u.d,3,0)+"]"}}
V.fu.prototype={}
V.dx.prototype={
ab:function(a,b){var u=this,t=H.e([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.z])
return t},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.dx))return!1
u=b.a
t=$.N()
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
if(typeof u!=="number")return u.w()
if(typeof r!=="number")return H.p(r)
if(!(Math.abs(u-r)<s))return!1
u=b.x
t=q.x
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.p(t)
if(!(Math.abs(u-t)<s))return!1
u=b.y
t=q.y
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.p(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){var u,t,s,r,q=this,p=[P.z],o=V.c9(H.e([q.a,q.d,q.r],p),3,0),n=V.c9(H.e([q.b,q.e,q.x],p),3,0),m=V.c9(H.e([q.c,q.f,q.y],p),3,0)
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
V.am.prototype={
ab:function(a,b){var u=this,t=H.e([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.z])
return t},
dD:function(b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.a,c=e.f,b=e.b,a=e.e,a0=d*c-b*a,a1=e.r,a2=e.c,a3=d*a1-a2*a,a4=e.x,a5=e.d,a6=d*a4-a5*a,a7=b*a1-a2*c,a8=b*a4-a5*c,a9=a2*a4-a5*a1,b0=e.y,b1=e.cy
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
if(Math.abs(i-0)<$.N().a)return V.dy()
h=1/i
g=-a
f=-t
return V.b2((c*j-a1*k+a4*l)*h,(-b*j+a2*k-a5*l)*h,(b1*a9-r*a8+o*a7)*h,(-u*a9+q*a8-n*a7)*h,(g*j+a1*m-a4*p)*h,(d*j-a2*m+a5*p)*h,(f*a9+r*a6-o*a3)*h,(b0*a9-q*a6+n*a3)*h,(a*k-c*m+a4*s)*h,(-d*k+b*m-a5*s)*h,(t*a8-b1*a6+o*a0)*h,(-b0*a8+u*a6-n*a0)*h,(g*l+c*p-a1*s)*h,(d*l-b*p+a2*s)*h,(f*a7+b1*a3-r*a0)*h,(b0*a7-u*a3+q*a0)*h)},
m:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=a5.a,a7=b3.a,a8=a5.b,a9=b3.e,b0=a5.c,b1=b3.y
if(typeof b1!=="number")return H.p(b1)
u=a5.d
t=b3.cx
s=b3.b
r=b3.f
q=b3.z
if(typeof q!=="number")return H.p(q)
p=b3.cy
o=b3.c
n=b3.r
m=b3.Q
if(typeof m!=="number")return H.p(m)
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
bm:function(a){var u,t,s,r=this,q=a.a,p=a.b,o=a.c
if(typeof o!=="number")return H.p(o)
u=r.y
if(typeof u!=="number")return u.m()
t=r.z
if(typeof t!=="number")return t.m()
s=r.Q
if(typeof s!=="number")return s.m()
return new V.J(r.a*q+r.b*p+r.c*o,r.e*q+r.f*p+r.r*o,u*q+t*p+s*o)},
cn:function(a){var u,t,s,r=this,q=a.a,p=a.b,o=a.c
if(typeof o!=="number")return H.p(o)
u=r.y
if(typeof u!=="number")return u.m()
t=r.z
if(typeof t!=="number")return t.m()
s=r.Q
if(typeof s!=="number")return s.m()
return new V.a2(r.a*q+r.b*p+r.c*o+r.d,r.e*q+r.f*p+r.r*o+r.x,u*q+t*p+s*o+r.ch)},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.am))return!1
u=b.a
t=$.N()
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
if(typeof u!=="number")return u.w()
if(typeof r!=="number")return H.p(r)
if(!(Math.abs(u-r)<s))return!1
u=b.z
t=q.z
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.p(t)
if(!(Math.abs(u-t)<s))return!1
u=b.Q
t=q.Q
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.p(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.ch-q.ch)<s))return!1
if(!(Math.abs(b.cx-q.cx)<s))return!1
if(!(Math.abs(b.cy-q.cy)<s))return!1
if(!(Math.abs(b.db-q.db)<s))return!1
if(!(Math.abs(b.dx-q.dx)<s))return!1
return!0},
i:function(a){return this.L()},
E:function(a){var u,t,s,r,q,p=this,o=[P.z],n=V.c9(H.e([p.a,p.e,p.y,p.cx],o),3,0),m=V.c9(H.e([p.b,p.f,p.z,p.cy],o),3,0),l=V.c9(H.e([p.c,p.r,p.Q,p.db],o),3,0),k=V.c9(H.e([p.d,p.x,p.ch,p.dx],o),3,0)
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
L:function(){return this.E("")}}
V.ag.prototype={
w:function(a,b){return new V.ag(this.a-b.a,this.b-b.b)},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ag))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+"]"}}
V.a2.prototype={
v:function(a,b){var u=this.c,t=b.c
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.p(t)
return new V.a2(this.a+b.a,this.b+b.b,u+t)},
w:function(a,b){var u=this.c,t=b.c
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.p(t)
return new V.a2(this.a-b.a,this.b-b.b,u-t)},
m:function(a,b){var u=this.c
if(typeof u!=="number")return u.m()
return new V.a2(this.a*b,this.b*b,u*b)},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.a2))return!1
u=b.a
t=$.N()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
u=b.c
r=q.c
t.toString
if(typeof u!=="number")return u.w()
if(typeof r!=="number")return H.p(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+"]"}}
V.bR.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bR))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.S(u.a,3,0)+", "+V.S(u.b,3,0)+", "+V.S(u.c,3,0)+", "+V.S(u.d,3,0)+"]"}}
V.dI.prototype={
ga5:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dI))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.S(u.a,3,0)+", "+V.S(u.b,3,0)+", "+V.S(u.c,3,0)+", "+V.S(u.d,3,0)+"]"}}
V.R.prototype={
c9:function(a){return Math.sqrt(this.C(this))},
C:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.p(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.p(t)
return s*r+u*t},
m:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.m()
u=this.b
if(typeof u!=="number")return u.m()
return new V.R(t*b,u*b)},
q:function(a,b){var u,t
if(Math.abs(b-0)<$.N().a){u=$.lW
return u==null?$.lW=new V.R(0,0):u}u=this.a
if(typeof u!=="number")return u.q()
t=this.b
if(typeof t!=="number")return t.q()
return new V.R(u/b,t/b)},
n:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.R))return!1
u=b.a
t=this.a
s=$.N()
s.toString
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.p(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.p(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+"]"}}
V.J.prototype={
c9:function(a){return Math.sqrt(this.C(this))},
C:function(a){var u=this.c,t=a.c
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.p(t)
return this.a*a.a+this.b*a.b+u*t},
ca:function(a,b){var u=this.a,t=this.b,s=this.c,r=a.c
if(typeof r!=="number")return r.w()
if(typeof s!=="number")return H.p(s)
return new V.J(u+b*(a.a-u),t+b*(a.b-t),s+b*(r-s))},
at:function(a){var u,t,s,r,q=this.b,p=a.c
if(typeof p!=="number")return H.p(p)
u=this.c
t=a.b
if(typeof u!=="number")return u.m()
s=a.a
r=this.a
return new V.J(q*p-u*t,u*s-r*p,r*t-q*s)},
v:function(a,b){var u=b.a,t=b.b,s=this.c,r=b.c
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.p(r)
return new V.J(this.a+u,this.b+t,s+r)},
P:function(a){var u=this.c
if(typeof u!=="number")return u.P()
return new V.J(-this.a,-this.b,-u)},
m:function(a,b){var u=this.c
if(typeof u!=="number")return u.m()
return new V.J(this.a*b,this.b*b,u*b)},
q:function(a,b){var u
if(Math.abs(b-0)<$.N().a)return V.cK()
u=this.c
if(typeof u!=="number")return u.q()
return new V.J(this.a/b,this.b/b,u/b)},
dE:function(){var u,t=$.N(),s=t.a
if(!(Math.abs(0-this.a)<s))return!1
if(!(Math.abs(0-this.b)<s))return!1
u=this.c
t.toString
if(typeof u!=="number")return H.p(u)
if(!(Math.abs(0-u)<s))return!1
return!0},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.J))return!1
u=b.a
t=$.N()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
u=b.c
r=q.c
t.toString
if(typeof u!=="number")return u.w()
if(typeof r!=="number")return H.p(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+"]"}}
U.fd.prototype={
bs:function(a){var u=V.pc(a,this.c,this.b)
return u},
gA:function(){var u=this.y
return u==null?this.y=D.V():u},
O:function(a){var u=this.y
if(u!=null)u.G(a)},
scp:function(a,b){},
scb:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.N().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bs(u)}s=new D.M("maximumLocation",s,t.b,[P.z])
s.b=!0
t.O(s)}},
scd:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.N().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bs(u)}s=new D.M("minimumLocation",s,t.c,[P.z])
s.b=!0
t.O(s)}},
sV:function(a,b){var u,t=this
b=t.bs(b)
u=t.d
if(!(Math.abs(u-b)<$.N().a)){t.d=b
u=new D.M("location",u,b,[P.z])
u.b=!0
t.O(u)}},
scc:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.N().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.M("maximumVelocity",r,a,[P.z])
r.b=!0
s.O(r)}},
sR:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.N().a)){u.f=a
t=new D.M("velocity",t,a,[P.z])
t.b=!0
u.O(t)}},
sc_:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.N().a)){this.x=a
u=new D.M("dampening",u,a,[P.z])
u.b=!0
this.O(u)}},
am:function(a,b){var u,t,s,r=this,q=r.f,p=$.N().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sV(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.N().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sR(u)}}}
U.dc.prototype={
gA:function(){var u=this.b
return u==null?this.b=D.V():u},
aN:function(a,b,c){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dc))return!1
return J.K(this.a,b.a)},
i:function(a){return"Constant: "+this.a.E("          ")}}
U.cm.prototype={
gA:function(){var u=this.e
return u==null?this.e=D.V():u},
O:function(a){var u
H.f(a,"$iA")
u=this.e
if(u!=null)u.G(a)},
a3:function(){return this.O(null)},
f0:function(a,b){var u,t,s,r,q,p,o,n=U.a9
H.o(b,"$ik",[n],"$ak")
for(u=b.length,t=this.gaB(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.x)(b),++q){p=b[q]
if(p!=null){o=p.gA()
o.toString
H.n(t,s)
if(o.a==null)o.sae(H.e([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bP([n])
n.b=!0
this.O(n)},
fK:function(a,b){var u,t,s=U.a9
H.o(b,"$ik",[s],"$ak")
for(u=b.gU(b),t=this.gaB();u.B();)u.gJ(u).gA().K(0,t)
s=new D.bQ([s])
s.b=!0
this.O(s)},
aN:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.M()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.an(r,r.length,[H.t(r,0)]),u=null;r.B();){q=r.d
if(q!=null){t=q.aN(0,b,c)
if(t!=null)u=u==null?t:t.m(0,u)}}s.f=u==null?V.dy():u
r=s.e
if(r!=null)r.a6(0)}return s.f},
n:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cm))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.b(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.b(r,t)
if(!J.K(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ak:function(){return[U.a9]},
$aa_:function(){return[U.a9]},
$ia9:1}
U.a9.prototype={}
U.dX.prototype={
gA:function(){var u=this.cy
return u==null?this.cy=D.V():u},
O:function(a){var u
H.f(a,"$iA")
u=this.cy
if(u!=null)u.G(a)},
a3:function(){return this.O(null)},
aV:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdi().h(0,u.gbA())
u.a.c.gdF().h(0,u.gbC())
u.a.c.gco().h(0,u.gbE())
return!0},
bB:function(a){var u=this
H.f(a,"$iA")
if(!J.K(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bD:function(a){var u,t,s,r,q,p,o,n=this
a=H.w(H.f(a,"$iA"),"$ibg")
if(!H.E(n.y))return
if(H.E(n.x)){u=a.d.w(0,a.y)
u=new V.R(u.a,u.b)
u=u.C(u)
t=n.r
if(typeof t!=="number")return H.p(t)
if(u<t)return
n.x=!1}if(H.E(n.d)){u=a.c
t=a.d.w(0,a.y)
u=new V.R(t.a,t.b).m(0,2).q(0,u.ga5())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.m()
s=n.e
if(typeof s!=="number")return H.p(s)
t.sR(u*10*s)}else{u=a.c
t=a.d
s=t.w(0,a.y)
r=new V.R(s.a,s.b).m(0,2).q(0,u.ga5())
s=n.b
q=r.a
if(typeof q!=="number")return q.P()
p=n.e
if(typeof p!=="number")return H.p(p)
o=n.z
if(typeof o!=="number")return H.p(o)
s.sV(0,-q*p+o)
n.b.sR(0)
t=t.w(0,a.z)
n.Q=new V.R(t.a,t.b).m(0,2).q(0,u.ga5())}n.a3()},
bF:function(a){var u,t,s,r=this
H.f(a,"$iA")
if(!H.E(r.y))return
r.y=!1
if(H.E(r.x))return
u=r.Q
if(u.C(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.m()
s=r.e
if(typeof s!=="number")return H.p(s)
u.sR(t*10*s)
r.a3()}},
aN:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.M()
if(q<p){r.ch=p
u=b.y
r.b.am(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.b2(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$ia9:1}
U.dY.prototype={
gA:function(){var u=this.fx
return u==null?this.fx=D.V():u},
O:function(a){var u
H.f(a,"$iA")
u=this.fx
if(u!=null)u.G(a)},
a3:function(){return this.O(null)},
aV:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdi().h(0,s.gbA())
s.a.c.gdF().h(0,s.gbC())
s.a.c.gco().h(0,s.gbE())
u=s.a.d
t=u.f
u=t==null?u.f=D.V():t
u.h(0,s.geU())
u=s.a.d
t=u.d
u=t==null?u.d=D.V():t
u.h(0,s.geW())
u=s.a.e
t=u.b
u=t==null?u.b=D.V():t
u.h(0,s.gho())
u=s.a.e
t=u.d
u=t==null?u.d=D.V():t
u.h(0,s.ghm())
u=s.a.e
t=u.c
u=t==null?u.c=D.V():t
u.h(0,s.ghk())
return!0},
ak:function(a){var u=a.a,t=a.b
if(H.E(this.f)){if(typeof u!=="number")return u.P()
u=-u}if(H.E(this.r)){if(typeof t!=="number")return t.P()
t=-t}return new V.R(u,t)},
bB:function(a){var u=this
a=H.w(H.f(a,"$iA"),"$ibg")
if(!J.K(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bD:function(a){var u,t,s,r,q,p,o,n=this
a=H.w(H.f(a,"$iA"),"$ibg")
if(!H.E(n.cx))return
if(H.E(n.ch)){u=a.d.w(0,a.y)
u=new V.R(u.a,u.b)
u=u.C(u)
t=n.Q
if(typeof t!=="number")return H.p(t)
if(u<t)return
n.ch=!1}if(H.E(n.e)){u=a.c
t=a.d.w(0,a.y)
u=n.ak(new V.R(t.a,t.b).m(0,2).q(0,u.ga5()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.P()
s=n.y
if(typeof s!=="number")return H.p(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.P()
t=n.x
if(typeof t!=="number")return H.p(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.w(0,a.y)
r=n.ak(new V.R(s.a,s.b).m(0,2).q(0,u.ga5()))
s=n.c
q=r.a
if(typeof q!=="number")return q.P()
p=n.y
if(typeof p!=="number")return H.p(p)
o=n.cy
if(typeof o!=="number")return H.p(o)
s.sV(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.P()
q=n.x
if(typeof q!=="number")return H.p(q)
s=n.db
if(typeof s!=="number")return H.p(s)
o.sV(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.w(0,a.z)
n.dx=n.ak(new V.R(t.a,t.b).m(0,2).q(0,u.ga5()))}n.a3()},
bF:function(a){var u,t,s,r=this
H.f(a,"$iA")
if(!H.E(r.cx))return
r.cx=!1
if(H.E(r.ch))return
u=r.dx
if(u.C(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.P()
s=r.y
if(typeof s!=="number")return H.p(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.P()
u=r.x
if(typeof u!=="number")return H.p(u)
s.sR(-t*10*u)
r.a3()}},
eV:function(a){var u=this
if(H.w(H.f(a,"$iA"),"$idt").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
eX:function(a){var u,t,s,r,q,p,o,n=this
a=H.w(H.f(a,"$iA"),"$ibg")
if(!J.K(n.d,a.x.b))return
u=a.c
t=a.d
s=t.w(0,a.y)
r=n.ak(new V.R(s.a,s.b).m(0,2).q(0,u.ga5()))
s=n.c
q=r.a
if(typeof q!=="number")return q.P()
p=n.y
if(typeof p!=="number")return H.p(p)
o=n.cy
if(typeof o!=="number")return H.p(o)
s.sV(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.P()
q=n.x
if(typeof q!=="number")return H.p(q)
s=n.db
if(typeof s!=="number")return H.p(s)
o.sV(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.w(0,a.z)
n.dx=n.ak(new V.R(t.a,t.b).m(0,2).q(0,u.ga5()))
n.a3()},
hp:function(a){var u=this
H.f(a,"$iA")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hn:function(a){var u,t,s,r,q,p,o,n=this
a=H.w(H.f(a,"$iA"),"$idR")
if(!H.E(n.cx))return
if(H.E(n.ch)){u=a.d.w(0,a.y)
u=new V.R(u.a,u.b)
u=u.C(u)
t=n.Q
if(typeof t!=="number")return H.p(t)
if(u<t)return
n.ch=!1}if(H.E(n.e)){u=a.c
t=a.d.w(0,a.y)
u=n.ak(new V.R(t.a,t.b).m(0,2).q(0,u.ga5()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.P()
s=n.y
if(typeof s!=="number")return H.p(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.P()
t=n.x
if(typeof t!=="number")return H.p(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.w(0,a.y)
r=n.ak(new V.R(s.a,s.b).m(0,2).q(0,u.ga5()))
s=n.c
q=r.a
if(typeof q!=="number")return q.P()
p=n.y
if(typeof p!=="number")return H.p(p)
o=n.cy
if(typeof o!=="number")return H.p(o)
s.sV(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.P()
q=n.x
if(typeof q!=="number")return H.p(q)
s=n.db
if(typeof s!=="number")return H.p(s)
o.sV(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.w(0,a.z)
n.dx=n.ak(new V.R(t.a,t.b).m(0,2).q(0,u.ga5()))}n.a3()},
hl:function(a){var u,t,s,r=this
H.f(a,"$iA")
if(!H.E(r.cx))return
r.cx=!1
if(H.E(r.ch))return
u=r.dx
if(u.C(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.P()
s=r.y
if(typeof s!=="number")return H.p(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.P()
u=r.x
if(typeof u!=="number")return H.p(u)
s.sR(-t*10*u)
r.a3()}},
aN:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.M()
if(q<p){r.dy=p
u=b.y
r.c.am(0,u)
r.b.am(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.b2(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.m(0,V.b2(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$ia9:1}
U.dZ.prototype={
gA:function(){var u=this.r
return u==null?this.r=D.V():u},
O:function(a){var u=this.r
if(u!=null)u.G(a)},
aV:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.V():t
t=r.geY()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.V():s).h(0,t)
return!0},
eZ:function(a){var u,t,s,r,q=this
H.f(a,"$iA")
if(!J.K(q.b,q.a.b.c))return
H.w(a,"$icr")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.m()
r=u+t*s
if(u!==r){q.d=r
u=new D.M("zoom",u,r,[P.z])
u.b=!0
q.O(u)}},
aN:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.b2(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$ia9:1}
M.dh.prototype={
aD:function(a){var u
H.f(a,"$iA")
u=this.y
if(u!=null)u.G(a)},
ej:function(){return this.aD(null)},
fc:function(a,b){var u,t,s,r,q,p,o,n=E.al
H.o(b,"$ik",[n],"$ak")
for(u=b.length,t=this.gaC(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.x)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bL()
o.sae(null)
o.saS(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sae(H.e([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bP([n])
n.b=!0
this.aD(n)},
fe:function(a,b){var u,t,s=E.al
H.o(b,"$ik",[s],"$ak")
for(u=b.gU(b),t=this.gaC();u.B();)u.gJ(u).gA().K(0,t)
s=new D.bQ([s])
s.b=!0
this.aD(s)},
gA:function(){var u=this.y
return u==null?this.y=D.V():u},
aL:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
a.dR(f.d)
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
if(typeof s!=="number")return H.p(s)
o=C.e.ag(p*s)
p=q.b
if(typeof r!=="number")return H.p(r)
n=C.e.ag(p*r)
p=C.e.ag(q.c*s)
a.c=p
q=C.e.ag(q.d*r)
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
a.cy.dQ(i)
t=$.lE
if(t==null){t=V.lG()
q=V.kV()
p=$.lX
t=V.lA(t,q,p==null?$.lX=new V.J(0,0,-1):p)
$.lE=t
h=t}else h=t
u=u.b
if(u!=null){g=u.a
if(g!=null)h=g.m(0,h)}a.db.dQ(h)
for(u=f.e.a,u=new J.an(u,u.length,[H.t(u,0)]);u.B();)u.d.am(0,a)
for(u=f.e.a,u=new J.an(u,u.length,[H.t(u,0)]);u.B();)u.d.aL(a)
f.b.toString
a.cy.cf()
a.db.cf()
f.c.toString
a.dP()},
sez:function(a,b){this.e=H.o(b,"$ia_",[E.al],"$aa_")},
$ipj:1}
A.d6.prototype={}
A.f2.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hS:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
hM:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.ak.prototype={
gah:function(a){var u=this.a?1:0
return u|0|0},
i:function(a){var u=this.a?1:0
return""+(u|0|0)},
n:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.ak))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.fZ.prototype={
ea:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
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
A.or(c3,u)
A.ot(c3,u)
A.os(c3,u)
A.ov(c3,u)
A.ow(c3,u)
A.ou(c3,u)
A.ox(c3,u)
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
m=A.oq(b8.z)
b8.c=n
b8.d=m
b8.e=b8.cQ(n,35633)
b8.f=b8.cQ(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!H.E(H.mj(s.getProgramParameter(b8.r,35714)))){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.v(P.B("Failed to link shader: "+H.j(l)))}b8.h9()
b8.hb()
b8.Q=b8.x.j(0,"posAttr")
b8.cx=b8.x.j(0,"normAttr")
b8.ch=b8.x.j(0,"binmAttr")
b8.cy=b8.x.j(0,"txt2DAttr")
b8.db=b8.x.j(0,"txtCubeAttr")
b8.dx=b8.x.j(0,"bendAttr")
if(c3.dx)b8.id=H.w(b8.y.T(0,"invViewMat"),"$iat")
if(t)b8.dy=H.w(b8.y.T(0,"objMat"),"$iat")
if(r)b8.fr=H.w(b8.y.T(0,"viewObjMat"),"$iat")
b8.fy=H.w(b8.y.T(0,"projViewObjMat"),"$iat")
if(c3.ry)b8.k1=H.w(b8.y.T(0,"txt2DMat"),"$icI")
if(c3.x1)b8.k2=H.w(b8.y.T(0,"txtCubeMat"),"$iat")
if(c3.x2)b8.k3=H.w(b8.y.T(0,"colorMat"),"$iat")
b8.sev(H.e([],[A.at]))
t=c3.y2
if(t>0){b8.k4=H.f(b8.y.T(0,"bendMatCount"),"$iax")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.j(0,q)
if(j==null)H.v(P.B(c0+q+c1));(s&&C.a).h(s,H.w(j,"$iat"))}}if(c3.a.a)b8.r2=H.w(b8.y.T(0,"emissionClr"),"$iX")
if(c3.b.a)b8.x1=H.w(b8.y.T(0,"ambientClr"),"$iX")
if(c3.c.a)b8.y2=H.w(b8.y.T(0,"diffuseClr"),"$iX")
if(c3.d.a)b8.dk=H.w(b8.y.T(0,"invDiffuseClr"),"$iX")
t=c3.e.a
if(!t)s=!1
else s=!0
if(s){b8.dm=H.w(b8.y.T(0,"shininess"),"$iae")
if(t)b8.dl=H.w(b8.y.T(0,"specularClr"),"$iX")}if(c3.cy){b8.dn=H.w(b8.y.T(0,"envSampler"),"$ic_")
if(c3.r.a)b8.dq=H.w(b8.y.T(0,"reflectClr"),"$iX")
t=c3.x.a
if(!t)s=!1
else s=!0
if(s){b8.dr=H.w(b8.y.T(0,"refraction"),"$iae")
if(t)b8.ds=H.w(b8.y.T(0,"refractClr"),"$iX")}}if(c3.y.a)b8.dt=H.w(b8.y.T(0,"alpha"),"$iae")
t=P.l
s=[t,A.ax]
b8.seE(new H.Z(s))
b8.sek(new H.Z([t,[P.d,A.bX]]))
b8.sfU(new H.Z(s))
b8.sfV(new H.Z([t,[P.d,A.bY]]))
b8.she(new H.Z(s))
b8.sel(new H.Z([t,[P.d,A.c0]]))
if(c3.id){for(t=c3.z,s=t.length,r=[A.bX],i=0;i<t.length;t.length===s||(0,H.x)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.j(g)
e=H.e([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.ac()
p=(g&1)!==0
if(p){o=b8.y
d=f+"s["+k+"].objUp"
j=o.j(0,d)
if(j==null)H.v(P.B(c0+d+c1))
H.w(j,"$iX")
o=b8.y
d=f+"s["+k+"].objRight"
c=o.j(0,d)
if(c==null)H.v(P.B(c0+d+c1))
H.w(c,"$iX")
o=b8.y
d=f+"s["+k+"].objDir"
b=o.j(0,d)
if(b==null)H.v(P.B(c0+d+c1))
H.w(b,"$iX")
a=b
a0=c
a1=j}else{a=b9
a0=a
a1=a0}o=b8.y
d=f+"s["+k+"].viewDir"
j=o.j(0,d)
if(j==null)H.v(P.B(c0+d+c1))
H.w(j,"$iX")
o=b8.y
d=f+"s["+k+"].color"
c=o.j(0,d)
if(c==null)H.v(P.B(c0+d+c1))
H.w(c,"$iX")
if(p){p=b8.y
o=f+"sTexture2D"+k
b=p.j(0,o)
if(b==null)H.v(P.B(c0+o+c1))
H.w(b,"$ibZ")
a2=b}else a2=b9
C.a.h(e,new A.bX(a1,a0,a,j,c,a2))}b8.c1.k(0,g,e)
q=b8.c0
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.v(P.B(c0+o+c1))
q.k(0,g,H.f(j,"$iax"))}for(t=c3.Q,s=t.length,r=[A.bY],i=0;i<t.length;t.length===s||(0,H.x)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.j(g)
e=H.e([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.j(0,o)
if(j==null)H.v(P.B(c0+o+c1))
H.w(j,"$iX")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.j(0,o)
if(c==null)H.v(P.B(c0+o+c1))
H.w(c,"$iX")
p=b8.y
o=f+"s["+k+"].color"
b=p.j(0,o)
if(b==null)H.v(P.B(c0+o+c1))
H.w(b,"$iX")
if(typeof g!=="number")return g.ac()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
a3=p.j(0,o)
if(a3==null)H.v(P.B(c0+o+c1))
H.w(a3,"$icI")
a4=a3}else a4=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
a3=p.j(0,o)
if(a3==null)H.v(P.B(c0+o+c1))
H.w(a3,"$ic_")
a2=a3}else a2=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
a3=p.j(0,o)
if(a3==null)H.v(P.B(c0+o+c1))
H.w(a3,"$ic_")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a5=p.j(0,o)
if(a5==null)H.v(P.B(c0+o+c1))
H.w(a5,"$icH")
a6=a3
a7=a5}else{a6=b9
a7=a6}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
a3=p.j(0,o)
if(a3==null)H.v(P.B(c0+o+c1))
H.w(a3,"$iae")
p=b8.y
o=f+"s["+k+"].att1"
a5=p.j(0,o)
if(a5==null)H.v(P.B(c0+o+c1))
H.w(a5,"$iae")
p=b8.y
o=f+"s["+k+"].att2"
a8=p.j(0,o)
if(a8==null)H.v(P.B(c0+o+c1))
H.w(a8,"$iae")
a9=a8
b0=a5
b1=a3}else{a9=b9
b0=a9
b1=b0}C.a.h(e,new A.bY(j,c,a4,b,a2,a6,a7,b1,b0,a9))}b8.c3.k(0,g,e)
q=b8.c2
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.v(P.B(c0+o+c1))
q.k(0,g,H.f(j,"$iax"))}for(t=c3.ch,s=t.length,r=[A.c0],i=0;i<t.length;t.length===s||(0,H.x)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.j(g)
e=H.e([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.j(0,o)
if(j==null)H.v(P.B(c0+o+c1))
H.w(j,"$iX")
p=b8.y
o=f+"s["+k+"].objDir"
c=p.j(0,o)
if(c==null)H.v(P.B(c0+o+c1))
H.w(c,"$iX")
p=b8.y
o=f+"s["+k+"].viewPnt"
b=p.j(0,o)
if(b==null)H.v(P.B(c0+o+c1))
H.w(b,"$iX")
p=b8.y
o=f+"s["+k+"].color"
a3=p.j(0,o)
if(a3==null)H.v(P.B(c0+o+c1))
H.w(a3,"$iX")
if(typeof g!=="number")return g.ac()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a5=p.j(0,o)
if(a5==null)H.v(P.B(c0+o+c1))
H.w(a5,"$iX")
p=b8.y
o=f+"s["+k+"].objRight"
a8=p.j(0,o)
if(a8==null)H.v(P.B(c0+o+c1))
H.w(a8,"$iX")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.j(0,o)
if(b2==null)H.v(P.B(c0+o+c1))
H.w(b2,"$iae")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.j(0,o)
if(b3==null)H.v(P.B(c0+o+c1))
H.w(b3,"$iae")
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
if(a5==null)H.v(P.B(c0+d+c1))
H.w(a5,"$icH")
a7=a5}else a7=b9
if((g&8)!==0){o=b8.y
d=f+"s["+k+"].cutoff"
a5=o.j(0,d)
if(a5==null)H.v(P.B(c0+d+c1))
H.w(a5,"$iae")
o=b8.y
d=f+"s["+k+"].coneAngle"
a8=o.j(0,d)
if(a8==null)H.v(P.B(c0+d+c1))
H.w(a8,"$iae")
b6=a8
b7=a5}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
d=f+"s["+k+"].att0"
a5=o.j(0,d)
if(a5==null)H.v(P.B(c0+d+c1))
H.w(a5,"$iae")
o=b8.y
d=f+"s["+k+"].att1"
a8=o.j(0,d)
if(a8==null)H.v(P.B(c0+d+c1))
H.w(a8,"$iae")
o=b8.y
d=f+"s["+k+"].att2"
b2=o.j(0,d)
if(b2==null)H.v(P.B(c0+d+c1))
H.w(b2,"$iae")
a9=b2
b0=a8
b1=a5}else{a9=b9
b0=a9
b1=b0}if((g&1)!==0){o=b8.y
d=f+"sTexture2D"+k
a5=o.j(0,d)
if(a5==null)H.v(P.B(c0+d+c1))
H.w(a5,"$ibZ")
a2=a5}else a2=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a5=p.j(0,o)
if(a5==null)H.v(P.B(c0+o+c1))
H.w(a5,"$ibZ")
a6=a5}else a6=b9
C.a.h(e,new A.c0(j,c,b,a3,a1,a0,b5,b4,a7,b7,b6,b1,b0,a9,a2,a6))}b8.c5.k(0,g,e)
q=b8.c4
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.v(P.B(c0+o+c1))
q.k(0,g,H.f(j,"$iax"))}}},
h7:function(a,b){},
sev:function(a){this.r1=H.o(a,"$id",[A.at],"$ad")},
seE:function(a){this.c0=H.o(a,"$iy",[P.l,A.ax],"$ay")},
sek:function(a){this.c1=H.o(a,"$iy",[P.l,[P.d,A.bX]],"$ay")},
sfU:function(a){this.c2=H.o(a,"$iy",[P.l,A.ax],"$ay")},
sfV:function(a){this.c3=H.o(a,"$iy",[P.l,[P.d,A.bY]],"$ay")},
she:function(a){this.c4=H.o(a,"$iy",[P.l,A.ax],"$ay")},
sel:function(a){this.c5=H.o(a,"$iy",[P.l,[P.d,A.c0]],"$ay")}}
A.aG.prototype={
i:function(a){return"dirLight"+H.j(this.a)}}
A.aK.prototype={
i:function(a){return"pointLight"+H.j(this.a)}}
A.aO.prototype={
i:function(a){return"spotLight"+H.j(this.a)}}
A.h1.prototype={
i:function(a){return this.b_}}
A.bX.prototype={}
A.bY.prototype={}
A.c0.prototype={}
A.cA.prototype={
ed:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cQ:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.E(H.mj(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.B("Error compiling shader '"+H.j(s)+"': "+H.j(u)))}return s},
h9:function(){var u,t,s,r=this,q=H.e([],[A.d6]),p=r.a,o=H.ab(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.p(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.d6(p,t.name,s))}r.x=new A.f2(q)},
hb:function(){var u,t,s,r=this,q=H.e([],[A.dS]),p=r.a,o=H.ab(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.p(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.hJ(t.type,t.size,t.name,s))}r.y=new A.is(q)},
aF:function(a,b,c){var u=this.a
if(a===1)return new A.ax(u,b,c)
else return A.kS(u,this.r,b,a,c)},
eB:function(a,b,c){var u=this.a
if(a===1)return new A.bZ(u,b,c)
else return A.kS(u,this.r,b,a,c)},
eC:function(a,b,c){var u=this.a
if(a===1)return new A.c_(u,b,c)
else return A.kS(u,this.r,b,a,c)},
bb:function(a,b){return new P.e8(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
hJ:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aF(b,c,d)
case 5121:return u.aF(b,c,d)
case 5122:return u.aF(b,c,d)
case 5123:return u.aF(b,c,d)
case 5124:return u.aF(b,c,d)
case 5125:return u.aF(b,c,d)
case 5126:return new A.ae(u.a,c,d)
case 35664:return new A.io(u.a,c,d)
case 35665:return new A.X(u.a,c,d)
case 35666:return new A.cH(u.a,c,d)
case 35667:return new A.ip(u.a,c,d)
case 35668:return new A.iq(u.a,c,d)
case 35669:return new A.ir(u.a,c,d)
case 35674:return new A.it(u.a,c,d)
case 35675:return new A.cI(u.a,c,d)
case 35676:return new A.at(u.a,c,d)
case 35678:return u.eB(b,c,d)
case 35680:return u.eC(b,c,d)
case 35670:throw H.c(u.bb("BOOL",c))
case 35671:throw H.c(u.bb("BOOL_VEC2",c))
case 35672:throw H.c(u.bb("BOOL_VEC3",c))
case 35673:throw H.c(u.bb("BOOL_VEC4",c))
default:throw H.c(P.B("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}}
A.dS.prototype={}
A.is.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
T:function(a,b){var u=this.j(0,b)
if(u==null)throw H.c(P.B("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.L()},
L:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.x)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.ax.prototype={
i:function(a){return"Uniform1i: "+H.j(this.c)}}
A.ip.prototype={
i:function(a){return"Uniform2i: "+H.j(this.c)}}
A.iq.prototype={
i:function(a){return"Uniform3i: "+H.j(this.c)}}
A.ir.prototype={
i:function(a){return"Uniform4i: "+H.j(this.c)}}
A.im.prototype={
i:function(a){return"Uniform1iv: "+H.j(this.c)},
shr:function(a){H.o(a,"$id",[P.l],"$ad")}}
A.ae.prototype={
i:function(a){return"Uniform1f: "+H.j(this.c)}}
A.io.prototype={
i:function(a){return"Uniform2f: "+H.j(this.c)}}
A.X.prototype={
i:function(a){return"Uniform3f: "+H.j(this.c)}}
A.cH.prototype={
i:function(a){return"Uniform4f: "+H.j(this.c)}}
A.it.prototype={
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}}
A.cI.prototype={
aj:function(a){var u=new Float32Array(H.c4(H.o(a,"$id",[P.z],"$ad")))
C.c.e_(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.j(this.c)}}
A.at.prototype={
aj:function(a){var u=new Float32Array(H.c4(H.o(a,"$id",[P.z],"$ad")))
C.c.e0(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.j(this.c)}}
A.bZ.prototype={
i:function(a){return"UniformSampler2D: "+H.j(this.c)}}
A.c_.prototype={
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}
F.jK.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.ca(s.b,b).ca(s.d.ca(s.c,b),c)
a.sV(0,new V.a2(r.a,r.b,r.c))
a.scm(r.q(0,Math.sqrt(r.C(r))))
s=1-b
u=1-c
a.sbS(new V.bR(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)},
$S:4}
F.jW.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:11}
F.jY.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.p(p)
s=-s*p
u=r*p
a.sV(0,new V.a2(s,u,q))
u=new V.J(s,u,q)
a.scm(u.q(0,Math.sqrt(u.C(u))))
a.sbS(new V.bR(1-c,2+c,-1,-1))},
$S:4}
F.k8.prototype={
$3:function(a,b,c){var u=c*3.141592653589793,t=Math.sin(u),s=b*6.283185307179586,r=new V.J(Math.cos(s)*t,Math.cos(u),Math.sin(s)*t)
s=r.q(0,Math.sqrt(r.C(r)))
a.sV(0,new V.a2(s.a,s.b,s.c))},
$S:4}
F.kv.prototype={
$2:function(a,b){return 0},
$S:11}
F.kw.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.p(s)
u=a.f
t=new V.J(u.a,u.b,u.c)
s=t.q(0,Math.sqrt(t.C(t))).m(0,this.b+s)
a.sV(0,new V.a2(s.a,s.b,s.c))},
$S:4}
F.ky.prototype={
$1:function(a){return new V.a2(Math.cos(a),Math.sin(a),0)},
$S:42}
F.jX.prototype={
$3:function(a,b,c){var u,t,s,r,q,p,o=this,n=b*6.283185307179586,m=o.a,l=o.b,k=J.ll(m.$1(n),l)
l=J.ll(m.$1(n+3.141592653589793/o.c),l).w(0,k)
l=new V.J(l.a,l.b,l.c)
u=l.q(0,Math.sqrt(l.C(l)))
m=$.lY
if(m==null){m=new V.J(1,0,0)
$.lY=m
t=m}else t=m
m=u.at(!J.K(u,t)?V.m_():t)
s=m.q(0,Math.sqrt(m.C(m)))
m=s.at(u)
t=m.q(0,Math.sqrt(m.C(m)))
r=c*6.283185307179586
m=Math.cos(r)
l=o.d
q=Math.sin(r)
m=t.m(0,m*l)
l=s.m(0,q*l)
q=m.c
p=l.c
if(typeof q!=="number")return q.w()
if(typeof p!=="number")return H.p(p)
a.sV(0,k.v(0,new V.a2(m.a-l.a,m.b-l.b,q-p)))},
$S:4}
F.k1.prototype={
$2:function(a,b){return 0},
$S:11}
F.k2.prototype={
$3:function(a,b,c){var u,t,s=b*2-1,r=c*2-1
a.sV(0,new V.a2(s,r,this.a.a.$2(b,c)))
u=new V.J(s,r,1)
a.scm(u.q(0,Math.sqrt(u.C(u))))
u=1-b
t=1-c
a.sbS(new V.bR(b*c,2+u*c,4+b*t,6+u*t))},
$S:4}
F.a8.prototype={
aY:function(){var u=this
if(!u.gaZ()){C.a.K(u.a.a.d.b,u)
u.a.a.Z()}u.bL()
u.bM()
u.h_()},
bP:function(a){this.a=a
C.a.h(a.d.b,this)},
bQ:function(a){this.b=a
C.a.h(a.d.c,this)},
h8:function(a){this.c=a
C.a.h(a.d.d,this)},
bL:function(){var u=this.a
if(u!=null){C.a.K(u.d.b,this)
this.a=null}},
bM:function(){var u=this.b
if(u!=null){C.a.K(u.d.c,this)
this.b=null}},
h_:function(){var u=this.c
if(u!=null){C.a.K(u.d.d,this)
this.c=null}},
gaZ:function(){return this.a==null||this.b==null||this.c==null},
eu:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cK()
if(q!=null)s=s.v(0,q)
if(u!=null)s=s.v(0,u)
if(t!=null)s=s.v(0,t)
if(s.dE())return
return s.q(0,Math.sqrt(s.C(s)))},
ey:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.w(0,q)
r=new V.J(r.a,r.b,r.c)
s=r.q(0,Math.sqrt(r.C(r)))
r=t.w(0,q)
r=new V.J(r.a,r.b,r.c)
r=s.at(r.q(0,Math.sqrt(r.C(r))))
return r.q(0,Math.sqrt(r.C(r)))},
bW:function(){var u,t=this
if(t.d!=null)return!0
u=t.eu()
if(u==null){u=t.ey()
if(u==null)return!1}t.d=u
t.a.a.Z()
return!0},
es:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.cK()
if(q!=null)s=s.v(0,q)
if(u!=null)s=s.v(0,u)
if(t!=null)s=s.v(0,t)
if(s.dE())return
return s.q(0,Math.sqrt(s.C(s)))},
ex:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.N().a){l=d.w(0,g)
l=new V.J(l.a,l.b,l.c)
q=l.q(0,Math.sqrt(l.C(l)))
if(s.a-t.a<0)q=q.P(0)}else{p=(l-u.b)/r
l=d.w(0,g).m(0,p).v(0,g).w(0,j)
l=new V.J(l.a,l.b,l.c)
q=l.q(0,Math.sqrt(l.C(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.P(0)}l=n.d
if(l!=null){o=l.q(0,Math.sqrt(l.C(l)))
l=o.at(q)
l=l.q(0,Math.sqrt(l.C(l))).at(o)
q=l.q(0,Math.sqrt(l.C(l)))}return q},
bU:function(){var u,t=this
if(t.e!=null)return!0
u=t.es()
if(u==null){u=t.ex()
if(u==null)return!1}t.e=u
t.a.a.Z()
return!0},
ghE:function(a){var u=this
if(J.K(u.a,u.b))return!0
if(J.K(u.b,u.c))return!0
if(J.K(u.c,u.a))return!0
return!1},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
E:function(a){var u,t,s=this
if(s.gaZ())return a+"disposed"
u=a+C.b.aa(J.aq(s.a.e),0)+", "+C.b.aa(J.aq(s.b.e),0)+", "+C.b.aa(J.aq(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
L:function(){return this.E("")}}
F.fx.prototype={}
F.hN.prototype={
b1:function(a,b,c){var u,t=b.a
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
F.be.prototype={
aY:function(){var u=this
if(!u.gaZ()){C.a.K(u.a.a.c.b,u)
u.a.a.Z()}u.bL()
u.bM()},
bP:function(a){this.a=a
C.a.h(a.c.b,this)},
bQ:function(a){this.b=a
C.a.h(a.c.c,this)},
bL:function(){var u=this.a
if(u!=null){C.a.K(u.c.b,this)
this.a=null}},
bM:function(){var u=this.b
if(u!=null){C.a.K(u.c.c,this)
this.b=null}},
gaZ:function(){return this.a==null||this.b==null},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
E:function(a){if(this.gaZ())return a+"disposed"
return a+C.b.aa(J.aq(this.a.e),0)+", "+C.b.aa(J.aq(this.b.e),0)},
L:function(){return this.E("")}}
F.fM.prototype={}
F.il.prototype={
b1:function(a,b,c){var u,t=b.a
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
F.bx.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
E:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.aa(J.aq(u.e),0)},
L:function(){return this.E("")}}
F.bV.prototype={
gA:function(){var u=this.e
return u==null?this.e=D.V():u},
bi:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.u()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.x)(g),++s){r=g[s]
h.a.h(0,r.hH())}h.a.u()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.x)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.v()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bx()
if(n.a==null)H.v(P.B("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.G(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.x)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.v()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.u()
p=p.e
if(typeof p!=="number")return p.v()
p+=u
o=o.c
if(p>=o.length)return H.b(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.na(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.x)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.v()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.u()
p=p.e
if(typeof p!=="number")return p.v()
p+=u
o=o.c
if(p>=o.length)return H.b(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.v()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.dj(l,k,i)}g=h.e
if(g!=null)g.a6(0)},
a4:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.a4()||!1
if(!t.a.a4())u=!1
s=t.e
if(s!=null)s.a6(0)
return u},
hw:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=d.e
if(c!=null)++c.d
for(u=d.a.c.length-1,c=a.b,t=a.a,s=t.length,r=a.c,q=c-1;u>=0;--u){p=d.a.c
if(u>=p.length)return H.b(p,u)
o=p[u]
p=o.y
n=C.e.b0(p.a*q)
p=p.b
if(typeof r!=="number")return r.w()
m=C.e.b0(p*(r-1))
n=n>=0?C.d.ai(n,c):c+C.d.ai(n,c)
l=(n+(m>=0?C.d.ai(m,r):r+C.d.ai(m,r))*c)*4
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
if(typeof e!=="number")return e.v()
k=new V.a2(g+j*h,f+i*h,e+k*h)
if(!J.K(p,k)){o.f=k
p=o.a
if(p!=null){p=p.e
if(p!=null)p.G(null)}}}c=d.e
if(c!=null)c.a6(0)},
iI:function(a){var u,t,s,r,q=this.e
if(q!=null)++q.d
for(q=this.a,u=q.c.length-1,t=a.a;u>=0;--u){s=q.c
if(u>=s.length)return H.b(s,u)
r=s[u]
if((t&$.bc().a)===0)r.f=null
if((t&$.aT().a)===0)r.r=null
if((t&$.bb().a)===0)r.x=null
if((t&$.bl().a)===0)r.y=null
if((t&$.bm().a)===0)r.z=null
if((t&$.lj().a)===0)r.Q=null
if((t&$.bE().a)===0)r.ch=0
if((t&$.ba().a)===0)r.cx=null}q=this.e
if(q!=null)q.a6(0)},
iH:function(a){var u,t,s,r=this.e
if(r!=null)++r.d
for(r=this.d,u=r.b.length-1;u>=0;--u){t=r.b
if(u>=t.length)return H.b(t,u)
s=t[u]
s.d=null}r=this.e
if(r!=null)r.a6(0)},
i7:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.e(o.slice(0),[H.t(o,0)])
for(o=[F.ay];u.length!==0;){t=C.a.ghX(u)
C.a.dS(u,0)
if(t!=null){s=H.e([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.b(u,r)
q=u[r]
if(q!=null&&a.b1(0,t,q)){C.a.h(s,q)
C.a.dS(u,r)}}if(s.length>1)b.bi(s)}}p.a.u()
p.c.bk()
p.d.bk()
p.b.it()
p.c.ci(new F.il())
p.d.ci(new F.hN())
o=p.e
if(o!=null)o.a6(0)},
bc:function(){this.i7(new F.iQ(),new F.hn())},
hC:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.bc()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.aT().a)!==0)++s
if((t&$.bb().a)!==0)++s
if((t&$.bl().a)!==0)++s
if((t&$.bm().a)!==0)++s
if((t&$.d1().a)!==0)++s
if((t&$.d2().a)!==0)++s
if((t&$.bE().a)!==0)++s
if((t&$.ba().a)!==0)++s
r=a3.gct(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.z
p=H.e(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.e(u,[Z.d8])
for(n=0,m=0;m<s;++m){l=a3.hx(m)
k=l.gct(l)
C.a.k(o,m,new Z.d8(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.b(u,j)
i=u[j].i4(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.k(p,h,i[g]);++h}}n+=k}H.o(p,"$id",[t],"$ad")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.c4(p)),35044)
u.bindBuffer(a0,null)
e=new Z.d9(new Z.e_(a0,f),o,a3)
e.seP(H.e([],[Z.bt]))
if(a.b.b.length!==0){t=P.l
d=H.e([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.u()
C.a.h(d,c.e)}b=Z.kX(u,34963,H.o(d,"$id",[t],"$ad"))
C.a.h(e.b,new Z.bt(0,d.length,b))}if(a.c.b.length!==0){t=P.l
d=H.e([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.u()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.b(c,m)
c=c[m].b
c.a.a.u()
C.a.h(d,c.e)}b=Z.kX(u,34963,H.o(d,"$id",[t],"$ad"))
C.a.h(e.b,new Z.bt(1,d.length,b))}if(a.d.b.length!==0){t=P.l
d=H.e([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.u()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.b(c,m)
c=c[m].b
c.a.a.u()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.b(c,m)
c=c[m].c
c.a.a.u()
C.a.h(d,c.e)}b=Z.kX(u,34963,H.o(d,"$id",[t],"$ad"))
C.a.h(e.b,new Z.bt(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.e([],[P.h])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.E(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.E(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.E(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.E(t))}return C.a.t(s,"\n")},
Z:function(){var u=this.e
if(u!=null)u.G(null)},
$ipk:1}
F.hH.prototype={
hv:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.o(c,"$id",[F.ay],"$ad")
u=H.e([],[F.a8])
for(t=this.a,s=b,r=0,q=!1,p=1;p<a;++p,++r,++s){for(o=q,n=1;n<b;++n,s=j){m=c.length
if(r<0||r>=m)return H.b(c,r)
l=c[r];++r
if(r>=m)return H.b(c,r)
k=c[r]
j=s+1
if(j<0||j>=m)return H.b(c,j)
i=c[j]
if(s<0||s>=m)return H.b(c,s)
h=c[s]
m=t.a
if(o){m.h(0,l)
t.a.h(0,k)
t.a.h(0,i)
C.a.h(u,F.dj(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dj(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dj(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.dj(k,h,l))}o=!o}q=!q}return u},
gl:function(a){return this.b.length},
ci:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.b(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.b1(0,p,n)){p.aY()
break}}}}},
bk:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
s=t[u]
t=s.ghE(s)
if(t)s.aY()}},
a4:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.x)(u),++r)if(!u[r].bW())s=!1
return s},
bV:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.x)(u),++r)if(!u[r].bU())s=!1
return s},
i:function(a){return this.L()},
E:function(a){var u,t,s,r=H.e([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].E(a))
return C.a.t(r,"\n")},
L:function(){return this.E("")},
seI:function(a){this.b=H.o(a,"$id",[F.a8],"$ad")}}
F.hI.prototype={
gl:function(a){return this.b.length},
ci:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.b(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.b1(0,p,n)){p.aY()
break}}}}},
bk:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
s=t[u]
t=J.K(s.a,s.b)
if(t)s.aY()}},
i:function(a){return this.L()},
E:function(a){var u,t,s=H.e([],[P.h]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.b(t,u)
C.a.h(s,t[u].E(a+(""+u+". ")))}return C.a.t(s,"\n")},
L:function(){return this.E("")},
seQ:function(a){this.b=H.o(a,"$id",[F.be],"$ad")}}
F.hJ.prototype={
gl:function(a){return this.b.length},
it:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.K(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.G(null)}s=t.a
if(s!=null){C.a.K(s.b.b,t)
t.a=null}}}},
i:function(a){return this.L()},
E:function(a){var u,t,s,r=H.e([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].E(a))
return C.a.t(r,"\n")},
L:function(){return this.E("")},
sbI:function(a){this.b=H.o(a,"$id",[F.bx],"$ad")}}
F.ay.prototype={
bZ:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.kW(u.cx,r,o,t,s,q,p,a,n)},
hH:function(){return this.bZ(null)},
sV:function(a,b){var u
if(!J.K(this.f,b)){this.f=b
u=this.a
if(u!=null)u.Z()}},
scm:function(a){var u
if(!J.K(this.z,a)){this.z=a
u=this.a
if(u!=null)u.Z()}},
sbS:function(a){var u
if(!J.K(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.Z()}},
i4:function(a){var u,t,s=this
if(a.n(0,$.bc())){u=s.f
t=[P.z]
if(u==null)return H.e([0,0,0],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.n(0,$.aT())){u=s.r
t=[P.z]
if(u==null)return H.e([0,1,0],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.n(0,$.bb())){u=s.x
t=[P.z]
if(u==null)return H.e([0,0,1],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.n(0,$.bl())){u=s.y
t=[P.z]
if(u==null)return H.e([0,0],t)
else return H.e([u.a,u.b],t)}else if(a.n(0,$.bm())){u=s.z
t=[P.z]
if(u==null)return H.e([0,0,0],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.n(0,$.d1())){u=s.Q
t=[P.z]
if(u==null)return H.e([1,1,1],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.n(0,$.d2())){u=s.Q
t=[P.z]
if(u==null)return H.e([1,1,1,1],t)
else return H.e([u.a,u.b,u.c,u.d],t)}else if(a.n(0,$.bE()))return H.e([s.ch],[P.z])
else if(a.n(0,$.ba())){u=s.cx
t=[P.z]
if(u==null)return H.e([-1,-1,-1,-1],t)
else return H.e([u.a,u.b,u.c,u.d],t)}else return H.e([],[P.z])},
bW:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cK()
t.d.D(0,new F.iV(s))
s=s.a
t.r=s.q(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.Z()
s=t.a.e
if(s!=null)s.a6(0)}return!0},
bU:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cK()
t.d.D(0,new F.iU(s))
s=s.a
t.x=s.q(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.Z()
s=t.a.e
if(s!=null)s.a6(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
E:function(a){var u,t,s=this,r="-",q=H.e([],[P.h])
C.a.h(q,C.b.aa(J.aq(s.e),0))
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
C.a.h(q,V.S(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.t(q,", ")
return a+"{"+t+"}"},
L:function(){return this.E("")}}
F.iV.prototype={
$1:function(a){var u,t
H.f(a,"$ia8")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.v(0,u)}},
$S:10}
F.iU.prototype={
$1:function(a){var u,t
H.f(a,"$ia8")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.v(0,u)}},
$S:10}
F.iL.prototype={
u:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.b(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.B("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.Z()
return!0},
gl:function(a){return this.c.length},
a4:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)u[s].bW()
return!0},
bV:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)u[s].bU()
return!0},
hD:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
if(typeof n!=="number")return n.m()
n=q.q(0,Math.sqrt(p*p+o*o+n*n))
if(!J.K(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.G(null)}}}}return!0},
i:function(a){return this.L()},
E:function(a){var u,t,s,r
this.u()
u=H.e([],[P.h])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)C.a.h(u,t[r].E(a))
return C.a.t(u,"\n")},
L:function(){return this.E("")},
shs:function(a){this.c=H.o(a,"$id",[F.ay],"$ad")}}
F.iM.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b<s){if(b<0)return H.b(t,b)
return t[b]}b-=s
t=this.c
u=t.length
if(b<u){if(b<0)return H.b(t,b)
return t[b]}b-=u
t=this.d
if(b<0||b>=t.length)return H.b(t,b)
return t[b]},
D:function(a,b){var u=this
H.n(b,{func:1,ret:-1,args:[F.a8]})
C.a.D(u.b,b)
C.a.D(u.c,new F.iN(u,b))
C.a.D(u.d,new F.iO(u,b))},
i:function(a){return this.L()},
L:function(){var u,t,s,r=H.e([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].E(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].E(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].E(""))
return C.a.t(r,"\n")},
seJ:function(a){this.b=H.o(a,"$id",[F.a8],"$ad")},
seK:function(a){this.c=H.o(a,"$id",[F.a8],"$ad")},
seL:function(a){this.d=H.o(a,"$id",[F.a8],"$ad")}}
F.iN.prototype={
$1:function(a){H.f(a,"$ia8")
if(!J.K(a.a,this.a))this.b.$1(a)},
$S:10}
F.iO.prototype={
$1:function(a){var u
H.f(a,"$ia8")
u=this.a
if(!J.K(a.a,u)&&!J.K(a.b,u))this.b.$1(a)},
$S:10}
F.iP.prototype={
gl:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.b(t,u)
return t[u]}else{if(b<0)return H.b(t,b)
return t[b]}},
i:function(a){return this.L()},
L:function(){var u,t,s,r=H.e([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].E(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].E(""))
return C.a.t(r,"\n")},
seR:function(a){this.b=H.o(a,"$id",[F.be],"$ad")},
seS:function(a){this.c=H.o(a,"$id",[F.be],"$ad")}}
F.iR.prototype={}
F.iQ.prototype={
b1:function(a,b,c){return J.K(b.f,c.f)}}
F.iS.prototype={}
F.hn.prototype={
bi:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.o(a,"$id",[F.ay],"$ad")
u=V.cK()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null){q=u.a
p=r.a
o=u.b
n=r.b
m=u.c
r=r.c
if(typeof m!=="number")return m.v()
if(typeof r!=="number")return H.p(r)
u=new V.J(q+p,o+n,m+r)}}u=u.q(0,Math.sqrt(u.C(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.x)(a),++s){l=a[s]
if(r)k=null
else{q=u.a
p=u.b
o=u.c
if(typeof o!=="number")return o.m()
k=u.q(0,Math.sqrt(q*q+p*p+o*o))}if(!J.K(l.r,k)){l.r=k
q=l.a
if(q!=null){q=q.e
if(q!=null)q.G(null)}}}return}}
F.iT.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.L()},
L:function(){var u,t,s,r=H.e([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].E(""))
return C.a.t(r,"\n")},
sbI:function(a){this.b=H.o(a,"$id",[F.bx],"$ad")}}
O.dv.prototype={
gA:function(){var u=this.fr
return u==null?this.fr=D.V():u},
a8:function(a){var u
H.f(a,"$iA")
u=this.fr
if(u!=null)u.G(a)},
fa:function(){return this.a8(null)},
d3:function(a){H.f(a,"$iA")
this.a=null
this.a8(a)},
h4:function(){return this.d3(null)},
f4:function(a,b){var u=V.am
H.o(b,"$ik",[u],"$ak")
u=new D.bP([u])
u.b=!0
this.a8(u)},
f6:function(a,b){var u=V.am
H.o(b,"$ik",[u],"$ak")
u=new D.bQ([u])
u.b=!0
this.a8(u)},
cN:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.l,h=new H.Z([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=h.j(0,0)
h.k(0,0,r==null?1:r)}q=H.e([],[A.aG])
h.D(0,new O.h5(j,q))
C.a.bq(q,new O.h6())
p=new H.Z([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){o=u[s]
r=o.gaX()
n=p.j(0,o.gaX())
p.k(0,r,n==null?1:n)}m=H.e([],[A.aK])
p.D(0,new O.h7(j,m))
C.a.bq(m,new O.h8())
l=new H.Z([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.x)(i),++s){o=i[s]
t=o.gaX()
r=l.j(0,o.gaX())
l.k(0,t,r==null?1:r)}k=H.e([],[A.aO])
l.D(0,new O.h9(j,k))
C.a.bq(k,new O.ha())
i=C.d.a0(j.e.a.length+3,4)
j.dy.e
return A.nh(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
er:function(a,b){H.o(a,"$id",[T.cE],"$ad")},
am:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.an(u,u.length,[H.t(u,0)]);u.B();){t=u.d
t.toString
s=$.iK
if(s==null)s=$.iK=new V.J(0,0,1)
t.a=s
r=$.iJ
t.d=r==null?$.iJ=new V.J(0,1,0):r
r=$.iI
t.e=r==null?$.iI=new V.J(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bm(s)
r=s.a
p=s.b
o=s.c
if(typeof o!=="number")return o.m()
t.a=s.q(0,Math.sqrt(r*r+p*p+o*o))
o=q.bm(t.d)
p=o.a
r=o.b
s=o.c
if(typeof s!=="number")return s.m()
t.d=o.q(0,Math.sqrt(p*p+r*r+s*s))
s=q.bm(t.e)
r=s.a
p=s.b
o=s.c
if(typeof o!=="number")return o.m()
t.e=s.q(0,Math.sqrt(r*r+p*p+o*o))}}}},
iv:function(b6,b7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=b4.a
if(b5==null){b5=b4.cN()
u=b6.fr.j(0,b5.b_)
if(u==null){u=A.ng(b5,b6.a)
t=u.b
if(t.length===0)H.v(P.B("May not cache a shader with no name."))
if(b6.fr.be(0,t))H.v(P.B('Shader cache already contains a shader by the name "'+t+'".'))
b6.fr.k(0,t,u)}b5=b4.a=u
b7.e=null}s=b5.z
r=s.dj
b5=b7.e
if(!(b5 instanceof Z.d9))b5=b7.e=null
if(b5==null||!b5.d.n(0,r)){b5=s.k3
if(b5)b7.d.a4()
q=s.k4
if(q){p=b7.d
o=p.e
if(o!=null)++o.d
p.d.bV()
p.a.bV()
p=p.e
if(p!=null)p.a6(0)}p=s.r2
if(p){o=b7.d
n=o.e
if(n!=null)++n.d
o.a.hD()
o=o.e
if(o!=null)o.a6(0)}m=b7.d.hC(new Z.iX(b6.a),r)
m.aJ($.bc()).e=b4.a.Q.c
if(b5)m.aJ($.aT()).e=b4.a.cx.c
if(q)m.aJ($.bb()).e=b4.a.ch.c
if(s.r1)m.aJ($.bl()).e=b4.a.cy.c
if(p)m.aJ($.bm()).e=b4.a.db.c
if(s.rx)m.aJ($.ba()).e=b4.a.dx.c
b7.e=m}b5=T.cE
l=H.e([],[b5])
q=b4.a
p=b6.a
p.useProgram(q.r)
q.x.hS()
if(s.dy){q=b4.a
o=b6.dx
o=o.ga_(o)
q=q.dy
q.toString
q.aj(o.ab(0,!0))}if(s.fr){q=b4.a
o=b6.cx
if(o==null){o=b6.db
o=o.ga_(o)
n=b6.dx
n=b6.cx=o.m(0,n.ga_(n))
o=n}q=q.fr
q.toString
q.aj(o.ab(0,!0))}q=b4.a
o=b6.ch
if(o==null){o=b6.gis()
n=b6.dx
n=b6.ch=o.m(0,n.ga_(n))
o=n}q=q.fy
q.toString
q.aj(o.ab(0,!0))
if(s.ry){q=b4.a
o=b4.b
q=q.k1
q.toString
q.aj(C.k.ab(o,!0))}if(s.x1){q=b4.a
o=b4.c
q=q.k2
q.toString
q.aj(C.k.ab(o,!0))}if(s.x2){q=b4.a
o=b4.d
q=q.k3
q.toString
q.aj(C.k.ab(o,!0))}if(s.y2>0){k=b4.e.a.length
q=b4.a.k4
C.c.bn(q.a,q.d,k)
for(q=[P.z],j=0;j<k;++j){o=b4.a
n=b4.e.a
if(j>=n.length)return H.b(n,j)
n=n[j]
o.toString
H.f(n,"$iam")
o=o.r1
if(j>=o.length)return H.b(o,j)
o=o[j]
i=new Float32Array(H.c4(H.o(n.ab(0,!0),"$id",q,"$ad")))
C.c.e0(o.a,o.d,!1,i)}}if(s.a.a){q=b4.a
o=b4.f.f
q=q.r2
C.c.W(q.a,q.d,o.a,o.b,o.c)}if(s.id){if(s.b.a){q=b4.a
o=b4.r.f
q=q.x1
C.c.W(q.a,q.d,o.a,o.b,o.c)}if(s.c.a){q=b4.a
o=b4.x.f
q=q.y2
C.c.W(q.a,q.d,o.a,o.b,o.c)}if(s.d.a){q=b4.a
o=b4.y.f
q=q.dk
C.c.W(q.a,q.d,o.a,o.b,o.c)}q=s.e.a
if(!q)o=!1
else o=!0
if(o){o=b4.a
n=b4.z.ch
o=o.dm
C.c.a1(o.a,o.d,n)}if(q){q=b4.a
o=b4.z.f
q=q.dl
C.c.W(q.a,q.d,o.a,o.b,o.c)}q=s.z
if(q.length>0){o=b6.db
h=o.ga_(o)
o=P.l
g=new H.Z([o,o])
for(o=b4.dx.e,n=o.length,f=0;f<o.length;o.length===n||(0,H.x)(o),++f){e=o[f]
d=g.j(0,0)
if(d==null)d=0
g.k(0,0,d+1)
c=J.d3(b4.a.c1.j(0,0),d)
b=h.bm(e.a)
a=b.a
a0=b.b
a1=b.c
if(typeof a1!=="number")return a1.m()
a1=b.q(0,Math.sqrt(a*a+a0*a0+a1*a1))
a0=c.e
a=a1.a
b=a1.b
a1=a1.c
C.c.W(a0.a,a0.d,a,b,a1)
a1=e.c
b=c.f
C.c.W(b.a,b.d,a1.a,a1.b,a1.c)}for(o=q.length,f=0;f<q.length;q.length===o||(0,H.x)(q),++f){n=q[f].a
k=g.j(0,n)
if(k==null)k=0
n=b4.a.c0.j(0,n)
C.c.bn(n.a,n.d,k)}}q=s.Q
if(q.length>0){o=b6.db
h=o.ga_(o)
o=P.l
a2=new H.Z([o,o])
for(o=b4.dx.f,n=o.length,b=[b5],a=[P.z],f=0;f<o.length;o.length===n||(0,H.x)(o),++f){e=o[f]
a3=e.gaX()
d=a2.j(0,a3)
if(d==null)d=0
a2.k(0,a3,d+1)
c=J.d3(b4.a.c3.j(0,a3),d)
a4=h.m(0,e.ga_(e))
a0=e.ga_(e)
a1=$.cx
a0=a0.cn(a1==null?$.cx=new V.a2(0,0,0):a1)
a1=c.b
C.c.W(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=$.cx
a0=a4.cn(a0==null?$.cx=new V.a2(0,0,0):a0)
a1=c.c
C.c.W(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=e.gaW(e)
a1=c.e
C.c.W(a1.a,a1.d,a0.a,a0.b,a0.c)
e.gay()
a0=a4.dD(0)
a1=a0.a
a5=a0.b
a6=a0.c
a7=a0.e
a8=a0.f
a9=a0.r
b0=a0.y
b1=a0.z
a0=a0.Q
b2=c.d
b2.toString
i=new Float32Array(H.c4(H.o(new V.dx(a1,a5,a6,a7,a8,a9,b0,b1,a0).ab(0,!0),"$id",a,"$ad")))
C.c.e_(b2.a,b2.d,!1,i)
e.gay()
a0=e.gay()
H.o(l,"$id",b,"$ad")
if(!C.a.as(l,a0)){a0.sav(0,l.length)
C.a.h(l,a0)}a0=e.gay()
a1=a0.gax(a0)
if(a1){a1=c.f
a1.toString
a5=a0.gax(a0)
if(!a5)a1.a.uniform1i(a1.d,0)
else{a0=a0.gav(a0)
a1.a.uniform1i(a1.d,a0)}}e.gaO()
a0=e.ge5()
a1=c.x
a1.toString
a5=a0.ghO(a0)
a6=a0.ghP(a0)
a7=a0.ghQ()
a0=a0.ghN()
C.c.dZ(a1.a,a1.d,a5,a6,a7,a0)
a0=e.gaO()
if(!C.a.as(l,a0)){a0.sav(0,l.length)
C.a.h(l,a0)}a0=e.gaO()
a1=a0.gax(a0)
if(a1){a1=c.r
a1.toString
a5=a0.gax(a0)
if(!a5)a1.a.uniform1i(a1.d,0)
else{a0=a0.gav(a0)
a1.a.uniform1i(a1.d,a0)}}if(e.ghT()){a0=e.ghy()
a1=c.y
C.c.a1(a1.a,a1.d,a0)
a0=e.ghz()
a1=c.z
C.c.a1(a1.a,a1.d,a0)
a0=e.ghA()
a1=c.Q
C.c.a1(a1.a,a1.d,a0)}}for(o=q.length,f=0;f<q.length;q.length===o||(0,H.x)(q),++f){n=q[f].a
k=a2.j(0,n)
if(k==null)k=0
n=b4.a.c2.j(0,n)
C.c.bn(n.a,n.d,k)}}q=s.ch
if(q.length>0){o=b6.db
h=o.ga_(o)
o=P.l
b3=new H.Z([o,o])
for(o=b4.dx.r,n=o.length,b5=[b5],f=0;f<o.length;o.length===n||(0,H.x)(o),++f){e=o[f]
a3=e.gaX()
d=b3.j(0,a3)
if(d==null)d=0
b3.k(0,a3,d+1)
c=J.d3(b4.a.c5.j(0,a3),d)
b=e.gir(e)
a=c.b
C.c.W(a.a,a.d,b.a,b.b,b.c)
b=e.giN(e).j4()
a=c.c
C.c.W(a.a,a.d,b.a,b.b,b.c)
b=h.cn(e.gir(e))
a=c.d
C.c.W(a.a,a.d,b.a,b.b,b.c)
b=e.gaW(e)
a=c.e
C.c.W(a.a,a.d,b.a,b.b,b.c)
e.gay()
b=e.gco()
a=c.f
C.c.W(a.a,a.d,b.a,b.b,b.c)
b=e.gck(e)
a=c.r
C.c.W(a.a,a.d,b.a,b.b,b.c)
b=e.gj5()
a=c.x
C.c.a1(a.a,a.d,b)
b=e.gj6()
a=c.y
C.c.a1(a.a,a.d,b)
e.gay()
b=e.gay()
H.o(l,"$id",b5,"$ad")
if(!C.a.as(l,b)){b.sav(0,l.length)
C.a.h(l,b)}b=e.gay()
a=b.gax(b)
if(a){a=c.dx
a.toString
a0=b.gax(b)
if(!a0)a.a.uniform1i(a.d,0)
else{b=b.gav(b)
a.a.uniform1i(a.d,b)}}e.gaO()
b=e.ge5()
a=c.z
a.toString
a0=b.ghO(b)
a1=b.ghP(b)
a5=b.ghQ()
b=b.ghN()
C.c.dZ(a.a,a.d,a0,a1,a5,b)
b=e.gaO()
if(!C.a.as(l,b)){b.sav(0,l.length)
C.a.h(l,b)}b=e.gaO()
a=b.gax(b)
if(a){a=c.dy
a.toString
a0=b.gax(b)
if(!a0)a.a.uniform1i(a.d,0)
else{b=b.gav(b)
a.a.uniform1i(a.d,b)}}if(e.giO()){b=e.giM()
a=c.Q
C.c.a1(a.a,a.d,b)
b=e.giL()
a=c.ch
C.c.a1(a.a,a.d,b)}if(e.ghT()){b=e.ghy()
a=c.cx
C.c.a1(a.a,a.d,b)
b=e.ghz()
a=c.cy
C.c.a1(a.a,a.d,b)
b=e.ghA()
a=c.db
C.c.a1(a.a,a.d,b)}}for(b5=q.length,f=0;f<q.length;q.length===b5||(0,H.x)(q),++f){o=q[f].a
k=b3.j(0,o)
if(k==null)k=0
o=b4.a.c4.j(0,o)
C.c.bn(o.a,o.d,k)}}}if(s.dx){b5=b4.a
q=b6.Q
if(q==null){q=b6.db
q=b6.Q=q.ga_(q).dD(0)}b5=b5.id
b5.toString
b5.aj(q.ab(0,!0))}if(s.cy){b4.er(l,b4.ch)
b5=b4.a
q=b4.ch
b5.h7(b5.dn,q)
if(s.r.a){b5=b4.a
q=b4.cx.f
b5=b5.dq
C.c.W(b5.a,b5.d,q.a,q.b,q.c)}b5=s.x.a
if(!b5)q=!1
else q=!0
if(q){q=b4.a
o=b4.cy.ch
q=q.dr
C.c.a1(q.a,q.d,o)}if(b5){b5=b4.a
q=b4.cy.f
b5=b5.ds
C.c.W(b5.a,b5.d,q.a,q.b,q.c)}}b5=s.y.a
q=!b5
if(q)o=!1
else o=!0
if(o){if(b5){b5=b4.a
o=b4.db.f
b5=b5.dt
C.c.a1(b5.a,b5.d,o)}p.enable(3042)
p.blendFunc(770,771)}for(j=0;j<l.length;++j)l[j].bd(b6)
b5=b7.e
b5.bd(b6)
b5.aL(b6)
b5.dY(b6)
if(q)b5=!1
else b5=!0
if(b5)p.disable(3042)
for(j=0;j<l.length;++j)l[j].dY(b6)
b5=b4.a
b5.toString
p.useProgram(null)
b5.x.hM()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cN().b_},
sew:function(a){this.e=H.o(a,"$ia_",[V.am],"$aa_")}}
O.h5.prototype={
$2:function(a,b){H.ab(a)
H.ab(b)
if(typeof b!=="number")return b.v()
return C.a.h(this.b,new A.aG(a,C.d.a0(b+3,4)*4))},
$S:14}
O.h6.prototype={
$2:function(a,b){H.f(a,"$iaG")
H.f(b,"$iaG")
return J.kB(a.a,b.a)},
$S:46}
O.h7.prototype={
$2:function(a,b){H.ab(a)
H.ab(b)
if(typeof b!=="number")return b.v()
return C.a.h(this.b,new A.aK(a,C.d.a0(b+3,4)*4))},
$S:14}
O.h8.prototype={
$2:function(a,b){H.f(a,"$iaK")
H.f(b,"$iaK")
return J.kB(a.a,b.a)},
$S:47}
O.h9.prototype={
$2:function(a,b){H.ab(a)
H.ab(b)
if(typeof b!=="number")return b.v()
return C.a.h(this.b,new A.aO(a,C.d.a0(b+3,4)*4))},
$S:14}
O.ha.prototype={
$2:function(a,b){H.f(a,"$iaO")
H.f(b,"$iaO")
return J.kB(a.a,b.a)},
$S:48}
O.h_.prototype={
aq:function(){var u,t=this
t.cv()
u=t.f
if(!(Math.abs(u-1)<$.N().a)){t.f=1
u=new D.M(t.b,u,1,[P.z])
u.b=!0
t.a.a8(u)}}}
O.dw.prototype={
aq:function(){},
d6:function(a){var u,t,s=this
if(!s.c.n(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.aq()
u=s.a
u.a=null
u.a8(null)}}}
O.h0.prototype={}
O.b1.prototype={
d5:function(a){var u,t,s=this
if(!s.f.n(0,a)){u=s.f
s.f=a
t=new D.M(s.b+".color",u,a,[V.a6])
t.b=!0
s.a.a8(t)}},
aq:function(){this.cv()
this.d5(new V.a6(1,1,1))},
saW:function(a,b){this.d6(new A.ak(!0,!1,!1))
this.d5(b)}}
O.h2.prototype={}
O.h3.prototype={
aq:function(){var u,t=this
t.cw()
u=t.ch
if(!(Math.abs(u-1)<$.N().a)){t.ch=1
u=new D.M(t.b+".refraction",u,1,[P.z])
u.b=!0
t.a.a8(u)}}}
O.h4.prototype={
d7:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.N().a)){u.ch=a
t=new D.M(u.b+".shininess",t,a,[P.z])
t.b=!0
u.a.a8(t)}},
aq:function(){this.cw()
this.d7(100)}}
O.bW.prototype={}
T.cE.prototype={}
T.i2.prototype={}
T.i6.prototype={}
T.i7.prototype={
i5:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=W.lv(a)
t=new T.i6()
t.a=0
t.b=q
t.d=t.c=!1
t.x=t.r=0
r=W.m
W.a5(u,"load",H.n(new T.i8(this,t,u,!1,q,!1,!1),{func:1,ret:-1,args:[r]}),!1,r)
return t},
h5:function(a,b,c){var u,t,s,r
b=V.lf(b)
u=V.lf(a.width)
t=V.lf(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.kF()
s.width=u
s.height=t
r=H.f(C.j.e3(s,"2d"),"$icg")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.oK(r.getImageData(0,0,s.width,s.height))}}}
T.i8.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=u.c,q=s.h5(r,s.b,u.d),p=u.b
p.r=r.width
p.x=r.height
r=s.a
r.bindTexture(t,u.e)
r.pixelStorei(37440,u.f?1:0)
C.c.iB(r,t,0,6408,6408,5121,q)
if(u.r)r.generateMipmap(t)
r.bindTexture(t,null)
if(!p.d){p.d=!0
r=p.y
if(r!=null)r.hR()}++s.e},
$S:16}
T.i9.prototype={
eN:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.c
if(typeof f!=="number")return f.cz()
u=C.d.a0(f,2)
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
V.eZ.prototype={
aK:function(a,b){return!0},
i:function(a){return"all"},
$ibf:1}
V.bf.prototype={}
V.du.prototype={
aK:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)if(u[s].aK(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.x)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sap:function(a){this.a=H.o(a,"$id",[V.bf],"$ad")},
$ibf:1}
V.bh.prototype={
aK:function(a,b){return!this.e9(0,b)},
i:function(a){return"!["+this.cu(0)+"]"}}
V.hG.prototype={
ec:function(a){var u,t
if(a.a.length<=0)throw H.c(P.B("May not create a SetMatcher with zero characters."))
u=new H.Z([P.l,P.aa])
for(t=new H.ds(a,a.gl(a),[H.aD(a,"u",0)]);t.B();)u.k(0,t.d,!0)
this.sh6(u)},
aK:function(a,b){return this.a.be(0,b)},
i:function(a){var u=this.a
return P.cD(u.gal(u),0,null)},
sh6:function(a){this.a=H.o(a,"$iy",[P.l,P.aa],"$ay")},
$ibf:1}
V.cB.prototype={
t:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cG(this.a.N(0,b))
r.sap(H.e([],[V.bf]))
r.c=!1
C.a.h(this.c,r)
return r},
hW:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
if(r.aK(0,a))return r}return},
i:function(a){return this.b},
shq:function(a){this.c=H.o(a,"$id",[V.cG],"$ad")}}
V.dQ.prototype={
i:function(a){var u=H.mx(this.b,"\n","\\n"),t=H.mx(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cF.prototype={
i:function(a){return this.b},
sh0:function(a){var u=P.h
this.c=H.o(a,"$iy",[u,u],"$ay")}}
V.ic.prototype={
N:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cB(this,b)
u.shq(H.e([],[V.cG]))
u.d=null
this.a.k(0,b,u)}return u},
b7:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cF(a)
u=P.h
t.sh0(new H.Z([u,u]))
this.b.k(0,a,t)}return t},
iG:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.e([],[V.dQ]),k=this.c,j=[P.l],i=H.e([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.F(a,s)
q=k.hW(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.cD(i,0,m)
throw H.c(P.B("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.e([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.cD(i,0,m)
o=k.d
n=o.c.j(0,p)
t=new V.dQ(n==null?o.b:n,p,s)}++s}}},
shg:function(a){this.a=H.o(a,"$iy",[P.h,V.cB],"$ay")},
shj:function(a){this.b=H.o(a,"$iy",[P.h,V.cF],"$ay")}}
V.cG.prototype={
i:function(a){return this.b.b+": "+this.cu(0)}}
X.db.prototype={$ics:1}
X.fE.prototype={
gA:function(){var u=this.x
return u==null?this.x=D.V():u}}
X.dD.prototype={
gA:function(){var u=this.f
return u==null?this.f=D.V():u},
aE:function(a){var u
H.f(a,"$iA")
u=this.f
if(u!=null)u.G(a)},
eo:function(){return this.aE(null)},
sb2:function(a){var u,t,s=this
if(!J.K(s.b,a)){u=s.b
if(u!=null)u.gA().K(0,s.gcD())
t=s.b
s.b=a
if(a!=null)a.gA().h(0,s.gcD())
u=new D.M("mover",t,s.b,[U.a9])
u.b=!0
s.aE(u)}},
$ics:1,
$idb:1}
X.dN.prototype={}
V.ku.prototype={
$1:function(a){var u
H.f(a,"$ib4")
u=C.e.dX(this.a.ghZ(),2)
if(u!=="0.00")P.lg(u+" fps")},
$S:50}
V.hw.prototype={
bR:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
H.n(c,{func:1,ret:-1})
if(m.c==null)return
u=m.a
t=P.iA().gb5().j(0,H.j(u))
if(t==null)if(d){c.$0()
m.aU(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.cd(m.c).h(0,q)
o=W.n6("radio")
o.checked=s
o.name=u
u=W.m
W.a5(o,"change",H.n(new V.hx(m,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.cd(m.c).h(0,r.createElement("br"))},
Y:function(a,b,c){return this.bR(a,b,c,!1)},
aU:function(a){var u,t,s=P.iA(),r=P.h,q=P.lz(s.gb5(),r,r)
q.k(0,this.a,a)
u=s.cj(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.eB([],[]).bo(""),"",t)}}
V.hx.prototype={
$1:function(a){var u=this
if(H.E(u.b.checked)){u.c.$0()
u.a.aU(u.d)}},
$S:16}
V.hK.prototype={
ee:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.a5(q,"scroll",H.n(new V.hM(o),{func:1,ret:-1,args:[r]}),!1,r)},
dd:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.o(a,"$id",[P.h],"$ad")
this.ha()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.iG(C.a.i3(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.x)(s),++q){p=s[q]
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
if(H.p7(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.b(m,1)
l.href=H.U(m[1])
l.textContent=H.U(m[0])
t.appendChild(l)}else{k=P.jG(C.O,n,C.h,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.j(k)
l.textContent=n
t.appendChild(l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
t.appendChild(o)
break}}this.a.appendChild(t)},
ht:function(a){var u,t,s,r,q,p,o,n="auto"
H.o(a,"$id",[P.h],"$ad")
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
s=H.f(r.insertCell(-1),"$ibi").style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
for(q=0;q<3;++q){p=u.createElement("div")
p.id=a[q]
s=p.style
s.textAlign="left"
s=p.style
s.verticalAlign="top"
o=H.f(r.insertCell(-1),"$ibi")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
o.appendChild(p)}},
ha:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new V.ic()
t=P.h
u.shg(new H.Z([t,V.cB]))
u.shj(new H.Z([t,V.cF]))
u.c=null
u.c=u.N(0,q)
t=u.N(0,q).t(0,p)
s=V.ai(new H.a3("*"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,p).t(0,p)
s=new V.bh()
r=[V.bf]
s.sap(H.e([],r))
C.a.h(t.a,s)
t=V.ai(new H.a3("*"))
C.a.h(s.a,t)
t=u.N(0,p).t(0,"BoldEnd")
s=V.ai(new H.a3("*"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,q).t(0,o)
s=V.ai(new H.a3("_"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,o).t(0,o)
s=new V.bh()
s.sap(H.e([],r))
C.a.h(t.a,s)
t=V.ai(new H.a3("_"))
C.a.h(s.a,t)
t=u.N(0,o).t(0,n)
s=V.ai(new H.a3("_"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,q).t(0,m)
s=V.ai(new H.a3("`"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,m).t(0,m)
s=new V.bh()
s.sap(H.e([],r))
C.a.h(t.a,s)
t=V.ai(new H.a3("`"))
C.a.h(s.a,t)
t=u.N(0,m).t(0,"CodeEnd")
s=V.ai(new H.a3("`"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,q).t(0,l)
s=V.ai(new H.a3("["))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,l).t(0,k)
s=V.ai(new H.a3("|"))
C.a.h(t.a,s)
s=u.N(0,l).t(0,j)
t=V.ai(new H.a3("]"))
C.a.h(s.a,t)
s.c=!0
s=u.N(0,l).t(0,l)
t=new V.bh()
t.sap(H.e([],r))
C.a.h(s.a,t)
s=V.ai(new H.a3("|]"))
C.a.h(t.a,s)
s=u.N(0,k).t(0,j)
t=V.ai(new H.a3("]"))
C.a.h(s.a,t)
s.c=!0
s=u.N(0,k).t(0,k)
t=new V.bh()
t.sap(H.e([],r))
C.a.h(s.a,t)
s=V.ai(new H.a3("|]"))
C.a.h(t.a,s)
C.a.h(u.N(0,q).t(0,i).a,new V.eZ())
s=u.N(0,i).t(0,i)
t=new V.bh()
t.sap(H.e([],r))
C.a.h(s.a,t)
s=V.ai(new H.a3("*_`["))
C.a.h(t.a,s)
s=u.N(0,"BoldEnd")
s.d=s.a.b7(p)
s=u.N(0,n)
s.d=s.a.b7(o)
s=u.N(0,"CodeEnd")
s.d=s.a.b7(m)
s=u.N(0,j)
s.d=s.a.b7("Link")
s=u.N(0,i)
s.d=s.a.b7(i)
this.b=u}}
V.hM.prototype={
$1:function(a){P.lQ(C.o,new V.hL(this.a))},
$S:16}
V.hL.prototype={
$0:function(){var u=C.e.ag(document.documentElement.scrollTop),t=this.a.style,s=H.j(-0.01*u)+"px"
t.top=s},
$S:0}
V.i3.prototype={
Y:function(a,b,c){var u,t,s,r,q=this,p=W.lv(null)
p.src=b
p.height=p.width=64
u=p.style
u.border="solid 2px white"
u=J.cd(q.c)
t=u.gl(u)
u=W.a1
W.a5(p,"click",H.n(new V.i5(q,p,b,t),{func:1,ret:-1,args:[u]}),!1,u)
J.cd(q.c).h(0,p)
J.cd(q.c).h(0,document.createElement("br"))
s=P.iA().gb5().j(0,H.j(q.a))
if(s==null){q.aU(t)
r=c}else r=P.d0(s,null,null)===t
if(r)p.click()},
h:function(a,b){return this.Y(a,b,!1)},
aU:function(a){var u,t,s=P.iA(),r=P.h,q=P.lz(s.gb5(),r,r)
q.k(0,this.a,""+a)
u=s.cj(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.eB([],[]).bo(""),"",t)}}
V.i5.prototype={
$1:function(a){var u,t,s=this
H.f(a,"$ia1")
u=s.a
t=J.cd(u.c)
t.D(t,new V.i4())
t=s.b.style
t.border="solid 2px black"
u.d.$1(s.c)
u.aU(s.d)},
$S:51}
V.i4.prototype={
$1:function(a){var u
H.f(a,"$iT")
if(!!J.P(a).$ibO){u=a.style
u.border="solid 2px white"}},
$S:52}
K.ka.prototype={
$0:function(){var u,t,s,r=this.a
if(r.a!=null&&r.b.length!==0){u=this.b
t=u.f.i5(r.b)
s=t.y
if(s==null)s=t.y=D.V()
s.h(0,new K.k9(r,u,t,this.c))}},
$S:0}
K.k9.prototype={
$1:function(a){var u,t,s,r,q,p,o,n,m=this
H.f(a,"$iA")
u=m.c
t=m.b.f.a
s=u.r
r=u.x
if(typeof r!=="number")return r.w()
q=r-r-0
t.bindFramebuffer(36160,t.createFramebuffer())
t.readBuffer(36064)
t.framebufferTexture2D(36160,36064,3553,u.b,0)
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.p(r)
p=new Uint8Array(s*r*4)
t.readPixels(0,q,s,r,6408,5121,p)
t.bindFramebuffer(36160,null)
o=new T.i9(p,s,r)
o.eN()
u=m.a
t=u.a
n=F.kQ()
n.bi(t)
n.a4()
n.hw(o,u.c)
u=$.aT()
u.toString
n.iI(new Z.bj($.li().a&~u.a))
n.iH(!1)
n.a4()
m.d.scs(0,n)},
$S:6}
K.kb.prototype={
$1:function(a){this.a.b=a
this.b.$0()},
$S:20}
K.kc.prototype={
$1:function(a){this.a.a=a
this.b.$0()},
$S:53}
K.kk.prototype={
$0:function(){this.a.$1(F.mk(50,null,50))},
$S:0}
K.kl.prototype={
$0:function(){this.a.$1(F.oL(!1,!1,80,80))},
$S:0}
K.km.prototype={
$0:function(){this.a.$1(F.oZ(80,80))},
$S:0}
K.kn.prototype={
$0:function(){this.a.$1(F.p6(50,50))},
$S:0}
K.ko.prototype={
$0:function(){this.a.$1(F.pa(50,50))},
$S:0}
K.kp.prototype={
$0:function(){this.a.$1(F.lc(50,50))},
$S:0}
K.kq.prototype={
$0:function(){this.a.$1(F.lc(100,100))},
$S:0}
K.kr.prototype={
$0:function(){this.a.$1(F.lc(150,150))},
$S:0}
K.kd.prototype={
$1:function(a){this.a.c=a
this.b.$0()},
$S:54}
K.ke.prototype={
$0:function(){this.a.$1(0.1)},
$S:0}
K.kf.prototype={
$0:function(){this.a.$1(0.2)},
$S:0}
K.kg.prototype={
$0:function(){this.a.$1(0.4)},
$S:0}
K.kh.prototype={
$0:function(){this.a.$1(0.6)},
$S:0}
K.ki.prototype={
$0:function(){this.a.$1(0.8)},
$S:0}
K.kj.prototype={
$0:function(){this.a.$1(1)},
$S:0};(function aliases(){var u=J.a.prototype
u.e7=u.i
u=J.dp.prototype
u.e8=u.i
u=O.dw.prototype
u.cv=u.aq
u=O.b1.prototype
u.cw=u.aq
u=V.du.prototype
u.e9=u.aK
u.cu=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"oE","nP",12)
u(P,"oF","nQ",12)
u(P,"oG","nR",12)
t(P,"mi","oC",3)
var n
s(n=E.al.prototype,"gdK",0,0,null,["$1","$0"],["dL","ih"],1,0)
s(n,"gdM",0,0,null,["$1","$0"],["dN","ii"],1,0)
s(n,"gdI",0,0,null,["$1","$0"],["dJ","ig"],1,0)
s(n,"gdG",0,0,null,["$1","$0"],["dH","ib"],1,0)
r(n,"gi9","ia",9)
r(n,"gic","ie",9)
s(n=E.dP.prototype,"gcA",0,0,null,["$1","$0"],["cC","cB"],1,0)
q(n,"gix","dT",3)
p(n=X.dW.prototype,"gfl","fm",15)
p(n,"gf7","f8",15)
p(n,"gff","fg",5)
p(n,"gfp","fq",24)
p(n,"gfn","fo",24)
p(n,"gfu","fv",5)
p(n,"gfA","fB",5)
p(n,"gfj","fk",5)
p(n,"gfw","fz",5)
p(n,"gfh","fi",5)
p(n,"gfC","fD",33)
p(n,"gfE","fF",15)
p(n,"gfR","fS",13)
p(n,"gfN","fO",13)
p(n,"gfP","fQ",13)
s(D.bq.prototype,"geh",0,0,null,["$1","$0"],["an","ei"],1,0)
s(n=D.dr.prototype,"gcZ",0,0,null,["$1","$0"],["d_","fs"],1,0)
p(n,"gfH","fI",35)
r(n,"gf1","f2",27)
r(n,"gfL","fM",27)
o(V.R.prototype,"gl","c9",21)
o(V.J.prototype,"gl","c9",21)
s(n=U.cm.prototype,"gaB",0,0,null,["$1","$0"],["O","a3"],1,0)
r(n,"gf_","f0",19)
r(n,"gfJ","fK",19)
s(n=U.dX.prototype,"gaB",0,0,null,["$1","$0"],["O","a3"],1,0)
p(n,"gbA","bB",2)
p(n,"gbC","bD",2)
p(n,"gbE","bF",2)
s(n=U.dY.prototype,"gaB",0,0,null,["$1","$0"],["O","a3"],1,0)
p(n,"gbA","bB",2)
p(n,"gbC","bD",2)
p(n,"gbE","bF",2)
p(n,"geU","eV",2)
p(n,"geW","eX",2)
p(n,"gho","hp",2)
p(n,"ghm","hn",2)
p(n,"ghk","hl",2)
p(U.dZ.prototype,"geY","eZ",2)
s(n=M.dh.prototype,"gaC",0,0,null,["$1","$0"],["aD","ej"],1,0)
r(n,"gfb","fc",9)
r(n,"gfd","fe",9)
s(n=O.dv.prototype,"gf9",0,0,null,["$1","$0"],["a8","fa"],1,0)
s(n,"gh3",0,0,null,["$1","$0"],["d3","h4"],1,0)
r(n,"gf3","f4",18)
r(n,"gf5","f6",18)
s(X.dD.prototype,"gcD",0,0,null,["$1","$0"],["aE","eo"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.O,null)
s(P.O,[H.kM,J.a,J.an,P.eg,P.k,H.ds,P.aY,H.bM,H.cJ,H.ff,H.ii,P.bs,H.ch,H.ex,P.af,H.fN,H.fP,H.fI,P.eE,P.b8,P.aA,P.e0,P.hV,P.cC,P.hW,P.b4,P.aj,P.jJ,P.jt,P.cN,P.ef,P.u,P.jB,P.fW,P.bJ,P.jI,P.jH,P.aa,P.ar,P.a7,P.br,P.hr,P.dM,P.e8,P.fD,P.d,P.y,P.G,P.ao,P.h,P.a4,P.c2,P.iy,P.ju,W.fi,W.D,W.dk,P.jw,P.eJ,P.jo,P.L,O.a_,O.cp,E.f9,E.al,E.hy,E.dP,Z.e_,Z.iX,Z.d9,Z.bt,Z.bj,D.fc,D.bL,D.A,X.da,X.dq,X.fK,X.fT,X.as,X.hh,X.id,X.dW,D.bq,D.ac,D.dE,D.dL,V.a6,V.bo,V.fu,V.dx,V.am,V.ag,V.a2,V.bR,V.dI,V.R,V.J,U.dX,U.dY,U.dZ,M.dh,A.d6,A.f2,A.ak,A.aG,A.aK,A.aO,A.h1,A.bX,A.bY,A.c0,A.dS,A.is,F.a8,F.fx,F.be,F.fM,F.bx,F.bV,F.hH,F.hI,F.hJ,F.ay,F.iL,F.iM,F.iP,F.iR,F.iS,F.iT,O.bW,O.dw,O.h2,T.i7,T.i9,V.eZ,V.bf,V.du,V.hG,V.cB,V.dQ,V.cF,V.ic,X.db,X.dN,X.dD,V.hw,V.hK,V.i3])
s(J.a,[J.fH,J.dn,J.dp,J.aZ,J.co,J.bu,H.ct,H.bw,W.i,W.eY,W.bH,W.cg,W.aW,W.aX,W.Q,W.e2,W.fm,W.fn,W.e4,W.dg,W.e6,W.fp,W.m,W.e9,W.aH,W.fF,W.eb,W.bd,W.fS,W.hb,W.eh,W.ei,W.aI,W.ej,W.em,W.aJ,W.eq,W.es,W.aM,W.et,W.aN,W.ey,W.av,W.eC,W.ib,W.aQ,W.eF,W.ig,W.iE,W.eL,W.eN,W.eP,W.eR,W.eT,P.b0,P.ed,P.b3,P.eo,P.hv,P.ez,P.b5,P.eH,P.f3,P.e1,P.d7,P.dG,P.bU,P.dJ,P.dO,P.dT,P.ev])
s(J.dp,[J.hs,J.c1,J.bv])
t(J.kL,J.aZ)
s(J.co,[J.dm,J.dl])
t(P.fR,P.eg)
s(P.fR,[H.dU,W.j5,W.j4,P.fz])
t(H.a3,H.dU)
s(P.k,[H.fs,H.fX,H.iY])
s(P.aY,[H.fY,H.iZ])
t(H.fg,H.ff)
s(P.bs,[H.ho,H.fJ,H.iw,H.ik,H.fb,H.hE,P.f1,P.dC,P.aU,P.ix,P.iu,P.hR,P.fe,P.fl])
s(H.ch,[H.kz,H.i_,H.k4,H.k5,H.k6,P.j1,P.j0,P.j2,P.j3,P.jA,P.jz,P.jb,P.jf,P.jc,P.jd,P.je,P.ji,P.jj,P.jh,P.jg,P.hX,P.hY,P.jT,P.jr,P.jq,P.js,P.fQ,P.fV,P.fq,P.fr,P.iD,P.iz,P.iB,P.iC,P.jC,P.jD,P.jF,P.jE,P.jN,P.jM,P.jO,P.jP,W.hd,W.hf,W.hD,W.hU,W.ja,P.jx,P.jV,P.fA,P.fB,P.f5,E.hz,E.hA,E.hB,E.ia,D.fv,D.fw,F.jK,F.jW,F.jY,F.k8,F.kv,F.kw,F.ky,F.jX,F.k1,F.k2,F.iV,F.iU,F.iN,F.iO,O.h5,O.h6,O.h7,O.h8,O.h9,O.ha,T.i8,V.ku,V.hx,V.hM,V.hL,V.i5,V.i4,K.ka,K.k9,K.kb,K.kc,K.kk,K.kl,K.km,K.kn,K.ko,K.kp,K.kq,K.kr,K.kd,K.ke,K.kf,K.kg,K.kh,K.ki,K.kj])
s(H.i_,[H.hS,H.ce])
t(H.j_,P.f1)
t(P.fU,P.af)
t(H.Z,P.fU)
t(H.fO,H.fs)
t(H.dz,H.bw)
s(H.dz,[H.cO,H.cQ])
t(H.cP,H.cO)
t(H.cu,H.cP)
t(H.cR,H.cQ)
t(H.dA,H.cR)
s(H.dA,[H.hi,H.hj,H.hk,H.hl,H.hm,H.dB,H.cv])
t(P.jp,P.jJ)
t(P.jn,P.jt)
t(P.eK,P.fW)
t(P.dV,P.eK)
s(P.bJ,[P.f7,P.ft])
t(P.bK,P.hW)
s(P.bK,[P.f8,P.iH,P.iG])
t(P.iF,P.ft)
s(P.a7,[P.z,P.l])
s(P.aU,[P.bT,P.fG])
t(P.j7,P.c2)
s(W.i,[W.H,W.fy,W.cq,W.aL,W.cS,W.aP,W.aw,W.cU,W.iW,W.cL,P.f6,P.bG])
s(W.H,[W.T,W.bn])
s(W.T,[W.r,P.q])
s(W.r,[W.f_,W.f0,W.bI,W.de,W.fC,W.bO,W.cn,W.hF,W.bi])
s(W.aW,[W.ci,W.fj,W.fk])
t(W.fh,W.aX)
t(W.cj,W.e2)
t(W.e5,W.e4)
t(W.df,W.e5)
t(W.e7,W.e6)
t(W.fo,W.e7)
t(W.au,W.bH)
t(W.ea,W.e9)
t(W.ck,W.ea)
t(W.ec,W.eb)
t(W.bN,W.ec)
t(W.bA,W.m)
s(W.bA,[W.b_,W.a1,W.aR])
t(W.hc,W.eh)
t(W.he,W.ei)
t(W.ek,W.ej)
t(W.hg,W.ek)
t(W.en,W.em)
t(W.cw,W.en)
t(W.er,W.eq)
t(W.ht,W.er)
t(W.hC,W.es)
t(W.cT,W.cS)
t(W.hO,W.cT)
t(W.eu,W.et)
t(W.hP,W.eu)
t(W.hT,W.ey)
t(W.eD,W.eC)
t(W.i0,W.eD)
t(W.cV,W.cU)
t(W.i1,W.cV)
t(W.eG,W.eF)
t(W.ie,W.eG)
t(W.b7,W.a1)
t(W.eM,W.eL)
t(W.j6,W.eM)
t(W.e3,W.dg)
t(W.eO,W.eN)
t(W.jk,W.eO)
t(W.eQ,W.eP)
t(W.el,W.eQ)
t(W.eS,W.eR)
t(W.jv,W.eS)
t(W.eU,W.eT)
t(W.jy,W.eU)
t(W.j8,P.hV)
t(W.kY,W.j8)
t(W.j9,P.cC)
t(P.eB,P.jw)
t(P.ah,P.jo)
t(P.ee,P.ed)
t(P.fL,P.ee)
t(P.ep,P.eo)
t(P.hp,P.ep)
t(P.eA,P.ez)
t(P.hZ,P.eA)
t(P.eI,P.eH)
t(P.ih,P.eI)
t(P.f4,P.e1)
t(P.hq,P.bG)
t(P.ew,P.ev)
t(P.hQ,P.ew)
s(E.f9,[Z.d8,A.cA,T.cE])
s(D.A,[D.bP,D.bQ,D.M,X.hu])
s(X.hu,[X.dt,X.bg,X.cr,X.dR])
s(O.a_,[D.dr,U.cm])
s(D.fc,[U.fd,U.a9])
t(U.dc,U.a9)
t(A.fZ,A.cA)
s(A.dS,[A.ax,A.ip,A.iq,A.ir,A.im,A.ae,A.io,A.X,A.cH,A.it,A.cI,A.at,A.bZ,A.c_])
t(F.hN,F.fx)
t(F.il,F.fM)
t(F.iQ,F.iR)
t(F.hn,F.iS)
t(O.dv,O.bW)
s(O.dw,[O.h_,O.h0,O.b1])
s(O.b1,[O.h3,O.h4])
t(T.i2,T.cE)
t(T.i6,T.i2)
s(V.du,[V.bh,V.cG])
t(X.fE,X.dN)
u(H.dU,H.cJ)
u(H.cO,P.u)
u(H.cP,H.bM)
u(H.cQ,P.u)
u(H.cR,H.bM)
u(P.eg,P.u)
u(P.eK,P.jB)
u(W.e2,W.fi)
u(W.e4,P.u)
u(W.e5,W.D)
u(W.e6,P.u)
u(W.e7,W.D)
u(W.e9,P.u)
u(W.ea,W.D)
u(W.eb,P.u)
u(W.ec,W.D)
u(W.eh,P.af)
u(W.ei,P.af)
u(W.ej,P.u)
u(W.ek,W.D)
u(W.em,P.u)
u(W.en,W.D)
u(W.eq,P.u)
u(W.er,W.D)
u(W.es,P.af)
u(W.cS,P.u)
u(W.cT,W.D)
u(W.et,P.u)
u(W.eu,W.D)
u(W.ey,P.af)
u(W.eC,P.u)
u(W.eD,W.D)
u(W.cU,P.u)
u(W.cV,W.D)
u(W.eF,P.u)
u(W.eG,W.D)
u(W.eL,P.u)
u(W.eM,W.D)
u(W.eN,P.u)
u(W.eO,W.D)
u(W.eP,P.u)
u(W.eQ,W.D)
u(W.eR,P.u)
u(W.eS,W.D)
u(W.eT,P.u)
u(W.eU,W.D)
u(P.ed,P.u)
u(P.ee,W.D)
u(P.eo,P.u)
u(P.ep,W.D)
u(P.ez,P.u)
u(P.eA,W.D)
u(P.eH,P.u)
u(P.eI,W.D)
u(P.e1,P.af)
u(P.ev,P.u)
u(P.ew,W.D)})()
var v={mangledGlobalNames:{l:"int",z:"double",a7:"num",h:"String",aa:"bool",G:"Null",d:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.G},{func:1,ret:-1,opt:[D.A]},{func:1,ret:-1,args:[D.A]},{func:1,ret:-1},{func:1,ret:P.G,args:[F.ay,P.z,P.z]},{func:1,ret:-1,args:[W.a1]},{func:1,ret:P.G,args:[D.A]},{func:1,ret:P.G,args:[,,]},{func:1,ret:-1,args:[P.h,,]},{func:1,ret:-1,args:[P.l,[P.k,E.al]]},{func:1,ret:P.G,args:[F.a8]},{func:1,ret:P.z,args:[P.z,P.z]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.aR]},{func:1,ret:-1,args:[P.l,P.l]},{func:1,ret:-1,args:[W.m]},{func:1,ret:P.G,args:[W.m]},{func:1,ret:P.h,args:[P.l]},{func:1,ret:-1,args:[P.l,[P.k,V.am]]},{func:1,ret:-1,args:[P.l,[P.k,U.a9]]},{func:1,ret:P.G,args:[P.h]},{func:1,ret:P.z},{func:1,ret:-1,args:[P.h,P.h]},{func:1,args:[,]},{func:1,ret:-1,args:[W.b_]},{func:1,ret:P.G,args:[{func:1,ret:-1,args:[D.A]}]},{func:1,ret:P.G,args:[,]},{func:1,ret:-1,args:[P.l,[P.k,D.ac]]},{func:1,ret:P.G,args:[P.a7]},{func:1,ret:W.T,args:[W.H]},{func:1,ret:P.aa,args:[W.H]},{func:1,ret:P.G,args:[{func:1,ret:-1}]},{func:1,args:[W.m]},{func:1,ret:-1,args:[W.b7]},{func:1,ret:P.L,args:[,,]},{func:1,ret:P.aa,args:[[P.k,D.ac]]},{func:1,ret:P.L,args:[P.l]},{func:1,ret:P.h,args:[P.h]},{func:1,ret:P.l,args:[P.l,P.l]},{func:1,args:[,P.h]},{func:1,args:[P.h]},{func:1,ret:-1,args:[P.h],opt:[,]},{func:1,ret:V.a2,args:[P.z]},{func:1,ret:-1,args:[P.h,P.l]},{func:1,ret:[P.y,P.h,P.h],args:[[P.y,P.h,P.h],P.h]},{func:1,ret:[P.aA,,],args:[,]},{func:1,ret:P.l,args:[A.aG,A.aG]},{func:1,ret:P.l,args:[A.aK,A.aK]},{func:1,ret:P.l,args:[A.aO,A.aO]},{func:1,ret:P.G,args:[,],opt:[P.ao]},{func:1,ret:P.G,args:[P.b4]},{func:1,ret:P.G,args:[W.a1]},{func:1,ret:P.G,args:[W.T]},{func:1,ret:P.G,args:[F.bV]},{func:1,ret:P.G,args:[P.z]},{func:1,ret:P.G,args:[P.h,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.j=W.bI.prototype
C.J=J.a.prototype
C.a=J.aZ.prototype
C.K=J.dl.prototype
C.d=J.dm.prototype
C.k=J.dn.prototype
C.e=J.co.prototype
C.b=J.bu.prototype
C.L=J.bv.prototype
C.R=W.cw.prototype
C.w=J.hs.prototype
C.c=P.bU.prototype
C.p=J.c1.prototype
C.x=W.b7.prototype
C.y=W.cL.prototype
C.S=new P.f8()
C.z=new P.f7()
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

C.G=new P.hr()
C.h=new P.iF()
C.H=new P.iH()
C.f=new P.jp()
C.o=new P.br(0)
C.I=new P.br(5e6)
C.t=H.e(u([127,2047,65535,1114111]),[P.l])
C.l=H.e(u([0,0,32776,33792,1,10240,0,0]),[P.l])
C.m=H.e(u([0,0,65490,45055,65535,34815,65534,18431]),[P.l])
C.n=H.e(u([0,0,26624,1023,65534,2047,65534,2047]),[P.l])
C.N=H.e(u([0,0,32722,12287,65534,34815,65534,18431]),[P.l])
C.O=H.e(u([0,0,65498,45055,65535,34815,65534,18431]),[P.l])
C.i=H.e(u([0,0,24576,1023,65534,34815,65534,18431]),[P.l])
C.u=H.e(u([0,0,32754,11263,65534,34815,65534,18431]),[P.l])
C.P=H.e(u([0,0,32722,12287,65535,34815,65534,18431]),[P.l])
C.v=H.e(u([0,0,65490,12287,65535,34815,65534,18431]),[P.l])
C.M=H.e(u([]),[P.h])
C.Q=new H.fg(0,{},C.M,[P.h,P.h])})();(function staticFields(){$.aV=0
$.cf=null
$.lo=null
$.l3=!1
$.mo=null
$.mg=null
$.mv=null
$.jZ=null
$.k7=null
$.ld=null
$.c5=null
$.cY=null
$.cZ=null
$.l4=!1
$.Y=C.f
$.ap=[]
$.lB=null
$.lF=null
$.cx=null
$.lM=null
$.lW=null
$.lZ=null
$.lY=null
$.iI=null
$.iJ=null
$.iK=null
$.lX=null
$.lE=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"ph","mA",function(){return H.mn("_$dart_dartClosure")})
u($,"pi","lh",function(){return H.mn("_$dart_js")})
u($,"pn","mB",function(){return H.b6(H.ij({
toString:function(){return"$receiver$"}}))})
u($,"po","mC",function(){return H.b6(H.ij({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"pp","mD",function(){return H.b6(H.ij(null))})
u($,"pq","mE",function(){return H.b6(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pt","mH",function(){return H.b6(H.ij(void 0))})
u($,"pu","mI",function(){return H.b6(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"ps","mG",function(){return H.b6(H.lS(null))})
u($,"pr","mF",function(){return H.b6(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"pw","mK",function(){return H.b6(H.lS(void 0))})
u($,"pv","mJ",function(){return H.b6(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"pM","lk",function(){return P.nO()})
u($,"py","mL",function(){return P.nK()})
u($,"pN","mN",function(){return H.ni(H.c4(H.e([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.l])))})
u($,"pO","mO",function(){return P.nw("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"pP","mP",function(){return P.ob()})
u($,"pF","mM",function(){return Z.az(0)})
u($,"pz","li",function(){return Z.az(511)})
u($,"pH","bc",function(){return Z.az(1)})
u($,"pG","aT",function(){return Z.az(2)})
u($,"pB","bb",function(){return Z.az(4)})
u($,"pI","bl",function(){return Z.az(8)})
u($,"pJ","bm",function(){return Z.az(16)})
u($,"pC","d1",function(){return Z.az(32)})
u($,"pD","d2",function(){return Z.az(64)})
u($,"pE","lj",function(){return Z.az(96)})
u($,"pK","bE",function(){return Z.az(128)})
u($,"pA","ba",function(){return Z.az(256)})
u($,"pg","mz",function(){return new V.fu(1e-9)})
u($,"pf","N",function(){return $.mz()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.ct,DataView:H.bw,ArrayBufferView:H.bw,Float32Array:H.cu,Float64Array:H.cu,Int16Array:H.hi,Int32Array:H.hj,Int8Array:H.hk,Uint16Array:H.hl,Uint32Array:H.hm,Uint8ClampedArray:H.dB,CanvasPixelArray:H.dB,Uint8Array:H.cv,HTMLAudioElement:W.r,HTMLBRElement:W.r,HTMLBaseElement:W.r,HTMLBodyElement:W.r,HTMLButtonElement:W.r,HTMLContentElement:W.r,HTMLDListElement:W.r,HTMLDataElement:W.r,HTMLDataListElement:W.r,HTMLDetailsElement:W.r,HTMLDialogElement:W.r,HTMLEmbedElement:W.r,HTMLFieldSetElement:W.r,HTMLHRElement:W.r,HTMLHeadElement:W.r,HTMLHeadingElement:W.r,HTMLHtmlElement:W.r,HTMLIFrameElement:W.r,HTMLLIElement:W.r,HTMLLabelElement:W.r,HTMLLegendElement:W.r,HTMLLinkElement:W.r,HTMLMapElement:W.r,HTMLMediaElement:W.r,HTMLMenuElement:W.r,HTMLMetaElement:W.r,HTMLMeterElement:W.r,HTMLModElement:W.r,HTMLOListElement:W.r,HTMLObjectElement:W.r,HTMLOptGroupElement:W.r,HTMLOptionElement:W.r,HTMLOutputElement:W.r,HTMLParagraphElement:W.r,HTMLParamElement:W.r,HTMLPictureElement:W.r,HTMLPreElement:W.r,HTMLProgressElement:W.r,HTMLQuoteElement:W.r,HTMLScriptElement:W.r,HTMLShadowElement:W.r,HTMLSlotElement:W.r,HTMLSourceElement:W.r,HTMLSpanElement:W.r,HTMLStyleElement:W.r,HTMLTableCaptionElement:W.r,HTMLTableColElement:W.r,HTMLTableElement:W.r,HTMLTableRowElement:W.r,HTMLTableSectionElement:W.r,HTMLTemplateElement:W.r,HTMLTextAreaElement:W.r,HTMLTimeElement:W.r,HTMLTitleElement:W.r,HTMLTrackElement:W.r,HTMLUListElement:W.r,HTMLUnknownElement:W.r,HTMLVideoElement:W.r,HTMLDirectoryElement:W.r,HTMLFontElement:W.r,HTMLFrameElement:W.r,HTMLFrameSetElement:W.r,HTMLMarqueeElement:W.r,HTMLElement:W.r,AccessibleNodeList:W.eY,HTMLAnchorElement:W.f_,HTMLAreaElement:W.f0,Blob:W.bH,HTMLCanvasElement:W.bI,CanvasRenderingContext2D:W.cg,CDATASection:W.bn,CharacterData:W.bn,Comment:W.bn,ProcessingInstruction:W.bn,Text:W.bn,CSSNumericValue:W.ci,CSSUnitValue:W.ci,CSSPerspective:W.fh,CSSCharsetRule:W.Q,CSSConditionRule:W.Q,CSSFontFaceRule:W.Q,CSSGroupingRule:W.Q,CSSImportRule:W.Q,CSSKeyframeRule:W.Q,MozCSSKeyframeRule:W.Q,WebKitCSSKeyframeRule:W.Q,CSSKeyframesRule:W.Q,MozCSSKeyframesRule:W.Q,WebKitCSSKeyframesRule:W.Q,CSSMediaRule:W.Q,CSSNamespaceRule:W.Q,CSSPageRule:W.Q,CSSRule:W.Q,CSSStyleRule:W.Q,CSSSupportsRule:W.Q,CSSViewportRule:W.Q,CSSStyleDeclaration:W.cj,MSStyleCSSProperties:W.cj,CSS2Properties:W.cj,CSSImageValue:W.aW,CSSKeywordValue:W.aW,CSSPositionValue:W.aW,CSSResourceValue:W.aW,CSSURLImageValue:W.aW,CSSStyleValue:W.aW,CSSMatrixComponent:W.aX,CSSRotation:W.aX,CSSScale:W.aX,CSSSkew:W.aX,CSSTranslation:W.aX,CSSTransformComponent:W.aX,CSSTransformValue:W.fj,CSSUnparsedValue:W.fk,DataTransferItemList:W.fm,HTMLDivElement:W.de,DOMException:W.fn,ClientRectList:W.df,DOMRectList:W.df,DOMRectReadOnly:W.dg,DOMStringList:W.fo,DOMTokenList:W.fp,Element:W.T,AbortPaymentEvent:W.m,AnimationEvent:W.m,AnimationPlaybackEvent:W.m,ApplicationCacheErrorEvent:W.m,BackgroundFetchClickEvent:W.m,BackgroundFetchEvent:W.m,BackgroundFetchFailEvent:W.m,BackgroundFetchedEvent:W.m,BeforeInstallPromptEvent:W.m,BeforeUnloadEvent:W.m,BlobEvent:W.m,CanMakePaymentEvent:W.m,ClipboardEvent:W.m,CloseEvent:W.m,CustomEvent:W.m,DeviceMotionEvent:W.m,DeviceOrientationEvent:W.m,ErrorEvent:W.m,ExtendableEvent:W.m,ExtendableMessageEvent:W.m,FetchEvent:W.m,FontFaceSetLoadEvent:W.m,ForeignFetchEvent:W.m,GamepadEvent:W.m,HashChangeEvent:W.m,InstallEvent:W.m,MediaEncryptedEvent:W.m,MediaKeyMessageEvent:W.m,MediaQueryListEvent:W.m,MediaStreamEvent:W.m,MediaStreamTrackEvent:W.m,MessageEvent:W.m,MIDIConnectionEvent:W.m,MIDIMessageEvent:W.m,MutationEvent:W.m,NotificationEvent:W.m,PageTransitionEvent:W.m,PaymentRequestEvent:W.m,PaymentRequestUpdateEvent:W.m,PopStateEvent:W.m,PresentationConnectionAvailableEvent:W.m,PresentationConnectionCloseEvent:W.m,ProgressEvent:W.m,PromiseRejectionEvent:W.m,PushEvent:W.m,RTCDataChannelEvent:W.m,RTCDTMFToneChangeEvent:W.m,RTCPeerConnectionIceEvent:W.m,RTCTrackEvent:W.m,SecurityPolicyViolationEvent:W.m,SensorErrorEvent:W.m,SpeechRecognitionError:W.m,SpeechRecognitionEvent:W.m,SpeechSynthesisEvent:W.m,StorageEvent:W.m,SyncEvent:W.m,TrackEvent:W.m,TransitionEvent:W.m,WebKitTransitionEvent:W.m,VRDeviceEvent:W.m,VRDisplayEvent:W.m,VRSessionEvent:W.m,MojoInterfaceRequestEvent:W.m,ResourceProgressEvent:W.m,USBConnectionEvent:W.m,IDBVersionChangeEvent:W.m,AudioProcessingEvent:W.m,OfflineAudioCompletionEvent:W.m,WebGLContextEvent:W.m,Event:W.m,InputEvent:W.m,AbsoluteOrientationSensor:W.i,Accelerometer:W.i,AccessibleNode:W.i,AmbientLightSensor:W.i,Animation:W.i,ApplicationCache:W.i,DOMApplicationCache:W.i,OfflineResourceList:W.i,BackgroundFetchRegistration:W.i,BatteryManager:W.i,BroadcastChannel:W.i,CanvasCaptureMediaStreamTrack:W.i,DedicatedWorkerGlobalScope:W.i,EventSource:W.i,FileReader:W.i,FontFaceSet:W.i,Gyroscope:W.i,XMLHttpRequest:W.i,XMLHttpRequestEventTarget:W.i,XMLHttpRequestUpload:W.i,LinearAccelerationSensor:W.i,Magnetometer:W.i,MediaDevices:W.i,MediaKeySession:W.i,MediaQueryList:W.i,MediaRecorder:W.i,MediaSource:W.i,MediaStream:W.i,MediaStreamTrack:W.i,MIDIAccess:W.i,MIDIInput:W.i,MIDIOutput:W.i,MIDIPort:W.i,NetworkInformation:W.i,Notification:W.i,OffscreenCanvas:W.i,OrientationSensor:W.i,PaymentRequest:W.i,Performance:W.i,PermissionStatus:W.i,PresentationAvailability:W.i,PresentationConnection:W.i,PresentationConnectionList:W.i,PresentationRequest:W.i,RelativeOrientationSensor:W.i,RemotePlayback:W.i,RTCDataChannel:W.i,DataChannel:W.i,RTCDTMFSender:W.i,RTCPeerConnection:W.i,webkitRTCPeerConnection:W.i,mozRTCPeerConnection:W.i,ScreenOrientation:W.i,Sensor:W.i,ServiceWorker:W.i,ServiceWorkerContainer:W.i,ServiceWorkerGlobalScope:W.i,ServiceWorkerRegistration:W.i,SharedWorker:W.i,SharedWorkerGlobalScope:W.i,SpeechRecognition:W.i,SpeechSynthesis:W.i,SpeechSynthesisUtterance:W.i,VR:W.i,VRDevice:W.i,VRDisplay:W.i,VRSession:W.i,VisualViewport:W.i,WebSocket:W.i,Worker:W.i,WorkerGlobalScope:W.i,WorkerPerformance:W.i,BluetoothDevice:W.i,BluetoothRemoteGATTCharacteristic:W.i,Clipboard:W.i,MojoInterfaceInterceptor:W.i,USB:W.i,IDBDatabase:W.i,IDBOpenDBRequest:W.i,IDBVersionChangeRequest:W.i,IDBRequest:W.i,IDBTransaction:W.i,AnalyserNode:W.i,RealtimeAnalyserNode:W.i,AudioBufferSourceNode:W.i,AudioDestinationNode:W.i,AudioNode:W.i,AudioScheduledSourceNode:W.i,AudioWorkletNode:W.i,BiquadFilterNode:W.i,ChannelMergerNode:W.i,AudioChannelMerger:W.i,ChannelSplitterNode:W.i,AudioChannelSplitter:W.i,ConstantSourceNode:W.i,ConvolverNode:W.i,DelayNode:W.i,DynamicsCompressorNode:W.i,GainNode:W.i,AudioGainNode:W.i,IIRFilterNode:W.i,MediaElementAudioSourceNode:W.i,MediaStreamAudioDestinationNode:W.i,MediaStreamAudioSourceNode:W.i,OscillatorNode:W.i,Oscillator:W.i,PannerNode:W.i,AudioPannerNode:W.i,webkitAudioPannerNode:W.i,ScriptProcessorNode:W.i,JavaScriptAudioNode:W.i,StereoPannerNode:W.i,WaveShaperNode:W.i,EventTarget:W.i,File:W.au,FileList:W.ck,FileWriter:W.fy,HTMLFormElement:W.fC,Gamepad:W.aH,History:W.fF,HTMLCollection:W.bN,HTMLFormControlsCollection:W.bN,HTMLOptionsCollection:W.bN,ImageData:W.bd,HTMLImageElement:W.bO,HTMLInputElement:W.cn,KeyboardEvent:W.b_,Location:W.fS,MediaList:W.hb,MessagePort:W.cq,MIDIInputMap:W.hc,MIDIOutputMap:W.he,MimeType:W.aI,MimeTypeArray:W.hg,PointerEvent:W.a1,MouseEvent:W.a1,DragEvent:W.a1,Document:W.H,DocumentFragment:W.H,HTMLDocument:W.H,ShadowRoot:W.H,XMLDocument:W.H,Attr:W.H,DocumentType:W.H,Node:W.H,NodeList:W.cw,RadioNodeList:W.cw,Plugin:W.aJ,PluginArray:W.ht,RTCStatsReport:W.hC,HTMLSelectElement:W.hF,SourceBuffer:W.aL,SourceBufferList:W.hO,SpeechGrammar:W.aM,SpeechGrammarList:W.hP,SpeechRecognitionResult:W.aN,Storage:W.hT,CSSStyleSheet:W.av,StyleSheet:W.av,HTMLTableCellElement:W.bi,HTMLTableDataCellElement:W.bi,HTMLTableHeaderCellElement:W.bi,TextTrack:W.aP,TextTrackCue:W.aw,VTTCue:W.aw,TextTrackCueList:W.i0,TextTrackList:W.i1,TimeRanges:W.ib,Touch:W.aQ,TouchEvent:W.aR,TouchList:W.ie,TrackDefaultList:W.ig,CompositionEvent:W.bA,FocusEvent:W.bA,TextEvent:W.bA,UIEvent:W.bA,URL:W.iE,VideoTrackList:W.iW,WheelEvent:W.b7,Window:W.cL,DOMWindow:W.cL,CSSRuleList:W.j6,ClientRect:W.e3,DOMRect:W.e3,GamepadList:W.jk,NamedNodeMap:W.el,MozNamedAttrMap:W.el,SpeechRecognitionResultList:W.jv,StyleSheetList:W.jy,SVGLength:P.b0,SVGLengthList:P.fL,SVGNumber:P.b3,SVGNumberList:P.hp,SVGPointList:P.hv,SVGStringList:P.hZ,SVGAElement:P.q,SVGAnimateElement:P.q,SVGAnimateMotionElement:P.q,SVGAnimateTransformElement:P.q,SVGAnimationElement:P.q,SVGCircleElement:P.q,SVGClipPathElement:P.q,SVGDefsElement:P.q,SVGDescElement:P.q,SVGDiscardElement:P.q,SVGEllipseElement:P.q,SVGFEBlendElement:P.q,SVGFEColorMatrixElement:P.q,SVGFEComponentTransferElement:P.q,SVGFECompositeElement:P.q,SVGFEConvolveMatrixElement:P.q,SVGFEDiffuseLightingElement:P.q,SVGFEDisplacementMapElement:P.q,SVGFEDistantLightElement:P.q,SVGFEFloodElement:P.q,SVGFEFuncAElement:P.q,SVGFEFuncBElement:P.q,SVGFEFuncGElement:P.q,SVGFEFuncRElement:P.q,SVGFEGaussianBlurElement:P.q,SVGFEImageElement:P.q,SVGFEMergeElement:P.q,SVGFEMergeNodeElement:P.q,SVGFEMorphologyElement:P.q,SVGFEOffsetElement:P.q,SVGFEPointLightElement:P.q,SVGFESpecularLightingElement:P.q,SVGFESpotLightElement:P.q,SVGFETileElement:P.q,SVGFETurbulenceElement:P.q,SVGFilterElement:P.q,SVGForeignObjectElement:P.q,SVGGElement:P.q,SVGGeometryElement:P.q,SVGGraphicsElement:P.q,SVGImageElement:P.q,SVGLineElement:P.q,SVGLinearGradientElement:P.q,SVGMarkerElement:P.q,SVGMaskElement:P.q,SVGMetadataElement:P.q,SVGPathElement:P.q,SVGPatternElement:P.q,SVGPolygonElement:P.q,SVGPolylineElement:P.q,SVGRadialGradientElement:P.q,SVGRectElement:P.q,SVGScriptElement:P.q,SVGSetElement:P.q,SVGStopElement:P.q,SVGStyleElement:P.q,SVGElement:P.q,SVGSVGElement:P.q,SVGSwitchElement:P.q,SVGSymbolElement:P.q,SVGTSpanElement:P.q,SVGTextContentElement:P.q,SVGTextElement:P.q,SVGTextPathElement:P.q,SVGTextPositioningElement:P.q,SVGTitleElement:P.q,SVGUseElement:P.q,SVGViewElement:P.q,SVGGradientElement:P.q,SVGComponentTransferFunctionElement:P.q,SVGFEDropShadowElement:P.q,SVGMPathElement:P.q,SVGTransform:P.b5,SVGTransformList:P.ih,AudioBuffer:P.f3,AudioParamMap:P.f4,AudioTrackList:P.f6,AudioContext:P.bG,webkitAudioContext:P.bG,BaseAudioContext:P.bG,OfflineAudioContext:P.hq,WebGLBuffer:P.d7,WebGLProgram:P.dG,WebGL2RenderingContext:P.bU,WebGLShader:P.dJ,WebGLTexture:P.dO,WebGLUniformLocation:P.dT,SQLResultSetRowList:P.hQ})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dz.$nativeSuperclassTag="ArrayBufferView"
H.cO.$nativeSuperclassTag="ArrayBufferView"
H.cP.$nativeSuperclassTag="ArrayBufferView"
H.cu.$nativeSuperclassTag="ArrayBufferView"
H.cQ.$nativeSuperclassTag="ArrayBufferView"
H.cR.$nativeSuperclassTag="ArrayBufferView"
H.dA.$nativeSuperclassTag="ArrayBufferView"
W.cS.$nativeSuperclassTag="EventTarget"
W.cT.$nativeSuperclassTag="EventTarget"
W.cU.$nativeSuperclassTag="EventTarget"
W.cV.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(K.mr,[])
else K.mr([])})})()
//# sourceMappingURL=test.dart.js.map
