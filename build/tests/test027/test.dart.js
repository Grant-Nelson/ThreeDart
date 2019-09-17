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
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.l1"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.l1"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.l1(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={kJ:function kJ(){},
k2:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
fE:function(){return new P.ca("No element")},
n9:function(){return new P.ca("Too many elements")},
dm:function(a,b,c,d){if(c-b<=32)H.nD(a,b,c,d)
else H.nC(a,b,c,d)},
nD:function(a,b,c,d){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.b(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.b(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.a5()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.b(a,q)
C.b.m(a,s,a[q])
s=q}C.b.m(a,s,t)}},
nC:function(a2,a3,a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.c.ac(a4-a3+1,6),d=a3+e,c=a4-e,b=C.c.ac(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
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
if(typeof a1!=="number")return a1.a5()
if(a1>0){p=t
t=u
u=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.a5()
if(a1>0){p=q
q=r
r=p}a1=a5.$2(u,s)
if(typeof a1!=="number")return a1.a5()
if(a1>0){p=s
s=u
u=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.a5()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(u,r)
if(typeof a1!=="number")return a1.a5()
if(a1>0){p=r
r=u
u=p}a1=a5.$2(s,r)
if(typeof a1!=="number")return a1.a5()
if(a1>0){p=r
r=s
s=p}a1=a5.$2(t,q)
if(typeof a1!=="number")return a1.a5()
if(a1>0){p=q
q=t
t=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.a5()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.a5()
if(a1>0){p=q
q=r
r=p}C.b.m(a2,d,u)
C.b.m(a2,b,s)
C.b.m(a2,c,q)
if(a3<0||a3>=a2.length)return H.b(a2,a3)
C.b.m(a2,a,a2[a3])
if(a4<0||a4>=a2.length)return H.b(a2,a4)
C.b.m(a2,a0,a2[a4])
o=a3+1
n=a4-1
if(J.E(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.S()
if(k<0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.b.m(a2,m,a2[o])
C.b.m(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a5()
if(k>0){--n
continue}else{j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.b(a2,o)
C.b.m(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.b(a2,n)
C.b.m(a2,o,a2[n])
C.b.m(a2,n,l)
n=j
o=i
break}else{if(n>=a1)return H.b(a2,n)
C.b.m(a2,m,a2[n])
C.b.m(a2,n,l)
n=j
break}}}}h=!0}else{for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
g=a5.$2(l,t)
if(typeof g!=="number")return g.S()
if(g<0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.b.m(a2,m,a2[o])
C.b.m(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.a5()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.a5()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.S()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.b(a2,o)
C.b.m(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.b(a2,n)
C.b.m(a2,o,a2[n])
C.b.m(a2,n,l)
o=i}else{if(n>=a1)return H.b(a2,n)
C.b.m(a2,m,a2[n])
C.b.m(a2,n,l)}n=j
break}}}}h=!1}a1=o-1
if(a1>=a2.length)return H.b(a2,a1)
C.b.m(a2,a3,a2[a1])
C.b.m(a2,a1,t)
a1=n+1
if(a1<0||a1>=a2.length)return H.b(a2,a1)
C.b.m(a2,a4,a2[a1])
C.b.m(a2,a1,r)
H.dm(a2,a3,o-2,a5)
H.dm(a2,n+2,a4,a5)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.b(a2,o)
if(!J.E(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.b(a2,n)
if(!J.E(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.b.m(a2,m,a2[o])
C.b.m(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.S()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.b(a2,o)
C.b.m(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.b(a2,n)
C.b.m(a2,o,a2[n])
C.b.m(a2,n,l)
o=i}else{if(n>=a1)return H.b(a2,n)
C.b.m(a2,m,a2[n])
C.b.m(a2,n,l)}n=j
break}}}H.dm(a2,o,n,a5)}else H.dm(a2,o,n,a5)},
m:function m(a){this.a=a},
fi:function fi(){},
d4:function d4(){},
bY:function bY(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
fW:function fW(a,b,c){this.a=a
this.b=b
this.$ti=c},
fX:function fX(a,b){this.a=null
this.b=a
this.c=b},
fY:function fY(a,b,c){this.a=a
this.b=b
this.$ti=c},
cj:function cj(a,b,c){this.a=a
this.b=b
this.$ti=c},
j2:function j2(a,b){this.a=a
this.b=b},
cV:function cV(){},
iD:function iD(){},
dD:function dD(){},
n2:function(){throw H.d(P.y("Cannot modify unmodifiable Map"))},
eK:function(a){var u,t=H.pa(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
oU:function(a){return v.types[a]},
mm:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.P(a).$iB},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a4(a)
if(typeof u!=="string")throw H.d(H.ao(a))
return u},
c7:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
nu:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.b(p,3)
u=p[3]
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.d(P.Z(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.a.E(s,q)|32)>t)return}return parseInt(a,b)},
c8:function(a){return H.nl(a)+H.m8(H.cB(a),0,null)},
nl:function(a){var u,t,s,r,q,p,o,n=J.P(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.R||!!n.$ibA){r=C.t(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.eK(t.length>1&&C.a.E(t,0)===36?C.a.ae(t,1):t)},
nm:function(){if(!!self.location)return self.location.href
return},
lF:function(a){var u,t,s,r,q=J.af(a)
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
nv:function(a){var u,t,s,r=H.c([],[P.w])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.p)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.ao(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.aT(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.d(H.ao(s))}return H.lF(r)},
lG:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.ao(s))
if(s<0)throw H.d(H.ao(s))
if(s>65535)return H.nv(a)}return H.lF(a)},
nw:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
bw:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.aT(u,10))>>>0,56320|u&1023)}}throw H.d(P.Z(a,0,1114111,null,null))},
bv:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nt:function(a){var u=H.bv(a).getFullYear()+0
return u},
nr:function(a){var u=H.bv(a).getMonth()+1
return u},
nn:function(a){var u=H.bv(a).getDate()+0
return u},
no:function(a){var u=H.bv(a).getHours()+0
return u},
nq:function(a){var u=H.bv(a).getMinutes()+0
return u},
ns:function(a){var u=H.bv(a).getSeconds()+0
return u},
np:function(a){var u=H.bv(a).getMilliseconds()+0
return u},
v:function(a){throw H.d(H.ao(a))},
b:function(a,b){if(a==null)J.af(a)
throw H.d(H.bH(a,b))},
bH:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ak(!0,b,s,null)
u=J.af(a)
if(!(b<0)){if(typeof u!=="number")return H.v(u)
t=b>=u}else t=!0
if(t)return P.K(b,a,s,null,u)
return P.dg(b,s)},
oO:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bx(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bx(a,c,!0,b,"end",u)
return new P.ak(!0,b,"end",null)},
ao:function(a){return new P.ak(!0,a,null,null)},
oK:function(a){if(typeof a!=="number")throw H.d(H.ao(a))
return a},
d:function(a){var u
if(a==null)a=new P.dd()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.ms})
u.name=""}else u.toString=H.ms
return u},
ms:function(){return J.a4(this.dartException)},
t:function(a){throw H.d(a)},
p:function(a){throw H.d(P.aD(a))},
ay:function(a){var u,t,s,r,q,p
a=H.mq(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.k])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iq(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
ir:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
lQ:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lB:function(a,b){return new H.hq(a,b==null?null:b.method)},
kK:function(a,b){var u=b==null,t=u?null:b.method
return new H.fI(a,t,u?null:b.receiver)},
ae:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.ks(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.aT(t,16)&8191)===10)switch(s){case 438:return f.$1(H.kK(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.lB(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.mw()
q=$.mx()
p=$.my()
o=$.mz()
n=$.mC()
m=$.mD()
l=$.mB()
$.mA()
k=$.mF()
j=$.mE()
i=r.ak(u)
if(i!=null)return f.$1(H.kK(u,i))
else{i=q.ak(u)
if(i!=null){i.method="call"
return f.$1(H.kK(u,i))}else{i=p.ak(u)
if(i==null){i=o.ak(u)
if(i==null){i=n.ak(u)
if(i==null){i=m.ak(u)
if(i==null){i=l.ak(u)
if(i==null){i=o.ak(u)
if(i==null){i=k.ak(u)
if(i==null){i=j.ak(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.lB(u,i))}}return f.$1(new H.iC(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dp()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.ak(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dp()
return a},
l3:function(a){var u
if(a==null)return new H.ej(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.ej(a)},
oS:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.m(0,a[u],a[t])}return b},
p_:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.u("Unsupported number of arguments for wrapped closure"))},
bG:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.p_)
a.$identity=u
return u},
n1:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.i0().constructor.prototype):Object.create(new H.bL(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aq
if(typeof t!=="number")return t.C()
$.aq=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.lk(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.mY(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.lk(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
mY:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.oU,a)
if(typeof a=="function")if(b)return a
else{u=c?H.lj:H.kw
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.d("Error in functionType of tearoff")},
mZ:function(a,b,c,d){var u=H.kw
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lk:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.n0(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mZ(t,!r,u,b)
if(t===0){r=$.aq
if(typeof r!=="number")return r.C()
$.aq=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bM
return new Function(r+H.e(q==null?$.bM=H.eY("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aq
if(typeof r!=="number")return r.C()
$.aq=r+1
o+=r
r="return function("+o+"){return this."
q=$.bM
return new Function(r+H.e(q==null?$.bM=H.eY("self"):q)+"."+H.e(u)+"("+o+");}")()},
n_:function(a,b,c,d){var u=H.kw,t=H.lj
switch(b?-1:a){case 0:throw H.d(H.nA("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
n0:function(a,b){var u,t,s,r,q,p,o,n=$.bM
if(n==null)n=$.bM=H.eY("self")
u=$.li
if(u==null)u=$.li=H.eY("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.n_(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.aq
if(typeof u!=="number")return u.C()
$.aq=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.aq
if(typeof u!=="number")return u.C()
$.aq=u+1
return new Function(n+u+"}")()},
l1:function(a,b,c,d,e,f,g){return H.n1(a,b,c,d,!!e,!!f,g)},
kw:function(a){return a.a},
lj:function(a){return a.c},
eY:function(a){var u,t,s,r=new H.bL("self","target","receiver","name"),q=J.kH(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
p4:function(a,b){throw H.d(H.mX(a,H.eK(b.substring(2))))},
l:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.P(a)[b]
else u=!0
if(u)return a
H.p4(a,b)},
oQ:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
mX:function(a,b){return new H.eZ("CastError: "+P.kF(a)+": type '"+H.e(H.oG(a))+"' is not a subtype of type '"+b+"'")},
oG:function(a){var u,t=J.P(a)
if(!!t.$ibO){u=H.oQ(t)
if(u!=null)return H.p5(u)
return"Closure"}return H.c8(a)},
p9:function(a){throw H.d(new P.fa(a))},
nA:function(a){return new H.hJ(a)},
mk:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
cB:function(a){if(a==null)return
return a.$ti},
pJ:function(a,b,c){return H.kp(a["$a"+H.e(c)],H.cB(b))},
oT:function(a,b,c,d){var u=H.kp(a["$a"+H.e(c)],H.cB(b))
return u==null?null:u[d]},
l2:function(a,b,c){var u=H.kp(a["$a"+H.e(b)],H.cB(a))
return u==null?null:u[c]},
cC:function(a,b){var u=H.cB(a)
return u==null?null:u[b]},
p5:function(a){return H.bj(a,null)},
bj:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.eK(a[0].name)+H.m8(a,1,b)
if(typeof a=="function")return H.eK(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.b(b,t)
return H.e(b[t])}if('func' in a)return H.oe(a,b)
if('futureOr' in a)return"FutureOr<"+H.bj("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
oe:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],[P.k])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.b(a0,m)
p=C.a.C(p,a0[m])
l=u[q]
if(l!=null&&l!==P.a2)p+=" extends "+H.bj(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bj(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bj(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bj(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.oR(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.bj(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
m8:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.S("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bj(p,c)}return"<"+u.h(0)+">"},
kp:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
pH:function(a,b,c){return a.apply(b,H.kp(J.P(b)["$a"+H.e(c)],H.cB(b)))},
pI:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
p1:function(a){var u,t,s,r,q=$.ml.$1(a),p=$.k0[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.k6[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.md.$2(a,q)
if(q!=null){p=$.k0[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.k6[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kl(u)
$.k0[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.k6[q]=u
return u}if(s==="-"){r=H.kl(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.mo(a,u)
if(s==="*")throw H.d(P.iB(q))
if(v.leafTags[q]===true){r=H.kl(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.mo(a,u)},
mo:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.l5(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kl:function(a){return J.l5(a,!1,null,!!a.$iB)},
p2:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kl(u)
else return J.l5(u,c,null,null)},
oY:function(){if(!0===$.l4)return
$.l4=!0
H.oZ()},
oZ:function(){var u,t,s,r,q,p,o,n
$.k0=Object.create(null)
$.k6=Object.create(null)
H.oX()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.mp.$1(q)
if(p!=null){o=H.p2(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
oX:function(){var u,t,s,r,q,p,o=C.G()
o=H.bF(C.H,H.bF(C.I,H.bF(C.u,H.bF(C.u,H.bF(C.J,H.bF(C.K,H.bF(C.L(C.t),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.ml=new H.k3(r)
$.md=new H.k4(q)
$.mp=new H.k5(p)},
bF:function(a,b){return a(b)||b},
nb:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.d(P.Q("Illegal RegExp pattern ("+String(p)+")",a,null))},
p7:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
oP:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mq:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
l7:function(a,b,c){var u=H.p8(a,b,c)
return u},
p8:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.mq(b),'g'),H.oP(c))},
f3:function f3(){},
f4:function f4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iq:function iq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hq:function hq(a,b){this.a=a
this.b=b},
fI:function fI(a,b,c){this.a=a
this.b=b
this.c=c},
iC:function iC(a){this.a=a},
ks:function ks(a){this.a=a},
ej:function ej(a){this.a=a
this.b=null},
bO:function bO(){},
i8:function i8(){},
i0:function i0(){},
bL:function bL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eZ:function eZ(a){this.a=a},
hJ:function hJ(a){this.a=a},
O:function O(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fM:function fM(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fN:function fN(a,b){this.a=a
this.$ti=b},
fO:function fO(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
k3:function k3(a){this.a=a},
k4:function k4(a){this.a=a},
k5:function k5(a){this.a=a},
fH:function fH(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bD:function(a){return a},
nk:function(a){return new Int8Array(a)},
az:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.bH(b,a))},
oc:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.d(H.oO(a,b,c))
return b},
c2:function c2(){},
bb:function bb(){},
d8:function d8(){},
c3:function c3(){},
d9:function d9(){},
hi:function hi(){},
hj:function hj(){},
hk:function hk(){},
hl:function hl(){},
hm:function hm(){},
da:function da(){},
c4:function c4(){},
cn:function cn(){},
co:function co(){},
cp:function cp(){},
cq:function cq(){},
oR:function(a){return J.lr(a?Object.keys(a):[],null)},
pa:function(a){return v.mangledGlobalNames[a]},
p3:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
l5:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
k1:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.l4==null){H.oY()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.d(P.iB("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.l9()]
if(r!=null)return r
r=H.p1(a)
if(r!=null)return r
if(typeof a=="function")return C.T
u=Object.getPrototypeOf(a)
if(u==null)return C.A
if(u===Object.prototype)return C.A
if(typeof s=="function"){Object.defineProperty(s,$.l9(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
na:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.lg(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.Z(a,0,4294967295,"length",null))
return J.lr(new Array(a),b)},
lr:function(a,b){return J.kH(H.c(a,[b]))},
kH:function(a){a.fixed$length=Array
return a},
P:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cZ.prototype
return J.cY.prototype}if(typeof a=="string")return J.b7.prototype
if(a==null)return J.d_.prototype
if(typeof a=="boolean")return J.fG.prototype
if(a.constructor==Array)return J.b6.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b8.prototype
return a}if(a instanceof P.a2)return a
return J.k1(a)},
cz:function(a){if(typeof a=="string")return J.b7.prototype
if(a==null)return a
if(a.constructor==Array)return J.b6.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b8.prototype
return a}if(a instanceof P.a2)return a
return J.k1(a)},
eI:function(a){if(a==null)return a
if(a.constructor==Array)return J.b6.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b8.prototype
return a}if(a instanceof P.a2)return a
return J.k1(a)},
mj:function(a){if(typeof a=="number")return J.bW.prototype
if(typeof a=="string")return J.b7.prototype
if(a==null)return a
if(!(a instanceof P.a2))return J.bA.prototype
return a},
cA:function(a){if(typeof a=="string")return J.b7.prototype
if(a==null)return a
if(!(a instanceof P.a2))return J.bA.prototype
return a},
bJ:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b8.prototype
return a}if(a instanceof P.a2)return a
return J.k1(a)},
E:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.P(a).t(a,b)},
lb:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mj(a).u(a,b)},
cG:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mm(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cz(a).i(a,b)},
ku:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.mm(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.eI(a).m(a,b,c)},
mO:function(a,b){return J.cA(a).E(a,b)},
mP:function(a,b,c){return J.bJ(a).fY(a,b,c)},
mQ:function(a,b,c,d){return J.bJ(a).hh(a,b,c,d)},
mR:function(a,b){return J.cA(a).X(a,b)},
kv:function(a,b){return J.mj(a).ht(a,b)},
eL:function(a,b){return J.eI(a).K(a,b)},
mS:function(a,b,c,d){return J.bJ(a).hI(a,b,c,d)},
lc:function(a,b){return J.eI(a).H(a,b)},
mT:function(a){return J.bJ(a).ghp(a)},
ld:function(a){return J.bJ(a).gc3(a)},
cH:function(a){return J.P(a).gI(a)},
b0:function(a){return J.eI(a).gU(a)},
af:function(a){return J.cz(a).gl(a)},
le:function(a){return J.eI(a).ib(a)},
mU:function(a,b){return J.bJ(a).ig(a,b)},
mV:function(a,b,c){return J.cA(a).v(a,b,c)},
mW:function(a){return J.cA(a).iq(a)},
a4:function(a){return J.P(a).h(a)},
a:function a(){},
fG:function fG(){},
d_:function d_(){},
d0:function d0(){},
hu:function hu(){},
bA:function bA(){},
b8:function b8(){},
b6:function b6(a){this.$ti=a},
kI:function kI(a){this.$ti=a},
a5:function a5(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bW:function bW(){},
cZ:function cZ(){},
cY:function cY(){},
b7:function b7(){}},P={
nP:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.oH()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bG(new P.j4(s),1)).observe(u,{childList:true})
return new P.j3(s,u,t)}else if(self.setImmediate!=null)return P.oI()
return P.oJ()},
nQ:function(a){self.scheduleImmediate(H.bG(new P.j5(a),0))},
nR:function(a){self.setImmediate(H.bG(new P.j6(a),0))},
nS:function(a){P.kP(C.n,a)},
kP:function(a,b){var u=C.c.ac(a.a,1000)
return P.nX(u<0?0:u,b)},
lP:function(a,b){var u=C.c.ac(a.a,1000)
return P.nY(u<0?0:u,b)},
nX:function(a,b){var u=new P.ep()
u.eF(a,b)
return u},
nY:function(a,b){var u=new P.ep()
u.eG(a,b)
return u},
oA:function(){var u,t
for(;u=$.bE,u!=null;){$.cy=null
t=u.b
$.bE=t
if(t==null)$.cx=null
u.a.$0()}},
oF:function(){$.l_=!0
try{P.oA()}finally{$.cy=null
$.l_=!1
if($.bE!=null)$.la().$1(P.me())}},
oD:function(a){var u=new P.dM(a)
if($.bE==null){$.bE=$.cx=u
if(!$.l_)$.la().$1(P.me())}else $.cx=$.cx.b=u},
oE:function(a){var u,t,s=$.bE
if(s==null){P.oD(a)
$.cy=$.cx
return}u=new P.dM(a)
t=$.cy
if(t==null){u.b=s
$.bE=$.cy=u}else{u.b=t.b
$.cy=t.b=u
if(u.b==null)$.cx=u}},
lO:function(a,b){var u=$.an
if(u===C.f)return P.kP(a,b)
return P.kP(a,u.hq(b))},
nG:function(a,b){var u=$.an
if(u===C.f)return P.lP(a,b)
return P.lP(a,u.dm(b,P.dw))},
m9:function(a,b,c,d,e){var u={}
u.a=d
P.oE(new P.jT(u,e))},
oB:function(a,b,c,d){var u,t=$.an
if(t===c)return d.$0()
$.an=c
u=t
try{t=d.$0()
return t}finally{$.an=u}},
oC:function(a,b,c,d,e){var u,t=$.an
if(t===c)return d.$1(e)
$.an=c
u=t
try{t=d.$1(e)
return t}finally{$.an=u}},
j4:function j4(a){this.a=a},
j3:function j3(a,b,c){this.a=a
this.b=b
this.c=c},
j5:function j5(a){this.a=a},
j6:function j6(a){this.a=a},
ep:function ep(){this.c=0},
jB:function jB(a,b){this.a=a
this.b=b},
jA:function jA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dM:function dM(a){this.a=a
this.b=null},
dr:function dr(){},
i3:function i3(){},
dw:function dw(){},
jK:function jK(){},
jT:function jT(a,b){this.a=a
this.b=b},
jk:function jk(){},
jl:function jl(a,b){this.a=a
this.b=b},
jm:function jm(a,b,c){this.a=a
this.b=b
this.c=c},
nd:function(a,b){return new H.O([a,b])},
kL:function(a,b){return new H.O([a,b])},
nf:function(a){return H.oS(a,new H.O([null,null]))},
d3:function(a){return new P.jh([a])},
kV:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
nW:function(a,b){var u=new P.e0(a,b)
u.c=a.e
return u},
n8:function(a,b,c){var u,t
if(P.l0(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.k])
$.a7.push(a)
try{P.of(a,u)}finally{if(0>=$.a7.length)return H.b($.a7,-1)
$.a7.pop()}t=P.lL(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
kG:function(a,b,c){var u,t
if(P.l0(a))return b+"..."+c
u=new P.S(b)
$.a7.push(a)
try{t=u
t.a=P.lL(t.a,a,", ")}finally{if(0>=$.a7.length)return H.b($.a7,-1)
$.a7.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
l0:function(a){var u,t
for(u=$.a7.length,t=0;t<u;++t)if(a===$.a7[t])return!0
return!1},
of:function(a,b){var u,t,s,r,q,p,o,n=a.gU(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.A())return
u=H.e(n.gJ(n))
b.push(u)
m+=u.length+2;++l}if(!n.A()){if(l<=5)return
if(0>=b.length)return H.b(b,-1)
t=b.pop()
if(0>=b.length)return H.b(b,-1)
s=b.pop()}else{r=n.gJ(n);++l
if(!n.A()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.b(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gJ(n);++l
for(;n.A();r=q,q=p){p=n.gJ(n);++l
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
ne:function(a,b,c){var u=P.nd(b,c)
a.H(0,new P.fP(u))
return u},
ls:function(a,b){var u,t,s=P.d3(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.p)(a),++t)s.n(0,a[t])
return s},
kM:function(a){var u,t={}
if(P.l0(a))return"{...}"
u=new P.S("")
try{$.a7.push(a)
u.a+="{"
t.a=!0
J.lc(a,new P.fU(t,u))
u.a+="}"}finally{if(0>=$.a7.length)return H.b($.a7,-1)
$.a7.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jh:function jh(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ji:function ji(a){this.a=a
this.c=this.b=null},
e0:function e0(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fP:function fP(a){this.a=a},
fQ:function fQ(){},
r:function r(){},
fT:function fT(){},
fU:function fU(a,b){this.a=a
this.b=b},
aI:function aI(){},
jC:function jC(){},
fV:function fV(){},
dE:function dE(a,b){this.a=a
this.$ti=b},
jo:function jo(){},
e1:function e1(){},
ev:function ev(){},
nJ:function(a,b,c,d){if(b instanceof Uint8Array)return P.nK(!1,b,c,d)
return},
nK:function(a,b,c,d){var u,t,s=$.mG()
if(s==null)return
u=0===c
if(u&&!0)return P.kS(s,b)
t=b.length
d=P.be(c,d,t)
if(u&&d===t)return P.kS(s,b)
return P.kS(s,b.subarray(c,d))},
kS:function(a,b){if(P.nM(b))return
return P.nN(a,b)},
nN:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ae(t)}return},
nM:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
nL:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ae(t)}return},
mb:function(a,b,c){var u,t,s
for(u=J.cz(a),t=b;t<c;++t){s=u.i(a,t)
if(typeof s!=="number")return s.am()
if((s&127)!==s)return t-b}return c-b},
lh:function(a,b,c,d,e,f){if(C.c.bg(f,4)!==0)throw H.d(P.Q("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.d(P.Q("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.d(P.Q("Invalid base64 padding, more than two '=' characters",a,b))},
eV:function eV(){},
eW:function eW(){},
f0:function f0(){},
f5:function f5(){},
fk:function fk(){},
fB:function fB(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
fA:function fA(a){this.a=a},
iL:function iL(){},
iN:function iN(){},
jI:function jI(a){this.b=0
this.c=a},
iM:function iM(a){this.a=a},
jH:function jH(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
eJ:function(a,b,c){var u=H.nu(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.d(P.Q(a,null,null))},
n6:function(a){if(a instanceof H.bO)return a.h(0)
return"Instance of '"+H.e(H.c8(a))+"'"},
ng:function(a,b,c){var u,t,s=J.na(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
lt:function(a,b,c){var u,t=H.c([],[c])
for(u=J.b0(a);u.A();)t.push(u.gJ(u))
if(b)return t
return J.kH(t)},
cb:function(a,b,c){var u
if(typeof a==="object"&&a!==null&&a.constructor===Array){u=a.length
c=P.be(b,c,u)
return H.lG(b>0||c<u?C.b.em(a,b,c):a)}if(!!J.P(a).$ic4)return H.nw(a,b,P.be(b,c,a.length))
return P.nE(a,b,c)},
nE:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.d(P.Z(b,0,J.af(a),q,q))
u=c==null
if(!u&&c<b)throw H.d(P.Z(c,b,J.af(a),q,q))
t=J.b0(a)
for(s=0;s<b;++s)if(!t.A())throw H.d(P.Z(b,0,s,q,q))
r=[]
if(u)for(;t.A();)r.push(t.gJ(t))
else for(s=b;s<c;++s){if(!t.A())throw H.d(P.Z(c,b,s,q,q))
r.push(t.gJ(t))}return H.lG(r)},
ny:function(a){return new H.fH(a,H.nb(a,!1,!0,!1,!1,!1))},
lL:function(a,b,c){var u=J.b0(b)
if(!u.A())return a
if(c.length===0){do a+=H.e(u.gJ(u))
while(u.A())}else{a+=H.e(u.gJ(u))
for(;u.A();)a=a+c+H.e(u.gJ(u))}return a},
lS:function(){var u=H.nm()
if(u!=null)return P.nI(u)
throw H.d(P.y("'Uri.base' is not supported"))},
ew:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.e){u=$.mM().b
if(typeof b!=="string")H.t(H.ao(b))
u=u.test(b)}else u=!1
if(u)return b
t=c.ghH().c4(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.b(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.bw(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
n3:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
n4:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cQ:function(a){if(a>=10)return""+a
return"0"+a},
ll:function(a){return new P.b2(1000*a)},
kF:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a4(a)
if(typeof a==="string")return JSON.stringify(a)
return P.n6(a)},
cI:function(a){return new P.ak(!1,null,null,a)},
lg:function(a,b,c){return new P.ak(!0,a,b,c)},
dg:function(a,b){return new P.bx(null,null,!0,a,b,"Value not in range")},
Z:function(a,b,c,d,e){return new P.bx(b,c,!0,a,d,"Invalid value")},
be:function(a,b,c){if(0>a||a>c)throw H.d(P.Z(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.d(P.Z(b,a,c,"end",null))
return b}return c},
lH:function(a,b){if(typeof a!=="number")return a.S()
if(a<0)throw H.d(P.Z(a,0,null,b,null))},
K:function(a,b,c,d,e){var u=e==null?J.af(b):e
return new P.fD(u,!0,a,c,"Index out of range")},
y:function(a){return new P.iE(a)},
iB:function(a){return new P.iA(a)},
lK:function(a){return new P.ca(a)},
aD:function(a){return new P.f2(a)},
u:function(a){return new P.dU(a)},
Q:function(a,b,c){return new P.fu(a,b,c)},
nh:function(a,b,c){var u,t,s=H.c([],[c])
C.b.sl(s,a)
for(u=0;u<a;++u){t=b.$1(u)
if(u>=s.length)return H.b(s,u)
s[u]=t}return s},
l6:function(a){H.p3(a)},
nI:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.a.E(a,4)^58)*3|C.a.E(a,0)^100|C.a.E(a,1)^97|C.a.E(a,2)^116|C.a.E(a,3)^97)>>>0
if(u===0)return P.lR(e<e?C.a.v(a,0,e):a,5,f).gec()
else if(u===32)return P.lR(C.a.v(a,5,e),0,f).gec()}t=new Array(8)
t.fixed$length=Array
s=H.c(t,[P.w])
s[0]=0
s[1]=-1
s[2]=-1
s[7]=-1
s[3]=0
s[4]=0
s[5]=e
s[6]=e
if(P.ma(a,0,e,0,s)>=14)s[7]=e
r=s[1]
if(typeof r!=="number")return r.is()
if(r>=0)if(P.ma(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.C()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.S()
if(typeof n!=="number")return H.v(n)
if(m<n)n=m
if(typeof o!=="number")return o.S()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.S()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.S()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.a.aa(a,"..",o)))j=n>o+2&&C.a.aa(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.a.aa(a,"file",0)){if(q<=0){if(!C.a.aa(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.a.v(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.a.aX(a,o,n,"/");++e
n=h}k="file"}else if(C.a.aa(a,"http",0)){if(t&&p+3===o&&C.a.aa(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.a.aX(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.a.aa(a,"https",0)){if(t&&p+4===o&&C.a.aa(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.a.aX(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.a.v(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.jr(a,r,q,p,o,n,m,k)}return P.nZ(a,0,e,r,q,p,o,n,m,k)},
lU:function(a){var u=P.k
return C.b.hN(H.c(a.split("&"),[u]),P.kL(u,u),new P.iJ(C.e))},
nH:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.iG(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.a.X(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.eJ(C.a.v(a,s,t),n,n)
if(typeof p!=="number")return p.a5()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.b(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.eJ(C.a.v(a,s,c),n,n)
if(typeof p!=="number")return p.a5()
if(p>255)k.$2(l,s)
if(r>=u)return H.b(j,r)
j[r]=p
return j},
lT:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.iH(a),d=new P.iI(e,a)
if(a.length<2)e.$1("address is too short")
u=H.c([],[P.w])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.a.X(a,t)
if(p===58){if(t===b){++t
if(C.a.X(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
u.push(-1)
r=!0}else u.push(d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.b.gaz(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)u.push(d.$2(s,c))
else{m=P.nH(a,s,c)
u.push((m[0]<<8|m[1])>>>0)
u.push((m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.b(l,i)
l[i]=0
f=i+1
if(f>=k)return H.b(l,f)
l[f]=0
i+=2}else{f=C.c.aT(h,8)
if(i<0||i>=k)return H.b(l,i)
l[i]=f
f=i+1
if(f>=k)return H.b(l,f)
l[f]=h&255
i+=2}}return l},
nZ:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.o6(a,b,d)
else{if(d===b)P.bC(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.o7(a,u,e-1):""
s=P.o3(a,e,f,!1)
if(typeof f!=="number")return f.C()
r=f+1
if(typeof g!=="number")return H.v(g)
q=r<g?P.o5(P.eJ(C.a.v(a,r,g),new P.jD(a,f),n),j):n}else{q=n
s=q
t=""}p=P.o4(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.S()
o=h<i?P.kX(a,h+1,i,n):n
return new P.bB(j,t,s,q,p,o,i<c?P.o2(a,i+1,c):n)},
m2:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bC:function(a,b,c){throw H.d(P.Q(c,a,b))},
o5:function(a,b){if(a!=null&&a===P.m2(b))return
return a},
o3:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.a.X(a,b)===91){if(typeof c!=="number")return c.M()
u=c-1
if(C.a.X(a,u)!==93)P.bC(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.o0(a,t,u)
if(typeof s!=="number")return s.S()
if(s<u){r=s+1
q=P.m7(a,C.a.aa(a,"25",r)?s+3:r,u,"%25")}else q=""
P.lT(a,t,s)
return C.a.v(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.v(c)
p=b
for(;p<c;++p)if(C.a.X(a,p)===58){s=C.a.bp(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.m7(a,C.a.aa(a,"25",r)?s+3:r,c,"%25")}else q=""
P.lT(a,b,s)
return"["+C.a.v(a,b,s)+q+"]"}return P.o9(a,b,c)},
o0:function(a,b,c){var u,t=C.a.bp(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.v(c)
u=t<c}else u=!1
return u?t:c},
m7:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.S(d):null
if(typeof c!=="number")return H.v(c)
u=b
t=u
s=!0
for(;u<c;){r=C.a.X(a,u)
if(r===37){q=P.kY(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.S("")
o=l.a+=C.a.v(a,t,u)
if(p)q=C.a.v(a,u,u+3)
else if(q==="%")P.bC(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.b(C.h,p)
p=(C.h[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.S("")
if(t<u){l.a+=C.a.v(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.a.X(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.S("")
l.a+=C.a.v(a,t,u)
l.a+=P.kW(r)
u+=m
t=u}}}if(l==null)return C.a.v(a,b,c)
if(t<c)l.a+=C.a.v(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
o9:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.v(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.a.X(a,u)
if(q===37){p=P.kY(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.S("")
n=C.a.v(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.a.v(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.b(C.y,o)
o=(C.y[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.S("")
if(t<u){s.a+=C.a.v(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.b(C.k,o)
o=(C.k[o]&1<<(q&15))!==0}else o=!1
if(o)P.bC(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.a.X(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.S("")
n=C.a.v(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.kW(q)
u+=l
t=u}}}}if(s==null)return C.a.v(a,b,c)
if(t<c){n=C.a.v(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
o6:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.m4(C.a.E(a,b)))P.bC(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.a.E(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.b(C.m,r)
r=(C.m[r]&1<<(s&15))!==0}else r=!1
if(!r)P.bC(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.a.v(a,b,c)
return P.o_(t?a.toLowerCase():a)},
o_:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
o7:function(a,b,c){return P.cv(a,b,c,C.W,!1)},
o4:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.cv(a,b,c,C.z,!0):C.j.iG(d,new P.jE(),P.k).k(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.a.a8(u,"/"))u="/"+u
return P.o8(u,e,f)},
o8:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.a.a8(a,"/"))return P.oa(a,!u||c)
return P.ob(a)},
kX:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.d(P.cI("Both query and queryParameters specified"))
return P.cv(a,b,c,C.l,!0)}if(d==null)return
u=new P.S("")
t.a=""
d.H(0,new P.jF(new P.jG(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
o2:function(a,b,c){return P.cv(a,b,c,C.l,!0)},
kY:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.a.X(a,b+1)
t=C.a.X(a,p)
s=H.k2(u)
r=H.k2(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.c.aT(q,4)
if(p>=8)return H.b(C.h,p)
p=(C.h[p]&1<<(q&15))!==0}else p=!1
if(p)return H.bw(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.a.v(a,b,b+3).toUpperCase()
return},
kW:function(a){var u,t,s,r,q,p,o,n,m="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.c(u,[P.w])
t[0]=37
t[1]=C.a.E(m,a>>>4)
t[2]=C.a.E(m,a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.c(u,[P.w])
for(u=t.length,q=0;--r,r>=0;s=128){p=C.c.h9(a,6*r)&63|s
if(q>=u)return H.b(t,q)
t[q]=37
o=q+1
n=C.a.E(m,p>>>4)
if(o>=u)return H.b(t,o)
t[o]=n
n=q+2
o=C.a.E(m,p&15)
if(n>=u)return H.b(t,n)
t[n]=o
q+=3}}return P.cb(t,0,null)},
cv:function(a,b,c,d,e){var u=P.m6(a,b,c,d,e)
return u==null?C.a.v(a,b,c):u},
m6:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.S()
if(typeof c!=="number")return H.v(c)
if(!(o<c))break
c$0:{u=C.a.X(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.b(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.kY(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.b(C.k,t)
t=(C.k[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.bC(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.a.X(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.kW(u)}}if(m==null)m=new P.S("")
m.a+=C.a.v(a,n,o)
m.a+=H.e(s)
if(typeof r!=="number")return H.v(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.S()
if(n<c)m.a+=C.a.v(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
m5:function(a){if(C.a.a8(a,"."))return!0
return C.a.dS(a,"/.")!==-1},
ob:function(a){var u,t,s,r,q,p,o
if(!P.m5(a))return a
u=H.c([],[P.k])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.E(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.b(u,-1)
u.pop()
if(u.length===0)u.push("")}r=!0}else if("."===p)r=!0
else{u.push(p)
r=!1}}if(r)u.push("")
return C.b.k(u,"/")},
oa:function(a,b){var u,t,s,r,q,p
if(!P.m5(a))return!b?P.m3(a):a
u=H.c([],[P.k])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.b.gaz(u)!==".."){if(0>=u.length)return H.b(u,-1)
u.pop()
r=!0}else{u.push("..")
r=!1}else if("."===p)r=!0
else{u.push(p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.b(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.b.gaz(u)==="..")u.push("")
if(!b){if(0>=u.length)return H.b(u,0)
t=P.m3(u[0])
if(0>=u.length)return H.b(u,0)
u[0]=t}return C.b.k(u,"/")},
m3:function(a){var u,t,s,r=a.length
if(r>=2&&P.m4(J.mO(a,0)))for(u=1;u<r;++u){t=C.a.E(a,u)
if(t===58)return C.a.v(a,0,u)+"%3A"+C.a.ae(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.b(C.m,s)
s=(C.m[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
o1:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.a.E(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.d(P.cI("Invalid URL encoding"))}}return u},
kZ:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.a.E(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.e!==d)s=!1
else s=!0
if(s)return C.a.v(a,b,c)
else r=new H.m(C.a.v(a,b,c))}else{r=H.c([],[P.w])
for(s=a.length,q=b;q<c;++q){t=C.a.E(a,q)
if(t>127)throw H.d(P.cI("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.d(P.cI("Truncated URI"))
r.push(P.o1(a,q+1))
q+=2}else if(t===43)r.push(32)
else r.push(t)}}return new P.iM(!1).c4(r)},
m4:function(a){var u=a|32
return 97<=u&&u<=122},
lR:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.c([b-1],[P.w])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.a.E(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.d(P.Q(m,a,t))}}if(s<0&&t>b)throw H.d(P.Q(m,a,t))
for(;r!==44;){l.push(t);++t
for(q=-1;t<u;++t){r=C.a.E(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)l.push(q)
else{p=C.b.gaz(l)
if(r!==44||t!==p+7||!C.a.aa(a,"base64",p+1))throw H.d(P.Q("Expecting '='",a,t))
break}}l.push(t)
o=t+1
if((l.length&1)===1)a=C.F.hW(0,a,o,u)
else{n=P.m6(a,o,u,C.l,!0)
if(n!=null)a=C.a.aX(a,o,u,n)}return new P.iF(a,l,c)},
od:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.nh(22,new P.jO(),P.bz),n=new P.jN(o),m=new P.jP(),l=new P.jQ(),k=n.$2(0,225)
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
ma:function(a,b,c,d,e){var u,t,s,r,q,p=$.mN()
for(u=b;u<c;++u){if(d<0||d>=p.length)return H.b(p,d)
t=p[d]
s=C.a.E(a,u)^96
if(s>95)s=31
if(s>=t.length)return H.b(t,s)
r=t[s]
d=r&31
q=r>>>5
if(q>=8)return H.b(e,q)
e[q]=u}return d},
aA:function aA(){},
a8:function a8(a,b){this.a=a
this.b=b},
M:function M(){},
b2:function b2(a){this.a=a},
fg:function fg(){},
fh:function fh(){},
bq:function bq(){},
dd:function dd(){},
ak:function ak(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bx:function bx(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fD:function fD(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iE:function iE(a){this.a=a},
iA:function iA(a){this.a=a},
ca:function ca(a){this.a=a},
f2:function f2(a){this.a=a},
ht:function ht(){},
dp:function dp(){},
fa:function fa(a){this.a=a},
dU:function dU(a){this.a=a},
fu:function fu(a,b,c){this.a=a
this.b=b
this.c=c},
fw:function fw(){},
w:function w(){},
h:function h(){},
fF:function fF(){},
o:function o(){},
R:function R(){},
bc:function bc(){},
ad:function ad(){},
a2:function a2(){},
k:function k(){},
S:function S(a){this.a=a},
iJ:function iJ(a){this.a=a},
iG:function iG(a){this.a=a},
iH:function iH(a){this.a=a},
iI:function iI(a,b){this.a=a
this.b=b},
bB:function bB(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
jD:function jD(a,b){this.a=a
this.b=b},
jE:function jE(){},
jG:function jG(a,b){this.a=a
this.b=b},
jF:function jF(a){this.a=a},
iF:function iF(a,b,c){this.a=a
this.b=b
this.c=c},
jO:function jO(){},
jN:function jN(a){this.a=a},
jP:function jP(){},
jQ:function jQ(){},
jr:function jr(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
ja:function ja(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
oN:function(a){var u,t=J.P(a)
if(!!t.$iaH){u=t.gds(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.eu(a.data,a.height,a.width)},
oM:function(a){if(a instanceof P.eu)return{data:a.a,height:a.b,width:a.c}
return a},
aW:function(a){var u,t,s,r,q
if(a==null)return
u=P.kL(P.k,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.p)(t),++r){q=t[r]
u.m(0,q,a[q])}return u},
oL:function(a){var u={}
a.H(0,new P.jU(u))
return u},
jt:function jt(){},
jv:function jv(a,b){this.a=a
this.b=b},
eu:function eu(a,b,c){this.a=a
this.b=b
this.c=c},
jU:function jU(a){this.a=a},
ju:function ju(a,b){this.a=a
this.b=b},
fq:function fq(a,b){this.a=a
this.b=b},
fr:function fr(){},
fs:function fs(){},
jg:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
nV:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jj:function jj(){},
ab:function ab(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b9:function b9(){},
fK:function fK(){},
bd:function bd(){},
hr:function hr(){},
hz:function hz(){},
c9:function c9(){},
i4:function i4(){},
j:function j(){},
bf:function bf(){},
ip:function ip(){},
dZ:function dZ(){},
e_:function e_(){},
e9:function e9(){},
ea:function ea(){},
el:function el(){},
em:function em(){},
es:function es(){},
et:function et(){},
bz:function bz(){},
eQ:function eQ(){},
eR:function eR(){},
eS:function eS(a){this.a=a},
eT:function eT(){},
bl:function bl(){},
hs:function hs(){},
dN:function dN(){},
di:function di(){},
i_:function i_(){},
eh:function eh(){},
ei:function ei(){}},W={
lf:function(){var u=document.createElement("a")
return u},
ky:function(){var u=document.createElement("canvas")
return u},
n5:function(a,b,c){var u=document.body,t=(u&&C.r).aj(u,a,b,c)
t.toString
u=new H.cj(new W.a3(t),new W.fj(),[W.F])
return u.gaM(u)},
kC:function(a){return"wheel"},
bQ:function(a){var u,t,s,r="element tag unavailable"
try{u=J.bJ(a)
t=u.ge7(a)
if(typeof t==="string")r=u.ge7(a)}catch(s){H.ae(s)}return r},
n7:function(a){var u,t=document.createElement("input"),s=t
try{s.type=a}catch(u){H.ae(u)}return s},
jf:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
m0:function(a,b,c,d){var u=W.jf(W.jf(W.jf(W.jf(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
X:function(a,b,c,d){var u=W.mc(new W.jd(c),W.i)
if(u!=null&&!0)J.mQ(a,b,u,!1)
return new W.jc(a,b,u,!1)},
m_:function(a){var u=W.lf(),t=window.location
u=new W.cl(new W.jn(u,t))
u.ey(a)
return u},
nT:function(a,b,c,d){return!0},
nU:function(a,b,c,d){var u,t=d.a,s=t.a
s.href=c
u=s.hostname
t=t.b
if(!(u==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(u==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
m1:function(){var u=P.k,t=P.ls(C.o,u),s=H.c(["TEMPLATE"],[u])
t=new W.jy(t,P.d3(u),P.d3(u),P.d3(u),null)
t.eE(null,new H.fY(C.o,new W.jz(),[H.cC(C.o,0),u]),s,null)
return t},
mc:function(a,b){var u=$.an
if(u===C.f)return a
return u.dm(a,b)},
n:function n(){},
eM:function eM(){},
eN:function eN(){},
eO:function eO(){},
bm:function bm(){},
bn:function bn(){},
bo:function bo(){},
b1:function b1(){},
f6:function f6(){},
H:function H(){},
bP:function bP(){},
f7:function f7(){},
ag:function ag(){},
ar:function ar(){},
f8:function f8(){},
f9:function f9(){},
fc:function fc(){},
al:function al(){},
fd:function fd(){},
cS:function cS(){},
cT:function cT(){},
fe:function fe(){},
ff:function ff(){},
j8:function j8(a,b){this.a=a
this.b=b},
T:function T(){},
fj:function fj(){},
i:function i(){},
f:function f(){},
as:function as(){},
bS:function bS(){},
fp:function fp(){},
ft:function ft(){},
aG:function aG(){},
fz:function fz(){},
bU:function bU(){},
aH:function aH(){},
bV:function bV(){},
bt:function bt(){},
fR:function fR(){},
hb:function hb(){},
c0:function c0(){},
hc:function hc(){},
hd:function hd(a){this.a=a},
he:function he(){},
hf:function hf(a){this.a=a},
aK:function aK(){},
hg:function hg(){},
av:function av(){},
a3:function a3(a){this.a=a},
F:function F(){},
db:function db(){},
aN:function aN(){},
hw:function hw(){},
hH:function hH(){},
hI:function hI(a){this.a=a},
hK:function hK(){},
aP:function aP(){},
hX:function hX(){},
aQ:function aQ(){},
hY:function hY(){},
aR:function aR(){},
i1:function i1(){},
i2:function i2(a){this.a=a},
aw:function aw(){},
ds:function ds(){},
i5:function i5(){},
i6:function i6(){},
cc:function cc(){},
aS:function aS(){},
ax:function ax(){},
i9:function i9(){},
ia:function ia(){},
ii:function ii(){},
aT:function aT(){},
by:function by(){},
im:function im(){},
io:function io(){},
bg:function bg(){},
iK:function iK(){},
j1:function j1(){},
bi:function bi(){},
ck:function ck(){},
j9:function j9(){},
dP:function dP(){},
je:function je(){},
e6:function e6(){},
js:function js(){},
jw:function jw(){},
j7:function j7(){},
jb:function jb(a){this.a=a},
jc:function jc(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jd:function jd(a){this.a=a},
cl:function cl(a){this.a=a},
J:function J(){},
dc:function dc(a){this.a=a},
ho:function ho(a){this.a=a},
hn:function hn(a,b,c){this.a=a
this.b=b
this.c=c},
ee:function ee(){},
jp:function jp(){},
jq:function jq(){},
jy:function jy(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jz:function jz(){},
jx:function jx(){},
cW:function cW(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
aM:function aM(){},
jn:function jn(a,b){this.a=a
this.b=b},
ex:function ex(a){this.a=a},
jJ:function jJ(a){this.a=a},
dO:function dO(){},
dQ:function dQ(){},
dR:function dR(){},
dS:function dS(){},
dT:function dT(){},
dV:function dV(){},
dW:function dW(){},
dX:function dX(){},
dY:function dY(){},
e2:function e2(){},
e3:function e3(){},
e4:function e4(){},
e5:function e5(){},
e7:function e7(){},
e8:function e8(){},
eb:function eb(){},
ec:function ec(){},
ed:function ed(){},
cr:function cr(){},
cs:function cs(){},
ef:function ef(){},
eg:function eg(){},
ek:function ek(){},
en:function en(){},
eo:function eo(){},
ct:function ct(){},
cu:function cu(){},
eq:function eq(){},
er:function er(){},
ey:function ey(){},
ez:function ez(){},
eA:function eA(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){}},T={
L:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.d(P.u("The given low and high character strings for a Range must have one and only one characters."))
u=C.a.E(a,0)
t=C.a.E(b,0)
s=new T.hC()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
q:function(a){var u=new T.hL()
u.ew(a)
return u},
aB:function aB(){},
cX:function cX(){},
ba:function ba(){},
a6:function a6(){this.a=null},
hC:function hC(){this.b=this.a=null},
hL:function hL(){this.a=null},
lM:function(a){var u=new T.ic()
u.a=0
u.b=a
u.d=u.c=!1
u.x=u.r=u.f=u.e=0
return u},
du:function du(){},
ib:function ib(){},
ic:function ic(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
id:function id(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ie:function ie(a){var _=this
_.a=a
_.e=_.d=_.c=null},
ig:function ig(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},R={
ik:function(){var u=new R.ij(),t=P.k
u.a=new H.O([t,R.dq])
u.b=new H.O([t,R.dy])
return u},
dq:function dq(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dx:function dx(a,b,c){this.a=a
this.b=b
this.c=c},
dy:function dy(a){this.b=a
this.c=null},
ij:function ij(){this.c=this.b=this.a=null},
dA:function dA(a){this.b=a
this.a=this.c=null}},O={
kz:function(a){var u=new O.aC([a])
u.bi(a)
return u},
aC:function aC(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
c_:function c_(){this.b=this.a=null},
lu:function(){var u,t=new O.d6(),s=O.kz(V.aJ)
t.e=s
s.aZ(t.gf4(),t.gf6())
s=new O.at(t,"emission")
s.c=new A.a0(!1,!1,!1)
s.f=new V.V(0,0,0)
t.f=s
s=new O.at(t,"ambient")
s.c=new A.a0(!1,!1,!1)
s.f=new V.V(0,0,0)
t.r=s
s=new O.at(t,"diffuse")
s.c=new A.a0(!1,!1,!1)
s.f=new V.V(0,0,0)
t.x=s
s=new O.at(t,"invDiffuse")
s.c=new A.a0(!1,!1,!1)
s.f=new V.V(0,0,0)
t.y=s
s=new O.h4(t,"specular")
s.c=new A.a0(!1,!1,!1)
s.f=new V.V(0,0,0)
s.ch=100
t.z=s
s=new O.h0(t,"bump")
s.c=new A.a0(!1,!1,!1)
t.Q=s
t.ch=null
s=new O.at(t,"reflect")
s.c=new A.a0(!1,!1,!1)
s.f=new V.V(0,0,0)
t.cx=s
s=new O.h3(t,"refract")
s.c=new A.a0(!1,!1,!1)
s.f=new V.V(0,0,0)
s.ch=1
t.cy=s
s=new O.h_(t,"alpha")
s.c=new A.a0(!1,!1,!1)
s.f=1
t.db=s
s=new D.d2()
s.bi(D.a9)
s.e=H.c([],[D.bp])
s.f=H.c([],[D.hx])
s.r=H.c([],[D.hZ])
s.y=s.x=null
s.cG(s.gf2(),s.gfF(),s.gfJ())
t.dx=s
u=new O.h2()
u.b=new V.a_(0,0,0,0)
u.c=1
u.d=10
u.e=!1
t.dy=u
u=s.x
s=u==null?s.x=D.C():u
s.n(0,t.gh_())
s=t.dx
u=s.y
s=u==null?s.y=D.C():u
s.n(0,t.gaO())
t.fr=null
return t},
d6:function d6(){var _=this
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
bZ:function bZ(){},
h0:function h0(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
at:function at(a,b){var _=this
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
dl:function dl(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
dt:function dt(){}},E={
kE:function(){var u,t=new E.aF()
t.a=""
t.b=!0
u=O.kz(E.aF)
t.y=u
u.aZ(t.ghX(),t.gi_())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sa7(0,null)
return t},
nz:function(a,b){var u=new E.hD(a)
u.ev(a,b)
return u},
nF:function(a,b,c,d,e){var u,t,s=J.P(a)
if(!!s.$ibo)return E.lN(a,!0,!0,!0,!1)
u=W.ky()
t=u.style
t.width="100%"
t.height="100%"
s.gc3(a).n(0,u)
return E.lN(u,!0,!0,!0,!1)},
lN:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.dv(),p=C.i.cE(a,"webgl2",P.nf(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.t(P.u("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.nz(p,a)
u=new T.ie(p)
p.getParameter(3379)
u.c=p.getParameter(34076)
u.e=u.d=0
q.f=u
u=new X.dF(a)
t=new X.fJ()
t.c=new X.ah(!1,!1,!1)
t.d=P.d3(P.w)
u.b=t
t=new X.hh(u)
t.f=0
t.r=V.aO()
t.x=V.aO()
t.ch=t.Q=1
u.c=t
t=new X.fS(u)
t.r=0
t.x=V.aO()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.il(u)
t.f=V.aO()
t.r=V.aO()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.c([],[[P.dr,P.a2]])
u.z=t
s=document
t.push(W.X(s,"contextmenu",u.gfe(),!1))
u.z.push(W.X(a,"focus",u.gfk(),!1))
u.z.push(W.X(a,"blur",u.gf8(),!1))
u.z.push(W.X(s,"keyup",u.gfo(),!1))
u.z.push(W.X(s,"keydown",u.gfm(),!1))
u.z.push(W.X(a,"mousedown",u.gft(),!1))
u.z.push(W.X(a,"mouseup",u.gfz(),!1))
u.z.push(W.X(a,r,u.gfv(),!1))
t=u.z
W.kC(a)
W.kC(a)
t.push(W.X(a,W.kC(a),u.gfB(),!1))
u.z.push(W.X(s,r,u.gfg(),!1))
u.z.push(W.X(s,"mouseup",u.gfi(),!1))
u.z.push(W.X(s,"pointerlockchange",u.gfD(),!1))
u.z.push(W.X(a,"touchstart",u.gfT(),!1))
u.z.push(W.X(a,"touchend",u.gfP(),!1))
u.z.push(W.X(a,"touchmove",u.gfR(),!1))
q.r=u
q.Q=!0
q.ch=!1
q.cx=new P.a8(Date.now(),!1)
q.cy=0
q.d5()
return q},
eX:function eX(){},
aF:function aF(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hD:function hD(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hE:function hE(a){this.a=a},
hF:function hF(a){this.a=a},
hG:function hG(a){this.a=a},
dv:function dv(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
ih:function ih(a){this.a=a}},Z={
kU:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.bD(c)),35044)
a.bindBuffer(b,null)
return new Z.dK(b,u)},
aj:function(a){return new Z.aV(a)},
dK:function dK(a,b){this.a=a
this.b=b},
cK:function cK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
dL:function dL(a){this.a=a},
bN:function bN(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bs:function bs(a,b,c){this.a=a
this.b=b
this.c=c},
aV:function aV(a){this.a=a}},D={
C:function(){var u=new D.br()
u.d=0
return u},
f_:function f_(){},
br:function br(){var _=this
_.d=_.c=_.b=_.a=null},
fm:function fm(a){this.a=a},
fn:function fn(a){this.a=a},
W:function W(){this.b=null},
b4:function b4(){this.b=null},
b5:function b5(){this.b=null},
x:function x(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
bp:function bp(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a9:function a9(){},
d2:function d2(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
hx:function hx(){},
hZ:function hZ(){}},X={cL:function cL(a,b){this.a=a
this.b=b},d1:function d1(a,b){this.a=a
this.b=b},fJ:function fJ(){var _=this
_.d=_.c=_.b=_.a=null},d5:function d5(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fS:function fS(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ah:function ah(a,b,c){this.a=a
this.b=b
this.c=c},aL:function aL(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hh:function hh(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},c1:function c1(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hy:function hy(){},dz:function dz(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},il:function il(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dF:function dF(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
lp:function(a){var u=new X.fv(),t=new V.a_(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=V.kO()
u.r=t
return u},
kN:function(a){var u,t,s=new X.de()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gp().n(0,s.geH())
t=new D.x("mover",u,s.b)
t.b=!0
s.a1(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.A().a)){s.c=1.0471975511965976
t=new D.x("fov",t,1.0471975511965976)
t.b=!0
s.a1(t)}t=s.d
if(!(Math.abs(t-0.1)<$.A().a)){s.d=0.1
t=new D.x("near",t,0.1)
t.b=!0
s.a1(t)}t=s.e
if(!(Math.abs(t-2000)<$.A().a)){s.e=2000
t=new D.x("far",t,2000)
t.b=!0
s.a1(t)}return s},
eU:function eU(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
kx:function kx(){},
fv:function fv(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fC:function fC(){this.b=this.a=null},
de:function de(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
i7:function i7(){}},V={
kt:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.bg(a-b,u)
return(a<0?a+u:a)+b},
D:function(a,b,c){if(a==null)return C.a.al("null",c)
return C.a.al(C.d.ea(Math.abs(a-0)<$.A().a?0:a,b),c+b+1)},
bI:function(a,b,c){var u,t,s,r,q,p,o=H.c([],[P.k])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.p)(a),++s){r=V.D(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.b(o,q)
u=C.a.al(o[q],t)
p=o.length
if(q>=p)return H.b(o,q)
o[q]=u}return o},
cD:function(a){return C.d.im(Math.pow(2,C.S.ce(Math.log(H.oK(a))/Math.log(2))))},
bu:function(){var u=$.lA
return u==null?$.lA=V.au(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
au:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aJ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lz:function(a,b,c){return V.au(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
lw:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.au(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
lx:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.au(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
ly:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.au(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1)},
lv:function(a,b,c){var u=c.q(0,Math.sqrt(c.B(c))),t=b.aE(u),s=t.q(0,Math.sqrt(t.B(t))),r=u.aE(s),q=new V.z(a.a,a.b,a.c),p=s.T(0).B(q),o=r.T(0).B(q),n=u.T(0).B(q)
return V.au(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
aO:function(){var u=$.lD
return u==null?$.lD=new V.Y(0,0):u},
lE:function(){var u=$.c6
return u==null?$.c6=new V.N(0,0,0):u},
kO:function(){var u=$.lJ
return u==null?$.lJ=V.lI(0,0,1,1):u},
lI:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dh(a,b,c,d)},
ci:function(){var u=$.lY
return u==null?$.lY=new V.z(0,0,0):u},
nO:function(){var u=$.iO
return u==null?$.iO=new V.z(-1,0,0):u},
kT:function(){var u=$.iP
return u==null?$.iP=new V.z(0,1,0):u},
lZ:function(){var u=$.iQ
return u==null?$.iQ=new V.z(0,0,1):u},
V:function V(a,b,c){this.a=a
this.b=b
this.c=c},
a_:function a_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fl:function fl(a){this.a=a},
d7:function d7(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aJ:function aJ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
Y:function Y(a,b){this.a=a
this.b=b},
N:function N(a,b,c){this.a=a
this.b=b
this.c=c},
ai:function ai(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dh:function dh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
G:function G(a,b){this.a=a
this.b=b},
z:function z(a,b,c){this.a=a
this.b=b
this.c=c},
p6:function(a){P.nG(C.P,new V.km(a))},
nB:function(a){var u=new V.hR()
u.ex(a,!0)
return u},
cM:function cM(){},
km:function km(a){this.a=a},
fb:function fb(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fx:function fx(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fy:function fy(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hv:function hv(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hA:function hA(a){this.a=a
this.c=null},
hB:function hB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hR:function hR(){this.b=this.a=null},
hT:function hT(a){this.a=a},
hS:function hS(a){this.a=a},
hU:function hU(a){this.a=a},
mn:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="testCanvas",b1=null,b2=34067,b3="modifiers",b4=V.nB("Test 027"),b5=W.ky()
b5.className="pageLargeCanvas"
b5.id=b0
b4.a.appendChild(b5)
u=[P.k]
b4.di(H.c(["Test of a back buffer target for rendering to a texture. ","That back buffer texture is applied to a box."],u))
b4.hg(H.c(["shapes"],u))
b4.di(H.c(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(b0)
if(t==null)H.t(P.u("Failed to find an element with the identifier, testCanvas."))
s=E.nF(t,!0,!0,!0,!1)
r=U.lq()
q=new U.dj()
q.r=q.f=q.e=q.d=q.c=q.b=q.a=0
q.see(0)
q.se1(0,0)
q.se6(0)
p=q.d
if(!(Math.abs(p-0.1)<$.A().a)){q.d=0.1
p=new D.x("deltaYaw",p,0.1)
p.b=!0
q.G(p)}p=q.e
if(!(Math.abs(p-0.21)<$.A().a)){q.e=0.21
p=new D.x("deltaPitch",p,0.21)
p.b=!0
q.G(p)}p=q.f
if(!(Math.abs(p-0.32)<$.A().a)){q.f=0.32
p=new D.x("deltaRoll",p,0.32)
p.b=!0
q.G(p)}r.n(0,q)
r.n(0,U.kB(V.lz(0,0,5)))
o=X.kN(r)
n=new X.eU()
n.d=n.c=n.b=n.a=512
n.e=!0
n.f=!1
n.x=n.r=1
n.ch=T.lM(b1)
n.cx=new V.a_(0,0,0,1)
n.cy=!0
n.db=2000
n.dx=!0
n.dy=V.kO()
n.sav(0,512)
n.saq(0,512)
m=new V.a_(0,0,0,1)
if(!n.cx.t(0,m)){l=n.cx
n.cx=m
q=new D.x("color",l,m)
q.b=!0
n.a1(q)}if(n.cy){n.cy=!1
q=new D.x("clearColor",!0,!1)
q.b=!0
n.a1(q)}q=n.db
if(!(Math.abs(q-2000)<$.A().a)){n.db=2000
q=new D.x("depth",q,2000)
q.b=!0
n.a1(q)}q=n.r
if(!(Math.abs(q-1)<$.A().a)){n.r=1
q=new D.x("autoResizeScalarX",q,1)
q.b=!0
n.a1(q)}q=n.x
if(!(Math.abs(q-1)<$.A().a)){n.x=1
q=new D.x("autoResizeScalarY",q,1)
q.b=!0
n.a1(q)}k=V.kO()
if(!J.E(n.dy,k)){l=n.dy
n.dy=k
q=new D.x("region",l,k)
q.b=!0
n.a1(q)}q=s.f
p=q.a
j=p.createTexture()
p.bindTexture(b2,j)
p.texParameteri(b2,10242,10497)
p.texParameteri(b2,10243,10497)
p.texParameteri(b2,10241,9729)
p.texParameteri(b2,10240,9729)
p.bindTexture(b2,b1)
i=new T.id()
i.a=0
i.b=j
i.c=!1
i.d=0
q.aQ(i,j,"../resources/maskonaive/posx.jpg",34069,!1,!1)
q.aQ(i,j,"../resources/maskonaive/negx.jpg",34070,!1,!1)
q.aQ(i,j,"../resources/maskonaive/posy.jpg",34071,!1,!1)
q.aQ(i,j,"../resources/maskonaive/negy.jpg",34072,!1,!1)
q.aQ(i,j,"../resources/maskonaive/posz.jpg",34073,!1,!1)
q.aQ(i,j,"../resources/maskonaive/negz.jpg",34074,!1,!1)
h=new M.cP()
h.a=!0
q=E.kE()
g=F.hN()
p=g.a
f=new V.z(-1,-1,1)
f=f.q(0,Math.sqrt(f.B(f)))
e=p.bm(new V.ai(1,2,4,6),new V.a_(1,0,0,1),new V.N(-1,-1,0),new V.Y(0,1),f,b1)
p=g.a
f=new V.z(1,-1,1)
f=f.q(0,Math.sqrt(f.B(f)))
d=p.bm(new V.ai(0,3,4,6),new V.a_(0,0,1,1),new V.N(1,-1,0),new V.Y(1,1),f,b1)
p=g.a
f=new V.z(1,1,1)
f=f.q(0,Math.sqrt(f.B(f)))
c=p.bm(new V.ai(0,2,5,6),new V.a_(0,1,0,1),new V.N(1,1,0),new V.Y(1,0),f,b1)
p=g.a
f=V.aO()
b=new V.z(-1,1,1)
b=b.q(0,Math.sqrt(b.B(b)))
a=p.bm(new V.ai(0,2,4,7),new V.a_(1,1,0,1),new V.N(-1,1,0),f,b,b1)
g.d.dg(H.c([e,d,c,a],[F.aU]))
g.ap()
q.sa7(0,g)
h.e=q
h.saV(b1)
h.sbe(0,b1)
h.saY(b1)
q=new O.dl()
q.b=1.0471975511965976
q.d=new V.V(1,1,1)
l=q.c
q.c=i
i.gp().n(0,q.gaO())
p=new D.x("boxTexture",l,q.c)
p.b=!0
q.Y(p)
h.saY(q)
h.sbe(0,n)
h.saV(o)
a0=E.kE()
a0.sa7(0,F.mt())
a1=O.lu()
q=a1.dx
a2=V.kT()
p=U.kB(V.lv(V.lE(),a2,new V.z(0,-1,-1)))
m=new V.V(1,1,1)
f=new D.bp()
f.c=new V.V(1,1,1)
f.a=V.lZ()
f.d=V.kT()
f.e=V.nO()
l=f.b
f.b=p
p.gp().n(0,f.geA())
p=new D.x("mover",l,f.b)
p.b=!0
f.aA(p)
if(!f.c.t(0,m)){l=f.c
f.c=m
p=new D.x("color",l,m)
p.b=!0
f.aA(p)}q.n(0,f)
q=a1.r
q.sb6(0,new V.V(0,0,1))
q=a1.x
q.sb6(0,new V.V(0,1,0))
q=a1.z
q.sb6(0,new V.V(1,0,0))
q=a1.z
q.bV(new A.a0(!0,q.c.b,!1))
q.d7(10)
a3=M.lo()
a3.saV(o)
a3.saY(a1)
a3.sbe(0,n)
a3.e.n(0,a0)
a4=U.lq()
q=s.r
p=new U.dH()
f=U.kA()
f.scD(0,!0)
f.scn(6.283185307179586)
f.scp(0)
f.sa0(0,0)
f.sco(100)
f.sW(0)
f.sc6(0.5)
p.b=f
b=p.gaR()
f.gp().n(0,b)
f=U.kA()
f.scD(0,!0)
f.scn(6.283185307179586)
f.scp(0)
f.sa0(0,0)
f.sco(100)
f.sW(0)
f.sc6(0.5)
p.c=f
f.gp().n(0,b)
p.d=null
p.r=p.f=p.e=!1
p.y=p.x=2.5
p.Q=4
p.ch=p.cx=!1
p.db=p.cy=0
p.dx=null
p.dy=0
p.fx=p.fr=null
a5=new X.ah(!1,!1,!1)
l=p.d
p.d=a5
f=new D.x(b3,l,a5)
f.b=!0
p.G(f)
f=p.f
if(f!==!1){p.f=!1
f=new D.x("invertX",f,!1)
f.b=!0
p.G(f)}f=p.r
if(f!==!1){p.r=!1
f=new D.x("invertY",f,!1)
f.b=!0
p.G(f)}p.b5(q)
a4.n(0,p)
q=s.r
p=new U.dG()
f=U.kA()
f.scD(0,!0)
f.scn(6.283185307179586)
f.scp(0)
f.sa0(0,0)
f.sco(100)
f.sW(0)
f.sc6(0.2)
p.b=f
f.gp().n(0,p.gaR())
p.c=null
p.d=!1
p.e=2.5
p.r=4
p.x=p.y=!1
p.z=0
p.Q=null
p.ch=0
p.cy=p.cx=null
a5=new X.ah(!0,!1,!1)
l=p.c
p.c=a5
f=new D.x(b3,l,a5)
f.b=!0
p.G(f)
p.b5(q)
a4.n(0,p)
q=s.r
p=new U.dI()
p.c=0.01
p.e=p.d=0
a5=new X.ah(!1,!1,!1)
p.b=a5
f=new D.x(b3,b1,a5)
f.b=!0
p.G(f)
p.b5(q)
a4.n(0,p)
a4.n(0,U.kB(V.lz(0,0,5)))
a6=X.kN(a4)
a7=E.kE()
a7.sa7(0,F.jV(1,b1,b1,1))
a8=O.lu()
q=a8.f
p=n.ch
f=q.c
if(!f.b)q.bV(new A.a0(f.a,!0,!1))
f=q.d
if(f!==p){if(f!=null)f.gp().L(0,q.gaO())
l=q.d
q.d=p
p.gp().n(0,q.gaO())
p=new D.x(q.b+".texture2D",l,q.d)
p.b=!0
q.a.Y(p)}a9=M.lo()
a9.saV(a6)
a9.saY(a8)
a9.e.n(0,a7)
q=M.am
p=H.c([h,a3,a9],[q])
f=new M.cN()
f.bi(q)
f.e=!0
f.f=!1
f.r=null
f.aZ(f.gfL(),f.gfN())
f.ad(0,p)
q=s.d
if(q!==f){if(q!=null)q.gp().L(0,s.gcM())
s.d=f
f.gp().n(0,s.gcM())
s.cN()}q=new V.hA("shapes")
u=u.getElementById("shapes")
q.c=u
if(u==null)H.t("Failed to find shapes for RadioGroup")
q.de(0,"Cube",new V.kb(a7),!0)
q.ax(0,"Cuboid",new V.kc(a7))
q.ax(0,"Cylinder",new V.kd(a7))
q.ax(0,"Cone",new V.ke(a7))
q.ax(0,"Cylindrical",new V.kf(a7))
q.ax(0,"Sphere",new V.kg(a7))
q.ax(0,"Spherical",new V.kh(a7))
q.ax(0,"Toroid",new V.ki(a7))
q.ax(0,"Knot",new V.kj(a7))
u=s.z
if(u==null)u=s.z=D.C()
q=u.b
u=q==null?u.b=H.c([],[{func:1,ret:-1,args:[D.W]}]):q
u.push(new V.kk(b4,a8))
V.p6(s)},
kb:function kb(a){this.a=a},
kc:function kc(a){this.a=a},
ka:function ka(){},
kd:function kd(a){this.a=a},
ke:function ke(a){this.a=a},
kf:function kf(a){this.a=a},
k9:function k9(){},
kg:function kg(a){this.a=a},
kh:function kh(a){this.a=a},
k8:function k8(){},
ki:function ki(a){this.a=a},
kj:function kj(a){this.a=a},
kk:function kk(a,b){this.a=a
this.b=b}},U={
kA:function(){var u=new U.f1()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
kB:function(a){var u=new U.cO()
u.a=a
return u},
lq:function(){var u=new U.bT()
u.bi(U.aa)
u.aZ(u.geC(),u.gfH())
u.e=null
u.f=V.bu()
u.r=0
return u},
f1:function f1(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cO:function cO(){this.b=this.a=null},
bT:function bT(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
aa:function aa(){},
dj:function dj(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dG:function dG(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dH:function dH(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dI:function dI(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
lo:function(){var u,t,s=new M.cU()
s.a=!0
u=O.kz(E.aF)
s.e=u
u.aZ(s.gfa(),s.gfc())
s.y=s.x=s.r=s.f=null
t=X.lp(null)
s.saV(null)
s.sbe(0,t)
s.saY(null)
return s},
cN:function cN(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
cP:function cP(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cU:function cU(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
am:function am(){}},A={
ni:function(a,b){var u=a.aF,t=new A.fZ(b,u)
t.cL(b,u)
t.eu(a,b)
return t},
nj:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="MaterialLight_"+a0.gau(a0)+a1.gau(a1)+a2.gau(a2)+a3.gau(a3)+a4.gau(a4)+a5.gau(a5)+a6.gau(a6)+a7.gau(a7)+a8.gau(a8)+"_"
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
g=$.ap()
if(l){u=$.aZ()
g=new Z.aV(g.a|u.a)}if(k){u=$.aY()
g=new Z.aV(g.a|u.a)}if(j){u=$.b_()
g=new Z.aV(g.a|u.a)}if(i){u=$.aX()
g=new Z.aV(g.a|u.a)}return new A.h1(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,s,p,m,p,r,h,!0,!1,!1,o,r,n,l,k,j,!1,i,a,!1,c,!1,e,f.charCodeAt(0)==0?f:f,g)},
jR:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
jS:function(a,b,c){var u,t="Txt, txt2D).rgb;\n"
A.jR(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.kq(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.b){u+="   "+c+"Color = "+c+"Clr*texture2D("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.b){u+="   "+c+"Color = texture2D("+c+t
a.a=u}a.a=u+"}\n"},
oj:function(a,b){var u,t=a.a,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.jR(b,t,"emission")
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
og:function(a,b){var u,t=a.b
if(!(t.a||t.b||!1))return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.jS(b,t,"ambient")
b.a+="\n"},
oh:function(a,b){var u,t=a.c
if(!(t.a||t.b||!1))return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.jS(b,t,"diffuse")
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
ok:function(a,b){var u,t=a.d
if(!(t.a||t.b||!1))return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.jS(b,t,"invDiffuse")
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
oq:function(a,b){var u,t=a.e
if(!(t.a||t.b||!1))return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.jS(b,t,"specular")
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
om:function(a,b){var u,t,s
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
oo:function(a,b){var u,t=a.r,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.jR(b,t,"reflect")
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
op:function(a,b){var u,t=a.x,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.jR(b,t,"refract")
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
oi:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.e(u)
s=A.kq(t)
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
r=[P.k]
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
c.a+="      highLight = intensity*("+C.b.k(m," + ")+");\n"}else c.a+="   highLight = "+C.b.k(m," + ")+";\n"
o.push("highLight")}r=c.a+="   return lit.color*("+C.b.k(o," + ")+");\n"
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
on:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.e(u)
s=A.kq(t)
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
c.a=r+"\n"}r=[P.k]
l=H.c([],r)
l.push("lit.color")
if(o)l.push("attenuation")
if(u)l.push("textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.b.k(l," * ")+";\n"
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
r=c.a+="      highLight = intensity*("+C.b.k(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.b.k(l," + ")+");\n"
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
or:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.e(u)
s=A.kq(t)
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
c.a=u+"\n"}u=[P.k]
j=H.c([],u)
if(n)j.push("attenuation")
if(o)j.push("scale")
if(m)j.push("texture2D(txt2D, txtLoc).rgb")
else j.push("vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.b.k(j," * ")+";\n"
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
u=c.a+="      highLight = intensity*("+C.b.k(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.b.k(j," + ")+");\n"
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
ol:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.c([],[P.k])
u=a.b
if(u.a||u.b||!1)t.push("ambientColor")
u=a.c
if(u.a||u.b||!1)t.push("diffuse(norm, litVec)")
u=a.d
if(u.a||u.b||!1)t.push("invDiffuse(norm, litVec)")
u=a.e
if(u.a||u.b||!1)t.push("specular(norm, litVec)")
u=b.a+="   return "+C.b.k(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
os:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.S("")
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
A.oj(a,j)
A.og(a,j)
A.oh(a,j)
A.ok(a,j)
A.oq(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.oo(a,j)
A.op(a,j)}A.om(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.p)(q),++o)A.oi(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.p)(q),++o)A.on(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.p)(q),++o)A.or(a,q[o],j)
A.ol(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.c([],[P.k])
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.p)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.ae(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.p)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.ae(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.p)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.ae(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
if(u.a||u.b||!1)n.push("emissionColor()")
u=a.r
if(u.a||u.b||!1)n.push("reflect(refl)")
u=a.x
if(u.a||u.b||!1)n.push("refract(refl)")
if(n.length<=0)n.push("vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.b.k(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
ot:function(a,b){var u,t,s
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
ov:function(a,b){var u
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
ou:function(a,b){var u
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
ox:function(a,b){var u,t
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
oy:function(a,b){var u,t
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
ow:function(a,b){var u
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
oz:function(a,b){var u
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
kq:function(a){if(0>=a.length)return H.b(a,0)
return a[0].toUpperCase()+C.a.ae(a,1)},
kQ:function(a,b,c,d,e){var u=new A.it(a,c,e)
u.f=d
P.ng(d,0,P.w)
return u},
cJ:function cJ(a,b,c){this.a=a
this.b=b
this.c=c},
eP:function eP(a){this.a=a},
a0:function a0(a,b,c){this.a=a
this.b=b
this.c=c},
fZ:function fZ(a,b){var _=this
_.ix=_.dz=_.dw=_.dv=_.aF=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iF=_.iE=_.iD=_.cd=_.cc=_.cb=_.ca=_.c9=_.c8=_.iC=_.dL=_.dK=_.iB=_.dJ=_.dI=_.dH=_.iA=_.dG=_.dF=_.dE=_.iz=_.dD=_.dC=_.iy=_.dB=_.dA=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cR:function cR(a,b){this.a=a
this.b=b},
df:function df(a,b){this.a=a
this.b=b},
dn:function dn(a,b){this.a=a
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
_.aF=b3
_.dv=b4},
ce:function ce(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cg:function cg(a,b,c,d,e,f,g,h,i,j){var _=this
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
ch:function ch(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dk:function dk(){},
hW:function hW(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dB:function dB(){},
iy:function iy(a){this.a=a},
dC:function dC(a,b,c){this.a=a
this.c=b
this.d=c},
iv:function iv(a,b,c){this.a=a
this.c=b
this.d=c},
iw:function iw(a,b,c){this.a=a
this.c=b
this.d=c},
ix:function ix(a,b,c){this.a=a
this.c=b
this.d=c},
it:function it(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
U:function U(a,b,c){this.a=a
this.c=b
this.d=c},
iu:function iu(a,b,c){this.a=a
this.c=b
this.d=c},
I:function I(a,b,c){this.a=a
this.c=b
this.d=c},
cd:function cd(a,b,c){this.a=a
this.c=b
this.d=c},
iz:function iz(a,b,c){this.a=a
this.c=b
this.d=c},
cf:function cf(a,b,c){this.a=a
this.c=b
this.d=c},
ac:function ac(a,b,c){this.a=a
this.c=b
this.d=c},
a1:function a1(a,b,c){this.a=a
this.c=b
this.d=c},
bh:function bh(a,b,c){this.a=a
this.c=b
this.d=c}},F={
jV:function(a,b,c,d){var u=F.hN()
F.cw(u,b,c,d,a,1,0,0,1)
F.cw(u,b,c,d,a,0,1,0,3)
F.cw(u,b,c,d,a,0,0,1,2)
F.cw(u,b,c,d,a,-1,0,0,0)
F.cw(u,b,c,d,a,0,-1,0,0)
F.cw(u,b,c,d,a,0,0,-1,3)
u.ap()
return u},
jM:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cw:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.z(h,g+a1,f+a2)
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
j.d=i}m=F.jM(i)
l=F.jM(j.b)
k=F.l8(d,a0,new F.jL(j,F.jM(j.c),F.jM(j.d),l,m,c),b)
if(k!=null)a.bb(k)},
mi:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(e<3)return
u=F.hN()
t=b?-1:1
s=-6.283185307179586/e
r=H.c([],[F.aU])
q=u.a
p=new V.z(0,0,t)
p=p.q(0,Math.sqrt(p.B(p)))
r.push(q.hj(new V.ai(a,-1,-1,-1),new V.a_(1,1,1,1),new V.N(0,0,c),new V.z(0,0,t),new V.Y(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.v(k)
j=new V.z(m,l,t).q(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.dJ(new V.ai(a,-1,-1,-1),null,new V.a_(i,g,h,1),new V.N(m*k,l*k,c),new V.z(0,0,t),new V.Y(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.n(0,f)
r.push(f)}u.d.dg(r)
return u},
mf:function(a,b,c){return F.mg(!0,a,1,new F.jW(1,c),b)},
mg:function(a,b,c,d,e){var u
if(e<3)return
if(c<1)return
u=F.l8(c,e,new F.jY(d),null)
if(u==null)return
u.ap()
u.c_()
if(b)u.bb(F.mi(3,!1,1,new F.jZ(d),e))
u.bb(F.mi(1,!0,-1,new F.k_(d),e))
return u},
mr:function(a,b,c){var u,t={}
t.a=b
if(b==null)t.a=new F.kn()
u=F.jV(a,null,new F.ko(t,1),c)
u.c_()
return u},
mt:function(){return F.mh(15,30,0.5,1,new F.kr())},
p0:function(){return F.mh(12,120,0.3,1,new F.k7(3,2))},
mh:function(a,b,c,d,e){var u=F.l8(a,b,new F.jX(e,d,b,c),null)
if(u==null)return
u.ap()
u.c_()
return u},
l8:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.hN()
t=H.c([],[F.aU])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.dJ(g,g,new V.a_(p,0,0,1),g,g,new V.Y(r,1),g,g,0)
q.n(0,o)
c.$3(o,r,0)
t.push(o.c5(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.dJ(g,g,new V.a_(j,i,h,1),g,g,new V.Y(r,m),g,g,0)
k.n(0,o)
c.$3(o,r,n)
t.push(o.c5(d))}}u.d.hi(a+1,b+1,t)
return u},
bR:function(a,b,c){var u=new F.b3(),t=a.a
if(t==null)H.t(P.u("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.t(P.u("May not create a face with vertices attached to different shapes."))
u.bY(a)
u.bZ(b)
u.h5(c)
u.a.a.d.b.push(u)
u.a.a.a3()
return u},
nc:function(a,b){var u=new F.bX(),t=a.a
if(t==null)H.t(P.u("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.t(P.u("May not create a line with vertices attached to different shapes."))
u.bY(a)
u.bZ(b)
u.a.a.c.b.push(u)
u.a.a.a3()
return u},
hN:function(){var u=new F.hM(),t=new F.iR(u)
t.b=!1
t.c=H.c([],[F.aU])
u.a=t
t=new F.hQ(u)
t.b=H.c([],[F.c5])
u.b=t
t=new F.hP(u)
t.b=H.c([],[F.bX])
u.c=t
t=new F.hO(u)
t.b=H.c([],[F.b3])
u.d=t
u.e=null
return u},
dJ:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.aU(),r=new F.iZ()
r.b=H.c([],[F.c5])
s.b=r
r=new F.iV()
u=[F.bX]
r.b=H.c([],u)
r.c=H.c([],u)
s.c=r
r=new F.iS()
u=[F.b3]
r.b=H.c([],u)
r.c=H.c([],u)
r.d=H.c([],u)
s.d=r
h=$.mH()
s.e=0
r=$.ap()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aZ().a)!==0?e:t
s.x=(u&$.aY().a)!==0?b:t
s.y=(u&$.b_().a)!==0?f:t
s.z=(u&$.bk().a)!==0?g:t
s.Q=(u&$.mI().a)!==0?c:t
s.ch=(u&$.bK().a)!==0?i:0
s.cx=(u&$.aX().a)!==0?a:t
return s},
jL:function jL(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jW:function jW(a,b){this.a=a
this.b=b},
jY:function jY(a){this.a=a},
jZ:function jZ(a){this.a=a},
k_:function k_(a){this.a=a},
kn:function kn(){},
ko:function ko(a,b){this.a=a
this.b=b},
kr:function kr(){},
k7:function k7(a,b){this.a=a
this.b=b},
jX:function jX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b3:function b3(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fo:function fo(){},
hV:function hV(){},
bX:function bX(){this.b=this.a=null},
fL:function fL(){},
is:function is(){},
c5:function c5(){this.a=null},
hM:function hM(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hO:function hO(a){this.a=a
this.b=null},
hP:function hP(a){this.a=a
this.b=null},
hQ:function hQ(a){this.a=a
this.b=null},
aU:function aU(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
j0:function j0(a){this.a=a},
j_:function j_(a){this.a=a},
iR:function iR(a){this.a=a
this.c=this.b=null},
iS:function iS(){this.d=this.c=this.b=null},
iT:function iT(a,b){this.a=a
this.b=b},
iU:function iU(a,b){this.a=a
this.b=b},
iV:function iV(){this.c=this.b=null},
iX:function iX(){},
iW:function iW(){},
iY:function iY(){},
hp:function hp(){},
iZ:function iZ(){this.b=null}}
var w=[C,H,J,P,W,T,R,O,E,Z,D,X,V,U,M,A,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kJ.prototype={}
J.a.prototype={
t:function(a,b){return a===b},
gI:function(a){return H.c7(a)},
h:function(a){return"Instance of '"+H.e(H.c8(a))+"'"}}
J.fG.prototype={
h:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$iaA:1}
J.d_.prototype={
t:function(a,b){return null==b},
h:function(a){return"null"},
gI:function(a){return 0}}
J.d0.prototype={
gI:function(a){return 0},
h:function(a){return String(a)}}
J.hu.prototype={}
J.bA.prototype={}
J.b8.prototype={
h:function(a){var u=a[$.mv()]
if(u==null)return this.eq(a)
return"JavaScript function for "+H.e(J.a4(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.b6.prototype={
e2:function(a,b){if(!!a.fixed$length)H.t(P.y("removeAt"))
if(b<0||b>=a.length)throw H.d(P.dg(b,null))
return a.splice(b,1)[0]},
L:function(a,b){var u
if(!!a.fixed$length)H.t(P.y("remove"))
for(u=0;u<a.length;++u)if(J.E(a[u],b)){a.splice(u,1)
return!0}return!1},
ad:function(a,b){var u,t
if(!!a.fixed$length)H.t(P.y("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.p)(b),++t)a.push(b[t])},
H:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.d(P.aD(a))}},
k:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.b(r,u)
r[u]=t}return r.join(b)},
hT:function(a){return this.k(a,"")},
hM:function(a,b,c){var u,t,s=a.length
for(u=b,t=0;t<s;++t){u=c.$2(u,a[t])
if(a.length!==s)throw H.d(P.aD(a))}return u},
hN:function(a,b,c){return this.hM(a,b,c,null)},
hL:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.d(P.aD(a))}throw H.d(H.fE())},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
em:function(a,b,c){if(b<0||b>a.length)throw H.d(P.Z(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.d(P.Z(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.cC(a,0)])
return H.c(a.slice(b,c),[H.cC(a,0)])},
ghK:function(a){if(a.length>0)return a[0]
throw H.d(H.fE())},
gaz:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.d(H.fE())},
dk:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.d(P.aD(a))}return!1},
bA:function(a,b){if(!!a.immutable$list)H.t(P.y("sort"))
H.dm(a,0,a.length-1,b)},
V:function(a,b){var u
for(u=0;u<a.length;++u)if(J.E(a[u],b))return!0
return!1},
h:function(a){return P.kG(a,"[","]")},
gU:function(a){return new J.a5(a,a.length)},
gI:function(a){return H.c7(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.t(P.y("set length"))
if(b<0)throw H.d(P.Z(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){if(b>=a.length||b<0)throw H.d(H.bH(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.t(P.y("indexed set"))
if(b>=a.length||b<0)throw H.d(H.bH(a,b))
a[b]=c},
$ih:1,
$io:1}
J.kI.prototype={}
J.a5.prototype={
gJ:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.d(H.p(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bW.prototype={
ht:function(a,b){var u
if(typeof b!=="number")throw H.d(H.ao(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbq(b)
if(this.gbq(a)===u)return 0
if(this.gbq(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbq:function(a){return a===0?1/a<0:a<0},
im:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.d(P.y(""+a+".toInt()"))},
ce:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.d(P.y(""+a+".floor()"))},
a4:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.y(""+a+".round()"))},
ea:function(a,b){var u
if(b>20)throw H.d(P.Z(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbq(a))return"-"+u
return u},
bf:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.d(P.Z(b,2,36,"radix",null))
u=a.toString(b)
if(C.a.X(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.t(P.y("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.b(t,1)
u=t[1]
if(3>=s)return H.b(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.a.u("0",r)},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gI:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
bg:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
es:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d9(a,b)},
ac:function(a,b){return(a|0)===a?a/b|0:this.d9(a,b)},
d9:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.d(P.y("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
aT:function(a,b){var u
if(a>0)u=this.d8(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
h9:function(a,b){if(b<0)throw H.d(H.ao(b))
return this.d8(a,b)},
d8:function(a,b){return b>31?0:a>>>b},
$iM:1,
$iad:1}
J.cZ.prototype={$iw:1}
J.cY.prototype={}
J.b7.prototype={
X:function(a,b){if(b<0)throw H.d(H.bH(a,b))
if(b>=a.length)H.t(H.bH(a,b))
return a.charCodeAt(b)},
E:function(a,b){if(b>=a.length)throw H.d(H.bH(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(typeof b!=="string")throw H.d(P.lg(b,null,null))
return a+b},
aX:function(a,b,c,d){var u,t
c=P.be(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
aa:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.Z(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a8:function(a,b){return this.aa(a,b,0)},
v:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.ao(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.S()
if(b<0)throw H.d(P.dg(b,null))
if(b>c)throw H.d(P.dg(b,null))
if(c>a.length)throw H.d(P.dg(c,null))
return a.substring(b,c)},
ae:function(a,b){return this.v(a,b,null)},
iq:function(a){return a.toLowerCase()},
u:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.M)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
al:function(a,b){var u=b-a.length
if(u<=0)return a
return this.u(" ",u)+a},
bp:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.Z(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
dS:function(a,b){return this.bp(a,b,0)},
h:function(a){return a},
gI:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$ik:1}
H.m.prototype={
gl:function(a){return this.a.length},
i:function(a,b){return C.a.X(this.a,b)},
$ar:function(){return[P.w]},
$ah:function(){return[P.w]},
$ao:function(){return[P.w]}}
H.fi.prototype={}
H.d4.prototype={
gU:function(a){return new H.bY(this,this.gl(this))},
by:function(a,b){return this.ep(0,b)}}
H.bY.prototype={
gJ:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=J.cz(s),q=r.gl(s)
if(t.b!==q)throw H.d(P.aD(s))
u=t.c
if(u>=q){t.d=null
return!1}t.d=r.K(s,u);++t.c
return!0}}
H.fW.prototype={
gU:function(a){return new H.fX(J.b0(this.a),this.b)},
gl:function(a){return J.af(this.a)},
K:function(a,b){return this.b.$1(J.eL(this.a,b))},
$ah:function(a,b){return[b]}}
H.fX.prototype={
A:function(){var u=this,t=u.b
if(t.A()){u.a=u.c.$1(t.gJ(t))
return!0}u.a=null
return!1},
gJ:function(a){return this.a}}
H.fY.prototype={
gl:function(a){return J.af(this.a)},
K:function(a,b){return this.b.$1(J.eL(this.a,b))},
$ad4:function(a,b){return[b]},
$ah:function(a,b){return[b]}}
H.cj.prototype={
gU:function(a){return new H.j2(J.b0(this.a),this.b)}}
H.j2.prototype={
A:function(){var u,t
for(u=this.a,t=this.b;u.A();)if(t.$1(u.gJ(u)))return!0
return!1},
gJ:function(a){var u=this.a
return u.gJ(u)}}
H.cV.prototype={}
H.iD.prototype={
m:function(a,b,c){throw H.d(P.y("Cannot modify an unmodifiable list"))}}
H.dD.prototype={}
H.f3.prototype={
h:function(a){return P.kM(this)},
m:function(a,b,c){return H.n2()},
$iR:1}
H.f4.prototype={
gl:function(a){return this.a},
bn:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
i:function(a,b){if(!this.bn(0,b))return
return this.cX(b)},
cX:function(a){return this.b[a]},
H:function(a,b){var u,t,s,r=this.c
for(u=r.length,t=0;t<u;++t){s=r[t]
b.$2(s,this.cX(s))}}}
H.iq.prototype={
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
H.hq.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fI.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.iC.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.ks.prototype={
$1:function(a){if(!!J.P(a).$ibq)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:8}
H.ej.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bO.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
gir:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.i8.prototype={}
H.i0.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.eK(u)+"'"}}
H.bL.prototype={
t:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bL))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gI:function(a){var u,t=this.c
if(t==null)u=H.c7(this.a)
else u=typeof t!=="object"?J.cH(t):H.c7(t)
return(u^H.c7(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.c8(u))+"'")}}
H.eZ.prototype={
h:function(a){return this.a}}
H.hJ.prototype={
h:function(a){return"RuntimeError: "+H.e(this.a)}}
H.O.prototype={
gl:function(a){return this.a},
ghS:function(a){return this.a===0},
ga9:function(a){return new H.fN(this,[H.cC(this,0)])},
bn:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cU(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cU(t,b)}else return s.hP(b)},
hP:function(a){var u=this,t=u.d
if(t==null)return!1
return u.ci(u.bI(t,u.cg(a)),a)>=0},
i:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bj(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bj(r,b)
s=t==null?null:t.b
return s}else return q.hQ(b)},
hQ:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bI(r,s.cg(a))
t=s.ci(u,a)
if(t<0)return
return u[t].b},
m:function(a,b,c){var u,t,s=this
if(typeof b==="string"){u=s.b
s.cP(u==null?s.b=s.bQ():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cP(t==null?s.c=s.bQ():t,b,c)}else s.hR(b,c)},
hR:function(a,b){var u,t,s,r=this,q=r.d
if(q==null)q=r.d=r.bQ()
u=r.cg(a)
t=r.bI(q,u)
if(t==null)r.bW(q,u,[r.bR(a,b)])
else{s=r.ci(t,a)
if(s>=0)t[s].b=b
else t.push(r.bR(a,b))}},
H:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.d(P.aD(u))
t=t.c}},
cP:function(a,b,c){var u=this.bj(a,b)
if(u==null)this.bW(a,b,this.bR(b,c))
else u.b=c},
f_:function(){this.r=this.r+1&67108863},
bR:function(a,b){var u,t=this,s=new H.fM(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.f_()
return s},
cg:function(a){return J.cH(a)&0x3ffffff},
ci:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.E(a[t].a,b))return t
return-1},
h:function(a){return P.kM(this)},
bj:function(a,b){return a[b]},
bI:function(a,b){return a[b]},
bW:function(a,b,c){a[b]=c},
eT:function(a,b){delete a[b]},
cU:function(a,b){return this.bj(a,b)!=null},
bQ:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bW(t,u,t)
this.eT(t,u)
return t}}
H.fM.prototype={}
H.fN.prototype={
gl:function(a){return this.a.a},
gU:function(a){var u=this.a,t=new H.fO(u,u.r)
t.c=u.e
return t}}
H.fO.prototype={
gJ:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.aD(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.k3.prototype={
$1:function(a){return this.a(a)},
$S:8}
H.k4.prototype={
$2:function(a,b){return this.a(a,b)}}
H.k5.prototype={
$1:function(a){return this.a(a)}}
H.fH.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$inx:1}
H.c2.prototype={$ic2:1}
H.bb.prototype={$ibb:1}
H.d8.prototype={
gl:function(a){return a.length},
$iB:1,
$aB:function(){}}
H.c3.prototype={
i:function(a,b){H.az(b,a,a.length)
return a[b]},
m:function(a,b,c){H.az(b,a,a.length)
a[b]=c},
$ar:function(){return[P.M]},
$ih:1,
$ah:function(){return[P.M]},
$io:1,
$ao:function(){return[P.M]}}
H.d9.prototype={
m:function(a,b,c){H.az(b,a,a.length)
a[b]=c},
$ar:function(){return[P.w]},
$ih:1,
$ah:function(){return[P.w]},
$io:1,
$ao:function(){return[P.w]}}
H.hi.prototype={
i:function(a,b){H.az(b,a,a.length)
return a[b]}}
H.hj.prototype={
i:function(a,b){H.az(b,a,a.length)
return a[b]}}
H.hk.prototype={
i:function(a,b){H.az(b,a,a.length)
return a[b]}}
H.hl.prototype={
i:function(a,b){H.az(b,a,a.length)
return a[b]}}
H.hm.prototype={
i:function(a,b){H.az(b,a,a.length)
return a[b]}}
H.da.prototype={
gl:function(a){return a.length},
i:function(a,b){H.az(b,a,a.length)
return a[b]}}
H.c4.prototype={
gl:function(a){return a.length},
i:function(a,b){H.az(b,a,a.length)
return a[b]},
$ic4:1,
$ibz:1}
H.cn.prototype={}
H.co.prototype={}
H.cp.prototype={}
H.cq.prototype={}
P.j4.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:17}
P.j3.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.j5.prototype={
$0:function(){this.a.$0()}}
P.j6.prototype={
$0:function(){this.a.$0()}}
P.ep.prototype={
eF:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bG(new P.jB(this,b),0),a)
else throw H.d(P.y("`setTimeout()` not found."))},
eG:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bG(new P.jA(this,a,Date.now(),b),0),a)
else throw H.d(P.y("Periodic timer."))},
$idw:1}
P.jB.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.jA.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.es(u,q)}s.c=r
t.d.$1(s)}}
P.dM.prototype={}
P.dr.prototype={}
P.i3.prototype={}
P.dw.prototype={}
P.jK.prototype={}
P.jT.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dd():s
s=this.b
if(s==null)throw H.d(t)
u=H.d(t)
u.stack=s.h(0)
throw u}}
P.jk.prototype={
ii:function(a){var u,t,s,r=null
try{if(C.f===$.an){a.$0()
return}P.oB(r,r,this,a)}catch(s){u=H.ae(s)
t=H.l3(s)
P.m9(r,r,this,u,t)}},
ij:function(a,b){var u,t,s,r=null
try{if(C.f===$.an){a.$1(b)
return}P.oC(r,r,this,a,b)}catch(s){u=H.ae(s)
t=H.l3(s)
P.m9(r,r,this,u,t)}},
ik:function(a,b){return this.ij(a,b,null)},
hq:function(a){return new P.jl(this,a)},
dm:function(a,b){return new P.jm(this,a,b)}}
P.jl.prototype={
$0:function(){return this.a.ii(this.b)}}
P.jm.prototype={
$1:function(a){return this.a.ik(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jh.prototype={
gU:function(a){var u=new P.e0(this,this.r)
u.c=this.e
return u},
gl:function(a){return this.a},
V:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.eP(b)
return t}},
eP:function(a){var u=this.d
if(u==null)return!1
return this.bG(this.cY(u,a),a)>=0},
n:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cQ(u==null?s.b=P.kV():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cQ(t==null?s.c=P.kV():t,b)}else return s.eJ(0,b)},
eJ:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.kV()
u=s.cS(b)
t=r[u]
if(t==null)r[u]=[s.bD(b)]
else{if(s.bG(t,b)>=0)return!1
t.push(s.bD(b))}return!0},
L:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fW(this.c,b)
else return this.fV(0,b)},
fV:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cY(r,b)
t=s.bG(u,b)
if(t<0)return!1
s.da(u.splice(t,1)[0])
return!0},
cQ:function(a,b){if(a[b]!=null)return!1
a[b]=this.bD(b)
return!0},
fW:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.da(u)
delete a[b]
return!0},
cR:function(){this.r=1073741823&this.r+1},
bD:function(a){var u,t=this,s=new P.ji(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cR()
return s},
da:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cR()},
cS:function(a){return J.cH(a)&1073741823},
cY:function(a,b){return a[this.cS(b)]},
bG:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.E(a[t].a,b))return t
return-1}}
P.ji.prototype={}
P.e0.prototype={
gJ:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.aD(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fP.prototype={
$2:function(a,b){this.a.m(0,a,b)},
$S:3}
P.fQ.prototype={$ih:1,$io:1}
P.r.prototype={
gU:function(a){return new H.bY(a,this.gl(a))},
K:function(a,b){return this.i(a,b)},
ip:function(a,b){var u,t,s=this,r=H.c([],[H.oT(s,a,"r",0)])
C.b.sl(r,s.gl(a))
for(u=0;u<s.gl(a);++u){t=s.i(a,u)
if(u>=r.length)return H.b(r,u)
r[u]=t}return r},
io:function(a){return this.ip(a,!0)},
hI:function(a,b,c,d){var u
P.be(b,c,this.gl(a))
for(u=b;u<c;++u)this.m(a,u,d)},
h:function(a){return P.kG(a,"[","]")}}
P.fT.prototype={}
P.fU.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:3}
P.aI.prototype={
H:function(a,b){var u,t
for(u=J.b0(this.ga9(a));u.A();){t=u.gJ(u)
b.$2(t,this.i(a,t))}},
gl:function(a){return J.af(this.ga9(a))},
h:function(a){return P.kM(a)},
$iR:1}
P.jC.prototype={
m:function(a,b,c){throw H.d(P.y("Cannot modify unmodifiable map"))}}
P.fV.prototype={
i:function(a,b){return J.cG(this.a,b)},
m:function(a,b,c){J.ku(this.a,b,c)},
H:function(a,b){J.lc(this.a,b)},
gl:function(a){return J.af(this.a)},
h:function(a){return J.a4(this.a)},
$iR:1}
P.dE.prototype={}
P.jo.prototype={
ad:function(a,b){var u
for(u=J.b0(b);u.A();)this.n(0,u.gJ(u))},
h:function(a){return P.kG(this,"{","}")},
K:function(a,b){var u,t,s
P.lH(b,"index")
for(u=P.nW(this,this.r),t=0;u.A();){s=u.d
if(b===t)return s;++t}throw H.d(P.K(b,this,"index",null,t))},
$ih:1}
P.e1.prototype={}
P.ev.prototype={}
P.eV.prototype={
hW:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.be(a0,a1,b.length)
u=$.mK()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.a.E(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.k2(C.a.E(b,n))
j=H.k2(C.a.E(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.b(u,i)
h=u[i]
if(h>=0){i=C.a.X("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.S("")
g=r.a+=C.a.v(b,s,t)
r.a=g+H.bw(m)
s=n
continue}}throw H.d(P.Q("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.a.v(b,s,a1)
f=g.length
if(q>=0)P.lh(b,p,a1,q,o,f)
else{e=C.c.bg(f-1,4)+1
if(e===1)throw H.d(P.Q(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.a.aX(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.lh(b,p,a1,q,o,d)
else{e=C.c.bg(d,4)
if(e===1)throw H.d(P.Q(c,b,a1))
if(e>1)b=C.a.aX(b,a1,a1,e===2?"==":"=")}return b}}
P.eW.prototype={}
P.f0.prototype={}
P.f5.prototype={}
P.fk.prototype={}
P.fB.prototype={
h:function(a){return this.a}}
P.fA.prototype={
eQ:function(a,b,c){var u,t,s,r,q,p,o=null
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=o;r<c;++r){if(r>=a.length)return H.b(a,r)
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
default:p=o}if(p!=null){if(q==null)q=new P.S("")
if(r>b)q.a+=C.a.v(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.mV(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.iL.prototype={
ghH:function(){return C.N}}
P.iN.prototype={
c4:function(a){var u,t,s=P.be(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.jI(u)
if(t.eV(a,0,s)!==s)t.dd(J.mR(a,s-1),0)
return new Uint8Array(u.subarray(0,H.oc(0,t.b,u.length)))}}
P.jI.prototype={
dd:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
eV:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.a.X(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.a.E(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dd(r,C.a.E(a,p)))s=p}else if(r<=2047){q=n.b
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
P.iM.prototype={
c4:function(a){var u,t,s,r,q,p,o,n,m=P.nJ(!1,a,0,null)
if(m!=null)return m
u=P.be(0,null,J.af(a))
t=P.mb(a,0,u)
if(t>0){s=P.cb(a,0,t)
if(t===u)return s
r=new P.S(s)
q=t
p=!1}else{q=0
r=null
p=!0}if(r==null)r=new P.S("")
o=new P.jH(!1,r)
o.c=p
o.hu(a,q,u)
if(o.e>0){H.t(P.Q("Unfinished UTF-8 octet sequence",a,u))
r.a+=H.bw(65533)
o.f=o.e=o.d=0}n=r.a
return n.charCodeAt(0)==0?n:n}}
P.jH.prototype={
hu:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=this,k="Bad UTF-8 encoding 0x",j=l.d,i=l.e,h=l.f
l.f=l.e=l.d=0
$label0$0:for(u=J.cz(a),t=l.b,s=b;!0;s=n){$label1$1:if(i>0){do{if(s===c)break $label0$0
r=u.i(a,s)
if(typeof r!=="number")return r.am()
if((r&192)!==128){q=P.Q(k+C.c.bf(r,16),a,s)
throw H.d(q)}else{j=(j<<6|r&63)>>>0;--i;++s}}while(i>0)
q=h-1
if(q<0||q>=4)return H.b(C.v,q)
if(j<=C.v[q]){q=P.Q("Overlong encoding of 0x"+C.c.bf(j,16),a,s-h-1)
throw H.d(q)}if(j>1114111){q=P.Q("Character outside valid Unicode range: 0x"+C.c.bf(j,16),a,s-h-1)
throw H.d(q)}if(!l.c||j!==65279)t.a+=H.bw(j)
l.c=!1}for(q=s<c;q;){p=P.mb(a,s,c)
if(p>0){l.c=!1
o=s+p
t.a+=P.cb(a,s,o)
if(o===c)break}else o=s
n=o+1
r=u.i(a,o)
if(typeof r!=="number")return r.S()
if(r<0){m=P.Q("Negative UTF-8 code unit: -0x"+C.c.bf(-r,16),a,n-1)
throw H.d(m)}else{if((r&224)===192){j=r&31
i=1
h=1
continue $label0$0}if((r&240)===224){j=r&15
i=2
h=2
continue $label0$0}if((r&248)===240&&r<245){j=r&7
i=3
h=3
continue $label0$0}m=P.Q(k+C.c.bf(r,16),a,n-1)
throw H.d(m)}}break $label0$0}if(i>0){l.d=j
l.e=i
l.f=h}}}
P.aA.prototype={}
P.a8.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.a8&&this.a===b.a&&!0},
gI:function(a){var u=this.a
return(u^C.c.aT(u,30))&1073741823},
h:function(a){var u=this,t=P.n3(H.nt(u)),s=P.cQ(H.nr(u)),r=P.cQ(H.nn(u)),q=P.cQ(H.no(u)),p=P.cQ(H.nq(u)),o=P.cQ(H.ns(u)),n=P.n4(H.np(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.M.prototype={}
P.b2.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.b2&&this.a===b.a},
gI:function(a){return C.c.gI(this.a)},
h:function(a){var u,t,s,r=new P.fh(),q=this.a
if(q<0)return"-"+new P.b2(0-q).h(0)
u=r.$1(C.c.ac(q,6e7)%60)
t=r.$1(C.c.ac(q,1e6)%60)
s=new P.fg().$1(q%1e6)
return""+C.c.ac(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
P.fg.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.fh.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bq.prototype={}
P.dd.prototype={
h:function(a){return"Throw of null."}}
P.ak.prototype={
gbF:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbE:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbF()+o+u
if(!q.a)return t
s=q.gbE()
r=P.kF(q.b)
return t+s+": "+r}}
P.bx.prototype={
gbF:function(){return"RangeError"},
gbE:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.fD.prototype={
gbF:function(){return"RangeError"},
gbE:function(){var u,t=this.b
if(typeof t!=="number")return t.S()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gl:function(a){return this.f}}
P.iE.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.iA.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.ca.prototype={
h:function(a){return"Bad state: "+this.a}}
P.f2.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.kF(u)+"."}}
P.ht.prototype={
h:function(a){return"Out of Memory"},
$ibq:1}
P.dp.prototype={
h:function(a){return"Stack Overflow"},
$ibq:1}
P.fa.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dU.prototype={
h:function(a){return"Exception: "+this.a}}
P.fu.prototype={
h:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.a.v(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.a.E(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.a.X(f,q)
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
k=""}j=C.a.v(f,m,n)
return h+l+j+k+"\n"+C.a.u(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.e(g)+")"):h}}
P.fw.prototype={}
P.w.prototype={}
P.h.prototype={
by:function(a,b){return new H.cj(this,b,[H.l2(this,"h",0)])},
gl:function(a){var u,t=this.gU(this)
for(u=0;t.A();)++u
return u},
gaM:function(a){var u,t=this.gU(this)
if(!t.A())throw H.d(H.fE())
u=t.gJ(t)
if(t.A())throw H.d(H.n9())
return u},
K:function(a,b){var u,t,s
P.lH(b,"index")
for(u=this.gU(this),t=0;u.A();){s=u.gJ(u)
if(b===t)return s;++t}throw H.d(P.K(b,this,"index",null,t))},
h:function(a){return P.n8(this,"(",")")}}
P.fF.prototype={}
P.o.prototype={$ih:1}
P.R.prototype={}
P.bc.prototype={
gI:function(a){return P.a2.prototype.gI.call(this,this)},
h:function(a){return"null"}}
P.ad.prototype={}
P.a2.prototype={constructor:P.a2,$ia2:1,
t:function(a,b){return this===b},
gI:function(a){return H.c7(this)},
h:function(a){return"Instance of '"+H.e(H.c8(this))+"'"},
toString:function(){return this.h(this)}}
P.k.prototype={}
P.S.prototype={
gl:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
P.iJ.prototype={
$2:function(a,b){var u,t,s,r=J.cA(b).dS(b,"=")
if(r===-1){if(b!=="")J.ku(a,P.kZ(b,0,b.length,this.a,!0),"")}else if(r!==0){u=C.a.v(b,0,r)
t=C.a.ae(b,r+1)
s=this.a
J.ku(a,P.kZ(u,0,u.length,s,!0),P.kZ(t,0,t.length,s,!0))}return a}}
P.iG.prototype={
$2:function(a,b){throw H.d(P.Q("Illegal IPv4 address, "+a,this.a,b))}}
P.iH.prototype={
$2:function(a,b){throw H.d(P.Q("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.iI.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.eJ(C.a.v(this.b,a,b),null,16)
if(typeof u!=="number")return u.S()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u}}
P.bB.prototype={
ged:function(){return this.b},
gcf:function(a){var u=this.c
if(u==null)return""
if(C.a.a8(u,"["))return C.a.v(u,1,u.length-1)
return u},
gbt:function(a){var u=this.d
if(u==null)return P.m2(this.a)
return u},
gct:function(a){var u=this.f
return u==null?"":u},
gdN:function(){var u=this.r
return u==null?"":u},
e4:function(a,b){var u,t,s,r=this,q=r.a,p=q==="file",o=r.b,n=r.d,m=r.c
if(!(m!=null))m=o.length!==0||n!=null||p?"":null
u=r.e
if(!p)t=m!=null&&u.length!==0
else t=!0
if(t&&!C.a.a8(u,"/"))u="/"+u
s=P.kX(null,0,0,b)
return new P.bB(q,o,m,n,u,s,r.r)},
gcu:function(){var u,t=this.Q
if(t==null){t=this.f
u=P.k
u=this.Q=new P.dE(P.lU(t==null?"":t),[u,u])
t=u}return t},
gdO:function(){return this.c!=null},
gdR:function(){return this.f!=null},
gdP:function(){return this.r!=null},
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
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.P(b).$ikR)if(s.a==b.gbz())if(s.c!=null===b.gdO())if(s.b==b.ged())if(s.gcf(s)==b.gcf(b))if(s.gbt(s)==b.gbt(b))if(s.e===b.ge0(b)){u=s.f
t=u==null
if(!t===b.gdR()){if(t)u=""
if(u===b.gct(b)){u=s.r
t=u==null
if(!t===b.gdP()){if(t)u=""
u=u===b.gdN()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gI:function(a){var u=this.z
return u==null?this.z=C.a.gI(this.h(0)):u},
$ikR:1,
gbz:function(){return this.a},
ge0:function(a){return this.e}}
P.jD.prototype={
$1:function(a){throw H.d(P.Q("Invalid port",this.a,this.b+1))}}
P.jE.prototype={
$1:function(a){return P.ew(C.X,a,C.e,!1)}}
P.jG.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.e(P.ew(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.e(P.ew(C.h,b,C.e,!0))}}}
P.jF.prototype={
$2:function(a,b){var u,t
if(b==null||typeof b==="string")this.a.$2(a,b)
else for(u=J.b0(b),t=this.a;u.A();)t.$2(a,u.gJ(u))}}
P.iF.prototype={
gec:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.b(o,0)
u=q.a
o=o[0]+1
t=C.a.bp(u,"?",o)
s=u.length
if(t>=0){r=P.cv(u,t+1,s,C.l,!1)
s=t}else r=p
return q.c=new P.ja("data",p,p,p,P.cv(u,o,s,C.z,!1),r,p)},
h:function(a){var u,t=this.b
if(0>=t.length)return H.b(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.jO.prototype={
$1:function(a){return new Uint8Array(96)}}
P.jN.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.b(u,a)
u=u[a]
J.mS(u,0,96,b)
return u},
$S:18}
P.jP.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.a.E(b,s)^96
if(r>=t)return H.b(a,r)
a[r]=c}}}
P.jQ.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.a.E(b,0),t=C.a.E(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.b(a,r)
a[r]=c}}}
P.jr.prototype={
gdO:function(){return this.c>0},
gdQ:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.C()
t=this.e
if(typeof t!=="number")return H.v(t)
t=u+1<t
u=t}else u=!1
return u},
gdR:function(){var u=this.f
if(typeof u!=="number")return u.S()
return u<this.r},
gdP:function(){return this.r<this.a.length},
gcZ:function(){return this.b===4&&C.a.a8(this.a,"http")},
gd_:function(){return this.b===5&&C.a.a8(this.a,"https")},
gbz:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gcZ())q=t.x="http"
else if(t.gd_()){t.x="https"
q="https"}else if(q===4&&C.a.a8(t.a,s)){t.x=s
q=s}else if(q===7&&C.a.a8(t.a,r)){t.x=r
q=r}else{q=C.a.v(t.a,0,q)
t.x=q}return q},
ged:function(){var u=this.c,t=this.b+3
return u>t?C.a.v(this.a,t,u-1):""},
gcf:function(a){var u=this.c
return u>0?C.a.v(this.a,u,this.d):""},
gbt:function(a){var u,t=this
if(t.gdQ()){u=t.d
if(typeof u!=="number")return u.C()
return P.eJ(C.a.v(t.a,u+1,t.e),null,null)}if(t.gcZ())return 80
if(t.gd_())return 443
return 0},
ge0:function(a){return C.a.v(this.a,this.e,this.f)},
gct:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.S()
return u<t?C.a.v(this.a,u+1,t):""},
gdN:function(){var u=this.r,t=this.a
return u<t.length?C.a.ae(t,u+1):""},
gcu:function(){var u=this,t=u.f
if(typeof t!=="number")return t.S()
if(t>=u.r)return C.Y
t=P.k
return new P.dE(P.lU(u.gct(u)),[t,t])},
e4:function(a,b){var u,t,s,r,q,p=this,o=null,n=p.gbz(),m=n==="file",l=p.c,k=l>0?C.a.v(p.a,p.b+3,l):"",j=p.gdQ()?p.gbt(p):o
l=p.c
if(l>0)u=C.a.v(p.a,l,p.d)
else u=k.length!==0||j!=null||m?"":o
l=p.a
t=C.a.v(l,p.e,p.f)
if(!m)s=u!=null&&t.length!==0
else s=!0
if(s&&!C.a.a8(t,"/"))t="/"+t
r=P.kX(o,0,0,b)
s=p.r
q=s<l.length?C.a.ae(l,s+1):o
return new P.bB(n,k,u,j,t,r,q)},
gI:function(a){var u=this.y
return u==null?this.y=C.a.gI(this.a):u},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.P(b).$ikR&&this.a===b.h(0)},
h:function(a){return this.a},
$ikR:1}
P.ja.prototype={}
W.n.prototype={}
W.eM.prototype={
gl:function(a){return a.length}}
W.eN.prototype={
h:function(a){return String(a)}}
W.eO.prototype={
h:function(a){return String(a)}}
W.bm.prototype={$ibm:1}
W.bn.prototype={$ibn:1}
W.bo.prototype={
cE:function(a,b,c){if(c!=null)return a.getContext(b,P.oL(c))
return a.getContext(b)},
eg:function(a,b){return this.cE(a,b,null)},
$ibo:1}
W.b1.prototype={
gl:function(a){return a.length}}
W.f6.prototype={
gl:function(a){return a.length}}
W.H.prototype={$iH:1}
W.bP.prototype={
gl:function(a){return a.length}}
W.f7.prototype={}
W.ag.prototype={}
W.ar.prototype={}
W.f8.prototype={
gl:function(a){return a.length}}
W.f9.prototype={
gl:function(a){return a.length}}
W.fc.prototype={
gl:function(a){return a.length}}
W.al.prototype={$ial:1}
W.fd.prototype={
h:function(a){return String(a)}}
W.cS.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[[P.ab,P.ad]]},
$ar:function(){return[[P.ab,P.ad]]},
$ih:1,
$ah:function(){return[[P.ab,P.ad]]},
$io:1,
$ao:function(){return[[P.ab,P.ad]]}}
W.cT.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gav(a))+" x "+H.e(this.gaq(a))},
t:function(a,b){var u
if(b==null)return!1
u=J.P(b)
if(!u.$iab)return!1
return a.left===u.gbr(b)&&a.top===u.gbw(b)&&this.gav(a)===u.gav(b)&&this.gaq(a)===u.gaq(b)},
gI:function(a){return W.m0(C.d.gI(a.left),C.d.gI(a.top),C.d.gI(this.gav(a)),C.d.gI(this.gaq(a)))},
gdn:function(a){return a.bottom},
gaq:function(a){return a.height},
gbr:function(a){return a.left},
gcz:function(a){return a.right},
gbw:function(a){return a.top},
gav:function(a){return a.width},
$iab:1,
$aab:function(){return[P.ad]}}
W.fe.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[P.k]},
$ar:function(){return[P.k]},
$ih:1,
$ah:function(){return[P.k]},
$io:1,
$ao:function(){return[P.k]}}
W.ff.prototype={
gl:function(a){return a.length}}
W.j8.prototype={
gl:function(a){return this.b.length},
i:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
m:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.b(u,b)
this.a.replaceChild(c,u[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gU:function(a){var u=this.io(this)
return new J.a5(u,u.length)},
$ar:function(){return[W.T]},
$ah:function(){return[W.T]},
$ao:function(){return[W.T]}}
W.T.prototype={
ghp:function(a){return new W.jb(a)},
gc3:function(a){return new W.j8(a,a.children)},
gdr:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.S()
if(s<0)s=-s*0
if(typeof r!=="number")return r.S()
if(r<0)r=-r*0
return new P.ab(u,t,s,r,[P.ad])},
h:function(a){return a.localName},
aj:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.ln
if(u==null){u=H.c([],[W.aM])
t=new W.dc(u)
u.push(W.m_(null))
u.push(W.m1())
$.ln=t
d=t}else d=u
u=$.lm
if(u==null){u=new W.ex(d)
$.lm=u
c=u}else{u.a=d
c=u}}if($.aE==null){u=document
t=u.implementation.createHTMLDocument("")
$.aE=t
$.kD=t.createRange()
s=$.aE.createElement("base")
s.href=u.baseURI
$.aE.head.appendChild(s)}u=$.aE
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.aE
if(!!this.$ibn)r=u.body
else{r=u.createElement(a.tagName)
$.aE.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.b.V(C.V,a.tagName)){$.kD.selectNodeContents(r)
q=$.kD.createContextualFragment(b)}else{r.innerHTML=b
q=$.aE.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.aE.body
if(r==null?u!=null:r!==u)J.le(r)
c.cF(q)
document.adoptNode(q)
return q},
hx:function(a,b,c){return this.aj(a,b,c,null)},
ei:function(a,b){a.textContent=null
a.appendChild(this.aj(a,b,null,null))},
$iT:1,
ge7:function(a){return a.tagName}}
W.fj.prototype={
$1:function(a){return!!J.P(a).$iT}}
W.i.prototype={$ii:1}
W.f.prototype={
hh:function(a,b,c,d){if(c!=null)this.eK(a,b,c,!1)},
eK:function(a,b,c,d){return a.addEventListener(b,H.bG(c,1),!1)}}
W.as.prototype={$ias:1}
W.bS.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.as]},
$ar:function(){return[W.as]},
$ih:1,
$ah:function(){return[W.as]},
$io:1,
$ao:function(){return[W.as]},
$ibS:1}
W.fp.prototype={
gl:function(a){return a.length}}
W.ft.prototype={
gl:function(a){return a.length}}
W.aG.prototype={$iaG:1}
W.fz.prototype={
gl:function(a){return a.length}}
W.bU.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.F]},
$ar:function(){return[W.F]},
$ih:1,
$ah:function(){return[W.F]},
$io:1,
$ao:function(){return[W.F]}}
W.aH.prototype={$iaH:1,
gds:function(a){return a.data}}
W.bV.prototype={$ibV:1}
W.bt.prototype={$ibt:1}
W.fR.prototype={
h:function(a){return String(a)}}
W.hb.prototype={
gl:function(a){return a.length}}
W.c0.prototype={$ic0:1}
W.hc.prototype={
i:function(a,b){return P.aW(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aW(u.value[1]))}},
ga9:function(a){var u=H.c([],[P.k])
this.H(a,new W.hd(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.d(P.y("Not supported"))},
$iR:1,
$aR:function(){return[P.k,null]}}
W.hd.prototype={
$2:function(a,b){return this.a.push(a)}}
W.he.prototype={
i:function(a,b){return P.aW(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aW(u.value[1]))}},
ga9:function(a){var u=H.c([],[P.k])
this.H(a,new W.hf(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.d(P.y("Not supported"))},
$iR:1,
$aR:function(){return[P.k,null]}}
W.hf.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aK.prototype={$iaK:1}
W.hg.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aK]},
$ar:function(){return[W.aK]},
$ih:1,
$ah:function(){return[W.aK]},
$io:1,
$ao:function(){return[W.aK]}}
W.av.prototype={$iav:1}
W.a3.prototype={
gaM:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.d(P.lK("No elements"))
if(t>1)throw H.d(P.lK("More than one element"))
return u.firstChild},
ad:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
m:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.b(t,b)
u.replaceChild(c,t[b])},
gU:function(a){var u=this.a.childNodes
return new W.cW(u,u.length)},
gl:function(a){return this.a.childNodes.length},
i:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
$ar:function(){return[W.F]},
$ah:function(){return[W.F]},
$ao:function(){return[W.F]}}
W.F.prototype={
ib:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
ig:function(a,b){var u,t
try{u=a.parentNode
J.mP(u,b,a)}catch(t){H.ae(t)}return a},
h:function(a){var u=a.nodeValue
return u==null?this.eo(a):u},
fY:function(a,b,c){return a.replaceChild(b,c)},
$iF:1}
W.db.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.F]},
$ar:function(){return[W.F]},
$ih:1,
$ah:function(){return[W.F]},
$io:1,
$ao:function(){return[W.F]}}
W.aN.prototype={$iaN:1,
gl:function(a){return a.length}}
W.hw.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aN]},
$ar:function(){return[W.aN]},
$ih:1,
$ah:function(){return[W.aN]},
$io:1,
$ao:function(){return[W.aN]}}
W.hH.prototype={
i:function(a,b){return P.aW(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aW(u.value[1]))}},
ga9:function(a){var u=H.c([],[P.k])
this.H(a,new W.hI(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.d(P.y("Not supported"))},
$iR:1,
$aR:function(){return[P.k,null]}}
W.hI.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hK.prototype={
gl:function(a){return a.length}}
W.aP.prototype={$iaP:1}
W.hX.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aP]},
$ar:function(){return[W.aP]},
$ih:1,
$ah:function(){return[W.aP]},
$io:1,
$ao:function(){return[W.aP]}}
W.aQ.prototype={$iaQ:1}
W.hY.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aQ]},
$ar:function(){return[W.aQ]},
$ih:1,
$ah:function(){return[W.aQ]},
$io:1,
$ao:function(){return[W.aQ]}}
W.aR.prototype={$iaR:1,
gl:function(a){return a.length}}
W.i1.prototype={
i:function(a,b){return a.getItem(b)},
m:function(a,b,c){a.setItem(b,c)},
H:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga9:function(a){var u=H.c([],[P.k])
this.H(a,new W.i2(u))
return u},
gl:function(a){return a.length},
$iR:1,
$aR:function(){return[P.k,P.k]}}
W.i2.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aw.prototype={$iaw:1}
W.ds.prototype={
aj:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bB(a,b,c,d)
u=W.n5("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.a3(t).ad(0,new W.a3(u))
return t}}
W.i5.prototype={
aj:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bB(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.aj(u.createElement("table"),b,c,d)
u.toString
u=new W.a3(u)
s=u.gaM(u)
s.toString
u=new W.a3(s)
r=u.gaM(u)
t.toString
r.toString
new W.a3(t).ad(0,new W.a3(r))
return t}}
W.i6.prototype={
aj:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bB(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.aj(u.createElement("table"),b,c,d)
u.toString
u=new W.a3(u)
s=u.gaM(u)
t.toString
s.toString
new W.a3(t).ad(0,new W.a3(s))
return t}}
W.cc.prototype={$icc:1}
W.aS.prototype={$iaS:1}
W.ax.prototype={$iax:1}
W.i9.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.ax]},
$ar:function(){return[W.ax]},
$ih:1,
$ah:function(){return[W.ax]},
$io:1,
$ao:function(){return[W.ax]}}
W.ia.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aS]},
$ar:function(){return[W.aS]},
$ih:1,
$ah:function(){return[W.aS]},
$io:1,
$ao:function(){return[W.aS]}}
W.ii.prototype={
gl:function(a){return a.length}}
W.aT.prototype={$iaT:1}
W.by.prototype={$iby:1}
W.im.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aT]},
$ar:function(){return[W.aT]},
$ih:1,
$ah:function(){return[W.aT]},
$io:1,
$ao:function(){return[W.aT]}}
W.io.prototype={
gl:function(a){return a.length}}
W.bg.prototype={}
W.iK.prototype={
h:function(a){return String(a)}}
W.j1.prototype={
gl:function(a){return a.length}}
W.bi.prototype={
ghA:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.y("deltaY is not supported"))},
ghz:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.y("deltaX is not supported"))},
$ibi:1}
W.ck.prototype={
fZ:function(a,b){return a.requestAnimationFrame(H.bG(b,1))},
eU:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.j9.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.H]},
$ar:function(){return[W.H]},
$ih:1,
$ah:function(){return[W.H]},
$io:1,
$ao:function(){return[W.H]}}
W.dP.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
t:function(a,b){var u
if(b==null)return!1
u=J.P(b)
if(!u.$iab)return!1
return a.left===u.gbr(b)&&a.top===u.gbw(b)&&a.width===u.gav(b)&&a.height===u.gaq(b)},
gI:function(a){return W.m0(C.d.gI(a.left),C.d.gI(a.top),C.d.gI(a.width),C.d.gI(a.height))},
gaq:function(a){return a.height},
gav:function(a){return a.width}}
W.je.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aG]},
$ar:function(){return[W.aG]},
$ih:1,
$ah:function(){return[W.aG]},
$io:1,
$ao:function(){return[W.aG]}}
W.e6.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.F]},
$ar:function(){return[W.F]},
$ih:1,
$ah:function(){return[W.F]},
$io:1,
$ao:function(){return[W.F]}}
W.js.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aR]},
$ar:function(){return[W.aR]},
$ih:1,
$ah:function(){return[W.aR]},
$io:1,
$ao:function(){return[W.aR]}}
W.jw.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aw]},
$ar:function(){return[W.aw]},
$ih:1,
$ah:function(){return[W.aw]},
$io:1,
$ao:function(){return[W.aw]}}
W.j7.prototype={
H:function(a,b){var u,t,s,r,q
for(u=this.ga9(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.p)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga9:function(a){var u,t,s,r=this.a.attributes,q=H.c([],[P.k])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.b(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q},
$aR:function(){return[P.k,P.k]}}
W.jb.prototype={
i:function(a,b){return this.a.getAttribute(b)},
m:function(a,b,c){this.a.setAttribute(b,c)},
gl:function(a){return this.ga9(this).length}}
W.jc.prototype={}
W.jd.prototype={
$1:function(a){return this.a.$1(a)}}
W.cl.prototype={
ey:function(a){var u
if($.cm.ghS($.cm)){for(u=0;u<262;++u)$.cm.m(0,C.U[u],W.oV())
for(u=0;u<12;++u)$.cm.m(0,C.p[u],W.oW())}},
aU:function(a){return $.mL().V(0,W.bQ(a))},
ay:function(a,b,c){var u=$.cm.i(0,H.e(W.bQ(a))+"::"+b)
if(u==null)u=$.cm.i(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$iaM:1}
W.J.prototype={
gU:function(a){return new W.cW(a,this.gl(a))}}
W.dc.prototype={
aU:function(a){return C.b.dk(this.a,new W.ho(a))},
ay:function(a,b,c){return C.b.dk(this.a,new W.hn(a,b,c))},
$iaM:1}
W.ho.prototype={
$1:function(a){return a.aU(this.a)}}
W.hn.prototype={
$1:function(a){return a.ay(this.a,this.b,this.c)}}
W.ee.prototype={
eE:function(a,b,c,d){var u,t,s
this.a.ad(0,c)
u=b.by(0,new W.jp())
t=b.by(0,new W.jq())
this.b.ad(0,u)
s=this.c
s.ad(0,C.w)
s.ad(0,t)},
aU:function(a){return this.a.V(0,W.bQ(a))},
ay:function(a,b,c){var u=this,t=W.bQ(a),s=u.c
if(s.V(0,H.e(t)+"::"+b))return u.d.hk(c)
else if(s.V(0,"*::"+b))return u.d.hk(c)
else{s=u.b
if(s.V(0,H.e(t)+"::"+b))return!0
else if(s.V(0,"*::"+b))return!0
else if(s.V(0,H.e(t)+"::*"))return!0
else if(s.V(0,"*::*"))return!0}return!1},
$iaM:1}
W.jp.prototype={
$1:function(a){return!C.b.V(C.p,a)}}
W.jq.prototype={
$1:function(a){return C.b.V(C.p,a)}}
W.jy.prototype={
ay:function(a,b,c){if(this.er(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.V(0,b)
return!1}}
W.jz.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)}}
W.jx.prototype={
aU:function(a){var u=J.P(a)
if(!!u.$ic9)return!1
u=!!u.$ij
if(u&&W.bQ(a)==="foreignObject")return!1
if(u)return!0
return!1},
ay:function(a,b,c){if(b==="is"||C.a.a8(b,"on"))return!1
return this.aU(a)},
$iaM:1}
W.cW.prototype={
A:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.cG(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gJ:function(a){return this.d}}
W.aM.prototype={}
W.jn.prototype={}
W.ex.prototype={
cF:function(a){new W.jJ(this).$2(a,null)},
b4:function(a,b){if(b==null)J.le(a)
else b.removeChild(a)},
h3:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.mT(a)
n=o.a.getAttribute("is")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=u?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ae(r)}t="element unprintable"
try{t=J.a4(a)}catch(r){H.ae(r)}try{s=W.bQ(a)
this.h2(a,b,p,t,s,o,n)}catch(r){if(H.ae(r) instanceof P.ak)throw r
else{this.b4(a,b)
window
q="Removing corrupted element "+H.e(t)
if(typeof console!="undefined")window.console.warn(q)}}},
h2:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=this
if(c){p.b4(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!p.a.aU(a)){p.b4(a,b)
window
u="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!p.a.ay(a,"is",g)){p.b4(a,b)
window
u="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga9(f)
t=H.c(u.slice(0),[H.cC(u,0)])
for(s=f.ga9(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.b(t,s)
r=t[s]
if(!p.a.ay(a,J.mW(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.e(e)+" "+r+'="'+H.e(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.P(a).$icc)p.cF(a.content)}}
W.jJ.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.h3(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.b4(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ae(s)
r=u
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=t}}}
W.dO.prototype={}
W.dQ.prototype={}
W.dR.prototype={}
W.dS.prototype={}
W.dT.prototype={}
W.dV.prototype={}
W.dW.prototype={}
W.dX.prototype={}
W.dY.prototype={}
W.e2.prototype={}
W.e3.prototype={}
W.e4.prototype={}
W.e5.prototype={}
W.e7.prototype={}
W.e8.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.cr.prototype={}
W.cs.prototype={}
W.ef.prototype={}
W.eg.prototype={}
W.ek.prototype={}
W.en.prototype={}
W.eo.prototype={}
W.ct.prototype={}
W.cu.prototype={}
W.eq.prototype={}
W.er.prototype={}
W.ey.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eH.prototype={}
P.jt.prototype={
dM:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
t.push(a)
this.b.push(null)
return s},
cC:function(a){var u,t,s,r,q,p=this,o={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.P(a)
if(!!u.$ia8)return new Date(a.a)
if(!!u.$inx)throw H.d(P.iB("structured clone of RegExp"))
if(!!u.$ias)return a
if(!!u.$ibm)return a
if(!!u.$ibS)return a
if(!!u.$iaH)return a
if(!!u.$ic2||!!u.$ibb||!!u.$ic0)return a
if(!!u.$iR){t=p.dM(a)
s=p.b
r=s.length
if(t>=r)return H.b(s,t)
q=o.a=s[t]
if(q!=null)return q
q={}
o.a=q
if(t>=r)return H.b(s,t)
s[t]=q
u.H(a,new P.jv(o,p))
return o.a}if(!!u.$io){t=p.dM(a)
o=p.b
if(t>=o.length)return H.b(o,t)
q=o[t]
if(q!=null)return q
return p.hw(a,t)}throw H.d(P.iB("structured clone of other type"))},
hw:function(a,b){var u,t=J.cz(a),s=t.gl(a),r=new Array(s),q=this.b
if(b>=q.length)return H.b(q,b)
q[b]=r
for(u=0;u<s;++u){q=this.cC(t.i(a,u))
if(u>=r.length)return H.b(r,u)
r[u]=q}return r}}
P.jv.prototype={
$2:function(a,b){this.a.a[a]=this.b.cC(b)},
$S:3}
P.eu.prototype={$iaH:1,
gds:function(a){return this.a}}
P.jU.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.ju.prototype={}
P.fq.prototype={
gbk:function(){var u=this.b,t=H.l2(u,"r",0)
return new H.fW(new H.cj(u,new P.fr(),[t]),new P.fs(),[t,W.T])},
m:function(a,b,c){var u=this.gbk()
J.mU(u.b.$1(J.eL(u.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.af(this.gbk().a)},
i:function(a,b){var u=this.gbk()
return u.b.$1(J.eL(u.a,b))},
gU:function(a){var u=P.lt(this.gbk(),!1,W.T)
return new J.a5(u,u.length)},
$ar:function(){return[W.T]},
$ah:function(){return[W.T]},
$ao:function(){return[W.T]}}
P.fr.prototype={
$1:function(a){return!!J.P(a).$iT}}
P.fs.prototype={
$1:function(a){return H.l(a,"$iT")}}
P.jj.prototype={
gcz:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.v(t)
return u+t},
gdn:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.v(t)
return u+t},
h:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
t:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.P(b)
if(!!u.$iab){t=q.a
if(t==u.gbr(b)){s=q.b
if(s==u.gbw(b)){r=q.c
if(typeof t!=="number")return t.C()
if(typeof r!=="number")return H.v(r)
if(t+r===u.gcz(b)){t=q.d
if(typeof s!=="number")return s.C()
if(typeof t!=="number")return H.v(t)
u=s+t===u.gdn(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gI:function(a){var u=this,t=u.a,s=J.cH(t),r=u.b,q=J.cH(r),p=u.c
if(typeof t!=="number")return t.C()
if(typeof p!=="number")return H.v(p)
p=C.c.gI(t+p)
t=u.d
if(typeof r!=="number")return r.C()
if(typeof t!=="number")return H.v(t)
t=C.c.gI(r+t)
return P.nV(P.jg(P.jg(P.jg(P.jg(0,s),q),p),t))}}
P.ab.prototype={
gbr:function(a){return this.a},
gbw:function(a){return this.b},
gav:function(a){return this.c},
gaq:function(a){return this.d}}
P.b9.prototype={$ib9:1}
P.fK.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){return this.i(a,b)},
$ar:function(){return[P.b9]},
$ih:1,
$ah:function(){return[P.b9]},
$io:1,
$ao:function(){return[P.b9]}}
P.bd.prototype={$ibd:1}
P.hr.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){return this.i(a,b)},
$ar:function(){return[P.bd]},
$ih:1,
$ah:function(){return[P.bd]},
$io:1,
$ao:function(){return[P.bd]}}
P.hz.prototype={
gl:function(a){return a.length}}
P.c9.prototype={$ic9:1}
P.i4.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){return this.i(a,b)},
$ar:function(){return[P.k]},
$ih:1,
$ah:function(){return[P.k]},
$io:1,
$ao:function(){return[P.k]}}
P.j.prototype={
gc3:function(a){return new P.fq(a,new W.a3(a))},
aj:function(a,b,c,d){var u,t,s,r,q,p=H.c([],[W.aM])
p.push(W.m_(null))
p.push(W.m1())
p.push(new W.jx())
c=new W.ex(new W.dc(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.r).hx(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.a3(s)
q=p.gaM(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ij:1}
P.bf.prototype={$ibf:1}
P.ip.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){return this.i(a,b)},
$ar:function(){return[P.bf]},
$ih:1,
$ah:function(){return[P.bf]},
$io:1,
$ao:function(){return[P.bf]}}
P.dZ.prototype={}
P.e_.prototype={}
P.e9.prototype={}
P.ea.prototype={}
P.el.prototype={}
P.em.prototype={}
P.es.prototype={}
P.et.prototype={}
P.bz.prototype={$ih:1,
$ah:function(){return[P.w]},
$io:1,
$ao:function(){return[P.w]}}
P.eQ.prototype={
gl:function(a){return a.length}}
P.eR.prototype={
i:function(a,b){return P.aW(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aW(u.value[1]))}},
ga9:function(a){var u=H.c([],[P.k])
this.H(a,new P.eS(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.d(P.y("Not supported"))},
$iR:1,
$aR:function(){return[P.k,null]}}
P.eS.prototype={
$2:function(a,b){return this.a.push(a)}}
P.eT.prototype={
gl:function(a){return a.length}}
P.bl.prototype={}
P.hs.prototype={
gl:function(a){return a.length}}
P.dN.prototype={}
P.di.prototype={
e8:function(a,b,c,d,e,f,g,h,i,j){var u,t=i==null
if(!t&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}u=J.P(g)
if(!!u.$iaH&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,P.oM(g))
return}if(!!u.$ibV&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.d(P.cI("Incorrect number or type of arguments"))},
il:function(a,b,c,d,e,f,g){return this.e8(a,b,c,d,e,f,g,null,null,null)}}
P.i_.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return P.aW(a.item(b))},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){return this.i(a,b)},
$ar:function(){return[[P.R,,,]]},
$ih:1,
$ah:function(){return[[P.R,,,]]},
$io:1,
$ao:function(){return[[P.R,,,]]}}
P.eh.prototype={}
P.ei.prototype={}
T.aB.prototype={
aH:function(a,b){return!0},
h:function(a){return"all"}}
T.cX.prototype={
aH:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)if(u[s].aH(0,b))return!0
return!1},
h:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.p)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.h(0)}return s}}
T.ba.prototype={}
T.a6.prototype={
aH:function(a,b){return!this.en(0,b)},
h:function(a){return"!["+this.cI(0)+"]"}}
T.hC.prototype={
aH:function(a,b){return this.a<=b&&this.b>=b},
h:function(a){var u=H.bw(this.a),t=H.bw(this.b)
return u+".."+t}}
T.hL.prototype={
ew:function(a){var u,t
if(a.a.length<=0)throw H.d(P.u("May not create a Set with zero characters."))
u=new H.O([P.w,P.aA])
for(t=new H.bY(a,a.gl(a));t.A();)u.m(0,t.d,!0)
this.a=u},
aH:function(a,b){return this.a.bn(0,b)},
h:function(a){var u=this.a
return P.cb(u.ga9(u),0,null)}}
R.dq.prototype={
k:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new R.dA(this.a.j(0,b))
r.a=H.c([],[T.ba])
r.c=!1
this.c.push(r)
return r},
hJ:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
if(r.aH(0,a))return r}return},
h:function(a){return this.b}}
R.dx.prototype={
h:function(a){var u=H.l7(this.b,"\n","\\n"),t=H.l7(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
R.dy.prototype={
aJ:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.p)(c),++t){s=c[t]
this.c.m(0,s,b)}},
h:function(a){return this.b}}
R.ij.prototype={
j:function(a,b){var u=this.a.i(0,b)
if(u==null){u=new R.dq(this,b)
u.c=H.c([],[R.dA])
this.a.m(0,b,u)}return u},
R:function(a){var u,t=this.b.i(0,a)
if(t==null){t=new R.dy(a)
u=P.k
t.c=new H.O([u,u])
this.b.m(0,a,t)}return t},
eb:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.c([],[R.dx]),k=this.c,j=[P.w],i=H.c([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)l.push(t)
return l}r=C.a.E(a,s)
q=k.hJ(r)
if(q==null){if(t==null){i.push(r)
p=P.cb(i,0,m)
throw H.d(P.u("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}l.push(t)
s=t.c+1
i=H.c([],j)
k=this.c
t=m}else{if(!q.c)i.push(r)
k=q.b
if(k.d!=null){p=P.cb(i,0,m)
o=k.d
n=o.c.i(0,p)
t=new R.dx(n==null?o.b:n,p,s)}++s}}}}
R.dA.prototype={
h:function(a){return this.b.b+": "+this.cI(0)}}
O.aC.prototype={
bi:function(a){this.a=H.c([],[a])
this.c=this.b=null},
cG:function(a,b,c){this.b=b
this.c=a},
aZ:function(a,b){return this.cG(a,null,b)},
d3:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
d0:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gU:function(a){var u=this.a
return new J.a5(u,u.length)},
K:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
n:function(a,b){var u,t,s=this,r=[H.l2(s,"aC",0)]
if(s.d3(H.c([b],r))){u=s.a
t=u.length
u.push(b)
s.d0(t,H.c([b],r))}},
ad:function(a,b){var u,t
if(this.d3(b)){u=this.a
t=u.length
C.b.ad(u,b)
this.d0(t,b)}},
$ih:1}
O.c_.prototype={
gl:function(a){return this.a.length},
gp:function(){var u=this.b
return u==null?this.b=D.C():u},
aN:function(){var u=this.b
if(u!=null)u.D(null)},
ga6:function(a){var u=this.a
if(u.length>0)return C.b.gaz(u)
else return V.bu()},
bv:function(a){var u=this.a
if(a==null)u.push(V.bu())
else u.push(a)
this.aN()},
aI:function(){var u=this.a
if(u.length>0){u.pop()
this.aN()}}}
E.eX.prototype={}
E.aF.prototype={
sa7:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gp().L(0,s.gdY())
u=s.c
if(u!=null)u.gp().n(0,s.gdY())
t=new D.x("shape",r,s.c)
t.b=!0
s.bs(t)}},
at:function(a,b){var u
for(u=this.y.a,u=new J.a5(u,u.length);u.A();)u.d.at(0,b)},
ag:function(a){var u,t=this,s=a.dx
s.a.push(s.ga6(s))
s.aN()
a.cs(t.f)
s=a.dy
u=(s&&C.b).gaz(s)
if(u!=null&&t.d!=null)u.e3(a,t)
for(s=t.y.a,s=new J.a5(s,s.length);s.A();)s.d.ag(a)
a.cr()
a.dx.aI()},
bs:function(a){var u=this.z
if(u!=null)u.D(a)},
a3:function(){return this.bs(null)},
dZ:function(a){this.e=null
this.bs(a)},
i1:function(){return this.dZ(null)},
dX:function(a){this.bs(a)},
hZ:function(){return this.dX(null)},
hY:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gdW(),s=[{func:1,ret:-1,args:[D.W]}],r=0;r<b.length;b.length===u||(0,H.p)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.br()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}this.a3()},
i0:function(a,b){var u,t
for(u=b.gU(b),t=this.gdW();u.A();)u.gJ(u).gp().L(0,t)
this.a3()},
h:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.hD.prototype={
ev:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.a8(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.c_()
t=[V.aJ]
u.a=H.c([],t)
u.gp().n(0,new E.hE(s))
s.cy=u
u=new O.c_()
u.a=H.c([],t)
u.gp().n(0,new E.hF(s))
s.db=u
u=new O.c_()
u.a=H.c([],t)
u.gp().n(0,new E.hG(s))
s.dx=u
u=H.c([],[O.dt])
s.dy=u
u.push(null)
s.fr=new H.O([P.k,A.dk])},
gia:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga6(s)
u=t.db
u=t.z=s.u(0,u.ga6(u))
s=u}return s},
cs:function(a){var u=this.dy
u.push(a==null?(u&&C.b).gaz(u):a)},
cr:function(){var u=this.dy
if(u.length>1)u.pop()},
dj:function(a){var u=a.b
if(u.length===0)throw H.d(P.u("May not cache a shader with no name."))
if(this.fr.bn(0,u))throw H.d(P.u('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.m(0,u,a)}}
E.hE.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.hF.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.hG.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.dv.prototype={
cO:function(a){this.e5()},
cN:function(){return this.cO(null)},
ghO:function(){var u,t=this,s=Date.now(),r=C.c.ac(P.ll(s-t.cx.a).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.a8(s,!1)
return u/r},
d5:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.u()
if(typeof r!=="number")return H.v(r)
u=C.d.ce(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.u()
t=C.d.ce(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.lO(C.n,s.gih())}},
e5:function(){if(!this.ch){this.ch=!0
var u=window
C.E.eU(u)
C.E.fZ(u,W.mc(new E.ih(this),P.ad))}},
ie:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.d5()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.a8(r,!1)
s.y=P.ll(r-s.r.a).a*0.000001
r=s.cy
C.b.sl(r.a,0)
r.aN()
r=s.db
C.b.sl(r.a,0)
r.aN()
r=s.dx
C.b.sl(r.a,0)
r.aN()
r=s.dy;(r&&C.b).sl(r,0)
s.dy.push(null)
o.ag(p.e)}s=p.z
if(s!=null)s.D(null)}catch(q){u=H.ae(q)
t=H.l3(q)
P.l6("Error: "+H.e(u))
P.l6("Stack: "+H.e(t))
throw H.d(u)}}}
E.ih.prototype={
$1:function(a){var u=this.a
if(u.ch){u.ch=!1
u.ie()}}}
Z.dK.prototype={}
Z.cK.prototype={
a2:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ae(s)
t=P.u('Failed to bind buffer attribute "'+r.a.h(0)+'": '+H.e(u))
throw H.d(t)}},
h:function(a){var u=this
return"["+u.a.h(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.dL.prototype={}
Z.bN.prototype={
aG:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
a2:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].a2(a)},
as:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
ag:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.b(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
h:function(a){var u,t,s,r,q=[P.k],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)p.push(u[s].h(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a4(q[s]))
return"Buffer:  ["+this.a.h(0)+"]\nIndices: "+C.b.k(p,", ")+"\nAttrs:   "+C.b.k(r,", ")}}
Z.bs.prototype={
h:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.c8(this.c))+"'")+"]"}}
Z.aV.prototype={
gcH:function(a){var u=this.a,t=(u&$.ap().a)!==0?3:0
if((u&$.aZ().a)!==0)t+=3
if((u&$.aY().a)!==0)t+=3
if((u&$.b_().a)!==0)t+=2
if((u&$.bk().a)!==0)t+=3
if((u&$.cE().a)!==0)t+=3
if((u&$.cF().a)!==0)t+=4
if((u&$.bK().a)!==0)++t
return(u&$.aX().a)!==0?t+4:t},
hl:function(a){var u,t=$.ap(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aZ()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aY()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b_()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bk()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cE()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cF()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bK()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aX()
if((s&t.a)!==0)if(u===a)return t
return $.mJ()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aV))return!1
return this.a===b.a},
h:function(a){var u=H.c([],[P.k]),t=this.a
if((t&$.ap().a)!==0)u.push("Pos")
if((t&$.aZ().a)!==0)u.push("Norm")
if((t&$.aY().a)!==0)u.push("Binm")
if((t&$.b_().a)!==0)u.push("Txt2D")
if((t&$.bk().a)!==0)u.push("TxtCube")
if((t&$.cE().a)!==0)u.push("Clr3")
if((t&$.cF().a)!==0)u.push("Clr4")
if((t&$.bK().a)!==0)u.push("Weight")
if((t&$.aX().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.b.k(u,"|")}}
D.f_.prototype={}
D.br.prototype={
n:function(a,b){var u=this.a;(u==null?this.a=H.c([],[{func:1,ret:-1,args:[D.W]}]):u).push(b)},
L:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.b.V(s,b)
if(s===!0){s=t.a
u=(s&&C.b).L(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.b.V(s,b)
if(s===!0){s=t.b
u=(s&&C.b).L(s,b)||u}return u},
D:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.W()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.b.H(P.lt(u,!0,{func:1,ret:-1,args:[D.W]}),new D.fm(q))
u=r.b
if(u!=null){r.b=H.c([],[{func:1,ret:-1,args:[D.W]}])
C.b.H(u,new D.fn(q))}return!0},
c7:function(){return this.D(null)},
ar:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.D(u)}}}}
D.fm.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.fn.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.W.prototype={}
D.b4.prototype={}
D.b5.prototype={}
D.x.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cL.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cL))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.d1.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d1))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.fJ.prototype={
i6:function(a){this.c=a.b
this.d.n(0,a.a)
return!1},
i2:function(a){this.c=a.b
this.d.L(0,a.a)
return!1}}
X.d5.prototype={}
X.fS.prototype={
b2:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.u()
u=b.b
t=q.ch
if(typeof u!=="number")return u.u()
s=new V.Y(o.a+n*m,o.b+u*t)
t=q.a.gaW()
r=new X.aL(a,V.aO(),q.x,t,s)
r.b=!0
q.z=new P.a8(p,!1)
q.x=s
return r},
cq:function(a,b){this.r=a.a
return!1},
bd:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.eh()
if(typeof u!=="number")return u.am()
this.r=(u&~t)>>>0
return!1},
bc:function(a,b){var u=this.d
if(u==null)return!1
u.D(this.b2(a,b))
return!0},
i7:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaW()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.u()
q=a.b
p=o.cy
if(typeof q!=="number")return q.u()
t=new X.c1(new V.G(s*r,q*p),u,t)
t.b=!0
n.D(t)
return!0},
fs:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.d5(c,r.a.gaW(),b)
s.b=!0
t.D(s)
r.y=new P.a8(u,!1)
r.x=V.aO()}}
X.ah.prototype={
t:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.ah))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
h:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.aL.prototype={}
X.hh.prototype={
bH:function(a,b,c){var u=this,t=new P.a8(Date.now(),!1),s=u.a.gaW(),r=new X.aL(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cq:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.D(this.bH(a,b,!0))
return!0},
bd:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.eh()
if(typeof t!=="number")return t.am()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.D(u.bH(a,b,!0))
return!0},
bc:function(a,b){var u=this.d
if(u==null)return!1
u.D(this.bH(a,b,!1))
return!0},
i8:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaW()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.u()
r=a.b
q=p.ch
if(typeof r!=="number")return r.u()
u=new X.c1(new V.G(t*s,r*q),u,b)
u.b=!0
o.D(u)
return!0},
gdu:function(){var u=this.b
return u==null?this.b=D.C():u},
gcB:function(){var u=this.c
return u==null?this.c=D.C():u},
gdV:function(){var u=this.d
return u==null?this.d=D.C():u}}
X.c1.prototype={}
X.hy.prototype={}
X.dz.prototype={}
X.il.prototype={
b2:function(a,b){var u=this,t=new P.a8(Date.now(),!1),s=a.length>0?a[0]:V.aO(),r=u.a.gaW(),q=new X.dz(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
i5:function(a){var u=this.b
if(u==null)return!1
u.D(this.b2(a,!0))
return!0},
i3:function(a){var u=this.c
if(u==null)return!1
u.D(this.b2(a,!0))
return!0},
i4:function(a){var u=this.d
if(u==null)return!1
u.D(this.b2(a,!1))
return!0}}
X.dF.prototype={
gaW:function(){var u=this.a,t=C.i.gdr(u).c
t.toString
u=C.i.gdr(u).d
u.toString
return V.lI(0,0,t,u)},
cV:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.d1(u,new X.ah(t,a.altKey,a.shiftKey))},
aS:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.ah(t,a.altKey,a.shiftKey)},
bX:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.ah(t,a.altKey,a.shiftKey)},
aD:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.M()
u=t.top
if(typeof r!=="number")return r.M()
return new V.Y(s-q,r-u)},
b3:function(a){return new V.G(a.movementX,a.movementY)},
bS:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.Y])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
q=C.d.a4(r.pageX)
C.d.a4(r.pageY)
p=o.left
C.d.a4(r.pageX)
n.push(new V.Y(q-p,C.d.a4(r.pageY)-o.top))}return n},
aB:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cL(u,new X.ah(t,a.altKey,a.shiftKey))},
bJ:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.M()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.M()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fl:function(a){this.f=!0},
f9:function(a){this.f=!1},
ff:function(a){if(this.f&&this.bJ(a))a.preventDefault()},
fp:function(a){var u
if(!this.f)return
u=this.cV(a)
this.b.i6(u)},
fn:function(a){var u
if(!this.f)return
u=this.cV(a)
this.b.i2(u)},
fu:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aS(a)
if(r.x){u=r.aB(a)
t=r.b3(a)
if(r.d.cq(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.aB(a)
s=r.aD(a)
if(r.c.cq(u,s))a.preventDefault()},
fA:function(a){var u,t,s,r=this
r.aS(a)
u=r.aB(a)
if(r.x){t=r.b3(a)
if(r.d.bd(u,t))a.preventDefault()
return}if(r.r)return
s=r.aD(a)
if(r.c.bd(u,s))a.preventDefault()},
fj:function(a){var u,t,s,r=this
if(!r.bJ(a)){r.aS(a)
u=r.aB(a)
if(r.x){t=r.b3(a)
if(r.d.bd(u,t))a.preventDefault()
return}if(r.r)return
s=r.aD(a)
if(r.c.bd(u,s))a.preventDefault()}},
fw:function(a){var u,t,s,r=this
r.aS(a)
u=r.aB(a)
if(r.x){t=r.b3(a)
if(r.d.bc(u,t))a.preventDefault()
return}if(r.r)return
s=r.aD(a)
if(r.c.bc(u,s))a.preventDefault()},
fh:function(a){var u,t,s,r=this
if(!r.bJ(a)){r.aS(a)
u=r.aB(a)
if(r.x){t=r.b3(a)
if(r.d.bc(u,t))a.preventDefault()
return}if(r.r)return
s=r.aD(a)
if(r.c.bc(u,s))a.preventDefault()}},
fC:function(a){var u,t,s=this
s.aS(a)
u=new V.G((a&&C.D).ghz(a),C.D.ghA(a)).q(0,180)
if(s.x){if(s.d.i7(u))a.preventDefault()
return}if(s.r)return
t=s.aD(a)
if(s.c.i8(u,t))a.preventDefault()},
fE:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aB(s.y)
t=s.aD(s.y)
s.d.fs(u,t,r)}},
fU:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bX(a)
u=t.bS(a)
if(t.e.i5(u))a.preventDefault()},
fQ:function(a){var u
this.bX(a)
u=this.bS(a)
if(this.e.i3(u))a.preventDefault()},
fS:function(a){var u
this.bX(a)
u=this.bS(a)
if(this.e.i4(u))a.preventDefault()}}
D.bp.prototype={
aA:function(a){var u=this.r
if(u!=null)u.D(a)},
eB:function(){return this.aA(null)},
$ia9:1}
D.a9.prototype={}
D.d2.prototype={
aA:function(a){var u=this.x
if(u!=null)u.D(a)},
d2:function(a){var u=this.y
if(u!=null)u.D(a)},
fq:function(){return this.d2(null)},
fG:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.p)(a),++t){s=a[t]
if(s==null||this.ez(s))return!1}return!0},
f3:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gd1(),s=[{func:1,ret:-1,args:[D.W]}],r=0;r<b.length;b.length===u||(0,H.p)(b),++r){q=b[r]
if(q instanceof D.bp)this.e.push(q)
p=q.r
if(p==null){p=new D.br()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}u=new D.b4()
u.b=!0
this.aA(u)},
fK:function(a,b){var u,t,s
for(u=b.gU(b),t=this.gd1();u.A();){s=u.gJ(u)
C.b.L(this.e,s)
s.gp().L(0,t)}u=new D.b5()
u.b=!0
this.aA(u)},
ez:function(a){var u=C.b.V(this.e,a)
return u},
$ah:function(){return[D.a9]},
$aaC:function(){return[D.a9]}}
D.hx.prototype={$ia9:1}
D.hZ.prototype={$ia9:1}
V.V.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.V))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}}
V.a_.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a_))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.D(u.a,3,0)+", "+V.D(u.b,3,0)+", "+V.D(u.c,3,0)+", "+V.D(u.d,3,0)+"]"}}
V.fl.prototype={}
V.d7.prototype={
ah:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.M])
return t},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.d7))return!1
u=b.a
t=$.A().a
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
h:function(a){var u,t,s,r,q=this,p=[P.M],o=V.bI(H.c([q.a,q.d,q.r],p),3,0),n=V.bI(H.c([q.b,q.e,q.x],p),3,0),m=V.bI(H.c([q.c,q.f,q.y],p),3,0)
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
V.aJ.prototype={
ah:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.M])
return t},
cj:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.A().a)return V.bu()
u=1/b1
t=-n
s=-a0
return V.au((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
u:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.au(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bx:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.z(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
cA:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.N(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aJ))return!1
u=b.a
t=$.A().a
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
h:function(a){return this.P()},
F:function(a){var u,t,s,r,q,p=this,o=[P.M],n=V.bI(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.bI(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.bI(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.bI(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
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
P:function(){return this.F("")}}
V.Y.prototype={
M:function(a,b){return new V.Y(this.a-b.a,this.b-b.b)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Y))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
h:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+"]"}}
V.N.prototype={
C:function(a,b){return new V.N(this.a+b.a,this.b+b.b,this.c+b.c)},
M:function(a,b){return new V.N(this.a-b.a,this.b-b.b,this.c-b.c)},
u:function(a,b){return new V.N(this.a*b,this.b*b,this.c*b)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.N))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}}
V.ai.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ai))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.D(u.a,3,0)+", "+V.D(u.b,3,0)+", "+V.D(u.c,3,0)+", "+V.D(u.d,3,0)+"]"}}
V.dh.prototype={
gaf:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dh))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.D(u.a,3,0)+", "+V.D(u.b,3,0)+", "+V.D(u.c,3,0)+", "+V.D(u.d,3,0)+"]"}}
V.G.prototype={
ck:function(a){return Math.sqrt(this.B(this))},
B:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.u()
if(typeof r!=="number")return H.v(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.v(t)
return s*r+u*t},
u:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.u()
u=this.b
if(typeof u!=="number")return u.u()
return new V.G(t*b,u*b)},
q:function(a,b){var u,t
if(Math.abs(b-0)<$.A().a){u=$.lV
return u==null?$.lV=new V.G(0,0):u}u=this.a
if(typeof u!=="number")return u.q()
t=this.b
if(typeof t!=="number")return t.q()
return new V.G(u/b,t/b)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.G))return!1
u=b.a
t=this.a
s=$.A()
s.toString
if(typeof u!=="number")return u.M()
if(typeof t!=="number")return H.v(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.M()
if(typeof t!=="number")return H.v(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+"]"}}
V.z.prototype={
ck:function(a){return Math.sqrt(this.B(this))},
B:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cl:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.z(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aE:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.z(u*t-s*r,s*q-p*t,p*r-u*q)},
C:function(a,b){return new V.z(this.a+b.a,this.b+b.b,this.c+b.c)},
T:function(a){return new V.z(-this.a,-this.b,-this.c)},
u:function(a,b){return new V.z(this.a*b,this.b*b,this.c*b)},
q:function(a,b){if(Math.abs(b-0)<$.A().a)return V.ci()
return new V.z(this.a/b,this.b/b,this.c/b)},
dU:function(){var u=$.A().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.z))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}}
U.f1.prototype={
bC:function(a){var u=V.kt(a,this.c,this.b)
return u},
gp:function(){var u=this.y
return u==null?this.y=D.C():u},
G:function(a){var u=this.y
if(u!=null)u.D(a)},
scD:function(a,b){},
scn:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.A().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bC(u)}s=new D.x("maximumLocation",s,t.b)
s.b=!0
t.G(s)}},
scp:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.A().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bC(u)}s=new D.x("minimumLocation",s,t.c)
s.b=!0
t.G(s)}},
sa0:function(a,b){var u,t=this
b=t.bC(b)
u=t.d
if(!(Math.abs(u-b)<$.A().a)){t.d=b
u=new D.x("location",u,b)
u.b=!0
t.G(u)}},
sco:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.A().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.x("maximumVelocity",r,a)
r.b=!0
s.G(r)}},
sW:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.A().a)){u.f=a
t=new D.x("velocity",t,a)
t.b=!0
u.G(t)}},
sc6:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.A().a)){this.x=a
u=new D.x("dampening",u,a)
u.b=!0
this.G(u)}},
at:function(a,b){var u,t,s,r=this,q=r.f,p=$.A().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa0(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.A().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sW(u)}}}
U.cO.prototype={
gp:function(){var u=this.b
return u==null?this.b=D.C():u},
aL:function(a,b,c){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cO))return!1
return J.E(this.a,b.a)},
h:function(a){return"Constant: "+this.a.F("          ")}}
U.bT.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.C():u},
G:function(a){var u=this.e
if(u!=null)u.D(a)},
ab:function(){return this.G(null)},
eD:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaR(),s=[{func:1,ret:-1,args:[D.W]}],r=0;r<b.length;b.length===u||(0,H.p)(b),++r){q=b[r]
if(q!=null){p=q.gp()
o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.b4()
u.b=!0
this.G(u)},
fI:function(a,b){var u,t
for(u=b.gU(b),t=this.gaR();u.A();)u.gJ(u).gp().L(0,t)
u=new D.b5()
u.b=!0
this.G(u)},
aL:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.S()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.a5(r,r.length),u=null;r.A();){q=r.d
if(q!=null){t=q.aL(0,b,c)
if(t!=null)u=u==null?t:t.u(0,u)}}s.f=u==null?V.bu():u
r=s.e
if(r!=null)r.ar(0)}return s.f},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bT))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.b(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.b(r,t)
if(!J.E(s,r[t]))return!1}return!0},
h:function(a){return"Group"},
$ah:function(){return[U.aa]},
$aaC:function(){return[U.aa]},
$iaa:1}
U.aa.prototype={}
U.dj.prototype={
gp:function(){var u=this.y
return u==null?this.y=D.C():u},
G:function(a){var u=this.y
if(u!=null)u.D(a)},
see:function(a){var u
a=V.kt(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.A().a)){this.a=a
u=new D.x("yaw",u,a)
u.b=!0
this.G(u)}},
se1:function(a,b){var u
b=V.kt(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.A().a)){this.b=b
u=new D.x("pitch",u,b)
u.b=!0
this.G(u)}},
se6:function(a){var u
a=V.kt(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.A().a)){this.c=a
u=new D.x("roll",u,a)
u.b=!0
this.G(u)}},
aL:function(a,b,c){var u=this,t=u.r,s=b.e
if(t<s){u.r=s
t=u.y
if(t!=null)++t.d
u.see(u.a+u.d*b.y)
u.se1(0,u.b+u.e*b.y)
u.se6(u.c+u.f*b.y)
u.x=V.ly(u.c).u(0,V.lx(u.b)).u(0,V.lw(u.a))
t=u.y
if(t!=null)t.ar(0)}return u.x},
t:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.dj))return!1
u=r.a
t=b.a
s=$.A().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
h:function(a){var u=this
return"Rotater: ["+V.D(u.a,3,0)+", "+V.D(u.b,3,0)+", "+V.D(u.c,3,0)+"], ["+V.D(u.d,3,0)+", "+V.D(u.e,3,0)+", "+V.D(u.f,3,0)+"]"}}
U.dG.prototype={
gp:function(){var u=this.cy
return u==null?this.cy=D.C():u},
G:function(a){var u=this.cy
if(u!=null)u.D(a)},
ab:function(){return this.G(null)},
b5:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdu().n(0,u.gbK())
u.a.c.gdV().n(0,u.gbM())
u.a.c.gcB().n(0,u.gbO())
return!0},
bL:function(a){var u=this
if(!J.E(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bN:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$iaL")
if(!n.y)return
if(n.x){u=a.d.M(0,a.y)
u=new V.G(u.a,u.b)
u=u.B(u)
t=n.r
if(typeof t!=="number")return H.v(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.M(0,a.y)
u=new V.G(t.a,t.b).u(0,2).q(0,u.gaf())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.u()
s=n.e
if(typeof s!=="number")return H.v(s)
t.sW(u*10*s)}else{u=a.c
t=a.d
s=t.M(0,a.y)
r=new V.G(s.a,s.b).u(0,2).q(0,u.gaf())
s=n.b
q=r.a
if(typeof q!=="number")return q.T()
p=n.e
if(typeof p!=="number")return H.v(p)
o=n.z
if(typeof o!=="number")return H.v(o)
s.sa0(0,-q*p+o)
n.b.sW(0)
t=t.M(0,a.z)
n.Q=new V.G(t.a,t.b).u(0,2).q(0,u.gaf())}n.ab()},
bP:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.B(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.u()
s=r.e
if(typeof s!=="number")return H.v(s)
u.sW(t*10*s)
r.ab()}},
aL:function(a,b,c){var u,t=this,s=t.ch,r=b.e
if(typeof s!=="number")return s.S()
if(s<r){t.ch=r
u=b.y
t.b.at(0,u)
t.cx=V.ly(t.b.d)}return t.cx},
$iaa:1}
U.dH.prototype={
gp:function(){var u=this.fx
return u==null?this.fx=D.C():u},
G:function(a){var u=this.fx
if(u!=null)u.D(a)},
ab:function(){return this.G(null)},
b5:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdu().n(0,s.gbK())
s.a.c.gdV().n(0,s.gbM())
s.a.c.gcB().n(0,s.gbO())
u=s.a.d
t=u.f
u=t==null?u.f=D.C():t
u.n(0,s.geW())
u=s.a.d
t=u.d
u=t==null?u.d=D.C():t
u.n(0,s.geY())
u=s.a.e
t=u.b
u=t==null?u.b=D.C():t
u.n(0,s.ghe())
u=s.a.e
t=u.d
u=t==null?u.d=D.C():t
u.n(0,s.ghc())
u=s.a.e
t=u.c
u=t==null?u.c=D.C():t
u.n(0,s.gha())
return!0},
aw:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.T()
u=-u}if(this.r){if(typeof t!=="number")return t.T()
t=-t}return new V.G(u,t)},
bL:function(a){var u=this
H.l(a,"$iaL")
if(!J.E(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bN:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$iaL")
if(!n.cx)return
if(n.ch){u=a.d.M(0,a.y)
u=new V.G(u.a,u.b)
u=u.B(u)
t=n.Q
if(typeof t!=="number")return H.v(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.M(0,a.y)
u=n.aw(new V.G(t.a,t.b).u(0,2).q(0,u.gaf()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.v(s)
t.sW(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.v(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.M(0,a.y)
r=n.aw(new V.G(s.a,s.b).u(0,2).q(0,u.gaf()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.v(p)
o=n.cy
if(typeof o!=="number")return H.v(o)
s.sa0(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.v(q)
s=n.db
if(typeof s!=="number")return H.v(s)
o.sa0(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.M(0,a.z)
n.dx=n.aw(new V.G(t.a,t.b).u(0,2).q(0,u.gaf()))}n.ab()},
bP:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.B(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.v(s)
u.sW(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.v(u)
s.sW(-t*10*u)
r.ab()}},
eX:function(a){var u=this
if(H.l(a,"$id5").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
eZ:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$iaL")
if(!J.E(n.d,a.x.b))return
u=a.c
t=a.d
s=t.M(0,a.y)
r=n.aw(new V.G(s.a,s.b).u(0,2).q(0,u.gaf()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.v(p)
o=n.cy
if(typeof o!=="number")return H.v(o)
s.sa0(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.v(q)
s=n.db
if(typeof s!=="number")return H.v(s)
o.sa0(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.M(0,a.z)
n.dx=n.aw(new V.G(t.a,t.b).u(0,2).q(0,u.gaf()))
n.ab()},
hf:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hd:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$idz")
if(!n.cx)return
if(n.ch){u=a.d.M(0,a.y)
u=new V.G(u.a,u.b)
u=u.B(u)
t=n.Q
if(typeof t!=="number")return H.v(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.M(0,a.y)
u=n.aw(new V.G(t.a,t.b).u(0,2).q(0,u.gaf()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.v(s)
t.sW(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.v(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.M(0,a.y)
r=n.aw(new V.G(s.a,s.b).u(0,2).q(0,u.gaf()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.v(p)
o=n.cy
if(typeof o!=="number")return H.v(o)
s.sa0(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.v(q)
s=n.db
if(typeof s!=="number")return H.v(s)
o.sa0(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.M(0,a.z)
n.dx=n.aw(new V.G(t.a,t.b).u(0,2).q(0,u.gaf()))}n.ab()},
hb:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.B(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.v(s)
u.sW(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.v(u)
s.sW(-t*10*u)
r.ab()}},
aL:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.S()
if(s<r){t.dy=r
u=b.y
t.c.at(0,u)
t.b.at(0,u)
t.fr=V.lw(t.b.d).u(0,V.lx(t.c.d))}return t.fr},
$iaa:1}
U.dI.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.C():u},
G:function(a){var u=this.r
if(u!=null)u.D(a)},
b5:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.C():t
t=r.gf0()
u.n(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.C():s).n(0,t)
return!0},
f1:function(a){var u,t,s,r,q=this
if(!J.E(q.b,q.a.b.c))return
H.l(a,"$ic1")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.u()
r=u+t*s
if(u!==r){q.d=r
u=new D.x("zoom",u,r)
u.b=!0
q.G(u)}},
aL:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.au(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$iaa:1}
M.cN.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.C():u},
a_:function(a){var u=this.r
if(u!=null)u.D(a)},
b0:function(){return this.a_(null)},
fM:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gZ(),s=[{func:1,ret:-1,args:[D.W]}],r=0;r<b.length;b.length===u||(0,H.p)(b),++r){q=b[r]
if(q!=null){p=q.gp()
o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.b4()
u.b=!0
this.a_(u)},
fO:function(a,b){var u,t
for(u=b.gU(b),t=this.gZ();u.A();)u.gJ(u).gp().L(0,t)
u=new D.b5()
u.b=!0
this.a_(u)},
ag:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.a5(u,u.length);u.A();){t=u.d
if(t!=null)t.ag(a)}s.f=!1},
$ah:function(){return[M.am]},
$aaC:function(){return[M.am]},
$iam:1}
M.cP.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.C():u},
a_:function(a){var u=this.r
if(u!=null)u.D(a)},
b0:function(){return this.a_(null)},
saV:function(a){var u,t,s=this
if(a==null)a=new X.fC()
u=s.b
if(u!==a){if(u!=null)u.gp().L(0,s.gZ())
t=s.b
s.b=a
a.gp().n(0,s.gZ())
u=new D.x("camera",t,s.b)
u.b=!0
s.a_(u)}},
sbe:function(a,b){var u,t,s=this
if(b==null)b=X.lp(null)
u=s.c
if(u!==b){if(u!=null)u.gp().L(0,s.gZ())
t=s.c
s.c=b
b.gp().n(0,s.gZ())
u=new D.x("target",t,s.c)
u.b=!0
s.a_(u)}},
saY:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gp().L(0,t.gZ())
u=t.d
t.d=a
if(a!=null)a.gp().n(0,t.gZ())
s=new D.x("technique",u,t.d)
s.b=!0
t.a_(s)}},
ag:function(a){var u=this
a.cs(u.d)
u.c.a2(a)
u.b.a2(a)
u.e.at(0,a)
u.e.ag(a)
u.b.as(a)
u.c.as(a)
a.cr()},
$iam:1}
M.cU.prototype={
a_:function(a){var u=this.y
if(u!=null)u.D(a)},
b0:function(){return this.a_(null)},
fb:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gZ(),s=[{func:1,ret:-1,args:[D.W]}],r=0;r<b.length;b.length===u||(0,H.p)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.br()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.b4()
u.b=!0
this.a_(u)},
fd:function(a,b){var u,t
for(u=b.gU(b),t=this.gZ();u.A();)u.gJ(u).gp().L(0,t)
u=new D.b5()
u.b=!0
this.a_(u)},
saV:function(a){var u,t,s=this
if(a==null)a=X.kN(null)
u=s.b
if(u!==a){if(u!=null)u.gp().L(0,s.gZ())
t=s.b
s.b=a
a.gp().n(0,s.gZ())
u=new D.x("camera",t,s.b)
u.b=!0
s.a_(u)}},
sbe:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gp().L(0,t.gZ())
u=t.c
t.c=b
b.gp().n(0,t.gZ())
s=new D.x("target",u,t.c)
s.b=!0
t.a_(s)}},
saY:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gp().L(0,t.gZ())
u=t.d
t.d=a
if(a!=null)a.gp().n(0,t.gZ())
s=new D.x("technique",u,t.d)
s.b=!0
t.a_(s)}},
gp:function(){var u=this.y
return u==null?this.y=D.C():u},
ag:function(a){var u,t=this
a.cs(t.d)
t.c.a2(a)
t.b.a2(a)
u=t.d
if(u!=null)u.at(0,a)
for(u=t.e.a,u=new J.a5(u,u.length);u.A();)u.d.at(0,a)
for(u=t.e.a,u=new J.a5(u,u.length);u.A();)u.d.ag(a)
t.b.toString
a.cy.aI()
a.db.aI()
t.c.as(a)
a.cr()},
$iam:1}
M.am.prototype={}
A.cJ.prototype={}
A.eP.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hF:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
dt:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.a0.prototype={
gau:function(a){var u=this.a?1:0,t=this.b?2:0
return u|t|0},
h:function(a){var u=this.a?1:0,t=this.b?2:0
return""+(u|t|0)},
t:function(a,b){if(b==null)return!1
if(!(b instanceof A.a0))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.fZ.prototype={
eu:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.S("")
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
A.ot(c0,u)
A.ov(c0,u)
A.ou(c0,u)
A.ox(c0,u)
A.oy(c0,u)
A.ow(c0,u)
A.oz(c0,u)
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
b5.dT(0,s.charCodeAt(0)==0?s:s,A.os(b5.z))
b5.Q=b5.x.i(0,"posAttr")
b5.cx=b5.x.i(0,"normAttr")
b5.ch=b5.x.i(0,"binmAttr")
b5.cy=b5.x.i(0,"txt2DAttr")
b5.db=b5.x.i(0,"txtCubeAttr")
b5.dx=b5.x.i(0,"bendAttr")
if(c0.dx)b5.id=H.l(b5.y.N(0,"invViewMat"),"$iac")
if(t)b5.dy=H.l(b5.y.N(0,"objMat"),"$iac")
if(r)b5.fr=H.l(b5.y.N(0,"viewObjMat"),"$iac")
b5.fy=H.l(b5.y.N(0,"projViewObjMat"),"$iac")
if(c0.ry)b5.k1=H.l(b5.y.N(0,"txt2DMat"),"$icf")
if(c0.x1)b5.k2=H.l(b5.y.N(0,"txtCubeMat"),"$iac")
if(c0.x2)b5.k3=H.l(b5.y.N(0,"colorMat"),"$iac")
b5.r1=H.c([],[A.ac])
t=c0.y2
if(t>0){b5.k4=b5.y.N(0,"bendMatCount")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.i(0,q)
if(m==null)H.t(P.u(b7+q+b8))
s.push(H.l(m,"$iac"))}}t=c0.a
if(t.a)b5.r2=H.l(b5.y.N(0,"emissionClr"),"$iI")
if(t.b)b5.rx=H.l(b5.y.N(0,"emissionTxt"),"$ia1")
t=c0.b
if(t.a)b5.x1=H.l(b5.y.N(0,"ambientClr"),"$iI")
if(t.b)b5.x2=H.l(b5.y.N(0,"ambientTxt"),"$ia1")
t=c0.c
if(t.a)b5.y2=H.l(b5.y.N(0,"diffuseClr"),"$iI")
if(t.b)b5.aF=H.l(b5.y.N(0,"diffuseTxt"),"$ia1")
t=c0.d
if(t.a)b5.dw=H.l(b5.y.N(0,"invDiffuseClr"),"$iI")
if(t.b)b5.dz=H.l(b5.y.N(0,"invDiffuseTxt"),"$ia1")
t=c0.e
s=t.a
if(s||t.b||!1){b5.dC=H.l(b5.y.N(0,"shininess"),"$iU")
if(s)b5.dA=H.l(b5.y.N(0,"specularClr"),"$iI")
if(t.b)b5.dB=H.l(b5.y.N(0,"specularTxt"),"$ia1")}if(c0.f.b)b5.dD=H.l(b5.y.N(0,"bumpTxt"),"$ia1")
if(c0.cy){b5.dE=H.l(b5.y.N(0,"envSampler"),"$ibh")
t=c0.r
if(t.a)b5.dF=H.l(b5.y.N(0,"reflectClr"),"$iI")
if(t.b)b5.dG=H.l(b5.y.N(0,"reflectTxt"),"$ia1")
t=c0.x
s=t.a
if(s||t.b||!1){b5.dH=H.l(b5.y.N(0,"refraction"),"$iU")
if(s)b5.dI=H.l(b5.y.N(0,"refractClr"),"$iI")
if(t.b)b5.dJ=H.l(b5.y.N(0,"refractTxt"),"$ia1")}}t=c0.y
if(t.a)b5.dK=H.l(b5.y.N(0,"alpha"),"$iU")
if(t.b)b5.dL=H.l(b5.y.N(0,"alphaTxt"),"$ia1")
t=P.w
s=[t,A.dC]
b5.c8=new H.O(s)
b5.c9=new H.O([t,[P.o,A.ce]])
b5.ca=new H.O(s)
b5.cb=new H.O([t,[P.o,A.cg]])
b5.cc=new H.O(s)
b5.cd=new H.O([t,[P.o,A.ch]])
if(c0.id){for(t=c0.z,s=t.length,r=[A.ce],l=0;l<t.length;t.length===s||(0,H.p)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.e(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.am()
p=(j&1)!==0
if(p){o=b5.y
g=i+"s["+n+"].objUp"
m=o.i(0,g)
if(m==null)H.t(P.u(b7+g+b8))
H.l(m,"$iI")
o=b5.y
g=i+"s["+n+"].objRight"
f=o.i(0,g)
if(f==null)H.t(P.u(b7+g+b8))
H.l(f,"$iI")
o=b5.y
g=i+"s["+n+"].objDir"
e=o.i(0,g)
if(e==null)H.t(P.u(b7+g+b8))
H.l(e,"$iI")
d=e
c=f
b=m}else{d=b6
c=d
b=c}o=b5.y
g=i+"s["+n+"].viewDir"
m=o.i(0,g)
if(m==null)H.t(P.u(b7+g+b8))
H.l(m,"$iI")
o=b5.y
g=i+"s["+n+"].color"
f=o.i(0,g)
if(f==null)H.t(P.u(b7+g+b8))
H.l(f,"$iI")
if(p){p=b5.y
o=i+"sTexture2D"+n
e=p.i(0,o)
if(e==null)H.t(P.u(b7+o+b8))
H.l(e,"$ia1")
a=e}else a=b6
h.push(new A.ce(b,c,d,m,f,a))}b5.c9.m(0,j,h)
q=b5.c8
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.t(P.u(b7+o+b8))
q.m(0,j,m)}for(t=c0.Q,s=t.length,r=[A.cg],l=0;l<t.length;t.length===s||(0,H.p)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.e(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.i(0,o)
if(m==null)H.t(P.u(b7+o+b8))
H.l(m,"$iI")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.i(0,o)
if(f==null)H.t(P.u(b7+o+b8))
H.l(f,"$iI")
p=b5.y
o=i+"s["+n+"].color"
e=p.i(0,o)
if(e==null)H.t(P.u(b7+o+b8))
H.l(e,"$iI")
if(typeof j!=="number")return j.am()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
a0=p.i(0,o)
if(a0==null)H.t(P.u(b7+o+b8))
H.l(a0,"$icf")
a1=a0}else a1=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
a0=p.i(0,o)
if(a0==null)H.t(P.u(b7+o+b8))
H.l(a0,"$ibh")
a=a0}else a=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
a0=p.i(0,o)
if(a0==null)H.t(P.u(b7+o+b8))
H.l(a0,"$ibh")
p=b5.y
o=i+"s["+n+"].shadowAdj"
a2=p.i(0,o)
if(a2==null)H.t(P.u(b7+o+b8))
H.l(a2,"$icd")
a3=a0
a4=a2}else{a3=b6
a4=a3}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
a0=p.i(0,o)
if(a0==null)H.t(P.u(b7+o+b8))
H.l(a0,"$iU")
p=b5.y
o=i+"s["+n+"].att1"
a2=p.i(0,o)
if(a2==null)H.t(P.u(b7+o+b8))
H.l(a2,"$iU")
p=b5.y
o=i+"s["+n+"].att2"
a5=p.i(0,o)
if(a5==null)H.t(P.u(b7+o+b8))
H.l(a5,"$iU")
a6=a5
a7=a2
a8=a0}else{a6=b6
a7=a6
a8=a7}h.push(new A.cg(m,f,a1,e,a,a3,a4,a8,a7,a6))}b5.cb.m(0,j,h)
q=b5.ca
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.t(P.u(b7+o+b8))
q.m(0,j,m)}for(t=c0.ch,s=t.length,r=[A.ch],l=0;l<t.length;t.length===s||(0,H.p)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.e(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.i(0,o)
if(m==null)H.t(P.u(b7+o+b8))
H.l(m,"$iI")
p=b5.y
o=i+"s["+n+"].objDir"
f=p.i(0,o)
if(f==null)H.t(P.u(b7+o+b8))
H.l(f,"$iI")
p=b5.y
o=i+"s["+n+"].viewPnt"
e=p.i(0,o)
if(e==null)H.t(P.u(b7+o+b8))
H.l(e,"$iI")
p=b5.y
o=i+"s["+n+"].color"
a0=p.i(0,o)
if(a0==null)H.t(P.u(b7+o+b8))
H.l(a0,"$iI")
if(typeof j!=="number")return j.am()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
a2=p.i(0,o)
if(a2==null)H.t(P.u(b7+o+b8))
H.l(a2,"$iI")
p=b5.y
o=i+"s["+n+"].objRight"
a5=p.i(0,o)
if(a5==null)H.t(P.u(b7+o+b8))
H.l(a5,"$iI")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.i(0,o)
if(a9==null)H.t(P.u(b7+o+b8))
H.l(a9,"$iU")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.i(0,o)
if(b0==null)H.t(P.u(b7+o+b8))
H.l(b0,"$iU")
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
if(a2==null)H.t(P.u(b7+g+b8))
H.l(a2,"$icd")
a4=a2}else a4=b6
if((j&8)!==0){o=b5.y
g=i+"s["+n+"].cutoff"
a2=o.i(0,g)
if(a2==null)H.t(P.u(b7+g+b8))
H.l(a2,"$iU")
o=b5.y
g=i+"s["+n+"].coneAngle"
a5=o.i(0,g)
if(a5==null)H.t(P.u(b7+g+b8))
H.l(a5,"$iU")
b3=a5
b4=a2}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
g=i+"s["+n+"].att0"
a2=o.i(0,g)
if(a2==null)H.t(P.u(b7+g+b8))
H.l(a2,"$iU")
o=b5.y
g=i+"s["+n+"].att1"
a5=o.i(0,g)
if(a5==null)H.t(P.u(b7+g+b8))
H.l(a5,"$iU")
o=b5.y
g=i+"s["+n+"].att2"
a9=o.i(0,g)
if(a9==null)H.t(P.u(b7+g+b8))
H.l(a9,"$iU")
a6=a9
a7=a5
a8=a2}else{a6=b6
a7=a6
a8=a7}if((j&1)!==0){o=b5.y
g=i+"sTexture2D"+n
a2=o.i(0,g)
if(a2==null)H.t(P.u(b7+g+b8))
H.l(a2,"$ia1")
a=a2}else a=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
a2=p.i(0,o)
if(a2==null)H.t(P.u(b7+o+b8))
H.l(a2,"$ia1")
a3=a2}else a3=b6
h.push(new A.ch(m,f,e,a0,b,c,b2,b1,a4,b4,b3,a8,a7,a6,a,a3))}b5.cd.m(0,j,h)
q=b5.cc
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.t(P.u(b7+o+b8))
q.m(0,j,m)}}},
ao:function(a,b){if(b!=null&&b.d)a.ej(b)},
h4:function(a,b){}}
A.cR.prototype={
h:function(a){return"dirLight"+H.e(this.a)}}
A.df.prototype={
h:function(a){return"pointLight"+H.e(this.a)}}
A.dn.prototype={
h:function(a){return"spotLight"+H.e(this.a)}}
A.h1.prototype={
h:function(a){return this.aF}}
A.ce.prototype={}
A.cg.prototype={}
A.ch.prototype={}
A.dk.prototype={
cL:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
dT:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.cW(b,35633)
r.f=r.cW(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!u.getProgramParameter(r.r,35714)){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.t(P.u("Failed to link shader: "+H.e(s)))}r.h6()
r.h8()},
a2:function(a){a.a.useProgram(this.r)
this.x.hF()},
cW:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.d(P.u("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
h6:function(){var u,t,s,r=this,q=H.c([],[A.cJ]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.v(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cJ(p,t.name,s))}r.x=new A.eP(q)},
h8:function(){var u,t,s,r=this,q=H.c([],[A.dB]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.v(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.hy(t.type,t.size,t.name,s))}r.y=new A.iy(q)},
aP:function(a,b,c){var u=this.a
if(a===1)return new A.dC(u,b,c)
else return A.kQ(u,this.r,b,a,c)},
eR:function(a,b,c){var u=this.a
if(a===1)return new A.a1(u,b,c)
else return A.kQ(u,this.r,b,a,c)},
eS:function(a,b,c){var u=this.a
if(a===1)return new A.bh(u,b,c)
else return A.kQ(u,this.r,b,a,c)},
bl:function(a,b){return new P.dU(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
hy:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aP(b,c,d)
case 5121:return u.aP(b,c,d)
case 5122:return u.aP(b,c,d)
case 5123:return u.aP(b,c,d)
case 5124:return u.aP(b,c,d)
case 5125:return u.aP(b,c,d)
case 5126:return new A.U(u.a,c,d)
case 35664:return new A.iu(u.a,c,d)
case 35665:return new A.I(u.a,c,d)
case 35666:return new A.cd(u.a,c,d)
case 35667:return new A.iv(u.a,c,d)
case 35668:return new A.iw(u.a,c,d)
case 35669:return new A.ix(u.a,c,d)
case 35674:return new A.iz(u.a,c,d)
case 35675:return new A.cf(u.a,c,d)
case 35676:return new A.ac(u.a,c,d)
case 35678:return u.eR(b,c,d)
case 35680:return u.eS(b,c,d)
case 35670:throw H.d(u.bl("BOOL",c))
case 35671:throw H.d(u.bl("BOOL_VEC2",c))
case 35672:throw H.d(u.bl("BOOL_VEC3",c))
case 35673:throw H.d(u.bl("BOOL_VEC4",c))
default:throw H.d(P.u("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.hW.prototype={}
A.dB.prototype={}
A.iy.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
N:function(a,b){var u=this.i(0,b)
if(u==null)throw H.d(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return u},
h:function(a){return this.P()},
P:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.p)(u),++r)s+=u[r].h(0)+"\n"
return s}}
A.dC.prototype={
h:function(a){return"Uniform1i: "+H.e(this.c)}}
A.iv.prototype={
h:function(a){return"Uniform2i: "+H.e(this.c)}}
A.iw.prototype={
h:function(a){return"Uniform3i: "+H.e(this.c)}}
A.ix.prototype={
h:function(a){return"Uniform4i: "+H.e(this.c)}}
A.it.prototype={
h:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.U.prototype={
h:function(a){return"Uniform1f: "+H.e(this.c)}}
A.iu.prototype={
h:function(a){return"Uniform2f: "+H.e(this.c)}}
A.I.prototype={
h:function(a){return"Uniform3f: "+H.e(this.c)}}
A.cd.prototype={
h:function(a){return"Uniform4f: "+H.e(this.c)}}
A.iz.prototype={
h:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.cf.prototype={
an:function(a){var u=new Float32Array(H.bD(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
h:function(a){return"UniformMat3: "+H.e(this.c)}}
A.ac.prototype={
an:function(a){var u=new Float32Array(H.bD(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
h:function(a){return"UniformMat4: "+H.e(this.c)}}
A.a1.prototype={
ej:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
h:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.bh.prototype={
ek:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
h:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.jL.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cl(s.b,b).cl(s.d.cl(s.c,b),c)
a.sa0(0,new V.N(r.a,r.b,r.c))
a.se9(r.q(0,Math.sqrt(r.B(r))))
s=1-b
u=1-c
a.sdl(new V.ai(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)}}
F.jW.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)}}
F.jY.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.v(p)
s=-s*p
u=r*p
a.sa0(0,new V.N(s,u,q))
u=new V.z(s,u,q)
a.se9(u.q(0,Math.sqrt(u.B(u))))
a.sdl(new V.ai(1-c,2+c,-1,-1))}}
F.jZ.prototype={
$1:function(a){return this.a.$2(a,1)}}
F.k_.prototype={
$1:function(a){return this.a.$2(1-a,0)}}
F.kn.prototype={
$2:function(a,b){return 0}}
F.ko.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.v(s)
u=a.f
t=new V.z(u.a,u.b,u.c)
s=t.q(0,Math.sqrt(t.B(t))).u(0,this.b+s)
a.sa0(0,new V.N(s.a,s.b,s.c))}}
F.kr.prototype={
$1:function(a){return new V.N(Math.cos(a),Math.sin(a),0)}}
F.k7.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.N(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)}}
F.jX.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.lb(n.$1(o),m)
m=J.lb(n.$1(o+3.141592653589793/p.c),m).M(0,l)
m=new V.z(m.a,m.b,m.c)
u=m.q(0,Math.sqrt(m.B(m)))
n=$.lX
if(n==null){n=new V.z(1,0,0)
$.lX=n
t=n}else t=n
n=u.aE(!J.E(u,t)?V.lZ():t)
s=n.q(0,Math.sqrt(n.B(n)))
n=s.aE(u)
t=n.q(0,Math.sqrt(n.B(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.u(0,n*m)
m=s.u(0,q*m)
a.sa0(0,l.C(0,new V.N(n.a-m.a,n.b-m.b,n.c-m.c)))}}
F.b3.prototype={
b8:function(){var u=this
if(!u.gb9()){C.b.L(u.a.a.d.b,u)
u.a.a.a3()}u.bT()
u.bU()
u.fX()},
bY:function(a){this.a=a
a.d.b.push(this)},
bZ:function(a){this.b=a
a.d.c.push(this)},
h5:function(a){this.c=a
a.d.d.push(this)},
bT:function(){var u=this.a
if(u!=null){C.b.L(u.d.b,this)
this.a=null}},
bU:function(){var u=this.b
if(u!=null){C.b.L(u.d.c,this)
this.b=null}},
fX:function(){var u=this.c
if(u!=null){C.b.L(u.d.d,this)
this.c=null}},
gb9:function(){return this.a==null||this.b==null||this.c==null},
eM:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.ci()
if(q!=null)s=s.C(0,q)
if(u!=null)s=s.C(0,u)
if(t!=null)s=s.C(0,t)
if(s.dU())return
return s.q(0,Math.sqrt(s.B(s)))},
eO:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.M(0,q)
r=new V.z(r.a,r.b,r.c)
s=r.q(0,Math.sqrt(r.B(r)))
r=t.M(0,q)
r=new V.z(r.a,r.b,r.c)
r=s.aE(r.q(0,Math.sqrt(r.B(r))))
return r.q(0,Math.sqrt(r.B(r)))},
c2:function(){var u,t=this
if(t.d!=null)return!0
u=t.eM()
if(u==null){u=t.eO()
if(u==null)return!1}t.d=u
t.a.a.a3()
return!0},
eL:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.ci()
if(q!=null)s=s.C(0,q)
if(u!=null)s=s.C(0,u)
if(t!=null)s=s.C(0,t)
if(s.dU())return
return s.q(0,Math.sqrt(s.B(s)))},
eN:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.A().a){l=d.M(0,g)
l=new V.z(l.a,l.b,l.c)
q=l.q(0,Math.sqrt(l.B(l)))
if(s.a-t.a<0)q=q.T(0)}else{p=(l-u.b)/r
l=d.M(0,g).u(0,p).C(0,g).M(0,j)
l=new V.z(l.a,l.b,l.c)
q=l.q(0,Math.sqrt(l.B(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.T(0)}l=n.d
if(l!=null){o=l.q(0,Math.sqrt(l.B(l)))
l=o.aE(q)
l=l.q(0,Math.sqrt(l.B(l))).aE(o)
q=l.q(0,Math.sqrt(l.B(l)))}return q},
c0:function(){var u,t=this
if(t.e!=null)return!0
u=t.eL()
if(u==null){u=t.eN()
if(u==null)return!1}t.e=u
t.a.a.a3()
return!0},
ghs:function(a){var u=this
if(J.E(u.a,u.b))return!0
if(J.E(u.b,u.c))return!0
if(J.E(u.c,u.a))return!0
return!1},
t:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.P()},
F:function(a){var u,t,s=this
if(s.gb9())return a+"disposed"
u=a+C.a.al(J.a4(s.a.e),0)+", "+C.a.al(J.a4(s.b.e),0)+", "+C.a.al(J.a4(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.h(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.h(0)+"}"):u+"-}"},
P:function(){return this.F("")}}
F.fo.prototype={}
F.hV.prototype={
ba:function(a,b,c){var u,t=b.a
t.a.a.w()
t=t.e
u=c.a
u.a.a.w()
if(t==u.e){t=b.b
t.a.a.w()
t=t.e
u=c.b
u.a.a.w()
if(t==u.e){t=b.c
t.a.a.w()
t=t.e
u=c.c
u.a.a.w()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.w()
t=t.e
u=c.b
u.a.a.w()
if(t==u.e){t=b.b
t.a.a.w()
t=t.e
u=c.c
u.a.a.w()
if(t==u.e){t=b.c
t.a.a.w()
t=t.e
u=c.a
u.a.a.w()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.w()
t=t.e
u=c.c
u.a.a.w()
if(t==u.e){t=b.b
t.a.a.w()
t=t.e
u=c.a
u.a.a.w()
if(t==u.e){t=b.c
t.a.a.w()
t=t.e
u=c.b
u.a.a.w()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.bX.prototype={
b8:function(){var u=this
if(!u.gb9()){C.b.L(u.a.a.c.b,u)
u.a.a.a3()}u.bT()
u.bU()},
bY:function(a){this.a=a
a.c.b.push(this)},
bZ:function(a){this.b=a
a.c.c.push(this)},
bT:function(){var u=this.a
if(u!=null){C.b.L(u.c.b,this)
this.a=null}},
bU:function(){var u=this.b
if(u!=null){C.b.L(u.c.c,this)
this.b=null}},
gb9:function(){return this.a==null||this.b==null},
t:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.P()},
F:function(a){if(this.gb9())return a+"disposed"
return a+C.a.al(J.a4(this.a.e),0)+", "+C.a.al(J.a4(this.b.e),0)},
P:function(){return this.F("")}}
F.fL.prototype={}
F.is.prototype={
ba:function(a,b,c){var u,t=b.a
t.a.a.w()
t=t.e
u=c.a
u.a.a.w()
if(t==u.e){t=b.b
t.a.a.w()
t=t.e
u=c.b
u.a.a.w()
return t==u.e}else{t=b.a
t.a.a.w()
t=t.e
u=c.b
u.a.a.w()
if(t==u.e){t=b.b
t.a.a.w()
t=t.e
u=c.a
u.a.a.w()
return t==u.e}else return!1}}}
F.c5.prototype={
t:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.P()},
F:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.a.al(J.a4(u.e),0)},
P:function(){return this.F("")}}
F.hM.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.C():u},
bb:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.w()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.p)(g),++s){r=g[s]
h.a.n(0,r.hv())}h.a.w()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.p)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.C()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
n=p[o]
h.b.a.a.n(0,n)
o=new F.c5()
if(n.a==null)H.t(P.u("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.D(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.p)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.C()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.w()
p=p.e
if(typeof p!=="number")return p.C()
p+=u
o=o.c
if(p>=o.length)return H.b(o,p)
k=o[p]
p=h.c.a
p.a.n(0,l)
p.a.n(0,k)
F.nc(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.p)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.C()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.w()
p=p.e
if(typeof p!=="number")return p.C()
p+=u
o=o.c
if(p>=o.length)return H.b(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.C()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
i=p[o]
o=h.d.a
o.a.n(0,l)
o.a.n(0,k)
o.a.n(0,i)
F.bR(l,k,i)}g=h.e
if(g!=null)g.ar(0)},
ap:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.ap()||!1
if(!t.a.ap())u=!1
s=t.e
if(s!=null)s.ar(0)
return u},
hV:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.c(o.slice(0),[H.cC(o,0)])
for(o=[F.aU];u.length!==0;){t=C.b.ghK(u)
C.b.e2(u,0)
if(t!=null){s=H.c([],o)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.b(u,r)
q=u[r]
if(q!=null&&a.ba(0,t,q)){s.push(q)
C.b.e2(u,r)}}if(s.length>1)b.bb(s)}}p.a.w()
p.c.cv()
p.d.cv()
p.b.ic()
p.c.cw(new F.is())
p.d.cw(new F.hV())
o=p.e
if(o!=null)o.ar(0)},
c_:function(){this.hV(new F.iW(),new F.hp())},
dq:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.ap()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.aZ().a)!==0)++s
if((t&$.aY().a)!==0)++s
if((t&$.b_().a)!==0)++s
if((t&$.bk().a)!==0)++s
if((t&$.cE().a)!==0)++s
if((t&$.cF().a)!==0)++s
if((t&$.bK().a)!==0)++s
if((t&$.aX().a)!==0)++s
r=a4.gcH(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.c(u,[P.M])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.cK])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.hl(m)
k=l.gcH(l)
if(m>=t)return H.b(o,m)
o[m]=new Z.cK(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.b(i,j)
h=i[j].hU(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.b(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.bD(p)),35044)
u.bindBuffer(a1,null)
c=new Z.bN(new Z.dK(a1,d),o,a4)
c.b=H.c([],[Z.bs])
if(a0.b.b.length!==0){b=H.c([],[P.w])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.w()
b.push(t.e)}a=Z.kU(u,34963,b)
c.b.push(new Z.bs(0,b.length,a))}if(a0.c.b.length!==0){b=H.c([],[P.w])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.w()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.b(t,m)
t=t[m].b
t.a.a.w()
b.push(t.e)}a=Z.kU(u,34963,b)
c.b.push(new Z.bs(1,b.length,a))}if(a0.d.b.length!==0){b=H.c([],[P.w])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.w()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.b(t,m)
t=t[m].b
t.a.a.w()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.b(t,m)
t=t[m].c
t.a.a.w()
b.push(t.e)}a=Z.kU(u,34963,b)
c.b.push(new Z.bs(4,b.length,a))}return c},
h:function(a){var u=this,t="   ",s=H.c([],[P.k])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.F(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.F(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.F(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.F(t))}return C.b.k(s,"\n")},
a3:function(){var u=this.e
if(u!=null)u.D(null)}}
F.hO.prototype={
dg:function(a){var u,t,s,r,q,p=H.c([],[F.b3]),o=a.length
if(o>0){u=a[0]
for(t=this.a,s=2;s<o;++s){r=s-1
q=a.length
if(r>=q)return H.b(a,r)
r=a[r]
if(s>=q)return H.b(a,s)
q=a[s]
t.a.n(0,u)
t.a.n(0,r)
t.a.n(0,q)
p.push(F.bR(u,r,q))}}return p},
hi:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.c([],[F.b3])
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
if(p){n.n(0,m)
u.a.n(0,l)
u.a.n(0,j)
h.push(F.bR(m,l,j))
u.a.n(0,m)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.bR(m,j,i))}else{n.n(0,l)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.bR(l,j,i))
u.a.n(0,l)
u.a.n(0,i)
u.a.n(0,m)
h.push(F.bR(l,i,m))}p=!p}r=!r}return h},
gl:function(a){return this.b.length},
cw:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.b(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.i(0,q)
for(o=q-1;o>=0;--o){n=r.d.i(0,o)
if(a.ba(0,p,n)){p.b8()
break}}}}},
cv:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
s=t[u]
t=s.ghs(s)
if(t)s.b8()}},
ap:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.p)(u),++r)if(!u[r].c2())s=!1
return s},
c1:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.p)(u),++r)if(!u[r].c0())s=!1
return s},
h:function(a){return this.P()},
F:function(a){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].F(a))
return C.b.k(r,"\n")},
P:function(){return this.F("")}}
F.hP.prototype={
gl:function(a){return this.b.length},
cw:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.b(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.i(0,q)
for(o=q-1;o>=0;--o){n=r.c.i(0,o)
if(a.ba(0,p,n)){p.b8()
break}}}}},
cv:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
s=t[u]
t=J.E(s.a,s.b)
if(t)s.b8()}},
h:function(a){return this.P()},
F:function(a){var u,t,s=H.c([],[P.k]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.b(t,u)
s.push(t[u].F(a+(""+u+". ")))}return C.b.k(s,"\n")},
P:function(){return this.F("")}}
F.hQ.prototype={
gl:function(a){return this.b.length},
ic:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.b.L(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.D(null)}s=t.a
if(s!=null){C.b.L(s.b.b,t)
t.a=null}}}},
h:function(a){return this.P()},
F:function(a){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].F(a))
return C.b.k(r,"\n")},
P:function(){return this.F("")}}
F.aU.prototype={
c5:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.dJ(u.cx,r,o,t,s,q,p,a,n)},
hv:function(){return this.c5(null)},
sa0:function(a,b){var u
if(!J.E(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a3()}},
se9:function(a){var u
if(!J.E(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a3()}},
sdl:function(a){var u
if(!J.E(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a3()}},
hU:function(a){var u,t,s=this
if(a.t(0,$.ap())){u=s.f
t=[P.M]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.aZ())){u=s.r
t=[P.M]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.aY())){u=s.x
t=[P.M]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.b_())){u=s.y
t=[P.M]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.t(0,$.bk())){u=s.z
t=[P.M]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.cE())){u=s.Q
t=[P.M]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.cF())){u=s.Q
t=[P.M]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.t(0,$.bK()))return H.c([s.ch],[P.M])
else if(a.t(0,$.aX())){u=s.cx
t=[P.M]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.M])},
c2:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.ci()
t.d.H(0,new F.j0(s))
s=s.a
t.r=s.q(0,Math.sqrt(s.B(s)))
s=t.a
if(s!=null){s.a3()
s=t.a.e
if(s!=null)s.ar(0)}return!0},
c0:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.ci()
t.d.H(0,new F.j_(s))
s=s.a
t.x=s.q(0,Math.sqrt(s.B(s)))
s=t.a
if(s!=null){s.a3()
s=t.a.e
if(s!=null)s.ar(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.P()},
F:function(a){var u,t,s=this,r="-",q=H.c([],[P.k])
q.push(C.a.al(J.a4(s.e),0))
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
q.push(V.D(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.h(0))
else q.push(r)
t=C.b.k(q,", ")
return a+"{"+t+"}"},
P:function(){return this.F("")}}
F.j0.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.C(0,t)}}}
F.j_.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.C(0,t)}}}
F.iR.prototype={
w:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.b(u,r)
u[r].e=s;++s}this.b=!1}},
n:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.d(P.u("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.a3()
return!0},
dh:function(a,b,c,d,e,f,g){var u=F.dJ(a,null,b,c,d,e,f,g,0)
this.n(0,u)
return u},
bm:function(a,b,c,d,e,f){return this.dh(a,b,c,null,d,e,f)},
hj:function(a,b,c,d,e,f){return this.dh(a,b,c,d,e,f,null)},
gl:function(a){return this.c.length},
ap:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)u[s].c2()
return!0},
c1:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)u[s].c0()
return!0},
hr:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.q(0,Math.sqrt(p*p+o*o+n*n))
if(!J.E(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.D(null)}}}}return!0},
h:function(a){return this.P()},
F:function(a){var u,t,s,r
this.w()
u=H.c([],[P.k])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.p)(t),++r)u.push(t[r].F(a))
return C.b.k(u,"\n")},
P:function(){return this.F("")}}
F.iS.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
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
H:function(a,b){var u=this
C.b.H(u.b,b)
C.b.H(u.c,new F.iT(u,b))
C.b.H(u.d,new F.iU(u,b))},
h:function(a){return this.P()},
P:function(){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].F(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].F(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].F(""))
return C.b.k(r,"\n")}}
F.iT.prototype={
$1:function(a){if(!J.E(a.a,this.a))this.b.$1(a)}}
F.iU.prototype={
$1:function(a){var u=this.a
if(!J.E(a.a,u)&&!J.E(a.b,u))this.b.$1(a)}}
F.iV.prototype={
gl:function(a){return this.b.length+this.c.length},
i:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.b(t,u)
return t[u]}else{if(b<0)return H.b(t,b)
return t[b]}},
h:function(a){return this.P()},
P:function(){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].F(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].F(""))
return C.b.k(r,"\n")}}
F.iX.prototype={}
F.iW.prototype={
ba:function(a,b,c){return J.E(b.f,c.f)}}
F.iY.prototype={}
F.hp.prototype={
bb:function(a){var u,t,s,r,q,p,o,n,m=V.ci()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null)m=new V.z(m.a+s.a,m.b+s.b,m.c+s.c)}m=m.q(0,Math.sqrt(m.B(m)))
for(u=a.length,s=m==null,t=0;t<a.length;a.length===u||(0,H.p)(a),++t){r=a[t]
if(s)q=null
else{p=m.a
o=m.b
n=m.c
q=m.q(0,Math.sqrt(p*p+o*o+n*n))}if(!J.E(r.r,q)){r.r=q
p=r.a
if(p!=null){p=p.e
if(p!=null)p.D(null)}}}return}}
F.iZ.prototype={
gl:function(a){return this.b.length},
h:function(a){return this.P()},
P:function(){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].F(""))
return C.b.k(r,"\n")}}
O.d6.prototype={
gp:function(){var u=this.fr
return u==null?this.fr=D.C():u},
Y:function(a){var u=this.fr
if(u!=null)u.D(a)},
b1:function(){return this.Y(null)},
d4:function(a){this.a=null
this.Y(a)},
h0:function(){return this.d4(null)},
f5:function(a,b){var u=new D.b4()
u.b=!0
this.Y(u)},
f7:function(a,b){var u=new D.b5()
u.b=!0
this.Y(u)},
cT:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.w,h=new H.O([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=h.i(0,0)
h.m(0,0,r==null?1:r)}q=H.c([],[A.cR])
h.H(0,new O.h5(j,q))
C.b.bA(q,new O.h6())
p=new H.O([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){o=u[s]
r=o.gb7()
n=p.i(0,o.gb7())
p.m(0,r,n==null?1:n)}m=H.c([],[A.df])
p.H(0,new O.h7(j,m))
C.b.bA(m,new O.h8())
l=new H.O([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.p)(i),++s){o=i[s]
t=o.gb7()
r=l.i(0,o.gb7())
l.m(0,t,r==null?1:r)}k=H.c([],[A.dn])
l.H(0,new O.h9(j,k))
C.b.bA(k,new O.ha())
i=C.c.ac(j.e.a.length+3,4)
j.dy.e
return A.nj(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
ai:function(a,b){if(b!=null)if(!C.b.V(a,b)){b.a=a.length
a.push(b)}},
at:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.a5(u,u.length);u.A();){t=u.d
t.toString
s=$.iQ
if(s==null)s=$.iQ=new V.z(0,0,1)
t.a=s
r=$.iP
t.d=r==null?$.iP=new V.z(0,1,0):r
r=$.iO
t.e=r==null?$.iO=new V.z(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bx(s)
r=s.a
p=s.b
o=s.c
t.a=s.q(0,Math.sqrt(r*r+p*p+o*o))
o=q.bx(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.q(0,Math.sqrt(p*p+r*r+s*s))
s=q.bx(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.q(0,Math.sqrt(r*r+p*p+o*o))}}}},
e3:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=a9.a
if(b0==null){b0=a9.cT()
u=b1.fr.i(0,b0.aF)
if(u==null){u=A.ni(b0,b1.a)
b1.dj(u)}b0=a9.a=u
b2.e=null}t=b0.z
s=t.dv
b0=b2.e
if(!(b0 instanceof Z.bN))b0=b2.e=null
if(b0==null||!b0.d.t(0,s)){b0=t.k3
if(b0)b2.d.ap()
r=t.k4
if(r){q=b2.d
p=q.e
if(p!=null)++p.d
q.d.c1()
q.a.c1()
q=q.e
if(q!=null)q.ar(0)}q=t.r2
if(q){p=b2.d
o=p.e
if(o!=null)++o.d
p.a.hr()
p=p.e
if(p!=null)p.ar(0)}n=b2.d.dq(new Z.dL(b1.a),s)
n.aG($.ap()).e=a9.a.Q.c
if(b0)n.aG($.aZ()).e=a9.a.cx.c
if(r)n.aG($.aY()).e=a9.a.ch.c
if(t.r1)n.aG($.b_()).e=a9.a.cy.c
if(q)n.aG($.bk()).e=a9.a.db.c
if(t.rx)n.aG($.aX()).e=a9.a.dx.c
b2.e=n}m=H.c([],[T.du])
a9.a.a2(b1)
if(t.dy){b0=a9.a
r=b1.dx
r=r.ga6(r)
b0=b0.dy
b0.toString
b0.an(r.ah(0,!0))}if(t.fr){b0=a9.a
r=b1.cx
if(r==null){r=b1.db
r=r.ga6(r)
q=b1.dx
q=b1.cx=r.u(0,q.ga6(q))
r=q}b0=b0.fr
b0.toString
b0.an(r.ah(0,!0))}b0=a9.a
r=b1.ch
if(r==null){r=b1.gia()
q=b1.dx
q=b1.ch=r.u(0,q.ga6(q))
r=q}b0=b0.fy
b0.toString
b0.an(r.ah(0,!0))
if(t.ry){b0=a9.a
r=a9.b
b0=b0.k1
b0.toString
b0.an(C.j.ah(r,!0))}if(t.x1){b0=a9.a
r=a9.c
b0=b0.k2
b0.toString
b0.an(C.j.ah(r,!0))}if(t.x2){b0=a9.a
r=a9.d
b0=b0.k3
b0.toString
b0.an(C.j.ah(r,!0))}if(t.y2>0){l=a9.e.a.length
b0=a9.a.k4
b0.a.uniform1i(b0.d,l)
for(k=0;k<l;++k){b0=a9.a
r=a9.e.a
if(k>=r.length)return H.b(r,k)
r=r[k]
b0=b0.r1
if(k>=b0.length)return H.b(b0,k)
b0=b0[k]
j=new Float32Array(H.bD(r.ah(0,!0)))
b0.a.uniformMatrix4fv(b0.d,!1,j)}}b0=t.a
if(b0.a){r=a9.a
q=a9.f.f
r=r.r2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.b){a9.ai(m,a9.f.d)
b0=a9.a
r=a9.f.d
b0.ao(b0.rx,r)}if(t.id){b0=t.b
if(b0.a){r=a9.a
q=a9.r.f
r=r.x1
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.b){a9.ai(m,a9.r.d)
b0=a9.a
r=a9.r.d
b0.ao(b0.x2,r)}b0=t.c
if(b0.a){r=a9.a
q=a9.x.f
r=r.y2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.b){a9.ai(m,a9.x.d)
b0=a9.a
r=a9.x.d
b0.ao(b0.aF,r)}b0=t.d
if(b0.a){r=a9.a
q=a9.y.f
r=r.dw
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.b){a9.ai(m,a9.y.d)
b0=a9.a
r=a9.y.d
b0.ao(b0.dz,r)}b0=t.e
r=b0.a
if(r||b0.b||!1){q=a9.a
p=a9.z.ch
q=q.dC
q.a.uniform1f(q.d,p)}if(r){r=a9.a
q=a9.z.f
r=r.dA
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.b){a9.ai(m,a9.z.d)
b0=a9.a
r=a9.z.d
b0.ao(b0.dB,r)}b0=t.z
if(b0.length>0){r=b1.db
i=r.ga6(r)
r=P.w
h=new H.O([r,r])
for(r=a9.dx.e,q=r.length,g=0;g<r.length;r.length===q||(0,H.p)(r),++g){f=r[g]
e=h.i(0,0)
if(e==null)e=0
h.m(0,0,e+1)
d=J.cG(a9.a.c9.i(0,0),e)
p=i.bx(f.a)
o=p.a
c=p.b
b=p.c
b=p.q(0,Math.sqrt(o*o+c*c+b*b))
c=d.e
o=b.a
p=b.b
b=b.c
c.a.uniform3f(c.d,o,p,b)
b=f.c
p=d.f
p.a.uniform3f(p.d,b.a,b.b,b.c)}for(r=b0.length,g=0;g<b0.length;b0.length===r||(0,H.p)(b0),++g){q=b0[g].a
l=h.i(0,q)
if(l==null)l=0
q=a9.a.c8.i(0,q)
q.a.uniform1i(q.d,l)}}b0=t.Q
if(b0.length>0){r=b1.db
i=r.ga6(r)
r=P.w
a=new H.O([r,r])
for(r=a9.dx.f,q=r.length,g=0;g<r.length;r.length===q||(0,H.p)(r),++g){f=r[g]
a0=f.gb7()
e=a.i(0,a0)
if(e==null)e=0
a.m(0,a0,e+1)
d=J.cG(a9.a.cb.i(0,a0),e)
a1=i.u(0,f.ga6(f))
p=f.ga6(f)
o=$.c6
p=p.cA(o==null?$.c6=new V.N(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=$.c6
p=a1.cA(p==null?$.c6=new V.N(0,0,0):p)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gb6(f)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
f.gaK()
p=a1.cj(0)
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
j=new Float32Array(H.bD(new V.d7(o,c,b,a2,a3,a4,a5,a6,p).ah(0,!0)))
a7.a.uniformMatrix3fv(a7.d,!1,j)
f.gaK()
p=f.gaK()
if(!C.b.V(m,p)){p.a=m.length
m.push(p)}p=f.gaK()
o=p.gcm(p)
if(o){o=d.f
o.toString
c=p.d
if(c<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}f.gb_()
p=f.gel()
o=d.x
o.toString
c=p.ghC(p)
b=p.ghD(p)
a2=p.ghE()
p=p.ghB()
o.a.uniform4f(o.d,c,b,a2,p)
p=f.gb_()
if(!C.b.V(m,p)){p.a=m.length
m.push(p)}p=f.gb_()
o=p.gcm(p)
if(o){o=d.r
o.toString
c=p.d
if(c<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}if(f.ghG()){p=f.ghm()
o=d.y
o.a.uniform1f(o.d,p)
p=f.ghn()
o=d.z
o.a.uniform1f(o.d,p)
p=f.gho()
o=d.Q
o.a.uniform1f(o.d,p)}}for(r=b0.length,g=0;g<b0.length;b0.length===r||(0,H.p)(b0),++g){q=b0[g].a
l=a.i(0,q)
if(l==null)l=0
q=a9.a.ca.i(0,q)
q.a.uniform1i(q.d,l)}}b0=t.ch
if(b0.length>0){r=b1.db
i=r.ga6(r)
r=P.w
a8=new H.O([r,r])
for(r=a9.dx.r,q=r.length,g=0;g<r.length;r.length===q||(0,H.p)(r),++g){f=r[g]
a0=f.gb7()
e=a8.i(0,a0)
if(e==null)e=0
a8.m(0,a0,e+1)
d=J.cG(a9.a.cd.i(0,a0),e)
p=f.gi9(f)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.giv(f).iH()
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=i.cA(f.gi9(f))
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gb6(f)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
f.gaK()
p=f.gcB()
o=d.f
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gcz(f)
o=d.r
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.giI()
o=d.x
o.a.uniform1f(o.d,p)
p=f.giJ()
o=d.y
o.a.uniform1f(o.d,p)
f.gaK()
p=f.gaK()
if(!C.b.V(m,p)){p.a=m.length
m.push(p)}p=f.gaK()
o=p.gcm(p)
if(o){o=d.dx
o.toString
c=p.d
if(!c)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}f.gb_()
p=f.gel()
o=d.z
o.toString
c=p.ghC(p)
b=p.ghD(p)
a2=p.ghE()
p=p.ghB()
o.a.uniform4f(o.d,c,b,a2,p)
p=f.gb_()
if(!C.b.V(m,p)){p.a=m.length
m.push(p)}p=f.gb_()
o=p.gcm(p)
if(o){o=d.dy
o.toString
c=p.d
if(!c)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}if(f.giw()){p=f.giu()
o=d.Q
o.a.uniform1f(o.d,p)
p=f.git()
o=d.ch
o.a.uniform1f(o.d,p)}if(f.ghG()){p=f.ghm()
o=d.cx
o.a.uniform1f(o.d,p)
p=f.ghn()
o=d.cy
o.a.uniform1f(o.d,p)
p=f.gho()
o=d.db
o.a.uniform1f(o.d,p)}}for(r=b0.length,g=0;g<b0.length;b0.length===r||(0,H.p)(b0),++g){q=b0[g].a
l=a8.i(0,q)
if(l==null)l=0
q=a9.a.cc.i(0,q)
q.a.uniform1i(q.d,l)}}}if(t.f.b){a9.ai(m,a9.Q.d)
b0=a9.a
r=a9.Q.d
b0.ao(b0.dD,r)}if(t.dx){b0=a9.a
r=b1.Q
if(r==null){r=b1.db
r=b1.Q=r.ga6(r).cj(0)}b0=b0.id
b0.toString
b0.an(r.ah(0,!0))}if(t.cy){a9.ai(m,a9.ch)
b0=a9.a
r=a9.ch
b0.h4(b0.dE,r)
b0=t.r
if(b0.a){r=a9.a
q=a9.cx.f
r=r.dF
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.b){a9.ai(m,a9.cx.d)
b0=a9.a
r=a9.cx.d
b0.ao(b0.dG,r)}b0=t.x
r=b0.a
if(r||b0.b||!1){q=a9.a
p=a9.cy.ch
q=q.dH
q.a.uniform1f(q.d,p)}if(r){r=a9.a
q=a9.cy.f
r=r.dI
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.b){a9.ai(m,a9.cy.d)
b0=a9.a
r=a9.cy.d
b0.ao(b0.dJ,r)}}b0=t.y
r=b0.a
q=!r
if(!q||b0.b||!1){if(r){r=a9.a
p=a9.db.f
r=r.dK
r.a.uniform1f(r.d,p)}if(b0.b){a9.ai(m,a9.db.d)
r=a9.a
p=a9.db.d
r.ao(r.dL,p)}r=b1.a
r.enable(3042)
r.blendFunc(770,771)}for(r=b1.a,k=0;k<m.length;++k){p=m[k]
if(!p.c&&p.d){p.c=!0
r.activeTexture(33984+p.a)
r.bindTexture(3553,p.b)}}p=b2.e
p.a2(b1)
p.ag(b1)
p.as(b1)
if(!q||b0.b||!1)r.disable(3042)
for(k=0;k<m.length;++k){b0=m[k]
if(b0.c){b0.c=!1
r.activeTexture(33984+b0.a)
r.bindTexture(3553,null)}}b0=a9.a
b0.toString
r.useProgram(null)
b0.x.dt()},
h:function(a){var u=this.a
if(u!=null)return u.b
else return this.cT().aF}}
O.h5.prototype={
$2:function(a,b){if(typeof b!=="number")return b.C()
return this.b.push(new A.cR(a,C.c.ac(b+3,4)*4))}}
O.h6.prototype={
$2:function(a,b){return J.kv(a.a,b.a)}}
O.h7.prototype={
$2:function(a,b){if(typeof b!=="number")return b.C()
return this.b.push(new A.df(a,C.c.ac(b+3,4)*4))}}
O.h8.prototype={
$2:function(a,b){return J.kv(a.a,b.a)}}
O.h9.prototype={
$2:function(a,b){if(typeof b!=="number")return b.C()
return this.b.push(new A.dn(a,C.c.ac(b+3,4)*4))}}
O.ha.prototype={
$2:function(a,b){return J.kv(a.a,b.a)}}
O.h_.prototype={
aC:function(){var u,t=this
t.cJ()
u=t.f
if(!(Math.abs(u-1)<$.A().a)){t.f=1
u=new D.x(t.b,u,1)
u.b=!0
t.a.Y(u)}}}
O.bZ.prototype={
Y:function(a){return this.a.Y(a)},
b1:function(){return this.Y(null)},
aC:function(){},
bV:function(a){var u,t,s=this
if(!s.c.t(0,a)){u=s.c
if(u.a||u.b||!1)t=!(a.a||a.b||!1)
else t=!0
s.c=a
if(t)s.aC()
u=s.a
u.a=null
u.Y(null)}}}
O.h0.prototype={}
O.at.prototype={
d6:function(a){var u,t,s=this
if(!s.f.t(0,a)){u=s.f
s.f=a
t=new D.x(s.b+".color",u,a)
t.b=!0
s.a.Y(t)}},
aC:function(){this.cJ()
this.d6(new V.V(1,1,1))},
sb6:function(a,b){this.bV(new A.a0(!0,this.c.b,!1))
this.d6(b)}}
O.h2.prototype={}
O.h3.prototype={
aC:function(){var u,t=this
t.cK()
u=t.ch
if(!(Math.abs(u-1)<$.A().a)){t.ch=1
u=new D.x(t.b+".refraction",u,1)
u.b=!0
t.a.Y(u)}}}
O.h4.prototype={
d7:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.A().a)){u.ch=a
t=new D.x(u.b+".shininess",t,a)
t.b=!0
u.a.Y(t)}},
aC:function(){this.cK()
this.d7(100)}}
O.dl.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.C():u},
Y:function(a){var u=this.e
if(u!=null)u.D(a)},
b1:function(){return this.Y(null)},
e3:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=a.fr.i(0,n)
if(u==null){t=a.a
u=new A.hW(t,n)
u.cL(t,n)
u.dT(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.i(0,"posAttr")
u.Q=H.l(u.y.i(0,"fov"),"$iU")
u.ch=H.l(u.y.i(0,"ratio"),"$iU")
u.cx=H.l(u.y.i(0,"boxClr"),"$iI")
u.cy=H.l(u.y.i(0,"boxTxt"),"$ibh")
u.db=H.l(u.y.i(0,"viewMat"),"$iac")
a.dj(u)}o.a=u}if(b.e==null){t=b.d.dq(new Z.dL(a.a),$.ap())
t.aG($.ap()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
if(!t.c&&t.d>=6){t.c=!0
s=a.a
s.activeTexture(33985)
s.bindTexture(34067,t.b)}}t=a.d
s=a.c
r=o.a
r.a2(a)
q=o.b
p=r.Q
p.a.uniform1f(p.d,q)
q=r.ch
q.a.uniform1f(q.d,t/s)
s=o.c
r.cy.ek(s)
s=o.d
t=r.cx
t.a.uniform3f(t.d,s.a,s.b,s.c)
s=a.db
s=s.ga6(s).cj(0)
r=r.db
r.toString
r.an(s.ah(0,!0))
t=b.e
if(t instanceof Z.bN){t.a2(a)
t.ag(a)
t.as(a)}else b.e=null
t=o.a
t.toString
s=a.a
s.useProgram(null)
t.x.dt()
t=o.c
if(t!=null)if(t.c){t.c=!1
s.activeTexture(33984+t.a)
s.bindTexture(34067,null)}}}
O.dt.prototype={}
T.du.prototype={}
T.ib.prototype={}
T.ic.prototype={
gp:function(){var u=this.y
return u==null?this.y=D.C():u}}
T.id.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.C():u}}
T.ie.prototype={
aQ:function(a,b,c,d,e,f){var u=document.createElement("img")
u.src=c;++this.d
W.X(u,"load",new T.ig(this,u,!1,b,!1,d,a),!1)},
h1:function(a,b,c){var u,t,s,r
b=V.cD(b)
u=V.cD(a.width)
t=V.cD(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.ky()
s.width=u
s.height=t
r=C.i.eg(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.oN(r.getImageData(0,0,s.width,s.height))}}}
T.ig.prototype={
$1:function(a){var u=this,t=u.a,s=t.h1(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.B.il(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.c7()}++t.e}}
X.eU.prototype={
gp:function(){var u=this.fr
return u==null?this.fr=D.C():u},
a1:function(a){var u=this.fr
if(u!=null)u.D(a)},
sav:function(a,b){var u,t=this
if(b<1)b=1
u=t.a
if(u!==b){t.y=null
t.c=t.a=b
u=new D.x("width",u,b)
u.b=!0
t.a1(u)}},
saq:function(a,b){var u,t=this
if(b<1)b=1
u=t.b
if(u!==b){t.y=null
t.d=t.b=b
u=new D.x("height",u,b)
u.b=!0
t.a1(u)}},
a2:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=3553,e=36161,d=36160
if(h.y==null){u=a.a
t=h.ch
s=h.a
r=h.b
q=u.getParameter(3379)
p=V.cD(s)
o=V.cD(r)
q=V.cD(q)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
u.bindTexture(f,n)
u.texParameteri(f,10242,33071)
u.texParameteri(f,10243,33071)
u.texParameteri(f,10241,9729)
u.texParameteri(f,10240,9729)
C.B.e8(u,f,0,6408,p,o,0,6408,5121,g)
u.bindTexture(f,g)
m=T.lM(n)
m.e=s
m.f=r
m.r=p
m.x=o
if(!m.d){m.d=!0
s=m.y
if(s!=null)s.c7()}t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.c7()
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
a.c=C.d.a4(s*h.a)
r=t.d
a.d=C.d.a4(r*h.b)
l=t.a
k=h.c
j=C.d.a4(l*k)
t=t.b
l=h.d
u.viewport(j,C.d.a4(t*l),C.d.a4(s*k),C.d.a4(r*l))
u.clearDepth(h.db)
if(h.cy){t=h.cx
u.clearColor(t.a,t.b,t.c,t.d)
i=16640}else i=256
if(i>0)u.clear(i)},
as:function(a){a.a.bindFramebuffer(36160,null)}}
X.kx.prototype={}
X.fv.prototype={
gp:function(){var u=this.x
return u==null?this.x=D.C():u},
a2:function(a){var u,t,s,r,q,p,o=a.a
o.bindFramebuffer(36160,null)
o.enable(2884)
o.enable(2929)
o.depthFunc(513)
u=o.drawingBufferWidth
t=o.drawingBufferHeight
s=this.r
r=s.a
if(typeof u!=="number")return H.v(u)
q=C.d.a4(r*u)
r=s.b
if(typeof t!=="number")return H.v(t)
p=C.d.a4(r*t)
r=C.d.a4(s.c*u)
a.c=r
s=C.d.a4(s.d*t)
a.d=s
o.viewport(q,p,r,s)
o.clearDepth(this.c)
s=this.a
o.clearColor(s.a,s.b,s.c,s.d)
o.clear(16640)},
as:function(a){}}
X.fC.prototype={
gp:function(){var u=this.b
return u==null?this.b=D.C():u},
a2:function(a){var u
a.cy.bv(V.bu())
u=V.bu()
a.db.bv(u)},
as:function(a){a.cy.aI()
a.db.aI()}}
X.de.prototype={
gp:function(){var u=this.f
return u==null?this.f=D.C():u},
a1:function(a){var u=this.f
if(u!=null)u.D(a)},
eI:function(){return this.a1(null)},
a2:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.au(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bv(k)
r=$.lC
if(r==null){r=V.lE()
q=V.kT()
p=$.lW
r=V.lv(r,q,p==null?$.lW=new V.z(0,0,-1):p)
$.lC=r
u=r}else u=r
r=s.b
if(r!=null){t=r.aL(0,a,s)
if(t!=null)u=t.u(0,u)}a.db.bv(u)},
as:function(a){a.cy.aI()
a.db.aI()}}
X.i7.prototype={}
V.cM.prototype={
bh:function(a){this.b=new P.fA(C.Q)
this.c=null
this.d=H.c([],[[P.o,W.al]])},
O:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)l.push(H.c([],[W.al]))
u=a.split("\n")
for(l=u.length,t=[W.al],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else m.d.push(H.c([],t))
p=document.createElement("div")
p.className="codePart"
o=m.b.eQ(q,0,q.length)
n=o==null?q:o
C.O.ei(p,H.l7(n," ","&nbsp;"))
n=p.style
n.color=b
C.b.gaz(m.d).push(p)}},
e_:function(a,b){var u,t,s,r,q=this
q.d=H.c([],[[P.o,W.al]])
u=C.b.k(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bo():t).eb(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.p)(t),++r)q.bu(t[r])}}
V.km.prototype={
$1:function(a){var u=C.d.ea(this.a.ghO(),2)
if(u!=="0.00")P.l6(u+" fps")}}
V.fb.prototype={
bu:function(a){var u=this
switch(a.a){case"Class":u.O(a.b,"#551")
break
case"Comment":u.O(a.b,"#777")
break
case"Id":u.O(a.b,"#111")
break
case"Num":u.O(a.b,"#191")
break
case"Reserved":u.O(a.b,"#119")
break
case"String":u.O(a.b,"#171")
break
case"Symbol":u.O(a.b,"#616")
break
case"Type":u.O(a.b,"#B11")
break
case"Whitespace":u.O(a.b,"#111")
break}},
bo:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=R.ik()
a1.c=a1.j(0,r)
u=a1.j(0,r).k(0,q)
t=T.q(new H.m("_"))
u.a.push(t)
t=T.L("a","z")
u.a.push(t)
t=T.L("A","Z")
u.a.push(t)
t=a1.j(0,q).k(0,q)
u=T.q(new H.m("_"))
t.a.push(u)
u=T.L("0","9")
t.a.push(u)
u=T.L("a","z")
t.a.push(u)
u=T.L("A","Z")
t.a.push(u)
u=a1.j(0,r).k(0,p)
t=T.L("0","9")
u.a.push(t)
t=a1.j(0,p).k(0,p)
u=T.L("0","9")
t.a.push(u)
u=a1.j(0,p).k(0,o)
t=T.q(new H.m("."))
u.a.push(t)
t=a1.j(0,o).k(0,n)
u=T.L("0","9")
t.a.push(u)
u=a1.j(0,n).k(0,n)
t=T.L("0","9")
u.a.push(t)
t=a1.j(0,r).k(0,m)
u=T.q(new H.m(l))
t.a.push(u)
u=a1.j(0,m).k(0,m)
t=T.q(new H.m(l))
u.a.push(t)
t=a1.j(0,r).k(0,k)
u=T.q(new H.m('"'))
t.a.push(u)
u=a1.j(0,k).k(0,j)
t=T.q(new H.m('"'))
u.a.push(t)
t=a1.j(0,k).k(0,i)
u=T.q(new H.m("\\"))
t.a.push(u)
u=a1.j(0,i).k(0,k)
t=T.q(new H.m('"'))
u.a.push(t)
a1.j(0,k).k(0,k).a.push(new T.aB())
t=a1.j(0,r).k(0,h)
u=T.q(new H.m("'"))
t.a.push(u)
u=a1.j(0,h).k(0,g)
t=T.q(new H.m("'"))
u.a.push(t)
t=a1.j(0,h).k(0,f)
u=T.q(new H.m("\\"))
t.a.push(u)
u=a1.j(0,f).k(0,h)
t=T.q(new H.m("'"))
u.a.push(t)
a1.j(0,h).k(0,h).a.push(new T.aB())
t=a1.j(0,r).k(0,e)
u=T.q(new H.m("/"))
t.a.push(u)
u=a1.j(0,e).k(0,d)
t=T.q(new H.m("/"))
u.a.push(t)
t=a1.j(0,d).k(0,c)
u=T.q(new H.m("\n"))
t.a.push(u)
u=a1.j(0,d).k(0,d)
t=new T.a6()
s=[T.ba]
t.a=H.c([],s)
u.a.push(t)
u=T.q(new H.m("\n"))
t.a.push(u)
u=a1.j(0,e).k(0,b)
t=T.q(new H.m("*"))
u.a.push(t)
t=a1.j(0,b).k(0,a)
u=T.q(new H.m("*"))
t.a.push(u)
u=a1.j(0,a).k(0,b)
t=new T.a6()
t.a=H.c([],s)
u.a.push(t)
u=T.q(new H.m("*"))
t.a.push(u)
u=a1.j(0,a).k(0,c)
t=T.q(new H.m("/"))
u.a.push(t)
t=a1.j(0,r).k(0,a0)
u=T.q(new H.m(" \n\t"))
t.a.push(u)
u=a1.j(0,a0).k(0,a0)
t=T.q(new H.m(" \n\t"))
u.a.push(t)
t=a1.j(0,p)
t.d=t.a.R("Num")
t=a1.j(0,n)
t.d=t.a.R("Num")
t=a1.j(0,m)
t.d=t.a.R("Symbol")
t=a1.j(0,j)
t.d=t.a.R("String")
t=a1.j(0,g)
t.d=t.a.R("String")
t=a1.j(0,c)
t.d=t.a.R(d)
t=a1.j(0,a0)
t.d=t.a.R(a0)
t=a1.j(0,q)
t=t.d=t.a.R(q)
u=[P.k]
t.aJ(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aJ(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aJ(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.fx.prototype={
bu:function(a){var u=this
switch(a.a){case"Builtin":u.O(a.b,"#411")
break
case"Comment":u.O(a.b,"#777")
break
case"Id":u.O(a.b,"#111")
break
case"Num":u.O(a.b,"#191")
break
case"Preprocess":u.O(a.b,"#737")
break
case"Reserved":u.O(a.b,"#119")
break
case"Symbol":u.O(a.b,"#611")
break
case"Type":u.O(a.b,"#171")
break
case"Whitespace":u.O(a.b,"#111")
break}},
bo:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=R.ik()
e.c=e.j(0,r)
u=e.j(0,r).k(0,q)
t=T.q(new H.m("_"))
u.a.push(t)
t=T.L("a","z")
u.a.push(t)
t=T.L("A","Z")
u.a.push(t)
t=e.j(0,q).k(0,q)
u=T.q(new H.m("_"))
t.a.push(u)
u=T.L("0","9")
t.a.push(u)
u=T.L("a","z")
t.a.push(u)
u=T.L("A","Z")
t.a.push(u)
u=e.j(0,r).k(0,p)
t=T.L("0","9")
u.a.push(t)
t=e.j(0,p).k(0,p)
u=T.L("0","9")
t.a.push(u)
u=e.j(0,p).k(0,o)
t=T.q(new H.m("."))
u.a.push(t)
t=e.j(0,o).k(0,n)
u=T.L("0","9")
t.a.push(u)
u=e.j(0,n).k(0,n)
t=T.L("0","9")
u.a.push(t)
t=e.j(0,r).k(0,m)
u=T.q(new H.m(l))
t.a.push(u)
u=e.j(0,m).k(0,m)
t=T.q(new H.m(l))
u.a.push(t)
t=e.j(0,r).k(0,k)
u=T.q(new H.m("/"))
t.a.push(u)
u=e.j(0,k).k(0,j)
t=T.q(new H.m("/"))
u.a.push(t)
e.j(0,k).k(0,m).a.push(new T.aB())
t=e.j(0,j).k(0,i)
u=T.q(new H.m("\n"))
t.a.push(u)
u=e.j(0,j).k(0,j)
t=new T.a6()
s=[T.ba]
t.a=H.c([],s)
u.a.push(t)
u=T.q(new H.m("\n"))
t.a.push(u)
u=e.j(0,r).k(0,h)
t=T.q(new H.m("#"))
u.a.push(t)
t=e.j(0,h).k(0,h)
u=new T.a6()
u.a=H.c([],s)
t.a.push(u)
t=T.q(new H.m("\n"))
u.a.push(t)
t=e.j(0,h).k(0,g)
u=T.q(new H.m("\n"))
t.a.push(u)
u=e.j(0,r).k(0,f)
t=T.q(new H.m(" \n\t"))
u.a.push(t)
t=e.j(0,f).k(0,f)
u=T.q(new H.m(" \n\t"))
t.a.push(u)
u=e.j(0,p)
u.d=u.a.R("Num")
u=e.j(0,n)
u.d=u.a.R("Num")
u=e.j(0,m)
u.d=u.a.R("Symbol")
u=e.j(0,i)
u.d=u.a.R(j)
u=e.j(0,g)
u.d=u.a.R(h)
u=e.j(0,f)
u.d=u.a.R(f)
u=e.j(0,q)
u=u.d=u.a.R(q)
t=[P.k]
u.aJ(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aJ(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aJ(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return e}}
V.fy.prototype={
bu:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.O(a.b,"#911")
u.O("=",t)
break
case"Id":u.O(a.b,t)
break
case"Other":u.O(a.b,t)
break
case"Reserved":u.O(a.b,"#119")
break
case"String":u.O(a.b,"#171")
break
case"Symbol":u.O(a.b,"#616")
break}},
bo:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=R.ik()
l.c=l.j(0,s)
u=l.j(0,s).k(0,r)
t=T.q(new H.m("_"))
u.a.push(t)
t=T.L("a","z")
u.a.push(t)
t=T.L("A","Z")
u.a.push(t)
t=l.j(0,r).k(0,r)
u=T.q(new H.m("_"))
t.a.push(u)
u=T.L("0","9")
t.a.push(u)
u=T.L("a","z")
t.a.push(u)
u=T.L("A","Z")
t.a.push(u)
u=l.j(0,r).k(0,q)
t=T.q(new H.m("="))
u.a.push(t)
u.c=!0
u=l.j(0,s).k(0,p)
t=T.q(new H.m("</\\-!>="))
u.a.push(t)
t=l.j(0,p).k(0,p)
u=T.q(new H.m("</\\-!>="))
t.a.push(u)
u=l.j(0,s).k(0,o)
t=T.q(new H.m('"'))
u.a.push(t)
t=l.j(0,o).k(0,n)
u=T.q(new H.m('"'))
t.a.push(u)
u=l.j(0,o).k(0,"EscStr")
t=T.q(new H.m("\\"))
u.a.push(t)
t=l.j(0,"EscStr").k(0,o)
u=T.q(new H.m('"'))
t.a.push(u)
l.j(0,o).k(0,o).a.push(new T.aB())
l.j(0,s).k(0,m).a.push(new T.aB())
u=l.j(0,m).k(0,m)
t=new T.a6()
t.a=H.c([],[T.ba])
u.a.push(t)
u=T.q(new H.m('</\\-!>=_"'))
t.a.push(u)
u=T.L("a","z")
t.a.push(u)
u=T.L("A","Z")
t.a.push(u)
u=l.j(0,p)
u.d=u.a.R("Symbol")
u=l.j(0,n)
u.d=u.a.R("String")
u=l.j(0,r)
t=u.a.R(r)
u.d=t
t.aJ(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.k]))
t=l.j(0,q)
t.d=t.a.R(q)
t=l.j(0,m)
t.d=t.a.R(m)
return l}}
V.hv.prototype={
e_:function(a,b){this.d=H.c([],[[P.o,W.al]])
this.O(C.b.k(b,"\n"),"#111")},
bu:function(a){},
bo:function(){return}}
V.hA.prototype={
de:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
if(m.c==null)return
u=m.a
t=P.lS().gcu().i(0,H.e(u))
if(t==null)if(d){c.$0()
m.dc(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.ld(m.c).n(0,q)
o=W.n7("radio")
o.checked=s
o.name=u
W.X(o,"change",new V.hB(m,o,c,b),!1)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.ld(m.c).n(0,r.createElement("br"))},
ax:function(a,b,c){return this.de(a,b,c,!1)},
dc:function(a){var u,t,s=P.lS(),r=P.k,q=P.ne(s.gcu(),r,r)
q.m(0,this.a,a)
u=s.e4(0,q)
r=window.history
t=u.h(0)
r.toString
r.replaceState(new P.ju([],[]).cC(""),"",t)}}
V.hB.prototype={
$1:function(a){var u=this
if(u.b.checked){u.c.$0()
u.a.dc(u.d)}}}
V.hR.prototype={
ex:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.X(q,"scroll",new V.hT(o),!1)},
di:function(a){var u,t,s,r,q,p,o,n,m,l,k
this.h7()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.eb(C.b.hT(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q){p=s[q]
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
l.href=m[1]
l.textContent=m[0]
t.appendChild(l)}else{k=P.ew(C.x,n,C.e,!1)
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
ef:function(a){var u,t,s,r=new V.fb("dart")
r.bh("dart")
u=new V.fx("glsl")
u.bh("glsl")
t=new V.fy("html")
t.bh("html")
s=C.b.hL(H.c([r,u,t],[V.cM]),new V.hU(a))
if(s!=null)return s
r=new V.hv("plain")
r.bh("plain")
return r},
df:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.c([],[P.w])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(J.cA(s).a8(s,"+")){b0[t]=C.a.ae(s,1)
a6.push(1)
u=!0}else if(C.a.a8(s,"-")){b0[t]=C.a.ae(s,1)
a6.push(-1)
u=!0}else a6.push(0)}r=this.ef(a8)
r.e_(0,b0)
q=document
p=q.createElement("div")
p.className="codeTableScroll"
o=q.createElement("table")
o.className="codeTable"
p.appendChild(o)
this.a.appendChild(p)
n=P.ew(C.x,a7,C.e,!1)
m=q.createElement("tr")
m.className="headerRow"
l=q.createElement("td")
l.className="headerCell"
l.colSpan=u?3:2
k=q.createElement("div")
k.className="tableHeader"
k.id=n
j=W.lf()
j.href="#"+H.e(n)
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
if(t>=a6.length)return H.b(a6,t)
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
for(a2=C.b.gU(s);a2.A();)d.appendChild(a2.gJ(a2))
f.appendChild(e)
f.appendChild(d)
o.appendChild(f)}},
hg:function(a){var u,t,s,r,q,p="auto",o=document,n=o.createElement("table")
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
h7:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=R.ik()
u.c=u.j(0,q)
t=u.j(0,q).k(0,p)
s=T.q(new H.m("*"))
t.a.push(s)
t.c=!0
t=u.j(0,p).k(0,p)
s=new T.a6()
r=[T.ba]
s.a=H.c([],r)
t.a.push(s)
t=T.q(new H.m("*"))
s.a.push(t)
t=u.j(0,p).k(0,"BoldEnd")
s=T.q(new H.m("*"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,o)
s=T.q(new H.m("_"))
t.a.push(s)
t.c=!0
t=u.j(0,o).k(0,o)
s=new T.a6()
s.a=H.c([],r)
t.a.push(s)
t=T.q(new H.m("_"))
s.a.push(t)
t=u.j(0,o).k(0,n)
s=T.q(new H.m("_"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,m)
s=T.q(new H.m("`"))
t.a.push(s)
t.c=!0
t=u.j(0,m).k(0,m)
s=new T.a6()
s.a=H.c([],r)
t.a.push(s)
t=T.q(new H.m("`"))
s.a.push(t)
t=u.j(0,m).k(0,"CodeEnd")
s=T.q(new H.m("`"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,l)
s=T.q(new H.m("["))
t.a.push(s)
t.c=!0
t=u.j(0,l).k(0,k)
s=T.q(new H.m("|"))
t.a.push(s)
s=u.j(0,l).k(0,j)
t=T.q(new H.m("]"))
s.a.push(t)
s.c=!0
s=u.j(0,l).k(0,l)
t=new T.a6()
t.a=H.c([],r)
s.a.push(t)
s=T.q(new H.m("|]"))
t.a.push(s)
s=u.j(0,k).k(0,j)
t=T.q(new H.m("]"))
s.a.push(t)
s.c=!0
s=u.j(0,k).k(0,k)
t=new T.a6()
t.a=H.c([],r)
s.a.push(t)
s=T.q(new H.m("|]"))
t.a.push(s)
u.j(0,q).k(0,i).a.push(new T.aB())
s=u.j(0,i).k(0,i)
t=new T.a6()
t.a=H.c([],r)
s.a.push(t)
s=T.q(new H.m("*_`["))
t.a.push(s)
s=u.j(0,"BoldEnd")
s.d=s.a.R(p)
s=u.j(0,n)
s.d=s.a.R(o)
s=u.j(0,"CodeEnd")
s.d=s.a.R(m)
s=u.j(0,j)
s.d=s.a.R("Link")
s=u.j(0,i)
s.d=s.a.R(i)
this.b=u}}
V.hT.prototype={
$1:function(a){P.lO(C.n,new V.hS(this.a))}}
V.hS.prototype={
$0:function(){var u=C.d.a4(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
V.hU.prototype={
$1:function(a){return a.a===this.a}}
V.kb.prototype={
$0:function(){this.a.sa7(0,F.jV(1,null,null,1))}}
V.kc.prototype={
$0:function(){this.a.sa7(0,F.jV(15,null,new V.ka(),15))}}
V.ka.prototype={
$3:function(a,b,c){var u,t=Math.cos(c*4*3.141592653589793+3.141592653589793),s=Math.cos(b*4*3.141592653589793+3.141592653589793),r=a.f
r=new V.z(r.a,r.b,r.c)
u=r.q(0,Math.sqrt(r.B(r)))
r=a.f
s=u.u(0,t*0.1+s*0.1)
a.sa0(0,r.C(0,new V.N(s.a,s.b,s.c)))}}
V.kd.prototype={
$0:function(){this.a.sa7(0,F.mf(!0,30,1))}}
V.ke.prototype={
$0:function(){this.a.sa7(0,F.mf(!1,30,0))}}
V.kf.prototype={
$0:function(){this.a.sa7(0,F.mg(!0,!0,25,new V.k9(),50))}}
V.k9.prototype={
$2:function(a,b){return Math.cos(b*4*3.141592653589793+3.141592653589793)*0.2+Math.cos(a*6*3.141592653589793)*0.3+0.8}}
V.kg.prototype={
$0:function(){this.a.sa7(0,F.mr(6,null,6))}}
V.kh.prototype={
$0:function(){this.a.sa7(0,F.mr(10,new V.k8(),10))}}
V.k8.prototype={
$2:function(a,b){var u=a-0.5,t=b-0.5
return Math.cos(Math.sqrt(u*u+t*t)*3.141592653589793)*0.3}}
V.ki.prototype={
$0:function(){this.a.sa7(0,F.mt())}}
V.kj.prototype={
$0:function(){this.a.sa7(0,F.p0())}}
V.kk.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.a,r=[P.k]
u.df("Vertex Shader","glsl",0,H.c((s==null?null:s.c).split("\n"),r))
t=t.a
u.df("Fragment Shader","glsl",0,H.c((t==null?null:t.d).split("\n"),r))}};(function aliases(){var u=J.a.prototype
u.eo=u.h
u=J.d0.prototype
u.eq=u.h
u=P.h.prototype
u.ep=u.by
u=W.T.prototype
u.bB=u.aj
u=W.ee.prototype
u.er=u.ay
u=T.cX.prototype
u.en=u.aH
u.cI=u.h
u=O.bZ.prototype
u.cJ=u.aC
u=O.at.prototype
u.cK=u.aC})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"oH","nQ",7)
u(P,"oI","nR",7)
u(P,"oJ","nS",7)
t(P,"me","oF",9)
s(W,"oV",4,null,["$4"],["nT"],16,0)
s(W,"oW",4,null,["$4"],["nU"],16,0)
var m
r(m=E.aF.prototype,"gdY",0,0,null,["$1","$0"],["dZ","i1"],0,0)
r(m,"gdW",0,0,null,["$1","$0"],["dX","hZ"],0,0)
q(m,"ghX","hY",4)
q(m,"gi_","i0",4)
r(m=E.dv.prototype,"gcM",0,0,null,["$1","$0"],["cO","cN"],0,0)
p(m,"gih","e5",9)
o(m=X.dF.prototype,"gfk","fl",5)
o(m,"gf8","f9",5)
o(m,"gfe","ff",2)
o(m,"gfo","fp",10)
o(m,"gfm","fn",10)
o(m,"gft","fu",2)
o(m,"gfz","fA",2)
o(m,"gfi","fj",2)
o(m,"gfv","fw",2)
o(m,"gfg","fh",2)
o(m,"gfB","fC",19)
o(m,"gfD","fE",5)
o(m,"gfT","fU",6)
o(m,"gfP","fQ",6)
o(m,"gfR","fS",6)
r(D.bp.prototype,"geA",0,0,null,["$1","$0"],["aA","eB"],0,0)
r(m=D.d2.prototype,"gd1",0,0,null,["$1","$0"],["d2","fq"],0,0)
o(m,"gfF","fG",20)
q(m,"gf2","f3",11)
q(m,"gfJ","fK",11)
n(V.G.prototype,"gl","ck",12)
n(V.z.prototype,"gl","ck",12)
r(m=U.bT.prototype,"gaR",0,0,null,["$1","$0"],["G","ab"],0,0)
q(m,"geC","eD",13)
q(m,"gfH","fI",13)
r(m=U.dG.prototype,"gaR",0,0,null,["$1","$0"],["G","ab"],0,0)
o(m,"gbK","bL",1)
o(m,"gbM","bN",1)
o(m,"gbO","bP",1)
r(m=U.dH.prototype,"gaR",0,0,null,["$1","$0"],["G","ab"],0,0)
o(m,"gbK","bL",1)
o(m,"gbM","bN",1)
o(m,"gbO","bP",1)
o(m,"geW","eX",1)
o(m,"geY","eZ",1)
o(m,"ghe","hf",1)
o(m,"ghc","hd",1)
o(m,"gha","hb",1)
o(U.dI.prototype,"gf0","f1",1)
r(m=M.cN.prototype,"gZ",0,0,null,["$1","$0"],["a_","b0"],0,0)
q(m,"gfL","fM",14)
q(m,"gfN","fO",14)
r(M.cP.prototype,"gZ",0,0,null,["$1","$0"],["a_","b0"],0,0)
r(m=M.cU.prototype,"gZ",0,0,null,["$1","$0"],["a_","b0"],0,0)
q(m,"gfa","fb",4)
q(m,"gfc","fd",4)
r(m=O.d6.prototype,"gaO",0,0,null,["$1","$0"],["Y","b1"],0,0)
r(m,"gh_",0,0,null,["$1","$0"],["d4","h0"],0,0)
q(m,"gf4","f5",15)
q(m,"gf6","f7",15)
r(O.bZ.prototype,"gaO",0,0,null,["$1","$0"],["Y","b1"],0,0)
r(O.dl.prototype,"gaO",0,0,null,["$1","$0"],["Y","b1"],0,0)
r(X.de.prototype,"geH",0,0,null,["$1","$0"],["a1","eI"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.a2,null)
s(P.a2,[H.kJ,J.a,J.a5,P.e1,P.h,H.bY,P.fF,H.cV,H.iD,H.f3,H.iq,P.bq,H.bO,H.ej,P.aI,H.fM,H.fO,H.fH,P.ep,P.dM,P.dr,P.i3,P.dw,P.jK,P.jo,P.ji,P.e0,P.r,P.jC,P.fV,P.f0,P.fB,P.jI,P.jH,P.aA,P.a8,P.ad,P.b2,P.ht,P.dp,P.dU,P.fu,P.fw,P.o,P.R,P.bc,P.k,P.S,P.bB,P.iF,P.jr,W.f7,W.cl,W.J,W.dc,W.ee,W.jx,W.cW,W.aM,W.jn,W.ex,P.jt,P.eu,P.jj,P.bz,T.aB,T.cX,T.ba,T.hC,T.hL,R.dq,R.dx,R.dy,R.ij,O.aC,O.c_,E.eX,E.aF,E.hD,E.dv,Z.dK,Z.dL,Z.bN,Z.bs,Z.aV,D.f_,D.br,D.W,X.cL,X.d1,X.fJ,X.fS,X.ah,X.hh,X.il,X.dF,D.bp,D.a9,D.hx,D.hZ,V.V,V.a_,V.fl,V.d7,V.aJ,V.Y,V.N,V.ai,V.dh,V.G,V.z,U.dG,U.dH,U.dI,M.cP,M.cU,M.am,A.cJ,A.eP,A.a0,A.cR,A.df,A.dn,A.h1,A.ce,A.cg,A.ch,A.dB,A.iy,F.b3,F.fo,F.bX,F.fL,F.c5,F.hM,F.hO,F.hP,F.hQ,F.aU,F.iR,F.iS,F.iV,F.iX,F.iY,F.iZ,O.dt,O.bZ,O.h2,T.ie,X.i7,X.kx,X.fC,X.de,V.cM,V.hA,V.hR])
s(J.a,[J.fG,J.d_,J.d0,J.b6,J.bW,J.b7,H.c2,H.bb,W.f,W.eM,W.bm,W.ar,W.H,W.dO,W.ag,W.fc,W.fd,W.dQ,W.cT,W.dS,W.ff,W.i,W.dV,W.aG,W.fz,W.dX,W.aH,W.fR,W.hb,W.e2,W.e3,W.aK,W.e4,W.e7,W.aN,W.eb,W.ed,W.aQ,W.ef,W.aR,W.ek,W.aw,W.en,W.ii,W.aT,W.eq,W.io,W.iK,W.ey,W.eA,W.eC,W.eE,W.eG,P.b9,P.dZ,P.bd,P.e9,P.hz,P.el,P.bf,P.es,P.eQ,P.dN,P.di,P.eh])
s(J.d0,[J.hu,J.bA,J.b8])
t(J.kI,J.b6)
s(J.bW,[J.cZ,J.cY])
t(P.fQ,P.e1)
s(P.fQ,[H.dD,W.j8,W.a3,P.fq])
t(H.m,H.dD)
s(P.h,[H.fi,H.fW,H.cj])
s(H.fi,[H.d4,H.fN])
s(P.fF,[H.fX,H.j2])
t(H.fY,H.d4)
t(H.f4,H.f3)
s(P.bq,[H.hq,H.fI,H.iC,H.eZ,H.hJ,P.dd,P.ak,P.iE,P.iA,P.ca,P.f2,P.fa])
s(H.bO,[H.ks,H.i8,H.k3,H.k4,H.k5,P.j4,P.j3,P.j5,P.j6,P.jB,P.jA,P.jT,P.jl,P.jm,P.fP,P.fU,P.fg,P.fh,P.iJ,P.iG,P.iH,P.iI,P.jD,P.jE,P.jG,P.jF,P.jO,P.jN,P.jP,P.jQ,W.fj,W.hd,W.hf,W.hI,W.i2,W.jd,W.ho,W.hn,W.jp,W.jq,W.jz,W.jJ,P.jv,P.jU,P.fr,P.fs,P.eS,E.hE,E.hF,E.hG,E.ih,D.fm,D.fn,F.jL,F.jW,F.jY,F.jZ,F.k_,F.kn,F.ko,F.kr,F.k7,F.jX,F.j0,F.j_,F.iT,F.iU,O.h5,O.h6,O.h7,O.h8,O.h9,O.ha,T.ig,V.km,V.hB,V.hT,V.hS,V.hU,V.kb,V.kc,V.ka,V.kd,V.ke,V.kf,V.k9,V.kg,V.kh,V.k8,V.ki,V.kj,V.kk])
s(H.i8,[H.i0,H.bL])
t(P.fT,P.aI)
s(P.fT,[H.O,W.j7])
t(H.d8,H.bb)
s(H.d8,[H.cn,H.cp])
t(H.co,H.cn)
t(H.c3,H.co)
t(H.cq,H.cp)
t(H.d9,H.cq)
s(H.d9,[H.hi,H.hj,H.hk,H.hl,H.hm,H.da,H.c4])
t(P.jk,P.jK)
t(P.jh,P.jo)
t(P.ev,P.fV)
t(P.dE,P.ev)
s(P.f0,[P.eV,P.fk])
t(P.f5,P.i3)
s(P.f5,[P.eW,P.fA,P.iN,P.iM])
t(P.iL,P.fk)
s(P.ad,[P.M,P.w])
s(P.ak,[P.bx,P.fD])
t(P.ja,P.bB)
s(W.f,[W.F,W.fp,W.c0,W.aP,W.cr,W.aS,W.ax,W.ct,W.j1,W.ck,P.eT,P.bl])
s(W.F,[W.T,W.b1])
s(W.T,[W.n,P.j])
s(W.n,[W.eN,W.eO,W.bn,W.bo,W.al,W.ft,W.bV,W.hK,W.ds,W.i5,W.i6,W.cc])
t(W.f6,W.ar)
t(W.bP,W.dO)
s(W.ag,[W.f8,W.f9])
t(W.dR,W.dQ)
t(W.cS,W.dR)
t(W.dT,W.dS)
t(W.fe,W.dT)
t(W.as,W.bm)
t(W.dW,W.dV)
t(W.bS,W.dW)
t(W.dY,W.dX)
t(W.bU,W.dY)
t(W.bg,W.i)
s(W.bg,[W.bt,W.av,W.by])
t(W.hc,W.e2)
t(W.he,W.e3)
t(W.e5,W.e4)
t(W.hg,W.e5)
t(W.e8,W.e7)
t(W.db,W.e8)
t(W.ec,W.eb)
t(W.hw,W.ec)
t(W.hH,W.ed)
t(W.cs,W.cr)
t(W.hX,W.cs)
t(W.eg,W.ef)
t(W.hY,W.eg)
t(W.i1,W.ek)
t(W.eo,W.en)
t(W.i9,W.eo)
t(W.cu,W.ct)
t(W.ia,W.cu)
t(W.er,W.eq)
t(W.im,W.er)
t(W.bi,W.av)
t(W.ez,W.ey)
t(W.j9,W.ez)
t(W.dP,W.cT)
t(W.eB,W.eA)
t(W.je,W.eB)
t(W.eD,W.eC)
t(W.e6,W.eD)
t(W.eF,W.eE)
t(W.js,W.eF)
t(W.eH,W.eG)
t(W.jw,W.eH)
t(W.jb,W.j7)
t(W.jc,P.dr)
t(W.jy,W.ee)
t(P.ju,P.jt)
t(P.ab,P.jj)
t(P.e_,P.dZ)
t(P.fK,P.e_)
t(P.ea,P.e9)
t(P.hr,P.ea)
t(P.c9,P.j)
t(P.em,P.el)
t(P.i4,P.em)
t(P.et,P.es)
t(P.ip,P.et)
t(P.eR,P.dN)
t(P.hs,P.bl)
t(P.ei,P.eh)
t(P.i_,P.ei)
s(T.cX,[T.a6,R.dA])
s(E.eX,[Z.cK,A.dk,T.du])
s(D.W,[D.b4,D.b5,D.x,X.hy])
s(X.hy,[X.d5,X.aL,X.c1,X.dz])
s(O.aC,[D.d2,U.bT,M.cN])
s(D.f_,[U.f1,U.aa])
s(U.aa,[U.cO,U.dj])
s(A.dk,[A.fZ,A.hW])
s(A.dB,[A.dC,A.iv,A.iw,A.ix,A.it,A.U,A.iu,A.I,A.cd,A.iz,A.cf,A.ac,A.a1,A.bh])
t(F.hV,F.fo)
t(F.is,F.fL)
t(F.iW,F.iX)
t(F.hp,F.iY)
s(O.dt,[O.d6,O.dl])
s(O.bZ,[O.h_,O.h0,O.at])
s(O.at,[O.h3,O.h4])
s(T.du,[T.ib,T.id])
t(T.ic,T.ib)
s(X.i7,[X.eU,X.fv])
s(V.cM,[V.fb,V.fx,V.fy,V.hv])
u(H.dD,H.iD)
u(H.cn,P.r)
u(H.co,H.cV)
u(H.cp,P.r)
u(H.cq,H.cV)
u(P.e1,P.r)
u(P.ev,P.jC)
u(W.dO,W.f7)
u(W.dQ,P.r)
u(W.dR,W.J)
u(W.dS,P.r)
u(W.dT,W.J)
u(W.dV,P.r)
u(W.dW,W.J)
u(W.dX,P.r)
u(W.dY,W.J)
u(W.e2,P.aI)
u(W.e3,P.aI)
u(W.e4,P.r)
u(W.e5,W.J)
u(W.e7,P.r)
u(W.e8,W.J)
u(W.eb,P.r)
u(W.ec,W.J)
u(W.ed,P.aI)
u(W.cr,P.r)
u(W.cs,W.J)
u(W.ef,P.r)
u(W.eg,W.J)
u(W.ek,P.aI)
u(W.en,P.r)
u(W.eo,W.J)
u(W.ct,P.r)
u(W.cu,W.J)
u(W.eq,P.r)
u(W.er,W.J)
u(W.ey,P.r)
u(W.ez,W.J)
u(W.eA,P.r)
u(W.eB,W.J)
u(W.eC,P.r)
u(W.eD,W.J)
u(W.eE,P.r)
u(W.eF,W.J)
u(W.eG,P.r)
u(W.eH,W.J)
u(P.dZ,P.r)
u(P.e_,W.J)
u(P.e9,P.r)
u(P.ea,W.J)
u(P.el,P.r)
u(P.em,W.J)
u(P.es,P.r)
u(P.et,W.J)
u(P.dN,P.aI)
u(P.eh,P.r)
u(P.ei,W.J)})()
var v={mangledGlobalNames:{w:"int",M:"double",ad:"num",k:"String",aA:"bool",bc:"Null",o:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.W]},{func:1,ret:-1,args:[D.W]},{func:1,ret:-1,args:[W.av]},{func:1,ret:P.bc,args:[,,]},{func:1,ret:-1,args:[P.w,[P.h,E.aF]]},{func:1,ret:-1,args:[W.i]},{func:1,ret:-1,args:[W.by]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bt]},{func:1,ret:-1,args:[P.w,[P.h,D.a9]]},{func:1,ret:P.M},{func:1,ret:-1,args:[P.w,[P.h,U.aa]]},{func:1,ret:-1,args:[P.w,[P.h,M.am]]},{func:1,ret:-1,args:[P.w,[P.h,V.aJ]]},{func:1,ret:P.aA,args:[W.T,P.k,P.k,W.cl]},{func:1,ret:P.bc,args:[,]},{func:1,ret:P.bz,args:[,,]},{func:1,ret:-1,args:[W.bi]},{func:1,ret:P.aA,args:[[P.h,D.a9]]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.r=W.bn.prototype
C.i=W.bo.prototype
C.O=W.al.prototype
C.R=J.a.prototype
C.b=J.b6.prototype
C.S=J.cY.prototype
C.c=J.cZ.prototype
C.j=J.d_.prototype
C.d=J.bW.prototype
C.a=J.b7.prototype
C.T=J.b8.prototype
C.A=J.hu.prototype
C.B=P.di.prototype
C.C=W.ds.prototype
C.q=J.bA.prototype
C.D=W.bi.prototype
C.E=W.ck.prototype
C.Z=new P.eW()
C.F=new P.eV()
C.t=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.G=function() {
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
C.L=function(getTagFallback) {
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
C.H=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.I=function(hooks) {
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
C.K=function(hooks) {
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
C.J=function(hooks) {
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
C.u=function(hooks) { return hooks; }

C.M=new P.ht()
C.e=new P.iL()
C.N=new P.iN()
C.f=new P.jk()
C.n=new P.b2(0)
C.P=new P.b2(5e6)
C.Q=new P.fB("element",!1,!1,!1)
C.v=H.c(u([127,2047,65535,1114111]),[P.w])
C.k=H.c(u([0,0,32776,33792,1,10240,0,0]),[P.w])
C.U=H.c(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.k])
C.l=H.c(u([0,0,65490,45055,65535,34815,65534,18431]),[P.w])
C.m=H.c(u([0,0,26624,1023,65534,2047,65534,2047]),[P.w])
C.V=H.c(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.k])
C.w=H.c(u([]),[P.k])
C.W=H.c(u([0,0,32722,12287,65534,34815,65534,18431]),[P.w])
C.x=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.w])
C.h=H.c(u([0,0,24576,1023,65534,34815,65534,18431]),[P.w])
C.y=H.c(u([0,0,32754,11263,65534,34815,65534,18431]),[P.w])
C.X=H.c(u([0,0,32722,12287,65535,34815,65534,18431]),[P.w])
C.z=H.c(u([0,0,65490,12287,65535,34815,65534,18431]),[P.w])
C.o=H.c(u(["bind","if","ref","repeat","syntax"]),[P.k])
C.p=H.c(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.k])
C.Y=new H.f4(0,{},C.w,[P.k,P.k])})();(function staticFields(){$.aq=0
$.bM=null
$.li=null
$.ml=null
$.md=null
$.mp=null
$.k0=null
$.k6=null
$.l4=null
$.bE=null
$.cx=null
$.cy=null
$.l_=!1
$.an=C.f
$.a7=[]
$.aE=null
$.kD=null
$.ln=null
$.lm=null
$.cm=P.kL(P.k,P.fw)
$.lA=null
$.lD=null
$.c6=null
$.lJ=null
$.lV=null
$.lY=null
$.lX=null
$.iO=null
$.iP=null
$.iQ=null
$.lW=null
$.lC=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pd","mv",function(){return H.mk("_$dart_dartClosure")})
u($,"pe","l9",function(){return H.mk("_$dart_js")})
u($,"pf","mw",function(){return H.ay(H.ir({
toString:function(){return"$receiver$"}}))})
u($,"pg","mx",function(){return H.ay(H.ir({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"ph","my",function(){return H.ay(H.ir(null))})
u($,"pi","mz",function(){return H.ay(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pl","mC",function(){return H.ay(H.ir(void 0))})
u($,"pm","mD",function(){return H.ay(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pk","mB",function(){return H.ay(H.lQ(null))})
u($,"pj","mA",function(){return H.ay(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"po","mF",function(){return H.ay(H.lQ(void 0))})
u($,"pn","mE",function(){return H.ay(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"pC","la",function(){return P.nP()})
u($,"pp","mG",function(){return P.nL()})
u($,"pD","mK",function(){return H.nk(H.bD(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.w])))})
u($,"pF","mM",function(){return P.ny("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"pG","mN",function(){return P.od()})
u($,"pE","mL",function(){return P.ls(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.k)})
u($,"pw","mJ",function(){return Z.aj(0)})
u($,"pq","mH",function(){return Z.aj(511)})
u($,"py","ap",function(){return Z.aj(1)})
u($,"px","aZ",function(){return Z.aj(2)})
u($,"ps","aY",function(){return Z.aj(4)})
u($,"pz","b_",function(){return Z.aj(8)})
u($,"pA","bk",function(){return Z.aj(16)})
u($,"pt","cE",function(){return Z.aj(32)})
u($,"pu","cF",function(){return Z.aj(64)})
u($,"pv","mI",function(){return Z.aj(96)})
u($,"pB","bK",function(){return Z.aj(128)})
u($,"pr","aX",function(){return Z.aj(256)})
u($,"pc","mu",function(){return new V.fl(1e-9)})
u($,"pb","A",function(){return $.mu()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.c2,DataView:H.bb,ArrayBufferView:H.bb,Float32Array:H.c3,Float64Array:H.c3,Int16Array:H.hi,Int32Array:H.hj,Int8Array:H.hk,Uint16Array:H.hl,Uint32Array:H.hm,Uint8ClampedArray:H.da,CanvasPixelArray:H.da,Uint8Array:H.c4,HTMLAudioElement:W.n,HTMLBRElement:W.n,HTMLBaseElement:W.n,HTMLButtonElement:W.n,HTMLContentElement:W.n,HTMLDListElement:W.n,HTMLDataElement:W.n,HTMLDataListElement:W.n,HTMLDetailsElement:W.n,HTMLDialogElement:W.n,HTMLEmbedElement:W.n,HTMLFieldSetElement:W.n,HTMLHRElement:W.n,HTMLHeadElement:W.n,HTMLHeadingElement:W.n,HTMLHtmlElement:W.n,HTMLIFrameElement:W.n,HTMLInputElement:W.n,HTMLLIElement:W.n,HTMLLabelElement:W.n,HTMLLegendElement:W.n,HTMLLinkElement:W.n,HTMLMapElement:W.n,HTMLMediaElement:W.n,HTMLMenuElement:W.n,HTMLMetaElement:W.n,HTMLMeterElement:W.n,HTMLModElement:W.n,HTMLOListElement:W.n,HTMLObjectElement:W.n,HTMLOptGroupElement:W.n,HTMLOptionElement:W.n,HTMLOutputElement:W.n,HTMLParagraphElement:W.n,HTMLParamElement:W.n,HTMLPictureElement:W.n,HTMLPreElement:W.n,HTMLProgressElement:W.n,HTMLQuoteElement:W.n,HTMLScriptElement:W.n,HTMLShadowElement:W.n,HTMLSlotElement:W.n,HTMLSourceElement:W.n,HTMLSpanElement:W.n,HTMLStyleElement:W.n,HTMLTableCaptionElement:W.n,HTMLTableCellElement:W.n,HTMLTableDataCellElement:W.n,HTMLTableHeaderCellElement:W.n,HTMLTableColElement:W.n,HTMLTextAreaElement:W.n,HTMLTimeElement:W.n,HTMLTitleElement:W.n,HTMLTrackElement:W.n,HTMLUListElement:W.n,HTMLUnknownElement:W.n,HTMLVideoElement:W.n,HTMLDirectoryElement:W.n,HTMLFontElement:W.n,HTMLFrameElement:W.n,HTMLFrameSetElement:W.n,HTMLMarqueeElement:W.n,HTMLElement:W.n,AccessibleNodeList:W.eM,HTMLAnchorElement:W.eN,HTMLAreaElement:W.eO,Blob:W.bm,HTMLBodyElement:W.bn,HTMLCanvasElement:W.bo,CDATASection:W.b1,CharacterData:W.b1,Comment:W.b1,ProcessingInstruction:W.b1,Text:W.b1,CSSPerspective:W.f6,CSSCharsetRule:W.H,CSSConditionRule:W.H,CSSFontFaceRule:W.H,CSSGroupingRule:W.H,CSSImportRule:W.H,CSSKeyframeRule:W.H,MozCSSKeyframeRule:W.H,WebKitCSSKeyframeRule:W.H,CSSKeyframesRule:W.H,MozCSSKeyframesRule:W.H,WebKitCSSKeyframesRule:W.H,CSSMediaRule:W.H,CSSNamespaceRule:W.H,CSSPageRule:W.H,CSSRule:W.H,CSSStyleRule:W.H,CSSSupportsRule:W.H,CSSViewportRule:W.H,CSSStyleDeclaration:W.bP,MSStyleCSSProperties:W.bP,CSS2Properties:W.bP,CSSImageValue:W.ag,CSSKeywordValue:W.ag,CSSNumericValue:W.ag,CSSPositionValue:W.ag,CSSResourceValue:W.ag,CSSUnitValue:W.ag,CSSURLImageValue:W.ag,CSSStyleValue:W.ag,CSSMatrixComponent:W.ar,CSSRotation:W.ar,CSSScale:W.ar,CSSSkew:W.ar,CSSTranslation:W.ar,CSSTransformComponent:W.ar,CSSTransformValue:W.f8,CSSUnparsedValue:W.f9,DataTransferItemList:W.fc,HTMLDivElement:W.al,DOMException:W.fd,ClientRectList:W.cS,DOMRectList:W.cS,DOMRectReadOnly:W.cT,DOMStringList:W.fe,DOMTokenList:W.ff,Element:W.T,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.as,FileList:W.bS,FileWriter:W.fp,HTMLFormElement:W.ft,Gamepad:W.aG,History:W.fz,HTMLCollection:W.bU,HTMLFormControlsCollection:W.bU,HTMLOptionsCollection:W.bU,ImageData:W.aH,HTMLImageElement:W.bV,KeyboardEvent:W.bt,Location:W.fR,MediaList:W.hb,MessagePort:W.c0,MIDIInputMap:W.hc,MIDIOutputMap:W.he,MimeType:W.aK,MimeTypeArray:W.hg,PointerEvent:W.av,MouseEvent:W.av,DragEvent:W.av,Document:W.F,DocumentFragment:W.F,HTMLDocument:W.F,ShadowRoot:W.F,XMLDocument:W.F,Attr:W.F,DocumentType:W.F,Node:W.F,NodeList:W.db,RadioNodeList:W.db,Plugin:W.aN,PluginArray:W.hw,RTCStatsReport:W.hH,HTMLSelectElement:W.hK,SourceBuffer:W.aP,SourceBufferList:W.hX,SpeechGrammar:W.aQ,SpeechGrammarList:W.hY,SpeechRecognitionResult:W.aR,Storage:W.i1,CSSStyleSheet:W.aw,StyleSheet:W.aw,HTMLTableElement:W.ds,HTMLTableRowElement:W.i5,HTMLTableSectionElement:W.i6,HTMLTemplateElement:W.cc,TextTrack:W.aS,TextTrackCue:W.ax,VTTCue:W.ax,TextTrackCueList:W.i9,TextTrackList:W.ia,TimeRanges:W.ii,Touch:W.aT,TouchEvent:W.by,TouchList:W.im,TrackDefaultList:W.io,CompositionEvent:W.bg,FocusEvent:W.bg,TextEvent:W.bg,UIEvent:W.bg,URL:W.iK,VideoTrackList:W.j1,WheelEvent:W.bi,Window:W.ck,DOMWindow:W.ck,CSSRuleList:W.j9,ClientRect:W.dP,DOMRect:W.dP,GamepadList:W.je,NamedNodeMap:W.e6,MozNamedAttrMap:W.e6,SpeechRecognitionResultList:W.js,StyleSheetList:W.jw,SVGLength:P.b9,SVGLengthList:P.fK,SVGNumber:P.bd,SVGNumberList:P.hr,SVGPointList:P.hz,SVGScriptElement:P.c9,SVGStringList:P.i4,SVGAElement:P.j,SVGAnimateElement:P.j,SVGAnimateMotionElement:P.j,SVGAnimateTransformElement:P.j,SVGAnimationElement:P.j,SVGCircleElement:P.j,SVGClipPathElement:P.j,SVGDefsElement:P.j,SVGDescElement:P.j,SVGDiscardElement:P.j,SVGEllipseElement:P.j,SVGFEBlendElement:P.j,SVGFEColorMatrixElement:P.j,SVGFEComponentTransferElement:P.j,SVGFECompositeElement:P.j,SVGFEConvolveMatrixElement:P.j,SVGFEDiffuseLightingElement:P.j,SVGFEDisplacementMapElement:P.j,SVGFEDistantLightElement:P.j,SVGFEFloodElement:P.j,SVGFEFuncAElement:P.j,SVGFEFuncBElement:P.j,SVGFEFuncGElement:P.j,SVGFEFuncRElement:P.j,SVGFEGaussianBlurElement:P.j,SVGFEImageElement:P.j,SVGFEMergeElement:P.j,SVGFEMergeNodeElement:P.j,SVGFEMorphologyElement:P.j,SVGFEOffsetElement:P.j,SVGFEPointLightElement:P.j,SVGFESpecularLightingElement:P.j,SVGFESpotLightElement:P.j,SVGFETileElement:P.j,SVGFETurbulenceElement:P.j,SVGFilterElement:P.j,SVGForeignObjectElement:P.j,SVGGElement:P.j,SVGGeometryElement:P.j,SVGGraphicsElement:P.j,SVGImageElement:P.j,SVGLineElement:P.j,SVGLinearGradientElement:P.j,SVGMarkerElement:P.j,SVGMaskElement:P.j,SVGMetadataElement:P.j,SVGPathElement:P.j,SVGPatternElement:P.j,SVGPolygonElement:P.j,SVGPolylineElement:P.j,SVGRadialGradientElement:P.j,SVGRectElement:P.j,SVGSetElement:P.j,SVGStopElement:P.j,SVGStyleElement:P.j,SVGSVGElement:P.j,SVGSwitchElement:P.j,SVGSymbolElement:P.j,SVGTSpanElement:P.j,SVGTextContentElement:P.j,SVGTextElement:P.j,SVGTextPathElement:P.j,SVGTextPositioningElement:P.j,SVGTitleElement:P.j,SVGUseElement:P.j,SVGViewElement:P.j,SVGGradientElement:P.j,SVGComponentTransferFunctionElement:P.j,SVGFEDropShadowElement:P.j,SVGMPathElement:P.j,SVGElement:P.j,SVGTransform:P.bf,SVGTransformList:P.ip,AudioBuffer:P.eQ,AudioParamMap:P.eR,AudioTrackList:P.eT,AudioContext:P.bl,webkitAudioContext:P.bl,BaseAudioContext:P.bl,OfflineAudioContext:P.hs,WebGL2RenderingContext:P.di,SQLResultSetRowList:P.i_})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.d8.$nativeSuperclassTag="ArrayBufferView"
H.cn.$nativeSuperclassTag="ArrayBufferView"
H.co.$nativeSuperclassTag="ArrayBufferView"
H.c3.$nativeSuperclassTag="ArrayBufferView"
H.cp.$nativeSuperclassTag="ArrayBufferView"
H.cq.$nativeSuperclassTag="ArrayBufferView"
H.d9.$nativeSuperclassTag="ArrayBufferView"
W.cr.$nativeSuperclassTag="EventTarget"
W.cs.$nativeSuperclassTag="EventTarget"
W.ct.$nativeSuperclassTag="EventTarget"
W.cu.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(V.mn,[])
else V.mn([])})})()
//# sourceMappingURL=test.dart.js.map
