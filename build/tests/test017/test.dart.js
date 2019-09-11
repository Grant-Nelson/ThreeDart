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
a[c]=function(){a[c]=function(){H.q4(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lQ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lQ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lQ(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={ls:function ls(){},
kR:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
hp:function(){return new P.d2("No element")},
o0:function(){return new P.d2("Too many elements")},
ej:function(a,b,c,d,e){if(c-b<=32)H.ou(a,b,c,d,e)
else H.ot(a,b,c,d,e)},
ou:function(a,b,c,d,e){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.e(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.e(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.a5()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.e(a,q)
C.a.k(a,s,a[q])
s=q}C.a.k(a,s,t)}},
ot:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.d.ad(a4-a3+1,6),d=a3+e,c=a4-e,b=C.d.ad(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
if(d<0||d>=a1)return H.e(a2,d)
u=a2[d]
if(a<0||a>=a1)return H.e(a2,a)
t=a2[a]
if(b<0||b>=a1)return H.e(a2,b)
s=a2[b]
if(a0<0||a0>=a1)return H.e(a2,a0)
r=a2[a0]
if(c<0||c>=a1)return H.e(a2,c)
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
r=p}C.a.k(a2,d,u)
C.a.k(a2,b,s)
C.a.k(a2,c,q)
if(a3<0||a3>=a2.length)return H.e(a2,a3)
C.a.k(a2,a,a2[a3])
if(a4<0||a4>=a2.length)return H.e(a2,a4)
C.a.k(a2,a0,a2[a4])
o=a3+1
n=a4-1
if(J.K(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.e(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.R()
if(k<0){if(m!==o){if(o>=a2.length)return H.e(a2,o)
C.a.k(a2,m,a2[o])
C.a.k(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.e(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a5()
if(k>0){--n
continue}else{j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.e(a2,o)
C.a.k(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.e(a2,n)
C.a.k(a2,o,a2[n])
C.a.k(a2,n,l)
n=j
o=i
break}else{if(n>=a1)return H.e(a2,n)
C.a.k(a2,m,a2[n])
C.a.k(a2,n,l)
n=j
break}}}}h=!0}else{for(m=o;m<=n;++m){if(m>=a2.length)return H.e(a2,m)
l=a2[m]
g=a5.$2(l,t)
if(typeof g!=="number")return g.R()
if(g<0){if(m!==o){if(o>=a2.length)return H.e(a2,o)
C.a.k(a2,m,a2[o])
C.a.k(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.a5()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.e(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.a5()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.e(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.R()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.e(a2,o)
C.a.k(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.e(a2,n)
C.a.k(a2,o,a2[n])
C.a.k(a2,n,l)
o=i}else{if(n>=a1)return H.e(a2,n)
C.a.k(a2,m,a2[n])
C.a.k(a2,n,l)}n=j
break}}}}h=!1}a1=o-1
if(a1>=a2.length)return H.e(a2,a1)
C.a.k(a2,a3,a2[a1])
C.a.k(a2,a1,t)
a1=n+1
if(a1<0||a1>=a2.length)return H.e(a2,a1)
C.a.k(a2,a4,a2[a1])
C.a.k(a2,a1,r)
H.ej(a2,a3,o-2,a5,a6)
H.ej(a2,n+2,a4,a5,a6)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.e(a2,o)
if(!J.K(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.e(a2,n)
if(!J.K(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.e(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.e(a2,o)
C.a.k(a2,m,a2[o])
C.a.k(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.e(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.e(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.R()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.e(a2,o)
C.a.k(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.e(a2,n)
C.a.k(a2,o,a2[n])
C.a.k(a2,n,l)
o=i}else{if(n>=a1)return H.e(a2,n)
C.a.k(a2,m,a2[n])
C.a.k(a2,n,l)}n=j
break}}}H.ej(a2,o,n,a5,a6)}else H.ej(a2,o,n,a5,a6)},
t:function t(a){this.a=a},
h4:function h4(){},
c5:function c5(){},
cO:function cO(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
hF:function hF(a,b,c){this.a=a
this.b=b
this.$ti=c},
hG:function hG(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
hH:function hH(a,b,c){this.a=a
this.b=b
this.$ti=c},
df:function df(a,b,c){this.a=a
this.b=b
this.$ti=c},
jF:function jF(a,b,c){this.a=a
this.b=b
this.$ti=c},
c3:function c3(){},
dc:function dc(){},
et:function et(){},
nU:function(){throw H.c(P.J("Cannot modify unmodifiable Map"))},
cw:function(a){var u,t=H.q6(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
pM:function(a){return v.types[H.ae(a)]},
pT:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.T(a).$iL},
i:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.av(a)
if(typeof u!=="string")throw H.c(H.b4(a))
return u},
cY:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
ol:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.e(p,3)
u=H.M(p[3])
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.aj(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.b.F(s,q)|32)>t)return}return parseInt(a,b)},
cZ:function(a){return H.oc(a)+H.lM(H.bW(a),0,null)},
oc:function(a){var u,t,s,r,q,p,o,n=J.T(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.R||!!n.$ich){r=C.u(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cw(t.length>1&&C.b.F(t,0)===36?C.b.af(t,1):t)},
od:function(){if(!!self.location)return self.location.href
return},
mo:function(a){var u,t,s,r,q=J.aH(a)
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
om:function(a){var u,t,s,r=H.d([],[P.l])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.b4(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.d.aZ(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.c(H.b4(s))}return H.mo(r)},
mp:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.b4(s))
if(s<0)throw H.c(H.b4(s))
if(s>65535)return H.om(a)}return H.mo(a)},
on:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
c9:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.aZ(u,10))>>>0,56320|u&1023)}}throw H.c(P.aj(a,0,1114111,null,null))},
c8:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ok:function(a){var u=H.c8(a).getFullYear()+0
return u},
oi:function(a){var u=H.c8(a).getMonth()+1
return u},
oe:function(a){var u=H.c8(a).getDate()+0
return u},
of:function(a){var u=H.c8(a).getHours()+0
return u},
oh:function(a){var u=H.c8(a).getMinutes()+0
return u},
oj:function(a){var u=H.c8(a).getSeconds()+0
return u},
og:function(a){var u=H.c8(a).getMilliseconds()+0
return u},
E:function(a){throw H.c(H.b4(a))},
e:function(a,b){if(a==null)J.aH(a)
throw H.c(H.cq(a,b))},
cq:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aR(!0,b,s,null)
u=H.ae(J.aH(a))
if(!(b<0)){if(typeof u!=="number")return H.E(u)
t=b>=u}else t=!0
if(t)return P.a0(b,a,s,null,u)
return P.ec(b,s)},
pH:function(a,b,c){var u="Invalid value"
if(a>c)return new P.ca(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.ca(a,c,!0,b,"end",u)
return new P.aR(!0,b,"end",null)},
b4:function(a){return new P.aR(!0,a,null,null)},
pC:function(a){if(typeof a!=="number")throw H.c(H.b4(a))
return a},
c:function(a){var u
if(a==null)a=new P.e8()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.nk})
u.name=""}else u.toString=H.nk
return u},
nk:function(){return J.av(this.dartException)},
w:function(a){throw H.c(a)},
u:function(a){throw H.c(P.bp(a))},
bk:function(a){var u,t,s,r,q,p
a=H.ni(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.j2(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
j3:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
mz:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
mj:function(a,b){return new H.i8(a,b==null?null:b.method)},
lt:function(a,b){var u=b==null,t=u?null:b.method
return new H.hs(a,t,u?null:b.receiver)},
am:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.lf(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.aZ(t,16)&8191)===10)switch(s){case 438:return f.$1(H.lt(H.i(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.mj(H.i(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.nn()
q=$.no()
p=$.np()
o=$.nq()
n=$.nt()
m=$.nu()
l=$.ns()
$.nr()
k=$.nw()
j=$.nv()
i=r.ao(u)
if(i!=null)return f.$1(H.lt(H.M(u),i))
else{i=q.ao(u)
if(i!=null){i.method="call"
return f.$1(H.lt(H.M(u),i))}else{i=p.ao(u)
if(i==null){i=o.ao(u)
if(i==null){i=n.ao(u)
if(i==null){i=m.ao(u)
if(i==null){i=l.ao(u)
if(i==null){i=o.ao(u)
if(i==null){i=k.ao(u)
if(i==null){i=j.ao(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.mj(H.M(u),i))}}return f.$1(new H.jf(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.el()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aR(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.el()
return a},
cu:function(a){var u
if(a==null)return new H.f8(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.f8(a)},
pL:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.k(0,a[u],a[t])}return b},
pS:function(a,b,c,d,e,f){H.f(a,"$ibJ")
switch(H.ae(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.v("Unsupported number of arguments for wrapped closure"))},
cp:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.pS)
a.$identity=u
return u},
nT:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.iG().constructor.prototype):Object.create(new H.cz(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.b6
if(typeof t!=="number")return t.A()
$.b6=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.m7(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.nP(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.m7(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
nP:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.pM,a)
if(typeof a=="function")if(b)return a
else{u=c?H.m6:H.lj
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.c("Error in functionType of tearoff")},
nQ:function(a,b,c,d){var u=H.lj
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
m7:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nS(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.nQ(t,!r,u,b)
if(t===0){r=$.b6
if(typeof r!=="number")return r.A()
$.b6=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cA
return new Function(r+H.i(q==null?$.cA=H.fM("self"):q)+";return "+p+"."+H.i(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b6
if(typeof r!=="number")return r.A()
$.b6=r+1
o+=r
r="return function("+o+"){return this."
q=$.cA
return new Function(r+H.i(q==null?$.cA=H.fM("self"):q)+"."+H.i(u)+"("+o+");}")()},
nR:function(a,b,c,d){var u=H.lj,t=H.m6
switch(b?-1:a){case 0:throw H.c(H.or("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
nS:function(a,b){var u,t,s,r,q,p,o,n=$.cA
if(n==null)n=$.cA=H.fM("self")
u=$.m5
if(u==null)u=$.m5=H.fM("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.nR(s,!q,t,b)
if(s===1){n="return function(){return this."+H.i(n)+"."+H.i(t)+"(this."+H.i(u)+");"
u=$.b6
if(typeof u!=="number")return u.A()
$.b6=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.i(n)+"."+H.i(t)+"(this."+H.i(u)+", "+o+");"
u=$.b6
if(typeof u!=="number")return u.A()
$.b6=u+1
return new Function(n+u+"}")()},
lQ:function(a,b,c,d,e,f,g){return H.nT(a,b,c,d,!!e,!!f,g)},
lj:function(a){return a.a},
m6:function(a){return a.c},
fM:function(a){var u,t,s,r=new H.cz("self","target","receiver","name"),q=J.lq(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
G:function(a){if(a==null)H.py("boolean expression must not be null")
return a},
M:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.b3(a,"String"))},
pI:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.b3(a,"double"))},
ne:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.b3(a,"num"))},
lN:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.b3(a,"bool"))},
ae:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.b3(a,"int"))},
ng:function(a,b){throw H.c(H.b3(a,H.cw(H.M(b).substring(2))))},
q_:function(a,b){throw H.c(H.nO(a,H.cw(H.M(b).substring(2))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.T(a)[b])return a
H.ng(a,b)},
q:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.T(a)[b]
else u=!0
if(u)return a
H.q_(a,b)},
qQ:function(a){if(a==null)return a
if(!!J.T(a).$ib)return a
throw H.c(H.b3(a,"List<dynamic>"))},
nc:function(a,b){var u
if(a==null)return a
u=J.T(a)
if(!!u.$ib)return a
if(u[b])return a
H.ng(a,b)},
n7:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ae(u)]
else return a.$S()}return},
fx:function(a,b){var u
if(typeof a=="function")return!0
u=H.n7(J.T(a))
if(u==null)return!1
return H.mU(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.lJ)return a
$.lJ=!0
try{if(H.fx(a,b))return a
u=H.l8(b)
t=H.b3(a,u)
throw H.c(t)}finally{$.lJ=!1}},
lS:function(a,b){if(a!=null&&!H.lP(a,b))H.w(H.b3(a,H.l8(b)))
return a},
b3:function(a,b){return new H.j4("TypeError: "+P.dQ(a)+": type '"+H.i(H.n_(a))+"' is not a subtype of type '"+b+"'")},
nO:function(a,b){return new H.fN("CastError: "+P.dQ(a)+": type '"+H.i(H.n_(a))+"' is not a subtype of type '"+b+"'")},
n_:function(a){var u,t=J.T(a)
if(!!t.$icD){u=H.n7(t)
if(u!=null)return H.l8(u)
return"Closure"}return H.cZ(a)},
py:function(a){throw H.c(new H.jG(a))},
q4:function(a){throw H.c(new P.fX(a))},
or:function(a){return new H.is(a)},
n9:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bW:function(a){if(a==null)return
return a.$ti},
qP:function(a,b,c){return H.cv(a["$a"+H.i(c)],H.bW(b))},
ct:function(a,b,c,d){var u=H.cv(a["$a"+H.i(c)],H.bW(b))
return u==null?null:u[d]},
aq:function(a,b,c){var u=H.cv(a["$a"+H.i(b)],H.bW(a))
return u==null?null:u[c]},
r:function(a,b){var u=H.bW(a)
return u==null?null:u[b]},
l8:function(a){return H.bV(a,null)},
bV:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cw(a[0].name)+H.lM(a,1,b)
if(typeof a=="function")return H.cw(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ae(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.e(b,t)
return H.i(b[t])}if('func' in a)return H.p7(a,b)
if('futureOr' in a)return"FutureOr<"+H.bV("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
p7:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.d([],[P.h])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.e(a0,m)
p=C.b.A(p,a0[m])
l=u[q]
if(l!=null&&l!==P.W)p+=" extends "+H.bV(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bV(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bV(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bV(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.pK(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.M(n[g])
i=i+h+H.bV(d[c],a0)+(" "+H.i(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
lM:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.a8("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bV(p,c)}return"<"+u.i(0)+">"},
cv:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
lO:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.bW(a)
t=J.T(a)
if(t[b]==null)return!1
return H.n2(H.cv(t[d],u),null,c,null)},
m:function(a,b,c,d){if(a==null)return a
if(H.lO(a,b,c,d))return a
throw H.c(H.b3(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cw(b.substring(2))+H.lM(c,0,null),v.mangledGlobalNames)))},
n2:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aQ(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aQ(a[t],b,c[t],d))return!1
return!0},
qN:function(a,b,c){return a.apply(b,H.cv(J.T(b)["$a"+H.i(c)],H.bW(b)))},
nb:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="W"||a.name==="N"||a===-1||a===-2||H.nb(u)}return!1},
lP:function(a,b){var u,t
if(a==null)return b==null||b.name==="W"||b.name==="N"||b===-1||b===-2||H.nb(b)
if(b==null||b===-1||b.name==="W"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.lP(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fx(a,b)}u=J.T(a).constructor
t=H.bW(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aQ(u,null,b,null)},
F:function(a,b){if(a!=null&&!H.lP(a,b))throw H.c(H.b3(a,H.l8(b)))
return a},
aQ:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="W"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="W"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aQ(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="N")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aQ("type" in a?a.type:l,b,s,d)
else if(H.aQ(a,b,s,d))return!0
else{if(!('$i'+"cJ" in t.prototype))return!1
r=t.prototype["$a"+"cJ"]
q=H.cv(r,u?a.slice(1):l)
return H.aQ(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.mU(a,b,c,d)
if('func' in a)return c.name==="bJ"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.n2(H.cv(m,u),b,p,d)},
mU:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aQ(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aQ(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aQ(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aQ(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.pY(h,b,g,d)},
pY:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aQ(c[s],d,a[s],b))return!1}return!0},
qO:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
pW:function(a){var u,t,s,r,q=H.M($.na.$1(a)),p=$.kP[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kV[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.M($.n1.$2(a,q))
if(q!=null){p=$.kP[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kV[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.l7(u)
$.kP[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kV[q]=u
return u}if(s==="-"){r=H.l7(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.nf(a,u)
if(s==="*")throw H.c(P.je(q))
if(v.leafTags[q]===true){r=H.l7(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.nf(a,u)},
nf:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lU(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
l7:function(a){return J.lU(a,!1,null,!!a.$iL)},
pX:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.l7(u)
else return J.lU(u,c,null,null)},
pQ:function(){if(!0===$.lT)return
$.lT=!0
H.pR()},
pR:function(){var u,t,s,r,q,p,o,n
$.kP=Object.create(null)
$.kV=Object.create(null)
H.pP()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.nh.$1(q)
if(p!=null){o=H.pX(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
pP:function(){var u,t,s,r,q,p,o=C.G()
o=H.co(C.H,H.co(C.I,H.co(C.v,H.co(C.v,H.co(C.J,H.co(C.K,H.co(C.L(C.u),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.na=new H.kS(r)
$.n1=new H.kT(q)
$.nh=new H.kU(p)},
co:function(a,b){return a(b)||b},
o2:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.c(P.a7("Illegal RegExp pattern ("+String(p)+")",a,null))},
q2:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
pJ:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
ni:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lX:function(a,b,c){var u=H.q3(a,b,c)
return u},
q3:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.ni(b),'g'),H.pJ(c))},
fR:function fR(){},
fS:function fS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
j2:function j2(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
i8:function i8(a,b){this.a=a
this.b=b},
hs:function hs(a,b,c){this.a=a
this.b=b
this.c=c},
jf:function jf(a){this.a=a},
lf:function lf(a){this.a=a},
f8:function f8(a){this.a=a
this.b=null},
cD:function cD(){},
iQ:function iQ(){},
iG:function iG(){},
cz:function cz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j4:function j4(a){this.a=a},
fN:function fN(a){this.a=a},
is:function is(a){this.a=a},
jG:function jG(a){this.a=a},
a6:function a6(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hw:function hw(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hx:function hx(a,b){this.a=a
this.$ti=b},
hy:function hy(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kS:function kS(a){this.a=a},
kT:function kT(a){this.a=a},
kU:function kU(a){this.a=a},
hr:function hr(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cm:function(a){return a},
ob:function(a){return new Int8Array(a)},
bn:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.cq(b,a))},
p5:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.pH(a,b,c))
return b},
cT:function cT(){},
bP:function bP(){},
e4:function e4(){},
cU:function cU(){},
e5:function e5(){},
i0:function i0(){},
i1:function i1(){},
i2:function i2(){},
i3:function i3(){},
i4:function i4(){},
e6:function e6(){},
cV:function cV(){},
dk:function dk(){},
dl:function dl(){},
dm:function dm(){},
dn:function dn(){},
pK:function(a){return J.me(a?Object.keys(a):[],null)},
q6:function(a){return v.mangledGlobalNames[a]},
pZ:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lU:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
kQ:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.lT==null){H.pQ()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.je("Return interceptor for "+H.i(u(a,q))))}s=a.constructor
r=s==null?null:s[$.lY()]
if(r!=null)return r
r=H.pW(a)
if(r!=null)return r
if(typeof a=="function")return C.T
u=Object.getPrototypeOf(a)
if(u==null)return C.B
if(u===Object.prototype)return C.B
if(typeof s=="function"){Object.defineProperty(s,$.lY(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
o1:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.li(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.aj(a,0,4294967295,"length",null))
return J.me(new Array(a),b)},
me:function(a,b){return J.lq(H.d(a,[b]))},
lq:function(a){a.fixed$length=Array
return a},
T:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dT.prototype
return J.dS.prototype}if(typeof a=="string")return J.bN.prototype
if(a==null)return J.dU.prototype
if(typeof a=="boolean")return J.hq.prototype
if(a.constructor==Array)return J.ba.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bO.prototype
return a}if(a instanceof P.W)return a
return J.kQ(a)},
dx:function(a){if(typeof a=="string")return J.bN.prototype
if(a==null)return a
if(a.constructor==Array)return J.ba.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bO.prototype
return a}if(a instanceof P.W)return a
return J.kQ(a)},
fy:function(a){if(a==null)return a
if(a.constructor==Array)return J.ba.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bO.prototype
return a}if(a instanceof P.W)return a
return J.kQ(a)},
n8:function(a){if(typeof a=="number")return J.cN.prototype
if(typeof a=="string")return J.bN.prototype
if(a==null)return a
if(!(a instanceof P.W))return J.ch.prototype
return a},
dy:function(a){if(typeof a=="string")return J.bN.prototype
if(a==null)return a
if(!(a instanceof P.W))return J.ch.prototype
return a},
cs:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bO.prototype
return a}if(a instanceof P.W)return a
return J.kQ(a)},
K:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.T(a).t(a,b)},
m_:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.n8(a).u(a,b)},
dB:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.pT(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.dx(a).j(a,b)},
lg:function(a,b,c){return J.fy(a).k(a,b,c)},
nF:function(a,b){return J.dy(a).F(a,b)},
nG:function(a,b,c){return J.cs(a).hT(a,b,c)},
nH:function(a,b,c,d){return J.cs(a).ip(a,b,c,d)},
nI:function(a,b){return J.dy(a).Z(a,b)},
lh:function(a,b){return J.n8(a).iC(a,b)},
fA:function(a,b){return J.fy(a).K(a,b)},
nJ:function(a,b,c,d){return J.cs(a).iS(a,b,c,d)},
m0:function(a,b){return J.fy(a).H(a,b)},
nK:function(a){return J.cs(a).giy(a)},
m1:function(a){return J.cs(a).gco(a)},
dC:function(a){return J.T(a).gI(a)},
bB:function(a){return J.fy(a).gU(a)},
aH:function(a){return J.dx(a).gn(a)},
m2:function(a){return J.fy(a).jn(a)},
nL:function(a,b){return J.cs(a).jq(a,b)},
nM:function(a,b,c){return J.dy(a).v(a,b,c)},
nN:function(a){return J.dy(a).jz(a)},
av:function(a){return J.T(a).i(a)},
a:function a(){},
hq:function hq(){},
dU:function dU(){},
dV:function dV(){},
ic:function ic(){},
ch:function ch(){},
bO:function bO(){},
ba:function ba(a){this.$ti=a},
lr:function lr(a){this.$ti=a},
aw:function aw(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cN:function cN(){},
dT:function dT(){},
dS:function dS(){},
bN:function bN(){}},P={
oH:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.pz()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.cp(new P.jI(s),1)).observe(u,{childList:true})
return new P.jH(s,u,t)}else if(self.setImmediate!=null)return P.pA()
return P.pB()},
oI:function(a){self.scheduleImmediate(H.cp(new P.jJ(H.n(a,{func:1,ret:-1})),0))},
oJ:function(a){self.setImmediate(H.cp(new P.jK(H.n(a,{func:1,ret:-1})),0))},
oK:function(a){P.lx(C.o,H.n(a,{func:1,ret:-1}))},
lx:function(a,b){var u=C.d.ad(a.a,1000)
return P.oQ(u<0?0:u,b)},
my:function(a,b){var u=C.d.ad(a.a,1000)
return P.oR(u<0?0:u,b)},
oQ:function(a,b){var u=new P.fe()
u.fc(a,b)
return u},
oR:function(a,b){var u=new P.fe()
u.fd(a,b)
return u},
oL:function(a,b){var u,t,s
b.a=1
try{a.eH(new P.jU(b),new P.jV(b),null)}catch(s){u=H.am(s)
t=H.cu(s)
P.q0(new P.jW(b,u,t))}},
mK:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.f(a.c,"$iaP")
if(u>=4){t=b.cd()
b.a=a.a
b.c=a.c
P.di(b,t)}else{t=H.f(b.c,"$ibm")
b.a=2
b.c=a
a.dE(t)}},
di:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.f(g.c,"$iar")
P.kG(i,i,g.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.di(h.a,b)}g=h.a
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
if(m){H.f(q,"$iar")
P.kG(i,i,g.b,q.a,q.b)
return}l=$.a3
if(l!==n)$.a3=n
else l=i
g=b.c
if((g&15)===8)new P.k_(h,u,b,t).$0()
else if(p){if((g&1)!==0)new P.jZ(u,b,q).$0()}else if((g&2)!==0)new P.jY(h,u,b).$0()
if(l!=null)$.a3=l
g=u.b
if(!!J.T(g).$icJ){if(g.a>=4){k=H.f(o.c,"$ibm")
o.c=null
b=o.bv(k)
o.a=g.a
o.c=g.c
h.a=g
continue}else P.mK(g,o)
return}}j=b.b
k=H.f(j.c,"$ibm")
j.c=null
b=j.bv(k)
g=u.a
p=u.b
if(!g){H.F(p,H.r(j,0))
j.a=4
j.c=p}else{H.f(p,"$iar")
j.a=8
j.c=p}h.a=j
g=j}},
pu:function(a,b){if(H.fx(a,{func:1,args:[P.W,P.az]}))return H.n(a,{func:1,ret:null,args:[P.W,P.az]})
if(H.fx(a,{func:1,args:[P.W]}))return H.n(a,{func:1,ret:null,args:[P.W]})
throw H.c(P.li(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
pt:function(){var u,t
for(;u=$.cn,u!=null;){$.dw=null
t=u.b
$.cn=t
if(t==null)$.dv=null
u.a.$0()}},
px:function(){$.lK=!0
try{P.pt()}finally{$.dw=null
$.lK=!1
if($.cn!=null)$.lZ().$1(P.n3())}},
mZ:function(a){var u=new P.eB(a)
if($.cn==null){$.cn=$.dv=u
if(!$.lK)$.lZ().$1(P.n3())}else $.dv=$.dv.b=u},
pw:function(a){var u,t,s=$.cn
if(s==null){P.mZ(a)
$.dw=$.dv
return}u=new P.eB(a)
t=$.dw
if(t==null){u.b=s
$.cn=$.dw=u}else{u.b=t.b
$.dw=t.b=u
if(u.b==null)$.dv=u}},
q0:function(a){var u=null,t=$.a3
if(C.f===t){P.kI(u,u,C.f,a)
return}P.kI(u,u,t,H.n(t.ck(a),{func:1,ret:-1}))},
mx:function(a,b){var u=$.a3
if(u===C.f)return P.lx(a,H.n(b,{func:1,ret:-1}))
return P.lx(a,H.n(u.ck(b),{func:1,ret:-1}))},
ox:function(a,b){var u=$.a3
if(u===C.f)return P.my(a,H.n(b,{func:1,ret:-1,args:[P.bi]}))
return P.my(a,H.n(u.dW(b,P.bi),{func:1,ret:-1,args:[P.bi]}))},
kG:function(a,b,c,d,e){var u={}
u.a=d
P.pw(new P.kH(u,e))},
mV:function(a,b,c,d,e){var u,t=$.a3
if(t===c)return d.$0()
$.a3=c
u=t
try{t=d.$0()
return t}finally{$.a3=u}},
mW:function(a,b,c,d,e,f,g){var u,t=$.a3
if(t===c)return d.$1(e)
$.a3=c
u=t
try{t=d.$1(e)
return t}finally{$.a3=u}},
pv:function(a,b,c,d,e,f,g,h,i){var u,t=$.a3
if(t===c)return d.$2(e,f)
$.a3=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a3=u}},
kI:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.ck(d):c.iz(d,-1)
P.mZ(d)},
jI:function jI(a){this.a=a},
jH:function jH(a,b,c){this.a=a
this.b=b
this.c=c},
jJ:function jJ(a){this.a=a},
jK:function jK(a){this.a=a},
fe:function fe(){this.c=0},
ko:function ko(a,b){this.a=a
this.b=b},
kn:function kn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bm:function bm(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aP:function aP(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
jT:function jT(a,b){this.a=a
this.b=b},
jX:function jX(a,b){this.a=a
this.b=b},
jU:function jU(a){this.a=a},
jV:function jV(a){this.a=a},
jW:function jW(a,b,c){this.a=a
this.b=b
this.c=c},
k_:function k_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k0:function k0(a){this.a=a},
jZ:function jZ(a,b,c){this.a=a
this.b=b
this.c=c},
jY:function jY(a,b,c){this.a=a
this.b=b
this.c=c},
eB:function eB(a){this.a=a
this.b=null},
iJ:function iJ(){},
iL:function iL(a,b){this.a=a
this.b=b},
iM:function iM(a,b){this.a=a
this.b=b},
d3:function d3(){},
iK:function iK(){},
bi:function bi(){},
ar:function ar(a,b){this.a=a
this.b=b},
kx:function kx(){},
kH:function kH(a,b){this.a=a
this.b=b},
k6:function k6(){},
k8:function k8(a,b,c){this.a=a
this.b=b
this.c=c},
k7:function k7(a,b){this.a=a
this.b=b},
k9:function k9(a,b,c){this.a=a
this.b=b
this.c=c},
o4:function(a,b){return new H.a6([a,b])},
lu:function(a,b){return new H.a6([a,b])},
o6:function(a){return H.pL(a,new H.a6([null,null]))},
dY:function(a){return new P.k4([a])},
lE:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
oP:function(a,b,c){var u=new P.eQ(a,b,[c])
u.c=a.e
return u},
o_:function(a,b,c){var u,t
if(P.lL(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.h])
C.a.h($.aB,a)
try{P.p8(a,u)}finally{if(0>=$.aB.length)return H.e($.aB,-1)
$.aB.pop()}t=P.mv(b,H.nc(u,"$ij"),", ")+c
return t.charCodeAt(0)==0?t:t},
lp:function(a,b,c){var u,t
if(P.lL(a))return b+"..."+c
u=new P.a8(b)
C.a.h($.aB,a)
try{t=u
t.a=P.mv(t.a,a,", ")}finally{if(0>=$.aB.length)return H.e($.aB,-1)
$.aB.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
lL:function(a){var u,t
for(u=$.aB.length,t=0;t<u;++t)if(a===$.aB[t])return!0
return!1},
p8:function(a,b){var u,t,s,r,q,p,o,n=a.gU(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.C())return
u=H.i(n.gJ(n))
C.a.h(b,u)
m+=u.length+2;++l}if(!n.C()){if(l<=5)return
if(0>=b.length)return H.e(b,-1)
t=b.pop()
if(0>=b.length)return H.e(b,-1)
s=b.pop()}else{r=n.gJ(n);++l
if(!n.C()){if(l<=4){C.a.h(b,H.i(r))
return}t=H.i(r)
if(0>=b.length)return H.e(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gJ(n);++l
for(;n.C();r=q,q=p){p=n.gJ(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.e(b,-1)
m-=b.pop().length+2;--l}C.a.h(b,"...")
return}}s=H.i(r)
t=H.i(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)C.a.h(b,o)
C.a.h(b,s)
C.a.h(b,t)},
o5:function(a,b,c){var u=P.o4(b,c)
a.H(0,new P.hz(u,b,c))
return u},
mf:function(a,b){var u,t,s=P.dY(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t)s.h(0,H.F(a[t],b))
return s},
lv:function(a){var u,t={}
if(P.lL(a))return"{...}"
u=new P.a8("")
try{C.a.h($.aB,a)
u.a+="{"
t.a=!0
J.m0(a,new P.hD(t,u))
u.a+="}"}finally{if(0>=$.aB.length)return H.e($.aB,-1)
$.aB.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
k4:function k4(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cj:function cj(a){this.a=a
this.c=this.b=null},
eQ:function eQ(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hz:function hz(a,b,c){this.a=a
this.b=b
this.c=c},
hA:function hA(){},
z:function z(){},
hC:function hC(){},
hD:function hD(a,b){this.a=a
this.b=b},
ag:function ag(){},
kp:function kp(){},
hE:function hE(){},
eu:function eu(a,b){this.a=a
this.$ti=b},
kb:function kb(){},
eR:function eR(){},
fk:function fk(){},
oB:function(a,b,c,d){if(b instanceof Uint8Array)return P.oC(!1,b,c,d)
return},
oC:function(a,b,c,d){var u,t,s=$.nx()
if(s==null)return
u=0===c
if(u&&!0)return P.lA(s,b)
t=b.length
d=P.bR(c,d,t)
if(u&&d===t)return P.lA(s,b)
return P.lA(s,b.subarray(c,d))},
lA:function(a,b){if(P.oE(b))return
return P.oF(a,b)},
oF:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.am(t)}return},
oE:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
oD:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.am(t)}return},
mY:function(a,b,c){var u,t,s
for(u=J.dx(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.aq()
if((s&127)!==s)return t-b}return c-b},
m4:function(a,b,c,d,e,f){if(C.d.bq(f,4)!==0)throw H.c(P.a7("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a7("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a7("Invalid base64 padding, more than two '=' characters",a,b))},
fJ:function fJ(){},
fK:function fK(){},
c1:function c1(){},
bF:function bF(){},
h6:function h6(){},
hm:function hm(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
hl:function hl(a){this.a=a},
jn:function jn(){},
jp:function jp(){},
kv:function kv(a){this.b=0
this.c=a},
jo:function jo(a){this.a=a},
ku:function ku(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
fz:function(a,b,c){var u=H.ol(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a7(a,null,null))},
nY:function(a){if(a instanceof H.cD)return a.i(0)
return"Instance of '"+H.i(H.cZ(a))+"'"},
o7:function(a,b,c){var u,t=J.o1(a,c)
if(a!==0&&!0)for(u=0;u<t.length;++u)C.a.k(t,u,b)
return H.m(t,"$ib",[c],"$ab")},
mg:function(a,b,c){var u,t=[c],s=H.d([],t)
for(u=J.bB(a);u.C();)C.a.h(s,H.F(u.gJ(u),c))
if(b)return s
return H.m(J.lq(s),"$ib",t,"$ab")},
d4:function(a,b,c){var u
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.m(a,"$iba",[P.l],"$aba")
u=a.length
c=P.bR(b,c,u)
return H.mp(b>0||c<u?C.a.eV(a,b,c):a)}if(!!J.T(a).$icV)return H.on(a,b,P.bR(b,c,a.length))
return P.ov(a,b,c)},
ov:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.c(P.aj(b,0,J.aH(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.aj(c,b,J.aH(a),q,q))
t=J.bB(a)
for(s=0;s<b;++s)if(!t.C())throw H.c(P.aj(b,0,s,q,q))
r=[]
if(u)for(;t.C();)r.push(t.gJ(t))
else for(s=b;s<c;++s){if(!t.C())throw H.c(P.aj(c,b,s,q,q))
r.push(t.gJ(t))}return H.mp(r)},
op:function(a){return new H.hr(a,H.o2(a,!1,!0,!1,!1,!1))},
mv:function(a,b,c){var u=J.bB(b)
if(!u.C())return a
if(c.length===0){do a+=H.i(u.gJ(u))
while(u.C())}else{a+=H.i(u.gJ(u))
for(;u.C();)a=a+c+H.i(u.gJ(u))}return a},
mB:function(){var u=H.od()
if(u!=null)return P.oA(u)
throw H.c(P.J("'Uri.base' is not supported"))},
fl:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.h){u=$.nD().b
if(typeof b!=="string")H.w(H.b4(b))
u=u.test(b)}else u=!1
if(u)return b
H.F(b,H.aq(c,"c1",0))
t=c.giR().cp(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.e(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.c9(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
nV:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
nW:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dM:function(a){if(a>=10)return""+a
return"0"+a},
m9:function(a){return new P.bH(1000*a)},
dQ:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.av(a)
if(typeof a==="string")return JSON.stringify(a)
return P.nY(a)},
dE:function(a){return new P.aR(!1,null,null,a)},
li:function(a,b,c){return new P.aR(!0,a,b,c)},
ec:function(a,b){return new P.ca(null,null,!0,a,b,"Value not in range")},
aj:function(a,b,c,d,e){return new P.ca(b,c,!0,a,d,"Invalid value")},
bR:function(a,b,c){if(0>a||a>c)throw H.c(P.aj(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.aj(b,a,c,"end",null))
return b}return c},
mq:function(a,b){if(typeof a!=="number")return a.R()
if(a<0)throw H.c(P.aj(a,0,null,b,null))},
a0:function(a,b,c,d,e){var u=H.ae(e==null?J.aH(b):e)
return new P.ho(u,!0,a,c,"Index out of range")},
J:function(a){return new P.jg(a)},
je:function(a){return new P.jd(a)},
mu:function(a){return new P.d2(a)},
bp:function(a){return new P.fQ(a)},
v:function(a){return new P.eJ(a)},
a7:function(a,b,c){return new P.hg(a,b,c)},
o8:function(a,b,c){var u,t=H.d([],[c])
C.a.sn(t,a)
for(u=0;u<a;++u)C.a.k(t,u,b.$1(u))
return t},
lW:function(a){H.pZ(a)},
oA:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.F(a,4)^58)*3|C.b.F(a,0)^100|C.b.F(a,1)^97|C.b.F(a,2)^116|C.b.F(a,3)^97)>>>0
if(u===0)return P.mA(e<e?C.b.v(a,0,e):a,5,f).geN()
else if(u===32)return P.mA(C.b.v(a,5,e),0,f).geN()}t=new Array(8)
t.fixed$length=Array
s=H.d(t,[P.l])
C.a.k(s,0,0)
C.a.k(s,1,-1)
C.a.k(s,2,-1)
C.a.k(s,7,-1)
C.a.k(s,3,0)
C.a.k(s,4,0)
C.a.k(s,5,e)
C.a.k(s,6,e)
if(P.mX(a,0,e,0,s)>=14)C.a.k(s,7,e)
r=s[1]
if(typeof r!=="number")return r.jB()
if(r>=0)if(P.mX(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.A()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.R()
if(typeof n!=="number")return H.E(n)
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
l=!1}else{if(!(n<e&&n===o+2&&C.b.aa(a,"..",o)))j=n>o+2&&C.b.aa(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.b.aa(a,"file",0)){if(q<=0){if(!C.b.aa(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.b.v(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.b.b3(a,o,n,"/");++e
n=h}k="file"}else if(C.b.aa(a,"http",0)){if(t&&p+3===o&&C.b.aa(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.b3(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.aa(a,"https",0)){if(t&&p+4===o&&C.b.aa(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.b.b3(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.b.v(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.ke(a,r,q,p,o,n,m,k)}return P.oS(a,0,e,r,q,p,o,n,m,k)},
mD:function(a){var u=P.h
return C.a.iX(H.d(a.split("&"),[u]),P.lu(u,u),new P.jl(C.h),[P.C,P.h,P.h])},
oz:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.ji(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.Z(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.fz(C.b.v(a,s,t),n,n)
if(typeof p!=="number")return p.a5()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.e(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.fz(C.b.v(a,s,c),n,n)
if(typeof p!=="number")return p.a5()
if(p>255)k.$2(l,s)
if(r>=u)return H.e(j,r)
j[r]=p
return j},
mC:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.jj(a),d=new P.jk(e,a)
if(a.length<2)e.$1("address is too short")
u=H.d([],[P.l])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.b.Z(a,t)
if(p===58){if(t===b){++t
if(C.b.Z(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
C.a.h(u,-1)
r=!0}else C.a.h(u,d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.a.gaB(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)C.a.h(u,d.$2(s,c))
else{m=P.oz(a,s,c)
C.a.h(u,(m[0]<<8|m[1])>>>0)
C.a.h(u,(m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.e(l,i)
l[i]=0
f=i+1
if(f>=k)return H.e(l,f)
l[f]=0
i+=2}else{f=C.d.aZ(h,8)
if(i<0||i>=k)return H.e(l,i)
l[i]=f
f=i+1
if(f>=k)return H.e(l,f)
l[f]=h&255
i+=2}}return l},
oS:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.p_(a,b,d)
else{if(d===b)P.cl(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.p0(a,u,e-1):""
s=P.oX(a,e,f,!1)
if(typeof f!=="number")return f.A()
r=f+1
if(typeof g!=="number")return H.E(g)
q=r<g?P.oZ(P.fz(C.b.v(a,r,g),new P.kq(a,f),n),j):n}else{q=n
s=q
t=""}p=P.oY(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.R()
o=h<i?P.lG(a,h+1,i,n):n
return new P.ck(j,t,s,q,p,o,i<c?P.oW(a,i+1,c):n)},
mO:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cl:function(a,b,c){throw H.c(P.a7(c,a,b))},
oZ:function(a,b){if(a!=null&&a===P.mO(b))return
return a},
oX:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.b.Z(a,b)===91){if(typeof c!=="number")return c.L()
u=c-1
if(C.b.Z(a,u)!==93)P.cl(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.oU(a,t,u)
if(typeof s!=="number")return s.R()
if(s<u){r=s+1
q=P.mT(a,C.b.aa(a,"25",r)?s+3:r,u,"%25")}else q=""
P.mC(a,t,s)
return C.b.v(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.E(c)
p=b
for(;p<c;++p)if(C.b.Z(a,p)===58){s=C.b.bF(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.mT(a,C.b.aa(a,"25",r)?s+3:r,c,"%25")}else q=""
P.mC(a,b,s)
return"["+C.b.v(a,b,s)+q+"]"}return P.p2(a,b,c)},
oU:function(a,b,c){var u,t=C.b.bF(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.E(c)
u=t<c}else u=!1
return u?t:c},
mT:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.a8(d):null
if(typeof c!=="number")return H.E(c)
u=b
t=u
s=!0
for(;u<c;){r=C.b.Z(a,u)
if(r===37){q=P.lH(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.a8("")
o=l.a+=C.b.v(a,t,u)
if(p)q=C.b.v(a,u,u+3)
else if(q==="%")P.cl(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.e(C.i,p)
p=(C.i[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.a8("")
if(t<u){l.a+=C.b.v(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.b.Z(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.a8("")
l.a+=C.b.v(a,t,u)
l.a+=P.lF(r)
u+=m
t=u}}}if(l==null)return C.b.v(a,b,c)
if(t<c)l.a+=C.b.v(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
p2:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.E(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.Z(a,u)
if(q===37){p=P.lH(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.a8("")
n=C.b.v(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.b.v(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.e(C.z,o)
o=(C.z[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.a8("")
if(t<u){s.a+=C.b.v(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.e(C.l,o)
o=(C.l[o]&1<<(q&15))!==0}else o=!1
if(o)P.cl(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.Z(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.a8("")
n=C.b.v(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.lF(q)
u+=l
t=u}}}}if(s==null)return C.b.v(a,b,c)
if(t<c){n=C.b.v(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
p_:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.mQ(C.b.F(a,b)))P.cl(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.F(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.e(C.n,r)
r=(C.n[r]&1<<(s&15))!==0}else r=!1
if(!r)P.cl(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.v(a,b,c)
return P.oT(t?a.toLowerCase():a)},
oT:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
p0:function(a,b,c){return P.dt(a,b,c,C.W,!1)},
oY:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.dt(a,b,c,C.A,!0):C.k.jP(d,new P.kr(),P.h).m(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.a7(u,"/"))u="/"+u
return P.p1(u,e,f)},
p1:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.a7(a,"/"))return P.p3(a,!u||c)
return P.p4(a)},
lG:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.c(P.dE("Both query and queryParameters specified"))
return P.dt(a,b,c,C.m,!0)}if(d==null)return
u=new P.a8("")
t.a=""
d.H(0,new P.ks(new P.kt(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
oW:function(a,b,c){return P.dt(a,b,c,C.m,!0)},
lH:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.Z(a,b+1)
t=C.b.Z(a,p)
s=H.kR(u)
r=H.kR(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.d.aZ(q,4)
if(p>=8)return H.e(C.i,p)
p=(C.i[p]&1<<(q&15))!==0}else p=!1
if(p)return H.c9(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.v(a,b,b+3).toUpperCase()
return},
lF:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.d(u,[P.l])
C.a.k(t,0,37)
C.a.k(t,1,C.b.F(o,a>>>4))
C.a.k(t,2,C.b.F(o,a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.d(u,[P.l])
for(q=0;--r,r>=0;s=128){p=C.d.i5(a,6*r)&63|s
C.a.k(t,q,37)
C.a.k(t,q+1,C.b.F(o,p>>>4))
C.a.k(t,q+2,C.b.F(o,p&15))
q+=3}}return P.d4(t,0,null)},
dt:function(a,b,c,d,e){var u=P.mS(a,b,c,d,e)
return u==null?C.b.v(a,b,c):u},
mS:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.R()
if(typeof c!=="number")return H.E(c)
if(!(o<c))break
c$0:{u=C.b.Z(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.e(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.lH(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.e(C.l,t)
t=(C.l[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.cl(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.b.Z(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.lF(u)}}if(m==null)m=new P.a8("")
m.a+=C.b.v(a,n,o)
m.a+=H.i(s)
if(typeof r!=="number")return H.E(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.R()
if(n<c)m.a+=C.b.v(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
mR:function(a){if(C.b.a7(a,"."))return!0
return C.b.en(a,"/.")!==-1},
p4:function(a){var u,t,s,r,q,p,o
if(!P.mR(a))return a
u=H.d([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.K(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.e(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.m(u,"/")},
p3:function(a,b){var u,t,s,r,q,p
if(!P.mR(a))return!b?P.mP(a):a
u=H.d([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaB(u)!==".."){if(0>=u.length)return H.e(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.e(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaB(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.e(u,0)
C.a.k(u,0,P.mP(u[0]))}return C.a.m(u,"/")},
mP:function(a){var u,t,s,r=a.length
if(r>=2&&P.mQ(J.nF(a,0)))for(u=1;u<r;++u){t=C.b.F(a,u)
if(t===58)return C.b.v(a,0,u)+"%3A"+C.b.af(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.e(C.n,s)
s=(C.n[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
oV:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.F(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.dE("Invalid URL encoding"))}}return u},
lI:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.b.F(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.h!==d)s=!1
else s=!0
if(s)return C.b.v(a,b,c)
else r=new H.t(C.b.v(a,b,c))}else{r=H.d([],[P.l])
for(s=a.length,q=b;q<c;++q){t=C.b.F(a,q)
if(t>127)throw H.c(P.dE("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.dE("Truncated URI"))
C.a.h(r,P.oV(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.m(r,"$ib",[P.l],"$ab")
return new P.jo(!1).cp(r)},
mQ:function(a){var u=a|32
return 97<=u&&u<=122},
mA:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.d([b-1],[P.l])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.F(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.a7(m,a,t))}}if(s<0&&t>b)throw H.c(P.a7(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.F(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gaB(l)
if(r!==44||t!==p+7||!C.b.aa(a,"base64",p+1))throw H.c(P.a7("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.F.j7(0,a,o,u)
else{n=P.mS(a,o,u,C.m,!0)
if(n!=null)a=C.b.b3(a,o,u,n)}return new P.jh(a,l,c)},
p6:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.o8(22,new P.kB(),P.R),n=new P.kA(o),m=new P.kC(),l=new P.kD(),k=H.f(n.$2(0,225),"$iR")
m.$3(k,u,1)
m.$3(k,t,14)
m.$3(k,s,34)
m.$3(k,r,3)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(14,225),"$iR")
m.$3(k,u,1)
m.$3(k,t,15)
m.$3(k,s,34)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(15,225),"$iR")
m.$3(k,u,1)
m.$3(k,"%",225)
m.$3(k,s,34)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(1,225),"$iR")
m.$3(k,u,1)
m.$3(k,s,34)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(2,235),"$iR")
m.$3(k,u,139)
m.$3(k,r,131)
m.$3(k,t,146)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(3,235),"$iR")
m.$3(k,u,11)
m.$3(k,r,68)
m.$3(k,t,18)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(4,229),"$iR")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,"[",232)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(5,229),"$iR")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(6,231),"$iR")
l.$3(k,"19",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(7,231),"$iR")
l.$3(k,"09",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
m.$3(H.f(n.$2(8,8),"$iR"),"]",5)
k=H.f(n.$2(9,235),"$iR")
m.$3(k,u,11)
m.$3(k,t,16)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(16,235),"$iR")
m.$3(k,u,11)
m.$3(k,t,17)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(17,235),"$iR")
m.$3(k,u,11)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(10,235),"$iR")
m.$3(k,u,11)
m.$3(k,t,18)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(18,235),"$iR")
m.$3(k,u,11)
m.$3(k,t,19)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(19,235),"$iR")
m.$3(k,u,11)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(11,235),"$iR")
m.$3(k,u,11)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(12,236),"$iR")
m.$3(k,u,12)
m.$3(k,q,12)
m.$3(k,p,205)
k=H.f(n.$2(13,237),"$iR")
m.$3(k,u,13)
m.$3(k,q,13)
l.$3(H.f(n.$2(20,245),"$iR"),"az",21)
k=H.f(n.$2(21,245),"$iR")
l.$3(k,"az",21)
l.$3(k,"09",21)
m.$3(k,"+-.",21)
return o},
mX:function(a,b,c,d,e){var u,t,s,r,q=$.nE()
for(u=b;u<c;++u){if(d<0||d>=q.length)return H.e(q,d)
t=q[d]
s=C.b.F(a,u)^96
if(s>95)s=31
if(s>=t.length)return H.e(t,s)
r=t[s]
d=r&31
C.a.k(e,r>>>5,u)}return d},
Q:function Q(){},
aC:function aC(a,b){this.a=a
this.b=b},
A:function A(){},
bH:function bH(a){this.a=a},
h2:function h2(){},
h3:function h3(){},
bI:function bI(){},
fD:function fD(){},
e8:function e8(){},
aR:function aR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ca:function ca(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ho:function ho(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
jg:function jg(a){this.a=a},
jd:function jd(a){this.a=a},
d2:function d2(a){this.a=a},
fQ:function fQ(a){this.a=a},
ib:function ib(){},
el:function el(){},
fX:function fX(a){this.a=a},
eJ:function eJ(a){this.a=a},
hg:function hg(a,b,c){this.a=a
this.b=b
this.c=c},
bJ:function bJ(){},
l:function l(){},
j:function j(){},
b9:function b9(){},
b:function b(){},
C:function C(){},
N:function N(){},
ad:function ad(){},
W:function W(){},
az:function az(){},
h:function h(){},
a8:function a8(a){this.a=a},
jl:function jl(a){this.a=a},
ji:function ji(a){this.a=a},
jj:function jj(a){this.a=a},
jk:function jk(a,b){this.a=a
this.b=b},
ck:function ck(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
kq:function kq(a,b){this.a=a
this.b=b},
kr:function kr(){},
kt:function kt(a,b){this.a=a
this.b=b},
ks:function ks(a){this.a=a},
jh:function jh(a,b,c){this.a=a
this.b=b
this.c=c},
kB:function kB(){},
kA:function kA(a){this.a=a},
kC:function kC(){},
kD:function kD(){},
ke:function ke(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jO:function jO(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
pF:function(a){var u,t=J.T(a)
if(!!t.$ibr){u=t.ge0(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.fj(a.data,a.height,a.width)},
pE:function(a){if(a instanceof P.fj)return{data:a.a,height:a.b,width:a.c}
return a},
bw:function(a){var u,t,s,r,q
if(a==null)return
u=P.lu(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r){q=H.M(t[r])
u.k(0,q,a[q])}return u},
pD:function(a){var u={}
a.H(0,new P.kJ(u))
return u},
kg:function kg(){},
ki:function ki(a,b){this.a=a
this.b=b},
fj:function fj(a,b,c){this.a=a
this.b=b
this.c=c},
kJ:function kJ(a){this.a=a},
kh:function kh(a,b){this.a=a
this.b=b},
hc:function hc(a,b){this.a=a
this.b=b},
hd:function hd(){},
he:function he(){},
k3:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
oO:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
k5:function k5(){},
ap:function ap(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bc:function bc(){},
hu:function hu(){},
bf:function bf(){},
i9:function i9(){},
ih:function ih(){},
d_:function d_(){},
iN:function iN(){},
p:function p(){},
bj:function bj(){},
j1:function j1(){},
eO:function eO(){},
eP:function eP(){},
eZ:function eZ(){},
f_:function f_(){},
fa:function fa(){},
fb:function fb(){},
fh:function fh(){},
fi:function fi(){},
R:function R(){},
fF:function fF(){},
fG:function fG(){},
fH:function fH(a){this.a=a},
fI:function fI(){},
bY:function bY(){},
ia:function ia(){},
eC:function eC(){},
dG:function dG(){},
eb:function eb(){},
cb:function cb(){},
ee:function ee(){},
en:function en(){},
es:function es(){},
iF:function iF(){},
f6:function f6(){},
f7:function f7(){}},W={
m3:function(){var u=document.createElement("a")
return u},
lk:function(){var u=document.createElement("canvas")
return u},
nX:function(a,b,c){var u=document.body,t=(u&&C.t).an(u,a,b,c)
t.toString
u=W.H
u=new H.df(new W.at(t),H.n(new W.h5(),{func:1,ret:P.Q,args:[u]}),[u])
return H.f(u.gaQ(u),"$iU")},
mc:function(a){H.f(a,"$ik")
return"wheel"},
cG:function(a){var u,t,s,r="element tag unavailable"
try{u=J.cs(a)
t=u.geG(a)
if(typeof t==="string")r=u.geG(a)}catch(s){H.am(s)}return r},
nZ:function(a){var u,t=document.createElement("input"),s=H.f(t,"$icM")
try{s.type=a}catch(u){H.am(u)}return s},
k2:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mM:function(a,b,c,d){var u=W.k2(W.k2(W.k2(W.k2(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
ac:function(a,b,c,d,e){var u=W.n0(new W.jS(c),W.o)
if(u!=null&&!0)J.nH(a,b,u,!1)
return new W.jR(a,b,u,!1,[e])},
mL:function(a){var u=W.m3(),t=window.location
u=new W.bU(new W.ka(u,t))
u.f6(a)
return u},
oM:function(a,b,c,d){H.f(a,"$iU")
H.M(b)
H.M(c)
H.f(d,"$ibU")
return!0},
oN:function(a,b,c,d){var u,t,s
H.f(a,"$iU")
H.M(b)
H.M(c)
u=H.f(d,"$ibU").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
mN:function(){var u=P.h,t=P.mf(C.p,u),s=H.r(C.p,0),r=H.n(new W.km(),{func:1,ret:u,args:[s]}),q=H.d(["TEMPLATE"],[u])
t=new W.kl(t,P.dY(u),P.dY(u),P.dY(u),null)
t.fb(null,new H.hH(C.p,r,[s,u]),q,null)
return t},
n0:function(a,b){var u=$.a3
if(u===C.f)return a
return u.dW(a,b)},
y:function y(){},
fB:function fB(){},
dD:function dD(){},
fC:function fC(){},
cy:function cy(){},
bZ:function bZ(){},
bC:function bC(){},
c0:function c0(){},
cC:function cC(){},
bD:function bD(){},
cE:function cE(){},
fT:function fT(){},
Y:function Y(){},
cF:function cF(){},
fU:function fU(){},
b7:function b7(){},
b8:function b8(){},
fV:function fV(){},
fW:function fW(){},
fZ:function fZ(){},
aI:function aI(){},
h_:function h_(){},
dN:function dN(){},
dO:function dO(){},
h0:function h0(){},
h1:function h1(){},
jM:function jM(a,b){this.a=a
this.b=b},
U:function U(){},
h5:function h5(){},
o:function o(){},
k:function k(){},
aJ:function aJ(){},
cI:function cI(){},
hb:function hb(){},
hf:function hf(){},
aT:function aT(){},
hk:function hk(){},
c4:function c4(){},
br:function br(){},
cL:function cL(){},
cM:function cM(){},
bb:function bb(){},
dZ:function dZ(){},
hU:function hU(){},
cR:function cR(){},
hV:function hV(){},
hW:function hW(a){this.a=a},
hX:function hX(){},
hY:function hY(a){this.a=a},
aU:function aU(){},
hZ:function hZ(){},
ah:function ah(){},
at:function at(a){this.a=a},
H:function H(){},
cW:function cW(){},
aV:function aV(){},
ie:function ie(){},
iq:function iq(){},
ir:function ir(a){this.a=a},
it:function it(){},
aX:function aX(){},
iD:function iD(){},
aY:function aY(){},
iE:function iE(){},
aZ:function aZ(){},
iH:function iH(){},
iI:function iI(a){this.a=a},
aL:function aL(){},
bh:function bh(){},
em:function em(){},
iO:function iO(){},
iP:function iP(){},
d6:function d6(){},
b0:function b0(){},
aM:function aM(){},
iR:function iR(){},
iS:function iS(){},
iW:function iW(){},
b1:function b1(){},
b2:function b2(){},
j_:function j_(){},
j0:function j0(){},
bT:function bT(){},
jm:function jm(){},
jE:function jE(){},
bl:function bl(){},
dg:function dg(){},
dh:function dh(){},
jN:function jN(){},
eE:function eE(){},
k1:function k1(){},
eW:function eW(){},
kf:function kf(){},
kj:function kj(){},
jL:function jL(){},
jP:function jP(a){this.a=a},
jQ:function jQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
lD:function lD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jR:function jR(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jS:function jS(a){this.a=a},
bU:function bU(a){this.a=a},
I:function I(){},
e7:function e7(a){this.a=a},
i6:function i6(a){this.a=a},
i5:function i5(a,b,c){this.a=a
this.b=b
this.c=c},
f3:function f3(){},
kc:function kc(){},
kd:function kd(){},
kl:function kl(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
km:function km(){},
kk:function kk(){},
dR:function dR(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
aF:function aF(){},
ka:function ka(a,b){this.a=a
this.b=b},
fm:function fm(a){this.a=a},
kw:function kw(a){this.a=a},
eD:function eD(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eK:function eK(){},
eL:function eL(){},
eM:function eM(){},
eN:function eN(){},
eS:function eS(){},
eT:function eT(){},
eU:function eU(){},
eV:function eV(){},
eX:function eX(){},
eY:function eY(){},
f0:function f0(){},
f1:function f1(){},
f2:function f2(){},
dp:function dp(){},
dq:function dq(){},
f4:function f4(){},
f5:function f5(){},
f9:function f9(){},
fc:function fc(){},
fd:function fd(){},
dr:function dr(){},
ds:function ds(){},
ff:function ff(){},
fg:function fg(){},
fn:function fn(){},
fo:function fo(){},
fp:function fp(){},
fq:function fq(){},
fr:function fr(){},
fs:function fs(){},
ft:function ft(){},
fu:function fu(){},
fv:function fv(){},
fw:function fw(){}},O={
ll:function(a){var u=new O.a5([a])
u.bs(a)
return u},
a5:function a5(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cQ:function cQ(){this.b=this.a=null},
e1:function e1(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hO:function hO(a,b){this.a=a
this.b=b},
hP:function hP(){},
hQ:function hQ(a,b){this.a=a
this.b=b},
hR:function hR(){},
hS:function hS(a,b){this.a=a
this.b=b},
hT:function hT(){},
hI:function hI(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cP:function cP(){},
hJ:function hJ(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
bd:function bd(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hL:function hL(){var _=this
_.e=_.d=_.c=_.b=null},
hM:function hM(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hN:function hN(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
eh:function eh(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bS:function bS(){}},E={
md:function(){var u=new E.as()
u.a=""
u.b=!0
u.sf5(0,O.ll(E.as))
u.y.b5(u.gj8(),u.gjb())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sa9(0,null)
return u},
oq:function(a,b){var u=new E.il(a)
u.f2(a,b)
return u},
ow:function(a,b,c,d,e){var u,t,s=J.T(a)
if(!!s.$ic0)return E.mw(a,!0,!0,!0,!1)
u=W.lk()
t=u.style
t.width="100%"
t.height="100%"
s.gco(a).h(0,u)
return E.mw(u,!0,!0,!0,!1)},
mw:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.eo(),j=H.f(C.j.cY(a,"webgl2",P.o6(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$icb")
if(j==null)H.w(P.v("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.oq(j,a)
u=new T.iT(j)
H.ae(j.getParameter(3379))
u.c=H.ae(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.ev(a)
t=new X.ht()
t.c=new X.aE(!1,!1,!1)
t.shN(P.dY(P.l))
u.b=t
t=new X.i_(u)
t.f=0
t.r=V.bg()
t.x=V.bg()
t.ch=t.Q=1
u.c=t
t=new X.hB(u)
t.r=0
t.x=V.bg()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.iZ(u)
t.f=V.bg()
t.r=V.bg()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sfz(H.d([],[[P.d3,P.W]]))
t=u.z
s=document
r=W.ah
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.ac(s,"contextmenu",H.n(u.gh6(),q),!1,r))
t=u.z
p=W.o
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.ac(a,"focus",H.n(u.ghc(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.ac(a,"blur",H.n(u.gfZ(),o),!1,p))
t=u.z
n=W.bb
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.ac(s,"keyup",H.n(u.ghg(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.ac(s,"keydown",H.n(u.ghe(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.ac(a,"mousedown",H.n(u.ghk(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ac(a,"mouseup",H.n(u.gho(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ac(a,l,H.n(u.ghm(),q),!1,r))
n=u.z
W.mc(a)
m=W.bl;(n&&C.a).h(n,W.ac(a,H.M(W.mc(a)),H.n(u.ghq(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.ac(s,l,H.n(u.gh8(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.ac(s,"mouseup",H.n(u.gha(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.ac(s,"pointerlockchange",H.n(u.ghs(),o),!1,p))
p=u.z
o=W.b2
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.ac(a,"touchstart",H.n(u.ghI(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ac(a,"touchend",H.n(u.ghE(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ac(a,"touchmove",H.n(u.ghG(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.aC(Date.now(),!1)
k.cy=0
k.dG()
return k},
fL:function fL(){},
as:function as(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
il:function il(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
im:function im(a){this.a=a},
io:function io(a){this.a=a},
ip:function ip(a){this.a=a},
eo:function eo(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
iV:function iV(a){this.a=a}},Z={
lC:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cm(c)),35044)
a.bindBuffer(b,null)
return new Z.ez(b,u)},
aO:function(a){return new Z.bv(a)},
ez:function ez(a,b){this.a=a
this.b=b},
dH:function dH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
eA:function eA(a){this.a=a},
cB:function cB(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bK:function bK(a,b,c){this.a=a
this.b=b
this.c=c},
bv:function bv(a){this.a=a}},D={
V:function(){var u=new D.c2()
u.sak(null)
u.saX(null)
u.c=null
u.d=0
return u},
fO:function fO(){},
c2:function c2(){var _=this
_.d=_.c=_.b=_.a=null},
h8:function h8(a){this.a=a},
h9:function h9(a){this.a=a},
B:function B(){this.b=null},
bL:function bL(a){this.b=null
this.$ti=a},
bM:function bM(a){this.b=null
this.$ti=a},
O:function O(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
bG:function bG(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
af:function af(){},
dX:function dX(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
ea:function ea(){},
ek:function ek(){}},X={dI:function dI(a,b){this.a=a
this.b=b},dW:function dW(a,b){this.a=a
this.b=b},ht:function ht(){var _=this
_.d=_.c=_.b=_.a=null},e_:function e_(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hB:function hB(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aE:function aE(a,b,c){this.a=a
this.b=b
this.c=c},bt:function bt(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},i_:function i_(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cS:function cS(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},ig:function ig(){},eq:function eq(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iZ:function iZ(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},ev:function ev(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
lo:function(a){var u=new X.hh(),t=new V.an(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.ms
if(t==null){t=V.mr(0,0,1,1)
$.ms=t}u.r=t
return u},
ml:function(a){var u,t,s=new X.e9()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gq().h(0,s.gh0())
t=new D.O("mover",u,s.b,[U.ai])
t.b=!0
s.ay(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.P().a)){s.c=1.0471975511965976
t=new D.O("fov",t,1.0471975511965976,[P.A])
t.b=!0
s.ay(t)}t=s.d
if(!(Math.abs(t-0.1)<$.P().a)){s.d=0.1
t=new D.O("near",t,0.1,[P.A])
t.b=!0
s.ay(t)}t=s.e
if(!(Math.abs(t-2000)<$.P().a)){s.e=2000
t=new D.O("far",t,2000,[P.A])
t.b=!0
s.ay(t)}return s},
c_:function c_(){},
hh:function hh(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hn:function hn(){this.b=this.a=null},
e9:function e9(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
d5:function d5(){}},V={
q7:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.bq(a-b,u)
return(a<0?a+u:a)+b},
S:function(a,b,c){if(a==null)return C.b.ap("null",c)
return C.b.ap(C.e.eI(Math.abs(a-0)<$.P().a?0:a,b),c+b+1)},
cr:function(a,b,c){var u,t,s,r,q,p=H.d([],[P.h])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.u)(a),++s){r=V.S(a[s],b,c)
t=Math.max(t,r.length)
C.a.h(p,r)}for(q=p.length-1;q>=0;--q){if(q>=p.length)return H.e(p,q)
C.a.k(p,q,C.b.ap(p[q],t))}return p},
lV:function(a){return C.e.jx(Math.pow(2,C.S.cA(Math.log(H.pC(a))/Math.log(2))))},
c6:function(){var u=$.mi
return u==null?$.mi=V.be(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
be:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ax(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
mh:function(a,b,c){var u=c.p(0,Math.sqrt(c.w(c))),t=b.aH(u),s=t.p(0,Math.sqrt(t.w(t))),r=u.aH(s),q=new V.D(a.a,a.b,a.c),p=s.T(0).w(q),o=r.T(0).w(q),n=u.T(0).w(q)
return V.be(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bg:function(){var u=$.mn
return u==null?$.mn=new V.a1(0,0):u},
lw:function(){var u=$.cX
return u==null?$.cX=new V.X(0,0,0):u},
mr:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.ed(a,b,c,d)},
dd:function(){var u=$.mH
return u==null?$.mH=new V.D(0,0,0):u},
oG:function(){var u=$.jq
return u==null?$.jq=new V.D(-1,0,0):u},
lB:function(){var u=$.jr
return u==null?$.jr=new V.D(0,1,0):u},
mI:function(){var u=$.js
return u==null?$.js=new V.D(0,0,1):u},
a9:function a9(a,b,c){this.a=a
this.b=b
this.c=c},
an:function an(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h7:function h7(a){this.a=a},
e3:function e3(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ax:function ax(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a1:function a1(a,b){this.a=a
this.b=b},
X:function X(a,b,c){this.a=a
this.b=b
this.c=c},
aK:function aK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ed:function ed(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Z:function Z(a,b){this.a=a
this.b=b},
D:function D(a,b,c){this.a=a
this.b=b
this.c=c},
bu:function bu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a2:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.c(P.v("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.b.F(a,0)
t=C.b.F(b,0)
s=new V.ik()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
x:function(a){var u=new V.iu()
u.f3(a)
return u},
iY:function(){var u=new V.iX(),t=P.h
u.si8(new H.a6([t,V.d1]))
u.sib(new H.a6([t,V.d8]))
u.c=null
return u},
bo:function bo(){},
aD:function aD(){},
e0:function e0(){},
ay:function ay(){this.a=null},
ik:function ik(){this.b=this.a=null},
iu:function iu(){this.a=null},
d1:function d1(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ep:function ep(a,b,c){this.a=a
this.b=b
this.c=c},
d8:function d8(a){this.b=a
this.c=null},
iX:function iX(){this.c=this.b=this.a=null},
d9:function d9(a){this.b=a
this.a=this.c=null},
q1:function(a){P.ox(C.P,new V.l9(a))},
os:function(a){var u=new V.iy()
u.f4(a,!0)
return u},
bE:function bE(){},
l9:function l9(a){this.a=a},
fY:function fY(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hi:function hi(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hj:function hj(a){var _=this
_.a=a
_.d=_.c=_.b=null},
id:function id(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ii:function ii(a){this.a=a
this.c=null},
ij:function ij(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iy:function iy(){this.b=this.a=null},
iA:function iA(a){this.a=a},
iz:function iz(a){this.a=a},
iB:function iB(a){this.a=a}},U={
lm:function(){var u=new U.fP()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
m8:function(a){var u=new U.dK()
u.a=a
return u},
fP:function fP(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dK:function dK(){this.b=this.a=null},
cK:function cK(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ai:function ai(){},
ew:function ew(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
ex:function ex(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ey:function ey(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dJ:function dJ(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},dL:function dL(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},dP:function dP(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},aG:function aG(){}},A={
o9:function(a,b){var u=a.bi,t=new A.e2(b,u)
t.d5(b,u)
t.f1(a,b)
return t},
oa:function(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="MaterialLight_"+a1.gaw(a1)+a2.gaw(a2)+a3.gaw(a3)+a4.gaw(a4)+a5.gaw(a5)+a6.gaw(a6)+a7.gaw(a7)+a8.gaw(a8)+a9.gaw(a9)+"_"
e+=a?"1":"0"
e+=b?"1":"0"
e+=c?"1":"0"
e=e+"0_"+a0
u=b0.length
if(u>0){e+="_Dir"
for(t=0;t<b0.length;b0.length===u||(0,H.u)(b0),++t)e+="_"+H.i(b0[t].a)}u=b1.length
if(u>0){e+="_Point"
for(t=0;t<b1.length;b1.length===u||(0,H.u)(b1),++t)e+="_"+H.i(b1[t].a)}u=b2.length
if(u>0){e+="_Spot"
for(t=0;t<b2.length;b2.length===u||(0,H.u)(b2),++t)e+="_"+H.i(b2[t].a)}for(u=b0.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=b0[t].b
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
f=$.b5()
if(k){u=$.bz()
f=new Z.bv(f.a|u.a)}if(j){u=$.by()
f=new Z.bv(f.a|u.a)}if(i){u=$.bA()
f=new Z.bv(f.a|u.a)}if(h){u=$.bx()
f=new Z.bv(f.a|u.a)}return new A.hK(a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,s,p,l,p,r,g,!0,!1,!1,o,r,m,k,j,!1,i,h,!1,b,c,!1,a0,e.charCodeAt(0)==0?e:e,f)},
kE:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.c)a.a+="uniform samplerCube "+c+"Txt;\n"},
kF:function(a,b,c){var u,t="Txt, txtCube).rgb;\n"
A.kE(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.ld(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.c){u+="   "+c+"Color = "+c+"Clr*textureCube("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.c){u+="   "+c+"Color = textureCube("+c+t
a.a=u}a.a=u+"}\n"},
pc:function(a,b){var u,t=a.a,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.kE(b,t,"emission")
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
p9:function(a,b){var u,t=a.b
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.kF(b,t,"ambient")
b.a+="\n"},
pa:function(a,b){var u,t=a.c
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.kF(b,t,"diffuse")
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
pd:function(a,b){var u,t=a.d
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.kF(b,t,"invDiffuse")
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
pj:function(a,b){var u,t=a.e
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.kF(b,t,"specular")
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
pf:function(a,b){var u,t,s
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
ph:function(a,b){var u,t=a.r,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.kE(b,t,"reflect")
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
pi:function(a,b){var u,t=a.x,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.kE(b,t,"refract")
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
pb:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.i(u)
s=A.ld(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.aq()
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
o=H.d([],r)
n=a.b
if(!n.a)n=n.c
else n=!0
if(n)C.a.h(o,"ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.d([],r)
r=a.c
if(!r.a)r=r.c
else r=!0
if(r)C.a.h(m,"diffuse(norm, lit.viewDir)")
r=a.d
if(!r.a)r=r.c
else r=!0
if(r)C.a.h(m,"invDiffuse(norm, lit.viewDir)")
r=a.e
if(!r.a)r=r.c
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
c.a+="      highLight = intensity*("+C.a.m(m," + ")+");\n"}else c.a+="   highLight = "+C.a.m(m," + ")+";\n"
C.a.h(o,"highLight")}r=c.a+="   return lit.color*("+C.a.m(o," + ")+");\n"
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
pg:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.i(u)
s=A.ld(t)
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
if(typeof u!=="number")return u.aq()
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
l=H.d([],r)
C.a.h(l,"lit.color")
if(o)C.a.h(l,"attenuation")
if(u)C.a.h(l,"textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.a.m(l," * ")+";\n"
o+="}\n"
c.a=o
o+="\n"
c.a=o
o+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+m+")\n"
c.a=o
c.a=o+"{\n"
l=H.d([],r)
o=a.b
if(!o.a)o=o.c
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
k=H.d([],r)
r=a.c
if(!r.a)r=r.c
else r=!0
if(r)C.a.h(k,"diffuse(norm, normDir)")
r=a.d
if(!r.a)r=r.c
else r=!0
if(r)C.a.h(k,"invDiffuse(norm, normDir)")
r=a.e
if(!r.a)r=r.c
else r=!0
if(r)C.a.h(k,"specular(norm, normDir)")
r=c.a+="      highLight = intensity*("+C.a.m(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.a.m(l," + ")+");\n"
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
pk:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.i(u)
s=A.ld(t)
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
if(typeof u!=="number")return u.aq()
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
j=H.d([],u)
if(n)C.a.h(j,"attenuation")
if(o)C.a.h(j,"scale")
if(m)C.a.h(j,"texture2D(txt2D, txtLoc).rgb")
else C.a.h(j,"vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.a.m(j," * ")+";\n"
r+="}\n"
c.a=r
r+="\n"
c.a=r
r+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+k+")\n"
c.a=r
c.a=r+"{\n"
j=H.d([],u)
r=a.b
if(!r.a)r=r.c
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
i=H.d([],u)
u=a.c
if(!u.a)u=u.c
else u=!0
if(u)C.a.h(i,"diffuse(norm, litVec)")
u=a.d
if(!u.a)u=u.c
else u=!0
if(u)C.a.h(i,"invDiffuse(norm, litVec)")
u=a.e
if(!u.a)u=u.c
else u=!0
if(u)C.a.h(i,"specular(norm, litVec)")
u=c.a+="      highLight = intensity*("+C.a.m(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.a.m(j," + ")+");\n"
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
pe:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.d([],[P.h])
u=a.b
if(!u.a)u=u.c
else u=!0
if(u)C.a.h(t,"ambientColor")
u=a.c
if(!u.a)u=u.c
else u=!0
if(u)C.a.h(t,"diffuse(norm, litVec)")
u=a.d
if(!u.a)u=u.c
else u=!0
if(u)C.a.h(t,"invDiffuse(norm, litVec)")
u=a.e
if(!u.a)u=u.c
else u=!0
if(u)C.a.h(t,"specular(norm, litVec)")
u=b.a+="   return "+C.a.m(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
pl:function(a){var u,t,s,r,q,p,o,n,m,l="   lightAccum += all",k="precision mediump float;\n\n",j="precision mediump float;\n\nvarying vec3 normalVec;\n",i=new P.a8("")
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
A.pc(a,i)
A.p9(a,i)
A.pa(a,i)
A.pd(a,i)
A.pj(a,i)
t=a.cy
if(t){r=i.a+="// === Enviromental ===\n"
r+="\n"
i.a=r
r+="uniform samplerCube envSampler;\n"
i.a=r
i.a=r+"\n"
A.ph(a,i)
A.pi(a,i)}A.pf(a,i)
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
if(r){for(q=a.z,p=q.length,n=0;n<q.length;q.length===p||(0,H.u)(q),++n)A.pb(a,q[n],i)
for(q=a.Q,p=q.length,n=0;n<q.length;q.length===p||(0,H.u)(q),++n)A.pg(a,q[n],i)
for(q=a.ch,p=q.length,n=0;n<q.length;q.length===p||(0,H.u)(q),++n)A.pk(a,q[n],i)
A.pe(a,i)}q=i.a+="// === Main ===\n"
q+="\n"
i.a=q
q+="void main()\n"
i.a=q
q+="{\n"
i.a=q
q=i.a=q+"   float alpha = alphaValue();\n"
u=u?i.a=q+"   vec3 norm = normal();\n":q
if(t)i.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
m=H.d([],[P.h])
if(r){i.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(m,"lightAccum")
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
for(u=a.z,t=u.length,n=0;n<u.length;u.length===t||(0,H.u)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.e(r,0)
i.a+=l+(r[0].toUpperCase()+C.b.af(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,n=0;n<u.length;u.length===t||(0,H.u)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.e(r,0)
i.a+=l+(r[0].toUpperCase()+C.b.af(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,n=0;n<u.length;u.length===t||(0,H.u)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.e(r,0)
i.a+=l+(r[0].toUpperCase()+C.b.af(r,1))+"Values(norm);\n"}if(a.cx<=0)i.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
if(!u.a)u=u.c
else u=!0
if(u)C.a.h(m,"emissionColor()")
u=a.r
if(!u.a)u=u.c
else u=!0
if(u)C.a.h(m,"reflect(refl)")
u=a.x
if(!u.a)u=u.c
else u=!0
if(u)C.a.h(m,"refract(refl)")
if(m.length<=0)C.a.h(m,"vec3(0.0, 0.0, 0.0)")
u=i.a+="   vec4 objClr = vec4("+C.a.m(m," + ")+", alpha);\n"
if(s)u=i.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
i.a=u
u=i.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
pm:function(a,b){var u,t,s
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
po:function(a,b){var u
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
pn:function(a,b){var u
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
pq:function(a,b){var u,t
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
pr:function(a,b){var u,t
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
pp:function(a,b){var u
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
ps:function(a,b){var u
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
ld:function(a){if(0>=a.length)return H.e(a,0)
return a[0].toUpperCase()+C.b.af(a,1)},
ly:function(a,b,c,d,e){var u=new A.j6(a,c,e)
u.f=d
u.sil(P.o7(d,0,P.l))
return u},
dF:function dF(a,b,c){this.a=a
this.b=b
this.c=c},
fE:function fE(a){this.a=a},
ao:function ao(a,b,c){this.a=a
this.b=b
this.c=c},
e2:function e2(a,b){var _=this
_.e4=_.jG=_.e3=_.bE=_.bi=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.jO=_.jN=_.jM=_.cz=_.cw=_.cv=_.cu=_.ct=_.cs=_.eg=_.jL=_.ef=_.ee=_.jK=_.ed=_.ec=_.eb=_.jJ=_.ea=_.e9=_.e8=_.jI=_.e7=_.e6=_.jH=_.e5=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
aS:function aS(a,b){this.a=a
this.b=b},
aW:function aW(a,b){this.a=a
this.b=b},
b_:function b_(a,b){this.a=a
this.b=b},
hK:function hK(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.bi=b3
_.bE=b4},
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
cg:function cg(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
d0:function d0(){},
ei:function ei(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
er:function er(){},
jb:function jb(a){this.a=a},
aN:function aN(a,b,c){this.a=a
this.c=b
this.d=c},
j8:function j8(a,b,c){this.a=a
this.c=b
this.d=c},
j9:function j9(a,b,c){this.a=a
this.c=b
this.d=c},
ja:function ja(a,b,c){this.a=a
this.c=b
this.d=c},
j6:function j6(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
ab:function ab(a,b,c){this.a=a
this.c=b
this.d=c},
j7:function j7(a,b,c){this.a=a
this.c=b
this.d=c},
a_:function a_(a,b,c){this.a=a
this.c=b
this.d=c},
da:function da(a,b,c){this.a=a
this.c=b
this.d=c},
jc:function jc(a,b,c){this.a=a
this.c=b
this.d=c},
db:function db(a,b,c){this.a=a
this.c=b
this.d=c},
aA:function aA(a,b,c){this.a=a
this.c=b
this.d=c},
cf:function cf(a,b,c){this.a=a
this.c=b
this.d=c},
ak:function ak(a,b,c){this.a=a
this.c=b
this.d=c}},F={
lR:function(a,b,c,d){var u=F.eg()
F.du(u,b,c,d,a,1,0,0,1)
F.du(u,b,c,d,a,0,1,0,3)
F.du(u,b,c,d,a,0,0,1,2)
F.du(u,b,c,d,a,-1,0,0,0)
F.du(u,b,c,d,a,0,-1,0,0)
F.du(u,b,c,d,a,0,0,-1,3)
u.am()
return u},
kz:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
du:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.D(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.D(u+a3,t+a1,s+a2)
q=new V.D(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.D(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.kz(i)
l=F.kz(j.b)
k=F.lc(d,a0,new F.ky(j,F.kz(j.c),F.kz(j.d),l,m,c),b)
if(k!=null)a.b2(k)},
n6:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(e<3)return
u=F.eg()
t=b?-1:1
s=-6.283185307179586/e
r=H.d([],[F.al])
q=u.a
p=new V.D(0,0,t)
p=p.p(0,Math.sqrt(p.w(p)))
C.a.h(r,q.ir(new V.aK(a,-1,-1,-1),new V.an(1,1,1,1),new V.X(0,0,c),new V.D(0,0,t),new V.a1(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.E(k)
j=new V.D(m,l,t).p(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.ci(new V.aK(a,-1,-1,-1),null,new V.an(i,g,h,1),new V.X(m*k,l*k,c),new V.D(0,0,t),new V.a1(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.dQ(r)
return u},
n4:function(a,b,c){return F.pG(!0,a,1,new F.kK(1,c),b)},
pG:function(a,b,c,d,e){var u
if(e<3)return
if(c<1)return
u=F.lc(c,e,new F.kM(d),null)
if(u==null)return
u.am()
u.bB()
if(b)u.b2(F.n6(3,!1,1,new F.kN(d),e))
u.b2(F.n6(1,!0,-1,new F.kO(d),e))
return u},
pV:function(a,b){var u=F.lc(a,b,new F.kX(),null)
u.d.bM()
u.am()
u.bB()
return u},
au:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j=null
b=b.p(0,Math.sqrt(b.w(b)))
u=b.a
t=b.b
s=b.c
r=F.ci(j,j,j,new V.X(u,t,s),b,j,j,j,0)
q=a.iT(r,new F.de())
if(q!=null)return q
p=u*0.5+0.5
o=t*0.5+0.5
n=s*0.5+0.5
if(p<0)p=0
else if(p>1)p=1
if(o<0)o=0
else if(o>1)o=1
if(n<0)n=0
else if(n>1)n=1
r.sas(0,new V.an(p,o,n,1))
m=Math.sqrt(u*u+t*t)
l=Math.atan2(t,u)/1.5707963267948966
if(l<0)l=-l
k=Math.atan2(m,s)/3.141592653589793
r.scS(new V.a1(l,k<0?-k:k))
a.a.h(0,r)
return r},
a4:function(a,b,c,d,e){var u,t,s,r
if(e<=0)a.d.bz(0,b,d,c)
else{u=F.au(a,b.r.A(0,c.r).u(0,0.5))
t=F.au(a,c.r.A(0,d.r).u(0,0.5))
s=F.au(a,d.r.A(0,b.r).u(0,0.5))
r=e-1
F.a4(a,b,u,s,r)
F.a4(a,u,c,t,r)
F.a4(a,t,s,u,r)
F.a4(a,s,t,d,r)}},
nj:function(a,b){var u,t,s={}
s.a=u
s.a=null
s.a=new F.la()
t=F.lR(a,null,new F.lb(s,1),b)
t.bB()
return t},
q5:function(){return F.n5(15,30,0.5,1,new F.le())},
pU:function(){return F.n5(12,120,0.3,1,new F.kW(3,2))},
n5:function(a,b,c,d,e){var u=F.lc(a,b,new F.kL(e,d,b,c),null)
if(u==null)return
u.am()
u.bB()
return u},
lc:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.eg()
t=H.d([],[F.al])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.ci(g,g,new V.an(p,0,0,1),g,g,new V.a1(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cq(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.ci(g,g,new V.an(j,i,h,1),g,g,new V.a1(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cq(d))}}u.d.iq(a+1,b+1,t)
return u},
cH:function(a,b,c){var u=new F.aa(),t=a.a
if(t==null)H.w(P.v("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.w(P.v("May not create a face with vertices attached to different shapes."))
u.bw(a)
u.bx(b)
u.dJ(c)
C.a.h(u.a.a.d.b,u)
u.a.a.V()
return u},
o3:function(a,b){var u=new F.bs(),t=a.a
if(t==null)H.w(P.v("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.w(P.v("May not create a line with vertices attached to different shapes."))
u.bw(a)
u.bx(b)
C.a.h(u.a.a.c.b,u)
u.a.a.V()
return u},
eg:function(){var u=new F.ef(),t=new F.jt(u)
t.b=!1
t.sim(H.d([],[F.al]))
u.a=t
t=new F.ix(u)
t.scb(H.d([],[F.bQ]))
u.b=t
t=new F.iw(u)
t.sfG(H.d([],[F.bs]))
u.c=t
t=new F.iv(u)
t.sfA(H.d([],[F.aa]))
u.d=t
u.e=null
return u},
ci:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.al(),r=new F.jB()
r.scb(H.d([],[F.bQ]))
s.b=r
r=new F.jy()
u=[F.bs]
r.sfH(H.d([],u))
r.sfI(H.d([],u))
s.c=r
r=new F.ju()
u=[F.aa]
r.sfB(H.d([],u))
r.sfC(H.d([],u))
r.sfD(H.d([],u))
s.d=r
h=$.ny()
s.e=0
r=$.b5()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bz().a)!==0?e:t
s.x=(u&$.by().a)!==0?b:t
s.y=(u&$.bX().a)!==0?f:t
s.z=(u&$.bA().a)!==0?g:t
s.Q=(u&$.nz().a)!==0?c:t
s.ch=(u&$.cx().a)!==0?i:0
s.cx=(u&$.bx().a)!==0?a:t
return s},
ky:function ky(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kK:function kK(a,b){this.a=a
this.b=b},
kM:function kM(a){this.a=a},
kN:function kN(a){this.a=a},
kO:function kO(a){this.a=a},
kX:function kX(){},
la:function la(){},
lb:function lb(a,b){this.a=a
this.b=b},
le:function le(){},
kW:function kW(a,b){this.a=a
this.b=b},
kL:function kL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aa:function aa(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ha:function ha(){},
iC:function iC(){},
bs:function bs(){this.b=this.a=null},
hv:function hv(){},
j5:function j5(){},
bQ:function bQ(){this.a=null},
ef:function ef(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iv:function iv(a){this.a=a
this.b=null},
iw:function iw(a){this.a=a
this.b=null},
ix:function ix(a){this.a=a
this.b=null},
al:function al(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jD:function jD(a){this.a=a},
jC:function jC(a){this.a=a},
jt:function jt(a){this.a=a
this.c=this.b=null},
ju:function ju(){this.d=this.c=this.b=null},
jv:function jv(a,b){this.a=a
this.b=b},
jw:function jw(a,b){this.a=a
this.b=b},
jy:function jy(){this.c=this.b=null},
jz:function jz(){},
de:function de(){},
jA:function jA(){},
jx:function jx(){},
i7:function i7(){},
jB:function jB(){this.b=null}},T={d7:function d7(){},cc:function cc(){var _=this
_.e=_.d=_.c=_.b=_.a=null},iT:function iT(a){var _=this
_.a=a
_.e=_.d=_.c=null},iU:function iU(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nd:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6="testCanvas",a7=null,a8="modifiers",a9=V.os("Test 017"),b0=W.lk()
b0.className="pageLargeCanvas"
b0.id=a6
a9.a.appendChild(b0)
u=[P.h]
a9.dS(H.d(["A test of the Material Lighting shader with solid color directional light, cube mapped textures, and a reflection map. The specular map is also used to define where reflections are painted."],u))
a9.io(H.d(["shapes"],u))
a9.dS(H.d(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(a6)
if(t==null)H.w(P.v("Failed to find an element with the identifier, testCanvas."))
s=E.ow(t,!0,!0,!0,!1)
r=E.md()
r.sa9(0,F.nj(8,8))
q=X.lo(a7)
if(q.b){q.b=!1
p=new D.O("clearColor",!0,!1,[P.Q])
p.b=!0
q.ay(p)}o=s.f.er("../resources/maskonaive",".jpg")
n=s.f.eq("../resources/earthSpecular")
m=s.f.eq("../resources/earthColor")
l=new O.e1()
l.sfj(O.ll(V.ax))
l.e.b5(l.gfV(),l.gfX())
p=new O.bd(l,"emission")
p.c=new A.ao(!1,!1,!1)
p.f=new V.a9(0,0,0)
l.f=p
p=new O.bd(l,"ambient")
p.c=new A.ao(!1,!1,!1)
p.f=new V.a9(0,0,0)
l.r=p
p=new O.bd(l,"diffuse")
p.c=new A.ao(!1,!1,!1)
p.f=new V.a9(0,0,0)
l.x=p
p=new O.bd(l,"invDiffuse")
p.c=new A.ao(!1,!1,!1)
p.f=new V.a9(0,0,0)
l.y=p
p=new O.hN(l,"specular")
p.c=new A.ao(!1,!1,!1)
p.f=new V.a9(0,0,0)
p.ch=100
l.z=p
p=new O.hJ(l,"bump")
p.c=new A.ao(!1,!1,!1)
l.Q=p
l.ch=null
p=new O.bd(l,"reflect")
p.c=new A.ao(!1,!1,!1)
p.f=new V.a9(0,0,0)
l.cx=p
p=new O.hM(l,"refract")
p.c=new A.ao(!1,!1,!1)
p.f=new V.a9(0,0,0)
p.ch=1
l.cy=p
p=new O.hI(l,"alpha")
p.c=new A.ao(!1,!1,!1)
p.f=1
l.db=p
p=new D.dX()
p.bs(D.af)
p.sfv(H.d([],[D.bG]))
p.shK(H.d([],[D.ea]))
p.si7(H.d([],[D.ek]))
p.y=p.x=null
p.d_(p.gfT(),p.ghu(),p.ghy())
l.dx=p
k=new O.hL()
k.b=new V.an(0,0,0,0)
k.c=1
k.d=10
k.e=!1
l.dy=k
k=p.x
p=k==null?p.x=D.V():k
p.h(0,l.ghW())
p=l.dx
k=p.y
p=k==null?p.y=D.V():k
k=l.gaT()
p.h(0,k)
l.fr=null
p=l.dx
j=V.lB()
i=U.m8(V.mh(V.lw(),j,new V.D(-1,-1,-1)))
h=new V.a9(1,1,1)
g=new D.bG()
g.c=new V.a9(1,1,1)
g.a=V.mI()
g.d=V.lB()
g.e=V.oG()
f=g.b
g.b=i
i.gq().h(0,g.gf7())
i=new D.O("mover",f,g.b,[U.ai])
i.b=!0
g.aD(i)
if(!g.c.t(0,h)){f=g.c
g.c=h
i=new D.O("color",f,h,[V.a9])
i.b=!0
g.aD(i)}p.h(0,g)
p=l.r
p.sas(0,new V.a9(0.5,0.5,0.5))
p=l.x
p.sas(0,new V.a9(0.5,0.5,0.5))
l.r.sau(m)
l.x.sau(m)
l.z.sau(n)
p=l.ch
if(p!==o){if(p!=null)p.gq().D(0,k)
f=l.ch
l.ch=o
o.gq().h(0,k)
p=new D.O("environment",f,l.ch,[T.cc])
p.b=!0
l.Y(p)}l.cx.sau(n)
p=l.cx
p.sas(0,new V.a9(0.5,0.5,0.5))
p=l.z
p.cg(new A.ao(!0,!1,p.c.c))
p.dI(10)
e=new U.cK()
e.bs(U.ai)
e.b5(e.gfR(),e.ghw())
e.e=null
e.f=V.c6()
e.r=0
p=s.r
k=new U.ex()
i=U.lm()
i.scX(0,!0)
i.scG(6.283185307179586)
i.scI(0)
i.sa_(0,0)
i.scH(100)
i.sX(0)
i.scr(0.5)
k.b=i
g=k.gaS()
i.gq().h(0,g)
i=U.lm()
i.scX(0,!0)
i.scG(6.283185307179586)
i.scI(0)
i.sa_(0,0)
i.scH(100)
i.sX(0)
i.scr(0.5)
k.c=i
i.gq().h(0,g)
k.d=null
k.r=k.f=k.e=!1
k.y=k.x=2.5
k.Q=4
k.ch=k.cx=!1
k.db=k.cy=0
k.dx=null
k.dy=0
k.fx=k.fr=null
d=new X.aE(!1,!1,!1)
f=k.d
k.d=d
i=[X.aE]
g=new D.O(a8,f,d,i)
g.b=!0
k.S(g)
g=k.f
if(g!==!1){k.f=!1
g=new D.O("invertX",g,!1,[P.Q])
g.b=!0
k.S(g)}g=k.r
if(g!==!1){k.r=!1
g=new D.O("invertY",g,!1,[P.Q])
g.b=!0
k.S(g)}k.bd(p)
e.h(0,k)
p=s.r
k=new U.ew()
g=U.lm()
g.scX(0,!0)
g.scG(6.283185307179586)
g.scI(0)
g.sa_(0,0)
g.scH(100)
g.sX(0)
g.scr(0.2)
k.b=g
g.gq().h(0,k.gaS())
k.c=null
k.d=!1
k.e=2.5
k.r=4
k.x=k.y=!1
k.z=0
k.Q=null
k.ch=0
k.cy=k.cx=null
d=new X.aE(!0,!1,!1)
f=k.c
k.c=d
g=new D.O(a8,f,d,i)
g.b=!0
k.S(g)
k.bd(p)
e.h(0,k)
p=s.r
k=new U.ey()
k.c=0.01
k.e=k.d=0
d=new X.aE(!1,!1,!1)
k.b=d
i=new D.O(a8,a7,d,i)
i.b=!0
k.S(i)
k.bd(p)
e.h(0,k)
e.h(0,U.m8(V.be(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
c=X.ml(e)
b=new M.dL()
b.a=!0
p=E.md()
a=F.eg()
k=a.a
i=new V.D(-1,-1,1)
i=i.p(0,Math.sqrt(i.w(i)))
a0=k.bA(new V.aK(1,2,4,6),new V.an(1,0,0,1),new V.X(-1,-1,0),new V.a1(0,1),i,a7)
k=a.a
i=new V.D(1,-1,1)
i=i.p(0,Math.sqrt(i.w(i)))
a1=k.bA(new V.aK(0,3,4,6),new V.an(0,0,1,1),new V.X(1,-1,0),new V.a1(1,1),i,a7)
k=a.a
i=new V.D(1,1,1)
i=i.p(0,Math.sqrt(i.w(i)))
a2=k.bA(new V.aK(0,2,5,6),new V.an(0,1,0,1),new V.X(1,1,0),new V.a1(1,0),i,a7)
k=a.a
i=V.bg()
g=new V.D(-1,1,1)
g=g.p(0,Math.sqrt(g.w(g)))
a3=k.bA(new V.aK(0,2,4,7),new V.an(1,1,0,1),new V.X(-1,1,0),i,g,a7)
a.d.dQ(H.d([a0,a1,a2,a3],[F.al]))
a.am()
p.sa9(0,a)
b.e=p
b.sbe(a7)
b.sbn(0,a7)
b.sbo(a7)
p=new O.eh()
p.b=1.0471975511965976
p.d=new V.a9(1,1,1)
f=p.c
p.c=o
o.gq().h(0,p.gaT())
k=new D.O("boxTexture",f,p.c,[T.cc])
k.b=!0
p.Y(k)
b.sbo(p)
b.sbn(0,q)
b.sbe(c)
a4=new M.dP()
a4.a=!0
a4.sfm(0,O.ll(E.as))
a4.e.b5(a4.gh2(),a4.gh4())
a4.y=a4.x=a4.r=a4.f=null
a5=X.lo(a7)
a4.sbe(a7)
a4.sbn(0,a5)
a4.sbo(a7)
a4.sbe(c)
a4.sbo(l)
a4.sbn(0,q)
a4.e.h(0,r)
p=M.aG
k=H.d([b,a4],[p])
i=new M.dJ()
i.bs(p)
i.e=!0
i.f=!1
i.r=null
i.b5(i.ghA(),i.ghC())
i.ae(0,k)
p=s.d
if(p!==i){if(p!=null)p.gq().D(0,s.gd7())
s.d=i
i.gq().h(0,s.gd7())
s.d8()}p=new V.ii("shapes")
u=u.getElementById("shapes")
p.c=u
if(u==null)H.w("Failed to find shapes for RadioGroup")
p.az(0,"Cube",new T.kY(r))
p.az(0,"Cuboid",new T.kZ(r))
p.az(0,"Cylinder",new T.l_(r))
p.az(0,"Cone",new T.l0(r))
p.az(0,"LatLonSphere",new T.l1(r))
p.az(0,"IsoSphere",new T.l2(r))
p.bz(0,"Sphere",new T.l3(r),!0)
p.az(0,"Toroid",new T.l4(r))
p.az(0,"Knot",new T.l5(r))
u=s.z
if(u==null)u=s.z=D.V()
p={func:1,ret:-1,args:[D.B]}
k=H.n(new T.l6(a9,l),p)
if(u.b==null)u.saX(H.d([],[p]))
u=u.b;(u&&C.a).h(u,k)
V.q1(s)},
kY:function kY(a){this.a=a},
kZ:function kZ(a){this.a=a},
l_:function l_(a){this.a=a},
l0:function l0(a){this.a=a},
l1:function l1(a){this.a=a},
l2:function l2(a){this.a=a},
l3:function l3(a){this.a=a},
l4:function l4(a){this.a=a},
l5:function l5(a){this.a=a},
l6:function l6(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.ls.prototype={}
J.a.prototype={
t:function(a,b){return a===b},
gI:function(a){return H.cY(a)},
i:function(a){return"Instance of '"+H.i(H.cZ(a))+"'"}}
J.hq.prototype={
i:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$iQ:1}
J.dU.prototype={
t:function(a,b){return null==b},
i:function(a){return"null"},
gI:function(a){return 0}}
J.dV.prototype={
gI:function(a){return 0},
i:function(a){return String(a)}}
J.ic.prototype={}
J.ch.prototype={}
J.bO.prototype={
i:function(a){var u=a[$.nm()]
if(u==null)return this.eY(a)
return"JavaScript function for "+H.i(J.av(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibJ:1}
J.ba.prototype={
h:function(a,b){H.F(b,H.r(a,0))
if(!!a.fixed$length)H.w(P.J("add"))
a.push(b)},
eB:function(a,b){if(!!a.fixed$length)H.w(P.J("removeAt"))
if(b<0||b>=a.length)throw H.c(P.ec(b,null))
return a.splice(b,1)[0]},
D:function(a,b){var u
if(!!a.fixed$length)H.w(P.J("remove"))
for(u=0;u<a.length;++u)if(J.K(a[u],b)){a.splice(u,1)
return!0}return!1},
ae:function(a,b){var u,t
H.m(b,"$ij",[H.r(a,0)],"$aj")
if(!!a.fixed$length)H.w(P.J("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.u)(b),++t)a.push(b[t])},
H:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.bp(a))}},
m:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.k(t,u,H.i(a[u]))
return t.join(b)},
j4:function(a){return this.m(a,"")},
iX:function(a,b,c,d){var u,t,s
H.F(b,d)
H.n(c,{func:1,ret:d,args:[d,H.r(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.bp(a))}return t},
iW:function(a,b){var u,t,s
H.n(b,{func:1,ret:P.Q,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.G(b.$1(s)))return s
if(a.length!==u)throw H.c(P.bp(a))}throw H.c(H.hp())},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
eV:function(a,b,c){if(b<0||b>a.length)throw H.c(P.aj(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.aj(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.r(a,0)])
return H.d(a.slice(b,c),[H.r(a,0)])},
giV:function(a){if(a.length>0)return a[0]
throw H.c(H.hp())},
gaB:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.hp())},
dU:function(a,b){var u,t
H.n(b,{func:1,ret:P.Q,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.G(b.$1(a[t])))return!0
if(a.length!==u)throw H.c(P.bp(a))}return!1},
bS:function(a,b){var u=H.r(a,0)
H.n(b,{func:1,ret:P.l,args:[u,u]})
if(!!a.immutable$list)H.w(P.J("sort"))
H.ej(a,0,a.length-1,b,u)},
W:function(a,b){var u
for(u=0;u<a.length;++u)if(J.K(a[u],b))return!0
return!1},
i:function(a){return P.lp(a,"[","]")},
gU:function(a){return new J.aw(a,a.length,[H.r(a,0)])},
gI:function(a){return H.cY(a)},
gn:function(a){return a.length},
sn:function(a,b){if(!!a.fixed$length)H.w(P.J("set length"))
if(b<0)throw H.c(P.aj(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.cq(a,b))
return a[b]},
k:function(a,b,c){H.F(c,H.r(a,0))
if(!!a.immutable$list)H.w(P.J("indexed set"))
if(b>=a.length||b<0)throw H.c(H.cq(a,b))
a[b]=c},
$ij:1,
$ib:1}
J.lr.prototype={}
J.aw.prototype={
gJ:function(a){return this.d},
C:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.u(s))
u=t.c
if(u>=r){t.sdq(null)
return!1}t.sdq(s[u]);++t.c
return!0},
sdq:function(a){this.d=H.F(a,H.r(this,0))},
$ib9:1}
J.cN.prototype={
iC:function(a,b){var u
H.ne(b)
if(typeof b!=="number")throw H.c(H.b4(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbG(b)
if(this.gbG(a)===u)return 0
if(this.gbG(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbG:function(a){return a===0?1/a<0:a<0},
jx:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.J(""+a+".toInt()"))},
cA:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.J(""+a+".floor()"))},
at:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.J(""+a+".round()"))},
eI:function(a,b){var u
if(b>20)throw H.c(P.aj(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbG(a))return"-"+u
return u},
bp:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.aj(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.Z(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.w(P.J("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.e(t,1)
u=t[1]
if(3>=s)return H.e(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.u("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gI:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
bq:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
f0:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dL(a,b)},
ad:function(a,b){return(a|0)===a?a/b|0:this.dL(a,b)},
dL:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.J("Result of truncating division is "+H.i(u)+": "+H.i(a)+" ~/ "+b))},
aZ:function(a,b){var u
if(a>0)u=this.dK(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
i5:function(a,b){if(b<0)throw H.c(H.b4(b))
return this.dK(a,b)},
dK:function(a,b){return b>31?0:a>>>b},
$iA:1,
$iad:1}
J.dT.prototype={$il:1}
J.dS.prototype={}
J.bN.prototype={
Z:function(a,b){if(b<0)throw H.c(H.cq(a,b))
if(b>=a.length)H.w(H.cq(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(b>=a.length)throw H.c(H.cq(a,b))
return a.charCodeAt(b)},
A:function(a,b){if(typeof b!=="string")throw H.c(P.li(b,null,null))
return a+b},
b3:function(a,b,c,d){var u,t
c=P.bR(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
aa:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.aj(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a7:function(a,b){return this.aa(a,b,0)},
v:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.w(H.b4(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.R()
if(b<0)throw H.c(P.ec(b,null))
if(b>c)throw H.c(P.ec(b,null))
if(c>a.length)throw H.c(P.ec(c,null))
return a.substring(b,c)},
af:function(a,b){return this.v(a,b,null)},
jz:function(a){return a.toLowerCase()},
u:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.M)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ap:function(a,b){var u=b-a.length
if(u<=0)return a
return this.u(" ",u)+a},
bF:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.aj(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
en:function(a,b){return this.bF(a,b,0)},
i:function(a){return a},
gI:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gn:function(a){return a.length},
$imk:1,
$ih:1}
H.t.prototype={
gn:function(a){return this.a.length},
j:function(a,b){return C.b.Z(this.a,b)},
$adc:function(){return[P.l]},
$az:function(){return[P.l]},
$aj:function(){return[P.l]},
$ab:function(){return[P.l]}}
H.h4.prototype={}
H.c5.prototype={
gU:function(a){var u=this
return new H.cO(u,u.gn(u),[H.aq(u,"c5",0)])},
bQ:function(a,b){return this.eX(0,H.n(b,{func:1,ret:P.Q,args:[H.aq(this,"c5",0)]}))}}
H.cO.prototype={
gJ:function(a){return this.d},
C:function(){var u,t=this,s=t.a,r=J.dx(s),q=r.gn(s)
if(t.b!==q)throw H.c(P.bp(s))
u=t.c
if(u>=q){t.sb9(null)
return!1}t.sb9(r.K(s,u));++t.c
return!0},
sb9:function(a){this.d=H.F(a,H.r(this,0))},
$ib9:1}
H.hF.prototype={
gU:function(a){return new H.hG(J.bB(this.a),this.b,this.$ti)},
gn:function(a){return J.aH(this.a)},
K:function(a,b){return this.b.$1(J.fA(this.a,b))},
$aj:function(a,b){return[b]}}
H.hG.prototype={
C:function(){var u=this,t=u.b
if(t.C()){u.sb9(u.c.$1(t.gJ(t)))
return!0}u.sb9(null)
return!1},
gJ:function(a){return this.a},
sb9:function(a){this.a=H.F(a,H.r(this,1))},
$ab9:function(a,b){return[b]}}
H.hH.prototype={
gn:function(a){return J.aH(this.a)},
K:function(a,b){return this.b.$1(J.fA(this.a,b))},
$ac5:function(a,b){return[b]},
$aj:function(a,b){return[b]}}
H.df.prototype={
gU:function(a){return new H.jF(J.bB(this.a),this.b,this.$ti)}}
H.jF.prototype={
C:function(){var u,t
for(u=this.a,t=this.b;u.C();)if(H.G(t.$1(u.gJ(u))))return!0
return!1},
gJ:function(a){var u=this.a
return u.gJ(u)}}
H.c3.prototype={}
H.dc.prototype={
k:function(a,b,c){H.F(c,H.aq(this,"dc",0))
throw H.c(P.J("Cannot modify an unmodifiable list"))}}
H.et.prototype={}
H.fR.prototype={
i:function(a){return P.lv(this)},
k:function(a,b,c){H.F(b,H.r(this,0))
H.F(c,H.r(this,1))
return H.nU()},
$iC:1}
H.fS.prototype={
gn:function(a){return this.a},
bC:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bC(0,b))return
return this.dr(b)},
dr:function(a){return this.b[H.M(a)]},
H:function(a,b){var u,t,s,r,q=this,p=H.r(q,1)
H.n(b,{func:1,ret:-1,args:[H.r(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.F(q.dr(r),p))}}}
H.j2.prototype={
ao:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.i8.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.i(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hs.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.i(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.i(t.a)+")"
return s+r+"' on '"+u+"' ("+H.i(t.a)+")"}}
H.jf.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.lf.prototype={
$1:function(a){if(!!J.T(a).$ibI)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:25}
H.f8.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iaz:1}
H.cD.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
$ibJ:1,
gjA:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iQ.prototype={}
H.iG.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cw(u)+"'"}}
H.cz.prototype={
t:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cz))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gI:function(a){var u,t=this.c
if(t==null)u=H.cY(this.a)
else u=typeof t!=="object"?J.dC(t):H.cY(t)
return(u^H.cY(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.i(H.cZ(u))+"'")}}
H.j4.prototype={
i:function(a){return this.a}}
H.fN.prototype={
i:function(a){return this.a}}
H.is.prototype={
i:function(a){return"RuntimeError: "+H.i(this.a)}}
H.jG.prototype={
i:function(a){return"Assertion failed: "+P.dQ(this.a)}}
H.a6.prototype={
gn:function(a){return this.a},
gj3:function(a){return this.a===0},
ga8:function(a){return new H.hx(this,[H.r(this,0)])},
bC:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.dl(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.dl(t,b)}else return s.j0(b)},
j0:function(a){var u=this,t=u.d
if(t==null)return!1
return u.cD(u.c_(t,u.cC(a)),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bt(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bt(r,b)
s=t==null?null:t.b
return s}else return q.j1(b)},
j1:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.c_(r,s.cC(a))
t=s.cD(u,a)
if(t<0)return
return u[t].b},
k:function(a,b,c){var u,t,s=this
H.F(b,H.r(s,0))
H.F(c,H.r(s,1))
if(typeof b==="string"){u=s.b
s.dc(u==null?s.b=s.c9():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.dc(t==null?s.c=s.c9():t,b,c)}else s.j2(b,c)},
j2:function(a,b){var u,t,s,r,q=this
H.F(a,H.r(q,0))
H.F(b,H.r(q,1))
u=q.d
if(u==null)u=q.d=q.c9()
t=q.cC(a)
s=q.c_(u,t)
if(s==null)q.ci(u,t,[q.ca(a,b)])
else{r=q.cD(s,a)
if(r>=0)s[r].b=b
else s.push(q.ca(a,b))}},
H:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.r(s,0),H.r(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.c(P.bp(s))
u=u.c}},
dc:function(a,b,c){var u,t=this
H.F(b,H.r(t,0))
H.F(c,H.r(t,1))
u=t.bt(a,b)
if(u==null)t.ci(a,b,t.ca(b,c))
else u.b=c},
fO:function(){this.r=this.r+1&67108863},
ca:function(a,b){var u,t=this,s=new H.hw(H.F(a,H.r(t,0)),H.F(b,H.r(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.fO()
return s},
cC:function(a){return J.dC(a)&0x3ffffff},
cD:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.K(a[t].a,b))return t
return-1},
i:function(a){return P.lv(this)},
bt:function(a,b){return a[b]},
c_:function(a,b){return a[b]},
ci:function(a,b,c){a[b]=c},
ft:function(a,b){delete a[b]},
dl:function(a,b){return this.bt(a,b)!=null},
c9:function(){var u="<non-identifier-key>",t=Object.create(null)
this.ci(t,u,t)
this.ft(t,u)
return t}}
H.hw.prototype={}
H.hx.prototype={
gn:function(a){return this.a.a},
gU:function(a){var u=this.a,t=new H.hy(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hy.prototype={
gJ:function(a){return this.d},
C:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bp(t))
else{t=u.c
if(t==null){u.sda(null)
return!1}else{u.sda(t.a)
u.c=u.c.c
return!0}}},
sda:function(a){this.d=H.F(a,H.r(this,0))},
$ib9:1}
H.kS.prototype={
$1:function(a){return this.a(a)},
$S:25}
H.kT.prototype={
$2:function(a,b){return this.a(a,b)},
$S:42}
H.kU.prototype={
$1:function(a){return this.a(H.M(a))},
$S:44}
H.hr.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$imk:1,
$ioo:1}
H.cT.prototype={$icT:1}
H.bP.prototype={$ibP:1,$ioy:1}
H.e4.prototype={
gn:function(a){return a.length},
$iL:1,
$aL:function(){}}
H.cU.prototype={
j:function(a,b){H.bn(b,a,a.length)
return a[b]},
k:function(a,b,c){H.pI(c)
H.bn(b,a,a.length)
a[b]=c},
$ac3:function(){return[P.A]},
$az:function(){return[P.A]},
$ij:1,
$aj:function(){return[P.A]},
$ib:1,
$ab:function(){return[P.A]}}
H.e5.prototype={
k:function(a,b,c){H.ae(c)
H.bn(b,a,a.length)
a[b]=c},
$ac3:function(){return[P.l]},
$az:function(){return[P.l]},
$ij:1,
$aj:function(){return[P.l]},
$ib:1,
$ab:function(){return[P.l]}}
H.i0.prototype={
j:function(a,b){H.bn(b,a,a.length)
return a[b]}}
H.i1.prototype={
j:function(a,b){H.bn(b,a,a.length)
return a[b]}}
H.i2.prototype={
j:function(a,b){H.bn(b,a,a.length)
return a[b]}}
H.i3.prototype={
j:function(a,b){H.bn(b,a,a.length)
return a[b]}}
H.i4.prototype={
j:function(a,b){H.bn(b,a,a.length)
return a[b]}}
H.e6.prototype={
gn:function(a){return a.length},
j:function(a,b){H.bn(b,a,a.length)
return a[b]},
$iqs:1}
H.cV.prototype={
gn:function(a){return a.length},
j:function(a,b){H.bn(b,a,a.length)
return a[b]},
$icV:1,
$iR:1}
H.dk.prototype={}
H.dl.prototype={}
H.dm.prototype={}
H.dn.prototype={}
P.jI.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:31}
P.jH.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:35}
P.jJ.prototype={
$0:function(){this.a.$0()},
$S:0}
P.jK.prototype={
$0:function(){this.a.$0()},
$S:0}
P.fe.prototype={
fc:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cp(new P.ko(this,b),0),a)
else throw H.c(P.J("`setTimeout()` not found."))},
fd:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cp(new P.kn(this,a,Date.now(),b),0),a)
else throw H.c(P.J("Periodic timer."))},
$ibi:1}
P.ko.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.kn.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.f0(u,q)}s.c=r
t.d.$1(s)},
$S:0}
P.bm.prototype={
j6:function(a){if((this.c&15)!==6)return!0
return this.b.b.cR(H.n(this.d,{func:1,ret:P.Q,args:[P.W]}),a.a,P.Q,P.W)},
iZ:function(a){var u=this.e,t=P.W,s={futureOr:1,type:H.r(this,1)},r=this.b.b
if(H.fx(u,{func:1,args:[P.W,P.az]}))return H.lS(r.js(u,a.a,a.b,null,t,P.az),s)
else return H.lS(r.cR(H.n(u,{func:1,args:[P.W]}),a.a,null,t),s)}}
P.aP.prototype={
eH:function(a,b,c){var u,t,s,r=H.r(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.a3
if(u!==C.f){H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.pu(b,u)}t=new P.aP($.a3,[c])
s=b==null?1:3
this.dd(new P.bm(t,s,a,b,[r,c]))
return t},
jw:function(a,b){return this.eH(a,null,b)},
dd:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.f(t.c,"$ibm")
t.c=a}else{if(s===2){u=H.f(t.c,"$iaP")
s=u.a
if(s<4){u.dd(a)
return}t.a=s
t.c=u.c}P.kI(null,null,t.b,H.n(new P.jT(t,a),{func:1,ret:-1}))}},
dE:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.f(p.c,"$ibm")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.f(p.c,"$iaP")
u=q.a
if(u<4){q.dE(a)
return}p.a=u
p.c=q.c}o.a=p.bv(a)
P.kI(null,null,p.b,H.n(new P.jX(o,p),{func:1,ret:-1}))}},
cd:function(){var u=H.f(this.c,"$ibm")
this.c=null
return this.bv(u)},
bv:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
dh:function(a){var u,t,s=this,r=H.r(s,0)
H.lS(a,{futureOr:1,type:r})
u=s.$ti
if(H.lO(a,"$icJ",u,"$acJ"))if(H.lO(a,"$iaP",u,null))P.mK(a,s)
else P.oL(a,s)
else{t=s.cd()
H.F(a,r)
s.a=4
s.c=a
P.di(s,t)}},
di:function(a,b){var u,t=this
H.f(b,"$iaz")
u=t.cd()
t.a=8
t.c=new P.ar(a,b)
P.di(t,u)},
$icJ:1}
P.jT.prototype={
$0:function(){P.di(this.a,this.b)},
$S:0}
P.jX.prototype={
$0:function(){P.di(this.b,this.a.a)},
$S:0}
P.jU.prototype={
$1:function(a){var u=this.a
u.a=0
u.dh(a)},
$S:31}
P.jV.prototype={
$2:function(a,b){H.f(b,"$iaz")
this.a.di(a,b)},
$1:function(a){return this.$2(a,null)},
$S:57}
P.jW.prototype={
$0:function(){this.a.di(this.b,this.c)},
$S:0}
P.k_.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.eF(H.n(s.d,{func:1}),null)}catch(r){u=H.am(r)
t=H.cu(r)
if(o.d){s=H.f(o.a.a.c,"$iar").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.f(o.a.a.c,"$iar")
else q.b=new P.ar(u,t)
q.a=!0
return}if(!!J.T(n).$icJ){if(n instanceof P.aP&&n.a>=4){if(n.a===8){s=o.b
s.b=H.f(n.c,"$iar")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.jw(new P.k0(p),null)
s.a=!1}},
$S:3}
P.k0.prototype={
$1:function(a){return this.a},
$S:54}
P.jZ.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.r(s,0)
q=H.F(n.c,r)
p=H.r(s,1)
n.a.b=s.b.b.cR(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.am(o)
t=H.cu(o)
s=n.a
s.b=new P.ar(u,t)
s.a=!0}},
$S:3}
P.jY.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.f(m.a.a.c,"$iar")
r=m.c
if(H.G(r.j6(u))&&r.e!=null){q=m.b
q.b=r.iZ(u)
q.a=!1}}catch(p){t=H.am(p)
s=H.cu(p)
r=H.f(m.a.a.c,"$iar")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ar(t,s)
n.a=!0}},
$S:3}
P.eB.prototype={}
P.iJ.prototype={
gn:function(a){var u,t,s=this,r={},q=new P.aP($.a3,[P.l])
r.a=0
u=H.r(s,0)
t=H.n(new P.iL(r,s),{func:1,ret:-1,args:[u]})
H.n(new P.iM(r,q),{func:1,ret:-1})
W.ac(s.a,s.b,t,!1,u)
return q}}
P.iL.prototype={
$1:function(a){H.F(a,H.r(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.N,args:[H.r(this.b,0)]}}}
P.iM.prototype={
$0:function(){this.b.dh(this.a.a)},
$S:0}
P.d3.prototype={}
P.iK.prototype={}
P.bi.prototype={}
P.ar.prototype={
i:function(a){return H.i(this.a)},
$ibI:1}
P.kx.prototype={$iqH:1}
P.kH.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.e8():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u},
$S:0}
P.k6.prototype={
jt:function(a){var u,t,s,r=null
H.n(a,{func:1,ret:-1})
try{if(C.f===$.a3){a.$0()
return}P.mV(r,r,this,a,-1)}catch(s){u=H.am(s)
t=H.cu(s)
P.kG(r,r,this,u,H.f(t,"$iaz"))}},
ju:function(a,b,c){var u,t,s,r=null
H.n(a,{func:1,ret:-1,args:[c]})
H.F(b,c)
try{if(C.f===$.a3){a.$1(b)
return}P.mW(r,r,this,a,b,-1,c)}catch(s){u=H.am(s)
t=H.cu(s)
P.kG(r,r,this,u,H.f(t,"$iaz"))}},
iz:function(a,b){return new P.k8(this,H.n(a,{func:1,ret:b}),b)},
ck:function(a){return new P.k7(this,H.n(a,{func:1,ret:-1}))},
dW:function(a,b){return new P.k9(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
eF:function(a,b){H.n(a,{func:1,ret:b})
if($.a3===C.f)return a.$0()
return P.mV(null,null,this,a,b)},
cR:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.F(b,d)
if($.a3===C.f)return a.$1(b)
return P.mW(null,null,this,a,b,c,d)},
js:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.F(b,e)
H.F(c,f)
if($.a3===C.f)return a.$2(b,c)
return P.pv(null,null,this,a,b,c,d,e,f)}}
P.k8.prototype={
$0:function(){return this.a.eF(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.k7.prototype={
$0:function(){return this.a.jt(this.b)},
$S:3}
P.k9.prototype={
$1:function(a){var u=this.c
return this.a.ju(this.b,H.F(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.k4.prototype={
gU:function(a){var u=this,t=new P.eQ(u,u.r,u.$ti)
t.c=u.e
return t},
gn:function(a){return this.a},
W:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.f(u[b],"$icj")!=null}else{t=this.fn(b)
return t}},
fn:function(a){var u=this.d
if(u==null)return!1
return this.bY(this.ds(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.F(b,H.r(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.de(u==null?s.b=P.lE():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.de(t==null?s.c=P.lE():t,b)}else return s.fe(0,b)},
fe:function(a,b){var u,t,s,r=this
H.F(b,H.r(r,0))
u=r.d
if(u==null)u=r.d=P.lE()
t=r.dj(b)
s=u[t]
if(s==null)u[t]=[r.bV(b)]
else{if(r.bY(s,b)>=0)return!1
s.push(r.bV(b))}return!0},
D:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hQ(this.c,b)
else return this.hP(0,b)},
hP:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.ds(r,b)
t=s.bY(u,b)
if(t<0)return!1
s.dM(u.splice(t,1)[0])
return!0},
de:function(a,b){H.F(b,H.r(this,0))
if(H.f(a[b],"$icj")!=null)return!1
a[b]=this.bV(b)
return!0},
hQ:function(a,b){var u
if(a==null)return!1
u=H.f(a[b],"$icj")
if(u==null)return!1
this.dM(u)
delete a[b]
return!0},
dg:function(){this.r=1073741823&this.r+1},
bV:function(a){var u,t=this,s=new P.cj(H.F(a,H.r(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.dg()
return s},
dM:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.dg()},
dj:function(a){return J.dC(a)&1073741823},
ds:function(a,b){return a[this.dj(b)]},
bY:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.K(a[t].a,b))return t
return-1}}
P.cj.prototype={}
P.eQ.prototype={
gJ:function(a){return this.d},
C:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bp(t))
else{t=u.c
if(t==null){u.sdf(null)
return!1}else{u.sdf(H.F(t.a,H.r(u,0)))
u.c=u.c.b
return!0}}},
sdf:function(a){this.d=H.F(a,H.r(this,0))},
$ib9:1}
P.hz.prototype={
$2:function(a,b){this.a.k(0,H.F(a,this.b),H.F(b,this.c))},
$S:7}
P.hA.prototype={$ij:1,$ib:1}
P.z.prototype={
gU:function(a){return new H.cO(a,this.gn(a),[H.ct(this,a,"z",0)])},
K:function(a,b){return this.j(a,b)},
jy:function(a,b){var u,t=this,s=H.d([],[H.ct(t,a,"z",0)])
C.a.sn(s,t.gn(a))
for(u=0;u<t.gn(a);++u)C.a.k(s,u,t.j(a,u))
return s},
cT:function(a){return this.jy(a,!0)},
iS:function(a,b,c,d){var u
H.F(d,H.ct(this,a,"z",0))
P.bR(b,c,this.gn(a))
for(u=b;u<c;++u)this.k(a,u,d)},
i:function(a){return P.lp(a,"[","]")}}
P.hC.prototype={}
P.hD.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.i(a)
t.a=u+": "
t.a+=H.i(b)},
$S:7}
P.ag.prototype={
H:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.ct(s,a,"ag",0),H.ct(s,a,"ag",1)]})
for(u=J.bB(s.ga8(a));u.C();){t=u.gJ(u)
b.$2(t,s.j(a,t))}},
gn:function(a){return J.aH(this.ga8(a))},
i:function(a){return P.lv(a)},
$iC:1}
P.kp.prototype={
k:function(a,b,c){H.F(b,H.r(this,0))
H.F(c,H.r(this,1))
throw H.c(P.J("Cannot modify unmodifiable map"))}}
P.hE.prototype={
j:function(a,b){return J.dB(this.a,b)},
k:function(a,b,c){J.lg(this.a,H.F(b,H.r(this,0)),H.F(c,H.r(this,1)))},
H:function(a,b){J.m0(this.a,H.n(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]}))},
gn:function(a){return J.aH(this.a)},
i:function(a){return J.av(this.a)},
$iC:1}
P.eu.prototype={}
P.kb.prototype={
ae:function(a,b){var u
for(u=J.bB(H.m(b,"$ij",this.$ti,"$aj"));u.C();)this.h(0,u.gJ(u))},
i:function(a){return P.lp(this,"{","}")},
K:function(a,b){var u,t,s,r=this
P.mq(b,"index")
for(u=P.oP(r,r.r,H.r(r,0)),t=0;u.C();){s=u.d
if(b===t)return s;++t}throw H.c(P.a0(b,r,"index",null,t))},
$ij:1,
$imt:1}
P.eR.prototype={}
P.fk.prototype={}
P.fJ.prototype={
j7:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bR(a0,a1,b.length)
u=$.nB()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.b.F(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.kR(C.b.F(b,n))
j=H.kR(C.b.F(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.e(u,i)
h=u[i]
if(h>=0){i=C.b.Z("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.a8("")
g=r.a+=C.b.v(b,s,t)
r.a=g+H.c9(m)
s=n
continue}}throw H.c(P.a7("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.v(b,s,a1)
f=g.length
if(q>=0)P.m4(b,p,a1,q,o,f)
else{e=C.d.bq(f-1,4)+1
if(e===1)throw H.c(P.a7(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.b3(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.m4(b,p,a1,q,o,d)
else{e=C.d.bq(d,4)
if(e===1)throw H.c(P.a7(c,b,a1))
if(e>1)b=C.b.b3(b,a1,a1,e===2?"==":"=")}return b},
$ac1:function(){return[[P.b,P.l],P.h]}}
P.fK.prototype={
$abF:function(){return[[P.b,P.l],P.h]}}
P.c1.prototype={}
P.bF.prototype={}
P.h6.prototype={
$ac1:function(){return[P.h,[P.b,P.l]]}}
P.hm.prototype={
i:function(a){return this.a}}
P.hl.prototype={
fp:function(a,b,c){var u,t,s,r,q,p,o=null
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=o;r<c;++r){if(r>=a.length)return H.e(a,r)
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
default:p=o}if(p!=null){if(q==null)q=new P.a8("")
if(r>b)q.a+=C.b.v(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.nM(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abF:function(){return[P.h,P.h]}}
P.jn.prototype={
giR:function(){return C.N}}
P.jp.prototype={
cp:function(a){var u,t,s=P.bR(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.kv(u)
if(t.fE(a,0,s)!==s)t.dO(J.nI(a,s-1),0)
return new Uint8Array(u.subarray(0,H.p5(0,t.b,u.length)))},
$abF:function(){return[P.h,[P.b,P.l]]}}
P.kv.prototype={
dO:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
if((b&64512)===56320){u=65536+((a&1023)<<10)|b&1023
t.b=q
if(r>=p)return H.e(s,r)
s[r]=240|u>>>18
r=t.b=q+1
if(q>=p)return H.e(s,q)
s[q]=128|u>>>12&63
q=t.b=r+1
if(r>=p)return H.e(s,r)
s[r]=128|u>>>6&63
t.b=q+1
if(q>=p)return H.e(s,q)
s[q]=128|u&63
return!0}else{t.b=q
if(r>=p)return H.e(s,r)
s[r]=224|a>>>12
r=t.b=q+1
if(q>=p)return H.e(s,q)
s[q]=128|a>>>6&63
t.b=r+1
if(r>=p)return H.e(s,r)
s[r]=128|a&63
return!1}},
fE:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.Z(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.F(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dO(r,C.b.F(a,p)))s=p}else if(r<=2047){q=n.b
o=q+1
if(o>=t)break
n.b=o
if(q>=t)return H.e(u,q)
u[q]=192|r>>>6
n.b=o+1
u[o]=128|r&63}else{q=n.b
if(q+2>=t)break
o=n.b=q+1
if(q>=t)return H.e(u,q)
u[q]=224|r>>>12
q=n.b=o+1
if(o>=t)return H.e(u,o)
u[o]=128|r>>>6&63
n.b=q+1
if(q>=t)return H.e(u,q)
u[q]=128|r&63}}return s}}
P.jo.prototype={
cp:function(a){var u,t,s,r,q,p,o,n,m
H.m(a,"$ib",[P.l],"$ab")
u=P.oB(!1,a,0,null)
if(u!=null)return u
t=P.bR(0,null,J.aH(a))
s=P.mY(a,0,t)
if(s>0){r=P.d4(a,0,s)
if(s===t)return r
q=new P.a8(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.a8("")
n=new P.ku(!1,q)
n.c=o
n.iD(a,p,t)
if(n.e>0){H.w(P.a7("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.c9(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$abF:function(){return[[P.b,P.l],P.h]}}
P.ku.prototype={
iD:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.m(a,"$ib",[P.l],"$ab")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.dx(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.j(a,p)
if(typeof o!=="number")return o.aq()
if((o&192)!==128){n=P.a7(h+C.d.bp(o,16),a,p)
throw H.c(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.e(C.w,n)
if(u<=C.w[n]){n=P.a7("Overlong encoding of 0x"+C.d.bp(u,16),a,p-s-1)
throw H.c(n)}if(u>1114111){n=P.a7("Character outside valid Unicode range: 0x"+C.d.bp(u,16),a,p-s-1)
throw H.c(n)}if(!i.c||u!==65279)q.a+=H.c9(u)
i.c=!1}for(n=p<c;n;){m=P.mY(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.d4(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.j(a,l)
if(typeof o!=="number")return o.R()
if(o<0){j=P.a7("Negative UTF-8 code unit: -0x"+C.d.bp(-o,16),a,k-1)
throw H.c(j)}else{if((o&224)===192){u=o&31
t=1
s=1
continue $label0$0}if((o&240)===224){u=o&15
t=2
s=2
continue $label0$0}if((o&248)===240&&o<245){u=o&7
t=3
s=3
continue $label0$0}j=P.a7(h+C.d.bp(o,16),a,k-1)
throw H.c(j)}}break $label0$0}if(t>0){i.d=u
i.e=t
i.f=s}}}
P.Q.prototype={}
P.aC.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.aC&&this.a===b.a&&!0},
gI:function(a){var u=this.a
return(u^C.d.aZ(u,30))&1073741823},
i:function(a){var u=this,t=P.nV(H.ok(u)),s=P.dM(H.oi(u)),r=P.dM(H.oe(u)),q=P.dM(H.of(u)),p=P.dM(H.oh(u)),o=P.dM(H.oj(u)),n=P.nW(H.og(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.A.prototype={}
P.bH.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.bH&&this.a===b.a},
gI:function(a){return C.d.gI(this.a)},
i:function(a){var u,t,s,r=new P.h3(),q=this.a
if(q<0)return"-"+new P.bH(0-q).i(0)
u=r.$1(C.d.ad(q,6e7)%60)
t=r.$1(C.d.ad(q,1e6)%60)
s=new P.h2().$1(q%1e6)
return""+C.d.ad(q,36e8)+":"+H.i(u)+":"+H.i(t)+"."+H.i(s)}}
P.h2.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:17}
P.h3.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:17}
P.bI.prototype={}
P.fD.prototype={
i:function(a){return"Assertion failed"}}
P.e8.prototype={
i:function(a){return"Throw of null."}}
P.aR.prototype={
gbX:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbW:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbX()+o+u
if(!q.a)return t
s=q.gbW()
r=P.dQ(q.b)
return t+s+": "+r}}
P.ca.prototype={
gbX:function(){return"RangeError"},
gbW:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.i(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.i(s)
else if(t>s)u=": Not in range "+H.i(s)+".."+H.i(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.i(s)}return u}}
P.ho.prototype={
gbX:function(){return"RangeError"},
gbW:function(){var u,t=H.ae(this.b)
if(typeof t!=="number")return t.R()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.i(u)},
gn:function(a){return this.f}}
P.jg.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.jd.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.d2.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fQ.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dQ(u)+"."}}
P.ib.prototype={
i:function(a){return"Out of Memory"},
$ibI:1}
P.el.prototype={
i:function(a){return"Stack Overflow"},
$ibI:1}
P.fX.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eJ.prototype={
i:function(a){return"Exception: "+this.a}}
P.hg.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.b.v(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.b.F(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.b.Z(f,q)
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
k=""}j=C.b.v(f,m,n)
return h+l+j+k+"\n"+C.b.u(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.i(g)+")"):h}}
P.bJ.prototype={}
P.l.prototype={}
P.j.prototype={
bQ:function(a,b){var u=H.aq(this,"j",0)
return new H.df(this,H.n(b,{func:1,ret:P.Q,args:[u]}),[u])},
gn:function(a){var u,t=this.gU(this)
for(u=0;t.C();)++u
return u},
gaQ:function(a){var u,t=this.gU(this)
if(!t.C())throw H.c(H.hp())
u=t.gJ(t)
if(t.C())throw H.c(H.o0())
return u},
K:function(a,b){var u,t,s
P.mq(b,"index")
for(u=this.gU(this),t=0;u.C();){s=u.gJ(u)
if(b===t)return s;++t}throw H.c(P.a0(b,this,"index",null,t))},
i:function(a){return P.o_(this,"(",")")}}
P.b9.prototype={}
P.b.prototype={$ij:1}
P.C.prototype={}
P.N.prototype={
gI:function(a){return P.W.prototype.gI.call(this,this)},
i:function(a){return"null"}}
P.ad.prototype={}
P.W.prototype={constructor:P.W,$iW:1,
t:function(a,b){return this===b},
gI:function(a){return H.cY(this)},
i:function(a){return"Instance of '"+H.i(H.cZ(this))+"'"},
toString:function(){return this.i(this)}}
P.az.prototype={}
P.h.prototype={$imk:1}
P.a8.prototype={
gn:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$iqg:1}
P.jl.prototype={
$2:function(a,b){var u,t,s,r=P.h
H.m(a,"$iC",[r,r],"$aC")
H.M(b)
u=J.dy(b).en(b,"=")
if(u===-1){if(b!=="")J.lg(a,P.lI(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.v(b,0,u)
s=C.b.af(b,u+1)
r=this.a
J.lg(a,P.lI(t,0,t.length,r,!0),P.lI(s,0,s.length,r,!0))}return a},
$S:50}
P.ji.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv4 address, "+a,this.a,b))},
$S:48}
P.jj.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:47}
P.jk.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.fz(C.b.v(this.b,a,b),null,16)
if(typeof u!=="number")return u.R()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:46}
P.ck.prototype={
geO:function(){return this.b},
gcB:function(a){var u=this.c
if(u==null)return""
if(C.b.a7(u,"["))return C.b.v(u,1,u.length-1)
return u},
gbJ:function(a){var u=this.d
if(u==null)return P.mO(this.a)
return u},
gcN:function(a){var u=this.f
return u==null?"":u},
gei:function(){var u=this.r
return u==null?"":u},
eD:function(a,b){var u,t,s,r,q,p,o,n,m=this
H.m(b,"$iC",[P.h,null],"$aC")
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
n=P.lG(null,0,0,b)
return new P.ck(u,s,q,r,p,n,m.r)},
gcO:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.h
s.shO(new P.eu(P.mD(u==null?"":u),[t,t]))}return s.Q},
gej:function(){return this.c!=null},
gem:function(){return this.f!=null},
gek:function(){return this.r!=null},
i:function(a){var u,t,s,r=this,q=r.y
if(q==null){q=r.a
u=q.length!==0?H.i(q)+":":""
t=r.c
s=t==null
if(!s||q==="file"){q=u+"//"
u=r.b
if(u.length!==0)q=q+H.i(u)+"@"
if(!s)q+=t
u=r.d
if(u!=null)q=q+":"+H.i(u)}else q=u
q+=r.e
u=r.f
if(u!=null)q=q+"?"+u
u=r.r
if(u!=null)q=q+"#"+u
q=r.y=q.charCodeAt(0)==0?q:q}return q},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.T(b).$ilz)if(s.a==b.gbR())if(s.c!=null===b.gej())if(s.b==b.geO())if(s.gcB(s)==b.gcB(b))if(s.gbJ(s)==b.gbJ(b))if(s.e===b.geA(b)){u=s.f
t=u==null
if(!t===b.gem()){if(t)u=""
if(u===b.gcN(b)){u=s.r
t=u==null
if(!t===b.gek()){if(t)u=""
u=u===b.gei()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gI:function(a){var u=this.z
return u==null?this.z=C.b.gI(this.i(0)):u},
shO:function(a){var u=P.h
this.Q=H.m(a,"$iC",[u,u],"$aC")},
$ilz:1,
gbR:function(){return this.a},
geA:function(a){return this.e}}
P.kq.prototype={
$1:function(a){throw H.c(P.a7("Invalid port",this.a,this.b+1))},
$S:45}
P.kr.prototype={
$1:function(a){return P.fl(C.X,a,C.h,!1)},
$S:21}
P.kt.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.i(P.fl(C.i,a,C.h,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.i(P.fl(C.i,b,C.h,!0))}},
$S:22}
P.ks.prototype={
$2:function(a,b){var u,t
H.M(a)
if(b==null||typeof b==="string")this.a.$2(a,H.M(b))
else for(u=J.bB(H.nc(b,"$ij")),t=this.a;u.C();)t.$2(a,H.M(u.gJ(u)))},
$S:43}
P.jh.prototype={
geN:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.e(o,0)
u=q.a
o=o[0]+1
t=C.b.bF(u,"?",o)
s=u.length
if(t>=0){r=P.dt(u,t+1,s,C.m,!1)
s=t}else r=p
return q.c=new P.jO("data",p,p,p,P.dt(u,o,s,C.A,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.e(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.kB.prototype={
$1:function(a){return new Uint8Array(96)},
$S:41}
P.kA.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.e(u,a)
u=u[a]
J.nJ(u,0,96,b)
return u},
$S:58}
P.kC.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.b.F(b,s)^96
if(r>=t)return H.e(a,r)
a[r]=c}}}
P.kD.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.b.F(b,0),t=C.b.F(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.e(a,r)
a[r]=c}}}
P.ke.prototype={
gej:function(){return this.c>0},
gel:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.A()
t=this.e
if(typeof t!=="number")return H.E(t)
t=u+1<t
u=t}else u=!1
return u},
gem:function(){var u=this.f
if(typeof u!=="number")return u.R()
return u<this.r},
gek:function(){return this.r<this.a.length},
gdu:function(){return this.b===4&&C.b.a7(this.a,"http")},
gdv:function(){return this.b===5&&C.b.a7(this.a,"https")},
gbR:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gdu())q=t.x="http"
else if(t.gdv()){t.x="https"
q="https"}else if(q===4&&C.b.a7(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.a7(t.a,r)){t.x=r
q=r}else{q=C.b.v(t.a,0,q)
t.x=q}return q},
geO:function(){var u=this.c,t=this.b+3
return u>t?C.b.v(this.a,t,u-1):""},
gcB:function(a){var u=this.c
return u>0?C.b.v(this.a,u,this.d):""},
gbJ:function(a){var u,t=this
if(t.gel()){u=t.d
if(typeof u!=="number")return u.A()
return P.fz(C.b.v(t.a,u+1,t.e),null,null)}if(t.gdu())return 80
if(t.gdv())return 443
return 0},
geA:function(a){return C.b.v(this.a,this.e,this.f)},
gcN:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.R()
return u<t?C.b.v(this.a,u+1,t):""},
gei:function(){var u=this.r,t=this.a
return u<t.length?C.b.af(t,u+1):""},
gcO:function(){var u=this,t=u.f
if(typeof t!=="number")return t.R()
if(t>=u.r)return C.Y
t=P.h
return new P.eu(P.mD(u.gcN(u)),[t,t])},
eD:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.m(b,"$iC",[P.h,null],"$aC")
u=k.gbR()
t=u==="file"
s=k.c
r=s>0?C.b.v(k.a,k.b+3,s):""
q=k.gel()?k.gbJ(k):j
s=k.c
if(s>0)p=C.b.v(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.v(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.a7(o,"/"))o="/"+o
m=P.lG(j,0,0,b)
n=k.r
l=n<s.length?C.b.af(s,n+1):j
return new P.ck(u,r,p,q,o,m,l)},
gI:function(a){var u=this.y
return u==null?this.y=C.b.gI(this.a):u},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.T(b).$ilz&&this.a===b.i(0)},
i:function(a){return this.a},
$ilz:1}
P.jO.prototype={}
W.y.prototype={}
W.fB.prototype={
gn:function(a){return a.length}}
W.dD.prototype={
i:function(a){return String(a)},
$idD:1}
W.fC.prototype={
i:function(a){return String(a)}}
W.cy.prototype={$icy:1}
W.bZ.prototype={$ibZ:1}
W.bC.prototype={$ibC:1}
W.c0.prototype={
cY:function(a,b,c){if(c!=null)return a.getContext(b,P.pD(c))
return a.getContext(b)},
eR:function(a,b){return this.cY(a,b,null)},
$ic0:1}
W.cC.prototype={$icC:1}
W.bD.prototype={
gn:function(a){return a.length}}
W.cE.prototype={$icE:1}
W.fT.prototype={
gn:function(a){return a.length}}
W.Y.prototype={$iY:1}
W.cF.prototype={
gn:function(a){return a.length}}
W.fU.prototype={}
W.b7.prototype={}
W.b8.prototype={}
W.fV.prototype={
gn:function(a){return a.length}}
W.fW.prototype={
gn:function(a){return a.length}}
W.fZ.prototype={
gn:function(a){return a.length}}
W.aI.prototype={$iaI:1}
W.h_.prototype={
i:function(a){return String(a)}}
W.dN.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.m(c,"$iap",[P.ad],"$aap")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[[P.ap,P.ad]]},
$az:function(){return[[P.ap,P.ad]]},
$ij:1,
$aj:function(){return[[P.ap,P.ad]]},
$ib:1,
$ab:function(){return[[P.ap,P.ad]]},
$aI:function(){return[[P.ap,P.ad]]}}
W.dO.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(this.gaP(a))+" x "+H.i(this.gaJ(a))},
t:function(a,b){var u
if(b==null)return!1
u=J.T(b)
if(!u.$iap)return!1
return a.left===u.gbH(b)&&a.top===u.gbN(b)&&this.gaP(a)===u.gaP(b)&&this.gaJ(a)===u.gaJ(b)},
gI:function(a){return W.mM(C.e.gI(a.left),C.e.gI(a.top),C.e.gI(this.gaP(a)),C.e.gI(this.gaJ(a)))},
gdY:function(a){return a.bottom},
gaJ:function(a){return a.height},
gbH:function(a){return a.left},
gcQ:function(a){return a.right},
gbN:function(a){return a.top},
gaP:function(a){return a.width},
$iap:1,
$aap:function(){return[P.ad]}}
W.h0.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.M(c)
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[P.h]},
$az:function(){return[P.h]},
$ij:1,
$aj:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aI:function(){return[P.h]}}
W.h1.prototype={
gn:function(a){return a.length}}
W.jM.prototype={
gn:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.e(u,b)
return H.f(u[b],"$iU")},
k:function(a,b,c){var u
H.f(c,"$iU")
u=this.b
if(b<0||b>=u.length)return H.e(u,b)
this.a.replaceChild(c,u[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gU:function(a){var u=this.cT(this)
return new J.aw(u,u.length,[H.r(u,0)])},
$az:function(){return[W.U]},
$aj:function(){return[W.U]},
$ab:function(){return[W.U]}}
W.U.prototype={
giy:function(a){return new W.jP(a)},
gco:function(a){return new W.jM(a,a.children)},
ge_:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.R()
if(s<0)s=-s*0
if(typeof r!=="number")return r.R()
if(r<0)r=-r*0
return new P.ap(u,t,s,r,[P.ad])},
i:function(a){return a.localName},
an:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.mb
if(u==null){u=H.d([],[W.aF])
t=new W.e7(u)
C.a.h(u,W.mL(null))
C.a.h(u,W.mN())
$.mb=t
d=t}else d=u
u=$.ma
if(u==null){u=new W.fm(d)
$.ma=u
c=u}else{u.a=d
c=u}}if($.bq==null){u=document
t=u.implementation.createHTMLDocument("")
$.bq=t
$.ln=t.createRange()
t=$.bq.createElement("base")
H.f(t,"$icy")
t.href=u.baseURI
$.bq.head.appendChild(t)}u=$.bq
if(u.body==null){t=u.createElement("body")
u.body=H.f(t,"$ibC")}u=$.bq
if(!!this.$ibC)s=u.body
else{s=u.createElement(a.tagName)
$.bq.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.W(C.V,a.tagName)){$.ln.selectNodeContents(s)
r=$.ln.createContextualFragment(b)}else{s.innerHTML=b
r=$.bq.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.bq.body
if(s==null?u!=null:s!==u)J.m2(s)
c.cZ(r)
document.adoptNode(r)
return r},
iG:function(a,b,c){return this.an(a,b,c,null)},
eT:function(a,b){a.textContent=null
a.appendChild(this.an(a,b,null,null))},
$iU:1,
geG:function(a){return a.tagName}}
W.h5.prototype={
$1:function(a){return!!J.T(H.f(a,"$iH")).$iU},
$S:26}
W.o.prototype={$io:1}
W.k.prototype={
ip:function(a,b,c,d){H.n(c,{func:1,args:[W.o]})
if(c!=null)this.ff(a,b,c,!1)},
ff:function(a,b,c,d){return a.addEventListener(b,H.cp(H.n(c,{func:1,args:[W.o]}),1),!1)},
$ik:1}
W.aJ.prototype={$iaJ:1}
W.cI.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaJ")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aJ]},
$az:function(){return[W.aJ]},
$ij:1,
$aj:function(){return[W.aJ]},
$ib:1,
$ab:function(){return[W.aJ]},
$icI:1,
$aI:function(){return[W.aJ]}}
W.hb.prototype={
gn:function(a){return a.length}}
W.hf.prototype={
gn:function(a){return a.length}}
W.aT.prototype={$iaT:1}
W.hk.prototype={
gn:function(a){return a.length}}
W.c4.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iH")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.H]},
$az:function(){return[W.H]},
$ij:1,
$aj:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$ic4:1,
$aI:function(){return[W.H]}}
W.br.prototype={$ibr:1,
ge0:function(a){return a.data}}
W.cL.prototype={$icL:1}
W.cM.prototype={$icM:1}
W.bb.prototype={$ibb:1}
W.dZ.prototype={
i:function(a){return String(a)},
$idZ:1}
W.hU.prototype={
gn:function(a){return a.length}}
W.cR.prototype={$icR:1}
W.hV.prototype={
j:function(a,b){return P.bw(a.get(H.M(b)))},
H:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bw(t.value[1]))}},
ga8:function(a){var u=H.d([],[P.h])
this.H(a,new W.hW(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.J("Not supported"))},
$aag:function(){return[P.h,null]},
$iC:1,
$aC:function(){return[P.h,null]}}
W.hW.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.hX.prototype={
j:function(a,b){return P.bw(a.get(H.M(b)))},
H:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bw(t.value[1]))}},
ga8:function(a){var u=H.d([],[P.h])
this.H(a,new W.hY(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.J("Not supported"))},
$aag:function(){return[P.h,null]},
$iC:1,
$aC:function(){return[P.h,null]}}
W.hY.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.aU.prototype={$iaU:1}
W.hZ.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaU")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aU]},
$az:function(){return[W.aU]},
$ij:1,
$aj:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aI:function(){return[W.aU]}}
W.ah.prototype={$iah:1}
W.at.prototype={
gaQ:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.mu("No elements"))
if(t>1)throw H.c(P.mu("More than one element"))
return u.firstChild},
ae:function(a,b){var u,t,s,r
H.m(b,"$ij",[W.H],"$aj")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
k:function(a,b,c){var u,t
H.f(c,"$iH")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.e(t,b)
u.replaceChild(c,t[b])},
gU:function(a){var u=this.a.childNodes
return new W.dR(u,u.length,[H.ct(C.Z,u,"I",0)])},
gn:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
$az:function(){return[W.H]},
$aj:function(){return[W.H]},
$ab:function(){return[W.H]}}
W.H.prototype={
jn:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
jq:function(a,b){var u,t
try{u=a.parentNode
J.nG(u,b,a)}catch(t){H.am(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.eW(a):u},
it:function(a,b){return a.appendChild(H.f(b,"$iH"))},
hT:function(a,b,c){return a.replaceChild(b,c)},
$iH:1}
W.cW.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iH")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.H]},
$az:function(){return[W.H]},
$ij:1,
$aj:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$aI:function(){return[W.H]}}
W.aV.prototype={$iaV:1,
gn:function(a){return a.length}}
W.ie.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaV")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aV]},
$az:function(){return[W.aV]},
$ij:1,
$aj:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aI:function(){return[W.aV]}}
W.iq.prototype={
j:function(a,b){return P.bw(a.get(H.M(b)))},
H:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bw(t.value[1]))}},
ga8:function(a){var u=H.d([],[P.h])
this.H(a,new W.ir(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.J("Not supported"))},
$aag:function(){return[P.h,null]},
$iC:1,
$aC:function(){return[P.h,null]}}
W.ir.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.it.prototype={
gn:function(a){return a.length}}
W.aX.prototype={$iaX:1}
W.iD.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaX")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aX]},
$az:function(){return[W.aX]},
$ij:1,
$aj:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aI:function(){return[W.aX]}}
W.aY.prototype={$iaY:1}
W.iE.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaY")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aY]},
$az:function(){return[W.aY]},
$ij:1,
$aj:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$aI:function(){return[W.aY]}}
W.aZ.prototype={$iaZ:1,
gn:function(a){return a.length}}
W.iH.prototype={
j:function(a,b){return a.getItem(H.M(b))},
k:function(a,b,c){a.setItem(b,c)},
H:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga8:function(a){var u=H.d([],[P.h])
this.H(a,new W.iI(u))
return u},
gn:function(a){return a.length},
$aag:function(){return[P.h,P.h]},
$iC:1,
$aC:function(){return[P.h,P.h]}}
W.iI.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:22}
W.aL.prototype={$iaL:1}
W.bh.prototype={$ibh:1}
W.em.prototype={
an:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bT(a,b,c,d)
u=W.nX("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.at(t).ae(0,new W.at(u))
return t}}
W.iO.prototype={
an:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bT(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.an(u.createElement("table"),b,c,d)
u.toString
u=new W.at(u)
s=u.gaQ(u)
s.toString
u=new W.at(s)
r=u.gaQ(u)
t.toString
r.toString
new W.at(t).ae(0,new W.at(r))
return t}}
W.iP.prototype={
an:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bT(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.an(u.createElement("table"),b,c,d)
u.toString
u=new W.at(u)
s=u.gaQ(u)
t.toString
s.toString
new W.at(t).ae(0,new W.at(s))
return t}}
W.d6.prototype={$id6:1}
W.b0.prototype={$ib0:1}
W.aM.prototype={$iaM:1}
W.iR.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaM")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aM]},
$az:function(){return[W.aM]},
$ij:1,
$aj:function(){return[W.aM]},
$ib:1,
$ab:function(){return[W.aM]},
$aI:function(){return[W.aM]}}
W.iS.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$ib0")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.b0]},
$az:function(){return[W.b0]},
$ij:1,
$aj:function(){return[W.b0]},
$ib:1,
$ab:function(){return[W.b0]},
$aI:function(){return[W.b0]}}
W.iW.prototype={
gn:function(a){return a.length}}
W.b1.prototype={$ib1:1}
W.b2.prototype={$ib2:1}
W.j_.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$ib1")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.b1]},
$az:function(){return[W.b1]},
$ij:1,
$aj:function(){return[W.b1]},
$ib:1,
$ab:function(){return[W.b1]},
$aI:function(){return[W.b1]}}
W.j0.prototype={
gn:function(a){return a.length}}
W.bT.prototype={}
W.jm.prototype={
i:function(a){return String(a)}}
W.jE.prototype={
gn:function(a){return a.length}}
W.bl.prototype={
giJ:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.J("deltaY is not supported"))},
giI:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.J("deltaX is not supported"))},
$ibl:1}
W.dg.prototype={
hV:function(a,b){return a.requestAnimationFrame(H.cp(H.n(b,{func:1,ret:-1,args:[P.ad]}),1))},
fw:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.dh.prototype={$idh:1}
W.jN.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iY")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.Y]},
$az:function(){return[W.Y]},
$ij:1,
$aj:function(){return[W.Y]},
$ib:1,
$ab:function(){return[W.Y]},
$aI:function(){return[W.Y]}}
W.eE.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
t:function(a,b){var u
if(b==null)return!1
u=J.T(b)
if(!u.$iap)return!1
return a.left===u.gbH(b)&&a.top===u.gbN(b)&&a.width===u.gaP(b)&&a.height===u.gaJ(b)},
gI:function(a){return W.mM(C.e.gI(a.left),C.e.gI(a.top),C.e.gI(a.width),C.e.gI(a.height))},
gaJ:function(a){return a.height},
gaP:function(a){return a.width}}
W.k1.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaT")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aT]},
$az:function(){return[W.aT]},
$ij:1,
$aj:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aI:function(){return[W.aT]}}
W.eW.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iH")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.H]},
$az:function(){return[W.H]},
$ij:1,
$aj:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$aI:function(){return[W.H]}}
W.kf.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaZ")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aZ]},
$az:function(){return[W.aZ]},
$ij:1,
$aj:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$aI:function(){return[W.aZ]}}
W.kj.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaL")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aL]},
$az:function(){return[W.aL]},
$ij:1,
$aj:function(){return[W.aL]},
$ib:1,
$ab:function(){return[W.aL]},
$aI:function(){return[W.aL]}}
W.jL.prototype={
H:function(a,b){var u,t,s,r,q
H.n(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=this.ga8(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.u)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga8:function(a){var u,t,s,r=this.a.attributes,q=H.d([],[P.h])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.e(r,t)
s=H.f(r[t],"$idh")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aag:function(){return[P.h,P.h]},
$aC:function(){return[P.h,P.h]}}
W.jP.prototype={
j:function(a,b){return this.a.getAttribute(H.M(b))},
k:function(a,b,c){this.a.setAttribute(b,c)},
gn:function(a){return this.ga8(this).length}}
W.jQ.prototype={}
W.lD.prototype={}
W.jR.prototype={}
W.jS.prototype={
$1:function(a){return this.a.$1(H.f(a,"$io"))},
$S:40}
W.bU.prototype={
f6:function(a){var u
if($.dj.gj3($.dj)){for(u=0;u<262;++u)$.dj.k(0,C.U[u],W.pN())
for(u=0;u<12;++u)$.dj.k(0,C.q[u],W.pO())}},
b_:function(a){return $.nC().W(0,W.cG(a))},
aA:function(a,b,c){var u=$.dj.j(0,H.i(W.cG(a))+"::"+b)
if(u==null)u=$.dj.j(0,"*::"+b)
if(u==null)return!1
return H.lN(u.$4(a,b,c,this))},
$iaF:1}
W.I.prototype={
gU:function(a){return new W.dR(a,this.gn(a),[H.ct(this,a,"I",0)])}}
W.e7.prototype={
b_:function(a){return C.a.dU(this.a,new W.i6(a))},
aA:function(a,b,c){return C.a.dU(this.a,new W.i5(a,b,c))},
$iaF:1}
W.i6.prototype={
$1:function(a){return H.f(a,"$iaF").b_(this.a)},
$S:27}
W.i5.prototype={
$1:function(a){return H.f(a,"$iaF").aA(this.a,this.b,this.c)},
$S:27}
W.f3.prototype={
fb:function(a,b,c,d){var u,t,s
this.a.ae(0,c)
u=b.bQ(0,new W.kc())
t=b.bQ(0,new W.kd())
this.b.ae(0,u)
s=this.c
s.ae(0,C.x)
s.ae(0,t)},
b_:function(a){return this.a.W(0,W.cG(a))},
aA:function(a,b,c){var u=this,t=W.cG(a),s=u.c
if(s.W(0,H.i(t)+"::"+b))return u.d.is(c)
else if(s.W(0,"*::"+b))return u.d.is(c)
else{s=u.b
if(s.W(0,H.i(t)+"::"+b))return!0
else if(s.W(0,"*::"+b))return!0
else if(s.W(0,H.i(t)+"::*"))return!0
else if(s.W(0,"*::*"))return!0}return!1},
$iaF:1}
W.kc.prototype={
$1:function(a){return!C.a.W(C.q,H.M(a))},
$S:28}
W.kd.prototype={
$1:function(a){return C.a.W(C.q,H.M(a))},
$S:28}
W.kl.prototype={
aA:function(a,b,c){if(this.f_(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.W(0,b)
return!1}}
W.km.prototype={
$1:function(a){return"TEMPLATE::"+H.i(H.M(a))},
$S:21}
W.kk.prototype={
b_:function(a){var u=J.T(a)
if(!!u.$id_)return!1
u=!!u.$ip
if(u&&W.cG(a)==="foreignObject")return!1
if(u)return!0
return!1},
aA:function(a,b,c){if(b==="is"||C.b.a7(b,"on"))return!1
return this.b_(a)},
$iaF:1}
W.dR.prototype={
C:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sdt(J.dB(u.a,t))
u.c=t
return!0}u.sdt(null)
u.c=s
return!1},
gJ:function(a){return this.d},
sdt:function(a){this.d=H.F(a,H.r(this,0))},
$ib9:1}
W.aF.prototype={}
W.ka.prototype={$iqt:1}
W.fm.prototype={
cZ:function(a){new W.kw(this).$2(a,null)},
bc:function(a,b){if(b==null)J.m2(a)
else b.removeChild(a)},
i_:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.nK(a)
n=o.a.getAttribute("is")
H.f(a,"$iU")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.G(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.am(r)}t="element unprintable"
try{t=J.av(a)}catch(r){H.am(r)}try{s=W.cG(a)
this.hZ(H.f(a,"$iU"),b,p,t,s,H.f(o,"$iC"),H.M(n))}catch(r){if(H.am(r) instanceof P.aR)throw r
else{this.bc(a,b)
window
q="Removing corrupted element "+H.i(t)
if(typeof console!="undefined")window.console.warn(q)}}},
hZ:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.bc(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.b_(a)){o.bc(a,b)
window
u="Removing disallowed element <"+H.i(e)+"> from "+H.i(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.aA(a,"is",g)){o.bc(a,b)
window
u="Removing disallowed type extension <"+H.i(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga8(f)
t=H.d(u.slice(0),[H.r(u,0)])
for(s=f.ga8(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.e(t,s)
r=t[s]
q=o.a
p=J.nN(r)
H.M(r)
if(!q.aA(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.i(e)+" "+r+'="'+H.i(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.T(a).$id6)o.cZ(a.content)},
$iqe:1}
W.kw.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.i_(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.bc(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.am(s)
r=H.f(u,"$iH")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.f(t,"$iH")}},
$S:39}
W.eD.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.eS.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.eV.prototype={}
W.eX.prototype={}
W.eY.prototype={}
W.f0.prototype={}
W.f1.prototype={}
W.f2.prototype={}
W.dp.prototype={}
W.dq.prototype={}
W.f4.prototype={}
W.f5.prototype={}
W.f9.prototype={}
W.fc.prototype={}
W.fd.prototype={}
W.dr.prototype={}
W.ds.prototype={}
W.ff.prototype={}
W.fg.prototype={}
W.fn.prototype={}
W.fo.prototype={}
W.fp.prototype={}
W.fq.prototype={}
W.fr.prototype={}
W.fs.prototype={}
W.ft.prototype={}
W.fu.prototype={}
W.fv.prototype={}
W.fw.prototype={}
P.kg.prototype={
eh:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
cW:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.T(a)
if(!!u.$iaC)return new Date(a.a)
if(!!u.$ioo)throw H.c(P.je("structured clone of RegExp"))
if(!!u.$iaJ)return a
if(!!u.$ibZ)return a
if(!!u.$icI)return a
if(!!u.$ibr)return a
if(!!u.$icT||!!u.$ibP||!!u.$icR)return a
if(!!u.$iC){t=q.eh(a)
s=q.b
if(t>=s.length)return H.e(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.k(s,t,r)
u.H(a,new P.ki(p,q))
return p.a}if(!!u.$ib){t=q.eh(a)
p=q.b
if(t>=p.length)return H.e(p,t)
r=p[t]
if(r!=null)return r
return q.iF(a,t)}throw H.c(P.je("structured clone of other type"))},
iF:function(a,b){var u,t=J.dx(a),s=t.gn(a),r=new Array(s)
C.a.k(this.b,b,r)
for(u=0;u<s;++u)C.a.k(r,u,this.cW(t.j(a,u)))
return r}}
P.ki.prototype={
$2:function(a,b){this.a.a[a]=this.b.cW(b)},
$S:7}
P.fj.prototype={$ibr:1,
ge0:function(a){return this.a}}
P.kJ.prototype={
$2:function(a,b){this.a[a]=b},
$S:7}
P.kh.prototype={}
P.hc.prototype={
gbu:function(){var u=this.b,t=H.aq(u,"z",0),s=W.U
return new H.hF(new H.df(u,H.n(new P.hd(),{func:1,ret:P.Q,args:[t]}),[t]),H.n(new P.he(),{func:1,ret:s,args:[t]}),[t,s])},
k:function(a,b,c){var u
H.f(c,"$iU")
u=this.gbu()
J.nL(u.b.$1(J.fA(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gn:function(a){return J.aH(this.gbu().a)},
j:function(a,b){var u=this.gbu()
return u.b.$1(J.fA(u.a,b))},
gU:function(a){var u=P.mg(this.gbu(),!1,W.U)
return new J.aw(u,u.length,[H.r(u,0)])},
$az:function(){return[W.U]},
$aj:function(){return[W.U]},
$ab:function(){return[W.U]}}
P.hd.prototype={
$1:function(a){return!!J.T(H.f(a,"$iH")).$iU},
$S:26}
P.he.prototype={
$1:function(a){return H.q(H.f(a,"$iH"),"$iU")},
$S:38}
P.k5.prototype={
gcQ:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.E(t)
return H.F(u+t,H.r(this,0))},
gdY:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.E(t)
return H.F(u+t,H.r(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.i(u.a)+", "+H.i(u.b)+") "+H.i(u.c)+" x "+H.i(u.d)},
t:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.T(b)
if(!!u.$iap){t=p.a
if(t==u.gbH(b)){s=p.b
if(s==u.gbN(b)){r=p.c
if(typeof t!=="number")return t.A()
if(typeof r!=="number")return H.E(r)
q=H.r(p,0)
if(H.F(t+r,q)===u.gcQ(b)){t=p.d
if(typeof s!=="number")return s.A()
if(typeof t!=="number")return H.E(t)
u=H.F(s+t,q)===u.gdY(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gI:function(a){var u,t=this,s=t.a,r=J.dC(s),q=t.b,p=J.dC(q),o=t.c
if(typeof s!=="number")return s.A()
if(typeof o!=="number")return H.E(o)
u=H.r(t,0)
o=C.d.gI(H.F(s+o,u))
s=t.d
if(typeof q!=="number")return q.A()
if(typeof s!=="number")return H.E(s)
u=C.d.gI(H.F(q+s,u))
return P.oO(P.k3(P.k3(P.k3(P.k3(0,r),p),o),u))}}
P.ap.prototype={
gbH:function(a){return this.a},
gbN:function(a){return this.b},
gaP:function(a){return this.c},
gaJ:function(a){return this.d}}
P.bc.prototype={$ibc:1}
P.hu.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ibc")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$az:function(){return[P.bc]},
$ij:1,
$aj:function(){return[P.bc]},
$ib:1,
$ab:function(){return[P.bc]},
$aI:function(){return[P.bc]}}
P.bf.prototype={$ibf:1}
P.i9.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ibf")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$az:function(){return[P.bf]},
$ij:1,
$aj:function(){return[P.bf]},
$ib:1,
$ab:function(){return[P.bf]},
$aI:function(){return[P.bf]}}
P.ih.prototype={
gn:function(a){return a.length}}
P.d_.prototype={$id_:1}
P.iN.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.M(c)
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$az:function(){return[P.h]},
$ij:1,
$aj:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aI:function(){return[P.h]}}
P.p.prototype={
gco:function(a){return new P.hc(a,new W.at(a))},
an:function(a,b,c,d){var u,t,s,r,q,p=H.d([],[W.aF])
C.a.h(p,W.mL(null))
C.a.h(p,W.mN())
C.a.h(p,new W.kk())
c=new W.fm(new W.e7(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.t).iG(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.at(s)
q=p.gaQ(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ip:1}
P.bj.prototype={$ibj:1}
P.j1.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ibj")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$az:function(){return[P.bj]},
$ij:1,
$aj:function(){return[P.bj]},
$ib:1,
$ab:function(){return[P.bj]},
$aI:function(){return[P.bj]}}
P.eO.prototype={}
P.eP.prototype={}
P.eZ.prototype={}
P.f_.prototype={}
P.fa.prototype={}
P.fb.prototype={}
P.fh.prototype={}
P.fi.prototype={}
P.R.prototype={$ij:1,
$aj:function(){return[P.l]},
$ib:1,
$ab:function(){return[P.l]},
$ioy:1}
P.fF.prototype={
gn:function(a){return a.length}}
P.fG.prototype={
j:function(a,b){return P.bw(a.get(H.M(b)))},
H:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bw(t.value[1]))}},
ga8:function(a){var u=H.d([],[P.h])
this.H(a,new P.fH(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.J("Not supported"))},
$aag:function(){return[P.h,null]},
$iC:1,
$aC:function(){return[P.h,null]}}
P.fH.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
P.fI.prototype={
gn:function(a){return a.length}}
P.bY.prototype={}
P.ia.prototype={
gn:function(a){return a.length}}
P.eC.prototype={}
P.dG.prototype={$idG:1}
P.eb.prototype={$ieb:1}
P.cb.prototype={
jv:function(a,b,c,d,e,f,g){var u,t=J.T(g)
if(!!t.$ibr)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.pE(g))
return}if(!!t.$icL)t=!0
else t=!1
if(t){this.ia(a,b,c,d,e,f,g)
return}throw H.c(P.dE("Incorrect number or type of arguments"))},
ia:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
a4:function(a,b,c){return a.uniform1f(b,c)},
bP:function(a,b,c){return a.uniform1i(b,c)},
a0:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
eK:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
eL:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eM:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$icb:1}
P.ee.prototype={$iee:1}
P.en.prototype={$ien:1}
P.es.prototype={$ies:1}
P.iF.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return P.bw(a.item(b))},
k:function(a,b,c){H.f(c,"$iC")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$az:function(){return[[P.C,,,]]},
$ij:1,
$aj:function(){return[[P.C,,,]]},
$ib:1,
$ab:function(){return[[P.C,,,]]},
$aI:function(){return[[P.C,,,]]}}
P.f6.prototype={}
P.f7.prototype={}
O.a5.prototype={
bs:function(a){var u=this
u.sfJ(H.d([],[a]))
u.sdC(null)
u.sdw(null)
u.sdD(null)},
d_:function(a,b,c){var u=this,t=H.aq(u,"a5",0)
H.n(b,{func:1,ret:P.Q,args:[[P.j,t]]})
t={func:1,ret:-1,args:[P.l,[P.j,t]]}
H.n(a,t)
H.n(c,t)
u.sdC(b)
u.sdw(a)
u.sdD(c)},
b5:function(a,b){return this.d_(a,null,b)},
dB:function(a){var u
H.m(a,"$ij",[H.aq(this,"a5",0)],"$aj")
u=this.b
if(u!=null)return u.$1(a)
return!0},
d6:function(a,b){var u
H.m(b,"$ij",[H.aq(this,"a5",0)],"$aj")
u=this.c
if(u!=null)u.$2(a,b)},
gn:function(a){return this.a.length},
gU:function(a){var u=this.a
return new J.aw(u,u.length,[H.r(u,0)])},
K:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.aq(s,"a5",0)
H.F(b,r)
r=[r]
if(H.G(s.dB(H.d([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.d6(t,H.d([b],r))}},
ae:function(a,b){var u,t,s=this
H.m(b,"$ij",[H.aq(s,"a5",0)],"$aj")
if(H.G(s.dB(b))){u=s.a
t=u.length
C.a.ae(u,b)
s.d6(t,b)}},
sfJ:function(a){this.a=H.m(a,"$ib",[H.aq(this,"a5",0)],"$ab")},
sdC:function(a){this.b=H.n(a,{func:1,ret:P.Q,args:[[P.j,H.aq(this,"a5",0)]]})},
sdw:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.l,[P.j,H.aq(this,"a5",0)]]})},
sdD:function(a){H.n(a,{func:1,ret:-1,args:[P.l,[P.j,H.aq(this,"a5",0)]]})},
$ij:1}
O.cQ.prototype={
gn:function(a){return this.a.length},
gq:function(){var u=this.b
return u==null?this.b=D.V():u},
aR:function(){var u=this.b
if(u!=null)u.E(null)},
ga6:function(a){var u=this.a
if(u.length>0)return C.a.gaB(u)
else return V.c6()},
bL:function(a){var u=this.a
if(a==null)C.a.h(u,V.c6())
else C.a.h(u,a)
this.aR()},
aL:function(){var u=this.a
if(u.length>0){u.pop()
this.aR()}},
sc1:function(a){this.a=H.m(a,"$ib",[V.ax],"$ab")}}
E.fL.prototype={}
E.as.prototype={
sa9:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gq().D(0,s.gex())
u=s.c
if(u!=null)u.gq().h(0,s.gex())
t=new D.O("shape",r,s.c,[F.ef])
t.b=!0
s.bI(t)}},
av:function(a,b){var u
for(u=this.y.a,u=new J.aw(u,u.length,[H.r(u,0)]);u.C();)u.d.av(0,b)},
ah:function(a){var u,t=this,s=a.dx
C.a.h(s.a,s.ga6(s))
s.aR()
a.cM(t.f)
s=a.dy
u=(s&&C.a).gaB(s)
if(u!=null&&t.d!=null)u.eC(a,t)
for(s=t.y.a,s=new J.aw(s,s.length,[H.r(s,0)]);s.C();)s.d.ah(a)
a.cL()
a.dx.aL()},
bI:function(a){var u=this.z
if(u!=null)u.E(a)},
V:function(){return this.bI(null)},
ey:function(a){H.f(a,"$iB")
this.e=null
this.bI(a)},
jd:function(){return this.ey(null)},
ew:function(a){this.bI(H.f(a,"$iB"))},
ja:function(){return this.ew(null)},
j9:function(a,b){var u,t,s,r,q,p,o
H.m(b,"$ij",[E.as],"$aj")
for(u=b.length,t=this.gev(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c2()
o.sak(null)
o.saX(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sak(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.V()},
jc:function(a,b){var u,t
H.m(b,"$ij",[E.as],"$aj")
for(u=b.gU(b),t=this.gev();u.C();)u.gJ(u).gq().D(0,t)
this.V()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
sf5:function(a,b){this.y=H.m(b,"$ia5",[E.as],"$aa5")},
$ic7:1}
E.il.prototype={
f2:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.aC(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cQ()
t=[V.ax]
u.sc1(H.d([],t))
u.b=null
u.gq().h(0,new E.im(s))
s.cy=u
u=new O.cQ()
u.sc1(H.d([],t))
u.b=null
u.gq().h(0,new E.io(s))
s.db=u
u=new O.cQ()
u.sc1(H.d([],t))
u.b=null
u.gq().h(0,new E.ip(s))
s.dx=u
s.si9(H.d([],[O.bS]))
u=s.dy;(u&&C.a).h(u,null)
s.si4(new H.a6([P.h,A.d0]))},
gjm:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga6(s)
u=t.db
u=t.z=s.u(0,u.ga6(u))
s=u}return s},
cM:function(a){var u=this.dy,t=a==null?(u&&C.a).gaB(u):a;(u&&C.a).h(u,t)},
cL:function(){var u=this.dy
if(u.length>1)u.pop()},
dT:function(a){var u=a.b
if(u.length===0)throw H.c(P.v("May not cache a shader with no name."))
if(this.fr.bC(0,u))throw H.c(P.v('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.k(0,u,a)},
si9:function(a){this.dy=H.m(a,"$ib",[O.bS],"$ab")},
si4:function(a){this.fr=H.m(a,"$iC",[P.h,A.d0],"$aC")}}
E.im.prototype={
$1:function(a){var u
H.f(a,"$iB")
u=this.a
u.ch=u.z=null},
$S:9}
E.io.prototype={
$1:function(a){var u
H.f(a,"$iB")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:9}
E.ip.prototype={
$1:function(a){var u
H.f(a,"$iB")
u=this.a
u.cx=u.ch=null},
$S:9}
E.eo.prototype={
d9:function(a){H.f(a,"$iB")
this.eE()},
d8:function(){return this.d9(null)},
giY:function(){var u,t=this,s=Date.now(),r=C.d.ad(P.m9(s-t.cx.a).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.aC(s,!1)
return u/r},
dG:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.u()
if(typeof r!=="number")return H.E(r)
u=C.e.cA(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.u()
t=C.e.cA(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.mx(C.o,s.gjr())}},
eE:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.iV(this),{func:1,ret:-1,args:[P.ad]})
C.E.fw(u)
C.E.hV(u,W.n0(t,P.ad))}},
jp:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.dG()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aC(r,!1)
s.y=P.m9(r-s.r.a).a*0.000001
r=s.cy
C.a.sn(r.a,0)
r.aR()
r=s.db
C.a.sn(r.a,0)
r.aR()
r=s.dx
C.a.sn(r.a,0)
r.aR()
r=s.dy;(r&&C.a).sn(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.ah(p.e)}s=p.z
if(s!=null)s.E(null)}catch(q){u=H.am(q)
t=H.cu(q)
P.lW("Error: "+H.i(u))
P.lW("Stack: "+H.i(t))
throw H.c(u)}}}
E.iV.prototype={
$1:function(a){var u
H.ne(a)
u=this.a
if(u.ch){u.ch=!1
u.jp()}},
$S:37}
Z.ez.prototype={$iq8:1}
Z.dH.prototype={
a3:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.am(s)
t=P.v('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.i(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.i(u.e)+"]"}}
Z.eA.prototype={$iq9:1}
Z.cB.prototype={
aI:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
a3:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].a3(a)},
aO:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
ah:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.e(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.h],p=H.d([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(p,u[s].i(0))
r=H.d([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.av(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(p,", ")+"\nAttrs:   "+C.a.m(r,", ")},
sfF:function(a){this.b=H.m(a,"$ib",[Z.bK],"$ab")},
$iqh:1}
Z.bK.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.i(H.cZ(this.c))+"'")+"]"}}
Z.bv.prototype={
gd1:function(a){var u=this.a,t=(u&$.b5().a)!==0?3:0
if((u&$.bz().a)!==0)t+=3
if((u&$.by().a)!==0)t+=3
if((u&$.bX().a)!==0)t+=2
if((u&$.bA().a)!==0)t+=3
if((u&$.dz().a)!==0)t+=3
if((u&$.dA().a)!==0)t+=4
if((u&$.cx().a)!==0)++t
return(u&$.bx().a)!==0?t+4:t},
iu:function(a){var u,t=$.b5(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bz()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.by()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bX()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bA()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dz()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dA()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cx()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bx()
if((s&t.a)!==0)if(u===a)return t
return $.nA()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bv))return!1
return this.a===b.a},
i:function(a){var u=H.d([],[P.h]),t=this.a
if((t&$.b5().a)!==0)C.a.h(u,"Pos")
if((t&$.bz().a)!==0)C.a.h(u,"Norm")
if((t&$.by().a)!==0)C.a.h(u,"Binm")
if((t&$.bX().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bA().a)!==0)C.a.h(u,"TxtCube")
if((t&$.dz().a)!==0)C.a.h(u,"Clr3")
if((t&$.dA().a)!==0)C.a.h(u,"Clr4")
if((t&$.cx().a)!==0)C.a.h(u,"Weight")
if((t&$.bx().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fO.prototype={}
D.c2.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.B]}
H.n(b,u)
if(this.a==null)this.sak(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
D:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[D.B]})
u=s.a
u=u==null?null:C.a.W(u,b)
if(u===!0){u=s.a
t=(u&&C.a).D(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.W(u,b)
if(u===!0){u=s.b
t=(u&&C.a).D(u,b)||t}return t},
E:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.B()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.H(P.mg(u,!0,{func:1,ret:-1,args:[D.B]}),new D.h8(q))
u=r.b
if(u!=null){r.saX(H.d([],[{func:1,ret:-1,args:[D.B]}]))
C.a.H(u,new D.h9(q))}return!0},
iO:function(){return this.E(null)},
aC:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.E(u)}}},
sak:function(a){this.a=H.m(a,"$ib",[{func:1,ret:-1,args:[D.B]}],"$ab")},
saX:function(a){this.b=H.m(a,"$ib",[{func:1,ret:-1,args:[D.B]}],"$ab")}}
D.h8.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.B]})
u=this.a.a
u.b
a.$1(u)},
$S:33}
D.h9.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.B]})
u=this.a.a
u.b
a.$1(u)},
$S:33}
D.B.prototype={}
D.bL.prototype={}
D.bM.prototype={}
D.O.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}
X.dI.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dI))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.dW.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dW))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.ht.prototype={
ji:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
je:function(a){this.c=a.b
this.d.D(0,a.a)
return!1},
shN:function(a){this.d=H.m(a,"$imt",[P.l],"$amt")}}
X.e_.prototype={}
X.hB.prototype={
ba:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.u()
u=b.b
t=q.ch
if(typeof u!=="number")return u.u()
s=o.A(0,new V.a1(n*m,u*t))
t=q.a.gb0()
r=new X.bt(a,V.bg(),q.x,t,s)
r.b=!0
q.z=new P.aC(p,!1)
q.x=s
return r},
cK:function(a,b){this.r=a.a
return!1},
bm:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.eS()
if(typeof u!=="number")return u.aq()
this.r=(u&~t)>>>0
return!1},
bl:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.ba(a,b))
return!0},
jj:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gb0()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.u()
q=a.b
p=o.cy
if(typeof q!=="number")return q.u()
t=new X.cS(new V.Z(s*r,q*p),u,t)
t.b=!0
n.E(t)
return!0},
hj:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.e_(c,r.a.gb0(),b)
s.b=!0
t.E(s)
r.y=new P.aC(u,!1)
r.x=V.bg()}}
X.aE.prototype={
t:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.aE))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.G(this.b)?"Alt+":""
return u+(H.G(this.c)?"Shift+":"")}}
X.bt.prototype={}
X.i_.prototype={
bZ:function(a,b,c){var u=this,t=new P.aC(Date.now(),!1),s=u.a.gb0(),r=new X.bt(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cK:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.E(this.bZ(a,b,!0))
return!0},
bm:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.eS()
if(typeof t!=="number")return t.aq()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.E(u.bZ(a,b,!0))
return!0},
bl:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.bZ(a,b,!1))
return!0},
jk:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gb0()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.u()
r=a.b
q=p.ch
if(typeof r!=="number")return r.u()
u=new X.cS(new V.Z(t*s,r*q),u,b)
u.b=!0
o.E(u)
return!0},
ge2:function(){var u=this.b
return u==null?this.b=D.V():u},
gcV:function(){var u=this.c
return u==null?this.c=D.V():u},
geu:function(){var u=this.d
return u==null?this.d=D.V():u}}
X.cS.prototype={}
X.ig.prototype={}
X.eq.prototype={}
X.iZ.prototype={
ba:function(a,b){var u,t,s,r,q=this
H.m(a,"$ib",[V.a1],"$ab")
u=new P.aC(Date.now(),!1)
t=a.length>0?a[0]:V.bg()
s=q.a.gb0()
r=new X.eq(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
jh:function(a){var u
H.m(a,"$ib",[V.a1],"$ab")
u=this.b
if(u==null)return!1
u.E(this.ba(a,!0))
return!0},
jf:function(a){var u
H.m(a,"$ib",[V.a1],"$ab")
u=this.c
if(u==null)return!1
u.E(this.ba(a,!0))
return!0},
jg:function(a){var u
H.m(a,"$ib",[V.a1],"$ab")
u=this.d
if(u==null)return!1
u.E(this.ba(a,!1))
return!0}}
X.ev.prototype={
gb0:function(){var u=this.a,t=C.j.ge_(u).c
t.toString
u=C.j.ge_(u).d
u.toString
return V.mr(0,0,t,u)},
dm:function(a){var u=a.keyCode,t=H.G(a.ctrlKey)||H.G(a.metaKey)
return new X.dW(u,new X.aE(t,a.altKey,a.shiftKey))},
aY:function(a){var u=this.b,t=H.G(a.ctrlKey)||H.G(a.metaKey)
u.c=new X.aE(t,a.altKey,a.shiftKey)},
cj:function(a){var u=this.b,t=H.G(a.ctrlKey)||H.G(a.metaKey)
u.c=new X.aE(t,a.altKey,a.shiftKey)},
aG:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.L()
u=t.top
if(typeof r!=="number")return r.L()
return new V.a1(s-q,r-u)},
bb:function(a){return new V.Z(a.movementX,a.movementY)},
cc:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.d([],[V.a1])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
q=C.e.at(r.pageX)
C.e.at(r.pageY)
p=o.left
C.e.at(r.pageX)
C.a.h(n,new V.a1(q-p,C.e.at(r.pageY)-o.top))}return n},
aE:function(a){var u=a.buttons,t=H.G(a.ctrlKey)||H.G(a.metaKey)
return new X.dI(u,new X.aE(t,a.altKey,a.shiftKey))},
c2:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.L()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.L()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
hd:function(a){this.f=!0},
h_:function(a){this.f=!1},
h7:function(a){H.f(a,"$iah")
if(H.G(this.f)&&this.c2(a))a.preventDefault()},
hh:function(a){var u
H.f(a,"$ibb")
if(!H.G(this.f))return
u=this.dm(a)
this.b.ji(u)},
hf:function(a){var u
H.f(a,"$ibb")
if(!H.G(this.f))return
u=this.dm(a)
this.b.je(u)},
hl:function(a){var u,t,s,r,q=this
H.f(a,"$iah")
u=q.a
u.focus()
q.f=!0
q.aY(a)
if(H.G(q.x)){t=q.aE(a)
s=q.bb(a)
if(q.d.cK(t,s))a.preventDefault()
return}if(H.G(q.r)){q.y=a
u.requestPointerLock()
return}t=q.aE(a)
r=q.aG(a)
if(q.c.cK(t,r))a.preventDefault()},
hp:function(a){var u,t,s,r=this
H.f(a,"$iah")
r.aY(a)
u=r.aE(a)
if(H.G(r.x)){t=r.bb(a)
if(r.d.bm(u,t))a.preventDefault()
return}if(H.G(r.r))return
s=r.aG(a)
if(r.c.bm(u,s))a.preventDefault()},
hb:function(a){var u,t,s,r=this
H.f(a,"$iah")
if(!r.c2(a)){r.aY(a)
u=r.aE(a)
if(H.G(r.x)){t=r.bb(a)
if(r.d.bm(u,t))a.preventDefault()
return}if(H.G(r.r))return
s=r.aG(a)
if(r.c.bm(u,s))a.preventDefault()}},
hn:function(a){var u,t,s,r=this
H.f(a,"$iah")
r.aY(a)
u=r.aE(a)
if(H.G(r.x)){t=r.bb(a)
if(r.d.bl(u,t))a.preventDefault()
return}if(H.G(r.r))return
s=r.aG(a)
if(r.c.bl(u,s))a.preventDefault()},
h9:function(a){var u,t,s,r=this
H.f(a,"$iah")
if(!r.c2(a)){r.aY(a)
u=r.aE(a)
if(H.G(r.x)){t=r.bb(a)
if(r.d.bl(u,t))a.preventDefault()
return}if(H.G(r.r))return
s=r.aG(a)
if(r.c.bl(u,s))a.preventDefault()}},
hr:function(a){var u,t,s=this
H.f(a,"$ibl")
s.aY(a)
u=new V.Z((a&&C.D).giI(a),C.D.giJ(a)).p(0,180)
if(H.G(s.x)){if(s.d.jj(u))a.preventDefault()
return}if(H.G(s.r))return
t=s.aG(a)
if(s.c.jk(u,t))a.preventDefault()},
ht:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aE(s.y)
t=s.aG(s.y)
s.d.hj(u,t,r)}},
hJ:function(a){var u,t=this
H.f(a,"$ib2")
t.a.focus()
t.f=!0
t.cj(a)
u=t.cc(a)
if(t.e.jh(u))a.preventDefault()},
hF:function(a){var u
H.f(a,"$ib2")
this.cj(a)
u=this.cc(a)
if(this.e.jf(u))a.preventDefault()},
hH:function(a){var u
H.f(a,"$ib2")
this.cj(a)
u=this.cc(a)
if(this.e.jg(u))a.preventDefault()},
sfz:function(a){this.z=H.m(a,"$ib",[[P.d3,P.W]],"$ab")}}
D.bG.prototype={
aD:function(a){var u
H.f(a,"$iB")
u=this.r
if(u!=null)u.E(a)},
f8:function(){return this.aD(null)},
$iaf:1,
$ic7:1}
D.af.prototype={$ic7:1}
D.dX.prototype={
aD:function(a){var u=this.x
if(u!=null)u.E(a)},
dA:function(a){var u
H.f(a,"$iB")
u=this.y
if(u!=null)u.E(a)},
hi:function(){return this.dA(null)},
hv:function(a){var u,t,s
H.m(a,"$ij",[D.af],"$aj")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t){s=a[t]
if(s==null||this.fo(s))return!1}return!0},
fU:function(a,b){var u,t,s,r,q,p,o,n=D.af
H.m(b,"$ij",[n],"$aj")
for(u=b.length,t=this.gdz(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=H.f(b[q],"$iaf")
if(p instanceof D.bG)C.a.h(this.e,p)
o=p.r
if(o==null){o=new D.c2()
o.sak(null)
o.saX(null)
o.c=null
o.d=0
p.r=o}H.n(t,s)
if(o.a==null)o.sak(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bL([n])
n.b=!0
this.aD(n)},
hz:function(a,b){var u,t,s,r=D.af
H.m(b,"$ij",[r],"$aj")
for(u=b.gU(b),t=this.gdz();u.C();){s=u.gJ(u)
C.a.D(this.e,s)
s.gq().D(0,t)}r=new D.bM([r])
r.b=!0
this.aD(r)},
fo:function(a){var u=C.a.W(this.e,a)
return u},
sfv:function(a){this.e=H.m(a,"$ib",[D.bG],"$ab")},
shK:function(a){this.f=H.m(a,"$ib",[D.ea],"$ab")},
si7:function(a){this.r=H.m(a,"$ib",[D.ek],"$ab")},
$aj:function(){return[D.af]},
$aa5:function(){return[D.af]}}
D.ea.prototype={$iaf:1,$ic7:1}
D.ek.prototype={$iaf:1,$ic7:1}
V.a9.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a9))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+"]"}}
V.an.prototype={
cT:function(a){var u=this
return H.d([u.a,u.b,u.c,u.d],[P.A])},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.an))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.S(u.a,3,0)+", "+V.S(u.b,3,0)+", "+V.S(u.c,3,0)+", "+V.S(u.d,3,0)+"]"}}
V.h7.prototype={}
V.e3.prototype={
ai:function(a,b){var u=this,t=H.d([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.A])
return t},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.e3))return!1
u=b.a
t=$.P().a
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
i:function(a){var u,t,s,r,q=this,p=[P.A],o=V.cr(H.d([q.a,q.d,q.r],p),3,0),n=V.cr(H.d([q.b,q.e,q.x],p),3,0),m=V.cr(H.d([q.c,q.f,q.y],p),3,0)
p=o.length
if(0>=p)return H.e(o,0)
u="["+o[0]+", "
t=n.length
if(0>=t)return H.e(n,0)
u=u+n[0]+", "
s=m.length
if(0>=s)return H.e(m,0)
u=u+m[0]+",\n"
if(1>=p)return H.e(o,1)
r=" "+o[1]+", "
if(1>=t)return H.e(n,1)
r=r+n[1]+", "
if(1>=s)return H.e(m,1)
r=u+(r+m[1]+",\n")
if(2>=p)return H.e(o,2)
p=" "+o[2]+", "
if(2>=t)return H.e(n,2)
p=p+n[2]+", "
if(2>=s)return H.e(m,2)
return r+(p+m[2]+"]")}}
V.ax.prototype={
ai:function(a,b){var u=this,t=H.d([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.A])
return t},
cE:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.P().a)return V.c6()
u=1/b1
t=-n
s=-a0
return V.be((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
u:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.be(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bO:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.D(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
cU:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.X(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ax))return!1
u=b.a
t=$.P().a
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
i:function(a){return this.O()},
G:function(a){var u,t,s,r,q,p=this,o=[P.A],n=V.cr(H.d([p.a,p.e,p.y,p.cx],o),3,0),m=V.cr(H.d([p.b,p.f,p.z,p.cy],o),3,0),l=V.cr(H.d([p.c,p.r,p.Q,p.db],o),3,0),k=V.cr(H.d([p.d,p.x,p.ch,p.dx],o),3,0)
o=n.length
if(0>=o)return H.e(n,0)
u="["+n[0]+", "
t=m.length
if(0>=t)return H.e(m,0)
u=u+m[0]+", "
s=l.length
if(0>=s)return H.e(l,0)
u=u+l[0]+", "
r=k.length
if(0>=r)return H.e(k,0)
u=u+k[0]+",\n"
q=a+" "
if(1>=o)return H.e(n,1)
q=q+n[1]+", "
if(1>=t)return H.e(m,1)
q=q+m[1]+", "
if(1>=s)return H.e(l,1)
q=q+l[1]+", "
if(1>=r)return H.e(k,1)
q=u+(q+k[1]+",\n")
u=a+" "
if(2>=o)return H.e(n,2)
u=u+n[2]+", "
if(2>=t)return H.e(m,2)
u=u+m[2]+", "
if(2>=s)return H.e(l,2)
u=u+l[2]+", "
if(2>=r)return H.e(k,2)
u=q+(u+k[2]+",\n")
q=a+" "
if(3>=o)return H.e(n,3)
q=q+n[3]+", "
if(3>=t)return H.e(m,3)
q=q+m[3]+", "
if(3>=s)return H.e(l,3)
q=q+l[3]+", "
if(3>=r)return H.e(k,3)
return u+(q+k[3]+"]")},
O:function(){return this.G("")}}
V.a1.prototype={
A:function(a,b){return new V.a1(this.a+b.a,this.b+b.b)},
L:function(a,b){return new V.a1(this.a-b.a,this.b-b.b)},
p:function(a,b){if(Math.abs(b-0)<$.P().a)return V.bg()
return new V.a1(this.a/b,this.b/b)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a1))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+"]"}}
V.X.prototype={
A:function(a,b){return new V.X(this.a+b.a,this.b+b.b,this.c+b.c)},
L:function(a,b){return new V.X(this.a-b.a,this.b-b.b,this.c-b.c)},
u:function(a,b){return new V.X(this.a*b,this.b*b,this.c*b)},
p:function(a,b){if(Math.abs(b-0)<$.P().a)return V.lw()
return new V.X(this.a/b,this.b/b,this.c/b)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.X))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+"]"}}
V.aK.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aK))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.S(u.a,3,0)+", "+V.S(u.b,3,0)+", "+V.S(u.c,3,0)+", "+V.S(u.d,3,0)+"]"}}
V.ed.prototype={
gag:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ed))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.S(u.a,3,0)+", "+V.S(u.b,3,0)+", "+V.S(u.c,3,0)+", "+V.S(u.d,3,0)+"]"}}
V.Z.prototype={
bj:function(a){return Math.sqrt(this.w(this))},
w:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.u()
if(typeof r!=="number")return H.E(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.E(t)
return s*r+u*t},
u:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.u()
u=this.b
if(typeof u!=="number")return u.u()
return new V.Z(t*b,u*b)},
p:function(a,b){var u,t
if(Math.abs(b-0)<$.P().a){u=$.mE
return u==null?$.mE=new V.Z(0,0):u}u=this.a
if(typeof u!=="number")return u.p()
t=this.b
if(typeof t!=="number")return t.p()
return new V.Z(u/b,t/b)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Z))return!1
u=b.a
t=this.a
s=$.P()
s.toString
if(typeof u!=="number")return u.L()
if(typeof t!=="number")return H.E(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.L()
if(typeof t!=="number")return H.E(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+"]"}}
V.D.prototype={
bj:function(a){return Math.sqrt(this.w(this))},
w:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cF:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.D(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aH:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.D(u*t-s*r,s*q-p*t,p*r-u*q)},
A:function(a,b){return new V.D(this.a+b.a,this.b+b.b,this.c+b.c)},
T:function(a){return new V.D(-this.a,-this.b,-this.c)},
u:function(a,b){return new V.D(this.a*b,this.b*b,this.c*b)},
p:function(a,b){if(Math.abs(b-0)<$.P().a)return V.dd()
return new V.D(this.a/b,this.b/b,this.c/b)},
ep:function(){var u=$.P().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.D))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+"]"}}
V.bu.prototype={
bj:function(a){var u=this,t=u.a,s=u.b,r=u.c,q=u.d
return Math.sqrt(t*t+s*s+r*r+q*q)},
p:function(a,b){var u,t=this
if(Math.abs(b-0)<$.P().a){u=$.mJ
return u==null?$.mJ=new V.bu(0,0,0,0):u}return new V.bu(t.a/b,t.b/b,t.c/b,t.d/b)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bu))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.S(u.a,3,0)+", "+V.S(u.b,3,0)+", "+V.S(u.c,3,0)+", "+V.S(u.d,3,0)+"]"}}
U.fP.prototype={
bU:function(a){var u=V.q7(a,this.c,this.b)
return u},
gq:function(){var u=this.y
return u==null?this.y=D.V():u},
S:function(a){var u=this.y
if(u!=null)u.E(a)},
scX:function(a,b){},
scG:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.P().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bU(u)}s=new D.O("maximumLocation",s,t.b,[P.A])
s.b=!0
t.S(s)}},
scI:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.P().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bU(u)}s=new D.O("minimumLocation",s,t.c,[P.A])
s.b=!0
t.S(s)}},
sa_:function(a,b){var u,t=this
b=t.bU(b)
u=t.d
if(!(Math.abs(u-b)<$.P().a)){t.d=b
u=new D.O("location",u,b,[P.A])
u.b=!0
t.S(u)}},
scH:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.P().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.O("maximumVelocity",r,a,[P.A])
r.b=!0
s.S(r)}},
sX:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.P().a)){u.f=a
t=new D.O("velocity",t,a,[P.A])
t.b=!0
u.S(t)}},
scr:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.P().a)){this.x=a
u=new D.O("dampening",u,a,[P.A])
u.b=!0
this.S(u)}},
av:function(a,b){var u,t,s,r=this,q=r.f,p=$.P().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa_(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.P().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sX(u)}}}
U.dK.prototype={
gq:function(){var u=this.b
return u==null?this.b=D.V():u},
b4:function(a,b,c){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dK))return!1
return J.K(this.a,b.a)},
i:function(a){return"Constant: "+this.a.G("          ")}}
U.cK.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.V():u},
S:function(a){var u
H.f(a,"$iB")
u=this.e
if(u!=null)u.E(a)},
ab:function(){return this.S(null)},
fS:function(a,b){var u,t,s,r,q,p,o,n=U.ai
H.m(b,"$ij",[n],"$aj")
for(u=b.length,t=this.gaS(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.gq()
o.toString
H.n(t,s)
if(o.a==null)o.sak(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bL([n])
n.b=!0
this.S(n)},
hx:function(a,b){var u,t,s=U.ai
H.m(b,"$ij",[s],"$aj")
for(u=b.gU(b),t=this.gaS();u.C();)u.gJ(u).gq().D(0,t)
s=new D.bM([s])
s.b=!0
this.S(s)},
b4:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.R()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.aw(r,r.length,[H.r(r,0)]),u=null;r.C();){q=r.d
if(q!=null){t=q.b4(0,b,c)
if(t!=null)u=u==null?t:t.u(0,u)}}s.f=u==null?V.c6():u
r=s.e
if(r!=null)r.aC(0)}return s.f},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cK))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.e(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.e(r,t)
if(!J.K(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$aj:function(){return[U.ai]},
$aa5:function(){return[U.ai]},
$iai:1}
U.ai.prototype={}
U.ew.prototype={
gq:function(){var u=this.cy
return u==null?this.cy=D.V():u},
S:function(a){var u
H.f(a,"$iB")
u=this.cy
if(u!=null)u.E(a)},
ab:function(){return this.S(null)},
bd:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.ge2().h(0,u.gc3())
u.a.c.geu().h(0,u.gc5())
u.a.c.gcV().h(0,u.gc7())
return!0},
c4:function(a){var u=this
H.f(a,"$iB")
if(!J.K(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
c6:function(a){var u,t,s,r,q,p,o,n=this
a=H.q(H.f(a,"$iB"),"$ibt")
if(!H.G(n.y))return
if(H.G(n.x)){u=a.d.L(0,a.y)
u=new V.Z(u.a,u.b)
u=u.w(u)
t=n.r
if(typeof t!=="number")return H.E(t)
if(u<t)return
n.x=!1}if(H.G(n.d)){u=a.c
t=a.d.L(0,a.y)
u=new V.Z(t.a,t.b).u(0,2).p(0,u.gag())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.u()
s=n.e
if(typeof s!=="number")return H.E(s)
t.sX(u*10*s)}else{u=a.c
t=a.d
s=t.L(0,a.y)
r=new V.Z(s.a,s.b).u(0,2).p(0,u.gag())
s=n.b
q=r.a
if(typeof q!=="number")return q.T()
p=n.e
if(typeof p!=="number")return H.E(p)
o=n.z
if(typeof o!=="number")return H.E(o)
s.sa_(0,-q*p+o)
n.b.sX(0)
t=t.L(0,a.z)
n.Q=new V.Z(t.a,t.b).u(0,2).p(0,u.gag())}n.ab()},
c8:function(a){var u,t,s,r=this
H.f(a,"$iB")
if(!H.G(r.y))return
r.y=!1
if(H.G(r.x))return
u=r.Q
if(u.w(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.u()
s=r.e
if(typeof s!=="number")return H.E(s)
u.sX(t*10*s)
r.ab()}},
b4:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.R()
if(q<p){r.ch=p
u=b.y
r.b.av(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.be(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$iai:1}
U.ex.prototype={
gq:function(){var u=this.fx
return u==null?this.fx=D.V():u},
S:function(a){var u
H.f(a,"$iB")
u=this.fx
if(u!=null)u.E(a)},
ab:function(){return this.S(null)},
bd:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.ge2().h(0,s.gc3())
s.a.c.geu().h(0,s.gc5())
s.a.c.gcV().h(0,s.gc7())
u=s.a.d
t=u.f
u=t==null?u.f=D.V():t
u.h(0,s.gfK())
u=s.a.d
t=u.d
u=t==null?u.d=D.V():t
u.h(0,s.gfM())
u=s.a.e
t=u.b
u=t==null?u.b=D.V():t
u.h(0,s.gii())
u=s.a.e
t=u.d
u=t==null?u.d=D.V():t
u.h(0,s.gig())
u=s.a.e
t=u.c
u=t==null?u.c=D.V():t
u.h(0,s.gic())
return!0},
ax:function(a){var u=a.a,t=a.b
if(H.G(this.f)){if(typeof u!=="number")return u.T()
u=-u}if(H.G(this.r)){if(typeof t!=="number")return t.T()
t=-t}return new V.Z(u,t)},
c4:function(a){var u=this
a=H.q(H.f(a,"$iB"),"$ibt")
if(!J.K(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
c6:function(a){var u,t,s,r,q,p,o,n=this
a=H.q(H.f(a,"$iB"),"$ibt")
if(!H.G(n.cx))return
if(H.G(n.ch)){u=a.d.L(0,a.y)
u=new V.Z(u.a,u.b)
u=u.w(u)
t=n.Q
if(typeof t!=="number")return H.E(t)
if(u<t)return
n.ch=!1}if(H.G(n.e)){u=a.c
t=a.d.L(0,a.y)
u=n.ax(new V.Z(t.a,t.b).u(0,2).p(0,u.gag()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.E(s)
t.sX(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.E(t)
s.sX(-u*10*t)}else{u=a.c
t=a.d
s=t.L(0,a.y)
r=n.ax(new V.Z(s.a,s.b).u(0,2).p(0,u.gag()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.E(p)
o=n.cy
if(typeof o!=="number")return H.E(o)
s.sa_(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.E(q)
s=n.db
if(typeof s!=="number")return H.E(s)
o.sa_(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.L(0,a.z)
n.dx=n.ax(new V.Z(t.a,t.b).u(0,2).p(0,u.gag()))}n.ab()},
c8:function(a){var u,t,s,r=this
H.f(a,"$iB")
if(!H.G(r.cx))return
r.cx=!1
if(H.G(r.ch))return
u=r.dx
if(u.w(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.E(s)
u.sX(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.E(u)
s.sX(-t*10*u)
r.ab()}},
fL:function(a){var u=this
if(H.q(H.f(a,"$iB"),"$ie_").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
fN:function(a){var u,t,s,r,q,p,o,n=this
a=H.q(H.f(a,"$iB"),"$ibt")
if(!J.K(n.d,a.x.b))return
u=a.c
t=a.d
s=t.L(0,a.y)
r=n.ax(new V.Z(s.a,s.b).u(0,2).p(0,u.gag()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.E(p)
o=n.cy
if(typeof o!=="number")return H.E(o)
s.sa_(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.E(q)
s=n.db
if(typeof s!=="number")return H.E(s)
o.sa_(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.L(0,a.z)
n.dx=n.ax(new V.Z(t.a,t.b).u(0,2).p(0,u.gag()))
n.ab()},
ij:function(a){var u=this
H.f(a,"$iB")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
ih:function(a){var u,t,s,r,q,p,o,n=this
a=H.q(H.f(a,"$iB"),"$ieq")
if(!H.G(n.cx))return
if(H.G(n.ch)){u=a.d.L(0,a.y)
u=new V.Z(u.a,u.b)
u=u.w(u)
t=n.Q
if(typeof t!=="number")return H.E(t)
if(u<t)return
n.ch=!1}if(H.G(n.e)){u=a.c
t=a.d.L(0,a.y)
u=n.ax(new V.Z(t.a,t.b).u(0,2).p(0,u.gag()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.E(s)
t.sX(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.E(t)
s.sX(-u*10*t)}else{u=a.c
t=a.d
s=t.L(0,a.y)
r=n.ax(new V.Z(s.a,s.b).u(0,2).p(0,u.gag()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.E(p)
o=n.cy
if(typeof o!=="number")return H.E(o)
s.sa_(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.E(q)
s=n.db
if(typeof s!=="number")return H.E(s)
o.sa_(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.L(0,a.z)
n.dx=n.ax(new V.Z(t.a,t.b).u(0,2).p(0,u.gag()))}n.ab()},
ie:function(a){var u,t,s,r=this
H.f(a,"$iB")
if(!H.G(r.cx))return
r.cx=!1
if(H.G(r.ch))return
u=r.dx
if(u.w(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.E(s)
u.sX(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.E(u)
s.sX(-t*10*u)
r.ab()}},
b4:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.R()
if(q<p){r.dy=p
u=b.y
r.c.av(0,u)
r.b.av(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.be(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.u(0,V.be(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iai:1}
U.ey.prototype={
gq:function(){var u=this.r
return u==null?this.r=D.V():u},
S:function(a){var u=this.r
if(u!=null)u.E(a)},
bd:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.V():t
t=r.gfP()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.V():s).h(0,t)
return!0},
fQ:function(a){var u,t,s,r,q=this
H.f(a,"$iB")
if(!J.K(q.b,q.a.b.c))return
H.q(a,"$icS")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.u()
r=u+t*s
if(u!==r){q.d=r
u=new D.O("zoom",u,r,[P.A])
u.b=!0
q.S(u)}},
b4:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.be(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$iai:1}
M.dJ.prototype={
gq:function(){var u=this.r
return u==null?this.r=D.V():u},
a2:function(a){var u
H.f(a,"$iB")
u=this.r
if(u!=null)u.E(a)},
b7:function(){return this.a2(null)},
hB:function(a,b){var u,t,s,r,q,p,o,n=M.aG
H.m(b,"$ij",[n],"$aj")
for(u=b.length,t=this.ga1(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.gq()
o.toString
H.n(t,s)
if(o.a==null)o.sak(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bL([n])
n.b=!0
this.a2(n)},
hD:function(a,b){var u,t,s=M.aG
H.m(b,"$ij",[s],"$aj")
for(u=b.gU(b),t=this.ga1();u.C();)u.gJ(u).gq().D(0,t)
s=new D.bM([s])
s.b=!0
this.a2(s)},
ah:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.aw(u,u.length,[H.r(u,0)]);u.C();){t=u.d
if(t!=null)t.ah(a)}s.f=!1},
$aj:function(){return[M.aG]},
$aa5:function(){return[M.aG]},
$iaG:1}
M.dL.prototype={
gq:function(){var u=this.r
return u==null?this.r=D.V():u},
a2:function(a){var u
H.f(a,"$iB")
u=this.r
if(u!=null)u.E(a)},
b7:function(){return this.a2(null)},
sbe:function(a){var u,t,s=this
if(a==null)a=new X.hn()
u=s.b
if(u!==a){if(u!=null)u.gq().D(0,s.ga1())
t=s.b
s.b=a
a.gq().h(0,s.ga1())
u=new D.O("camera",t,s.b,[X.c_])
u.b=!0
s.a2(u)}},
sbn:function(a,b){var u,t,s=this
if(b==null)b=X.lo(null)
u=s.c
if(u!==b){if(u!=null)u.gq().D(0,s.ga1())
t=s.c
s.c=b
b.gq().h(0,s.ga1())
u=new D.O("target",t,s.c,[X.d5])
u.b=!0
s.a2(u)}},
sbo:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gq().D(0,t.ga1())
u=t.d
t.d=a
if(a!=null)a.gq().h(0,t.ga1())
s=new D.O("technique",u,t.d,[O.bS])
s.b=!0
t.a2(s)}},
ah:function(a){var u=this
a.cM(u.d)
u.c.a3(a)
u.b.a3(a)
u.e.av(0,a)
u.e.ah(a)
u.b.aO(a)
u.c.toString
a.cL()},
$iaG:1}
M.dP.prototype={
a2:function(a){var u
H.f(a,"$iB")
u=this.y
if(u!=null)u.E(a)},
b7:function(){return this.a2(null)},
h3:function(a,b){var u,t,s,r,q,p,o,n=E.as
H.m(b,"$ij",[n],"$aj")
for(u=b.length,t=this.ga1(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c2()
o.sak(null)
o.saX(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sak(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bL([n])
n.b=!0
this.a2(n)},
h5:function(a,b){var u,t,s=E.as
H.m(b,"$ij",[s],"$aj")
for(u=b.gU(b),t=this.ga1();u.C();)u.gJ(u).gq().D(0,t)
s=new D.bM([s])
s.b=!0
this.a2(s)},
sbe:function(a){var u,t,s=this
if(a==null)a=X.ml(null)
u=s.b
if(u!==a){if(u!=null)u.gq().D(0,s.ga1())
t=s.b
s.b=a
a.gq().h(0,s.ga1())
u=new D.O("camera",t,s.b,[X.c_])
u.b=!0
s.a2(u)}},
sbn:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gq().D(0,t.ga1())
u=t.c
t.c=b
b.gq().h(0,t.ga1())
s=new D.O("target",u,t.c,[X.d5])
s.b=!0
t.a2(s)}},
sbo:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gq().D(0,t.ga1())
u=t.d
t.d=a
if(a!=null)a.gq().h(0,t.ga1())
s=new D.O("technique",u,t.d,[O.bS])
s.b=!0
t.a2(s)}},
gq:function(){var u=this.y
return u==null?this.y=D.V():u},
ah:function(a){var u,t=this
a.cM(t.d)
t.c.a3(a)
t.b.a3(a)
u=t.d
if(u!=null)u.av(0,a)
for(u=t.e.a,u=new J.aw(u,u.length,[H.r(u,0)]);u.C();)u.d.av(0,a)
for(u=t.e.a,u=new J.aw(u,u.length,[H.r(u,0)]);u.C();)u.d.ah(a)
t.b.toString
a.cy.aL()
a.db.aL()
t.c.toString
a.cL()},
sfm:function(a,b){this.e=H.m(b,"$ia5",[E.as],"$aa5")},
$iaG:1}
M.aG.prototype={}
A.dF.prototype={}
A.fE.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
iP:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
e1:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.ao.prototype={
gaw:function(a){var u=this.a?1:0,t=this.c?4:0
return u|0|t},
i:function(a){var u=this.a?1:0,t=this.c?4:0
return""+(u|0|t)},
t:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.ao))return!1
if(this.a===b.a)u=this.c===b.c
else u=!1
return u}}
A.e2.prototype={
f1:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.a8("")
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
A.pm(c0,u)
A.po(c0,u)
A.pn(c0,u)
A.pq(c0,u)
A.pr(c0,u)
A.pp(c0,u)
A.ps(c0,u)
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
b5.eo(0,s.charCodeAt(0)==0?s:s,A.pl(b5.z))
b5.Q=b5.x.j(0,"posAttr")
b5.cx=b5.x.j(0,"normAttr")
b5.ch=b5.x.j(0,"binmAttr")
b5.cy=b5.x.j(0,"txt2DAttr")
b5.db=b5.x.j(0,"txtCubeAttr")
b5.dx=b5.x.j(0,"bendAttr")
if(c0.dx)b5.id=H.q(b5.y.M(0,"invViewMat"),"$iaA")
if(t)b5.dy=H.q(b5.y.M(0,"objMat"),"$iaA")
if(r)b5.fr=H.q(b5.y.M(0,"viewObjMat"),"$iaA")
b5.fy=H.q(b5.y.M(0,"projViewObjMat"),"$iaA")
if(c0.ry)b5.k1=H.q(b5.y.M(0,"txt2DMat"),"$idb")
if(c0.x1)b5.k2=H.q(b5.y.M(0,"txtCubeMat"),"$iaA")
if(c0.x2)b5.k3=H.q(b5.y.M(0,"colorMat"),"$iaA")
b5.sfi(H.d([],[A.aA]))
t=c0.y2
if(t>0){b5.k4=H.f(b5.y.M(0,"bendMatCount"),"$iaN")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.j(0,q)
if(m==null)H.w(P.v(b7+q+b8));(s&&C.a).h(s,H.q(m,"$iaA"))}}t=c0.a
if(t.a)b5.r2=H.q(b5.y.M(0,"emissionClr"),"$ia_")
if(t.c)b5.ry=H.q(b5.y.M(0,"emissionTxt"),"$iak")
t=c0.b
if(t.a)b5.x1=H.q(b5.y.M(0,"ambientClr"),"$ia_")
if(t.c)b5.y1=H.q(b5.y.M(0,"ambientTxt"),"$iak")
t=c0.c
if(t.a)b5.y2=H.q(b5.y.M(0,"diffuseClr"),"$ia_")
if(t.c)b5.bE=H.q(b5.y.M(0,"diffuseTxt"),"$iak")
t=c0.d
if(t.a)b5.e3=H.q(b5.y.M(0,"invDiffuseClr"),"$ia_")
if(t.c)b5.e4=H.q(b5.y.M(0,"invDiffuseTxt"),"$iak")
t=c0.e
s=t.a
if(!s)r=t.c
else r=!0
if(r){b5.e7=H.q(b5.y.M(0,"shininess"),"$iab")
if(s)b5.e5=H.q(b5.y.M(0,"specularClr"),"$ia_")
if(t.c)b5.e6=H.q(b5.y.M(0,"specularTxt"),"$iak")}if(c0.f.c)b5.e8=H.q(b5.y.M(0,"bumpTxt"),"$iak")
if(c0.cy){b5.e9=H.q(b5.y.M(0,"envSampler"),"$iak")
t=c0.r
if(t.a)b5.ea=H.q(b5.y.M(0,"reflectClr"),"$ia_")
if(t.c)b5.eb=H.q(b5.y.M(0,"reflectTxt"),"$iak")
t=c0.x
s=t.a
if(!s)r=t.c
else r=!0
if(r){b5.ec=H.q(b5.y.M(0,"refraction"),"$iab")
if(s)b5.ed=H.q(b5.y.M(0,"refractClr"),"$ia_")
if(t.c)b5.ee=H.q(b5.y.M(0,"refractTxt"),"$iak")}}t=c0.y
if(t.a)b5.ef=H.q(b5.y.M(0,"alpha"),"$iab")
if(t.c)b5.eg=H.q(b5.y.M(0,"alphaTxt"),"$iak")
t=P.l
s=[t,A.aN]
b5.sfu(new H.a6(s))
b5.sf9(new H.a6([t,[P.b,A.cd]]))
b5.shL(new H.a6(s))
b5.shM(new H.a6([t,[P.b,A.ce]]))
b5.si6(new H.a6(s))
b5.sfa(new H.a6([t,[P.b,A.cg]]))
if(c0.id){for(t=c0.z,s=t.length,r=[A.cd],l=0;l<t.length;t.length===s||(0,H.u)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.i(j)
h=H.d([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.aq()
p=(j&1)!==0
if(p){o=b5.y
g=i+"s["+n+"].objUp"
m=o.j(0,g)
if(m==null)H.w(P.v(b7+g+b8))
H.q(m,"$ia_")
o=b5.y
g=i+"s["+n+"].objRight"
f=o.j(0,g)
if(f==null)H.w(P.v(b7+g+b8))
H.q(f,"$ia_")
o=b5.y
g=i+"s["+n+"].objDir"
e=o.j(0,g)
if(e==null)H.w(P.v(b7+g+b8))
H.q(e,"$ia_")
d=e
c=f
b=m}else{d=b6
c=d
b=c}o=b5.y
g=i+"s["+n+"].viewDir"
m=o.j(0,g)
if(m==null)H.w(P.v(b7+g+b8))
H.q(m,"$ia_")
o=b5.y
g=i+"s["+n+"].color"
f=o.j(0,g)
if(f==null)H.w(P.v(b7+g+b8))
H.q(f,"$ia_")
if(p){p=b5.y
o=i+"sTexture2D"+n
e=p.j(0,o)
if(e==null)H.w(P.v(b7+o+b8))
H.q(e,"$icf")
a=e}else a=b6
C.a.h(h,new A.cd(b,c,d,m,f,a))}b5.ct.k(0,j,h)
q=b5.cs
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.w(P.v(b7+o+b8))
q.k(0,j,H.f(m,"$iaN"))}for(t=c0.Q,s=t.length,r=[A.ce],l=0;l<t.length;t.length===s||(0,H.u)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.i(j)
h=H.d([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.j(0,o)
if(m==null)H.w(P.v(b7+o+b8))
H.q(m,"$ia_")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.j(0,o)
if(f==null)H.w(P.v(b7+o+b8))
H.q(f,"$ia_")
p=b5.y
o=i+"s["+n+"].color"
e=p.j(0,o)
if(e==null)H.w(P.v(b7+o+b8))
H.q(e,"$ia_")
if(typeof j!=="number")return j.aq()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
a0=p.j(0,o)
if(a0==null)H.w(P.v(b7+o+b8))
H.q(a0,"$idb")
a1=a0}else a1=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
a0=p.j(0,o)
if(a0==null)H.w(P.v(b7+o+b8))
H.q(a0,"$iak")
a=a0}else a=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
a0=p.j(0,o)
if(a0==null)H.w(P.v(b7+o+b8))
H.q(a0,"$iak")
p=b5.y
o=i+"s["+n+"].shadowAdj"
a2=p.j(0,o)
if(a2==null)H.w(P.v(b7+o+b8))
H.q(a2,"$ida")
a3=a0
a4=a2}else{a3=b6
a4=a3}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
a0=p.j(0,o)
if(a0==null)H.w(P.v(b7+o+b8))
H.q(a0,"$iab")
p=b5.y
o=i+"s["+n+"].att1"
a2=p.j(0,o)
if(a2==null)H.w(P.v(b7+o+b8))
H.q(a2,"$iab")
p=b5.y
o=i+"s["+n+"].att2"
a5=p.j(0,o)
if(a5==null)H.w(P.v(b7+o+b8))
H.q(a5,"$iab")
a6=a5
a7=a2
a8=a0}else{a6=b6
a7=a6
a8=a7}C.a.h(h,new A.ce(m,f,a1,e,a,a3,a4,a8,a7,a6))}b5.cv.k(0,j,h)
q=b5.cu
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.w(P.v(b7+o+b8))
q.k(0,j,H.f(m,"$iaN"))}for(t=c0.ch,s=t.length,r=[A.cg],l=0;l<t.length;t.length===s||(0,H.u)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.i(j)
h=H.d([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.j(0,o)
if(m==null)H.w(P.v(b7+o+b8))
H.q(m,"$ia_")
p=b5.y
o=i+"s["+n+"].objDir"
f=p.j(0,o)
if(f==null)H.w(P.v(b7+o+b8))
H.q(f,"$ia_")
p=b5.y
o=i+"s["+n+"].viewPnt"
e=p.j(0,o)
if(e==null)H.w(P.v(b7+o+b8))
H.q(e,"$ia_")
p=b5.y
o=i+"s["+n+"].color"
a0=p.j(0,o)
if(a0==null)H.w(P.v(b7+o+b8))
H.q(a0,"$ia_")
if(typeof j!=="number")return j.aq()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
a2=p.j(0,o)
if(a2==null)H.w(P.v(b7+o+b8))
H.q(a2,"$ia_")
p=b5.y
o=i+"s["+n+"].objRight"
a5=p.j(0,o)
if(a5==null)H.w(P.v(b7+o+b8))
H.q(a5,"$ia_")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.j(0,o)
if(a9==null)H.w(P.v(b7+o+b8))
H.q(a9,"$iab")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.j(0,o)
if(b0==null)H.w(P.v(b7+o+b8))
H.q(b0,"$iab")
b1=b0
b2=a9
c=a5
b=a2}else{b1=b6
b2=b1
c=b2
b=c}p=(j&2)!==0
if(p){o=b5.y
g=i+"s["+n+"].shadowAdj"
a2=o.j(0,g)
if(a2==null)H.w(P.v(b7+g+b8))
H.q(a2,"$ida")
a4=a2}else a4=b6
if((j&8)!==0){o=b5.y
g=i+"s["+n+"].cutoff"
a2=o.j(0,g)
if(a2==null)H.w(P.v(b7+g+b8))
H.q(a2,"$iab")
o=b5.y
g=i+"s["+n+"].coneAngle"
a5=o.j(0,g)
if(a5==null)H.w(P.v(b7+g+b8))
H.q(a5,"$iab")
b3=a5
b4=a2}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
g=i+"s["+n+"].att0"
a2=o.j(0,g)
if(a2==null)H.w(P.v(b7+g+b8))
H.q(a2,"$iab")
o=b5.y
g=i+"s["+n+"].att1"
a5=o.j(0,g)
if(a5==null)H.w(P.v(b7+g+b8))
H.q(a5,"$iab")
o=b5.y
g=i+"s["+n+"].att2"
a9=o.j(0,g)
if(a9==null)H.w(P.v(b7+g+b8))
H.q(a9,"$iab")
a6=a9
a7=a5
a8=a2}else{a6=b6
a7=a6
a8=a7}if((j&1)!==0){o=b5.y
g=i+"sTexture2D"+n
a2=o.j(0,g)
if(a2==null)H.w(P.v(b7+g+b8))
H.q(a2,"$icf")
a=a2}else a=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
a2=p.j(0,o)
if(a2==null)H.w(P.v(b7+o+b8))
H.q(a2,"$icf")
a3=a2}else a3=b6
C.a.h(h,new A.cg(m,f,e,a0,b,c,b2,b1,a4,b4,b3,a8,a7,a6,a,a3))}b5.cz.k(0,j,h)
q=b5.cw
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.w(P.v(b7+o+b8))
q.k(0,j,H.f(m,"$iaN"))}}},
al:function(a,b){if(b!=null&&b.d>=6)a.d0(b)},
sfi:function(a){this.r1=H.m(a,"$ib",[A.aA],"$ab")},
sfu:function(a){this.cs=H.m(a,"$iC",[P.l,A.aN],"$aC")},
sf9:function(a){this.ct=H.m(a,"$iC",[P.l,[P.b,A.cd]],"$aC")},
shL:function(a){this.cu=H.m(a,"$iC",[P.l,A.aN],"$aC")},
shM:function(a){this.cv=H.m(a,"$iC",[P.l,[P.b,A.ce]],"$aC")},
si6:function(a){this.cw=H.m(a,"$iC",[P.l,A.aN],"$aC")},
sfa:function(a){this.cz=H.m(a,"$iC",[P.l,[P.b,A.cg]],"$aC")}}
A.aS.prototype={
i:function(a){return"dirLight"+H.i(this.a)}}
A.aW.prototype={
i:function(a){return"pointLight"+H.i(this.a)}}
A.b_.prototype={
i:function(a){return"spotLight"+H.i(this.a)}}
A.hK.prototype={
i:function(a){return this.bi}}
A.cd.prototype={}
A.ce.prototype={}
A.cg.prototype={}
A.d0.prototype={
d5:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
eo:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.dn(b,35633)
r.f=r.dn(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!H.G(H.lN(u.getProgramParameter(r.r,35714)))){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.w(P.v("Failed to link shader: "+H.i(s)))}r.i1()
r.i3()},
a3:function(a){a.a.useProgram(this.r)
this.x.iP()},
dn:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.G(H.lN(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.v("Error compiling shader '"+H.i(s)+"': "+H.i(u)))}return s},
i1:function(){var u,t,s,r=this,q=H.d([],[A.dF]),p=r.a,o=H.ae(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.E(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.dF(p,t.name,s))}r.x=new A.fE(q)},
i3:function(){var u,t,s,r=this,q=H.d([],[A.er]),p=r.a,o=H.ae(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.E(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.iH(t.type,t.size,t.name,s))}r.y=new A.jb(q)},
aV:function(a,b,c){var u=this.a
if(a===1)return new A.aN(u,b,c)
else return A.ly(u,this.r,b,a,c)},
fq:function(a,b,c){var u=this.a
if(a===1)return new A.cf(u,b,c)
else return A.ly(u,this.r,b,a,c)},
fs:function(a,b,c){var u=this.a
if(a===1)return new A.ak(u,b,c)
else return A.ly(u,this.r,b,a,c)},
by:function(a,b){return new P.eJ(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
iH:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aV(b,c,d)
case 5121:return u.aV(b,c,d)
case 5122:return u.aV(b,c,d)
case 5123:return u.aV(b,c,d)
case 5124:return u.aV(b,c,d)
case 5125:return u.aV(b,c,d)
case 5126:return new A.ab(u.a,c,d)
case 35664:return new A.j7(u.a,c,d)
case 35665:return new A.a_(u.a,c,d)
case 35666:return new A.da(u.a,c,d)
case 35667:return new A.j8(u.a,c,d)
case 35668:return new A.j9(u.a,c,d)
case 35669:return new A.ja(u.a,c,d)
case 35674:return new A.jc(u.a,c,d)
case 35675:return new A.db(u.a,c,d)
case 35676:return new A.aA(u.a,c,d)
case 35678:return u.fq(b,c,d)
case 35680:return u.fs(b,c,d)
case 35670:throw H.c(u.by("BOOL",c))
case 35671:throw H.c(u.by("BOOL_VEC2",c))
case 35672:throw H.c(u.by("BOOL_VEC3",c))
case 35673:throw H.c(u.by("BOOL_VEC4",c))
default:throw H.c(P.v("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}}
A.ei.prototype={}
A.er.prototype={}
A.jb.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
M:function(a,b){var u=this.j(0,b)
if(u==null)throw H.c(P.v("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.O()},
O:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.u)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.aN.prototype={
i:function(a){return"Uniform1i: "+H.i(this.c)}}
A.j8.prototype={
i:function(a){return"Uniform2i: "+H.i(this.c)}}
A.j9.prototype={
i:function(a){return"Uniform3i: "+H.i(this.c)}}
A.ja.prototype={
i:function(a){return"Uniform4i: "+H.i(this.c)}}
A.j6.prototype={
i:function(a){return"Uniform1iv: "+H.i(this.c)},
sil:function(a){H.m(a,"$ib",[P.l],"$ab")}}
A.ab.prototype={
i:function(a){return"Uniform1f: "+H.i(this.c)}}
A.j7.prototype={
i:function(a){return"Uniform2f: "+H.i(this.c)}}
A.a_.prototype={
i:function(a){return"Uniform3f: "+H.i(this.c)}}
A.da.prototype={
i:function(a){return"Uniform4f: "+H.i(this.c)}}
A.jc.prototype={
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}}
A.db.prototype={
ar:function(a){var u=new Float32Array(H.cm(H.m(a,"$ib",[P.A],"$ab")))
C.c.eL(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.i(this.c)}}
A.aA.prototype={
ar:function(a){var u=new Float32Array(H.cm(H.m(a,"$ib",[P.A],"$ab")))
C.c.eM(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.i(this.c)}}
A.cf.prototype={
i:function(a){return"UniformSampler2D: "+H.i(this.c)}}
A.ak.prototype={
d0:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}
F.ky.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cF(s.b,b).cF(s.d.cF(s.c,b),c)
a.sa_(0,new V.X(r.a,r.b,r.c))
a.sau(r.p(0,Math.sqrt(r.w(r))))
s=1-b
u=1-c
a.sdV(new V.aK(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)},
$S:5}
F.kK.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:20}
F.kM.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.E(p)
s=-s*p
u=r*p
a.sa_(0,new V.X(s,u,q))
u=new V.D(s,u,q)
a.sau(u.p(0,Math.sqrt(u.w(u))))
a.sdV(new V.aK(1-c,2+c,-1,-1))},
$S:5}
F.kN.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:19}
F.kO.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:19}
F.kX.prototype={
$3:function(a,b,c){var u=c*3.141592653589793,t=Math.sin(u),s=b*6.283185307179586,r=new V.D(Math.cos(s)*t,Math.cos(u),Math.sin(s)*t)
s=r.p(0,Math.sqrt(r.w(r)))
a.sa_(0,new V.X(s.a,s.b,s.c))},
$S:5}
F.la.prototype={
$2:function(a,b){return 0},
$S:20}
F.lb.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.E(s)
u=a.f
t=new V.D(u.a,u.b,u.c)
s=t.p(0,Math.sqrt(t.w(t))).u(0,this.b+s)
a.sa_(0,new V.X(s.a,s.b,s.c))},
$S:5}
F.le.prototype={
$1:function(a){return new V.X(Math.cos(a),Math.sin(a),0)},
$S:18}
F.kW.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.X(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:18}
F.kL.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.m_(n.$1(o),m)
m=J.m_(n.$1(o+3.141592653589793/p.c),m).L(0,l)
m=new V.D(m.a,m.b,m.c)
u=m.p(0,Math.sqrt(m.w(m)))
n=$.mG
if(n==null){n=new V.D(1,0,0)
$.mG=n
t=n}else t=n
n=u.aH(!J.K(u,t)?V.mI():t)
s=n.p(0,Math.sqrt(n.w(n)))
n=s.aH(u)
t=n.p(0,Math.sqrt(n.w(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.u(0,n*m)
m=s.u(0,q*m)
a.sa_(0,l.A(0,new V.X(n.a-m.a,n.b-m.b,n.c-m.c)))},
$S:5}
F.aa.prototype={
bg:function(){var u=this
if(!u.gbh()){C.a.D(u.a.a.d.b,u)
u.a.a.V()}u.ce()
u.cf()
u.hR()},
bw:function(a){this.a=a
C.a.h(a.d.b,this)},
bx:function(a){this.b=a
C.a.h(a.d.c,this)},
dJ:function(a){this.c=a
C.a.h(a.d.d,this)},
ce:function(){var u=this.a
if(u!=null){C.a.D(u.d.b,this)
this.a=null}},
cf:function(){var u=this.b
if(u!=null){C.a.D(u.d.c,this)
this.b=null}},
hR:function(){var u=this.c
if(u!=null){C.a.D(u.d.d,this)
this.c=null}},
gbh:function(){return this.a==null||this.b==null||this.c==null},
fh:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.dd()
if(q!=null)s=s.A(0,q)
if(u!=null)s=s.A(0,u)
if(t!=null)s=s.A(0,t)
if(s.ep())return
return s.p(0,Math.sqrt(s.w(s)))},
fl:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.L(0,q)
r=new V.D(r.a,r.b,r.c)
s=r.p(0,Math.sqrt(r.w(r)))
r=t.L(0,q)
r=new V.D(r.a,r.b,r.c)
r=s.aH(r.p(0,Math.sqrt(r.w(r))))
return r.p(0,Math.sqrt(r.w(r)))},
cn:function(){var u,t=this
if(t.d!=null)return!0
u=t.fh()
if(u==null){u=t.fl()
if(u==null)return!1}t.d=u
t.a.a.V()
return!0},
fg:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.dd()
if(q!=null)s=s.A(0,q)
if(u!=null)s=s.A(0,u)
if(t!=null)s=s.A(0,t)
if(s.ep())return
return s.p(0,Math.sqrt(s.w(s)))},
fk:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.P().a){l=d.L(0,g)
l=new V.D(l.a,l.b,l.c)
q=l.p(0,Math.sqrt(l.w(l)))
if(s.a-t.a<0)q=q.T(0)}else{p=(l-u.b)/r
l=d.L(0,g).u(0,p).A(0,g).L(0,j)
l=new V.D(l.a,l.b,l.c)
q=l.p(0,Math.sqrt(l.w(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.T(0)}l=n.d
if(l!=null){o=l.p(0,Math.sqrt(l.w(l)))
l=o.aH(q)
l=l.p(0,Math.sqrt(l.w(l))).aH(o)
q=l.p(0,Math.sqrt(l.w(l)))}return q},
cl:function(){var u,t=this
if(t.e!=null)return!0
u=t.fg()
if(u==null){u=t.fk()
if(u==null)return!1}t.e=u
t.a.a.V()
return!0},
aU:function(a,b){var u=b.a
if(u==null)throw H.c(P.v("May not replace a face's vertex with a vertex which is not attached to a shape."))
if(a.a!==u)throw H.c(P.v("May not replace a face's vertex with a vertex attached to a different shape."))},
giB:function(a){var u=this
if(J.K(u.a,u.b))return!0
if(J.K(u.b,u.c))return!0
if(J.K(u.c,u.a))return!0
return!1},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
G:function(a){var u,t,s=this
if(s.gbh())return a+"disposed"
u=a+C.b.ap(J.av(s.a.e),0)+", "+C.b.ap(J.av(s.b.e),0)+", "+C.b.ap(J.av(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
O:function(){return this.G("")}}
F.ha.prototype={}
F.iC.prototype={
b1:function(a,b,c){var u,t=b.a
t.a.a.B()
t=t.e
u=c.a
u.a.a.B()
if(t==u.e){t=b.b
t.a.a.B()
t=t.e
u=c.b
u.a.a.B()
if(t==u.e){t=b.c
t.a.a.B()
t=t.e
u=c.c
u.a.a.B()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.B()
t=t.e
u=c.b
u.a.a.B()
if(t==u.e){t=b.b
t.a.a.B()
t=t.e
u=c.c
u.a.a.B()
if(t==u.e){t=b.c
t.a.a.B()
t=t.e
u=c.a
u.a.a.B()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.B()
t=t.e
u=c.c
u.a.a.B()
if(t==u.e){t=b.b
t.a.a.B()
t=t.e
u=c.a
u.a.a.B()
if(t==u.e){t=b.c
t.a.a.B()
t=t.e
u=c.b
u.a.a.B()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.bs.prototype={
bg:function(){var u=this
if(!u.gbh()){C.a.D(u.a.a.c.b,u)
u.a.a.V()}u.ce()
u.cf()},
bw:function(a){this.a=a
C.a.h(a.c.b,this)},
bx:function(a){this.b=a
C.a.h(a.c.c,this)},
ce:function(){var u=this.a
if(u!=null){C.a.D(u.c.b,this)
this.a=null}},
cf:function(){var u=this.b
if(u!=null){C.a.D(u.c.c,this)
this.b=null}},
gbh:function(){return this.a==null||this.b==null},
aU:function(a,b){var u=b.a
if(u==null)throw H.c(P.v("May not replace a line's vertex with a vertex which is not attached to a shape."))
if(a.a!==u)throw H.c(P.v("May not replace a line's vertex with a vertex attached to a different shape."))},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
G:function(a){if(this.gbh())return a+"disposed"
return a+C.b.ap(J.av(this.a.e),0)+", "+C.b.ap(J.av(this.b.e),0)},
O:function(){return this.G("")}}
F.hv.prototype={}
F.j5.prototype={
b1:function(a,b,c){var u,t=b.a
t.a.a.B()
t=t.e
u=c.a
u.a.a.B()
if(t==u.e){t=b.b
t.a.a.B()
t=t.e
u=c.b
u.a.a.B()
return t==u.e}else{t=b.a
t.a.a.B()
t=t.e
u=c.b
u.a.a.B()
if(t==u.e){t=b.b
t.a.a.B()
t=t.e
u=c.a
u.a.a.B()
return t==u.e}else return!1}}}
F.bQ.prototype={
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
G:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.ap(J.av(u.e),0)},
O:function(){return this.G("")}}
F.ef.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.V():u},
b2:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.B()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){r=g[s]
h.a.h(0,r.iE())}h.a.B()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.B()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bQ()
if(n.a==null)H.w(P.v("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.E(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.B()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.B()
p=p.e
if(typeof p!=="number")return p.A()
p+=u
o=o.c
if(p>=o.length)return H.e(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.o3(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.B()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.B()
p=p.e
if(typeof p!=="number")return p.A()
p+=u
o=o.c
if(p>=o.length)return H.e(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.B()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.cH(l,k,i)}g=h.e
if(g!=null)g.aC(0)},
am:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.am()||!1
if(!t.a.am())u=!1
s=t.e
if(s!=null)s.aC(0)
return u},
iT:function(a,b){var u,t,s,r=this.a.c.length
for(u=0;u<r;++u){t=this.a.c
if(u>=t.length)return H.e(t,u)
s=t[u]
if(b.b1(0,a,s))return s}return},
hU:function(a,b){var u,t,s,r,q,p
H.m(b,"$ib",[F.al],"$ab")
this.a.h(0,a)
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.u)(b),++t){s=b[t]
for(;r=s.d,r.b.length+r.c.length+r.d.length>0;){r=r.j(0,0)
q=r.a
if(q==null||r.b==null||r.c==null)H.w(P.v("May not replace a face's vertex when the point has been disposed."))
if(J.K(q,s)){r.aU(s,a)
q=r.a
if(q!=null){C.a.D(q.d.b,r)
r.a=null}r.a=a
C.a.h(a.d.b,r)
p=1}else p=0
if(J.K(r.b,s)){r.aU(s,a)
q=r.b
if(q!=null){C.a.D(q.d.c,r)
r.b=null}r.b=a
C.a.h(a.d.c,r);++p}if(J.K(r.c,s)){r.aU(s,a)
q=r.c
if(q!=null){C.a.D(q.d.d,r)
r.c=null}r.c=a
C.a.h(a.d.d,r);++p}if(p>0){r=r.a.a.e
if(r!=null)r.E(null)}}for(;r=s.c,r.b.length+r.c.length>0;){r=r.j(0,0)
q=r.a
if(q==null||r.b==null)H.w(P.v("May not replace a line's vertex when the point has been disposed."))
if(J.K(q,s)){r.aU(s,a)
q=r.a
if(q!=null){C.a.D(q.c.b,r)
r.a=null}r.a=a
C.a.h(a.c.b,r)
p=1}else p=0
if(J.K(r.b,s)){r.aU(s,a)
q=r.b
if(q!=null){C.a.D(q.c.c,r)
r.b=null}r.b=a
C.a.h(a.c.c,r);++p}if(p>0){r=r.a.a.e
if(r!=null)r.E(null)}}for(;r=s.b.b,r.length>0;){r=r[0]
q=r.a
if(q==null)H.w(P.v("May not replace a point's vertex when the point has been disposed."))
if(J.K(q,s)){if(a.a==null)H.w(P.v("May not replace a point's vertex with a vertex which is not attached to a shape."))
q=r.a
if(q!=null){C.a.D(q.b.b,r)
r.a=null}r.a=a
C.a.h(a.b.b,r)
p=1}else p=0
if(p>0){r=r.a.a.e
if(r!=null)r.E(null)}}this.a.D(0,s)}},
es:function(a,b){var u,t,s,r,q,p,o=this,n=o.e
if(n!=null)++n.d
n=o.a.c
u=H.d(n.slice(0),[H.r(n,0)])
for(n=[F.al];u.length!==0;){t=C.a.giV(u)
C.a.eB(u,0)
if(t!=null){s=H.d([],n)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.e(u,r)
q=u[r]
if(q!=null&&a.b1(0,t,q)){C.a.h(s,q)
C.a.eB(u,r)}}if(s.length>1){p=b.b2(s)
if(p!=null){o.hU(p,s)
C.a.h(u,p)}}}}o.a.B()
o.c.bM()
o.d.bM()
o.b.jo()
o.c.cP(new F.j5())
o.d.cP(new F.iC())
n=o.e
if(n!=null)n.aC(0)},
bB:function(){this.es(new F.de(),new F.i7())},
dZ:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.b5()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bz().a)!==0)++s
if((t&$.by().a)!==0)++s
if((t&$.bX().a)!==0)++s
if((t&$.bA().a)!==0)++s
if((t&$.dz().a)!==0)++s
if((t&$.dA().a)!==0)++s
if((t&$.cx().a)!==0)++s
if((t&$.bx().a)!==0)++s
r=a3.gd1(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.A
p=H.d(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.d(u,[Z.dH])
for(n=0,m=0;m<s;++m){l=a3.iu(m)
k=l.gd1(l)
C.a.k(o,m,new Z.dH(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.e(u,j)
i=u[j].j5(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.k(p,h,i[g]);++h}}n+=k}H.m(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.cm(p)),35044)
u.bindBuffer(a0,null)
e=new Z.cB(new Z.ez(a0,f),o,a3)
e.sfF(H.d([],[Z.bK]))
if(a.b.b.length!==0){t=P.l
d=H.d([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.B()
C.a.h(d,c.e)}b=Z.lC(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bK(0,d.length,b))}if(a.c.b.length!==0){t=P.l
d=H.d([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.B()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.e(c,m)
c=c[m].b
c.a.a.B()
C.a.h(d,c.e)}b=Z.lC(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bK(1,d.length,b))}if(a.d.b.length!==0){t=P.l
d=H.d([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.B()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.e(c,m)
c=c[m].b
c.a.a.B()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.e(c,m)
c=c[m].c
c.a.a.B()
C.a.h(d,c.e)}b=Z.lC(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bK(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.d([],[P.h])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.G(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.G(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.G(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.G(t))}return C.a.m(s,"\n")},
V:function(){var u=this.e
if(u!=null)u.E(null)},
$iqf:1}
F.iv.prototype={
bz:function(a,b,c,d){var u,t=this.a
t.a.h(0,b)
t.a.h(0,c)
t.a.h(0,d)
u=new F.aa()
t=b.a
if(t==null)H.w(P.v("May not create a face with a first vertex which is not attached to a shape."))
if(t!=c.a||t!=d.a)H.w(P.v("May not create a face with vertices attached to different shapes."))
u.bw(b)
u.bx(c)
u.dJ(d)
C.a.h(u.a.a.d.b,u)
u.a.a.V()
return u},
dQ:function(a){var u,t,s,r,q,p,o
H.m(a,"$ib",[F.al],"$ab")
u=H.d([],[F.aa])
t=a.length
if(t>0){s=a[0]
for(r=this.a,q=2;q<t;++q){p=q-1
o=a.length
if(p>=o)return H.e(a,p)
p=a[p]
if(q>=o)return H.e(a,q)
o=a[q]
r.a.h(0,s)
r.a.h(0,p)
r.a.h(0,o)
C.a.h(u,F.cH(s,p,o))}}return u},
iq:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.m(c,"$ib",[F.al],"$ab")
u=H.d([],[F.aa])
for(t=this.a,s=b,r=0,q=!1,p=1;p<a;++p,++r,++s){for(o=q,n=1;n<b;++n,s=j){m=c.length
if(r<0||r>=m)return H.e(c,r)
l=c[r];++r
if(r>=m)return H.e(c,r)
k=c[r]
j=s+1
if(j<0||j>=m)return H.e(c,j)
i=c[j]
if(s<0||s>=m)return H.e(c,s)
h=c[s]
m=t.a
if(o){m.h(0,l)
t.a.h(0,k)
t.a.h(0,i)
C.a.h(u,F.cH(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cH(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cH(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cH(k,h,l))}o=!o}q=!q}return u},
gn:function(a){return this.b.length},
cP:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.b1(0,p,n)){p.bg()
break}}}}},
bM:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=s.giB(s)
if(t)s.bg()}},
am:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.u)(u),++r)if(!u[r].cn())s=!1
return s},
cm:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.u)(u),++r)if(!u[r].cl())s=!1
return s},
i:function(a){return this.O()},
G:function(a){var u,t,s,r=H.d([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].G(a))
return C.a.m(r,"\n")},
O:function(){return this.G("")},
sfA:function(a){this.b=H.m(a,"$ib",[F.aa],"$ab")}}
F.iw.prototype={
gn:function(a){return this.b.length},
cP:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.b1(0,p,n)){p.bg()
break}}}}},
bM:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=J.K(s.a,s.b)
if(t)s.bg()}},
i:function(a){return this.O()},
G:function(a){var u,t,s=H.d([],[P.h]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.e(t,u)
C.a.h(s,t[u].G(a+(""+u+". ")))}return C.a.m(s,"\n")},
O:function(){return this.G("")},
sfG:function(a){this.b=H.m(a,"$ib",[F.bs],"$ab")}}
F.ix.prototype={
gn:function(a){return this.b.length},
jo:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.D(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.E(null)}s=t.a
if(s!=null){C.a.D(s.b.b,t)
t.a=null}}}},
i:function(a){return this.O()},
G:function(a){var u,t,s,r=H.d([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].G(a))
return C.a.m(r,"\n")},
O:function(){return this.G("")},
scb:function(a){this.b=H.m(a,"$ib",[F.bQ],"$ab")}}
F.al.prototype={
cq:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.ci(u.cx,r,o,t,s,q,p,a,n)},
iE:function(){return this.cq(null)},
sa_:function(a,b){var u
if(!J.K(this.f,b)){this.f=b
u=this.a
if(u!=null)u.V()}},
scJ:function(a){var u
a=a==null?null:a.p(0,Math.sqrt(a.w(a)))
if(!J.K(this.r,a)){this.r=a
u=this.a
if(u!=null)u.V()}},
sdX:function(a){var u
a=a==null?null:a.p(0,Math.sqrt(a.w(a)))
if(!J.K(this.x,a)){this.x=a
u=this.a
if(u!=null)u.V()}},
scS:function(a){var u
if(!J.K(this.y,a)){this.y=a
u=this.a
if(u!=null)u.V()}},
sau:function(a){var u
if(!J.K(this.z,a)){this.z=a
u=this.a
if(u!=null)u.V()}},
sas:function(a,b){var u
if(!J.K(this.Q,b)){this.Q=b
u=this.a
if(u!=null)u.V()}},
seP:function(a,b){var u
if(this.ch!==b){this.ch=b
u=this.a
if(u!=null)u.V()}},
sdV:function(a){var u
if(!J.K(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.V()}},
j5:function(a){var u,t,s=this
if(a.t(0,$.b5())){u=s.f
t=[P.A]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.t(0,$.bz())){u=s.r
t=[P.A]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.t(0,$.by())){u=s.x
t=[P.A]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.t(0,$.bX())){u=s.y
t=[P.A]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.t(0,$.bA())){u=s.z
t=[P.A]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.t(0,$.dz())){u=s.Q
t=[P.A]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.t(0,$.dA())){u=s.Q
if(u==null)return H.d([1,1,1,1],[P.A])
else return u.cT(0)}else if(a.t(0,$.cx()))return H.d([s.ch],[P.A])
else if(a.t(0,$.bx())){u=s.cx
t=[P.A]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.A])},
cn:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.dd()
t.d.H(0,new F.jD(s))
s=s.a
t.r=s.p(0,Math.sqrt(s.w(s)))
s=t.a
if(s!=null){s.V()
s=t.a.e
if(s!=null)s.aC(0)}return!0},
cl:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.dd()
t.d.H(0,new F.jC(s))
s=s.a
t.x=s.p(0,Math.sqrt(s.w(s)))
s=t.a
if(s!=null){s.V()
s=t.a.e
if(s!=null)s.aC(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
G:function(a){var u,t,s=this,r="-",q=H.d([],[P.h])
C.a.h(q,C.b.ap(J.av(s.e),0))
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
t=C.a.m(q,", ")
return a+"{"+t+"}"},
O:function(){return this.G("")}}
F.jD.prototype={
$1:function(a){var u,t
H.f(a,"$iaa")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.A(0,u)}},
$S:10}
F.jC.prototype={
$1:function(a){var u,t
H.f(a,"$iaa")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.A(0,u)}},
$S:10}
F.jt.prototype={
B:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.e(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.v("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.V()
return!0},
dR:function(a,b,c,d,e,f,g){var u=F.ci(a,null,b,c,d,e,f,g,0)
this.h(0,u)
return u},
bA:function(a,b,c,d,e,f){return this.dR(a,b,c,null,d,e,f)},
ir:function(a,b,c,d,e,f){return this.dR(a,b,c,d,e,f,null)},
gn:function(a){return this.c.length},
D:function(a,b){var u,t
if(b==null)return!1
u=this.a
if(b.a!==u)return!1
if(b.b.b.length===0){t=b.c
if(t.b.length===0&&t.c.length===0){t=b.d
t=t.b.length===0&&t.c.length===0&&t.d.length===0}else t=!1}else t=!1
if(!t)throw H.c(P.v("May not remove a vertex without first making it empty."))
b.a=null
C.a.D(this.c,b)
u.V()
return this.b=!0},
am:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)u[s].cn()
return!0},
cm:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)u[s].cl()
return!0},
iA:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.p(0,Math.sqrt(p*p+o*o+n*n))
if(!J.K(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.E(null)}}}}return!0},
i:function(a){return this.O()},
G:function(a){var u,t,s,r
this.B()
u=H.d([],[P.h])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r)C.a.h(u,t[r].G(a))
return C.a.m(u,"\n")},
O:function(){return this.G("")},
sim:function(a){this.c=H.m(a,"$ib",[F.al],"$ab")}}
F.ju.prototype={
gn:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b<s){if(b<0)return H.e(t,b)
return t[b]}b-=s
t=this.c
u=t.length
if(b<u){if(b<0)return H.e(t,b)
return t[b]}b-=u
t=this.d
if(b<0||b>=t.length)return H.e(t,b)
return t[b]},
H:function(a,b){var u=this
H.n(b,{func:1,ret:-1,args:[F.aa]})
C.a.H(u.b,b)
C.a.H(u.c,new F.jv(u,b))
C.a.H(u.d,new F.jw(u,b))},
i:function(a){return this.O()},
O:function(){var u,t,s,r=H.d([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].G(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].G(""))
return C.a.m(r,"\n")},
sfB:function(a){this.b=H.m(a,"$ib",[F.aa],"$ab")},
sfC:function(a){this.c=H.m(a,"$ib",[F.aa],"$ab")},
sfD:function(a){this.d=H.m(a,"$ib",[F.aa],"$ab")}}
F.jv.prototype={
$1:function(a){H.f(a,"$iaa")
if(!J.K(a.a,this.a))this.b.$1(a)},
$S:10}
F.jw.prototype={
$1:function(a){var u
H.f(a,"$iaa")
u=this.a
if(!J.K(a.a,u)&&!J.K(a.b,u))this.b.$1(a)},
$S:10}
F.jy.prototype={
gn:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.e(t,u)
return t[u]}else{if(b<0)return H.e(t,b)
return t[b]}},
i:function(a){return this.O()},
O:function(){var u,t,s,r=H.d([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].G(""))
return C.a.m(r,"\n")},
sfH:function(a){this.b=H.m(a,"$ib",[F.bs],"$ab")},
sfI:function(a){this.c=H.m(a,"$ib",[F.bs],"$ab")}}
F.jz.prototype={}
F.de.prototype={
b1:function(a,b,c){return J.K(b.f,c.f)}}
F.jA.prototype={}
F.jx.prototype={
b2:function(a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=null
H.m(a5,"$ib",[F.al],"$ab")
for(u=a5.length,t=a4,s=t,r=s,q=r,p=q,o=p,n=0,m=0,l=0,k=0,j=0,i=0,h=0;h<u;++h){g=a5[h]
f=g.f
if(f!=null){o=o==null?f:new V.X(o.a+f.a,o.b+f.b,o.c+f.c);++n}e=g.r
if(e!=null)p=p==null?e:new V.D(p.a+e.a,p.b+e.b,p.c+e.c)
d=g.x
if(d!=null)q=q==null?d:new V.D(q.a+d.a,q.b+d.b,q.c+d.c)
c=g.y
if(c!=null){s=s==null?c:new V.a1(s.a+c.a,s.b+c.b);++l}b=g.z
if(b!=null){t=t==null?b:new V.D(t.a+b.a,t.b+b.b,t.c+b.c);++k}a=g.Q
if(a!=null){a0=a.a
a1=a.b
a2=a.c
a=a.d
if(r==null){a=[a0,a1,a2,a]
r=new V.bu(a[0],a[1],a[2],a[3])}else{a=[a0,a1,a2,a]
a0=a[0]
a1=a[1]
a2=a[2]
a=a[3]
r=new V.bu(r.a+a0,r.b+a1,r.c+a2,r.d+a)}++m}a=g.ch
if(typeof a!=="number")return H.E(a)
i+=a;++j}a3=F.ci(a4,a4,a4,a4,a4,a4,a4,a4,0)
if(n<=0||o==null)a3.sa_(0,a4)
else a3.sa_(0,o.p(0,n))
if(p==null)a3.scJ(a4)
else a3.scJ(p.p(0,Math.sqrt(p.w(p))))
if(q==null)a3.sdX(a4)
else a3.sdX(q.p(0,Math.sqrt(q.w(q))))
if(l<=0||s==null)a3.scS(a4)
else a3.scS(s.p(0,l))
if(k<=0||t==null)a3.sau(a4)
else a3.sau(t.p(0,k))
if(m<=0||r==null)a3.sas(0,a4)
else{u=r.p(0,m)
u=[u.a,u.b,u.c,u.d]
a=u[0]
a0=u[1]
a1=u[2]
u=u[3]
if(a<0)a=0
else if(a>1)a=1
if(a0<0)a0=0
else if(a0>1)a0=1
if(a1<0)a1=0
else if(a1>1)a1=1
if(u<0)u=0
else if(u>1)u=1
a3.sas(0,new V.an(a,a0,a1,u))}if(j<=0)a3.seP(0,0)
else a3.seP(0,i/j)
return a3}}
F.i7.prototype={
b2:function(a){var u,t,s,r
H.m(a,"$ib",[F.al],"$ab")
u=V.dd()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.D(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.p(0,Math.sqrt(u.w(u)))
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.u)(a),++s)a[s].scJ(u)
return}}
F.jB.prototype={
gn:function(a){return this.b.length},
i:function(a){return this.O()},
O:function(){var u,t,s,r=H.d([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].G(""))
return C.a.m(r,"\n")},
scb:function(a){this.b=H.m(a,"$ib",[F.bQ],"$ab")}}
O.e1.prototype={
gq:function(){var u=this.fr
return u==null?this.fr=D.V():u},
Y:function(a){var u
H.f(a,"$iB")
u=this.fr
if(u!=null)u.E(a)},
b8:function(){return this.Y(null)},
dF:function(a){H.f(a,"$iB")
this.a=null
this.Y(a)},
hX:function(){return this.dF(null)},
fW:function(a,b){var u=V.ax
H.m(b,"$ij",[u],"$aj")
u=new D.bL([u])
u.b=!0
this.Y(u)},
fY:function(a,b){var u=V.ax
H.m(b,"$ij",[u],"$aj")
u=new D.bM([u])
u.b=!0
this.Y(u)},
dk:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.l,h=new H.a6([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=h.j(0,0)
h.k(0,0,r==null?1:r)}q=H.d([],[A.aS])
h.H(0,new O.hO(j,q))
C.a.bS(q,new O.hP())
p=new H.a6([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){o=u[s]
r=o.gbf()
n=p.j(0,o.gbf())
p.k(0,r,n==null?1:n)}m=H.d([],[A.aW])
p.H(0,new O.hQ(j,m))
C.a.bS(m,new O.hR())
l=new H.a6([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.u)(i),++s){o=i[s]
t=o.gbf()
r=l.j(0,o.gbf())
l.k(0,t,r==null?1:r)}k=H.d([],[A.b_])
l.H(0,new O.hS(j,k))
C.a.bS(k,new O.hT())
i=C.d.ad(j.e.a.length+3,4)
j.dy.e
return A.oa(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
aj:function(a,b){H.m(a,"$ib",[T.d7],"$ab")
if(b!=null)if(!C.a.W(a,b)){b.a=a.length
C.a.h(a,b)}},
av:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.aw(u,u.length,[H.r(u,0)]);u.C();){t=u.d
t.toString
s=$.js
if(s==null)s=$.js=new V.D(0,0,1)
t.a=s
r=$.jr
t.d=r==null?$.jr=new V.D(0,1,0):r
r=$.jq
t.e=r==null?$.jq=new V.D(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bO(s)
r=s.a
p=s.b
o=s.c
t.a=s.p(0,Math.sqrt(r*r+p*p+o*o))
o=q.bO(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.p(0,Math.sqrt(p*p+r*r+s*s))
s=q.bO(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.p(0,Math.sqrt(r*r+p*p+o*o))}}}},
eC:function(b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.dk()
u=H.f(b4.fr.j(0,b3.bi),"$ie2")
if(u==null){u=A.o9(b3,b4.a)
b4.dT(u)}b3=b2.a=u
b5.e=null}t=b3.z
s=t.bE
b3=b5.e
if(!(b3 instanceof Z.cB))b3=b5.e=null
if(b3==null||!b3.d.t(0,s)){b3=t.k3
if(b3)b5.d.am()
r=t.k4
if(r){q=b5.d
p=q.e
if(p!=null)++p.d
q.d.cm()
q.a.cm()
q=q.e
if(q!=null)q.aC(0)}q=t.r2
if(q){p=b5.d
o=p.e
if(o!=null)++o.d
p.a.iA()
p=p.e
if(p!=null)p.aC(0)}n=b5.d.dZ(new Z.eA(b4.a),s)
n.aI($.b5()).e=b2.a.Q.c
if(b3)n.aI($.bz()).e=b2.a.cx.c
if(r)n.aI($.by()).e=b2.a.ch.c
if(t.r1)n.aI($.bX()).e=b2.a.cy.c
if(q)n.aI($.bA()).e=b2.a.db.c
if(t.rx)n.aI($.bx()).e=b2.a.dx.c
b5.e=n}b3=T.d7
m=H.d([],[b3])
b2.a.a3(b4)
if(t.dy){r=b2.a
q=b4.dx
q=q.ga6(q)
r=r.dy
r.toString
r.ar(q.ai(0,!0))}if(t.fr){r=b2.a
q=b4.cx
if(q==null){q=b4.db
q=q.ga6(q)
p=b4.dx
p=b4.cx=q.u(0,p.ga6(p))
q=p}r=r.fr
r.toString
r.ar(q.ai(0,!0))}r=b2.a
q=b4.ch
if(q==null){q=b4.gjm()
p=b4.dx
p=b4.ch=q.u(0,p.ga6(p))
q=p}r=r.fy
r.toString
r.ar(q.ai(0,!0))
if(t.ry){r=b2.a
q=b2.b
r=r.k1
r.toString
r.ar(C.k.ai(q,!0))}if(t.x1){r=b2.a
q=b2.c
r=r.k2
r.toString
r.ar(C.k.ai(q,!0))}if(t.x2){r=b2.a
q=b2.d
r=r.k3
r.toString
r.ar(C.k.ai(q,!0))}if(t.y2>0){l=b2.e.a.length
r=b2.a.k4
C.c.bP(r.a,r.d,l)
for(r=[P.A],k=0;k<l;++k){q=b2.a
p=b2.e.a
if(k>=p.length)return H.e(p,k)
p=p[k]
q.toString
H.f(p,"$iax")
q=q.r1
if(k>=q.length)return H.e(q,k)
q=q[k]
j=new Float32Array(H.cm(H.m(p.ai(0,!0),"$ib",r,"$ab")))
C.c.eM(q.a,q.d,!1,j)}}r=t.a
if(r.a){q=b2.a
p=b2.f.f
q=q.r2
C.c.a0(q.a,q.d,p.a,p.b,p.c)}if(r.c){b2.aj(m,b2.f.e)
r=b2.a
q=b2.f.e
r.al(r.ry,q)}if(t.id){r=t.b
if(r.a){q=b2.a
p=b2.r.f
q=q.x1
C.c.a0(q.a,q.d,p.a,p.b,p.c)}if(r.c){b2.aj(m,b2.r.e)
r=b2.a
q=b2.r.e
r.al(r.y1,q)}r=t.c
if(r.a){q=b2.a
p=b2.x.f
q=q.y2
C.c.a0(q.a,q.d,p.a,p.b,p.c)}if(r.c){b2.aj(m,b2.x.e)
r=b2.a
q=b2.x.e
r.al(r.bE,q)}r=t.d
if(r.a){q=b2.a
p=b2.y.f
q=q.e3
C.c.a0(q.a,q.d,p.a,p.b,p.c)}if(r.c){b2.aj(m,b2.y.e)
r=b2.a
q=b2.y.e
r.al(r.e4,q)}r=t.e
q=r.a
if(!q)p=r.c
else p=!0
if(p){p=b2.a
o=b2.z.ch
p=p.e7
C.c.a4(p.a,p.d,o)}if(q){q=b2.a
p=b2.z.f
q=q.e5
C.c.a0(q.a,q.d,p.a,p.b,p.c)}if(r.c){b2.aj(m,b2.z.e)
r=b2.a
q=b2.z.e
r.al(r.e6,q)}r=t.z
if(r.length>0){q=b4.db
i=q.ga6(q)
q=P.l
h=new H.a6([q,q])
for(q=b2.dx.e,p=q.length,g=0;g<q.length;q.length===p||(0,H.u)(q),++g){f=q[g]
e=h.j(0,0)
if(e==null)e=0
h.k(0,0,e+1)
d=J.dB(b2.a.ct.j(0,0),e)
o=i.bO(f.a)
c=o.a
b=o.b
a=o.c
a=o.p(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
o=a.b
a=a.c
C.c.a0(b.a,b.d,c,o,a)
a=f.c
o=d.f
C.c.a0(o.a,o.d,a.a,a.b,a.c)}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.u)(r),++g){p=r[g].a
l=h.j(0,p)
if(l==null)l=0
p=b2.a.cs.j(0,p)
C.c.bP(p.a,p.d,l)}}r=t.Q
if(r.length>0){q=b4.db
i=q.ga6(q)
q=P.l
a0=new H.a6([q,q])
for(q=b2.dx.f,p=q.length,o=[b3],c=[P.A],g=0;g<q.length;q.length===p||(0,H.u)(q),++g){f=q[g]
a1=f.gbf()
e=a0.j(0,a1)
if(e==null)e=0
a0.k(0,a1,e+1)
d=J.dB(b2.a.cv.j(0,a1),e)
a2=i.u(0,f.ga6(f))
b=f.ga6(f)
a=$.cX
b=b.cU(a==null?$.cX=new V.X(0,0,0):a)
a=d.b
C.c.a0(a.a,a.d,b.a,b.b,b.c)
b=$.cX
b=a2.cU(b==null?$.cX=new V.X(0,0,0):b)
a=d.c
C.c.a0(a.a,a.d,b.a,b.b,b.c)
b=f.gas(f)
a=d.e
C.c.a0(a.a,a.d,b.a,b.b,b.c)
f.gaN()
b=a2.cE(0)
a=b.a
a3=b.b
a4=b.c
a5=b.e
a6=b.f
a7=b.r
a8=b.y
a9=b.z
b=b.Q
b0=d.d
b0.toString
j=new Float32Array(H.cm(H.m(new V.e3(a,a3,a4,a5,a6,a7,a8,a9,b).ai(0,!0),"$ib",c,"$ab")))
C.c.eL(b0.a,b0.d,!1,j)
f.gaN()
b=f.gaN()
H.m(m,"$ib",o,"$ab")
if(!C.a.W(m,b)){b.a=m.length
C.a.h(m,b)}b=f.gaN()
a=b.gbk(b)
if(a){a=d.f
a.toString
a3=b.d
if(a3<6)a.a.uniform1i(a.d,0)
else{b=b.a
a.a.uniform1i(a.d,b)}}f.gb6()
b=f.geU()
a=d.x
a.toString
a3=b.giL(b)
a4=b.giM(b)
a5=b.giN()
b=b.giK()
C.c.eK(a.a,a.d,a3,a4,a5,b)
b=f.gb6()
if(!C.a.W(m,b)){b.a=m.length
C.a.h(m,b)}b=f.gb6()
a=b.gbk(b)
if(a){a=d.r
a.toString
a3=b.d
if(a3<6)a.a.uniform1i(a.d,0)
else{b=b.a
a.a.uniform1i(a.d,b)}}if(f.giQ()){b=f.giv()
a=d.y
C.c.a4(a.a,a.d,b)
b=f.giw()
a=d.z
C.c.a4(a.a,a.d,b)
b=f.gix()
a=d.Q
C.c.a4(a.a,a.d,b)}}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.u)(r),++g){p=r[g].a
l=a0.j(0,p)
if(l==null)l=0
p=b2.a.cu.j(0,p)
C.c.bP(p.a,p.d,l)}}r=t.ch
if(r.length>0){q=b4.db
i=q.ga6(q)
q=P.l
b1=new H.a6([q,q])
for(q=b2.dx.r,p=q.length,b3=[b3],g=0;g<q.length;q.length===p||(0,H.u)(q),++g){f=q[g]
a1=f.gbf()
e=b1.j(0,a1)
if(e==null)e=0
b1.k(0,a1,e+1)
d=J.dB(b2.a.cz.j(0,a1),e)
o=f.gjl(f)
c=d.b
C.c.a0(c.a,c.d,o.a,o.b,o.c)
o=f.gjE(f).jQ()
c=d.c
C.c.a0(c.a,c.d,o.a,o.b,o.c)
o=i.cU(f.gjl(f))
c=d.d
C.c.a0(c.a,c.d,o.a,o.b,o.c)
o=f.gas(f)
c=d.e
C.c.a0(c.a,c.d,o.a,o.b,o.c)
f.gaN()
o=f.gcV()
c=d.f
C.c.a0(c.a,c.d,o.a,o.b,o.c)
o=f.gcQ(f)
c=d.r
C.c.a0(c.a,c.d,o.a,o.b,o.c)
o=f.gjR()
c=d.x
C.c.a4(c.a,c.d,o)
o=f.gjS()
c=d.y
C.c.a4(c.a,c.d,o)
f.gaN()
o=f.gaN()
H.m(m,"$ib",b3,"$ab")
if(!C.a.W(m,o)){o.a=m.length
C.a.h(m,o)}o=f.gaN()
c=o.gbk(o)
if(c){c=d.dx
c.toString
b=o.gbk(o)
if(!b)c.a.uniform1i(c.d,0)
else{o=o.gj_(o)
c.a.uniform1i(c.d,o)}}f.gb6()
o=f.geU()
c=d.z
c.toString
b=o.giL(o)
a=o.giM(o)
a3=o.giN()
o=o.giK()
C.c.eK(c.a,c.d,b,a,a3,o)
o=f.gb6()
if(!C.a.W(m,o)){o.a=m.length
C.a.h(m,o)}o=f.gb6()
c=o.gbk(o)
if(c){c=d.dy
c.toString
b=o.gbk(o)
if(!b)c.a.uniform1i(c.d,0)
else{o=o.gj_(o)
c.a.uniform1i(c.d,o)}}if(f.gjF()){o=f.gjD()
c=d.Q
C.c.a4(c.a,c.d,o)
o=f.gjC()
c=d.ch
C.c.a4(c.a,c.d,o)}if(f.giQ()){o=f.giv()
c=d.cx
C.c.a4(c.a,c.d,o)
o=f.giw()
c=d.cy
C.c.a4(c.a,c.d,o)
o=f.gix()
c=d.db
C.c.a4(c.a,c.d,o)}}for(b3=r.length,g=0;g<r.length;r.length===b3||(0,H.u)(r),++g){q=r[g].a
l=b1.j(0,q)
if(l==null)l=0
q=b2.a.cw.j(0,q)
C.c.bP(q.a,q.d,l)}}}if(t.f.c){b2.aj(m,b2.Q.e)
b3=b2.a
r=b2.Q.e
b3.al(b3.e8,r)}if(t.dx){b3=b2.a
r=b4.Q
if(r==null){r=b4.db
r=b4.Q=r.ga6(r).cE(0)}b3=b3.id
b3.toString
b3.ar(r.ai(0,!0))}if(t.cy){b2.aj(m,b2.ch)
b3=b2.a
r=b2.ch
b3.al(b3.e9,r)
b3=t.r
if(b3.a){r=b2.a
q=b2.cx.f
r=r.ea
C.c.a0(r.a,r.d,q.a,q.b,q.c)}if(b3.c){b2.aj(m,b2.cx.e)
b3=b2.a
r=b2.cx.e
b3.al(b3.eb,r)}b3=t.x
r=b3.a
if(!r)q=b3.c
else q=!0
if(q){q=b2.a
p=b2.cy.ch
q=q.ec
C.c.a4(q.a,q.d,p)}if(r){r=b2.a
q=b2.cy.f
r=r.ed
C.c.a0(r.a,r.d,q.a,q.b,q.c)}if(b3.c){b2.aj(m,b2.cy.e)
b3=b2.a
r=b2.cy.e
b3.al(b3.ee,r)}}b3=t.y
r=b3.a
q=!r
if(q)p=b3.c
else p=!0
if(p){if(r){r=b2.a
p=b2.db.f
r=r.ef
C.c.a4(r.a,r.d,p)}if(b3.c){b2.aj(m,b2.db.e)
r=b2.a
p=b2.db.e
r.al(r.eg,p)}r=b4.a
r.enable(3042)
r.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].a3(b4)
r=b5.e
r.a3(b4)
r.ah(b4)
r.aO(b4)
if(q)b3=b3.c
else b3=!0
if(b3)b4.a.disable(3042)
for(b3=b4.a,k=0;k<m.length;++k){r=m[k]
if(r.c){r.c=!1
b3.activeTexture(33984+r.a)
b3.bindTexture(34067,null)}}r=b2.a
r.toString
b3.useProgram(null)
r.x.e1()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.dk().bi},
sfj:function(a){this.e=H.m(a,"$ia5",[V.ax],"$aa5")}}
O.hO.prototype={
$2:function(a,b){H.ae(a)
H.ae(b)
if(typeof b!=="number")return b.A()
return C.a.h(this.b,new A.aS(a,C.d.ad(b+3,4)*4))},
$S:11}
O.hP.prototype={
$2:function(a,b){H.f(a,"$iaS")
H.f(b,"$iaS")
return J.lh(a.a,b.a)},
$S:51}
O.hQ.prototype={
$2:function(a,b){H.ae(a)
H.ae(b)
if(typeof b!=="number")return b.A()
return C.a.h(this.b,new A.aW(a,C.d.ad(b+3,4)*4))},
$S:11}
O.hR.prototype={
$2:function(a,b){H.f(a,"$iaW")
H.f(b,"$iaW")
return J.lh(a.a,b.a)},
$S:52}
O.hS.prototype={
$2:function(a,b){H.ae(a)
H.ae(b)
if(typeof b!=="number")return b.A()
return C.a.h(this.b,new A.b_(a,C.d.ad(b+3,4)*4))},
$S:11}
O.hT.prototype={
$2:function(a,b){H.f(a,"$ib_")
H.f(b,"$ib_")
return J.lh(a.a,b.a)},
$S:53}
O.hI.prototype={
aF:function(){var u,t=this
t.d3()
u=t.f
if(!(Math.abs(u-1)<$.P().a)){t.f=1
u=new D.O(t.b,u,1,[P.A])
u.b=!0
t.a.Y(u)}}}
O.cP.prototype={
Y:function(a){return this.a.Y(H.f(a,"$iB"))},
b8:function(){return this.Y(null)},
aF:function(){},
cg:function(a){var u,t,s=this
if(!s.c.t(0,a)){u=s.c
if(!u.a)u=u.c
else u=!0
if(u){if(!a.a)u=a.c
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.aF()
u=s.a
u.a=null
u.Y(null)}},
sau:function(a){var u,t=this,s=t.c
if(!s.c)t.cg(new A.ao(s.a,!1,!0))
s=t.e
if(s!==a){if(s!=null)s.gq().D(0,t.gaT())
u=t.e
t.e=a
a.gq().h(0,t.gaT())
s=new D.O(t.b+".textureCube",u,t.e,[T.cc])
s.b=!0
t.a.Y(s)}}}
O.hJ.prototype={}
O.bd.prototype={
dH:function(a){var u,t,s=this
if(!s.f.t(0,a)){u=s.f
s.f=a
t=new D.O(s.b+".color",u,a,[V.a9])
t.b=!0
s.a.Y(t)}},
aF:function(){this.d3()
this.dH(new V.a9(1,1,1))},
sas:function(a,b){this.cg(new A.ao(!0,!1,this.c.c))
this.dH(b)}}
O.hL.prototype={}
O.hM.prototype={
aF:function(){var u,t=this
t.d4()
u=t.ch
if(!(Math.abs(u-1)<$.P().a)){t.ch=1
u=new D.O(t.b+".refraction",u,1,[P.A])
u.b=!0
t.a.Y(u)}}}
O.hN.prototype={
dI:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.P().a)){u.ch=a
t=new D.O(u.b+".shininess",t,a,[P.A])
t.b=!0
u.a.Y(t)}},
aF:function(){this.d4()
this.dI(100)}}
O.eh.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.V():u},
Y:function(a){var u
H.f(a,"$iB")
u=this.e
if(u!=null)u.E(a)},
b8:function(){return this.Y(null)},
eC:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=H.f(a.fr.j(0,n),"$iei")
if(u==null){t=a.a
u=new A.ei(t,n)
u.d5(t,n)
u.eo(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.j(0,"posAttr")
u.Q=H.q(u.y.j(0,"fov"),"$iab")
u.ch=H.q(u.y.j(0,"ratio"),"$iab")
u.cx=H.q(u.y.j(0,"boxClr"),"$ia_")
u.cy=H.q(u.y.j(0,"boxTxt"),"$iak")
u.db=H.q(u.y.j(0,"viewMat"),"$iaA")
a.dT(u)}o.a=u}if(b.e==null){t=b.d.dZ(new Z.eA(a.a),$.b5())
t.aI($.b5()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
t.a3(a)}t=a.d
s=a.c
r=o.a
r.a3(a)
q=o.b
p=r.Q
C.c.a4(p.a,p.d,q)
q=r.ch
C.c.a4(q.a,q.d,t/s)
s=o.c
r.cy.d0(s)
s=o.d
t=r.cx
C.c.a0(t.a,t.d,s.a,s.b,s.c)
s=a.db
s=s.ga6(s).cE(0)
r=r.db
r.toString
r.ar(s.ai(0,!0))
t=b.e
if(t instanceof Z.cB){t.a3(a)
t.ah(a)
t.aO(a)}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.e1()
t=o.c
if(t!=null)t.aO(a)}}
O.bS.prototype={}
T.d7.prototype={}
T.cc.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.V():u},
a3:function(a){var u,t=this
if(!t.c&&t.d>=6){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(34067,t.b)}},
aO:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(34067,null)}}}
T.iT.prototype={
er:function(a,b){var u,t=this,s=34067,r=a+"/posx"+b,q=a+"/posy"+b,p=a+"/posz"+b,o=a+"/negx"+b,n=a+"/negy"+b,m=a+"/negz"+b,l=t.a,k=l.createTexture()
l.bindTexture(s,k)
l.texParameteri(s,10242,10497)
l.texParameteri(s,10243,10497)
l.texParameteri(s,10241,9729)
l.texParameteri(s,10240,9729)
l.bindTexture(s,null)
u=new T.cc()
u.a=0
u.b=k
u.c=!1
u.d=0
t.aW(u,k,r,34069,!1,!1)
t.aW(u,k,o,34070,!1,!1)
t.aW(u,k,q,34071,!1,!1)
t.aW(u,k,n,34072,!1,!1)
t.aW(u,k,p,34073,!1,!1)
t.aW(u,k,m,34074,!1,!1)
return u},
eq:function(a){return this.er(a,".png")},
aW:function(a,b,c,d,e,f){var u,t=document.createElement("img")
t.src=c;++this.d
u=W.o
W.ac(t,"load",H.n(new T.iU(this,t,!1,b,!1,d,a),{func:1,ret:-1,args:[u]}),!1,u)},
hY:function(a,b,c){var u,t,s,r
b=V.lV(b)
u=V.lV(a.width)
t=V.lV(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.lk()
s.width=u
s.height=t
r=H.f(C.j.eR(s,"2d"),"$icC")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.pF(r.getImageData(0,0,s.width,s.height))}}}
T.iU.prototype={
$1:function(a){var u=this,t=u.a,s=t.hY(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.c.jv(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.iO()}++t.e},
$S:12}
V.bo.prototype={
aK:function(a,b){return!0},
i:function(a){return"all"},
$iaD:1}
V.aD.prototype={}
V.e0.prototype={
aK:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)if(u[s].aK(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.u)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sac:function(a){this.a=H.m(a,"$ib",[V.aD],"$ab")},
$iaD:1}
V.ay.prototype={
aK:function(a,b){return!this.eZ(0,b)},
i:function(a){return"!["+this.d2(0)+"]"}}
V.ik.prototype={
aK:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.c9(this.a),t=H.c9(this.b)
return u+".."+t},
$iaD:1}
V.iu.prototype={
f3:function(a){var u,t
if(a.a.length<=0)throw H.c(P.v("May not create a SetMatcher with zero characters."))
u=new H.a6([P.l,P.Q])
for(t=new H.cO(a,a.gn(a),[H.aq(a,"z",0)]);t.C();)u.k(0,t.d,!0)
this.si0(u)},
aK:function(a,b){return this.a.bC(0,b)},
i:function(a){var u=this.a
return P.d4(u.ga8(u),0,null)},
si0:function(a){this.a=H.m(a,"$iC",[P.l,P.Q],"$aC")},
$iaD:1}
V.d1.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.d9(this.a.l(0,b))
r.sac(H.d([],[V.aD]))
r.c=!1
C.a.h(this.c,r)
return r},
iU:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
if(r.aK(0,a))return r}return},
i:function(a){return this.b},
sik:function(a){this.c=H.m(a,"$ib",[V.d9],"$ab")}}
V.ep.prototype={
i:function(a){var u=H.lX(this.b,"\n","\\n"),t=H.lX(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.d8.prototype={
aM:function(a,b,c){var u,t,s
H.m(c,"$ib",[P.h],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.u)(c),++t){s=c[t]
this.c.k(0,s,b)}},
i:function(a){return this.b},
shS:function(a){var u=P.h
this.c=H.m(a,"$iC",[u,u],"$aC")}}
V.iX.prototype={
l:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.d1(this,b)
u.sik(H.d([],[V.d9]))
u.d=null
this.a.k(0,b,u)}return u},
P:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.d8(a)
u=P.h
t.shS(new H.a6([u,u]))
this.b.k(0,a,t)}return t},
eJ:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.d([],[V.ep]),k=this.c,j=[P.l],i=H.d([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.F(a,s)
q=k.iU(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.d4(i,0,m)
throw H.c(P.v("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.d([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.d4(i,0,m)
o=k.d
n=o.c.j(0,p)
t=new V.ep(n==null?o.b:n,p,s)}++s}}},
si8:function(a){this.a=H.m(a,"$iC",[P.h,V.d1],"$aC")},
sib:function(a){this.b=H.m(a,"$iC",[P.h,V.d8],"$aC")}}
V.d9.prototype={
i:function(a){return this.b.b+": "+this.d2(0)}}
X.c_.prototype={$ic7:1}
X.hh.prototype={
gq:function(){var u=this.x
return u==null?this.x=D.V():u},
ay:function(a){var u=this.x
if(u!=null)u.E(a)},
a3:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.E(u)
q=C.e.at(r*u)
r=s.b
if(typeof t!=="number")return H.E(t)
p=C.e.at(r*t)
r=C.e.at(s.c*u)
a.c=r
s=C.e.at(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)}}
X.hn.prototype={
gq:function(){var u=this.b
return u==null?this.b=D.V():u},
a3:function(a){var u
a.cy.bL(V.c6())
u=V.c6()
a.db.bL(u)},
aO:function(a){a.cy.aL()
a.db.aL()},
$ic7:1,
$ic_:1}
X.e9.prototype={
gq:function(){var u=this.f
return u==null?this.f=D.V():u},
ay:function(a){var u
H.f(a,"$iB")
u=this.f
if(u!=null)u.E(a)},
h1:function(){return this.ay(null)},
a3:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.be(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bL(k)
r=$.mm
if(r==null){r=V.lw()
q=V.lB()
p=$.mF
r=V.mh(r,q,p==null?$.mF=new V.D(0,0,-1):p)
$.mm=r
u=r}else u=r
r=s.b
if(r!=null){t=r.b4(0,a,s)
if(t!=null)u=t.u(0,u)}a.db.bL(u)},
aO:function(a){a.cy.aL()
a.db.aL()},
$ic7:1,
$ic_:1}
X.d5.prototype={}
V.bE.prototype={
br:function(a){this.b=new P.hl(C.Q)
this.c=null
this.sc0(H.d([],[[P.b,W.aI]]))},
N:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.d([],[W.aI]))
u=a.split("\n")
for(l=u.length,t=[W.aI],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.d([],t))
p=document.createElement("div")
p.className="codePart"
H.M(q)
o=m.b.fp(q,0,q.length)
n=o==null?q:o
C.O.eT(p,H.lX(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gaB(m.d),p)}},
ez:function(a,b){var u,t,s,r,q=this
H.m(b,"$ib",[P.h],"$ab")
q.sc0(H.d([],[[P.b,W.aI]]))
u=C.a.m(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bD():t).eJ(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r)q.bK(t[r])},
sc0:function(a){this.d=H.m(a,"$ib",[[P.b,W.aI]],"$ab")}}
V.l9.prototype={
$1:function(a){var u
H.f(a,"$ibi")
u=C.e.eI(this.a.giY(),2)
if(u!=="0.00")P.lW(u+" fps")},
$S:55}
V.fY.prototype={
bK:function(a){var u=this
switch(a.a){case"Class":u.N(a.b,"#551")
break
case"Comment":u.N(a.b,"#777")
break
case"Id":u.N(a.b,"#111")
break
case"Num":u.N(a.b,"#191")
break
case"Reserved":u.N(a.b,"#119")
break
case"String":u.N(a.b,"#171")
break
case"Symbol":u.N(a.b,"#616")
break
case"Type":u.N(a.b,"#B11")
break
case"Whitespace":u.N(a.b,"#111")
break}},
bD:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.iY()
a1.c=a1.l(0,r)
u=a1.l(0,r).m(0,q)
t=V.x(new H.t("_"))
C.a.h(u.a,t)
t=V.a2("a","z")
C.a.h(u.a,t)
t=V.a2("A","Z")
C.a.h(u.a,t)
t=a1.l(0,q).m(0,q)
u=V.x(new H.t("_"))
C.a.h(t.a,u)
u=V.a2("0","9")
C.a.h(t.a,u)
u=V.a2("a","z")
C.a.h(t.a,u)
u=V.a2("A","Z")
C.a.h(t.a,u)
u=a1.l(0,r).m(0,p)
t=V.a2("0","9")
C.a.h(u.a,t)
t=a1.l(0,p).m(0,p)
u=V.a2("0","9")
C.a.h(t.a,u)
u=a1.l(0,p).m(0,o)
t=V.x(new H.t("."))
C.a.h(u.a,t)
t=a1.l(0,o).m(0,n)
u=V.a2("0","9")
C.a.h(t.a,u)
u=a1.l(0,n).m(0,n)
t=V.a2("0","9")
C.a.h(u.a,t)
t=a1.l(0,r).m(0,m)
u=V.x(new H.t(l))
C.a.h(t.a,u)
u=a1.l(0,m).m(0,m)
t=V.x(new H.t(l))
C.a.h(u.a,t)
t=a1.l(0,r).m(0,k)
u=V.x(new H.t('"'))
C.a.h(t.a,u)
u=a1.l(0,k).m(0,j)
t=V.x(new H.t('"'))
C.a.h(u.a,t)
t=a1.l(0,k).m(0,i)
u=V.x(new H.t("\\"))
C.a.h(t.a,u)
u=a1.l(0,i).m(0,k)
t=V.x(new H.t('"'))
C.a.h(u.a,t)
C.a.h(a1.l(0,k).m(0,k).a,new V.bo())
t=a1.l(0,r).m(0,h)
u=V.x(new H.t("'"))
C.a.h(t.a,u)
u=a1.l(0,h).m(0,g)
t=V.x(new H.t("'"))
C.a.h(u.a,t)
t=a1.l(0,h).m(0,f)
u=V.x(new H.t("\\"))
C.a.h(t.a,u)
u=a1.l(0,f).m(0,h)
t=V.x(new H.t("'"))
C.a.h(u.a,t)
C.a.h(a1.l(0,h).m(0,h).a,new V.bo())
t=a1.l(0,r).m(0,e)
u=V.x(new H.t("/"))
C.a.h(t.a,u)
u=a1.l(0,e).m(0,d)
t=V.x(new H.t("/"))
C.a.h(u.a,t)
t=a1.l(0,d).m(0,c)
u=V.x(new H.t("\n"))
C.a.h(t.a,u)
u=a1.l(0,d).m(0,d)
t=new V.ay()
s=[V.aD]
t.sac(H.d([],s))
C.a.h(u.a,t)
u=V.x(new H.t("\n"))
C.a.h(t.a,u)
u=a1.l(0,e).m(0,b)
t=V.x(new H.t("*"))
C.a.h(u.a,t)
t=a1.l(0,b).m(0,a)
u=V.x(new H.t("*"))
C.a.h(t.a,u)
u=a1.l(0,a).m(0,b)
t=new V.ay()
t.sac(H.d([],s))
C.a.h(u.a,t)
u=V.x(new H.t("*"))
C.a.h(t.a,u)
u=a1.l(0,a).m(0,c)
t=V.x(new H.t("/"))
C.a.h(u.a,t)
t=a1.l(0,r).m(0,a0)
u=V.x(new H.t(" \n\t"))
C.a.h(t.a,u)
u=a1.l(0,a0).m(0,a0)
t=V.x(new H.t(" \n\t"))
C.a.h(u.a,t)
t=a1.l(0,p)
t.d=t.a.P("Num")
t=a1.l(0,n)
t.d=t.a.P("Num")
t=a1.l(0,m)
t.d=t.a.P("Symbol")
t=a1.l(0,j)
t.d=t.a.P("String")
t=a1.l(0,g)
t.d=t.a.P("String")
t=a1.l(0,c)
t.d=t.a.P(d)
t=a1.l(0,a0)
t.d=t.a.P(a0)
t=a1.l(0,q)
t=t.d=t.a.P(q)
u=[P.h]
t.aM(0,"Class",H.d(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aM(0,"Type",H.d(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aM(0,"Reserved",H.d(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.hi.prototype={
bK:function(a){var u=this
switch(a.a){case"Builtin":u.N(a.b,"#411")
break
case"Comment":u.N(a.b,"#777")
break
case"Id":u.N(a.b,"#111")
break
case"Num":u.N(a.b,"#191")
break
case"Preprocess":u.N(a.b,"#737")
break
case"Reserved":u.N(a.b,"#119")
break
case"Symbol":u.N(a.b,"#611")
break
case"Type":u.N(a.b,"#171")
break
case"Whitespace":u.N(a.b,"#111")
break}},
bD:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.iY()
e.c=e.l(0,r)
u=e.l(0,r).m(0,q)
t=V.x(new H.t("_"))
C.a.h(u.a,t)
t=V.a2("a","z")
C.a.h(u.a,t)
t=V.a2("A","Z")
C.a.h(u.a,t)
t=e.l(0,q).m(0,q)
u=V.x(new H.t("_"))
C.a.h(t.a,u)
u=V.a2("0","9")
C.a.h(t.a,u)
u=V.a2("a","z")
C.a.h(t.a,u)
u=V.a2("A","Z")
C.a.h(t.a,u)
u=e.l(0,r).m(0,p)
t=V.a2("0","9")
C.a.h(u.a,t)
t=e.l(0,p).m(0,p)
u=V.a2("0","9")
C.a.h(t.a,u)
u=e.l(0,p).m(0,o)
t=V.x(new H.t("."))
C.a.h(u.a,t)
t=e.l(0,o).m(0,n)
u=V.a2("0","9")
C.a.h(t.a,u)
u=e.l(0,n).m(0,n)
t=V.a2("0","9")
C.a.h(u.a,t)
t=e.l(0,r).m(0,m)
u=V.x(new H.t(l))
C.a.h(t.a,u)
u=e.l(0,m).m(0,m)
t=V.x(new H.t(l))
C.a.h(u.a,t)
t=e.l(0,r).m(0,k)
u=V.x(new H.t("/"))
C.a.h(t.a,u)
u=e.l(0,k).m(0,j)
t=V.x(new H.t("/"))
C.a.h(u.a,t)
C.a.h(e.l(0,k).m(0,m).a,new V.bo())
t=e.l(0,j).m(0,i)
u=V.x(new H.t("\n"))
C.a.h(t.a,u)
u=e.l(0,j).m(0,j)
t=new V.ay()
s=[V.aD]
t.sac(H.d([],s))
C.a.h(u.a,t)
u=V.x(new H.t("\n"))
C.a.h(t.a,u)
u=e.l(0,r).m(0,h)
t=V.x(new H.t("#"))
C.a.h(u.a,t)
t=e.l(0,h).m(0,h)
u=new V.ay()
u.sac(H.d([],s))
C.a.h(t.a,u)
t=V.x(new H.t("\n"))
C.a.h(u.a,t)
t=e.l(0,h).m(0,g)
u=V.x(new H.t("\n"))
C.a.h(t.a,u)
u=e.l(0,r).m(0,f)
t=V.x(new H.t(" \n\t"))
C.a.h(u.a,t)
t=e.l(0,f).m(0,f)
u=V.x(new H.t(" \n\t"))
C.a.h(t.a,u)
u=e.l(0,p)
u.d=u.a.P("Num")
u=e.l(0,n)
u.d=u.a.P("Num")
u=e.l(0,m)
u.d=u.a.P("Symbol")
u=e.l(0,i)
u.d=u.a.P(j)
u=e.l(0,g)
u.d=u.a.P(h)
u=e.l(0,f)
u.d=u.a.P(f)
u=e.l(0,q)
u=u.d=u.a.P(q)
t=[P.h]
u.aM(0,"Type",H.d(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aM(0,"Reserved",H.d(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aM(0,"Builtin",H.d(["gl_FragColor","gl_Position"],t))
return e}}
V.hj.prototype={
bK:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.N(a.b,"#911")
u.N("=",t)
break
case"Id":u.N(a.b,t)
break
case"Other":u.N(a.b,t)
break
case"Reserved":u.N(a.b,"#119")
break
case"String":u.N(a.b,"#171")
break
case"Symbol":u.N(a.b,"#616")
break}},
bD:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.iY()
l.c=l.l(0,s)
u=l.l(0,s).m(0,r)
t=V.x(new H.t("_"))
C.a.h(u.a,t)
t=V.a2("a","z")
C.a.h(u.a,t)
t=V.a2("A","Z")
C.a.h(u.a,t)
t=l.l(0,r).m(0,r)
u=V.x(new H.t("_"))
C.a.h(t.a,u)
u=V.a2("0","9")
C.a.h(t.a,u)
u=V.a2("a","z")
C.a.h(t.a,u)
u=V.a2("A","Z")
C.a.h(t.a,u)
u=l.l(0,r).m(0,q)
t=V.x(new H.t("="))
C.a.h(u.a,t)
u.c=!0
u=l.l(0,s).m(0,p)
t=V.x(new H.t("</\\-!>="))
C.a.h(u.a,t)
t=l.l(0,p).m(0,p)
u=V.x(new H.t("</\\-!>="))
C.a.h(t.a,u)
u=l.l(0,s).m(0,o)
t=V.x(new H.t('"'))
C.a.h(u.a,t)
t=l.l(0,o).m(0,n)
u=V.x(new H.t('"'))
C.a.h(t.a,u)
u=l.l(0,o).m(0,"EscStr")
t=V.x(new H.t("\\"))
C.a.h(u.a,t)
t=l.l(0,"EscStr").m(0,o)
u=V.x(new H.t('"'))
C.a.h(t.a,u)
C.a.h(l.l(0,o).m(0,o).a,new V.bo())
C.a.h(l.l(0,s).m(0,m).a,new V.bo())
u=l.l(0,m).m(0,m)
t=new V.ay()
t.sac(H.d([],[V.aD]))
C.a.h(u.a,t)
u=V.x(new H.t('</\\-!>=_"'))
C.a.h(t.a,u)
u=V.a2("a","z")
C.a.h(t.a,u)
u=V.a2("A","Z")
C.a.h(t.a,u)
u=l.l(0,p)
u.d=u.a.P("Symbol")
u=l.l(0,n)
u.d=u.a.P("String")
u=l.l(0,r)
t=u.a.P(r)
u.d=t
t.aM(0,"Reserved",H.d(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
t=l.l(0,q)
t.d=t.a.P(q)
t=l.l(0,m)
t.d=t.a.P(m)
return l}}
V.id.prototype={
ez:function(a,b){H.m(b,"$ib",[P.h],"$ab")
this.sc0(H.d([],[[P.b,W.aI]]))
this.N(C.a.m(b,"\n"),"#111")},
bK:function(a){},
bD:function(){return}}
V.ii.prototype={
bz:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
H.n(c,{func:1,ret:-1})
if(m.c==null)return
u=m.a
t=P.mB().gcO().j(0,H.i(u))
if(t==null)if(d){c.$0()
m.dN(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.m1(m.c).h(0,q)
o=W.nZ("radio")
o.checked=s
o.name=u
u=W.o
W.ac(o,"change",H.n(new V.ij(m,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.m1(m.c).h(0,r.createElement("br"))},
az:function(a,b,c){return this.bz(a,b,c,!1)},
dN:function(a){var u,t,s=P.mB(),r=P.h,q=P.o5(s.gcO(),r,r)
q.k(0,this.a,a)
u=s.eD(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.kh([],[]).cW(""),"",t)}}
V.ij.prototype={
$1:function(a){var u=this
if(H.G(u.b.checked)){u.c.$0()
u.a.dN(u.d)}},
$S:12}
V.iy.prototype={
f4:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
r=W.o
W.ac(q,"scroll",H.n(new V.iA(o),{func:1,ret:-1,args:[r]}),!1,r)},
dS:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.m(a,"$ib",[P.h],"$ab")
this.i2()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.eJ(C.a.j4(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.u)(s),++q){p=s[q]
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
if(H.q2(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.e(m,1)
l.href=H.M(m[1])
l.textContent=H.M(m[0])
t.appendChild(l)}else{k=P.fl(C.y,n,C.h,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.i(k)
l.textContent=n
t.appendChild(l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
t.appendChild(o)
break}}this.a.appendChild(t)},
eQ:function(a){var u,t,s,r=new V.fY("dart")
r.br("dart")
u=new V.hi("glsl")
u.br("glsl")
t=new V.hj("html")
t.br("html")
s=C.a.iW(H.d([r,u,t],[V.bE]),new V.iB(a))
if(s!=null)return s
r=new V.id("plain")
r.br("plain")
return r},
dP:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.m(b0,"$ib",[P.h],"$ab")
u=H.d([],[P.l])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.dy(r).a7(r,"+")){C.a.k(b0,s,C.b.af(r,1))
C.a.h(u,1)
t=!0}else if(C.b.a7(r,"-")){C.a.k(b0,s,C.b.af(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.eQ(a8)
q.ez(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.fl(C.y,a7,C.h,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.m3()
i.href="#"+H.i(m)
i.textContent=a7
j.appendChild(i)
k.appendChild(j)
l.appendChild(k)
n.appendChild(l)
if(t)for(h=a9,g=h,s=0;f=q.d,s<f.length;++s){r=f[s]
e=p.createElement("tr")
e.className=a4
d=p.createElement("td")
d.className="codeLineNums codeLineLight"
c=p.createElement("td")
c.className=a5
if(s>=u.length)return H.e(u,s)
b=u[s]
if(b===0){++g;++h
d.textContent=""+g
c.textContent=""+h}else if(b>0){e.className="codeTableRow codeLineLightGreen"
d.className="codeLineNums codeLineGreen codeLineCenter"
c.className="codeLineNums codeLineGreen";++h
d.textContent="+"
c.textContent=""+h}else if(b<0){e.className="codeTableRow codeLineLightRed"
d.className="codeLineNums codeLineRed"
c.className="codeLineNums codeLineRed codeLineCenter";++g
d.textContent=""+g
c.textContent="-"}a=p.createElement("td")
a.className=a6
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.u)(r),++a0)C.a_.it(a,r[a0])
e.appendChild(d)
e.appendChild(c)
e.appendChild(a)
n.appendChild(e)}else for(f=q.d,a1=f.length,a2=a9,a0=0;a0<f.length;f.length===a1||(0,H.u)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className=a4
d=p.createElement("td")
d.className=a5;++a2
d.textContent=""+a2
c=p.createElement("td")
c.className=a6
for(a3=C.a.gU(r);a3.C();)c.appendChild(a3.gJ(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
io:function(a){var u,t,s,r,q,p,o,n="auto"
H.m(a,"$ib",[P.h],"$ab")
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
s=H.f(r.insertCell(-1),"$ibh").style
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
o=H.f(r.insertCell(-1),"$ibh")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
o.appendChild(p)}},
i2:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.iY()
u.c=u.l(0,q)
t=u.l(0,q).m(0,p)
s=V.x(new H.t("*"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,p).m(0,p)
s=new V.ay()
r=[V.aD]
s.sac(H.d([],r))
C.a.h(t.a,s)
t=V.x(new H.t("*"))
C.a.h(s.a,t)
t=u.l(0,p).m(0,"BoldEnd")
s=V.x(new H.t("*"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,q).m(0,o)
s=V.x(new H.t("_"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,o).m(0,o)
s=new V.ay()
s.sac(H.d([],r))
C.a.h(t.a,s)
t=V.x(new H.t("_"))
C.a.h(s.a,t)
t=u.l(0,o).m(0,n)
s=V.x(new H.t("_"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,q).m(0,m)
s=V.x(new H.t("`"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,m).m(0,m)
s=new V.ay()
s.sac(H.d([],r))
C.a.h(t.a,s)
t=V.x(new H.t("`"))
C.a.h(s.a,t)
t=u.l(0,m).m(0,"CodeEnd")
s=V.x(new H.t("`"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,q).m(0,l)
s=V.x(new H.t("["))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,l).m(0,k)
s=V.x(new H.t("|"))
C.a.h(t.a,s)
s=u.l(0,l).m(0,j)
t=V.x(new H.t("]"))
C.a.h(s.a,t)
s.c=!0
s=u.l(0,l).m(0,l)
t=new V.ay()
t.sac(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.t("|]"))
C.a.h(t.a,s)
s=u.l(0,k).m(0,j)
t=V.x(new H.t("]"))
C.a.h(s.a,t)
s.c=!0
s=u.l(0,k).m(0,k)
t=new V.ay()
t.sac(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.t("|]"))
C.a.h(t.a,s)
C.a.h(u.l(0,q).m(0,i).a,new V.bo())
s=u.l(0,i).m(0,i)
t=new V.ay()
t.sac(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.t("*_`["))
C.a.h(t.a,s)
s=u.l(0,"BoldEnd")
s.d=s.a.P(p)
s=u.l(0,n)
s.d=s.a.P(o)
s=u.l(0,"CodeEnd")
s.d=s.a.P(m)
s=u.l(0,j)
s.d=s.a.P("Link")
s=u.l(0,i)
s.d=s.a.P(i)
this.b=u}}
V.iA.prototype={
$1:function(a){P.mx(C.o,new V.iz(this.a))},
$S:12}
V.iz.prototype={
$0:function(){var u=C.e.at(document.documentElement.scrollTop),t=this.a.style,s=H.i(-0.01*u)+"px"
t.top=s},
$S:0}
V.iB.prototype={
$1:function(a){return H.f(a,"$ibE").a===this.a},
$S:56}
T.kY.prototype={
$0:function(){this.a.sa9(0,F.lR(1,null,null,1))},
$S:0}
T.kZ.prototype={
$0:function(){this.a.sa9(0,F.lR(8,null,null,8))},
$S:0}
T.l_.prototype={
$0:function(){this.a.sa9(0,F.n4(!0,40,1))},
$S:0}
T.l0.prototype={
$0:function(){this.a.sa9(0,F.n4(!1,40,0))},
$S:0}
T.l1.prototype={
$0:function(){this.a.sa9(0,F.pV(10,20))},
$S:0}
T.l2.prototype={
$0:function(){var u=F.eg(),t=Math.sqrt(5)/2+0.5,s=F.au(u,new V.D(-1,t,0)),r=F.au(u,new V.D(1,t,0)),q=-t,p=F.au(u,new V.D(-1,q,0)),o=F.au(u,new V.D(1,q,0)),n=F.au(u,new V.D(0,-1,q)),m=F.au(u,new V.D(0,1,q)),l=F.au(u,new V.D(0,-1,t)),k=F.au(u,new V.D(0,1,t)),j=F.au(u,new V.D(t,0,1)),i=F.au(u,new V.D(t,0,-1)),h=F.au(u,new V.D(q,0,1)),g=F.au(u,new V.D(q,0,-1))
F.a4(u,s,g,m,2)
F.a4(u,s,m,r,2)
F.a4(u,s,r,k,2)
F.a4(u,s,k,h,2)
F.a4(u,s,h,g,2)
F.a4(u,r,m,i,2)
F.a4(u,m,g,n,2)
F.a4(u,g,h,p,2)
F.a4(u,h,k,l,2)
F.a4(u,k,r,j,2)
F.a4(u,o,i,n,2)
F.a4(u,o,n,p,2)
F.a4(u,o,p,l,2)
F.a4(u,o,l,j,2)
F.a4(u,o,j,i,2)
F.a4(u,n,i,m,2)
F.a4(u,p,n,g,2)
F.a4(u,l,p,h,2)
F.a4(u,j,l,k,2)
F.a4(u,i,j,r,2)
u.es(new F.de(),new F.jx())
this.a.sa9(0,u)},
$S:0}
T.l3.prototype={
$0:function(){this.a.sa9(0,F.nj(6,6))},
$S:0}
T.l4.prototype={
$0:function(){this.a.sa9(0,F.q5())},
$S:0}
T.l5.prototype={
$0:function(){this.a.sa9(0,F.pU())},
$S:0}
T.l6.prototype={
$1:function(a){var u,t,s,r
H.f(a,"$iB")
u=this.a
t=this.b
s=t.a
r=[P.h]
u.dP("Vertex Shader","glsl",0,H.d((s==null?null:s.c).split("\n"),r))
t=t.a
u.dP("Fragment Shader","glsl",0,H.d((t==null?null:t.d).split("\n"),r))},
$S:9};(function aliases(){var u=J.a.prototype
u.eW=u.i
u=J.dV.prototype
u.eY=u.i
u=P.j.prototype
u.eX=u.bQ
u=W.U.prototype
u.bT=u.an
u=W.f3.prototype
u.f_=u.aA
u=O.cP.prototype
u.d3=u.aF
u=O.bd.prototype
u.d4=u.aF
u=V.e0.prototype
u.eZ=u.aK
u.d2=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"pz","oI",14)
u(P,"pA","oJ",14)
u(P,"pB","oK",14)
t(P,"n3","px",3)
s(W,"pN",4,null,["$4"],["oM"],30,0)
s(W,"pO",4,null,["$4"],["oN"],30,0)
var m
r(m=E.as.prototype,"gex",0,0,null,["$1","$0"],["ey","jd"],1,0)
r(m,"gev",0,0,null,["$1","$0"],["ew","ja"],1,0)
q(m,"gj8","j9",6)
q(m,"gjb","jc",6)
r(m=E.eo.prototype,"gd7",0,0,null,["$1","$0"],["d9","d8"],1,0)
p(m,"gjr","eE",3)
o(m=X.ev.prototype,"ghc","hd",16)
o(m,"gfZ","h_",16)
o(m,"gh6","h7",4)
o(m,"ghg","hh",34)
o(m,"ghe","hf",34)
o(m,"ghk","hl",4)
o(m,"gho","hp",4)
o(m,"gha","hb",4)
o(m,"ghm","hn",4)
o(m,"gh8","h9",4)
o(m,"ghq","hr",36)
o(m,"ghs","ht",16)
o(m,"ghI","hJ",15)
o(m,"ghE","hF",15)
o(m,"ghG","hH",15)
r(D.bG.prototype,"gf7",0,0,null,["$1","$0"],["aD","f8"],1,0)
r(m=D.dX.prototype,"gdz",0,0,null,["$1","$0"],["dA","hi"],1,0)
o(m,"ghu","hv",49)
q(m,"gfT","fU",29)
q(m,"ghy","hz",29)
n(V.Z.prototype,"gn","bj",13)
n(V.D.prototype,"gn","bj",13)
n(V.bu.prototype,"gn","bj",13)
r(m=U.cK.prototype,"gaS",0,0,null,["$1","$0"],["S","ab"],1,0)
q(m,"gfR","fS",24)
q(m,"ghw","hx",24)
r(m=U.ew.prototype,"gaS",0,0,null,["$1","$0"],["S","ab"],1,0)
o(m,"gc3","c4",2)
o(m,"gc5","c6",2)
o(m,"gc7","c8",2)
r(m=U.ex.prototype,"gaS",0,0,null,["$1","$0"],["S","ab"],1,0)
o(m,"gc3","c4",2)
o(m,"gc5","c6",2)
o(m,"gc7","c8",2)
o(m,"gfK","fL",2)
o(m,"gfM","fN",2)
o(m,"gii","ij",2)
o(m,"gig","ih",2)
o(m,"gic","ie",2)
o(U.ey.prototype,"gfP","fQ",2)
r(m=M.dJ.prototype,"ga1",0,0,null,["$1","$0"],["a2","b7"],1,0)
q(m,"ghA","hB",23)
q(m,"ghC","hD",23)
r(M.dL.prototype,"ga1",0,0,null,["$1","$0"],["a2","b7"],1,0)
r(m=M.dP.prototype,"ga1",0,0,null,["$1","$0"],["a2","b7"],1,0)
q(m,"gh2","h3",6)
q(m,"gh4","h5",6)
r(m=O.e1.prototype,"gaT",0,0,null,["$1","$0"],["Y","b8"],1,0)
r(m,"ghW",0,0,null,["$1","$0"],["dF","hX"],1,0)
q(m,"gfV","fW",32)
q(m,"gfX","fY",32)
r(O.cP.prototype,"gaT",0,0,null,["$1","$0"],["Y","b8"],1,0)
r(O.eh.prototype,"gaT",0,0,null,["$1","$0"],["Y","b8"],1,0)
r(X.e9.prototype,"gh0",0,0,null,["$1","$0"],["ay","h1"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.W,null)
s(P.W,[H.ls,J.a,J.aw,P.eR,P.j,H.cO,P.b9,H.c3,H.dc,H.fR,H.j2,P.bI,H.cD,H.f8,P.ag,H.hw,H.hy,H.hr,P.fe,P.bm,P.aP,P.eB,P.iJ,P.d3,P.iK,P.bi,P.ar,P.kx,P.kb,P.cj,P.eQ,P.z,P.kp,P.hE,P.c1,P.hm,P.kv,P.ku,P.Q,P.aC,P.ad,P.bH,P.ib,P.el,P.eJ,P.hg,P.bJ,P.b,P.C,P.N,P.az,P.h,P.a8,P.ck,P.jh,P.ke,W.fU,W.bU,W.I,W.e7,W.f3,W.kk,W.dR,W.aF,W.ka,W.fm,P.kg,P.fj,P.k5,P.R,O.a5,O.cQ,E.fL,E.as,E.il,E.eo,Z.ez,Z.eA,Z.cB,Z.bK,Z.bv,D.fO,D.c2,D.B,X.dI,X.dW,X.ht,X.hB,X.aE,X.i_,X.iZ,X.ev,D.bG,D.af,D.ea,D.ek,V.a9,V.an,V.h7,V.e3,V.ax,V.a1,V.X,V.aK,V.ed,V.Z,V.D,V.bu,U.ew,U.ex,U.ey,M.dL,M.dP,M.aG,A.dF,A.fE,A.ao,A.aS,A.aW,A.b_,A.hK,A.cd,A.ce,A.cg,A.er,A.jb,F.aa,F.ha,F.bs,F.hv,F.bQ,F.ef,F.iv,F.iw,F.ix,F.al,F.jt,F.ju,F.jy,F.jz,F.jA,F.jB,O.bS,O.cP,O.hL,T.iT,V.bo,V.aD,V.e0,V.ik,V.iu,V.d1,V.ep,V.d8,V.iX,X.c_,X.d5,X.hn,X.e9,V.bE,V.ii,V.iy])
s(J.a,[J.hq,J.dU,J.dV,J.ba,J.cN,J.bN,H.cT,H.bP,W.k,W.fB,W.bZ,W.cC,W.b7,W.b8,W.Y,W.eD,W.fZ,W.h_,W.eF,W.dO,W.eH,W.h1,W.o,W.eK,W.aT,W.hk,W.eM,W.br,W.dZ,W.hU,W.eS,W.eT,W.aU,W.eU,W.eX,W.aV,W.f0,W.f2,W.aY,W.f4,W.aZ,W.f9,W.aL,W.fc,W.iW,W.b1,W.ff,W.j0,W.jm,W.fn,W.fp,W.fr,W.ft,W.fv,P.bc,P.eO,P.bf,P.eZ,P.ih,P.fa,P.bj,P.fh,P.fF,P.eC,P.dG,P.eb,P.cb,P.ee,P.en,P.es,P.f6])
s(J.dV,[J.ic,J.ch,J.bO])
t(J.lr,J.ba)
s(J.cN,[J.dT,J.dS])
t(P.hA,P.eR)
s(P.hA,[H.et,W.jM,W.at,P.hc])
t(H.t,H.et)
s(P.j,[H.h4,H.hF,H.df])
s(H.h4,[H.c5,H.hx])
s(P.b9,[H.hG,H.jF])
t(H.hH,H.c5)
t(H.fS,H.fR)
s(P.bI,[H.i8,H.hs,H.jf,H.j4,H.fN,H.is,P.fD,P.e8,P.aR,P.jg,P.jd,P.d2,P.fQ,P.fX])
s(H.cD,[H.lf,H.iQ,H.kS,H.kT,H.kU,P.jI,P.jH,P.jJ,P.jK,P.ko,P.kn,P.jT,P.jX,P.jU,P.jV,P.jW,P.k_,P.k0,P.jZ,P.jY,P.iL,P.iM,P.kH,P.k8,P.k7,P.k9,P.hz,P.hD,P.h2,P.h3,P.jl,P.ji,P.jj,P.jk,P.kq,P.kr,P.kt,P.ks,P.kB,P.kA,P.kC,P.kD,W.h5,W.hW,W.hY,W.ir,W.iI,W.jS,W.i6,W.i5,W.kc,W.kd,W.km,W.kw,P.ki,P.kJ,P.hd,P.he,P.fH,E.im,E.io,E.ip,E.iV,D.h8,D.h9,F.ky,F.kK,F.kM,F.kN,F.kO,F.kX,F.la,F.lb,F.le,F.kW,F.kL,F.jD,F.jC,F.jv,F.jw,O.hO,O.hP,O.hQ,O.hR,O.hS,O.hT,T.iU,V.l9,V.ij,V.iA,V.iz,V.iB,T.kY,T.kZ,T.l_,T.l0,T.l1,T.l2,T.l3,T.l4,T.l5,T.l6])
s(H.iQ,[H.iG,H.cz])
t(H.jG,P.fD)
t(P.hC,P.ag)
s(P.hC,[H.a6,W.jL])
t(H.e4,H.bP)
s(H.e4,[H.dk,H.dm])
t(H.dl,H.dk)
t(H.cU,H.dl)
t(H.dn,H.dm)
t(H.e5,H.dn)
s(H.e5,[H.i0,H.i1,H.i2,H.i3,H.i4,H.e6,H.cV])
t(P.k6,P.kx)
t(P.k4,P.kb)
t(P.fk,P.hE)
t(P.eu,P.fk)
s(P.c1,[P.fJ,P.h6])
t(P.bF,P.iK)
s(P.bF,[P.fK,P.hl,P.jp,P.jo])
t(P.jn,P.h6)
s(P.ad,[P.A,P.l])
s(P.aR,[P.ca,P.ho])
t(P.jO,P.ck)
s(W.k,[W.H,W.hb,W.cR,W.aX,W.dp,W.b0,W.aM,W.dr,W.jE,W.dg,P.fI,P.bY])
s(W.H,[W.U,W.bD,W.dh])
s(W.U,[W.y,P.p])
s(W.y,[W.dD,W.fC,W.cy,W.bC,W.c0,W.aI,W.hf,W.cL,W.cM,W.it,W.bh,W.em,W.iO,W.iP,W.d6])
s(W.b7,[W.cE,W.fV,W.fW])
t(W.fT,W.b8)
t(W.cF,W.eD)
t(W.eG,W.eF)
t(W.dN,W.eG)
t(W.eI,W.eH)
t(W.h0,W.eI)
t(W.aJ,W.bZ)
t(W.eL,W.eK)
t(W.cI,W.eL)
t(W.eN,W.eM)
t(W.c4,W.eN)
t(W.bT,W.o)
s(W.bT,[W.bb,W.ah,W.b2])
t(W.hV,W.eS)
t(W.hX,W.eT)
t(W.eV,W.eU)
t(W.hZ,W.eV)
t(W.eY,W.eX)
t(W.cW,W.eY)
t(W.f1,W.f0)
t(W.ie,W.f1)
t(W.iq,W.f2)
t(W.dq,W.dp)
t(W.iD,W.dq)
t(W.f5,W.f4)
t(W.iE,W.f5)
t(W.iH,W.f9)
t(W.fd,W.fc)
t(W.iR,W.fd)
t(W.ds,W.dr)
t(W.iS,W.ds)
t(W.fg,W.ff)
t(W.j_,W.fg)
t(W.bl,W.ah)
t(W.fo,W.fn)
t(W.jN,W.fo)
t(W.eE,W.dO)
t(W.fq,W.fp)
t(W.k1,W.fq)
t(W.fs,W.fr)
t(W.eW,W.fs)
t(W.fu,W.ft)
t(W.kf,W.fu)
t(W.fw,W.fv)
t(W.kj,W.fw)
t(W.jP,W.jL)
t(W.jQ,P.iJ)
t(W.lD,W.jQ)
t(W.jR,P.d3)
t(W.kl,W.f3)
t(P.kh,P.kg)
t(P.ap,P.k5)
t(P.eP,P.eO)
t(P.hu,P.eP)
t(P.f_,P.eZ)
t(P.i9,P.f_)
t(P.d_,P.p)
t(P.fb,P.fa)
t(P.iN,P.fb)
t(P.fi,P.fh)
t(P.j1,P.fi)
t(P.fG,P.eC)
t(P.ia,P.bY)
t(P.f7,P.f6)
t(P.iF,P.f7)
s(E.fL,[Z.dH,A.d0,T.d7])
s(D.B,[D.bL,D.bM,D.O,X.ig])
s(X.ig,[X.e_,X.bt,X.cS,X.eq])
s(O.a5,[D.dX,U.cK,M.dJ])
s(D.fO,[U.fP,U.ai])
t(U.dK,U.ai)
s(A.d0,[A.e2,A.ei])
s(A.er,[A.aN,A.j8,A.j9,A.ja,A.j6,A.ab,A.j7,A.a_,A.da,A.jc,A.db,A.aA,A.cf,A.ak])
t(F.iC,F.ha)
t(F.j5,F.hv)
t(F.de,F.jz)
s(F.jA,[F.jx,F.i7])
s(O.bS,[O.e1,O.eh])
s(O.cP,[O.hI,O.hJ,O.bd])
s(O.bd,[O.hM,O.hN])
t(T.cc,T.d7)
s(V.e0,[V.ay,V.d9])
t(X.hh,X.d5)
s(V.bE,[V.fY,V.hi,V.hj,V.id])
u(H.et,H.dc)
u(H.dk,P.z)
u(H.dl,H.c3)
u(H.dm,P.z)
u(H.dn,H.c3)
u(P.eR,P.z)
u(P.fk,P.kp)
u(W.eD,W.fU)
u(W.eF,P.z)
u(W.eG,W.I)
u(W.eH,P.z)
u(W.eI,W.I)
u(W.eK,P.z)
u(W.eL,W.I)
u(W.eM,P.z)
u(W.eN,W.I)
u(W.eS,P.ag)
u(W.eT,P.ag)
u(W.eU,P.z)
u(W.eV,W.I)
u(W.eX,P.z)
u(W.eY,W.I)
u(W.f0,P.z)
u(W.f1,W.I)
u(W.f2,P.ag)
u(W.dp,P.z)
u(W.dq,W.I)
u(W.f4,P.z)
u(W.f5,W.I)
u(W.f9,P.ag)
u(W.fc,P.z)
u(W.fd,W.I)
u(W.dr,P.z)
u(W.ds,W.I)
u(W.ff,P.z)
u(W.fg,W.I)
u(W.fn,P.z)
u(W.fo,W.I)
u(W.fp,P.z)
u(W.fq,W.I)
u(W.fr,P.z)
u(W.fs,W.I)
u(W.ft,P.z)
u(W.fu,W.I)
u(W.fv,P.z)
u(W.fw,W.I)
u(P.eO,P.z)
u(P.eP,W.I)
u(P.eZ,P.z)
u(P.f_,W.I)
u(P.fa,P.z)
u(P.fb,W.I)
u(P.fh,P.z)
u(P.fi,W.I)
u(P.eC,P.ag)
u(P.f6,P.z)
u(P.f7,W.I)})()
var v={mangledGlobalNames:{l:"int",A:"double",ad:"num",h:"String",Q:"bool",N:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.N},{func:1,ret:-1,opt:[D.B]},{func:1,ret:-1,args:[D.B]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ah]},{func:1,ret:P.N,args:[F.al,P.A,P.A]},{func:1,ret:-1,args:[P.l,[P.j,E.as]]},{func:1,ret:P.N,args:[,,]},{func:1,ret:-1,args:[P.h,,]},{func:1,ret:P.N,args:[D.B]},{func:1,ret:P.N,args:[F.aa]},{func:1,ret:-1,args:[P.l,P.l]},{func:1,ret:P.N,args:[W.o]},{func:1,ret:P.A},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.b2]},{func:1,ret:-1,args:[W.o]},{func:1,ret:P.h,args:[P.l]},{func:1,ret:V.X,args:[P.A]},{func:1,ret:P.A,args:[P.A]},{func:1,ret:P.A,args:[P.A,P.A]},{func:1,ret:P.h,args:[P.h]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,ret:-1,args:[P.l,[P.j,M.aG]]},{func:1,ret:-1,args:[P.l,[P.j,U.ai]]},{func:1,args:[,]},{func:1,ret:P.Q,args:[W.H]},{func:1,ret:P.Q,args:[W.aF]},{func:1,ret:P.Q,args:[P.h]},{func:1,ret:-1,args:[P.l,[P.j,D.af]]},{func:1,ret:P.Q,args:[W.U,P.h,P.h,W.bU]},{func:1,ret:P.N,args:[,]},{func:1,ret:-1,args:[P.l,[P.j,V.ax]]},{func:1,ret:P.N,args:[{func:1,ret:-1,args:[D.B]}]},{func:1,ret:-1,args:[W.bb]},{func:1,ret:P.N,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.bl]},{func:1,ret:P.N,args:[P.ad]},{func:1,ret:W.U,args:[W.H]},{func:1,ret:-1,args:[W.H,W.H]},{func:1,args:[W.o]},{func:1,ret:P.R,args:[P.l]},{func:1,args:[,P.h]},{func:1,ret:P.N,args:[P.h,,]},{func:1,args:[P.h]},{func:1,ret:P.N,args:[P.h]},{func:1,ret:P.l,args:[P.l,P.l]},{func:1,ret:-1,args:[P.h],opt:[,]},{func:1,ret:-1,args:[P.h,P.l]},{func:1,ret:P.Q,args:[[P.j,D.af]]},{func:1,ret:[P.C,P.h,P.h],args:[[P.C,P.h,P.h],P.h]},{func:1,ret:P.l,args:[A.aS,A.aS]},{func:1,ret:P.l,args:[A.aW,A.aW]},{func:1,ret:P.l,args:[A.b_,A.b_]},{func:1,ret:[P.aP,,],args:[,]},{func:1,ret:P.N,args:[P.bi]},{func:1,ret:P.Q,args:[V.bE]},{func:1,ret:P.N,args:[,],opt:[P.az]},{func:1,ret:P.R,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.t=W.bC.prototype
C.j=W.c0.prototype
C.O=W.aI.prototype
C.R=J.a.prototype
C.a=J.ba.prototype
C.S=J.dS.prototype
C.d=J.dT.prototype
C.k=J.dU.prototype
C.e=J.cN.prototype
C.b=J.bN.prototype
C.T=J.bO.prototype
C.Z=W.cW.prototype
C.B=J.ic.prototype
C.c=P.cb.prototype
C.a_=W.bh.prototype
C.C=W.em.prototype
C.r=J.ch.prototype
C.D=W.bl.prototype
C.E=W.dg.prototype
C.a0=new P.fK()
C.F=new P.fJ()
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

C.M=new P.ib()
C.h=new P.jn()
C.N=new P.jp()
C.f=new P.k6()
C.o=new P.bH(0)
C.P=new P.bH(5e6)
C.Q=new P.hm("element",!1,!1,!1)
C.w=H.d(u([127,2047,65535,1114111]),[P.l])
C.l=H.d(u([0,0,32776,33792,1,10240,0,0]),[P.l])
C.U=H.d(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.m=H.d(u([0,0,65490,45055,65535,34815,65534,18431]),[P.l])
C.n=H.d(u([0,0,26624,1023,65534,2047,65534,2047]),[P.l])
C.V=H.d(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.x=H.d(u([]),[P.h])
C.W=H.d(u([0,0,32722,12287,65534,34815,65534,18431]),[P.l])
C.y=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.l])
C.i=H.d(u([0,0,24576,1023,65534,34815,65534,18431]),[P.l])
C.z=H.d(u([0,0,32754,11263,65534,34815,65534,18431]),[P.l])
C.X=H.d(u([0,0,32722,12287,65535,34815,65534,18431]),[P.l])
C.A=H.d(u([0,0,65490,12287,65535,34815,65534,18431]),[P.l])
C.p=H.d(u(["bind","if","ref","repeat","syntax"]),[P.h])
C.q=H.d(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])
C.Y=new H.fS(0,{},C.x,[P.h,P.h])})();(function staticFields(){$.b6=0
$.cA=null
$.m5=null
$.lJ=!1
$.na=null
$.n1=null
$.nh=null
$.kP=null
$.kV=null
$.lT=null
$.cn=null
$.dv=null
$.dw=null
$.lK=!1
$.a3=C.f
$.aB=[]
$.bq=null
$.ln=null
$.mb=null
$.ma=null
$.dj=P.lu(P.h,P.bJ)
$.mi=null
$.mn=null
$.cX=null
$.ms=null
$.mE=null
$.mH=null
$.mG=null
$.jq=null
$.jr=null
$.js=null
$.mF=null
$.mJ=null
$.mm=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"qc","nm",function(){return H.n9("_$dart_dartClosure")})
u($,"qd","lY",function(){return H.n9("_$dart_js")})
u($,"qi","nn",function(){return H.bk(H.j3({
toString:function(){return"$receiver$"}}))})
u($,"qj","no",function(){return H.bk(H.j3({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"qk","np",function(){return H.bk(H.j3(null))})
u($,"ql","nq",function(){return H.bk(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"qo","nt",function(){return H.bk(H.j3(void 0))})
u($,"qp","nu",function(){return H.bk(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"qn","ns",function(){return H.bk(H.mz(null))})
u($,"qm","nr",function(){return H.bk(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"qr","nw",function(){return H.bk(H.mz(void 0))})
u($,"qq","nv",function(){return H.bk(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"qI","lZ",function(){return P.oH()})
u($,"qu","nx",function(){return P.oD()})
u($,"qJ","nB",function(){return H.ob(H.cm(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.l])))})
u($,"qL","nD",function(){return P.op("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"qM","nE",function(){return P.p6()})
u($,"qK","nC",function(){return P.mf(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)})
u($,"qB","nA",function(){return Z.aO(0)})
u($,"qv","ny",function(){return Z.aO(511)})
u($,"qD","b5",function(){return Z.aO(1)})
u($,"qC","bz",function(){return Z.aO(2)})
u($,"qx","by",function(){return Z.aO(4)})
u($,"qE","bX",function(){return Z.aO(8)})
u($,"qF","bA",function(){return Z.aO(16)})
u($,"qy","dz",function(){return Z.aO(32)})
u($,"qz","dA",function(){return Z.aO(64)})
u($,"qA","nz",function(){return Z.aO(96)})
u($,"qG","cx",function(){return Z.aO(128)})
u($,"qw","bx",function(){return Z.aO(256)})
u($,"qb","nl",function(){return new V.h7(1e-9)})
u($,"qa","P",function(){return $.nl()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cT,DataView:H.bP,ArrayBufferView:H.bP,Float32Array:H.cU,Float64Array:H.cU,Int16Array:H.i0,Int32Array:H.i1,Int8Array:H.i2,Uint16Array:H.i3,Uint32Array:H.i4,Uint8ClampedArray:H.e6,CanvasPixelArray:H.e6,Uint8Array:H.cV,HTMLAudioElement:W.y,HTMLBRElement:W.y,HTMLButtonElement:W.y,HTMLContentElement:W.y,HTMLDListElement:W.y,HTMLDataElement:W.y,HTMLDataListElement:W.y,HTMLDetailsElement:W.y,HTMLDialogElement:W.y,HTMLEmbedElement:W.y,HTMLFieldSetElement:W.y,HTMLHRElement:W.y,HTMLHeadElement:W.y,HTMLHeadingElement:W.y,HTMLHtmlElement:W.y,HTMLIFrameElement:W.y,HTMLLIElement:W.y,HTMLLabelElement:W.y,HTMLLegendElement:W.y,HTMLLinkElement:W.y,HTMLMapElement:W.y,HTMLMediaElement:W.y,HTMLMenuElement:W.y,HTMLMetaElement:W.y,HTMLMeterElement:W.y,HTMLModElement:W.y,HTMLOListElement:W.y,HTMLObjectElement:W.y,HTMLOptGroupElement:W.y,HTMLOptionElement:W.y,HTMLOutputElement:W.y,HTMLParagraphElement:W.y,HTMLParamElement:W.y,HTMLPictureElement:W.y,HTMLPreElement:W.y,HTMLProgressElement:W.y,HTMLQuoteElement:W.y,HTMLScriptElement:W.y,HTMLShadowElement:W.y,HTMLSlotElement:W.y,HTMLSourceElement:W.y,HTMLSpanElement:W.y,HTMLStyleElement:W.y,HTMLTableCaptionElement:W.y,HTMLTableColElement:W.y,HTMLTextAreaElement:W.y,HTMLTimeElement:W.y,HTMLTitleElement:W.y,HTMLTrackElement:W.y,HTMLUListElement:W.y,HTMLUnknownElement:W.y,HTMLVideoElement:W.y,HTMLDirectoryElement:W.y,HTMLFontElement:W.y,HTMLFrameElement:W.y,HTMLFrameSetElement:W.y,HTMLMarqueeElement:W.y,HTMLElement:W.y,AccessibleNodeList:W.fB,HTMLAnchorElement:W.dD,HTMLAreaElement:W.fC,HTMLBaseElement:W.cy,Blob:W.bZ,HTMLBodyElement:W.bC,HTMLCanvasElement:W.c0,CanvasRenderingContext2D:W.cC,CDATASection:W.bD,CharacterData:W.bD,Comment:W.bD,ProcessingInstruction:W.bD,Text:W.bD,CSSNumericValue:W.cE,CSSUnitValue:W.cE,CSSPerspective:W.fT,CSSCharsetRule:W.Y,CSSConditionRule:W.Y,CSSFontFaceRule:W.Y,CSSGroupingRule:W.Y,CSSImportRule:W.Y,CSSKeyframeRule:W.Y,MozCSSKeyframeRule:W.Y,WebKitCSSKeyframeRule:W.Y,CSSKeyframesRule:W.Y,MozCSSKeyframesRule:W.Y,WebKitCSSKeyframesRule:W.Y,CSSMediaRule:W.Y,CSSNamespaceRule:W.Y,CSSPageRule:W.Y,CSSRule:W.Y,CSSStyleRule:W.Y,CSSSupportsRule:W.Y,CSSViewportRule:W.Y,CSSStyleDeclaration:W.cF,MSStyleCSSProperties:W.cF,CSS2Properties:W.cF,CSSImageValue:W.b7,CSSKeywordValue:W.b7,CSSPositionValue:W.b7,CSSResourceValue:W.b7,CSSURLImageValue:W.b7,CSSStyleValue:W.b7,CSSMatrixComponent:W.b8,CSSRotation:W.b8,CSSScale:W.b8,CSSSkew:W.b8,CSSTranslation:W.b8,CSSTransformComponent:W.b8,CSSTransformValue:W.fV,CSSUnparsedValue:W.fW,DataTransferItemList:W.fZ,HTMLDivElement:W.aI,DOMException:W.h_,ClientRectList:W.dN,DOMRectList:W.dN,DOMRectReadOnly:W.dO,DOMStringList:W.h0,DOMTokenList:W.h1,Element:W.U,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,ProgressEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,ResourceProgressEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.k,Accelerometer:W.k,AccessibleNode:W.k,AmbientLightSensor:W.k,Animation:W.k,ApplicationCache:W.k,DOMApplicationCache:W.k,OfflineResourceList:W.k,BackgroundFetchRegistration:W.k,BatteryManager:W.k,BroadcastChannel:W.k,CanvasCaptureMediaStreamTrack:W.k,DedicatedWorkerGlobalScope:W.k,EventSource:W.k,FileReader:W.k,FontFaceSet:W.k,Gyroscope:W.k,XMLHttpRequest:W.k,XMLHttpRequestEventTarget:W.k,XMLHttpRequestUpload:W.k,LinearAccelerationSensor:W.k,Magnetometer:W.k,MediaDevices:W.k,MediaKeySession:W.k,MediaQueryList:W.k,MediaRecorder:W.k,MediaSource:W.k,MediaStream:W.k,MediaStreamTrack:W.k,MIDIAccess:W.k,MIDIInput:W.k,MIDIOutput:W.k,MIDIPort:W.k,NetworkInformation:W.k,Notification:W.k,OffscreenCanvas:W.k,OrientationSensor:W.k,PaymentRequest:W.k,Performance:W.k,PermissionStatus:W.k,PresentationAvailability:W.k,PresentationConnection:W.k,PresentationConnectionList:W.k,PresentationRequest:W.k,RelativeOrientationSensor:W.k,RemotePlayback:W.k,RTCDataChannel:W.k,DataChannel:W.k,RTCDTMFSender:W.k,RTCPeerConnection:W.k,webkitRTCPeerConnection:W.k,mozRTCPeerConnection:W.k,ScreenOrientation:W.k,Sensor:W.k,ServiceWorker:W.k,ServiceWorkerContainer:W.k,ServiceWorkerGlobalScope:W.k,ServiceWorkerRegistration:W.k,SharedWorker:W.k,SharedWorkerGlobalScope:W.k,SpeechRecognition:W.k,SpeechSynthesis:W.k,SpeechSynthesisUtterance:W.k,VR:W.k,VRDevice:W.k,VRDisplay:W.k,VRSession:W.k,VisualViewport:W.k,WebSocket:W.k,Worker:W.k,WorkerGlobalScope:W.k,WorkerPerformance:W.k,BluetoothDevice:W.k,BluetoothRemoteGATTCharacteristic:W.k,Clipboard:W.k,MojoInterfaceInterceptor:W.k,USB:W.k,IDBDatabase:W.k,IDBOpenDBRequest:W.k,IDBVersionChangeRequest:W.k,IDBRequest:W.k,IDBTransaction:W.k,AnalyserNode:W.k,RealtimeAnalyserNode:W.k,AudioBufferSourceNode:W.k,AudioDestinationNode:W.k,AudioNode:W.k,AudioScheduledSourceNode:W.k,AudioWorkletNode:W.k,BiquadFilterNode:W.k,ChannelMergerNode:W.k,AudioChannelMerger:W.k,ChannelSplitterNode:W.k,AudioChannelSplitter:W.k,ConstantSourceNode:W.k,ConvolverNode:W.k,DelayNode:W.k,DynamicsCompressorNode:W.k,GainNode:W.k,AudioGainNode:W.k,IIRFilterNode:W.k,MediaElementAudioSourceNode:W.k,MediaStreamAudioDestinationNode:W.k,MediaStreamAudioSourceNode:W.k,OscillatorNode:W.k,Oscillator:W.k,PannerNode:W.k,AudioPannerNode:W.k,webkitAudioPannerNode:W.k,ScriptProcessorNode:W.k,JavaScriptAudioNode:W.k,StereoPannerNode:W.k,WaveShaperNode:W.k,EventTarget:W.k,File:W.aJ,FileList:W.cI,FileWriter:W.hb,HTMLFormElement:W.hf,Gamepad:W.aT,History:W.hk,HTMLCollection:W.c4,HTMLFormControlsCollection:W.c4,HTMLOptionsCollection:W.c4,ImageData:W.br,HTMLImageElement:W.cL,HTMLInputElement:W.cM,KeyboardEvent:W.bb,Location:W.dZ,MediaList:W.hU,MessagePort:W.cR,MIDIInputMap:W.hV,MIDIOutputMap:W.hX,MimeType:W.aU,MimeTypeArray:W.hZ,PointerEvent:W.ah,MouseEvent:W.ah,DragEvent:W.ah,Document:W.H,DocumentFragment:W.H,HTMLDocument:W.H,ShadowRoot:W.H,XMLDocument:W.H,DocumentType:W.H,Node:W.H,NodeList:W.cW,RadioNodeList:W.cW,Plugin:W.aV,PluginArray:W.ie,RTCStatsReport:W.iq,HTMLSelectElement:W.it,SourceBuffer:W.aX,SourceBufferList:W.iD,SpeechGrammar:W.aY,SpeechGrammarList:W.iE,SpeechRecognitionResult:W.aZ,Storage:W.iH,CSSStyleSheet:W.aL,StyleSheet:W.aL,HTMLTableCellElement:W.bh,HTMLTableDataCellElement:W.bh,HTMLTableHeaderCellElement:W.bh,HTMLTableElement:W.em,HTMLTableRowElement:W.iO,HTMLTableSectionElement:W.iP,HTMLTemplateElement:W.d6,TextTrack:W.b0,TextTrackCue:W.aM,VTTCue:W.aM,TextTrackCueList:W.iR,TextTrackList:W.iS,TimeRanges:W.iW,Touch:W.b1,TouchEvent:W.b2,TouchList:W.j_,TrackDefaultList:W.j0,CompositionEvent:W.bT,FocusEvent:W.bT,TextEvent:W.bT,UIEvent:W.bT,URL:W.jm,VideoTrackList:W.jE,WheelEvent:W.bl,Window:W.dg,DOMWindow:W.dg,Attr:W.dh,CSSRuleList:W.jN,ClientRect:W.eE,DOMRect:W.eE,GamepadList:W.k1,NamedNodeMap:W.eW,MozNamedAttrMap:W.eW,SpeechRecognitionResultList:W.kf,StyleSheetList:W.kj,SVGLength:P.bc,SVGLengthList:P.hu,SVGNumber:P.bf,SVGNumberList:P.i9,SVGPointList:P.ih,SVGScriptElement:P.d_,SVGStringList:P.iN,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGElement:P.p,SVGTransform:P.bj,SVGTransformList:P.j1,AudioBuffer:P.fF,AudioParamMap:P.fG,AudioTrackList:P.fI,AudioContext:P.bY,webkitAudioContext:P.bY,BaseAudioContext:P.bY,OfflineAudioContext:P.ia,WebGLBuffer:P.dG,WebGLProgram:P.eb,WebGL2RenderingContext:P.cb,WebGLShader:P.ee,WebGLTexture:P.en,WebGLUniformLocation:P.es,SQLResultSetRowList:P.iF})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.e4.$nativeSuperclassTag="ArrayBufferView"
H.dk.$nativeSuperclassTag="ArrayBufferView"
H.dl.$nativeSuperclassTag="ArrayBufferView"
H.cU.$nativeSuperclassTag="ArrayBufferView"
H.dm.$nativeSuperclassTag="ArrayBufferView"
H.dn.$nativeSuperclassTag="ArrayBufferView"
H.e5.$nativeSuperclassTag="ArrayBufferView"
W.dp.$nativeSuperclassTag="EventTarget"
W.dq.$nativeSuperclassTag="EventTarget"
W.dr.$nativeSuperclassTag="EventTarget"
W.ds.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(T.nd,[])
else T.nd([])})})()
//# sourceMappingURL=test.dart.js.map
