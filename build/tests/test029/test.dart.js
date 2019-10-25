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
a[c]=function(){a[c]=function(){H.oH(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kI"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kI"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kI(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={kp:function kp(){},
jZ:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
fF:function(){return new P.c8("No element")},
mH:function(){return new P.c8("Too many elements")},
dn:function(a,b,c,d){if(c-b<=32)H.n9(a,b,c,d)
else H.n8(a,b,c,d)},
n9:function(a,b,c,d){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.b(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.b(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.a2()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.b(a,q)
C.b.m(a,s,a[q])
s=q}C.b.m(a,s,t)}},
n8:function(a2,a3,a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.c.ab(a4-a3+1,6),d=a3+e,c=a4-e,b=C.c.ab(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
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
if(typeof a1!=="number")return a1.a2()
if(a1>0){p=t
t=u
u=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.a2()
if(a1>0){p=q
q=r
r=p}a1=a5.$2(u,s)
if(typeof a1!=="number")return a1.a2()
if(a1>0){p=s
s=u
u=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.a2()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(u,r)
if(typeof a1!=="number")return a1.a2()
if(a1>0){p=r
r=u
u=p}a1=a5.$2(s,r)
if(typeof a1!=="number")return a1.a2()
if(a1>0){p=r
r=s
s=p}a1=a5.$2(t,q)
if(typeof a1!=="number")return a1.a2()
if(a1>0){p=q
q=t
t=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.a2()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.a2()
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
if(J.D(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.O()
if(k<0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.b.m(a2,m,a2[o])
C.b.m(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a2()
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
if(typeof g!=="number")return g.O()
if(g<0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.b.m(a2,m,a2[o])
C.b.m(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.a2()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.a2()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.O()
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
H.dn(a2,a3,o-2,a5)
H.dn(a2,n+2,a4,a5)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.b(a2,o)
if(!J.D(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.b(a2,n)
if(!J.D(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.b.m(a2,m,a2[o])
C.b.m(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.O()
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
break}}}H.dn(a2,o,n,a5)}else H.dn(a2,o,n,a5)},
m:function m(a){this.a=a},
fj:function fj(){},
d5:function d5(){},
bX:function bX(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
fX:function fX(a,b,c){this.a=a
this.b=b
this.$ti=c},
fY:function fY(a,b){this.a=null
this.b=a
this.c=b},
fZ:function fZ(a,b,c){this.a=a
this.b=b
this.$ti=c},
ci:function ci(a,b,c){this.a=a
this.b=b
this.$ti=c},
j5:function j5(a,b){this.a=a
this.b=b},
cV:function cV(){},
iF:function iF(){},
dD:function dD(){},
mB:function(){throw H.d(P.x("Cannot modify unmodifiable Map"))},
eH:function(a){var u,t=H.oJ(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
or:function(a){return v.types[a]},
lX:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.N(a).$iz},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ah(a)
if(typeof u!=="string")throw H.d(H.an(a))
return u},
c5:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
n0:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.b(p,3)
u=p[3]
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.d(P.Y(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.a.D(s,q)|32)>t)return}return parseInt(a,b)},
c6:function(a){return H.mS(a)+H.lN(H.cz(a),0,null)},
mS:function(a){var u,t,s,r,q,p,o,n=J.N(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.R||!!n.$ibC){r=C.u(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.eH(t.length>1&&C.a.D(t,0)===36?C.a.af(t,1):t)},
mT:function(){if(!!self.location)return self.location.href
return},
li:function(a){var u,t,s,r,q=J.ac(a)
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
n1:function(a){var u,t,s,r=H.c([],[P.u])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.q)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.an(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.aN(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.d(H.an(s))}return H.li(r)},
lj:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.an(s))
if(s<0)throw H.d(H.an(s))
if(s>65535)return H.n1(a)}return H.li(a)},
n2:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
by:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.aN(u,10))>>>0,56320|u&1023)}}throw H.d(P.Y(a,0,1114111,null,null))},
bx:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
n_:function(a){var u=H.bx(a).getFullYear()+0
return u},
mY:function(a){var u=H.bx(a).getMonth()+1
return u},
mU:function(a){var u=H.bx(a).getDate()+0
return u},
mV:function(a){var u=H.bx(a).getHours()+0
return u},
mX:function(a){var u=H.bx(a).getMinutes()+0
return u},
mZ:function(a){var u=H.bx(a).getSeconds()+0
return u},
mW:function(a){var u=H.bx(a).getMilliseconds()+0
return u},
t:function(a){throw H.d(H.an(a))},
b:function(a,b){if(a==null)J.ac(a)
throw H.d(H.bJ(a,b))},
bJ:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ai(!0,b,s,null)
u=J.ac(a)
if(!(b<0)){if(typeof u!=="number")return H.t(u)
t=b>=u}else t=!0
if(t)return P.K(b,a,s,null,u)
return P.di(b,s)},
ol:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bz(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bz(a,c,!0,b,"end",u)
return new P.ai(!0,b,"end",null)},
an:function(a){return new P.ai(!0,a,null,null)},
og:function(a){if(typeof a!=="number")throw H.d(H.an(a))
return a},
d:function(a){var u
if(a==null)a=new P.de()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.m1})
u.name=""}else u.toString=H.m1
return u},
m1:function(){return J.ah(this.dartException)},
v:function(a){throw H.d(a)},
q:function(a){throw H.d(P.ap(a))},
ax:function(a){var u,t,s,r,q,p
a=H.m0(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.k])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.is(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
it:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
lt:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
ld:function(a,b){return new H.hr(a,b==null?null:b.method)},
kq:function(a,b){var u=b==null,t=u?null:b.method
return new H.fJ(a,t,u?null:b.receiver)},
ag:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.ka(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.aN(t,16)&8191)===10)switch(s){case 438:return f.$1(H.kq(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.ld(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.m4()
q=$.m5()
p=$.m6()
o=$.m7()
n=$.ma()
m=$.mb()
l=$.m9()
$.m8()
k=$.md()
j=$.mc()
i=r.am(u)
if(i!=null)return f.$1(H.kq(u,i))
else{i=q.am(u)
if(i!=null){i.method="call"
return f.$1(H.kq(u,i))}else{i=p.am(u)
if(i==null){i=o.am(u)
if(i==null){i=n.am(u)
if(i==null){i=m.am(u)
if(i==null){i=l.am(u)
if(i==null){i=o.am(u)
if(i==null){i=k.am(u)
if(i==null){i=j.am(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.ld(u,i))}}return f.$1(new H.iE(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dq()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.ai(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dq()
return a},
kK:function(a){var u
if(a==null)return new H.eh(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eh(a)},
op:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.m(0,a[u],a[t])}return b},
ox:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.w("Unsupported number of arguments for wrapped closure"))},
bI:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.ox)
a.$identity=u
return u},
mA:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hZ().constructor.prototype):Object.create(new H.bN(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ao
if(typeof t!=="number")return t.F()
$.ao=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.kZ(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.mw(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.kZ(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
mw:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.or,a)
if(typeof a=="function")if(b)return a
else{u=c?H.kY:H.kd
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.d("Error in functionType of tearoff")},
mx:function(a,b,c,d){var u=H.kd
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
kZ:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mz(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mx(t,!r,u,b)
if(t===0){r=$.ao
if(typeof r!=="number")return r.F()
$.ao=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bO
return new Function(r+H.e(q==null?$.bO=H.eW("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ao
if(typeof r!=="number")return r.F()
$.ao=r+1
o+=r
r="return function("+o+"){return this."
q=$.bO
return new Function(r+H.e(q==null?$.bO=H.eW("self"):q)+"."+H.e(u)+"("+o+");}")()},
my:function(a,b,c,d){var u=H.kd,t=H.kY
switch(b?-1:a){case 0:throw H.d(H.n6("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
mz:function(a,b){var u,t,s,r,q,p,o,n=$.bO
if(n==null)n=$.bO=H.eW("self")
u=$.kX
if(u==null)u=$.kX=H.eW("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.my(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.ao
if(typeof u!=="number")return u.F()
$.ao=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.ao
if(typeof u!=="number")return u.F()
$.ao=u+1
return new Function(n+u+"}")()},
kI:function(a,b,c,d,e,f,g){return H.mA(a,b,c,d,!!e,!!f,g)},
kd:function(a){return a.a},
kY:function(a){return a.c},
eW:function(a){var u,t,s,r=new H.bN("self","target","receiver","name"),q=J.kn(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
oB:function(a,b){throw H.d(H.mv(a,H.eH(b.substring(2))))},
l:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.N(a)[b]
else u=!0
if(u)return a
H.oB(a,b)},
on:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
mv:function(a,b){return new H.eX("CastError: "+P.kk(a)+": type '"+H.e(H.oc(a))+"' is not a subtype of type '"+b+"'")},
oc:function(a){var u,t=J.N(a)
if(!!t.$ibP){u=H.on(t)
if(u!=null)return H.oC(u)
return"Closure"}return H.c6(a)},
oH:function(a){throw H.d(new P.f9(a))},
n6:function(a){return new H.hI(a)},
lV:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
cz:function(a){if(a==null)return
return a.$ti},
pi:function(a,b,c){return H.k7(a["$a"+H.e(c)],H.cz(b))},
oq:function(a,b,c,d){var u=H.k7(a["$a"+H.e(c)],H.cz(b))
return u==null?null:u[d]},
kJ:function(a,b,c){var u=H.k7(a["$a"+H.e(b)],H.cz(a))
return u==null?null:u[c]},
cA:function(a,b){var u=H.cz(a)
return u==null?null:u[b]},
oC:function(a){return H.bl(a,null)},
bl:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.eH(a[0].name)+H.lN(a,1,b)
if(typeof a=="function")return H.eH(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.b(b,t)
return H.e(b[t])}if('func' in a)return H.nL(a,b)
if('futureOr' in a)return"FutureOr<"+H.bl("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
nL:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],[P.k])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.b(a0,m)
p=C.a.F(p,a0[m])
l=u[q]
if(l!=null&&l!==P.a_)p+=" extends "+H.bl(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bl(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bl(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bl(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.oo(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.bl(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
lN:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.S("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bl(p,c)}return"<"+u.h(0)+">"},
k7:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
pg:function(a,b,c){return a.apply(b,H.k7(J.N(b)["$a"+H.e(c)],H.cz(b)))},
ph:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
oy:function(a){var u,t,s,r,q=$.lW.$1(a),p=$.jX[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.k2[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.lS.$2(a,q)
if(q!=null){p=$.jX[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.k2[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.k5(u)
$.jX[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.k2[q]=u
return u}if(s==="-"){r=H.k5(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.lZ(a,u)
if(s==="*")throw H.d(P.iD(q))
if(v.leafTags[q]===true){r=H.k5(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.lZ(a,u)},
lZ:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kM(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
k5:function(a){return J.kM(a,!1,null,!!a.$iz)},
oz:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.k5(u)
else return J.kM(u,c,null,null)},
ov:function(){if(!0===$.kL)return
$.kL=!0
H.ow()},
ow:function(){var u,t,s,r,q,p,o,n
$.jX=Object.create(null)
$.k2=Object.create(null)
H.ou()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.m_.$1(q)
if(p!=null){o=H.oz(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
ou:function(){var u,t,s,r,q,p,o=C.G()
o=H.bH(C.H,H.bH(C.I,H.bH(C.v,H.bH(C.v,H.bH(C.J,H.bH(C.K,H.bH(C.L(C.u),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.lW=new H.k_(r)
$.lS=new H.k0(q)
$.m_=new H.k1(p)},
bH:function(a,b){return a(b)||b},
mJ:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.d(P.Q("Illegal RegExp pattern ("+String(p)+")",a,null))},
oE:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
om:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
m0:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kO:function(a,b,c){var u=H.oF(a,b,c)
return u},
oF:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.m0(b),'g'),H.om(c))},
f2:function f2(){},
f3:function f3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
is:function is(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hr:function hr(a,b){this.a=a
this.b=b},
fJ:function fJ(a,b,c){this.a=a
this.b=b
this.c=c},
iE:function iE(a){this.a=a},
ka:function ka(a){this.a=a},
eh:function eh(a){this.a=a
this.b=null},
bP:function bP(){},
i6:function i6(){},
hZ:function hZ(){},
bN:function bN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eX:function eX(a){this.a=a},
hI:function hI(a){this.a=a},
O:function O(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fN:function fN(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fO:function fO(a,b){this.a=a
this.$ti=b},
fP:function fP(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
k_:function k_(a){this.a=a},
k0:function k0(a){this.a=a},
k1:function k1(a){this.a=a},
fI:function fI(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bF:function(a){return a},
mR:function(a){return new Int8Array(a)},
ay:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.bJ(b,a))},
nJ:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.d(H.ol(a,b,c))
return b},
c1:function c1(){},
ba:function ba(){},
d9:function d9(){},
c2:function c2(){},
da:function da(){},
hj:function hj(){},
hk:function hk(){},
hl:function hl(){},
hm:function hm(){},
hn:function hn(){},
db:function db(){},
c3:function c3(){},
cm:function cm(){},
cn:function cn(){},
co:function co(){},
cp:function cp(){},
oo:function(a){return J.l6(a?Object.keys(a):[],null)},
oJ:function(a){return v.mangledGlobalNames[a]},
oA:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kM:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jY:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.kL==null){H.ov()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.d(P.iD("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.kP()]
if(r!=null)return r
r=H.oy(a)
if(r!=null)return r
if(typeof a=="function")return C.T
u=Object.getPrototypeOf(a)
if(u==null)return C.B
if(u===Object.prototype)return C.B
if(typeof s=="function"){Object.defineProperty(s,$.kP(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
mI:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.kV(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.Y(a,0,4294967295,"length",null))
return J.l6(new Array(a),b)},
l6:function(a,b){return J.kn(H.c(a,[b]))},
kn:function(a){a.fixed$length=Array
return a},
N:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cZ.prototype
return J.cY.prototype}if(typeof a=="string")return J.b5.prototype
if(a==null)return J.d_.prototype
if(typeof a=="boolean")return J.fH.prototype
if(a.constructor==Array)return J.b4.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b6.prototype
return a}if(a instanceof P.a_)return a
return J.jY(a)},
cx:function(a){if(typeof a=="string")return J.b5.prototype
if(a==null)return a
if(a.constructor==Array)return J.b4.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b6.prototype
return a}if(a instanceof P.a_)return a
return J.jY(a)},
eG:function(a){if(a==null)return a
if(a.constructor==Array)return J.b4.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b6.prototype
return a}if(a instanceof P.a_)return a
return J.jY(a)},
lU:function(a){if(typeof a=="number")return J.bW.prototype
if(typeof a=="string")return J.b5.prototype
if(a==null)return a
if(!(a instanceof P.a_))return J.bC.prototype
return a},
cy:function(a){if(typeof a=="string")return J.b5.prototype
if(a==null)return a
if(!(a instanceof P.a_))return J.bC.prototype
return a},
bL:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b6.prototype
return a}if(a instanceof P.a_)return a
return J.jY(a)},
D:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.N(a).t(a,b)},
kR:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.lU(a).u(a,b)},
cF:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lX(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cx(a).i(a,b)},
kb:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.lX(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.eG(a).m(a,b,c)},
mm:function(a,b){return J.cy(a).D(a,b)},
mn:function(a,b,c){return J.bL(a).fN(a,b,c)},
mo:function(a,b,c,d){return J.bL(a).h7(a,b,c,d)},
mp:function(a,b){return J.cy(a).X(a,b)},
kc:function(a,b){return J.lU(a).hj(a,b)},
eI:function(a,b){return J.eG(a).I(a,b)},
mq:function(a,b,c,d){return J.bL(a).hx(a,b,c,d)},
kS:function(a,b){return J.eG(a).A(a,b)},
mr:function(a){return J.bL(a).ghf(a)},
eJ:function(a){return J.bL(a).gbX(a)},
cG:function(a){return J.N(a).gG(a)},
aZ:function(a){return J.eG(a).gT(a)},
ac:function(a){return J.cx(a).gl(a)},
kT:function(a){return J.eG(a).i2(a)},
ms:function(a,b){return J.bL(a).i5(a,b)},
mt:function(a,b,c){return J.cy(a).q(a,b,c)},
mu:function(a){return J.cy(a).ie(a)},
ah:function(a){return J.N(a).h(a)},
a:function a(){},
fH:function fH(){},
d_:function d_(){},
d0:function d0(){},
hv:function hv(){},
bC:function bC(){},
b6:function b6(){},
b4:function b4(a){this.$ti=a},
ko:function ko(a){this.$ti=a},
a3:function a3(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bW:function bW(){},
cZ:function cZ(){},
cY:function cY(){},
b5:function b5(){}},P={
nl:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.od()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bI(new P.j7(s),1)).observe(u,{childList:true})
return new P.j6(s,u,t)}else if(self.setImmediate!=null)return P.oe()
return P.of()},
nm:function(a){self.scheduleImmediate(H.bI(new P.j8(a),0))},
nn:function(a){self.setImmediate(H.bI(new P.j9(a),0))},
no:function(a){P.kw(C.n,a)},
kw:function(a,b){var u=C.c.ab(a.a,1000)
return P.nt(u<0?0:u,b)},
ls:function(a,b){var u=C.c.ab(a.a,1000)
return P.nu(u<0?0:u,b)},
nt:function(a,b){var u=new P.en()
u.eo(a,b)
return u},
nu:function(a,b){var u=new P.en()
u.ep(a,b)
return u},
o6:function(){var u,t
for(;u=$.bG,u!=null;){$.cw=null
t=u.b
$.bG=t
if(t==null)$.cv=null
u.a.$0()}},
ob:function(){$.kG=!0
try{P.o6()}finally{$.cw=null
$.kG=!1
if($.bG!=null)$.kQ().$1(P.lT())}},
o9:function(a){var u=new P.dK(a)
if($.bG==null){$.bG=$.cv=u
if(!$.kG)$.kQ().$1(P.lT())}else $.cv=$.cv.b=u},
oa:function(a){var u,t,s=$.bG
if(s==null){P.o9(a)
$.cw=$.cv
return}u=new P.dK(a)
t=$.cw
if(t==null){u.b=s
$.bG=$.cw=u}else{u.b=t.b
$.cw=t.b=u
if(u.b==null)$.cv=u}},
lr:function(a,b){var u=$.am
if(u===C.f)return P.kw(a,b)
return P.kw(a,u.hg(b))},
nc:function(a,b){var u=$.am
if(u===C.f)return P.ls(a,b)
return P.ls(a,u.dg(b,P.dw))},
lO:function(a,b,c,d,e){var u={}
u.a=d
P.oa(new P.jU(u,e))},
o7:function(a,b,c,d){var u,t=$.am
if(t===c)return d.$0()
$.am=c
u=t
try{t=d.$0()
return t}finally{$.am=u}},
o8:function(a,b,c,d,e){var u,t=$.am
if(t===c)return d.$1(e)
$.am=c
u=t
try{t=d.$1(e)
return t}finally{$.am=u}},
j7:function j7(a){this.a=a},
j6:function j6(a,b,c){this.a=a
this.b=b
this.c=c},
j8:function j8(a){this.a=a},
j9:function j9(a){this.a=a},
en:function en(){this.c=0},
jE:function jE(a,b){this.a=a
this.b=b},
jD:function jD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dK:function dK(a){this.a=a
this.b=null},
ds:function ds(){},
i1:function i1(){},
dw:function dw(){},
jN:function jN(){},
jU:function jU(a,b){this.a=a
this.b=b},
jn:function jn(){},
jo:function jo(a,b){this.a=a
this.b=b},
jp:function jp(a,b,c){this.a=a
this.b=b
this.c=c},
mK:function(a,b){return new H.O([a,b])},
kr:function(a,b){return new H.O([a,b])},
mM:function(a){return H.op(a,new H.O([null,null]))},
d4:function(a){return new P.jk([a])},
kB:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
ns:function(a,b){var u=new P.dZ(a,b)
u.c=a.e
return u},
mG:function(a,b,c){var u,t
if(P.kH(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.k])
$.a5.push(a)
try{P.nM(a,u)}finally{if(0>=$.a5.length)return H.b($.a5,-1)
$.a5.pop()}t=P.lp(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
km:function(a,b,c){var u,t
if(P.kH(a))return b+"..."+c
u=new P.S(b)
$.a5.push(a)
try{t=u
t.a=P.lp(t.a,a,", ")}finally{if(0>=$.a5.length)return H.b($.a5,-1)
$.a5.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kH:function(a){var u,t
for(u=$.a5.length,t=0;t<u;++t)if(a===$.a5[t])return!0
return!1},
nM:function(a,b){var u,t,s,r,q,p,o,n=a.gT(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.w())return
u=H.e(n.gH(n))
b.push(u)
m+=u.length+2;++l}if(!n.w()){if(l<=5)return
if(0>=b.length)return H.b(b,-1)
t=b.pop()
if(0>=b.length)return H.b(b,-1)
s=b.pop()}else{r=n.gH(n);++l
if(!n.w()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.b(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gH(n);++l
for(;n.w();r=q,q=p){p=n.gH(n);++l
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
mL:function(a,b,c){var u=P.mK(b,c)
a.A(0,new P.fQ(u))
return u},
l7:function(a,b){var u,t,s=P.d4(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.q)(a),++t)s.n(0,a[t])
return s},
kt:function(a){var u,t={}
if(P.kH(a))return"{...}"
u=new P.S("")
try{$.a5.push(a)
u.a+="{"
t.a=!0
J.kS(a,new P.fV(t,u))
u.a+="}"}finally{if(0>=$.a5.length)return H.b($.a5,-1)
$.a5.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jk:function jk(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jl:function jl(a){this.a=a
this.c=this.b=null},
dZ:function dZ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fQ:function fQ(a){this.a=a},
fR:function fR(){},
r:function r(){},
fU:function fU(){},
fV:function fV(a,b){this.a=a
this.b=b},
aH:function aH(){},
jF:function jF(){},
fW:function fW(){},
dE:function dE(a,b){this.a=a
this.$ti=b},
jr:function jr(){},
e_:function e_(){},
et:function et(){},
nf:function(a,b,c,d){if(b instanceof Uint8Array)return P.ng(!1,b,c,d)
return},
ng:function(a,b,c,d){var u,t,s=$.me()
if(s==null)return
u=0===c
if(u&&!0)return P.kz(s,b)
t=b.length
d=P.be(c,d,t)
if(u&&d===t)return P.kz(s,b)
return P.kz(s,b.subarray(c,d))},
kz:function(a,b){if(P.ni(b))return
return P.nj(a,b)},
nj:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ag(t)}return},
ni:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
nh:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ag(t)}return},
lQ:function(a,b,c){var u,t,s
for(u=J.cx(a),t=b;t<c;++t){s=u.i(a,t)
if(typeof s!=="number")return s.ao()
if((s&127)!==s)return t-b}return c-b},
kW:function(a,b,c,d,e,f){if(C.c.ba(f,4)!==0)throw H.d(P.Q("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.d(P.Q("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.d(P.Q("Invalid base64 padding, more than two '=' characters",a,b))},
eT:function eT(){},
eU:function eU(){},
eZ:function eZ(){},
f4:function f4(){},
fl:function fl(){},
fC:function fC(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
fB:function fB(a){this.a=a},
iN:function iN(){},
iP:function iP(){},
jL:function jL(a){this.b=0
this.c=a},
iO:function iO(a){this.a=a},
jK:function jK(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
cB:function(a,b,c){var u=H.n0(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.d(P.Q(a,null,null))},
mF:function(a){if(a instanceof H.bP)return a.h(0)
return"Instance of '"+H.e(H.c6(a))+"'"},
mN:function(a,b,c){var u,t,s=J.mI(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
ks:function(a,b,c){var u,t=H.c([],[c])
for(u=J.aZ(a);u.w();)t.push(u.gH(u))
if(b)return t
return J.kn(t)},
c9:function(a,b,c){var u
if(typeof a==="object"&&a!==null&&a.constructor===Array){u=a.length
c=P.be(b,c,u)
return H.lj(b>0||c<u?C.b.e9(a,b,c):a)}if(!!J.N(a).$ic3)return H.n2(a,b,P.be(b,c,a.length))
return P.na(a,b,c)},
na:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.d(P.Y(b,0,J.ac(a),q,q))
u=c==null
if(!u&&c<b)throw H.d(P.Y(c,b,J.ac(a),q,q))
t=J.aZ(a)
for(s=0;s<b;++s)if(!t.w())throw H.d(P.Y(b,0,s,q,q))
r=[]
if(u)for(;t.w();)r.push(t.gH(t))
else for(s=b;s<c;++s){if(!t.w())throw H.d(P.Y(c,b,s,q,q))
r.push(t.gH(t))}return H.lj(r)},
n4:function(a){return new H.fI(a,H.mJ(a,!1,!0,!1,!1,!1))},
lp:function(a,b,c){var u=J.aZ(b)
if(!u.w())return a
if(c.length===0){do a+=H.e(u.gH(u))
while(u.w())}else{a+=H.e(u.gH(u))
for(;u.w();)a=a+c+H.e(u.gH(u))}return a},
lv:function(){var u=H.mT()
if(u!=null)return P.ne(u)
throw H.d(P.x("'Uri.base' is not supported"))},
eu:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.e){u=$.mk().b
if(typeof b!=="string")H.v(H.an(b))
u=u.test(b)}else u=!1
if(u)return b
t=c.ghw().bY(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.b(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.by(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
mC:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
mD:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cP:function(a){if(a>=10)return""+a
return"0"+a},
l1:function(a){return new P.b0(1000*a)},
kk:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ah(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mF(a)},
cH:function(a){return new P.ai(!1,null,null,a)},
kV:function(a,b,c){return new P.ai(!0,a,b,c)},
di:function(a,b){return new P.bz(null,null,!0,a,b,"Value not in range")},
Y:function(a,b,c,d,e){return new P.bz(b,c,!0,a,d,"Invalid value")},
be:function(a,b,c){if(0>a||a>c)throw H.d(P.Y(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.d(P.Y(b,a,c,"end",null))
return b}return c},
lk:function(a,b){if(typeof a!=="number")return a.O()
if(a<0)throw H.d(P.Y(a,0,null,b,null))},
K:function(a,b,c,d,e){var u=e==null?J.ac(b):e
return new P.fE(u,!0,a,c,"Index out of range")},
x:function(a){return new P.iG(a)},
iD:function(a){return new P.iC(a)},
lo:function(a){return new P.c8(a)},
ap:function(a){return new P.f1(a)},
w:function(a){return new P.dS(a)},
Q:function(a,b,c){return new P.fv(a,b,c)},
mO:function(a,b,c){var u,t,s=H.c([],[c])
C.b.sl(s,a)
for(u=0;u<a;++u){t=b.$1(u)
if(u>=s.length)return H.b(s,u)
s[u]=t}return s},
kN:function(a){H.oA(a)},
ne:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.a.D(a,4)^58)*3|C.a.D(a,0)^100|C.a.D(a,1)^97|C.a.D(a,2)^116|C.a.D(a,3)^97)>>>0
if(u===0)return P.lu(e<e?C.a.q(a,0,e):a,5,f).ge0()
else if(u===32)return P.lu(C.a.q(a,5,e),0,f).ge0()}t=new Array(8)
t.fixed$length=Array
s=H.c(t,[P.u])
s[0]=0
s[1]=-1
s[2]=-1
s[7]=-1
s[3]=0
s[4]=0
s[5]=e
s[6]=e
if(P.lP(a,0,e,0,s)>=14)s[7]=e
r=s[1]
if(typeof r!=="number")return r.ih()
if(r>=0)if(P.lP(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.F()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.O()
if(typeof n!=="number")return H.t(n)
if(m<n)n=m
if(typeof o!=="number")return o.O()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.O()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.O()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.a.a9(a,"..",o)))j=n>o+2&&C.a.a9(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.a.a9(a,"file",0)){if(q<=0){if(!C.a.a9(a,"/",o)){i="file:///"
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
n=h}k="file"}else if(C.a.a9(a,"http",0)){if(t&&p+3===o&&C.a.a9(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.a.aQ(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.a.a9(a,"https",0)){if(t&&p+4===o&&C.a.a9(a,"443",p+1)){g=o-4
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
m-=0}return new P.ju(a,r,q,p,o,n,m,k)}return P.nv(a,0,e,r,q,p,o,n,m,k)},
lx:function(a){var u=P.k
return C.b.hC(H.c(a.split("&"),[u]),P.kr(u,u),new P.iL(C.e))},
nd:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.iI(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.a.X(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.cB(C.a.q(a,s,t),n,n)
if(typeof p!=="number")return p.a2()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.b(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.cB(C.a.q(a,s,c),n,n)
if(typeof p!=="number")return p.a2()
if(p>255)k.$2(l,s)
if(r>=u)return H.b(j,r)
j[r]=p
return j},
lw:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.iJ(a),d=new P.iK(e,a)
if(a.length<2)e.$1("address is too short")
u=H.c([],[P.u])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.a.X(a,t)
if(p===58){if(t===b){++t
if(C.a.X(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
u.push(-1)
r=!0}else u.push(d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.b.gau(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)u.push(d.$2(s,c))
else{m=P.nd(a,s,c)
u.push((m[0]<<8|m[1])>>>0)
u.push((m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.b(l,i)
l[i]=0
f=i+1
if(f>=k)return H.b(l,f)
l[f]=0
i+=2}else{f=C.c.aN(h,8)
if(i<0||i>=k)return H.b(l,i)
l[i]=f
f=i+1
if(f>=k)return H.b(l,f)
l[f]=h&255
i+=2}}return l},
nv:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.nD(a,b,d)
else{if(d===b)P.bE(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.nE(a,u,e-1):""
s=P.nA(a,e,f,!1)
if(typeof f!=="number")return f.F()
r=f+1
if(typeof g!=="number")return H.t(g)
q=r<g?P.nC(P.cB(C.a.q(a,r,g),new P.jG(a,f),n),j):n}else{q=n
s=q
t=""}p=P.nB(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.O()
o=h<i?P.kD(a,h+1,i,n):n
return new P.bD(j,t,s,q,p,o,i<c?P.nz(a,i+1,c):n)},
lH:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bE:function(a,b,c){throw H.d(P.Q(c,a,b))},
nC:function(a,b){if(a!=null&&a===P.lH(b))return
return a},
nA:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.a.X(a,b)===91){if(typeof c!=="number")return c.J()
u=c-1
if(C.a.X(a,u)!==93)P.bE(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.nx(a,t,u)
if(typeof s!=="number")return s.O()
if(s<u){r=s+1
q=P.lM(a,C.a.a9(a,"25",r)?s+3:r,u,"%25")}else q=""
P.lw(a,t,s)
return C.a.q(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.t(c)
p=b
for(;p<c;++p)if(C.a.X(a,p)===58){s=C.a.bj(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.lM(a,C.a.a9(a,"25",r)?s+3:r,c,"%25")}else q=""
P.lw(a,b,s)
return"["+C.a.q(a,b,s)+q+"]"}return P.nG(a,b,c)},
nx:function(a,b,c){var u,t=C.a.bj(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.t(c)
u=t<c}else u=!1
return u?t:c},
lM:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.S(d):null
if(typeof c!=="number")return H.t(c)
u=b
t=u
s=!0
for(;u<c;){r=C.a.X(a,u)
if(r===37){q=P.kE(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.S("")
o=l.a+=C.a.q(a,t,u)
if(p)q=C.a.q(a,u,u+3)
else if(q==="%")P.bE(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.b(C.h,p)
p=(C.h[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.S("")
if(t<u){l.a+=C.a.q(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.a.X(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.S("")
l.a+=C.a.q(a,t,u)
l.a+=P.kC(r)
u+=m
t=u}}}if(l==null)return C.a.q(a,b,c)
if(t<c)l.a+=C.a.q(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
nG:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.t(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.a.X(a,u)
if(q===37){p=P.kE(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.S("")
n=C.a.q(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.a.q(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.b(C.z,o)
o=(C.z[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.S("")
if(t<u){s.a+=C.a.q(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.b(C.k,o)
o=(C.k[o]&1<<(q&15))!==0}else o=!1
if(o)P.bE(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.a.X(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.S("")
n=C.a.q(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.kC(q)
u+=l
t=u}}}}if(s==null)return C.a.q(a,b,c)
if(t<c){n=C.a.q(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
nD:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.lJ(C.a.D(a,b)))P.bE(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.a.D(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.b(C.m,r)
r=(C.m[r]&1<<(s&15))!==0}else r=!1
if(!r)P.bE(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.a.q(a,b,c)
return P.nw(t?a.toLowerCase():a)},
nw:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
nE:function(a,b,c){return P.cu(a,b,c,C.W,!1)},
nB:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.cu(a,b,c,C.A,!0):C.j.iC(d,new P.jH(),P.k).k(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.a.a7(u,"/"))u="/"+u
return P.nF(u,e,f)},
nF:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.a.a7(a,"/"))return P.nH(a,!u||c)
return P.nI(a)},
kD:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.d(P.cH("Both query and queryParameters specified"))
return P.cu(a,b,c,C.l,!0)}if(d==null)return
u=new P.S("")
t.a=""
d.A(0,new P.jI(new P.jJ(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
nz:function(a,b,c){return P.cu(a,b,c,C.l,!0)},
kE:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.a.X(a,b+1)
t=C.a.X(a,p)
s=H.jZ(u)
r=H.jZ(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.c.aN(q,4)
if(p>=8)return H.b(C.h,p)
p=(C.h[p]&1<<(q&15))!==0}else p=!1
if(p)return H.by(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.a.q(a,b,b+3).toUpperCase()
return},
kC:function(a){var u,t,s,r,q,p,o,n,m="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.c(u,[P.u])
t[0]=37
t[1]=C.a.D(m,a>>>4)
t[2]=C.a.D(m,a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.c(u,[P.u])
for(u=t.length,q=0;--r,r>=0;s=128){p=C.c.h_(a,6*r)&63|s
if(q>=u)return H.b(t,q)
t[q]=37
o=q+1
n=C.a.D(m,p>>>4)
if(o>=u)return H.b(t,o)
t[o]=n
n=q+2
o=C.a.D(m,p&15)
if(n>=u)return H.b(t,n)
t[n]=o
q+=3}}return P.c9(t,0,null)},
cu:function(a,b,c,d,e){var u=P.lL(a,b,c,d,e)
return u==null?C.a.q(a,b,c):u},
lL:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.O()
if(typeof c!=="number")return H.t(c)
if(!(o<c))break
c$0:{u=C.a.X(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.b(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.kE(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.b(C.k,t)
t=(C.k[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.bE(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.a.X(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.kC(u)}}if(m==null)m=new P.S("")
m.a+=C.a.q(a,n,o)
m.a+=H.e(s)
if(typeof r!=="number")return H.t(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.O()
if(n<c)m.a+=C.a.q(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
lK:function(a){if(C.a.a7(a,"."))return!0
return C.a.dJ(a,"/.")!==-1},
nI:function(a){var u,t,s,r,q,p,o
if(!P.lK(a))return a
u=H.c([],[P.k])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.D(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.b(u,-1)
u.pop()
if(u.length===0)u.push("")}r=!0}else if("."===p)r=!0
else{u.push(p)
r=!1}}if(r)u.push("")
return C.b.k(u,"/")},
nH:function(a,b){var u,t,s,r,q,p
if(!P.lK(a))return!b?P.lI(a):a
u=H.c([],[P.k])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.b.gau(u)!==".."){if(0>=u.length)return H.b(u,-1)
u.pop()
r=!0}else{u.push("..")
r=!1}else if("."===p)r=!0
else{u.push(p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.b(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.b.gau(u)==="..")u.push("")
if(!b){if(0>=u.length)return H.b(u,0)
t=P.lI(u[0])
if(0>=u.length)return H.b(u,0)
u[0]=t}return C.b.k(u,"/")},
lI:function(a){var u,t,s,r=a.length
if(r>=2&&P.lJ(J.mm(a,0)))for(u=1;u<r;++u){t=C.a.D(a,u)
if(t===58)return C.a.q(a,0,u)+"%3A"+C.a.af(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.b(C.m,s)
s=(C.m[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
ny:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.a.D(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.d(P.cH("Invalid URL encoding"))}}return u},
kF:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.a.D(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.e!==d)s=!1
else s=!0
if(s)return C.a.q(a,b,c)
else r=new H.m(C.a.q(a,b,c))}else{r=H.c([],[P.u])
for(s=a.length,q=b;q<c;++q){t=C.a.D(a,q)
if(t>127)throw H.d(P.cH("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.d(P.cH("Truncated URI"))
r.push(P.ny(a,q+1))
q+=2}else if(t===43)r.push(32)
else r.push(t)}}return new P.iO(!1).bY(r)},
lJ:function(a){var u=a|32
return 97<=u&&u<=122},
lu:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.c([b-1],[P.u])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.a.D(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.d(P.Q(m,a,t))}}if(s<0&&t>b)throw H.d(P.Q(m,a,t))
for(;r!==44;){l.push(t);++t
for(q=-1;t<u;++t){r=C.a.D(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)l.push(q)
else{p=C.b.gau(l)
if(r!==44||t!==p+7||!C.a.a9(a,"base64",p+1))throw H.d(P.Q("Expecting '='",a,t))
break}}l.push(t)
o=t+1
if((l.length&1)===1)a=C.F.hN(0,a,o,u)
else{n=P.lL(a,o,u,C.l,!0)
if(n!=null)a=C.a.aQ(a,o,u,n)}return new P.iH(a,l,c)},
nK:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.mO(22,new P.jP(),P.bB),n=new P.jO(o),m=new P.jQ(),l=new P.jR(),k=n.$2(0,225)
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
lP:function(a,b,c,d,e){var u,t,s,r,q,p=$.ml()
for(u=b;u<c;++u){if(d<0||d>=p.length)return H.b(p,d)
t=p[d]
s=C.a.D(a,u)^96
if(s>95)s=31
if(s>=t.length)return H.b(t,s)
r=t[s]
d=r&31
q=r>>>5
if(q>=8)return H.b(e,q)
e[q]=u}return d},
az:function az(){},
a6:function a6(a,b){this.a=a
this.b=b},
M:function M(){},
b0:function b0(a){this.a=a},
fh:function fh(){},
fi:function fi(){},
bt:function bt(){},
de:function de(){},
ai:function ai(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bz:function bz(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fE:function fE(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iG:function iG(a){this.a=a},
iC:function iC(a){this.a=a},
c8:function c8(a){this.a=a},
f1:function f1(a){this.a=a},
hu:function hu(){},
dq:function dq(){},
f9:function f9(a){this.a=a},
dS:function dS(a){this.a=a},
fv:function fv(a,b,c){this.a=a
this.b=b
this.c=c},
fx:function fx(){},
u:function u(){},
h:function h(){},
fG:function fG(){},
o:function o(){},
R:function R(){},
bb:function bb(){},
aa:function aa(){},
a_:function a_(){},
k:function k(){},
S:function S(a){this.a=a},
iL:function iL(a){this.a=a},
iI:function iI(a){this.a=a},
iJ:function iJ(a){this.a=a},
iK:function iK(a,b){this.a=a
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
jG:function jG(a,b){this.a=a
this.b=b},
jH:function jH(){},
jJ:function jJ(a,b){this.a=a
this.b=b},
jI:function jI(a){this.a=a},
iH:function iH(a,b,c){this.a=a
this.b=b
this.c=c},
jP:function jP(){},
jO:function jO(a){this.a=a},
jQ:function jQ(){},
jR:function jR(){},
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
jd:function jd(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
oj:function(a){var u,t=J.N(a)
if(!!t.$iaG){u=t.gdn(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.es(a.data,a.height,a.width)},
oi:function(a){if(a instanceof P.es)return{data:a.a,height:a.b,width:a.c}
return a},
aV:function(a){var u,t,s,r,q
if(a==null)return
u=P.kr(P.k,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.q)(t),++r){q=t[r]
u.m(0,q,a[q])}return u},
oh:function(a){var u={}
a.A(0,new P.jV(u))
return u},
jw:function jw(){},
jy:function jy(a,b){this.a=a
this.b=b},
es:function es(a,b,c){this.a=a
this.b=b
this.c=c},
jV:function jV(a){this.a=a},
jx:function jx(a,b){this.a=a
this.b=b},
fr:function fr(a,b){this.a=a
this.b=b},
fs:function fs(){},
ft:function ft(){},
jj:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
nr:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jm:function jm(){},
a9:function a9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b7:function b7(){},
fL:function fL(){},
bc:function bc(){},
hs:function hs(){},
hA:function hA(){},
c7:function c7(){},
i2:function i2(){},
j:function j(){},
bf:function bf(){},
ir:function ir(){},
dX:function dX(){},
dY:function dY(){},
e7:function e7(){},
e8:function e8(){},
ej:function ej(){},
ek:function ek(){},
eq:function eq(){},
er:function er(){},
bB:function bB(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(a){this.a=a},
eR:function eR(){},
bn:function bn(){},
ht:function ht(){},
dL:function dL(){},
dk:function dk(){},
hY:function hY(){},
ef:function ef(){},
eg:function eg(){}},W={
kU:function(){var u=document.createElement("a")
return u},
kf:function(){var u=document.createElement("canvas")
return u},
mE:function(a,b,c){var u=document.body,t=(u&&C.t).ak(u,a,b,c)
t.toString
u=new H.ci(new W.a2(t),new W.fk(),[W.E])
return u.gaH(u)},
ki:function(a){return"wheel"},
bR:function(a){var u,t,s,r="element tag unavailable"
try{u=J.bL(a)
t=u.gdW(a)
if(typeof t==="string")r=u.gdW(a)}catch(s){H.ag(s)}return r},
kl:function(a){var u=document.createElement("img")
if(a!=null)u.src=a
return u},
ji:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lF:function(a,b,c,d){var u=W.ji(W.ji(W.ji(W.ji(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
U:function(a,b,c,d){var u=W.lR(new W.jg(c),W.i)
if(u!=null&&!0)J.mo(a,b,u,!1)
return new W.jf(a,b,u,!1)},
lE:function(a){var u=W.kU(),t=window.location
u=new W.ck(new W.jq(u,t))
u.ek(a)
return u},
np:function(a,b,c,d){return!0},
nq:function(a,b,c,d){var u,t=d.a,s=t.a
s.href=c
u=s.hostname
t=t.b
if(!(u==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(u==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
lG:function(){var u=P.k,t=P.l7(C.o,u),s=H.c(["TEMPLATE"],[u])
t=new W.jB(t,P.d4(u),P.d4(u),P.d4(u),null)
t.en(null,new H.fZ(C.o,new W.jC(),[H.cA(C.o,0),u]),s,null)
return t},
lR:function(a,b){var u=$.am
if(u===C.f)return a
return u.dg(a,b)},
n:function n(){},
eK:function eK(){},
eL:function eL(){},
eM:function eM(){},
bo:function bo(){},
bp:function bp(){},
br:function br(){},
b_:function b_(){},
f5:function f5(){},
H:function H(){},
bQ:function bQ(){},
f6:function f6(){},
ad:function ad(){},
aq:function aq(){},
f7:function f7(){},
f8:function f8(){},
fb:function fb(){},
ak:function ak(){},
fe:function fe(){},
cR:function cR(){},
cS:function cS(){},
ff:function ff(){},
fg:function fg(){},
jb:function jb(a,b){this.a=a
this.b=b},
P:function P(){},
fk:function fk(){},
i:function i(){},
f:function f(){},
ar:function ar(){},
bS:function bS(){},
fq:function fq(){},
fu:function fu(){},
aF:function aF(){},
fA:function fA(){},
bU:function bU(){},
aG:function aG(){},
bv:function bv(){},
bw:function bw(){},
fS:function fS(){},
hc:function hc(){},
c_:function c_(){},
hd:function hd(){},
he:function he(a){this.a=a},
hf:function hf(){},
hg:function hg(a){this.a=a},
aJ:function aJ(){},
hh:function hh(){},
au:function au(){},
a2:function a2(a){this.a=a},
E:function E(){},
dc:function dc(){},
aM:function aM(){},
hx:function hx(){},
hG:function hG(){},
hH:function hH(a){this.a=a},
hJ:function hJ(){},
aO:function aO(){},
hV:function hV(){},
aP:function aP(){},
hW:function hW(){},
aQ:function aQ(){},
i_:function i_(){},
i0:function i0(a){this.a=a},
av:function av(){},
dt:function dt(){},
i3:function i3(){},
i4:function i4(){},
ca:function ca(){},
aR:function aR(){},
aw:function aw(){},
i7:function i7(){},
i8:function i8(){},
ik:function ik(){},
aS:function aS(){},
bA:function bA(){},
ip:function ip(){},
iq:function iq(){},
bg:function bg(){},
iM:function iM(){},
j4:function j4(){},
bk:function bk(){},
cj:function cj(){},
jc:function jc(){},
dN:function dN(){},
jh:function jh(){},
e4:function e4(){},
jv:function jv(){},
jz:function jz(){},
ja:function ja(){},
je:function je(a){this.a=a},
jf:function jf(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jg:function jg(a){this.a=a},
ck:function ck(a){this.a=a},
J:function J(){},
dd:function dd(a){this.a=a},
hp:function hp(a){this.a=a},
ho:function ho(a,b,c){this.a=a
this.b=b
this.c=c},
ec:function ec(){},
js:function js(){},
jt:function jt(){},
jB:function jB(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jC:function jC(){},
jA:function jA(){},
cW:function cW(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
aL:function aL(){},
jq:function jq(a,b){this.a=a
this.b=b},
ev:function ev(a){this.a=a},
jM:function jM(a){this.a=a},
dM:function dM(){},
dO:function dO(){},
dP:function dP(){},
dQ:function dQ(){},
dR:function dR(){},
dT:function dT(){},
dU:function dU(){},
dV:function dV(){},
dW:function dW(){},
e0:function e0(){},
e1:function e1(){},
e2:function e2(){},
e3:function e3(){},
e5:function e5(){},
e6:function e6(){},
e9:function e9(){},
ea:function ea(){},
eb:function eb(){},
cq:function cq(){},
cr:function cr(){},
ed:function ed(){},
ee:function ee(){},
ei:function ei(){},
el:function el(){},
em:function em(){},
cs:function cs(){},
ct:function ct(){},
eo:function eo(){},
ep:function ep(){},
ew:function ew(){},
ex:function ex(){},
ey:function ey(){},
ez:function ez(){},
eA:function eA(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){}},T={
L:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.d(P.w("The given low and high character strings for a Range must have one and only one characters."))
u=C.a.D(a,0)
t=C.a.D(b,0)
s=new T.hB()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
p:function(a){var u=new T.hK()
u.ei(a)
return u},
aB:function aB(){},
cX:function cX(){},
b8:function b8(){},
a4:function a4(){this.a=null},
hB:function hB(){this.b=this.a=null},
hK:function hK(){this.a=null},
kv:function(a){var u=new T.id()
u.a=0
u.b=a
u.d=u.c=!1
u.x=u.r=u.f=u.e=0
return u},
cb:function cb(){},
i9:function i9(){},
id:function id(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ie:function ie(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ig:function ig(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
ii:function ii(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ih:function ih(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},R={
im:function(){var u=new R.il(),t=P.k
u.a=new H.O([t,R.dr])
u.b=new H.O([t,R.dy])
return u},
dr:function dr(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dx:function dx(a,b,c){this.a=a
this.b=b
this.c=c},
dy:function dy(a){this.b=a
this.c=null},
il:function il(){this.c=this.b=this.a=null},
dA:function dA(a){this.b=a
this.a=this.c=null}},O={
kg:function(a){var u=new O.aC([a])
u.bc(a)
return u},
aC:function aC(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bZ:function bZ(){this.b=this.a=null},
fc:function fc(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d7:function d7(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h6:function h6(a,b){this.a=a
this.b=b},
h7:function h7(){},
h8:function h8(a,b){this.a=a
this.b=b},
h9:function h9(){},
ha:function ha(a,b){this.a=a
this.b=b},
hb:function hb(){},
h0:function h0(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
d8:function d8(){},
h1:function h1(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
as:function as(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h3:function h3(){var _=this
_.e=_.d=_.c=_.b=null},
h4:function h4(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h5:function h5(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dm:function dm(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
du:function du(){}},E={
l4:function(){var u,t=new E.aE()
t.a=""
t.b=!0
u=O.kg(E.aE)
t.y=u
u.aT(t.ghO(),t.ghR())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sbu(0,null)
return t},
n5:function(a,b){var u=new E.hC(a)
u.eh(a,b)
return u},
nb:function(a,b,c,d,e){var u,t,s=J.N(a)
if(!!s.$ibr)return E.lq(a,!0,!0,!0,!1)
u=W.kf()
t=u.style
t.width="100%"
t.height="100%"
s.gbX(a).n(0,u)
return E.lq(u,!0,!0,!0,!1)},
lq:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.dv(),p=C.i.cz(a,"webgl2",P.mM(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.v(P.w("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.n5(p,a)
u=new T.ig(p)
u.b=p.getParameter(3379)
u.c=p.getParameter(34076)
u.e=u.d=0
q.f=u
u=new X.dF(a)
t=new X.fK()
t.c=new X.ae(!1,!1,!1)
t.d=P.d4(P.u)
u.b=t
t=new X.hi(u)
t.f=0
t.r=V.aN()
t.x=V.aN()
t.ch=t.Q=1
u.c=t
t=new X.fT(u)
t.r=0
t.x=V.aN()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.io(u)
t.f=V.aN()
t.r=V.aN()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.c([],[[P.ds,P.a_]])
u.z=t
s=document
t.push(W.U(s,"contextmenu",u.gf1(),!1))
u.z.push(W.U(a,"focus",u.gf7(),!1))
u.z.push(W.U(a,"blur",u.geW(),!1))
u.z.push(W.U(s,"keyup",u.gfb(),!1))
u.z.push(W.U(s,"keydown",u.gf9(),!1))
u.z.push(W.U(a,"mousedown",u.gff(),!1))
u.z.push(W.U(a,"mouseup",u.gfj(),!1))
u.z.push(W.U(a,r,u.gfh(),!1))
t=u.z
W.ki(a)
W.ki(a)
t.push(W.U(a,W.ki(a),u.gfl(),!1))
u.z.push(W.U(s,r,u.gf3(),!1))
u.z.push(W.U(s,"mouseup",u.gf5(),!1))
u.z.push(W.U(s,"pointerlockchange",u.gfn(),!1))
u.z.push(W.U(a,"touchstart",u.gfG(),!1))
u.z.push(W.U(a,"touchend",u.gfC(),!1))
u.z.push(W.U(a,"touchmove",u.gfE(),!1))
q.x=u
q.ch=!0
q.cx=!1
q.cy=new P.a6(Date.now(),!1)
q.db=0
q.d_()
return q},
eV:function eV(){},
aE:function aE(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hC:function hC(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hD:function hD(a){this.a=a},
hE:function hE(a){this.a=a},
hF:function hF(a){this.a=a},
dv:function dv(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
ij:function ij(a){this.a=a}},Z={
lD:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.bF(c)),35044)
a.bindBuffer(b,null)
return new Z.dJ(b,u)},
af:function(a){return new Z.aU(a)},
dJ:function dJ(a,b){this.a=a
this.b=b},
cJ:function cJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
ch:function ch(a){this.a=a},
bq:function bq(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bV:function bV(a,b,c){this.a=a
this.b=b
this.c=c},
aU:function aU(a){this.a=a}},D={
B:function(){var u=new D.bu()
u.d=0
return u},
eY:function eY(){},
bu:function bu(){var _=this
_.d=_.c=_.b=_.a=null},
fn:function fn(a){this.a=a},
fo:function fo(a){this.a=a},
W:function W(){this.b=null},
b2:function b2(){this.b=null},
b3:function b3(){this.b=null},
y:function y(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
bs:function bs(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a7:function a7(){},
d2:function d2(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
hy:function hy(){},
hX:function hX(){}},X={cK:function cK(a,b){this.a=a
this.b=b},d1:function d1(a,b){this.a=a
this.b=b},fK:function fK(){var _=this
_.d=_.c=_.b=_.a=null},d6:function d6(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fT:function fT(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ae:function ae(a,b,c){this.a=a
this.b=b
this.c=c},aK:function aK(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hi:function hi(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},c0:function c0(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hz:function hz(){},dz:function dz(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},io:function io(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dF:function dF(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
l5:function(a){var u=new X.fw(),t=new V.aj(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=V.ku()
u.r=t
return u},
le:function(a){var u,t,s=new X.df()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gp().n(0,s.geq())
t=new D.y("mover",u,s.b)
t.b=!0
s.a1(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.A().a)){s.c=1.0471975511965976
t=new D.y("fov",t,1.0471975511965976)
t.b=!0
s.a1(t)}t=s.d
if(!(Math.abs(t-0.1)<$.A().a)){s.d=0.1
t=new D.y("near",t,0.1)
t.b=!0
s.a1(t)}t=s.e
if(!(Math.abs(t-2000)<$.A().a)){s.e=2000
t=new D.y("far",t,2000)
t.b=!0
s.a1(t)}return s},
eS:function eS(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ke:function ke(){},
fw:function fw(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fD:function fD(){this.b=this.a=null},
df:function df(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
i5:function i5(){},
lY:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="testCanvas",a5=null,a6="bumpMaps",a7="modifiers",a8=34067,a9=V.n7("Test 029"),b0=W.kf()
b0.className="pageLargeCanvas"
b0.id=a4
a9.a.appendChild(b0)
u=[P.k]
a9.de(H.c(["Test of bump distort pass. It renders the scene to a back buffer then ","paints that back buffer texture to the front buffer with a distortion."],u))
a9.h6(H.c(["bumpMaps"],u))
a9.de(H.c(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(a4)
if(t==null)H.v(P.w("Failed to find an element with the identifier, testCanvas."))
s=E.nb(t,!0,!0,!0,!1)
r=new U.bT()
r.bc(U.a8)
r.aT(r.geO(),r.gfs())
r.e=null
r.f=V.b9()
r.r=0
q=s.x
p=new U.dH()
o=U.kh()
o.scw(0,!0)
o.scg(6.283185307179586)
o.scj(0)
o.sag(0,0)
o.sci(100)
o.sW(0)
o.sbZ(0.5)
p.b=o
n=p.gaL()
o.gp().n(0,n)
o=U.kh()
o.scw(0,!0)
o.scg(6.283185307179586)
o.scj(0)
o.sag(0,0)
o.sci(100)
o.sW(0)
o.sbZ(0.5)
p.c=o
o.gp().n(0,n)
p.d=null
p.r=p.f=p.e=!1
p.y=p.x=2.5
p.Q=4
p.ch=p.cx=!1
p.db=p.cy=0
p.dx=null
p.dy=0
p.fx=p.fr=null
m=new X.ae(!1,!1,!1)
l=p.d
p.d=m
o=new D.y(a7,l,m)
o.b=!0
p.P(o)
o=p.f
if(o!==!1){p.f=!1
o=new D.y("invertX",o,!1)
o.b=!0
p.P(o)}o=p.r
if(o!==!1){p.r=!1
o=new D.y("invertY",o,!1)
o.b=!0
p.P(o)}p.b_(q)
r.n(0,p)
q=s.x
p=new U.dG()
o=U.kh()
o.scw(0,!0)
o.scg(6.283185307179586)
o.scj(0)
o.sag(0,0)
o.sci(100)
o.sW(0)
o.sbZ(0.2)
p.b=o
o.gp().n(0,p.gaL())
p.c=null
p.d=!1
p.e=2.5
p.r=4
p.x=p.y=!1
p.z=0
p.Q=null
p.ch=0
p.cy=p.cx=null
m=new X.ae(!0,!1,!1)
l=p.c
p.c=m
o=new D.y(a7,l,m)
o.b=!0
p.P(o)
p.b_(q)
r.n(0,p)
q=s.x
p=new U.dI()
p.c=0.01
p.e=p.d=0
m=new X.ae(!1,!1,!1)
p.b=m
o=new D.y(a7,a5,m)
o.b=!0
p.P(o)
p.b_(q)
r.n(0,p)
r.n(0,U.l_(V.at(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
k=X.le(r)
j=new X.eS()
j.d=j.c=j.b=j.a=512
j.e=!0
j.f=!1
j.x=j.r=1
j.ch=T.kv(a5)
j.cx=new V.aj(0,0,0,1)
j.cy=!0
j.db=2000
j.dx=!0
j.dy=V.ku()
j.san(0,512)
j.sal(0,512)
i=new V.aj(0,0,0,1)
if(!j.cx.t(0,i)){l=j.cx
j.cx=i
q=new D.y("color",l,i)
q.b=!0
j.a1(q)}if(j.cy){j.cy=!1
q=new D.y("clearColor",!0,!1)
q.b=!0
j.a1(q)}q=j.db
if(!(Math.abs(q-2000)<$.A().a)){j.db=2000
q=new D.y("depth",q,2000)
q.b=!0
j.a1(q)}if(!j.f){j.f=!0
q=new D.y("autoResize",!1,!0)
q.b=!0
j.a1(q)}q=j.r
if(!(Math.abs(q-1)<$.A().a)){j.r=1
q=new D.y("autoResizeScalarX",q,1)
q.b=!0
j.a1(q)}q=j.x
if(!(Math.abs(q-1)<$.A().a)){j.x=1
q=new D.y("autoResizeScalarY",q,1)
q.b=!0
j.a1(q)}h=V.ku()
if(!J.D(j.dy,h)){l=j.dy
j.dy=h
q=new D.y("region",l,h)
q.b=!0
j.a1(q)}g=E.l4()
g.sbu(0,F.oI())
f=new O.d7()
q=O.kg(V.aI)
f.e=q
q.aT(f.geS(),f.geU())
q=new O.as(f,"emission")
q.c=new A.Z(!1,!1,!1)
q.f=new V.V(0,0,0)
f.f=q
q=new O.as(f,"ambient")
q.c=new A.Z(!1,!1,!1)
q.f=new V.V(0,0,0)
f.r=q
q=new O.as(f,"diffuse")
q.c=new A.Z(!1,!1,!1)
q.f=new V.V(0,0,0)
f.x=q
q=new O.as(f,"invDiffuse")
q.c=new A.Z(!1,!1,!1)
q.f=new V.V(0,0,0)
f.y=q
q=new O.h5(f,"specular")
q.c=new A.Z(!1,!1,!1)
q.f=new V.V(0,0,0)
q.ch=100
f.z=q
q=new O.h1(f,"bump")
q.c=new A.Z(!1,!1,!1)
f.Q=q
f.ch=null
q=new O.as(f,"reflect")
q.c=new A.Z(!1,!1,!1)
q.f=new V.V(0,0,0)
f.cx=q
q=new O.h4(f,"refract")
q.c=new A.Z(!1,!1,!1)
q.f=new V.V(0,0,0)
q.ch=1
f.cy=q
q=new O.h0(f,"alpha")
q.c=new A.Z(!1,!1,!1)
q.f=1
f.db=q
q=new D.d2()
q.bc(D.a7)
q.e=H.c([],[D.bs])
q.f=H.c([],[D.hy])
q.r=H.c([],[D.hX])
q.y=q.x=null
q.cB(q.geQ(),q.gfp(),q.gfu())
f.dx=q
p=new O.h3()
p.b=new V.aj(0,0,0,0)
p.c=1
p.d=10
p.e=!1
f.dy=p
p=q.x
q=p==null?q.x=D.B():p
q.n(0,f.gfP())
q=f.dx
p=q.y
q=p==null?q.y=D.B():p
q.n(0,f.gby())
f.fr=null
q=f.dx
e=V.kA()
p=U.l_(V.la(V.lh(),e,new V.C(0,-1,-1)))
i=new V.V(1,1,1)
o=new D.bs()
o.c=new V.V(1,1,1)
o.a=V.lC()
o.d=V.kA()
o.e=V.nk()
l=o.b
o.b=p
p.gp().n(0,o.gel())
p=new D.y("mover",l,o.b)
p.b=!0
o.av(p)
if(!o.c.t(0,i)){l=o.c
o.c=i
p=new D.y("color",l,i)
p.b=!0
o.av(p)}q.n(0,o)
q=f.r
q.sb1(0,new V.V(0,0,1))
q=f.x
q.sb1(0,new V.V(0,1,0))
q=f.z
q.sb1(0,new V.V(1,0,0))
q=f.z
q.d3(new A.Z(!0,!1,!1))
q.d4(10)
q=s.f
p=q.a
d=p.createTexture()
p.bindTexture(a8,d)
p.texParameteri(a8,10242,10497)
p.texParameteri(a8,10243,10497)
p.texParameteri(a8,10241,9729)
p.texParameteri(a8,10240,9729)
p.bindTexture(a8,a5)
c=new T.ie()
c.a=0
c.b=d
c.c=!1
c.d=0
q.aK(c,d,"../resources/maskonaive/posx.jpg",34069,!1,!1)
q.aK(c,d,"../resources/maskonaive/negx.jpg",34070,!1,!1)
q.aK(c,d,"../resources/maskonaive/posy.jpg",34071,!1,!1)
q.aK(c,d,"../resources/maskonaive/negy.jpg",34072,!1,!1)
q.aK(c,d,"../resources/maskonaive/posz.jpg",34073,!1,!1)
q.aK(c,d,"../resources/maskonaive/negz.jpg",34074,!1,!1)
b=M.l0()
q=new O.dm()
q.b=1.0471975511965976
q.d=new V.V(1,1,1)
l=q.c
q.c=c
c.gp().n(0,q.gby())
p=new D.y("boxTexture",l,q.c)
p.b=!0
q.a4(p)
b.saR(q)
b.sb8(0,j)
b.sb0(k)
a=new M.cT()
a.a=!0
q=O.kg(E.aE)
a.e=q
q.aT(a.geY(),a.gf_())
a.y=a.x=a.r=a.f=null
a0=X.l5(a5)
a.sb0(a5)
a.sb8(0,a0)
a.saR(a5)
a.sb0(k)
a.saR(f)
a.sb8(0,j)
a.e.n(0,g)
a1=new O.fc()
a1.sdl(a5)
a1.sdj(a5)
a2=V.l9()
if(!J.D(a1.d,a2)){a1.d=a2
a1.ap()}a2=V.l9()
if(!J.D(a1.e,a2)){a1.e=a2
a1.ap()}a1.sdi(a5)
a1.sdl(j.ch)
a1.sdi(V.lb(0.05,0.05,0.05))
a3=M.l0()
a3.saR(a1)
q=M.al
p=H.c([b,a,a3],[q])
o=new M.cM()
o.bc(q)
o.e=!0
o.f=!1
o.r=null
o.aT(o.gfw(),o.gfA())
o.ac(0,p)
q=s.d
if(q!==o){if(q!=null)q.gp().R(0,s.gcH())
s.d=o
o.gp().n(0,s.gcH())
s.cI()}q=new V.ia(a6,new X.k3(a1,s))
u=u.getElementById(a6)
q.c=u
if(u==null)H.v("Failed to find bumpMaps for Texture2DGroup")
q.dc(0,"../resources/BumpMap1.png",!0)
q.n(0,"../resources/BumpMap2.png")
q.n(0,"../resources/BumpMap3.png")
q.n(0,"../resources/BumpMap4.png")
q.n(0,"../resources/BumpMap5.png")
q.n(0,"../resources/ScrewBumpMap.png")
q.n(0,"../resources/CtrlPnlBumpMap.png")
u=s.Q
if(u==null)u=s.Q=D.B()
q=u.b
u=q==null?u.b=H.c([],[{func:1,ret:-1,args:[D.W]}]):q
u.push(new X.k4(a9,a1))
V.oD(s)},
k3:function k3(a,b){this.a=a
this.b=b},
k4:function k4(a,b){this.a=a
this.b=b}},V={
f_:function(a,b,c){var u=a/255,t=b/255,s=c/255
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.aj(u,t,s,1)},
oK:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.ba(a-b,u)
return(a<0?a+u:a)+b},
G:function(a,b,c){if(a==null)return C.a.aC("null",c)
return C.a.aC(C.d.dZ(Math.abs(a-0)<$.A().a?0:a,b),c+b+1)},
bK:function(a,b,c){var u,t,s,r,q,p,o=H.c([],[P.k])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.q)(a),++s){r=V.G(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.b(o,q)
u=C.a.aC(o[q],t)
p=o.length
if(q>=p)return H.b(o,q)
o[q]=u}return o},
cC:function(a){return C.d.ia(Math.pow(2,C.S.c7(Math.log(H.og(a))/Math.log(2))))},
l9:function(){var u=$.l8
return u==null?$.l8=new V.bY(1,0,0,0,1,0,0,0,1):u},
b9:function(){var u=$.lc
return u==null?$.lc=V.at(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
at:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aI(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lb:function(a,b,c){return V.at(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1)},
la:function(a,b,c){var u=c.v(0,Math.sqrt(c.B(c))),t=b.aA(u),s=t.v(0,Math.sqrt(t.B(t))),r=u.aA(s),q=new V.C(a.a,a.b,a.c),p=s.S(0).B(q),o=r.S(0).B(q),n=u.S(0).B(q)
return V.at(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
aN:function(){var u=$.lg
return u==null?$.lg=new V.a0(0,0):u},
lh:function(){var u=$.c4
return u==null?$.c4=new V.X(0,0,0):u},
ku:function(){var u=$.lm
return u==null?$.lm=V.ll(0,0,1,1):u},
ll:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dj(a,b,c,d)},
cg:function(){var u=$.lB
return u==null?$.lB=new V.C(0,0,0):u},
nk:function(){var u=$.iQ
return u==null?$.iQ=new V.C(-1,0,0):u},
kA:function(){var u=$.iR
return u==null?$.iR=new V.C(0,1,0):u},
lC:function(){var u=$.iS
return u==null?$.iS=new V.C(0,0,1):u},
V:function V(a,b,c){this.a=a
this.b=b
this.c=c},
aj:function aj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fm:function fm(a){this.a=a},
bY:function bY(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aI:function aI(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a0:function a0(a,b){this.a=a
this.b=b},
X:function X(a,b,c){this.a=a
this.b=b
this.c=c},
bd:function bd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dj:function dj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
F:function F(a,b){this.a=a
this.b=b},
C:function C(a,b,c){this.a=a
this.b=b
this.c=c},
oD:function(a){P.nc(C.P,new V.k6(a))},
n7:function(a){var u=new V.hP()
u.ej(a,!0)
return u},
cL:function cL(){},
k6:function k6(a){this.a=a},
fa:function fa(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fy:function fy(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fz:function fz(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hw:function hw(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hP:function hP(){this.b=this.a=null},
hR:function hR(a){this.a=a},
hQ:function hQ(a){this.a=a},
hS:function hS(a){this.a=a},
ia:function ia(a,b){this.a=a
this.c=null
this.d=b},
ic:function ic(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ib:function ib(){}},U={
kh:function(){var u=new U.f0()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
l_:function(a){var u=new U.cN()
u.a=a
return u},
f0:function f0(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cN:function cN(){this.b=this.a=null},
bT:function bT(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a8:function a8(){},
dG:function dG(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dH:function dH(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dI:function dI(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
l0:function(){var u,t,s,r,q,p,o,n,m,l=null,k=new M.cO()
k.a=!0
u=E.l4()
t=F.ln()
s=t.a
r=new V.C(-1,-1,1)
r=r.v(0,Math.sqrt(r.B(r)))
q=s.bg(new V.bd(1,2,4,6),V.f_(255,0,0),new V.X(-1,-1,0),new V.a0(0,1),r,l)
r=t.a
s=new V.C(1,-1,1)
s=s.v(0,Math.sqrt(s.B(s)))
p=r.bg(new V.bd(0,3,4,6),V.f_(0,0,255),new V.X(1,-1,0),new V.a0(1,1),s,l)
s=t.a
r=new V.C(1,1,1)
r=r.v(0,Math.sqrt(r.B(r)))
o=s.bg(new V.bd(0,2,5,6),V.f_(0,128,0),new V.X(1,1,0),new V.a0(1,0),r,l)
r=t.a
s=V.aN()
n=new V.C(-1,1,1)
n=n.v(0,Math.sqrt(n.B(n)))
m=r.bg(new V.bd(0,2,4,7),V.f_(255,255,0),new V.X(-1,1,0),s,n,l)
t.d.h8(H.c([q,p,o,m],[F.bj]))
t.az()
u.sbu(0,t)
k.e=u
k.sb0(l)
k.sb8(0,l)
k.saR(l)
return k},
cM:function cM(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
cO:function cO(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cT:function cT(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
al:function al(){}},A={
mP:function(a,b){var u=a.b4,t=new A.h_(b,u)
t.bx(b,u)
t.eg(a,b)
return t},
mQ:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="MaterialLight_"+a0.gar(a0)+a1.gar(a1)+a2.gar(a2)+a3.gar(a3)+a4.gar(a4)+a5.gar(a5)+a6.gar(a6)+a7.gar(a7)+a8.gar(a8)+"_"
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
g=$.ab()
if(k){u=$.aY()
g=new Z.aU(g.a|u.a)}if(j){u=$.aX()
g=new Z.aU(g.a|u.a)}if(i){u=$.aW()
g=new Z.aU(g.a|u.a)}return new A.h2(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,s,p,l,p,r,h,!0,!1,!1,o,r,m,k,j,!1,!1,i,!1,!1,c,!1,e,f.charCodeAt(0)==0?f:f,g)},
jS:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
jT:function(a,b,c){var u
A.jS(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.k8(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
nQ:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.jS(b,t,"emission")
t=b.a+="\n"
t+="vec3 emissionColor()\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   return emissionClr;\n"
b.a=t}t+="}\n"
b.a=t
b.a=t+"\n"},
nN:function(a,b){var u,t=a.b
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.jT(b,t,"ambient")
b.a+="\n"},
nO:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.jT(b,t,"diffuse")
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
nR:function(a,b){var u,t=a.d
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.jT(b,t,"invDiffuse")
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
nX:function(a,b){var u,t=a.e
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.jT(b,t,"specular")
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
nT:function(a,b){var u,t,s
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
nV:function(a,b){var u,t=a.r,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.jS(b,t,"reflect")
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
nW:function(a,b){var u,t=a.x,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.jS(b,t,"refract")
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
nP:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.e(u)
s=A.k8(t)
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
r=[P.k]
o=H.c([],r)
if(!a.b.a)n=!1
else n=!0
if(n)o.push("ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.c([],r)
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
nU:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.e(u)
s=A.k8(t)
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
k=H.c([],r)
if(!a.c.a)r=!1
else r=!0
if(r)k.push("diffuse(norm, normDir)")
if(!a.d.a)r=!1
else r=!0
if(r)k.push("invDiffuse(norm, normDir)")
if(!a.e.a)r=!1
else r=!0
if(r)k.push("specular(norm, normDir)")
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
nY:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.e(u)
s=A.k8(t)
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
i=H.c([],u)
if(!a.c.a)u=!1
else u=!0
if(u)i.push("diffuse(norm, litVec)")
if(!a.d.a)u=!1
else u=!0
if(u)i.push("invDiffuse(norm, litVec)")
if(!a.e.a)u=!1
else u=!0
if(u)i.push("specular(norm, litVec)")
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
nS:function(a,b){var u,t
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
u=b.a+="   return "+C.b.k(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
nZ:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.S("")
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
A.nQ(a,j)
A.nN(a,j)
A.nO(a,j)
A.nR(a,j)
A.nX(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.nV(a,j)
A.nW(a,j)}A.nT(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.q)(q),++o)A.nP(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.q)(q),++o)A.nU(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.q)(q),++o)A.nY(a,q[o],j)
A.nS(a,j)}q=j.a+="// === Main ===\n"
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
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.af(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.q)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.af(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.q)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.af(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)u=!1
else u=!0
if(u)n.push("emissionColor()")
if(!a.r.a)u=!1
else u=!0
if(u)n.push("reflect(refl)")
if(!a.x.a)u=!1
else u=!0
if(u)n.push("refract(refl)")
if(n.length<=0)n.push("vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.b.k(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
o_:function(a,b){var u,t,s
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
o1:function(a,b){var u
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
o0:function(a,b){var u
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
o3:function(a,b){var u,t
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
o4:function(a,b){var u,t
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
o2:function(a,b){var u
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
o5:function(a,b){var u
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
k8:function(a){if(0>=a.length)return H.b(a,0)
return a[0].toUpperCase()+C.a.af(a,1)},
kx:function(a,b,c,d,e){var u=new A.iv(a,c,e)
u.f=d
P.mN(d,0,P.u)
return u},
cI:function cI(a,b,c){this.a=a
this.b=b
this.c=c},
eN:function eN(a){this.a=a},
Z:function Z(a,b,c){this.a=a
this.b=b
this.c=c},
fd:function fd(a,b){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
h_:function h_(a,b){var _=this
_.io=_.im=_.dt=_.ds=_.b4=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iB=_.iA=_.iz=_.c6=_.c5=_.c4=_.c3=_.c2=_.c1=_.iy=_.ix=_.dC=_.iw=_.iv=_.dB=_.dA=_.iu=_.it=_.dz=_.dw=_.is=_.ir=_.dv=_.iq=_.ip=_.du=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cQ:function cQ(a,b){this.a=a
this.b=b},
dh:function dh(a,b){this.a=a
this.b=b},
dp:function dp(a,b){this.a=a
this.b=b},
h2:function h2(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.b4=b3
_.ds=b4},
cd:function cd(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
ce:function ce(a,b,c,d,e,f,g,h,i,j){var _=this
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
cf:function cf(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dl:function dl(){},
hU:function hU(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dB:function dB(){},
iA:function iA(a){this.a=a},
dC:function dC(a,b,c){this.a=a
this.c=b
this.d=c},
ix:function ix(a,b,c){this.a=a
this.c=b
this.d=c},
iy:function iy(a,b,c){this.a=a
this.c=b
this.d=c},
iz:function iz(a,b,c){this.a=a
this.c=b
this.d=c},
iv:function iv(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
T:function T(a,b,c){this.a=a
this.c=b
this.d=c},
iw:function iw(a,b,c){this.a=a
this.c=b
this.d=c},
I:function I(a,b,c){this.a=a
this.c=b
this.d=c},
cc:function cc(a,b,c){this.a=a
this.c=b
this.d=c},
iB:function iB(a,b,c){this.a=a
this.c=b
this.d=c},
bh:function bh(a,b,c){this.a=a
this.c=b
this.d=c},
a1:function a1(a,b,c){this.a=a
this.c=b
this.d=c},
aT:function aT(a,b,c){this.a=a
this.c=b
this.d=c},
bi:function bi(a,b,c){this.a=a
this.c=b
this.d=c}},F={
oI:function(){return F.ok(15,30,0.5,1,new F.k9())},
ok:function(a,b,c,d,e){var u=F.oG(a,b,new F.jW(e,d,b,c))
if(u==null)return
u.az()
u.hM(new F.iZ(),new F.hq())
return u},
oG:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.ln()
t=H.c([],[F.bj])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.iT(g,g,new V.aj(p,0,0,1),g,g,new V.a0(r,1),g,g,0)
q.n(0,o)
c.$3(o,r,0)
t.push(o.dm(g))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.iT(g,g,new V.aj(j,i,h,1),g,g,new V.a0(r,m),g,g,0)
k.n(0,o)
c.$3(o,r,n)
t.push(o.dm(g))}}u.d.h9(a+1,b+1,t)
return u},
cU:function(a,b,c){var u=new F.b1(),t=a.a
if(t==null)H.v(P.w("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.v(P.w("May not create a face with vertices attached to different shapes."))
u.fU(a)
u.fV(b)
u.fW(c)
u.a.a.d.b.push(u)
u.a.a.ai()
return u},
ln:function(){var u=new F.hL(),t=new F.iU(u)
t.b=!1
t.c=H.c([],[F.bj])
u.a=t
t=new F.hO()
t.b=H.c([],[F.dg])
u.b=t
t=new F.hN(u)
t.b=H.c([],[F.d3])
u.c=t
t=new F.hM(u)
t.b=H.c([],[F.b1])
u.d=t
u.e=null
return u},
iT:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.bj(),r=new F.j1()
r.b=H.c([],[F.dg])
s.b=r
r=new F.iY()
u=[F.d3]
r.b=H.c([],u)
r.c=H.c([],u)
s.c=r
r=new F.iV()
u=[F.b1]
r.b=H.c([],u)
r.c=H.c([],u)
r.d=H.c([],u)
s.d=r
h=$.mf()
s.e=0
r=$.ab()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aY().a)!==0?e:t
s.x=(u&$.aX().a)!==0?b:t
s.y=(u&$.aA().a)!==0?f:t
s.z=(u&$.bm().a)!==0?g:t
s.Q=(u&$.mg().a)!==0?c:t
s.ch=(u&$.bM().a)!==0?i:0
s.cx=(u&$.aW().a)!==0?a:t
return s},
k9:function k9(){},
jW:function jW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b1:function b1(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fp:function fp(){},
hT:function hT(){},
d3:function d3(){},
fM:function fM(){},
iu:function iu(){},
dg:function dg(){},
hL:function hL(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hM:function hM(a){this.a=a
this.b=null},
hN:function hN(a){this.a=a
this.b=null},
hO:function hO(){this.b=null},
bj:function bj(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
j3:function j3(a){this.a=a},
j2:function j2(a){this.a=a},
iU:function iU(a){this.a=a
this.c=this.b=null},
iV:function iV(){this.d=this.c=this.b=null},
iW:function iW(a,b){this.a=a
this.b=b},
iX:function iX(a,b){this.a=a
this.b=b},
iY:function iY(){this.c=this.b=null},
j_:function j_(){},
iZ:function iZ(){},
j0:function j0(){},
hq:function hq(){},
j1:function j1(){this.b=null}}
var w=[C,H,J,P,W,T,R,O,E,Z,D,X,V,U,M,A,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kp.prototype={}
J.a.prototype={
t:function(a,b){return a===b},
gG:function(a){return H.c5(a)},
h:function(a){return"Instance of '"+H.e(H.c6(a))+"'"}}
J.fH.prototype={
h:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$iaz:1}
J.d_.prototype={
t:function(a,b){return null==b},
h:function(a){return"null"},
gG:function(a){return 0}}
J.d0.prototype={
gG:function(a){return 0},
h:function(a){return String(a)}}
J.hv.prototype={}
J.bC.prototype={}
J.b6.prototype={
h:function(a){var u=a[$.m3()]
if(u==null)return this.ed(a)
return"JavaScript function for "+H.e(J.ah(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.b4.prototype={
dT:function(a,b){if(!!a.fixed$length)H.v(P.x("removeAt"))
if(b<0||b>=a.length)throw H.d(P.di(b,null))
return a.splice(b,1)[0]},
R:function(a,b){var u
if(!!a.fixed$length)H.v(P.x("remove"))
for(u=0;u<a.length;++u)if(J.D(a[u],b)){a.splice(u,1)
return!0}return!1},
ac:function(a,b){var u,t
if(!!a.fixed$length)H.v(P.x("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.q)(b),++t)a.push(b[t])},
A:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.d(P.ap(a))}},
k:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.b(r,u)
r[u]=t}return r.join(b)},
hI:function(a){return this.k(a,"")},
hB:function(a,b,c){var u,t,s=a.length
for(u=b,t=0;t<s;++t){u=c.$2(u,a[t])
if(a.length!==s)throw H.d(P.ap(a))}return u},
hC:function(a,b,c){return this.hB(a,b,c,null)},
hA:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.d(P.ap(a))}throw H.d(H.fF())},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
e9:function(a,b,c){if(b<0||b>a.length)throw H.d(P.Y(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.d(P.Y(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.cA(a,0)])
return H.c(a.slice(b,c),[H.cA(a,0)])},
ghz:function(a){if(a.length>0)return a[0]
throw H.d(H.fF())},
gau:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.d(H.fF())},
df:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.d(P.ap(a))}return!1},
bv:function(a,b){if(!!a.immutable$list)H.v(P.x("sort"))
H.dn(a,0,a.length-1,b)},
U:function(a,b){var u
for(u=0;u<a.length;++u)if(J.D(a[u],b))return!0
return!1},
h:function(a){return P.km(a,"[","]")},
gT:function(a){return new J.a3(a,a.length)},
gG:function(a){return H.c5(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.v(P.x("set length"))
if(b<0)throw H.d(P.Y(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){if(b>=a.length||b<0)throw H.d(H.bJ(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.v(P.x("indexed set"))
if(b>=a.length||b<0)throw H.d(H.bJ(a,b))
a[b]=c},
$ih:1,
$io:1}
J.ko.prototype={}
J.a3.prototype={
gH:function(a){return this.d},
w:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.d(H.q(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bW.prototype={
hj:function(a,b){var u
if(typeof b!=="number")throw H.d(H.an(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbk(b)
if(this.gbk(a)===u)return 0
if(this.gbk(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbk:function(a){return a===0?1/a<0:a<0},
ia:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.d(P.x(""+a+".toInt()"))},
c7:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.d(P.x(""+a+".floor()"))},
a0:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.x(""+a+".round()"))},
dZ:function(a,b){var u
if(b>20)throw H.d(P.Y(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbk(a))return"-"+u
return u},
b9:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.d(P.Y(b,2,36,"radix",null))
u=a.toString(b)
if(C.a.X(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.v(P.x("Unexpected toString result: "+u))
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
gG:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
ba:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
ef:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d7(a,b)},
ab:function(a,b){return(a|0)===a?a/b|0:this.d7(a,b)},
d7:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.d(P.x("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
aN:function(a,b){var u
if(a>0)u=this.d6(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
h_:function(a,b){if(b<0)throw H.d(H.an(b))
return this.d6(a,b)},
d6:function(a,b){return b>31?0:a>>>b},
$iM:1,
$iaa:1}
J.cZ.prototype={$iu:1}
J.cY.prototype={}
J.b5.prototype={
X:function(a,b){if(b<0)throw H.d(H.bJ(a,b))
if(b>=a.length)H.v(H.bJ(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(b>=a.length)throw H.d(H.bJ(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(typeof b!=="string")throw H.d(P.kV(b,null,null))
return a+b},
aQ:function(a,b,c,d){var u,t
c=P.be(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a9:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.Y(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a7:function(a,b){return this.a9(a,b,0)},
q:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.v(H.an(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.O()
if(b<0)throw H.d(P.di(b,null))
if(b>c)throw H.d(P.di(b,null))
if(c>a.length)throw H.d(P.di(c,null))
return a.substring(b,c)},
af:function(a,b){return this.q(a,b,null)},
ie:function(a){return a.toLowerCase()},
u:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.M)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
aC:function(a,b){var u=b-a.length
if(u<=0)return a
return this.u(" ",u)+a},
bj:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.Y(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
dJ:function(a,b){return this.bj(a,b,0)},
h:function(a){return a},
gG:function(a){var u,t,s
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
$ar:function(){return[P.u]},
$ah:function(){return[P.u]},
$ao:function(){return[P.u]}}
H.fj.prototype={}
H.d5.prototype={
gT:function(a){return new H.bX(this,this.gl(this))},
bs:function(a,b){return this.ec(0,b)}}
H.bX.prototype={
gH:function(a){return this.d},
w:function(){var u,t=this,s=t.a,r=J.cx(s),q=r.gl(s)
if(t.b!==q)throw H.d(P.ap(s))
u=t.c
if(u>=q){t.d=null
return!1}t.d=r.I(s,u);++t.c
return!0}}
H.fX.prototype={
gT:function(a){return new H.fY(J.aZ(this.a),this.b)},
gl:function(a){return J.ac(this.a)},
I:function(a,b){return this.b.$1(J.eI(this.a,b))},
$ah:function(a,b){return[b]}}
H.fY.prototype={
w:function(){var u=this,t=u.b
if(t.w()){u.a=u.c.$1(t.gH(t))
return!0}u.a=null
return!1},
gH:function(a){return this.a}}
H.fZ.prototype={
gl:function(a){return J.ac(this.a)},
I:function(a,b){return this.b.$1(J.eI(this.a,b))},
$ad5:function(a,b){return[b]},
$ah:function(a,b){return[b]}}
H.ci.prototype={
gT:function(a){return new H.j5(J.aZ(this.a),this.b)}}
H.j5.prototype={
w:function(){var u,t
for(u=this.a,t=this.b;u.w();)if(t.$1(u.gH(u)))return!0
return!1},
gH:function(a){var u=this.a
return u.gH(u)}}
H.cV.prototype={}
H.iF.prototype={
m:function(a,b,c){throw H.d(P.x("Cannot modify an unmodifiable list"))}}
H.dD.prototype={}
H.f2.prototype={
h:function(a){return P.kt(this)},
m:function(a,b,c){return H.mB()},
$iR:1}
H.f3.prototype={
gl:function(a){return this.a},
bh:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
i:function(a,b){if(!this.bh(0,b))return
return this.cS(b)},
cS:function(a){return this.b[a]},
A:function(a,b){var u,t,s,r=this.c
for(u=r.length,t=0;t<u;++t){s=r[t]
b.$2(s,this.cS(s))}}}
H.is.prototype={
am:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.hr.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fJ.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.iE.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.ka.prototype={
$1:function(a){if(!!J.N(a).$ibt)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:8}
H.eh.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bP.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
gig:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.i6.prototype={}
H.hZ.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.eH(u)+"'"}}
H.bN.prototype={
t:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bN))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gG:function(a){var u,t=this.c
if(t==null)u=H.c5(this.a)
else u=typeof t!=="object"?J.cG(t):H.c5(t)
return(u^H.c5(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.c6(u))+"'")}}
H.eX.prototype={
h:function(a){return this.a}}
H.hI.prototype={
h:function(a){return"RuntimeError: "+H.e(this.a)}}
H.O.prototype={
gl:function(a){return this.a},
ghH:function(a){return this.a===0},
ga8:function(a){return new H.fO(this,[H.cA(this,0)])},
bh:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cP(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cP(t,b)}else return s.hE(b)},
hE:function(a){var u=this,t=u.d
if(t==null)return!1
return u.cc(u.bF(t,u.cb(a)),a)>=0},
i:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.be(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.be(r,b)
s=t==null?null:t.b
return s}else return q.hF(b)},
hF:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bF(r,s.cb(a))
t=s.cc(u,a)
if(t<0)return
return u[t].b},
m:function(a,b,c){var u,t,s=this
if(typeof b==="string"){u=s.b
s.cK(u==null?s.b=s.bN():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cK(t==null?s.c=s.bN():t,b,c)}else s.hG(b,c)},
hG:function(a,b){var u,t,s,r=this,q=r.d
if(q==null)q=r.d=r.bN()
u=r.cb(a)
t=r.bF(q,u)
if(t==null)r.bQ(q,u,[r.bO(a,b)])
else{s=r.cc(t,a)
if(s>=0)t[s].b=b
else t.push(r.bO(a,b))}},
A:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.d(P.ap(u))
t=t.c}},
cK:function(a,b,c){var u=this.be(a,b)
if(u==null)this.bQ(a,b,this.bO(b,c))
else u.b=c},
eL:function(){this.r=this.r+1&67108863},
bO:function(a,b){var u,t=this,s=new H.fN(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.eL()
return s},
cb:function(a){return J.cG(a)&0x3ffffff},
cc:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.D(a[t].a,b))return t
return-1},
h:function(a){return P.kt(this)},
be:function(a,b){return a[b]},
bF:function(a,b){return a[b]},
bQ:function(a,b,c){a[b]=c},
eE:function(a,b){delete a[b]},
cP:function(a,b){return this.be(a,b)!=null},
bN:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bQ(t,u,t)
this.eE(t,u)
return t}}
H.fN.prototype={}
H.fO.prototype={
gl:function(a){return this.a.a},
gT:function(a){var u=this.a,t=new H.fP(u,u.r)
t.c=u.e
return t}}
H.fP.prototype={
gH:function(a){return this.d},
w:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.ap(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.k_.prototype={
$1:function(a){return this.a(a)},
$S:8}
H.k0.prototype={
$2:function(a,b){return this.a(a,b)}}
H.k1.prototype={
$1:function(a){return this.a(a)}}
H.fI.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$in3:1}
H.c1.prototype={$ic1:1}
H.ba.prototype={$iba:1}
H.d9.prototype={
gl:function(a){return a.length},
$iz:1,
$az:function(){}}
H.c2.prototype={
i:function(a,b){H.ay(b,a,a.length)
return a[b]},
m:function(a,b,c){H.ay(b,a,a.length)
a[b]=c},
$ar:function(){return[P.M]},
$ih:1,
$ah:function(){return[P.M]},
$io:1,
$ao:function(){return[P.M]}}
H.da.prototype={
m:function(a,b,c){H.ay(b,a,a.length)
a[b]=c},
$ar:function(){return[P.u]},
$ih:1,
$ah:function(){return[P.u]},
$io:1,
$ao:function(){return[P.u]}}
H.hj.prototype={
i:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.hk.prototype={
i:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.hl.prototype={
i:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.hm.prototype={
i:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.hn.prototype={
i:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.db.prototype={
gl:function(a){return a.length},
i:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.c3.prototype={
gl:function(a){return a.length},
i:function(a,b){H.ay(b,a,a.length)
return a[b]},
$ic3:1,
$ibB:1}
H.cm.prototype={}
H.cn.prototype={}
H.co.prototype={}
H.cp.prototype={}
P.j7.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:17}
P.j6.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.j8.prototype={
$0:function(){this.a.$0()}}
P.j9.prototype={
$0:function(){this.a.$0()}}
P.en.prototype={
eo:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bI(new P.jE(this,b),0),a)
else throw H.d(P.x("`setTimeout()` not found."))},
ep:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bI(new P.jD(this,a,Date.now(),b),0),a)
else throw H.d(P.x("Periodic timer."))},
$idw:1}
P.jE.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.jD.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.ef(u,q)}s.c=r
t.d.$1(s)}}
P.dK.prototype={}
P.ds.prototype={}
P.i1.prototype={}
P.dw.prototype={}
P.jN.prototype={}
P.jU.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.de():s
s=this.b
if(s==null)throw H.d(t)
u=H.d(t)
u.stack=s.h(0)
throw u}}
P.jn.prototype={
i7:function(a){var u,t,s,r=null
try{if(C.f===$.am){a.$0()
return}P.o7(r,r,this,a)}catch(s){u=H.ag(s)
t=H.kK(s)
P.lO(r,r,this,u,t)}},
i8:function(a,b){var u,t,s,r=null
try{if(C.f===$.am){a.$1(b)
return}P.o8(r,r,this,a,b)}catch(s){u=H.ag(s)
t=H.kK(s)
P.lO(r,r,this,u,t)}},
i9:function(a,b){return this.i8(a,b,null)},
hg:function(a){return new P.jo(this,a)},
dg:function(a,b){return new P.jp(this,a,b)}}
P.jo.prototype={
$0:function(){return this.a.i7(this.b)}}
P.jp.prototype={
$1:function(a){return this.a.i9(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jk.prototype={
gT:function(a){var u=new P.dZ(this,this.r)
u.c=this.e
return u},
gl:function(a){return this.a},
U:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.ez(b)
return t}},
ez:function(a){var u=this.d
if(u==null)return!1
return this.bD(this.cT(u,a),a)>=0},
n:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cL(u==null?s.b=P.kB():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cL(t==null?s.c=P.kB():t,b)}else return s.es(0,b)},
es:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.kB()
u=s.cN(b)
t=r[u]
if(t==null)r[u]=[s.bA(b)]
else{if(s.bD(t,b)>=0)return!1
t.push(s.bA(b))}return!0},
R:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fJ(this.c,b)
else return this.fI(0,b)},
fI:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cT(r,b)
t=s.bD(u,b)
if(t<0)return!1
s.d8(u.splice(t,1)[0])
return!0},
cL:function(a,b){if(a[b]!=null)return!1
a[b]=this.bA(b)
return!0},
fJ:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.d8(u)
delete a[b]
return!0},
cM:function(){this.r=1073741823&this.r+1},
bA:function(a){var u,t=this,s=new P.jl(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cM()
return s},
d8:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cM()},
cN:function(a){return J.cG(a)&1073741823},
cT:function(a,b){return a[this.cN(b)]},
bD:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.D(a[t].a,b))return t
return-1}}
P.jl.prototype={}
P.dZ.prototype={
gH:function(a){return this.d},
w:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.ap(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fQ.prototype={
$2:function(a,b){this.a.m(0,a,b)},
$S:3}
P.fR.prototype={$ih:1,$io:1}
P.r.prototype={
gT:function(a){return new H.bX(a,this.gl(a))},
I:function(a,b){return this.i(a,b)},
A:function(a,b){var u,t=this.gl(a)
for(u=0;u<t;++u){b.$1(this.i(a,u))
if(t!==this.gl(a))throw H.d(P.ap(a))}},
ic:function(a,b){var u,t,s=this,r=H.c([],[H.oq(s,a,"r",0)])
C.b.sl(r,s.gl(a))
for(u=0;u<s.gl(a);++u){t=s.i(a,u)
if(u>=r.length)return H.b(r,u)
r[u]=t}return r},
ib:function(a){return this.ic(a,!0)},
hx:function(a,b,c,d){var u
P.be(b,c,this.gl(a))
for(u=b;u<c;++u)this.m(a,u,d)},
h:function(a){return P.km(a,"[","]")}}
P.fU.prototype={}
P.fV.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:3}
P.aH.prototype={
A:function(a,b){var u,t
for(u=J.aZ(this.ga8(a));u.w();){t=u.gH(u)
b.$2(t,this.i(a,t))}},
gl:function(a){return J.ac(this.ga8(a))},
h:function(a){return P.kt(a)},
$iR:1}
P.jF.prototype={
m:function(a,b,c){throw H.d(P.x("Cannot modify unmodifiable map"))}}
P.fW.prototype={
i:function(a,b){return J.cF(this.a,b)},
m:function(a,b,c){J.kb(this.a,b,c)},
A:function(a,b){J.kS(this.a,b)},
gl:function(a){return J.ac(this.a)},
h:function(a){return J.ah(this.a)},
$iR:1}
P.dE.prototype={}
P.jr.prototype={
ac:function(a,b){var u
for(u=J.aZ(b);u.w();)this.n(0,u.gH(u))},
h:function(a){return P.km(this,"{","}")},
I:function(a,b){var u,t,s
P.lk(b,"index")
for(u=P.ns(this,this.r),t=0;u.w();){s=u.d
if(b===t)return s;++t}throw H.d(P.K(b,this,"index",null,t))},
$ih:1}
P.e_.prototype={}
P.et.prototype={}
P.eT.prototype={
hN:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.be(a0,a1,b.length)
u=$.mi()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.a.D(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.jZ(C.a.D(b,n))
j=H.jZ(C.a.D(b,n+1))
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
g=r.a+=C.a.q(b,s,t)
r.a=g+H.by(m)
s=n
continue}}throw H.d(P.Q("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.a.q(b,s,a1)
f=g.length
if(q>=0)P.kW(b,p,a1,q,o,f)
else{e=C.c.ba(f-1,4)+1
if(e===1)throw H.d(P.Q(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.a.aQ(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.kW(b,p,a1,q,o,d)
else{e=C.c.ba(d,4)
if(e===1)throw H.d(P.Q(c,b,a1))
if(e>1)b=C.a.aQ(b,a1,a1,e===2?"==":"=")}return b}}
P.eU.prototype={}
P.eZ.prototype={}
P.f4.prototype={}
P.fl.prototype={}
P.fC.prototype={
h:function(a){return this.a}}
P.fB.prototype={
eB:function(a,b,c){var u,t,s,r,q,p,o=null
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
if(r>b)q.a+=C.a.q(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.mt(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.iN.prototype={
ghw:function(){return C.N}}
P.iP.prototype={
bY:function(a){var u,t,s=P.be(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.jL(u)
if(t.eG(a,0,s)!==s)t.da(J.mp(a,s-1),0)
return new Uint8Array(u.subarray(0,H.nJ(0,t.b,u.length)))}}
P.jL.prototype={
da:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
eG:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.a.X(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.a.D(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.da(r,C.a.D(a,p)))s=p}else if(r<=2047){q=n.b
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
P.iO.prototype={
bY:function(a){var u,t,s,r,q,p,o,n,m=P.nf(!1,a,0,null)
if(m!=null)return m
u=P.be(0,null,J.ac(a))
t=P.lQ(a,0,u)
if(t>0){s=P.c9(a,0,t)
if(t===u)return s
r=new P.S(s)
q=t
p=!1}else{q=0
r=null
p=!0}if(r==null)r=new P.S("")
o=new P.jK(!1,r)
o.c=p
o.hk(a,q,u)
if(o.e>0){H.v(P.Q("Unfinished UTF-8 octet sequence",a,u))
r.a+=H.by(65533)
o.f=o.e=o.d=0}n=r.a
return n.charCodeAt(0)==0?n:n}}
P.jK.prototype={
hk:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=this,k="Bad UTF-8 encoding 0x",j=l.d,i=l.e,h=l.f
l.f=l.e=l.d=0
$label0$0:for(u=J.cx(a),t=l.b,s=b;!0;s=n){$label1$1:if(i>0){do{if(s===c)break $label0$0
r=u.i(a,s)
if(typeof r!=="number")return r.ao()
if((r&192)!==128){q=P.Q(k+C.c.b9(r,16),a,s)
throw H.d(q)}else{j=(j<<6|r&63)>>>0;--i;++s}}while(i>0)
q=h-1
if(q<0||q>=4)return H.b(C.w,q)
if(j<=C.w[q]){q=P.Q("Overlong encoding of 0x"+C.c.b9(j,16),a,s-h-1)
throw H.d(q)}if(j>1114111){q=P.Q("Character outside valid Unicode range: 0x"+C.c.b9(j,16),a,s-h-1)
throw H.d(q)}if(!l.c||j!==65279)t.a+=H.by(j)
l.c=!1}for(q=s<c;q;){p=P.lQ(a,s,c)
if(p>0){l.c=!1
o=s+p
t.a+=P.c9(a,s,o)
if(o===c)break}else o=s
n=o+1
r=u.i(a,o)
if(typeof r!=="number")return r.O()
if(r<0){m=P.Q("Negative UTF-8 code unit: -0x"+C.c.b9(-r,16),a,n-1)
throw H.d(m)}else{if((r&224)===192){j=r&31
i=1
h=1
continue $label0$0}if((r&240)===224){j=r&15
i=2
h=2
continue $label0$0}if((r&248)===240&&r<245){j=r&7
i=3
h=3
continue $label0$0}m=P.Q(k+C.c.b9(r,16),a,n-1)
throw H.d(m)}}break $label0$0}if(i>0){l.d=j
l.e=i
l.f=h}}}
P.az.prototype={}
P.a6.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.a6&&this.a===b.a&&!0},
gG:function(a){var u=this.a
return(u^C.c.aN(u,30))&1073741823},
h:function(a){var u=this,t=P.mC(H.n_(u)),s=P.cP(H.mY(u)),r=P.cP(H.mU(u)),q=P.cP(H.mV(u)),p=P.cP(H.mX(u)),o=P.cP(H.mZ(u)),n=P.mD(H.mW(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.M.prototype={}
P.b0.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.b0&&this.a===b.a},
gG:function(a){return C.c.gG(this.a)},
h:function(a){var u,t,s,r=new P.fi(),q=this.a
if(q<0)return"-"+new P.b0(0-q).h(0)
u=r.$1(C.c.ab(q,6e7)%60)
t=r.$1(C.c.ab(q,1e6)%60)
s=new P.fh().$1(q%1e6)
return""+C.c.ab(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
P.fh.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.fi.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bt.prototype={}
P.de.prototype={
h:function(a){return"Throw of null."}}
P.ai.prototype={
gbC:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbB:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbC()+o+u
if(!q.a)return t
s=q.gbB()
r=P.kk(q.b)
return t+s+": "+r}}
P.bz.prototype={
gbC:function(){return"RangeError"},
gbB:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.fE.prototype={
gbC:function(){return"RangeError"},
gbB:function(){var u,t=this.b
if(typeof t!=="number")return t.O()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gl:function(a){return this.f}}
P.iG.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.iC.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.c8.prototype={
h:function(a){return"Bad state: "+this.a}}
P.f1.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.kk(u)+"."}}
P.hu.prototype={
h:function(a){return"Out of Memory"},
$ibt:1}
P.dq.prototype={
h:function(a){return"Stack Overflow"},
$ibt:1}
P.f9.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dS.prototype={
h:function(a){return"Exception: "+this.a}}
P.fv.prototype={
h:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.a.q(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.a.D(f,q)
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
k=""}j=C.a.q(f,m,n)
return h+l+j+k+"\n"+C.a.u(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.e(g)+")"):h}}
P.fx.prototype={}
P.u.prototype={}
P.h.prototype={
bs:function(a,b){return new H.ci(this,b,[H.kJ(this,"h",0)])},
gl:function(a){var u,t=this.gT(this)
for(u=0;t.w();)++u
return u},
gaH:function(a){var u,t=this.gT(this)
if(!t.w())throw H.d(H.fF())
u=t.gH(t)
if(t.w())throw H.d(H.mH())
return u},
I:function(a,b){var u,t,s
P.lk(b,"index")
for(u=this.gT(this),t=0;u.w();){s=u.gH(u)
if(b===t)return s;++t}throw H.d(P.K(b,this,"index",null,t))},
h:function(a){return P.mG(this,"(",")")}}
P.fG.prototype={}
P.o.prototype={$ih:1}
P.R.prototype={}
P.bb.prototype={
gG:function(a){return P.a_.prototype.gG.call(this,this)},
h:function(a){return"null"}}
P.aa.prototype={}
P.a_.prototype={constructor:P.a_,$ia_:1,
t:function(a,b){return this===b},
gG:function(a){return H.c5(this)},
h:function(a){return"Instance of '"+H.e(H.c6(this))+"'"},
toString:function(){return this.h(this)}}
P.k.prototype={}
P.S.prototype={
gl:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
P.iL.prototype={
$2:function(a,b){var u,t,s,r=J.cy(b).dJ(b,"=")
if(r===-1){if(b!=="")J.kb(a,P.kF(b,0,b.length,this.a,!0),"")}else if(r!==0){u=C.a.q(b,0,r)
t=C.a.af(b,r+1)
s=this.a
J.kb(a,P.kF(u,0,u.length,s,!0),P.kF(t,0,t.length,s,!0))}return a}}
P.iI.prototype={
$2:function(a,b){throw H.d(P.Q("Illegal IPv4 address, "+a,this.a,b))}}
P.iJ.prototype={
$2:function(a,b){throw H.d(P.Q("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.iK.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.cB(C.a.q(this.b,a,b),null,16)
if(typeof u!=="number")return u.O()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u}}
P.bD.prototype={
ge1:function(){return this.b},
gc8:function(a){var u=this.c
if(u==null)return""
if(C.a.a7(u,"["))return C.a.q(u,1,u.length-1)
return u},
gbn:function(a){var u=this.d
if(u==null)return P.lH(this.a)
return u},
gcn:function(a){var u=this.f
return u==null?"":u},
gdE:function(){var u=this.r
return u==null?"":u},
dU:function(a,b){var u,t,s,r=this,q=r.a,p=q==="file",o=r.b,n=r.d,m=r.c
if(!(m!=null))m=o.length!==0||n!=null||p?"":null
u=r.e
if(!p)t=m!=null&&u.length!==0
else t=!0
if(t&&!C.a.a7(u,"/"))u="/"+u
s=P.kD(null,0,0,b)
return new P.bD(q,o,m,n,u,s,r.r)},
gco:function(){var u,t=this.Q
if(t==null){t=this.f
u=P.k
u=this.Q=new P.dE(P.lx(t==null?"":t),[u,u])
t=u}return t},
gdF:function(){return this.c!=null},
gdI:function(){return this.f!=null},
gdG:function(){return this.r!=null},
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
if(!!J.N(b).$iky)if(s.a==b.gbt())if(s.c!=null===b.gdF())if(s.b==b.ge1())if(s.gc8(s)==b.gc8(b))if(s.gbn(s)==b.gbn(b))if(s.e===b.gdR(b)){u=s.f
t=u==null
if(!t===b.gdI()){if(t)u=""
if(u===b.gcn(b)){u=s.r
t=u==null
if(!t===b.gdG()){if(t)u=""
u=u===b.gdE()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gG:function(a){var u=this.z
return u==null?this.z=C.a.gG(this.h(0)):u},
$iky:1,
gbt:function(){return this.a},
gdR:function(a){return this.e}}
P.jG.prototype={
$1:function(a){throw H.d(P.Q("Invalid port",this.a,this.b+1))}}
P.jH.prototype={
$1:function(a){return P.eu(C.X,a,C.e,!1)}}
P.jJ.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.e(P.eu(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.e(P.eu(C.h,b,C.e,!0))}}}
P.jI.prototype={
$2:function(a,b){var u,t
if(b==null||typeof b==="string")this.a.$2(a,b)
else for(u=J.aZ(b),t=this.a;u.w();)t.$2(a,u.gH(u))}}
P.iH.prototype={
ge0:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.b(o,0)
u=q.a
o=o[0]+1
t=C.a.bj(u,"?",o)
s=u.length
if(t>=0){r=P.cu(u,t+1,s,C.l,!1)
s=t}else r=p
return q.c=new P.jd("data",p,p,p,P.cu(u,o,s,C.A,!1),r,p)},
h:function(a){var u,t=this.b
if(0>=t.length)return H.b(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.jP.prototype={
$1:function(a){return new Uint8Array(96)}}
P.jO.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.b(u,a)
u=u[a]
J.mq(u,0,96,b)
return u},
$S:18}
P.jQ.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.a.D(b,s)^96
if(r>=t)return H.b(a,r)
a[r]=c}}}
P.jR.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.a.D(b,0),t=C.a.D(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.b(a,r)
a[r]=c}}}
P.ju.prototype={
gdF:function(){return this.c>0},
gdH:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.F()
t=this.e
if(typeof t!=="number")return H.t(t)
t=u+1<t
u=t}else u=!1
return u},
gdI:function(){var u=this.f
if(typeof u!=="number")return u.O()
return u<this.r},
gdG:function(){return this.r<this.a.length},
gcU:function(){return this.b===4&&C.a.a7(this.a,"http")},
gcV:function(){return this.b===5&&C.a.a7(this.a,"https")},
gbt:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gcU())q=t.x="http"
else if(t.gcV()){t.x="https"
q="https"}else if(q===4&&C.a.a7(t.a,s)){t.x=s
q=s}else if(q===7&&C.a.a7(t.a,r)){t.x=r
q=r}else{q=C.a.q(t.a,0,q)
t.x=q}return q},
ge1:function(){var u=this.c,t=this.b+3
return u>t?C.a.q(this.a,t,u-1):""},
gc8:function(a){var u=this.c
return u>0?C.a.q(this.a,u,this.d):""},
gbn:function(a){var u,t=this
if(t.gdH()){u=t.d
if(typeof u!=="number")return u.F()
return P.cB(C.a.q(t.a,u+1,t.e),null,null)}if(t.gcU())return 80
if(t.gcV())return 443
return 0},
gdR:function(a){return C.a.q(this.a,this.e,this.f)},
gcn:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.O()
return u<t?C.a.q(this.a,u+1,t):""},
gdE:function(){var u=this.r,t=this.a
return u<t.length?C.a.af(t,u+1):""},
gco:function(){var u=this,t=u.f
if(typeof t!=="number")return t.O()
if(t>=u.r)return C.Y
t=P.k
return new P.dE(P.lx(u.gcn(u)),[t,t])},
dU:function(a,b){var u,t,s,r,q,p=this,o=null,n=p.gbt(),m=n==="file",l=p.c,k=l>0?C.a.q(p.a,p.b+3,l):"",j=p.gdH()?p.gbn(p):o
l=p.c
if(l>0)u=C.a.q(p.a,l,p.d)
else u=k.length!==0||j!=null||m?"":o
l=p.a
t=C.a.q(l,p.e,p.f)
if(!m)s=u!=null&&t.length!==0
else s=!0
if(s&&!C.a.a7(t,"/"))t="/"+t
r=P.kD(o,0,0,b)
s=p.r
q=s<l.length?C.a.af(l,s+1):o
return new P.bD(n,k,u,j,t,r,q)},
gG:function(a){var u=this.y
return u==null?this.y=C.a.gG(this.a):u},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.N(b).$iky&&this.a===b.h(0)},
h:function(a){return this.a},
$iky:1}
P.jd.prototype={}
W.n.prototype={}
W.eK.prototype={
gl:function(a){return a.length}}
W.eL.prototype={
h:function(a){return String(a)}}
W.eM.prototype={
h:function(a){return String(a)}}
W.bo.prototype={$ibo:1}
W.bp.prototype={$ibp:1}
W.br.prototype={
cz:function(a,b,c){if(c!=null)return a.getContext(b,P.oh(c))
return a.getContext(b)},
e3:function(a,b){return this.cz(a,b,null)},
$ibr:1}
W.b_.prototype={
gl:function(a){return a.length}}
W.f5.prototype={
gl:function(a){return a.length}}
W.H.prototype={$iH:1}
W.bQ.prototype={
gl:function(a){return a.length}}
W.f6.prototype={}
W.ad.prototype={}
W.aq.prototype={}
W.f7.prototype={
gl:function(a){return a.length}}
W.f8.prototype={
gl:function(a){return a.length}}
W.fb.prototype={
gl:function(a){return a.length}}
W.ak.prototype={$iak:1}
W.fe.prototype={
h:function(a){return String(a)}}
W.cR.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iz:1,
$az:function(){return[[P.a9,P.aa]]},
$ar:function(){return[[P.a9,P.aa]]},
$ih:1,
$ah:function(){return[[P.a9,P.aa]]},
$io:1,
$ao:function(){return[[P.a9,P.aa]]}}
W.cS.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gan(a))+" x "+H.e(this.gal(a))},
t:function(a,b){var u
if(b==null)return!1
u=J.N(b)
if(!u.$ia9)return!1
return a.left===u.gbl(b)&&a.top===u.gbq(b)&&this.gan(a)===u.gan(b)&&this.gal(a)===u.gal(b)},
gG:function(a){return W.lF(C.d.gG(a.left),C.d.gG(a.top),C.d.gG(this.gan(a)),C.d.gG(this.gal(a)))},
gdh:function(a){return a.bottom},
gal:function(a){return a.height},
gbl:function(a){return a.left},
gcs:function(a){return a.right},
gbq:function(a){return a.top},
gan:function(a){return a.width},
$ia9:1,
$aa9:function(){return[P.aa]}}
W.ff.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iz:1,
$az:function(){return[P.k]},
$ar:function(){return[P.k]},
$ih:1,
$ah:function(){return[P.k]},
$io:1,
$ao:function(){return[P.k]}}
W.fg.prototype={
gl:function(a){return a.length}}
W.jb.prototype={
gl:function(a){return this.b.length},
i:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
m:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.b(u,b)
this.a.replaceChild(c,u[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gT:function(a){var u=this.ib(this)
return new J.a3(u,u.length)},
$ar:function(){return[W.P]},
$ah:function(){return[W.P]},
$ao:function(){return[W.P]}}
W.P.prototype={
ghf:function(a){return new W.je(a)},
gbX:function(a){return new W.jb(a,a.children)},
gdk:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.O()
if(s<0)s=-s*0
if(typeof r!=="number")return r.O()
if(r<0)r=-r*0
return new P.a9(u,t,s,r,[P.aa])},
h:function(a){return a.localName},
ak:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.l3
if(u==null){u=H.c([],[W.aL])
t=new W.dd(u)
u.push(W.lE(null))
u.push(W.lG())
$.l3=t
d=t}else d=u
u=$.l2
if(u==null){u=new W.ev(d)
$.l2=u
c=u}else{u.a=d
c=u}}if($.aD==null){u=document
t=u.implementation.createHTMLDocument("")
$.aD=t
$.kj=t.createRange()
s=$.aD.createElement("base")
s.href=u.baseURI
$.aD.head.appendChild(s)}u=$.aD
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.aD
if(!!this.$ibp)r=u.body
else{r=u.createElement(a.tagName)
$.aD.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.b.U(C.V,a.tagName)){$.kj.selectNodeContents(r)
q=$.kj.createContextualFragment(b)}else{r.innerHTML=b
q=$.aD.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.aD.body
if(r==null?u!=null:r!==u)J.kT(r)
c.cA(q)
document.adoptNode(q)
return q},
hm:function(a,b,c){return this.ak(a,b,c,null)},
e5:function(a,b){a.textContent=null
a.appendChild(this.ak(a,b,null,null))},
$iP:1,
gdW:function(a){return a.tagName}}
W.fk.prototype={
$1:function(a){return!!J.N(a).$iP}}
W.i.prototype={$ii:1}
W.f.prototype={
h7:function(a,b,c,d){if(c!=null)this.eu(a,b,c,!1)},
eu:function(a,b,c,d){return a.addEventListener(b,H.bI(c,1),!1)}}
W.ar.prototype={$iar:1}
W.bS.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.ar]},
$ar:function(){return[W.ar]},
$ih:1,
$ah:function(){return[W.ar]},
$io:1,
$ao:function(){return[W.ar]},
$ibS:1}
W.fq.prototype={
gl:function(a){return a.length}}
W.fu.prototype={
gl:function(a){return a.length}}
W.aF.prototype={$iaF:1}
W.fA.prototype={
gl:function(a){return a.length}}
W.bU.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.E]},
$ar:function(){return[W.E]},
$ih:1,
$ah:function(){return[W.E]},
$io:1,
$ao:function(){return[W.E]}}
W.aG.prototype={$iaG:1,
gdn:function(a){return a.data}}
W.bv.prototype={$ibv:1}
W.bw.prototype={$ibw:1}
W.fS.prototype={
h:function(a){return String(a)}}
W.hc.prototype={
gl:function(a){return a.length}}
W.c_.prototype={$ic_:1}
W.hd.prototype={
i:function(a,b){return P.aV(a.get(b))},
A:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aV(u.value[1]))}},
ga8:function(a){var u=H.c([],[P.k])
this.A(a,new W.he(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.d(P.x("Not supported"))},
$iR:1,
$aR:function(){return[P.k,null]}}
W.he.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hf.prototype={
i:function(a,b){return P.aV(a.get(b))},
A:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aV(u.value[1]))}},
ga8:function(a){var u=H.c([],[P.k])
this.A(a,new W.hg(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.d(P.x("Not supported"))},
$iR:1,
$aR:function(){return[P.k,null]}}
W.hg.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aJ.prototype={$iaJ:1}
W.hh.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.aJ]},
$ar:function(){return[W.aJ]},
$ih:1,
$ah:function(){return[W.aJ]},
$io:1,
$ao:function(){return[W.aJ]}}
W.au.prototype={$iau:1}
W.a2.prototype={
gaH:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.d(P.lo("No elements"))
if(t>1)throw H.d(P.lo("More than one element"))
return u.firstChild},
ac:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
m:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.b(t,b)
u.replaceChild(c,t[b])},
gT:function(a){var u=this.a.childNodes
return new W.cW(u,u.length)},
gl:function(a){return this.a.childNodes.length},
i:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
$ar:function(){return[W.E]},
$ah:function(){return[W.E]},
$ao:function(){return[W.E]}}
W.E.prototype={
i2:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
i5:function(a,b){var u,t
try{u=a.parentNode
J.mn(u,b,a)}catch(t){H.ag(t)}return a},
h:function(a){var u=a.nodeValue
return u==null?this.eb(a):u},
fN:function(a,b,c){return a.replaceChild(b,c)},
$iE:1}
W.dc.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.E]},
$ar:function(){return[W.E]},
$ih:1,
$ah:function(){return[W.E]},
$io:1,
$ao:function(){return[W.E]}}
W.aM.prototype={$iaM:1,
gl:function(a){return a.length}}
W.hx.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.aM]},
$ar:function(){return[W.aM]},
$ih:1,
$ah:function(){return[W.aM]},
$io:1,
$ao:function(){return[W.aM]}}
W.hG.prototype={
i:function(a,b){return P.aV(a.get(b))},
A:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aV(u.value[1]))}},
ga8:function(a){var u=H.c([],[P.k])
this.A(a,new W.hH(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.d(P.x("Not supported"))},
$iR:1,
$aR:function(){return[P.k,null]}}
W.hH.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hJ.prototype={
gl:function(a){return a.length}}
W.aO.prototype={$iaO:1}
W.hV.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.aO]},
$ar:function(){return[W.aO]},
$ih:1,
$ah:function(){return[W.aO]},
$io:1,
$ao:function(){return[W.aO]}}
W.aP.prototype={$iaP:1}
W.hW.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.aP]},
$ar:function(){return[W.aP]},
$ih:1,
$ah:function(){return[W.aP]},
$io:1,
$ao:function(){return[W.aP]}}
W.aQ.prototype={$iaQ:1,
gl:function(a){return a.length}}
W.i_.prototype={
i:function(a,b){return a.getItem(b)},
m:function(a,b,c){a.setItem(b,c)},
A:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga8:function(a){var u=H.c([],[P.k])
this.A(a,new W.i0(u))
return u},
gl:function(a){return a.length},
$iR:1,
$aR:function(){return[P.k,P.k]}}
W.i0.prototype={
$2:function(a,b){return this.a.push(a)}}
W.av.prototype={$iav:1}
W.dt.prototype={
ak:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bw(a,b,c,d)
u=W.mE("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.a2(t).ac(0,new W.a2(u))
return t}}
W.i3.prototype={
ak:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bw(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.ak(u.createElement("table"),b,c,d)
u.toString
u=new W.a2(u)
s=u.gaH(u)
s.toString
u=new W.a2(s)
r=u.gaH(u)
t.toString
r.toString
new W.a2(t).ac(0,new W.a2(r))
return t}}
W.i4.prototype={
ak:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bw(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.ak(u.createElement("table"),b,c,d)
u.toString
u=new W.a2(u)
s=u.gaH(u)
t.toString
s.toString
new W.a2(t).ac(0,new W.a2(s))
return t}}
W.ca.prototype={$ica:1}
W.aR.prototype={$iaR:1}
W.aw.prototype={$iaw:1}
W.i7.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.aw]},
$ar:function(){return[W.aw]},
$ih:1,
$ah:function(){return[W.aw]},
$io:1,
$ao:function(){return[W.aw]}}
W.i8.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.aR]},
$ar:function(){return[W.aR]},
$ih:1,
$ah:function(){return[W.aR]},
$io:1,
$ao:function(){return[W.aR]}}
W.ik.prototype={
gl:function(a){return a.length}}
W.aS.prototype={$iaS:1}
W.bA.prototype={$ibA:1}
W.ip.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.aS]},
$ar:function(){return[W.aS]},
$ih:1,
$ah:function(){return[W.aS]},
$io:1,
$ao:function(){return[W.aS]}}
W.iq.prototype={
gl:function(a){return a.length}}
W.bg.prototype={}
W.iM.prototype={
h:function(a){return String(a)}}
W.j4.prototype={
gl:function(a){return a.length}}
W.bk.prototype={
ghp:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.x("deltaY is not supported"))},
gho:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.x("deltaX is not supported"))},
$ibk:1}
W.cj.prototype={
fO:function(a,b){return a.requestAnimationFrame(H.bI(b,1))},
eF:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.jc.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.H]},
$ar:function(){return[W.H]},
$ih:1,
$ah:function(){return[W.H]},
$io:1,
$ao:function(){return[W.H]}}
W.dN.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
t:function(a,b){var u
if(b==null)return!1
u=J.N(b)
if(!u.$ia9)return!1
return a.left===u.gbl(b)&&a.top===u.gbq(b)&&a.width===u.gan(b)&&a.height===u.gal(b)},
gG:function(a){return W.lF(C.d.gG(a.left),C.d.gG(a.top),C.d.gG(a.width),C.d.gG(a.height))},
gal:function(a){return a.height},
gan:function(a){return a.width}}
W.jh.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.aF]},
$ar:function(){return[W.aF]},
$ih:1,
$ah:function(){return[W.aF]},
$io:1,
$ao:function(){return[W.aF]}}
W.e4.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.E]},
$ar:function(){return[W.E]},
$ih:1,
$ah:function(){return[W.E]},
$io:1,
$ao:function(){return[W.E]}}
W.jv.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.aQ]},
$ar:function(){return[W.aQ]},
$ih:1,
$ah:function(){return[W.aQ]},
$io:1,
$ao:function(){return[W.aQ]}}
W.jz.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.av]},
$ar:function(){return[W.av]},
$ih:1,
$ah:function(){return[W.av]},
$io:1,
$ao:function(){return[W.av]}}
W.ja.prototype={
A:function(a,b){var u,t,s,r,q
for(u=this.ga8(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.q)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga8:function(a){var u,t,s,r=this.a.attributes,q=H.c([],[P.k])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.b(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q},
$aR:function(){return[P.k,P.k]}}
W.je.prototype={
i:function(a,b){return this.a.getAttribute(b)},
m:function(a,b,c){this.a.setAttribute(b,c)},
gl:function(a){return this.ga8(this).length}}
W.jf.prototype={}
W.jg.prototype={
$1:function(a){return this.a.$1(a)}}
W.ck.prototype={
ek:function(a){var u
if($.cl.ghH($.cl)){for(u=0;u<262;++u)$.cl.m(0,C.U[u],W.os())
for(u=0;u<12;++u)$.cl.m(0,C.p[u],W.ot())}},
aO:function(a){return $.mj().U(0,W.bR(a))},
at:function(a,b,c){var u=$.cl.i(0,H.e(W.bR(a))+"::"+b)
if(u==null)u=$.cl.i(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$iaL:1}
W.J.prototype={
gT:function(a){return new W.cW(a,this.gl(a))}}
W.dd.prototype={
aO:function(a){return C.b.df(this.a,new W.hp(a))},
at:function(a,b,c){return C.b.df(this.a,new W.ho(a,b,c))},
$iaL:1}
W.hp.prototype={
$1:function(a){return a.aO(this.a)}}
W.ho.prototype={
$1:function(a){return a.at(this.a,this.b,this.c)}}
W.ec.prototype={
en:function(a,b,c,d){var u,t,s
this.a.ac(0,c)
u=b.bs(0,new W.js())
t=b.bs(0,new W.jt())
this.b.ac(0,u)
s=this.c
s.ac(0,C.x)
s.ac(0,t)},
aO:function(a){return this.a.U(0,W.bR(a))},
at:function(a,b,c){var u=this,t=W.bR(a),s=u.c
if(s.U(0,H.e(t)+"::"+b))return u.d.ha(c)
else if(s.U(0,"*::"+b))return u.d.ha(c)
else{s=u.b
if(s.U(0,H.e(t)+"::"+b))return!0
else if(s.U(0,"*::"+b))return!0
else if(s.U(0,H.e(t)+"::*"))return!0
else if(s.U(0,"*::*"))return!0}return!1},
$iaL:1}
W.js.prototype={
$1:function(a){return!C.b.U(C.p,a)}}
W.jt.prototype={
$1:function(a){return C.b.U(C.p,a)}}
W.jB.prototype={
at:function(a,b,c){if(this.ee(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.U(0,b)
return!1}}
W.jC.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)}}
W.jA.prototype={
aO:function(a){var u=J.N(a)
if(!!u.$ic7)return!1
u=!!u.$ij
if(u&&W.bR(a)==="foreignObject")return!1
if(u)return!0
return!1},
at:function(a,b,c){if(b==="is"||C.a.a7(b,"on"))return!1
return this.aO(a)},
$iaL:1}
W.cW.prototype={
w:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.cF(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gH:function(a){return this.d}}
W.aL.prototype={}
W.jq.prototype={}
W.ev.prototype={
cA:function(a){new W.jM(this).$2(a,null)},
aZ:function(a,b){if(b==null)J.kT(a)
else b.removeChild(a)},
fS:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.mr(a)
n=o.a.getAttribute("is")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=u?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ag(r)}t="element unprintable"
try{t=J.ah(a)}catch(r){H.ag(r)}try{s=W.bR(a)
this.fR(a,b,p,t,s,o,n)}catch(r){if(H.ag(r) instanceof P.ai)throw r
else{this.aZ(a,b)
window
q="Removing corrupted element "+H.e(t)
if(typeof console!="undefined")window.console.warn(q)}}},
fR:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=this
if(c){p.aZ(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!p.a.aO(a)){p.aZ(a,b)
window
u="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!p.a.at(a,"is",g)){p.aZ(a,b)
window
u="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga8(f)
t=H.c(u.slice(0),[H.cA(u,0)])
for(s=f.ga8(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.b(t,s)
r=t[s]
if(!p.a.at(a,J.mu(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.e(e)+" "+r+'="'+H.e(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.N(a).$ica)p.cA(a.content)}}
W.jM.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.fS(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aZ(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ag(s)
r=u
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=t}}}
W.dM.prototype={}
W.dO.prototype={}
W.dP.prototype={}
W.dQ.prototype={}
W.dR.prototype={}
W.dT.prototype={}
W.dU.prototype={}
W.dV.prototype={}
W.dW.prototype={}
W.e0.prototype={}
W.e1.prototype={}
W.e2.prototype={}
W.e3.prototype={}
W.e5.prototype={}
W.e6.prototype={}
W.e9.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.cq.prototype={}
W.cr.prototype={}
W.ed.prototype={}
W.ee.prototype={}
W.ei.prototype={}
W.el.prototype={}
W.em.prototype={}
W.cs.prototype={}
W.ct.prototype={}
W.eo.prototype={}
W.ep.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.ey.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eF.prototype={}
P.jw.prototype={
dD:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
t.push(a)
this.b.push(null)
return s},
cv:function(a){var u,t,s,r,q,p=this,o={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.N(a)
if(!!u.$ia6)return new Date(a.a)
if(!!u.$in3)throw H.d(P.iD("structured clone of RegExp"))
if(!!u.$iar)return a
if(!!u.$ibo)return a
if(!!u.$ibS)return a
if(!!u.$iaG)return a
if(!!u.$ic1||!!u.$iba||!!u.$ic_)return a
if(!!u.$iR){t=p.dD(a)
s=p.b
r=s.length
if(t>=r)return H.b(s,t)
q=o.a=s[t]
if(q!=null)return q
q={}
o.a=q
if(t>=r)return H.b(s,t)
s[t]=q
u.A(a,new P.jy(o,p))
return o.a}if(!!u.$io){t=p.dD(a)
o=p.b
if(t>=o.length)return H.b(o,t)
q=o[t]
if(q!=null)return q
return p.hl(a,t)}throw H.d(P.iD("structured clone of other type"))},
hl:function(a,b){var u,t=J.cx(a),s=t.gl(a),r=new Array(s),q=this.b
if(b>=q.length)return H.b(q,b)
q[b]=r
for(u=0;u<s;++u){q=this.cv(t.i(a,u))
if(u>=r.length)return H.b(r,u)
r[u]=q}return r}}
P.jy.prototype={
$2:function(a,b){this.a.a[a]=this.b.cv(b)},
$S:3}
P.es.prototype={$iaG:1,
gdn:function(a){return this.a}}
P.jV.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.jx.prototype={}
P.fr.prototype={
gaX:function(){var u=this.b,t=H.kJ(u,"r",0)
return new H.fX(new H.ci(u,new P.fs(),[t]),new P.ft(),[t,W.P])},
A:function(a,b){C.b.A(P.ks(this.gaX(),!1,W.P),b)},
m:function(a,b,c){var u=this.gaX()
J.ms(u.b.$1(J.eI(u.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.ac(this.gaX().a)},
i:function(a,b){var u=this.gaX()
return u.b.$1(J.eI(u.a,b))},
gT:function(a){var u=P.ks(this.gaX(),!1,W.P)
return new J.a3(u,u.length)},
$ar:function(){return[W.P]},
$ah:function(){return[W.P]},
$ao:function(){return[W.P]}}
P.fs.prototype={
$1:function(a){return!!J.N(a).$iP}}
P.ft.prototype={
$1:function(a){return H.l(a,"$iP")}}
P.jm.prototype={
gcs:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.F()
if(typeof t!=="number")return H.t(t)
return u+t},
gdh:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.F()
if(typeof t!=="number")return H.t(t)
return u+t},
h:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
t:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.N(b)
if(!!u.$ia9){t=q.a
if(t==u.gbl(b)){s=q.b
if(s==u.gbq(b)){r=q.c
if(typeof t!=="number")return t.F()
if(typeof r!=="number")return H.t(r)
if(t+r===u.gcs(b)){t=q.d
if(typeof s!=="number")return s.F()
if(typeof t!=="number")return H.t(t)
u=s+t===u.gdh(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gG:function(a){var u=this,t=u.a,s=J.cG(t),r=u.b,q=J.cG(r),p=u.c
if(typeof t!=="number")return t.F()
if(typeof p!=="number")return H.t(p)
p=C.c.gG(t+p)
t=u.d
if(typeof r!=="number")return r.F()
if(typeof t!=="number")return H.t(t)
t=C.c.gG(r+t)
return P.nr(P.jj(P.jj(P.jj(P.jj(0,s),q),p),t))}}
P.a9.prototype={
gbl:function(a){return this.a},
gbq:function(a){return this.b},
gan:function(a){return this.c},
gal:function(a){return this.d}}
P.b7.prototype={$ib7:1}
P.fL.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
I:function(a,b){return this.i(a,b)},
$ar:function(){return[P.b7]},
$ih:1,
$ah:function(){return[P.b7]},
$io:1,
$ao:function(){return[P.b7]}}
P.bc.prototype={$ibc:1}
P.hs.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
I:function(a,b){return this.i(a,b)},
$ar:function(){return[P.bc]},
$ih:1,
$ah:function(){return[P.bc]},
$io:1,
$ao:function(){return[P.bc]}}
P.hA.prototype={
gl:function(a){return a.length}}
P.c7.prototype={$ic7:1}
P.i2.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
I:function(a,b){return this.i(a,b)},
$ar:function(){return[P.k]},
$ih:1,
$ah:function(){return[P.k]},
$io:1,
$ao:function(){return[P.k]}}
P.j.prototype={
gbX:function(a){return new P.fr(a,new W.a2(a))},
ak:function(a,b,c,d){var u,t,s,r,q,p=H.c([],[W.aL])
p.push(W.lE(null))
p.push(W.lG())
p.push(new W.jA())
c=new W.ev(new W.dd(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.t).hm(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.a2(s)
q=p.gaH(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ij:1}
P.bf.prototype={$ibf:1}
P.ir.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
I:function(a,b){return this.i(a,b)},
$ar:function(){return[P.bf]},
$ih:1,
$ah:function(){return[P.bf]},
$io:1,
$ao:function(){return[P.bf]}}
P.dX.prototype={}
P.dY.prototype={}
P.e7.prototype={}
P.e8.prototype={}
P.ej.prototype={}
P.ek.prototype={}
P.eq.prototype={}
P.er.prototype={}
P.bB.prototype={$ih:1,
$ah:function(){return[P.u]},
$io:1,
$ao:function(){return[P.u]}}
P.eO.prototype={
gl:function(a){return a.length}}
P.eP.prototype={
i:function(a,b){return P.aV(a.get(b))},
A:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aV(u.value[1]))}},
ga8:function(a){var u=H.c([],[P.k])
this.A(a,new P.eQ(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.d(P.x("Not supported"))},
$iR:1,
$aR:function(){return[P.k,null]}}
P.eQ.prototype={
$2:function(a,b){return this.a.push(a)}}
P.eR.prototype={
gl:function(a){return a.length}}
P.bn.prototype={}
P.ht.prototype={
gl:function(a){return a.length}}
P.dL.prototype={}
P.dk.prototype={
dY:function(a,b,c,d,e,f,g,h,i,j){var u,t=i==null
if(!t&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}u=J.N(g)
if(!!u.$iaG&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,P.oi(g))
return}if(!!u.$ibv&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.d(P.cH("Incorrect number or type of arguments"))},
dX:function(a,b,c,d,e,f,g){return this.dY(a,b,c,d,e,f,g,null,null,null)}}
P.hY.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return P.aV(a.item(b))},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
I:function(a,b){return this.i(a,b)},
$ar:function(){return[[P.R,,,]]},
$ih:1,
$ah:function(){return[[P.R,,,]]},
$io:1,
$ao:function(){return[[P.R,,,]]}}
P.ef.prototype={}
P.eg.prototype={}
T.aB.prototype={
aB:function(a,b){return!0},
h:function(a){return"all"}}
T.cX.prototype={
aB:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)if(u[s].aB(0,b))return!0
return!1},
h:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.q)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.h(0)}return s}}
T.b8.prototype={}
T.a4.prototype={
aB:function(a,b){return!this.ea(0,b)},
h:function(a){return"!["+this.cD(0)+"]"}}
T.hB.prototype={
aB:function(a,b){return this.a<=b&&this.b>=b},
h:function(a){var u=H.by(this.a),t=H.by(this.b)
return u+".."+t}}
T.hK.prototype={
ei:function(a){var u,t
if(a.a.length<=0)throw H.d(P.w("May not create a Set with zero characters."))
u=new H.O([P.u,P.az])
for(t=new H.bX(a,a.gl(a));t.w();)u.m(0,t.d,!0)
this.a=u},
aB:function(a,b){return this.a.bh(0,b)},
h:function(a){var u=this.a
return P.c9(u.ga8(u),0,null)}}
R.dr.prototype={
k:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new R.dA(this.a.j(0,b))
r.a=H.c([],[T.b8])
r.c=!1
this.c.push(r)
return r},
hy:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
if(r.aB(0,a))return r}return},
h:function(a){return this.b}}
R.dx.prototype={
h:function(a){var u=H.kO(this.b,"\n","\\n"),t=H.kO(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
R.dy.prototype={
aE:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.q)(c),++t){s=c[t]
this.c.m(0,s,b)}},
h:function(a){return this.b}}
R.il.prototype={
j:function(a,b){var u=this.a.i(0,b)
if(u==null){u=new R.dr(this,b)
u.c=H.c([],[R.dA])
this.a.m(0,b,u)}return u},
N:function(a){var u,t=this.b.i(0,a)
if(t==null){t=new R.dy(a)
u=P.k
t.c=new H.O([u,u])
this.b.m(0,a,t)}return t},
e_:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.c([],[R.dx]),k=this.c,j=[P.u],i=H.c([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)l.push(t)
return l}r=C.a.D(a,s)
q=k.hy(r)
if(q==null){if(t==null){i.push(r)
p=P.c9(i,0,m)
throw H.d(P.w("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}l.push(t)
s=t.c+1
i=H.c([],j)
k=this.c
t=m}else{if(!q.c)i.push(r)
k=q.b
if(k.d!=null){p=P.c9(i,0,m)
o=k.d
n=o.c.i(0,p)
t=new R.dx(n==null?o.b:n,p,s)}++s}}}}
R.dA.prototype={
h:function(a){return this.b.b+": "+this.cD(0)}}
O.aC.prototype={
bc:function(a){this.a=H.c([],[a])
this.c=this.b=null},
cB:function(a,b,c){this.b=b
this.c=a},
aT:function(a,b){return this.cB(a,null,b)},
cY:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
cG:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gT:function(a){var u=this.a
return new J.a3(u,u.length)},
I:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
n:function(a,b){var u,t,s=this,r=[H.kJ(s,"aC",0)]
if(s.cY(H.c([b],r))){u=s.a
t=u.length
u.push(b)
s.cG(t,H.c([b],r))}},
ac:function(a,b){var u,t
if(this.cY(b)){u=this.a
t=u.length
C.b.ac(u,b)
this.cG(t,b)}},
$ih:1}
O.bZ.prototype={
gl:function(a){return this.a.length},
gp:function(){var u=this.b
return u==null?this.b=D.B():u},
aI:function(){var u=this.b
if(u!=null)u.C(null)},
ga5:function(a){var u=this.a
if(u.length>0)return C.b.gau(u)
else return V.b9()},
bp:function(a){var u=this.a
if(a==null)u.push(V.b9())
else u.push(a)
this.aI()},
aD:function(){var u=this.a
if(u.length>0){u.pop()
this.aI()}}}
E.eV.prototype={}
E.aE.prototype={
sbu:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gp().R(0,s.gdO())
u=s.c
if(u!=null)u.gp().n(0,s.gdO())
t=new D.y("shape",r,s.c)
t.b=!0
s.bm(t)}},
ae:function(a,b){var u
for(u=this.y.a,u=new J.a3(u,u.length);u.w();)u.d.ae(0,b)},
ad:function(a){var u,t=this,s=a.dx
s.a.push(s.ga5(s))
s.aI()
a.cm(t.f)
s=a.dy
u=(s&&C.b).gau(s)
if(u!=null&&t.d!=null)u.cr(a,t)
for(s=t.y.a,s=new J.a3(s,s.length);s.w();)s.d.ad(a)
a.cl()
a.dx.aD()},
bm:function(a){var u=this.z
if(u!=null)u.C(a)},
ai:function(){return this.bm(null)},
dP:function(a){this.e=null
this.bm(a)},
hT:function(){return this.dP(null)},
dN:function(a){this.bm(a)},
hQ:function(){return this.dN(null)},
hP:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gdM(),s=[{func:1,ret:-1,args:[D.W]}],r=0;r<b.length;b.length===u||(0,H.q)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bu()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}this.ai()},
hS:function(a,b){var u,t
for(u=b.gT(b),t=this.gdM();u.w();)u.gH(u).gp().R(0,t)
this.ai()},
h:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.hC.prototype={
eh:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.a6(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.bZ()
t=[V.aI]
u.a=H.c([],t)
u.gp().n(0,new E.hD(s))
s.cy=u
u=new O.bZ()
u.a=H.c([],t)
u.gp().n(0,new E.hE(s))
s.db=u
u=new O.bZ()
u.a=H.c([],t)
u.gp().n(0,new E.hF(s))
s.dx=u
u=H.c([],[O.du])
s.dy=u
u.push(null)
s.fr=new H.O([P.k,A.dl])},
gi1:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga5(s)
u=t.db
u=t.z=s.u(0,u.ga5(u))
s=u}return s},
gdS:function(){var u,t=this,s=t.ch
if(s==null){s=t.gi1()
u=t.dx
u=t.ch=s.u(0,u.ga5(u))
s=u}return s},
cm:function(a){var u=this.dy
u.push(a==null?(u&&C.b).gau(u):a)},
cl:function(){var u=this.dy
if(u.length>1)u.pop()},
bS:function(a){var u=a.b
if(u.length===0)throw H.d(P.w("May not cache a shader with no name."))
if(this.fr.bh(0,u))throw H.d(P.w('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.m(0,u,a)}}
E.hD.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.hE.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.hF.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.dv.prototype={
cJ:function(a){this.dV()},
cI:function(){return this.cJ(null)},
ghD:function(){var u,t=this,s=Date.now(),r=C.c.ab(P.l1(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.a6(s,!1)
return u/r},
d_:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.u()
if(typeof r!=="number")return H.t(r)
u=C.d.c7(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.u()
t=C.d.c7(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.lr(C.n,s.gi6())}},
dV:function(){if(!this.cx){this.cx=!0
var u=window
C.E.eF(u)
C.E.fO(u,W.lR(new E.ij(this),P.aa))}},
i4:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.d_()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.a6(r,!1)
s.y=P.l1(r-s.r.a).a*0.000001
r=s.cy
C.b.sl(r.a,0)
r.aI()
r=s.db
C.b.sl(r.a,0)
r.aI()
r=s.dx
C.b.sl(r.a,0)
r.aI()
r=s.dy;(r&&C.b).sl(r,0)
s.dy.push(null)
o.ad(p.e)}s=p.Q
if(s!=null)s.C(null)}catch(q){u=H.ag(q)
t=H.kK(q)
P.kN("Error: "+H.e(u))
P.kN("Stack: "+H.e(t))
throw H.d(u)}}}
E.ij.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.i4()}}}
Z.dJ.prototype={}
Z.cJ.prototype={
a_:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ag(s)
t=P.w('Failed to bind buffer attribute "'+r.a.h(0)+'": '+H.e(u))
throw H.d(t)}},
h:function(a){var u=this
return"["+u.a.h(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.ch.prototype={}
Z.bq.prototype={
aq:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
a_:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].a_(a)},
aj:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
ad:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.b(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
h:function(a){var u,t,s,r,q=[P.k],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)p.push(u[s].h(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.ah(q[s]))
return"Buffer:  ["+this.a.h(0)+"]\nIndices: "+C.b.k(p,", ")+"\nAttrs:   "+C.b.k(r,", ")}}
Z.bV.prototype={
h:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.c6(this.c))+"'")+"]"}}
Z.aU.prototype={
gcC:function(a){var u=this.a,t=(u&$.ab().a)!==0?3:0
if((u&$.aY().a)!==0)t+=3
if((u&$.aX().a)!==0)t+=3
if((u&$.aA().a)!==0)t+=2
if((u&$.bm().a)!==0)t+=3
if((u&$.cD().a)!==0)t+=3
if((u&$.cE().a)!==0)t+=4
if((u&$.bM().a)!==0)++t
return(u&$.aW().a)!==0?t+4:t},
hb:function(a){var u,t=$.ab(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aY()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aX()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aA()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bm()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cD()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cE()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bM()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aW()
if((s&t.a)!==0)if(u===a)return t
return $.mh()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aU))return!1
return this.a===b.a},
h:function(a){var u=H.c([],[P.k]),t=this.a
if((t&$.ab().a)!==0)u.push("Pos")
if((t&$.aY().a)!==0)u.push("Norm")
if((t&$.aX().a)!==0)u.push("Binm")
if((t&$.aA().a)!==0)u.push("Txt2D")
if((t&$.bm().a)!==0)u.push("TxtCube")
if((t&$.cD().a)!==0)u.push("Clr3")
if((t&$.cE().a)!==0)u.push("Clr4")
if((t&$.bM().a)!==0)u.push("Weight")
if((t&$.aW().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.b.k(u,"|")}}
D.eY.prototype={}
D.bu.prototype={
n:function(a,b){var u=this.a;(u==null?this.a=H.c([],[{func:1,ret:-1,args:[D.W]}]):u).push(b)},
R:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.b.U(s,b)
if(s===!0){s=t.a
u=(s&&C.b).R(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.b.U(s,b)
if(s===!0){s=t.b
u=(s&&C.b).R(s,b)||u}return u},
C:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.b.A(P.ks(u,!0,{func:1,ret:-1,args:[D.W]}),new D.fn(q))
u=r.b
if(u!=null){r.b=H.c([],[{func:1,ret:-1,args:[D.W]}])
C.b.A(u,new D.fo(q))}return!0},
c0:function(){return this.C(null)},
aF:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.C(u)}}}}
D.fn.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.fo.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.W.prototype={}
D.b2.prototype={}
D.b3.prototype={}
D.y.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cK.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cK))return!1
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
X.fK.prototype={
hY:function(a){this.c=a.b
this.d.n(0,a.a)
return!1},
hU:function(a){this.c=a.b
this.d.R(0,a.a)
return!1}}
X.d6.prototype={}
X.fT.prototype={
aW:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.u()
u=b.b
t=q.ch
if(typeof u!=="number")return u.u()
s=new V.a0(o.a+n*m,o.b+u*t)
t=q.a.gaP()
r=new X.aK(a,V.aN(),q.x,t,s)
r.b=!0
q.z=new P.a6(p,!1)
q.x=s
return r},
ck:function(a,b){this.r=a.a
return!1},
b7:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.e4()
if(typeof u!=="number")return u.ao()
this.r=(u&~t)>>>0
return!1},
b6:function(a,b){var u=this.d
if(u==null)return!1
u.C(this.aW(a,b))
return!0},
hZ:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaP()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.u()
q=a.b
p=o.cy
if(typeof q!=="number")return q.u()
t=new X.c0(new V.F(s*r,q*p),u,t)
t.b=!0
n.C(t)
return!0},
fe:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.d6(c,r.a.gaP(),b)
s.b=!0
t.C(s)
r.y=new P.a6(u,!1)
r.x=V.aN()}}
X.ae.prototype={
t:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.ae))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
h:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.aK.prototype={}
X.hi.prototype={
bE:function(a,b,c){var u=this,t=new P.a6(Date.now(),!1),s=u.a.gaP(),r=new X.aK(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
ck:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.C(this.bE(a,b,!0))
return!0},
b7:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.e4()
if(typeof t!=="number")return t.ao()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.C(u.bE(a,b,!0))
return!0},
b6:function(a,b){var u=this.d
if(u==null)return!1
u.C(this.bE(a,b,!1))
return!0},
i_:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaP()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.u()
r=a.b
q=p.ch
if(typeof r!=="number")return r.u()
u=new X.c0(new V.F(t*s,r*q),u,b)
u.b=!0
o.C(u)
return!0},
gdr:function(){var u=this.b
return u==null?this.b=D.B():u},
gcu:function(){var u=this.c
return u==null?this.c=D.B():u},
gdL:function(){var u=this.d
return u==null?this.d=D.B():u}}
X.c0.prototype={}
X.hz.prototype={}
X.dz.prototype={}
X.io.prototype={
aW:function(a,b){var u=this,t=new P.a6(Date.now(),!1),s=a.length>0?a[0]:V.aN(),r=u.a.gaP(),q=new X.dz(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
hX:function(a){var u=this.b
if(u==null)return!1
u.C(this.aW(a,!0))
return!0},
hV:function(a){var u=this.c
if(u==null)return!1
u.C(this.aW(a,!0))
return!0},
hW:function(a){var u=this.d
if(u==null)return!1
u.C(this.aW(a,!1))
return!0}}
X.dF.prototype={
gaP:function(){var u=this.a,t=C.i.gdk(u).c
t.toString
u=C.i.gdk(u).d
u.toString
return V.ll(0,0,t,u)},
cQ:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.d1(u,new X.ae(t,a.altKey,a.shiftKey))},
aM:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.ae(t,a.altKey,a.shiftKey)},
bR:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.ae(t,a.altKey,a.shiftKey)},
ay:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.J()
u=t.top
if(typeof r!=="number")return r.J()
return new V.a0(s-q,r-u)},
aY:function(a){return new V.F(a.movementX,a.movementY)},
bP:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.a0])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
q=C.d.a0(r.pageX)
C.d.a0(r.pageY)
p=o.left
C.d.a0(r.pageX)
n.push(new V.a0(q-p,C.d.a0(r.pageY)-o.top))}return n},
aw:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cK(u,new X.ae(t,a.altKey,a.shiftKey))},
bG:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.J()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.J()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
f8:function(a){this.f=!0},
eX:function(a){this.f=!1},
f2:function(a){if(this.f&&this.bG(a))a.preventDefault()},
fc:function(a){var u
if(!this.f)return
u=this.cQ(a)
this.b.hY(u)},
fa:function(a){var u
if(!this.f)return
u=this.cQ(a)
this.b.hU(u)},
fg:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aM(a)
if(r.x){u=r.aw(a)
t=r.aY(a)
if(r.d.ck(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.aw(a)
s=r.ay(a)
if(r.c.ck(u,s))a.preventDefault()},
fk:function(a){var u,t,s,r=this
r.aM(a)
u=r.aw(a)
if(r.x){t=r.aY(a)
if(r.d.b7(u,t))a.preventDefault()
return}if(r.r)return
s=r.ay(a)
if(r.c.b7(u,s))a.preventDefault()},
f6:function(a){var u,t,s,r=this
if(!r.bG(a)){r.aM(a)
u=r.aw(a)
if(r.x){t=r.aY(a)
if(r.d.b7(u,t))a.preventDefault()
return}if(r.r)return
s=r.ay(a)
if(r.c.b7(u,s))a.preventDefault()}},
fi:function(a){var u,t,s,r=this
r.aM(a)
u=r.aw(a)
if(r.x){t=r.aY(a)
if(r.d.b6(u,t))a.preventDefault()
return}if(r.r)return
s=r.ay(a)
if(r.c.b6(u,s))a.preventDefault()},
f4:function(a){var u,t,s,r=this
if(!r.bG(a)){r.aM(a)
u=r.aw(a)
if(r.x){t=r.aY(a)
if(r.d.b6(u,t))a.preventDefault()
return}if(r.r)return
s=r.ay(a)
if(r.c.b6(u,s))a.preventDefault()}},
fm:function(a){var u,t,s=this
s.aM(a)
u=new V.F((a&&C.D).gho(a),C.D.ghp(a)).v(0,180)
if(s.x){if(s.d.hZ(u))a.preventDefault()
return}if(s.r)return
t=s.ay(a)
if(s.c.i_(u,t))a.preventDefault()},
fo:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aw(s.y)
t=s.ay(s.y)
s.d.fe(u,t,r)}},
fH:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bR(a)
u=t.bP(a)
if(t.e.hX(u))a.preventDefault()},
fD:function(a){var u
this.bR(a)
u=this.bP(a)
if(this.e.hV(u))a.preventDefault()},
fF:function(a){var u
this.bR(a)
u=this.bP(a)
if(this.e.hW(u))a.preventDefault()}}
D.bs.prototype={
av:function(a){var u=this.r
if(u!=null)u.C(a)},
em:function(){return this.av(null)},
$ia7:1}
D.a7.prototype={}
D.d2.prototype={
av:function(a){var u=this.x
if(u!=null)u.C(a)},
cX:function(a){var u=this.y
if(u!=null)u.C(a)},
fd:function(){return this.cX(null)},
fq:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.q)(a),++t){s=a[t]
if(s==null||this.eA(s))return!1}return!0},
eR:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcW(),s=[{func:1,ret:-1,args:[D.W]}],r=0;r<b.length;b.length===u||(0,H.q)(b),++r){q=b[r]
if(q instanceof D.bs)this.e.push(q)
p=q.r
if(p==null){p=new D.bu()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}u=new D.b2()
u.b=!0
this.av(u)},
fv:function(a,b){var u,t,s
for(u=b.gT(b),t=this.gcW();u.w();){s=u.gH(u)
C.b.R(this.e,s)
s.gp().R(0,t)}u=new D.b3()
u.b=!0
this.av(u)},
eA:function(a){var u=C.b.U(this.e,a)
return u},
$ah:function(){return[D.a7]},
$aaC:function(){return[D.a7]}}
D.hy.prototype={$ia7:1}
D.hX.prototype={$ia7:1}
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
h:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"}}
V.aj.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aj))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.G(u.a,3,0)+", "+V.G(u.b,3,0)+", "+V.G(u.c,3,0)+", "+V.G(u.d,3,0)+"]"}}
V.fm.prototype={}
V.bY.prototype={
a3:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.M])
return t},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bY))return!1
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
h:function(a){var u,t,s,r,q=this,p=[P.M],o=V.bK(H.c([q.a,q.d,q.r],p),3,0),n=V.bK(H.c([q.b,q.e,q.x],p),3,0),m=V.bK(H.c([q.c,q.f,q.y],p),3,0)
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
V.aI.prototype={
a3:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.M])
return t},
cd:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.A().a)return V.b9()
u=1/b1
t=-n
s=-a0
return V.at((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
u:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.at(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
br:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.C(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
ct:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.X(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aI))return!1
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
h:function(a){return this.V()},
K:function(a){var u,t,s,r,q,p=this,o=[P.M],n=V.bK(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.bK(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.bK(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.bK(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
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
V:function(){return this.K("")}}
V.a0.prototype={
J:function(a,b){return new V.a0(this.a-b.a,this.b-b.b)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a0))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
h:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+"]"}}
V.X.prototype={
F:function(a,b){return new V.X(this.a+b.a,this.b+b.b,this.c+b.c)},
J:function(a,b){return new V.X(this.a-b.a,this.b-b.b,this.c-b.c)},
u:function(a,b){return new V.X(this.a*b,this.b*b,this.c*b)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.X))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"}}
V.bd.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bd))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.G(u.a,3,0)+", "+V.G(u.b,3,0)+", "+V.G(u.c,3,0)+", "+V.G(u.d,3,0)+"]"}}
V.dj.prototype={
gah:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dj))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.G(u.a,3,0)+", "+V.G(u.b,3,0)+", "+V.G(u.c,3,0)+", "+V.G(u.d,3,0)+"]"}}
V.F.prototype={
ce:function(a){return Math.sqrt(this.B(this))},
B:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.u()
if(typeof r!=="number")return H.t(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.t(t)
return s*r+u*t},
u:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.u()
u=this.b
if(typeof u!=="number")return u.u()
return new V.F(t*b,u*b)},
v:function(a,b){var u,t
if(Math.abs(b-0)<$.A().a){u=$.ly
return u==null?$.ly=new V.F(0,0):u}u=this.a
if(typeof u!=="number")return u.v()
t=this.b
if(typeof t!=="number")return t.v()
return new V.F(u/b,t/b)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.F))return!1
u=b.a
t=this.a
s=$.A()
s.toString
if(typeof u!=="number")return u.J()
if(typeof t!=="number")return H.t(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.J()
if(typeof t!=="number")return H.t(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+"]"}}
V.C.prototype={
ce:function(a){return Math.sqrt(this.B(this))},
B:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
aA:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.C(u*t-s*r,s*q-p*t,p*r-u*q)},
F:function(a,b){return new V.C(this.a+b.a,this.b+b.b,this.c+b.c)},
S:function(a){return new V.C(-this.a,-this.b,-this.c)},
u:function(a,b){return new V.C(this.a*b,this.b*b,this.c*b)},
v:function(a,b){if(Math.abs(b-0)<$.A().a)return V.cg()
return new V.C(this.a/b,this.b/b,this.c/b)},
dK:function(){var u=$.A().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.C))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"}}
U.f0.prototype={
bz:function(a){var u=V.oK(a,this.c,this.b)
return u},
gp:function(){var u=this.y
return u==null?this.y=D.B():u},
P:function(a){var u=this.y
if(u!=null)u.C(a)},
scw:function(a,b){},
scg:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.A().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bz(u)}s=new D.y("maximumLocation",s,t.b)
s.b=!0
t.P(s)}},
scj:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.A().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bz(u)}s=new D.y("minimumLocation",s,t.c)
s.b=!0
t.P(s)}},
sag:function(a,b){var u,t=this
b=t.bz(b)
u=t.d
if(!(Math.abs(u-b)<$.A().a)){t.d=b
u=new D.y("location",u,b)
u.b=!0
t.P(u)}},
sci:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.A().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.y("maximumVelocity",r,a)
r.b=!0
s.P(r)}},
sW:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.A().a)){u.f=a
t=new D.y("velocity",t,a)
t.b=!0
u.P(t)}},
sbZ:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.A().a)){this.x=a
u=new D.y("dampening",u,a)
u.b=!0
this.P(u)}},
ae:function(a,b){var u,t,s,r=this,q=r.f,p=$.A().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sag(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.A().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sW(u)}}}
U.cN.prototype={
gp:function(){var u=this.b
return u==null?this.b=D.B():u},
aS:function(a,b,c){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cN))return!1
return J.D(this.a,b.a)},
h:function(a){return"Constant: "+this.a.K("          ")}}
U.bT.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.B():u},
P:function(a){var u=this.e
if(u!=null)u.C(a)},
aa:function(){return this.P(null)},
eP:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaL(),s=[{func:1,ret:-1,args:[D.W]}],r=0;r<b.length;b.length===u||(0,H.q)(b),++r){q=b[r]
if(q!=null){p=q.gp()
o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.b2()
u.b=!0
this.P(u)},
ft:function(a,b){var u,t
for(u=b.gT(b),t=this.gaL();u.w();)u.gH(u).gp().R(0,t)
u=new D.b3()
u.b=!0
this.P(u)},
aS:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.O()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.a3(r,r.length),u=null;r.w();){q=r.d
if(q!=null){t=q.aS(0,b,c)
if(t!=null)u=u==null?t:t.u(0,u)}}s.f=u==null?V.b9():u
r=s.e
if(r!=null)r.aF(0)}return s.f},
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
if(!J.D(s,r[t]))return!1}return!0},
h:function(a){return"Group"},
$ah:function(){return[U.a8]},
$aaC:function(){return[U.a8]},
$ia8:1}
U.a8.prototype={}
U.dG.prototype={
gp:function(){var u=this.cy
return u==null?this.cy=D.B():u},
P:function(a){var u=this.cy
if(u!=null)u.C(a)},
aa:function(){return this.P(null)},
b_:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdr().n(0,u.gbH())
u.a.c.gdL().n(0,u.gbJ())
u.a.c.gcu().n(0,u.gbL())
return!0},
bI:function(a){var u=this
if(!J.D(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bK:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$iaK")
if(!n.y)return
if(n.x){u=a.d.J(0,a.y)
u=new V.F(u.a,u.b)
u=u.B(u)
t=n.r
if(typeof t!=="number")return H.t(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.J(0,a.y)
u=new V.F(t.a,t.b).u(0,2).v(0,u.gah())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.u()
s=n.e
if(typeof s!=="number")return H.t(s)
t.sW(u*10*s)}else{u=a.c
t=a.d
s=t.J(0,a.y)
r=new V.F(s.a,s.b).u(0,2).v(0,u.gah())
s=n.b
q=r.a
if(typeof q!=="number")return q.S()
p=n.e
if(typeof p!=="number")return H.t(p)
o=n.z
if(typeof o!=="number")return H.t(o)
s.sag(0,-q*p+o)
n.b.sW(0)
t=t.J(0,a.z)
n.Q=new V.F(t.a,t.b).u(0,2).v(0,u.gah())}n.aa()},
bM:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.B(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.u()
s=r.e
if(typeof s!=="number")return H.t(s)
u.sW(t*10*s)
r.aa()}},
aS:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.O()
if(q<p){r.ch=p
u=b.y
r.b.ae(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.at(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$ia8:1}
U.dH.prototype={
gp:function(){var u=this.fx
return u==null?this.fx=D.B():u},
P:function(a){var u=this.fx
if(u!=null)u.C(a)},
aa:function(){return this.P(null)},
b_:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdr().n(0,s.gbH())
s.a.c.gdL().n(0,s.gbJ())
s.a.c.gcu().n(0,s.gbL())
u=s.a.d
t=u.f
u=t==null?u.f=D.B():t
u.n(0,s.geH())
u=s.a.d
t=u.d
u=t==null?u.d=D.B():t
u.n(0,s.geJ())
u=s.a.e
t=u.b
u=t==null?u.b=D.B():t
u.n(0,s.gh4())
u=s.a.e
t=u.d
u=t==null?u.d=D.B():t
u.n(0,s.gh2())
u=s.a.e
t=u.c
u=t==null?u.c=D.B():t
u.n(0,s.gh0())
return!0},
as:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.S()
u=-u}if(this.r){if(typeof t!=="number")return t.S()
t=-t}return new V.F(u,t)},
bI:function(a){var u=this
H.l(a,"$iaK")
if(!J.D(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bK:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$iaK")
if(!n.cx)return
if(n.ch){u=a.d.J(0,a.y)
u=new V.F(u.a,u.b)
u=u.B(u)
t=n.Q
if(typeof t!=="number")return H.t(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.J(0,a.y)
u=n.as(new V.F(t.a,t.b).u(0,2).v(0,u.gah()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.S()
s=n.y
if(typeof s!=="number")return H.t(s)
t.sW(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.S()
t=n.x
if(typeof t!=="number")return H.t(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.J(0,a.y)
r=n.as(new V.F(s.a,s.b).u(0,2).v(0,u.gah()))
s=n.c
q=r.a
if(typeof q!=="number")return q.S()
p=n.y
if(typeof p!=="number")return H.t(p)
o=n.cy
if(typeof o!=="number")return H.t(o)
s.sag(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.S()
q=n.x
if(typeof q!=="number")return H.t(q)
s=n.db
if(typeof s!=="number")return H.t(s)
o.sag(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.J(0,a.z)
n.dx=n.as(new V.F(t.a,t.b).u(0,2).v(0,u.gah()))}n.aa()},
bM:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.B(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.S()
s=r.y
if(typeof s!=="number")return H.t(s)
u.sW(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.S()
u=r.x
if(typeof u!=="number")return H.t(u)
s.sW(-t*10*u)
r.aa()}},
eI:function(a){var u=this
if(H.l(a,"$id6").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
eK:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$iaK")
if(!J.D(n.d,a.x.b))return
u=a.c
t=a.d
s=t.J(0,a.y)
r=n.as(new V.F(s.a,s.b).u(0,2).v(0,u.gah()))
s=n.c
q=r.a
if(typeof q!=="number")return q.S()
p=n.y
if(typeof p!=="number")return H.t(p)
o=n.cy
if(typeof o!=="number")return H.t(o)
s.sag(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.S()
q=n.x
if(typeof q!=="number")return H.t(q)
s=n.db
if(typeof s!=="number")return H.t(s)
o.sag(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.J(0,a.z)
n.dx=n.as(new V.F(t.a,t.b).u(0,2).v(0,u.gah()))
n.aa()},
h5:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
h3:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$idz")
if(!n.cx)return
if(n.ch){u=a.d.J(0,a.y)
u=new V.F(u.a,u.b)
u=u.B(u)
t=n.Q
if(typeof t!=="number")return H.t(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.J(0,a.y)
u=n.as(new V.F(t.a,t.b).u(0,2).v(0,u.gah()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.S()
s=n.y
if(typeof s!=="number")return H.t(s)
t.sW(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.S()
t=n.x
if(typeof t!=="number")return H.t(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.J(0,a.y)
r=n.as(new V.F(s.a,s.b).u(0,2).v(0,u.gah()))
s=n.c
q=r.a
if(typeof q!=="number")return q.S()
p=n.y
if(typeof p!=="number")return H.t(p)
o=n.cy
if(typeof o!=="number")return H.t(o)
s.sag(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.S()
q=n.x
if(typeof q!=="number")return H.t(q)
s=n.db
if(typeof s!=="number")return H.t(s)
o.sag(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.J(0,a.z)
n.dx=n.as(new V.F(t.a,t.b).u(0,2).v(0,u.gah()))}n.aa()},
h1:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.B(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.S()
s=r.y
if(typeof s!=="number")return H.t(s)
u.sW(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.S()
u=r.x
if(typeof u!=="number")return H.t(u)
s.sW(-t*10*u)
r.aa()}},
aS:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.O()
if(q<p){r.dy=p
u=b.y
r.c.ae(0,u)
r.b.ae(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.at(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.u(0,V.at(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$ia8:1}
U.dI.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.B():u},
P:function(a){var u=this.r
if(u!=null)u.C(a)},
b_:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.B():t
t=r.geM()
u.n(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.B():s).n(0,t)
return!0},
eN:function(a){var u,t,s,r,q=this
if(!J.D(q.b,q.a.b.c))return
H.l(a,"$ic0")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.u()
r=u+t*s
if(u!==r){q.d=r
u=new D.y("zoom",u,r)
u.b=!0
q.P(u)}},
aS:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.lb(u,u,u)}return t.f},
$ia8:1}
M.cM.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.B():u},
Z:function(a){var u=this.r
if(u!=null)u.C(a)},
aV:function(){return this.Z(null)},
fz:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gY(),s=[{func:1,ret:-1,args:[D.W]}],r=0;r<b.length;b.length===u||(0,H.q)(b),++r){q=b[r]
if(q!=null){p=q.gp()
o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.b2()
u.b=!0
this.Z(u)},
fB:function(a,b){var u,t
for(u=b.gT(b),t=this.gY();u.w();)u.gH(u).gp().R(0,t)
u=new D.b3()
u.b=!0
this.Z(u)},
ad:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.a3(u,u.length);u.w();){t=u.d
if(t!=null)t.ad(a)}s.f=!1},
$ah:function(){return[M.al]},
$aaC:function(){return[M.al]},
$ial:1}
M.cO.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.B():u},
Z:function(a){var u=this.r
if(u!=null)u.C(a)},
aV:function(){return this.Z(null)},
sb0:function(a){var u,t,s=this
if(a==null)a=new X.fD()
u=s.b
if(u!==a){if(u!=null)u.gp().R(0,s.gY())
t=s.b
s.b=a
a.gp().n(0,s.gY())
u=new D.y("camera",t,s.b)
u.b=!0
s.Z(u)}},
sb8:function(a,b){var u,t,s=this
if(b==null)b=X.l5(null)
u=s.c
if(u!==b){if(u!=null)u.gp().R(0,s.gY())
t=s.c
s.c=b
b.gp().n(0,s.gY())
u=new D.y("target",t,s.c)
u.b=!0
s.Z(u)}},
saR:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gp().R(0,t.gY())
u=t.d
t.d=a
if(a!=null)a.gp().n(0,t.gY())
s=new D.y("technique",u,t.d)
s.b=!0
t.Z(s)}},
ad:function(a){var u,t=this
a.cm(t.d)
t.c.a_(a)
t.b.a_(a)
u=t.d
if(u!=null)u.ae(0,a)
t.e.ae(0,a)
t.e.ad(a)
t.b.aj(a)
t.c.aj(a)
a.cl()},
$ial:1}
M.cT.prototype={
Z:function(a){var u=this.y
if(u!=null)u.C(a)},
aV:function(){return this.Z(null)},
eZ:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gY(),s=[{func:1,ret:-1,args:[D.W]}],r=0;r<b.length;b.length===u||(0,H.q)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bu()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.b2()
u.b=!0
this.Z(u)},
f0:function(a,b){var u,t
for(u=b.gT(b),t=this.gY();u.w();)u.gH(u).gp().R(0,t)
u=new D.b3()
u.b=!0
this.Z(u)},
sb0:function(a){var u,t,s=this
if(a==null)a=X.le(null)
u=s.b
if(u!==a){if(u!=null)u.gp().R(0,s.gY())
t=s.b
s.b=a
a.gp().n(0,s.gY())
u=new D.y("camera",t,s.b)
u.b=!0
s.Z(u)}},
sb8:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gp().R(0,t.gY())
u=t.c
t.c=b
b.gp().n(0,t.gY())
s=new D.y("target",u,t.c)
s.b=!0
t.Z(s)}},
saR:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gp().R(0,t.gY())
u=t.d
t.d=a
if(a!=null)a.gp().n(0,t.gY())
s=new D.y("technique",u,t.d)
s.b=!0
t.Z(s)}},
gp:function(){var u=this.y
return u==null?this.y=D.B():u},
ad:function(a){var u,t=this
a.cm(t.d)
t.c.a_(a)
t.b.a_(a)
u=t.d
if(u!=null)u.ae(0,a)
for(u=t.e.a,u=new J.a3(u,u.length);u.w();)u.d.ae(0,a)
for(u=t.e.a,u=new J.a3(u,u.length);u.w();)u.d.ad(a)
t.b.toString
a.cy.aD()
a.db.aD()
t.c.aj(a)
a.cl()},
$ial:1}
M.al.prototype={}
A.cI.prototype={}
A.eN.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hu:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
c_:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.Z.prototype={
gar:function(a){var u=this.a?1:0
return u|0|0},
h:function(a){var u=this.a?1:0
return""+(u|0|0)},
t:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.Z))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.fd.prototype={
d5:function(a,b){if(b!=null&&b.d)a.e6(b)}}
A.h_.prototype={
eg:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
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
A.o_(c0,u)
A.o1(c0,u)
A.o0(c0,u)
A.o3(c0,u)
A.o4(c0,u)
A.o2(c0,u)
A.o5(c0,u)
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
b5.ca(0,s.charCodeAt(0)==0?s:s,A.nZ(b5.z))
b5.Q=b5.x.i(0,"posAttr")
b5.cx=b5.x.i(0,"normAttr")
b5.ch=b5.x.i(0,"binmAttr")
b5.cy=b5.x.i(0,"txt2DAttr")
b5.db=b5.x.i(0,"txtCubeAttr")
b5.dx=b5.x.i(0,"bendAttr")
if(c0.dx)b5.id=H.l(b5.y.M(0,"invViewMat"),"$ia1")
if(t)b5.dy=H.l(b5.y.M(0,"objMat"),"$ia1")
if(r)b5.fr=H.l(b5.y.M(0,"viewObjMat"),"$ia1")
b5.fy=H.l(b5.y.M(0,"projViewObjMat"),"$ia1")
if(c0.ry)b5.k1=H.l(b5.y.M(0,"txt2DMat"),"$ibh")
if(c0.x1)b5.k2=H.l(b5.y.M(0,"txtCubeMat"),"$ia1")
if(c0.x2)b5.k3=H.l(b5.y.M(0,"colorMat"),"$ia1")
b5.r1=H.c([],[A.a1])
t=c0.y2
if(t>0){b5.k4=b5.y.M(0,"bendMatCount")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.i(0,q)
if(m==null)H.v(P.w(b7+q+b8))
s.push(H.l(m,"$ia1"))}}if(c0.a.a)b5.r2=H.l(b5.y.M(0,"emissionClr"),"$iI")
if(c0.b.a)b5.x1=H.l(b5.y.M(0,"ambientClr"),"$iI")
if(c0.c.a)b5.y2=H.l(b5.y.M(0,"diffuseClr"),"$iI")
if(c0.d.a)b5.dt=H.l(b5.y.M(0,"invDiffuseClr"),"$iI")
t=c0.e.a
if(!t)s=!1
else s=!0
if(s){b5.dv=H.l(b5.y.M(0,"shininess"),"$iT")
if(t)b5.du=H.l(b5.y.M(0,"specularClr"),"$iI")}if(c0.cy){b5.dw=H.l(b5.y.M(0,"envSampler"),"$ibi")
if(c0.r.a)b5.dz=H.l(b5.y.M(0,"reflectClr"),"$iI")
t=c0.x.a
if(!t)s=!1
else s=!0
if(s){b5.dA=H.l(b5.y.M(0,"refraction"),"$iT")
if(t)b5.dB=H.l(b5.y.M(0,"refractClr"),"$iI")}}if(c0.y.a)b5.dC=H.l(b5.y.M(0,"alpha"),"$iT")
t=P.u
s=[t,A.dC]
b5.c1=new H.O(s)
b5.c2=new H.O([t,[P.o,A.cd]])
b5.c3=new H.O(s)
b5.c4=new H.O([t,[P.o,A.ce]])
b5.c5=new H.O(s)
b5.c6=new H.O([t,[P.o,A.cf]])
if(c0.id){for(t=c0.z,s=t.length,r=[A.cd],l=0;l<t.length;t.length===s||(0,H.q)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.e(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.ao()
p=(j&1)!==0
if(p){o=b5.y
g=i+"s["+n+"].objUp"
m=o.i(0,g)
if(m==null)H.v(P.w(b7+g+b8))
H.l(m,"$iI")
o=b5.y
g=i+"s["+n+"].objRight"
f=o.i(0,g)
if(f==null)H.v(P.w(b7+g+b8))
H.l(f,"$iI")
o=b5.y
g=i+"s["+n+"].objDir"
e=o.i(0,g)
if(e==null)H.v(P.w(b7+g+b8))
H.l(e,"$iI")
d=e
c=f
b=m}else{d=b6
c=d
b=c}o=b5.y
g=i+"s["+n+"].viewDir"
m=o.i(0,g)
if(m==null)H.v(P.w(b7+g+b8))
H.l(m,"$iI")
o=b5.y
g=i+"s["+n+"].color"
f=o.i(0,g)
if(f==null)H.v(P.w(b7+g+b8))
H.l(f,"$iI")
if(p){p=b5.y
o=i+"sTexture2D"+n
e=p.i(0,o)
if(e==null)H.v(P.w(b7+o+b8))
H.l(e,"$iaT")
a=e}else a=b6
h.push(new A.cd(b,c,d,m,f,a))}b5.c2.m(0,j,h)
q=b5.c1
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.v(P.w(b7+o+b8))
q.m(0,j,m)}for(t=c0.Q,s=t.length,r=[A.ce],l=0;l<t.length;t.length===s||(0,H.q)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.e(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.i(0,o)
if(m==null)H.v(P.w(b7+o+b8))
H.l(m,"$iI")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.i(0,o)
if(f==null)H.v(P.w(b7+o+b8))
H.l(f,"$iI")
p=b5.y
o=i+"s["+n+"].color"
e=p.i(0,o)
if(e==null)H.v(P.w(b7+o+b8))
H.l(e,"$iI")
if(typeof j!=="number")return j.ao()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
a0=p.i(0,o)
if(a0==null)H.v(P.w(b7+o+b8))
H.l(a0,"$ibh")
a1=a0}else a1=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
a0=p.i(0,o)
if(a0==null)H.v(P.w(b7+o+b8))
H.l(a0,"$ibi")
a=a0}else a=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
a0=p.i(0,o)
if(a0==null)H.v(P.w(b7+o+b8))
H.l(a0,"$ibi")
p=b5.y
o=i+"s["+n+"].shadowAdj"
a2=p.i(0,o)
if(a2==null)H.v(P.w(b7+o+b8))
H.l(a2,"$icc")
a3=a0
a4=a2}else{a3=b6
a4=a3}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
a0=p.i(0,o)
if(a0==null)H.v(P.w(b7+o+b8))
H.l(a0,"$iT")
p=b5.y
o=i+"s["+n+"].att1"
a2=p.i(0,o)
if(a2==null)H.v(P.w(b7+o+b8))
H.l(a2,"$iT")
p=b5.y
o=i+"s["+n+"].att2"
a5=p.i(0,o)
if(a5==null)H.v(P.w(b7+o+b8))
H.l(a5,"$iT")
a6=a5
a7=a2
a8=a0}else{a6=b6
a7=a6
a8=a7}h.push(new A.ce(m,f,a1,e,a,a3,a4,a8,a7,a6))}b5.c4.m(0,j,h)
q=b5.c3
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.v(P.w(b7+o+b8))
q.m(0,j,m)}for(t=c0.ch,s=t.length,r=[A.cf],l=0;l<t.length;t.length===s||(0,H.q)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.e(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.i(0,o)
if(m==null)H.v(P.w(b7+o+b8))
H.l(m,"$iI")
p=b5.y
o=i+"s["+n+"].objDir"
f=p.i(0,o)
if(f==null)H.v(P.w(b7+o+b8))
H.l(f,"$iI")
p=b5.y
o=i+"s["+n+"].viewPnt"
e=p.i(0,o)
if(e==null)H.v(P.w(b7+o+b8))
H.l(e,"$iI")
p=b5.y
o=i+"s["+n+"].color"
a0=p.i(0,o)
if(a0==null)H.v(P.w(b7+o+b8))
H.l(a0,"$iI")
if(typeof j!=="number")return j.ao()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
a2=p.i(0,o)
if(a2==null)H.v(P.w(b7+o+b8))
H.l(a2,"$iI")
p=b5.y
o=i+"s["+n+"].objRight"
a5=p.i(0,o)
if(a5==null)H.v(P.w(b7+o+b8))
H.l(a5,"$iI")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.i(0,o)
if(a9==null)H.v(P.w(b7+o+b8))
H.l(a9,"$iT")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.i(0,o)
if(b0==null)H.v(P.w(b7+o+b8))
H.l(b0,"$iT")
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
if(a2==null)H.v(P.w(b7+g+b8))
H.l(a2,"$icc")
a4=a2}else a4=b6
if((j&8)!==0){o=b5.y
g=i+"s["+n+"].cutoff"
a2=o.i(0,g)
if(a2==null)H.v(P.w(b7+g+b8))
H.l(a2,"$iT")
o=b5.y
g=i+"s["+n+"].coneAngle"
a5=o.i(0,g)
if(a5==null)H.v(P.w(b7+g+b8))
H.l(a5,"$iT")
b3=a5
b4=a2}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
g=i+"s["+n+"].att0"
a2=o.i(0,g)
if(a2==null)H.v(P.w(b7+g+b8))
H.l(a2,"$iT")
o=b5.y
g=i+"s["+n+"].att1"
a5=o.i(0,g)
if(a5==null)H.v(P.w(b7+g+b8))
H.l(a5,"$iT")
o=b5.y
g=i+"s["+n+"].att2"
a9=o.i(0,g)
if(a9==null)H.v(P.w(b7+g+b8))
H.l(a9,"$iT")
a6=a9
a7=a5
a8=a2}else{a6=b6
a7=a6
a8=a7}if((j&1)!==0){o=b5.y
g=i+"sTexture2D"+n
a2=o.i(0,g)
if(a2==null)H.v(P.w(b7+g+b8))
H.l(a2,"$iaT")
a=a2}else a=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
a2=p.i(0,o)
if(a2==null)H.v(P.w(b7+o+b8))
H.l(a2,"$iaT")
a3=a2}else a3=b6
h.push(new A.cf(m,f,e,a0,b,c,b2,b1,a4,b4,b3,a8,a7,a6,a,a3))}b5.c6.m(0,j,h)
q=b5.c5
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.v(P.w(b7+o+b8))
q.m(0,j,m)}}},
fT:function(a,b){}}
A.cQ.prototype={
h:function(a){return"dirLight"+H.e(this.a)}}
A.dh.prototype={
h:function(a){return"pointLight"+H.e(this.a)}}
A.dp.prototype={
h:function(a){return"spotLight"+H.e(this.a)}}
A.h2.prototype={
h:function(a){return this.b4}}
A.cd.prototype={}
A.ce.prototype={}
A.cf.prototype={}
A.dl.prototype={
bx:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
ca:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.cR(b,35633)
r.f=r.cR(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!u.getProgramParameter(r.r,35714)){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.v(P.w("Failed to link shader: "+H.e(s)))}r.fX()
r.fZ()},
a_:function(a){a.a.useProgram(this.r)
this.x.hu()},
cR:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.d(P.w("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
fX:function(){var u,t,s,r=this,q=H.c([],[A.cI]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.t(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cI(p,t.name,s))}r.x=new A.eN(q)},
fZ:function(){var u,t,s,r=this,q=H.c([],[A.dB]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.t(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.hn(t.type,t.size,t.name,s))}r.y=new A.iA(q)},
aJ:function(a,b,c){var u=this.a
if(a===1)return new A.dC(u,b,c)
else return A.kx(u,this.r,b,a,c)},
eC:function(a,b,c){var u=this.a
if(a===1)return new A.aT(u,b,c)
else return A.kx(u,this.r,b,a,c)},
eD:function(a,b,c){var u=this.a
if(a===1)return new A.bi(u,b,c)
else return A.kx(u,this.r,b,a,c)},
bf:function(a,b){return new P.dS(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
hn:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aJ(b,c,d)
case 5121:return u.aJ(b,c,d)
case 5122:return u.aJ(b,c,d)
case 5123:return u.aJ(b,c,d)
case 5124:return u.aJ(b,c,d)
case 5125:return u.aJ(b,c,d)
case 5126:return new A.T(u.a,c,d)
case 35664:return new A.iw(u.a,c,d)
case 35665:return new A.I(u.a,c,d)
case 35666:return new A.cc(u.a,c,d)
case 35667:return new A.ix(u.a,c,d)
case 35668:return new A.iy(u.a,c,d)
case 35669:return new A.iz(u.a,c,d)
case 35674:return new A.iB(u.a,c,d)
case 35675:return new A.bh(u.a,c,d)
case 35676:return new A.a1(u.a,c,d)
case 35678:return u.eC(b,c,d)
case 35680:return u.eD(b,c,d)
case 35670:throw H.d(u.bf("BOOL",c))
case 35671:throw H.d(u.bf("BOOL_VEC2",c))
case 35672:throw H.d(u.bf("BOOL_VEC3",c))
case 35673:throw H.d(u.bf("BOOL_VEC4",c))
default:throw H.d(P.w("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.hU.prototype={}
A.dB.prototype={}
A.iA.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
M:function(a,b){var u=this.i(0,b)
if(u==null)throw H.d(P.w("Required uniform value, "+b+", was not defined or used in shader."))
return u},
h:function(a){return this.V()},
V:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.q)(u),++r)s+=u[r].h(0)+"\n"
return s}}
A.dC.prototype={
h:function(a){return"Uniform1i: "+H.e(this.c)}}
A.ix.prototype={
h:function(a){return"Uniform2i: "+H.e(this.c)}}
A.iy.prototype={
h:function(a){return"Uniform3i: "+H.e(this.c)}}
A.iz.prototype={
h:function(a){return"Uniform4i: "+H.e(this.c)}}
A.iv.prototype={
h:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.T.prototype={
h:function(a){return"Uniform1f: "+H.e(this.c)}}
A.iw.prototype={
h:function(a){return"Uniform2f: "+H.e(this.c)}}
A.I.prototype={
h:function(a){return"Uniform3f: "+H.e(this.c)}}
A.cc.prototype={
h:function(a){return"Uniform4f: "+H.e(this.c)}}
A.iB.prototype={
h:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.bh.prototype={
a6:function(a){var u=new Float32Array(H.bF(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
h:function(a){return"UniformMat3: "+H.e(this.c)}}
A.a1.prototype={
a6:function(a){var u=new Float32Array(H.bF(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
h:function(a){return"UniformMat4: "+H.e(this.c)}}
A.aT.prototype={
e6:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
h:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.bi.prototype={
e7:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
h:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.k9.prototype={
$1:function(a){return new V.X(Math.cos(a),Math.sin(a),0)}}
F.jW.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.kR(n.$1(o),m)
m=J.kR(n.$1(o+3.141592653589793/p.c),m).J(0,l)
m=new V.C(m.a,m.b,m.c)
u=m.v(0,Math.sqrt(m.B(m)))
n=$.lA
if(n==null){n=new V.C(1,0,0)
$.lA=n
t=n}else t=n
n=u.aA(!J.D(u,t)?V.lC():t)
s=n.v(0,Math.sqrt(n.B(n)))
n=s.aA(u)
t=n.v(0,Math.sqrt(n.B(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.u(0,n*m)
m=s.u(0,q*m)
m=l.F(0,new V.X(n.a-m.a,n.b-m.b,n.c-m.c))
if(!J.D(a.f,m)){a.f=m
n=a.a
if(n!=null)n.ai()}}}
F.b1.prototype={
b3:function(){var u=this
if(!u.gdq()){C.b.R(u.a.a.d.b,u)
u.a.a.ai()}u.fK()
u.fL()
u.fM()},
fU:function(a){this.a=a
a.d.b.push(this)},
fV:function(a){this.b=a
a.d.c.push(this)},
fW:function(a){this.c=a
a.d.d.push(this)},
fK:function(){var u=this.a
if(u!=null){C.b.R(u.d.b,this)
this.a=null}},
fL:function(){var u=this.b
if(u!=null){C.b.R(u.d.c,this)
this.b=null}},
fM:function(){var u=this.c
if(u!=null){C.b.R(u.d.d,this)
this.c=null}},
gdq:function(){return this.a==null||this.b==null||this.c==null},
ew:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cg()
if(q!=null)s=s.F(0,q)
if(u!=null)s=s.F(0,u)
if(t!=null)s=s.F(0,t)
if(s.dK())return
return s.v(0,Math.sqrt(s.B(s)))},
ey:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.J(0,q)
r=new V.C(r.a,r.b,r.c)
s=r.v(0,Math.sqrt(r.B(r)))
r=t.J(0,q)
r=new V.C(r.a,r.b,r.c)
r=s.aA(r.v(0,Math.sqrt(r.B(r))))
return r.v(0,Math.sqrt(r.B(r)))},
bW:function(){var u,t=this
if(t.d!=null)return!0
u=t.ew()
if(u==null){u=t.ey()
if(u==null)return!1}t.d=u
t.a.a.ai()
return!0},
ev:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.cg()
if(q!=null)s=s.F(0,q)
if(u!=null)s=s.F(0,u)
if(t!=null)s=s.F(0,t)
if(s.dK())return
return s.v(0,Math.sqrt(s.B(s)))},
ex:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.A().a){l=d.J(0,g)
l=new V.C(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.B(l)))
if(s.a-t.a<0)q=q.S(0)}else{p=(l-u.b)/r
l=d.J(0,g).u(0,p).F(0,g).J(0,j)
l=new V.C(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.B(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.S(0)}l=n.d
if(l!=null){o=l.v(0,Math.sqrt(l.B(l)))
l=o.aA(q)
l=l.v(0,Math.sqrt(l.B(l))).aA(o)
q=l.v(0,Math.sqrt(l.B(l)))}return q},
bU:function(){var u,t=this
if(t.e!=null)return!0
u=t.ev()
if(u==null){u=t.ex()
if(u==null)return!1}t.e=u
t.a.a.ai()
return!0},
ghi:function(a){var u=this
if(J.D(u.a,u.b))return!0
if(J.D(u.b,u.c))return!0
if(J.D(u.c,u.a))return!0
return!1},
t:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.V()},
K:function(a){var u,t,s=this
if(s.gdq())return a+"disposed"
u=a+C.a.aC(J.ah(s.a.e),0)+", "+C.a.aC(J.ah(s.b.e),0)+", "+C.a.aC(J.ah(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.h(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.h(0)+"}"):u+"-}"},
V:function(){return this.K("")}}
F.fp.prototype={}
F.hT.prototype={
b5:function(a,b,c){var u,t=b.a
t.a.a.E()
t=t.e
u=c.a
u.a.a.E()
if(t==u.e){t=b.b
t.a.a.E()
t=t.e
u=c.b
u.a.a.E()
if(t==u.e){t=b.c
t.a.a.E()
t=t.e
u=c.c
u.a.a.E()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.E()
t=t.e
u=c.b
u.a.a.E()
if(t==u.e){t=b.b
t.a.a.E()
t=t.e
u=c.c
u.a.a.E()
if(t==u.e){t=b.c
t.a.a.E()
t=t.e
u=c.a
u.a.a.E()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.E()
t=t.e
u=c.c
u.a.a.E()
if(t==u.e){t=b.b
t.a.a.E()
t=t.e
u=c.a
u.a.a.E()
if(t==u.e){t=b.c
t.a.a.E()
t=t.e
u=c.b
u.a.a.E()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.d3.prototype={}
F.fM.prototype={}
F.iu.prototype={
b5:function(a,b,c){var u,t=b.a
t.a.a.E()
t=t.e
u=c.a
u.a.a.E()
if(t==u.e){t=b.b
t.a.a.E()
t=t.e
u=c.b
u.a.a.E()
return t==u.e}else{t=b.a
t.a.a.E()
t=t.e
u=c.b
u.a.a.E()
if(t==u.e){t=b.b
t.a.a.E()
t=t.e
u=c.a
u.a.a.E()
return t==u.e}else return!1}}}
F.dg.prototype={}
F.hL.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.B():u},
az:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.az()||!1
if(!t.a.az())u=!1
s=t.e
if(s!=null)s.aF(0)
return u},
hM:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.c(o.slice(0),[H.cA(o,0)])
for(o=[F.bj];u.length!==0;){t=C.b.ghz(u)
C.b.dT(u,0)
if(t!=null){s=H.c([],o)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.b(u,r)
q=u[r]
if(q!=null&&a.b5(0,t,q)){s.push(q)
C.b.dT(u,r)}}if(s.length>1)b.hL(s)}}p.a.E()
p.c.cp()
p.d.cp()
p.b.i3()
p.c.cq(new F.iu())
p.d.cq(new F.hT())
o=p.e
if(o!=null)o.aF(0)},
bT:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.ab()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.aY().a)!==0)++s
if((t&$.aX().a)!==0)++s
if((t&$.aA().a)!==0)++s
if((t&$.bm().a)!==0)++s
if((t&$.cD().a)!==0)++s
if((t&$.cE().a)!==0)++s
if((t&$.bM().a)!==0)++s
if((t&$.aW().a)!==0)++s
r=a4.gcC(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.c(u,[P.M])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.cJ])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.hb(m)
k=l.gcC(l)
if(m>=t)return H.b(o,m)
o[m]=new Z.cJ(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.b(i,j)
h=i[j].hJ(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.b(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.bF(p)),35044)
u.bindBuffer(a1,null)
c=new Z.bq(new Z.dJ(a1,d),o,a4)
c.b=H.c([],[Z.bV])
a0.b.b
if(a0.c.b.length!==0){b=H.c([],[P.u])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.E()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.b(t,m)
t=t[m].b
t.a.a.E()
b.push(t.e)}a=Z.lD(u,34963,b)
c.b.push(new Z.bV(1,b.length,a))}if(a0.d.b.length!==0){b=H.c([],[P.u])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.E()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.b(t,m)
t=t[m].b
t.a.a.E()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.b(t,m)
t=t[m].c
t.a.a.E()
b.push(t.e)}a=Z.lD(u,34963,b)
c.b.push(new Z.bV(4,b.length,a))}return c},
h:function(a){var u=this,t=H.c([],[P.k])
if(u.a.c.length!==0){t.push("Vertices:")
t.push(u.a.K("   "))}u.b.b
if(u.c.b.length!==0){t.push("Lines:")
t.push(u.c.K("   "))}if(u.d.b.length!==0){t.push("Faces:")
t.push(u.d.K("   "))}return C.b.k(t,"\n")},
ai:function(){var u=this.e
if(u!=null)u.C(null)}}
F.hM.prototype={
h8:function(a){var u,t,s,r,q=H.c([],[F.b1]),p=a[0]
for(u=this.a,t=2;t<4;++t){s=a[t-1]
r=a[t]
u.a.n(0,p)
u.a.n(0,s)
u.a.n(0,r)
q.push(F.cU(p,s,r))}return q},
h9:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.c([],[F.b1])
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
h.push(F.cU(m,l,j))
u.a.n(0,m)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.cU(m,j,i))}else{n.n(0,l)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.cU(l,j,i))
u.a.n(0,l)
u.a.n(0,i)
u.a.n(0,m)
h.push(F.cU(l,i,m))}p=!p}r=!r}return h},
gl:function(a){return this.b.length},
cq:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.b(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.i(0,q)
for(o=q-1;o>=0;--o){n=r.d.i(0,o)
if(a.b5(0,p,n)){p.b3()
break}}}}},
cp:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
s=t[u]
t=s.ghi(s)
if(t)s.b3()}},
az:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.q)(u),++r)if(!u[r].bW())s=!1
return s},
bV:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.q)(u),++r)if(!u[r].bU())s=!1
return s},
h:function(a){return this.V()},
K:function(a){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].K(a))
return C.b.k(r,"\n")},
V:function(){return this.K("")}}
F.hN.prototype={
gl:function(a){return this.b.length},
cq:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.b(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.i(0,q)
for(o=q-1;o>=0;--o){n=r.c.i(0,o)
if(a.b5(0,p,n)){p.b3()
break}}}}},
cp:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
s=t[u]
t=J.D(s.a,s.b)
if(t)s.b3()}},
h:function(a){return this.V()},
K:function(a){var u,t,s=H.c([],[P.k]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.b(t,u)
s.push(t[u].K(a+(""+u+". ")))}return C.b.k(s,"\n")},
V:function(){return this.K("")}}
F.hO.prototype={
gl:function(a){return 0},
i3:function(){var u,t
for(u=-1;!1;--u){t=this.b
return H.b(t,u)
t=t[u].giH()
t=t.giE(t)
if(t.gl(t).a2(0,1)){t=this.b
return H.b(t,u)
t[u].b3()}}},
h:function(a){return this.V()},
K:function(a){var u,t,s=H.c([],[P.k])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.b(u,t)
s.push(u[t].K(a))}return C.b.k(s,"\n")},
V:function(){return this.K("")}}
F.bj.prototype={
dm:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.iT(u.cx,r,o,t,s,q,p,a,n)},
hJ:function(a){var u,t,s=this
if(a.t(0,$.ab())){u=s.f
t=[P.M]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.aY())){u=s.r
t=[P.M]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.aX())){u=s.x
t=[P.M]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.aA())){u=s.y
t=[P.M]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.t(0,$.bm())){u=s.z
t=[P.M]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.cD())){u=s.Q
t=[P.M]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.cE())){u=s.Q
t=[P.M]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.t(0,$.bM()))return H.c([s.ch],[P.M])
else if(a.t(0,$.aW())){u=s.cx
t=[P.M]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.M])},
bW:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cg()
t.d.A(0,new F.j3(s))
s=s.a
t.r=s.v(0,Math.sqrt(s.B(s)))
s=t.a
if(s!=null){s.ai()
s=t.a.e
if(s!=null)s.aF(0)}return!0},
bU:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cg()
t.d.A(0,new F.j2(s))
s=s.a
t.x=s.v(0,Math.sqrt(s.B(s)))
s=t.a
if(s!=null){s.ai()
s=t.a.e
if(s!=null)s.aF(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.V()},
K:function(a){var u,t,s=this,r="-",q=H.c([],[P.k])
q.push(C.a.aC(J.ah(s.e),0))
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
q.push(V.G(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.h(0))
else q.push(r)
t=C.b.k(q,", ")
return a+"{"+t+"}"},
V:function(){return this.K("")}}
F.j3.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.F(0,t)}}}
F.j2.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.F(0,t)}}}
F.iU.prototype={
E:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.b(u,r)
u[r].e=s;++s}this.b=!1}},
n:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.d(P.w("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.ai()
return!0},
bg:function(a,b,c,d,e,f){var u=F.iT(a,null,b,c,null,d,e,f,0)
this.n(0,u)
return u},
gl:function(a){return this.c.length},
az:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)u[s].bW()
return!0},
bV:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)u[s].bU()
return!0},
hh:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.v(0,Math.sqrt(p*p+o*o+n*n))
if(!J.D(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.C(null)}}}}return!0},
h:function(a){return this.V()},
K:function(a){var u,t,s,r
this.E()
u=H.c([],[P.k])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.q)(t),++r)u.push(t[r].K(a))
return C.b.k(u,"\n")},
V:function(){return this.K("")}}
F.iV.prototype={
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
A:function(a,b){var u=this
C.b.A(u.b,b)
C.b.A(u.c,new F.iW(u,b))
C.b.A(u.d,new F.iX(u,b))},
h:function(a){return this.V()},
V:function(){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].K(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].K(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].K(""))
return C.b.k(r,"\n")}}
F.iW.prototype={
$1:function(a){if(!J.D(a.a,this.a))this.b.$1(a)}}
F.iX.prototype={
$1:function(a){var u=this.a
if(!J.D(a.a,u)&&!J.D(a.b,u))this.b.$1(a)}}
F.iY.prototype={
gl:function(a){return this.b.length+this.c.length},
i:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.b(t,u)
return t[u]}else{if(b<0)return H.b(t,b)
return t[b]}},
h:function(a){return this.V()},
V:function(){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].K(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].K(""))
return C.b.k(r,"\n")}}
F.j_.prototype={}
F.iZ.prototype={
b5:function(a,b,c){return J.D(b.f,c.f)}}
F.j0.prototype={}
F.hq.prototype={
hL:function(a){var u,t,s,r,q,p,o,n,m=V.cg()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null)m=new V.C(m.a+s.a,m.b+s.b,m.c+s.c)}m=m.v(0,Math.sqrt(m.B(m)))
for(u=a.length,s=m==null,t=0;t<a.length;a.length===u||(0,H.q)(a),++t){r=a[t]
if(s)q=null
else{p=m.a
o=m.b
n=m.c
q=m.v(0,Math.sqrt(p*p+o*o+n*n))}if(!J.D(r.r,q)){r.r=q
p=r.a
if(p!=null){p=p.e
if(p!=null)p.C(null)}}}return}}
F.j1.prototype={
gl:function(a){return 0},
h:function(a){return this.V()},
V:function(){var u,t,s=H.c([],[P.k])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.b(u,t)
s.push(u[t].K(""))}return C.b.k(s,"\n")}}
O.fc.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.B():u},
ap:function(){var u=this.r
if(u!=null)u.C(null)},
sdl:function(a){if(this.b!=a){this.b=a
this.ap()}},
sdj:function(a){if(this.c!=a){this.c=a
this.ap()}},
sdi:function(a){var u=a==null?V.b9():a
this.f=u
if(!J.D(u,a)){this.f=a
this.ap()}},
ae:function(a,b){},
bd:function(a,b){if(b!=null)if(!C.b.U(a,b)){b.a=a.length
a.push(b)}},
cr:function(a,b){var u,t,s,r,q,p,o,n=this,m="Distort"
if(n.a==null){u=a.fr.i(0,m)
if(u==null){t=a.a
u=new A.fd(t,m)
u.bx(t,m)
u.ca(0,"uniform mat4 projViewObjMat;                             \nuniform mat3 colorTxt2DMat;                              \nuniform mat3 bumpTxt2DMat;                               \n                                                         \nattribute vec3 posAttr;                                  \nattribute vec2 txt2DAttr;                                \n                                                         \nvarying vec2 colorTxt2D;                                 \nvarying vec2 bumpTxt2D;                                  \n                                                         \nvoid main()                                              \n{                                                        \n   vec3 txt2D = vec3(txt2DAttr.x, 1.0-txt2DAttr.y, 1.0); \n   colorTxt2D = (colorTxt2DMat * txt2D).xy;              \n   bumpTxt2D = (bumpTxt2DMat * vec3(txt2DAttr, 1.0)).xy; \n   gl_Position = projViewObjMat * vec4(posAttr, 1.0);    \n}                                                        \n","precision mediump float;                           \n                                                   \nuniform sampler2D colorTxt;                        \nuniform sampler2D bumpTxt;                         \nuniform mat4 bumpMat;                              \n                                                   \nvarying vec2 colorTxt2D;                           \nvarying vec2 bumpTxt2D;                            \n                                                   \nvec2 offset()                                      \n{                                                  \n   vec3 txt2D = texture2D(bumpTxt, bumpTxt2D).rgb; \n   txt2D = normalize(txt2D*2.0 - 1.0);             \n   return (bumpMat * vec4(txt2D, 1.0)).xy;         \n}                                                  \n                                                   \nvoid main()                                        \n{                                                  \n   vec2 txt2D = colorTxt2D + offset();             \n   gl_FragColor = texture2D(colorTxt, txt2D);      \n}                                                  \n")
u.z=u.x.i(0,"posAttr")
u.Q=u.x.i(0,"txt2DAttr")
u.ch=H.l(u.y.M(0,"projViewObjMat"),"$ia1")
u.cx=H.l(u.y.M(0,"colorTxt2DMat"),"$ibh")
u.cy=H.l(u.y.M(0,"bumpTxt2DMat"),"$ibh")
u.db=H.l(u.y.M(0,"colorTxt"),"$iaT")
u.dx=H.l(u.y.M(0,"bumpTxt"),"$iaT")
u.dy=H.l(u.y.M(0,"bumpMat"),"$ia1")
a.bS(u)}n.a=u}if(b.e==null){t=b.d
s=$.ab()
r=$.aA()
r=t.bT(new Z.ch(a.a),new Z.aU(s.a|r.a))
r.aq($.ab()).e=n.a.z.c
r.aq($.aA()).e=n.a.Q.c
b.e=r}q=H.c([],[T.cb])
n.bd(q,n.b)
n.bd(q,n.c)
for(t=a.a,p=0;p<q.length;++p){s=q[p]
if(!s.c&&s.d){s.c=!0
t.activeTexture(33984+s.a)
t.bindTexture(3553,s.b)}}s=n.a
s.a_(a)
r=n.b
s.d5(s.db,r)
r=n.c
s.d5(s.dx,r)
r=a.gdS()
o=s.ch
o.toString
o.a6(r.a3(0,!0))
r=n.d
o=s.cx
o.toString
o.a6(r.a3(0,!0))
r=n.e
o=s.cy
o.toString
o.a6(r.a3(0,!0))
r=n.f
s=s.dy
s.toString
s.a6(r.a3(0,!0))
s=b.e
if(s instanceof Z.bq){s.a_(a)
s.ad(a)
s.aj(a)}else b.e=null
s=n.a
s.toString
t.useProgram(null)
s.x.c_()
for(p=0;p<q.length;++p){s=q[p]
if(s.c){s.c=!1
t.activeTexture(33984+s.a)
t.bindTexture(3553,null)}}}}
O.d7.prototype={
gp:function(){var u=this.fr
return u==null?this.fr=D.B():u},
a4:function(a){var u=this.fr
if(u!=null)u.C(a)},
ap:function(){return this.a4(null)},
cZ:function(a){this.a=null
this.a4(a)},
fQ:function(){return this.cZ(null)},
eT:function(a,b){var u=new D.b2()
u.b=!0
this.a4(u)},
eV:function(a,b){var u=new D.b3()
u.b=!0
this.a4(u)},
cO:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.u,h=new H.O([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=h.i(0,0)
h.m(0,0,r==null?1:r)}q=H.c([],[A.cQ])
h.A(0,new O.h6(j,q))
C.b.bv(q,new O.h7())
p=new H.O([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){o=u[s]
r=o.gb2()
n=p.i(0,o.gb2())
p.m(0,r,n==null?1:n)}m=H.c([],[A.dh])
p.A(0,new O.h8(j,m))
C.b.bv(m,new O.h9())
l=new H.O([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.q)(i),++s){o=i[s]
t=o.gb2()
r=l.i(0,o.gb2())
l.m(0,t,r==null?1:r)}k=H.c([],[A.dp])
l.A(0,new O.ha(j,k))
C.b.bv(k,new O.hb())
i=C.c.ab(j.e.a.length+3,4)
j.dy.e
return A.mQ(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
bd:function(a,b){},
ae:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.a3(u,u.length);u.w();){t=u.d
t.toString
s=$.iS
if(s==null)s=$.iS=new V.C(0,0,1)
t.a=s
r=$.iR
t.d=r==null?$.iR=new V.C(0,1,0):r
r=$.iQ
t.e=r==null?$.iQ=new V.C(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.br(s)
r=s.a
p=s.b
o=s.c
t.a=s.v(0,Math.sqrt(r*r+p*p+o*o))
o=q.br(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.v(0,Math.sqrt(p*p+r*r+s*s))
s=q.br(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.v(0,Math.sqrt(r*r+p*p+o*o))}}}},
cr:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=a9.a
if(b0==null){b0=a9.cO()
u=b1.fr.i(0,b0.b4)
if(u==null){u=A.mP(b0,b1.a)
b1.bS(u)}b0=a9.a=u
b2.e=null}t=b0.z
s=t.ds
b0=b2.e
if(!(b0 instanceof Z.bq))b0=b2.e=null
if(b0==null||!b0.d.t(0,s)){b0=t.k3
if(b0)b2.d.az()
r=t.k4
if(r){q=b2.d
p=q.e
if(p!=null)++p.d
q.d.bV()
q.a.bV()
q=q.e
if(q!=null)q.aF(0)}q=t.r2
if(q){p=b2.d
o=p.e
if(o!=null)++o.d
p.a.hh()
p=p.e
if(p!=null)p.aF(0)}n=b2.d.bT(new Z.ch(b1.a),s)
n.aq($.ab()).e=a9.a.Q.c
if(b0)n.aq($.aY()).e=a9.a.cx.c
if(r)n.aq($.aX()).e=a9.a.ch.c
if(t.r1)n.aq($.aA()).e=a9.a.cy.c
if(q)n.aq($.bm()).e=a9.a.db.c
if(t.rx)n.aq($.aW()).e=a9.a.dx.c
b2.e=n}m=H.c([],[T.cb])
a9.a.a_(b1)
if(t.dy){b0=a9.a
r=b1.dx
r=r.ga5(r)
b0=b0.dy
b0.toString
b0.a6(r.a3(0,!0))}if(t.fr){b0=a9.a
r=b1.cx
if(r==null){r=b1.db
r=r.ga5(r)
q=b1.dx
q=b1.cx=r.u(0,q.ga5(q))
r=q}b0=b0.fr
b0.toString
b0.a6(r.a3(0,!0))}b0=a9.a
r=b1.gdS()
b0=b0.fy
b0.toString
b0.a6(r.a3(0,!0))
if(t.ry){b0=a9.a
r=a9.b
b0=b0.k1
b0.toString
b0.a6(C.j.a3(r,!0))}if(t.x1){b0=a9.a
r=a9.c
b0=b0.k2
b0.toString
b0.a6(C.j.a3(r,!0))}if(t.x2){b0=a9.a
r=a9.d
b0=b0.k3
b0.toString
b0.a6(C.j.a3(r,!0))}if(t.y2>0){l=a9.e.a.length
b0=a9.a.k4
b0.a.uniform1i(b0.d,l)
for(k=0;k<l;++k){b0=a9.a
r=a9.e.a
if(k>=r.length)return H.b(r,k)
r=r[k]
b0=b0.r1
if(k>=b0.length)return H.b(b0,k)
b0=b0[k]
j=new Float32Array(H.bF(r.a3(0,!0)))
b0.a.uniformMatrix4fv(b0.d,!1,j)}}if(t.a.a){b0=a9.a
r=a9.f.f
b0=b0.r2
b0.a.uniform3f(b0.d,r.a,r.b,r.c)}if(t.id){if(t.b.a){b0=a9.a
r=a9.r.f
b0=b0.x1
b0.a.uniform3f(b0.d,r.a,r.b,r.c)}if(t.c.a){b0=a9.a
r=a9.x.f
b0=b0.y2
b0.a.uniform3f(b0.d,r.a,r.b,r.c)}if(t.d.a){b0=a9.a
r=a9.y.f
b0=b0.dt
b0.a.uniform3f(b0.d,r.a,r.b,r.c)}b0=t.e.a
if(!b0)r=!1
else r=!0
if(r){r=a9.a
q=a9.z.ch
r=r.dv
r.a.uniform1f(r.d,q)}if(b0){b0=a9.a
r=a9.z.f
b0=b0.du
b0.a.uniform3f(b0.d,r.a,r.b,r.c)}b0=t.z
if(b0.length>0){r=b1.db
i=r.ga5(r)
r=P.u
h=new H.O([r,r])
for(r=a9.dx.e,q=r.length,g=0;g<r.length;r.length===q||(0,H.q)(r),++g){f=r[g]
e=h.i(0,0)
if(e==null)e=0
h.m(0,0,e+1)
d=J.cF(a9.a.c2.i(0,0),e)
p=i.br(f.a)
o=p.a
c=p.b
b=p.c
b=p.v(0,Math.sqrt(o*o+c*c+b*b))
c=d.e
o=b.a
p=b.b
b=b.c
c.a.uniform3f(c.d,o,p,b)
b=f.c
p=d.f
p.a.uniform3f(p.d,b.a,b.b,b.c)}for(r=b0.length,g=0;g<b0.length;b0.length===r||(0,H.q)(b0),++g){q=b0[g].a
l=h.i(0,q)
if(l==null)l=0
q=a9.a.c1.i(0,q)
q.a.uniform1i(q.d,l)}}b0=t.Q
if(b0.length>0){r=b1.db
i=r.ga5(r)
r=P.u
a=new H.O([r,r])
for(r=a9.dx.f,q=r.length,g=0;g<r.length;r.length===q||(0,H.q)(r),++g){f=r[g]
a0=f.gb2()
e=a.i(0,a0)
if(e==null)e=0
a.m(0,a0,e+1)
d=J.cF(a9.a.c4.i(0,a0),e)
a1=i.u(0,f.ga5(f))
p=f.ga5(f)
o=$.c4
p=p.ct(o==null?$.c4=new V.X(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=$.c4
p=a1.ct(p==null?$.c4=new V.X(0,0,0):p)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gb1(f)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
f.gaG()
p=a1.cd(0)
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
j=new Float32Array(H.bF(new V.bY(o,c,b,a2,a3,a4,a5,a6,p).a3(0,!0)))
a7.a.uniformMatrix3fv(a7.d,!1,j)
f.gaG()
p=f.gaG()
if(!C.b.U(m,p)){p.sc9(0,m.length)
m.push(p)}p=f.gaG()
o=p.gcf(p)
if(o){o=d.f
o.toString
c=p.d
if(c<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}f.gaU()
p=f.ge8()
o=d.x
o.toString
c=p.ghr(p)
b=p.ghs(p)
a2=p.ght()
p=p.ghq()
o.a.uniform4f(o.d,c,b,a2,p)
p=f.gaU()
if(!C.b.U(m,p)){p.sc9(0,m.length)
m.push(p)}p=f.gaU()
o=p.gcf(p)
if(o){o=d.r
o.toString
c=p.d
if(c<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}if(f.ghv()){p=f.ghc()
o=d.y
o.a.uniform1f(o.d,p)
p=f.ghd()
o=d.z
o.a.uniform1f(o.d,p)
p=f.ghe()
o=d.Q
o.a.uniform1f(o.d,p)}}for(r=b0.length,g=0;g<b0.length;b0.length===r||(0,H.q)(b0),++g){q=b0[g].a
l=a.i(0,q)
if(l==null)l=0
q=a9.a.c3.i(0,q)
q.a.uniform1i(q.d,l)}}b0=t.ch
if(b0.length>0){r=b1.db
i=r.ga5(r)
r=P.u
a8=new H.O([r,r])
for(r=a9.dx.r,q=r.length,g=0;g<r.length;r.length===q||(0,H.q)(r),++g){f=r[g]
a0=f.gb2()
e=a8.i(0,a0)
if(e==null)e=0
a8.m(0,a0,e+1)
d=J.cF(a9.a.c6.i(0,a0),e)
p=f.gi0(f)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gik(f).iD()
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=i.ct(f.gi0(f))
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gb1(f)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
f.gaG()
p=f.gcu()
o=d.f
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gcs(f)
o=d.r
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.giF()
o=d.x
o.a.uniform1f(o.d,p)
p=f.giG()
o=d.y
o.a.uniform1f(o.d,p)
f.gaG()
p=f.gaG()
if(!C.b.U(m,p)){p.sc9(0,m.length)
m.push(p)}p=f.gaG()
o=p.gcf(p)
if(o){o=d.dx
o.toString
c=p.d
if(!c)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}f.gaU()
p=f.ge8()
o=d.z
o.toString
c=p.ghr(p)
b=p.ghs(p)
a2=p.ght()
p=p.ghq()
o.a.uniform4f(o.d,c,b,a2,p)
p=f.gaU()
if(!C.b.U(m,p)){p.sc9(0,m.length)
m.push(p)}p=f.gaU()
o=p.gcf(p)
if(o){o=d.dy
o.toString
c=p.d
if(!c)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}if(f.gil()){p=f.gij()
o=d.Q
o.a.uniform1f(o.d,p)
p=f.gii()
o=d.ch
o.a.uniform1f(o.d,p)}if(f.ghv()){p=f.ghc()
o=d.cx
o.a.uniform1f(o.d,p)
p=f.ghd()
o=d.cy
o.a.uniform1f(o.d,p)
p=f.ghe()
o=d.db
o.a.uniform1f(o.d,p)}}for(r=b0.length,g=0;g<b0.length;b0.length===r||(0,H.q)(b0),++g){q=b0[g].a
l=a8.i(0,q)
if(l==null)l=0
q=a9.a.c5.i(0,q)
q.a.uniform1i(q.d,l)}}}if(t.dx){b0=a9.a
r=b1.Q
if(r==null){r=b1.db
r=b1.Q=r.ga5(r).cd(0)}b0=b0.id
b0.toString
b0.a6(r.a3(0,!0))}if(t.cy){a9.bd(m,a9.ch)
b0=a9.a
r=a9.ch
b0.fT(b0.dw,r)
if(t.r.a){b0=a9.a
r=a9.cx.f
b0=b0.dz
b0.a.uniform3f(b0.d,r.a,r.b,r.c)}b0=t.x.a
if(!b0)r=!1
else r=!0
if(r){r=a9.a
q=a9.cy.ch
r=r.dA
r.a.uniform1f(r.d,q)}if(b0){b0=a9.a
r=a9.cy.f
b0=b0.dB
b0.a.uniform3f(b0.d,r.a,r.b,r.c)}}b0=t.y.a
r=!b0
if(r)q=!1
else q=!0
if(q){if(b0){b0=a9.a
q=a9.db.f
b0=b0.dC
b0.a.uniform1f(b0.d,q)}b0=b1.a
b0.enable(3042)
b0.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].a_(b1)
b0=b2.e
b0.a_(b1)
b0.ad(b1)
b0.aj(b1)
if(r)b0=!1
else b0=!0
if(b0)b1.a.disable(3042)
for(k=0;k<m.length;++k)m[k].aj(b1)
b0=a9.a
b0.toString
b1.a.useProgram(null)
b0.x.c_()},
h:function(a){var u=this.a
if(u!=null)return u.b
else return this.cO().b4}}
O.h6.prototype={
$2:function(a,b){if(typeof b!=="number")return b.F()
return this.b.push(new A.cQ(a,C.c.ab(b+3,4)*4))}}
O.h7.prototype={
$2:function(a,b){return J.kc(a.a,b.a)}}
O.h8.prototype={
$2:function(a,b){if(typeof b!=="number")return b.F()
return this.b.push(new A.dh(a,C.c.ab(b+3,4)*4))}}
O.h9.prototype={
$2:function(a,b){return J.kc(a.a,b.a)}}
O.ha.prototype={
$2:function(a,b){if(typeof b!=="number")return b.F()
return this.b.push(new A.dp(a,C.c.ab(b+3,4)*4))}}
O.hb.prototype={
$2:function(a,b){return J.kc(a.a,b.a)}}
O.h0.prototype={
ax:function(){var u,t=this
t.cE()
u=t.f
if(!(Math.abs(u-1)<$.A().a)){t.f=1
u=new D.y(t.b,u,1)
u.b=!0
t.a.a4(u)}}}
O.d8.prototype={
ax:function(){},
d3:function(a){var u,t,s=this
if(!s.c.t(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.ax()
u=s.a
u.a=null
u.a4(null)}}}
O.h1.prototype={}
O.as.prototype={
d1:function(a){var u,t,s=this
if(!s.f.t(0,a)){u=s.f
s.f=a
t=new D.y(s.b+".color",u,a)
t.b=!0
s.a.a4(t)}},
ax:function(){this.cE()
this.d1(new V.V(1,1,1))},
sb1:function(a,b){this.d3(new A.Z(!0,!1,!1))
this.d1(b)}}
O.h3.prototype={}
O.h4.prototype={
ax:function(){var u,t=this
t.cF()
u=t.ch
if(!(Math.abs(u-1)<$.A().a)){t.ch=1
u=new D.y(t.b+".refraction",u,1)
u.b=!0
t.a.a4(u)}}}
O.h5.prototype={
d4:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.A().a)){u.ch=a
t=new D.y(u.b+".shininess",t,a)
t.b=!0
u.a.a4(t)}},
ax:function(){this.cF()
this.d4(100)}}
O.dm.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.B():u},
a4:function(a){var u=this.e
if(u!=null)u.C(a)},
ap:function(){return this.a4(null)},
ae:function(a,b){},
cr:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=a.fr.i(0,n)
if(u==null){t=a.a
u=new A.hU(t,n)
u.bx(t,n)
u.ca(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.i(0,"posAttr")
u.Q=H.l(u.y.i(0,"fov"),"$iT")
u.ch=H.l(u.y.i(0,"ratio"),"$iT")
u.cx=H.l(u.y.i(0,"boxClr"),"$iI")
u.cy=H.l(u.y.i(0,"boxTxt"),"$ibi")
u.db=H.l(u.y.i(0,"viewMat"),"$ia1")
a.bS(u)}o.a=u}if(b.e==null){t=b.d.bT(new Z.ch(a.a),$.ab())
t.aq($.ab()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
if(!t.c&&t.d>=6){t.c=!0
s=a.a
s.activeTexture(33985)
s.bindTexture(34067,t.b)}}t=a.d
s=a.c
r=o.a
r.a_(a)
q=o.b
p=r.Q
p.a.uniform1f(p.d,q)
q=r.ch
q.a.uniform1f(q.d,t/s)
s=o.c
r.cy.e7(s)
s=o.d
t=r.cx
t.a.uniform3f(t.d,s.a,s.b,s.c)
s=a.db
s=s.ga5(s).cd(0)
r=r.db
r.toString
r.a6(s.a3(0,!0))
t=b.e
if(t instanceof Z.bq){t.a_(a)
t.ad(a)
t.aj(a)}else b.e=null
t=o.a
t.toString
s=a.a
s.useProgram(null)
t.x.c_()
t=o.c
if(t!=null)if(t.c){t.c=!1
s.activeTexture(33984+t.a)
s.bindTexture(34067,null)}}}
O.du.prototype={}
T.cb.prototype={}
T.i9.prototype={}
T.id.prototype={
d2:function(){if(!this.d){this.d=!0
var u=this.y
if(u!=null)u.c0()}}}
T.ie.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.B():u}}
T.ig.prototype={
hK:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=W.kl(a)
t=T.kv(q)
W.U(u,"load",new T.ii(this,t,u,!1,q,!1,!1),!1)
return t},
aK:function(a,b,c,d,e,f){var u=W.kl(c);++this.d
W.U(u,"load",new T.ih(this,u,!1,b,!1,d,a),!1)},
d0:function(a,b,c){var u,t,s,r
b=V.cC(b)
u=V.cC(a.width)
t=V.cC(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.kf()
s.width=u
s.height=t
r=C.i.e3(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.oj(r.getImageData(0,0,s.width,s.height))}}}
T.ii.prototype={
$1:function(a){var u,t,s=this,r=3553,q=s.b,p=s.c
q.e=p.width
q.f=p.height
u=s.a
t=u.d0(p,u.b,s.d)
q.r=p.width
q.x=p.height
p=u.a
p.bindTexture(r,s.e)
p.pixelStorei(37440,s.f?1:0)
C.q.dX(p,r,0,6408,6408,5121,t)
if(s.r)p.generateMipmap(r)
p.bindTexture(r,null)
q.d2();++u.e}}
T.ih.prototype={
$1:function(a){var u=this,t=u.a,s=t.d0(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.q.dX(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.c0()}++t.e}}
X.eS.prototype={
gp:function(){var u=this.fr
return u==null?this.fr=D.B():u},
a1:function(a){var u=this.fr
if(u!=null)u.C(a)},
san:function(a,b){var u,t=this
if(b<1)b=1
u=t.a
if(u!==b){t.y=null
t.c=t.a=b
u=new D.y("width",u,b)
u.b=!0
t.a1(u)}},
sal:function(a,b){var u,t=this
if(b<1)b=1
u=t.b
if(u!==b){t.y=null
t.d=t.b=b
u=new D.y("height",u,b)
u.b=!0
t.a1(u)}},
a_:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=3553,e=36161,d=36160
if(h.f){u=a.a
t=u.drawingBufferWidth
s=h.r
if(typeof t!=="number")return t.u()
h.san(0,C.c.a0(t*s))
u=u.drawingBufferHeight
s=h.x
if(typeof u!=="number")return u.u()
h.sal(0,C.c.a0(u*s))}if(h.y==null){u=a.a
t=h.ch
s=h.a
r=h.b
q=u.getParameter(3379)
p=V.cC(s)
o=V.cC(r)
q=V.cC(q)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
u.bindTexture(f,n)
u.texParameteri(f,10242,33071)
u.texParameteri(f,10243,33071)
u.texParameteri(f,10241,9729)
u.texParameteri(f,10240,9729)
C.q.dY(u,f,0,6408,p,o,0,6408,5121,g)
u.bindTexture(f,g)
m=T.kv(n)
m.e=s
m.f=r
m.r=p
m.x=o
m.d2()
t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.c0()
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
a.c=C.d.a0(s*h.a)
r=t.d
a.d=C.d.a0(r*h.b)
l=t.a
k=h.c
if(typeof k!=="number")return H.t(k)
j=C.d.a0(l*k)
t=t.b
l=h.d
if(typeof l!=="number")return H.t(l)
u.viewport(j,C.d.a0(t*l),C.d.a0(s*k),C.d.a0(r*l))
u.clearDepth(h.db)
if(h.cy){t=h.cx
u.clearColor(t.a,t.b,t.c,t.d)
i=16640}else i=256
if(i>0)u.clear(i)},
aj:function(a){a.a.bindFramebuffer(36160,null)}}
X.ke.prototype={}
X.fw.prototype={
gp:function(){var u=this.x
return u==null?this.x=D.B():u},
a_:function(a){var u,t,s,r,q,p,o=a.a
o.bindFramebuffer(36160,null)
o.enable(2884)
o.enable(2929)
o.depthFunc(513)
u=o.drawingBufferWidth
t=o.drawingBufferHeight
s=this.r
r=s.a
if(typeof u!=="number")return H.t(u)
q=C.d.a0(r*u)
r=s.b
if(typeof t!=="number")return H.t(t)
p=C.d.a0(r*t)
r=C.d.a0(s.c*u)
a.c=r
s=C.d.a0(s.d*t)
a.d=s
o.viewport(q,p,r,s)
o.clearDepth(this.c)
s=this.a
o.clearColor(s.a,s.b,s.c,s.d)
o.clear(16640)},
aj:function(a){}}
X.fD.prototype={
gp:function(){var u=this.b
return u==null?this.b=D.B():u},
a_:function(a){var u
a.cy.bp(V.b9())
u=V.b9()
a.db.bp(u)},
aj:function(a){a.cy.aD()
a.db.aD()}}
X.df.prototype={
gp:function(){var u=this.f
return u==null?this.f=D.B():u},
a1:function(a){var u=this.f
if(u!=null)u.C(a)},
er:function(){return this.a1(null)},
a_:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.at(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bp(k)
r=$.lf
if(r==null){r=V.lh()
q=V.kA()
p=$.lz
r=V.la(r,q,p==null?$.lz=new V.C(0,0,-1):p)
$.lf=r
u=r}else u=r
r=s.b
if(r!=null){t=r.aS(0,a,s)
if(t!=null)u=t.u(0,u)}a.db.bp(u)},
aj:function(a){a.cy.aD()
a.db.aD()}}
X.i5.prototype={}
V.cL.prototype={
bb:function(a){this.b=new P.fB(C.Q)
this.c=null
this.d=H.c([],[[P.o,W.ak]])},
L:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)l.push(H.c([],[W.ak]))
u=a.split("\n")
for(l=u.length,t=[W.ak],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else m.d.push(H.c([],t))
p=document.createElement("div")
p.className="codePart"
o=m.b.eB(q,0,q.length)
n=o==null?q:o
C.O.e5(p,H.kO(n," ","&nbsp;"))
n=p.style
n.color=b
C.b.gau(m.d).push(p)}},
dQ:function(a,b){var u,t,s,r,q=this
q.d=H.c([],[[P.o,W.ak]])
u=C.b.k(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bi():t).e_(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.q)(t),++r)q.bo(t[r])}}
V.k6.prototype={
$1:function(a){var u=C.d.dZ(this.a.ghD(),2)
if(u!=="0.00")P.kN(u+" fps")}}
V.fa.prototype={
bo:function(a){var u=this
switch(a.a){case"Class":u.L(a.b,"#551")
break
case"Comment":u.L(a.b,"#777")
break
case"Id":u.L(a.b,"#111")
break
case"Num":u.L(a.b,"#191")
break
case"Reserved":u.L(a.b,"#119")
break
case"String":u.L(a.b,"#171")
break
case"Symbol":u.L(a.b,"#616")
break
case"Type":u.L(a.b,"#B11")
break
case"Whitespace":u.L(a.b,"#111")
break}},
bi:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=R.im()
a1.c=a1.j(0,r)
u=a1.j(0,r).k(0,q)
t=T.p(new H.m("_"))
u.a.push(t)
t=T.L("a","z")
u.a.push(t)
t=T.L("A","Z")
u.a.push(t)
t=a1.j(0,q).k(0,q)
u=T.p(new H.m("_"))
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
t=T.p(new H.m("."))
u.a.push(t)
t=a1.j(0,o).k(0,n)
u=T.L("0","9")
t.a.push(u)
u=a1.j(0,n).k(0,n)
t=T.L("0","9")
u.a.push(t)
t=a1.j(0,r).k(0,m)
u=T.p(new H.m(l))
t.a.push(u)
u=a1.j(0,m).k(0,m)
t=T.p(new H.m(l))
u.a.push(t)
t=a1.j(0,r).k(0,k)
u=T.p(new H.m('"'))
t.a.push(u)
u=a1.j(0,k).k(0,j)
t=T.p(new H.m('"'))
u.a.push(t)
t=a1.j(0,k).k(0,i)
u=T.p(new H.m("\\"))
t.a.push(u)
u=a1.j(0,i).k(0,k)
t=T.p(new H.m('"'))
u.a.push(t)
a1.j(0,k).k(0,k).a.push(new T.aB())
t=a1.j(0,r).k(0,h)
u=T.p(new H.m("'"))
t.a.push(u)
u=a1.j(0,h).k(0,g)
t=T.p(new H.m("'"))
u.a.push(t)
t=a1.j(0,h).k(0,f)
u=T.p(new H.m("\\"))
t.a.push(u)
u=a1.j(0,f).k(0,h)
t=T.p(new H.m("'"))
u.a.push(t)
a1.j(0,h).k(0,h).a.push(new T.aB())
t=a1.j(0,r).k(0,e)
u=T.p(new H.m("/"))
t.a.push(u)
u=a1.j(0,e).k(0,d)
t=T.p(new H.m("/"))
u.a.push(t)
t=a1.j(0,d).k(0,c)
u=T.p(new H.m("\n"))
t.a.push(u)
u=a1.j(0,d).k(0,d)
t=new T.a4()
s=[T.b8]
t.a=H.c([],s)
u.a.push(t)
u=T.p(new H.m("\n"))
t.a.push(u)
u=a1.j(0,e).k(0,b)
t=T.p(new H.m("*"))
u.a.push(t)
t=a1.j(0,b).k(0,a)
u=T.p(new H.m("*"))
t.a.push(u)
u=a1.j(0,a).k(0,b)
t=new T.a4()
t.a=H.c([],s)
u.a.push(t)
u=T.p(new H.m("*"))
t.a.push(u)
u=a1.j(0,a).k(0,c)
t=T.p(new H.m("/"))
u.a.push(t)
t=a1.j(0,r).k(0,a0)
u=T.p(new H.m(" \n\t"))
t.a.push(u)
u=a1.j(0,a0).k(0,a0)
t=T.p(new H.m(" \n\t"))
u.a.push(t)
t=a1.j(0,p)
t.d=t.a.N("Num")
t=a1.j(0,n)
t.d=t.a.N("Num")
t=a1.j(0,m)
t.d=t.a.N("Symbol")
t=a1.j(0,j)
t.d=t.a.N("String")
t=a1.j(0,g)
t.d=t.a.N("String")
t=a1.j(0,c)
t.d=t.a.N(d)
t=a1.j(0,a0)
t.d=t.a.N(a0)
t=a1.j(0,q)
t=t.d=t.a.N(q)
u=[P.k]
t.aE(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aE(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aE(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.fy.prototype={
bo:function(a){var u=this
switch(a.a){case"Builtin":u.L(a.b,"#411")
break
case"Comment":u.L(a.b,"#777")
break
case"Id":u.L(a.b,"#111")
break
case"Num":u.L(a.b,"#191")
break
case"Preprocess":u.L(a.b,"#737")
break
case"Reserved":u.L(a.b,"#119")
break
case"Symbol":u.L(a.b,"#611")
break
case"Type":u.L(a.b,"#171")
break
case"Whitespace":u.L(a.b,"#111")
break}},
bi:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=R.im()
e.c=e.j(0,r)
u=e.j(0,r).k(0,q)
t=T.p(new H.m("_"))
u.a.push(t)
t=T.L("a","z")
u.a.push(t)
t=T.L("A","Z")
u.a.push(t)
t=e.j(0,q).k(0,q)
u=T.p(new H.m("_"))
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
t=T.p(new H.m("."))
u.a.push(t)
t=e.j(0,o).k(0,n)
u=T.L("0","9")
t.a.push(u)
u=e.j(0,n).k(0,n)
t=T.L("0","9")
u.a.push(t)
t=e.j(0,r).k(0,m)
u=T.p(new H.m(l))
t.a.push(u)
u=e.j(0,m).k(0,m)
t=T.p(new H.m(l))
u.a.push(t)
t=e.j(0,r).k(0,k)
u=T.p(new H.m("/"))
t.a.push(u)
u=e.j(0,k).k(0,j)
t=T.p(new H.m("/"))
u.a.push(t)
e.j(0,k).k(0,m).a.push(new T.aB())
t=e.j(0,j).k(0,i)
u=T.p(new H.m("\n"))
t.a.push(u)
u=e.j(0,j).k(0,j)
t=new T.a4()
s=[T.b8]
t.a=H.c([],s)
u.a.push(t)
u=T.p(new H.m("\n"))
t.a.push(u)
u=e.j(0,r).k(0,h)
t=T.p(new H.m("#"))
u.a.push(t)
t=e.j(0,h).k(0,h)
u=new T.a4()
u.a=H.c([],s)
t.a.push(u)
t=T.p(new H.m("\n"))
u.a.push(t)
t=e.j(0,h).k(0,g)
u=T.p(new H.m("\n"))
t.a.push(u)
u=e.j(0,r).k(0,f)
t=T.p(new H.m(" \n\t"))
u.a.push(t)
t=e.j(0,f).k(0,f)
u=T.p(new H.m(" \n\t"))
t.a.push(u)
u=e.j(0,p)
u.d=u.a.N("Num")
u=e.j(0,n)
u.d=u.a.N("Num")
u=e.j(0,m)
u.d=u.a.N("Symbol")
u=e.j(0,i)
u.d=u.a.N(j)
u=e.j(0,g)
u.d=u.a.N(h)
u=e.j(0,f)
u.d=u.a.N(f)
u=e.j(0,q)
u=u.d=u.a.N(q)
t=[P.k]
u.aE(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aE(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aE(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return e}}
V.fz.prototype={
bo:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.L(a.b,"#911")
u.L("=",t)
break
case"Id":u.L(a.b,t)
break
case"Other":u.L(a.b,t)
break
case"Reserved":u.L(a.b,"#119")
break
case"String":u.L(a.b,"#171")
break
case"Symbol":u.L(a.b,"#616")
break}},
bi:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=R.im()
l.c=l.j(0,s)
u=l.j(0,s).k(0,r)
t=T.p(new H.m("_"))
u.a.push(t)
t=T.L("a","z")
u.a.push(t)
t=T.L("A","Z")
u.a.push(t)
t=l.j(0,r).k(0,r)
u=T.p(new H.m("_"))
t.a.push(u)
u=T.L("0","9")
t.a.push(u)
u=T.L("a","z")
t.a.push(u)
u=T.L("A","Z")
t.a.push(u)
u=l.j(0,r).k(0,q)
t=T.p(new H.m("="))
u.a.push(t)
u.c=!0
u=l.j(0,s).k(0,p)
t=T.p(new H.m("</\\-!>="))
u.a.push(t)
t=l.j(0,p).k(0,p)
u=T.p(new H.m("</\\-!>="))
t.a.push(u)
u=l.j(0,s).k(0,o)
t=T.p(new H.m('"'))
u.a.push(t)
t=l.j(0,o).k(0,n)
u=T.p(new H.m('"'))
t.a.push(u)
u=l.j(0,o).k(0,"EscStr")
t=T.p(new H.m("\\"))
u.a.push(t)
t=l.j(0,"EscStr").k(0,o)
u=T.p(new H.m('"'))
t.a.push(u)
l.j(0,o).k(0,o).a.push(new T.aB())
l.j(0,s).k(0,m).a.push(new T.aB())
u=l.j(0,m).k(0,m)
t=new T.a4()
t.a=H.c([],[T.b8])
u.a.push(t)
u=T.p(new H.m('</\\-!>=_"'))
t.a.push(u)
u=T.L("a","z")
t.a.push(u)
u=T.L("A","Z")
t.a.push(u)
u=l.j(0,p)
u.d=u.a.N("Symbol")
u=l.j(0,n)
u.d=u.a.N("String")
u=l.j(0,r)
t=u.a.N(r)
u.d=t
t.aE(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.k]))
t=l.j(0,q)
t.d=t.a.N(q)
t=l.j(0,m)
t.d=t.a.N(m)
return l}}
V.hw.prototype={
dQ:function(a,b){this.d=H.c([],[[P.o,W.ak]])
this.L(C.b.k(b,"\n"),"#111")},
bo:function(a){},
bi:function(){return}}
V.hP.prototype={
ej:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.U(q,"scroll",new V.hR(o),!1)},
de:function(a){var u,t,s,r,q,p,o,n,m,l,k
this.fY()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.e_(C.b.hI(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
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
if(H.oE(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.b(m,1)
l.href=m[1]
l.textContent=m[0]
t.appendChild(l)}else{k=P.eu(C.y,n,C.e,!1)
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
e2:function(a){var u,t,s,r=new V.fa("dart")
r.bb("dart")
u=new V.fy("glsl")
u.bb("glsl")
t=new V.fz("html")
t.bb("html")
s=C.b.hA(H.c([r,u,t],[V.cL]),new V.hS(a))
if(s!=null)return s
r=new V.hw("plain")
r.bb("plain")
return r},
dd:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.c([],[P.u])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(J.cy(s).a7(s,"+")){b0[t]=C.a.af(s,1)
a6.push(1)
u=!0}else if(C.a.a7(s,"-")){b0[t]=C.a.af(s,1)
a6.push(-1)
u=!0}else a6.push(0)}r=this.e2(a8)
r.dQ(0,b0)
q=document
p=q.createElement("div")
p.className="codeTableScroll"
o=q.createElement("table")
o.className="codeTable"
p.appendChild(o)
this.a.appendChild(p)
n=P.eu(C.y,a7,C.e,!1)
m=q.createElement("tr")
m.className="headerRow"
l=q.createElement("td")
l.className="headerCell"
l.colSpan=u?3:2
k=q.createElement("div")
k.className="tableHeader"
k.id=n
j=W.kU()
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
for(a2=C.b.gT(s);a2.w();)d.appendChild(a2.gH(a2))
f.appendChild(e)
f.appendChild(d)
o.appendChild(f)}},
h6:function(a){var u,t,s,r,q,p="auto",o=document,n=o.createElement("table")
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
fY:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=R.im()
u.c=u.j(0,q)
t=u.j(0,q).k(0,p)
s=T.p(new H.m("*"))
t.a.push(s)
t.c=!0
t=u.j(0,p).k(0,p)
s=new T.a4()
r=[T.b8]
s.a=H.c([],r)
t.a.push(s)
t=T.p(new H.m("*"))
s.a.push(t)
t=u.j(0,p).k(0,"BoldEnd")
s=T.p(new H.m("*"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,o)
s=T.p(new H.m("_"))
t.a.push(s)
t.c=!0
t=u.j(0,o).k(0,o)
s=new T.a4()
s.a=H.c([],r)
t.a.push(s)
t=T.p(new H.m("_"))
s.a.push(t)
t=u.j(0,o).k(0,n)
s=T.p(new H.m("_"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,m)
s=T.p(new H.m("`"))
t.a.push(s)
t.c=!0
t=u.j(0,m).k(0,m)
s=new T.a4()
s.a=H.c([],r)
t.a.push(s)
t=T.p(new H.m("`"))
s.a.push(t)
t=u.j(0,m).k(0,"CodeEnd")
s=T.p(new H.m("`"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,l)
s=T.p(new H.m("["))
t.a.push(s)
t.c=!0
t=u.j(0,l).k(0,k)
s=T.p(new H.m("|"))
t.a.push(s)
s=u.j(0,l).k(0,j)
t=T.p(new H.m("]"))
s.a.push(t)
s.c=!0
s=u.j(0,l).k(0,l)
t=new T.a4()
t.a=H.c([],r)
s.a.push(t)
s=T.p(new H.m("|]"))
t.a.push(s)
s=u.j(0,k).k(0,j)
t=T.p(new H.m("]"))
s.a.push(t)
s.c=!0
s=u.j(0,k).k(0,k)
t=new T.a4()
t.a=H.c([],r)
s.a.push(t)
s=T.p(new H.m("|]"))
t.a.push(s)
u.j(0,q).k(0,i).a.push(new T.aB())
s=u.j(0,i).k(0,i)
t=new T.a4()
t.a=H.c([],r)
s.a.push(t)
s=T.p(new H.m("*_`["))
t.a.push(s)
s=u.j(0,"BoldEnd")
s.d=s.a.N(p)
s=u.j(0,n)
s.d=s.a.N(o)
s=u.j(0,"CodeEnd")
s.d=s.a.N(m)
s=u.j(0,j)
s.d=s.a.N("Link")
s=u.j(0,i)
s.d=s.a.N(i)
this.b=u}}
V.hR.prototype={
$1:function(a){P.lr(C.n,new V.hQ(this.a))}}
V.hQ.prototype={
$0:function(){var u=C.d.a0(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
V.hS.prototype={
$1:function(a){return a.a===this.a}}
V.ia.prototype={
dc:function(a,b,c){var u,t,s,r,q=this,p=W.kl(null)
p.src=b
p.height=p.width=64
u=p.style
u.border="solid 2px white"
u=J.eJ(q.c)
t=u.gl(u)
W.U(p,"click",new V.ic(q,p,b,t),!1)
J.eJ(q.c).n(0,p)
J.eJ(q.c).n(0,document.createElement("br"))
s=P.lv().gco().i(0,H.e(q.a))
if(s==null){q.d9(t)
r=c}else r=P.cB(s,null,null)===t
if(r)p.click()},
n:function(a,b){return this.dc(a,b,!1)},
d9:function(a){var u,t,s=P.lv(),r=P.k,q=P.mL(s.gco(),r,r)
q.m(0,this.a,""+a)
u=s.dU(0,q)
r=window.history
t=u.h(0)
r.toString
r.replaceState(new P.jx([],[]).cv(""),"",t)}}
V.ic.prototype={
$1:function(a){var u=this,t=u.a,s=J.eJ(t.c)
s.A(s,new V.ib())
s=u.b.style
s.border="solid 2px black"
t.d.$1(u.c)
t.d9(u.d)}}
V.ib.prototype={
$1:function(a){var u
if(!!J.N(a).$ibv){u=a.style
u.border="solid 2px white"}}}
X.k3.prototype={
$1:function(a){this.a.sdj(this.b.f.hK(a))}}
X.k4.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.a,r=[P.k]
u.dd("Vertex Shader for distort","glsl",0,H.c((s==null?null:s.c).split("\n"),r))
t=t.a
u.dd("Fragment Shader for distort","glsl",0,H.c((t==null?null:t.d).split("\n"),r))}};(function aliases(){var u=J.a.prototype
u.eb=u.h
u=J.d0.prototype
u.ed=u.h
u=P.h.prototype
u.ec=u.bs
u=W.P.prototype
u.bw=u.ak
u=W.ec.prototype
u.ee=u.at
u=T.cX.prototype
u.ea=u.aB
u.cD=u.h
u=O.d8.prototype
u.cE=u.ax
u=O.as.prototype
u.cF=u.ax})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"od","nm",7)
u(P,"oe","nn",7)
u(P,"of","no",7)
t(P,"lT","ob",9)
s(W,"os",4,null,["$4"],["np"],16,0)
s(W,"ot",4,null,["$4"],["nq"],16,0)
var m
r(m=E.aE.prototype,"gdO",0,0,null,["$1","$0"],["dP","hT"],0,0)
r(m,"gdM",0,0,null,["$1","$0"],["dN","hQ"],0,0)
q(m,"ghO","hP",4)
q(m,"ghR","hS",4)
r(m=E.dv.prototype,"gcH",0,0,null,["$1","$0"],["cJ","cI"],0,0)
p(m,"gi6","dV",9)
o(m=X.dF.prototype,"gf7","f8",5)
o(m,"geW","eX",5)
o(m,"gf1","f2",2)
o(m,"gfb","fc",10)
o(m,"gf9","fa",10)
o(m,"gff","fg",2)
o(m,"gfj","fk",2)
o(m,"gf5","f6",2)
o(m,"gfh","fi",2)
o(m,"gf3","f4",2)
o(m,"gfl","fm",19)
o(m,"gfn","fo",5)
o(m,"gfG","fH",6)
o(m,"gfC","fD",6)
o(m,"gfE","fF",6)
r(D.bs.prototype,"gel",0,0,null,["$1","$0"],["av","em"],0,0)
r(m=D.d2.prototype,"gcW",0,0,null,["$1","$0"],["cX","fd"],0,0)
o(m,"gfp","fq",20)
q(m,"geQ","eR",11)
q(m,"gfu","fv",11)
n(V.F.prototype,"gl","ce",12)
n(V.C.prototype,"gl","ce",12)
r(m=U.bT.prototype,"gaL",0,0,null,["$1","$0"],["P","aa"],0,0)
q(m,"geO","eP",13)
q(m,"gfs","ft",13)
r(m=U.dG.prototype,"gaL",0,0,null,["$1","$0"],["P","aa"],0,0)
o(m,"gbH","bI",1)
o(m,"gbJ","bK",1)
o(m,"gbL","bM",1)
r(m=U.dH.prototype,"gaL",0,0,null,["$1","$0"],["P","aa"],0,0)
o(m,"gbH","bI",1)
o(m,"gbJ","bK",1)
o(m,"gbL","bM",1)
o(m,"geH","eI",1)
o(m,"geJ","eK",1)
o(m,"gh4","h5",1)
o(m,"gh2","h3",1)
o(m,"gh0","h1",1)
o(U.dI.prototype,"geM","eN",1)
r(m=M.cM.prototype,"gY",0,0,null,["$1","$0"],["Z","aV"],0,0)
q(m,"gfw","fz",14)
q(m,"gfA","fB",14)
r(M.cO.prototype,"gY",0,0,null,["$1","$0"],["Z","aV"],0,0)
r(m=M.cT.prototype,"gY",0,0,null,["$1","$0"],["Z","aV"],0,0)
q(m,"geY","eZ",4)
q(m,"gf_","f0",4)
r(m=O.d7.prototype,"gby",0,0,null,["$1","$0"],["a4","ap"],0,0)
r(m,"gfP",0,0,null,["$1","$0"],["cZ","fQ"],0,0)
q(m,"geS","eT",15)
q(m,"geU","eV",15)
r(O.dm.prototype,"gby",0,0,null,["$1","$0"],["a4","ap"],0,0)
r(X.df.prototype,"geq",0,0,null,["$1","$0"],["a1","er"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.a_,null)
s(P.a_,[H.kp,J.a,J.a3,P.e_,P.h,H.bX,P.fG,H.cV,H.iF,H.f2,H.is,P.bt,H.bP,H.eh,P.aH,H.fN,H.fP,H.fI,P.en,P.dK,P.ds,P.i1,P.dw,P.jN,P.jr,P.jl,P.dZ,P.r,P.jF,P.fW,P.eZ,P.fC,P.jL,P.jK,P.az,P.a6,P.aa,P.b0,P.hu,P.dq,P.dS,P.fv,P.fx,P.o,P.R,P.bb,P.k,P.S,P.bD,P.iH,P.ju,W.f6,W.ck,W.J,W.dd,W.ec,W.jA,W.cW,W.aL,W.jq,W.ev,P.jw,P.es,P.jm,P.bB,T.aB,T.cX,T.b8,T.hB,T.hK,R.dr,R.dx,R.dy,R.il,O.aC,O.bZ,E.eV,E.aE,E.hC,E.dv,Z.dJ,Z.ch,Z.bq,Z.bV,Z.aU,D.eY,D.bu,D.W,X.cK,X.d1,X.fK,X.fT,X.ae,X.hi,X.io,X.dF,D.bs,D.a7,D.hy,D.hX,V.V,V.aj,V.fm,V.bY,V.aI,V.a0,V.X,V.bd,V.dj,V.F,V.C,U.dG,U.dH,U.dI,M.cO,M.cT,M.al,A.cI,A.eN,A.Z,A.cQ,A.dh,A.dp,A.h2,A.cd,A.ce,A.cf,A.dB,A.iA,F.b1,F.fp,F.d3,F.fM,F.dg,F.hL,F.hM,F.hN,F.hO,F.bj,F.iU,F.iV,F.iY,F.j_,F.j0,F.j1,O.du,O.d8,O.h3,T.ig,X.i5,X.ke,X.fD,X.df,V.cL,V.hP,V.ia])
s(J.a,[J.fH,J.d_,J.d0,J.b4,J.bW,J.b5,H.c1,H.ba,W.f,W.eK,W.bo,W.aq,W.H,W.dM,W.ad,W.fb,W.fe,W.dO,W.cS,W.dQ,W.fg,W.i,W.dT,W.aF,W.fA,W.dV,W.aG,W.fS,W.hc,W.e0,W.e1,W.aJ,W.e2,W.e5,W.aM,W.e9,W.eb,W.aP,W.ed,W.aQ,W.ei,W.av,W.el,W.ik,W.aS,W.eo,W.iq,W.iM,W.ew,W.ey,W.eA,W.eC,W.eE,P.b7,P.dX,P.bc,P.e7,P.hA,P.ej,P.bf,P.eq,P.eO,P.dL,P.dk,P.ef])
s(J.d0,[J.hv,J.bC,J.b6])
t(J.ko,J.b4)
s(J.bW,[J.cZ,J.cY])
t(P.fR,P.e_)
s(P.fR,[H.dD,W.jb,W.a2,P.fr])
t(H.m,H.dD)
s(P.h,[H.fj,H.fX,H.ci])
s(H.fj,[H.d5,H.fO])
s(P.fG,[H.fY,H.j5])
t(H.fZ,H.d5)
t(H.f3,H.f2)
s(P.bt,[H.hr,H.fJ,H.iE,H.eX,H.hI,P.de,P.ai,P.iG,P.iC,P.c8,P.f1,P.f9])
s(H.bP,[H.ka,H.i6,H.k_,H.k0,H.k1,P.j7,P.j6,P.j8,P.j9,P.jE,P.jD,P.jU,P.jo,P.jp,P.fQ,P.fV,P.fh,P.fi,P.iL,P.iI,P.iJ,P.iK,P.jG,P.jH,P.jJ,P.jI,P.jP,P.jO,P.jQ,P.jR,W.fk,W.he,W.hg,W.hH,W.i0,W.jg,W.hp,W.ho,W.js,W.jt,W.jC,W.jM,P.jy,P.jV,P.fs,P.ft,P.eQ,E.hD,E.hE,E.hF,E.ij,D.fn,D.fo,F.k9,F.jW,F.j3,F.j2,F.iW,F.iX,O.h6,O.h7,O.h8,O.h9,O.ha,O.hb,T.ii,T.ih,V.k6,V.hR,V.hQ,V.hS,V.ic,V.ib,X.k3,X.k4])
s(H.i6,[H.hZ,H.bN])
t(P.fU,P.aH)
s(P.fU,[H.O,W.ja])
t(H.d9,H.ba)
s(H.d9,[H.cm,H.co])
t(H.cn,H.cm)
t(H.c2,H.cn)
t(H.cp,H.co)
t(H.da,H.cp)
s(H.da,[H.hj,H.hk,H.hl,H.hm,H.hn,H.db,H.c3])
t(P.jn,P.jN)
t(P.jk,P.jr)
t(P.et,P.fW)
t(P.dE,P.et)
s(P.eZ,[P.eT,P.fl])
t(P.f4,P.i1)
s(P.f4,[P.eU,P.fB,P.iP,P.iO])
t(P.iN,P.fl)
s(P.aa,[P.M,P.u])
s(P.ai,[P.bz,P.fE])
t(P.jd,P.bD)
s(W.f,[W.E,W.fq,W.c_,W.aO,W.cq,W.aR,W.aw,W.cs,W.j4,W.cj,P.eR,P.bn])
s(W.E,[W.P,W.b_])
s(W.P,[W.n,P.j])
s(W.n,[W.eL,W.eM,W.bp,W.br,W.ak,W.fu,W.bv,W.hJ,W.dt,W.i3,W.i4,W.ca])
t(W.f5,W.aq)
t(W.bQ,W.dM)
s(W.ad,[W.f7,W.f8])
t(W.dP,W.dO)
t(W.cR,W.dP)
t(W.dR,W.dQ)
t(W.ff,W.dR)
t(W.ar,W.bo)
t(W.dU,W.dT)
t(W.bS,W.dU)
t(W.dW,W.dV)
t(W.bU,W.dW)
t(W.bg,W.i)
s(W.bg,[W.bw,W.au,W.bA])
t(W.hd,W.e0)
t(W.hf,W.e1)
t(W.e3,W.e2)
t(W.hh,W.e3)
t(W.e6,W.e5)
t(W.dc,W.e6)
t(W.ea,W.e9)
t(W.hx,W.ea)
t(W.hG,W.eb)
t(W.cr,W.cq)
t(W.hV,W.cr)
t(W.ee,W.ed)
t(W.hW,W.ee)
t(W.i_,W.ei)
t(W.em,W.el)
t(W.i7,W.em)
t(W.ct,W.cs)
t(W.i8,W.ct)
t(W.ep,W.eo)
t(W.ip,W.ep)
t(W.bk,W.au)
t(W.ex,W.ew)
t(W.jc,W.ex)
t(W.dN,W.cS)
t(W.ez,W.ey)
t(W.jh,W.ez)
t(W.eB,W.eA)
t(W.e4,W.eB)
t(W.eD,W.eC)
t(W.jv,W.eD)
t(W.eF,W.eE)
t(W.jz,W.eF)
t(W.je,W.ja)
t(W.jf,P.ds)
t(W.jB,W.ec)
t(P.jx,P.jw)
t(P.a9,P.jm)
t(P.dY,P.dX)
t(P.fL,P.dY)
t(P.e8,P.e7)
t(P.hs,P.e8)
t(P.c7,P.j)
t(P.ek,P.ej)
t(P.i2,P.ek)
t(P.er,P.eq)
t(P.ir,P.er)
t(P.eP,P.dL)
t(P.ht,P.bn)
t(P.eg,P.ef)
t(P.hY,P.eg)
s(T.cX,[T.a4,R.dA])
s(E.eV,[Z.cJ,A.dl,T.cb])
s(D.W,[D.b2,D.b3,D.y,X.hz])
s(X.hz,[X.d6,X.aK,X.c0,X.dz])
s(O.aC,[D.d2,U.bT,M.cM])
s(D.eY,[U.f0,U.a8])
t(U.cN,U.a8)
s(A.dl,[A.fd,A.h_,A.hU])
s(A.dB,[A.dC,A.ix,A.iy,A.iz,A.iv,A.T,A.iw,A.I,A.cc,A.iB,A.bh,A.a1,A.aT,A.bi])
t(F.hT,F.fp)
t(F.iu,F.fM)
t(F.iZ,F.j_)
t(F.hq,F.j0)
s(O.du,[O.fc,O.d7,O.dm])
s(O.d8,[O.h0,O.h1,O.as])
s(O.as,[O.h4,O.h5])
s(T.cb,[T.i9,T.ie])
t(T.id,T.i9)
s(X.i5,[X.eS,X.fw])
s(V.cL,[V.fa,V.fy,V.fz,V.hw])
u(H.dD,H.iF)
u(H.cm,P.r)
u(H.cn,H.cV)
u(H.co,P.r)
u(H.cp,H.cV)
u(P.e_,P.r)
u(P.et,P.jF)
u(W.dM,W.f6)
u(W.dO,P.r)
u(W.dP,W.J)
u(W.dQ,P.r)
u(W.dR,W.J)
u(W.dT,P.r)
u(W.dU,W.J)
u(W.dV,P.r)
u(W.dW,W.J)
u(W.e0,P.aH)
u(W.e1,P.aH)
u(W.e2,P.r)
u(W.e3,W.J)
u(W.e5,P.r)
u(W.e6,W.J)
u(W.e9,P.r)
u(W.ea,W.J)
u(W.eb,P.aH)
u(W.cq,P.r)
u(W.cr,W.J)
u(W.ed,P.r)
u(W.ee,W.J)
u(W.ei,P.aH)
u(W.el,P.r)
u(W.em,W.J)
u(W.cs,P.r)
u(W.ct,W.J)
u(W.eo,P.r)
u(W.ep,W.J)
u(W.ew,P.r)
u(W.ex,W.J)
u(W.ey,P.r)
u(W.ez,W.J)
u(W.eA,P.r)
u(W.eB,W.J)
u(W.eC,P.r)
u(W.eD,W.J)
u(W.eE,P.r)
u(W.eF,W.J)
u(P.dX,P.r)
u(P.dY,W.J)
u(P.e7,P.r)
u(P.e8,W.J)
u(P.ej,P.r)
u(P.ek,W.J)
u(P.eq,P.r)
u(P.er,W.J)
u(P.dL,P.aH)
u(P.ef,P.r)
u(P.eg,W.J)})()
var v={mangledGlobalNames:{u:"int",M:"double",aa:"num",k:"String",az:"bool",bb:"Null",o:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.W]},{func:1,ret:-1,args:[D.W]},{func:1,ret:-1,args:[W.au]},{func:1,ret:P.bb,args:[,,]},{func:1,ret:-1,args:[P.u,[P.h,E.aE]]},{func:1,ret:-1,args:[W.i]},{func:1,ret:-1,args:[W.bA]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bw]},{func:1,ret:-1,args:[P.u,[P.h,D.a7]]},{func:1,ret:P.M},{func:1,ret:-1,args:[P.u,[P.h,U.a8]]},{func:1,ret:-1,args:[P.u,[P.h,M.al]]},{func:1,ret:-1,args:[P.u,[P.h,V.aI]]},{func:1,ret:P.az,args:[W.P,P.k,P.k,W.ck]},{func:1,ret:P.bb,args:[,]},{func:1,ret:P.bB,args:[,,]},{func:1,ret:-1,args:[W.bk]},{func:1,ret:P.az,args:[[P.h,D.a7]]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.t=W.bp.prototype
C.i=W.br.prototype
C.O=W.ak.prototype
C.R=J.a.prototype
C.b=J.b4.prototype
C.S=J.cY.prototype
C.c=J.cZ.prototype
C.j=J.d_.prototype
C.d=J.bW.prototype
C.a=J.b5.prototype
C.T=J.b6.prototype
C.B=J.hv.prototype
C.q=P.dk.prototype
C.C=W.dt.prototype
C.r=J.bC.prototype
C.D=W.bk.prototype
C.E=W.cj.prototype
C.Z=new P.eU()
C.F=new P.eT()
C.u=function getTagFallback(o) {
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
C.v=function(hooks) { return hooks; }

C.M=new P.hu()
C.e=new P.iN()
C.N=new P.iP()
C.f=new P.jn()
C.n=new P.b0(0)
C.P=new P.b0(5e6)
C.Q=new P.fC("element",!1,!1,!1)
C.w=H.c(u([127,2047,65535,1114111]),[P.u])
C.k=H.c(u([0,0,32776,33792,1,10240,0,0]),[P.u])
C.U=H.c(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.k])
C.l=H.c(u([0,0,65490,45055,65535,34815,65534,18431]),[P.u])
C.m=H.c(u([0,0,26624,1023,65534,2047,65534,2047]),[P.u])
C.V=H.c(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.k])
C.x=H.c(u([]),[P.k])
C.W=H.c(u([0,0,32722,12287,65534,34815,65534,18431]),[P.u])
C.y=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.u])
C.h=H.c(u([0,0,24576,1023,65534,34815,65534,18431]),[P.u])
C.z=H.c(u([0,0,32754,11263,65534,34815,65534,18431]),[P.u])
C.X=H.c(u([0,0,32722,12287,65535,34815,65534,18431]),[P.u])
C.A=H.c(u([0,0,65490,12287,65535,34815,65534,18431]),[P.u])
C.o=H.c(u(["bind","if","ref","repeat","syntax"]),[P.k])
C.p=H.c(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.k])
C.Y=new H.f3(0,{},C.x,[P.k,P.k])})();(function staticFields(){$.ao=0
$.bO=null
$.kX=null
$.lW=null
$.lS=null
$.m_=null
$.jX=null
$.k2=null
$.kL=null
$.bG=null
$.cv=null
$.cw=null
$.kG=!1
$.am=C.f
$.a5=[]
$.aD=null
$.kj=null
$.l3=null
$.l2=null
$.cl=P.kr(P.k,P.fx)
$.l8=null
$.lc=null
$.lg=null
$.c4=null
$.lm=null
$.ly=null
$.lB=null
$.lA=null
$.iQ=null
$.iR=null
$.iS=null
$.lz=null
$.lf=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"oN","m3",function(){return H.lV("_$dart_dartClosure")})
u($,"oO","kP",function(){return H.lV("_$dart_js")})
u($,"oP","m4",function(){return H.ax(H.it({
toString:function(){return"$receiver$"}}))})
u($,"oQ","m5",function(){return H.ax(H.it({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"oR","m6",function(){return H.ax(H.it(null))})
u($,"oS","m7",function(){return H.ax(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"oV","ma",function(){return H.ax(H.it(void 0))})
u($,"oW","mb",function(){return H.ax(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"oU","m9",function(){return H.ax(H.lt(null))})
u($,"oT","m8",function(){return H.ax(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"oY","md",function(){return H.ax(H.lt(void 0))})
u($,"oX","mc",function(){return H.ax(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"pb","kQ",function(){return P.nl()})
u($,"oZ","me",function(){return P.nh()})
u($,"pc","mi",function(){return H.mR(H.bF(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.u])))})
u($,"pe","mk",function(){return P.n4("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"pf","ml",function(){return P.nK()})
u($,"pd","mj",function(){return P.l7(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.k)})
u($,"p5","mh",function(){return Z.af(0)})
u($,"p_","mf",function(){return Z.af(511)})
u($,"p7","ab",function(){return Z.af(1)})
u($,"p6","aY",function(){return Z.af(2)})
u($,"p1","aX",function(){return Z.af(4)})
u($,"p8","aA",function(){return Z.af(8)})
u($,"p9","bm",function(){return Z.af(16)})
u($,"p2","cD",function(){return Z.af(32)})
u($,"p3","cE",function(){return Z.af(64)})
u($,"p4","mg",function(){return Z.af(96)})
u($,"pa","bM",function(){return Z.af(128)})
u($,"p0","aW",function(){return Z.af(256)})
u($,"oM","m2",function(){return new V.fm(1e-9)})
u($,"oL","A",function(){return $.m2()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.c1,DataView:H.ba,ArrayBufferView:H.ba,Float32Array:H.c2,Float64Array:H.c2,Int16Array:H.hj,Int32Array:H.hk,Int8Array:H.hl,Uint16Array:H.hm,Uint32Array:H.hn,Uint8ClampedArray:H.db,CanvasPixelArray:H.db,Uint8Array:H.c3,HTMLAudioElement:W.n,HTMLBRElement:W.n,HTMLBaseElement:W.n,HTMLButtonElement:W.n,HTMLContentElement:W.n,HTMLDListElement:W.n,HTMLDataElement:W.n,HTMLDataListElement:W.n,HTMLDetailsElement:W.n,HTMLDialogElement:W.n,HTMLEmbedElement:W.n,HTMLFieldSetElement:W.n,HTMLHRElement:W.n,HTMLHeadElement:W.n,HTMLHeadingElement:W.n,HTMLHtmlElement:W.n,HTMLIFrameElement:W.n,HTMLInputElement:W.n,HTMLLIElement:W.n,HTMLLabelElement:W.n,HTMLLegendElement:W.n,HTMLLinkElement:W.n,HTMLMapElement:W.n,HTMLMediaElement:W.n,HTMLMenuElement:W.n,HTMLMetaElement:W.n,HTMLMeterElement:W.n,HTMLModElement:W.n,HTMLOListElement:W.n,HTMLObjectElement:W.n,HTMLOptGroupElement:W.n,HTMLOptionElement:W.n,HTMLOutputElement:W.n,HTMLParagraphElement:W.n,HTMLParamElement:W.n,HTMLPictureElement:W.n,HTMLPreElement:W.n,HTMLProgressElement:W.n,HTMLQuoteElement:W.n,HTMLScriptElement:W.n,HTMLShadowElement:W.n,HTMLSlotElement:W.n,HTMLSourceElement:W.n,HTMLSpanElement:W.n,HTMLStyleElement:W.n,HTMLTableCaptionElement:W.n,HTMLTableCellElement:W.n,HTMLTableDataCellElement:W.n,HTMLTableHeaderCellElement:W.n,HTMLTableColElement:W.n,HTMLTextAreaElement:W.n,HTMLTimeElement:W.n,HTMLTitleElement:W.n,HTMLTrackElement:W.n,HTMLUListElement:W.n,HTMLUnknownElement:W.n,HTMLVideoElement:W.n,HTMLDirectoryElement:W.n,HTMLFontElement:W.n,HTMLFrameElement:W.n,HTMLFrameSetElement:W.n,HTMLMarqueeElement:W.n,HTMLElement:W.n,AccessibleNodeList:W.eK,HTMLAnchorElement:W.eL,HTMLAreaElement:W.eM,Blob:W.bo,HTMLBodyElement:W.bp,HTMLCanvasElement:W.br,CDATASection:W.b_,CharacterData:W.b_,Comment:W.b_,ProcessingInstruction:W.b_,Text:W.b_,CSSPerspective:W.f5,CSSCharsetRule:W.H,CSSConditionRule:W.H,CSSFontFaceRule:W.H,CSSGroupingRule:W.H,CSSImportRule:W.H,CSSKeyframeRule:W.H,MozCSSKeyframeRule:W.H,WebKitCSSKeyframeRule:W.H,CSSKeyframesRule:W.H,MozCSSKeyframesRule:W.H,WebKitCSSKeyframesRule:W.H,CSSMediaRule:W.H,CSSNamespaceRule:W.H,CSSPageRule:W.H,CSSRule:W.H,CSSStyleRule:W.H,CSSSupportsRule:W.H,CSSViewportRule:W.H,CSSStyleDeclaration:W.bQ,MSStyleCSSProperties:W.bQ,CSS2Properties:W.bQ,CSSImageValue:W.ad,CSSKeywordValue:W.ad,CSSNumericValue:W.ad,CSSPositionValue:W.ad,CSSResourceValue:W.ad,CSSUnitValue:W.ad,CSSURLImageValue:W.ad,CSSStyleValue:W.ad,CSSMatrixComponent:W.aq,CSSRotation:W.aq,CSSScale:W.aq,CSSSkew:W.aq,CSSTranslation:W.aq,CSSTransformComponent:W.aq,CSSTransformValue:W.f7,CSSUnparsedValue:W.f8,DataTransferItemList:W.fb,HTMLDivElement:W.ak,DOMException:W.fe,ClientRectList:W.cR,DOMRectList:W.cR,DOMRectReadOnly:W.cS,DOMStringList:W.ff,DOMTokenList:W.fg,Element:W.P,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.ar,FileList:W.bS,FileWriter:W.fq,HTMLFormElement:W.fu,Gamepad:W.aF,History:W.fA,HTMLCollection:W.bU,HTMLFormControlsCollection:W.bU,HTMLOptionsCollection:W.bU,ImageData:W.aG,HTMLImageElement:W.bv,KeyboardEvent:W.bw,Location:W.fS,MediaList:W.hc,MessagePort:W.c_,MIDIInputMap:W.hd,MIDIOutputMap:W.hf,MimeType:W.aJ,MimeTypeArray:W.hh,PointerEvent:W.au,MouseEvent:W.au,DragEvent:W.au,Document:W.E,DocumentFragment:W.E,HTMLDocument:W.E,ShadowRoot:W.E,XMLDocument:W.E,Attr:W.E,DocumentType:W.E,Node:W.E,NodeList:W.dc,RadioNodeList:W.dc,Plugin:W.aM,PluginArray:W.hx,RTCStatsReport:W.hG,HTMLSelectElement:W.hJ,SourceBuffer:W.aO,SourceBufferList:W.hV,SpeechGrammar:W.aP,SpeechGrammarList:W.hW,SpeechRecognitionResult:W.aQ,Storage:W.i_,CSSStyleSheet:W.av,StyleSheet:W.av,HTMLTableElement:W.dt,HTMLTableRowElement:W.i3,HTMLTableSectionElement:W.i4,HTMLTemplateElement:W.ca,TextTrack:W.aR,TextTrackCue:W.aw,VTTCue:W.aw,TextTrackCueList:W.i7,TextTrackList:W.i8,TimeRanges:W.ik,Touch:W.aS,TouchEvent:W.bA,TouchList:W.ip,TrackDefaultList:W.iq,CompositionEvent:W.bg,FocusEvent:W.bg,TextEvent:W.bg,UIEvent:W.bg,URL:W.iM,VideoTrackList:W.j4,WheelEvent:W.bk,Window:W.cj,DOMWindow:W.cj,CSSRuleList:W.jc,ClientRect:W.dN,DOMRect:W.dN,GamepadList:W.jh,NamedNodeMap:W.e4,MozNamedAttrMap:W.e4,SpeechRecognitionResultList:W.jv,StyleSheetList:W.jz,SVGLength:P.b7,SVGLengthList:P.fL,SVGNumber:P.bc,SVGNumberList:P.hs,SVGPointList:P.hA,SVGScriptElement:P.c7,SVGStringList:P.i2,SVGAElement:P.j,SVGAnimateElement:P.j,SVGAnimateMotionElement:P.j,SVGAnimateTransformElement:P.j,SVGAnimationElement:P.j,SVGCircleElement:P.j,SVGClipPathElement:P.j,SVGDefsElement:P.j,SVGDescElement:P.j,SVGDiscardElement:P.j,SVGEllipseElement:P.j,SVGFEBlendElement:P.j,SVGFEColorMatrixElement:P.j,SVGFEComponentTransferElement:P.j,SVGFECompositeElement:P.j,SVGFEConvolveMatrixElement:P.j,SVGFEDiffuseLightingElement:P.j,SVGFEDisplacementMapElement:P.j,SVGFEDistantLightElement:P.j,SVGFEFloodElement:P.j,SVGFEFuncAElement:P.j,SVGFEFuncBElement:P.j,SVGFEFuncGElement:P.j,SVGFEFuncRElement:P.j,SVGFEGaussianBlurElement:P.j,SVGFEImageElement:P.j,SVGFEMergeElement:P.j,SVGFEMergeNodeElement:P.j,SVGFEMorphologyElement:P.j,SVGFEOffsetElement:P.j,SVGFEPointLightElement:P.j,SVGFESpecularLightingElement:P.j,SVGFESpotLightElement:P.j,SVGFETileElement:P.j,SVGFETurbulenceElement:P.j,SVGFilterElement:P.j,SVGForeignObjectElement:P.j,SVGGElement:P.j,SVGGeometryElement:P.j,SVGGraphicsElement:P.j,SVGImageElement:P.j,SVGLineElement:P.j,SVGLinearGradientElement:P.j,SVGMarkerElement:P.j,SVGMaskElement:P.j,SVGMetadataElement:P.j,SVGPathElement:P.j,SVGPatternElement:P.j,SVGPolygonElement:P.j,SVGPolylineElement:P.j,SVGRadialGradientElement:P.j,SVGRectElement:P.j,SVGSetElement:P.j,SVGStopElement:P.j,SVGStyleElement:P.j,SVGSVGElement:P.j,SVGSwitchElement:P.j,SVGSymbolElement:P.j,SVGTSpanElement:P.j,SVGTextContentElement:P.j,SVGTextElement:P.j,SVGTextPathElement:P.j,SVGTextPositioningElement:P.j,SVGTitleElement:P.j,SVGUseElement:P.j,SVGViewElement:P.j,SVGGradientElement:P.j,SVGComponentTransferFunctionElement:P.j,SVGFEDropShadowElement:P.j,SVGMPathElement:P.j,SVGElement:P.j,SVGTransform:P.bf,SVGTransformList:P.ir,AudioBuffer:P.eO,AudioParamMap:P.eP,AudioTrackList:P.eR,AudioContext:P.bn,webkitAudioContext:P.bn,BaseAudioContext:P.bn,OfflineAudioContext:P.ht,WebGL2RenderingContext:P.dk,SQLResultSetRowList:P.hY})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.d9.$nativeSuperclassTag="ArrayBufferView"
H.cm.$nativeSuperclassTag="ArrayBufferView"
H.cn.$nativeSuperclassTag="ArrayBufferView"
H.c2.$nativeSuperclassTag="ArrayBufferView"
H.co.$nativeSuperclassTag="ArrayBufferView"
H.cp.$nativeSuperclassTag="ArrayBufferView"
H.da.$nativeSuperclassTag="ArrayBufferView"
W.cq.$nativeSuperclassTag="EventTarget"
W.cr.$nativeSuperclassTag="EventTarget"
W.cs.$nativeSuperclassTag="EventTarget"
W.ct.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(X.lY,[])
else X.lY([])})})()
//# sourceMappingURL=test.dart.js.map
