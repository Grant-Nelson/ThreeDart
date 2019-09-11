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
a[c]=function(){a[c]=function(){H.pL(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lx"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lx"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lx(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={l7:function l7(){},
kI:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
nO:function(){return new P.iG("No element")},
ed:function(a,b,c,d,e){if(c-b<=32)H.oh(a,b,c,d,e)
else H.og(a,b,c,d,e)},
oh:function(a,b,c,d,e){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.e(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.e(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.Z()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.e(a,q)
C.a.j(a,s,a[q])
s=q}C.a.j(a,s,t)}},
og:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.d.a7(a4-a3+1,6),d=a3+e,c=a4-e,b=C.d.a7(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
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
if(typeof a1!=="number")return a1.Z()
if(a1>0){p=t
t=u
u=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.Z()
if(a1>0){p=q
q=r
r=p}a1=a5.$2(u,s)
if(typeof a1!=="number")return a1.Z()
if(a1>0){p=s
s=u
u=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.Z()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(u,r)
if(typeof a1!=="number")return a1.Z()
if(a1>0){p=r
r=u
u=p}a1=a5.$2(s,r)
if(typeof a1!=="number")return a1.Z()
if(a1>0){p=r
r=s
s=p}a1=a5.$2(t,q)
if(typeof a1!=="number")return a1.Z()
if(a1>0){p=q
q=t
t=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.Z()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.Z()
if(a1>0){p=q
q=r
r=p}C.a.j(a2,d,u)
C.a.j(a2,b,s)
C.a.j(a2,c,q)
if(a3<0||a3>=a2.length)return H.e(a2,a3)
C.a.j(a2,a,a2[a3])
if(a4<0||a4>=a2.length)return H.e(a2,a4)
C.a.j(a2,a0,a2[a4])
o=a3+1
n=a4-1
if(J.V(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.e(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.B()
if(k<0){if(m!==o){if(o>=a2.length)return H.e(a2,o)
C.a.j(a2,m,a2[o])
C.a.j(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.e(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.Z()
if(k>0){--n
continue}else{j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.e(a2,o)
C.a.j(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.e(a2,n)
C.a.j(a2,o,a2[n])
C.a.j(a2,n,l)
n=j
o=i
break}else{if(n>=a1)return H.e(a2,n)
C.a.j(a2,m,a2[n])
C.a.j(a2,n,l)
n=j
break}}}}h=!0}else{for(m=o;m<=n;++m){if(m>=a2.length)return H.e(a2,m)
l=a2[m]
g=a5.$2(l,t)
if(typeof g!=="number")return g.B()
if(g<0){if(m!==o){if(o>=a2.length)return H.e(a2,o)
C.a.j(a2,m,a2[o])
C.a.j(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.Z()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.e(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.Z()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.e(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.B()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.e(a2,o)
C.a.j(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.e(a2,n)
C.a.j(a2,o,a2[n])
C.a.j(a2,n,l)
o=i}else{if(n>=a1)return H.e(a2,n)
C.a.j(a2,m,a2[n])
C.a.j(a2,n,l)}n=j
break}}}}h=!1}a1=o-1
if(a1>=a2.length)return H.e(a2,a1)
C.a.j(a2,a3,a2[a1])
C.a.j(a2,a1,t)
a1=n+1
if(a1<0||a1>=a2.length)return H.e(a2,a1)
C.a.j(a2,a4,a2[a1])
C.a.j(a2,a1,r)
H.ed(a2,a3,o-2,a5,a6)
H.ed(a2,n+2,a4,a5,a6)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.e(a2,o)
if(!J.V(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.e(a2,n)
if(!J.V(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.e(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.e(a2,o)
C.a.j(a2,m,a2[o])
C.a.j(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.e(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.e(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.B()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.e(a2,o)
C.a.j(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.e(a2,n)
C.a.j(a2,o,a2[n])
C.a.j(a2,n,l)
o=i}else{if(n>=a1)return H.e(a2,n)
C.a.j(a2,m,a2[n])
C.a.j(a2,n,l)}n=j
break}}}H.ed(a2,o,n,a5,a6)}else H.ed(a2,o,n,a5,a6)},
a7:function a7(a){this.a=a},
h6:function h6(){},
dT:function dT(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
hA:function hA(a,b,c){this.a=a
this.b=b
this.$ti=c},
hB:function hB(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
jH:function jH(a,b,c){this.a=a
this.b=b
this.$ti=c},
jI:function jI(a,b,c){this.a=a
this.b=b
this.$ti=c},
ce:function ce(){},
de:function de(){},
en:function en(){},
nI:function(){throw H.f(P.I("Cannot modify unmodifiable Map"))},
cG:function(a){var u,t=H.pM(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
pv:function(a){return v.types[H.ab(a)]},
pA:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.R(a).$iM},
i:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.b7(a)
if(typeof u!=="string")throw H.f(H.aC(a))
return u},
d1:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
mb:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.e(p,3)
u=H.U(p[3])
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.f(P.al(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.b.G(s,q)|32)>t)return}return parseInt(a,b)},
d2:function(a){return H.o_(a)+H.lu(H.c1(a),0,null)},
o_:function(a){var u,t,s,r,q,p,o,n=J.R(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.P||!!n.$ic_){r=C.r(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cG(t.length>1&&C.b.G(t,0)===36?C.b.av(t,1):t)},
o0:function(){if(!!self.location)return self.location.href
return},
ma:function(a){var u,t,s,r,q=J.aL(a)
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
o8:function(a){var u,t,s,r=H.c([],[P.m])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.z)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.aC(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.d.bc(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.f(H.aC(s))}return H.ma(r)},
mc:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.aC(s))
if(s<0)throw H.f(H.aC(s))
if(s>65535)return H.o8(a)}return H.ma(a)},
o9:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
e6:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.bc(u,10))>>>0,56320|u&1023)}}throw H.f(P.al(a,0,1114111,null,null))},
cm:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
o7:function(a){var u=H.cm(a).getFullYear()+0
return u},
o5:function(a){var u=H.cm(a).getMonth()+1
return u},
o1:function(a){var u=H.cm(a).getDate()+0
return u},
o2:function(a){var u=H.cm(a).getHours()+0
return u},
o4:function(a){var u=H.cm(a).getMinutes()+0
return u},
o6:function(a){var u=H.cm(a).getSeconds()+0
return u},
o3:function(a){var u=H.cm(a).getMilliseconds()+0
return u},
d:function(a){throw H.f(H.aC(a))},
e:function(a,b){if(a==null)J.aL(a)
throw H.f(H.bA(a,b))},
bA:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.b8(!0,b,s,null)
u=H.ab(J.aL(a))
if(!(b<0)){if(typeof u!=="number")return H.d(u)
t=b>=u}else t=!0
if(t)return P.W(b,a,s,null,u)
return P.ig(b,s)},
pq:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bV(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bV(a,c,!0,b,"end",u)
return new P.b8(!0,b,"end",null)},
aC:function(a){return new P.b8(!0,a,null,null)},
cz:function(a){if(typeof a!=="number")throw H.f(H.aC(a))
return a},
f:function(a){var u
if(a==null)a=new P.e1()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.n5})
u.name=""}else u.toString=H.n5
return u},
n5:function(){return J.b7(this.dartException)},
A:function(a){throw H.f(a)},
z:function(a){throw H.f(P.ca(a))},
bn:function(a){var u,t,s,r,q,p
a=H.n3(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.k])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.j7(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
j8:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
mk:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
m6:function(a,b){return new H.i1(a,b==null?null:b.method)},
l8:function(a,b){var u=b==null,t=u?null:b.method
return new H.hp(a,t,u?null:b.receiver)},
b3:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.kR(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.bc(t,16)&8191)===10)switch(s){case 438:return f.$1(H.l8(H.i(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.m6(H.i(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.nc()
q=$.nd()
p=$.ne()
o=$.nf()
n=$.ni()
m=$.nj()
l=$.nh()
$.ng()
k=$.nl()
j=$.nk()
i=r.ar(u)
if(i!=null)return f.$1(H.l8(H.U(u),i))
else{i=q.ar(u)
if(i!=null){i.method="call"
return f.$1(H.l8(H.U(u),i))}else{i=p.ar(u)
if(i==null){i=o.ar(u)
if(i==null){i=n.ar(u)
if(i==null){i=m.ar(u)
if(i==null){i=l.ar(u)
if(i==null){i=o.ar(u)
if(i==null){i=k.ar(u)
if(i==null){i=j.ar(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.m6(H.U(u),i))}}return f.$1(new H.jj(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.ef()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.b8(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.ef()
return a},
cD:function(a){var u
if(a==null)return new H.f1(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.f1(a)},
mT:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.j(0,a[u],a[t])}return b},
pz:function(a,b,c,d,e,f){H.h(a,"$il3")
switch(H.ab(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(P.D("Unsupported number of arguments for wrapped closure"))},
cA:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.pz)
a.$identity=u
return u},
nH:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.iI().constructor.prototype):Object.create(new H.cI(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.b9
if(typeof t!=="number")return t.m()
$.b9=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.lT(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.nD(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.lT(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
nD:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.pv,a)
if(typeof a=="function")if(b)return a
else{u=c?H.lS:H.l0
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.f("Error in functionType of tearoff")},
nE:function(a,b,c,d){var u=H.l0
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lT:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nG(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.nE(t,!r,u,b)
if(t===0){r=$.b9
if(typeof r!=="number")return r.m()
$.b9=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cJ
return new Function(r+H.i(q==null?$.cJ=H.fN("self"):q)+";return "+p+"."+H.i(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b9
if(typeof r!=="number")return r.m()
$.b9=r+1
o+=r
r="return function("+o+"){return this."
q=$.cJ
return new Function(r+H.i(q==null?$.cJ=H.fN("self"):q)+"."+H.i(u)+"("+o+");}")()},
nF:function(a,b,c,d){var u=H.l0,t=H.lS
switch(b?-1:a){case 0:throw H.f(H.oe("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
nG:function(a,b){var u,t,s,r,q,p,o,n=$.cJ
if(n==null)n=$.cJ=H.fN("self")
u=$.lR
if(u==null)u=$.lR=H.fN("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.nF(s,!q,t,b)
if(s===1){n="return function(){return this."+H.i(n)+"."+H.i(t)+"(this."+H.i(u)+");"
u=$.b9
if(typeof u!=="number")return u.m()
$.b9=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.i(n)+"."+H.i(t)+"(this."+H.i(u)+", "+o+");"
u=$.b9
if(typeof u!=="number")return u.m()
$.b9=u+1
return new Function(n+u+"}")()},
lx:function(a,b,c,d,e,f,g){return H.nH(a,b,c,d,!!e,!!f,g)},
l0:function(a){return a.a},
lS:function(a){return a.c},
fN:function(a){var u,t,s,r=new H.cI("self","target","receiver","name"),q=J.l5(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
G:function(a){if(a==null)H.pj("boolean expression must not be null")
return a},
U:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.f(H.b1(a,"String"))},
pr:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.b1(a,"double"))},
n_:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.b1(a,"num"))},
mR:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.f(H.b1(a,"bool"))},
ab:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.f(H.b1(a,"int"))},
n1:function(a,b){throw H.f(H.b1(a,H.cG(H.U(b).substring(2))))},
pG:function(a,b){throw H.f(H.nB(a,H.cG(H.U(b).substring(2))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.R(a)[b])return a
H.n1(a,b)},
t:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.R(a)[b]
else u=!0
if(u)return a
H.pG(a,b)},
qV:function(a){if(a==null)return a
if(!!J.R(a).$ib)return a
throw H.f(H.b1(a,"List<dynamic>"))},
mY:function(a,b){var u
if(a==null)return a
u=J.R(a)
if(!!u.$ib)return a
if(u[b])return a
H.n1(a,b)},
mS:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ab(u)]
else return a.$S()}return},
fp:function(a,b){var u
if(typeof a=="function")return!0
u=H.mS(J.R(a))
if(u==null)return!1
return H.mG(u,null,b,null)},
p:function(a,b){var u,t
if(a==null)return a
if($.lr)return a
$.lr=!0
try{if(H.fp(a,b))return a
u=H.kO(b)
t=H.b1(a,u)
throw H.f(t)}finally{$.lr=!1}},
ly:function(a,b){if(a!=null&&!H.lw(a,b))H.A(H.b1(a,H.kO(b)))
return a},
b1:function(a,b){return new H.j9("TypeError: "+P.dK(a)+": type '"+H.i(H.mM(a))+"' is not a subtype of type '"+b+"'")},
nB:function(a,b){return new H.fO("CastError: "+P.dK(a)+": type '"+H.i(H.mM(a))+"' is not a subtype of type '"+b+"'")},
mM:function(a){var u,t=J.R(a)
if(!!t.$icM){u=H.mS(t)
if(u!=null)return H.kO(u)
return"Closure"}return H.d2(a)},
pj:function(a){throw H.f(new H.jJ(a))},
pL:function(a){throw H.f(new P.h_(a))},
oe:function(a){return new H.ip(a)},
mV:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
c1:function(a){if(a==null)return
return a.$ti},
qU:function(a,b,c){return H.cF(a["$a"+H.i(c)],H.c1(b))},
cC:function(a,b,c,d){var u=H.cF(a["$a"+H.i(c)],H.c1(b))
return u==null?null:u[d]},
aD:function(a,b,c){var u=H.cF(a["$a"+H.i(b)],H.c1(a))
return u==null?null:u[c]},
v:function(a,b){var u=H.c1(a)
return u==null?null:u[b]},
kO:function(a){return H.c0(a,null)},
c0:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cG(a[0].name)+H.lu(a,1,b)
if(typeof a=="function")return H.cG(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ab(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.e(b,t)
return H.i(b[t])}if('func' in a)return H.oS(a,b)
if('futureOr' in a)return"FutureOr<"+H.c0("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
oS:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],[P.k])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.e(a0,m)
p=C.b.m(p,a0[m])
l=u[q]
if(l!=null&&l!==P.P)p+=" extends "+H.c0(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.c0(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.c0(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.c0(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.pt(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.U(n[g])
i=i+h+H.c0(d[c],a0)+(" "+H.i(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
lu:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.a8("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.c0(p,c)}return"<"+u.i(0)+">"},
cF:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
lv:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.c1(a)
t=J.R(a)
if(t[b]==null)return!1
return H.mP(H.cF(t[d],u),null,c,null)},
l:function(a,b,c,d){if(a==null)return a
if(H.lv(a,b,c,d))return a
throw H.f(H.b1(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cG(b.substring(2))+H.lu(c,0,null),v.mangledGlobalNames)))},
mP:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aK(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aK(a[t],b,c[t],d))return!1
return!0},
qS:function(a,b,c){return a.apply(b,H.cF(J.R(b)["$a"+H.i(c)],H.c1(b)))},
mX:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="P"||a.name==="N"||a===-1||a===-2||H.mX(u)}return!1},
lw:function(a,b){var u,t
if(a==null)return b==null||b.name==="P"||b.name==="N"||b===-1||b===-2||H.mX(b)
if(b==null||b===-1||b.name==="P"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.lw(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fp(a,b)}u=J.R(a).constructor
t=H.c1(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aK(u,null,b,null)},
E:function(a,b){if(a!=null&&!H.lw(a,b))throw H.f(H.b1(a,H.kO(b)))
return a},
aK:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="P"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="P"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aK(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="N")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aK("type" in a?a.type:l,b,s,d)
else if(H.aK(a,b,s,d))return!0
else{if(!('$i'+"cQ" in t.prototype))return!1
r=t.prototype["$a"+"cQ"]
q=H.cF(r,u?a.slice(1):l)
return H.aK(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.mG(a,b,c,d)
if('func' in a)return c.name==="l3"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.mP(H.cF(m,u),b,p,d)},
mG:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aK(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aK(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aK(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aK(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.pE(h,b,g,d)},
pE:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aK(c[s],d,a[s],b))return!1}return!0},
qT:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
pB:function(a){var u,t,s,r,q=H.U($.mW.$1(a)),p=$.kE[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kM[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.U($.mO.$2(a,q))
if(q!=null){p=$.kE[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kM[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kN(u)
$.kE[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kM[q]=u
return u}if(s==="-"){r=H.kN(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.n0(a,u)
if(s==="*")throw H.f(P.ji(q))
if(v.leafTags[q]===true){r=H.kN(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.n0(a,u)},
n0:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lB(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kN:function(a){return J.lB(a,!1,null,!!a.$iM)},
pD:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kN(u)
else return J.lB(u,c,null,null)},
px:function(){if(!0===$.lA)return
$.lA=!0
H.py()},
py:function(){var u,t,s,r,q,p,o,n
$.kE=Object.create(null)
$.kM=Object.create(null)
H.pw()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.n2.$1(q)
if(p!=null){o=H.pD(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
pw:function(){var u,t,s,r,q,p,o=C.C()
o=H.cy(C.D,H.cy(C.E,H.cy(C.t,H.cy(C.t,H.cy(C.F,H.cy(C.G,H.cy(C.H(C.r),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.mW=new H.kJ(r)
$.mO=new H.kK(q)
$.n2=new H.kL(p)},
cy:function(a,b){return a(b)||b},
nQ:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.f(P.a6("Illegal RegExp pattern ("+String(p)+")",a,null))},
pJ:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
ps:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
n3:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
n4:function(a,b,c){var u=H.pK(a,b,c)
return u},
pK:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.n3(b),'g'),H.ps(c))},
fU:function fU(){},
fV:function fV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
j7:function j7(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
i1:function i1(a,b){this.a=a
this.b=b},
hp:function hp(a,b,c){this.a=a
this.b=b
this.c=c},
jj:function jj(a){this.a=a},
kR:function kR(a){this.a=a},
f1:function f1(a){this.a=a
this.b=null},
cM:function cM(){},
iQ:function iQ(){},
iI:function iI(){},
cI:function cI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j9:function j9(a){this.a=a},
fO:function fO(a){this.a=a},
ip:function ip(a){this.a=a},
jJ:function jJ(a){this.a=a},
X:function X(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hs:function hs(a,b){this.a=a
this.b=b
this.c=null},
dS:function dS(a,b){this.a=a
this.$ti=b},
ht:function ht(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kJ:function kJ(a){this.a=a},
kK:function kK(a){this.a=a},
kL:function kL(a){this.a=a},
ho:function ho(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cw:function(a){return a},
nX:function(a){return new Int8Array(a)},
br:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.bA(b,a))},
oQ:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.f(H.pq(a,b,c))
return b},
cY:function cY(){},
bS:function bS(){},
dY:function dY(){},
cZ:function cZ(){},
dZ:function dZ(){},
hX:function hX(){},
hY:function hY(){},
hZ:function hZ(){},
i_:function i_(){},
i0:function i0(){},
e_:function e_(){},
ck:function ck(){},
dj:function dj(){},
dk:function dk(){},
dl:function dl(){},
dm:function dm(){},
pt:function(a){return J.lX(a?Object.keys(a):[],null)},
pM:function(a){return v.mangledGlobalNames[a]},
pF:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lB:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
kH:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.lA==null){H.px()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.f(P.ji("Return interceptor for "+H.i(u(a,q))))}s=a.constructor
r=s==null?null:s[$.lM()]
if(r!=null)return r
r=H.pB(a)
if(r!=null)return r
if(typeof a=="function")return C.Q
u=Object.getPrototypeOf(a)
if(u==null)return C.y
if(u===Object.prototype)return C.y
if(typeof s=="function"){Object.defineProperty(s,$.lM(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
nP:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.f(P.l_(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.f(P.al(a,0,4294967295,"length",null))
return J.lX(new Array(a),b)},
lX:function(a,b){return J.l5(H.c(a,[b]))},
l5:function(a){a.fixed$length=Array
return a},
R:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dN.prototype
return J.dM.prototype}if(typeof a=="string")return J.bP.prototype
if(a==null)return J.dO.prototype
if(typeof a=="boolean")return J.hn.prototype
if(a.constructor==Array)return J.bd.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bQ.prototype
return a}if(a instanceof P.P)return a
return J.kH(a)},
bB:function(a){if(typeof a=="string")return J.bP.prototype
if(a==null)return a
if(a.constructor==Array)return J.bd.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bQ.prototype
return a}if(a instanceof P.P)return a
return J.kH(a)},
kF:function(a){if(a==null)return a
if(a.constructor==Array)return J.bd.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bQ.prototype
return a}if(a instanceof P.P)return a
return J.kH(a)},
mU:function(a){if(typeof a=="number")return J.ch.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.c_.prototype
return a},
pu:function(a){if(typeof a=="number")return J.ch.prototype
if(typeof a=="string")return J.bP.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.c_.prototype
return a},
lz:function(a){if(typeof a=="string")return J.bP.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.c_.prototype
return a},
kG:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bQ.prototype
return a}if(a instanceof P.P)return a
return J.kH(a)},
V:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.R(a).q(a,b)},
dx:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.pA(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bB(a).l(a,b)},
kV:function(a,b,c){return J.kF(a).j(a,b,c)},
ns:function(a,b){return J.lz(a).G(a,b)},
nt:function(a,b,c){return J.kG(a).iN(a,b,c)},
nu:function(a,b,c,d){return J.kG(a).jo(a,b,c,d)},
nv:function(a,b){return J.lz(a).U(a,b)},
kW:function(a,b){return J.pu(a).bP(a,b)},
kX:function(a,b){return J.kF(a).J(a,b)},
nw:function(a,b,c,d){return J.kG(a).em(a,b,c,d)},
kY:function(a){return J.mU(a).bS(a)},
lO:function(a,b){return J.kF(a).K(a,b)},
c3:function(a){return J.R(a).gH(a)},
c4:function(a){return J.kF(a).ga_(a)},
aL:function(a){return J.bB(a).gn(a)},
nx:function(a,b){return J.kG(a).kn(a,b)},
kZ:function(a){return J.mU(a).aA(a)},
b7:function(a){return J.R(a).i(a)},
a:function a(){},
hn:function hn(){},
dO:function dO(){},
dP:function dP(){},
i6:function i6(){},
c_:function c_(){},
bQ:function bQ(){},
bd:function bd(a){this.$ti=a},
l6:function l6(a){this.$ti=a},
av:function av(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ch:function ch(){},
dN:function dN(){},
dM:function dM(){},
bP:function bP(){}},P={
ot:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.pk()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.cA(new P.jL(s),1)).observe(u,{childList:true})
return new P.jK(s,u,t)}else if(self.setImmediate!=null)return P.pl()
return P.pm()},
ou:function(a){self.scheduleImmediate(H.cA(new P.jM(H.p(a,{func:1,ret:-1})),0))},
ov:function(a){self.setImmediate(H.cA(new P.jN(H.p(a,{func:1,ret:-1})),0))},
ow:function(a){P.lf(C.l,H.p(a,{func:1,ret:-1}))},
lf:function(a,b){var u=C.d.a7(a.a,1000)
return P.oA(u<0?0:u,b)},
mj:function(a,b){var u=C.d.a7(a.a,1000)
return P.oB(u<0?0:u,b)},
oA:function(a,b){var u=new P.f7()
u.fw(a,b)
return u},
oB:function(a,b){var u=new P.f7()
u.fz(a,b)
return u},
ox:function(a,b){var u,t,s
b.a=1
try{a.eR(new P.jW(b),new P.jX(b),null)}catch(s){u=H.b3(s)
t=H.cD(s)
P.pH(new P.jY(b,u,t))}},
my:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.h(a.c,"$iaJ")
if(u>=4){t=b.co()
b.a=a.a
b.c=a.c
P.dh(b,t)}else{t=H.h(b.c,"$ibq")
b.a=2
b.c=a
a.dM(t)}},
dh:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.h(g.c,"$iat")
P.kA(i,i,g.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.dh(h.a,b)}g=h.a
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
if(m){H.h(q,"$iat")
P.kA(i,i,g.b,q.a,q.b)
return}l=$.a_
if(l!==n)$.a_=n
else l=i
g=b.c
if((g&15)===8)new P.k1(h,u,b,t).$0()
else if(p){if((g&1)!==0)new P.k0(u,b,q).$0()}else if((g&2)!==0)new P.k_(h,u,b).$0()
if(l!=null)$.a_=l
g=u.b
if(!!J.R(g).$icQ){if(g.a>=4){k=H.h(o.c,"$ibq")
o.c=null
b=o.bJ(k)
o.a=g.a
o.c=g.c
h.a=g
continue}else P.my(g,o)
return}}j=b.b
k=H.h(j.c,"$ibq")
j.c=null
b=j.bJ(k)
g=u.a
p=u.b
if(!g){H.E(p,H.v(j,0))
j.a=4
j.c=p}else{H.h(p,"$iat")
j.a=8
j.c=p}h.a=j
g=j}},
pf:function(a,b){if(H.fp(a,{func:1,args:[P.P,P.aw]}))return H.p(a,{func:1,ret:null,args:[P.P,P.aw]})
if(H.fp(a,{func:1,args:[P.P]}))return H.p(a,{func:1,ret:null,args:[P.P]})
throw H.f(P.l_(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
pe:function(){var u,t
for(;u=$.cx,u!=null;){$.du=null
t=u.b
$.cx=t
if(t==null)$.dt=null
u.a.$0()}},
pi:function(){$.ls=!0
try{P.pe()}finally{$.du=null
$.ls=!1
if($.cx!=null)$.lN().$1(P.mQ())}},
mL:function(a){var u=new P.ev(a)
if($.cx==null){$.cx=$.dt=u
if(!$.ls)$.lN().$1(P.mQ())}else $.dt=$.dt.b=u},
ph:function(a){var u,t,s=$.cx
if(s==null){P.mL(a)
$.du=$.dt
return}u=new P.ev(a)
t=$.du
if(t==null){u.b=s
$.cx=$.du=u}else{u.b=t.b
$.du=t.b=u
if(u.b==null)$.dt=u}},
pH:function(a){var u=null,t=$.a_
if(C.f===t){P.kC(u,u,C.f,a)
return}P.kC(u,u,t,H.p(t.cw(a),{func:1,ret:-1}))},
le:function(a,b){var u=$.a_
if(u===C.f)return P.lf(a,H.p(b,{func:1,ret:-1}))
return P.lf(a,H.p(u.cw(b),{func:1,ret:-1}))},
j1:function(a,b){var u=$.a_
if(u===C.f)return P.mj(a,H.p(b,{func:1,ret:-1,args:[P.bl]}))
return P.mj(a,H.p(u.e_(b,P.bl),{func:1,ret:-1,args:[P.bl]}))},
kA:function(a,b,c,d,e){var u={}
u.a=d
P.ph(new P.kB(u,e))},
mH:function(a,b,c,d,e){var u,t=$.a_
if(t===c)return d.$0()
$.a_=c
u=t
try{t=d.$0()
return t}finally{$.a_=u}},
mI:function(a,b,c,d,e,f,g){var u,t=$.a_
if(t===c)return d.$1(e)
$.a_=c
u=t
try{t=d.$1(e)
return t}finally{$.a_=u}},
pg:function(a,b,c,d,e,f,g,h,i){var u,t=$.a_
if(t===c)return d.$2(e,f)
$.a_=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a_=u}},
kC:function(a,b,c,d){var u
H.p(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.cw(d):c.jw(d,-1)
P.mL(d)},
jL:function jL(a){this.a=a},
jK:function jK(a,b,c){this.a=a
this.b=b
this.c=c},
jM:function jM(a){this.a=a},
jN:function jN(a){this.a=a},
f7:function f7(){this.c=0},
kl:function kl(a,b){this.a=a
this.b=b},
kk:function kk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bq:function bq(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aJ:function aJ(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
jV:function jV(a,b){this.a=a
this.b=b},
jZ:function jZ(a,b){this.a=a
this.b=b},
jW:function jW(a){this.a=a},
jX:function jX(a){this.a=a},
jY:function jY(a,b,c){this.a=a
this.b=b
this.c=c},
k1:function k1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k2:function k2(a){this.a=a},
k0:function k0(a,b,c){this.a=a
this.b=b
this.c=c},
k_:function k_(a,b,c){this.a=a
this.b=b
this.c=c},
ev:function ev(a){this.a=a
this.b=null},
iL:function iL(){},
iN:function iN(a,b){this.a=a
this.b=b},
iO:function iO(a,b){this.a=a
this.b=b},
d7:function d7(){},
iM:function iM(){},
bl:function bl(){},
at:function at(a,b){this.a=a
this.b=b},
kt:function kt(){},
kB:function kB(a,b){this.a=a
this.b=b},
k9:function k9(){},
kb:function kb(a,b,c){this.a=a
this.b=b
this.c=c},
ka:function ka(a,b){this.a=a
this.b=b},
kc:function kc(a,b,c){this.a=a
this.b=b
this.c=c},
nR:function(a,b,c){return H.l(H.mT(a,new H.X([b,c])),"$ilY",[b,c],"$alY")},
lZ:function(a,b){return new H.X([a,b])},
nS:function(a){return H.mT(a,new H.X([null,null]))},
nT:function(a){return new P.k7([a])},
lm:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
oz:function(a,b,c){var u=new P.eK(a,b,[c])
u.c=a.e
return u},
nN:function(a,b,c){var u,t
if(P.lt(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.k])
C.a.h($.ax,a)
try{P.oU(a,u)}finally{if(0>=$.ax.length)return H.e($.ax,-1)
$.ax.pop()}t=P.mh(b,H.mY(u,"$ij"),", ")+c
return t.charCodeAt(0)==0?t:t},
l4:function(a,b,c){var u,t
if(P.lt(a))return b+"..."+c
u=new P.a8(b)
C.a.h($.ax,a)
try{t=u
t.a=P.mh(t.a,a,", ")}finally{if(0>=$.ax.length)return H.e($.ax,-1)
$.ax.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
lt:function(a){var u,t
for(u=$.ax.length,t=0;t<u;++t)if(a===$.ax[t])return!0
return!1},
oU:function(a,b){var u,t,s,r,q,p,o,n=a.ga_(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.A())return
u=H.i(n.gP(n))
C.a.h(b,u)
m+=u.length+2;++l}if(!n.A()){if(l<=5)return
if(0>=b.length)return H.e(b,-1)
t=b.pop()
if(0>=b.length)return H.e(b,-1)
s=b.pop()}else{r=n.gP(n);++l
if(!n.A()){if(l<=4){C.a.h(b,H.i(r))
return}t=H.i(r)
if(0>=b.length)return H.e(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gP(n);++l
for(;n.A();r=q,q=p){p=n.gP(n);++l
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
la:function(a){var u,t={}
if(P.lt(a))return"{...}"
u=new P.a8("")
try{C.a.h($.ax,a)
u.a+="{"
t.a=!0
J.lO(a,new P.hy(t,u))
u.a+="}"}finally{if(0>=$.ax.length)return H.e($.ax,-1)
$.ax.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
k7:function k7(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
di:function di(a){this.a=a
this.c=this.b=null},
eK:function eK(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hu:function hu(){},
x:function x(){},
hx:function hx(){},
hy:function hy(a,b){this.a=a
this.b=b},
ao:function ao(){},
km:function km(){},
hz:function hz(){},
eo:function eo(a,b){this.a=a
this.$ti=b},
kd:function kd(){},
eL:function eL(){},
fd:function fd(){},
on:function(a,b,c,d){if(b instanceof Uint8Array)return P.oo(!1,b,c,d)
return},
oo:function(a,b,c,d){var u,t,s=$.nm()
if(s==null)return
u=0===c
if(u&&!0)return P.li(s,b)
t=b.length
d=P.bW(c,d,t)
if(u&&d===t)return P.li(s,b)
return P.li(s,b.subarray(c,d))},
li:function(a,b){if(P.oq(b))return
return P.or(a,b)},
or:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.b3(t)}return},
oq:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
op:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.b3(t)}return},
mK:function(a,b,c){var u,t,s
for(u=J.bB(a),t=b;t<c;++t){s=u.l(a,t)
if(typeof s!=="number")return s.al()
if((s&127)!==s)return t-b}return c-b},
lP:function(a,b,c,d,e,f){if(C.d.b1(f,4)!==0)throw H.f(P.a6("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.f(P.a6("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.f(P.a6("Invalid base64 padding, more than two '=' characters",a,b))},
fK:function fK(){},
fL:function fL(){},
c9:function c9(){},
cb:function cb(){},
h7:function h7(){},
jr:function jr(){},
jt:function jt(){},
ks:function ks(a){this.b=0
this.c=a},
js:function js(a){this.a=a},
kr:function kr(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
cE:function(a,b,c){var u=H.mb(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.f(P.a6(a,null,null))},
nL:function(a){if(a instanceof H.cM)return a.i(0)
return"Instance of '"+H.i(H.d2(a))+"'"},
nU:function(a,b,c){var u,t=J.nP(a,c)
if(a!==0&&!0)for(u=0;u<t.length;++u)C.a.j(t,u,b)
return H.l(t,"$ib",[c],"$ab")},
l9:function(a,b,c){var u,t=[c],s=H.c([],t)
for(u=J.c4(a);u.A();)C.a.h(s,H.E(u.gP(u),c))
if(b)return s
return H.l(J.l5(s),"$ib",t,"$ab")},
d8:function(a,b,c){var u
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.l(a,"$ibd",[P.m],"$abd")
u=a.length
c=P.bW(b,c,u)
return H.mc(b>0||c<u?C.a.f6(a,b,c):a)}if(!!J.R(a).$ick)return H.o9(a,b,P.bW(b,c,a.length))
return P.oi(a,b,c)},
oi:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.f(P.al(b,0,J.aL(a),q,q))
u=c==null
if(!u&&c<b)throw H.f(P.al(c,b,J.aL(a),q,q))
t=J.c4(a)
for(s=0;s<b;++s)if(!t.A())throw H.f(P.al(b,0,s,q,q))
r=[]
if(u)for(;t.A();)r.push(t.gP(t))
else for(s=b;s<c;++s){if(!t.A())throw H.f(P.al(c,b,s,q,q))
r.push(t.gP(t))}return H.mc(r)},
oc:function(a){return new H.ho(a,H.nQ(a,!1,!0,!1,!1,!1))},
mh:function(a,b,c){var u=J.c4(b)
if(!u.A())return a
if(c.length===0){do a+=H.i(u.gP(u))
while(u.A())}else{a+=H.i(u.gP(u))
for(;u.A();)a=a+c+H.i(u.gP(u))}return a},
mm:function(){var u=H.o0()
if(u!=null)return P.om(u)
throw H.f(P.I("'Uri.base' is not supported"))},
fe:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.h){u=$.nq().b
if(typeof b!=="string")H.A(H.aC(b))
u=u.test(b)}else u=!1
if(u)return b
H.E(b,H.aD(c,"c9",0))
t=c.gjO().cC(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.e(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.e6(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
nJ:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
nK:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dF:function(a){if(a>=10)return""+a
return"0"+a},
lU:function(a){return new P.aO(1000*a)},
dK:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.b7(a)
if(typeof a==="string")return JSON.stringify(a)
return P.nL(a)},
dy:function(a){return new P.b8(!1,null,null,a)},
l_:function(a,b,c){return new P.b8(!0,a,b,c)},
oa:function(a){var u=null
return new P.bV(u,u,!1,u,u,a)},
ig:function(a,b){return new P.bV(null,null,!0,a,b,"Value not in range")},
al:function(a,b,c,d,e){return new P.bV(b,c,!0,a,d,"Invalid value")},
bW:function(a,b,c){if(0>a||a>c)throw H.f(P.al(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.f(P.al(b,a,c,"end",null))
return b}return c},
md:function(a,b){if(typeof a!=="number")return a.B()
if(a<0)throw H.f(P.al(a,0,null,b,null))},
W:function(a,b,c,d,e){var u=H.ab(e==null?J.aL(b):e)
return new P.hl(u,!0,a,c,"Index out of range")},
I:function(a){return new P.jk(a)},
ji:function(a){return new P.jh(a)},
ca:function(a){return new P.fT(a)},
D:function(a){return new P.eD(a)},
a6:function(a,b,c){return new P.hh(a,b,c)},
dU:function(a,b,c){var u,t=H.c([],[c])
C.a.sn(t,a)
for(u=0;u<a;++u)C.a.j(t,u,b.$1(u))
return t},
lD:function(a){H.pF(a)},
om:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.G(a,4)^58)*3|C.b.G(a,0)^100|C.b.G(a,1)^97|C.b.G(a,2)^116|C.b.G(a,3)^97)>>>0
if(u===0)return P.ml(e<e?C.b.u(a,0,e):a,5,f).geW()
else if(u===32)return P.ml(C.b.u(a,5,e),0,f).geW()}t=new Array(8)
t.fixed$length=Array
s=H.c(t,[P.m])
C.a.j(s,0,0)
C.a.j(s,1,-1)
C.a.j(s,2,-1)
C.a.j(s,7,-1)
C.a.j(s,3,0)
C.a.j(s,4,0)
C.a.j(s,5,e)
C.a.j(s,6,e)
if(P.mJ(a,0,e,0,s)>=14)C.a.j(s,7,e)
r=s[1]
if(typeof r!=="number")return r.kE()
if(r>=0)if(P.mJ(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.m()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.B()
if(typeof n!=="number")return H.d(n)
if(m<n)n=m
if(typeof o!=="number")return o.B()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.B()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.B()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.b.ac(a,"..",o)))j=n>o+2&&C.b.ac(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.b.ac(a,"file",0)){if(q<=0){if(!C.b.ac(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.b.u(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.b.bi(a,o,n,"/");++e
n=h}k="file"}else if(C.b.ac(a,"http",0)){if(t&&p+3===o&&C.b.ac(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.bi(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.ac(a,"https",0)){if(t&&p+4===o&&C.b.ac(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.b.bi(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.b.u(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.ke(a,r,q,p,o,n,m,k)}return P.oC(a,0,e,r,q,p,o,n,m,k)},
mo:function(a){var u=P.k
return C.a.jQ(H.c(a.split("&"),[u]),P.lZ(u,u),new P.jp(C.h),[P.y,P.k,P.k])},
ol:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.jm(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.U(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.cE(C.b.u(a,s,t),n,n)
if(typeof p!=="number")return p.Z()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.e(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.cE(C.b.u(a,s,c),n,n)
if(typeof p!=="number")return p.Z()
if(p>255)k.$2(l,s)
if(r>=u)return H.e(j,r)
j[r]=p
return j},
mn:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.jn(a),d=new P.jo(e,a)
if(a.length<2)e.$1("address is too short")
u=H.c([],[P.m])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.b.U(a,t)
if(p===58){if(t===b){++t
if(C.b.U(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
C.a.h(u,-1)
r=!0}else C.a.h(u,d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.a.gaY(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)C.a.h(u,d.$2(s,c))
else{m=P.ol(a,s,c)
C.a.h(u,(m[0]<<8|m[1])>>>0)
C.a.h(u,(m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.e(l,i)
l[i]=0
f=i+1
if(f>=k)return H.e(l,f)
l[f]=0
i+=2}else{f=C.d.bc(h,8)
if(i<0||i>=k)return H.e(l,i)
l[i]=f
f=i+1
if(f>=k)return H.e(l,f)
l[f]=h&255
i+=2}}return l},
oC:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.oK(a,b,d)
else{if(d===b)P.cv(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.oL(a,u,e-1):""
s=P.oH(a,e,f,!1)
if(typeof f!=="number")return f.m()
r=f+1
if(typeof g!=="number")return H.d(g)
q=r<g?P.oJ(P.cE(C.b.u(a,r,g),new P.kn(a,f),n),j):n}else{q=n
s=q
t=""}p=P.oI(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.B()
o=h<i?P.lo(a,h+1,i,n):n
return new P.cu(j,t,s,q,p,o,i<c?P.oG(a,i+1,c):n)},
mA:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cv:function(a,b,c){throw H.f(P.a6(c,a,b))},
oJ:function(a,b){if(a!=null&&a===P.mA(b))return
return a},
oH:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.b.U(a,b)===91){if(typeof c!=="number")return c.p()
u=c-1
if(C.b.U(a,u)!==93)P.cv(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.oE(a,t,u)
if(typeof s!=="number")return s.B()
if(s<u){r=s+1
q=P.mF(a,C.b.ac(a,"25",r)?s+3:r,u,"%25")}else q=""
P.mn(a,t,s)
return C.b.u(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.d(c)
p=b
for(;p<c;++p)if(C.b.U(a,p)===58){s=C.b.bT(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.mF(a,C.b.ac(a,"25",r)?s+3:r,c,"%25")}else q=""
P.mn(a,b,s)
return"["+C.b.u(a,b,s)+q+"]"}return P.oN(a,b,c)},
oE:function(a,b,c){var u,t=C.b.bT(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.d(c)
u=t<c}else u=!1
return u?t:c},
mF:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.a8(d):null
if(typeof c!=="number")return H.d(c)
u=b
t=u
s=!0
for(;u<c;){r=C.b.U(a,u)
if(r===37){q=P.lp(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.a8("")
o=l.a+=C.b.u(a,t,u)
if(p)q=C.b.u(a,u,u+3)
else if(q==="%")P.cv(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.e(C.i,p)
p=(C.i[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.a8("")
if(t<u){l.a+=C.b.u(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.b.U(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.a8("")
l.a+=C.b.u(a,t,u)
l.a+=P.ln(r)
u+=m
t=u}}}if(l==null)return C.b.u(a,b,c)
if(t<c)l.a+=C.b.u(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
oN:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.d(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.U(a,u)
if(q===37){p=P.lp(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.a8("")
n=C.b.u(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.b.u(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.e(C.w,o)
o=(C.w[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.a8("")
if(t<u){s.a+=C.b.u(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.e(C.n,o)
o=(C.n[o]&1<<(q&15))!==0}else o=!1
if(o)P.cv(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.U(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.a8("")
n=C.b.u(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.ln(q)
u+=l
t=u}}}}if(s==null)return C.b.u(a,b,c)
if(t<c){n=C.b.u(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
oK:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.mC(C.b.G(a,b)))P.cv(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.G(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.e(C.p,r)
r=(C.p[r]&1<<(s&15))!==0}else r=!1
if(!r)P.cv(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.u(a,b,c)
return P.oD(t?a.toLowerCase():a)},
oD:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oL:function(a,b,c){return P.ds(a,b,c,C.S,!1)},
oI:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.ds(a,b,c,C.x,!0):C.m.kS(d,new P.ko(),P.k).v(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.am(u,"/"))u="/"+u
return P.oM(u,e,f)},
oM:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.am(a,"/"))return P.oO(a,!u||c)
return P.oP(a)},
lo:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.f(P.dy("Both query and queryParameters specified"))
return P.ds(a,b,c,C.o,!0)}if(d==null)return
u=new P.a8("")
t.a=""
d.K(0,new P.kp(new P.kq(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
oG:function(a,b,c){return P.ds(a,b,c,C.o,!0)},
lp:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.U(a,b+1)
t=C.b.U(a,p)
s=H.kI(u)
r=H.kI(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.d.bc(q,4)
if(p>=8)return H.e(C.i,p)
p=(C.i[p]&1<<(q&15))!==0}else p=!1
if(p)return H.e6(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.u(a,b,b+3).toUpperCase()
return},
ln:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.c(u,[P.m])
C.a.j(t,0,37)
C.a.j(t,1,C.b.G(o,a>>>4))
C.a.j(t,2,C.b.G(o,a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.c(u,[P.m])
for(q=0;--r,r>=0;s=128){p=C.d.iY(a,6*r)&63|s
C.a.j(t,q,37)
C.a.j(t,q+1,C.b.G(o,p>>>4))
C.a.j(t,q+2,C.b.G(o,p&15))
q+=3}}return P.d8(t,0,null)},
ds:function(a,b,c,d,e){var u=P.mE(a,b,c,d,e)
return u==null?C.b.u(a,b,c):u},
mE:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.B()
if(typeof c!=="number")return H.d(c)
if(!(o<c))break
c$0:{u=C.b.U(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.e(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.lp(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.e(C.n,t)
t=(C.n[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.cv(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.b.U(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.ln(u)}}if(m==null)m=new P.a8("")
m.a+=C.b.u(a,n,o)
m.a+=H.i(s)
if(typeof r!=="number")return H.d(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.B()
if(n<c)m.a+=C.b.u(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
mD:function(a){if(C.b.am(a,"."))return!0
return C.b.eu(a,"/.")!==-1},
oP:function(a){var u,t,s,r,q,p,o
if(!P.mD(a))return a
u=H.c([],[P.k])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.V(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.e(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.v(u,"/")},
oO:function(a,b){var u,t,s,r,q,p
if(!P.mD(a))return!b?P.mB(a):a
u=H.c([],[P.k])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaY(u)!==".."){if(0>=u.length)return H.e(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.e(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaY(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.e(u,0)
C.a.j(u,0,P.mB(u[0]))}return C.a.v(u,"/")},
mB:function(a){var u,t,s,r=a.length
if(r>=2&&P.mC(J.ns(a,0)))for(u=1;u<r;++u){t=C.b.G(a,u)
if(t===58)return C.b.u(a,0,u)+"%3A"+C.b.av(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.e(C.p,s)
s=(C.p[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
oF:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.G(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.f(P.dy("Invalid URL encoding"))}}return u},
lq:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.b.G(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.h!==d)s=!1
else s=!0
if(s)return C.b.u(a,b,c)
else r=new H.a7(C.b.u(a,b,c))}else{r=H.c([],[P.m])
for(s=a.length,q=b;q<c;++q){t=C.b.G(a,q)
if(t>127)throw H.f(P.dy("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.f(P.dy("Truncated URI"))
C.a.h(r,P.oF(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.l(r,"$ib",[P.m],"$ab")
return new P.js(!1).cC(r)},
mC:function(a){var u=a|32
return 97<=u&&u<=122},
ml:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.c([b-1],[P.m])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.G(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.f(P.a6(m,a,t))}}if(s<0&&t>b)throw H.f(P.a6(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.G(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gaY(l)
if(r!==44||t!==p+7||!C.b.ac(a,"base64",p+1))throw H.f(P.a6("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.B.jZ(0,a,o,u)
else{n=P.mE(a,o,u,C.o,!0)
if(n!=null)a=C.b.bi(a,o,u,n)}return new P.jl(a,l,c)},
oR:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.dU(22,new P.kv(),P.Q),n=new P.ku(o),m=new P.kw(),l=new P.kx(),k=H.h(n.$2(0,225),"$iQ")
m.$3(k,u,1)
m.$3(k,t,14)
m.$3(k,s,34)
m.$3(k,r,3)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(14,225),"$iQ")
m.$3(k,u,1)
m.$3(k,t,15)
m.$3(k,s,34)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(15,225),"$iQ")
m.$3(k,u,1)
m.$3(k,"%",225)
m.$3(k,s,34)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(1,225),"$iQ")
m.$3(k,u,1)
m.$3(k,s,34)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(2,235),"$iQ")
m.$3(k,u,139)
m.$3(k,r,131)
m.$3(k,t,146)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(3,235),"$iQ")
m.$3(k,u,11)
m.$3(k,r,68)
m.$3(k,t,18)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(4,229),"$iQ")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,"[",232)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(5,229),"$iQ")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(6,231),"$iQ")
l.$3(k,"19",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(7,231),"$iQ")
l.$3(k,"09",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
m.$3(H.h(n.$2(8,8),"$iQ"),"]",5)
k=H.h(n.$2(9,235),"$iQ")
m.$3(k,u,11)
m.$3(k,t,16)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(16,235),"$iQ")
m.$3(k,u,11)
m.$3(k,t,17)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(17,235),"$iQ")
m.$3(k,u,11)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(10,235),"$iQ")
m.$3(k,u,11)
m.$3(k,t,18)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(18,235),"$iQ")
m.$3(k,u,11)
m.$3(k,t,19)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(19,235),"$iQ")
m.$3(k,u,11)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(11,235),"$iQ")
m.$3(k,u,11)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(12,236),"$iQ")
m.$3(k,u,12)
m.$3(k,q,12)
m.$3(k,p,205)
k=H.h(n.$2(13,237),"$iQ")
m.$3(k,u,13)
m.$3(k,q,13)
l.$3(H.h(n.$2(20,245),"$iQ"),"az",21)
k=H.h(n.$2(21,245),"$iQ")
l.$3(k,"az",21)
l.$3(k,"09",21)
m.$3(k,"+-.",21)
return o},
mJ:function(a,b,c,d,e){var u,t,s,r,q=$.nr()
for(u=b;u<c;++u){if(d<0||d>=q.length)return H.e(q,d)
t=q[d]
s=C.b.G(a,u)^96
if(s>95)s=31
if(s>=t.length)return H.e(t,s)
r=t[s]
d=r&31
C.a.j(e,r>>>5,u)}return d},
a3:function a3(){},
az:function az(a,b){this.a=a
this.b=b},
C:function C(){},
aO:function aO(a){this.a=a},
h4:function h4(){},
h5:function h5(){},
bM:function bM(){},
fE:function fE(){},
e1:function e1(){},
b8:function b8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bV:function bV(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hl:function hl(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
jk:function jk(a){this.a=a},
jh:function jh(a){this.a=a},
iG:function iG(a){this.a=a},
fT:function fT(a){this.a=a},
i5:function i5(){},
ef:function ef(){},
h_:function h_(a){this.a=a},
eD:function eD(a){this.a=a},
hh:function hh(a,b,c){this.a=a
this.b=b
this.c=c},
m:function m(){},
j:function j(){},
bc:function bc(){},
b:function b(){},
y:function y(){},
N:function N(){},
ac:function ac(){},
P:function P(){},
aw:function aw(){},
k:function k(){},
a8:function a8(a){this.a=a},
jp:function jp(a){this.a=a},
jm:function jm(a){this.a=a},
jn:function jn(a){this.a=a},
jo:function jo(a,b){this.a=a
this.b=b},
cu:function cu(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
kn:function kn(a,b){this.a=a
this.b=b},
ko:function ko(){},
kq:function kq(a,b){this.a=a
this.b=b},
kp:function kp(a){this.a=a},
jl:function jl(a,b,c){this.a=a
this.b=b
this.c=c},
kv:function kv(){},
ku:function ku(a){this.a=a},
kw:function kw(){},
kx:function kx(){},
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
jR:function jR(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
pp:function(a){var u,t=J.R(a)
if(!!t.$ibs){u=t.ge5(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.fc(a.data,a.height,a.width)},
po:function(a){if(a instanceof P.fc)return{data:a.a,height:a.b,width:a.c}
return a},
bz:function(a){var u,t,s,r,q
if(a==null)return
u=P.lZ(P.k,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r){q=H.U(t[r])
u.j(0,q,a[q])}return u},
pn:function(a){var u={}
a.K(0,new P.kD(u))
return u},
kg:function kg(){},
ki:function ki(a,b){this.a=a
this.b=b},
fc:function fc(a,b,c){this.a=a
this.b=b
this.c=c},
kD:function kD(a){this.a=a},
kh:function kh(a,b){this.a=a
this.b=b},
hd:function hd(a,b){this.a=a
this.b=b},
he:function he(){},
hf:function hf(){},
k6:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
oy:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
k4:function k4(){},
k8:function k8(){},
ap:function ap(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bg:function bg(){},
hr:function hr(){},
bj:function bj(){},
i2:function i2(){},
ia:function ia(){},
iP:function iP(){},
q:function q(){},
bm:function bm(){},
j6:function j6(){},
eI:function eI(){},
eJ:function eJ(){},
eT:function eT(){},
eU:function eU(){},
f3:function f3(){},
f4:function f4(){},
fa:function fa(){},
fb:function fb(){},
Q:function Q(){},
fG:function fG(){},
fH:function fH(){},
fI:function fI(a){this.a=a},
fJ:function fJ(){},
c5:function c5(){},
i3:function i3(){},
ew:function ew(){},
dA:function dA(){},
e7:function e7(){},
cn:function cn(){},
eb:function eb(){},
eh:function eh(){},
em:function em(){},
iF:function iF(){},
f_:function f_(){},
f0:function f0(){}},W={
ny:function(){var u=document.createElement("a")
return u},
l1:function(){var u=document.createElement("canvas")
return u},
lV:function(a){H.h(a,"$in")
return"wheel"},
k5:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mz:function(a,b,c,d){var u=W.k5(W.k5(W.k5(W.k5(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
ag:function(a,b,c,d,e){var u=W.mN(new W.jU(c),W.o)
if(u!=null&&!0)J.nu(a,b,u,!1)
return new W.jT(a,b,u,!1,[e])},
mN:function(a,b){var u=$.a_
if(u===C.f)return a
return u.e_(a,b)},
r:function r(){},
fA:function fA(){},
fC:function fC(){},
fD:function fD(){},
c6:function c6(){},
c7:function c7(){},
cL:function cL(){},
bJ:function bJ(){},
cN:function cN(){},
fW:function fW(){},
S:function S(){},
cO:function cO(){},
fX:function fX(){},
ba:function ba(){},
bb:function bb(){},
fY:function fY(){},
fZ:function fZ(){},
h0:function h0(){},
dG:function dG(){},
h1:function h1(){},
dH:function dH(){},
dI:function dI(){},
h2:function h2(){},
h3:function h3(){},
jP:function jP(a,b){this.a=a
this.b=b},
a5:function a5(){},
o:function o(){},
n:function n(){},
aE:function aE(){},
cP:function cP(){},
hc:function hc(){},
hg:function hg(){},
aP:function aP(){},
hk:function hk(){},
cf:function cf(){},
bs:function bs(){},
cS:function cS(){},
bf:function bf(){},
hv:function hv(){},
hQ:function hQ(){},
cW:function cW(){},
hR:function hR(){},
hS:function hS(a){this.a=a},
hT:function hT(){},
hU:function hU(a){this.a=a},
aR:function aR(){},
hV:function hV(){},
ak:function ak(){},
jO:function jO(a){this.a=a},
K:function K(){},
d_:function d_(){},
aS:function aS(){},
i8:function i8(){},
im:function im(){},
io:function io(a){this.a=a},
iq:function iq(){},
aV:function aV(){},
iD:function iD(){},
aW:function aW(){},
iE:function iE(){},
aX:function aX(){},
iJ:function iJ(){},
iK:function iK(a){this.a=a},
aG:function aG(){},
aZ:function aZ(){},
aH:function aH(){},
iU:function iU(){},
iV:function iV(){},
j0:function j0(){},
b_:function b_(){},
b0:function b0(){},
j4:function j4(){},
j5:function j5(){},
bZ:function bZ(){},
jq:function jq(){},
jF:function jF(){},
bp:function bp(){},
dg:function dg(){},
jQ:function jQ(){},
ey:function ey(){},
k3:function k3(){},
eQ:function eQ(){},
kf:function kf(){},
kj:function kj(){},
jS:function jS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ll:function ll(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jT:function jT(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jU:function jU(a){this.a=a},
F:function F(){},
dL:function dL(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
ex:function ex(){},
ez:function ez(){},
eA:function eA(){},
eB:function eB(){},
eC:function eC(){},
eE:function eE(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){},
eM:function eM(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){},
eR:function eR(){},
eS:function eS(){},
eV:function eV(){},
eW:function eW(){},
eX:function eX(){},
dn:function dn(){},
dp:function dp(){},
eY:function eY(){},
eZ:function eZ(){},
f2:function f2(){},
f5:function f5(){},
f6:function f6(){},
dq:function dq(){},
dr:function dr(){},
f8:function f8(){},
f9:function f9(){},
ff:function ff(){},
fg:function fg(){},
fh:function fh(){},
fi:function fi(){},
fj:function fj(){},
fk:function fk(){},
fl:function fl(){},
fm:function fm(){},
fn:function fn(){},
fo:function fo(){}},L={
nY:function(a){var u,t,s,r,q,p,o,n=null,m=new Array(256)
m.fixed$length=Array
u=[P.m]
t=H.c(m,u)
m=new Array(256)
m.fixed$length=Array
s=H.c(m,u)
for(r=0;r<256;++r)C.a.j(s,r,r)
q=P.cE("6364136223846793005",n,n)
p=P.cE("1442695040888963407",n,n)
if(typeof q!=="number")return H.d(q)
if(typeof p!=="number")return H.d(p)
a=C.d.cV(C.d.cV(C.d.cV(a*q+p,64)*q+p,64)*q+p,64)
for(r=255;r>=0;--r){m=a*q+p
a=((m&-1)>>>0)-(m&0)
o=C.d.b1(a+31,r+1)
if(o>=256)return H.e(s,o)
C.a.j(t,r,s[o])
s[o]=s[r]}return new L.i4(t)},
i4:function i4(a){this.a=a}},B={
bk:function(a,b){return new B.aT(a,b)},
h9:function h9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null},
aT:function aT(a,b){this.a=a
this.b=b},
nA:function(a){switch(a){case 0:return"air"
case 1:return"water"
case 100:return"boundary"
case 101:return"dirt"
case 102:return"turf"
case 103:return"rock"
case 104:return"sand"
case 105:return"dryLeaves"
case 106:return"trunk-ud"
case 107:return"trunk-ns"
case 108:return"trunk-ew"
case 109:return"brick"
case 110:return"redShine"
case 111:return"whiteShine"
case 112:return"yellowShine"
case 113:return"blackShine"
case 114:return"leaves"
case 115:return"wood-ud"
case 116:return"wood-ns"
case 117:return"wood-ew"
case 200:return"grass"
case 201:return"fern"
case 202:return"whiteFlower"
case 203:return"blueFlower"
case 204:return"redFlower"
case 205:return"mushroom"}return"undefined"},
nz:function(a,b){if(a===b)return!1
if(b===0)return!0
if(a===1)return b>=200&&b<=205
if(b===1)return!(a>=200&&a<=205)
return!(a>=200&&a<=205)&&b>=200&&b<=205},
nC:function(a){var u=new B.c8(a)
u.fb(a)
return u},
mZ:function(){var u,t=V.of("3Dart Craft"),s=[P.k]
t.a1(H.c(["This example is in development and may still have a few issues and glitches."],s))
u=W.l1()
u.className="pageLargeCanvas"
u.id="targetCanvas"
t.a.appendChild(u)
t.cu(1,"About")
t.a1(H.c(["3Dart Craft is an example of how [3Dart|https://github.com/Grant-Nelson/ThreeDart] can be used ","to create a [voxel|https://en.wikipedia.org/wiki/Voxel] environment for browser driven video games. ","This example has no server backing it so none of the changes are persisted. It would take very little ","to turn this into a simple online game."],s))
t.a1(H.c(["\xab[Back to Examples List|../../]"],s))
t.cu(1,"Controls")
t.a1(H.c(["\u2022 _Currently there are no controls for mobile browsers_"],s))
t.a1(H.c(["\u2022 *Esc* to release the mouse capture"],s))
t.a1(H.c(["\u2022 *W* or *Up arrow* to move forward"],s))
t.a1(H.c(["\u2022 *S* or *Down arrow* to move backward"],s))
t.a1(H.c(["\u2022 *A* or *Left arrow* to strife left"],s))
t.a1(H.c(["\u2022 *D* or *Right arror* to strife right"],s))
t.a1(H.c(["\u2022 *Space bar* to jump"],s))
t.a1(H.c(["\u2022 *Tab* cycles the block selected which can be placed"],s))
t.a1(H.c(["\u2022 *Shift-Tab* cycles the selection in the reverse direction"],s))
t.a1(H.c(["\u2022 *Left click* or *Q* removes the currently highlighted block"],s))
t.a1(H.c(["\u2022 *Right click* or *E* places the selected block on the highlighted block"],s))
t.a1(H.c(["\u2022 *O* to return the starting location"],s))
t.cu(1,"Help wanted")
t.a1(H.c(["There is still much to be done, many cool new features, and several little bugs. ","If you would like to contribute to this example, have an idea, find a bug, or just want to learn more about it, ","check out the [project page|https://github.com/Grant-Nelson/ThreeDart/projects/1] or ","[source code|https://github.com/Grant-Nelson/ThreeDart/tree/master/web/examples/craft]."],s))
t.a1(H.c(["There are tons of ways to contribute. You could even start your own example. ","See the [3Dart Project|https://github.com/Grant-Nelson/ThreeDart] for more."],s))
P.le(C.l,B.pC())},
pI:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=document.getElementById("targetCanvas")
if(c6==null)H.A(P.D("Failed to find an element with the identifier, targetCanvas."))
u=E.oj(c6,!0,!0,!0,!1)
t=new B.hP(u)
s=P.m
t.sh2(new H.X([s,B.Z]))
t.shr(new H.X([s,[P.b,P.m]]))
t.shs(H.c([],[O.ci]))
r=new V.a9(1,1,1)
q=V.e5()
p=V.lk()
o=new V.u(0.5,-1,0.2).p(0,q)
o=U.bK(V.m2(q,p,new V.H(o.a,o.b,o.c)))
p=new D.bL()
p.c=new V.a9(1,1,1)
p.a=V.lk()
p.d=V.lj()
p.e=V.mv()
n=p.b
p.b=o
o.gt().h(0,p.ghM())
q=new D.L("mover",n,p.b,[U.aa])
q.b=!0
p.aM(q)
if(!p.c.q(0,r)){n=p.c
p.c=r
q=new D.L("color",n,r,[V.a9])
q.b=!0
p.aM(q)}t.e=p
m=t.I(t.F("boundary"),!1)
l=t.I(t.F("brick"),!1)
k=t.I(t.F("dirt"),!1)
j=t.I(t.F("dryLeavesSide"),!1)
i=t.I(t.F("dryLeavesTop"),!1)
h=t.I(t.F("leaves"),!1)
g=t.I(t.F("rock"),!1)
f=t.I(t.F("sand"),!1)
e=t.I(t.F("trunkEnd"),!1)
d=t.I(t.F("trunkSide"),!1)
c=t.I(t.F("trunkTilted"),!1)
b=t.I(t.F("turfSide"),!1)
a=t.I(t.F("turfTop"),!1)
a0=t.I(t.F("woodEnd"),!1)
a1=t.I(t.F("woodSide"),!1)
a2=t.I(t.F("woodTilted"),!1)
a3=t.I(t.F("blackShine"),!0)
a4=t.I(t.F("redShine"),!0)
a5=t.I(t.F("yellowShine"),!0)
a6=t.I(t.F("whiteShine"),!0)
a7=t.I(t.F("mushroomBottom"),!1)
a8=t.I(t.F("mushroomSide"),!1)
a9=t.I(t.F("mushroomTop"),!1)
b0=t.I(t.F("grass"),!1)
b1=t.I(t.F("fern"),!1)
b2=t.I(t.F("blueFlowers"),!1)
b3=t.I(t.F("redFlowers"),!1)
b4=t.I(t.F("whiteFlowers"),!1)
q=T.bY
p=P.l9([t.F("water1"),t.F("water2"),t.F("water3")],!0,q)
o=new T.iW()
b5=o.b=o.a=0
o.sj5(H.l(p,"$ib",[q],"$ab"))
o.f=null
t.x=o
b6=t.I(o,!0)
t.b.j(0,100,new B.Z(m,m,m,m,m,m))
t.b.j(0,101,new B.Z(k,k,k,k,k,k))
t.b.j(0,102,new B.Z(a,k,b,b,b,b))
t.b.j(0,103,new B.Z(g,g,g,g,g,g))
t.b.j(0,104,new B.Z(f,f,f,f,f,f))
t.b.j(0,105,new B.Z(i,k,j,j,j,j))
t.b.j(0,106,new B.Z(e,e,d,d,d,d))
t.b.j(0,107,new B.Z(d,d,c,c,e,e))
t.b.j(0,108,new B.Z(c,c,e,e,c,c))
t.b.j(0,109,new B.Z(l,l,l,l,l,l))
t.b.j(0,110,new B.Z(a4,a4,a4,a4,a4,a4))
t.b.j(0,111,new B.Z(a6,a6,a6,a6,a6,a6))
t.b.j(0,112,new B.Z(a5,a5,a5,a5,a5,a5))
t.b.j(0,113,new B.Z(a3,a3,a3,a3,a3,a3))
t.b.j(0,114,new B.Z(h,h,h,h,h,h))
t.b.j(0,115,new B.Z(a0,a0,a1,a1,a1,a1))
t.b.j(0,116,new B.Z(a1,a1,a2,a2,a0,a0))
t.b.j(0,117,new B.Z(a2,a2,a0,a0,a2,a2))
t.b.j(0,1,new B.Z(b6,b6,b6,b6,b6,b6))
s=[s]
q=H.l(H.c([b0],s),"$ib",s,"$ab")
t.c.j(0,200,q)
q=H.l(H.c([b1],s),"$ib",s,"$ab")
t.c.j(0,201,q)
q=H.l(H.c([b4],s),"$ib",s,"$ab")
t.c.j(0,202,q)
q=H.l(H.c([b2],s),"$ib",s,"$ab")
t.c.j(0,203,q)
q=H.l(H.c([b3],s),"$ib",s,"$ab")
t.c.j(0,204,q)
s=H.l(H.c([a9,a7,a8],s),"$ib",s,"$ab")
t.c.j(0,205,s)
t.f=t.dd("selection")
t.r=t.dd("crosshair")
b7=B.os(t,B.oT())
b8=B.nZ(u.r,b7)
b9=new M.dJ()
b9.a=!0
b9.sfX(0,O.l2(E.a1))
b9.e.bC(b9.ghO(),b9.ghQ())
b9.y=b9.x=b9.r=b9.f=null
c0=X.nM(new V.aM(0.576,0.784,0.929,1))
c1=new X.e2()
c1.c=1.0471975511965976
c1.d=0.1
c1.e=2000
c1.sew(null)
s=c1.c
if(!(Math.abs(s-1.0471975511965976)<$.B().a)){c1.c=1.0471975511965976
s=new D.L("fov",s,1.0471975511965976,[P.C])
s.b=!0
c1.b5(s)}s=c1.d
if(!(Math.abs(s-0.1)<$.B().a)){c1.d=0.1
s=new D.L("near",s,0.1,[P.C])
s.b=!0
c1.b5(s)}s=c1.e
if(!(Math.abs(s-2000)<$.B().a)){c1.e=2000
s=new D.L("far",s,2000,[P.C])
s.b=!0
c1.b5(s)}s=b9.b
if(s!==c1){if(s!=null)s.gt().V(0,b9.gb3())
n=b9.b
b9.b=c1
c1.gt().h(0,b9.gb3())
s=new D.L("camera",n,b9.b,[X.dC])
s.b=!0
b9.b4(s)}s=b9.c
if(s!==c0){if(s!=null)s.gt().V(0,b9.gb3())
n=b9.c
b9.c=c0
c0.gt().h(0,b9.gb3())
s=new D.L("target",n,b9.c,[X.eg])
s.b=!0
b9.b4(s)}s=b9.f
if(s==null)s=b9.f=D.O()
s.h(0,b7.gky(b7))
b9.b.sew(b8.x)
for(s=b7.e,q=s.length;b5<s.length;s.length===q||(0,H.z)(s),++b5){c2=s[b5]
p=b9.e
o=H.v(p,0)
H.E(c2,o)
c3=[o]
if(H.G(p.bm(H.c([c2],c3)))){c4=p.a
c5=c4.length
C.a.h(c4,c2)
o=H.l(H.c([c2],c3),"$ij",[o],"$aj")
p=p.c
if(p!=null)p.$2(c5,o)}}b9.e.h(0,b8.db)
b7.f=b8
s=u.d
if(s!==b9){if(s!=null)s.gt().V(0,u.gd4())
u.d=b9
b9.gt().h(0,u.gd4())
u.d5()}b8.d_()
P.j1(C.O,b7.gkB())
P.j1(C.N,b7.geZ())
P.j1(C.L,b7.gjr())
P.j1(C.M,new B.kP(u,b7))},
oT:function(){var u,t,s,r,q=null,p=P.mm().geM().l(0,"seed")
if(p!=null){if(p==="test")return new B.iR()
if(p==="checkers"){u=new B.fQ()
u.a=!0
u.b=10
return u}t=H.mb(p,q)
if(t==null)t=-1}else t=-1
if(t<=0){t=C.K.jY(4294967296)
s=P.mm().eN(0,P.nR(["seed",""+t],P.k,q))
u=window.history
r=s.i(0)
u.toString
u.pushState(new P.kh([],[]).cX(q),q,r)}u=new B.ib()
u.a=L.nY(t)
u.b=new Uint8Array(484)
return u},
nZ:function(a,b){var u=new B.e3(b)
u.fd(a,b)
return u},
ld:function(a,b){var u,t,s=new B.iv(a,b)
if(b==null){u=$.ad()
t=$.ah()
s.b=new Z.af(u.a|t.a|$.as().a)}u=a==null?null:a.d
u=u==null?null:u.length
if(u==null)u=1
u=new Array(u)
u.fixed$length=Array
s.sdR(H.c(u,[F.d3]))
return s},
os:function(a,b){var u=new B.eu(a,b)
u.fi(a,b)
return u},
ay:function ay(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fQ:function fQ(){this.b=this.a=null},
c8:function c8(a){var _=this
_.b=_.a=null
_.c=a
_.x=_.r=_.f=_.e=_.d=null},
fR:function fR(a){var _=this
_.a=a
_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
kP:function kP(a,b){this.a=a
this.b=b},
Z:function Z(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hP:function hP(a){var _=this
_.a=a
_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
e0:function e0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e3:function e3(a){var _=this
_.b=_.a=null
_.c=a
_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=null},
i7:function i7(a){this.a=a},
ib:function ib(){this.c=this.b=this.a=null},
id:function id(a){this.a=a},
ic:function ic(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ie:function ie(a){this.a=a},
iv:function iv(a,b){this.a=a
this.b=b
this.c=null},
iw:function iw(a){this.a=a},
ix:function ix(a){this.a=a},
iy:function iy(a){this.a=a},
iz:function iz(a){this.a=a},
iR:function iR(){this.a=null},
iS:function iS(a){this.a=a},
iT:function iT(a){this.a=a},
eu:function eu(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.e=_.d=_.c=null}},O={
l2:function(a){var u=new O.a0([a])
u.bD(a)
return u},
a0:function a0(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cV:function cV(){this.b=this.a=null},
m_:function(){var u,t,s=new O.ci()
s.sfR(O.l2(V.au))
s.e.bC(s.ghC(),s.ghE())
u=new O.bh(s,"emission")
u.c=new A.ai(!1,!1,!1)
u.f=new V.a9(0,0,0)
s.f=u
u=new O.bh(s,"ambient")
u.c=new A.ai(!1,!1,!1)
u.f=new V.a9(0,0,0)
s.r=u
u=new O.bh(s,"diffuse")
u.c=new A.ai(!1,!1,!1)
u.f=new V.a9(0,0,0)
s.x=u
u=new O.bh(s,"invDiffuse")
u.c=new A.ai(!1,!1,!1)
u.f=new V.a9(0,0,0)
s.y=u
u=new O.hI(s,"specular")
u.c=new A.ai(!1,!1,!1)
u.f=new V.a9(0,0,0)
u.ch=100
s.z=u
u=new O.hE(s,"bump")
u.c=new A.ai(!1,!1,!1)
s.Q=u
s.ch=null
u=new O.bh(s,"reflect")
u.c=new A.ai(!1,!1,!1)
u.f=new V.a9(0,0,0)
s.cx=u
u=new O.hH(s,"refract")
u.c=new A.ai(!1,!1,!1)
u.f=new V.a9(0,0,0)
u.ch=1
s.cy=u
u=new O.hD(s,"alpha")
u.c=new A.ai(!1,!1,!1)
u.f=1
s.db=u
u=new D.dR()
u.bD(D.aj)
u.sfq(H.c([],[D.bL]))
u.siB(H.c([],[D.e4]))
u.sfs(H.c([],[D.ee]))
u.y=u.x=null
u.c1(u.ghA(),u.gij(),u.gio())
s.dx=u
t=new O.hG()
t.b=new V.aM(0,0,0,0)
t.c=1
t.d=10
t.e=!1
s.dy=t
t=u.x
u=t==null?u.x=D.O():t
u.h(0,s.giP())
u=s.dx
t=u.y
u=t==null?u.y=D.O():t
u.h(0,s.gbE())
s.fr=null
return s},
ci:function ci(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hJ:function hJ(a,b){this.a=a
this.b=b},
hK:function hK(){},
hL:function hL(a,b){this.a=a
this.b=b},
hM:function hM(){},
hN:function hN(a,b){this.a=a
this.b=b},
hO:function hO(){},
hD:function hD(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cU:function cU(){},
hE:function hE(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
bh:function bh(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hG:function hG(){var _=this
_.e=_.d=_.c=_.b=null},
hH:function hH(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hI:function hI(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
co:function co(){}},E={
cc:function(a,b,c,d){var u,t,s,r,q,p=new E.a1()
p.a=""
p.b=!0
p.sfj(0,O.l2(E.a1))
p.y.bC(p.gk_(),p.gk6())
p.dy=p.dx=p.db=p.cy=p.cx=p.ch=p.Q=p.z=null
u=p.c
if(u!=c){p.d=p.c=c
p.e=null
if(u!=null)u.gt().V(0,p.gbV())
t=p.c
if(t!=null)t.gt().h(0,p.gbV())
s=new D.L("shape",u,p.c,[F.ec])
s.b=!0
p.as(s)}u=p.f
if(u!=d){if(u!=null)u.gt().V(0,p.geE())
r=p.f
p.f=d
if(d!=null)d.gt().h(0,p.geE())
p.di()
s=new D.L("technique",r,p.f,[O.co])
s.b=!0
p.as(s)}if(!J.V(p.r,b)){q=p.r
if(q!=null)q.gt().V(0,p.geB())
if(b!=null)b.gt().h(0,p.geB())
p.r=b
s=new D.L("mover",q,b,[U.aa])
s.b=!0
p.as(s)}if(a!=null)p.y.aP(0,a)
return p},
od:function(a,b){var u=new E.ii(a)
u.fe(a,b)
return u},
oj:function(a,b,c,d,e){var u,t,s=J.R(a)
if(!!s.$ic7)return E.mi(a,!0,!0,!0,!1)
u=W.l1()
t=u.style
t.width="100%"
t.height="100%"
s.ge2(a).h(0,u)
return E.mi(u,!0,!0,!0,!1)},
mi:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.ei(),j=H.h(C.k.cZ(a,"webgl2",P.nS(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$icn")
if(j==null)H.A(P.D("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.od(j,a)
u=new T.iY(j)
u.b=H.ab(j.getParameter(3379))
H.ab(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.ep(a)
t=new X.hq()
t.siG(P.nT(P.m))
u.b=t
t=new X.hW(u)
t.f=0
t.r=V.by()
t.x=V.by()
t.ch=t.Q=1
u.c=t
t=new X.hw(u)
t.r=0
t.x=V.by()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.j3(u)
t.f=V.by()
t.r=V.by()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sh8(H.c([],[[P.d7,P.P]]))
t=u.z
s=document
r=W.ak
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.ag(s,"contextmenu",H.p(u.ghU(),q),!1,r))
t=u.z
p=W.o
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.ag(a,"focus",H.p(u.gi_(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.ag(a,"blur",H.p(u.ghK(),o),!1,p))
t=u.z
n=W.bf
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.ag(s,"keyup",H.p(u.gck(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.ag(s,"keydown",H.p(u.gc3(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.ag(a,"mousedown",H.p(u.gi7(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ag(a,"mouseup",H.p(u.gib(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ag(a,l,H.p(u.gi9(),q),!1,r))
n=u.z
W.lV(a)
m=W.bp;(n&&C.a).h(n,W.ag(a,H.U(W.lV(a)),H.p(u.gie(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.ag(s,l,H.p(u.ghW(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.ag(s,"mouseup",H.p(u.ghY(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.ag(s,"pointerlockchange",H.p(u.gih(),o),!1,p))
p=u.z
o=W.b0
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.ag(a,"touchstart",H.p(u.giw(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ag(a,"touchend",H.p(u.gis(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ag(a,"touchmove",H.p(u.giu(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.az(Date.now(),!1)
k.cy=0
k.dO()
return k},
fM:function fM(){},
a1:function a1(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ii:function ii(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ij:function ij(a){this.a=a},
ik:function ik(a){this.a=a},
il:function il(a){this.a=a},
iH:function iH(){this.b=null},
ei:function ei(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
j_:function j_(a){this.a=a}},Z={
mx:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Float32Array(H.cw(c)),35044)
a.bindBuffer(b,null)
return new Z.es(b,u)},
et:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cw(c)),35044)
a.bindBuffer(b,null)
return new Z.es(b,u)},
b2:function(a){return new Z.af(a)},
es:function es(a,b){this.a=a
this.b=b},
bI:function bI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
jG:function jG(a){this.a=a},
cK:function cK(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
aQ:function aQ(a,b,c){this.a=a
this.b=b
this.c=c},
af:function af(a){this.a=a}},D={
O:function(){var u=new D.cd()
u.saw(null)
u.sbn(null)
u.c=null
u.d=0
return u},
fP:function fP(){},
cd:function cd(){var _=this
_.d=_.c=_.b=_.a=null},
ha:function ha(a){this.a=a},
hb:function hb(a){this.a=a},
w:function w(){this.b=null},
bN:function bN(a){this.b=null
this.$ti=a},
bO:function bO(a){this.b=null
this.$ti=a},
L:function L(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
bL:function bL(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
aj:function aj(){},
dR:function dR(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
e4:function e4(){},
ee:function ee(){}},X={
be:function(){var u=new X.dQ()
u.bD(X.an)
u.f=u.e=null
u.r=!1
u.y=u.x=null
u.c1(u.gfk(),u.gfm(),u.gfo())
return u},
dB:function dB(a,b){this.a=a
this.b=b},
an:function an(a,b){this.a=a
this.b=b},
bt:function bt(a){this.c=a
this.b=null},
dQ:function dQ(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
hq:function hq(){this.d=this.b=this.a=null},
dV:function dV(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},
hw:function hw(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
bv:function bv(a,b,c){this.a=a
this.b=b
this.c=c},
bw:function bw(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},
hW:function hW(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
i9:function i9(){},
ek:function ek(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},
j3:function j3(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},
ep:function ep(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
nM:function(a){var u,t=new X.hi()
if(a==null)u=new V.aM(0,0,0,1)
else u=a
t.a=u
t.b=!0
t.c=2000
t.d=!0
t.e=0
t.f=!1
u=$.mf
if(u==null){u=V.lc(0,0,1,1)
$.mf=u}t.r=u
return t},
dC:function dC(){},
hi:function hi(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e2:function e2(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
eg:function eg(){}},V={
aA:function(a){return new V.a4(a)},
kS:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.b1(a-b,u)
return(a<0?a+u:a)+b},
J:function(a,b,c){if(a==null)return C.b.aZ("null",c)
return C.b.aZ(C.e.eS(Math.abs(a-0)<$.B().a?0:a,b),c+b+1)},
cB:function(a,b,c){var u,t,s,r,q,p=H.c([],[P.k])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.z)(a),++s){r=V.J(a[s],b,c)
t=Math.max(t,r.length)
C.a.h(p,r)}for(q=p.length-1;q>=0;--q){if(q>=p.length)return H.e(p,q)
C.a.j(p,q,C.b.aZ(p[q],t))}return p},
lC:function(a){return C.e.aA(Math.pow(2,C.j.bS(Math.log(H.cz(a))/Math.log(2))))},
m0:function(a){var u=Math.cos(a),t=Math.sin(a)
return new V.aF(u,0,-t,0,1,0,t,0,u)},
cj:function(){var u=$.m5
return u==null?$.m5=V.bi(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
bi:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.au(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
dX:function(a,b,c){return V.bi(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
lb:function(a,b,c,d){return V.bi(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
m3:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.bi(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
m4:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.bi(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
m2:function(a,b,c){var u=c.w(0,Math.sqrt(c.D(c))),t=b.bu(u),s=t.w(0,Math.sqrt(t.D(t))),r=u.bu(s),q=new V.H(a.a,a.b,a.c),p=s.O(0).D(q),o=r.O(0).D(q),n=u.O(0).D(q)
return V.bi(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
by:function(){var u=$.m9
return u==null?$.m9=new V.T(0,0):u},
e5:function(){var u=$.d0
return u==null?$.d0=new V.u(0,0,0):u},
bT:function(a,b,c){return new V.u(a,b,c)},
me:function(a,b){return new V.e8(a.a,a.b,a.c,b.a,b.b,b.c)},
lc:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.e9(a,b,c,d)},
ih:function(a,b,c,d,e,f){if(d<0){if(typeof a!=="number")return a.m()
a+=d
d=-d}if(e<0){if(typeof b!=="number")return b.m()
b+=e
e=-e}if(f<0){if(typeof c!=="number")return c.m()
c+=f
f=-f}return new V.bX(a,b,c,d,e,f)},
df:function(){var u=$.mu
return u==null?$.mu=new V.H(0,0,0):u},
mv:function(){var u=$.ju
return u==null?$.ju=new V.H(-1,0,0):u},
lj:function(){var u=$.jv
return u==null?$.jv=new V.H(0,1,0):u},
lk:function(){var u=$.jw
return u==null?$.jw=new V.H(0,0,1):u},
mw:function(){var u=$.ms
return u==null?$.ms=new V.H(0,0,-1):u},
mq:function(a,b,c){return new V.H(a,b,c)},
a9:function a9(a,b,c){this.a=a
this.b=b
this.c=c},
aM:function aM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h8:function h8(a){this.a=a},
a4:function a4(a){this.a=a},
cg:function cg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hm:function hm(a,b){this.a=a
this.b=b},
aF:function aF(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
au:function au(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
T:function T(a,b){this.a=a
this.b=b},
u:function u(a,b,c){this.a=a
this.b=b
this.c=c},
bU:function bU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e8:function e8(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
e9:function e9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bX:function bX(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
a2:function a2(a,b){this.a=a
this.b=b},
H:function H(a,b,c){this.a=a
this.b=b
this.c=c},
aq:function(a){var u=new V.ir()
u.ff(a)
return u},
fB:function fB(){},
bu:function bu(){},
dW:function dW(){},
bx:function bx(){this.a=null},
ir:function ir(){this.a=null},
d6:function d6(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ej:function ej(a,b,c){this.a=a
this.b=b
this.c=c},
da:function da(a){this.b=a
this.c=null},
j2:function j2(){this.c=this.b=this.a=null},
db:function db(a){this.b=a
this.a=this.c=null},
of:function(a){var u=new V.iA()
u.fh(a,!0)
return u},
iA:function iA(){this.b=this.a=null},
iC:function iC(a){this.a=a},
iB:function iB(a){this.a=a}},U={
dD:function(){var u=new U.fS()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
bK:function(a){var u=new U.dE()
u.a=a
return u},
hj:function(a){var u=new U.cR()
u.bD(U.aa)
u.bC(u.gft(),u.gil())
u.aP(0,a)
u.e=null
u.f=V.cj()
u.r=0
return u},
fS:function fS(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dE:function dE(){this.b=this.a=null},
cR:function cR(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
cT:function cT(){var _=this
_.d=_.c=_.b=_.a=null},
aa:function aa(){},
ea:function ea(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eq:function eq(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
er:function er(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dJ:function dJ(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
nV:function(a,b){var u=a.aU,t=new A.hC(b,u)
t.fg(b,u)
t.fc(a,b)
return t},
nW:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="MaterialLight_"+a0.gN(a0)+a1.gN(a1)+a2.gN(a2)+a3.gN(a3)+a4.gN(a4)+a5.gN(a5)+a6.gN(a6)+a7.gN(a7)+a8.gN(a8)+"_"
f+=a?"1":"0"
f+=b?"1":"0"
f+=c?"1":"0"
f=f+"0_"+e
u=a9.length
if(u>0){f+="_Dir"
for(t=0;t<a9.length;a9.length===u||(0,H.z)(a9),++t)f+="_"+H.i(a9[t].a)}u=b0.length
if(u>0){f+="_Point"
for(t=0;t<b0.length;b0.length===u||(0,H.z)(b0),++t)f+="_"+H.i(b0[t].a)}u=b1.length
if(u>0){f+="_Spot"
for(t=0;t<b1.length;b1.length===u||(0,H.z)(b1),++t)f+="_"+H.i(b1[t].a)}for(u=a9.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=a9[t].b
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
g=$.ad()
if(l){u=$.as()
g=new Z.af(g.a|u.a)}if(k){u=$.bH()
g=new Z.af(g.a|u.a)}if(j){u=$.ah()
g=new Z.af(g.a|u.a)}if(i){u=$.bG()
g=new Z.af(g.a|u.a)}return new A.hF(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,s,p,m,p,r,h,!0,!1,!1,o,r,n,l,k,j,!1,i,a,!1,c,!1,e,f.charCodeAt(0)==0?f:f,g)},
ky:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
kz:function(a,b,c){var u,t="Txt, txt2D).rgb;\n"
A.ky(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.kQ(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.b){u+="   "+c+"Color = "+c+"Clr*texture2D("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.b){u+="   "+c+"Color = texture2D("+c+t
a.a=u}a.a=u+"}\n"},
oY:function(a,b){var u,t=a.a,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.ky(b,t,"emission")
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
oV:function(a,b){var u,t=a.b
if(!(t.a||t.b||!1))return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.kz(b,t,"ambient")
b.a+="\n"},
oW:function(a,b){var u,t=a.c
if(!(t.a||t.b||!1))return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.kz(b,t,"diffuse")
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
oZ:function(a,b){var u,t=a.d
if(!(t.a||t.b||!1))return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.kz(b,t,"invDiffuse")
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
p4:function(a,b){var u,t=a.e
if(!(t.a||t.b||!1))return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.kz(b,t,"specular")
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
p0:function(a,b){var u,t,s
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
p2:function(a,b){var u,t=a.r,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.ky(b,t,"reflect")
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
p3:function(a,b){var u,t=a.x,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.ky(b,t,"refract")
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
oX:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.i(u)
s=A.kQ(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.al()
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
if(n.a||n.b||!1)C.a.h(o,"ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.c([],r)
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
c.a+="      highLight = intensity*("+C.a.v(m," + ")+");\n"}else c.a+="   highLight = "+C.a.v(m," + ")+";\n"
C.a.h(o,"highLight")}r=c.a+="   return lit.color*("+C.a.v(o," + ")+");\n"
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
p1:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.i(u)
s=A.kQ(t)
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
if(typeof u!=="number")return u.al()
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
C.a.h(l,"lit.color")
if(o)C.a.h(l,"attenuation")
if(u)C.a.h(l,"textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.a.v(l," * ")+";\n"
o+="}\n"
c.a=o
o+="\n"
c.a=o
o+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+m+")\n"
c.a=o
c.a=o+"{\n"
l=H.c([],r)
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
k=H.c([],r)
r=a.c
if(r.a||r.b||!1)C.a.h(k,"diffuse(norm, normDir)")
r=a.d
if(r.a||r.b||!1)C.a.h(k,"invDiffuse(norm, normDir)")
r=a.e
if(r.a||r.b||!1)C.a.h(k,"specular(norm, normDir)")
r=c.a+="      highLight = intensity*("+C.a.v(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.a.v(l," + ")+");\n"
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
p5:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.i(u)
s=A.kQ(t)
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
if(typeof u!=="number")return u.al()
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
if(n)C.a.h(j,"attenuation")
if(o)C.a.h(j,"scale")
if(m)C.a.h(j,"texture2D(txt2D, txtLoc).rgb")
else C.a.h(j,"vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.a.v(j," * ")+";\n"
r+="}\n"
c.a=r
r+="\n"
c.a=r
r+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+k+")\n"
c.a=r
c.a=r+"{\n"
j=H.c([],u)
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
i=H.c([],u)
u=a.c
if(u.a||u.b||!1)C.a.h(i,"diffuse(norm, litVec)")
u=a.d
if(u.a||u.b||!1)C.a.h(i,"invDiffuse(norm, litVec)")
u=a.e
if(u.a||u.b||!1)C.a.h(i,"specular(norm, litVec)")
u=c.a+="      highLight = intensity*("+C.a.v(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.a.v(j," + ")+");\n"
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
p_:function(a,b){var u,t
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
if(u.a||u.b||!1)C.a.h(t,"ambientColor")
u=a.c
if(u.a||u.b||!1)C.a.h(t,"diffuse(norm, litVec)")
u=a.d
if(u.a||u.b||!1)C.a.h(t,"invDiffuse(norm, litVec)")
u=a.e
if(u.a||u.b||!1)C.a.h(t,"specular(norm, litVec)")
u=b.a+="   return "+C.a.v(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
p6:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.a8("")
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
A.oY(a,j)
A.oV(a,j)
A.oW(a,j)
A.oZ(a,j)
A.p4(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.p2(a,j)
A.p3(a,j)}A.p0(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.z)(q),++o)A.oX(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.z)(q),++o)A.p1(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.z)(q),++o)A.p5(a,q[o],j)
A.p_(a,j)}q=j.a+="// === Main ===\n"
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
C.a.h(n,"lightAccum")
u=a.b
if(u.a||u.b||!1)j.a+="   setAmbientColor();\n"
u=a.c
if(u.a||u.b||!1)j.a+="   setDiffuseColor();\n"
u=a.d
if(u.a||u.b||!1)j.a+="   setInvDiffuseColor();\n"
u=a.e
if(u.a||u.b||!1)j.a+="   setSpecularColor();\n"
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.z)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.e(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.av(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.z)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.e(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.av(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.z)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.e(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.av(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
if(u.a||u.b||!1)C.a.h(n,"emissionColor()")
u=a.r
if(u.a||u.b||!1)C.a.h(n,"reflect(refl)")
u=a.x
if(u.a||u.b||!1)C.a.h(n,"refract(refl)")
if(n.length<=0)C.a.h(n,"vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.a.v(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
p7:function(a,b){var u,t,s
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
p9:function(a,b){var u
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
p8:function(a,b){var u
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
pb:function(a,b){var u,t
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
pc:function(a,b){var u,t
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
pa:function(a,b){var u
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
pd:function(a,b){var u
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
kQ:function(a){if(0>=a.length)return H.e(a,0)
return a[0].toUpperCase()+C.b.av(a,1)},
lg:function(a,b,c,d,e){var u=new A.ja(a,c,e)
u.f=d
u.sjn(P.nU(d,0,P.m))
return u},
dz:function dz(a,b,c){this.a=a
this.b=b
this.c=c},
fF:function fF(a){this.a=a},
ai:function ai(a,b,c){this.a=a
this.b=b
this.c=c},
hC:function hC(a,b){var _=this
_.kJ=_.e9=_.e8=_.e7=_.aU=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.kR=_.kQ=_.kP=_.cI=_.cH=_.cG=_.cF=_.cE=_.cD=_.kO=_.el=_.ek=_.kN=_.ej=_.ei=_.eh=_.kM=_.eg=_.ef=_.ee=_.kL=_.ed=_.ec=_.kK=_.eb=_.ea=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
aN:function aN(a,b){this.a=a
this.b=b},
aU:function aU(a,b){this.a=a
this.b=b},
aY:function aY(a,b){this.a=a
this.b=b},
hF:function hF(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.aU=b3
_.e7=b4},
cp:function cp(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cq:function cq(a,b,c,d,e,f,g,h,i,j){var _=this
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
cs:function cs(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
d4:function d4(){},
el:function el(){},
jf:function jf(a){this.a=a},
aI:function aI(a,b,c){this.a=a
this.c=b
this.d=c},
jc:function jc(a,b,c){this.a=a
this.c=b
this.d=c},
jd:function jd(a,b,c){this.a=a
this.c=b
this.d=c},
je:function je(a,b,c){this.a=a
this.c=b
this.d=c},
ja:function ja(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
am:function am(a,b,c){this.a=a
this.c=b
this.d=c},
jb:function jb(a,b,c){this.a=a
this.c=b
this.d=c},
Y:function Y(a,b,c){this.a=a
this.c=b
this.d=c},
dc:function dc(a,b,c){this.a=a
this.c=b
this.d=c},
jg:function jg(a,b,c){this.a=a
this.c=b
this.d=c},
dd:function dd(a,b,c){this.a=a
this.c=b
this.d=c},
aB:function aB(a,b,c){this.a=a
this.c=b
this.d=c},
ar:function ar(a,b,c){this.a=a
this.c=b
this.d=c},
cr:function cr(a,b,c){this.a=a
this.c=b
this.d=c}},F={
ct:function(a,b,c,d,e,f,g,h,i){var u,t,s=null,r=new F.bo()
new F.jC().sbo(H.c([],[F.cl]))
u=new F.jB()
t=[F.bR]
u.shk(H.c([],t))
u.shl(H.c([],t))
r.c=u
u=new F.jy()
t=[F.ae]
u.sh9(H.c([],t))
u.sha(H.c([],t))
u.shb(H.c([],t))
r.d=u
r.e=0
u=h.a
r.f=(u&$.ad().a)!==0?d:s
r.r=(u&$.as().a)!==0?e:s
r.x=(u&$.bH().a)!==0?b:s
r.y=(u&$.ah().a)!==0?f:s
r.z=(u&$.c2().a)!==0?g:s
r.Q=(u&$.nn().a)!==0?c:s
r.ch=(u&$.cH().a)!==0?i:0
r.cx=(u&$.bG().a)!==0?a:s
return r},
ae:function ae(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bR:function bR(){},
cl:function cl(){},
d3:function d3(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
ec:function ec(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
d5:function d5(){},
is:function is(a){this.a=a
this.b=null},
it:function it(a){this.a=a
this.b=null},
iu:function iu(){this.b=null},
bo:function bo(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.a=null},
jE:function jE(a){this.a=a},
jD:function jD(a){this.a=a},
jx:function jx(a){this.a=a
this.c=this.b=null},
jy:function jy(){this.d=this.c=this.b=null},
jz:function jz(a,b){this.a=a
this.b=b},
jA:function jA(a,b){this.a=a
this.b=b},
jB:function jB(){this.c=this.b=null},
jC:function jC(){this.b=null}},T={d9:function d9(){},bY:function bY(){},iW:function iW(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},iX:function iX(){var _=this
_.y=_.d=_.c=_.b=_.a=null},iY:function iY(a){var _=this
_.a=a
_.e=_.d=_.b=null},iZ:function iZ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}}
var w=[C,H,J,P,W,L,B,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.l7.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gH:function(a){return H.d1(a)},
i:function(a){return"Instance of '"+H.i(H.d2(a))+"'"}}
J.hn.prototype={
i:function(a){return String(a)},
gH:function(a){return a?519018:218159},
$ia3:1}
J.dO.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gH:function(a){return 0}}
J.dP.prototype={
gH:function(a){return 0},
i:function(a){return String(a)}}
J.i6.prototype={}
J.c_.prototype={}
J.bQ.prototype={
i:function(a){var u=a[$.n7()]
if(u==null)return this.f8(a)
return"JavaScript function for "+H.i(J.b7(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$il3:1}
J.bd.prototype={
h:function(a,b){H.E(b,H.v(a,0))
if(!!a.fixed$length)H.A(P.I("add"))
a.push(b)},
V:function(a,b){var u
if(!!a.fixed$length)H.A(P.I("remove"))
for(u=0;u<a.length;++u)if(J.V(a[u],b)){a.splice(u,1)
return!0}return!1},
aP:function(a,b){var u,t
H.l(b,"$ij",[H.v(a,0)],"$aj")
if(!!a.fixed$length)H.A(P.I("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.z)(b),++t)a.push(b[t])},
K:function(a,b){var u,t
H.p(b,{func:1,ret:-1,args:[H.v(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.f(P.ca(a))}},
v:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.j(t,u,H.i(a[u]))
return t.join(b)},
jV:function(a){return this.v(a,"")},
jQ:function(a,b,c,d){var u,t,s
H.E(b,d)
H.p(c,{func:1,ret:d,args:[d,H.v(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.f(P.ca(a))}return t},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
f6:function(a,b,c){if(b<0||b>a.length)throw H.f(P.al(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.f(P.al(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.v(a,0)])
return H.c(a.slice(b,c),[H.v(a,0)])},
gaY:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.f(H.nO())},
c2:function(a,b){var u=H.v(a,0)
H.p(b,{func:1,ret:P.m,args:[u,u]})
if(!!a.immutable$list)H.A(P.I("sort"))
H.ed(a,0,a.length-1,b,u)},
ak:function(a,b){var u
for(u=0;u<a.length;++u)if(J.V(a[u],b))return!0
return!1},
i:function(a){return P.l4(a,"[","]")},
ga_:function(a){return new J.av(a,a.length,[H.v(a,0)])},
gH:function(a){return H.d1(a)},
gn:function(a){return a.length},
sn:function(a,b){if(!!a.fixed$length)H.A(P.I("set length"))
if(b<0)throw H.f(P.al(b,0,null,"newLength",null))
a.length=b},
l:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.f(H.bA(a,b))
if(b>=a.length||b<0)throw H.f(H.bA(a,b))
return a[b]},
j:function(a,b,c){H.E(c,H.v(a,0))
if(!!a.immutable$list)H.A(P.I("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.f(H.bA(a,b))
if(b>=a.length||b<0)throw H.f(H.bA(a,b))
a[b]=c},
$ij:1,
$ib:1}
J.l6.prototype={}
J.av.prototype={
gP:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.f(H.z(s))
u=t.c
if(u>=r){t.sdw(null)
return!1}t.sdw(s[u]);++t.c
return!0},
sdw:function(a){this.d=H.E(a,H.v(this,0))},
$ibc:1}
J.ch.prototype={
bP:function(a,b){var u
H.n_(b)
if(typeof b!=="number")throw H.f(H.aC(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbU(b)
if(this.gbU(a)===u)return 0
if(this.gbU(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbU:function(a){return a===0?1/a<0:a<0},
aA:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.f(P.I(""+a+".toInt()"))},
bS:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.f(P.I(""+a+".floor()"))},
az:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.I(""+a+".round()"))},
jy:function(a,b,c){if(C.d.bP(b,c)>0)throw H.f(H.aC(b))
if(this.bP(a,b)<0)return b
if(this.bP(a,c)>0)return c
return a},
eS:function(a,b){var u
if(b>20)throw H.f(P.al(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbU(a))return"-"+u
return u},
bz:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.f(P.al(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.U(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.A(P.I("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.e(t,1)
u=t[1]
if(3>=s)return H.e(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.k("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gH:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
b1:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
fa:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dT(a,b)},
a7:function(a,b){return(a|0)===a?a/b|0:this.dT(a,b)},
dT:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.f(P.I("Result of truncating division is "+H.i(u)+": "+H.i(a)+" ~/ "+b))},
f5:function(a,b){if(b<0)throw H.f(H.aC(b))
return b>31?0:a<<b>>>0},
bc:function(a,b){var u
if(a>0)u=this.dS(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
iY:function(a,b){if(b<0)throw H.f(H.aC(b))
return this.dS(a,b)},
dS:function(a,b){return b>31?0:a>>>b},
$iC:1,
$iac:1}
J.dN.prototype={
cV:function(a,b){var u=this.f5(1,b-1)
return((a&u-1)>>>0)-((a&u)>>>0)},
$im:1}
J.dM.prototype={}
J.bP.prototype={
U:function(a,b){if(b<0)throw H.f(H.bA(a,b))
if(b>=a.length)H.A(H.bA(a,b))
return a.charCodeAt(b)},
G:function(a,b){if(b>=a.length)throw H.f(H.bA(a,b))
return a.charCodeAt(b)},
m:function(a,b){if(typeof b!=="string")throw H.f(P.l_(b,null,null))
return a+b},
bi:function(a,b,c,d){var u,t
c=P.bW(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
ac:function(a,b,c){var u
if(c<0||c>a.length)throw H.f(P.al(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
am:function(a,b){return this.ac(a,b,0)},
u:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.A(H.aC(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.B()
if(b<0)throw H.f(P.ig(b,null))
if(b>c)throw H.f(P.ig(b,null))
if(c>a.length)throw H.f(P.ig(c,null))
return a.substring(b,c)},
av:function(a,b){return this.u(a,b,null)},
k:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.I)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
aZ:function(a,b){var u=b-a.length
if(u<=0)return a
return this.k(" ",u)+a},
bT:function(a,b,c){var u
if(c<0||c>a.length)throw H.f(P.al(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
eu:function(a,b){return this.bT(a,b,0)},
i:function(a){return a},
gH:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gn:function(a){return a.length},
$im7:1,
$ik:1}
H.a7.prototype={
gn:function(a){return this.a.length},
l:function(a,b){return C.b.U(this.a,b)},
$ade:function(){return[P.m]},
$ax:function(){return[P.m]},
$aj:function(){return[P.m]},
$ab:function(){return[P.m]}}
H.h6.prototype={}
H.dT.prototype={
gP:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=J.bB(s),q=r.gn(s)
if(t.b!==q)throw H.f(P.ca(s))
u=t.c
if(u>=q){t.sbl(null)
return!1}t.sbl(r.J(s,u));++t.c
return!0},
sbl:function(a){this.d=H.E(a,H.v(this,0))},
$ibc:1}
H.hA.prototype={
ga_:function(a){return new H.hB(J.c4(this.a),this.b,this.$ti)},
gn:function(a){return J.aL(this.a)},
J:function(a,b){return this.b.$1(J.kX(this.a,b))},
$aj:function(a,b){return[b]}}
H.hB.prototype={
A:function(){var u=this,t=u.b
if(t.A()){u.sbl(u.c.$1(t.gP(t)))
return!0}u.sbl(null)
return!1},
gP:function(a){return this.a},
sbl:function(a){this.a=H.E(a,H.v(this,1))},
$abc:function(a,b){return[b]}}
H.jH.prototype={
ga_:function(a){return new H.jI(J.c4(this.a),this.b,this.$ti)}}
H.jI.prototype={
A:function(){var u,t
for(u=this.a,t=this.b;u.A();)if(H.G(t.$1(u.gP(u))))return!0
return!1},
gP:function(a){var u=this.a
return u.gP(u)}}
H.ce.prototype={}
H.de.prototype={
j:function(a,b,c){H.E(c,H.aD(this,"de",0))
throw H.f(P.I("Cannot modify an unmodifiable list"))}}
H.en.prototype={}
H.fU.prototype={
i:function(a){return P.la(this)},
j:function(a,b,c){H.E(b,H.v(this,0))
H.E(c,H.v(this,1))
return H.nI()},
$iy:1}
H.fV.prototype={
gn:function(a){return this.a},
bQ:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
l:function(a,b){if(!this.bQ(0,b))return
return this.dz(b)},
dz:function(a){return this.b[H.U(a)]},
K:function(a,b){var u,t,s,r,q=this,p=H.v(q,1)
H.p(b,{func:1,ret:-1,args:[H.v(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.E(q.dz(r),p))}}}
H.j7.prototype={
ar:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.i1.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.i(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hp.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.i(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.i(t.a)+")"
return s+r+"' on '"+u+"' ("+H.i(t.a)+")"}}
H.jj.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kR.prototype={
$1:function(a){if(!!J.R(a).$ibM)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:19}
H.f1.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iaw:1}
H.cM.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
$il3:1,
gkD:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iQ.prototype={}
H.iI.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cG(u)+"'"}}
H.cI.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cI))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gH:function(a){var u,t=this.c
if(t==null)u=H.d1(this.a)
else u=typeof t!=="object"?J.c3(t):H.d1(t)
return(u^H.d1(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.i(H.d2(u))+"'")}}
H.j9.prototype={
i:function(a){return this.a}}
H.fO.prototype={
i:function(a){return this.a}}
H.ip.prototype={
i:function(a){return"RuntimeError: "+H.i(this.a)}}
H.jJ.prototype={
i:function(a){return"Assertion failed: "+P.dK(this.a)}}
H.X.prototype={
gn:function(a){return this.a},
gaX:function(a){return new H.dS(this,[H.v(this,0)])},
bQ:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.dt(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.dt(t,b)}else return s.jT(b)},
jT:function(a){var u=this.d
if(u==null)return!1
return this.cM(this.cd(u,J.c3(a)&0x3ffffff),a)>=0},
l:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bG(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bG(r,b)
s=t==null?null:t.b
return s}else return q.jU(b)},
jU:function(a){var u,t,s=this.d
if(s==null)return
u=this.cd(s,J.c3(a)&0x3ffffff)
t=this.cM(u,a)
if(t<0)return
return u[t].b},
j:function(a,b,c){var u,t,s,r,q,p,o=this
H.E(b,H.v(o,0))
H.E(c,H.v(o,1))
if(typeof b==="string"){u=o.b
o.de(u==null?o.b=o.ci():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.de(t==null?o.c=o.ci():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.ci()
r=J.c3(b)&0x3ffffff
q=o.cd(s,r)
if(q==null)o.cp(s,r,[o.cj(b,c)])
else{p=o.cM(q,b)
if(p>=0)q[p].b=c
else q.push(o.cj(b,c))}}},
K:function(a,b){var u,t,s=this
H.p(b,{func:1,ret:-1,args:[H.v(s,0),H.v(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.f(P.ca(s))
u=u.c}},
de:function(a,b,c){var u,t=this
H.E(b,H.v(t,0))
H.E(c,H.v(t,1))
u=t.bG(a,b)
if(u==null)t.cp(a,b,t.cj(b,c))
else u.b=c},
cj:function(a,b){var u=this,t=new H.hs(H.E(a,H.v(u,0)),H.E(b,H.v(u,1)))
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
cM:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.V(a[t].a,b))return t
return-1},
i:function(a){return P.la(this)},
bG:function(a,b){return a[b]},
cd:function(a,b){return a[b]},
cp:function(a,b,c){a[b]=c},
h4:function(a,b){delete a[b]},
dt:function(a,b){return this.bG(a,b)!=null},
ci:function(){var u="<non-identifier-key>",t=Object.create(null)
this.cp(t,u,t)
this.h4(t,u)
return t},
$ilY:1}
H.hs.prototype={}
H.dS.prototype={
gn:function(a){return this.a.a},
ga_:function(a){var u=this.a,t=new H.ht(u,u.r,this.$ti)
t.c=u.e
return t}}
H.ht.prototype={
gP:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.ca(t))
else{t=u.c
if(t==null){u.sd9(null)
return!1}else{u.sd9(t.a)
u.c=u.c.c
return!0}}},
sd9:function(a){this.d=H.E(a,H.v(this,0))},
$ibc:1}
H.kJ.prototype={
$1:function(a){return this.a(a)},
$S:19}
H.kK.prototype={
$2:function(a,b){return this.a(a,b)},
$S:52}
H.kL.prototype={
$1:function(a){return this.a(H.U(a))},
$S:51}
H.ho.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$im7:1,
$iob:1}
H.cY.prototype={$icY:1}
H.bS.prototype={$ibS:1,$iok:1}
H.dY.prototype={
gn:function(a){return a.length},
$iM:1,
$aM:function(){}}
H.cZ.prototype={
l:function(a,b){H.br(b,a,a.length)
return a[b]},
j:function(a,b,c){H.pr(c)
H.br(b,a,a.length)
a[b]=c},
$ace:function(){return[P.C]},
$ax:function(){return[P.C]},
$ij:1,
$aj:function(){return[P.C]},
$ib:1,
$ab:function(){return[P.C]}}
H.dZ.prototype={
j:function(a,b,c){H.ab(c)
H.br(b,a,a.length)
a[b]=c},
$ace:function(){return[P.m]},
$ax:function(){return[P.m]},
$ij:1,
$aj:function(){return[P.m]},
$ib:1,
$ab:function(){return[P.m]}}
H.hX.prototype={
l:function(a,b){H.br(b,a,a.length)
return a[b]}}
H.hY.prototype={
l:function(a,b){H.br(b,a,a.length)
return a[b]}}
H.hZ.prototype={
l:function(a,b){H.br(b,a,a.length)
return a[b]}}
H.i_.prototype={
l:function(a,b){H.br(b,a,a.length)
return a[b]}}
H.i0.prototype={
l:function(a,b){H.br(b,a,a.length)
return a[b]}}
H.e_.prototype={
gn:function(a){return a.length},
l:function(a,b){H.br(b,a,a.length)
return a[b]},
$iqA:1}
H.ck.prototype={
gn:function(a){return a.length},
l:function(a,b){H.br(b,a,a.length)
return a[b]},
$ick:1,
$iQ:1}
H.dj.prototype={}
H.dk.prototype={}
H.dl.prototype={}
H.dm.prototype={}
P.jL.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:20}
P.jK.prototype={
$1:function(a){var u,t
this.a.a=H.p(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:48}
P.jM.prototype={
$0:function(){this.a.$0()},
$S:2}
P.jN.prototype={
$0:function(){this.a.$0()},
$S:2}
P.f7.prototype={
fw:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cA(new P.kl(this,b),0),a)
else throw H.f(P.I("`setTimeout()` not found."))},
fz:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cA(new P.kk(this,a,Date.now(),b),0),a)
else throw H.f(P.I("Periodic timer."))},
$ibl:1}
P.kl.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.kk.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.fa(u,q)}s.c=r
t.d.$1(s)},
$S:2}
P.bq.prototype={
jX:function(a){if((this.c&15)!==6)return!0
return this.b.b.cU(H.p(this.d,{func:1,ret:P.a3,args:[P.P]}),a.a,P.a3,P.P)},
jS:function(a){var u=this.e,t=P.P,s={futureOr:1,type:H.v(this,1)},r=this.b.b
if(H.fp(u,{func:1,args:[P.P,P.aw]}))return H.ly(r.kp(u,a.a,a.b,null,t,P.aw),s)
else return H.ly(r.cU(H.p(u,{func:1,args:[P.P]}),a.a,null,t),s)}}
P.aJ.prototype={
eR:function(a,b,c){var u,t,s,r=H.v(this,0)
H.p(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.a_
if(u!==C.f){H.p(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.pf(b,u)}t=new P.aJ($.a_,[c])
s=b==null?1:3
this.df(new P.bq(t,s,a,b,[r,c]))
return t},
kt:function(a,b){return this.eR(a,null,b)},
df:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.h(t.c,"$ibq")
t.c=a}else{if(s===2){u=H.h(t.c,"$iaJ")
s=u.a
if(s<4){u.df(a)
return}t.a=s
t.c=u.c}P.kC(null,null,t.b,H.p(new P.jV(t,a),{func:1,ret:-1}))}},
dM:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.h(p.c,"$ibq")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.h(p.c,"$iaJ")
u=q.a
if(u<4){q.dM(a)
return}p.a=u
p.c=q.c}o.a=p.bJ(a)
P.kC(null,null,p.b,H.p(new P.jZ(o,p),{func:1,ret:-1}))}},
co:function(){var u=H.h(this.c,"$ibq")
this.c=null
return this.bJ(u)},
bJ:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
dn:function(a){var u,t,s=this,r=H.v(s,0)
H.ly(a,{futureOr:1,type:r})
u=s.$ti
if(H.lv(a,"$icQ",u,"$acQ"))if(H.lv(a,"$iaJ",u,null))P.my(a,s)
else P.ox(a,s)
else{t=s.co()
H.E(a,r)
s.a=4
s.c=a
P.dh(s,t)}},
dq:function(a,b){var u,t=this
H.h(b,"$iaw")
u=t.co()
t.a=8
t.c=new P.at(a,b)
P.dh(t,u)},
$icQ:1}
P.jV.prototype={
$0:function(){P.dh(this.a,this.b)},
$S:2}
P.jZ.prototype={
$0:function(){P.dh(this.b,this.a.a)},
$S:2}
P.jW.prototype={
$1:function(a){var u=this.a
u.a=0
u.dn(a)},
$S:20}
P.jX.prototype={
$2:function(a,b){H.h(b,"$iaw")
this.a.dq(a,b)},
$1:function(a){return this.$2(a,null)},
$S:44}
P.jY.prototype={
$0:function(){this.a.dq(this.b,this.c)},
$S:2}
P.k1.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.eQ(H.p(s.d,{func:1}),null)}catch(r){u=H.b3(r)
t=H.cD(r)
if(o.d){s=H.h(o.a.a.c,"$iat").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.h(o.a.a.c,"$iat")
else q.b=new P.at(u,t)
q.a=!0
return}if(!!J.R(n).$icQ){if(n instanceof P.aJ&&n.a>=4){if(n.a===8){s=o.b
s.b=H.h(n.c,"$iat")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.kt(new P.k2(p),null)
s.a=!1}},
$S:3}
P.k2.prototype={
$1:function(a){return this.a},
$S:43}
P.k0.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.v(s,0)
q=H.E(n.c,r)
p=H.v(s,1)
n.a.b=s.b.b.cU(H.p(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.b3(o)
t=H.cD(o)
s=n.a
s.b=new P.at(u,t)
s.a=!0}},
$S:3}
P.k_.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.h(m.a.a.c,"$iat")
r=m.c
if(H.G(r.jX(u))&&r.e!=null){q=m.b
q.b=r.jS(u)
q.a=!1}}catch(p){t=H.b3(p)
s=H.cD(p)
r=H.h(m.a.a.c,"$iat")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.at(t,s)
n.a=!0}},
$S:3}
P.ev.prototype={}
P.iL.prototype={
gn:function(a){var u,t,s=this,r={},q=new P.aJ($.a_,[P.m])
r.a=0
u=H.v(s,0)
t=H.p(new P.iN(r,s),{func:1,ret:-1,args:[u]})
H.p(new P.iO(r,q),{func:1,ret:-1})
W.ag(s.a,s.b,t,!1,u)
return q}}
P.iN.prototype={
$1:function(a){H.E(a,H.v(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.N,args:[H.v(this.b,0)]}}}
P.iO.prototype={
$0:function(){this.b.dn(this.a.a)},
$S:2}
P.d7.prototype={}
P.iM.prototype={}
P.bl.prototype={}
P.at.prototype={
i:function(a){return H.i(this.a)},
$ibM:1}
P.kt.prototype={$iqN:1}
P.kB.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.e1():s
s=this.b
if(s==null)throw H.f(t)
u=H.f(t)
u.stack=s.i(0)
throw u},
$S:2}
P.k9.prototype={
kq:function(a){var u,t,s,r=null
H.p(a,{func:1,ret:-1})
try{if(C.f===$.a_){a.$0()
return}P.mH(r,r,this,a,-1)}catch(s){u=H.b3(s)
t=H.cD(s)
P.kA(r,r,this,u,H.h(t,"$iaw"))}},
kr:function(a,b,c){var u,t,s,r=null
H.p(a,{func:1,ret:-1,args:[c]})
H.E(b,c)
try{if(C.f===$.a_){a.$1(b)
return}P.mI(r,r,this,a,b,-1,c)}catch(s){u=H.b3(s)
t=H.cD(s)
P.kA(r,r,this,u,H.h(t,"$iaw"))}},
jw:function(a,b){return new P.kb(this,H.p(a,{func:1,ret:b}),b)},
cw:function(a){return new P.ka(this,H.p(a,{func:1,ret:-1}))},
e_:function(a,b){return new P.kc(this,H.p(a,{func:1,ret:-1,args:[b]}),b)},
eQ:function(a,b){H.p(a,{func:1,ret:b})
if($.a_===C.f)return a.$0()
return P.mH(null,null,this,a,b)},
cU:function(a,b,c,d){H.p(a,{func:1,ret:c,args:[d]})
H.E(b,d)
if($.a_===C.f)return a.$1(b)
return P.mI(null,null,this,a,b,c,d)},
kp:function(a,b,c,d,e,f){H.p(a,{func:1,ret:d,args:[e,f]})
H.E(b,e)
H.E(c,f)
if($.a_===C.f)return a.$2(b,c)
return P.pg(null,null,this,a,b,c,d,e,f)}}
P.kb.prototype={
$0:function(){return this.a.eQ(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.ka.prototype={
$0:function(){return this.a.kq(this.b)},
$S:3}
P.kc.prototype={
$1:function(a){var u=this.c
return this.a.kr(this.b,H.E(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.k7.prototype={
ga_:function(a){var u=this,t=new P.eK(u,u.r,u.$ti)
t.c=u.e
return t},
gn:function(a){return this.a},
h:function(a,b){var u,t,s=this
H.E(b,H.v(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.dk(u==null?s.b=P.lm():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.dk(t==null?s.c=P.lm():t,b)}else return s.fB(0,b)},
fB:function(a,b){var u,t,s,r=this
H.E(b,H.v(r,0))
u=r.d
if(u==null)u=r.d=P.lm()
t=r.dr(b)
s=u[t]
if(s==null)u[t]=[r.c7(b)]
else{if(r.dA(s,b)>=0)return!1
s.push(r.c7(b))}return!0},
V:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.iL(this.c,b)
else return this.iK(0,b)},
iK:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.he(r,b)
t=s.dA(u,b)
if(t<0)return!1
s.dU(u.splice(t,1)[0])
return!0},
dk:function(a,b){H.E(b,H.v(this,0))
if(H.h(a[b],"$idi")!=null)return!1
a[b]=this.c7(b)
return!0},
iL:function(a,b){var u
if(a==null)return!1
u=H.h(a[b],"$idi")
if(u==null)return!1
this.dU(u)
delete a[b]
return!0},
dF:function(){this.r=1073741823&this.r+1},
c7:function(a){var u,t=this,s=new P.di(H.E(a,H.v(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.dF()
return s},
dU:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.dF()},
dr:function(a){return J.c3(a)&1073741823},
he:function(a,b){return a[this.dr(b)]},
dA:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.V(a[t].a,b))return t
return-1}}
P.di.prototype={}
P.eK.prototype={
gP:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.ca(t))
else{t=u.c
if(t==null){u.sdl(null)
return!1}else{u.sdl(H.E(t.a,H.v(u,0)))
u.c=u.c.b
return!0}}},
sdl:function(a){this.d=H.E(a,H.v(this,0))},
$ibc:1}
P.hu.prototype={$ij:1,$ib:1}
P.x.prototype={
ga_:function(a){return new H.dT(a,this.gn(a),[H.cC(this,a,"x",0)])},
J:function(a,b){return this.l(a,b)},
kv:function(a,b){var u,t=this,s=H.c([],[H.cC(t,a,"x",0)])
C.a.sn(s,t.gn(a))
for(u=0;u<t.gn(a);++u)C.a.j(s,u,t.l(a,u))
return s},
ku:function(a){return this.kv(a,!0)},
em:function(a,b,c,d){var u
H.E(d,H.cC(this,a,"x",0))
P.bW(b,c,this.gn(a))
for(u=b;u<c;++u)this.j(a,u,d)},
i:function(a){return P.l4(a,"[","]")}}
P.hx.prototype={}
P.hy.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.i(a)
t.a=u+": "
t.a+=H.i(b)},
$S:10}
P.ao.prototype={
K:function(a,b){var u,t,s=this
H.p(b,{func:1,ret:-1,args:[H.cC(s,a,"ao",0),H.cC(s,a,"ao",1)]})
for(u=J.c4(s.gaX(a));u.A();){t=u.gP(u)
b.$2(t,s.l(a,t))}},
gn:function(a){return J.aL(this.gaX(a))},
i:function(a){return P.la(a)},
$iy:1}
P.km.prototype={
j:function(a,b,c){H.E(b,H.v(this,0))
H.E(c,H.v(this,1))
throw H.f(P.I("Cannot modify unmodifiable map"))}}
P.hz.prototype={
l:function(a,b){return J.dx(this.a,b)},
j:function(a,b,c){J.kV(this.a,H.E(b,H.v(this,0)),H.E(c,H.v(this,1)))},
K:function(a,b){J.lO(this.a,H.p(b,{func:1,ret:-1,args:[H.v(this,0),H.v(this,1)]}))},
gn:function(a){return J.aL(this.a)},
i:function(a){return J.b7(this.a)},
$iy:1}
P.eo.prototype={}
P.kd.prototype={
i:function(a){return P.l4(this,"{","}")},
J:function(a,b){var u,t,s,r=this
P.md(b,"index")
for(u=P.oz(r,r.r,H.v(r,0)),t=0;u.A();){s=u.d
if(b===t)return s;++t}throw H.f(P.W(b,r,"index",null,t))},
$ij:1,
$img:1}
P.eL.prototype={}
P.fd.prototype={}
P.fK.prototype={
jZ:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bW(a0,a1,b.length)
u=$.np()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.b.G(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.kI(C.b.G(b,n))
j=H.kI(C.b.G(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.e(u,i)
h=u[i]
if(h>=0){i=C.b.U("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.a8("")
g=r.a+=C.b.u(b,s,t)
r.a=g+H.e6(m)
s=n
continue}}throw H.f(P.a6("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.u(b,s,a1)
f=g.length
if(q>=0)P.lP(b,p,a1,q,o,f)
else{e=C.d.b1(f-1,4)+1
if(e===1)throw H.f(P.a6(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.bi(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.lP(b,p,a1,q,o,d)
else{e=C.d.b1(d,4)
if(e===1)throw H.f(P.a6(c,b,a1))
if(e>1)b=C.b.bi(b,a1,a1,e===2?"==":"=")}return b},
$ac9:function(){return[[P.b,P.m],P.k]}}
P.fL.prototype={
$acb:function(){return[[P.b,P.m],P.k]}}
P.c9.prototype={}
P.cb.prototype={}
P.h7.prototype={
$ac9:function(){return[P.k,[P.b,P.m]]}}
P.jr.prototype={
gjO:function(){return C.J}}
P.jt.prototype={
cC:function(a){var u,t,s=P.bW(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.ks(u)
if(t.hc(a,0,s)!==s)t.dW(J.nv(a,s-1),0)
return new Uint8Array(u.subarray(0,H.oQ(0,t.b,u.length)))},
$acb:function(){return[P.k,[P.b,P.m]]}}
P.ks.prototype={
dW:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
hc:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.U(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.G(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dW(r,C.b.G(a,p)))s=p}else if(r<=2047){q=n.b
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
P.js.prototype={
cC:function(a){var u,t,s,r,q,p,o,n,m
H.l(a,"$ib",[P.m],"$ab")
u=P.on(!1,a,0,null)
if(u!=null)return u
t=P.bW(0,null,J.aL(a))
s=P.mK(a,0,t)
if(s>0){r=P.d8(a,0,s)
if(s===t)return r
q=new P.a8(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.a8("")
n=new P.kr(!1,q)
n.c=o
n.jB(a,p,t)
if(n.e>0){H.A(P.a6("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.e6(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$acb:function(){return[[P.b,P.m],P.k]}}
P.kr.prototype={
jB:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.l(a,"$ib",[P.m],"$ab")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.bB(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.l(a,p)
if(typeof o!=="number")return o.al()
if((o&192)!==128){n=P.a6(h+C.d.bz(o,16),a,p)
throw H.f(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.e(C.u,n)
if(u<=C.u[n]){n=P.a6("Overlong encoding of 0x"+C.d.bz(u,16),a,p-s-1)
throw H.f(n)}if(u>1114111){n=P.a6("Character outside valid Unicode range: 0x"+C.d.bz(u,16),a,p-s-1)
throw H.f(n)}if(!i.c||u!==65279)q.a+=H.e6(u)
i.c=!1}for(n=p<c;n;){m=P.mK(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.d8(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.l(a,l)
if(typeof o!=="number")return o.B()
if(o<0){j=P.a6("Negative UTF-8 code unit: -0x"+C.d.bz(-o,16),a,k-1)
throw H.f(j)}else{if((o&224)===192){u=o&31
t=1
s=1
continue $label0$0}if((o&240)===224){u=o&15
t=2
s=2
continue $label0$0}if((o&248)===240&&o<245){u=o&7
t=3
s=3
continue $label0$0}j=P.a6(h+C.d.bz(o,16),a,k-1)
throw H.f(j)}}break $label0$0}if(t>0){i.d=u
i.e=t
i.f=s}}}
P.a3.prototype={}
P.az.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.az&&this.a===b.a&&!0},
gH:function(a){var u=this.a
return(u^C.d.bc(u,30))&1073741823},
i:function(a){var u=this,t=P.nJ(H.o7(u)),s=P.dF(H.o5(u)),r=P.dF(H.o1(u)),q=P.dF(H.o2(u)),p=P.dF(H.o4(u)),o=P.dF(H.o6(u)),n=P.nK(H.o3(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.C.prototype={}
P.aO.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.aO&&this.a===b.a},
gH:function(a){return C.d.gH(this.a)},
i:function(a){var u,t,s,r=new P.h5(),q=this.a
if(q<0)return"-"+new P.aO(0-q).i(0)
u=r.$1(C.d.a7(q,6e7)%60)
t=r.$1(C.d.a7(q,1e6)%60)
s=new P.h4().$1(q%1e6)
return""+C.d.a7(q,36e8)+":"+H.i(u)+":"+H.i(t)+"."+H.i(s)}}
P.h4.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:26}
P.h5.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:26}
P.bM.prototype={}
P.fE.prototype={
i:function(a){return"Assertion failed"}}
P.e1.prototype={
i:function(a){return"Throw of null."}}
P.b8.prototype={
gca:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc9:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gca()+o+u
if(!q.a)return t
s=q.gc9()
r=P.dK(q.b)
return t+s+": "+r}}
P.bV.prototype={
gca:function(){return"RangeError"},
gc9:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.i(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.i(s)
else if(t>s)u=": Not in range "+H.i(s)+".."+H.i(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.i(s)}return u}}
P.hl.prototype={
gca:function(){return"RangeError"},
gc9:function(){var u,t=H.ab(this.b)
if(typeof t!=="number")return t.B()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.i(u)},
gn:function(a){return this.f}}
P.jk.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.jh.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.iG.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fT.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dK(u)+"."}}
P.i5.prototype={
i:function(a){return"Out of Memory"},
$ibM:1}
P.ef.prototype={
i:function(a){return"Stack Overflow"},
$ibM:1}
P.h_.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eD.prototype={
i:function(a){return"Exception: "+this.a}}
P.hh.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.b.u(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.b.G(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.b.U(f,q)
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
k=""}j=C.b.u(f,m,n)
return h+l+j+k+"\n"+C.b.k(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.i(g)+")"):h}}
P.m.prototype={}
P.j.prototype={
gn:function(a){var u,t=this.ga_(this)
for(u=0;t.A();)++u
return u},
J:function(a,b){var u,t,s
P.md(b,"index")
for(u=this.ga_(this),t=0;u.A();){s=u.gP(u)
if(b===t)return s;++t}throw H.f(P.W(b,this,"index",null,t))},
i:function(a){return P.nN(this,"(",")")}}
P.bc.prototype={}
P.b.prototype={$ij:1}
P.y.prototype={}
P.N.prototype={
gH:function(a){return P.P.prototype.gH.call(this,this)},
i:function(a){return"null"}}
P.ac.prototype={}
P.P.prototype={constructor:P.P,$iP:1,
q:function(a,b){return this===b},
gH:function(a){return H.d1(this)},
i:function(a){return"Instance of '"+H.i(H.d2(this))+"'"},
toString:function(){return this.i(this)}}
P.aw.prototype={}
P.k.prototype={$im7:1}
P.a8.prototype={
gn:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$iqo:1}
P.jp.prototype={
$2:function(a,b){var u,t,s,r=P.k
H.l(a,"$iy",[r,r],"$ay")
H.U(b)
u=J.lz(b).eu(b,"=")
if(u===-1){if(b!=="")J.kV(a,P.lq(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.u(b,0,u)
s=C.b.av(b,u+1)
r=this.a
J.kV(a,P.lq(t,0,t.length,r,!0),P.lq(s,0,s.length,r,!0))}return a},
$S:42}
P.jm.prototype={
$2:function(a,b){throw H.f(P.a6("Illegal IPv4 address, "+a,this.a,b))},
$S:41}
P.jn.prototype={
$2:function(a,b){throw H.f(P.a6("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:40}
P.jo.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.cE(C.b.u(this.b,a,b),null,16)
if(typeof u!=="number")return u.B()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:39}
P.cu.prototype={
geX:function(){return this.b},
gcL:function(a){var u=this.c
if(u==null)return""
if(C.b.am(u,"["))return C.b.u(u,1,u.length-1)
return u},
gbW:function(a){var u=this.d
if(u==null)return P.mA(this.a)
return u},
gcT:function(a){var u=this.f
return u==null?"":u},
geo:function(){var u=this.r
return u==null?"":u},
eN:function(a,b){var u,t,s,r,q,p,o,n,m=this
H.l(b,"$iy",[P.k,null],"$ay")
u=m.a
t=u==="file"
s=m.b
r=m.d
q=m.c
if(!(q!=null))q=s.length!==0||r!=null||t?"":null
p=m.e
if(!t)o=q!=null&&p.length!==0
else o=!0
if(o&&!C.b.am(p,"/"))p="/"+p
n=P.lo(null,0,0,b)
return new P.cu(u,s,q,r,p,n,m.r)},
geM:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.k
s.siI(new P.eo(P.mo(u==null?"":u),[t,t]))}return s.Q},
gep:function(){return this.c!=null},
ges:function(){return this.f!=null},
geq:function(){return this.r!=null},
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
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.R(b).$ilh)if(s.a==b.gc0())if(s.c!=null===b.gep())if(s.b==b.geX())if(s.gcL(s)==b.gcL(b))if(s.gbW(s)==b.gbW(b))if(s.e===b.geG(b)){u=s.f
t=u==null
if(!t===b.ges()){if(t)u=""
if(u===b.gcT(b)){u=s.r
t=u==null
if(!t===b.geq()){if(t)u=""
u=u===b.geo()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gH:function(a){var u=this.z
return u==null?this.z=C.b.gH(this.i(0)):u},
siI:function(a){var u=P.k
this.Q=H.l(a,"$iy",[u,u],"$ay")},
$ilh:1,
gc0:function(){return this.a},
geG:function(a){return this.e}}
P.kn.prototype={
$1:function(a){throw H.f(P.a6("Invalid port",this.a,this.b+1))},
$S:37}
P.ko.prototype={
$1:function(a){return P.fe(C.T,a,C.h,!1)},
$S:35}
P.kq.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.i(P.fe(C.i,a,C.h,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.i(P.fe(C.i,b,C.h,!0))}},
$S:27}
P.kp.prototype={
$2:function(a,b){var u,t
H.U(a)
if(b==null||typeof b==="string")this.a.$2(a,H.U(b))
else for(u=J.c4(H.mY(b,"$ij")),t=this.a;u.A();)t.$2(a,H.U(u.gP(u)))},
$S:34}
P.jl.prototype={
geW:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.e(o,0)
u=q.a
o=o[0]+1
t=C.b.bT(u,"?",o)
s=u.length
if(t>=0){r=P.ds(u,t+1,s,C.o,!1)
s=t}else r=p
return q.c=new P.jR("data",p,p,p,P.ds(u,o,s,C.x,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.e(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.kv.prototype={
$1:function(a){return new Uint8Array(96)},
$S:33}
P.ku.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.e(u,a)
u=u[a]
J.nw(u,0,96,b)
return u},
$S:32}
P.kw.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.b.G(b,s)^96
if(r>=t)return H.e(a,r)
a[r]=c}}}
P.kx.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.b.G(b,0),t=C.b.G(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.e(a,r)
a[r]=c}}}
P.ke.prototype={
gep:function(){return this.c>0},
ger:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.m()
t=this.e
if(typeof t!=="number")return H.d(t)
t=u+1<t
u=t}else u=!1
return u},
ges:function(){var u=this.f
if(typeof u!=="number")return u.B()
return u<this.r},
geq:function(){return this.r<this.a.length},
gdD:function(){return this.b===4&&C.b.am(this.a,"http")},
gdE:function(){return this.b===5&&C.b.am(this.a,"https")},
gc0:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gdD())q=t.x="http"
else if(t.gdE()){t.x="https"
q="https"}else if(q===4&&C.b.am(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.am(t.a,r)){t.x=r
q=r}else{q=C.b.u(t.a,0,q)
t.x=q}return q},
geX:function(){var u=this.c,t=this.b+3
return u>t?C.b.u(this.a,t,u-1):""},
gcL:function(a){var u=this.c
return u>0?C.b.u(this.a,u,this.d):""},
gbW:function(a){var u,t=this
if(t.ger()){u=t.d
if(typeof u!=="number")return u.m()
return P.cE(C.b.u(t.a,u+1,t.e),null,null)}if(t.gdD())return 80
if(t.gdE())return 443
return 0},
geG:function(a){return C.b.u(this.a,this.e,this.f)},
gcT:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.B()
return u<t?C.b.u(this.a,u+1,t):""},
geo:function(){var u=this.r,t=this.a
return u<t.length?C.b.av(t,u+1):""},
geM:function(){var u=this,t=u.f
if(typeof t!=="number")return t.B()
if(t>=u.r)return C.U
t=P.k
return new P.eo(P.mo(u.gcT(u)),[t,t])},
eN:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.l(b,"$iy",[P.k,null],"$ay")
u=k.gc0()
t=u==="file"
s=k.c
r=s>0?C.b.u(k.a,k.b+3,s):""
q=k.ger()?k.gbW(k):j
s=k.c
if(s>0)p=C.b.u(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.u(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.am(o,"/"))o="/"+o
m=P.lo(j,0,0,b)
n=k.r
l=n<s.length?C.b.av(s,n+1):j
return new P.cu(u,r,p,q,o,m,l)},
gH:function(a){var u=this.y
return u==null?this.y=C.b.gH(this.a):u},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.R(b).$ilh&&this.a===b.i(0)},
i:function(a){return this.a},
$ilh:1}
P.jR.prototype={}
W.r.prototype={}
W.fA.prototype={
gn:function(a){return a.length}}
W.fC.prototype={
i:function(a){return String(a)}}
W.fD.prototype={
i:function(a){return String(a)}}
W.c6.prototype={$ic6:1}
W.c7.prototype={
cZ:function(a,b,c){if(c!=null)return a.getContext(b,P.pn(c))
return a.getContext(b)},
f0:function(a,b){return this.cZ(a,b,null)},
$ic7:1}
W.cL.prototype={$icL:1}
W.bJ.prototype={
gn:function(a){return a.length}}
W.cN.prototype={$icN:1}
W.fW.prototype={
gn:function(a){return a.length}}
W.S.prototype={$iS:1}
W.cO.prototype={
gn:function(a){return a.length}}
W.fX.prototype={}
W.ba.prototype={}
W.bb.prototype={}
W.fY.prototype={
gn:function(a){return a.length}}
W.fZ.prototype={
gn:function(a){return a.length}}
W.h0.prototype={
gn:function(a){return a.length}}
W.dG.prototype={$idG:1}
W.h1.prototype={
i:function(a){return String(a)}}
W.dH.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.l(c,"$iap",[P.ac],"$aap")
throw H.f(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[[P.ap,P.ac]]},
$ax:function(){return[[P.ap,P.ac]]},
$ij:1,
$aj:function(){return[[P.ap,P.ac]]},
$ib:1,
$ab:function(){return[[P.ap,P.ac]]},
$aF:function(){return[[P.ap,P.ac]]}}
W.dI.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(this.gb0(a))+" x "+H.i(this.gaW(a))},
q:function(a,b){var u
if(b==null)return!1
u=J.R(b)
if(!u.$iap)return!1
return a.left===u.gaf(b)&&a.top===u.gbX(b)&&this.gb0(a)===u.gb0(b)&&this.gaW(a)===u.gaW(b)},
gH:function(a){return W.mz(C.e.gH(a.left),C.e.gH(a.top),C.e.gH(this.gb0(a)),C.e.gH(this.gaW(a)))},
ge0:function(a){return a.bottom},
gaW:function(a){return a.height},
gaf:function(a){return a.left},
gah:function(a){return a.right},
gbX:function(a){return a.top},
gb0:function(a){return a.width},
$iap:1,
$aap:function(){return[P.ac]}}
W.h2.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.U(c)
throw H.f(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[P.k]},
$ax:function(){return[P.k]},
$ij:1,
$aj:function(){return[P.k]},
$ib:1,
$ab:function(){return[P.k]},
$aF:function(){return[P.k]}}
W.h3.prototype={
gn:function(a){return a.length}}
W.jP.prototype={
gn:function(a){return this.b.length},
l:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.e(u,b)
return H.h(u[b],"$ia5")},
j:function(a,b,c){var u
H.h(c,"$ia5")
u=this.b
if(b<0||b>=u.length)return H.e(u,b)
this.a.replaceChild(c,u[b])},
h:function(a,b){this.a.appendChild(b)
return b},
ga_:function(a){var u=this.ku(this)
return new J.av(u,u.length,[H.v(u,0)])},
$ax:function(){return[W.a5]},
$aj:function(){return[W.a5]},
$ab:function(){return[W.a5]}}
W.a5.prototype={
ge2:function(a){return new W.jP(a,a.children)},
ge3:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.B()
if(s<0)s=-s*0
if(typeof r!=="number")return r.B()
if(r<0)r=-r*0
return new P.ap(u,t,s,r,[P.ac])},
i:function(a){return a.localName},
$ia5:1}
W.o.prototype={$io:1}
W.n.prototype={
jo:function(a,b,c,d){H.p(c,{func:1,args:[W.o]})
if(c!=null)this.fD(a,b,c,!1)},
fD:function(a,b,c,d){return a.addEventListener(b,H.cA(H.p(c,{func:1,args:[W.o]}),1),!1)},
$in:1}
W.aE.prototype={$iaE:1}
W.cP.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.h(c,"$iaE")
throw H.f(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aE]},
$ax:function(){return[W.aE]},
$ij:1,
$aj:function(){return[W.aE]},
$ib:1,
$ab:function(){return[W.aE]},
$icP:1,
$aF:function(){return[W.aE]}}
W.hc.prototype={
gn:function(a){return a.length}}
W.hg.prototype={
gn:function(a){return a.length}}
W.aP.prototype={$iaP:1}
W.hk.prototype={
gn:function(a){return a.length}}
W.cf.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.h(c,"$iK")
throw H.f(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.K]},
$ax:function(){return[W.K]},
$ij:1,
$aj:function(){return[W.K]},
$ib:1,
$ab:function(){return[W.K]},
$icf:1,
$aF:function(){return[W.K]}}
W.bs.prototype={$ibs:1,
ge5:function(a){return a.data}}
W.cS.prototype={$icS:1}
W.bf.prototype={$ibf:1}
W.hv.prototype={
i:function(a){return String(a)}}
W.hQ.prototype={
gn:function(a){return a.length}}
W.cW.prototype={$icW:1}
W.hR.prototype={
l:function(a,b){return P.bz(a.get(H.U(b)))},
K:function(a,b){var u,t
H.p(b,{func:1,ret:-1,args:[P.k,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bz(t.value[1]))}},
gaX:function(a){var u=H.c([],[P.k])
this.K(a,new W.hS(u))
return u},
gn:function(a){return a.size},
j:function(a,b,c){throw H.f(P.I("Not supported"))},
$aao:function(){return[P.k,null]},
$iy:1,
$ay:function(){return[P.k,null]}}
W.hS.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.hT.prototype={
l:function(a,b){return P.bz(a.get(H.U(b)))},
K:function(a,b){var u,t
H.p(b,{func:1,ret:-1,args:[P.k,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bz(t.value[1]))}},
gaX:function(a){var u=H.c([],[P.k])
this.K(a,new W.hU(u))
return u},
gn:function(a){return a.size},
j:function(a,b,c){throw H.f(P.I("Not supported"))},
$aao:function(){return[P.k,null]},
$iy:1,
$ay:function(){return[P.k,null]}}
W.hU.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.aR.prototype={$iaR:1}
W.hV.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.h(c,"$iaR")
throw H.f(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aR]},
$ax:function(){return[W.aR]},
$ij:1,
$aj:function(){return[W.aR]},
$ib:1,
$ab:function(){return[W.aR]},
$aF:function(){return[W.aR]}}
W.ak.prototype={$iak:1}
W.jO.prototype={
j:function(a,b,c){var u,t
H.h(c,"$iK")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.e(t,b)
u.replaceChild(c,t[b])},
ga_:function(a){var u=this.a.childNodes
return new W.dL(u,u.length,[H.cC(C.W,u,"F",0)])},
gn:function(a){return this.a.childNodes.length},
l:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
$ax:function(){return[W.K]},
$aj:function(){return[W.K]},
$ab:function(){return[W.K]}}
W.K.prototype={
kn:function(a,b){var u,t
try{u=a.parentNode
J.nt(u,b,a)}catch(t){H.b3(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.f7(a):u},
iN:function(a,b,c){return a.replaceChild(b,c)},
$iK:1}
W.d_.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.h(c,"$iK")
throw H.f(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.K]},
$ax:function(){return[W.K]},
$ij:1,
$aj:function(){return[W.K]},
$ib:1,
$ab:function(){return[W.K]},
$aF:function(){return[W.K]}}
W.aS.prototype={$iaS:1,
gn:function(a){return a.length}}
W.i8.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.h(c,"$iaS")
throw H.f(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aS]},
$ax:function(){return[W.aS]},
$ij:1,
$aj:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$aF:function(){return[W.aS]}}
W.im.prototype={
l:function(a,b){return P.bz(a.get(H.U(b)))},
K:function(a,b){var u,t
H.p(b,{func:1,ret:-1,args:[P.k,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bz(t.value[1]))}},
gaX:function(a){var u=H.c([],[P.k])
this.K(a,new W.io(u))
return u},
gn:function(a){return a.size},
j:function(a,b,c){throw H.f(P.I("Not supported"))},
$aao:function(){return[P.k,null]},
$iy:1,
$ay:function(){return[P.k,null]}}
W.io.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.iq.prototype={
gn:function(a){return a.length}}
W.aV.prototype={$iaV:1}
W.iD.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.h(c,"$iaV")
throw H.f(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aV]},
$ax:function(){return[W.aV]},
$ij:1,
$aj:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aF:function(){return[W.aV]}}
W.aW.prototype={$iaW:1}
W.iE.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.h(c,"$iaW")
throw H.f(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aW]},
$ax:function(){return[W.aW]},
$ij:1,
$aj:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aF:function(){return[W.aW]}}
W.aX.prototype={$iaX:1,
gn:function(a){return a.length}}
W.iJ.prototype={
l:function(a,b){return a.getItem(H.U(b))},
j:function(a,b,c){a.setItem(b,c)},
K:function(a,b){var u,t
H.p(b,{func:1,ret:-1,args:[P.k,P.k]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gaX:function(a){var u=H.c([],[P.k])
this.K(a,new W.iK(u))
return u},
gn:function(a){return a.length},
$aao:function(){return[P.k,P.k]},
$iy:1,
$ay:function(){return[P.k,P.k]}}
W.iK.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:27}
W.aG.prototype={$iaG:1}
W.aZ.prototype={$iaZ:1}
W.aH.prototype={$iaH:1}
W.iU.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.h(c,"$iaH")
throw H.f(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aH]},
$ax:function(){return[W.aH]},
$ij:1,
$aj:function(){return[W.aH]},
$ib:1,
$ab:function(){return[W.aH]},
$aF:function(){return[W.aH]}}
W.iV.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.h(c,"$iaZ")
throw H.f(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aZ]},
$ax:function(){return[W.aZ]},
$ij:1,
$aj:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$aF:function(){return[W.aZ]}}
W.j0.prototype={
gn:function(a){return a.length}}
W.b_.prototype={$ib_:1}
W.b0.prototype={$ib0:1}
W.j4.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.h(c,"$ib_")
throw H.f(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.b_]},
$ax:function(){return[W.b_]},
$ij:1,
$aj:function(){return[W.b_]},
$ib:1,
$ab:function(){return[W.b_]},
$aF:function(){return[W.b_]}}
W.j5.prototype={
gn:function(a){return a.length}}
W.bZ.prototype={}
W.jq.prototype={
i:function(a){return String(a)}}
W.jF.prototype={
gn:function(a){return a.length}}
W.bp.prototype={
gjF:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.I("deltaY is not supported"))},
gjE:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.I("deltaX is not supported"))},
$ibp:1}
W.dg.prototype={
iO:function(a,b){return a.requestAnimationFrame(H.cA(H.p(b,{func:1,ret:-1,args:[P.ac]}),1))},
h7:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.jQ.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.h(c,"$iS")
throw H.f(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.S]},
$ax:function(){return[W.S]},
$ij:1,
$aj:function(){return[W.S]},
$ib:1,
$ab:function(){return[W.S]},
$aF:function(){return[W.S]}}
W.ey.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
q:function(a,b){var u
if(b==null)return!1
u=J.R(b)
if(!u.$iap)return!1
return a.left===u.gaf(b)&&a.top===u.gbX(b)&&a.width===u.gb0(b)&&a.height===u.gaW(b)},
gH:function(a){return W.mz(C.e.gH(a.left),C.e.gH(a.top),C.e.gH(a.width),C.e.gH(a.height))},
gaW:function(a){return a.height},
gb0:function(a){return a.width}}
W.k3.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.h(c,"$iaP")
throw H.f(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aP]},
$ax:function(){return[W.aP]},
$ij:1,
$aj:function(){return[W.aP]},
$ib:1,
$ab:function(){return[W.aP]},
$aF:function(){return[W.aP]}}
W.eQ.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.h(c,"$iK")
throw H.f(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.K]},
$ax:function(){return[W.K]},
$ij:1,
$aj:function(){return[W.K]},
$ib:1,
$ab:function(){return[W.K]},
$aF:function(){return[W.K]}}
W.kf.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.h(c,"$iaX")
throw H.f(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aX]},
$ax:function(){return[W.aX]},
$ij:1,
$aj:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aF:function(){return[W.aX]}}
W.kj.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.h(c,"$iaG")
throw H.f(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aG]},
$ax:function(){return[W.aG]},
$ij:1,
$aj:function(){return[W.aG]},
$ib:1,
$ab:function(){return[W.aG]},
$aF:function(){return[W.aG]}}
W.jS.prototype={}
W.ll.prototype={}
W.jT.prototype={}
W.jU.prototype={
$1:function(a){return this.a.$1(H.h(a,"$io"))},
$S:31}
W.F.prototype={
ga_:function(a){return new W.dL(a,this.gn(a),[H.cC(this,a,"F",0)])}}
W.dL.prototype={
A:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sdB(J.dx(u.a,t))
u.c=t
return!0}u.sdB(null)
u.c=s
return!1},
gP:function(a){return this.d},
sdB:function(a){this.d=H.E(a,H.v(this,0))},
$ibc:1}
W.ex.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eR.prototype={}
W.eS.prototype={}
W.eV.prototype={}
W.eW.prototype={}
W.eX.prototype={}
W.dn.prototype={}
W.dp.prototype={}
W.eY.prototype={}
W.eZ.prototype={}
W.f2.prototype={}
W.f5.prototype={}
W.f6.prototype={}
W.dq.prototype={}
W.dr.prototype={}
W.f8.prototype={}
W.f9.prototype={}
W.ff.prototype={}
W.fg.prototype={}
W.fh.prototype={}
W.fi.prototype={}
W.fj.prototype={}
W.fk.prototype={}
W.fl.prototype={}
W.fm.prototype={}
W.fn.prototype={}
W.fo.prototype={}
P.kg.prototype={
en:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
cX:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.R(a)
if(!!u.$iaz)return new Date(a.a)
if(!!u.$iob)throw H.f(P.ji("structured clone of RegExp"))
if(!!u.$iaE)return a
if(!!u.$ic6)return a
if(!!u.$icP)return a
if(!!u.$ibs)return a
if(!!u.$icY||!!u.$ibS||!!u.$icW)return a
if(!!u.$iy){t=q.en(a)
s=q.b
if(t>=s.length)return H.e(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.j(s,t,r)
u.K(a,new P.ki(p,q))
return p.a}if(!!u.$ib){t=q.en(a)
p=q.b
if(t>=p.length)return H.e(p,t)
r=p[t]
if(r!=null)return r
return q.jC(a,t)}throw H.f(P.ji("structured clone of other type"))},
jC:function(a,b){var u,t=J.bB(a),s=t.gn(a),r=new Array(s)
C.a.j(this.b,b,r)
for(u=0;u<s;++u)C.a.j(r,u,this.cX(t.l(a,u)))
return r}}
P.ki.prototype={
$2:function(a,b){this.a.a[a]=this.b.cX(b)},
$S:10}
P.fc.prototype={$ibs:1,
ge5:function(a){return this.a}}
P.kD.prototype={
$2:function(a,b){this.a[a]=b},
$S:10}
P.kh.prototype={}
P.hd.prototype={
gbH:function(){var u=this.b,t=H.aD(u,"x",0),s=W.a5
return new H.hA(new H.jH(u,H.p(new P.he(),{func:1,ret:P.a3,args:[t]}),[t]),H.p(new P.hf(),{func:1,ret:s,args:[t]}),[t,s])},
j:function(a,b,c){var u
H.h(c,"$ia5")
u=this.gbH()
J.nx(u.b.$1(J.kX(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gn:function(a){return J.aL(this.gbH().a)},
l:function(a,b){var u=this.gbH()
return u.b.$1(J.kX(u.a,b))},
ga_:function(a){var u=P.l9(this.gbH(),!1,W.a5)
return new J.av(u,u.length,[H.v(u,0)])},
$ax:function(){return[W.a5]},
$aj:function(){return[W.a5]},
$ab:function(){return[W.a5]}}
P.he.prototype={
$1:function(a){return!!J.R(H.h(a,"$iK")).$ia5},
$S:29}
P.hf.prototype={
$1:function(a){return H.t(H.h(a,"$iK"),"$ia5")},
$S:53}
P.k4.prototype={
jY:function(a){if(a<=0||a>4294967296)throw H.f(P.oa("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}
P.k8.prototype={
gah:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.d(t)
return H.E(u+t,H.v(this,0))},
ge0:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.d(t)
return H.E(u+t,H.v(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.i(u.a)+", "+H.i(u.b)+") "+H.i(u.c)+" x "+H.i(u.d)},
q:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.R(b)
if(!!u.$iap){t=p.a
if(t==u.gaf(b)){s=p.b
if(s==u.gbX(b)){r=p.c
if(typeof t!=="number")return t.m()
if(typeof r!=="number")return H.d(r)
q=H.v(p,0)
if(H.E(t+r,q)===u.gah(b)){t=p.d
if(typeof s!=="number")return s.m()
if(typeof t!=="number")return H.d(t)
u=H.E(s+t,q)===u.ge0(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gH:function(a){var u,t=this,s=t.a,r=J.c3(s),q=t.b,p=J.c3(q),o=t.c
if(typeof s!=="number")return s.m()
if(typeof o!=="number")return H.d(o)
u=H.v(t,0)
o=C.d.gH(H.E(s+o,u))
s=t.d
if(typeof q!=="number")return q.m()
if(typeof s!=="number")return H.d(s)
u=C.d.gH(H.E(q+s,u))
return P.oy(P.k6(P.k6(P.k6(P.k6(0,r),p),o),u))}}
P.ap.prototype={
gaf:function(a){return this.a},
gbX:function(a){return this.b},
gb0:function(a){return this.c},
gaW:function(a){return this.d}}
P.bg.prototype={$ibg:1}
P.hr.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){H.h(c,"$ibg")
throw H.f(P.I("Cannot assign element of immutable List."))},
J:function(a,b){return this.l(a,b)},
$ax:function(){return[P.bg]},
$ij:1,
$aj:function(){return[P.bg]},
$ib:1,
$ab:function(){return[P.bg]},
$aF:function(){return[P.bg]}}
P.bj.prototype={$ibj:1}
P.i2.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){H.h(c,"$ibj")
throw H.f(P.I("Cannot assign element of immutable List."))},
J:function(a,b){return this.l(a,b)},
$ax:function(){return[P.bj]},
$ij:1,
$aj:function(){return[P.bj]},
$ib:1,
$ab:function(){return[P.bj]},
$aF:function(){return[P.bj]}}
P.ia.prototype={
gn:function(a){return a.length}}
P.iP.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){H.U(c)
throw H.f(P.I("Cannot assign element of immutable List."))},
J:function(a,b){return this.l(a,b)},
$ax:function(){return[P.k]},
$ij:1,
$aj:function(){return[P.k]},
$ib:1,
$ab:function(){return[P.k]},
$aF:function(){return[P.k]}}
P.q.prototype={
ge2:function(a){return new P.hd(a,new W.jO(a))}}
P.bm.prototype={$ibm:1}
P.j6.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){H.h(c,"$ibm")
throw H.f(P.I("Cannot assign element of immutable List."))},
J:function(a,b){return this.l(a,b)},
$ax:function(){return[P.bm]},
$ij:1,
$aj:function(){return[P.bm]},
$ib:1,
$ab:function(){return[P.bm]},
$aF:function(){return[P.bm]}}
P.eI.prototype={}
P.eJ.prototype={}
P.eT.prototype={}
P.eU.prototype={}
P.f3.prototype={}
P.f4.prototype={}
P.fa.prototype={}
P.fb.prototype={}
P.Q.prototype={$ij:1,
$aj:function(){return[P.m]},
$ib:1,
$ab:function(){return[P.m]},
$iok:1}
P.fG.prototype={
gn:function(a){return a.length}}
P.fH.prototype={
l:function(a,b){return P.bz(a.get(H.U(b)))},
K:function(a,b){var u,t
H.p(b,{func:1,ret:-1,args:[P.k,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bz(t.value[1]))}},
gaX:function(a){var u=H.c([],[P.k])
this.K(a,new P.fI(u))
return u},
gn:function(a){return a.size},
j:function(a,b,c){throw H.f(P.I("Not supported"))},
$aao:function(){return[P.k,null]},
$iy:1,
$ay:function(){return[P.k,null]}}
P.fI.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
P.fJ.prototype={
gn:function(a){return a.length}}
P.c5.prototype={}
P.i3.prototype={
gn:function(a){return a.length}}
P.ew.prototype={}
P.dA.prototype={$idA:1}
P.e7.prototype={$ie7:1}
P.cn.prototype={
ks:function(a,b,c,d,e,f,g){var u,t=J.R(g)
if(!!t.$ibs)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.po(g))
return}if(!!t.$icS)t=!0
else t=!1
if(t){this.j4(a,b,c,d,e,f,g)
return}throw H.f(P.dy("Incorrect number or type of arguments"))},
j4:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
ab:function(a,b,c){return a.uniform1f(b,c)},
bZ:function(a,b,c){return a.uniform1i(b,c)},
a0:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
eT:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
eU:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eV:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$icn:1}
P.eb.prototype={$ieb:1}
P.eh.prototype={$ieh:1}
P.em.prototype={$iem:1}
P.iF.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return P.bz(a.item(b))},
j:function(a,b,c){H.h(c,"$iy")
throw H.f(P.I("Cannot assign element of immutable List."))},
J:function(a,b){return this.l(a,b)},
$ax:function(){return[[P.y,,,]]},
$ij:1,
$aj:function(){return[[P.y,,,]]},
$ib:1,
$ab:function(){return[[P.y,,,]]},
$aF:function(){return[[P.y,,,]]}}
P.f_.prototype={}
P.f0.prototype={}
L.i4.prototype={}
B.h9.prototype={
ao:function(a,b){var u,t,s,r,q,p,o,n=this,m=new B.aT(a,b),l=n.c.p(0,m).p(0,$.lI().k(0,a+b)),k=l.a,j=l.b,i=2-k*k-j*j
if(i>0){u=i*i
t=n.e
s=n.b.m(0,m)
r=n.a
q=r[C.e.aA(s.a)&255]
s=C.e.aA(s.b)
if(typeof q!=="number")return q.m()
s=r[q+s&255]
if(typeof s!=="number")return s.al()
p=(s&14)>>>1
s=$.n8()
if(p>=8)return H.e(s,p)
o=s[p]
n.e=t+u*u*(o.a*k+o.b*j)}}}
B.aT.prototype={
m:function(a,b){return new B.aT(this.a+b.a,this.b+b.b)},
p:function(a,b){return new B.aT(this.a-b.a,this.b-b.b)},
k:function(a,b){return new B.aT(this.a*b,this.b*b)},
i:function(a){return H.i(this.a)+", "+H.i(this.b)}}
O.a0.prototype={
bD:function(a){var u=this
u.shm(H.c([],[a]))
u.sdK(null)
u.sdH(null)
u.sdL(null)},
c1:function(a,b,c){var u=this,t=H.aD(u,"a0",0)
H.p(b,{func:1,ret:P.a3,args:[[P.j,t]]})
t={func:1,ret:-1,args:[P.m,[P.j,t]]}
H.p(a,t)
H.p(c,t)
u.sdK(b)
u.sdH(a)
u.sdL(c)},
bC:function(a,b){return this.c1(a,null,b)},
bm:function(a){var u
H.l(a,"$ij",[H.aD(this,"a0",0)],"$aj")
u=this.b
if(u!=null)return u.$1(a)
return!0},
dG:function(a,b){var u
H.l(b,"$ij",[H.aD(this,"a0",0)],"$aj")
u=this.c
if(u!=null)u.$2(a,b)},
gn:function(a){return this.a.length},
ga_:function(a){var u=this.a
return new J.av(u,u.length,[H.v(u,0)])},
J:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.aD(s,"a0",0)
H.E(b,r)
r=[r]
if(H.G(s.bm(H.c([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.dG(t,H.c([b],r))}},
aP:function(a,b){var u,t,s=this
H.l(b,"$ij",[H.aD(s,"a0",0)],"$aj")
if(H.G(s.bm(b))){u=s.a
t=u.length
C.a.aP(u,b)
s.dG(t,b)}},
shm:function(a){this.a=H.l(a,"$ib",[H.aD(this,"a0",0)],"$ab")},
sdK:function(a){this.b=H.p(a,{func:1,ret:P.a3,args:[[P.j,H.aD(this,"a0",0)]]})},
sdH:function(a){this.c=H.p(a,{func:1,ret:-1,args:[P.m,[P.j,H.aD(this,"a0",0)]]})},
sdL:function(a){H.p(a,{func:1,ret:-1,args:[P.m,[P.j,H.aD(this,"a0",0)]]})},
$ij:1}
O.cV.prototype={
gn:function(a){return this.a.length},
gt:function(){var u=this.b
return u==null?this.b=D.O():u},
b2:function(){var u=this.b
if(u!=null)u.E(null)},
ga8:function(a){var u=this.a
if(u.length>0)return C.a.gaY(u)
else return V.cj()},
eK:function(a){var u=this.a
if(a==null)C.a.h(u,V.cj())
else C.a.h(u,a)
this.b2()},
cS:function(){var u=this.a
if(u.length>0){u.pop()
this.b2()}},
scf:function(a){this.a=H.l(a,"$ib",[V.au],"$ab")}}
E.fM.prototype={}
E.a1.prototype={
di:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.av(u,u.length,[H.v(u,0)]);u.A();){t=u.d
if(t.f==null)t.di()}},
sd0:function(a){var u,t,s=this,r=s.d
if(r!=a){s.c=null
s.d=a
s.e=null
if(r!=null)r.gt().V(0,s.gbV())
u=s.d
if(u!=null)u.gt().h(0,s.gbV())
t=new D.L("shapeBuilder",r,s.d,[F.d5])
t.b=!0
s.as(t)}},
ai:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aB(0,b,s):null
if(!J.V(q,s.x)){u=s.x
s.x=q
t=new D.L("matrix",u,q,[V.au])
t.b=!0
s.as(t)}r=s.f
if(r!=null)r.ai(0,b)
for(r=s.y.a,r=new J.av(r,r.length,[H.v(r,0)]);r.A();)r.d.ai(0,b)},
bh:function(a){var u,t,s,r=this
if(!r.b)return
u=a.dx
t=r.x
u.toString
if(t==null)C.a.h(u.a,u.ga8(u))
else C.a.h(u.a,t.k(0,u.ga8(u)))
u.b2()
a.eL(r.f)
u=a.dy
s=(u&&C.a).gaY(u)
if(s!=null&&r.d!=null)s.km(a,r)
for(u=r.y.a,u=new J.av(u,u.length,[H.v(u,0)]);u.A();)u.d.bh(a)
a.eI()
a.dx.cS()},
as:function(a){var u=this.z
if(u!=null)u.E(a)},
ag:function(){return this.as(null)},
eD:function(a){H.h(a,"$iw")
this.e=null
this.as(a)},
k9:function(){return this.eD(null)},
eF:function(a){this.as(H.h(a,"$iw"))},
ka:function(){return this.eF(null)},
eC:function(a){this.as(H.h(a,"$iw"))},
k8:function(){return this.eC(null)},
eA:function(a){this.as(H.h(a,"$iw"))},
k5:function(){return this.eA(null)},
k0:function(a,b){var u,t,s,r,q,p,o
H.l(b,"$ij",[E.a1],"$aj")
for(u=b.length,t=this.gez(),s={func:1,ret:-1,args:[D.w]},r=[s],q=0;q<b.length;b.length===u||(0,H.z)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.cd()
o.saw(null)
o.sbn(null)
o.c=null
o.d=0
p.z=o}H.p(t,s)
if(o.a==null)o.saw(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.ag()},
k7:function(a,b){var u,t
H.l(b,"$ij",[E.a1],"$aj")
for(u=b.ga_(b),t=this.gez();u.A();)u.gP(u).gt().V(0,t)
this.ag()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
sfj:function(a,b){this.y=H.l(b,"$ia0",[E.a1],"$aa0")},
$icX:1}
E.ii.prototype={
fe:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.az(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cV()
t=[V.au]
u.scf(H.c([],t))
u.b=null
u.gt().h(0,new E.ij(s))
s.cy=u
u=new O.cV()
u.scf(H.c([],t))
u.b=null
u.gt().h(0,new E.ik(s))
s.db=u
u=new O.cV()
u.scf(H.c([],t))
u.b=null
u.gt().h(0,new E.il(s))
s.dx=u
s.sj3(H.c([],[O.co]))
u=s.dy;(u&&C.a).h(u,null)
s.siX(new H.X([P.k,A.d4]))},
gkj:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga8(s)
u=t.db
u=t.z=s.k(0,u.ga8(u))
s=u}return s},
eL:function(a){var u=this.dy,t=a==null?(u&&C.a).gaY(u):a;(u&&C.a).h(u,t)},
eI:function(){var u=this.dy
if(u.length>1)u.pop()},
sj3:function(a){this.dy=H.l(a,"$ib",[O.co],"$ab")},
siX:function(a){this.fr=H.l(a,"$iy",[P.k,A.d4],"$ay")}}
E.ij.prototype={
$1:function(a){var u
H.h(a,"$iw")
u=this.a
u.ch=u.z=null},
$S:9}
E.ik.prototype={
$1:function(a){var u
H.h(a,"$iw")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:9}
E.il.prototype={
$1:function(a){var u
H.h(a,"$iw")
u=this.a
u.cx=u.ch=null},
$S:9}
E.iH.prototype={}
E.ei.prototype={
d6:function(a){H.h(a,"$iw")
this.eO()},
d5:function(){return this.d6(null)},
gjR:function(){var u,t=this,s=Date.now(),r=C.d.a7(P.lU(s-t.cx.a).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.az(s,!1)
return u/r},
dO:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.k()
if(typeof r!=="number")return H.d(r)
u=C.e.bS(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.k()
t=C.e.bS(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.le(C.l,s.gko())}},
eO:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.p(new E.j_(this),{func:1,ret:-1,args:[P.ac]})
C.A.h7(u)
C.A.iO(u,W.mN(t,P.ac))}},
kl:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.dO()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.az(r,!1)
s.y=P.lU(r-s.r.a).a*0.000001
r=s.cy
C.a.sn(r.a,0)
r.b2()
r=s.db
C.a.sn(r.a,0)
r.b2()
r=s.dx
C.a.sn(r.a,0)
r.b2()
r=s.dy;(r&&C.a).sn(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.bh(p.e)}}catch(q){u=H.b3(q)
t=H.cD(q)
P.lD("Error: "+H.i(u))
P.lD("Stack: "+H.i(t))
throw H.f(u)}}}
E.j_.prototype={
$1:function(a){var u
H.n_(a)
u=this.a
if(u.ch){u.ch=!1
u.kl()}},
$S:28}
Z.es.prototype={$ipN:1}
Z.bI.prototype={
aR:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.b3(s)
t=P.D('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.i(u))
throw H.f(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.i(u.e)+"]"}}
Z.jG.prototype={$ipO:1}
Z.cK.prototype={
bf:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
aR:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].aR(a)},
bB:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
bh:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.e(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.k],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)C.a.h(p,u[s].i(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.b7(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.v(p,", ")+"\nAttrs:   "+C.a.v(r,", ")},
sdC:function(a){this.b=H.l(a,"$ib",[Z.aQ],"$ab")},
$iqp:1}
Z.aQ.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.i(H.d2(this.c))+"'")+"]"}}
Z.af.prototype={
ge4:function(a){var u=this.a,t=(u&$.ad().a)!==0?1:0
if((u&$.as().a)!==0)++t
if((u&$.bH().a)!==0)++t
if((u&$.ah().a)!==0)++t
if((u&$.c2().a)!==0)++t
if((u&$.dv().a)!==0)++t
if((u&$.dw().a)!==0)++t
if((u&$.cH().a)!==0)++t
return(u&$.bG().a)!==0?t+1:t},
gbk:function(a){var u=this.a,t=(u&$.ad().a)!==0?3:0
if((u&$.as().a)!==0)t+=3
if((u&$.bH().a)!==0)t+=3
if((u&$.ah().a)!==0)t+=2
if((u&$.c2().a)!==0)t+=3
if((u&$.dv().a)!==0)t+=3
if((u&$.dw().a)!==0)t+=4
if((u&$.cH().a)!==0)++t
return(u&$.bG().a)!==0?t+4:t},
cv:function(a){var u,t=$.ad(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.as()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bH()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ah()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.c2()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dv()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dw()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cH()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bG()
if((s&t.a)!==0)if(u===a)return t
return $.no()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.af))return!1
return this.a===b.a},
i:function(a){var u=H.c([],[P.k]),t=this.a
if((t&$.ad().a)!==0)C.a.h(u,"Pos")
if((t&$.as().a)!==0)C.a.h(u,"Norm")
if((t&$.bH().a)!==0)C.a.h(u,"Binm")
if((t&$.ah().a)!==0)C.a.h(u,"Txt2D")
if((t&$.c2().a)!==0)C.a.h(u,"TxtCube")
if((t&$.dv().a)!==0)C.a.h(u,"Clr3")
if((t&$.dw().a)!==0)C.a.h(u,"Clr4")
if((t&$.cH().a)!==0)C.a.h(u,"Weight")
if((t&$.bG().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.v(u,"|")}}
D.fP.prototype={}
D.cd.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.w]}
H.p(b,u)
if(this.a==null)this.saw(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
V:function(a,b){var u,t,s=this
H.p(b,{func:1,ret:-1,args:[D.w]})
u=s.a
u=u==null?null:C.a.ak(u,b)
if(u===!0){u=s.a
t=(u&&C.a).V(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.ak(u,b)
if(u===!0){u=s.b
t=(u&&C.a).V(u,b)||t}return t},
E:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.w()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.K(P.l9(u,!0,{func:1,ret:-1,args:[D.w]}),new D.ha(q))
u=r.b
if(u!=null){r.sbn(H.c([],[{func:1,ret:-1,args:[D.w]}]))
C.a.K(u,new D.hb(q))}return!0},
e6:function(){return this.E(null)},
aI:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.E(u)}}},
saw:function(a){this.a=H.l(a,"$ib",[{func:1,ret:-1,args:[D.w]}],"$ab")},
sbn:function(a){this.b=H.l(a,"$ib",[{func:1,ret:-1,args:[D.w]}],"$ab")}}
D.ha.prototype={
$1:function(a){var u
H.p(a,{func:1,ret:-1,args:[D.w]})
u=this.a.a
u.b
a.$1(u)},
$S:24}
D.hb.prototype={
$1:function(a){var u
H.p(a,{func:1,ret:-1,args:[D.w]})
u=this.a.a
u.b
a.$1(u)},
$S:24}
D.w.prototype={}
D.bN.prototype={}
D.bO.prototype={}
D.L.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}
X.dB.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dB))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.an.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.an))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.bt.prototype={}
X.dQ.prototype={
gaq:function(){var u=this.y
return u==null?this.y=D.O():u},
dY:function(a,b){this.h(0,new X.an(a,new X.bv(!1,!1,b)))},
a5:function(a){return this.dY(a,!1)},
d7:function(a){},
fn:function(a){var u,t,s
H.l(a,"$ij",[X.an],"$aj")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.z)(a),++t){s=a[t]
if(C.a.ak(this.a,s))return!1}return!0},
fl:function(a,b){var u=X.an
H.l(b,"$ij",[u],"$aj")
u=new D.bN([u])
u.b=!0
this.d7(u)},
fp:function(a,b){var u=X.an
H.l(b,"$ij",[u],"$aj")
u=new D.bO([u])
u.b=!0
this.d7(u)},
c4:function(a){var u,t=this
H.h(a,"$iw")
if(!t.r&&a instanceof X.bt){u=a.c
if(C.a.ak(t.a,u)){t.r=!0
u=t.y
if(u!=null)u.E(a)}}},
cl:function(a){var u
H.h(a,"$iw")
if(this.r&&a instanceof X.bt){u=a.c
if(C.a.ak(this.a,u))this.r=!1}},
ae:function(a){var u,t,s=this
if(s.f!=null)return!1
s.f=a
u=a.b
t=u.b
if(t==null)t=u.b=D.O()
t.h(0,s.gc3())
t=u.a
u=t==null?u.a=D.O():t
u.h(0,s.gck())
return!0},
$aj:function(){return[X.an]},
$aa0:function(){return[X.an]}}
X.hq.prototype={
kf:function(a){var u,t
this.d.h(0,a.a)
u=this.a
if(u==null)return!1
t=new X.bt(a)
t.b=!0
return u.E(t)},
kb:function(a){var u,t
this.d.V(0,a.a)
u=this.b
if(u==null)return!1
t=new X.bt(a)
t.b=!0
return u.E(t)},
siG:function(a){this.d=H.l(a,"$img",[P.m],"$amg")}}
X.dV.prototype={}
X.hw.prototype={
b9:function(a,b){var u,t,s,r,q,p=this,o=Date.now(),n=p.x,m=b.a,l=p.Q
if(typeof m!=="number")return m.k()
u=b.b
t=p.ch
if(typeof u!=="number")return u.k()
s=n.a
if(typeof s!=="number")return s.m()
n=n.b
if(typeof n!=="number")return n.m()
r=new V.T(s+m*l,n+u*t)
t=p.a.gbO()
q=new X.bw(a,V.by(),p.x,t,r)
q.b=!0
p.z=new P.az(o,!1)
p.x=r
return q},
cR:function(a,b){var u
this.r=a.a
u=this.b
if(u==null)return!1
u.E(this.b9(a,b))
return!0},
bx:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.f2()
if(typeof u!=="number")return u.al()
this.r=(u&~t)>>>0
return!1},
bw:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.b9(a,b))
return!0},
kg:function(a){return!1},
i6:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dV(c,r.a.gbO(),b)
s.b=!0
t.E(s)
r.y=new P.az(u,!1)
r.x=V.by()}}
X.bv.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.bv))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.G(this.b)?"Alt+":""
return u+(H.G(this.c)?"Shift+":"")}}
X.bw.prototype={}
X.hW.prototype={
cc:function(a,b,c){var u=this,t=new P.az(Date.now(),!1),s=u.a.gbO(),r=new X.bw(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cR:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.E(this.cc(a,b,!0))
return!0},
bx:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.f2()
if(typeof t!=="number")return t.al()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.E(u.cc(a,b,!0))
return!0},
bw:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.cc(a,b,!1))
return!0},
kh:function(a,b){return!1}}
X.i9.prototype={}
X.ek.prototype={}
X.j3.prototype={
b9:function(a,b){var u,t,s,r,q=this
H.l(a,"$ib",[V.T],"$ab")
u=new P.az(Date.now(),!1)
t=a.length>0?a[0]:V.by()
s=q.a.gbO()
r=new X.ek(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
ke:function(a){var u
H.l(a,"$ib",[V.T],"$ab")
u=this.b
if(u==null)return!1
u.E(this.b9(a,!0))
return!0},
kc:function(a){var u
H.l(a,"$ib",[V.T],"$ab")
u=this.c
if(u==null)return!1
u.E(this.b9(a,!0))
return!0},
kd:function(a){var u
H.l(a,"$ib",[V.T],"$ab")
u=this.d
if(u==null)return!1
u.E(this.b9(a,!1))
return!0}}
X.ep.prototype={
gbO:function(){var u=this.a,t=C.k.ge3(u).c
t.toString
u=C.k.ge3(u).d
u.toString
return V.lc(0,0,t,u)},
du:function(a){var u=a.keyCode,t=H.G(a.ctrlKey)||H.G(a.metaKey)
return new X.an(u,new X.bv(t,a.altKey,a.shiftKey))},
bb:function(a){if(!H.G(a.ctrlKey))H.G(a.metaKey)
a.shiftKey},
cq:function(a){if(!H.G(a.ctrlKey))H.G(a.metaKey)
a.shiftKey},
aO:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.p()
u=t.top
if(typeof r!=="number")return r.p()
return new V.T(s-q,r-u)},
bp:function(a){return new V.a2(a.movementX,a.movementY)},
cn:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.T])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
q=C.e.az(r.pageX)
C.e.az(r.pageY)
p=o.left
C.e.az(r.pageX)
C.a.h(n,new V.T(q-p,C.e.az(r.pageY)-o.top))}return n},
aJ:function(a){var u=a.buttons,t=H.G(a.ctrlKey)||H.G(a.metaKey)
return new X.dB(u,new X.bv(t,a.altKey,a.shiftKey))},
cg:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.p()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.p()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
i0:function(a){this.f=!0},
hL:function(a){this.f=!1},
hV:function(a){H.h(a,"$iak")
if(H.G(this.f)&&this.cg(a))a.preventDefault()},
cl:function(a){var u
H.h(a,"$ibf")
if(!H.G(this.f))return
u=this.du(a)
if(this.b.kf(u))a.preventDefault()},
c4:function(a){var u
H.h(a,"$ibf")
if(!H.G(this.f))return
u=this.du(a)
if(this.b.kb(u))a.preventDefault()},
i8:function(a){var u,t,s,r,q=this
H.h(a,"$iak")
u=q.a
u.focus()
q.f=!0
q.bb(a)
if(H.G(q.x)){t=q.aJ(a)
s=q.bp(a)
if(q.d.cR(t,s))a.preventDefault()
return}if(H.G(q.r)){q.y=a
u.requestPointerLock()
return}t=q.aJ(a)
r=q.aO(a)
if(q.c.cR(t,r))a.preventDefault()},
ic:function(a){var u,t,s,r=this
H.h(a,"$iak")
r.bb(a)
u=r.aJ(a)
if(H.G(r.x)){t=r.bp(a)
if(r.d.bx(u,t))a.preventDefault()
return}if(H.G(r.r))return
s=r.aO(a)
if(r.c.bx(u,s))a.preventDefault()},
hZ:function(a){var u,t,s,r=this
H.h(a,"$iak")
if(!r.cg(a)){r.bb(a)
u=r.aJ(a)
if(H.G(r.x)){t=r.bp(a)
if(r.d.bx(u,t))a.preventDefault()
return}if(H.G(r.r))return
s=r.aO(a)
if(r.c.bx(u,s))a.preventDefault()}},
ia:function(a){var u,t,s,r=this
H.h(a,"$iak")
r.bb(a)
u=r.aJ(a)
if(H.G(r.x)){t=r.bp(a)
if(r.d.bw(u,t))a.preventDefault()
return}if(H.G(r.r))return
s=r.aO(a)
if(r.c.bw(u,s))a.preventDefault()},
hX:function(a){var u,t,s,r=this
H.h(a,"$iak")
if(!r.cg(a)){r.bb(a)
u=r.aJ(a)
if(H.G(r.x)){t=r.bp(a)
if(r.d.bw(u,t))a.preventDefault()
return}if(H.G(r.r))return
s=r.aO(a)
if(r.c.bw(u,s))a.preventDefault()}},
ig:function(a){var u,t,s=this
H.h(a,"$ibp")
s.bb(a)
u=new V.a2((a&&C.z).gjE(a),C.z.gjF(a)).w(0,180)
if(H.G(s.x)){if(s.d.kg(u))a.preventDefault()
return}if(H.G(s.r))return
t=s.aO(a)
if(s.c.kh(u,t))a.preventDefault()},
ii:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aJ(s.y)
t=s.aO(s.y)
s.d.i6(u,t,r)}},
ix:function(a){var u,t=this
H.h(a,"$ib0")
t.a.focus()
t.f=!0
t.cq(a)
u=t.cn(a)
if(t.e.ke(u))a.preventDefault()},
it:function(a){var u
H.h(a,"$ib0")
this.cq(a)
u=this.cn(a)
if(this.e.kc(u))a.preventDefault()},
iv:function(a){var u
H.h(a,"$ib0")
this.cq(a)
u=this.cn(a)
if(this.e.kd(u))a.preventDefault()},
sh8:function(a){this.z=H.l(a,"$ib",[[P.d7,P.P]],"$ab")}}
D.bL.prototype={
aM:function(a){var u
H.h(a,"$iw")
u=this.r
if(u!=null)u.E(a)},
hN:function(){return this.aM(null)},
$iaj:1,
$icX:1}
D.aj.prototype={$icX:1}
D.dR.prototype={
aM:function(a){var u=this.x
if(u!=null)u.E(a)},
dJ:function(a){var u
H.h(a,"$iw")
u=this.y
if(u!=null)u.E(a)},
i5:function(){return this.dJ(null)},
ik:function(a){var u,t,s
H.l(a,"$ij",[D.aj],"$aj")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.z)(a),++t){s=a[t]
if(s==null||this.h_(s))return!1}return!0},
hB:function(a,b){var u,t,s,r,q,p,o,n=D.aj
H.l(b,"$ij",[n],"$aj")
for(u=b.length,t=this.gdI(),s={func:1,ret:-1,args:[D.w]},r=[s],q=0;q<b.length;b.length===u||(0,H.z)(b),++q){p=H.h(b[q],"$iaj")
if(p instanceof D.bL)C.a.h(this.e,p)
o=p.r
if(o==null){o=new D.cd()
o.saw(null)
o.sbn(null)
o.c=null
o.d=0
p.r=o}H.p(t,s)
if(o.a==null)o.saw(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bN([n])
n.b=!0
this.aM(n)},
ip:function(a,b){var u,t,s,r=D.aj
H.l(b,"$ij",[r],"$aj")
for(u=b.ga_(b),t=this.gdI();u.A();){s=u.gP(u)
C.a.V(this.e,s)
s.gt().V(0,t)}r=new D.bO([r])
r.b=!0
this.aM(r)},
h_:function(a){var u=C.a.ak(this.e,a)
return u},
sfq:function(a){this.e=H.l(a,"$ib",[D.bL],"$ab")},
siB:function(a){this.f=H.l(a,"$ib",[D.e4],"$ab")},
sfs:function(a){this.r=H.l(a,"$ib",[D.ee],"$ab")},
$aj:function(){return[D.aj]},
$aa0:function(){return[D.aj]}}
D.e4.prototype={$iaj:1,$icX:1}
D.ee.prototype={$iaj:1,$icX:1}
V.a9.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a9))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+"]"}}
V.aM.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aM))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.J(u.a,3,0)+", "+V.J(u.b,3,0)+", "+V.J(u.c,3,0)+", "+V.J(u.d,3,0)+"]"}}
V.h8.prototype={}
V.a4.prototype={
q:function(a,b){if(b==null)return!1
if(!(b instanceof V.a4))return!1
return this.a===b.a},
i:function(a){var u,t,s
$.lJ()
$.kU()
u=H.c([],[P.k])
t=this.a
s=$.b5().a
if((t&s)>>>0===s)C.a.h(u,"XPos")
s=$.lK().a
if((t&s)>>>0===s)C.a.h(u,"XCenter")
s=$.b4().a
if((t&s)>>>0===s)C.a.h(u,"XNeg")
s=$.b6().a
if((t&s)>>>0===s)C.a.h(u,"YPos")
s=$.lL().a
if((t&s)>>>0===s)C.a.h(u,"YCenter")
s=$.bD().a
if((t&s)>>>0===s)C.a.h(u,"YNeg")
s=$.bF().a
if((t&s)>>>0===s)C.a.h(u,"ZPos")
s=$.nb().a
if((t&s)>>>0===s)C.a.h(u,"ZCenter")
s=$.bE().a
if((t&s)>>>0===s)C.a.h(u,"ZNeg")
if(u.length<=0)return"None"
return C.a.v(u,"|")}}
V.cg.prototype={
i:function(a){var u=this
return u.a.i(0)+" <"+u.b.i(0)+"> "+H.i(u.c)+" "+H.i(u.d)}}
V.hm.prototype={
i:function(a){return H.i(this.a)+" "+H.i(this.b)}}
V.aF.prototype={
at:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.C])
return t},
bv:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.a,g=i.e,f=i.y
if(typeof g!=="number")return g.k()
if(typeof f!=="number")return H.d(f)
u=g*f
t=i.f
s=i.x
if(typeof t!=="number")return t.k()
if(typeof s!=="number")return H.d(s)
if(typeof h!=="number")return h.k()
r=i.d
q=i.b
if(typeof q!=="number")return q.k()
p=q*f
o=i.c
if(typeof o!=="number")return H.d(o)
n=s*o
if(typeof r!=="number")return r.k()
m=i.r
l=q*t-g*o
if(typeof m!=="number")return m.k()
k=h*(u-t*s)-r*(p-n)+m*l
if(Math.abs(k-0)<$.B().a){h=$.m1
return h==null?$.m1=new V.aF(1,0,0,0,1,0,0,0,1):h}j=1/k
return new V.aF((u-s*t)*j,(n-p)*j,l*j,(m*t-r*f)*j,(h*f-m*o)*j,(r*o-h*t)*j,(r*s-m*g)*j,(m*q-h*s)*j,(h*g-r*q)*j)},
au:function(a){var u,t,s,r,q,p,o,n,m,l,k=this,j=k.a,i=a.a
if(typeof j!=="number")return j.k()
if(typeof i!=="number")return H.d(i)
u=k.b
t=a.b
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.d(t)
s=k.c
r=a.c
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.d(r)
q=k.d
if(typeof q!=="number")return q.k()
p=k.e
if(typeof p!=="number")return p.k()
o=k.f
if(typeof o!=="number")return o.k()
n=k.r
if(typeof n!=="number")return n.k()
m=k.x
if(typeof m!=="number")return m.k()
l=k.y
if(typeof l!=="number")return l.k()
return new V.H(j*i+u*t+s*r,q*i+p*t+o*r,n*i+m*t+l*r)},
W:function(a){var u,t,s,r,q,p,o,n,m,l,k=this,j=k.a,i=a.a
if(typeof j!=="number")return j.k()
if(typeof i!=="number")return H.d(i)
u=k.b
t=a.b
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.d(t)
s=k.c
r=a.c
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.d(r)
q=k.d
if(typeof q!=="number")return q.k()
p=k.e
if(typeof p!=="number")return p.k()
o=k.f
if(typeof o!=="number")return o.k()
n=k.r
if(typeof n!=="number")return n.k()
m=k.x
if(typeof m!=="number")return m.k()
l=k.y
if(typeof l!=="number")return l.k()
return new V.u(j*i+u*t+s*r,q*i+p*t+o*r,n*i+m*t+l*r)},
q:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aF))return!1
u=b.a
t=r.a
s=$.B()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.d
t=r.d
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.e
t=r.e
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.f
t=r.f
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.r
t=r.r
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.x
t=r.x
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.y
t=r.y
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){var u,t,s,r,q=this,p=[P.C],o=V.cB(H.c([q.a,q.d,q.r],p),3,0),n=V.cB(H.c([q.b,q.e,q.x],p),3,0),m=V.cB(H.c([q.c,q.f,q.y],p),3,0)
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
V.au.prototype={
at:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.C])
return t},
bv:function(b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=a9.a,b1=a9.f
if(typeof b0!=="number")return b0.k()
if(typeof b1!=="number")return H.d(b1)
u=a9.b
t=a9.e
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.d(t)
s=b0*b1-u*t
r=a9.r
if(typeof r!=="number")return H.d(r)
q=a9.c
if(typeof q!=="number")return q.k()
p=b0*r-q*t
o=a9.x
n=a9.d
m=b0*o-n*t
l=u*r-q*b1
k=u*o-n*b1
j=q*o-n*r
i=a9.y
h=a9.cy
if(typeof i!=="number")return i.k()
g=a9.z
f=a9.cx
if(typeof g!=="number")return g.k()
e=i*h-g*f
d=a9.db
c=a9.Q
if(typeof c!=="number")return c.k()
b=i*d-c*f
a=a9.dx
a0=a9.ch
a1=i*a-a0*f
a2=g*d-c*h
a3=g*a-a0*h
a4=c*a-a0*d
a5=s*a4-p*a3+m*a2+l*a1-k*b+j*e
if(Math.abs(a5-0)<$.B().a)return V.cj()
a6=1/a5
a7=-t
a8=-f
return V.bi((b1*a4-r*a3+o*a2)*a6,(-u*a4+q*a3-n*a2)*a6,(h*j-d*k+a*l)*a6,(-g*j+c*k-a0*l)*a6,(a7*a4+r*a1-o*b)*a6,(b0*a4-q*a1+n*b)*a6,(a8*j+d*m-a*p)*a6,(i*j-c*m+a0*p)*a6,(t*a3-b1*a1+o*e)*a6,(-b0*a3+u*a1-n*e)*a6,(f*k-h*m+a*s)*a6,(-i*k+g*m-a0*s)*a6,(a7*a2+b1*b-r*e)*a6,(b0*a2-u*b+q*e)*a6,(a8*l+h*p-d*s)*a6,(i*l-g*p+c*s)*a6)},
k:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=a9.a,b1=b3.a
if(typeof b0!=="number")return b0.k()
if(typeof b1!=="number")return H.d(b1)
u=a9.b
t=b3.e
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.d(t)
s=a9.c
r=b3.y
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.d(r)
q=a9.d
p=b3.cx
o=b3.b
if(typeof o!=="number")return H.d(o)
n=b3.f
if(typeof n!=="number")return H.d(n)
m=b3.z
if(typeof m!=="number")return H.d(m)
l=b3.cy
k=b3.c
if(typeof k!=="number")return H.d(k)
j=b3.r
if(typeof j!=="number")return H.d(j)
i=b3.Q
if(typeof i!=="number")return H.d(i)
h=b3.db
g=b3.d
f=b3.x
e=b3.ch
d=b3.dx
c=a9.e
if(typeof c!=="number")return c.k()
b=a9.f
if(typeof b!=="number")return b.k()
a=a9.r
if(typeof a!=="number")return a.k()
a0=a9.x
a1=a9.y
if(typeof a1!=="number")return a1.k()
a2=a9.z
if(typeof a2!=="number")return a2.k()
a3=a9.Q
if(typeof a3!=="number")return a3.k()
a4=a9.ch
a5=a9.cx
a6=a9.cy
a7=a9.db
a8=a9.dx
return V.bi(b0*b1+u*t+s*r+q*p,b0*o+u*n+s*m+q*l,b0*k+u*j+s*i+q*h,b0*g+u*f+s*e+q*d,c*b1+b*t+a*r+a0*p,c*o+b*n+a*m+a0*l,c*k+b*j+a*i+a0*h,c*g+b*f+a*e+a0*d,a1*b1+a2*t+a3*r+a4*p,a1*o+a2*n+a3*m+a4*l,a1*k+a2*j+a3*i+a4*h,a1*g+a2*f+a3*e+a4*d,a5*b1+a6*t+a7*r+a8*p,a5*o+a6*n+a7*m+a8*l,a5*k+a6*j+a7*i+a8*h,a5*g+a6*f+a7*e+a8*d)},
au:function(a){var u,t,s,r,q,p,o,n,m,l,k=this,j=k.a,i=a.a
if(typeof j!=="number")return j.k()
if(typeof i!=="number")return H.d(i)
u=k.b
t=a.b
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.d(t)
s=k.c
r=a.c
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.d(r)
q=k.e
if(typeof q!=="number")return q.k()
p=k.f
if(typeof p!=="number")return p.k()
o=k.r
if(typeof o!=="number")return o.k()
n=k.y
if(typeof n!=="number")return n.k()
m=k.z
if(typeof m!=="number")return m.k()
l=k.Q
if(typeof l!=="number")return l.k()
return new V.H(j*i+u*t+s*r,q*i+p*t+o*r,n*i+m*t+l*r)},
W:function(a){var u,t,s,r,q,p,o,n,m,l,k=this,j=k.a,i=a.a
if(typeof j!=="number")return j.k()
if(typeof i!=="number")return H.d(i)
u=k.b
t=a.b
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.d(t)
s=k.c
r=a.c
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.d(r)
q=k.e
if(typeof q!=="number")return q.k()
p=k.f
if(typeof p!=="number")return p.k()
o=k.r
if(typeof o!=="number")return o.k()
n=k.y
if(typeof n!=="number")return n.k()
m=k.z
if(typeof m!=="number")return m.k()
l=k.Q
if(typeof l!=="number")return l.k()
return new V.u(j*i+u*t+s*r+k.d,q*i+p*t+o*r+k.x,n*i+m*t+l*r+k.ch)},
q:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.au))return!1
u=b.a
t=r.a
s=$.B()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.d-r.d)<s))return!1
u=b.e
t=r.e
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.f
t=r.f
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.r
t=r.r
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.x-r.x)<s))return!1
u=b.y
t=r.y
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.z
t=r.z
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.Q
t=r.Q
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.ch-r.ch)<s))return!1
if(!(Math.abs(b.cx-r.cx)<s))return!1
if(!(Math.abs(b.cy-r.cy)<s))return!1
if(!(Math.abs(b.db-r.db)<s))return!1
if(!(Math.abs(b.dx-r.dx)<s))return!1
return!0},
i:function(a){return this.T()},
M:function(a){var u,t,s,r,q,p=this,o=[P.C],n=V.cB(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.cB(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.cB(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.cB(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
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
T:function(){return this.M("")}}
V.T.prototype={
p:function(a,b){var u,t,s=this.a,r=b.a
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.d(r)
u=this.b
t=b.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
return new V.T(s-r,u-t)},
q:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.T))return!1
u=b.a
t=this.a
s=$.B()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+"]"}}
V.u.prototype={
m:function(a,b){var u,t,s,r,q=this.a,p=b.a
if(typeof q!=="number")return q.m()
if(typeof p!=="number")return H.d(p)
u=this.b
t=b.b
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.d(t)
s=this.c
r=b.c
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.d(r)
return new V.u(q+p,u+t,s+r)},
p:function(a,b){var u,t,s,r,q=this.a,p=b.a
if(typeof q!=="number")return q.p()
if(typeof p!=="number")return H.d(p)
u=this.b
t=b.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
s=this.c
r=b.c
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.d(r)
return new V.u(q-p,u-t,s-r)},
k:function(a,b){var u,t,s=this.a
if(typeof s!=="number")return s.k()
u=this.b
if(typeof u!=="number")return u.k()
t=this.c
if(typeof t!=="number")return t.k()
return new V.u(s*b,u*b,t*b)},
q:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.u))return!1
u=b.a
t=r.a
s=$.B()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+"]"}}
V.bU.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bU))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.J(u.a,3,0)+", "+V.J(u.b,3,0)+", "+V.J(u.c,3,0)+", "+V.J(u.d,3,0)+"]"}}
V.e8.prototype={
q:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.e8))return!1
u=b.a
t=r.a
s=$.B()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.d
t=r.d
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.e
t=r.e
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.f
t=r.f
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){var u=this
return"["+V.J(u.a,3,0)+", "+V.J(u.b,3,0)+", "+V.J(u.c,3,0)+", "+V.J(u.d,3,0)+", "+V.J(u.e,3,0)+", "+V.J(u.f,3,0)+"]"}}
V.e9.prototype={
gaH:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
ex:function(a){var u,t,s,r,q=this,p=$.bC(),o=a.a,n=q.a
if(typeof o!=="number")return o.B()
if(o<n){u=$.b4()
p=new V.a4((p.a|u.a)>>>0)}else if(o>=n+q.c){u=$.b5()
p=new V.a4((p.a|u.a)>>>0)}else{u=$.lK()
p=new V.a4((p.a|u.a)>>>0)}u=a.b
t=q.b
if(typeof u!=="number")return u.B()
if(u<t)p=new V.a4((p.a|$.bD().a)>>>0)
else{s=p.a
p=u>=t+q.d?new V.a4((s|$.b6().a)>>>0):new V.a4((s|$.lL().a)>>>0)}s=p.a
r=$.b4().a
if(!((s&r)>>>0===r)){r=$.b5().a
if((s&r)>>>0===r){o=n+q.c
n=o}else n=o}o=$.bD().a
if(!((s&o)>>>0===o)){o=$.b6().a
if((s&o)>>>0===o){o=t+q.d
t=o}else t=u}return new V.T(n,t)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.e9))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.J(u.a,3,0)+", "+V.J(u.b,3,0)+", "+V.J(u.c,3,0)+", "+V.J(u.d,3,0)+"]"}}
V.bX.prototype={
kk:function(a8){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.a
if(typeof a7!=="number")return a7.m()
u=a7+a5.d
t=a5.b
if(typeof t!=="number")return t.m()
s=t+a5.e
r=a5.c
if(typeof r!=="number")return r.m()
q=r+a5.f
p=a8.a
if(typeof p!=="number")return p.B()
if(p<a7){o=a7-p
n=a8.d
if(typeof n!=="number")return H.d(n)
if(o>n)return
o/=n
m=$.b4()
l=a7
k=!1
j=-1}else if(p>u){o=u-p
n=a8.d
if(typeof n!=="number")return H.d(n)
if(o<n)return
o/=n
m=$.b5()
l=u
k=!1
j=1}else{m=a6
l=m
j=l
k=!0
o=-1}n=a8.b
if(typeof n!=="number")return n.B()
if(n<t){i=t-n
h=a8.e
if(typeof h!=="number")return H.d(h)
if(i>h)return
i/=h
g=$.bD()
f=t
k=!1
e=-1}else if(n>s){i=s-n
h=a8.e
if(typeof h!=="number")return H.d(h)
if(i<h)return
i/=h
g=$.b6()
f=s
k=!1
e=1}else{g=a6
f=g
e=f
i=-1}h=a8.c
if(typeof h!=="number")return h.B()
if(h<r){d=r-h
c=a8.f
if(typeof c!=="number")return H.d(c)
if(d>c)return
d/=c
b=$.bE()
a=r
k=!1
a0=-1}else if(h>q){d=q-h
c=a8.f
if(typeof c!=="number")return H.d(c)
if(d<c)return
d/=c
b=$.bF()
a=q
k=!1
a0=1}else{b=a6
a=b
a0=a
d=-1}if(k){a7=new V.H(a8.d,a8.e,a8.f)
return new V.cg(new V.u(p,n,h),a7.w(0,Math.sqrt(a7.D(a7))).O(0),0,$.kU())}if(i>o)a1=d>i?2:1
else a1=d>o?2:0
switch(a1){case 0:a7=a8.e
if(typeof a7!=="number")return a7.k()
a2=n+a7*o
a7=$.B()
p=a7.a
if(t-p<a2){a7.toString
t=a2<s}else t=!1
if(!t)return
t=a8.f
if(typeof t!=="number")return t.k()
a3=h+t*o
if(r-p<a3){a7.toString
a7=a3<q}else a7=!1
if(!a7)return
return new V.cg(new V.u(l,a2,a3),new V.H(j,0,0),o,m)
case 1:t=a8.d
if(typeof t!=="number")return t.k()
a4=p+t*i
t=$.B()
p=t.a
if(a7-p<a4){t.toString
a7=a4<u}else a7=!1
if(!a7)return
a7=a8.f
if(typeof a7!=="number")return a7.k()
a3=h+a7*i
if(r-p<a3){t.toString
a7=a3<q}else a7=!1
if(!a7)return
return new V.cg(new V.u(a4,f,a3),new V.H(0,e,0),i,g)
default:r=a8.d
if(typeof r!=="number")return r.k()
a4=p+r*d
r=$.B()
p=r.a
if(a7-p<a4){r.toString
a7=a4<u}else a7=!1
if(!a7)return
a7=a8.e
if(typeof a7!=="number")return a7.k()
a2=n+a7*d
if(t-p<a2){r.toString
a7=a2<s}else a7=!1
if(!a7)return
return new V.cg(new V.u(a4,a2,a),new V.H(0,0,a0),d,b)}},
jA:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=$.bC(),d=b.a
if(d!==0){if(typeof d!=="number")return d.Z()
if(d>0){u=$.b4()
t=u.a
if((c.a&t)>>>0===t){t=a.a
s=g.a
if(typeof s!=="number")return s.m()
r=$.B()
r.toString
if(typeof t!=="number")return t.p()
s=t-(s+g.d)
q=Math.abs(s)<r.a?0:s/d
p=!0}else{u=f
q=u
p=!1}}else{u=$.b5()
t=u.a
if((c.a&t)>>>0===t){t=a.a
if(typeof t!=="number")return t.m()
s=g.a
r=$.B()
r.toString
if(typeof s!=="number")return H.d(s)
s=t+a.d-s
q=Math.abs(s)<r.a?0:s/d
p=!0}else{u=f
q=u
p=!1}}if(p){if(typeof q!=="number")return q.B()
t=q<100&&q>=0&&q<=1}else t=!1
if(t){t=g.b
s=b.b
if(typeof s!=="number")return s.k()
if(typeof q!=="number")return H.d(q)
if(typeof t!=="number")return t.m()
o=t+s*q
t=a.b
if(typeof t!=="number")return t.m()
s=$.B().a
if(o-s<t+a.e&&t-s<o+g.e){t=g.c
r=b.c
if(typeof r!=="number")return r.k()
if(typeof t!=="number")return t.m()
n=t+r*q
t=a.c
if(typeof t!=="number")return t.m()
if(n-s<t+a.f&&t-s<n+g.f){m=u
l=q}else{m=e
l=100}}else{m=e
l=100}}else{m=e
l=100}}else{u=f
m=e
q=u
l=100}t=b.b
if(t!==0){if(typeof t!=="number")return t.Z()
if(t>0){k=$.bD()
s=k.a
if((c.a&s)>>>0===s){s=a.b
r=g.b
if(typeof r!=="number")return r.m()
j=$.B()
j.toString
if(typeof s!=="number")return s.p()
r=s-(r+g.e)
q=Math.abs(r)<j.a?0:r/t
u=k
p=!0}else p=!1}else{k=$.b6()
s=k.a
if((c.a&s)>>>0===s){s=a.b
if(typeof s!=="number")return s.m()
r=g.b
j=$.B()
j.toString
if(typeof r!=="number")return H.d(r)
r=s+a.e-r
q=Math.abs(r)<j.a?0:r/t
u=k
p=!0}else p=!1}if(p){if(typeof q!=="number")return q.B()
s=q<l&&q>=0&&q<=1}else s=!1
if(s){s=g.a
if(typeof d!=="number")return d.k()
if(typeof q!=="number")return H.d(q)
if(typeof s!=="number")return s.m()
i=s+d*q
s=a.a
if(typeof s!=="number")return s.m()
r=$.B().a
if(i-r<s+a.d&&s-r<i+g.d){s=g.c
j=b.c
if(typeof j!=="number")return j.k()
if(typeof s!=="number")return s.m()
n=s+j*q
s=a.c
if(typeof s!=="number")return s.m()
if(n-r<s+a.f&&s-r<n+g.f){m=u
l=q}}}}s=b.c
if(s!==0){if(typeof s!=="number")return s.Z()
if(s>0){k=$.bE()
r=k.a
if((c.a&r)>>>0===r){r=a.c
j=g.c
if(typeof j!=="number")return j.m()
h=$.B()
h.toString
if(typeof r!=="number")return r.p()
j=r-(j+g.f)
q=Math.abs(j)<h.a?0:j/s
u=k
p=!0}else p=!1}else{k=$.bF()
r=k.a
if((c.a&r)>>>0===r){r=a.c
if(typeof r!=="number")return r.m()
j=g.c
h=$.B()
h.toString
if(typeof j!=="number")return H.d(j)
j=r+a.f-j
q=Math.abs(j)<h.a?0:j/s
u=k
p=!0}else p=!1}if(p){if(typeof q!=="number")return q.B()
s=q<l&&q>=0&&q<=1}else s=!1
if(s){s=g.a
if(typeof d!=="number")return d.k()
if(typeof q!=="number")return H.d(q)
if(typeof s!=="number")return s.m()
i=s+d*q
d=a.a
if(typeof d!=="number")return d.m()
s=$.B().a
if(i-s<d+a.d&&d-s<i+g.d){d=g.b
if(typeof t!=="number")return t.k()
if(typeof d!=="number")return d.m()
o=d+t*q
d=a.b
if(typeof d!=="number")return d.m()
if(o-s<d+a.e&&d-s<o+g.e){m=u
l=q}}}}if(J.V(m,e))return
return new V.hm(l,m)},
bY:function(a,b){var u,t,s,r,q=this,p=q.a,o=b.a
if(typeof p!=="number")return p.m()
if(typeof o!=="number")return H.d(o)
u=q.b
t=b.b
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.d(t)
s=q.c
r=b.c
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.d(r)
return V.ih(p+o,u+t,s+r,q.d,q.e,q.f)},
q:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bX))return!1
u=b.a
t=r.a
s=$.B()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.d-r.d)<s))return!1
if(!(Math.abs(b.e-r.e)<s))return!1
if(!(Math.abs(b.f-r.f)<s))return!1
return!0},
i:function(a){var u=this
return"["+V.J(u.a,3,0)+", "+V.J(u.b,3,0)+", "+V.J(u.c,3,0)+", "+V.J(u.d,3,0)+", "+V.J(u.e,3,0)+", "+V.J(u.f,3,0)+"]"}}
V.a2.prototype={
cO:function(a){return Math.sqrt(this.D(this))},
D:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.d(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.d(t)
return s*r+u*t},
k:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.k()
u=this.b
if(typeof u!=="number")return u.k()
return new V.a2(t*b,u*b)},
w:function(a,b){var u,t
if(Math.abs(b-0)<$.B().a){u=$.mp
return u==null?$.mp=new V.a2(0,0):u}u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
return new V.a2(u/b,t/b)},
q:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a2))return!1
u=b.a
t=this.a
s=$.B()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+"]"}}
V.H.prototype={
cO:function(a){return Math.sqrt(this.D(this))},
D:function(a){var u,t,s,r,q=this.a,p=a.a
if(typeof q!=="number")return q.k()
if(typeof p!=="number")return H.d(p)
u=this.b
t=a.b
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.d(t)
s=this.c
r=a.c
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.d(r)
return q*p+u*t+s*r},
bu:function(a){var u,t,s,r,q=this.b,p=a.c
if(typeof q!=="number")return q.k()
if(typeof p!=="number")return H.d(p)
u=this.c
t=a.b
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.d(t)
s=a.a
if(typeof s!=="number")return H.d(s)
r=this.a
if(typeof r!=="number")return r.k()
return new V.H(q*p-u*t,u*s-r*p,r*t-q*s)},
m:function(a,b){var u,t,s,r,q=this.a,p=b.a
if(typeof q!=="number")return q.m()
if(typeof p!=="number")return H.d(p)
u=this.b
t=b.b
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.d(t)
s=this.c
r=b.c
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.d(r)
return new V.H(q+p,u+t,s+r)},
O:function(a){var u,t,s=this.a
if(typeof s!=="number")return s.O()
u=this.b
if(typeof u!=="number")return u.O()
t=this.c
if(typeof t!=="number")return t.O()
return new V.H(-s,-u,-t)},
k:function(a,b){var u,t,s=this.a
if(typeof s!=="number")return s.k()
u=this.b
if(typeof u!=="number")return u.k()
t=this.c
if(typeof t!=="number")return t.k()
return new V.H(s*b,u*b,t*b)},
w:function(a,b){var u,t,s
if(Math.abs(b-0)<$.B().a)return V.df()
u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
s=this.c
if(typeof s!=="number")return s.w()
return new V.H(u/b,t/b,s/b)},
cN:function(){var u=this.a,t=$.B()
t.toString
if(typeof u!=="number")return H.d(u)
t=t.a
if(!(Math.abs(0-u)<t))return!1
u=this.b
if(typeof u!=="number")return H.d(u)
if(!(Math.abs(0-u)<t))return!1
u=this.c
if(typeof u!=="number")return H.d(u)
if(!(Math.abs(0-u)<t))return!1
return!0},
q:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.H))return!1
u=b.a
t=r.a
s=$.B()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+"]"}}
U.fS.prototype={
c6:function(a){var u=this.a,t=this.c,s=this.b
if(u)return V.kS(a,t,s)
else{if(a<t)u=t
else u=a>s?s:a
return u}},
gt:function(){var u=this.y
return u==null?this.y=D.O():u},
C:function(a){var u=this.y
if(u!=null)u.E(a)},
scY:function(a,b){var u=this.a
if(u!==b){this.a=b
u=new D.L("wrap",u,b,[P.a3])
u.b=!0
this.C(u)}},
scP:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.B().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.c6(u)}s=new D.L("maximumLocation",s,t.b,[P.C])
s.b=!0
t.C(s)}},
scQ:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.B().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.c6(u)}s=new D.L("minimumLocation",s,t.c,[P.C])
s.b=!0
t.C(s)}},
sY:function(a,b){var u,t=this
b=t.c6(b==null?0:b)
u=t.d
if(!(Math.abs(u-b)<$.B().a)){t.d=b
u=new D.L("location",u,b,[P.C])
u.b=!0
t.C(u)}},
saG:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.B().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.L("maximumVelocity",r,a,[P.C])
r.b=!0
s.C(r)}},
sR:function(a){var u=this,t=a==null?0:a,s=u.e
a=-s
if(!(t<a))a=t>s?s:t
t=u.f
if(!(Math.abs(t-a)<$.B().a)){u.f=a
t=new D.L("velocity",t,a,[P.C])
t.b=!0
u.C(t)}},
saT:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.B().a)){this.x=a
u=new D.L("dampening",u,a,[P.C])
u.b=!0
this.C(u)}},
ai:function(a,b){var u,t,s,r=this,q=r.f,p=$.B().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sY(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.B().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sR(u)}}}
U.dE.prototype={
gt:function(){var u=this.b
return u==null?this.b=D.O():u},
aB:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dE))return!1
return J.V(this.a,b.a)},
i:function(a){return"Constant: "+this.a.M("          ")}}
U.cR.prototype={
gt:function(){var u=this.e
return u==null?this.e=D.O():u},
C:function(a){var u
H.h(a,"$iw")
u=this.e
if(u!=null)u.E(a)},
ad:function(){return this.C(null)},
fu:function(a,b){var u,t,s,r,q,p,o,n=U.aa
H.l(b,"$ij",[n],"$aj")
for(u=b.length,t=this.gaD(),s={func:1,ret:-1,args:[D.w]},r=[s],q=0;q<b.length;b.length===u||(0,H.z)(b),++q){p=b[q]
if(p!=null){o=p.gt()
o.toString
H.p(t,s)
if(o.a==null)o.saw(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bN([n])
n.b=!0
this.C(n)},
im:function(a,b){var u,t,s=U.aa
H.l(b,"$ij",[s],"$aj")
for(u=b.ga_(b),t=this.gaD();u.A();)u.gP(u).gt().V(0,t)
s=new D.bO([s])
s.b=!0
this.C(s)},
aB:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.B()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.av(r,r.length,[H.v(r,0)]),u=null;r.A();){q=r.d
if(q!=null){t=q.aB(0,b,c)
if(t!=null)u=u==null?t:t.k(0,u)}}s.f=u==null?V.cj():u
r=s.e
if(r!=null)r.aI(0)}return s.f},
q:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cR))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.e(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.e(r,t)
if(!J.V(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$aj:function(){return[U.aa]},
$aa0:function(){return[U.aa]},
$iaa:1}
U.cT.prototype={
gt:function(){var u=this.b
return u==null?this.b=D.O():u},
C:function(a){var u
H.h(a,"$iw")
u=this.b
if(u!=null)u.E(a)},
ad:function(){return this.C(null)},
aB:function(a,b,c){var u,t=this,s=t.d,r=b.e
if(s<r){t.d=r
s=t.b
if(s!=null)++s.d
s=t.a
s=s==null?null:s.aB(0,b,c)
u=s==null?null:s.bv(0)
t.c=u==null?V.cj():u
s=t.b
if(s!=null)s.aI(0)}return t.c},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cT))return!1
if(this.a!=b.a)return!1
return!0},
i:function(a){return"Invert"},
$iaa:1}
U.aa.prototype={}
U.ea.prototype={
gt:function(){var u=this.y
return u==null?this.y=D.O():u},
C:function(a){var u=this.y
if(u!=null)u.E(a)},
seY:function(a){var u
a=V.kS(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.B().a)){this.a=a
u=new D.L("yaw",u,a,[P.C])
u.b=!0
this.C(u)}},
seH:function(a,b){var u
b=V.kS(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.B().a)){this.b=b
u=new D.L("pitch",u,b,[P.C])
u.b=!0
this.C(u)}},
seP:function(a){var u
a=V.kS(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.B().a)){this.c=a
u=new D.L("roll",u,a,[P.C])
u.b=!0
this.C(u)}},
aB:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(r<q){s.r=q
r=s.y
if(r!=null)++r.d
s.seY(s.a+s.d*b.y)
s.seH(0,s.b+s.e*b.y)
s.seP(s.c+s.f*b.y)
r=s.c
u=Math.cos(r)
t=Math.sin(r)
s.x=V.bi(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1).k(0,V.m4(s.b)).k(0,V.m3(s.a))
r=s.y
if(r!=null)r.aI(0)}return s.x},
q:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.ea))return!1
u=r.a
t=b.a
s=$.B().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
i:function(a){var u=this
return"Rotater: ["+V.J(u.a,3,0)+", "+V.J(u.b,3,0)+", "+V.J(u.c,3,0)+"], ["+V.J(u.d,3,0)+", "+V.J(u.e,3,0)+", "+V.J(u.f,3,0)+"]"}}
U.eq.prototype={
gt:function(){var u=this.fx
return u==null?this.fx=D.O():u},
C:function(a){var u
H.h(a,"$iw")
u=this.fx
if(u!=null)u.E(a)},
ad:function(){return this.C(null)},
ae:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
u=a.c
t=u.b
u=t==null?u.b=D.O():t
u.h(0,s.ght())
u=s.a.c
t=u.d
u=t==null?u.d=D.O():t
u.h(0,s.ghv())
u=s.a.c
t=u.c
u=t==null?u.c=D.O():t
u.h(0,s.ghx())
u=s.a.d
t=u.f
u=t==null?u.f=D.O():t
u.h(0,s.ghn())
u=s.a.d
t=u.d
u=t==null?u.d=D.O():t
u.h(0,s.ghp())
u=s.a.e
t=u.b
u=t==null?u.b=D.O():t
u.h(0,s.gjb())
u=s.a.e
t=u.d
u=t==null?u.d=D.O():t
u.h(0,s.gj9())
u=s.a.e
t=u.c
u=t==null?u.c=D.O():t
u.h(0,s.gj7())
return!0},
aE:function(a){var u=a.a,t=a.b
if(H.G(this.f)){if(typeof u!=="number")return u.O()
u=-u}if(H.G(this.r)){if(typeof t!=="number")return t.O()
t=-t}return new V.a2(u,t)},
hu:function(a){var u=this
a=H.t(H.h(a,"$iw"),"$ibw")
if(!J.V(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hw:function(a){var u,t,s,r,q,p,o,n=this
a=H.t(H.h(a,"$iw"),"$ibw")
if(!H.G(n.cx))return
if(H.G(n.ch)){u=a.d.p(0,a.y)
u=new V.a2(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.d(t)
if(u<t)return
n.ch=!1}if(H.G(n.e)){u=a.c
t=a.d.p(0,a.y)
u=n.aE(new V.a2(t.a,t.b).k(0,2).w(0,u.gaH()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.d(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.d(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.p(0,a.y)
r=n.aE(new V.a2(s.a,s.b).k(0,2).w(0,u.gaH()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.d(p)
o=n.cy
if(typeof o!=="number")return H.d(o)
s.sY(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.d(q)
s=n.db
if(typeof s!=="number")return H.d(s)
o.sY(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.p(0,a.z)
n.dx=n.aE(new V.a2(t.a,t.b).k(0,2).w(0,u.gaH()))}n.ad()},
hy:function(a){var u,t,s,r=this
H.h(a,"$iw")
if(!H.G(r.cx))return
r.cx=!1
if(H.G(r.ch))return
u=r.dx
if(u.D(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.d(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.d(u)
s.sR(-t*10*u)
r.ad()}},
ho:function(a){var u=this
if(H.t(H.h(a,"$iw"),"$idV").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
hq:function(a){var u,t,s,r,q,p,o,n=this
a=H.t(H.h(a,"$iw"),"$ibw")
if(!J.V(n.d,a.x.b))return
u=a.c
t=a.d
s=t.p(0,a.y)
r=n.aE(new V.a2(s.a,s.b).k(0,2).w(0,u.gaH()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.d(p)
o=n.cy
if(typeof o!=="number")return H.d(o)
s.sY(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.d(q)
s=n.db
if(typeof s!=="number")return H.d(s)
o.sY(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.p(0,a.z)
n.dx=n.aE(new V.a2(t.a,t.b).k(0,2).w(0,u.gaH()))
n.ad()},
jc:function(a){var u=this
H.h(a,"$iw")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
ja:function(a){var u,t,s,r,q,p,o,n=this
a=H.t(H.h(a,"$iw"),"$iek")
if(!H.G(n.cx))return
if(H.G(n.ch)){u=a.d.p(0,a.y)
u=new V.a2(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.d(t)
if(u<t)return
n.ch=!1}if(H.G(n.e)){u=a.c
t=a.d.p(0,a.y)
u=n.aE(new V.a2(t.a,t.b).k(0,2).w(0,u.gaH()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.d(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.d(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.p(0,a.y)
r=n.aE(new V.a2(s.a,s.b).k(0,2).w(0,u.gaH()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.d(p)
o=n.cy
if(typeof o!=="number")return H.d(o)
s.sY(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.d(q)
s=n.db
if(typeof s!=="number")return H.d(s)
o.sY(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.p(0,a.z)
n.dx=n.aE(new V.a2(t.a,t.b).k(0,2).w(0,u.gaH()))}n.ad()},
j8:function(a){var u,t,s,r=this
H.h(a,"$iw")
if(!H.G(r.cx))return
r.cx=!1
if(H.G(r.ch))return
u=r.dx
if(u.D(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.d(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.d(u)
s.sR(-t*10*u)
r.ad()}},
aB:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.B()
if(s<r){t.dy=r
u=b.y
t.c.ai(0,u)
t.b.ai(0,u)
t.fr=V.m3(t.b.d).k(0,V.m4(t.c.d))}return t.fr},
$iaa:1}
U.er.prototype={
gt:function(){var u=this.dx
return u==null?this.dx=D.O():u},
C:function(a){var u
H.h(a,"$iw")
u=this.dx
if(u!=null)u.E(a)},
ad:function(){return this.C(null)},
sR:function(a){this.r.sR(a.a)
this.x.sR(a.b)
this.y.sR(a.c)},
gY:function(a){return new V.u(this.r.d,this.x.d,this.y.d)},
sY:function(a,b){this.r.sY(0,b.a)
this.x.sY(0,b.b)
this.y.sY(0,b.c)},
i4:function(a){this.C(H.h(a,"$iw"))},
cs:function(a,b,c,d,e){if(a.r){if(typeof e!=="number")return e.m()
e+=d}else if(b.r){if(typeof e!=="number")return e.p()
e-=d}else{if(typeof e!=="number")return e.Z()
e=e>0?e-Math.min(e,c):e+Math.min(-e,c)}return e},
aB:function(a,b,c){var u,t,s,r,q,p=this,o=p.cy,n=b.e
if(typeof o!=="number")return o.B()
if(o<n){p.cy=n
u=p.gY(p)
t=b.y
if(t>0.1)t=0.1
o=p.ch
if(typeof o!=="number")return o.k()
s=o*t
o=p.cx
if(typeof o!=="number")return o.k()
r=o*t
q=new V.H(p.r.f,p.x.f,p.y.f)
o=p.Q
if(o!=null)q=o.au(q)
q=new V.H(p.cs(p.a,p.b,s,r,q.a),p.cs(p.c,p.d,s,r,q.b),p.cs(p.e,p.f,s,r,q.c))
o=p.z
p.sR(o!=null?o.au(q):q)
p.r.ai(0,t)
p.x.ai(0,t)
p.y.ai(0,t)
if(p.dy!=null){o=p.gY(p)
p.sY(0,p.dy.$2(u,o))}p.db=V.dX(p.r.d,-p.x.d,p.y.d)}return p.db},
sdm:function(a){this.dy=H.p(a,{func:1,ret:V.u,args:[V.u,V.u]})},
$iaa:1}
M.dJ.prototype={
b4:function(a){var u
H.h(a,"$iw")
u=this.y
if(u!=null)u.E(a)},
fv:function(){return this.b4(null)},
hP:function(a,b){var u,t,s,r,q,p,o,n=E.a1
H.l(b,"$ij",[n],"$aj")
for(u=b.length,t=this.gb3(),s={func:1,ret:-1,args:[D.w]},r=[s],q=0;q<b.length;b.length===u||(0,H.z)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.cd()
o.saw(null)
o.sbn(null)
o.c=null
o.d=0
p.z=o}H.p(t,s)
if(o.a==null)o.saw(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bN([n])
n.b=!0
this.b4(n)},
hR:function(a,b){var u,t,s=E.a1
H.l(b,"$ij",[s],"$aj")
for(u=b.ga_(b),t=this.gb3();u.A();)u.gP(u).gt().V(0,t)
s=new D.bO([s])
s.b=!0
this.b4(s)},
gt:function(){var u=this.y
return u==null?this.y=D.O():u},
bh:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=new E.iH()
e.b=!0
u=f.f
if(u!=null)u.E(e)
a.eL(f.d)
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
if(typeof s!=="number")return H.d(s)
o=C.e.az(p*s)
p=q.b
if(typeof r!=="number")return H.d(r)
n=C.e.az(p*r)
p=C.e.az(q.c*s)
a.c=p
q=C.e.az(q.d*r)
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
i=V.bi(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.eK(i)
t=$.m8
if(t==null){t=V.m2(V.e5(),V.lj(),V.mw())
$.m8=t
h=t}else h=t
t=u.b
if(t!=null){g=t.aB(0,a,u)
if(g!=null)h=g.k(0,h)}a.db.eK(h)
for(u=f.e.a,u=new J.av(u,u.length,[H.v(u,0)]);u.A();)u.d.ai(0,a)
for(u=f.e.a,u=new J.av(u,u.length,[H.v(u,0)]);u.A();)u.d.bh(a)
f.b.toString
a.cy.cS()
a.db.cS()
f.c.toString
a.eI()},
sfX:function(a,b){this.e=H.l(b,"$ia0",[E.a1],"$aa0")},
$iqn:1}
A.dz.prototype={}
A.fF.prototype={
l:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
jM:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
jG:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.ai.prototype={
gN:function(a){var u=this.a?1:0,t=this.b?2:0
return u|t|0},
i:function(a){var u=this.a?1:0,t=this.b?2:0
return""+(u|t|0)},
q:function(a,b){if(b==null)return!1
if(!(b instanceof A.ai))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.hC.prototype={
fc:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
b8.z=c3
u=new P.a8("")
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
A.p7(c3,u)
A.p9(c3,u)
A.p8(c3,u)
A.pb(c3,u)
A.pc(c3,u)
A.pa(c3,u)
A.pd(c3,u)
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
m=A.p6(b8.z)
b8.c=n
b8.d=m
b8.e=b8.dv(n,35633)
b8.f=b8.dv(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!H.G(H.mR(s.getProgramParameter(b8.r,35714)))){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.A(P.D("Failed to link shader: "+H.i(l)))}b8.iU()
b8.iW()
b8.Q=b8.x.l(0,"posAttr")
b8.cx=b8.x.l(0,"normAttr")
b8.ch=b8.x.l(0,"binmAttr")
b8.cy=b8.x.l(0,"txt2DAttr")
b8.db=b8.x.l(0,"txtCubeAttr")
b8.dx=b8.x.l(0,"bendAttr")
if(c3.dx)b8.id=H.t(b8.y.L(0,"invViewMat"),"$iaB")
if(t)b8.dy=H.t(b8.y.L(0,"objMat"),"$iaB")
if(r)b8.fr=H.t(b8.y.L(0,"viewObjMat"),"$iaB")
b8.fy=H.t(b8.y.L(0,"projViewObjMat"),"$iaB")
if(c3.ry)b8.k1=H.t(b8.y.L(0,"txt2DMat"),"$idd")
if(c3.x1)b8.k2=H.t(b8.y.L(0,"txtCubeMat"),"$iaB")
if(c3.x2)b8.k3=H.t(b8.y.L(0,"colorMat"),"$iaB")
b8.sfQ(H.c([],[A.aB]))
t=c3.y2
if(t>0){b8.k4=H.h(b8.y.L(0,"bendMatCount"),"$iaI")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.l(0,q)
if(j==null)H.A(P.D(c0+q+c1));(s&&C.a).h(s,H.t(j,"$iaB"))}}t=c3.a
if(t.a)b8.r2=H.t(b8.y.L(0,"emissionClr"),"$iY")
if(t.b)b8.rx=H.t(b8.y.L(0,"emissionTxt"),"$iar")
t=c3.b
if(t.a)b8.x1=H.t(b8.y.L(0,"ambientClr"),"$iY")
if(t.b)b8.x2=H.t(b8.y.L(0,"ambientTxt"),"$iar")
t=c3.c
if(t.a)b8.y2=H.t(b8.y.L(0,"diffuseClr"),"$iY")
if(t.b)b8.aU=H.t(b8.y.L(0,"diffuseTxt"),"$iar")
t=c3.d
if(t.a)b8.e8=H.t(b8.y.L(0,"invDiffuseClr"),"$iY")
if(t.b)b8.e9=H.t(b8.y.L(0,"invDiffuseTxt"),"$iar")
t=c3.e
s=t.a
if(s||t.b||!1){b8.ec=H.t(b8.y.L(0,"shininess"),"$iam")
if(s)b8.ea=H.t(b8.y.L(0,"specularClr"),"$iY")
if(t.b)b8.eb=H.t(b8.y.L(0,"specularTxt"),"$iar")}if(c3.f.b)b8.ed=H.t(b8.y.L(0,"bumpTxt"),"$iar")
if(c3.cy){b8.ee=H.t(b8.y.L(0,"envSampler"),"$icr")
t=c3.r
if(t.a)b8.ef=H.t(b8.y.L(0,"reflectClr"),"$iY")
if(t.b)b8.eg=H.t(b8.y.L(0,"reflectTxt"),"$iar")
t=c3.x
s=t.a
if(s||t.b||!1){b8.eh=H.t(b8.y.L(0,"refraction"),"$iam")
if(s)b8.ei=H.t(b8.y.L(0,"refractClr"),"$iY")
if(t.b)b8.ej=H.t(b8.y.L(0,"refractTxt"),"$iar")}}t=c3.y
if(t.a)b8.ek=H.t(b8.y.L(0,"alpha"),"$iam")
if(t.b)b8.el=H.t(b8.y.L(0,"alphaTxt"),"$iar")
t=P.m
s=[t,A.aI]
b8.sh5(new H.X(s))
b8.sh6(new H.X([t,[P.b,A.cp]]))
b8.siC(new H.X(s))
b8.siD(new H.X([t,[P.b,A.cq]]))
b8.sj0(new H.X(s))
b8.sj1(new H.X([t,[P.b,A.cs]]))
if(c3.id){for(t=c3.z,s=t.length,r=[A.cp],i=0;i<t.length;t.length===s||(0,H.z)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.i(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.al()
p=(g&1)!==0
if(p){o=b8.y
d=f+"s["+k+"].objUp"
j=o.l(0,d)
if(j==null)H.A(P.D(c0+d+c1))
H.t(j,"$iY")
o=b8.y
d=f+"s["+k+"].objRight"
c=o.l(0,d)
if(c==null)H.A(P.D(c0+d+c1))
H.t(c,"$iY")
o=b8.y
d=f+"s["+k+"].objDir"
b=o.l(0,d)
if(b==null)H.A(P.D(c0+d+c1))
H.t(b,"$iY")
a=b
a0=c
a1=j}else{a=b9
a0=a
a1=a0}o=b8.y
d=f+"s["+k+"].viewDir"
j=o.l(0,d)
if(j==null)H.A(P.D(c0+d+c1))
H.t(j,"$iY")
o=b8.y
d=f+"s["+k+"].color"
c=o.l(0,d)
if(c==null)H.A(P.D(c0+d+c1))
H.t(c,"$iY")
if(p){p=b8.y
o=f+"sTexture2D"+k
b=p.l(0,o)
if(b==null)H.A(P.D(c0+o+c1))
H.t(b,"$iar")
a2=b}else a2=b9
C.a.h(e,new A.cp(a1,a0,a,j,c,a2))}b8.cE.j(0,g,e)
q=b8.cD
p=b8.y
o=f+"Count"
j=p.l(0,o)
if(j==null)H.A(P.D(c0+o+c1))
q.j(0,g,H.h(j,"$iaI"))}for(t=c3.Q,s=t.length,r=[A.cq],i=0;i<t.length;t.length===s||(0,H.z)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.i(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.l(0,o)
if(j==null)H.A(P.D(c0+o+c1))
H.t(j,"$iY")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.l(0,o)
if(c==null)H.A(P.D(c0+o+c1))
H.t(c,"$iY")
p=b8.y
o=f+"s["+k+"].color"
b=p.l(0,o)
if(b==null)H.A(P.D(c0+o+c1))
H.t(b,"$iY")
if(typeof g!=="number")return g.al()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
a3=p.l(0,o)
if(a3==null)H.A(P.D(c0+o+c1))
H.t(a3,"$idd")
a4=a3}else a4=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
a3=p.l(0,o)
if(a3==null)H.A(P.D(c0+o+c1))
H.t(a3,"$icr")
a2=a3}else a2=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
a3=p.l(0,o)
if(a3==null)H.A(P.D(c0+o+c1))
H.t(a3,"$icr")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a5=p.l(0,o)
if(a5==null)H.A(P.D(c0+o+c1))
H.t(a5,"$idc")
a6=a3
a7=a5}else{a6=b9
a7=a6}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
a3=p.l(0,o)
if(a3==null)H.A(P.D(c0+o+c1))
H.t(a3,"$iam")
p=b8.y
o=f+"s["+k+"].att1"
a5=p.l(0,o)
if(a5==null)H.A(P.D(c0+o+c1))
H.t(a5,"$iam")
p=b8.y
o=f+"s["+k+"].att2"
a8=p.l(0,o)
if(a8==null)H.A(P.D(c0+o+c1))
H.t(a8,"$iam")
a9=a8
b0=a5
b1=a3}else{a9=b9
b0=a9
b1=b0}C.a.h(e,new A.cq(j,c,a4,b,a2,a6,a7,b1,b0,a9))}b8.cG.j(0,g,e)
q=b8.cF
p=b8.y
o=f+"Count"
j=p.l(0,o)
if(j==null)H.A(P.D(c0+o+c1))
q.j(0,g,H.h(j,"$iaI"))}for(t=c3.ch,s=t.length,r=[A.cs],i=0;i<t.length;t.length===s||(0,H.z)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.i(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.l(0,o)
if(j==null)H.A(P.D(c0+o+c1))
H.t(j,"$iY")
p=b8.y
o=f+"s["+k+"].objDir"
c=p.l(0,o)
if(c==null)H.A(P.D(c0+o+c1))
H.t(c,"$iY")
p=b8.y
o=f+"s["+k+"].viewPnt"
b=p.l(0,o)
if(b==null)H.A(P.D(c0+o+c1))
H.t(b,"$iY")
p=b8.y
o=f+"s["+k+"].color"
a3=p.l(0,o)
if(a3==null)H.A(P.D(c0+o+c1))
H.t(a3,"$iY")
if(typeof g!=="number")return g.al()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a5=p.l(0,o)
if(a5==null)H.A(P.D(c0+o+c1))
H.t(a5,"$iY")
p=b8.y
o=f+"s["+k+"].objRight"
a8=p.l(0,o)
if(a8==null)H.A(P.D(c0+o+c1))
H.t(a8,"$iY")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.l(0,o)
if(b2==null)H.A(P.D(c0+o+c1))
H.t(b2,"$iam")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.l(0,o)
if(b3==null)H.A(P.D(c0+o+c1))
H.t(b3,"$iam")
b4=b3
b5=b2
a0=a8
a1=a5}else{b4=b9
b5=b4
a0=b5
a1=a0}p=(g&2)!==0
if(p){o=b8.y
d=f+"s["+k+"].shadowAdj"
a5=o.l(0,d)
if(a5==null)H.A(P.D(c0+d+c1))
H.t(a5,"$idc")
a7=a5}else a7=b9
if((g&8)!==0){o=b8.y
d=f+"s["+k+"].cutoff"
a5=o.l(0,d)
if(a5==null)H.A(P.D(c0+d+c1))
H.t(a5,"$iam")
o=b8.y
d=f+"s["+k+"].coneAngle"
a8=o.l(0,d)
if(a8==null)H.A(P.D(c0+d+c1))
H.t(a8,"$iam")
b6=a8
b7=a5}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
d=f+"s["+k+"].att0"
a5=o.l(0,d)
if(a5==null)H.A(P.D(c0+d+c1))
H.t(a5,"$iam")
o=b8.y
d=f+"s["+k+"].att1"
a8=o.l(0,d)
if(a8==null)H.A(P.D(c0+d+c1))
H.t(a8,"$iam")
o=b8.y
d=f+"s["+k+"].att2"
b2=o.l(0,d)
if(b2==null)H.A(P.D(c0+d+c1))
H.t(b2,"$iam")
a9=b2
b0=a8
b1=a5}else{a9=b9
b0=a9
b1=b0}if((g&1)!==0){o=b8.y
d=f+"sTexture2D"+k
a5=o.l(0,d)
if(a5==null)H.A(P.D(c0+d+c1))
H.t(a5,"$iar")
a2=a5}else a2=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a5=p.l(0,o)
if(a5==null)H.A(P.D(c0+o+c1))
H.t(a5,"$iar")
a6=a5}else a6=b9
C.a.h(e,new A.cs(j,c,b,a3,a1,a0,b5,b4,a7,b7,b6,b1,b0,a9,a2,a6))}b8.cI.j(0,g,e)
q=b8.cH
p=b8.y
o=f+"Count"
j=p.l(0,o)
if(j==null)H.A(P.D(c0+o+c1))
q.j(0,g,H.h(j,"$iaI"))}}},
ay:function(a,b){if(b!=null&&b.gaa(b))a.f3(b)},
iT:function(a,b){},
sfQ:function(a){this.r1=H.l(a,"$ib",[A.aB],"$ab")},
sh5:function(a){this.cD=H.l(a,"$iy",[P.m,A.aI],"$ay")},
sh6:function(a){this.cE=H.l(a,"$iy",[P.m,[P.b,A.cp]],"$ay")},
siC:function(a){this.cF=H.l(a,"$iy",[P.m,A.aI],"$ay")},
siD:function(a){this.cG=H.l(a,"$iy",[P.m,[P.b,A.cq]],"$ay")},
sj0:function(a){this.cH=H.l(a,"$iy",[P.m,A.aI],"$ay")},
sj1:function(a){this.cI=H.l(a,"$iy",[P.m,[P.b,A.cs]],"$ay")}}
A.aN.prototype={
i:function(a){return"dirLight"+H.i(this.a)}}
A.aU.prototype={
i:function(a){return"pointLight"+H.i(this.a)}}
A.aY.prototype={
i:function(a){return"spotLight"+H.i(this.a)}}
A.hF.prototype={
i:function(a){return this.aU}}
A.cp.prototype={}
A.cq.prototype={}
A.cs.prototype={}
A.d4.prototype={
fg:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
dv:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.G(H.mR(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.f(P.D("Error compiling shader '"+H.i(s)+"': "+H.i(u)))}return s},
iU:function(){var u,t,s,r=this,q=H.c([],[A.dz]),p=r.a,o=H.ab(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.d(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.dz(p,t.name,s))}r.x=new A.fF(q)},
iW:function(){var u,t,s,r=this,q=H.c([],[A.el]),p=r.a,o=H.ab(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.d(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.jD(t.type,t.size,t.name,s))}r.y=new A.jf(q)},
b8:function(a,b,c){var u=this.a
if(a===1)return new A.aI(u,b,c)
else return A.lg(u,this.r,b,a,c)},
h0:function(a,b,c){var u=this.a
if(a===1)return new A.ar(u,b,c)
else return A.lg(u,this.r,b,a,c)},
h1:function(a,b,c){var u=this.a
if(a===1)return new A.cr(u,b,c)
else return A.lg(u,this.r,b,a,c)},
bL:function(a,b){return new P.eD(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
jD:function(a,b,c,d){var u=this
switch(a){case 5120:return u.b8(b,c,d)
case 5121:return u.b8(b,c,d)
case 5122:return u.b8(b,c,d)
case 5123:return u.b8(b,c,d)
case 5124:return u.b8(b,c,d)
case 5125:return u.b8(b,c,d)
case 5126:return new A.am(u.a,c,d)
case 35664:return new A.jb(u.a,c,d)
case 35665:return new A.Y(u.a,c,d)
case 35666:return new A.dc(u.a,c,d)
case 35667:return new A.jc(u.a,c,d)
case 35668:return new A.jd(u.a,c,d)
case 35669:return new A.je(u.a,c,d)
case 35674:return new A.jg(u.a,c,d)
case 35675:return new A.dd(u.a,c,d)
case 35676:return new A.aB(u.a,c,d)
case 35678:return u.h0(b,c,d)
case 35680:return u.h1(b,c,d)
case 35670:throw H.f(u.bL("BOOL",c))
case 35671:throw H.f(u.bL("BOOL_VEC2",c))
case 35672:throw H.f(u.bL("BOOL_VEC3",c))
case 35673:throw H.f(u.bL("BOOL_VEC4",c))
default:throw H.f(P.D("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}}
A.el.prototype={}
A.jf.prototype={
l:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
L:function(a,b){var u=this.l(0,b)
if(u==null)throw H.f(P.D("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.T()},
T:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.z)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.aI.prototype={
i:function(a){return"Uniform1i: "+H.i(this.c)}}
A.jc.prototype={
i:function(a){return"Uniform2i: "+H.i(this.c)}}
A.jd.prototype={
i:function(a){return"Uniform3i: "+H.i(this.c)}}
A.je.prototype={
i:function(a){return"Uniform4i: "+H.i(this.c)}}
A.ja.prototype={
i:function(a){return"Uniform1iv: "+H.i(this.c)},
sjn:function(a){H.l(a,"$ib",[P.m],"$ab")}}
A.am.prototype={
i:function(a){return"Uniform1f: "+H.i(this.c)}}
A.jb.prototype={
i:function(a){return"Uniform2f: "+H.i(this.c)}}
A.Y.prototype={
i:function(a){return"Uniform3f: "+H.i(this.c)}}
A.dc.prototype={
i:function(a){return"Uniform4f: "+H.i(this.c)}}
A.jg.prototype={
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}}
A.dd.prototype={
aC:function(a){var u=new Float32Array(H.cw(H.l(a,"$ib",[P.C],"$ab")))
C.c.eU(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.i(this.c)}}
A.aB.prototype={
aC:function(a){var u=new Float32Array(H.cw(H.l(a,"$ib",[P.C],"$ab")))
C.c.eV(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.i(this.c)}}
A.ar.prototype={
f3:function(a){var u=a.gaa(a),t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.ga9(a))},
i:function(a){return"UniformSampler2D: "+H.i(this.c)}}
A.cr.prototype={
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}
F.ae.prototype={
fP:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.df()
if(q!=null)s=s.m(0,q)
if(u!=null)s=s.m(0,u)
if(t!=null)s=s.m(0,t)
if(s.cN())return
return s.w(0,Math.sqrt(s.D(s)))},
fW:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.p(0,q)
r=new V.H(r.a,r.b,r.c)
s=r.w(0,Math.sqrt(r.D(r)))
r=t.p(0,q)
r=new V.H(r.a,r.b,r.c)
r=s.bu(r.w(0,Math.sqrt(r.D(r))))
return r.w(0,Math.sqrt(r.D(r)))},
cB:function(){var u,t=this
if(t.d!=null)return!0
u=t.fP()
if(u==null){u=t.fW()
if(u==null)return!1}t.d=u
t.a.a.ag()
return!0},
fO:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.df()
if(q!=null)s=s.m(0,q)
if(u!=null)s=s.m(0,u)
if(t!=null)s=s.m(0,t)
if(s.cN())return
return s.w(0,Math.sqrt(s.D(s)))},
fV:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
k=s.b
if(typeof l!=="number")return l.p()
if(typeof k!=="number")return H.d(k)
r=l-k
if(Math.abs(r-0)<$.B().a){l=d.p(0,g)
l=new V.H(l.a,l.b,l.c)
q=l.w(0,Math.sqrt(l.D(l)))
l=s.a
t=t.a
if(typeof l!=="number")return l.p()
if(typeof t!=="number")return H.d(t)
if(l-t<0)q=q.O(0)}else{k=u.b
if(typeof k!=="number")return H.d(k)
p=(l-k)/r
k=d.p(0,g).k(0,p).m(0,g).p(0,j)
k=new V.H(k.a,k.b,k.c)
q=k.w(0,Math.sqrt(k.D(k)))
s=s.a
t=t.a
if(typeof s!=="number")return s.p()
if(typeof t!=="number")return H.d(t)
u=u.a
if(typeof u!=="number")return H.d(u)
if((s-t)*p+t-u<0)q=q.O(0)}l=n.d
if(l!=null){o=l.w(0,Math.sqrt(l.D(l)))
l=o.bu(q)
l=l.w(0,Math.sqrt(l.D(l))).bu(o)
q=l.w(0,Math.sqrt(l.D(l)))}return q},
cA:function(){var u,t=this
if(t.e!=null)return!0
u=t.fO()
if(u==null){u=t.fV()
if(u==null)return!1}t.e=u
t.a.a.ag()
return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.T()},
M:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.b.aZ(J.b7(s.e),0)+", "+C.b.aZ(J.b7(t.b.e),0)+", "+C.b.aZ(J.b7(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.i(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.i(0)+"}"):u+"-}"},
T:function(){return this.M("")}}
F.bR.prototype={}
F.cl.prototype={}
F.d3.prototype={
gt:function(){var u=this.Q
return u==null?this.Q=D.O():u},
br:function(a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this
H.l(a0,"$ib",[F.bo],"$ab")
u=a0.length
t=new Array(u*a.c)
t.fixed$length=Array
s=H.c(t,[P.C])
for(t=a.a,r=0,q=0;q<a.b;++q){p=t.cv(q)
for(o=0;o<u;++o){if(o>=a0.length)return H.e(a0,o)
n=a0[o].ev(p)
m=r+o*a.c
for(l=0;l<n.length;++l){C.a.j(s,m,n[l]);++m}}r+=p.gbk(p)}k=$.ad()
if((t.a&k.a)!==0){t=a.z
if(t==null){if(0>=a0.length)return H.e(a0,0)
t=a0[0].f
t=V.ih(t.a,t.b,t.c,0,0,0)
a.z=t}for(q=u-1;q>=0;--q){if(q>=a0.length)return H.e(a0,q)
k=a0[q].f
j=k.a
i=k.b
k=k.c
h=t.d
g=t.a
if(typeof j!=="number")return j.B()
if(typeof g!=="number")return H.d(g)
if(j<g){h+=g-j
f=j}else{if(j>g+h)h=j-g
f=g}e=t.e
j=t.b
if(typeof i!=="number")return i.B()
if(typeof j!=="number")return H.d(j)
if(i<j){e+=j-i
d=i}else{if(i>j+e)e=i-j
d=j}c=t.f
t=t.c
if(typeof k!=="number")return k.B()
if(typeof t!=="number")return H.d(t)
if(k<t){c+=t-k
b=k}else{if(k>t+c)c=k-t
b=t}t=new V.bX(f,d,b,h,e,c)
a.z=t}}m=a.d
a.d=m+u
C.a.aP(a.f,s)
a.ag()
return m},
bq:function(a){var u,t,s,r,q,p,o=P.m
H.l(a,"$ib",[o],"$ab")
u=a.length
if(u>=3){t=new Array((u-2)*3)
t.fixed$length=Array
s=H.c(t,[o])
if(0>=a.length)return H.e(a,0)
r=a[0]
for(q=2,p=0;q<u;++q,p+=3){C.a.j(s,p,r)
o=q-1
if(o>=a.length)return H.e(a,o)
C.a.j(s,p+1,a[o])
if(q>=a.length)return H.e(a,q)
C.a.j(s,p+2,a[q])}C.a.aP(this.y,s)
this.ag()}},
jq:function(a){var u,t,s,r,q,p,o,n,m,l=P.m
H.l(a,"$ib",[l],"$ab")
u=a.length
if(u>=3){t=new Array((u-2)*3)
t.fixed$length=Array
s=H.c(t,[l])
for(r=!1,q=2,p=0;q<u;++q,p+=3){l=q-2
t=p+1
o=q-1
n=p+2
m=a.length
if(r){if(l>=m)return H.e(a,l)
C.a.j(s,p,a[l])
if(o>=a.length)return H.e(a,o)
C.a.j(s,t,a[o])
if(q>=a.length)return H.e(a,q)
C.a.j(s,n,a[q])
r=!1}else{if(o>=m)return H.e(a,o)
C.a.j(s,p,a[o])
if(l>=a.length)return H.e(a,l)
C.a.j(s,t,a[l])
if(q>=a.length)return H.e(a,q)
C.a.j(s,n,a[q])
r=!0}}C.a.aP(this.y,s)
this.ag()}},
ag:function(){var u=this.Q
if(u!=null)u.E(null)},
aS:function(){return!1},
be:function(){return!1},
bN:function(){return!1},
e1:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.a
if(!J.V(b,l))throw H.f(P.D("Shape was reduced to "+H.i(l)+" so can not build for "+H.i(b)+"."))
if(m.e==null){u=m.c*4
t=new Array(m.b)
t.fixed$length=Array
m.sfN(H.c(t,[Z.bI]))
for(s=0,r=0;r<m.b;++r){q=l.cv(r)
p=q.gbk(q)
t=m.e;(t&&C.a).j(t,r,new Z.bI(q,p,s*4,u))
s+=p}}t=a.a
o=new Z.cK(Z.mx(t,34962,H.l(m.f,"$ib",[P.C],"$ab")),m.e,l)
o.sdC(H.c([],[Z.aQ]))
l=m.r
if(l.length!==0){n=Z.et(t,34963,H.l(l,"$ib",[P.m],"$ab"))
C.a.h(o.b,new Z.aQ(0,m.r.length,n))}l=m.x
if(l.length!==0){n=Z.et(t,34963,H.l(l,"$ib",[P.m],"$ab"))
C.a.h(o.b,new Z.aQ(1,m.x.length,n))}l=m.y
if(l.length!==0){n=Z.et(t,34963,H.l(l,"$ib",[P.m],"$ab"))
C.a.h(o.b,new Z.aQ(4,m.y.length,n))}return o},
sfN:function(a){this.e=H.l(a,"$ib",[Z.bI],"$ab")},
sct:function(a){this.f=H.l(a,"$ib",[P.C],"$ab")},
sbo:function(a){this.r=H.l(a,"$ib",[P.m],"$ab")},
sce:function(a){this.x=H.l(a,"$ib",[P.m],"$ab")},
scb:function(a){this.y=H.l(a,"$ib",[P.m],"$ab")},
$id5:1}
F.ec.prototype={
gt:function(){var u=this.e
return u==null?this.e=D.O():u},
aS:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aS()||!1
if(!t.a.aS())u=!1
s=t.e
if(s!=null)s.aI(0)
return u},
be:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.be()||!1
if(!t.a.be())u=!1
s=t.e
if(s!=null)s.aI(0)
return u},
bN:function(){var u=this.e
if(u!=null)++u.d
this.a.bN()
u=this.e
if(u!=null)u.aI(0)
return!0},
e1:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.a.c.length,d=a1.ge4(a1),c=a1.gbk(a1),b=c*4,a=new Array(e*c)
a.fixed$length=Array
u=P.C
t=H.c(a,[u])
a=new Array(d)
a.fixed$length=Array
s=H.c(a,[Z.bI])
for(r=0,q=0;q<d;++q){p=a1.cv(q)
o=p.gbk(p)
C.a.j(s,q,new Z.bI(p,o,r*4,b))
for(n=0;n<e;++n){a=f.a.c
if(n>=a.length)return H.e(a,n)
m=a[n].ev(p)
l=r+n*c
for(k=0;k<m.length;++k){C.a.j(t,l,m[k]);++l}}r+=o}a=a0.a
j=new Z.cK(Z.mx(a,34962,H.l(t,"$ib",[u],"$ab")),s,a1)
j.sdC(H.c([],[Z.aQ]))
f.b.b
if(f.c.b.length!==0){u=P.m
i=H.c([],[u])
for(q=0;h=f.c.b,q<h.length;++q){h=h[q].a
h.a.a.bd()
C.a.h(i,h.e)
h=f.c.b
if(q>=h.length)return H.e(h,q)
h=h[q].b
h.a.a.bd()
C.a.h(i,h.e)}g=Z.et(a,34963,H.l(i,"$ib",[u],"$ab"))
C.a.h(j.b,new Z.aQ(1,i.length,g))}if(f.d.b.length!==0){u=P.m
i=H.c([],[u])
for(q=0;h=f.d.b,q<h.length;++q){h=h[q].a
h.a.a.bd()
C.a.h(i,h.e)
h=f.d.b
if(q>=h.length)return H.e(h,q)
h=h[q].b
h.a.a.bd()
C.a.h(i,h.e)
h=f.d.b
if(q>=h.length)return H.e(h,q)
h=h[q].c
h.a.a.bd()
C.a.h(i,h.e)}g=Z.et(a,34963,H.l(i,"$ib",[u],"$ab"))
C.a.h(j.b,new Z.aQ(4,i.length,g))}return j},
i:function(a){var u=this,t=H.c([],[P.k])
if(u.a.c.length!==0){C.a.h(t,"Vertices:")
C.a.h(t,u.a.M("   "))}u.b.b
if(u.c.b.length!==0){C.a.h(t,"Lines:")
C.a.h(t,u.c.M("   "))}if(u.d.b.length!==0){C.a.h(t,"Faces:")
C.a.h(t,u.d.M("   "))}return C.a.v(t,"\n")},
ag:function(){var u=this.e
if(u!=null)u.E(null)},
$id5:1}
F.d5.prototype={}
F.is.prototype={
jp:function(a){var u,t,s,r,q,p,o,n
H.l(a,"$ib",[F.bo],"$ab")
u=H.c([],[F.ae])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
o=new F.ae()
n=t.a
if(n==null)H.A(P.D("May not create a face with a first vertex which is not attached to a shape."))
if(n!=q.a||n!=p.a)H.A(P.D("May not create a face with vertices attached to different shapes."))
o.a=t
C.a.h(t.d.b,o)
o.b=q
C.a.h(q.d.c,o)
o.c=p
C.a.h(p.d.d,o)
C.a.h(o.a.a.d.b,o)
q=o.a.a.e
if(q!=null)q.E(null)
C.a.h(u,o)}return u},
gn:function(a){return this.b.length},
aS:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.z)(u),++r)if(!u[r].cB())s=!1
return s},
be:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.z)(u),++r)if(!u[r].cA())s=!1
return s},
i:function(a){return this.T()},
M:function(a){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)C.a.h(r,u[s].M(a))
return C.a.v(r,"\n")},
T:function(){return this.M("")},
scb:function(a){this.b=H.l(a,"$ib",[F.ae],"$ab")}}
F.it.prototype={
gn:function(a){return this.b.length},
i:function(a){return this.T()},
M:function(a){var u,t,s=H.c([],[P.k]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.e(t,u)
C.a.h(s,t[u].M(a+(""+u+". ")))}return C.a.v(s,"\n")},
T:function(){return this.M("")},
sce:function(a){this.b=H.l(a,"$ib",[F.bR],"$ab")}}
F.iu.prototype={
gn:function(a){return 0},
i:function(a){return this.T()},
M:function(a){var u,t,s=H.c([],[P.k])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.e(u,t)
C.a.h(s,u[t].M(a))}return C.a.v(s,"\n")},
T:function(){return this.M("")},
sbo:function(a){this.b=H.l(a,"$ib",[F.cl],"$ab")}}
F.bo.prototype={
ev:function(a){var u,t=this,s=J.R(a)
if(s.q(a,$.ad())){s=t.f
u=[P.C]
if(s==null)return H.c([0,0,0],u)
else return H.c([s.a,s.b,s.c],u)}else if(s.q(a,$.as())){s=t.r
u=[P.C]
if(s==null)return H.c([0,1,0],u)
else return H.c([s.a,s.b,s.c],u)}else if(s.q(a,$.bH())){s=t.x
u=[P.C]
if(s==null)return H.c([0,0,1],u)
else return H.c([s.a,s.b,s.c],u)}else if(s.q(a,$.ah())){s=t.y
u=[P.C]
if(s==null)return H.c([0,0],u)
else return H.c([s.a,s.b],u)}else if(s.q(a,$.c2())){s=t.z
u=[P.C]
if(s==null)return H.c([0,0,0],u)
else return H.c([s.a,s.b,s.c],u)}else if(s.q(a,$.dv())){s=t.Q
u=[P.C]
if(s==null)return H.c([1,1,1],u)
else return H.c([s.a,s.b,s.c],u)}else if(s.q(a,$.dw())){s=t.Q
u=[P.C]
if(s==null)return H.c([1,1,1,1],u)
else return H.c([s.a,s.b,s.c,s.d],u)}else if(s.q(a,$.cH()))return H.c([t.ch],[P.C])
else if(s.q(a,$.bG())){s=t.cx
u=[P.C]
if(s==null)return H.c([-1,-1,-1,-1],u)
else return H.c([s.a,s.b,s.c,s.d],u)}else return H.c([],[P.C])},
cB:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.df()
t.d.K(0,new F.jE(s))
s=s.a
t.r=s.w(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.ag()
s=t.a.e
if(s!=null)s.aI(0)}return!0},
cA:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.df()
t.d.K(0,new F.jD(s))
s=s.a
t.x=s.w(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.ag()
s=t.a.e
if(s!=null)s.aI(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.T()},
M:function(a){var u,t,s=this,r="-",q=H.c([],[P.k])
C.a.h(q,C.b.aZ(J.b7(s.e),0))
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
C.a.h(q,V.J(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.v(q,", ")
return a+"{"+t+"}"},
T:function(){return this.M("")}}
F.jE.prototype={
$1:function(a){var u,t
H.h(a,"$iae")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.m(0,u)}},
$S:7}
F.jD.prototype={
$1:function(a){var u,t
H.h(a,"$iae")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.m(0,u)}},
$S:7}
F.jx.prototype={
bd:function(){},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.f(P.D("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.ag()
return!0},
bM:function(a,b,c,d,e,f){var u=F.ct(a,null,b,c,null,d,e,f,0)
this.h(0,u)
return u},
gn:function(a){return this.c.length},
aS:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)u[s].cB()
return!0},
be:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)u[s].cA()
return!0},
bN:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
if(typeof p!=="number")return p.k()
o=q.b
if(typeof o!=="number")return o.k()
n=q.c
if(typeof n!=="number")return n.k()
n=q.w(0,Math.sqrt(p*p+o*o+n*n))
if(!J.V(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.E(null)}}}}return!0},
i:function(a){return this.T()},
M:function(a){var u,t,s,r
this.bd()
u=H.c([],[P.k])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].M(a))
return C.a.v(u,"\n")},
T:function(){return this.M("")},
sct:function(a){this.c=H.l(a,"$ib",[F.bo],"$ab")}}
F.jy.prototype={
gn:function(a){return this.b.length+this.c.length+this.d.length},
K:function(a,b){var u=this
H.p(b,{func:1,ret:-1,args:[F.ae]})
C.a.K(u.b,b)
C.a.K(u.c,new F.jz(u,b))
C.a.K(u.d,new F.jA(u,b))},
i:function(a){return this.T()},
T:function(){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)C.a.h(r,u[s].M(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)C.a.h(r,u[s].M(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)C.a.h(r,u[s].M(""))
return C.a.v(r,"\n")},
sh9:function(a){this.b=H.l(a,"$ib",[F.ae],"$ab")},
sha:function(a){this.c=H.l(a,"$ib",[F.ae],"$ab")},
shb:function(a){this.d=H.l(a,"$ib",[F.ae],"$ab")}}
F.jz.prototype={
$1:function(a){H.h(a,"$iae")
if(!J.V(a.a,this.a))this.b.$1(a)},
$S:7}
F.jA.prototype={
$1:function(a){var u
H.h(a,"$iae")
u=this.a
if(!J.V(a.a,u)&&!J.V(a.b,u))this.b.$1(a)},
$S:7}
F.jB.prototype={
gn:function(a){return this.b.length+this.c.length},
i:function(a){return this.T()},
T:function(){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)C.a.h(r,u[s].M(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)C.a.h(r,u[s].M(""))
return C.a.v(r,"\n")},
shk:function(a){this.b=H.l(a,"$ib",[F.bR],"$ab")},
shl:function(a){this.c=H.l(a,"$ib",[F.bR],"$ab")}}
F.jC.prototype={
gn:function(a){return 0},
i:function(a){return this.T()},
T:function(){var u,t,s=H.c([],[P.k])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.e(u,t)
C.a.h(s,u[t].M(""))}return C.a.v(s,"\n")},
sbo:function(a){this.b=H.l(a,"$ib",[F.cl],"$ab")}}
O.ci.prototype={
gt:function(){var u=this.fr
return u==null?this.fr=D.O():u},
a3:function(a){var u
H.h(a,"$iw")
u=this.fr
if(u!=null)u.E(a)},
c5:function(){return this.a3(null)},
dN:function(a){H.h(a,"$iw")
this.a=null
this.a3(a)},
iQ:function(){return this.dN(null)},
hD:function(a,b){var u=V.au
H.l(b,"$ij",[u],"$aj")
u=new D.bN([u])
u.b=!0
this.a3(u)},
hF:function(a,b){var u=V.au
H.l(b,"$ij",[u],"$aj")
u=new D.bO([u])
u.b=!0
this.a3(u)},
ds:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.m,h=new H.X([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=h.l(0,0)
h.j(0,0,r==null?1:r)}q=H.c([],[A.aN])
h.K(0,new O.hJ(j,q))
C.a.c2(q,new O.hK())
p=new H.X([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){o=u[s]
r=o.gbt()
n=p.l(0,o.gbt())
p.j(0,r,n==null?1:n)}m=H.c([],[A.aU])
p.K(0,new O.hL(j,m))
C.a.c2(m,new O.hM())
l=new H.X([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.z)(i),++s){o=i[s]
t=o.gbt()
r=l.l(0,o.gbt())
l.j(0,t,r==null?1:r)}k=H.c([],[A.aY])
l.K(0,new O.hN(j,k))
C.a.c2(k,new O.hO())
i=C.d.a7(j.e.a.length+3,4)
j.dy.e
return A.nW(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
an:function(a,b){H.l(a,"$ib",[T.d9],"$ab")
if(b!=null)if(!C.a.ak(a,b)){b.sa9(0,a.length)
C.a.h(a,b)}},
ai:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.av(u,u.length,[H.v(u,0)]);u.A();){t=u.d
t.toString
s=$.jw
if(s==null)s=$.jw=new V.H(0,0,1)
t.a=s
r=$.jv
t.d=r==null?$.jv=new V.H(0,1,0):r
r=$.ju
t.e=r==null?$.ju=new V.H(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.au(s)
r=s.a
if(typeof r!=="number")return r.k()
p=s.b
if(typeof p!=="number")return p.k()
o=s.c
if(typeof o!=="number")return o.k()
t.a=s.w(0,Math.sqrt(r*r+p*p+o*o))
o=q.au(t.d)
p=o.a
if(typeof p!=="number")return p.k()
r=o.b
if(typeof r!=="number")return r.k()
s=o.c
if(typeof s!=="number")return s.k()
t.d=o.w(0,Math.sqrt(p*p+r*r+s*s))
s=q.au(t.e)
r=s.a
if(typeof r!=="number")return r.k()
p=s.b
if(typeof p!=="number")return p.k()
o=s.c
if(typeof o!=="number")return o.k()
t.e=s.w(0,Math.sqrt(r*r+p*p+o*o))}}}},
km:function(b6,b7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=b4.a
if(b5==null){b5=b4.ds()
u=b6.fr.l(0,b5.aU)
if(u==null){u=A.nV(b5,b6.a)
t=u.b
if(t.length===0)H.A(P.D("May not cache a shader with no name."))
if(b6.fr.bQ(0,t))H.A(P.D('Shader cache already contains a shader by the name "'+t+'".'))
b6.fr.j(0,t,u)}b5=b4.a=u
b7.e=null}s=b5.z
r=s.e7
b5=b7.e
if(!(b5 instanceof Z.cK))b5=b7.e=null
if(b5==null||!J.V(b5.d,r)){b5=s.k3
if(b5)b7.d.aS()
q=s.k4
if(q)b7.d.be()
p=s.r2
if(p)b7.d.bN()
o=b7.d.e1(new Z.jG(b6.a),r)
o.bf($.ad()).e=b4.a.Q.c
if(b5)o.bf($.as()).e=b4.a.cx.c
if(q)o.bf($.bH()).e=b4.a.ch.c
if(s.r1)o.bf($.ah()).e=b4.a.cy.c
if(p)o.bf($.c2()).e=b4.a.db.c
if(s.rx)o.bf($.bG()).e=b4.a.dx.c
b7.e=o}b5=T.d9
n=H.c([],[b5])
q=b4.a
p=b6.a
p.useProgram(q.r)
q.x.jM()
if(s.dy){q=b4.a
m=b6.dx
m=m.ga8(m)
q=q.dy
q.toString
q.aC(m.at(0,!0))}if(s.fr){q=b4.a
m=b6.cx
if(m==null){m=b6.db
m=m.ga8(m)
l=b6.dx
l=b6.cx=m.k(0,l.ga8(l))
m=l}q=q.fr
q.toString
q.aC(m.at(0,!0))}q=b4.a
m=b6.ch
if(m==null){m=b6.gkj()
l=b6.dx
l=b6.ch=m.k(0,l.ga8(l))
m=l}q=q.fy
q.toString
q.aC(m.at(0,!0))
if(s.ry){q=b4.a
m=b4.b
q=q.k1
q.toString
q.aC(C.m.at(m,!0))}if(s.x1){q=b4.a
m=b4.c
q=q.k2
q.toString
q.aC(C.m.at(m,!0))}if(s.x2){q=b4.a
m=b4.d
q=q.k3
q.toString
q.aC(C.m.at(m,!0))}if(s.y2>0){k=b4.e.a.length
q=b4.a.k4
C.c.bZ(q.a,q.d,k)
for(q=[P.C],j=0;j<k;++j){m=b4.a
l=b4.e.a
if(j>=l.length)return H.e(l,j)
l=l[j]
m.toString
H.h(l,"$iau")
m=m.r1
if(j>=m.length)return H.e(m,j)
m=m[j]
i=new Float32Array(H.cw(H.l(l.at(0,!0),"$ib",q,"$ab")))
C.c.eV(m.a,m.d,!1,i)}}q=s.a
if(q.a){m=b4.a
l=b4.f.f
m=m.r2
C.c.a0(m.a,m.d,l.a,l.b,l.c)}if(q.b){b4.an(n,b4.f.d)
q=b4.a
m=b4.f.d
q.ay(q.rx,m)}if(s.id){q=s.b
if(q.a){m=b4.a
l=b4.r.f
m=m.x1
C.c.a0(m.a,m.d,l.a,l.b,l.c)}if(q.b){b4.an(n,b4.r.d)
q=b4.a
m=b4.r.d
q.ay(q.x2,m)}q=s.c
if(q.a){m=b4.a
l=b4.x.f
m=m.y2
C.c.a0(m.a,m.d,l.a,l.b,l.c)}if(q.b){b4.an(n,b4.x.d)
q=b4.a
m=b4.x.d
q.ay(q.aU,m)}q=s.d
if(q.a){m=b4.a
l=b4.y.f
m=m.e8
C.c.a0(m.a,m.d,l.a,l.b,l.c)}if(q.b){b4.an(n,b4.y.d)
q=b4.a
m=b4.y.d
q.ay(q.e9,m)}q=s.e
m=q.a
if(m||q.b||!1){l=b4.a
h=b4.z.ch
l=l.ec
C.c.ab(l.a,l.d,h)}if(m){m=b4.a
l=b4.z.f
m=m.ea
C.c.a0(m.a,m.d,l.a,l.b,l.c)}if(q.b){b4.an(n,b4.z.d)
q=b4.a
m=b4.z.d
q.ay(q.eb,m)}q=s.z
if(q.length>0){m=b6.db
g=m.ga8(m)
m=P.m
f=new H.X([m,m])
for(m=b4.dx.e,l=m.length,e=0;e<m.length;m.length===l||(0,H.z)(m),++e){d=m[e]
c=f.l(0,0)
if(c==null)c=0
f.j(0,0,c+1)
b=J.dx(b4.a.cE.l(0,0),c)
h=g.au(d.a)
a=h.a
if(typeof a!=="number")return a.k()
a0=h.b
if(typeof a0!=="number")return a0.k()
a1=h.c
if(typeof a1!=="number")return a1.k()
a1=h.w(0,Math.sqrt(a*a+a0*a0+a1*a1))
a0=b.e
a=a1.a
h=a1.b
a1=a1.c
C.c.a0(a0.a,a0.d,a,h,a1)
a1=d.c
h=b.f
C.c.a0(h.a,h.d,a1.a,a1.b,a1.c)}for(m=q.length,e=0;e<q.length;q.length===m||(0,H.z)(q),++e){l=q[e].a
k=f.l(0,l)
if(k==null)k=0
l=b4.a.cD.l(0,l)
C.c.bZ(l.a,l.d,k)}}q=s.Q
if(q.length>0){m=b6.db
g=m.ga8(m)
m=P.m
a2=new H.X([m,m])
for(m=b4.dx.f,l=m.length,h=[b5],a=[P.C],e=0;e<m.length;m.length===l||(0,H.z)(m),++e){d=m[e]
a3=d.gbt()
c=a2.l(0,a3)
if(c==null)c=0
a2.j(0,a3,c+1)
b=J.dx(b4.a.cG.l(0,a3),c)
a4=g.k(0,d.ga8(d))
a0=d.ga8(d)
a1=$.d0
a0=a0.W(a1==null?$.d0=new V.u(0,0,0):a1)
a1=b.b
C.c.a0(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=$.d0
a0=a4.W(a0==null?$.d0=new V.u(0,0,0):a0)
a1=b.c
C.c.a0(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=d.gbs(d)
a1=b.e
C.c.a0(a1.a,a1.d,a0.a,a0.b,a0.c)
d.gb_()
a0=a4.bv(0)
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
i=new Float32Array(H.cw(H.l(new V.aF(a1,a5,a6,a7,a8,a9,b0,b1,a0).at(0,!0),"$ib",a,"$ab")))
C.c.eU(b2.a,b2.d,!1,i)
d.gb_()
a0=d.gb_()
H.l(n,"$ib",h,"$ab")
if(!C.a.ak(n,a0)){a0.sa9(0,n.length)
C.a.h(n,a0)}a0=d.gb_()
a1=a0.gaa(a0)
if(a1){a1=b.f
a1.toString
a5=a0.gaa(a0)
if(!a5)a1.a.uniform1i(a1.d,0)
else{a0=a0.ga9(a0)
a1.a.uniform1i(a1.d,a0)}}d.gbj()
a0=d.gf4()
a1=b.x
a1.toString
a5=a0.gjJ(a0)
a6=a0.gjK(a0)
a7=a0.gjL()
a0=a0.gjI()
C.c.eT(a1.a,a1.d,a5,a6,a7,a0)
a0=d.gbj()
if(!C.a.ak(n,a0)){a0.sa9(0,n.length)
C.a.h(n,a0)}a0=d.gbj()
a1=a0.gaa(a0)
if(a1){a1=b.r
a1.toString
a5=a0.gaa(a0)
if(!a5)a1.a.uniform1i(a1.d,0)
else{a0=a0.ga9(a0)
a1.a.uniform1i(a1.d,a0)}}if(d.gjN()){a0=d.gjt()
a1=b.y
C.c.ab(a1.a,a1.d,a0)
a0=d.gju()
a1=b.z
C.c.ab(a1.a,a1.d,a0)
a0=d.gjv()
a1=b.Q
C.c.ab(a1.a,a1.d,a0)}}for(m=q.length,e=0;e<q.length;q.length===m||(0,H.z)(q),++e){l=q[e].a
k=a2.l(0,l)
if(k==null)k=0
l=b4.a.cF.l(0,l)
C.c.bZ(l.a,l.d,k)}}q=s.ch
if(q.length>0){m=b6.db
g=m.ga8(m)
m=P.m
b3=new H.X([m,m])
for(m=b4.dx.r,l=m.length,b5=[b5],e=0;e<m.length;m.length===l||(0,H.z)(m),++e){d=m[e]
a3=d.gbt()
c=b3.l(0,a3)
if(c==null)c=0
b3.j(0,a3,c+1)
b=J.dx(b4.a.cI.l(0,a3),c)
h=d.gki(d)
a=b.b
C.c.a0(a.a,a.d,h.a,h.b,h.c)
h=d.gkH(d).kT()
a=b.c
C.c.a0(a.a,a.d,h.a,h.b,h.c)
h=g.W(d.gki(d))
a=b.d
C.c.a0(a.a,a.d,h.a,h.b,h.c)
h=d.gbs(d)
a=b.e
C.c.a0(a.a,a.d,h.a,h.b,h.c)
d.gb_()
h=d.gkW()
a=b.f
C.c.a0(a.a,a.d,h.a,h.b,h.c)
h=d.gah(d)
a=b.r
C.c.a0(a.a,a.d,h.a,h.b,h.c)
h=d.gkU()
a=b.x
C.c.ab(a.a,a.d,h)
h=d.gkV()
a=b.y
C.c.ab(a.a,a.d,h)
d.gb_()
h=d.gb_()
H.l(n,"$ib",b5,"$ab")
if(!C.a.ak(n,h)){h.sa9(0,n.length)
C.a.h(n,h)}h=d.gb_()
a=h.gaa(h)
if(a){a=b.dx
a.toString
a0=h.gaa(h)
if(!a0)a.a.uniform1i(a.d,0)
else{h=h.ga9(h)
a.a.uniform1i(a.d,h)}}d.gbj()
h=d.gf4()
a=b.z
a.toString
a0=h.gjJ(h)
a1=h.gjK(h)
a5=h.gjL()
h=h.gjI()
C.c.eT(a.a,a.d,a0,a1,a5,h)
h=d.gbj()
if(!C.a.ak(n,h)){h.sa9(0,n.length)
C.a.h(n,h)}h=d.gbj()
a=h.gaa(h)
if(a){a=b.dy
a.toString
a0=h.gaa(h)
if(!a0)a.a.uniform1i(a.d,0)
else{h=h.ga9(h)
a.a.uniform1i(a.d,h)}}if(d.gkI()){h=d.gkG()
a=b.Q
C.c.ab(a.a,a.d,h)
h=d.gkF()
a=b.ch
C.c.ab(a.a,a.d,h)}if(d.gjN()){h=d.gjt()
a=b.cx
C.c.ab(a.a,a.d,h)
h=d.gju()
a=b.cy
C.c.ab(a.a,a.d,h)
h=d.gjv()
a=b.db
C.c.ab(a.a,a.d,h)}}for(b5=q.length,e=0;e<q.length;q.length===b5||(0,H.z)(q),++e){m=q[e].a
k=b3.l(0,m)
if(k==null)k=0
m=b4.a.cH.l(0,m)
C.c.bZ(m.a,m.d,k)}}}if(s.f.b){b4.an(n,b4.Q.d)
b5=b4.a
q=b4.Q.d
b5.ay(b5.ed,q)}if(s.dx){b5=b4.a
q=b6.Q
if(q==null){q=b6.db
q=b6.Q=q.ga8(q).bv(0)}b5=b5.id
b5.toString
b5.aC(q.at(0,!0))}if(s.cy){b4.an(n,b4.ch)
b5=b4.a
q=b4.ch
b5.iT(b5.ee,q)
b5=s.r
if(b5.a){q=b4.a
m=b4.cx.f
q=q.ef
C.c.a0(q.a,q.d,m.a,m.b,m.c)}if(b5.b){b4.an(n,b4.cx.d)
b5=b4.a
q=b4.cx.d
b5.ay(b5.eg,q)}b5=s.x
q=b5.a
if(q||b5.b||!1){m=b4.a
l=b4.cy.ch
m=m.eh
C.c.ab(m.a,m.d,l)}if(q){q=b4.a
m=b4.cy.f
q=q.ei
C.c.a0(q.a,q.d,m.a,m.b,m.c)}if(b5.b){b4.an(n,b4.cy.d)
b5=b4.a
q=b4.cy.d
b5.ay(b5.ej,q)}}b5=s.y
q=b5.a
m=!q
if(!m||b5.b||!1){if(q){q=b4.a
l=b4.db.f
q=q.ek
C.c.ab(q.a,q.d,l)}if(b5.b){b4.an(n,b4.db.d)
q=b4.a
l=b4.db.d
q.ay(q.el,l)}p.enable(3042)
p.blendFunc(770,771)}for(j=0;j<n.length;++j)n[j].aR(b6)
q=b7.e
q.aR(b6)
q.bh(b6)
q.bB(b6)
if(!m||b5.b||!1)p.disable(3042)
for(j=0;j<n.length;++j)n[j].bB(b6)
b5=b4.a
b5.toString
p.useProgram(null)
b5.x.jG()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.ds().aU},
sfR:function(a){this.e=H.l(a,"$ia0",[V.au],"$aa0")}}
O.hJ.prototype={
$2:function(a,b){H.ab(a)
H.ab(b)
if(typeof b!=="number")return b.m()
return C.a.h(this.b,new A.aN(a,C.d.a7(b+3,4)*4))},
$S:15}
O.hK.prototype={
$2:function(a,b){H.h(a,"$iaN")
H.h(b,"$iaN")
return J.kW(a.a,b.a)},
$S:45}
O.hL.prototype={
$2:function(a,b){H.ab(a)
H.ab(b)
if(typeof b!=="number")return b.m()
return C.a.h(this.b,new A.aU(a,C.d.a7(b+3,4)*4))},
$S:15}
O.hM.prototype={
$2:function(a,b){H.h(a,"$iaU")
H.h(b,"$iaU")
return J.kW(a.a,b.a)},
$S:46}
O.hN.prototype={
$2:function(a,b){H.ab(a)
H.ab(b)
if(typeof b!=="number")return b.m()
return C.a.h(this.b,new A.aY(a,C.d.a7(b+3,4)*4))},
$S:15}
O.hO.prototype={
$2:function(a,b){H.h(a,"$iaY")
H.h(b,"$iaY")
return J.kW(a.a,b.a)},
$S:47}
O.hD.prototype={
aN:function(){var u,t=this
t.d2()
u=t.f
if(!(Math.abs(u-1)<$.B().a)){t.f=1
u=new D.L(t.b,u,1,[P.C])
u.b=!0
t.a.a3(u)}}}
O.cU.prototype={
a3:function(a){return this.a.a3(H.h(a,"$iw"))},
c5:function(){return this.a3(null)},
aN:function(){},
bK:function(a){var u,t,s=this
if(!s.c.q(0,a)){u=s.c
if(u.a||u.b||!1)t=!(a.a||a.b||!1)
else t=!0
s.c=a
if(t)s.aN()
u=s.a
u.a=null
u.a3(null)}},
sby:function(a){var u,t,s=this,r=a==null
if(r){u=s.c
s.bK(new A.ai(u.a,!1,!1))}else{u=s.c
if(!u.b)s.bK(new A.ai(u.a,!0,!1))}u=s.d
if(u!=a){if(u!=null)u.gt().V(0,s.gbE())
t=s.d
s.d=a
if(!r)a.gt().h(0,s.gbE())
r=new D.L(s.b+".texture2D",t,s.d,[T.bY])
r.b=!0
s.a.a3(r)}}}
O.hE.prototype={}
O.bh.prototype={
dP:function(a){var u,t,s=this
if(!s.f.q(0,a)){u=s.f
s.f=a
t=new D.L(s.b+".color",u,a,[V.a9])
t.b=!0
s.a.a3(t)}},
aN:function(){this.d2()
this.dP(new V.a9(1,1,1))},
sbs:function(a,b){this.bK(new A.ai(!0,this.c.b,!1))
this.dP(b)}}
O.hG.prototype={}
O.hH.prototype={
aN:function(){var u,t=this
t.d3()
u=t.ch
if(!(Math.abs(u-1)<$.B().a)){t.ch=1
u=new D.L(t.b+".refraction",u,1,[P.C])
u.b=!0
t.a.a3(u)}}}
O.hI.prototype={
dQ:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.B().a)){u.ch=a
t=new D.L(u.b+".shininess",t,a,[P.C])
t.b=!0
u.a.a3(t)}},
aN:function(){this.d3()
this.dQ(100)}}
O.co.prototype={}
T.d9.prototype={}
T.bY.prototype={}
T.iW.prototype={
ga9:function(a){return this.a},
sa9:function(a,b){this.a=b},
gaa:function(a){var u=this.d
u=u==null?null:u.gaa(u)
if(u==null){u=this.c
u=u==null?null:u.gaa(u)}return u===!0},
gt:function(){var u=this.f
return u==null?this.f=D.O():u},
aR:function(a){var u
if(this.d==null){u=this.d=this.c
if(u!=null)u.aR(a)}},
bB:function(a){var u=this.d
if(u!=null){u.bB(a)
this.d=null}},
sj5:function(a){this.e=H.l(a,"$ib",[T.bY],"$ab")}}
T.iX.prototype={
ga9:function(a){return this.a},
sa9:function(a,b){this.a=b},
gaa:function(a){return this.d},
gt:function(){var u=this.y
return u==null?this.y=D.O():u},
aR:function(a){var u,t=this
if(!t.c&&t.d){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(3553,t.b)}},
bB:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(3553,null)}}}
T.iY.prototype={
jW:function(a,b,c,d){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9987)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=document.createElement("img")
u.src=a
t=new T.iX()
t.a=0
t.b=q
t.d=t.c=!1
r=W.o
W.ag(u,"load",H.p(new T.iZ(this,t,u,!1,q,!1,!0),{func:1,ret:-1,args:[r]}),!1,r)
return t},
iR:function(a,b,c){var u,t,s,r
b=V.lC(b)
u=V.lC(a.width)
t=V.lC(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.l1()
s.width=u
s.height=t
r=H.h(C.k.f0(s,"2d"),"$icL")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.pp(r.getImageData(0,0,s.width,s.height))}}}
T.iZ.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.iR(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.c.ks(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.e6()}++s.e},
$S:25}
V.fB.prototype={
bg:function(a,b){return!0},
i:function(a){return"all"},
$ibu:1}
V.bu.prototype={}
V.dW.prototype={
bg:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)if(u[s].bg(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.z)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
saL:function(a){this.a=H.l(a,"$ib",[V.bu],"$ab")},
$ibu:1}
V.bx.prototype={
bg:function(a,b){return!this.f9(0,b)},
i:function(a){return"!["+this.d1(0)+"]"}}
V.ir.prototype={
ff:function(a){var u,t
if(a.a.length<=0)throw H.f(P.D("May not create a SetMatcher with zero characters."))
u=new H.X([P.m,P.a3])
for(t=new H.dT(a,a.gn(a),[H.aD(a,"x",0)]);t.A();)u.j(0,t.d,!0)
this.siS(u)},
bg:function(a,b){return this.a.bQ(0,b)},
i:function(a){var u=this.a
return P.d8(new H.dS(u,[H.v(u,0)]),0,null)},
siS:function(a){this.a=H.l(a,"$iy",[P.m,P.a3],"$ay")},
$ibu:1}
V.d6.prototype={
v:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.db(this.a.S(0,b))
r.saL(H.c([],[V.bu]))
r.c=!1
C.a.h(this.c,r)
return r},
jP:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
if(r.bg(0,a))return r}return},
i:function(a){return this.b},
sje:function(a){this.c=H.l(a,"$ib",[V.db],"$ab")}}
V.ej.prototype={
i:function(a){var u=H.n4(this.b,"\n","\\n"),t=H.n4(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.da.prototype={
i:function(a){return this.b},
siM:function(a){var u=P.k
this.c=H.l(a,"$iy",[u,u],"$ay")}}
V.j2.prototype={
S:function(a,b){var u=this.a.l(0,b)
if(u==null){u=new V.d6(this,b)
u.sje(H.c([],[V.db]))
u.d=null
this.a.j(0,b,u)}return u},
bA:function(a){var u,t=this.b.l(0,a)
if(t==null){t=new V.da(a)
u=P.k
t.siM(new H.X([u,u]))
this.b.j(0,a,t)}return t},
kw:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.c([],[V.ej]),k=this.c,j=[P.m],i=H.c([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.G(a,s)
q=k.jP(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.d8(i,0,m)
throw H.f(P.D("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.c([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.d8(i,0,m)
o=k.d
n=o.c.l(0,p)
t=new V.ej(n==null?o.b:n,p,s)}++s}}},
sj2:function(a){this.a=H.l(a,"$iy",[P.k,V.d6],"$ay")},
sj6:function(a){this.b=H.l(a,"$iy",[P.k,V.da],"$ay")}}
V.db.prototype={
i:function(a){return this.b.b+": "+this.d1(0)}}
X.dC.prototype={$icX:1}
X.hi.prototype={
gt:function(){var u=this.x
return u==null?this.x=D.O():u}}
X.e2.prototype={
gt:function(){var u=this.f
return u==null?this.f=D.O():u},
b5:function(a){var u
H.h(a,"$iw")
u=this.f
if(u!=null)u.E(a)},
fA:function(){return this.b5(null)},
sew:function(a){var u,t,s=this
if(!J.V(s.b,a)){u=s.b
if(u!=null)u.gt().V(0,s.gd8())
t=s.b
s.b=a
if(a!=null)a.gt().h(0,s.gd8())
u=new D.L("mover",t,s.b,[U.aa])
u.b=!0
s.b5(u)}},
$icX:1,
$idC:1}
X.eg.prototype={}
V.iA.prototype={
fh:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.ag(q,"scroll",H.p(new V.iC(o),{func:1,ret:-1,args:[r]}),!1,r)},
cu:function(a,b){var u,t,s,r,q
a=H.ab(C.d.jy(a,0,4))
u=P.fe(C.v,b,C.h,!1)
t=document.createElement("div")
t.className="textHeader"
t.id=u
s=t.style
r=""+(28-a*3)+"px"
s.fontSize=r
q=W.ny()
q.href="#"+H.i(u)
q.textContent=b
t.appendChild(q)
this.a.appendChild(t)},
a1:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.l(a,"$ib",[P.k],"$ab")
this.iV()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.kw(C.a.jV(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.z)(s),++q){p=s[q]
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
if(H.pJ(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.e(m,1)
l.href=H.U(m[1])
l.textContent=H.U(m[0])
t.appendChild(l)}else{k=P.fe(C.v,n,C.h,!1)
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
iV:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new V.j2()
t=P.k
u.sj2(new H.X([t,V.d6]))
u.sj6(new H.X([t,V.da]))
u.c=null
u.c=u.S(0,q)
t=u.S(0,q).v(0,p)
s=V.aq(new H.a7("*"))
C.a.h(t.a,s)
t.c=!0
t=u.S(0,p).v(0,p)
s=new V.bx()
r=[V.bu]
s.saL(H.c([],r))
C.a.h(t.a,s)
t=V.aq(new H.a7("*"))
C.a.h(s.a,t)
t=u.S(0,p).v(0,"BoldEnd")
s=V.aq(new H.a7("*"))
C.a.h(t.a,s)
t.c=!0
t=u.S(0,q).v(0,o)
s=V.aq(new H.a7("_"))
C.a.h(t.a,s)
t.c=!0
t=u.S(0,o).v(0,o)
s=new V.bx()
s.saL(H.c([],r))
C.a.h(t.a,s)
t=V.aq(new H.a7("_"))
C.a.h(s.a,t)
t=u.S(0,o).v(0,n)
s=V.aq(new H.a7("_"))
C.a.h(t.a,s)
t.c=!0
t=u.S(0,q).v(0,m)
s=V.aq(new H.a7("`"))
C.a.h(t.a,s)
t.c=!0
t=u.S(0,m).v(0,m)
s=new V.bx()
s.saL(H.c([],r))
C.a.h(t.a,s)
t=V.aq(new H.a7("`"))
C.a.h(s.a,t)
t=u.S(0,m).v(0,"CodeEnd")
s=V.aq(new H.a7("`"))
C.a.h(t.a,s)
t.c=!0
t=u.S(0,q).v(0,l)
s=V.aq(new H.a7("["))
C.a.h(t.a,s)
t.c=!0
t=u.S(0,l).v(0,k)
s=V.aq(new H.a7("|"))
C.a.h(t.a,s)
s=u.S(0,l).v(0,j)
t=V.aq(new H.a7("]"))
C.a.h(s.a,t)
s.c=!0
s=u.S(0,l).v(0,l)
t=new V.bx()
t.saL(H.c([],r))
C.a.h(s.a,t)
s=V.aq(new H.a7("|]"))
C.a.h(t.a,s)
s=u.S(0,k).v(0,j)
t=V.aq(new H.a7("]"))
C.a.h(s.a,t)
s.c=!0
s=u.S(0,k).v(0,k)
t=new V.bx()
t.saL(H.c([],r))
C.a.h(s.a,t)
s=V.aq(new H.a7("|]"))
C.a.h(t.a,s)
C.a.h(u.S(0,q).v(0,i).a,new V.fB())
s=u.S(0,i).v(0,i)
t=new V.bx()
t.saL(H.c([],r))
C.a.h(s.a,t)
s=V.aq(new H.a7("*_`["))
C.a.h(t.a,s)
s=u.S(0,"BoldEnd")
s.d=s.a.bA(p)
s=u.S(0,n)
s.d=s.a.bA(o)
s=u.S(0,"CodeEnd")
s.d=s.a.bA(m)
s=u.S(0,j)
s.d=s.a.bA("Link")
s=u.S(0,i)
s.d=s.a.bA(i)
this.b=u}}
V.iC.prototype={
$1:function(a){P.le(C.l,new V.iB(this.a))},
$S:25}
V.iB.prototype={
$0:function(){var u=C.e.az(document.documentElement.scrollTop),t=this.a.style,s=H.i(-0.01*u)+"px"
t.top=s},
$S:2}
B.ay.prototype={
gdX:function(){var u=this
return new B.ay(u.a,u.b+1,u.c,u.d,u.e,u.f)},
gdZ:function(){var u=this
return new B.ay(u.a,u.b-1,u.c,u.d,u.e,u.f)},
gah:function(a){var u=this,t=u.a+1,s=u.d,r=u.f
if(t>=16){s+=16
r=r==null?null:r.gah(r)
t=0}return new B.ay(t,u.b,u.c,s,u.e,r)},
gaf:function(a){var u=this,t=u.a-1,s=u.d,r=u.f
if(t<0){s-=16
r=r==null?null:r.gaf(r)
t=15}return new B.ay(t,u.b,u.c,s,u.e,r)},
gaF:function(){var u=this,t=u.c+1,s=u.e,r=u.f
if(t>=16){s+=16
r=r==null?null:r.gaF()
t=0}return new B.ay(u.a,u.b,t,u.d,s,r)},
gaQ:function(a){var u=this,t=u.c-1,s=u.e,r=u.f
if(t<0){s-=16
r=r==null?null:r.gaQ(r)
t=15}return new B.ay(u.a,u.b,t,u.d,s,r)},
ey:function(a){var u=this,t=J.R(a)
if(t.q(a,$.b4()))return u.gaf(u)
else if(t.q(a,$.b5()))return u.gah(u)
else if(t.q(a,$.bD()))return u.gdZ()
else if(t.q(a,$.b6()))return u.gdX()
else if(t.q(a,$.bE()))return u.gaQ(u)
else if(t.q(a,$.bF()))return u.gaF()
else return},
gcz:function(){var u=this
return V.ih(u.a+u.d,u.b,u.c+u.e,1,1,1)},
i:function(a){var u=this
return H.i(u.f)+".block("+u.a+", "+u.b+", "+u.c+", ("+u.d+", "+u.e+"), "+B.nA(u.gN(u))+")"},
gN:function(a){var u=this,t=u.f
t=t==null?null:t.aj(u.a,u.b,u.c)
if(t==null)t=u.b<0?100:0
return t},
sN:function(a,b){var u=this,t=u.f
if(t!=null)t.X(u.a,u.b,u.c,b)}}
B.fQ.prototype={
bR:function(a){var u,t,s
for(u=0;u<16;++u)for(t=0;t<16;++t)for(s=0;s<this.b;++s)a.X(u,s,t,this.hf(u,s,t))
a.cK()},
hf:function(a,b,c){var u=a===0
if(u||c===0)return u&&c===0?112:110
if(a===1&&c===1)return 110
return C.d.b1(a+b+c,2)===0?113:111},
$ilW:1}
B.c8.prototype={
fb:function(a){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
k.d=new Uint8Array(12288)
k.sc8(H.c([],[E.a1]))
for(u=k.c.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
q=E.cc(j,j,j,j)
p=r.y
o=H.v(p,0)
H.E(q,o)
n=[o]
if(H.G(p.bm(H.c([q],n)))){m=p.a
l=m.length
C.a.h(m,q)
o=H.l(H.c([q],n),"$ij",[o],"$aj")
p=p.c
if(p!=null)p.$2(l,o)}p=k.e;(p&&C.a).h(p,q)}k.b=k.a=0
k.f=!1
k.x=k.r=!0},
i:function(a){return"chunk("+this.a+", "+this.b+")"},
cK:function(){var u,t=this
t.x=!1
t.f=!0
t.saK(!1)
u=t.gaf(t)
if(u!=null)u.f=!0
u=t.gah(t)
if(u!=null)u.f=!0
u=t.gaF()
if(u!=null)u.f=!0
u=t.gaQ(t)
if(u!=null)u.f=!0},
aj:function(a,b,c){var u,t
if(b<0)return 100
if(b>=48)return 0
if(a<0)return 0
if(a>=16)return 0
if(c<0)return 0
if(c>=16)return 0
u=this.d
t=(a*48+b)*16+c
if(t<0||t>=12288)return H.e(u,t)
return u[t]},
bI:function(a,b,c,d){var u=a==null?null:a.c_(b,c,d)
return u==null?0:u},
c_:function(a,b,c){var u,t,s=this
if(b<0)return 100
if(b>=48)return 0
if(a<0)return s.bI(s.gaf(s),a+16,b,c)
if(a>=16)return s.bI(s.gah(s),a-16,b,c)
if(c<0)return s.bI(s.gaQ(s),a,b,c+16)
if(c>=16)return s.bI(s.gaF(),a,b,c-16)
u=s.d
t=(a*48+b)*16+c
if(t<0||t>=12288)return H.e(u,t)
return u[t]},
X:function(a,b,c,d){var u,t
if(b<0)return!1
if(b>=48)return!1
if(a<0)return!1
if(a>=16)return!1
if(c<0)return!1
if(c>=16)return!1
u=this.d
t=(a*48+b)*16+c
if(t<0||t>=12288)return H.e(u,t)
u[t]=d
return!0},
gaf:function(a){return this.c.aV(this.a-16,this.b)},
gaF:function(){return this.c.aV(this.a,this.b+16)},
gah:function(a){return this.c.aV(this.a+16,this.b)},
gaQ:function(a){return this.c.aV(this.a,this.b-16)},
cW:function(a,b,c){var u,t
for(u=47;u>=0;--u){t=this.aj(a,u,b)
if(t>=100&&t<=117)return u}return c},
kx:function(a,b){return this.cW(a,b,48)},
kz:function(){var u,t=this
if(t.x||!t.r)return
t.f=t.r=!1
u=B.ld(t.c.a,null)
u.jx(t)
u.cJ(0,t.e)},
saK:function(a){var u,t,s
for(u=this.e,t=u.length,s=0;s<t;++s)u[s].b=a},
kA:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=this
if(i.x||i.r){i.saK(!1)
return}u=V.lc(i.a,i.b,16,16)
t=u.ex(a)
s=t.a
r=a.a
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.d(r)
q=s-r
s=t.b
p=a.b
if(typeof s!=="number")return s.p()
if(typeof p!=="number")return H.d(p)
o=s-p
if(q*q+o*o<100){i.saK(!0)
return}n=u.ex(b)
s=b.a
if(typeof s!=="number")return s.p()
m=b.b
if(typeof m!=="number")return m.p()
m=new V.a2(s-r,m-p)
l=m.w(0,Math.sqrt(m.D(m)))
m=n.a
if(typeof m!=="number")return m.p()
s=n.b
if(typeof s!=="number")return s.p()
k=new V.a2(m-r,s-p)
j=k.D(k)
if(j>6400){i.saK(!1)
return}i.saK(l.D(k.w(0,j))>0)},
sc8:function(a){this.e=H.l(a,"$ib",[E.a1],"$ab")}}
B.fR.prototype={
jz:function(a,b,c){var u,t,s=this
s.b=b
s.c=a
s.d=c
s.e=$.bC()
s.fZ()
for(;s.iZ(););u=s.b
t=s.d
s.b=u.m(0,new V.u(t.a,t.b,t.c))
return!0},
fZ:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.c,a2=a0.b,a3=a1.bY(0,new V.H(a2.a,a2.b,a2.c))
a2=a3.bY(0,a0.d)
a1=a3.a
u=a2.a
t=Math.min(H.cz(a1),H.cz(u))
if(typeof a1!=="number")return a1.m()
if(typeof u!=="number")return u.m()
s=Math.max(a1+a3.d,u+a2.d)
u=a3.b
a1=a2.b
r=Math.min(H.cz(u),H.cz(a1))
if(typeof u!=="number")return u.m()
if(typeof a1!=="number")return a1.m()
q=Math.max(u+a3.e,a1+a2.e)
a1=a3.c
u=a2.c
p=Math.min(H.cz(a1),H.cz(u))
if(typeof a1!=="number")return a1.m()
if(typeof u!=="number")return u.m()
o=Math.max(a1+a3.f,u+a2.f)
a2=a0.a
n=a2.aj(t,r,p)
m=a2.aj(t+(s-t),r+(q-r),p+(o-p))
l=m.a+m.d
k=m.c+m.e
C.a.sn(a0.f,0)
C.a.sn(a0.r,0)
C.a.sn(a0.x,0)
a1=m.b
j=n
while(!0){if(!(j.a+j.d<=l))break
i=j
while(!0){if(!(i.b<=a1))break
h=i
while(!0){if(!(h.c+h.e<=k))break
a2=h.gN(h)
if(a2>=100&&a2<=117){g=$.bC()
f=h.gaf(h)
a2=f.gN(f)
a2=a2>=100&&a2<=117
if(a2){a2=$.b4()
g=new V.a4((g.a|a2.a)>>>0)}f=h.gah(h)
a2=f.gN(f)
a2=a2>=100&&a2<=117
if(a2){a2=$.b5()
g=new V.a4((g.a|a2.a)>>>0)}a2=h.a
u=h.b
e=h.c
d=h.d
c=h.e
b=h.f
f=new B.ay(a2,u-1,e,d,c,b)
a=f.gN(f)
a=a>=100&&a<=117
if(a){a=$.bD()
g=new V.a4((g.a|a.a)>>>0)}f=new B.ay(a2,u+1,e,d,c,b)
a2=f.gN(f)
a2=a2>=100&&a2<=117
if(a2){a2=$.b6()
g=new V.a4((g.a|a2.a)>>>0)}f=h.gaQ(h)
a2=f.gN(f)
a2=a2>=100&&a2<=117
if(a2){a2=$.bE()
g=new V.a4((g.a|a2.a)>>>0)}f=h.gaF()
a2=f.gN(f)
a2=a2>=100&&a2<=117
if(a2){a2=$.bF()
g=new V.a4((g.a|a2.a)>>>0)}a2=$.na()
if(!J.V(g,a2)){C.a.h(a0.f,h.gcz())
u=a0.r
g.toString
e=$.lJ().a
d=g.a
C.a.h(u,new V.a4((a2.a&e&~d)>>>0))
C.a.h(a0.x,!1)}}h=h.gaF()}i=new B.ay(i.a,i.b+1,i.c,i.d,i.e,i.f)}j=j.gah(j)}},
iZ:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
if(e.d.cN())return!1
u=e.c
t=e.b
s=u.bY(0,new V.H(t.a,t.b,t.c))
r=$.bC()
for(q=0,p=-1,o=0;u=e.f,o<u.length;++o){t=e.x
if(o>=t.length)return H.e(t,o)
if(!t[o]){n=u[o]
u=e.r
if(o>=u.length)return H.e(u,o)
m=u[o]
l=s.jA(n,e.d,m)
if(l!=null)if(J.V(r,$.bC())||q>l.a){r=l.b
q=l.a
p=o}}}u=J.R(r)
if(u.q(r,$.bC()))return!1
C.a.j(e.x,p,!0)
k=e.d.k(0,q)
j=e.d.k(0,1-q)
if(u.q(r,$.b5())||u.q(r,$.b4())){u=e.b
t=u.a
i=k.a
if(typeof t!=="number")return t.m()
if(typeof i!=="number")return H.d(i)
h=u.b
g=k.b
if(typeof h!=="number")return h.m()
if(typeof g!=="number")return H.d(g)
u=u.c
f=k.c
if(typeof u!=="number")return u.m()
if(typeof f!=="number")return H.d(f)
e.b=new V.u(t+i,h+g,u+f)
e.d=new V.H(0,j.b,j.c)}else if(u.q(r,$.b6())||u.q(r,$.bD())){u=e.b
t=u.b
i=k.b
if(typeof t!=="number")return t.m()
if(typeof i!=="number")return H.d(i)
h=u.a
g=k.a
if(typeof h!=="number")return h.m()
if(typeof g!=="number")return H.d(g)
u=u.c
f=k.c
if(typeof u!=="number")return u.m()
if(typeof f!=="number")return H.d(f)
e.b=new V.u(h+g,t+i,u+f)
e.d=new V.H(j.a,0,j.c)}else if(u.q(r,$.bF())||u.q(r,$.bE())){u=e.b
t=u.c
i=k.c
if(typeof t!=="number")return t.m()
if(typeof i!=="number")return H.d(i)
h=u.a
g=k.a
if(typeof h!=="number")return h.m()
if(typeof g!=="number")return H.d(g)
u=u.b
f=k.b
if(typeof u!=="number")return u.m()
if(typeof f!=="number")return H.d(f)
e.b=new V.u(h+g,u+f,t+i)
e.d=new V.H(j.a,j.b,0)}e.e=new V.a4((e.e.a|r.a)>>>0)
return!0},
i:function(a){return"Collider("+H.i(this.b)+", "+H.i(this.e)+")"},
sfU:function(a){this.f=H.l(a,"$ib",[V.bX],"$ab")},
sfT:function(a){this.r=H.l(a,"$ib",[V.a4],"$ab")},
shj:function(a){this.x=H.l(a,"$ib",[P.a3],"$ab")}}
B.kP.prototype={
$1:function(a){var u
H.h(a,"$ibl")
u=this.b
P.lD(C.e.eS(this.a.gjR(),2)+" fps, "+("chunks: "+u.d.length+", graveyard: "+u.c.length+", player: "+H.i(u.gcm())))},
$S:49}
B.Z.prototype={}
B.hP.prototype={
F:function(a){var u="./textures/"+a+".png"
return this.a.f.jW(u,!0,!1,!1)},
I:function(a,b){var u,t=O.m_()
t.dx.h(0,this.e)
u=t.r
u.sbs(0,new V.a9(0.8,0.8,0.8))
u=t.x
u.sbs(0,new V.a9(0.4,0.4,0.4))
t.r.sby(a)
t.x.sby(a)
t.db.sby(a)
if(b){u=t.z
u.sbs(0,new V.a9(0.5,0.5,0.5))
u.bK(new A.ai(!0,u.c.b,!1))
u.dQ(3)}C.a.h(this.d,t)
return this.d.length-1},
dd:function(a){var u=this.F(a),t=O.m_()
t.f.sby(u)
t.db.sby(u)
return t},
sh2:function(a){this.b=H.l(a,"$iy",[P.m,B.Z],"$ay")},
shr:function(a){this.c=H.l(a,"$iy",[P.m,[P.b,P.m]],"$ay")},
shs:function(a){this.d=H.l(a,"$ib",[O.ci],"$ab")}}
B.e0.prototype={
i:function(a){var u=this
return"NeighborBlockInfo("+u.a.i(0)+", "+H.i(u.b)+", "+u.c.i(0)+", "+u.d+")"}}
B.e3.prototype={
fd:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null
a0.r=!0
u=a0.d
u.ch=u.Q=0.4
u=X.be()
u.a5(32)
u.ae(a0)
u.gaq().h(0,b.gi1())
b.d=!0
u=X.be()
u.a5(9)
u.dY(9,!0)
u.ae(a0)
u.gaq().h(0,b.ghI())
u=X.be()
u.a5(69)
u.a5(81)
u.ae(a0)
u.gaq().h(0,b.ghG())
u=a0.d
t=u.b
u=t==null?u.b=D.O():t
u.h(0,b.ghS())
u=X.be()
u.a5(79)
u.ae(a0)
u.gaq().h(0,b.giq())
u=new U.er()
t=X.be()
t.a5(39)
t.a5(68)
s=u.gi3()
t.gaq().h(0,s)
u.a=t
t=X.be()
t.a5(37)
t.a5(65)
t.gaq().h(0,s)
u.b=t
t=X.be()
t.a5(81)
t.gaq().h(0,s)
u.c=t
t=X.be()
t.a5(69)
t.gaq().h(0,s)
u.d=t
t=X.be()
t.a5(40)
t.a5(83)
t.gaq().h(0,s)
u.e=t
t=X.be()
t.a5(38)
t.a5(87)
t.gaq().h(0,s)
u.f=t
t=U.dD()
t.saG(30)
t.saT(0)
s=u.gaD()
t.gt().h(0,s)
u.r=t
t=U.dD()
t.saG(30)
t.saT(0)
t.gt().h(0,s)
u.x=t
t=U.dD()
t.saG(30)
t.saT(0)
t.gt().h(0,s)
u.y=t
u.Q=u.z=null
u.ch=60
u.cx=15
u.cy=0
u.dx=u.db=null
u.sdm(a)
u.a.ae(a0)
u.b.ae(a0)
u.c.ae(a0)
u.d.ae(a0)
u.e.ae(a0)
u.f.ae(a0)
u.r.saG(6)
u.x.saG(60)
t=u.x
s=t.r
if(!(Math.abs(s- -100)<$.B().a)){t.r=-100
s=new D.L("acceleration",s,-100,[P.C])
s.b=!0
t.C(s)}u.y.saG(6)
u.sdm(H.p(b.ghh(),{func:1,ret:V.u,args:[V.u,V.u]}))
b.a=u
u=new U.eq()
t=U.dD()
t.scY(0,!0)
t.scP(6.283185307179586)
t.scQ(0)
t.sY(0,0)
t.saG(100)
t.sR(0)
t.saT(0.5)
u.b=t
s=u.gaD()
t.gt().h(0,s)
t=U.dD()
t.scY(0,!0)
t.scP(6.283185307179586)
t.scQ(0)
t.sY(0,0)
t.saG(100)
t.sR(0)
t.saT(0.5)
u.c=t
t.gt().h(0,s)
u.d=null
u.r=u.f=u.e=!1
u.y=u.x=2.5
u.Q=4
u.ch=u.cx=!1
u.db=u.cy=0
u.dx=null
u.dy=0
u.fx=u.fr=null
r=new X.bv(!1,!1,!1)
q=u.d
u.d=r
t=new D.L("modifiers",q,r,[X.bv])
t.b=!0
u.C(t)
t=u.f
if(t!==!1){u.f=!1
t=new D.L("invertX",t,!1,[P.a3])
t.b=!0
u.C(t)}t=u.r
if(t!==!1){u.r=!1
t=new D.L("invertY",t,!1,[P.a3])
t.b=!0
u.C(t)}u.ae(a0)
u.b.scP(1.5707963267948966)
u.b.scQ(-1.5707963267948966)
u.b.saT(1)
u.c.saT(1)
u.b.scY(0,!1)
b.b=u
u.gt().h(0,new B.i7(b))
u=U.aa
t=[u]
s=U.hj(H.c([b.a,b.b],t))
s.gt().h(0,b.gjj())
b.x=s
s=b.b
p=new U.cT()
p.c=V.cj()
p.d=0
if(null!=s){p.a=s
s.gt().h(0,p.gaD())
u=new D.L("mover",a,p.a,[u])
u.b=!0
p.C(u)}b.y=U.hj(H.c([p,b.a,U.bK(V.lb(1,-1,1,1))],t))
u=U.bK(V.dX(-0.5,-0.5,-0.5))
s=new U.ea()
s.r=s.f=s.e=s.d=s.c=s.b=s.a=0
s.seY(-0.1)
s.seH(0,0)
s.seP(0)
p=s.d
if(!(Math.abs(p-0)<$.B().a)){s.d=0
p=new D.L("deltaYaw",p,0,[P.C])
p.b=!0
s.C(p)}p=s.e
if(!(Math.abs(p-0.1)<$.B().a)){s.e=0.1
p=new D.L("deltaPitch",p,0.1,[P.C])
p.b=!0
s.C(p)}p=s.f
if(!(Math.abs(p-0)<$.B().a)){s.f=0
p=new D.L("deltaRoll",p,0,[P.C])
p.b=!0
s.C(p)}b.z=U.hj(H.c([u,s,U.bK(V.dX(0.5,0.5,0.5)),U.bK(V.lb(0.04,-0.04,0.04,1)),U.bK(V.dX(-0.15,0.06,-0.2)),b.y],t))
u=U.hj(H.c([U.bK(V.lb(0.005,-0.005,0.005,1)),U.bK(V.dX(0,0,-0.2)),b.y],t))
b.Q=u
t=$.ad()
s=$.ah()
s=new Z.af(t.a|s.a)
o=new F.ec()
t=new F.jx(o)
t.b=!1
p=F.bo
t.sct(H.c([],[p]))
o.a=t
t=new F.iu()
t.sbo(H.c([],[F.cl]))
o.b=t
t=new F.it(o)
t.sce(H.c([],[F.bR]))
o.c=t
t=new F.is(o)
t.scb(H.c([],[F.ae]))
o.d=t
o.e=null
t=o.a
n=new V.H(-1,-1,1)
n=n.w(0,Math.sqrt(n.D(n)))
m=t.bM(new V.bU(1,2,4,6),new V.aM(1,0,0,1),new V.u(-1,-1,0),new V.T(0,1),n,s)
t=o.a
n=new V.H(1,-1,1)
n=n.w(0,Math.sqrt(n.D(n)))
l=t.bM(new V.bU(0,3,4,6),new V.aM(0,0,1,1),new V.u(1,-1,0),new V.T(1,1),n,s)
t=o.a
n=new V.H(1,1,1)
n=n.w(0,Math.sqrt(n.D(n)))
k=t.bM(new V.bU(0,2,5,6),new V.aM(0,1,0,1),new V.u(1,1,0),new V.T(1,0),n,s)
t=o.a
n=V.by()
j=new V.H(-1,1,1)
j=j.w(0,Math.sqrt(j.D(j)))
i=t.bM(new V.bU(0,2,4,7),new V.aM(1,1,0,1),new V.u(-1,1,0),n,j,s)
o.d.jp(H.c([m,l,k,i],[p]))
o.aS()
t=b.c
s=t.a
b.ch=E.cc(a,u,o,s.r)
b.cx=E.cc(a,b.z,a,a)
u=E.a1
b.sfS(H.c([],[u]))
for(p=s.d,n=p.length,h=0;h<p.length;p.length===n||(0,H.z)(p),++h){g=E.cc(a,a,a,p[h])
j=b.cx.y
f=H.v(j,0)
H.E(g,f)
e=[f]
if(H.G(j.bm(H.c([g],e)))){d=j.a
c=d.length
C.a.h(d,g)
f=H.l(H.c([g],e),"$ij",[f],"$aj")
j=j.c
if(j!=null)j.$2(c,f)}j=b.dx;(j&&C.a).h(j,g)}b.e=0
t=new B.fR(t)
t.e=$.bC()
t.sfU(H.c([],[V.bX]))
t.sfT(H.c([],[V.a4]))
t.shj(H.c([],[P.a3]))
b.r=t
s=E.cc(a,a,a,s.f)
b.cy=s
b.f=null
b.db=E.cc(H.c([b.ch,b.cx,s],[u]),a,a,a)
b.dV()},
d_:function(){var u=this.c.aV(C.j.aA(0.5),C.j.aA(0.5)),t=u==null?null:u.kx(C.j.aA(0.5),C.j.aA(0.5))
if(t==null)t=0
this.a.sY(0,new V.u(0.5,t+10,0.5))
this.a.sR(V.df())},
ir:function(a){H.h(a,"$iw")
this.d_()},
i2:function(a){H.h(a,"$iw")
if(H.G(this.d))this.a.x.sR(30)},
hJ:function(a){var u=this,t=H.G(H.t(H.h(a,"$iw"),"$ibt").c.b.c),s=u.e
if(t){if(typeof s!=="number")return s.p()
t=s-1
u.e=t
if(t<0)u.e=19}else{if(typeof s!=="number")return s.m()
t=s+1
u.e=t
if(t>=20)u.e=0}u.dV()},
hH:function(a){this.dj(H.t(H.h(a,"$iw"),"$ibt").c.a===69)},
hT:function(a){this.dj(H.t(H.h(a,"$iw"),"$ibw").x.a===2)},
dj:function(a){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.f
if((i==null?null:i.a)==null)return
u=i.a
if(a){t=C.a.l($.lQ,j.e)
i=j.f.a
s=i.gN(i)
r=j.f.b
i=$.b6()
q=r.a
if((q&i.a)>>>0!==0)if(s>=200&&s<=205)return
if(t>=200&&t<=205){i=u.gdZ()
i=i.gN(i)
if(!(i>=100&&i<=117))return}if(t===106){i=$.b5()
p=$.b4()
if((q&(i.a|p.a))>>>0!==0)t=108
else{i=$.bF()
p=$.bE()
if((q&(i.a|p.a))>>>0!==0)t=107}}else if(t===115){i=$.b5()
p=$.b4()
if((q&(i.a|p.a))>>>0!==0)t=117
else{i=$.bF()
p=$.bE()
if((q&(i.a|p.a))>>>0!==0)t=116}}i=5&q
o=i!==0?(0|5-i)>>>0:0
i=40&q
if(i!==0)o=(o|40-i)>>>0
i=320&q
u=u.ey(new V.a4(i!==0?(o|320-i)>>>0:o))
i=j.a
i=i.gY(i)
n=$.lG().bY(0,new V.H(i.a,i.b,i.c))
i=u.gcz()
q=n.a
if(typeof q!=="number")return q.m()
p=i.a
if(typeof p!=="number")return p.m()
m=$.B().a
if(p-m<q+n.d&&q-m<p+i.d){q=n.b
if(typeof q!=="number")return q.m()
p=i.b
if(typeof p!=="number")return p.m()
if(p-m<q+n.e&&q-m<p+i.e){q=n.c
if(typeof q!=="number")return q.m()
p=i.c
if(typeof p!=="number")return p.m()
i=p-m<q+n.f&&q-m<p+i.f}else i=!1}else i=!1
if(i)return}else t=0
l=u.f
if(l!=null){u.sN(0,t)
if(t===0){k=u.gdX()
i=k.gN(k)
if(i>=200&&i<=205)k.sN(0,0)}l.r=!0
i=u.a
if(i<=0){q=l.gaf(l)
if(q!=null)q.r=!0}q=u.c
if(q<=0){p=l.gaQ(l)
if(p!=null)p.r=!0}if(i>=15){i=l.gah(l)
if(i!=null)i.r=!0}if(q>=15){i=l.gaF()
if(i!=null)i.r=!0}}},
hi:function(a,b){var u,t=this,s=b.p(0,a),r=new V.H(s.a,s.b,s.c)
if(r.D(r)<100){t.r.jz($.lG(),a,r)
s=t.r.e
u=$.b6()
s=s.a
u=u.a
u=(s&u)>>>0===u
t.d=u
if(u)t.a.x.sR(0)}s=t.r.b
return s==null?b:s},
jl:function(a){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=a==null
if((h?i:a.a)!=null){u=a.a
u=u.gN(u)===0}else u=!1
if(u)return!1
t=h?i:a.a
if(t!=null){a.d
h=t.gN(t)===0||t.gN(t)===100}else h=!1
if(h)a=i
j.f=a
if(a==null)j.cy.b=!1
else{h=$.ad()
u=$.ah()
s=B.ld(i,new Z.af(h.a|u.a))
r=new V.u(t.d+t.a+0.5,t.b+0.5,t.e+t.c+0.5)
q=s.a2(0)
u=$.fs()
h=$.fx()
p=$.fy()
o=$.ft()
s.a6(q,r,u,h,p,o,$.fz(),!0,1.1)
n=$.fv()
m=$.fq()
l=$.fr()
k=$.fw()
s.a6(q,r,n,m,l,k,$.fu(),!0,1.1)
s.a6(q,r,u,m,n,h,$.lF(),!0,1.1)
s.a6(q,r,p,k,l,o,$.lH(),!0,1.1)
s.a6(q,r,h,n,k,p,$.kT(),!0,1.1)
s.a6(q,r,o,l,m,u,$.lE(),!0,1.1)
s.cJ(0,H.c([j.cy],[E.a1]))
j.cy.b=!0}return!0},
jk:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.h(a,"$iw")
u=this.y.f
t=V.me(u.W(V.e5()),u.au(new V.H(0,0,-6)))
s=t.a
r=t.d
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.d(r)
q=t.b
p=t.e
if(typeof q!=="number")return q.m()
if(typeof p!=="number")return H.d(p)
o=t.c
n=t.f
if(typeof o!=="number")return o.m()
if(typeof n!=="number")return H.d(n)
m=V.me(new V.u(s+r,q+p,o+n),new V.H(r,p,n).O(0))
n=this.c
l=new B.e0(n.aj(s,q,o),$.kU(),t,0)
for(k=0;!this.jl(l);){l=n.f1(l.a,t,m,k);++k}},
dV:function(){var u=B.ld(this.c.a,null)
u.da(null,0,0,0,C.a.l($.lQ,this.e),!1,1)
u.cJ(0,this.dx)},
sfS:function(a){this.dx=H.l(a,"$ib",[E.a1],"$ab")}}
B.i7.prototype={
$1:function(a){var u,t,s
H.h(a,"$iw")
u=this.a
t=u.a
u=V.m0(-u.b.c.d)
if(!J.V(t.z,u)){s=t.z
t.z=u
t.Q=u.bv(0)
u=new D.L("velocityRotation",s,t.z,[V.aF])
u.b=!0
t.C(u)}},
$S:9}
B.ib.prototype={
bR:function(a){var u=this
u.c=a
u.iF()
C.V.em(u.c.d,0,12288,0)
u.jh()
u.fL()
u.fJ()
u.jf()
u.fF()
u.iz()
u.fC()
u.jd()
a.cK()},
ap:function(a,b,c){var u,t,s,r,q,p,o,n=this.a,m=this.c,l=(a+m.a)*c
m=(b+m.b)*c
u=new B.aT(l,m)
t=u.m(0,$.n9().k(0,l+m))
m=Math.floor(t.a)
l=Math.floor(t.b)
s=new B.aT(m,l)
r=s.m(0,$.lI().k(0,m+l))
q=t.p(0,s)
u=new B.h9(n.a,s,u.p(0,r),q)
u.e=0
u.ao(1,0)
u.ao(0,1)
n=q.a
l=q.b
p=n+l
if(p<=1){o=1-p
if(o>n||o>l)if(n>l)u.ao(1,-1)
else u.ao(-1,1)
else u.ao(1,1)
u.ao(0,0)}else{o=2-p
if(o<n||o<l)if(n>l)u.ao(2,0)
else u.ao(0,2)
else u.ao(0,0)
u.ao(1,1)}return u.e/47*0.5+0.5},
cr:function(a,b){var u=this.b,t=(a+3)*22+(b+3)
if(t<0||t>=484)return H.e(u,t)
return u[t]},
iF:function(){var u,t,s,r,q,p=this
for(u=0,t=-3;t<19;++t)for(s=-3;s<19;++s){r=C.e.aA(Math.pow(0.6*p.ap(t,s,0.001)+0.3*p.ap(t,s,0.01)+0.1*p.ap(t,s,0.1),2)*48)
if(r>=48)r=47
q=p.b
if(u<0||u>=484)return H.e(q,u)
q[u]=r;++u}},
jh:function(){var u,t
for(u=0;u<16;++u)for(t=0;t<16;++t)this.ji(u,t)},
ji:function(a,b){var u,t,s,r,q=this.cr(a,b)
for(u=q-2,t=q<8,s=0;s<=q;++s){if(t)r=u<=s?104:103
else if(q===s)r=102
else r=u<=s?101:103
this.c.X(a,s,b,r)}},
fL:function(){var u,t
for(u=0;u<16;++u)for(t=0;t<16;++t)this.fM(u,t)},
fM:function(a,b){var u,t=this.c.cW(a,b,0)
if(t<8)for(u=8;u>t;--u)this.c.X(a,u,b,1)},
fJ:function(){var u,t
for(u=-1;u<=16;++u)for(t=-1;t<=16;++t)this.fK(u,t)},
fK:function(a,b){var u,t,s,r,q,p
if(this.cr(a,b)<8)for(u=10;u>6;--u)for(t=-1;t<=1;++t)for(s=a+t,r=-1;r<=1;++r){q=b+r
p=this.c.aj(s,u,q)
if(p===102||p===105)this.c.X(s,u,q,104)}},
jf:function(){var u,t
for(u=-3;u<19;++u)for(t=-3;t<19;++t)if(this.ap(u,t,1.5)<0.1)this.fG(u,t)},
fG:function(a,b){var u,t,s=this,r=s.c,q=a+r.a
if(q>=-30)if(q<30){r=b+r.b
r=r>=-30&&r<30}else r=!1
else r=!1
if(r)return
u=s.cr(a,b)
if(u<10)return
for(t=1;t<8;++t)s.c.X(a,u+t,b,106)
s.fH(a,b)
s.fI(a,u+8,b)},
fH:function(a,b){var u,t,s,r,q,p
for(u=-3;u<=3;++u)for(t=u*u,s=a+u,r=-3;r<=3;++r)if(t+r*r<=10)for(q=b+r,p=47;p>=0;--p)if(this.c.aj(s,p,q)===102){this.c.X(s,p,q,105)
break}},
fI:function(a,b,c){var u,t,s,r,q,p,o,n
for(u=-3;u<=3;++u)for(t=u*u,s=a+u,r=-3;r<=3;++r)for(q=t+r*r,p=b+r,o=-3;o<=3;++o)if(q+o*o<=12){n=c+o
if(this.c.aj(s,p,n)===0)this.c.X(s,p,n,114)}},
iz:function(){var u,t,s,r,q,p=this
for(u=0;u<16;++u)for(t=u-400,s=u+400,r=0;r<16;++r)if(p.ap(u,r,12.5)<0.1)p.b7(u,r,204)
else if(p.ap(s,r,12.5)<0.1)p.b7(u,r,203)
else{q=r+400
if(p.ap(u,q,12.5)<0.1)p.b7(u,r,202)
else if(p.ap(s,q,12.5)<0.15)p.b7(u,r,200)
else if(p.ap(t,r,12.5)<0.1)p.b7(u,r,201)
else if(p.ap(u,r-400,12.5)<0.08)p.b7(u,r,205)}},
b7:function(a,b,c){var u=this.c.cW(a,b,0),t=this.c.aj(a,u,b)
if(t!==102&&t!==105)return
this.c.X(a,u+1,b,c)},
fF:function(){var u,t,s,r,q,p,o,n,m,l,k=this.c,j=k.a
if(j+16>=-30)if(j<=30){k=k.b
k=k+16<-30||k>30}else k=!0
else k=!0
if(k)return
u=new B.id(this)
for(t=30;t>=0;t-=2){s=30-t+3
for(r=-s,k=t-1,q=r;q<=s;++q)for(p=r;p<=s;++p){u.$4(q,t,p,111)
u.$4(q,k,p,111)}for(j=r-1,o=r-2,n=s+1,m=s+2,l=-2;l<=2;++l){u.$4(j,t,l,109)
u.$4(j,k,l,109)
u.$4(o,k,l,109)
u.$4(n,t,l,109)
u.$4(n,k,l,109)
u.$4(m,k,l,109)
u.$4(l,t,j,109)
u.$4(l,k,j,109)
u.$4(l,k,o,109)
u.$4(l,t,n,109)
u.$4(l,k,n,109)
u.$4(l,k,m,109)}k=t+1
u.$4(j,k,2,109)
u.$4(o,t,2,109)
u.$4(j,k,-2,109)
u.$4(o,t,-2,109)
u.$4(n,k,2,109)
u.$4(m,t,2,109)
u.$4(n,k,-2,109)
u.$4(m,t,-2,109)
u.$4(2,k,j,109)
u.$4(2,t,o,109)
u.$4(-2,k,j,109)
u.$4(-2,t,o,109)
u.$4(2,k,n,109)
u.$4(2,t,m,109)
u.$4(-2,k,n,109)
u.$4(-2,t,m,109)}},
fC:function(){var u,t=this.c,s=t.a
if(s+16>=-36)if(s<=12){t=t.b
t=t+16<-28||t>-22}else t=!0
else t=!0
if(t)return
u=new B.ic(this,-12,40,-25)
t=[P.m]
u.$5(110,0,0,H.c([0,1,2,3,4,4,3,2,4,4,3,2,1,0],t),H.c([1,0,0,0,1,2,3,3,4,5,6,6,6,5],t))
u.$5(110,6,0,H.c([0,1,2,3,4,4,4,3,2,1,0,0,0,0,0,0],t),H.c([0,0,0,1,2,3,4,5,6,6,6,5,4,3,2,1],t))
u.$5(113,12,0,H.c([0,0,0,0,0,1,2,1,2,3,3,3,3,3],t),H.c([2,3,4,5,6,1,1,4,4,2,3,4,5,6],t))
u.$5(113,17,0,H.c([0,0,0,0,0,0,1,2,1,2,3,3,3,3],t),H.c([1,2,3,4,5,6,1,1,4,4,2,3,5,6],t))
u.$5(113,22,0,H.c([0,2,1,1,1,1,1,1],t),H.c([1,1,1,2,3,4,5,6],t))},
jd:function(){var u,t,s,r,q=this.c,p=q.a
if(p+16>=-3)if(p<=3){q=q.b
q=q+16<-3||q>3}else q=!0
else q=!0
if(q)return
u=new B.ie(this)
for(t=-3;t<=3;++t)for(s=0;s<=7;++s)for(q=2+s,r=-3;r<=3;++r)u.$4(t,q,r,0)
u.$4(0,2,0,113)
u.$4(0,3,0,112)
u.$4(0,4,0,112)
u.$4(0,5,0,112)
u.$4(0,6,0,112)},
$ilW:1}
B.id.prototype={
$4:function(a,b,c,d){var u=this.a.c
u.X(a-u.a,b,c-u.b,d)}}
B.ic.prototype={
$5:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m=this,l=[P.m]
H.l(d,"$ib",l,"$ab")
H.l(e,"$ib",l,"$ab")
for(u=d.length-1,l=m.a,t=m.b+b,s=m.c+c,r=m.d;u>=0;--u){q=l.c
if(u>=d.length)return H.e(d,u)
p=d[u]
if(typeof p!=="number")return H.d(p)
o=q.a
if(u>=e.length)return H.e(e,u)
n=e[u]
if(typeof n!=="number")return H.d(n)
q.X(t+p-o,s-n,r-q.b,a)}}}
B.ie.prototype={
$4:function(a,b,c,d){var u=this.a.c
u.X(a-u.a,b,c-u.b,d)}}
B.iv.prototype={
jx:function(a){var u,t,s
for(u=15;u>=0;--u)for(t=47;t>=-1;--t)for(s=15;s>=0;--s)this.da(a,u,t,s,a.c_(u,t,s),!1,1)},
cJ:function(a,b){var u,t,s,r
H.l(b,"$ib",[E.a1],"$ab")
for(u=b.length-1;u>=0;--u){if(u>=b.length)return H.e(b,u)
t=b[u]
s=this.c
if(u>=s.length)return H.e(s,u)
r=s[u]
if(r!=null){t.sd0(r)
t.b=r.f.length!==0}else{t.sd0(null)
t.b=!1}}this.sdR(null)},
a2:function(a){var u=this.c,t=(u&&C.a).l(u,a)
if(t==null){u=this.b
t=new F.d3(u)
t.b=u.ge4(u)
t.c=u.gbk(u)
t.d=0
t.sct(H.c([],[P.C]))
u=[P.m]
t.sbo(H.c([],u))
t.sce(H.c([],u))
t.scb(H.c([],u))
t.Q=t.z=null
u=this.c;(u&&C.a).j(u,a,t)}return t},
da:function(a,b,c,d,e,f,g){var u,t,s,r=this,q=new V.u(b,c,d)
if(a!=null){b+=a.a
d+=a.b}u=new V.u(b+0.5,c+0.5,d+0.5)
if(e===0)return
else if(e===1)r.dc(a,u,q,e,!1,g)
else if(e>=200&&e<=205)if(e===201){t=r.a.c.l(0,201)
s=J.bB(t)
r.bF(r.a2(s.l(t,0)),u,0.3141592653589793)
r.bF(r.a2(s.l(t,0)),u,1.7278759594743864)
r.bF(r.a2(s.l(t,0)),u,3.6128315516282616)
r.bF(r.a2(s.l(t,0)),u,5.026548245743669)}else if(e===205)r.fE(u)
else{t=r.a.c.l(0,e)
s=J.bB(t)
r.dg(r.a2(s.l(t,0)),u,0.39269908169872414,!0)
r.dg(r.a2(s.l(t,0)),u,1.9634954084936207,!0)}else if(e>=100&&e<=117)r.dc(a,u,q,e,!1,g)},
ba:function(a,b,c,d){var u=null,t=$.ad(),s=$.ah()
return F.ct(u,u,u,a,b,new V.T(c,d),u,new Z.af(t.a|s.a|$.as().a),0)},
a6:function(a,b,c,d,e,f,g,h,i){var u=this,t=a.br(H.c([u.ba(b.m(0,c.k(0,i)),g,0,0),u.ba(b.m(0,d.k(0,i)),g,0,1),u.ba(b.m(0,e.k(0,i)),g,1,1),u.ba(b.m(0,f.k(0,i)),g,1,0)],[F.bo])),s=t+1,r=t+2,q=t+3,p=[P.m]
a.bq(H.c([t,s,r,q],p))
if(h)a.bq(H.c([r,s,t,q],p))},
dc:function(a,b,c,d,e,f){var u=this,t=u.a.b.l(0,d)
if(u.b6(a,d,c,0,1,0))u.a6(u.a2(t.a),b,$.fs(),$.fx(),$.fy(),$.ft(),$.fz(),!1,f)
if(u.b6(a,d,c,0,-1,0))u.a6(u.a2(t.b),b,$.fv(),$.fq(),$.fr(),$.fw(),$.fu(),!1,f)
if(u.b6(a,d,c,-1,0,0))u.a6(u.a2(t.c),b,$.fs(),$.fq(),$.fv(),$.fx(),$.lF(),!1,f)
if(u.b6(a,d,c,1,0,0))u.a6(u.a2(t.d),b,$.fy(),$.fw(),$.fr(),$.ft(),$.lH(),!1,f)
if(u.b6(a,d,c,0,0,1))u.a6(u.a2(t.e),b,$.fx(),$.fv(),$.fw(),$.fy(),$.kT(),!1,f)
if(u.b6(a,d,c,0,0,-1))u.a6(u.a2(t.f),b,$.ft(),$.fr(),$.fq(),$.fs(),$.lE(),!1,f)},
b6:function(a,b,c,d,e,f){if(a==null)return!0
e+=J.kZ(c.b)
if(e<0)return!1
if(e>=48)return!0
return B.nz(b,a.c_(d+J.kZ(c.a),e,f+J.kZ(c.c)))},
dg:function(a,b,c,d){var u=Math.cos(c)*0.5,t=Math.sin(c)*0.5,s=-t,r=-u
this.a6(a,b,new V.u(u,0,s),new V.u(u,-0.5,s),new V.u(r,-0.5,t),new V.u(r,0,t),new V.H(t,0,u),!0,1)},
bF:function(a,b,c){var u=V.m0(c)
this.a6(a,b,u.W(new V.u(0.4,-0.1,-0.4)),u.W(new V.u(0,-0.5,0)),u.W(new V.u(0.4,-0.1,0.4)),u.W(new V.u(0.8,0,0)),$.fz(),!0,1)},
fE:function(b4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.a.c.l(0,205),b0=J.bB(a9),b1=a7.a2(b0.l(a9,0)),b2=a7.a2(b0.l(a9,1)),b3=a7.a2(b0.l(a9,2))
a9=[F.bo]
u=H.c([],a9)
t=H.c([],a9)
for(b0=b4.a,s=b4.b,r=b4.c,q=0;q<=2;q+=0.25){p=3.141592653589793*q
o=Math.cos(p)
n=Math.sin(p)
m=new V.aF(o,0,-n,0,1,0,n,0,o)
p=m.W(new V.u(0.07,-0.1,0))
l=p.a
if(typeof b0!=="number")return b0.m()
if(typeof l!=="number")return H.d(l)
k=p.b
if(typeof s!=="number")return s.m()
if(typeof k!=="number")return H.d(k)
p=p.c
if(typeof r!=="number")return r.m()
if(typeof p!=="number")return H.d(p)
j=$.kT()
i=m.au(j)
h=Math.abs(q-1)
g=$.ad()
f=$.ah()
C.a.h(u,F.ct(a8,a8,a8,new V.u(b0+l,s+k,r+p),i,new V.T(h,0),a8,new Z.af(g.a|f.a|$.as().a),0))
f=m.W(new V.u(0.1,-0.5,0))
g=f.a
if(typeof g!=="number")return H.d(g)
i=f.b
if(typeof i!=="number")return H.d(i)
f=f.c
if(typeof f!=="number")return H.d(f)
j=m.au(j)
p=$.ad()
k=$.ah()
C.a.h(u,F.ct(a8,a8,a8,new V.u(b0+g,s+i,r+f),j,new V.T(h,1),a8,new Z.af(p.a|k.a|$.as().a),0))
e=m.W(new V.u(0.1,-0.5,0))
d=m.W(new V.u(0.1,0,0))
k=e.a
if(typeof k!=="number")return H.d(k)
p=e.b
if(typeof p!=="number")return H.d(p)
h=e.c
if(typeof h!=="number")return H.d(h)
j=$.fu()
f=d.a
if(typeof f!=="number")return f.m()
i=d.c
if(typeof i!=="number")return i.m()
g=$.ad()
l=$.ah()
C.a.h(t,F.ct(a8,a8,a8,new V.u(b0+k,s+p,r+h),j,new V.T(f+0.5,i+0.5),a8,new Z.af(g.a|l.a|$.as().a),0))}c=b3.br(u)
b=b2.br(t)
p=P.m
b3.jq(P.dU(u.length,new B.iw(c),p))
b2.bq(P.dU(t.length,new B.ix(b),p))
a=H.c([],a9)
a0=H.c([],a9)
C.a.h(a,a7.ba(b4.m(0,new V.u(0,0.05,0)),$.fz(),0.5,0.5))
C.a.h(a0,a7.ba(b4.m(0,new V.u(0,-0.1,0)),$.fu(),0.5,0.5))
for(q=0;q<=1;q+=0.1){a9=-6.283185307179586*q
o=Math.cos(a9)
n=Math.sin(a9)
a1=new V.aF(o,0,-n,0,1,0,n,0,o)
e=a1.W(new V.u(0.4,-0.15,0))
d=a1.W(new V.u(0.5,0,0))
a9=e.a
if(typeof b0!=="number")return b0.m()
if(typeof a9!=="number")return H.d(a9)
l=e.b
if(typeof s!=="number")return s.m()
if(typeof l!=="number")return H.d(l)
k=e.c
if(typeof r!=="number")return r.m()
if(typeof k!=="number")return H.d(k)
j=d.a
if(typeof j!=="number")return j.m()
i=d.c
if(typeof i!=="number")return i.m()
h=$.ad()
g=$.ah()
C.a.h(a,F.ct(a8,a8,a8,new V.u(b0+a9,s+l,r+k),a8,new V.T(j+0.5,i+0.5),a8,new Z.af(h.a|g.a|$.as().a),0))
g=6.283185307179586*q
o=Math.cos(g)
n=Math.sin(g)
a2=new V.aF(o,0,-n,0,1,0,n,0,o)
a3=a2.W(new V.u(0.4,-0.15,0))
a4=a2.W(new V.u(0.5,0,0))
g=a3.a
if(typeof g!=="number")return H.d(g)
h=a3.b
if(typeof h!=="number")return H.d(h)
i=a3.c
if(typeof i!=="number")return H.d(i)
j=a4.a
if(typeof j!=="number")return j.m()
k=a4.c
if(typeof k!=="number")return k.m()
l=$.ad()
a9=$.ah()
C.a.h(a0,F.ct(a8,a8,a8,new V.u(b0+g,s+h,r+i),a8,new V.T(j+0.5,k+0.5),a8,new Z.af(l.a|a9.a|$.as().a),0))}a5=b1.br(a)
a6=b2.br(a0)
b1.bq(P.dU(a.length,new B.iy(a5),p))
b2.bq(P.dU(a0.length,new B.iz(a6),p))},
sdR:function(a){this.c=H.l(a,"$ib",[F.d3],"$ab")}}
B.iw.prototype={
$1:function(a){return this.a+a},
$S:5}
B.ix.prototype={
$1:function(a){return this.a+a},
$S:5}
B.iy.prototype={
$1:function(a){return this.a+a},
$S:5}
B.iz.prototype={
$1:function(a){return this.a+a},
$S:5}
B.iR.prototype={
bR:function(a){var u=this
u.a=a
u.h3()
if(u.ax(-2,1))u.j_()
if(u.ax(-1,1)){u.a4(5,9,3,7,2,11)
u.dh(6,10,4,5,1,9,1)}if(u.ax(0,1)){u.a4(2,10,6,12,10,1)
u.a4(6,10,2,1,10,12)
u.a4(2,10,10,12,10,1)
u.a4(10,10,2,1,10,12)}if(u.ax(1,1))u.iA()
if(u.ax(1,0))u.iE()
if(u.ax(1,-1))u.iy()
if(u.ax(-2,0))u.jg()
if(u.ax(-2,-1))u.hz()
if(u.ax(-2,-2))u.iH()
a.cK()},
h3:function(){var u,t,s,r,q,p,o,n=this
for(u=0;u<16;++u)for(t=u===1,s=u!==0,r=0;r<16;++r){for(q=0;q<8;++q)n.a.X(u,q,r,103)
for(q=8;q<9;++q)n.a.X(u,q,r,101)
if(!s||r===0)n.a.X(u,9,r,113)
else{p=t&&r===1
o=n.a
if(p)o.X(u,9,r,110)
else o.X(u,9,r,102)}}},
j_:function(){var u,t,s,r,q,p,o
for(u=-6;u<=6;++u)for(t=u*u,s=8+u,r=-6;r<=6;++r)for(q=t+r*r,p=17+r,o=-6;o<=6;++o)if(q+o*o<=37)this.a.X(s,p,8+o,104)},
iA:function(){var u=new B.iS(this)
u.$3(0,0,0)
u.$3(0,1,1)
u.$3(0,2,2)
u.$3(1,2,3)
u.$3(1,1,4)
u.$3(1,0,5)
u.$3(2,0,0)
u.$3(2,0,2)
u.$3(2,1,1)
u.$3(2,1,3)
u.$3(2,2,2)
u.$3(2,2,4)},
iE:function(){var u=new B.iT(this)
u.$3(0,0,1)
u.$3(0,1,2)
u.$3(0,2,3)
u.$3(0,3,4)
u.$3(1,0,2)
u.$3(1,1,3)
u.$3(1,2,4)
u.$3(1,3,5)
u.$3(2,0,5)
u.$3(2,1,4)
u.$3(2,2,3)
u.$3(2,3,2)
u.$3(3,0,4)
u.$3(3,1,3)
u.$3(3,2,2)
u.$3(3,3,1)},
iy:function(){var u,t,s
for(u=0;u<20;u+=2)for(t=2+u,s=0;s<20;s+=2)this.a4(t,10,2+s,1,8,1)},
iH:function(){var u,t,s
for(u=0;u<6;++u){t=2+u
s=16-t*2+1
this.a4(t,10+u,t,s,1,s)}},
jg:function(){var u,t,s
for(u=0;u<4;++u){t=2+u*3
s=u+2
this.a4(3,10,t,12,s,1)
this.a4(3,10+u+1,t+1,12,1,2)
this.a4(3,10,t+3,12,s,1)}},
hz:function(){var u,t,s
for(u=0;u<6;++u){t=2+u*2
s=u+2
this.a4(3,10,t,12,s,1)
this.a4(3,10+u+1,t+1,12,1,1)
this.a4(3,10,t+2,12,s,1)}},
ax:function(a,b){var u=this.a
return u.a===a*16&&u.b===b*16},
dh:function(a,b,c,d,e,f,g){var u,t,s,r,q
for(u=0;u<d;++u)for(t=a+u,s=0;s<e;++s)for(r=b+s,q=0;q<f;++q)this.a.X(t,r,c+q,g)},
a4:function(a,b,c,d,e,f){return this.dh(a,b,c,d,e,f,109)},
$ilW:1}
B.iS.prototype={
$3:function(a,b,c){return this.a.a4(2+4*a,10+c,2+4*b,4,1,4)}}
B.iT.prototype={
$3:function(a,b,c){return this.a.a4(2+4*a,10,2+4*b,1,c,1)}}
B.eu.prototype={
fi:function(a,b){var u,t,s,r,q,p,o=this,n=[B.c8]
o.shg(H.c([],n))
o.sfY(H.c([],n))
o.sc8(H.c([],[E.a1]))
o.r=null
n=o.a
if(n!=null)for(n=n.d,u=n.length,t=0;t<n.length;n.length===u||(0,H.z)(n),++t){s=n[t]
C.a.h(o.e,E.cc(null,null,null,s))}for(r=0;r<140;++r){n=o.c;(n&&C.a).h(n,B.nC(o))}for(n=o.b,q=-32;q<32;q+=16)for(p=-32;p<32;p+=16)n.bR(o.eJ(q,p))},
aV:function(a,b){var u,t,s,r
for(u=this.d,t=u.length,s=0;s<t;++s){r=u[s]
if(r.a===a&&r.b===b)return r}return},
aj:function(a,b,c){var u,t,s,r=J.kY(a),q=J.kY(b),p=J.kY(c),o=r<0?r-16+1:r,n=p<0?p-16+1:p
o=C.d.a7(o,16)*16
n=C.d.a7(n,16)*16
u=this.aV(o,n)
t=r-o
s=p-n
if(t<0)t+=16
return new B.ay(t,q,s<0?s+16:s,o,n,u)},
gcm:function(){var u=this.f.y.f.W(V.e5())
return u},
kC:function(a){this.jm(this.gcm())},
f_:function(a){var u=this.gcm()
this.hd(u)
this.iJ(u)},
js:function(a){var u=this.a.x,t=u.b,s=u.e,r=s.length
t=(t+1)%r
if(t<r){u.b=t
u.c=H.h(s[t],"$ibY")
u=u.f
if(u!=null)u.e6()}},
eJ:function(a,b){var u,t=this.c
if(0>=t.length)return H.e(t,-1)
u=t.pop()
u.a=a
u.b=b
u.x=u.f=!0
u.saK(!1)
C.a.h(this.d,u)
return u},
jH:function(a){var u=C.a.V(this.d,a)
if(u){a.f=!1
a.saK(!1)
a.x=!0
a.r=!1
u=this.c;(u&&C.a).h(u,a)
return!0}return!1},
jm:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.aj(a.a,a.b,a.c),e=f.f
if(g.r!=e){g.r=e
e=f.d
u=e-128
t=e+128
s=f.e
r=s-128
q=s+128
for(p=g.d.length-1;p>=0;--p){o=g.d
if(p>=o.length)return H.e(o,p)
n=o[p]
o=n.a
if(u<=o)if(t>o){o=n.b
o=r>o||q<=o}else o=!0
else o=!0
if(o)g.jH(n)}m=e-64
l=e+64
k=s-64
j=s+64
for(i=m;i<l;i+=16)for(h=k;h<j;h+=16)if(g.aV(i,h)==null)g.eJ(i,h)}},
hd:function(a){var u,t,s,r,q,p,o,n,m,l,k=a.a
if(typeof k!=="number")return k.p()
u=k-8
k=a.c
if(typeof k!=="number")return k.p()
t=k-8
for(k=this.d,s=k.length,r=null,q=1e-9,p=0;p<s;++p){o=k[p]
if(o.x){n=o.a-u
m=o.b-t
l=n*n+m*m
if(r==null||q>l){q=l
r=o}}}if(r!=null)this.b.bR(r)},
iJ:function(a){var u,t,s,r,q,p,o,n,m,l,k=a.a
if(typeof k!=="number")return k.p()
u=k-8
k=a.c
if(typeof k!=="number")return k.p()
t=k-8
for(k=this.d,s=k.length,r=null,q=1e-9,p=0;p<s;++p){o=k[p]
if(o.f&&!o.x){n=o.a-u
m=o.b-t
l=n*n+m*m
if(r==null||q>l){q=l
r=o}}}if(r!=null){r.f=!1
r.r=!0}},
f1:function(a,b,c,d){var u,t=a.gcz().kk(c)
if(t==null)return
else{u=t.d
a=a.ey(u)}if(a==null)return
return new B.e0(a,u,b,d)},
ai:function(a,b){var u,t,s,r,q,p,o,n,m
H.h(b,"$iw")
u=this.f.y.f
t=u.W(V.e5())
s=u.W(new V.u(0,0,-16))
r=new V.T(t.a,t.c)
q=new V.T(s.a,s.c)
for(p=this.d,o=p.length,n=0;n<p.length;p.length===o||(0,H.z)(p),++n){m=p[n]
m.kz()
m.kA(r,q)}},
shg:function(a){this.c=H.l(a,"$ib",[B.c8],"$ab")},
sfY:function(a){this.d=H.l(a,"$ib",[B.c8],"$ab")},
sc8:function(a){this.e=H.l(a,"$ib",[E.a1],"$ab")}};(function aliases(){var u=J.a.prototype
u.f7=u.i
u=J.dP.prototype
u.f8=u.i
u=O.cU.prototype
u.d2=u.aN
u=O.bh.prototype
u.d3=u.aN
u=V.dW.prototype
u.f9=u.bg
u.d1=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i,n=hunkHelpers._instance_1i
u(P,"pk","ou",13)
u(P,"pl","ov",13)
u(P,"pm","ow",13)
t(P,"mQ","pi",3)
var m
s(m=E.a1.prototype,"gbV",0,0,null,["$1","$0"],["eD","k9"],1,0)
s(m,"geE",0,0,null,["$1","$0"],["eF","ka"],1,0)
s(m,"geB",0,0,null,["$1","$0"],["eC","k8"],1,0)
s(m,"gez",0,0,null,["$1","$0"],["eA","k5"],1,0)
r(m,"gk_","k0",6)
r(m,"gk6","k7",6)
s(m=E.ei.prototype,"gd4",0,0,null,["$1","$0"],["d6","d5"],1,0)
q(m,"gko","eO",3)
p(m=X.dQ.prototype,"gfm","fn",30)
r(m,"gfk","fl",23)
r(m,"gfo","fp",23)
p(m,"gc3","c4",0)
p(m,"gck","cl",0)
p(m=X.ep.prototype,"gi_","i0",14)
p(m,"ghK","hL",14)
p(m,"ghU","hV",4)
p(m,"gck","cl",21)
p(m,"gc3","c4",21)
p(m,"gi7","i8",4)
p(m,"gib","ic",4)
p(m,"ghY","hZ",4)
p(m,"gi9","ia",4)
p(m,"ghW","hX",4)
p(m,"gie","ig",36)
p(m,"gih","ii",14)
p(m,"giw","ix",12)
p(m,"gis","it",12)
p(m,"giu","iv",12)
s(D.bL.prototype,"ghM",0,0,null,["$1","$0"],["aM","hN"],1,0)
s(m=D.dR.prototype,"gdI",0,0,null,["$1","$0"],["dJ","i5"],1,0)
p(m,"gij","ik",38)
r(m,"ghA","hB",18)
r(m,"gio","ip",18)
o(V.a2.prototype,"gn","cO",17)
o(V.H.prototype,"gn","cO",17)
s(m=U.cR.prototype,"gaD",0,0,null,["$1","$0"],["C","ad"],1,0)
r(m,"gft","fu",16)
r(m,"gil","im",16)
s(U.cT.prototype,"gaD",0,0,null,["$1","$0"],["C","ad"],1,0)
s(m=U.eq.prototype,"gaD",0,0,null,["$1","$0"],["C","ad"],1,0)
p(m,"ght","hu",0)
p(m,"ghv","hw",0)
p(m,"ghx","hy",0)
p(m,"ghn","ho",0)
p(m,"ghp","hq",0)
p(m,"gjb","jc",0)
p(m,"gj9","ja",0)
p(m,"gj7","j8",0)
s(m=U.er.prototype,"gaD",0,0,null,["$1","$0"],["C","ad"],1,0)
p(m,"gi3","i4",0)
s(m=M.dJ.prototype,"gb3",0,0,null,["$1","$0"],["b4","fv"],1,0)
r(m,"ghO","hP",6)
r(m,"ghQ","hR",6)
s(m=O.ci.prototype,"gbE",0,0,null,["$1","$0"],["a3","c5"],1,0)
s(m,"giP",0,0,null,["$1","$0"],["dN","iQ"],1,0)
r(m,"ghC","hD",22)
r(m,"ghE","hF",22)
s(O.cU.prototype,"gbE",0,0,null,["$1","$0"],["a3","c5"],1,0)
s(X.e2.prototype,"gd8",0,0,null,["$1","$0"],["b5","fA"],1,0)
t(B,"pC","pI",3)
p(m=B.e3.prototype,"giq","ir",0)
p(m,"gi1","i2",0)
p(m,"ghI","hJ",0)
p(m,"ghG","hH",0)
p(m,"ghS","hT",0)
r(m,"ghh","hi",50)
p(m,"gjj","jk",0)
p(m=B.eu.prototype,"gkB","kC",11)
p(m,"geZ","f_",11)
p(m,"gjr","js",11)
n(m,"gky","ai",0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.P,null)
s(P.P,[H.l7,J.a,J.av,P.eL,P.j,H.dT,P.bc,H.ce,H.de,H.fU,H.j7,P.bM,H.cM,H.f1,P.ao,H.hs,H.ht,H.ho,P.f7,P.bq,P.aJ,P.ev,P.iL,P.d7,P.iM,P.bl,P.at,P.kt,P.kd,P.di,P.eK,P.x,P.km,P.hz,P.c9,P.ks,P.kr,P.a3,P.az,P.ac,P.aO,P.i5,P.ef,P.eD,P.hh,P.b,P.y,P.N,P.aw,P.k,P.a8,P.cu,P.jl,P.ke,W.fX,W.F,W.dL,P.kg,P.fc,P.k4,P.k8,P.Q,L.i4,B.h9,B.aT,O.a0,O.cV,E.fM,E.a1,E.ii,D.w,E.ei,Z.es,Z.jG,Z.cK,Z.aQ,Z.af,D.fP,D.cd,X.dB,X.an,X.hq,X.hw,X.bv,X.hW,X.j3,X.ep,D.bL,D.aj,D.e4,D.ee,V.a9,V.aM,V.h8,V.a4,V.cg,V.hm,V.aF,V.au,V.T,V.u,V.bU,V.e8,V.e9,V.bX,V.a2,V.H,U.cT,U.eq,U.er,M.dJ,A.dz,A.fF,A.ai,A.aN,A.aU,A.aY,A.hF,A.cp,A.cq,A.cs,A.el,A.jf,F.ae,F.bR,F.cl,F.d3,F.ec,F.is,F.it,F.iu,F.bo,F.jx,F.jy,F.jB,F.jC,O.co,O.cU,O.hG,T.iY,V.fB,V.bu,V.dW,V.ir,V.d6,V.ej,V.da,V.j2,X.dC,X.eg,X.e2,V.iA,B.ay,B.fQ,B.c8,B.fR,B.Z,B.hP,B.e0,B.e3,B.ib,B.iv,B.iR,B.eu])
s(J.a,[J.hn,J.dO,J.dP,J.bd,J.ch,J.bP,H.cY,H.bS,W.n,W.fA,W.c6,W.cL,W.ba,W.bb,W.S,W.ex,W.h0,W.h1,W.ez,W.dI,W.eB,W.h3,W.o,W.eE,W.aP,W.hk,W.eG,W.bs,W.hv,W.hQ,W.eM,W.eN,W.aR,W.eO,W.eR,W.aS,W.eV,W.eX,W.aW,W.eY,W.aX,W.f2,W.aG,W.f5,W.j0,W.b_,W.f8,W.j5,W.jq,W.ff,W.fh,W.fj,W.fl,W.fn,P.bg,P.eI,P.bj,P.eT,P.ia,P.f3,P.bm,P.fa,P.fG,P.ew,P.dA,P.e7,P.cn,P.eb,P.eh,P.em,P.f_])
s(J.dP,[J.i6,J.c_,J.bQ])
t(J.l6,J.bd)
s(J.ch,[J.dN,J.dM])
t(P.hu,P.eL)
s(P.hu,[H.en,W.jP,W.jO,P.hd])
t(H.a7,H.en)
s(P.j,[H.h6,H.hA,H.jH])
s(P.bc,[H.hB,H.jI])
t(H.fV,H.fU)
s(P.bM,[H.i1,H.hp,H.jj,H.j9,H.fO,H.ip,P.fE,P.e1,P.b8,P.jk,P.jh,P.iG,P.fT,P.h_])
s(H.cM,[H.kR,H.iQ,H.kJ,H.kK,H.kL,P.jL,P.jK,P.jM,P.jN,P.kl,P.kk,P.jV,P.jZ,P.jW,P.jX,P.jY,P.k1,P.k2,P.k0,P.k_,P.iN,P.iO,P.kB,P.kb,P.ka,P.kc,P.hy,P.h4,P.h5,P.jp,P.jm,P.jn,P.jo,P.kn,P.ko,P.kq,P.kp,P.kv,P.ku,P.kw,P.kx,W.hS,W.hU,W.io,W.iK,W.jU,P.ki,P.kD,P.he,P.hf,P.fI,E.ij,E.ik,E.il,E.j_,D.ha,D.hb,F.jE,F.jD,F.jz,F.jA,O.hJ,O.hK,O.hL,O.hM,O.hN,O.hO,T.iZ,V.iC,V.iB,B.kP,B.i7,B.id,B.ic,B.ie,B.iw,B.ix,B.iy,B.iz,B.iS,B.iT])
s(H.iQ,[H.iI,H.cI])
t(H.jJ,P.fE)
t(P.hx,P.ao)
t(H.X,P.hx)
t(H.dS,H.h6)
t(H.dY,H.bS)
s(H.dY,[H.dj,H.dl])
t(H.dk,H.dj)
t(H.cZ,H.dk)
t(H.dm,H.dl)
t(H.dZ,H.dm)
s(H.dZ,[H.hX,H.hY,H.hZ,H.i_,H.i0,H.e_,H.ck])
t(P.k9,P.kt)
t(P.k7,P.kd)
t(P.fd,P.hz)
t(P.eo,P.fd)
s(P.c9,[P.fK,P.h7])
t(P.cb,P.iM)
s(P.cb,[P.fL,P.jt,P.js])
t(P.jr,P.h7)
s(P.ac,[P.C,P.m])
s(P.b8,[P.bV,P.hl])
t(P.jR,P.cu)
s(W.n,[W.K,W.hc,W.cW,W.aV,W.dn,W.aZ,W.aH,W.dq,W.jF,W.dg,P.fJ,P.c5])
s(W.K,[W.a5,W.bJ])
s(W.a5,[W.r,P.q])
s(W.r,[W.fC,W.fD,W.c7,W.dG,W.hg,W.cS,W.iq])
s(W.ba,[W.cN,W.fY,W.fZ])
t(W.fW,W.bb)
t(W.cO,W.ex)
t(W.eA,W.ez)
t(W.dH,W.eA)
t(W.eC,W.eB)
t(W.h2,W.eC)
t(W.aE,W.c6)
t(W.eF,W.eE)
t(W.cP,W.eF)
t(W.eH,W.eG)
t(W.cf,W.eH)
t(W.bZ,W.o)
s(W.bZ,[W.bf,W.ak,W.b0])
t(W.hR,W.eM)
t(W.hT,W.eN)
t(W.eP,W.eO)
t(W.hV,W.eP)
t(W.eS,W.eR)
t(W.d_,W.eS)
t(W.eW,W.eV)
t(W.i8,W.eW)
t(W.im,W.eX)
t(W.dp,W.dn)
t(W.iD,W.dp)
t(W.eZ,W.eY)
t(W.iE,W.eZ)
t(W.iJ,W.f2)
t(W.f6,W.f5)
t(W.iU,W.f6)
t(W.dr,W.dq)
t(W.iV,W.dr)
t(W.f9,W.f8)
t(W.j4,W.f9)
t(W.bp,W.ak)
t(W.fg,W.ff)
t(W.jQ,W.fg)
t(W.ey,W.dI)
t(W.fi,W.fh)
t(W.k3,W.fi)
t(W.fk,W.fj)
t(W.eQ,W.fk)
t(W.fm,W.fl)
t(W.kf,W.fm)
t(W.fo,W.fn)
t(W.kj,W.fo)
t(W.jS,P.iL)
t(W.ll,W.jS)
t(W.jT,P.d7)
t(P.kh,P.kg)
t(P.ap,P.k8)
t(P.eJ,P.eI)
t(P.hr,P.eJ)
t(P.eU,P.eT)
t(P.i2,P.eU)
t(P.f4,P.f3)
t(P.iP,P.f4)
t(P.fb,P.fa)
t(P.j6,P.fb)
t(P.fH,P.ew)
t(P.i3,P.c5)
t(P.f0,P.f_)
t(P.iF,P.f0)
s(D.w,[E.iH,D.bN,D.bO,D.L,X.bt,X.i9])
s(E.fM,[Z.bI,A.d4,T.d9])
s(O.a0,[X.dQ,D.dR,U.cR])
s(X.i9,[X.dV,X.bw,X.ek])
s(D.fP,[U.fS,U.aa,F.d5])
s(U.aa,[U.dE,U.ea])
t(A.hC,A.d4)
s(A.el,[A.aI,A.jc,A.jd,A.je,A.ja,A.am,A.jb,A.Y,A.dc,A.jg,A.dd,A.aB,A.ar,A.cr])
t(O.ci,O.co)
s(O.cU,[O.hD,O.hE,O.bh])
s(O.bh,[O.hH,O.hI])
t(T.bY,T.d9)
s(T.bY,[T.iW,T.iX])
s(V.dW,[V.bx,V.db])
t(X.hi,X.eg)
u(H.en,H.de)
u(H.dj,P.x)
u(H.dk,H.ce)
u(H.dl,P.x)
u(H.dm,H.ce)
u(P.eL,P.x)
u(P.fd,P.km)
u(W.ex,W.fX)
u(W.ez,P.x)
u(W.eA,W.F)
u(W.eB,P.x)
u(W.eC,W.F)
u(W.eE,P.x)
u(W.eF,W.F)
u(W.eG,P.x)
u(W.eH,W.F)
u(W.eM,P.ao)
u(W.eN,P.ao)
u(W.eO,P.x)
u(W.eP,W.F)
u(W.eR,P.x)
u(W.eS,W.F)
u(W.eV,P.x)
u(W.eW,W.F)
u(W.eX,P.ao)
u(W.dn,P.x)
u(W.dp,W.F)
u(W.eY,P.x)
u(W.eZ,W.F)
u(W.f2,P.ao)
u(W.f5,P.x)
u(W.f6,W.F)
u(W.dq,P.x)
u(W.dr,W.F)
u(W.f8,P.x)
u(W.f9,W.F)
u(W.ff,P.x)
u(W.fg,W.F)
u(W.fh,P.x)
u(W.fi,W.F)
u(W.fj,P.x)
u(W.fk,W.F)
u(W.fl,P.x)
u(W.fm,W.F)
u(W.fn,P.x)
u(W.fo,W.F)
u(P.eI,P.x)
u(P.eJ,W.F)
u(P.eT,P.x)
u(P.eU,W.F)
u(P.f3,P.x)
u(P.f4,W.F)
u(P.fa,P.x)
u(P.fb,W.F)
u(P.ew,P.ao)
u(P.f_,P.x)
u(P.f0,W.F)})()
var v={mangledGlobalNames:{m:"int",C:"double",ac:"num",k:"String",a3:"bool",N:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,args:[D.w]},{func:1,ret:-1,opt:[D.w]},{func:1,ret:P.N},{func:1,ret:-1},{func:1,ret:-1,args:[W.ak]},{func:1,ret:P.m,args:[P.m]},{func:1,ret:-1,args:[P.m,[P.j,E.a1]]},{func:1,ret:P.N,args:[F.ae]},{func:1,ret:-1,args:[P.k,,]},{func:1,ret:P.N,args:[D.w]},{func:1,ret:P.N,args:[,,]},{func:1,ret:-1,args:[,]},{func:1,ret:-1,args:[W.b0]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.o]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:-1,args:[P.m,[P.j,U.aa]]},{func:1,ret:P.C},{func:1,ret:-1,args:[P.m,[P.j,D.aj]]},{func:1,args:[,]},{func:1,ret:P.N,args:[,]},{func:1,ret:-1,args:[W.bf]},{func:1,ret:-1,args:[P.m,[P.j,V.au]]},{func:1,ret:-1,args:[P.m,[P.j,X.an]]},{func:1,ret:P.N,args:[{func:1,ret:-1,args:[D.w]}]},{func:1,ret:P.N,args:[W.o]},{func:1,ret:P.k,args:[P.m]},{func:1,ret:-1,args:[P.k,P.k]},{func:1,ret:P.N,args:[P.ac]},{func:1,ret:P.a3,args:[W.K]},{func:1,ret:P.a3,args:[[P.j,X.an]]},{func:1,args:[W.o]},{func:1,ret:P.Q,args:[,,]},{func:1,ret:P.Q,args:[P.m]},{func:1,ret:P.N,args:[P.k,,]},{func:1,ret:P.k,args:[P.k]},{func:1,ret:-1,args:[W.bp]},{func:1,ret:P.N,args:[P.k]},{func:1,ret:P.a3,args:[[P.j,D.aj]]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:-1,args:[P.k],opt:[,]},{func:1,ret:-1,args:[P.k,P.m]},{func:1,ret:[P.y,P.k,P.k],args:[[P.y,P.k,P.k],P.k]},{func:1,ret:[P.aJ,,],args:[,]},{func:1,ret:P.N,args:[,],opt:[P.aw]},{func:1,ret:P.m,args:[A.aN,A.aN]},{func:1,ret:P.m,args:[A.aU,A.aU]},{func:1,ret:P.m,args:[A.aY,A.aY]},{func:1,ret:P.N,args:[{func:1,ret:-1}]},{func:1,ret:P.N,args:[P.bl]},{func:1,ret:V.u,args:[V.u,V.u]},{func:1,args:[P.k]},{func:1,args:[,P.k]},{func:1,ret:W.a5,args:[W.K]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.k=W.c7.prototype
C.P=J.a.prototype
C.a=J.bd.prototype
C.j=J.dM.prototype
C.d=J.dN.prototype
C.m=J.dO.prototype
C.e=J.ch.prototype
C.b=J.bP.prototype
C.Q=J.bQ.prototype
C.V=H.ck.prototype
C.W=W.d_.prototype
C.y=J.i6.prototype
C.c=P.cn.prototype
C.q=J.c_.prototype
C.z=W.bp.prototype
C.A=W.dg.prototype
C.X=new P.fL()
C.B=new P.fK()
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

C.I=new P.i5()
C.h=new P.jr()
C.J=new P.jt()
C.K=new P.k4()
C.f=new P.k9()
C.l=new P.aO(0)
C.L=new P.aO(25e4)
C.M=new P.aO(5e6)
C.N=new P.aO(7e4)
C.O=new P.aO(75e4)
C.u=H.c(u([127,2047,65535,1114111]),[P.m])
C.n=H.c(u([0,0,32776,33792,1,10240,0,0]),[P.m])
C.o=H.c(u([0,0,65490,45055,65535,34815,65534,18431]),[P.m])
C.p=H.c(u([0,0,26624,1023,65534,2047,65534,2047]),[P.m])
C.S=H.c(u([0,0,32722,12287,65534,34815,65534,18431]),[P.m])
C.v=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.m])
C.i=H.c(u([0,0,24576,1023,65534,34815,65534,18431]),[P.m])
C.w=H.c(u([0,0,32754,11263,65534,34815,65534,18431]),[P.m])
C.T=H.c(u([0,0,32722,12287,65535,34815,65534,18431]),[P.m])
C.x=H.c(u([0,0,65490,12287,65535,34815,65534,18431]),[P.m])
C.R=H.c(u([]),[P.k])
C.U=new H.fV(0,{},C.R,[P.k,P.k])})();(function staticFields(){$.b9=0
$.cJ=null
$.lR=null
$.lr=!1
$.mW=null
$.mO=null
$.n2=null
$.kE=null
$.kM=null
$.lA=null
$.cx=null
$.dt=null
$.du=null
$.ls=!1
$.a_=C.f
$.ax=[]
$.m1=null
$.m5=null
$.m9=null
$.d0=null
$.mf=null
$.mp=null
$.mu=null
$.mt=null
$.ju=null
$.jv=null
$.mr=null
$.jw=null
$.ms=null
$.m8=null
$.lQ=H.c([101,102,103,104,105,106,115,109,110,111,112,113,1,114,200,201,202,203,204,205],[P.m])})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"q5","n7",function(){return H.mV("_$dart_dartClosure")})
u($,"qm","lM",function(){return H.mV("_$dart_js")})
u($,"qq","nc",function(){return H.bn(H.j8({
toString:function(){return"$receiver$"}}))})
u($,"qr","nd",function(){return H.bn(H.j8({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"qs","ne",function(){return H.bn(H.j8(null))})
u($,"qt","nf",function(){return H.bn(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"qw","ni",function(){return H.bn(H.j8(void 0))})
u($,"qx","nj",function(){return H.bn(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"qv","nh",function(){return H.bn(H.mk(null))})
u($,"qu","ng",function(){return H.bn(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"qz","nl",function(){return H.bn(H.mk(void 0))})
u($,"qy","nk",function(){return H.bn(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"qO","lN",function(){return P.ot()})
u($,"qB","nm",function(){return P.op()})
u($,"qP","np",function(){return H.nX(H.cw(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))})
u($,"qQ","nq",function(){return P.oc("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"qR","nr",function(){return P.oR()})
u($,"q6","n8",function(){return H.c([B.bk(5,2),B.bk(2,5),B.bk(-5,2),B.bk(-2,5),B.bk(5,-2),B.bk(2,-5),B.bk(-5,-2),B.bk(-2,-5)],[B.aT])})
u($,"q8","n9",function(){return B.bk(-0.211324865405187,-0.211324865405187)})
u($,"q7","lI",function(){return B.bk(0.366025403784439,0.366025403784439)})
u($,"qH","no",function(){return Z.b2(0)})
u($,"qJ","ad",function(){return Z.b2(1)})
u($,"qI","as",function(){return Z.b2(2)})
u($,"qD","bH",function(){return Z.b2(4)})
u($,"qK","ah",function(){return Z.b2(8)})
u($,"qL","c2",function(){return Z.b2(16)})
u($,"qE","dv",function(){return Z.b2(32)})
u($,"qF","dw",function(){return Z.b2(64)})
u($,"qG","nn",function(){return Z.b2(96)})
u($,"qM","cH",function(){return Z.b2(128)})
u($,"qC","bG",function(){return Z.b2(256)})
u($,"pQ","n6",function(){return new V.h8(1e-9)})
u($,"pP","B",function(){return $.n6()})
u($,"qc","bC",function(){return V.aA(0)})
u($,"q9","lJ",function(){return V.aA(511)})
u($,"qf","b5",function(){return V.aA(1)})
u($,"qd","lK",function(){return V.aA(2)})
u($,"qe","b4",function(){return V.aA(4)})
u($,"qi","b6",function(){return V.aA(8)})
u($,"qg","lL",function(){return V.aA(16)})
u($,"qh","bD",function(){return V.aA(32)})
u($,"ql","bF",function(){return V.aA(64)})
u($,"qj","nb",function(){return V.aA(128)})
u($,"qk","bE",function(){return V.aA(256)})
u($,"qb","kU",function(){return V.aA(146)})
u($,"qa","na",function(){return V.aA(365)})
u($,"q2","lG",function(){return V.ih(-0.25,-1.5,-0.25,0.5,1.9,0.5)})
u($,"q4","fz",function(){return V.lj()})
u($,"pW","fu",function(){var t=$.mr
return t==null?$.mr=V.mq(0,-1,0):t})
u($,"q1","lF",function(){var t=$.mt
return t==null?$.mt=V.mq(1,0,0):t})
u($,"q3","lH",function(){return V.mv()})
u($,"pZ","kT",function(){return V.lk()})
u($,"pT","lE",function(){return V.mw()})
u($,"q_","fx",function(){return V.bT(-0.5,0.5,0.5)})
u($,"q0","fy",function(){return V.bT(0.5,0.5,0.5)})
u($,"pX","fv",function(){return V.bT(-0.5,-0.5,0.5)})
u($,"pY","fw",function(){return V.bT(0.5,-0.5,0.5)})
u($,"pU","fs",function(){return V.bT(-0.5,0.5,-0.5)})
u($,"pV","ft",function(){return V.bT(0.5,0.5,-0.5)})
u($,"pR","fq",function(){return V.bT(-0.5,-0.5,-0.5)})
u($,"pS","fr",function(){return V.bT(0.5,-0.5,-0.5)})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cY,DataView:H.bS,ArrayBufferView:H.bS,Float32Array:H.cZ,Float64Array:H.cZ,Int16Array:H.hX,Int32Array:H.hY,Int8Array:H.hZ,Uint16Array:H.i_,Uint32Array:H.i0,Uint8ClampedArray:H.e_,CanvasPixelArray:H.e_,Uint8Array:H.ck,HTMLAudioElement:W.r,HTMLBRElement:W.r,HTMLBaseElement:W.r,HTMLBodyElement:W.r,HTMLButtonElement:W.r,HTMLContentElement:W.r,HTMLDListElement:W.r,HTMLDataElement:W.r,HTMLDataListElement:W.r,HTMLDetailsElement:W.r,HTMLDialogElement:W.r,HTMLEmbedElement:W.r,HTMLFieldSetElement:W.r,HTMLHRElement:W.r,HTMLHeadElement:W.r,HTMLHeadingElement:W.r,HTMLHtmlElement:W.r,HTMLIFrameElement:W.r,HTMLInputElement:W.r,HTMLLIElement:W.r,HTMLLabelElement:W.r,HTMLLegendElement:W.r,HTMLLinkElement:W.r,HTMLMapElement:W.r,HTMLMediaElement:W.r,HTMLMenuElement:W.r,HTMLMetaElement:W.r,HTMLMeterElement:W.r,HTMLModElement:W.r,HTMLOListElement:W.r,HTMLObjectElement:W.r,HTMLOptGroupElement:W.r,HTMLOptionElement:W.r,HTMLOutputElement:W.r,HTMLParagraphElement:W.r,HTMLParamElement:W.r,HTMLPictureElement:W.r,HTMLPreElement:W.r,HTMLProgressElement:W.r,HTMLQuoteElement:W.r,HTMLScriptElement:W.r,HTMLShadowElement:W.r,HTMLSlotElement:W.r,HTMLSourceElement:W.r,HTMLSpanElement:W.r,HTMLStyleElement:W.r,HTMLTableCaptionElement:W.r,HTMLTableCellElement:W.r,HTMLTableDataCellElement:W.r,HTMLTableHeaderCellElement:W.r,HTMLTableColElement:W.r,HTMLTableElement:W.r,HTMLTableRowElement:W.r,HTMLTableSectionElement:W.r,HTMLTemplateElement:W.r,HTMLTextAreaElement:W.r,HTMLTimeElement:W.r,HTMLTitleElement:W.r,HTMLTrackElement:W.r,HTMLUListElement:W.r,HTMLUnknownElement:W.r,HTMLVideoElement:W.r,HTMLDirectoryElement:W.r,HTMLFontElement:W.r,HTMLFrameElement:W.r,HTMLFrameSetElement:W.r,HTMLMarqueeElement:W.r,HTMLElement:W.r,AccessibleNodeList:W.fA,HTMLAnchorElement:W.fC,HTMLAreaElement:W.fD,Blob:W.c6,HTMLCanvasElement:W.c7,CanvasRenderingContext2D:W.cL,CDATASection:W.bJ,CharacterData:W.bJ,Comment:W.bJ,ProcessingInstruction:W.bJ,Text:W.bJ,CSSNumericValue:W.cN,CSSUnitValue:W.cN,CSSPerspective:W.fW,CSSCharsetRule:W.S,CSSConditionRule:W.S,CSSFontFaceRule:W.S,CSSGroupingRule:W.S,CSSImportRule:W.S,CSSKeyframeRule:W.S,MozCSSKeyframeRule:W.S,WebKitCSSKeyframeRule:W.S,CSSKeyframesRule:W.S,MozCSSKeyframesRule:W.S,WebKitCSSKeyframesRule:W.S,CSSMediaRule:W.S,CSSNamespaceRule:W.S,CSSPageRule:W.S,CSSRule:W.S,CSSStyleRule:W.S,CSSSupportsRule:W.S,CSSViewportRule:W.S,CSSStyleDeclaration:W.cO,MSStyleCSSProperties:W.cO,CSS2Properties:W.cO,CSSImageValue:W.ba,CSSKeywordValue:W.ba,CSSPositionValue:W.ba,CSSResourceValue:W.ba,CSSURLImageValue:W.ba,CSSStyleValue:W.ba,CSSMatrixComponent:W.bb,CSSRotation:W.bb,CSSScale:W.bb,CSSSkew:W.bb,CSSTranslation:W.bb,CSSTransformComponent:W.bb,CSSTransformValue:W.fY,CSSUnparsedValue:W.fZ,DataTransferItemList:W.h0,HTMLDivElement:W.dG,DOMException:W.h1,ClientRectList:W.dH,DOMRectList:W.dH,DOMRectReadOnly:W.dI,DOMStringList:W.h2,DOMTokenList:W.h3,Element:W.a5,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,ProgressEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,ResourceProgressEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.n,Accelerometer:W.n,AccessibleNode:W.n,AmbientLightSensor:W.n,Animation:W.n,ApplicationCache:W.n,DOMApplicationCache:W.n,OfflineResourceList:W.n,BackgroundFetchRegistration:W.n,BatteryManager:W.n,BroadcastChannel:W.n,CanvasCaptureMediaStreamTrack:W.n,DedicatedWorkerGlobalScope:W.n,EventSource:W.n,FileReader:W.n,FontFaceSet:W.n,Gyroscope:W.n,XMLHttpRequest:W.n,XMLHttpRequestEventTarget:W.n,XMLHttpRequestUpload:W.n,LinearAccelerationSensor:W.n,Magnetometer:W.n,MediaDevices:W.n,MediaKeySession:W.n,MediaQueryList:W.n,MediaRecorder:W.n,MediaSource:W.n,MediaStream:W.n,MediaStreamTrack:W.n,MIDIAccess:W.n,MIDIInput:W.n,MIDIOutput:W.n,MIDIPort:W.n,NetworkInformation:W.n,Notification:W.n,OffscreenCanvas:W.n,OrientationSensor:W.n,PaymentRequest:W.n,Performance:W.n,PermissionStatus:W.n,PresentationAvailability:W.n,PresentationConnection:W.n,PresentationConnectionList:W.n,PresentationRequest:W.n,RelativeOrientationSensor:W.n,RemotePlayback:W.n,RTCDataChannel:W.n,DataChannel:W.n,RTCDTMFSender:W.n,RTCPeerConnection:W.n,webkitRTCPeerConnection:W.n,mozRTCPeerConnection:W.n,ScreenOrientation:W.n,Sensor:W.n,ServiceWorker:W.n,ServiceWorkerContainer:W.n,ServiceWorkerGlobalScope:W.n,ServiceWorkerRegistration:W.n,SharedWorker:W.n,SharedWorkerGlobalScope:W.n,SpeechRecognition:W.n,SpeechSynthesis:W.n,SpeechSynthesisUtterance:W.n,VR:W.n,VRDevice:W.n,VRDisplay:W.n,VRSession:W.n,VisualViewport:W.n,WebSocket:W.n,Worker:W.n,WorkerGlobalScope:W.n,WorkerPerformance:W.n,BluetoothDevice:W.n,BluetoothRemoteGATTCharacteristic:W.n,Clipboard:W.n,MojoInterfaceInterceptor:W.n,USB:W.n,IDBDatabase:W.n,IDBOpenDBRequest:W.n,IDBVersionChangeRequest:W.n,IDBRequest:W.n,IDBTransaction:W.n,AnalyserNode:W.n,RealtimeAnalyserNode:W.n,AudioBufferSourceNode:W.n,AudioDestinationNode:W.n,AudioNode:W.n,AudioScheduledSourceNode:W.n,AudioWorkletNode:W.n,BiquadFilterNode:W.n,ChannelMergerNode:W.n,AudioChannelMerger:W.n,ChannelSplitterNode:W.n,AudioChannelSplitter:W.n,ConstantSourceNode:W.n,ConvolverNode:W.n,DelayNode:W.n,DynamicsCompressorNode:W.n,GainNode:W.n,AudioGainNode:W.n,IIRFilterNode:W.n,MediaElementAudioSourceNode:W.n,MediaStreamAudioDestinationNode:W.n,MediaStreamAudioSourceNode:W.n,OscillatorNode:W.n,Oscillator:W.n,PannerNode:W.n,AudioPannerNode:W.n,webkitAudioPannerNode:W.n,ScriptProcessorNode:W.n,JavaScriptAudioNode:W.n,StereoPannerNode:W.n,WaveShaperNode:W.n,EventTarget:W.n,File:W.aE,FileList:W.cP,FileWriter:W.hc,HTMLFormElement:W.hg,Gamepad:W.aP,History:W.hk,HTMLCollection:W.cf,HTMLFormControlsCollection:W.cf,HTMLOptionsCollection:W.cf,ImageData:W.bs,HTMLImageElement:W.cS,KeyboardEvent:W.bf,Location:W.hv,MediaList:W.hQ,MessagePort:W.cW,MIDIInputMap:W.hR,MIDIOutputMap:W.hT,MimeType:W.aR,MimeTypeArray:W.hV,PointerEvent:W.ak,MouseEvent:W.ak,DragEvent:W.ak,Document:W.K,DocumentFragment:W.K,HTMLDocument:W.K,ShadowRoot:W.K,XMLDocument:W.K,Attr:W.K,DocumentType:W.K,Node:W.K,NodeList:W.d_,RadioNodeList:W.d_,Plugin:W.aS,PluginArray:W.i8,RTCStatsReport:W.im,HTMLSelectElement:W.iq,SourceBuffer:W.aV,SourceBufferList:W.iD,SpeechGrammar:W.aW,SpeechGrammarList:W.iE,SpeechRecognitionResult:W.aX,Storage:W.iJ,CSSStyleSheet:W.aG,StyleSheet:W.aG,TextTrack:W.aZ,TextTrackCue:W.aH,VTTCue:W.aH,TextTrackCueList:W.iU,TextTrackList:W.iV,TimeRanges:W.j0,Touch:W.b_,TouchEvent:W.b0,TouchList:W.j4,TrackDefaultList:W.j5,CompositionEvent:W.bZ,FocusEvent:W.bZ,TextEvent:W.bZ,UIEvent:W.bZ,URL:W.jq,VideoTrackList:W.jF,WheelEvent:W.bp,Window:W.dg,DOMWindow:W.dg,CSSRuleList:W.jQ,ClientRect:W.ey,DOMRect:W.ey,GamepadList:W.k3,NamedNodeMap:W.eQ,MozNamedAttrMap:W.eQ,SpeechRecognitionResultList:W.kf,StyleSheetList:W.kj,SVGLength:P.bg,SVGLengthList:P.hr,SVGNumber:P.bj,SVGNumberList:P.i2,SVGPointList:P.ia,SVGStringList:P.iP,SVGAElement:P.q,SVGAnimateElement:P.q,SVGAnimateMotionElement:P.q,SVGAnimateTransformElement:P.q,SVGAnimationElement:P.q,SVGCircleElement:P.q,SVGClipPathElement:P.q,SVGDefsElement:P.q,SVGDescElement:P.q,SVGDiscardElement:P.q,SVGEllipseElement:P.q,SVGFEBlendElement:P.q,SVGFEColorMatrixElement:P.q,SVGFEComponentTransferElement:P.q,SVGFECompositeElement:P.q,SVGFEConvolveMatrixElement:P.q,SVGFEDiffuseLightingElement:P.q,SVGFEDisplacementMapElement:P.q,SVGFEDistantLightElement:P.q,SVGFEFloodElement:P.q,SVGFEFuncAElement:P.q,SVGFEFuncBElement:P.q,SVGFEFuncGElement:P.q,SVGFEFuncRElement:P.q,SVGFEGaussianBlurElement:P.q,SVGFEImageElement:P.q,SVGFEMergeElement:P.q,SVGFEMergeNodeElement:P.q,SVGFEMorphologyElement:P.q,SVGFEOffsetElement:P.q,SVGFEPointLightElement:P.q,SVGFESpecularLightingElement:P.q,SVGFESpotLightElement:P.q,SVGFETileElement:P.q,SVGFETurbulenceElement:P.q,SVGFilterElement:P.q,SVGForeignObjectElement:P.q,SVGGElement:P.q,SVGGeometryElement:P.q,SVGGraphicsElement:P.q,SVGImageElement:P.q,SVGLineElement:P.q,SVGLinearGradientElement:P.q,SVGMarkerElement:P.q,SVGMaskElement:P.q,SVGMetadataElement:P.q,SVGPathElement:P.q,SVGPatternElement:P.q,SVGPolygonElement:P.q,SVGPolylineElement:P.q,SVGRadialGradientElement:P.q,SVGRectElement:P.q,SVGScriptElement:P.q,SVGSetElement:P.q,SVGStopElement:P.q,SVGStyleElement:P.q,SVGElement:P.q,SVGSVGElement:P.q,SVGSwitchElement:P.q,SVGSymbolElement:P.q,SVGTSpanElement:P.q,SVGTextContentElement:P.q,SVGTextElement:P.q,SVGTextPathElement:P.q,SVGTextPositioningElement:P.q,SVGTitleElement:P.q,SVGUseElement:P.q,SVGViewElement:P.q,SVGGradientElement:P.q,SVGComponentTransferFunctionElement:P.q,SVGFEDropShadowElement:P.q,SVGMPathElement:P.q,SVGTransform:P.bm,SVGTransformList:P.j6,AudioBuffer:P.fG,AudioParamMap:P.fH,AudioTrackList:P.fJ,AudioContext:P.c5,webkitAudioContext:P.c5,BaseAudioContext:P.c5,OfflineAudioContext:P.i3,WebGLBuffer:P.dA,WebGLProgram:P.e7,WebGL2RenderingContext:P.cn,WebGLShader:P.eb,WebGLTexture:P.eh,WebGLUniformLocation:P.em,SQLResultSetRowList:P.iF})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dY.$nativeSuperclassTag="ArrayBufferView"
H.dj.$nativeSuperclassTag="ArrayBufferView"
H.dk.$nativeSuperclassTag="ArrayBufferView"
H.cZ.$nativeSuperclassTag="ArrayBufferView"
H.dl.$nativeSuperclassTag="ArrayBufferView"
H.dm.$nativeSuperclassTag="ArrayBufferView"
H.dZ.$nativeSuperclassTag="ArrayBufferView"
W.dn.$nativeSuperclassTag="EventTarget"
W.dp.$nativeSuperclassTag="EventTarget"
W.dq.$nativeSuperclassTag="EventTarget"
W.dr.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(B.mZ,[])
else B.mZ([])})})()
//# sourceMappingURL=main.dart.js.map
